// Index of question papers by subject id.
// Paper content lives in its own file so that a paper can be reviewed on its own.

import { stqaPaper1 } from './stqaPaper1';

export const questionPapers = {
  'software-testing': [stqaPaper1],
};

export const paperCounts = Object.fromEntries(
  Object.entries(questionPapers).map(([subjectId, papers]) => [subjectId, papers.length]),
);
