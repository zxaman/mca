const FONT = "'Segoe UI', system-ui, sans-serif";

// Shared palette for the Business Intelligence Unit IV (Business Analytics / Temporal Data) diagrams.
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
      <rect x={x} y={y} width={w} height="26" rx={radius} fill={color} fillOpacity="0.16" />
      <text x={x + w / 2} y={y + 18} textAnchor="middle" fill={color} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 44} textAnchor="middle" fill={C.white} fontSize="9.2" fontFamily={FONT}>
          {sub}
        </text>
      )}
      {lines.map((line, i) => (
        <text key={line} x={x + w / 2} y={y + (sub ? 60 : 44) + i * 15} textAnchor="middle" fill={C.dim} fontSize="8.8" fontFamily={FONT}>
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
   4.1 - Business metrics and KPIs
   ------------------------------------------------------------------ */
export function TdMetricsDiagram() {
  return (
    <Frame
      id="td-metrics"
      title="Business metrics aur KPIs"
      sub="metric = number, KPI = number + target + owner + decision"
      label="A metric pyramid with hundreds of raw operational metrics at the base, tactical metrics in the middle and a handful of strategic KPIs at the top, alongside a KPI definition card listing formula, target, owner, cadence and thresholds, and a row of SMART criteria plus leading and lagging indicator examples"
    >
      {/* pyramid */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <polygon points="250,86 330,146 170,146" fill="rgba(196,255,0,0.14)" stroke={C.lime} strokeWidth="1.6" />
        <polygon points="170,150 330,150 380,210 120,210" fill="rgba(0,230,118,0.10)" stroke={C.green} strokeWidth="1.5" />
        <polygon points="120,214 380,214 430,290 70,290" fill="rgba(0,212,255,0.08)" stroke={C.cyan} strokeWidth="1.5" />
        <text x={250} y={126} textAnchor="middle" fill={C.lime} fontSize="8.6" fontWeight="800" fontFamily={FONT}>STRATEGIC</text>
        <text x={250} y={139} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>board / 2-5 KPIs</text>
        <text x={250} y={178} textAnchor="middle" fill={C.green} fontSize="8.6" fontWeight="800" fontFamily={FONT}>TACTICAL</text>
        <text x={250} y={192} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>dept head / monthly</text>
        <text x={250} y={244} textAnchor="middle" fill={C.cyan} fontSize="8.6" fontWeight="800" fontFamily={FONT}>OPERATIONAL METRICS</text>
        <text x={250} y={258} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>team / daily / kai metrics</text>
        <text x={250} y={276} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>jitna neeche, utna detail</text>
      </g>

      {/* KPI definition sheet */}
      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x={462} y={78} width={434} height={216} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.75" />
        <text x={679} y={100} textAnchor="middle" fill={C.purple} fontSize="9.8" fontWeight="800" fontFamily={FONT}>KPI DEFINITION SHEET</text>
        {[
          ['KPI', 'churn % (monthly)', C.cyan],
          ['Formula', 'lost customers / opening customers', C.dim],
          ['Target', 'under 5% (green), 5-6% amber, above red', C.lime],
          ['Owner', 'retention head', C.yellow],
          ['Cadence', 'monthly, data as of T+2', C.dim],
          ['Source', 'fact_churn + dim_customer', C.dim],
        ].map(([k, v, col], i) => (
          <g key={k}>
            <text x={480} y={126 + i * 28} fill={C.faint} fontSize="8" fontFamily={FONT}>{k}</text>
            <text x={556} y={126 + i * 28} fill={col} fontSize="8.6" fontWeight="700" fontFamily={FONT}>{v}</text>
            <line x1={480} y1={134 + i * 28} x2={878} y2={134 + i * 28} stroke={C.faint} strokeWidth="0.6" strokeOpacity="0.35" />
          </g>
        ))}
      </g>

      {/* SMART */}
      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x={24} y={306} width={872} height={66} rx="11" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={326} textAnchor="middle" fill={C.lime} fontSize="9.4" fontWeight="800" fontFamily={FONT}>SMART + OWNED + ACTIONABLE</text>
        {['Specific', 'Measurable', 'Achievable', 'Relevant', 'Time-bound', 'Owned'].map((s, i) => (
          <g key={s}>
            <rect x={40 + i * 108} y={336} width={100} height="24" rx="6" fill="rgba(196,255,0,0.08)" stroke={C.lime} strokeWidth="1.1" strokeOpacity="0.7" />
            <text x={90 + i * 108} y={352} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        <text x={790} y={352} textAnchor="middle" fill={C.faint} fontSize="7.6" fontFamily={FONT}>+ comparable</text>
      </g>

      {/* leading vs lagging */}
      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={24} y={386} width={424} height={96} rx="11" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={236} y={406} textAnchor="middle" fill={C.green} fontSize="9.4" fontWeight="800" fontFamily={FONT}>LEADING - aage ka signal</text>
        {['pipeline value, trial signups', 'website traffic, demo requests', 'action abhi possible'].map((s, i) => (
          <text key={s} x={44} y={428 + i * 16} fill={C.dim} fontSize="8.2" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>
      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x={472} y={386} width={424} height={96} rx="11" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={684} y={406} textAnchor="middle" fill={C.cyan} fontSize="9.4" fontWeight="800" fontFamily={FONT}>LAGGING - result, par late</text>
        {['revenue, profit, churn', 'customer satisfaction score', 'outcome confirm karta hai'].map((s, i) => (
          <text key={s} x={492} y={428 + i * 16} fill={C.dim} fontSize="8.2" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>
      <Note x={460} y={504} text="exam line: har metric KPI nahi hota, par har KPI ek metric zaroor hota hai" color={C.yellow} size={9} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.2 - KPIs in organisational decision making
   ------------------------------------------------------------------ */
export function TdKpiDecisionDiagram() {
  return (
    <Frame
      id="td-kpi-decision"
      title="KPIs se organizational decision making"
      sub="strategy to KPI to action - aur wapas KPI par"
      label="A strategy box cascading into company, department and team KPIs on the left, a five step decision loop of measure compare diagnose act and re-measure with a repeat arrow on the right, the benefits of alignment and accountability in one panel, and failure modes such as tunnel vision gaming and too many measures in another"
    >
      {/* strategy cascade */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={74} width={330} height={46} rx="9" fill="rgba(196,255,0,0.12)" stroke={C.lime} strokeWidth="1.5" />
        <text x={189} y={94} textAnchor="middle" fill={C.lime} fontSize="9.4" fontWeight="800" fontFamily={FONT}>COMPANY STRATEGY</text>
        <text x={189} y={110} textAnchor="middle" fill={C.dim} fontSize="7.8" fontFamily={FONT}>"retention improve karo"</text>
        <rect x={94} y={140} width={300} height={42} rx="9" fill="rgba(0,230,118,0.08)" stroke={C.green} strokeWidth="1.3" />
        <text x={244} y={158} textAnchor="middle" fill={C.green} fontSize="8.8" fontWeight="700" fontFamily={FONT}>COMPANY KPI: churn % under 5</text>
        <text x={244} y={173} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>owner: CRO</text>
        <rect x={24} y={206} width={204} height={42} rx="9" fill="rgba(0,212,255,0.07)" stroke={C.cyan} strokeWidth="1.2" />
        <text x={126} y={224} textAnchor="middle" fill={C.cyan} fontSize="8.2" fontFamily={FONT}>MARKETING: CAC under 900</text>
        <text x={126} y={239} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>qualified leads</text>
        <rect x={248} y={206} width={204} height={42} rx="9" fill="rgba(255,136,0,0.07)" stroke={C.orange} strokeWidth="1.2" />
        <text x={350} y={224} textAnchor="middle" fill={C.orange} fontSize="8.2" fontFamily={FONT}>SUPPORT: FRT under 4 hrs</text>
        <text x={350} y={239} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>first response time</text>
        <Arrow x1={189} y1={120} x2={224} y2={140} color={C.lime} delay={180} />
        <Arrow x1={200} y1={182} x2={126} y2={206} color={C.lime} delay={220} />
        <Arrow x1={300} y1={182} x2={350} y2={206} color={C.lime} delay={240} />
        <text x={189} y={268} textAnchor="middle" fill={C.faint} fontSize="7.6" fontFamily={FONT}>cascade: company se team tak ek hi metric chain</text>
      </g>

      {/* decision loop */}
      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x={460} y={74} width={436} height={182} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.75" />
        <text x={678} y={92} textAnchor="middle" fill={C.purple} fontSize="9.8" fontWeight="800" fontFamily={FONT}>DECISION LOOP</text>
        {[
          ['1 MEASURE', 'KPI value + trend', C.cyan],
          ['2 COMPARE', 'target, last period, benchmark', C.yellow],
          ['3 DIAGNOSE', 'drill-down se root cause', C.orange],
          ['4 ACT', 'owner corrective action', C.lime],
          ['5 RE-MEASURE', 'action ka asar verify karo', C.green],
        ].map(([t, desc, col], i) => (
          <g key={t}>
            <rect x={476} y={102 + i * 28} width={396} height="24" rx="6" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.1" strokeOpacity="0.7" />
            <text x={486} y={118 + i * 28} fill={col} fontSize="8.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={572} y={118 + i * 28} fill={C.dim} fontSize="7.8" fontFamily={FONT}>{desc}</text>
          </g>
        ))}
        <Arrow x1={884} y1={236} x2={884} y2={106} color={C.purple} dashed delay={0} />
        <text x={678} y={250} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>loop band na ho to reporting culture ban jaata hai</text>
      </g>

      {/* benefits */}
      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={24} y={274} width={424} height={120} rx="11" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={236} y={294} textAnchor="middle" fill={C.green} fontSize="9.4" fontWeight="800" fontFamily={FONT}>FAYDE</text>
        {[
          'alignment - sab ek goal par',
          'accountability - owner + target',
          'early warning - threshold alert',
          'resource allocation - gap par budget',
          'appraisal aur risk monitoring',
        ].map((t, i) => (
          <text key={t} x={44} y={316 + i * 16} fill={C.dim} fontSize="8.2" fontFamily={FONT}>{`- ${t}`}</text>
        ))}
      </g>

      {/* risks */}
      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x={472} y={274} width={424} height={120} rx="11" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={684} y={294} textAnchor="middle" fill={C.red} fontSize="9.4" fontWeight="800" fontFamily={FONT}>RISKS</text>
        {[
          'tunnel vision - ek KPI sab kuch',
          'gaming - number theek, behaviour galat',
          'too many KPIs - focus khatam',
          'lagging only - action late',
          'arbitrary target - trust khatam',
        ].map((t, i) => (
          <text key={t} x={492} y={316 + i * 16} fill={C.dim} fontSize="8.2" fontFamily={FONT}>{`- ${t}`}</text>
        ))}
      </g>

      <Note x={460} y={420} text="KPI ka value number mein nahi, uske trigger mein hai" color={C.yellow} size={9.2} bold />
      <Note x={460} y={444} text="balanced scorecard se financial + customer + process + learning sab cover hote hain" color={C.dim} size="8.4" />
      <Note x={460} y={466} text="review cadence fix karo: weekly ops, monthly business, quarterly board" color={C.faint} size="8.2" />
      <Note x={460} y={488} text="har KPI ka ek hi definition - warna do dashboard do number" color={C.faint} size="8.2" />
      <Note x={460} y={510} text="exam line: KPI decision trigger karta hai, report sirf information deti hai" color={C.lime} size="8.6" bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.3 - Performance measurement and analytical reporting
   ------------------------------------------------------------------ */
export function TdPerformanceDiagram() {
  return (
    <Frame
      id="td-performance"
      title="Performance measurement aur analytical reporting"
      sub="balanced scorecard + teen reporting layers + variance analysis"
      label="The balanced scorecard with financial customer internal process and learning perspectives, three reporting layers from daily operational to quarterly strategic, a report anatomy with KPI tiles trend and drill-down, and variance decomposition of an eight lakh shortfall into volume price and mix effects"
    >
      {/* scorecard */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={76} width={300} height={230} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.4" />
        <text x={174} y={98} textAnchor="middle" fill={C.cyan} fontSize="9.6" fontWeight="800" fontFamily={FONT}>BALANCED SCORECARD</text>
        {[
          ['FINANCIAL', 'margin, ROI, growth', C.blue],
          ['CUSTOMER', 'NPS, churn, on-time', C.green],
          ['INTERNAL PROCESS', 'cycle time, defects', C.orange],
          ['LEARNING & GROWTH', 'training, attrition', C.purple],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <rect x={42} y={112 + i * 46} width={264} height="38" rx="8" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.2" strokeOpacity="0.75" />
            <text x={58} y={130 + i * 46} fill={col} fontSize="8.4" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={58} y={143 + i * 46} fill={C.dim} fontSize="7.4" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <Arrow key={`sc${i}`} x1={174} y1={150 + i * 46} x2={174} y2={158 + i * 46} color={C.lime} delay={0} />
        ))}
        <text x={174} y={298} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>learning drives process, process drives customer, customer drives money</text>
      </g>

      {/* reporting layers */}
      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x={344} y={76} width={552} height={230} rx="12" fill="rgba(255,136,0,0.05)" stroke={C.orange} strokeWidth="1.4" />
        <text x={620} y={98} textAnchor="middle" fill={C.orange} fontSize="9.6" fontWeight="800" fontFamily={FONT}>REPORTING LAYERS</text>
        {[
          ['STRATEGIC', 'board / quarterly', 'scorecard, forecast, market share', C.lime],
          ['TACTICAL', 'dept head / monthly', 'margin, SLA, variance report', C.yellow],
          ['OPERATIONAL', 'team / daily', 'stock-out list, dispatch status', C.cyan],
        ].map(([t, cad, eg, col], i) => (
          <g key={t}>
            <rect x={362} y={112 + i * 62} width={516} height="52" rx="9" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.3" strokeOpacity="0.75" />
            <text x={378} y={132 + i * 62} fill={col} fontSize="8.6" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={378} y={147 + i * 62} fill={C.dim} fontSize="7.8" fontFamily={FONT}>{cad}</text>
            <text x={378} y={159 + i * 62} fill={C.faint} fontSize="7.4" fontFamily={FONT}>{eg}</text>
            <text x={860} y={142 + i * 62} textAnchor="end" fill={C.faint} fontSize="7.4" fontFamily={FONT}>{i === 0 ? 'summary' : i === 1 ? 'aggregate' : 'row level'}</text>
          </g>
        ))}
        <text x={620} y={296} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>ek hi metric layer se sab reports - warna numbers reconcile nahi honge</text>
      </g>

      {/* report anatomy */}
      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x={24} y={318} width={424} height={128} rx="11" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={236} y={338} textAnchor="middle" fill={C.teal} fontSize="9.4" fontWeight="800" fontFamily={FONT}>ACHHI REPORT KA ANATOMY</text>
        <rect x={40} y={348} width={120} height="36" rx="6" fill="rgba(196,255,0,0.12)" stroke={C.lime} strokeWidth="1.1" />
        <text x={100} y={368} textAnchor="middle" fill={C.lime} fontSize="7.8" fontWeight="700" fontFamily={FONT}>KPI tile + RAG</text>
        <rect x={170} y={348} width={120} height="36" rx="6" fill="rgba(0,212,255,0.10)" stroke={C.cyan} strokeWidth="1.1" />
        <text x={230} y={368} textAnchor="middle" fill={C.cyan} fontSize="7.8" fontFamily={FONT}>trend vs target</text>
        <rect x={300} y={348} width={132} height="36" rx="6" fill="rgba(255,214,0,0.09)" stroke={C.yellow} strokeWidth="1.1" />
        <text x={366} y={368} textAnchor="middle" fill={C.yellow} fontSize="7.8" fontFamily={FONT}>table + drill-down</text>
        <text x={44} y={404} fill={C.dim} fontSize="8" fontFamily={FONT}>- decision-first: "so what" upar, number neeche</text>
        <text x={44} y={420} fill={C.dim} fontSize="8" fontFamily={FONT}>- exception highlight, ek definition, cutoff noted</text>
        <text x={44} y={436} fill={C.faint} fontSize="7.6" fontFamily={FONT}>- 5 second load, source + refresh time visible</text>
      </g>

      {/* variance */}
      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x={472} y={318} width={424} height={128} rx="11" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={684} y={338} textAnchor="middle" fill={C.red} fontSize="9.4" fontWeight="800" fontFamily={FONT}>VARIANCE ANALYSIS</text>
        <text x={492} y={358} fill={C.dim} fontSize="8" fontFamily={FONT}>actual Rs 92 lakh vs budget Rs 1 crore = -8 lakh</text>
        <text x={492} y={378} fill={C.cyan} fontSize="8.2" fontFamily={FONT}>volume: -400 units x Rs 200 = -8.0 lakh</text>
        <text x={492} y={396} fill={C.yellow} fontSize="8.2" fontFamily={FONT}>price: no change = 0</text>
        <text x={492} y={414} fill={C.orange} fontSize="8.2" fontFamily={FONT}>mix: premium share 25 to 22% = -1.2 / +1.2 offset</text>
        <text x={492} y={434} fill={C.lime} fontSize="8" fontFamily={FONT}>action: stock-out fix (12 SKUs), not pricing</text>
      </g>
      <Note x={460} y={470} text="variance ko todo - tabhi action specific hota hai" color={C.yellow} size={9} bold />
      <Note x={460} y={492} text="scorecard balance deta hai: financial + customer + process + learning" color={C.dim} size="8.4" />
      <Note x={460} y={512} text="exam line: report ka test - isse koi decision nikalta hai ya nahi" color={C.lime} size="8.4" />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.4 - Introduction to temporal data
   ------------------------------------------------------------------ */
export function TdTemporalDiagram() {
  return (
    <Frame
      id="td-temporal"
      title="Temporal data - samay se juda data"
      sub="valid time business se, transaction time database se"
      label="One timeline showing the event date, the valid time range and the transaction time range for the same fact, the four data classes from snapshot to bitemporal with the question each answers, and the practical BI problems of late-arriving data corrections slowly changing dimensions time zones and retention"
    >
      {/* three timelines */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <text x={24} y={84} fill={C.dim} fontSize="9" fontWeight="700" fontFamily={FONT} anchor="start">EK FACT, TEEN TARAH KA TIME</text>
        {[
          ['EVENT TIME', 'sale 28 Mar ko hui', 128, C.cyan, 340],
          ['VALID TIME', 'price 1 Jan se 31 Mar tak sach', 168, C.green, 470],
          ['TRANSACTION TIME', 'record 3 Apr ko system mein aaya', 208, C.yellow, 250],
        ].map(([t, s, y, col, w]) => (
          <g key={t}>
            <text x={24} y={y - 4} fill={col} fontSize="8.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <line x1={120} y1={y + 8} x2={896} y2={y + 8} stroke={C.faint} strokeWidth="0.8" strokeOpacity="0.5" />
            <rect x={150} y={y - 2} width={w} height="20" rx="5" fill={col} fillOpacity="0.14" stroke={col} strokeWidth="1.2" strokeOpacity="0.8" />
            <text x={150 + w / 2} y={y + 12} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        <line x1={330} y1={120} x2={330} y2={230} stroke={C.lime} strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.7" />
        <text x={336} y={236} fill={C.lime} fontSize="7.4" fontFamily={FONT}>28 Mar</text>
        <line x1={560} y1={120} x2={560} y2={230} stroke={C.pink} strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.7" />
        <text x={566} y={236} fill={C.pink} fontSize="7.4" fontFamily={FONT}>3 Apr (load)</text>
        <text x={24} y={256} fill={C.faint} fontSize="7.6" fontFamily={FONT}>same fact, teen alag period - kaunsa filter, yahi BI ka sawaal hai</text>
      </g>

      {/* four classes */}
      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x={24} y={272} width={872} height={104} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={292} textAnchor="middle" fill={C.purple} fontSize="9.4" fontWeight="800" fontFamily={FONT}>CHAAR DATA CLASSES</text>
        {[
          ['SNAPSHOT', 'koi time nahi', '"abhi kya hai?"', C.faint],
          ['VALID-TIME', 'business time', '"March mein price kya tha?"', C.cyan],
          ['TRANSACTION-TIME', 'system time', '"March mein humein kya pata tha?"', C.yellow],
          ['BITEMPORAL', 'dono', '"March ke liye aaj kya sahi hai?"', C.lime],
        ].map(([t, s, q, col], i) => (
          <g key={t}>
            <rect x={40 + i * 214} y={302} width={198} height="62" rx="8" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.2" strokeOpacity="0.75" />
            <text x={139 + i * 214} y={320} textAnchor="middle" fill={col} fontSize="8.4" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={139 + i * 214} y={334} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>{s}</text>
            <text x={139 + i * 214} y={352} textAnchor="middle" fill={C.faint} fontSize="7.2" fontFamily={FONT}>{q}</text>
          </g>
        ))}
      </g>

      {/* problems */}
      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x={24} y={392} width={424} height={92} rx="11" fill="rgba(255,136,0,0.05)" stroke={C.orange} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={236} y={412} textAnchor="middle" fill={C.orange} fontSize="9.2" fontWeight="800" fontFamily={FONT}>PROBLEMS</text>
        {['late-arriving facts aur dimensions', 'corrections / restatement', 'time zone, DST, fiscal year'].map((s, i) => (
          <text key={s} x={44} y={434 + i * 16} fill={C.dim} fontSize="8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>
      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x={472} y={392} width={424} height={92} rx="11" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={684} y={412} textAnchor="middle" fill={C.green} fontSize="9.2" fontWeight="800" fontFamily={FONT}>SOLUTIONS</text>
        {['event date + load_ts dono store karo', 'SCD type 2 + audit history table', 'UTC store, local display, date dimension'].map((s, i) => (
          <text key={s} x={492} y={434 + i * 16} fill={C.dim} fontSize="8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>
      <Note x={460} y={502} text="exam line: temporal data value + us period ka record hai, sirf current value nahi" color={C.yellow} size="8.8" bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.5 - Valid time vs transaction time
   ------------------------------------------------------------------ */
export function TdBitemporalDiagram() {
  return (
    <Frame
      id="td-bitemporal"
      title="Valid time aur transaction time"
      sub="do independent axes - isliye bitemporal table mein chaar columns"
      label="Two independent time axes plotted as a grid, valid time on one axis and transaction time on the other, a bitemporal table with four timestamp columns and three rows including a late correction, and the three resulting queries current as-of and as-was answered from the same rows"
    >
      {/* axes grid */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={74} width={430} height={214} rx="12" fill="rgba(0,212,255,0.04)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.7" />
        <line x1={70} y1={256} x2={430} y2={256} stroke={C.cyan} strokeWidth="1.4" />
        <line x1={70} y1={256} x2={70} y2={100} stroke={C.yellow} strokeWidth="1.4" />
        <text x={250} y={274} textAnchor="middle" fill={C.cyan} fontSize="8.6" fontWeight="700" fontFamily={FONT}>VALID TIME (business)</text>
        <text x={80} y={96} fill={C.yellow} fontSize="8.6" fontWeight="700" fontFamily={FONT}>TRANSACTION TIME (system)</text>
        {[
          [120, 202, 'price 100', C.green],
          [232, 168, 'price 110', C.yellow],
          [344, 134, 'correction', C.pink],
        ].map(([x, y, t, col]) => (
          <g key={t}>
            <rect x={x} y={y} width={86} height={30} rx="6" fill={col} fillOpacity="0.14" stroke={col} strokeWidth="1.2" />
            <text x={x + 43} y={y + 19} textAnchor="middle" fill={col} fontSize="7.6" fontFamily={FONT}>{t}</text>
            <line x1={x + 43} y1={y + 30} x2={x + 43} y2={256} stroke={col} strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.5" />
          </g>
        ))}
        <text x={250} y={296} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>dono axis independent hain - isliye grid banta hai</text>
      </g>

      {/* table */}
      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x={470} y={74} width={426} height={214} rx="12" fill="rgba(196,255,0,0.04)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={683} y={94} textAnchor="middle" fill={C.lime} fontSize="9.4" fontWeight="800" fontFamily={FONT}>BITEMPORAL PRICE TABLE</text>
        {['price', 'valid_from', 'valid_to', 'txn_from', 'txn_to'].map((h, i) => (
          <text key={h} x={488 + i * 82} y={114} fill={C.faint} fontSize="7.2" fontFamily={FONT}>{h}</text>
        ))}
        {[
          ['100', '2025-01-01', '2025-04-01', '2025-01-04', '2025-04-05', C.dim],
          ['110', '2025-04-01', '9999-12-31', '2025-04-05', '9999-12-31', C.dim],
          ['100', '2025-04-01', '2025-04-15', '2025-05-10', '9999-12-31', C.pink],
        ].map((row, ri) => (
          <g key={`r${ri}`}>
            {row.slice(0, 5).map((v, ci) => (
              <text key={ci} x={488 + ci * 82} y={136 + ri * 26} fill={row[5]} fontSize="7.2" fontFamily={FONT}>{v}</text>
            ))}
            <line x1={480} y1={144 + ri * 26} x2={888} y2={144 + ri * 26} stroke={C.faint} strokeWidth="0.7" strokeOpacity="0.3" />
          </g>
        ))}
        <text x={480} y={232} fill={C.pink} fontSize="7.4" fontFamily={FONT}>row 3: 10 May ko correction - purane row ka txn_to band hua</text>
        <text x={480} y={250} fill={C.dim} fontSize="7.4" fontFamily={FONT}>transaction time kabhi overwrite nahi hota (append-only)</text>
        <text x={480} y={268} textAnchor="start" fill={C.faint} fontSize="7.2" fontFamily={FONT}>SAHI value ka matlab: "kis din ki knowledge" pe depend karta hai</text>
      </g>

      {/* three queries */}
      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x={24} y={304} width={872} height={166} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={324} textAnchor="middle" fill={C.purple} fontSize="9.4" fontWeight="800" fontFamily={FONT}>TEEN SAWAAL, EK TABLE</text>
        {[
          ['CURRENT', 'txn_to = 9999-12-31', 'aaj ka sach: Rs 100 (1-15 Apr)', C.green],
          ['AS-OF 20 Apr', 'txn_from <= 20 Apr < txn_to', 'us waqt belief: Rs 110', C.yellow],
          ['AS-WAS 1 Apr', 'valid_from <= 1 Apr < valid_to', 'aaj ki knowledge: Rs 100', C.cyan],
        ].map(([t, cond, ans, col], i) => (
          <g key={t}>
            <rect x={40} y={338 + i * 40} width={840} height="34" rx="7" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.1" strokeOpacity="0.7" />
            <text x={56} y={359 + i * 40} fill={col} fontSize="8.4" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={196} y={359 + i * 40} fill={C.dim} fontSize="7.6" fontFamily={FONT}>{cond}</text>
            <text x={520} y={359 + i * 40} fill={col} fontSize="7.8" fontFamily={FONT}>{ans}</text>
          </g>
        ))}
        <text x={460} y={462} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>teeno jawab sahi hain - sawaal alag hai</text>
      </g>
      <Note x={460} y={496} text="exam line: valid time business badalta hai, transaction time ek baar likha to kabhi nahi" color={C.lime} size="8.6" bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.6 - Temporal attributes and timestamps
   ------------------------------------------------------------------ */
export function TdAttributesDiagram() {
  return (
    <Frame
      id="td-attributes"
      title="Temporal attributes aur timestamps"
      sub="effective dates + audit columns + range join"
      label="A product dimension row with effective dates and audit timestamps, the half-open validity interval with a sentinel end date, slowly changing dimension types one two and three compared, and a range join between the fact event date and the dimension validity window"
    >
      {/* row anatomy */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={74} width={560} height={150} rx="12" fill="rgba(255,214,0,0.05)" stroke={C.yellow} strokeWidth="1.4" />
        <text x={304} y={94} textAnchor="middle" fill={C.yellow} fontSize="9.4" fontWeight="800" fontFamily={FONT}>EK DIMENSION ROW - time columns highlighted</text>
        {[
          ['product_sk', '1204', C.faint],
          ['product_nk', 'AATA-5KG', C.dim],
          ['category', 'Staples', C.cyan],
          ['valid_from', '2025-02-01', C.green],
          ['valid_to', '9999-12-31', C.green],
          ['is_current', 'Y', C.lime],
          ['load_ts', '2025-02-03 01:12', C.orange],
          ['batch_id', 'B-20250203-01', C.orange],
        ].map(([k, v, col], i) => (
          <g key={k}>
            <text x={44} y={122 + i * 12.5} fill={C.faint} fontSize="7.4" fontFamily={FONT}>{k}</text>
            <text x={140} y={122 + i * 12.5} fill={col} fontSize="7.6" fontFamily={FONT}>{v}</text>
          </g>
        ))}
        <text x={330} y={124} fill={C.green} fontSize="8" fontWeight="700" fontFamily={FONT}>validity (kis period ke liye sach)</text>
        <text x={330} y={162} fill={C.orange} fontSize="8" fontWeight="700" fontFamily={FONT}>audit (kab load / change hua)</text>
        <text x={330} y={200} fill={C.dim} fontSize="7.6" fontFamily={FONT}>open-ended row: 9999-12-31 sentinel, NULL nahi</text>
      </g>

      {/* interval */}
      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x={600} y={74} width={296} height={150} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.75" />
        <text x={748} y={94} textAnchor="middle" fill={C.green} fontSize="9.2" fontWeight="800" fontFamily={FONT}>HALF-OPEN INTERVAL</text>
        <line x1={628} y1={140} x2={866} y2={140} stroke={C.faint} strokeWidth="1" />
        <rect x={652} y={126} width={150} height="28" rx="5" fill={C.green} fillOpacity="0.16" stroke={C.green} strokeWidth="1.2" />
        <text x={727} y={144} textAnchor="middle" fill={C.green} fontSize="7.8" fontFamily={FONT}>[valid_from, valid_to)</text>
        <text x={652} y={120} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>1 Feb 2025</text>
        <text x={802} y={120} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>1 Feb 2026</text>
        <text x={748} y={172} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>overlap na ho, gap na ho</text>
        <text x={748} y={190} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>start inclusive, end exclusive</text>
        <text x={748} y={208} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>warna same din do version match honge</text>
      </g>

      {/* SCD types */}
      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x={24} y={240} width={872} height={104} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={260} textAnchor="middle" fill={C.cyan} fontSize="9.4" fontWeight="800" fontFamily={FONT}>ATTRIBUTE CHANGE - SCD TYPE 1 / 2 / 3</text>
        {[
          ['TYPE 1', ['overwrite karo', 'history nahi', 'typo fix ke liye'], C.red],
          ['TYPE 2', ['naya versioned row', 'valid_from / valid_to', 'audit + trend ke liye'], C.green],
          ['TYPE 3', ['prev_value column', 'ek step history', 'before-after compare'], C.yellow],
        ].map(([t, lines, col], i) => (
          <g key={t}>
            <rect x={40 + i * 288} y={270} width={272} height="62" rx="8" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.2" strokeOpacity="0.75" />
            <text x={176 + i * 288} y={288} textAnchor="middle" fill={col} fontSize="8.6" fontWeight="800" fontFamily={FONT}>{t}</text>
            {lines.map((l, j) => (
              <text key={l} x={56 + i * 288} y={304 + j * 12} fill={C.dim} fontSize="7.4" fontFamily={FONT}>{`- ${l}`}</text>
            ))}
          </g>
        ))}
      </g>

      {/* range join */}
      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x={24} y={358} width={872} height={112} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={378} textAnchor="middle" fill={C.purple} fontSize="9.4" fontWeight="800" fontFamily={FONT}>RANGE JOIN - sahi version kaise lagega</text>
        <rect x={44} y={392} width={180} height={54} rx="8" fill="rgba(0,212,255,0.08)" stroke={C.cyan} strokeWidth="1.2" />
        <text x={134} y={412} textAnchor="middle" fill={C.cyan} fontSize="8.4" fontWeight="700" fontFamily={FONT}>FACT</text>
        <text x={134} y={428} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>event_date 2025-03-12</text>
        <text x={134} y={440} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>product_nk AATA-5KG</text>
        <Arrow x1={228} y1={419} x2={268} y2={419} color={C.lime} delay={0} />
        <rect x={272} y={392} width={280} height={54} rx="8" fill="rgba(196,255,0,0.07)" stroke={C.lime} strokeWidth="1.2" />
        <text x={412} y={410} textAnchor="middle" fill={C.lime} fontSize="7.8" fontFamily={FONT}>ON nk = nk AND event_date &gt;= valid_from</text>
        <text x={412} y={424} textAnchor="middle" fill={C.lime} fontSize="7.8" fontFamily={FONT}>AND event_date &lt; valid_to</text>
        <text x={412} y={438} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>half-open range join</text>
        <Arrow x1={556} y1={419} x2={596} y2={419} color={C.lime} delay={0} />
        <rect x={600} y={392} width={272} height={54} rx="8" fill="rgba(0,230,118,0.07)" stroke={C.green} strokeWidth="1.2" />
        <text x={736} y={412} textAnchor="middle" fill={C.green} fontSize="8" fontWeight="700" fontFamily={FONT}>version matched</text>
        <text x={736} y={428} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>us din ki category Staples</text>
        <text x={736} y={440} textAnchor="middle" fill={C.faint} fontSize="7.2" fontFamily={FONT}>is_current = 1 par join galat hoga</text>
      </g>
      <Note x={460} y={490} text="exam line: temporal attributes history ko matlab dete hain - warna data hota hai, context nahi" color={C.yellow} size="8.6" bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.7 - Time-based data analysis
   ------------------------------------------------------------------ */
export function TdTimeAnalysisDiagram() {
  const bars = [38, 46, 42, 58, 74, 52, 60, 68, 84, 96, 62, 55];
  const max = 100;
  return (
    <Frame
      id="td-time-analysis"
      title="Time-based data analysis"
      sub="MTD, YTD, YoY, moving average, CAGR aur seasonality"
      label="A twelve month bar chart with a three month moving average line and a highlighted seasonal peak, cards for MTD QTD YTD accumulation, year over year and month over month growth, CAGR and rolling twelve months, and warning panels for the semi-additive measure trap and the partial period comparison trap"
    >
      {/* chart */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={74} width={560} height={210} rx="12" fill="rgba(0,212,255,0.04)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.7" />
        <line x1={56} y1={248} x2={560} y2={248} stroke={C.faint} strokeWidth="1" />
        {bars.map((v, i) => {
          const h = (v / max) * 140;
          const peak = i === 9;
          const col = peak ? C.lime : C.blue;
          return (
            <g key={`b${i}`}>
              <rect x={62 + i * 40} y={248 - h} width={26} height={h} rx="3" fill={col} fillOpacity={peak ? 0.35 : 0.18} stroke={col} strokeWidth="1" strokeOpacity="0.8" />
              {peak && <text x={75 + i * 40} y={248 - h - 6} textAnchor="middle" fill={C.lime} fontSize="7.4" fontFamily={FONT}>peak</text>}
              <text x={75 + i * 40} y={262} textAnchor="middle" fill={C.faint} fontSize="6.6" fontFamily={FONT}>{['A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D', 'J', 'F', 'M'][i]}</text>
            </g>
          );
        })}
        <polyline
          points={bars.map((v, i) => {
            const w = bars.slice(Math.max(0, i - 2), i + 1);
            const avg = w.reduce((a, b) => a + b, 0) / w.length;
            return `${75 + i * 40},${248 - (avg / max) * 140}`;
          }).join(' ')}
          fill="none"
          stroke={C.yellow}
          strokeWidth="2"
          strokeOpacity="0.9"
        />
        <text x={300} y={90} textAnchor="middle" fill={C.yellow} fontSize="8.2" fontWeight="700" fontFamily={FONT}>3-month moving average</text>
        <text x={42} y={150} fill={C.faint} fontSize="7" fontFamily={FONT}>sales</text>
        <text x={560} y={278} textAnchor="end" fill={C.faint} fontSize="7.2" fontFamily={FONT}>seasonal peak ko YoY neutralise karta hai</text>
      </g>

      {/* formula cards */}
      <Box x={602} y={74} w={294} h={102} title="PERIOD TO DATE" sub="MTD / QTD / YTD" color={C.green} delay={140}
        lines={['period start se aaj tak ka total', 'partial period ko partial se compare karo']} />
      <Box x={602} y={188} w={294} h={96} title="MOVING / ROLLING" sub="7-day, 3-month, rolling 12M" color={C.yellow} delay={200}
        lines={['noise smooth, trend visible', 'adhoore saal ka safe answer']} />

      {/* pitfalls */}
      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x={24} y={298} width={424} height={130} rx="11" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={236} y={318} textAnchor="middle" fill={C.red} fontSize="9.2" fontWeight="800" fontFamily={FONT}>TRAP 1 - SEMI-ADDITIVE</text>
        <text x={44} y={340} fill={C.dim} fontSize="8" fontFamily={FONT}>stock on hand ko time par SUM karna galat</text>
        <text x={44} y={358} fill={C.cyan} fontSize="8" fontFamily={FONT}>sahi: period-end value ya average</text>
        <text x={44} y={376} fill={C.dim} fontSize="8" fontFamily={FONT}>sales additive hai, balance/headcount nahi</text>
        <text x={44} y={394} fill={C.faint} fontSize="7.6" fontFamily={FONT}>margin % non-additive: components jodo, phir divide</text>
        <text x={44} y={412} fill={C.faint} fontSize="7.6" fontFamily={FONT}>yahi "average of averages" error hai</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x={472} y={298} width={424} height={130} rx="11" fill="rgba(255,136,0,0.05)" stroke={C.orange} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={684} y={318} textAnchor="middle" fill={C.orange} fontSize="9.2" fontWeight="800" fontFamily={FONT}>TRAP 2 - PARTIAL PERIOD</text>
        <text x={492} y={340} fill={C.dim} fontSize="8" fontFamily={FONT}>5 din ko 30 din ke month se compare mat karo</text>
        <text x={492} y={358} fill={C.cyan} fontSize="8" fontFamily={FONT}>sahi: MTD vs MTD last year, ya rolling 12M</text>
        <text x={492} y={376} fill={C.dim} fontSize="8" fontFamily={FONT}>working days normalise karo (22 vs 26 din)</text>
        <text x={492} y={394} fill={C.faint} fontSize="7.6" fontFamily={FONT}>holiday calendar date dimension se lo</text>
        <text x={492} y={412} fill={C.faint} fontSize="7.6" fontFamily={FONT}>cutoff likho: "data as of 5 Nov 09:00"</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x={24} y={440} width={872} height={54} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={460} textAnchor="middle" fill={C.lime} fontSize="9" fontWeight="800" fontFamily={FONT}>
          growth: MoM = (current - previous)/previous x 100   |   CAGR = (end/start)^(1/n) - 1   |   seasonal index = period/overall
        </text>
        <text x={460} y={480} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>
          exam line: YoY seasonality hatata hai, MoM sirf short-term noise dikhata hai
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.8 - Trend analysis and historical tracking
   ------------------------------------------------------------------ */
export function TdTrendDiagram() {
  const pts = [0.55, 0.62, 0.58, 0.68, 0.74, 0.7, 0.79, 0.83];
  const X = (i) => 60 + i * 56;
  const Y = (v) => 250 - v * 170;
  return (
    <Frame
      id="td-trend"
      title="Trend analysis aur historical data tracking"
      sub="trend line + forecast, aur neeche wo history jo number par bharosa deti hai"
      label="A monthly series rising from left to right with a dashed trend line, a forecast cone for the next three months, anomaly flags above a control limit, and a bottom stack showing the historical tracking layers: append-only facts, slowly changing dimensions, audit columns, partitioned retention tiers and reproducible snapshots"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={74} width={560} height={206} rx="12" fill="rgba(0,230,118,0.04)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <line x1={48} y1={250} x2={562} y2={250} stroke={C.faint} strokeWidth="1" />
        <line x1={48} y1={130} x2={562} y2={130} stroke={C.red} strokeWidth="0.9" strokeDasharray="5 4" strokeOpacity="0.6" />
        <text x={54} y={126} fill={C.red} fontSize="7" fontFamily={FONT}>control limit</text>
        <polyline points={pts.map((v, i) => `${X(i)},${Y(v)}`).join(' ')} fill="none" stroke={C.cyan} strokeWidth="2" />
        {pts.map((v, i) => (
          <circle key={`p${i}`} cx={X(i)} cy={Y(v)} r="3.4" fill={C.cyan} />
        ))}
        {/* trend line */}
        <line x1={X(0)} y1={Y(0.55)} x2={X(7)} y2={Y(0.85)} stroke={C.lime} strokeWidth="1.6" strokeDasharray="6 4" strokeOpacity="0.85" />
        <text x={X(5) + 6} y={Y(0.9)} fill={C.lime} fontSize="7.4" fontFamily={FONT}>trend</text>
        {/* forecast cone */}
        <polygon points={`${X(7)},${Y(0.83)} ${X(9)},${Y(0.9)} ${X(9)},${Y(0.76)}`} fill={C.yellow} fillOpacity="0.16" stroke={C.yellow} strokeWidth="1.1" strokeDasharray="4 3" />
        <text x={X(8.6)} y={Y(0.95)} textAnchor="middle" fill={C.yellow} fontSize="7.4" fontFamily={FONT}>forecast</text>
        {/* anomaly */}
        <circle cx={X(7)} cy={Y(0.83)} r="6" fill="none" stroke={C.pink} strokeWidth="1.5" />
        <text x={X(7) - 4} y={Y(0.83) - 12} textAnchor="middle" fill={C.pink} fontSize="7.2" fontFamily={FONT}>signal</text>
        <text x={300} y={90} textAnchor="middle" fill={C.green} fontSize="8.4" fontWeight="700" fontFamily={FONT}>trend line + 3-month moving average + forecast</text>
        <text x={54} y={270} fill={C.faint} fontSize="7.2" fontFamily={FONT}>accuracy: MAPE, MAE, RMSE hold-out period par</text>
      </g>

      <Box x={602} y={74} w={294} h={206} title="HISTORICAL TRACKING STACK" color={C.purple} delay={160}
        lines={['1. append-only facts (event date)', '2. SCD type 2 dimensions', '3. audit columns: load_ts, batch_id', '4. immutable transaction history', '5. partition + archival tiers', '6. retention / purge policy', '7. reproducible snapshots', '8. reconciliation + restatement note']} />

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x={24} y={296} width={424} height={116} rx="11" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={236} y={316} textAnchor="middle" fill={C.cyan} fontSize="9.2" fontWeight="800" fontFamily={FONT}>RESTATEMENT KA SAWAAL</text>
        <text x={44} y={338} fill={C.dim} fontSize="8" fontFamily={FONT}>April churn report hua 6.0%</text>
        <text x={44} y={356} fill={C.dim} fontSize="8" fontFamily={FONT}>8 late cancellations backfill hui</text>
        <text x={44} y={374} fill={C.lime} fontSize="8" fontFamily={FONT}>as-was: 5.9% (aaj ka sahi answer)</text>
        <text x={44} y={392} fill={C.yellow} fontSize="8" fontFamily={FONT}>as-of 1 May: 6.0% (tab kya bataya)</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x={472} y={296} width={424} height={116} rx="11" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={684} y={316} textAnchor="middle" fill={C.purple} fontSize="9.2" fontWeight="800" fontFamily={FONT}>STORAGE TIERS</text>
        {[
          ['HOT - 90 din', 'fast queries, dashboards', C.lime],
          ['WARM - 2 saal', 'monthly reports, trend', C.yellow],
          ['COLD - 7 saal', 'audit, legal, regulatory', C.faint],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <rect x={492} y={326 + i * 26} width={384} height="22" rx="5" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1" strokeOpacity="0.6" />
            <text x={504} y={341 + i * 26} fill={col} fontSize="7.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={672} y={341 + i * 26} fill={C.dim} fontSize="7.4" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x={24} y={428} width={872} height={62} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={448} textAnchor="middle" fill={C.lime} fontSize="9" fontWeight="800" fontFamily={FONT}>
          trend batata hai kahan ja rahe hain, history batati hai number par bharosa kyun hai
        </text>
        <text x={460} y={466} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>
          dhyaan do: forecast ko confidence range ke saath publish karo, aur purane number badle to restatement note bhi do
        </text>
        <text x={460} y={482} textAnchor="middle" fill={C.faint} fontSize="7.6" fontFamily={FONT}>
          exam line: "garbage history in, garbage forecast out" - tracking discipline hi forecast ki quality hai
        </text>
      </g>
    </Frame>
  );
}
