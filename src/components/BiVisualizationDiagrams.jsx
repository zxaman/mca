const FONT = "'Segoe UI', system-ui, sans-serif";

// Shared palette for the Business Intelligence Unit V (Data Visualization and BI Tools) diagrams.
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

/* ------------------------------------------------------------------
   5.1 - Introduction to data visualization
   ------------------------------------------------------------------ */
export function VzIntroDiagram() {
  return (
    <Frame
      id="vz-intro"
      title="Data visualization - from numbers to insight"
      sub="data > visual encoding > perception > insight > decision"
      label="A pipeline from raw data through visual encoding of position length and colour into human perception and insight, with why visualization is needed and typical business use cases"
    >
      {/* pipeline */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        {[
          ['DATA', 'rows, columns', 40, 168, C.cyan],
          ['ENCODE', 'position, length, colour', 228, 168, C.lime],
          ['PERCEIVE', 'pre-attentive, 200 ms', 416, 168, C.yellow],
          ['INSIGHT', 'pattern, exception', 604, 168, C.orange],
          ['DECISION', 'action, owner', 792, 96, C.purple],
        ].map(([t, s, x, bw, col]) => (
          <g key={t}>
            <rect x={x} y={96} width={bw} height="54" rx="9" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.5" />
            <text x={x + bw / 2} y={118} textAnchor="middle" fill={col} fontSize="9.6" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={x + bw / 2} y={136} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        <Arrow x1={210} y1={123} x2={226} y2={123} color={C.lime} delay={140} />
        <Arrow x1={398} y1={123} x2={414} y2={123} color={C.yellow} delay={180} />
        <Arrow x1={586} y1={123} x2={602} y2={123} color={C.orange} delay={220} />
        <Arrow x1={774} y1={123} x2={790} y2={123} color={C.purple} delay={260} />
      </g>

      {/* why */}
      <Box x={40} y={186} w={410} h={168} title="WHY WE VISUALISE" color={C.cyan} delay={180}
        lines={['1. volume: thousands of rows at a glance', '2. speed: pattern instantly, table slowly', '3. exceptions: an outlier jumps out', '4. comparison: target / last period', '5. memory: visuals are remembered', '6. shared truth: one chart, one number', '7. communication: alignment + action']} />

      <Box x={470} y={186} w={410} h={168} title="RANKING OF VISUAL ENCODINGS" color={C.lime} delay={240}
        lines={['1. position (common scale) - best', '2. length, angle, slope', '3. area, volume', '4. colour (hue, intensity)', '5. shape, texture - weakest', 'rule: give an important number a position', 'use colour only for grouping and exceptions']} />

      {/* use cases */}
      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x={40} y={368} width={840} height={134} rx="11" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={390} textAnchor="middle" fill={C.green} fontSize="9.6" fontWeight="800" fontFamily={FONT}>WHERE IT IS USED IN THE BUSINESS</text>
        {[
          ['Sales', 'trend, target vs actual', C.cyan],
          ['Finance', 'P&L variance, cash flow', C.lime],
          ['Operations', 'throughput, stock cover', C.yellow],
          ['Marketing', 'funnel, campaign ROI', C.orange],
          ['HR', 'attrition, headcount mix', C.purple],
          ['Risk', 'exposure, fraud pattern', C.red],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <rect x={56 + (i % 3) * 276} y={404 + Math.floor(i / 3) * 44} width={258} height="36" rx="6" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1" strokeOpacity="0.6" />
            <text x={68 + (i % 3) * 276} y={420 + Math.floor(i / 3) * 44} fill={col} fontSize="8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={68 + (i % 3) * 276} y={433 + Math.floor(i / 3) * 44} fill={C.dim} fontSize="7.4" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.2 - Principles of effective data visualization
   ------------------------------------------------------------------ */
export function VzPrinciplesDiagram() {
  return (
    <Frame
      id="vz-principles"
      title="Principles of effective data visualization"
      sub="accurate + clear + honest + accessible + action-oriented"
      label="Six principles of effective visualization with the data-ink ratio and clutter reduction, chart types for different questions, colour and accessibility rules, and the common ways charts mislead with truncated axes and misleading encodings"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        {[
          ['ACCURATE', 'scale honest, zero baseline', C.cyan],
          ['CLEAR', 'one message, no clutter', C.lime],
          ['HONEST', 'no truncated axis', C.yellow],
          ['SIMPLE', 'data-ink ratio high', C.green],
          ['ACCESSIBLE', 'contrast, colour-blind safe', C.purple],
          ['ACTIONABLE', 'tied to a decision', C.orange],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <rect x={40 + i * 142} y={80} width={128} height="62" rx="9" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.4" />
            <text x={104 + i * 142} y={104} textAnchor="middle" fill={col} fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={104 + i * 142} y={122} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>

      {/* data-ink demo */}
      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x={40} y={164} width={410} height={196} rx="11" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={245} y={186} textAnchor="middle" fill={C.cyan} fontSize="9.4" fontWeight="800" fontFamily={FONT}>DATA-INK RATIO</text>
        <text x={62} y={208} fill={C.dim} fontSize="8" fontFamily={FONT}>cluttered version</text>
        <rect x={62} y={216} width={160} height="52" rx="4" fill="none" stroke={C.faint} strokeWidth="0.9" />
        <line x1={62} y1={216} x2={222} y2={216} stroke={C.faint} strokeWidth="0.9" />
        <line x1={62} y1={242} x2={222} y2={242} stroke={C.faint} strokeWidth="0.5" strokeDasharray="2 3" />
        <line x1={62} y1={268} x2={222} y2={268} stroke={C.faint} strokeWidth="0.9" />
        <rect x={70} y={244} width="24" height="24" fill={C.red} fillOpacity="0.5" />
        <rect x={102} y={228} width="24" height="40" fill={C.red} fillOpacity="0.5" />
        <rect x={134} y={250} width="24" height="18" fill={C.red} fillOpacity="0.5" />
        <text x={62} y={284} fill={C.red} fontSize="7.2" fontFamily={FONT}>grid + 3D + shadow + legend + border</text>
        <text x={250} y={208} fill={C.dim} fontSize="8" fontFamily={FONT}>clean version</text>
        <rect x={250} y={230} width="24" height="38" fill={C.lime} fillOpacity="0.55" />
        <rect x={282} y={244} width="24" height="24" fill={C.lime} fillOpacity="0.55" />
        <rect x={314} y={252} width="24" height="16" fill={C.lime} fillOpacity="0.55" />
        <line x1={244} y1={268} x2={344} y2={268} stroke={C.lime} strokeWidth="1.2" />
        <text x={250} y={284} fill={C.lime} fontSize="7.2" fontFamily={FONT}>axis + bar + label, that is all</text>
        <text x={245} y={306} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>jitna ink, utna signal — baaki hatao</text>
        <text x={245} y={326} textAnchor="middle" fill={C.yellow} fontSize="7.6" fontFamily={FONT}>one chart = one question, put the answer in the title</text>
        <text x={245} y={346} textAnchor="middle" fill={C.purple} fontSize="7.6" fontFamily={FONT}>5-7 colour max, sequential/diverging palettes</text>
      </g>

      {/* pitfalls */}
      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x={470} y={164} width={410} height={196} rx="11" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={675} y={186} textAnchor="middle" fill={C.red} fontSize="9.4" fontWeight="800" fontFamily={FONT}>WAYS TO MISLEAD</text>
        {[
          '1. a truncated y-axis (bar) - a small gap looks large',
          '2. inconsistent scale in comparison charts',
          '3. area/volume for linear data (2x = 4x)',
          '4. cherry-picked period / start date',
          '5. a fake correlation from dual axes',
          '6. 3D pie and perspective distortion',
          '7. rainbow colours, colour-blind unsafe',
          '8. percentage without denominator',
          '9. aggregation hiding (Simpson paradox)',
        ].map((t, i) => (
          <text key={t} x={490} y={208 + i * 16} fill={C.dim} fontSize="7.8" fontFamily={FONT}>{t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x={40} y={378} width={840} height={124} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={400} textAnchor="middle" fill={C.lime} fontSize="9" fontWeight="800" fontFamily={FONT}>CHECKLIST - before publishing a chart</text>
        {[
          ['Axis', 'zero baseline, unit stated', C.cyan],
          ['Title', 'the answer speaks, not the topic', C.green],
          ['Colour', 'accessibility tested', C.yellow],
          ['Context', 'target / last period', C.orange],
          ['Source', 'period + source + refresh', C.purple],
          ['Message', 'a one-line takeaway', C.pink],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <text x={60 + i * 138} y={432} fill={col} fontSize="8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={60 + i * 138} y={450} fill={C.dim} fontSize="7.2" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        <text x={460} y={478} textAnchor="middle" fill={C.faint} fontSize="7.6" fontFamily={FONT}>exam line: "a good chart answers one question faster than a table can"</text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.3 - Types of charts
   ------------------------------------------------------------------ */
export function VzChartsDiagram() {
  return (
    <Frame
      id="vz-charts"
      title="Chart types - which question, which chart"
      sub="comparison / trend / composition / distribution / relationship / geography"
      label="A chooser matrix that maps each analysis question to the recommended chart type, with small chart icons for bar line stacked bar histogram scatter waterfall and map, and the common chart mistakes"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        {[
          ['COMPARISON', 'bar (sorted)', C.cyan],
          ['TREND', 'line / column', C.lime],
          ['COMPOSITION', 'stacked bar, treemap', C.yellow],
          ['DISTRIBUTION', 'histogram, box', C.orange],
          ['RELATIONSHIP', 'scatter + trend', C.purple],
          ['GEOGRAPHY', 'map / choropleth', C.green],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <rect x={40 + i * 142} y={72} width={128} height="56" rx="9" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.4" />
            <text x={104 + i * 142} y={94} textAnchor="middle" fill={col} fontSize="8.4" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={104 + i * 142} y={112} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>

      {/* icons row */}
      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x={40} y={142} width={840} height={128} rx="11" fill="rgba(0,212,255,0.04)" stroke={C.cyan} strokeWidth="1.2" strokeOpacity="0.6" />
        <text x={460} y={162} textAnchor="middle" fill={C.cyan} fontSize="9" fontWeight="800" fontFamily={FONT}>CHART SHAPES — quick visual</text>
        {/* bar */}
        <rect x={64} y={212} width="16" height="24" fill={C.cyan} fillOpacity="0.6" />
        <rect x={86} y={196} width="16" height="40" fill={C.cyan} fillOpacity="0.6" />
        <rect x={108} y={224} width="16" height="12" fill={C.cyan} fillOpacity="0.6" />
        <line x1={58} y1={236} x2={134} y2={236} stroke={C.cyan} strokeWidth="1" />
        <text x={96} y={252} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>bar</text>
        {/* line */}
        <polyline points="164,232 186,214 208,222 230,192" fill="none" stroke={C.lime} strokeWidth="1.8" />
        <line x1={158} y1={236} x2={236} y2={236} stroke={C.lime} strokeWidth="0.9" />
        <text x={196} y={252} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>line</text>
        {/* stacked */}
        <rect x={264} y={216} width="18" height="20" fill={C.yellow} fillOpacity="0.6" />
        <rect x={264} y={198} width="18" height="16" fill={C.yellow} fillOpacity="0.3" />
        <rect x={288} y={222} width="18" height="14" fill={C.yellow} fillOpacity="0.6" />
        <rect x={288} y={204} width="18" height="16" fill={C.yellow} fillOpacity="0.3" />
        <line x1={258} y1={236} x2={316} y2={236} stroke={C.yellow} strokeWidth="0.9" />
        <text x={288} y={252} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>stacked</text>
        {/* histogram */}
        <rect x={348} y={212} width="10" height="24" fill={C.orange} fillOpacity="0.55" />
        <rect x={359} y={200} width="10" height="36" fill={C.orange} fillOpacity="0.55" />
        <rect x={370} y={190} width="10" height="46" fill={C.orange} fillOpacity="0.55" />
        <rect x={381} y={204} width="10" height="32" fill={C.orange} fillOpacity="0.55" />
        <rect x={392} y={220} width="10" height="16" fill={C.orange} fillOpacity="0.55" />
        <line x1={344} y1={236} x2={408} y2={236} stroke={C.orange} strokeWidth="0.9" />
        <text x={376} y={252} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>histogram</text>
        {/* scatter */}
        {[[452, 224], [462, 214], [470, 220], [478, 202], [488, 208], [496, 194]].map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r="3" fill={C.purple} fillOpacity="0.8" />
        ))}
        <text x={474} y={252} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>scatter</text>
        {/* waterfall */}
        <rect x={528} y={200} width="14" height="36" fill={C.green} fillOpacity="0.6" />
        <rect x={546} y={182} width="14" height="18" fill={C.red} fillOpacity="0.6" />
        <rect x={564} y={200} width="14" height="36" fill={C.green} fillOpacity="0.6" />
        <rect x={582} y={192} width="14" height="8" fill={C.red} fillOpacity="0.6" />
        <line x1={522} y1={236} x2={602} y2={236} stroke={C.green} strokeWidth="0.9" />
        <text x={562} y={252} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>waterfall</text>
        {/* map */}
        <rect x={632} y={190} width="18" height="16" rx="2" fill={C.cyan} fillOpacity="0.45" />
        <rect x={652} y={196} width="16" height="18" rx="2" fill={C.cyan} fillOpacity="0.25" />
        <rect x={632} y={208} width="18" height="14" rx="2" fill={C.cyan} fillOpacity="0.2" />
        <rect x={650} y={218} width="18" height="18" rx="2" fill={C.cyan} fillOpacity="0.5" />
        <text x={648} y={252} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>map</text>
        {/* table */}
        <rect x={704} y={192} width="60" height="44" rx="3" fill="none" stroke={C.faint} strokeWidth="0.9" />
        <line x1={704} y1={204} x2={764} y2={204} stroke={C.faint} strokeWidth="0.7" />
        <line x1={704} y1={216} x2={764} y2={216} stroke={C.faint} strokeWidth="0.7" />
        <line x1={704} y1={226} x2={764} y2={226} stroke={C.faint} strokeWidth="0.7" />
        <line x1={734} y1={192} x2={734} y2={236} stroke={C.faint} strokeWidth="0.7" />
        <text x={734} y={252} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>table</text>
        {/* KPI */}
        <rect x={792} y={194} width="66" height="42" rx="6" fill={C.pink} fillOpacity="0.08" stroke={C.pink} strokeWidth="1.1" />
        <text x={825} y={214} textAnchor="middle" fill={C.pink} fontSize="11" fontWeight="800" fontFamily={FONT}>92%</text>
        <text x={825} y={228} textAnchor="middle" fill={C.dim} fontSize="6.8" fontFamily={FONT}>KPI tile</text>
      </g>

      <Box x={40} y={288} w={410} h={150} title="THE RULE FOR CHOOSING THE RIGHT CHART" color={C.lime} delay={240}
        lines={['1. write the question first (compare? trend?)', '2. look at the shape of the data (categories? time?)', '3. use position, not area or volume', '4. sorted bars, zero baseline', '5. 5-7 series max, baaki "others"', '6. a pie only for 2-3 slices', '7. mark the insight with an annotation']} />

      <Box x={470} y={288} w={410} h={150} title="COMMON GALTIYAN" color={C.red} delay={300}
        lines={['1. pie with 10 slices', '2. line chart for categories', '3. drama from a truncated axis', '4. 3D charts, shadows, gradients', '5. a fake correlation from dual axes', '6. a rainbow palette with no meaning', '7. a table where a chart belongs (and the reverse)']} />

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={40} y={454} width={840} height={48} rx="9" fill="rgba(255,214,0,0.05)" stroke={C.yellow} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={474} textAnchor="middle" fill={C.yellow} fontSize="8.6" fontWeight="800" fontFamily={FONT}>one chart, one question - and put the answer in the title (&quot;West 12% behind target&quot;, not &quot;Regional sales&quot;)</text>
        <text x={460} y={492} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>need precision: a table or tooltip; need a pattern: a chart</text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.4 - Dashboard design principles
   ------------------------------------------------------------------ */
export function VzDashboardDiagram() {
  const kpis = [
    ['Sales vs target', '92%', C.red],
    ['MTD growth', '+8%', C.green],
    ['Active dealers', '1,240', C.yellow],
    ['Avg order value', 'Rs 18.4k', C.green],
    ['Stock cover', '11 d', C.orange],
  ];
  return (
    <Frame
      id="vz-dashboard"
      title="Dashboard design — 12 column blueprint"
      sub="header > KPI band > trend band > detail band (five-second rule)"
      label="A twelve column dashboard wireframe with a header containing global filters and refresh time, a KPI tile band with deltas and sparklines, trend and comparison charts, an alerts rail and a drill-through table, beside the eight dashboard design principles and a dashboard versus report comparison"
    >
      {/* wireframe */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={68} width={540} height={404} rx="10" fill="rgba(0,212,255,0.03)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.6" />
        {/* header */}
        <rect x={36} y={80} width={516} height="34" rx="6" fill={C.cyan} fillOpacity="0.12" stroke={C.cyan} strokeWidth="1" strokeOpacity="0.7" />
        <text x={48} y={101} fill={C.cyan} fontSize="8.4" fontWeight="800" fontFamily={FONT}>SALES PERFORMANCE</text>
        <text x={196} y={101} fill={C.dim} fontSize="7.2" fontFamily={FONT}>as of 5 Nov 09:00</text>
        <rect x={306} y={88} width="50" height="18" rx="4" fill="none" stroke={C.faint} strokeWidth="0.8" />
        <text x={331} y={100} textAnchor="middle" fill={C.dim} fontSize="6.6" fontFamily={FONT}>period</text>
        <rect x={360} y={88} width="50" height="18" rx="4" fill="none" stroke={C.faint} strokeWidth="0.8" />
        <text x={385} y={100} textAnchor="middle" fill={C.dim} fontSize="6.6" fontFamily={FONT}>region</text>
        <rect x={414} y={88} width="56" height="18" rx="4" fill="none" stroke={C.faint} strokeWidth="0.8" />
        <text x={442} y={100} textAnchor="middle" fill={C.dim} fontSize="6.6" fontFamily={FONT}>category</text>
        <text x={542} y={100} textAnchor="end" fill={C.faint} fontSize="6.2" fontFamily={FONT}>sync 09:00</text>

        {/* KPI band */}
        {kpis.map(([t, v, col], i) => (
          <g key={t}>
            <rect x={36 + i * 104} y={122} width={96} height="52" rx="6" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1" strokeOpacity="0.7" />
            <text x={84 + i * 104} y={138} textAnchor="middle" fill={C.dim} fontSize="6.6" fontFamily={FONT}>{t}</text>
            <text x={84 + i * 104} y={154} textAnchor="middle" fill={col} fontSize="12" fontWeight="800" fontFamily={FONT}>{v}</text>
            <polyline
              points={`${46 + i * 104},166 ${58 + i * 104},162 ${70 + i * 104},164 ${82 + i * 104},158 ${94 + i * 104},160 ${106 + i * 104},154`}
              fill="none" stroke={col} strokeWidth="1.1" strokeOpacity="0.8" />
          </g>
        ))}

        {/* trend band */}
        <rect x={36} y={184} width={300} height="118" rx="6" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1" strokeOpacity="0.6" />
        <text x={186} y={200} textAnchor="middle" fill={C.lime} fontSize="7.4" fontWeight="700" fontFamily={FONT}>monthly trend vs PY</text>
        <polyline points="56,286 86,272 116,278 146,258 176,264 206,244 236,252 266,232 296,238" fill="none" stroke={C.lime} strokeWidth="1.7" />
        <polyline points="56,290 86,284 116,288 146,274 176,280 206,266 236,272 266,258 296,264" fill="none" stroke={C.faint} strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1={56} y1={300} x2={296} y2={300} stroke={C.faint} strokeWidth="0.8" />

        <rect x={344} y={184} width={208} height="118" rx="6" fill="rgba(255,136,0,0.05)" stroke={C.orange} strokeWidth="1" strokeOpacity="0.6" />
        <text x={448} y={200} textAnchor="middle" fill={C.orange} fontSize="7.4" fontWeight="700" fontFamily={FONT}>region vs target</text>
        {[24, 36, 18, 30].map((h, i) => (
          <rect key={i} x={368 + i * 44} y={284 - h} width="26" height={h} fill={C.orange} fillOpacity="0.5" />
        ))}
        <line x1={366} y1={252} x2={540} y2={252} stroke={C.red} strokeWidth="0.9" strokeDasharray="4 3" />
        <text x={392} y={248} textAnchor="middle" fill={C.red} fontSize="6.4" fontFamily={FONT}>target</text>

        {/* detail band */}
        <rect x={36} y={312} width={440} height="104" rx="6" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1" strokeOpacity="0.6" />
        <text x={56} y={330} fill={C.purple} fontSize="7.4" fontWeight="700" fontFamily={FONT}>dealer detail (drill-through to invoices)</text>
        {[0, 1, 2, 3].map((r) => (
          <line key={r} x1={44} y1={344 + r * 17} x2={468} y2={344 + r * 17} stroke={C.faint} strokeWidth="0.6" strokeOpacity="0.4" />
        ))}
        {['Dealer A', 'Dealer B', 'Dealer C', 'Dealer D'].map((t, r) => (
          <text key={t} x={50} y={356 + r * 17} fill={C.dim} fontSize="6.8" fontFamily={FONT}>{t}</text>
        ))}
        {['92%', '88%', '104%', '76%'].map((t, r) => (
          <text key={t} x={452} y={356 + r * 17} textAnchor="end" fill={r === 3 ? C.red : C.green} fontSize="6.8" fontWeight="700" fontFamily={FONT}>{t}</text>
        ))}

        {/* alert rail */}
        <rect x={484} y={312} width={68} height={104} rx="6" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1" strokeOpacity="0.6" />
        <text x={518} y={330} textAnchor="middle" fill={C.red} fontSize="6.8" fontWeight="700" fontFamily={FONT}>ALERTS</text>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={492} y={340 + i * 18} width={52} height="13" rx="3" fill={C.red} fillOpacity="0.12" stroke={C.red} strokeWidth="0.6" strokeOpacity="0.5" />
        ))}

        <text x={294} y={440} textAnchor="middle" fill={C.faint} fontSize="7" fontFamily={FONT}>header (filters and refresh) / KPI band / trend band / detail band - 12-column grid, 16 px margins</text>
        <text x={294} y={458} textAnchor="middle" fill={C.yellow} fontSize="7.4" fontWeight="700" fontFamily={FONT}>the most important KPI at the top-left: that is where the eye starts</text>
      </g>

      {/* principles */}
      <Box x={584} y={68} w={312} h={228} title="8 DESIGN PRINCIPLES" color={C.lime} delay={160}
        lines={['1. audience and decision first', '2. 5-9 KPIs, the most important at the top-left', '3. layout bands + Z/F reading pattern', '4. a comparison on every tile (target, PY)', '5. ek accent colour, RAG sparingly', '6. global filters in one place', '7. performance: 5 second load', '8. trust: refresh time + owner + defs']} />

      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x={584} y={310} width={312} height={162} rx="11" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={740} y={332} textAnchor="middle" fill={C.teal} fontSize="9.2" fontWeight="800" fontFamily={FONT}>DASHBOARD vs REPORT vs SCORECARD</text>
        {[
          ['Dashboard', 'monitor now, one screen, filters', C.cyan],
          ['Report', 'analyse why, many pages, detail', C.purple],
          ['Scorecard', 'goals vs target, few KPIs, RAG', C.yellow],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <rect x={600} y={346 + i * 38} width={280} height="30" rx="5" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="0.9" strokeOpacity="0.6" />
            <text x={612} y={360 + i * 38} fill={col} fontSize="7.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={612} y={371 + i * 38} fill={C.dim} fontSize="6.8" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        <text x={740} y={462} textAnchor="middle" fill={C.faint} fontSize="7" fontFamily={FONT}>anti-pattern: 40 charts, rainbow colours, no target, no refresh time</text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.5 - Interactive reporting and visual analytics
   ------------------------------------------------------------------ */
export function VzInteractiveDiagram() {
  return (
    <Frame
      id="vz-interactive"
      title="Interactive reporting and visual analytics"
      sub="overview > filter > detail > action (drill path)"
      label="The drill path from overview to filter to detail to action, the interactivity building blocks including slicers drill-down cross-filtering drill-through and what-if parameters, and the visual analytics layer of trend lines forecasts clustering and anomaly detection"
    >
      {/* drill path */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        {[
          ['OVERVIEW', 'KPI plus trend, everything visible', C.cyan, 40],
          ['FILTER', 'region, period, category', C.lime, 250],
          ['DETAIL', 'drill-down / drill-through', C.yellow, 460],
          ['ACTION', 'alert, reorder, fix', C.orange, 670],
        ].map(([t, s, col, x]) => (
          <g key={t}>
            <rect x={x} y={72} width={190} height="54" rx="9" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.4" />
            <text x={x + 95} y={94} textAnchor="middle" fill={col} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={x + 95} y={112} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        <Arrow x1={232} y1={99} x2={248} y2={99} color={C.lime} delay={140} />
        <Arrow x1={442} y1={99} x2={458} y2={99} color={C.yellow} delay={180} />
        <Arrow x1={652} y1={99} x2={668} y2={99} color={C.orange} delay={220} />
        <text x={460} y={146} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>a breadcrumb and a back button at every step - the user must find the way back</text>
      </g>

      {/* building blocks */}
      <Box x={40} y={170} w={410} h={176} title="BLOCKS OF INTERACTIVITY" color={C.cyan} delay={180}
        lines={['1. slicers and filters (3-5, global ones on top)', '2. drill-down (hierarchy: year>q>month)', '3. drill-through (from a KPI to the source rows)', '4. cross-filter / linked brushing', '5. tooltip + metric definition', '6. what-if parameter (price, discount)', '7. bookmarks, export, subscribe, alerts']} />

      <Box x={470} y={170} w={410} h={176} title="VISUAL ANALYTICS LAYER" color={C.purple} delay={240}
        lines={['1. trend line plus a forecast band', '2. anomaly detection (3 sigma / ML)', '3. clustering and segmentation', '4. small multiples (compare segments)', '5. decomposition tree (root cause)', '6. correlation / scatter with fit', 'these need a semantic layer to be trustworthy']} />

      {/* requirements + risks */}
      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x={40} y={362} width={410} height={140} rx="11" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={245} y={384} textAnchor="middle" fill={C.green} fontSize="9.2" fontWeight="800" fontFamily={FONT}>ENABLERS (technical)</text>
        {['conformed dimensions - a filter means the same thing', 'pre-aggregated data for 1-2 sec response', 'query folding / in-memory engine', 'governed metric catalogue', 'row-level security at query time', 'event-logged interactions (usage metrics)'].map((t, i) => (
          <text key={t} x={58} y={406 + i * 16} fill={C.dim} fontSize="7.6" fontFamily={FONT}>- {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={470} y={362} width={410} height={140} rx="11" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={675} y={384} textAnchor="middle" fill={C.red} fontSize="9.2" fontWeight="800" fontFamily={FONT}>RISKS</text>
        {['filter overload - the user gets lost', 'hidden state - two people see different numbers', 'performance collapse - eight queries per click', 'the headline disappears', 'shadow metrics (self-service governance gap)', 'discussion at the level of row noise'].map((t, i) => (
          <text key={t} x={488} y={406 + i * 16} fill={C.dim} fontSize="7.6" fontFamily={FONT}>- {t}</text>
        ))}
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.6 - Introduction to BI tools (Power BI / Tableau)
   ------------------------------------------------------------------ */
export function VzToolsDiagram() {
  return (
    <Frame
      id="vz-tools"
      title="BI tools — Power BI vs Tableau"
      sub="same pipeline: connect > model > visualize > publish > govern"
      label="A comparison of Power BI and Tableau across data preparation engine calculation language interaction model publishing cost and best fit, with the shared connect model visualize publish govern pipeline and the selection criteria"
    >
      {/* pipeline */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        {[
          ['CONNECT', 'SQL, cloud, Excel, API', C.cyan],
          ['MODEL', 'star schema, measures', C.lime],
          ['VISUALIZE', 'charts, layout, interaction', C.yellow],
          ['PUBLISH', 'workspace / server', C.orange],
          ['GOVERN', 'RLS, refresh, certify', C.purple],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <rect x={40 + i * 172} y={70} width={156} height="50" rx="8" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.4" />
            <text x={118 + i * 172} y={90} textAnchor="middle" fill={col} fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={118 + i * 172} y={107} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        {[0, 1, 2, 3].map((i) => (
          <Arrow key={i} x1={198 + i * 172} y1={95} x2={210 + i * 172} y2={95} color={C.dim} delay={120 + i * 40} />
        ))}
      </g>

      {/* two columns */}
      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x={40} y={142} width={410} height={222} rx="11" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.8" />
        <rect x={40} y={142} width={410} height="28" rx="11" fill={C.cyan} fillOpacity="0.16" />
        <text x={245} y={161} textAnchor="middle" fill={C.cyan} fontSize="10" fontWeight="800" fontFamily={FONT}>POWER BI (Microsoft)</text>
        {[
          'prep: Power Query (M)',
          'engine: VertiPaq in-memory (Tabular)',
          'calc: DAX measures, filter context',
          'model-first: certified shared dataset',
          'publish: Power BI Service / Fabric',
          'cost: low, bundled with Microsoft 365',
          'fit: governed enterprise reporting',
          'strength: Office integration, price, RLS',
        ].map((t, i) => (
          <text key={t} x={56} y={190 + i * 21} fill={C.dim} fontSize="7.8" fontFamily={FONT}>- {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x={470} y={142} width={410} height={222} rx="11" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.5" strokeOpacity="0.8" />
        <rect x={470} y={142} width={410} height="28" rx="11" fill={C.purple} fillOpacity="0.16" />
        <text x={675} y={161} textAnchor="middle" fill={C.purple} fontSize="10" fontWeight="800" fontFamily={FONT}>TABLEAU (Salesforce)</text>
        {[
          'prep: Tableau Prep',
          'engine: VizQL + Hyper extracts / live',
          'calc: calculated fields, LOD expressions',
          'visual-first: drag and drop exploration',
          'publish: Tableau Server / Cloud',
          'cost: higher per seat',
          'fit: analyst-led ad-hoc analysis',
          'strength: exploration depth, chart craft',
        ].map((t, i) => (
          <text key={t} x={486} y={190 + i * 21} fill={C.dim} fontSize="7.8" fontFamily={FONT}>- {t}</text>
        ))}
      </g>

      {/* selection */}
      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x={40} y={380} width={840} height={122} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={402} textAnchor="middle" fill={C.lime} fontSize="9" fontWeight="800" fontFamily={FONT}>SELECTION CRITERIA</text>
        {[
          ['Stack', 'M365? Power BI', C.cyan],
          ['Cost', 'per-seat vs capacity', C.green],
          ['Volume', 'refresh, gateway', C.yellow],
          ['Depth', 'ad-hoc? Tableau', C.orange],
          ['Govern', 'shared model, RLS', C.purple],
          ['Skills', 'DAX vs VizQL', C.pink],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <text x={60 + i * 138} y={430} fill={col} fontSize="8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={60 + i * 138} y={447} fill={C.dim} fontSize="7.2" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        <text x={460} y={474} textAnchor="middle" fill={C.yellow} fontSize="8" fontWeight="700" fontFamily={FONT}>many organizations keep both: Power BI for governed reporting, Tableau for exploration</text>
        <text x={460} y={492} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>success factor: both run on one warehouse and one metric definition</text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.7 - Creating dashboards and visual reports using BI tools
   ------------------------------------------------------------------ */
export function VzBuildDiagram() {
  const steps = [
    ['1. BRIEF', 'audience, KPIs, formulas', C.cyan],
    ['2. PREP', 'clean, type, keys', C.teal],
    ['3. MODEL', 'star schema, date table', C.lime],
    ['4. MEASURE', 'DAX / calc fields, DIVIDE', C.green],
    ['5. LAYOUT', 'grid, bands, filters', C.yellow],
    ['6. INTERACT', 'slicers, drill, tooltip', C.orange],
    ['7. VALIDATE', 'reconcile, RLS, speed', C.red],
    ['8. PUBLISH', 'workspace, refresh, gateway', C.purple],
    ['9. GOVERN', 'certify, docs, owner', C.pink],
  ];
  return (
    <Frame
      id="vz-build"
      title="BI dashboard build — 9 steps"
      sub="from a brief to a governed, documented report"
      label="The nine step build pipeline from requirement brief through data preparation dimensional model measures layout interactivity validation publishing and governance, with validation and governance checklists and the common build mistakes"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        {steps.map(([t, s, col], i) => (
          <g key={t}>
            <rect x={40 + (i % 3) * 282} y={72 + Math.floor(i / 3) * 62} width={262} height="50" rx="8" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.3" />
            <text x={54 + (i % 3) * 282} y={92 + Math.floor(i / 3) * 62} fill={col} fontSize="8.6" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={54 + (i % 3) * 282} y={108 + Math.floor(i / 3) * 62} fill={C.dim} fontSize="7.2" fontFamily={FONT}>{s}</text>
            {i % 3 !== 2 && <Arrow x1={304 + (i % 3) * 282} y1={97 + Math.floor(i / 3) * 62} x2={318 + (i % 3) * 282} y2={97 + Math.floor(i / 3) * 62} color={C.dim} delay={120 + i * 30} />}
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x={40} y={266} width={410} height={136} rx="11" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={245} y={288} textAnchor="middle" fill={C.red} fontSize="9.2" fontWeight="800" fontFamily={FONT}>VALIDATION CHECKLIST</text>
        {['totals reconcile with the source (zero tolerance)', 'grain test: one known transaction', 'edge cases: no data, zero, negative', 'RLS test with restricted user', 'performance: page < 5 s', 'UAT sign-off on definitions'].map((t, i) => (
          <text key={t} x={58} y={310 + i * 17} fill={C.dim} fontSize="7.8" fontFamily={FONT}>- {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x={470} y={266} width={410} height={136} rx="11" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={675} y={288} textAnchor="middle" fill={C.green} fontSize="9.2" fontWeight="800" fontFamily={FONT}>PUBLISH + GOVERN</text>
        {['dev / test / prod workspaces, roles', 'gateway + scheduled / incremental refresh', 'sensitivity labels, export control, mobile', 'dataset certification + lineage', 'metric definition sheet + owner', 'usage metrics: retire an unused report'].map((t, i) => (
          <text key={t} x={488} y={310 + i * 17} fill={C.dim} fontSize="7.8" fontFamily={FONT}>- {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={40} y={416} width={840} height={86} rx="10" fill="rgba(255,214,0,0.05)" stroke={C.yellow} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={438} textAnchor="middle" fill={C.yellow} fontSize="9" fontWeight="800" fontFamily={FONT}>COMMON MISTAKES IN THE BUILD</text>
        <text x={460} y={458} textAnchor="middle" fill={C.dim} fontSize="7.8" fontFamily={FONT}>flat single-table model . calculated columns overload . hard-coded filters . no date table . wrong grain (double count)</text>
        <text x={460} y={474} textAnchor="middle" fill={C.dim} fontSize="7.8" fontFamily={FONT}>40 visuals per page . no reconciliation . no RLS test . no documentation . no adoption plan</text>
        <text x={460} y={492} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>one root cause: skipping the requirement brief - the brief first, the build after</text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.8 - Role of visualization in business decision making
   ------------------------------------------------------------------ */
export function VzDecisionDiagram() {
  return (
    <Frame
      id="vz-decision"
      title="Visualization and business decision making"
      sub="monitor > diagnose > prioritise > communicate > act"
      label="The four decision jobs of monitoring diagnosis prioritisation and communication feeding a decision and action loop, the business value measures of cycle time decision quality accountability and adoption, and the misleading practices to avoid"
    >
      {/* jobs */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        {[
          ['1. MONITOR', 'on track? KPI against target', C.cyan],
          ['2. DIAGNOSE', 'why did it change? drill, segment', C.lime],
          ['3. PRIORITISE', 'where is the biggest gap? Pareto', C.yellow],
          ['4. COMMUNICATE', 'alignment + action', C.orange],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <rect x={40 + i * 214} y={72} width={198} height="58" rx="9" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.4" />
            <text x={139 + i * 214} y={95} textAnchor="middle" fill={col} fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={139 + i * 214} y={112} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>{s}</text>
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <Arrow key={i} x1={240 + i * 214} y1={101} x2={252 + i * 214} y2={101} color={C.dim} delay={140 + i * 40} />
        ))}
      </g>

      {/* perception */}
      <Box x={40} y={150} w={410} h={158} title="PERCEPTION - why a visual is faster" color={C.cyan} delay={180}
        lines={['1. pre-attentive: position and length in 200 ms', '2. pattern recognition happens in parallel', '3. an exception visually jumps', '4. a table must be read sequentially (slow)', '5. visual memory is strong', '6. a shared reference - debate the decision, not the data']} />

      {/* value */}
      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x={470} y={150} width={410} height={158} rx="11" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={675} y={172} textAnchor="middle" fill={C.green} fontSize="9.2" fontWeight="800" fontFamily={FONT}>HOW TO MEASURE THE VALUE</text>
        {[
          ['Cycle time', 'weekly report > daily dashboard', C.cyan],
          ['Decision quality', 'fewer reversals, faster anomaly', C.lime],
          ['Accountability', 'one number, one definition, owner', C.yellow],
          ['Adoption', 'active users, alerts acted upon', C.purple],
          ['Cost avoided', 'manual reporting hours saved', C.orange],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <text x={488} y={196 + i * 22} fill={col} fontSize="7.8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={590} y={196 + i * 22} fill={C.dim} fontSize="7.4" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>

      {/* before after */}
      <g className="diagram-pop" style={{ animationDelay: '330ms' }}>
        <rect x={40} y={322} width={410} height={130} rx="11" fill="rgba(255,214,0,0.05)" stroke={C.yellow} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={245} y={344} textAnchor="middle" fill={C.yellow} fontSize="9" fontWeight="800" fontFamily={FONT}>CYCLE TIME — BEFORE vs AFTER</text>
        <text x={60} y={368} fill={C.dim} fontSize="7.6" fontFamily={FONT}>data collection</text>
        <text x={200} y={368} fill={C.red} fontSize="7.6" fontFamily={FONT}>2 days</text>
        <Arrow x1={250} y1={365} x2={290} y2={365} color={C.lime} delay={380} />
        <text x={300} y={368} fill={C.green} fontSize="7.6" fontFamily={FONT}>automated</text>
        <text x={60} y={388} fill={C.dim} fontSize="7.6" fontFamily={FONT}>analysis</text>
        <text x={200} y={388} fill={C.red} fontSize="7.6" fontFamily={FONT}>6 ghante</text>
        <Arrow x1={250} y1={385} x2={290} y2={385} color={C.lime} delay={400} />
        <text x={300} y={388} fill={C.green} fontSize="7.6" fontFamily={FONT}>instant</text>
        <text x={60} y={408} fill={C.dim} fontSize="7.6" fontFamily={FONT}>detection</text>
        <text x={200} y={408} fill={C.red} fontSize="7.6" fontFamily={FONT}>3 hafte</text>
        <Arrow x1={250} y1={405} x2={290} y2={405} color={C.lime} delay={420} />
        <text x={300} y={408} fill={C.green} fontSize="7.6" fontFamily={FONT}>1 day</text>
        <text x={245} y={436} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>lesson: the value is not in the dashboard pixels, it is in decision latency</text>
      </g>

      {/* risks */}
      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x={470} y={322} width={410} height={130} rx="11" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={675} y={344} textAnchor="middle" fill={C.red} fontSize="9" fontWeight="800" fontFamily={FONT}>WHEN A VISUALIZATION MISLEADS</text>
        {['a truncated y-axis - a small gap looks large', 'cherry-picked period / start date', 'calling correlation causation', 'aggregation hiding (Simpson paradox)', 'percentage without denominator'].map((t, i) => (
          <text key={t} x={488} y={362 + i * 15} fill={C.dim} fontSize="7.6" fontFamily={FONT}>- {t}</text>
        ))}
        <text x={675} y={440} textAnchor="middle" fill={C.lime} fontSize="7.2" fontWeight="700" fontFamily={FONT}>safeguard: axis label, sample size, drill-through, review</text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.9 - AI-assisted visualization and LLMs
   ------------------------------------------------------------------ */
export function VzAiDiagram() {
  return (
    <Frame
      id="vz-ai"
      title="AI-assisted visualization and LLM reporting"
      sub="question > semantic model > query > visual + explanation > human review"
      label="The natural language to semantic model to query to visual pipeline for LLM based reporting, the AI use cases of chart recommendation automated dashboards anomaly detection and forecasting, and the guardrails of grounded metrics human review and audit logging"
    >
      {/* pipeline */}
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        {[
          ['1. QUESTION', '"Q3 sales vs LY"', C.pink],
          ['2. INTENT', 'metric, dim, filter', C.purple],
          ['3. GROUND', 'valid fields only', C.cyan],
          ['4. QUERY', 'governed metric', C.lime],
          ['5. VISUAL', 'chart + explanation', C.yellow],
          ['6. REVIEW', 'analyst publishes', C.green],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <rect x={40 + i * 142} y={72} width={128} height="60" rx="9" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.3" />
            <text x={104 + i * 142} y={92} textAnchor="middle" fill={col} fontSize="7.8" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={104 + i * 142} y={108} textAnchor="middle" fill={C.dim} fontSize="6.6" fontFamily={FONT}>{s}</text>
            {i < 5 && <Arrow x1={170 + i * 142} y1={102} x2={180 + i * 142} y2={102} color={C.dim} delay={100 + i * 30} />}
          </g>
        ))}
        <text x={460} y={150} textAnchor="middle" fill={C.faint} fontSize="7.6" fontFamily={FONT}>text-to-query or text-to-DAX: the model is the guardrail - a measure that is not in the model has no answer</text>
      </g>

      {/* use cases */}
      <Box x={40} y={174} w={410} h={176} title="AI USE CASES" color={C.cyan} delay={180}
        lines={['1. chart recommendation (intent + type)', '2. auto dashboard first draft', '3. NL reporting / Q&A on metrics', '4. auto narrative (exec summary)', '5. anomaly detection + explanation', '6. forecasting with a confidence band', '7. data prep assist (typing, keys)']} />

      {/* pipeline detail / risks */}
      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x={470} y={174} width={410} height={176} rx="11" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={675} y={196} textAnchor="middle" fill={C.red} fontSize="9.2" fontWeight="800" fontFamily={FONT}>RISKS</text>
        {[
          'hallucinated numbers and invented metrics',
          'an ambiguous question - what does &quot;best region&quot; mean?',
          'wrong joins / double counting (grain)',
          'prompt injection, data leakage, PII',
          'auto chart bias, narrative slant',
          'audit trail weak - which query ran?',
          'over-trust - the user acts without verifying',
        ].map((t, i) => (
          <text key={t} x={488} y={218 + i * 18} fill={C.dim} fontSize="7.8" fontFamily={FONT}>- {t}</text>
        ))}
      </g>

      {/* guardrails */}
      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x={40} y={368} width={840} height={134} rx="10" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={390} textAnchor="middle" fill={C.green} fontSize="9" fontWeight="800" fontFamily={FONT}>GUARDRAILS - to make AI reporting trustworthy</text>
        {[
          ['Grounding', 'certified measures and fields only', C.cyan],
          ['Show work', 'query + filters + definition', C.lime],
          ['Human review', 'verify before publishing', C.yellow],
          ['RLS + PII', 'enforce at query time', C.orange],
          ['Logging', 'prompt, query, result, user', C.purple],
          ['Evaluation', 'known-answer test set', C.pink],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <text x={60 + i * 138} y={418} fill={col} fontSize="8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={60 + i * 138} y={436} fill={C.dim} fontSize="7.2" fontFamily={FONT}>{s.split(' ')[0]}</text>
            <text x={60 + i * 138} y={448} fill={C.dim} fontSize="7.2" fontFamily={FONT}>{s.split(' ').slice(1).join(' ')}</text>
          </g>
        ))}
        <text x={460} y={474} textAnchor="middle" fill={C.lime} fontSize="8" fontWeight="700" fontFamily={FONT}>AI accelerates the analyst - accountability for the number stays with a named owner</text>
        <text x={460} y={492} textAnchor="middle" fill={C.faint} fontSize="7.4" fontFamily={FONT}>best practice: the governed model of traditional BI plus the natural-language interface of AI (hybrid)</text>
      </g>
    </Frame>
  );
}
