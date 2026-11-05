import { useState } from 'react';
import { subjects, units } from '../data/topics';
import { Icon } from './Icons';
import { getCompletedTopics } from '../utils/progress';

// Which unit holds a given topic (used to auto-open the right unit)
function unitOfTopic(subjectId, topicId) {
  if (!topicId) return null;
  const found = (units[subjectId] || []).find((unit) => (unit.topics || []).some((t) => t.id === topicId));
  return found ? found.id : null;
}

// Sliding container: animates height with grid-template-rows (0fr -> 1fr)
function Slide({ open, children }) {
  return (
    <div className={`sidebar-slide ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="sidebar-slide-inner">{children}</div>
    </div>
  );
}

export default function Sidebar({ currentSubjectId, currentUnitId, currentTopicId, onNavigate, onClose, mobileOpen }) {
  // Explicit user choices only — anything not set here falls back to the
  // current route, so the sidebar always mirrors the page you are on.
  const [expandedSubjects, setExpandedSubjects] = useState({});
  const [openUnits, setOpenUnits] = useState({});
  const completed = getCompletedTopics();
  const routeUnitId = currentUnitId || unitOfTopic(currentSubjectId, currentTopicId);

  const isSubjectOpen = (subjectId) => (
    expandedSubjects[subjectId] !== undefined
      ? expandedSubjects[subjectId]
      : currentSubjectId === subjectId
  );

  const isUnitOpen = (subjectId, unitId) => {
    const key = `${subjectId}-${unitId}`;
    if (openUnits[key] !== undefined) return openUnits[key];
    return currentSubjectId === subjectId && routeUnitId === unitId;
  };

  const handleNavigate = (level, extra) => {
    onNavigate(level, extra);
    if (onClose) onClose();
  };

  // Subject header click = go to that subject page + open its unit list
  const openSubject = (subjectId) => {
    setExpandedSubjects((prev) => ({ ...prev, [subjectId]: true }));
    handleNavigate('units', { subjectId });
  };

  const toggleSubject = (subjectId) => {
    setExpandedSubjects((prev) => ({ ...prev, [subjectId]: !isSubjectOpen(subjectId) }));
  };

  // Accordion inside a subject: only one unit's topic list stays open
  const toggleUnit = (subjectId, unitId) => {
    const next = isUnitOpen(subjectId, unitId);
    setOpenUnits((prev) => {
      const copy = { ...prev };
      (units[subjectId] || []).forEach((unit) => {
        copy[`${subjectId}-${unit.id}`] = false;
      });
      copy[`${subjectId}-${unitId}`] = !next;
      return copy;
    });
  };

  return (
    <aside className={`sidebar ${mobileOpen ? 'active' : ''}`}>
      <div className="sidebar-header">
        <span className="brand">
          <span className="brand-dot" /> MCA · Hinglish
        </span>
        <button className="sidebar-close" onClick={onClose} style={{ display: onClose ? 'block' : 'none' }}>
          ✕
        </button>
      </div>

      <div className="sidebar-content">
        <div className="sidebar-section">
          <button
            className={`sidebar-home-btn ${!currentSubjectId ? 'active' : ''}`}
            onClick={() => handleNavigate('home')}
          >
            <Icon name="globe" size={18} color={!currentSubjectId ? '#c4ff00' : '#8a95ad'} />
            <span>Home</span>
            <span className="sidebar-home-hint">all subjects</span>
          </button>
          <div className="sidebar-section-title">Subjects</div>

          {subjects.map((subject) => {
            const subjectUnits = units[subject.id] || [];
            const subjectOpen = isSubjectOpen(subject.id);
            const isActive = currentSubjectId === subject.id;

            return (
              <div key={subject.id} className={`sidebar-subject ${isActive ? 'active' : ''} ${subjectOpen ? 'open' : ''}`}>
                <div className="sidebar-subject-row">
                  <button
                    className="sidebar-subject-btn"
                    onClick={() => openSubject(subject.id)}
                    title={`Open ${subject.name}`}
                  >
                    <Icon name="book" size={18} color={subject.color} />
                    <span className="sidebar-subject-code">{subject.code}</span>
                    <span className="sidebar-subject-name">{subject.name}</span>
                  </button>
                  <button
                    className={`sidebar-subject-caret ${subjectOpen ? 'open' : ''}`}
                    onClick={() => toggleSubject(subject.id)}
                    aria-expanded={subjectOpen}
                    aria-label={`${subjectOpen ? 'Hide' : 'Show'} units of ${subject.name}`}
                  >
                    <Icon name="chevron" size={14} color={subjectOpen ? '#c4ff00' : '#666'} />
                  </button>
                </div>

                <Slide open={subjectOpen && subjectUnits.length > 0}>
                  <div className="sidebar-units">
                    {subjectUnits.map((unit) => {
                      const isUnitActive = isActive && routeUnitId === unit.id;
                      const topicsOpen = isUnitOpen(subject.id, unit.id);
                      const topicsCount = unit.topics.length;

                      return (
                        <div key={unit.id} className={`sidebar-unit ${isUnitActive ? 'active' : ''} ${topicsOpen ? 'open' : ''}`}>
                          <button
                            className="sidebar-unit-btn"
                            onClick={() => toggleUnit(subject.id, unit.id)}
                            aria-expanded={topicsOpen}
                          >
                            <span className="sidebar-unit-num">Unit {unit.number}</span>
                            <span className="sidebar-unit-name">{unit.name}</span>
                            <span className="sidebar-unit-count">{topicsCount}</span>
                            <span className={`sidebar-unit-caret ${topicsOpen ? 'open' : ''}`}>
                              <Icon name="chevron" size={12} color={topicsOpen ? '#c4ff00' : '#4a5570'} />
                            </span>
                          </button>

                          <Slide open={topicsOpen}>
                            <div className="sidebar-topics">
                              {unit.topics.map((topic, index) => {
                                const isDone = completed.includes(topic.id);
                                const isTopicActive = currentTopicId === topic.id;

                                return (
                                  <button
                                    key={topic.id}
                                    className={`sidebar-topic ${isTopicActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                                    style={{ '--d': `${Math.min(index, 12) * 28}ms` }}
                                    onClick={() => handleNavigate('topic', { subjectId: subject.id, topicId: topic.id })}
                                  >
                                    <span className="sidebar-topic-num">{topic.number}</span>
                                    <span className="sidebar-topic-title">{topic.title}</span>
                                    {isDone && <span className="sidebar-topic-check">✓</span>}
                                  </button>
                                );
                              })}
                            </div>
                          </Slide>
                        </div>
                      );
                    })}
                  </div>
                </Slide>
              </div>
            );
          })}
        </div>

        {/* Exam Questions Section */}
        {currentSubjectId && (
          <div className="sidebar-section">
            <div className="sidebar-section-title">Exam Questions</div>
            <button
              className="sidebar-exam-btn"
              onClick={() => handleNavigate('exam', { subjectId: currentSubjectId })}
            >
              <Icon name="quiz" size={18} color="#c4ff00" />
              <span>Important Questions</span>
            </button>
          </div>
        )}
      </div>

      <div className="sidebar-footer">
        <span>{subjects.length} Subjects · All Units & Topics</span>
      </div>
    </aside>
  );
}
