import { useEffect, useState } from 'react';
import { subjects } from '../data/topics';
import { oneShotNotes } from '../data/oneShotNotes';
import { Diagram } from './Diagrams';
import { Icon } from './Icons';
import { goTo } from '../utils/navigation';

// ------------------------------------------------------------------
// One Shot — last-day revision notes (Hinglish, notes style) + own sidebar
// ------------------------------------------------------------------

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

// **bold** and `code` inside a line
function renderInline(text, keyPrefix = 'i') {
  const parts = String(text).split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={`${keyPrefix}-${i}`} className="os-code">{part.slice(1, -1)}</code>;
    }
    return <span key={`${keyPrefix}-${i}`}>{part}</span>;
  });
}

// Notes body: bullet lines -> <ul>, pipe tables -> real tables, rest -> paragraphs
function NotesBody({ text }) {
  const lines = String(text || '').split('\n');
  const blocks = [];
  let bullets = [];

  const flushBullets = () => {
    if (bullets.length) {
      blocks.push({ type: 'list', items: bullets });
      bullets = [];
    }
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim()) {
      flushBullets();
      continue;
    }
    if (TABLE_ROW.test(line) && TABLE_SEP.test(lines[i + 1] || '')) {
      flushBullets();
      const header = splitRow(line);
      const rows = [];
      let j = i + 2;
      while (j < lines.length && TABLE_ROW.test(lines[j])) {
        rows.push(splitRow(lines[j]));
        j += 1;
      }
      blocks.push({ type: 'table', header, rows });
      i = j - 1;
      continue;
    }
    if (/^\s*[-•]\s+/.test(line)) {
      bullets.push(line.replace(/^\s*[-•]\s+/, ''));
      continue;
    }
    flushBullets();
    blocks.push({ type: 'para', text: line.trim() });
  }
  flushBullets();

  return (
    <div className="os-body">
      {blocks.map((block, i) => {
        if (block.type === 'table') {
          return (
            <div className="exam-table-wrap" key={`t${i}`}>
              <table className="exam-table">
                {block.header.length > 0 && (
                  <thead>
                    <tr>
                      {block.header.map((cell, j) => (
                        <th key={j}>{renderInline(cell, `th${i}-${j}`)}</th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td key={c}>{renderInline(cell, `td${i}-${r}-${c}`)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (block.type === 'list') {
          return (
            <ul className="os-list" key={`l${i}`}>
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item, `li${i}-${j}`)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p className="os-para" key={`p${i}`}>{renderInline(block.text, `p${i}`)}</p>
        );
      })}
    </div>
  );
}

// Figure with a tap-to-enlarge, zoomable view (labels are unreadable at phone width)
function NotesFigure({ type, caption }) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(2);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <figure className="qp-figure">
      <div className="qp-figure-head">
        <span className="qp-figure-tag">
          <Icon name="layers" size={13} color="#c4ff00" /> Diagram
        </span>
        <button className="qp-figure-zoom" onClick={() => setOpen(true)}>
          <Icon name="expand" size={14} color="#c4ff00" /> Enlarge
        </button>
      </div>
      <div className="qp-figure-canvas">
        <Diagram type={type} />
      </div>
      {caption && <figcaption className="qp-figure-caption">{caption}</figcaption>}

      {open && (
        <div className="qp-lightbox" role="dialog" aria-modal="true" aria-label={caption || 'Diagram'}>
          <div className="qp-lightbox-panel">
            <div className="qp-lightbox-head">
              <span className="qp-lightbox-title">{caption || 'Diagram'}</span>
              <div className="qp-lightbox-tools">
                <button onClick={() => setScale((s) => Math.max(1, +(s - 0.25).toFixed(2)))} aria-label="Zoom out">−</button>
                <span className="qp-lightbox-scale">{Math.round(scale * 100)}%</span>
                <button onClick={() => setScale((s) => Math.min(3, +(s + 0.25).toFixed(2)))} aria-label="Zoom in">+</button>
                <button className="qp-lightbox-close" onClick={() => setOpen(false)} aria-label="Close diagram">✕</button>
              </div>
            </div>
            <div className="qp-lightbox-canvas">
              <div className="qp-lightbox-inner" style={{ width: `${920 * scale}px` }}>
                <Diagram type={type} />
              </div>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
}

function subjectNotes(subjectId) {
  return oneShotNotes[subjectId] || null;
}

// ---------- Landing: pick a subject ----------
export function OneShotHome() {
  const withNotes = subjects.filter((subject) => subjectNotes(subject.id));
  return (
    <div className="os-home">
      <header className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <div className="topic-hero-badge">
            <span className="topic-hero-num">OS</span>
            <span>One Shot Revision</span>
          </div>
          <h1 className="topic-hero-title">One Shot Notes</h1>
          <p className="topic-hero-sub">
            Ek subject, paanch units, ek hi page — Hinglish mein notes format revision. Lambi theory nahi,
            sirf wahi jo exam se pehle yaad rakhna hai, diagrams ke saath.
          </p>
          <div className="topic-hero-stats">
            <span>{withNotes.length} subjects</span>
            <span>{withNotes.reduce((n, s) => n + subjectNotes(s.id).units.length, 0)} units</span>
            <span>Hinglish · notes + diagrams</span>
          </div>
        </div>
      </header>

      <main className="container qp-home-main">
        <div className="section-kicker center">Choose a Subject</div>
        <h2 className="subjects-title">One Shot Notes</h2>
        <div className="subjects-grid">
          {withNotes.map((subject) => {
            const notes = subjectNotes(subject.id);
            const minutes = notes.units.reduce((n, unit) => n + unit.minutes, 0);
            const figures = notes.units.reduce((n, unit) => n + unit.sections.filter((s) => s.diagram).length, 0);
            return (
              <article key={subject.id} className="subject-card" style={{ '--accent': subject.color }}>
                <div className="subject-card-head">
                  <span className="subject-card-icon">
                    <Icon name="book" size={30} />
                  </span>
                  <span className="subject-card-code">{notes.code}</span>
                </div>
                <h2 className="subject-card-title">{subject.name}</h2>
                <p className="subject-card-desc">{notes.blurb}</p>
                <p className="subject-progress">
                  ⚡ {notes.units.length} units · {figures} diagrams · ~{minutes} min full revision
                </p>
                <button
                  className="subject-card-cta"
                  onClick={() => goTo(`#/one-shot/${subject.id}`)}
                >
                  Start Revision <Icon name="arrow" size={16} color="#c4ff00" />
                </button>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// ---------- Subject page: one unit at a time ----------
export function OneShotPage({ subjectId, unitId, onBack }) {
  const notes = subjectNotes(subjectId);
  const subject = subjects.find((s) => s.id === subjectId);

  if (!notes) {
    return (
      <main className="container qp-missing">
        <h1>One Shot notes not ready</h1>
        <button className="btn primary" onClick={() => goTo('#/one-shot')}>Back to One Shot</button>
      </main>
    );
  }

  const unitIndex = Math.max(0, notes.units.findIndex((u) => u.id === unitId));
  const unit = notes.units[unitIndex];
  const prev = notes.units[unitIndex - 1];
  const next = notes.units[unitIndex + 1];
  const figures = unit.sections.filter((s) => s.diagram).length;
  const openUnit = (id) => goTo(`#/one-shot/${subjectId}/${id}`);

  return (
    <div className="os-page">
      <header className="topic-hero">
        <div className="topic-hero-bg" />
        <div className="container">
          <button className="back-btn" onClick={onBack}>
            <Icon name="arrow" size={18} color="#fff" /> {subject ? subject.name : 'Subject'}
          </button>
          <div className="topic-hero-badge">
            <span className="topic-hero-num">{notes.code}</span>
            <span>One Shot · Unit {unit.number}</span>
          </div>
          <h1 className="topic-hero-title">{unit.name}</h1>
          <p className="topic-hero-sub">{unit.tagline}</p>
          <div className="topic-hero-stats">
            <span>⚡ Unit {unit.number} of {notes.units.length}</span>
            <span>📖 {unit.sections.length} sections</span>
            <span>🖼️ {figures} diagrams</span>
            <span>⏱️ ~{unit.minutes} min revision</span>
          </div>
        </div>
      </header>

      {/* Unit switcher */}
      <div className="os-unitbar-wrap">
        <div className="container">
          <div className="os-unitbar">
            {notes.units.map((u) => (
              <button
                key={u.id}
                className={`os-unit-tab ${u.id === unit.id ? 'active' : ''}`}
                onClick={() => openUnit(u.id)}
              >
                <span className="os-unit-tab-num">U{u.number}</span>
                <span className="os-unit-tab-name">{u.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container os-main">
        <div className="os-note-strip">
          <Icon name="bulb" size={16} color="#ffd600" />
          <span>
            Notes format — keywords, tables aur diagrams. Pehle poora unit padho, phir
            <strong> Last minute</strong> box se final revision karo.
          </span>
        </div>

        {unit.sections.map((section, i) => (
          <section className="os-section" key={section.title}>
            <h2 className="os-section-title">
              <span className="os-section-index">{String(i + 1).padStart(2, '0')}</span>
              {section.title}
            </h2>
            <NotesBody text={section.text} />
            {section.diagram && (
              <NotesFigure type={section.diagram} caption={section.caption} />
            )}
          </section>
        ))}

        <section className="os-lastminute">
          <h3 className="os-lastminute-title">
            <Icon name="zap" size={18} color="#0a0e1a" /> Last minute revision — Unit {unit.number}
          </h3>
          <ul>
            {unit.lastMinute.map((point) => (
              <li key={point}>{renderInline(point, point)}</li>
            ))}
          </ul>
        </section>

        <nav className="os-pager">
          {prev ? (
            <button className="os-pager-btn" onClick={() => openUnit(prev.id)}>
              <span className="os-pager-dir">← Previous</span>
              <span className="os-pager-name">Unit {prev.number} · {prev.name}</span>
            </button>
          ) : (
            <span className="os-pager-btn disabled">
              <span className="os-pager-dir">← Previous</span>
              <span className="os-pager-name">Yeh pehla unit hai</span>
            </span>
          )}
          {next ? (
            <button className="os-pager-btn next" onClick={() => openUnit(next.id)}>
              <span className="os-pager-dir">Next →</span>
              <span className="os-pager-name">Unit {next.number} · {next.name}</span>
            </button>
          ) : (
            <button className="os-pager-btn next" onClick={onBack}>
              <span className="os-pager-dir">Done →</span>
              <span className="os-pager-name">Wapas {subject ? subject.name : 'subject'}</span>
            </button>
          )}
        </nav>
      </main>
    </div>
  );
}

// ---------- Sidebar for the One Shot section ----------
export function OneShotSidebar({ subjectId, unitId, onClose, mobileOpen }) {
  const [expanded, setExpanded] = useState({});
  const isOpen = (id) => (expanded[id] !== undefined ? expanded[id] : subjectId === id);

  return (
    <aside className={`sidebar ${mobileOpen ? 'active' : ''}`}>
      <div className="sidebar-header">
        <span className="brand">
          <span className="brand-dot" /> One Shot
        </span>
        <button className="sidebar-close" onClick={onClose} style={{ display: 'block' }}>✕</button>
      </div>

      <div className="sidebar-content">
        <div className="sidebar-section">
          <div className="sidebar-section-title">Revision Notes</div>
          <button className="qp-sidebar-home" onClick={() => goTo('#/one-shot')}>
            <Icon name="book" size={16} color="#c4ff00" />
            <span>All one shot notes</span>
          </button>

          {subjects.map((subject) => {
            const notes = subjectNotes(subject.id);
            const open = isOpen(subject.id);
            const active = subjectId === subject.id;
            return (
              <div key={subject.id} className={`sidebar-subject ${active ? 'active' : ''} ${open ? 'open' : ''}`}>
                <div className="sidebar-subject-row">
                  <button
                    className="sidebar-subject-btn"
                    onClick={() => {
                      if (!notes) return;
                      setExpanded((prev) => ({ ...prev, [subject.id]: !open }));
                    }}
                    title={notes ? `Units of ${subject.name}` : 'Notes coming soon'}
                  >
                    <span className={`sidebar-subject-code ${notes ? '' : 'muted'}`}>
                      {notes ? notes.units.length : '—'}
                    </span>
                    <span className="sidebar-subject-name">{subject.name}</span>
                  </button>
                  {notes && (
                    <button
                      className={`sidebar-subject-caret ${open ? 'open' : ''}`}
                      onClick={() => setExpanded((prev) => ({ ...prev, [subject.id]: !open }))}
                      aria-expanded={open}
                      aria-label={`${open ? 'Hide' : 'Show'} units of ${subject.name}`}
                    >
                      <Icon name="chevron" size={14} color={open ? '#c4ff00' : '#666'} />
                    </button>
                  )}
                </div>

                <div className={`sidebar-slide ${open ? 'open' : ''}`}>
                  <div className="sidebar-slide-inner">
                    <div className="sidebar-topics">
                      {(notes ? notes.units : []).map((u) => (
                        <button
                          key={u.id}
                          className={`sidebar-topic ${unitId === u.id ? 'active' : ''}`}
                          onClick={() => {
                            goTo(`#/one-shot/${subject.id}/${u.id}`);
                            if (onClose) onClose();
                          }}
                        >
                          <span className="sidebar-topic-num">{u.number}</span>
                          <span className="sidebar-topic-title">{u.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sidebar-footer">
        <span>Hinglish notes · diagrams included</span>
      </div>
    </aside>
  );
}
