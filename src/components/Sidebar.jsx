import React, { useState } from 'react';
import { subjects, units } from '../data/topics';
import { Icon } from './Icons';
import { getCompletedTopics } from '../utils/progress';

// AppSidebar — Compatibility wrapper for TopicPage
// Returns null since the common sidebar is rendered by App.jsx
export function AppSidebar({ currentTopicId, onOpenTopic, completed, mobileOpen }) {
  return null;
}

export default function Sidebar({ currentSubjectId, currentUnitId, currentTopicId, onNavigate, onClose, mobileOpen }) {
  const [expandedSubjects, setExpandedSubjects] = useState({
    [currentSubjectId]: true,
  });
  const [unitDropdown, setUnitDropdown] = useState(null);
  const completed = getCompletedTopics();

  const toggleSubject = (subjectId) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [subjectId]: !prev[subjectId],
    }));
  };

  const toggleUnit = (subjectId, unitId) => {
    const key = `${subjectId}-${unitId}`;
    setUnitDropdown((prev) => (prev === key ? null : key));
  };

  const handleNavigate = (level, extra) => {
    onNavigate(level, extra);
    if (onClose) onClose();
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
          <div className="sidebar-section-title">Subjects</div>
          {subjects.map((subject) => {
            const subjectUnits = units[subject.id] || [];
            const isExpanded = expandedSubjects[subject.id];
            const isActive = currentSubjectId === subject.id;

            return (
              <div key={subject.id} className={`sidebar-subject ${isActive ? 'active' : ''}`}>
                <button
                  className="sidebar-subject-btn"
                  onClick={() => {
                    toggleSubject(subject.id);
                    handleNavigate('units', { subjectId: subject.id });
                  }}
                >
                  <Icon name="book" size={18} color={subject.color} />
                  <span className="sidebar-subject-code">{subject.code}</span>
                  <span className="sidebar-subject-name">{subject.name}</span>
                  <Icon name="chevron" size={14} color="#666" />
                </button>

                {isExpanded && subjectUnits.length > 0 && (
                  <div className="sidebar-units">
                    {subjectUnits.map((unit) => {
                      const isUnitActive = currentUnitId === unit.id;
                      const topicsCount = unit.topics.length;

                      return (
                        <div key={unit.id} className={`sidebar-unit ${isUnitActive ? 'active' : ''}`}>
                          <button
                            className="sidebar-unit-btn"
                            onClick={() => handleNavigate('units', { subjectId: subject.id })}
                          >
                            <span className="sidebar-unit-num">Unit {unit.number}</span>
                            <span className="sidebar-unit-name">{unit.name}</span>
                            <span className="sidebar-unit-count">{topicsCount} topics</span>
                          </button>

                          {/* Dropdown for topics */}
                          <button
                            className="sidebar-dropdown-toggle"
                            onClick={() => toggleUnit(subject.id, unit.id)}
                            aria-expanded={unitDropdown === `${subject.id}-${unit.id}`}
                          >
                            {unitDropdown === `${subject.id}-${unit.id}` ? '▼' : '▼'}
                            Show Topics
                          </button>

                          {unitDropdown === `${subject.id}-${unit.id}` && (
                            <div className="sidebar-topics-dropdown">
                              {unit.topics.map((topic) => {
                                const isDone = completed.includes(topic.id);
                                const isTopicActive = currentTopicId === topic.id;

                                return (
                                  <button
                                    key={topic.id}
                                    className={`sidebar-topic ${isTopicActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                                    onClick={() => handleNavigate('topic', { subjectId: subject.id, topicId: topic.id })}
                                  >
                                    <span className="sidebar-topic-num">{topic.number}</span>
                                    <span className="sidebar-topic-title">{topic.title}</span>
                                    {isDone && <span className="sidebar-topic-check">✓</span>}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
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
        <span>5 Subjects · All Units & Topics</span>
      </div>
    </aside>
  );
}
