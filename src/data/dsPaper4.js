// Data Science Paper 4 — Model Paper (6 + 4 division)
//
// Second 6 + 4 paper: every question is (a) 6 + (b) 4, with a 6 + 4 OR set.
//
// Topic map (all different from Papers 1, 2 and 3):
//   Unit 1 — 1.2 data formats, 1.2 the DIKW hierarchy, 1.12 types of analytics,
//            1.8 data science versus business intelligence
//   Unit 2 — 2.6 data warehouse architecture, 2.10 OLAP operations,
//            2.9 designing a star schema for a case, 2.8 grain of a fact table
//   Unit 3 — 3.8 SVM kernels, 3.9 multi-class confusion matrix,
//            3.5 naive Bayes for text, 3.10 macro and micro averaged metrics
//   Unit 4 — 4.5 choosing k, 4.4 reading a dendrogram, 4.9 lift and conviction,
//            4.3 PAM in practice
//   Unit 5 — 5.4 generations of BI, 5.7 distribution charts, 5.9 tool choice,
//            5.7 mobile and wallboard design

export const dsPaper4 = {
  id: 'ds-paper-4',
  number: 4,
  name: 'Paper 4',
  tag: 'Data Science',
  session: 'Model Paper · 6 + 4 division',
  board: 'M.C.A. (Management)',
  semester: 'Model Paper',
  pattern: 'University pattern · 50 marks',
  subjectCode: 'DS',
  subjectName: 'Data Science',
  totalMarks: 50,
  time: '2½ Hours',
  totalQuestions: 5,
  instructions: [
    'All questions are compulsory.',
    'Every question carries 10 marks, divided as (a) 6 marks + (b) 4 marks.',
    'Attempt any one set in each question — either (a) and (b), or (c) and (d).',
    'Figures to the right indicate full marks.',
    'Draw neat diagrams wherever necessary.',
    'Answers must be written in English.',
  ],
  questions: [
    {
      number: 1,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Explain the common data formats — CSV, JSON, XML, Parquet and Avro — and state how the choice of format affects storage, speed and schema handling.',
              explain:
                '**What is being asked.** A practical question. The examiner wants each format described and then three consequences: storage size, read speed and whether the schema is fixed, embedded or absent.\n\n**The formats.** CSV — plain text, row per line, no types. JSON — nested, self-describing, common for APIs. XML — verbose markup with a schema (XSD) available. Parquet — columnar binary with embedded schema and compression. Avro — row-based binary with a schema registry, used in streaming.\n\n**The consequences.** Columnar formats are far smaller and much faster when a query reads a few columns out of many; row formats are better when the whole record is read at once. Schema handling decides whether a new field breaks the pipeline.\n\n**How to score the 6 marks.** Five formats (3) · the three consequences (2) · one recommendation for a warehouse (1).',
              answer:
                'Data arrives in a small number of formats, and the format decides how cheaply it can be stored and queried.\n\n| Format | Structure | Schema | Typical use |\n|---|---|---|---|\n| **CSV** | rows of comma-separated text | none — every field is text | exports, spreadsheet exchange, small files |\n| **JSON** | nested key–value objects | self-describing, flexible | APIs, log events, document stores |\n| **XML** | tags with nesting | can be validated against an XSD or DTD | enterprise integration, legacy systems, configuration |\n| **Parquet** | columnar binary, compressed | embedded | analytics tables, data lakes, warehouse storage |\n| **Avro** | row-based binary | embedded, managed by a schema registry | streaming pipelines where the schema evolves |\n\n**How the choice affects the work**\n1. **Storage** — CSV and JSON are text and uncompressed, so they are several times larger; Parquet compresses column-wise and typically stores the same data in a fraction of the space.\n2. **Read speed** — a columnar file reads only the columns a query needs, so an aggregation over two columns of a hundred is dramatically faster; a row format reads the whole record even when one field is required.\n3. **Schema handling** — CSV has no types, so a date and an amount are both text until they are parsed, and a shifted delimiter breaks the file silently; JSON and Avro carry the schema, so a new field does not break the reader; Parquet embeds the schema in the file.\n4. **Write pattern** — row formats suit appending a whole record, columnar formats suit bulk analytical reads rather than single-row updates.\n\n**The recommendation.** Land raw data as it arrives, but store analytical tables in a columnar format such as Parquet inside the lake or warehouse; keep JSON for APIs and events, and treat CSV as an exchange format, not a storage format for a data platform.\n\n**Exam line:** CSV has no schema, JSON and XML carry one, Parquet compresses by column and reads only what is asked — the format is a performance decision, not a preference.',
              diagram: 'data-formats',
              diagramCaption:
                'Common data formats — CSV, JSON, XML, Parquet and Avro — compared on structure, schema and typical use.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain the DIKW hierarchy — data, information, knowledge and wisdom — with one example at each level.',
              explain:
                '**What is being asked.** A short conceptual question: each level adds interpretation to the one below.\n\n**The levels.** Data — raw symbols with no context (a value 42). Information — data with context (42 degrees at 2 p.m. in Pune). Knowledge — a pattern or rule derived from information (afternoons in May are hot enough to need cooling). Wisdom — judgement about what to do (schedule maintenance in the morning, and size the cooling capacity accordingly).\n\n**How to score the 4 marks.** Four levels with examples (3) · the value-added statement (1).',
              answer:
                'The **DIKW hierarchy** describes how raw symbols become a decision.\n\n| Level | Definition | Example |\n|---|---|---|\n| **Data** | raw symbols with no context | 42 |\n| **Information** | data with context — who, where, when | 42 degrees at 2 p.m. in Pune on 12 May |\n| **Knowledge** | a pattern or rule derived from information | May afternoons in Pune exceed 40 degrees every year |\n| **Wisdom** | judgement about what to do with the knowledge | run the cooling maintenance in April, and size the plant for a 42 degree afternoon |\n\n**What each level adds.** Context makes data into information; pattern makes information into knowledge; judgement makes knowledge into wisdom. A dashboard usually delivers information, a model usually delivers knowledge, and a decision is where wisdom sits — which is why the human is not removed by the model.\n\n**The practical use.** The hierarchy is a diagnostic for a weak project: a report full of numbers with no context is data; a chart with a comparison is information; an explanation of why the number moved is knowledge; and a recommendation with a cost is wisdom. A data product that stops at the second level will be admired and not used.\n\n**Exam line:** data is a number, information is the number with context, knowledge is the pattern, wisdom is the decision.',
              diagram: 'dikw',
              diagramCaption:
                'The DIKW hierarchy from raw data to wisdom, with an example at each level of added context and judgement.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Explain the four types of analytics — descriptive, diagnostic, predictive and prescriptive — with one question and one technique for each.',
              explain:
                '**What is being asked.** Analytics is classified by the question it answers and the value it adds.\n\n**The four.** Descriptive — what happened (dashboards, aggregation). Diagnostic — why it happened (drill-down, correlation, root-cause analysis). Predictive — what will happen (regression, classification, forecasting). Prescriptive — what should be done (optimisation, simulation, recommendation, experiment design).\n\n**The progression.** The value rises and the difficulty rises together; most organisations are strong in the first two and weak in the last two.\n\n**How to score the 6 marks.** Four types with the question and a technique (4) · the maturity argument (1) · one example per type (1).',
              answer:
                'Analytics is classified by the question it answers, and each level depends on the one before it.\n\n| Type | Question | Techniques | Example |\n|---|---|---|---|\n| **Descriptive** | what happened? | aggregation, dashboards, KPIs, segmentation | last quarter revenue by region |\n| **Diagnostic** | why did it happen? | drill-down, correlation, root-cause analysis, attribution | the drop came from one product line and one channel |\n| **Predictive** | what will happen? | regression, classification, time-series forecasting | expected revenue next quarter, and which customers will churn |\n| **Prescriptive** | what should we do? | optimisation, simulation, recommendation, A/B testing | how much stock to hold in each warehouse, and which offer to send |\n\n**How they depend on each other.** A prediction is worthless without a reliable description of the past, and a recommendation is unsafe without a validated prediction. This is why the maturity of an analytics function is measured by the highest level it can support with confidence, not by the number of dashboards.\n\n**Where organisations usually stand.** Most are strong in descriptive and reasonably strong in diagnostic; predictive is common in pockets, and prescriptive is rare because it requires a model, a decision rule, a cost function and the authority to act. The gap is usually process and trust, not mathematics.\n\n**The point that earns the last two marks.** Prescriptive analytics is the only level that changes a decision automatically — and therefore the only level that needs a control group, an audit trail and a rollback plan. The value is highest and so is the risk of automating a mistake.\n\n**Exam line:** describe, diagnose, predict, prescribe — the question rises, the value rises, and so does the need for a control.',
              diagram: 'analytics',
              diagramCaption:
                'The four types of analytics — descriptive, diagnostic, predictive and prescriptive — with the question and technique of each.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Compare data science with business intelligence on six points, and state where the two functions should collaborate.',
              explain:
                '**What is being asked.** A short comparison plus a collaboration point.\n\n**The six points.** Question, data, method, output, consumer and skill. **The collaboration.** BI supplies the trusted, described data and the historical context; data science supplies the model and the validation; both share the metric definitions, and neither can work without a governed warehouse.\n\n**How to score the 4 marks.** Six points of comparison (3) · the collaboration statement (1).',
              answer:
                '| Point | Business intelligence | Data science |\n|---|---|---|\n| Question | what happened | what will happen, and what to do |\n| Data | structured, internal, historical | mixed, often external and messy |\n| Method | aggregation, reporting, visualisation | statistics, machine learning, experiments |\n| Output | report, dashboard, KPI | model, score, prediction, experiment result |\n| Consumer | managers and operational staff | product teams, decision makers, automated systems |\n| Skill | SQL, visualisation, business understanding | programming, statistics, modelling |\n\n**Where they collaborate**\n1. **Shared metric definitions** — both functions must read "revenue" and "active customer" the same way, or two dashboards and one model will disagree.\n2. **The warehouse as a base** — data science uses the governed star schema that BI reporting already trusts, which saves months of cleaning.\n3. **Context for the model** — BI explains the history that the model must reproduce; a model that cannot explain last quarter is probably wrong.\n4. **Monitoring in production** — the same dashboard can carry model accuracy and drift beside the business KPI it is meant to move.\n\n**The closing line.** BI answers the question that has been asked; data science answers the question that has not been asked yet — and the second is only credible when it stands on the first.\n\n**Exam line:** BI describes, data science predicts — they share the definitions, the warehouse and the monitoring.',
              diagram: 'ds-vs-fields',
              diagramCaption:
                'Data science compared with business intelligence on six points, and the areas where the two functions must collaborate.',
            },
          ],
        },
      ],
    },
    {
      number: 2,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Explain the architecture of a data warehouse — source, staging, warehouse, data marts and presentation — and compare the top-down and bottom-up approaches.',
              explain:
                '**What is being asked.** An architecture question with two design traditions.\n\n**The layers.** Source systems → ETL → staging → warehouse (central, normalised or dimensional) → data marts → presentation and reporting. Metadata and data quality run across all layers.\n\n**The approaches.** Top-down (Inmon) — build the central warehouse first, then the marts; consistent but slow and expensive. Bottom-up (Kimball) — build departmental marts first and integrate them; fast value but a consistency risk. Today: lakehouse hybrids.\n\n**How to score the 6 marks.** Layers with the job of each (4) · both approaches with the trade-off (2).',
              answer:
                'A data warehouse architecture is a set of layers, each with a single job, connected by pipelines.\n\n| Layer | Job |\n|---|---|\n| **Source** | operational databases, SaaS applications, files, logs, streams — where the data is created |\n| **Staging** | a raw, temporary landing area where data is validated before it touches the warehouse |\n| **Warehouse** | the integrated, historical, subject-oriented store — the single version of the facts |\n| **Data marts** | department-sized views (finance, sales, supply chain) built from the warehouse for a specific audience |\n| **Presentation** | BI tools, dashboards, reports, and the model or API that consumes the data |\n| **Metadata and quality** | definitions, lineage, data quality rules and test results, running across every layer |\n\n**Why staging exists.** Raw data is unpredictable: a file arrives with a changed delimiter, a column has the wrong type, a table is half-loaded. The staging area absorbs that uncertainty so that the warehouse only ever receives validated data.\n\n**Top-down versus bottom-up**\n\n| Point | Top-down (Inmon) | Bottom-up (Kimball) |\n|---|---|---|\n| Order | central warehouse first, then marts | departmental marts first, then integrate |\n| Strength | one consistent model, no conflicting definitions | fast, visible value for one department |\n| Weakness | slow and expensive before anything is delivered | marts drift apart and need re-integration |\n| Typical shape | normalised enterprise warehouse | dimensional star schemas per business process |\n\n**Today.** The common pattern is a hybrid: land everything in a data lake, build a governed warehouse or lakehouse layer with conformed dimensions, and serve marts on top. The lakehouse keeps the flexibility of the lake and the governance of the warehouse, and it is what most cloud platforms now provide.\n\n**Exam line:** source, staging, warehouse, marts, presentation — top-down for consistency, bottom-up for speed, hybrid for both.',
              diagram: 'ds-dw-architecture',
              diagramCaption:
                'Data warehouse architecture from source to presentation, with the top-down and bottom-up approaches compared.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain the five OLAP operations — roll-up, drill-down, slice, dice and pivot — with one query example each.',
              explain:
                '**What is being asked.** A short operational question. Each operation transforms the cube in a named way.\n\n**The operations.** Roll-up aggregates up a hierarchy; drill-down goes down; slice fixes one dimension; dice selects a sub-cube by ranges on two or more; pivot rotates the axes.\n\n**How to score the 4 marks.** Five operations with an example (3) · the hierarchy note (1).',
              answer:
                'An OLAP cube can be transformed in five standard ways, each answering a different analytical question.\n\n| Operation | What it does | Query example |\n|---|---|---|\n| **Roll-up** | aggregates upward along a hierarchy | sales by month grouped into quarter and year |\n| **Drill-down** | moves to finer detail | from yearly sales to monthly, then to daily |\n| **Slice** | fixes one dimension to a single value | sales where year = 2025 |\n| **Dice** | selects a sub-cube by ranges on two or more dimensions | year in (2025, 2026), region in (north, west), category = beverages |\n| **Pivot** | rotates the cube so rows become columns | products as rows rearranged as columns by month |\n\n**Why the operations depend on a hierarchy.** Roll-up and drill-down are only meaningful when a dimension has defined levels — day, month, quarter, year; city, state, region, country. The hierarchy is part of the dimension design, not an afterthought.\n\n**How it is written in SQL.** `ROLLUP()`, `CUBE()` and `GROUPING SETS` produce roll-up and dice results from a star schema without a separate cube server, which is why dimensional modelling survives in the cloud era.\n\n**Exam line:** roll-up coarsens, drill-down refines, slice fixes one dimension, dice selects a sub-cube, pivot rotates — all of them rest on the hierarchies defined in the dimensions.',
              diagram: 'ds-olap-oltp',
              diagramCaption:
                'The five OLAP operations on a cube — roll-up, drill-down, slice, dice and pivot — with a query example each.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Design a star schema for a retail chain that wants to analyse sales by product, store, customer and time. State the grain, the dimensions, the measures and two queries the schema supports.',
              explain:
                '**What is being asked.** An applied design question. The examiner wants a decision on grain first, then four dimensions, then the measures, then the queries — and the design must be justified.\n\n**The grain.** One row per order line, because a line carries one product and one quantity, and an order with three products becomes three rows.\n\n**The dimensions.** Date, product, store, customer, plus a degenerate order number and optionally a promotion dimension.\n\n**The measures.** Quantity, unit price, discount, net amount, cost — additive where possible.\n\n**How to score the 6 marks.** Grain decided and justified (1) · four dimensions with their attributes (2) · measures (1) · two queries (2).',
              answer:
                '**Step 1 — the grain.** One row per **order line**. An order with three products becomes three fact rows, so every measure can be sliced by product; an order-level grain would make a product report impossible without double counting.\n\n**Step 2 — the dimensions**\n\n| Dimension | Key | Attributes |\n|---|---|---|\n| **Dim_Date** | date_key | day, month, quarter, year, weekday, is_holiday, fiscal_period |\n| **Dim_Product** | product_key | name, category, sub_category, brand, price_band, supplier |\n| **Dim_Store** | store_key | store_name, city, state, region, store_type, opening_date |\n| **Dim_Customer** | customer_key | name, segment, city, loyalty_tier, join_date |\n\nPlus a degenerate dimension `order_number` on the fact table, and an optional Dim_Promotion if campaign analysis is required.\n\n**Step 3 — the fact table.** Fact_Sales: date_key, product_key, store_key, customer_key, order_number, quantity, unit_price, discount_amount, net_amount, cost_amount, gross_margin.\n\n**Step 4 — two queries the schema supports**\n1. **Category performance by quarter and region** — join Fact_Sales to Dim_Product, Dim_Date and Dim_Store; filter category = beverages; group by quarter and region; sum net_amount. This is the standard roll-up.\n2. **Customer segment contribution by store for the festive period** — join to Dim_Customer, Dim_Store and Dim_Date; filter is_holiday = true; group by segment and store; sum net_amount and gross_margin; rank by margin.\n\n**Step 5 — the design checks**\n- **Additive** — quantity, net amount and cost add up across every dimension, so they can be summed at any level.\n- **Non-additive** — unit price and discount percentage must be recomputed from the amounts, not summed.\n- **Grain consistency** — every measure is defined at the order-line grain; a target kept at the store-month level belongs in a separate fact table, not in this one.\n\n**Exam line:** grain first — one row per order line — then four dimensions, additive measures, and a fact table that can answer both a roll-up and a slice.',
              diagram: 'ds-star-schema',
              diagramCaption:
                'A retail star schema designed from the grain up — fact table, four dimensions, measures and the queries it supports.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain the grain of a fact table. Why must it be declared first, and what goes wrong when two grains are mixed in one table?',
              explain:
                '**What is being asked.** A short design-principle question.\n\n**The grain.** The definition of one fact row — per order line, per day per store, per visit. **Why first.** Every later decision — dimensions, additivity, which queries are possible — follows from it. **What goes wrong.** Mixing a line-level measure and a header-level measure in one table makes totals double count, and a ratio becomes meaningless.\n\n**How to score the 4 marks.** Definition with an example (1) · why first (1) · the failure mode (2).',
              answer:
                'The **grain** of a fact table is the definition of what one row represents — "one row per order line", "one row per day per store", "one row per customer visit".\n\n**Why it must be declared first.** The grain decides which dimensions can be attached (a line-level fact can carry product; a store-day fact cannot), which measures are additive, and which questions the table can answer. A grain chosen late cannot be repaired by aggregation, because a total is only valid at the grain at which it was stored.\n\n**What goes wrong when two grains are mixed**\n1. **Double counting** — an order header amount stored beside line-level quantity is repeated on every line, so a sum over lines counts the same order total three times for a three-line order.\n2. **Meaningless ratios** — revenue per unit calculated as header revenue divided by line quantity gives a different answer on every line of the same order.\n3. **Impossible slices** — a store-level target stored in a product-level fact cannot be grouped by product, and any attempt produces a duplicated total.\n4. **Metric disputes** — two reports aggregate the same column at different grains and disagree, which destroys trust in the warehouse.\n\n**The correct pattern.** Keep one grain per fact table: Fact_Sales at order-line grain, and a separate Fact_Target at store-month grain. Conformed dimensions connect them, and a query joins them only at the level they share, such as store and month.\n\n**Exam line:** the grain is what one row means — declare it first, keep one grain per fact table, and never store a header total beside a line detail.',
              diagram: 'ds-fact-dim',
              diagramCaption:
                'The grain of a fact table — why it is declared first, and the double counting that follows when two grains are mixed.',
            },
          ],
        },
      ],
    },
    {
      number: 3,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Explain the kernel trick in support vector machines. Compare linear, polynomial and RBF kernels, and state how the parameters C and gamma change the boundary.',
              explain:
                '**What is being asked.** The kernel is how an SVM handles non-linear data without an explicit mapping. The examiner wants the idea, the three kernels and the effect of the two parameters.\n\n**The trick.** A kernel function returns the inner product of two points in a higher-dimensional space, so the algorithm can work as if the data had been mapped there, at the cost of evaluating a function on the original coordinates.\n\n**The kernels.** Linear — no mapping, good for high-dimensional sparse data. Polynomial — curved boundary, degree controls flexibility. RBF — a local kernel that can form closed boundaries, the usual default.\n\n**The parameters.** C — the penalty for misclassification: high C fits the training data tightly, low C smooths. Gamma — the reach of a single training point: high gamma makes each point influential locally (overfit), low gamma smooths and can underfit.\n\n**How to score the 6 marks.** The trick explained (2) · three kernels (2) · C and gamma (2).',
              answer:
                '**The kernel trick.** An SVM needs only the inner product between pairs of points, not their coordinates. A kernel function K(x, z) returns the inner product that those two points *would* have if they had been mapped into a higher-dimensional space — so the algorithm behaves as if the data were projected into a space where a linear boundary separates the classes, while every computation stays in the original space. Without the trick, an explicit mapping into a thousand dimensions would be prohibitive; with it, the cost is one function evaluation per pair.\n\n| Kernel | Boundary it produces | When to use |\n|---|---|---|\n| **Linear** | a straight line or plane | text and high-dimensional sparse data, already nearly separable |\n| **Polynomial** | curved, the degree controls flexibility | interaction effects, image-like features; risks numerical instability at high degree |\n| **RBF (Gaussian)** | flexible, local, can form closed regions around a cluster | the default for a non-linear problem with no other information |\n| **Sigmoid** | resembles a neural layer | rarely used, not always a valid kernel |\n\n**The two parameters**\n- **C (regularisation)** — how hard a misclassification is penalised. A large C produces a narrow margin that fits almost every training point, which risks overfitting; a small C tolerates errors and gives a wider, smoother margin.\n- **Gamma (RBF only)** — how far the influence of a single point reaches. A large gamma makes each point influential only very near itself, so the boundary wraps around individual points (overfitting); a small gamma smooths the boundary and can underfit.\n\n**The intuition to state.** C controls how much the model is allowed to be wrong on the training data, and gamma controls how wiggly the boundary may be. They are tuned together by grid search with cross-validation, and a good pair is one where both training and validation accuracy are high — a large gap means the boundary has memorised.\n\n**Exam line:** a kernel computes a higher-dimensional inner product without the mapping — linear for text, RBF by default, C for tolerance and gamma for reach.',
              diagram: 'ds3-svm',
              diagramCaption:
                'The kernel trick with linear, polynomial and RBF kernels, and the effect of C and gamma on the decision boundary.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain how a confusion matrix is extended to more than two classes, and how micro and macro averages differ.',
              explain:
                '**What is being asked.** A short extension question. With k classes the matrix becomes k×k, precision and recall are computed per class (one-vs-rest), and they are then averaged.\n\n**Micro versus macro.** Micro pools all the cells — equivalent to accuracy for single-label problems — and is dominated by the frequent classes. Macro averages the per-class scores equally, so a rare class counts as much as a common one.\n\n**How to score the 4 marks.** k×k matrix and per-class computation (2) · micro versus macro (2).',
              answer:
                'For **k classes** the confusion matrix becomes k × k: the rows are the actual classes and the columns the predicted ones, and the diagonal holds the correct predictions.\n\n**Per-class metrics.** Each class is treated as "this class" against "everything else":\n- Precision for class c = correct predictions of c / all predictions of c (the column).\n- Recall for class c = correct predictions of c / all actual c (the row).\n- F1 for class c = the harmonic mean of the two.\n\n**Micro average.** Pool the counts across all classes — sum the true positives, the false positives and the false negatives — and compute one precision and one recall from the totals. Every instance counts once, so the score is dominated by the large classes and, for single-label classification, micro-F1 equals accuracy.\n\n**Macro average.** Compute precision and recall separately for each class, then take the plain mean of the per-class values. Every class counts equally, so a rare class that performs badly pulls the score down visibly.\n\n| Average | What it emphasises | Use when |\n|---|---|---|\n| **Micro** | overall volume of correct decisions | the business cares about total errors, classes are balanced |\n| **Macro** | performance on every class equally | a rare class matters — fraud among genuine transactions, a rare disease |\n| **Weighted** | per-class scores weighted by support | a compromise that reflects the real class mix |\n\n**The reporting rule.** State which average was used. A model with 0.95 micro-F1 and 0.62 macro-F1 is excellent on the common classes and weak on the rare ones — and that sentence is the finding.\n\n**Exam line:** a k × k matrix, one-vs-rest per class, micro pools the counts and macro weights every class equally — so always say which average the number is.',
              diagram: 'ds3-confusion-matrix',
              diagramCaption:
                'The confusion matrix extended to multiple classes, with the difference between micro and macro averaged metrics.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Explain naive Bayes for text classification — the multinomial model, smoothing, and the steps to classify a new document. State two limitations.',
              explain:
                '**What is being asked.** An applied version of naive Bayes, used on text.\n\n**The model.** Multinomial naive Bayes counts word occurrences per class and multiplies the likelihood of each word in the document by the class prior.\n\n**Smoothing.** Laplace add-one smoothing prevents a zero when a word has never been seen in a class, because one zero in the product erases the entire score.\n\n**The steps.** Build the vocabulary, count word frequencies per class, compute priors, compute likelihoods with smoothing, sum logs for the new document, pick the largest.\n\n**Limitations.** The independence assumption; no notion of word order or negation; poor probability calibration; sensitivity to vocabulary size.\n\n**How to score the 6 marks.** Multinomial model (2) · smoothing with the reason (1) · the classification steps (2) · two limitations (1).',
              answer:
                '**Multinomial naive Bayes** classifies a document by treating it as a bag of words and asking which class most probably produced that bag.\n\n**The model.** For a class c, P(c | document) is proportional to P(c) × the product over every word w in the document of P(w | c), where P(w | c) is the word frequency in that class divided by the total word count of the class.\n\n**Steps to classify a new document**\n1. **Build the vocabulary** from the training documents, and decide on tokenisation and stop-word removal.\n2. **Count** the occurrences of each word in each class.\n3. **Priors** — P(c) = documents of class c / total documents.\n4. **Likelihoods** — P(w | c) = (count of w in c + α) / (total words in c + α × vocabulary size), the Laplace-smoothed form with α = 1.\n5. **Score** the document in log space: log P(c) + Σ log P(w | c) over the words that appear, so that multiplication of many small numbers becomes a sum.\n6. **Predict** the class with the highest score.\n\n**Why smoothing is mandatory.** Without it, a word that never appeared in a class has a likelihood of 0, and one unseen word zeroes the whole product — so every document containing a new word would be misclassified. Adding α to every count gives the unseen word a small non-zero probability.\n\n**Worked mini example.** 60 percent spam. "free" appears 40 times in spam (of 400 words) and 2 times in ham (of 400); with α = 1 and a vocabulary of 1,000, P(free | spam) = 41 / 1,400 ≈ 0.029 and P(free | ham) = 3 / 1,400 ≈ 0.002. The ratio of the two likelihoods is about 14, which the prior only partly offsets.\n\n**Two limitations**\n1. **No word order or context** — "not good" and "good" carry the same evidence, which is why negation handling or a modern embedding model is used when sentiment matters.\n2. **Independence is false** — correlated words double-count evidence, so the probabilities are badly calibrated even when the ranking is right; the score should be used for ranking, not quoted as a probability.\n\n**Exam line:** count the words, smooth the zeros, add the logs and pick the class — naive Bayes ranks text well and cannot see a negation.',
              diagram: 'ds3-naive-bayes',
              diagramCaption:
                'Multinomial naive Bayes for text — priors, smoothed likelihoods, logsum scoring and the limitations of the model.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain the classification workflow end to end — from the business question to a monitored model — naming the decision to be taken at each step.',
              explain:
                '**What is being asked.** A process question applied to classification, with the decision at each stage.\n\n**The steps.** Frame the question and the metric; build the labelled dataset; split train, validation and test; choose a baseline; train candidate models; tune with cross-validation; evaluate on the test set with the right metric; set the threshold from the cost of errors; deploy behind a decision; monitor drift and retrain.\n\n**The decision at each step.** The metric, the label definition, the split ratio, the baseline, the algorithm, the hyper-parameters, the threshold, the rollout plan.\n\n**How to score the 4 marks.** Steps in order (2) · the decisions (2).',
              answer:
                'A classification project is a sequence of decisions, not a sequence of algorithms.\n\n| Step | Decision to be taken |\n|---|---|\n| **1. Frame the question** | which decision the model supports, and which metric measures it — accuracy is rarely the right one |\n| **2. Define the label** | what exactly counts as "churned" or "fraudulent", and over what window |\n| **3. Build the dataset** | the features available at prediction time, and the class balance |\n| **4. Split the data** | train, validation and test — and a time-based split if the data is temporal, so that future data is not used to predict the past |\n| **5. Establish a baseline** | the rule, the current process or the majority class that the model must beat |\n| **6. Train and tune** | the algorithm and the hyper-parameters, chosen by cross-validation on the training data only |\n| **7. Evaluate** | one look at the test set with the metric chosen in step 1, plus the confusion matrix |\n| **8. Set the threshold** | from the cost of a false positive against a false negative, not from the default 0.5 |\n| **9. Deploy** | batch, API or embedded; who acts on the score and what happens to a rejected case |\n| **10. Monitor** | accuracy against the realised outcome, input drift, and a retraining trigger |\n\n**The three rules that keep it honest**\n1. **Never touch the test set twice** — a metric that informed a decision is no longer an unbiased estimate.\n2. **Beat a baseline** — a model with 0.80 AUC is only interesting if the current process scores 0.72.\n3. **Monitor the inputs and the outcome** — a model that was accurate at launch can drift within weeks when customer behaviour changes.\n\n**Exam line:** question, label, split, baseline, model, metric, threshold, deploy, monitor — the algorithm is one row of the table.',
              diagram: 'ds3-metrics-prf',
              diagramCaption:
                'The classification workflow from business question to monitored model, with the decision taken at each step.',
            },
          ],
        },
      ],
    },
    {
      number: 4,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Explain how the number of clusters is chosen in practice — the elbow method, the silhouette score, the gap statistic and business validation.',
              explain:
                '**What is being asked.** A decision question: k is not discovered by one formula, it is triangulated.\n\n**The methods.** Elbow — WCSS against k, look for the bend. Silhouette — mean separation score per point, peaks at a good k. Gap statistic — compare the observed WCSS with that of random data. Business validation — are the segments actionable and stable?\n\n**The practice.** Plot the elbow, compute the silhouette, check that the clusters are stable across samples and seeds, then check that the business can act on the segments.\n\n**How to score the 6 marks.** Four methods (4) · the triangulation argument (1) · the stability check (1).',
              answer:
                'The number of clusters is a modelling and business decision, and no single number proves it. Four methods are used together.\n\n**1. The elbow method.** Plot WCSS against k and look for the point where the fall slows. It is cheap and visual, but the bend is often soft, so it narrows the range rather than fixing k.\n\n**2. The silhouette score.** For every point, compare its mean distance inside its cluster with its mean distance to the nearest other cluster: s = (b − a) / max(a, b). The mean over all points peaks at a good k, and the per-point values expose the badly placed points. Above 0.5 suggests a reasonable structure; near 0 suggests overlapping clusters.\n\n**3. The gap statistic.** Compare the observed within-cluster dispersion with the dispersion expected from a random dataset of the same shape. The chosen k is where the gap between the real and the random curve is largest, which corrects the elbow bias toward a small k.\n\n**4. Business validation.** Are the clusters actionable? Four segments with names a marketing team can use are worth more than seven that nobody can describe. Are they large enough to matter? Is each one reachable with a different action?\n\n**The practice that makes the answer defensible**\n1. Restrict k to a small range from the elbow and the silhouette.\n2. Check **stability** — re-run on a bootstrap sample and with different seeds; a k whose clusters change completely is not a real structure.\n3. Profile each cluster on the original features and name it.\n4. Confirm that the business can act differently on each cluster.\n\n**The warning.** K-means will always return k clusters, even on data with no structure at all. The elbow and silhouette are evidence; a flat silhouette curve across all k is evidence of no structure, and that is a legitimate finding to report.\n\n**Exam line:** elbow narrows, silhouette scores, the gap statistic corrects, and the business decides — with a stability check before anyone acts on it.',
              diagram: 'ds4-elbow',
              diagramCaption:
                'Choosing k in practice — the elbow, silhouette, gap statistic and business validation, with the stability check.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain how a dendrogram is read, and how the height of a merge and the linkage method change the clusters.',
              explain:
                '**What is being asked.** A short reading question. The dendrogram is a tree where each merge is drawn at the distance at which it happened.\n\n**Reading.** The leaves are the points; a horizontal line at a chosen height cuts the tree into clusters; a long vertical segment means two clusters stayed separate for a long range of distances and is a natural cut.\n\n**Linkage.** Single can chain, complete is compact, average is a compromise, Ward minimises variance.\n\n**How to score the 4 marks.** Reading the tree (2) · height and cut (1) · linkage effect (1).',
              answer:
                'A **dendrogram** is the tree produced by hierarchical clustering: the leaves are the data points and each join is a merge of two clusters.\n\n**How to read it**\n1. The **height** of a join is the distance at which the two clusters merged — low joins are similar clusters, high joins are dissimilar ones.\n2. A **horizontal line drawn at a chosen height** cuts the tree and gives the clusters at that level: cut low for many small clusters, cut high for a few large ones.\n3. A **long vertical segment** between two joins means the clusters stayed apart over a wide range of distances, so cutting there is a natural choice.\n4. Reading the tree from the bottom up shows the order of merges; reading it after a cut shows the composition of each cluster.\n\n**What the linkage method changes**\n\n| Linkage | Effect on the tree |\n|---|---|\n| **Single** | chains form; two groups can be joined through one intermediate point, so the tree bridges them early |\n| **Complete** | compact clusters; the merge height jumps once a far pair is included |\n| **Average** | a compromise; more balanced merges |\n| **Ward** | merges that minimise the increase in variance, so the tree is balanced and the cut is often clearer |\n\n**The example.** Points 1, 2, 4 and 9 with single linkage merge at heights 1 (1 and 2), 2 (with 4) and 5 (with 9). Cutting at height 3 gives {1, 2, 4} and {9}; cutting at height 1 gives {1, 2}, {4} and {9}.\n\n**Exam line:** leaves are points, joins are distances, a horizontal cut gives the clusters — and the linkage decides whether the tree chains or stays compact.',
              diagram: 'ds4-hierarchical',
              diagramCaption:
                'Reading a dendrogram — merge heights, the horizontal cut that gives the clusters, and the effect of each linkage method.',
            },
          ],
        },
        {
          label: "c",
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Explain lift, leverage and conviction with formulas and an interpretation, and show how they change the action a retailer takes on a rule.',
              explain:
                '**What is being asked.** A measures question with an application. Support and confidence are not enough; the examiner wants the three extra measures and the business decision.\n\n**The measures.** Lift = confidence / support(Y). Leverage = P(X∪Y) − P(X)P(Y). Conviction = (1 − support(Y)) / (1 − confidence).\n\n**The interpretation.** Lift > 1 attracts, = 1 independent, < 1 repels. Leverage is the absolute deviation from independence. Conviction measures how strongly the rule would be wrong to ignore — it rises as confidence approaches 1.\n\n**The application.** High lift and support → bundle and layout. High confidence with lift ≈ 1 → do nothing, it is a base-rate illusion.\n\n**How to score the 6 marks.** Three formulas (2) · interpretation with a worked rule (2) · the action (2).',
              answer:
                'Support and confidence describe a rule; lift, leverage and conviction test whether the rule means anything.\n\n| Measure | Formula | Interpretation |\n|---|---|---|\n| **Lift** | confidence(X→Y) / support(Y) | > 1 the items attract, = 1 independent, < 1 they repel |\n| **Leverage** | support(X∪Y) − support(X) × support(Y) | the absolute deviation from independence; 0 means no association |\n| **Conviction** | (1 − support(Y)) / (1 − confidence) | how much the rule would be violated if X and Y were independent; ∞ at perfect confidence |\n\n**Worked comparison.** In five baskets: bread → milk has support 0.60, confidence 0.75, lift 0.94, leverage 0.60 − 0.80 × 0.80 = −0.04, conviction (1 − 0.80)/(1 − 0.75) = 0.80. Diaper → beer has support 0.60, confidence 0.75, lift 1.25, leverage 0.60 − 0.60 × 0.60 = 0.24, conviction (1 − 0.60)/(1 − 0.75) = 1.60.\n\n**What the numbers say.** Both rules have identical support and confidence. The first has lift below 1, negative leverage and conviction below 1 — milk is so common that bread adds nothing. The second has lift above 1, positive leverage and conviction of 1.6 — the association is real and the rule is worth acting on.\n\n**How the action changes**\n1. **High lift with adequate support** — bundle the items, place them together, or use the pair in a recommendation and a cross-sell campaign.\n2. **High confidence with lift near 1** — do nothing. The rule is a base-rate illusion: the consequent sells anyway. Acting on it wastes shelf space and margin.\n3. **High lift but very low support** — the pair is rare; it may still be useful for a recommendation engine, but not for a store layout, because too few baskets are affected.\n4. **Negative leverage** — investigate, because the items may be substitutes: a promotion on one reduces the other, and the layout decision is the opposite of the obvious one.\n\n**The minimum thresholds.** A rule is actioned only when support clears the business minimum (enough customers affected), confidence clears the minimum, and lift is comfortably above 1 — because the first two alone will always produce rules that merely restate a popular item.\n\n**Exam line:** support says frequent, confidence says reliable, lift says real, leverage says how far from chance, conviction says how costly it is to ignore — and only a rule that clears all of them changes a shelf.',
              diagram: 'ds4-support-confidence',
              diagramCaption:
                'Lift, leverage and conviction compared on two rules with identical support and confidence, and the action each justifies.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain the PAM algorithm step by step, and state its computational cost and the alternative used for large data.',
              explain:
                '**What is being asked.** A short algorithm question with a cost note.\n\n**PAM.** Build — pick k medoids greedily; swap — for each pair (medoid, non-medoid) compute the change in total cost and accept the best improvement; repeat until no improvement.\n\n**Cost.** Each swap evaluation is O(k(n − k)) and each costs O(n), so an iteration is O(k n²) — expensive. **Alternatives.** CLARA (sample then apply PAM), CLARANS (randomised search).\n\n**How to score the 4 marks.** The steps (2) · the cost (1) · the alternative (1).',
              answer:
                '**PAM** (Partitioning Around Medoids) is K-medoids: it partitions the data into k clusters whose centres are actual data points.\n\n**Steps**\n1. **Build** — select k points as the initial medoids, greedily: choose the point that minimises the total cost, then the next best addition, and so on.\n2. **Assign** — place every point in the cluster of its nearest medoid, using absolute (Manhattan) distance in the original algorithm.\n3. **Swap** — for every pair of one medoid and one non-medoid point, compute the change in total cost if the swap were made; accept the swap with the largest reduction.\n4. **Repeat** step 3 until no swap reduces the cost, then report the clusters.\n\n**The cost.** Evaluating one swap costs a pass over all points, and there are about k × (n − k) candidate pairs, so one iteration is O(k·n²) and several iterations are needed. That makes PAM practical only for small or medium datasets.\n\n**The alternatives for large data**\n- **CLARA** — draw several samples, run PAM on each, and keep the best medoids; then assign all points to those medoids.\n- **CLARANS** — a randomised search that samples a fraction of the swap candidates per step instead of evaluating all of them.\n\n**Why accept the cost at all.** The medoid must be a real point, so the cluster centre is always interpretable — a representative customer, an actual product — and a single outlier cannot drag the centre into empty space, which is exactly what a mean does.\n\n**Exam line:** build, assign, swap, repeat — PAM is O(k·n²) because it tries every swap, and CLARA samples to make it affordable.',
              diagram: 'ds4-kmedoid',
              diagramCaption:
                'The PAM algorithm — build, assign and swap — with its computational cost and the sampling alternatives for large data.',
            },
          ],
        },
      ],
    },
    {
      number: 5,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Trace the generations of business intelligence from reporting to AI-assisted analytics, and state what changed for the user at each generation.',
              explain:
                '**What is being asked.** A history with a consequence at each step: what the user could do that they could not do before.\n\n**The generations.** Report generation; OLAP and cubes; visual discovery and self-service; cloud and mobile; embedded and real-time; AI-assisted and natural language.\n\n**The user change.** Nothing (request a report), slice a cube through IT, build a chart themselves, see it on a phone, see it inside the workflow, and ask a question in words.\n\n**How to score the 6 marks.** Generations with the technology (4) · the user change at each step (1) · the closing trend (1).',
              answer:
                'Business intelligence has passed through six generations, each defined by what the user could finally do without help.\n\n| Generation | Technology | What the user could do |\n|---|---|---|\n| **1. Reporting** (1980s–90s) | relational databases, batch jobs, printed reports | read a report that someone else had produced |\n| **2. OLAP and cubes** (late 1990s) | data warehouses, OLAP engines | slice, dice and drill through a cube — usually by asking the IT team |\n| **3. Visual discovery** (2005–12) | in-memory engines, columnar stores | build their own chart and filter it in seconds |\n| **4. Self-service and cloud** (2010s) | cloud BI, governed datasets | publish and share a dashboard without installing software |\n| **5. Mobile and embedded** (2010s–20s) | responsive web, embedding APIs, streaming | see the metric on a phone or inside the operational screen |\n| **6. AI-assisted** (2020s) | semantic layer, natural-language query, generative AI | ask a question in words and get a chart, an explanation or an alert |\n\n**What each generation removed.** The first removed the manual calculation; the second removed the wait for a fixed report; the third removed the analyst from the loop; the fourth removed the installation and the capacity limit; the fifth removed the desk; the sixth removes the need to know which chart to build.\n\n**The constant.** The design principles did not change: one screen, five to seven KPIs, the exception in colour, and a definition behind every number. What changed is who can produce the screen and where it appears.\n\n**The caution to add.** Each generation widened the audience, and a wider audience means more people who do not know the caveats of the data. That is why the semantic layer, the metric definitions and the governance matter more in the AI generation, not less — a natural-language answer is only as trustworthy as the definitions it queries.\n\n**Exam line:** reports, cubes, visual discovery, cloud, mobile, AI — each generation removed one more step between the question and the answer.',
              diagram: 'ds5-dashboard-evolution',
              diagramCaption:
                'The six generations of BI and dashboards, with the technology that enabled each and what the user could newly do.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain how a chart type is chosen for a given question — comparison, trend, distribution, relationship and composition — with one rule per case.',
              explain:
                '**What is being asked.** A decision table: question to chart to rule.\n\n**The mapping.** Comparison — bar, sorted, zero baseline. Trend — line, even time spacing. Distribution — histogram or box plot, state the bin width. Relationship — scatter, handle overplotting. Composition — stacked bar or treemap, few categories.\n\n**How to score the 4 marks.** Five mappings (3) · one rule that applies to all (1).',
              answer:
                'Chart choice follows the question, and each question has one chart that answers it most accurately.\n\n| Question | Chart | Rule |\n|---|---|---|\n| **How do categories compare?** | bar, sorted by value | start at zero and sort — an unsorted bar chart makes the reader do the ranking |\n| **How does a value change over time?** | line | keep the time axis evenly spaced and label the series directly |\n| **How are the values distributed?** | histogram or box plot | state the bin width; add a box plot when comparing groups |\n| **Is there a relationship between two variables?** | scatter | handle overplotting with transparency or hexbinning, and never imply causation |\n| **What is the composition of a total?** | stacked bar, 100 percent stacked or treemap | use a pie only for two or three slices, never for ranking |\n\n**The rule that applies to all of them.** Put the comparison you care about on the most accurate channel — position on a common scale, then length, then angle and area, then colour. Everything else in the chart should be quiet: one accent colour, three font sizes, no decoration.\n\n**The test to apply.** Before building, write the question in one sentence. If the sentence begins with "which is bigger", use a bar; "how has it moved", a line; "how is it spread", a histogram; "are they related", a scatter; "what is it made of", a stacked bar. When two charts are possible, choose the one whose accuracy channel matches the importance of the comparison.\n\n**Exam line:** comparison, trend, distribution, relationship, composition — one question, one chart, one rule each.',
              diagram: 'ds5-charts-special',
              diagramCaption:
                'Choosing a chart from the question — comparison, trend, distribution, relationship and composition — with the rule for each.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Explain how an organisation should select and govern a BI platform, covering requirements, evaluation, cost, governance and rollout.',
              explain:
                '**What is being asked.** A procurement-and-adoption question with governance, because a BI platform is a long-term commitment.\n\n**The steps.** Gather requirements from real decisions; evaluate against them; compare total cost of ownership; check governance and security; pilot; roll out with training and a support model.\n\n**The governance.** Certified datasets, metric definitions, row-level security, audit, and a change process.\n\n**How to score the 6 marks.** Requirements and evaluation (2) · cost and licensing (1) · governance and security (2) · rollout and adoption (1).',
              answer:
                'A BI platform is chosen for five years, not for a demonstration. The decision is taken in five stages.\n\n**1. Requirements from decisions, not from features.** Ask each department which decisions it takes weekly and what it cannot currently see. A requirement list built from decisions is short, testable and defensible; a list built from a vendor comparison table is neither.\n\n**2. Evaluation against those requirements.** Test the two or three shortlisted tools on the organisation own data and its three hardest queries — not on the sample dataset in the demo. Score them on: connectors to the real sources, handling of the data volume, refresh time, self-service ease for a business user, and the developer experience for a complex measure.\n\n**3. Cost over the full term.** Licence per user is only one line: add the capacity or compute, the gateway or server, the premium features that a governance requirement forces, training, and the people needed to administer it. Compare the total cost for the actual audience — 20 analysts and 500 viewers, not 100 of each.\n\n**4. Governance and security.** The platform must support:\n- **Certified or promoted datasets**, so that a viewer cannot build a dashboard from an uncertified source.\n- **Metric definitions held once**, in a semantic layer, so that two teams cannot compute revenue differently.\n- **Row-level and object-level security**, tested against a real org hierarchy.\n- **Lineage and audit**, so that a number can be traced to its source and an access can be reviewed.\n- **A change process**, so that a published dashboard has an owner and a version.\n\n**5. Pilot, then roll out.** Start with one department that has a clear decision, a willing owner and clean data. Measure adoption — weekly active viewers, dashboards used more than once — and only then scale, with training, a support model and a named owner per business area.\n\n**The failure mode to name.** Most failed BI programmes bought a tool and skipped the model: without a governed warehouse, conformed dimensions and agreed definitions, every tool produces fast, beautiful, contradictory dashboards.\n\n**Exam line:** requirements from decisions, evaluation on real data, total cost over the term, governance in the semantic layer, and a pilot before the rollout.',
              diagram: 'ds5-tools',
              diagramCaption:
                'Selecting and governing a BI platform — requirements, evaluation, total cost, governance controls and staged rollout.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain the design constraints of mobile, wallboard and printed dashboards, and why one layout cannot serve all three.',
              explain:
                '**What is being asked.** A short design question. Each medium imposes a constraint that forces a different layout.\n\n**Mobile.** Small screen, touch, glanceable — three to five KPIs, vertical, big targets. **Wallboard.** Distance, no input, always on — big numbers, high contrast, auto-refresh. **Print.** Static, high contrast, page breaks — summary on page one, black-and-white safe.\n\n**Why one layout fails.** The desktop layout is unreadable on a phone, illegible from three metres, and unusable on paper.\n\n**How to score the 4 marks.** Three media with constraints (2) · the design response (1) · the one-model-many-layouts rule (1).',
              answer:
                'A medium is a constraint on resolution, viewing distance and input, and each constraint forces a different layout.\n\n| Medium | Constraint | Design response |\n|---|---|---|\n| **Mobile** | ~400 px wide, touch, viewed for seconds | three to five KPIs stacked vertically, one chart per screen, filters on a separate screen, large touch targets |\n| **Wallboard** | read from 3 metres or more, no interaction, always on | large numbers, high contrast against the room light, auto-refresh, no fine print, exception in a single accent colour |\n| **Print or PDF** | static, page boundaries, often black and white | executive summary on page one, one idea per page, pattern fills instead of colour alone, no interactive element |\n\n**Why one layout cannot serve all three.** The desktop layout has twenty tiles and small labels: on a phone it is unreadable, from three metres it is invisible, and on paper the hover state and the filter do not exist. Each medium needs its own arrangement of the same content.\n\n**The rule that makes this manageable.** One data model, one semantic layer, one set of definitions — and several layouts over it. The layouts are cheap to rebuild; the definitions are not, and if each medium gets its own calculation the numbers will eventually disagree.\n\n**The legibility test.** For a wallboard, stand at the real distance and read the headline number; if it cannot be read, the font is too small. For mobile, hold the phone at arm length and check that the exception is visible without scrolling. For print, photocopy it in black and white and check that the categories are still distinguishable.\n\n**Exam line:** mobile for the glance, wallboard for the room, print for the record — one model, several layouts, and a legibility test for each.',
              diagram: 'ds5-display-media',
              diagramCaption:
                'Design constraints for mobile, wallboard and printed dashboards, and why one layout cannot serve all three.',
            },
          ],
        },
      ],
    },
  ],
};
