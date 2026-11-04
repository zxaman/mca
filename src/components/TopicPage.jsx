import { useEffect, useState } from 'react';
import { units, subjects } from '../data/topics';
import { Diagram } from './Diagrams';
import ExamAnswer from './ExamAnswer';
import { Icon } from './Icons';
import { goTo } from '../utils/navigation';
import { getCompletedTopics, toggleCompletedTopic } from '../utils/progress';

// ---------- Section renderer ----------
function SectionRenderer({ section, index }) {
  const icons = {
    definition: 'book',
    cards: 'chart',
    diagram: 'timeline',
    example: 'bulb',
    points: 'check',
    recap: 'quiz',
    image: 'chart',
    comparison: 'list',
  };
  const kickerIcon = icons[section.type] || 'chart';

  if (section.type === 'definition') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="definition-card">
          <p>{section.body || section.content}</p>
          {section.body2 && <p className="definition-extra">{section.body2}</p>}
        </div>
        {section.chips && section.chips.length > 0 && (
          <div className="chips">
            {section.chips.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        )}
      </section>
    );
  }

  if (section.type === 'cards') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="card-grid">
          {section.cards && section.cards.length > 0 ? (
            section.cards.map((card, i) => (
              <div key={card.title} className="card" style={{ '--d': `${i * 80}ms` }}>
                <div className="card-icon">
                  <Icon name={card.icon} size={26} color={card.color || '#c4ff00'} />
                </div>
                <h4>{card.title}</h4>
                <p>{card.body || card.desc}</p>
              </div>
            ))
          ) : (
            <p>{section.content}</p>
          )}
        </div>
      </section>
    );
  }

  if (section.type === 'diagram') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="diagram-card">
          <Diagram type={section.diagram} />
        </div>
        {section.caption && <p className="diagram-caption">{section.caption}</p>}
      </section>
    );
  }

  if (section.type === 'image') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="image-card">
          {section.images && section.images.length > 0 ? (
            section.images.map((img, i) => (
              <figure key={i} className="image-figure" style={{ '--d': `${i * 100}ms` }}>
                <img src={img.src} alt={img.caption} loading="lazy" />
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))
          ) : (
            <p>{section.content}</p>
          )}
        </div>
      </section>
    );
  }

  if (section.type === 'example') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="example-card">
          <span className="example-emoji">💡</span>
          <p>{section.body}</p>
        </div>
      </section>
    );
  }

  if (section.type === 'points') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <ul className="points-list">
          {section.points ? (
            section.points.map((p, i) => (
              <li key={i} style={{ '--d': `${i * 60}ms` }}>
                <span className="point-bullet">✓</span>
                <span>{p}</span>
              </li>
            ))
          ) : (
            <li>{section.content}</li>
          )}
        </ul>
      </section>
    );
  }

  if (section.type === 'recap') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="recap-card">
          {section.points ? (
            section.points.map((p, i) => (
              <div key={i} className="recap-item" style={{ '--d': `${i * 90}ms` }}>
                <span className="recap-bullet">{i + 1}</span>
                <span>{p}</span>
              </div>
            ))
          ) : (
            <p>{section.content}</p>
          )}
        </div>
      </section>
    );
  }

  if (section.type === 'comparison') {
    const rows = section.rows || [];
    const columns = section.columns || [];
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="comparison-card">
          {columns.length > 0 && (
            <div className="comparison-row comparison-head">
              <span className="comparison-label" />
              {columns.map((col, j) => (
                <span
                  key={col}
                  className="comparison-value"
                  style={{ color: section.columnColors?.[j] || '#c4ff00' }}
                >
                  {col}
                </span>
              ))}
            </div>
          )}
          {rows.map((row, i) => (
            <div key={row.label} className="comparison-row" style={{ '--d': `${i * 60}ms` }}>
              <span className="comparison-label">{row.label}</span>
              {(row.values || []).map((v, j) => (
                <span key={j} className="comparison-value" data-col={columns[j] || ''}>
                  <span
                    className="comparison-dot"
                    style={{ background: row.colors?.[j] || section.columnColors?.[j] || '#0047ff' }}
                  />
                  <span>{v}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return null;
}

// ---------- Main TopicPage component ----------
export default function TopicPage({ topicId, subjectId, onBack, onOpenTopic }) {
  // Search the correct subject's topics, fallback to searching all units
  const subjectUnits = units[subjectId] || units['business-intelligence'];
  // Search ALL units of the subject, not just the first one
  const allSubjectTopics = subjectUnits.flatMap((unit) => unit.topics || []);
  const topic = allSubjectTopics.find((t) => t.id === topicId)
    || units['business-intelligence'].flatMap((unit) => unit.topics || []).find((t) => t.id === topicId);
  const [completed, setCompleted] = useState(() => new Set(getCompletedTopics()));
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, scrolled)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [topicId]);

  if (!topic) {
    return (
      <div className="container">
        <p>Topic nahi mila.</p>
        <button className="btn primary" onClick={onBack}>← Wapas Ghar</button>
      </div>
    );
  }

  // Prev/next topic — use the subject's own topics
  const allTopics = allSubjectTopics;
  const idx = allTopics.findIndex((t) => t.id === topicId);
  const prevTopic = idx > 0 ? allTopics[idx - 1] : null;
  const nextTopic = idx < allTopics.length - 1 ? allTopics[idx + 1] : null;

  // Find which unit this topic belongs to
  const currentUnit = subjectUnits.find((u) => u.topics.some((t) => t.id === topicId)) || subjectUnits[0];
  const subjectName = subjects.find((s) => s.id === subjectId)?.name || 'Business Intelligence';

  const isCompleted = completed.has(topicId);
  const diagramCount = topic.sections.filter((section) => section.type === 'diagram').length;

  const handleComplete = () => {
    setCompleted(new Set(toggleCompletedTopic(topicId)));
  };

  return (
    <div className="topic-page">
      <div className="topic-main">
        {/* Sticky header with prev/next/mark */}
        <header className="topic-header-sticky">
          <div className="topic-header-inner">
            <button
              className="header-btn"
              disabled={!prevTopic}
              onClick={() => prevTopic && onOpenTopic(prevTopic.id)}
            >
              <Icon name="arrow" size={16} color="#c4ff00" /> Purana
            </button>
            <button
              className={`header-btn ${isCompleted ? 'header-done' : 'header-mark'}`}
              onClick={handleComplete}
            >
              <Icon name={isCompleted ? 'check' : 'bookmark'} size={16} color={isCompleted ? '#0047ff' : '#c4ff00'} />
              {isCompleted ? 'Unmark' : 'Khatam Karo'}
            </button>
            <button
              className="header-btn"
              disabled={!nextTopic}
              onClick={() => nextTopic && onOpenTopic(nextTopic.id)}
            >
              Agla <Icon name="arrow" size={16} color="#c4ff00" />
            </button>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${scrollProgress}%` }} />
          </div>
        </header>

        {/* Hero section */}
        <header className="topic-hero" style={{ '--accent': topic.accent }}>
          <div className="topic-hero-bg" />
          <div className="container">
            <div className="topic-hero-badge">
              <span className="topic-hero-num">{topic.number}</span>
              <span>{subjectName} · Unit {currentUnit?.number}</span>
            </div>
            <h1 className="topic-hero-title">{topic.title}</h1>
            <p className="topic-hero-sub">{topic.subtitle}</p>
            <div className="topic-hero-stats">
              <span>📖 {topic.sections.length} sections</span>
              <span>🖼️ {diagramCount} {diagramCount === 1 ? 'diagram' : 'diagrams'}</span>
              <span>🎯 {topic.examQuestions.length} 6-mark exam questions</span>
              {isCompleted && <span className="completed-badge">✓ khatam</span>}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="container">
          {/* English Definition Box */}
          <section className="section english-def-section">
            <div className="section-kicker"><Icon name="book" size={16} /> English Definition</div>
            <div className="english-def-card">
              <span className="english-def-label">OFFICIAL DEFINITION</span>
              <p>{topic.englishDefinition}</p>
            </div>
          </section>

          {/* Hinglish intro */}
          <section className="section intro-section">
            <div className="intro-card">
              <span className="intro-emoji">🎓</span>
              <p>{topic.intro}</p>
            </div>
          </section>

          {/* Topic sections */}
          {topic.sections.map((section, i) => (
            <SectionRenderer key={i} section={section} index={i} />
          ))}

          {/* 6-mark exam questions */}
          <section className="section exam-section">
            <div className="section-kicker"><Icon name="quiz" size={16} /> Exam Focus — 6 Marks Questions</div>
            <h3>6 Marks Exam Questions & Answers 🔥</h3>
            <p className="section-note">
              Important questions jo exam mein aa sakte hain — aur unke complete answers bhi diye gaye hain. Answer mein definition, explanation aur diagram reference diya gaya hai.
            </p>
            <div className="exam-list">
              {topic.examQuestions.map((q, i) => (
                <div key={i} className="exam-item" style={{ '--d': `${i * 80}ms` }}>
                  <div className="exam-question">
                    <span className="exam-q-num">Q{i + 1}</span>
                    <span className="exam-q-text">{q.question}</span>
                  </div>
                  <div className="exam-answer-block">
                    <span className="exam-answer-label">ANSWER</span>
                    <ExamAnswer text={q.answer} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Important exam questions link at end of unit */}
          <section className="section important-exam-link-section">
            <div className="important-exam-link-card">
              <div className="iel-icon"><Icon name="quiz" size={32} /></div>
              <div className="iel-text">
                <h3>⭐ Important 6-Mark Exam Questions — Unit {currentUnit?.number}</h3>
                <p>Unit {currentUnit?.number} ke sabhi important topics ke 10 most-important 6-mark questions ek jagah par — ek dusre topic mein nahi dhundhna padega.</p>
              </div>
              <button
                className="btn primary"
                onClick={() => goTo(`#/subject/${subjectId || 'business-intelligence'}/exam`)}
              >
                Important Qs Dekho <Icon name="arrow" size={16} color="#c4ff00" />
              </button>
            </div>
          </section>

          {/* Bottom nav: prev/next + mark complete */}
          <nav className="topic-bottom-nav">
            <div className="tbn-row">
              <button
                className="btn ghost"
                disabled={!prevTopic}
                onClick={() => prevTopic && onOpenTopic(prevTopic.id)}
              >
                ← Pehla Topic
              </button>
              <button
                className={`btn ${isCompleted ? 'btn-done' : 'btn-mark'}`}
                onClick={handleComplete}
              >
                {isCompleted ? '✓ Topic Khatam — Unmark' : 'Mark as Completed'}
              </button>
              <button
                className="btn primary"
                disabled={!nextTopic}
                onClick={() => nextTopic && onOpenTopic(nextTopic.id)}
              >
                Agla Topic →
              </button>
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
}
