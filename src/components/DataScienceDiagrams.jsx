const FONT = "'Segoe UI', system-ui, sans-serif";

// ============================================================
// Diagram 1 — Data Science as intersection of 3 disciplines
// ============================================================
export function DSVennDiagram() {
  const circles = [
    { cx: 300, cy: 160, r: 128, color: '#0047ff', label: 'STATISTICS', sub: '& MATHEMATICS', labelY: 95, subY: 113 },
    { cx: 500, cy: 160, r: 128, color: '#c4ff00', label: 'COMPUTER', sub: 'SCIENCE', labelY: 95, subY: 113 },
    { cx: 400, cy: 300, r: 128, color: '#00d4ff', label: 'DOMAIN', sub: 'KNOWLEDGE', labelY: 386, subY: 404 },
  ];
  return (
    <svg viewBox="0 0 800 510" className="diagram-svg" role="img" aria-label="Data science as intersection of statistics, computer science and domain knowledge">
      <defs>
        <radialGradient id="dsGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c4ff00" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c4ff00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="400" cy="230" r="90" fill="url(#dsGlow)" />
      {circles.map((c, i) => (
        <g key={c.label} className="diagram-pop" style={{ animationDelay: `${120 + i * 140}ms` }}>
          <circle cx={c.cx} cy={c.cy} r={c.r} fill={c.color} fillOpacity="0.09" stroke={c.color} strokeWidth="2.4" strokeOpacity="0.75" />
          <text x={c.cx} y={c.labelY} textAnchor="middle" fill={c.color} fontSize="14.5" fontWeight="800" fontFamily={FONT}>{c.label}</text>
          <text x={c.cx} y={c.subY} textAnchor="middle" fill={c.color} fontSize="11" fontWeight="600" fontFamily={FONT} opacity="0.85">{c.sub}</text>
        </g>
      ))}
      {/* what each discipline contributes */}
      <g className="diagram-pop" style={{ animationDelay: '580ms' }}>
        <text x="118" y="142" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Probability</text>
        <text x="118" y="160" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Regression</text>
        <text x="118" y="178" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Hypothesis test</text>
        <text x="682" y="142" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Python · SQL</text>
        <text x="682" y="160" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Databases</text>
        <text x="682" y="178" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Machine Learning</text>
        <text x="400" y="462" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Business · Healthcare · Finance · Retail</text>
      </g>
      {/* center */}
      <g className="diagram-pop" style={{ animationDelay: '720ms' }}>
        <text x="400" y="203" textAnchor="middle" fill="#ffffff" fontSize="17" fontWeight="800" fontFamily={FONT}>DATA</text>
        <text x="400" y="225" textAnchor="middle" fill="#ffffff" fontSize="17" fontWeight="800" fontFamily={FONT}>SCIENCE</text>
        <text x="400" y="245" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>insight + action</text>
      </g>
      <text x="400" y="492" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>Maths gives the method · CS gives the tools · Domain gives the context</text>
    </svg>
  );
}

// ============================================================
// Diagram 2 — Data to Value flow (why data science matters)
// ============================================================
export function DSImpactDiagram() {
  const steps = [
    { label: 'DATA', sub: 'raw events', icon: 'M4 4h16v16H4zM4 10h16M9 10v10M15 10v10' },
    { label: 'INFORMATION', sub: 'cleaned + organised', icon: 'M4 6h16M4 12h16M4 18h10' },
    { label: 'INSIGHT', sub: 'pattern · model', icon: 'M12 3a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 3z' },
    { label: 'DECISION', sub: 'action chosen', icon: 'M4 20V4m0 16h16M8 15l4-4 3 3 5-6' },
    { label: 'VALUE', sub: 'revenue · savings', icon: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z' },
  ];
  return (
    <svg viewBox="0 0 940 330" className="diagram-svg" role="img" aria-label="Data to information to insight to decision to value flow">
      <defs>
        <marker id="arrowDS" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
        <linearGradient id="dsStep" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0047ff" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#0047ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {steps.map((s, i) => {
        const x = 20 + i * 184;
        const isLast = i === steps.length - 1;
        return (
          <g key={s.label} className="diagram-pop" style={{ animationDelay: `${150 + i * 130}ms` }}>
            <rect x={x} y="45" width="160" height="130" rx="14" fill="rgba(255,255,255,0.03)" stroke={isLast ? '#c4ff00' : 'rgba(255,255,255,0.18)'} strokeWidth="1.6" />
            <rect x={x} y="45" width="160" height="130" rx="14" fill="url(#dsStep)" />
            <g transform={`translate(${x + 64}, 68)`}>
              <path d={s.icon} fill="none" stroke={isLast ? '#c4ff00' : '#2f6fff'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x={x + 80} y={122} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>{s.label}</text>
            <text x={x + 80} y={143} textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>{s.sub}</text>
            <text x={x + 80} y={163} textAnchor="middle" fill="#c4ff00" fontSize="9.5" fontFamily={FONT}>{i + 1} / {steps.length}</text>
            {i < steps.length - 1 && (
              <line x1={x + 160} y1="110" x2={x + 182} y2="110" stroke="#c4ff00" strokeWidth="2.6" markerEnd="url(#arrowDS)" className="arrow-pulse" />
            )}
          </g>
        );
      })}
      <text x="470" y="215" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>
        Data Science strengthens the steps in between — through cleaning, modelling and prediction
      </text>
      <g className="diagram-pop" style={{ animationDelay: '900ms' }}>
        {[
          { x: 135, t: 'Fraud detected in 200ms' },
          { x: 390, t: 'Demand forecast for next week' },
          { x: 630, t: 'Churn risk score per customer' },
          { x: 825, t: 'Cost saved: crores' },
        ].map((c) => (
          <text key={c.t} x={c.x} y="262" textAnchor="middle" fill="#2f6fff" fontSize="10.5" fontWeight="600" fontFamily={FONT}>{c.t}</text>
        ))}
        <line x1="40" y1="282" x2="900" y2="282" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="6 6" />
        <text x="470" y="310" textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>Value = better decision, not just a pretty dashboard</text>
      </g>
    </svg>
  );
}

// ============================================================
// Diagram 3 — Structured / Semi-structured / Unstructured
// ============================================================
export function DataTypesDiagram() {
  const branches = [
    {
      x: 20,
      title: 'STRUCTURED',
      color: '#0047ff',
      tag: 'Rows × Columns · fixed schema',
      examples: ['SQL tables, Excel sheets, CSV', 'Marks, bank transactions, orders'],
      tools: 'SQL, Excel, Pandas',
      share: '~10–20% of enterprise data',
      key: 'Easy to search, join and aggregate',
    },
    {
      x: 330,
      title: 'SEMI-STRUCTURED',
      color: '#00d4ff',
      tag: 'Self-describing tags · flexible schema',
      examples: ['JSON, XML, YAML, HTML, logs', 'Email, API responses, sensor feeds'],
      tools: 'MongoDB, Spark, parsers',
      share: '~5–10% of enterprise data',
      key: 'Flexible, but needs parsing before analysis',
    },
    {
      x: 640,
      title: 'UNSTRUCTURED',
      color: '#ff8800',
      tag: 'No predefined model or schema',
      examples: ['Images, audio, video, PDF, chat', 'CCTV footage, doctor notes, tweets'],
      tools: 'NLP, computer vision, deep learning',
      share: '~80–90% of enterprise data',
      key: 'Highest value, hardest to process',
    },
  ];
  return (
    <svg viewBox="0 0 940 470" className="diagram-svg" role="img" aria-label="Tree of data types: structured, semi-structured and unstructured">
      {/* root */}
      <g className="diagram-pop">
        <rect x="370" y="14" width="200" height="54" rx="12" fill="rgba(196,255,0,0.08)" stroke="#c4ff00" strokeWidth="2" />
        <text x="470" y="40" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>DATA</text>
        <text x="470" y="58" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>how much structure?</text>
      </g>
      <line x1="470" y1="68" x2="470" y2="96" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
      <line x1="160" y1="96" x2="780" y2="96" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
      {branches.map((b, i) => (
        <g key={b.title} className="diagram-pop" style={{ animationDelay: `${180 + i * 150}ms` }}>
          <line x1={b.x + 140} y1="96" x2={b.x + 140} y2="120" stroke={b.color} strokeWidth="2" strokeOpacity="0.7" />
          <rect x={b.x} y="120" width="280" height="292" rx="14" fill="rgba(255,255,255,0.03)" stroke={b.color} strokeWidth="1.8" strokeOpacity="0.65" />
          <rect x={b.x} y="120" width="280" height="46" rx="14" fill={b.color} fillOpacity="0.12" />
          <text x={b.x + 140} y="149" textAnchor="middle" fill={b.color} fontSize="13.5" fontWeight="800" fontFamily={FONT}>{b.title}</text>
          <text x={b.x + 16} y="188" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>{b.tag}</text>
          <text x={b.x + 16} y="216" fill="#c4ff00" fontSize="9.5" fontWeight="700" fontFamily={FONT}>EXAMPLES</text>
          {b.examples.map((e, j) => (
            <text key={e} x={b.x + 16} y={234 + j * 17} fill="#fff" fontSize="10.5" fontFamily={FONT}>{e}</text>
          ))}
          <line x1={b.x + 16} y1="266" x2={b.x + 264} y2="266" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <text x={b.x + 16} y="288" fill="#c4ff00" fontSize="9.5" fontWeight="700" fontFamily={FONT}>TOOLS</text>
          <text x={b.x + 16} y="306" fill="#fff" fontSize="10.5" fontFamily={FONT}>{b.tools}</text>
          <text x={b.x + 16} y="330" fill="#c4ff00" fontSize="9.5" fontWeight="700" fontFamily={FONT}>SHARE OF DATA</text>
          <text x={b.x + 16} y="348" fill="#fff" fontSize="10.5" fontFamily={FONT}>{b.share}</text>
          <text x={b.x + 16} y="376" fill={b.color} fontSize="10" fontWeight="700" fontFamily={FONT}>KEY POINT</text>
          <text x={b.x + 16} y="394" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>{b.key}</text>
        </g>
      ))}
      <text x="470" y="442" textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>
        The less structure, the more storage + processing effort — but the more insight value
      </text>
      <text x="470" y="460" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Real systems bring all three types together (hybrid data)
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 4 — Scales of measurement
// ============================================================
export function MeasurementScalesDiagram() {
  const scales = [
    { name: 'NOMINAL', color: '#8f9dc4', h: 145, prop: 'Names / labels only', ex1: 'Gender, blood group,', ex2: 'city, jersey number', ops: 'Count · Mode' },
    { name: 'ORDINAL', color: '#0047ff', h: 190, prop: 'Order, unequal gaps', ex1: 'Grades A/B/C, rank,', ex2: 'satisfaction 1–5', ops: 'Mode · Median' },
    { name: 'INTERVAL', color: '#00d4ff', h: 235, prop: 'Order + equal gaps', ex1: 'Temperature °C, IQ,', ex2: 'year, time of day', ops: 'Mean, SD (no ratio)' },
    { name: 'RATIO', color: '#c4ff00', h: 280, prop: 'Order + gaps + true 0', ex1: 'Height, weight, income,', ex2: 'age, sales, Kelvin', ops: 'All operations' },
  ];
  const base = 340;
  return (
    <svg viewBox="0 0 940 420" className="diagram-svg" role="img" aria-label="Nominal, ordinal, interval and ratio scales as ascending steps">
      <defs>
        <marker id="arrowScale" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      <line x1="30" y1={base} x2="910" y2={base} stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
      {scales.map((s, i) => {
        const x = 40 + i * 220;
        const y = base - s.h;
        return (
          <g key={s.name} className="diagram-pop" style={{ animationDelay: `${150 + i * 150}ms` }}>
            <rect x={x} y={y} width="200" height={s.h} rx="12" fill={s.color} fillOpacity="0.10" stroke={s.color} strokeWidth="1.8" strokeOpacity="0.8" />
            <rect x={x} y={y} width="200" height="34" rx="12" fill={s.color} fillOpacity="0.22" />
            <text x={x + 100} y={y + 22} textAnchor="middle" fill={s.color} fontSize="13" fontWeight="800" fontFamily={FONT}>{s.name}</text>
            <text x={x + 100} y={y + 56} textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="600" fontFamily={FONT}>{s.prop}</text>
            <text x={x + 100} y={y + 82} textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>{s.ex1}</text>
            <text x={x + 100} y={y + 97} textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>{s.ex2}</text>
            <rect x={x + 14} y={y + s.h - 42} width="172" height="28" rx="8" fill="rgba(0,0,0,0.25)" stroke={s.color} strokeOpacity="0.35" />
            <text x={x + 100} y={y + s.h - 23} textAnchor="middle" fill={s.color} fontSize="9.5" fontWeight="700" fontFamily={FONT}>{s.ops}</text>
            {i > 0 && (
              <line x1={x - 20} y1={y + 50} x2={x - 2} y2={y + 50} stroke="#c4ff00" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#arrowScale)" />
            )}
          </g>
        );
      })}
      <text x="470" y="372" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        More structure → more mathematical operations allowed
      </text>
      <text x="470" y="394" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Order (rank)? · Equal intervals (distance)? · True zero (absence)? — check all three, then fix the scale
      </text>
      <text x="470" y="412" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        S. S. Stevens (1946) — four scales of measurement
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 5 — Same record in CSV / JSON / XML / SQL table
// ============================================================
export function DataFormatsDiagram() {
  const panels = [
    {
      x: 20, y: 60, color: '#0047ff', title: 'CSV',
      sub: 'plain text · comma separated',
      lines: ['roll,name,marks', '1,Riya,78', '2,Aman,82'],
      note: '1 record = 1 line',
    },
    {
      x: 480, y: 60, color: '#00d4ff', title: 'JSON',
      sub: 'keys + values · nested allowed',
      lines: ['{', '  "name": "Riya",', '  "marks": [78, 82]', '}'],
      note: '1 record = 1 object',
    },
    {
      x: 20, y: 268, color: '#c4ff00', title: 'XML',
      sub: 'tags · verbose but strict',
      lines: ['<student id="1">', '  <name>Riya</name>', '  <marks>78</marks>', '</student>'],
      note: '1 record = 1 tree',
    },
    {
      x: 480, y: 268, color: '#ff8800', title: 'SQL TABLE',
      sub: 'rows × columns · typed schema',
      lines: ['roll | name | marks', '  1  | Riya |  78', '  2  | Aman |  82'],
      note: '1 record = 1 row',
    },
  ];
  return (
    <svg viewBox="0 0 920 500" className="diagram-svg" role="img" aria-label="The same student record stored as CSV, JSON, XML and an SQL table">
      <text x="460" y="30" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Same record — four formats
      </text>
      <text x="460" y="48" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        roll = 1 · name = Riya · marks = 78
      </text>
      {panels.map((p, i) => (
        <g key={p.title} className="diagram-pop" style={{ animationDelay: `${120 + i * 130}ms` }}>
          <rect x={p.x} y={p.y} width="420" height="186" rx="14" fill="rgba(255,255,255,0.03)" stroke={p.color} strokeWidth="1.8" strokeOpacity="0.65" />
          <rect x={p.x} y={p.y} width="420" height="42" rx="14" fill={p.color} fillOpacity="0.14" />
          <text x={p.x + 16} y={p.y + 26} fill={p.color} fontSize="13" fontWeight="800" fontFamily={FONT}>{p.title}</text>
          <text x={p.x + 404} y={p.y + 26} textAnchor="end" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>{p.sub}</text>
          <rect x={p.x + 16} y={p.y + 56} width="388" height="88" rx="8" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.1)" />
          {p.lines.map((l, j) => (
            <text
              key={l}
              x={p.x + 28}
              y={p.y + 78 + j * 20}
              fill="#dbe6ff"
              fontSize="11"
              fontFamily="'Consolas', 'Menlo', monospace"
            >
              {l}
            </text>
          ))}
          <text x={p.x + 16} y={p.y + 166} fill={p.color} fontSize="10" fontWeight="700" fontFamily={FONT}>{p.note}</text>
        </g>
      ))}
    </svg>
  );
}

// ============================================================
// Diagram 6 — Big Data vs Data Science
// ============================================================
export function BigDataVsDataScienceDiagram() {
  const vs = [
    { y: 168, label: 'Volume', desc: 'terabytes → petabytes' },
    { y: 198, label: 'Velocity', desc: 'streams, real time' },
    { y: 228, label: 'Variety', desc: 'text, image, sensor' },
    { y: 258, label: 'Veracity', desc: 'noisy, incomplete' },
    { y: 288, label: 'Value', desc: 'insight nikalna' },
  ];
  return (
    <svg viewBox="0 0 920 430" className="diagram-svg" role="img" aria-label="Big data versus data science: infrastructure versus problem solving">
      <g className="diagram-pop">
        <rect x="20" y="60" width="300" height="240" rx="16" fill="rgba(0,71,255,0.08)" stroke="#0047ff" strokeWidth="2" />
        <text x="170" y="92" textAnchor="middle" fill="#2f6fff" fontSize="15" fontWeight="800" fontFamily={FONT}>BIG DATA</text>
        <text x="170" y="112" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>infrastructure + technology</text>
        {[
          'Hadoop · HDFS', 'Spark · Kafka', 'Hive · NoSQL', 'Cloud storage',
        ].map((t, i) => (
          <text key={t} x="170" y={146 + i * 26} textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily={FONT}>{t}</text>
        ))}
        <text x="170" y="278" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Question: how do we store</text>
        <text x="170" y="294" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>and process data this large?</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x="600" y="60" width="300" height="240" rx="16" fill="rgba(196,255,0,0.07)" stroke="#c4ff00" strokeWidth="2" />
        <text x="750" y="92" textAnchor="middle" fill="#c4ff00" fontSize="15" fontWeight="800" fontFamily={FONT}>DATA SCIENCE</text>
        <text x="750" y="112" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>methods + models + decisions</text>
        {[
          'Statistics · Python/R', 'Machine learning', 'Domain knowledge', 'Visualization',
        ].map((t, i) => (
          <text key={t} x="750" y={146 + i * 26} textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily={FONT}>{t}</text>
        ))}
        <text x="750" y="278" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Question: from data to decision</text>
        <text x="750" y="294" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>and extract insight from it?</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <circle cx="460" cy="92" r="26" fill="#0a0e1a" stroke="#c4ff00" strokeWidth="2" />
        <text x="460" y="98" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>VS</text>
        <text x="460" y="138" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>The 5 V&apos;s of big data</text>
        {vs.map((v) => (
          <g key={v.label}>
            <text x="460" y={v.y} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily={FONT}>{v.label}</text>
            <text x="460" y={v.y + 13} textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{v.desc}</text>
          </g>
        ))}
      </g>

      <text x="460" y="340" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        Big Data = fuel (data + infrastructure) · Data Science = engine (insight + action)
      </text>
      <text x="460" y="362" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Without big data, data science still runs at a small scale; but data with the 5 V&apos;s
      </text>
      <text x="460" y="380" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        needs big data tools to handle it
      </text>
      <text x="460" y="410" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: write the difference first, then one example (10 TB clickstream → churn model)
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 7 — Data Science life cycle (8 stages, circular)
// ============================================================
export function DSLifecycleDiagram() {
  const stages = [
    { n: 1, label: 'Problem', sub: 'define', angle: -90 },
    { n: 2, label: 'Data', sub: 'collect', angle: -45 },
    { n: 3, label: 'Cleaning', sub: 'prepare', angle: 0 },
    { n: 4, label: 'EDA', sub: 'explore', angle: 45 },
    { n: 5, label: 'Modelling', sub: 'train', angle: 90 },
    { n: 6, label: 'Evaluation', sub: 'validate', angle: 135 },
    { n: 7, label: 'Deployment', sub: 'serve', angle: 180 },
    { n: 8, label: 'Monitoring', sub: 'maintain', angle: 225 },
  ];
  const cx = 460;
  const cy = 262;
  const r = 178;
  const pos = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };
  return (
    <svg viewBox="0 0 920 540" className="diagram-svg" role="img" aria-label="Eight stages of the data science life cycle arranged in a circle">
      <defs>
        <marker id="dsLoop" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="7 7" />
      {stages.map((s, i) => {
        const a = pos(s.angle);
        const b = pos(stages[(i + 1) % stages.length].angle);
        return (
          <path
            key={`arc${s.n}`}
            d={`M ${a.x} ${a.y} A ${r} ${r} 0 0 1 ${b.x} ${b.y}`}
            fill="none"
            stroke="#c4ff00"
            strokeWidth="1.8"
            strokeOpacity="0.45"
            markerEnd="url(#dsLoop)"
          />
        );
      })}
      <g className="diagram-pop">
        <circle cx={cx} cy={cy} r="98" fill="rgba(0,71,255,0.12)" stroke="#0047ff" strokeWidth="2.2" />
        <text x={cx} y={cy - 18} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily={FONT}>DATA SCIENCE</text>
        <text x={cx} y={cy + 2} textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="700" fontFamily={FONT}>LIFE CYCLE</text>
        <text x={cx} y={cy + 24} textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>8 stages</text>
        <text x={cx} y={cy + 42} textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>iterative, not linear</text>
      </g>
      {stages.map((s, i) => {
        const p = pos(s.angle);
        return (
          <g key={s.n} className="diagram-pop" style={{ animationDelay: `${100 + i * 90}ms` }}>
            <rect x={p.x - 76} y={p.y - 24} width="152" height="48" rx="10" fill="#0a0e1a" stroke="#2f6fff" strokeWidth="1.6" />
            <text x={p.x - 64} y={p.y - 2} fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>{s.n}.</text>
            <text x={p.x - 46} y={p.y - 2} fill="#fff" fontSize="11.5" fontWeight="700" fontFamily={FONT}>{s.label}</text>
            <text x={p.x - 46} y={p.y + 14} fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>{s.sub}</text>
          </g>
        );
      })}
      <text x={cx} y="500" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Monitoring yields insight → the problem is redefined (feedback loop)
      </text>
      <text x={cx} y="522" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        In a real project 70–80% of the time goes into stages 2–3 (data collection + cleaning)
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 8 — CRISP-DM six phases
// ============================================================
export function CrispDmDiagram() {
  const phases = [
    { n: 1, label: 'Business', sub: 'Understanding', angle: -90, color: '#c4ff00' },
    { n: 2, label: 'Data', sub: 'Understanding', angle: -30, color: '#2f6fff' },
    { n: 3, label: 'Data', sub: 'Preparation', angle: 30, color: '#2f6fff' },
    { n: 4, label: 'Modelling', sub: 'build + tune', angle: 90, color: '#00d4ff' },
    { n: 5, label: 'Evaluation', sub: 'business fit', angle: 150, color: '#ff8800' },
    { n: 6, label: 'Deployment', sub: 'go live', angle: 210, color: '#00ff88' },
  ];
  const cx = 460;
  const cy = 262;
  const r = 180;
  const pos = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };
  return (
    <svg viewBox="0 0 920 540" className="diagram-svg" role="img" aria-label="CRISP-DM six phases arranged in a cycle">
      <defs>
        <marker id="crispArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 8" />
      {phases.map((p, i) => {
        const a = pos(p.angle);
        const b = pos(phases[(i + 1) % phases.length].angle);
        return (
          <path
            key={`arc${p.n}`}
            d={`M ${a.x} ${a.y} A ${r} ${r} 0 0 1 ${b.x} ${b.y}`}
            fill="none"
            stroke="#c4ff00"
            strokeWidth="1.8"
            strokeOpacity="0.45"
            markerEnd="url(#crispArrow)"
          />
        );
      })}
      <g className="diagram-pop">
        <circle cx={cx} cy={cy} r="100" fill="rgba(196,255,0,0.06)" stroke="#c4ff00" strokeWidth="2.4" />
        <text x={cx} y={cy - 16} textAnchor="middle" fill="#c4ff00" fontSize="17" fontWeight="800" fontFamily={FONT}>CRISP-DM</text>
        <text x={cx} y={cy + 6} textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>Cross Industry Standard</text>
        <text x={cx} y={cy + 22} textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>Process for Data Mining</text>
        <text x={cx} y={cy + 44} textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>6 phases · iterative</text>
      </g>
      {phases.map((p, i) => {
        const a = pos(p.angle);
        return (
          <g key={p.n} className="diagram-pop" style={{ animationDelay: `${100 + i * 110}ms` }}>
            <rect x={a.x - 80} y={a.y - 26} width="160" height="52" rx="10" fill="#0a0e1a" stroke={p.color} strokeWidth="1.7" />
            <text x={a.x - 68} y={a.y - 4} fill={p.color} fontSize="10" fontWeight="800" fontFamily={FONT}>{p.n}.</text>
            <text x={a.x - 50} y={a.y - 4} fill="#fff" fontSize="11.5" fontWeight="700" fontFamily={FONT}>{p.label}</text>
            <text x={a.x - 50} y={a.y + 13} fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>{p.sub}</text>
          </g>
        );
      })}
      <text x={cx} y="498" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        After evaluation you may return to phase 1 or 4 — that is why CRISP-DM is cyclic
      </text>
      <text x={cx} y="520" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        SEMMA (SAS) = Sample → Explore → Modify → Model → Assess · TDSP (Microsoft) = 5 stages + team roles
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 9 — Applications across domains
// ============================================================
export function DSApplicationsDiagram() {
  const apps = [
    { name: 'Healthcare', a: 'disease prediction', b: 'medical imaging', c: 'early diagnosis', color: '#00d4ff' },
    { name: 'Finance', a: 'fraud detection', b: 'credit scoring', c: 'loss prevention', color: '#c4ff00' },
    { name: 'Retail', a: 'recommendation', b: 'demand forecast', c: 'conversion up', color: '#2f6fff' },
    { name: 'Manufacturing', a: 'predictive maint.', b: 'quality inspection', c: 'downtime down', color: '#ff8800' },
    { name: 'Transport', a: 'route + traffic', b: 'ride matching', c: 'ETA accuracy', color: '#00ff88' },
    { name: 'Agriculture', a: 'yield forecast', b: 'soil + satellite', c: 'yield up', color: '#c4ff00' },
    { name: 'Education', a: 'dropout risk', b: 'adaptive learning', c: 'retention', color: '#00d4ff' },
    { name: 'Government', a: 'policy analytics', b: 'disaster mapping', c: 'better targeting', color: '#2f6fff' },
    { name: 'Media', a: 'content ranking', b: 'churn prediction', c: 'watch time', color: '#ff8800' },
    { name: 'Sports', a: 'player analytics', b: 'injury risk', c: 'injury prevention', color: '#00ff88' },
  ];
  return (
    <svg viewBox="0 0 920 470" className="diagram-svg" role="img" aria-label="Ten domains where data science is applied">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Data Science applications — domain wise
      </text>
      {apps.map((app, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const x = 20 + col * 178;
        const y = 48 + row * 190;
        return (
          <g key={app.name} className="diagram-pop" style={{ animationDelay: `${80 + i * 60}ms` }}>
            <rect x={x} y={y} width="164" height="168" rx="12" fill="rgba(255,255,255,0.03)" stroke={app.color} strokeWidth="1.5" strokeOpacity="0.6" />
            <rect x={x} y={y} width="164" height="34" rx="12" fill={app.color} fillOpacity="0.14" />
            <text x={x + 82} y={y + 22} textAnchor="middle" fill={app.color} fontSize="11.5" fontWeight="800" fontFamily={FONT}>{app.name}</text>
            <circle cx={x + 24} cy={y + 62} r="3" fill={app.color} />
            <text x={x + 34} y={y + 66} fill="#fff" fontSize="10" fontFamily={FONT}>{app.a}</text>
            <circle cx={x + 24} cy={y + 92} r="3" fill={app.color} />
            <text x={x + 34} y={y + 96} fill="#fff" fontSize="10" fontFamily={FONT}>{app.b}</text>
            <line x1={x + 16} y1={y + 118} x2={x + 148} y2={y + 118} stroke="rgba(255,255,255,0.1)" />
            <text x={x + 82} y={y + 140} textAnchor="middle" fill="#c4ff00" fontSize="9.5" fontWeight="700" fontFamily={FONT}>{app.c}</text>
            <text x={x + 82} y={y + 156} textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>data → model → action</text>
          </g>
        );
      })}
      <text x="460" y="452" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Every domain follows the same pattern: problem → data → model → decision → measurable value
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 10 — Data Science vs Statistics vs BI vs ML vs AI
// ============================================================
export function DSvsFieldsDiagram() {
  const fields = [
    { name: 'STATISTICS', q: 'Is the data reliable?', out: 'inference · p-value', tech: 'sampling, tests', color: '#8f9dc4' },
    { name: 'BI', q: 'What happened?', out: 'dashboard · KPI', tech: 'SQL, OLAP', color: '#2f6fff' },
    { name: 'ML', q: 'Learn the pattern', out: 'trained model', tech: 'supervised, clustering', color: '#00d4ff' },
    { name: 'AI', q: 'Make the machine smart', out: 'autonomous system', tech: 'NLP, CV, agents', color: '#ff8800' },
    { name: 'DATA SCIENCE', q: 'What will happen + what to do?', out: 'insight → decision', tech: 'stats + ML + domain', color: '#c4ff00' },
  ];
  return (
    <svg viewBox="0 0 920 360" className="diagram-svg" role="img" aria-label="Data science compared with statistics, business intelligence, machine learning and artificial intelligence">
      {fields.map((f, i) => {
        const x = 20 + i * 178;
        const isDs = f.name === 'DATA SCIENCE';
        return (
          <g key={f.name} className="diagram-pop" style={{ animationDelay: `${80 + i * 80}ms` }}>
            <rect x={x} y={isDs ? 40 : 56} width="164" height={isDs ? 246 : 214} rx="12" fill={isDs ? 'rgba(196,255,0,0.07)' : 'rgba(255,255,255,0.03)'} stroke={f.color} strokeWidth={isDs ? 2.2 : 1.5} strokeOpacity="0.8" />
            <rect x={x} y={isDs ? 40 : 56} width="164" height="38" rx="12" fill={f.color} fillOpacity="0.16" />
            <text x={x + 82} y={isDs ? 64 : 80} textAnchor="middle" fill={f.color} fontSize="11" fontWeight="800" fontFamily={FONT}>{f.name}</text>
            <text x={x + 14} y={isDs ? 102 : 118} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>QUESTION</text>
            <text x={x + 14} y={isDs ? 120 : 136} fill="#fff" fontSize="10" fontFamily={FONT}>{f.q}</text>
            <text x={x + 14} y={isDs ? 148 : 164} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>OUTPUT</text>
            <text x={x + 14} y={isDs ? 166 : 182} fill="#fff" fontSize="10" fontFamily={FONT}>{f.out}</text>
            <text x={x + 14} y={isDs ? 194 : 210} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>TOOLS</text>
            <text x={x + 14} y={isDs ? 212 : 228} fill="#fff" fontSize="10" fontFamily={FONT}>{f.tech}</text>
            {isDs && (
              <text x={x + 14} y={268} fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>
                = all three + domain
              </text>
            )}
          </g>
        );
      })}
      <text x="460" y="322" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        AI ⊃ ML ⊃ deep learning · Data Science is an applied field using statistics + ML + domain
      </text>
      <text x="460" y="344" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: write one line on the "overlap" before the definition, then the table of differences
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 11 — AI ⊃ ML ⊃ DL and how a model learns
// ============================================================
export function MLAIStackDiagram() {
  const steps = [
    { n: '1', t: 'Data collect', d: 'history · sensors · logs' },
    { n: '2', t: 'Clean + features', d: 'missing values, encoding' },
    { n: '3', t: 'Train / test split', d: '80% to learn, 20% to test' },
    { n: '4', t: 'Train the algorithm', d: 'the model weights are adjusted' },
    { n: '5', t: 'Evaluate', d: 'accuracy, precision, recall' },
    { n: '6', t: 'Deploy + monitor', d: 'new data → retrain the model' },
  ];
  return (
    <svg viewBox="0 0 920 480" className="diagram-svg" role="img" aria-label="Artificial intelligence contains machine learning which contains deep learning, next to the six steps of training a model">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        AI ⊃ Machine Learning ⊃ Deep Learning
      </text>
      <text x="460" y="44" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        every Deep Learning is ML · every ML is an AI approach · but not every AI is ML
      </text>

      <g className="diagram-pop">
        <rect x="20" y="62" width="450" height="348" rx="16" fill="rgba(255,136,0,0.06)" stroke="#ff8800" strokeWidth="2" />
        <text x="40" y="90" fill="#ff8800" fontSize="14" fontWeight="800" fontFamily={FONT}>ARTIFICIAL INTELLIGENCE</text>
        <text x="40" y="108" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>give the machine human-like intelligence</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '140ms' }}>
        <rect x="52" y="126" width="386" height="232" rx="14" fill="rgba(0,212,255,0.07)" stroke="#00d4ff" strokeWidth="1.8" />
        <text x="70" y="152" fill="#00d4ff" fontSize="12.5" fontWeight="800" fontFamily={FONT}>MACHINE LEARNING</text>
        <text x="70" y="170" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>learn patterns from data without explicit rules</text>

        <rect x="84" y="188" width="322" height="132" rx="12" fill="rgba(196,255,0,0.07)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="102" y="212" fill="#c4ff00" fontSize="11.5" fontWeight="800" fontFamily={FONT}>DEEP LEARNING</text>
        <text x="102" y="232" fill="#fff" fontSize="10" fontFamily={FONT}>neural networks, 3+ hidden layers</text>
        <text x="102" y="252" fill="#fff" fontSize="10" fontFamily={FONT}>images · speech · language · video</text>
        <text x="102" y="274" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>needs lots of data + GPU</text>
        <text x="102" y="296" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>CNN, RNN, transformers</text>

        <text x="70" y="330" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>ML examples</text>
        <text x="70" y="346" fill="#fff" fontSize="10" fontFamily={FONT}>spam filter · churn · price · clustering</text>
      </g>

      <text x="40" y="376" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>AI examples</text>
      <text x="40" y="394" fill="#fff" fontSize="10" fontFamily={FONT}>self-driving · chatbot · game playing · robotics</text>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <text x="706" y="86" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>
          How an ML model learns
        </text>
        {steps.map((s, i) => {
          const y = 100 + i * 52;
          return (
            <g key={s.n}>
              <rect x="520" y={y} width="372" height="44" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.35)" strokeWidth="1.2" />
              <circle cx="546" cy={y + 22} r="13" fill="rgba(196,255,0,0.14)" stroke="#c4ff00" strokeWidth="1.4" />
              <text x="546" y={y + 26} textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="800" fontFamily={FONT}>{s.n}</text>
              <text x="570" y={y + 19} fill="#fff" fontSize="11" fontWeight="700" fontFamily={FONT}>{s.t}</text>
              <text x="570" y={y + 34} fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>{s.d}</text>
              {i < steps.length - 1 && (
                <line x1="706" y1={y + 44} x2="706" y2={y + 52} stroke="#00d4ff" strokeWidth="1.4" strokeOpacity="0.6" />
              )}
            </g>
          );
        })}
        <text x="706" y="414" textAnchor="middle" fill="#c4ff00" fontSize="9.5" fontFamily={FONT}>
          evaluate → deploy → monitor · with new data go back to step 1 (loop)
        </text>
      </g>

      <text x="460" y="438" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Training = data + algorithm + feedback · learning means the model's weights change to fit the data
      </text>
      <text x="460" y="462" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: draw the nested circle diagram (AI &gt; ML &gt; DL), then write the 6 steps
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 12 — Four roles in a data science team
// ============================================================
export function DSRolesDiagram() {
  const roles = [
    {
      name: 'DATA ENGINEER', color: '#2f6fff', tag: 'brings the data',
      work: ['source → warehouse', 'pipelines + ETL'],
      skills: ['SQL · Python', 'Spark · Airflow'],
      output: 'clean, reliable data',
    },
    {
      name: 'DATA ANALYST', color: '#00d4ff', tag: 'reports what happened',
      work: ['dashboards + reports', 'trend + KPI analysis'],
      skills: ['SQL · Excel', 'Power BI · Tableau'],
      output: 'insight + dashboard',
    },
    {
      name: 'DATA SCIENTIST', color: '#c4ff00', tag: 'predicts what will happen',
      work: ['experiment + model', 'statistics + ML'],
      skills: ['Python/R · stats', 'scikit-learn · SQL'],
      output: 'model + recommendation',
    },
    {
      name: 'ML ENGINEER', color: '#ff8800', tag: 'runs the model in production',
      work: ['deploy + serve model', 'monitor + retrain'],
      skills: ['Python · Docker', 'MLOps · cloud'],
      output: 'live prediction API',
    },
  ];
  return (
    <svg viewBox="0 0 920 480" className="diagram-svg" role="img" aria-label="Data engineer, data analyst, data scientist and machine learning engineer roles with their work, skills and output">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        The four roles in a data science team
      </text>
      <text x="460" y="44" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        data → insight → model → production · one project uses all four
      </text>
      {roles.map((r, i) => {
        const x = 20 + i * 226;
        return (
          <g key={r.name} className="diagram-pop" style={{ animationDelay: `${80 + i * 120}ms` }}>
            <rect x={x} y="62" width="200" height="306" rx="12" fill="rgba(255,255,255,0.03)" stroke={r.color} strokeWidth="1.6" strokeOpacity="0.75" />
            <rect x={x} y="62" width="200" height="52" rx="12" fill={r.color} fillOpacity="0.15" />
            <text x={x + 100} y="84" textAnchor="middle" fill={r.color} fontSize="11" fontWeight="800" fontFamily={FONT}>{r.name}</text>
            <text x={x + 100} y="101" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{r.tag}</text>

            <text x={x + 14} y="136" fill="#9ab0e0" fontSize="8.5" fontWeight="700" fontFamily={FONT}>ROLE</text>
            {r.work.map((w, j) => (
              <text key={w} x={x + 14} y={154 + j * 17} fill="#fff" fontSize="10" fontFamily={FONT}>{w}</text>
            ))}

            <text x={x + 14} y="198" fill="#9ab0e0" fontSize="8.5" fontWeight="700" fontFamily={FONT}>SKILLS</text>
            {r.skills.map((w, j) => (
              <text key={w} x={x + 14} y={216 + j * 17} fill="#fff" fontSize="10" fontFamily={FONT}>{w}</text>
            ))}

            <line x1={x + 14} y1="252" x2={x + 186} y2="252" stroke="rgba(255,255,255,0.1)" />
            <text x={x + 14} y="272" fill="#9ab0e0" fontSize="8.5" fontWeight="700" fontFamily={FONT}>OUTPUT</text>
            <text x={x + 14} y="291" fill={r.color} fontSize="10" fontWeight="700" fontFamily={FONT}>{r.output}</text>

            <line x1={x + 14} y1="310" x2={x + 186} y2="310" stroke="rgba(255,255,255,0.1)" />
            <text x={x + 14} y="330" fill="#9ab0e0" fontSize="8.5" fontWeight="700" fontFamily={FONT}>QUESTION</text>
            <text x={x + 14} y="349" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>{['where from?', 'what happened?', 'what will happen?', 'how is it running?'][i]}</text>
          </g>
        );
      })}
      {[1, 2, 3].map((i) => (
        <text key={i} x={20 + i * 226 - 13} y="222" textAnchor="middle" fill="#9ab0e0" fontSize="15" fontFamily={FONT}>
          →
        </text>
      ))}
      <text x="460" y="398" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Small team: one data scientist does all four · Large team: roles are specialised
      </text>
      <text x="460" y="420" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Data Engineer builds · Data Analyst understands · Data Scientist builds the model · ML Engineer runs it
      </text>
      <text x="460" y="442" textAnchor="middle" fill="#5a6a9e" fontSize="9.5" fontFamily={FONT}>
        In the exam a table + one project example (churn) is the best answer
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 13 — Statistics as the foundation of data science
// ============================================================
export function StatisticsFoundationDiagram() {
  // bottom layer first, so the pyramid is drawn widest → narrowest going up
  const layers = [
    { label: 'DATA + DOMAIN KNOWLEDGE', sub: 'rows, columns, business meaning', color: '#8f9dc4' },
    { label: 'DESCRIPTIVE STATISTICS', sub: 'mean · median · σ · IQR', color: '#2f6fff' },
    { label: 'PROBABILITY & SAMPLING', sub: 'distribution · CLT · Bayes', color: '#00d4ff' },
    { label: 'INFERENCE & TESTING', sub: 'p-value · confidence interval', color: '#c4ff00' },
    { label: 'PREDICTION / ML', sub: 'regression · classifiers', color: '#ff8800' },
  ];
  const widths = [400, 340, 280, 220, 160];
  const use = [
    { stage: 'Cleaning', what: 'detect outliers and missing values (IQR, z-score)' },
    { stage: 'EDA', what: 'examine distribution, spread and correlation' },
    { stage: 'Modelling', what: 'regression, assumptions, meaning of error' },
    { stage: 'Evaluation', what: 'p-value, confidence interval, A/B test' },
  ];
  return (
    <svg viewBox="0 0 920 480" className="diagram-svg" role="img" aria-label="Statistics as the five layer foundation under data science, with the stages where each part is used">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Mathematical statistics — the foundation of data science
      </text>
      <text x="460" y="44" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        statistics tells us whether a result is trustworthy or just chance
      </text>

      {layers.map((l, i) => {
        const wb = widths[i];
        const wt = i === widths.length - 1 ? 124 : widths[i + 1];
        const yb = 400 - i * 56;
        const yt = yb - 56;
        const cx = 230;
        return (
          <g key={l.label} className="diagram-pop" style={{ animationDelay: `${80 + i * 90}ms` }}>
            <polygon
              points={`${cx - wb / 2},${yb} ${cx + wb / 2},${yb} ${cx + wt / 2},${yt} ${cx - wt / 2},${yt}`}
              fill={l.color}
              fillOpacity="0.13"
              stroke={l.color}
              strokeWidth="1.6"
              strokeOpacity="0.8"
            />
            <text x={cx} y={yt + 26} textAnchor="middle" fill={l.color} fontSize="10.5" fontWeight="800" fontFamily={FONT}>{l.label}</text>
            <text x={cx} y={yt + 42} textAnchor="middle" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>{l.sub}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <text x="690" y="86" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>
          Where statistics helps
        </text>
        {use.map((u, i) => {
          const y = 104 + i * 74;
          return (
            <g key={u.stage}>
              <rect x="480" y={y} width="400" height="60" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.3)" strokeWidth="1.2" />
              <rect x="480" y={y} width="4" height="60" rx="2" fill="#00d4ff" />
              <text x="498" y={y + 24} fill="#fff" fontSize="11" fontWeight="700" fontFamily={FONT}>{u.stage}</text>
              <text x="498" y={y + 44} fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>{u.what}</text>
            </g>
          );
        })}
      </g>

      <text x="460" y="440" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontFamily={FONT}>
        mean μ = Σx / n · standard deviation σ = √(Σ(x − μ)² / n) · z = (x − μ) / σ · p &lt; 0.05 = significant
      </text>
      <text x="460" y="462" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        ML gives a prediction, statistics tells us how much to trust it
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 14 — Data pre-processing overview (pipeline)
// ============================================================
export function PreprocessingOverviewDiagram() {
  const steps = [
    { label: 'RAW DATA', sub: 'databases · files · web', color: '#6fb2ff' },
    { label: 'DATA CLEANING', sub: 'missing · noise · outliers', color: '#00d4ff' },
    { label: 'INTEGRATION', sub: 'multiple sources → one', color: '#c4ff00' },
    { label: 'TRANSFORMATION', sub: 'scale · encode · derive', color: '#ff8800' },
    { label: 'REDUCTION', sub: 'fewer rows · fewer columns', color: '#ff7ab2' },
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Data pre-processing pipeline: raw data through cleaning, integration, transformation and reduction to quality data for mining">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Data Pre-processing — from raw data to quality data
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        Garbage In, Garbage Out — the model is only as good as the data
      </text>

      {steps.map((s, i) => (
        <g key={s.label} className="diagram-pop" style={{ animationDelay: `${80 + i * 110}ms` }}>
          <rect x={20 + i * 152} y="70" width="136" height="72" rx="9" fill="rgba(255,255,255,0.04)" stroke={s.color} strokeWidth="1.6" strokeOpacity="0.7" />
          <text x={88 + i * 152} y="94" textAnchor="middle" fill={s.color} fontSize="9.5" fontWeight="800" fontFamily={FONT}>{s.label}</text>
          <text x={88 + i * 152} y="112" textAnchor="middle" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>{s.sub.split(' · ')[0]}</text>
          <text x={88 + i * 152} y="127" textAnchor="middle" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>{s.sub.split(' · ')[1] || ''}</text>
          {i < 4 && <text x={160 + i * 152} y="110" textAnchor="middle" fill="#5a6a9e" fontSize="14" fontFamily={FONT}>→</text>}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="20" y="162" width="760" height="34" rx="8" fill="rgba(196,255,0,0.08)" stroke="rgba(196,255,0,0.45)" />
        <text x="400" y="184" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
          OUTPUT: consistent, complete, model-ready dataset → data mining / ML / analysis
        </text>
      </g>

      {[
        ['1. FORMAT & SOURCE', 'CSV, Excel, SQL, API, web scrape, logs, sensors, images', '#6fb2ff'],
        ['2. QUALITY PROBLEMS', 'missing values, noise, outliers, duplicates, wrong types', '#00d4ff'],
        ['3. FOUR TECHNIQUES', 'cleaning · integration & transformation · reduction', '#c4ff00'],
        ['4. RESULT', 'less time in modelling, better accuracy, fewer surprises', '#00ff88'],
      ].map(([t, d, c], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${660 + i * 90}ms` }}>
          <rect x="20" y={212 + i * 46} width="380" height="38" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
          <text x="34" y={228 + i * 46} fill={c} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x="34" y={242 + i * 46} fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>{d}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '1010ms' }}>
        <rect x="420" y="212" width="360" height="172" rx="9" fill="rgba(47,111,255,0.07)" stroke="rgba(47,111,255,0.4)" />
        <text x="436" y="232" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>HOW MUCH TIME PRE-PROCESSING TAKES</text>
        {[
          ['Data collection', 10, '#6fb2ff'],
          ['Data pre-processing', 60, '#c4ff00'],
          ['Modelling', 15, '#00d4ff'],
          ['Evaluation + tuning', 15, '#ff8800'],
        ].map(([t, w, c], i) => (
          <g key={t}>
            <text x="436" y={254 + i * 24} fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>{t}</text>
            <rect x="580" y={246 + i * 24} width={w * 2.8} height="10" rx="3" fill={c} fillOpacity="0.75" />
            <text x="772" y={254 + i * 24} textAnchor="end" fill={c} fontSize="8.2" fontFamily={FONT}>{w}%</text>
          </g>
        ))}
        <text x="436" y="366" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>Industry reports: 60–80% of an analyst's time goes into preparing data</text>
      </g>

      <text x="400" y="418" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        Only after pre-processing is the model's result dependable
      </text>
      <text x="400" y="442" textAnchor="middle" fill="#5a6a9e" fontSize="9.6" fontFamily={FONT}>
        Forms: data cleaning (fix values) · integration (join sources) · transformation (change shape) · reduction (cut size)
      </text>
      <text x="400" y="466" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        Clean data = complete + consistent + correct + relevant + timely
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 15 — Need of data pre-processing (dirty data)
// ============================================================
export function PreprocessingNeedDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Why data pre-processing is needed: real world data is incomplete, noisy, inconsistent and duplicated, and dirty data leads to wrong models and wrong decisions">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Why is data pre-processing needed?
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        Real world data is never ready to use
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="370" height="150" rx="9" fill="rgba(255,122,144,0.06)" stroke="rgba(255,122,144,0.45)" />
        <text x="34" y="84" fill="#ff7a90" fontSize="10" fontWeight="800" fontFamily={FONT}>RAW TABLE (as collected)</text>
        <line x1="34" y1="92" x2="376" y2="92" stroke="rgba(255,255,255,0.15)" />
        {[
          ['id', 'name', 'age', 'city', 'salary'],
          ['1', 'Riya', '24', 'Pune', '45000'],
          ['2', 'riya ', '?', 'pune', '45,000'],
          ['3', 'Amit', '999', 'NULL', ''],
          ['3', 'Amit', '30', 'Mumbai', '52000'],
        ].map((row, i) => (
          <g key={i}>
            {row.map((cell, j) => (
              <text key={j} x={38 + j * 68} y={108 + i * 20} fill={i === 0 ? '#9ab0e0' : (cell === '?' || cell === '999' || cell === 'NULL' || cell === '') ? '#ff7a90' : '#dbe6ff'} fontSize="8.8" fontFamily="'Consolas', monospace">{cell}</text>
            ))}
          </g>
        ))}
        <text x="34" y="206" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>missing · outlier · inconsistent · duplicate — all in one table</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="410" y="64" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <text x="424" y="84" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>4 QUALITY DIMENSIONS FAIL</text>
        {[
          ['Incomplete', 'attributes missing, empty cells', '#ff7a90'],
          ['Noisy', 'typo, random error, wrong reading', '#ff8800'],
          ['Inconsistent', 'Pune vs pune, 45,000 vs 45000', '#ffd166'],
          ['Redundant', 'same record twice, extra columns', '#00d4ff'],
        ].map(([t, d, c], i) => (
          <g key={t}>
            <text x="424" y={106 + i * 26} fill={c} fontSize="9.2" fontWeight="700" fontFamily={FONT}>✗ {t}</text>
            <text x="526" y={106 + i * 26} fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>{d}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="20" y="232" width="760" height="96" rx="9" fill="rgba(47,111,255,0.07)" stroke="rgba(47,111,255,0.4)" />
        <text x="400" y="254" textAnchor="middle" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>THE EFFECT OF DIRTY DATA — A CHAIN REACTION</text>
        {[
          ['Wrong input', 'age 999, salary blank'],
          ['Wrong training', 'the model learns the wrong pattern'],
          ['Wrong output', 'the forecast or score is wrong'],
          ['Wrong decision', 'loan reject, stock extra'],
        ].map(([t, d], i) => (
          <g key={t}>
            <rect x={30 + i * 190} y="266" width="172" height="50" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
            <text x={116 + i * 190} y="284" textAnchor="middle" fill="#fff" fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={116 + i * 190} y="302" textAnchor="middle" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>{d}</text>
            {i < 3 && <text x={212 + i * 190} y="296" textAnchor="middle" fill="#5a6a9e" fontSize="13" fontFamily={FONT}>→</text>}
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="346" width="370" height="104" rx="9" fill="rgba(255,122,144,0.05)" stroke="rgba(255,122,144,0.35)" />
        <text x="34" y="366" fill="#ff7a90" fontSize="9.6" fontWeight="800" fontFamily={FONT}>IF WE DO NOT PRE-PROCESS</text>
        <text x="34" y="386" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• model accuracy falls, error rises</text>
        <text x="34" y="404" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• algorithm crash or NaN / type error</text>
        <text x="34" y="422" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• duplicate rows bias the result</text>
        <text x="34" y="440" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• 80% of project time goes into debugging</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x="410" y="346" width="370" height="104" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="424" y="366" fill="#00ff88" fontSize="9.6" fontWeight="800" fontFamily={FONT}>BENEFITS OF PRE-PROCESSING</text>
        <text x="424" y="386" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• better accuracy and a stable model</text>
        <text x="424" y="404" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• faster training (fewer rows/columns)</text>
        <text x="424" y="422" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• algorithms can be compared on the same format</text>
        <text x="424" y="440" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• a reproducible and explainable pipeline</text>
      </g>

      <text x="400" y="480" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        “A good data set beats a good model”
      </text>
      <text x="400" y="504" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Exam line: pre-processing makes data complete, consistent, noise-free and model-ready
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 16 — Data cleaning techniques
// ============================================================
export function DataCleaningDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Data cleaning: handling missing values, noisy data, outliers and duplicates with techniques such as mean imputation, binning, IQR and deduplication">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Data Cleaning — repairing dirty values
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        missing values · noise · outliers · duplicates · inconsistency
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="370" height="168" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.45)" />
        <text x="34" y="84" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>1 · MISSING VALUES</text>
        <text x="34" y="104" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Row drop — when very few values are missing</text>
        <text x="34" y="122" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Replace with mean / median / mode</text>
        <text x="34" y="140" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• A constant or “Unknown” category</text>
        <text x="34" y="158" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Predict it with a model (KNN / regression)</text>
        <text x="34" y="176" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Forward / backward fill (time series)</text>
        <text x="34" y="200" fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>the median is better when there are outliers</text>
        <text x="34" y="218" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>rule of thumb: &lt;5% missing → impute, &gt;40% → drop the column</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="410" y="64" width="370" height="168" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.45)" />
        <text x="424" y="84" fill="#00d4ff" fontSize="10" fontWeight="800" fontFamily={FONT}>2 · NOISY DATA (random error)</text>
        <text x="424" y="104" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Binning — smooth values by placing them in bins</text>
        <text x="424" y="122" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Regression — replace with the fitted line value</text>
        <text x="424" y="140" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Clustering — detect outliers as a separate cluster</text>
        <text x="424" y="158" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Smoothing — moving average, median filter</text>
        <text x="424" y="176" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Typo fix — “Pune” vs “pune”, spelling dictionary</text>
        <text x="424" y="200" fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>price 32, 35, 34, 999 → 999 is noise</text>
        <text x="424" y="218" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>smoothing reveals the pattern and reduces random error</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="20" y="248" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="268" fill="#ff8800" fontSize="10" fontWeight="800" fontFamily={FONT}>3 · OUTLIERS</text>
        <text x="34" y="288" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• IQR rule: outside Q1 − 1.5·IQR to Q3 + 1.5·IQR</text>
        <text x="34" y="306" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Z-score: |z| &gt; 3 (3 SD away from the mean)</text>
        <text x="34" y="324" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Detect visually with a box plot / scatter</text>
        <text x="34" y="342" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Handle: remove, cap (winsorise), transform, separate model</text>
        <text x="34" y="366" fill="#ff7a90" fontSize="8.4" fontFamily={FONT}>Not every outlier is an error — fraud genuinely looks like one</text>
        <text x="34" y="386" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>IQR = Q3 − Q1 · z = (x − μ) / σ</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="410" y="248" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.45)" />
        <text x="424" y="268" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>4 · DUPLICATES + INCONSISTENCY</text>
        <text x="424" y="288" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Drop exact duplicate rows (drop_duplicates)</text>
        <text x="424" y="306" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Fuzzy match — “Riya Sharma” = “riya s.”</text>
        <text x="424" y="324" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Make units consistent — kg/g, Rs/$, km/mile</text>
        <text x="424" y="342" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Date format — dd-mm-yyyy vs yyyy-mm-dd</text>
        <text x="424" y="360" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Trim spaces, lower-case, standard city names</text>
        <text x="424" y="382" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>The same person twice = the analysis double counts</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="20" y="412" width="760" height="42" rx="8" fill="rgba(0,255,136,0.07)" stroke="rgba(0,255,136,0.4)" />
        <text x="400" y="430" textAnchor="middle" fill="#00ff88" fontSize="9.6" fontWeight="700" fontFamily={FONT}>
          Output of cleaning: one row = one fact, one column = one unit, no empty cell
        </text>
        <text x="400" y="446" textAnchor="middle" fill="#9ab0e0" fontSize="8.6" fontFamily={FONT}>
          Tools: pandas (fillna / dropna / clip / drop_duplicates), OpenRefine, Excel Power Query, SQL
        </text>
      </g>

      <text x="400" y="476" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily={FONT}>
        Cleaning rule: understand the problem first, then choose the technique — never replace blindly
      </text>
      <text x="400" y="502" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        Exam line: data cleaning handles missing values, noise, outliers and duplicates
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 17 — Data integration
// ============================================================
export function DataIntegrationDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Data integration: combining multiple heterogeneous sources with schema matching and entity resolution into one consistent dataset">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Data Integration — many sources, one consistent dataset
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        schema matching + entity resolution + redundancy removal
      </text>

      {[
        ['CRM DATABASE', 'cust_id | name | city', '#6fb2ff'],
        ['BILLING SYSTEM', 'customer_no | bill_amt', '#00d4ff'],
        ['WEBSITE LOGS', 'session | user | clicks', '#c4ff00'],
        ['EXCEL SHEETS', 'Name | amount | remarks', '#ff8800'],
      ].map(([t, d, c], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${80 + i * 90}ms` }}>
          <rect x="20" y={66 + i * 39} width="200" height="34" rx="7" fill="rgba(255,255,255,0.04)" stroke={c} strokeOpacity="0.6" strokeWidth="1.3" />
          <text x="34" y={80 + i * 39} fill={c} fontSize="8.6" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x="34" y={93 + i * 39} fill="#9ab0e0" fontSize="7.4" fontFamily="'Consolas', monospace">{d}</text>
          <line x1="222" y1={83 + i * 39} x2="268" y2="150" stroke="#5a6a9e" strokeWidth="1.1" />
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="270" y="66" width="230" height="154" rx="9" fill="rgba(196,255,0,0.08)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="385" y="86" textAnchor="middle" fill="#c4ff00" fontSize="9.6" fontWeight="800" fontFamily={FONT}>INTEGRATION ENGINE</text>
        {[
          'Schema matching (name/type)',
          'Entity resolution (same person?)',
          'Value conflict resolve',
          'Metadata + lineage save',
        ].map((t, i) => (
          <text key={t} x="284" y={108 + i * 24} fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• {t}</text>
        ))}
        <text x="284" y="212" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>this is what ETL / ELT tools do</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="520" y="66" width="260" height="154" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.45)" />
        <text x="534" y="86" fill="#00ff88" fontSize="9.6" fontWeight="800" fontFamily={FONT}>UNIFIED TABLE</text>
        <line x1="534" y1="94" x2="766" y2="94" stroke="rgba(255,255,255,0.15)" />
        {[
          ['cust_id', 'name', 'city', 'billed', 'clicks'],
          ['C-001', 'Riya', 'Pune', '45000', '12'],
          ['C-002', 'Amit', 'Mumbai', '52000', '4'],
          ['C-003', 'Sara', 'Delhi', '38000', '9'],
        ].map((row, i) => (
          <g key={i}>
            {row.map((cell, j) => (
              <text key={j} x={538 + j * 48} y={112 + i * 20} fill={i === 0 ? '#9ab0e0' : '#dbe6ff'} fontSize="7.6" fontFamily="'Consolas', monospace">{cell}</text>
            ))}
          </g>
        ))}
        <text x="534" y="208" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>one row = one entity, all attributes together</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x="20" y="240" width="370" height="158" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,122,144,0.45)" />
        <text x="34" y="260" fill="#ff7a90" fontSize="10" fontWeight="800" fontFamily={FONT}>THE 4 CHALLENGES OF INTEGRATION</text>
        <text x="34" y="282" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>1. Entity identification</text>
        <text x="34" y="298" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>“Riya Sharma”, “riya s.”, “R. Sharma” — the same person?</text>
        <text x="34" y="320" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>2. Redundancy</text>
        <text x="34" y="336" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>duplicate attribute — correlation r ≈ 1, chi-square test</text>
        <text x="34" y="358" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>3. Schema conflict</text>
        <text x="34" y="374" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>different names (cust_id vs customer_no), different units (Rs vs $)</text>
        <text x="34" y="392" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>4. Tuple duplication</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '780ms' }}>
        <rect x="410" y="240" width="370" height="158" rx="9" fill="rgba(47,111,255,0.07)" stroke="rgba(47,111,255,0.4)" />
        <text x="424" y="260" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>SOLUTION (practical)</text>
        <text x="424" y="282" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Create a common or surrogate key (customer_id)</text>
        <text x="424" y="300" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Fix a data dictionary and a naming standard</text>
        <text x="424" y="318" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Resolve the entity by fuzzy matching (email + phone)</text>
        <text x="424" y="336" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Convert units and currency to one base</text>
        <text x="424" y="354" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Detect duplicates and build a master record</text>
        <text x="424" y="372" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Record lineage — which source the data came from</text>
        <text x="424" y="390" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Without lineage, tracing a wrong report is very hard</text>
      </g>

      <text x="400" y="424" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        Goal of integration: “one truth” (single source of truth), free of duplicates and conflict
      </text>
      <text x="400" y="448" textAnchor="middle" fill="#5a6a9e" fontSize="9.6" fontFamily={FONT}>
        IT tools: Apache NiFi, Talend, Informatica, Airflow, dbt; code: pandas merge / SQL JOIN
      </text>
      <text x="400" y="476" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        Exam line: data integration brings heterogeneous sources onto one schema
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 18 — Data transformation
// ============================================================
export function DataTransformationDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Data transformation techniques: normalisation, z-score standardisation, decimal scaling, encoding, discretisation, aggregation smoothing and attribute construction">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Data Transformation — changing the shape and scale of data
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        models need numbers — they must be brought to the same scale
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="760" height="92" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.45)" />
        <text x="34" y="84" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>1 · NORMALISATION / SCALING</text>
        <text x="34" y="106" fill="#c4ff00" fontSize="9" fontFamily="'Consolas', monospace">Min-Max:  x' = (x − min) / (max − min)   → range 0 to 1</text>
        <text x="34" y="126" fill="#c4ff00" fontSize="9" fontFamily="'Consolas', monospace">Z-score:  z = (x − μ) / σ                → mean 0, SD 1</text>
        <text x="34" y="146" fill="#c4ff00" fontSize="9" fontFamily="'Consolas', monospace">Decimal:  x' = x / 10^j                  → 986 → 0.986</text>
        <text x="430" y="106" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>Salary 45,000 vs Age 24 — without scaling,</text>
        <text x="430" y="122" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>distance based algorithms give salary</text>
        <text x="430" y="138" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>far more weight (KNN, K-means).</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="20" y="168" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.45)" />
        <text x="34" y="188" fill="#00d4ff" fontSize="10" fontWeight="800" fontFamily={FONT}>2 · ATTRIBUTE ENCODING</text>
        <text x="34" y="208" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Nominal → One-hot: city = Pune/Delhi</text>
        <text x="34" y="226" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Ordinal → Label: small=1, med=2, large=3</text>
        <text x="34" y="244" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Binary → 0/1: yes/no, male/female</text>
        <text x="34" y="262" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Text → TF-IDF, bag of words, embeddings</text>
        <text x="34" y="282" fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>Avoid one-hot when the category count is very high</text>
        <text x="34" y="300" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>Label encoding can teach the model a false order</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="410" y="168" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.45)" />
        <text x="424" y="188" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>3 · DISCRETISATION (BINNING)</text>
        <text x="424" y="208" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Equal-width — split the range into equal parts</text>
        <text x="424" y="226" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Equal-frequency — the same count in every bin</text>
        <text x="424" y="244" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Custom — by domain meaning (0-18, 19-30, 31-45)</text>
        <text x="424" y="262" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Concept hierarchy — Pune → Maharashtra → India</text>
        <text x="424" y="284" fill="#ffd166" fontSize="9" fontFamily="'Consolas', monospace">age 24, 27, 31, 44 → 20s [24,27]</text>
        <text x="424" y="302" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>less noise, easier to interpret, some information loss</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="330" width="370" height="104" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="350" fill="#ff8800" fontSize="10" fontWeight="800" fontFamily={FONT}>4 · SMOOTHING + AGGREGATION</text>
        <text x="34" y="370" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Reduce noise by smoothing — moving average, median</text>
        <text x="34" y="388" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Aggregation — daily → monthly sales (summary)</text>
        <text x="34" y="406" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Log transform — makes right skewed data closer to linear</text>
        <text x="34" y="424" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>Aggregation cuts the row count and reveals the pattern</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x="410" y="330" width="370" height="104" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="424" y="350" fill="#00ff88" fontSize="10" fontWeight="800" fontFamily={FONT}>5 · ATTRIBUTE CONSTRUCTION</text>
        <text x="424" y="370" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• derive age from date of birth; day/month/year from a date</text>
        <text x="424" y="388" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• price × qty = total_amount</text>
        <text x="424" y="406" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• BMI = weight / height², ratio features</text>
        <text x="424" y="424" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>Building a more useful column from raw ones = feature engineering</text>
      </g>

      <rect x="20" y="446" width="760" height="26" rx="7" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.4)" />
      <text x="400" y="464" textAnchor="middle" fill="#c4ff00" fontSize="9" fontFamily={FONT}>
        Remember the order: clean → integrate → transform → reduce. Apply transformation to clean data only.
      </text>

      <text x="400" y="494" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        Exam line: transformation performs smoothing, aggregation, generalisation, normalisation and encoding
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 19 — Data reduction
// ============================================================
export function DataReductionDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Data reduction: dimensionality reduction with feature selection and PCA, numerosity reduction with sampling and clustering, and data compression">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Data Reduction — smaller data, same meaning
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        reduce the volume, keep the analysis result almost the same
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="300" y="64" width="200" height="52" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" />
        <text x="400" y="86" textAnchor="middle" fill="#fff" fontSize="9.6" fontWeight="800" fontFamily={FONT}>ORIGINAL DATA</text>
        <text x="400" y="104" textAnchor="middle" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>1,00,000 rows × 1,000 columns</text>
      </g>

      <line x1="400" y1="118" x2="400" y2="136" stroke="#5a6a9e" strokeWidth="1.4" />
      <line x1="140" y1="136" x2="660" y2="136" stroke="#5a6a9e" strokeWidth="1.4" />
      {[140, 400, 660].map((x) => (
        <line key={x} x1={x} y1="136" x2={x} y2="152" stroke="#5a6a9e" strokeWidth="1.4" />
      ))}

      {[
        ['DIMENSIONALITY', 'fewer columns', '#6fb2ff', 20, [
          'Feature selection: filter, wrapper, embedded',
          'PCA — principal component analysis',
          'LDA, autoencoder, chi-square, RFE',
          'Example: 1000 → 12 PCs = 95% variance',
        ]],
        ['NUMEROSITY', 'fewer rows', '#c4ff00', 280, [
          'Sampling: random, stratified, cluster',
          'Histogram, clustering, regression model',
          'Summary by binning + aggregation',
          'Example: 1,00,000 → 10,000 representative',
        ]],
        ['COMPRESSION', 'smaller size', '#ff8800', 540, [
          'Lossless: zip, gzip, snappy',
          'Lossy: wavelet, JPEG, quantisation',
          'Columnar + dictionary encoding (Parquet)',
          'Example: 4 GB CSV → 600 MB Parquet',
        ]],
      ].map(([t, sub, c, x, pts], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${180 + i * 130}ms` }}>
          <rect x={x} y="152" width="240" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke={c} strokeOpacity="0.55" strokeWidth="1.4" />
          <text x={x + 120} y="174" textAnchor="middle" fill={c} fontSize="9.6" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={x + 120} y="190" textAnchor="middle" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>{sub}</text>
          {pts.map((p, j) => (
            <text key={p} x={x + 14} y={212 + j * 22} fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• {p}</text>
          ))}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="20" y="322" width="370" height="118" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="34" y="342" fill="#00ff88" fontSize="10" fontWeight="800" fontFamily={FONT}>PCA IN ONE LINE</text>
        <text x="34" y="362" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>it turns 100 correlated columns into a few new orthogonal</text>
        <text x="34" y="380" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>components that hold most of the</text>
        <text x="34" y="398" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>variation (information).</text>
        <text x="34" y="418" fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>Trade-off: the components become harder to interpret</text>
        <text x="34" y="434" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Feature selection stays interpretable — try that first</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x="410" y="322" width="370" height="118" rx="9" fill="rgba(255,122,144,0.06)" stroke="rgba(255,122,144,0.4)" />
        <text x="424" y="342" fill="#ff7a90" fontSize="10" fontWeight="800" fontFamily={FONT}>WATCH OUT</text>
        <text x="424" y="362" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Test accuracy after reduction —</text>
        <text x="424" y="380" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>  information loss can be hidden</text>
        <text x="424" y="398" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Rare class / fraud rows must not vanish in sampling</text>
        <text x="424" y="416" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Fit only on train after the split (leakage)</text>
      </g>

      <text x="400" y="462" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        Reduction = speed + storage saving, at a measured cost of information
      </text>
      <text x="400" y="486" textAnchor="middle" fill="#9ab0e0" fontSize="9.6" fontFamily={FONT}>
        Exam line: reduction covers dimensionality reduction, numerosity reduction and compression
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 20 — Data warehouse introduction & characteristics
// ============================================================
export function DataWarehouseIntroDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Data warehouse characteristics: subject oriented, integrated, time variant and non-volatile, compared with an operational database">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Data Warehouse — a separate store for analysis
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        Inmon: “subject-oriented, integrated, time-variant, non-volatile collection of data”
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="185" height="140" rx="9" fill="rgba(111,178,255,0.07)" stroke="rgba(111,178,255,0.5)" />
        <text x="112" y="86" textAnchor="middle" fill="#6fb2ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>1 · SUBJECT ORIENTED</text>
        <text x="34" y="108" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Sales, customer, product,</text>
        <text x="34" y="124" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>inventory — the subject of the analysis</text>
        <text x="34" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>organise the data by subject.</text>
        <text x="34" y="164" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Operational DB: data written by the</text>
        <text x="34" y="178" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>by business area (billing, HR, CRM).</text>
        <text x="34" y="196" fill="#c4ff00" fontSize="8" fontFamily={FONT}>Irrelevant detail is removed</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="215" y="64" width="185" height="140" rx="9" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.5)" />
        <text x="307" y="86" textAnchor="middle" fill="#00d4ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>2 · INTEGRATED</text>
        <text x="229" y="108" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Many sources in one format:</text>
        <text x="229" y="124" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>same code, same unit, same name.</text>
        <text x="229" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Pune/pune, kg/g, Rs/$ — all fixed.</text>
        <text x="229" y="164" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Encoding and naming standards</text>
        <text x="229" y="178" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>are applied during ETL.</text>
        <text x="229" y="196" fill="#c4ff00" fontSize="8" fontFamily={FONT}>“One company, one definition”</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="410" y="64" width="185" height="140" rx="9" fill="rgba(196,255,0,0.06)" stroke="rgba(196,255,0,0.5)" />
        <text x="502" y="86" textAnchor="middle" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>3 · TIME VARIANT</text>
        <text x="424" y="108" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Every record carries a time</text>
        <text x="424" y="124" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>stamp — daily/weekly/monthly</text>
        <text x="424" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>snapshots kept 5–10 years.</text>
        <text x="424" y="164" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Operational DB: only the current</text>
        <text x="424" y="178" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>value (today's balance).</text>
        <text x="424" y="196" fill="#c4ff00" fontSize="8" fontFamily={FONT}>A trend needs history</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="605" y="64" width="175" height="140" rx="9" fill="rgba(255,136,0,0.07)" stroke="rgba(255,136,0,0.5)" />
        <text x="692" y="86" textAnchor="middle" fill="#ff8800" fontSize="9.4" fontWeight="800" fontFamily={FONT}>4 · NON-VOLATILE</text>
        <text x="619" y="108" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>After load, data is not updated</text>
        <text x="619" y="124" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>or deleted — only read</text>
        <text x="619" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>and periodically refreshed.</text>
        <text x="619" y="164" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Operational DB: insert, update,</text>
        <text x="619" y="178" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>delete — thousands of times a day.</text>
        <text x="619" y="196" fill="#c4ff00" fontSize="8" fontFamily={FONT}>So the same report can be reproduced</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="20" y="222" width="760" height="136" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <text x="34" y="242" fill="#fff" fontSize="10" fontWeight="800" fontFamily={FONT}>OPERATIONAL DATABASE vs DATA WAREHOUSE</text>
        {[
          ['Purpose', 'running the daily transactions', 'analysis + decision support'],
          ['Operations', 'insert / update / delete', 'bulk load + read-only query'],
          ['Data', 'current, detailed', 'historical, summarised'],
          ['Design', 'normalised (3NF), entity', 'dimensional (star), subject'],
          ['Query', 'short, simple, many users', 'long, complex, few analysts'],
          ['Size', 'GB', 'TB – PB'],
        ].map((row, i) => (
          <g key={row[0]}>
            <text x="34" y={262 + i * 14} fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>{row[0]}</text>
            <text x="180" y={262 + i * 14} fill="#ff7a90" fontSize="8.2" fontFamily={FONT}>{row[1]}</text>
            <text x="450" y={262 + i * 14} fill="#00ff88" fontSize="8.2" fontFamily={FONT}>{row[2]}</text>
          </g>
        ))}
        <text x="180" y="348" fill="#ff7a90" fontSize="7.6" fontFamily={FONT}>← OLTP</text>
        <text x="450" y="348" fill="#00ff88" fontSize="7.6" fontFamily={FONT}>← OLAP / DW</text>
      </g>

      <text x="400" y="374" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily={FONT}>
        Way to remember: S-I-T-N (Subject, Integrated, Time-variant, Non-volatile)
      </text>
      <text x="400" y="398" textAnchor="middle" fill="#5a6a9e" fontSize="9.4" fontFamily={FONT}>
        Data mart = a department's small warehouse · metadata = data about data
      </text>
      <text x="400" y="422" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Examples: Amazon Redshift, Google BigQuery, Snowflake, Azure Synapse
      </text>
      <text x="400" y="452" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: a DW is subject-oriented, integrated, time-variant and non-volatile
      </text>
      <text x="400" y="480" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>
        A DW is not a product but a process + architecture — it makes data ready for analysis
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 21 — Data warehouse architecture
// ============================================================
export function WarehouseArchitectureDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Three tier data warehouse architecture: source systems, ETL with staging area, central warehouse with metadata, data marts and BI reporting tools">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Data Warehouse Architecture — 3 tier
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        sources → ETL → warehouse → data marts → analysis
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="170" height="176" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.5)" />
        <text x="105" y="84" textAnchor="middle" fill="#6fb2ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>SOURCE SYSTEMS</text>
        {[
          ['ERP / CRM', 'SQL Server'],
          ['Billing / POS', 'Oracle'],
          ['Website / app', 'Mongo, logs'],
          ['Excel / CSV', 'files'],
          ['External', 'API, market data'],
        ].map(([a, b], i) => (
          <g key={a}>
            <text x="34" y={106 + i * 24} fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>{a}</text>
            <text x="34" y={119 + i * 24} fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>{b}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="205" y="64" width="130" height="176" rx="9" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.5)" />
        <text x="270" y="84" textAnchor="middle" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>ETL</text>
        <text x="270" y="100" textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>extract · transform · load</text>
        {[
          'Staging area',
          'Data quality check',
          'Cleaning + conform',
          'Deduplicate',
          'SCD handling',
        ].map((t, i) => (
          <text key={t} x="218" y={124 + i * 22} fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="350" y="64" width="180" height="176" rx="9" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.55)" />
        <text x="440" y="84" textAnchor="middle" fill="#00d4ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>DATA WAREHOUSE</text>
        <text x="440" y="100" textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>central repository</text>
        {[
          'Detail + summary data',
          'Star / snowflake schema',
          'Historical snapshots',
          'Metadata repository',
        ].map((t, i) => (
          <text key={t} x="364" y={126 + i * 24} fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• {t}</text>
        ))}
        <rect x="364" y="212" width="152" height="18" rx="4" fill="rgba(196,255,0,0.1)" stroke="rgba(196,255,0,0.35)" />
        <text x="440" y="225" textAnchor="middle" fill="#c4ff00" fontSize="7.4" fontFamily={FONT}>single source of truth</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="545" y="64" width="235" height="176" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.5)" />
        <text x="662" y="84" textAnchor="middle" fill="#00ff88" fontSize="9.4" fontWeight="800" fontFamily={FONT}>DATA MARTS + TOOLS</text>
        {[
          ['Sales mart', 'star schema, mgr reports'],
          ['Finance mart', 'P&L, audit trail'],
          ['HR mart', 'attrition, hiring'],
        ].map(([a, b], i) => (
          <g key={a}>
            <text x="559" y={106 + i * 26} fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• {a}</text>
            <text x="572" y={119 + i * 26} fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>{b}</text>
          </g>
        ))}
        <line x1="559" y1="182" x2="766" y2="182" stroke="rgba(255,255,255,0.15)" />
        {['Power BI / Tableau', 'SQL / Excel / Python', 'OLAP cubes'].map((t, i) => (
          <text key={t} x="559" y={198 + i * 14} fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      {[['190', '270'], ['335', '440'], ['530', '600']].map(([a, b]) => (
        <line key={a} x1={Number(a) + 0} y1="152" x2={Number(b)} y2="152" stroke="#5a6a9e" strokeWidth="1.4" markerEnd="" />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <text x="105" y="254" textAnchor="middle" fill="#5a6a9e" fontSize="7.6" fontFamily={FONT}>tier 0 · operational</text>
        <text x="270" y="254" textAnchor="middle" fill="#5a6a9e" fontSize="7.6" fontFamily={FONT}>tier 1 · acquisition</text>
        <text x="440" y="254" textAnchor="middle" fill="#5a6a9e" fontSize="7.6" fontFamily={FONT}>tier 2 · storage</text>
        <text x="662" y="254" textAnchor="middle" fill="#5a6a9e" fontSize="7.6" fontFamily={FONT}>tier 3 · presentation</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="20" y="266" width="370" height="120" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="286" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>TWO BUILDING APPROACHES</text>
        <text x="34" y="306" fill="#6fb2ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Top-down (Inmon)</text>
        <text x="34" y="322" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>build the central DW first, then marts — consistent but slow and costly</text>
        <text x="34" y="344" fill="#00ff88" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Bottom-up (Kimball)</text>
        <text x="34" y="360" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>marts first, then integrate — fast value, consistency risk</text>
        <text x="34" y="378" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Today: Data Vault / lakehouse hybrid designs are also popular</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="410" y="266" width="370" height="120" rx="9" fill="rgba(255,136,0,0.06)" stroke="rgba(255,136,0,0.4)" />
        <text x="424" y="286" fill="#ff8800" fontSize="9.4" fontWeight="800" fontFamily={FONT}>METADATA — THE INDEX OF THE DW</text>
        <text x="424" y="306" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• Technical: schema, table, column, ETL job, run time</text>
        <text x="424" y="324" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• Business: definition, owner, KPI formula, refresh</text>
        <text x="424" y="342" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• Lineage: which source this number came from</text>
        <text x="424" y="362" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• Data quality rules and test results</text>
        <text x="424" y="380" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Without metadata the DW becomes a black box</text>
      </g>

      <text x="400" y="410" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily={FONT}>
        Layers: staging → warehouse → mart → presentation — each layer has its own job
      </text>
      <text x="400" y="436" textAnchor="middle" fill="#5a6a9e" fontSize="9.4" fontFamily={FONT}>
        Modern stack: S3/GCS (lake) + dbt (transform) + Snowflake/BigQuery (warehouse) + BI
      </text>
      <text x="400" y="464" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: DW architecture has source, ETL, warehouse, marts and reporting tiers
      </text>
      <text x="400" y="492" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>
        Data lake = raw files (schema-on-read) · DW = structured, modelled, query-ready
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 22 — ETL process
// ============================================================
export function EtlProcessDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="ETL process: extract from sources, transform with cleaning conformance and aggregation, then load into the data warehouse, with scheduling and data quality checks">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        ETL Process — Extract · Transform · Load
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        DW data arrives through this pipeline — daily, hourly, real time
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="235" height="160" rx="9" fill="rgba(111,178,255,0.07)" stroke="rgba(111,178,255,0.55)" />
        <text x="34" y="84" fill="#6fb2ff" fontSize="10.4" fontWeight="800" fontFamily={FONT}>E — EXTRACT</text>
        <text x="34" y="104" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Full extract — copy the whole table</text>
        <text x="34" y="122" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Incremental — only new or changed rows</text>
        <text x="34" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• CDC — change data capture (log based)</text>
        <text x="34" y="158" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Sources: DB, API, files, streams, SaaS</text>
        <text x="34" y="176" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Keep a raw copy in the staging area</text>
        <text x="34" y="200" fill="#c4ff00" fontSize="8" fontFamily={FONT}>Record the timestamp / watermark</text>
        <text x="34" y="216" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>If extract fails, the source is not loaded</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="280" y="64" width="240" height="160" rx="9" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.55)" />
        <text x="294" y="84" fill="#c4ff00" fontSize="10.4" fontWeight="800" fontFamily={FONT}>T — TRANSFORM</text>
        <text x="294" y="104" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Clean — missing, duplicate, typo</text>
        <text x="294" y="122" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Standardise — code, unit, date format</text>
        <text x="294" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Integrate — join sources on keys</text>
        <text x="294" y="158" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Aggregate — daily → monthly</text>
        <text x="294" y="176" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Derive — total, margin, age, flags</text>
        <text x="294" y="194" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• SCD — slowly changing dimension</text>
        <text x="294" y="216" fill="#ff8800" fontSize="7.8" fontFamily={FONT}>Business rules are applied here</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="545" y="64" width="235" height="160" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.55)" />
        <text x="559" y="84" fill="#00ff88" fontSize="10.4" fontWeight="800" fontFamily={FONT}>L — LOAD</text>
        <text x="559" y="104" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Full refresh — truncate + insert</text>
        <text x="559" y="122" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Incremental append — new rows</text>
        <text x="559" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Upsert / merge — SCD type 1 &amp; 2</text>
        <text x="559" y="158" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Bulk load — from file into the warehouse</text>
        <text x="559" y="176" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Load order — dimension first, fact after</text>
        <text x="559" y="200" fill="#c4ff00" fontSize="8" fontFamily={FONT}>Verify row count + checksum after load</text>
        <text x="559" y="216" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Idempotent load — re-running creates no duplicate</text>
      </g>

      {[['253', '282'], ['518', '547']].map(([a, b]) => (
        <g key={a}>
          <line x1={a} y1="144" x2={b} y2="144" stroke="#5a6a9e" strokeWidth="1.6" />
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="20" y="240" width="370" height="132" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="260" fill="#c4ff00" fontSize="9.6" fontWeight="800" fontFamily={FONT}>SCD — SLOWLY CHANGING DIMENSION</text>
        <text x="34" y="280" fill="#6fb2ff" fontSize="8.4" fontFamily={FONT}>Type 1 — overwrite the old value</text>
        <text x="34" y="296" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>simple, no history kept</text>
        <text x="34" y="316" fill="#00ff88" fontSize="8.4" fontFamily={FONT}>Type 2 — new row + valid_from / valid_to</text>
        <text x="34" y="332" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>full history, is_active flag, surrogate key</text>
        <text x="34" y="352" fill="#ffd166" fontSize="8.4" fontFamily={FONT}>Type 3 — previous value extra column</text>
        <text x="34" y="366" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Example: a customer changes city — Type 2 keeps old sales correct</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="410" y="240" width="370" height="132" rx="9" fill="rgba(47,111,255,0.07)" stroke="rgba(47,111,255,0.4)" />
        <text x="424" y="260" fill="#6fb2ff" fontSize="9.6" fontWeight="800" fontFamily={FONT}>ETL vs ELT + QUALITY CHECKS</text>
        <text x="424" y="280" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>ETL: transform first, then load (classic DW)</text>
        <text x="424" y="296" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>ELT: load first, transform in the warehouse (cloud, dbt)</text>
        <text x="424" y="316" fill="#00ff88" fontSize="8.2" fontFamily={FONT}>Checks: null %, duplicate count, referential integrity,</text>
        <text x="424" y="330" fill="#00ff88" fontSize="8.2" fontFamily={FONT}>row count match, amount reconciliation, freshness</text>
        <text x="424" y="350" fill="#ff7a90" fontSize="8.2" fontFamily={FONT}>On failure stop the job (fail fast), alert, keep wrong data out of the DW</text>
        <text x="424" y="366" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Scheduling: Airflow, cron, Azure Data Factory, dbt + orchestrator</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="20" y="386" width="760" height="46" rx="8" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.35)" />
        <text x="400" y="404" textAnchor="middle" fill="#00ff88" fontSize="9" fontWeight="700" fontFamily={FONT}>
          Typical DW load: extract at 1:00 am → transform 1:15 → load 1:40 → validate 2:00 → dashboards fresh by 6 am
        </text>
        <text x="400" y="422" textAnchor="middle" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Tools: Informatica, Talend, SSIS, Azure Data Factory, Apache Airflow, dbt, Apache NiFi, Kafka (streaming)
        </text>
      </g>

      <text x="400" y="458" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily={FONT}>
        ETL = the first and most important step of a DW — here the data becomes “trustworthy”
      </text>
      <text x="400" y="484" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        Exam line: ETL covers extract (take from sources), transform (clean + conform) and load (put into the DW)
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 23 — Fact and dimension tables
// ============================================================
export function FactDimensionDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Fact table with numeric measures and foreign keys surrounded by dimension tables that give descriptive context, plus the concept of grain">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Fact and Dimension Tables — task and context
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        fact = “how much happened” (numbers) · dimension = “who, when, where” (context)
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="270" y="176" width="260" height="142" rx="9" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="1.8" />
        <text x="400" y="196" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>FACT_SALES</text>
        <text x="400" y="211" textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>grain: one row = one order line</text>
        <line x1="284" y1="218" x2="516" y2="218" stroke="rgba(255,255,255,0.18)" />
        {[
          'sale_id (PK)',
          'date_key → dim_date',
          'product_key → dim_product',
          'store_key → dim_store',
          'customer_key → dim_customer',
        ].map((t, i) => (
          <text key={t} x="284" y={234 + i * 14} fill="#dbe6ff" fontSize="7.8" fontFamily="'Consolas', monospace">{t}</text>
        ))}
        <text x="284" y="306" fill="#ffd166" fontSize="7.8" fontFamily="'Consolas', monospace">qty · unit_price · discount · total</text>
      </g>

      {[
        ['dim_date', 'date_key, day, month, quarter, year, festival_flag', 20, 64, '#6fb2ff'],
        ['dim_product', 'product_key, name, category, brand, price', 560, 64, '#00d4ff'],
        ['dim_store', 'store_key, city, state, region, type', 20, 330, '#ff8800'],
        ['dim_customer', 'customer_key, name, segment, city, join_date', 560, 330, '#ff7ab2'],
      ].map(([t, d, x, y, c], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${200 + i * 90}ms` }}>
          <rect x={x} y={y} width="220" height="62" rx="8" fill="rgba(255,255,255,0.04)" stroke={c} strokeOpacity="0.6" strokeWidth="1.3" />
          <text x={x + 12} y={y + 20} fill={c} fontSize="8.8" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={x + 12} y={y + 34} fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>{d.split(', ').slice(1, 4).join(' · ')}</text>
          <text x={x + 12} y={y + 48} fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>{d.split(', ').slice(4).join(' · ')}</text>
          <line x1={x < 400 ? x + 220 : x} y1={y + 31} x2={x < 400 ? 268 : 532} y2={y < 200 ? 200 : 284} stroke="#5a6a9e" strokeWidth="1.1" />
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="20" y="404" width="245" height="96" rx="9" fill="rgba(196,255,0,0.05)" stroke="rgba(196,255,0,0.35)" />
        <text x="34" y="422" fill="#c4ff00" fontSize="8.8" fontWeight="800" fontFamily={FONT}>FACT TABLE</text>
        <text x="34" y="440" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• numeric measures (additive)</text>
        <text x="34" y="456" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• foreign keys to dimensions</text>
        <text x="34" y="472" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• many rows, few columns</text>
        <text x="34" y="490" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Additive vs semi-additive (balance)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '660ms' }}>
        <rect x="277" y="404" width="245" height="96" rx="9" fill="rgba(111,178,255,0.05)" stroke="rgba(111,178,255,0.35)" />
        <text x="291" y="422" fill="#6fb2ff" fontSize="8.8" fontWeight="800" fontFamily={FONT}>DIMENSION TABLE</text>
        <text x="291" y="440" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• descriptive attributes (text)</text>
        <text x="291" y="456" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• surrogate primary key</text>
        <text x="291" y="472" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• few rows, many columns</text>
        <text x="291" y="490" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>denormalised, flat, readable</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '720ms' }}>
        <rect x="534" y="404" width="246" height="96" rx="9" fill="rgba(255,136,0,0.05)" stroke="rgba(255,136,0,0.35)" />
        <text x="548" y="422" fill="#ff8800" fontSize="8.8" fontWeight="800" fontFamily={FONT}>GRAIN — DECIDE IT FIRST</text>
        <text x="548" y="440" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>“at what level is one fact row?”</text>
        <text x="548" y="456" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>one per order line / per day / per visit</text>
        <text x="548" y="472" fill="#fff" fontSize="7.8" fontFamily={FONT}>Wrong grain = double counting</text>
        <text x="548" y="490" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Fact types: transaction, periodic, accumulating</text>
      </g>

      <text x="400" y="156" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Fact + dimension = “how much + who/when/where” — every OLAP question is built from these
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 24 — Star schema
// ============================================================
export function StarSchemaDiagram() {
  const corners = [
    { label: 'DIM_DATE', line1: 'date_key · day · month', line2: 'quarter · year', x: 60, y: 84, color: '#6fb2ff' },
    { label: 'DIM_PRODUCT', line1: 'product_key · name', line2: 'category · brand', x: 530, y: 84, color: '#00d4ff' },
    { label: 'DIM_STORE', line1: 'store_key · city', line2: 'state · region', x: 60, y: 300, color: '#ff8800' },
    { label: 'DIM_CUSTOMER', line1: 'customer_key · name', line2: 'segment · city', x: 530, y: 300, color: '#ff7ab2' },
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Star schema with one central fact table joined directly to four denormalised dimension tables, with advantages and disadvantages">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Star Schema — one fact, directly joined dimensions
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        simple, fast, best for reporting — dimensions denormalised (flat)
      </text>

      {corners.map((d, i) => (
        <g key={d.label} className="diagram-pop" style={{ animationDelay: `${120 + i * 90}ms` }}>
          <line
            x1={d.x < 400 ? d.x + 210 : d.x}
            y1={d.y < 200 ? d.y + 64 : d.y}
            x2={d.x < 400 ? 310 : 490}
            y2={d.y < 200 ? 200 : 284}
            stroke="#5a6a9e"
            strokeWidth="1.5"
          />
          <rect x={d.x} y={d.y} width="210" height="64" rx="8" fill="rgba(255,255,255,0.05)" stroke={d.color} strokeOpacity="0.65" strokeWidth="1.4" />
          <text x={d.x + 105} y={d.y + 20} textAnchor="middle" fill={d.color} fontSize="9.4" fontWeight="800" fontFamily={FONT}>{d.label}</text>
          <text x={d.x + 105} y={d.y + 36} textAnchor="middle" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>{d.line1}</text>
          <text x={d.x + 105} y={d.y + 50} textAnchor="middle" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>{d.line2}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="310" y="200" width="180" height="84" rx="9" fill="rgba(196,255,0,0.13)" stroke="#c4ff00" strokeWidth="1.8" />
        <text x="400" y="222" textAnchor="middle" fill="#c4ff00" fontSize="9.8" fontWeight="800" fontFamily={FONT}>FACT_SALES</text>
        <text x="400" y="240" textAnchor="middle" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>date · product · store · customer keys</text>
        <text x="400" y="258" textAnchor="middle" fill="#ffd166" fontSize="8" fontFamily={FONT}>qty · unit_price · discount · amount</text>
        <text x="400" y="274" textAnchor="middle" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>grain: one row = one order line</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="386" width="370" height="86" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="34" y="404" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>FAYDE</text>
        <text x="34" y="422" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• simple — one join from fact to dimension</text>
        <text x="34" y="438" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• fast queries (star join), easy for BI tools</text>
        <text x="34" y="454" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• readable dimensions, easy to build a cube</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="410" y="386" width="370" height="86" rx="9" fill="rgba(255,122,144,0.06)" stroke="rgba(255,122,144,0.4)" />
        <text x="424" y="404" fill="#ff7a90" fontSize="9" fontWeight="800" fontFamily={FONT}>NUKSaan</text>
        <text x="424" y="422" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• data redundancy and more storage</text>
        <text x="424" y="438" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• slow when a dimension is very large</text>
        <text x="424" y="454" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• risk of update anomaly (handled by ETL)</text>
      </g>

      <text x="400" y="492" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: in a star schema the central fact table joins directly to denormalised dimension tables
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 25 — Snowflake schema
// ============================================================
export function SnowflakeSchemaDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Snowflake schema where dimension tables are normalised into sub dimension tables, compared with star schema on joins, storage and performance">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Snowflake Schema — a star with normalised dimensions
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        a dimension inside a dimension → less redundancy, more joins
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="300" y="180" width="200" height="70" rx="8" fill="rgba(196,255,0,0.12)" stroke="#c4ff00" strokeWidth="1.7" />
        <text x="400" y="202" textAnchor="middle" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>FACT_SALES</text>
        <text x="400" y="219" textAnchor="middle" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>date_key · product_key · store_key</text>
        <text x="400" y="236" textAnchor="middle" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>qty · amount</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <line x1="298" y1="215" x2="212" y2="215" stroke="#5a6a9e" strokeWidth="1.3" />
        <rect x="20" y="184" width="190" height="62" rx="8" fill="rgba(111,178,255,0.08)" stroke="rgba(111,178,255,0.6)" />
        <text x="115" y="204" textAnchor="middle" fill="#6fb2ff" fontSize="8.8" fontWeight="800" fontFamily={FONT}>DIM_DATE</text>
        <text x="115" y="220" textAnchor="middle" fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>date_key · day · month</text>
        <text x="115" y="236" textAnchor="middle" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>year · quarter (flat)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <line x1="400" y1="178" x2="400" y2="136" stroke="#5a6a9e" strokeWidth="1.3" />
        <rect x="300" y="70" width="200" height="66" rx="8" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.6)" />
        <text x="400" y="90" textAnchor="middle" fill="#00d4ff" fontSize="8.8" fontWeight="800" fontFamily={FONT}>DIM_PRODUCT (normalised)</text>
        <text x="400" y="106" textAnchor="middle" fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>product_key · name · price</text>
        <text x="400" y="122" textAnchor="middle" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>category_id → · brand_id →</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <line x1="340" y1="68" x2="340" y2="48" stroke="#5a6a9e" strokeWidth="1.2" />
        <rect x="252" y="64" width="120" height="0" />
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="286" y="346" width="106" height="46" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(0,212,255,0.45)" />
        <text x="339" y="366" textAnchor="middle" fill="#00d4ff" fontSize="8" fontWeight="700" fontFamily={FONT}>DIM_CATEGORY</text>
        <text x="339" y="382" textAnchor="middle" fill="#dbe6ff" fontSize="7" fontFamily={FONT}>category · dept</text>
        <line x1="339" y1="322" x2="339" y2="344" stroke="#5a6a9e" strokeWidth="1.2" />
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="408" y="346" width="106" height="46" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(0,212,255,0.45)" />
        <text x="461" y="366" textAnchor="middle" fill="#00d4ff" fontSize="8" fontWeight="700" fontFamily={FONT}>DIM_BRAND</text>
        <text x="461" y="382" textAnchor="middle" fill="#dbe6ff" fontSize="7" fontFamily={FONT}>brand · supplier</text>
        <line x1="461" y1="322" x2="461" y2="344" stroke="#5a6a9e" strokeWidth="1.2" />
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <line x1="400" y1="252" x2="400" y2="290" stroke="#5a6a9e" strokeWidth="1.3" />
        <rect x="300" y="290" width="200" height="34" rx="7" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.35)" />
        <text x="400" y="311" textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>sub-dimensions of DIM_PRODUCT (2 hops)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <line x1="298" y1="252" x2="212" y2="290" stroke="#5a6a9e" strokeWidth="1.2" />
        <rect x="20" y="290" width="190" height="46" rx="7" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.55)" />
        <text x="115" y="310" textAnchor="middle" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>DIM_STORE (normalised)</text>
        <text x="115" y="326" textAnchor="middle" fill="#dbe6ff" fontSize="7.2" fontFamily={FONT}>store_key · name · city_id →</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x="20" y="346" width="90" height="46" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,136,0,0.45)" />
        <text x="65" y="366" textAnchor="middle" fill="#ff8800" fontSize="7.8" fontWeight="700" fontFamily={FONT}>DIM_CITY</text>
        <text x="65" y="382" textAnchor="middle" fill="#dbe6ff" fontSize="6.8" fontFamily={FONT}>city · region_id</text>
        <line x1="65" y1="338" x2="65" y2="344" stroke="#5a6a9e" strokeWidth="1.2" />
        <rect x="120" y="346" width="90" height="46" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,136,0,0.45)" />
        <text x="165" y="366" textAnchor="middle" fill="#ff8800" fontSize="7.8" fontWeight="700" fontFamily={FONT}>DIM_REGION</text>
        <text x="165" y="382" textAnchor="middle" fill="#dbe6ff" fontSize="6.8" fontFamily={FONT}>region · zone</text>
        <line x1="165" y1="338" x2="165" y2="344" stroke="#5a6a9e" strokeWidth="1.2" />
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="540" y="70" width="240" height="114" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="554" y="90" fill="#00ff88" fontSize="8.8" fontWeight="800" fontFamily={FONT}>FAYDE</text>
        <text x="554" y="110" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• less redundancy, storage saved</text>
        <text x="554" y="128" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• a dimension is updated in one place</text>
        <text x="554" y="146" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• normalised = data integrity better</text>
        <text x="554" y="164" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• better for very large dimensions</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '660ms' }}>
        <rect x="540" y="196" width="240" height="114" rx="9" fill="rgba(255,122,144,0.06)" stroke="rgba(255,122,144,0.4)" />
        <text x="554" y="216" fill="#ff7a90" fontSize="8.8" fontWeight="800" fontFamily={FONT}>NUKSaan</text>
        <text x="554" y="236" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• more joins → slower queries</text>
        <text x="554" y="254" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• complex schema, harder to understand</text>
        <text x="554" y="272" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• more BI tool setup and ETL effort</text>
        <text x="554" y="290" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• more maintenance</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '720ms' }}>
        <rect x="540" y="322" width="240" height="92" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="554" y="342" fill="#c4ff00" fontSize="8.8" fontWeight="800" fontFamily={FONT}>STAR vs SNOWFLAKE</text>
        {[
          ['Joins', 'few (1 hop)', 'many (multi hop)'],
          ['Storage', 'more', 'less'],
          ['Speed', 'fast', 'slightly slower'],
          ['Complexity', 'simple', 'complex'],
        ].map((r, i) => (
          <g key={r[0]}>
            <text x="554" y={362 + i * 16} fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>{r[0]}</text>
            <text x="616" y={362 + i * 16} fill="#00ff88" fontSize="7.4" fontFamily={FONT}>{r[1]}</text>
            <text x="700" y={362 + i * 16} fill="#6fb2ff" fontSize="7.4" fontFamily={FONT}>{r[2]}</text>
          </g>
        ))}
      </g>

      <text x="400" y="438" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Practical choice: mostly star (speed) — snowflake when a dimension is very large
      </text>
      <text x="400" y="464" textAnchor="middle" fill="#5a6a9e" fontSize="9.2" fontFamily={FONT}>
        The Snowflake database takes its name from this design idea (normalised, scalable warehouse)
      </text>
      <text x="400" y="490" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: in a snowflake schema dimension tables are normalised, so the number of joins rises
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 26 — OLTP vs OLAP
// ============================================================
export function OlapVsOltpDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="OLTP versus OLAP comparison and the OLAP operations roll-up, drill-down, slice, dice and pivot, plus ROLAP MOLAP HOLAP server types">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        OLTP vs OLAP — transaction and analysis
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        OLTP = the daily work · OLAP = data for thinking and analysing
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="370" height="26" rx="6" fill="rgba(255,122,144,0.12)" stroke="rgba(255,122,144,0.45)" />
        <text x="205" y="82" textAnchor="middle" fill="#ff7a90" fontSize="9.6" fontWeight="800" fontFamily={FONT}>OLTP — ONLINE TRANSACTION PROCESSING</text>
        <rect x="410" y="64" width="370" height="26" rx="6" fill="rgba(0,255,136,0.12)" stroke="rgba(0,255,136,0.45)" />
        <text x="595" y="82" textAnchor="middle" fill="#00ff88" fontSize="9.6" fontWeight="800" fontFamily={FONT}>OLAP — ONLINE ANALYTICAL PROCESSING</text>
      </g>

      {[
        ['Purpose', 'din-ba-din transactions chalana', 'analysis, reporting, decision support'],
        ['Data', 'current, detailed, up-to-date', 'historical, aggregated, multi-year'],
        ['Operations', 'insert, update, delete (short)', 'read-only complex queries, drill'],
        ['Queries', 'simple, few rows, by index', 'complex joins, scan millions rows'],
        ['Design', 'normalised 3NF (no redundancy)', 'star / snowflake (denormalised)'],
        ['Users', 'clerk, app, customer (thousands)', 'analyst, manager (a few hundred)'],
        ['Size', 'GB, per transaction', 'TB–PB, warehouse'],
        ['Metric', 'response time, throughput', 'query time, insight quality'],
      ].map(([a, b, c], i) => (
        <g key={a} className="diagram-pop" style={{ animationDelay: `${140 + i * 45}ms` }}>
          <rect x="20" y={96 + i * 20} width="370" height="18" rx="4" fill={i % 2 ? 'rgba(255,255,255,0.02)' : 'transparent'} />
          <rect x="410" y={96 + i * 20} width="370" height="18" rx="4" fill={i % 2 ? 'rgba(255,255,255,0.02)' : 'transparent'} />
          <text x="34" y={109 + i * 20} fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>{a}</text>
          <text x="110" y={109 + i * 20} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{b}</text>
          <text x="424" y={109 + i * 20} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{c}</text>
        </g>
      ))}
      <line x1="400" y1="96" x2="400" y2="256" stroke="rgba(255,255,255,0.12)" />

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="266" width="370" height="164" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="34" y="286" fill="#c4ff00" fontSize="9.6" fontWeight="800" fontFamily={FONT}>OLAP OPERATIONS (5)</text>
        <text x="34" y="308" fill="#6fb2ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Roll-up</text>
        <text x="110" y="308" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>detail → summary (city → state), aggregation</text>
        <text x="34" y="330" fill="#00d4ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Drill-down</text>
        <text x="110" y="330" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>summary → detail (year → quarter → month)</text>
        <text x="34" y="352" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Slice</text>
        <text x="110" y="352" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>fix one dimension (only 2025 data)</text>
        <text x="34" y="374" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Dice</text>
        <text x="110" y="374" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>select a range on two or more dimensions</text>
        <text x="34" y="396" fill="#ff7ab2" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Pivot</text>
        <text x="110" y="396" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>rows ↔ columns rotate (cross-tab view)</text>
        <text x="34" y="418" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Cube, rollup() and grouping sets in SQL</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x="410" y="266" width="370" height="164" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.4)" />
        <text x="424" y="286" fill="#6fb2ff" fontSize="9.6" fontWeight="800" fontFamily={FONT}>TYPES OF OLAP SERVER</text>
        <text x="424" y="308" fill="#6fb2ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>ROLAP</text>
        <text x="484" y="308" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>on relational tables — scalable, flexible</text>
        <text x="424" y="330" fill="#00d4ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>MOLAP</text>
        <text x="484" y="330" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>pre-computed cube — fastest, more storage</text>
        <text x="424" y="352" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>HOLAP</text>
        <text x="484" y="352" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>hybrid — detail relational, summary cube</text>
        <text x="424" y="376" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Warehouse = the home of the data; OLAP = the way to think over it</text>
        <text x="424" y="396" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Tools: SSAS, Essbase, ClickHouse, DuckDB, BigQuery</text>
        <text x="424" y="418" fill="#ffd166" fontSize="7.8" fontFamily={FONT}>Real systems: write on OLTP, ELT into the DW, then read with OLAP</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '720ms' }}>
        <rect x="20" y="444" width="760" height="28" rx="7" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.35)" />
        <text x="400" y="462" textAnchor="middle" fill="#00ff88" fontSize="8.8" fontFamily={FONT}>
          One question: OLTP asks “what should happen now”, OLAP asks “what happened last year and what comes next”
        </text>
      </g>

      <text x="400" y="492" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: OLTP is transactional and normalised, OLAP is analytical, historical and dimensional
      </text>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 1 · Applications of classification
// ============================================================
export function ClassificationAppsDiagram() {
  const domains = [
    ['SPAM FILTER', 'from, subject, links, keywords', 'spam / not spam', '#00d4ff'],
    ['FRAUD DETECTION', 'amount, time, city, device', 'fraud / genuine', '#ff0080'],
    ['MEDICAL DIAGNOSIS', 'scan, age, BP, lab values', 'disease / healthy', '#00ff88'],
    ['CREDIT SCORING', 'income, CIBIL, EMI ratio', 'default / safe', '#ff8800'],
    ['CHURN PREDICTION', 'tenure, usage, complaints', 'churn / stay', '#aa00ff'],
    ['SENTIMENT ANALYSIS', 'review text, ratings', 'positive / negative', '#ffd166'],
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Applications of classification: a supervised pipeline that maps input features through a classifier to a discrete label, used in spam, fraud, medical, credit, churn and sentiment problems">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Applications of Classification
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        Features in, a discrete label out — that is classification
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="240" height="64" rx="9" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.45)" />
        <text x="140" y="86" textAnchor="middle" fill="#00d4ff" fontSize="9.8" fontWeight="800" fontFamily={FONT}>1 · INPUT FEATURES (X)</text>
        <text x="140" y="104" textAnchor="middle" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>age · income · pixels · words</text>
        <text x="140" y="119" textAnchor="middle" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>numerical + categorical</text>

        <rect x="280" y="64" width="240" height="64" rx="9" fill="rgba(196,255,0,0.08)" stroke="rgba(196,255,0,0.45)" />
        <text x="400" y="86" textAnchor="middle" fill="#c4ff00" fontSize="9.8" fontWeight="800" fontFamily={FONT}>2 · CLASSIFIER (model)</text>
        <text x="400" y="104" textAnchor="middle" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>logistic · tree · SVM · KNN · NB</text>
        <text x="400" y="119" textAnchor="middle" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>learns the decision boundary</text>

        <rect x="540" y="64" width="240" height="64" rx="9" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.45)" />
        <text x="660" y="86" textAnchor="middle" fill="#00ff88" fontSize="9.8" fontWeight="800" fontFamily={FONT}>3 · DISCRETE LABEL (Y)</text>
        <text x="660" y="104" textAnchor="middle" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>spam · fraud · disease · churn</text>
        <text x="660" y="119" textAnchor="middle" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>category, not a number</text>

        <path d="M262 96 L276 96 M270 91 L276 96 L270 101" stroke="#6fb2ff" strokeWidth="1.4" fill="none" />
        <path d="M522 96 L536 96 M530 91 L536 96 L530 101" stroke="#6fb2ff" strokeWidth="1.4" fill="none" />
        <text x="400" y="146" textAnchor="middle" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          training data = features + correct labels  →  supervised learning
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        {domains.map(([name, feat, out, color], i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = 20 + col * 390;
          const y = 166 + row * 96;
          return (
            <g key={name}>
              <rect x={x} y={y} width="370" height="82" rx="9" fill="rgba(255,255,255,0.03)" stroke={`${color}66`} />
              <rect x={x} y={y} width="4" height="82" rx="2" fill={color} />
              <text x={x + 16} y={y + 20} fill={color} fontSize="9.6" fontWeight="800" fontFamily={FONT}>{name}</text>
              <text x={x + 16} y={y + 40} fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>features:</text>
              <text x={x + 70} y={y + 40} fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>{feat}</text>
              <text x={x + 16} y={y + 58} fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>classes:</text>
              <text x={x + 70} y={y + 58} fill={color} fontSize="8.4" fontWeight="700" fontFamily={FONT}>{out}</text>
              <text x={x + 16} y={y + 74} fill="#7d8db3" fontSize="7.6" fontFamily={FONT}>
                {['precision + recall important', 'imbalanced data, cost of FN high', 'recall matters most', 'the cost of both FP and FN', 'send the offer from the probabilities', 'F1 + confusion matrix'][i]}
              </text>
            </g>
          );
        })}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="458" width="760" height="44" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.35)" />
        <text x="34" y="476" fill="#c4ff00" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Types: binary (2 classes) · multi-class (3+, exclusive) · multi-label (several labels at once)
        </text>
        <text x="34" y="492" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Exam tip: for each application write the features, the classes and the benefit — 4 to 5 examples are enough
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 2 · Types of machine learning
// ============================================================
export function MLTypesDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Three types of machine learning: supervised with labelled data, unsupervised with unlabelled data, and reinforcement learning with reward from an environment, plus semi-supervised and self-supervised variants">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Types of Machine Learning
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        Whether the data carries a label — that is the difference between the three types
      </text>

      {[
        {
          x: 20, color: '#00d4ff', title: '1 · SUPERVISED', sub: 'labelled data (X + Y)',
          lines: [
            ['Data', 'the correct answer with every row'],
            ['Task', 'classification + regression'],
            ['Algo', 'logistic, tree, SVM, KNN, NB'],
            ['Example', 'spam, churn, price predict'],
            ['Metric', 'accuracy, F1, RMSE, R2'],
          ],
        },
        {
          x: 280, color: '#00ff88', title: '2 · UNSUPERVISED', sub: 'only data (X)',
          lines: [
            ['Data', 'there is no label'],
            ['Task', 'clustering, association, PCA'],
            ['Algo', 'K-means, DBSCAN, Apriori'],
            ['Example', 'segmentation, basket analysis'],
            ['Metric', 'silhouette, within-cluster SSE'],
          ],
        },
        {
          x: 540, color: '#ff8800', title: '3 · REINFORCEMENT', sub: 'learning from reward',
          lines: [
            ['Data', 'interaction with the environment'],
            ['Task', 'learn a policy (state to action)'],
            ['Algo', 'Q-learning, DQN, PPO'],
            ['Example', 'game AI, robot, self-driving'],
            ['Metric', 'average reward, regret'],
          ],
        },
      ].map(({ x, color, title, sub, lines }) => (
        <g key={title} className="diagram-pop" style={{ animationDelay: '100ms' }}>
          <rect x={x} y="64" width="240" height="250" rx="10" fill="rgba(255,255,255,0.03)" stroke={`${color}66`} />
          <rect x={x} y="64" width="240" height="30" rx="10" fill={`${color}1f`} />
          <text x={x + 120} y="84" textAnchor="middle" fill={color} fontSize="10" fontWeight="800" fontFamily={FONT}>{title}</text>
          <text x={x + 120} y="112" textAnchor="middle" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>{sub}</text>
          <line x1={x + 16} y1="120" x2={x + 224} y2="120" stroke="rgba(255,255,255,0.12)" />
          {lines.map(([k, v], i) => (
            <g key={k}>
              <text x={x + 16} y={142 + i * 32} fill={color} fontSize="8.2" fontWeight="700" fontFamily={FONT}>{k}</text>
              <text x={x + 16} y={158 + i * 32} fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>{v}</text>
            </g>
          ))}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="20" y="330" width="500" height="112" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.4)" />
        <text x="34" y="350" fill="#6fb2ff" fontSize="9.6" fontWeight="800" fontFamily={FONT}>DECIDING THE TYPE FROM THE DATA</text>
        <text x="34" y="372" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>labels available?  yes → SUPERVISED  (choose classification or regression)</text>
        <text x="34" y="392" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>no labels, only data?  → UNSUPERVISED  (clusters, rules, components)</text>
        <text x="34" y="412" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>an action earns a reward?  → REINFORCEMENT (policy)</text>
        <text x="34" y="432" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>a little labelled + much unlabelled → semi-supervised</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="540" y="330" width="240" height="112" rx="9" fill="rgba(255,136,0,0.05)" stroke="rgba(255,136,0,0.4)" />
        <text x="554" y="350" fill="#ff8800" fontSize="9.6" fontWeight="800" fontFamily={FONT}>THE RL LOOP</text>
        <text x="554" y="372" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>agent → action → environment</text>
        <text x="554" y="390" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>environment → state + reward</text>
        <text x="554" y="408" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>the agent updates its policy</text>
        <text x="554" y="428" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>explore vs exploit · delayed reward</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="20" y="454" width="760" height="46" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="472" fill="#c4ff00" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Extra types: semi-supervised (a little labelled) · self-supervised (LLM pre-training) · transfer learning (fine-tune)
        </text>
        <text x="34" y="490" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Exam line: supervised = with a teacher, unsupervised = without a teacher, reinforcement = from reward
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 3 · Linear regression
// ============================================================
export function LinearRegressionDiagram() {
  const pts = [
    [1, 2.2], [2, 4.1], [3, 4.8], [4, 4.2],
  ];
  const sx = (x) => 80 + (x - 0.5) * 66;
  const sy = (y) => 360 - (y - 1) * 52;
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Linear regression: a best fit line through scatter points, residual distances, the equation Y equals 2 plus 0.7 X, the OLS formulas and the assumptions of the model">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Linear Regression — best fit line
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        Y = b0 + b1X — the line that minimises squared error
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="410" height="330" rx="9" fill="rgba(0,255,136,0.04)" stroke="rgba(0,255,136,0.35)" />
        <line x1="80" y1="360" x2="400" y2="360" stroke="rgba(255,255,255,0.35)" />
        <line x1="80" y1="360" x2="80" y2="100" stroke="rgba(255,255,255,0.35)" />
        <text x="400" y="380" textAnchor="end" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>X (experience years)</text>
        <text x="72" y="104" textAnchor="end" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>Y (salary)</text>

        <line x1={sx(0.6)} y1={sy(2 + 0.7 * 0.6)} x2={sx(4.4)} y2={sy(2 + 0.7 * 4.4)}
          stroke="#00ff88" strokeWidth="2.4" />
        <text x="396" y="292" textAnchor="end" fill="#00ff88" fontSize="9.2" fontWeight="700" fontFamily={FONT}>
          Y = 2 + 0.7X
        </text>

        {pts.map(([x, y]) => {
          const py = sy(y);
          const ly = sy(2 + 0.7 * x);
          return (
            <g key={x}>
              <line x1={sx(x)} y1={py} x2={sx(x)} y2={ly} stroke="#ff7a90" strokeDasharray="3 3" strokeWidth="1.2" />
              <circle cx={sx(x)} cy={py} r="4.4" fill="#00d4ff" stroke="#0b1020" strokeWidth="1.2" />
            </g>
          );
        })}
        <text x="96" y="142" fill="#ff7a90" fontSize="8.4" fontFamily={FONT}>— — residual (y − yhat)</text>
        <text x="96" y="124" fill="#00d4ff" fontSize="8.4" fontFamily={FONT}>● actual data point</text>
        <text x="34" y="86" fill="#9ab0e0" fontSize="8.6" fontFamily={FONT}>OLS: b1 = Σ(x−xbar)(y−ybar) / Σ(x−xbar)² · b0 = ybar − b1·xbar</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="450" y="64" width="330" height="104" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="464" y="84" fill="#c4ff00" fontSize="9.6" fontWeight="800" fontFamily={FONT}>MODEL</text>
        <text x="464" y="104" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>simple: Y = b0 + b1X</text>
        <text x="464" y="122" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>multiple: Y = b0 + b1X1 + … + bnXn</text>
        <text x="464" y="140" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>b1 = slope (how much Y rises per unit of X)</text>
        <text x="464" y="156" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>b0 = intercept (value of Y at X = 0)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="450" y="180" width="330" height="98" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="464" y="200" fill="#00d4ff" fontSize="9.6" fontWeight="800" fontFamily={FONT}>COST AND TRAINING</text>
        <text x="464" y="220" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>MSE J = (1/n) Σ (yi − yhat_i)²</text>
        <text x="464" y="240" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>gradient descent: b ← b − α·∂J/∂b</text>
        <text x="464" y="258" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>closed form: theta = (X^TX)^-1X^TY</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x="450" y="290" width="330" height="104" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.4)" />
        <text x="464" y="310" fill="#ff8800" fontSize="9.6" fontWeight="800" fontFamily={FONT}>ASSUMPTIONS</text>
        <text x="464" y="330" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>linearity · independence of errors</text>
        <text x="464" y="348" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>homoscedasticity · normal residuals</text>
        <text x="464" y="366" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>no multicollinearity (VIF 5–10)</text>
        <text x="464" y="384" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>evaluation: R², adjusted R², RMSE</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="408" width="760" height="92" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="428" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>SOLVED EXAMPLE (X = 1,2,3,4 · Y = 2,4,5,4)</text>
        <text x="34" y="448" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>xbar = 2.5, ybar = 3.75 · Σ(x−xbar)(y−ybar) = 3.5 · Σ(x−xbar)² = 5.0</text>
        <text x="34" y="466" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>b1 = 3.5 / 5.0 = 0.7 · b0 = 3.75 − 0.7(2.5) = 2.0 → Y = 2 + 0.7X</text>
        <text x="34" y="486" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>at X = 5 the prediction is 5.5 · the output is continuous, so the metric is R²/RMSE, not accuracy</text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 4 · Logistic regression
// ============================================================
export function LogisticRegressionDiagram() {
  const pts = Array.from({ length: 49 }, (_, i) => {
    const z = -6 + (i * 12) / 48;
    const p = 1 / (1 + Math.exp(-z));
    return [60 + ((z + 6) / 12) * 330, 350 - p * 240];
  });
  const path = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Logistic regression: linear score z passed through the sigmoid function to give a probability between 0 and 1, the 0.5 threshold, log odds form and the log loss objective">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Logistic Regression — probability from the sigmoid
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        score z → sigmoid → probability p → 0.5 threshold → class
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="420" height="336" rx="9" fill="rgba(255,136,0,0.04)" stroke="rgba(255,136,0,0.35)" />
        <line x1="60" y1="350" x2="400" y2="350" stroke="rgba(255,255,255,0.35)" />
        <line x1="60" y1="350" x2="60" y2="96" stroke="rgba(255,255,255,0.35)" />
        <text x="400" y="370" textAnchor="end" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>linear score z = b0 + b1X</text>
        <text x="52" y="100" textAnchor="end" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>p</text>
        <text x="48" y="356" textAnchor="end" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>0</text>
        <text x="48" y="116" textAnchor="end" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>1</text>

        <line x1="60" y1={350 - 0.5 * 240} x2="400" y2={350 - 0.5 * 240} stroke="rgba(255,122,144,0.6)" strokeDasharray="4 4" />
        <text x="396" y={350 - 0.5 * 240 - 6} textAnchor="end" fill="#ff7a90" fontSize="8.2" fontFamily={FONT}>threshold 0.5</text>
        <path d={path} stroke="#ff8800" strokeWidth="2.6" fill="none" />
        <text x="104" y="150" fill="#ff8800" fontSize="9" fontWeight="700" fontFamily={FONT}>p = 1 / (1 + e^-z)</text>

        <circle cx={60 + (7 / 12) * 330} cy={350 - (1 / (1 + Math.exp(-1))) * 240} r="4.4" fill="#00ff88" />
        <line x1={60 + (7 / 12) * 330} y1={350 - 0.731 * 240} x2={60 + (7 / 12) * 330} y2="350" stroke="rgba(0,255,136,0.5)" strokeDasharray="3 3" />
        <text x={60 + (7 / 12) * 330 + 8} y={350 - 0.731 * 240 + 4} fill="#00ff88" fontSize="8.2" fontFamily={FONT}>z = 1 → p = 0.731</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="460" y="64" width="320" height="120" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="474" y="84" fill="#00d4ff" fontSize="9.6" fontWeight="800" fontFamily={FONT}>EQUATIONS</text>
        <text x="474" y="104" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>z = b0 + b1X1 + … + bnXn</text>
        <text x="474" y="122" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>p = 1 / (1 + e^-z)</text>
        <text x="474" y="140" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>log-odds: ln(p/(1−p)) = z</text>
        <text x="474" y="158" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>e^b1 = odds ratio (per unit of X)</text>
        <text x="474" y="174" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>p ≥ 0.5 → class 1, otherwise class 0</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="460" y="196" width="320" height="92" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="474" y="216" fill="#c4ff00" fontSize="9.6" fontWeight="800" fontFamily={FONT}>SIGMOID READY RECKONER</text>
        <text x="474" y="236" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>z = −2 → 0.12 · z = −1 → 0.27</text>
        <text x="474" y="254" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>z = 0 → 0.50 · z = 1 → 0.73 · z = 2 → 0.88</text>
        <text x="474" y="274" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>curve S-shaped, output always between 0 and 1</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="460" y="300" width="320" height="100" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,122,144,0.4)" />
        <text x="474" y="320" fill="#ff7a90" fontSize="9.6" fontWeight="800" fontFamily={FONT}>LOG LOSS (CROSS-ENTROPY)</text>
        <text x="474" y="340" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>J = −(1/n) Σ [ y·log p + (1−y)·log(1−p) ]</text>
        <text x="474" y="360" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>a confident wrong prediction is penalised heavily</text>
        <text x="474" y="378" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>softmax regression for multi-class</text>
        <text x="474" y="394" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>L1/L2 regularisation controls overfitting</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="20" y="412" width="760" height="88" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="432" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>SOLVED EXAMPLE — default risk model</text>
        <text x="34" y="452" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>z = −3 + 0.05 × income · income 80,000 → z = −3 + 4 = 1</text>
        <text x="34" y="470" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>p = 1/(1 + e^-1) = 0.731 → 0.731 greater than 0.5 → predict default = Yes (73% risk)</text>
        <text x="34" y="490" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>lowering the threshold to 0.35 raises recall · the boundary is linear, so tree/SVM is better on non-linear data</text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 5 · Naive Bayes
// ============================================================
export function NaiveBayesDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Naive Bayes classifier: Bayes theorem split into prior, likelihood and posterior, the conditional independence assumption, the spam example computation and the Gaussian, multinomial and Bernoulli variants">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Naive Bayes — classification from Bayes theorem
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        prior × likelihood = posterior — that is all there is to compare
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="760" height="56" rx="9" fill="rgba(170,0,255,0.08)" stroke="rgba(170,0,255,0.45)" />
        <text x="400" y="88" textAnchor="middle" fill="#c08bff" fontSize="11" fontWeight="800" fontFamily={FONT}>
          P(C | X) = P(X | C) × P(C) / P(X)
        </text>
        <text x="400" y="108" textAnchor="middle" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          posterior · likelihood · prior · evidence — evidence is the same for all classes, so drop it from the comparison
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="20" y="132" width="240" height="112" rx="9" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="34" y="152" fill="#00d4ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>1 · PRIOR  P(C)</text>
        <text x="34" y="172" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>share of the class in the training data</text>
        <text x="34" y="192" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>P(spam) = 0.4</text>
        <text x="34" y="210" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>P(ham) = 0.6</text>
        <text x="34" y="230" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>obtained by counting alone</text>

        <rect x="280" y="132" width="240" height="112" rx="9" fill="rgba(196,255,0,0.06)" stroke="rgba(196,255,0,0.4)" />
        <text x="294" y="152" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>2 · LIKELIHOOD  P(X|C)</text>
        <text x="294" y="172" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>how common the features are in that class</text>
        <text x="294" y="192" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>P(free | spam) = 0.6</text>
        <text x="294" y="210" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>P(free | ham) = 0.05</text>
        <text x="294" y="230" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>multiply assuming independence</text>

        <rect x="540" y="132" width="240" height="112" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="554" y="152" fill="#00ff88" fontSize="9.4" fontWeight="800" fontFamily={FONT}>3 · POSTERIOR  P(C|X)</text>
        <text x="554" y="172" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>spam: 0.4 × 0.6 = 0.24</text>
        <text x="554" y="190" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>ham: 0.6 × 0.05 = 0.03</text>
        <text x="554" y="208" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>0.24/0.27 = 0.889 spam</text>
        <text x="554" y="230" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>the class with the highest posterior wins</text>

        <path d="M262 188 L274 188 M268 183 L274 188 L268 193" stroke="#6fb2ff" strokeWidth="1.4" fill="none" />
        <path d="M522 188 L534 188 M528 183 L534 188 L528 193" stroke="#6fb2ff" strokeWidth="1.4" fill="none" />
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="20" y="258" width="370" height="152" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.4)" />
        <text x="34" y="278" fill="#ff8800" fontSize="9.4" fontWeight="800" fontFamily={FONT}>NAIVE ASSUMPTION — conditional independence</text>
        <text x="34" y="298" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>P(X | C) = P(x1|C) × P(x2|C) × … × P(xn|C)</text>
        <text x="34" y="318" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>features are assumed independent of each other</text>
        <text x="34" y="336" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>false on real data, yet it works on text</text>
        <text x="34" y="358" fill="#c4ff00" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Multi-word example</text>
        <text x="34" y="376" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>P(free|spam) × P(offer|spam) × P(spam) …</text>
        <text x="34" y="394" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>in practice the sum of log probabilities (avoids underflow)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="410" y="258" width="370" height="152" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.4)" />
        <text x="424" y="278" fill="#6fb2ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>THREE VARIANTS</text>
        <text x="424" y="300" fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Gaussian</text>
        <text x="500" y="300" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>continuous features, normal distribution</text>
        <text x="424" y="322" fill="#00ff88" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Multinomial</text>
        <text x="500" y="322" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>word counts, TF-IDF — a favourite for text</text>
        <text x="424" y="344" fill="#ff8800" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Bernoulli</text>
        <text x="500" y="344" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>binary presence — the word is there or not</text>
        <text x="424" y="370" fill="#ffd166" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Laplace smoothing</text>
        <text x="424" y="388" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>(count + 1) / (total + k) — zero frequency fix</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x="20" y="424" width="760" height="76" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="444" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Pros: very fast, works on little data, multi-class is natural, the best baseline for text
        </text>
        <text x="34" y="464" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Cons: independence assumption unrealistic, zero-frequency problem, probabilities poorly calibrated
        </text>
        <text x="34" y="486" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Applications: spam filter, sentiment analysis, news categorisation, language detection, medical baseline
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 6 · K nearest neighbour
// ============================================================
export function KnnDiagram() {
  const query = [232, 236];
  const cats = [[150, 250], [186, 296], [196, 214], [120, 198]];
  const dogs = [[318, 132], [352, 196], [292, 122]];
  const near = [[196, 214], [150, 250], [292, 122]];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="K nearest neighbour: query point with k equals 3 nearest neighbours voting, distance formulas, choice of k and the curse of dimensionality">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        K-Nearest Neighbor — the neighbours decide
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        majority vote of the k nearest points — no training, only distance
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="440" height="336" rx="9" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.35)" />
        <circle cx={query[0]} cy={query[1]} r="86" fill="rgba(196,255,0,0.05)" stroke="rgba(196,255,0,0.45)" strokeDasharray="5 4" />
        <text x={query[0] + 90} y={query[1] - 78} fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>radius → k = 3</text>

        {near.map(([x, y]) => (
          <line key={`${x}-${y}`} x1={query[0]} y1={query[1]} x2={x} y2={y} stroke="rgba(196,255,0,0.5)" strokeWidth="1.2" strokeDasharray="3 3" />
        ))}
        {cats.map(([x, y]) => (
          <g key={`c${x}`}>
            <circle cx={x} cy={y} r="7" fill="#00d4ff" stroke="#0b1020" strokeWidth="1.2" />
            <circle cx={x} cy={y} r="7" fill="none" stroke="#00d4ff" strokeWidth="0.6" />
          </g>
        ))}
        {dogs.map(([x, y]) => (
          <rect key={`d${x}`} x={x - 6} y={y - 6} width="13" height="13" rx="2" fill="#ff0080" stroke="#0b1020" strokeWidth="1.2" />
        ))}

        <circle cx={query[0]} cy={query[1]} r="9" fill="#c4ff00" />
        <text x={query[0] + 12} y={query[1] - 10} fill="#c4ff00" fontSize="8.6" fontWeight="700" fontFamily={FONT}>? query point</text>

        <text x="40" y="98" fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>● class A (cat)</text>
        <text x="160" y="98" fill="#ff0080" fontSize="8.6" fontWeight="700" fontFamily={FONT}>■ class B (dog)</text>

        <rect x="40" y="352" width="400" height="34" rx="6" fill="rgba(196,255,0,0.08)" stroke="rgba(196,255,0,0.4)" />
        <text x="52" y="373" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>
          3 nearest: 2 cat + 1 dog  →  majority vote  →  CAT
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="480" y="64" width="300" height="106" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,255,136,0.4)" />
        <text x="494" y="84" fill="#00ff88" fontSize="9.4" fontWeight="800" fontFamily={FONT}>DISTANCE MEASURES</text>
        <text x="494" y="104" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Euclidean: √Σ (xi − yi)²</text>
        <text x="494" y="122" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Manhattan: Σ |xi − yi|</text>
        <text x="494" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Minkowski: (Σ|xi−yi|^p)^(1/p)</text>
        <text x="494" y="158" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>Hamming or cosine for text</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="480" y="182" width="300" height="112" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="494" y="202" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>CHOOSING K</text>
        <text x="494" y="222" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>k = 1 → overfit, noise follow</text>
        <text x="494" y="240" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>k badha → smooth, underfit</text>
        <text x="494" y="258" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>keep it odd (avoids a tie)</text>
        <text x="494" y="276" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>rule of thumb k ≈ √n, best k by CV</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x="480" y="306" width="300" height="102" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,122,144,0.4)" />
        <text x="494" y="326" fill="#ff7a90" fontSize="9.4" fontWeight="800" fontFamily={FONT}>WATCH OUT</text>
        <text x="494" y="346" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>feature scaling is compulsory</text>
        <text x="494" y="364" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>curse of dimensionality — apply PCA</text>
        <text x="494" y="382" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>predict cost O(n·d) per query</text>
        <text x="494" y="396" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>lazy learner — training instant, memory heavy</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="424" width="760" height="76" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="444" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Pros: simple, no training, non-linear boundary, multi-class directly, regression too (mean of neighbours)
        </text>
        <text x="34" y="464" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Cons: slow prediction, the whole data in memory, scaling essential, fails in high dimension
        </text>
        <text x="34" y="486" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Applications: digit recognition, image retrieval, recommendation, credit risk, missing value imputation
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 7 · Decision tree
// ============================================================
export function DecisionTreeDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Decision tree for the play tennis dataset: root Outlook with Sunny, Overcast and Rain branches, humidity and wind tests, leaves with yes and no classes, entropy and information gain formulas">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Decision Tree — reach the class by asking questions
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        choose the best split by entropy / information gain
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="500" height="336" rx="9" fill="rgba(255,0,128,0.04)" stroke="rgba(255,0,128,0.3)" />

        <rect x="185" y="76" width="150" height="34" rx="7" fill="rgba(255,0,128,0.15)" stroke="#ff0080" />
        <text x="260" y="98" textAnchor="middle" fill="#ff7ab2" fontSize="9.2" fontWeight="800" fontFamily={FONT}>OUTLOOK?</text>
        <text x="356" y="90" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>root node</text>

        {[
          ['Sunny', 104, 210],
          ['Overcast', 250, 210],
          ['Rain', 416, 210],
        ].map(([label, x, y]) => (
          <g key={label}>
            <line x1="260" y1="110" x2={x} y2={y - 34} stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
            <rect x={x - 70} y={y - 34} width="140" height="30" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" />
            <text x={x} y={y - 14} textAnchor="middle" fill="#dbe6ff" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
              {label === 'Overcast' ? 'Overcast → YES' : `${label} branch`}
            </text>
          </g>
        ))}

        <rect x="29" y="228" width="150" height="32" rx="6" fill="rgba(0,212,255,0.12)" stroke="rgba(0,212,255,0.55)" />
        <text x="104" y="249" textAnchor="middle" fill="#00d4ff" fontSize="8.8" fontWeight="700" fontFamily={FONT}>HUMIDITY?</text>
        <line x1="104" y1="176" x2="104" y2="228" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />

        <rect x="356" y="228" width="150" height="32" rx="6" fill="rgba(0,212,255,0.12)" stroke="rgba(0,212,255,0.55)" />
        <text x="431" y="249" textAnchor="middle" fill="#00d4ff" fontSize="8.8" fontWeight="700" fontFamily={FONT}>WIND?</text>
        <line x1="416" y1="176" x2="416" y2="228" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />

        {[
          ['High → NO', 29, 296, '#ff7a90'],
          ['Normal → YES', 29, 342, '#00ff88'],
          ['Strong → NO', 360, 296, '#ff7a90'],
          ['Weak → YES', 360, 342, '#00ff88'],
        ].map(([label, x, y, color]) => (
          <g key={label}>
            <line x1={x + 75} y1={y - 26} x2={x + 75} y2={y} stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
            <rect x={x} y={y} width="150" height="30" rx="15" fill={`${color}1f`} stroke={`${color}99`} />
            <text x={x + 75} y={y + 20} textAnchor="middle" fill={color} fontSize="8.8" fontWeight="700" fontFamily={FONT}>{label}</text>
          </g>
        ))}

        <text x="34" y="392" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          leaf = class · internal node = attribute test · branch = outcome of the test
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="540" y="64" width="240" height="120" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="554" y="84" fill="#c4ff00" fontSize="9.2" fontWeight="800" fontFamily={FONT}>SPLIT MEASURES</text>
        <text x="554" y="104" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>Entropy H = −Σ pi·log2 pi</text>
        <text x="554" y="122" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>IG = H(S) − Σ (|Sv|/|S|)·H(Sv)</text>
        <text x="554" y="140" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>Gini = 1 − Σ pi²</text>
        <text x="554" y="158" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>Gain ratio = IG / SplitInfo</text>
        <text x="554" y="176" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>0 = pure node, 1 = 50-50 mix</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="540" y="196" width="240" height="106" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="554" y="216" fill="#00d4ff" fontSize="9.2" fontWeight="800" fontFamily={FONT}>PLAY TENNIS NUMBERS</text>
        <text x="554" y="236" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>parent: 9 yes / 5 no → H = 0.940</text>
        <text x="554" y="254" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>outlook child H = 0.693</text>
        <text x="554" y="272" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>IG = 0.940 − 0.693 = 0.247</text>
        <text x="554" y="292" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>highest gain = root node</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="540" y="314" width="240" height="86" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.4)" />
        <text x="554" y="334" fill="#ff8800" fontSize="9.2" fontWeight="800" fontFamily={FONT}>ALGORITHMS</text>
        <text x="554" y="352" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>ID3 — information gain</text>
        <text x="554" y="370" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>C4.5 — gain ratio, continuous</text>
        <text x="554" y="388" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>CART — Gini, binary, regression</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="20" y="424" width="760" height="76" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="444" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Pros: interpretable rules, no scaling, mixed data, feature importance, non-linear
        </text>
        <text x="34" y="464" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Cons: overfits, unstable, greedy split, axis-parallel boundary only
        </text>
        <text x="34" y="486" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Fix: pre-pruning (max depth) · post-pruning (cost complexity) · random forest / boosting
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 8 · Support vector machine
// ============================================================
export function SvmDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Support vector machine: maximum margin hyperplane separating two classes, support vectors on the margin, soft margin parameter C, kernel trick and hinge loss">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Support Vector Machine — maximum margin
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        choose the line farthest from both classes — the wider the margin, the better the generalisation
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="430" height="336" rx="9" fill="rgba(0,255,136,0.04)" stroke="rgba(0,255,136,0.3)" />

        <polygon points="90,224 370,104 370,172 90,292" fill="rgba(196,255,0,0.06)" />

        <line x1="90" y1="258" x2="370" y2="138" stroke="#c4ff00" strokeWidth="2.4" />
        <line x1="90" y1="224" x2="370" y2="104" stroke="#00ff88" strokeWidth="1.2" strokeDasharray="6 4" />
        <line x1="90" y1="292" x2="370" y2="172" stroke="#00ff88" strokeWidth="1.2" strokeDasharray="6 4" />

        <text x="300" y="126" fill="#c4ff00" fontSize="8.6" fontWeight="700" fontFamily={FONT}>hyperplane: w·x + b = 0</text>
        <text x="300" y="98" textAnchor="end" fill="#00ff88" fontSize="8.2" fontFamily={FONT}>margin 2/|w|</text>
        <line x1="150" y1="150" x2="150" y2="228" stroke="#00ff88" strokeWidth="1" />
        <path d="M146 154 L150 148 L154 154 M146 224 L150 230 L154 224" stroke="#00ff88" strokeWidth="1" fill="none" />

        {[[116, 172], [160, 150], [196, 200]].map(([x, y]) => (
          <circle key={`p${x}`} cx={x} cy={y} r="5.6" fill="#00d4ff" stroke="#0b1020" strokeWidth="1.1" />
        ))}
        {[[236, 268], [280, 244], [312, 214]].map(([x, y]) => (
          <rect key={`n${x}`} x={x - 5} y={y - 5} width="11" height="11" rx="2" fill="#ff0080" stroke="#0b1020" strokeWidth="1.1" />
        ))}

        <circle cx="160" cy="150" r="10" fill="none" stroke="#c4ff00" strokeWidth="1.6" />
        <circle cx="196" cy="200" r="10" fill="none" stroke="#c4ff00" strokeWidth="1.6" />
        <circle cx="236" cy="268" r="10" fill="none" stroke="#c4ff00" strokeWidth="1.6" />

        <text x="40" y="98" fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>● class +1</text>
        <text x="150" y="98" fill="#ff0080" fontSize="8.6" fontWeight="700" fontFamily={FONT}>■ class −1</text>
        <text x="40" y="330" fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>◯ support vectors — the points on the margin</text>
        <text x="40" y="350" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>remove the other points and the hyperplane stays the same</text>
        <text x="40" y="376" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>objective: min |w|²/2  →  margin 2/|w| maximise</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="470" y="64" width="310" height="128" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="484" y="84" fill="#00d4ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>KERNEL TRICK</text>
        <text x="484" y="102" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>K(xi, xj) = φ(xi)·φ(xj)</text>
        <text x="484" y="122" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>linear: xi·xj → simple, text</text>
        <text x="484" y="140" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>polynomial: (γ xi·xj + r)^d</text>
        <text x="484" y="158" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>RBF: exp(−γ|xi − xj|²) → default</text>
        <text x="484" y="176" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>the mapping is never computed explicitly</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="470" y="204" width="310" height="106" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.4)" />
        <text x="484" y="224" fill="#ff8800" fontSize="9.4" fontWeight="800" fontFamily={FONT}>SOFT MARGIN AND C</text>
        <text x="484" y="242" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>min |w|²/2 + C·Σξ</text>
        <text x="484" y="260" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>large C → strict, risk of overfitting</text>
        <text x="484" y="278" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>small C → tolerant, smooth</text>
        <text x="484" y="298" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>loss = hinge max(0, 1 − y·f(x))</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="470" y="322" width="310" height="78" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,122,144,0.4)" />
        <text x="484" y="342" fill="#ff7a90" fontSize="9.4" fontWeight="800" fontFamily={FONT}>WATCH OUT</text>
        <text x="484" y="360" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>scaling essential · slow on large data</text>
        <text x="484" y="378" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>Platt scaling for probabilities</text>
        <text x="484" y="394" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>multi-class: one-vs-rest or one-vs-one</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="20" y="424" width="760" height="76" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="444" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Pros: best on high-dimensional data, max-margin generalisation, non-linear through a kernel, memory efficient
        </text>
        <text x="34" y="464" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Cons: slow training on large data, tuning C and γ, lower interpretability, no probability output
        </text>
        <text x="34" y="486" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Applications: text classification, face detection, handwriting, gene expression, one-class anomaly detection
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 9 · Confusion matrix
// ============================================================
export function ConfusionMatrixDiagram() {
  const cells = [
    { x: 165, y: 126, label: 'TP', value: '40', note: 'correct positive', color: '#00ff88' },
    { x: 295, y: 126, label: 'FN', value: '10', note: 'miss (Type II)', color: '#ff7a90' },
    { x: 165, y: 210, label: 'FP', value: '5', note: 'false alarm (Type I)', color: '#ff8800' },
    { x: 295, y: 210, label: 'TN', value: '45', note: 'correct negative', color: '#00d4ff' },
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Confusion matrix 2 by 2 with true positive 40, false negative 10, false positive 5 and true negative 45, the metrics derived from it and the meaning of type one and type two errors">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Confusion Matrix — the full account of errors
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        rows = actual class · columns = predicted class
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="460" height="336" rx="9" fill="rgba(255,136,0,0.04)" stroke="rgba(255,136,0,0.3)" />

        <text x="230" y="96" textAnchor="middle" fill="#9ab0e0" fontSize="8.8" fontWeight="700" fontFamily={FONT}>PREDICTED POSITIVE</text>
        <text x="360" y="96" textAnchor="middle" fill="#9ab0e0" fontSize="8.8" fontWeight="700" fontFamily={FONT}>PREDICTED NEGATIVE</text>
        <text x="100" y="170" textAnchor="middle" fill="#9ab0e0" fontSize="8.8" fontWeight="700" fontFamily={FONT}>ACTUAL</text>
        <text x="100" y="186" textAnchor="middle" fill="#9ab0e0" fontSize="8.8" fontWeight="700" fontFamily={FONT}>POSITIVE</text>
        <text x="100" y="262" textAnchor="middle" fill="#9ab0e0" fontSize="8.8" fontWeight="700" fontFamily={FONT}>ACTUAL</text>
        <text x="100" y="278" textAnchor="middle" fill="#9ab0e0" fontSize="8.8" fontWeight="700" fontFamily={FONT}>NEGATIVE</text>

        {cells.map(({ x, y, label, value, note, color }) => (
          <g key={label}>
            <rect x={x} y={y} width="130" height="84" rx="8" fill={`${color}1a`} stroke={`${color}88`} />
            <text x={x + 14} y={y + 22} fill={color} fontSize="10.4" fontWeight="800" fontFamily={FONT}>{label}</text>
            <text x={x + 116} y={y + 40} textAnchor="end" fill={color} fontSize="22" fontWeight="800" fontFamily={FONT}>{value}</text>
            <text x={x + 14} y={y + 64} fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>{note}</text>
          </g>
        ))}

        <text x="34" y="322" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Total = 40 + 10 + 5 + 45 = 100 patients · actual positive = 50, actual negative = 50</text>
        <text x="34" y="344" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Type I error = FP (false alarm) · Type II error = FN (miss)</text>
        <text x="34" y="366" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>In a multi-class problem the matrix becomes k × k — the diagonal holds correct predictions</text>
        <text x="34" y="386" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>Accuracy alone is an incomplete answer — give precision/recall with the matrix</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="500" y="64" width="280" height="336" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="514" y="84" fill="#c4ff00" fontSize="9.6" fontWeight="800" fontFamily={FONT}>METRICS DERIVED FROM IT</text>
        {[
          ['Accuracy', '(TP+TN)/N = 85/100', '0.850'],
          ['Precision', 'TP/(TP+FP) = 40/45', '0.889'],
          ['Recall', 'TP/(TP+FN) = 40/50', '0.800'],
          ['Specificity', 'TN/(TN+FP) = 45/50', '0.900'],
          ['F1 score', '2PR/(P+R)', '0.842'],
          ['Error rate', '(FP+FN)/N = 15/100', '0.150'],
        ].map(([name, formula, value], i) => (
          <g key={name}>
            <text x="514" y={110 + i * 40} fill="#00d4ff" fontSize="8.8" fontWeight="700" fontFamily={FONT}>{name}</text>
            <text x="514" y={124 + i * 40} fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>{formula}</text>
            <text x="764" y={122 + i * 40} textAnchor="end" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>{value}</text>
          </g>
        ))}
        <line x1="514" y1="366" x2="766" y2="366" stroke="rgba(255,255,255,0.12)" />
        <text x="514" y="386" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>recall 0.80 = 10 patients missed</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="20" y="424" width="760" height="76" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="444" fill="#ff8800" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Type I (FP): calling a healthy person sick, marking genuine mail as spam, flagging a genuine transaction as fraud
        </text>
        <text x="34" y="464" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Type II (FN): missing a disease, spam reaching the inbox, failing to catch fraud — usually the more expensive
        </text>
        <text x="34" y="486" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Lower the threshold → fewer FN, more FP (recall up) · raise it → fewer FP, more FN (precision up)
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 10 · Accuracy, precision, recall, F1
// ============================================================
export function ClassificationMetricsDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Accuracy, precision, recall and F1 formulas with the 100 patient example, the precision recall trade-off curve and the accuracy paradox on imbalanced data">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Accuracy · Precision · Recall · F1
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        on imbalanced data accuracy lies — look at precision and recall
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        {[
          { x: 20, y: 64, color: '#00d4ff', name: 'ACCURACY', formula: '(TP + TN) / N', note: 'overall correct · for balanced data', value: '0.850' },
          { x: 400, y: 64, color: '#00ff88', name: 'PRECISION', formula: 'TP / (TP + FP)', note: 'said positive, was true? keeps FP low', value: '0.889' },
          { x: 20, y: 156, color: '#ff8800', name: 'RECALL', formula: 'TP / (TP + FN)', note: 'of the true positives, how many caught? keeps FN low', value: '0.800' },
          { x: 400, y: 156, color: '#aa00ff', name: 'F1 SCORE', formula: '2PR / (P + R)', note: 'harmonic mean · imbalance-safe', value: '0.842' },
        ].map(({ x, y, color, name, formula, note, value }) => (
          <g key={name}>
            <rect x={x} y={y} width="380" height="80" rx="9" fill={`${color}12`} stroke={`${color}66`} />
            <text x={x + 16} y={y + 22} fill={color} fontSize="9.6" fontWeight="800" fontFamily={FONT}>{name}</text>
            <text x={x + 364} y={y + 22} textAnchor="end" fill={color} fontSize="10" fontWeight="800" fontFamily={FONT}>{value}</text>
            <text x={x + 16} y={y + 44} fill="#dbe6ff" fontSize="9" fontFamily={FONT}>{formula}</text>
            <text x={x + 16} y={y + 64} fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>{note}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="20" y="252" width="380" height="152" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <text x="34" y="272" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>ACCURACY PARADOX</text>
        <text x="34" y="292" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>1000 records: 990 negative, 10 positive</text>
        <text x="34" y="310" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>model says all negative → TP 0, FP 0, FN 10, TN 990</text>
        <text x="34" y="330" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>accuracy = 990/1000 = 99%</text>
        <text x="34" y="348" fill="#ff7a90" fontSize="8.4" fontWeight="700" fontFamily={FONT}>recall = 0/10 = 0% · F1 = 0 · model useless</text>
        <text x="34" y="370" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>fix: class weights, SMOTE, threshold tuning</text>
        <text x="34" y="390" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>report: F1, recall, PR-AUC — not accuracy</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="420" y="252" width="360" height="152" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(170,0,255,0.4)" />
        <text x="434" y="272" fill="#c08bff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>PRECISION vs RECALL TRADE-OFF</text>
        <line x1="470" y1="376" x2="740" y2="376" stroke="rgba(255,255,255,0.3)" />
        <line x1="470" y1="376" x2="470" y2="292" stroke="rgba(255,255,255,0.3)" />
        <path d="M470 300 L740 368" stroke="rgba(196,255,0,0.85)" strokeWidth="2.2" fill="none" />
        <text x="740" y="392" textAnchor="end" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>recall →</text>
        <text x="462" y="292" textAnchor="end" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>precision</text>
        <circle cx="500" cy="306" r="4" fill="#00ff88" />
        <rect x="508" y="292" width="160" height="14" rx="3" fill="#0b1020" opacity="0.82" />
        <text x="512" y="303" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>threshold 0.8 → high precision</text>
        <circle cx="700" cy="360" r="4" fill="#ff8800" />
        <rect x="556" y="322" width="140" height="14" rx="3" fill="#0b1020" opacity="0.82" />
        <text x="690" y="333" textAnchor="end" fill="#ff8800" fontSize="7.8" fontFamily={FONT}>threshold 0.3 → high recall</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="424" width="760" height="76" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="444" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Spam filter → precision (genuine mail must not be marked spam) · Cancer screening → recall (a disease must not be missed)
        </text>
        <text x="34" y="464" fill="#dbe6ff" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          F-beta: β = 2 recall-heavy · β = 0.5 precision-heavy · multi-class: macro / micro / weighted average
        </text>
        <text x="34" y="486" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Example values: TP 40, FP 5, FN 10, TN 45 → accuracy 0.85, precision 0.889, recall 0.80, F1 0.842
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 11 · ROC curve and AUC
// ============================================================
export function RocAucDiagram() {
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="ROC curve plotting true positive rate against false positive rate at all thresholds, shaded area under the curve of 0.92, a threshold table and the interpretation scale of AUC values">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        ROC Curve and AUC — the graph over thresholds
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        TPR (recall) vs FPR (1 − specificity), at every threshold
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="420" height="336" rx="9" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.3)" />
        <line x1="80" y1="360" x2="400" y2="360" stroke="rgba(255,255,255,0.35)" />
        <line x1="80" y1="360" x2="80" y2="94" stroke="rgba(255,255,255,0.35)" />
        <text x="400" y="380" textAnchor="end" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>FPR = FP/(FP+TN)</text>
        <text x="74" y="100" textAnchor="end" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>TPR</text>
        <text x="74" y="366" textAnchor="end" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>0</text>
        <text x="74" y="114" textAnchor="end" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>1</text>

        <path d="M80 360 L380 110" stroke="rgba(255,255,255,0.3)" strokeDasharray="5 5" />
        <text x="300" y="238" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>random (AUC 0.5)</text>

        <path d="M80 360 L80 210 L140 160 L200 110 L380 110 L380 360 Z" fill="rgba(0,255,136,0.14)" stroke="none" />
        <path d="M80 360 L80 210 L140 160 L200 110 L380 110" stroke="#00ff88" strokeWidth="2.4" fill="none" />

        <text x="230" y="270" fill="#00ff88" fontSize="12" fontWeight="800" fontFamily={FONT}>AUC = 0.92</text>
        <text x="230" y="288" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>excellent model</text>

        <circle cx="80" cy="210" r="3.6" fill="#00d4ff" />
        <text x="92" y="206" fill="#00d4ff" fontSize="7.8" fontFamily={FONT}>0.65 → TPR 0.6, FPR 0.0</text>
        <circle cx="140" cy="160" r="3.6" fill="#00d4ff" />
        <text x="152" y="182" fill="#00d4ff" fontSize="7.8" fontFamily={FONT}>0.50 → TPR 0.8, FPR 0.2</text>
        <circle cx="200" cy="110" r="3.6" fill="#00d4ff" />
        <text x="212" y="104" fill="#00d4ff" fontSize="7.8" fontFamily={FONT}>0.40 → TPR 1.0, FPR 0.4</text>

        <text x="96" y="336" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>top-left corner = perfect classifier</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="460" y="64" width="320" height="132" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="474" y="84" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>THRESHOLD TABLE</text>
        <text x="474" y="104" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>threshold</text>
        <text x="576" y="104" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>TP / FN</text>
        <text x="656" y="104" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>FP / TN</text>
        <text x="730" y="104" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>TPR</text>
        <text x="768" y="104" textAnchor="end" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>FPR</text>
        {[
          ['0.65', '3 / 2', '0 / 5', '0.6', '0.0'],
          ['0.50', '4 / 1', '1 / 4', '0.8', '0.2'],
          ['0.40', '5 / 0', '2 / 3', '1.0', '0.4'],
          ['0.30', '5 / 0', '3 / 2', '1.0', '0.6'],
        ].map(([t, a, b, tpr, fpr], i) => (
          <g key={t}>
            <text x="474" y={124 + i * 18} fill="#00d4ff" fontSize="8.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x="576" y={124 + i * 18} fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>{a}</text>
            <text x="656" y={124 + i * 18} fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>{b}</text>
            <text x="730" y={124 + i * 18} fill="#00ff88" fontSize="8.2" fontFamily={FONT}>{tpr}</text>
            <text x="768" y={124 + i * 18} textAnchor="end" fill="#ff7a90" fontSize="8.2" fontFamily={FONT}>{fpr}</text>
          </g>
        ))}
        <text x="474" y="190" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>
          {'positive scores 0.90 0.80 0.70 0.60 0.40 · negative 0.55 0.45 0.35 0.25 0.15'}
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="460" y="208" width="320" height="192" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.4)" />
        <text x="474" y="228" fill="#6fb2ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>WHAT AUC MEANS</text>
        {[
          ['0.50', 'random guess — useless', '#ff7a90'],
          ['0.60–0.70', 'weak signal', '#ffd166'],
          ['0.70–0.80', 'acceptable (common)', '#00d4ff'],
          ['0.80–0.90', 'excellent', '#00ff88'],
          ['0.90–1.00', 'outstanding / leakage check', '#c4ff00'],
        ].map(([v, d, c], i) => (
          <g key={v}>
            <text x="474" y={250 + i * 20} fill={c} fontSize="8.4" fontWeight="700" fontFamily={FONT}>{v}</text>
            <text x="544" y={250 + i * 20} fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>{d}</text>
          </g>
        ))}
        <line x1="474" y1="352" x2="766" y2="352" stroke="rgba(255,255,255,0.12)" />
        <text x="474" y="370" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>AUC = the probability that a random positive</text>
        <text x="474" y="386" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>is ranked above a random negative</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="424" width="760" height="76" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="444" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          AUC is threshold-free and invariant to class balance — so two models are easy to compare
        </text>
        <text x="34" y="464" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Under extreme imbalance (fraud 0.5%) ROC looks optimistic — then the PR curve / PR-AUC is better
        </text>
        <text x="34" y="486" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          At deployment choose the threshold from business cost — max F1, or max recall at a target precision
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit III — Diagram 12 · Regression metrics
// ============================================================
export function RegressionMetricsDiagram() {
  const bars = [
    { x: 90, actual: 3, pred: 2, res: '+1' },
    { x: 190, actual: 5, pred: 5, res: '0' },
    { x: 290, actual: 7, pred: 9, res: '−2' },
  ];
  const sy = (v) => 340 - v * 28;
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Regression metrics: actual versus predicted bars with residuals, formulas of MAE, MSE, RMSE and R squared, the computed example and guidance about which metric to choose">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        MAE · MSE · RMSE · R² — the errors of regression
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        MAE/RMSE say how large the error is · R² says how well the model fits
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="420" height="344" rx="9" fill="rgba(255,0,128,0.04)" stroke="rgba(255,0,128,0.3)" />
        <line x1="50" y1="340" x2="410" y2="340" stroke="rgba(255,255,255,0.35)" />
        <line x1="50" y1="340" x2="50" y2="100" stroke="rgba(255,255,255,0.35)" />
        <text x="44" y="106" textAnchor="end" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>y</text>

        {bars.map(({ x, actual, pred, res }) => (
          <g key={x}>
            <rect x={x} y={sy(actual)} width="34" height={actual * 28} rx="3" fill="rgba(0,212,255,0.55)" stroke="#00d4ff" strokeWidth="0.8" />
            <rect x={x + 38} y={sy(pred)} width="34" height={pred * 28} rx="3" fill="rgba(255,136,0,0.55)" stroke="#ff8800" strokeWidth="0.8" />
            <text x={x + 17} y={sy(actual) - 6} textAnchor="middle" fill="#00d4ff" fontSize="8.2" fontWeight="700" fontFamily={FONT}>{actual}</text>
            <text x={x + 55} y={sy(pred) - 6} textAnchor="middle" fill="#ff8800" fontSize="8.2" fontWeight="700" fontFamily={FONT}>{pred}</text>
            <text x={x + 36} y="362" textAnchor="middle" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>{`obs ${x === 90 ? 1 : x === 190 ? 2 : 3}`}</text>
            <text x={x + 36} y="378" textAnchor="middle" fill="#ff7a90" fontSize="8.2" fontFamily={FONT}>{`residual ${res}`}</text>
          </g>
        ))}

        <text x="40" y="92" fill="#00d4ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>■ actual y</text>
        <text x="130" y="92" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>■ predicted yhat</text>
        <text x="250" y="92" fill="#ff7a90" fontSize="8.4" fontWeight="700" fontFamily={FONT}>residual = y − yhat</text>
        <text x="44" y="398" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>actual 3, 5, 7 · predicted 2, 5, 9 · residuals +1, 0, −2</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="460" y="64" width="320" height="166" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="474" y="84" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>FORMULAE</text>
        <text x="474" y="106" fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>MAE</text>
        <text x="516" y="106" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>(1/n) Σ |yi − yhat_i| → 1.000</text>
        <text x="474" y="128" fill="#00ff88" fontSize="8.6" fontWeight="700" fontFamily={FONT}>MSE</text>
        <text x="516" y="128" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>(1/n) Σ (yi − yhat_i)² → 1.667</text>
        <text x="474" y="150" fill="#ff8800" fontSize="8.6" fontWeight="700" fontFamily={FONT}>RMSE</text>
        <text x="516" y="150" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>√MSE → 1.291</text>
        <text x="474" y="172" fill="#aa00ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>R²</text>
        <text x="506" y="172" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>1 − SSres/SStot = 1 − 5/8 → 0.375</text>
        <text x="474" y="196" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>adjusted R² = 1 − (1−R²)(n−1)/(n−p−1)</text>
        <text x="474" y="216" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>MAPE = (100/n) Σ |(yi − yhat_i)/yi| %</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="460" y="242" width="320" height="158" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.4)" />
        <text x="474" y="262" fill="#6fb2ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>WHICH METRIC TO CHOOSE</text>
        <text x="474" y="284" fill="#00d4ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>MAE</text>
        <text x="522" y="284" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>every error equal, outliers softened</text>
        <text x="474" y="306" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>RMSE</text>
        <text x="522" y="306" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>large errors cost more, same unit</text>
        <text x="474" y="328" fill="#aa00ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>R²</text>
        <text x="506" y="328" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>how much better than the baseline (mean)</text>
        <text x="474" y="350" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Adj R²</text>
        <text x="530" y="350" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>penalty for extra useless features</text>
        <text x="474" y="372" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>R² can even be negative (on test data)</text>
        <text x="474" y="388" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>RMSE is always ≥ MAE</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="20" y="412" width="760" height="88" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="432" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>INTERPRETATION — solved example</text>
        <text x="34" y="452" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>MAE 1.0 → average error of 1 unit · RMSE 1.29 → the large error (−2) weighted more</text>
        <text x="34" y="470" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>R² 0.375 → 37.5% of variance explained, 62.5% still unexplained</text>
        <text x="34" y="490" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>classification metrics (accuracy/F1) do not apply here — report MAE, RMSE, R²</text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit IV — Diagram 1 · Distance based models
// ============================================================
export function DistanceModelsDiagram() {
  const A = [170, 262];
  const B = [350, 142];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Distance based models: Euclidean straight line, Manhattan stepped path and the cosine angle between two vectors, with formulas for Euclidean, Manhattan, Minkowski, Hamming and cosine similarity">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Distance Based Models
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        how close two points are — the basis of clustering and KNN
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="420" height="330" rx="9" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.3)" />
        <line x1="110" y1="320" x2="410" y2="320" stroke="rgba(255,255,255,0.3)" />
        <line x1="110" y1="320" x2="110" y2="98" stroke="rgba(255,255,255,0.3)" />
        <text x="404" y="336" textAnchor="end" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>feature 1</text>
        <text x="102" y="104" textAnchor="end" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>feature 2</text>

        <line x1="110" y1="320" x2={A[0]} y2={A[1]} stroke="rgba(111,178,255,0.6)" strokeWidth="1.6" />
        <line x1="110" y1="320" x2={B[0]} y2={B[1]} stroke="rgba(111,178,255,0.6)" strokeWidth="1.6" />
        <path d="M170 320 A60 60 0 0 0 136 272" fill="none" stroke="#c4ff00" strokeWidth="1.3" />
        <text x="176" y="300" fill="#c4ff00" fontSize="8.4" fontWeight="700" fontFamily={FONT}>θ = 8°</text>

        <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="#00ff88" strokeWidth="2" />
        <path d={`M${A[0]} ${A[1]} H${B[0]} V${B[1]}`} fill="none" stroke="#ff8800" strokeWidth="1.6" strokeDasharray="5 4" />
        <circle cx={A[0]} cy={A[1]} r="5" fill="#00d4ff" />
        <circle cx={B[0]} cy={B[1]} r="5" fill="#00d4ff" />
        <text x={A[0] + 10} y={A[1] + 24} fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>A (1, 2)</text>
        <text x={B[0] + 8} y={B[1] - 6} fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>B (4, 6)</text>

        <text x="212" y="180" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Euclidean = 5</text>
        <text x="244" y="286" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Manhattan = 7</text>
        <text x="134" y="126" fill="#6fb2ff" fontSize="8.2" fontFamily={FONT}>cos θ = 0.992 (vectors almost same direction)</text>

        <text x="34" y="356" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          green = straight distance · orange = distance along the axes · θ = the angle between the two vectors
        </text>
        <text x="34" y="376" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          cosine looks at the angle, not the magnitude — hence the best for text
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="460" y="64" width="320" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,255,136,0.4)" />
        <text x="474" y="84" fill="#00ff88" fontSize="9.4" fontWeight="800" fontFamily={FONT}>FORMULAS</text>
        <text x="474" y="106" fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Euclidean (L2)</text>
        <text x="474" y="122" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>d = √Σ (xi − yi)²</text>
        <text x="474" y="142" fill="#ff8800" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Manhattan (L1)</text>
        <text x="474" y="158" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>d = Σ |xi − yi|</text>
        <text x="474" y="178" fill="#c4ff00" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Minkowski (Lp)</text>
        <text x="474" y="194" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>d = (Σ |xi − yi|^p)^(1/p) · p=1 L1 · p=2 L2</text>

        <rect x="460" y="226" width="320" height="96" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(170,0,255,0.4)" />
        <text x="474" y="246" fill="#c08bff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>HAMMING</text>
        <text x="474" y="266" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>1011101 vs 1001001 → they differ at positions 3 and 6</text>
        <text x="474" y="284" fill="#00ff88" fontSize="8.6" fontWeight="700" fontFamily={FONT}>distance = 2 (normalised 2/7 = 0.29)</text>
        <text x="474" y="304" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>equal length strings, binary, one-hot, DNA</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="460" y="334" width="320" height="128" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="474" y="354" fill="#00d4ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>COSINE SIMILARITY</text>
        <text x="474" y="374" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>cos θ = (A·B) / (|A| · |B|)</text>
        <text x="474" y="392" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>cosine distance = 1 − cos θ</text>
        <text x="474" y="412" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>A·B = 16, |A| = 2.236, |B| = 7.211 → 0.992</text>
        <text x="474" y="432" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>text, TF-IDF, embeddings, recommender</text>
        <text x="474" y="450" fill="#ffd166" fontSize="8" fontFamily={FONT}>metric: d ≥ 0 · d=0 same · symmetric · triangle</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="412" width="420" height="50" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,122,144,0.4)" />
        <text x="34" y="432" fill="#ff7a90" fontSize="8.6" fontWeight="700" fontFamily={FONT}>
          Caution: before scaling, distance means nothing
        </text>
        <text x="34" y="450" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          salary 30,000 vs 31,000 swallows the whole distance — z-score/min-max is essential
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit IV — Diagram 2 · K-means
// ============================================================
export function KMeansDiagram() {
  const c1 = [134, 230];
  const c2 = [338, 252];
  const pts = [
    [110, 180], [140, 280], [190, 215], [95, 245],
    [300, 180], [360, 300], [380, 240], [310, 290],
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="K-means clustering: points assigned to two centroids, the assign and update loop, WCSS objective and a solved one dimensional example">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        K-Means — the assign and update loop
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        centroid = mean of the members · objective = minimise WCSS
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="420" height="330" rx="9" fill="rgba(255,0,128,0.04)" stroke="rgba(255,0,128,0.3)" />

        {pts.map(([x, y], i) => {
          const near = i < 4 ? c1 : c2;
          const color = i < 4 ? '#00d4ff' : '#ff0080';
          return (
            <g key={i}>
              <line x1={x} y1={y} x2={near[0]} y2={near[1]} stroke={`${color}44`} strokeWidth="1" strokeDasharray="3 3" />
              <circle cx={x} cy={y} r="5.4" fill={color} />
            </g>
          );
        })}

        <g stroke="#c4ff00" strokeWidth="2.2">
          <line x1={c1[0] - 8} y1={c1[1] - 8} x2={c1[0] + 8} y2={c1[1] + 8} />
          <line x1={c1[0] + 8} y1={c1[1] - 8} x2={c1[0] - 8} y2={c1[1] + 8} />
          <line x1={c2[0] - 8} y1={c2[1] - 8} x2={c2[0] + 8} y2={c2[1] + 8} />
          <line x1={c2[0] + 8} y1={c2[1] - 8} x2={c2[0] - 8} y2={c2[1] + 8} />
        </g>
        <text x={c1[0] - 22} y={c1[1] - 10} textAnchor="middle" fill="#c4ff00" fontSize="8.6" fontWeight="700" fontFamily={FONT}>μ1</text>
        <text x={c2[0] + 20} y={c2[1] - 10} textAnchor="middle" fill="#c4ff00" fontSize="8.6" fontWeight="700" fontFamily={FONT}>μ2</text>

        <text x="40" y="92" fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>● cluster 1</text>
        <text x="140" y="92" fill="#ff0080" fontSize="8.6" fontWeight="700" fontFamily={FONT}>● cluster 2</text>
        <text x="250" y="92" fill="#c4ff00" fontSize="8.6" fontWeight="700" fontFamily={FONT}>✕ centroid</text>

        <rect x="40" y="340" width="380" height="38" rx="6" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.4)" />
        <text x="52" y="358" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>
          Step 1: point → nearest centroid   →   Step 2: centroid = mean
        </text>
        <text x="52" y="372" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          Step 3: repeat until assignments are stable (or max iterations)
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="460" y="64" width="320" height="120" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="474" y="84" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>OBJECTIVE — WCSS</text>
        <text x="474" y="104" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>J = Σk Σ(x∈Ck) ||x − μk||²</text>
        <text x="474" y="124" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>lower WCSS = tighter clusters (inertia)</text>
        <text x="474" y="144" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>raising k always lowers WCSS</text>
        <text x="474" y="166" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>complexity O(n · k · d · iterations)</text>

        <rect x="460" y="196" width="320" height="106" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="474" y="216" fill="#00d4ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>SOLVED EXAMPLE (1-D, k = 2)</text>
        <text x="474" y="236" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>points: 1, 2, 3, 10, 11, 12</text>
        <text x="474" y="254" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>centroids → (1+2+3)/3 = 2 · (10+11+12)/3 = 11</text>
        <text x="474" y="272" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>WCSS = 1 + 0 + 1 + 1 + 0 + 1 = 4</text>
        <text x="474" y="292" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>assignments same → converged</text>

        <rect x="460" y="314" width="320" height="80" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,122,144,0.4)" />
        <text x="474" y="334" fill="#ff7a90" fontSize="9.4" fontWeight="800" fontFamily={FONT}>WATCH OUT</text>
        <text x="474" y="352" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>k must be given in advance (choose it from the elbow)</text>
        <text x="474" y="370" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>outliers drag the mean</text>
        <text x="474" y="386" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>works well only on spherical clusters</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="412" width="760" height="50" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="432" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Fixes: k-means++ initialisation · n_init = 10 · scaling · k by elbow/silhouette · remove outliers
        </text>
        <text x="34" y="450" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          It can stop at a local optimum — run it from several initialisations and keep the lowest WCSS
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit IV — Diagram 3 · K-medoid (PAM)
// ============================================================
export function KMedoidDiagram() {
  const X = { 1: 90, 2: 130, 3: 170, 10: 320, 11: 360, 12: 400, 100: 700 };
  const yA = 164;
  const yB = 268;
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="K-medoid versus k-means on one dimensional data with an outlier: the k-means mean is pulled to 33.25 by the outlier while the medoid stays on real data points, plus the BUILD and SWAP phases of PAM">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        K-Medoid (PAM) — medoid vs centroid
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        medoid = an actual data point · centroid = mean · so on an outlier the medoid wins
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="760" height="336" rx="9" fill="rgba(0,255,136,0.04)" stroke="rgba(0,255,136,0.3)" />
        <text x="34" y="92" fill="#9ab0e0" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          DATA: 1, 2, 3, 10, 11, 12 (+ outlier 100)
        </text>

        <text x="34" y="128" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>K-MEANS (centroid = mean)</text>
        <line x1="60" y1="182" x2="760" y2="182" stroke="rgba(255,255,255,0.14)" />
        {[1, 2, 3, 10, 11, 12].map((v) => (
          <g key={`a${v}`}>
            <circle cx={X[v]} cy={yA} r="5" fill="#00d4ff" />
            <text x={X[v]} y="204" textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>{v}</text>
          </g>
        ))}
        <circle cx={X[100]} cy={yA} r="5" fill="#ff7a90" />
        <text x={X[100]} y="204" textAnchor="middle" fill="#ff7a90" fontSize="7.6" fontFamily={FONT}>100</text>

        <g stroke="#c4ff00" strokeWidth="2.2">
          <line x1={X[2] - 7} y1={yA - 7} x2={X[2] + 7} y2={yA + 7} />
          <line x1={X[2] + 7} y1={yA - 7} x2={X[2] - 7} y2={yA + 7} />
        </g>
        <text x={X[2] + 6} y={yA - 13} fill="#c4ff00" fontSize="8.2" fontWeight="700" fontFamily={FONT}>μ = 2</text>

        <g stroke="#ff8800" strokeWidth="2.2">
          <line x1="462" y1={yA - 7} x2="476" y2={yA + 7} />
          <line x1="476" y1={yA - 7} x2="462" y2={yA + 7} />
        </g>
        <text x="470" y={yA - 14} textAnchor="middle" fill="#ff8800" fontSize="8.2" fontWeight="700" fontFamily={FONT}>μ = 33.25</text>
        <text x="516" y={yA - 14} fill="#ff8800" fontSize="7.8" fontFamily={FONT}>the outlier dragged the mean</text>

        <text x="512" y="178" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>gap</text>
        <text x="512" y="196" fill="rgba(255,255,255,0.3)" fontSize="7.8" fontFamily={FONT}>....</text>

        <text x="34" y="240" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>K-MEDOID (actual data point)</text>
        <line x1="60" y1="286" x2="760" y2="286" stroke="rgba(255,255,255,0.14)" />
        {[1, 2, 3, 10, 11, 12].map((v) => (
          <g key={`b${v}`}>
            <circle cx={X[v]} cy={yB} r="5" fill="#00ff88" />
            <text x={X[v]} y="308" textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>{v}</text>
          </g>
        ))}
        <circle cx={X[100]} cy={yB} r="5" fill="#ff7a90" />
        <text x={X[100]} y="308" textAnchor="middle" fill="#ff7a90" fontSize="7.6" fontFamily={FONT}>100</text>

        {[2, 11].map((v) => (
          <g key={`m${v}`}>
            <circle cx={X[v]} cy={yB} r="10" fill="none" stroke="#c4ff00" strokeWidth="1.6" />
            <text x={X[v]} y={yB - 16} textAnchor="middle" fill="#c4ff00" fontSize="8.2" fontWeight="700" fontFamily={FONT}>{`medoid ${v}`}</text>
          </g>
        ))}
        <text x="470" y={yB + 26} textAnchor="middle" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>the medoid did not move — it stays at 11</text>

        <rect x="34" y="326" width="732" height="58" rx="8" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.35)" />
        <text x="48" y="346" fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Cost (objective)</text>
        <text x="48" y="366" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>
          Cost = Σ distance(x, medoid) · the medoid has the smallest total dissimilarity to the rest of its cluster
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="20" y="412" width="370" height="94" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <text x="34" y="432" fill="#c4ff00" fontSize="9.2" fontWeight="800" fontFamily={FONT}>PAM PHASES</text>
        <text x="34" y="452" fill="#00d4ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>BUILD</text>
        <text x="92" y="452" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>greedy initial medoids (lowest cost)</text>
        <text x="34" y="472" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>SWAP</text>
        <text x="92" y="472" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>medoid ↔ non-medoid, accept if the cost falls</text>
        <text x="34" y="494" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>O(k(n−k)²) per iter · speed up with CLARA/CLARANS</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="410" y="412" width="370" height="94" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,122,144,0.4)" />
        <text x="424" y="432" fill="#ff7a90" fontSize="9.2" fontWeight="800" fontFamily={FONT}>K-MEANS vs K-MEDOID</text>
        <text x="424" y="452" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>representative: mean centroid vs actual point</text>
        <text x="424" y="470" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>outliers: sensitive vs robust</text>
        <text x="424" y="488" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>speed: fast vs slow · output: numbers vs records</text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit IV — Diagram 4 · Hierarchical clustering
// ============================================================
export function HierarchicalDiagram() {
  const baseY = 350;
  const hy = (h) => baseY - h * 45;
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Agglomerative hierarchical clustering dendrogram for points 1, 2, 4 and 9 with merge heights 1, 2 and 5, a cut at height 3 giving two clusters, plus linkage methods and divisive clustering">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Hierarchical Clustering — dendrogram
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        agglomerative: every point alone → merge the nearest · k need not be given in advance
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="440" height="336" rx="9" fill="rgba(255,136,0,0.04)" stroke="rgba(255,136,0,0.3)" />
        <line x1="60" y1={baseY} x2="440" y2={baseY} stroke="rgba(255,255,255,0.3)" />
        <line x1="60" y1={baseY} x2="60" y2="96" stroke="rgba(255,255,255,0.3)" />

        {[1, 2, 3, 4, 5].map((h) => (
          <g key={h}>
            <line x1="56" y1={hy(h)} x2="60" y2={hy(h)} stroke="rgba(255,255,255,0.3)" />
            <text x="52" y={hy(h) + 3} textAnchor="end" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>{h}</text>
          </g>
        ))}
        <text x="52" y="90" textAnchor="end" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>height</text>

        {/* leaves */}
        {[[110, '1', 1], [170, '2', 1], [250, '4', 2], [380, '9', 5]].map(([x, label, h]) => (
          <g key={label}>
            <line x1={x} y1={baseY} x2={x} y2={hy(h)} stroke="#00d4ff" strokeWidth="1.6" />
            <circle cx={x} cy={baseY} r="3.4" fill="#00d4ff" />
            <text x={x} y={baseY + 16} textAnchor="middle" fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>{label}</text>
          </g>
        ))}

        {/* merge 1: {1,2} at h=1 */}
        <line x1="110" y1={hy(1)} x2="170" y2={hy(1)} stroke="#00ff88" strokeWidth="2" />
        <line x1="140" y1={hy(1)} x2="140" y2={hy(2)} stroke="#00ff88" strokeWidth="2" />
        <text x="196" y={hy(1) + 4} fill="#00ff88" fontSize="7.8" fontFamily={FONT}>merge {`{1,2}`} at h = 1</text>

        {/* merge 2: {1,2}+4 at h=2 */}
        <line x1="140" y1={hy(2)} x2="250" y2={hy(2)} stroke="#c4ff00" strokeWidth="2" />
        <line x1="195" y1={hy(2)} x2="195" y2={hy(5)} stroke="#c4ff00" strokeWidth="2" />
        <text x="262" y={hy(2) + 4} fill="#c4ff00" fontSize="7.8" fontFamily={FONT}>merge with 4 at h = 2</text>

        {/* merge 3: all at h=5 */}
        <line x1="195" y1={hy(5)} x2="380" y2={hy(5)} stroke="#ff8800" strokeWidth="2" />
        <text x="288" y={hy(5) - 8} textAnchor="middle" fill="#ff8800" fontSize="7.8" fontFamily={FONT}>all merged at h = 5</text>

        {/* cut */}
        <line x1="60" y1={hy(3)} x2="440" y2={hy(3)} stroke="rgba(255,122,144,0.85)" strokeWidth="1.2" strokeDasharray="6 4" />
        <text x="470" y={hy(3) - 8} fill="#ff7a90" fontSize="8" fontFamily={FONT}>cut at h = 3 → clusters [1,2,4] and [9]</text>

        <text x="34" y="380" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          cut at any height and you get that many clusters — this is the advantage of hierarchical clustering
        </text>
        <text x="34" y="394" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          height = the distance between the two clusters at that merge
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="480" y="64" width="300" height="120" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="494" y="84" fill="#00d4ff" fontSize="9.2" fontWeight="800" fontFamily={FONT}>TWO WAYS</text>
        <text x="494" y="104" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Agglomerative</text>
        <text x="494" y="120" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>bottom-up: n clusters → merge → 1</text>
        <text x="494" y="142" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Divisive</text>
        <text x="494" y="158" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>top-down: 1 cluster → split (DIANA)</text>
        <text x="494" y="176" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>divisive is costly — every split must be examined</text>

        <rect x="480" y="196" width="300" height="112" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="494" y="216" fill="#c4ff00" fontSize="9.2" fontWeight="800" fontFamily={FONT}>LINKAGE METHODS</text>
        <text x="494" y="236" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>single — nearest pair (min) · chains form</text>
        <text x="494" y="254" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>complete — farthest pair (max) · compact</text>
        <text x="494" y="272" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>average — mean over all pairs</text>
        <text x="494" y="290" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>Ward — WCSS increase minimum (best)</text>

        <rect x="480" y="320" width="300" height="80" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,122,144,0.4)" />
        <text x="494" y="340" fill="#ff7a90" fontSize="9.2" fontWeight="800" fontFamily={FONT}>WATCH OUT</text>
        <text x="494" y="358" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>O(n²) memory, O(n³) time — slow on large data</text>
        <text x="494" y="376" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>a merge cannot be undone (greedy)</text>
        <text x="494" y="394" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>outliers form chains under single linkage</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="412" width="760" height="50" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="432" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Pros: k not needed · the full hierarchy is visible · the result is deterministic
        </text>
        <text x="34" y="450" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Example: 1, 2, 4, 9 → merges at heights 1 ({`{1,2}`}), 2 ({`{1,2,4}`}), 5 (all)
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit IV — Diagram 5 · Elbow method
// ============================================================
export function ElbowMethodDiagram() {
  const data = [[1, 500], [2, 250], [3, 120], [4, 100], [5, 90], [6, 82]];
  const px = (k) => 90 + (k - 1) * 54;
  const py = (w) => 340 - w * 0.4;
  const path = data.map(([k, w], i) => `${i === 0 ? 'M' : 'L'}${px(k)} ${py(w)}`).join(' ');
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Elbow method: line chart of WCSS against the number of clusters k with the elbow at k equals 3 highlighted, plus the silhouette coefficient formula and other internal validation metrics">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Elbow Method — how to choose the best k
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        plot WCSS against k — the bend in the curve is the k
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="440" height="336" rx="9" fill="rgba(170,0,255,0.04)" stroke="rgba(170,0,255,0.3)" />
        <line x1="90" y1="340" x2="430" y2="340" stroke="rgba(255,255,255,0.3)" />
        <line x1="90" y1="340" x2="90" y2="96" stroke="rgba(255,255,255,0.3)" />
        <text x="424" y="356" textAnchor="end" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>k (clusters)</text>
        <text x="84" y="102" textAnchor="end" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>WCSS</text>

        <path d={path} stroke="#c08bff" strokeWidth="2.4" fill="none" />
        {data.map(([k, w]) => (
          <g key={k}>
            <circle cx={px(k)} cy={py(w)} r="4.4" fill="#c08bff" />
            <text x={k === 3 ? px(k) - 16 : px(k)} y={k === 3 ? py(w) + 18 : py(w) - 10} textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>{w}</text>
            <text x={px(k)} y="356" textAnchor="middle" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>{k}</text>
          </g>
        ))}

        <circle cx={px(3)} cy={py(120)} r="9" fill="none" stroke="#c4ff00" strokeWidth="1.8" />
        <line x1={px(3)} y1={py(120)} x2={px(3)} y2="340" stroke="rgba(196,255,0,0.5)" strokeDasharray="4 4" />
        <text x={px(3) + 14} y={py(120) - 14} fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>elbow → k = 3</text>

        <text x="106" y="150" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>500 → 250 → 120 → 100 → 90 → 82</text>
        <text x="106" y="166" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>drops: 250, 130, 20, 10, 8</text>

        <text x="34" y="382" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          WCSS always falls as k rises — so the k with the "lowest WCSS" is the wrong answer
        </text>
        <text x="34" y="396" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          after the elbow the gain is small and the complexity high — stop there
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="480" y="64" width="300" height="140" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="494" y="84" fill="#00d4ff" fontSize="9.2" fontWeight="800" fontFamily={FONT}>SILHOUETTE SCORE</text>
        <text x="494" y="104" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>a = mean distance to its own cluster</text>
        <text x="494" y="122" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>b = distance to the nearest other cluster</text>
        <text x="494" y="142" fill="#c4ff00" fontSize="8.6" fontWeight="700" fontFamily={FONT}>s = (b − a) / max(a, b)</text>
        <text x="494" y="164" fill="#00ff88" fontSize="8.2" fontFamily={FONT}>+1 inside its cluster · 0 on the boundary · −1 wrong cluster</text>
        <text x="494" y="184" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>average &gt; 0.5 = strong structure</text>

        <rect x="480" y="216" width="300" height="100" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,255,136,0.4)" />
        <text x="494" y="236" fill="#00ff88" fontSize="9.2" fontWeight="800" fontFamily={FONT}>OTHER METRICS</text>
        <text x="494" y="256" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>Davies-Bouldin — lower is better</text>
        <text x="494" y="274" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>Calinski-Harabasz — higher is better</text>
        <text x="494" y="292" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>gap statistic — model comparison</text>
        <text x="494" y="308" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>external: purity, ARI, NMI (labels needed)</text>

        <rect x="480" y="328" width="300" height="72" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.4)" />
        <text x="494" y="348" fill="#ff8800" fontSize="9.2" fontWeight="800" fontFamily={FONT}>IF THE BEND IS AMBIGUOUS</text>
        <text x="494" y="366" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>check the silhouette score (the k with the maximum)</text>
        <text x="494" y="384" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>business/domain sense + stability check</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="412" width="760" height="50" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="432" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Steps: scale data → k-means for k = 1…10 → note WCSS for each k → plot → stop at the elbow → verify with silhouette
        </text>
        <text x="34" y="450" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Clustering is unsupervised, so there is no "accuracy" — internal measures (elbow, silhouette) are the guide
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit IV — Diagram 6 · Market basket analysis
// ============================================================
export function MarketBasketDiagram() {
  const baskets = [
    ['T1', 'bread · milk'],
    ['T2', 'bread · diaper · beer · eggs'],
    ['T3', 'milk · diaper · beer · cola'],
    ['T4', 'bread · milk · diaper · beer'],
    ['T5', 'bread · milk · diaper · cola'],
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Market basket analysis: five grocery transactions, an association rule diaper implies beer with support 60 percent and confidence 75 percent, the two mining phases and the business actions they enable">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Market Basket Analysis — what sells together
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        association rule from transaction data: X → Y ("whoever buys X also buys Y")
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="420" height="290" rx="9" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.3)" />
        <text x="34" y="86" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>TRANSACTIONS (N = 5 baskets)</text>
        {baskets.map(([id, items], i) => (
          <g key={id}>
            <rect x="34" y={98 + i * 44} width="392" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
            <text x="48" y={119 + i * 44} fill="#c4ff00" fontSize="8.6" fontWeight="700" fontFamily={FONT}>{id}</text>
            <text x="86" y={119 + i * 44} fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>{items}</text>
          </g>
        ))}
        <text x="34" y="342" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          itemset = a group of items · support count = in how many baskets it appeared
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="460" y="64" width="320" height="130" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,255,136,0.4)" />
        <text x="474" y="84" fill="#00ff88" fontSize="9.2" fontWeight="800" fontFamily={FONT}>RULE: diaper → beer</text>
        <text x="474" y="106" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>support = 3/5 = 60% (how common)</text>
        <text x="474" y="124" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>confidence = 3/4 = 75% (how reliable)</text>
        <text x="474" y="142" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>lift = 0.75/0.60 = 1.25 (positive)</text>
        <text x="474" y="162" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>that is, 75% of diaper baskets also hold beer</text>
        <text x="474" y="180" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>support is symmetric, confidence is not</text>

        <rect x="460" y="206" width="320" height="148" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.4)" />
        <text x="474" y="226" fill="#ff8800" fontSize="9.2" fontWeight="800" fontFamily={FONT}>WHAT TO DO IN THE BUSINESS</text>
        <text x="474" y="246" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>cross-sell / combo offer (basket value up)</text>
        <text x="474" y="264" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>store layout — place items that sell together side by side</text>
        <text x="474" y="282" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>bundling and pricing decisions</text>
        <text x="474" y="300" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>recommendation engine ("also viewed")</text>
        <text x="474" y="318" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>catalog design, dead combos hatana</text>
        <text x="474" y="340" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>beyond retail: insurance fraud, medical patterns</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="20" y="366" width="760" height="104" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.35)" />
        <text x="34" y="386" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>THE 2 PHASES OF MINING</text>
        <rect x="34" y="396" width="330" height="52" rx="7" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.4)" />
        <text x="48" y="414" fill="#00d4ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>1 · FREQUENT ITEMSETS</text>
        <text x="48" y="432" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>itemsets with support ≥ minsup (Apriori/FP-Growth)</text>
        <path d="M372 422 L404 422 M398 417 L404 422 L398 427" stroke="#6fb2ff" strokeWidth="1.4" fill="none" />
        <rect x="416" y="396" width="348" height="52" rx="7" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.4)" />
        <text x="430" y="414" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>2 · RULE GENERATION</text>
        <text x="430" y="432" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>rules with confidence ≥ minconf (X → Y splits)</text>
        <text x="34" y="462" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Why two phases: the itemset space is 2^m — prune by support first, then filter rules by confidence</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="20" y="474" width="760" height="30" rx="8" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.25)" />
        <text x="34" y="494" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Exam line: market basket analysis uses association rules to find which items are bought together
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit IV — Diagram 7 · Apriori
// ============================================================
export function AprioriDiagram() {
  const l1 = [['bread', 4], ['milk', 4], ['diaper', 4], ['beer', 3], ['cola', 2]];
  const l2 = [
    ['bread,milk', 3], ['bread,diaper', 3], ['diaper,milk', 3], ['diaper,beer', 3],
    ['beer,bread', 2], ['beer,milk', 2], ['cola,diaper', 2], ['cola,milk', 2],
  ];
  const l3 = [
    ['bread,diaper,milk', 2], ['beer,bread,diaper', 2], ['beer,diaper,milk', 2], ['cola,diaper,milk', 2],
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Apriori algorithm level by level flow: frequent one itemsets, eight frequent pairs, four frequent triples, then stop, with the downward closure property and rule generation">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Apriori — level-wise frequent itemsets
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        5 transactions · minsup = 40% (2 transactions) · one scan at each level
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="470" height="352" rx="9" fill="rgba(255,0,128,0.04)" stroke="rgba(255,0,128,0.28)" />

        <text x="34" y="86" fill="#00d4ff" fontSize="8.8" fontWeight="800" fontFamily={FONT}>L1 — frequent 1-itemsets (5)</text>
        {l1.map(([name, c], i) => (
          <g key={name}>
            <rect x={30 + i * 90} y="94" width="82" height="26" rx="6" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.45)" />
            <text x={30 + i * 90 + 41} y="111" textAnchor="middle" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{`${name} ${c}`}</text>
          </g>
        ))}
        <text x="34" y="134" fill="#ff7a90" fontSize="7.8" fontFamily={FONT}>eggs = 1 → below minsup, removed</text>

        <path d="M255 142 L255 156 M250 150 L255 156 L260 150" stroke="#6fb2ff" strokeWidth="1.4" fill="none" />
        <text x="266" y="154" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>join + prune → count</text>

        <text x="34" y="176" fill="#00ff88" fontSize="8.8" fontWeight="800" fontFamily={FONT}>L2 — frequent pairs (8)</text>
        {l2.map(([name, c], i) => (
          <g key={name}>
            <rect x={30 + (i % 4) * 114} y={184 + Math.floor(i / 4) * 32} width="106" height="26" rx="6" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.4)" />
            <text x={30 + (i % 4) * 114 + 53} y={201 + Math.floor(i / 4) * 32} textAnchor="middle" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{`{${name}} ${c}`}</text>
          </g>
        ))}

        <path d="M255 250 L255 264 M250 258 L255 264 L260 258" stroke="#6fb2ff" strokeWidth="1.4" fill="none" />
        <text x="266" y="262" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>subset prune: {`{beer,bread,milk}`} has support 1 → out</text>

        <text x="34" y="286" fill="#c4ff00" fontSize="8.8" fontWeight="800" fontFamily={FONT}>L3 — frequent triples (4)</text>
        {l3.map(([name, c], i) => (
          <g key={name}>
            <rect x={30 + (i % 2) * 226} y={294 + Math.floor(i / 2) * 34} width="218" height="28" rx="6" fill="rgba(196,255,0,0.08)" stroke="rgba(196,255,0,0.4)" />
            <text x={30 + (i % 2) * 226 + 109} y={312 + Math.floor(i / 2) * 34} textAnchor="middle" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{`{${name}} ${c}`}</text>
          </g>
        ))}

        <text x="34" y="376" fill="#ff7a90" fontSize="8.4" fontWeight="700" fontFamily={FONT}>
          L4 is empty — the subset {`{beer,bread,milk}`} of {`{beer,bread,diaper,milk}`} was not frequent → STOP
        </text>
        <text x="34" y="396" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Total scans: k + 1 (here 4) — hence I/O heavy</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="510" y="64" width="270" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="524" y="84" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>DOWNWARD CLOSURE</text>
        <text x="524" y="104" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>If an itemset is infrequent,</text>
        <text x="524" y="120" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>all of its supersets are infrequent too.</text>
        <text x="524" y="142" fill="#ff7a90" fontSize="8" fontFamily={FONT}>{`{milk,cola} infrequent`}</text>
        <text x="524" y="158" fill="#ff7a90" fontSize="8" fontFamily={FONT}>→ {`{milk,cola,chips}`} is infrequent too</text>
        <text x="524" y="180" fill="#00ff88" fontSize="8" fontFamily={FONT}>frequent → saare subsets frequent</text>
        <text x="524" y="200" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>this is the anti-monotone property</text>

        <rect x="510" y="226" width="270" height="106" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="524" y="246" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>STEPS</text>
        <text x="524" y="266" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>1 · count items → L1 (minsup)</text>
        <text x="524" y="284" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>2 · join L(k−1) → Ck candidates</text>
        <text x="524" y="302" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>3 · subset prune (downward closure)</text>
        <text x="524" y="320" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>4 · count → Lk · repeat</text>

        <rect x="510" y="344" width="270" height="72" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.4)" />
        <text x="524" y="364" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>RULES (minconf 60%)</text>
        <text x="524" y="382" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>bread∧milk → diaper = 2/3 = 67%</text>
        <text x="524" y="400" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>bread → milk∧diaper = 2/4 = 50% (out)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="428" width="760" height="66" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="448" fill="#00ff88" fontSize="8.6" fontWeight="700" fontFamily={FONT}>
          Pros: simple, complete, the downward closure property shrinks the search space
        </text>
        <text x="34" y="466" fill="#ff7a90" fontSize="8.6" fontWeight="700" fontFamily={FONT}>
          Cons: k+1 database scans, candidate explosion (very slow on dense data)
        </text>
        <text x="34" y="484" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          Fixes: FP-Growth (2 scans, no candidates) · Eclat (vertical tidsets) · partition/sampling
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit IV — Diagram 8 · FP-Growth
// ============================================================
export function FpGrowthDiagram() {
  const tree = [
    'root',
    '+- bread:4',
    '|  +- milk:3',
    '|  |  +- diaper:2',
    '|  |     +- beer:1',
    '|  |     +- cola:1',
    '|  +- diaper:1',
    '|     +- beer:1',
    '+- milk:1',
    '   +- diaper:1',
    '      +- beer:1',
    '         +- cola:1',
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="FP-Growth: FP-tree built in two scans with item counts, header table ordering and conditional pattern base mining for the item cola">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        FP-Growth — mining from an FP-tree without candidates
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        only 2 database scans · no candidate generation
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="440" height="330" rx="9" fill="rgba(0,255,136,0.04)" stroke="rgba(0,255,136,0.3)" />
        <text x="34" y="86" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>FP-TREE (minsup = 2)</text>
        {tree.map((line, i) => (
          <text key={i} x="36" y={108 + i * 21} fill={i === 0 ? '#c4ff00' : '#dbe6ff'} fontSize="8.8" fontFamily="'Consolas', monospace">
            {line}
          </text>
        ))}
        <text x="34" y="386" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          common prefixes are shared → the data is compressed
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="480" y="64" width="300" height="120" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="494" y="84" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>HEADER TABLE</text>
        <text x="494" y="104" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>bread 4 · milk 4 · diaper 4 · beer 3 · cola 2</text>
        <text x="494" y="122" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>in descending frequency order</text>
        <text x="494" y="144" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>every node of an item is linked</text>
        <text x="494" y="162" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>eggs (1) was removed up front</text>

        <rect x="480" y="196" width="300" height="100" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="494" y="216" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>CONSTRUCTION (2 scans)</text>
        <text x="494" y="236" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>scan 1 → counts + order</text>
        <text x="494" y="254" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>scan 2 → insert each transaction in that order</text>
        <text x="494" y="272" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>shared common prefix → node count rises</text>
        <text x="494" y="288" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>no candidate set is ever generated</text>

        <rect x="480" y="308" width="300" height="86" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.4)" />
        <text x="494" y="328" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>MINING (starting from cola)</text>
        <text x="494" y="346" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>prefix paths: {`{bread,milk,diaper}:1`}</text>
        <text x="494" y="362" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>plus {`{milk,diaper,beer}:1`}</text>
        <text x="494" y="380" fill="#00ff88" fontSize="8" fontFamily={FONT}>minsup 2 → {`{cola,milk,diaper}`} sup 2</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="20" y="406" width="760" height="88" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="426" fill="#c4ff00" fontSize="8.8" fontWeight="700" fontFamily={FONT}>APRIORI vs FP-GROWTH</text>
        <text x="34" y="446" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          scans: k+1 vs 2 · candidates: yes vs no · data: transaction list vs compressed tree
        </text>
        <text x="34" y="464" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          speed: FP-Growth is much faster on dense data · memory: the tree needs more · implementation: Apriori is easier
        </text>
        <text x="34" y="482" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          Limit: incremental update is hard (the tree is rebuilt) · Apriori is fine for small or sparse data
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science Unit IV — Diagram 9 · Support and confidence
// ============================================================
export function SupportConfidenceDiagram() {
  const cols = ['bread', 'milk', 'diaper', 'beer', 'cola'];
  const rows = [
    ['T1', [1, 1, 0, 0, 0]],
    ['T2', [1, 0, 1, 1, 0]],
    ['T3', [0, 1, 1, 1, 1]],
    ['T4', [1, 1, 1, 1, 0]],
    ['T5', [1, 1, 1, 0, 1]],
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Support and confidence: transaction item grid highlighting diaper and beer, formulas for support, confidence and lift, with the computed values and interpretation scale of lift">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Support and Confidence — the score of a rule
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        support = how common · confidence = how reliable · lift = the real correlation
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="420" height="332" rx="9" fill="rgba(255,136,0,0.04)" stroke="rgba(255,136,0,0.28)" />
        <text x="34" y="86" fill="#ff8800" fontSize="8.8" fontWeight="800" fontFamily={FONT}>5 TRANSACTIONS × 5 ITEMS</text>

        {cols.map((c, j) => (
          <text key={c} x={132 + j * 58} y="108" textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>{c}</text>
        ))}
        {rows.map(([id, cells], i) => (
          <g key={id}>
            <text x="96" y={128 + i * 26} fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>{id}</text>
            {cells.map((v, j) => (
              <rect
                key={j}
                x={110 + j * 58}
                y={114 + i * 26}
                width="44"
                height="18"
                rx="3"
                fill={v ? 'rgba(0,255,136,0.28)' : 'rgba(255,255,255,0.03)'}
                stroke={v ? 'rgba(0,255,136,0.6)' : 'rgba(255,255,255,0.1)'}
              />
            ))}
          </g>
        ))}
        <text x="34" y="278" fill="#00ff88" fontSize="8.2" fontFamily={FONT}>green = the item is in the basket</text>
        <text x="200" y="278" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>diaper: 4 · beer: 3 · diaper+beer: 3</text>

        <rect x="34" y="292" width="392" height="42" rx="7" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.4)" />
        <text x="46" y="310" fill="#00d4ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>support(diaper → beer) = 3/5 = 0.60</text>
        <text x="46" y="326" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>both together in 3 baskets — the rule applies to 60% of data</text>

        <rect x="34" y="342" width="392" height="42" rx="7" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.4)" />
        <text x="46" y="360" fill="#c4ff00" fontSize="8.4" fontWeight="700" fontFamily={FONT}>confidence = 3/4 = 0.75</text>
        <text x="46" y="376" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>3 of the 4 diaper baskets also hold beer</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="460" y="64" width="320" height="126" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="474" y="84" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>FORMULAS</text>
        <text x="474" y="106" fill="#00d4ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>support</text>
        <text x="474" y="122" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>count(X ∪ Y) / N = P(X ∪ Y)</text>
        <text x="474" y="142" fill="#c4ff00" fontSize="8.6" fontWeight="700" fontFamily={FONT}>confidence</text>
        <text x="474" y="158" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>count(X ∪ Y) / count(X) = P(Y | X)</text>
        <text x="474" y="178" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>support is symmetric, confidence is not</text>

        <rect x="460" y="202" width="320" height="112" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,0,128,0.4)" />
        <text x="474" y="222" fill="#ff7ab2" fontSize="9" fontWeight="800" fontFamily={FONT}>LIFT — catching the trap in confidence</text>
        <text x="474" y="240" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>lift = confidence / support(Y)</text>
        <line x1="486" y1="266" x2="756" y2="266" stroke="rgba(255,255,255,0.25)" />
        <line x1="620" y1="260" x2="620" y2="272" stroke="#fff" strokeWidth="1.4" />
        <text x="620" y="286" textAnchor="middle" fill="#fff" fontSize="7.6" fontFamily={FONT}>= 1 independent</text>
        <text x="486" y="286" fill="#ff7a90" fontSize="7.6" fontFamily={FONT}>less than 1 negative</text>
        <text x="756" y="286" textAnchor="end" fill="#00ff88" fontSize="7.6" fontFamily={FONT}>greater than 1 positive</text>
        <text x="474" y="300" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>diaper → beer: 0.75/0.60 = 1.25 (positive)</text>

        <rect x="460" y="318" width="320" height="82" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <text x="474" y="338" fill="#ffd166" fontSize="9" fontWeight="800" fontFamily={FONT}>THRESHOLDS</text>
        <text x="474" y="356" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>support ≥ minsup · confidence ≥ minconf</text>
        <text x="474" y="374" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>both pass → strong rule</text>
        <text x="474" y="392" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>low minsup → an explosion of rules</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="410" width="760" height="80" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="430" fill="#00ff88" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          bread → milk: support 0.60 · confidence 0.75 · lift 0.94 → milk is in 80% of baskets anyway (the rule is useless)
        </text>
        <text x="34" y="450" fill="#ff8800" fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          diaper → beer: support 0.60 · confidence 0.75 · lift 1.25 → a genuine positive association
        </text>
        <text x="34" y="470" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>
          Further: leverage = P(X∪Y) − P(X)P(Y) · conviction = (1 − support(Y))/(1 − confidence)
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science — Unit V diagrams (part 1 of 3)
// ============================================================

// 5.1 — visualization pipeline + channel accuracy
export function VisualizationPipelineDiagram() {
  const stages = [
    { x: 36, title: 'RAW DATA', sub: ['rows, columns', 'types, units'], color: '#8a95ad', note: 'clean + aggregate' },
    { x: 215, title: 'ENCODING', sub: ['mark + channel', 'position, length'], color: '#00d4ff', note: 'choose the chart type' },
    { x: 394, title: 'PERCEPTION', sub: ['eye + brain', '250 ms pre-attentive'], color: '#c4ff00', note: 'Gestalt + colour' },
    { x: 573, title: 'INSIGHT', sub: ['pattern, outlier', 'decision'], color: '#00ff88', note: 'explore, then explain' },
  ];
  const channels = [
    { label: 'position (common scale)', w: 240, v: 'most accurate' },
    { label: 'position (non-aligned)', w: 205, v: '' },
    { label: 'length', w: 175, v: 'bar chart' },
    { label: 'angle / slope', w: 140, v: 'pie chart' },
    { label: 'area', w: 105, v: 'bubble / treemap' },
    { label: 'colour hue', w: 70, v: 'category only' },
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Data visualization pipeline from raw data through encoding and perception to insight, plus the accuracy ranking of visual channels">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Data Visualization — pipeline and encodings
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        data → encoding → perception → insight · the eye reads position and length best
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="760" height="146" rx="9" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.28)" />
        {stages.map((s, i) => (
          <g key={s.title}>
            <rect x={s.x} y="88" width="170" height="72" rx="8" fill="rgba(255,255,255,0.04)" stroke={s.color} strokeOpacity="0.55" />
            <text x={s.x + 85} y="110" textAnchor="middle" fill={s.color} fontSize="10.5" fontWeight="800" fontFamily={FONT}>{s.title}</text>
            <text x={s.x + 85} y="126" textAnchor="middle" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{s.sub[0]}</text>
            <text x={s.x + 85} y="139" textAnchor="middle" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{s.sub[1]}</text>
            <text x={s.x + 85} y="180" textAnchor="middle" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>{s.note}</text>
            {i < 3 && (
              <g stroke="#c4ff00" strokeWidth="1.6">
                <line x1={s.x + 174} y1="124" x2={s.x + 200} y2="124" />
                <line x1={s.x + 195} y1="120" x2={s.x + 200} y2="124" />
                <line x1={s.x + 195} y1="128" x2={s.x + 200} y2="124" />
              </g>
            )}
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="20" y="222" width="760" height="166" rx="9" fill="rgba(196,255,0,0.04)" stroke="rgba(196,255,0,0.25)" />
        <text x="34" y="242" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>
          CHANNEL ACCURACY — Cleveland &amp; McGill ranking
        </text>
        {channels.map((c, i) => (
          <g key={c.label}>
            <text x="34" y={264 + i * 20} fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{c.label}</text>
            <rect x="214" y={256 + i * 20} width={c.w} height="11" rx="3" fill={i < 2 ? '#c4ff00' : i < 4 ? '#00d4ff' : '#ff8800'} opacity="0.75" />
            <text x={222 + c.w} y={264 + i * 20} fill="#8a95ad" fontSize="7.6" fontFamily={FONT}>{c.v}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="20" y="400" width="760" height="96" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="422" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>THREE LESSONS</text>
        <text x="34" y="444" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>
          Anscombe: four datasets with the same r = 0.816 look completely different → plot first
        </text>
        <text x="34" y="464" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>
          Pre-attentive: colour and size are seen in 250 ms → highlight the exception, keep the rest grey
        </text>
        <text x="34" y="484" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>
          Data-ink ratio: 3-D, shadow, gradient = chartjunk — remove it
        </text>
      </g>
    </svg>
  );
}

// 5.2 — challenges: truncated axis, pie overload, overplotting, rainbow scale
export function VisualizationChallengesDiagram() {
  const badBars = [
    { v: '99', h: 26 },
    { v: '100', h: 44 },
    { v: '101', h: 62 },
  ];
  const dots = [];
  for (let i = 0; i < 46; i += 1) {
    const a = (i * 2.399) % 6.283;
    const r = 6 + ((i * 37) % 46);
    dots.push([170 + r * Math.cos(a), 309 + r * 0.6 * Math.sin(a)]);
  }
  const rainbow = ['#ff0044', '#ff7a00', '#ffd400', '#7dff00', '#00ff88', '#00d4ff', '#0047ff', '#aa00ff'];
  const sequential = ['#d9ecff', '#b3d6ff', '#8cc0ff', '#66aaff', '#4094ff', '#1a7eff', '#0064d9', '#004799'];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Four common visualization challenges: truncated axis, too many pie slices, overplotting and rainbow colour scale, with their fixes">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Challenges — the four most common mistakes
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        the numbers are right, the message is wrong · every problem has one standard fix
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="370" height="156" rx="8" fill="rgba(255,122,144,0.05)" stroke="rgba(255,122,144,0.3)" />
        <text x="34" y="84" fill="#ff7a90" fontSize="9" fontWeight="800" fontFamily={FONT}>1 · TRUNCATED Y-AXIS</text>
        <line x1="56" y1="196" x2="214" y2="196" stroke="rgba(255,255,255,0.25)" />
        {badBars.map((b, i) => (
          <g key={b.v}>
            <rect x={62 + i * 50} y={196 - b.h} width="30" height={b.h} rx="2" fill="#ff7a90" opacity="0.85" />
            <text x={77 + i * 50} y={190 - b.h} textAnchor="middle" fill="#ff7a90" fontSize="7.6" fontWeight="700" fontFamily={FONT}>{b.v}</text>
          </g>
        ))}
        <text x="228" y="182" fill="#ff7a90" fontSize="7.6" fontFamily={FONT}>axis from 98</text>
        <text x="228" y="194" fill="#ff7a90" fontSize="7.6" fontFamily={FONT}>looks like a 2x difference</text>
        <text x="34" y="212" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>fix: zero baseline + honest label</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x="410" y="64" width="370" height="156" rx="8" fill="rgba(255,136,0,0.05)" stroke="rgba(255,136,0,0.3)" />
        <text x="424" y="84" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>2 · 12-SLICE PIE</text>
        {rainbow.concat(['#ff4d88', '#88ff00', '#00aaff', '#ffaa00']).map((c, i) => {
          const a0 = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const a1 = ((i + 1) / 12) * Math.PI * 2 - Math.PI / 2;
          const r = 48;
          const cx = 500;
          const cy = 142;
          const x0 = cx + r * Math.cos(a0);
          const y0 = cy + r * Math.sin(a0);
          const x1 = cx + r * Math.cos(a1);
          const y1 = cy + r * Math.sin(a1);
          return (
            <path key={c} d={`M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1} Z`} fill={rainbow[i % 8]} opacity="0.65" stroke="#0b0f1a" strokeWidth="0.8" />
          );
        })}
        <text x="566" y="132" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>12 slices: no</text>
        <text x="566" y="144" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>comparison possible</text>
        <text x="566" y="160" fill="#ff8800" fontSize="7.6" fontFamily={FONT}>labels also overlap</text>
        <text x="424" y="212" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>fix: sorted horizontal bar chart</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="20" y="232" width="370" height="156" rx="8" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.3)" />
        <text x="34" y="252" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>3 · OVERPLOTTING</text>
        <rect x="60" y="266" width="220" height="86" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.2" fill="#00d4ff" opacity="0.35" />
        ))}
        <text x="292" y="296" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>all points</text>
        <text x="292" y="308" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>in one place →</text>
        <text x="292" y="320" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>no trend</text>
        <text x="292" y="332" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>visible</text>
        <text x="34" y="376" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>fix: alpha, jitter, hexbin, sampling, facets</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="410" y="232" width="370" height="156" rx="8" fill="rgba(170,0,255,0.05)" stroke="rgba(170,0,255,0.3)" />
        <text x="424" y="252" fill="#aa00ff" fontSize="9" fontWeight="800" fontFamily={FONT}>4 · RAINBOW vs SEQUENTIAL</text>
        <text x="424" y="272" fill="#ff7a90" fontSize="8" fontFamily={FONT}>rainbow (jet) — false boundaries</text>
        {rainbow.map((c, i) => (
          <rect key={'r' + c} x={424 + i * 42} y="280" width="40" height="20" fill={c} opacity="0.85" />
        ))}
        <text x="424" y="322" fill="#00ff88" fontSize="8" fontFamily={FONT}>sequential / viridis — ordered</text>
        {sequential.map((c, i) => (
          <rect key={'s' + c} x={424 + i * 42} y="330" width="40" height="20" fill={c} opacity="0.9" />
        ))}
        <text x="424" y="376" fill="#00ff88" fontSize="7.8" fontFamily={FONT}>fix: sequential single-hue + colourblind-safe palette</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="20" y="400" width="760" height="96" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="422" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>FIX KIT</text>
        <text x="34" y="444" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>
          zero baseline · sorted bars · max 5–6 pie slices · alpha / hexbin · viridis · colour + label (redundant encoding)
        </text>
        <text x="34" y="464" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>
          Simpson&apos;s paradox: show both the aggregate and the grouped view — otherwise a confounder is hidden
        </text>
        <text x="34" y="484" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>
          Ethics: deliberately changing the baseline, the aggregation or the axis range = a misleading visualization
        </text>
      </g>
    </svg>
  );
}

// 5.3 — dashboard types
export function DashboardTypesDiagram() {
  const types = [
    {
      name: 'OPERATIONAL', color: '#00d4ff', audience: 'supervisors, staff',
      refresh: 'seconds – minutes', horizon: 'real time',
      lines: ['call queue', 'server health', 'delivery status'], action: 'fix now',
    },
    {
      name: 'TACTICAL', color: '#00ff88', audience: 'department managers',
      refresh: 'daily – weekly', horizon: 'days – weeks',
      lines: ['sales vs target', 'SLA compliance', 'campaign spend'], action: 'adjust plan',
    },
    {
      name: 'STRATEGIC', color: '#ff8800', audience: 'executives, board',
      refresh: 'monthly – quarterly', horizon: 'months – years',
      lines: ['revenue growth', 'market share', 'NPS, ESG'], action: 'set strategy',
    },
    {
      name: 'ANALYTICAL', color: '#aa00ff', audience: 'analysts',
      refresh: 'on demand', horizon: 'any',
      lines: ['churn root cause', 'drill-down', 'cohort view'], action: 'explain why',
    },
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Four dashboard types: operational, tactical, strategic and analytical with their audience, refresh rate, examples and action">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Dashboard — four types
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        the type is decided by audience + time horizon · one screen, the 5-second rule
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        {types.map((t, i) => {
          const x = 24 + i * 192;
          return (
            <g key={t.name}>
              <rect x={x} y="70" width="176" height="196" rx="9" fill="rgba(255,255,255,0.035)" stroke={t.color} strokeOpacity="0.45" />
              <rect x={x} y="70" width="176" height="26" rx="9" fill={t.color} fillOpacity="0.16" />
              <text x={x + 88} y="88" textAnchor="middle" fill={t.color} fontSize="9.4" fontWeight="800" fontFamily={FONT}>{t.name}</text>
              <text x={x + 10} y="114" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>audience</text>
              <text x={x + 10} y="126" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{t.audience}</text>
              <text x={x + 10} y="144" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>refresh</text>
              <text x={x + 10} y="156" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{t.refresh}</text>
              <text x={x + 10} y="174" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>horizon</text>
              <text x={x + 10} y="186" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>{t.horizon}</text>
              <line x1={x + 10} y1="196" x2={x + 166} y2="196" stroke="rgba(255,255,255,0.1)" />
              {t.lines.map((l, j) => (
                <text key={l} x={x + 10} y={212 + j * 12} fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>· {l}</text>
              ))}
              <text x={x + 10} y="256" fill={t.color} fontSize="7.8" fontWeight="700" fontFamily={FONT}>action: {t.action}</text>
            </g>
          );
        })}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="24" y="278" width="752" height="46" rx="8" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.22)" />
        <text x="36" y="298" fill="#00d4ff" fontSize="8" fontWeight="700" fontFamily={FONT}>TIME HORIZON</text>
        <line x1="140" y1="304" x2="700" y2="304" stroke="rgba(255,255,255,0.2)" />
        <line x1="694" y1="300" x2="700" y2="304" stroke="rgba(255,255,255,0.4)" />
        <line x1="694" y1="308" x2="700" y2="304" stroke="rgba(255,255,255,0.4)" />
        <text x="140" y="318" fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>real time</text>
        <text x="380" y="318" fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>days – weeks</text>
        <text x="640" y="318" fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>months – years</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x="24" y="334" width="752" height="62" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="36" y="354" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>COMPONENTS</text>
        <text x="36" y="374" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          KPI cards (actual vs target) · trend charts · comparisons · filters · alerts / thresholds · drill-down · timestamp
        </text>
        <text x="36" y="388" fill="#8a95ad" fontSize="7.8" fontFamily={FONT}>
          rule: 5–7 KPIs, one screen, no scroll — showing everything is the biggest dashboard mistake
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="24" y="406" width="752" height="90" rx="9" fill="rgba(196,255,0,0.04)" stroke="rgba(196,255,0,0.25)" />
        <text x="36" y="426" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>DASHBOARD vs REPORT vs SCORECARD</text>
        <text x="36" y="446" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          dashboard = monitor (how are we doing) · report = detail (the full record) · scorecard = KPI vs target (accountability)
        </text>
        <text x="36" y="464" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          all three are built from one data model (star schema); only the delivery format differs
        </text>
        <text x="36" y="484" fill="#00ff88" fontSize="8.2" fontFamily={FONT}>
          Definition (Few): most important information, single screen, monitored at a glance
        </text>
      </g>
    </svg>
  );
}

// 5.4 — dashboard evolution timeline
export function DashboardEvolutionDiagram() {
  const gens = [
    { x: 104, era: '1980s', name: 'Gen 1 · EIS', tech: ['mainframe batch', 'static green screen'], color: '#8a95ad', who: 'executives' },
    { x: 244, era: '1990s', name: 'Gen 2 · BI + OLAP', tech: ['cubes, star schema', 'scheduled reports'], color: '#00d4ff', who: 'managers' },
    { x: 384, era: '2000s', name: 'Gen 3 · Self-service', tech: ['Tableau, Qlik', 'in-memory, drag-drop'], color: '#00ff88', who: 'analysts' },
    { x: 524, era: '2010s', name: 'Gen 4 · Cloud + real time', tech: ['cloud, mobile', 'streaming, embedded'], color: '#ff8800', who: 'all employees' },
    { x: 664, era: '2020s', name: 'Gen 5 · AI-augmented', tech: ['natural language', 'auto insights, Copilot'], color: '#aa00ff', who: 'employees + customers' },
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Evolution of dashboards across five generations from executive information systems to AI-augmented analytics">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Dashboard evolution — five generations
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        audience badhi, latency ghati: nightly batch → real time → predictive
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="760" height="152" rx="9" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.12)" />
        <line x1="52" y1="186" x2="748" y2="186" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <line x1="742" y1="181" x2="748" y2="186" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <line x1="742" y1="191" x2="748" y2="186" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        {gens.map((g) => (
          <g key={g.name}>
            <circle cx={g.x} cy="186" r="7" fill={g.color} stroke="#0b0f1a" strokeWidth="2" />
            <text x={g.x} y="110" textAnchor="middle" fill="#dbe6ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>{g.name}</text>
            <text x={g.x} y="126" textAnchor="middle" fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>{g.tech[0]}</text>
            <text x={g.x} y="138" textAnchor="middle" fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>{g.tech[1]}</text>
            <line x1={g.x} y1="146" x2={g.x} y2="174" stroke={g.color} strokeOpacity="0.4" strokeDasharray="2 3" />
            <text x={g.x} y="170" textAnchor="middle" fill={g.color} fontSize="10" fontWeight="800" fontFamily={FONT}>{g.era}</text>
            <text x={g.x} y="206" textAnchor="middle" fill={g.color} fontSize="7.6" fontFamily={FONT}>{g.who}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="20" y="228" width="760" height="46" rx="8" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.22)" />
        <text x="34" y="248" fill="#00d4ff" fontSize="8" fontWeight="700" fontFamily={FONT}>LATENCY</text>
        <text x="120" y="248" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>nightly batch</text>
        <text x="226" y="248" fill="#8a95ad" fontSize="8" fontFamily={FONT}>→ daily</text>
        <text x="300" y="248" fill="#8a95ad" fontSize="8" fontFamily={FONT}>→ on demand</text>
        <text x="392" y="248" fill="#8a95ad" fontSize="8" fontFamily={FONT}>→ real time</text>
        <text x="478" y="248" fill="#8a95ad" fontSize="8" fontFamily={FONT}>→ predictive</text>
        <text x="34" y="266" fill="#8a95ad" fontSize="7.6" fontFamily={FONT}>
          built by: IT only → IT + BI team → business user → business + governance → business + AI assistant
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x="20" y="284" width="760" height="216" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="306" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>DRIVERS OF THE EVOLUTION</text>
        <text x="34" y="330" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>in-memory computing → live filtering and drill-down (VizQL + Hyper, VertiPaq)</text>
        <text x="34" y="356" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>cloud → access from any device, elastic compute, SaaS BI</text>
        <text x="34" y="382" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>mobile + UX → the same insight from a 10-foot wallboard to a 5-inch phone</text>
        <text x="34" y="408" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>streaming (Kafka / IoT) → real-time ops dashboards</text>
        <text x="34" y="434" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>machine learning + LLM → auto insights, anomaly alerts, natural language BI</text>
        <text x="34" y="460" fill="#ff8800" fontSize="8.4" fontFamily={FONT}>governance → metric / semantic layer, catalogue, certified datasets</text>
        <text x="34" y="486" fill="#8a95ad" fontSize="8" fontFamily={FONT}>net result: a wider audience and a shorter time to decide</text>
      </g>
    </svg>
  );
}

// 5.5 — dashboard layout wireframe
export function DashboardDesignDiagram() {
  const kpis = [
    { label: 'Revenue', value: '42.0L', delta: '-6%', bad: true },
    { label: 'Orders', value: '1,240', delta: '+4%', bad: false },
    { label: 'Conv.', value: '18%', delta: '-2pp', bad: true },
    { label: 'Churn', value: '2.1%', delta: '+0.3', bad: true },
  ];
  const rules = [
    ['1', 'KPI row: 4–6 headline numbers', 'actual vs target, one glance'],
    ['2', 'Most important metric top-left', 'F-pattern reading order'],
    ['3', 'Trend chart: line + target', 'annotate spikes'],
    ['4', 'Comparison: sorted bar', 'max 5–7 bars'],
    ['5', 'Detail on demand', 'table / tooltip / drill-down'],
    ['6', 'Filters + timestamp + source', 'data freshness visible'],
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Dashboard layout wireframe with KPI cards, trend chart, comparison chart and drill-down table, plus design rules">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Dashboard design — layout wireframe
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        5-second rule: purpose, status and exception in one glance
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="560" height="330" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <rect x="20" y="64" width="560" height="26" rx="10" fill="rgba(255,255,255,0.05)" />
        <text x="34" y="81" fill="#dbe6ff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Sales overview — Q3</text>
        <text x="566" y="81" textAnchor="end" fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>last 30 days · region: all · refresh 09:15</text>

        {kpis.map((k, i) => {
          const x = 32 + i * 136;
          return (
            <g key={k.label}>
              <rect x={x} y="100" width="126" height="48" rx="6" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.25)" />
              <text x={x + 8} y="114" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>{k.label}</text>
              <text x={x + 8} y="130" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>{k.value}</text>
              <text x={x + 8} y="142" fill={k.bad ? '#ff7a90' : '#00ff88'} fontSize="7.4" fontWeight="700" fontFamily={FONT}>{k.delta} vs target</text>
            </g>
          );
        })}

        <rect x="32" y="158" width="300" height="126" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
        <text x="42" y="172" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Revenue trend (line)</text>
        <polyline
          points="48,262 76,246 104,252 132,232 160,240 188,214 216,224 244,204 272,212 300,190 322,196"
          fill="none" stroke="#00d4ff" strokeWidth="2"
        />
        <polyline points="48,250 322,208" fill="none" stroke="#ff8800" strokeWidth="1.2" strokeDasharray="4 3" />
        <text x="252" y="200" fill="#ff8800" fontSize="7" fontFamily={FONT}>target</text>

        <rect x="344" y="158" width="224" height="126" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
        <text x="354" y="172" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Top products (sorted bar)</text>
        {[58, 46, 34, 24, 15].map((h, i) => (
          <rect key={h} x={360 + i * 40} y={262 - h} width="26" height={h} rx="2" fill="#00ff88" opacity="0.7" />
        ))}
        <line x1="356" y1="264" x2="562" y2="264" stroke="rgba(255,255,255,0.18)" />

        <rect x="32" y="292" width="536" height="88" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
        <text x="42" y="306" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Details on demand — click a KPI for a drill-down table</text>
        {[0, 1, 2].map((r) => (
          <g key={r}>
            <line x1="42" y1={318 + r * 18} x2="558" y2={318 + r * 18} stroke="rgba(255,255,255,0.08)" />
            <rect x="46" y={322 + r * 18} width="150" height="6" rx="2" fill="rgba(155,176,224,0.35)" />
            <rect x="210" y={322 + r * 18} width="80" height="6" rx="2" fill="rgba(155,176,224,0.22)" />
            <rect x="300" y={322 + r * 18} width="110" height="6" rx="2" fill="rgba(155,176,224,0.22)" />
          </g>
        ))}

      </g>

      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x="592" y="64" width="188" height="330" rx="9" fill="rgba(196,255,0,0.04)" stroke="rgba(196,255,0,0.25)" />
        <text x="604" y="84" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>DESIGN RULES</text>
        {rules.map(([n, l1, l2], i) => (
          <g key={n}>
            <text x="604" y={106 + i * 46} fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>{n}</text>
            <text x="618" y={106 + i * 46} fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>{l1}</text>
            <text x="618" y={118 + i * 46} fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>{l2}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="20" y="406" width="760" height="92" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="426" fill="#00ff88" fontSize="8.6" fontWeight="800" fontFamily={FONT}>GESTALT + COLOUR</text>
        <text x="34" y="446" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          proximity · similarity · enclosure · connection → grouping without a border
        </text>
        <text x="34" y="464" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          grey base + one accent colour (exception) · colourblind-safe · 3 font sizes · numbers right-aligned
        </text>
        <text x="34" y="484" fill="#ff7a90" fontSize="8.2" fontFamily={FONT}>
          avoid: 3-D pie, gauges, dual axis, chartjunk, 20 KPIs, undefined KPI
        </text>
      </g>
    </svg>
  );
}

// 5.6 — display media
export function DisplayMediaDiagram() {
  const devices = [
    { name: 'WALLBOARD', x: 34, y: 88, w: 210, h: 120, color: '#ff8800', l1: '1080p / 4K · 3–5 m away', l2: '4–6 KPIs · font 24–36 px · no interaction' },
    { name: 'DESKTOP', x: 268, y: 96, w: 170, h: 108, color: '#00d4ff', l1: '1920 × 1080 · 60 cm', l2: '10+ charts · hover, drill-down' },
    { name: 'TABLET', x: 470, y: 92, w: 96, h: 120, color: '#00ff88', l1: '768–1024 px · touch', l2: 'tap ≥ 44 px · swipe views' },
    { name: 'PHONE', x: 596, y: 92, w: 74, h: 124, color: '#aa00ff', l1: '360–430 px · 25 cm', l2: 'KPI cards · 1 chart/screen' },
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Display media for dashboards: wallboard, desktop, tablet and phone with their resolution, viewing distance and design rules">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Display media — every screen has its own rules
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        resolution + viewing distance + input method decide the layout and font size
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="760" height="192" rx="9" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.1)" />
        {devices.map((d) => (
          <g key={d.name}>
            <rect x={d.x} y={d.y} width={d.w} height={d.h} rx="7" fill="rgba(255,255,255,0.04)" stroke={d.color} strokeOpacity="0.6" strokeWidth="1.6" />
            <rect x={d.x + 8} y={d.y + 8} width={d.w - 16} height={d.h - 16} rx="4" fill={d.color} fillOpacity="0.1" />
            <text x={d.x + d.w / 2} y={d.y + d.h / 2 - 4} textAnchor="middle" fill={d.color} fontSize="9" fontWeight="800" fontFamily={FONT}>{d.name}</text>
            <text x={d.x + d.w / 2} y={d.y + d.h / 2 + 10} textAnchor="middle" fill="#8a95ad" fontSize="7" fontFamily={FONT}>dashboard</text>
            <text x={d.x + d.w / 2} y="232" textAnchor="middle" fill="#dbe6ff" fontSize="7.6" fontWeight="700" fontFamily={FONT}>{d.l1}</text>
            <text x={d.x + d.w / 2} y="244" textAnchor="middle" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>{d.l2}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="20" y="270" width="370" height="118" rx="8" fill="rgba(255,136,0,0.05)" stroke="rgba(255,136,0,0.28)" />
        <text x="34" y="290" fill="#ff8800" fontSize="8.6" fontWeight="800" fontFamily={FONT}>WALLBOARD = 10-FOOT UI</text>
        <text x="34" y="310" fill="#dbe6ff" fontSize="7.9" fontFamily={FONT}>4–6 metrics, high contrast, no scroll, auto-rotate 15–30 s</text>
        <text x="34" y="328" fill="#dbe6ff" fontSize="7.9" fontFamily={FONT}>colour only for status · controlled remotely</text>
        <text x="34" y="346" fill="#dbe6ff" fontSize="7.9" fontFamily={FONT}>ops floor, NOC/SOC, plant output, sales floor</text>
        <text x="34" y="368" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>test: read it from 3 m — if not, increase the font</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="410" y="270" width="370" height="118" rx="8" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.28)" />
        <text x="424" y="290" fill="#00d4ff" fontSize="8.6" fontWeight="800" fontFamily={FONT}>RESPONSIVE vs ADAPTIVE</text>
        <text x="424" y="310" fill="#dbe6ff" fontSize="7.9" fontFamily={FONT}>responsive: layout reflow (content same)</text>
        <text x="424" y="328" fill="#dbe6ff" fontSize="7.9" fontFamily={FONT}>adaptive: the content changes (3 KPIs on mobile)</text>
        <text x="424" y="346" fill="#dbe6ff" fontSize="7.9" fontFamily={FONT}>touch target ≥ 44 px · contrast ≥ 4.5:1</text>
        <text x="424" y="368" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>print / PDF: light theme, timestamp, pagination</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="20" y="400" width="760" height="98" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="420" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>FACTORS IN CHOOSING THE MEDIUM</text>
        <text x="34" y="440" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          resolution / pixel density · physical size + viewing distance · ambient light (glare) · input method (mouse / touch / remote)
        </text>
        <text x="34" y="458" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          interactivity · accessibility — one data model, three layouts (desktop, mobile, wallboard)
        </text>
        <text x="34" y="478" fill="#8a95ad" fontSize="8.2" fontFamily={FONT}>
          and: projector (meeting room), print/PDF, embedded app, email digest, digital signage, voice / AR
        </text>
      </g>
    </svg>
  );
}

// 5.7 — basic charts
export function ChartsBasicDiagram() {
  const pies = [
    { v: 38, c: '#00d4ff' },
    { v: 26, c: '#00ff88' },
    { v: 18, c: '#ff8800' },
    { v: 12, c: '#aa00ff' },
    { v: 6, c: '#ff7a90' },
  ];
  let start = -Math.PI / 2;
  const slices = pies.map((p) => {
    const a0 = start;
    const a1 = start + (p.v / 100) * Math.PI * 2;
    start = a1;
    return { ...p, a0, a1 };
  });
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Basic charts: bar graph, stacked bar chart, pie chart and doughnut chart with when to use each">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Basic charts — bar, stacked bar, pie, doughnut
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        comparison → bar · composition → stacked bar · part-to-whole snapshot → pie / doughnut
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="370" height="156" rx="8" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.3)" />
        <text x="34" y="84" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>BAR GRAPH — comparison</text>
        <line x1="40" y1="196" x2="300" y2="196" stroke="rgba(255,255,255,0.22)" />
        {[70, 56, 40, 26, 14].map((h, i) => (
          <g key={h}>
            <rect x={44 + i * 50} y={196 - h} width="32" height={h} rx="2" fill="#00d4ff" opacity="0.8" />
            <text x={60 + i * 50} y={190 - h} textAnchor="middle" fill="#9ab0e0" fontSize="7" fontFamily={FONT}>{h * 10}</text>
          </g>
        ))}
        <text x="318" y="120" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>sorted,</text>
        <text x="318" y="132" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>zero baseline</text>
        <text x="318" y="148" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>length = value</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x="410" y="64" width="370" height="156" rx="8" fill="rgba(0,255,136,0.05)" stroke="rgba(0,255,136,0.3)" />
        <text x="424" y="84" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>STACKED BAR — total + mix</text>
        <line x1="430" y1="196" x2="620" y2="196" stroke="rgba(255,255,255,0.22)" />
        {[[38, 20, 14], [44, 18, 16], [32, 24, 10], [50, 14, 8]].map((seg, i) => {
          let y = 196;
          const colors = ['#00d4ff', '#00ff88', '#ff8800'];
          return (
            <g key={i}>
              {seg.map((h, j) => {
                y -= h;
                return <rect key={j} x={438 + i * 46} y={y} width="34" height={h} fill={colors[j]} opacity="0.78" />;
              })}
            </g>
          );
        })}
        <text x="632" y="120" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>total + segments</text>
        <text x="632" y="132" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>100% version =</text>
        <text x="632" y="144" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>proportion only</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="20" y="232" width="370" height="156" rx="8" fill="rgba(255,136,0,0.05)" stroke="rgba(255,136,0,0.3)" />
        <text x="34" y="252" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>PIE — part-to-whole (max 5–6)</text>
        {slices.map((s) => {
          const r = 52;
          const cx = 130;
          const cy = 322;
          const x0 = cx + r * Math.cos(s.a0);
          const y0 = cy + r * Math.sin(s.a0);
          const x1 = cx + r * Math.cos(s.a1);
          const y1 = cy + r * Math.sin(s.a1);
          return (
            <path key={s.c} d={`M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1} Z`} fill={s.c} opacity="0.75" stroke="#0b0f1a" strokeWidth="1" />
          );
        })}
        {slices.map((s, i) => {
          const mid = (s.a0 + s.a1) / 2;
          return (
            <text key={'t' + i} x={130 + 34 * Math.cos(mid)} y={324 + 34 * Math.sin(mid)} textAnchor="middle" fill="#0b0f1a" fontSize="7.2" fontWeight="800" fontFamily={FONT}>{s.v}%</text>
          );
        })}
        <text x="222" y="296" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>angle padhna</text>
        <text x="222" y="308" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>hard → ranking</text>
        <text x="222" y="320" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>is easier with a bar</text>
        <text x="222" y="342" fill="#ff7a90" fontSize="7.2" fontFamily={FONT}>3-D pie = distort</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="410" y="232" width="370" height="156" rx="8" fill="rgba(170,0,255,0.05)" stroke="rgba(170,0,255,0.3)" />
        <text x="424" y="252" fill="#aa00ff" fontSize="9" fontWeight="800" fontFamily={FONT}>DOUGHNUT — centre KPI</text>
        {slices.map((s) => {
          const r = 52;
          const cx = 520;
          const cy = 322;
          const x0 = cx + r * Math.cos(s.a0);
          const y0 = cy + r * Math.sin(s.a0);
          const x1 = cx + r * Math.cos(s.a1);
          const y1 = cy + r * Math.sin(s.a1);
          return (
            <path key={s.c} d={`M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 0 1 ${x1} ${y1} Z`} fill={s.c} opacity="0.72" stroke="#0b0f1a" strokeWidth="1" />
          );
        })}
        <circle cx="520" cy="322" r="26" fill="#0b0f1a" />
        <text x="520" y="320" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800" fontFamily={FONT}>62%</text>
        <text x="520" y="332" textAnchor="middle" fill="#8a95ad" fontSize="6.6" fontFamily={FONT}>top 2</text>
        <text x="612" y="296" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>a total in the middle</text>
        <text x="612" y="308" fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>or a headline %</text>
        <text x="612" y="324" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>the same as a pie</text>
        <text x="612" y="336" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>rules lagu</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="20" y="404" width="760" height="94" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="424" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>RULES</text>
        <text x="34" y="444" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          sort · zero baseline · value labels at the end · one accent colour · at most 5–7 categorical colours
        </text>
        <text x="34" y="462" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          bar vs pie test: if the slices must be ranked or a small gap shown → bar chart
        </text>
        <text x="34" y="482" fill="#8a95ad" fontSize="8.2" fontFamily={FONT}>
          in a stacked bar only the bottom segment can be compared — use 100% stacked or small multiples for the middle ones
        </text>
      </g>
    </svg>
  );
}

// 5.8 — advanced charts
export function ChartsAdvancedDiagram() {
  const linePts = '48,186 82,170 116,176 150,152 184,160 218,132 252,140 286,118 320,124';
  const heat = [
    [0.2, 0.35, 0.5, 0.65, 0.8, 0.6],
    [0.3, 0.5, 0.7, 0.9, 0.7, 0.45],
    [0.45, 0.65, 0.85, 1.0, 0.75, 0.5],
    [0.25, 0.4, 0.6, 0.8, 0.55, 0.35],
    [0.15, 0.3, 0.45, 0.6, 0.4, 0.25],
  ];
  const heatColor = (v) => `rgb(${Math.round(18 + 44 * v)}, ${Math.round(58 + 112 * v)}, ${Math.round(108 + 147 * v)})`;
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Advanced charts: line chart for trend, stacked area chart for composition over time, treemap for hierarchy and heatmap for matrix patterns">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Advanced charts — line, area, treemap, heatmap
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        trend → line · volume / mix → area · hierarchy → treemap · 2-D pattern → heatmap
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="370" height="156" rx="8" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.3)" />
        <text x="34" y="84" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>LINE — trend over time</text>
        <line x1="40" y1="196" x2="330" y2="196" stroke="rgba(255,255,255,0.2)" />
        <polyline points={linePts} fill="none" stroke="#00d4ff" strokeWidth="2.2" />
        <polyline points="48,196 82,188 116,184 150,178 184,172 218,164 252,158 286,150 320,144" fill="none" stroke="#ff8800" strokeWidth="1.2" strokeDasharray="4 3" />
        <rect x="40" y="112" width="14" height="3" fill="#00d4ff" />
        <text x="58" y="116" fill="#8a95ad" fontSize="7" fontFamily={FONT}>actual</text>
        <rect x="96" y="112" width="14" height="3" fill="#ff8800" />
        <text x="114" y="116" fill="#8a95ad" fontSize="7" fontFamily={FONT}>target</text>
        <text x="40" y="212" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>continuous time, 4–5 series max, drop the gaps</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x="410" y="64" width="370" height="156" rx="8" fill="rgba(0,255,136,0.05)" stroke="rgba(0,255,136,0.3)" />
        <text x="424" y="84" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>STACKED AREA — mix over time</text>
        <polygon points="434,196 470,180 506,172 542,160 578,150 614,140 650,134 686,126 722,120 722,196" fill="#00d4ff" opacity="0.5" />
        <polygon points="434,196 470,190 506,184 542,176 578,168 614,160 650,154 686,148 722,142 722,196" fill="#00ff88" opacity="0.5" />
        <polygon points="434,196 470,194 506,192 542,188 578,186 614,182 650,180 686,176 722,174 722,196" fill="#ff8800" opacity="0.5" />
        <text x="434" y="212" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>total + composition; comparing the series inside is hard</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="20" y="232" width="370" height="156" rx="8" fill="rgba(255,136,0,0.05)" stroke="rgba(255,136,0,0.3)" />
        <text x="34" y="252" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>TREEMAP — hierarchy, area = value</text>
        <rect x="34" y="266" width="180" height="96" rx="3" fill="#00d4ff" opacity="0.6" />
        <text x="44" y="284" fill="#0b0f1a" fontSize="8" fontWeight="800" fontFamily={FONT}>Electronics 38%</text>
        <rect x="220" y="266" width="100" height="56" rx="3" fill="#00ff88" opacity="0.6" />
        <text x="228" y="284" fill="#0b0f1a" fontSize="7.4" fontWeight="700" fontFamily={FONT}>Home 21%</text>
        <rect x="220" y="326" width="100" height="36" rx="3" fill="#ff8800" opacity="0.6" />
        <text x="228" y="344" fill="#0b0f1a" fontSize="7.4" fontWeight="700" fontFamily={FONT}>Fashion 14%</text>
        <rect x="326" y="266" width="50" height="48" rx="3" fill="#aa00ff" opacity="0.6" />
        <rect x="326" y="318" width="50" height="44" rx="3" fill="#ff7a90" opacity="0.6" />
        <text x="34" y="376" fill="#8a95ad" fontSize="7.2" fontFamily={FONT}>20+ categories, the big share is seen at once</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="410" y="232" width="370" height="156" rx="8" fill="rgba(170,0,255,0.05)" stroke="rgba(170,0,255,0.3)" />
        <text x="424" y="252" fill="#aa00ff" fontSize="9" fontWeight="800" fontFamily={FONT}>HEATMAP — matrix pattern</text>
        {heat.map((row, r) => row.map((v, c) => (
          <rect key={`${r}-${c}`} x={430 + c * 34} y={260 + r * 17} width="32" height="15" rx="2" fill={heatColor(v)} />
        )))}
        <text x="430" y="368" fill="#8a95ad" fontSize="7" fontFamily={FONT}>day × hour traffic</text>
        <text x="536" y="368" fill="#8a95ad" fontSize="7" fontFamily={FONT}>low</text>
        <rect x="558" y="360" width="14" height="8" fill={heatColor(0.15)} />
        <rect x="574" y="360" width="14" height="8" fill={heatColor(0.55)} />
        <rect x="590" y="360" width="14" height="8" fill={heatColor(1)} />
        <text x="610" y="368" fill="#8a95ad" fontSize="7" fontFamily={FONT}>high (sequential scale)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="20" y="404" width="760" height="94" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="424" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>RULES</text>
        <text x="34" y="444" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          line: direct labels, avoid spaghetti (small multiples), index when the scales differ
        </text>
        <text x="34" y="462" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          treemap: squarified layout, area ratios are hard for the eye → a bar chart for exact values
        </text>
        <text x="34" y="482" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          heatmap: sequential / diverging scale, viridis, not rainbow; report the bins
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Data Science — Unit V diagrams (part 3 of 3)
// ============================================================

// 5.9 — waterfall, scatter, histogram, box plot
export function ChartsSpecialDiagram() {
  const wf = [
    { x: 44, top: 122, h: 70, color: '#8a95ad', tag: '100', label: 'Open' },
    { x: 92, top: 101, h: 21, color: '#00ff88', tag: '+30', label: 'new' },
    { x: 140, top: 101, h: 8.4, color: '#ff7a90', tag: '-12', label: 'churn' },
    { x: 188, top: 103.8, h: 5.6, color: '#00ff88', tag: '+8', label: 'upsell' },
    { x: 236, top: 103.8, h: 4.2, color: '#ff7a90', tag: '-6', label: 'disc' },
    { x: 284, top: 108, h: 84, color: '#00d4ff', tag: '120', label: 'Close' },
  ];
  const scatter = [
    [40, 150], [52, 142], [60, 148], [70, 132], [80, 138], [92, 126],
    [100, 130], [112, 118], [122, 124], [132, 110], [144, 116], [154, 104],
    [164, 108], [176, 96], [186, 102], [198, 88], [210, 94], [224, 82],
  ];
  const bins = [
    { label: '10–15', count: 4 },
    { label: '15–20', count: 8 },
    { label: '20–25', count: 4 },
    { label: '25–30', count: 2 },
    { label: '30–35', count: 2 },
  ];
  const bx = (v) => 430 + (v - 5) * 4.14;
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Special purpose charts: waterfall for contribution, scatter plot for correlation, histogram for distribution and box plot with five number summary">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Special charts — waterfall, scatter, histogram, box plot
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        contribution → waterfall · correlation → scatter · distribution → histogram · outliers → box plot
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="370" height="156" rx="8" fill="rgba(0,255,136,0.05)" stroke="rgba(0,255,136,0.3)" />
        <text x="34" y="84" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>WATERFALL — revenue bridge</text>
        <line x1="40" y1="192" x2="330" y2="192" stroke="rgba(255,255,255,0.2)" />
        {wf.map((b, i) => (
          <g key={b.label + i}>
            <rect x={b.x} y={b.top} width="30" height={b.h} rx="2" fill={b.color} opacity="0.85" />
            <text x={b.x + 15} y={b.top - 3} textAnchor="middle" fill={b.color} fontSize="7" fontWeight="700" fontFamily={FONT}>{b.tag}</text>
            <text x={b.x + 15} y="204" textAnchor="middle" fill="#8a95ad" fontSize="6.8" fontFamily={FONT}>{b.label}</text>
            {i > 0 && i < wf.length - 1 && (
              <line x1={b.x - 18} y1={b.top} x2={b.x} y2={b.top} stroke="rgba(255,255,255,0.18)" strokeDasharray="2 2" />
            )}
          </g>
        ))}
        <line x1="276" y1="108" x2="284" y2="108" stroke="rgba(255,255,255,0.18)" strokeDasharray="2 2" />
        <text x="40" y="218" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>totals from the baseline · changes floating · 100 + 30 − 12 + 8 − 6 = 120</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x="410" y="64" width="370" height="156" rx="8" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.3)" />
        <text x="424" y="84" fill="#00d4ff" fontSize="9" fontWeight="800" fontFamily={FONT}>SCATTER — correlation</text>
        <line x1="430" y1="182" x2="700" y2="182" stroke="rgba(255,255,255,0.2)" />
        <line x1="430" y1="96" x2="430" y2="182" stroke="rgba(255,255,255,0.2)" />
        {scatter.map(([x, y], i) => (
          <circle key={i} cx={430 + x} cy={y + 24} r="3" fill="#00d4ff" opacity="0.7" />
        ))}
        <line x1="442" y1="176" x2="676" y2="102" stroke="#ff8800" strokeWidth="1.4" strokeDasharray="5 3" />
        <text x="436" y="112" fill="#ff8800" fontSize="7" fontFamily={FONT}>trendline, r = 0.86</text>
        <text x="424" y="208" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>position x–y · cluster, outlier · correlation ≠ causation</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x="20" y="232" width="370" height="156" rx="8" fill="rgba(255,136,0,0.05)" stroke="rgba(255,136,0,0.3)" />
        <text x="34" y="252" fill="#ff8800" fontSize="9" fontWeight="800" fontFamily={FONT}>HISTOGRAM — distribution (20 orders)</text>
        <line x1="40" y1="356" x2="330" y2="356" stroke="rgba(255,255,255,0.2)" />
        {bins.map((b, i) => {
          const h = b.count * 8.6;
          return (
            <g key={b.label}>
              <rect x={46 + i * 54} y={356 - h} width="52" height={h} fill="#ff8800" opacity="0.72" />
              <text x={72 + i * 54} y={352 - h} textAnchor="middle" fill="#ffd9a0" fontSize="7" fontFamily={FONT}>{b.count}</text>
              <text x={72 + i * 54} y="368" textAnchor="middle" fill="#8a95ad" fontSize="6.6" fontFamily={FONT}>{b.label}</text>
            </g>
          );
        })}
        <text x="34" y="384" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>Sturges k = 1 + 3.322 log n → 5 bins, width 5 · roughly symmetric</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="410" y="232" width="370" height="156" rx="8" fill="rgba(170,0,255,0.05)" stroke="rgba(170,0,255,0.3)" />
        <text x="424" y="252" fill="#aa00ff" fontSize="9" fontWeight="800" fontFamily={FONT}>BOX PLOT — five numbers</text>
        <line x1="424" y1="320" x2="762" y2="320" stroke="rgba(255,255,255,0.2)" />
        <line x1={bx(12)} y1="320" x2={bx(32)} y2="320" stroke="#aa00ff" strokeWidth="1.2" />
        <line x1={bx(12)} y1="306" x2={bx(12)} y2="334" stroke="#aa00ff" strokeWidth="1.6" />
        <line x1={bx(32)} y1="306" x2={bx(32)} y2="334" stroke="#aa00ff" strokeWidth="1.6" />
        <rect x={bx(18)} y="300" width={bx(30) - bx(18)} height="40" rx="3" fill="#aa00ff" opacity="0.28" stroke="#aa00ff" />
        <line x1={bx(23.5)} y1="300" x2={bx(23.5)} y2="340" stroke="#fff" strokeWidth="1.8" />
        <circle cx={bx(65)} cy="320" r="3.6" fill="#ff7a90" />
        <text x={bx(65)} y="308" textAnchor="middle" fill="#ff7a90" fontSize="7" fontFamily={FONT}>65 outlier</text>
        <text x={bx(12)} y="348" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>12</text>
        <text x={bx(18)} y="292" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>Q1 18</text>
        <text x={bx(23.5)} y="352" textAnchor="middle" fill="#fff" fontSize="6.8" fontFamily={FONT}>23.5</text>
        <text x={bx(30)} y="292" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>Q3 30</text>
        <text x={bx(38)} y="348" textAnchor="middle" fill="#9ab0e0" fontSize="6.8" fontFamily={FONT}>32</text>
        <text x="424" y="372" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>IQR 12 · fences 0 and 48 · 65 &gt; 48 → outlier</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="20" y="404" width="760" height="94" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="424" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>WHICH ONE WHEN</text>
        <text x="34" y="444" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          how a number was built → waterfall · relationship of two variables → scatter · shape/spread → histogram · outliers + groups → box plot
        </text>
        <text x="34" y="462" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          histogram vs bar chart: bins are continuous and touch · on a scatter use alpha/hexbin (overplotting)
        </text>
        <text x="34" y="482" fill="#8a95ad" fontSize="8.2" fontFamily={FONT}>
          a box plot hides the shape (bimodality disappears) — use it with a histogram / violin
        </text>
      </g>
    </svg>
  );
}

// 5.10 — Tableau vs Power BI
export function VisualizationToolsDiagram() {
  const left = [
    ['Engine', 'VizQL + Hyper'],
    ['Data prep', 'Tableau Prep'],
    ['Calculation', 'calculated fields, LOD'],
    ['Cost', 'higher (~$75/user/mo)'],
    ['Best for', 'visual exploration, aesthetics'],
    ['Deploy', 'Desktop / Server / Cloud'],
  ];
  const right = [
    ['Engine', 'VertiPaq (in-memory)'],
    ['Data prep', 'Power Query (M)'],
    ['Calculation', 'DAX measures'],
    ['Cost', 'lower (Pro ~$10/user/mo)'],
    ['Best for', 'Microsoft ecosystem, model'],
    ['Deploy', 'Desktop / Service / Mobile'],
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Comparison of Tableau and Power BI: engine, data preparation, calculation language, cost, strengths and deployment">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Tableau vs Power BI
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        VizQL + Hyper vs VertiPaq + DAX · both self-service BI, the choice depends on ecosystem and budget
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="360" height="256" rx="9" fill="rgba(255,136,0,0.06)" stroke="rgba(255,136,0,0.4)" />
        <text x="200" y="90" textAnchor="middle" fill="#ff8800" fontSize="13" fontWeight="800" fontFamily={FONT}>TABLEAU</text>
        <text x="200" y="106" textAnchor="middle" fill="#8a95ad" fontSize="7.6" fontFamily={FONT}>Salesforce</text>
        {left.map(([k, v], i) => (
          <g key={k}>
            <text x="36" y={130 + i * 30} fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>{k}</text>
            <text x="36" y={142 + i * 30} fill="#dbe6ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>{v}</text>
            {i < left.length - 1 && <line x1="36" y1={148 + i * 30} x2="364" y2={148 + i * 30} stroke="rgba(255,255,255,0.07)" />}
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x="420" y="64" width="360" height="256" rx="9" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.4)" />
        <text x="600" y="90" textAnchor="middle" fill="#00d4ff" fontSize="13" fontWeight="800" fontFamily={FONT}>POWER BI</text>
        <text x="600" y="106" textAnchor="middle" fill="#8a95ad" fontSize="7.6" fontFamily={FONT}>Microsoft</text>
        {right.map(([k, v], i) => (
          <g key={k}>
            <text x="436" y={130 + i * 30} fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>{k}</text>
            <text x="436" y={142 + i * 30} fill="#dbe6ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>{v}</text>
            {i < right.length - 1 && <line x1="436" y1={148 + i * 30} x2="764" y2={148 + i * 30} stroke="rgba(255,255,255,0.07)" />}
          </g>
        ))}
        <circle cx="400" cy="192" r="17" fill="#0b0f1a" stroke="rgba(255,255,255,0.25)" />
        <text x="400" y="196" textAnchor="middle" fill="#c4ff00" fontSize="9" fontWeight="800" fontFamily={FONT}>vs</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x="20" y="332" width="760" height="70" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="352" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>CHOICE</text>
        <text x="34" y="372" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          Microsoft shop (Excel / Azure / Fabric / Teams) + budget + governance → Power BI
        </text>
        <text x="34" y="390" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          deep ad-hoc visual exploration, design-heavy dashboards, mixed sources → Tableau
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x="20" y="414" width="760" height="84" rx="9" fill="rgba(170,0,255,0.05)" stroke="rgba(170,0,255,0.25)" />
        <text x="34" y="434" fill="#aa00ff" fontSize="8.6" fontWeight="800" fontFamily={FONT}>BAKI TOOLS</text>
        <text x="34" y="454" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          Qlik Sense (associative engine) · Looker / Looker Studio (LookML) · Apache Superset, Metabase (open source) · Excel
        </text>
        <text x="34" y="472" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          code libraries: Matplotlib · Seaborn · Plotly · Altair · D3.js · ECharts
        </text>
        <text x="34" y="490" fill="#8a95ad" fontSize="8.2" fontFamily={FONT}>
          selection: data volume, skill, cost (TCO), governance, deployment, mobile, support
        </text>
      </g>
    </svg>
  );
}

// 5.11 — reinforcement learning loop
export function ReinforcementLearningDiagram() {
  const types = [
    { title: 'MODEL', items: ['model-free — Q-learning, SARSA', 'model-based — planning, AlphaZero'] },
    { title: 'LEARNING', items: ['value-based — Q, DQN', 'policy-based — REINFORCE, PPO', 'actor-critic — A3C, SAC'] },
    { title: 'POLICY DATA', items: ['on-policy — SARSA', 'off-policy — Q-learning, DQN', 'bandit — single state'] },
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Reinforcement learning loop between agent and environment with state, action and reward, plus the types of reinforcement learning and the Q-learning update rule">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Reinforcement learning — the loop of agent and environment
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        learning by trial and error: state → action → reward → update → repeat
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="760" height="176" rx="9" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.28)" />
        <rect x="70" y="118" width="180" height="70" rx="10" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="160" y="146" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="800" fontFamily={FONT}>AGENT</text>
        <text x="160" y="162" textAnchor="middle" fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>policy (state → action)</text>
        <text x="160" y="174" textAnchor="middle" fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>value function, update rule</text>

        <rect x="550" y="118" width="180" height="70" rx="10" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.6" />
        <text x="640" y="146" textAnchor="middle" fill="#00d4ff" fontSize="11.5" fontWeight="800" fontFamily={FONT}>ENVIRONMENT</text>
        <text x="640" y="162" textAnchor="middle" fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>state s, dynamics</text>
        <text x="640" y="174" textAnchor="middle" fill="#dbe6ff" fontSize="7.4" fontFamily={FONT}>game, road, market, user</text>

        <path d="M250 128 C330 96 470 96 550 128" fill="none" stroke="#00ff88" strokeWidth="1.8" />
        <polygon points="550,128 541,121 543,131" fill="#00ff88" />
        <text x="400" y="100" textAnchor="middle" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>action a</text>

        <path d="M550 178 C470 210 330 210 250 178" fill="none" stroke="#ff8800" strokeWidth="1.8" />
        <polygon points="250,178 259,171 257,181" fill="#ff8800" />
        <text x="400" y="216" textAnchor="middle" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>reward r + next state s&apos;</text>

        <text x="160" y="226" textAnchor="middle" fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>step 1–2: observe, act</text>
        <text x="640" y="226" textAnchor="middle" fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>step 3: transition + reward</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        {types.map((g, i) => {
          const x = 30 + i * 252;
          return (
            <g key={g.title}>
              <rect x={x} y="252" width="236" height="76" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
              <text x={x + 12} y="270" fill="#c4ff00" fontSize="8" fontWeight="800" fontFamily={FONT}>{g.title}</text>
              {g.items.map((it, j) => (
                <text key={it} x={x + 12} y={286 + j * 13} fill="#dbe6ff" fontSize="7.6" fontFamily={FONT}>· {it}</text>
              ))}
            </g>
          );
        })}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x="30" y="340" width="740" height="46" rx="8" fill="rgba(196,255,0,0.06)" stroke="rgba(196,255,0,0.3)" />
        <text x="44" y="360" fill="#c4ff00" fontSize="8" fontWeight="800" fontFamily={FONT}>Q-LEARNING UPDATE (model-free, off-policy)</text>
        <text x="44" y="376" fill="#fff" fontSize="8.6" fontWeight="700" fontFamily={FONT}>
          Q(s,a) ← Q(s,a) + alpha [ r + gamma · max Q(s&apos;,a&apos;) − Q(s,a) ]
        </text>
        <text x="470" y="376" fill="#8a95ad" fontSize="7.4" fontFamily={FONT}>alpha = learning rate · gamma = discount (future weight)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="398" width="760" height="100" rx="9" fill="rgba(255,136,0,0.05)" stroke="rgba(255,136,0,0.25)" />
        <text x="34" y="418" fill="#ff8800" fontSize="8.6" fontWeight="800" fontFamily={FONT}>EXPLORATION vs EXPLOITATION</text>
        <text x="34" y="438" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          explore = try a new action (to learn) · exploit = the best known action (for reward)
        </text>
        <text x="34" y="456" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          strategies: epsilon-greedy · softmax · UCB · Thompson sampling · optimistic initialisation
        </text>
        <text x="34" y="476" fill="#8a95ad" fontSize="8.2" fontFamily={FONT}>
          applications: AlphaGo · robotics · data-centre cooling · recommendation · RLHF for LLMs
        </text>
      </g>
    </svg>
  );
}

// 5.12 — generative, deep learning, XAI
export function GenerativeDeepXaiDiagram() {
  const cols = [
    {
      x: 20, color: '#aa00ff', title: 'GENERATIVE',
      sub: 'learns P(X)', items: ['GAN — generator vs discriminator', 'VAE — encoder, latent, KL loss', 'Diffusion — image from noise', 'GPT / transformers — next token', 'use: image, text, synthetic data'],
    },
    {
      x: 278, color: '#00d4ff', title: 'DEEP LEARNING',
      sub: 'layers + backprop', items: ['ANN / MLP — tabular', 'CNN — images (conv + pool)', 'RNN / LSTM — sequence', 'Transformer — self-attention', 'training: loss, Adam, dropout, GPU'],
    },
    {
      x: 536, color: '#00ff88', title: 'EXPLAINABLE AI',
      sub: 'open the black box', items: ['LIME — local surrogate', 'SHAP — Shapley values', 'Grad-CAM — image saliency', 'PDP, permutation importance', 'counterfactual: "what would change it?"'],
    },
  ];
  return (
    <svg viewBox="0 0 800 520" className="diagram-svg" role="img" aria-label="Three pillars of modern AI: generative learning models, deep learning architectures and explainable AI techniques">
      <text x="400" y="26" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily={FONT}>
        Generative learning · Deep learning · XAI
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        generate new data → learn it with a deep network → and explain it to a human
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        {cols.map((c) => (
          <g key={c.title}>
            <rect x={c.x} y="64" width="244" height="236" rx="9" fill="rgba(255,255,255,0.035)" stroke={c.color} strokeOpacity="0.45" />
            <rect x={c.x} y="64" width="244" height="30" rx="9" fill={c.color} fillOpacity="0.16" />
            <text x={c.x + 122} y="84" textAnchor="middle" fill={c.color} fontSize="10.5" fontWeight="800" fontFamily={FONT}>{c.title}</text>
            <text x={c.x + 122} y="110" textAnchor="middle" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>{c.sub}</text>
            {c.items.map((it, i) => (
              <g key={it}>
                <circle cx={c.x + 16} cy={132 + i * 34} r="2.4" fill={c.color} />
                <text x={c.x + 26} y={135 + i * 34} fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>{it}</text>
              </g>
            ))}
          </g>
        ))}
        <text x="400" y="314" textAnchor="middle" fill="#8a95ad" fontSize="7.6" fontFamily={FONT}>
          generative learns more than discriminative (P(Y|X)), so it needs more data
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x="20" y="322" width="760" height="70" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="342" fill="#c4ff00" fontSize="8.6" fontWeight="800" fontFamily={FONT}>WHY XAI MATTERS</text>
        <text x="34" y="362" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          trust · debugging · bias detection · GDPR "right to explanation" / EU AI Act · safety and accountability
        </text>
        <text x="34" y="380" fill="#8a95ad" fontSize="8.2" fontFamily={FONT}>
          trade-off: an interpretable model is easy to understand but less accurate · a deep model is accurate but opaque — XAI is the middle path
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x="20" y="404" width="760" height="94" rx="9" fill="rgba(170,0,255,0.05)" stroke="rgba(170,0,255,0.25)" />
        <text x="34" y="424" fill="#aa00ff" fontSize="8.6" fontWeight="800" fontFamily={FONT}>GENERATIVE vs DISCRIMINATIVE</text>
        <text x="34" y="444" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          generative: P(X) or P(X,Y) · can create new samples · GAN, VAE, diffusion, GPT
        </text>
        <text x="34" y="462" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>
          discriminative: only P(Y|X) · classification/prediction · logistic regression, SVM, CNN classifier
        </text>
        <text x="34" y="482" fill="#8a95ad" fontSize="8.2" fontFamily={FONT}>
          risk: deepfakes and misuse · an XAI explanation is itself an approximation — test stability and faithfulness
        </text>
      </g>
    </svg>
  );
}
