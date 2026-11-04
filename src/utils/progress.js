// Track completed topics in localStorage
const COMPLETED_KEY = 'mca-study-completed-topics';

export function getCompletedTopics() {
  try {
    return JSON.parse(localStorage.getItem(COMPLETED_KEY)) || [];
  } catch {
    return [];
  }
}

export function toggleCompletedTopic(topicId) {
  const current = getCompletedTopics();
  const next = current.includes(topicId)
    ? current.filter((id) => id !== topicId)
    : [...current, topicId];
  localStorage.setItem(COMPLETED_KEY, JSON.stringify(next));
  return next;
}
