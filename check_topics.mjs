import { subjects, units } from './src/data/topics.js';

const u = units['software-testing'];
const unit1 = u.find(x => x.id === 'unit-1');

for (let i = 8; i < 18; i++) {
  const t = unit1.topics[i];
  console.log('=== ' + t.number + ' ' + t.title + ' ===');
  t.sections.forEach(s => {
    let info = '  ' + s.type + ': ' + s.title;
    if (s.body) info += ' (body=' + s.body.length + ' chars)';
    if (s.body2) info += ' (body2=' + s.body2.length + ' chars)';
    if (s.points) info += ' (' + s.points.length + ' points)';
    if (s.content) info += ' (content=' + s.content.length + ' chars)';
    if (s.cards) info += ' (' + s.cards.length + ' cards)';
    console.log(info);
  });
  console.log('  Exam questions: ' + t.examQuestions.length);
  console.log('');
}
