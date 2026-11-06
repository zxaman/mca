// Business Intelligence Paper 2 — Model Paper (6 + 4 division)
//
// Second paper: every question is (a) 6 + (b) 4, with a 6 + 4 OR set.
//
// Facet map (deeper or complementary to Paper 1, no repeated question):
//   Unit 1 — 1.4 components of the BI architecture in depth, 1.5 role of databases, warehouses and analytics,
//            1.8 generative AI and LLMs in BI, 1.1 BI compared with data science and analytics
//   Unit 2 — 2.5 data cleaning techniques, 2.6 data integration and entity resolution,
//            2.7 metadata types and importance, 2.8 data quality concepts and dimensions
//   Unit 3 — 3.7 and 3.8 OLAP architecture and types, 3.9 the OLAP cube,
//            3.10 OLAP operations, 3.11 OLAP vs OLTP
//   Unit 4 — 4.6 temporal attributes and timestamps, 4.5 bitemporal modelling,
//            4.7 time-based analysis, 4.8 trend and historical tracking
//   Unit 5 — 5.5 interactive reporting and visual analytics, 5.6 BI tools,
//            5.7 building dashboards in a BI tool, 5.8 role of visualization in decisions

export const biPaper2 = {
  id: `bi-paper-2`,
  number: 2,
  name: `Paper 2`,
  tag: `Business Intelligence`,
  session: `Model Paper · 6 + 4 division`,
  board: `M.C.A. (Management)`,
  semester: `Model Paper`,
  pattern: `University pattern · 50 marks`,
  subjectCode: `BI`,
  subjectName: `Business Intelligence`,
  totalMarks: 50,
  time: `2½ Hours`,
  totalQuestions: 5,
  instructions: [
    `All questions are compulsory.`,
    `Every question carries 10 marks, divided as (a) 6 marks + (b) 4 marks.`,
    `Attempt any one set in each question — either (a) and (b), or (c) and (d).`,
    `Figures to the right indicate full marks.`,
    `Draw neat diagrams and support answers with examples wherever necessary.`,
    `Answers must be written in English.`,
  ],
  questions: [
    {
      number: 1,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain the components of a Business Intelligence architecture in detail — the data layer, the data management layer, the analytics layer and the delivery layer — and how data moves between them.`,
              explain:
                `**What is being asked.** The same pipeline as Paper 1, but the examiner wants each layer described with its internal parts and the interface between layers.\n\n**Layers.** Source and data layer; data management (staging, warehouse, marts, metadata); analytics (OLAP, reporting, mining, models); delivery (dashboards, alerts, embedding, mobile).\n\n**Interfaces.** Extract interface, conformed layer, semantic layer, presentation API.\n\n**How to score the 6 marks.** Four layers with their internal components (3.5) · the data flow between them (1.5) · the semantic layer and why it matters (1).`,
              answer:
                `A BI architecture is layered so that a change in one layer does not force a change in the others; the modern stack has four layers and a semantic layer between the last two.\n\n\`\`\`\nDELIVERY      dashboards · alerts · embedded views · mobile · NL query\n                   ▲  semantic layer (metrics defined once)\nANALYTICS     OLAP cubes · SQL reports · mining · forecasting models\n                   ▲\nDATA MGMT     staging → warehouse → data marts · metadata · DQ tests\n                   ▲\nDATA          ERP · CRM · POS · files · logs · external feeds\n\`\`\`\n\n| Layer | Contains | Job |\n|---|---|---|\n| **Data** | source systems, APIs, files, streams | create and hold the raw events |\n| **Data management** | staging, warehouse, marts, metadata catalogue, quality tests | integrate, conform, keep history, certify |\n| **Analytics** | OLAP engine, SQL, statistical and ML models | aggregate, compare, explain, predict |\n| **Delivery** | dashboards, reports, alerts, embedded and mobile views | put the result in front of a decision maker |\n| **Semantic** | metric definitions, hierarchies, row-level security | one definition of revenue for every consumer |\n\n**How data moves**\n1. **Extract interface** — the source is read on a watermark or change-data-capture, and the raw rows land in staging.\n2. **Conform** — codes, units and names are standardised; dimensions are deduplicated; keys are assigned.\n3. **Model** — facts and dimensions are loaded into star schemas; aggregates and cubes are built on top.\n4. **Define** — measures are published through the semantic layer, so a dashboard, a model and an API all compute revenue the same way.\n5. **Deliver** — the dashboard queries the semantic layer, never the raw tables.\n\n**Why the semantic layer earns a mark.** Without it, each report embeds its own SQL, and two dashboards eventually disagree about the same KPI — the failure that destroys trust in a BI programme faster than any technical bug.\n\n**The design rule.** Layers talk only to their neighbours: delivery never queries staging, and a new dashboard never needs a change in ETL. That is what makes the platform maintainable.\n\n**Exam line:** data, data management, analytics, delivery — with a semantic layer that defines each metric once, so every consumer gets the same number.`,
              diagram: `biflow`,
              diagramCaption:
                `The four layers of a BI architecture with the semantic layer, and how data moves from source to delivery.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain the role of databases, data warehouses and analytics in BI, and state what each contributes that the others cannot.`,
              explain:
                `**What is being asked.** Three components, three distinct contributions.\n\n**Database.** Records transactions, guarantees integrity, serves the application.\n**Warehouse.** Integrates, keeps history, models for analysis.\n**Analytics.** Turns the stored data into a comparison, a prediction or a recommendation.\n\n**How to score the 4 marks.** Three roles (2.5) · the contribution unique to each (1.5).`,
              answer:
                `The three components solve three different problems, and none of them can do the work of the others.\n\n| Component | Contributes | Cannot do |\n|---|---|---|\n| **Database (OLTP)** | records every transaction correctly, enforces keys and constraints | keep history or answer a two-year trend |\n| **Data warehouse** | integrates sources, keeps time-stamped history, models dimensions | decide anything by itself |\n| **Analytics** | converts the stored data into a comparison, forecast or recommendation | store or guarantee the data |\n\n**The chain in one example.** A POS database records that bill 8821 sold three units at 09:42. The warehouse conforms that bill into product, store, customer and date keys and keeps it for five years. Analytics then answers "which category lost margin last quarter, and what happens next quarter if the discount stays" — a question the database cannot answer because it has no history, and the warehouse cannot answer because it does not reason.\n\n**The dependency.** Analytics is only as good as the warehouse beneath it, and the warehouse is only as good as the operational data captured — which is why a weak capture process shows up months later as an unexplainable dashboard.\n\n**Exam line:** the database records, the warehouse remembers and integrates, analytics reasons — remove one and the other two lose their value.`,
              diagram: `bw-architecture`,
              diagramCaption:
                `The roles of the operational database, the data warehouse and analytics in a BI platform, and what each uniquely contributes.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Explain the role of generative AI and large language models in Business Intelligence — natural-language querying, automated insight, narrative reporting — and state three risks with a control for each.`,
              explain:
                `**What is being asked.** What an LLM adds to a BI stack, and how to keep it honest.\n\n**Uses.** Natural-language to SQL or to a semantic query, automated chart selection, narrative summaries, anomaly explanation, data preparation assistance.\n\n**Risks.** Hallucinated numbers and SQL, exposure of sensitive data in prompts, stale or wrong definitions, unverifiable narrative, prompt injection from data.\n\n**Controls.** Query the semantic layer only, allow-listed SQL generation with validation, row-level security at query time, citations to the underlying query, human review.\n\n**How to score the 6 marks.** Three uses with mechanism (3) · three risks with a control each (2.5) · one line on why the semantic layer is the enabler (0.5).`,
              answer:
                `An LLM adds a **conversational interface and a writing layer** to BI; it does not add a new source of truth, and an answer is only as good as the semantic layer it queries.\n\n**Where it is genuinely useful**\n\n| Use | What happens | Why it helps |\n|---|---|---|\n| **natural-language query** | the question is translated into a query against the governed semantic layer | a manager no longer needs to know the schema |\n| **automated insight** | the tool scans the measures and flags the largest changes and outliers | the analyst starts from the exception, not from a blank page |\n| **narrative reporting** | the numbers are turned into sentences: what changed, by how much, where | monthly commentary is written in minutes |\n| **chart suggestion** | the field types and the question decide the visual | fewer wrong chart choices |\n| **data preparation assist** | column names are matched across sources, descriptions generated | faster onboarding of a new source |\n\n**The mechanism that makes it safe.** The model must **generate a query, not a number**. A generated SQL statement can be inspected, validated and re-run; a generated number cannot. So the stack is: question → generated query against the semantic layer → engine computes the result → the model writes the sentence around a result it was given.\n\n**Three risks and their controls**\n1. **Hallucinated figures or wrong joins.** *Control:* never let the model state a number it did not receive; execute the query and pass the result back; validate generated SQL against an allow-list of tables and columns.\n2. **Sensitive data in a prompt.** *Control:* apply row-level and column-level security at query time, so the model can only retrieve what the asking user is entitled to see, and keep personal data out of prompt logs.\n3. **A stale or contested definition.** *Control:* query only the certified semantic layer, and show the metric definition and the as-of date with every answer.\n\n**Two more worth a sentence.** *Prompt injection* — text inside the data can carry an instruction, so treat retrieved content as data, never as a command. *Over-trust* — a fluent paragraph looks authoritative, so every narrative needs a link to the query and the row count behind it.\n\n**Exam line:** the LLM asks the question and writes the sentence; the semantic layer and the engine produce the number — and security, allow-lists and provenance keep it true.`,
              diagram: `vz-ai`,
              diagramCaption:
                `Generative AI and LLMs in BI — natural-language querying, automated insight, narrative reporting, and risk with control.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Distinguish Business Intelligence from data science and from analytics on five points, and state where the three functions overlap in practice.`,
              explain:
                `**What is being asked.** A short, precise comparison — the terms are used loosely in industry and the examiner wants the boundaries.\n\n**BI.** Descriptive, dashboard-led, decisions by managers, SQL and cubes.\n**Data science.** Predictive and causal, model-led, experiments, statistics and ML.\n**Analytics.** The umbrella term covering both, plus operational analytics.\n\n**Overlap.** Shared warehouse, shared metric definitions, shared monitoring.\n\n**How to score the 3 marks.** Five comparison points (2) · the overlap statement (1).`,
              answer:
                `| Point | Business intelligence | Data science |\n|---|---|---|\n| Question | what happened and how are we doing | what will happen and why |\n| Method | aggregation, cubes, reporting | statistics, ML, experiments |\n| Output | dashboard, scorecard, alert | model, score, causal estimate |\n| Consumer | managers and operators | product teams, strategy, automated systems |\n| Skill | SQL, modelling, visualisation, domain | programming, statistics, modelling |\n\n**Analytics** is the umbrella term: descriptive and diagnostic analytics are usually what a BI team does, and predictive and prescriptive analytics are what a data science team does. The word describes the *question*, not the department.\n\n**Where they overlap, and must cooperate**\n1. **The warehouse** — both read the same star schema, so neither should build its own copy.\n2. **Metric definitions** — one \`churn\` definition, or a dashboard and a model will disagree in front of the board.\n3. **Monitoring** — a model in production belongs on a BI dashboard beside the business KPI it is meant to move.\n4. **Explanation** — a model that cannot explain last quarter through the BI history is probably wrong.\n\n**Exam line:** BI describes, data science predicts, analytics is the umbrella — and they share one warehouse and one definition.`,
              diagram: `bigdata-vs-ds`,
              diagramCaption:
                `Business intelligence, data science and analytics compared, and the areas where the three functions must share definitions.`,
            },
          ],
        },
      ],
    },
    {
      number: 2,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain data cleaning techniques in a BI pipeline — missing values, noise, outliers and duplicates — with the technique, a worked example and the risk of each.`,
              explain:
                `**What is being asked.** Four problems, the standard techniques, and the danger of over-cleaning.\n\n**Missing.** Drop row, drop column, mean/median/mode, forward fill, model-based imputation, an explicit "unknown" category.\n**Noise.** Binning, smoothing, regression, clustering.\n**Outliers.** IQR or z-score detection, then remove, cap or keep.\n**Duplicates.** Exact match on a key, fuzzy match on name and address.\n\n**How to score the 6 marks.** Four problems with techniques (3) · one worked numeric example (2) · the risk of each, especially information loss (1).`,
              answer:
                `Cleaning decides whether the warehouse holds a usable record; each problem has a standard treatment and a standard way to get it wrong.\n\n**1. Missing values**\n\n| Technique | Use when | Risk |\n|---|---|---|\n| drop the row | less than about 5 percent missing, at random | bias if the missingness is systematic |\n| drop the column | more than about 40 percent missing | loses a signal that might matter |\n| mean / median / mode | a small share, numeric or categorical | shrinks variance, hides the gap |\n| forward or last value | a time series that changes slowly | carries a stale value forward for months |\n| model-based imputation | the value can be predicted from other fields | invents data confidently |\n| an "Unknown" category | a categorical field where absence is information | needs a policy for reports |\n\n**2. Noise** — smoothing by binning (means, medians, boundaries), a moving average for a series, or a regression line to replace a suspicious point.\n> Worked: prices 32, 35, 34, 999 in one product record — bin equal-width into 0–250, 250–500, 500–750, 750–1000 and replace each value by its bin mean: 999 collapses towards its bin, which reveals it as a data-entry error rather than a real price.\n\n**3. Outliers**\n\`\`\`\nQ1 = 12, Q3 = 24, IQR = 12\nlower fence = 12 − 1.5 × 12 = −6\nupper fence = 24 + 1.5 × 12 = 48\nvalue 65 > 48  →  flagged as an outlier\n\`\`\`\nThen decide: **remove** (a known error), **cap/winsorise** (a real but extreme value), **transform** (log) or **keep** and model separately. Risk: deleting a genuine fraud or a genuine festive spike, which is often the most interesting row in the table.\n\n**4. Duplicates**\n- **Exact** — same key or the same row hash: deduplicate with \`ROW_NUMBER() OVER (PARTITION BY key ORDER BY updated_at DESC)\` and keep the latest.\n- **Fuzzy** — “Riya Sharma”, “riya s.”, “R. Sharma” are one person; match on email and phone first, then on name and address with a similarity threshold.\n\n**The discipline.** Clean in staging, record every rule and every row count, and keep the raw extract — a cleaning rule that cannot be reversed makes a wrong number impossible to investigate.\n\n**Exam line:** impute or drop deliberately, smooth noise, fence and then judge outliers, and deduplicate on a key — never replace values blindly.`,
              diagram: `bw-cleaning`,
              diagramCaption:
                `Data cleaning techniques — missing values, noise, outliers and duplicates — with the risk attached to each.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain data integration from heterogeneous sources — the four integration problems and how schema matching, key resolution and a conformed dimension solve them.`,
              explain:
                `**What is being asked.** Why sources disagree and the standard remedies.\n\n**Problems.** Schema conflict (same thing, different name), value conflict (same code, different meaning), entity conflict (same entity, different record), unit and format conflict.\n\n**Remedies.** Schema mapping, value transformation tables, entity resolution or a master data record, conformed dimensions.\n\n**How to score the 4 marks.** Four problems with an example each (2.5) · the remedies (1.5).`,
              answer:
                `Integration is the work of making four systems agree about the same customer, the same product and the same money.\n\n| Problem | Example | Remedy |\n|---|---|---|\n| **schema conflict** | \`cust_id\` in CRM, \`customer_no\` in billing | a mapping table from source column to target column |\n| **value conflict** | \`M\`/\`F\` in one system, \`1\`/\`2\` in another; \`MH\` and \`Maharashtra\` | a code-translation table per attribute |\n| **unit and format conflict** | kg and g; \`Rs\` and \`$\`; \`06-11-2026\` and \`2026-11-06\` | convert to one base unit, one currency, ISO dates |\n| **entity conflict** | “Riya Sharma”, “riya s.”, “R. Sharma” | entity resolution, then one master record with a surrogate key |\n\n**How the remedies combine**\n1. **Schema matching** — map every source column to a target column, and record the mapping in the metadata catalogue so it can be reviewed.\n2. **Value transformation** — a lookup table per attribute, owned by the business, not by the developer.\n3. **Entity resolution** — deterministic matching on email and phone, then probabilistic matching on name, city and date of birth with a threshold; survivors get one golden record and one surrogate key.\n4. **Conformed dimension** — the shared \`Dim_Customer\` that every fact table uses, so sales and support can be compared by the same customer.\n\n**The rule.** Integration is not only a technical mapping: the definition of a customer or a product belongs to the business, and the warehouse merely enforces it.\n\n**Exam line:** map the schema, translate the codes, resolve the entity, conform the dimension — four conflicts, four remedies.`,
              diagram: `bw-integration`,
              diagramCaption:
                `Data integration from heterogeneous sources — schema, value, unit and entity conflicts with their remedies.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Explain metadata in a data warehouse — the three types, the information each holds, and why a warehouse without metadata becomes a black box.`,
              explain:
                `**What is being asked.** The catalogue that makes the warehouse self-describing.\n\n**Business metadata.** Definitions, owners, formulas, policies.\n**Technical metadata.** Structures, types, keys, mappings, lineage.\n**Operational metadata.** Load times, row counts, failures, DQ results.\n\n**How to score the 6 marks.** Three types with content (3.5) · the black-box consequences (2) · one governance use (0.5).`,
              answer:
                `Metadata is **data about the data**, and it is what turns a set of tables into a warehouse that an organisation can trust and govern.\n\n**1. Business metadata** — what the data means\n- the definition of every metric: \`net_revenue = gross − discount − returns\`, owned by finance\n- the business rules: a customer is "active" if purchased in the last 90 days\n- the owner, the stewardship contact, the sensitivity classification\n\n**2. Technical metadata** — how the data is structured\n- schemas, tables, columns, data types, primary and foreign keys, indexes\n- source-to-target mappings from every ETL job\n- **lineage**: which source column feeds which warehouse column, through which transformation\n\n**3. Operational metadata** — what happened during the run\n- load timestamps, durations, rows read and written, rows rejected\n- data quality test results: null rate, duplicate rate, referential integrity\n- job failures and alerts, and the version of the code that ran\n\n**Why a warehouse without metadata is a black box**\n1. **A number cannot be traced** — a manager asks why revenue fell and nobody can say which source column the report uses.\n2. **Two definitions coexist** — finance and sales each compute "revenue" their own way and the board sees both.\n3. **A failed load is invisible** — without operational metadata the dashboard silently shows yesterday numbers as today.\n4. **Impact analysis is impossible** — a source column is about to be dropped, and nobody knows which twenty reports will break.\n5. **Onboarding is slow** — a new analyst must reverse-engineer the schema, which takes weeks.\n\n**The governance dividend.** Access control, retention and audit all read from metadata: you cannot classify, mask or delete data you have not catalogued. This is why a data catalogue is now a required component of any BI platform, not an optional document.\n\n**Exam line:** business metadata defines, technical metadata maps and traces, operational metadata reports the runs — and without them, the warehouse cannot be trusted or governed.`,
              diagram: `bw-metadata`,
              diagramCaption:
                `Metadata in a data warehouse — business, technical and operational types, and the black-box consequences of missing it.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Explain data quality — its dimensions, the cost of poor quality and three controls that keep a warehouse trustworthy.`,
              explain:
                `**What is being asked.** Quality as measurable dimensions, with the business cost and the controls.\n\n**Dimensions.** Accuracy, completeness, consistency, timeliness, uniqueness, validity.\n\n**Cost.** Wrong decisions, rework, regulatory penalty, lost trust (which is the expensive one).\n\n**Controls.** Validation at entry, DQ tests in the pipeline with thresholds, a quarantine table, monitoring dashboards, stewardship.\n\n**How to score the 5 marks.** Six dimensions with an example (2.5) · the cost (1) · three controls (1.5).`,
              answer:
                `Data quality is measured on six dimensions, and each one can be tested automatically in the pipeline.\n\n| Dimension | Question | Test |\n|---|---|---|\n| accuracy | is the value correct against reality? | reconcile against the source system |\n| completeness | are the required fields present? | null rate per column |\n| consistency | do two systems agree? | record-count and sum comparison across sources |\n| timeliness | is the data fresh enough for the decision? | maximum load date against the schedule |\n| uniqueness | is an entity recorded once? | duplicate count on the business key |\n| validity | does the value obey the rules? | range, pattern and referential checks |\n\n**The cost of poor quality**\n1. **A wrong decision** — a margin report that double counts returns leads to a wrong price.\n2. **Rework** — analyst time spent reconciling instead of analysing; the classic 60 to 80 percent of effort.\n3. **Regulatory exposure** — a misstated figure in a regulatory return.\n4. **Lost trust** — the most expensive: once a dashboard has been wrong, every number on it is questioned and the platform is bypassed.\n\n**Three controls that work**\n1. **Validate at entry** — type, range, pattern and referential checks in staging; reject the row into a quarantine table with the reason, never silently default it.\n2. **Test in the pipeline** — declare expectations (null rate under 1 percent, row count within 20 percent of yesterday, unique keys) and fail the job when an expectation breaks, before the data reaches the dashboard.\n3. **Monitor and assign ownership** — a DQ dashboard with a score per source and per dimension, and a named steward for each source, because a quality problem that belongs to everyone is fixed by nobody.\n\n**The dimension to emphasise.** Accuracy cannot be tested inside the warehouse — it needs an external reference, which is why reconciliation against the source is the one control that catches a wrong-but-plausible value.\n\n**Exam line:** accuracy, completeness, consistency, timeliness, uniqueness, validity — test them in the pipeline, quarantine the failures, and give each source an owner.`,
              diagram: `bw-dq`,
              diagramCaption:
                `Data quality dimensions with a test for each, the cost of poor quality and three pipeline controls.`,
            },
          ],
        },
      ],
    },
    {
      number: 3,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain OLAP architecture and the three OLAP types — ROLAP, MOLAP and HOLAP — with the storage each uses and the workload each suits.`,
              explain:
                `**What is being asked.** How an OLAP server is built and the trade-off between relational storage and pre-computed cubes.\n\n**Architecture.** Client → OLAP server (query parse, aggregate navigation, caching) → data storage (relational tables or a cube).\n\n**ROLAP.** Relational star schema, SQL generated per query, scalable, slower for heavy aggregation.\n**MOLAP.** Pre-computed cube, fastest, limited by cube size and load time.\n**HOLAP.** Hybrid: detail in the relational store, aggregates in the cube.\n\n**How to score the 6 marks.** Architecture with its parts (2) · three types with storage, speed and use (3) · one selection rule (1).`,
              answer:
                `An OLAP server sits between the BI client and the stored data; it parses a multidimensional request, decides which aggregates to read, and returns a cell set.\n\n\`\`\`\nBI client (slice, dice, drill)\n      │  MDX / SQL\n      ▼\nOLAP server  →  query parser → aggregate navigator → cache\n      │\n      ├── ROLAP: relational star schema (SQL)\n      ├── MOLAP: pre-built cube (proprietary store)\n      └── HOLAP: both\n\`\`\`\n\n| Type | Storage | Speed | Strength | Limit |\n|---|---|---|---|---|\n| **ROLAP** | relational tables, star schema | slower for deep aggregation, fast for detail | scales to huge data, no cube rebuild, standard SQL and tools | many joins per query |\n| **MOLAP** | pre-computed cube, dimension-indexed | fastest — answers are lookups | instant slices and roll-ups | cube size explodes with dimensions; load window |\n| **HOLAP** | detail relational, aggregates in the cube | near-MOLAP for summaries | balances size and speed | two stores to keep consistent |\n\n**How it works in practice**\n1. **The request** arrives as a multidimensional expression — "revenue for beverages, Pune, by quarter".\n2. **The parser** checks the dimensions and measures against the cube metadata.\n3. **The aggregate navigator** chooses the smallest pre-computed aggregate that can answer the request, instead of hitting detail rows.\n4. **The cache** holds the last result set, so a repeated view is instant.\n5. **The result** returns as a cell set that the pivot table renders.\n\n**The selection rule**\n- **MOLAP** where the analysis is a fixed set of dimensions and the data volume fits a cube — a monthly sales analysis.\n- **ROLAP** where volumes are very large or the questions are unpredictable — the cloud warehouses that dominate today are ROLAP with very fast SQL.\n- **HOLAP** where the detail must stay relational but the summaries must be instant.\n\n**Exam line:** ROLAP stores in tables, MOLAP pre-computes the cube, HOLAP does both — and the choice is a trade between cube size and query speed.`,
              diagram: `ol-olap-types`,
              diagramCaption:
                `OLAP architecture and the three types — ROLAP, MOLAP and HOLAP — with their storage, speed and limits.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain the OLAP cube — its dimensions, cells and pre-computed aggregates — and how the number of cells grows with the dimensions.`,
              explain:
                `**What is being asked.** The cube structure and the combinatorial explosion that forces design choices.\n\n**Cells.** product of dimension members; a 3-D cube with 10 × 12 × 50 members has 6,000 cells; adding a 20-member dimension multiplies by 20.\n\n**Sparsity.** Most cells are empty — the real problem.\n\n**Techniques.** Aggregate only the levels used, drop sparse combinations, use HOLAP.\n\n**How to score the 4 marks.** Structure with the cell-count arithmetic (2) · sparsity and its handling (2).`,
              answer:
                `An OLAP cube is a **pre-computed multidimensional array**: one axis per dimension, one cell per combination of members.\n\n**Structure**\n\`\`\`\nCube: Sales\n  Dimensions: Time (12 months) × Product (50 SKUs) × Store (10 stores)\n  Measures per cell: quantity, revenue, margin\n  Cells = 12 × 50 × 10 = 6,000 combinations\n  With 4 hierarchy levels per dimension, stored aggregates ≈ 6,000 × (levels)\n\`\`\`\n\n**The growth**\n- Adding a 20-member dimension multiplies the cells by 20 → 120,000.\n- Adding a fifth dimension of 100 members → 12 million cells, even before hierarchy levels are counted.\n\n**Sparsity — the real constraint.** A store does not sell every SKU every month, so a large share of the 12 million cells is empty. A sparse cube wastes storage and slows the build, which is why:\n1. **only the levels that are queried** are pre-aggregated (month and quarter, not every day);\n2. **sparse combinations are dropped** or held in the relational store (the HOLAP idea);\n3. **dimension members are pruned** — a discontinued product need not stay in the cube;\n4. **aggregates are partitioned** by time, so last year does not have to be rebuilt nightly.\n\n**The exam-worthy trade-off.** The cube buys speed with storage and load time; a design that ignores sparsity produces a cube that takes longer to build than the report takes to run.\n\n**Exam line:** cells are the product of dimension members — 12 × 50 × 10 = 6,000 — and sparsity is what forces partial aggregation.`,
              diagram: `ol-cube`,
              diagramCaption:
                `The OLAP cube — dimensions, cells and measures — with the cell-count growth and the sparsity problem.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Explain the five OLAP operations — roll-up, drill-down, slice, dice and pivot — with an SQL example of two of them.`,
              explain:
                `**What is being asked.** The operations and, for the stronger answer, their SQL equivalents.\n\n**Operations.** Roll-up (up a hierarchy), drill-down (down), slice (fix one dimension), dice (sub-cube by ranges), pivot (rotate axes).\n\n**SQL.** \`ROLLUP()\`, \`CUBE()\`, \`GROUPING SETS\`, \`WHERE\` filters, \`PIVOT\` or conditional aggregation.\n\n**How to score the 6 marks.** Five operations with an example each (3.5) · two SQL examples (2) · the hierarchy requirement (0.5).`,
              answer:
                `The five operations transform the cube without changing the underlying data — each answers a different analytical question.\n\n| Operation | What it does | Example |\n|---|---|---|\n| **Roll-up** | aggregates up a hierarchy | monthly sales summarised to quarters and years |\n| **Drill-down** | moves to finer detail | year → quarter → month → day |\n| **Slice** | fixes one dimension to one value | sales where year = 2026 |\n| **Dice** | selects a sub-cube by ranges on two or more dimensions | 2026, region in (north, west), category = beverages |\n| **Pivot** | rotates the axes so rows become columns | products as rows rearranged as columns by month |\n\n**Two of them in SQL**\n\`\`\`sql\n-- roll-up with ROLLUP: category subtotals, then a grand total\nSELECT p.category, d.quarter, SUM(f.net_amount) AS revenue\nFROM Fact_Sales f\nJOIN Dim_Product p ON p.product_key = f.product_key\nJOIN Dim_Date d    ON d.date_key = f.date_key\nWHERE d.year = 2026\nGROUP BY ROLLUP (p.category, d.quarter)\nORDER BY p.category, d.quarter;\n\`\`\`\n\`\`\`sql\n-- dice with a WHERE filter and pivot with conditional aggregation\nSELECT s.region,\n       SUM(CASE WHEN d.quarter = 'Q1' THEN f.net_amount END) AS q1,\n       SUM(CASE WHEN d.quarter = 'Q2' THEN f.net_amount END) AS q2,\n       SUM(CASE WHEN d.quarter = 'Q3' THEN f.net_amount END) AS q3,\n       SUM(CASE WHEN d.quarter = 'Q4' THEN f.net_amount END) AS q4\nFROM Fact_Sales f\nJOIN Dim_Date d    ON d.date_key = f.date_key\nJOIN Dim_Store s   ON s.store_key = f.store_key\nJOIN Dim_Product p ON p.product_key = f.product_key\nWHERE d.year = 2026\n  AND s.region IN ('north', 'west')\n  AND p.category = 'beverages'\nGROUP BY s.region;\n\`\`\`\n\n**The requirement behind roll-up and drill-down.** Both need a **hierarchy** defined in the dimension — day, month, quarter, year; city, state, region, country. Without declared levels there is nothing to aggregate up or down, which makes hierarchy design part of the model, not a display option.\n\n**Exam line:** roll-up coarsens, drill-down refines, slice fixes one axis, dice selects a sub-cube, pivot rotates — and ROLLUP, GROUPING SETS and conditional aggregation do them in SQL.`,
              diagram: `ol-operations`,
              diagramCaption:
                `The five OLAP operations with examples, and their SQL equivalents using ROLLUP and conditional aggregation.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Compare OLAP with OLTP on seven points, and explain why a single system cannot serve both workloads well.`,
              explain:
                `**What is being asked.** Two workloads from the point of view of the engine.\n\n**Points.** Purpose, data, model, operations, transactions, indexes, size, refresh, users.\n\n**Why not one system.** Different index and locking strategies, different normalisation, different hardware profile.\n\n**How to score the 5 marks.** Seven points (3) · the workload conflict explained (1.5) · one modern exception, e.g. HTAP (0.5).`,
              answer:
                `OLTP records the business; OLAP explains it. The same hardware cannot optimise both.\n\n| Point | OLTP | OLAP |\n|---|---|---|\n| Purpose | run daily operations | support analysis and decisions |\n| Data | current, detailed | historical, integrated, summarised |\n| Model | normalised, 3NF | dimensional, star |\n| Operations | insert, update, delete | read-only query, bulk load |\n| Transaction size | one row or a few | millions of rows per query |\n| Indexes | many, tuned for point lookups | few, tuned for range scans |\n| Locking | row-level, high concurrency | read snapshots, few users |\n| Size | GB | TB to PB |\n| Response | milliseconds | seconds to minutes |\n| Failure impact | business stops | insight delayed |\n\n**Why one system cannot serve both**\n1. **Locking** — a month-end aggregation holds locks that block a customer payment.\n2. **Buffer cache** — a scan of 50 million rows evicts the pages the transaction path needs.\n3. **Normalisation** — the 3NF design that prevents update anomalies needs many joins that an analytical query cannot afford.\n4. **Index conflict** — every index added for analysis slows each insert.\n5. **Hardware profile** — OLTP wants fast random I/O and many cores; OLAP wants sequential scan bandwidth.\n\n**The modern exception.** **HTAP** systems and columnar engines with resource isolation try to serve both by keeping a row store and a column store in one product, with analytical work routed to a separate compute pool. It narrows the gap but does not remove the design conflict — the model still has to be duplicated.\n\n**Exam line:** OLTP is many small writes, OLAP is a few huge reads — normalisation, indexes and locking pull in opposite directions, which is why the warehouse exists.`,
              diagram: `ol-vs-oltp`,
              diagramCaption:
                `OLAP versus OLTP across purpose, data, model, operations, indexes and size, and why one system cannot serve both.`,
            },
          ],
        },
      ],
    },
    {
      number: 4,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain temporal attributes and timestamps in a data warehouse — the common timestamp columns, how effective dating works in a dimension, and how a query uses them.`,
              explain:
                `**What is being asked.** The columns that carry time, and the query patterns they enable.\n\n**Columns.** Event date, load timestamp, effective from/to, is_current, version.\n**Effective dating.** Type 2 dimension; a query filters on the date to get the version that was true.\n**Patterns.** As-of query, point-in-time join, current-version filter.\n\n**How to score the 6 marks.** The column set with the purpose of each (2.5) · effective dating with an example row (2) · an as-of query (1.5).`,
              answer:
                `Time is not one column in a warehouse; it is a small set of columns with different jobs.\n\n| Column | Meaning | Example |\n|---|---|---|\n| \`event_date\` | when the business event happened | order placed 2026-11-06 |\n| \`load_timestamp\` | when the warehouse received it | loaded 2026-11-07 01:12 |\n| \`valid_from\` / \`valid_to\` | when the record was true in the business | price 100 from 1 April |\n| \`recorded_at\` / \`superseded_at\` | when the warehouse believed it | recorded 10 April |\n| \`is_current\` | the latest version flag | 1 or 0 |\n| \`version\` | the version number | 1, 2, 3 |\n\n**Effective dating in a dimension (SCD type 2)**\n\`\`\`\nDim_Customer\ncust_key  cust_id  city    valid_from   valid_to     is_current\n  101       C7     Pune    2024-01-10   2026-04-30      0\n  214       C7     Mumbai  2026-05-01   9999-12-31      1\n\`\`\`\nThe key is a **surrogate** key: the same customer has two rows and two keys, so a fact row can point at the version that was true on the day of the sale.\n\n**The three query patterns**\n\`\`\`sql\n-- 1. current version only\nSELECT * FROM Dim_Customer WHERE is_current = 1;\n\n-- 2. point-in-time join: the sale joins the version valid on the sale date\nSELECT f.order_id, c.city, f.net_amount\nFROM Fact_Sales f\nJOIN Dim_Customer c\n  ON c.cust_id = f.cust_id\n AND f.order_date BETWEEN c.valid_from AND c.valid_to;\n\n-- 3. as-of a given date, for an audit\nSELECT * FROM Dim_Customer\nWHERE '2025-06-30' BETWEEN valid_from AND valid_to;\n\`\`\`\n\n**Why the surrogate key is necessary.** A natural key cannot distinguish two versions of the same customer; without a surrogate key the point-in-time join silently returns the current city for a sale made last year, which is the classic wrong-region bug in retail reporting.\n\n**The detail to add.** Use \`9999-12-31\` rather than \`NULL\` for the open end date, so that a \`BETWEEN\` join needs no special case.\n\n**Exam line:** event date, load timestamp and effective dates do different jobs — effective dating with a surrogate key is what lets a sale keep the address it was made at.`,
              diagram: `td-attributes`,
              diagramCaption:
                `Temporal attributes in a warehouse — event, load and effective dates, SCD type 2 rows and an as-of query.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain bitemporal data — valid time and transaction time together — and state one question it can answer that a single timeline cannot.`,
              explain:
                `**What is being asked.** Two independent timelines, and the audit question they enable.\n\n**Valid time.** When it was true. **Transaction time.** When it was recorded.\n\n**The four combinations** of as-of dates produce the "as-was", "as-is" and "as-at" views.\n\n**How to score the 4 marks.** Both timelines defined (1.5) · a table showing the combinations (1.5) · one audit question (1).`,
              answer:
                `A **bitemporal** table records both when a fact was true in the business and when the warehouse knew it.\n\n| Timeline | Column pair | Answers |\n|---|---|---|\n| valid time | \`valid_from\`, \`valid_to\` | when was this the real value? |\n| transaction time | \`recorded_at\`, \`superseded_at\` | when did we believe it? |\n\n\`\`\`\nPrice of SKU-42, entered late on 10 April, effective 1 April\nvalid_from   valid_to    price  recorded_at  superseded_at\n2026-04-01   2026-04-05   95   2026-04-01   2026-04-10\n2026-04-06   9999-12-31  100   2026-04-10   NULL\n\`\`\`\n\n**The four views**\n\n| Valid as-of | Transaction as-of | Question answered |\n|---|---|---|\n| today | today | the current truth |\n| past date | today | what the truth was then, as we now know it |\n| today | past date | what we believed then |\n| past date | past date | what we believed then about then — the audit view |\n\n**The question only bitemporal can answer.** *"Reproduce the margin report that was issued on 5 April, showing the prices the business actually used that day — even though the price was corrected later."* A single timeline cannot: valid-time-only overwrites the old belief, and transaction-time-only cannot tell which price was true on the sale date.\n\n**Where it is mandatory.** Financial restatements, insurance claims assessed at the policy date, and any regulatory review that asks not only what happened but what the organisation knew and when.\n\n**Exam line:** valid time is the business timeline, transaction time is the warehouse timeline — both together let a report be reproduced as of any date, or any belief.`,
              diagram: `td-bitemporal`,
              diagramCaption:
                `Bitemporal data — valid time with transaction time, the four as-of views and the audit question they answer.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Explain time-based data analysis in BI — period comparison, year-to-date and moving averages, seasonality and cohort analysis — with the SQL for two of them.`,
              explain:
                `**What is being asked.** The standard temporal calculations, and how they are written.\n\n**Techniques.** Period-over-period, YTD/MTD, moving average, seasonality index, cohort or retention, rolling window.\n\n**SQL.** Window functions: \`LAG\`, \`SUM() OVER\`, \`AVG() OVER ROWS BETWEEN\`, \`DATE_TRUNC\`.\n\n**How to score the 6 marks.** Four techniques with the question each answers (3) · two SQL examples (2) · one caution about comparing unequal periods (1).`,
              answer:
                `Time-based analysis answers questions about change, rhythm and cumulative progress — and in SQL almost all of it is a window function.\n\n| Technique | Question | Shape |\n|---|---|---|\n| period comparison | how does this month compare with the same month last year? | current against lagged value |\n| year-to-date | how are we doing against the annual plan? | running sum from January |\n| moving average | is the trend, or only the noise? | average of the last n periods |\n| seasonality | which months are always strong? | index against the annual average |\n| cohort retention | do customers who joined in March still buy? | group by join month, count activity by month number |\n\n**Two of them in SQL**\n\`\`\`sql\n-- 1. month-on-month and year-on-year change\nWITH m AS (\n  SELECT d.year, d.month, SUM(f.net_amount) AS revenue\n  FROM Fact_Sales f JOIN Dim_Date d ON d.date_key = f.date_key\n  GROUP BY d.year, d.month\n)\nSELECT year, month, revenue,\n       revenue - LAG(revenue)      OVER (ORDER BY year, month)            AS mom_change,\n       revenue - LAG(revenue, 12)  OVER (ORDER BY year, month)            AS yoy_change\nFROM m\nORDER BY year, month;\n\`\`\`\n\`\`\`sql\n-- 2. three-month moving average and year-to-date\nWITH m AS (\n  SELECT d.year, d.month, SUM(f.net_amount) AS revenue\n  FROM Fact_Sales f JOIN Dim_Date d ON d.date_key = f.date_key\n  GROUP BY d.year, d.month\n)\nSELECT year, month, revenue,\n       AVG(revenue) OVER (PARTITION BY year ORDER BY month\n                          ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS ma3,\n       SUM(revenue) OVER (PARTITION BY year ORDER BY month)          AS ytd\nFROM m\nORDER BY year, month;\n\`\`\`\n\n**The cautions that earn marks**\n1. **Unequal periods** — a 28-day February against a 31-day January looks like a fall; compare like with like, or use a daily average.\n2. **Partial periods** — a running month-to-date compared with a full month is always lower; label the period explicitly.\n3. **Calendar versus fiscal** — a fiscal year starting in April must be a column on the date dimension, or every query will be wrong by three months.\n4. **Seasonality before trend** — a December spike is not growth; deseasonalise before claiming a trend.\n\n**Exam line:** LAG for period comparison, a window SUM for year-to-date, a moving average for the trend — and always compare equal-length periods.`,
              diagram: `td-time-analysis`,
              diagramCaption:
                `Time-based analysis in BI — period comparison, year-to-date, moving average, seasonality and cohorts, with SQL.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain trend analysis and historical tracking in BI — the components of a time series, and how a warehouse keeps history for them.`,
              explain:
                `**What is being asked.** Decomposing a series and the storage that makes the decomposition possible.\n\n**Components.** Trend, seasonality, cycle, irregular. Methods: moving average, regression, decomposition, control chart.\n\n**History.** Snapshots, SCD type 2, periodic fact tables, archival of old partitions.\n\n**How to score the 4 marks.** Components with an example (2) · two history mechanisms (1.5) · one warning about history loss (0.5).`,
              answer:
                `A business time series is a mixture of four components, and a trend claim is only valid once the other three are accounted for.\n\n| Component | Meaning | Example |\n|---|---|---|\n| **trend** | long-run direction | revenue rising about 8 percent a year |\n| **seasonality** | a fixed repeating pattern | a spike every October and December |\n| **cycle** | a longer, irregular swing | a two-year construction slowdown |\n| **irregular** | the residual | a one-off strike, a festival shift |\n\n**Techniques**\n1. **Moving average** — smooths the noise so the trend is visible.\n2. **Seasonal index** — month average divided by the annual average; 1.25 means 25 percent above a normal month.\n3. **Decomposition** — trend, seasonal and residual separated, usually multiplicatively for sales.\n4. **Control chart** — the trend with an expected band; a point outside the band is an exception worth a call, not a number to be filed.\n\n**How the warehouse keeps the history**\n- **SCD type 2 dimensions** keep every version of a customer, product or store, so a report can use the attribute that was true then.\n- **Periodic snapshot fact tables** store a value at each month end — stock on hand, headcount, balance — because the transaction facts cannot reproduce a point-in-time balance.\n- **Retention and archiving** — old partitions are moved to cheaper storage but not deleted, and the retention policy is stated, because a trend comparison needs at least three years.\n\n**The warning.** Overwriting history is the most common way a BI platform loses the ability to answer a trend question: a type 1 update on \`Dim_Product\` replaces the category, and last year sales by category silently change. Once overwritten, the history cannot be reconstructed.\n\n**Exam line:** trend, seasonality, cycle and noise — decompose before claiming a trend, and keep snapshots plus type 2 dimensions or the history is gone.`,
              diagram: `td-trend`,
              diagramCaption:
                `Trend analysis and historical tracking — the four components of a series and the warehouse mechanisms that preserve history.`,
            },
          ],
        },
      ],
    },
    {
      number: 5,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain interactive reporting and visual analytics — filtering and drill-down, brushing and linking, what-if parameters and self-service exploration — and what each adds to a static report.`,
              explain:
                `**What is being asked.** Interactivity as a set of defined techniques, not a feature list.\n\n**Techniques.** Filter and cross-filter, drill-down, brushing and linking, parameters and what-if, tooltips, bookmarks, annotations.\n\n**What each adds.** Answers the next question without a new report request.\n\n**How to score the 6 marks.** Four techniques with what each adds (3.5) · the self-service model and its governance need (1.5) · one caution about performance and misinterpretation (1).`,
              answer:
                `A static report answers the question it was built for; an interactive view lets the reader ask the **next** question without waiting for IT.\n\n| Technique | How it works | What it adds |\n|---|---|---|\n| **filter and cross-filter** | choosing a value narrows every other visual | the whole page answers one segment at a time |\n| **drill-down** | click a bar to move to the next level of the hierarchy | the cause under a total, in one click |\n| **brushing and linking** | selecting points in one chart highlights them in the others | shows where the same records appear across views |\n| **parameters / what-if** | a slider changes an assumption and the measures recompute | a scenario without a spreadsheet |\n| **tooltips and annotations** | hover detail, and a note pinned to the launch date | context without clutter |\n\n**How the four work together in one screen**\n1. The manager filters to *West* and *beverages* — every chart now reflects that segment.\n2. She brushes the March dip on the trend line; the store bar chart highlights the three stores that caused it.\n3. She drills into one store to see the category breakdown.\n4. She drags the discount what-if to 8 percent and watches the margin tile recompute — a decision rehearsal, not a report.\n\n**The self-service model and its governance**\n- **A semantic layer** so a user-built visual still uses the certified measure.\n- **Row-level security** so a store manager opening the same dashboard sees only their stores.\n- **Certified versus personal content** — promoted dashboards are reviewed; personal explorations are not, and are labelled so.\n\n**The two cautions** — interactivity multiplies query load, so aggregates and caching are needed; and a filter state hides data, so the current filter must always be visible on screen.\n\n**Exam line:** filter, drill, brush, what-if — each removes one round trip to the analyst, provided the semantic layer and the security model travel with it.`,
              diagram: `vz-interactive`,
              diagramCaption:
                `Interactive reporting and visual analytics — filter and cross-filter, drill-down, brushing and linking, and what-if parameters.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain how BI tools are evaluated and chosen, comparing Power BI and Tableau on five points.`,
              explain:
                `**What is being asked.** A short comparison plus the selection criteria.\n\n**Criteria.** Sources and connectors, data volume, modelling, ease for a business user, cost and licensing, governance, ecosystem.\n\n**Power BI.** Microsoft ecosystem, cheaper per user, strong DAX modelling, Azure integration.\n**Tableau.** Visual exploration strength, independent, higher cost, good for ad-hoc analysis.\n\n**How to score the 4 marks.** Five comparison points (2.5) · the selection criteria with one decisive factor (1.5).`,
              answer:
                `The tools are close in capability; the decision is usually made by ecosystem, governance and cost rather than by chart quality.\n\n| Point | Power BI | Tableau |\n|---|---|---|\n| Owner | Microsoft | Salesforce |\n| Ecosystem | Office 365, Teams, Azure, SQL Server | independent, many connectors |\n| Modelling | strong semantic model with DAX | strong visual layer, calculations in its own language |\n| Exploration | fast dashboards, good for governed reporting | excellent ad-hoc visual exploration |\n| Cost | lower per user, bundled with some Microsoft plans | higher per seat, but no platform lock-in |\n| Governance | workspaces, certified datasets, RLS | projects, permissions, data sources |\n| Best fit | an organisation already on Microsoft | an analyst-led culture with varied sources |\n\n**The selection criteria, in order**\n1. **Sources** — connectors to the actual systems, and how refresh works.\n2. **Governance** — certified datasets, row-level security, lineage, audit.\n3. **Skills** — what the team already knows; retraining is a real cost.\n4. **Cost over three years** — licences plus capacity plus administration, not the per-seat price.\n5. **Ecosystem** — single sign-on, embedding, mobile, existing contracts.\n\n**The decisive question.** Ask which tool the analysts will actually open every morning; a cheaper licence that nobody uses is the most expensive option.\n\n**Exam line:** compare sources, governance, skills, total cost and ecosystem — Power BI for a Microsoft estate, Tableau for analyst-led exploration.`,
              diagram: `vz-tools`,
              diagramCaption:
                `Evaluating BI tools — the selection criteria, and Power BI versus Tableau on ecosystem, modelling, cost and governance.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Describe the steps to build a dashboard in a BI tool — from the data connection to publishing and refresh — and state what must be checked before it is released.`,
              explain:
                `**What is being asked.** A build process, with the checks that separate a demo from a released dashboard.\n\n**Steps.** Connect → model → measures → layout → interactivity → publish → schedule refresh → permissions → validate.\n\n**Checks.** Numbers reconcile with the source of truth, filters behave, security tested, performance acceptable, definitions documented, owner named.\n\n**How to score the 6 marks.** The build steps in order (3.5) · the pre-release checks (2) · one line on refresh and permissions (0.5).`,
              answer:
                `A dashboard is released only after the numbers have been reconciled and the access has been tested — the build itself is the shorter half.\n\n**The build steps**\n1. **Connect** — point the tool at the warehouse or the semantic model, not at operational tables.\n2. **Model** — define relationships, the date table, and the measures in the semantic layer; keep the star shape.\n3. **Measures** — write them once (\`net_revenue\`, \`margin_pct\`) and reuse them on every page.\n4. **Layout** — KPI strip, trend, breakdown, exception table; five to seven KPIs; the most important at top-left.\n5. **Interactivity** — filters, drill-down, cross-highlighting, tooltips; keep the current filter visible.\n6. **Publish** — to a workspace or project, with a clear name, description and owner.\n7. **Refresh** — schedule it, and set up failure alerts; a dashboard that silently stopped refreshing is worse than no dashboard.\n8. **Permissions** — row-level security mapped to the business hierarchy, tested with a real user account.\n\n**The checks before release**\n\n| Check | Question |\n|---|---|\n| reconciliation | does the headline number equal the finance or source-system total? |\n| filters | does every slicer change every intended visual, and only those? |\n| security | does a store manager see only their stores under RLS? |\n| performance | does the page load within a few seconds on the slowest intended device? |\n| definitions | is each metric documented, with owner and formula? |\n| freshness | is the as-of timestamp visible on the page? |\n| ownership | is there a named owner and a change process? |\n\n**The release conversation.** Show the dashboard to the person who will use it and ask which decision it changes; if they cannot name one, the layout is wrong regardless of how good the charts are.\n\n**Exam line:** connect to the model, define measures once, lay out for one screen, publish, refresh, secure — then reconcile, test filters and security, and document before release.`,
              diagram: `vz-build`,
              diagramCaption:
                `Building a dashboard in a BI tool — connection, model, measures, layout, publish, refresh, permissions and release checks.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Explain the role of visualization in business decision making — how a visual shortens a decision, and how a misleading visual can cause a wrong one, with two safeguards.`,
              explain:
                `**What is being asked.** The value and the risk of the same instrument.\n\n**Value.** Pattern recognition, exception focus, shared reference in a meeting, faster consensus.\n**Risk.** Truncated axis, cherry-picked window, misleading aggregation (Simpson), 3-D, dual axis, missing baseline.\n\n**Safeguards.** Review of the chart choice and scale, showing the underlying data, stating the period and definition, an independent check for high-stakes numbers.\n\n**How to score the 5 marks.** The value (1.5) · a misleading example with the mechanism (2) · two safeguards (1.5).`,
              answer:
                `A visual is an argument: it makes one comparison obvious, and it can make a false one look obvious.\n\n**How it shortens a decision**\n1. **Parallel perception** — the pattern is seen before it is read, so a meeting starts from the finding rather than from the table.\n2. **Exception focus** — one accent colour on the failing store ends a debate about where the problem is.\n3. **A shared reference** — everyone in the room looks at the same picture, which reduces disagreement about the data and concentrates it on the decision.\n4. **Pattern discovery** — scatter and heat maps expose relationships that no one thought to query.\n\n**How it causes a wrong decision**\n- **Truncated axis** — a bar chart starting at 92 turns a 2 percent rise into a visual doubling.\n- **Cherry-picked window** — a seven-year series cut to the three months that support the proposal.\n- **Misleading aggregation** — Simpson paradox: a treatment looks better in every severity group and worse overall, because the groups are unequal in size.\n- **Dual axis** — two unrelated series arranged to cross exactly where the argument needs them to.\n- **Wrong chart** — a pie of twelve slices, where the difference the decision depends on cannot be perceived at all.\n\n**Two safeguards**\n1. **Show the data and the settings** — the period, the filter, the definition and the row count beside the chart; a viewer can then check the claim instead of trusting the picture.\n2. **Review high-stakes visuals** — any chart that supports spend above a threshold, or a regulatory statement, is checked by a second person for chart choice, axis and aggregation, and reconciled to the source.\n\n**The professional rule.** The choice of scale and grouping is an analytical decision, not a styling preference; a chart that hides an inconvenient period is a data-integrity failure.\n\n**Exam line:** a visual shortens a decision by showing the pattern and the exception — and misleads through a truncated axis or a cherry-picked window, so show the data and review the stake.`,
              diagram: `vz-decision`,
              diagramCaption:
                `The role of visualization in decision making — how a visual shortens a decision, how it misleads, and two safeguards.`,
            },
          ],
        },
      ],
    },
  ],
};
