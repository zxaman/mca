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
