import { stqaOneShot } from './oneShotStqa';
import { dsOneShot } from './oneShotDs';
import { wtOneShot } from './oneShotWt';
import { cyberOneShot } from './oneShotCyber';
import { biOneShot } from './oneShotBi';

export const oneShotNotes = {
  'software-testing': stqaOneShot,
  'data-science': dsOneShot,
  'web-technology': wtOneShot,
  'cyber-security': cyberOneShot,
  'business-intelligence': biOneShot,
};

export const getOneShot = (subjectId) => oneShotNotes[subjectId] || null;
