// Business Intelligence Paper 1 — Model Paper (5 + 5 division)
//
// Facet map for this paper (see each header note; later papers take a deeper facet
// of the same unit so the four papers do not repeat a question):
//   Unit 1 — 1.1 what BI is, 1.3 data-driven decision making, 1.2 evolution and DSS,
//            1.6 applications of BI in business domains
//   Unit 2 — 2.1 operational databases vs data warehouses, 2.2 DW characteristics,
//            2.3 three-tier DW architecture, 2.4 the ETL process
//   Unit 3 — 3.1 multidimensional model, 3.2 fact and dimension tables,
//            3.4 star schema, 3.6 star vs snowflake
//   Unit 4 — 4.1 metrics and KPIs, 4.2 KPIs in decision making,
//            4.3 performance measurement and reporting, 4.4 temporal data
//   Unit 5 — 5.1 introduction to visualization, 5.2 visualization principles,
//            5.3 chart types, 5.4 dashboard design principles

export const biPaper1 = {
  id: `bi-paper-1`,
  number: 1,
  name: `Paper 1`,
  tag: `Business Intelligence`,
  session: `Model Paper · 5 + 5 division`,
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
    `Every question carries 10 marks, divided as (a) 5 marks + (b) 5 marks.`,
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
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Define Business Intelligence and explain its components with a diagram — data sources, ETL, data warehouse, analytics and presentation.`,
              explain:
                `**What is being asked.** A definition, then the pipeline that turns raw operational data into a decision, component by component.\n\n**The chain.** Sources → ETL → data warehouse → analytics or OLAP → dashboard or report → decision.\n\n**Points to make.** BI is a process plus a technology stack, not a single tool; each component has one job; the value appears only at the last step.\n\n**How to score the 5 marks.** Definition (1) · components with the job of each (2.5) · the data-to-decision flow (1) · one business example (0.5).`,
              answer:
                `**Business Intelligence (BI)** is the set of processes, technologies and practices that turn an organization business data into information that supports a decision — the conversion of raw transactions into reports, dashboards and, eventually, action.\n\n\`\`\`\nSources            ETL               Warehouse          Analytics         Presentation\nERP, CRM, POS  →  extract,      →   integrated,     →  OLAP, SQL,     →  dashboard, report,\nspreadsheets,     transform,        historical,        metrics,          alert, mobile view\nweb logs          load              subject store      data mining\n                                                    ↓\n                                              DECISION + ACTION\n\`\`\`\n\n| Component | Job | Typical technology |\n|---|---|---|\n| **Data sources** | hold the raw transactions | ERP, CRM, POS, spreadsheets, web and app logs |\n| **ETL** | extract, clean, conform and load | Informatica, Talend, dbt, Apache NiFi |\n| **Data warehouse** | one integrated, historical, subject-oriented store | Snowflake, BigQuery, Redshift, SQL Server DW |\n| **Analytics and OLAP** | aggregate, slice, compare, forecast | SQL, OLAP cubes, Python and R |\n| **Metadata and governance** | definitions, lineage, access rules | data catalog, data dictionary, RBAC |\n| **Presentation** | deliver the insight to a person | Power BI, Tableau, Looker, Excel |\n\n**Why all the components are needed.** A dashboard without a warehouse shows numbers that disagree; a warehouse without analytics is a cost with no visible value; analytics without a presentation layer never reaches the person who decides.\n\n**One example.** A retail chain loads POS sales nightly, models them as a star schema, computes category margin by store, and shows the regional manager a weekly dashboard with the three stores whose margin fell.\n\n**Exam line:** BI is a pipeline — sources, ETL, warehouse, analytics, presentation — and the decision at the end is the only proof that it works.`,
              diagram: `biflow`,
              diagramCaption:
                `The BI pipeline — data sources, ETL, data warehouse, analytics and presentation feeding a decision.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain data-driven decision making — how it differs from intuition-based decisions, the four types of analytics it uses, and two conditions a company must satisfy to practise it.`,
              explain:
                `**What is being asked.** A method, not a slogan: the evidence loop, the analytics types that support each stage, and the preconditions.\n\n**The contrast.** Intuition uses experience and pattern memory; data-driven uses measured evidence, stated assumptions and a testable prediction.\n\n**Four types.** Descriptive (what happened), diagnostic (why), predictive (what will happen), prescriptive (what to do).\n\n**Conditions.** Trusted, defined data; and a decision process that can actually change based on the evidence.\n\n**How to score the 5 marks.** The contrast with intuition (1) · the four analytics types with a question each (2.5) · two conditions (1.5).`,
              answer:
                `Data-driven decision making replaces **opinion stated with confidence** by **evidence with a stated test**. The decision is still made by a person; what changes is what the person uses.\n\n**Intuition versus evidence**\n\n| Point | Intuition only | Data-driven |\n|---|---|---|\n| Basis | experience, pattern memory, seniority | measured data, stated metric, tested model |\n| Speed | fast, cheap | slower to set up, faster to repeat |\n| Failure mode | unnoticed bias, loudest voice wins | bad data, wrong metric, over-fitting to the past |\n| Learning | the lesson is anecdote | the lesson is a measured difference |\n| Review | after the loss | before the decision, with a baseline |\n\n**The four types of analytics that support the decision**\n\n| Type | Question | Example | Technique |\n|---|---|---|---|\n| **Descriptive** | what happened? | last quarter revenue by region | aggregation, dashboards |\n| **Diagnostic** | why did it happen? | the fall came from one product line | drill-down, correlation, root cause |\n| **Predictive** | what will happen? | next quarter demand, churn probability | regression, classification |\n| **Prescriptive** | what should we do? | how much stock per warehouse | optimisation, simulation, A/B test |\n\n**The loop in practice**\n1. Write the decision that has to be taken and who takes it.\n2. Name the metric and the baseline it must beat.\n3. Read the evidence at the level of detail the decision needs.\n4. Decide, then record the expected outcome.\n5. Compare the result with the expectation — that comparison is how the organization learns.\n\n**The two conditions**\n1. **Trusted, defined data** — one definition of revenue, customer and margin; a number that two teams compute differently cannot settle a decision.\n2. **A decision that can change** — a budget that may be reallocated, a price that may be changed. If the decision is fixed by policy, the analysis is decoration.\n\n**The caveat to add.** Data-driven is not data-only: the model does not know about a new competitor or a regulation that starts next month, so the evidence informs the decision and does not replace judgement.\n\n**Exam line:** describe, diagnose, predict, prescribe — with one agreed metric and a decision that is genuinely open, evidence beats opinion.`,
              diagram: `analytics`,
              diagramCaption:
                `The four types of analytics behind data-driven decision making — descriptive, diagnostic, predictive and prescriptive.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Trace the evolution of Business Intelligence and Decision Support Systems, naming the technology of each stage and what the decision maker could newly do.`,
              explain:
                `**What is being asked.** A dated arc, with a consequence at each step.\n\n**The stages.** 1960s MIS reports → 1970s DSS (what-if models) → 1980s EIS (executive screens) → 1990s data warehouse plus OLAP (Inmon and Kimball) → 2000s self-service BI → 2010s cloud and embedded analytics → 2020s AI-assisted and generative BI.\n\n**The user change.** Read a printed report → run a what-if model → see a KPI screen → slice a cube → build your own chart → see it anywhere, inside the app → ask a question in words.\n\n**How to score the 5 marks.** Stages with the technology (3) · the user capability at each stage (1.5) · the direction of the trend (0.5).`,
              answer:
                `BI grew out of decision support: each stage removed one more step between the question a manager asked and the answer.\n\n| Stage | Era | Technology | What the decision maker could newly do |\n|---|---|---|---|\n| **MIS reports** | 1960s | batch mainframe, COBOL, printed reports | receive a scheduled summary of operations |\n| **DSS** | 1970s | model base, what-if spreadsheets, small databases | run a scenario: what if we raise the price by 5 percent |\n| **EIS** | 1980s | executive information systems, drill-down screens | monitor a handful of critical indicators |\n| **Data warehouse + OLAP** | 1990s | Inmon and Kimball models, MOLAP cubes | slice and drill by product, region and time |\n| **Self-service BI** | 2000s | in-memory engines, visual discovery | build a chart without asking IT |\n| **Cloud and embedded** | 2010s | SaaS BI, embedding APIs, mobile | see the metric inside the operational screen |\n| **AI-assisted and generative BI** | 2020s | semantic layer, LLMs, natural-language query | ask a question in words and get a chart or a summary |\n\n**What each stage added**\n1. **MIS** added regularity — the report arrived whether or not anyone asked.\n2. **DSS** added interactivity — the manager could change an assumption and see the effect.\n3. **EIS** added focus — ten numbers on one screen instead of a hundred-page report.\n4. **The warehouse** added consistency — one definition of revenue for the whole company.\n5. **Self-service** added reach — the analyst was no longer the bottleneck.\n6. **The cloud** added ubiquity — the same metric on a phone, inside an application.\n7. **Generative BI** added a conversation — the question need not be translated into a query by hand.\n\n**The thread.** Every stage moved the same way: from periodic to on-demand, from IT-authored to user-authored, from numbers to explanation. What did **not** change is the need for a trusted definition — which is why the warehouse stage remains the foundation of the AI stage.\n\n**Exam line:** MIS, DSS, EIS, warehouse and OLAP, self-service, cloud, generative — each stage shortened the distance between the question and the answer.`,
              diagram: `vz-decision`,
              diagramCaption:
                `The evolution from MIS and DSS to self-service and AI-assisted BI, and what the decision maker gained at each stage.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain the applications of Business Intelligence in five business domains, with one metric and one decision for each domain.`,
              explain:
                `**What is being asked.** Domain-wise use, each with a concrete metric and the decision the analysis drives.\n\n**Domains.** Retail, banking, healthcare, manufacturing or supply chain, HR, telecom, insurance, education.\n\n**Structure.** Domain → the metric that matters → the decision → the BI artefact (dashboard, scorecard, alert).\n\n**How to score the 5 marks.** Five domains with a metric each (3.5) · the decisions (1) · one sentence on why BI generalises (0.5).`,
              answer:
                `BI is domain-neutral in method and domain-specific in metric — the same warehouse pattern serves every industry, but each one watches different numbers.\n\n| Domain | Metric | Decision it drives | BI artefact |\n|---|---|---|---|\n| **Retail** | sales per square foot, basket size, stock cover | which store to restock, which product to delist | category dashboard, stock-out alert |\n| **Banking** | NPA ratio, cost per transaction, cross-sell rate | which loan segment to tighten, which customer to offer a card | risk scorecard, campaign list |\n| **Healthcare** | bed occupancy, average length of stay, readmission rate | staffing per shift, which department to audit | operational dashboard, clinical scorecard |\n| **Manufacturing** | OEE, defect rate, on-time delivery | line scheduling, supplier renegotiation | plant dashboard, SPC charts |\n| **Human resources** | attrition rate, time to hire, cost per hire | which team needs retention, where the pipeline is slow | HR scorecard, attrition heat map |\n| **Telecom** | ARPU, churn probability, network drop rate | which plan to reprice, where to invest in coverage | churn model, coverage dashboard |\n\n**How one pattern fits all six**\n1. **A transaction system records events** — a sale, a payment, a discharge, a shift.\n2. **ETL conforms them** into the same product, customer, location and time dimensions.\n3. **The warehouse keeps history**, so a trend is possible and not only a snapshot.\n4. **The metric is defined once** — a churn definition agreed by marketing and finance.\n5. **A dashboard or an alert puts it in front of the person who acts**.\n\n**The domain-specific part to state.** The method is identical; what changes is the **grain, the metric and the decision cycle** — retail decides hourly, a bank quarterly, a hospital per shift — which is why the refresh frequency differs while the model does not.\n\n**Exam line:** the warehouse pattern is the same everywhere; retail watches basket size, banking watches NPA, healthcare watches occupancy — and each dashboard ends in a specific decision.`,
              diagram: `biflow`,
              diagramCaption:
                `Applications of BI across retail, banking, healthcare, manufacturing, HR and telecom, with the metric and decision for each.`,
            },
          ],
        },
      ],
    },
    {
      number: 2,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Compare an operational database with a data warehouse on at least seven points, and explain why an organization cannot run its analytics directly on the operational system.`,
              explain:
                `**What is being asked.** Two workloads with opposite requirements, and the consequence for the same machine.\n\n**Points.** Purpose, data, design, operations, query shape, size, history, users, refresh, performance goal.\n\n**The conflict.** A long analytical scan holds locks and consumes I/O; a transactional system must answer a small write in milliseconds. Running a month-end report on the production database slows the shop floor.\n\n**How to score the 5 marks.** Seven comparison points (3) · the workload conflict with an example (1.5) · one line on the separation (0.5).`,
              answer:
                `Both store the same business events, but one is built to **record** them and the other to **analyse** them — and the two optimisations contradict each other.\n\n| Point | Operational database (OLTP) | Data warehouse (OLAP) |\n|---|---|---|\n| Purpose | run the daily business | support analysis and decisions |\n| Data | current, detailed, one subject area | historical, integrated, all subject areas |\n| Design | normalised (3NF), no redundancy | dimensional (star), deliberately redundant |\n| Operations | insert, update, delete | bulk load, read-only query |\n| Query shape | short, single row or few rows | long, scan and aggregate millions of rows |\n| Size | gigabytes | terabytes to petabytes |\n| History | overwritten by the latest value | kept as time-stamped snapshots |\n| Users | clerks, applications, many at once | analysts and managers, few at a time |\n| Refresh | continuously, per transaction | periodically, by scheduled ETL |\n| Indexes | many, tuned for point lookups | fewer, tuned for range scans and joins |\n| Failure cost | immediate loss of business | delayed insight |\n\n**Why analytics cannot run on the operational system**\n1. **Locking and blocking** — a month-end aggregation over two years of invoices holds shared locks; a customer trying to pay waits or times out.\n2. **I/O contention** — one scan of 50 million rows evicts the working set from the buffer cache, and every transaction slows.\n3. **Incompatible design** — 3NF joins across ten tables to answer one question, while a star schema answers it in two.\n4. **No history** — an operational row holds the current address only, so last year sales by region cannot be reproduced.\n5. **Conflicting indexes** — an index that makes a point lookup fast adds write cost to every insert.\n\n**The separation.** ETL copies and conforms the data into a warehouse, so the operational system stays fast and the analyst gets history and a dimensional model. The cost is latency — the warehouse is minutes to hours behind, which is why near-real-time requirements push a subset back to streaming or a data lakehouse.\n\n**Exam line:** OLTP writes a few rows fast, OLAP reads millions of rows slowly — normalised and historical are different machines, and mixing them slows the business.`,
              diagram: `bw-oltp-olap`,
              diagramCaption:
                `Operational database versus data warehouse on purpose, design, query shape, history and refresh.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain the four characteristics of a data warehouse — subject-oriented, integrated, time-variant and non-volatile — with one example of each.`,
              explain:
                `**What is being asked.** The classic Inmon definition, unpacked.\n\n**Subject-oriented.** Organised by business subject (sales, inventory, customer) rather than by application.\n**Integrated.** One encoding, one unit, one naming standard across sources.\n**Time-variant.** Every record carries a time; the warehouse holds snapshots over years.\n**Non-volatile.** Loaded and read, never updated in place by users.\n\n**How to score the 5 marks.** Four characteristics with an example each (4) · the consequence for design (1).`,
              answer:
                `A data warehouse is defined by four properties, and each one exists to make analysis possible.\n\n**1. Subject-oriented.** The warehouse is organised by what the business analyses — sales, customer, inventory, finance — not by the application that created the data.\n> Example: the \`sales\` subject area draws from the billing system, the CRM and the e-commerce site, and presents one sales view instead of three application views.\n\n**2. Integrated.** Sources disagree about codes, units and names; the warehouse resolves that once, at load time.\n> Example: \`Pune\`, \`PUNE\` and \`pune\` become one city code; rupees and dollars are converted to one base currency; \`cust_id\` and \`customer_no\` become one surrogate key.\n\n**3. Time-variant.** Every record carries a time stamp and the warehouse keeps history, so a trend is possible.\n> Example: a customer address change produces a new version with \`valid_from\` and \`valid_to\`, so last year sales by region can still be reported correctly.\n\n**4. Non-volatile.** After loading, users only read; the data is not updated or deleted by them, and it is refreshed on a schedule.\n> Example: the finance team cannot edit a sales figure in the warehouse; a correction is made in the source and arrives in the next load, and the earlier snapshot stays for audit.\n\n| Characteristic | Design consequence |\n|---|---|\n| subject-oriented | dimensional models per business process, not per application |\n| integrated | a conformed dimension layer and a data dictionary |\n| time-variant | date dimension, effective dates, periodic snapshots |\n| non-volatile | bulk loads, read-only access, versioned corrections |\n\n**The one-line consequence.** Because the data is integrated and historical, the same report run for last March produces the same numbers today — reproducibility is what makes the warehouse trustworthy.\n\n**Exam line:** subject-oriented by design, integrated at load, time-variant through history, non-volatile after load — and reproducibility is the payoff.`,
              diagram: `bw-characteristics`,
              diagramCaption:
                `The four characteristics of a data warehouse — subject-oriented, integrated, time-variant and non-volatile.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Explain the three-tier architecture of a data warehouse — staging, warehouse and presentation — and state the role of metadata in it.`,
              explain:
                `**What is being asked.** The layers, the boundary between them, and the catalogue that describes them.\n\n**Tiers.** Bottom (source and staging), middle (warehouse and marts), top (presentation: reports, dashboards, OLAP, models).\n\n**Metadata.** Definitions, lineage, ETL logs, data quality results — it is what makes the warehouse self-describing.\n\n**How to score the 5 marks.** Three tiers with the job of each (3) · staging explained (1) · metadata role (1).`,
              answer:
                `A warehouse is built in tiers so that each layer can fail without corrupting the next.\n\n\`\`\`\nTIER 3  Presentation  →  dashboards, reports, OLAP, ML features\n                ▲\nTIER 2  Warehouse     →  integrated history, star schemas, data marts\n                ▲\nTIER 1  Sources and staging  →  extracts, raw landing, validation\n        (metadata and governance run across all three)\n\`\`\`\n\n| Tier | Holds | Job |\n|---|---|---|\n| **1 — sources and staging** | extracts of ERP, CRM, POS, files, logs | land the raw data, validate schema, reject bad files |\n| **2 — warehouse** | conformed dimensions, fact tables, marts | integrate, keep history, model for analysis |\n| **3 — presentation** | dashboards, cubes, reports, model features | deliver the insight to a person or a system |\n\n**Why staging is separate.** Raw extracts are unpredictable: a file arrives with a changed delimiter, a column has the wrong type, a half-loaded table. Staging absorbs that uncertainty — the same input is re-loaded identically on a retry, and the warehouse only ever receives validated data.\n\n**The role of metadata**\n1. **Business metadata** — what \`net_revenue\` means, which formula, who owns it.\n2. **Technical metadata** — table structures, data types, keys, indexes, source-to-target mappings.\n3. **Operational metadata** — load times, row counts, failures, data quality test results and lineage.\n\nWithout metadata the warehouse becomes a black box: a number cannot be traced to its source, a failed load is discovered by the business rather than by the pipeline, and two teams define the same metric differently.\n\n**Exam line:** staging lands, the warehouse integrates and keeps history, presentation delivers — and metadata is what lets anyone trace a number back to its source.`,
              diagram: `bw-architecture`,
              diagramCaption:
                `Three-tier data warehouse architecture — sources and staging, warehouse and marts, presentation — with metadata across all tiers.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain the ETL process — extraction strategies, transformation steps and load types — with one validation check after loading.`,
              explain:
                `**What is being asked.** The three stages with the engineering detail that examiners reward.\n\n**Extract.** Full, incremental (high-water mark or timestamp), CDC.\n**Transform.** Clean, conform, derive, aggregate, deduplicate, apply business rules.\n**Load.** Full refresh vs incremental, append vs upsert, and dimension handling (SCD types).\n**Validation.** Row counts, checksums, referential integrity, reconciliation against the source.\n\n**How to score the 5 marks.** Three stages with options (3) · transformation examples (1) · one validation check with the reason (1).`,
              answer:
                `ETL is the pipeline that turns operational data into warehouse data; each stage has a choice to make.\n\n**1. Extract**\n\n| Strategy | How it works | Use |\n|---|---|---|\n| full extract | copy the whole table each run | small dimensions, first load |\n| incremental | only rows newer than the last watermark | large facts |\n| CDC | read the database log for changes | near-real-time, low source impact |\n\nKeep the raw extract in staging so that a failed load can be replayed without re-reading the source.\n\n**2. Transform** — where the business rules live\n\`\`\`sql\n-- clean, conform, derive, then deduplicate\nSELECT\n  UPPER(TRIM(c.city))                    AS city_std,\n  CAST(o.order_date AS DATE)             AS order_date,\n  o.qty * o.unit_price                   AS gross_amount,\n  o.qty * o.unit_price * (1 - o.disc)    AS net_amount,\n  DATEDIFF('day', c.join_date, o.order_date) AS days_since_join\nFROM staging.orders o\nJOIN staging.customers c ON c.cust_id = o.cust_id\nWHERE o.order_date >= :watermark\n\`\`\`\nTypical work: trim and standardise text, cast types, convert units and currency, resolve duplicates, derive columns, apply business rules, and handle dimension changes (SCD type 1 overwrite, type 2 new row).\n\n**3. Load**\n- **Full refresh** — truncate and insert; simple, but a window with no data.\n- **Incremental append** — insert new fact rows only.\n- **Upsert / merge** — insert or update on a key; the usual choice for dimensions.\n- **Idempotent load** — running the job twice produces the same result, which is what makes a retry safe.\n\n**The order to load.** Dimensions first, then facts, so that every foreign key already exists. Load into a shadow table and swap, if the reporting window cannot tolerate a partial load.\n\n**Validation after loading**\n1. **Row count** — source rows read equals rows loaded minus rows quarantined.\n2. **Checksum or sum** — the total of \`net_amount\` matches an independent aggregate from the source.\n3. **Referential integrity** — no fact row has a key missing from its dimension.\n4. **Freshness** — the maximum date in the fact table is the expected date.\n5. **Duplicate check** — the primary key of the fact table is unique.\n\nIf a check fails, the job stops (fail fast), the warehouse keeps the last good state, and an alert is raised — rather than a wrong number reaching a dashboard.\n\n**Exam line:** extract incrementally where you can, transform with explicit rules, load dimensions before facts — and verify row counts, sums and keys before anyone reads the dashboard.`,
              diagram: `bw-etl`,
              diagramCaption:
                `The ETL process — extraction strategies, transformation steps, load types and the validation checks after loading.`,
            },
          ],
        },
      ],
    },
    {
      number: 3,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Explain the multidimensional data model — the cube, dimensions, hierarchies and measures — and show how a sales cube answers a question that a flat table cannot answer quickly.`,
              explain:
                `**What is being asked.** Data seen as a cube with axes, not as a table of rows.\n\n**The parts.** Dimensions (product, time, store), hierarchies inside a dimension (category → sub-category → product), measures (quantity, revenue), cells.\n\n**The gain.** Pre-aggregation and indexing by dimension let a slice or roll-up be answered in constant or near-constant time.\n\n**How to score the 5 marks.** The cube with its axes and cells (2) · hierarchies (1) · measures and additivity (1) · one worked query comparison (1).`,
              answer:
                `A multidimensional model treats data as a **cube**: each axis is a dimension along which the business analyses, and each cell holds the measures for one combination.\n\n\`\`\`\n        Time (Q1, Q2, Q3, Q4)\n          │\n   Store  │        cells = measures\n  (Pune,  │        (qty, revenue, margin)\n  Mumbai) └────────────  Product\n                        (beverages, snacks, dairy)\n\`\`\`\n\n**The components**\n\n| Part | Meaning | Example |\n|---|---|---|\n| **dimension** | an axis of analysis | product, time, store, customer |\n| **hierarchy** | levels inside a dimension | category → sub-category → brand → SKU |\n| **member** | one value on an axis | Pune, Q3, beverages |\n| **measure** | the number in the cell | quantity, net revenue, margin |\n| **cell** | one intersection | beverages × Pune × Q3 |\n\n**Measures and additivity**\n- **Additive** — quantity and revenue can be summed across every dimension.\n- **Semi-additive** — a balance (stock on hand, account balance) can be summed across stores but **not** across time; a March balance plus an April balance is meaningless.\n- **Non-additive** — a ratio (margin percent, average basket) must be recomputed from the components, never summed.\n\n**Why it beats a flat table**\n\`\`\`sql\n-- flat operational table: three joins and a full scan each time\nSELECT p.category, SUM(o.qty * o.price)\nFROM orders o JOIN items i ON i.order_id = o.id\n     JOIN products p ON p.id = i.product_id\n     JOIN stores s ON s.id = o.store_id\nWHERE s.city = 'Pune' AND o.date BETWEEN '2026-07-01' AND '2026-09-30'\nGROUP BY p.category;\n\`\`\`\nWith a cube, the cell for beverages × Pune × Q3 is already computed; the answer is a lookup plus two additions from the hierarchy, which is why a slice or a roll-up feels instant in an OLAP tool.\n\n**The trade-off.** The cube costs storage and load time, and it only answers questions along the dimensions that were modelled — which is why the grain and the dimensions are designed from the questions, not from the tables.\n\n**Exam line:** dimensions are the axes, hierarchies let you roll up, measures live in the cells — and pre-aggregation is what makes the answer instant.`,
              diagram: `ol-multidim`,
              diagramCaption:
                `The multidimensional model — dimensions, hierarchies, measures and cells — and why a cube answers a slice faster than a flat table.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Distinguish fact tables from dimension tables with an example, and explain the grain of a fact table and the three types of fact table.`,
              explain:
                `**What is being asked.** The two-table pattern of dimensional modelling, the grain decision, and the three fact archetypes.\n\n**Fact.** Keys plus numeric measures, many rows, narrow.\n**Dimension.** Descriptive attributes, fewer rows, wide; the context of a measure.\n\n**Grain.** One row = one order line / one day per store / one visit.\n\n**Types.** Transaction, periodic snapshot, accumulating snapshot.\n\n**How to score the 5 marks.** The distinction with an example (2) · grain and why it is decided first (1.5) · three fact types (1.5).`,
              answer:
                `Every dimensional model has two kinds of table: one records **what happened and how much**, the other records **who, what, when and where**.\n\n**Fact versus dimension**\n\n| Point | Fact table | Dimension table |\n|---|---|---|\n| Holds | foreign keys + numeric measures | descriptive attributes |\n| Rows | very many — millions | relatively few — hundreds to thousands |\n| Columns | few, mostly numeric | many, mostly text |\n| Grows | with every transaction | with new members of the business |\n| Answers | how much, how many | which, where, when, who |\n| Example | \`Fact_Sales\` | \`Dim_Product\`, \`Dim_Store\`, \`Dim_Date\` |\n\n\`\`\`\nFact_Sales\n  date_key, product_key, store_key, customer_key,\n  quantity, unit_price, discount, net_amount, cost_amount\n\nDim_Product\n  product_key, name, category, sub_category, brand, price_band\n\`\`\`\n\n**The grain** — the definition of one fact row: "one row per order line", "one row per store per day", "one row per customer visit".\n- It is decided **first**, because it fixes which dimensions can attach, which measures are additive, and which questions the table can answer.\n- A header total stored beside a line detail is the classic error: the order amount repeats on every line, so a sum over lines counts it three times.\n\n**The three types of fact table**\n\n| Type | One row is | Example | Note |\n|---|---|---|---|\n| **Transaction** | one event | one order line | most detailed; can be aggregated any way |\n| **Periodic snapshot** | one period per entity | stock on hand at each month end | regular rhythm; good for trends |\n| **Accumulating snapshot** | one process instance, updated | an order from placed to delivered | has several date keys for the milestones |\n\n**The rule to state.** Keep one grain per fact table: sales at line grain, targets at store-month grain, and connect them through conformed dimensions — a query then joins them only at the level they share.\n\n**Exam line:** the fact table measures, the dimension table describes, the grain is decided first — and a snapshot fact answers a different question from a transaction fact.`,
              diagram: `ol-fact-dim`,
              diagramCaption:
                `Fact versus dimension tables with an example, the grain of a fact table and the three fact table types.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Design a star schema for a retail sales analysis, stating the grain, the fact table, four dimensions and the measures, and list two queries it answers efficiently.`,
              explain:
                `**What is being asked.** A design exercise; the examiner marks the decisions, not the drawing.\n\n**Grain.** One row per order line.\n**Dimensions.** Date, product, store, customer (promotion optional).\n**Measures.** Quantity, unit price, discount, net amount, cost, margin.\n**Queries.** Category by quarter and region; customer segment contribution.\n\n**How to score the 5 marks.** Grain and justification (1) · fact and four dimensions with attributes (2) · measures with additivity (1) · two queries (1).`,
              answer:
                `**Step 1 — the grain.** One row per **order line**, because a line carries one product and one quantity; an order with three products becomes three rows.\n\n**Step 2 — the star**\n\`\`\`\n            Dim_Date          Dim_Product\n                \\                 /\n                 \\               /\n                  Fact_Sales\n                 /           \\\n            Dim_Store      Dim_Customer\n\`\`\`\n\n**Step 3 — the tables**\n\n| Table | Key | Attributes |\n|---|---|---|\n| \`Fact_Sales\` | (date_key, product_key, store_key, customer_key, order_no) | quantity, unit_price, discount_amount, net_amount, cost_amount, gross_margin |\n| \`Dim_Date\` | date_key | day, month, quarter, year, weekday, is_holiday, fiscal_period |\n| \`Dim_Product\` | product_key | name, category, sub_category, brand, price_band, supplier |\n| \`Dim_Store\` | store_key | store_name, city, state, region, store_type, opening_date |\n| \`Dim_Customer\` | customer_key | name, segment, city, loyalty_tier, join_date |\n\n**Step 4 — measures and additivity**\n- **Additive** — quantity, net_amount, cost_amount, gross_margin, in every dimension.\n- **Non-additive** — unit_price and discount percentage: recompute from the amounts, never sum them.\n\n**Step 5 — two queries the star answers well**\n\`\`\`sql\n-- 1. category performance by quarter and region\nSELECT d.year, d.quarter, s.region, p.category, SUM(f.net_amount) AS revenue\nFROM Fact_Sales f\nJOIN Dim_Date d    ON d.date_key = f.date_key\nJOIN Dim_Product p ON p.product_key = f.product_key\nJOIN Dim_Store s   ON s.store_key = f.store_key\nWHERE d.year = 2026\nGROUP BY d.year, d.quarter, s.region, p.category\nORDER BY 1, 2, 4;\n\`\`\`\n\`\`\`sql\n-- 2. customer segment contribution in the festive period\nSELECT c.segment, SUM(f.net_amount) AS revenue, SUM(f.gross_margin) AS margin\nFROM Fact_Sales f\nJOIN Dim_Customer c ON c.customer_key = f.customer_key\nJOIN Dim_Date d     ON d.date_key = f.date_key\nWHERE d.is_holiday = TRUE\nGROUP BY c.segment\nORDER BY margin DESC;\n\`\`\`\n\n**Why the star works** — one join from the fact table to each dimension, no chain of lookups, and every filter is a single attribute on a dimension row, which is exactly what a BI tool generates.\n\n**Exam line:** grain first, then one fact and four dimensions, additive measures — and a query that joins fact to dimension once per axis.`,
              diagram: `ol-star`,
              diagramCaption:
                `A retail star schema — the fact table at order-line grain with the four dimensions and the measures it carries.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Compare star and snowflake schemas on six points, and state which an organization should choose for a reporting-heavy warehouse and why.`,
              explain:
                `**What is being asked.** Redundancy against joins, with a recommendation.\n\n**Star.** Denormalised dimensions, one join per dimension, fast, some redundancy.\n**Snowflake.** Normalised dimensions in a hierarchy, less redundancy, more joins, more complex.\n\n**Recommendation.** Star for a reporting warehouse, because query speed and simplicity dominate; snowflake for very large or rapidly changing dimensions.\n\n**How to score the 5 marks.** Six comparison points (3.5) · the recommendation with the reason (1.5).`,
              answer:
                `Both are dimensional models; they differ in whether the dimension tables are normalised.\n\n| Point | Star schema | Snowflake schema |\n|---|---|---|\n| Dimensions | denormalised, flat | normalised into sub-dimensions |\n| Joins per query | one per dimension | several, following the hierarchy |\n| Redundancy | higher — category name repeats on every product | lower — stored once |\n| Storage | more | less |\n| Query speed | faster | slower as hops increase |\n| Design complexity | simple, easy for a business user to read | complex, harder to explain |\n| ETL effort | simpler loads | more tables to load and keep consistent |\n| Update behaviour | a change touches many rows | a change touches one row |\n| BI tool support | ideal — every tool expects this shape | workable, with extra join definitions |\n\n\`\`\`\nSTAR                          SNOWFLAKE\nFact → Dim_Product            Fact → Dim_Product → Dim_Category → Dim_Department\n      (category inline)                 (2–3 hops to the same answer)\n\`\`\`\n\n**The recommendation.** For a reporting-heavy warehouse choose the **star**, because:\n1. **Speed** — every extra hop costs a join over millions of fact rows at query time.\n2. **Simplicity** — a business analyst can read a star and write a correct query; a snowflake needs the schema diagram.\n3. **Tool fit** — BI tools build their relationships and cubes directly from star schemas.\n4. **ETL** — fewer tables to load, fewer integrity checks.\n\n**When the snowflake still earns its place** — a dimension with millions of members or a hierarchy shared across many dimensions (a large customer or product hierarchy, or a rapidly changing attribute), where the redundancy of a flat table would be unacceptable in size or would need frequent wide updates.\n\n**The practical middle.** Most warehouses are star-shaped with one or two snowflaked dimensions where size demands it, plus conformed dimensions so that facts can be compared across processes.\n\n**Exam line:** the star denormalises for speed and clear queries, the snowflake normalises for storage and clean updates — and reporting wins on the star.`,
              diagram: `ol-star-vs-snow`,
              diagramCaption:
                `Star versus snowflake schema compared on joins, redundancy, storage, speed and update behaviour.`,
            },
          ],
        },
      ],
    },
    {
      number: 4,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Distinguish a business metric from a key performance indicator, give three examples of each, and explain the properties of a well-defined KPI.`,
              explain:
                `**What is being asked.** Not every number is a KPI, and a KPI must be defined precisely.\n\n**Metric.** Any measurable quantity (page views, calls handled).\n**KPI.** A metric tied to a strategic objective, with a target, an owner and a time frame.\n\n**Properties.** Specific, measurable, has a baseline and a target, an owner, a defined formula and source, a review cadence, and a decision attached.\n\n**How to score the 5 marks.** The distinction with examples (2) · five properties of a good KPI (2) · one bad KPI and how to fix it (1).`,
              answer:
                `A **metric** is anything you can count; a **KPI** is a metric the organization has chosen to steer by.\n\n| Point | Business metric | Key performance indicator |\n|---|---|---|\n| Definition | any measurable quantity | a metric tied to a strategic objective |\n| Target | usually none | an explicit target and a threshold |\n| Owner | none in particular | one named accountable person |\n| Cadence | whenever asked | reviewed on a fixed rhythm |\n| Number | can be many hundreds | a handful per function |\n| Example | page views, calls handled, tickets closed | revenue growth, churn rate, on-time delivery, NPS |\n\n**Examples**\n- **Metrics:** cart abandonment count, average call duration, number of invoices raised.\n- **KPIs:** revenue growth against a 12 percent target, monthly churn against 2 percent, on-time delivery against 95 percent.\n\n**Properties of a well-defined KPI**\n1. **Specific formula** — \`churn = customers lost in the month / customers at the start\`, with the cancellation rule written down.\n2. **A baseline and a target** — 2.6 percent today, 2.0 percent by March, so the number has direction.\n3. **An owner** — the person who can change the outcome.\n4. **A source and a grain** — which table, which date field, at what level (customer-month).\n5. **A review cadence** — weekly for an operational KPI, monthly or quarterly for a strategic one.\n6. **A decision attached** — what will be done when the number is red; a KPI with no action is a report.\n\n**A bad KPI and its fix.** "Customer satisfaction" is unmeasurable as stated. Fixed: **CSAT = average of the post-service rating (1–5) for tickets closed in the month**, target 4.3, owner the service head, reviewed monthly, action a call-back audit whenever it falls below 4.0.\n\n**Exam line:** a metric counts, a KPI steers — formula, baseline, target, owner, cadence and a decision, or it is only a number.`,
              diagram: `td-metrics`,
              diagramCaption:
                `Business metrics versus key performance indicators, with examples and the properties of a well-defined KPI.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain the importance of KPIs in organizational decision making at three levels, and how a KPI tree connects an operational metric to a strategic objective.`,
              explain:
                `**What is being asked.** How a number reaches a decision at each level, and how KPIs nest.\n\n**Levels.** Strategic (board, quarterly), tactical (department, monthly), operational (team, daily).\n\n**KPI tree.** Strategic objective decomposed into drivers, each with its own KPI — e.g. profit ← revenue ← basket size × footfall.\n\n**How to score the 5 marks.** Three levels with the decision and cadence (2.5) · the KPI tree worked example (2) · one caution about too many KPIs (0.5).`,
              answer:
                `A KPI matters only where a decision is taken, and organizations take decisions at three levels that need different numbers and different rhythms.\n\n| Level | Horizon | Typical KPIs | Decision it drives | Cadence |\n|---|---|---|---|---|\n| **Strategic** | 1–3 years | revenue growth, market share, margin, customer retention | where to invest, which market to enter | quarterly |\n| **Tactical** | weeks–months | category margin, campaign ROI, stock cover, attrition | reallocate budget, reprice, change staffing | monthly |\n| **Operational** | daily–weekly | stock-outs, average handling time, on-time dispatch, backlog | restock today, move a shift, escalate a case | daily |\n\n**The KPI tree** — a strategic objective decomposed until each leaf is something a person can act on:\n\`\`\`\nPROFIT (strategic)\n ├── REVENUE\n │    ├── footfall  ←  store traffic counter\n │    └── basket size  ←  units per bill\n ├── GROSS MARGIN\n │    ├── discount rate  ←  discount / gross\n │    └── category mix   ←  share of high-margin lines\n └── COST\n      ├── cost per order  ←  fulfilment cost / orders\n      └── return rate     ←  returns / dispatches\n\`\`\`\nEvery leaf is a KPI with an owner; every parent is the arithmetic of its children, which means a movement at the top can be **traced** to a leaf and then to a person.\n\n**Why the tree is the useful artefact**\n1. It shows **which operational metric is worth improving** — a fall in profit traced to basket size tells the store team what to fix.\n2. It prevents **contradictory targets** — a discount target and a margin target on the same branch must be traded off explicitly.\n3. It makes **reporting coherent** — the same tree structure organises the dashboard, the review meeting and the annual plan.\n\n**The caution.** A dashboard with forty KPIs has none: attention is the scarce resource, so five to seven per level is the working limit, and everything else is a supporting metric available on drill-down.\n\n**Exam line:** strategic, tactical and operational KPIs differ in horizon and cadence — and a KPI tree is what lets a board-level fall be traced to a daily action.`,
              diagram: `td-kpi-decision`,
              diagramCaption:
                `KPIs at strategic, tactical and operational levels, and a KPI tree that traces a profit change down to a daily action.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Explain performance measurement and analytical reporting in BI — the scorecard, the variance report and the exception report — and state the decision each supports.`,
              explain:
                `**What is being asked.** Three reporting instruments and the decision each serves.\n\n**Scorecard.** KPI against target, with status colour, trend and owner — periodic review.\n**Variance report.** Actual versus budget or plan, with the difference and its cause — monthly review.\n**Exception report.** Only the rows that breach a threshold — daily action.\n\n**How to score the 5 marks.** Three instruments with structure (3) · the decision each supports (1.5) · one design rule (0.5).`,
              answer:
                `Performance measurement is the discipline of comparing what happened with what was planned; the three reports below do it at three different rhythms.\n\n**1. The scorecard** — KPI, target, status, trend, owner.\n\n| KPI | Target | Actual | Status | Trend | Owner |\n|---|---|---|---|---|---|\n| Revenue growth | 12 % | 9.4 % | amber | down 2 months | Sales head |\n| On-time delivery | 95 % | 97.1 % | green | stable | Operations |\n| Churn | 2.0 % | 2.8 % | red | up | Retention lead |\n\nSupports: the monthly performance review — where to intervene, who is accountable.\n\n**2. The variance report** — actual against plan, with the difference explained.\n\`\`\`sql\nSELECT d.month, p.category,\n       SUM(f.net_amount)                          AS actual,\n       SUM(b.budget_amount)                       AS budget,\n       SUM(f.net_amount) - SUM(b.budget_amount)   AS variance,\n       ROUND(100.0 * (SUM(f.net_amount) - SUM(b.budget_amount))\n             / NULLIF(SUM(b.budget_amount), 0), 1) AS variance_pct\nFROM Fact_Sales f\nJOIN Dim_Date d    ON d.date_key = f.date_key\nJOIN Dim_Product p ON p.product_key = f.product_key\nJOIN Fact_Budget b ON b.month_key = d.month_key AND b.product_key = f.product_key\nGROUP BY d.month, p.category\nORDER BY ABS(variance_pct) DESC;\n\`\`\`\nSupports: the budget review — reallocate spend, revise the forecast, ask why a category overspent.\n\n**3. The exception report** — only the rows that break a rule, because nobody reads a list of a thousand stores.\n\`\`\`sql\nSELECT store_name, stock_cover_days, reorder_level\nFROM vw_stock_status\nWHERE stock_cover_days < reorder_level\nORDER BY stock_cover_days;\n\`\`\`\nSupports: today operational action — raise a purchase order or transfer stock.\n\n**The design rule that ties them together.** A scorecard **summarises**, a variance report **explains**, an exception report **alerts**; the reader of the scorecard clicks into the variance, and the operator only ever sees the exceptions.\n\n**Exam line:** scorecard for accountability, variance for explanation, exception for action — same data, three rhythms.`,
              diagram: `td-performance`,
              diagramCaption:
                `Performance measurement in BI — the scorecard, the variance report and the exception report, and the decision each supports.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain temporal data in BI — valid time, transaction time and the difference between them — with an example of a price change recorded correctly.`,
              explain:
                `**What is being asked.** Two independent timelines and why a warehouse needs both.\n\n**Valid time.** When a fact was true in the real world.\n**Transaction time.** When the warehouse learned it.\n\n**Bitemporal.** Both stored, so a report can be run as-of a past state or as-of a past belief.\n\n**Example.** A price of 100 valid from 1 April, but entered on 10 April; a March report must show 100 and an audit of the 5 April report must show the old price.\n\n**How to score the 5 marks.** The two timelines defined (2) · the example with dates (2) · one reason a bank or insurer needs it (1).`,
              answer:
                `Business data has two clocks, and a warehouse that records only one of them cannot answer an audit question.\n\n| Timeline | Question it answers | Column pattern |\n|---|---|---|\n| **Valid time** | when was this true in the real world? | \`valid_from\`, \`valid_to\` |\n| **Transaction time** | when did the warehouse learn it? | \`recorded_at\`, \`superseded_at\` |\n\n**The difference in one sentence.** Valid time is about the business event; transaction time is about the database event — a late correction moves transaction time but not valid time.\n\n**A worked example**\n\`\`\`\nPrice of SKU-42 = 100, effective 1 April, but entered on 10 April (late price circular)\n\nvalid_from  valid_to   price   recorded_at   superseded_at\n2026-04-01  9999-12-31  100    2026-04-10    NULL\n2026-04-06  2026-04-09  100    2026-04-06    2026-04-10   (row corrected)\n\`\`\`\n- A report for **April** uses valid time and shows 100 — correct, because that was the true price.\n- An **audit** of the report printed on 5 April uses transaction time and shows the old value — correct, because that is what the business saw that day.\n- A **correction** entered today reopens the row and closes it at \`superseded_at\`, leaving the earlier belief intact.\n\n**Where it is not optional**\n1. **Financial reporting** — a restatement must be distinguishable from an original entry.\n2. **Insurance and healthcare** — a policy or treatment record must be readable as of the date of a claim.\n3. **Regulatory audit** — the question is not only "what happened" but "what did you know, and when".\n\n**The design consequence.** A bitemporal dimension carries both pairs of dates; queries add an \`AS OF\` style filter, and the ETL must never overwrite a superseded row in place.\n\n**Exam line:** valid time says when it was true, transaction time says when we knew — store both and a report can be reproduced as-of any date, or any belief.`,
              diagram: `td-temporal`,
              diagramCaption:
                `Temporal data in BI — valid time versus transaction time, and a price change recorded with both timelines.`,
            },
          ],
        },
      ],
    },
    {
      number: 5,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Explain the purpose of data visualization in BI — how the eye reads encodings, and why a chart is chosen over a table.`,
              explain:
                `**What is being asked.** Why a picture beats a list, and how the visual channel carries the comparison.\n\n**The point.** Perception is parallel: a pattern in a chart is seen at once, while a table has to be read row by row.\n\n**Encodings in order of accuracy.** Position on a common scale, length, angle and slope, area, colour intensity.\n\n**When a table wins.** Lookup of exact values, many attributes per row, precision to the third decimal.\n\n**How to score the 5 marks.** The purpose (1) · accuracy order of encodings (2) · chart versus table (1.5) · one example (0.5).`,
              answer:
                `A visualization exists to make a **comparison visible**; a table exists to make an **exact value available**. Choosing the wrong one slows the decision down.\n\n**How the eye reads an encoding** — most accurate first:\n\n| Encoding | Accuracy | Typical use |\n|---|---|---|\n| position on a common scale | highest | scatter plot, dot plot, bar by position |\n| length | high | bar chart |\n| angle or slope | medium | line chart, pie slices |\n| area | low | treemap, bubble |\n| colour intensity | lowest | heat map, choropleth |\n| colour hue | categorical only | category distinction, not magnitude |\n\n**Why perception is different from reading.** A chart is processed in parallel — the whole shape is available in a fraction of a second, and a single outlier is pre-attentive. A table is processed serially: every row must be read, compared and remembered, which is why a 200-row table hides a trend that a line chart shows immediately.\n\n**When a chart wins** — a comparison across categories, a trend over time, a distribution, an outlier, a relationship between two variables.\n\n**When a table wins** — the reader needs exact numbers (an audit, an invoice), the row has many attributes, or the differences are smaller than the eye can resolve.\n\n**A worked example.** Revenue for 12 months, 30 regions: a line chart answers "which months dipped" in one glance; a table of 360 cells answers "what exactly was March in Pune" — different questions, different instruments, and a good dashboard carries the chart with the table one click away.\n\n**Exam line:** position beats length beats angle beats area beats colour — choose the chart for a comparison and the table for an exact value.`,
              diagram: `vz-intro`,
              diagramCaption:
                `The purpose of visualization in BI and the accuracy of visual encodings, from position and length down to colour.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain five principles of effective data visualization — data-ink ratio, pre-attentive attributes, the five-second rule, consistent scales and accessibility — with one violation each.`,
              explain:
                `**What is being asked.** Principles as rules with a failure mode.\n\n**Data-ink.** Ink that carries data; chartjunk is 3-D, shadows, gradients.\n**Pre-attentive.** Colour, size, position noticed in ~250 ms — use for the exception.\n**Five-second rule.** The message must be readable in five seconds.\n**Consistent scales.** Truncated axes, dual axes, inconsistent baselines mislead.\n**Accessibility.** Contrast, colour-blind-safe palette, labels not colour alone.\n\n**How to score the 5 marks.** Five principles with a violation each (4) · the reason visual integrity matters (1).`,
              answer:
                `These five principles decide whether a chart informs or decorates.\n\n**1. Data-ink ratio** — the proportion of ink that actually encodes data. Maximise it.\n> Violation: a 3-D pie with shadows and a gradient, where the depth has no meaning and the angle is distorted.\n\n**2. Pre-attentive attributes** — colour, size, position and orientation are perceived before conscious attention (about 250 ms), so they must mark the exception, not everything.\n> Violation: eight bright colours, one per region, so nothing stands out and the one store that is failing disappears into the noise.\n\n**3. The five-second rule** — a viewer should be able to state the point of the chart within five seconds.\n> Violation: a page of 20 charts with no title stating the finding, so the reader must work out what to look at.\n\n**4. Consistent, honest scales** — a common baseline, an axis that starts at zero for bars, no dual axis that implies a relationship.\n> Violation: a bar chart whose y-axis starts at 92, turning a 2 percent rise into a visual doubling — technically true, deliberately misleading.\n\n**5. Accessibility** — sufficient contrast, a colour-blind-safe palette, labels as well as colour, and a text alternative.\n> Violation: a red-green status column with no icon or text, which a colour-blind reader — about one in twelve men — cannot decode.\n\n**Why integrity matters more than beauty.** A chart is an argument: the choice of baseline, scale and grouping can make the same data show opposite conclusions. Deliberately truncating an axis to exaggerate a difference is a data-integrity failure, not a style choice, and in a regulated context it is a compliance failure too.\n\n**Exam line:** cut the ink, colour only the exception, make the point survive five seconds, keep the scale honest and the palette accessible.`,
              diagram: `vz-principles`,
              diagramCaption:
                `Five principles of effective visualization with a violation of each, and why visual integrity decides trust.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Explain how a chart type is chosen for a business question — comparison, trend, composition, distribution and relationship — with the rule and the common mistake for each.`,
              explain:
                `**What is being asked.** A decision table from question to chart, plus the failure mode.\n\n**Mapping.** Comparison → bar sorted; trend → line; composition → stacked bar or treemap; distribution → histogram or box; relationship → scatter.\n\n**Mistakes.** Pie for ranking, line for unordered categories, stacked bar for comparing middle segments, scatter with overplotting.\n\n**How to score the 5 marks.** Five mappings (3) · the mistake for each or for three of them (1.5) · one sentence on accuracy (0.5).`,
              answer:
                `The chart is chosen by the question, not by taste or by the chart that looks best in a template.\n\n| Question | Chart | Rule | Common mistake |\n|---|---|---|---|\n| how do categories compare? | bar, sorted | zero baseline, sorted by value | unsorted bars, so the reader does the ranking |\n| how has it changed over time? | line | even time intervals, direct labels | line for unordered categories |\n| what is the whole made of? | stacked bar, 100 percent stacked, treemap | few segments; compare the bottom segment only | pie with eight slices |\n| how are values distributed? | histogram, box plot | state the bin width; add a box for groups | averaging away a bimodal spread |\n| are two variables related? | scatter | transparency or hexbin for density | a bubble chart implying precision it lacks |\n\n**Worked choices**\n1. **Revenue by region, 12 regions** → a sorted bar; the ranking is the question.\n2. **Monthly active users, 36 months** → a line; the shape of the trend is the question.\n3. **Category share of revenue, 4 categories** → a 100 percent stacked bar or a bar, not a pie, because a bar reads more accurately.\n4. **Order value distribution** → a histogram with a stated bin width; a mean alone hides the two peaks.\n5. **Price against units sold** → a scatter with transparency; a correlation claim needs the scatter, not two line charts.\n\n**The comparison trap in a stacked bar.** Only the bottom segment shares a baseline, so the middle segments cannot be compared across bars — use 100 percent stacked or small multiples when the interior segments matter.\n\n**The accuracy rule.** When two charts are possible, choose the one whose accuracy channel matches the importance of the comparison: position for a decision, colour only for a category hint.\n\n**Exam line:** comparison, trend, composition, distribution, relationship — one question, one chart, one rule, and the pie is rarely the answer.`,
              diagram: `vz-charts`,
              diagramCaption:
                `Chart choice from the business question — comparison, trend, composition, distribution and relationship, with the rule for each.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `State the principles of dashboard design — the single screen, the KPI limit, layout hierarchy, colour discipline and the exception — and design the layout of a one-screen sales dashboard.`,
              explain:
                `**What is being asked.** A design recipe, applied.\n\n**Principles.** One screen, no scrolling; 5–7 KPIs; top-left for the most important; colour only for status; the exception highlighted; consistent units and time windows.\n\n**The layout.** KPI strip at the top, trend chart in the centre, breakdown and exception table at the bottom, filter bar at the edge.\n\n**How to score the 5 marks.** Five principles (2.5) · the layout with the position and purpose of each region (2) · one anti-pattern (0.5).`,
              answer:
                `A dashboard is a **monitoring instrument**: it answers "are we on track, and where is the problem" in a few seconds.\n\n**The principles**\n1. **One screen, no scrolling** — the whole picture in one glance; a second screen is a detail page, reached by drill-down.\n2. **Five to seven KPIs** — attention is the scarce resource; everything else is a supporting metric on the detail page.\n3. **Layout hierarchy** — top-left carries the most important number, because that is where the eye lands first; related charts sit together.\n4. **Colour discipline** — one accent colour for the exception, grey for context, a consistent status palette (red/amber/green) with an icon or label as well.\n5. **Consistent units and windows** — the same time period and currency on every tile, stated in the subtitle, otherwise the tiles cannot be compared.\n6. **The exception, not the average** — a table of the five stores that breached a threshold is worth more than an average line.\n\n**A one-screen sales dashboard**\n\`\`\`\n┌───────────────────────────────────────────────────────────────┐\n│ Sales performance · last 30 days · INR · refreshed 09:15      │\n├───────────┬───────────┬───────────┬───────────┬───────────────┤\n│ Revenue   │ vs target │ Margin %  │ Orders    │ Stock-outs    │\n│ 4.28 Cr   │ 96 %  ●   │ 31.2 % ▲  │ 18,402    │ 7  ▲          │\n├───────────┴───────────┴───────────┴───────────┴───────────────┤\n│  Revenue trend (line, 90 days)      │  Region split (bar)     │\n│                                     │                         │\n├─────────────────────────────────────┴─────────────────────────┤\n│  Stores needing attention (exception table, 5 rows)           │\n├───────────────────────────────────────────────────────────────┤\n│  Filters: region · category · channel                          │\n└───────────────────────────────────────────────────────────────┘\n\`\`\`\n- **KPI strip** — five numbers with their target comparison and a status mark.\n- **Centre** — the trend and the regional split, the two comparisons a sales head makes every morning.\n- **Bottom** — the exception table, which is where the action comes from.\n- **Edge** — filters, so the screen can be narrowed without leaving it.\n\n**The anti-pattern to name.** A dashboard that shows every column of the warehouse, with a scroll bar, six colours and no titles, is a data dump — the reader cannot tell what is normal and what needs action.\n\n**Exam line:** one screen, five to seven KPIs, the most important at top-left, colour only for status, and the exception table at the bottom where the action is.`,
              diagram: `vz-dashboard`,
              diagramCaption:
                `Dashboard design principles and a one-screen sales dashboard layout — KPI strip, trend, breakdown and exception table.`,
            },
          ],
        },
      ],
    },
  ],
};
