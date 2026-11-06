// Index of question papers by subject id.
// Paper content lives in its own file so that a paper can be reviewed on its own.

import { stqaPaper1 } from './stqaPaper1';
import { stqaPaper2 } from './stqaPaper2';
import { stqaPaper3 } from './stqaPaper3';
import { stqaPaper4 } from './stqaPaper4';
import { cysPaper1 } from './cysPaper1';
import { cysPaper2 } from './cysPaper2';
import { cysPaper3 } from './cysPaper3';
import { cysPaper4 } from './cysPaper4';

export const questionPapers = {
  'software-testing': [stqaPaper1, stqaPaper2, stqaPaper3, stqaPaper4],
  'cyber-security': [cysPaper1, cysPaper2, cysPaper3, cysPaper4],
};

export const paperCounts = Object.fromEntries(
  Object.entries(questionPapers).map(([subjectId, papers]) => [subjectId, papers.length]),
);
