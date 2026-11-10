// One Shot revision notes — Business Intelligence.
// Ek unit = ek page. Har section ek ya do topics ko cover karta hai, bullets mein,
// taaki exam se ek din pehle poora unit 15-20 minute mein revise ho jaaye.

export const biOneShot = {
  subjectId: 'business-intelligence',
  code: 'BI',
  accent: '#0047ff',
  blurb: 'BI ka poora syllabus — 5 units, notes form mein, diagrams ke saath',
  units: [
    {
      id: 'unit-1',
      number: '1',
      name: 'Introduction to Business Intelligence',
      tagline: 'BI kya hai, kaise chalta hai, aur business mein kahan use hota hai',
      overview: 'BI kya hai aur kyun zaroori hai — evolution, data-driven decision making ke 4 types, architecture aur real applications. Ye unit poore subject ka frame bana deta hai.',
      flow: [
        { title: 'BI kya hai', hint: 'data se faisla' },
        { title: 'Evolution', hint: 'MIS se GenAI tak' },
        { title: 'Decision ke 4 types', hint: 'descriptive se prescriptive' },
        { title: 'Architecture', hint: 'source se dashboard' },
        { title: 'Applications', hint: 'retail, bank, health' },
      ],
      minutes: 18,
      sections: [
        {
          title: '1.1 · BI kya hai',
          simple: 'Simple mein: BI company ka dashboard hai — puraane data se aaj ka faisla aasan karna.',
          example: 'Manager dekhta hai Pune store ki sales 15% up hai, to wahi stock wahan bhej deta hai.',
          text: `- **Definition:** BI = processes + technologies + practices jo business data ko **decision-ready information** mein badalte hain.
- **Component yaad rakho (5):** data sources → ETL → data warehouse → analytics/OLAP → presentation (dashboard).
- **BI ek process hai**, sirf tool nahi — Tableau/Power BI sirf last layer hai.
- **Value sirf last step par** dikhti hai: koi decision badla ya nahi.

| Layer | Kaam | Example |
|---|---|---|
| Data sources | raw transactions | ERP, CRM, POS, Excel |
| ETL | clean + conform | Informatica, dbt, NiFi |
| Warehouse | integrated history | Snowflake, BigQuery |
| Analytics | aggregate + compare | SQL, OLAP cube, Python |
| Presentation | decision tak pahunchana | Power BI, Tableau |

**Exam line:** BI ka pipeline — sources, ETL, warehouse, analytics, presentation; jo decision nikla wahi proof hai.`,
          diagram: 'biflow',
          caption: 'BI pipeline — data sources se ETL, warehouse, OLAP/dashboards tak, aur end mein decision.',
        },
        {
          title: '1.2 · Evolution (MIS → DSS → EIS → warehouse → self-service → GenAI)',
          simple: 'Simple mein: pehle fixed reports, phir sawaal-jawab, phir dashboard, aaj AI se aage ka andaza.',
          example: '1990 mein monthly print report, 2010 mein Excel dashboard, aaj model batata hai agle mahine 500 units chahiye.',
          text: `- **MIS (1960s):** printed batch reports — manager ko summary milti thi.
- **DSS (1970s):** what-if model — manager khud assumption badal ke dekh sakta tha.
- **EIS (1980s):** executive screens — 10 KPIs, ek screen.
- **Data warehouse + OLAP (1990s):** Inmon & Kimball — ek company, ek definition.
- **Self-service BI (2000s):** user khud chart banata hai, IT bottleneck khatam.
- **Cloud + embedded (2010s):** metric app ke andar aur mobile par.
- **GenAI BI (2020s):** sawaal plain language mein, jawab chart + summary.

- **Trend ek hi:** periodic → on-demand, IT-authored → user-authored, number → explanation.
- Jo nahi badla: **trusted definition** ki zaroorat — isliye warehouse aaj bhi foundation hai.`,
        },
        {
          title: '1.3 · Data-driven decision making + 4 analytics types',
          simple: 'Simple mein: chaar seedhiyan — kya hua, kyun hua, kya hoga, ab kya karo.',
          example: 'Sales giri (descriptive), monsoon mein footfall kam (diagnostic), agle mahine bhi kam (predictive), online offer chalao (prescriptive).',
          text: `- **Intuition vs evidence:** data-driven decision mein metric, baseline aur expected outcome likha hota hai.
- **4 types (table yaad karo):**

| Type | Sawaal | Example |
|---|---|---|
| Descriptive | kya hua? | last quarter revenue by region |
| Diagnostic | kyun hua? | margin kis product se gira |
| Predictive | kya hoga? | next quarter demand, churn |
| Prescriptive | kya karna chahiye? | stock kitna per warehouse |

- **2 conditions:** (1) trusted + defined data, (2) aisa decision jo evidence se badal sakta hai.
- **Loop:** decision likho → metric + baseline → evidence dekho → decide → result vs expectation compare karo.

**Exam line:** describe, diagnose, predict, prescribe — evidence opinion ko replace nahi karta, usse testable banata hai.`,
          diagram: 'analytics',
          caption: 'Descriptive → diagnostic → predictive → prescriptive analytics, aur data-driven decision ka loop.',
        },
        {
          title: '1.4–1.5 · Architecture ke components + DB/DW/Analytics ka role',
          simple: 'Simple mein: data source se warehouse, warehouse se analytics, analytics se dashboard — chaar layer ka pipeline.',
          example: 'Billing, app aur CRM ka data raat ko ETL se warehouse mein, subah Power BI dashboard manager ke phone par.',
          text: `- **4 layers:** data layer, data management (integration) layer, analytics layer, delivery layer.
- **DB:** transaction record karta hai (current, normalised, fast insert).
- **DW:** integrated history deta hai (subject-oriented, time-variant, non-volatile) — jo DB nahi de sakta.
- **Analytics:** number ko comparison aur prediction mein badalta hai.
- **Semantic layer:** metric ke naam ka ek hi matlab — dashboard aur report same definition padhte hain.

**Ek line:** DB events rakhta hai, DW history rakhta hai, analytics meaning nikalta hai.`,
        },
        {
          title: '1.6–1.8 · Applications, benefits/challenges, GenAI',
          simple: 'Simple mein: fayda fast aur data-based faisla, challenge galat data, mehnga setup aur skill ki kami.',
          example: 'Retail mein demand forecast se stock-out 30% kam hua; bank mein real time fraud detection; GenAI se dashboard par sawaal poochh sakte hain.',
          text: `- **Applications (domain → metric → decision):**
  - Retail: basket size, stock cover → restock ya delist.
  - Banking: NPA, cost per transaction → segment tighten karna.
  - Healthcare: bed occupancy, readmission → staffing per shift.
  - Manufacturing: OEE, defect rate → line scheduling.
  - HR: attrition → retention plan. Telecom: ARPU, churn → repricing.

- **Benefits:** one version of truth, fast decisions, history/trend, audit trail, reach.
- **Challenges (mitigation ke saath):** data quality (rules + steward), cost/slow build (narrow first release), low adoption (design together + usage tracking), unclear ownership (CoE), security (RLS + masking).
- **GenAI/LLM:** natural-language query, auto insight, narrative report.
  - Risk: hallucinated number → guardrail: sirf certified metric/field.
  - Risk: prompt injection / PII leak → guardrail: permission + masking.
  - Risk: over-trust → guardrail: "grounded in these rows" + verify before publish.`,
        },
      ],
      lastMinute: [
        'BI = data → information → decision. Components 5, layers 4.',
        'DW characteristics SITN: subject-oriented, integrated, time-variant, non-volatile.',
        '4 analytics types + har type ka ek example — table form mein likho.',
        'GenAI ke 3 risks aur unke controls — 2-mark question banta hai.',
      ],
    },
    {
      id: 'unit-2',
      number: '2',
      name: 'Data Warehousing and Data Preparation',
      tagline: 'OLTP vs DW se ETL, cleaning, metadata aur data quality tak',
      overview: 'Data kahan se aata hai: OLTP vs warehouse, uske 4 characteristics, 3-tier architecture, ETL, cleaning, metadata aur data quality.',
      flow: [
        { title: 'OLTP vs DW', hint: 'counter vs godown' },
        { title: '4 characteristics', hint: 'subject, integrated, time, non-volatile' },
        { title: '3-tier architecture', hint: 'data, warehouse, tools' },
        { title: 'ETL', hint: 'extract, transform, load' },
        { title: 'Metadata aur quality', hint: 'data ke bare mein data' },
      ],
      minutes: 20,
      sections: [
        {
          title: '2.1 · Operational DB vs Data warehouse (7 points)',
          simple: 'Simple mein: OLTP dukaan ka counter hai (ek-ek bill), warehouse godown ka hisaab book (poore saal ka).',
          example: 'Billing system order turant save karta hai, warehouse 3 saal ka data trend ke liye rakhta hai — design alag hota hai.',
          text: `| Point | OLTP / operational | Data warehouse |
|---|---|---|
| Purpose | daily transaction | analysis + decision |
| Data | current | historical |
| Design | normalised (3NF) | dimensional (star) |
| Operation | insert/update/delete | bulk load + read |
| Users | clerk, app | analyst, manager |
| Size per query | few rows | millions of rows |
| Metric | throughput, response | query speed, accuracy |

- **DW ko alag kyun?** OLTP par heavy analytics chalane se transaction slow ho jaate hain aur history hi nahi hoti.`,
          diagram: 'bw-oltp-olap',
          caption: 'OLTP aur data warehouse ka comparison — purpose, design, operation aur users.',
        },
        {
          title: '2.2 · DW ke 4 characteristics (SITN)',
          simple: 'Simple mein: subject-oriented, integrated, time-variant, non-volatile — chaar baatein yaad rakho.',
          example: 'Sales DW sirf sales ka subject hai, teen source se joda gaya hai, har row par date hai, ek baar load hua to badalta nahi.',
          text: `- **Subject-oriented:** ek subject ka data — sales, finance, HR — na ki poora application.
- **Integrated:** har source ka naming/format/code ek jaisa (M/F → Male/Female).
- **Time-variant:** har row mein time — 10 saal ki history.
- **Non-volatile:** load ke baad update nahi; correction = naya batch/version.
- **Practical:** 70% effort integration + quality mein jaata hai, 30% database/reporting mein.

**Exam line:** warehouse operational system ka replacement nahi, uska analytical partner hai.`,
        },
        {
          title: '2.3 · Three-tier architecture',
          simple: 'Simple mein: teen floor — neeche data, beech mein warehouse, upar report aur dashboard.',
          example: 'Source systems tier 1, ETL aur DW tier 2, BI tools tier 3 — har floor ka kaam alag.',
          text: `- **Bottom — data/staging:** sources, extract, staging, ODS.
- **Middle — warehouse:** integrated star schemas + metadata.
- **Top — presentation:** marts, dashboards, reports.
- **Metadata har layer mein:** source mapping, transformation rules, KPI definitions, access rules.
- **Staging:** typed + cleaned + dedup per source, truncate-and-load; **ODS:** current conformed values (MERGE on business key).
- **Idempotency:** same batch dobara chalao to state wahi rahe — truncate-and-load, MERGE, partition delete+insert.
- **Batch control table:** batch_id, step, status, rows read/written, error — recovery isi se hoti hai.`,
          diagram: 'bw-architecture',
          caption: 'Three-tier warehouse — staging, warehouse aur presentation, har layer ke saath metadata.',
        },
        {
          title: '2.4 · ETL (aur ELT ka farq)',
          simple: 'Simple mein: ETL pehle saaf karta hai phir godown mein rakhta hai, ELT pehle rakhta hai phir wahin saaf karta hai.',
          example: 'Raat 1 baje 5 lakh rows extract, duplicate hataaye, warehouse mein load. Cloud mein ELT zyada common hai.',
          text: `- **Extract:** full ya incremental (timestamp/high-water mark, log-based CDC, trigger).
- **Transform:** clean, standardise, dedupe, derive, conform, validate.
- **Load:** full refresh, append, ya MERGE/upsert.
- **Validation ke baad hi load:** source count/amount vs staged count/amount reconcile.
- **ETL vs ELT:**
  - ETL: transform pehle, alag engine, warehouse mein sirf clean data.
  - ELT: raw load karke warehouse ke compute se SQL transform (dbt) — history se re-derive possible.
  - ETL chuno jab sensitive data land hi nahi karni; ELT jab history + re-derivation chahiye.

**Exam line:** ETL ka kaam data move karna nahi, data ko trustworthy banana hai.`,
          diagram: 'bw-etl',
          caption: 'ETL pipeline — sources, extract, staging, transform, load, validation aur audit.',
        },
        {
          title: '2.5–2.6 · Cleaning + integration',
          simple: 'Simple mein: cleaning ek table ke andar ki gandagi saaf karti hai, integration do table ka format match karta hai.',
          example: 'Mumbai aur Bombay ko ek kiya; CRM mein cust_id 101 aur billing mein 101-A tha, mapping bana ke joda.',
          text: `- **Missing values:** MCAR (random → drop/mean), MAR (observed se explain → group mean/model), MNAR (value se hi related → flag + model). Impute karke **flag** zaroor lagao.
- **Noise:** binning, smoothing, clustering.
- **Outliers:** z-score/IQR/box plot — delete mat karo, reason code ke saath review karo.
- **Duplicates:** exact (hash), fuzzy (similarity + blocking key + threshold) + survivorship rule.
- **Integration ke 4 problems:** schema mismatch, naming conflict, different keys, different grain.
- **Solutions:** schema matching, key resolution/entity resolution, **conformed dimensions**, ek canonical model.`,
        },
        {
          title: '2.7–2.9 · Metadata, data quality, AI in preparation',
          simple: 'Simple mein: metadata data ke bare mein data hai — column ka naam, type, owner, kab update hua.',
          example: 'sales_amt: numeric, rupees, owner finance, daily refresh — bina iske analyst ko column ka matlab nahi pata chalta.',
          text: `- **Metadata 3 types:** technical (schema, type, load time), business (definition, KPI formula, owner), operational (batch log, row counts, errors, usage).
- **Metadata ke bina:** warehouse black box — discovery nahi, trust nahi, impact analysis nahi, audit proof nahi.
- **DQ dimensions:** completeness, accuracy, timeliness, uniqueness, consistency, validity — rule + scorecard + steward.
- **DQ scorecard:** weighted score, red <95%, amber 95–99%, owner ke saath re-measure.
- **AI/LLM in preparation:** mapping suggestion, entity resolution, anomaly flagging, code/test generation — har output par **guardrail**: profile check, threshold, review queue, version + log.
- **Rule:** deterministic jahan bina review load hota hai, AI jahan output sasta review hota hai.`,
        },
      ],
      lastMinute: [
        'OLTP vs DW ke 7 points aur SITN characteristics — likhne ko ready rakho.',
        'ETL ke 3 steps + ek validation check. ETL vs ELT ka ek line farq.',
        'MCAR/MAR/MNAR ka farq aur kaunsa method kis par.',
        'Metadata ke 3 types + DQ ke 6 dimensions — dono list form mein.',
      ],
    },
    {
      id: 'unit-3',
      number: '3',
      name: 'Multidimensional Modeling and OLAP',
      tagline: 'Fact-dimension, star/snowflake, cube aur paanch OLAP operations',
      overview: 'Analysis ka engine: cube, fact aur dimension, star vs snowflake, OLAP operations (slice, dice, drill) aur OLTP se farak.',
      flow: [
        { title: 'Cube', hint: 'product x month x store' },
        { title: 'Fact aur dimension', hint: 'numbers aur unki detail' },
        { title: 'Star vs snowflake', hint: 'seedha ya toda hua' },
        { title: 'OLAP operations', hint: 'slice, dice, drill, roll-up' },
        { title: 'OLAP vs OLTP', hint: 'analysis vs transaction' },
      ],
      minutes: 22,
      sections: [
        {
          title: '3.1–3.3 · Cube, fact/dimension, measures',
          simple: 'Simple mein: cube ek 3D table hai — product, month aur store; har cell mein sales.',
          example: 'Pune x Nov x Shoes = 120 units. Sales additive hai, stock semi-additive, margin % non-additive.',
          text: `- **Multidimensional model:** cube — dimensions = address, measures = value.
- **Fact table:** long + narrow — foreign keys + numeric measures, grain par ek row.
- **Dimension table:** short + wide — descriptive text.
- **Fact types:** transaction (har event), periodic snapshot (daily balance), accumulating snapshot (order lifecycle), factless (attendance), degenerate (invoice no fact mein).
- **Additivity:**
  - Additive: sales, qty, cost — \`SUM\` safe.
  - Semi-additive: balance, stock, headcount — time par \`SUM\` nahi, last value.
  - Non-additive: margin %, ratio, distinct count — components jodo, phir divide.

**Trap:** 100 + 120 + 130 ka \`SUM\` = 350 galat; month-end balance = **130** (last value).
**Trap 2:** average of averages — 500 aur 100 orders ke averages ka average 300, par sahi 103.6.`,
          diagram: 'ol-measures',
          caption: 'Measures aur dimensions — additive, semi-additive aur non-additive ke rules.',
        },
        {
          title: '3.4–3.6 · Star vs snowflake',
          simple: 'Simple mein: star mein dimension fact ke chaaro taraf seedhe lagte hain, snowflake mein dimension ko aur tod dete hain.',
          example: 'Star: sales se seedha product, date, store. Snowflake: product se category, category se department.',
          text: `- **Star:** ek fact + denormalised flat dimensions — kam joins, fast, self-service friendly.
- **Snowflake:** dimensions normalised (product → category → department; store → city → region) — storage bachta, hierarchy maintain hoti, joins badhte.
- **Galaxy:** multiple facts + conformed dimensions.

| Point | Star | Snowflake |
|---|---|---|
| Joins | kam | zyada |
| Storage | redundant text | compact |
| Speed | fast | slower (bina aggregate) |
| User ke liye | simple | path yaad rakhna padta |
| Maintenance | mass update | ek row update |

**Rule:** reporting-heavy warehouse → **star**; jo hierarchy kisi aur system ki hai → sirf usko snowflake karo aur semantic layer mein flat dikhao.`,
          diagram: 'ol-star',
          caption: 'Star schema — centre mein fact, chaaron taraf flat dimensions.',
        },
        {
          title: '3.7–3.9 · OLAP architecture, types, cube',
          simple: 'Simple mein: OLAP data ko har taraf se ghuma ke dekhne deta hai — slice, dice, drill.',
          example: 'MOLAP cube memory mein rehta hai isliye fast, ROLAP warehouse tables par chalta hai bade data ke liye, HOLAP dono ka mix.',
          text: `- **OLAP server:** metadata catalogue → query parser/rewriter (aggregate navigation) → aggregate store → execution engine → cache → security filter.
- **Types:**
  - MOLAP: cube/proprietary array — fastest, build cost, detail kam.
  - ROLAP: star schema + SQL — detail poora, ad-hoc slow.
  - HOLAP: summary cube + detail relational — best of both, complex.
  - (DOLAP desktop, WOLAP web — ek line kaafi.)
- **Cube cells:** \`12 × 500 × 40 = 240,000\` potential; sirf 38,000 populated → density 15.8%, sparsity 84.2%.
- **Sparse cube handling:** sparse storage/compression, sirf dense slices par aggregate, time partition, detail ROLAP se.`,
          diagram: 'ol-olap-types',
          caption: 'ROLAP, MOLAP aur HOLAP — storage kahan, speed kitni, detail kitna.',
        },
        {
          title: '3.10–3.11 · 5 OLAP operations + OLAP vs OLTP',
          simple: 'Simple mein: slice ek pane nikaalna, dice dabba kaatna, drill-down detail mein jaana.',
          example: 'Region Pune slice, month dice, drill-down se city level, roll-up se India total.',
          text: `- **Roll-up:** hierarchy par upar (day → month → quarter).
- **Drill-down:** hierarchy par neeche.
- **Slice:** ek dimension ki ek value fix.
- **Dice:** do ya zyada ranges se sub-cube.
- **Pivot:** rows/columns swap — sirf presentation, koi aggregation nahi.
- **Drill-through:** cube se detail rows tak. **Drill-across:** do facts, same conformed dimensions.
- **OLAP vs OLTP:** OLAP = historical, read-heavy, dimensional, few complex queries, denormalised; OLTP = current, write-heavy, normalised, many simple queries.
- **Drill-across toot ta hai** jab dimensions conformed na hon — join galat ya khaali.

**Exam line:** roll-up/drill-down hierarchy par, slice/dice selection par, pivot presentation par.`,
          diagram: 'ol-operations',
          caption: 'Paanch OLAP operations cube par — roll-up, drill-down, slice, dice, pivot.',
        },
        {
          title: '3.12 · OLAP applications',
          simple: 'Simple mein: jahan ek hi data ko kai tarah se dekhna ho, wahan OLAP use hota hai.',
          example: 'Retail mein category x region x quarter ka cube, bank mein product x branch x month ka cube.',
          text: `- **Finance:** budget vs actual variance cube — dimension: time, cost centre, account, scenario.
- **Sales:** product × store × time — delist/support decisions.
- **Inventory:** ageing buckets — discount ya reorder band.
- **Marketing:** campaign × channel × segment — budget shift.
- **Healthcare/HR:** occupancy, attrition — staffing decisions.
- **Limit:** OLAP batata hai "kya hua" known dimensions par; unknown pattern mining ka kaam hai.`,
        },
      ],
      lastMinute: [
        'Fact vs dimension table — 5 farq + grain + 3 fact types.',
        'Star vs snowflake 6 points + recommendation ka reason.',
        'Paanch OLAP operations ke naam + ek-ek line, aur drill-through vs drill-across.',
        'Additivity: sales additive, balance semi, margin % non-additive — numeric example ke saath.',
      ],
    },
    {
      id: 'unit-4',
      number: '4',
      name: 'Business Analytics and Temporal Data',
      tagline: 'Metric vs KPI, scorecard, valid/transaction time aur trend',
      overview: 'Numbers ko decision mein badalna: metric vs KPI, performance reporting, temporal data (valid vs transaction time) aur trend analysis.',
      flow: [
        { title: 'Metric vs KPI', hint: 'number vs target wala number' },
        { title: 'KPI tree', hint: 'revenue = orders x AOV' },
        { title: 'Reporting', hint: 'naapo, compare karo, report karo' },
        { title: 'Temporal data', hint: 'valid time vs transaction time' },
        { title: 'Trend analysis', hint: 'YoY, MoM, trend line' },
      ],
      minutes: 18,
      sections: [
        {
          title: '4.1–4.2 · Metric vs KPI + KPI tree',
          simple: 'Simple mein: metric koi bhi number hai, KPI wo number hai jiska target aur owner hota hai.',
          example: 'Website visits metric hai, conversion 3% target KPI hai. KPI tree: revenue = orders x average order value.',
          text: `- **Metric:** koi bhi measurable number. **KPI:** wo metric jisse decision depend karta hai (owner + target + threshold).
- **KPI ke 5 tests:** linked to objective, measurable, owned, influenceable, perverse incentive free.
- **Leading vs lagging:** pipeline (leading) vs revenue (lagging); stock cover vs stock-out.
- **KPI tree:** strategic objective → company KPI → department KPI → team action metric.
- **Target setting:** baseline + improvement, benchmark, ya negotiated commitment.
- **KPI card:** value, change, target, status, trend, owner, refresh — saat cheezein.

**Exam line:** har KPI metric hai, par har metric KPI nahi — KPI decision trigger karta hai.
| Metric | KPI |
|---|---|
| koi bhi measurable value | business goal se juda metric |
| context ke bina | target + owner ke saath |
| report bhar dete hain | 5–7 per dashboard |
`,
          diagram: 'td-kpi-decision',
          caption: 'KPI cascade aur decision loop — measure, compare, diagnose, act, re-measure.',
        },
        {
          title: '4.3 · Performance measurement + reporting',
          simple: 'Simple mein: naapo, target se compare karo, report banao, phir action lo.',
          example: 'Monthly review mein sales target ka 92% aaya, report mein reason stock-out likha, agla step stock planning.',
          text: `- **Scorecard:** KPI + target + status (RAG) — balanced scorecard: financial, customer, process, learning.
- **Variance report:** actual vs budget/plan — absolute + % + favourable/unfavourable sign rule.
- **Exception report:** sirf threshold todne wale rows — alert fatigue se bacho (severity, owner, cap).
- **Threshold types:** fixed, % variance, statistical (control limits).
- **Report anatomy:** "so what" upar, number neeche; period, filter, refresh likha ho.
- **Cadence:** daily ops (3–6 KPI, exception), weekly management (trend + drill), monthly board (YTD + narrative).`,
        },
        {
          title: '4.4–4.6 · Temporal data: valid time vs transaction time',
          simple: 'Simple mein: valid time batata hai kab sach tha, transaction time batata hai kab system mein likha gaya.',
          example: 'Salary 1 April se badhi (valid), par entry 15 April ko hui (transaction) — dono alag rakhe jaate hain.',
          text: `- **Valid time:** business mein value kab sach thi (price ₹100 from 1 Jan to 31 Mar).
- **Transaction time:** system ko kab pata chala (record 3 Apr ko aaya).
- **Event time:** ghatna kab hui (sale 28 Mar).
- **Bitemporal:** dono timelines — "March mein price kya tha?" aur "March mein humein kya pata tha?" dono answer hote hain.
- **Late-arriving facts:** event date + load_ts dono store karo; watermark ke saath overlap window rakho.
- **Timestamps:** created_at, updated_at, effective_from/effective_to, load_ts, batch_id.
- **SCD Type-2:** naya row + valid_from/valid_to + is_current — history preserve.
- **Reproducibility:** published report ko wapas banana ho to transaction-time filter ke bina galat answer aata hai (5 Jan ki correction 3 Jan ke report ko badal deti hai).`,
          diagram: 'td-temporal',
          caption: 'Ek fact, teen tarah ka time — event time, valid time aur transaction time.',
        },
        {
          title: '4.7–4.8 · Time-based analysis + trend',
          simple: 'Simple mein: time ke saath compare karo — pichhle saal se, pichhle mahine se, ya trend line se.',
          example: 'YoY sales 12% up par MoM 3% down; trend line se pata chala December ka spike festival ki wajah se tha.',
          text: `- **MTD / YTD / QTD:** period start se aaj tak; partial period ko partial se compare karo.
- **YoY:** seasonality neutralise karta hai. **MoM:** short-term noise. **Moving average:** noise smoothing.
- **CAGR:** \`(end/start)^(1/n) − 1\`.
- **Cohort/retention:** join month ke group ka % jo n mahine baad bhi active.
- **Working days normalise karo** (22 vs 26 din) — warna comparison galat.
- **Trend chart rules:** zero-based axis (bars), comparison series dikhao, cause annotate karo, index aur absolute ek axis par nahi.
- **Forecast ke saath:** confidence range + accuracy metric (MAPE/MAE/RMSE) hold-out par; purana number badle to restatement note.`,
          diagram: 'td-trend',
          caption: 'Trend line + moving average + forecast, aur neeche historical tracking stack.',
        },
      ],
      lastMinute: [
        'Metric vs KPI ke 5 differences + ek example each.',
        'Scorecard vs variance vs exception report — teen ka farq aur decision.',
        'Valid time vs transaction time — price change wala example likho.',
        'YoY kyun MoM se better hai — ek line + seasonality ka example.',
      ],
    },
    {
      id: 'unit-5',
      number: '5',
      name: 'Data Visualization and BI Tools',
      tagline: 'Chart kaise chunein, dashboard kaise banayein, tools aur AI reporting',
      overview: 'Aakhir mein dikhana: visualization ke principles, chart ka chunav, dashboard design, tools, aur AI-assisted reporting ka naya trend.',
      flow: [
        { title: 'Visualization kyun', hint: '5 second mein samajh' },
        { title: 'Principles', hint: 'clear, simple, honest' },
        { title: 'Chart choice', hint: 'sawaal se chart' },
        { title: 'Dashboard', hint: 'ek page, ek kahani' },
        { title: 'AI reporting', hint: 'sawaal poocho, chart milta hai' },
      ],
      minutes: 16,
      sections: [
        {
          title: '5.1–5.2 · Visualization kyun + 5 principles',
          simple: 'Simple mein: aankh numbers se fast samajhti hai, isliye table ki jagah chart.',
          example: '5 saal ki sales table 30 second leti hai, line chart 2 second. Principle: clear, simple aur honest axis.',
          text: `- **Kyun:** volume (hazaaron rows ek nazar), speed (pattern turant), exception (outlier jump karta hai), comparison (target/PY), memory (visual yaad rehta hai).
- **Encoding ranking:** position > length/angle/slope > area/volume > colour > shape.
- **5 principles:** data-ink ratio (clutter hatao), pre-attentive attributes (colour/position), five-second rule (message 5 second mein), consistent scales, accessibility (contrast 4.5:1, colour + label).
- **Common violation:** truncated y-axis, rainbow palette, 3D pie, dual axis se fake correlation.`,
          diagram: 'vz-principles',
          caption: 'Visualization principles — data-ink, pre-attentive attributes, five-second rule aur consistency.',
        },
        {
          title: '5.3–5.4 · Chart choice + dashboard design',
          simple: 'Simple mein: pehle sawaal socho kya compare karna hai, phir chart chuno.',
          example: 'Top 5 product compare ke liye bar, monthly trend ke liye line; ek page par 5 KPI aur ek trend line clean lagta hai.',
          text: `- **Comparison** → sorted bar. **Trend** → line. **Composition** → stacked bar/treemap (pie sirf 2–3 slices).
- **Distribution** → histogram/box. **Relationship** → scatter. **Geography** → map.
- **Dense forms:** small multiples (shared scale), sparkline (KPI ke saath), heat map (matrix).
- **Dashboard layout:** header (filters + refresh) → KPI band → trend band → detail band; most important KPI top-left.
- **Rules:** 5–9 KPI, comparison har tile par, colour sirf status ke liye (red/amber/green), ek screen ek sawaal.
- **Anti-patterns:** 9 pies, dual axes, decorative gauge, data puke, colour without meaning.
| Data ka type | Best chart | Avoid |
|---|---|---|
| Category compare | bar | 8-slice pie |
| Trend over time | line | 3D chart |
| Part of whole | pie/donut (kam slices) | stacked 3D |
| Relationship | scatter | unordered line |
`,
          diagram: 'vz-dashboard',
          caption: 'Dashboard layout — header, KPI band, trend band, detail band aur alerts.',
        },
        {
          title: '5.5–5.6 · Interactive reporting + tools',
          simple: 'Simple mein: interactive ka matlab user khud filter aur drill kare, developer ko dobara nahi kehna pade.',
          example: 'Manager Power BI par region filter se khud Pune dekh leta hai, naya report banwane ki zaroorat nahi.',
          text: `- **Interactivity:** filters/slicers, drill-down, drill-through, brushing & linking, what-if parameters.
- **Governance:** filter overload aur hidden state se bacho — conformed dimensions + visible filter chips.
- **Power BI:** Azure/Microsoft stack, DAX, cheap per user, Power Query, strong Excel integration.
- **Tableau:** visual exploration strong, VizQL, calculated fields, larger licence cost.
- **Evaluation criteria:** TCO 3-year, time to value, governance/RLS, skills, lock-in, export/exit plan.`,
        },
        {
          title: '5.7–5.8 · Build + release, aur decision mein role',
          simple: 'Simple mein: dashboard ko product ki tarah banao — requirement, design, test, release, feedback.',
          example: 'Pehle 10 users ke saath pilot, feedback se 2 charts hataaye, phir poori team ko release kiya.',
          text: `- **Build steps:** requirement brief (audience + decision) → connect data → model → visuals → test → publish + refresh schedule.
- **Release check:** totals source se reconcile, grain test, edge cases (no data/zero/negative), RLS test, performance, mobile view, data timestamp.
- **Visual decision kaise tez karta hai:** pre-attentive pickup, pattern parallel, exception jump, shared reference.
- **Kab galat decision karata hai:** truncated axis, correlation ko causation, cherry-picked range, misleading colour.
- **Safeguard:** zero baseline, full period, source + refresh visible, annotation.`,
        },
        {
          title: '5.9 · AI-assisted visualization + NL reporting',
          simple: 'Simple mein: AI se seedha sawaal poocho, chart khud ban jaata hai.',
          example: 'Power BI Q&A mein last quarter top 5 stores likha, bar chart turant ready ho gaya.',
          text: `- **Pipeline:** question → intent (metric, dimension, filter) → semantic layer resolve → query generate → validate → execute (user ke permissions) → chart + narrative.
- **Semantic layer hi guardrail hai:** jo measure model mein nahi, uska answer nahi.
- **Risks:** hallucinated number, ambiguous question ("best region"), over-trust, metric sprawl.
- **Controls:** certified metric/field only, numeric grounding check, "using fiscal Q2" jaisi assumption line, human review publish se pehle.`,
        },
      ],
      lastMinute: [
        'Encoding ranking + 5 principles — dono list form mein.',
        'Chart selection table (question → chart) — 6 rows yaad rakho.',
        'Dashboard layout ke 4 bands + KPI limit 5–9.',
        'Power BI vs Tableau ke 5 points + tool evaluation ke criteria.',
      ],
    },
  ],
};
