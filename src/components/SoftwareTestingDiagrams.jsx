const FONT = "'Segoe UI', system-ui, sans-serif";

// Translucent card fills: an rgba fill is rendered identically by the browser, the
// lightbox and the SVG rasteriser, whereas an opacity attribute is silently dropped
// by some renderers and turns the card into a solid block that hides its own labels.
const tint = (hex, alpha) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`;
};


// 1. QA vs QC Comparison
export function QAQCComparisonDiagram() {
  const qa = [
    ['Prevents defects', 'process focus — stop the defect being created'],
    ['Owned by the whole team', 'analysts, developers, testers, managers'],
    ['Systematic', 'standards, reviews, checklists, audits'],
    ['Continuous', 'runs through every phase of the life cycle'],
  ];
  const qc = [
    ['Finds defects', 'product focus — compare output with the expectation'],
    ['Run by the testing team', 'an independent team executes the checks'],
    ['Validation', 'the software is actually executed'],
    ['Final gate', 'release decision on measured quality'],
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="400" y="28" textAnchor="middle" fill="#dbe6ff" fontSize="15" fontWeight="800" fontFamily={FONT}>
        Quality assurance versus quality control
      </text>
      <text x="400" y="48" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        QA builds quality into the process · QC measures quality in the product
      </text>

      <rect x="20" y="66" width="368" height="256" rx="12" fill="rgba(0,71,255,0.12)" stroke="#0047ff" strokeWidth="1.6" />
      <text x="40" y="94" fill="#6fb2ff" fontSize="12.5" fontWeight="800" fontFamily={FONT}>QA — QUALITY ASSURANCE</text>
      <text x="40" y="112" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>Process oriented · preventive · verification</text>
      {qa.map((row, i) => {
        const y = 146 + i * 44;
        return (
          <g key={row[0]}>
            <circle cx="46" cy={y - 3} r="3.4" fill="#6fb2ff" />
            <text x="58" y={y} fill="#ffffff" fontSize="10.4" fontWeight="700" fontFamily={FONT}>{row[0]}</text>
            <text x="58" y={y + 15} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{row[1]}</text>
          </g>
        );
      })}

      <rect x="412" y="66" width="368" height="256" rx="12" fill="rgba(255,0,64,0.12)" stroke="#ff0040" strokeWidth="1.6" />
      <text x="432" y="94" fill="#ff7a90" fontSize="12.5" fontWeight="800" fontFamily={FONT}>QC — QUALITY CONTROL</text>
      <text x="432" y="112" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>Product oriented · detective · validation</text>
      {qc.map((row, i) => {
        const y = 146 + i * 44;
        return (
          <g key={row[0]}>
            <circle cx="438" cy={y - 3} r="3.4" fill="#ff7a90" />
            <text x="450" y={y} fill="#ffffff" fontSize="10.4" fontWeight="700" fontFamily={FONT}>{row[0]}</text>
            <text x="450" y={y + 15} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{row[1]}</text>
          </g>
        );
      })}

      <text x="400" y="348" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Example — QA: a mandatory code review before every merge · QC: executing the login test cases on the build
      </text>
      <text x="400" y="372" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>
        Exam point: QA is verification of the process, QC is validation of the product; both are needed, QC alone finds defects too late
      </text>
    </svg>
  );
}

// 2. SQA Components
export function SQAComponentsDiagram() {
  const components = [
    { name: 'Standards', desc: ['ISO 9001, CMMI,', 'coding and review standards'], color: '#0047ff' },
    { name: 'Metrics', desc: ['defect density, coverage,', 'review rate, MTTR'], color: '#00aaff' },
    { name: 'Reviews', desc: ['walkthrough, technical', 'review, formal inspection'], color: '#00ff88' },
    { name: 'Testing', desc: ['unit, integration,', 'system, acceptance'], color: '#c4ff00' },
    { name: 'Training', desc: ['skills, tool knowledge,', 'quality awareness'], color: '#ff8800' },
    { name: 'Audits', desc: ['process compliance', 'and independent check'], color: '#ff0080' },
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="400" y="28" textAnchor="middle" fill="#dbe6ff" fontSize="15" fontWeight="800" fontFamily={FONT}>
        Components of the SQA system
      </text>
      <text x="400" y="48" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Six components work together — remove one and the quality system has a hole
      </text>
      {components.map((c, i) => {
        const x = 16 + (i % 3) * 254;
        const y = 70 + Math.floor(i / 3) * 124;
        return (
          <g key={c.name}>
            <rect x={x} y={y} width="238" height="106" rx="10" fill={tint(c.color, 0.12)} stroke={c.color} strokeWidth="1.5" />
            <text x={x + 16} y={y + 26} fill={c.color} fontSize="11.5" fontWeight="800" fontFamily={FONT}>{c.name}</text>
            <text x={x + 16} y={y + 50} fill="#e8f0ff" fontSize="9" fontFamily={FONT}>{c.desc[0]}</text>
            <text x={x + 16} y={y + 66} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{c.desc[1]}</text>
          </g>
        );
      })}
      <text x="400" y="340" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Standards and metrics define quality · reviews and testing measure it · training and audits keep it alive
      </text>
      <text x="400" y="366" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>
        Exam point: the SQA system = standards, metrics, reviews, testing, training and audits, supported by the quality plan
      </text>
    </svg>
  );
}

// 3. Quality in the Business Context
export function QualityBusinessImpactDiagram() {
  const benefits = [
    { name: 'Lower cost', desc: ['less rework,', 'fewer hotfixes'], color: '#00ff88' },
    { name: 'Satisfied users', desc: ['features work,', 'trust grows'], color: '#00aaff' },
    { name: 'Reputation', desc: ['reviews, referrals,', 'brand value'], color: '#c4ff00' },
    { name: 'Competitive edge', desc: ['faster releases,', 'lower price'], color: '#ff8800' },
    { name: 'Lower risk', desc: ['no outage,', 'no penalty'], color: '#ff0080' },
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="400" y="28" textAnchor="middle" fill="#dbe6ff" fontSize="15" fontWeight="800" fontFamily={FONT}>
        Software quality in the business context
      </text>
      <text x="400" y="48" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Quality is not a technical luxury — it decides cost, reputation and market position
      </text>
      <rect x="150" y="64" width="500" height="46" rx="10" fill="rgba(196,255,0,0.12)" stroke="#c4ff00" strokeWidth="1.5" />
      <text x="400" y="93" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>SOFTWARE QUALITY</text>
      {[190, 305, 420, 535, 650].map((x, i) => (
        <line key={i} x1="400" y1="110" x2={x} y2="160" stroke="#33406b" strokeWidth="1.4" />
      ))}
      {benefits.map((b, i) => {
        const x = 105 + i * 118;
        return (
          <g key={b.name}>
            <rect x={x} y="160" width="108" height="92" rx="10" fill={tint(b.color, 0.12)} stroke={b.color} strokeWidth="1.5" />
            <text x={x + 54} y="184" textAnchor="middle" fill={b.color} fontSize="10" fontWeight="800" fontFamily={FONT}>{b.name}</text>
            <text x={x + 54} y="205" textAnchor="middle" fill="#e8f0ff" fontSize="8.6" fontFamily={FONT}>{b.desc[0]}</text>
            <text x={x + 54} y="219" textAnchor="middle" fill="#9ab0e0" fontSize="8.6" fontFamily={FONT}>{b.desc[1]}</text>
          </g>
        );
      })}
      <rect x="150" y="272" width="500" height="40" rx="10" fill="rgba(0,71,255,0.14)" stroke="#0047ff" strokeWidth="1.5" />
      <text x="400" y="297" textAnchor="middle" fill="#6fb2ff" fontSize="11" fontWeight="700" fontFamily={FONT}>
        Better quality → lower cost, faster delivery, repeat business
      </text>
      <text x="400" y="342" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The cost of poor quality is paid by the business, not only by the test team
      </text>
      <text x="400" y="368" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>
        Exam point: quality affects cost of rework, customer satisfaction, reputation, competitiveness and business risk
      </text>
    </svg>
  );
}

// 4. Planning for SQA
export function SQAPlanningProcessDiagram() {
  const steps = [
    ['1. Quality goals', 'measurable targets,', 'for the release'],
    ['2. Standards', 'ISO 9001, CMMI,', 'internal checklists'],
    ['3. Resources', 'people, tools,', 'environment, budget'],
    ['4. Schedule', 'reviews and tests', 'on the project plan'],
    ['5. Processes', 'review, test and', 'defect workflow'],
    ['6. Documentation', 'quality plan, records,', 'audit evidence'],
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="400" y="28" textAnchor="middle" fill="#dbe6ff" fontSize="15" fontWeight="800" fontFamily={FONT}>
        Planning for software quality assurance
      </text>
      <text x="400" y="48" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        The SQA plan fixes goals, standards, resources, schedule, process and documentation before work starts
      </text>
      {steps.map((s, i) => {
        const x = 12 + i * 130;
        return (
          <g key={s[0]}>
            <rect x={x} y="80" width="112" height="120" rx="10" fill={tint('#0047ff', 0.1 + i * 0.012)} stroke="#6fb2ff" strokeWidth="1.4" />
            <text x={x + 56} y="106" textAnchor="middle" fill="#c4ff00" fontSize="9.6" fontWeight="800" fontFamily={FONT}>{s[0]}</text>
            <text x={x + 56} y="132" textAnchor="middle" fill="#e8f0ff" fontSize="9" fontFamily={FONT}>{s[1]}</text>
            <text x={x + 56} y="148" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{s[2]}</text>
          </g>
        );
      })}
      {[0, 1, 2, 3, 4].map((i) => (
        <text key={i} x={124 + i * 130} y="146" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>→</text>
      ))}
      <rect x="60" y="228" width="680" height="60" rx="10" fill="rgba(0,255,136,0.1)" stroke="#00ff88" strokeWidth="1.4" />
      <text x="400" y="254" textAnchor="middle" fill="#00ff88" fontSize="11" fontWeight="700" fontFamily={FONT}>
        Quality is built in, not tested in
      </text>
      <text x="400" y="274" textAnchor="middle" fill="#9ab0e0" fontSize="9.4" fontFamily={FONT}>
        The plan says who reviews, who tests, against which standard, by which date and how the result is recorded
      </text>
      <text x="400" y="330" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        A plan without measurable goals cannot be audited — goals, standards and records are the three proofs
      </text>
      <text x="400" y="360" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>
        Exam point: planning for SQA produces the quality plan covering goals, standards, resources, schedule and documentation
      </text>
    </svg>
  );
}

// 5. Product Quality and Process Quality
export function ProductProcessQualityDiagram() {
  const product = ['Functionality', 'Reliability', 'Usability', 'Performance', 'Maintainability', 'Security'];
  const process = ['Requirements review', 'Design inspection', 'Coding standard', 'Test coverage target', 'Defect tracking', 'Process audit'];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="400" y="28" textAnchor="middle" fill="#dbe6ff" fontSize="15" fontWeight="800" fontFamily={FONT}>
        Product quality and process quality
      </text>
      <text x="400" y="48" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Product quality is what the user experiences · process quality is how the product was produced
      </text>
      <rect x="20" y="66" width="368" height="252" rx="12" fill="rgba(0,71,255,0.12)" stroke="#0047ff" strokeWidth="1.6" />
      <text x="40" y="92" fill="#6fb2ff" fontSize="11.5" fontWeight="800" fontFamily={FONT}>PRODUCT QUALITY — outcome</text>
      <text x="40" y="110" fill="#9ab0e0" fontSize="9.2" fontFamily={FONT}>Measured on the delivered software</text>
      {product.map((p, i) => (
        <g key={p}>
          <circle cx="46" cy={134 + i * 30} r="3.2" fill="#6fb2ff" />
          <text x="58" y={138 + i * 30} fill="#e8f0ff" fontSize="10" fontFamily={FONT}>{p}</text>
        </g>
      ))}
      <rect x="412" y="66" width="368" height="252" rx="12" fill="rgba(255,136,0,0.12)" stroke="#ff8800" strokeWidth="1.6" />
      <text x="432" y="92" fill="#ffb066" fontSize="11.5" fontWeight="800" fontFamily={FONT}>PROCESS QUALITY — cause</text>
      <text x="432" y="110" fill="#9ab0e0" fontSize="9.2" fontFamily={FONT}>Measured on the way the work is done</text>
      {process.map((p, i) => (
        <g key={p}>
          <circle cx="438" cy={134 + i * 30} r="3.2" fill="#ffb066" />
          <text x="450" y={138 + i * 30} fill="#e8f0ff" fontSize="10" fontFamily={FONT}>{p}</text>
        </g>
      ))}
      <text x="400" y="344" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Good process → good product · a lucky good product does not survive the next release
      </text>
      <text x="400" y="370" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>
        Exam point: product quality satisfies the user today, process quality keeps satisfying the user release after release
      </text>
    </svg>
  );
}

// 6. Software Process Models
export function ProcessModelsComparisonDiagram() {
  const models = [
    { name: 'Waterfall', how: 'Linear phases', test: 'one test phase after coding', color: '#0047ff' },
    { name: 'Agile', how: 'Short iterations', test: 'tests inside every sprint', color: '#00ff88' },
    { name: 'Spiral', how: 'Risk driven loops', test: 'risk analysis in every loop', color: '#ff8800' },
    { name: 'V-Model', how: 'V shaped phases', test: 'a test level per design phase', color: '#ff0080' },
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="400" y="28" textAnchor="middle" fill="#dbe6ff" fontSize="15" fontWeight="800" fontFamily={FONT}>
        Software process models and where testing fits
      </text>
      <text x="400" y="48" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        The model decides when testing starts, how often it repeats and how early defects are found
      </text>
      {models.map((m, i) => {
        const x = 14 + i * 192;
        return (
          <g key={m.name}>
            <rect x={x} y="70" width="176" height="150" rx="10" fill={tint(m.color, 0.12)} stroke={m.color} strokeWidth="1.6" />
            <text x={x + 88} y="96" textAnchor="middle" fill={m.color} fontSize="12" fontWeight="800" fontFamily={FONT}>{m.name}</text>
            <text x={x + 88} y="118" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{m.how}</text>
            <line x1={x + 22} y1="132" x2={x + 154} y2="132" stroke="#33406b" strokeWidth="1" />
            <text x={x + 88} y="152" textAnchor="middle" fill="#c4ff00" fontSize="8.8" fontWeight="700" fontFamily={FONT}>TESTING</text>
            <text x={x + 88} y="172" textAnchor="middle" fill="#e8f0ff" fontSize="9" fontFamily={FONT}>{m.test.split(' ').slice(0, 3).join(' ')}</text>
            <text x={x + 88} y="188" textAnchor="middle" fill="#e8f0ff" fontSize="9" fontFamily={FONT}>{m.test.split(' ').slice(3).join(' ')}</text>
          </g>
        );
      })}
      <rect x="40" y="238" width="720" height="34" rx="8" fill="rgba(0,71,255,0.12)" stroke="#0047ff" strokeWidth="1.2" />
      <text x="400" y="260" textAnchor="middle" fill="#6fb2ff" fontSize="9.6" fontFamily={FONT}>
        Earlier test design = cheaper defects · V-model pairs each development phase with a test level
      </text>
      <text x="400" y="312" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Waterfall finds defects late, Agile and V-model shift testing left, Spiral attacks the biggest risk first
      </text>
      <text x="400" y="344" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>
        Exam point: compare models by phase structure, risk handling and the point at which testing enters
      </text>
    </svg>
  );
}

// 7. Seven QC Tools
export function QCToolsOverviewDiagram() {
  const tools = [
    { name: 'Check sheet', use: 'collect the defect data', color: '#0047ff' },
    { name: 'Flow chart', use: 'map the process steps', color: '#00aaff' },
    { name: 'Histogram', use: 'shape of the variation', color: '#00ff88' },
    { name: 'Pareto chart', use: '80/20 priority of causes', color: '#c4ff00' },
    { name: 'Fishbone', use: 'find the root cause', color: '#ff8800' },
    { name: 'Scatter diagram', use: 'relation of two variables', color: '#ff0080' },
    { name: 'Control chart', use: 'detect drift over time', color: '#aa00ff' },
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      <text x="400" y="28" textAnchor="middle" fill="#dbe6ff" fontSize="15" fontWeight="800" fontFamily={FONT}>
        The seven QC tools
      </text>
      <text x="400" y="48" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Seven simple charts that turn defect data into a decision
      </text>
      {tools.map((t, i) => {
        const x = 16 + (i % 4) * 196;
        const y = 70 + Math.floor(i / 4) * 112;
        return (
          <g key={t.name}>
            <rect x={x} y={y} width="180" height="94" rx="10" fill={tint(t.color, 0.12)} stroke={t.color} strokeWidth="1.5" />
            <text x={x + 14} y={y + 28} fill={t.color} fontSize="10.6" fontWeight="800" fontFamily={FONT}>{t.name}</text>
            <text x={x + 14} y={y + 54} fill="#e8f0ff" fontSize="9.2" fontFamily={FONT}>{t.use.split(' ').slice(0, 3).join(' ')}</text>
            <text x={x + 14} y={y + 70} fill="#9ab0e0" fontSize="9.2" fontFamily={FONT}>{t.use.split(' ').slice(3).join(' ')}</text>
          </g>
        );
      })}
      <text x="400" y="330" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Pareto and fishbone carry the most marks — the first ranks causes, the second traces one cause to its root
      </text>
      <text x="400" y="360" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>
        Exam point: the seven QC tools are check sheet, flow chart, histogram, Pareto, fishbone, scatter and control chart
      </text>
    </svg>
  );
}


// ============================================================
// TOPIC 1.8 — Quality Assurance Models
// ============================================================

export function QAModelsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="qaModelsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#aa00ff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#6600cc', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      
      <rect width="900" height="650" fill="#0a0a0f" />
      
      <text x="450" y="35" textAnchor="middle" fill="#aa00ff" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Quality Assurance Models Overview
      </text>
      
      {/* ISO-9000 */}
      <g transform="translate(50, 70)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">ISO-9000 Series</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Management</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Standardization</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Certification</text>
      </g>
      
      {/* CMM/CMMI */}
      <g transform="translate(325, 70)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CMM / CMMI</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Process Maturity</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Process Improvement</text>
      </g>
      
      {/* TMM */}
      <g transform="translate(600, 70)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">TMM</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Test Maturity</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Improvement</text>
      </g>
      
      {/* SPICE */}
      <g transform="translate(50, 200)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">SPICE</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Process Assessment</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">International Standard</text>
      </g>
      
      {/* Malcolm Baldrige */}
      <g transform="translate(325, 200)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Malcolm Baldrige</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Performance Excellence</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Award Criteria</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Organizational Excellence</text>
      </g>
      
      {/* P-CMM */}
      <g transform="translate(600, 200)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P-CMM</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">People Capability</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Workforce Development</text>
      </g>
      
      {/* Connection lines */}
      <line x1="175" y1="120" x2="325" y2="120" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="120" x2="625" y2="120" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="175" y1="250" x2="325" y2="250" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="250" x2="625" y2="250" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      
      {/* CMM Levels Visual */}
      <g transform="translate(325, 340)">
        <text x="125" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CMM 5 Levels</text>
        
        <rect x="20" y="30" width="210" height="35" rx="4" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="30" y="52" fill="#888" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">1</text>
        <text x="50" y="52" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Initial</text>
        <text x="130" y="52" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Ad hoc</text>
        
        <rect x="20" y="70" width="210" height="35" rx="4" fill="#1a1a2e" stroke="#555" strokeWidth="1" />
        <text x="30" y="92" fill="#888" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">2</text>
        <text x="50" y="92" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Repeatable</text>
        <text x="130" y="92" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Basic PM</text>
        
        <rect x="20" y="110" width="210" height="35" rx="4" fill="#2a2a3e" stroke="#666" strokeWidth="1" />
        <text x="30" y="132" fill="#aaa" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">3</text>
        <text x="50" y="132" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Defined</text>
        <text x="130" y="132" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Standardized</text>
        
        <rect x="20" y="150" width="210" height="35" rx="4" fill="#3a3a4e" stroke="#777" strokeWidth="1" />
        <text x="30" y="172" fill="#bbb" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">4</text>
        <text x="50" y="172" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Managed</text>
        <text x="130" y="172" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Quantitative</text>
        
        <rect x="20" y="190" width="210" height="35" rx="4" fill="#4a4a5e" stroke="#888" strokeWidth="1" />
        <text x="30" y="212" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">5</text>
        <text x="50" y="212" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Optimizing</text>
        <text x="130" y="212" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Continuous</text>
      </g>
      
      {/* Selection Criteria */}
      <g transform="translate(50, 480)">
        <text x="100" y="25" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Model Selection Criteria</text>
        <text x="100" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Organizational needs</text>
        <text x="100" y="60" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Process maturity goals</text>
        <text x="100" y="75" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality improvement focus</text>
        <text x="100" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Resource availability</text>
        <text x="100" y="105" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Multiple models combine</text>
      </g>
      
      <g transform="translate(600, 480)">
        <text x="100" y="25" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Benefits</text>
        <text x="100" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Structured approach</text>
        <text x="100" y="60" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Process improvement</text>
        <text x="100" y="75" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality consistency</text>
        <text x="100" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• International recognition</text>
        <text x="100" y="105" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Continuous improvement</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.9 — Software Quality Assurance Trends
// ============================================================

export function SQATrendsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="sqaTrendsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#cc0066', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      
      <rect width="900" height="650" fill="#0a0a0f" />
      
      <text x="450" y="35" textAnchor="middle" fill="#ff0080" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Software Quality Assurance Trends
      </text>
      
      {/* PSP */}
      <g transform="translate(50, 70)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">PSP</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Personal Software</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Process</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Individual improvement</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Self-discipline</text>
      </g>
      
      {/* TSP */}
      <g transform="translate(275, 70)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">TSP</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Team Software</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Process</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Team performance</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Project success</text>
      </g>
      
      {/* OO Methodology */}
      <g transform="translate(500, 70)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">OO Methodology</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Object-Oriented</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Approach</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Code reuse</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Maintainability</text>
      </g>
      
      {/* Clean-room SE */}
      <g transform="translate(725, 70)">
        <rect width="150" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="75" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Clean-room</text>
        <text x="75" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">SE</text>
        <text x="75" y="65" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Defect</text>
        <text x="75" y="78" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Prevention</text>
        <text x="75" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Formal methods</text>
      </g>
      
      {/* Defect Injection */}
      <g transform="translate(50, 210)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Injection</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Fault injection</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Test effectiveness</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Validation</text>
      </g>
      
      {/* Internal Auditing */}
      <g transform="translate(275, 210)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Internal Auditing</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Compliance</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Verification</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Process audit</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Standards</text>
      </g>
      
      {/* Inspections */}
      <g transform="translate(500, 210)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Inspections</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">& Walkthroughs</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Peer review</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Early detection</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Quality</text>
      </g>
      
      {/* CASE Tools */}
      <g transform="translate(725, 210)">
        <rect width="150" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="75" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CASE Tools</text>
        <text x="75" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Automation</text>
        <text x="75" y="68" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Efficiency</text>
        <text x="75" y="81" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Productivity</text>
        <text x="75" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Quality</text>
      </g>
      
      {/* Connection lines */}
      <line x1="250" y1="125" x2="275" y2="125" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="125" x2="500" y2="125" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="700" y1="125" x2="725" y2="125" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      
      <line x1="250" y1="265" x2="275" y2="265" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="265" x2="500" y2="265" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="700" y1="265" x2="725" y2="265" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      
      {/* PSP/TSP Phases */}
      <g transform="translate(50, 360)">
        <text x="200" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">PSP/TSP Phases</text>
        <rect x="10" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="60" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Planning</text>
        <rect x="120" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="170" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Design</text>
        <rect x="230" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="280" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Code</text>
        <rect x="340" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="390" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Test</text>
        <rect x="450" y="30" width="120" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="510" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Postmortem</text>
        
        <line x1="110" y1="42" x2="120" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="220" y1="42" x2="230" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="330" y1="42" x2="340" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="440" y1="42" x2="450" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Benefits */}
      <g transform="translate(50, 440)">
        <text x="300" y="25" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Benefits of Modern Trends</text>
        <text x="300" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality improvement</text>
        <text x="300" y="60" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Efficiency increase</text>
        <text x="300" y="75" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Defect reduction</text>
        <text x="300" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Process maturity</text>
        <text x="300" y="105" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Team collaboration</text>
      </g>
      
      <g transform="translate(50, 560)">
        <text x="300" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Modern SQA trends combine personal discipline, team processes, object-oriented design, defect prevention, and automation</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.10 — Testing Software System Security
// ============================================================

export function SecurityTestingOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00ff88', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#00aa66', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00ff88" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Testing Software System Security
      </text>
      
      {/* Six-Sigma */}
      <g transform="translate(50, 70)">
        <rect width="200" height="120" rx="8" fill="url(#secGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Six-Sigma</text>
        <text x="100" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">DMAIC Process</text>
        <text x="100" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Define → Measure</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">→ Analyze → Improve</text>
        <text x="100" y="95" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">→ Control</text>
        <text x="100" y="110" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">3.4 defects/million</text>
      </g>
      
      {/* TQM */}
      <g transform="translate(300, 70)">
        <rect width="200" height="120" rx="8" fill="url(#secGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">TQM</text>
        <text x="100" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Total Quality Mgmt</text>
        <text x="100" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Customer Focus</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Total Involvement</text>
        <text x="100" y="95" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Continuous Improvement</text>
        <text x="100" y="110" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Organization-wide</text>
      </g>
      
      {/* Security Testing */}
      <g transform="translate(550, 70)">
        <rect width="300" height="120" rx="8" fill="url(#secGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="150" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Security Testing Techniques</text>
        <text x="150" y="50" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Vulnerability Assessment</text>
        <text x="150" y="65" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Penetration Testing</text>
        <text x="150" y="80" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Code Review</text>
        <text x="150" y="95" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Security Audits</text>
        <text x="150" y="110" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Static & Dynamic Analysis</text>
      </g>
      
      {/* CIA Triad */}
      <g transform="translate(50, 230)">
        <text x="150" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CIA Triad</text>
        <circle cx="50" cy="70" r="35" fill="none" stroke="#00ff88" strokeWidth="2" />
        <text x="50" y="75" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">C</text>
        <text x="50" y="90" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Confidentiality</text>
        
        <circle cx="150" cy="70" r="35" fill="none" stroke="#00ff88" strokeWidth="2" />
        <text x="150" y="75" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">I</text>
        <text x="150" y="90" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Integrity</text>
        
        <circle cx="250" cy="70" r="35" fill="none" stroke="#00ff88" strokeWidth="2" />
        <text x="250" y="75" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">A</text>
        <text x="250" y="90" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Availability</text>
      </g>
      
      {/* Sigma Levels */}
      <g transform="translate(500, 230)">
        <text x="200" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Sigma Levels</text>
        <rect x="20" y="35" width="360" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="30" y="52" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1σ:</text>
        <text x="60" y="52" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">69% defects</text>
        <rect x="20" y="65" width="360" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="30" y="82" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">3σ:</text>
        <text x="60" y="82" fill="#ffaa00" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">66,807 defects</text>
        <rect x="20" y="95" width="360" height="25" rx="3" fill="#2a2a3e" stroke="#666" strokeWidth="1" />
        <text x="30" y="112" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6σ:</text>
        <text x="60" y="112" fill="#00ff88" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">3.4 defects/million</text>
      </g>
      
      {/* Security Testing Process */}
      <g transform="translate(50, 380)">
        <text x="300" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Security Testing Process</text>
        <rect x="10" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="70" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Assess</text>
        <rect x="140" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Scan</text>
        <rect x="270" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="330" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Test</text>
        <rect x="400" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="460" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Report</text>
        <rect x="530" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="590" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Remediate</text>
        
        <line x1="130" y1="47" x2="140" y2="47" stroke="#00ff88" strokeWidth="1" opacity="0.5" />
        <line x1="260" y1="47" x2="270" y2="47" stroke="#00ff88" strokeWidth="1" opacity="0.5" />
        <line x1="390" y1="47" x2="400" y2="47" stroke="#00ff88" strokeWidth="1" opacity="0.5" />
        <line x1="520" y1="47" x2="530" y2="47" stroke="#00ff88" strokeWidth="1" opacity="0.5" />
      </g>
      
      <g transform="translate(50, 500)">
        <text x="300" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Six Sigma and TQM are quality improvement methodologies that give security testing a systematic approach</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.11 — Complexity Metrics and Models
// ============================================================

export function ComplexityMetricsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="complexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00aaff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0066cc', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00aaff" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Complexity Metrics and Models
      </text>
      
      {/* Cyclomatic Complexity */}
      <g transform="translate(50, 70)">
        <rect width="250" height="120" rx="8" fill="url(#complexGrad)" stroke="#00aaff" strokeWidth="2" />
        <text x="125" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Cyclomatic Complexity</text>
        <text x="125" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">M = E - N + 2P</text>
        <text x="125" y="62" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Control flow analysis</text>
        <text x="125" y="77" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-5: Simple</text>
        <text x="125" y="92" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6-10: Moderate</text>
        <text x="125" y="107" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">11+: Complex</text>
      </g>
      
      {/* Halstead Metrics */}
      <g transform="translate(325, 70)">
        <rect width="250" height="120" rx="8" fill="url(#complexGrad)" stroke="#00aaff" strokeWidth="2" />
        <text x="125" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Halstead Metrics</text>
        <text x="125" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Operators + Operands</text>
        <text x="125" y="62" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Vocabulary (n)</text>
        <text x="125" y="77" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Length (N)</text>
        <text x="125" y="92" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Volume (V)</text>
        <text x="125" y="107" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Difficulty (D), Effort (E)</text>
      </g>
      
      {/* McCabe Complexity */}
      <g transform="translate(600, 70)">
        <rect width="250" height="120" rx="8" fill="url(#complexGrad)" stroke="#00aaff" strokeWidth="2" />
        <text x="125" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">McCabe Complexity</text>
        <text x="125" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Decision Points</text>
        <text x="125" y="62" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">If, else, for, while</text>
        <text x="125" y="77" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Target: less than 10</text>
        <text x="125" y="92" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Refactoring needed</text>
        <text x="125" y="107" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Above 10 = high risk</text>
      </g>
      
      {/* OO Complexity */}
      <g transform="translate(50, 220)">
        <rect width="250" height="120" rx="8" fill="url(#complexGrad)" stroke="#00aaff" strokeWidth="2" />
        <text x="125" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Object-Oriented</text>
        <text x="125" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Inheritance Depth</text>
        <text x="125" y="62" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Coupling</text>
        <text x="125" y="77" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Cohesion</text>
        <text x="125" y="92" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Method Count</text>
        <text x="125" y="107" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Attribute Count</text>
      </g>
      
      {/* Complexity Visualization */}
      <g transform="translate(325, 220)">
        <text x="125" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Complexity Scale</text>
        <rect x="20" y="30" width="210" height="25" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="30" y="47" fill="#00ff88" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-5: Simple (Green)</text>
        <rect x="20" y="60" width="210" height="25" rx="4" fill="#1a1a2e" stroke="#ffaa00" strokeWidth="1" />
        <text x="30" y="77" fill="#ffaa00" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6-10: Moderate (Yellow)</text>
        <rect x="20" y="90" width="210" height="25" rx="4" fill="#2a1a1a" stroke="#ff4444" strokeWidth="1" />
        <text x="30" y="107" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">11+: Complex (Red)</text>
      </g>
      
      {/* Benefits */}
      <g transform="translate(600, 220)">
        <text x="125" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Benefits</text>
        <text x="125" y="40" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Maintainability assess</text>
        <text x="125" y="55" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Testability evaluate</text>
        <text x="125" y="70" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Defect probability predict</text>
        <text x="125" y="85" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Refactoring priority</text>
        <text x="125" y="100" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality improvement</text>
      </g>
      
      {/* Key Formulas */}
      <g transform="translate(50, 400)">
        <text x="350" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Formulas</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Cyclomatic: M = E - N + 2P</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Halstead Volume: V = N × log₂(n)</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Halstead Effort: E = D × V</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">High complexity = high maintenance cost, high defect probability, difficult testing</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.12 — Quality Management Metrics
// ============================================================

export function QualityMetricsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="qmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff8800', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#cc6600', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#ff8800" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Quality Management Metrics
      </text>
      
      {/* Defect Metrics */}
      <g transform="translate(50, 70)">
        <rect width="200" height="130" rx="8" fill="url(#qmGrad)" stroke="#ff8800" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Defect Density</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Defects/KLOC)</text>
        <text x="100" y="78" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• DRE</text>
        <text x="100" y="93" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(90%+ target)</text>
        <text x="100" y="108" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Reopen Rate</text>
        <text x="100" y="123" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(less than 5% target)</text>
      </g>
      
      {/* Testing Metrics */}
      <g transform="translate(275, 70)">
        <rect width="200" height="130" rx="8" fill="url(#qmGrad)" stroke="#ff8800" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Test Coverage</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Code %)</text>
        <text x="100" y="78" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Test Execution</text>
        <text x="100" y="93" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Run vs Planned)</text>
        <text x="100" y="108" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Automation %</text>
        <text x="100" y="123" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Automated tests)</text>
      </g>
      
      {/* Code Quality Metrics */}
      <g transform="translate(500, 70)">
        <rect width="200" height="130" rx="8" fill="url(#qmGrad)" stroke="#ff8800" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Code Quality</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Complexity</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Cyclomatic)</text>
        <text x="100" y="78" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Duplication %</text>
        <text x="100" y="93" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Duplicate code)</text>
        <text x="100" y="108" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Review Coverage</text>
        <text x="100" y="123" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Code reviewed %)</text>
      </g>
      
      {/* Process Metrics */}
      <g transform="translate(725, 70)">
        <rect width="150" height="130" rx="8" fill="url(#qmGrad)" stroke="#ff8800" strokeWidth="2" />
        <text x="75" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Process</text>
        <text x="75" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Schedule</text>
        <text x="75" y="63" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Variance</text>
        <text x="75" y="78" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Cost</text>
        <text x="75" y="93" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Variance</text>
        <text x="75" y="108" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Effort</text>
        <text x="75" y="123" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Variance</text>
      </g>
      
      {/* Metric Flow */}
      <g transform="translate(50, 250)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Metric Implementation Flow</text>
        <rect x="10" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="70" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Define Goals</text>
        <rect x="140" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Collect Data</text>
        <rect x="270" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="330" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Track Trends</text>
        <rect x="400" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="460" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Report</text>
        <rect x="530" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="590" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Improve</text>
        
        <line x1="130" y1="47" x2="140" y2="47" stroke="#ff8800" strokeWidth="1" opacity="0.5" />
        <line x1="260" y1="47" x2="270" y2="47" stroke="#ff8800" strokeWidth="1" opacity="0.5" />
        <line x1="390" y1="47" x2="400" y2="47" stroke="#ff8800" strokeWidth="1" opacity="0.5" />
        <line x1="520" y1="47" x2="530" y2="47" stroke="#ff8800" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Key Formulas */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Formulas</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Density = Defects / KLOC</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">DRE = (Pre-Release Defects / Total Defects) × 100</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Test Coverage = Tested Code / Total Code × 100</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Quality metrics help measure, track, and improve software quality throughout the lifecycle</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.13 — Availability Metrics
// ============================================================

export function AvailabilityMetricsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="availGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00ff88', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#00aa66', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00ff88" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Availability Metrics
      </text>
      
      {/* Availability Tiers */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Availability Tiers</text>
        <rect x="10" y="30" width="160" height="60" rx="4" fill="#1a1a2e" stroke="#ff4444" strokeWidth="1" />
        <text x="90" y="50" textAnchor="middle" fill="#ff4444" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">99%</text>
        <text x="90" y="70" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">7.3 hrs downtime/mo</text>
        
        <rect x="180" y="30" width="160" height="60" rx="4" fill="#1a1a2e" stroke="#ffaa00" strokeWidth="1" />
        <text x="260" y="50" textAnchor="middle" fill="#ffaa00" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">99.9%</text>
        <text x="260" y="70" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">43.8 min downtime/mo</text>
        
        <rect x="350" y="30" width="160" height="60" rx="4" fill="#2a2a3e" stroke="#00ff88" strokeWidth="1" />
        <text x="430" y="50" textAnchor="middle" fill="#00ff88" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">99.99%</text>
        <text x="430" y="70" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">4.38 min downtime/mo</text>
        
        <rect x="520" y="30" width="160" height="60" rx="4" fill="#2a3a2a" stroke="#00ff88" strokeWidth="2" />
        <text x="600" y="50" textAnchor="middle" fill="#00ff88" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">99.999%</text>
        <text x="600" y="70" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">26.3 sec downtime/mo</text>
      </g>
      
      {/* Reliability Metrics */}
      <g transform="translate(50, 180)">
        <rect width="200" height="110" rx="8" fill="url(#availGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Reliability Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• MTBF</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Mean Time Between</text>
        <text x="100" y="75" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Failures</text>
        <text x="100" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• MTTR</text>
        <text x="100" y="105" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Mean Time To Repair</text>
      </g>
      
      {/* Performance Metrics */}
      <g transform="translate(275, 180)">
        <rect width="200" height="110" rx="8" fill="url(#availGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Performance Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Response Time</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">System response speed</text>
        <text x="100" y="80" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Throughput</text>
        <text x="100" y="95" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Operations per second</text>
      </g>
      
      {/* Recovery Metrics */}
      <g transform="translate(500, 180)">
        <rect width="200" height="110" rx="8" fill="url(#availGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Recovery Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• RTO</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Recovery Time Objective</text>
        <text x="100" y="80" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• RPO</text>
        <text x="100" y="95" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Recovery Point Objective</text>
      </g>
      
      {/* Availability Formula */}
      <g transform="translate(50, 330)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Availability Formula</text>
        <rect x="50" y="35" width="600" height="50" rx="8" fill="#1a1a2e" stroke="#00ff88" strokeWidth="2" />
        <text x="350" y="65" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="'Segoe UI', system-ui, sans-serif">Availability = (Uptime / Total Time) × 100</text>
      </g>
      
      {/* Improvement Strategies */}
      <g transform="translate(50, 430)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Availability Improvement Strategies</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Redundancy — Eliminate single point of failure</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Failover — Automated failover implementation</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Monitoring — Real-time monitoring setup</text>
        <text x="350" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Preventive Maintenance — Regular maintenance schedule</text>
      </g>
      
      <g transform="translate(50, 560)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Availability metrics measure system operational time and help improve reliability</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.14 — Defect Removal Effectiveness
// ============================================================

export function DREOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="dreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#aa00ff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#6600cc', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#aa00ff" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Defect Removal Effectiveness (DRE)
      </text>
      
      {/* DRE Formula */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">DRE Formula</text>
        <rect x="50" y="35" width="600" height="50" rx="8" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="2" />
        <text x="350" y="65" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="'Segoe UI', system-ui, sans-serif">DRE = (Defects Found Pre-Release / Total Defects) × 100</text>
      </g>
      
      {/* DRE Benchmarks */}
      <g transform="translate(50, 160)">
        <text x="350" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">DRE Benchmarks</text>
        <rect x="20" y="30" width="200" height="50" rx="4" fill="#2a1a3e" stroke="#aa00ff" strokeWidth="2" />
        <text x="120" y="50" textAnchor="middle" fill="#aa00ff" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">90%+</text>
        <text x="120" y="68" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Excellent</text>
        
        <rect x="240" y="30" width="200" height="50" rx="4" fill="#1a1a2e" stroke="#666" strokeWidth="1" />
        <text x="340" y="50" textAnchor="middle" fill="#aaa" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">80-89%</text>
        <text x="340" y="68" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Good</text>
        
        <rect x="460" y="30" width="200" height="50" rx="4" fill="#1a1a2e" stroke="#666" strokeWidth="1" />
        <text x="560" y="50" textAnchor="middle" fill="#888" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">70-79%</text>
        <text x="560" y="68" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Fair</text>
        
        <rect x="680" y="30" width="170" height="50" rx="4" fill="#2a1a1a" stroke="#ff4444" strokeWidth="1" />
        <text x="765" y="50" textAnchor="middle" fill="#ff4444" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">less than 70%</text>
        <text x="765" y="68" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Poor</text>
      </g>
      
      {/* Improvement Strategies */}
      <g transform="translate(50, 250)">
        <text x="350" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">DRE Improvement Strategies</text>
        <rect x="20" y="30" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="120" y="55" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Comprehensive Testing</text>
        <rect x="240" y="30" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="340" y="55" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Early Testing</text>
        <rect x="460" y="30" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="560" y="55" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Code Reviews</text>
        <rect x="680" y="30" width="170" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="765" y="55" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Static Analysis</text>
        
        <rect x="20" y="80" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="120" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Test Automation</text>
        <rect x="240" y="80" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="340" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Gates</text>
        <rect x="460" y="80" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="560" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Training</text>
        <rect x="680" y="80" width="170" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="765" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Process Improvement</text>
      </g>
      
      {/* Example */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Example</text>
        <rect x="50" y="35" width="600" height="60" rx="8" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="350" y="55" textAnchor="middle" fill="#ccc" fontSize="12" fontFamily="'Segoe UI', system-ui, sans-serif">Total Defects: 100</text>
        <text x="350" y="75" textAnchor="middle" fill="#ccc" fontSize="12" fontFamily="'Segoe UI', system-ui, sans-serif">Pre-Release: 90 | Post-Release: 10</text>
        <text x="350" y="95" textAnchor="middle" fill="#00ff88" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">DRE = (90 / 100) × 100 = 90%</text>
      </g>
      
      <g transform="translate(50, 500)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">High DRE = good testing process. Low DRE = many defects escaping to production</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.15 — FMEA
// ============================================================

export function FMEAOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="fmeaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#cc0066', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#ff0080" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        FMEA — Failure Mode and Effects Analysis
      </text>
      
      {/* RPN Formula */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">RPN Formula</text>
        <rect x="50" y="35" width="600" height="50" rx="8" fill="#1a1a2e" stroke="#ff0080" strokeWidth="2" />
        <text x="350" y="65" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="'Segoe UI', system-ui, sans-serif">RPN = Severity × Occurrence × Detection</text>
      </g>
      
      {/* Scoring */}
      <g transform="translate(50, 160)">
        <text x="115" y="20" textAnchor="middle" fill="#ff0080" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Severity</text>
        <rect x="20" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="115" y="45" textAnchor="middle" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">10 = Catastrophic</text>
        <text x="115" y="60" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">7-9 = Major</text>
        <text x="115" y="75" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4-6 = Moderate</text>
        <text x="115" y="90" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-3 = Minor</text>
        
        <text x="355" y="20" textAnchor="middle" fill="#ff0080" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Occurrence</text>
        <rect x="260" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="355" y="45" textAnchor="middle" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">10 = Very likely</text>
        <text x="355" y="60" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">7-9 = Likely</text>
        <text x="355" y="75" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4-6 = Occasional</text>
        <text x="355" y="90" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-3 = Rare</text>
        
        <text x="595" y="20" textAnchor="middle" fill="#ff0080" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Detection</text>
        <rect x="500" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="595" y="45" textAnchor="middle" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">10 = Very hard</text>
        <text x="595" y="60" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">7-9 = Difficult</text>
        <text x="595" y="75" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4-6 = Moderate</text>
        <text x="595" y="90" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-3 = Easy</text>
      </g>
      
      {/* RPN Interpretation */}
      <g transform="translate(50, 280)">
        <text x="350" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">RPN Interpretation</text>
        <rect x="20" y="30" width="200" height="40" rx="4" fill="#2a1a1a" stroke="#00ff88" strokeWidth="2" />
        <text x="120" y="55" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">1-100: Low Risk</text>
        <rect x="240" y="30" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#ffaa00" strokeWidth="1" />
        <text x="340" y="55" textAnchor="middle" fill="#ffaa00" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">101-500: Medium</text>
        <rect x="460" y="30" width="200" height="40" rx="4" fill="#2a1a1a" stroke="#ff4444" strokeWidth="2" />
        <text x="560" y="55" textAnchor="middle" fill="#ff4444" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">501-1000: High Risk</text>
      </g>
      
      {/* FMEA Process */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">FMEA Process</text>
        <rect x="10" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="70" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1. System</text>
        <rect x="140" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">2. Failures</text>
        <rect x="270" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="330" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">3. Effects</text>
        <rect x="400" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="460" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4. Scoring</text>
        <rect x="530" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="590" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5. RPN</text>
        <rect x="660" y="30" width="170" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="745" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6. Action</text>
        
        <line x1="130" y1="47" x2="140" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="260" y1="47" x2="270" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="390" y1="47" x2="400" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="520" y1="47" x2="530" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="650" y1="47" x2="660" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
      </g>
      
      <g transform="translate(50, 500)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">FMEA proactively identifies failures before they occur and prioritizes improvement actions</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.16 — Quality Function Deployment (QFD)
// ============================================================

export function QFDOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="qfdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00aaff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0066cc', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00aaff" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Quality Function Deployment (QFD)
      </text>
      
      {/* House of Quality */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">House of Quality</text>
        
        {/* Customer Requirements */}
        <rect x="20" y="30" width="200" height="80" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="120" y="45" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Customer Requirements</text>
        <text x="120" y="60" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Voice of Customer</text>
        <text x="120" y="75" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Needs</text>
        <text x="120" y="88" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Expectations</text>
        <text x="120" y="101" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Priorities</text>
        
        {/* Technical Requirements */}
        <rect x="400" y="30" width="200" height="80" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="500" y="45" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Technical Requirements</text>
        <text x="500" y="60" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Engineering Specs</text>
        <text x="500" y="75" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Parameters</text>
        <text x="500" y="88" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Characteristics</text>
        <text x="500" y="101" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Measures</text>
        
        {/* Relationship Matrix */}
        <rect x="20" y="130" width="580" height="60" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="310" y="150" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Relationship Matrix</text>
        <text x="310" y="170" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Strong ● Medium ○ Weak △ No relation</text>
        <text x="310" y="185" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Maps customer requirements to technical specs</text>
      </g>
      
      {/* QFD Process */}
      <g transform="translate(50, 250)">
        <text x="350" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">QFD Process</text>
        <rect x="10" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="70" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1. Research</text>
        <rect x="140" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">2. Analyze</text>
        <rect x="270" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="330" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">3. Translate</text>
        <rect x="400" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="460" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4. Build Matrix</text>
        <rect x="530" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="590" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5. Set Targets</text>
        <rect x="660" y="30" width="170" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="745" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6. Deploy</text>
        
        <line x1="130" y1="47" x2="140" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
        <line x1="260" y1="47" x2="270" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
        <line x1="390" y1="47" x2="400" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
        <line x1="520" y1="47" x2="530" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
        <line x1="650" y1="47" x2="660" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Benefits */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">QFD Benefits</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Customer Focus — Requirements consistently meet</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Early Quality — Quality integrated in design</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Communication — Cross-functional collaboration</text>
        <text x="350" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Cost Reduction — Rework costs decrease</text>
        <text x="350" y="125" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Decision Making — Quality priorities clarify</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">QFD translates customer requirements into technical specifications systematically</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.17 — Taguchi Quality Loss Function
// ============================================================

export function TaguchiLossOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="tagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff8800', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#cc6600', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#ff8800" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Taguchi Quality Loss Function
      </text>
      
      {/* Formula */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Loss Function Formula</text>
        <rect x="100" y="35" width="600" height="50" rx="8" fill="#1a1a2e" stroke="#ff8800" strokeWidth="2" />
        <text x="400" y="65" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="'Segoe UI', system-ui, sans-serif">L = k × (y - m)²</text>
      </g>
      
      {/* Loss Types */}
      <g transform="translate(50, 160)">
        <text x="115" y="20" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Smaller-the-Better</text>
        <rect x="20" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="115" y="50" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Target = 0</text>
        <text x="115" y="65" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">L = k × y²</text>
        <text x="115" y="80" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Examples: Defects,</text>
        <text x="115" y="93" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Failures, Noise</text>
        
        <text x="355" y="20" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Larger-the-Better</text>
        <rect x="260" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="355" y="50" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Target = ∞</text>
        <text x="355" y="65" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">L = k × (1/y)²</text>
        <text x="355" y="80" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Examples: Strength,</text>
        <text x="355" y="93" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Efficiency, Life</text>
        
        <text x="595" y="20" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Nominal-the-Best</text>
        <rect x="500" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="595" y="50" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Target = m</text>
        <text x="595" y="65" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">L = k × (y - m)²</text>
        <text x="595" y="80" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Examples: Dimensions,</text>
        <text x="595" y="93" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Temperature, Speed</text>
      </g>
      
      {/* Loss Curve Visualization */}
      <g transform="translate(50, 280)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Loss vs Deviation Curve</text>
        {/* Parabola */}
        <path d="M 100,120 Q 350,20 600,120" fill="none" stroke="#ff8800" strokeWidth="3" />
        <text x="350" y="45" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="'Segoe UI', system-ui, sans-serif">Target (m)</text>
        <line x1="350" y1="50" x2="350" y2="120" stroke="#ff8800" strokeWidth="1" strokeDasharray="3,3" />
        
        <text x="100" y="140" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">High Loss</text>
        <text x="600" y="140" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">High Loss</text>
        <text x="350" y="140" fill="#00ff88" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Zero Loss (Target)</text>
        
        <text x="100" y="160" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Deviation →</text>
        <text x="350" y="175" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Loss increases with deviation from target</text>
      </g>
      
      {/* Taguchi Philosophy */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Taguchi's Philosophy</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality = Minimal deviation from target</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Loss increases with deviation</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Loss occurs even inside the specification limits</text>
        <text x="350" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality loss affects customer satisfaction</text>
        <text x="350" y="125" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Preventive approach — stop defects before they happen</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Taguchi emphasizes continuous loss measurement even within specification limits</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.18 — Cost of Quality (COQ)
// ============================================================

export function COQOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="coqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00ff88', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#00aa66', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00ff88" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Cost of Quality (COQ)
      </text>
      
      {/* COQ Formula */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">COQ Formula</text>
        <rect x="80" y="35" width="640" height="50" rx="8" fill="#1a1a2e" stroke="#00ff88" strokeWidth="2" />
        <text x="400" y="65" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="'Segoe UI', system-ui, sans-serif">COQ = Prevention + Appraisal + Internal Failure + External Failure</text>
      </g>
      
      {/* Four Quadrants */}
      <g transform="translate(50, 160)">
        <text x="200" y="20" textAnchor="middle" fill="#00ff88" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Prevention</text>
        <rect x="20" y="30" width="360" height="80" rx="4" fill="#1a2a1a" stroke="#00ff88" strokeWidth="2" />
        <text x="200" y="48" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Costs of preventing defects</text>
        <text x="200" y="65" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality Planning</text>
        <text x="200" y="78" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Training</text>
        <text x="200" y="91" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Documentation</text>
        <text x="200" y="104" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Audits</text>
        
        <text x="620" y="20" textAnchor="middle" fill="#ffaa00" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Appraisal</text>
        <rect x="440" y="30" width="360" height="80" rx="4" fill="#2a2a1a" stroke="#ffaa00" strokeWidth="2" />
        <text x="620" y="48" textAnchor="middle" fill="#ffaa00" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Costs of measuring quality</text>
        <text x="620" y="65" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Inspection</text>
        <text x="620" y="78" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Testing</text>
        <text x="620" y="91" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Measurement</text>
        <text x="620" y="104" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Calibration</text>
      </g>
      
      <g transform="translate(50, 270)">
        <text x="200" y="20" textAnchor="middle" fill="#ff4444" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Internal Failure</text>
        <rect x="20" y="30" width="360" height="80" rx="4" fill="#2a1a1a" stroke="#ff4444" strokeWidth="1" />
        <text x="200" y="48" textAnchor="middle" fill="#ff4444" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Costs of fixing internal defects</text>
        <text x="200" y="65" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Scrap</text>
        <text x="200" y="78" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Rework</text>
        <text x="200" y="91" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Retest</text>
        <text x="200" y="104" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Downtime</text>
        
        <text x="620" y="20" textAnchor="middle" fill="#ff0080" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">External Failure</text>
        <rect x="440" y="30" width="360" height="80" rx="4" fill="#2a1a2a" stroke="#ff0080" strokeWidth="2" />
        <text x="620" y="48" textAnchor="middle" fill="#ff0080" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Costs of fixing external defects</text>
        <text x="620" y="65" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Warranty</text>
        <text x="620" y="78" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Returns</text>
        <text x="620" y="91" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Lost Sales</text>
        <text x="620" y="104" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Reputation Damage</text>
      </g>
      
      {/* Balance Visualization */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Cost Balance Strategy</text>
        <rect x="50" y="35" width="600" height="40" rx="8" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="350" y="60" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Invest in Prevention → Reduce Failures → Lower Total Cost</text>
        
        <text x="350" y="110" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">High prevention costs = lower failure costs</text>
        <text x="350" y="130" textAnchor="middle" fill="#888" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Low prevention costs = high failure costs</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">COQ helps quantify quality costs and make informed investment decisions</text>
      </g>
    </svg>
  );
}

export function SoftwareTestingBasicsOverviewDiagram() {
  return (
    <svg viewBox="0 0 800 620" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="620" fill="#1a1a2e" />
      <defs>
        <linearGradient id="stb-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0047ff' }} />
          <stop offset="100%" style={{ stopColor: '#0047ff66' }} />
        </linearGradient>
      </defs>
      {/* Title */}
      <text x="400" y="35" textAnchor="middle" fill="#0047ff" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Software Testing Basics</text>
      
      {/* Definition Card */}
      <g transform="translate(30, 55)">
        <rect width="740" height="55" rx="8" fill="#0a0a1a" stroke="#0047ff" strokeWidth="1" />
        <text x="370" y="25" textAnchor="middle" fill="#0047ff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Software Testing: Process of evaluating and verifying software meets its intended requirements</text>
        <text x="370" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Identifying defects, verifying requirements, ensuring quality, reducing risks</text>
      </g>
      
      {/* Testing Objectives */}
      <g transform="translate(30, 120)">
        <text x="370" y="20" textAnchor="middle" fill="#0047ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Objectives</text>
        <g transform="translate(20, 30)">
          <rect width="140" height="70" rx="4" fill="#1a1a2e" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="25" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defects Detection</text>
          <text x="70" y="42" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Identifying bugs</text>
          <text x="70" y="55" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Quality improve</text>
        </g>
        <g transform="translate(180, 30)">
          <rect width="140" height="70" rx="4" fill="#1a1a2e" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="25" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements Verification</text>
          <text x="70" y="42" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements check</text>
          <text x="70" y="55" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">All met</text>
        </g>
        <g transform="translate(340, 30)">
          <rect width="140" height="70" rx="4" fill="#1a1a2e" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="25" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Assurance</text>
          <text x="70" y="42" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Quality ensure</text>
          <text x="70" y="55" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Standards meet</text>
        </g>
        <g transform="translate(500, 30)">
          <rect width="140" height="70" rx="4" fill="#1a1a2e" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="25" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Risk Mitigation</text>
          <text x="70" y="42" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Risks reduce</text>
          <text x="70" y="55" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Reliability</text>
        </g>
      </g>
      
      {/* Testing Life Cycle - Flow */}
      <g transform="translate(30, 210)">
        <text x="370" y="20" textAnchor="middle" fill="#0047ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Life Cycle</text>
        <g transform="translate(0, 30)">
          <rect width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="45" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Planning</text>
          <text x="45" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Scope, strategy</text>
          
          <line x1="90" y1="25" x2="115" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="115,20 115,30 125,25" fill="#0047ff" />
          
          <rect x="125" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="170" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Analysis</text>
          <text x="170" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements</text>
          
          <line x1="215" y1="25" x2="240" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="240,20 240,30 250,25" fill="#0047ff" />
          
          <rect x="250" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="295" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Design</text>
          <text x="295" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Cases, data</text>
          
          <line x1="340" y1="25" x2="365" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="365,20 365,30 375,25" fill="#0047ff" />
          
          <rect x="375" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="420" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Environment</text>
          <text x="420" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Setup, config</text>
          
          <line x1="465" y1="25" x2="490" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="490,20 490,30 500,25" fill="#0047ff" />
          
          <rect x="500" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="545" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Execution</text>
          <text x="545" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Run, log</text>
          
          <line x1="590" y1="25" x2="615" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="615,20 615,30 625,25" fill="#0047ff" />
          
          <rect x="625" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="670" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Evaluation</text>
          <text x="670" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Report, close</text>
        </g>
      </g>
      
      {/* Testing Principles */}
      <g transform="translate(30, 320)">
        <text x="370" y="20" textAnchor="middle" fill="#0047ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Principles</text>
        <g transform="translate(20, 30)">
          <rect width="340" height="35" rx="4" fill="#1a1a2e" stroke="#0047ff66" strokeWidth="1" />
          <text x="170" y="17" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing shows presence of defects, not absence</text>
          <text x="170" y="30" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Testing proves defects exist, not that software is perfect</text>
        </g>
        <g transform="translate(20, 70)">
          <rect width="340" height="35" rx="4" fill="#1a1a2e" stroke="#0047ff66" strokeWidth="1" />
          <text x="170" y="17" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Exhaustive testing is impossible</text>
          <text x="170" y="30" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Use risk-based testing and prioritize</text>
        </g>
        <g transform="translate(380, 30)">
          <rect width="340" height="35" rx="4" fill="#1a1a2e" stroke="#0047ff66" strokeWidth="1" />
          <text x="550" y="17" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Early testing saves time and cost</text>
          <text x="550" y="30" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Start testing early in SDLC</text>
        </g>
        <g transform="translate(380, 70)">
          <rect width="340" height="35" rx="4" fill="#1a1a2e" stroke="#0047ff66" strokeWidth="1" />
          <text x="550" y="17" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Defect clustering - few modules have most defects</text>
          <text x="550" y="30" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Pareto principle applies</text>
        </g>
      </g>
      
      {/* Tester Role */}
      <g transform="translate(30, 460)">
        <text x="370" y="20" textAnchor="middle" fill="#0047ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Tester Role in Software Development</text>
        <g transform="translate(20, 30)">
          <rect width="140" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="22" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Advocate</text>
          <text x="70" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Quality focus</text>
        </g>
        <g transform="translate(180, 30)">
          <rect width="140" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="22" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Lead</text>
          <text x="70" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Team leadership</text>
        </g>
        <g transform="translate(340, 30)">
          <rect width="140" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="22" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Reviewer</text>
          <text x="70" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Reviews code</text>
        </g>
        <g transform="translate(500, 30)">
          <rect width="140" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="22" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Risk Analyst</text>
          <text x="70" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Risks identify</text>
        </g>
      </g>
      
      {/* Bottom note */}
      <g transform="translate(30, 555)">
        <text x="370" y="20" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing ensures software quality through systematic evaluation</text>
      </g>
    </svg>
  );
}

export function TestPlanAndTestCasesOverviewDiagram() {
  return (
    <svg viewBox="0 0 800 620" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="620" fill="#1a1a2e" />
      <defs>
        <linearGradient id="tpt-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00aaff' }} />
          <stop offset="100%" style={{ stopColor: '#00aaff66' }} />
        </linearGradient>
      </defs>
      {/* Title */}
      <text x="400" y="35" textAnchor="middle" fill="#00aaff" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Plan and Test Cases</text>
      
      {/* Test Plan Section */}
      <g transform="translate(30, 55)">
        <rect width="740" height="120" rx="8" fill="#0a0a1a" stroke="#00aaff" strokeWidth="1" />
        <text x="370" y="25" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Plan - Formal Document</text>
        <text x="370" y="42" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Strategy, scope, approach, resources, schedule, risks</text>
        
        {/* Test Plan Elements */}
        <g transform="translate(20, 50)">
          <rect width="170" height="55" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="85" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Scope</text>
          <text x="85" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">What to test</text>
          <text x="85" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements</text>
        </g>
        <g transform="translate(200, 50)">
          <rect width="170" height="55" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="85" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Approach</text>
          <text x="85" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">How to test</text>
          <text x="85" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Strategy</text>
        </g>
        <g transform="translate(380, 50)">
          <rect width="170" height="55" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="85" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Resources</text>
          <text x="85" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Who, tools</text>
          <text x="85" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Budget</text>
        </g>
        <g transform="translate(560, 50)">
          <rect width="160" height="55" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="80" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Schedule &amp; Risks</text>
          <text x="80" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Timeline</text>
          <text x="80" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Mitigation</text>
        </g>
      </g>
      
      {/* Test Case Design Section */}
      <g transform="translate(30, 195)">
        <rect width="740" height="180" rx="8" fill="#0a0a1a" stroke="#00aaff" strokeWidth="1" />
        <text x="370" y="25" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Case Design</text>
        
        {/* Test Case Structure */}
        <g transform="translate(20, 35)">
          <rect width="220" height="70" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="110" y="20" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Case</text>
          <text x="110" y="35" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Input, Expected, Actual, Status</text>
          <text x="110" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Scenario, Conditions, Pass/Fail</text>
        </g>
        
        {/* Design Techniques */}
        <g transform="translate(260, 35)">
          <rect width="460" height="70" rx="4" fill="#0a0a1a" stroke="#00aaff66" strokeWidth="1" />
          <text x="490" y="20" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Case Design Techniques</text>
          <text x="490" y="35" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Equivalence Partitioning, Boundary Value Analysis, Decision Table</text>
          <text x="490" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">State Transition, Use Case, Error Guessing</text>
        </g>
        
        {/* Test Reports */}
        <g transform="translate(20, 115)">
          <rect width="700" height="55" rx="4" fill="#00aaff15" stroke="#00aaff66" strokeWidth="1" />
          <text x="350" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Reporting</text>
          <text x="350" y="38" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Progress Report, Defect Report, Coverage Report, Quality Report, Metrics, Dashboard</text>
        </g>
      </g>
      
      {/* Bottom note */}
      <g transform="translate(30, 400)">
        <text x="370" y="20" textAnchor="middle" fill="#666" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Test Plan ensures systematic testing; Test Cases ensure thorough coverage</text>
        
        {/* Key Insight */}
        <g transform="translate(20, 40)">
          <rect width="700" height="70" rx="8" fill="#00aaff10" stroke="#00aaff44" strokeWidth="1" />
          <text x="350" y="25" textAnchor="middle" fill="#00aaff" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Insight: Test Plan is the roadmap, Test Cases are the execution steps</text>
          <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Well-designed test cases catch more defects with less effort</text>
          <text x="350" y="60" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Good reporting enables informed quality decisions</text>
        </g>
      </g>
    </svg>
  );
}

export function DefectManagementOverviewDiagram() {
  return (
    <svg viewBox="0 0 800 620" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="620" fill="#1a1a2e" />
      <defs>
        <linearGradient id="dm-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080' }} />
          <stop offset="100%" style={{ stopColor: '#ff008066' }} />
        </linearGradient>
      </defs>
      {/* Title */}
      <text x="400" y="35" textAnchor="middle" fill="#ff0080" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Management</text>
      
      {/* Definition */}
      <g transform="translate(30, 55)">
        <rect width="740" height="45" rx="8" fill="#0a0a1a" stroke="#ff0080" strokeWidth="1" />
        <text x="370" y="22" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Process of identifying, tracking, and resolving defects in software</text>
      </g>
      
      {/* Defect Origins */}
      <g transform="translate(30, 110)">
        <text x="370" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Origins</text>
        <g transform="translate(20, 30)">
          <rect width="130" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="65" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements</text>
          <text x="65" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Ambiguous</text>
        </g>
        <g transform="translate(170, 30)">
          <rect width="130" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="65" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Design</text>
          <text x="65" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Logic errors</text>
        </g>
        <g transform="translate(320, 30)">
          <rect width="130" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="65" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Coding</text>
          <text x="65" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Implementation</text>
        </g>
        <g transform="translate(470, 30)">
          <rect width="130" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="65" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Config/Env</text>
          <text x="65" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Deployment</text>
        </g>
        <g transform="translate(620, 30)">
          <rect width="100" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="50" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Integration</text>
          <text x="50" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Interface</text>
        </g>
      </g>
      
      {/* Defect Classes */}
      <g transform="translate(30, 210)">
        <text x="370" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Classes</text>
        <g transform="translate(20, 30)">
          <rect width="170" height="45" rx="4" fill="#ff008015" stroke="#ff008066" strokeWidth="1" />
          <text x="85" y="20" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Functional</text>
          <text x="85" y="35" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Doesn't work as expected</text>
        </g>
        <g transform="translate(200, 30)">
          <rect width="170" height="45" rx="4" fill="#ff008015" stroke="#ff008066" strokeWidth="1" />
          <text x="85" y="20" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Performance</text>
          <text x="85" y="35" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Slow, resource-heavy</text>
        </g>
        <g transform="translate(380, 30)">
          <rect width="170" height="45" rx="4" fill="#ff008015" stroke="#ff008066" strokeWidth="1" />
          <text x="85" y="20" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Security</text>
          <text x="85" y="35" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Vulnerabilities</text>
        </g>
        <g transform="translate(560, 30)">
          <rect width="160" height="45" rx="4" fill="#ff008015" stroke="#ff008066" strokeWidth="1" />
          <text x="80" y="20" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Usability &amp; Compat</text>
          <text x="80" y="35" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Hard to use, not compatible</text>
        </g>
      </g>
      
      {/* Defect Life Cycle Flow */}
      <g transform="translate(30, 310)">
        <text x="370" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Life Cycle</text>
        <g transform="translate(0, 30)">
          <rect width="100" height="40" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="50" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">New</text>
          <text x="50" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Reported</text>
          
          <line x1="100" y1="20" x2="120" y2="20" stroke="#ff0080" strokeWidth="1.5" />
          <polygon points="120,15 120,25 130,20" fill="#ff0080" />
          
          <rect x="130" width="100" height="40" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="180" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Assigned</text>
          <text x="180" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">To developer</text>
          
          <line x1="230" y1="20" x2="250" y2="20" stroke="#ff0080" strokeWidth="1.5" />
          <polygon points="250,15 250,25 260,20" fill="#ff0080" />
          
          <rect x="260" width="100" height="40" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="310" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Fixed</text>
          <text x="310" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Resolved</text>
          
          <line x1="360" y1="20" x2="380" y2="20" stroke="#ff0080" strokeWidth="1.5" />
          <polygon points="380,15 380,25 390,20" fill="#ff0080" />
          
          <rect x="390" width="100" height="40" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="440" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Retest</text>
          <text x="440" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Verified</text>
          
          <line x1="490" y1="20" x2="510" y2="20" stroke="#ff0080" strokeWidth="1.5" />
          <polygon points="510,15 510,25 520,20" fill="#ff0080" />
          
          <rect x="520" width="100" height="40" rx="4" fill="#00ff8822" stroke="#00ff88" strokeWidth="1" />
          <text x="570" y="20" textAnchor="middle" fill="#00ff88" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Closed</text>
          <text x="570" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Confirmed fix</text>
        </g>
      </g>
      
      {/* Severity and Priority */}
      <g transform="translate(30, 420)">
        <text x="370" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Severity vs Priority</text>
        
        {/* Severity */}
        <g transform="translate(20, 30)">
          <text x="170" y="15" textAnchor="middle" fill="#ff0080" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Severity (Impact)</text>
          <rect width="300" height="25" rx="3" fill="#ff008033" stroke="#ff008066" strokeWidth="1" />
          <text x="30" y="32" textAnchor="start" fill="#00ff88" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Critical</text>
          <text x="80" y="32" textAnchor="start" fill="#00ff88" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">High</text>
          <text x="130" y="32" textAnchor="start" fill="#ffaa00" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Medium</text>
          <text x="185" y="32" textAnchor="start" fill="#aaa" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Low</text>
        </g>
        
        {/* Priority */}
        <g transform="translate(400, 30)">
          <text x="170" y="15" textAnchor="middle" fill="#ff0080" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Priority (Urgency)</text>
          <rect width="300" height="25" rx="3" fill="#ff008033" stroke="#ff008066" strokeWidth="1" />
          <text x="30" y="32" textAnchor="start" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P1 - Immediate</text>
          <text x="110" y="32" textAnchor="start" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P2 - Next</text>
          <text x="180" y="32" textAnchor="start" fill="#ffaa00" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P3 - Later</text>
          <text x="250" y="32" textAnchor="start" fill="#aaa" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P4 - Optional</text>
        </g>
      </g>
      
      {/* Bottom note */}
      <g transform="translate(30, 510)">
        <text x="370" y="20" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Management ensures systematic tracking and resolution of quality issues</text>
        <text x="370" y="38" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Repository tracks all defects through their life cycle</text>
      </g>
    </svg>
  );
}

// ============================================================
// UNIT III — Software Testing Techniques (diagrams)
// ============================================================

// 23. Static testing — reviews by humans vs static analysis tools
export function StaticTestingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Static testing without executing code: human based reviews such as walkthrough, technical review and inspection, and tool based static analysis such as linters and SAST scanners">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Static testing — finding defects without running the code
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        reading documents, design and code by hand or with a tool — nothing is executed
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="430" height="34" rx="8" fill="rgba(0,212,255,0.12)" stroke="rgba(0,212,255,0.5)" />
        <text x="235" y="88" textAnchor="middle" fill="#00d4ff" fontSize="10" fontWeight="800" fontFamily={FONT}>
          1. HUMAN BASED — REVIEWS
        </text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x="470" y="66" width="430" height="34" rx="8" fill="rgba(196,255,0,0.12)" stroke="rgba(196,255,0,0.5)" />
        <text x="685" y="88" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>
          2. TOOL BASED — STATIC ANALYSIS
        </text>
      </g>

      {[
        ['INFORMAL REVIEW', 'show it to a team member', 'cheapest, no record kept'],
        ['WALKTHROUGH', 'the author explains the code', 'learning + early feedback'],
        ['TECHNICAL REVIEW', 'peers check design and code', 'documented findings'],
        ['INSPECTION', 'formal 6-step process (Fagan)', 'moderator, scribe, checklist'],
      ].map(([t, l1, l2], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${220 + i * 70}ms` }}>
          <rect x="20" y={112 + i * 62} width="430" height="54" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
          <text x="34" y={132 + i * 62} fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x="34" y={146 + i * 62} fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{l1}</text>
          <text x="34" y={158 + i * 62} fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>{l2}</text>
        </g>
      ))}

      {[
        ['LINTER / COMPILER', 'syntax, unused variable, warning', 'ESLint, Checkstyle, gcc -Wall'],
        ['STYLE CHECKER', 'was the coding standard followed?', 'PMD, SonarQube rules'],
        ['SAST (security)', 'injection, XSS, hard-coded secret', 'SonarQube, Snyk, Fortify'],
        ['METRICS / COMPLEXITY', 'large functions, deep nesting', 'cyclomatic, duplication, dead code'],
      ].map(([t, l1, l2], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${300 + i * 70}ms` }}>
          <rect x="470" y={112 + i * 62} width="430" height="54" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
          <text x="484" y={132 + i * 62} fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x="484" y={146 + i * 62} fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{l1}</text>
          <text x="484" y={158 + i * 62} fill="#9ab0e0" fontSize="7.6" fontFamily="'Consolas', monospace">{l2}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="20" y="372" width="880" height="34" rx="8" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="394" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>
          Review roles: author · moderator · scribe · reviewers — inspection has entry, planning, kick-off, preparation, meeting, rework, follow-up
        </text>
      </g>

      <text x="460" y="428" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The earlier a defect is found, the cheaper it is — static testing works in the requirements phase
      </text>
      <text x="460" y="450" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Limit: it cannot catch runtime behaviour or performance — so dynamic testing is still required
      </text>
    </svg>
  );
}

// 24. Structural / unit testing
export function StructuralTestingDiagram() {
  return (
    <svg viewBox="0 0 920 462" className="diagram-svg" role="img" aria-label="Structural testing: the internal code of a function is analysed and each independent path is exercised by a unit test, with stubs and drivers used for isolation">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Structural testing — test the structure inside the code
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        white-box / glass-box · unit level · cases built from paths, branches and conditions
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="380" height="188" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.16)" />
        <text x="34" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>CODE (function discount)</text>
        {[
          'function discount($amt, $member) {',
          '  if ($amt >= 5000) {',
          '    $d = 0.10;',
          '  } else {',
          '    $d = 0.05;',
          '  }',
          '  if ($member) $d += 0.02;',
          '  return $amt * $d;',
          '}',
        ].map((line, i) => (
          <text key={i} x="34" y={110 + i * 16} fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">{line}</text>
        ))}
      </g>

      <text x="410" y="160" textAnchor="middle" fill="#9ab0e0" fontSize="16" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="432" y="66" width="468" height="188" rx="10" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="446" y="86" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>THREE INDEPENDENT PATHS = THREE TEST CASES</text>
        {[
          ['P1', '$amt=6000, member=false', 'd=0.10 → 600'],
          ['P2', '$amt=2000, member=false', 'd=0.05 → 100'],
          ['P3', '$amt=2000, member=true', 'd=0.07 → 140'],
        ].map(([p, input, out], i) => (
          <g key={p}>
            <text x="446" y={112 + i * 34} fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>{p}</text>
            <text x="470" y={112 + i * 34} fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">{input}</text>
            <text x="470" y={126 + i * 34} fill="#7ee787" fontSize="8" fontFamily="'Consolas', monospace">expected: {out}</text>
          </g>
        ))}
        <text x="446" y="228" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>
          Every branch runs at least once — that is branch coverage
        </text>
        <text x="446" y="244" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>
          A failed assertion is a defect; a pass means the path is correct
        </text>
      </g>

      <text x="20" y="278" fill="#92a5d8" fontSize="8.5" fontWeight="700" fontFamily={FONT}>COMPONENTS OF A UNIT TEST</text>

      {[
        ['ARRANGE', 'input, mock/stub ready', 'setup'],
        ['ACT', 'call the function', 'one behaviour'],
        ['ASSERT', 'expected vs actual', 'pass/fail'],
        ['ISOLATE', 'stub (below), driver (above)', 'remove the dependency'],
      ].map(([t, l1, l2], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${420 + i * 70}ms` }}>
          <rect x={20 + i * 226} y="290" width="212" height="66" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
          <text x={32 + i * 226} y="310" fill="#c4ff00" fontSize="8.5" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={32 + i * 226} y="328" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{l1}</text>
          <text x={32 + i * 226} y="344" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>{l2}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x="20" y="372" width="880" height="30" rx="8" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="392" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>
          Tools: JUnit (Java) · PHPUnit · pytest · Jest · NUnit — written by the developer, run on CI at every commit
        </text>
      </g>

      <text x="460" y="432" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Knowing the structure lets you test every branch — but a missing requirement stays invisible
      </text>
    </svg>
  );
}

// 25. Code coverage
export function CodeCoverageDiagram() {
  const bars = [
    ['Statement (line)', 92, '#00ff88'],
    ['Branch / decision', 78, '#c4ff00'],
    ['Condition', 65, '#ff8800'],
    ['Path', 40, '#ff7a90'],
    ['MC/DC', 55, '#00d4ff'],
  ];
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="Code coverage types shown as bars: statement, branch, condition, path and MC/DC coverage, with the coverage formula and the rule that coverage is necessary but not sufficient">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Code coverage — how much of the code the suite exercised
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        coverage % = (covered items ÷ total items) × 100 · white-box metric
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="560" height="252" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>SAME TEST SUITE, ALAG COVERAGE</text>
        {bars.map(([name, pct, color], i) => {
          const y = 106 + i * 42;
          return (
            <g key={name} className="diagram-pop" style={{ animationDelay: `${160 + i * 90}ms` }}>
              <text x="34" y={y + 12} fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>{name}</text>
              <rect x="170" y={y} width="330" height="16" rx="8" fill="rgba(255,255,255,0.07)" />
              <rect x="170" y={y} width={330 * pct / 100} height="16" rx="8" fill={color} fillOpacity="0.8" />
              <text x="512" y={y + 12} fill={color} fontSize="9" fontWeight="700" fontFamily="'Consolas', monospace">{pct}%</text>
            </g>
          );
        })}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="600" y="66" width="300" height="252" rx="10" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="614" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>WHAT EACH TYPE MEASURES</text>
        {[
          ['Statement', 'was every line run?'],
          ['Branch', 'every if/else on both sides?'],
          ['Condition', 'every value of && / ||?'],
          ['Path', 'every path from start to end?'],
          ['Function', 'was every function called?'],
          ['MC/DC', 'does each condition act alone?'],
        ].map(([t, d], i) => (
          <g key={t}>
            <text x="614" y={108 + i * 24} fill="#c4ff00" fontSize="7.8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="668" y={108 + i * 24} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <text x="614" y="266" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Tools: JaCoCo, Istanbul/nyc, coverage.py, gcov</text>
        <text x="614" y="282" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Report: HTML + line-by-line highlight</text>
        <text x="614" y="298" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Target: 70–90% branch (project dependent)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="334" width="880" height="34" rx="8" fill="rgba(255,68,102,0.08)" stroke="rgba(255,68,102,0.45)" />
        <text x="34" y="356" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>
          Trap: 100% statement coverage is not bug-free — a requirement can be missing or the output wrong
        </text>
      </g>

      <text x="460" y="392" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Coverage = how much ran · Test quality = how much it caught (mutation testing shows that)
      </text>
      <text x="460" y="416" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Exam point: statement &lt; branch &lt; condition &lt; path — the deeper, the more test cases
      </text>
    </svg>
  );
}

// 26. Cyclomatic complexity
export function CyclomaticComplexityDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Cyclomatic complexity: a control flow graph with seven edges and six nodes giving V(G) equals three, the formula, and the complexity thresholds with testing implications">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Cyclomatic complexity — V(G) = the count of independent paths
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        V(G) = E − N + 2P · or "decision points + 1" · at least that many test cases
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="420" height="230" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>CONTROL FLOW GRAPH</text>
        <defs>
          <marker id="cc-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#92a5d8" />
          </marker>
        </defs>
        {[
          ['1', 70, 120],
          ['2', 70, 158],
          ['3', 190, 158],
          ['4', 190, 228],
          ['5', 330, 104],
          ['6', 330, 228],
        ].map(([n, x, y], i) => (
          <g key={n} className="diagram-pop" style={{ animationDelay: `${160 + i * 60}ms` }}>
            <circle cx={x} cy={y} r="14" fill="rgba(47,111,255,0.25)" stroke="#6fb2ff" strokeWidth="1.4" />
            <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily={FONT}>{n}</text>
          </g>
        ))}
        <g stroke="#92a5d8" strokeWidth="1.5" markerEnd="url(#cc-arrow)">
          <line x1="70" y1="134" x2="70" y2="143" />
          <line x1="84" y1="158" x2="175" y2="158" />
          <line x1="78" y1="145" x2="317" y2="109" />
          <line x1="190" y1="172" x2="190" y2="213" />
          <line x1="204" y1="228" x2="315" y2="228" />
          <line x1="330" y1="118" x2="330" y2="213" />
          <path d="M 204 228 C 248 228 248 158 205 158" fill="none" />
        </g>
        <text x="126" y="151" fill="#00ff88" fontSize="7.5" fontFamily={FONT}>valid</text>
        <text x="212" y="118" fill="#ff7a90" fontSize="7.5" fontFamily={FONT}>invalid</text>
        <text x="252" y="196" fill="#ff8800" fontSize="7.5" fontFamily={FONT}>retry</text>
        <text x="254" y="221" fill="#00ff88" fontSize="7.5" fontFamily={FONT}>pass</text>
        <text x="34" y="270" fill="#7ee787" fontSize="8" fontFamily="'Consolas', monospace">nodes N = 6 · edges E = 7 → V(G) = 7 − 6 + 2 = 3</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="460" y="66" width="440" height="106" rx="10" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="474" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>FORMULA</text>
        <text x="474" y="108" fill="#fff" fontSize="11" fontFamily="'Consolas', monospace">V(G) = E − N + 2P</text>
        <text x="474" y="126" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>E = edges, N = nodes, P = connected components (aksar 1)</text>
        <text x="474" y="144" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>Doosra tareeka: V(G) = decision points + 1</text>
        <text x="474" y="162" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Count the regions of the graph — they also equal V(G)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="460" y="186" width="440" height="110" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="474" y="206" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>THRESHOLDS — EFFECT ON TESTING</text>
        {[
          ['1 – 10', 'simple, low risk', '#00ff88'],
          ['11 – 20', 'moderate, test badhao', '#c4ff00'],
          ['21 – 50', 'complex, refactor socho', '#ff8800'],
          ['50+', 'untestable — todo', '#ff7a90'],
        ].map(([r, m, c], i) => (
          <g key={r}>
            <text x="474" y={228 + i * 18} fill={c} fontSize="8" fontWeight="700" fontFamily="'Consolas', monospace">{r}</text>
            <text x="536" y={228 + i * 18} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{m}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x="20" y="310" width="880" height="52" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="330" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>DOOSRE COMPLEXITY METRICS</text>
        <text x="34" y="348" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Halstead (volume, difficulty, effort) · LOC · nesting depth · cognitive complexity · maintainability index · duplication
        </text>
      </g>

      <text x="460" y="392" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Higher complexity = more test cases + higher defect risk
      </text>
      <text x="460" y="416" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        V(G) = 3 means: test at least 3 independent paths (basis path testing)
      </text>
      <text x="460" y="440" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Ways to reduce it: small functions, early return, no deep nesting, extract method
      </text>
    </svg>
  );
}

// 27. Mutation testing
export function MutationTestingDiagram() {
  return (
    <svg viewBox="0 0 920 468" className="diagram-svg" role="img" aria-label="Mutation testing: small changes called mutants are injected into the code and the test suite is run, killing some mutants while others survive, and the mutation score is computed">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Mutation testing — it measures how strong the test suite is
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        inject a small deliberate fault → run the tests → caught or survived?
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="330" height="96" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.16)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>ORIGINAL CODE</text>
        <text x="34" y="108" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">function isAdult($age) {'{'}</text>
        <text x="34" y="124" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">  return $age &gt;= 18;</text>
        <text x="34" y="140" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">{'}'}</text>
        <text x="34" y="156" fill="#7ee787" fontSize="8" fontFamily={FONT}>tests: isAdult(20)=true, isAdult(10)=false</text>
      </g>

      <text x="360" y="118" textAnchor="middle" fill="#9ab0e0" fontSize="16" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="380" y="66" width="250" height="96" rx="10" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="394" y="86" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>MUTANT CREATED</text>
        <text x="394" y="108" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&gt;=  →  &gt;</text>
        <text x="394" y="126" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">return $age &gt; 18;</text>
        <text x="394" y="148" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>only one operator changed</text>
      </g>

      <text x="642" y="118" textAnchor="middle" fill="#9ab0e0" fontSize="16" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x="662" y="66" width="238" height="96" rx="10" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.45)" />
        <text x="676" y="86" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>TESTS RUN</text>
        <text x="676" y="108" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>isAdult(20) → true (same)</text>
        <text x="676" y="126" fill="#ff7a90" fontSize="8" fontFamily={FONT}>difference at 18: the mutant survived</text>
        <text x="676" y="146" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>the suite is weak → add a case</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="20" y="180" width="430" height="164" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="200" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>MUTATION OPERATORS</text>
        {[
          'arithmetic:  + → -   * → /',
          'relational:  > → >=   == → !=',
          'logical:     && → ||   drop the negation',
          'constant:    18 → 17 / 0',
          'delete a statement / change the return value',
        ].map((t, i) => (
          <text key={t} x="34" y={222 + i * 20} fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">{t}</text>
        ))}
        <text x="34" y="332" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>
          Tools: PIT (Java) · Stryker (JS/TS) · mutmut (Python) · Infection (PHP)
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="470" y="180" width="430" height="164" rx="10" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="484" y="200" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>RESULT</text>
        <text x="484" y="222" fill="#00ff88" fontSize="8.5" fontFamily={FONT}>KILLED — a test failed → the mutant died (good)</text>
        <text x="484" y="242" fill="#ff7a90" fontSize="8.5" fontFamily={FONT}>SURVIVED — the test passed → weak suite</text>
        <text x="484" y="262" fill="#ff8800" fontSize="8.5" fontFamily={FONT}>EQUIVALENT — same behaviour, cannot be killed</text>
        <text x="484" y="290" fill="#fff" fontSize="9.5" fontFamily="'Consolas', monospace">
          score = killed ÷ (total − equivalent) × 100
        </text>
        <text x="484" y="310" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">= 82 ÷ (90 − 2) × 100 = 93.2%</text>
        <text x="484" y="332" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>To save cost: selective operators, sampling</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x="20" y="358" width="880" height="34" rx="8" fill="rgba(255,68,102,0.08)" stroke="rgba(255,68,102,0.45)" />
        <text x="34" y="380" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>
          Mutation testing is costly: the full suite runs per mutant — large projects use the nightly build
        </text>
      </g>

      <text x="460" y="418" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Coverage says how much ran; mutation says how much the tests would catch
      </text>
      <text x="460" y="442" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        A survived mutant is a hole in the suite — add a test case there
      </text>
    </svg>
  );
}

// 28. Requirement based testing
export function RequirementBasedTestingDiagram() {
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="Requirement based testing: each requirement in the SRS is turned into test cases, executed, and tracked in a requirement traceability matrix">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Requirement based testing — test cases from the SRS, traced through the RTM
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        black-box · at least one test per requirement · nothing left untested
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="240" height="176" rx="10" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.45)" />
        <text x="34" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>1. SRS PADHO</text>
        {[
          'R1: user login kar sake',
          'R2: password 8+ chars',
          'R3: lock after 3 wrong attempts',
          'R4: "forgot password" link',
        ].map((r, i) => (
          <text key={r} x="34" y={110 + i * 22} fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">{r}</text>
        ))}
        <text x="34" y="212" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Ambiguous? clarify the requirement first</text>
        <text x="34" y="228" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Testable? words like fast are not acceptable</text>
      </g>

      <text x="270" y="150" textAnchor="middle" fill="#9ab0e0" fontSize="16" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="290" y="66" width="270" height="176" rx="10" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="304" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>2. TEST CASES BANAO</text>
        {[
          'TC1 → R1 (valid login)',
          'TC2 → R1 (wrong password)',
          'TC3 → R2 (7 chars reject)',
          'TC4 → R2 (8 chars accept)',
          'TC5 → R3 (3rd fail = lock)',
          'TC6 → R4 (link mail bheje)',
        ].map((t, i) => (
          <text key={t} x="304" y={110 + i * 20} fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">{t}</text>
        ))}
      </g>

      <text x="570" y="150" textAnchor="middle" fill="#9ab0e0" fontSize="16" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="590" y="66" width="310" height="176" rx="10" fill="rgba(0,255,136,0.07)" stroke="rgba(0,255,136,0.45)" />
        <text x="604" y="86" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>3. RTM (traceability matrix)</text>
        <line x1="604" y1="96" x2="886" y2="96" stroke="rgba(255,255,255,0.2)" />
        {[
          ['R1', 'TC1, TC2', 'PASS'],
          ['R2', 'TC3, TC4', 'PASS'],
          ['R3', 'TC5', 'FAIL'],
          ['R4', 'TC6', 'NOT RUN'],
        ].map(([r, tc, st], i) => (
          <g key={r}>
            <text x="604" y={118 + i * 24} fill="#c4ff00" fontSize="8.5" fontWeight="700" fontFamily={FONT}>{r}</text>
            <text x="640" y={118 + i * 24} fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">{tc}</text>
            <text x="790" y={118 + i * 24} fill={st === 'PASS' ? '#00ff88' : st === 'FAIL' ? '#ff7a90' : '#ff8800'} fontSize="8" fontWeight="700" fontFamily={FONT}>{st}</text>
          </g>
        ))}
        <text x="604" y="228" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Requirement coverage = tested ÷ total × 100</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="20" y="256" width="880" height="52" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="276" fill="#ff8800" fontSize="9" fontWeight="700" fontFamily={FONT}>ANDAR KAUNSI TECHNIQUE?</text>
        <text x="34" y="294" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          functional requirement → EP + BVA + decision table · use case → use case testing · non-functional → performance/security test
        </text>
      </g>

      <text x="460" y="338" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Every requirement must have a test — the RTM shows instantly what is left
      </text>
      <text x="460" y="362" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Benefit: verifying against the specification makes audit and compliance easy
      </text>
      <text x="460" y="386" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Limit: if the requirement is wrong, the product is wrong even when the tests pass
      </text>
      <text x="460" y="418" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: requirement based testing derives test cases from the SRS, not from the code
      </text>
    </svg>
  );
}

// 29. Positive vs negative testing
export function PositiveNegativeTestingDiagram() {
  return (
    <svg viewBox="0 0 920 440" className="diagram-svg" role="img" aria-label="Positive testing uses valid input and expects the feature to work, negative testing uses invalid input like empty, wrong format or out of range values and expects graceful errors, both are needed">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Positive vs Negative testing — valid input and invalid input
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        positive = does the feature work? · negative = does the system cope with bad data?
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="430" height="212" rx="10" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.45)" />
        <text x="34" y="86" fill="#00ff88" fontSize="9.5" fontWeight="800" fontFamily={FONT}>POSITIVE TESTING (valid data)</text>
        {[
          ['age = 25', 'registration succeeds'],
          ['email = riya@mail.com', 'welcome mail is sent'],
          ['amount = 500', 'payment successful'],
          ['file = report.pdf (1 MB)', 'upload succeeds'],
        ].map(([inp, out], i) => (
          <g key={inp}>
            <text x="34" y={112 + i * 26} fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">{inp}</text>
            <text x="230" y={112 + i * 26} fill="#00ff88" fontSize="7.8" fontFamily={FONT}>→ {out}</text>
          </g>
        ))}
        <text x="34" y="226" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Expected: the feature works as the requirement says</text>
        <text x="34" y="246" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Happy path — this is written first</text>
        <text x="34" y="266" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Confidence: what the system can do</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="470" y="66" width="430" height="212" rx="10" fill="rgba(255,68,102,0.07)" stroke="rgba(255,68,102,0.45)" />
        <text x="484" y="86" fill="#ff7a90" fontSize="9.5" fontWeight="800" fontFamily={FONT}>NEGATIVE TESTING (invalid data)</text>
        {[
          ['age = 0 / -5 / abc', 'an error message, not a crash'],
          ['email = riya@ / blank', 'validation fail'],
          ['amount = 99999999', 'limit error'],
          ['file = virus.exe (10 MB)', 'reject + message'],
        ].map(([inp, out], i) => (
          <g key={inp}>
            <text x="484" y={112 + i * 26} fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">{inp}</text>
            <text x="680" y={112 + i * 26} fill="#ff7a90" fontSize="7.8" fontFamily={FONT}>→ {out}</text>
          </g>
        ))}
        <text x="484" y="226" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Expected: graceful error, no data corruption</text>
        <text x="484" y="246" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Security too: SQL injection, XSS, huge input</text>
        <text x="484" y="266" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Confidence: the system stays safe on bad input</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="20" y="292" width="880" height="30" rx="8" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="34" y="312" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>
          Both are needed: positive only is fragile; negative only never proves the feature works
        </text>
      </g>

      <text x="460" y="348" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Negative testing is part of robustness testing, not destructive testing
      </text>
      <text x="460" y="372" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        In a large suite, negative cases outnumber positive ones
      </text>
      <text x="460" y="402" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: positive tests valid input, negative tests invalid input — together they cover function and robustness
      </text>
    </svg>
  );
}

// 30. Boundary value analysis
export function BoundaryValueDiagram() {
  const pts = [
    { x: 120, label: 'min−1', val: '17', kind: 'invalid' },
    { x: 220, label: 'min', val: '18', kind: 'boundary' },
    { x: 300, label: 'min+1', val: '19', kind: 'valid' },
    { x: 470, label: 'nominal', val: '35', kind: 'valid' },
    { x: 640, label: 'max−1', val: '59', kind: 'valid' },
    { x: 720, label: 'max', val: '60', kind: 'boundary' },
    { x: 800, label: 'max+1', val: '61', kind: 'invalid' },
  ];
  const color = { invalid: '#ff7a90', boundary: '#ff8800', valid: '#00ff88' };
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="Boundary value analysis for the valid range 18 to 60, testing just below, on and just above each boundary instead of wasting tests in the middle of the range">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Boundary Value Analysis — defects hide at the boundary
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        valid range 18 to 60 → test 17, 18, 19 … 59, 60, 61 (this is where off-by-one hides)
      </text>

      <line x1="60" y1="140" x2="860" y2="140" stroke="#92a5d8" strokeWidth="2" />
      <g className="diagram-pop" style={{ animationDelay: '100ms' }}>
        <rect x="60" y="128" width="160" height="24" fill="rgba(255,122,144,0.18)" />
        <rect x="220" y="128" width="500" height="24" fill="rgba(0,255,136,0.12)" />
        <rect x="720" y="128" width="140" height="24" fill="rgba(255,122,144,0.18)" />
      </g>

      {pts.map((p, i) => (
        <g key={p.label} className="diagram-pop" style={{ animationDelay: `${180 + i * 70}ms` }}>
          <line x1={p.x} y1="128" x2={p.x} y2="156" stroke={color[p.kind]} strokeWidth="2" />
          <circle cx={p.x} cy="140" r="5" fill={color[p.kind]} />
          <text x={p.x} y="112" textAnchor="middle" fill={color[p.kind]} fontSize="9" fontWeight="800" fontFamily={FONT}>{p.val}</text>
          <text x={p.x} y="174" textAnchor="middle" fill="#9ab0e0" fontSize="7.5" fontFamily={FONT}>{p.label}</text>
        </g>
      ))}

      <text x="140" y="198" textAnchor="middle" fill="#ff7a90" fontSize="8" fontFamily={FONT}>invalid</text>
      <text x="470" y="198" textAnchor="middle" fill="#00ff88" fontSize="8" fontFamily={FONT}>valid (one representative value)</text>
      <text x="790" y="198" textAnchor="middle" fill="#ff7a90" fontSize="8" fontFamily={FONT}>invalid</text>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="20" y="256" width="430" height="106" rx="9" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.4)" />
        <text x="34" y="276" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>SIX VALUES FOR THE RANGE a ≤ x ≤ b</text>
        <text x="34" y="298" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">a−1, a, a+1,  b−1, b, b+1</text>
        <text x="34" y="320" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">+ one nominal value (in the middle)</text>
        <text x="34" y="342" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>2-value BVA: only a−1, a, b, b+1</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x="470" y="256" width="430" height="106" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="484" y="276" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>KAHAN LAGAYEIN</text>
        <text x="484" y="298" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>age limit, quantity, price range</text>
        <text x="484" y="316" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>string length, array index, date range</text>
        <text x="484" y="334" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>loop counter, timeout, file size</text>
        <text x="484" y="352" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Best results when combined with EP</text>
      </g>

      <text x="460" y="392" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Why: developers write &lt; or &lt;= wrongly at boundaries — 17/18/19 catches it
      </text>
      <text x="460" y="416" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: BVA tests the boundary values "min−1, min, min+1, max−1, max, max+1"
      </text>
    </svg>
  );
}

// 31. Equivalence partitioning
export function EquivalencePartitioningDiagram() {
  const parts = [
    { x: 40, w: 214, t: 'INVALID (too low)', c: '#ff7a90', val: '10', note: 'error message' },
    { x: 262, w: 330, t: 'VALID 18–60', c: '#00ff88', val: '35', note: 'registration accepted' },
    { x: 600, w: 236, t: 'INVALID (too high)', c: '#ff7a90', val: '70', note: 'error message' },
  ];
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="Equivalence partitioning splits the input domain into valid and invalid classes and tests one representative value per class instead of every possible value">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Equivalence Partitioning — divide the whole domain into classes
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        every value in a class behaves the same — one representative is enough
      </text>

      <text x="20" y="82" fill="#9ab0e0" fontSize="8.5" fontWeight="700" fontFamily={FONT}>INPUT DOMAIN (age field)</text>

      {parts.map((p, i) => (
        <g key={p.t} className="diagram-pop" style={{ animationDelay: `${120 + i * 110}ms` }}>
          <rect x={p.x} y="94" width={p.w} height="76" rx="8" fill={p.c} fillOpacity="0.1" stroke={p.c} strokeWidth="1.6" />
          <text x={p.x + p.w / 2} y="116" textAnchor="middle" fill={p.c} fontSize="9" fontWeight="800" fontFamily={FONT}>{p.t}</text>
          <text x={p.x + p.w / 2} y="140" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="'Consolas', monospace">{p.val}</text>
          <text x={p.x + p.w / 2} y="158" textAnchor="middle" fill="#9ab0e0" fontSize="7.5" fontFamily={FONT}>→ {p.note}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="20" y="192" width="880" height="58" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="212" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>HOW TO BUILD THE CLASSES</text>
        <text x="34" y="232" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          range 18–60 → 1 valid + 2 invalid · specific value → 1 valid + 2 invalid · boolean → 2 classes · set/list → 1 valid + 1 invalid
        </text>
        <text x="34" y="246" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Valid class = "positive" test, invalid class = "negative" test</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="20" y="266" width="430" height="90" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="34" y="286" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>BENEFIT</text>
        <text x="34" y="306" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>No need to test every value</text>
        <text x="34" y="324" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>90% fewer test cases, same coverage</text>
        <text x="34" y="342" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Combine it with BVA</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '660ms' }}>
        <rect x="470" y="266" width="430" height="90" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="484" y="286" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>LIMIT</text>
        <text x="484" y="306" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>If the class is wrong, the tests are wrong too</text>
        <text x="484" y="324" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>A boundary defect can be missed</text>
        <text x="484" y="342" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>So always use it with BVA</text>
      </g>

      <text x="460" y="392" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        EP = which classes exist · BVA = which values sit at their edges
      </text>
      <text x="460" y="416" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: EP splits the input domain into valid and invalid classes and tests one representative of each
      </text>
    </svg>
  );
}

// 32. State transition / graph based testing
export function StateGraphTestingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="State transition testing models an ATM as states and events: idle, card inserted, pin correct, menu, dispense, with invalid transitions such as three wrong pins returning to idle">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        State / graph based testing — view the system as states and events
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        cover every state, every valid and every invalid transition
      </text>

      <defs>
        <marker id="sg-grey" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#92a5d8" />
        </marker>
        <marker id="sg-red" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#ff7a90" />
        </marker>
        <marker id="sg-green" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#00ff88" />
        </marker>
      </defs>

      <g stroke="#92a5d8" strokeWidth="1.6" markerEnd="url(#sg-grey)">
        <line x1="162" y1="180" x2="244" y2="180" />
        <line x1="352" y1="180" x2="434" y2="180" />
        <line x1="542" y1="180" x2="624" y2="180" />
      </g>
      <text x="203" y="172" textAnchor="middle" fill="#9ab0e0" fontSize="7.5" fontFamily={FONT}>insert card</text>
      <text x="393" y="172" textAnchor="middle" fill="#9ab0e0" fontSize="7.5" fontFamily={FONT}>correct PIN</text>
      <text x="583" y="172" textAnchor="middle" fill="#9ab0e0" fontSize="7.5" fontFamily={FONT}>choose option</text>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <path d="M 490 154 C 460 96 140 96 112 152" fill="none" stroke="#ff7a90" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#sg-red)" />
        <text x="300" y="86" textAnchor="middle" fill="#ff7a90" fontSize="7.8" fontFamily={FONT}>3 wrong PINs → back to IDLE (invalid transition)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <line x1="680" y1="206" x2="680" y2="248" stroke="#00ff88" strokeWidth="1.6" markerEnd="url(#sg-green)" />
        <text x="692" y="232" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>withdraw</text>
        <path d="M 628 296 H 110 V 212" fill="none" stroke="#92a5d8" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#sg-grey)" />
        <text x="370" y="288" textAnchor="middle" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>eject card → IDLE</text>
      </g>

      {[
        ['IDLE', 110, 180],
        ['CARD IN', 300, 180],
        ['PIN OK', 490, 180],
        ['MENU', 680, 180],
        ['DISPENSE', 680, 278],
      ].map(([t, x, y], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${140 + i * 70}ms` }}>
          <rect x={x - 52} y={y - 26} width="104" height="52" rx="10" fill="rgba(47,111,255,0.14)" stroke="#6fb2ff" strokeWidth="1.4" />
          <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily={FONT}>{t}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="340" width="430" height="82" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="360" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>COVERAGE CRITERIA</text>
        <text x="34" y="380" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>State coverage — every state once</text>
        <text x="34" y="398" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>Transition coverage — every arrow once</text>
        <text x="34" y="414" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>Path coverage — every path from start to end</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="470" y="340" width="430" height="82" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="484" y="360" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>GRAPH BASED TESTING</text>
        <text x="484" y="380" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>Draw the model graph: node = step, edge = flow</text>
        <text x="484" y="398" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>Derive tests with node, edge and path coverage</text>
        <text x="484" y="414" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>CFG, use case graph, decision graph, state table</text>
      </g>

      <text x="460" y="448" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Test invalid transitions too — "PIN OK" cannot jump straight to "DISPENSE"
      </text>
    </svg>
  );
}

// 33. Compatibility testing
export function CompatibilityTestingDiagram() {
  const cells = [
    ['Windows 11', true, true, true, false],
    ['macOS 15', true, true, true, true],
    ['Ubuntu 24', true, false, true, false],
    ['Android 15', true, false, true, false],
    ['iOS 18', false, false, true, false],
  ];
  return (
    <svg viewBox="0 0 920 462" className="diagram-svg" role="img" aria-label="Compatibility testing matrix of operating systems and browsers, with the types of compatibility testing: backward, forward, cross browser, cross platform, device and network">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Compatibility testing — does it run in every environment?
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        OS · browser · device · hardware · network · database · language — build a matrix and test it
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="470" height="212" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>COMPATIBILITY MATRIX (sample)</text>
        {['Chrome', 'Firefox', 'Safari', 'Edge'].map((b, j) => (
          <text key={b} x={200 + j * 66} y="112" textAnchor="middle" fill="#c4ff00" fontSize="7.8" fontWeight="700" fontFamily={FONT}>{b}</text>
        ))}
        {cells.map(([os, ...vals], i) => (
          <g key={os}>
            <text x="34" y={140 + i * 28} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{os}</text>
            {vals.map((v, j) => (
              <text
                key={j}
                x={200 + j * 66}
                y={140 + i * 28}
                textAnchor="middle"
                fill={v ? '#00ff88' : '#ff7a90'}
                fontSize="10"
                fontWeight="700"
                fontFamily={FONT}
              >
                {v ? '✓' : '✗'}
              </text>
            ))}
          </g>
        ))}
        <text x="34" y="270" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Result: the matrix itself documents the supported combinations</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="510" y="66" width="390" height="212" rx="10" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="524" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>TYPES OF COMPATIBILITY TESTING</text>
        {[
          ['Backward', 'with older versions and file formats'],
          ['Forward', 'with newer versions and browsers'],
          ['Cross-browser', 'Chrome, Firefox, Safari, Edge'],
          ['Cross-platform', 'Windows, macOS, Linux, Android, iOS'],
          ['Device', 'screen size, resolution, touch'],
          ['Hardware', 'RAM, GPU, printer'],
          ['Network', '2G, 4G, Wi-Fi, offline'],
          ['Data / DB', 'MySQL, PostgreSQL, CSV import'],
        ].map(([t, d], i) => (
          <g key={t}>
            <text x="524" y={110 + i * 21} fill="#c4ff00" fontSize="7.8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="616" y={110 + i * 21} fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>{d}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="294" width="880" height="52" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="314" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>HOW TO DO IT</text>
        <text x="34" y="332" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Manual checklist · Selenium Grid · cloud device farm (BrowserStack, Sauce Labs) · VM/Docker snapshot · responsive mode
        </text>
      </g>

      <text x="460" y="376" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Testing every combination is impossible — pick the top 5–10 by risk
      </text>
      <text x="460" y="400" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Compatibility is not performance: here we ask whether it runs, not how fast
      </text>
      <text x="460" y="428" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: compatibility testing verifies behaviour across different environments
      </text>
    </svg>
  );
}

// 34. User documentation testing
export function DocumentationTestingDiagram() {
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="User documentation testing checks manuals, help files and installation guides for accuracy, completeness, clarity, consistency, usability and currency against the actual software">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        User documentation testing — does the manual tell the truth?
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        the document shipped with the software must match its actual behaviour
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="270" height="196" rx="10" fill="rgba(196,255,0,0.06)" stroke="rgba(196,255,0,0.4)" />
        <text x="34" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>KAUNSE DOCUMENTS</text>
        {[
          'User manual / guide',
          'Installation & config guide',
          'Online help / tooltips',
          'FAQ and troubleshooting',
          'Release notes / changelog',
          'API reference (developer docs)',
          'Tutorials / video script',
        ].map((t, i) => (
          <text key={t} x="34" y={110 + i * 22} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      <text x="302" y="170" textAnchor="middle" fill="#9ab0e0" fontSize="16" fontFamily={FONT}>→</text>

      {[
        ['ACCURACY', '#00d4ff', 'Does every step actually work?', 'is the screenshot current?'],
        ['COMPLETENESS', '#c4ff00', 'Is every feature documented?', 'is the error message explained?'],
        ['CLARITY', '#ff8800', 'Simple language, short steps', 'less jargon, more examples'],
        ['CONSISTENCY', '#ff7ab2', 'matches the words used in the UI', 'version number same'],
        ['USABILITY', '#00ff88', 'Can a new user follow it?', 'do the index and search work?'],
        ['CURRENCY', '#8f9dc4', 'matches the latest build', 'purane steps hataye?'],
      ].map(([t, c, l1, l2], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        return (
          <g key={t} className="diagram-pop" style={{ animationDelay: `${200 + i * 70}ms` }}>
            <rect x={320 + col * 292} y={90 + row * 58} width="278" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke={c} strokeWidth="1.3" strokeOpacity="0.55" />
            <text x={332 + col * 292} y={108 + row * 58} fill={c} fontSize="8.5" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={332 + col * 292} y={122 + row * 58} fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>{l1}</text>
            <text x={332 + col * 292} y={134 + row * 58} fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>{l2}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '680ms' }}>
        <rect x="20" y="280" width="880" height="52" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="300" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>WHO DOES IT</text>
        <text x="34" y="318" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Technical writer + tester + a new user — use the software with the manual, and every place you get stuck is a defect
        </text>
      </g>

      <text x="460" y="360" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        A wrong manual is a defect too — it raises support tickets and makes the product look bad
      </text>
      <text x="460" y="384" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Techniques: walkthrough, checklist, document review, usability test, link and screenshot check
      </text>
      <text x="460" y="412" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: user documentation testing verifies the document with the product for usability and accuracy
      </text>
    </svg>
  );
}

// 35. Domain testing
export function DomainTestingDiagram() {
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="Domain testing divides the complete input domain of a variable into sub domains, then picks representative values in the middle and boundary values at the edges, including output domain checks">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Domain testing — split the input domain into small parts and test them
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        the value domain matters, not the code path — this is the theory behind EP and BVA
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="430" height="184" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>INPUT DOMAIN (variable: quantity 1–100)</text>
        {[
          ['D1', 'less than 1', 'invalid', '#ff7a90', 34, 112],
          ['D2', '1 to 100', 'valid', '#00ff88', 160, 150],
          ['D3', 'more than 100', 'invalid', '#ff7a90', 324, 112],
        ].map(([d, r, kind, c, x, w], i) => (
          <g key={d} className="diagram-pop" style={{ animationDelay: `${160 + i * 90}ms` }}>
            <rect x={x} y="104" width={w} height="66" rx="8" fill={c} fillOpacity="0.1" stroke={c} />
            <text x={x + w / 2} y="124" textAnchor="middle" fill={c} fontSize="8.5" fontWeight="800" fontFamily={FONT}>{d}</text>
            <text x={x + w / 2} y="142" textAnchor="middle" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{r}</text>
            <text x={x + w / 2} y="158" textAnchor="middle" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>{kind}</text>
          </g>
        ))}
        <text x="34" y="192" fill="#7ee787" fontSize="8" fontFamily="'Consolas', monospace">values: 0 · 1 · 2 · 50 · 99 · 100 · 101</text>
        <text x="34" y="212" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Middle values skipped — the edges and one nominal value</text>
        <text x="34" y="232" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>At least one test from every sub-domain</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="470" y="66" width="430" height="184" rx="10" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="484" y="86" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>TWO STEPS OF DOMAIN TESTING</text>
        <text x="484" y="110" fill="#c4ff00" fontSize="8.5" fontWeight="700" fontFamily={FONT}>1. Analyse the domain</text>
        <text x="484" y="128" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Which variables? What is their valid range?</text>
        <text x="484" y="144" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Which constraints depend on each other?</text>
        <text x="484" y="168" fill="#c4ff00" fontSize="8.5" fontWeight="700" fontFamily={FONT}>2. Pick the test values</text>
        <text x="484" y="186" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>One nominal value from every sub-domain</text>
        <text x="484" y="202" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>and a value on both sides of every boundary</text>
        <text x="484" y="226" fill="#7ee787" fontSize="8" fontFamily="'Consolas', monospace">the output domain too: a bill from 0 to 10000</text>
        <text x="484" y="242" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>an invalid output is a defect (wrong total, overflow)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="20" y="266" width="880" height="52" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="286" fill="#ff8800" fontSize="9" fontWeight="700" fontFamily={FONT}>TYPES OF DOMAIN ERROR</text>
        <text x="34" y="304" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          closure error (boundary off by one) · shift error (the whole boundary moved) · missing or extra boundary
        </text>
      </g>

      <text x="460" y="346" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Domain testing is EP (which parts) plus BVA (the edges of those parts) in one model
      </text>
      <text x="460" y="370" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Black box — test design from the input and output domains, without looking at the code
      </text>
      <text x="460" y="398" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: domain testing chooses test values from the sub-domains and boundaries of the input domain
      </text>
    </svg>
  );
}

// 36. Integration testing
export function IntegrationTestingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Integration testing approaches: big bang, top down with stubs, bottom up with drivers and sandwich hybrid, on a module hierarchy">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Integration testing — test the modules joined together, alone is not enough
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        after unit testing, before system testing · interface and data-flow defects surface here
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="300" height="196" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>MODULE HIERARCHY</text>
        {[
          ['Main', 170, 110],
          ['M1', 105, 150],
          ['M2', 235, 150],
          ['M1.1', 70, 190],
          ['M1.2', 140, 190],
          ['M2.1', 200, 190],
          ['M2.2', 270, 190],
        ].map(([n, x, y]) => (
          <g key={n}>
            <rect x={x - 27} y={y - 12} width="54" height="24" rx="5" fill="rgba(47,111,255,0.16)" stroke="#6fb2ff" />
            <text x={x} y={y + 3} textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="700" fontFamily={FONT}>{n}</text>
          </g>
        ))}
        <g stroke="#92a5d8" strokeWidth="1.2">
          <line x1="170" y1="122" x2="105" y2="138" />
          <line x1="170" y1="122" x2="235" y2="138" />
          <line x1="105" y1="162" x2="70" y2="178" />
          <line x1="105" y1="162" x2="140" y2="178" />
          <line x1="235" y1="162" x2="200" y2="178" />
          <line x1="235" y1="162" x2="270" y2="178" />
        </g>
        <text x="34" y="238" fill="#7ee787" fontSize="7.8" fontFamily={FONT}>Each box is a unit — interface defects appear when they are joined</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="340" y="66" width="560" height="196" rx="10" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.35)" />
        {[
          ['BIG BANG', '#ff7a90', 'Join all modules at once, then test', 'small projects · debugging is hard'],
          ['TOP-DOWN', '#00ff88', 'Top-down · STUB for the lower layer', 'early UI demo · core late test'],
          ['BOTTOM-UP', '#00d4ff', 'Bottom-up · DRIVER for the upper layer', 'core tested first · UI late'],
          ['SANDWICH', '#c4ff00', 'Top-down + bottom-up, meeting in the middle', 'large projects · hybrid, costly'],
        ].map(([t, c, l1, l2], i) => {
          const y = 82 + i * 44;
          return (
            <g key={t}>
              <rect x="356" y={y} width="528" height="38" rx="7" fill="rgba(255,255,255,0.03)" stroke={c} strokeWidth="1.3" strokeOpacity="0.5" />
              <text x="370" y={y + 15} fill={c} fontSize="8.5" fontWeight="800" fontFamily={FONT}>{t}</text>
              <text x="470" y={y + 15} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{l1}</text>
              <text x="470" y={y + 29} fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>{l2}</text>
            </g>
          );
        })}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="280" width="430" height="98" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="300" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>STUB vs DRIVER</text>
        <text x="34" y="320" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>Stub — a fake copy of a module not yet built (lower layer)</text>
        <text x="34" y="338" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>Driver — the test harness that calls the module (upper layer)</text>
        <text x="34" y="360" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Interfaces, data format and error handling are tested here</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="470" y="280" width="430" height="98" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="484" y="300" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>INTEGRATION APPROACHES</text>
        <text x="484" y="320" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>Incremental (top-down, bottom-up, sandwich) — step by step</text>
        <text x="484" y="338" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>Non-incremental (big bang) — all at once</text>
        <text x="484" y="360" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Tools: JUnit + mocks, Postman (API), CI pipeline</text>
      </g>

      <text x="460" y="408" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Home of integration defects: wrong data format, missing field, wrong call between modules
      </text>
      <text x="460" y="434" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: integration testing verifies the interfaces and interaction between modules
      </text>
    </svg>
  );
}

// 37. System and acceptance testing
export function SystemAcceptanceTestingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Testing levels: unit, integration, system and acceptance testing, with system testing checking the whole product against requirements and acceptance testing done by the customer through alpha, beta and UAT">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        System and acceptance testing — the whole product, then customer sign-off
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        system = was the requirement met? · acceptance = can the customer use it?
      </text>

      {[
        ['UNIT', 'one function', '#6fb2ff'],
        ['INTEGRATION', 'modules jude', '#00d4ff'],
        ['SYSTEM', 'poora product', '#c4ff00'],
        ['ACCEPTANCE', 'the customer view', '#00ff88'],
      ].map(([t, d, c], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${80 + i * 90}ms` }}>
          <rect x={20 + i * 226} y="70" width="206" height="56" rx="9" fill="rgba(255,255,255,0.04)" stroke={c} strokeWidth="1.5" />
          <text x={123 + i * 226} y="92" textAnchor="middle" fill={c} fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={123 + i * 226} y="110" textAnchor="middle" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{d}</text>
        </g>
      ))}
      <g stroke="#92a5d8" strokeWidth="1.4">
        <line x1="228" y1="98" x2="240" y2="98" />
        <line x1="454" y1="98" x2="466" y2="98" />
        <line x1="680" y1="98" x2="692" y2="98" />
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="146" width="440" height="150" rx="10" fill="rgba(196,255,0,0.05)" stroke="rgba(196,255,0,0.4)" />
        <text x="34" y="166" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>SYSTEM TESTING</text>
        <text x="34" y="186" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>The whole integrated system in a production-like environment</text>
        {[
          'Functional: does every requirement work?',
          'Non-functional: performance, security, usability',
          'Recovery, configuration, installation testing',
          'Black-box — verified against the SRS (by the tester)',
        ].map((t, i) => (
          <text key={t} x="34" y={208 + i * 20} fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x="470" y="146" width="430" height="150" rx="10" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="484" y="166" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>ACCEPTANCE TESTING (UAT)</text>
        <text x="484" y="186" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>The customer checks it against the business need</text>
        {[
          'Alpha — at the developer site, internal team + user',
          'Beta — at the customer site, real users, feedback',
          'Contract & regulation acceptance (legal check)',
          'Operational acceptance (backup, recovery, support)',
        ].map((t, i) => (
          <text key={t} x="484" y={208 + i * 20} fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="20" y="312" width="880" height="52" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="332" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>ENTRY / EXIT CRITERIA</text>
        <text x="34" y="350" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Entry: integration pass, test environment ready, test cases approved · Exit: saare critical defects closed, acceptance criteria met
        </text>
      </g>

      <text x="460" y="392" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        If acceptance testing fails the project is not delivered — this is the final gate
      </text>
      <text x="460" y="416" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        System testing: was it built right? · acceptance testing: was it wanted? — both needed
      </text>
      <text x="460" y="442" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: acceptance testing validates against the customer acceptance criteria
      </text>
    </svg>
  );
}

// 38. Scenario testing
export function ScenarioTestingDiagram() {
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="Scenario testing walks an end to end realistic user story across several screens, with preconditions, steps, test data and expected business outcome">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Scenario testing — run one real user whole story
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        one end-to-end path, real data, a business outcome — the whole journey, not feature pieces
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="880" height="40" rx="8" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.4)" />
        <text x="34" y="84" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>SCENARIO</text>
        <text x="120" y="84" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          &quot;Riya wants to buy a phone — from search to delivery confirmation&quot;
        </text>
        <text x="34" y="98" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>
          Precondition: user logged in · test data: account with ₹50,000 limit · outcome: order placed + SMS + invoice
        </text>
      </g>

      {[
        ['1', 'SEARCH', 'searched for a phone', '#6fb2ff'],
        ['2', 'COMPARE', '2 models compare', '#00d4ff'],
        ['3', 'CART', 'add + quantity 1', '#00b3ff'],
        ['4', 'ADDRESS', 'save a new address', '#c4ff00'],
        ['5', 'PAY', 'pay by UPI', '#ff8800'],
        ['6', 'CONFIRM', 'order + SMS', '#00ff88'],
      ].map(([n, t, d, c], i) => (
        <g key={n} className="diagram-pop" style={{ animationDelay: `${180 + i * 70}ms` }}>
          <rect x={20 + i * 148} y="128" width="136" height="72" rx="9" fill="rgba(255,255,255,0.04)" stroke={c} strokeWidth="1.4" />
          <circle cx={38 + i * 148} cy="146" r="8" fill={c} fillOpacity="0.2" stroke={c} />
          <text x={38 + i * 148} y="149" textAnchor="middle" fill={c} fontSize="8" fontWeight="800" fontFamily={FONT}>{n}</text>
          <text x={88 + i * 148} y="149" textAnchor="middle" fill="#fff" fontSize="8.2" fontWeight="700" fontFamily={FONT}>{t}</text>
          <text x={88 + i * 148} y="172" textAnchor="middle" fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>{d}</text>
          <text x={88 + i * 148} y="190" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>screen + check</text>
        </g>
      ))}
      <g stroke="#92a5d8" strokeWidth="1.2">
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1={156 + i * 148} y1="164" x2={168 + i * 148} y2="164" />
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="20" y="222" width="430" height="106" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="242" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>HOW TO WRITE A SCENARIO</text>
        <text x="34" y="262" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>A real user, a real goal, a one-line story</text>
        <text x="34" y="280" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>An expected result at every step — screen, message, data</text>
        <text x="34" y="298" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Happy path + one failure scenario (payment fails)</text>
        <text x="34" y="316" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>A scenario is derived from a use case or user story</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '680ms' }}>
        <rect x="470" y="222" width="430" height="106" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="484" y="242" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>SCENARIO vs TEST CASE</text>
        <text x="484" y="262" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Test case — one small check of one feature</text>
        <text x="484" y="280" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>A scenario — several features forming one business flow</text>
        <text x="484" y="298" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>One scenario can contain 10–20 test cases</text>
        <text x="484" y="316" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Benefit: defects and gaps are seen from the user point of view</text>
      </g>

      <text x="460" y="364" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Scenario testing works best after integration — it covers interfaces and business flow
      </text>
      <text x="460" y="388" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Every screen can pass while the journey fails — that is what scenario testing catches
      </text>
      <text x="460" y="414" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: scenario testing tests the application through a realistic end-to-end user scenario
      </text>
    </svg>
  );
}

// 39. Performance testing
export function PerformanceTestingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Performance testing types load, stress, spike, endurance and scalability with a response time versus concurrent users curve and key metrics">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Performance testing — measure speed, capacity and stability
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        functional = does it work · performance = how fast, at how many users
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="440" height="212" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>RESPONSE TIME vs CONCURRENT USERS</text>
        <line x1="60" y1="240" x2="440" y2="240" stroke="#92a5d8" strokeWidth="1.4" />
        <line x1="60" y1="240" x2="60" y2="108" stroke="#92a5d8" strokeWidth="1.4" />
        <text x="440" y="254" textAnchor="end" fill="#9ab0e0" fontSize="7" fontFamily={FONT}>users →</text>
        <text x="66" y="116" fill="#9ab0e0" fontSize="7" fontFamily={FONT}>response time</text>
        <path
          className="perf-curve"
          d="M 60 232 C 130 230 190 224 240 214 C 290 204 320 188 350 160 C 372 138 382 116 392 96"
          fill="none"
          stroke="#00ff88"
          strokeWidth="2.2"
        />
        <circle cx="240" cy="214" r="4" fill="#c4ff00" />
        <text x="246" y="204" fill="#c4ff00" fontSize="7.2" fontFamily={FONT}>normal load</text>
        <circle cx="350" cy="160" r="4" fill="#ff8800" />
        <text x="300" y="150" fill="#ff8800" fontSize="7.2" fontFamily={FONT}>stress</text>
        <circle cx="392" cy="96" r="4" fill="#ff7a90" />
        <text x="342" y="88" fill="#ff7a90" fontSize="7.2" fontFamily={FONT}>knee / break point</text>
        <text x="34" y="266" fill="#7ee787" fontSize="7.6" fontFamily={FONT}>past the knee, response time rises sharply — that is the capacity limit</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="480" y="66" width="420" height="212" rx="10" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.35)" />
        <text x="494" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>TYPES OF PERFORMANCE TESTING</text>
        {[
          ['Load', 'behaviour at expected users', '#00ff88'],
          ['Stress', 'beyond the limit — when it breaks', '#ff8800'],
          ['Spike', 'sudden traffic burst', '#ff7a90'],
          ['Endurance', 'over a long period — memory leak', '#c4ff00'],
          ['Scalability', 'does it scale as users grow?', '#6fb2ff'],
          ['Volume', 'does it handle a large data volume?', '#00d4ff'],
        ].map(([t, d, c], i) => (
          <g key={t}>
            <text x="494" y={110 + i * 24} fill={c} fontSize="8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="576" y={110 + i * 24} fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <text x="494" y="266" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Tools: JMeter, k6, Locust, Gatling, LoadRunner</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="292" width="880" height="52" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="312" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>METRICS</text>
        <text x="34" y="330" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Response time · throughput (TPS) · error rate · CPU/memory · 90th percentile · concurrent users · think time · ramp-up
        </text>
      </g>

      <text x="460" y="372" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Average response time misleads — read the 90th percentile, or 10% of users stay slow
      </text>
      <text x="460" y="396" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        A performance test without a production-like environment and realistic data is worthless
      </text>
      <text x="460" y="424" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: load testing applies expected load, stress testing pushes beyond capacity
      </text>
    </svg>
  );
}

// 40. Regression testing
export function RegressionTestingDiagram() {
  return (
    <svg viewBox="0 0 920 462" className="diagram-svg" role="img" aria-label="Regression testing: a code change triggers selection of impacted test cases, which are run as retest, regression and smoke suites, using retest-all, selective or prioritized strategies">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Regression testing — a new fix must not break old work
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        change made → check impact → re-run the old test cases
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="250" height="80" rx="9" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="86" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>1. CHANGE</text>
        <text x="34" y="106" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Defect fix / new feature / refactor</text>
        <text x="34" y="124" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>library upgrade, config badla</text>
      </g>
      <text x="286" y="108" textAnchor="middle" fill="#9ab0e0" fontSize="15" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x="304" y="66" width="270" height="80" rx="9" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.4)" />
        <text x="318" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>2. IMPACT ANALYSIS</text>
        <text x="318" y="106" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Which module and test case are affected?</text>
        <text x="318" y="124" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Find it from code dependency and the RTM</text>
      </g>
      <text x="590" y="108" textAnchor="middle" fill="#9ab0e0" fontSize="15" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="608" y="66" width="292" height="80" rx="9" fill="rgba(0,255,136,0.07)" stroke="rgba(0,255,136,0.4)" />
        <text x="622" y="86" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>3. REGRESSION SUITE</text>
        <text x="622" y="106" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Run the old test cases + add the new ones</text>
        <text x="622" y="124" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Fail = regression defect</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="20" y="166" width="880" height="96" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="186" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>THREE SUITES — DO NOT MIX THEM</text>
        {[
          ['SMOKE', '#6fb2ff', 'Is the build healthy? 10–20 critical tests, 15 min'],
          ['RETEST', '#00d4ff', 'Re-run exactly the case for the fixed defect'],
          ['REGRESSION', '#00ff88', 'What the change affects + the stable suite'],
        ].map(([t, c, d], i) => (
          <g key={t}>
            <text x={40 + i * 290} y="212" fill={c} fontSize="8.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={40 + i * 290} y="232" fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <text x="34" y="252" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Smoke fails → do not run regression, return the build</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="20" y="280" width="430" height="88" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="300" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>STRATEGIES</text>
        <text x="34" y="320" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Retest-all — sab chalao (safe, mehnga)</text>
        <text x="34" y="338" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Selective — only what is affected (fast, risky)</text>
        <text x="34" y="356" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Prioritised — run high risk first</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x="470" y="280" width="430" height="88" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="484" y="300" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>AUTOMATION IS THE REAL ANSWER</text>
        <text x="484" y="320" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Manual regression is not possible every sprint</text>
        <text x="484" y="338" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>The suite runs on CI at every commit</text>
        <text x="484" y="356" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Selenium, Playwright, Cypress, JUnit, PHPUnit</text>
      </g>

      <text x="460" y="396" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        A regression defect is the most expensive — an old feature breaks silently
      </text>
      <text x="460" y="420" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        A good suite: the new feature test + old tests of that feature + tests of impacted modules
      </text>
      <text x="460" y="444" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: regression testing ensures a code change does not break existing functionality
      </text>
    </svg>
  );
}

// 41. Ad hoc testing
export function AdHocTestingDiagram() {
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="Ad hoc testing is informal testing without documentation, including exploratory testing with charters and timeboxes, error guessing and monkey testing">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Ad hoc testing — no plan, no document, only mind and experience
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        no formal test cases — tester intuition, product knowledge and curiosity
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="430" height="120" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="800" fontFamily={FONT}>AD HOC TESTING</text>
        <text x="34" y="108" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• No test cases and no documents</text>
        <text x="34" y="128" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• The tester uses the system from own understanding</text>
        <text x="34" y="148" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• The cheapest and the most unplanned (random)</text>
        <text x="34" y="170" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>When: little time, a quick sanity check, a first look at a new feature</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="470" y="66" width="430" height="120" rx="10" fill="rgba(196,255,0,0.06)" stroke="rgba(196,255,0,0.4)" />
        <text x="484" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>EXPLORATORY TESTING (structured ad hoc)</text>
        <text x="484" y="108" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• Charter: explore the payment page for 30 minutes</text>
        <text x="484" y="128" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• Timebox: 60–120 min session</text>
        <text x="484" y="148" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• Notes and defects are recorded (session sheet)</text>
        <text x="484" y="170" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Learning and testing together — the more the tester learns, the more is tested</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="20" y="204" width="430" height="112" rx="10" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="34" y="224" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>ERROR GUESSING</text>
        <text x="34" y="244" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Guess from experience: "the developer will slip here"</text>
        <text x="34" y="264" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Blank field, 0 quantity, double click, back button</text>
        <text x="34" y="284" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Build the list from common defect lists and past defect history</text>
        <text x="34" y="304" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Bug taxonomy: input, calculation, race condition, boundary</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="470" y="204" width="430" height="112" rx="10" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="484" y="224" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>MONKEY / GORILLA TESTING</text>
        <text x="484" y="244" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Random clicks, inputs — a tool or a person (monkey)</text>
        <text x="484" y="264" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Brilliant monkey — smart random (input aware)</text>
        <text x="484" y="284" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Catches crashes, hangs and memory issues</text>
        <text x="484" y="304" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Android monkey tool, UI fuzzers, stress scripts</text>
      </g>

      <text x="460" y="348" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Ad hoc testing does not replace formal testing — it supplements it
      </text>
      <text x="460" y="372" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Limit: not reproducible, coverage cannot be measured, depends on tester skill
      </text>
      <text x="460" y="400" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: ad hoc testing is informal, undocumented testing in which test cases are not designed in advance
      </text>
    </svg>
  );
}

// 42. Usability and accessibility testing
export function UsabilityAccessibilityDiagram() {
  return (
    <svg viewBox="0 0 920 462" className="diagram-svg" role="img" aria-label="Usability testing measures effectiveness, efficiency and satisfaction with real users, while accessibility testing checks WCAG POUR principles for people with disabilities">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Usability and accessibility testing — easy and usable for everyone
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        usability = is it easy to use? · accessibility = can disabled users use it too?
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="430" height="150" rx="10" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="34" y="86" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>USABILITY — 3 MEASURES (ISO 9241-11)</text>
        {[
          ['Effectiveness', 'was the task completed? success rate', 108],
          ['Efficiency', 'in how much time / how many clicks?', 130],
          ['Satisfaction', 'is the user satisfied? (SUS score)', 152],
        ].map(([t, d, y]) => (
          <g key={t}>
            <text x="34" y={y} fill="#c4ff00" fontSize="8.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="146" y={y} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <text x="34" y="176" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Method: 5–8 real users, give a task, watch and listen (think aloud)</text>
        <text x="34" y="196" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Nielsen 10 heuristics, A/B test, heatmap, user interview</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="470" y="66" width="430" height="150" rx="10" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="484" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>ACCESSIBILITY — WCAG POUR</text>
        {[
          ['Perceivable', 'can be seen or heard — alt text, contrast'],
          ['Operable', 'works from the keyboard, focus visible'],
          ['Understandable', 'clear language, clear error message'],
          ['Robust', 'works with a screen reader / assistive tech'],
        ].map(([t, d], i) => (
          <g key={t}>
            <text x="484" y={110 + i * 24} fill="#c4ff00" fontSize="8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="566" y={110 + i * 24} fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <text x="484" y="200" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Levels A / AA / AAA · WCAG 2.2 · tools: axe, Lighthouse, NVDA</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="20" y="232" width="880" height="88" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="252" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>CHECKLIST — FOR BOTH</text>
        <text x="34" y="272" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Simple nav flow · clear labels and button names · errors say what is wrong and what to do · consistent layout
        </text>
        <text x="34" y="290" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Keyboard only navigate · screen reader (NVDA/JAWS) · 4.5:1 colour contrast · 200% zoom · captions · no time limit
        </text>
        <text x="34" y="308" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>On mobile too: 44 px touch targets, orientation, text resize</text>
      </g>

      <text x="460" y="348" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Usability is subjective and measured; accessibility is also a legal requirement (RPwD Act, Section 508)
      </text>
      <text x="460" y="372" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Accessibility issues are not only about disability — slow networks, sunlight and small screens affect everyone
      </text>
      <text x="460" y="400" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: usability testing measures ease of use; accessibility testing finds barriers for disabled users
      </text>
      <text x="460" y="428" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Both are black-box and user-centric — after QA and before release
      </text>
    </svg>
  );
}

// 43. GUI testing
export function GuiTestingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="GUI testing checks the screen: layout and alignment, controls, navigation, input validation, images, look and feel, and is automated with record and playback tools and visual regression">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        GUI testing — is what appears on the screen actually correct?
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        layout, controls, navigation, validation, images, fonts, colours — the first impression
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="400" height="230" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <rect x="40" y="86" width="360" height="24" rx="4" fill="rgba(47,111,255,0.25)" stroke="#6fb2ff" />
        <text x="52" y="102" fill="#dbe6ff" fontSize="7.5" fontFamily={FONT}>Logo | Home | Orders | Cart | Profile</text>
        <rect x="40" y="120" width="150" height="90" rx="4" fill="rgba(0,212,255,0.12)" stroke="rgba(0,212,255,0.5)" />
        <text x="115" y="168" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily={FONT}>IMG (alt text)</text>
        <rect x="200" y="120" width="200" height="16" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
        <text x="208" y="132" fill="#9ab0e0" fontSize="7" fontFamily={FONT}>Name *</text>
        <rect x="200" y="144" width="200" height="16" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
        <text x="208" y="156" fill="#9ab0e0" fontSize="7" fontFamily={FONT}>Email *</text>
        <rect x="200" y="168" width="200" height="18" rx="4" fill="rgba(0,255,136,0.18)" stroke="#00ff88" />
        <text x="300" y="181" textAnchor="middle" fill="#00ff88" fontSize="7.5" fontWeight="700" fontFamily={FONT}>SUBMIT</text>
        <text x="208" y="200" fill="#ff7a90" fontSize="6.8" fontFamily={FONT}>Enter a valid email</text>
        <text x="40" y="228" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>placeholder: a screen sample showing which elements are checked</text>
        <text x="40" y="248" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Tab order: logo → menu → name → email → submit</text>
        <text x="40" y="268" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>The layout must not break at other resolutions or zoom</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="440" y="66" width="460" height="230" rx="10" fill="rgba(196,255,0,0.05)" stroke="rgba(196,255,0,0.35)" />
        <text x="454" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>GUI CHECKLIST</text>
        {[
          ['Layout & alignment', 'spacing, grid, responsive break'],
          ['Controls', 'button enable/disable, dropdown, checkbox'],
          ['Navigation', 'links, back/forward, breadcrumb, tab order'],
          ['Input validation', 'required, format, error message, max length'],
          ['Images & fonts', 'broken image, alt text, consistent font'],
          ['Look & feel', 'brand colour, spelling, alignment'],
          ['Data display', 'sorting, pagination, empty state'],
          ['Accessibility basics', 'contrast, focus ring, keyboard'],
        ].map(([t, d], i) => (
          <g key={t}>
            <text x="454" y={108 + i * 23} fill="#fff" fontSize="7.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="600" y={108 + i * 23} fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>{d}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="310" width="430" height="76" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="330" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>AUTOMATION</text>
        <text x="34" y="350" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Record & playback (Selenium IDE), object repository</text>
        <text x="34" y="368" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Visual regression: baseline screenshot vs current diff</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="470" y="310" width="430" height="76" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="484" y="330" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>DHYAN RAKHEIN</text>
        <text x="484" y="350" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Even a cosmetic defect breaks user trust</text>
        <text x="484" y="368" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>The layout behaves differently in each browser and resolution</text>
      </g>

      <text x="460" y="416" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        GUI testing covers function and appearance — the backend can be right while the screen is wrong
      </text>
      <text x="460" y="442" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: GUI testing verifies the graphical elements, navigation and behaviour of the interface
      </text>
    </svg>
  );
}

// 44. Validation testing
export function ValidationTestingDiagram() {
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="Validation testing checks that the right product was built against user requirements, compared with verification which checks the product was built right against the specification">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Validation testing — "did we build the right product?" (verification: "did we build the product right?")
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        verification = against the spec · validation = against the user need
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="430" height="160" rx="10" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="34" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>VERIFICATION — "Are we building the product right?"</text>
        <text x="34" y="108" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Static — checked without executing code or documents</text>
        <text x="34" y="126" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Reviews, inspection, walkthrough, static analysis</text>
        <text x="34" y="148" fill="#c4ff00" fontSize="7.8" fontWeight="700" fontFamily={FONT}>Question: does it match the design spec? does the code follow the standard?</text>
        <text x="34" y="170" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>At every phase — requirements, design, coding</text>
        <text x="34" y="190" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Lower cost, the defect is caught at its source</text>
        <text x="34" y="212" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Objective: spec compliance</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="470" y="66" width="430" height="160" rx="10" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="484" y="86" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>VALIDATION — "Are we building the right product?"</text>
        <text x="484" y="108" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Dynamic — checked by executing the software</text>
        <text x="484" y="126" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Unit, integration, system, acceptance testing</text>
        <text x="484" y="148" fill="#c4ff00" fontSize="7.8" fontWeight="700" fontFamily={FONT}>Question: is this what the user wanted? is the requirement met?</text>
        <text x="484" y="170" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>After coding — once a build is ready</text>
        <text x="484" y="190" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Real data, real environment, real user</text>
        <text x="484" y="212" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Objective: fitness for use</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="20" y="242" width="880" height="72" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="262" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>WHAT VALIDATION TESTING CHECKS</text>
        <text x="34" y="282" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Business requirement met · acceptance criteria met · workflow complete · data saved correctly · performance acceptable
        </text>
        <text x="34" y="300" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Method: requirement based test cases, UAT, alpha/beta, regression, exploratory — result: pass/fail + sign-off</text>
      </g>

      <text x="460" y="346" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Validation without verification is expensive — a wrong spec gives a wrong product
      </text>
      <text x="460" y="370" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Classic line: verification is built right to the spec, validation is right for the user
      </text>
      <text x="460" y="398" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: validation testing confirms fitness for use of the end product against user requirements
      </text>
      <text x="460" y="426" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Release without validation is a risk; validation without verification is expensive rework
      </text>
    </svg>
  );
}

// 45. Specification based testing
export function SpecificationBasedTestingDiagram() {
  return (
    <svg viewBox="0 0 920 462" className="diagram-svg" role="img" aria-label="Specification based testing derives test cases from a formal specification using decision tables, state models, grammar and equivalence partitions, without looking at the code">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Specification based testing — test cases from the spec, not the code
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        the formal name for black box · input/output spec, decision table, state model, grammar
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="230" height="150" rx="9" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.4)" />
        <text x="34" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>1. SPECIFICATION</text>
        <text x="34" y="106" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>SRS, use case, state model,</text>
        <text x="34" y="122" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>decision table, grammar,</text>
        <text x="34" y="138" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>API contract, UI spec</text>
        <text x="34" y="162" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>It must be formal and testable</text>
        <text x="34" y="180" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Test design without looking at the code</text>
        <text x="34" y="200" fill="#ff8800" fontSize="7.2" fontFamily={FONT}>A wrong spec makes every test worthless</text>
      </g>

      <text x="262" y="146" textAnchor="middle" fill="#9ab0e0" fontSize="15" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="280" y="66" width="330" height="150" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="294" y="86" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>2. PICK THE TECHNIQUE</text>
        {[
          ['Decision table', 'saare condition combinations'],
          ['State model', 'valid + invalid transitions'],
          ['Grammar / syntax', 'input format, protocol'],
          ['Cause-effect graph', 'input → output relation'],
          ['EP + BVA', 'classes and boundaries'],
        ].map(([t, d], i) => (
          <g key={t}>
            <text x="294" y={110 + i * 21} fill="#fff" fontSize="7.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="386" y={110 + i * 21} fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>{d}</text>
          </g>
        ))}
      </g>

      <text x="622" y="146" textAnchor="middle" fill="#9ab0e0" fontSize="15" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="640" y="66" width="260" height="150" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="654" y="86" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>3. TEST CASES</text>
        <text x="654" y="108" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>• One test case per rule</text>
        <text x="654" y="126" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>• Both valid and invalid</text>
        <text x="654" y="144" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>• Expected output from the spec</text>
        <text x="654" y="162" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>• Traceability requirement ID</text>
        <text x="654" y="186" fill="#7ee787" fontSize="7.2" fontFamily="'Consolas', monospace">R1 · DT-3 · expect 400</text>
        <text x="654" y="204" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Coverage: rules covered / total rules</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="232" width="880" height="92" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="252" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>DECISION TABLE EXAMPLE — discount rule</text>
        <text x="34" y="272" fill="#dbe6ff" fontSize="7.8" fontFamily="'Consolas', monospace">
          conditions:  amt &gt; 5000 | member | coupon   →  action: discount
        </text>
        <text x="34" y="292" fill="#dbe6ff" fontSize="7.8" fontFamily="'Consolas', monospace">
          R1: T T T → 15%   R2: T T F → 12%   R3: T F F → 10%   R4: F T T → 7%   R5: F F F → 0%
        </text>
        <text x="34" y="312" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>5 rules = 5 test cases; the rule missing from the table becomes the defect</text>
      </g>

      <text x="460" y="356" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Spec based testing is implementation independent — so the test cases survive a code change
      </text>
      <text x="460" y="380" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Combine it with technical review so a spec error is caught first
      </text>
      <text x="460" y="408" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: specification based testing derives test cases from the formal specification, not the implementation
      </text>
    </svg>
  );
}

// 46. Object oriented testing
export function ObjectOrientedTestingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Testing object oriented software: class testing with state and polymorphism, inheritance and method message paths, and inter class integration testing">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Object oriented software testing — the challenge of class, inheritance and polymorphism
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        encapsulation makes testing hard · overriding adds a new path · state travels with the object
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="430" height="150" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="800" fontFamily={FONT}>CLASS HIERARCHY — OVERRIDING</text>
        <rect x="150" y="98" width="150" height="30" rx="6" fill="rgba(47,111,255,0.16)" stroke="#6fb2ff" />
        <text x="225" y="117" textAnchor="middle" fill="#fff" fontSize="8.2" fontFamily={FONT}>Account</text>
        <text x="225" y="140" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>withdraw()</text>
        <rect x="60" y="164" width="140" height="30" rx="6" fill="rgba(0,212,255,0.14)" stroke="#00d4ff" />
        <text x="130" y="183" textAnchor="middle" fill="#fff" fontSize="8" fontFamily={FONT}>Savings</text>
        <rect x="250" y="164" width="140" height="30" rx="6" fill="rgba(255,136,0,0.14)" stroke="#ff8800" />
        <text x="320" y="183" textAnchor="middle" fill="#fff" fontSize="8" fontFamily={FONT}>Current (overdraft)</text>
        <g stroke="#92a5d8" strokeWidth="1.2">
          <line x1="200" y1="128" x2="140" y2="162" />
          <line x1="250" y1="128" x2="310" y2="162" />
        </g>
        <text x="34" y="208" fill="#ff7a90" fontSize="7.4" fontFamily={FONT}>Same method, different behaviour — both overrides need a test</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="470" y="66" width="430" height="150" rx="10" fill="rgba(196,255,0,0.05)" stroke="rgba(196,255,0,0.35)" />
        <text x="484" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>LEVELS OF OO TESTING</text>
        {[
          ['Intra-method', 'logic of one method (white box)'],
          ['Inter-method', 'method to method inside a class'],
          ['Intra-class', 'the whole behaviour and state of a class'],
          ['Inter-class', 'message interaction between two classes'],
          ['System level', 'the whole OO system, use case'],
        ].map(([t, d], i) => (
          <g key={t}>
            <text x="484" y={110 + i * 21} fill="#fff" fontSize="7.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="566" y={110 + i * 21} fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <text x="484" y="208" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Fault model based testing: every method of the class once</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="20" y="232" width="430" height="120" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="252" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>CHALLENGES</text>
        <text x="34" y="272" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Encapsulation — private state cannot be set from outside</text>
        <text x="34" y="290" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Inheritance — re-run the parent tests on the child</text>
        <text x="34" y="308" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Polymorphism — the actual object type decides the path</text>
        <text x="34" y="326" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Object state — same method, a different result after the first call</text>
        <text x="34" y="344" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Dynamic binding limits static analysis</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x="470" y="232" width="430" height="120" rx="9" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="484" y="252" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>TECHNIQUES</text>
        <text x="484" y="272" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Method message path (MM path) coverage</text>
        <text x="484" y="290" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>State based testing — the state machine of the object</text>
        <text x="484" y="308" fill="#dbe6ff" fontFamily={FONT} fontSize="7.8">Inheritance testing — parent and child both</text>
        <text x="484" y="326" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Isolate private dependencies with mocks and fakes</text>
        <text x="484" y="344" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Tools: JUnit + Mockito, PHPUnit + Prophecy</text>
      </g>

      <text x="460" y="384" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Class tests plus integration tests passing do not prove the system — check message flow and state too
      </text>
      <text x="460" y="410" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Inheritance rule: run the whole parent suite on the child class (subclass reuse test)
      </text>
      <text x="460" y="438" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: OO testing focuses on classes, inheritance, polymorphism and object interaction
      </text>
    </svg>
  );
}

// 47. Testing web based applications
export function WebAppTestingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Web application testing covers presentation, business logic and data layers across content, navigation, UI, functionality, compatibility, security, performance and usability dimensions">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Web based application testing — 3 layer, 8 dimension
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        browser + network + server + database — a different defect is possible at each
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="360" height="196" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="800" fontFamily={FONT}>3-TIER ARCHITECTURE</text>
        {[
          ['PRESENTATION', 'HTML/CSS/JS, browser, responsive', '#6fb2ff', 94],
          ['BUSINESS LOGIC', 'server, API, validation, session', '#c4ff00', 144],
          ['DATA', 'database, file, cache, backup', '#00ff88', 194],
        ].map(([t, d, c, y]) => (
          <g key={t}>
            <rect x="34" y={y} width="332" height="44" rx="8" fill="rgba(255,255,255,0.04)" stroke={c} strokeOpacity="0.55" />
            <text x="48" y={y + 18} fill={c} fontSize="8.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x="48" y={y + 34} fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <g stroke="#92a5d8" strokeWidth="1.2">
          <line x1="200" y1="138" x2="200" y2="142" />
          <line x1="200" y1="188" x2="200" y2="192" />
        </g>
        <text x="34" y="254" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>A defect can sit in any layer — the browser shows it</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="400" y="66" width="500" height="196" rx="10" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.35)" />
        <text x="414" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>EIGHT DIMENSIONS OF WEB TESTING</text>
        {[
          ['Content', 'spelling, accuracy, no broken text'],
          ['Navigation', 'links, 404, breadcrumb, back button'],
          ['UI / presentation', 'layout, responsive, cross-browser'],
          ['Functionality', 'forms, search, login, payment'],
          ['Compatibility', 'browser, OS, device, resolution'],
          ['Security', 'XSS, SQLi, CSRF, HTTPS, session'],
          ['Performance', 'load time, concurrency, CDN'],
          ['Usability / accessibility', 'ease of use, WCAG, keyboard'],
        ].map(([t, d], i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          return (
            <g key={t}>
              <text x={414 + col * 246} y={112 + row * 34} fill="#c4ff00" fontSize="7.8" fontWeight="700" fontFamily={FONT}>{t}</text>
              <text x={414 + col * 246} y={126 + row * 34} fill="#9ab0e0" fontSize="7" fontFamily={FONT}>{d}</text>
            </g>
          );
        })}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="274" width="880" height="52" rx="9" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="294" fill="#ff8800" fontSize="9" fontWeight="700" fontFamily={FONT}>SPECIAL CHALLENGES OF THE WEB</text>
        <text x="34" y="312" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Stateless HTTP · session/cookie · concurrent users · network latency · multiple browsers · security exposure · frequent releases
        </text>
      </g>

      <text x="460" y="356" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        A web app is never complete — releasing without regression automation is risky
      </text>
      <text x="460" y="380" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Tools: Selenium, Playwright, Cypress, Postman, JMeter, OWASP ZAP, axe
      </text>
      <text x="460" y="408" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: web testing covers content, navigation, UI, functionality, compatibility, security and performance
      </text>
    </svg>
  );
}

// 48. Database testing
export function DatabaseTestingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Database testing checks schema, tables and constraints, keys and indexes, triggers and stored procedures, data integrity and ACID transactions, plus migration and performance">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Database testing — is the data correct, complete and safe?
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        schema, constraint, trigger, procedure, transaction and data integrity — the backend truth
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="440" height="196" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="800" fontFamily={FONT}>SCHEMA SNAPSHOT</text>
        {[
          ['users', ['id PK', 'email UNIQUE', 'name NOT NULL']],
          ['orders', ['id PK', 'user_id FK → users', 'amount DECIMAL(10,2)']],
        ].map(([t, cols], i) => (
          <g key={t}>
            <rect x={34 + i * 214} y="98" width="200" height="92" rx="7" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.45)" />
            <text x={44 + i * 214} y="116" fill="#00d4ff" fontSize="8.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            {cols.map((c, j) => (
              <text key={c} x={44 + i * 214} y={134 + j * 16} fill="#dbe6ff" fontSize="7" fontFamily="'Consolas', monospace">{c}</text>
            ))}
          </g>
        ))}
        <text x="34" y="208" fill="#7ee787" fontSize="7.6" fontFamily={FONT}>PK unique · FK not orphaned · CHECK value valid · default correct</text>
        <text x="34" y="228" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Is there an index? Is the query slow? Is the column type right?</text>
        <text x="34" y="248" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Naming convention and normalisation checked</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="480" y="66" width="420" height="196" rx="10" fill="rgba(196,255,0,0.05)" stroke="rgba(196,255,0,0.35)" />
        <text x="494" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>WHAT TO TEST</text>
        {[
          ['Schema / structure', 'tables, columns, data type'],
          ['Constraints', 'PK, FK, UNIQUE, CHECK, NOT NULL'],
          ['Triggers & procedures', 'side effect, error handling'],
          ['Transactions (ACID)', 'commit, rollback, deadlock'],
          ['Data integrity', 'duplicate, orphan, garbage data'],
          ['CRUD flow', 'insert → select → update → delete'],
          ['Migration / backup', 'restore, version upgrade'],
          ['Performance', 'index, slow query, volume'],
        ].map(([t, d], i) => (
          <g key={t}>
            <text x="494" y={107 + i * 20} fill="#fff" fontSize="7.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="622" y={107 + i * 20} fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>{d}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="20" y="274" width="880" height="76" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="294" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>ACID — TRANSACTION TEST</text>
        <text x="34" y="314" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Atomicity (all or nothing) · Consistency (constraints hold) · Isolation (parallel transactions do not clash) · Durability (data survives a commit)
        </text>
        <text x="34" y="334" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Test: fail the payment → no order row either (rollback) · two users book one seat → only one wins</text>
      </g>

      <text x="460" y="380" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The UI can look right while the data is wrong — database testing catches exactly that
      </text>
      <text x="460" y="404" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Tools: SQL queries, DBUnit, tSQLt, pgTAP, dbfit, migration scripts
      </text>
      <text x="460" y="432" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: database testing verifies schema, constraints, triggers, procedures and data integrity
      </text>
    </svg>
  );
}

// 49. Introduction to automation testing
export function AutomationIntroDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Test automation pipeline from test case to script, tool, execution and report, with the test pyramid showing automation priority">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Test automation — a tool runs the tests instead of a person
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        write the script once, run it as often as needed — fast, repeatable, the backbone of regression
      </text>

      {[
        ['TEST CASE', 'manual steps define', '#6fb2ff'],
        ['SCRIPT', 'written in code', '#00d4ff'],
        ['TOOL', 'run the browser driver', '#c4ff00'],
        ['EXECUTE', 'on CI or on a schedule', '#ff8800'],
        ['REPORT', 'pass/fail + screenshot', '#00ff88'],
      ].map(([t, d, c], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${80 + i * 70}ms` }}>
          <rect x={20 + i * 180} y="70" width="160" height="58" rx="9" fill="rgba(255,255,255,0.04)" stroke={c} strokeWidth="1.5" />
          <text x={100 + i * 180} y="94" textAnchor="middle" fill={c} fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={100 + i * 180} y="112" textAnchor="middle" fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>{d}</text>
        </g>
      ))}
      <g stroke="#92a5d8" strokeWidth="1.4">
        {[0, 1, 2, 3].map((i) => <line key={i} x1={180 + i * 180} y1="99" x2={192 + i * 180} y2="99" />)}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="20" y="150" width="440" height="150" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="170" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>TEST PYRAMID — what to automate first</text>
        <polygon points="240,182 300,228 180,228" fill="rgba(255,122,144,0.2)" stroke="#ff7a90" />
        <text x="240" y="213" textAnchor="middle" fill="#ff7a90" fontSize="7" fontFamily={FONT}>UI (less)</text>
        <polygon points="180,230 300,230 330,272 150,272" fill="rgba(255,136,0,0.18)" stroke="#ff8800" />
        <text x="240" y="256" textAnchor="middle" fill="#ff8800" fontSize="7" fontFamily={FONT}>API / service</text>
        <polygon points="150,274 330,274 360,296 120,296" fill="rgba(0,255,136,0.16)" stroke="#00ff88" />
        <text x="240" y="288" textAnchor="middle" fill="#00ff88" fontSize="7" fontFamily={FONT}>unit (the most)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="480" y="150" width="420" height="150" rx="10" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="494" y="170" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>WHEN TO AUTOMATE</text>
        <text x="494" y="192" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>✓ Tests that run again and again (regression, smoke)</text>
        <text x="494" y="210" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>✓ Boring, repetitive, high volume data entry</text>
        <text x="494" y="228" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>✓ 24x7, multi-browser, multi-device runs</text>
        <text x="494" y="250" fill="#ff7a90" fontSize="7.8" fontFamily={FONT}>✗ One-time tests, exploratory and usability testing</text>
        <text x="494" y="268" fill="#ff7a90" fontSize="7.8" fontFamily={FONT}>✗ Fast-changing UI (the script breaks)</text>
        <text x="494" y="288" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>ROI = manual time saved − (script build + maintenance)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="20" y="318" width="880" height="50" rx="9" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="34" y="338" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>AUTOMATION ≠ 100% REPLACEMENT</text>
        <text x="34" y="356" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Automation does the repeatable checks · people explore, judge and find new risks — the two work together
        </text>
      </g>

      <text x="460" y="398" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The real benefit is not shorter tests — it is faster feedback (minutes, not days)
      </text>
      <text x="460" y="424" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Tools: Selenium, Cypress, Playwright, TestCafe, Protractor (legacy), Appium, RestAssured
      </text>
      <text x="460" y="450" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: test automation runs predefined test cases through a tool without manual intervention
      </text>
    </svg>
  );
}

// 50. Skills needed for automation
export function AutomationSkillsDiagram() {
  return (
    <svg viewBox="0 0 920 462" className="diagram-svg" role="img" aria-label="Skills needed for test automation: programming, locators and DOM, framework design, version control, CI CD, API and database, debugging, plus domain and analytical thinking">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Skills for automation — coding plus a tester mindset, both are needed
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        a tester who can write code, and a developer who understands test design — that is the best automation engineer
      </text>

      {[
        ['PROGRAMMING', 'Java / Python / JS · OOP, loops, functions, exceptions', '#6fb2ff', 40, 96],
        ['LOCATORS & DOM', 'HTML, CSS selector, XPath, shadow DOM, iframe', '#00d4ff', 40, 160],
        ['FRAMEWORK DESIGN', 'POM, data driven, keyword, hybrid, reporting', '#c4ff00', 40, 224],
        ['VERSION CONTROL', 'Git branch, commit, merge, code review', '#00ff88', 40, 288],
      ].map(([t, d, c, x, y], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${80 + i * 70}ms` }}>
          <rect x={x} y={y} width="420" height="54" rx="9" fill="rgba(255,255,255,0.03)" stroke={c} strokeWidth="1.4" strokeOpacity="0.55" />
          <text x={x + 14} y={y + 20} fill={c} fontSize="8.6" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={x + 14} y={y + 38} fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>{d}</text>
        </g>
      ))}

      {[
        ['CI / CD', 'Jenkins, GitHub Actions, pipeline config, Docker', '#ff8800', 480, 96],
        ['API & DATABASE', 'Postman, REST, SQL, JSON, authentication', '#ff7ab2', 480, 160],
        ['DEBUGGING', 'logs, screenshot, trace, flaky test analysis', '#aa88ff', 480, 224],
        ['DOMAIN + ANALYTICAL', 'business flow, risk, test design, ROI', '#ffd166', 480, 288],
      ].map(([t, d, c, x, y], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${360 + i * 70}ms` }}>
          <rect x={x} y={y} width="420" height="54" rx="9" fill="rgba(255,255,255,0.03)" stroke={c} strokeWidth="1.4" strokeOpacity="0.55" />
          <text x={x + 14} y={y + 20} fill={c} fontSize="8.6" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={x + 14} y={y + 38} fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>{d}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x="40" y="352" width="860" height="48" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="54" y="370" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>THE THREE MOST IMPORTANT</text>
        <text x="54" y="388" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          1. one programming language, in depth · 2. locator strategy (a map of the UI) · 3. debugging patience — finding the root cause of a flaky test
        </text>
      </g>

      <text x="460" y="424" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Learning a tool is easy, learning to think is hard — so test design and domain knowledge come first
      </text>
      <text x="460" y="448" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: an automation tester needs programming, tool knowledge, framework design and analytical skills
      </text>
    </svg>
  );
}

// 51. Scope of automation
export function AutomationScopeDiagram() {
  return (
    <svg viewBox="0 0 920 462" className="diagram-svg" role="img" aria-label="Scope of automation: what should be automated such as regression, smoke, data driven and API tests, versus what should stay manual such as exploratory, usability and one time tests">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Scope of automation — not everything can be automated
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Decide on ROI, stability and repeatability — otherwise the suite becomes a burden
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="430" height="196" rx="10" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="34" y="86" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>AUTOMATE</text>
        {[
          'Regression suite — it runs again and again',
          'Smoke / sanity — 15 minutes on every build',
          'Data driven cases — 1000 rows, same steps',
          'API and database validation',
          'Cross-browser matrix (on a grid)',
          'Performance / load scripts',
          'Long end-to-end business flows',
        ].map((t, i) => (
          <text key={t} x="34" y={110 + i * 20} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>✓ {t}</text>
        ))}
        <text x="34" y="256" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Criteria: repeatable + stable UI + measurable output</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="470" y="66" width="430" height="196" rx="10" fill="rgba(255,122,144,0.07)" stroke="rgba(255,122,144,0.45)" />
        <text x="484" y="86" fill="#ff7a90" fontSize="9" fontWeight="800" fontFamily={FONT}>KEEP MANUAL</text>
        {[
          'Exploratory and ad hoc testing',
          'Usability and accessibility judgement',
          'One-time tests',
          'Fast-changing UI and prototypes',
          'The first round on a new feature',
          'Complex visual design check',
          'Emotional / UX feedback',
        ].map((t, i) => (
          <text key={t} x="484" y={110 + i * 20} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>✗ {t}</text>
        ))}
        <text x="484" y="256" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Criteria: human judgement, one-off work</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="20" y="278" width="880" height="70" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="298" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>FIVE DECISION QUESTIONS</text>
        <text x="34" y="318" fill="#dbe6ff" fontSize="7.9" fontFamily={FONT}>
          1. How often will the test run? · 2. Are the steps stable? · 3. Is the expected result measurable? · 4. Will manual time be saved? · 5. Are the tool and skill available?
        </text>
        <text x="34" y="336" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>
          More than three yes answers = automate · otherwise keep it manual, or maintenance becomes a burden
        </text>
      </g>

      <text x="460" y="382" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Scope = what to automate + how much (percentage) + by when (which sprint)
      </text>
      <text x="460" y="406" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Write the automation scope into the test plan — otherwise the team sets out to automate everything
      </text>
      <text x="460" y="434" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: automation scope is limited to stable, repetitive, high-ROI test cases
      </text>
    </svg>
  );
}

// 52. Design and architecture for automation
export function AutomationArchitectureDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Automation framework architecture layers: test data, test scripts, page objects, utilities, driver and runner, with data driven, keyword driven, hybrid and page object model designs">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Automation framework — build the layered design once, reuse it many times
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        scripts + data + page objects + utilities + reporting — each in its own layer
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="450" height="230" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="9" fontWeight="800" fontFamily={FONT}>LAYERED ARCHITECTURE</text>
        {[
          ['TEST DATA', 'Excel / JSON / CSV / DB', '#c4ff00', 96],
          ['TEST SCRIPTS', 'business steps, assertions', '#00d4ff', 130],
          ['PAGE OBJECTS', 'locators + page methods', '#6fb2ff', 164],
          ['UTILITIES', 'wait, log, config, screenshot', '#ff8800', 198],
          ['DRIVER / RUNNER', 'WebDriver, browser, CI', '#ff7a90', 232],
        ].map(([t, d, c, y]) => (
          <g key={t}>
            <rect x="34" y={y} width="422" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke={c} strokeOpacity="0.5" />
            <text x="46" y={y + 19} fill={c} fontSize="8" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x="196" y={y + 19} fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <text x="34" y="282" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>An upper layer depends on the one below — never the reverse</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="490" y="66" width="410" height="230" rx="10" fill="rgba(47,111,255,0.07)" stroke="rgba(47,111,255,0.4)" />
        <text x="504" y="86" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>TYPES OF FRAMEWORK</text>
        {[
          ['Linear / record-play', 'simple, one script per test'],
          ['Modular', 'a separate script per module'],
          ['Data driven', 'one script, many data sets'],
          ['Keyword driven', 'action words (login, click)'],
          ['Hybrid', 'data + keyword + POM mix'],
          ['BDD', 'Given-When-Then (Cucumber)'],
        ].map(([t, d], i) => (
          <g key={t}>
            <text x="504" y={110 + i * 26} fill="#c4ff00" fontSize="7.9" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="648" y={110 + i * 26} fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <text x="504" y="272" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Hybrid + page object model is the most common today</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="312" width="880" height="52" rx="9" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="34" y="332" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>PAGE OBJECT MODEL (POM)</text>
        <text x="34" y="350" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          One class per page: locators + methods (login(), addToCart()) — change the UI and only one file changes, every script stays safe
        </text>
      </g>

      <text x="460" y="392" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        A good framework is reusable, maintainable, readable and report friendly
      </text>
      <text x="460" y="416" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Keep config outside — URL, browser and credentials from environment variables, never hard-coded
      </text>
      <text x="460" y="444" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: automation architecture keeps scripts, data, page objects and utilities in separate layers
      </text>
    </svg>
  );
}

// 53. Requirements for a test tool
export function TestToolRequirementsDiagram() {
  return (
    <svg viewBox="0 0 920 462" className="diagram-svg" role="img" aria-label="Requirements for selecting a test automation tool: platform and browser support, scripting, object identification, reporting, integration, cost, support and scalability">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        How to choose a test tool — 8 requirements
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        a tool is not cheap — look at licence, training and maintenance together
      </text>

      {[
        ['1. PLATFORM SUPPORT', 'OS, browser, mobile, desktop, API', '#6fb2ff', 'Chrome/Firefox/Safari, Windows/Linux'],
        ['2. SCRIPTING', 'language, IDE, debugging, reuse', '#00d4ff', 'Java/Python/JS, record + code'],
        ['3. OBJECT IDENTIFICATION', 'locator, object repository, dynamic element', '#c4ff00', 'CSS/XPath, auto-heal, iframe'],
        ['4. REPORTING', 'pass/fail, screenshot, log, dashboard', '#00ff88', 'HTML report, Allure, JUnit XML'],
        ['5. INTEGRATION', 'CI/CD, test management, defect tracker', '#ff8800', 'Jenkins, JIRA, GitHub, Docker'],
        ['6. DATA & PARAMETERISATION', 'external data, loops, environment config', '#ff7ab2', 'Excel/JSON, env variables'],
        ['7. COST & LICENSE', 'license, training, hardware, support', '#aa88ff', 'open source vs enterprise'],
        ['8. SCALABILITY & SUPPORT', 'parallel run, grid, vendor help, community', '#ffd166', 'Selenium Grid, cloud farm'],
      ].map(([t, d, c, ex], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 450;
        const y = 66 + row * 62;
        return (
          <g key={t} className="diagram-pop" style={{ animationDelay: `${80 + i * 60}ms` }}>
            <rect x={x} y={y} width="430" height="54" rx="9" fill="rgba(255,255,255,0.03)" stroke={c} strokeWidth="1.3" strokeOpacity="0.5" />
            <text x={x + 14} y={y + 19} fill={c} fontSize="8.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={x + 14} y={y + 34} fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>{d}</text>
            <text x={x + 14} y={y + 47} fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>{ex}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="20" y="322" width="880" height="52" rx="9" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="34" y="342" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>HOW TO EVALUATE</text>
        <text x="34" y="360" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Try 2–3 tools on a small pilot (5–10 real test cases) — a pilot tells the truth that a demo cannot
        </text>
      </g>

      <text x="460" y="402" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        A long tool list is not the point — the fit matters, matching team skill and the product tech stack
      </text>
      <text x="460" y="426" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Total cost of ownership = license + training + script maintenance + CI infrastructure
      </text>
      <text x="460" y="452" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: tool selection depends on platform support, scripting, reporting, integration and cost
      </text>
    </svg>
  );
}

// 54. Challenges in automation
export function AutomationChallengesDiagram() {
  return (
    <svg viewBox="0 0 920 462" className="diagram-svg" role="img" aria-label="Challenges in automation: flaky tests, high maintenance, initial cost, dynamic elements, skill gap, environment and data issues, and false confidence from green reports">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Automation challenges — writing a suite is easy, maintaining it is not
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        flaky tests, maintenance, cost, dynamic UI, skill gap, environment — this is what kills a suite
      </text>

      {[
        ['FLAKY TESTS', 'same code, sometimes passes, sometimes fails', 'root cause: timing, network, shared data', '#ff7a90'],
        ['MAINTENANCE', 'the UI changed and 50 scripts broke', 'use POM and stable locators to reduce it', '#ff8800'],
        ['INITIAL COST', 'time for setup, scripts and training', 'ROI shows up after 3–6 runs', '#c4ff00'],
        ['DYNAMIC ELEMENTS', 'the id changes on every load', 'use data-testid and relative XPath', '#00ff88'],
        ['SKILL GAP', 'the tester cannot code', 'training + pairing, developer support', '#6fb2ff'],
        ['ENVIRONMENT & DATA', 'test data exhausted, env down, shared DB', 'seeded data, docker, isolated env', '#00d4ff'],
        ['FALSE CONFIDENCE', 'all green, yet a bug in production', 'assertion + negative cases + exploratory', '#aa88ff'],
        ['SLOW SUITE', 'the full suite takes 6 hours', 'parallel, smoke-first, sharding', '#ffd166'],
      ].map(([t, d, fix, c], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 450;
        const y = 66 + row * 62;
        return (
          <g key={t} className="diagram-pop" style={{ animationDelay: `${80 + i * 60}ms` }}>
            <rect x={x} y={y} width="430" height="54" rx="9" fill="rgba(255,122,144,0.05)" stroke={c} strokeWidth="1.3" strokeOpacity="0.5" />
            <text x={x + 14} y={y + 19} fill={c} fontSize="8.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={x + 14} y={y + 34} fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>{d}</text>
            <text x={x + 14} y={y + 47} fill="#00ff88" fontSize="6.8" fontFamily={FONT}>fix: {fix}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x="20" y="322" width="880" height="52" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="342" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>THE MATH OF A FLAKY TEST</text>
        <text x="34" y="360" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          100 tests × 99% reliability = 37% chance the whole suite is green — flaky tests are the biggest enemy
        </text>
      </g>

      <text x="460" y="402" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The #1 reason automation fails is not the tool — it is maintenance and test design
      </text>
      <text x="460" y="426" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Quarantine, fix or delete a flaky test — never ignore it
      </text>
      <text x="460" y="452" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: automation challenges include maintenance, cost, flakiness, dynamic UI and skill gaps
      </text>
    </svg>
  );
}

// 55. Bug tracking and debugging
export function BugTrackingDebuggingDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Tracking a bug from failure to defect log, triage and fix, plus debugging techniques: logs, reproduction, breakpoints, binary search and root cause analysis">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Bug tracking and debugging — the road from failure to fix
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        record the bug first, then find the root cause — two different jobs
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="880" height="104" rx="10" fill="rgba(255,122,144,0.05)" stroke="rgba(255,122,144,0.4)" />
        <text x="34" y="86" fill="#ff7a90" fontSize="9" fontWeight="800" fontFamily={FONT}>BUG TRACKING CYCLE</text>
        {[
          ['DETECT', 'test fail / user report', '#ff7a90'],
          ['LOG', 'JIRA: title, steps, expected, actual', '#ff8800'],
          ['TRIAGE', 'severity + priority', '#c4ff00'],
          ['ASSIGN', 'to the developer', '#00ff88'],
          ['FIX', 'code change + unit test', '#00d4ff'],
          ['RETEST', 'the same case + regression', '#aa88ff'],
          ['CLOSE', 'verify + record', '#6fb2ff'],
        ].map(([t, d, c], i) => (
          <g key={t}>
            <rect x={34 + i * 122} y="96" width="112" height="56" rx="7" fill="rgba(255,255,255,0.04)" stroke={c} strokeOpacity="0.55" />
            <text x={90 + i * 122} y="116" textAnchor="middle" fill={c} fontSize="7.8" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={90 + i * 122} y="136" textAnchor="middle" fill="#dbe6ff" fontSize="6.4" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <g stroke="#92a5d8" strokeWidth="1.2">
          {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1={148 + i * 122} y1="124" x2={154 + i * 122} y2="124" />)}
        </g>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="20" y="186" width="430" height="170" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="206" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>DEBUGGING TECHNIQUES</text>
        {[
          'Logs padho — stack trace, assertion, timestamp',
          'Reproduce — minimum steps, same data',
          'Breakpoint / step-through (IDE debugger)',
          'Binary search — since when does it fail?',
          'git bisect — kaunsa commit toda',
          'Isolate — layer by layer from API to UI',
        ].map((t, i) => (
          <text key={t} x="34" y={230 + i * 20} fill="#dbe6ff" fontSize="7.7" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="470" y="186" width="430" height="170" rx="10" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="484" y="206" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>FIVE PARTS OF A GOOD BUG REPORT</text>
        <text x="484" y="230" fill="#dbe6ff" fontSize="7.7" fontFamily={FONT}>1. Title — the problem in one line</text>
        <text x="484" y="250" fill="#dbe6ff" fontSize="7.7" fontFamily={FONT}>2. Steps to reproduce — numbered, minimal</text>
        <text x="484" y="270" fill="#dbe6ff" fontSize="7.7" fontFamily={FONT}>3. Expected vs actual result</text>
        <text x="484" y="290" fill="#dbe6ff" fontSize="7.7" fontFamily={FONT}>4. Environment — build, browser, OS, data</text>
        <text x="484" y="310" fill="#dbe6ff" fontSize="7.7" fontFamily={FONT}>5. Evidence — screenshot, log, HAR, video</text>
        <text x="484" y="336" fill="#ff8800" fontSize="7.2" fontFamily={FONT}>Screenshot + log attached to an automation failure = half the debugging done</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="372" width="880" height="30" rx="8" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="34" y="392" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          Root cause vs symptom: "the button did not appear" is a symptom — the cause may be a slow API, CSS or permissions
        </text>
      </g>

      <text x="460" y="432" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The tracker records the defect; debugging finds the cause
      </text>
      <text x="460" y="456" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: bug tracking follows the defect life cycle; debugging finds the root cause
      </text>
    </svg>
  );
}

// 56. Manual vs automation testing
export function ManualVsAutomationDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Manual testing versus automated testing compared across execution, speed, cost, accuracy, coverage, regression, exploratory ability and best use cases">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Manual vs automated testing — each has its place
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        manual = human judgement · automation = machine speed and repeatability
      </text>

      <rect x="20" y="66" width="420" height="34" rx="8" fill="rgba(255,136,0,0.14)" stroke="rgba(255,136,0,0.5)" />
      <text x="230" y="88" textAnchor="middle" fill="#ff8800" fontSize="9.5" fontWeight="800" fontFamily={FONT}>MANUAL TESTING</text>
      <rect x="470" y="66" width="430" height="34" rx="8" fill="rgba(0,212,255,0.12)" stroke="rgba(0,212,255,0.5)" />
      <text x="685" y="88" textAnchor="middle" fill="#00d4ff" fontSize="9.5" fontWeight="800" fontFamily={FONT}>AUTOMATED TESTING</text>

      {[
        ['Who runs it', 'the tester, by hand', 'a tool, by script'],
        ['Speed', 'slow, one step at a time', '100 tests in seconds'],
        ['Initial cost', 'low (no script)', 'high (script + tool)'],
        ['Long-term cost', 'baar-baar mehnga', 'low (it is reused)'],
        ['Accuracy', 'human error possible', 'consistent, same steps'],
        ['Exploration', 'finds new defects', 'only checks what is written'],
        ['Regression', 'boring, gets skipped', 'best fit — on every build'],
        ['Best when', 'new feature, UX, ad hoc', 'stable feature, repeat run'],
      ].map(([k, m, a], i) => (
        <g key={k} className="diagram-pop" style={{ animationDelay: `${120 + i * 50}ms` }}>
          <rect x="20" y={108 + i * 28} width="880" height="26" rx="4" fill={i % 2 ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.05)'} />
          <text x="34" y={125 + i * 28} fill="#9ab0e0" fontSize="7.6" fontWeight="700" fontFamily={FONT}>{k}</text>
          <text x="196" y={125 + i * 28} fill="#ffe0c2" fontSize="7.6" fontFamily={FONT}>{m}</text>
          <text x="484" y={125 + i * 28} fill="#c8ecff" fontSize="7.6" fontFamily={FONT}>{a}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '580ms' }}>
        <rect x="20" y="342" width="880" height="52" rx="9" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="34" y="362" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>THE RIGHT MIX</text>
        <text x="34" y="380" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Manual — exploratory, usability, first round on a new feature · Automation — smoke, regression, data driven, cross-browser, API
        </text>
      </g>

      <text x="460" y="422" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Automation does not replace manual testing — it takes over the repetitive work
      </text>
      <text x="460" y="448" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: manual testing depends on human judgement, automation on tools and scripts
      </text>
    </svg>
  );
}

// 57. UI automation tools — Cypress, TestCafe, Protractor
export function UiToolsComparisonDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Comparison of modern UI automation tools Cypress, TestCafe and Protractor: language, architecture, browser support and status">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        UI automation tools — Cypress, TestCafe, Protractor
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        all three run in a browser, but architecture and language differ — so their fit differs
      </text>

      {[
        {
          name: 'CYPRESS', color: '#00ff88', tag: 'most popular',
          rows: ['Language: JavaScript / TypeScript', 'Runs inside browser + Node', 'No WebDriver — direct DOM', 'Auto-wait, time travel, video', 'Chrome, Edge, Firefox (WebKit limited)', 'Parallel via Cypress Cloud'],
        },
        {
          name: 'TESTCAFE', color: '#00d4ff', tag: 'no WebDriver',
          rows: ['Language: JavaScript / TypeScript', 'Node proxy injects script', 'No WebDriver dependency', 'Any browser incl. remote/cloud', 'Built-in parallel + reporters', 'Good for iframe / cross-browser'],
        },
        {
          name: 'PROTRACTOR', color: '#ff8800', tag: 'deprecated (2017+)',
          rows: ['Language: JavaScript (Angular)', 'Built on WebDriverJS', 'Made for Angular apps', 'Automatic wait for Angular', 'Sunset: Angular dropped support', 'Migrate to Cypress/Playwright'],
        },
      ].map((tool, i) => (
        <g key={tool.name} className="diagram-pop" style={{ animationDelay: `${80 + i * 120}ms` }}>
          <rect x={20 + i * 300} y="66" width="280" height="240" rx="10" fill="rgba(255,255,255,0.03)" stroke={tool.color} strokeWidth="1.5" strokeOpacity="0.6" />
          <text x={34 + i * 300} y="88" fill={tool.color} fontSize="11" fontWeight="800" fontFamily={FONT}>{tool.name}</text>
          <text x={34 + i * 300} y="104" fill="#9ab0e0" fontSize="7" fontFamily={FONT}>{tool.tag}</text>
          {tool.rows.map((r, j) => (
            <text key={r} x={34 + i * 300} y={128 + j * 26} fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>• {r}</text>
          ))}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="20" y="322" width="430" height="76" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="342" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>WEBDRIVER vs NO-WEBDRIVER</text>
        <text x="34" y="362" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>WebDriver (Selenium, Protractor): remote control from outside the browser</text>
        <text x="34" y="380" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>In-browser (Cypress) / proxy (TestCafe): runs inside the page — fast, but limited across tabs</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x="470" y="322" width="430" height="76" rx="9" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="484" y="342" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>WHICH ONE TO CHOOSE</text>
        <text x="484" y="362" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>SPA + JS team → Cypress / Playwright</text>
        <text x="484" y="380" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Cross-browser + remote browsers → TestCafe · Legacy Angular → Protractor (migrate)</text>
      </g>

      <text x="460" y="428" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Judge the team language and browser matrix, not tool popularity
      </text>
      <text x="460" y="452" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: Cypress is in-browser, TestCafe is proxy based, Protractor is WebDriverJS based for Angular
      </text>
    </svg>
  );
}

// 58. Case studies of automation testing
export function AutomationCaseStudiesDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Automation case studies: e-commerce regression suite, banking cross-browser, SaaS CI pipeline, showing problem, approach, tools and result">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Automation case studies — from problem to result
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        only real project numbers show the ROI of automation
      </text>

      {[
        {
          title: 'E-COMMERCE', color: '#00ff88',
          problem: '300 regression cases by hand on every release — 5 days',
          approach: 'Smoke + checkout flow + API layer automate',
          tools: 'Selenium + TestNG + Jenkins',
          result: 'Regression in 8 hours, releases weekly to daily',
          roi: 'payback: 3 release (~1 quarter)',
        },
        {
          title: 'BANKING PORTAL', color: '#00d4ff',
          problem: '5 browsers × 4 resolutions manual check',
          approach: 'Data driven suite + grid parallel',
          tools: 'Selenium Grid + Docker + Allure',
          result: '240 combinations in 40 minutes, defects found 60% earlier',
          roi: 'payback: 4 months, grid cost cover',
        },
        {
          title: 'SAAS DASHBOARD', color: '#c4ff00',
          problem: 'A bug in production, found only at the end of the sprint',
          approach: 'API + critical UI tests on every PR',
          tools: 'Cypress + GitHub Actions',
          result: 'Feedback from 4 hours to 9 minutes, 3% flaky',
          roi: 'payback: 2 sprints, bug cost 5x lower',
        },
      ].map((c, i) => (
        <g key={c.title} className="diagram-pop" style={{ animationDelay: `${80 + i * 140}ms` }}>
          <rect x={20 + i * 300} y="66" width="280" height="212" rx="10" fill="rgba(255,255,255,0.03)" stroke={c.color} strokeWidth="1.4" strokeOpacity="0.55" />
          <text x={34 + i * 300} y="88" fill={c.color} fontSize="9.5" fontWeight="800" fontFamily={FONT}>{c.title}</text>
          <text x={34 + i * 300} y="110" fill="#ff7a90" fontSize="7" fontWeight="700" fontFamily={FONT}>PROBLEM</text>
          <text x={34 + i * 300} y="124" fill="#dbe6ff" fontSize="7.1" fontFamily={FONT}>{c.problem}</text>
          <text x={34 + i * 300} y="146" fill="#c4ff00" fontSize="7" fontWeight="700" fontFamily={FONT}>APPROACH</text>
          <text x={34 + i * 300} y="160" fill="#dbe6ff" fontSize="7.1" fontFamily={FONT}>{c.approach}</text>
          <text x={34 + i * 300} y="182" fill="#9ab0e0" fontSize="7" fontWeight="700" fontFamily={FONT}>TOOLS</text>
          <text x={34 + i * 300} y="196" fill="#dbe6ff" fontSize="7.1" fontFamily={FONT}>{c.tools}</text>
          <text x={34 + i * 300} y="218" fill="#6fb2ff" fontSize="7" fontWeight="700" fontFamily={FONT}>RESULT</text>
          <text x={34 + i * 300} y="232" fill="#dbe6ff" fontSize="7.1" fontFamily={FONT}>{c.result}</text>
          <rect x={34 + i * 300} y="246" width="252" height="20" rx="4" fill={c.color} fillOpacity="0.12" />
          <text x={160 + i * 300} y="260" textAnchor="middle" fill={c.color} fontSize="6.8" fontFamily={FONT}>{c.roi}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="294" width="880" height="72" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="314" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>WHAT A CASE STUDY CONTAINS</text>
        <text x="34" y="334" fill="#dbe6ff" fontSize="7.9" fontFamily={FONT}>
          1. Context — product, team size, release cycle · 2. Problem — manual effort, defect leakage · 3. Approach — what was automated and with which framework
        </text>
        <text x="34" y="352" fill="#dbe6ff" fontSize="7.9" fontFamily={FONT}>
          4. Tools + infrastructure · 5. Result — numbers for time, defects and coverage · 6. Lessons — what went wrong and what we would do again
        </text>
      </g>

      <text x="460" y="398" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The magic of a case study is numbers — not automation helped, but 5 days became 8 hours
      </text>
      <text x="460" y="424" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Give an example from your own project — a college project or an internship counts
      </text>
      <text x="460" y="450" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: an automation case study is built from problem, approach, tool, result and lessons
      </text>
    </svg>
  );
}

// 59. Selenium introduction and history
export function SeleniumIntroDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="History of the Selenium project from 2004 Selenium Core through RC, WebDriver merge in 2011, Grid, IDE and Selenium 4 to the present">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Selenium — the oldest and most popular browser automation tool
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        open source, cross-browser, many languages — from 2004 to today
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="880" height="90" rx="10" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.35)" />
        <text x="34" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>WHAT SELENIUM IS</text>
        <text x="34" y="108" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          A free, open-source suite for controlling a browser from code — click, type, navigate, assert.
        </text>
        <text x="34" y="126" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>
          Language bindings: Java, Python, C#, Ruby, JavaScript, Kotlin · Browser: Chrome, Firefox, Edge, Safari
        </text>
        <text x="34" y="146" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>
          Note: Selenium automates the web UI only — Appium covers mobile and WinAppDriver covers desktop (separate projects)
        </text>
      </g>

      <line x1="40" y1="212" x2="880" y2="212" stroke="#92a5d8" strokeWidth="2" />
      {[
        ['2004', 'Selenium Core', 'Jason Huggins, ThoughtWorks — JS test runner', 70],
        ['2006', 'Selenium IDE', 'Firefox plugin, record & playback', 250],
        ['2007', 'Selenium RC', 'remote control server, any language', 430],
        ['2008', 'Selenium Grid', 'parallel runs on many machines', 610],
        ['2011', 'Selenium 2.0', 'WebDriver + RC merge (Simon Stewart)', 790],
      ].map(([yr, name, desc, x], i) => (
        <g key={yr} className="diagram-pop" style={{ animationDelay: `${160 + i * 80}ms` }}>
          <circle cx={x} cy="212" r="6" fill="#c4ff00" />
          <text x={x} y="196" textAnchor="middle" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>{yr}</text>
          <text x={x} y="234" textAnchor="middle" fill="#fff" fontSize="7.8" fontWeight="700" fontFamily={FONT}>{name}</text>
          <text x={i === 0 ? 30 : i === 4 ? 890 : x} y="248" textAnchor={i === 0 ? 'start' : i === 4 ? 'end' : 'middle'} fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>{desc}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="20" y="266" width="430" height="100" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="286" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>AFTER 2016</text>
        <text x="34" y="308" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>2016 — Selenium 3: WebDriver W3C standard, RC hataya</text>
        <text x="34" y="328" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>2021 — Selenium 4: W3C protocol, relative locators,</text>
        <text x="34" y="348" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>CDP, new Grid, IDE revival</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '660ms' }}>
        <rect x="470" y="266" width="430" height="100" rx="9" fill="rgba(196,255,0,0.06)" stroke="rgba(196,255,0,0.4)" />
        <text x="484" y="286" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>THE NAME STORY</text>
        <text x="484" y="308" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>It was once a product of Mercury Interactive —</text>
        <text x="484" y="328" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>selenium, the chemical, was placed opposite mercury,</text>
        <text x="484" y="348" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>the joke made the name Selenium stick</text>
      </g>

      <text x="460" y="388" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The project journey: Core → IDE → RC → Grid → WebDriver (2.0) → Selenium 3 → Selenium 4
      </text>
      <text x="460" y="414" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Today WebDriver, Grid and IDE together form the Selenium suite
      </text>
      <text x="460" y="442" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: Jason Huggins started Selenium Core in 2004, and WebDriver merged into it in 2011
      </text>
    </svg>
  );
}

// 60. Selenium tool suite
export function SeleniumSuiteDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="The Selenium tool suite: IDE for record and playback, WebDriver for coding, Grid for parallel and distributed runs, plus Selenium Manager and language bindings">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        The Selenium tool suite — four tools, one family
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        IDE (record) + WebDriver (code) + Grid (parallel) + Manager (driver setup)
      </text>

      {[
        ['SELENIUM IDE', '#c4ff00', 'Browser extension', ['Record & playback', 'No coding needed', '.side file save', 'Quick smoke / learning']],
        ['SELENIUM WEBDRIVER', '#00d4ff', 'The main library', ['Browser control from code', 'Java/Python/JS/C#', 'Real browser, real user flow', 'Works with a framework and CI']],
        ['SELENIUM GRID', '#00ff88', 'Distributed runner', ['Parallel execution', 'Multi browser + OS', 'Hub + Node model', 'Cloud / docker farm']],
        ['SELENIUM MANAGER', '#ff8800', 'Driver manager', ['Driver auto download', 'Browser version match', 'Selenium 4.6+ built-in', 'No manual setup']],
      ].map(([name, c, sub, pts], i) => (
        <g key={name} className="diagram-pop" style={{ animationDelay: `${80 + i * 110}ms` }}>
          <rect x={20 + i * 226} y="66" width="206" height="182" rx="10" fill="rgba(255,255,255,0.03)" stroke={c} strokeWidth="1.4" strokeOpacity="0.55" />
          <text x={123 + i * 226} y="88" textAnchor="middle" fill={c} fontSize="8.4" fontWeight="800" fontFamily={FONT}>{name}</text>
          <text x={123 + i * 226} y="102" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>{sub}</text>
          {pts.map((p, j) => (
            <text key={p} x={34 + i * 226} y={128 + j * 28} fill="#dbe6ff" fontSize="7" fontFamily={FONT}>• {p}</text>
          ))}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x="20" y="264" width="430" height="96" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="284" fill="#6fb2ff" fontSize="9" fontWeight="800" fontFamily={FONT}>LANGUAGE BINDINGS</text>
        <text x="34" y="304" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Official: Java, Python, C#, Ruby, JavaScript, Kotlin</text>
        <text x="34" y="322" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>All of them speak the same WebDriver protocol — the test logic is the same</text>
        <text x="34" y="342" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Community: PHP, Perl, Go (unofficial bindings)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="470" y="264" width="430" height="96" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="484" y="284" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>WHAT HAPPENED TO RC</text>
        <text x="484" y="304" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Selenium RC (2007–2016) is deprecated — removed from Selenium 3</text>
        <text x="484" y="322" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>WebDriver does the work, Grid scales it, the IDE records</text>
        <text x="484" y="342" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Interview favourite: the difference between RC and WebDriver</text>
      </g>

      <text x="460" y="392" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Suite = IDE (learn) → WebDriver (build) → Grid (scale) → Manager (forget the setup)
      </text>
      <text x="460" y="418" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Assertion libraries and reporting come separately — TestNG/JUnit, pytest, Mocha
      </text>
      <text x="460" y="446" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: the Selenium suite includes IDE, RC (legacy), WebDriver, Grid and Selenium Manager
      </text>
    </svg>
  );
}

// 61. Selenium IDE
export function SeleniumIdeDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Selenium IDE: a browser extension that records user actions as commands such as open, click and assert, replays them, and saves suites as .side files, with limitations">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Selenium IDE — record, replay, write code later
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        browser extension · no programming · best for learning and quick smoke tests
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="450" height="176" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <text x="34" y="86" fill="#9ab0e0" fontSize="8.6" fontWeight="800" fontFamily={FONT}>IDE WINDOW (sample)</text>
        <rect x="34" y="96" width="422" height="22" rx="4" fill="rgba(196,255,0,0.12)" stroke="rgba(196,255,0,0.4)" />
        <text x="42" y="111" fill="#c4ff00" fontSize="7" fontFamily={FONT}>▶ Run  ⏸ Pause  ⏭ Step  ● Record  ≡ Suite</text>
        <line x1="34" y1="126" x2="456" y2="126" stroke="rgba(255,255,255,0.15)" />
        {[
          ['command', 'target', 'value'],
          ['open', '/login', ''],
          ['type', 'id=email', 'riya@mail.com'],
          ['type', 'id=password', 'Secret@123'],
          ['click', 'css=button[type=submit]', ''],
          ['assert text', 'css=h1', 'Dashboard'],
        ].map(([a, b, c], i) => (
          <g key={a + b}>
            <text x="42" y={140 + i * 15} fill={i === 0 ? '#9ab0e0' : '#7ee787'} fontSize="6.8" fontFamily="'Consolas', monospace">{a}</text>
            <text x="130" y={140 + i * 15} fill={i === 0 ? '#9ab0e0' : '#dbe6ff'} fontSize="6.8" fontFamily="'Consolas', monospace">{b}</text>
            <text x="310" y={140 + i * 15} fill={i === 0 ? '#9ab0e0' : '#ffd166'} fontSize="6.8" fontFamily="'Consolas', monospace">{c}</text>
          </g>
        ))}
        <text x="34" y="234" fill="#9ab0e0" fontSize="7" fontFamily={FONT}>Green = pass · Red = fail · yellow = skipped</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="490" y="66" width="410" height="176" rx="10" fill="rgba(196,255,0,0.05)" stroke="rgba(196,255,0,0.35)" />
        <text x="504" y="86" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>HOW TO USE IT</text>
        <text x="504" y="110" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>1. Install the extension (Chrome / Firefox / Edge)</text>
        <text x="504" y="130" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>2. Press record and click like a user</text>
        <text x="504" y="150" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>3. Every action becomes a command</text>
        <text x="504" y="170" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>4. Playback — fast/slow, step by step debug</text>
        <text x="504" y="190" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>5. Group cases into a suite and export the .side file</text>
        <text x="504" y="210" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>6. Code export — Java / Python / JS</text>
        <text x="504" y="230" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Selenium 4 IDE: control flow (if/while), runner CLI</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="258" width="430" height="110" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="34" y="278" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>FAYDE</text>
        <text x="34" y="298" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>No coding needed — a manual tester can start at once</text>
        <text x="34" y="316" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>A fast way to reproduce a bug</text>
        <text x="34" y="334" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>The best tool for learning Selenium commands</text>
        <text x="34" y="352" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Recorded steps can be exported as code</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="470" y="258" width="430" height="110" rx="9" fill="rgba(255,122,144,0.06)" stroke="rgba(255,122,144,0.4)" />
        <text x="484" y="278" fill="#ff7a90" fontSize="9" fontWeight="800" fontFamily={FONT}>LIMITATIONS</text>
        <text x="484" y="298" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Brittle script — change the UI and the recorded steps break</text>
        <text x="484" y="316" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Weak at branching, looping and data-driven tests</text>
        <text x="484" y="334" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>No cross-browser scale, limited CI integration</text>
        <text x="484" y="352" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Not a replacement for a real framework — only an entry point</text>
      </g>

      <text x="460" y="394" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Learn with the IDE, build with WebDriver — record and playback is not a production framework
      </text>
      <text x="460" y="420" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        The .side file is JSON based — keep it in git and run it from the CLI in CI
      </text>
      <text x="460" y="448" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: Selenium IDE is a record and playback tool that runs as a browser extension
      </text>
    </svg>
  );
}

// 62. Selenium RC
export function SeleniumRcDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Selenium RC architecture: test code calls the RC server over HTTP which injects JavaScript into the browser, and the reasons RC was replaced by WebDriver">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Selenium RC — the old way: a server injected JavaScript into the browser
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        2007–2016 · the hero of any-language support · removed in Selenium 3
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="80" width="180" height="80" rx="9" fill="rgba(47,111,255,0.12)" stroke="#6fb2ff" strokeWidth="1.5" />
        <text x="110" y="106" textAnchor="middle" fill="#6fb2ff" fontSize="8.6" fontWeight="800" fontFamily={FONT}>TEST CODE</text>
        <text x="110" y="124" textAnchor="middle" fill="#dbe6ff" fontSize="7" fontFamily={FONT}>Java / Python / PHP</text>
        <text x="110" y="140" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>Selenium RC client library</text>
      </g>
      <text x="212" y="122" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="232" y="74" width="200" height="92" rx="9" fill="rgba(196,255,0,0.08)" stroke="#c4ff00" strokeWidth="1.5" />
        <text x="332" y="98" textAnchor="middle" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>RC SERVER</text>
        <text x="332" y="116" textAnchor="middle" fill="#dbe6ff" fontSize="7" fontFamily={FONT}>Java jar (selenium-server)</text>
        <text x="332" y="132" textAnchor="middle" fill="#dbe6ff" fontSize="7" fontFamily={FONT}>the launcher opens the browser</text>
        <text x="332" y="150" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>HTTP proxy + JS inj</text>
      </g>
      <text x="444" y="122" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="464" y="80" width="180" height="80" rx="9" fill="rgba(255,136,0,0.1)" stroke="#ff8800" strokeWidth="1.5" />
        <text x="554" y="104" textAnchor="middle" fill="#ff8800" fontSize="8.6" fontWeight="800" fontFamily={FONT}>BROWSER</text>
        <text x="554" y="122" textAnchor="middle" fill="#dbe6ff" fontSize="7" fontFamily={FONT}>javascript injected</text>
        <text x="554" y="138" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>same-origin window</text>
      </g>
      <text x="656" y="122" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>→</text>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="676" y="80" width="224" height="80" rx="9" fill="rgba(0,255,136,0.08)" stroke="#00ff88" strokeWidth="1.5" />
        <text x="788" y="104" textAnchor="middle" fill="#00ff88" fontSize="8.6" fontWeight="800" fontFamily={FONT}>AUT (application)</text>
        <text x="788" y="122" textAnchor="middle" fill="#dbe6ff" fontSize="7" fontFamily={FONT}>page load, click, type</text>
        <text x="788" y="138" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>results go back to the RC server</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="20" y="180" width="430" height="150" rx="10" fill="rgba(255,122,144,0.06)" stroke="rgba(255,122,144,0.4)" />
        <text x="34" y="200" fill="#ff7a90" fontSize="9" fontWeight="800" fontFamily={FONT}>PROBLEMS WITH RC</text>
        <text x="34" y="222" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>JavaScript injection — slow, and broken by browser versions</text>
        <text x="34" y="240" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Same origin policy — a proxy server is required</text>
        <text x="34" y="258" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Headless and native event support is weak</text>
        <text x="34" y="276" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>It does not control the browser like a real user</text>
        <text x="34" y="294" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>Stability issues — alerts, uploads and file downloads break</text>
        <text x="34" y="316" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>That is why WebDriver replaced RC (merged in 2011)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="470" y="180" width="430" height="150" rx="10" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="484" y="200" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>RC vs WEBDRIVER (short)</text>
        <text x="484" y="222" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>RC — JS injection through a server</text>
        <text x="484" y="240" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>WebDriver — the native automation API of the browser</text>
        <text x="484" y="258" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>RC — an HTTP proxy is required</text>
        <text x="484" y="276" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>WebDriver — direct driver binary (chromedriver)</text>
        <text x="484" y="296" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>RC — speed slow, flaky · WebDriver — fast, stable</text>
        <text x="484" y="316" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Today RC is exam material only — never use it in a project</text>
      </g>

      <text x="460" y="360" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The RC contribution: browser control from any language — WebDriver did the same job better
      </text>
      <text x="460" y="386" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        RC was deprecated in Selenium 3 (2016) and removed completely in Selenium 4
      </text>
      <text x="460" y="412" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: Selenium RC was a server that controlled the browser by injecting JavaScript
      </text>
      <text x="460" y="440" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Remember the architecture: test code → RC server → browser → application
      </text>
    </svg>
  );
}

// 63. Selenium WebDriver
export function SeleniumWebDriverDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Selenium WebDriver architecture: test code uses language bindings, sends W3C JSON commands to the browser driver binary, which controls the real browser; with locators, waits and actions">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Selenium WebDriver — controls a real browser natively
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        code → binding → driver binary → browser · no JS injection, no proxy
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        {[
          ['TEST CODE', 'Java / Python / JS', '#6fb2ff', 20, 196],
          ['LANGUAGE BINDING', 'selenium-webdriver lib', '#00d4ff', 238, 196],
          ['W3C JSON PROTOCOL', 'HTTP commands', '#c4ff00', 456, 196],
          ['BROWSER DRIVER', 'chromedriver / geckodriver', '#ff8800', 674, 226],
        ].map(([t, d, c, x, w]) => (
          <g key={t}>
            <rect x={x} y="80" width={w} height="56" rx="8" fill="rgba(255,255,255,0.04)" stroke={c} strokeWidth="1.4" strokeOpacity="0.6" />
            <text x={x + w / 2} y="102" textAnchor="middle" fill={c} fontSize="7.6" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={x + w / 2} y="120" textAnchor="middle" fill="#dbe6ff" fontSize="6.6" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <rect x="20" y="152" width="880" height="44" rx="8" fill="rgba(0,255,136,0.1)" stroke="#00ff88" strokeWidth="1.5" />
        <text x="460" y="172" textAnchor="middle" fill="#00ff88" fontSize="8.6" fontWeight="800" fontFamily={FONT}>REAL BROWSER</text>
        <text x="460" y="188" textAnchor="middle" fill="#dbe6ff" fontSize="7" fontFamily={FONT}>Chrome · Firefox · Edge · Safari — behaviour like a real user</text>
        <g stroke="#92a5d8" strokeWidth="1.4">
          <line x1="216" y1="108" x2="236" y2="108" />
          <line x1="434" y1="108" x2="454" y2="108" />
          <line x1="652" y1="108" x2="672" y2="108" />
          <line x1="787" y1="138" x2="787" y2="150" />
        </g>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="20" y="212" width="290" height="146" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="232" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>BASIC COMMANDS</text>
        {[
          'driver.get(url)',
          'findElement(By.id(…))',
          '.click() / .sendKeys()',
          '.getText() / .getAttribute()',
          'driver.quit()',
        ].map((t, i) => (
          <text key={t} x="34" y={254 + i * 20} fill="#7ee787" fontSize="7.2" fontFamily="'Consolas', monospace">{t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="324" y="212" width="290" height="146" rx="9" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="338" y="232" fill="#00d4ff" fontSize="8.6" fontWeight="800" fontFamily={FONT}>LOCATORS — 8 TYPES</text>
        <text x="338" y="254" fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>id · name · className · tagName</text>
        <text x="338" y="272" fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>linkText · partialLinkText</text>
        <text x="338" y="290" fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>cssSelector · xpath (relative best)</text>
        <text x="338" y="312" fill="#00ff88" fontSize="7.2" fontFamily={FONT}>Priority: id → css → relative xpath</text>
        <text x="338" y="332" fill="#ff7a90" fontSize="7.2" fontFamily={FONT}>Avoid: absolute xpath, dynamic id, index</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x="628" y="212" width="272" height="146" rx="9" fill="rgba(255,136,0,0.07)" stroke="rgba(255,136,0,0.45)" />
        <text x="642" y="232" fill="#ff8800" fontSize="8.6" fontWeight="800" fontFamily={FONT}>WAITS (flaky fix)</text>
        <text x="642" y="254" fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>Implicit wait — global timeout</text>
        <text x="642" y="272" fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>Explicit wait — wait on a condition</text>
        <text x="642" y="290" fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>Fluent wait — polling interval</text>
        <text x="642" y="312" fill="#00ff88" fontSize="7.2" fontFamily={FONT}>ExpectedConditions: visibility, clickable</text>
        <text x="642" y="332" fill="#ff7a90" fontSize="7.2" fontFamily={FONT}>Never Thread.sleep()</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="372" width="880" height="30" rx="8" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="34" y="392" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          Advanced: Actions (hover, drag-drop), JavaScriptExecutor, alerts, iframe, window/tab switch, file upload, screenshots
        </text>
      </g>

      <text x="460" y="428" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        WebDriver remote-controls the browser — the driver binary takes commands over HTTP
      </text>
      <text x="460" y="454" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: WebDriver controls a real browser through the browser driver over the W3C protocol
      </text>
    </svg>
  );
}

// 64. Selenium Grid
export function SeleniumGridDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Selenium Grid hub and node architecture for parallel cross browser execution, with capabilities matching and a 4 parallel runs example">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Selenium Grid — one test, many machines, parallel run
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        The hub takes requests, a node provides the browser — they are matched by capabilities
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="330" y="72" width="260" height="70" rx="10" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="460" y="96" textAnchor="middle" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>HUB (Selenium 3) / ROUTER (Selenium 4)</text>
        <text x="460" y="114" textAnchor="middle" fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>queues the test requests</text>
        <text x="460" y="130" textAnchor="middle" fill="#9ab0e0" fontSize="7" fontFamily={FONT}>picks a node by matching capabilities</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="20" y="72" width="250" height="70" rx="9" fill="rgba(47,111,255,0.1)" stroke="#6fb2ff" strokeWidth="1.4" />
        <text x="145" y="94" textAnchor="middle" fill="#6fb2ff" fontSize="8.4" fontWeight="800" fontFamily={FONT}>TEST SUITE</text>
        <text x="145" y="112" textAnchor="middle" fill="#dbe6ff" fontSize="7" fontFamily={FONT}>TestNG / JUnit / pytest</text>
        <text x="145" y="128" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>parallel = methods / classes</text>
      </g>
      <line x1="272" y1="107" x2="326" y2="107" stroke="#92a5d8" strokeWidth="1.5" />

      {[
        ['NODE 1', 'Chrome · Windows 11', '#00d4ff', 60, 190],
        ['NODE 2', 'Firefox · Ubuntu', '#00ff88', 250, 190],
        ['NODE 3', 'Safari · macOS', '#ff8800', 440, 190],
        ['NODE 4', 'Edge · Windows 11', '#ff7ab2', 630, 190],
      ].map(([n, b, c, x, y], i) => (
        <g key={n} className="diagram-pop" style={{ animationDelay: `${240 + i * 70}ms` }}>
          <rect x={x} y={y} width="180" height="54" rx="8" fill="rgba(255,255,255,0.04)" stroke={c} strokeOpacity="0.6" strokeWidth="1.3" />
          <text x={x + 90} y={y + 20} textAnchor="middle" fill={c} fontSize="8" fontWeight="800" fontFamily={FONT}>{n}</text>
          <text x={x + 90} y={y + 38} textAnchor="middle" fill="#dbe6ff" fontSize="6.8" fontFamily={FONT}>{b}</text>
        </g>
      ))}
      <g stroke="#92a5d8" strokeWidth="1.3">
        <line x1="460" y1="142" x2="460" y2="170" />
        <line x1="150" y1="170" x2="720" y2="170" />
        {[150, 340, 530, 720].map((x) => (
          <line key={x} x1={x} y1="170" x2={x} y2="188" />
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="20" y="266" width="430" height="92" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="286" fill="#c4ff00" fontSize="8.8" fontWeight="800" fontFamily={FONT}>CAPABILITIES (DesiredCapabilities)</text>
        <text x="34" y="306" fill="#7ee787" fontSize="7.2" fontFamily="'Consolas', monospace">{'{ browserName: "chrome",'}</text>
        <text x="34" y="322" fill="#7ee787" fontSize="7.2" fontFamily="'Consolas', monospace">{'  platformName: "Windows 11",'}</text>
        <text x="34" y="338" fill="#7ee787" fontSize="7.2" fontFamily="'Consolas', monospace">{'  "browserVersion": "latest" }'}</text>
        <text x="34" y="352" fill="#9ab0e0" fontSize="6.9" fontFamily={FONT}>Options (Selenium 4): ChromeOptions, FirefoxOptions</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="470" y="266" width="430" height="92" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="484" y="286" fill="#00ff88" fontSize="8.8" fontWeight="800" fontFamily={FONT}>BENEFIT OF PARALLEL RUNS</text>
        <text x="484" y="306" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>4 browsers × 100 tests · sequential 40 min → parallel 12 min</text>
        <text x="484" y="324" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>the cross-browser matrix covered in one run</text>
        <text x="484" y="342" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>Docker: selenium/hub, selenium/node-chrome images</text>
        <text x="484" y="356" fill="#9ab0e0" fontSize="6.9" fontFamily={FONT}>Cloud grids: BrowserStack, Sauce Labs, LambdaTest</text>
      </g>

      <text x="460" y="386" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Grid = horizontal scaling — add machines, speed up the suite (tests must be parallel safe)
      </text>
      <text x="460" y="410" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Shared data conflicts, port limits and test order dependencies are the enemies of parallel runs
      </text>
      <text x="460" y="438" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: Selenium Grid gives parallel and distributed testing through its hub-node architecture
      </text>
    </svg>
  );
}

// 65. Test design considerations
export function TestDesignConsiderationsDiagram() {
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Test design considerations for automation: independent atomic tests, stable locators, data handling, waits, reusable page objects, assertions, naming and test pyramid balance">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Test design considerations — how to write a good test
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        80% of automation pain comes from bad design, not from the tool
      </text>

      {[
        ['INDEPENDENT TESTS', 'no test should depend on another', 'test 3 must also run alone', '#6fb2ff'],
        ['ATOMIC & FOCUSED', 'one test = one behaviour', 'the reason for a failure is obvious', '#00d4ff'],
        ['STABLE LOCATORS', 'data-testid, id, relative xpath', 'no index or absolute XPath', '#c4ff00'],
        ['WAITS, NOT SLEEP', 'explicit wait on condition', 'flaky tests gone', '#00ff88'],
        ['TEST DATA STRATEGY', 'factory / seed / API setup', 'no shared database state', '#ff8800'],
        ['PAGE OBJECT MODEL', 'locators in one place', 'UI change = 1 file', '#ff7ab2'],
        ['MEANINGFUL ASSERTIONS', 'do not just click — verify', 'status, text, db row', '#aa88ff'],
        ['NAMING & REPORTING', 'a name that states the intent', 'screenshot and log on failure', '#ffd166'],
      ].map(([t, d, why, c], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 450;
        const y = 66 + row * 60;
        return (
          <g key={t} className="diagram-pop" style={{ animationDelay: `${80 + i * 60}ms` }}>
            <rect x={x} y={y} width="430" height="52" rx="9" fill="rgba(255,255,255,0.03)" stroke={c} strokeWidth="1.3" strokeOpacity="0.5" />
            <text x={x + 14} y={y + 18} fill={c} fontSize="8.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={x + 14} y={y + 33} fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>{d}</text>
            <text x={x + 14} y={y + 46} fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>why: {why}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="20" y="310" width="880" height="66" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="330" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>EXAMPLE OF A DIRTY TEST</text>
        <text x="34" y="348" fill="#ff7a90" fontSize="7.6" fontFamily="FONT">✗ test1 creates a user → test2 logs in as that user (order dependency, fails alone)</text>
        <text x="34" y="364" fill="#00ff88" fontSize="7.6" fontFamily="FONT">✓ every test creates its own user through the API (beforeEach), then logs in — it passes alone too</text>
      </g>

      <text x="460" y="402" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        The test name should say what broke just from the failure — not login test 2
      </text>
      <text x="460" y="426" textAnchor="middle" fill="#92a5d8" fontSize="9" fontFamily={FONT}>
        Smoke tests first, then the critical path, then detailed UI — keep the pyramid balanced
      </text>
      <text x="460" y="454" textAnchor="middle" fill="#8f9dc4" fontSize="9" fontFamily={FONT}>
        Exam point: automation test design covers independence, locator strategy, waits, data and reporting
      </text>
    </svg>
  );
}
