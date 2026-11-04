// Renders the *actual* browser output of an example as a sandboxed iframe.
// Nothing is faked: the HTML/CSS shown in the code block is the same markup
// injected here, so the learner can compare code and result side by side.

const BASE_CSS = `
* { box-sizing: border-box; }
html, body { margin: 0; }
body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: #ffffff;
  color: #111111;
  padding: 14px;
  font-size: 15px;
  line-height: 1.55;
}
img { max-width: 100%; }
table { border-collapse: collapse; }
h1, h2, h3, h4, h5, h6 { margin: 0 0 8px; line-height: 1.25; color: #111; }
p { margin: 0 0 10px; }
a { color: #0047ff; }
ul, ol { margin: 0 0 10px; padding-left: 22px; }
`;

export default function OutputPreview({
  html = '',
  css = '',
  height = 200,
  label = 'Browser output',
  caption,
}) {
  const doc = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${BASE_CSS}${css || ''}</style></head><body>${html}</body></html>`;
  return (
    <figure className="output-card">
      <div className="output-head">
        <span className="output-dot" aria-hidden="true" />
        <span className="output-label">{label}</span>
        <span className="output-hint">live preview</span>
      </div>
      <iframe
        className="output-frame"
        style={{ height: `${height}px` }}
        sandbox=""
        title={label}
        srcDoc={doc}
        loading="lazy"
      />
      {caption && <figcaption className="output-caption">{caption}</figcaption>}
    </figure>
  );
}
