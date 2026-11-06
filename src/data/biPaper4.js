// Business Intelligence Paper 4 — Model Paper (6 + 4 division)
//
// Facet map for this paper (the deepest facet of each unit; Papers 1–3 asked the
// definitional and design questions, this paper asks the business-case, build and
// evaluation questions):
//   Unit 1 — 1.7 business case and ROI, 1.2 types of DSS, 1.6 BI in banking,
//            1.1 the data-information-knowledge-wisdom ladder
//   Unit 2 — 2.3 staging and ODS design, 2.8 data-quality scorecards and monitoring,
//            2.7 data catalogue and lineage, 2.5 imputation strategy choice
//   Unit 3 — 3.10 drill-down, drill-through and drill-across, 3.6 schema choice for a
//            large retail warehouse, 3.9 sparse cubes, 3.12 OLAP in financial analysis
//   Unit 4 — 4.8 trend reporting with worked numbers, 4.1 the certified metric layer,
//            4.5 reconstructing a report as of a past date, 4.3 price-volume-mix variance
//   Unit 5 — 5.7 mobile and embedded dashboards, 5.2 an organizational visual standard,
//            5.1 usability testing of a dashboard, 5.6 build versus buy and migration cost

export const biPaper4 = {
  id: `bi-paper-4`,
  number: 4,
  name: `Paper 4`,
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
                `Prepare the business case for a Business Intelligence programme — the cost heads, the benefit heads, a worked three-year ROI with payback and net present value at 12 percent, and the one assumption that decides the answer.`,
              explain:
                `**What is being asked.** A financial case, not a technology description: costs, benefits, the arithmetic, and the sensitivity.\n\n**Costs.** Platform and licences, integration and build, people, training, change management, run cost.\n\n**Benefits.** Time saved in reporting, decisions improved (pricing, stock), compliance and audit savings, one-off inventory release.\n\n**The arithmetic.** Net cash flow per year, cumulative for payback, discounted for NPV.\n\n**The sensitivity.** A case that only works at 100 percent benefit realisation is not a case.\n\n**How to score the 6 marks.** Cost and benefit heads (2) · the worked cash-flow table with payback and NPV (2.5) · the sensitivity and recommendation (1.5).`,
              answer:
                `A BI business case is a cash-flow argument: the platform is cheap compared with the analyst hours it replaces and the decisions it changes, but those benefits arrive only after adoption.\n\n**Cost heads**\n\n| Head | Typical content | Example, year 0 |\n|---|---|---|\n| **Platform and licences** | warehouse compute, storage, BI licences | 20 lakh |\n| **Integration and build** | ETL or ELT, modelling, dashboards | 25 lakh |\n| **People** | internal analyst and engineer time | 10 lakh |\n| **Training and change** | user training, champions, documentation | 5 lakh |\n| **Run cost, yearly** | licences, support, one engineer | 18 lakh per year |\n\n**Benefit heads**\n\n| Head | Basis | Example, yearly |\n|---|---|---|\n| **Reporting effort released** | 3 analyst posts freed from manual packs | 24 lakh |\n| **Better pricing and mix** | margin points won on two categories | 15 lakh |\n| **Report automation** | spreadsheets and reconciliation retired | 6 lakh |\n| **Inventory release** | one-off working-capital reduction | 40 lakh, once |\n\n**The worked case** (₹ lakh, benefits of 24 + 15 + 6 = 45 per year)\n\n| Year | Cost | Benefit | Net cash flow | Cumulative |\n|---|---|---|---|---|\n| 0 | 60 | 0 | −60 | −60 |\n| 1 | 18 | 45 | +27 | −33 |\n| 2 | 18 | 45 | +27 | −6 |\n| 3 | 18 | 45 | +27 | +21 |\n\n- **Payback** = 2 years + 6 / 27 of the third year ≈ **2.2 years**.\n- **NPV at 12 percent** = −60 + 27/1.12 + 27/1.2544 + 27/1.4049 = −60 + 24.11 + 21.53 + 19.22 ≈ **+4.9 lakh**.\n\n**The assumption that decides the answer.** A positive NPV of 4.9 lakh on a 60 lakh investment is thin — about 8 percent of the outlay. Re-run the case at 80 percent benefit realisation (36 lakh per year): annual net becomes 18, and NPV falls to −60 + 16.07 + 14.35 + 12.81 ≈ **−16.8 lakh**, a loss. So the case does not rest on the software price; it rests on **adoption** — the fraction of the promised 45 lakh that actually materialises.\n\n**What to write as the recommendation**\n1. Fund **phase one only** — one subject area, ten certified KPIs, two dashboards — with a decision gate at month four, tied to measured usage rather than to delivery.\n2. Track the benefit heads quarterly against a baseline captured before launch; a benefit nobody measures becomes a claim.\n3. Keep the one-off inventory release out of the payback argument, since it flatters a case that must stand on recurring benefit.\n\n**Exam line:** cost the build, the run and the people; credit only benefits you can measure; compute payback and NPV — and show that the case survives a 20 percent shortfall in adoption.`,
              diagram: `vz-decision`,
              diagramCaption:
                `A three-year BI business case — cost heads, benefit heads, net cash flow, cumulative payback and the discounted net present value.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain the types of Decision Support System — model-driven, data-driven, group and knowledge-driven — and state where BI fits among them.`,
              explain:
                `**What is being asked.** A taxonomy with one example each, and the placement of BI.\n\n**Model-driven.** Simulation and optimisation over a formal model.\n\n**Data-driven.** Query and mine a large store of data — where BI and the warehouse sit.\n\n**Group.** Support a meeting or a committee decision.\n\n**Knowledge-driven.** Rules and expertise, expert systems.\n\n**How to score the 4 marks.** Four types with examples (2.5) · BI's placement with the reason (1) · one sentence on overlap (0.5).`,
              answer:
                `A **DSS** helps a person decide; the four types differ in what the help is built on.\n\n| Type | Built on | Example | Strength |\n|---|---|---|---|\n| **Model-driven** | a formal model with parameters | cash-flow simulation, linear programme for route planning | answers "what if we change this input?" |\n| **Data-driven** | a large store of historical data | sales dashboard, OLAP cube, churn model | answers "what happened, and what is likely?" |\n| **Group** | several participants and their inputs | budget meeting support, Delphi rounds, voting and ranking tools | aggregates judgement and records the decision |\n| **Knowledge-driven** | rules and captured expertise | credit-scoring rule engine, insurance underwriting rules | applies expert policy consistently |\n\n**Where BI fits.** BI is the **data-driven** member of the family: it takes what is recorded and turns it into information for a decision, without requiring a model of the business. The boundary is not strict — a BI dashboard with a what-if parameter borrows from the model-driven type, and a group decision tool fed by a warehouse borrows from BI.\n\n**The historical note worth one line.** BI grew out of DSS: the 1970s DSS added interactivity to reporting, the 1990s warehouse added the integrated data that data-driven DSS needed, and modern BI inherited both.\n\n**Exam line:** model, data, group and knowledge are the four DSS bases — BI is the data-driven one, and most real systems mix two of them.`,
              diagram: `biflow`,
              diagramCaption:
                `The four types of Decision Support System — model-driven, data-driven, group and knowledge-driven — with BI placed in the data-driven branch.`,
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
                `Design a Business Intelligence solution for a retail bank — name the four subject areas, and for each give the grain, two metrics and the decision it supports, with the refresh frequency justified.`,
              explain:
                `**What is being asked.** A domain design: subject areas, grain, metrics, decisions, refresh.\n\n**Subject areas.** Customer 360, credit and risk, transactions and fraud, collections and NPA, channels and digital.\n\n**The structure for each.** Grain of the fact, two metrics, the decision, the refresh.\n\n**The banking specifics.** Regulatory reporting, data sensitivity, near-real-time for fraud, monthly for provisioning.\n\n**How to score the 6 marks.** Four subject areas with grain, metrics and decision (3.5) · refresh justification (1.5) · two governance or regulatory constraints (1).`,
              answer:
                `A bank runs BI at several speeds at once: fraud in seconds, collections daily, capital and provisioning monthly. The design follows the decision cycle.\n\n| Subject area | Grain of the fact | Two metrics | Decision supported | Refresh |\n|---|---|---|---|---|\n| **Customer 360** | one row per customer per month | product holding count, lifetime value, dormancy flag | which segment to target with which product | monthly (daily for campaign lists) |\n| **Credit and risk** | one row per facility per month | probability of default band, exposure at default, limit utilisation | sanction, limit revision, risk appetite | monthly, aligned to the provisioning cycle; daily for early-warning |\n| **Transactions and fraud** | one row per transaction or per card per hour | authorisation decline rate, fraud score, average ticket | block or allow a transaction; tune rules | near-real-time for authorisation; hourly aggregates for review |\n| **Collections and NPA** | one row per loan account per day | days past due, overdue amount, slippage rate | which account to call, which to restructure, which to write off | daily |\n| **Channels and digital** | one row per session or per day per channel | digital adoption rate, drop-off rate, cost per transaction | where to invest in the app, branch staffing | daily |\n\n**Why the refresh differs — the argument worth marks**\n1. **Fraud needs seconds**, because the loss occurs inside the authorisation window; a nightly batch can only report the damage.\n2. **Collections needs a day**, because the call list is worked during the day and accounts change slowly.\n3. **Provisioning needs a month**, because regulatory capital and expected credit loss are computed at period end on approved rules; a fresher number would be *wrong*, not better.\n4. **Customer 360 needs a month for planning and a day for campaigns** — the same model serves two cadences, which is why the semantic layer must expose the same certified metric at both.\n\n**Two constraints to state**\n1. **Data sensitivity.** Card numbers, account numbers and personal identifiers must be masked or tokenised in the warehouse; access is row-level, so a branch manager sees only their own customers, and the fraud model reads tokens, not names.\n2. **Regulatory traceability.** A regulatory return must be reproducible exactly as filed months later, which requires bitemporal or snapshot storage and lineage down to the source file — a warehouse that only keeps the current value cannot do this.\n\n**A defect to avoid.** One monolithic nightly load that feeds every subject area ties fraud detection to a 4 a.m. batch. Streaming the authorisation events into a separate fast path, while sharing the same customer and card dimensions, gives speed without a second definition.\n\n**Exam line:** customer, risk, transactions and collections at four cadences — second for fraud, day for collections, month for capital — on one set of dimensions, with masking and bitemporal history because a bank must be able to reproduce what it reported.`,
              diagram: `analytics`,
              diagramCaption:
                `A retail bank BI solution — customer 360, credit risk, transactions and fraud, collections and NPA, channels — with grain, metrics, decisions and refresh per subject area.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Explain the data–information–knowledge–wisdom hierarchy and place Business Intelligence within it, using one retail example at each level.`,
              explain:
                `**What is being asked.** The DIKW ladder, defined, plus BI's exact position.\n\n**Data.** Recorded facts with no meaning — 120 units, ₹4,800.\n\n**Information.** Data in context — store 12 sold 120 units on Saturday.\n\n**Knowledge.** A pattern with a rule — Saturdays run 40 percent above weekdays.\n\n**Wisdom.** Judgement about what should be done — staff two extra people on Saturday and reorder on Thursday.\n\n**BI's place.** BI automates data to information reliably and knowledge partly; wisdom stays with the manager.\n\n**How to score the 4 marks.** Four levels with the retail example (2.5) · BI's placement and what it automates (1) · the limit (0.5).`,
              answer:
                `The hierarchy describes how raw records become a decision. Each step adds interpretation, and each is a smaller, more expensive quantity than the one below.\n\n| Level | Definition | Retail example | Who produces it |\n|---|---|---|---|\n| **Data** | recorded facts, no context | \`POS-118\\|SKU-4471\\|2025-11-01\\|120\\|4800\` | the till |\n| **Information** | data with context and meaning | store 118 sold 120 units of SKU-4471 on Saturday for ₹4,800 | the warehouse and BI report |\n| **Knowledge** | a pattern or rule learned from repeated information | Saturday sales run about 40 percent above weekdays; SKU-4471 sells out by 3 p.m. | trend analysis, a forecast model |\n| **Wisdom** | judgement about what should be done | staff two extra people on Saturday, reorder on Thursday, and hold price | the manager |\n\n**Where BI sits.** BI is the machinery that reliably climbs from **data** to **information**, and increasingly to **knowledge** — a trend line, a forecast, an alert on an unusual pattern are all knowledge-level outputs. It does not produce wisdom, because wisdom depends on context the warehouse does not hold: a competitor opening next door, a lease expiring in March, a new tax rule.\n\n**The practical consequence.** Because BI stops at knowledge, every dashboard needs a decision owner. A chart that shows the Saturday pattern and does not reach someone who can change the staffing roster has produced knowledge and no action — which is precisely the failure the business case in part (a) must guard against.\n\n**Exam line:** data records, information contextualises, knowledge finds the pattern, wisdom decides — BI automates the first three and hands the fourth to the manager.`,
              diagram: `analytics`,
              diagramCaption:
                `The data, information, knowledge and wisdom hierarchy with a retail example at each level, showing BI covering the first three and the manager owning wisdom.`,
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
                `Design the staging and operational data store layers of a data warehouse — the layers, their jobs, the load technique for each, and the failure-recovery rules that keep a batch re-runnable.`,
              explain:
                `**What is being asked.** The layer between source and warehouse, designed properly.\n\n**Layers.** Landing (raw extract, unmodified), staging (typed, cleaned, deduplicated, one source at a time), ODS or integration (conformed, current-valued), then core warehouse and marts.\n\n**Techniques.** Landing is append-only with a file or batch id; staging is truncate-and-load per batch; the ODS is MERGE on the business key.\n\n**Recovery.** Idempotency — re-running the same batch produces the same state; batch control table; no partial commits.\n\n**How to score the 6 marks.** Layers with jobs (2.5) · technique per layer (1.5) · idempotency and recovery rules (2).`,
              answer:
                `Between the source system and the modelled warehouse sit two layers whose only purpose is to make loading **safe, testable and repeatable**. Skipping them is the most common cause of a warehouse nobody trusts.\n\n**The layers and what each is for**\n\n| Layer | Contents | Job | Load technique |\n|---|---|---|---|\n| **Landing (raw)** | the extract exactly as received — text files, CSV, JSON, unmodified | prove what arrived; replay without asking the source again | append-only, file name or batch id recorded, never edited |\n| **Staging** | typed, trimmed, deduplicated, validated one source at a time | isolate source quirks; run quality rules before anything is joined | truncate-and-load per batch (a full replace is cheap and repeatable) |\n| **ODS / integration** | conformed entities at current values — customer, product, store | give other systems and near-real-time checks one current view | MERGE on the business key |\n| **Core warehouse** | star schemas with full history | serve analytics and marts | insert-only for facts, SCD merge for dimensions |\n| **Marts** | subject-specific views or tables | serve one dashboard set | views, or materialised aggregates |\n\n**The batch sequence**\n1. **Extract** to landing with a \`batch_id\` and a control count; the job fails loudly if the file is empty or the count is zero.\n2. **Validate and stage** — types, nulls, domain values, duplicates; rejected rows go to a reject table with the reason, not silently away.\n3. **Reconcile** — source count and amount against staged count and amount; a mismatch stops the batch before it reaches the warehouse.\n4. **Integrate** into the ODS with MERGE, applying deduplication and survivorship rules.\n5. **Load** the core star: facts appended by date partition, dimensions merged with effective dating.\n6. **Publish** to marts and refresh aggregates; only then write the watermark.\n\n**The four rules that make a batch re-runnable**\n1. **Idempotency** — running the same \`batch_id\` twice leaves the warehouse in one state, not two. A truncate-and-load stage, a MERGE on the business key, and a delete-then-insert per partition all give this; a plain \`INSERT\` does not.\n2. **Batch control table** — one row per batch per step: \`batch_id\`, step, status, rows read, rows written, start, end, error. Recovery starts from the failed step.\n3. **No partial commit** — a step commits only when its own reconciliation passes; a half-loaded fact table is worse than a late one.\n4. **Serial or properly scoped parallelism** — the same dimension loaded by two concurrent jobs produces duplicate keys; either serialise dimension loads or lock per key range.\n\n**Why the ODS earns its place.** It holds current values in a consistent form, so an operational check ("does this customer exist, and is the address current?") does not have to query the star schema with its historical rows, and so that three source systems can be conformed once rather than three times.\n\n**Exam line:** land raw and append-only, stage per batch and disposable, integrate with MERGE, load history into the star — and make every step idempotent with a batch control table, or the first failed night will cost a week.`,
              diagram: `bw-architecture`,
              diagramCaption:
                `Landing, staging, ODS, core warehouse and mart layers with the load technique and control record for each step of the batch.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain a data-quality scorecard — the dimensions scored, how the score is computed, and how a steward acts on a red score.`,
              explain:
                `**What is being asked.** Measurement, not anecdote: dimensions, an arithmetic score, and a workflow.\n\n**Dimensions.** Completeness, accuracy, timeliness, uniqueness, consistency, validity.\n\n**The score.** Each dimension as a percentage against a rule, weighted into one number per table or subject area.\n\n**The workflow.** Threshold, owner, root cause, fix, re-measure.\n\n**How to score the 4 marks.** Dimensions with a sample rule (2) · the weighted score (1) · the steward workflow (1).`,
              answer:
                `A **data-quality scorecard** turns "the data feels unreliable" into a measured number with an owner.\n\n**Dimensions, with the rule that measures each**\n\n| Dimension | Question | Sample rule |\n|---|---|---|\n| **Completeness** | are required values present? | \`customer_id\` and \`amount\` not null in 99.5 percent of rows |\n| **Accuracy** | does the value match reality? | sampled reconciliation against the source or an external reference |\n| **Timeliness** | did it arrive when promised? | load finished before 06:00 on 98 percent of days |\n| **Uniqueness** | is each entity once? | no duplicate \`sale_id\` in the fact |\n| **Consistency** | do related values agree? | \`net = gross − discount\` on every row |\n| **Validity** | is the value in the allowed domain? | \`status\` in the approved list; dates not in the future |\n\n**Computing one score** — measure each dimension as a percentage, then weight them:\n\n\`overall = 0.30 × completeness + 0.30 × accuracy + 0.15 × timeliness + 0.10 × uniqueness + 0.15 × consistency\`\n\nWith 99.2, 98.5, 96.0, 99.9 and 97.4 the overall is **98.3 percent** against a 99 percent target, so the subject area is **amber**, and the gap is visibly in timeliness, not accuracy.\n\n**How a steward acts on a red score**\n1. **Threshold** — below 95 percent is red and raises a ticket within a day; 95–99 is amber and reviewed weekly.\n2. **Root cause** — the check names the rule that failed and the batch that failed it, so the cause is a step, not a mystery.\n3. **Fix and re-measure** — the rule is re-run on the corrected batch; the scorecard records the closure, which is what makes the trend line meaningful.\n\n**Exam line:** score completeness, accuracy, timeliness, uniqueness, consistency and validity against explicit rules, weight them into one number, and route every red score to a named steward with a re-measurement.`,
              diagram: `bw-dq`,
              diagramCaption:
                `A data-quality scorecard — six dimensions scored against rules, weighted into one figure per subject area, with thresholds and a steward workflow.`,
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
                `Explain the data catalogue and data lineage in a BI environment — what the catalogue records, the three kinds of lineage, and how lineage answers an impact question and a root-cause question with an example of each.`,
              explain:
                `**What is being asked.** The catalogue as an asset inventory, and lineage as the map of movement.\n\n**Catalogue.** Tables, columns, owners, descriptions, sensitivity class, quality score, certification status, usage.\n\n**Lineage kinds.** Table-level, column-level, and business or report-level (which dashboard uses which metric).\n\n**Two uses.** Impact analysis before a change; root cause after a wrong number.\n\n**The example.** Renaming a source column, and a dashboard number that moved.\n\n**How to score the 6 marks.** Catalogue contents (2) · three lineage kinds (1.5) · impact and root-cause examples (2) · one implementation note (0.5).`,
              answer:
                `A warehouse without a catalogue is a set of tables whose meaning lives in one engineer's memory; a warehouse without lineage cannot answer "what breaks if I change this?"\n\n**What the catalogue records, per table and per column**\n\n| Field | Example | Why it matters |\n|---|---|---|\n| **Business name and description** | \`fact_sales.net_amount\` — "sales after discount and returns, excluding tax" | the definition lives with the data |\n| **Owner and steward** | Finance Data Steward, R. Kulkarni | someone answers for it |\n| **Sensitivity class** | public, internal, confidential, personal | drives masking and access |\n| **Certification status** | certified, deprecated, experimental | users know what to trust |\n| **Quality score and last check** | 98.3 percent, today 05:40 | trust is measured, not assumed |\n| **Usage** | 14 reports, 220 users, 9,000 views last month | shows what may be safely retired |\n| **Refresh and grain** | daily 05:00, one row per sale line | prevents double counting |\n\n**Three kinds of lineage**\n1. **Table lineage** — \`stg_sales → ods_sales → fact_sales → vw_monthly_sales\`. Coarse, cheap to capture from the ETL logs.\n2. **Column lineage** — \`stg_sales.disc_amt → fact_sales.discount_amount → metric net_margin\`. Fine, and the one that actually prevents errors.\n3. **Business or report lineage** — \`net_margin → Dashboard "Category P&L" → Report "Board pack page 6"\`. This is what a business user needs when they ask where a number came from.\n\n**Impact analysis — an example**\nThe source team plans to rename \`disc_amt\` to \`discount_amount\` and change its sign convention. Table lineage shows the fact table is affected; column lineage shows it feeds \`discount_amount\`, which feeds the certified metric \`net_margin\`, which is used by two dashboards and the board pack. The change is therefore scheduled with the metric owner, tested against a known month, and announced — instead of a number silently flipping sign on a Monday.\n\n**Root-cause analysis — an example**\nThe category dashboard shows margin down four points. Working backwards along column lineage: the metric is \`(net_sales − cogs) / net_sales\`; \`cogs\` comes from \`fact_sales.cost_amount\`; that is loaded from \`stg_cogs\`; the last batch of \`stg_cogs\` shows a 30 percent jump in row count, because a supplier feed was loaded twice. The cause is found in minutes by walking the graph, and the fix — deduplicate and reload the affected partition — is targeted.\n\n**The implementation note.** Lineage is best captured **automatically** by parsing the transformation code (dbt manifests, SQL parsers, ETL metadata) rather than documented by hand, because hand-written lineage is correct on the day it is written and stale a month later.\n\n**Exam line:** catalogue the meaning, owner, sensitivity and trust of every column and map how it moves — table level for impact, column level for correctness, report level for the business — and let the tool generate the map from the code.`,
              diagram: `bw-metadata`,
              diagramCaption:
                `A data catalogue and lineage graph — source columns to staging, fact table, certified metric and dashboard — used for impact analysis and root-cause tracing.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Explain how an imputation strategy is chosen for missing values — the three missingness mechanisms — with a worked example and the rule for when a row should be dropped instead.`,
              explain:
                `**What is being asked.** A decision procedure, with the statistics that justify it.\n\n**Mechanisms.** MCAR (missing completely at random), MAR (missing depends on observed values), MNAR (missing depends on the missing value itself).\n\n**Methods.** Drop, constant, mean or median, group mean, model-based, flag-and-impute.\n\n**The worked case.** 4 percent missing discount values, and how to tell which mechanism applies.\n\n**How to score the 4 marks.** Three mechanisms (1.5) · methods matched to mechanisms (1.5) · worked example and the drop rule (1).`,
              answer:
                `Missing values are not one problem — the **reason** for the gap decides the method, and a wrong method invents data that looks real.\n\n| Mechanism | Meaning | Diagnose by | Suitable method |\n|---|---|---|---|\n| **MCAR** — missing completely at random | the gap is unrelated to anything | missingness shows no pattern against other columns | drop the rows, or mean or median impute |\n| **MAR** — missing at random | the gap depends on **observed** values | missing rate varies by store, channel or product class | group mean (store or class), or a regression model on the observed columns |\n| **MNAR** — missing not at random | the gap depends on the **missing value itself** | high spenders never disclose income; failed orders have no delivery date | impute plus a missing flag, or model the mechanism explicitly; never silently average |\n\n**Worked example.** A retail feed has 4 percent of \`discount_amount\` missing. Splitting by channel shows online orders missing at 0.5 percent and in-store at 6.5 percent — so the gap is **MAR**, tied to the observed channel. Imputing the overall mean (₹120) understates in-store discounts; imputing the **channel-specific median** (₹180 in-store, ₹40 online) is defensible, and adding \`discount_imputed = true\` lets any analysis exclude imputed rows.\n\n**When to drop instead**\n1. The share missing is small — under about 5 percent — **and** MCAR, so dropping loses little bias.\n2. The missing column is essential to the metric: a sales fact with no amount cannot be imputed, only rejected to a suspense table.\n3. Imputation would create a number that a decision would act on — a critical KPI should carry a completeness warning, not a fabricated value.\n\n**The rule to state in the exam.** Impute in **staging**, never in the certified fact without a flag; store the method and the imputed percentage in metadata; and re-measure the metric with and without imputation once, because a KPI that moves when imputation changes was never measuring the business.\n\n**Exam line:** diagnose the mechanism first — MCAR, MAR or MNAR — impute at the group level where the gap is explained by observed columns, always flag the imputed rows, and drop only when the loss is small and the column is not decisive.`,
              diagram: `bw-cleaning`,
              diagramCaption:
                `Choosing an imputation strategy — MCAR, MAR and MNAR missingness, the method each allows, and the flag that marks imputed rows.`,
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
                `Explain drill-down, roll-up, drill-through and drill-across — what each answers, how each is implemented, and which of the four breaks when the dimensions are not conformed.`,
              explain:
                `**What is being asked.** Four navigation operations, separated cleanly, with implementation and one structural dependency.\n\n**Drill-down / roll-up.** Move along a hierarchy, from month to day or region to store.\n\n**Drill-through.** Leave the aggregate for the detail rows behind it.\n\n**Drill-across.** Move to another measure or cube that shares conformed dimensions.\n\n**The dependency.** Drill-across requires conformed dimensions and matching grain; without them it silently produces a wrong join or nothing at all.\n\n**How to score the 6 marks.** Four operations with the question each answers (3) · implementation per operation (1.5) · the conformed-dimension dependency with an example (1.5).`,
              answer:
                `Four navigation moves look similar on a screen and are completely different underneath.\n\n| Operation | Question answered | Movement | Implementation |\n|---|---|---|---|\n| **Roll-up** | how does the total look at a higher level? | up a hierarchy: day → month → quarter | group by a coarser level, or read a coarser aggregate |\n| **Drill-down** | what is inside this total? | down a hierarchy: quarter → month → day | group by a finer level; needs the hierarchy defined in the model |\n| **Drill-through** | which rows make up this cell? | out of the cube into detail records | a parameterised query returning fact rows and their keys, often in a separate pane or export |\n| **Drill-across** | how does this compare with a different measure, same slice? | sideways to another fact or cube | join two facts on the **same conformed dimensions** at a compatible grain |\n\n**How each is implemented**\n1. **Roll-up / drill-down** need a **level hierarchy** in the dimension: \`dim_date\` with day → month → quarter → year, \`dim_product\` with product → category → department. Without the hierarchy in metadata, the tool cannot offer the move.\n2. **Drill-through** needs the **detail rows retained** and the aggregate line stored with the filter that produced it, so the detail query reproduces exactly the cell's population — otherwise the drill-through shows rows that do not add to the number clicked.\n3. **Drill-across** needs **conformed dimensions**: the same \`product_key\`, \`date_key\` and \`store_key\` columns with the same meaning in both facts, and a stated grain for each.\n\n**The operation that breaks without conformed dimensions**\n**Drill-across** fails first. Sales and inventory both exist, and a manager wants "sales and stock cover by product by week" on one screen. If the sales fact uses a \`product_key\` from a merchandising hierarchy and the inventory fact uses a warehouse SKU key, joining on the keys either matches nothing or, worse, matches on a coincidental integer and produces plausible nonsense. The warehouse fix is a **conformed product dimension and a shared date dimension**, plus a documented common grain (product × week); then drill-across is a cheap query on two facts sharing keys.\n\n**The trap with unequal grain.** Sales are at line level, stock is a weekly snapshot. Adding the two together is meaningless — the correct drill-across shows them side by side and never sums a flow with a stock, which is the semi-additive lesson applied to navigation.\n\n**Exam line:** roll-up and drill-down move along a hierarchy, drill-through leaves the cube for the rows behind a cell, drill-across joins two facts — and only conformed dimensions at a compatible grain make that last move trustworthy.`,
              diagram: `ol-operations`,
              diagramCaption:
                `Roll-up, drill-down, drill-through and drill-across shown against a sales cube, with the hierarchy and conformed dimensions each operation needs.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `A retail chain with 900 stores and 12 years of history must choose between a star and a snowflake schema. Recommend one, with a decision matrix and three reasons.`,
              explain:
                `**What is being asked.** A recommendation for a stated case, with the reasoning that decides it.\n\n**The case factors.** Scale, query pattern, hierarchy churn, team skill, tool behaviour.\n\n**The matrix.** Star versus snowflake on joins, storage, hierarchy maintenance, user comprehension, query speed, ETL complexity.\n\n**The recommendation.** A star core with snowflaked hierarchies only where a source system maintains them, exposed as flat dimensions in the semantic layer.\n\n**How to score the 4 marks.** The matrix applied to the case (2) · the recommendation with three reasons (1.5) · one caveat (0.5).`,
              answer:
                `**The case:** 900 stores, 12 years, reporting-heavy, hierarchies that change a few times a year, a small team, and a BI tool that generates SQL.\n\n| Criterion | Star | Snowflake | Applies here as |\n|---|---|---|---|\n| Joins per query | 1 per dimension | 1 plus hierarchy tables | star wins at 900 stores × 12 years |\n| Storage | repeats category text | stores it once | irrelevant — dimension text is tiny beside a decade of facts |\n| Hierarchy maintenance | mass update of the dimension | one row in the category table | snowflake wins slightly |\n| User comprehension | one wide table per dimension | path must be learned | star wins for self-service |\n| Query speed without aggregates | fewer joins, faster | more joins, slower | star wins |\n| ETL complexity | simpler load | more tables to sequence | star wins |\n\n**Recommendation: a star schema, with two exceptions.**\n1. **Scale and query speed** — with twelve years of sales at line level, the fact table dominates every cost, and the fewer joins per query the better; snowflaking adds latency where the volume already is.\n2. **Self-service comprehension** — a store manager chooses "product, category, department" from one dimension list, not by remembering a three-table path; fewer support tickets.\n3. **Team size** — a small team maintains one load per dimension rather than a chain, and fewer moving parts means fewer broken nights.\n\n**The exceptions and the caveat.** Where a hierarchy is owned and changed by another system — a merchandising or store-master feed — model that single hierarchy as a snowflaked series and **expose it flat through the semantic layer or a view**, so users see one dimension and the warehouse keeps normalisation where it actually saves work. Either way, document the grain, because a schema choice never fixes a wrong grain.\n\n**Exam line:** at this scale the star wins on joins, speed, comprehension and maintenance — snowflake only the hierarchy that another system owns, and flatten it for the user.`,
              diagram: `ol-star-vs-snow`,
              diagramCaption:
                `A decision matrix comparing star and snowflake schemas for a 900-store retail warehouse across joins, storage, hierarchy churn, comprehension and load complexity.`,
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
                `Explain cube sparsity — compute the density of a sales cube with 12 months, 500 products and 40 stores where only 38,000 combinations occur — and state four techniques for handling a sparse cube.`,
              explain:
                `**What is being asked.** A calculation, an interpretation, and the handling options.\n\n**The calculation.** 12 × 500 × 40 = 240,000 potential cells; 38,000 populated; density 15.8 percent; sparsity 84.2 percent.\n\n**Why it matters.** Storage, load time, and the number of aggregates is driven by potential, not actual, cells.\n\n**Techniques.** Sparse storage and compression, avoid building aggregates on the sparse dimensions, partition and aggregate selectively, HOLAP or query the detail on demand.\n\n**How to score the 6 marks.** The calculation with interpretation (2) · why sparsity hurts (1.5) · four techniques (2) · one caution (0.5).`,
              answer:
                `A cube is a grid of all possible dimension combinations; real data fills only a fraction of it, and the empty fraction drives cost.\n\n**The computation**\n\`\`\`\npotential cells = 12 months × 500 products × 40 stores = 240,000\npopulated cells =  38,000\ndensity  = 38,000 / 240,000 = 15.8 %\nsparsity = 100 − 15.8 = 84.2 %\n\`\`\`\nA density of 15.8 percent means **four out of five cells are empty** — most products are not sold in most stores in most months, which is exactly what a large retail assortment looks like.\n\n**Why sparsity costs money**\n1. **Storage** — navigable structures and indexes must be addressable for the potential grid, even where nothing is stored.\n2. **Build time** — the aggregation job still walks 240,000 positions to discover the 38,000 values, so refresh time grows with the product of dimension sizes.\n3. **Aggregate explosion** — add a fourth dimension of 30 values and the potential becomes 7.2 million cells for perhaps 90,000 facts; the same 84 percent emptiness at eight times the size.\n\n**Four techniques**\n1. **Sparse storage and compression** — store only populated cells (MOLAP sparse blocks, columnar compression), which is the default handling in modern engines and often removes the problem entirely.\n2. **Do not pre-aggregate on high-cardinality sparse dimensions** — build aggregates on time × category × region (a few thousand cells, dense) and leave product × store to the query engine.\n3. **Partition the cube by time and by size of data** — monthly partitions for history, a small recent partition that can be rebuilt hourly; queries touch one partition.\n4. **HOLAP or ROLAP for the sparse part of the space** — hold the dense summary in a cube and resolve detail queries from the relational star, so the shop does not pay for empty cells.\n\n**The caution.** Sparsity is not a defect to eliminate — 84 percent empty is normal and expected. It is only a defect when the design builds the aggregate structures as if the cube were dense; measure density before tuning, and never conclude that a low number means bad data.\n\n**Exam line:** density = populated ÷ potential = 38,000 ÷ 240,000 = 15.8 percent; store sparsely, aggregate only the dense slices, partition time, and let the engine resolve the rest from the relational star.`,
              diagram: `ol-cube`,
              diagramCaption:
                `A sparse sales cube — 240,000 potential cells against 38,000 populated, with sparse storage, selective aggregation and partitioning as the handling techniques.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Explain how OLAP is used in financial analysis — the variance cube, the scenario dimension and top-down budget spreading — with one worked slice.`,
              explain:
                `**What is being asked.** Finance's classic OLAP workload, with a scenario dimension and a worked number.\n\n**The cube.** Dimensions: time, account, cost centre, scenario (actual, budget, forecast).\n\n**The variance.** Actual minus budget, with the sign convention stated.\n\n**Spreading.** Distributing an annual budget down to months and cost centres, proportionally or by driver.\n\n**The slice.** A worked example with two cost centres and a percentage variance.\n\n**How to score the 4 marks.** Cube structure with the scenario dimension (1.5) · variance computation with sign convention (1.5) · top-down spreading with a worked slice (1).`,
              answer:
                `Finance reports on **comparison**, so a scenario dimension is what makes OLAP its natural tool.\n\n**The cube**\n- **Dimensions:** time (month, quarter, year), account (with hierarchy to group and to the P&L line), cost centre (with hierarchy to division), scenario (actual, budget, forecast, last forecast), currency.\n- **Measures:** amount (semi-additive across time only at period end), variance amount, variance percent.\n\n**The variance, with the sign convention stated**\n\`\`\`\nvariance = actual − budget\nfavourable if positive for revenue, favourable if negative for expense\nvariance % = variance / budget × 100\n\`\`\`\nA travel expense budget of 100 and actual of 118 gives a variance of **+18**, which for an expense line is **unfavourable** — the direction depends on the account type, which is why the model, not the reader, must carry the rule.\n\n**Top-down budget spreading**\nAn annual travel budget of 1,200 is spread to twelve months. Flat spreading gives 100 per month; driver-based spreading weights by headcount or by the prior year's monthly pattern, say 8 percent in April and 12 percent in December, so the monthly target matches the business's actual rhythm — and the year still totals 1,200. Spreading is done in a write-back cube or a planning model, and the approved version is promoted to become the budget scenario.\n\n**The worked slice**\nSlice to FY2025, expense accounts, Asia division, scenarios actual and budget, and roll up to cost centre:\n\n| Cost centre | Budget | Actual | Variance | Variance % |\n|---|---|---|---|---|\n| Pune — sales | 400 | 436 | +36 | +9.0 % unfavourable |\n| Pune — support | 250 | 238 | −12 | −4.8 % favourable |\n| Nashik — sales | 300 | 288 | −12 | −4.0 % favourable |\n\nDrill-through on the Pune sales cell returns the 22 travel claims that make the 436, which is the decision-ready evidence a finance business partner needs.\n\n**Exam line:** time × account × cost centre × scenario, variance with the sign rule held by the model, and driver-based spreading for the budget — with drill-through to the documents behind the cell.`,
              diagram: `ol-multidim`,
              diagramCaption:
                `A financial variance cube with a scenario dimension, variance and variance percentage measures, and top-down spreading from annual budget to month and cost centre.`,
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
                `Prepare a monthly sales trend report — compute month-over-month growth, year-over-year growth, a three-month moving average and an index to 100 for the six months given below, then state the rules that keep a trend chart honest.`,
              explain:
                `**What is being asked.** Arithmetic on a table, then the presentation rules.\n\n**The table.** 2025 and 2024 monthly sales: 420/380, 400/372, 455/410, 380/350, 395/360, 470/420 (₹ lakh).\n\n**The measures.** MoM, YoY, three-month moving average, index with January 2025 as 100.\n\n**The interpretation.** April falls but April last year also fell — seasonality, not decline.\n\n**The rules.** Start the axis at zero for bars, label units, annotate the cause, do not compare index and absolute on one axis.\n\n**How to score the 6 marks.** The computed table (3) · the interpretation (1.5) · the presentation rules (1.5).`,
              answer:
                `**Given:** monthly sales in ₹ lakh.\n\n2025: Jan 420, Feb 400, Mar 455, Apr 380, May 395, Jun 470.\n2024: Jan 380, Feb 372, Mar 410, Apr 350, May 360, Jun 420.\n\n| Month | 2025 | 2024 | MoM % | YoY % | 3-month MA | Index (Jan 2025 = 100) |\n|---|---|---|---|---|---|---|\n| Jan | 420 | 380 | — | +10.5 | 420.0 | 100.0 |\n| Feb | 400 | 372 | −4.8 | +7.5 | 410.0 | 95.2 |\n| Mar | 455 | 410 | +13.8 | +11.0 | 425.0 | 108.3 |\n| Apr | 380 | 350 | −16.5 | +8.6 | 411.7 | 90.5 |\n| May | 395 | 360 | +3.9 | +9.7 | 410.0 | 94.0 |\n| Jun | 470 | 420 | +19.0 | +11.9 | 415.0 | 111.9 |\n\n**The calculations, once each**\n- MoM for April: \`(380 − 455) / 455 × 100 = −16.5 %\`.\n- YoY for April: \`(380 − 350) / 350 × 100 = +8.6 %\`.\n- Three-month MA for April: \`(400 + 455 + 380) / 3 = 411.7\`.\n- Index for April: \`380 / 420 × 100 = 90.5\`.\n\n**The interpretation — where the marks are**\n1. **MoM is the noisiest measure**: April looks like a 16.5 percent collapse, but April last year was also the weakest month, so **YoY (+8.6 percent) is the honest reading**.\n2. **The moving average removes the noise**: it runs 420 → 410 → 425 → 411.7 → 410 → 415, essentially flat with a slight rise, which contradicts the drama of the MoM column.\n3. **The index makes months comparable** once January is fixed at 100; June at 111.9 means the half year is up 11.9 percent on its own start, consistent with the +11.9 percent YoY.\n4. **The conclusion to write**: the trend is a slow rise of about 9–12 percent year over year; the April dip is seasonal and would be a mistake to treat as a decline.\n\n**The rules that keep a trend chart honest**\n1. **Zero-based axis for bars, a labelled axis for lines** — truncating the axis to exaggerate a 2 percent change is the most common deception.\n2. **State the unit and the currency** in the title or subtitle, and the period covered.\n3. **Show the comparison series** — the same months last year — so seasonality is visible instead of inferred.\n4. **Annotate the known cause** (a promotion, a stock-out, a holiday shift) on the chart rather than in a footnote nobody reads.\n5. **Never put an index and an absolute value on one axis**; two aligned charts or a shared index only.\n\n**Exam line:** compute all four measures, trust the moving average and YoY over MoM — and present them on an honest axis with the comparison year and the cause of each spike annotated.`,
              diagram: `td-trend`,
              diagramCaption:
                `Monthly sales trend with month-over-month and year-over-year growth, a three-month moving average and an index to 100, showing the seasonal April dip.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain a certified metric layer — what a metric definition contains, the change process, and how the layer stops two teams reporting different margins.`,
              explain:
                `**What is being asked.** The specification of a metric, and the governance that keeps it single.\n\n**Contents.** Name, business definition, formula, grain, filters, unit, additivity, owner, thresholds, synonyms, version.\n\n**Change process.** Request, impact check against lineage, test against a known period, approve, publish, announce.\n\n**The mechanism.** Every tool reads the same definition from the layer, so a dashboard cannot recompute its own margin.\n\n**How to score the 4 marks.** The specification with at least six fields (2) · the change process (1) · the mechanism and one example of drift (1).`,
              answer:
                `A **certified metric layer** is the single place where a business measure is defined, once, for every tool and every team.\n\n**What one metric definition contains**\n\n| Field | Example — \`net_margin_pct\` |\n|---|---|\n| **Name and synonyms** | net margin percent; "margin", "profitability" |\n| **Business definition** | sales after discount and returns, less cost of goods, as a percentage of net sales, excluding tax |\n| **Formula** | \`(SUM(net_sales) − SUM(cogs)) / SUM(net_sales) × 100\` |\n| **Grain and filters** | computed at any grain; excludes cancelled orders and inter-company transfers |\n| **Additivity** | non-additive — never averaged across groups |\n| **Unit and precision** | percent, one decimal |\n| **Owner and approver** | Finance Controller, approved by the FP&A head |\n| **Thresholds** | green ≥ 22 percent, amber 18–22, red < 18 |\n| **Version and effective date** | v3, effective 1 April 2025 |\n\n**The change process**\n1. **Request** with a business reason (a new discount scheme, a change in cost allocation).\n2. **Impact check** through lineage: which dashboards, reports and extracts use the metric.\n3. **Test** against a closed period where the old and new definitions are both computable, and record the difference — a two-point change in margin must be explained before it is published.\n4. **Approve, version and announce**, with an effective date, so historical reports remain reproducible.\n\n**How it stops two margins**\nSales computes margin from gross sales; finance from net sales after returns, and the two differ by 2.4 points. Without a layer, both build their own report and the board sees whichever arrived last. With a layer, the dashboard, the board pack and the ad-hoc query all read \`net_margin_pct\` v3 from the same semantic model — and a team that genuinely needs a different measure must register a **new, named** metric, which makes the divergence visible instead of accidental.\n\n**Exam line:** name, definition, formula, grain, unit, additivity, owner, threshold and version — plus a change process with an impact check, so the margin on the board pack is the margin in the dashboard.`,
              diagram: `td-metrics`,
              diagramCaption:
                `A certified metric layer — one definition of net margin consumed by every dashboard, report and ad-hoc query, with version and owner recorded.`,
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
                `Explain how a report is reconstructed exactly as it was published on a past date — what must be stored, why valid time alone is not enough, a worked price-change example, and the as-of query.`,
              explain:
                `**What is being asked.** Reproducibility, which is a storage design question before it is a query question.\n\n**What must be stored.** Bitemporal dimension rows (valid time plus transaction time), immutable fact partitions, and the published report snapshot with its parameters.\n\n**Why valid time alone fails.** A correction recorded later changes what a valid-time query returns for a past date.\n\n**The example.** Price 100 → 120 effective 1 January but recorded on 5 January; a report published on 3 January showed 100.\n\n**The query.** Both timelines constrained, plus the snapshot alternative.\n\n**How to score the 6 marks.** What is stored (2) · why valid time fails, with the worked example (2) · the as-of query (1.5) · the snapshot alternative and its cost (0.5).`,
              answer:
                `A regulator, an auditor or a customer may ask: **"show me the figure you published on 3 January, and how you arrived at it."** A warehouse that only keeps current values cannot answer, and re-running the report today gives a different number — which looks like an error even when it is not.\n\n**What must be stored**\n1. **Bitemporal dimension rows** — for each version, the period it was *true* (valid time) and the period it was *known to the system* (transaction time).\n2. **Immutable fact partitions** — facts are appended, never updated in place; a correction is a new row with a reversal or a version, not an overwrite.\n3. **The published artefact** — the report output, its filter parameters, its metric versions and a hash or signature, retained for the statutory period.\n4. **Lineage and load logs** — which batch fed which report, so the source file can be produced.\n\n**Why valid time alone is not enough — the worked example**\nA product price rises from ₹100 to ₹120, effective **1 January**, but the source system records the change only on **5 January**. A report published on **3 January** used ₹100.\n\n| Version | Price | Valid from | Valid to | Recorded (transaction) from | Recorded to |\n|---|---|---|---|---|---|\n| v1 | 100 | 2024-01-01 | 2025-01-01 | 2024-01-01 | 2025-01-05 |\n| v2 | 120 | 2025-01-01 | 9999-12-31 | 2025-01-05 | 9999-12-31 |\n\nAsk *valid time only* for 3 January and the answer is **₹120**, because 3 January falls inside v2's validity — but that is wrong, since v2 was not known until 5 January. Add the transaction-time condition and the answer is **₹100**, which is what the report actually used. Valid time answers "what was true?"; transaction time answers "what did we know?". Reproducing a published report needs the second.\n\n**The as-of query**\n\`\`\`sql\nSELECT price\nFROM   dim_product\nWHERE  product_key = 'P1'\n  AND  valid_from <= DATE '2025-01-03' AND valid_to  > DATE '2025-01-03'\n  AND  txn_from  <= TIMESTAMP '2025-01-03 23:59:59'\n  AND  txn_to    >  TIMESTAMP '2025-01-03 23:59:59';\n-- returns 100 : correct as of what was known on 3 January\n\`\`\`\nThe same predicate joins to facts for the period, so the whole report is rebuilt from the state of knowledge at that instant.\n\n**The snapshot alternative.** Store the rendered report, or a monthly snapshot of the fact at publication, and reproduce by replaying the stored artefact. It is cheap, exact and simple — but it cannot answer a new question about a past state, only replay the old answer.\n\n**The cost to acknowledge.** Bitemporal history multiplies dimension rows (not facts) and every query must carry the transaction-time predicate, usually hidden in a view. That is a small price for an answer that survives an audit.\n\n**Exam line:** store valid time and transaction time together, keep facts immutable and the published artefact with its parameters — then constrain both timelines, because "what was true" and "what we knew" are different questions.`,
              diagram: `td-bitemporal`,
              diagramCaption:
                `Reconstructing a report as of 3 January — the price version valid from January but recorded only on 5 January, with the as-of query constraining valid time and transaction time.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Decompose a sales variance into volume, mix and price effects using the figures given — budget 600 units of A at ₹10 and 400 of B at ₹20; actual 500 of A at ₹9 and 700 of B at ₹19 — and state what each effect tells the manager.`,
              explain:
                `**What is being asked.** A three-way decomposition with numbers that reconcile exactly.\n\n**The totals.** Budget 1,000 units and 14,000; actual 1,200 units and 17,800; variance +3,800.\n\n**The effects.** Volume = 200 × 14 = +2,800; mix = the swing towards B at the budget prices = +2,200; price = 500 × (−1) + 700 × (−1) = −1,200.\n\n**The interpretation.** Growth came from selling more and from a richer mix, partly given back through discounting.\n\n**How to score the 4 marks.** The three effects with the arithmetic (2) · the reconciliation (1) · the interpretation (1).`,
              answer:
                `**Given**\n\n| Product | Budget units | Budget price | Actual units | Actual price |\n|---|---|---|---|---|\n| A | 600 | 10 | 500 | 9 |\n| B | 400 | 20 | 700 | 19 |\n| Total | 1,000 | avg 14 | 1,200 | avg 14.83 |\n\nBudget revenue = 6,000 + 8,000 = **14,000**. Actual revenue = 4,500 + 13,300 = **17,800**. Variance = **+3,800** (favourable).\n\n**The three effects**\n1. **Volume effect** = (actual units − budget units) × budget average price = \`200 × 14 = +2,800\`. Selling 200 more units at the planned price would have added 2,800.\n2. **Mix effect** = Σ (actual share − budget share) × budget price × actual total units\n = \`((0.4167 − 0.60) × 10 + (0.5833 − 0.40) × 20) × 1,200\`\n = \`(−1.833 + 3.667) × 1,200 = +2,200\`. The customer moved towards product B, the dearer item.\n3. **Price effect** = Σ actual units × (actual price − budget price) = \`500 × (−1) + 700 × (−1) = −1,200\`. Both products were discounted by ₹1.\n\n**Reconciliation:** \`2,800 + 2,200 − 1,200 = +3,800\` ✓ — the effects must always add to the total variance; if they do not, one convention is wrong.\n\n**What each effect tells the manager**\n- **Volume (+2,800)**: the market or the campaign worked — this is growth the manager wants to protect.\n- **Mix (+2,200)**: customers traded up, so the assortment and the shelf emphasis are right; it also means A's decline is partly substitution, not loss.\n- **Price (−1,200)**: discounting cost more than a third of the gain — the next decision is whether the discount was authorised and whether it earned the volume.\n\n**The caveat to state.** The decomposition depends on the order of the effects; this standard form values volume at the **budget** price, so the residual lands entirely in price. State the convention or the numbers will not reconcile for a reader using another order.\n\n**Exam line:** volume at budget average price, mix from the share change at budget prices, price from the actual-unit discount — they reconcile to +3,800 and tell you growth is real but being paid for with margin.`,
              diagram: `td-performance`,
              diagramCaption:
                `Price, volume and mix variance decomposition for two products, reconciling the +3,800 revenue variance to its three effects.`,
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
                `Explain how a dashboard is delivered on mobile and embedded inside another application — the layout rules, the performance techniques, the security model and one thing that only fails in the field.`,
              explain:
                `**What is being asked.** Delivery, not design in general: small screens, an application that is not a BI tool, and the constraints both impose.\n\n**Layout.** Single column, three KPIs above the fold, thumb reach, no hover interactions, one tap to detail.\n\n**Performance.** Pre-aggregated tables, extract or import mode, small payloads, deferred visuals, limited card count.\n\n**Security.** Row-level security in the dataset, short-lived embed tokens, no data cached on a lost device, audit of who saw what.\n\n**The field failure.** Offline use and flaky networks — the dashboard must show the data timestamp and never present stale data as live.\n\n**How to score the 6 marks.** Layout (1.5) · performance (1.5) · security (1.5) · the field failure and its handling (1.5).`,
              answer:
                `A dashboard on a phone, or inside a field-service app, is not a shrunk desktop dashboard — the small screen, the network and the security model each change the design.\n\n**Layout rules**\n1. **One column, vertical scroll** — the only layout a phone renders reliably; two-column layouts collapse into unreadable slivers.\n2. **Three KPIs above the fold** — value, change and status, so the answer arrives before any scrolling.\n3. **Thumb reach** — filters and the primary action in the lower half; navigation at the bottom.\n4. **No hover** — every tooltip must have a tap equivalent, and legends must be visible, not revealed.\n5. **One tap to detail** — the phone user is usually in front of the problem; tapping a store opens its exception list, not a filter panel.\n\n**Performance techniques**\n\n| Technique | What it buys |\n|---|---|\n| Pre-aggregate to the mobile grain (store × day) | 10–100× fewer rows to send |\n| Import or extract mode instead of live query | no round trip per visual, so first paint under two seconds |\n| Six to eight visuals per page, not twenty | less payload and less scrolling |\n| Defer below-the-fold visuals | what is seen first loads first |\n| Cache the last successful response with its timestamp | usable on a weak connection |\n\n**The security model**\n1. **Row-level security lives in the dataset**, so the phone inherits the same rule as the desktop — a manager sees their stores only.\n2. **Short-lived embed tokens** minted by the host application, scoped to one user and one report, with the identity passed in — never a shared service account.\n3. **No sensitive data written to device storage** beyond the session, and remote revocation so a lost handset stops reporting within minutes.\n4. **Audit every view** — for embedded dashboards the access log is the only record that a specific person saw a customer's data.\n\n**The thing that only fails in the field**\n**Stale data presented as live.** The warehouse updates at 06:00, the phone shows the cached copy at 14:00, and the technician quotes yesterday's stock as if it were current. The fix is not technical perfection but visible honesty: a **"as of 06:00 today" stamp on every card**, an amber banner when the refresh is stale beyond its promise, and no colour-coded status that implies real time. A second field failure is worth a line — an embedded report inside an iframe after a platform upgrade, blocked because the host's frame policy did not allow the BI domain; that is a release check, not a coding problem.\n\n**Exam line:** one column, three KPIs, no hover; pre-aggregate and cache with a visible timestamp; row-level security in the dataset and short-lived tokens — and never let a cached number look live.`,
              diagram: `vz-build`,
              diagramCaption:
                `Mobile and embedded dashboard delivery — single-column layout, pre-aggregated payload, token-based security and a visible data-timestamp on every card.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Draft the visual standard one organization should apply to all its dashboards — palette, chart templates, number formats, titles and annotation — and state how the standard is enforced.`,
              explain:
                `**What is being asked.** A style guide, concrete enough to check a report against.\n\n**Palette.** One status palette plus one categorical palette; contrast requirement.\n\n**Chart templates.** Which chart for which question, with a default per question type.\n\n**Number formats.** Currency and scale, decimals, the Indian lakh and crore convention, no false precision.\n\n**Titles and annotation.** A title that states the finding, units in the subtitle, cause annotated.\n\n**Enforcement.** Templates shipped in the tool, review at certification, style check in the release checklist.\n\n**How to score the 4 marks.** Four standard elements (2.5) · titles and formats with examples (1) · enforcement (0.5).`,
              answer:
                `A visual standard exists so that a reader needs to learn a dashboard **once** and can then read every other one in the organization.\n\n**1 · Palette**\n- **Status colours only for status**: red bad, amber watch, green good, grey no data — never used decoratively.\n- **One categorical palette** of six colours, colour-blind safe, ordered so adjacent categories stay distinguishable.\n- **One sequential palette** for magnitude and one **diverging** palette used only around a meaningful midpoint such as a target.\n- **Contrast** of at least 4.5:1 for text, and no meaning carried by colour alone — always paired with a label, arrow or pattern.\n\n**2 · Chart templates, one default per question**\n\n| Question | Default | Avoid |\n|---|---|---|\n| comparison across categories | sorted horizontal bar | pie with more than three slices |\n| trend over time | line, with last year as a grey second line | area charts for many series |\n| composition | stacked bar, or a treemap if parts are many | pie with ten slices |\n| distribution | histogram or box plot | average-only bars |\n| relationship | scatter with a fitted line | two axes implying causation |\n| exceptions | table with status column | a wall of red tiles |\n\n**3 · Number formats**\n- Currency with scale stated once in the title — **₹ lakh** or **₹ crore**, not repeated per figure.\n- One decimal for percentages, whole units for counts, no more precision than the decision needs.\n- Thousands separators in the Indian grouping (₹1,24,500), negative variance in brackets or in red **and** with a sign.\n- A dash for zero, "n/a" for missing, and never a fabricated zero to fill a gap.\n\n**4 · Titles and annotation**\n- **The title states the finding, not the field**: "Margin fell 2.1 points in the West, driven by apparel" rather than "Margin by region".\n- **Subtitle carries period, filter and refresh**: "Jun 2025 · all stores · data as of 06:00".\n- **Annotate the known cause** on the chart — a promotion, an outage, a price change — because the reader will otherwise invent one.\n\n**How the standard is enforced**\n1. **Templates shipped inside the tool** — a report theme, a KPI-card template and a chart gallery — because a standard that must be read is ignored, while a default theme is adopted.\n2. **Certification review** — a dashboard cannot be certified for enterprise use until it matches the standard, checked against a ten-item list.\n3. **A named owner and a version** — the standard is owned by the BI centre of excellence, versioned, and reviewed yearly with the users' feedback.\n\n**Exam line:** one status palette, one categorical palette, a default chart per question, one number convention and titles that assert the finding — enforced by shipped templates and a certification checklist, not by a document nobody opens.`,
              diagram: `vz-principles`,
              diagramCaption:
                `An organizational visual standard — status and categorical palettes, a default chart per question type, number formats and finding-based titles.`,
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
                `Explain how a dashboard is usability-tested before release — the five-second test, a task-based think-aloud session, the measures recorded, and how five users are enough.`,
              explain:
                `**What is being asked.** A method with a protocol and measures, not an opinion about beauty.\n\n**Five-second test.** Show the dashboard for five seconds, hide it, ask what the main message was and what the top number was.\n\n**Task-based test.** Give a decision task; observe with think-aloud; record success, time, errors.\n\n**Measures.** Task completion, time to first correct answer, error rate, confidence rating, and where the eye or pointer hesitated.\n\n**Five users.** Most usability problems are found in the first few users because the failures are systematic, not random.\n\n**How to score the 6 marks.** Both tests with a protocol (3) · the measures recorded (2) · the five-user justification and one fix (1).`,
              answer:
                `A dashboard is software for a person under time pressure, so it is tested the way software is tested — with users, tasks and recorded results.\n\n**Test 1 · the five-second test**\n1. Show the finished dashboard for **five seconds**, then hide it.\n2. Ask three questions: what is the main message? what is the headline number? what would you do?\n3. Score each answer as correct, partly correct or wrong against the intended message.\n\n*What it detects:* a title that does not assert, too many competing visuals, colour that draws the eye to the wrong thing. If four of five users cannot state the message in five seconds, the dashboard's problem is hierarchy, not data.\n\n**Test 2 · the task-based think-aloud session**\n1. Write **three real tasks**, taken from decisions the users actually take: "find the store whose margin fell most last month", "decide whether the West region hit target", "explain why June sales rose".\n2. Ask the user to perform each task while **thinking aloud**, with no help from the facilitator.\n3. Record: **completed or not**, **time to the correct answer**, **number of wrong turns**, and where the pointer hovered before finding it.\n4. Ask for a **confidence rating** (1–5) after each task — a fast answer given with low confidence is not a success.\n\n**The measures to tabulate**\n\n| Measure | Target | Meaning if missed |\n|---|---|---|\n| Task completion | 5 of 5 users, all 3 tasks | the task is not discoverable |\n| Time to correct answer | under 60 seconds | the path is too deep or the filter is hidden |\n| Wrong turns | at most one per task | labels do not match the users' vocabulary |\n| Confidence | 4 or more of 5 | the user found it but does not trust it |\n| Five-second message | 4 of 5 users correct | hierarchy and title need work |\n\n**Why five users are enough**\nUsability failures are **systematic, not idiosyncratic**: if a filter is hidden, most users miss it, so the first four or five reveal the majority of the problems. The purpose is not statistical measurement but **finding the defects**, so one round of five, a round of fixes, and a second round of five is a better use of time than one round of twenty.\n\n**A worked finding and its fix**\nIn a retailer's category dashboard, four of five users could not answer "which store's margin fell most" because the chart showed margin **percentage** while the question asked about **absolute impact**, and the store filter sat behind a gear icon. The fixes were a second chart sorted by absolute margin loss, the filter moved to the header as visible chips, and a finding-based title. Round two: five of five completed the task, median 22 seconds.\n\n**Exam line:** five seconds for the message, three real tasks for the path, five users per round for the defects — record completion, time, wrong turns and confidence, fix, and test again.`,
              diagram: `vz-intro`,
              diagramCaption:
                `Usability testing a dashboard — the five-second message test and a task-based think-aloud round, with completion, time, wrong turns and confidence recorded.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Compare building a BI platform in house with buying a commercial tool and adopting an open-source stack, using three-year total cost of ownership, and state the migration costs that are usually forgotten.`,
              explain:
                `**What is being asked.** A procurement decision with a cost model and the hidden costs.\n\n**The options.** Buy a commercial BI suite; build in house; open-source plus support.\n\n**TCO heads.** Licences or subscription, infrastructure, people, implementation, training, upgrade effort.\n\n**The migration costs.** Report inventory and rebuild, recertification, retraining, parallel running, data model rework.\n\n**The decision rule.** Choose by the constraint that binds: speed, skills, lock-in or cost.\n\n**How to score the 4 marks.** Three options with TCO comparison (2) · three forgotten migration costs (1.5) · the decision rule (0.5).`,
              answer:
                `The tool question is a cost and lock-in question more than a feature question, because the features converge and the switching cost does not.\n\n| Head, over three years | Buy commercial | Build in house | Open source plus support |\n|---|---|---|---|\n| **Software** | subscription per user, rises with adoption | almost none, but everything is your code | free licence, paid support optional |\n| **Infrastructure** | vendor-hosted or cloud | all yours to size and run | yours, or a managed cloud service |\n| **People** | 1 administrator, 1 developer | 3–5 engineers permanently | 1–2 engineers, plus support retainer |\n| **Time to first dashboard** | weeks | months | weeks to months |\n| **Upgrades** | vendor's, in a release train | yours, forever | yours, with breaking changes to track |\n| **Lock-in** | moderate to high — reports are in a proprietary format | none, but the cost is owning it | low, but the visual layer may still be proprietary |\n\n**A worked comparison for 200 users** — illustrative: commercial ≈ ₹45 lakh of subscription plus ₹25 lakh of people and implementation; in-house ≈ ₹10 lakh of infrastructure plus ₹1.2 crore of engineering over three years; open source ≈ ₹15 lakh of infrastructure plus ₹40 lakh of support and engineering. The commercial option usually wins on **time to value**, the open-source option on **cost at scale with existing SQL skills**, and the in-house option only when the analytics *is* the product.\n\n**Three migration costs that are always forgotten**\n1. **Report inventory and rebuild** — 340 reports exist; perhaps 90 are used monthly. Each must be inventoried, and every one that is kept must be rebuilt by hand, because no migration tool preserves a calculation faithfully.\n2. **Recertification** — every report rebuilt must be re-validated against a closed period and re-blessed by its owner, which costs business time, not just developer time.\n3. **Retraining and parallel running** — users relearn navigation while both systems run, which typically means paying for two licences and two support loads for a quarter or two.\n\n**The decision rule.** Choose the commercial suite when time to value and a small team bind; open source when SQL skills are strong and volume is high; build only when no product expresses the domain model. Then write the exit plan into the contract — an export format, a documented model and a report inventory — because the second migration is where the money is lost.\n\n**Exam line:** compare three-year TCO including people, count the reports that must be rebuilt, budget for recertification and parallel running — and buy an exit plan, not just a licence.`,
              diagram: `vz-tools`,
              diagramCaption:
                `Build versus buy versus open source compared on three-year total cost of ownership, with the migration costs of report rebuild, recertification and retraining.`,
            },
          ],
        },
      ],
    },
  ],
};


