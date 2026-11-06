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
import { wtPaper1 } from './wtPaper1';
import { wtPaper2 } from './wtPaper2';
import { wtPaper3 } from './wtPaper3';
import { wtPaper4 } from './wtPaper4';
import { dsPaper1 } from './dsPaper1';
import { dsPaper2 } from './dsPaper2';
import { dsPaper3 } from './dsPaper3';
import { dsPaper4 } from './dsPaper4';
import { biPaper1 } from './biPaper1';
import { biPaper2 } from './biPaper2';
import { biPaper3 } from './biPaper3';
import { biPaper4 } from './biPaper4';

export const questionPapers = {
  'software-testing': [stqaPaper1, stqaPaper2, stqaPaper3, stqaPaper4],
  'cyber-security': [cysPaper1, cysPaper2, cysPaper3, cysPaper4],
  'data-science': [dsPaper1, dsPaper2, dsPaper3, dsPaper4],
  'web-technology': [wtPaper1, wtPaper2, wtPaper3, wtPaper4],
  'business-intelligence': [biPaper1, biPaper2, biPaper3, biPaper4],
};

export const paperCounts = Object.fromEntries(
  Object.entries(questionPapers).map(([subjectId, papers]) => [subjectId, papers.length]),
);
