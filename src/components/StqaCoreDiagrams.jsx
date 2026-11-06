const FONT = "'Segoe UI', system-ui, sans-serif";

// Palette for the Software Testing & QA core diagrams added for the IT-33 paper topics.
const C = {
  white: '#ffffff',
  dim: '#9ab0e0',
  faint: '#5a6a9e',
  cyan: '#00d4ff',
  blue: '#2f6fff',
  lime: '#c4ff00',
  green: '#00e676',
  orange: '#ff8800',
  purple: '#aa00ff',
  pink: '#ff7ab2',
  red: '#ff5252',
  teal: '#00bcd4',
  yellow: '#ffd600',
};

function Frame({ id, w = 920, h = 520, title, sub, label, children }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="diagram-svg"
      role="img"
      aria-label={label}
      data-diagram={id}
    >
      <text x={w / 2} y="30" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="800" fontFamily={FONT}>
        {title}
      </text>
      <text x={w / 2} y="50" textAnchor="middle" fill={C.dim} fontSize="10.5" fontFamily={FONT}>
        {sub}
      </text>
      {children}
    </svg>
  );
}

function Arrow({ x1, y1, x2, y2, color = C.lime, dashed = false, delay = 0, label, labelDx = 0, labelDy = -8 }) {
  const horiz = Math.abs(y2 - y1) < Math.abs(x2 - x1);
  const dir = horiz ? Math.sign(x2 - x1) : Math.sign(y2 - y1);
  const tipBack = 7;
  const head = 6;
  const px = horiz ? x2 - dir * tipBack : x2;
  const py = horiz ? y2 : y2 - dir * tipBack;
  const pts = horiz
    ? `${x2},${y2} ${px},${y2 - head} ${px},${y2 + head}`
    : `${x2},${y2} ${x2 - head},${py} ${x2 + head},${py}`;
  return (
    <g className="diagram-pop" style={{ animationDelay: `${delay}ms` }}>
      <line x1={x1} y1={y1} x2={px} y2={py} stroke={color} strokeWidth="1.7" strokeOpacity="0.85" strokeDasharray={dashed ? '5 4' : undefined} />
      <polygon points={pts} fill={color} fillOpacity="0.9" />
      {label && (
        <text x={(x1 + x2) / 2 + labelDx} y={(y1 + y2) / 2 + labelDy} textAnchor="middle" fill={color} fontSize="8.4" fontWeight="700" fontFamily={FONT}>
          {label}
        </text>
      )}
    </g>
  );
}

/* ------------------------------------------------------------------
   1.19 - SQA activities and building blocks
   ------------------------------------------------------------------ */
export function St1SqaBlocksDiagram() {
  const activities = [
    ['1. PLAN', 'goals, standards, metrics, SQA plan', C.cyan],
    ['2. EXECUTE', 'reviews, testing, change control', C.lime],
    ['3. CHECK', 'independent audit, compliance', C.yellow],
    ['4. IMPROVE', 'metrics, CAPA, process change', C.orange],
  ];
  const blocks = [
    ['Pre-project', 'quality goals, contract review', C.cyan],
    ['Life cycle', 'reviews, testing, config mgmt', C.green],
    ['Infrastructure', 'procedures, templates, tools', C.yellow],
    ['Management', 'plan, progress, risk, COQ', C.orange],
    ['Organisation', 'ISO 9001 / CMMI, SQU, staff', C.purple],
    ['Improvement', 'defect analysis, lessons learnt', C.pink],
  ];
  return (
    <Frame
      id="st1-sqa-blocks"
      title="SQA activities and building blocks"
      sub="Activities show how the work runs; blocks show what the system is built from"
      label="The four SQA activities of planning execution checking and improvement arranged as a loop, beside the six building blocks of an SQA system covering pre-project components life cycle components infrastructure management organisation and improvement, with the QA versus QC versus testing distinction"
    >
      {/* activity loop */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={72} width={440} height={196} rx="11" fill="rgba(0,212,255,0.04)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={244} y={94} textAnchor="middle" fill={C.cyan} fontSize="9.4" fontWeight="800" fontFamily={FONT}>SQA ACTIVITIES — CLOSED LOOP</text>
        {activities.map(([t, sub, col], i) => (
          <g key={t}>
            <rect x={40} y={104 + i * 36} width={256} height="30" rx="6" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.1" strokeOpacity="0.75" />
            <text x={52} y={118 + i * 36} fill={col} fontSize="8.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={52} y={130 + i * 36} fill={C.dim} fontSize="7.2" fontFamily={FONT}>{sub}</text>
          </g>
        ))}
        <Arrow x1={308} y1={230} x2={308} y2={114} color={C.pink} dashed delay={260} label="re-plan" labelDx={-20} labelDy={-52} />
        <text x={324} y={118} fill={C.white} fontSize="7.6" fontFamily={FONT}>Output = confidence,</text>
        <text x={324} y={130} fill={C.white} fontSize="7.6" fontFamily={FONT}>not only a defect list.</text>
        <text x={324} y={152} fill={C.dim} fontSize="7.2" fontFamily={FONT}>The audit is independent —</text>
        <text x={324} y={163} fill={C.dim} fontSize="7.2" fontFamily={FONT}>not a team member.</text>
        <text x={324} y={185} fill={C.faint} fontSize="7" fontFamily={FONT}>docs: plan, review record,</text>
        <text x={324} y={196} fill={C.faint} fontSize="7" fontFamily={FONT}>audit report, metrics.</text>
        <text x={244} y={252} textAnchor="middle" fill={C.yellow} fontSize="7.4" fontWeight="700" fontFamily={FONT}>plan → execute → check → improve → re-plan</text>
      </g>

      {/* building blocks */}
      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x={480} y={72} width={416} height={196} rx="11" fill="rgba(196,255,0,0.04)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={688} y={94} textAnchor="middle" fill={C.lime} fontSize="9.4" fontWeight="800" fontFamily={FONT}>BUILDING BLOCKS OF SQA</text>
        {blocks.map(([t, sub, col], i) => (
          <g key={t}>
            <rect x={496} y={106 + i * 26} width={384} height="22" rx="5" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="0.9" strokeOpacity="0.6" />
            <text x={508} y={121 + i * 26} fill={col} fontSize="7.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={612} y={121 + i * 26} fill={C.dim} fontSize="7.2" fontFamily={FONT}>{sub}</text>
          </g>
        ))}
      </g>

      {/* QA vs QC vs testing */}
      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x={24} y={286} width={872} height={120} rx="11" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={308} textAnchor="middle" fill={C.purple} fontSize="9.4" fontWeight="800" fontFamily={FONT}>QA vs QC vs TESTING</text>
        {[
          ['QA', 'process, preventive, audit', 'keep the process right', C.cyan],
          ['QC', 'product, detective, review', 'measure the product', C.yellow],
          ['TESTING', 'running software, dynamic', 'run it and check', C.orange],
        ].map(([t, sub, m, col], i) => (
          <g key={t}>
            <rect x={44 + i * 288} y={320} width={268} height="66" rx="7" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1" strokeOpacity="0.65" />
            <text x={178 + i * 288} y={342} textAnchor="middle" fill={col} fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={178 + i * 288} y={358} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>{sub}</text>
            <text x={178 + i * 288} y={374} textAnchor="middle" fill={C.white} fontSize="7.4" fontFamily={FONT}>{m}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x={24} y={422} width={872} height={80} rx="10" fill="rgba(255,214,0,0.05)" stroke={C.yellow} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={444} textAnchor="middle" fill={C.yellow} fontSize="9" fontWeight="800" fontFamily={FONT}>exam point</text>
        <text x={460} y={464} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>SQA assures (preventive); QC and testing detect (detective) — three links of one chain</text>
        <text x={460} y={484} textAnchor="middle" fill={C.faint} fontSize="7.6" fontFamily={FONT}>A missing block leaks the system: no infrastructure, ad hoc reviews; no management, no action on metrics</text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   2.4 - Levels of testing with V and W models
   ------------------------------------------------------------------ */
export function St2LevelsTestingDiagram() {
  return (
    <Frame
      id="st2-levels-testing"
      title="Levels of testing — V-model and W-model"
      sub="unit > integration > system > acceptance, one test pair per phase"
      label="The four levels of testing paired against development phases in a V shape from requirements with acceptance testing down to detailed design with unit testing and coding at the vertex, plus the W-model adding a static verification branch at every phase and a summary of who performs each level and on what basis"
    >
      {/* V-model */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <text x={460} y={84} textAnchor="middle" fill={C.dim} fontSize="8.6" fontWeight="700" fontFamily={FONT}>V-MODEL — verification (left) and validation (right)</text>
        {[
          ['REQUIREMENTS', 92, C.cyan, 'ACCEPTANCE TEST'],
          ['SYSTEM DESIGN', 146, C.lime, 'SYSTEM TEST'],
          ['ARCHITECTURE', 200, C.yellow, 'INTEGRATION TEST'],
          ['DETAILED DESIGN', 254, C.orange, 'UNIT TEST'],
        ].map(([lt, y, col, rt]) => (
          <g key={lt}>
            <rect x={30} y={y} width={170} height="34" rx="6" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.2" strokeOpacity="0.8" />
            <text x={115} y={y + 21} textAnchor="middle" fill={col} fontSize="7.6" fontWeight="800" fontFamily={FONT}>{lt}</text>
            <rect x={720} y={y} width={170} height="34" rx="6" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.2" strokeOpacity="0.8" />
            <text x={805} y={y + 21} textAnchor="middle" fill={col} fontSize="7.6" fontWeight="800" fontFamily={FONT}>{rt}</text>
            <line x1={206} y1={y + 17} x2={714} y2={y + 17} stroke={col} strokeWidth="0.8" strokeDasharray="4 5" strokeOpacity="0.35" />
          </g>
        ))}
        <rect x={402} y={300} width={116} height="30" rx="6" fill={C.purple} fillOpacity="0.1" stroke={C.purple} strokeWidth="1.3" />
        <text x={460} y={319} textAnchor="middle" fill={C.purple} fontSize="7.6" fontWeight="800" fontFamily={FONT}>CODING</text>
        <line x1={202} y1={288} x2={400} y2={312} stroke={C.faint} strokeWidth="0.9" strokeDasharray="3 3" />
        <line x1={718} y1={288} x2={520} y2={312} stroke={C.faint} strokeWidth="0.9" strokeDasharray="3 3" />
        <text x={115} y={340} textAnchor="middle" fill={C.faint} fontSize="7" fontFamily={FONT}>development phases</text>
        <text x={805} y={340} textAnchor="middle" fill={C.faint} fontSize="7" fontFamily={FONT}>test levels</text>
      </g>

      {/* W-model */}
      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x={24} y={356} width={432} height={146} rx="11" fill="rgba(255,126,178,0.05)" stroke={C.pink} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={240} y={378} textAnchor="middle" fill={C.pink} fontSize="9.2" fontWeight="800" fontFamily={FONT}>W-MODEL — two branches at every phase</text>
        {[
          ['Requirements', 'review + acceptance test', C.cyan],
          ['Design', 'inspection + system test', C.lime],
          ['Detailed design', 'walkthrough + integration test', C.yellow],
          ['Code', 'code review + unit test', C.orange],
        ].map(([t, sub, col], i) => (
          <g key={t}>
            <text x={44} y={402 + i * 24} fill={col} fontSize="7.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={152} y={402 + i * 24} fill={C.dim} fontSize="7.4" fontFamily={FONT}>{sub}</text>
          </g>
        ))}
        <text x={240} y={492} textAnchor="middle" fill={C.faint} fontSize="7.2" fontFamily={FONT}>static verification + dynamic validation are both planned</text>
      </g>

      {/* who / basis */}
      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x={472} y={356} width={424} height={146} rx="11" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={684} y={378} textAnchor="middle" fill={C.green} fontSize="9.2" fontWeight="800" fontFamily={FONT}>WHO PERFORMS IT — AND ON WHAT BASIS</text>
        {[
          ['Unit', 'developer', 'code / detailed design', C.orange],
          ['Integration', 'dev + test team', 'interface spec', C.yellow],
          ['System', 'independent QA team', 'SRS + non-functional', C.lime],
          ['Acceptance', 'customer / end user', 'user requirement', C.cyan],
        ].map(([t, who, basis, col], i) => (
          <g key={t}>
            <text x={490} y={402 + i * 24} fill={col} fontSize="7.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={572} y={402 + i * 24} fill={C.dim} fontSize="7.2" fontFamily={FONT}>{who}</text>
            <text x={700} y={402 + i * 24} fill={C.faint} fontSize="7.2" fontFamily={FONT}>{basis}</text>
          </g>
        ))}
        <text x={684} y={492} textAnchor="middle" fill={C.faint} fontSize="7.2" fontFamily={FONT}>regression at every level — smoke first, retest after a fix</text>
      </g>

      <text x={460} y={516} textAnchor="middle" fill={C.yellow} fontSize="7.4" fontWeight="700" fontFamily={FONT}>
        change the level and the basis, owner and environment change too — so no level can be skipped
      </text>
    </Frame>
  );
}
