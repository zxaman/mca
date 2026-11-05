// ============================================================
// Important 6-Mark Exam Questions for Unit 1 (BI)
// Curated most important questions across all 8 topics
// Each with complete answer + diagram reference
// ============================================================

import { dataScienceImportantQuestions } from './dataScienceQuestions.js';
import { webTechnologyImportantQuestions } from './webTechnologyQuestions.js';

const baseImportantQuestions = [
  {
    id: 'q1',
    topicNumber: '1.1',
    topicTitle: 'Introduction to Business Intelligence',
    question: 'Define Business Intelligence (BI). Explain the components of BI with a suitable diagram.',
    answer: `**Definition:**
Business Intelligence (BI) is a technology-driven process for analyzing business data and presenting actionable information to help decision makers make informed business decisions.

**Components of BI:**
1. **Data Sources** — ERP, CRM, databases, Excel, external sources
2. **ETL (Extract, Transform, Load)** — data ko extract karna, transform (clean, format) karna, aur warehouse mein load karna
3. **Data Warehouse** — central store for historical, integrated data (Subject-oriented, Time-variant, Non-volatile)
4. **OLAP Server** — multi-dimensional analysis through data cubes (Drill-down, Slice, Dice)
5. **BI Applications** — Dashboards, reports, scorecards (Tableau, Power BI, QlikSense)
6. **Users** — Analysts, managers, executives who consume the insights

**Data Flow:** Data Sources → ETL → Data Warehouse → OLAP → BI Applications → Users

**Diagram:** Refer to the BI Architecture Flow diagram showing data flowing from sources through ETL into the warehouse, then OLAP analysis, and finally dashboards for decision making.`,
    diagram: 'biflow',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q2',
    topicNumber: '1.2',
    topicTitle: 'Evolution of BI & Decision Support Systems',
    question: 'Explain the evolution of Business Intelligence from MIS to modern BI with a timeline. Also describe the components of a Decision Support System (DSS).',
    answer: `**Evolution of BI:**
1. **1950s–60s — MIS** (Management Information Systems): Structured, routine reports. Operational decisions.
2. **1970s — DSS** (Decision Support Systems): Semi-structured problems. Data + models. Gorry & Scott Morton (1971).
3. **1980s — EIS** (Executive Information Systems): For top executives. External + internal data.
4. **1990s — Data Warehouse & OLAP**: Bill Inmon (father of data warehouse). Codd (OLAP, 1993). Gartner ne 1996 mein "BI" term popular kiya.
5. **2000s — Self-Service BI**: Tableau (2003), Power BI, Qlik. Non-technical users khud reports banane lage.
6. **2010s+ — Modern BI**: Cloud BI, embedded analytics, real-time dashboards, AI/ML-powered BI.

**Components of DSS:**
1. **Database Management System (DBMS)** — data ko store, manage aur retrieve karta hai
2. **Model Management System** — analysis models (forecasting, optimization, simulation)
3. **User Interface / Dialogue Management** — user interaction, query, reports

**Diagram:** Refer to the Evolution Timeline diagram (MIS → DSS → EIS → DW/OLAP → Self-Service → Modern BI) and the DSS Components diagram.`,
    diagram: 'timeline',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q3',
    topicNumber: '1.3',
    topicTitle: 'Data-driven Decision Making',
    question: 'What is data-driven decision making? Explain the DIKW pyramid and the four types of analytics with examples.',
    answer: `**Definition:**
Data-driven decision making is a process in which organizations base their decisions on data, facts and metrics rather than solely on intuition or experience.

**DIKW Pyramid:**
1. **Data** — raw facts and figures (e.g., "sales = 1000")
2. **Information** — data + context (e.g., "sales increased 10%")
3. **Knowledge** — patterns and understanding (e.g., "sales drop in July — seasonal trend")
4. **Wisdom** — using knowledge for decisions (e.g., "keep lower stock in July")

**Four Types of Analytics:**
1. **Descriptive — "What happened?"** — Past data summary. Example: last month sales report.
2. **Diagnostic — "Why did it happen?"** — Root cause analysis. Example: sales drop kyunki competitor ne discount diya.
3. **Predictive — "What will happen?"** — Future estimate with ML. Example: agle month sales ka estimate.
4. **Prescriptive — "What should we do?"** — Best action recommendations. Example: stock kitna rakho, kaunsa campaign chalo.

**Diagram:** Refer to the DIKW Pyramid diagram and the Analytics Stages diagram (Descriptive → Diagnostic → Predictive → Prescriptive).`,
    diagram: 'dikw',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q4',
    topicNumber: '1.4',
    topicTitle: 'Components of BI Architecture',
    question: 'Describe the components of Business Intelligence architecture. Explain the ETL process in detail.',
    answer: `**BI Architecture Components:**
1. **Data Sources** — ERP, CRM, operational databases, Excel, external sources
2. **ETL (Extract, Transform, Load)** — data preparation ka heart
3. **Data Warehouse** — central repository. Features: Subject-oriented, Integrated, Time-variant, Non-volatile
4. **OLAP Server** — data cubes, drill-down, slice, dice operations
5. **BI Applications** — dashboards, reports, scorecards
6. **Users** — analysts, managers, executives

**ETL Process in Detail:**
1. **Extract** — data ko source systems se nikalna. Multiple sources se collect karna.
2. **Transform** — data ko clean karna, correct format mein badalna, duplicate hatana, business rules apply karna, aggregations karna.
3. **Load** — transformed data ko data warehouse mein daalna. Historical data ke saath integrate karna.

**Importance:** ETL data quality ensure karta hai. Kharab ETL se kharab data warehouse banta hai — "garbage in, garbage out".

**Diagram:** Refer to the Full BI Architecture diagram (6 layers) and the ETL Process diagram (Extract → Transform → Load).`,
    diagram: 'etl',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q5',
    topicNumber: '1.5',
    topicTitle: 'Role of Databases, Data Warehouses & Analytics in BI',
    question: 'Differentiate between databases (OLTP) and data warehouses (OLAP). Explain how analytics converts data into business decisions.',
    answer: `**Database (OLTP — Online Transaction Processing):**
- Purpose: Daily transactions (sales, orders, inventory)
- Data: Current, operational
- Structure: Row-based, normalized
- Operations: Fast inserts & updates
- Users: Operational staff
- Example: ATM transactions

**Data Warehouse (OLAP — Online Analytical Processing):**
- Purpose: Historical data analysis
- Data: Integrated, historical, time-variant
- Structure: Multi-dimensional cubes, denormalized
- Operations: Complex queries, drill-down, slice, dice
- Users: Analysts, managers, executives
- Features: Subject-oriented, Integrated, Time-variant, Non-volatile

**How Analytics Converts Data into Decisions:**
1. **Descriptive** — "What happened?" (past summary)
2. **Diagnostic** — "Why did it happen?" (root cause)
3. **Predictive** — "What will happen?" (forecasting)
4. **Prescriptive** — "What should we do?" (recommendations)

**Example:** Descriptive: "Sales 10% kam hui." Diagnostic: "Kyun? Competitor discount." Predictive: "Agle month bhi kam hogi." Prescriptive: "Extra campaign chalo."

**Diagram:** Refer to the OLTP vs OLAP comparison diagram and the Analytics Stages diagram.`,
    diagram: 'db-vs-dw',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q6',
    topicNumber: '1.6',
    topicTitle: 'Applications of BI in Business Domains',
    question: 'Explain the applications of Business Intelligence in finance and healthcare domains with examples.',
    answer: `**BI Applications in Finance:**
1. **Fraud Detection** — real-time transaction monitoring, anomaly detection
2. **Risk Management** — credit risk, market risk analysis
3. **Portfolio Optimization** — investment decisions, asset allocation
4. **Regulatory Compliance** — automatic report generation (Basel, SOX)

**BI Applications in Healthcare:**
1. **Patient Outcome Analysis** — treatment effectiveness, recovery rates, mortality analysis
2. **Resource Planning** — beds, staff, equipment utilization optimization
3. **Clinical Operations** — workflow optimization, waiting time analysis
4. **Population Health Management** — disease patterns, preventive care, health trends

**Example:** A hospital uses BI to analyze patient admission patterns, optimize bed allocation during peak seasons, and predict patient demand for different departments. A bank uses BI for real-time fraud detection across millions of transactions.

**Diagram:** Refer to the BI Applications reference image in this topic showing BI applications across domains.`,
    diagram: null,
    image: '/images/bi-healthcare.png',
    importance: '⭐⭐⭐',
  },
  {
    id: 'q7',
    topicNumber: '1.7',
    topicTitle: 'Benefits & Challenges of BI Systems',
    question: 'Discuss the benefits and challenges of implementing a Business Intelligence system in an organization.',
    answer: `**Benefits of BI:**
1. **Better Decision Making** — Data-driven decisions, real-time insights, accuracy
2. **Increased Efficiency** — Automated reporting, faster processes, less manual work
3. **Competitive Advantage** — Market trends early detection, customer understanding
4. **Cost Reduction** — Waste identification, inventory optimization
5. **Revenue Growth** — Better marketing, customer retention
6. **Customer Satisfaction** — Personalized experiences, better service

**Challenges of BI:**
1. **Data Quality** — "Garbage in, garbage out". Incomplete, inconsistent, or outdated data.
2. **Cost & Complexity** — High implementation cost, infrastructure, tools, skilled personnel.
3. **Security & Privacy** — Data breaches, compliance (GDPR), unauthorized access.
4. **Resistance to Change** — Employees resist new tools and processes. Change management chahiye.
5. **Technical Complexity** — Integration with existing systems, maintenance.
6. **Skilled Personnel** — Need for data analysts, data scientists, IT support.

**Conclusion:** BI benefits aur challenges dono hain. Successful implementation ke liye challenges ko address karna (data quality, training, security) important hai. Benefits ko maximize karna aur challenges ko minimize karna part of planning hai.

**Diagram:** Refer to the Benefits vs Challenges diagram showing both sides of BI implementation.`,
    diagram: 'benefits-challenges',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q8',
    topicNumber: '1.8',
    topicTitle: 'Generative AI & LLMs in Business Intelligence',
    question: 'Define Generative AI and Large Language Models (LLMs). Explain how they are transforming Business Intelligence with examples.',
    answer: `**Generative AI (GenAI):**
GenAI ek AI ka type hai jo naye content generate karti hai — text, images, code, audio, video. Ye previous patterns se naya output banati hai.

**Large Language Models (LLMs):**
LLMs GenAI ka subtype hai jo language ko samajh aur generate karti hai. Ye bade datasets par train kiye hoti hain. Examples: GPT-4, Claude, Gemini, LLaMA.

**How LLMs are Transforming BI:**

1. **Conversational Analytics** — "Ask your data" — users normal language mein data se puchte hain. "Show me last quarter sales" ya "Why did sales drop?" — system answer degi. Ye non-technical users ke liye BI accessible banati hai.

2. **Automated Report Generation** — LLMs automatic reports likh sakti hain. Data ka summary automatically prepare karti hain. Ye time bachata hai aur efficiency badhata hai.

3. **Anomaly Detection & Explanation** — GenAI unusual patterns detect aur explain karti hai. "Sales kam hui kyun?" — system batati hai possible reasons.

4. **Predictive Recommendations** — LLMs historical data aur patterns dekh kar recommendations generate karti hain. "Kaunsa product stock karna hai?" — prescriptive analytics ka advanced version.

**Example:** Ek sales manager normal language mein puchta hai: "Pichhle quarter ka sales report dikhao" ya "Kaunsa product sabse jada bik raha hai?" — GenAI-powered BI dashboard instant answer deti hai. Ye conversational analytics hai — BI + LLM ka mishran.

**Impact:** GenAI BI ko accessible, automatic aur conversational banati hai. Ye "democratization of data" kehlaata hai.

**Diagram:** Refer to the GenAI + BI Integration diagram showing data flow: Business Data → BI System → GenAI/LLM → Natural Language Outputs.`,
    diagram: 'genai',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q9',
    topicNumber: '1.1',
    topicTitle: 'Introduction to Business Intelligence',
    question: 'What is ETL? Explain the three stages of ETL with a diagram. Why is ETL important in BI?',
    answer: `**ETL (Extract, Transform, Load):**

1. **Extract** — Data ko source systems (ERP, CRM, databases) se nikalna. Multiple sources se data collect karna. Extraction methods: full extraction, incremental extraction, change data capture.

2. **Transform** — Data ko clean karna, correct format mein badalna, duplicate hatana, business rules apply karna, aggregations karna. Data ko "analysis-ready" banana. Transformation types: cleansing, formatting, aggregation, enrichment, deduplication.

3. **Load** — Transformed data ko data warehouse mein daalna. Historical data ke saath integrate karna. Loading strategies: full refresh, incremental load.

**Why ETL Important in BI:**
- Data quality ensure karta hai
- Data ko analysis-ready banata hai
- Kharab ETL se kharab data warehouse banta hai
- "Garbage in, garbage out" principle — ETL ka quality BI results pe directly impact dalta hai
- Different sources se data ko integrate karta hai

**Diagram:** Refer to the ETL Process diagram (Extract → Transform → Load).`,
    diagram: 'etl',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'q10',
    topicNumber: '1.3',
    topicTitle: 'Data-driven Decision Making',
    question: 'Explain the data-driven decision cycle with a diagram. What are the challenges of data-driven decision making?',
    answer: `**Data-Driven Decision Cycle:**
1. **Identify Problem** — kaunsa decision lena hai? Objective set karo.
2. **Collect Data** — relevant data collect karo (sales, customer, market data)
3. **Clean & Process Data** — remove errors, fill missing values ("garbage in, garbage out")
4. **Analyze** — descriptive/diagnostic/predictive/prescriptive analytics use karo
5. **Interpret** — results ko interpret karo, insights nikalo
6. **Decide** — decision lo, best option chuno
7. **Implement & Monitor** — decision apply karo, results track karo → phir se cycle shuru

**Circular process** — ek baar decision lene se kaam nahi khatam hota. Results monitor kiye jaate hain aur feedback se cycle repeat hoti hai.

**Challenges:**
1. **Data Quality** — kharab data se kharab decisions
2. **Data Security & Privacy** — sensitive data ka security
3. **Cost** — technology aur skilled people ka cost
4. **Over-reliance on Data** — data sabse nahi batata, human judgment bhi important hai
5. **Skills Gap** — data analysis ki skills ki kami
6. **Resistance to Change** — decisions change nahi chahte

**Diagram:** Refer to the Data-Driven Decision Cycle diagram (circular 7-step process).`,
    diagram: 'cycle',
    image: null,
    importance: '⭐⭐',
  },
  // ========================================================
  // Business Intelligence Unit 2 — Data Warehousing and Data Preparation
  // ========================================================
  {
    id: 'q11',
    unit: '2',
    topicNumber: '2.1',
    topicTitle: 'Operational Databases vs Data Warehouses',
    question: `Differentiate between operational databases and data warehouses. Why is a separate warehouse needed?`,
    answer: `Dono ka purpose alag hai: ek business chalata hai, doosra business ko samajhne mein help karta hai.\n\n| Point | Operational database (OLTP) | Data warehouse (OLAP) |\n|---|---|---|\n| Purpose | day-to-day transactions | analysis aur decision support |\n| Workload | many small read-write | few large read-only |\n| Response time | milliseconds | seconds to minutes |\n| Schema | normalized (3NF) | denormalized (star/snowflake) |\n| Data | current, detailed | historical, summarized |\n| Operations | INSERT/UPDATE/DELETE | bulk load + SELECT |\n| Size | GB | TB to PB |\n| Users | clerks, applications | analysts, managers, BI tools |\n| Indexing | B-tree | bitmap, columnar, partition |\n\n**Separate warehouse kyun:**\n1. Performance isolation (heavy query production ko slow na kare).\n2. Historical depth (trend, YoY ke liye saalon ka data).\n3. Integration (ERP, CRM, POS ka data ek model mein).\n4. Analysis-friendly star schema.\n5. Governance (read-only access, masking, RLS).\n6. Non-volatile snapshot se reproducible reports.\n\n**Diagram:** Refer to the Operational database vs data warehouse — OLTP vs OLAP diagram.`,
    diagram: 'bw-oltp-olap',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q12',
    unit: '2',
    topicNumber: '2.1',
    topicTitle: 'Operational Databases vs Data Warehouses',
    question: `Explain OLTP and OLAP workloads with examples and the role of ETL between them.`,
    answer: `**OLTP (transaction processing):**\n- Chhoti, fast, concurrent transactions; ACID; row-level locking.\n- Example: bank transfer, e-commerce order, hospital billing.\n\n**OLAP (analytical processing):**\n- Badi, complex, read-only aggregation queries.\n- Example: "quarter-wise region-wise product margin", campaign ROI, student performance trend.\n\n**ETL ka role:**\n- OLTP sources se extract (full / incremental / CDC).\n- Staging mein clean + standardise + dedupe.\n- Star schema (fact + dimensions) mein load.\n- Result: OLAP-ready, history-rich, consistent data.\n\n**Kyun ek hi system par dono nahi:**\n- Lock contention aur slow transactions.\n- Schema conflict (3NF vs star).\n- Security aur governance mix ho jaate hain.\n\n**Rule of thumb:** OLTP = "abhi kya hua", OLAP = "pattern kya hai".\n\n**Diagram:** Refer to the Operational database vs data warehouse — OLTP vs OLAP diagram.`,
    diagram: 'bw-oltp-olap',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q13',
    unit: '2',
    topicNumber: '2.2',
    topicTitle: 'Characteristics of Data Warehouses',
    question: `Explain the characteristics of a data warehouse (Inmon).`,
    answer: `Inmon ke **chaar characteristics (SITN):**\n\n**1. Subject-oriented**\n- Business subject ke around design: customer, product, sales, finance.\n- Application-oriented nahi — isliye cross-subject analysis possible.\n\n**2. Integrated**\n- Heterogeneous sources ka data consistent banaya jaata hai.\n- Naming, coding (M/Male/1), units, formats, semantics standard.\n- Result: one customer, one truth.\n\n**3. Time-variant**\n- Har record ke saath time dimension; snapshots aur effective dates.\n- 5-10 saal ka history — trend, YoY, seasonality.\n\n**4. Non-volatile**\n- Bulk load, users update/delete nahi karte.\n- Stable snapshot se repeated queries same answer deti hain.\n\n**Additional practical properties:**\n5. Summarized + granular (multi-level aggregation).\n6. Metadata-driven (dictionary, glossary, lineage).\n7. Read-optimised (star joins, bitmap/columnar, partitions).\n8. Secure and auditable (RLS, masking, logs).\n9. Scheduled refresh (ETL windows, CDC, freshness SLA).\n\n**Diagram:** Refer to the Data warehouse characteristics — SITN diagram.`,
    diagram: 'bw-characteristics',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q14',
    unit: '2',
    topicNumber: '2.2',
    topicTitle: 'Characteristics of Data Warehouses',
    question: `Explain "integrated" and "non-volatile" with examples, and why warehouse building is mostly a data effort.`,
    answer: `**Integrated:**\n- Sources: ERP 'cust_no', CRM 'customer_id', POS phone.\n- Fixes: naming, coding ('M'/'Male'/'1' → 'GENDER_M'), units (kg/g, INR/USD), formats ('12-05-2024' → '20240512'), semantics ("revenue" gross ya net).\n- Result: same customer ek 'customer_key' par merge, lifetime value sahi.\n\n**Non-volatile:**\n- Data bulk load se aata hai; user sirf SELECT karta hai.\n- Correction = naya load/snapshot; purana record preserve.\n- Fayda: reproducibility — 2023 ka number baad mein nahi badalta (audit safe).\n- Contrast: OLTP volatile hai, warehouse stable.\n\n**Kyun ye data effort hai:**\n1. 60-80% time integration + cleansing mein jaata hai.\n2. Source profiling, mapping, conflict resolution chahiye.\n3. Data quality rules aur exception handling zaroori.\n4. Historical codes badalte hain → slowly changing dimensions.\n5. Governance (metadata, ownership, access) ke bina trust nahi.\n\n**Diagram:** Refer to the Data warehouse characteristics — SITN diagram.`,
    diagram: 'bw-characteristics',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q15',
    unit: '2',
    topicNumber: '2.3',
    topicTitle: 'Data Warehouse Architecture (Three-Tier)',
    question: `Explain the three-tier architecture of a data warehouse with a neat diagram.`,
    answer: `**1. Bottom tier — data warehouse database server**\n- Warehouse DB (star/snowflake schema).\n- Back-end ETL: extract, clean, transform, load.\n- Staging area + metadata repository + scheduler.\n\n**2. Middle tier — OLAP server**\n- Multidimensional view: slice, dice, drill-down, roll-up, pivot.\n- **ROLAP** (SQL over star schema), **MOLAP** (pre-built cube), **HOLAP** (both).\n\n**3. Top tier — front-end client layer**\n- Query & reporting, dashboards, spreadsheets.\n- Ad-hoc analysis, data mining, alerts, natural-language Q&A.\n\n**Supporting components:** staging area, data marts (dependent/independent), metadata repository, scheduler, security and semantic layer.\n\n**Data flow:** sources → staging → ETL → warehouse → OLAP server → BI tools → users.\n\n**Why three-tier:** independent scaling, better performance, multiple front-ends, centralised security and semantics.\n\n**Diagram:** Refer to the Data warehouse — three-tier architecture diagram.`,
    diagram: 'bw-architecture',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q16',
    unit: '2',
    topicNumber: '2.3',
    topicTitle: 'Data Warehouse Architecture (Three-Tier)',
    question: `Compare ROLAP, MOLAP and HOLAP, and two-tier vs three-tier architecture.`,
    answer: `**ROLAP vs MOLAP vs HOLAP:**\n\n| Point | ROLAP | MOLAP | HOLAP |\n|---|---|---|---|\n| Data | relational star | pre-built cube | both |\n| Aggregate speed | medium | fastest | fast |\n| Storage | low | high | balanced |\n| Detail drill | excellent | limited | good |\n| Freshness | near real-time | cube refresh | mixed |\n| Best for | large detail, ad-hoc | fixed KPI dashboards | hybrid estate |\n\n**Two-tier vs three-tier:**\n\n| Point | Two-tier | Three-tier |\n|---|---|---|\n| Layers | DB + client | DB + OLAP server + client |\n| Aggregation | client/DB | middle tier |\n| Scalability | limited | independent per tier |\n| Concurrency | DB contention | server managed |\n| Security | split | centralised |\n| Suits | small department DW | enterprise BI |\n\n**Choice:** fixed dashboards + speed → MOLAP; large detail + freshness → ROLAP; mixed → HOLAP; enterprise → three-tier.\n\n**Diagram:** Refer to the Data warehouse — three-tier architecture diagram.`,
    diagram: 'bw-architecture',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q17',
    unit: '2',
    topicNumber: '2.4',
    topicTitle: 'ETL Process: Extraction, Transformation and Loading',
    question: `Explain the ETL process in detail with examples of each stage.`,
    answer: `**1. Extraction**\n- Sources: operational DB, files (CSV/XML/JSON), APIs, logs, third-party.\n- Full extract (initial load) vs incremental ('modified_date > watermark') vs **CDC**.\n- Raw data staging area mein — source dobara read nahi.\n\n**2. Transformation**\n- Cleaning: nulls, invalid values, whitespace, encoding.\n- Standardisation: date, unit, currency, codes.\n- Deduplication + entity resolution → golden record.\n- Business rules: margin = revenue - cost, tax, age bucket.\n- Aggregation/pivot, surrogate keys, lookup joins.\n- **SCD** handling (Type 1 overwrite, Type 2 history, Type 3 previous).\n- Reconciliation control totals.\n\n**3. Loading**\n- Full refresh (small dims), append (facts), MERGE/upsert (dims).\n- Bulk load utilities for speed.\n- Validation: row counts, totals, null checks.\n- Error handling: reject table, alert, retry.\n- Audit log: load id, rows in/out/rejected, duration.\n\n**Design principles:** idempotent, restartable, watermark-driven, reconciled, monitored with freshness SLA, documented in metadata.\n\n**Diagram:** Refer to the ETL — extract, transform, load diagram.`,
    diagram: 'bw-etl',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q18',
    unit: '2',
    topicNumber: '2.4',
    topicTitle: 'ETL Process: Extraction, Transformation and Loading',
    question: `Differentiate ETL and ELT. How are quality errors handled inside an ETL pipeline?`,
    answer: `**ETL vs ELT:**\n\n| Point | ETL | ELT |\n|---|---|---|\n| Order | transform then load | load raw, transform in warehouse |\n| Engine | separate ETL server | warehouse SQL engine |\n| Raw data | not stored in warehouse | preserved in raw layer |\n| Reprocessing | re-extract from source | re-transform from raw |\n| Best for | on-prem, strict governance | cloud columnar, big data |\n| Weakness | heavy ETL infrastructure | raw-layer cost and PII governance |\n\n**Quality error handling:**\n1. **Layer checks** — file present, row count, schema; type/range/referential; key uniqueness and totals.\n2. **Reject table** — bad rows with reason code; pipeline continues.\n3. **Thresholds** — X% rejects cross ho to fail + alert.\n4. **Checkpoint/restart** — last good key se resume.\n5. **Idempotent MERGE** — duplicate run se corruption nahi.\n6. **Reprocess/backfill** — fix karke dobara load.\n7. **Audit + reconciliation** — source total vs target total, zero-row alert.\n8. **Root cause** — source system mein validation add karwao.\n\n**Diagram:** Refer to the ETL — extract, transform, load diagram.`,
    diagram: 'bw-etl',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q19',
    unit: '2',
    topicNumber: '2.5',
    topicTitle: 'Data Cleaning Techniques',
    question: `Explain data cleaning techniques used in data warehousing.`,
    answer: `Data cleaning raw data ke defects correct karti hai.\n\n**1. Profiling** — null %, distinct, min/max, pattern, duplicates (measure first).\n**2. Missing values** — delete row/column, mean/median/mode, regression/KNN, business default + flag.\n**3. Duplicates** — exact match + fuzzy (Levenshtein, Jaro-Winkler, Soundex, blocking) → golden record.\n**4. Outliers** — z-score (>3), IQR (1.5x), Mahalanobis, isolation forest; error ho to fix, genuine ho to retain.\n**5. Standardisation** — date, units, currency, codes, casing, whitespace.\n**6. Parsing/validation** — type cast, regex (email, phone, pincode), range, referential integrity.\n**7. Text cleaning** — control characters, encoding, HTML entities, name/address parsing.\n**8. Governance** — rule log, before/after metrics, source root-cause fix.\n\n**Example:** customer master mein 'city' 22 variants → mapping table se 1 standard value; 4% duplicates → fuzzy match + survivor rules; future 'dob' reject rule.\n\n**Diagram:** Refer to the Data cleaning techniques — defect se fix tak diagram.`,
    diagram: 'bw-cleaning',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q20',
    unit: '2',
    topicNumber: '2.5',
    topicTitle: 'Data Cleaning Techniques',
    question: `How are missing values and outliers handled? What precautions are necessary?`,
    answer: `**Missing values:**\n\n| Method | When |\n|---|---|\n| Delete row | very few rows, key field missing |\n| Delete column | >60-70% null |\n| Mean/median | numeric (median if skewed) |\n| Mode | categorical |\n| Regression / KNN | correlated fields available |\n| Business default + flag | process default known |\n\n**Precautions:** missingness pattern dekho (MCAR/MAR/MNAR); imputed value ko **flag** karo; missing ko zero se replace karna often galat.\n\n**Outliers:**\n- Detection: z-score, IQR, Mahalanobis, isolation forest, business rules.\n- Decision: **error** (negative quantity, future date) → fix/reject; **genuine** (festive spike, large B2B order) → retain.\n- Handling: reject table with reason code, capping/winsorising, expert review.\n\n**Precautions:** remove karne se mean/variance badalta hai; documented rule + reason code; domain expert confirmation; before/after stats report.\n\n**Diagram:** Refer to the Data cleaning techniques — defect se fix tak diagram.`,
    diagram: 'bw-cleaning',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q21',
    unit: '2',
    topicNumber: '2.6',
    topicTitle: 'Data Integration from Heterogeneous Sources',
    question: `Explain data integration from heterogeneous sources with its levels and challenges.`,
    answer: `**Definition:** Alag systems (ERP, CRM, POS, logs, APIs) ka data ek consistent, queryable view mein laana.\n\n**Heterogeneity ke chaar level:**\n1. **System** — Oracle, SAP, MongoDB, flat files.\n2. **Syntactic** — encoding, delimiter, date format, JSON/CSV/XML.\n3. **Schematic** — structure, keys, granularity, normalization.\n4. **Semantic** — "revenue" gross ya net, "active customer" ki definition.\n\n**Approaches:** ETL, ELT, EAI/API, data virtualisation, data lake/lakehouse, MDM.\n\n**Steps:** profile sources → canonical model → schema mapping → transformation rules → entity resolution → conflict resolution → surrogate keys → CDC + monitoring.\n\n**Challenges:** semantic mismatch, missing/duplicate keys, different refresh cycles, volume, poor quality, PII governance, schema drift.\n\n**Diagram:** Refer to the Data integration from heterogeneous sources diagram.`,
    diagram: 'bw-integration',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q22',
    unit: '2',
    topicNumber: '2.6',
    topicTitle: 'Data Integration from Heterogeneous Sources',
    question: `How are entity resolution and conflict resolution performed during integration?`,
    answer: `**Entity resolution (same entity pehchanna):**\n1. **Blocking** — candidate pairs (same pincode/phone prefix).\n2. **Exact match** — key, email, phone.\n3. **Fuzzy match** — Levenshtein, Jaro-Winkler, phonetic (Soundex), token-based addresses.\n4. **Score + threshold** — match / no-match / manual review.\n5. **Golden record** — survivor rules: most recent, most complete, source priority.\n\n**Conflict resolution (kaunsa value sahi):**\n1. Source precedence (core banking > CRM for accounts).\n2. Recency (latest update).\n3. Completeness (non-null preferred).\n4. Trust score (historically accurate source).\n5. Business rule (finance official source).\n6. Manual override with audit log.\n\n**Governance:** owner for unresolved conflicts, SLA, decision log, versioned survivorship rules.\n\n**Example:** address CRM se (naya), PAN ERP se (authoritative).\n\n**Diagram:** Refer to the Data integration from heterogeneous sources diagram.`,
    diagram: 'bw-integration',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q23',
    unit: '2',
    topicNumber: '2.7',
    topicTitle: 'Metadata: Types and Importance',
    question: `Define metadata. Explain its types with examples.`,
    answer: `**Definition:** Metadata data ke baare mein data hai — kya hai, kahan se aaya, kaise transform hua, kaun owner, kaise use karein.\n\n**1. Technical (structural)**\n- Tables, columns, types, keys, indexes, partitions, file formats, storage path.\n- Example: 'fact_sales.amount' → DECIMAL(12,2), partitioned by month.\n\n**2. Business (semantic)**\n- Business names, definitions, calculations, hierarchies, report specs, glossary.\n- Example: "Net Revenue" = gross - returns - discounts.\n\n**3. Operational (administrative)**\n- ETL logs, row counts, refresh timestamps, DQ scores, access logs, lineage, versions.\n- Example: 'load_sales_2024_05_12' → 1,84,203 rows, 12 rejected, status SUCCESS.\n\n**4. (Optional) Descriptive / discovery**\n- Tags, keywords, popularity, owner contact, sample queries.\n\n**Where it lives:** metadata repository / data catalogue, business glossary, ETL repository, DB catalog views.\n\n**Diagram:** Refer to the Metadata — data ke baare mein data diagram.`,
    diagram: 'bw-metadata',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q24',
    unit: '2',
    topicNumber: '2.7',
    topicTitle: 'Metadata: Types and Importance',
    question: `Why is metadata important? Explain metadata management and data lineage.`,
    answer: `**Importance:**\n1. Discoverability — analyst ko table/column milta hai.\n2. Understanding — definition ke bina KPI galat interpret hota hai.\n3. Impact analysis — schema change se kaunse reports tootenge.\n4. Lineage/audit — regulator ko data ka raasta dikhana.\n5. Consistency — ek KPI ka ek definition (glossary).\n6. Quality monitoring — freshness, row counts, DQ score.\n7. Security — PII classification, retention, access policy.\n8. Productivity — onboarding fast, tribal knowledge kam.\n\n**Metadata management:**\n- Central repository/catalogue + automated harvesting (DB, ETL, BI tools).\n- Business glossary with owner approval.\n- Lineage graph (table- and column-level).\n- Governance (owner, steward, classification), versioning.\n\n**Data lineage:**\n- Source → staging → transform → fact/dim → semantic → report.\n- Forward vs backward; table vs column level.\n- Kaise: ETL mapping parse, SQL parse, logs, tools (DataHub, Collibra, dbt docs).\n- Fayde: debugging, impact analysis, audit, trust.\n\n**Diagram:** Refer to the Metadata — data ke baare mein data diagram.`,
    diagram: 'bw-metadata',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q25',
    unit: '2',
    topicNumber: '2.8',
    topicTitle: 'Data Quality: Concepts and Challenges',
    question: `Define data quality. Explain its dimensions with examples.`,
    answer: `**Definition:** Data quality data ki wo degree hai jisse data apne intended use ke liye fit hota hai.\n\n| Dimension | Matlab | Failure example |\n|---|---|---|\n| Accuracy | value reality se match | galat phone number |\n| Completeness | required data present | missing pincode |\n| Consistency | systems agree | finance 3.9 Cr vs sales 4.2 Cr |\n| Timeliness | current and on time | T+3 data T+1 report |\n| Validity | format/range rules | future dob, negative qty |\n| Uniqueness | no duplicates | ek customer 3 rows |\n| Integrity | relations valid | order ka customer missing |\n| Interpretability | definition clear | revenue gross ya net |\n\n**Measurement:** profiling + rule-based checks → DQ score + exception report.\n\n**Improvement:** critical data elements, rules at source, cleanse + quarantine, monitor dashboard, owner/steward governance.\n\n**Diagram:** Refer to the Data quality — dimensions, challenges aur lifecycle diagram.`,
    diagram: 'bw-dq',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q26',
    unit: '2',
    topicNumber: '2.8',
    topicTitle: 'Data Quality: Concepts and Challenges',
    question: `Discuss the challenges in maintaining data quality and the data quality lifecycle.`,
    answer: `**Challenges:**\n1. Heterogeneous sources — alag format, code, definition.\n2. Manual entry — typos, shortcuts, nulls.\n3. Missing upstream validation.\n4. Late detection — problem report ke time pata chalti hai.\n5. Warehouse-side cleansing temporary.\n6. Ownership gap — "data kiski" ka answer nahi.\n7. Volume & velocity — bade/streaming data par rules mehnge.\n8. Changing definitions — glossary update nahi hota.\n9. Privacy constraints — PII review limited.\n10. No measurement — DQ score/SLA nahi to problem invisible.\n\n**Lifecycle:**\n1. **Define** — critical data elements + rules.\n2. **Assess** — profile, baseline metrics.\n3. **Cleanse** — fix, quarantine, backfill.\n4. **Monitor** — automated checks, DQ dashboard, alerts.\n5. **Govern** — owner + steward, issue log, root cause, policy.\n\n**Measurement:** completeness %, validity %, uniqueness %, freshness vs SLA, referential pass %, weighted DQ score.\n\n**Diagram:** Refer to the Data quality — dimensions, challenges aur lifecycle diagram.`,
    diagram: 'bw-dq',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q27',
    unit: '2',
    topicNumber: '2.9',
    topicTitle: 'Role of AI and LLMs in Data Preparation',
    question: `Explain the role of AI and LLMs in data preparation, cleaning and automated ETL.`,
    answer: `**AI touchpoints:**\n1. **Profiling** — table/column clustering, key and join suggestion, distribution anomalies.\n2. **Mapping** — source-to-target suggestions + transformation logic from names, samples, docs.\n3. **Cleaning** — fuzzy dedupe, entity resolution, imputation, name/address parsing, anomaly detection.\n4. **Document extraction** — invoice, contract, email, scanned form → structured JSON (OCR + LLM).\n5. **Code generation** — ETL scripts, SQL, tests, documentation.\n6. **Pipeline agents** — failure diagnosis, retry, backfill, data contract checks.\n\n**Benefits:** setup speed, unstructured coverage, better anomaly detection, lower skill barrier.\n\n**Risks:** hallucination, non-determinism, privacy, prompt injection, bias, drift, cost, weak explainability.\n\n**Controls:** human-in-the-loop approval, validation layer, masking/private endpoints, versioned prompts and models, eval dataset, drift alerts, audit log.\n\n**Conclusion:** AI accelerate karta hai; governance decide karti hai ki output par bharosa karein ya nahi.\n\n**Diagram:** Refer to the AI aur LLMs in data preparation diagram.`,
    diagram: 'bw-ai-etl',
    image: null,
    importance: '⭐⭐⭐',
  },
  // ============================================================
  // Business Intelligence Unit 3 - Multidimensional modelling + OLAP
  // ============================================================
  {
    id: 'q28',
    unit: '3',
    topicNumber: '3.1',
    topicTitle: 'Multidimensional Data Model',
    question: `Explain the multidimensional data model used in OLAP systems. Discuss its basic elements with a suitable diagram.`,
    answer: `**Definition:** A multidimensional data model represents data as a **cube** (hypercube) in which each dimension is an axis and each point of intersection - a **cell** - stores one or more numeric measures. Instead of flat rows and columns, the analyst thinks in terms of "sales by product by time by store", which is exactly how business questions are asked.

**Basic elements:**
1. **Dimension** - an axis of analysis (product, time, location, customer, promotion).
2. **Dimension member** - one value on an axis (Aata 5kg, Q3 FY25, Pune).
3. **Hierarchy** - levels inside a dimension along which aggregation moves: category - subcategory - item; year - quarter - month - day; region - state - city - store.
4. **Level** - one step of a hierarchy.
5. **Measure** - the numeric value stored in the cell (sales, quantity, cost, margin).
6. **Cell** - one member per dimension, holding the measures.
7. **Cube** - the collection of all cells; 3 dimensions look like a box, more dimensions are still called a cube.

**Why it is needed:** a relational table forces repeated multi-table joins and GROUP BY for every question; a multidimensional model stores the same facts with dimensions arranged as axes, so slicing, dicing and drill-down become direct navigation instead of query writing.

**Modelling steps:** (1) decide the grain, (2) identify dimensions and their hierarchies, (3) identify additive measures, (4) store as star schema (ROLAP) or as a pre-built array (MOLAP).

**Diagram:** Refer to the multidimensional data model diagram.`,
    diagram: 'ol-multidim',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q29',
    unit: '3',
    topicNumber: '3.1',
    topicTitle: 'Multidimensional Data Model',
    question: `Compare the relational (entity-relationship) model with the multidimensional model for analytical data.`,
    answer: `| Point | Relational model | Multidimensional model |
|---|---|---|
| Unit of storage | row in a table | cell in a cube |
| User's view | tables and joins | dimensions and measures |
| Query language | SQL with GROUP BY | MDX, drag-drop pivot, cube navigation |
| Aggregation | computed at query time | pre-computed aggregates |
| Navigation | ad-hoc joins | roll-up, drill-down, slice, dice, pivot |
| Speed | depends on query and indexes | fast for consistent summary questions |
| Flexibility | high, any new question possible | strongest when dimensions are stable |
| Storage | compact, normalized | aggregates increase storage |
| Best for | OLTP and detailed audit | OLAP, dashboards, trend analysis |

**Explanation:** The relational model is a **general-purpose** model - it can store anything but forces the query writer to construct joins and groupings. The multidimensional model is a **purpose-built** analytical model: dimensions are fixed in advance and aggregates are pre-computed, which is why a dashboard answers in one second what a SQL query may take minutes to compute.

**Trade-off:** fixed dimensions make the cube fast but rigid. If the business suddenly wants "sales by weather", the cube must be rebuilt, while in a relational star schema the new dimension can simply be added.

**Practical reality:** Both are used together - data is stored relationally (star schema) and exposed multidimensionally (OLAP cube) by the OLAP server.

**Diagram:** Refer to the multidimensional data model diagram.`,
    diagram: 'ol-multidim',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'q30',
    unit: '3',
    topicNumber: '3.2',
    topicTitle: 'Fact Tables and Dimension Tables',
    question: `Differentiate between fact tables and dimension tables. Explain the structure of each with an example.`,
    answer: `**Fact table:** stores the **measurable business events**. One row = one event at the declared grain (one line item, one visit, one month-end snapshot). It contains foreign keys to each dimension plus numeric measures, and almost no descriptive text. It is **long and narrow** - millions of rows, few columns.

**Dimension table:** stores the **descriptive context**. One row = one entity (a product, a store, a customer, a day). It contains a surrogate key, a natural key and descriptive attributes, and it is **short and wide** - thousands of rows, many columns.

| Point | Fact table | Dimension table |
|---|---|---|
| Content | keys + numeric measures | attributes + descriptive text |
| Size | very large, narrow | small, wide |
| Rows represent | an event or snapshot | an entity |
| Keys | FK to every dimension | surrogate PK + natural key |
| Changes | append-only, immutable | slowly changing (SCD) |
| Used for | aggregation (SUM, AVG) | filtering, grouping, labelling |

**Example:**
- fact_sales (product_key, date_key, store_key, customer_key, qty, sales, cost, margin) - 4 dimensions, 4 measures.
- dim_product (product_key, sku, item_name, brand, subcategory, category) - descriptive levels.

**Rule of thumb:** if a column is a number you want to add up, it belongs in the fact table; if it is a label you might use in a filter or a row heading, it belongs in a dimension table.

**Grain first:** always declare the grain before choosing dimensions, otherwise measures get double counted.

**Diagram:** Refer to the fact and dimension tables diagram.`,
    diagram: 'ol-fact-dim',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q31',
    unit: '3',
    topicNumber: '3.2',
    topicTitle: 'Fact Tables and Dimension Tables',
    question: `Explain the types of fact tables and the types of dimension tables with examples.`,
    answer: `**A. Types of fact tables**
1. **Transaction fact** - one row per event, the most granular (one invoice line). Best for detailed analysis.
2. **Periodic snapshot fact** - one row per entity per period, e.g. month-end inventory on hand. Measures are semi-additive.
3. **Accumulating snapshot fact** - one row per process instance with multiple dates (order date, ship date, delivery date) that are updated as the order progresses - used for cycle-time analysis.
4. **Factless fact** - no numeric measure at all; the event's existence is the fact (student attended a lecture, product on promotion). Counted with COUNT.

**B. Types of dimension tables**
1. **Conformed dimension** - the same dimension reused across multiple facts, so results are comparable ("single version of truth").
2. **Role-playing dimension** - one dimension serving several roles in the same fact (date as order date, ship date, delivery date), accessed through views or aliases.
3. **Junk dimension** - collection of small, unrelated flags (is_gift, is_return, payment_channel) combined into one dimension to avoid key clutter.
4. **Degenerate dimension** - a key stored in the fact table itself because it needs no attributes (invoice number, ticket number).
5. **Slowly changing dimension (SCD)**
   - Type 1: overwrite the old value (no history),
   - Type 2: add a new row with version and effective dates (full history, preferred for reporting),
   - Type 3: add a "previous value" column (limited history).

**Diagram:** Refer to the fact and dimension tables diagram.`,
    diagram: 'ol-fact-dim',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'q32',
    unit: '3',
    topicNumber: '3.3',
    topicTitle: 'Measures and Dimensions',
    question: `What are measures? Explain additive, semi-additive and non-additive measures with examples.`,
    answer: `**Measure:** a numeric fact that the business wants to quantify and aggregate - sales amount, quantity sold, cost, margin, balance, headcount.

**Classification by aggregation behaviour**

1. **Additive** - can be summed along **every** dimension.
   - Examples: sales amount, quantity sold, discount given, units returned.
   - SUM(sales) is correct across product, store, time and customer.

2. **Semi-additive** - can be summed along some dimensions but **not along time**.
   - Examples: closing stock on hand, account balance, headcount, room occupancy.
   - Adding January and February stock gives an imaginary number; the correct measure is the last value, average, or max over the period.

3. **Non-additive** - cannot be summed along any dimension.
   - Examples: ratios such as margin %, growth %, average order value, unit price, KPI index.
   - Correct method: aggregate the numerator and denominator separately, then divide.

**Why this matters:** summing a non-additive measure produces the classic "average of averages" error. AVG(margin_pct) of three stores is not the company margin if the stores have different sales volumes.

**Design rule:** store the additive components (revenue, cost) and compute the ratio at query time rather than storing margin %.

**Dimensions on the other side:** the dimension answers "by what"; the measure answers "how much". A cell is therefore "measure value for one member of each dimension".

**Diagram:** Refer to the measures and dimensions diagram.`,
    diagram: 'ol-measures',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q33',
    unit: '3',
    topicNumber: '3.3',
    topicTitle: 'Measures and Dimensions',
    question: `Design a dimensional model (star schema) for a retail chain selling grocery products across stores. State the grain, dimensions and measures.`,
    answer: `**Business question:** "How much did we sell, by product, by store, by month, and at what margin?"

**1. Grain (declared first):** one row per **invoice line item per store per day**. Finest grain keeps every other aggregation possible.

**2. Fact table fact_sales**
- Foreign keys: product_key, date_key, store_key, customer_key, promotion_key
- Measures: quantity, gross_sales, discount, net_sales, cost, margin (margin % computed, not stored)

**3. Dimensions**
| Dimension | Key attributes | Hierarchy |
|---|---|---|
| dim_product | SKU, item name, brand, pack size | category - subcategory - brand - item |
| dim_date | date, month, quarter, year, fiscal period, holiday flag | year - quarter - month - day |
| dim_store | store name, format, city, state | region - state - city - store |
| dim_customer | name, segment, loyalty tier | segment - tier - customer |
| dim_promotion | campaign, media, discount %, start and end date | campaign type - campaign |

**4. Measures classification:** net_sales, quantity, cost are additive; margin %, average basket size are non-additive; stock-on-hand in an inventory snapshot would be semi-additive.

**5. Why star, not snowflake:** five flat dimension tables cost one join each, the model is easy for BI tools, and dimension row counts are modest. Only dim_product may be selectively snowflaked if category data is shared.

**6. Expected query:** SELECT d.year, p.category, SUM(f.net_sales) FROM fact_sales f JOIN dim_product p ... JOIN dim_date d ... GROUP BY 1,2 - four joins, answered from pre-aggregates in an OLAP cube.

**Diagram:** Refer to the star schema diagram.`,
    diagram: 'ol-star',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'q34',
    unit: '3',
    topicNumber: '3.4',
    topicTitle: 'Star Schema',
    question: `Explain the star schema. Discuss its components, advantages and disadvantages with an example.`,
    answer: `**Definition:** A star schema is a dimensional model in which **one central fact table** is joined to a set of **denormalized dimension tables** arranged like a star. Each dimension is a single table holding all of its hierarchy levels.

**Components**
1. **Fact table** - foreign keys to all dimensions + numeric measures at the declared grain.
2. **Dimension tables** - flat, denormalized, containing descriptive attributes and hierarchy levels.
3. **Surrogate keys** - simple integer keys replacing natural keys, so dimension history (SCD type 2) can be tracked.
4. **Star join** - every dimension joins the fact directly on one key.

**Example:** fact_sales(product_key, date_key, store_key, customer_key, qty, sales, cost, margin) with dim_product holding category and subcategory in the same table (not in separate normalized tables).

**Advantages**
- Simple for analysts and BI tools - one join per dimension.
- Fast query response: fewer joins, better use of bitmap indexes and pre-aggregates.
- Denormalization is acceptable in read-mostly warehouses; no update anomalies in practice.
- Easy to understand and to extend with a new dimension.

**Disadvantages**
- Data redundancy inside dimensions (category name repeated for every item).
- More storage than a normalized model.
- A hierarchy change requires updating many rows.
- Very large dimensions (millions of customers) can make the star heavy.

**When to use:** most data marts, dashboards, and any model where query speed matters more than storage.

**Diagram:** Refer to the star schema diagram.`,
    diagram: 'ol-star',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q35',
    unit: '3',
    topicNumber: '3.5',
    topicTitle: 'Snowflake Schema',
    question: `Explain the snowflake schema. How is a star schema converted into a snowflake? Discuss advantages and disadvantages.`,
    answer: `**Definition:** A snowflake schema is a star schema whose **dimension tables are normalized** into multiple related tables. The fact table stays the same; each dimension hierarchy is split into its own level table, so the diagram branches like a snowflake.

**Structure:** fact_sales joins dim_product, which joins dim_subcategory, which joins dim_category; and dim_store joins dim_city, dim_state, dim_region.

**Conversion steps (star to snowflake)**
1. Pick a dimension with repeated values, e.g. dim_product containing category, subcategory.
2. Create a new table for each repeated level: dim_category(category_id, category_name, department).
3. Replace the descriptive columns in dim_product with a foreign key category_id.
4. Repeat for every hierarchy: product, geography, date.
5. Add foreign key constraints and re-point the ETL mapping.

**Advantages**
- Removes redundancy: a category name is stored once.
- Saves storage for large dimensions.
- Cleaner updates - changing a category name touches one row.
- Conformed, reusable hierarchy tables across marts.

**Disadvantages**
- More joins: fact - store - city - state - region is four joins for one dimension.
- Slower queries, complex SQL, harder for business users.
- BI tools need a semantic layer to hide the complexity.
- Over-normalization is the classic tuning problem in warehouses.

**Practical use:** snowflaking is applied **selectively** - only to large or shared dimensions; small dimensions stay flat.

**Diagram:** Refer to the snowflake schema diagram.`,
    diagram: 'ol-snowflake',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'q36',
    unit: '3',
    topicNumber: '3.6',
    topicTitle: 'Star vs Snowflake Schema',
    question: `Compare star schema and snowflake schema on at least eight points. Which one should be used and when?`,
    answer: `| Point | Star schema | Snowflake schema |
|---|---|---|
| Structure | fact + flat dimensions | fact + normalized dimension levels |
| Number of tables | fewer | more |
| Joins per query | one per dimension | several per dimension |
| Query speed | faster | slower |
| Storage | higher (redundancy) | lower (no repetition) |
| Normal form | denormalized (2NF/3NF dims) | normalized (3NF) |
| Complexity for users | simple, self-explanatory | complex, needs semantic layer |
| ETL complexity | simpler loads | more tables and key lookups |
| Update anomaly | possible in dimensions | minimized |
| Maintenance | easy to extend | hierarchy changes are clean |
| Cube build | faster | slower |
| Typical use | data marts, dashboards, BI tools | enterprise warehouse, shared hierarchies |

**Choose star when:** query speed is the priority, the team is small, dimensions are moderate (thousands of rows), and the BI tool relies on simple star joins.

**Choose snowflake when:** storage is a constraint, hierarchies are large (product, geography with lakhs of members), or the same dimension is reused across many marts and must be maintained in one place.

**Hybrid (most common in practice):** a **star** core with **selective snowflaking** of the two or three biggest dimensions, plus a **galaxy schema** when several fact tables share conformed dimensions.

**Exam one-liner:** star schema optimizes **reads**, snowflake schema optimizes **storage and consistency**.

**Diagram:** Refer to the star vs snowflake schema diagram.`,
    diagram: 'ol-star-vs-snow',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q37',
    unit: '3',
    topicNumber: '3.7',
    topicTitle: 'Introduction to OLAP and its Architecture',
    question: `Define OLAP. Explain the FASMI test and the three-tier architecture of an OLAP system.`,
    answer: `**Definition:** OLAP (Online Analytical Processing) is a technology that lets analysts **view and analyse multidimensional data interactively**, with fast responses to aggregation, drill-down and comparison queries over large historical volumes. It sits on top of the data warehouse and serves the "why and what if", not the day-to-day "what happened now".

**FASMI test (Pendse/OLAP Council)**
- **F**ast - answers in about 1-5 seconds even for large data.
- **A**nalysis - supports business logic and statistics, not just listing.
- **S**hared - multi-user concurrency, security, and controlled access.
- **M**ultidimensional - a true dimensional view with hierarchies.
- **I**nformation - delivers all the data and derived information a decision needs.

**Architecture (three tiers)**
1. **Data tier** - source systems (ERP, CRM, POS, flat files) loaded through ETL into a data warehouse or data marts using star/snowflake schemas.
2. **OLAP server tier** - the analytical engine: aggregation and summary tables, cube cache, MDX/SQL query processor, metadata repository (cube definitions, hierarchies, security) and scheduler for refresh.
3. **Presentation tier** - client tools: Excel PivotTable, Power BI, Tableau, web dashboards, mobile apps; they send MDX/drag-drop requests and render charts, pivots and drill paths.

**Data flow:** sources - ETL - warehouse - OLAP server (aggregate + cache) - client report. Security and metadata are cross-cutting, applied on each layer.

**Diagram:** Refer to the OLAP introduction and architecture diagram.`,
    diagram: 'ol-olap-arch',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q38',
    unit: '3',
    topicNumber: '3.8',
    topicTitle: 'Types of OLAP Systems',
    question: `Explain ROLAP, MOLAP and HOLAP with their advantages and disadvantages.`,
    answer: `**1. ROLAP (Relational OLAP)**
- The OLAP engine works directly on the **relational star/snowflake schema** in an RDBMS or MPP database.
- Aggregates are handled by summary tables, materialized views, bitmap indexes and SQL generation.
- *Advantages:* no data duplication, handles very large volumes, near real-time freshness, full drill-down to detail, standard SQL tools.
- *Disadvantages:* slower for heavy ad-hoc aggregation unless summary tables are tuned; performance depends on the DBA.

**2. MOLAP (Multidimensional OLAP)**
- Data is loaded into a **proprietary multidimensional array (cube)** with pre-computed aggregates and bitmap/compressed sparse storage.
- *Advantages:* fastest response (sub-second), strong support for complex calculations and time series, ideal for slicing and dicing.
- *Disadvantages:* cube build time and storage cost, cube size limit, batch refresh so data can be stale, detail rows often left out.

**3. HOLAP (Hybrid OLAP)**
- **Combines both:** summary aggregates live in a cube (MOLAP) while the detail rows stay relational (ROLAP); the engine decides which store answers a query.
- *Advantages:* fast summaries plus full drill-through detail, balanced storage.
- *Disadvantages:* two-tier design, complex maintenance and tuning, consistency between cube and detail must be managed.

**Other variants:** DOLAP (desktop, offline cube), WOLAP (web-based), RTOLAP (real-time/streaming updates for fraud and operations).

**Selection:** detail and freshness - ROLAP; speed - MOLAP; both - HOLAP. Sparse dimensions with huge combination counts usually favour ROLAP.

**Diagram:** Refer to the types of OLAP systems diagram.`,
    diagram: 'ol-olap-types',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q39',
    unit: '3',
    topicNumber: '3.9',
    topicTitle: 'OLAP Cube Concept',
    question: `Explain the concept of an OLAP cube. Discuss sparsity and the techniques to manage it.`,
    answer: `**Definition:** An OLAP cube is a multidimensional structure that stores measure values for **every combination of dimension members**. With three dimensions it looks like a box with length, width and height; with more dimensions it is a hypercube, but the name "cube" stays. Each cell address is one member per dimension, and the cell content is the measure set (sales, quantity, margin).

**Components:** dimensions and hierarchies, measures, cells, aggregates, and the metadata that defines them.

**Aggregation levels:** a cube stores not only base cells but also pre-computed roll-ups (day - week - month - quarter - year). This is why a "year total" is instant - it is a stored cell, not a scan.

**Sparsity problem:** the number of possible cells is the product of dimension member counts. Example: 3,000 products x 400 stores x 1,100 days x 2 channels = **2.64 arab (2.64 billion) possible cells**, but the combinations that actually occur in sales are only about **4 crore** - roughly **1.5% dense**, meaning 98.5% of the cube is empty. Storing all cells wastes storage and slows loading.

**Techniques to manage sparsity**
1. Store only **non-empty cells** (sparse array with an offset/index map).
2. **Bitmap indexes** per dimension member to locate matching cells.
3. **Partitioning** the cube by time or region so only the changed partition is rebuilt.
4. **Aggregate-only** cubes - keep detail in the relational store (HOLAP).
5. **Dimension pruning** - drop dimensions nobody queries.

**Cube vs relational table:** array with pre-computed cells and sub-second response versus rows with query-time GROUP BY and flexible detail.

**Diagram:** Refer to the OLAP cube concept diagram.`,
    diagram: 'ol-cube',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q40',
    unit: '3',
    topicNumber: '3.10',
    topicTitle: 'OLAP Operations',
    question: `Explain the basic OLAP operations: roll-up, drill-down, slice, dice and pivot, with examples.`,
    answer: `**1. Roll-up (consolidation)** - move **up** a hierarchy, replacing a fine level with a coarser one and aggregating the measures. Example: monthly sales - quarter - year. Result: fewer cells, higher-level totals.

**2. Drill-down** - the inverse: move **down** a hierarchy to reveal detail, or add a new dimension. Example: year - quarter - month - day, to find which month caused the drop. Drill-through further jumps from a cube cell to the source invoice rows.

**3. Slice** - fix **one** dimension to a single value, producing a sub-cube of the remaining dimensions. Example: time = FY 2024 gives a product x store x customer plane.

**4. Dice** - select a **range or list of values on two or more** dimensions, producing a smaller sub-cube. Example: products in (Aata, Soap) AND cities in (Pune, Mumbai) AND quarters in (Q1, Q2).

**5. Pivot (rotate)** - **swap the axes** of the presentation - product on rows becomes product on columns - without changing any value or performing aggregation. Purely a presentation operation.

**Difference table**
| Operation | Direction | Values change? | Data volume |
|---|---|---|---|
| Roll-up | up the hierarchy | yes, aggregated | decreases |
| Drill-down | down the hierarchy | yes, disaggregated | increases |
| Slice | one dimension fixed | no | decreases |
| Dice | multi-dimension range | no | decreases |
| Pivot | presentation only | no | same |

**Use in business:** roll-up for management summaries, drill-down for root-cause, slice/dice for segment comparison, pivot for reporting layout, drill-through for audit.

**Diagram:** Refer to the OLAP operations diagram.`,
    diagram: 'ol-operations',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q41',
    unit: '3',
    topicNumber: '3.11',
    topicTitle: 'OLAP vs OLTP Systems',
    question: `Differentiate between OLTP and OLAP systems. Why are they kept as separate systems?`,
    answer: `| Point | OLTP | OLAP |
|---|---|---|
| Purpose | run the business | analyse the business |
| Users | clerks, applications | analysts, managers |
| Workload | many short read-write transactions | few long read-only queries |
| Queries | INSERT/UPDATE/DELETE | SELECT with GROUP BY / MDX |
| Data | current, detailed | historical, summarized |
| Schema | normalized (3NF) | star / snowflake |
| Size | GB | TB to PB |
| Indexing | B-tree on keys | bitmap, columnar, partitioning |
| Response | milliseconds | seconds to minutes |
| Concurrency | thousands of users | tens of heavy queries |
| Metric | TPS and latency | scan throughput |
| Backup | point-in-time critical | periodic reload possible |

**Why separate systems**
1. **Performance isolation** - an analytical scan of lakhs of rows would lock tables and slow billing.
2. **Different schema needs** - 3NF for safe updates, star for fast reads.
3. **Historical depth** - OLTP keeps current state, OLAP keeps multi-year history.
4. **Integration** - many sources must be cleansed and conformed before analysis.
5. **Governance** - analysts need read-only, masked, row-level-secured access.
6. **Reproducibility** - a non-volatile snapshot means two reports show the same number.

**Link:** ETL (batch) or CDC (streaming) moves data from OLTP to OLAP; never backwards. **HTAP** systems (row store + column store in memory) attempt both in one engine but remain an exception.

**Diagram:** Refer to the OLAP vs OLTP systems diagram.`,
    diagram: 'ol-vs-oltp',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'q42',
    unit: '3',
    topicNumber: '3.12',
    topicTitle: 'Applications of OLAP in Business Analysis',
    question: `Discuss the applications of OLAP in business analysis. What are its benefits and limitations?`,
    answer: `**Applications**
1. **Retail and sales** - sales, margin and footfall by store, product and week; assortment and pricing decisions; promotion effectiveness.
2. **Finance** - revenue vs budget variance by cost centre, ledger and period; profitability and cost analysis; consolidation reporting.
3. **Supply chain** - fill rate, stock on hand, lead time by warehouse, supplier and item; reorder and safety-stock planning.
4. **HR / workforce** - headcount, attrition and cost by department, grade, location and month; hiring and retention planning.
5. **Banking** - balances, NPA percentage and transaction value by branch, product and segment; risk and cross-sell.
6. **Telecom** - ARPU, churn and data usage by circle, plan and month; retention offers.
7. **Healthcare** - bed occupancy, cost per case, readmission by hospital, speciality and payer; capacity planning.
8. **Education** - marks, attendance and dropout by course, batch and term; remedial action.
9. **Manufacturing** - OEE, rejection and downtime by plant, line, shift and machine; maintenance planning.

**Common analytical patterns:** trend over time, contribution by dimension, exception and outlier detection, what-if and budget-vs-actual comparison, ranking and ABC analysis.

**Benefits**
- Fast interactive multi-dimensional analysis without writing SQL.
- Self-service access for business users; reduced load on the IT team.
- Trend and exception detection from years of history.
- Single version of truth through conformed dimensions.
- Supports planning, forecasting and target tracking.

**Limitations**
- Cube build cost and refresh latency - data is as fresh as the last load.
- Schema rigidity: new dimensions require remodelling and rebuild.
- Storage growth from aggregates; sparsity must be managed.
- Depends on clean ETL and good data quality - garbage in, garbage out.
- Not suited to row-level transactional detail or real-time alerting.
- Requires governance: access control, masking and metric definitions.

**Diagram:** Refer to the applications of OLAP in business analysis diagram.`,
    diagram: 'ol-apps',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  // ============================================================
  // Cyber Security Unit 1 — 17 Most Important 6-Mark Questions
  // ============================================================
  {
    id: 'cq1',
    subjectId: 'cyber-security',
    topicNumber: '1.1',
    topicTitle: 'Introduction to Cyber Security',
    question: 'Define Cyber Security. Explain its 4 key areas with a suitable diagram.',
    answer: `**Definition:**
Cyber security is the practice of protecting systems, networks, and programs from digital attacks. Ye internet par apne digital assets ko hackers, malware aur online threats se protect karti hai.

**4 Key Areas of Cyber Security:**
1. **Network Security** — computer networks ko protect karti hai. Firewalls, IDS (Intrusion Detection Systems), VPNs ka use karti hai. Network traffic monitor karti hai aur unauthorized access rokti hai.
2. **Application Security** — apps aur software ko protect karti hai. Development ke time security features add karti hai — input validation, authentication, encryption, code reviews.
3. **Information Security** — sensitive data ko protect karti hai. Data encryption, access controls, backup policies ka use karti hai.
4. **Operational Security** — organizational processes ko protect karti hai. Security policies, procedures, guidelines banati hai. Employee training, incident response plans, risk management.

**Diagram:** Refer to the Cyber Security Framework diagram showing 4 key areas — Network, Application, Information, Operational Security — all working together.`,
    diagram: 'cyber-framework',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq2',
    subjectId: 'cyber-security',
    topicNumber: '1.2',
    topicTitle: 'Need, Importance and Challenges in Cyber Security',
    question: 'Why is cyber security important? Explain the major challenges faced in implementing cyber security.',
    answer: `**Importance of Cyber Security:**
1. **Infrastructure Protection** — power grids, transportation, hospitals sab online hain. Hack ho toh nation halt ho sakti hai.
2. **Economic Stability** — cyber attacks financial markets ko affect karte hain. Companies ka loss millions mein ho sakta hai.
3. **National Security** — defense systems, government databases cyber attacks ke target ho sakte hain.
4. **Individual Privacy** — personal data, bank details, messages sab protect hona chahiye.

**Major Challenges:**
1. **Rapidly Evolving Threats** — hackers ka techniques continuous badalte hain. Security measures ek time fixed hoti hai, but hackers naya bypass dhundh lete hain.
2. **Legacy Systems** — purane systems (30+ years old) abhi bhi use hote hain. Ye modern security tools nahi support karte.
3. **Skills Gap** — cyber security experts ki demand high hai, supply kam hai.
4. **Balancing Security & Usability** — zyada security strict ho toh users iske use karna band dete hain. Ek balance maintain karna zaroori hai.

**Diagram:** Refer to the Cyber Security Framework diagram and the Importance/Challenges content.`,
    diagram: 'cyber-framework',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq3',
    subjectId: 'cyber-security',
    topicNumber: '1.3',
    topicTitle: 'Cyberspace',
    question: 'Define Cyberspace. Explain its layered structure with a diagram.',
    answer: `**Definition:**
Cyberspace ek global virtual environment hai jahan digital communication aur human activity hoti hai. Ye internet, cellular networks, aur connected devices par based hai. Cyberspace ek physical jagah nahi hai — ye digital networks ka wo space hai jahan information create, store, share aur protect hoti hai.

**Layers of Cyberspace:**
1. **Physical Layer** — servers, routers, switches, undersea cables, satellites. Ye digital data ko physically transmit aur store karte hain.
2. **Logical Layer** — software, protocols (TCP/IP, HTTP, DNS), applications. Ye data ko process, route, aur protect karta hai.
3. **Social Layer** — users, communities, human activity. Social media, online transactions, digital communication.
4. **Security Layer** — firewalls, encryption, authentication. Ye cyberspace ko protect karti hai.

**Significance:** Cyberspace global reach hai — borders ko cross karta hai. Modern economy, society, national security sab cyberspace par depend hain.

**Diagram:** Refer to the Cyberspace Layered Structure diagram — 4 layers (Physical → Logical → Security → Social).`,
    diagram: 'cyberspace-layers',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq4',
    subjectId: 'cyber-security',
    topicNumber: '1.4',
    topicTitle: 'Cyber Threats',
    question: 'Describe the different types of cyber threats with examples. Add a diagram.',
    answer: `**Types of Cyber Threats:**
1. **Malware** — malicious software including viruses, worms, trojans, ransomware. Ye system ko damage karta hai, data corrupt karta hai. Example: Trojan horse fake software ban ke system mein enter karta hai.
2. **Phishing** — fraudulent emails/messages legitimate sources jaise dikhte hain. Users se sensitive information capture karte hain.
3. **Ransomware** — system ko lock kar deta hai, data ko encrypt karta hai. Ransom ke liye paise demand karta hai.
4. **DDoS (Distributed Denial of Service)** — multiple computers se ek website pe traffic flood kar deta hai. Website overload ho jati hai, users ko access nahi milta.
5. **Man-in-the-Middle (MITM)** — hacker communication ke beech mein aa jata hai. Data intercept aur modify karta hai.
6. **Insider Threats** — organisation ke own employees data leak karte hain.
7. **Zero-Day Exploits** — security vulnerabilities jinka software maker ko bhi pata nahi. Hackers exploit kar dete hain.

**Diagram:** Refer to the Types of Cyber Threats diagram showing 6 major categories — Malware, Phishing, Ransomware, DDoS, MITM, Zero-Day.`,
    diagram: 'cyber-threats',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq5',
    subjectId: 'cyber-security',
    topicNumber: '1.5',
    topicTitle: 'Cyber-warfare',
    question: 'What is cyber-warfare? Explain its three levels with examples. Add a diagram.',
    answer: `**Definition:**
Cyber-warfare ka matlab hai nation-states ka digital attacks ka use karna — dusre nation ke critical infrastructure, computer systems, aur networks ko disrupt, damage, ya destroy karne ke liye. Ye traditional warfare ka digital form hai jo cyberspace mein hota hai.

**Three Levels of Cyber-warfare:**
1. **Cyber Espionage** — dusre country ke sensitive information chura lena — defense plans, government secrets, economic data. Ye spy ka digital form hai.
2. **Cyber Sabotage** — physical infrastructure ko damage karna — power grids hack karna, transportation systems disrupt karna. Stuxnet (Iran nuclear program) iska famous example hai.
3. **Full Cyber-Warfare** — critical systems ko completely disrupt karna — communication networks down karna, financial systems collapse karna.

**Impact on National Security:**
1. Power grid attacks — electricity supply disrupt ho sakta hai.
2. Financial system disruption — banks, stock markets hack ho sakte hain.
3. Defense systems — military communication aur weapon systems target ho sakte hain.

**APTs:** Advanced Persistent Threats — long-term, targeted, state-sponsored attacks. Ye years tak chalti hain, hard to detect.

**Diagram:** Refer to the Cyber-warfare Levels diagram — Espionage → Sabotage → Full War (escalating severity).`,
    diagram: 'cyber-warfare',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq6',
    subjectId: 'cyber-security',
    topicNumber: '1.6',
    topicTitle: 'CIA Triad',
    question: 'Explain the CIA Triad — Confidentiality, Integrity, and Availability — with examples. Add a diagram.',
    answer: `**CIA Triad — 3 Core Security Principles:**
1. **Confidentiality** — sensitive data ko unauthorized users se bachaana. Data sirf authorized persons tak hi reachable hona chahiye.
   - *Methods:* Encryption, passwords, access controls, biometric authentication.
   - *Example:* Bank account details sirf account holder aur authorized bank employees ko dekhne milna chahiye.
   - *Breach:* Data leak, unauthorized access, password cracking.

2. **Integrity** — data accurate, consistent, aur tamper-free rakhna. Data modify hona authorized persons hi kar sakte hain.
   - *Methods:* Checksums, digital signatures, version controls, hash functions.
   - *Example:* Transaction details correct hona chahiye — kisi na kisi change nahi karna chahiye.
   - *Breach:* Data corruption, unauthorized modification, man-in-the-middle attacks.

3. **Availability** — systems aur data authorized users ke liye available rakhna. Users ko zaroorat ke time access milna chahiye.
   - *Methods:* Redundancy, backups, DDoS protection, failover systems.
   - *Example:* Bank website 24/7 available hona chahiye — DDoS attack se down nahi hona chahiye.
   - *Breach:* System down, service disruption, DDoS attacks, hardware failure.

**Importance:** Ye 3 principles mil kar ek complete security model banate hain. Har security measure inme ek ya zyada principles ensure karti hai.

**Diagram:** Refer to the CIA Triad diagram — 3 circles (C-I-A) around a central security model.`,
    diagram: 'cia-triad',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq7',
    subjectId: 'cyber-security',
    topicNumber: '1.7',
    topicTitle: 'Cyber Terrorism',
    question: 'Define Cyber Terrorism. Describe its forms and impact with a diagram.',
    answer: `**Definition:**
Cyber terrorism ka matlab hai terrorism ko digital form mein use karna — hackers critical infrastructure, government systems, aur public services ko attack karte hain taaki mass disruption, fear, aur panic paida ho. Ye digital attacks se physical world mein damage karti hai.

**Forms of Cyber Terrorism:**
1. **Infrastructure Attacks** — power grids, water supply, transportation systems hack karna.
2. **Government System Attacks** — official websites hack karna, citizen data leak karna, election systems disrupt karna.
3. **Social Media Propaganda** — fake news, hate speech spread karna, public fear paida karna.
4. **Ransomware on Public Services** — hospitals, municipal services ko lock karke ransom demand karna.

**Impact:**
1. **Public Fear & Panic** — citizens feel unsafe digitally.
2. **Economic Disruption** — businesses stop, services halt.
3. **Loss of Life (indirect)** — hospital systems down, emergency services affected.
4. **National Security Threat** — critical infrastructure affected.

**Diagram:** Refer to the Cyber Terrorism diagram — Motive → Attack → Targets → Impact cycle.`,
    diagram: 'cyber-terrorism',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq8',
    subjectId: 'cyber-security',
    topicNumber: '1.8',
    topicTitle: 'Cyber Security of Critical Infrastructure',
    question: 'What is critical infrastructure? Explain the sectors that need protection with a diagram.',
    answer: `**Definition:**
Critical infrastructure wo physical aur digital systems hain jin par nation ka survival depend karta hai — power, water, transport, healthcare, finance, telecom. Hack ho toh country ek dam halt ho sakti hai.

**Critical Infrastructure Sectors:**
1. **Energy Sector** — power grids, oil refineries, nuclear plants.
2. **Water Supply** — treatment plants, reservoirs, distribution systems.
3. **Transportation** — railways, airports, shipping ports, traffic systems.
4. **Healthcare** — hospitals, patient records, medical devices.
5. **Finance** — banks, stock exchanges, payment systems.
6. **Telecom** — communication networks, internet backbone.

**Why Protection Zaroori Hai:**
- Attack on any one sector cascading effect daal sakta hai — power down toh sab systems down.
- 24/7 dependency — nation ka har kaam in systems par depend karta hai.
- Interconnected systems — ek hack se multiple sectors affect ho sakte hain.

**Diagram:** Refer to the Critical Infrastructure diagram — 6 sectors connected to a central "Nation" hub.`,
    diagram: 'critical-infra',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq9',
    subjectId: 'cyber-security',
    topicNumber: '1.9',
    topicTitle: 'Cyber Security — Organizational Implications',
    question: 'Explain the organizational implications of cyber security attacks with a diagram.',
    answer: `**Organizational Implications of Cyber Security:**
1. **Data Loss** — customer information, financial records, trade secrets chur jaate hain.
2. **Financial Loss** — ransom payments, revenue loss, legal fines.
3. **Reputation Damage** — customer trust lost, brand damage, market value down.
4. **Operational Disruption** — systems down, employees blocked, work halted.
5. **Legal Compliance** — IT Act violations, fines, lawsuits.
6. **National Impact** — critical infrastructure affected, economy hit.

**Business Impact:**
- Customer trust aur reputation sabse important hai.
- Legal compliance mandatory hai — IT Act violations heavy fines leta hai.
- Operational disruption se productivity down jata hai.

**Building Security-Aware Culture:**
- Employee training zaroori hai.
- Security policies clear aur enforced honi chahiye.
- Incident response plans hone chahiye.

**Diagram:** Refer to the Organizational Security Implications diagram — 6 areas of impact (Data Loss, Financial, Reputation, Operational, Legal, National).`,
    diagram: 'org-security',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq10',
    subjectId: 'cyber-security',
    topicNumber: '1.10',
    topicTitle: 'Need for a Comprehensive Cyber Security Policy and Governance',
    question: 'Why is a cyber security policy important? Explain the components of a security policy framework with a diagram.',
    answer: `**Definition:**
Security policy ek documented rules aur guidelines hai jo organization apne digital assets ko protect karne ke liye follow karti hai. Governance ka matlab hai policy ko implement aur monitor karne ka process.

**Components of Security Policy:**
1. **Acceptable Use Policy** — employees ko bataya jata hai ki system ka use kaise karna hai.
2. **Access Control Policy** — kis ko kin resources ka access hai — authentication, authorization.
3. **Incident Response Policy** — attack ho toh kya karna hai — steps, reporting, escalation.
4. **Compliance Policy** — legal aur regulatory requirements follow karne ka policy.

**Governance Elements:**
1. **National Layer** — IT Act, National Policy, Cyber Crime Laws, Standards (BIS).
2. **Organizational Layer** — Security Policy, Risk Management, Incident Response Plan, Audit & Compliance.
3. **Individual Layer** — Password hygiene, Phishing awareness, Safe browsing, Personal data care.

**Why Zaroori Hai:**
- Ek clear policy se sab employees ko pata chalta hai ki kya allowed hai aur kya nahi.
- Compliance mandatory hai — IT Act violations heavy fines leta hai.
- Governance se security measures monitored aur improved hoti hain.

**Diagram:** Refer to the Policy & Governance Framework diagram — 3 layers (National → Organizational → Individual).`,
    diagram: 'policy-framework',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq11',
    subjectId: 'cyber-security',
    topicNumber: '1.11',
    topicTitle: 'Need for a Nodal Authority',
    question: 'What is a nodal authority? Explain the functions of CERT-In with a diagram.',
    answer: `**Definition:**
Nodal authority ek central organization hai jo cyber security incidents ko handle, coordinate, aur respond karti hai. India mein CERT-In (Computer Emergency Response Team — India) national nodal agency hai.

**Functions of CERT-In:**
1. **Incident Response** — cyber attacks report kare toh CERT-In immediate response provide karta hai. Ye attacks ko contain, eradicate, aur recover karta hai.
2. **Threat Intelligence** — CERT-In new threats, vulnerabilities, aur attack patterns monitor karta hai. Ye alerts issue karta hai taaki organizations prepare reh sakein.
3. **Policy Coordination** — government, organizations, aur individuals ke beech coordination karta hai. Security guidelines aur best practices share karta hai.

**Why Zaroori Hai:**
- Ek central authority se incident response fast aur organized hota hai.
- Threat intelligence shared karne se sab organizations ek saath prepare reh sakte hain.
- International cooperation ke liye national focal point hota hai.

**Structure:**
- Government (ministries, central agencies) → report incidents
- Organizations (banks, ISPs, companies) → report incidents
- Individuals (citizens) → report incidents
- CERT-In → coordinates, responds, issues alerts

**Diagram:** Refer to the Nodal Authority diagram — CERT-In at top, government, organizations, individuals reporting to it.`,
    diagram: 'nodal-authority',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq12',
    subjectId: 'cyber-security',
    topicNumber: '1.12',
    topicTitle: 'Need for an International Convention on Cyberspace',
    question: 'Why is an international convention on cyberspace needed? Explain the Budapest Convention with a diagram.',
    answer: `**Why International Convention Zaroori Hai:**
1. **Cyberspace Global Hai** — cyberspace borders ko cross karta hai. Ek country ke rules dusre country ke users pe apply nahi hote.
2. **Cross-Border Cybercrime** — hackers ek country se dusre country ke systems attack karte hain. International cooperation zaroori hai.
3. **Shared Threat Intelligence** — ek country ko threats ka pata hai toh dusre countries ko bhi batana chahiye.
4. **Standardized Rules** — sab countries ke liye common rules hone se confusion kam hoga.

**Budapest Convention on Cybercrime:**
- 2001 mein bane — pehla international treaty specifically cybercrime ke liye.
- 38 countries ne sign kiya — Europe, Americas, aur kuch Asian countries.
- Cybercrime ke liye common definitions aur rules provide karta hai.
- Cross-border investigation aur cooperation easy banata hai.
- Human rights, democracy, aur rule of law ko respect karta hai.

**India's Position:**
- India Budapest Convention ka signatory nahi hai.
- India apne IT Act 2000 aur amendments par kaam karta hai.
- But international cooperation ke liye UN aur other forums mein support karta hai.

**Diagram:** Refer to the International Cyber Conventions diagram — UN, Buenos Aires, Tallinn, Madrid initiatives.`,
    diagram: 'international-cyber',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq13',
    subjectId: 'cyber-security',
    topicNumber: '1.13',
    topicTitle: 'Introduction to Cyber Laws',
    question: 'Define Cyber Laws. Explain the scope and areas covered by cyber laws with a diagram.',
    answer: `**Definition:**
Cyber laws wo laws hain jo cyberspace, internet, aur digital technology se related hain. Ye cybercrime, data protection, e-commerce, digital signatures, aur internet governance ko cover karti hain. India mein IT Act 2000 (amended 2008) sabse important cyber law hai.

**Scope of Cyber Laws:**
1. **Data Protection aur Privacy** — personal data ko protect karna. Consent ke bina data collect nahi karna.
2. **E-Commerce aur Digital Transactions** — online transactions ki validity, digital contracts, payment systems.
3. **Cyber Crimes aur Penalties** — hacking, phishing, identity theft, ransomware, obscenity.
4. **Intellectual Property** — digital piracy, software copyright, patents.

**Why Zaroori Hai:**
- Digital world grow kar raha hai — rules chahiye taaki safe environment ho.
- Users ko protection chahiye — personal data, financial transactions.
- Cybercrimes rokne ke liye penalties zaroori hain.
- Trust aur confidence digital economy ke liye zaroori hai.

**Diagram:** Refer to the Cyber Laws diagram — 4 pillars (Definition, Scope, Purpose, Enforcement).`,
    diagram: 'cyber-laws',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq14',
    subjectId: 'cyber-security',
    topicNumber: '1.14',
    topicTitle: 'Key Principles of Cyber Laws',
    question: 'Explain the key principles of cyber laws with examples. Add a diagram.',
    answer: `**Key Principles of Cyber Laws:**
1. **Legality** — all digital activity laws ke under aana chahiye. Rules clear aur enforceable hone chahiye.
2. **Proportionality** — response threat level ke hisaab se hona chahiye. Ek choti attack pe heavy penalty nahi dena chahiye.
3. **Data Protection** — personal data protect hona chahiye. Consent ke bina data collect nahi karna.
4. **Cooperation** — cross-border enforcement zaroori hai. Cybercrime international problem hai.
5. **Accountability** — violators ko legal action face karna chahiye. Laws bina enforcement bekaar hain.
6. **Transparency** — laws aur policies public honi chahiye. Users ko pata hona chahiye ki rules kya hain.

**Examples:**
- IT Act 2000 — India ka pehla cyber law. Digital signatures, e-commerce validity, cybercrime penalties.
- GDPR — Europe ka data protection law. Personal data consent aur protection.
- Budapest Convention — international cybercrime cooperation.

**Diagram:** Refer to the Key Principles of Cyber Law diagram — 6 principles in circles (Legality, Proportionality, Data Protection, Cooperation, Accountability, Transparency).`,
    diagram: 'law-principles',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq15',
    subjectId: 'cyber-security',
    topicNumber: '1.15',
    topicTitle: 'Overview of IT Act 2000',
    question: 'Describe the IT Act 2000 — its key provisions and importance. Add a diagram.',
    answer: `**IT Act 2000 — Overview:**
- India ka pehla cyber law — 9 June 2000 pass hua, 17 October 2000 effective hua.
- Computer aur digital transactions ko legal recognition diya.
- Cybercrime ke liye penalties banaye.

**Key Provisions:**
1. **Digital Signatures** — Section 3 aur 5: Digital signatures ki legal validity di. Secure digital transactions ka base bana.
2. **E-Commerce** — Section 4: Electronic records aur digital contracts ki legal validity di. Paper ki zaroorat nahi.
3. **Cyber Crimes** — Sections 65, 66, 72, 74: Hacking, fraud, obscenity ke liye penalties.
   - Section 65: Tampering with source code — 3 years jail + ₹20,000 fine.
   - Section 66: Computer-related offences — 3 years jail + ₹500,000 fine.
   - Section 72: Breach of confidentiality — 2 years jail + ₹100,000 fine.
   - Section 67: Publishing obscene material — 5 years jail + ₹1,00,000 fine.

**Importance:**
- Digital transactions ko legal backing di.
- Users ko cybercrime se protection di.
- Digital economy ke liye trust paida kiya.

**Diagram:** Refer to the IT Act 2000 Overview diagram — 3 pillars (Validity, Security, Governance) and key sections.`,
    diagram: 'it-act-2000',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq16',
    subjectId: 'cyber-security',
    topicNumber: '1.16',
    topicTitle: 'IT Act 2000 — Key Provisions',
    question: 'Explain the important provisions of IT Act 2000 with their penalties. Add a diagram.',
    answer: `**IT Act 2000 — Key Provisions:**

**Section 65 — Tampering with Source Code:**
- Computer source code ko intentionally alter ya destroy karna.
- Penalty: Imprisonment up to 3 years + Fine up to ₹20,000.

**Section 66 — Computer-Related Offences:**
- Hacking, unauthorized access, data theft, computer-related fraud.
- Penalty: Imprisonment up to 3 years + Fine up to ₹500,000.

**Section 72 — Breach of Confidentiality:**
- Confidential information leak karna — unauthorized access se.
- Penalty: Imprisonment up to 2 years + Fine up to ₹100,000.

**Section 10A — Validity of E-Transactions:**
- Electronic records aur digital contracts ki legal validity di.
- No paper needed — digital transactions legally valid.

**Section 43A — Compensation for Data Breach:**
- Organization negligently sensitive personal data protect nahi karti toh compensation dena padega.

**Section 67 — Publishing Obscene Material:**
- Obscene material publish karna electronic form mein.
- Penalty: Imprisonment up to 5 years + Fine up to ₹1,00,000 (pehli conviction).

**Diagram:** Refer to the IT Act Provisions diagram — 6 key sections with penalties (red = criminal, blue = legal validity, purple = civil).`,
    diagram: 'it-act-provisions',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq17',
    subjectId: 'cyber-security',
    topicNumber: '1.17',
    topicTitle: 'IT Act 2008 Amendments',
    question: 'Explain the key amendments made to the IT Act in 2008 with a diagram.',
    answer: `**IT Act 2008 Amendments — Key Changes:**

**1. Data Protection:**
- Personal data ko legal protection diya.
- Consent required for data collection.
- Sensitive personal data define kara — Section 43A.

**2. Cyber Crime:**
- Naye offences add kiye — identity theft, phishing, child pornography, cyber stalking.
- Penalties increase karke strict banaye.

**3. Borderless Offence:**
- Act apply karta hai even if offence India se bahar committed hua hai, agar target India ke device ya system hai.

**4. Enforcement:**
- Police ko stronger powers di — cyber cells, investigation tools.
- Cyber forensics ka legal recognition.

**5. Compensation:**
- Section 43A — data breach ka compensation.
- Organizations negligently data protect nahi karti toh damages dena padega.

**6. Sensitive Data:**
- Section 43A — sensitive personal data define kara — medical records, financial data, biometric data.

**Why Important:**
- 2008 amendment IT Act 2000 ko modern cyber threats ke liye update kiya.
- Data protection ko legal status diya.
- Borderless offences ko cover kiya.
- Enforcement aur compensation mechanisms strong banaye.

**Diagram:** Refer to the IT Act 2008 Amendments diagram — 6 key changes (Data Protection, Cyber Crime, Borderless, Enforcement, Compensation, Sensitive Data).`,
    diagram: 'it-act-amendments',
    image: null,
    importance: '⭐⭐⭐',
  },

  // ========================================================
  // UNIT 2 — Cybercrimes and Hacking
  // ========================================================
  {
    id: 'cq18',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What are cyber-attacks and vulnerabilities? Explain the different types of cyber-attacks with examples.',
    answer:
      '**Cyber-Attack Definition:**\nA cyber-attack is a deliberate exploitation of a system, network, or device vulnerability to gain unauthorized access, cause damage, or steal data. Attackers use various techniques to exploit weaknesses in systems, applications, or human behavior.\n\n**Vulnerability Definition:**\nA vulnerability is a weakness or flaw in a system, application, or process that can be exploited by an attacker to cause harm or gain unauthorized access. Vulnerabilities can exist in software, hardware, network configurations, or human practices.\n\n**Types of Cyber-Attacks:**\n\n1. **Malware Attacks** — Malicious software (viruses, worms, Trojans, ransomware) system mein install hota hai. Attackers system control lena chahte hain. Example: WannaCry ransomware attack (2017).\n\n2. **Phishing Attacks** — Attackers fake emails, messages, ya websites bana ke users ke sensitive information churate hain. Users ko trick karte hain — login credentials, bank details leak karwa dete hain. Example: Fake banking website login pages.\n\n3. **Man-in-the-Middle (MITM) Attacks** — Attackers victim aur server ke beech intercept kar dete hain. Communication sunte hain aur modify karte hain. Public Wi-Fi networks par common hai. Example: Attackers Wi-Fi traffic intercept karke passwords churate hain.\n\n4. **Denial-of-Service (DoS/DDoS) Attacks** — Attackers multiple computers se victim server par request flood karte hain. Server crash ho jata hai — legitimate users access nahi kar paate. Example: DDoS attack on Dyn (2016).\n\n5. **SQL Injection** — Attackers application ke input fields mein malicious SQL code daal dete hain. Database query manipulate ho jata hai. Sensitive data leak ho jata hai. Example: OWASP Top 10 vulnerability.\n\n6. **Cross-Site Scripting (XSS)** — Attackers malicious scripts website mein inject karte hain. Other users ke browser mein scripts run hote hain. Cookie theft, session hijacking. Example: Facebook XSS vulnerability (2018).\n\n7. **Credential Stuffing** — Stolen credentials (from data breaches) use karke multiple accounts hack karte hain. Users same password reuse karte hain toh attack easy ho jata hai. Example: 500M+ Yahoo accounts breach (2014).\n\n8. **Zero-Day Attacks** — Unknown software vulnerability exploit karte hain. Patch available nahi hota. Attackers vulnerability exploit karte hain before vendor patch lanch kare. Example: Stuxnet attack on nuclear facilities.\n\n9. **Social Engineering** — Psychological manipulation karke users se sensitive information obtain karte hain. Phishing, pretexting, baiting. Humans weakest link hote hain. Example: Fake IT support call.\n\n10. **Ransomware** — Malware system lock kar deta hai. Data encrypt kar deta hai. Decryption key ke liye ransom demand karta hai. Example: WannaCry, NotPetya.\n\n**Attack Lifecycle:**\n1. Reconnaissance — Target information gather karna\n2. Weaponization — Malicious code prepare karna\n3. Delivery — Attack tool deliver karna\n4. Exploitation — Vulnerability exploit karna\n5. Installation — Malware install karna\n6. Command & Control — Remote access establish karna\n7. Actions on Objectives — Data theft, damage\n\n**Diagram:** Refer to the Cyber-Attacks Overview diagram — attack lifecycle, vulnerability types, attack classification.',
    diagram: 'cyber-attacks-overview',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq19',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is malware? Explain the different types of malware including spyware and sniffing attacks.',
    answer:
      '**Malware Definition:**\nMalware (malicious software) is a program or code written to damage, disrupt, or gain unauthorized access to computer systems. Malware includes viruses, worms, Trojans, ransomware, spyware, adware, rootkits, and more.\n\n**Types of Malware:**\n\n1. **Virus** — Self-replicating malware jo attachment ya file ke saath spread hota hai. Host program mein attach ho jata hai. Jab file run hota hai, virus spread hota hai. Computer slow kar deta hai, file corruption karta hai.\n\n2. **Worm** — Self-replicating malware jo network se spread hota hai. Host file attach nahi hota. Network vulnerabilities exploit karke spread karta hai. Email attachments, network shares se spread karta hai.\n\n3. **Trojan Horse** — Malware jo legitimate software ki tarah dikhta hai. Users download karte hain — malicious software install hota hai. Backdoor open kar deta hai. Remote access allow karta hai.\n\n4. **Ransomware** — Malware jo system lock kar deta hai. Files encrypt kar deta hai. Decryption key ke liye ransom demand karta hai. WannaCry, CryptoLocker common examples.\n\n5. **Spyware** — Hidden software jo user activity monitor karta hai. Keystrokes record karta hai. Passwords, credit card numbers churata hai. Internet usage track karta hai. Adware, keyloggers spyware ke subtypes hain.\n\n6. **Adware** — Automatically advertisements display karta hai. Pop-up ads, banner ads. User activity track karta hai — targeted ads show karta hai. Revenue generation ka mode hai.\n\n7. **Rootkit** — Stealthy malware jo OS kernel level modify karta hai. System se hide karta hai. Antivirus detect nahi kar paata. Rootkits powerful malware hain — difficult to detect.\n\n8. **Fileless Malware** — No executable file. Memory ya registry mein hide hota hai. PowerShell, WMI abuse karta hai. Traditional antivirus detect nahi kar paata.\n\n9. **Botnet Malware** — Multiple compromised systems control karta hai. Zombie systems banata hai. DDoS attacks, spam, cryptocurrency mining kare.\n\n10. **Wiper Malware** — Data destroy karta hai. Files encrypt nahi karta — permanently delete karta hai. Disk wipe karta hai. Data destruction ka purpose hai.\n\n**Spyware:**\n- User activity monitor karta hai — browsing history, keystrokes, passwords.\n- Personal information collect karta hai.\n- System slowdown karta hai.\n- Examples: Pegasus spyware, FinSpy.\n\n**Sniffing Attacks:**\n- Network traffic capture karta hai.\n- Data packets read karta hai.\n- Usernames, passwords, sensitive data extract karta hai.\n- Wired aur wireless networks par possible hai.\n- Tools: Wireshark, dsniff, tcpdump.\n- Prevention: Encryption (HTTPS, WPA3), VPN use karna.\n\n**Diagram:** Refer to the Threats — Malware, Spyware, Sniffing diagram — malware types, spyware behavior, sniffing attack flow.',
    diagram: 'threats-malware-spyware-sniffing',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq20',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'Explain the process of gaining unauthorized access to a computer system. What are the common access methods?',
    answer:
      '**Gaining Access Definition:**\nGaining unauthorized access is the process by which attackers exploit vulnerabilities to enter a computer system without permission. This is the first major phase of a cyber-attack after reconnaissance.\n\n**Methods of Gaining Access:**\n\n1. **Password Cracking**\n- Weak passwords brute-force ya dictionary attacks se crack karna.\n- Password guessing, password reset attacks.\n- Tools: John the Ripper, Hashcat, Hydra.\n- Prevention: Strong password policies, MFA, password managers.\n\n2. **Software Exploits**\n- Known vulnerabilities in software exploit karna.\n- Patch nahi lagae hue systems attack karna.\n- Example: EternalBlue exploit — Windows vulnerability.\n- Tools: Metasploit framework.\n- Prevention: Regular patching, vulnerability scanning.\n\n3. **Social Engineering**\n- Humans manipulate karke credentials obtain karna.\n- Phishing, pretexting, baiting, quid pro quo.\n- Phone calls, emails, messages through fake identities.\n- Example: CEO fraud — fake executive email.\n- Prevention: Employee training, verification protocols.\n\n4. **Credential Theft**\n- Stolen credentials use karna.\n- Data breaches se leaked credentials use karna.\n- Credential stuffing — multiple sites par same credentials test karna.\n- Example: LinkedIn breach (100M+ passwords).\n- Prevention: Unique passwords, password managers, MFA.\n\n5. **Network-Based Attacks**\n- Network services exploit karna — SMB, RDP, FTP.\n- Unsecured services attack karna.\n- Port scanning, service enumeration.\n- Tools: Nmap, Nessus.\n- Prevention: Firewall, network segmentation.\n\n6. **Physical Access**\n- Unlocked computers, USB drives, physical access exploit karna.\n- Shoulder surfing — screens monitor karna.\n- Malicious USB drives plug karna.\n- Prevention: Physical security, USB blocking.\n\n7. **Web Application Attacks**\n- SQL injection, XSS, CSRF.\n- Application vulnerabilities exploit karna.\n- Input validation bypass karna.\n- Prevention: Secure coding, WAF, input sanitization.\n\n8. **Wireless Attacks**\n- Wi-Fi networks attack karna.\n- WEP/WPA2 vulnerabilities exploit karna.\n- Wardriving — vulnerable networks find karna.\n- Tools: Aircrack-ng.\n- Prevention: WPA3, strong Wi-Fi passwords.\n\n**Attack Chain:**\n1. Reconnaissance — Information gather karna\n2. Scanning — Vulnerabilities find karna\n3. Gaining Access — Entry karna\n4. Maintaining Access — Persistence establish karna\n\n**Diagram:** Refer to the Gaining Access diagram — 4 main access methods, attack chain, vulnerabilities.',
    diagram: 'gaining-access',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq21',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is privilege escalation? Explain vertical and horizontal privilege escalation with examples.',
    answer:
      '**Privilege Escalation Definition:**\nPrivilege escalation is the process of obtaining higher-level permissions on a system than originally intended. Attackers exploit vulnerabilities to gain elevated access — admin, root, or system-level privileges.\n\n**Types of Privilege Escalation:**\n\n1. **Vertical Privilege Escalation (Privilege Elevation)**\n- Lower-privilege user higher-level access obtain karta hai.\n- Normal user admin ya root access obtain karta hai.\n- OS kernel vulnerabilities exploit karta hai.\n- Example: Buffer overflow attacks.\n- Tools: LinPEAS, WinPEAS.\n- Prevention: Least privilege, regular patching, privilege monitoring.\n\n2. **Horizontal Privilege Escalation**\n- Same-level access different user account obtain karta hai.\n- Normal user same-level access another user obtain karta hai.\n- Another user\'s account hack karta hai — same privilege level.\n- Example: Attackers other users\' sessions hijack karte hain.\n- Prevention: Unique credentials, MFA, session management.\n\n**Vertical Escalation Methods:**\n\n1. **Kernel Vulnerabilities**\n- OS-level vulnerabilities exploit karna.\n- Kernel-level exploits system-wide access dete hain.\n- Example: Dirty COW vulnerability (Linux).\n- Prevention: Regular kernel updates, SELinux.\n\n2. **Application Vulnerabilities**\n- Application vulnerabilities exploit karna.\n- Buffer overflows, format string attacks.\n- Application admin privileges obtain karta hai.\n- Prevention: Secure coding, input validation.\n\n3. **Misconfigured Permissions**\n- Weak file/directory permissions exploit karna.\n- SUID/SGID binaries abuse karna.\n- Example: /usr/bin/passwd root access allow karta hai.\n- Prevention: Proper permission settings, regular audits.\n\n4. **Password Attack**\n- Admin password crack karna.\n- Brute force, dictionary attacks.\n- Credential theft — admin credentials steal karna.\n- Prevention: Strong passwords, MFA, rate limiting.\n\n5. **Service Misconfiguration**\n- Running services with elevated privileges.\n- Misconfigured services exploit karna.\n- Example: Misconfigured SSH keys.\n- Prevention: Service hardening, regular configuration audits.\n\n**Horizontal Escalation Methods:**\n\n1. **Session Hijacking**\n- Other users\' sessions intercept karna.\n- Cookie theft, session ID guessing.\n- Example: XSS attack se cookie steal karna.\n- Prevention: HTTPS, secure cookies, session regeneration.\n\n2. **Credential Theft**\n- Other users\' credentials obtain karna.\n- Keyloggers, phishing attacks.\n- Prevention: MFA, antivirus, user education.\n\n3. **Account Takeover**\n- Password reset vulnerabilities exploit karna.\n- Other accounts access karna.\n- Example: Weak password reset questions.\n- Prevention: Strong password reset policies.\n\n**Diagram:** Refer to the Escalating Privileges diagram — vertical aur horizontal paths, escalation methods.',
    diagram: 'escalating-privileges',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq22',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'How do attackers execute applications on a compromised system? Explain different execution techniques.',
    answer:
      '**Application Execution Definition:**\nAfter gaining access and escalating privileges, attackers execute malicious applications or commands on the compromised system. This allows them to run malicious code, download additional tools, and carry out further attacks.\n\n**Execution Techniques:**\n\n1. **Binary Execution**\n- Malicious binaries download aur execute karna.\n- Reverse shells establish karna.\n- Attacker tools system mein run karna.\n- Example: Metasploit payloads.\n- Prevention: Application whitelisting, endpoint detection.\n\n2. **Script Execution**\n- PowerShell, Bash, Python scripts execute karna.\n- Legitimate interpreters misuse karna.\n- Fileless attacks — scripts memory mein run karna.\n- Example: PowerShell Empire framework.\n- Prevention: Script logging, PowerShell constraints, AppLocker.\n\n3. **Code Injection**\n- Running processes mein code inject karna.\n- DLL injection, process hollowing.\n- Legitimate processes use karke malicious code run karna.\n- Example: Process injection techniques.\n- Prevention: Behavior monitoring, integrity checks.\n\n4. **LOLBins (Living Off the Land Binaries)**\n- System tools misuse karna — certutil, bitsadmin, wget, curl.\n- Legitimate tools malicious purposes ke liye use karna.\n- Tools firewall bypass karna, files download karna.\n- Example: certutil URL download karna.\n- Prevention: Tool monitoring, behavior analysis.\n\n5. **Scheduled Tasks**\n- Windows Task Scheduler, Linux cron jobs abuse karna.\n- Malicious scripts schedule karna — persistence.\n- System restarts ke baad execution continue karta hai.\n- Example: Cron job malware execution.\n- Prevention: Task monitoring, regular audits.\n\n6. **Service Manipulation**\n- Windows services manipulate karna.\n- Malicious services create karna — auto-start.\n- Service accounts abuse karna.\n- Example: Service backdoor creation.\n- Prevention: Service audits, privilege restrictions.\n\n7. **Registry Manipulation**\n- Windows Registry modify karna.\n- Run keys use karke auto-execution.\n- Example: HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run.\n- Prevention: Registry monitoring, AppLocker.\n\n8. **In-Memory Execution**\n- Fileless execution — memory mein code run karna.\n- Detect difficult hai — no file creation.\n- Example: Reflective DLL injection.\n- Prevention: Memory monitoring, EDR solutions.\n\n**Defense:**\n1. **Application Whitelisting** — AppLocker, Software Limitations Policies.\n2. **Behavior Monitoring** — EDR solutions, behavior analysis.\n3. **Script Logging** — PowerShell logging, script block logging.\n4. **Memory Protection** — ASLR, DEP, Stack canaries.\n5. **Regular Audits** — Process monitoring, registry audits.\n\n**Diagram:** Refer to the Executing Applications diagram — execution techniques, LOLBins, defense methods.',
    diagram: 'executing-applications',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq23',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'How do attackers hide files and maintain persistence on a compromised system?',
    answer:
      '**Hiding Files Definition:**\nAfter executing malicious code, attackers hide their files to avoid detection and maintain persistence on the compromised system. Hiding techniques include encryption, disguising, rootkits, and steganography.\n\n**Hiding Techniques:**\n\n1. **Encryption**\n- Malicious files encrypt karke hide karna.\n- Encrypted payloads antivirus detect nahi kar paati.\n- Decryption key attacker ke paas rehta hai.\n- Example: Encrypted malware droppers.\n- Prevention: Memory scanning, behavior analysis.\n\n2. **Disguising (Masquerading)**\n- Malicious files legitimate file names mein hide karna.\n- System files copy karke replace karna.\n- Example: malware.exe ko svchost.exe naam se save karna.\n- Prevention: File integrity monitoring, digital signatures.\n\n3. **Rootkit Techniques**\n- Kernel-level stealth — OS se hide karna.\n- Files invisible bana deta hai.\n- System calls intercept karta hai.\n- Example: Stuxnet rootkit.\n- Prevention: Rootkit scanners, secure boot.\n\n4. **Steganography**\n- Malicious code images, audio, ya documents mein hide karna.\n- Files visually same dikhte hain.\n- Example: Malware JPEG images mein hidden.\n- Prevention: Steganography detection tools.\n\n5. **Hidden Directories**\n- System hidden directories mein files save karna.\n- Windows: C:\\Windows\\System32, Linux: /tmp, /dev/shm.\n- Hidden attributes set karna.\n- Prevention: Directory monitoring, hidden file scans.\n\n6. **Memory-Based Persistence**\n- Files memory mein hide karna — no disk footprint.\n- Memory injection techniques use karna.\n- Example: Fileless malware.\n- Prevention: Memory forensics, EDR.\n\n7. **Registry-Based Hiding**\n- Windows Registry mein configurations hide karna.\n- Malicious entries deep registry keys mein save karna.\n- Example: Registry persistence techniques.\n- Prevention: Registry monitoring, regular audits.\n\n**Persistence Mechanisms:**\n\n1. **Bootkits**\n- BIOS/firmware level persistence.\n- System restart ke baad malware load hota hai.\n- Example: LoJax malware.\n- Prevention: Secure boot, UEFI protection.\n\n2. **Scheduled Tasks**\n- Cron jobs (Linux), Task Scheduler (Windows).\n- Automatic execution schedule karna.\n- Example: Cron job backdoor.\n- Prevention: Task monitoring, regular audits.\n\n3. **Service Persistence**\n- Windows services, systemd services.\n- Auto-start services create karna.\n- Example: Service backdoor.\n- Prevention: Service audits, privilege restrictions.\n\n4. **Startup Folder**\n- Login scripts, startup items.\n- User-level aur system-level startup entries.\n- Example: Windows startup folder malware.\n- Prevention: Startup item monitoring.\n\n5. **DLL Hijacking**\n- Legitimate applications hijack karna.\n- Malicious DLLs load karna.\n- Example: Application DLL hijacking.\n- Prevention: DLL search order hardening.\n\n6. **WMI Subscriptions**\n- Windows Management Instrumentation use karke persistence.\n- Event-driven execution — WMI subscriptions.\n- Example: WMI backdoor.\n- Prevention: WMI monitoring.\n\n**Diagram:** Refer to the Hiding Files diagram — hiding techniques, persistence mechanisms, defense methods.',
    diagram: 'hiding-files',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq24',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is covering tracks in cyber attacks? Explain the techniques attackers use to hide their activities.',
    answer:
      '**Covering Tracks Definition:**\nCovering tracks is the phase of a cyber-attack where attackers erase or modify evidence of their activities to avoid detection and attribution. This includes deleting logs, modifying timestamps, and using anti-forensics techniques.\n\n**Covering Tracks Techniques:**\n\n1. **Log Deletion**\n- System logs, application logs delete karna.\n- Windows Event Logs, Linux syslog clear karna.\n- Audit trails erase karna — no evidence.\n- Example: We@W: eventvwr — Windows Event Log clear karna.\n- Prevention: Centralized logging, log protection.\n\n2. **Timestamp Modification (Timestomping)**\n- File timestamps modify karna — creation, access, modification times.\n- Malicious files legitimate timestamps ke saath match karna.\n- Tools: Touch, Systeminner utilities.\n- Example: Touch -d "2020-01-01" malicious_file.\n- Prevention: File integrity monitoring, secure timestamping.\n\n3. **Shadow Copy Deletion**\n- Windows Volume Shadow Copies delete karna.\n- System restore points erase karna.\n- Example: wmic shadowcopy delete.\n- Prevention: Shadow copy protection, backup isolation.\n\n4. **Anti-Forensics Tools**\n- Anti-forensics tools use karna — evidence erase karna.\n- Data wiping tools, file shredders.\n- Tools: CCleaner, SDelete, shred.\n- Example: Secure file deletion.\n- Prevention: Forensic imaging, write blockers.\n\n5. **Registry Modification**\n- Windows Registry modify karna.\n- Last Write Time (LWT) modify karna.\n- Example: Registry key timestamps change karna.\n- Prevention: Registry auditing, change monitoring.\n\n6. **Network Cover Tracks**\n- Network traffic logs clear karna.\n- Firewall logs delete karna.\n- Proxy logs, IDS logs clear karna.\n- Prevention: Network traffic capture, log aggregation.\n\n7. **Memory Forensics Evasion**\n- Memory artifacts clear karna.\n- Memory wiping tools use karna.\n- Malicious code memory clear karke terminate karna.\n- Example: Memory wipe before exit.\n- Prevention: Memory forensics, volatile data capture.\n\n8. **File System Evidence**\n- File system artifacts delete karna.\n- MFT (Master File Table) entries modify karna.\n- Slack space clear karna.\n- Example: File deletion, free space wiping.\n- Prevention: File system forensics, MFT analysis.\n\n9. **Process/Service Evidence**\n- Malicious processes terminate karna.\n- Services stop karke delete karna.\n- Scheduled tasks delete karna.\n- Prevention: Process monitoring, service audits.\n\n10. **Browser History**\n- Browser cache, history, cookies clear karna.\n- Downloaded files delete karna.\n- Example: Browser data clear karna.\n- Prevention: Browser forensics, user activity monitoring.\n\n**Diagram:** Refer to the Covering Tracks diagram — log deletion, timestomping, shadow copy, anti-forensics.',
    diagram: 'covering-tracks',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq25',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What are computer worms? How do they spread and what is their impact?',
    answer:
      '**Worm Definition:**\nA computer worm is a standalone malware program that replicates itself to spread to other computers. Unlike viruses, worms do not need to attach to existing programs. Worms spread through networks, exploiting vulnerabilities.\n\n**Worm Characteristics:**\n\n1. **Self-Replicating**\n- Worm independent program hai.\n- Apne aap copy create karta hai.\n- Other systems spread karta hai.\n\n2. **No Host File Needed**\n- Virus ki tarah host file attach nahi hota.\n- Independently run karta hai.\n\n3. **Network Spread**\n- Network vulnerabilities exploit karta hai.\n- Email, instant messaging, file sharing through spread karta hai.\n\n4. **Bandwidth Consumption**\n- Network traffic increase karta hai.\n- Internet slowdown kar sakta hai.\n\n**Worm Spread Methods:**\n\n1. **Email Attachments**\n- Worm email attachments through spread karta hai.\n- User opens attachment — worm activates.\n- Example: ILOVEYOU worm (2000).\n\n2. **Network Shares**\n- SMB shares, shared directories exploit karta hai.\n- Other computers spread karta hai.\n- Example: Code Red worm.\n\n3. **Software Vulnerabilities**\n- OS ya application vulnerabilities exploit karta hai.\n- Remote code execution vulnerabilities.\n- Example: EternalBlue exploit — WannaCry.\n\n4. **Instant Messaging**\n- IM clients through spread karta hai.\n- Contacts automatically message karna.\n- Example: ICQ worm.\n\n5. **Removable Media**\n- USB drives, external hard drives through spread karta hai.\n- Auto-run features exploit karta hai.\n- Example: Conficker worm.\n\n6. **Peer-to-Peer Networks**\n- P2P file sharing networks through spread karta hai.\n- Shared files contain worm.\n\n**Impact of Worms:**\n\n1. **Network Damage**\n- Massive network traffic — bandwidth consumption.\n- Internet slowdown.\n- Denial-of-Service conditions.\n\n2. **System Damage**\n- Delete files, corrupt data.\n- System instability.\n- Application crashes.\n\n3. **Privacy Violation**\n- Personal information collect karna.\n- Keyloggers install karna.\n- Credential theft.\n\n4. **Backdoor Installation**\n- Backdoors install karna — remote access.\n- Botnet creation.\n- DDoS attacks.\n\n5. **Financial Damage**\n- Extortion — ransomware.\n- Data recovery costs.\n- System repair costs.\n\n**Examples:**\n- **ILOVEYOU (2000)** — Email worm, billions of infections.\n- **Conficker (2008)** — Network worm, millions of computers.\n- **Stuxnet (2010)** — Industrial control system worm.\n- **WannaCry (2017)** — Ransomware worm, EternalBlue exploit.\n\n**Diagram:** Refer to the Worms diagram — replication cycle, spread methods, impact.',
    diagram: 'worms',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq26',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is a Trojan horse? Explain the different types of Trojans and their uses.',
    answer:
      '**Trojan Horse Definition:**\nA Trojan horse is a malware that disguises itself as legitimate software to trick users into installing it. Unlike viruses and worms, Trojans do not self-replicate. They rely on user deception to gain access.\n\n**Characteristics:**\n1. **Disguise** — Legitimate software ki tarah dikhta hai.\n2. **No Self-Replication** — Apne aap copy create nahi karta.\n3. **Social Engineering** — Users ko trick karta hai.\n4. **Payload** — Malicious payload contain karta hai.\n\n**Types of Trojans:**\n\n1. **Remote Access Trojan (RAT)**\n- Attackers remote control of victim\'s system.\n- Backdoor access provide karta hai.\n- File access, command execution.\n- Example: DarkComet, Sub7, NetBus.\n\n2. **Banking Trojan**\n- Financial information target karta hai.\n- Banking credentials, credit card numbers steal karta hai.\n- Form grabbing, keylogging.\n- Example: Zeus, SpyEye.\n\n3. **Worm-like Trojan**\n- Trojan + worm capabilities.\n- Email, network through spread karta hai.\n- Example: Paderu.\n\n4. **Backdoor Trojan**\n- System access provide karta hai.\n- Hidden accounts create karta hai.\n- Example: Back Orifice.\n\n5. **Rootkit Trojan**\n- System hide karta hai.\n- Kernel-level stealth.\n- Example: Nebulet.\n\n6. **Spy Trojan**\n- User activity monitor karta hai.\n- Keystrokes, screen capture, webcam.\n- Example: Pegasus.\n\n7. **Adware Trojan**\n- Advertisements display karta hai.\n- Pop-up ads, banner ads.\n- Revenue generation.\n- Example: Zango.\n\n8. **Launcher Trojan**\n- Other malware download aur install karta hai.\n- Dropper ka kaam karta hai.\n- Example: Installers.\n\n9. **Fake Antivirus Trojan**\n- Fake antivirus software dikhta hai.\n- Users ko scare karta hai — fake threats.\n- Purchase Force — money extortion.\n- Example: FakeAV.\n\n10. **Game/App Trojan**\n- Legitimate game/app ki tarah dikhta hai.\n- Malicious payload contain karta hai.\n- Example: Fake Android games.\n\n**Trojan Installation Methods:**\n1. **Freeware** — Free software bundled with Trojan.\n2. **Pirated Software** — Cracked software Trojans contain karta hai.\n3. **Email Attachments** — Fake attachments through spread karta hai.\n4. **Fake Updates** — Fake software updates.\n5. **Malicious Websites** — Drive-by downloads.\n6. **USB Drives** — Auto-run infected drives.\n\n**Diagram:** Refer to the Trojans diagram — disguise → download → install → backdoor flow, types.',
    diagram: 'trojans',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq27',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is a computer virus? Explain the virus lifecycle and different types of viruses.',
    answer:
      '**Computer Virus Definition:**\nA computer virus is a malicious program that attaches itself to a legitimate program or file and replicates when the host program is executed. Viruses spread from one system to another through infected files.\n\n**Virus Characteristics:**\n1. **Host-Dependent** — Host file attach hota hai.\n2. **Self-Replicating** — Jab host run hota hai, virus copy create karta hai.\n3. **Spread Through** — Infected files, removable media, networks.\n4. **Payload** — Damage, data theft, system disruption.\n\n**Virus Lifecycle:**\n\n1. **Creation**\n- Virus code write karna.\n- Assembly language, high-level languages.\n- Example: Virus generators.\n\n2. **Replication**\n- Host file attach karna.\n- Apne aap copy create karna.\n- Other files infect karna.\n\n3. **Installation**\n- System mein install karna.\n- Registry entries modify karna.\n- Auto-start setup karna.\n\n4. **Detection & Evasion**\n- Antivirus detection avoid karna.\n- Obfuscation, polymorphism.\n- Stealth techniques.\n\n5. **Payload Delivery**\n- Malicious activity execute karna.\n- Data destruction, theft, encryption.\n- Example: Ransomware.\n\n6. **Spread**\n- Other systems infect karna.\n- Network shares, email, USB.\n\n**Types of Viruses:**\n\n1. **File Infector Virus**\n- Executable files infect karta hai.\n- .EXE, .COM files modify karta hai.\n- Jab file run hota hai, virus active hota hai.\n- Example: CIH virus.\n\n2. **Partition Table Virus**\n- Hard disk partition table infect karta hai.\n- Boot sector modify karta hai.\n- System boot nahi karta.\n- Example: Stoned virus.\n\n3. **Macro Virus**\n- Microsoft Office documents infect karta hai.\n- Word, Excel macros manipulate karta hai.\n- Documents through spread karta hai.\n- Example: Concept virus.\n\n4. **Multipartite Virus**\n- Multiple infection methods combine karta hai.\n- File infector + boot sector.\n- Hard to remove.\n- Example: Frodo virus.\n\n5. **Polymorphic Virus**\n- Apne code modify karta hai — detect difficult.\n- Encryption, mutation.\n- Antivirus signature change karta hai.\n- Example: 1260 virus.\n\n6. **Encrypted Virus**\n- Virus code encrypt karta hai.\n- Decryption routine payload contain karta hai.\n- Detect difficult hai.\n\n7. **Metamorphic Virus**\n- Full code modify karta hai.\n- Different formats — detect very difficult.\n- Example: W2K/Kak.\n\n8. **Stealth Virus**\n- System se hide karta hai.\n- Antivirus evade karta hai.\n- Example: Hidden partition viruses.\n\n**Virus Effects:**\n1. **Data Destruction** — File corruption, deletion.\n2. **System Slowdown** — CPU, memory consumption.\n3. **Privacy Violation** — Information theft.\n4. **Backdoor** — Remote access.\n5. **Spam** — Email spam spread.\n\n**Diagram:** Refer to the Viruses diagram — lifecycle stages, types, effects.',
    diagram: 'viruses',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq28',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is a backdoor in cyber security? Explain the types of backdoors and why they are dangerous.',
    answer:
      '**Backdoor Definition:**\nA backdoor is a hidden method for bypassing normal authentication or encryption in a computer system. Attackers install backdoors to gain persistent remote access to compromised systems without re-exploiting vulnerabilities.\n\n**Types of Backdoors:**\n\n1. **Remote Access Backdoor**\n- Attacker system mein remote access backdoor install karta hai.\n- Jab bhi attacker system access chahe, backdoor se directly enter kar sakta hai.\n- RAT Trojans iske liye use hote hain.\n- Example: DarkComet, Sub7, NetBus.\n\n2. **Rootkit Backdoor**\n- Rootkit backdoor kernel-level stealth techniques use karta hai.\n- System se hidden rehta hai — OS detect nahi kar paati.\n- Malicious files invisible bana deta hai.\n- Sabse dangerous backdoor type hai.\n- Example: Stuxnet, ZeroAccess.\n\n3. **Account Backdoor**\n- Attacker system mein hidden account create karta hai — admin ya privileged account.\n- Normal users ko pata nahi chalta.\n- Attacker account se asaani se system access hasil karta hai.\n\n4. **Command Injection Backdoor**\n- Attacker application ke input field mein command injection backdoor create karta hai.\n- SQL injection, shell command injection — attacker system commands execute kar sakta hai.\n\n5. **Hardware Backdoor**\n- Hardware level backdoor — motherboard firmware, BIOS modification.\n- Hardware detect karna difficult hai.\n- Example: NSA hardware implants.\n\n**Why Most Dangerous:**\n\n1. **Permanent Access**\n- Backdoor attacker ko permanent system access deta hai.\n- Re-exploitation nahi karna padta — wapas asaani se aa sakta hai.\n\n2. **Authentication Bypass**\n- Normal login process bypass karta hai — no detection.\n\n3. **Invisible Operation**\n- Rootkit backdoor OS level stealth provide karta hai.\n\n4. **Future Attacks**\n- Backdoor future attacks ke liye base banata hai.\n\n5. **Difficult Detection**\n- Backdoors hidden rehte hain — forensic analysis difficult hai.\n\n**Prevention:**\n- Regular system scans aur monitoring.\n- Strong authentication — MFA, strong passwords.\n- Patch management — vulnerabilities fix karo.\n- Network segmentation.\n- Endpoint protection — behavior monitoring.\n\n**Diagram:** Refer to the Backdoors diagram — attack flow, types, prevention.',
    diagram: 'backdoors',
    image: null,
    importance: '⭐⭐⭐',
  },

  {
    id: 'cq29',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'Explain different types of hackers. Differentiate between white hat and black hat hackers.',
    answer:
      '**Types of Hackers:**\n\n1. **White Hat Hackers (Ethical Hackers)**\n- Permission se vulnerabilities find karte hain.\n- Security improve karna chahte hain.\n- Companies ke liye security testing karte hain.\n- Legal aur ethical hai.\n- Example: Penetration testers, security researchers.\n\n2. **Black Hat Hackers (Malicious Hackers)**\n- Illegal access lena chahte hain.\n- Data churana, damage karna.\n- Personal gain, financial benefit ke liye hack karte hain.\n- Illegal hai — jail time, fines.\n- Example: Cybercriminals, attackers.\n\n3. **Grey Hat Hackers**\n- Mixed approach follow karte hain.\n- Permission nahi leta but vulnerabilities report karta hai.\n- Kya legal hai — depends on situation.\n- Example: Hackers who find bugs without permission.\n\n4. **Script Kiddies**\n- Inexperienced hackers.\n- Tools use karte hain without understanding.\n- Limited skills — hacking tools chalate hain.\n- Damage kar sakte hain but expert nahi hote.\n\n5. **Hacktivists**\n- Political motivations ke saath hack karte hain.\n- Government, corporations hack karte hain.\n- Anonymous group, political causes.\n- Example: Anonymous.\n\n6. **State-Sponsored Hackers**\n- Government sponsored hackers.\n- National security targets.\n- Cyber warfare — country-level attacks.\n- Example: APT groups.\n\n**White Hat vs Black Hat:**\n\n| Aspect | White Hat | Black Hat |\n|--------|-----------|----------|\n| Permission | Permission required | No permission |\n| Intent | Help organizations | Harm organizations |\n| Legality | Legal | Illegal |\n| Goal | Security improvement | Personal gain |\n| Tools | Same tools | Same tools |\n| Result | Vulnerabilities fixed | Systems damaged |\n\n**Diagram:** Refer to the Types of Hackers diagram — 6 categories with colors.',
    diagram: 'types-of-hackers',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq30',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'Differentiate between hacking and cracking. What are the different types of cracking activities?',
    answer:
      '**Hacking vs Cracking:**\n\n| Aspect | Hacking | Cracking |\n|--------|---------|----------|\n| Definition | Finding weaknesses | Exploiting weaknesses |\n| Goal | Understand system | Gain access |\n| Permission | With permission | Without permission |\n| Legality | Can be legal | Usually illegal |\n| Examples | Penetration testing | Password cracking |\n\n**Hacking Activities:**\n1. **Penetration Testing** — Authorized security testing.\n2. **Security Research** — System research, vulnerability discovery.\n3. **Code Review** — Source code analysis.\n4. **Surveillance** — Network monitoring.\n\n**Cracking Activities:**\n\n1. **Password Cracking**\n- Passwords break karna.\n- Brute force, dictionary attacks.\n- Unauthorized access.\n- Tools: John the Ripper, Hashcat.\n\n2. **Software Cracking**\n- Software licensing bypass karna.\n- Piracy karna.\n- Protection remove karna.\n- Example: Cracked software.\n\n3. **Jailbreaking**\n- Device restrictions remove karna.\n- Root access lena.\n- System modify karna.\n- Example: iOS jailbreaking.\n\n4. **Exploit Development**\n- Vulnerabilities exploit karna.\n- Malware create karna.\n- System compromise karna.\n\n5. **DRM Bypass**\n- Digital rights management bypass karna.\n- Media protection remove karna.\n\n6. **Serial Key Generation**\n- Software keys generate karna.\n- License bypass karna.\n\n**Key Difference:**\nHacking = vulnerabilities find karna, system understanding karna.\nCracking = unauthorized access lena, passwords break karna, systems exploit karna.\nHacking can be ethical, cracking mostly unethical hai.\n\n**Diagram:** Refer to the Hacking and Cracking diagram — comparison, activities.',
    diagram: 'hacking-and-cracking',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq31',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What are the ethical issues in hacking? How does ethical hacking differ from unethical hacking?',
    answer:
      '**Ethical Issues in Hacking:**\n\n1. **Privacy Violation**\n- Personal data access without consent.\n- Private information exposure.\n- Privacy rights violation.\n\n2. **Unauthorized Access**\n- System access without permission.\n- Breaking security barriers.\n- Trust violation.\n\n3. **Data Theft**\n- Sensitive information steal karna.\n- Financial data, personal info.\n- Identity theft risk.\n\n4. **System Damage**\n- Intentional system harm.\n- Data destruction, service disruption.\n- Financial impact.\n\n5. **Legal Consequences**\n- Jail time, fines, criminal records.\n- Legal action against hackers.\n- Career destruction.\n\n6. **Business Impact**\n- Company reputation damage.\n- Financial losses.\n- Customer trust loss.\n\n**Ethical vs Unethical Hacking:**\n\n| Aspect | Ethical | Unethical |\n|--------|---------|-----------|\n| Permission | With permission | Without permission |\n| Intent | Help organization | Harm organization |\n| Data Access | Authorized only | Unauthorized |\n| Reporting | Vulnerabilities reported | Vulnerabilities hidden |\n| Consent | Consent obtained | No consent |\n| Legality | Legal | Illegal |\n\n**Key Points:**\n- Ethical hacking permission se, reporting karna, consent lena.\n- Unethical hacking permission bina, damage karna, data steal karna.\n- Ethical hacking security improve karta hai.\n- Unethical hacking personal gain karta hai.\n\n**Diagram:** Refer to the Ethical Issues diagram — 5 issues, warning signs.',
    diagram: 'ethical-issues-hacking',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq32',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is ethical hacking? Explain the process and benefits of ethical hacking.',
    answer:
      '**Ethical Hacking Definition:**\nPermission se security testing karna. Vulnerabilities find karna, report karna. Security improve karna. White hat hackers ethical hacking karte hain.\n\n**Ethical Hacking Process:**\n\n1. **Planning**\n- Scope define karna.\n- Rules of engagement set karna.\n- Permission obtain karna.\n\n2. **Scanning**\n- Network scan karna.\n- Vulnerabilities identify karna.\n- Information gather karna.\n\n3. **Gaining Access**\n- Vulnerabilities exploit karna.\n- Access gain karna.\n- Security test karna.\n\n4. **Maintaining Access**\n- Access maintain karna.\n- Persistence test karna.\n- Depth testing karna.\n\n5. **Analysis**\n- Vulnerabilities analyze karna.\n- Impact assess karna.\n- Risk evaluation karna.\n\n6. **Reporting**\n- Findings report karna.\n- Recommendations provide karna.\n- Remediation support karna.\n\n**Benefits of Ethical Hacking:**\n\n1. **Security Improvement**\n- Vulnerabilities identify karna.\n- Security weaknesses fix karna.\n- System protection improve karna.\n\n2. **Attack Prevention**\n- Attacks prevent karna.\n- Security breaches avoid karna.\n- Data protection ensure karna.\n\n3. **Risk Assessment**\n- Risks assess karna.\n- Security posture evaluate karna.\n- Compliance ensure karna.\n\n4. **Vulnerability Discovery**\n- New vulnerabilities find karna.\n- Zero-days discover karna.\n- Security research support karna.\n\n5. **Security Awareness**\n- Security awareness build karna.\n- Best practices promote karna.\n- Culture improve karna.\n\n6. **Compliance**\n- Regulatory requirements meet karna.\n- Security standards follow karna.\n- Audits pass karna.\n\n7. **Cost Saving**\n- Future breaches avoid karna.\n- Financial loss reduce karna.\n\n8. **Customer Trust**\n- Security ensure karna.\n- Trust build karna.\n\n**Ethical vs Malicious Hacking:**\n\n| Aspect | Ethical | Malicious |\n|--------|---------|-----------|\n| Permission | Permission required | No permission |\n| Intent | Help organization | Harm organization |\n| Reporting | Vulnerabilities reported | Vulnerabilities hidden |\n| Data Handling | Authorized only | Unauthorized access |\n| Legality | Legal | Illegal |\n| Goal | Security improvement | Personal gain |\n\n**Diagram:** Refer to the Ethical Hacking diagram — 6-step process, benefits.',
    diagram: 'ethical-hacking',
    image: null,
    importance: '⭐⭐⭐',
  },
// ========================================================
  // Cyber Security Unit 3 — Cyber Forensics
  // ========================================================
  {
    id: 'cq33',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.1',
    question: `Define cyber forensics. Explain its objectives, branches and legal principles.`,
    answer: `**Definition:** Cyber forensics (digital forensics) digital evidence ko scientifically identify, preserve, examine, analyse aur legally present karne ki process hai — taki court ya management us par bharosa kar sake.

**Objectives:**
1. **What happened** — incident reconstruction.
2. **Who did it** — attribution (account, IP, device).
3. **How** — attack vector aur technique.
4. **Impact** — kaunsa data/asset affected.
5. **Evidence** — admissible proof.
6. **Prevention** — root cause aur control improvement.

**Branches:**

| Branch | Kya dekhti hai |
|---|---|
| Computer/disk | files, $MFT, registry, deleted data |
| Memory | RAM processes, keys, malware |
| Network | PCAP, NetFlow, IDS logs |
| Mobile | SQLite, chats, GPS |
| Database | transaction logs, audit trail |
| Cloud/e-mail | provider logs, mailbox headers |

**Principles:**
- **Locard's exchange principle** — har contact ka digital nishaan.
- **Preservation** — write blocker, original untouched.
- **Integrity** — MD5/SHA-256 hash match.
- **Chain of custody** — documented aur signed.
- **Order of volatility** — RAM pehle, disk baad mein (RFC 3227).
- **Reproducibility** — same evidence, same result.

**Legal (India):** IT Act 2000 **Section 65B** certificate, authorised access, privacy compliance (DPDP Act).

**Diagram:** Refer to the Cyber forensics scope aur rules diagram.`,
    diagram: 'cf-intro',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq34',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.1',
    question: `Differentiate cyber forensics from incident response and ethical hacking.`,
    answer: `Teeno security field ke alag kaam hain — goal, timing aur output alag hai.

| Point | Cyber forensics | Incident response | Ethical hacking |
|---|---|---|---|
| Goal | sach sabit karna | attack rokna + recovery | vulnerability dhoondhna |
| Timing | post-incident | incident ke dauraan | proactive |
| Output | court-ready report | contained system + RCA | vulnerability report |
| Evidence | hash + chain of custody | logs, partial | proof-of-concept |
| Legal | IT Act 65B | internal policy | authorisation letter |
| Tools | FTK, Autopsy, Volatility | EDR, SIEM, firewall | Nmap, Burp, Metasploit |

**Kaise saath chalte hain:**
1. IDS/EDR alert → IR team active hoti hai.
2. IR system isolate karti hai, par **memory aur disk preserve** karti hai.
3. Forensic team image/RAM dump leti hai.
4. Forensics timeline aur attribution deti hai.
5. IR recovery karti hai; forensics report likhti hai.

**Exam line:** "IR system bachata hai, forensics sach bachata hai, ethical hacking attack hi hone se pehle rokta hai."

**Diagram:** Refer to the Cyber forensics scope aur rules diagram.`,
    diagram: 'cf-intro',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq35',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.2',
    question: `Explain the cyber forensics investigation process with phases, standards and documentation.`,
    answer: `Investigation ek documented aur repeatable process follow karti hai.

**Phases:**
1. **Identification** — incident detect, scope, legal authority.
2. **Preservation** — scene secure, photography, labels, power policy.
3. **Acquisition** — write blocker se image, RAM dump, network capture, hash.
4. **Examination** — file system, logs, registry, browser, deleted files extract.
5. **Analysis** — timeline, correlation, attacker vs user activity.
6. **Documentation** — contemporaneous notes, tool version, hash, custodian.
7. **Reporting** — findings, methodology, limitations, expert testimony.

**Standards:** NIST SP 800-86 (forensics in IR), ISO/IEC 27037 (evidence handling), RFC 3227 (volatility order), IT Act 65B (certificate).

**Documentation essentials:**

| Item | Example |
|---|---|
| Case/exhibit number | CF-2026-014 / EX-03 |
| Tool + version | FTK Imager 4.7, Volatility 3.2 |
| Hash | SHA-256 of image |
| Custody | collector, recipient, date, seal |

**Golden rules:** original untouched, copy par analysis, hash verify, notes same day, chain of custody unbroken.

**Diagram:** Refer to the Investigation process diagram.`,
    diagram: 'cf-process',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq36',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.2',
    question: `What is the order of volatility? Compare live and dead acquisition.`,
    answer: `**Order of volatility (RFC 3227):** sabse jaldi mitne wala data pehle collect karo.

| Priority | Data |
|---|---|
| 1 | CPU registers, cache, RAM |
| 2 | swap/pagefile, network state |
| 3 | temp files, memory logs |
| 4 | disk (files, $MFT, registry) |
| 5 | remote logs, backups |
| 6 | printouts, archival media |

**Live acquisition:**
- System chal raha hai — RAM, processes, connections, encryption keys.
- Tools: DumpIt, LiME, Volatility, \`netstat\`, EDR telemetry.
- Risk: evidence badal sakta hai, malware dekh sakta hai.
- Best: ransomware, active intrusion, production server.

**Dead/static acquisition:**
- System off ya disk nikaal kar write blocker se image.
- Tools: FTK Imager, EnCase, \`dd\`, Guymager.
- Risk: RAM aur keys kho jaate hain.
- Best: seized laptop/disk, legal seizure.

**Exam line:** "Pehle wo collect karo jo sabse pehle khatam hoga — aur har step ka hash lo."

**Diagram:** Refer to the Investigation process diagram.`,
    diagram: 'cf-process',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq37',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.3',
    question: `Define digital evidence. Explain its types, properties and admissibility criteria.`,
    answer: `**Definition:** Digital evidence koi bhi digital form ka probative data hai — files, metadata, logs, packets, DB rows, memory, e-mail.

**Types:**

| Type | Examples |
|---|---|
| File system | files, $MFT, slack space, deleted entries |
| Metadata | EXIF, document author |
| Logs | Event Log, auth.log, access log |
| Network | PCAP, NetFlow, DNS |
| Database | rows, binlog, audit trail |
| Memory | processes, keys, connections |
| Mobile/cloud | SQLite, audit logs |

**Properties:** latent (tools chahiye), fragile (easily altered), volatile (RAM), duplicable (bit-stream copy), time-sensitive (log rotation), cross-border.

**Admissibility (ACPO):**
1. **Authentic** — source proven (hash, custody).
2. **Complete** — exculpatory bhi.
3. **Reliable** — tested tools, reproducible.
4. **Believable** — defensible findings.
5. **Relevant** — case se juda.
6. **Legally obtained** — warrant/consent.

**India:** Section 65B certificate — device regular use, working condition, normal course of activity.

**Diagram:** Refer to the Digital evidence handling diagram.`,
    diagram: 'cf-evidence',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq38',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.3',
    question: `Explain the handling of digital evidence from seizure to court presentation.`,
    answer: `**Step 1 — Seizure:** device document karo (photo, serial, screen state), seal + label, legal authority check.

**Step 2 — Preservation:** original write-protected, anti-static bag, controlled storage, limited access.

**Step 3 — Acquisition:** write blocker se bit-stream image, RAM dump (volatile first), SHA-256 hash.

**Step 4 — Verification:** image hash original se match, do copies (working + archive).

**Step 5 — Analysis:** sirf copy par kaam, artifacts extract, timeline, notes aur screenshots.

**Step 6 — Documentation:** chain of custody form, hash log, tool versions.

**Step 7 — Presentation:** report + 65B certificate, expert testimony, evidence appendix.

| Stage | Key control |
|---|---|
| Seizure | photo, label, seal |
| Preservation | write blocker, access control |
| Acquisition | hash + verified image |
| Analysis | copy par kaam, notes |
| Report | 65B + expert |

**Common mistakes:** original par kaam karna, hash na lena, headers strip karna, chain of custody mein gap.

**Diagram:** Refer to the Digital evidence handling diagram.`,
    diagram: 'cf-evidence',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq39',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.4',
    question: `Discuss the technical, legal and organisational challenges in cyber forensics with solutions.`,
    answer: `**Technical challenges:**
1. **Encryption** — BitLocker, FileVault, LUKS; key na mile to data inaccessible.
2. **Data volume** — TB-scale disks, millions of log lines.
3. **Anti-forensics** — log clearing, timestomping, secure wipe.
4. **Volatility** — RAM aur connections power off se khatam.
5. **File-less malware** — disk par sample nahi.
6. **Cloud & virtualisation** — provider control, shared tenancy.
7. **Tool limitations** — proprietary formats, OS updates.

**Legal challenges:** privacy (DPDP Act), jurisdiction (MLAT), authorisation, 65B certification, hearsay rule.

**Organisational:** skilled examiner ki kami, high lab cost, case backlog, business pressure.

**Solutions:**

| Challenge | Solution |
|---|---|
| Encryption | RAM se key, TPM escrow, legal compulsion |
| Volume | triage, filters, AI clustering |
| Anti-forensics | SIEM, $UsnJrnl, anomaly detection |
| Volatility | RAM capture first |
| Cloud | legal process, API export |
| Skills | training, open-source tools |

**Diagram:** Refer to the Cyber forensics challenges aur solutions diagram.`,
    diagram: 'cf-challenges',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq40',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.4',
    question: `How does encryption challenge cyber forensics? Explain the counter techniques.`,
    answer: `**Challenges:**
- **Full-disk encryption** — disk image bekaar bina key (BitLocker, LUKS, FileVault).
- **Container/file encryption** — VeraCrypt, password zip, EFS.
- **App-level** — WhatsApp DB, password managers, PGP mail.
- **In transit** — TLS ke baad sirf metadata (SNI, IP, size, timing).
- **Key management** — keys RAM mein ya TPM sealed.
- **Crypto-erasure** — key destroy = data permanently gone.

**Counter techniques:**
1. **Live memory capture** — \`aeskeyfind\`, Volatility ke plugins.
2. **TPM/escrow** — enterprise recovery keys AD/Intune mein.
3. **Legal compulsion** — court order, cooperation.
4. **Side channels** — hiberfil.sys, pagefile, crash dump.
5. **Password recovery** — \`hashcat\`/\`john\` wordlist/brute force.
6. **Cloud cooperation** — provider side key access.
7. **Prevention** — key escrow mandatory policy.

**Limitation:** strong encryption + powered off + no key = practically unbreakable.

**Diagram:** Refer to the Cyber forensics challenges aur solutions diagram.`,
    diagram: 'cf-challenges',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq41',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.5',
    question: `Explain web attack forensics with evidence sources, attack signatures and analysis steps.`,
    answer: `**Definition:** Web attack forensics server/application ke traces se attack reconstruct karta hai.

**Evidence sources:**

| Source | Kya milta hai |
|---|---|
| Access log | IP, time, method, URI, status, UA |
| Error log | 500/403 spikes |
| WAF/proxy | blocked payload, geo-IP |
| App log | login, admin action |
| DB log | injected query, data access |
| auth.log/EDR | shell spawn, cron, new user |

**Signatures:**
1. **SQLi** — \`UNION SELECT\`, \`OR 1=1\`, \`sleep()\`, \`information_schema\`.
2. **XSS** — \`%3Cscript%3E\`, \`onerror=\`.
3. **Traversal/LFI** — \`../../etc/passwd\`.
4. **RFI** — \`?page=http://evil/\`.
5. **Command injection** — \`; whoami\`, \`| id\`.
6. **Upload** — \`.php/.jsp\` + webshell access.
7. **Brute force** — repeated \`401\`/\`302\`.
8. **Scanner** — \`sqlmap\`/\`nikto\` UA.

**Steps:** preserve → URL/base64 decode → timeline → cross-layer correlate → affected accounts/data → IOC + report.

**Diagram:** Refer to the Web attack forensics diagram.`,
    diagram: 'cf-intrusion',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq42',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.5',
    question: `Describe the phases of an intrusion and the evidence each phase leaves behind.`,
    answer: `**1. Reconnaissance** — scanning, directory brute force; evidence: IDS alerts, 404 flood, scanner user-agent.

**2. Exploitation** — SQLi/XSS/LFI/default creds; evidence: access log payload, error log 500, WAF block.

**3. Foothold/webshell** — upload + \`?cmd=\`; evidence: POST upload 200, new file in webroot, later GET requests.

**4. Privilege escalation** — local exploit, sudo misconfig; evidence: auth.log, process creation, \`/etc/passwd\` change.

**5. Persistence** — cron, systemd service, new user, \`authorized_keys\`; evidence: cron log, new files, service registry.

**6. Lateral movement** — SSH/RDP/WinRM, pass-the-hash; evidence: multi-host auth logs, NetFlow, admin shares.

**7. Data access & exfiltration** — DB dump, archive, outbound; evidence: large responses, DB slow log, flow spikes, DNS tunnelling.

**8. Cover-up** — log clear, timestomping; evidence: Event ID 1102, \`$UsnJrnl\` gaps, timestamp mismatch.

**Exam line:** "Har phase ka ek log source hota hai — chain complete hone par narrative ban jaati hai."

**Diagram:** Refer to the Web attack forensics diagram.`,
    diagram: 'cf-intrusion',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq43',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.6',
    question: `What is database forensics? Explain evidence sources and analysis techniques.`,
    answer: `**Definition:** DBMS ke data files aur logs examine karke ye establish karna ki kisne, kab, kya data access/modify/delete kiya.

**Evidence sources:**

| DBMS | Source |
|---|---|
| MySQL | binlog, redo/undo, .ibd pages, general log |
| SQL Server | .ldf transaction log, SQL Server Audit |
| Oracle | redo/archive log, UNDO, Unified Auditing |
| PostgreSQL | WAL, pg_xact, pgaudit |

**Techniques:**
1. **Restore & replay** — backup + \`mysqlbinlog\` se state reconstruct.
2. **Point-in-time recovery** — incident se pehle ki state.
3. **Log mining** — \`mysqlbinlog\`, \`fn_dblog\`, \`LogMiner\`, \`pg_waldump\`.
4. **Page analysis** — deleted rows, unallocated pages (\`DBCC PAGE\`).
5. **Audit correlation** — user + IP + session mapping.
6. **Integrity checks** — \`DBCC CHECKDB\`, checksum, row count.

**Rule:** production par modifying query **nahi** — read-only copy.

**Use:** insider theft, fraud, SQL injection impact, compliance audit.

**Diagram:** Refer to the Database forensics diagram.`,
    diagram: 'cf-database',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq44',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.6',
    question: `Explain the role of transaction logs in database forensics with an example.`,
    answer: `**Transaction log** har change ka record rakhta hai — insert/update/delete/DDL — before-image aur after-image ke saath.

**Types:** MySQL binary log + redo/undo, SQL Server \`.ldf\`, Oracle redo/archive log, PostgreSQL WAL.

**Forensic role:**
1. **Exact modification** — row, column, purani aur nayi value.
2. **Timing** — LSN + timestamp.
3. **Attribution** — audit/session logs ke saath user aur IP.
4. **Recovery** — replay se deleted row wapas.
5. **Point-in-time** — incident se pehle ka state.
6. **Tamper detection** — sequence gap.

**Example:** Attacker ne \`DELETE FROM customers WHERE id=1042\` chalaya. \`mysqlbinlog --base64-output=DECODE-ROWS -v binlog.000017\` se delete event aur before-image milta hai; usi position se row staging DB mein replay ho jaati hai. App log se user/IP aur session ID confirm hote hain.

**Limitations:** short retention, rotation, encrypted/compressed logs, production access risky.

**Best practice:** log shipping, long retention, centralised audit, log file hashing.

**Diagram:** Refer to the Database forensics diagram.`,
    diagram: 'cf-database',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq45',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.7',
    question: `What is preventive forensics? Explain forensic readiness controls and their benefits.`,
    answer: `**Definition:** Preventive forensics (forensic readiness) proactive design hai jisse incident ke baad evidence available, complete aur trustworthy mile.

**Controls:**

| Control | Purpose |
|---|---|
| Centralised logging (SIEM) | local deletion se bachav |
| NTP time sync | timeline correlation |
| Log protection (WORM/signing) | tamper-proof evidence |
| FIM (Tripwire/OSSEC/AIDE) | file change detection |
| EDR/Sysmon | endpoint telemetry |
| NetFlow + selective PCAP | network evidence |
| DB audit (pgaudit) | query-level record |
| Cloud audit export | immutable retention |

**Benefits:**
1. Investigation time aur cost kam.
2. Attacker logs delete kare to bhi central copy safe.
3. Court-ready evidence (hash, custody, 65B).
4. Compliance — PCI DSS 10, ISO 27001 A.8.15, DPDP Act.
5. Fast RCA aur recovery.

**Exam line:** "Bina time sync ke timeline nahi banti — NTP sabse under-rated readiness control hai."

**Diagram:** Refer to the Preventive forensics readiness diagram.`,
    diagram: 'cf-preventive',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq46',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.7',
    question: `Discuss log management for forensic readiness: collection, retention, protection.`,
    answer: `Logs investigation ka backbone hain — par management zaroori hai.

**1. Collection** — firewall, proxy, IDS, VPN, AD, web server, DB, cloud (CloudTrail), EDR ko central SIEM mein bhejo; structured format (JSON/CEF).

**2. Time sync** — sab hosts NTP, timezone UTC normalize.

**3. Retention** — PCI DSS: 1 year total, 3 months immediately available. Practical: proxy 6–12 months, auth 12 months, DB audit 12 months, PCAP 7–30 days, cloud audit 12 months+.

**4. Protection** — WORM/immutable storage, log signing, separate VLAN/account, no delete rights, offsite copy, encryption at rest.

**5. Monitoring** — correlation rules, FIM alerts, clock drift aur log-gap alerts.

**6. Governance** — logging policy, retention schedule, legal hold, PII masking (DPDP/GDPR).

**Result:** "logs hi nahi hain" situation khatam, timeline minutes mein, evidence admissible.

**Diagram:** Refer to the Preventive forensics readiness diagram.`,
    diagram: 'cf-preventive',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq47',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.8',
    question: `What is anti-forensics? Explain its categories with examples.`,
    answer: `**Definition:** Anti-forensics wo techniques hain jo evidence ko destroy, hide ya mislead karti hain.

**1. Data destruction**
- \`sdelete -p 3\`, \`shred -u\`, \`cipher /w:C:\`, DBAN.
- Media destroy, crypto-erase (key delete).

**2. Data hiding**
- Encryption: BitLocker, VeraCrypt, password zip.
- Steganography: \`steghide\`, OpenStego.
- NTFS ADS: \`type secret > file.txt:hidden\`.
- Hidden partitions, slack space.

**3. Trail obfuscation**
- Log clear: \`wevtutil cl\` (Event 1102).
- Log injection, timestomping.
- Tor, VPN chain, MAC spoofing.

**4. Artefact alteration**
- Registry tamper, extension change, packing (UPX), obfuscation.

**5. Anti-analysis evasion**
- VM/sandbox/debugger detection, sleep timers, rootkits.

**6. Living off the land** — \`certutil\`, \`bitsadmin\`, \`wmic\`.

**Note:** har technique ka counter-artifact hota hai; evidence destruction khud offence hai.

**Diagram:** Refer to the Anti-forensics practices diagram.`,
    diagram: 'cf-antiforensics',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq48',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.8',
    question: `Explain timestomping, log clearing and data hiding techniques with their detection.`,
    answer: `**Timestomping:** file ke MACB timestamps badalna taaki malware purana lage (\`timestomp\`, \`SetFileTime\`).

**Detection:**
1. \`$STANDARD_INFORMATION\` vs \`$FILE_NAME\` mismatch.
2. \`$UsnJrnl\` mein recent write record.
3. \`$LogFile\` transaction anomaly.
4. Prefetch/shimcache execution time contradiction.

**Log clearing:** \`wevtutil cl\`, \`Clear-EventLog\`, \`/var/log\` truncate.

**Detection:**
1. **Event ID 1102 / 104** — log cleared.
2. Sequence gap, missing time window.
3. Central SIEM copy intact.
4. \`$UsnJrnl\` mein \`.evtx\` deletion record.
5. WORM storage delete attempt log.

**Data hiding:**
- **Encryption** — key RAM mein; counter: memory capture, escrow, cracking.
- **Steganography** — LSB payload; counter: \`zsteg\`, chi-square, entropy check.
- **ADS** — \`dir /r\`, \`Get-Item -Stream *\`, Autopsy.

**Legal:** evidence destruction par court **adverse inference** le sakti hai.

**Diagram:** Refer to the Anti-forensics practices diagram.`,
    diagram: 'cf-antiforensics',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq49',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.9',
    question: `Explain anti-forensics detection techniques in detail.`,
    answer: `**Goal:** prove karna ki evidence jaan-boojh kar mitaya ya badla gaya.

**1. Independent sources** — SIEM/syslog, proxy, WAF, IDS, VPN, cloud audit, EDR.

**2. Filesystem journals** — \`$MFT\`, \`$LogFile\`, \`$UsnJrnl\`, \`$Bitmap\`, ext4 journal, prefetch/shimcache.

**3. Timeline anomalies** — gaps, duplicate/future timestamps, clock skew, created > modified.

**4. Entropy/content** — \`binwalk -E\`, \`ent\`, \`zsteg\` (stego).

**5. Hash baseline** — Tripwire/AIDE known-good hash, imphash, \`ssdeep\`.

**6. Toolmarks** — wiper/timestomper/packer artifacts, YARA rules.

**7. Memory analysis** — Volatility \`pslist\` vs \`psscan\`, \`malfind\`, \`netscan\`.

**8. Behaviour analytics** — EDR process lineage, SIEM correlation, volume anomaly.

**9. Documentation** — negative finding bhi evidence ("expected log absent, Event 1102 present").

**Exam line:** "Attacker ek jagah chhupata hai, doosri jagah reh jaata hai."

**Diagram:** Refer to the Anti-forensics detection diagram.`,
    diagram: 'cf-afdetect',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq50',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.9',
    question: `How are log tampering and timestomping detected using NTFS artefacts?`,
    answer: `**NTFS do timestamp sets rakhta hai — yahi detection ki chaabi hai.**

**Timestomping detection:**
1. **\`$STANDARD_INFORMATION\`** user-mode API se badalta hai.
2. **\`$FILE_NAME\`** kernel-level, badalna mushkil — mismatch = tampering.
3. **\`$UsnJrnl\`** recent write record (file "2019 ki" dikhe par write kal ka ho).
4. **\`$LogFile\`** transaction sequence.
5. **Prefetch/shimcache/amcache** execution time.
6. **Logical checks** — future date, OS install se pehle ka timestamp.

**Log tampering detection:**
1. **Event ID 1102** ("audit log was cleared") / 104.
2. **Sequence gap** aur missing window.
3. **\`$UsnJrnl\`/\`$LogFile\`** mein \`.evtx\` delete record.
4. **Prefetch** mein \`wevtutil.exe\` execution.
5. **SIEM copy** intact — local clear ka asar nahi.
6. **WORM storage** — delete attempt logged.

**Report:** tampering ko alag finding likho; court adverse inference le sakti hai.

**Diagram:** Refer to the Anti-forensics detection diagram.`,
    diagram: 'cf-afdetect',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq51',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.10',
    question: `Explain the types of network forensics analysis tools with examples.`,
    answer: `**1. Packet capture** — tcpdump, dumpcap (BPF filters, ring buffer).

**2. Deep analysis** — Wireshark/tshark (decode, follow stream, export objects), NetworkMiner (passive reassembly).

**3. Flow analysis** — NetFlow/IPFIX/sFlow with nfdump, SiLK, ElastiFlow.

**4. Metadata/IDS** — Zeek (\`conn\`, \`http\`, \`dns\`, \`ssl\`, \`files\`), Snort/Suricata.

**5. Platform** — Arkime (indexed PCAP), ntopng, Security Onion (Zeek + Suricata + Elastic).

**6. Supporting** — \`capinfos\`, \`editcap\`, \`mergecap\`, \`tcpreplay\`, Scapy.

| Type | Strength | Limitation |
|---|---|---|
| Full PCAP | poora payload | storage heavy, TLS ke baad content nahi |
| Flow | scale, trend | content nahi |
| Metadata logs | searchable evidence | sirf metadata |

**Encryption era:** SNI, DNS, JA3, flow size aur timing par focus.

**Diagram:** Refer to the Network forensics toolchain diagram.`,
    diagram: 'cf-netools',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq52',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.10',
    question: `How do you detect DNS tunnelling and data exfiltration using network evidence?`,
    answer: `**DNS tunnelling:** data DNS queries mein chhupa kar bhejna (port 53 generally allowed).

**Detection signals:**
1. Long, high-entropy subdomains (\`aGVsbG8.evil.com\`).
2. High query volume from one host to one domain.
3. Unusual record types — TXT, NULL, CNAME chains.
4. Bade TXT responses.
5. Zeek \`dns.log\` — \`qtype_name\`, \`query_length\`, unique domain count.
6. Regular beacon interval, DGA names, low TTL.

**Exfiltration detection:**
- Flow volume outbound >> baseline (\`nfdump\` top talkers).
- Off-hours transfer to unusual geo-IP.
- HTTP POST to raw IP, SCP/FTP to unknown host, ICMP payloads.
- Archive signatures (\`PK\`, \`Rar!\`) in HTTP streams.
- Large TLS sessions with unknown SNI/JA3.
- EDR file-read burst + network upload correlation.

**Tools:** Zeek, Suricata DNS rules, \`tshark\` filters, passivedns, Arkime.

**Response:** block domain/IP, sinkhole, capture more PCAP, quantify data, preserve evidence.

**Diagram:** Refer to the Network forensics toolchain diagram.`,
    diagram: 'cf-netools',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq53',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.11',
    question: `Explain malware types with their behaviour and forensic artifacts.`,
    answer: `| Type | Behaviour | Artifact |
|---|---|---|
| Virus | host file infect, user action | infected hash, $MFT change |
| Worm | self-propagate SMB/RDP | 445/3389 scan traffic |
| Trojan | disguise + backdoor | unsigned exe, Run key |
| Ransomware | mass encrypt + note | \`.locked\`, vssadmin delete |
| Spyware/keylogger | capture + exfil | small periodic HTTP POST |
| Rootkit | hide + hook | pslist vs psscan diff |
| Botnet | C2 polling | regular beacon, DGA |
| Fileless | memory only | encoded PowerShell, malfind |

**Hybrid examples:** WannaCry (worm + ransomware), Emotet (trojan + botnet).

**Why classification matters:**
1. **Containment** — worm ke liye segmentation, trojan ke liye user awareness.
2. **Scope** — network-wide vs few hosts.
3. **IOC hunting** — family ke known indicators.
4. **Root cause** — missing patch vs phishing.
5. **Reporting** — impact clearly describe hota hai.

**Diagram:** Refer to the Malware types behaviour map diagram.`,
    diagram: 'cf-malware',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq54',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.11',
    question: `How is a ransomware incident investigated end to end?`,
    answer: `**Step 1 — Containment without losing evidence:** network isolate (EDR/VLAN), machine **off/reboot na karo** — RAM mein keys ho sakti hain.

**Step 2 — Live response:** RAM dump, connections (\`netscan\`), running processes.

**Step 3 — Family & entry point:** ransom note, extension, hash → ID Ransomware/VirusTotal; entry via VPN log, phishing header, RDP.

**Step 4 — Scope:** SIEM/EDR se affected hosts, encryption start time, lateral movement; \`$UsnJrnl\` se mass rename; shadow copy delete events.

**Step 5 — Data theft:** outbound volume, archive creation, cloud-sync logs.

**Step 6 — Recovery:** immutable backup restore, clean rebuild, credential rotation, IOC block, decryptor check (No More Ransom).

**Step 7 — Report:** timeline, IOC, impact, root cause, 65B certificate, lessons learned.

**Evidence checklist:** RAM image, disk image, ransom note, EDR logs, firewall/VPN logs, backup catalog.

**Diagram:** Refer to the Malware types behaviour map diagram.`,
    diagram: 'cf-malware',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq55',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.12',
    question: `Explain static, dynamic and memory-based malware analysis with tools.`,
    answer: `**1. Static analysis (sample nahi chalta):**
- Hash → \`sha256sum\`, VirusTotal.
- File type → \`file\`, TrID, PEStudio, DIE.
- Strings → \`strings -n 8\` (URLs, mutex, APIs).
- PE structure → imports (\`VirtualAllocEx\`), entropy, packer.
- Disassembly → Ghidra, IDA Pro, dnSpy.
- Signatures → YARA, CAPA, imphash.

**2. Dynamic analysis (isolated VM):**
- Procmon (file/registry/process), Process Explorer, Regshot, API Monitor.
- Wireshark/FakeNet-NG/INetSim (C2 aur download).
- Sandbox: Cuckoo/CAPE, ANY.RUN, Joe Sandbox.

**3. Memory analysis:**
- Volatility 3 — \`pslist\`, \`psscan\`, \`malfind\`, \`netscan\`.

| Approach | Strength | Weakness |
|---|---|---|
| Static | safe, fast | packing/obfuscation |
| Dynamic | real behaviour | evasive malware |
| Memory | fileless + injection | capture timing |

**Output:** capabilities, persistence, C2, dropped files, hashes, YARA/Sigma rules.

**Diagram:** Refer to the Malware analysis workflow diagram.`,
    diagram: 'cf-malanalysis',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq56',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.12',
    question: `Describe the malware analysis lab setup, safety precautions and the use of YARA.`,
    answer: `**Lab setup:**
1. Analysis host with snapshots.
2. Windows + Linux VMs, Sysmon/Procmon installed.
3. **Host-only network** + INetSim/FakeNet-NG (no bridge).
4. Tool VMs: REMnux, FlareVM, Ghidra/IDA/YARA.
5. Separate evidence drive, password-protected archives (\`infected\`).

**Safety:**
- No real credentials/production network.
- Snapshot before every run; restore after.
- Egress blocked, USB/clipboard/file-share off.
- Hash + chain of custody, notes aur tool versions.

**YARA:**
\`\`\`yara
rule Example_Ransom {
  strings:
    $a = "vssadmin delete shadows" ascii wide
  condition:
    uint16(0) == 0x5A4D and all of ($a)
}
\`\`\`
- \`meta\` (description), \`strings\` (text/hex/regex), \`condition\` (logic).
- Use: file/ memory scan (\`-r\`, Volatility \`yarascan\`), EDR/SIEM detection, retro-hunt, IOC blocking.

**Diagram:** Refer to the Malware analysis workflow diagram.`,
    diagram: 'cf-malanalysis',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq57',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.13',
    question: `Explain e-mail protocols and their forensic significance.`,
    answer: `| Protocol | Purpose | Ports | Forensic value |
|---|---|---|---|
| SMTP | send/relay | 25, 587, 465 | server logs, queue, relay IP |
| POP3 | download | 110, 995 | local PST/MBOX |
| IMAP | server sync | 143, 993 | mailbox + login audit logs |
| DNS MX | server locate | 53 | domain verification |
| HTTPS webmail | webmail access | 443 | webmail audit, originating IP |
| LDAP/AD | directory | 389, 636 | user attribution |

**SMTP:** submission aur relay; har hop \`Received\` header likhta hai.

**POP3:** download + often delete; evidence local machine par.

**IMAP:** mailbox server par; provider ke paas messages aur login logs — strongest source.

**Investigation implications:** path trace, attribution (login IP), content (mailbox export), authenticity (SPF/DKIM/DMARC).

**Diagram:** Refer to the E-mail flow aur header chain diagram.`,
    diagram: 'cf-email',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq58',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.13',
    question: `Explain the structure of an e-mail header and how to analyse it forensically.`,
    answer: `**Structure:** headers + body + MIME attachments.

| Header | Meaning |
|---|---|
| Received | har hop ka IP + timestamp |
| Message-ID | originating system |
| Return-Path | envelope sender |
| From/Reply-To | visible sender (spoof ho sakta) |
| Date | sending time + timezone |
| X-Mailer | client/script |
| Authentication-Results | SPF/DKIM/DMARC |
| X-Originating-IP | webmail sender IP |

**Analysis steps:**
1. **Raw source** export (\`.eml\`, "Show original") — forward na karo.
2. **Received chain neeche se upar** — originating server/IP.
3. **Delays** — consecutive timestamps ka gap.
4. **Spoof check** — Return-Path vs From, Message-ID domain, SPF/DKIM/DMARC fail.
5. **Client ID** — X-Mailer (PHPMailer = scripted bulk).
6. **Attachments** — hash, type, password-protected zip.
7. **Correlate** — MTA log queue ID, geo-IP, abuse history.

**Diagram:** Refer to the E-mail flow aur header chain diagram.`,
    diagram: 'cf-email',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq59',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.14',
    question: `Explain the types of e-mail crimes with investigation approach.`,
    answer: `**1. Phishing/spear-phishing** — fake login page; investigate URL/domain, sandbox, victim click time.

**2. Spoofing** — forged From; investigate header chain, IP, SPF/DKIM/DMARC.

**3. BEC** — executive/vendor impersonation; investigate mailbox login logs, hidden forwarding rule, OAuth grant, bank records.

**4. Malware distribution** — weaponised attachment; hash → sandbox → C2 extraction.

**5. Spam/bulk** — volume, bulk mailer headers, blocklists.

**6. Mail bombing/DoS** — rate anomaly, source distribution.

**7. Stalking/harassment** — header IP, content, provider request.

**8. Identity theft/data leakage** — DLP logs, forwarding rules, cloud sync.

**Legal (India):** IT Act **66**, **66C**, **66D**, BNS cheating/forgery, evidence via **65B**.

**Diagram:** Refer to the E-mail crime investigation flow diagram.`,
    diagram: 'cf-emailcrime',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq60',
    unit: '3',
    subjectId: 'cyber-security',
    topicNumber: '3.14',
    question: `How is a phishing e-mail investigated? Explain header and infrastructure analysis.`,
    answer: `**Step 1 — Preserve:** raw \`.eml\`, SHA-256 hash, screenshots, recipient list.

**Step 2 — Header analysis:**
- Received chain neeche se upar (originating IP, relays, delays).
- From vs Return-Path mismatch.
- Message-ID domain.
- \`Authentication-Results: spf=fail dkim=none dmarc=fail\`.
- X-Mailer (bulk script).

**Step 3 — IP & domain intelligence:** geo-IP, ASN, reputation, VPN/proxy; WHOIS age, lookalike domain, MX, SSL certificate.

**Step 4 — URL & content:** anchor vs href, shortener expansion, sandbox detonation, branding mismatch, urgent language.

**Step 5 — Victim correlation:** proxy log click time, credential entry, account takeover signs, MFA events.

**Step 6 — Attribution & impact:** kitne users, kitne clicks, kaunsa account, financial/data loss.

**Step 7 — Response & report:** block sender/domain/URL, password reset, MFA, awareness mail, IOC + 65B report.

**Diagram:** Refer to the E-mail crime investigation flow diagram.`,
    diagram: 'cf-emailcrime',
    image: null,
    importance: '⭐⭐⭐',
  },
// ========================================================
  // Cyber Security Unit 4 — Digital Forensics
  // ========================================================
  {
    id: 'cq61',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.1',
    question: `Define digital forensics and explain its objectives, branches and evolution.`,
    answer: `**Definition:** Digital forensics digital evidence ko scientifically identify, collect, preserve, examine, analyse aur report karne ki discipline hai — taki court ya formal process us par bharosa kar sake.

**Objectives:**
1. **Reconstruct** — kya hua, kab, kaise.
2. **Attribute** — kisne kiya (user/device/IP).
3. **Prove** — admissible evidence (hash + custody + 65B).
4. **Exonerate** — nirdosh ko bachana.
5. **Root cause + prevention** — control fail kyun hua.

**Branches:**

| Branch | Focus |
|---|---|
| Disk | file system, registry, deleted data |
| Network | PCAP, flow, logs |
| Mobile | extraction, SQLite, GPS |
| Memory | processes, keys, injection |
| Cloud | audit logs, tenant export |
| Database/e-mail | transaction logs, headers |
| IoT/vehicle | device logs, telematics |

**Evolution:**
- **1980s:** computer forensics, standalone PCs.
- **1990s:** network/internet cases, IOCE, ACPO guide.
- **2000s:** NIST SP 800-86, ISO 27037, NIST CFTT, ISO 17025.
- **2010s:** mobile, memory, cloud, IoT.
- **2020s:** automation, AI triage, remote acquisition, DFIR platforms.

**Rules:** original untouched, hash integrity, chain of custody, documentation, reproducibility, legality.

**Diagram:** Refer to the Digital forensics — scope, history aur rules diagram.`,
    diagram: 'df-intro',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq62',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.1',
    question: `Explain the digital forensics process and mention the standards used at each stage.`,
    answer: `**Process (NIST SP 800-86 / ISO 27037 aligned):**

| Stage | Kya hota hai | Standard / control |
|---|---|---|
| Identification | incident, scope, authority | ISO 27037, 27043 |
| Preservation | write block, seal, Faraday | ISO 27037 |
| Acquisition | image, RAM, mobile extraction, hash | NIST CFTT tools |
| Examination | artefacts extract | ISO 27042 |
| Analysis | timeline, correlation | ISO 27042 |
| Documentation | notes, tool versions, custody | ISO 17025 |
| Reporting | findings + testimony | 65B, Daubert |

**Kaun se standards kya kehte hain:**
- **NIST SP 800-86** — forensics ko incident response mein integrate karna.
- **ISO/IEC 27037** — evidence identify/collect/acquire/preserve.
- **ISO/IEC 27041/27042/27043** — method assurance, analysis, process.
- **ISO/IEC 17025** — lab competence.
- **RFC 3227** — order of volatility.
- **IT Act 2000 s.65B** — electronic record certificate.

**Golden thread:** har stage ka output next stage ka input hai — aur har stage documented.

**Diagram:** Refer to the Digital forensics — scope, history aur rules diagram.`,
    diagram: 'df-intro',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq63',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.2',
    question: `Differentiate cyber forensics and digital forensics with examples.`,
    answer: `**Cyber forensics:** sirf cyber offences par lagne wala branch. **Digital forensics:** umbrella discipline — kisi bhi digital device/data ka examination.

| Point | Cyber forensics | Digital forensics |
|---|---|---|
| Scope | cybercrime | all digital evidence |
| Crime | hacking, malware, phishing, breach | fraud, HR, civil, accident, tax |
| Evidence | logs, PCAP, malware, web/DB | disk, mobile, media, IoT, e-discovery |
| Law | IT Act 66/66C/66D + BNS | Evidence/BSA law + civil + IT Act 65B |
| Stakeholder | cyber cell, CERT-In, SOC | police, civil court, HR, insurance |
| Tools | Zeek, Wireshark, Volatility, YARA | EnCase, FTK, Autopsy, Cellebrite, Axiom |
| Output | cybercrime report | court/disciplinary report |

**Examples:**
- **Cyber forensic:** server intrusion — access log, webshell, C2 beacon.
- **Digital forensic (non-cyber):** accident case mein vehicle ECU speed data.

**Common:** methodology, tools, hashing, chain of custody, ISO 27037, 65B.

**Exam line:** "Har cyber forensic investigation digital forensics hai, par ulta zaroori nahi."

**Diagram:** Refer to the Cyber forensics vs digital forensics — scope map diagram.`,
    diagram: 'df-vs-cyber',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq64',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.2',
    question: `Explain the role of digital forensics in civil, corporate and non-cyber investigations.`,
    answer: `Digital forensics jahan bhi digital data evidence ban sakta hai, wahan lagti hai.

**1. Corporate disciplinary / HR**
- Data exfiltration (USB history, cloud sync), policy violation, harassment mails.
- Output: HR action ke liye report.

**2. Civil disputes and e-discovery**
- Contract mails, document versions, IP theft, vendor dispute.
- Metadata (author, revision) aur timeline decisive.

**3. Fraud and financial investigation**
- Fake invoices, manipulated spreadsheets, benami accounts.
- File ka edit history + mail trail.

**4. Insurance and accident**
- Vehicle ECU/infotainment, dashcam, GPS, phone location.
- Speed/brake data se claim verify.

**5. Missing person / death investigation**
- CDR, GPS, social media, CCTV DVR recovery.

**6. Regulatory and compliance**
- Access logs, retention proof, DPDP/privacy compliance evidence.

**Cherry on top:** in cases mein malware ya network attack involved nahi hota — focus **artefact + timeline + authorisation** par hota hai.

**Diagram:** Refer to the Cyber forensics vs digital forensics — scope map diagram.`,
    diagram: 'df-vs-cyber',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq65',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.3',
    question: `Explain the roles of personnel involved in a digital forensic investigation.`,
    answer: `Forensic investigation team effort hai — har role ka defined kaam.

| Role | Responsibility |
|---|---|
| First responder | scene secure, device state document, volatile data preserve, seal |
| Forensic examiner | image acquire, artefacts examine, timeline, report |
| Lab / quality manager | SOP, ISO 17025 accreditation, competency, audits |
| Incident responder | attack contain + evidence preserve |
| Legal counsel | scope, authorisation, admissibility |
| Expert witness | court testimony, cross-examination |
| Evidence custodian | chain of custody, storage log, access control |

**Separation of duties:** examiner aur custodian alag — tampering ka risk kam, independence bani rehti hai.

**Skills required:** file systems, OS internals, network, mobile, law, report writing, testimony.

**Documentation:** har role apna action record kare — date/time, kya kiya, tool version — reproducibility ke liye.

**Diagram:** Refer to the Forensic roles aur lab environment diagram.`,
    diagram: 'df-role',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq66',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.3',
    question: `Describe the laboratory environment required for digital forensics.`,
    answer: `Environment evidence ko **defensible** banata hai.

**1. Physical**
- Controlled access, CCTV, visitor log, locked evidence room.
- Fire/flood protection, ESD-safe area, Faraday bags.

**2. Technical**
- Dedicated forensic workstations + **hardware write blockers**.
- Imaging + hashing tools; isolated analysis network (production se koi path nahi).
- Malware lab: snapshot VMs, host-only network, INetSim.

**3. Evidence storage**
- Sealed, tagged, air-gapped/encrypted, access log, retention policy.

**4. Quality**
- SOP, tool validation records (NIST CFTT), competency, proficiency testing.
- **ISO/IEC 17025** accreditation, internal audits.

**5. Legal/ethical**
- Authorisation, privacy (DPDP), impartiality, confidentiality, 65B process.

**6. Organisational**
- Budget, trained staff, escalation path, legal hold.

**Common failures:** shared analyst laptops, internet-connected analysis machines, unsealed evidence.

**Diagram:** Refer to the Forensic roles aur lab environment diagram.`,
    diagram: 'df-role',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq67',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.4',
    question: `Explain forensic hardware with examples and its importance.`,
    answer: `Forensic hardware evidence ko bina badle padhne ke liye zaroori hai.

1. **Write blocker** — read-only access; hardware blockers (Tableau, CRU, WiebeTech) courtroom preferred, software blockers OS-dependent.
2. **Forensic duplicator** — parallel cloning with built-in hash (Logicube, Tableau TD3).
3. **Forensic workstation** — high RAM/CPU, dedicated write-blocked ports, sirf forensic tools.
4. **Mobile extraction kit** — Cellebrite UFED, Oxygen, Magnet; logical/file-system/physical extraction.
5. **Faraday bag/shield** — mobile ko network se isolate (remote wipe se bachav).
6. **ESD protection** — mat, wrist strap, anti-static bags.
7. **Verified blank media + tamper-evident seals.**
8. **Hash/verification devices** — SHA-256/MD5 checks.

**Importance:**
- Integrity + authenticity (original unchanged).
- Hash validation possible.
- Court defensibility ("process ne data modify nahi kiya").
- Metadata safety (\`$LogFile\`, access time).

**Document:** serial number, firmware version, use time — chain of custody ka hissa.

**Diagram:** Refer to the Forensic software aur hardware stack diagram.`,
    diagram: 'df-hw-sw',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq68',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.4',
    question: `Explain forensic software categories, container formats and tool selection criteria.`,
    answer: `**Categories:**

| Category | Purpose | Examples |
|---|---|---|
| Imaging | image + hash | FTK Imager, EnCase, Guymager, dd |
| Suites | artefact + report | Autopsy, FTK, X-Ways, Nuix |
| Memory | RAM analysis | Volatility 3, Rekall, DumpIt |
| Timeline | super-timeline | Plaso, Timesketch |
| Network | PCAP/flow | Wireshark, Zeek, NetworkMiner |
| Recovery | deleted data | PhotoRec, Scalpel, TestDisk |
| Malware | static/dynamic | Ghidra, IDA, CAPA, YARA |

**Container formats:**
- **E01** — compression + metadata + embedded hash (widely accepted).
- **AFF4** — open, scalable, cloud-friendly.
- **raw/dd** — simple, no metadata (hash separately).
- **L01** — logical evidence file.

**Selection criteria:**
1. Validated (NIST CFTT report / internal test).
2. Licensed and legally usable.
3. Supports required file systems, devices, formats.
4. Hashing + audit log + read-only enforcement.
5. Reproducible output.
6. Court-friendly reporting.
7. Cost, training, support.

**Diagram:** Refer to the Forensic software aur hardware stack diagram.`,
    diagram: 'df-hw-sw',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq69',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.5',
    question: `Explain the technical properties of digital evidence.`,
    answer: `Technical properties evidence ke behaviour ko describe karti hain.

1. **Latent** — naked eye se nahi dikhti; tools se interpret (hex, parsers).
2. **Fragile** — ek mount/boot/write se timestamps aur journals badal jaate hain.
3. **Volatile** — RAM, swap, network state, encryption keys; power off = gone.
4. **Duplicable** — bit-stream image exact copy; original sealed reh sakta hai.
5. **Voluminous** — TB-scale data, millions of events; triage zaroori.
6. **Time-sensitive** — log rotation, overwrite, retention expiry.
7. **Trans-border** — cloud data doosre jurisdiction mein.

**Implications:**
- Fragile → write blocker + image.
- Volatile → order of volatility (RAM first).
- Duplicable → original preserved, copy par analysis.
- Voluminous → hash sets + filters.
- Time-sensitive → immediate collection + retention policy.
- Trans-border → legal process / MLAT.

**Exam line:** "Har property ek control demand karti hai — property aur control ki jodi yaad rakho."

**Diagram:** Refer to the Properties of digital evidence diagram.`,
    diagram: 'df-properties',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq70',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.5',
    question: `Explain the evidentiary properties of digital evidence and how each is proved.`,
    answer: `Evidentiary properties decide karti hain ki evidence court mein kitni usable hai (ISO/IEC 27037).

| Property | Meaning | Kaise prove |
|---|---|---|
| Accuracy | data sahi capture | validated tools, no truncation |
| Availability | evidence available rahe | preservation + indexing |
| Completeness | poora relevant data | full image, exculpatory search |
| Granularity | detail level | raw image + carving |
| Reliability | process sound + repeatable | SOP + peer review |
| Authenticity | source verified | hash, serial, logs, custody |
| Integrity | unchanged | hash match, write blocker |
| Relevance | case se juda | case theory linkage |
| Legality | authorised | warrant/consent, privacy |

**Proof toolkit:** SHA-256 hash at acquisition + verification, chain of custody form, write-blocker log, sealed exhibits, validated tool reports, 65B certificate.

**Kyun important:** defence inhi properties par attack karti hai — ek weak property poore case ko challenge kar deti hai.

**Diagram:** Refer to the Properties of digital evidence diagram.`,
    diagram: 'df-properties',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq71',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.6',
    question: `Explain the methods used to recover deleted digital evidence.`,
    answer: `Deleted data file system ke behaviour par depend karta hai.

1. **Metadata-based recovery** — NTFS \`$MFT\` "not in use", FAT \`E5\` entry, ext4 inode link count 0. Tools: Autopsy, FTK, TestDisk.
2. **File carving** — header/footer signature se rebuild (\`%PDF\`, \`PK\`, JFIF). Tools: PhotoRec, Scalpel, Foremost.
3. **Unallocated and slack space** — free clusters + last block waste.
4. **Recycle bin/trash** — \`$Recycle.Bin\`, \`~/.local/share/Trash\`.
5. **Shadow copies/snapshots** — VSS, APFS, LVM.
6. **Database log replay** — binlog/WAL/redo.
7. **Memory carving** — RAM dump se in-memory files/keys.
8. **Backup/log restore** — SIEM, backup catalog.

**Limitations:** SSD TRIM, encryption, secure wipe, overwrite, physical damage.

**Rule:** recovery copy par karo, original untouched; har attempt document karo; fail hone par alternative evidence dhoondho.

**Diagram:** Refer to the Recovering aur preserving digital evidence diagram.`,
    diagram: 'df-recover',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq72',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.6',
    question: `Explain how digital evidence is preserved from seizure to court.`,
    answer: `**1. Seizure:** document device state (photo, serial, screen), seal + label, authority check.
**2. Power decision:** running system → RAM first; warna power off + image.
**3. Write protection:** hardware write blocker; original kabhi mount na karo; mobile Faraday mein.
**4. Acquisition:** bit-stream image (E01/AFF4) + SHA-256; verification hash match.
**5. Copies:** working + archive, alag locations, both sealed.
**6. Storage:** controlled temperature/humidity, ESD-safe, locked room, access log.
**7. Chain of custody:** har transfer signed (from, to, date, time, seal status).
**8. Legal controls:** legal hold, authorisation, privacy, 65B certificate.
**9. Documentation:** notes, tool versions, hash log, photographs.
**10. Disposal:** retention ke baad authorised disposal, recorded.

**Common mistakes:** original par kaam, hash na lena, unsealed storage, custody gap.

**Diagram:** Refer to the Recovering aur preserving digital evidence diagram.`,
    diagram: 'df-recover',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq73',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.7',
    question: `Explain the categories of advanced forensic tools with examples.`,
    answer: `| Category | Purpose | Examples |
|---|---|---|
| Commercial suites | disk + review + report | EnCase, FTK, X-Ways, Nuix, Belkasoft |
| Mobile | extraction + app parsing | Cellebrite UFED/PA, AXIOM, Oxygen |
| Memory | RAM analysis | Volatility 3, Rekall, WinPmem |
| Timeline/triage | super-timeline, endpoints | Plaso, Timesketch, KAPE, Velociraptor |
| Network | PCAP/flow | Zeek, Wireshark, Arkime |
| Carving | deleted/embedded | bulk_extractor, PhotoRec |
| Cloud | SaaS/IaaS | AXIOM Cloud, Cellebrite Cloud, CloudTrail |
| Malware/AI | analysis + triage | Ghidra, CAPA, YARA, ML review |

**Advanced capabilities:** multi-source ingestion, super-timeline, hash-set de-duplication, entity/link analysis, keyword/regex/YARA search, ML triage, collaboration, audit logs.

**Rule:** validated (NIST CFTT), licensed, version documented, reproducible.

**Diagram:** Refer to the Advanced forensic tools — capability map diagram.`,
    diagram: 'df-tools',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq74',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.7',
    question: `Compare commercial and open-source forensic tools and explain when to use each.`,
    answer: `| Point | Commercial | Open source |
|---|---|---|
| Examples | EnCase, FTK, X-Ways, Nuix, AXIOM | Autopsy, Volatility, Plaso, Zeek, Ghidra |
| Cost | high licence | free |
| Support | vendor + training | community |
| Court acceptance | documented validation | accepted, validation record needed |
| Integration | end-to-end | specialised separate tools |
| Extensibility | plugins | Python modules, custom parsers |
| Transparency | closed | auditable |

**Commercial kab:** bade criminal cases, multi-format end-to-end workflow, team collaboration, vendor support aur court acceptance chahiye.

**Open source kab:** budget-constrained labs, training/research, deep specialised work (memory, timeline, network, malware), custom automation.

**Best practice:** hybrid — primary commercial + cross-verification open source (dual-tool verification).

**Diagram:** Refer to the Advanced forensic tools — capability map diagram.`,
    diagram: 'df-tools',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq75',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.8',
    question: `Explain the criteria and techniques for selecting relevant digital evidence.`,
    answer: `**Criteria:**

| Criterion | Question |
|---|---|
| Relevance | case facts se juda hai? |
| Materiality | outcome badal sakta hai? |
| Reliability | source trustworthy hai? |
| Proportionality | effort vs value? |
| Legal scope | warrant/policy ke andar? |

**Techniques (data reduction):**
1. Hash sets (NSRL) — known-good files exclude.
2. Date/time window — incident period, UTC normalized.
3. Custodian/account filter.
4. Keyword + regex.
5. File-type/extension filter.
6. Communication participants.
7. Deduplication.
8. Anomaly (renamed, encrypted, stego).

**Documentation:** query, filter, tool version, kab chalaya, kya exclude kiya aur kyun.

**Prioritisation:** hot/warm/cold buckets for deep analysis.

**Exam line:** undocumented selection court mein challenge hota hai.

**Diagram:** Refer to the Selecting aur analyzing digital evidence diagram.`,
    diagram: 'df-select',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq76',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.8',
    question: `Explain how digital evidence is analysed and how findings are built.`,
    answer: `1. **Artefact verification** — file, timestamp, owner, source independently confirm.
2. **Timeline** — Plaso/Autopsy super-timeline, gaps aur sequence.
3. **Correlation** — disk + memory + network + cloud + mobile.
4. **Hypothesis testing** — competing explanations (accidental, authorised, innocent) formally test.
5. **Anti-forensic check** — timestamp mismatch, missing logs, wipe artefacts.
6. **Impact quantification** — records, data volume, financial loss, users affected.
7. **Attribution** — account, IP, device, session.
8. **Documentation** — chain of reasoning (artefact → inference → conclusion) + limitations.
9. **Peer review** — independent examiner.
10. **Reporting** — findings, evidence table, timeline, 65B.

**Bias controls:** falsification, corroboration, dual-tool, automation spot-checks, blind review.

**Exam line:** "Finding tab valid hai jab wo galat sabit ho sakti ho aur test pass kar jaye."

**Diagram:** Refer to the Selecting aur analyzing digital evidence diagram.`,
    diagram: 'df-select',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq77',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.9',
    question: `Explain the layers of validation of digital evidence.`,
    answer: `**1. Tool validation**
- NIST CFTT reports, internal known-answer tests, regression after upgrade.
- Version/firmware records, licence validity.

**2. Process verification**
- Hash recompute + match (acquisition, verification, working copy).
- Dual-tool parsing of critical artefacts.
- Write-blocker log, SOP compliance, contemporaneous notes.
- Second examiner review.

**3. Evidence validation**
- Serial/IMEI, exhibit number, seal intact.
- Custody unbroken, timestamps consistent.
- Independent corroboration.

**4. Legal admissibility**
- India: **Section 65B** certificate (device, regular course, proper working).
- US: **Daubert** — testability, error rate, peer review, general acceptance.
- Expert qualification + methodology annexure.

**Invalidation factors:** hash mismatch, custody gap, unvalidated tool, undocumented steps, unauthorised acquisition.

**Diagram:** Refer to the Validating the evidence — 4 layers diagram.`,
    diagram: 'df-validate',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq78',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.9',
    question: `Differentiate validation and verification in digital forensics with examples.`,
    answer: `| Point | Validation | Verification |
|---|---|---|
| Question | tool sahi result deta hai? | is case mein step sahi hua? |
| Level | general (tool/process) | case-specific |
| Timing | use se pehle + upgrade ke baad | har acquisition/analysis |
| Evidence | NIST CFTT, known-answer test | hash match, logs, dual-tool |
| Owner | lab/quality manager | examiner |
| Output | validation report | verification log |

**Validation example:** test disk jiska hash pehle se pata hai → image banao → hash match → tool validated.

**Verification example:** case ki disk ka image → hash original se match → verified.

**Analogy:** validation = scale calibrate karna; verification = us par aaj ka weight check karna.

**Dono zaroori:** court pehle tool ki reliability (validation) aur phir is case ke process (verification) par sawaal karti hai.

**Diagram:** Refer to the Validating the evidence — 4 layers diagram.`,
    diagram: 'df-validate',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq79',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.10',
    question: `Explain the standards governing digital forensics.`,
    answer: `| Standard | Coverage |
|---|---|
| ISO/IEC 27037 | evidence identify, collect, acquire, preserve |
| ISO/IEC 27041 | method assurance |
| ISO/IEC 27042 | analysis and interpretation |
| ISO/IEC 27043 | investigation principles/process |
| ISO/IEC 17025 | lab competence and accreditation |
| NIST SP 800-86 | forensics in incident response |
| NIST SP 800-101 | mobile forensics |
| SWGDE / ACPO | best practice guides |
| RFC 3227 | order of volatility |
| IT Act 2000 s.65B | electronic record certificate (India) |

**Standard ka fayda:**
1. Court acceptance aur credibility.
2. Repeatable process across examiners.
3. Lab accreditation aur audit pass.
4. Tool validation discipline.
5. Clear roles aur documentation.

**Practices jo standards se aate hain:** SOP, validation, competency, peer review, audit, exhibit management, lab security.

**Diagram:** Refer to the Forensic technology aur practices diagram.`,
    diagram: 'df-tech',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq80',
    unit: '4',
    subjectId: 'cyber-security',
    topicNumber: '4.10',
    question: `Discuss emerging technologies in digital forensics and the challenges they create.`,
    answer: `1. **Cloud/SaaS forensics** — CloudTrail, M365 audit, Workspace audit; challenges: jurisdiction, provider cooperation, retention.
2. **Remote/live acquisition at scale** — Velociraptor, KAPE, EDR; challenges: integrity, bandwidth, authorisation.
3. **Memory + container/K8s** — RAM, ephemeral pods, serverless; challenges: short-lived artefacts.
4. **IoT, vehicle, drone** — telematics, ECU/CAN, flight logs; challenges: proprietary formats, no standard tools.
5. **Blockchain tracing** — wallet clustering, exchange records; challenges: pseudonymity, cross-border.
6. **AI/ML in DFIR** — triage, clustering, OCR; challenges: explainability, bias, validation, human oversight.
7. **Automation/DFIR platforms** — playbooks, pipelines; challenges: pipeline drift, unvalidated scripts.

**Common response:** new tech par bhi wahi purane rules — validation, documentation, legality, reproducibility.

**Diagram:** Refer to the Forensic technology aur practices diagram.`,
    diagram: 'df-tech',
    image: null,
    importance: '⭐⭐⭐',
  },
  // ========================================================
  // Cyber Security Unit 5 — Social Engineering
  // ========================================================
  {
    id: 'cq81',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.1',
    question: `Define social engineering. Why is the human the weakest link in security?`,
    answer: `**Definition:** Social engineering wo technique hai jisme attacker psychological manipulation se insaan ko convince karta hai ki wo credential, OTP, access ya paisa de — ya koi galat action kare. Isme technology sirf delivery channel hoti hai; exploit ka centre **insaan ka bharosa** hota hai.\n\n**Kyun human weakest link hai:**\n1. **Trust default** — insaan unknown ko bhi benefit of doubt deta hai.\n2. **Authority respect** — "senior ne bola hai" challenge nahi hota.\n3. **Urgency** — time pressure mein verification skip ho jaati hai.\n4. **Helpfulness** — madad karne ki chaah exploit hoti hai.\n5. **Fear of loss** — job/penalty/account band hone ka darr.\n6. **Habit** — repeated tasks (login, invoice) bina soche kiye jaate hain.\n7. **Technical controls ka gap** — firewall insaan ke decision ko nahi rokta.\n\n**Chain:** attacker -> message (mail/call/chat/QR) -> human decision -> action (credential, access, payment) -> loss.\n\n**Defence:** verification protocol, least privilege, phishing-resistant MFA, blame-free reporting, role-based training.\n\n**Diagram:** Refer to the Social engineering — insaan ko target karke system todna diagram.`,
    diagram: 'se-intro',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq82',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.1',
    question: `Explain the psychological principles used in social engineering and how to counter them.`,
    answer: `Social engineering Cialdini ke influence principles par chalti hai.\n\n**1. Authority** — "CEO/Police/IT se hoon." Counter: role ka proof, directory se callback.\n**2. Urgency + scarcity** — "24 ghante mein", "sirf 3 slots". Counter: time pressure ko red flag maano.\n**3. Liking** — same college/city/project ka reference. Counter: familiarity ko verification se replace karo.\n**4. Social proof** — "aapke colleague ne already kiya hai". Counter: individual verification.\n**5. Reciprocation** — chhoti help, gift, free audit. Counter: no-strings policy.\n**6. Commitment/consistency** — chhoti request se bada request. Counter: scope check karo.\n**7. Fear** — "account band", "legal action", "digital arrest". Counter: official channel par verify.\n**8. Curiosity** — "salary sheet", "confidential attachment". Counter: unsolicited attachment kabhi na kholo.\n\n**Technical levers jo inke saath aate hain:** lookalike domain, real branding, valid TLS, real MFA prompt.\n\n**Counter-design:** verification protocol (callback + code word), dual approval for money, no OTP sharing, simulation-based training.\n\n**Diagram:** Refer to the Social engineering — insaan ko target karke system todna diagram.`,
    diagram: 'se-intro',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq83',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.2',
    question: `Trace the conceptual evolution of social engineering attacks.`,
    answer: `**1970s — phone phreaking:** tone manipulation, operator impersonation (Mitnick era). Channel: landline voice.\n\n**1990s — e-mail + pretext calls:** mass mail, fake surveys, dumpster diving; "social engineering" term popular hota hai.\n\n**2000s — web + spear phishing:** lookalike sites, credential harvesting, personalised mail from OSINT; pharming aur botnets.\n\n**2010s — social media + mobile:** angler phishing, smishing/vishing, WhatsApp scams, fake apps, ransomware affiliates.\n\n**2020s — AI + as-a-service:** deepfake voice/video, LLM-generated perfect language, AiTM proxy kits, MFA fatigue, OAuth consent phishing, PhaaS economy, "digital arrest" scams.\n\n**Kya nahi badla (constants):** trust, authority, urgency, helpfulness, fear — wahi levers.\n\n**Kya badla (shifts):** reach (scale), realism (AI), speed (automation), channel mix (mail + call + chat + QR), target depth (credential -> session -> consent).\n\n**Defence implication:** awareness alone kaafi nahi — phishing-resistant MFA, token protection, consent policy aur verification process chahiye.\n\n**Diagram:** Refer to the Social engineering ka conceptual evolution diagram.`,
    diagram: 'se-evolution',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq84',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.3',
    question: `Define social engineering and explain its categories with examples.`,
    answer: `**Definition:** Social engineering insaan ki psychological weakness (trust, authority, urgency, fear) ka use karke information, access ya action hasil karne ki technique hai.\n\n**Categories:**\n\n| Category | Description | Examples |\n|---|---|---|\n| **Human-based** | face-to-face/voice, koi technical tool nahi | impersonation (IT/police/bank), pretexting, shoulder surfing, tailgating, dumpster diving, baiting, quid pro quo |\n| **Computer-based** | digital channel, scale possible | phishing, spear phishing, whaling, vishing, smishing, quishing, pharming, pop-up/scareware, fake apps, OAuth consent, angler phishing |\n| **Socio-technical** | dono ka mix — sabse khatarnak | AiTM phishing + call, MFA fatigue + fake help desk, deepfake + payment fraud, insider + malware, watering hole + pretext |\n\n**Shared pattern:** research -> pretext -> trust build -> request -> exit.\n\n**Goal har category mein same:** credential, OTP, access, payment ya information — action victim khud karta hai.\n\n**Diagram:** Refer to the Social engineering — definition aur categories diagram.`,
    diagram: 'se-categories',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq85',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.3',
    question: `Differentiate social engineering from technical hacking. Why is social engineering often more effective?`,
    answer: `| Point | Social engineering | Technical hacking |\n|---|---|---|\n| Target | insaan ka decision | system ka vulnerability |\n| Entry | trust, authority, urgency | port, service, patch gap, malware |\n| Skill | psychology + research | exploit, code, tooling |\n| Cost | bahut kam | tool + infrastructure chahiye |\n| Detection | behaviour + reporting | IDS/EDR, patching |\n| Patch | training + process | update, hardening |\n| Evidence | mail, call, chat logs | logs, binaries, packets |\n\n**Kyun zyada effective:**\n1. **Cost-effective** — ek call vs zero-day.\n2. **Patching possible nahi** — insaan ko "update" nahi kar sakte, sirf train kar sakte hain.\n3. **Bypasses controls** — legitimate credential se firewall ke andar aa jaata hai.\n4. **Scalable** — mail/chat se hazaaron targets.\n5. **Blends with normal** — activity logs mein suspicious nahi lagti.\n6. **Combines with tech** — socio-technical attacks dono ka best use karte hain.\n\n**Conclusion:** technical hacking system todta hai, social engineering **permission** le leta hai.\n\n**Diagram:** Refer to the Social engineering — definition aur categories diagram.`,
    diagram: 'se-categories',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq86',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.4',
    question: `Explain the phases of a social engineering attack with defence measures.`,
    answer: `**Mitnick model ke chaar phases:**\n\n**1. Research (information gathering)**\n- OSINT: social media, company site, org chart, job posts, breach data.\n- Target, pretext aur entry point decide hota hai.\n- Defence: footprint minimise, org-chart exposure control.\n\n**2. Hook (pretext building)**\n- Believable identity + reason (IT, HR, vendor, bank).\n- Channel choose: mail, call, chat, QR, in-person.\n- Defence: DMARC + filtering, external sender banner, caller verification.\n\n**3. Play (execution)**\n- Trust build, authority/urgency, chhoti request se badi tak.\n- Ask: OTP, credential, remote access, payment, file.\n- Defence: verification protocol, FIDO2, least privilege, dual approval.\n\n**4. Exit (cover-up)**\n- Action complete, traces remove (mailbox rule, log clear), repeat/monetise.\n- Defence: audit logs, anomaly alerts, session revoke, IR playbook.\n\n**Har phase ka artefact:** lookalike domain, mail header, CDR, proxy log, mailbox rule — forensics ka entry point.\n\n**Diagram:** Refer to the Social engineering ke phases — research se exit tak diagram.`,
    diagram: 'se-phases',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq87',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.4',
    question: `What is the role of information gathering and OSINT in social engineering?`,
    answer: `Information gathering attack ka pehla aur sabse important phase hai — iske bina pretext believable nahi banta.\n\n**OSINT sources:**\n1. **Social media** — role, team, projects, travel, family, favourite tools.\n2. **Company website** — leadership, vendors, offices, email format.\n3. **Job postings** — tech stack (VPN, MFA, cloud provider).\n4. **Breach data / dark web** — leaked credentials, password patterns.\n5. **GitHub / repos** — internal hostnames, accidental API keys.\n6. **DNS/WHOIS/certificate transparency** — subdomains, vendors, expiry history.\n7. **Mail metadata** — signatures, auto-replies (out-of-office = travel window).\n8. **Physical** — badge photos, letterheads, dumpster diving.\n\n**Kaise use hota hai:**\n- Pretext personalise (manager ka naam, project ka naam).\n- Authority claim (jo role dikhta hai, wahi banta hai).\n- Timing attack (out-of-office, quarter-end).\n- Security question answers (DOB, school, pet name).\n\n**Defence:** social media hygiene, org-chart restrictions, out-of-office text without detail, domain/certificate monitoring, secret scanning in repos.\n\n**Diagram:** Refer to the Social engineering ke phases — research se exit tak diagram.`,
    diagram: 'se-phases',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq88',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.5',
    question: `Explain the attack spiral model in social engineering.`,
    answer: `**Attack spiral model** ek linear single attack ke bajaye **continuing campaign** dikhata hai — attacker ek hi target par baar-baar wapas aata hai, har loop mein zyada jaankari aur zyada access le kar.\n\n**Structure:** har loop mein wahi chaar stages (recon -> pretext -> play -> exit), par **radius** (access depth) badhta jaata hai.\n\n| Loop | Outcome |\n|---|---|\n| Loop 1 | public info: naam, role, tools, vendors |\n| Loop 2 | internal context: project, manager, deadline |\n| Loop 3 | access: credential, session, device |\n| Loop 4 | action: payment, data, persistence, sabotage |\n\n**Kyun spiral (linear nahi):**\n1. Pehla attempt fail ho sakta hai — attacker pretext badal kar wapas aata hai.\n2. Har interaction naya data deta hai (naam, process, tone).\n3. Chhoti requests trust build karti hain.\n4. Detection late hoti hai kyunki har event akela harmless lagta hai.\n\n**Defence implications:**\n- Repeated low-level anomalies (wrong-number calls, profile views, reset mails) ko correlate karo.\n- Report karo even if "kuch hua nahi".\n- Early loop mein detection sabse sasta — breach ke baad IR mehnga hai.\n\n**Diagram:** Refer to the Attack spiral model — har loop mein deeper access diagram.`,
    diagram: 'se-spiral',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq89',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.5',
    question: `Compare the linear phase model with the attack spiral model.`,
    answer: `| Point | Linear phase model | Attack spiral model |\n|---|---|---|\n| View | ek attack, ek sequence | continuing campaign, many loops |\n| Stages | research -> hook -> play -> exit | wahi stages, radius badhta hua |\n| Target | single objective | progressively deeper access |\n| Failure handling | attack end | naya pretext, next loop |\n| Evidence | ek set of artefacts | correlated timeline across loops |\n| Detection | single-event rules | correlation + behaviour analytics |\n| Defence focus | phase-wise controls | long-term monitoring + reporting culture |\n\n**Linear model ka use:** exam answer, single incident explanation, forensics sequence.\n\n**Spiral model ka use:** advanced persistent social engineering, insider recruitment, BEC campaigns, "digital arrest" repeat calls.\n\n**Practical insight:** attacker ke liye har loop sasta hai; defender ke liye har missed loop mehnga. Isliye **report rate** aur **time-to-report** sabse important metrics hain.\n\n**Diagram:** Refer to the Attack spiral model — har loop mein deeper access diagram.`,
    diagram: 'se-spiral',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq90',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.6',
    question: `Explain attack vendors and the social and socio-technical approaches used by them.`,
    answer: `**Attack vendor:** specialised provider jo social engineering "service" ke roop mein bechta hai — buyer ko sirf target dena hota hai.\n\n**Vendor services:**\n1. **PhaaS** — phishing kit, hosting, sender infrastructure, credential panel.\n2. **Vishing call centre** — native-language callers, scripts, OTP relay.\n3. **SIM-swap service** — number porting for OTP interception.\n4. **Credential/OTP bots** — real-time relay to bypass MFA.\n5. **Deepfake service** — voice cloning, video impersonation.\n6. **Insider recruitment** — employee ko paise de kar data/access.\n\n**Social approach (pure human):**\n- impersonation (IT, HR, bank, police, courier), pretext call, tailgating, shoulder surfing, dumpster diving, fake recruitment drive, on-site vendor visit.\n\n**Socio-technical approach (human + tool):**\n- PhaaS + AiTM proxy, vishing + OTP relay, SIM swap + account takeover, deepfake + payment fraud, malicious app / OAuth consent, RMM install via fake support desk.\n\n**Kyun effective:** specialisation (quality), scale, anonymity, low cost.\n\n**Defence:** vendor onboarding + KYC, third-party register, access scope with expiry, support-call verification, as-a-service economy ki awareness.\n\n**Diagram:** Refer to the Attack vendors — social aur socio-technical approach diagram.`,
    diagram: 'se-vendors',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq91',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.6',
    question: `How does the as-a-service criminal economy change the threat landscape?`,
    answer: `Pehle attack ke liye technical skill chahiye thi; ab **specialisation + outsourcing** ne entry barrier hata diya hai.\n\n**Economy ke roles:**\n1. **Developer** — kit/proxy/malware banata hai.\n2. **Hosting provider** — bulletproof hosting, lookalike domains.\n3. **Caller / operator** — vishing, OTP relay.\n4. **Data broker** — credentials, PII, target lists.\n5. **Affiliate** — attack execute karta hai, revenue share.\n6. **Cash-out** — mule accounts, crypto laundering.\n\n**Impact:**\n- **Scale:** ek kit se hazaaron campaigns.\n- **Quality:** professional scripts, perfect language (AI).\n- **Speed:** phishing page minutes mein live.\n- **Attribution mushkil:** services alag-alag jurisdictions mein.\n- **Price down:** attack sasta, isliye SMEs bhi target.\n\n**Defence shift:**\n- Sirf IOC block karna kaafi nahi (infrastructure roz badalta hai).\n- **Structural controls:** FIDO2, token protection, conditional access, consent policy, callback rules.\n- **Third-party risk:** vendor KYC, domain monitoring, takedown partnerships.\n- **Intelligence sharing:** CERT-In, sector ISACs.\n\n**Diagram:** Refer to the Attack vendors — social aur socio-technical approach diagram.`,
    diagram: 'se-vendors',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq92',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.7',
    question: `Explain advanced social engineering attacks with examples.`,
    answer: `Advanced attacks technology use karke classic red flags hata deti hain.\n\n1. **AiTM phishing** — proxy real login page ke beech; MFA ke baad session cookie chori.\n2. **MFA fatigue** — push bombing + vishing; user thak kar approve kar deta hai.\n3. **Callback phishing** — benign notice + number; fake support desk RMM tool install karwata hai.\n4. **OAuth consent phishing** — malicious app ko mail/files access; password reset se nahi rukta.\n5. **Deepfake voice/video** — executive/family impersonation, real-time payment fraud.\n6. **Quishing** — QR code se personal phone par phishing; corporate proxy bypass.\n7. **Collaboration-platform attacks** — Teams/Slack "partner" account se file/credential request.\n8. **Watering hole / supply chain** — trusted site ya vendor compromise.\n\n**Common features:** perfect language, real infrastructure, multi-channel, urgency, valid TLS, real brand assets.\n\n**Defence (structural, not awareness-only):**\n- FIDO2/passkeys (origin-bound), token protection.\n- Conditional access + impossible-travel alerts.\n- App consent policy + admin approval.\n- Callback rule for payment and credential requests.\n- RMM install only via ticket.\n\n**Diagram:** Refer to the Advanced social engineering attacks diagram.`,
    diagram: 'se-advanced',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq93',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.7',
    question: `What is an adversary-in-the-middle phishing attack and why does MFA not prevent it?`,
    answer: `**AiTM:** attacker victim aur real website ke beech ek reverse proxy rakhta hai. Victim ko asli login page dikhta hai (attacker ke URL par), credentials aur MFA attacker ke through real site tak jaate hain, aur **session cookie** attacker copy kar leta hai.\n\n**Steps:**\n1. Victim ko mail/chat se link.\n2. Link proxy par (lookalike domain).\n3. Proxy real login page render karta hai.\n4. Victim credentials daalta hai -> real site par forward.\n5. Real MFA prompt victim approve karta hai.\n6. Proxy session cookie capture karta hai.\n7. Attacker cookie inject karke bina MFA ke session use karta hai.\n\n**MFA kyun fail hoti hai:**\n- TOTP/push **authentication** prove karte hain, **session** ko bind nahi karte.\n- Credential + OTP dono real-time relay ho jaate hain.\n\n**Countermeasures:**\n1. **FIDO2/passkeys** — origin-bound, phishing sites par kaam nahi karte.\n2. **Token protection / device binding.**\n3. **Conditional access** — new device/location par step-up.\n4. Session anomaly detection, impossible travel alerts.\n5. URL filtering + lookalike domain monitoring.\n6. Awareness: mail ke link se login kabhi na karo.\n\n**Diagram:** Refer to the Advanced social engineering attacks diagram.`,
    diagram: 'se-advanced',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq94',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.8',
    question: `Define phishing. Explain its anatomy and types with examples.`,
    answer: `**Definition:** Phishing ek social engineering attack hai jisme attacker trusted party ka roop dhar kar electronic message (mail/SMS/chat) bhejta hai, taaki victim credential de, link click kare, attachment khole ya payment kare.\n\n**Anatomy (4 ingredients):** believable sender (spoofed/lookalike domain), pretext (invoice, KYC, password expiry, delivery), payload (credential page, attachment, QR, number), call to action with pressure (urgency, fear, reward).\n\n**Types:**\n\n| Type | Description | Example |\n|---|---|---|\n| Bulk | mass mail | fake bank alert |\n| Spear | personalised (OSINT) | project invoice |\n| Whaling | executives | legal notice to CEO |\n| Clone | real thread copy | swapped attachment |\n| Vishing | voice call | IT support impersonation |\n| Smishing | SMS/WhatsApp | KYC link |\n| Pharming | DNS/hosts poisoning | sahi URL, fake site |\n| Angler | fake social-media support | bank helpdesk DM |\n| AiTM/consent | proxy / OAuth grant | session cookie theft |\n\n**Red flags:** lookalike domain, SPF/DKIM/DMARC fail, urgency, unexpected attachment (.html/.iso/.zip), link mismatch, OTP request.\n\n**Diagram:** Refer to the Phishing attack — anatomy aur defence chain diagram.`,
    diagram: 'se-phishing',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq95',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.8',
    question: `How is a phishing e-mail investigated? Explain the layered defence against phishing.`,
    answer: `**Investigation:**\n1. **Preserve** — raw '.eml', hash, screenshots; forward na karo.\n2. **Header analysis** — 'Received' chain, 'Return-Path' vs 'From', 'Message-ID', 'Authentication-Results' (spf/dkim/dmarc), 'X-Mailer'.\n3. **Domain/IP intel** — WHOIS age, lookalike/homoglyph, MX, TLS cert, geo-IP, ASN, reputation.\n4. **URL + landing page** — anchor vs href, shortener expansion, sandbox page, form POST destination.\n5. **Attachment** — hash -> reputation, macro/JS check, container types.\n6. **Victim correlation** — proxy/web logs, MFA events, mailbox rules.\n7. **Response** — block IOC, reset credential, revoke sessions, notify, 65B if legal.\n\n**Layered defence:**\n- **Authentication:** DMARC 'p=reject', SPF/DKIM, lookalike monitoring.\n- **Filtering:** sandboxing, URL rewriting, external banner.\n- **Identity:** FIDO2 MFA, conditional access, token protection.\n- **People:** training + reporting button, blame-free culture.\n- **Process:** payment callback, dual approval, ticket before remote tools.\n- **Response:** IR playbook, metrics (click rate, report rate, time-to-report).\n\n**Diagram:** Refer to the Phishing attack — anatomy aur defence chain diagram.`,
    diagram: 'se-phishing',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq96',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.9',
    question: `Define insider attack. Explain its types and lifecycle.`,
    answer: `**Definition:** Insider attack wo harm hai jo **legitimate access** rakhne wale vyakti (employee, contractor, vendor engineer, intern, ex-staff) se hota hai — external intruder se nahi.\n\n**Kyun khatarnak:** perimeter bypass, systems/processes ki jaankari, activity logs mein normal dikhti hai, trust ka misuse.\n\n**Types:**\n\n| Type | Description | Example |\n|---|---|---|\n| Malicious | jaan-boojh kar harm | client database leak, fraud |\n| Negligent | galti se harm | phishing click, unapproved cloud upload |\n| Compromised | account hijack | credential chori ke baad insider jaisa behaviour |\n| Infiltrator | attack ke liye join | fake contractor |\n| Third-party | vendor/consultant | RMM access misuse |\n| Departing | notice period | data copy, offboarding gap |\n\n**Lifecycle:** motive/grievance -> access accumulation -> collection -> exfiltration -> cover-up.\n\n**Response:** evidence preserve (hash + 65B), HR/legal coordination, access suspend, scope assessment, proportionate investigation.\n\n**Diagram:** Refer to the Insider attack — types aur lifecycle diagram.`,
    diagram: 'se-insider',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq97',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.9',
    question: `How are insider attacks detected and investigated? Explain the technical and human controls.`,
    answer: `**Detection layers:**\n1. **Identity** — privilege reviews, dormant accounts, SoD conflicts, shared accounts.\n2. **Behaviour analytics (UEBA)** — off-hours access, bulk download, new destinations.\n3. **DLP** — mail, USB, cloud upload, print.\n4. **Audit logs** — mailbox rules, external sharing, downloads.\n5. **Endpoint** — USB history, sync tools, print logs.\n6. **Human** — resignation monitoring, exit interviews, reporting channel.\n\n**Investigation:**\n1. Authorisation (HR/legal) + policy basis.\n2. Preserve logs and artefacts with hash + custody.\n3. Scope: kaunsa data, kitna, kahan gaya.\n4. Timeline: access -> collection -> exfiltration.\n5. Corroborate DLP + endpoint + cloud + network.\n6. Interview/disciplinary process.\n7. Report + recommendations; 65B if legal.\n\n**Privacy balance:** transparent monitoring policy, proportionality, data minimisation.\n\n**Technical forensic artefacts:** '$UsnJrnl', '$MFT', registry USB history, browser history, cloud audit trail, DLP alert log.\n\n**Diagram:** Refer to the Insider attack — types aur lifecycle diagram.`,
    diagram: 'se-insider',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq98',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.10',
    question: `Define identity theft. Explain its types, routes and legal provisions in India.`,
    answer: `**Definition:** Identity theft kisi doosre ke personal identifiers (naam, DOB, Aadhaar/PAN, card, photo, OTP) bina consent le kar unka misuse karna hai.\n\n**Types:** financial identity theft, account takeover, synthetic identity, medical/insurance, tax refund, criminal identity, child identity, identity cloning.\n\n**Routes:** phishing/vishing/smishing, SIM swap, data breach, shoulder surfing, dumpster diving, social media over-sharing, malicious app/OAuth consent, insider leak.\n\n**Impact:** financial loss, credit damage, wrongful legal action, reputational harm, months of recovery.\n\n**India — legal provisions:**\n\n| Provision | Relevance |\n|---|---|\n| IT Act 66C | identity theft (password/e-signature misuse) |\n| IT Act 66D | cheating by personation |\n| IT Act 65B | electronic evidence certificate |\n| BNS 2023 | cheating, forgery, impersonation |\n| DPDP Act 2023 | personal data obligations |\n\n**Prevention:** data minimisation, masked KYC, MFA (FIDO2), SIM-swap lock, credit monitoring, social media hygiene.\n\n**Response:** bank/card block, platform report, FIR/NCRP, session revoke, fraud alert.\n\n**Diagram:** Refer to the Identity theft — identifiers se fraud tak diagram.`,
    diagram: 'se-identity',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq99',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.11',
    question: `Discuss how insider threats can be prevented in an organisation.`,
    answer: `Insider threat prevention ek **programme** hai — policy, people, process aur technology ka loop.\n\n**1. Governance:** written policy, named owner, HR + legal + IT + security team, risk assessment (crown jewels, critical roles).\n\n**2. People controls:** background verification, NDA, acceptable-use agreement, training before access, blame-free reporting.\n\n**3. Access controls:** least privilege, RBAC, quarterly access review, separation of duties, PAM, just-in-time access, no shared accounts.\n\n**4. Data controls:** classification, DLP, encryption, USB allow-list, personal cloud restriction.\n\n**5. Monitoring:** UEBA baselines, mail/cloud audit logs, DLP alerts, resignation-period monitoring, legal hold.\n\n**6. Response:** playbook, evidence preservation (hash + 65B), HR/legal coordination, proportionate investigation.\n\n**7. Offboarding:** same-day access revocation, device return, token/certificate rotation, exit interview, 30-day watch.\n\n**Metrics:** access review completion %, DLP closure time, training coverage, time-to-revoke on exit, repeat incidents.\n\n**Diagram:** Refer to the Insider threat prevention — programme loop diagram.`,
    diagram: 'se-prevent',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq100',
    unit: '5',
    subjectId: 'cyber-security',
    topicNumber: '5.12',
    question: `Who are the typical targets of social engineering and what defence strategies should an organisation adopt?`,
    answer: `**Targets (access, authority ya information ke hisaab se):**\n\n| Target | Kyun |\n|---|---|\n| Executives + PAs | authority, calendar/contacts |\n| Finance/accounts | payments, bank change |\n| HR | employee PII, payroll |\n| IT help desk | password/MFA reset |\n| Admins/DBAs | privileged access |\n| Reception | physical entry, badge |\n| New joiners | policy unaware |\n| Remote/travelling | no walk-over verification |\n| Contractors/vendors | inside trust boundary |\n| Customers/citizens | KYC, UPI, delivery scams |\n\n**Defence strategies (chain ke hisaab se):**\n1. **Prepare** — policy, classification, verification protocol, vendor list.\n2. **Prevent** — least privilege, FIDO2, filtering, help-desk identity proofing, dual approval.\n3. **Detect** — reporting button, UEBA, impersonation monitoring, honeytokens.\n4. **Respond** — tested playbook, containment, session revoke, forensics.\n5. **Recover** — restore, notify, root cause, control update.\n6. **Sustain** — role-based training, simulations, no-blame culture.\n\n**Metrics:** click rate down, report rate up, time-to-report down, verification compliance up.\n\n**Diagram:** Refer to the Social engineering targets aur defence strategies diagram.`,
    diagram: 'se-targets',
    image: null,
    importance: '⭐⭐⭐',
  },
// ========================================================
  // Software Testing Unit 1 — Fundamentals of Software Quality Assurance
  // ========================================================
  {
    id: 'stq1',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Define software quality. What are the key characteristics of quality software?',
    answer: '**Software Quality Definition:**\nSoftware quality is the degree to which a software system meets its requirements, is reliable, maintainable, and performs efficiently.\n\n**Key Characteristics:**\n1. **Reliability** — Software kabhi na kabhi crash nahi karta. Stable chalta hai.\n2. **Maintainability** — Aasani se modify kiya ja sakta hai. Code readable hai.\n3. **Efficiency** — Fast chalta hai. Resources ka accha use karta hai.\n4. **Usability** — Aasani se use kiya ja sakta hai. User-friendly hai.\n5. **Security** — Secure hai. Vulnerabilities kam hain.\n\nQuality ek subjective term hai — ek user ke liye accha hai woh dusre ke liye accha nahi hai. Isliye quality ko measure karne ke liye metrics use hote hain.',
    diagram: null,
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq2',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Differentiate between QA, QC, and SQA.',
    answer: '**QA (Quality Assurance):**\n- Process-oriented\n- Defects prevent karta hai\n- Whole team ka responsibility hai\n- Systematic approach hai\n\n**QC (Quality Control):**\n- Product-oriented\n- Defects find karta hai\n- QA team ka responsibility hai\n- Deliverables verify karta hai\n\n**SQA (Software Quality Assurance):**\n- QA + QC combined\n- Full lifecycle coverage\n- Standards aur processes apply karta hai\n- Systematic approach hai\n\n**Main Difference:**\nQA = Prevention (Process)\nQC = Detection (Product)\nSQA = QA + QC (Combined approach)',
    diagram: 'qa-qc-comparison',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq3',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Explain the components of an SQA system.',
    answer: '**SQA System Components:**\n\n1. **Quality Standards**\n- ISO 9001, CMMI, Six Sigma\n- Standards define karte hain ki quality kya hai\n- Organizations follow karte hain\n\n2. **Quality Metrics**\n- Defect density, test coverage, code complexity\n- Quality measure karte hain\n- Trends track karte hain\n\n3. **Quality Reviews**\n- Code review, design review, walkthroughs\n- Defects early detect karte hain\n- Peer review important hai\n\n4. **Testing Processes**\n- Unit, integration, system, acceptance testing\n- Defects detect karte hain\n- Quality ensure karte hain\n\n5. **Training Programs**\n- Team ko quality train karte hain\n- New tools aur processes sikhaate hain\n- Skills improve karte hain\n\n6. **Audit Mechanisms**\n- Process audit, product audit\n- Independent review hota hai\n- Compliance check karta hai\n\n**All components milte hain SQA system banane ke liye.**',
    diagram: 'sqa-components',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq4',
    unit: '1',
    subjectId: 'software-testing',
    question: 'How does software quality impact business success?',
    answer: '**Business Impact of Quality:**\n\n1. **Lower Costs**\n- Accha software maintain karne mein less cost hota hai\n- Less bugs = less support\n\n2. **Customer Satisfaction**\n- Accha software user ko pasand aata hai\n- Better UX = happier users\n\n3. **Reputation**\n- Accha software company ki image acchi banata hai\n- Positive reviews aate hain\n\n4. **Competitive Advantage**\n- Accha quality competitive advantage provide karta hai\n- Market mein alag bante hain\n\n5. **Reduced Risks**\n- Accha software risks kam karta hai\n- Fewer failures\n\n**Quality-Cost Relationship:**\nInvestment in quality returns karata hai.\nHigh quality = low failure costs.\n\n**Business Benefits:**\n- Maintenance costs kam\n- Customer satisfaction increase\n- Reputation improve\n- Competitive advantage milta hai\n- Revenue increase hota hai',
    diagram: 'quality-business-impact',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq5',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Explain SQA planning and its best practices.',
    answer: '**SQA Planning:**\n\nSQA planning involve karta hai:\n1. Quality goals define karna\n2. Standards establish karna\n3. Resources allocate karna\n4. Schedules create karna\n5. Processes define karna\n\n**Best Practices:**\n\n1. **Early Planning**\n- Project start mein goals define karo\n- Accha plan quality built karta hai\n\n2. **Clear Goals**\n- Measurable objectives define karo\n- Defect density target, coverage target\n\n3. **Established Standards**\n- Coding standards, review procedures\n- Testing procedures define karo\n\n4. **Allocated Resources**\n- Budget, time, people allocate karo\n- Quality activities ka timeline create karo\n\n5. **Defined Processes**\n- How quality ensure hogi\n- Roles aur responsibilities clear karo\n\n6. **Maintained Documentation**\n- Plan document maintain karo\n- Standards documents document karo\n\n**Important:**\nQuality built-in karo — not tested-in.\nAccha plan quality early ensure karta hai.',
    diagram: 'sqa-planning-process',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq6',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Differentiate between product quality and process quality.',
    answer: '**Product Quality:**\n- Final software product ki quality\n- Outcome (what we get)\n- Aspects: Reliability, Usability, Performance, Maintainability, Scalability, Security\n\n**Process Quality:**\n- Development process ki quality\n- Approach (how we work)\n- Aspects: Planning, Design, Coding, Testing, Standards, Metrics\n\n**Relationship:**\n- Good process → Good product\n- Good product indicates good process\n- Bad process → Bad product\n- Bad product may indicate bad process\n\n**Key Difference:**\nProduct quality = outcome\nProcess quality = approach\n\n**Importance:**\nDono important hain.\nProcess improvement → product improvement\nFocus on both — ek ek karke nahi, dono saath.',
    diagram: 'product-process-quality',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq7',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Describe the Waterfall and Agile process models with their advantages and disadvantages.',
    answer: '**Waterfall Model:**\n\n**Approach:** Linear, sequential\n**Phases:** Requirements → Design → Coding → Testing → Deployment\n\n**Advantages:**\n- Simple hai\n- Easy to understand\n- Well-documented hai\n- Good planning hai\n\n**Disadvantages:**\n- Rigid hai\n- Changes difficult hain\n- Testing late hota hai\n- Customer feedback late milta hai\n\n**When to Use:**\n- Small projects\n- Well-defined requirements\n- Fixed budget aur timeline\n\n---\n\n**Agile Model:**\n\n**Approach:** Iterative, incremental\n**Process:** Short cycles (sprints)\n\n**Advantages:**\n- Flexible hai\n- Customer involvement accha hai\n- Early delivery hoti hai\n- Quality accha hai\n\n**Disadvantages:**\n- Costly hai\n- Documentation less hota hai\n- Team ka experience important hai\n- Scalability issues ho sakte hain\n\n**When to Use:**\n- Large projects\n- Changing requirements\n- Customer collaboration zaroori hai',
    diagram: 'process-models-comparison',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq8',
    unit: '1',
    subjectId: 'software-testing',
    question: 'List and explain the 7 QC tools with their uses.',
    answer: '**7 QC Tools:**\n\n1. **Check Sheet**\n- Data collect karta hai\n- Frequency count karta hai\n- Simple tool hai\n\n2. **Flow Chart**\n- Process flow dikhata hai\n- Steps aur decisions dikhata hai\n- Complex processes simplify karta hai\n\n3. **Histogram**\n- Data distribution dikhata hai\n- Bar chart hota hai\n- Patterns dikhata hai\n\n4. **Pareto Chart**\n- Problems prioritize karta hai\n- 80/20 rule follow karta hai\n- Important problems identify karta hai\n\n5. **Fishbone Diagram (Cause and Effect)**\n- Root cause analysis karta hai\n- Causes identify karta hai\n- Problem solve karta hai\n\n6. **Scatter Diagram**\n- Relationship dikhata hai\n- Correlation check karta hai\n- Relationship measure karta hai\n\n7. **Control Chart**\n- Process control karta hai\n- Variation measure karta hai\n- Quality maintain karta hai\n\n**Use:**\nSab tools problems identify aur solve karne mein help karte hain.',
    diagram: 'qc-tools-overview',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },


  // ========================================================
  // Software Testing Unit 3 — Software Testing Techniques
  // ========================================================
  {
    id: 'stq9',
    unit: '3',
    subjectId: 'software-testing',
    question: 'What is static testing? Explain static testing by humans and by tools.',
    answer: "**Static Testing:** Software ko execute kiye bina examine karna — documents, design, code aur test cases padh kar defect dhoondhna. Ye verification technique hai: defect ka cause milta hai, effect nahi.\n\n**1. Static Testing by Humans (Reviews):**\n- **Informal review** — team member ko dikhana, koi record nahi, sabse sasta.\n- **Walkthrough** — author khud samjhata hai, team questions poochti hai, learning purpose.\n- **Technical review** — peers/architect code aur design check karte hain, findings document hoti hain.\n- **Inspection** — sabse formal (Fagan): planning, kick-off, preparation, meeting, rework, follow-up; roles: moderator, author, reader, recorder, reviewers.\n\n**2. Static Testing by Tools (Static Analysis):**\n- **Compiler / linter** — syntax error, unused variable (ESLint, gcc -Wall).\n- **Style checker** — coding standard, naming, indentation (PMD, SonarQube).\n- **SAST** — SQL injection, XSS, hard-coded secret (SonarQube, Snyk, Fortify).\n- **Flow analysis** — dead code, unreachable code, uninitialised variable.\n- **Metrics tool** — cyclomatic complexity, LOC, duplication.\n\n**Advantages:** defect early milta hai to cost kam, rework kam, quality improve.\n**Limitation:** runtime behaviour, performance aur hardware interaction nahi pakad sakta — dynamic testing zaroori.\n\n**Diagram:** Refer to Static Testing diagram.",
    diagram: 'st3-static',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq10',
    unit: '3',
    subjectId: 'software-testing',
    question: 'Explain structural testing and unit testing with stubs and drivers.',
    answer: "**Structural Testing (White-box):** Test cases code ke internal structure se derive hote hain — statement, branch, condition aur path coverage ke aadhaar par.\n\n**Types:** statement testing, branch/decision testing, condition testing, path testing (basis path), loop testing (0, 1, typical, max, max+1), data flow testing.\n\n**Unit Testing:** Sabse chhota test level — ek function ya class ko isolation mein test karna.\n**AAA pattern:** Arrange (input aur mocks ready) → Act (function call) → Assert (expected vs actual).\n\n**Isolation ke liye:**\n- **Stub** — fake module jo fixed value return karta hai (neeche ki dependency ke liye).\n- **Driver** — chhota program jo unit ko call karta hai (upar ka caller missing ho to).\n- **Mock** — fake object jo behaviour verify karta hai.\n\n**Example:** discount(amt, member) ke 3 independent paths: (6000, false) → 600; (2000, false) → 100; (2000, true) → 140. Teeno test karne par har branch cover ho jaata hai.\n\n**Fayda:** dead code aur missing branch turant dikhta hai, refactoring safe hota hai.\n**Limit:** requirement galat ho to white-box testing nahi pakadti — black-box ke saath chalao.\n\n**Diagram:** Refer to Structural Testing diagram.",
    diagram: 'st3-structural',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq11',
    unit: '3',
    subjectId: 'software-testing',
    question: 'What is code coverage? Explain its types. Does 100% coverage guarantee bug-free software?',
    answer: "**Code Coverage:** White-box metric — test suite ne code ka kitna hissa execute kiya.\n**Formula:** coverage % = (covered items ÷ total items) × 100.\n\n**Types:**\n1. **Statement (line)** — har executable line ek baar.\n2. **Branch (decision)** — har if/loop ka true aur false (industry ka practical target 70–90%).\n3. **Condition** — compound condition ke har atomic part ka true/false.\n4. **Path** — start se end tak har possible path (2^n growth).\n5. **Function** — har function call hua ya nahi.\n6. **MC/DC** — har condition independently decision ka result badle (safety critical systems).\n\n**100% coverage = bug-free? Nahi:**\n- Requirement hi missing ho sakti hai.\n- Assertion ke bina test chalta hai par kuch verify nahi karta.\n- Boundary aur data dependent defect chhoot sakte hain.\n- Performance, security aur concurrency coverage se bahar hain.\n\n**Sahi interpretation:** coverage indicator hai, target nahi. Kam coverage pakka signal hai ki testing adhoori hai; high coverage zaroori shart hai, poora proof nahi. Isliye mutation score aur requirement coverage bhi dekho.\n\n**Tools:** JaCoCo, Istanbul/nyc, coverage.py, gcov, PHPUnit coverage.\n\n**Diagram:** Refer to Code Coverage diagram.",
    diagram: 'st3-coverage',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq12',
    unit: '3',
    subjectId: 'software-testing',
    question: 'Define cyclomatic complexity. How is V(G) calculated and used in basis path testing?',
    answer: "**Cyclomatic Complexity V(G):** Control flow graph ki complexity — code mein kitne independent paths hain.\n\n**Formulas:**\n1. V(G) = E − N + 2P (E edges, N nodes, P connected components).\n2. V(G) = decision points + 1 (har if, while, for, case, && , || ek decision).\n3. V(G) = CFG ke enclosed regions ki ginti.\n\n**Example:** N = 6, E = 7 → V(G) = 7 − 6 + 2 = 3 → kam se kam 3 independent path test karo.\n\n**Bands:** 1–10 simple · 11–20 moderate · 21–50 complex · 50+ untestable.\n\n**Basis path testing steps:**\n1. CFG banao.\n2. V(G) calculate karo.\n3. V(G) independent paths identify karo (har path mein ek naya edge).\n4. Har path ke liye test input + expected output likho.\n5. Execute karke verify karo.\n\n**Kam karne ke tareeke:** chhote functions, early return/guard clause, nesting hatao, extract method, switch ko polymorphism se replace karo.\n\n**Note:** V(G) sirf control flow dekhta hai — isliye cognitive complexity, Halstead aur duplication ke saath padho.\n\n**Diagram:** Refer to Cyclomatic Complexity diagram.",
    diagram: 'st3-complexity',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq13',
    unit: '3',
    subjectId: 'software-testing',
    question: 'What is mutation testing? Explain mutants, killed/survived mutants and mutation score.',
    answer: "**Mutation Testing:** Fault-based technique — code mein jaan-boojh kar chhoti galti (mutation) daal kar test suite ki strength naapna.\n\n**Process:**\n1. Original code ki copy banao.\n2. Mutation operator apply karo (>= ko > karo, + ko − karo, && ko || karo).\n3. Poori test suite chalao.\n4. Test fail → **killed**; test pass → **survived**.\n\n**Example:** `return $age >= 18;` ko `> 18` banao. Tests isAdult(20) aur isAdult(10) pass ho jaate hain — mutant survive karta hai, kyunki 18 par hi farak padta hai. isAdult(18) test add karo to mutant killed.\n\n**Three outcomes:** Killed (achha), Survived (test weak), Equivalent (behaviour same, maar nahi sakte).\n\n**Mutation Score** = killed ÷ (total − equivalent) × 100. Example: 82 ÷ (90 − 2) × 100 = 93.2%.\n\n**Survived mutant ke reason:** test case missing, assertion missing, galat expected value, dead code.\n\n**Limitation:** mehnga hai (har mutant par poori suite) — isliye selective operators, incremental (PR diff) mode aur nightly runs.\n**Tools:** PIT, Stryker, mutmut, Infection.\n\n**Diagram:** Refer to Mutation Testing diagram.",
    diagram: 'st3-mutation',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq14',
    unit: '3',
    subjectId: 'software-testing',
    question: 'What is requirement based testing? Explain the requirement traceability matrix (RTM).',
    answer: "**Requirement Based Testing:** Black-box approach — test cases SRS/use case se derive hote hain, code se nahi. Purpose: verify karna ki jo maanga gaya tha wahi bana hai.\n\n**Steps:** requirements ID ke saath list karo → testable statements mein todo → test cases design karo → RTM banao → execute karke result update karo → requirement coverage naapo (tested ÷ total × 100).\n\n**RTM (Requirement Traceability Matrix):** Requirement aur test case ka mapping table.\n- Columns: Requirement ID, description, Test case ID, Result, Defect ID, Status.\n- **Forward traceability** — requirement se test case (kya sab test hua?).\n- **Backward traceability** — test case se requirement (ye test kis liye hai?).\n- **Bidirectional** — dono taraf; change impact analysis aur audit ke liye.\n- Orphan test case = requirement hi nahi; missing test = test hi nahi.\n\n**Fayda:** koi requirement untested nahi rehti, change ka impact turant pata chalta hai, audit/compliance evidence milta hai, progress report aasan.\n**Limit:** requirement hi galat ho to test pass hoke bhi product galat hoga.\n\n**Diagram:** Refer to Requirement Based Testing diagram.",
    diagram: 'st3-requirement',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq15',
    unit: '3',
    subjectId: 'software-testing',
    question: 'Differentiate between positive and negative testing with examples.',
    answer: "**Positive Testing:** Valid input, expected output — feature specification ke hisaab se chalta hai. Ise happy path testing bhi kehte hain.\nExamples: age 25 → registration successful; amount 500 → payment success; 1 MB PDF upload ho gaya.\n\n**Negative Testing:** Invalid/unexpected/malicious input — system gracefully handle karta hai (error message, no crash, no data corruption).\nExamples: age 0 / −5 / abc → validation error; amount 99999999 → limit error; virus.exe upload → reject; `' OR 1=1 --` → blocked.\n\n**Difference:**\n| Point | Positive | Negative |\n|---|---|---|\n| Input | Valid | Invalid |\n| Purpose | Feature works | Robustness |\n| Expected | Success output | Proper error, no crash |\n| Risk covered | Functional correctness | Security, stability |\n\n**Why both:** sirf positive tests se system nazuk rehta hai; sirf negative tests se feature verify nahi hota. Dono milkar functional + robustness coverage dete hain.\n**Negative test data:** blank, wrong format, out of range, wrong type, special characters, too long, duplicate, invalid sequence.\n\n**Diagram:** Refer to Positive and Negative Testing diagram.",
    diagram: 'st3-positive-negative',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq16',
    unit: '3',
    subjectId: 'software-testing',
    question: 'What is boundary value analysis? Explain with an example and compare it with equivalence partitioning.',
    answer: "**Boundary Value Analysis (BVA):** Black-box technique — equivalence class ke boundaries par aur unke just bahar test karna, kyunki defect sabse zyada kinaron par hota hai.\n\n**Range a se b ke liye values:** a−1, a, a+1, nominal, b−1, b, b+1.\n\n**Example (age 18–60):** 17 invalid, 18 valid, 19 valid, 35 nominal, 59 valid, 60 valid, 61 invalid.\n**Kyun:** developer ne `>` likh diya `>=` ki jagah — sirf 18 wala test fail hoga, 25 ya 40 se bug pakda nahi jaayega.\n\n**BVA vs EP:**\n| Point | EP | BVA |\n|---|---|---|\n| Kya karti | Domain ko classes mein baantti | Class ke kinare test karti |\n| Values | Ek representative per class | Boundary aur just bahar |\n| Defect | Missing validation | Off-by-one, wrong operator |\n| Relation | Base technique | EP ka extension |\n\n**Applicable kahan:** numeric range, string length, date, loop counter, file size, timeout, quantity.\n**Aam defect:** off-by-one, galat comparison operator, month-end, leap year, zero/negative value.\n\n**Best practice:** EP + BVA + decision table = functional black-box testing ka base.\n\n**Diagram:** Refer to Boundary Value Analysis diagram.",
    diagram: 'st3-bva',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq17',
    unit: '3',
    subjectId: 'software-testing',
    question: 'What is equivalence partitioning? Explain with examples and state its advantages and limitations.',
    answer: "**Equivalence Partitioning (EP):** Input domain ko aise classes mein baantna jinke saare values same behave karte hain, phir har class se ek representative value test karna.\n\n**Steps:** input identify karo → valid classes banao → invalid classes banao (har alag galti ke liye alag) → representative value chuno → test cases likho.\n\n**Examples:**\n- Age 18–60 → valid (35), invalid low (10), invalid high (70) = 3 tests.\n- Payment mode (card, UPI, netbanking) → valid (UPI), invalid (cash) = 2 tests.\n- Email → valid (riya@mail.com), invalid (riya@, blank, with spaces).\n- Boolean checkbox → 2 classes.\n\n**Advantages:** test cases drastically kam, coverage same, systematic approach, negative tests built-in, fast regression.\n**Limitations:** boundary defect miss (BVA chahiye), multi-field combination defect miss (decision table chahiye), requirement galat samjhe to partition galat, non-functional testing cover nahi hoti.\n\n**Note:** ek invalid class = ek test case with ek galat value; ek hi test mein do galtiyan na daalo.\n\n**Diagram:** Refer to Equivalence Partitioning diagram.",
    diagram: 'st3-equivalence',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq18',
    unit: '3',
    subjectId: 'software-testing',
    question: 'Explain state transition testing and graph based testing with an example.',
    answer: "**State Transition Testing:** System ko states, events aur transitions ke model ki tarah likh kar test cases derive karna.\n\n**Elements:** State (situation), Event (input), Transition (allowed move), Action (transition par kaam).\n\n**ATM example:**\n- IDLE → CARD IN (insert card) → PIN OK (correct PIN) → MENU (choose option) → DISPENSE (withdraw) → IDLE (eject).\n- Invalid transitions: PIN OK se seedha DISPENSE (cash bina PIN verify), bina card ke withdraw, 3 galat PIN ke baad bhi access.\n\n**Coverage criteria:**\n1. **State coverage** — har state ek baar.\n2. **Transition coverage** — har valid transition ek baar.\n3. **Path coverage** — start se end tak har raasta.\n\n**Graph Based Testing:** System ko node + edge graph ki tarah model karna (CFG, use case graph, state graph, decision graph).\n- **Node coverage** — har node visit.\n- **Edge coverage** — har edge traverse.\n- **Path coverage** — har path.\n- **Basis path** — V(G) jitne independent paths.\n\n**Kahan lagta hai:** ATM, login session, order status, workflow approval, protocol.\n**Fayda:** state dependent aur sequence dependent bug pakadta hai; invalid transition testing security deti hai.\n\n**Diagram:** Refer to State Based Testing diagram.",
    diagram: 'st3-state-graph',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq19',
    unit: '3',
    subjectId: 'software-testing',
    question: 'What is compatibility testing? Explain its types and how combinations are selected.',
    answer: "**Compatibility Testing:** Non-functional testing — application different environments par sahi chalti hai ya nahi, ye verify karti hai.\n\n**Types:**\n1. **Backward compatibility** — purane version/data/API ke saath chale.\n2. **Forward compatibility** — naye OS/browser ke saath gracefully chale.\n3. **Cross-browser** — Chrome, Firefox, Safari, Edge.\n4. **Cross-platform** — Windows, macOS, Linux, Android, iOS.\n5. **Device** — screen size, resolution, touch.\n6. **Hardware** — RAM, GPU, printer, scanner.\n7. **Network** — 2G/3G/4G/Wi-Fi, offline, high latency.\n8. **Data/database** — MySQL, PostgreSQL, CSV import, UTF-8.\n9. **Language/locale** — date format, currency, RTL.\n\n**Combination selection (exhaustive impossible):** supported list → analytics (users kahan hain) → risk based (payment/login critical) → pairwise/orthogonal array → extremes (smallest screen, oldest browser) → defect history.\n\n**Tools:** Selenium Grid, Playwright, BrowserStack, Sauce Labs, VM/Docker snapshots.\n**Output:** compatibility matrix (OS × browser, pass/fail) jo supported combinations ka document ban jaata hai.\n\n**Diagram:** Refer to Compatibility Testing diagram.",
    diagram: 'st3-compatibility',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'stq20',
    unit: '3',
    subjectId: 'software-testing',
    question: 'What is user documentation testing? Explain its parameters and why documentation defects matter.',
    answer: "**User Documentation Testing:** Product ke saath aane wale documents — user manual, installation guide, online help, FAQ, release notes, API reference — verify karna ki wo accurate, complete, clear, consistent, usable aur current hain.\n\n**6 Parameters:**\n1. **Accuracy** — har step sach mein chalta hai, output match karta hai.\n2. **Completeness** — har feature documented, error messages explain.\n3. **Clarity** — simple language, chhote steps, screenshots.\n4. **Consistency** — UI ke exact shabd, ek terminology, same version.\n5. **Usability** — index, search, links kaam karte hain.\n6. **Currency** — latest build ke hisaab se updated.\n\n**Kaise karein:** documents list → checklist → version match → step-by-step execution → naya user test → screenshot/UI comparison → link aur code example check → findings log (severity ke saath) → fix ke baad retest.\n\n**Kyun documentation defect hai:**\n- Galat step se data loss ya install fail ho sakta hai.\n- Support tickets aur training cost badhte hain.\n- Compliance/audit mein documentation evidence hota hai.\n- Product ka image kharab hota hai.\n\n**Typical severity:** galat step/prerequisite missing = High; purana screenshot/feature undocumented = Medium; typo = Low.\n\n**Diagram:** Refer to User Documentation Testing diagram.",
    diagram: 'st3-documentation',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'stq21',
    unit: '3',
    subjectId: 'software-testing',
    question: 'What is domain testing? Explain domain errors with examples.',
    answer: "**Domain Testing:** Black-box technique — input aur output domain ko sub-domains mein baant kar chune hue values se test karna (EP + BVA ka practical combined form).\n\n**Steps:** input variables aur valid range identify → constraints/dependencies note → output domain define → sub-domains banao → har sub-domain se on-point (nominal) value → har boundary se off-point value → execute karke output expected domain mein hai ya nahi check karo.\n\n**Example (quantity 1–100):** 0 (off), 1 (on), 2 (on), 50 (nominal), 99 (on), 100 (on), 101 (off). Output domain: total 0 se 10,00,000; negative total = defect.\n\n**Domain errors:**\n1. **Closure error** — off-by-one; `qty < 100` se 100 reject ho jaata hai.\n2. **Shift error** — poora boundary khisak gaya (18–60 ki jagah 20–60).\n3. **Missing boundary** — upper limit check hi nahi, 99999 accept.\n4. **Extra boundary** — jo rule nahi tha wo lag gaya.\n5. **Boundary tilt** — AND ki jagah OR (non-citizen bhi allow).\n6. **Output domain error** — input sahi par calculation galat (discount double lag gaya).\n\n**Kab use karein:** numeric limits, form validation, EMI calculator, calculation engine, API input validation.\n\n**Diagram:** Refer to Domain Testing diagram.",
    diagram: 'st3-domain',
    image: null,
    importance: '⭐⭐⭐⭐',
  },

  // ========================================================
  // Software Testing Unit 4 — Testing Strategies
  // ========================================================
  {
    id: 'stq22',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What is integration testing? Explain top-down, bottom-up, sandwich and big bang approaches.',
    answer: "**Integration Testing:** Modules ko combine karke interface, data flow aur interaction verify karna. Unit testing ke baad, system testing se pehle.\n\n**1. Big Bang (non-incremental):** saare modules ek saath jod kar test. Simple par defect ka source mushkil se milta hai.\n\n**2. Top-Down:** uppar ke module se shuru, neeche ke liye **stub**. Fayda — early UI demo, control flow pehle test. Nuksaan — core logic late test.\n\n**3. Bottom-Up:** neeche ke module se shuru, uppar ke liye **driver**. Fayda — core logic pehle test, stubs kam. Nuksaan — UI late.\n\n**4. Sandwich / Hybrid:** top-down + bottom-up, beech mein milte hain. Bade system ke liye best, effort zyada.\n\n**Stub vs Driver:** stub neeche ka fake module (fixed response), driver uppar ka test harness (unit ko call karta hai).\n\n**Aam integration defect:** data format mismatch, missing field, galat type, error handling gap, sequence/timing issue.\n\n**Diagram:** Refer to Integration Testing diagram.",
    diagram: 'st4-integration',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq23',
    unit: '4',
    subjectId: 'software-testing',
    question: 'Differentiate between system testing and acceptance testing. Explain alpha, beta and UAT.',
    answer: "**System Testing:** Poora integrated system requirement ke against test hota hai — functional + non-functional, production jaisa environment. QA team karti hai.\n\n**Acceptance Testing:** Customer/end user apne acceptance criteria aur business need ke against verify karta hai. Final gate — sign-off isi se milta hai.\n\n| Point | System Testing | Acceptance Testing |\n|---|---|---|\n| Kaun | QA/tester | Customer, end user |\n| Kis ke against | SRS/spec | Business need, acceptance criteria |\n| Focus | Poori depth, functional + non-functional | Real user workflow |\n| Output | Defect report | Sign-off / rejection |\n\n**Acceptance ke types:**\n- **Alpha** — developer site par, internal team + selected users, controlled environment.\n- **Beta** — customer site par, real users, live feedback, real environment.\n- **UAT** — real business workflow, UAT environment, production jaisa data.\n- **Contractual / regulatory / operational** — legal SLA, compliance, backup-recovery handover.\n\n**Diagram:** Refer to System and Acceptance Testing diagram.",
    diagram: 'st4-system-acceptance',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq24',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What is scenario testing? How is it different from test case testing?',
    answer: "**Scenario Testing:** Realistic user story se end-to-end business workflow test karna — isolated features ki jagah poori journey.\n\n**Scenario elements:** precondition, test data, steps (har step ka expected result), expected business outcome.\n\n**Example:** user logged in → search phone → compare → add to cart → address → UPI payment → order confirm → SMS + invoice.\n\n**Scenario vs test case:**\n| Point | Test case | Scenario |\n|---|---|---|\n| Scope | Ek feature | Kai features ka business flow |\n| Data | Fixed input/output | Realistic multi-step data |\n| Count | 1 scenario = 10–20 test cases | 1 flow |\n| Purpose | Feature correctness | Business process correctness |\n\n**Scenario ke types:** primary (happy path), alternate, exception (payment fail), edge, regression.\n\n**Fayda:** business flow, data consistency aur user experience ek saath verify; real user ke najariye se gap dikhta hai.\n\n**Diagram:** Refer to Scenario Testing diagram.",
    diagram: 'st4-scenario',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq25',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What is performance testing? Explain load, stress, spike and endurance testing with metrics.',
    answer: "**Performance Testing:** Non-functional testing — responsiveness, throughput, stability aur scalability workload ke against naapna.\n\n**Types:**\n1. **Load** — expected peak load (1000 users, < 2s response).\n2. **Stress** — capacity se zyada; break point aur graceful failure.\n3. **Spike** — achanak traffic burst; auto-scaling, queue, rate limiting.\n4. **Endurance / soak** — 8–24 ghante load; memory leak, connection leak.\n5. **Volume** — bade data size par query/report.\n6. **Scalability** — load badhane par scale factor.\n\n**Metrics:** response time (p90/p95, sirf average nahi), throughput (TPS), error rate, CPU/memory, DB query time, concurrent users, think time.\n\n**Environment:** production jaisa hardware + data volume + network latency + third-party latency, warna result bekaar.\n\n**Common bottleneck:** slow query, missing index, N+1 query, chatty API, memory leak, connection pool exhaust.\n\n**Tools:** JMeter, k6, Locust, Gatling, LoadRunner.\n\n**Diagram:** Refer to Performance Testing diagram.",
    diagram: 'st4-performance',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq26',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What is regression testing? Differentiate retesting and regression testing.',
    answer: "**Regression Testing:** Change (fix, feature, refactor, upgrade) ke baad purani functionality verify karna — koi naya defect na aaya ho aur purana kaam na toota ho.\n\n**Process:** change note → impact analysis → suite select → smoke → affected + stable suite → result compare → suite update.\n\n**Strategies:** retest-all, selective, prioritized.\n\n**Retesting vs Regression:**\n| Point | Retesting | Regression |\n|---|---|---|\n| Purpose | Fix verify | Purana kaam safe |\n| Test cases | Wahi fail hua case | Affected + stable suite |\n| Scope | Narrow | Wide |\n\n**Smoke vs retest vs regression:** smoke = build health (10–20 critical tests), retest = fix confirm, regression = purana kaam.\n\n**Regression defect** = pehle PASS, ab FAIL — release blocker. Isliye har fix ke saath ek regression test likho.\n\n**Automation:** Selenium, Playwright, Cypress, PHPUnit + CI (PR par fast subset, nightly full run).\n\n**Diagram:** Refer to Regression Testing diagram.",
    diagram: 'st4-regression',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq27',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What is ad hoc testing? Explain exploratory testing, error guessing and monkey testing.',
    answer: "**Ad Hoc Testing:** Informal testing — koi test plan, test case ya documentation nahi. Tester experience aur intuition se defect dhoondhta hai. Sasta aur fast, par reproducible nahi aur coverage naapna mushkil.\n\n**Exploratory Testing (structured ad hoc):** charter + timebox (60–120 min) + session notes + debrief. Test design aur execution saath — learning ke saath testing. Agile teams mein common.\n\n**Error Guessing:** experience se andaza — blank field, 0 quantity, double click, back button, session expire, special characters, 50 MB upload.\n\n**Monkey Testing:** random clicks/inputs (tool ya insaan) — crash, hang, memory issue pakadta hai. Smart/brilliant monkey input-aware hota hai; gorilla testing ek module par repeated depth testing.\n\n**Limit:** business logic ke defect nahi pakadta, coverage measure nahi hoti — isliye formal testing ka supplement.\n\n**Diagram:** Refer to Ad hoc Testing diagram.",
    diagram: 'st4-adhoc',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq28',
    unit: '4',
    subjectId: 'software-testing',
    question: 'Differentiate usability testing and accessibility testing. Explain WCAG POUR.',
    answer: "**Usability Testing:** Real users ke saath check karna ki software use karna kitna aasan aur satisfying hai.\n- **3 measures (ISO 9241-11):** effectiveness (task complete), efficiency (time/clicks), satisfaction (SUS score).\n- **Method:** 5–8 users, think aloud, observe, severity ke saath findings.\n\n**Accessibility Testing:** Divyang users (visual, hearing, motor, cognitive) ke liye usable hai ya nahi.\n\n**WCAG POUR:**\n1. **Perceivable** — alt text, captions, 4.5:1 contrast.\n2. **Operable** — keyboard se chale, focus visible, no trap.\n3. **Understandable** — clear language, saaf error message.\n4. **Robust** — semantic HTML + ARIA, screen reader compatible.\n\n**Levels:** A / AA / AAA (AA aksar legal target). **Laws:** RPwD Act (India), Section 508 (US), EAA.\n\n**Test:** keyboard-only, NVDA/JAWS, axe/Lighthouse, 200% zoom, contrast checker.\n\n**Diagram:** Refer to Usability and Accessibility Testing diagram.",
    diagram: 'st4-usability-accessibility',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq29',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What is GUI testing? What do you check and how is it automated?',
    answer: "**GUI Testing:** Interface ke graphical elements, layout aur behaviour verify karna — functional + cosmetic dono.\n\n**Checklist:** layout & alignment, controls (enable/disable, dropdown), navigation (links, tab order, back button), input validation aur error message, images & fonts (alt text, broken image), look & feel (brand colour, spelling), data display (sorting, pagination, empty state), accessibility basics (contrast, focus).\n\n**Aam defect:** layout break on mobile, submit button double click se duplicate order, loader missing, typo, broken image.\n\n**Automation:**\n- Record & playback (Selenium IDE) — fast start, fragile.\n- Object based (Selenium WebDriver, Playwright, Cypress) — locator + assertion, Page Object Model.\n- Visual regression (Percy, BackstopJS, Playwright snapshots) — baseline vs current screenshot diff.\n- Data driven — ek script, multiple data sets.\n\n**Diagram:** Refer to GUI Testing diagram.",
    diagram: 'st4-gui',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq30',
    unit: '4',
    subjectId: 'software-testing',
    question: 'Differentiate verification and validation. Why is validation testing important?',
    answer: "**Verification** = \"Are we building the product right?\" — spec/design ke against, **static** (reviews, inspection, lint, SAST). Har phase mein.\n\n**Validation** = \"Are we building the right product?\" — user requirement ke against, **dynamic** (software chala kar). Coding ke baad, release se pehle.\n\n| Point | Verification | Validation |\n|---|---|---|\n| Execution | Nahi | Haan |\n| Kis ke against | Spec, standard | Business need |\n| Kaun | Reviewer, QA | Tester, customer |\n| Cost | Kam | Zyada par final proof |\n\n**Validation ke roop:** system testing, acceptance/UAT, alpha/beta, regression, exploratory. **Result:** pass/fail + sign-off.\n\n**Importance:** user requirement confirm, business risk kam, regulatory compliance, production defect cost se bachav, release confidence.\n\n**Diagram:** Refer to Validation Testing diagram.",
    diagram: 'st4-validation',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq31',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What is specification based testing? Explain decision table testing with an example.',
    answer: "**Specification Based Testing (black-box / behavioural):** Test cases required behaviour ki specification se derive hote hain — code se nahi. Techniques: decision table, cause-effect graph, state transition, grammar/syntax, EP + BVA, classification tree, use case testing.\n\n**Decision Table Example — discount:**\n| Rule | Amount > 5000 | Member | Coupon | Discount |\n|---|---|---|---|---|\n| R1 | T | T | T | 15% |\n| R2 | T | T | F | 12% |\n| R3 | T | F | F | 10% |\n| R4 | F | T | T | 7% |\n| R5 | F | F | F | 0% |\n\nHar rule = ek test case. Jo rule spec mein missing hai wahi defect banega.\n\n**Fayda:** implementation independent, traceable, early test design, spec ki galti bhi dikh jaati hai. **Limit:** spec incomplete/galat ho to test bhi galat; n conditions par 2^n rules.\n\n**Diagram:** Refer to Specification Based Testing diagram.",
    diagram: 'st4-spec-based',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq32',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What are the challenges in testing object oriented software? Explain the levels of OO testing.',
    answer: "**Challenges:**\n1. **Encapsulation** — private state bahar se set/verify nahi hota.\n2. **Inheritance** — child parent ka behaviour inherit karti hai; parent ki suite child par dobara chalao.\n3. **Polymorphism** — runtime type decide karta hai kaunsa method chalega; har implementation test karo.\n4. **Dynamic binding** — static analysis se call graph poora nahi milta.\n5. **Object state** — same method ka result state par depend karta hai.\n6. **Message interaction** — object dependency; mock se isolate karo.\n\n**Levels:**\n1. **Intra-method** — ek method ka logic (white-box).\n2. **Inter-method** — class ke andar method to method.\n3. **Intra-class** — poora class behaviour + state machine.\n4. **Inter-class** — do class ka message interaction.\n5. **System level** — poora OO system, use case ke through.\n\n**Techniques:** MM path coverage, state based testing, inheritance/subclass testing, polymorphic testing, exception testing, mock/fake.\n\n**Diagram:** Refer to Testing Object Oriented Software diagram.",
    diagram: 'st4-oo',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq33',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What are the dimensions of testing a web based application?',
    answer: "**Web application testing** 3-tier architecture (presentation, business logic, data) par hoti hai aur 8 dimension cover karti hai:\n\n1. **Content** — spelling, accuracy, legal text, SEO.\n2. **Navigation** — links, 404, breadcrumb, back button, deep link.\n3. **UI / presentation** — layout, responsive, cross-browser CSS.\n4. **Functionality** — forms, search, login, cart, payment, upload, API.\n5. **Compatibility** — browser, OS, device, resolution, network.\n6. **Security** — XSS, SQLi, CSRF, HTTPS, session, file upload (OWASP Top 10).\n7. **Performance** — page load (3s rule), concurrent users, CDN, caching.\n8. **Usability / accessibility** — keyboard, screen reader, contrast.\n\n**Web specific challenge:** stateless HTTP + session, concurrent users, network latency, multiple browsers, frequent releases (isliye regression automation).\n\n**Tools:** Selenium, Playwright, Cypress, Postman, JMeter, k6, OWASP ZAP, Lighthouse, axe.\n\n**Diagram:** Refer to Testing Web Based Applications diagram.",
    diagram: 'st4-web',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq34',
    unit: '4',
    subjectId: 'software-testing',
    question: 'What is database testing? Explain ACID properties and common database defects.',
    answer: "**Database Testing:** Database layer verify karna — schema, constraints, indexes, triggers, stored procedures, transactions, data integrity, CRUD, migration, backup aur performance.\n\n**ACID:**\n1. **Atomicity** — sab ya kuch nahi (payment fail → order bhi na bane).\n2. **Consistency** — transaction ke baad valid state, constraint intact.\n3. **Isolation** — parallel transactions interfere na karein (ek seat par ek hi booking).\n4. **Durability** — commit ke baad data permanent (restart ke baad bhi).\n\n**Common defects:** duplicate record (unique constraint missing), orphan record (FK missing), data truncation (column chhoti), wrong type/precision, garbage/stale data, encoding issue (Hindi/emoji `????`), trigger/procedure bug, partial save (rollback missing), migration data loss, slow query (missing index, N+1).\n\n**Kaise test karein:** UI se action → direct SQL verify → edge data (Unicode, max length, 0/negative) → migration par row count/checksum compare → bade volume par execution plan.\n\n**Tools:** SQL queries, DBUnit, tSQLt, pgTAP, migration scripts.\n\n**Diagram:** Refer to Database Testing diagram.",
    diagram: 'st4-database',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq35',
    unit: '5',
    subjectId: 'software-testing',
    question: "Define software test automation. Explain its process and advantages.",
    answer: "**Software Test Automation:** Predefined test cases ko software tool ki madad se execute karna, actual result ko expected result se compare karna aur report banana — bina manual intervention ke.\n\n**Process (7 steps):**\n1. **Test case selection** — repeatable, stable aur high-risk cases chuno.\n2. **Script development** — tool ke API se steps likho (record ya code).\n3. **Test data setup** — isolated, repeatable data taiyar karo.\n4. **Execution** — local, scheduled ya CI pipeline mein chalao.\n5. **Comparison** — assertion se expected vs actual.\n6. **Reporting** — pass/fail, screenshot, log, video.\n7. **Maintenance** — UI/requirement change par script update.\n\n**Advantages:**\n- **Speed** — 100 tests minutes mein, manual se 10x–100x fast.\n- **Repeatability** — same script, same steps, same result.\n- **Coverage** — cross-browser, cross-device, multi-language data.\n- **Regression safety** — har build par poora suite chal sakta hai.\n- **24x7** — scheduled night runs, CI par har commit.\n- **Reusability** — ek script baar-baar, kai environments mein.\n\n**Diagram:** Refer to Automation Pipeline diagram.",
    diagram: 'st5-automation-intro',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq36',
    unit: '5',
    subjectId: 'software-testing',
    question: "What skills are required for automation testing? Explain technical and non-technical skills.",
    answer: "**Automation testing skills:**\n\n**A. Technical skills:**\n1. **Programming** — Java / Python / JavaScript: OOP, loops, functions, exception handling, collections.\n2. **HTML, CSS, DOM** — page structure padhna, element attributes samajhna.\n3. **Locator strategy** — id, name, CSS selector, relative XPath, shadow DOM, iframe.\n4. **Framework design** — Page Object Model, data driven, keyword driven, hybrid, reporting/logging.\n5. **Version control** — Git: branch, commit, merge, conflict resolve, pull request.\n6. **CI/CD** — Jenkins / GitHub Actions, pipeline config, headless run, Docker basics.\n7. **API testing** — REST, JSON, status codes, auth tokens, Postman/RestAssured.\n8. **Database** — SQL queries se data setup aur verification.\n9. **Debugging** — logs, stack trace, breakpoints, screenshot, flaky analysis.\n\n**B. Non-technical skills:**\n- Analytical thinking (kya automate karna hai)\n- Domain / business knowledge\n- Communication aur bug reporting\n- Documentation aur ownership\n- Patience (root cause hunting)\n\n**Diagram:** Refer to Skills Map diagram.",
    diagram: 'st5-automation-skills',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq37',
    unit: '5',
    subjectId: 'software-testing',
    question: "What is the scope of automation? What factors determine it?",
    answer: "**Scope of Automation:** Ye define karta hai ki kaunse test cases, modules aur levels automate honge, kitni coverage hogi aur kis timeline mein. Ise test planning phase mein decide karte hain.\n\n**Determining factors:**\n1. **Frequency of execution** — regression/smoke har build par chalta hai → automate.\n2. **Criticality** — payment, login, checkout jaise business-critical flows pehle.\n3. **Stability of requirements/UI** — unstable feature automate karne se script roz tootegi.\n4. **Complexity** — bahut complex + low value test ko manual rakho.\n5. **Test data availability** — data hi nahi to data-driven automation nahi banegi.\n6. **Tool feasibility** — CAPTCHA, OTP, biometric, hardware simulation.\n7. **Team skill aur time** — framework banane ka bandwidth.\n8. **ROI** — manual effort saved vs automation + maintenance cost.\n9. **Environment** — stable test environment available hai ya nahi.\n\n**Diagram:** Refer to Automation Scope diagram.",
    diagram: 'st5-automation-scope',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq38',
    unit: '5',
    subjectId: 'software-testing',
    question: "What is an automation framework? Explain the architecture of a test automation framework.",
    answer: "**Automation Framework:** Guidelines, coding standards, reusable components aur libraries ka set jo test scripts ko structure deta hai — execution, data, reporting aur maintenance ke liye.\n\n**Typical layered architecture:**\n\n1. **Test Data Layer** — Excel/JSON/CSV/DB se input aur expected values.\n2. **Test Script Layer** — business steps + assertions; yahan locators nahi hote.\n3. **Page Object Layer** — har page ki class: locators + page methods (`login()`, `addToCart()`).\n4. **Utility Layer** — waits, config reader, logger, screenshot, data reader, retry.\n5. **Driver / Runner Layer** — browser factory, WebDriver setup, TestNG/pytest, CI hooks.\n6. **Reporting Layer** — HTML/Allure report, screenshot on failure, JUnit XML.\n\n**Dependency direction:** upar ki layer neeche wali par depend karti hai, ulta nahi. Isi liye UI change sirf page object layer ko touch karta hai.\n\n**Diagram:** Refer to Framework Architecture diagram.",
    diagram: 'st5-automation-architecture',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq39',
    unit: '5',
    subjectId: 'software-testing',
    question: "What are the requirements for selecting a test automation tool?",
    answer: "**Requirements / criteria for tool selection:**\n\n1. **Platform & technology support** — OS, browsers, mobile (Android/iOS), desktop, API, technology stack (React, Angular, PHP).\n2. **Scripting language & IDE** — team ki known language, debugging, code reuse, IntelliSense.\n3. **Object identification** — stable locator strategy, object repository, dynamic element, iframe, shadow DOM.\n4. **Reporting & logging** — step-wise log, screenshot/video on failure, HTML/Allure/JUnit XML export.\n5. **Integration** — CI/CD (Jenkins, GitHub Actions), JIRA/defect tracker, test management, Docker, cloud grid.\n6. **Data parameterisation** — Excel/JSON/CSV/DB driven data, environment config.\n7. **Cost & licence** — open source vs commercial, training, infra, support contract.\n8. **Scalability & parallel execution** — grid, cloud, headless.\n9. **Vendor support & community** — docs, forum activity, release frequency.\n10. **Learning curve** — team kitni jaldi productive hogi.\n\n**Diagram:** Refer to Tool Requirements diagram.",
    diagram: 'st5-test-tool-requirements',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq40',
    unit: '5',
    subjectId: 'software-testing',
    question: "What are the common challenges in test automation? Suggest solutions.",
    answer: "**Challenges and solutions:**\n\n1. **Flaky tests** — same code par pass/fail. *Fix:* explicit waits, stable locators, isolated data, root-cause analysis (retry se chhupao nahi).\n2. **High initial cost** — framework, scripts, training. *Fix:* pilot se shuru karo, phased rollout, ROI 3–6 runs ke baad.\n3. **Maintenance** — UI change se scripts tootti hain. *Fix:* Page Object Model, data-testid attributes, kam UI tests.\n4. **Dynamic elements** — badalte id/class. *Fix:* relative XPath, role/text locators, auto-healing (limited).\n5. **Async behaviour** — AJAX, spinner, delayed render. *Fix:* explicit/fluent waits, network idle wait.\n6. **Skill gap** — coding nahi aati. *Fix:* training, pairing, coding standards, code review.\n7. **Environment/data issues** — env down, shared DB. *Fix:* Docker, seeded data, per-test namespace.\n8. **False confidence** — green suite, production bug. *Fix:* strong assertions, negative cases, exploratory testing.\n9. **Slow suite** — feedback late. *Fix:* parallel, sharding, smoke first, test impact analysis.\n10. **Test order dependency** — ek test doosre par depend. *Fix:* independent atomic tests.\n\n**Diagram:** Refer to Automation Challenges diagram.",
    diagram: 'st5-automation-challenges',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq41',
    unit: '5',
    subjectId: 'software-testing',
    question: "Explain the defect life cycle with a diagram reference.",
    answer: "**Defect Life Cycle (Bug Cycle):** Defect ki states aur transitions.\n\n1. **New** — tester ne defect raise kiya, abhi review nahi hua.\n2. **Assigned** — lead ne developer ko assign kiya.\n3. **Open** — developer accept karke fix par kaam kar raha hai.\n4. **Fixed / Resolved** — code fix ho gaya, build mein aayega.\n5. **Retest** — tester fix ko same steps se verify karta hai.\n6. **Verified** — fix sahi mila; regression bhi check.\n7. **Closed** — defect band.\n\n**Alternate paths:**\n- **Rejected** — developer kehta hai bug nahi hai / duplicate / by design.\n- **Deferred** — fix agle release ke liye postpone.\n- **Reopened** — retest mein fail, wapas Open.\n- **Duplicate** — pehle se exist karta hai.\n\n**Severity vs Priority:** Severity = kitna bada defect (technical impact); Priority = kitni jaldi fix (business impact). High severity + low priority example: crash in a rarely used admin report.\n\n**Diagram:** Refer to Bug Tracking and Debugging diagram.",
    diagram: 'st5-bug-debugging',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq42',
    unit: '5',
    subjectId: 'software-testing',
    question: "Differentiate between manual testing and automated testing.",
    answer: "**Difference table:**\n\n| Point | Manual Testing | Automated Testing |\n|---|---|---|\n| Executed by | Human tester | Tool + script |\n| Speed | Slow (ek-ek step) | Fast (parallel, seconds) |\n| Initial cost | Low | High (tool + scripting) |\n| Long-term cost | High (repeat effort) | Low (reuse) |\n| Accuracy | Human error possible | Consistent, same steps |\n| Exploration | Naya defect dhoondh sakta hai | Sirf predefined checks |\n| Regression | Boring, skip hota hai | Har build par reliable |\n| Setup needed | Kam | Framework, data, CI |\n| Best for | Exploratory, UX, one-time | Regression, load, data driven |\n| Skill | Domain + testing | Coding + tool + framework |\n\n**Conclusion:** Dono complementary hain — manual judgement deta hai, automation speed aur repeatability.\n\n**Diagram:** Refer to Manual vs Automated diagram.",
    diagram: 'st5-manual-vs-automation',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq43',
    unit: '5',
    subjectId: 'software-testing',
    question: "Explain Cypress, TestCafe and Protractor as UI automation tools.",
    answer: "**1. Cypress**\n- JavaScript/TypeScript, browser ke andar (same run loop) chalta hai.\n- **Features:** auto-wait, time travel snapshots, live reload, video, network stub (`cy.intercept`), built-in assertions.\n- **Limit:** multi-tab aur cross-origin limited; parallel ke liye Cypress Cloud.\n- **Best for:** SPA (React/Angular/Vue), JS team, fast local feedback.\n\n**2. TestCafe**\n- JavaScript/TypeScript, **proxy based** — Node server page mein script inject karta hai, **WebDriver ki zaroorat nahi**.\n- **Features:** kisi bhi browser par chalta hai, built-in parallel (`-c`), reporters, iframe aur file upload support, no driver setup.\n- **Limit:** proxy ke kaaran kuch corporate setups mein network config; native events limited.\n- **Best for:** cross-browser runs bina driver management ke.\n\n**3. Protractor**\n- Angular apps ke liye bana, **WebDriverJS** par based, Angular-specific wait/selectors (`by.model`, `by.binding`).\n- **Status:** Angular ne 2017+ se support kam kiya, Protractor **deprecated** — naye projects ke liye recommended nahi.\n- **Migration:** Cypress / Playwright / Selenium.\n\n**Diagram:** Refer to UI Tools Comparison diagram.",
    diagram: 'st5-ui-tools',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq44',
    unit: '5',
    subjectId: 'software-testing',
    question: "Write a case study of automation testing in an e-commerce project.",
    answer: "**1. Context:** Mid-size e-commerce, 6 QA, weekly release, ~300 regression cases, manual regression 5 din.\n\n**2. Problem:**\n- Har release par 5 din manual regression — release slip hoti thi.\n- Regression skip hone par defect production mein.\n- Cross-browser (Chrome, Firefox, Safari) check adhoora.\n\n**3. Approach:**\n- **Smoke suite** (login, search, cart, checkout, payment) — 40 cases.\n- **Regression suite** — 300 cases, priority ke hisaab se P1 → P2.\n- **API layer tests** — order, inventory, coupon (UI se fast).\n- **Page Object Model** + external config, data driven for address/currency.\n- CI: har merge par smoke (15 min), nightly full regression.\n\n**4. Tools:** Selenium WebDriver + TestNG + Maven, Jenkins, Allure report, Selenium Grid (3 browsers), Git.\n\n**5. Result:**\n| Metric | Before | After |\n|---|---|---|\n| Regression time | 5 din | 8 ghante (parallel) |\n| Release cycle | weekly se monthly | weekly se daily |\n| Defect escape | 6–8 per release | 1–2 per release |\n| Smoke feedback | next day | 15 minutes |\n\n**6. Lessons:** Flaky tests sabse bada issue the — explicit waits + test data isolation se 12% se 2% par aaya. UI-heavy tests kam kiye, API tests badhaye.\n\n**Diagram:** Refer to Automation Case Studies diagram.",
    diagram: 'st5-case-studies',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq45',
    unit: '5',
    subjectId: 'software-testing',
    question: "What is Selenium? Explain its history from Selenium Core to Selenium 4.",
    answer: "**Selenium:** Open-source web automation suite — browser ko program se control karta hai. Multiple languages (Java, Python, C#, Ruby, JavaScript, Kotlin) aur browsers (Chrome, Firefox, Edge, Safari) support karta hai. Sirf web UI automate karta hai.\n\n**History:**\n| Year | Milestone | Kya hua |\n|---|---|---|\n| 2004 | Selenium Core | Jason Huggins (ThoughtWorks) — JS test runner, manually dohrne ki jagah |\n| 2006 | Selenium IDE | Firefox plugin, record & playback |\n| 2007 | Selenium RC | Remote control server, any-language client, JS injection |\n| 2008 | Selenium Grid | Parallel/distributed runs |\n| 2011 | Selenium 2.0 | WebDriver (Simon Stewart) merge — native browser control |\n| 2016 | Selenium 3 | W3C WebDriver standard, RC removed |\n| 2021 | Selenium 4 | W3C only, relative locators, CDP, new Grid, Selenium Manager |\n\n**Naam:** Mercury (Mercury Interactive) ke ulta chemical — selenium — joke ke roop mein rakha gaya.\n\n**Diagram:** Refer to Selenium Journey diagram.",
    diagram: 'st5-selenium-intro',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq46',
    unit: '5',
    subjectId: 'software-testing',
    question: "Explain the Selenium tool suite and the role of each component.",
    answer: "**Selenium suite ke components:**\n\n1. **Selenium IDE** — browser extension (Chrome/Firefox/Edge). Record & playback, `.side` file, control flow, code export. Non-programmers aur quick smoke ke liye.\n2. **Selenium WebDriver** — main programming library. Browser ko code se control karta hai: locators, waits, actions, alerts, iframes. Framework isi par banta hai.\n3. **Selenium Grid** — parallel aur distributed execution. Hub/Router requests leta hai, Nodes browser dete hain (Selenium 4 mein Router, Distributor, Session Map, Nodes).\n4. **Selenium Manager** — Selenium 4.6+ mein built-in driver manager: driver download aur browser version match automatically.\n5. **Selenium RC (legacy)** — purana remote control server, JS injection; Selenium 3 se remove.\n\n**Supporting (Selenium ke bahar):**\n- Assertions/runner: TestNG, JUnit, pytest, Mocha.\n- Reporting: Allure, ExtentReports.\n- Build: Maven/Gradle, npm; CI: Jenkins, GitHub Actions.\n\n**Diagram:** Refer to Selenium Tool Suite diagram.",
    diagram: 'st5-selenium-suite',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq47',
    unit: '5',
    subjectId: 'software-testing',
    question: "What is Selenium IDE? Explain its features, advantages and limitations.",
    answer: "**Selenium IDE:** Browser extension (Chrome/Firefox/Edge) jo user actions record karta hai, commands mein convert karta hai aur replay karta hai — bina code likhe.\n\n**Features:**\n- **Record & playback** — user actions se test banta hai.\n- **Commands:** open, click, type, select, assert, verify, store, waitFor.\n- **Control flow:** if/else, while, times (naya IDE).\n- **`.side` file** — JSON-based suite file, git mein rakh sakte hain.\n- **CLI runner** — `selenium-side-runner` se CI mein chalta hai.\n- **Code export** — Java/Python/JavaScript.\n- **Debug:** step-by-step, breakpoint, speed control.\n\n**Advantages:** no coding, quick smoke, bug reproduce, Selenium commands seekhna.\n\n**Limitations:** brittle locators, logic/data-driven support kam, cross-browser parallel nahi, framework design possible nahi.\n\n**Diagram:** Refer to Selenium IDE diagram.",
    diagram: 'st5-selenium-ide',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq48',
    unit: '5',
    subjectId: 'software-testing',
    question: "Explain the architecture of Selenium RC and the reasons for its deprecation.",
    answer: "**Selenium RC architecture:**\n\n1. **Test code** — client library (Java/Python/PHP) se commands banti hain.\n2. **RC server** — `selenium-server.jar` HTTP requests leta hai, browser launch karta hai.\n3. **JavaScript injection** — server browser mein JS (Selenium Core) inject karta hai.\n4. **Proxy** — same-origin policy bypass karne ke liye requests RC proxy se jaati hain.\n5. **Application under test** — actions perform hote hain; result server ko wapas.\n\n**Deprecation ke kaaran:**\n1. **JS injection fragile** — browser updates se toot jaata.\n2. **Proxy dependency** — setup complex, speed slow.\n3. **Native events nahi** — real user behaviour simulate karna mushkil.\n4. **Flaky** — alerts, iframes, uploads, popups.\n5. **WebDriver better** — native browser automation, no proxy, faster, more stable.\n6. **Selenium 3 (2016)** mein RC remove; Selenium 4 mein koi support nahi.\n\n**Diagram:** Refer to Selenium RC diagram.",
    diagram: 'st5-selenium-rc',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq49',
    unit: '5',
    subjectId: 'software-testing',
    question: "Explain the architecture of Selenium WebDriver.",
    answer: "**Selenium WebDriver architecture (4 layers):**\n\n1. **Test code** — Java/Python/JS mein likha test (Page Object + assertions).\n2. **Language binding** — `selenium-webdriver` library commands ko W3C JSON payload mein badalti hai.\n3. **W3C WebDriver protocol (HTTP/JSON)** — commands driver binary ko jaate hain (jaise `POST /session/{id}/element`).\n4. **Browser driver** — `chromedriver`, `geckodriver`, `msedgedriver`, `safaridriver` — browser ko native API se control karta hai.\n5. **Real browser** — Chrome, Firefox, Edge, Safari — actual page load, click, type.\n\n**Flow:** `driver.findElement(By.id(\"email\"))` → HTTP request → driver → browser DOM → response (element id) → binding `WebElement` object.\n\n**Key points:**\n- Koi JavaScript injection nahi, koi proxy nahi → fast aur stable.\n- Selenium 4 sirf W3C protocol use karta hai.\n- Selenium Manager driver setup automate karta hai.\n\n**Diagram:** Refer to Selenium WebDriver diagram.",
    diagram: 'st5-selenium-webdriver',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq50',
    unit: '5',
    subjectId: 'software-testing',
    question: "What is Selenium Grid? Explain its architecture and advantages.",
    answer: "**Selenium Grid:** Parallel aur distributed execution ke liye tool — tests ko multiple machines, browsers aur OS par ek saath chalata hai.\n\n**Architecture (Selenium 3):**\n- **Hub** — central point, test requests leta hai, capabilities match karke node chunta hai.\n- **Node** — browser instance (Chrome/Windows, Firefox/Ubuntu) jahan test actually chalta hai.\n\n**Architecture (Selenium 4):**\n- **Router** — requests ka entry point.\n- **Distributor** — node slots track karta hai.\n- **Session Map** — session ID → node mapping.\n- **Nodes** — browsers.\n\n**Advantages:**\n1. **Speed** — parallel execution se suite time kam.\n2. **Cross-browser coverage** — ek hi run mein Chrome/Firefox/Edge/Safari.\n3. **Cross-platform** — Windows/Linux/macOS nodes.\n4. **Scalability** — nodes add karke capacity badhao.\n5. **CI friendly** — nightly regression, Docker grid.\n6. **Cost** — cloud grid se infra manage nahi karna padta.\n\n**Diagram:** Refer to Selenium Grid diagram.",
    diagram: 'st5-selenium-grid',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq51',
    unit: '5',
    subjectId: 'software-testing',
    question: "What are the important test design considerations for automation testing?",
    answer: "**Design considerations:**\n\n1. **Independent tests** — koi test doosre par depend na kare; akela bhi chale.\n2. **Atomic & focused** — ek test ek behaviour verify kare; fail par reason clear.\n3. **Stable locators** — `data-testid`, id, relative XPath; index/absolute XPath avoid.\n4. **Condition-based waits** — explicit waits; `Thread.sleep()` avoid.\n5. **Test data strategy** — per-test data create + cleanup, shared DB state avoid.\n6. **Page Object Model** — locators aur actions page class mein, test sirf business steps.\n7. **Meaningful assertions** — UI + API + DB cross-check, sirf click nahi.\n8. **Naming & structure** — intent batane wala naam, suite/tag organisation (smoke, regression).\n9. **Reporting & evidence** — screenshot, log, video on failure.\n10. **Balance** — pyramid follow karo (zyada unit/API, kam UI).\n\n**Diagram:** Refer to Test Design Considerations diagram.",
    diagram: 'st5-test-design',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  // ========================================================
];

// Merge subject-wise question banks
export const importantQuestions = [
  ...baseImportantQuestions,
  ...dataScienceImportantQuestions,
  ...webTechnologyImportantQuestions,
];
