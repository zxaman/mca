const FONT = "'Segoe UI', system-ui, sans-serif";

// Shared palette for the Business Intelligence Unit III (Multidimensional / OLAP) diagrams.
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
   3.1 - Multidimensional data model
   ------------------------------------------------------------------ */
export function OlMultidimDiagram() {
  const fx = 84;
  const fy = 150;
  const fw = 250;
  const fh = 168;
  const dx = 86;
  const dy = 54;
  const cellsX = [fx + fw / 4, fx + fw / 2, fx + (3 * fw) / 4];
  const cellsY = [fy + fh / 3, fy + (2 * fh) / 3];
  return (
    <Frame
      id="ol-multidim"
      title="Multidimensional data model - cube, axes aur cells"
      sub="har dimension ek axis, har cell mein measures (sales, quantity, margin)"
      label="An isometric three dimensional cube with product on the horizontal axis, time on the depth axis and store on the vertical axis, one highlighted cell carrying sales quantity and margin, and on the right three hierarchies listing levels such as category product item and year quarter month and region state city store"
    >
      {/* top face */}
      <polygon points={`${fx},${fy} ${fx + dx},${fy - dy} ${fx + fw + dx},${fy - dy} ${fx + fw},${fy}`} fill="rgba(0,212,255,0.10)" stroke={C.cyan} strokeWidth="1.6" strokeOpacity="0.8" />
      {/* right face */}
      <polygon points={`${fx + fw},${fy} ${fx + fw + dx},${fy - dy} ${fx + fw + dx},${fy + fh - dy} ${fx + fw},${fy + fh}`} fill="rgba(0,188,212,0.08)" stroke={C.teal} strokeWidth="1.6" strokeOpacity="0.8" />
      {/* front face */}
      <rect x={fx} y={fy} width={fw} height={fh} fill="rgba(47,111,255,0.08)" stroke={C.blue} strokeWidth="1.7" strokeOpacity="0.9" rx="2" />
      {/* front grid */}
      {cellsX.map((cx) => (
        <line key={`vx${cx}`} x1={cx} y1={fy} x2={cx} y2={fy + fh} stroke={C.blue} strokeWidth="0.8" strokeOpacity="0.45" />
      ))}
      {cellsY.map((cy) => (
        <line key={`hy${cy}`} x1={fx} y1={cy} x2={fx + fw} y2={cy} stroke={C.blue} strokeWidth="0.8" strokeOpacity="0.45" />
      ))}
      {/* top grid */}
      {cellsX.map((cx) => (
        <line key={`tx${cx}`} x1={cx} y1={fy} x2={cx + dx} y2={fy - dy} stroke={C.cyan} strokeWidth="0.8" strokeOpacity="0.4" />
      ))}
      {[0.5].map((t) => (
        <line key={`tz${t}`} x1={fx + dx * t} y1={fy - dy * t} x2={fx + fw + dx * t} y2={fy - dy * t} stroke={C.cyan} strokeWidth="0.8" strokeOpacity="0.4" />
      ))}
      {/* highlighted cell */}
      <rect x={cellsX[1]} y={cellsY[0]} width={fw / 4} height={fh / 3} fill={C.lime} fillOpacity="0.3" stroke={C.lime} strokeWidth="2" className="diagram-pop" style={{ animationDelay: '320ms' }} />
      <Note x={cellsX[1] + fw / 8} y={cellsY[0] + 24} text="cell" color={C.lime} size={9} bold delay={360} />

      {/* axis labels */}
      <Note x={fx + fw / 2} y={fy + fh + 22} text="PRODUCT (category - subcategory - item)" color={C.blue} size={9.4} bold delay={200} />
      <Note x={fx + fw + dx / 2 + 6} y={fy + fh + 12} text="STORE" color={C.teal} size={9.4} bold anchor="start" delay={240} />
      <Note x={fx + fw / 2 + dx + 30} y={fy - dy - 10} text="TIME (year - quarter - month)" color={C.cyan} size={9.4} bold delay={280} />

      {/* right side hierarchies */}
      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x={470} y={80} width={424} height={300} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={682} y={104} textAnchor="middle" fill={C.purple} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          HIERARCHIES - drill ka rasta
        </text>
        {[
          ['PRODUCT', 'category - subcategory - brand - item', C.blue],
          ['TIME', 'year - quarter - month - day', C.cyan],
          ['LOCATION', 'region - state - city - store', C.teal],
        ].map(([axis, levels, col], i) => (
          <g key={axis}>
            <text x={492} y={136 + i * 62} fill={col} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{axis}</text>
            {levels.split(' - ').map((lv, j) => (
              <g key={lv}>
                <rect x={492 + j * 92} y={144 + i * 62} width={84} height="24" rx="7" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.2" strokeOpacity="0.65" />
                <text x={492 + j * 92 + 42} y={160 + i * 62} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>{lv}</text>
              </g>
            ))}
          </g>
        ))}
        <text x={492} y={352} fill={C.dim} fontSize="8.6" fontFamily={FONT}>ek cell = ek member per dimension (item + month + store)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x={24} y={398} width={870} height={94} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={459} y={420} textAnchor="middle" fill={C.lime} fontSize="10" fontWeight="800" fontFamily={FONT}>
          measures cell ke andar rehte hain, dimensions cell ka address banate hain
        </text>
        {[
          'cell (Aata 5kg, Q3 FY25, Pune) - sales 1.2 lakh, qty 340, margin 22%',
          'n dimensions = hypercube; 3 dimensions akele 3-D box dikhte hain',
          'same model MOLAP array, ROLAP star schema ya HOLAP hybrid mein ban sakta hai',
        ].map((s, i) => (
          <text key={s} x={44} y={442 + i * 16} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.2 - Fact and dimension tables
   ------------------------------------------------------------------ */
export function OlFactDimDiagram() {
  return (
    <Frame
      id="ol-fact-dim"
      title="Fact table aur dimension table"
      sub="fact = numbers + keys (lamba), dimension = description (chaudi)"
      label="Central fact_sales table listing foreign keys for product date store customer and promotion plus numeric measures quantity sales cost and margin, surrounded by four dimension tables with descriptive attributes, and a bottom band listing the three fact table types and the dimension table families conformed role playing junk degenerate and slowly changing dimensions"
    >
      <Box x={330} y={72} w={260} h={46} title="DIM_DATE" sub="day, month, quarter, year, holiday" color={C.cyan} delay={200} />

      <Box x={330} y={132} w={260} h={126} title="FACT_SALES" sub="numbers + keys" color={C.lime} delay={80}
        lines={['product_key, date_key, store_key', 'customer_key, promotion_key', 'measures: qty, sales, cost, margin', 'grain: ek row = ek line item']} />

      <Box x={330} y={270} w={260} h={54} title="GRAIN (declared first)" sub="din / bill / line item" color={C.yellow} delay={160} />

      <Box x={56} y={126} w={250} h={92} title="DIM_PRODUCT" sub="name, category, brand" color={C.blue} delay={240}
        lines={['subcategory, item, size', 'colour, pack type']} />
      <Box x={614} y={126} w={250} h={92} title="DIM_STORE" sub="name, city, state" color={C.teal} delay={280}
        lines={['region, zone, format', 'open date, manager']} />
      <Box x={56} y={240} w={250} h={84} title="DIM_CUSTOMER" sub="name, segment, city" color={C.purple} delay={320}
        lines={['age band, loyalty tier', 'join date, channel']} />
      <Box x={614} y={240} w={250} h={84} title="DIM_PROMOTION" sub="type, start, end" color={C.pink} delay={360}
        lines={['discount %, media', 'campaign, coupon']} />

      <Arrow x1={460} y1={118} x2={460} y2={132} color={C.lime} delay={400} />
      <Arrow x1={306} y1={172} x2={330} y2={172} color={C.lime} delay={420} />
      <Arrow x1={614} y1={172} x2={590} y2={172} color={C.lime} delay={440} />
      <Arrow x1={306} y1={262} x2={330} y2={240} color={C.lime} delay={460} dashed />
      <Arrow x1={614} y1={262} x2={590} y2={240} color={C.lime} delay={480} dashed />

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x={24} y={352} width={424} height={116} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={236} y={374} textAnchor="middle" fill={C.lime} fontSize="10" fontWeight="800" fontFamily={FONT}>FACT TYPES</text>
        {[
          'transaction fact: har event ki ek row',
          'periodic snapshot: month-end balance',
          'accumulating snapshot: order ka lifecycle',
          'factless fact: attendance, coverage',
        ].map((t, i) => (
          <text key={t} x={44} y={396 + i * 17} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{`- ${t}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={472} y={352} width={424} height={116} rx="12" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={684} y={374} textAnchor="middle" fill={C.teal} fontSize="10" fontWeight="800" fontFamily={FONT}>DIMENSION FAMILIES</text>
        {[
          'conformed: same dim, kai facts (date, product)',
          'role-playing: ek dim, kai roles (order date, ship date)',
          'junk: chhote flags ek dim mein',
          'degenerate: key fact mein (invoice no)',
          'SCD type 1 / 2 / 3: overwrite, history rows, prev column',
        ].map((t, i) => (
          <text key={t} x={492} y={394 + i * 15} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${t}`}</text>
        ))}
      </g>
      <Note x={460} y={494} text="fact table lamba aur patla, dimension table chhota aur chauda" color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.3 - Measures and dimensions
   ------------------------------------------------------------------ */
export function OlMeasuresDiagram() {
  return (
    <Frame
      id="ol-measures"
      title="Measures aur dimensions - kya jod sakte hain, kya nahi"
      sub="additive, semi-additive, non-additive + dimension anatomy"
      label="Left side three measure classes additive semi additive and non additive with example measures and the rule for summing each, right side the anatomy of a product dimension with surrogate key natural key attributes and a three level hierarchy, and a bottom example showing that sales can be summed across all dimensions while balance can only be summed across one"
    >
      <Note x={214} y={74} text="MEASURES (facts)" color={C.lime} size={10} bold />
      <Box x={24} y={86} w={380} h={112} title="ADDITIVE" sub="sab dimensions par sum ho sakta hai" color={C.green} delay={60}
        lines={['sales amount, quantity sold', 'discount given, units returned', 'SUM() har group by par safe']} />
      <Box x={24} y={212} w={380} h={112} title="SEMI-ADDITIVE" sub="kuch dimensions par sum, time par nahi" color={C.yellow} delay={120}
        lines={['closing balance, stock on hand', 'headcount, account balance', 'time par SUM nahi - last / avg']} />
      <Box x={24} y={338} w={380} h={112} title="NON-ADDITIVE" sub="kisi bhi dimension par sum nahi" color={C.red} delay={180}
        lines={['ratio %, margin %, unit price', 'average ticket size, KPI index', 'pehle components jodo, phir ratio']} />

      <Note x={690} y={74} text="DIMENSION anatomy (dim_product)" color={C.cyan} size={10} bold />
      <g className="diagram-pop" style={{ animationDelay: '240ms' }}>
        <rect x={470} y={86} width={424} height={364} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={682} y={112} textAnchor="middle" fill={C.white} fontSize="9.4" fontFamily={FONT}>surrogate key + natural key (SKU) + attributes</text>
        {[
          ['CATEGORY', 'Food, Home care', C.blue],
          ['SUBCATEGORY', 'Biscuits, Detergent', C.cyan],
          ['BRAND', 'Brand A, Brand B', C.teal],
          ['ITEM', 'Aata 5kg, Soap 100g', C.green],
        ].map(([lv, eg, col], i) => (
          <g key={lv}>
            <rect x={494} y={130 + i * 62} width={376} height="46" rx="9" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.3" strokeOpacity="0.7" />
            <text x={510} y={150 + i * 62} fill={col} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{lv}</text>
            <text x={510} y={166 + i * 62} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{eg}</text>
            <text x={856} y={160 + i * 62} textAnchor="end" fill={C.faint} fontSize="8" fontFamily={FONT}>{`L${i + 1}`}</text>
            {i < 3 && <line x1={682} y1={176 + i * 62} x2={682} y2={192 + i * 62} stroke={col} strokeWidth="1.2" strokeOpacity="0.7" />}
          </g>
        ))}
        <text x={682} y={398} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>attributes: size, colour, pack, launch date, tax rate</text>
        <text x={682} y={418} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>hierarchy level se roll-up aur drill-down decide hota hai</text>
        <text x={682} y={438} textAnchor="middle" fill={C.yellow} fontSize="8.4" fontFamily={FONT}>dimension = &quot;by kis hisaab se&quot; ka jawab</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x={24} y={462} width={870} height={44} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={459} y={480} textAnchor="middle" fill={C.lime} fontSize="9.2" fontWeight="800" fontFamily={FONT}>
          exam check: sales sum kar sakte ho, balance sirf date par nahi, margin % kabhi nahi - pehle jodo phir divide karo
        </text>
        <text x={459} y={498} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>
          ratio ko store karne se average-of-averages ka galat answer aata hai, isliye numerator aur denominator alag store karo
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.4 - Star schema
   ------------------------------------------------------------------ */
export function OlStarSchemaDiagram() {
  return (
    <Frame
      id="ol-star"
      title="Star schema - ek fact, flat dimensions"
      sub="har dimension ek join, analyst ke liye sabse simple model"
      label="A central fact sales table with five flat dimension tables around it for date product store customer and promotion, arrows showing one join per dimension, and a bottom query strip showing a group by over the joined star with rows kept in third normal form only for dimensions"
    >
      <Box x={340} y={196} w={240} h={126} title="FACT_SALES" sub="grain: line item" color={C.lime} delay={100}
        lines={['5 FK + 4 measures', 'qty, sales, cost, margin', 'row count: millions', 'no descriptive text']} />

      <Box x={340} y={96} w={240} h={78} title="DIM_DATE" sub="day, month, quarter, year" color={C.cyan} delay={60} lines={['fiscal period, holiday flag']} />
      <Box x={56} y={202} w={232} h={112} title="DIM_PRODUCT" sub="name, category, brand" color={C.blue} delay={140} lines={['subcategory, size, pack']} />
      <Box x={632} y={202} w={232} h={112} title="DIM_STORE" sub="city, state, region" color={C.teal} delay={180} lines={['format, zone, manager']} />
      <Box x={150} y={362} w={232} h={102} title="DIM_CUSTOMER" sub="segment, loyalty tier" color={C.purple} delay={220} lines={['age band, city, channel']} />
      <Box x={538} y={362} w={232} h={102} title="DIM_PROMOTION" sub="campaign, discount %" color={C.pink} delay={260} lines={['media, start-end date']} />

      <Arrow x1={460} y1={174} x2={460} y2={196} color={C.lime} delay={300} />
      <Arrow x1={288} y1={258} x2={340} y2={258} color={C.lime} delay={320} />
      <Arrow x1={632} y1={258} x2={580} y2={258} color={C.lime} delay={340} />
      <Arrow x1={382} y1={362} x2={382} y2={322} color={C.lime} delay={360} />
      <Arrow x1={620} y1={362} x2={584} y2={322} color={C.lime} delay={380} dashed />

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x={24} y={474} width={870} height={36} rx="9" fill="rgba(47,111,255,0.07)" stroke={C.blue} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={459} y={496} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>
          SELECT d.year, p.category, SUM(f.sales) FROM fact_sales f JOIN dim_date d ON ... JOIN dim_product p ON ... GROUP BY 1, 2
        </text>
      </g>
      <Note x={118} y={190} text="1 join per dimension" color={C.lime} size={8.8} anchor="start" bold delay={440} />
      <Note x={460} y={82} text="star: fact centre mein, dimensions kinaare par" color={C.dim} size={8.8} delay={460} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.5 - Snowflake schema
   ------------------------------------------------------------------ */
export function OlSnowflakeDiagram() {
  return (
    <Frame
      id="ol-snowflake"
      title="Snowflake schema - dimensions ko normalize karo"
      sub="star jaisa hi, par har dimension apni hierarchy tables mein toota hua"
      label="A fact table on the left with dimension tables branching into normalized hierarchy tables: product to subcategory to category across the top row, store to city to state to region across the middle row, plus a date dimension and a customer dimension, with the extra join path highlighted and a note that one dimension can cost three joins"
    >
      <Box x={48} y={186} w={214} h={142} title="FACT_SALES" sub="grain: line item" color={C.lime} delay={80}
        lines={['5 FK + 4 measures', 'qty, sales, margin', 'same fact as star']} />

      {/* product chain */}
      <Box x={312} y={92} w={176} h={62} title="DIM_PRODUCT" sub="item, brand" color={C.blue} delay={120} />
      <Box x={524} y={92} w={164} h={62} title="DIM_SUBCATEGORY" sub="name, code" color={C.cyan} delay={160} />
      <Box x={724} y={92} w={168} h={62} title="DIM_CATEGORY" sub="name, dept" color={C.teal} delay={200} />

      {/* geo chain */}
      <Box x={312} y={186} w={176} h={62} title="DIM_STORE" sub="store name" color={C.green} delay={240} />
      <Box x={524} y={186} w={164} h={62} title="DIM_CITY" sub="city, pincode" color={C.yellow} delay={280} />
      <Box x={724} y={186} w={168} h={62} title="DIM_STATE" sub="state code" color={C.orange} delay={320} />
      <Box x={724} y={272} w={168} h={62} title="DIM_REGION" sub="zone, head" color={C.pink} delay={360} />

      <Box x={48} y={352} w={214} h={64} title="DIM_DATE" sub="day, month, quarter, year" color={C.cyan} delay={400} />
      <Box x={312} y={276} w={176} h={62} title="DIM_CUSTOMER" sub="customer, segment" color={C.purple} delay={420} />

      <Arrow x1={262} y1={222} x2={312} y2={150} color={C.lime} delay={440} />
      <Arrow x1={488} y1={124} x2={524} y2={124} color={C.lime} delay={460} />
      <Arrow x1={688} y1={124} x2={724} y2={124} color={C.lime} delay={480} />
      <Arrow x1={262} y1={250} x2={312} y2={216} color={C.lime} delay={500} />
      <Arrow x1={488} y1={216} x2={524} y2={216} color={C.lime} delay={520} />
      <Arrow x1={688} y1={216} x2={724} y2={216} color={C.lime} delay={540} />
      <Arrow x1={808} y1={248} x2={808} y2={272} color={C.lime} delay={560} />
      <Arrow x1={262} y1={296} x2={312} y2={318} color={C.lime} delay={580} dashed />
      <Arrow x1={155} y1={328} x2={155} y2={352} color={C.lime} delay={600} />

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x={24} y={436} width={506} height={74} rx="11" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={277} y={456} textAnchor="middle" fill={C.green} fontSize="9.6" fontWeight="800" fontFamily={FONT}>KYUN NORMALIZE KARTE HAIN</text>
        <text x={42} y={476} fill={C.dim} fontSize="8.4" fontFamily={FONT}>- redundancy kam: category ka naam ek hi jagah</text>
        <text x={42} y={492} fill={C.dim} fontSize="8.4" fontFamily={FONT}>- storage bachta hai, update anomaly nahi</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={548} y={436} width={348} height={74} rx="11" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={722} y={456} textAnchor="middle" fill={C.red} fontSize="9.6" fontWeight="800" fontFamily={FONT}>KIMAT</text>
        <text x={566} y={476} fill={C.dim} fontSize="8.4" fontFamily={FONT}>- store se region tak 4 joins</text>
        <text x={566} y={492} fill={C.dim} fontSize="8.4" fontFamily={FONT}>- query slow, model complex</text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.6 - Star vs snowflake
   ------------------------------------------------------------------ */
export function OlStarVsSnowDiagram() {
  return (
    <Frame
      id="ol-star-vs-snow"
      title="Star vs snowflake - kaunsa kab"
      sub="ek hi fact model, do normal forms, do trade-offs"
      label="Left half a small star with one fact and four flat dimension boxes, right half a snowflake where dimension boxes branch into further normalized boxes, and a bottom band of decision criteria: choose star for speed and simplicity, choose snowflake for storage and hierarchy discipline, with the hybrid galaxy pattern noted"
    >
      <Note x={230} y={74} text="STAR - denormalized" color={C.cyan} size={10} bold />
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={84} width={412} height={214} rx="12" fill="rgba(0,212,255,0.04)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.7" />
        <rect x={168} y={160} width={124} height={58} rx="8" fill="rgba(196,255,0,0.10)" stroke={C.lime} strokeWidth="1.4" />
        <text x={230} y={184} textAnchor="middle" fill={C.lime} fontSize="9" fontWeight="800" fontFamily={FONT}>FACT</text>
        <text x={230} y={202} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>4 FK + measures</text>
        {[
          [56, 100, 'PRODUCT', C.blue],
          [56, 224, 'CUSTOMER', C.purple],
          [300, 100, 'DATE', C.teal],
          [300, 224, 'STORE', C.green],
        ].map(([x, y, t, col], i) => (
          <g key={t}>
            <rect x={x} y={y} width={104} height="46" rx="8" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.3" strokeOpacity="0.75" />
            <text x={x + 52} y={y + 20} textAnchor="middle" fill={col} fontSize="8.8" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={x + 52} y={y + 34} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>flat attributes</text>
            <line
              x1={x < 230 ? x + 104 : x}
              y1={y < 160 ? y + 46 : y}
              x2={x < 230 ? 168 : 292}
              y2={y < 160 ? 160 : 189}
              stroke={C.lime}
              strokeWidth="1.1"
              strokeOpacity="0.6"
              style={{ animationDelay: `${180 + i * 40}ms` }}
            />
          </g>
        ))}
        <text x={230} y={284} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>1 join per dimension, 4 joins total</text>
      </g>

      <Note x={690} y={74} text="SNOWFLAKE - normalized" color={C.orange} size={10} bold />
      <g className="diagram-pop" style={{ animationDelay: '120ms' }}>
        <rect x={460} y={84} width={434} height={214} rx="12" fill="rgba(255,136,0,0.04)" stroke={C.orange} strokeWidth="1.3" strokeOpacity="0.7" />
        <rect x={468} y={152} width={90} height="60" rx="8" fill="rgba(196,255,0,0.10)" stroke={C.lime} strokeWidth="1.4" />
        <text x={513} y={176} textAnchor="middle" fill={C.lime} fontSize="9" fontWeight="800" fontFamily={FONT}>FACT</text>
        <text x={513} y={194} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>keys + measures</text>

        <rect x={576} y={96} width={92} height="40" rx="7" fill="rgba(0,212,255,0.07)" stroke={C.cyan} strokeWidth="1.2" />
        <text x={622} y={120} textAnchor="middle" fill={C.cyan} fontSize="8" fontWeight="700" fontFamily={FONT}>DIM_PRODUCT</text>
        <rect x={688} y={96} width={88} height="40" rx="7" fill="rgba(0,188,212,0.06)" stroke={C.teal} strokeWidth="1.2" />
        <text x={732} y={120} textAnchor="middle" fill={C.teal} fontSize="7.8" fontFamily={FONT}>SUBCATEGORY</text>
        <rect x={796} y={96} width={88} height="40" rx="7" fill="rgba(0,188,212,0.04)" stroke={C.teal} strokeWidth="1.2" strokeDasharray="4 3" />
        <text x={840} y={120} textAnchor="middle" fill={C.teal} fontSize="8" fontFamily={FONT}>CATEGORY</text>

        <rect x={576} y={176} width={92} height="40" rx="7" fill="rgba(0,230,118,0.07)" stroke={C.green} strokeWidth="1.2" />
        <text x={622} y={200} textAnchor="middle" fill={C.green} fontSize="8.2" fontWeight="700" fontFamily={FONT}>DIM_STORE</text>
        <rect x={688} y={176} width={88} height="40" rx="7" fill="rgba(255,214,0,0.06)" stroke={C.yellow} strokeWidth="1.2" />
        <text x={732} y={200} textAnchor="middle" fill={C.yellow} fontSize="8.2" fontFamily={FONT}>CITY</text>
        <rect x={796} y={176} width={88} height="40" rx="7" fill="rgba(255,214,0,0.04)" stroke={C.yellow} strokeWidth="1.2" strokeDasharray="4 3" />
        <text x={840} y={200} textAnchor="middle" fill={C.yellow} fontSize="8.2" fontFamily={FONT}>STATE</text>
        <rect x={796} y={240} width={88} height="34" rx="7" fill="rgba(255,122,178,0.05)" stroke={C.pink} strokeWidth="1.2" strokeDasharray="4 3" />
        <text x={840} y={262} textAnchor="middle" fill={C.pink} fontSize="8.2" fontFamily={FONT}>REGION</text>

        <Arrow x1={558} y1={170} x2={576} y2={124} color={C.orange} delay={200} />
        <Arrow x1={558} y1={196} x2={576} y2={196} color={C.orange} delay={240} />
        <Arrow x1={668} y1={116} x2={688} y2={116} color={C.orange} delay={280} />
        <Arrow x1={776} y1={116} x2={796} y2={116} color={C.orange} delay={320} />
        <Arrow x1={668} y1={196} x2={688} y2={196} color={C.orange} delay={360} />
        <Arrow x1={776} y1={196} x2={796} y2={196} color={C.orange} delay={400} />
        <Arrow x1={840} y1={216} x2={840} y2={240} color={C.orange} delay={440} />
        <text x={688} y={288} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>hierarchy = alag table, isliye joins zyada</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x={24} y={310} width={870} height={98} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={459} y={330} textAnchor="middle" fill={C.lime} fontSize="10" fontWeight="800" fontFamily={FONT}>DECISION CRITERIA</text>
        <text x={44} y={352} fill={C.cyan} fontSize="8.6" fontFamily={FONT}>STAR chuno jab:</text>
        <text x={44} y={368} fill={C.dim} fontSize="8.4" fontFamily={FONT}>speed chahiye, BI tool simple, team chhoti, dims badal rahe</text>
        <text x={44} y={384} fill={C.dim} fontSize="8.4" fontFamily={FONT}>dimension rows kam (under ~1 lakh), ETL simple rakhna hai</text>
        <text x={478} y={352} fill={C.orange} fontSize="8.6" fontFamily={FONT}>SNOWFLAKE chuno jab:</text>
        <text x={478} y={368} fill={C.dim} fontSize="8.4" fontFamily={FONT}>storage sensitive, hierarchy bade aur reuse hote hain</text>
        <text x={478} y={384} fill={C.dim} fontSize="8.4" fontFamily={FONT}>conformed dims multiple marts mein share hote hain</text>
        <text x={459} y={400} textAnchor="middle" fill={C.purple} fontSize="8.2" fontFamily={FONT}>hybrid: galaxy schema (multiple facts) + selective snowflaking (sirf bade dims ko toda)</text>
      </g>

      <Note x={459} y={430} text="exam one-liner: star read ke liye, snowflake storage ke liye" color={C.yellow} size={9.2} bold />
      <Note x={459} y={452} text="real projects mein star + selective snowflaking hi sabse common hai" color={C.dim} size={8.6} />
      <Note x={459} y={474} text="normalization se update anomaly kam, par query mein join badh jaate hain" color={C.faint} size={8.4} />
      <Note x={459} y={496} text="dimension ka size aur query latency - yahi do numbers decision lete hain" color={C.faint} size={8.4} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.7 - OLAP introduction aur architecture
   ------------------------------------------------------------------ */
export function OlOlapArchDiagram() {
  return (
    <Frame
      id="ol-olap-arch"
      title="OLAP architecture - teen layers"
      sub="warehouse ka data OLAP server se hokar client tools tak pahunchta hai"
      label="Four stacked layers: source systems feeding a data warehouse and marts through ETL, then an OLAP server with an aggregation engine cube cache MDX and SQL layer plus security and metadata, then client tools such as Excel Power BI and Tableau, with a FASMI criteria strip at the bottom"
    >
      {[
        ['ERP', C.blue],
        ['CRM', C.cyan],
        ['POS / web', C.teal],
        ['flat files', C.green],
        ['logs / API', C.orange],
      ].map(([t, col], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${50 + i * 40}ms` }}>
          <rect x={24 + i * 174} y={80} width={160} height={48} rx="9" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.3" strokeOpacity="0.75" />
          <text x={24 + i * 174 + 80} y={108} textAnchor="middle" fill={col} fontSize="9.4" fontWeight="800" fontFamily={FONT}>{t}</text>
        </g>
      ))}
      <Note x={18} y={74} text="1. SOURCES" color={C.dim} size={8.6} anchor="start" bold />

      <Arrow x1={460} y1={132} x2={460} y2={158} color={C.lime} delay={260} />
      <Note x={470} y={150} text="ETL / ELT - extract, transform (clean, conform, dedupe), load" color={C.lime} size={8.2} anchor="start" delay={280} />

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x={24} y={164} width={560} height={54} rx="10" fill="rgba(0,230,118,0.06)" stroke={C.green} strokeWidth="1.4" />
        <text x={304} y={186} textAnchor="middle" fill={C.green} fontSize="9.8" fontWeight="800" fontFamily={FONT}>2. DATA WAREHOUSE - enterprise model</text>
        <text x={304} y={204} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>star / snowflake / historical / grain fixed / conformed dimensions</text>
        <rect x={596} y={164} width={140} height={54} rx="10" fill="rgba(255,136,0,0.06)" stroke={C.orange} strokeWidth="1.3" />
        <text x={666} y={188} textAnchor="middle" fill={C.orange} fontSize="9" fontWeight="800" fontFamily={FONT}>STAGING</text>
        <text x={666} y={204} textAnchor="middle" fill={C.dim} fontSize="7.8" fontFamily={FONT}>temp load area</text>
        <rect x={748} y={164} width={136} height={54} rx="10" fill="rgba(170,0,255,0.06)" stroke={C.purple} strokeWidth="1.3" />
        <text x={816} y={188} textAnchor="middle" fill={C.purple} fontSize="9" fontWeight="800" fontFamily={FONT}>DATA MARTS</text>
        <text x={816} y={204} textAnchor="middle" fill={C.dim} fontSize="7.8" fontFamily={FONT}>dept-wise subset</text>
      </g>

      <Arrow x1={460} y1={218} x2={460} y2={244} color={C.lime} delay={340} />

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x={24} y={250} width={860} height={92} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.5" />
        <text x={454} y={270} textAnchor="middle" fill={C.cyan} fontSize="9.8" fontWeight="800" fontFamily={FONT}>3. OLAP SERVER - aggregation, cache, query engine</text>
        {[
          ['AGGREGATION', ['pre-summed cells', 'summary tables'], C.lime],
          ['CUBE CACHE', ['hot slices in RAM', 'sub-second reply'], C.teal],
          ['QUERY ENGINE', ['MDX / SQL', 'drill-aware'], C.blue],
          ['SECURITY + META', ['row level, audit', 'cube definitions'], C.pink],
        ].map(([t, lines, col], i) => (
          <g key={t}>
            <rect x={44 + i * 210} y={282} width={194} height={50} rx="8" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.2" strokeOpacity="0.7" />
            <text x={44 + i * 210 + 97} y={298} textAnchor="middle" fill={col} fontSize="8.6" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={44 + i * 210 + 97} y={313} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>{lines[0]}</text>
            <text x={44 + i * 210 + 97} y={325} textAnchor="middle" fill={C.dim} fontSize="7.6" fontFamily={FONT}>{lines[1]}</text>
          </g>
        ))}
      </g>

      <Arrow x1={460} y1={342} x2={460} y2={366} color={C.lime} delay={420} />

      <Note x={18} y={380} text="4. CLIENT / PRESENTATION" color={C.dim} size={8.6} anchor="start" bold />
      {[
        ['Excel pivot', C.green],
        ['Power BI', C.yellow],
        ['Tableau', C.blue],
        ['web / mobile', C.purple],
      ].map(([t, col], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${440 + i * 40}ms` }}>
          <rect x={24 + i * 218} y={386} width={200} height={40} rx="9" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.3" strokeOpacity="0.75" />
          <text x={24 + i * 218 + 100} y={411} textAnchor="middle" fill={col} fontSize="9" fontWeight="800" fontFamily={FONT}>{t}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x={24} y={432} width={860} height={72} rx="11" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={454} y={452} textAnchor="middle" fill={C.lime} fontSize="9.8" fontWeight="800" fontFamily={FONT}>FASMI - achha OLAP system in paanch cheezon par judge hota hai</text>
        {[
          'FAST: 1-5 second mein jawab, bade data par bhi',
          'ANALYSIS: business logic + statistics support',
          'SHARED: multi-user, security aur concurrency',
          'MULTIDIMENSIONAL: dimensions ka view',
          'INFORMATION: itna data jo decision le sake',
        ].map((s, i) => (
          <text key={s} x={i % 2 === 0 ? 44 : 470} y={466 + Math.floor(i / 2) * 13} fill={C.dim} fontSize="8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.8 - Types of OLAP systems
   ------------------------------------------------------------------ */
export function OlOlapTypesDiagram() {
  return (
    <Frame
      id="ol-olap-types"
      title="ROLAP, MOLAP aur HOLAP"
      sub="storage kahan rahega - yahi teen types ka poora farq hai"
      label="Three columns comparing ROLAP which queries the relational star schema directly, MOLAP which pre-builds a multidimensional cube array, and HOLAP which keeps summary aggregates in a cube and detail in the relational store, each listing storage speed freshness and drill-down behaviour, with DOLAP WOLAP and RTOLAP variants below"
    >
      <Box x={24} y={76} w={278} h={286} title="ROLAP" sub="relational OLAP" color={C.blue} delay={60}
        lines={['data: star schema, no cube', 'engine: SQL generated on the fly', 'storage: same RDBMS / MPP', 'speed: depends on indexes + summary tables', 'freshness: near real time', 'drill-down: full detail available', 'scale: rows ke saath badhta hai', 'pros: volume + freshness + SQL', 'cons: slow ad-hoc aggregation']} />

      <Box x={320} y={76} w={278} h={286} title="MOLAP" sub="multidimensional OLAP" color={C.purple} delay={140}
        lines={['data: proprietary n-dim array / cube', 'engine: pre-computed + bitmap index', 'storage: cube files (compressed, sparse)', 'speed: fastest, sub-second', 'freshness: nightly batch refresh', 'drill-down: cube ke andar tak', 'scale: cube size limit (build time)', 'pros: speed + complex calc + slicing', 'cons: build cost, detail aksar chhoot jata']} />

      <Box x={616} y={76} w={280} h={286} title="HOLAP" sub="hybrid OLAP" color={C.green} delay={220}
        lines={['data: summary cube + relational detail', 'engine: cube for aggregates, SQL for rows', 'storage: dono jagah', 'speed: summary fast, detail thoda slow', 'freshness: cube batch, detail live', 'drill-down: cube se detail table tak', 'scale: bade detail + fast summary', 'pros: best of both', 'cons: design + maintenance complex']} />

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x={24} y={378} width={872} height={62} rx="11" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={398} textAnchor="middle" fill={C.teal} fontSize="9.6" fontWeight="800" fontFamily={FONT}>BAKI VARIANTS - exam mein ek line kaafi hai</text>
        <text x={44} y={418} fill={C.dim} fontSize="8.4" fontFamily={FONT}>DOLAP: desktop OLAP, laptop par chhota cube (offline analyst)</text>
        <text x={44} y={434} fill={C.dim} fontSize="8.4" fontFamily={FONT}>WOLAP: web OLAP, browser se same engine (SaaS dashboards)</text>
        <text x={470} y={418} fill={C.dim} fontSize="8.4" fontFamily={FONT}>RTOLAP: real-time OLAP, streaming updates (fraud, ops)</text>
        <text x={470} y={434} fill={C.dim} fontSize="8.4" fontFamily={FONT}>MOLAP+ROLAP dono = HOLAP (summary cube, detail relational)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x={24} y={452} width={872} height={52} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={472} textAnchor="middle" fill={C.lime} fontSize="9.2" fontWeight="800" fontFamily={FONT}>
          selection: detail + freshness chahiye to ROLAP, speed chahiye to MOLAP, dono chahiye to HOLAP
        </text>
        <text x={460} y={490} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>
          sparsity zyada ho (bade dimension combos) to MOLAP cube mehnge padega, wahan ROLAP sasta rehta hai
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.9 - OLAP cube concept
   ------------------------------------------------------------------ */
export function OlCubeDiagram() {
  const fx = 64;
  const fy = 208;
  const fw = 210;
  const fh = 132;
  const dx = 76;
  const dy = 46;
  return (
    <Frame
      id="ol-cube"
      title="OLAP cube - pre-computed cells + sparsity handling"
      sub="3-D box dikhta hai, andar n-dimensional array hota hai"
      label="An isometric cube on the left with one highlighted cell showing sales quantity and margin, aggregate levels for all year and quarter stacked above it, and on the right the sparsity calculation of 3000 products times 400 stores times 1100 days times 2 channels giving 2.64 billion possible cells against about 40 million actual, with partitioning and non-empty storage strategy"
    >
      {/* aggregate levels */}
      {[
        ['ALL (company)', 24, C.purple],
        ['YEAR', 140, C.yellow],
        ['QUARTER', 256, C.cyan],
      ].map(([t, x, col], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${60 + i * 50}ms` }}>
          <rect x={x} y={74} width={104} height="32" rx="8" fill={col} fillOpacity="0.08" stroke={col} strokeWidth="1.3" strokeOpacity="0.75" />
          <text x={x + 52} y={94} textAnchor="middle" fill={col} fontSize="8.4" fontWeight="800" fontFamily={FONT}>{t}</text>
        </g>
      ))}
      <Arrow x1={76} y1={108} x2={76} y2={152} color={C.purple} delay={200} label="roll-up" labelDx={40} labelDy={-4} />

      {/* top face */}
      <polygon points={`${fx},${fy} ${fx + dx},${fy - dy} ${fx + fw + dx},${fy - dy} ${fx + fw},${fy}`} fill="rgba(0,212,255,0.10)" stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.8" />
      <polygon points={`${fx + fw},${fy} ${fx + fw + dx},${fy - dy} ${fx + fw + dx},${fy + fh - dy} ${fx + fw},${fy + fh}`} fill="rgba(0,188,212,0.08)" stroke={C.teal} strokeWidth="1.5" strokeOpacity="0.8" />
      <rect x={fx} y={fy} width={fw} height={fh} fill="rgba(47,111,255,0.07)" stroke={C.blue} strokeWidth="1.6" strokeOpacity="0.9" />
      {[1, 2].map((k) => (
        <g key={k}>
          <line x1={fx + (fw / 3) * k} y1={fy} x2={fx + (fw / 3) * k} y2={fy + fh} stroke={C.blue} strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1={fx} y1={fy + (fh / 3) * k} x2={fx + fw} y2={fy + (fh / 3) * k} stroke={C.blue} strokeWidth="0.8" strokeOpacity="0.4" />
        </g>
      ))}
      <rect x={fx + fw / 3} y={fy + fh / 3} width={fw / 3} height={fh / 3} fill={C.lime} fillOpacity="0.28" stroke={C.lime} strokeWidth="2" className="diagram-pop" style={{ animationDelay: '280ms' }} />
      <Note x={fx + fw / 2} y={fy + fh / 2 + 4} text="1 cell" color={C.lime} size={8.8} bold delay={300} />

      <Note x={fx + fw / 2} y={fy + fh + 20} text="PRODUCT" color={C.blue} size={8.8} bold delay={320} />
      <Note x={fx + fw + dx + 6} y={fy + fh + 6} text="STORE" color={C.teal} size={8.8} bold anchor="start" delay={340} />
      <Note x={196} y={144} text="TIME" color={C.cyan} size={8.8} bold delay={360} />

      {/* sparsity panel */}
      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x={410} y={80} width={486} height={130} rx="12" fill="rgba(255,136,0,0.05)" stroke={C.orange} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={653} y={102} textAnchor="middle" fill={C.orange} fontSize="9.8" fontWeight="800" fontFamily={FONT}>SPARSITY - asli problem</text>
        <text x={430} y={124} fill={C.dim} fontSize="8.4" fontFamily={FONT}>possible cells = 3,000 products x 400 stores x 1,100 days x 2 channels</text>
        <text x={430} y={146} fill={C.red} fontSize="9.4" fontWeight="700" fontFamily={FONT}>= 2.64 arab cells (2.64 billion)</text>
        <text x={430} y={168} fill={C.dim} fontSize="8.4" fontFamily={FONT}>actual combinations jo roz bikte hain = ~4 crore</text>
        <text x={430} y={190} fill={C.green} fontSize="9.4" fontWeight="700" fontFamily={FONT}>= 1.5% dense - 98.5% cells khaali</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x={410} y={222} width={486} height={118} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={653} y={244} textAnchor="middle" fill={C.lime} fontSize="9.6" fontWeight="800" fontFamily={FONT}>CUBE KO CHHOTA RAKHNE KE TAREEKE</text>
        {[
          'sirf non-empty cells store karo (sparse array + offset)',
          'partition: har saal ya region ka alag cube chunk',
          'aggregate only: detail rows relational mein chhod do',
          'dimension pruning: jin dims par kabhi query nahi, hata do',
          'bitmap index: har dimension member ke liye bitset',
        ].map((s, i) => (
          <text key={s} x={430} y={264 + i * 15} fill={C.dim} fontSize="8.2" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={410} y={352} width={486} height={66} rx="11" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={653} y={372} textAnchor="middle" fill={C.cyan} fontSize="9" fontWeight="800" fontFamily={FONT}>PARTITION STRATEGY (partition = chhota cube)</text>
        <text x={430} y={390} fill={C.dim} fontSize="8.2" fontFamily={FONT}>- time partition: FY24, FY25 alag (purana read-only)</text>
        <text x={430} y={408} fill={C.dim} fontSize="8.2" fontFamily={FONT}>- sirf naye partition ka rebuild - poora cube nahi</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x={24} y={432} width={872} height={66} rx="11" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={452} textAnchor="middle" fill={C.purple} fontSize="9.4" fontWeight="800" fontFamily={FONT}>
          cell = ek measure ka value, ek member per dimension par (measures: sales, qty, margin, cost)
        </text>
        <text x={460} y={470} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>
          dimensions badhne par cells multiplicative badhte hain - isliye cube design ka pehla kaam grain aur dimension count fix karna hai
        </text>
        <text x={460} y={488} textAnchor="middle" fill={C.yellow} fontSize="8.2" fontFamily={FONT}>
          exam line: cube = pre-aggregated multidimensional view, sparsity management iska core design problem hai
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.10 - OLAP operations
   ------------------------------------------------------------------ */
function OpPanel({ x, y, title, sub, color, delay, children }) {
  return (
    <g className="diagram-pop" style={{ animationDelay: `${delay}ms` }}>
      <rect x={x} y={y} width={280} height={200} rx="12" fill={color} fillOpacity="0.04" stroke={color} strokeWidth="1.4" strokeOpacity="0.75" />
      <text x={x + 140} y={y + 22} textAnchor="middle" fill={color} fontSize="10" fontWeight="800" fontFamily={FONT}>{title}</text>
      <text x={x + 140} y={y + 38} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>{sub}</text>
      {children}
    </g>
  );
}

export function OlOperationsDiagram() {
  const levels = (x, y, dir) => (
    <>
      {[
        ['month', 0, 4, 30, 44],
        ['quarter', 1, 2, 66, 76],
        ['year', 2, 1, 110, 90],
      ].map(([name, row, count, w, left]) => (
        <g key={name}>
          {Array.from({ length: count }).map((_, i) => (
            <rect
              key={i}
              x={x + left + i * (w + 6)}
              y={y + (2 - row) * 30}
              width={w}
              height="22"
              rx="5"
              fill={row === 2 ? C.lime : row === 1 ? C.cyan : C.blue}
              fillOpacity="0.14"
              stroke={row === 2 ? C.lime : row === 1 ? C.cyan : C.blue}
              strokeWidth="1.1"
              strokeOpacity="0.8"
            />
          ))}
          <text x={x + 6} y={y + (2 - row) * 30 + 15} fill={C.dim} fontSize="7.6" fontFamily={FONT}>{name}</text>
        </g>
      ))}
      <Arrow x1={x + 236} y1={dir === 'up' ? y + 62 : y + 22} x2={x + 236} y2={dir === 'up' ? y + 24 : y + 60} color={C.lime} delay={0} />
    </>
  );
  return (
    <Frame
      id="ol-operations"
      title="OLAP operations - cube par paanch basic moves"
      sub="roll-up, drill-down, slice, dice, pivot (+ drill-through)"
      label="Six panels: roll-up aggregating months into quarters and years, drill-down going from year to month, slice fixing one dimension value, dice selecting ranges on two dimensions, pivot swapping rows and columns, and drill-through jumping from a cube cell to the detail rows"
    >
      <OpPanel x={24} y={68} title="1. ROLL-UP" sub="zoom out - aggregate up" color={C.blue} delay={60}>
        {levels(60, 112, 'up')}
        <text x={44} y={222} fill={C.dim} fontSize="8" fontFamily={FONT}>- day to month to quarter to year</text>
        <text x={44} y={238} fill={C.dim} fontSize="8" fontFamily={FONT}>- cells kam, level upar (SUM)</text>
        <text x={44} y={254} fill={C.yellow} fontSize="8" fontFamily={FONT}>- question: saal ka total kitna?</text>
      </OpPanel>

      <OpPanel x={320} y={68} title="2. DRILL-DOWN" sub="zoom in - detail mein jao" color={C.cyan} delay={140}>
        {levels(356, 112, 'down')}
        <text x={340} y={222} fill={C.dim} fontSize="8" fontFamily={FONT}>- year se quarter se month se day</text>
        <text x={340} y={238} fill={C.dim} fontSize="8" fontFamily={FONT}>- roll-up ka ulta, naya detail</text>
        <text x={340} y={254} fill={C.yellow} fontSize="8" fontFamily={FONT}>- question: kaunsa mahina gira?</text>
      </OpPanel>

      <OpPanel x={616} y={68} title="3. SLICE" sub="ek dimension fix karo" color={C.green} delay={220}>
        <polygon points="680,140 760,112 860,112 780,140" fill="rgba(0,230,118,0.04)" stroke={C.green} strokeWidth="1.2" strokeOpacity="0.55" />
        <polygon points="780,140 860,112 860,196 780,224" fill="rgba(0,230,118,0.04)" stroke={C.green} strokeWidth="1.2" strokeOpacity="0.45" />
        <rect x={680} y={140} width={100} height={84} fill={C.lime} fillOpacity="0.20" stroke={C.lime} strokeWidth="1.8" />
        <line x1={780} y1={140} x2={860} y2={112} stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={730} y={188} textAnchor="middle" fill={C.lime} fontSize="8.4" fontWeight="700" fontFamily={FONT}>FY 2024</text>
        <text x={636} y={238} fill={C.dim} fontSize="8" fontFamily={FONT}>- ek dimension ki ek value fix</text>
        <text x={636} y={254} fill={C.dim} fontSize="8" fontFamily={FONT}>- slice = 2-D sub-cube (baaki dims)</text>
      </OpPanel>

      <OpPanel x={24} y={278} title="4. DICE" sub="do ya zyada ranges se sub-cube" color={C.orange} delay={300}>
        <polygon points="90,348 166,322 260,322 184,348" fill="rgba(255,136,0,0.10)" stroke={C.orange} strokeWidth="1.2" strokeOpacity="0.7" />
        <polygon points="184,348 260,322 260,402 184,428" fill="rgba(255,136,0,0.05)" stroke={C.orange} strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x={90} y={348} width={94} height={80} fill="rgba(255,136,0,0.07)" stroke={C.orange} strokeWidth="1.3" strokeOpacity="0.6" />
        <rect x={110} y={368} width={54} height={40} fill={C.lime} fillOpacity="0.18" stroke={C.lime} strokeWidth="1.6" />
        <text x={137} y={393} textAnchor="middle" fill={C.lime} fontSize="7.6" fontWeight="700" fontFamily={FONT}>dice</text>
        <text x={44} y={440} fill={C.dim} fontSize="8" fontFamily={FONT}>- product list + city range + Q1-Q2</text>
        <text x={44} y={456} fill={C.dim} fontSize="8" fontFamily={FONT}>- slice ek value, dice range/multi</text>
        <text x={44} y={472} fill={C.yellow} fontSize="8" fontFamily={FONT}>- dice se naya chhota sub-cube</text>
      </OpPanel>

      <OpPanel x={320} y={278} title="5. PIVOT (ROTATE)" sub="rows aur columns swap" color={C.purple} delay={380}>
        <g>
          <rect x={344} y={330} width={104} height={72} rx="7" fill="rgba(170,0,255,0.06)" stroke={C.purple} strokeWidth="1.2" strokeOpacity="0.7" />
          <text x={396} y={344} textAnchor="middle" fill={C.purple} fontSize="7.4" fontFamily={FONT}>rows: product</text>
          <text x={396} y={358} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>cols: quarter</text>
          {[0, 1, 2].map((i) => (
            <line key={i} x1={344} y1={362 + i * 14} x2={448} y2={362 + i * 14} stroke={C.purple} strokeWidth="0.7" strokeOpacity="0.4" />
          ))}
          <Arrow x1={456} y1={366} x2={486} y2={366} color={C.lime} delay={0} />
          <rect x={494} y={330} width={104} height={72} rx="7" fill="rgba(170,0,255,0.06)" stroke={C.purple} strokeWidth="1.2" strokeOpacity="0.7" />
          <text x={546} y={344} textAnchor="middle" fill={C.purple} fontSize="7.4" fontFamily={FONT}>rows: quarter</text>
          <text x={546} y={358} textAnchor="middle" fill={C.dim} fontSize="7.4" fontFamily={FONT}>cols: product</text>
          {[0, 1, 2].map((i) => (
            <line key={i} x1={494} y1={362 + i * 14} x2={598} y2={362 + i * 14} stroke={C.purple} strokeWidth="0.7" strokeOpacity="0.4" />
          ))}
        </g>
        <text x={340} y={432} fill={C.dim} fontSize="8" fontFamily={FONT}>- axes badal kar naya view, data same</text>
        <text x={340} y={448} fill={C.yellow} fontSize="8" fontFamily={FONT}>- pivot = rotation, koi aggregation nahi</text>
      </OpPanel>

      <OpPanel x={616} y={278} title="6. DRILL-THROUGH" sub="cube se detail rows tak" color={C.pink} delay={460}>
        <rect x={636} y={326} width={76} height={54} rx="7" fill="rgba(255,122,178,0.08)" stroke={C.pink} strokeWidth="1.3" />
        <text x={674} y={352} textAnchor="middle" fill={C.pink} fontSize="8" fontWeight="700" fontFamily={FONT}>cell</text>
        <text x={674} y={366} textAnchor="middle" fill={C.dim} fontSize="7.2" fontFamily={FONT}>1.2 lakh</text>
        <Arrow x1={716} y1={352} x2={744} y2={352} color={C.lime} delay={0} />
        <rect x={750} y={318} width={128} height={76} rx="7" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={814} y={332} textAnchor="middle" fill={C.lime} fontSize="7.4" fontFamily={FONT}>invoice-level rows</text>
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={756} y1={342 + i * 13} x2={872} y2={342 + i * 13} stroke={C.faint} strokeWidth="0.8" strokeOpacity="0.6" />
        ))}
        <text x={636} y={416} fill={C.dim} fontSize="8" fontFamily={FONT}>- cube ke number se source rows tak</text>
        <text x={636} y={432} fill={C.dim} fontSize="8" fontFamily={FONT}>- MOLAP mein relational fallback</text>
        <text x={636} y={448} fill={C.yellow} fontSize="8" fontFamily={FONT}>- audit / root cause ke liye zaroori</text>
      </OpPanel>

      <Note x={460} y={500} text="yaad rakho: roll-up aur drill-down hierarchy par chalte hain, slice/dice selection par, pivot sirf presentation par" color={C.yellow} size={8.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.11 - OLAP vs OLTP
   ------------------------------------------------------------------ */
export function OlVsOltpDiagram() {
  const rows = [
    ['Purpose', 'run the business', 'analyse the business'],
    ['Users', 'clerks, applications', 'analysts, managers'],
    ['Workload', 'many short read-write', 'few long read-only'],
    ['Queries', 'INSERT / UPDATE / DELETE', 'SELECT with GROUP BY'],
    ['Data', 'current, detailed', 'historical, summarized'],
    ['Schema', 'normalized (3NF)', 'star / snowflake'],
    ['Size', 'GB', 'TB to PB'],
    ['Indexing', 'B-tree on keys', 'bitmap, columnar, partition'],
    ['Response', 'milliseconds', 'seconds to minutes'],
    ['Concurrency', 'thousands of users', 'tens of heavy queries'],
    ['Metric', 'TPS + latency', 'scan throughput'],
  ];
  return (
    <Frame
      id="ol-vs-oltp"
      title="OLTP vs OLAP"
      sub="ek system roz ka kaam, doosra analysis - isliye alag systems"
      label="A two column comparison table with eleven rows covering purpose users workload queries data schema size indexing response concurrency and metric, showing OLTP as short concurrent transactions on normalized tables and OLAP as long aggregate queries on a star schema, with an ETL and CDC pipeline note at the bottom and HTAP as the exception"
    >
      <g className="diagram-pop">
        <rect x={24} y={68} width={152} height={30} rx="7" fill="rgba(154,176,224,0.10)" stroke={C.faint} strokeWidth="1.1" />
        <text x={100} y={88} textAnchor="middle" fill={C.white} fontSize="9" fontWeight="800" fontFamily={FONT}>POINT</text>
        <rect x={184} y={68} width={340} height={30} rx="7" fill="rgba(0,212,255,0.14)" stroke={C.cyan} strokeWidth="1.2" />
        <text x={354} y={88} textAnchor="middle" fill={C.cyan} fontSize="9.6" fontWeight="800" fontFamily={FONT}>OLTP - operational</text>
        <rect x={532} y={68} width={340} height={30} rx="7" fill="rgba(196,255,0,0.14)" stroke={C.lime} strokeWidth="1.2" />
        <text x={702} y={88} textAnchor="middle" fill={C.lime} fontSize="9.6" fontWeight="800" fontFamily={FONT}>OLAP - analytical</text>
      </g>
      {rows.map(([label, a, b], i) => (
        <g key={label} className="diagram-pop" style={{ animationDelay: `${60 + i * 30}ms` }}>
          <rect x={24} y={102 + i * 34} width={848} height={30} rx="6" fill={i % 2 ? 'rgba(154,176,224,0.04)' : 'transparent'} stroke={C.faint} strokeWidth="0.7" strokeOpacity="0.35" />
          <text x={100} y={121 + i * 34} textAnchor="middle" fill={C.white} fontSize="8.4" fontWeight="700" fontFamily={FONT}>{label}</text>
          <text x={354} y={121 + i * 34} textAnchor="middle" fill={C.cyan} fontSize="8.4" fontFamily={FONT}>{a}</text>
          <text x={702} y={121 + i * 34} textAnchor="middle" fill={C.lime} fontSize="8.4" fontFamily={FONT}>{b}</text>
        </g>
      ))}
      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x={24} y={478} width={848} height={34} rx="9" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={448} y={493} textAnchor="middle" fill={C.purple} fontSize="8.6" fontWeight="700" fontFamily={FONT}>
          link: ETL (nightly batch) ya CDC (streaming) - OLTP se OLAP tak data, kabhi ulata nahi
        </text>
        <text x={448} y={506} textAnchor="middle" fill={C.faint} fontSize="7.8" fontFamily={FONT}>
          exception: HTAP systems dono ek engine par chalate hain (row store + column store, memory mein)
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.12 - Applications of OLAP
   ------------------------------------------------------------------ */
export function OlAppsDiagram() {
  return (
    <Frame
      id="ol-apps"
      title="OLAP ke applications - business analysis mein"
      sub="har domain mein: measures + dimensions se ek decision"
      label="A three by three grid of OLAP application cards for retail sales, finance, supply chain, HR, banking, telecom, healthcare, education and manufacturing, each listing the key measures the dimensions used and the decision it supports, with a bottom band on benefits and limitations"
    >
      {[
        ['RETAIL / SALES', ['m: sales, margin, footfall', 'd: store, product, week', 'decision: which SKU to stock'], C.blue],
        ['FINANCE', ['m: revenue, cost, variance', 'd: cost centre, ledger, period', 'decision: budget vs actual'], C.green],
        ['SUPPLY CHAIN', ['m: fill rate, stock, lead time', 'd: warehouse, supplier, item', 'decision: reorder + safety stock'], C.orange],
        ['HR / WORKFORCE', ['m: headcount, attrition, cost', 'd: dept, grade, location, month', 'decision: hiring plan'], C.purple],
        ['BANKING', ['m: balance, NPA %, txn value', 'd: branch, product, customer seg', 'decision: risk + cross-sell'], C.teal],
        ['TELECOM', ['m: ARPU, churn, data usage', 'd: circle, plan, tower, month', 'decision: retention offer'], C.cyan],
        ['HEALTHCARE', ['m: bed occupancy, cost/case', 'd: hospital, speciality, payer', 'decision: capacity planning'], C.pink],
        ['EDUCATION', ['m: marks, attendance, dropout', 'd: course, batch, teacher, term', 'decision: remedial action'], C.yellow],
        ['MANUFACTURING', ['m: OEE, rejection, downtime', 'd: plant, line, shift, machine', 'decision: maintenance plan'], C.red],
      ].map(([t, lines, col], i) => {
        const x = 24 + (i % 3) * 296;
        const y = 70 + Math.floor(i / 3) * 128;
        return (
          <g key={t} className="diagram-pop" style={{ animationDelay: `${60 + i * 45}ms` }}>
            <rect x={x} y={y} width={280} height={116} rx="10" fill={col} fillOpacity="0.05" stroke={col} strokeWidth="1.4" strokeOpacity="0.75" />
            <rect x={x} y={y} width={280} height="24" rx="10" fill={col} fillOpacity="0.14" />
            <text x={x + 140} y={y + 16} textAnchor="middle" fill={col} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            {lines.map((l, j) => (
              <text key={l} x={x + 14} y={y + 44 + j * 17} fill={C.dim} fontSize="8" fontFamily={FONT}>{l}</text>
            ))}
            <text x={x + 14} y={y + 104} fill={C.faint} fontSize="7.4" fontFamily={FONT}>pattern: trend, exception, what-if</text>
          </g>
        );
      })}
      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x={24} y={460} width={872} height={48} rx="10" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={460} y={478} textAnchor="middle" fill={C.lime} fontSize="8.8" fontWeight="700" fontFamily={FONT}>
          benefits: fast multi-dimensional analysis, self-service, trend + exception detection, single version of truth, what-if planning
        </text>
        <text x={460} y={496} textAnchor="middle" fill={C.dim} fontSize="8" fontFamily={FONT}>
          limitations: cube build cost, stale data till refresh, dimension change pain, needs clean ETL and governance
        </text>
      </g>
    </Frame>
  );
}
