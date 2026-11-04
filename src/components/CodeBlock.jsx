import { useMemo, useState } from 'react';

// Small, dependency-free syntax highlighter for the Web Technology subject.
// It works line by line, which keeps line numbers aligned and avoids spanning
// tokens across lines (all examples in this subject are formatted that way).

const HTML_TOKEN =
  /(<!--.*?-->|<!DOCTYPE[^>]*>|<\/?[a-zA-Z][\w-]*|"[^"]*"|'[^']*'|[a-zA-Z-]+(?==))/g;

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
  const tokens = useMemo(
    () => lines.map((line) => (language === 'css' ? tokenizeCss(line) : tokenizeHtml(line))),
    [lines, language],
  );

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
