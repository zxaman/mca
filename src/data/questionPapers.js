// Index of question papers by subject id.
// Paper content lives in its own file so that a paper can be reviewed on its own.

import { stqaPaper1 } from './stqaPaper1';
import { stqaPaper2 } from './stqaPaper2';

export const questionPapers = {
  'software-testing': [stqaPaper1, stqaPaper2],
};

export const paperCounts = Object.fromEntries(
  Object.entries(questionPapers).map(([subjectId, papers]) => [subjectId, papers.length]),
);
