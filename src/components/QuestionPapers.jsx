import { useState } from 'react';
import { subjects } from '../data/topics';
import { goTo } from '../utils/navigation';
import { questionPapers } from '../data/questionPapers';
import { Diagram } from './Diagrams';
import ExamAnswer from './ExamAnswer';
import { Icon } from './Icons';

// ------------------------------------------------------------------
// Question Papers — subject boxes + a sidebar that exists ONLY here
// ------------------------------------------------------------------

function paperCount(subjectId) {
  return (questionPapers[subjectId] || []).length;
}

export function QuestionPapersHome() {
  const withPapers = subjects.filter((s) => paperCount(s.id) > 0);
  const totalPapers = withPapers.reduce((n, s) => n + paperCount(s.id), 0);
  return (
    <div className="qp-home">
      <header className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <div className="topic-hero-badge">
            <span className="topic-hero-num">QP</span>
            <span>Question Papers</span>
          </div>
          <h1 className="topic-hero-title">Question Papers</h1>
          <p className="topic-hero-sub">
            Asli exam format mein papers — jawab chhupa hua rehta hai, "Show answer" par khulta hai.
          </p>
          <div className="topic-hero-stats">
            <span>{withPapers.length} subject{withPapers.length === 1 ? '' : 's'}</span>
            <span>{totalPapers} paper{totalPapers === 1 ? '' : 's'}</span>
            <span>50 marks · 2½ hours</span>
          </div>
        </div>
      </header>

      <main className="container qp-home-main">
        <div className="section-kicker center">Choose a Subject</div>
        <h2 className="subjects-title">Paper Sets</h2>
        <div className="subjects-grid">
          {subjects.map((subject) => {
            const count = paperCount(subject.id);
            const accent = subject.color || '#0047ff';
            if (!count) {
              return (
                <article key={subject.id} className="subject-card coming-soon" style={{ '--accent': accent }}>
                  <div className="subject-card-head">
                    <span className="subject-card-icon">
                      <Icon name="quiz" size={30} color="#5a6a9e" />
                    </span>
                    <span className="subject-card-code">{subject.code}</span>
                  </div>
                  <h2 className="subject-card-title">{subject.name}</h2>
                  <p className="subject-card-desc">Question papers for this subject are being added.</p>
                  <span className="coming-soon-badge">Coming Soon</span>
                </article>
              );
            }
            return (
              <article key={subject.id} className="subject-card" style={{ '--accent': accent }}>
                <div className="subject-card-head">
                  <span className="subject-card-icon">
                    <Icon name="quiz" size={30} />
                  </span>
                  <span className="subject-card-code">{subject.code}</span>
                </div>
                <h2 className="subject-card-title">{subject.name}</h2>
                <p className="subject-card-desc">
                  {count} question paper{count === 1 ? '' : 's'} · 2020 pattern · answers hidden till you tap
                </p>
                <div className="qp-chip-row">
                  {(questionPapers[subject.id] || []).map((paper) => (
                    <button
                      key={paper.id}
                      className="qp-chip"
                      onClick={() => goTo(`#/question-papers/${subject.id}/${paper.id}`)}
                    >
                      {paper.name}
                      <span className="qp-chip-tag">{paper.tag}</span>
                    </button>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export function QuestionPapersSidebar({ subjectId, paperId, onClose, mobileOpen }) {
  const [expanded, setExpanded] = useState({});
  const isOpen = (id) => (expanded[id] !== undefined ? expanded[id] : subjectId === id);
  return (
    <aside className={`sidebar ${mobileOpen ? 'active' : ''}`}>
      <div className="sidebar-header">
        <span className="brand">
          <span className="brand-dot" /> Question Papers
        </span>
        <button className="sidebar-close" onClick={onClose} style={{ display: 'block' }}>✕</button>
      </div>

      <div className="sidebar-content">
        <div className="sidebar-section">
          <div className="sidebar-section-title">Paper Sets</div>
          <button className="qp-sidebar-home" onClick={() => goTo('#/question-papers')}>
            <Icon name="quiz" size={16} color="#c4ff00" />
            <span>All question papers</span>
          </button>
          {subjects.map((subject) => {
            const papers = questionPapers[subject.id] || [];
            const open = isOpen(subject.id);
            const active = subjectId === subject.id;
            return (
              <div key={subject.id} className={`sidebar-subject ${active ? 'active' : ''} ${open ? 'open' : ''}`}>
                <div className="sidebar-subject-row">
                  <button
                    className="sidebar-subject-btn"
                    onClick={() => {
                      if (!papers.length) return;
                      setExpanded((prev) => ({ ...prev, [subject.id]: !open }));
                    }}
                    title={papers.length ? `Papers of ${subject.name}` : 'Papers coming soon'}
                  >
                    <span className={`sidebar-subject-code ${papers.length ? '' : 'muted'}`}>
                      {papers.length || '—'}
                    </span>
                    <span className="sidebar-subject-name">{subject.name}</span>
                  </button>
                  {papers.length > 0 && (
                    <button
                      className={`sidebar-subject-caret ${open ? 'open' : ''}`}
                      onClick={() => setExpanded((prev) => ({ ...prev, [subject.id]: !open }))}
                      aria-expanded={open}
                      aria-label={`${open ? 'Hide' : 'Show'} papers of ${subject.name}`}
                    >
                      <Icon name="chevron" size={14} color={open ? '#c4ff00' : '#666'} />
                    </button>
                  )}
                </div>

                <div className={`sidebar-slide ${open ? 'open' : ''}`}>
                  <div className="sidebar-slide-inner">
                    <div className="sidebar-topics">
                      {papers.map((paper) => (
                        <button
                          key={paper.id}
                          className={`sidebar-topic ${paperId === paper.id ? 'active' : ''}`}
                          onClick={() => {
                            goTo(`#/question-papers/${subject.id}/${paper.id}`);
                            if (onClose) onClose();
                          }}
                        >
                          <span className="sidebar-topic-num">{paper.number}</span>
                          <span className="sidebar-topic-title">{paper.name} · {paper.tag}</span>
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
        <span>Papers · answers hidden till tap</span>
      </div>
    </aside>
  );
}

function AnswerBlock({ part }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`qp-answer ${open ? 'open' : ''}`}>
      <button className="qp-reveal" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <Icon name={open ? 'eye' : 'quiz'} size={16} color={open ? '#5a6a9e' : '#0a0e1a'} />
        {open ? 'Hide answer' : 'Show answer'}
      </button>
      {open && (
        <div className="qp-answer-body">
          <ExamAnswer text={part.answer} />
          {part.diagram && (
            <figure className="qp-answer-diagram">
              <Diagram type={part.diagram} />
            </figure>
          )}
        </div>
      )}
    </div>
  );
}

export function QuestionPaperView({ subjectId, paperId }) {
  const paper = (questionPapers[subjectId] || []).find((p) => p.id === paperId);
  const subject = subjects.find((s) => s.id === subjectId);

  if (!paper) {
    return (
      <main className="container qp-missing">
        <h1>Paper not found</h1>
        <button className="btn primary" onClick={() => goTo('#/question-papers')}>
          Back to question papers
        </button>
      </main>
    );
  }

  return (
    <div className="qp-page">
      <header className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <button className="back-btn" onClick={() => goTo('#/question-papers')}>
            <Icon name="arrow" size={18} color="#fff" /> Question Papers
          </button>
          <div className="topic-hero-badge">
            <span className="topic-hero-num">{paper.subjectCode}</span>
            <span>{subject ? subject.name : paper.subjectName}</span>
          </div>
          <h1 className="topic-hero-title">{paper.name}</h1>
          <p className="topic-hero-sub">
            {paper.session} · {paper.totalMarks} marks · {paper.time} · {paper.totalQuestions} questions
          </p>
        </div>
      </header>

      <main className="container qp-main">
        <article className="qp-sheet">
          <header className="qp-sheet-head">
            <p className="qp-board">{paper.board}</p>
            <p className="qp-meta-line">
              {paper.semester} · {paper.pattern}
            </p>
            <h2 className="qp-sheet-subject">
              Subject: {paper.subjectCode} — {paper.subjectName}
            </h2>
            <div className="qp-sheet-stats">
              <span><strong>Total Marks:</strong> {paper.totalMarks}</span>
              <span><strong>Time:</strong> {paper.time}</span>
              <span><strong>Total Questions:</strong> {paper.totalQuestions}</span>
            </div>
            <ul className="qp-instructions">
              {paper.instructions.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </header>

          {paper.questions.map((q) => (
            <section key={q.number} className="qp-question">
              <div className="qp-question-head">
                <h3>
                  Q{q.number}) <span className="qp-question-note">{q.note || ''}</span>
                </h3>
                <span className="qp-marks">[{q.marks} Marks]</span>
              </div>

              {q.options.map((option, oIndex) => (
                <div key={option.label} className={`qp-option ${q.kind === 'short-notes' ? 'qp-option-flat' : ''}`}>
                  {oIndex > 0 && q.kind !== 'short-notes' && <div className="qp-or">OR</div>}
                  {option.parts.map((part, pIndex) => (
                    <div key={`${option.label}-${pIndex}`} className="qp-part">
                      <div className="qp-part-head">
                        <span className="qp-part-label">{part.label || option.label})</span>
                        <span className="qp-part-marks">[{part.marks}]</span>
                      </div>
                      <p className="qp-part-text">{part.question}</p>
                      <AnswerBlock part={part} />
                    </div>
                  ))}
                </div>
              ))}
            </section>
          ))}

          <footer className="qp-sheet-foot">
            <span>— End of paper —</span>
          </footer>
        </article>
      </main>
    </div>
  );
}
