const fs = require('fs');
const filePath = 'src/data/topics.js';
let content = fs.readFileSync(filePath, 'utf8');

// Find topic 1.18 in STQA unit-1
const stqaUnit1Name = '"name": "Fundamentals of Software Quality Assurance"';
const stqaIdx = content.indexOf(stqaUnit1Name);
const searchStr = '"number": "1.18"';
const idx = content.indexOf(searchStr, stqaIdx);

// Find topic object boundaries
let startIdx = content.lastIndexOf('{', idx);
let braceCount = 0;
let endIdx = -1;
for (let i = startIdx; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      endIdx = i;
      break;
    }
  }
}

const topicSection = content.substring(startIdx, endIdx + 1);

// Find the 4 sections that need type change: Prevention Costs, Appraisal Costs, Internal Failure Costs, External Failure Costs
// These are type 'points' but have body content and no points array
// Pattern: "type": "points",\n ... "title": "X", ... "body": ... (no "points":)
// We need to find each section and change its type to 'definition'

const titlesToFix = [
  '"title": "Prevention Costs"',
  '"title": "Appraisal Costs"',
  '"title": "Internal Failure Costs"',
  '"title": "External Failure Costs"'
];

let sectionContent = topicSection;
let fixed = 0;

for (const titleSearch of titlesToFix) {
  const titleIdx = sectionContent.indexOf(titleSearch);
  if (titleIdx === -1) {
    console.log('Not found: ' + titleSearch);
    continue;
  }

  // Find the type field that precedes this title (in the same section object)
  // The type field comes before the title in the same section
  const typeIdx = sectionContent.lastIndexOf('"type": "points"', titleIdx);
  if (typeIdx === -1) {
    console.log('No type found for: ' + titleSearch);
    continue;
  }

  // Verify this section has body but no points array
  // Find the next section boundary (next '"type":' or end of sections array)
  const nextTypeIdx = sectionContent.indexOf('"type":', typeIdx + 1);
  const nextSectionBoundary = nextTypeIdx > -1 ? nextTypeIdx : sectionContent.length;
  const sectionText = sectionContent.substring(typeIdx, nextSectionBoundary);

  const hasBody = sectionText.includes('"body":');
  const hasPoints = sectionText.includes('"points":');

  if (hasBody && !hasPoints) {
    // Replace "type": "points" with "type": "definition"
    const oldStr = '"type": "points"';
    const newStr = '"type": "definition"';
    sectionContent = sectionContent.substring(0, typeIdx) + newStr + sectionContent.substring(typeIdx + oldStr.length);
    fixed++;
    console.log('Fixed: ' + titleSearch.replace('"title": ', ''));
  } else {
    console.log('Skip: ' + titleSearch + ' (body=' + hasBody + ', points=' + hasPoints + ')');
  }
}

content = content.substring(0, startIdx) + sectionContent + content.substring(endIdx + 1);
fs.writeFileSync(filePath, content);
console.log('Total sections fixed: ' + fixed);
console.log('New file size: ' + content.length);
