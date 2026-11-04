import { useEffect, useState } from 'react';
import { subjects, units } from './data/topics';
import TopicPage from './components/TopicPage';
import ImportantExamQuestions from './components/ImportantExamQuestions';
import Sidebar from './components/Sidebar';
import { Icon } from './components/Icons';
import { getCompletedTopics } from './utils/progress';
import { goTo } from './utils/navigation';
import './App.css';

// Icon shown on each subject card
const SUBJECT_ICONS = {
  'business-intelligence': 'chart',
  'cyber-security': 'shield',
  'software-testing': 'test',
  'data-science': 'scatter',
};

// All topics of a subject, flattened across its units
function subjectTopics(subjectId) {
  return (units[subjectId] || []).flatMap((unit) => unit.topics || []);
}

// Topic ids the student has finished, limited to one subject
function completedInSubject(subjectId) {
  const ids = subjectTopics(subjectId).map((topic) => topic.id);
  return getCompletedTopics().filter((id) => ids.includes(id));
}

// ---------- Hash router helpers ----------
function parseRoute() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const parts = hash.split('/').filter(Boolean);
  if (parts.length === 0) return { level: 'home' };
  if (parts[0] === 'subject' && parts[1]) {
    if (parts[2] === 'topic' && parts[3]) {
      return { level: 'topic', subjectId: parts[1], topicId: parts[3] };
    }
    if (parts[2] === 'exam') {
      return { level: 'exam', subjectId: parts[1] };
    }
    return { level: 'units', subjectId: parts[1] };
  }
  return { level: 'home' };
}

// ---------- Subject card ----------
function SubjectCard({ subject }) {
  if (!subject.available) {
    return (
      <article className="subject-card coming-soon" style={{ '--accent': subject.color }}>
        <div className="subject-card-head">
          <span className="subject-card-icon">
            <Icon name={SUBJECT_ICONS[subject.id] || 'book'} size={32} color="#5a6a9e" />
          </span>
          <span className="subject-card-code">{subject.code}</span>
        </div>
        <h2 className="subject-card-title">{subject.name}</h2>
        <span className="coming-soon-badge">Coming Soon</span>
      </article>
    );
  }
  const topics = subjectTopics(subject.id);
  const doneCount = completedInSubject(subject.id).length;
  return (
    <article className="subject-card" style={{ '--accent': subject.color }}>
      <div className="subject-card-head">
        <span className="subject-card-icon">
          <Icon name={SUBJECT_ICONS[subject.id] || 'book'} size={32} />
        </span>
        <span className="subject-card-code">{subject.code}</span>
      </div>
      <h2 className="subject-card-title">{subject.name}</h2>
      <p className="subject-card-desc">{subject.description}</p>
      {doneCount > 0 && (
        <p className="subject-progress">
          ✓ {doneCount} of {topics.length} topics completed
        </p>
      )}
      <button
        className="subject-card-cta"
        onClick={() => goTo(`#/subject/${subject.id}`)}
      >
        Explore Units <Icon name="arrow" size={16} color="#c4ff00" />
      </button>
    </article>
  );
}

// ---------- Unit page ----------
function UnitPage({ subject, onBack }) {
  const subjectUnits = units[subject.id] || [];
  const completed = getCompletedTopics();
  const openTopic = (topicId) => {
    goTo(`#/subject/${subject.id}/topic/${topicId}`);
  };
  return (
    <>
      <header className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <button className="back-btn" onClick={onBack}>
            <Icon name="arrow" size={18} color="#fff" /> Wapas Ghar
          </button>
          <div className="topic-hero-badge">
            <span className="topic-hero-num">{subject.code}</span>
            <span>{subject.name}</span>
          </div>
          <h1 className="topic-hero-title">Units & Topics</h1>
          <p className="topic-hero-sub">{subject.description}</p>
          <div className="topic-hero-stats">
            <span>📊 {completed.filter((id) => subjectUnits.flatMap((u) => u.topics).some((t) => t.id === id)).length} of {subjectUnits.flatMap((u) => u.topics).length} completed</span>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="units-grid">
          {subjectUnits.map((unit) => (
            <article key={unit.id} className="unit-card" style={{ '--i': unit.number }}>
              <div className="unit-card-head">
                <span className="unit-card-num">Unit {unit.number}</span>
                <span className="unit-card-icon"><Icon name="book" size={26} /></span>
              </div>
              <h2 className="unit-card-title">{unit.name}</h2>
              <p className="unit-card-count">{unit.topics.length} topics</p>
              <div className="unit-topics-preview">
                {unit.topics.map((t) => {
                  const isDone = completed.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      className={`unit-topic-mini ${isDone ? 'done' : ''}`}
                      onClick={() => openTopic(t.id)}
                    >
                      <span className="utm-num">{t.number}</span>
                      <span className="utm-title">{t.title}</span>
                      {isDone && <span className="utm-check">✓</span>}
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        {/* Important Questions Link */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <button
            className="btn primary exam-cta"
            onClick={() => goTo(`#/subject/${subject.id}/exam`)}
          >
            <Icon name="quiz" size={20} color="#0a0e1a" />
            🔥 Important 6-Mark Exam Questions
          </button>
        </div>
      </main>
    </>
  );
}

// ---------- Home ----------
function Home() {
  const liveSubjects = subjects.filter((subject) => subject.available);
  const totalUnits = liveSubjects.reduce((sum, subject) => sum + (units[subject.id] || []).length, 0);
  const allTopics = liveSubjects.flatMap((subject) => subjectTopics(subject.id));
  const diagramCount = liveSubjects.reduce(
    (sum, subject) => sum
      + subjectTopics(subject.id).reduce(
        (n, topic) => n + (topic.sections || []).filter((section) => section.type === 'diagram').length,
        0,
      ),
    0,
  );
  const doneCount = getCompletedTopics().filter((id) => allTopics.some((topic) => topic.id === id)).length;
  return (
    <div className="home">
      <div className="bg-orbs">
        <span className="orb orb1" />
        <span className="orb orb2" />
        <span className="orb orb3" />
      </div>

      <header className="home-hero">
        <div className="container">
          <div className="hero-badge">
            <span className="hero-badge-dot" /> MCA Study Companion
          </div>
          <h1 className="hero-title">
            MCA Exam Notes
            <span className="hero-title-accent">Hinglish Mein</span>
          </h1>
          <p className="hero-sub">
            {liveSubjects.length} subjects ke live units — simple Hinglish explanations, official English
            definitions, animated exam diagrams, real reference images aur 6-mark exam questions.
          </p>
          <div className="hero-meta">
            <span>📚 {liveSubjects.length} Subjects</span>
            <span>📖 {totalUnits} Units · {allTopics.length} Topics</span>
            <span>🖼️ {diagramCount} Animated Diagrams</span>
            <span>✓ {doneCount} of {allTopics.length} completed</span>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="section-kicker center">Choose a Subject</div>
        <h2 className="subjects-title">All Subjects</h2>
        <div className="subjects-grid">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </main>
    </div>
  );
}

// ---------- Main App ----------
export default function App() {
  const [route, setRoute] = useState(parseRoute);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Listen for hash changes
  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const goHome = () => {
    goTo('#/');
    setSidebarOpen(false);
  };

  const openSubject = (subjectId) => {
    goTo(`#/subject/${subjectId}`);
    setSidebarOpen(false);
  };

  const openTopic = (topicId) => {
    const subjectId = route.subjectId || 'business-intelligence';
    goTo(`#/subject/${subjectId}/topic/${topicId}`);
    setSidebarOpen(false);
  };

  const navigate = (level, extra) => {
    if (level === 'home') {
      goHome();
    } else if (level === 'units') {
      openSubject(extra.subjectId);
    } else if (level === 'topic') {
      openTopic(extra.topicId);
    } else if (level === 'exam') {
      goTo(`#/subject/${extra.subjectId}/exam`);
      setSidebarOpen(false);
    }
  };

  const subject = route.level === 'units' ? subjects.find((s) => s.id === route.subjectId) : null;

  const renderContent = () => {
    if (route.level === 'exam') {
      return (
        <ImportantExamQuestions
          subjectId={route.subjectId}
          onBack={() => openSubject(route.subjectId || 'business-intelligence')}
        />
      );
    } else if (route.level === 'topic') {
      return (
        <TopicPage
          topicId={route.topicId}
          subjectId={route.subjectId}
          onBack={() => openSubject(route.subjectId || 'business-intelligence')}
          onOpenTopic={openTopic}
        />
      );
    } else if (route.level === 'units' && subject) {
      return <UnitPage subject={subject} onBack={goHome} />;
    } else {
      return <Home />;
    }
  };

  return (
    <div className="app-with-sidebar">
      {/* Mobile menu button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar - Common across ALL pages */}
      <Sidebar
        currentSubjectId={route.subjectId || 'business-intelligence'}
        currentUnitId={route.unitId}
        currentTopicId={route.topicId}
        onNavigate={navigate}
        onClose={() => setSidebarOpen(false)}
        mobileOpen={sidebarOpen}
      />

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay active" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="app-content">
        <nav className="topnav">
          <div className="container nav-inner">
            <span className="brand" onClick={goHome} style={{ cursor: 'pointer', marginLeft: '32px' }}>
              <span className="brand-dot" /> MCA · Hinglish Study
            </span>
            <button className="nav-home" onClick={goHome}>Home</button>
          </div>
        </nav>

        {renderContent()}
      </div>
    </div>
  );
}
