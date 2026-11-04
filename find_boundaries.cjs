const fs = require('fs');
const filePath = 'src/data/topics.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find the STQA unit-1 section (between unit-1 for software-testing and unit-2 for software-testing)
// unit-1 starts at line 5804, unit-2 starts at line 8307

// Find the "name": "Fundamentals of Software Quality Assurance" to locate unit-1
const unit1Name = '"name": "Fundamentals of Software Quality Assurance"';
const unit1NameIdx = content.indexOf(unit1Name);
console.log('unit-1 name at: ' + unit1NameIdx);

// Find the opening { before unit-1 name
let unit1Start = content.lastIndexOf('{', unit1NameIdx);
console.log('unit-1 start: ' + unit1Start);

// Find unit-2 start
const unit2Name = '"name": "Essentials of Software Testing"';
const unit2NameIdx = content.indexOf(unit2Name);
console.log('unit-2 name at: ' + unit2NameIdx);

// Find the opening { before unit-2 name
let unit2Start = content.lastIndexOf('{', unit2NameIdx);
console.log('unit-2 start: ' + unit2Start);

// Find topics 1.9 through 1.18 within unit-1
// Find each topic by its number
const topicNumbers = ['1.9', '1.10', '1.11', '1.12', '1.13', '1.14', '1.15', '1.16', '1.17', '1.18'];
const topicStarts = [];
const topicEnds = [];

for (const num of topicNumbers) {
  const searchStr = '"number": "' + num + '"';
  const idx = content.indexOf(searchStr, unit1Start);
  if (idx === -1) {
    console.log('Could not find topic ' + num);
    continue;
  }
  // Backtrack to find the opening {
  let topicStart = content.lastIndexOf('{', idx);
  topicStarts.push({ num, start: topicStart, idx });
}

// Now find the end of each topic by counting braces
for (let i = 0; i < topicStarts.length; i++) {
  const start = topicStarts[i].start;
  let braceCount = 0;
  let endIdx = -1;
  for (let j = start; j < content.length; j++) {
    if (content[j] === '{') braceCount++;
    if (content[j] === '}') {
      braceCount--;
      if (braceCount === 0) {
        endIdx = j;
        break;
      }
    }
  }
  topicEnds.push(endIdx);
  console.log('Topic ' + topicStarts[i].num + ': start=' + start + ', end=' + endIdx + ', length=' + (endIdx - start + 1));
}

// Save boundaries
fs.writeFileSync('/tmp/topic_boundaries.json', JSON.stringify({
  unit1Start,
  unit2Start,
  topics: topicStarts.map((t, i) => ({ num: t.num, start: t.start, end: topicEnds[i] }))
}, null, 2));
