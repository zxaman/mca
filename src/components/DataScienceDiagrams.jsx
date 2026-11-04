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
        Data Science isi chain ke beech ke steps ko strong karti hai — cleaning, modelling aur prediction se
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
        <text x="470" y="58" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>kitna structure hai?</text>
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
        Jitna kam structure, utna zyada storage + processing effort — par utni hi zyada insight value
      </text>
      <text x="470" y="460" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Real systems mein teeno types saath aate hain (hybrid data)
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
        Order (rank)? · Equal intervals (distance)? · True zero (absence)? — teeno check karo aur scale decide karo
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
        Same record — chaar formats
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
        <text x="170" y="278" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Sawaal: data itna bada kaise</text>
        <text x="170" y="294" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>store aur process karein?</text>
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
        <text x="750" y="278" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>Sawaal: data se decision</text>
        <text x="750" y="294" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>kaise nikaalein?</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <circle cx="460" cy="92" r="26" fill="#0a0e1a" stroke="#c4ff00" strokeWidth="2" />
        <text x="460" y="98" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>VS</text>
        <text x="460" y="138" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>Big Data ke 5 V&apos;s</text>
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
        Big data ke bina data science chhoti scale par bhi chalti hai; par 5 V&apos;s wala data
      </text>
      <text x="460" y="380" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        handle karne ke liye big data tools zaroori ho jaate hain
      </text>
      <text x="460" y="410" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: pehle difference likho, phir ek example (10 TB clickstream → churn model)
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
        Monitoring se insight milti hai → problem phir se define hota hai (feedback loop)
      </text>
      <text x={cx} y="522" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Real project mein 70–80% time stage 2–3 (data collection + cleaning) mein jaata hai
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
        Evaluation ke baad phase 1 ya 4 par wapas ja sakte hain — isliye CRISP-DM cyclic hai
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
        Har domain ka pattern same hai: problem → data → model → decision → measurable value
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 10 — Data Science vs Statistics vs BI vs ML vs AI
// ============================================================
export function DSvsFieldsDiagram() {
  const fields = [
    { name: 'STATISTICS', q: 'Data reliable hai?', out: 'inference · p-value', tech: 'sampling, tests', color: '#8f9dc4' },
    { name: 'BI', q: 'Kya hua?', out: 'dashboard · KPI', tech: 'SQL, OLAP', color: '#2f6fff' },
    { name: 'ML', q: 'Pattern seekho', out: 'trained model', tech: 'supervised, clustering', color: '#00d4ff' },
    { name: 'AI', q: 'Machine ko smart banao', out: 'autonomous system', tech: 'NLP, CV, agents', color: '#ff8800' },
    { name: 'DATA SCIENCE', q: 'Kya hoga + kya karein?', out: 'insight → decision', tech: 'stats + ML + domain', color: '#c4ff00' },
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
            <text x={x + 14} y={isDs ? 102 : 118} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>SAWAAL</text>
            <text x={x + 14} y={isDs ? 120 : 136} fill="#fff" fontSize="10" fontFamily={FONT}>{f.q}</text>
            <text x={x + 14} y={isDs ? 148 : 164} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>OUTPUT</text>
            <text x={x + 14} y={isDs ? 166 : 182} fill="#fff" fontSize="10" fontFamily={FONT}>{f.out}</text>
            <text x={x + 14} y={isDs ? 194 : 210} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>TOOLS</text>
            <text x={x + 14} y={isDs ? 212 : 228} fill="#fff" fontSize="10" fontFamily={FONT}>{f.tech}</text>
            {isDs && (
              <text x={x + 14} y={268} fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>
                = sabka use + domain
              </text>
            )}
          </g>
        );
      })}
      <text x="460" y="322" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        AI ⊃ ML ⊃ deep learning · Data Science ek applied field hai jo statistics + ML + domain use karti hai
      </text>
      <text x="460" y="344" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: definition se pehle ek line mein "overlap" likho, phir table se difference
      </text>
    </svg>
  );
}
