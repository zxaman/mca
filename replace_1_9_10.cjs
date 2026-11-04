const fs = require('fs');
const topic1_9 = require('./expand_1_9.cjs');
const topic1_10 = require('./expand_1_10.cjs');

const filePath = 'src/data/topics.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find boundaries of topics 1.9 and 1.10 in the STQA unit-1 section
// Search for "1.9" and "1.10" in the software-testing unit-1 section
// The STQA unit-1 starts around line 5804, unit-2 around 8307

// Find topic 1.9 start - search for the pattern in the software-testing section
const stqaUnit1Name = '"name": "Fundamentals of Software Quality Assurance"';
const stqaUnit1Idx = content.indexOf(stqaUnit1Name);
console.log('STQA unit-1 name at: ' + stqaUnit1Idx);

// Find topic 1.9
const search1_9 = '"number": "1.9"';
const idx1_9 = content.indexOf(search1_9, stqaUnit1Idx);
console.log('1.9 found at: ' + idx1_9);

// Find topic 1.10
const search1_10 = '"number": "1.10"';
const idx1_10 = content.indexOf(search1_10, stqaUnit1Idx);
console.log('1.10 found at: ' + idx1_10);

// Find topic 1.11 start
const search1_11 = '"number": "1.11"';
const idx1_11 = content.indexOf(search1_11, stqaUnit1Idx);
console.log('1.11 found at: ' + idx1_11);

// Backtrack to find opening { for 1.9
let start1_9 = content.lastIndexOf('{', idx1_9);
// Find end of 1.9 (matching brace)
let braceCount = 0;
let end1_9 = -1;
for (let i = start1_9; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      end1_9 = i;
      break;
    }
  }
}

// Backtrack to find opening { for 1.10
let start1_10 = content.lastIndexOf('{', idx1_10);
braceCount = 0;
let end1_10 = -1;
for (let i = start1_10; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      end1_10 = i;
      break;
    }
  }
}

console.log('1.9: start=' + start1_9 + ', end=' + end1_9 + ', length=' + (end1_9 - start1_9 + 1));
console.log('1.10: start=' + start1_10 + ', end=' + end1_10 + ', length=' + (end1_10 - start1_10 + 1));

// Serialize topics
function escapeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

function serializeTopic(topic, indent) {
  const i = indent;
  let s = '{\n';
  s += i + '  "id": "' + topic.id + '",\n';
  s += i + '  "number": "' + topic.number + '",\n';
  s += i + '  "title": "' + topic.title + '",\n';
  s += i + '  "subtitle": "' + topic.subtitle + '",\n';
  s += i + '  "icon": "' + topic.icon + '",\n';
  s += i + '  "accent": "' + topic.accent + '",\n';
  s += i + '  "englishDefinition": "' + escapeString(topic.englishDefinition) + '",\n';
  s += i + '  "intro": "' + escapeString(topic.intro) + '",\n';
  s += i + '  "sections": [\n';
  s += serializeSections(topic.sections, i + '    ') + '  ],\n';
  s += i + '  "examQuestions": [\n';
  s += serializeExamQuestions(topic.examQuestions, i + '    ') + '  ]\n';
  s += i + '}';
  return s;
}

function serializeSections(sections, indent) {
  let s = '';
  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    s += indent + '    {\n';
    s += indent + '      "type": "' + sec.type + '",\n';
    s += indent + '      "title": "' + escapeString(sec.title) + '",\n';
    if (sec.kicker) s += indent + '      "kicker": "' + escapeString(sec.kicker) + '",\n';
    if (sec.body) s += indent + '      "body": "' + escapeString(sec.body) + '",\n';
    if (sec.body2) s += indent + '      "body2": "' + escapeString(sec.body2) + '",\n';
    if (sec.chips) {
      s += indent + '      "chips": [';
      s += sec.chips.map(c => '"' + escapeString(c) + '"').join(', ');
      s += '],\n';
    }
    if (sec.points) {
      s += indent + '      "points": [';
      s += sec.points.map(p => '"' + escapeString(p) + '"').join(', ');
      s += '],\n';
    }
    if (sec.cards) {
      s += indent + '      "cards": [';
      for (let j = 0; j < sec.cards.length; j++) {
        const card = sec.cards[j];
        s += '{\n';
        s += indent + '          "icon": "' + card.icon + '",\n';
        s += indent + '          "title": "' + escapeString(card.title) + '",\n';
        s += indent + '          "body": "' + escapeString(card.body) + '"\n';
        s += indent + '        }';
        if (j < sec.cards.length - 1) s += ',';
        s += '\n';
      }
      s += indent + '      ],\n';
    }
    if (sec.diagram) s += indent + '      "diagram": "' + sec.diagram + '",\n';
    if (sec.caption) s += indent + '      "caption": "' + escapeString(sec.caption) + '",\n';
    s += indent + '    }';
    if (i < sections.length - 1) s += ',';
    s += '\n';
  }
  return s;
}

function serializeExamQuestions(questions, indent) {
  let s = '';
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    s += indent + '    {\n';
    s += indent + '      "question": "' + escapeString(q.question) + '",\n';
    s += indent + '      "answer": "' + escapeString(q.answer) + '"\n';
    s += indent + '    }';
    if (i < questions.length - 1) s += ',';
    s += '\n';
  }
  return s;
}

const new1_9 = serializeTopic(topic1_9, '        ');
const new1_10 = serializeTopic(topic1_10, '        ');

console.log('New 1.9 length: ' + new1_9.length);
console.log('New 1.10 length: ' + new1_10.length);

// Replace 1.9
content = content.substring(0, start1_9) + new1_9 + ',' + content.substring(end1_9 + 1);

// Re-find 1.10 boundaries after 1.9 replacement
const newIdx1_10 = content.indexOf(search1_10, content.indexOf(stqaUnit1Name));
let newStart1_10 = content.lastIndexOf('{', newIdx1_10);
braceCount = 0;
let newEnd1_10 = -1;
for (let i = newStart1_10; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      newEnd1_10 = i;
      break;
    }
  }
}

console.log('After 1.9 replacement, 1.10: start=' + newStart1_10 + ', end=' + newEnd1_10);

// Replace 1.10
content = content.substring(0, newStart1_10) + new1_10 + ',' + content.substring(newEnd1_10 + 1);

fs.writeFileSync(filePath, content);
console.log('Topics 1.9 and 1.10 replaced successfully!');
console.log('New file size: ' + content.length);
