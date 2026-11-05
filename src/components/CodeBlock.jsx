import { useMemo, useState } from 'react';

// Small, dependency-free syntax highlighter for the Web Technology subject.
// It works line by line, which keeps line numbers aligned and avoids spanning
// tokens across lines (all examples in this subject are formatted that way).

const HTML_TOKEN =
  /(<!--.*?-->|<!DOCTYPE[^>]*>|<\/?[a-zA-Z][\w:-]*|"[^"]*"|'[^']*'|[a-zA-Z-]+(?==))/g;

function tokenizeHtml(line) {
  const out = [];
  let last = 0;
  let match;
  HTML_TOKEN.lastIndex = 0;
  while ((match = HTML_TOKEN.exec(line)) !== null) {
    if (match.index > last) out.push({ t: line.slice(last, match.index), c: 'plain' });
    const tok = match[0];
    if (tok.startsWith('<!--') || /^<!DOCTYPE/i.test(tok)) {
      out.push({ t: tok, c: 'comment' });
    } else if (tok.startsWith('<')) {
      const parts = tok.match(/^(<\/?)(.*)$/);
      out.push({ t: parts[1], c: 'punct' });
      out.push({ t: parts[2], c: 'tag' });
    } else if (tok.startsWith('"') || tok.startsWith("'")) {
      out.push({ t: tok, c: 'str' });
    } else {
      out.push({ t: tok, c: 'attr' });
    }
    last = match.index + tok.length;
  }
  if (last < line.length) out.push({ t: line.slice(last), c: 'plain' });
  return out.length ? out : [{ t: line || ' ', c: 'plain' }];
}

// XML is HTML-like, plus processing instructions (<?xml ?>), declarations
// (<!ELEMENT ...>) and CDATA sections.
const XML_TOKEN =
  /(<!--.*?-->|<!\[CDATA\[.*?\]\]>|<\?.*?\?>|<![A-Z]+|<\/?[a-zA-Z_][\w.:-]*|"[^"]*"|'[^']*'|[a-zA-Z_:][\w.:-]*(?==)|&[a-zA-Z#0-9]+;)/g;

function tokenizeXml(line) {
  const out = [];
  let last = 0;
  let match;
  XML_TOKEN.lastIndex = 0;
  while ((match = XML_TOKEN.exec(line)) !== null) {
    if (match.index > last) out.push({ t: line.slice(last, match.index), c: 'plain' });
    const tok = match[0];
    if (tok.startsWith('<!--')) {
      out.push({ t: tok, c: 'comment' });
    } else if (tok.startsWith('<![CDATA[')) {
      out.push({ t: tok, c: 'cdata' });
    } else if (tok.startsWith('<?')) {
      out.push({ t: tok, c: 'pi' });
    } else if (/^<![A-Z]+$/.test(tok)) {
      out.push({ t: tok, c: 'pi' });
    } else if (tok.startsWith('<')) {
      const parts = tok.match(/^(<\/?)(.*)$/);
      out.push({ t: parts[1], c: 'punct' });
      out.push({ t: parts[2], c: 'tag' });
    } else if (tok.startsWith('"') || tok.startsWith("'")) {
      out.push({ t: tok, c: 'str' });
    } else if (tok.startsWith('&')) {
      out.push({ t: tok, c: 'entity' });
    } else {
      out.push({ t: tok, c: 'attr' });
    }
    last = match.index + tok.length;
  }
  if (last < line.length) out.push({ t: line.slice(last), c: 'plain' });
  return out.length ? out : [{ t: line || ' ', c: 'plain' }];
}

// DTD files are declaration based: <!ELEMENT note (to,from)>, <!ATTLIST ... #REQUIRED>
const DTD_TOKEN =
  /(<!--.*?-->|<!ELEMENT|<!ATTLIST|<!ENTITY|<!NOTATION|#REQUIRED|#IMPLIED|#PCDATA|#FIXED|CDATA|EMPTY|ANY|"[^"]*"|'[^']*')/g;

function tokenizeDtd(line) {
  const out = [];
  let last = 0;
  let match;
  DTD_TOKEN.lastIndex = 0;
  while ((match = DTD_TOKEN.exec(line)) !== null) {
    if (match.index > last) out.push({ t: line.slice(last, match.index), c: 'plain' });
    const tok = match[0];
    let cls;
    if (tok.startsWith('<!--')) cls = 'comment';
    else if (tok.startsWith('<!')) cls = 'pi';
    else if (tok.startsWith('#')) cls = 'kw';
    else if (/^(CDATA|EMPTY|ANY)$/.test(tok)) cls = 'kw';
    else cls = 'str';
    out.push({ t: tok, c: cls });
    last = match.index + tok.length;
  }
  if (last < line.length) out.push({ t: line.slice(last), c: 'plain' });
  return out.length ? out : [{ t: line || ' ', c: 'plain' }];
}

// JavaScript: keywords, strings (incl. template literals), numbers, comments and
// library calls. `console.log(...)` gets the call name highlighted as a function.
const JS_KEYWORDS =
  'var|let|const|function|return|if|else|switch|case|break|continue|default|for|while|do|typeof|new|this|true|false|null|undefined|class|try|catch|finally|throw|in|of|instanceof|async|await|delete|void|yield';
const JS_BUILTINS =
  'console|document|window|alert|confirm|prompt|Math|Date|Number|String|Boolean|Array|Object|JSON|parseInt|parseFloat|isNaN|setTimeout|setInterval|localStorage|sessionStorage|navigator|location|history|fetch|NaN|Infinity';

const JS_TOKEN = new RegExp(
  '\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/|`[^`]*`|"[^"]*"|\'[^\']*\'|\\b\\d+(?:\\.\\d+)?\\b|\\b(?:' +
    JS_KEYWORDS +
    ')\\b|\\b(?:' +
    JS_BUILTINS +
    ')\\b|[A-Za-z_$][\\w$]*(?=\\s*\\()',
  'g',
);

function tokenizeJs(line) {
  const out = [];
  let last = 0;
  let match;
  JS_TOKEN.lastIndex = 0;
  while ((match = JS_TOKEN.exec(line)) !== null) {
    if (match.index > last) out.push({ t: line.slice(last, match.index), c: 'plain' });
    const tok = match[0];
    let cls;
    if (tok.startsWith('//') || tok.startsWith('/*')) cls = 'comment';
    else if (tok.startsWith('"') || tok.startsWith("'") || tok.startsWith('`')) cls = 'str';
    else if (/^\d/.test(tok)) cls = 'num';
    else if (new RegExp(`^(?:${JS_KEYWORDS})$`).test(tok)) cls = 'kw';
    else if (new RegExp(`^(?:${JS_BUILTINS})$`).test(tok)) cls = 'builtin';
    else cls = 'fn';
    out.push({ t: tok, c: cls });
    last = match.index + tok.length;
  }
  if (last < line.length) out.push({ t: line.slice(last), c: 'plain' });
  return out.length ? out : [{ t: line || ' ', c: 'plain' }];
}

// HTML pages that embed a <script> block: markup outside, JavaScript inside.
function tokenizeMixed(lines) {
  let inScript = false;
  return lines.map((line) => {
    if (!inScript && /<script[\s>]/i.test(line)) {
      inScript = !/<\/script>/i.test(line);
      return tokenizeHtml(line);
    }
    if (inScript) {
      if (/<\/script>/i.test(line)) {
        inScript = false;
        return tokenizeHtml(line);
      }
      const indent = line.match(/^\s*/)[0];
      const body = line.slice(indent.length);
      const toks = tokenizeJs(body);
      return indent ? [{ t: indent, c: 'plain' }, ...toks] : toks;
    }
    return tokenizeHtml(line);
  });
}

// PHP: $variables, <?php ?> tags, . concatenation, -> and => operators.
const PHP_KEYWORDS =
  'echo|print|printf|sprintf|var_dump|print_r|isset|empty|unset|if|else|elseif|endif|foreach|endforeach|for|endfor|while|endwhile|do|switch|case|break|continue|default|function|return|require|require_once|include|include_once|new|class|extends|public|private|protected|static|const|define|global|use|namespace|try|catch|finally|throw|as|and|or|xor|not|true|false|null|array|list|die|exit|match|fn';

const PHP_TOKEN = new RegExp(
  '\\/\\/[^\\n]*|#[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/|<[?]php|<[?]=|[?]>' +
    '|"[^"]*"|\'[^\']*\'|\\$[A-Za-z_]\\w*|\\b\\d+(?:\\.\\d+)?\\b' +
    '|\\b(?:' + PHP_KEYWORDS + ')\\b' +
    '|[A-Za-z_]\\w*(?=\\s*\\()|->|=>',
  'gi',
);

function tokenizePhp(line) {
  const out = [];
  let last = 0;
  let match;
  PHP_TOKEN.lastIndex = 0;
  while ((match = PHP_TOKEN.exec(line)) !== null) {
    if (match.index > last) out.push({ t: line.slice(last, match.index), c: 'plain' });
    const tok = match[0];
    let cls;
    if (tok.startsWith('//') || tok.startsWith('#') || tok.startsWith('/*')) cls = 'comment';
    else if (/^<\?/.test(tok) || tok === '?>') cls = 'pi';
    else if (tok.startsWith('"') || tok.startsWith("'")) cls = 'str';
    else if (tok.startsWith('$')) cls = 'var';
    else if (/^\d/.test(tok)) cls = 'num';
    else if (/^[A-Za-z_]/.test(tok)) cls = /^(.*)$/.test(tok) && new RegExp(`^(?:${PHP_KEYWORDS})$`, 'i').test(tok) ? 'kw' : 'fn';
    else cls = 'punct';
    out.push({ t: tok, c: cls });
    last = match.index + tok.length;
  }
  if (last < line.length) out.push({ t: line.slice(last), c: 'plain' });
  return out.length ? out : [{ t: line || ' ', c: 'plain' }];
}

// C# / ASP.NET code-behind: keywords, attributes, strings, comments.
const CS_KEYWORDS =
  'abstract|add|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|' +
  'default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|get|' +
  'goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|' +
  'override|params|private|protected|public|readonly|ref|remove|return|sbyte|sealed|set|short|sizeof|' +
  'stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|' +
  'using|var|virtual|void|volatile|while|yield';

const CS_KEYWORD_SET = new Set(CS_KEYWORDS.split('|'));

const CS_TOKEN = new RegExp(
  '\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/|@?"[^"]*"|\'[^\']*\'|\\b\\d+(?:\\.\\d+)?\\b' +
    '|\\b(?:' + CS_KEYWORDS + ')\\b|[A-Za-z_]\\w*(?=\\s*\\()',
  'g',
);

function tokenizeCsharp(line) {
  const out = [];
  let last = 0;
  let match;
  CS_TOKEN.lastIndex = 0;
  while ((match = CS_TOKEN.exec(line)) !== null) {
    if (match.index > last) out.push({ t: line.slice(last, match.index), c: 'plain' });
    const tok = match[0];
    let cls;
    if (tok.startsWith('//') || tok.startsWith('/*')) cls = 'comment';
    else if (tok.startsWith('"') || tok.startsWith('@"') || tok.startsWith("'")) cls = 'str';
    else if (/^\d/.test(tok)) cls = 'num';
    else if (CS_KEYWORD_SET.has(tok)) cls = 'kw';
    else cls = 'fn';
    out.push({ t: tok, c: cls });
    last = match.index + tok.length;
  }
  if (last < line.length) out.push({ t: line.slice(last), c: 'plain' });
  return out.length ? out : [{ t: line || ' ', c: 'plain' }];
}

function tokenizeCss(line) {
  const trimmed = line.trim();
  if (!trimmed) return [{ t: ' ', c: 'plain' }];
  if (trimmed.startsWith('/*') || trimmed.startsWith('*')) return [{ t: line, c: 'comment' }];

  const indent = line.match(/^\s*/)[0];
  const body = line.slice(indent.length);
  const out = indent ? [{ t: indent, c: 'plain' }] : [];

  if (body.startsWith('}')) {
    out.push({ t: body, c: 'punct' });
    return out;
  }
  const brace = body.indexOf('{');
  if (brace > -1) {
    out.push({ t: body.slice(0, brace), c: 'selector' });
    out.push({ t: body.slice(brace), c: 'punct' });
    return out;
  }
  const colon = body.indexOf(':');
  if (colon > -1) {
    out.push({ t: body.slice(0, colon), c: 'prop' });
    out.push({ t: ':', c: 'punct' });
    out.push({ t: body.slice(colon + 1), c: 'value' });
    return out;
  }
  out.push({ t: body, c: 'plain' });
  return out;
}

export default function CodeBlock({ code = '', language = 'html', filename, note }) {
  const [copied, setCopied] = useState(false);
  const lines = useMemo(() => code.replace(/\n$/, '').split('\n'), [code]);
  const tokens = useMemo(() => {
    const lang = String(language).toLowerCase();
    if (lang === 'php') return lines.map((line) => tokenizePhp(line));
    if (lang === 'javascript' || lang === 'js') return lines.map((line) => tokenizeJs(line));
    if (lang === 'csharp' || lang === 'c#' || lang === 'cs') return lines.map((line) => tokenizeCsharp(line));
    if (lang === 'css') return lines.map((line) => tokenizeCss(line));
    if (lang === 'dtd') return lines.map((line) => tokenizeDtd(line));
    if (['xml', 'xslt', 'xsd', 'svg'].includes(lang)) return lines.map((line) => tokenizeXml(line));
    if (lang === 'aspx' || lang === 'asp' || lang === 'html') return tokenizeMixed(lines);
    return tokenizeMixed(lines);
  }, [lines, language]);

  const copy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="code-card">
      <div className="code-head">
        <span className="code-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="code-lang">{language.toUpperCase()}</span>
        {filename && <span className="code-file">{filename}</span>}
        <button type="button" className="code-copy" onClick={copy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <div className="code-scroll">
        <div className="code-lines">
          {lines.map((line, i) => (
            <div className="code-line" key={i}>
              <span className="code-num">{i + 1}</span>
              <span className="code-text">
                {tokens[i].map((tk, j) => (
                  <span key={j} className={`tok-${tk.c}`}>
                    {tk.t}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
      {note && <p className="code-note">{note}</p>}
    </div>
  );
}
