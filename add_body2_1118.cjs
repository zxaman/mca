const fs = require('fs');
const filePath = 'src/data/topics.js';
let content = fs.readFileSync(filePath, 'utf8');

// body2 content for each topic's definition sections
const body2Map = {
  '1.11': {
    'Complexity Metrics': 'Simple words mein: Complexity metrics software code ke complexity measure karne ka tools hain. Agar code complex hai, toh maintain aur test karna mushkil hai. Metrics batate hain ki code ka complexity kitna hai — simple hai ya complex hai.',
    'Cyclomatic Complexity': 'Cyclomatic complexity control flow graph ka complexity measure karta hai. Iska matlab hai code mein decision points kitne hain. If, else, while, for — yeh sab decision points hain. Jitne jada decision points, utna complex code. Formula: M = E - N + 2P.',
    'Halstead Metrics': 'Halstead metrics operators aur operands pe analysis karta hai. Code ka vocabulary (n), length (N), volume (V) measure karta hai. Yeh batata hai ki code kitna complex hai — operators aur operands ka count se.',
    'McCabe Complexity': 'McCabe complexity decision points count karta hai. If, else, while, for, case — yeh sab decision points hain. V(G) = D + 1 formula hai. Jitne jada decision points, utna complex code.',
    'Object-Oriented Complexity': 'Object-oriented complexity OO design ke complexity measure karta hai. Inheritance depth, coupling, cohesion — yeh sab batate hain ki OO design ka quality kaisa hai. Low coupling aur high cohesion accha design batate hain.'
  },
  '1.12': {
    'Quality Metrics': 'Simple words mein: Quality metrics software quality ko measure karne ka tools hain. Yeh batate hain ki software quality kaisi hai — defects kitne hain, testing coverage kaisa hai, code quality kaisi hai. Metrics quality track karne aur improvement identify karne mein help karte hain.',
    'Defect Metrics': 'Defect metrics quality defects measure karte hain. Defect density (defects per KLOC), DRE (defects caught before release), reopen rate — yeh sab defects ka analysis karte hain. Yeh batate hain ki defects ka quality kaisa hai.',
    'Testing Metrics': 'Testing metrics test effectiveness measure karte hain. Test coverage, pass rate, fail rate, automation coverage — yeh batate hain ki testing ka quality kaisa hai. High coverage = accha testing.',
    'Code Quality Metrics': 'Code quality metrics code quality assess karte hain. Complexity, duplication, review coverage, documentation — yeh batate hain ki code ka quality kaisa hai. High complexity, high duplication = kharab quality.',
    'Process Metrics': 'Process metrics process maturity measure karte hain. Schedule variance, cost variance, escape rate, volatility — yeh batate hain ki process ka quality kaisa hai. High variance = process issues.'
  },
  '1.13': {
    'Availability': 'Simple words mein: Availability system operational hone ka percentage hai. Agar system 99.9% available hai, toh 0.1% down hai. Jitne jada available, utna accha hai. 99.999% = five nines = 26 seconds downtime per month.',
    'Uptime Metrics': 'Uptime metrics system uptime measure karte hain. Uptime percentage, downtime, SLA compliance — yeh sab availability batate hain. 99.5% uptime = 3.65 days downtime per year.',
    'Reliability Metrics': 'Reliability metrics system reliability measure karte hain. MTBF (Mean Time Between Failures) — failures beech ka time. MTTR (Mean Time To Repair) — repair ka time. High MTBF = reliable. Low MTTR = fast recovery.',
    'Performance Metrics': 'Performance metrics system performance measure karte hain. Response time (request to response), throughput (requests per second), error rate — yeh batate hain ki system ka performance kaisa hai.',
    'Recovery Metrics': 'Recovery metrics system recovery capability measure karte hain. RTO (Recovery Time Objective) — maximum acceptable downtime. RPO (Recovery Point Objective) — maximum acceptable data loss. RPO = 0 = zero data loss.'
  },
  '1.14': {
    'DRE': 'Simple words mein: DRE (Defect Removal Effectiveness) software quality ka important metric hai. Yeh batata hai ki total defects mein se kitne defects pre-release phase mein caught kiye gaye. Target 90%+ hai. High DRE = effective testing.',
    'DRE Calculation': 'DRE calculation mein pre-release defects aur total defects ka ratio lena hota hai. Formula: DRE = (Pre-release defects / Total defects) * 100. Example: 95 pre-release, 5 post-release. DRE = 95%.',
    'DRE Improvement': 'DRE improvement strategies: comprehensive testing (full coverage), early testing (shift-left), code reviews, static analysis, test automation, quality gates, training. Yeh sab DRE improve karne ke liye important hain.',
    'DRE Challenges': 'DRE challenges: defect detection (hidden defects), environment differences (test vs production), user expectations (variability), complexity (hidden defects), documentation (poor docs), resources (limited testing).'
  },
  '1.15': {
    'FMEA': 'Simple words mein: FMEA (Failure Mode and Effects Analysis) systematic failure analysis approach hai. Yeh potential failures identify karta hai aur unka analysis karta hai. RPN = S * O * D. High RPN = High risk. Yeh proactive risk management hai.',
    'FMEA Process': 'FMEA process 8 steps pe based hai: system analysis (components identify), failure identification (potential failures), effects analysis (failure impact), severity scoring (S 1-10), occurrence scoring (O 1-10), detection scoring (D 1-10), RPN calculation (S * O * D), action plan (high RPN actions).',
    'FMEA Scoring': 'FMEA scoring mein 3 parameters hain: Severity (S): 1-10. 10 = Catastrophic, 1 = Minor. Occurrence (O): 1-10. 10 = Very likely, 1 = Very unlikely. Detection (D): 1-10. 10 = Undetectable, 1 = Certain detection. RPN = S * O * D. Maximum 1000.',
    'FMEA Benefits': 'FMEA benefits: proactive risk management (failures prevent), quality improvement (defects reduce), cost reduction (failure costs reduce), safety improvement (safety incidents prevent), documentation (failure analysis), team collaboration (cross-functional teams), decision making (risk-based decisions).'
  },
  '1.16': {
    'QFD': 'Simple words mein: QFD (Quality Function Deployment) customer requirements ko technical specifications mein translate karne ka systematic approach hai. Yeh ensure karta hai ki customer needs properly meet hoti hain. House of Quality matrix customer aur technical requirements ko link karta hai.',
    'House of Quality': 'House of Quality QFD ka central matrix hai. Customer requirements (Whats) — customer needs. Technical requirements (Hows) — technical solutions. Relationship matrix — customer vs technical relationships. Competitive assessment — competitor comparison. Target values — technical targets.',
    'QFD Process': 'QFD process 7 steps pe based hai: customer research (requirements collect), requirements analysis (prioritize), technical translation (customer to technical), relationship matrix (customer vs technical), competitive analysis (competitor comparison), target setting (technical targets), deployment (departments mein cascade).',
    'QFD Benefits': 'QFD benefits: customer focus (needs meet), early quality (design defects prevent), communication (team communication), cost reduction (design changes reduce), documentation (requirements document), team collaboration (cross-functional), decision making (design priorities).'
  },
  '1.17': {
    "Taguchi's Loss Function": 'Simple words mein: Taguchi Loss Function quality loss ko measure karne ka quantitative approach hai. Formula: L = k * (y - m)^2. Yeh measure karta hai ki product performance target se kitna deviate hai. Quality = minimal deviation from target.',
    'Loss Function Types': 'Loss function types: Smaller-the-Better (target=0, loss=k*y^2, examples: defects, noise), Larger-the-Better (target=infinity, loss=k*(1/y)^2, examples: strength, efficiency), Nominal-the-Best (target=m, loss=k*(y-m)^2, examples: dimensions, temperature).',
    "Taguchi's Approach": "Taguchi's approach: target-oriented (target values pe focus), continuous loss (loss continuous measure), customer focus (customer impact), preventive approach (defects prevent), design for quality (quality design mein integrate), robust design (variation resistant).",
    "Taguchi's Robust Design": "Taguchi's robust design variation resistant banata hai. Control factors (design parameters), noise factors (environmental factors), parameter design (optimize), tolerance design (specify), orthogonal arrays (Taguchi methods), DOE (experiments). Yeh sab variation minimize karte hain."
  },
  '1.18': {
    'COQ': 'Simple words mein: COQ (Cost of Quality) quality-related costs ko quantify karne ka framework hai. Yeh 4 categories mein divide karta hai: Prevention (defects prevent karne ke costs), Appraisal (quality measure karne ke costs), Internal Failure (internal defects fix karne ke costs), External Failure (external defects fix karne ke costs). Total COQ = sabhi costs ka sum.',
    'COQ Categories': 'COQ 4 categories: Prevention (quality planning, training, docs, audits) — defects rokne ke costs. Appraisal (inspection, testing, measurement) — quality check karne ke costs. Internal Failure (scrap, rework, downtime) — internal defects fix karne ke costs. External Failure (warranty, returns, complaints) — external defects fix karne ke costs.',
    'Prevention Costs': 'Prevention costs defects prevent karne ke costs hain. Quality planning (quality plans develop), training (employees quality train), documentation (quality procedures document), audits (quality systems audit), design reviews (designs review), process improvement (processes improve). Yeh defects rokne ke liye invest kiye jaate hain.',
    'Appraisal Costs': 'Appraisal costs quality measure karne ke costs hain. Inspection (products inspect), testing (products test), measurement (quality characteristics measure), calibration (equipment calibrate), testing equipment (equipment purchase). Yeh quality check karne ke liye invest kiye jaate hain.',
    'Internal Failure Costs': 'Internal failure costs internal defects fix karne ke costs hain. Scrap (defective products discard), rework (defective products repair), retest (repaired products test), downtime (equipment downtime), failure analysis (causes analyze), yield loss (quality yield loss), corrective actions (actions implement). Yeh defects fix karne ke costs hain.',
    'External Failure Costs': 'External failure costs external defects fix karne ke costs hain. Warranty (warranty claims), returns (defective products return), complaints (customer complaints), lost sales (sales lose), lost customers (customers lose), liability (product liability), reputation damage (brand reputation damage). Yeh external defects se hone wale costs hain.'
  }
};

// Find STQA unit-1 section
const stqaUnit1Name = '"name": "Fundamentals of Software Quality Assurance"';
const stqaUnit1Idx = content.indexOf(stqaUnit1Name);
if (stqaUnit1Idx === -1) {
  console.log('Could not find STQA unit-1');
  process.exit(1);
}

// For each topic 1.11-1.18, find its definition sections and add body2
const topicNums = ['1.11', '1.12', '1.13', '1.14', '1.15', '1.16', '1.17', '1.18'];
let totalAdded = 0;

for (const num of topicNums) {
  const searchStr = '"number": "' + num + '"';
  const idx = content.indexOf(searchStr, stqaUnit1Idx);
  if (idx === -1) {
    console.log('Could not find topic ' + num);
    continue;
  }

  // Find the topic object boundaries (start from the brace before "id" field)
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
  console.log('Topic ' + num + ' section length: ' + topicSection.length);

  // For each definition section title in this topic, find the body field and add body2 after it
  const definitions = body2Map[num];
  let sectionContent = topicSection;
  let addedCount = 0;

  for (const [defTitle, body2Text] of Object.entries(definitions)) {
    // Find the definition section with this title
    const titleSearch = '"title": "' + defTitle + '"';
    const titleIdx = sectionContent.indexOf(titleSearch);
    if (titleIdx === -1) {
      console.log('  Could not find definition: ' + defTitle);
      continue;
    }

    // Find the "body" field after this title
    const bodySearch = '"body": "';
    const bodyIdx = sectionContent.indexOf(bodySearch, titleIdx);
    if (bodyIdx === -1) {
      console.log('  Could not find body for: ' + defTitle);
      continue;
    }

    // Find the end of the body string (look for the closing quote followed by comma or newline)
    let bodyEndIdx = bodyIdx + '"body": "'.length;
    let escapeNext = false;
    while (bodyEndIdx < sectionContent.length) {
      const ch = sectionContent[bodyEndIdx];
      if (escapeNext) {
        escapeNext = false;
      } else if (ch === '\\') {
        escapeNext = true;
      } else if (ch === '"') {
        break;
      }
      bodyEndIdx++;
    }

    // bodyEndIdx is at the closing quote
    // Check if body2 already exists after body
    const afterBody = sectionContent.substring(bodyEndIdx, bodyEndIdx + 200);
    if (afterBody.includes('"body2"')) {
      console.log('  body2 already exists for: ' + defTitle);
      continue;
    }

    // Insert body2 field after body
    const body2Field = ',\n        "body2": "' + body2Text.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
    sectionContent = sectionContent.substring(0, bodyEndIdx + 1) + body2Field + sectionContent.substring(bodyEndIdx + 1);
    addedCount++;
    totalAdded++;
  }

  console.log('  Added ' + addedCount + ' body2 fields to topic ' + num);

  // Replace the topic section in the main content
  content = content.substring(0, startIdx) + sectionContent + content.substring(endIdx + 1);
}

fs.writeFileSync(filePath, content);
console.log('Total body2 fields added: ' + totalAdded);
console.log('New file size: ' + content.length);
