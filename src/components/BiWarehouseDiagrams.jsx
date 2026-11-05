const FONT = "'Segoe UI', system-ui, sans-serif";

// Shared palette for the Business Intelligence Unit II (Data Warehousing) diagrams.
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

function Box({ x, y, w, h, title, sub, lines = [], color = C.cyan, delay = 0, radius = 12, fillOpacity = 0.05 }) {
  return (
    <g className="diagram-pop" style={{ animationDelay: `${delay}ms` }}>
      <rect x={x} y={y} width={w} height={h} rx={radius} fill={color} fillOpacity={fillOpacity} stroke={color} strokeWidth="1.6" strokeOpacity="0.8" />
      <rect x={x} y={y} width={w} height="28" rx={radius} fill={color} fillOpacity="0.16" />
      <text x={x + w / 2} y={y + 19} textAnchor="middle" fill={color} fontSize="10.5" fontWeight="800" fontFamily={FONT}>
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 46} textAnchor="middle" fill={C.white} fontSize="9.4" fontFamily={FONT}>
          {sub}
        </text>
      )}
      {lines.map((line, i) => (
        <text key={line} x={x + w / 2} y={y + (sub ? 62 : 46) + i * 15} textAnchor="middle" fill={C.dim} fontSize="8.9" fontFamily={FONT}>
          {line}
        </text>
      ))}
    </g>
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
        <text x={(x1 + x2) / 2 + labelDx} y={(y1 + y2) / 2 + labelDy} textAnchor="middle" fill={color} fontSize="8.6" fontWeight="700" fontFamily={FONT}>
          {label}
        </text>
      )}
    </g>
  );
}

function Note({ x, y, text, color = C.dim, size = 9.8, anchor = 'middle', bold = false, delay = 0 }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={color}
      fontSize={size}
      fontWeight={bold ? 700 : 400}
      fontFamily={FONT}
      className="diagram-pop"
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </text>
  );
}

/* ------------------------------------------------------------------
   2.1 — OLTP vs OLAP
   ------------------------------------------------------------------ */
export function BwOltpVsOlapDiagram() {
  return (
    <Frame
      id="bw-oltp-olap"
      title="Operational database vs data warehouse — OLTP vs OLAP"
      sub="ek business chalata hai, doosra business ko samajhne mein help karta hai"
      label="Left side operational OLTP systems with clerks and apps doing many small transactions, right side a subject-oriented OLAP warehouse answering few large analytical queries, joined by an ETL pipeline, with a contrast table of schema, data, size and users"
    >
      <Box x={24} y={72} w={250} h={148} title="OLTP SOURCES" sub="roz ka kaam" color={C.cyan} delay={60}
        lines={['billing, orders, banking core', 'many small read-write', 'normalized (3NF)', 'current, detailed data']} />
      <Arrow x1={276} y1={146} x2={316} y2={146} color={C.lime} delay={220} label="ETL" labelDy={-10} />
      <Box x={318} y={72} w={250} h={148} title="DATA WAREHOUSE" sub="analysis ke liye" color={C.green} delay={140}
        lines={['subject-oriented model', 'denormalized star schema', 'historical + summarized', 'read-only, stable snapshot']} />
      <Arrow x1={570} y1={146} x2={610} y2={146} color={C.lime} delay={300} label="OLAP" labelDy={-10} />
      <Box x={612} y={72} w={284} h={148} title="BI / ANALYTICS" sub="decisions" color={C.purple} delay={220}
        lines={['dashboards, reports', 'ad-hoc analysis, mining', 'few large read-only queries', 'analysts, managers']} />

      <Note x={460} y={248} text="CONTRAST — exam table" color={C.dim} size={9.6} bold />
      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={24} y={258} width={872} height={188} rx="12" fill="rgba(0,212,255,0.04)" stroke={C.faint} strokeWidth="1.2" strokeOpacity="0.6" />
        <text x={150} y={282} textAnchor="middle" fill={C.cyan} fontSize="9.6" fontWeight="800" fontFamily={FONT}>POINT</text>
        <text x={450} y={282} textAnchor="middle" fill={C.cyan} fontSize="9.6" fontWeight="800" fontFamily={FONT}>OLTP</text>
        <text x={760} y={282} textAnchor="middle" fill={C.green} fontSize="9.6" fontWeight="800" fontFamily={FONT}>OLAP</text>
        {[
          ['Workload', 'many small read-write', 'few large read-only'],
          ['Schema', 'normalized 3NF', 'star / snowflake'],
          ['Data', 'current, detailed', 'historical, summarized'],
          ['Response', 'milliseconds', 'seconds to minutes'],
          ['Size', 'GB', 'TB - PB'],
          ['Users', 'clerks, applications', 'analysts, BI tools'],
          ['Indexing', 'B-tree keys', 'bitmap, columnar'],
        ].map(([a, b, c], i) => (
          <g key={a}>
            <text x={44} y={306 + i * 20} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{a}</text>
            <text x={360} y={306 + i * 20} textAnchor="middle" fill={C.white} fontSize="8.6" fontFamily={FONT}>{b}</text>
            <text x={676} y={306 + i * 20} textAnchor="middle" fill={C.white} fontSize="8.6" fontFamily={FONT}>{c}</text>
          </g>
        ))}
        <line x1={290} y1={290} x2={290} y2={436} stroke={C.faint} strokeWidth="1" strokeOpacity="0.5" />
        <line x1={590} y1={290} x2={590} y2={436} stroke={C.faint} strokeWidth="1" strokeOpacity="0.5" />
      </g>

      <Note x={460} y={470} text="OLTP = system of record for transactions | OLAP = system of record for history" color={C.orange} size={9.2} />
      <Note x={460} y={496} text='Exam line: "Warehouse operational system ka replacement nahi, uska analytical partner hai"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   2.2 — Characteristics (SITN)
   ------------------------------------------------------------------ */
export function BwCharacteristicsDiagram() {
  const pillars = [
    ['SUBJECT-ORIENTED', ['customer, product, sales', 'application ke hisaab se nahi'], C.cyan],
    ['INTEGRATED', ['naming, coding, units, format', 'one customer, one truth'], C.green],
    ['TIME-VARIANT', ['history + time dimension', 'snapshots, effective dates'], C.orange],
    ['NON-VOLATILE', ['bulk load, no user updates', 'stable snapshot, reproducible'], C.purple],
  ];
  return (
    <Frame
      id="bw-characteristics"
      title="Data warehouse characteristics — SITN"
      sub="Subject-oriented, Integrated, Time-variant, Non-volatile (Inmon) + practical properties"
      label="Four pillars subject-oriented integrated time-variant and non-volatile with examples, plus the practical properties summarization metadata read optimisation security and scheduled refresh"
    >
      <Note x={460} y={78} text="CHAAR PILLARS" color={C.dim} size={9.6} bold />
      {pillars.map(([t, lines, col], i) => (
        <Box key={t} x={24 + i * 222} y={88} w={204} h={96} title={t} lines={lines} color={col} delay={70 + i * 60} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x={24} y={202} width={424} height={150} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={236} y={226} textAnchor="middle" fill={C.lime} fontSize="10.2" fontWeight="800" fontFamily={FONT}>INTEGRATED — example</text>
        {[
          'gender: M / Male / 1  ->  GENDER_M',
          'dates: 12-05-2024, 05/12/2024  ->  20240512',
          'units: kg / g, INR / USD  ->  standard + rate',
          'customer: 3 systems  ->  one customer_key',
          'definition: net revenue  ->  glossary',
        ].map((s, i) => (
          <text key={s} x={44} y={250 + i * 20} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x={472} y={202} width={424} height={150} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={684} y={226} textAnchor="middle" fill={C.purple} fontSize="10.2" fontWeight="800" fontFamily={FONT}>NON-VOLATILE — matlab</text>
        {[
          'data bulk load se aata hai (ETL)',
          'analyst sirf SELECT karta hai',
          'correction = naya snapshot/load',
          'purana record preserve rehta hai',
          'report dobara chalao -> same number',
        ].map((s, i) => (
          <text key={s} x={492} y={250 + i * 20} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <Note x={460} y={378} text="PRACTICAL PROPERTIES — exam mein bonus points" color={C.dim} size={9.6} bold />
      {[
        ['SUMMARIZED', 'multi-level aggregates', C.teal],
        ['METADATA', 'dictionary + glossary', C.cyan],
        ['READ-OPTIMISED', 'star joins, partitions', C.green],
        ['SECURE', 'RLS, masking, audit', C.yellow],
        ['SCHEDULED', 'ETL windows, CDC, SLA', C.orange],
      ].map(([t, s, col], i) => (
        <Box key={t} x={24 + i * 178} y={388} w={160} h={68} title={t} lines={[s]} color={col} delay={560 + i * 50} />
      ))}

      <Note x={460} y={484} text='Exam line: "SITN = subject, integrated, time-variant, non-volatile — warehouse ki chaar pehchaan"' color={C.yellow} size={9.2} bold />
      <Note x={460} y={508} text="70% effort integration + quality mein jaata hai, sirf 30% database aur reporting mein" color={C.dim} size={8.8} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   2.3 — Three-tier architecture
   ------------------------------------------------------------------ */
export function BwArchitectureDiagram() {
  return (
    <Frame
      id="bw-architecture"
      title="Data warehouse — three-tier architecture"
      sub="bottom: data + ETL | middle: OLAP server | top: front-end BI tools"
      label="Three tiers stacked: bottom tier with source systems staging and ETL into the warehouse database, middle tier with ROLAP MOLAP HOLAP OLAP server, top tier with reporting dashboards and data mining, with metadata and scheduler spanning all tiers"
    >
      {/* top tier */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={70} width={872} height={86} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={44} y={92} fill={C.purple} fontSize="10" fontWeight="800" fontFamily={FONT}>TOP TIER — front-end client tools</text>
        {[
          ['QUERY & REPORT', 'ad-hoc SQL, canned reports'],
          ['DASHBOARD', 'KPI, alerts, scorecards'],
          ['ANALYSIS', 'OLAP slice/dice, pivot'],
          ['DATA MINING', 'patterns, prediction'],
          ['NL / Q&A', 'natural-language ask'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={54 + i * 172} y={118} fill={C.white} fontSize="9" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={54 + i * 172} y={134} fill={C.dim} fontSize="8.2" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>
      <Arrow x1={460} y1={158} x2={460} y2={180} color={C.lime} delay={260} />

      {/* middle tier */}
      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x={24} y={184} width={872} height={92} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={44} y={206} fill={C.cyan} fontSize="10" fontWeight="800" fontFamily={FONT}>MIDDLE TIER — OLAP server</text>
        {[
          ['ROLAP', 'relational star, SQL translate'],
          ['MOLAP', 'pre-built cube, fastest'],
          ['HOLAP', 'cube + relational detail'],
        ].map(([t, s], i) => (
          <g key={t}>
            <rect x={54 + i * 210} y={216} width={190} height={46} rx="8" fill="rgba(0,212,255,0.08)" stroke={C.cyan} strokeWidth="1.1" strokeOpacity="0.6" />
            <text x={149 + i * 210} y={234} textAnchor="middle" fill={C.white} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={149 + i * 210} y={250} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        <text x={700} y={234} fill={C.dim} fontSize="8.4" fontFamily={FONT}>semantic layer + security</text>
        <text x={700} y={250} fill={C.faint} fontSize="8" fontFamily={FONT}>aggregation, caching</text>
      </g>
      <Arrow x1={460} y1={278} x2={460} y2={300} color={C.lime} delay={420} />

      {/* bottom tier */}
      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x={24} y={304} width={872} height={130} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={44} y={326} fill={C.green} fontSize="10" fontWeight="800" fontFamily={FONT}>BOTTOM TIER — data warehouse database server + back-end</text>
        {[
          ['SOURCES', 'OLTP systems, files', 'batch or CDC', C.teal],
          ['STAGING', 'raw land, profile', 'validate first', C.orange],
          ['ETL', 'clean, keys, SCD', 'scheduled jobs', C.yellow],
          ['WAREHOUSE DB', 'star / snowflake', 'history kept', C.green],
          ['DATA MARTS', 'sales, finance, HR', 'dependent / independent', C.pink],
        ].map(([t, l1, l2, col], i) => (
          <g key={t}>
            <rect x={44 + i * 168} y={338} width={152} height={68} rx="9" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.2" strokeOpacity="0.7" />
            <text x={120 + i * 168} y={358} textAnchor="middle" fill={col} fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={120 + i * 168} y={376} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>{l1}</text>
            <text x={120 + i * 168} y={390} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>{l2}</text>
          </g>
        ))}
        {[0, 1, 2, 3].map((i) => (
          <Arrow key={i} x1={198 + i * 168} y1={372} x2={210 + i * 168} y2={372} color={C.lime} delay={540 + i * 40} />
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '720ms' }}>
        <rect x={24} y={446} width={872} height={44} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={464} textAnchor="middle" fill={C.lime} fontSize="9.2" fontWeight="800" fontFamily={FONT}>
          SPANS ALL TIERS: metadata repository · scheduler / ETL manager · security &amp; audit
        </text>
        <text x={460} y={480} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>
          three-tier = storage, serving aur consumption alag — har layer independently scale hoti hai
        </text>
      </g>
      <Note x={460} y={508} text="Exam line: bottom = data, middle = OLAP intelligence, top = user" color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   2.4 — ETL
   ------------------------------------------------------------------ */
export function BwEtlDiagram() {
  return (
    <Frame
      id="bw-etl"
      title="ETL — extract, transform, load"
      sub="source se warehouse tak: staging, rules, validation, audit"
      label="ETL pipeline: sources extracted into a staging area, transformation rules applied, then loaded into fact and dimension tables with validation, rejects and audit logging, plus an ETL versus ELT comparison"
    >
      <Note x={460} y={80} text="PIPELINE" color={C.dim} size={9.6} bold />
      {[
        ['SOURCES', ['ERP, CRM, POS', 'files, APIs, logs'], C.teal],
        ['EXTRACT', ['full / incremental', 'CDC, watermark'], C.cyan],
        ['STAGING', ['raw land + profile', 'no source re-read'], C.orange],
        ['TRANSFORM', ['clean, standardise', 'dedupe, derive, SCD'], C.purple],
        ['LOAD', ['dim / fact tables', 'append / merge'], C.green],
        ['AUDIT', ['counts, rejects', 'lineage, alerts'], C.yellow],
      ].map(([t, lines, col], i) => (
        <g key={t}>
          <rect x={24 + i * 146} y={90} width={132} height={92} rx="10" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.3" strokeOpacity="0.75" />
          <rect x={24 + i * 146} y={90} width={132} height="26" rx="10" fill={col} fillOpacity="0.16" />
          <text x={90 + i * 146} y={107} textAnchor="middle" fill={col} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={90 + i * 146} y={136} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>{lines[0]}</text>
          <text x={90 + i * 146} y={152} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>{lines[1]}</text>
          {i < 5 && <Arrow x1={158 + i * 146} y1={136} x2={166 + i * 146} y2={136} color={C.lime} delay={300 + i * 40} />}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x={24} y={198} width={430} height={134} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={239} y={222} textAnchor="middle" fill={C.purple} fontSize="10.2" fontWeight="800" fontFamily={FONT}>TRANSFORM — andar kya hota hai</text>
        {[
          'clean: nulls, invalid, whitespace, encoding',
          'standardise: date, unit, currency, code',
          'dedupe + entity resolution -> golden record',
          'business rules: margin, tax, age bucket',
          'aggregate / pivot, surrogate keys, SCD 1/2/3',
        ].map((s, i) => (
          <text key={s} x={44} y={244 + i * 15} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
        <text x={44} y={324} fill={C.faint} fontSize="8" fontFamily={FONT}>har rule documented + version controlled</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x={466} y={198} width={430} height={134} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={681} y={222} textAnchor="middle" fill={C.green} fontSize="10.2" fontWeight="800" fontFamily={FONT}>LOAD — quality gates</text>
        {[
          'full refresh (dims) | append (facts) | merge',
          'row count + control total reconcile',
          'reject table + reason code (bad rows isolate)',
          'checkpoint / restart, idempotent rerun',
          'audit row: load id, rows in/out, duration',
        ].map((s, i) => (
          <text key={s} x={486} y={244 + i * 15} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
        <text x={486} y={324} fill={C.faint} fontSize="8" fontFamily={FONT}>threshold cross ho to pipeline fail + alert</text>
      </g>

      <Note x={460} y={348} text="ETL vs ELT" color={C.dim} size={9.6} bold />
      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={24} y={358} width={430} height={94} rx="10" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={239} y={380} textAnchor="middle" fill={C.cyan} fontSize="9.8" fontWeight="800" fontFamily={FONT}>ETL</text>
        <text x={239} y={400} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>transform, phir load</text>
        <text x={239} y={416} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>separate engine, on-prem DW</text>
        <text x={239} y={434} textAnchor="middle" fill={C.faint} fontSize="8" fontFamily={FONT}>raw warehouse mein nahi aata</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x={466} y={358} width={430} height={94} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={681} y={380} textAnchor="middle" fill={C.lime} fontSize="9.8" fontWeight="800" fontFamily={FONT}>ELT</text>
        <text x={681} y={400} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>load raw, phir warehouse mein transform</text>
        <text x={681} y={416} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>cloud columnar, SQL-based</text>
        <text x={681} y={434} textAnchor="middle" fill={C.faint} fontSize="8" fontFamily={FONT}>raw layer se reprocess possible</text>
      </g>

      <Note x={460} y={472} text="Golden rules: idempotent · restartable · reconciled · monitored (freshness SLA) · documented" color={C.orange} size={9} />
      <Note x={460} y={498} text='Exam line: "ETL ka kaam data move karna nahi, data ko trustworthy banana hai"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   2.5 — Data cleaning
   ------------------------------------------------------------------ */
export function BwCleaningDiagram() {
  return (
    <Frame
      id="bw-cleaning"
      title="Data cleaning techniques — defect se fix tak"
      sub="profile -> missing -> duplicate -> outlier -> standardise -> validate"
      label="Data cleaning pipeline from profiling through missing values, duplicates, outliers, standardisation and validation, with the technique choices for each defect and the golden rules of logging and preserving raw data"
    >
      <Note x={460} y={78} text="CLEANING PIPELINE" color={C.dim} size={9.6} bold />
      {[
        ['1. PROFILE', 'null %, distinct', 'range, pattern', C.cyan],
        ['2. MISSING', 'impute / delete', 'default + flag', C.orange],
        ['3. DUPLICATE', 'exact + fuzzy', 'golden record', C.purple],
        ['4. OUTLIER', 'z-score, IQR', 'error vs genuine', C.red],
        ['5. STANDARDISE', 'format, unit', 'code, case', C.green],
        ['6. VALIDATE', 'type, range', 'referential', C.yellow],
      ].map(([t, l1, l2, col], i) => (
        <g key={t}>
          <rect x={24 + i * 146} y={88} width={132} height={72} rx="10" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.3" strokeOpacity="0.75" />
          <text x={90 + i * 146} y={110} textAnchor="middle" fill={col} fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={90 + i * 146} y={128} textAnchor="middle" fill={C.dim} fontSize="7.8" fontFamily={FONT}>{l1}</text>
          <text x={90 + i * 146} y={142} textAnchor="middle" fill={C.dim} fontSize="7.8" fontFamily={FONT}>{l2}</text>
          {i < 5 && <Arrow x1={158 + i * 146} y1={124} x2={166 + i * 146} y2={124} color={C.lime} delay={280 + i * 40} />}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={24} y={176} width={424} height={148} rx="12" fill="rgba(255,214,0,0.05)" stroke={C.yellow} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={236} y={200} textAnchor="middle" fill={C.yellow} fontSize="10.2" fontWeight="800" fontFamily={FONT}>MISSING VALUES — kya chuno</text>
        {[
          'delete row: bahut kam affected, unreliable',
          'delete column: >60-70% null',
          'mean/median: numeric (median if skewed)',
          'mode: categorical',
          'regression / KNN: correlated fields available',
          'business default + flag: audit trail ke liye',
        ].map((s, i) => (
          <text key={s} x={44} y={224 + i * 17} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x={472} y={176} width={424} height={148} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={684} y={200} textAnchor="middle" fill={C.purple} fontSize="10.2" fontWeight="800" fontFamily={FONT}>DUPLICATES — kaise pakdein</text>
        {[
          'exact match: key, email, phone',
          'fuzzy: Levenshtein, Jaro-Winkler',
          'phonetic: Soundex for names',
          'blocking: candidate pairs banao',
          'score + threshold: match / review',
          'survivor rules -> golden record',
        ].map((s, i) => (
          <text key={s} x={492} y={224 + i * 17} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <Note x={460} y={346} text="DEFECT SE TECHNIQUE — quick map" color={C.dim} size={9.6} bold />
      {[
        ['NULL', 'impute or flag', C.orange],
        ['DUPLICATE', 'fuzzy + survivor', C.purple],
        ['OUTLIER', 'z-score / IQR', C.red],
        ['FORMAT', 'regex + mapping', C.green],
        ['TYPO', 'phonetic + dictionary', C.cyan],
        ['INTEGRITY', 'referential check', C.teal],
      ].map(([t, s, col], i) => (
        <g key={t}>
          <rect x={24 + i * 146} y={356} width={132} height={58} rx="9" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.2" strokeOpacity="0.7" />
          <text x={90 + i * 146} y={376} textAnchor="middle" fill={col} fontSize="8.8" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={90 + i * 146} y={394} textAnchor="middle" fill={C.dim} fontSize="7.8" fontFamily={FONT}>{s}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x={24} y={430} width={872} height={52} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={450} textAnchor="middle" fill={C.lime} fontSize="9.2" fontWeight="800" fontFamily={FONT}>
          GOLDEN RULES — measure first, preserve raw, log every change, flag (don&apos;t hide), fix at source
        </text>
        <text x={460} y={468} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>
          over-cleaning se genuine business event delete ho sakta hai — outlier ko reason code ke saath review karo
        </text>
      </g>
      <Note x={460} y={504} text='Exam line: "Cleaning ke bina warehouse ganda data ka bada store hai"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   2.6 — Data integration
   ------------------------------------------------------------------ */
export function BwIntegrationDiagram() {
  return (
    <Frame
      id="bw-integration"
      title="Data integration from heterogeneous sources"
      sub="chaar level ki heterogeneity, paanch approach, ek canonical model"
      label="Heterogeneous sources feeding profiling, canonical model, mapping, entity and conflict resolution into an integrated view, with the four heterogeneity levels and the comparison of ETL ELT EAI virtualisation and MDM approaches"
    >
      <Note x={460} y={78} text="SOURCES — silos" color={C.dim} size={9.6} bold />
      {[
        ['ERP', 'codes + orders', C.teal],
        ['CRM', 'customer + leads', C.cyan],
        ['POS', 'bills + returns', C.green],
        ['LOGS / API', 'clickstream, JSON', C.orange],
        ['FILES', 'CSV, Excel, PDF', C.pink],
      ].map(([t, s, col], i) => (
        <Box key={t} x={24 + i * 178} y={88} w={160} h={66} title={t} lines={[s]} color={col} delay={60 + i * 50} />
      ))}

      <Arrow x1={460} y1={160} x2={460} y2={182} color={C.lime} delay={340} label="integrate" labelDx={52} labelDy={4} />

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={120} y={186} width={680} height={62} rx="12" fill="rgba(196,255,0,0.06)" stroke={C.lime} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={460} y={208} textAnchor="middle" fill={C.lime} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          CANONICAL MODEL — ek customer, ek product, ek date
        </text>
        <text x={460} y={228} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>
          profile, mapping, transformation rules, entity resolution, conflict resolution, surrogate keys
        </text>
      </g>

      <Note x={230} y={276} text="HETEROGENEITY — 4 levels" color={C.dim} size={9.4} bold />
      {[
        ['SYSTEM', 'Oracle, SAP, Mongo, files'],
        ['SYNTACTIC', 'encoding, CSV/JSON, dates'],
        ['SCHEMATIC', 'structure, keys, grain'],
        ['SEMANTIC', '"revenue" gross ya net?'],
      ].map(([t, s], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${420 + i * 50}ms` }}>
          <rect x={24} y={286 + i * 38} width={392} height={32} rx="8" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.1" strokeOpacity="0.55" />
          <text x={38} y={307 + i * 38} fill={C.red} fontSize="8.8" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={140} y={307 + i * 38} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{s}</text>
        </g>
      ))}

      <Note x={690} y={276} text="APPROACHES" color={C.dim} size={9.4} bold />
      {[
        ['ETL', 'transform then load', C.purple],
        ['ELT', 'load raw, transform in DW', C.cyan],
        ['EAI / API', 'app-to-app real time', C.green],
        ['VIRTUALISATION', 'query sources on demand', C.orange],
        ['MDM', 'golden master records', C.yellow],
      ].map(([t, s, col], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${440 + i * 50}ms` }}>
          <rect x={486} y={284 + i * 30} width={410} height={26} rx="8" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.1" strokeOpacity="0.6" />
          <text x={500} y={301 + i * 30} fill={col} fontSize="8.8" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={612} y={301 + i * 30} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{s}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x={24} y={446} width={872} height={44} rx="10" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={466} textAnchor="middle" fill={C.teal} fontSize="9" fontWeight="700" fontFamily={FONT}>
          Conflict resolution: source precedence · recency · completeness · trust score · business rule · manual override
        </text>
        <text x={460} y={482} textAnchor="middle" fill={C.faint} fontSize="8" fontFamily={FONT}>
          governance: lineage, ownership, PII masking, versioned mappings, change-data-capture
        </text>
      </g>
      <Note x={460} y={510} text='Exam line: "Integration many silos ko one enterprise view banata hai"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   2.7 — Metadata
   ------------------------------------------------------------------ */
export function BwMetadataDiagram() {
  return (
    <Frame
      id="bw-metadata"
      title="Metadata — data ke baare mein data"
      sub="technical, business aur operational metadata ek repository mein"
      label="Three metadata types technical business and operational feeding a metadata repository, which powers discovery, lineage and impact analysis, KPI consistency, quality monitoring and governance"
    >
      {[
        ['TECHNICAL', ['tables, columns, types', 'keys, indexes, partitions', 'file formats, storage'], C.cyan],
        ['BUSINESS', ['business names', 'definitions, calculations', 'hierarchies, glossary'], C.green],
        ['OPERATIONAL', ['ETL job logs, counts', 'refresh time, DQ score', 'lineage, audit, version'], C.orange],
      ].map(([t, lines, col], i) => (
        <Box key={t} x={24 + i * 296} y={76} w={272} h={104} title={t} lines={lines} color={col} delay={70 + i * 60} />
      ))}

      {[0, 1, 2].map((i) => (
        <Arrow key={i} x1={160 + i * 296} y1={184} x2={160 + i * 296} y2={206} color={C.lime} delay={300 + i * 50} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={120} y={210} width={680} height={58} rx="12" fill="rgba(255,122,178,0.07)" stroke={C.pink} strokeWidth="1.5" strokeOpacity="0.85" />
        <text x={460} y={232} textAnchor="middle" fill={C.pink} fontSize="10.6" fontWeight="800" fontFamily={FONT}>
          METADATA REPOSITORY / DATA CATALOGUE
        </text>
        <text x={460} y={252} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>
          schema store · mapping store · business glossary · statistics · lineage graph · version history
        </text>
      </g>

      <Note x={460} y={292} text="IMPORTANCE — kya possible hota hai" color={C.dim} size={9.6} bold />
      {[
        ['DISCOVERY', 'analyst ko table milta hai', C.cyan],
        ['UNDERSTANDING', 'definition ke saath KPI', C.green],
        ['IMPACT', 'change se kaun tootega', C.yellow],
        ['LINEAGE', 'source se report ka raasta', C.purple],
        ['AUDIT', 'regulator ko proof', C.red],
        ['SECURITY', 'PII class + retention', C.teal],
        ['QUALITY', 'freshness, DQ score', C.orange],
        ['SPEED', 'onboarding dinon mein', C.pink],
      ].map(([t, s, col], i) => (
        <g key={t}>
          <rect x={24 + (i % 4) * 222} y={302 + Math.floor(i / 4) * 66} width={204} height={56} rx="9" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.2" strokeOpacity="0.7" />
          <text x={126 + (i % 4) * 222} y={322 + Math.floor(i / 4) * 66} textAnchor="middle" fill={col} fontSize="8.8" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={126 + (i % 4) * 222} y={340 + Math.floor(i / 4) * 66} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>{s}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={24} y={444} width={872} height={44} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={464} textAnchor="middle" fill={C.lime} fontSize="9" fontWeight="700" fontFamily={FONT}>
          Example: column drop karne se pehle catalogue batata hai — 14 reports, 3 dashboards aur 1 regulatory report depend karte hain
        </text>
        <text x={460} y={480} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>
          metadata ke bina warehouse andha hai — data swamp; metadata ke saath data asset
        </text>
      </g>
      <Note x={460} y={508} text='Exam line: "Metadata = discovery + trust + audit ka aadhaar"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   2.8 — Data quality
   ------------------------------------------------------------------ */
export function BwDataQualityDiagram() {
  return (
    <Frame
      id="bw-dq"
      title="Data quality — dimensions, challenges aur lifecycle"
      sub="fit for use: sahi, poora, consistent, time par"
      label="Eight data quality dimensions with failure examples, the quality lifecycle of define assess cleanse monitor govern, and the common challenges such as silos manual entry and ownership gaps"
    >
      <Note x={460} y={78} text="DIMENSIONS — fit for use" color={C.dim} size={9.6} bold />
      {[
        ['ACCURACY', 'value = reality', C.cyan],
        ['COMPLETENESS', 'required fields present', C.green],
        ['CONSISTENCY', 'systems agree', C.orange],
        ['TIMELINESS', 'current + on time', C.yellow],
        ['VALIDITY', 'format/range rules', C.teal],
        ['UNIQUENESS', 'no duplicates', C.purple],
        ['INTEGRITY', 'references valid', C.pink],
        ['CLARITY', 'definition clear', C.lime],
      ].map(([t, s, col], i) => (
        <g key={t}>
          <rect x={24 + (i % 4) * 222} y={88 + Math.floor(i / 4) * 62} width={204} height={52} rx="9" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.2" strokeOpacity="0.7" />
          <text x={126 + (i % 4) * 222} y={108 + Math.floor(i / 4) * 62} textAnchor="middle" fill={col} fontSize="8.8" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={126 + (i % 4) * 222} y={126 + Math.floor(i / 4) * 62} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>{s}</text>
        </g>
      ))}

      <Note x={230} y={228} text="LIFECYCLE" color={C.dim} size={9.4} bold />
      {[
        ['DEFINE', 'CDE + rules'],
        ['ASSESS', 'profile + baseline'],
        ['CLEANSE', 'fix + quarantine'],
        ['MONITOR', 'DQ score + alerts'],
        ['GOVERN', 'owner + steward'],
      ].map(([t, s], i) => (
        <g key={t}>
          <rect x={24} y={238 + i * 40} width={392} height={34} rx="8" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.1" strokeOpacity="0.6" />
          <text x={40} y={260 + i * 40} fill={C.cyan} fontSize="8.8" fontWeight="800" fontFamily={FONT}>{i + 1}. {t}</text>
          <text x={170} y={260 + i * 40} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{s}</text>
        </g>
      ))}

      <Note x={690} y={228} text="CHALLENGES" color={C.dim} size={9.4} bold />
      {[
        ['SILOS', 'alag format, code, definition'],
        ['MANUAL ENTRY', 'typos, shortcuts, nulls'],
        ['NO UPSTREAM RULE', 'source app mein validation nahi'],
        ['LATE DETECTION', 'report ke time pata chalta'],
        ['PATCHING', 'warehouse fix temporary'],
        ['OWNERSHIP GAP', 'data kiski, koi answer nahi'],
      ].map(([t, s], i) => (
        <g key={t}>
          <rect x={486} y={238 + i * 34} width={410} height={28} rx="8" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.1" strokeOpacity="0.55" />
          <text x={498} y={257 + i * 34} fill={C.red} fontSize="8.4" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={614} y={257 + i * 34} fill={C.dim} fontSize="8.2" fontFamily={FONT}>{s}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x={24} y={444} width={872} height={46} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={464} textAnchor="middle" fill={C.lime} fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          Measurement: rule checks · completeness % · uniqueness % · freshness vs SLA · referential pass % · DQ score (0-100)
        </text>
        <text x={460} y={480} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>
          fix at source — warehouse par sirf patch karna har load par dobara karna padta hai
        </text>
      </g>
      <Note x={460} y={508} text='Exam line: "Galat data se BI tez galat decision deta hai"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   2.9 — AI / LLM in data preparation
   ------------------------------------------------------------------ */
export function BwAiPrepDiagram() {
  return (
    <Frame
      id="bw-ai-etl"
      title="AI aur LLMs in data preparation"
      sub="suggest -> validate -> human approve -> version + log"
      label="AI touchpoints across profiling, schema mapping, cleaning, document extraction, code generation and pipeline agents, with benefits and the risks of hallucination privacy drift and bias along with human-in-the-loop controls"
    >
      <Note x={460} y={78} text="AI TOUCHPOINTS — pipeline ke har stage par" color={C.dim} size={9.6} bold />
      {[
        ['PROFILING', ['cluster tables', 'key + join suggest'], C.teal],
        ['MAPPING', ['source -> target', 'transform logic'], C.cyan],
        ['CLEANING', ['fuzzy dedupe', 'impute, anomaly'], C.green],
        ['DOC EXTRACT', ['invoice, contract', 'email -> JSON'], C.orange],
        ['CODE GEN', ['ETL script, SQL', 'tests, docs'], C.purple],
        ['AGENTS', ['diagnose, retry', 'backfill, checks'], C.pink],
      ].map(([t, lines, col], i) => (
        <Box key={t} x={24 + i * 146} y={88} w={132} h={84} title={t} lines={lines} color={col} delay={60 + i * 50} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x={24} y={186} width={872} height={52} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={208} textAnchor="middle" fill={C.lime} fontSize="10" fontWeight="800" fontFamily={FONT}>
          LOOP — AI suggest karta hai, rules validate karte hain, insaan approve karta hai
        </text>
        <text x={460} y={226} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>
          har generated rule ka review + version + log — warna "model ne kaha tha" audit mein kaam nahi aayega
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x={24} y={252} width={424} height={162} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={236} y={276} textAnchor="middle" fill={C.green} fontSize="10.2" fontWeight="800" fontFamily={FONT}>BENEFITS</text>
        {[
          'mapping setup time tezi se kam',
          'unstructured data ka coverage (PDF, mail)',
          'anomaly jo manual rules miss karte hain',
          'NL se rule likhna, docs auto-generate',
          'skill barrier kam — SQL/pandas generated',
          'monitoring agents 24x7',
        ].map((s, i) => (
          <text key={s} x={44} y={300 + i * 18} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={472} y={252} width={424} height={162} rx="12" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={684} y={276} textAnchor="middle" fill={C.red} fontSize="10.2" fontWeight="800" fontFamily={FONT}>RISKS</text>
        {[
          'hallucination: invented mapping/field',
          'non-determinism: same input, alag output',
          'privacy: PII external model ko',
          'prompt injection: document ke andar order',
          'bias: imputation aur matching mein',
          'drift + cost: model badla, accuracy giri',
        ].map((s, i) => (
          <text key={s} x={492} y={300 + i * 18} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x={24} y={428} width={872} height={56} rx="10" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={448} textAnchor="middle" fill={C.teal} fontSize="9.2" fontWeight="800" fontFamily={FONT}>
          CONTROLS — human-in-the-loop approval · validation layer · masking · versioned prompts/models · eval set · drift alerts
        </text>
        <text x={460} y={468} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>
          example: LLM invoice extraction + rules (GSTIN checksum, total = line items, PO exists), confidence low to human queue
        </text>
      </g>
      <Note x={460} y={506} text='Exam line: "AI speed deta hai, governance bharosa deti hai"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}
