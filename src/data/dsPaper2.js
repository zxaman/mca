// Data Science Paper 2 — Model Paper (6 + 4 division)
//
// Mark division paper: every question carries 10 marks and is presented as
// (a) 6 marks + (b) 4 marks, with a second 6 + 4 set as the OR alternative.
//
// Topic map (all different from Papers 1, 3 and 4):
//   Unit 1 — 1.5 data science life cycle, 1.6 big data and the 5 V model,
//            1.11 roles in a data science team, 1.12 impact on business
//   Unit 2 — 2.6 data warehouse introduction, 2.8 fact and dimension tables,
//            2.7 ETL, 2.9 star schema
//   Unit 3 — 3.4 logistic regression, 3.9 confusion matrix, 3.8 support vector
//            machine, 3.11 ROC and AUC
//   Unit 4 — 4.4 hierarchical clustering, 4.5 elbow method, 4.8 FP-Growth,
//            4.3 K-medoids
//   Unit 5 — 5.5 dashboard design, 5.7 display media, 5.7 advanced charts,
//            5.9 BI and visualization tools

export const dsPaper2 = {
  id: 'ds-paper-2',
  number: 2,
  name: 'Paper 2',
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
                'Explain the stages of the data science life cycle with a labelled diagram, and state the output of each stage.',
              explain:
                '**What is being asked.** A process question. The life cycle runs from the problem statement to monitoring in production, and the examiner wants the stages plus what each one produces, because the output is what proves the stage happened.\n\n**The stages.** Problem definition and business understanding; data collection; data preparation and cleaning; exploratory analysis; modelling; evaluation; deployment; monitoring and feedback. CRISP-DM is the same cycle in six named phases with iteration arrows.\n\n**The facts worth adding.** Seventy to eighty percent of the elapsed time sits in collection and preparation; the cycle is not linear, because evaluation sends the team back to preparation or to the problem statement; and monitoring is a stage, not an afterthought.\n\n**How to score the 6 marks.** Stages in order (3) · output of each (2) · the iterative and time arguments (1).',
              answer:
                'The **data science life cycle** is the sequence of stages through which a data problem becomes a deployed, monitored solution. It is iterative: a failure at evaluation returns to preparation or even to the problem statement.\n\n| Stage | What is done | Output |\n|---|---|---|\n| **1. Problem definition** | frame the decision, the metric and the definition of success with the business owner | a written problem statement, a success metric, a scope |\n| **2. Data collection** | identify sources, extract from databases, APIs, logs, files, surveys | a raw dataset with lineage recorded |\n| **3. Data preparation** | clean, integrate, transform, reduce | an analysis-ready table and a documented pipeline |\n| **4. Exploratory analysis** | distributions, correlations, segments, anomalies, first plots | a findings note and a shortlist of candidate features |\n| **5. Modelling** | choose algorithms, engineer features, train on a training split | a trained model and its hyper-parameters |\n| **6. Evaluation** | measure on a held-out set with the right metric; compare with a baseline | a metric result and a go or no-go decision |\n| **7. Deployment** | package the model as an API, batch job or dashboard | a running service in the business process |\n| **8. Monitoring** | watch accuracy, drift, latency and business impact; retrain on schedule or on a trigger | a monitoring dashboard and a retraining log |\n\n**Where the time goes.** Industry estimates put 70 to 80 percent of a project in stages 2 and 3 — collection and preparation — which is why a data scientist spends more time in a pipeline than in an algorithm.\n\n**Why the cycle is drawn as a loop.** Evaluation often shows that a feature was computed wrongly or that the problem was framed too broadly; monitoring often shows that the world has changed and the model has drifted. Both send the work backwards, and a team that draws a straight line will treat the loop as a failure instead of a stage.\n\n**Exam line:** problem, collection, preparation, exploration, modelling, evaluation, deployment, monitoring — every stage has an output, and the arrows run backwards as often as forwards.',
              diagram: 'ds-lifecycle',
              diagramCaption:
                'The data science life cycle from problem definition to monitoring, with the output of each stage and the feedback loops.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain big data with the 5 V model, and state why ordinary tools fail on it.',
              explain:
                '**What is being asked.** A definition question with five dimensions and a practical consequence.\n\n**The 5 V.** Volume (terabytes and beyond), velocity (streams arriving continuously), variety (structured, semi-structured, unstructured), veracity (noise and uncertainty) and value (insight only after analysis).\n\n**Why ordinary tools fail.** A single machine cannot store or process the volume in useful time; the schema cannot be declared in advance because the data is mixed; and the arrivals never stop. Distributed storage and processing — Hadoop, Spark — and a lake or lakehouse design are the answer.\n\n**How to score the 4 marks.** Definition and 5 V (3) · the tool limitation (1).',
              answer:
                '**Big data** is data whose volume, arrival rate or variety exceeds the capacity of a single conventional database and a single machine to store and process within the time the decision allows.\n\n| V | Meaning | Example |\n|---|---|---|\n| **Volume** | the size exceeds one machine | 10 TB of clickstream per day |\n| **Velocity** | data arrives continuously and must be handled fast | card transactions, IoT sensor streams, log events |\n| **Variety** | mixed forms: structured, semi-structured, unstructured | tables, JSON logs, images, free text |\n| **Veracity** | quality and uncertainty | duplicate events, missing fields, sensor error |\n| **Value** | the insight is the point, not the storage | churn prediction, fraud alerting, demand forecast |\n\n**Why ordinary tools fail**\n1. **Storage** — a relational database on one server runs out of disk and of memory long before the dataset does.\n2. **Processing time** — a full scan of terabytes takes hours on one machine, so the answer arrives after the decision.\n3. **Schema** — a relational table needs a fixed schema, and semi-structured and unstructured data have none at load time.\n4. **Continuous arrival** — batch loading cannot keep up with a stream, so the architecture must process events as they arrive.\n\n**What is used instead.** Distributed file systems and compute (HDFS with Spark, or object storage with a warehouse or lakehouse), partitioning and columnar formats, and incremental or streaming pipelines. The 5 V model is the reason these tools exist — not a marketing list.\n\n**Exam line:** volume, velocity, variety, veracity and value — when all five exceed a single machine, storage and compute must be distributed.',
              diagram: 'bigdata-vs-ds',
              diagramCaption:
                'Big data and the 5 V model, with the point at which ordinary single-machine tools stop being enough.',
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
                'Explain the roles in a data science team — data engineer, data analyst, data scientist and ML engineer — and how the work passes between them.',
              explain:
                '**What is being asked.** A team-structure question with a hand-off. The examiner wants four roles, the question each answers, and the way the deliverable of one becomes the input of the next.\n\n**The roles.** Data engineer — builds the pipeline, brings and stores the data. Data analyst — describes and explains what happened. Data scientist — builds and validates the model. ML engineer — puts the model into production and keeps it running.\n\n**The hand-off.** Engineer produces a clean, reliable table; analyst turns it into explanation; scientist turns the features into a model; engineer deploys it as a service; monitoring returns new data to the pipeline. In small teams one person does all four, which is why the roles blur.\n\n**How to score the 6 marks.** Four roles with the question each answers (4) · the hand-off chain (1) · the small-team note (1).',
              answer:
                'A data science team is a chain of four roles, each answering a different question about the same data.\n\n| Role | Question answered | Main work | Typical output |\n|---|---|---|---|\n| **Data engineer** | can we get the data, and is it reliable? | ingestion, pipelines, storage design, orchestration, quality checks | a dependable, documented table or stream |\n| **Data analyst** | what happened, and why? | SQL, aggregation, segmentation, dashboards, business explanation | a report, a dashboard, a finding |\n| **Data scientist** | what will happen, and what should we do? | feature engineering, model choice, validation, experiment design | a validated model and its measured performance |\n| **ML engineer** | is the model running correctly in production? | serving, monitoring, retraining, versioning, latency and cost | a live service with drift alerts |\n\n**The hand-off chain.** The engineer delivers a clean table; the analyst uses it to explain the present; the scientist turns the features into a model; the ML engineer deploys the model and watches it; monitoring feeds new data back to the engineer. Each hand-off needs an artefact — a schema, a metric definition, a model card — or the next role rebuilds the work.\n\n**How teams differ.** In a small team one person performs all four roles, which is efficient but fragile: the pipeline is undocumented and the model has no owner once the author leaves. In a large team the roles specialise, and the cost is coordination — the analyst and the scientist must agree on the metric definition, and the engineer and the ML engineer must agree on the schema the model expects.\n\n**The example to quote.** In a churn project: the engineer builds the customer-activity table, the analyst reports that churn rose 4 percent in the north region, the scientist builds a churn classifier with 0.78 AUC, and the ML engineer serves it to the retention team and alerts when the input distribution drifts.\n\n**Exam line:** the engineer brings the data, the analyst explains it, the scientist predicts with it, the engineer again runs it — four roles, one chain.',
              diagram: 'ds-roles',
              diagramCaption:
                'The four roles in a data science team, the question each answers and the artefact each passes to the next.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain how data science creates business impact, using one concrete example from problem to measurable value.',
              explain:
                '**What is being asked.** An application question: show the chain from a business problem to a measured outcome, because data science that cannot name its value is a cost.\n\n**The chain.** Problem with a cost → data that can describe it → model that predicts or prescribes → action taken by a process → measured change in a business metric.\n\n**The example.** Churn in a subscription business: identify customers likely to leave, target a retention offer, measure the saved revenue against the cost of the offer.\n\n**How to score the 4 marks.** The chain (2) · one worked example with a metric (2).',
              answer:
                'Data science creates value only when a model changes an action and the change is measured. The chain has five links.\n\n1. **A problem with a cost** — for example, 18 percent of subscribers cancel each year, and each lost customer costs 4,000 rupees of annual revenue.\n2. **Data that can describe it** — usage frequency, support tickets, payment failures, tenure, plan type.\n3. **A model that predicts or prescribes** — a churn classifier that ranks customers by probability of leaving in the next 60 days.\n4. **An action taken by a process** — the retention team calls the top 500 at-risk customers with an offer.\n5. **A measured change** — compare the churn of the contacted group with a control group that was not contacted.\n\n**Worked example.** 10,000 at-risk customers were identified; 2,000 were contacted; the contact cost 300 rupees each (6 lakh); churn in the contacted group was 12 percent against 20 percent in the control group, saving 160 customers at 4,000 rupees (6.4 lakh) — a net 0.4 lakh on this round, with a repeatable lift of 8 percentage points.\n\n**What makes the impact credible.** The control group. Without it, a fall in churn after the campaign could be a seasonal effect, and the model would be credited with a change it did not cause. A baseline, a control and a stated metric are what turn a model into a business result.\n\n**Exam line:** problem, data, model, action, measurement — without the action and the control group, a model is an interesting chart.',
              diagram: 'ds-impact',
              diagramCaption:
                'How data science creates business impact — the five-link chain from a problem with a cost to a measured change.',
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
                'Define a data warehouse and explain its four characteristics — subject oriented, integrated, time variant and non-volatile — with one example of each.',
              explain:
                '**What is being asked.** A definition plus the four properties, which are the examinable core. Each property should be stated, explained and illustrated from a retail example.\n\n**The properties.** Subject oriented — organised by subject (sales, customer, product) rather than by application. Integrated — one consistent coding and naming after cleaning, so that several source systems agree. Time variant — history is kept, with a time key on every record. Non-volatile — data is loaded and read, not updated in place, so a report can be reproduced.\n\n**The contrast.** An operational database supports the transaction of the moment; a warehouse supports analysis across years.\n\n**How to score the 6 marks.** Definition (1) · four properties with examples (4) · the operational-versus-analytical contrast (1).',
              answer:
                '**A data warehouse** is a separate, subject-oriented store that consolidates data from many operational systems, keeps its history, and is built for analysis and reporting rather than for day-to-day transactions.\n\n| Characteristic | Meaning | Example |\n|---|---|---|\n| **Subject oriented** | organised around a business subject, not around the application that produced the data | a sales warehouse holds sales, customer and product subjects, where the billing system held invoices |\n| **Integrated** | one set of codes, names and units across all sources after cleaning | "Pune", "pune" and "PNE" become one city code; kg and g become kg; INR is the only currency |\n| **Time variant** | every record carries a time, and history is retained for years | a customer record keeps the address of 2022 and the address of 2025; sales keep daily, monthly and yearly snapshots for 5 to 10 years |\n| **Non-volatile** | data is loaded and read, not updated or deleted in place | a report run last month can be reproduced exactly, because the underlying rows did not change |\n\n**What the contrast shows.** An operational system answers "what is the balance now" and changes with every transaction; a warehouse answers "how did the trend move over three years" and must stay still while it is being read. Mixing the two workloads slows the transaction and distorts the analysis, which is why the warehouse exists as a separate store.\n\n**The memory aid.** S-I-T-N — Subject oriented, Integrated, Time variant, Non-volatile.\n\n**Exam line:** a warehouse is a separate, subject-oriented, integrated, time-variant and non-volatile store built for analysis — a process and an architecture, not a product.',
              diagram: 'ds-dw-intro',
              diagramCaption:
                'The four characteristics of a data warehouse — subject oriented, integrated, time variant and non-volatile — with examples.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Differentiate fact tables from dimension tables, and explain why the grain of a fact table must be decided first.',
              explain:
                '**What is being asked.** A short comparison plus one design principle. Facts hold measurements, dimensions hold context, and the grain is the definition of one fact row.\n\n**The comparison.** Fact — numbers, many rows, few columns, foreign keys to dimensions, additive measures. Dimension — descriptive text, fewer rows, many columns, a primary key, the answer to who, what, when, where.\n\n**The grain.** "One row per order line" or "one row per day per store". Grain decided late produces double counting, and no later aggregation can repair it.\n\n**How to score the 4 marks.** Comparison table (2) · the grain rule with an example (2).',
              answer:
                '| Point | Fact table | Dimension table |\n|---|---|---|\n| Content | measurements — quantity, amount, duration | descriptive context — name, category, city, date |\n| Shape | many rows, few columns | fewer rows, many columns |\n| Keys | foreign keys to every dimension | one primary key, often a surrogate key |\n| Answers | how much happened | who, what, when, where, how |\n| Example | one row per order line: product_key, date_key, store_key, quantity, amount | product dimension: product_key, name, category, brand, price band |\n| Growth | grows with every event | grows slowly, with history for changes |\n\n**Why the grain comes first.** The grain is the definition of one fact row — "one row per order line", "one row per day per store". Every later step depends on it: which dimensions can be attached, which measures are additive, and whether a total is correct. If the grain is chosen loosely, an order with three lines is counted once by one query and three times by another, and the two dashboards disagree.\n\n**The example to quote.** If the grain is "one row per order" but the amount stored is the sum of the lines, then a report by product cannot split the amount, and a report by order double counts if it joins the line table. Deciding "one row per order line" first avoids both problems.\n\n**Exam line:** facts hold numbers, dimensions hold context — and the grain decides what one row means before any number is stored.',
              diagram: 'ds-fact-dim',
              diagramCaption:
                'Fact tables compared with dimension tables, and the grain decision that fixes what one fact row means.',
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
                'Explain the ETL process in detail — extract, transform, load — and state the checks that make a load trustworthy.',
              explain:
                '**What is being asked.** ETL is the pipeline that fills the warehouse. The examiner wants all three phases, the choices inside each, and the validation that stops bad data from entering.\n\n**Extract.** Full or incremental, from databases, files, APIs and streams; a staging area; watermark and timestamp so that the next run knows where it stopped.\n\n**Transform.** Clean, conform, standardise units and codes, derive fields, apply business rules, handle slowly changing dimensions (Type 1 overwrite, Type 2 new row with valid_from and valid_to).\n\n**Load.** Dimension before fact, bulk or incremental, idempotent so that a rerun does not duplicate, and verification by row count and checksum.\n\n**How to score the 6 marks.** Three phases with detail (4) · SCD handling (1) · the validation checks (1).',
              answer:
                '**ETL** is the pipeline that moves data from source systems into the warehouse: **extract** it, **transform** it into the warehouse schema, and **load** it.\n\n**1. Extract**\n- **Full extract** copies the whole table; simple, but slow and heavy.\n- **Incremental extract** copies only the new or changed rows, using a timestamp, a sequence number or change data capture.\n- A **staging area** holds the raw copy, so that a failed transform does not touch the source.\n- A **watermark** is recorded so that the next run knows where the previous one stopped.\n\n**2. Transform**\n- **Clean** — fix missing values, duplicates, invalid codes, unit and currency mismatch.\n- **Conform** — bring every source onto the common keys, names and units.\n- **Derive** — compute margin, age band, fiscal period, and other reusable fields.\n- **Apply business rules** — the definitions that the business has agreed, applied in one place.\n- **Handle slowly changing dimensions** — Type 1 overwrites the old value (no history); Type 2 adds a new row with `valid_from` and `valid_to` and an `is_active` flag, so that old facts still point at the dimension as it was; Type 3 keeps a previous-value column.\n\n**3. Load**\n- **Order** — dimensions first, facts second, because the fact rows need the dimension keys.\n- **Bulk load** for large volumes, incremental insert or merge for smaller runs.\n- **Idempotency** — running the same job twice must not create duplicates, so the job is written as a merge on the natural key, not as a blind insert.\n\n**Checks that make the load trustworthy**\n\n| Check | What it catches |\n|---|---|\n| row count before and after | rows silently lost or duplicated |\n| checksum or sum of an amount column | value corruption in transit |\n| null and range validation | an empty or impossible field reaching the warehouse |\n| referential integrity | a fact row whose dimension key does not exist |\n| reconciliation with the source | a transform rule that changed the totals |\n\n**The fail-fast rule.** If a check fails, the job stops, raises an alert and leaves the warehouse on the previous good state. A pipeline that loads wrong data quietly is more expensive than one that fails loudly.\n\n**Exam line:** extract with a watermark, transform to one definition, load dimensions before facts — and verify with counts, checksums and reconciliation.',
              diagram: 'ds-etl',
              diagramCaption:
                'The ETL process — extract, transform and load — with slow changing dimension types and the validation checks after each load.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain the star schema with a labelled example, and state one advantage and one disadvantage compared with a snowflake schema.',
              explain:
                '**What is being asked.** A design question. In a star schema one central fact table joins several denormalised dimension tables, and the picture looks like a star.\n\n**Example.** A sales fact with four dimensions — date, product, store, customer.\n\n**Advantage.** Fewer joins, so queries are fast and the model is easy for a BI tool and a business user to understand. **Disadvantage.** Redundancy inside the dimensions (category repeated on every product row), so storage is higher and an update must touch many rows.\n\n**How to score the 4 marks.** Structure with example (2) · advantage (1) · disadvantage (1).',
              answer:
                'A **star schema** has one central **fact table** surrounded by **dimension tables**. Each dimension is denormalised — it keeps its attributes flat, without further lookup tables — so the diagram looks like a star.\n\n**Example — retail sales**\n- **Fact_Sales**: date_key, product_key, store_key, customer_key, quantity, unit_price, amount.\n- **Dim_Date**: date_key, day, month, quarter, year, is_weekend, fiscal_period.\n- **Dim_Product**: product_key, name, category, sub_category, brand, price_band.\n- **Dim_Store**: store_key, store_name, city, state, region, store_type.\n- **Dim_Customer**: customer_key, name, segment, city, loyalty_tier.\n\nA query for "sales of the beverage category by region last quarter" joins the fact table to three dimensions and groups by two attributes.\n\n| Aspect | Star schema | Snowflake schema |\n|---|---|---|\n| Dimensions | denormalised, flat | normalised, split into sub-dimensions |\n| Joins | fewer | more |\n| Query speed | faster | slower |\n| Redundancy | higher — category repeated on every product row | lower — category stored once in its own table |\n| Ease of use | easy for a BI tool and a business user | harder to understand and to maintain |\n| Best for | fast reporting, most warehouse workloads | very large dimensions where storage and update cost dominate |\n\n**The design rule.** Start with a star schema, because speed and simplicity are what a reporting layer needs; move a dimension to snowflake form only when it is large and changes independently.\n\n**Exam line:** one fact in the centre, flat dimensions around it — the star trades some storage for speed and clarity.',
              diagram: 'ds-star-schema',
              diagramCaption:
                'A star schema with a central sales fact table and four flat dimension tables around it.',
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
                'Explain logistic regression — the model, the sigmoid function and the decision boundary — and state why linear regression cannot be used for a binary outcome.',
              explain:
                '**What is being asked.** A model question with a justification. Logistic regression predicts the probability of a class by passing a linear combination through a sigmoid, so the output is always between 0 and 1.\n\n**The model.** z = b0 + b1x1 + … + bnxn; p = 1 / (1 + e^−z); the class is 1 when p ≥ 0.5, which corresponds to z ≥ 0 — that is the decision boundary.\n\n**Why not linear regression.** It predicts unbounded values, so a probability of 1.4 or −0.2 is possible; the error is not well behaved; and a linear fit is not the right shape for a binary outcome.\n\n**How to score the 6 marks.** The model and sigmoid (3) · boundary and odds interpretation (1) · the linear-regression argument (2).',
              answer:
                '**Logistic regression** is a classification model for a binary outcome. It builds a linear combination of the inputs and passes it through the **sigmoid** function, which squeezes any value into the range 0 to 1 and can therefore be read as a probability.\n\n**The model**\n1. Linear part: z = b0 + b1·x1 + b2·x2 + … + bn·xn.\n2. Sigmoid: p = 1 / (1 + e^(−z)). When z = 0, p = 0.5; large positive z gives p near 1; large negative z gives p near 0.\n3. Decision: predict class 1 when p ≥ 0.5 (equivalently z ≥ 0).\n\n**The decision boundary.** The line z = 0 separates the two predicted classes. In two dimensions that line is b0 + b1x1 + b2x2 = 0 — a straight line; the model is still linear in its boundary even though the probability curve is not.\n\n**Interpretation of the coefficients.** Each coefficient is the change in the log-odds of the outcome for a one-unit change in that feature, holding the rest constant. Exponentiating a coefficient gives an odds ratio: a coefficient of 0.69 means odds multiply by about 2 for each unit, which is why logistic regression is popular in credit scoring and medicine, where the reason matters as much as the prediction.\n\n**Why linear regression cannot be used for a binary outcome**\n1. **Range** — a linear model predicts any real number, including −0.3 or 1.7, and a probability outside 0 to 1 is meaningless.\n2. **Shape** — the true relationship between a feature and the probability of an event is S-shaped, not a straight line; a linear fit is wrong at both ends.\n3. **Assumptions** — linear regression assumes constant variance and normally distributed errors; a 0/1 outcome violates both.\n4. **Sensitivity** — one extreme feature value can pull the fitted line and flip many predictions.\n\n**Exam line:** linear part, sigmoid, threshold at 0.5 — logistic regression turns a line into a probability, and linear regression cannot because it has no range.',
              diagram: 'ds3-logistic-reg',
              diagramCaption:
                'Logistic regression — the linear combination, the sigmoid curve and the decision boundary at probability 0.5.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain the confusion matrix and compute accuracy, precision, recall and F1 from a given table.',
              explain:
                '**What is being asked.** A calculation question. The examiner wants the four cells named and the four metrics derived from them, with the arithmetic shown.\n\n**The cells.** True positive, false positive, false negative, true negative. **The metrics.** Accuracy = (TP + TN) / total. Precision = TP / (TP + FP). Recall = TP / (TP + FN). F1 = harmonic mean of precision and recall.\n\n**The example.** 100 cases: TP = 40, FP = 10, FN = 20, TN = 30. Accuracy 70 percent, precision 80 percent, recall 66.7 percent, F1 72.7 percent.\n\n**How to score the 4 marks.** Table (1) · four metrics with formulas (2) · arithmetic (1).',
              answer:
                'A **confusion matrix** counts the four possible outcomes of a binary classifier against the true labels.\n\n|  | Predicted positive | Predicted negative |\n|---|---|---|\n| **Actual positive** | True Positive (TP) | False Negative (FN) — a miss |\n| **Actual negative** | False Positive (FP) — a false alarm | True Negative (TN) |\n\n**The four metrics**\n- Accuracy = (TP + TN) / total — the share of all predictions that were right. It is misleading when the classes are imbalanced.\n- Precision = TP / (TP + FP) — when the model says positive, how often is it right?\n- Recall (sensitivity) = TP / (TP + FN) — of the actual positives, how many were caught?\n- F1 = 2 × (precision × recall) / (precision + recall) — a single number that balances the two.\n\n**Worked example.** 100 cases: TP = 40, FP = 10, FN = 20, TN = 30.\n- Accuracy = (40 + 30) / 100 = **0.70**\n- Precision = 40 / (40 + 10) = **0.80**\n- Recall = 40 / (40 + 20) = **0.667**\n- F1 = 2 × 0.80 × 0.667 / (0.80 + 0.667) = **0.727**\n\n**What the numbers say.** The model is more careful than complete: it is right 80 percent of the time when it raises an alarm, but it catches only two-thirds of the real cases. Whether that is acceptable depends on the cost of a miss — in a cancer screening a miss is far worse than a false alarm, so recall is tuned up even at the cost of precision.\n\n**The imbalance trap.** With 5 positives and 95 negatives, a model that always predicts negative scores 95 percent accuracy and catches nothing. This is why precision, recall and F1 are quoted beside accuracy whenever the classes are uneven.\n\n**Exam line:** accuracy counts all four cells, precision guards the alarms, recall guards the misses, and F1 balances the last two.',
              diagram: 'ds3-confusion-matrix',
              diagramCaption:
                'The confusion matrix with its four cells, and the accuracy, precision, recall and F1 computed from a worked example.',
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
                'Explain the support vector machine — the margin, the support vectors and the kernel trick — and state when it is preferred over logistic regression.',
              explain:
                '**What is being asked.** An SVM finds the separating boundary with the widest margin. The examiner wants the margin concept, the support vectors, the soft margin for overlapping classes, and the kernel trick for non-linear data.\n\n**The concepts.** The hyperplane separates the classes; the margin is the distance to the nearest points; the support vectors are those nearest points, and they alone define the boundary; the soft-margin parameter C controls tolerance of misclassification; the kernel maps data into a higher dimension where a linear boundary works.\n\n**When preferred.** Small datasets, many features, non-linear boundary, and when margin maximisation matters more than probability estimates — SVM gives no calibrated probability without extra work.\n\n**How to score the 6 marks.** Margin and support vectors (2) · soft margin (1) · kernel trick (2) · the preference argument (1).',
              answer:
                'A **support vector machine (SVM)** is a classifier that separates two classes with the boundary that has the widest possible margin.\n\n**Margin.** Among all the lines that separate the classes, only one has the maximum distance to the nearest point of each class. That distance is the margin, and maximising it is the whole idea: a boundary with a wide margin is less likely to be pushed across a point by a new sample.\n\n**Support vectors.** The points that lie exactly on the edge of the margin. They alone determine the boundary — move any other point and the line does not change, move a support vector and it does. This is why the model is called a support vector machine.\n\n**Soft margin.** Real data overlaps. The parameter **C** sets the trade-off: a large C penalises every misclassification hard (narrow margin, risk of overfitting), a small C tolerates some errors in exchange for a wider, more general margin.\n\n**The kernel trick.** When a straight line cannot separate the classes, a kernel computes the similarity between points as if they had been mapped into a higher-dimensional space — where a flat boundary does exist — without ever performing the mapping. Common kernels:\n\n| Kernel | Shape of boundary it can produce | Typical use |\n|---|---|---|\n| linear | straight line or plane | text with many features, where the data is already separable |\n| polynomial | curved, controlled by degree | image and interaction features |\n| RBF (Gaussian) | flexible, non-linear | the default choice for a non-linear problem |\n\n**When SVM is preferred to logistic regression.** Small or medium datasets with a clear margin; a non-linear boundary that would need many engineered features under logistic regression; and a problem with more features than rows. Logistic regression is preferred when calibrated probabilities and interpretable coefficients matter — coefficients in odds ratios are easy to defend to a regulator, while an RBF kernel is not.\n\n**The cost to mention.** Training is expensive on large data (roughly quadratic in rows), the choice of kernel and of C and gamma needs careful tuning, and the output is a decision value rather than a probability unless it is calibrated separately.\n\n**Exam line:** widest margin, nearest points, kernel for curves — an SVM decides with geometry, and it is chosen for small, high-dimensional, non-linear data.',
              diagram: 'ds3-svm',
              diagramCaption:
                'The support vector machine — maximum margin, the support vectors, the soft-margin parameter and the kernel mapping.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain the ROC curve and AUC. State what an AUC of 0.5 and 0.9 each mean, and why accuracy is a poor measure for an imbalanced dataset.',
              explain:
                '**What is being asked.** ROC plots the true positive rate against the false positive rate across all thresholds; AUC is the area under that curve.\n\n**The values.** AUC 0.5 is a coin toss, 0.9 is strong separation, 1.0 is perfect and impossible in practice. **Why accuracy fails.** With rare positives the model can be accurate and useless.\n\n**How to score the 4 marks.** ROC and AUC defined (2) · the 0.5 and 0.9 interpretation (1) · the imbalance argument (1).',
              answer:
                'The **ROC curve** (receiver operating characteristic) plots the **true positive rate** (recall) against the **false positive rate** (FP / (FP + TN)) at every possible decision threshold. As the threshold is lowered the model catches more positives and also raises more false alarms, so the curve traces that trade-off.\n\n**AUC** is the area under that curve, between 0 and 1. It has a useful meaning: the probability that a randomly chosen positive is scored higher than a randomly chosen negative.\n\n| AUC | Meaning |\n|---|---|\n| 0.5 | no better than a coin toss — the model ranks at random |\n| 0.7 to 0.8 | acceptable |\n| 0.8 to 0.9 | good |\n| 0.9 and above | excellent separation on this data |\n| 1.0 | perfect ranking — treat with suspicion on real data |\n\n**Why accuracy is a poor measure for imbalanced data.** With 1,000 cases and 20 positives, a model that predicts "negative" for everything is 98 percent accurate and catches none of the 20. Accuracy hides that failure, while AUC and recall expose it. For very rare positives the precision–recall curve is often preferred to ROC, because the false positive rate stays small while the precision collapses.\n\n**The trade-off to read from the curve.** A bank fraud team may choose a threshold at high recall even with many false alarms, because a missed fraud costs far more than a review; a marketing team may choose high precision so that the sales force is not wasted on poor leads. AUC measures the model; the threshold is a business decision.\n\n**Exam line:** ROC trades catch rate against false alarms, AUC summarises the ranking, 0.5 is chance — and accuracy lies when the positives are rare.',
              diagram: 'ds3-roc-auc',
              diagramCaption:
                'The ROC curve and AUC, with the threshold trade-off and the interpretation of 0.5, 0.8 and 0.9 values.',
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
                'Explain hierarchical clustering — agglomerative and divisive approaches, linkage methods and the dendrogram — with one worked example.',
              explain:
                '**What is being asked.** Hierarchical clustering builds a tree of merges rather than a flat set of clusters. The examiner wants both directions, the three linkage rules, how to cut the dendrogram, and a worked example.\n\n**The approaches.** Agglomerative — bottom-up: each point starts alone and the closest pair merges repeatedly. Divisive — top-down: everything starts in one cluster and is split repeatedly, which is expensive.\n\n**Linkage.** Single (minimum distance — can chain), complete (maximum distance — compact), average (mean distance over all pairs), and Ward (minimises variance increase).\n\n**The cut.** The dendrogram height records the distance at which two clusters merged; cutting at a height gives that many clusters, which is the advantage — k does not have to be chosen in advance.\n\n**How to score the 6 marks.** Both approaches (2) · linkage methods with effect (2) · dendrogram and the cut (1) · the worked example (1).',
              answer:
                '**Hierarchical clustering** builds a hierarchy of clusters and represents it as a tree (a dendrogram). It does not need the number of clusters in advance.\n\n**Two directions**\n- **Agglomerative (bottom-up)** — start with every point as its own cluster, repeatedly merge the two closest clusters, and stop when one cluster remains. This is the common form.\n- **Divisive (top-down)** — start with all points in one cluster and split repeatedly. It is far more expensive because every possible split must be evaluated.\n\n**Linkage — how the distance between two clusters is measured**\n\n| Linkage | Distance used | Effect |\n|---|---|---|\n| **Single** | closest pair of points | can follow long chains and "bridge" two groups through one intermediate point |\n| **Complete** | farthest pair of points | produces compact, roughly equal clusters; sensitive to outliers |\n| **Average** | mean distance over all pairs | a compromise, widely used |\n| **Ward** | the increase in within-cluster variance | produces compact, balanced clusters; the usual default |\n\n**Reading the dendrogram.** Each merge is drawn at a height equal to the distance at which it happened. A long vertical segment means two clusters stayed far apart for a long range of heights, so cutting the tree there is sensible.\n\n**Worked example.** Points 1, 2, 4 and 9 with single linkage.\n1. The closest pair is (1, 2) at distance 1 — merge at height 1.\n2. The next closest merge is {1, 2} with 4 at distance 2 — merge at height 2.\n3. Finally {1, 2, 4} merges with 9 at distance 5 — merge at height 5.\nCutting the dendrogram at height 3 gives two clusters, {1, 2, 4} and {9}; cutting at height 1 gives three.\n\n**Strengths and weaknesses.** No need to choose k, the whole hierarchy is visible, and the result is deterministic. Against that: memory is roughly quadratic in the number of points and time is worse, so it does not scale to millions of rows; merges cannot be undone; and single linkage lets outliers form chains.\n\n**Exam line:** merge the closest pair, record the height, cut where the tree is widest — hierarchical clustering gives every k at once and costs O(n²) to do it.',
              diagram: 'ds4-hierarchical',
              diagramCaption:
                'Hierarchical clustering — agglomerative merges, the linkage methods and a dendrogram cut at a chosen height.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain the elbow method for choosing the number of clusters, and state its limitation.',
              explain:
                '**What is being asked.** A short method question. Plot WCSS against k; the correct k is where the curve bends, because further clusters stop reducing the error substantially.\n\n**The limitation.** The bend is often ambiguous, especially on real data where the curve is smooth; the method is a guide, and the silhouette score or domain knowledge is used alongside.\n\n**How to score the 4 marks.** Method with the plot (2) · how to read the bend (1) · the limitation (1).',
              answer:
                'The **elbow method** chooses k for K-means by plotting the objective against the number of clusters.\n\n**The method**\n1. Run K-means for k = 1, 2, 3, … up to a sensible maximum.\n2. For each k, record the **within-cluster sum of squares (WCSS)** — the total squared distance of every point from its own centroid.\n3. Plot WCSS on the y axis against k on the x axis.\n4. WCSS always falls as k rises, but the fall slows sharply after the true number of groups. The point where the curve bends — the elbow — is the chosen k.\n\n**Why the curve bends.** Adding a cluster that corresponds to a real group removes a large amount of error; adding one that splits a real group only shaves a little. The bend is where real groups stop being discovered.\n\n**The limitation.** On real data the bend is often soft, and two analysts can defend two different elbows. WCSS also falls monotonically, so it can never select k on its own. The usual practice is to plot the elbow and confirm it with the **silhouette score** (which peaks at a good k) or with business meaning — four customer tiers may be useful even if the curve suggests five.\n\n**Exam line:** plot WCSS against k, look for the bend, and confirm it with the silhouette score — because the elbow is a hint, not a proof.',
              diagram: 'ds4-elbow',
              diagramCaption:
                'The elbow method — WCSS plotted against k, the bend that suggests the number of clusters, and its ambiguity.',
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
                'Explain the FP-Growth algorithm — the FP-tree construction and the mining step — and compare it with Apriori.',
              explain:
                '**What is being asked.** FP-Growth avoids candidate generation by compressing the transactions into a tree. The examiner wants the two scans, the tree structure and the mining, and then the comparison with Apriori.\n\n**The build.** Scan 1 counts item frequencies and drops infrequent items; order items by descending frequency; scan 2 inserts each transaction into the tree, sharing common prefixes; nodes of the same item are linked in a header table.\n\n**The mining.** For each item, follow the header chain, collect the conditional pattern base, build a conditional FP-tree, and generate frequent itemsets — no candidate sets are ever created.\n\n**The comparison.** Apriori needs k+1 scans and generates candidates; FP-Growth needs 2 scans and no candidates, but its tree can be large and incremental updates are hard.\n\n**How to score the 6 marks.** Tree construction with the two scans (2) · mining (2) · comparison table (2).',
              answer:
                '**FP-Growth** finds frequent itemsets without generating candidates, by compressing the transaction data into a tree.\n\n**Step 1 — count and prune.** Scan the transactions once and count each item. Drop every item below minimum support, because no frequent itemset can contain it.\n\n**Step 2 — order.** Sort the remaining items by descending frequency. The order guarantees that the most common items sit near the root, which is what allows prefixes to be shared.\n\n**Step 3 — build the FP-tree.** Scan the transactions a second time and insert each one as a path, ordered as above. Transactions that begin with the same items share the same path and only the suffix forks, so the data is compressed. A header table links every node of the same item in a chain.\n\n**Step 4 — mine.** For each item, take the prefix paths that reach it (its conditional pattern base), build a conditional FP-tree from those paths, and read the frequent itemsets from it. Repeat recursively for the suffixes.\n\n| Point | Apriori | FP-Growth |\n|---|---|---|\n| Database scans | one per level, so k+1 | two |\n| Candidate generation | yes — the expensive part | none |\n| Data structure | transaction list | compressed FP-tree |\n| Speed | slower on dense data | much faster on dense data |\n| Memory | lower | higher — the tree is held in memory |\n| Incremental update | easy to append transactions | hard — the tree must be rebuilt |\n| Implementation | simple | more complex |\n\n**Worked trace to quote.** With minimum support 2 out of 5 transactions, an item appearing once (eggs, 1) is removed in step 1, so it never enters the tree and never produces a candidate — exactly the pruning that Apriori does level by level, achieved here with a single count.\n\n**When to choose which.** FP-Growth for dense data with long transactions and enough memory; Apriori for small or sparse data and for teaching, because the logic is easy to follow and easy to implement.\n\n**Exam line:** count, order, build the tree, mine the conditional trees — two scans and no candidates, at the price of memory and update difficulty.',
              diagram: 'ds4-fpgrowth',
              diagramCaption:
                'FP-Growth — the frequency ordering, the shared-prefix FP-tree and the conditional mining step, compared with Apriori.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain K-medoids (PAM) and state why it is preferred to K-means when the data contains outliers.',
              explain:
                '**What is being asked.** K-medoids is like K-means, but the centre of a cluster must be an actual data point (a medoid) instead of a computed mean.\n\n**PAM.** Build — choose k medoids greedily; swap — try replacing a medoid with a non-medoid and accept if the total cost falls; repeat until no swap improves.\n\n**Why better with outliers.** The mean is dragged by an extreme value; a medoid must be a real point, so it stays where the data is, and the cost uses absolute distances so one extreme point cannot dominate.\n\n**How to score the 4 marks.** Algorithm with the swap step (2) · the outlier argument (1) · one limitation (1).',
              answer:
                '**K-medoids** partitions data like K-means, but the centre of each cluster must be one of the actual data points — a **medoid** — rather than an average.\n\n**The PAM algorithm**\n1. **Build** — choose k medoids, usually greedily, by picking points that minimise the total cost.\n2. **Assign** — put every point in the cluster of its nearest medoid.\n3. **Swap** — try replacing a medoid with a non-medoid point; if the total cost Σ distance(x, its medoid) falls, accept the swap.\n4. Repeat step 3 until no swap improves the cost.\n\n**Why it is preferred with outliers.** The K-means centre is a **mean**, so a single extreme value pulls it away from the real group. The medoid must be an existing point, so it cannot be dragged into empty space, and the cost uses absolute rather than squared distances, so one extreme point contributes proportionally instead of dominating. In a cluster of 10, 11, 12 and 100, the K-means centroid is 33.25 — nowhere near the data — while the medoid stays at 11.\n\n**The price.** PAM is far more expensive: the swap step evaluates k × (n − k) possibilities per iteration, so it is used on small or medium datasets; CLARA and CLARANS are the sampling-based variants for larger data. It also still needs k in advance.\n\n**Exam line:** a medoid is a real point, a centroid is an average — with outliers, the real point wins, at the cost of computation.',
              diagram: 'ds4-kmedoid',
              diagramCaption:
                'K-medoids and the PAM swap step, showing why a real point resists an outlier that pulls a mean.',
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
                'Explain the principles of dashboard design — the five-second rule, layout, visual hierarchy and colour — and state the mistakes that make a dashboard unusable.',
              explain:
                '**What is being asked.** A design question with rules. The examiner wants the principles applied, not listed: the five-second rule, the layout grid, the visual hierarchy and a restrained palette.\n\n**The principles.** Five-second rule — purpose, status and exception are visible at a glance. Layout — most important at top-left, reading order, grouping by proximity and enclosure. Hierarchy — size and position carry importance; three font sizes are enough. Colour — grey base with one accent for the exception, colour-blind-safe palette.\n\n**The mistakes.** Too many KPIs, scroll-required layouts, a wall of gauges, decoration without meaning, unclear definitions, and colours used for variety rather than meaning.\n\n**How to score the 6 marks.** Four principles applied (4) · mistakes (1) · the 5-to-7 KPI rule (1).',
              answer:
                'A dashboard is a single screen built for monitoring. Its design is judged by one question: can a manager see what matters in five seconds?\n\n**1. The five-second rule.** Purpose, current status and the exception must be visible without scrolling, clicking or reading. That means a title that states the purpose, KPI tiles with the number and its comparison, and one visual that shows where attention is needed.\n\n**2. Layout and reading order.** The eye starts at the top-left and moves in a Z. Place the most important KPI there, group related tiles by proximity and enclosure rather than by borders, keep the grid aligned, and reserve the bottom for detail that supports the top.\n\n**3. Visual hierarchy.** Importance is carried by position, size and colour, not by decoration. Three font sizes are usually enough — KPI number, label, detail. One primary chart dominates; the rest support it.\n\n**4. Colour with meaning.** A grey base with a single accent colour for the exception directs attention without effort. Use a colour-blind-safe palette, keep categorical colours to about five to seven, and never use red and green as the only distinction.\n\n**Mistakes that make a dashboard unusable**\n\n| Mistake | Why it fails |\n|---|---|\n| 20 KPIs on one screen | nothing is visually dominant, so the reader scans instead of deciding |\n| requires scrolling | the comparison between top and bottom is lost |\n| a wall of gauges and dials | low accuracy encoding and wasted space — a number with a delta is better |\n| decoration, logos, 3-D charts | competes with the data and distorts magnitude |\n| undefined metrics | two teams compute "revenue" differently and the dashboard loses authority |\n| colour used for variety | the reader cannot tell which colour means "act" |\n\n**The definition rule.** Every KPI on a dashboard needs a written definition, an owner, a refresh rate and a target. A dashboard without definitions becomes a debate about numbers rather than a tool for decisions.\n\n**Exam line:** five seconds, five to seven KPIs, one accent colour — a dashboard that needs scrolling is a report with better typography.',
              diagram: 'ds5-dashboard-design',
              diagramCaption:
                'Dashboard design principles — the five-second rule, layout and grouping, visual hierarchy and colour — with the mistakes to avoid.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain display media for dashboards — desktop, mobile, wallboard and print — and how the medium changes the design.',
              explain:
                '**What is being asked.** The same insight on different screens needs different layouts. The examiner wants the media and what changes in each.\n\n**The media.** Desktop — full interactivity, filters, drill-down. Mobile — three to five KPIs, vertical layout, large touch targets. Wallboard — read at distance, big numbers, auto-refresh, no interaction. Print or PDF — high contrast, static, page-based.\n\n**The rule.** Resolution, viewing distance and input method decide layout and font size; build one data model and several layouts.\n\n**How to score the 4 marks.** Four media with the change each causes (3) · the one-model rule (1).',
              answer:
                'The same insight is designed differently on each medium, because resolution, viewing distance and input method change.\n\n| Medium | Constraint | What changes |\n|---|---|---|\n| **Desktop** | close viewing, mouse and keyboard | full dashboard: filters, drill-down, tooltips, several charts |\n| **Mobile** | small screen, touch, viewed in a corridor | three to five KPIs, vertical stacking, large touch targets, one chart per screen |\n| **Wallboard** | read from three metres or more, no input | big numbers, high contrast, auto-refresh, no fine detail, the exception in colour |\n| **Print or PDF** | static, high contrast, page-based | no interaction, page breaks, black-and-white safe, an executive summary on page one |\n| **Email digest** | a few lines in an inbox | a short text summary with a sparkline and a link to the full view |\n\n**What follows for design.** A wallboard needs a legibility test at the real distance — if the number cannot be read from three metres, the font is too small. A mobile layout is not the desktop squeezed: the filters move to a separate screen and the KPIs stack. A print version cannot rely on hover or colour alone.\n\n**The one-model rule.** Build a single data model and a single set of KPI definitions, then create several layouts over it — desktop, mobile, wallboard. If each medium gets its own calculation, the numbers will eventually disagree, and the disagreement is what the audience remembers.\n\n**Exam line:** desktop for depth, mobile for the headline, wallboard for the room, print for the record — one data model, several layouts.',
              diagram: 'ds5-display-media',
              diagramCaption:
                'Display media compared — desktop, mobile, wallboard and print — and the design change each medium forces.',
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
                'Explain advanced chart types — stacked bar, 100 percent stacked bar, treemap, heatmap, small multiples and waterfall — stating the question each answers.',
              explain:
                '**What is being asked.** A chart-selection question for composition, hierarchy, density and change. The examiner wants each chart, the question it answers and its limitation.\n\n**The charts.** Stacked bar — total plus composition, but only the bottom segment is comparable. 100 percent stacked — share of a whole across categories. Treemap — hierarchy in nested rectangles, good for many categories, poor for exact values. Heatmap — density across two dimensions with colour intensity. Small multiples — the same chart repeated by group, which beats spaghetti. Waterfall — how a starting value became an ending value.\n\n**How to score the 6 marks.** Six chart types with the question each answers (4) · limitation of two of them (1) · the selection rule (1).',
              answer:
                'Advanced charts exist for questions that basic charts answer badly: composition within a total, hierarchy, density across two dimensions, many groups at once, and the path from one number to another.\n\n| Chart | Question it answers | Limitation |\n|---|---|---|\n| **Stacked bar** | what is the total and what is it made of? | only the bottom segment shares a baseline, so only it can be compared across bars |\n| **100 percent stacked bar** | how did the share of each part change? | absolute values disappear; a small part with a big share change looks dramatic |\n| **Treemap** | how is a hierarchy composed, across many categories? | area is judged poorly; exact comparison needs a bar chart or labels |\n| **Heatmap** | where is the density across two dimensions? | colour scales must be sequential and perceptually uniform; the bin definition must be stated |\n| **Small multiples** | how does the same pattern differ across groups? | needs enough screen space; each panel must share the same scale |\n| **Waterfall** | how did we get from the opening to the closing number? | more than about eight steps becomes unreadable |\n| **Bullet chart** | how does the actual compare with target and range? | compact but unfamiliar to some audiences |\n\n**When small multiples beat one busy chart.** Eight lines of monthly sales by region become spaghetti; the same eight lines in a grid of eight small charts are readable, because each panel has its own space and all share one scale. This is the standard answer to overplotting in a multi-series line chart.\n\n**Colour guidance for heatmaps.** Use a sequential or diverging palette that is perceptually uniform — viridis rather than rainbow — state the bin boundaries, and avoid red–green combinations that a colour-blind reader cannot separate.\n\n**The selection rule.** Ask what the reader must compare. Composition across a few categories: stacked bar. Composition of many: treemap. Density: heatmap. Many groups: small multiples. A change explained step by step: waterfall.\n\n**Exam line:** stacked for composition, treemap for hierarchy, heatmap for density, small multiples for many groups, waterfall for the bridge — and each has one thing it cannot show.',
              diagram: 'ds5-charts-advanced',
              diagramCaption:
                'Advanced chart types — stacked bar, treemap, heatmap, small multiples and waterfall — with the question each answers and its limitation.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Compare Power BI and Tableau as BI tools, and state the criteria an organisation should use to choose between them.',
              explain:
                '**What is being asked.** A tool-comparison question with selection criteria. The examiner wants a fair comparison of strengths and a criteria list.\n\n**Power BI.** Strong with the Microsoft stack, cheaper per user, DAX, strong governance through Fabric, good for enterprise deployment. **Tableau.** Strong exploratory analysis, VizQL, excellent for visual depth and ad-hoc analysis, higher cost per seat.\n\n**The criteria.** Existing stack, cost and licensing model, data volume and connectors, governance and security, skills available, mobile and embedding needs, and the support ecosystem.\n\n**How to score the 4 marks.** Comparison on three dimensions (2) · criteria for the choice (2).',
              answer:
                'Both tools answer the same business problem — self-service analytics over a governed data model — and differ mainly in ecosystem, cost and emphasis.\n\n| Dimension | Power BI | Tableau |\n|---|---|---|\n| Ecosystem | strongest inside the Microsoft stack — Azure, Fabric, Excel, Teams | connects widely; strong with any warehouse |\n| Cost | lower per user; usually included in existing Microsoft licensing | higher per seat, especially for large audiences |\n| Strength | governed enterprise deployment, dataflows, DAX measures, paginated reports | exploratory, visual, ad-hoc analysis; VizQL handles complex views easily |\n| Governance | strong — workspaces, row-level security, deployment pipelines | good — permissions, certified data sources, server or cloud |\n| Learning curve | approachable for Excel users; DAX is a real skill to learn | approachable for visual analysts; complex calculations need practice |\n| Scale | in-memory engine (VertiPaq) tuned for compressed models | in-memory engine (Hyper) tuned for large extracts |\n\n**Criteria for the choice**\n1. **The existing stack** — an organisation already on Microsoft 365 and Azure usually gains more from Power BI, in cost and in administration.\n2. **Cost at the target audience size** — licences for 5 analysts and licences for 500 viewers are very different decisions.\n3. **The dominant use** — governed recurring dashboards favour Power BI; deep exploratory analysis favours Tableau.\n4. **Data and volume** — connectors, extract size and refresh limits must fit the real data.\n5. **Governance and security** — row-level security, lineage, certification and audit must satisfy the regulator.\n6. **Skills and support** — what the team already knows, and which partner ecosystem is available locally.\n\n**The advice to close with.** The tool matters less than the data model and the definitions behind it: both tools are fast over a clean star schema and both fail over inconsistent data. Choose by ecosystem, cost and use, then invest in the model.\n\n**Exam line:** Power BI for the Microsoft enterprise and lower cost, Tableau for visual exploration — and the decision is made on stack, audience, cost and governance, not on a feature list.',
              diagram: 'ds5-tools',
              diagramCaption:
                'Power BI compared with Tableau across ecosystem, cost, strength and governance, with the criteria for choosing between them.',
            },
          ],
        },
      ],
    },
  ],
};
