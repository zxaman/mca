// PHP runs on the server, so a browser iframe can never execute it. This panel
// shows the stdout a PHP 8.3 interpreter produces for the code beside it, with
// the caveat stated in the header instead of pretending to be a live preview.

export default function PhpOutput({
  output = '',
  label = 'PHP output',
  hint = 'php 8.3 · server output',
  note = 'PHP server par chalti hai — browser ise execute nahi kar sakta. Ye wahi output hai jo script chalne par browser ko HTML bankar milta hai.',
  caption,
  height = 260,
}) {
  return (
    <figure className="output-card php-output-card">
      <div className="output-head">
        <span className="output-dot" aria-hidden="true" />
        <span className="output-label">{label}</span>
        <span className="output-hint">{hint}</span>
      </div>
      <pre className="php-out-pre" style={{ maxHeight: `${height}px` }}>
        {output}
      </pre>
      <p className="php-out-note">{note}</p>
      {caption && <figcaption className="output-caption">{caption}</figcaption>}
    </figure>
  );
}
