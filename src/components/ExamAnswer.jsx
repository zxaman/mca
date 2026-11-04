// Renders a 6-mark answer:
//  · **bold** markers become <strong>
//  · markdown-ish pipe tables become real, horizontally scrollable tables
//    (they used to be printed as raw `| a | b |` text and overflowed on phones)
//  · everything else keeps its line breaks
function Inline({ text }) {
  const parts = text.split('**');
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 0 ? <span key={i}>{part}</span> : <strong key={i}>{part}</strong>,
      )}
    </>
  );
}

const TABLE_ROW = /^\s*\|.*\|\s*$/;
const TABLE_SEP = /^\s*\|[\s:|-]+\|\s*$/;

function splitRow(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function parseBlocks(text) {
  const lines = String(text || '').split('\n');
  const blocks = [];
  let buffer = [];

  const flush = () => {
    const trimmed = [...buffer];
    while (trimmed.length && !trimmed[0].trim()) trimmed.shift();
    while (trimmed.length && !trimmed[trimmed.length - 1].trim()) trimmed.pop();
    if (trimmed.length) blocks.push({ type: 'text', lines: trimmed });
    buffer = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (TABLE_ROW.test(line) && TABLE_SEP.test(lines[i + 1] || '')) {
      flush();
      const header = splitRow(line);
      const rows = [];
      let j = i + 2;
      while (j < lines.length && TABLE_ROW.test(lines[j])) {
        rows.push(splitRow(lines[j]));
        j += 1;
      }
      blocks.push({ type: 'table', header, rows });
      i = j - 1;
    } else {
      buffer.push(line);
    }
  }
  flush();
  return blocks;
}

export default function ExamAnswer({ text }) {
  const blocks = parseBlocks(text);
  return (
    <div className="exam-answer">
      {blocks.map((block, i) => {
        if (block.type === 'table') {
          return (
            <div className="exam-table-wrap" key={`t${i}`}>
              <table className="exam-table">
                {block.header.length > 0 && (
                  <thead>
                    <tr>
                      {block.header.map((cell, j) => (
                        <th key={j}><Inline text={cell} /></th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td key={c}><Inline text={cell} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <div className="exam-text" key={`p${i}`}>
            <Inline text={block.lines.join('\n')} />
          </div>
        );
      })}
    </div>
  );
}
