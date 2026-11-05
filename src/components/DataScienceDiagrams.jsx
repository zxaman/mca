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

// ============================================================
// Diagram 11 — AI ⊃ ML ⊃ DL and how a model learns
// ============================================================
export function MLAIStackDiagram() {
  const steps = [
    { n: '1', t: 'Data collect', d: 'history · sensors · logs' },
    { n: '2', t: 'Clean + features', d: 'missing values, encoding' },
    { n: '3', t: 'Train / test split', d: '80% seekhne ke liye, 20% test' },
    { n: '4', t: 'Train the algorithm', d: 'model weights adjust hote hain' },
    { n: '5', t: 'Evaluate', d: 'accuracy, precision, recall' },
    { n: '6', t: 'Deploy + monitor', d: 'naya data → model dobara train' },
  ];
  return (
    <svg viewBox="0 0 920 480" className="diagram-svg" role="img" aria-label="Artificial intelligence contains machine learning which contains deep learning, next to the six steps of training a model">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        AI ⊃ Machine Learning ⊃ Deep Learning
      </text>
      <text x="460" y="44" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        har Deep Learning ek ML hai · har ML ek AI approach hai · par har AI ML nahi
      </text>

      <g className="diagram-pop">
        <rect x="20" y="62" width="450" height="348" rx="16" fill="rgba(255,136,0,0.06)" stroke="#ff8800" strokeWidth="2" />
        <text x="40" y="90" fill="#ff8800" fontSize="14" fontWeight="800" fontFamily={FONT}>ARTIFICIAL INTELLIGENCE</text>
        <text x="40" y="108" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>machine ko human-like intelligence dena</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '140ms' }}>
        <rect x="52" y="126" width="386" height="232" rx="14" fill="rgba(0,212,255,0.07)" stroke="#00d4ff" strokeWidth="1.8" />
        <text x="70" y="152" fill="#00d4ff" fontSize="12.5" fontWeight="800" fontFamily={FONT}>MACHINE LEARNING</text>
        <text x="70" y="170" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>data se pattern seekhna, bina explicit rules</text>

        <rect x="84" y="188" width="322" height="132" rx="12" fill="rgba(196,255,0,0.07)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="102" y="212" fill="#c4ff00" fontSize="11.5" fontWeight="800" fontFamily={FONT}>DEEP LEARNING</text>
        <text x="102" y="232" fill="#fff" fontSize="10" fontFamily={FONT}>neural networks, 3+ hidden layers</text>
        <text x="102" y="252" fill="#fff" fontSize="10" fontFamily={FONT}>images · speech · language · video</text>
        <text x="102" y="274" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>bahut data + GPU chahiye</text>
        <text x="102" y="296" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>CNN, RNN, transformers</text>

        <text x="70" y="330" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>ML examples</text>
        <text x="70" y="346" fill="#fff" fontSize="10" fontFamily={FONT}>spam filter · churn · price · clustering</text>
      </g>

      <text x="40" y="376" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>AI examples</text>
      <text x="40" y="394" fill="#fff" fontSize="10" fontFamily={FONT}>self-driving · chatbot · game playing · robotics</text>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <text x="706" y="86" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>
          ML model kaise seekhta hai
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
          evaluate → deploy → monitor · naya data aaye to dobara step 1 (loop)
        </text>
      </g>

      <text x="460" y="438" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Training = data + algorithm + feedback · learning ka matlab model ke numbers (weights) data ke hisaab se badalna
      </text>
      <text x="460" y="462" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: nested circle diagram banao (AI &gt; ML &gt; DL), phir 6 steps likho
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
      name: 'DATA ENGINEER', color: '#2f6fff', tag: 'data ko laata hai',
      work: ['source → warehouse', 'pipelines + ETL'],
      skills: ['SQL · Python', 'Spark · Airflow'],
      output: 'clean, reliable data',
    },
    {
      name: 'DATA ANALYST', color: '#00d4ff', tag: 'kya hua, batata hai',
      work: ['dashboards + reports', 'trend + KPI analysis'],
      skills: ['SQL · Excel', 'Power BI · Tableau'],
      output: 'insight + dashboard',
    },
    {
      name: 'DATA SCIENTIST', color: '#c4ff00', tag: 'kya hoga, predict karta hai',
      work: ['experiment + model', 'statistics + ML'],
      skills: ['Python/R · stats', 'scikit-learn · SQL'],
      output: 'model + recommendation',
    },
    {
      name: 'ML ENGINEER', color: '#ff8800', tag: 'model ko chalata hai',
      work: ['deploy + serve model', 'monitor + retrain'],
      skills: ['Python · Docker', 'MLOps · cloud'],
      output: 'live prediction API',
    },
  ];
  return (
    <svg viewBox="0 0 920 480" className="diagram-svg" role="img" aria-label="Data engineer, data analyst, data scientist and machine learning engineer roles with their work, skills and output">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Data science team ke chaar roles
      </text>
      <text x="460" y="44" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        data → insight → model → production · ek hi project mein chaaron kaam aate hain
      </text>
      {roles.map((r, i) => {
        const x = 20 + i * 226;
        return (
          <g key={r.name} className="diagram-pop" style={{ animationDelay: `${80 + i * 120}ms` }}>
            <rect x={x} y="62" width="200" height="306" rx="12" fill="rgba(255,255,255,0.03)" stroke={r.color} strokeWidth="1.6" strokeOpacity="0.75" />
            <rect x={x} y="62" width="200" height="52" rx="12" fill={r.color} fillOpacity="0.15" />
            <text x={x + 100} y="84" textAnchor="middle" fill={r.color} fontSize="11" fontWeight="800" fontFamily={FONT}>{r.name}</text>
            <text x={x + 100} y="101" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{r.tag}</text>

            <text x={x + 14} y="136" fill="#9ab0e0" fontSize="8.5" fontWeight="700" fontFamily={FONT}>KAAM</text>
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
            <text x={x + 14} y="330" fill="#9ab0e0" fontSize="8.5" fontWeight="700" fontFamily={FONT}>SAWAAL</text>
            <text x={x + 14} y="349" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>{['kahan se aaya?', 'kya hua?', 'kya hoga?', 'chal kaise raha?'][i]}</text>
          </g>
        );
      })}
      {[1, 2, 3].map((i) => (
        <text key={i} x={20 + i * 226 - 13} y="222" textAnchor="middle" fill="#9ab0e0" fontSize="15" fontFamily={FONT}>
          →
        </text>
      ))}
      <text x="460" y="398" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Chhota team: ek data scientist chaar kaam karta hai · Bada team: roles specialised hote hain
      </text>
      <text x="460" y="420" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Data Engineer banata hai · Data Analyst samajhta hai · Data Scientist model banata hai · ML Engineer chalata hai
      </text>
      <text x="460" y="442" textAnchor="middle" fill="#5a6a9e" fontSize="9.5" fontFamily={FONT}>
        Exam mein table + ek project example (churn) likhna best answer hota hai
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
    { stage: 'Cleaning', what: 'outliers aur missing values detect karna (IQR, z-score)' },
    { stage: 'EDA', what: 'distribution, spread aur correlation dekhna' },
    { stage: 'Modelling', what: 'regression, assumptions, error ka matlab' },
    { stage: 'Evaluation', what: 'p-value, confidence interval, A/B test' },
  ];
  return (
    <svg viewBox="0 0 920 480" className="diagram-svg" role="img" aria-label="Statistics as the five layer foundation under data science, with the stages where each part is used">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Mathematical statistics — data science ki neev
      </text>
      <text x="460" y="44" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        statistics batati hai ki result bharose ke layak hai ya sirf ittefaq (chance)
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
          Statistics kahan kaam aati hai
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
        ML prediction deta hai, statistics batati hai ki prediction par bharosa kitna karein
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
        Data Pre-processing — kachre se quality data tak
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        Garbage In, Garbage Out — model jitna achha data utna hi achha
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
        <text x="436" y="232" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>PRE-PROCESSING KITNA TIME LETA HAI</text>
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
        <text x="436" y="366" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>Industry reports: analyst ka 60–80% time data prepare karne mein jaata hai</text>
      </g>

      <text x="400" y="418" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        Pre-processing ke baad hi model ka result bharosemand hota hai
      </text>
      <text x="400" y="442" textAnchor="middle" fill="#5a6a9e" fontSize="9.6" fontFamily={FONT}>
        Forms: data cleaning (values theek) · integration (sources jodo) · transformation (shape badlo) · reduction (size ghatao)
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
        Data pre-processing ki zaroorat kyun hai?
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        Real world data kabhi ready-to-use nahi hota
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
        <text x="34" y="206" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>missing · outlier · inconsistent · duplicate — sab ek hi table mein</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="410" y="64" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <text x="424" y="84" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>4 QUALITY DIMENSIONS FAIL</text>
        {[
          ['Incomplete', 'attributes missing, khaali cells', '#ff7a90'],
          ['Noisy', 'typo, random error, wrong reading', '#ff8800'],
          ['Inconsistent', 'Pune vs pune, 45,000 vs 45000', '#ffd166'],
          ['Redundant', 'same record 2 baar, extra columns', '#00d4ff'],
        ].map(([t, d, c], i) => (
          <g key={t}>
            <text x="424" y={106 + i * 26} fill={c} fontSize="9.2" fontWeight="700" fontFamily={FONT}>✗ {t}</text>
            <text x="526" y={106 + i * 26} fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>{d}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="20" y="232" width="760" height="96" rx="9" fill="rgba(47,111,255,0.07)" stroke="rgba(47,111,255,0.4)" />
        <text x="400" y="254" textAnchor="middle" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>DIRTY DATA KA ASAR — CHAIN REACTION</text>
        {[
          ['Wrong input', 'age 999, salary blank'],
          ['Wrong training', 'model galat pattern seekhta hai'],
          ['Wrong output', 'forecast ya score galat'],
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
        <text x="34" y="366" fill="#ff7a90" fontSize="9.6" fontWeight="800" fontFamily={FONT}>AGAR PRE-PROCESS NA KAREIN</text>
        <text x="34" y="386" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• model accuracy girti hai, error badhta hai</text>
        <text x="34" y="404" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• algorithm crash ya NaN / type error</text>
        <text x="34" y="422" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• duplicate rows se result bias</text>
        <text x="34" y="440" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• 80% project time debugging mein jaata hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x="410" y="346" width="370" height="104" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="424" y="366" fill="#00ff88" fontSize="9.6" fontWeight="800" fontFamily={FONT}>PRE-PROCESS KE FAYDE</text>
        <text x="424" y="386" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• better accuracy aur stable model</text>
        <text x="424" y="404" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• training fast (kam rows/columns)</text>
        <text x="424" y="422" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• same format par algorithms compare ho sakte hain</text>
        <text x="424" y="440" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• reproducible aur explainable pipeline</text>
      </g>

      <text x="400" y="480" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        “Achha model nahi, achha data jeetta hai”
      </text>
      <text x="400" y="504" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Exam line: pre-processing data ko complete, consistent, noise-free aur model-ready banata hai
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
        Data Cleaning — gande values ko theek karna
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        missing values · noise · outliers · duplicates · inconsistency
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="370" height="168" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.45)" />
        <text x="34" y="84" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>1 · MISSING VALUES</text>
        <text x="34" y="104" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Row drop — agar missing bahut kam ho</text>
        <text x="34" y="122" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Mean / median / mode se replace</text>
        <text x="34" y="140" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Constant ya “Unknown” category</text>
        <text x="34" y="158" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Model se predict (KNN / regression)</text>
        <text x="34" y="176" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Forward / backward fill (time series)</text>
        <text x="34" y="200" fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>median better hai jab outliers hon</text>
        <text x="34" y="218" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>angootha: &lt;5% missing → impute, &gt;40% → column chhod do</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="410" y="64" width="370" height="168" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.45)" />
        <text x="424" y="84" fill="#00d4ff" fontSize="10" fontWeight="800" fontFamily={FONT}>2 · NOISY DATA (random error)</text>
        <text x="424" y="104" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Binning — values ko bins mein daal kar smooth</text>
        <text x="424" y="122" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Regression — fit line se value replace</text>
        <text x="424" y="140" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Clustering — outlier cluster alag karke detect</text>
        <text x="424" y="158" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Smoothing — moving average, median filter</text>
        <text x="424" y="176" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Typo fix — “Pune” vs “pune”, spelling dictionary</text>
        <text x="424" y="200" fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>price 32, 35, 34, 999 → 999 noise hai</text>
        <text x="424" y="218" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>smoothing se pattern dikhta hai, random error kam hota hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="20" y="248" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="268" fill="#ff8800" fontSize="10" fontWeight="800" fontFamily={FONT}>3 · OUTLIERS</text>
        <text x="34" y="288" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• IQR rule: Q1 − 1.5·IQR se Q3 + 1.5·IQR ke bahar</text>
        <text x="34" y="306" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Z-score: |z| &gt; 3 (mean se 3 SD door)</text>
        <text x="34" y="324" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Box plot / scatter se visual detect</text>
        <text x="34" y="342" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Handle: remove, cap (winsorise), transform, alag model</text>
        <text x="34" y="366" fill="#ff7a90" fontSize="8.4" fontFamily={FONT}>Har outlier galti nahi — fraud data genuinely outlier hota hai</text>
        <text x="34" y="386" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>IQR = Q3 − Q1 · z = (x − μ) / σ</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="410" y="248" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.45)" />
        <text x="424" y="268" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>4 · DUPLICATES + INCONSISTENCY</text>
        <text x="424" y="288" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Exact duplicate rows hatao (drop_duplicates)</text>
        <text x="424" y="306" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Fuzzy match — “Riya Sharma” = “riya s.”</text>
        <text x="424" y="324" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Units same karo — kg/g, Rs/$, km/mile</text>
        <text x="424" y="342" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Date format — dd-mm-yyyy vs yyyy-mm-dd</text>
        <text x="424" y="360" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Trim spaces, lower-case, standard city names</text>
        <text x="424" y="382" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>Same person do baar = analysis double count karega</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="20" y="412" width="760" height="42" rx="8" fill="rgba(0,255,136,0.07)" stroke="rgba(0,255,136,0.4)" />
        <text x="400" y="430" textAnchor="middle" fill="#00ff88" fontSize="9.6" fontWeight="700" fontFamily={FONT}>
          Cleaning ka output: ek row = ek sach, ek column = ek hi unit, koi khaali cell nahi
        </text>
        <text x="400" y="446" textAnchor="middle" fill="#9ab0e0" fontSize="8.6" fontFamily={FONT}>
          Tools: pandas (fillna / dropna / clip / drop_duplicates), OpenRefine, Excel Power Query, SQL
        </text>
      </g>

      <text x="400" y="476" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily={FONT}>
        Cleaning rule: pehle problem ko samjho, phir technique chuno — andhadhund replace nahi
      </text>
      <text x="400" y="502" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        Exam line: data cleaning missing values, noise, outliers aur duplicates ko handle karti hai
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
        Data Integration — kai sources, ek consistent dataset
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
          'Schema matching (naam/type)',
          'Entity resolution (same person?)',
          'Value conflict resolve',
          'Metadata + lineage save',
        ].map((t, i) => (
          <text key={t} x="284" y={108 + i * 24} fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• {t}</text>
        ))}
        <text x="284" y="212" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>ETL / ELT tools yahi kaam karte hain</text>
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
        <text x="534" y="208" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>ek row = ek entity, saare attributes saath</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x="20" y="240" width="370" height="158" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,122,144,0.45)" />
        <text x="34" y="260" fill="#ff7a90" fontSize="10" fontWeight="800" fontFamily={FONT}>INTEGRATION KE 4 CHALLENGE</text>
        <text x="34" y="282" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>1. Entity identification</text>
        <text x="34" y="298" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>“Riya Sharma”, “riya s.”, “R. Sharma” — ek hi insaan?</text>
        <text x="34" y="320" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>2. Redundancy</text>
        <text x="34" y="336" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>duplicate attribute — correlation r ≈ 1, chi-square test</text>
        <text x="34" y="358" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>3. Schema conflict</text>
        <text x="34" y="374" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>naam alag (cust_id vs customer_no), unit alag (Rs vs $)</text>
        <text x="34" y="392" fill="#ff7a90" fontSize="8.8" fontWeight="700" fontFamily={FONT}>4. Tuple duplication</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '780ms' }}>
        <rect x="410" y="240" width="370" height="158" rx="9" fill="rgba(47,111,255,0.07)" stroke="rgba(47,111,255,0.4)" />
        <text x="424" y="260" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>SOLUTION (practical)</text>
        <text x="424" y="282" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Common key / surrogate key banao (customer_id)</text>
        <text x="424" y="300" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Data dictionary aur naming standard fix karo</text>
        <text x="424" y="318" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Fuzzy matching se entity resolve (email + phone)</text>
        <text x="424" y="336" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Units aur currency ek base par convert karo</text>
        <text x="424" y="354" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Duplicate detect karke master record banao</text>
        <text x="424" y="372" fill="#dbe6ff" fontSize="8.6" fontFamily={FONT}>• Lineage note karo — data kis source se aaya</text>
        <text x="424" y="390" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Without lineage, galat report ka source dhoondhna mushkil</text>
      </g>

      <text x="400" y="424" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        Integration ka goal: “ek sach” (single source of truth), duplicate aur conflict ke bina
      </text>
      <text x="400" y="448" textAnchor="middle" fill="#5a6a9e" fontSize="9.6" fontFamily={FONT}>
        IT tools: Apache NiFi, Talend, Informatica, Airflow, dbt; code: pandas merge / SQL JOIN
      </text>
      <text x="400" y="476" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        Exam line: data integration heterogeneous sources ko ek schema par laata hai
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
        Data Transformation — data ka shape aur scale badalna
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        model ko numbers samajhne hote hain — unhe same scale par laana zaroori hai
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="760" height="92" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.45)" />
        <text x="34" y="84" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>1 · NORMALISATION / SCALING</text>
        <text x="34" y="106" fill="#c4ff00" fontSize="9" fontFamily="'Consolas', monospace">Min-Max:  x' = (x − min) / (max − min)   → range 0 se 1</text>
        <text x="34" y="126" fill="#c4ff00" fontSize="9" fontFamily="'Consolas', monospace">Z-score:  z = (x − μ) / σ                → mean 0, SD 1</text>
        <text x="34" y="146" fill="#c4ff00" fontSize="9" fontFamily="'Consolas', monospace">Decimal:  x' = x / 10^j                  → 986 → 0.986</text>
        <text x="430" y="106" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>Salary 45,000 vs Age 24 — bina scale,</text>
        <text x="430" y="122" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>distance based algorithms salary ko</text>
        <text x="430" y="138" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>zyada weight de dete hain (KNN, K-means).</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="20" y="168" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.45)" />
        <text x="34" y="188" fill="#00d4ff" fontSize="10" fontWeight="800" fontFamily={FONT}>2 · ATTRIBUTE ENCODING</text>
        <text x="34" y="208" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Nominal → One-hot: city = Pune/Delhi</text>
        <text x="34" y="226" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Ordinal → Label: small=1, med=2, large=3</text>
        <text x="34" y="244" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Binary → 0/1: yes/no, male/female</text>
        <text x="34" y="262" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Text → TF-IDF, bag of words, embeddings</text>
        <text x="34" y="282" fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>One-hot avoid: category count bahut zyada ho</text>
        <text x="34" y="300" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>Label encoding se model galat order seekh sakta hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="410" y="168" width="370" height="150" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.45)" />
        <text x="424" y="188" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>3 · DISCRETISATION (BINNING)</text>
        <text x="424" y="208" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Equal-width — range ko barabar hisson mein</text>
        <text x="424" y="226" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Equal-frequency — har bin mein same count</text>
        <text x="424" y="244" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Custom — domain ke hisaab se (0-18, 19-30, 31-45)</text>
        <text x="424" y="262" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Concept hierarchy — Pune → Maharashtra → India</text>
        <text x="424" y="284" fill="#ffd166" fontSize="9" fontFamily="'Consolas', monospace">age 24, 27, 31, 44 → 20s [24,27]</text>
        <text x="424" y="302" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>noise kam, interpret karna aasan, thoda information loss</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="330" width="370" height="104" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="350" fill="#ff8800" fontSize="10" fontWeight="800" fontFamily={FONT}>4 · SMOOTHING + AGGREGATION</text>
        <text x="34" y="370" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Smoothing se noise kam — moving average, median</text>
        <text x="34" y="388" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Aggregation — daily → monthly sales (summary)</text>
        <text x="34" y="406" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Log transform — right skew data ko linear banata hai</text>
        <text x="34" y="424" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>Aggregation row count kam karta hai aur pattern dikhata hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x="410" y="330" width="370" height="104" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="424" y="350" fill="#00ff88" fontSize="10" fontWeight="800" fontFamily={FONT}>5 · ATTRIBUTE CONSTRUCTION</text>
        <text x="424" y="370" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• dob se age nikaalo; date se day/month/year</text>
        <text x="424" y="388" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• price × qty = total_amount</text>
        <text x="424" y="406" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• BMI = weight / height², ratio features</text>
        <text x="424" y="424" fill="#9ab0e0" fontSize="8.2" fontFamily={FONT}>Raw columns se zyada useful column banana = feature engineering</text>
      </g>

      <rect x="20" y="446" width="760" height="26" rx="7" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.4)" />
      <text x="400" y="464" textAnchor="middle" fill="#c4ff00" fontSize="9" fontFamily={FONT}>
        Order yaad rakho: clean → integrate → transform → reduce. Transformation clean data par hi lagao.
      </text>

      <text x="400" y="494" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        Exam line: transformation smoothing, aggregation, generalisation, normalisation aur encoding karta hai
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
        Data Reduction — data chhota, matlab wahi
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        volume kam karo, analysis ka result lagbhag same rakho
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
        ['DIMENSIONALITY', 'kam columns', '#6fb2ff', 20, [
          'Feature selection: filter, wrapper, embedded',
          'PCA — principal component analysis',
          'LDA, autoencoder, chi-square, RFE',
          'Example: 1000 → 12 PCs = 95% variance',
        ]],
        ['NUMEROSITY', 'kam rows', '#c4ff00', 280, [
          'Sampling: random, stratified, cluster',
          'Histogram, clustering, regression model',
          'Binning + aggregation se summary',
          'Example: 1 lakh → 10,000 representative',
        ]],
        ['COMPRESSION', 'kam size', '#ff8800', 540, [
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
        <text x="34" y="342" fill="#00ff88" fontSize="10" fontWeight="800" fontFamily={FONT}>PCA EK LINE MEIN</text>
        <text x="34" y="362" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>100 correlated columns ko kuch naye orthogonal</text>
        <text x="34" y="380" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>components mein badal deta hai, jo zyada tar</text>
        <text x="34" y="398" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>variation (information) hold karte hain.</text>
        <text x="34" y="418" fill="#c4ff00" fontSize="8.4" fontFamily={FONT}>Trade-off: interpret karna mushkil ho jaata hai</text>
        <text x="34" y="434" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Feature selection interpretable rehta hai — pehle wahi try karo</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x="410" y="322" width="370" height="118" rx="9" fill="rgba(255,122,144,0.06)" stroke="rgba(255,122,144,0.4)" />
        <text x="424" y="342" fill="#ff7a90" fontSize="10" fontWeight="800" fontFamily={FONT}>DHYAN RAKHO</text>
        <text x="424" y="362" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Reduction ke baad accuracy test karo —</text>
        <text x="424" y="380" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>  information loss chhupa hua aa sakta hai</text>
        <text x="424" y="398" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Rare class / fraud rows sampling se gayab na ho</text>
        <text x="424" y="416" fill="#dbe6ff" fontSize="8.8" fontFamily={FONT}>• Split ke baad sirf train par fit karo (leakage)</text>
      </g>

      <text x="400" y="462" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="700" fontFamily={FONT}>
        Reduction = speed + storage bachat, par information ka balance
      </text>
      <text x="400" y="486" textAnchor="middle" fill="#9ab0e0" fontSize="9.6" fontFamily={FONT}>
        Exam line: reduction mein dimensionality reduction, numerosity reduction aur compression aate hain
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
        Data Warehouse — analysis ke liye alag godown
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        Inmon: “subject-oriented, integrated, time-variant, non-volatile collection of data”
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="185" height="140" rx="9" fill="rgba(111,178,255,0.07)" stroke="rgba(111,178,255,0.5)" />
        <text x="112" y="86" textAnchor="middle" fill="#6fb2ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>1 · SUBJECT ORIENTED</text>
        <text x="34" y="108" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Sales, customer, product,</text>
        <text x="34" y="124" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>inventory — analysis ke subject</text>
        <text x="34" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>ke hisaab se data organise.</text>
        <text x="34" y="164" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Operational DB: application ke</text>
        <text x="34" y="178" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>hisaaab se (billing, HR, CRM).</text>
        <text x="34" y="196" fill="#c4ff00" fontSize="8" fontFamily={FONT}>Irrelevant detail hata di jaati hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="215" y="64" width="185" height="140" rx="9" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.5)" />
        <text x="307" y="86" textAnchor="middle" fill="#00d4ff" fontSize="9.4" fontWeight="800" fontFamily={FONT}>2 · INTEGRATED</text>
        <text x="229" y="108" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Kai sources ek hi format mein:</text>
        <text x="229" y="124" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>same code, same unit, same naam.</text>
        <text x="229" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Pune/pune, kg/g, Rs/$ — sab fix.</text>
        <text x="229" y="164" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>ETL ke waqt encoding + naming</text>
        <text x="229" y="178" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>standard apply hote hain.</text>
        <text x="229" y="196" fill="#c4ff00" fontSize="8" fontFamily={FONT}>“Ek company, ek definition”</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="410" y="64" width="185" height="140" rx="9" fill="rgba(196,255,0,0.06)" stroke="rgba(196,255,0,0.5)" />
        <text x="502" y="86" textAnchor="middle" fill="#c4ff00" fontSize="9.4" fontWeight="800" fontFamily={FONT}>3 · TIME VARIANT</text>
        <text x="424" y="108" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Har record ke saath time hota</text>
        <text x="424" y="124" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>hai — daily/weekly/monthly</text>
        <text x="424" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>snapshots 5–10 saal tak.</text>
        <text x="424" y="164" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Operational DB: sirf current</text>
        <text x="424" y="178" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>value (aaj ka balance).</text>
        <text x="424" y="196" fill="#c4ff00" fontSize="8" fontFamily={FONT}>Trend dekhne ke liye history chahiye</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="605" y="64" width="175" height="140" rx="9" fill="rgba(255,136,0,0.07)" stroke="rgba(255,136,0,0.5)" />
        <text x="692" y="86" textAnchor="middle" fill="#ff8800" fontSize="9.4" fontWeight="800" fontFamily={FONT}>4 · NON-VOLATILE</text>
        <text x="619" y="108" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>Load ke baad data update ya</text>
        <text x="619" y="124" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>delete nahi hota — sirf read</text>
        <text x="619" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>aur periodic refresh.</text>
        <text x="619" y="164" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Operational DB: insert, update,</text>
        <text x="619" y="178" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>delete — roz hazaaron baar.</text>
        <text x="619" y="196" fill="#c4ff00" fontSize="8" fontFamily={FONT}>Isliye report reproducer ho sakti hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="20" y="222" width="760" height="136" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
        <text x="34" y="242" fill="#fff" fontSize="10" fontWeight="800" fontFamily={FONT}>OPERATIONAL DATABASE vs DATA WAREHOUSE</text>
        {[
          ['Purpose', 'roz ka transaction chalana', 'analysis + decision support'],
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
        Yaad rakhne ka tareeka: S-I-T-N (Subject, Integrated, Time-variant, Non-volatile)
      </text>
      <text x="400" y="398" textAnchor="middle" fill="#5a6a9e" fontSize="9.4" fontFamily={FONT}>
        Data mart = ek department ka chhota warehouse · metadata = data ke baare mein data
      </text>
      <text x="400" y="422" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Examples: Amazon Redshift, Google BigQuery, Snowflake, Azure Synapse
      </text>
      <text x="400" y="452" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: DW subject-oriented, integrated, time-variant aur non-volatile hota hai
      </text>
      <text x="400" y="480" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>
        DW ek product nahi, ek process + architecture hai — data ko analysis ke liye taiyaar karta hai
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
        <text x="34" y="322" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>pehle central DW banao, phir marts — consistent par slow/mehnga</text>
        <text x="34" y="344" fill="#00ff88" fontSize="8.6" fontWeight="700" fontFamily={FONT}>Bottom-up (Kimball)</text>
        <text x="34" y="360" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>pehle data marts, phir integrate — fast value, consistency risk</text>
        <text x="34" y="378" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Aaj kal: Data Vault / lakehouse hybrid models bhi popular</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="410" y="266" width="370" height="120" rx="9" fill="rgba(255,136,0,0.06)" stroke="rgba(255,136,0,0.4)" />
        <text x="424" y="286" fill="#ff8800" fontSize="9.4" fontWeight="800" fontFamily={FONT}>METADATA — DW KA INDEX</text>
        <text x="424" y="306" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• Technical: schema, table, column, ETL job, run time</text>
        <text x="424" y="324" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• Business: definition, owner, KPI formula, refresh</text>
        <text x="424" y="342" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• Lineage: ye number kis source se aaya</text>
        <text x="424" y="362" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>• Data quality rules aur test results</text>
        <text x="424" y="380" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Metadata ke bina DW ek black box ban jaata hai</text>
      </g>

      <text x="400" y="410" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily={FONT}>
        Layers: staging → warehouse → mart → presentation — har layer ka apna kaam
      </text>
      <text x="400" y="436" textAnchor="middle" fill="#5a6a9e" fontSize="9.4" fontFamily={FONT}>
        Modern stack: S3/GCS (lake) + dbt (transform) + Snowflake/BigQuery (warehouse) + BI
      </text>
      <text x="400" y="464" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: DW architecture mein source, ETL, warehouse, marts aur reporting tiers hote hain
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
        DW ka data isi pipeline se aata hai — roz, har ghante, real time
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="64" width="235" height="160" rx="9" fill="rgba(111,178,255,0.07)" stroke="rgba(111,178,255,0.55)" />
        <text x="34" y="84" fill="#6fb2ff" fontSize="10.4" fontWeight="800" fontFamily={FONT}>E — EXTRACT</text>
        <text x="34" y="104" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Full extract — poora table copy</text>
        <text x="34" y="122" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Incremental — sirf naye/badle rows</text>
        <text x="34" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• CDC — change data capture (log based)</text>
        <text x="34" y="158" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Sources: DB, API, files, streams, SaaS</text>
        <text x="34" y="176" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Staging area mein raw copy rakho</text>
        <text x="34" y="200" fill="#c4ff00" fontSize="8" fontFamily={FONT}>Timestamp / watermark note karo</text>
        <text x="34" y="216" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Extract fail ho to source par load na pade</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="280" y="64" width="240" height="160" rx="9" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.55)" />
        <text x="294" y="84" fill="#c4ff00" fontSize="10.4" fontWeight="800" fontFamily={FONT}>T — TRANSFORM</text>
        <text x="294" y="104" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Clean — missing, duplicate, typo</text>
        <text x="294" y="122" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Standardise — code, unit, date format</text>
        <text x="294" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Integrate — keys se sources jodo</text>
        <text x="294" y="158" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Aggregate — daily → monthly</text>
        <text x="294" y="176" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Derive — total, margin, age, flags</text>
        <text x="294" y="194" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• SCD — slowly changing dimension</text>
        <text x="294" y="216" fill="#ff8800" fontSize="7.8" fontFamily={FONT}>Business rules yahin lagte hain</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="545" y="64" width="235" height="160" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.55)" />
        <text x="559" y="84" fill="#00ff88" fontSize="10.4" fontWeight="800" fontFamily={FONT}>L — LOAD</text>
        <text x="559" y="104" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Full refresh — truncate + insert</text>
        <text x="559" y="122" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Incremental append — naye rows</text>
        <text x="559" y="140" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Upsert / merge — SCD type 1 &amp; 2</text>
        <text x="559" y="158" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Bulk load — file se warehouse</text>
        <text x="559" y="176" fill="#dbe6ff" fontSize="8.4" fontFamily={FONT}>• Load order — dimension pehle, fact baad</text>
        <text x="559" y="200" fill="#c4ff00" fontSize="8" fontFamily={FONT}>Load ke baad row count + checksum verify</text>
        <text x="559" y="216" fill="#9ab0e0" fontSize="7.8" fontFamily={FONT}>Idempotent load — dobara chalane par duplicate na bane</text>
      </g>

      {[['253', '282'], ['518', '547']].map(([a, b]) => (
        <g key={a}>
          <line x1={a} y1="144" x2={b} y2="144" stroke="#5a6a9e" strokeWidth="1.6" />
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="20" y="240" width="370" height="132" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="34" y="260" fill="#c4ff00" fontSize="9.6" fontWeight="800" fontFamily={FONT}>SCD — SLOWLY CHANGING DIMENSION</text>
        <text x="34" y="280" fill="#6fb2ff" fontSize="8.4" fontFamily={FONT}>Type 1 — purani value overwrite</text>
        <text x="34" y="296" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>simple, history nahi milti</text>
        <text x="34" y="316" fill="#00ff88" fontSize="8.4" fontFamily={FONT}>Type 2 — naya row + valid_from / valid_to</text>
        <text x="34" y="332" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>poori history, is_active flag, surrogat key</text>
        <text x="34" y="352" fill="#ffd166" fontSize="8.4" fontFamily={FONT}>Type 3 — previous value extra column</text>
        <text x="34" y="366" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Example: customer ka city change — Type 2 se purani sales bhi sahi rehti hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="410" y="240" width="370" height="132" rx="9" fill="rgba(47,111,255,0.07)" stroke="rgba(47,111,255,0.4)" />
        <text x="424" y="260" fill="#6fb2ff" fontSize="9.6" fontWeight="800" fontFamily={FONT}>ETL vs ELT + QUALITY CHECKS</text>
        <text x="424" y="280" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>ETL: transform pehle, phir load (classic DW)</text>
        <text x="424" y="296" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>ELT: load pehle, transform warehouse mein (cloud, dbt)</text>
        <text x="424" y="316" fill="#00ff88" fontSize="8.2" fontFamily={FONT}>Checks: null %, duplicate count, referential integrity,</text>
        <text x="424" y="330" fill="#00ff88" fontSize="8.2" fontFamily={FONT}>row count match, amount reconciliation, freshness</text>
        <text x="424" y="350" fill="#ff7a90" fontSize="8.2" fontFamily={FONT}>Fail ho to job roko (fail fast), alert bhejo, DW ko galat data se bachao</text>
        <text x="424" y="366" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Scheduling: Airflow, cron, Azure Data Factory, dbt + orchestrator</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="20" y="386" width="760" height="46" rx="8" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.35)" />
        <text x="400" y="404" textAnchor="middle" fill="#00ff88" fontSize="9" fontWeight="700" fontFamily={FONT}>
          Typical DW load: raat 1 baje extract → 1:15 transform → 1:40 load → 2:00 validation → dashboards fresh by 6 AM
        </text>
        <text x="400" y="422" textAnchor="middle" fill="#9ab0e0" fontSize="8.4" fontFamily={FONT}>
          Tools: Informatica, Talend, SSIS, Azure Data Factory, Apache Airflow, dbt, Apache NiFi, Kafka (streaming)
        </text>
      </g>

      <text x="400" y="458" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily={FONT}>
        ETL  = DW ka pehla aur sabse zaroori step — yahan data “trustworthy” banta hai
      </text>
      <text x="400" y="484" textAnchor="middle" fill="#8f9dc4" fontSize="10" fontFamily={FONT}>
        Exam line: ETL mein extract (sources se lena), transform (clean + conform) aur load (DW mein daalna) aata hai
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
        Fact aur Dimension Tables — kaam aur context
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        fact = “kitna hua” (numbers) · dimension = “kisne, kab, kahan” (context)
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="270" y="176" width="260" height="142" rx="9" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="1.8" />
        <text x="400" y="196" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>FACT_SALES</text>
        <text x="400" y="211" textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>grain: ek row = ek order line</text>
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
        <text x="34" y="472" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• rows bahut zyada, columns kam</text>
        <text x="34" y="490" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Additive vs semi-additive (balance)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '660ms' }}>
        <rect x="277" y="404" width="245" height="96" rx="9" fill="rgba(111,178,255,0.05)" stroke="rgba(111,178,255,0.35)" />
        <text x="291" y="422" fill="#6fb2ff" fontSize="8.8" fontWeight="800" fontFamily={FONT}>DIMENSION TABLE</text>
        <text x="291" y="440" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• descriptive attributes (text)</text>
        <text x="291" y="456" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• surrogate primary key</text>
        <text x="291" y="472" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• rows kam, columns zyada</text>
        <text x="291" y="490" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>denormalised, flat, readable</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '720ms' }}>
        <rect x="534" y="404" width="246" height="96" rx="9" fill="rgba(255,136,0,0.05)" stroke="rgba(255,136,0,0.35)" />
        <text x="548" y="422" fill="#ff8800" fontSize="8.8" fontWeight="800" fontFamily={FONT}>GRAIN — SABSE PEHLE DECIDE</text>
        <text x="548" y="440" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>“ek fact row kis level par hai?”</text>
        <text x="548" y="456" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>ek per order line / per day / per visit</text>
        <text x="548" y="472" fill="#fff" fontSize="7.8" fontFamily={FONT}>Grain galat = double counting</text>
        <text x="548" y="490" fill="#9ab0e0" fontSize="7.4" fontFamily={FONT}>Fact types: transaction, periodic, accumulating</text>
      </g>

      <text x="400" y="156" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Fact + dimension = “kitna + kisne/kab/kahan” — isi se har OLAP sawaal banta hai
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
        Star Schema — ek fact, seedhe jude dimensions
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        simple, fast, reporting ke liye best — dimension denormalised (flat)
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
        <text x="400" y="274" textAnchor="middle" fill="#9ab0e0" fontSize="7.2" fontFamily={FONT}>grain: ek row = ek order line</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="386" width="370" height="86" rx="9" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.4)" />
        <text x="34" y="404" fill="#00ff88" fontSize="9" fontWeight="800" fontFamily={FONT}>FAYDE</text>
        <text x="34" y="422" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• simple — fact se dimension tak 1 join</text>
        <text x="34" y="438" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• fast query (star join), BI tools ke liye easy</text>
        <text x="34" y="454" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• dimension readable, cube banana aasan</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="410" y="386" width="370" height="86" rx="9" fill="rgba(255,122,144,0.06)" stroke="rgba(255,122,144,0.4)" />
        <text x="424" y="404" fill="#ff7a90" fontSize="9" fontWeight="800" fontFamily={FONT}>NUKSaan</text>
        <text x="424" y="422" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• data redundancy aur zyada storage</text>
        <text x="424" y="438" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• dimension bahut bada ho to slow</text>
        <text x="424" y="454" fill="#dbe6ff" fontSize="8" fontFamily={FONT}>• update anomaly ka risk (ETL se handle)</text>
      </g>

      <text x="400" y="492" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: star schema mein central fact table seedhe denormalised dimension tables se juda hota hai
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
        Snowflake Schema — dimensions ko normalise kiya gaya star
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        dimension ke andar dimension → kam redundancy, zyada joins
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
        <text x="400" y="311" textAnchor="middle" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>DIM_PRODUCT ke sub-dimensions (2 hop)</text>
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
        <text x="554" y="110" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• redundancy kam, storage bachta hai</text>
        <text x="554" y="128" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• dimension update ek hi jagah</text>
        <text x="554" y="146" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• normalised = data integrity better</text>
        <text x="554" y="164" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• bahut bade dimension ke liye better</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '660ms' }}>
        <rect x="540" y="196" width="240" height="114" rx="9" fill="rgba(255,122,144,0.06)" stroke="rgba(255,122,144,0.4)" />
        <text x="554" y="216" fill="#ff7a90" fontSize="8.8" fontWeight="800" fontFamily={FONT}>NUKSaan</text>
        <text x="554" y="236" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• zyada joins → query slow</text>
        <text x="554" y="254" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• schema complex, samajhna mushkil</text>
        <text x="554" y="272" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• BI tool setup aur ETL mehnat</text>
        <text x="554" y="290" fill="#dbe6ff" fontSize="7.8" fontFamily={FONT}>• maintenance zyada</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '720ms' }}>
        <rect x="540" y="322" width="240" height="92" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="554" y="342" fill="#c4ff00" fontSize="8.8" fontWeight="800" fontFamily={FONT}>STAR vs SNOWFLAKE</text>
        {[
          ['Joins', 'kam (1 hop)', 'zyada (multi hop)'],
          ['Storage', 'zyada', 'kam'],
          ['Speed', 'fast', 'thoda slow'],
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
        Practical choice: mostly star (speed) — dimension bahut bada ho to snowflake
      </text>
      <text x="400" y="464" textAnchor="middle" fill="#5a6a9e" fontSize="9.2" fontFamily={FONT}>
        Snowflake DB ka naam bhi isi design idea se aaya (normalised, scalable warehouse)
      </text>
      <text x="400" y="490" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: snowflake schema mein dimension tables normalised hoti hain, isliye joins badh jaate hain
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
        OLTP vs OLAP — transaction aur analysis
      </text>
      <text x="400" y="46" textAnchor="middle" fill="#9ab0e0" fontSize="11.5" fontFamily={FONT}>
        OLTP = roz ka kaam · OLAP = sochne-samajhne ke liye data
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
        ['Queries', 'simple, few rows, index se', 'complex joins, scan millions rows'],
        ['Design', 'normalised 3NF (no redundancy)', 'star / snowflake (denormalised)'],
        ['Users', 'clerk, app, customer (hazaaron)', 'analyst, manager (kuch sau)'],
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
        <text x="110" y="352" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>ek dimension fix karo (sirf 2025 ka data)</text>
        <text x="34" y="374" fill="#ff8800" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Dice</text>
        <text x="110" y="374" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>do ya zyada dimension par range select</text>
        <text x="34" y="396" fill="#ff7ab2" fontSize="8.4" fontWeight="700" fontFamily={FONT}>Pivot</text>
        <text x="110" y="396" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>rows ↔ columns rotate (cross-tab view)</text>
        <text x="34" y="418" fill="#9ab0e0" fontSize="7.6" fontFamily={FONT}>Cube, rollup() aur group by grouping sets SQL mein</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x="410" y="266" width="370" height="164" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(111,178,255,0.4)" />
        <text x="424" y="286" fill="#6fb2ff" fontSize="9.6" fontWeight="800" fontFamily={FONT}>OLAP SERVER KE PRAKAAR</text>
        <text x="424" y="308" fill="#6fb2ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>ROLAP</text>
        <text x="484" y="308" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>relational tables par — scalable, flexible</text>
        <text x="424" y="330" fill="#00d4ff" fontSize="8.4" fontWeight="700" fontFamily={FONT}>MOLAP</text>
        <text x="484" y="330" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>pre-computed cube — fastest, storage zyada</text>
        <text x="424" y="352" fill="#00ff88" fontSize="8.4" fontWeight="700" fontFamily={FONT}>HOLAP</text>
        <text x="484" y="352" fill="#dbe6ff" fontSize="8.2" fontFamily={FONT}>hybrid — detail relational, summary cube</text>
        <text x="424" y="376" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Warehouse = data ka ghar; OLAP = us par sochne ka tareeka</text>
        <text x="424" y="396" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>Tools: SSAS, Essbase, ClickHouse, DuckDB, BigQuery</text>
        <text x="424" y="418" fill="#ffd166" fontSize="7.8" fontFamily={FONT}>Real systems: OLTP par likho, ELT se DW, phir OLAP par padho</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '720ms' }}>
        <rect x="20" y="444" width="760" height="28" rx="7" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.35)" />
        <text x="400" y="462" textAnchor="middle" fill="#00ff88" fontSize="8.8" fontFamily={FONT}>
          Ek hi sawaal: OLTP poochhta hai “abhi kya hona chahiye”, OLAP poochhta hai “pichhle saal kya hua aur aage kya hoga”
        </text>
      </g>

      <text x="400" y="492" textAnchor="middle" fill="#8f9dc4" fontSize="9.6" fontFamily={FONT}>
        Exam line: OLTP transactional aur normalised hai, OLAP analytical, historical aur dimensional
      </text>
    </svg>
  );
}
