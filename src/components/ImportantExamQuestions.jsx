import React from 'react';
import { importantQuestions } from '../data/importantQuestions';
import { Diagram } from './Diagrams';
import { Icon } from './Icons';

// Renders formatted exam answer text (supports **bold** markers)
function ExamAnswer({ text }) {
  const parts = text.split('**').filter(Boolean);
  return (
    <div className="exam-answer">
      {parts.map((part, i) =>
        i % 2 === 0 ? (
          <span key={i}>{part}</span>
        ) : (
          <strong key={i}>{part}</strong>
        )
      )}
    </div>
  );
}

export default function ImportantExamQuestions({ onBack, subjectId = 'business-intelligence' }) {
  const isCyber = subjectId === 'cyber-security';
  const subjectLabel = isCyber ? 'Cyber Security' : 'Business Intelligence';
  const questions = importantQuestions.filter((q) => q.subjectId === subjectId || (subjectId === 'business-intelligence' && !q.subjectId));
  const count = questions.length;
  const diagramCount = questions.filter((q) => q.diagram).length;
  return (
    <div className="important-exam-page">
      {/* Sticky header */}
      <header className="topic-hero">
        <div className="topic-hero-bg" />
        <div className="container">
          <button className="back-btn" onClick={onBack}>
            <Icon name="arrow" size={18} color="#fff" /> Wapas Ghar
          </button>
          <div className="topic-hero-badge">
            <span className="topic-hero-num">★</span>
            <span>{subjectLabel} · Unit 1 · Important</span>
          </div>
          <h1 className="topic-hero-title">Important 6-Mark Exam Questions</h1>
          <p className="topic-hero-sub">Unit 1 — {count} most important questions with answers + diagrams</p>
          <div className="topic-hero-stats">
            <span>🔥 {count} questions</span>
            <span>🖼️ {diagramCount} diagrams</span>
            <span>⭐ All marked important</span>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <div className="section-kicker"><Icon name="quiz" size={16} /> Exam Focus — Most Important</div>
          <h3>Unit 1 — {count} Most Important 6-Mark Questions 🔥</h3>
          <p className="section-note">
            Ye questions Unit 1 ke sabse important hain — exam mein aa sakte hain. Har question ka complete answer diya gaya hai — definition, explanation aur diagram reference ke saath. Diagrams bhi embed kiye gaye hain.
          </p>

          <div className="exam-list">
            {questions.map((q, i) => (
              <div key={q.id} className="exam-item" style={{ '--d': `${i * 80}ms` }}>
                <div className="exam-question">
                  <span className="exam-q-num">Q{i + 1}</span>
                  <div className="exam-q-content">
                    <span className="exam-topic-tag">{q.topicNumber} · {q.topicTitle}</span>
                    <span className="exam-q-text">{q.question}</span>
                    <span className="exam-importance">{q.importance}</span>
                  </div>
                </div>

                {/* Diagram or image */}
                {q.diagram && (
                  <div className="exam-diagram-block">
                    <span className="exam-answer-label">DIAGRAM</span>
                    <div className="diagram-card compact">
                      <Diagram type={q.diagram} />
                    </div>
                  </div>
                )}
                {q.image && (
                  <div className="exam-diagram-block">
                    <span className="exam-answer-label">REFERENCE IMAGE</span>
                    <div className="image-figure">
                      <img src={q.image} alt={q.question} loading="lazy" />
                    </div>
                  </div>
                )}

                <div className="exam-answer-block">
                  <span className="exam-answer-label">ANSWER</span>
                  <ExamAnswer text={q.answer} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <nav className="topic-bottom-nav">
          <button className="btn primary" onClick={onBack}>← Wapas Topics Ke Liye</button>
        </nav>
      </main>
    </div>
  );
}
