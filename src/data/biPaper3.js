// Business Intelligence Paper 3 — Model Paper (5 + 5 division)
//
// Facet map for this paper (each part takes a facet of a unit that Papers 1 and 2
// did not ask, so no question repeats across the set):
//   Unit 1 — 1.3 analytics maturity ladder, 1.7 benefits and challenges,
//            1.5 data-to-decision latency, 1.4 BI governance and centre of excellence
//   Unit 2 — 2.9 AI and LLMs in data preparation, 2.2 warehouse vs mart vs lake,
//            2.4 ETL vs ELT, 2.6 change data capture and delta loading
//   Unit 3 — 3.3 measures and additivity, 3.5 snowflake schema design,
//            3.7 OLAP server architecture and query processing, 3.12 OLAP applications
//   Unit 4 — 4.2 KPI selection and target setting, 4.3 exception thresholds and alerts,
//            4.6 time dimension and date key design, 4.3 reporting cadence
//   Unit 5 — 5.3 small multiples, sparklines and heat maps, 5.4 dashboard anti-patterns,
//            5.9 automated dashboard generation and natural-language reporting,
//            5.5 self-service governance

export const biPaper3 = {
  id: `bi-paper-3`,
  number: 3,
  name: `Paper 3`,
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
                `Explain the analytics maturity ladder an organization climbs — reporting, diagnostic, predictive and prescriptive analytics — and state two questions an examiner can use to place a company on the correct rung.`,
              explain:
                `**What is being asked.** A ladder, not a list: each rung, the capability it needs and the value it adds, plus a test for placing a real company.\n\n**The rungs.** Raw reporting → diagnostic analysis → predictive modelling → prescriptive optimisation. Each rung depends on the one below: prediction without clean history is guessing, prescription without prediction has nothing to optimise.\n\n**The blockers between rungs.** Poor definitions stop rung two; missing history stops rung three; an unwritten objective function and a decision owner stop rung four.\n\n**How to score the 5 marks.** The four rungs with capability and value (2.5) · dependency chain and blockers (1.5) · the two assessment questions (1).`,
              answer:
                `Analytics maturity is the depth of question a company can answer **repeatedly, from data, without a special project**. The ladder is climbed, not jumped.\n\n| Rung | Question answered | Capability needed | Value added |\n|---|---|---|---|\n| **1 · Reporting** | what happened? | one clean warehouse, agreed definitions | a number everyone accepts |\n| **2 · Diagnostic** | why did it happen? | drill-down, dimension modelling, attribution | root cause instead of blame |\n| **3 · Predictive** | what will happen? | enough history, a statistical model, validation | a forecast with an error band |\n| **4 · Prescriptive** | what should we do? | an objective, constraints, simulation or optimisation | a recommended action |\n\n**The dependency chain — the part most answers miss**\n1. Rung 1 fails if two teams define revenue differently, so no trend can be trusted.\n2. Rung 2 fails if the warehouse has no dimensions to drill into, so the cause is unprovable.\n3. Rung 3 fails if only the current snapshot is stored, so there is no history to learn from.\n4. Rung 4 fails if nobody has written down the objective — maximise margin or maximise volume? — because an optimisation with two objectives produces an argument, not an answer.\n\n**Two questions that place a company on the ladder**\n1. *Show me the last decision this number changed, and who changed it.* If no decision can be named, the company is doing reporting, whatever the slide deck says.\n2. *How wrong was last quarter forecast, and what did you change because of it?* A measured error and a changed action mean rung 3; no measurement means the prediction is a guess.\n\n**A worked placement.** A retail chain prints a daily sales report (rung 1), its category manager drills into store and product to explain a margin fall (rung 2), it forecasts next month demand per store with a 12 percent error (rung 3), and it still orders stock by habit because the buyer owns the decision and no reorder rule exists — so it sits at rung 3 with a rung-4 ambition.\n\n**Exam line:** reporting, diagnostic, predictive, prescriptive — and maturity is proved by a decision that changed, not by a technology that was bought.`,
              diagram: `analytics`,
              diagramCaption:
                `The analytics maturity ladder — reporting, diagnostic, predictive and prescriptive analytics, with the capability each rung needs.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain the benefits and the challenges of a Business Intelligence system, and for three challenges state the control that reduces the risk.`,
              explain:
                `**What is being asked.** Both sides, with a control attached to the risks — an answer that lists only benefits loses half the marks.\n\n**Benefits.** One version of the truth, faster decisions, history for trends, an audit trail, and a measurable return when a decision improves.\n\n**Challenges.** Data quality, cost and time to build, user adoption, unclear ownership, security, and the trap of measuring what is easy instead of what matters.\n\n**How to score the 5 marks.** Benefits with the mechanism (2) · challenges (2) · three controls (1).`,
              answer:
                `A BI system pays back only when the benefit is specific and the challenge is managed. Both sides are examinable.\n\n**Benefits, with the mechanism that produces them**\n\n| Benefit | Mechanism |\n|---|---|\n| **One version of the truth** | conformed dimensions and a certified metric layer end the two-number argument |\n| **Faster decisions** | a prepared dashboard answers in seconds what an ad-hoc query took days |\n| **Trend and comparison** | history is retained, so year-over-year and seasonality become possible |\n| **Evidence for the argument** | a drill path shows the cause, not only the total |\n| **Auditability** | lineage and load logs show where a number came from |\n| **Reach** | one dashboard serves hundreds of users at almost no marginal cost |\n\n**Challenges, and the control for each**\n\n| Challenge | Why it hurts | Control |\n|---|---|---|\n| **Poor data quality** | a wrong number destroys trust permanently | data-quality rules at load, a scorecard, a steward who owns each dimension |\n| **Cost and slow build** | the first dashboard can take months and the sponsor loses interest | deliver one narrow subject area first, then extend; reuse the same model |\n| **Low adoption** | users return to spreadsheets and the licence is wasted | involve users in design, keep the KPI count small, train, monitor usage telemetry |\n| **Unclear ownership** | nobody maintains definitions, so drift begins | a BI centre of excellence with named metric owners |\n| **Security and privacy** | a wide dashboard leaks salary or patient data | role-based and row-level security, aggregation of sensitive facts |\n| **Measuring the easy thing** | a dashboard full of activity counts changes no decision | connect every KPI to an objective and a decision owner |\n\n**The maturity caveat to add.** A benefit claimed before adoption is a forecast, not a result — so the business case should name the decision that will change and the metric that will move.\n\n**Exam line:** the benefits are real but conditional — one definition, a narrow first release, an owner per metric and a security model are what turn a dashboard into value.`,
              diagram: `vz-decision`,
              diagramCaption:
                `Benefits of BI on one side and the challenges with their controls on the other, ending in the decision the system supports.`,
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
                `Explain data-to-decision latency in a BI system — its stages, the three delivery modes (batch, micro-batch, streaming) and one decision that genuinely needs each mode.`,
              explain:
                `**What is being asked.** Latency as a measured budget across stages, then the three delivery modes matched to decisions.\n\n**The stages.** Source commit → extract → transform → load → aggregate refresh → dashboard cache → human sees it → human decides.\n\n**The modes.** Batch nightly (hours), micro-batch (minutes), streaming (seconds) — with a cost that rises steeply per step.\n\n**The rule.** Match latency to the decision cycle, never to fashion: a monthly budget does not need seconds.\n\n**How to score the 5 marks.** Latency stages with an example budget (2) · three modes with a decision each (2.5) · the matching rule (0.5).`,
              answer:
                `**Data-to-decision latency** is the elapsed time from an event happening in the business to a person acting on it. Every stage in the pipeline adds to it.\n\n**A worked latency budget for a retail sales figure**\n\n| Stage | Typical latency | Note |\n|---|---|---|\n| POS commits the sale | seconds | the event exists in the source |\n| Extract | 15 min to 24 h | depends on the extraction window |\n| Transform and clean | 5–60 min | scales with volume and rules |\n| Load and index | 1–30 min | merge, index rebuild |\n| Aggregate refresh | 1 min to hours | cube or materialised view |\n| Dashboard cache refresh | 0 to 30 min | the setting users forget |\n| Human notices and decides | hours to days | **usually the largest term** |\n\n**Three delivery modes and the decision each fits**\n\n| Mode | Latency | Fits this decision | Distinguishes |\n|---|---|---|---|\n| **Batch** | nightly, hours | which stores to restock tomorrow; the monthly margin review | full history, cheap, restatable |\n| **Micro-batch** | 5–15 minutes | which orders are running late today; shift-level staffing | near-real-time with small complexity |\n| **Streaming** | seconds | block a card transaction that looks fraudulent; re-route a delivery | event-level, expensive, stateful |\n\n**Why latency is not free.** Each step towards streaming adds a queue, a state store, ordering and exactly-once problems, and a second copy of the transformation logic — which is how a company ends up with two different revenue numbers. The reason to accept that cost is a decision whose value decays within the latency window.\n\n**The matching rule.** Latency should be shorter than the decision cycle and no shorter — a fraud block needs seconds because the loss occurs in seconds; a quarterly budget needs a day, and paying for streaming would buy accuracy problems, not value.\n\n**One diagnosis to include.** If the pipeline delivers in 10 minutes but managers read the dashboard in a weekly meeting, the real latency is seven days and the engineering effort bought nothing. Measure the last stage too.\n\n**Exam line:** latency is a budget across stages — batch for planning, micro-batch for the working day, streaming for the seconds where the money is lost — and match it to the decision, not to fashion.`,
              diagram: `biflow`,
              diagramCaption:
                `Stages of data-to-decision latency from source commit to human decision, with batch, micro-batch and streaming delivery modes.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain BI governance — the decisions a governance body takes, the roles involved, and why a centre of excellence reduces duplicate dashboards.`,
              explain:
                `**What is being asked.** Governance as a set of concrete decisions and named roles, not an org chart.\n\n**Decisions.** Which metrics are certified, who owns each subject area, which tool is standard, who may see which data, how change requests are prioritised.\n\n**Roles.** Sponsor, BI manager or CoE lead, data steward, model developer, analyst, business owner.\n\n**The CoE.** Central standards plus federated delivery: reuse the model, review the design, avoid five copies of a margin report.\n\n**How to score the 5 marks.** The five governance decisions (2.5) · roles with one responsibility each (1.5) · the CoE mechanism and its effect (1).`,
              answer:
                `**BI governance** is the set of decisions that keep definitions, access and delivery consistent as the number of users and dashboards grows. Without it the warehouse stays clean and the reporting layer becomes a swamp.\n\n**The five decisions a governance body actually takes**\n\n| Decision | Question it settles | Artefact |\n|---|---|---|\n| **Metric certification** | which definition of margin is official? | certified metric list with formula and owner |\n| **Subject-area ownership** | who is accountable for sales, finance, HR data? | data ownership register |\n| **Tool standard** | may a team buy its own BI tool? | approved tool list, exceptions process |\n| **Access model** | who may see salary, patient, customer-level data? | role matrix, row-level security rules |\n| **Prioritisation** | which dashboard request is built next? | intake queue scored by value and reuse |\n\n**Roles and one responsibility each**\n\n| Role | Responsibility |\n|---|---|\n| **Executive sponsor** | funds the programme and arbitrates definition disputes |\n| **BI manager / CoE lead** | owns standards, the roadmap and the review process |\n| **Data steward** | owns one dimension or subject area, approves changes to it |\n| **Model developer** | builds and documents the warehouse and semantic model |\n| **Analyst** | builds reports on certified data, raises change requests instead of patching |\n| **Business owner** | states the decision and accepts the metric as fit for purpose |\n\n**The centre of excellence and the duplicate-dashboard problem**\nA CoE is a small central team that sets the template — the star schema, the naming standard, the metric layer, the dashboard look — and then lets business analysts build inside it. The saving is mechanical: the *second* margin report reuses the existing margin measure, the existing date dimension and the existing access rule, so it costs hours instead of weeks. The federation is what keeps the business engaged; the standard is what stops five versions of the same number.\n\n**The failure to mention.** A CoE that only approves and never ships becomes a bottleneck, and teams route around it with spreadsheets — governance without delivery always loses.\n\n**Exam line:** governance decides which metrics are certified, who owns each subject area, who may see what and what is built next — and a centre of excellence makes the second dashboard cheap instead of contradictory.`,
              diagram: `bw-metadata`,
              diagramCaption:
                `BI governance: certified metrics, subject-area ownership, access rules and the centre of excellence sitting over the warehouse and dashboards.`,
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
                `Explain the role of AI and large language models in data preparation — the four tasks they assist — and the guardrail each task needs before the output is loaded into a warehouse.`,
              explain:
                `**What is being asked.** Assistance, not autonomy: where an LLM genuinely helps in preparation, and what must still be checked.\n\n**Four tasks.** Column and table mapping suggestions; entity resolution for near-duplicate names; anomaly and outlier flagging; generating transformation and test code from a description.\n\n**The guardrail idea.** Every model output is a proposal until a rule, a count or a human confirms it — the warehouse must not depend on a probabilistic step at load time.\n\n**How to score the 5 marks.** Four tasks with the mechanism (2.5) · a guardrail for each (2) · one honest limitation (0.5).`,
              answer:
                `AI assists **preparation** — the expensive, repetitive part of a warehouse project — but the certified number must never depend on a model that can answer differently tomorrow.\n\n**Four tasks, and the guardrail each needs**\n\n| Task | What the model does | Guardrail before loading |\n|---|---|---|\n| **Mapping suggestion** | reads column names, samples and descriptions and proposes source-to-target mappings | a profile check on every mapping: type, null rate, value range; human approval recorded in the mapping document |\n| **Entity resolution** | scores customer or supplier name pairs as likely duplicates | a blocking key plus a similarity threshold, a sample audit, and a survivorship rule that says which record wins |\n| **Anomaly flagging** | highlights values far from the learned pattern | flags route to a review queue, not to an automatic correction; the rule that decides is versioned |\n| **Code and test generation** | writes SQL transformations or test cases from a plain description | code review, a test that must pass on known data, and the same version control as hand-written code |\n\n**A worked example.** A supplier feed arrives with columns \`vendor_nm\`, \`VENDOR NAME\` and \`supplier\`. The model proposes mapping all three to \`dim_supplier.name\`. The guardrail catches that the third column actually holds a supplier *code* with 100 percent distinct values, not a name — the profile check matters more than the suggestion.\n\n**The honest limitation.** An LLM has no access to your business definitions. It will map \`revenue\` to \`gross_sales\` confidently and be wrong, so the semantic layer — not the prompt — must remain the authority on definitions.\n\n**The division of labour to state.** Use AI where the output is reviewed cheaply and in bulk: mapping drafts, dedup candidates, documentation, test scaffolding. Use a deterministic rule where the output is loaded without review: type casts, currency conversion, key generation, null handling.\n\n**Exam line:** let the model propose mappings, duplicates, anomalies and code — and let a profile check, a threshold, a review queue and a test dispose of them before anything is loaded.`,
              diagram: `bw-ai-etl`,
              diagramCaption:
                `AI-assisted data preparation — mapping suggestion, entity resolution, anomaly flagging and code generation, each passing through a human or rule-based guardrail.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Compare a data warehouse, a data mart and a data lake on six points, and state which one an organization should build first and why.`,
              explain:
                `**What is being asked.** Three stores that are often confused, compared on structure, and a build order with a reason.\n\n**Definitions.** Warehouse: integrated, subject-oriented, historical, schema-on-write. Mart: a subset for one department, dependent or independent. Lake: raw or lightly processed files, schema-on-read.\n\n**Six points.** Scope, schema timing, users, data types, governance, cost and query style.\n\n**The build order.** Warehouse first, then dependent marts; a lake only when raw and unstructured data are genuinely needed.\n\n**How to score the 5 marks.** Definitions (1.5) · the six-point comparison (2.5) · build order with the reason (1).`,
              answer:
                `The three are not substitutes; they answer different questions and are layered in a mature architecture.\n\n| Point | Data warehouse | Data mart | Data lake |\n|---|---|---|---|\n| **Scope** | enterprise-wide, all subject areas | one department or function | everything, including raw and unstructured |\n| **Schema timing** | designed before load (schema-on-write) | inherits or copies the warehouse model | applied at read time (schema-on-read) |\n| **Data types** | structured, modelled, historical | structured subset | files, JSON, logs, images, sensor data |\n| **Typical users** | analysts and BI tools across the company | a department, often one dashboard set | data scientists, engineers, ML pipelines |\n| **Governance** | strong — definitions, lineage, access | medium, matches its department | weakest unless catalogued, because anything can be dropped in |\n| **Query style and cost** | SQL, sub-second with aggregates, moderate cost | fast, small, cheap | cheap storage, expensive and unpredictable queries |\n\n**Dependent versus independent marts.** A **dependent mart** is a view or subset of the warehouse and cannot disagree with it. An **independent mart** is built straight from sources and is exactly how a company ends up with two revenue numbers, because it repeats the transformation logic.\n\n**Which to build first, and why**\nBuild the **warehouse first**, one subject area at a time, then serve dependent marts from it. The reason is definitional, not technical: the warehouse is the only layer where sales, finance and HR share conformed dimensions, so every mart and every lake query downstream inherits one definition. A lake-first approach stores everything cheaply and then discovers that nothing is comparable, at which point the warehouse is built anyway — with the extra job of reprocessing the lake.\n\n**The exception worth stating.** If the dominant requirement is exploratory data science on raw text, images or events, start with a governed lake and build the warehouse for reporting beside it. That is a real pattern, not a way to skip modelling.\n\n**Exam line:** warehouse for one enterprise definition, mart for a department's narrow question, lake for raw and unstructured volume — build the warehouse first, and make the marts dependent.`,
              diagram: `bw-characteristics`,
              diagramCaption:
                `Data warehouse, data mart and data lake compared on scope, schema timing, users, governance and cost, with the recommended build order.`,
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
                `Explain the difference between ETL and ELT — where the transformation runs, what changes for the warehouse, and one situation that favours each.`,
              explain:
                `**What is being asked.** One architectural choice, its consequence, and a fit for each option.\n\n**ETL.** Transform on a separate engine before load; the warehouse receives clean, modelled data.\n\n**ELT.** Load raw into the warehouse first, transform with its own compute (SQL, dbt); raw history is retained.\n\n**What changes.** Cost model, reprocessing ability, skill set, governance of raw data, and where the business logic lives.\n\n**How to score the 5 marks.** The two orders of steps with a diagram (1.5) · five consequences (2.5) · one situation for each (1).`,
              answer:
                `The letters are the same three operations; only the **order** changes, and that order decides where the business logic lives.\n\n\`\`\`\nETL :  source → [extract → transform → load] → warehouse (clean only)\nELT :  source → [extract → load] → warehouse raw → [transform with SQL] → marts\n\`\`\`\n\n| Point | ETL | ELT |\n|---|---|---|\n| Where transformation runs | a separate engine (Informatica, Talend, SSIS) | inside the warehouse's own compute |\n| What the warehouse holds | clean, modelled data only | raw landing plus modelled layers |\n| Reprocessing history | hard — the raw data may be gone | easy — re-run the SQL over retained raw data |\n| Cost | engine licence plus servers | warehouse compute, elastic and pay-per-query |\n| Skill set | ETL tool specialists | SQL and analytics engineers |\n| Governance of raw data | raw never lands, so sensitive fields must be masked in flight | raw lands, so access control on the raw layer becomes essential |\n\n**ETL fits** a strictly regulated or bandwidth-limited setting: patient or card data that must be masked, validated and rejected before it is ever stored, on a fixed overnight window with an on-premise database.\n\n**ELT fits** a cloud warehouse with elastic compute: the team wants to keep raw history to re-derive a definition later, and transformations are version-controlled SQL that analysts can read and review.\n\n**The practical pattern most companies use.** ELT with a guarded landing zone: raw data arrives in an access-restricted schema, personal fields are masked on arrival, and all modelling is SQL in the warehouse. The old ETL step survives only for the validation gate.\n\n**The trap to name.** ELT without discipline reproduces the swamp — hundreds of unversioned SQL scripts, each computing margin slightly differently — which is why dbt-style models, tests and a semantic layer are part of the choice, not an optional extra.\n\n**Exam line:** ETL transforms before storing, ELT stores raw and transforms with warehouse compute — choose ETL to keep sensitive data out, ELT to keep history and re-derive definitions.`,
              diagram: `bw-etl`,
              diagramCaption:
                `ETL transforms before load while ELT loads raw data first and transforms inside the warehouse, with the layers each produces.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain incremental (delta) loading with change data capture — the three CDC methods, the high-water-mark pattern with a MERGE example, and how a late-arriving row is handled.`,
              explain:
                `**What is being asked.** How a warehouse loads only what changed, without re-reading the whole table.\n\n**Three methods.** Timestamp or high-water mark, log-based CDC, and a trigger or audit-table approach.\n\n**The pattern.** Store the last successful watermark; extract rows newer than it; MERGE on the business key; update the watermark only after a successful commit.\n\n**Late arrival.** An event with an old timestamp appearing after the watermark passed it — handle with an overlap window, not by trusting the clock.\n\n**How to score the 5 marks.** Three CDC methods (2) · the watermark loop and a MERGE statement (2) · late-arriving handling (1).`,
              answer:
                `A full reload of a 500 million row sales table every night wastes the window; **delta loading** moves only the rows that changed.\n\n**Three change data capture methods**\n\n| Method | How it detects change | Strength | Weakness |\n|---|---|---|---|\n| **Timestamp / high-water mark** | \`WHERE updated_at > :last_watermark\` | simple, no source change needed | misses hard deletes; a clock skew or a late commit loses rows |\n| **Log-based CDC** | reads the database transaction log (Debezium, Oracle GoldenGate) | captures inserts, updates and deletes in order | needs log access and more infrastructure |\n| **Trigger or audit table** | a trigger writes every change to a side table | explicit and complete | adds write cost on the operational system |\n\n**The high-water-mark loop**\n1. Read the stored watermark, say \`2025-06-01 00:00:00\`.\n2. Extract rows with \`updated_at >= watermark - 1 hour\` — the overlap window is deliberate.\n3. Stage them, then upsert into the fact or dimension on the business key.\n4. Commit, then write the new watermark as the maximum \`updated_at\` seen, not the current time.\n5. Log rows read, inserted and updated; a sudden drop to zero is a broken feed, not a quiet night.\n\n\`\`\`sql\nMERGE INTO fact_sales AS t\nUSING stage_sales AS s\n  ON t.sale_id = s.sale_id\nWHEN MATCHED AND s.updated_at > t.updated_at THEN UPDATE SET\n  t.qty = s.qty, t.amount = s.amount, t.updated_at = s.updated_at\nWHEN NOT MATCHED THEN INSERT (sale_id, date_key, product_key, store_key, qty, amount, updated_at)\n  VALUES (s.sale_id, s.date_key, s.product_key, s.store_key, s.qty, s.amount, s.updated_at);\n\`\`\`\n\n**Late-arriving rows.** A transaction committed at 23:58 may reach the source table after the watermark moved to 00:05, so its \`updated_at\` is older than the watermark and a strict filter loses it forever. Three defences: the overlap window above, a periodic full reconciliation of recent partitions, and reporting on the **event date** rather than the load date — so a row that arrives late still lands in the correct day, and the affected aggregate is recomputed.\n\n**The test to add.** Each load should assert that count and amount of the staged rows reconcile with the source for the same window; without that check a silent gap is discovered by a business user, weeks later.\n\n**Exam line:** watermark, log or trigger to find the change; MERGE on the business key to apply it; an overlap window and an event-date report to survive the row that arrives after the clock moved on.`,
              diagram: `bw-integration`,
              diagramCaption:
                `Incremental loading with change data capture — watermark, extraction window, MERGE upsert and late-arriving row handling.`,
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
                `Explain measures and dimensions with the three kinds of measure — additive, semi-additive and non-additive — and show with numbers why a balance must never be summed across time.`,
              explain:
                `**What is being asked.** The measure taxonomy, with the arithmetic proof that separates them.\n\n**Additive.** Sums correctly over every dimension — quantity, revenue.\n\n**Semi-additive.** Sums over some dimensions but not time — an account balance or a stock level.\n\n**Non-additive.** Sums over nothing — a ratio, a percentage, a distinct count.\n\n**The proof.** Three daily balances of 100, 120, 130: the month-end balance is 130, not 350.\n\n**How to score the 5 marks.** Definitions with examples (1.5) · the three kinds (2) · the numeric demonstration (1.5).`,
              answer:
                `A **dimension** is how you want to look at the business — product, store, day, customer. A **measure** is the number you look at. Whether that number may be added is a property of the measure, and the warehouse must encode it.\n\n| Kind | Rule | Examples | Aggregate with |\n|---|---|---|---|\n| **Additive** | sums over every dimension | quantity sold, revenue, cost, clicks | \`SUM\` |\n| **Semi-additive** | sums over all dimensions except time | account balance, stock on hand, headcount, backlog | \`SUM\` over product and store, then **last value** over time |\n| **Non-additive** | cannot be summed at all | margin percent, conversion rate, average basket, distinct customers | recompute from additive components |\n\n**The numeric proof — why a balance must not be summed across time**\n\n| Day | Closing balance |\n|---|---|\n| 1 June | 100 |\n| 2 June | 120 |\n| 3 June | 130 |\n\nWrong: \`SUM(balance) = 350\` — a number that means nothing. Right: the month-end balance is the **last** value, 130. If a report shows 350 as "balance", every downstream ratio is wrong and nobody notices, because the number is plausible.\n\n**The same trap with ratios.** Store \`revenue\` and \`orders\`, never store \`average basket\` alone; average basket for the month is \`SUM(revenue) / SUM(orders)\`, not \`AVG(daily average)\`. With two stores of 10 and 1,000 orders and averages of 500 and 100, the true overall average is 103.6, while the average of averages is 300.\n\n**How to encode it in the model.** Tag each measure with its additivity in the semantic layer, so the tool picks \`LAST_NON_EMPTY\` for balances and refuses \`SUM\` on a percentage. That tag is metadata with a real consequence: it is the difference between a report that is trusted and one that is quietly wrong.\n\n**Exam line:** dimensions slice, measures aggregate — additive anywhere, semi-additive except over time, non-additive never; store the components and recompute the ratio.`,
              diagram: `ol-measures`,
              diagramCaption:
                `Measures and dimensions with additive, semi-additive and non-additive examples, showing why a closing balance is read as the last value, not a sum.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Design a snowflake schema for a retail sales warehouse — normalise two of the dimensions, show the join path, and state two costs and two benefits of the choice.`,
              explain:
                `**What is being asked.** A design, not a definition: a star with at least two dimensions normalised into their own tables.\n\n**The normalisation.** \`dim_product\` → \`dim_category\` → \`dim_department\`; \`dim_store\` → \`dim_city\` → \`dim_region\`.\n\n**The joins.** Fact to dimension on the surrogate key, dimension to sub-dimension on the hierarchy key.\n\n**The trade.** Less duplicated text and a controlled hierarchy against more joins and slower queries.\n\n**How to score the 5 marks.** The design with keys and hierarchy tables (2.5) · the join path (1) · two costs and two benefits (1.5).`,
              answer:
                `A **snowflake** schema is a star schema whose dimensions are normalised: repeated hierarchy attributes move into their own tables and are referenced by key.\n\n**The design**\n\n\`\`\`\ndim_date ──┐\n           │\ndim_product ── category_key ──▶ dim_category ── department_key ──▶ dim_department\n           │\nfact_sales ─┤   measures: quantity, gross_amount, discount_amount, net_amount\n           │\ndim_store ──── city_key ──▶ dim_city ── region_key ──▶ dim_region\n           │\ndim_customer (flat, not normalised)\n\`\`\`\n\n| Table | Key | Attributes |\n|---|---|---|\n| \`dim_product\` | \`product_key\` | name, brand, size, \`category_key\` |\n| \`dim_category\` | \`category_key\` | category name, category manager, \`department_key\` |\n| \`dim_department\` | \`department_key\` | department name, buying head |\n| \`dim_store\` | \`store_key\` | store name, format, \`city_key\` |\n| \`dim_city\` | \`city_key\` | city, state, \`region_key\` |\n| \`dim_region\` | \`region_key\` | region, regional head |\n\n**The join path for "net sales by department for the West region"**\n\`\`\`sql\nSELECT d.department_name, r.region_name, SUM(f.net_amount) AS net_sales\nFROM fact_sales f\nJOIN dim_product p  ON p.product_key = f.product_key\nJOIN dim_category c ON c.category_key = p.category_key\nJOIN dim_department d ON d.department_key = c.department_key\nJOIN dim_store s    ON s.store_key = f.store_key\nJOIN dim_city ci    ON ci.city_key = s.city_key\nJOIN dim_region r   ON r.region_key = ci.region_key\nGROUP BY d.department_name, r.region_name;\n\`\`\`\n\n**Two benefits**\n1. **Controlled hierarchy** — renaming a category or moving a product between departments is one row update, not a mass update across the fact-adjacent dimension.\n2. **Less redundancy** — a category name with its manager is stored once, so a correction propagates everywhere and storage is smaller.\n\n**Two costs**\n1. **More joins** — five joins instead of two, so a naive query on a billion-row fact is measurably slower without aggregates.\n2. **Harder for business users** — a self-service user must know the path \`product → category → department\`; the star hides that in one wide dimension.\n\n**The design advice.** Snowflake the dimensions that genuinely change — where a hierarchy is maintained by another system — and keep the rest flat. Most reporting warehouses end up hybrid, and the semantic layer can expose the snowflake as one flat dimension to the user, which is how you keep both benefits.\n\n**Exam line:** normalise the dimension that has a maintained hierarchy, reference it by key, accept more joins for less repetition — and expose it flat in the semantic layer.`,
              diagram: `ol-snowflake`,
              diagramCaption:
                `A snowflake schema for retail sales — fact table joined to normalised product and store hierarchies through category, department, city and region tables.`,
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
                `Explain the architecture of an OLAP server and how it answers a query fast — the query flow, aggregate navigation, the aggregate cache and one limit of pre-aggregation.`,
              explain:
                `**What is being asked.** The server internals that make a cube feel instant, and where that speed stops.\n\n**Components.** Metadata catalogue, query parser and rewriter, aggregate store, execution engine, cache, security filter.\n\n**The flow.** Parse the MDX or SQL → match the request against available aggregates → rewrite to the smallest sufficient aggregate → compute the remainder → cache by query signature.\n\n**The limit.** The number of possible aggregates grows exponentially with dimensions and levels, so only a chosen subset is built.\n\n**How to score the 5 marks.** Components with a role each (2) · the query flow as steps (2) · aggregate navigation with its limit (1).`,
              answer:
                `An **OLAP server** sits between the warehouse and the user and turns a multi-dimensional question into a fast, pre-computed answer.\n\n**Components**\n\n| Component | Role |\n|---|---|\n| **Metadata catalogue** | knows dimensions, hierarchies, levels, measures and their additivity |\n| **Query parser and rewriter** | validates the request and rewrites it against the cheapest available data |\n| **Aggregate store** | holds pre-computed summaries (a cube, materialised views, or aggregate tables) |\n| **Execution engine** | runs the remaining SQL against the detail tables when no aggregate fits |\n| **Aggregate cache** | keeps recent query results keyed by the query signature |\n| **Security filter** | injects row-level and cell-level restrictions before execution |\n\n**The query flow for "net sales, West region, 2025, by quarter, by category"**\n1. Parse the request into dimensions, levels and a measure.\n2. Check the security filter — may this user see the West region at all?\n3. **Aggregate navigation**: look for the smallest aggregate whose grain still covers quarter × category × region. A monthly aggregate at category × region is sufficient if quarters are whole months.\n4. If a monthly aggregate exists but a category was reclassified mid-year, the rewriter falls back to the detail table — correctness always beats speed.\n5. Compute any remainder (a month split across quarters), then cache the result under a signature so a repeat of the same view is instant.\n\n**The limit of pre-aggregation.** With 8 dimensions of 3 levels each, the number of candidate aggregates is \`2^8 = 256\` combinations of levels; storing all of them can exceed the detail data by an order of magnitude and lengthen every load. Real systems therefore build a chosen subset — typically time × one or two high-cardinality dimensions — and rely on the cache and on hardware for the rest.\n\n**The tuning sentence to add.** Speed on OLAP comes from three things in order: fewer rows to scan (aggregates), fewer scans (cache), and fewer dimensions per query (design). A slow cube is usually a design problem — a query that slices on a 5-million-row customer dimension — not a hardware problem.\n\n**Exam line:** parse, filter for security, navigate to the smallest sufficient aggregate, fall back to detail when needed, cache the signature — and pre-aggregate only a chosen subset, because the combinations grow exponentially.`,
              diagram: `ol-olap-arch`,
              diagramCaption:
                `OLAP server architecture — metadata catalogue, query rewriter with aggregate navigation, aggregate store, execution engine, cache and security filter.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain the applications of OLAP in business analysis with four examples, stating for each the dimensions, the measure and the decision the analysis supports.`,
              explain:
                `**What is being asked.** Four concrete analyses, structured as dimensions × measure → decision.\n\n**Examples.** Finance variance, sales performance, inventory ageing, HR workforce, marketing campaign, clinical operations.\n\n**The structure.** Slice, dice, roll-up and drill-down applied to a real question, with the action at the end.\n\n**How to score the 5 marks.** Four applications with dimensions and measure (3) · the decisions (1.5) · one sentence on why OLAP fits slice-and-compare work (0.5).`,
              answer:
                `OLAP earns its place where a manager has to **compare a number across two or three dimensions and act** — the workload that a printed report cannot serve.\n\n| Application | Dimensions | Measure | Decision |\n|---|---|---|---|\n| **Budget vs actual variance** | time (month, quarter), cost centre, account, scenario | actual, budget, variance | which cost centre to investigate this month |\n| **Sales performance** | product hierarchy, store, region, time | net sales, margin, units | which product to delist, which store to support |\n| **Inventory ageing** | product, warehouse, age bucket | stock value, days of cover | what to discount, what to stop reordering |\n| **Marketing effectiveness** | campaign, channel, segment, week | spend, conversions, revenue per rupee | which channel to fund next quarter |\n| **Clinical operations** | department, ward, month | occupancy, length of stay | staffing per shift, capacity planning |\n\n**One worked slice for the first row**\nA finance analyst opens the variance cube, rolls up to the quarter, slices to the current quarter, dices to accounts starting with 5 (operating expense), and drills down into the cost centres whose variance is worse than plus 10 percent. In three clicks the question moves from "expenses are over" to "two cost centres in Pune are over on travel", which is a decision someone can take this week.\n\n**Why OLAP rather than a flat report**\n1. **Navigation without a new query** — roll-up, drill-down, slice, dice and pivot let the user move while the server follows.\n2. **Consistent aggregates** — every number comes from the same aggregate store, so a total always equals the sum of its parts.\n3. **Compare, not just list** — scenario and version dimensions put budget and actual side by side, which is where the decision lives.\n\n**The limit to state.** OLAP is a *reporting* engine: it explains what happened across known dimensions, but it does not find an unknown pattern in text or predict churn — that work belongs to data mining and machine learning on the same warehouse.\n\n**Exam line:** OLAP is slice-and-compare at speed — variance, sales, inventory and campaigns, each with dimensions, a measure and a decision at the end.`,
              diagram: `ol-apps`,
              diagramCaption:
                `OLAP applications in business analysis — variance, sales, inventory and campaign analysis, each with its dimensions, measure and decision.`,
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
                `Explain how a KPI is selected and how its target is set — the balance of leading and lagging indicators, the three ways of setting a target, and one KPI card with every element it must carry.`,
              explain:
                `**What is being asked.** Selection and target-setting as two decisions with rules, then the standard KPI card.\n\n**Selection.** Does it link to a strategic objective, is it measurable from available data, is it owned by a named person, can it be influenced, and does it avoid a known perverse incentive?\n\n**Leading versus lagging.** Leading moves first (pipeline, stock cover); lagging measures the result (revenue, churn).\n\n**Targets.** Historical baseline plus improvement, internal or external benchmark, negotiated commitment.\n\n**How to score the 5 marks.** Selection criteria (2) · leading/lagging with examples (1.5) · three target methods and the card (1.5).`,
              answer:
                `A **KPI** is a metric chosen because a decision depends on it. Selection and target-setting are separate decisions, and both can be wrong.\n\n**Five tests a metric must pass before it becomes a KPI**\n1. **Linked** — it serves a named strategic objective; if no objective names it, it is a metric, not a KPI.\n2. **Measurable from real data** — with a stated formula, source and refresh, not a manual estimate.\n3. **Owned** — one named person, not a department.\n4. **Influenceable** — the owner can actually move it; a KPI nobody can affect becomes an excuse.\n5. **Without a perverse incentive** — a call-centre on "calls per hour" hangs up faster; the KPI must include the counter-metric (resolution rate).\n\n**Leading and lagging, balanced**\n\n| Type | Moves | Examples | Role |\n|---|---|---|---|\n| **Lagging** | after the result | revenue, churn, NPA ratio, margin | proves the outcome, cannot be changed today |\n| **Leading** | before the result | sales pipeline, stock cover, quote turnaround, first-response time | can be acted on this week |\n\nA dashboard with only lagging KPIs tells you about a problem after you could have prevented it, which is why the pair matters: pipeline (leading) beside revenue (lagging), stock cover beside stock-outs.\n\n**Three ways to set a target**\n1. **Baseline plus improvement** — last year 82 percent on-time delivery, so this year 88; cheap, credible, and it can lock in a mediocre baseline.\n2. **Benchmark** — a competitor or industry reference; external and motivating, but rarely comparable in definition.\n3. **Negotiated commitment** — the owner proposes, the sponsor accepts; high buy-in, and open to sandbagging unless the trend is challenged.\n\n**The KPI card, element by element**\n\`\`\`\nOn-time delivery   Q3 2025\n  88.4%   ▲ 2.1 pts vs Q2    target 90%   status AMBER\n  trend 6 quarters · owner: Supply Chain Head · refresh: daily 06:00\n\`\`\`\nValue, comparison, target, status, trend, owner, refresh — omit any one and the reader has to ask a question the card should have answered.\n\n**Exam line:** select on link, measurability, ownership, influence and incentive; pair each lagging KPI with a leading one; set the target from a baseline, a benchmark or a commitment — and put value, target, trend, owner and refresh on the card.`,
              diagram: `td-kpi-decision`,
              diagramCaption:
                `KPI selection and target setting — a leading indicator beside its lagging outcome, with the target lineage from objective to owner to KPI card.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain exception reporting and threshold design — the three threshold types, how alert fatigue arises, and a worked rule that raises an alert only when a store's sales genuinely deviate.`,
              explain:
                `**What is being asked.** Thresholds as a design decision: fixed, percentage-variance, and statistical (standard deviation or control limits).\n\n**Alert fatigue.** Too many rows flagged, no severity ranking, no owner, so people mute the alert — the failure is a design failure, not a user failure.\n\n**The worked rule.** Compare with the same weekday last year, allow a percentage band, require two consecutive breaches, rank severity, route to a named owner.\n\n**How to score the 5 marks.** Three threshold types (2) · alert fatigue and its causes (1.5) · the worked rule with numbers (1.5).`,
              answer:
                `**Exception reporting** shows only the rows that break a rule, so a manager reads fifteen items instead of fifteen thousand. The whole method rests on the threshold.\n\n| Threshold type | Rule | Strength | Weakness |\n|---|---|---|---|\n| **Fixed** | sales below 50,000 or margin below 5 percent | trivial to explain | ignores size and season — a small store is always flagged |\n| **Percentage variance** | actual differs from plan or last year by more than 10 percent | comparable across stores | a quiet week and a collapse look the same |\n| **Statistical** | outside mean ± 2 standard deviations, or outside a control chart limit | adapts to each store's own volatility | needs history; a genuine structural change reads as an outlier |\n\n**How alert fatigue arises**\nThe first version flags 300 rows a day; the owner cannot review 300, so they filter to the top ten by value and the rest are ignored — after a month the alert is muted entirely. The causes are always the same: a threshold set to catch everything, no severity, no owner, no cap on the daily count, and the same channel for information and for action.\n\n**A worked rule for a retail chain**\n1. Compare each store-day with the **same weekday in the same week last year**, not with yesterday, because Saturday and Monday differ by 60 percent.\n2. Flag when the gap is worse than **minus 15 percent** *and* the absolute loss exceeds **20,000**, so a small store's noise cannot raise an alert.\n3. Require **two consecutive days** of breach, which removes single-day outages and payment-gateway incidents.\n4. Rank severity: **red** for more than 30 percent and above 100,000, **amber** for the rest.\n5. Route red to the regional manager and amber to a daily digest, and record the action taken, so the rule can be tuned by outcome.\n\n**The tuning loop to add.** Review the alert list monthly: the percentage of alerts that led to an action is the only measure that matters. If it is below about a third, the threshold is too loose; if a real loss was missed, too tight.\n\n**Exam line:** a threshold is a promise that everything else is fine — fix the comparison base, the size floor, the persistence rule, the severity and the owner, then tune it by how many alerts led to action.`,
              diagram: `td-performance`,
              diagramCaption:
                `Exception reporting with fixed, variance and statistical thresholds, severity ranking and an action record that feeds threshold tuning.`,
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
                `Explain the design of the time dimension in a data warehouse — the grain, the date key, fiscal calendars, time zones and holiday flags — and why a fact row needs its own date key rather than a text date.`,
              explain:
                `**What is being asked.** Calendar modelling, which is the cheapest and most neglected design in a warehouse.\n\n**Grain.** One row per day (or per hour for operational reporting).\n\n**Key.** An integer \`date_key\` such as 20251106, not a text date and not the database \`DATE\` type, for join speed and readability.\n\n**Columns.** Day, month, quarter, year, week, day-of-week, is-weekend, is-holiday, fiscal period, fiscal year, and the same date under a second calendar.\n\n**Why a key.** Fiscal calendars, week numbering and holiday flags do not exist in the operational timestamp.\n\n**How to score the 5 marks.** Grain and key (1.5) · the columns and fiscal/holiday handling (2) · why not a raw timestamp, with one example (1.5).`,
              answer:
                `The **time dimension** is the one dimension every fact joins to, so a defect there contaminates every report.\n\n**Grain.** One row per **day** for a sales warehouse (about 3,650 rows for ten years); per **hour** only if the decision needs intraday detail, which multiplies the rows 24 times and should be justified by a real question.\n\n**The key.** Use a readable integer \`date_key\` in \`YYYYMMDD\` form.\n\n| Choice | Key | Verdict |\n|---|---|---|\n| Text | \`'2025-11-06'\` | joins slower, formatting errors, no fiscal fields |\n| Native date | \`DATE '2025-11-06'\` | correct, but functions vary and fiscal logic still absent |\n| Integer | \`20251106\` | fast, readable, sorts correctly, joins to an int fact column |\n\n**The columns a usable date dimension carries**\n\n| Group | Examples | Why |\n|---|---|---|\n| Calendar | day, day-of-week, day name, month, month name, quarter, year | grouping and labels without functions in every query |\n| Week | ISO week number, week start, week end | retail weeks rarely align with months |\n| Fiscal | fiscal period, fiscal quarter, fiscal year, period start and end | a company whose year starts in April cannot report on the calendar year |\n| Behaviour | is-weekend, is-holiday, holiday name, is-sale-event | a Diwali week is not a normal week, and it must be comparable year to year |\n| Relative | is-current-day, is-current-month, days-from-today | lets a dashboard define "this month" once |\n\n**Time zones.** Store fact timestamps in **UTC** and let the date dimension resolve the **local business date** from the store's time zone. A sale at 23:40 in Pune is already the next day in UTC-plus-5:30 terms if the pipeline stores UTC naively — which misplaces evening sales into the wrong day and quietly breaks the daily target.\n\n**Why a key, not the raw timestamp.** The fact row must be able to answer "sales in the fiscal week, on a non-holiday, versus the same week last year" without a join to a calendar table of business rules hidden in code. The date key resolves all three at once, and a holiday flag is the only practical way to compare like with like.\n\n**The maintenance note.** Build the calendar for twenty years ahead in one script and include a check that every fact \`date_key\` exists in the dimension — an orphan date is a data-quality failure, not a rounding error.\n\n**Exam line:** one row per day, an integer key, calendar plus fiscal plus behaviour columns, UTC timestamps with a local business date — the time dimension is where comparability is designed.`,
              diagram: `td-temporal`,
              diagramCaption:
                `Time dimension design — the integer date key, calendar and fiscal columns, weekend and holiday flags, and the local business date derived from a UTC timestamp.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain reporting cadence in BI — the daily operational report, the weekly management pack and the monthly board pack — and state what changes in audience, content and design for each.`,
              explain:
                `**What is being asked.** Three reporting products with different jobs, not three versions of one dashboard.\n\n**Daily operational.** Narrow, exception-led, few KPIs, routed to the person who acts today.\n\n**Weekly management.** Trends and comparisons, drill paths, decisions on resource allocation.\n\n**Monthly board.** Few pages, year-to-date, variance to plan, narrative and outlook.\n\n**The design consequence.** Refresh frequency, KPI count, level of aggregation and the amount of text change with the audience.\n\n**How to score the 5 marks.** Three cadences with audience and content (3) · the design differences (1.5) · one failure of mixing them (0.5).`,
              answer:
                `Cadence is a design decision: the same number, delivered on a different rhythm to a different reader, needs a different artefact.\n\n| | **Daily operational report** | **Weekly management pack** | **Monthly board pack** |\n|---|---|---|---|\n| **Audience** | store, shift and operations managers | functional heads and their teams | board and executive committee |\n| **Job** | act today | allocate and correct | govern and set direction |\n| **Content** | exceptions against yesterday and last week; 3–6 KPIs | trends, comparisons, drill paths, one page per function | year-to-date, variance to plan, outlook, narrative |\n| **Design** | one screen, colour only for status, no history beyond 14 days | tables plus trend charts, filters for region and product | 8–12 pages, large numbers, one message per page |\n| **Refresh** | after the overnight load, by 06:00 | Monday morning, weekly load | after month-end close, three to five working days |\n| **Failure if wrong** | an action is missed today | a wrong allocation for a week | a wrong direction for a quarter |\n\n**What changes, and why**\n1. **KPI count falls as the audience rises** — a store manager needs fifteen operational numbers, a board needs six.\n2. **Aggregation rises** — the daily report is at store and product level, the board pack at company and segment level.\n3. **Text increases** — the board pack must state what changed and what management is doing about it; a chart without a sentence leaves the interpretation to the reader.\n4. **Latency tolerance widens** — the daily report cannot wait for a late feed, so it must state what is missing; the monthly pack can wait a day for completeness.\n\n**The failure of mixing cadences.** Sending the full monthly pack daily trains readers to ignore it; sending a daily exception list to the board buries one important deviation among forty routine ones. The cadence must match the decision cycle.\n\n**The discipline to add.** Every report should name its audience, its decision and its owner in the header, and be reviewed each quarter — a report nobody opened last quarter is a cost, and should be retired rather than maintained.\n\n**Exam line:** daily to act, weekly to allocate, monthly to govern — and as the audience rises the KPI count falls, the aggregation rises and the narrative grows.`,
              diagram: `td-metrics`,
              diagramCaption:
                `Reporting cadence — daily operational, weekly management and monthly board reporting, with audience, content, design and refresh for each.`,
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
                `Explain small multiples, sparklines and heat maps — the encoding each uses, the question each answers best, and one mistake that ruins each.`,
              explain:
                `**What is being asked.** Three dense visual forms, with the encoding and the fit.\n\n**Small multiples.** The same chart repeated over categories or periods, sharing scales — comparison without clutter.\n\n**Sparklines.** A tiny trend line inside a table cell or KPI card — direction at a glance, no axes.\n\n**Heat map.** Colour across a matrix of two categories — pattern in a large grid.\n\n**The mistakes.** Inconsistent scales in small multiples, a sparkline with no baseline, and a heat map with rainbow colours or too many bins.\n\n**How to score the 5 marks.** Each form with encoding and use (3) · the mistakes (1.5) · one rule for choosing between them (0.5).`,
              answer:
                `These three forms exist because a single chart cannot show thirty categories. Each trades detail for density, and each fails in a predictable way.\n\n**Small multiples (trellis)**\n- **Encoding:** the same chart type repeated in a grid, one panel per category, with **shared axes**.\n- **Best for:** "is the same pattern happening everywhere?" — twelve months of sales for twenty stores, one panel each.\n- **Mistake:** independent axis scales. Panel A looks like a recovery and panel B like a collapse, but A ranges 10–12 and B ranges 0–200. Shared scales are the whole point; if ranges differ wildly, normalise and say so.\n\n**Sparklines**\n- **Encoding:** a line with no axes, embedded beside a number — in a table row or a KPI card.\n- **Best for:** "is this number rising or falling, without giving it a chart?" — a KPI table with 40 rows, each with its 12-month shape.\n- **Mistake:** no baseline and no endpoint marker, so a reader cannot tell whether the line ends high or low. Add a faint zero or reference line and mark the last point.\n\n**Heat maps**\n- **Encoding:** colour intensity in a matrix — rows one category, columns another, cell value mapped to colour.\n- **Best for:** "where in this grid is the pattern?" — sales by store by hour, absence by team by month; sparse exceptions stand out immediately.\n- **Mistake:** a rainbow palette and no values in the cells. Rainbow is not ordered perceptually, so readers misjudge magnitude; use one sequential palette for magnitude, a diverging palette only around a meaningful midpoint, and print values in cells when the grid is small enough.\n\n**The choosing rule**\nUse **small multiples** when the shape matters and the panels are few enough to compare; **sparklines** when the number matters and the shape is secondary; **heat maps** when both dimensions are categorical and the question is where, not why. And in all three, the colour or scale must be explained in the caption — a legend the reader has to infer is a legend that does not exist.\n\n**Exam line:** small multiples compare shapes with shared scales, sparklines show direction beside a number, heat maps show where in a grid — and each one's classic mistake is a scale or a palette that was not controlled.`,
              diagram: `vz-charts`,
              diagramCaption:
                `Small multiples with shared axes, sparklines embedded beside KPI values, and a sequential heat map across store and hour.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain five dashboard anti-patterns — with the fix for each — and use them to review a dashboard that shows nine pie charts, two dual axes and a gauge on every page.`,
              explain:
                `**What is being asked.** A critique checklist, applied to a described dashboard.\n\n**Anti-patterns.** Pie with many slices, dual axes implying a relationship, decorative gauges, data puke (everything shown), inconsistent colour meaning, no baseline, meaningless precision.\n\n**The review.** Name the fault, say what the reader wrongly concludes, and give the replacement.\n\n**How to score the 5 marks.** Five anti-patterns with fixes (3) · the applied review (1.5) · one sentence on why the checklist earns its keep (0.5).`,
              answer:
                `A dashboard is reviewed faster by naming what is wrong than by admiring what is right. Five anti-patterns cover most failures.\n\n| Anti-pattern | Why it misleads | Fix |\n|---|---|---|\n| **Pie with many slices** | the eye compares angles badly; nine slices make every difference invisible | a sorted bar chart; a pie only for two or three parts of a whole |\n| **Dual axes** | two scales on one chart imply a causal link that may not exist | two aligned charts sharing the x-axis, or index both to 100 |\n| **Decorative gauges** | a dial spends a large area to show one number and hides the trend | a KPI card: value, change, target, sparkline |\n| **Data puke** | forty visuals mean no visual, so nothing is read | one screen, one question, KPI band plus two charts and an exception list |\n| **Colour without meaning** | red in one chart means "down", in another "forecast" | one status palette: red bad, amber watch, green good, grey neutral, used nowhere else |\n\n**Two more worth listing** — a chart with a truncated y-axis that exaggerates a 2 percent change, and values printed to four decimals when decisions are taken at whole units.\n\n**Reviewing the described dashboard: nine pies, two dual axes, a gauge on every page**\n1. The nine pies become **two sorted bar charts** — one for composition of the top five categories, one for comparison across regions — because comparison is what the reader is doing.\n2. The dual axes are **split into two aligned charts or indexed to 100**, with a note that correlation is not shown.\n3. The gauges become **KPI cards with trend and target**; a gauge cannot show whether the number is improving.\n4. Four pages become **one screen with a KPI band on top**, exceptions in the middle, detail on demand — the test is whether the top three facts are visible in five seconds.\n5. The colour legend becomes **one consistent status palette**, and every chart states its period, filter and refresh time, because a dashboard with an unknown period invites the wrong conclusion.\n\n**Why this earns marks.** The examiner is testing whether the candidate can judge design, not only describe it — every anti-pattern named should come with the wrong conclusion it produces.\n\n**Exam line:** pies, dual axes, gauges and data puke all fail the same test — can the reader compare, see direction and act in five seconds? Fix by sorting, aligning, simplifying and reserving colour for status.`,
              diagram: `vz-dashboard`,
              diagramCaption:
                `Dashboard anti-patterns and their fixes — many-slice pie, dual axes, decorative gauge, data puke and colour without meaning, beside the corrected one-screen layout.`,
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
                `Explain how an AI-assisted dashboard is generated from a natural-language question — the pipeline, the role of the semantic layer, and the evaluation that decides whether the answer can be shown to a business user.`,
              explain:
                `**What is being asked.** A pipeline from question to rendered dashboard, with the checks that make it trustworthy.\n\n**Steps.** Parse intent and time range → map terms to certified metrics and dimensions in the semantic layer → generate SQL or a chart spec → validate against the model → execute with the user's permissions → render → narrate.\n\n**The semantic layer.** Terms, synonyms, units, additivity and default aggregations — without it the model guesses definitions.\n\n**Evaluation.** Numeric grounding, execution success, chart fit, permission correctness, and a comparison with a hand-written query.\n\n**How to score the 5 marks.** The pipeline as steps (2.5) · the semantic layer's role (1.5) · evaluation and one failure mode (1).`,
              answer:
                `"Show me last quarter's margin by region, and where it fell" can be answered by a system today — but only if the system is anchored to certified definitions.\n\n**The pipeline**\n1. **Intent parsing** — the model extracts the metric (margin), dimensions (region), time range (last quarter) and comparison (fall versus what?).\n2. **Semantic resolution** — each term is mapped to a certified metric, not to a free-text column: *margin* becomes \`(net_sales - cogs) / net_sales\`, with the agreed synonyms \`profitability\`, \`margin percent\`.\n3. **Query generation** — the model writes SQL or a chart specification against the semantic model, using the measure's stated additivity.\n4. **Validation** — syntax check, permission check, row-limit check, and a rule that unknown terms are refused rather than guessed.\n5. **Execution** — runs under the requesting user's row-level security, so the answer cannot leak a region they cannot see.\n6. **Rendering and narrative** — a chart type chosen from the question shape, then two sentences naming the largest movement — grounded in the returned rows.\n\n**Why the semantic layer is the whole answer.** A raw text-to-SQL model over physical tables will happily join the wrong table and produce a plausible number. A semantic layer supplies the business name, the formula, the default aggregation, the additivity rule and the row-level security in one place, so the model's job shrinks from "understand the warehouse" to "translate a question into the agreed vocabulary".\n\n**Evaluation before showing it to a user**\n\n| Check | Question |\n|---|---|\n| **Numeric grounding** | does every number in the narrative appear in the result set? |\n| **Execution** | did the query run, and in an acceptable time? |\n| **Definition** | was the certified metric used, or a lookalike column? |\n| **Permission** | is the result within the user's allowed rows? |\n| **Chart fit** | is a line used for a trend and a bar for a comparison? |\n\n**The failure mode to name.** The dangerous output is not an error but a confident answer to a slightly different question — "last quarter" resolved as the calendar quarter when the company reports on a fiscal year starting in April. The fix is a visible assumption line: *using fiscal Q2 (Jul–Sep)*, which the user can correct in one click.\n\n**Exam line:** parse, resolve against certified metrics, generate, validate, execute under the user's permissions, render and narrate — with the semantic layer as the contract and grounding as the test.`,
              diagram: `vz-ai`,
              diagramCaption:
                `An AI-assisted dashboard pipeline from natural-language question through semantic resolution, query generation, validation and grounded narrative.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain self-service governance — certified datasets, row-level security, usage monitoring and metric sprawl — and state three rules that keep self-service from producing a second version of the truth.`,
              explain:
                `**What is being asked.** How to let users build their own reports without losing control of definitions and access.\n\n**Certified datasets.** A promoted, tested dataset endorsed for reuse; anything else is personal.\n\n**Row-level security.** The rule travels with the dataset, so a self-built report cannot exceed the builder's rights.\n\n**Usage monitoring.** Which reports are used, by whom, and which certified datasets are actually adopted.\n\n**Metric sprawl.** Hundreds of near-duplicate measures when anyone can define one.\n\n**How to score the 5 marks.** The four controls (3) · three rules (1.5) · one consequence of doing nothing (0.5).`,
              answer:
                `Self-service BI gives the business the speed it asked for and, without rules, gives it five definitions of margin. Governance here is light-touch, not a queue at IT.\n\n**Four controls**\n\n| Control | What it means | What it prevents |\n|---|---|---|\n| **Certified dataset** | a promoted, tested dataset with an owner, endorsed for reuse; uncertified work stays personal | everyone re-deriving the same joins and filters |\n| **Row-level security in the dataset** | the security rule is part of the model, so any report built on it inherits the filter | a self-built report leaking salary or region data |\n| **Usage monitoring** | telemetry on views, users and refresh failures, reviewed monthly | building reports nobody opens; certified datasets that are never adopted |\n| **Metric definition register** | new measures are requested, and go into the shared model with a formula and owner | metric sprawl — \`margin\`, \`margin_2\`, \`margin_final\` |\n\n**Metric sprawl, concretely.** A finance analyst needs a margin percent that excludes returns. Nothing stops them creating \`margin_pct_ex_returns\` in a personal report; a month later four variants exist, each differs by up to two points, and the board sees the one that was emailed last. The register prevents this by making the change a request against the shared model, so the definition improves once for everyone.\n\n**Three rules that hold the line**\n1. **Anything shown outside a team must come from a certified dataset** — personal work is fine, but the moment it is shared upward it is promoted, tested and owned.\n2. **Security is defined in the dataset, never in the report** — a report can be copied; the data rule must travel with it.\n3. **One metric, one definition, one owner** — a new variant requires a stated reason and replaces the old one, rather than sitting beside it.\n\n**The trade-off to state honestly.** Over-governance kills self-service: if every chart needs approval, users return to spreadsheets, and the data leaves the governed platform entirely. The balance is to certify a small core and leave exploration free inside it.\n\n**Exam line:** certify the core, carry security in the model, watch usage, and register definitions — so the business can build freely without building a second truth.`,
              diagram: `vz-interactive`,
              diagramCaption:
                `Self-service governance — certified datasets, row-level security inside the model, usage telemetry and a metric register around free exploration.`,
            },
          ],
        },
      ],
    },
  ],
};


