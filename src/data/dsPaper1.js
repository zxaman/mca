// Data Science Paper 1 — Model Paper (5 + 5 division)
//
// Content rules for every paper in this section:
//   1. The question paper is written in ENGLISH ONLY — no Hinglish in questions,
//      options, notes, instructions or answers.
//   2. Every answer has two parts: `explain` (the concept explained in plain
//      English — definitions, the terms used in the question, how to structure
//      the answer) and `answer` (the exam-ready answer for the marks).
//   3. Every diagram carries `diagramCaption`, so the figure is labelled in words
//      and can be enlarged in the reader.
//   4. No question carries a single block of 10 marks: every question is divided
//      as (a) 5 + (b) 5, with the OR alternative also divided 5 + 5.
//
// Topic map (no topic is repeated in Papers 2, 3 and 4):
//   Unit 1 — 1.1 what data science is, 1.10 AI / ML / DL stack, 1.3 data types,
//            1.4 measurement scales
//   Unit 2 — 2.1 need for pre-processing, 2.2 data cleaning, 2.3 data integration,
//            2.4 data transformation
//   Unit 3 — 3.2 types of machine learning, 3.6 K nearest neighbours,
//            3.5 naive Bayes, 3.7 decision tree
//   Unit 4 — 4.1 distance measures, 4.2 K-means, 4.6 Apriori, 4.9 support,
//            confidence and lift
//   Unit 5 — 5.1 visualization pipeline, 5.6 basic charts, 5.2 challenges in
//            visualization, 5.4 dashboard types

export const dsPaper1 = {
  id: 'ds-paper-1',
  number: 1,
  name: 'Paper 1',
  tag: 'Data Science',
  session: 'Model Paper · 5 + 5 division',
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
    'Every question carries 10 marks, divided as (a) 5 marks + (b) 5 marks.',
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
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Define data science and explain how it draws on statistics, computer science and domain knowledge. State what makes it different from business intelligence.',
              explain:
                '**What is being asked.** Data science is an interdisciplinary practice: statistics supplies the inference, computer science supplies the scale, and the domain supplies the question. The examiner wants the definition, the three contributing fields and one clear distinction from BI.\n\n**The three fields.** Statistics — sampling, distributions, hypothesis testing, regression, so that a result is trustworthy and not coincidence. Computer science — programming, databases, distributed processing, machine learning libraries, so that the work can be done on real volumes. Domain knowledge — what the data means, which question is worth asking, and whether the answer is plausible.\n\n**The distinction from BI.** BI reports what happened, on known questions, in a dashboard, mostly on structured historical data. Data science predicts and prescribes, often with unfamiliar questions, using statistics and machine learning, on messy and mixed data.\n\n**How to score the 5 marks.** Definition (1) · the three fields with what each contributes (2) · the BI distinction (2).',
              answer:
                '**Data science** is the practice of extracting knowledge and actionable insight from data by combining statistical inference, computing and domain understanding — and then communicating the result so that a decision can be taken.\n\n**The three contributing fields**\n\n| Field | What it contributes | Example in a project |\n|---|---|---|\n| **Statistics** | inference, sampling, distributions, testing, regression | deciding whether a 3 percent lift in conversion is real or chance |\n| **Computer science** | programming, databases, distributed processing, machine learning libraries | processing 200 million clickstream rows with a cluster and a pipeline |\n| **Domain knowledge** | the question, the meaning of a column, the sanity of a result | knowing that a negative age or a 2099 date is impossible |\n\n**The overlap and the gap.** Statistics without computing cannot handle the volume; computing without statistics produces numbers that nobody can defend; both without the domain produce an accurate answer to the wrong question. Data science is the discipline of keeping all three present.\n\n**Difference from business intelligence**\n\n| Point | Business intelligence | Data science |\n|---|---|---|\n| Question | what happened, and why | what will happen, and what should we do |\n| Data | mostly structured, internal, historical | structured, text, image, log, external, messy |\n| Method | aggregation, reporting, dashboards | statistics, machine learning, experiment design |\n| Output | a report or a dashboard | a model, a score, a prediction, an experiment result |\n| Skill | SQL, visualisation, business understanding | SQL, Python or R, statistics, machine learning |\n| Failure mode | a wrong number | a model that is accurate in testing and useless in production |\n\n**The sentence to close with.** BI answers a question that a manager already knows how to ask; data science often begins by finding out which question is worth asking, and ends by proving that the answer is not noise.\n\n**Exam line:** statistics provides the proof, computing provides the scale, the domain provides the question — and data science is the practice of keeping the three together.',
              diagram: 'ds-venn',
              diagramCaption:
                'Data science at the intersection of statistics, computer science and domain knowledge, with the contribution of each field.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain the relationship between artificial intelligence, machine learning and deep learning with a labelled diagram, and state one application of each.',
              explain:
                '**What is being asked.** A nested relationship: every deep learning system is machine learning, every machine learning system is an AI approach, but not every AI system learns. The examiner wants the nesting, the definition of each level and one application.\n\n**The levels.** AI — the broad goal of making machines do tasks that need human-like intelligence, including rule-based systems that do not learn. ML — the subset that learns patterns from data instead of being programmed with rules. DL — the subset of ML that uses multi-layer neural networks and needs large data and GPU compute.\n\n**Applications.** AI — an expert system or a chess engine with hand-written rules. ML — a churn classifier or a credit-scoring model on tabular data. DL — image recognition, speech-to-text, large language models.\n\n**How to score the 5 marks.** Nested diagram described (1) · three definitions (2) · applications (1) · the "not every AI learns" point (1).',
              answer:
                'The three terms are nested, not parallel: **AI is the goal, ML is the method, DL is one family of methods inside ML.**\n\n| Level | Definition | Learns from data? | Application |\n|---|---|---|---|\n| **Artificial intelligence** | any technique that makes a machine perform a task that would need intelligence if a human did it | not necessarily — rule-based systems do not | expert system for loan eligibility written with if-then rules, or a game-playing engine |\n| **Machine learning** | algorithms that improve at a task by learning a pattern from examples instead of following hand-written rules | yes | churn prediction, credit scoring, demand forecasting on tabular data |\n| **Deep learning** | machine learning with multi-layer neural networks that learn their own features | yes, and needs much more data and compute | image classification, speech recognition, machine translation, large language models |\n\n**How learning happens in a nutshell.** The model is a set of numbers (weights). Data is passed through it, the output is compared with the correct answer, and the error is used to adjust the weights. Repeat over many rows and the weights settle at values that produce the right answer often enough to be useful. Training data is usually split about 80 percent to learn and 20 percent to test, because a model tested on the data it memorised proves nothing.\n\n**Why the nesting matters in an exam answer.** The nested circles show the containment; the definitions show the difference; and the sentence that a rule-based expert system is AI without learning is what separates a memorised answer from an understood one.\n\n**Exam line:** AI is the ambition, ML is learning from data, DL is learning with many layers — every DL is ML, every ML is AI, but not every AI learns.',
              diagram: 'ml-ai-stack',
              diagramCaption:
                'Artificial intelligence, machine learning and deep learning as nested circles, with the learning loop that trains a model.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain the types of data — structured, semi-structured and unstructured — with two examples of each and one problem each creates for analysis.',
              explain:
                '**What is being asked.** A classification question with a practical twist. The examiner wants the three types, examples, and the difficulty each one creates, because the difficulty is what shows understanding.\n\n**The types.** Structured — rows and columns, a fixed schema: a sales table, a bank transaction table. Semi-structured — a schema that is present but flexible: JSON, XML, logs, e-mail with headers. Unstructured — no schema at all: images, audio, video, free text, PDFs.\n\n**The problems.** Structured — the schema is rigid, so a new field needs a migration, and the data is often normalised across many tables. Semi-structured — the keys vary between records, so parsing is needed before analysis. Unstructured — the content must be converted to features (embeddings, counts) and that conversion loses information.\n\n**How to score the 5 marks.** Three types with examples (3) · one problem each (1) · the rough proportion statement (1).',
              answer:
                'Data is classified by how much structure it carries — that is, how easily a machine can place it into rows and columns.\n\n| Type | Definition | Examples | Problem it creates |\n|---|---|---|---|\n| **Structured** | fixed schema, rows and columns, stored in a relational table | sales transactions, employee master, bank ledger | rigid schema — a new field needs a migration; the data is spread across normalised tables and must be joined |\n| **Semi-structured** | a schema exists but is flexible or self-describing | JSON from an API, XML, server logs, e-mail with headers | keys vary between records, so the data must be parsed and flattened before analysis, and missing keys break the pipeline |\n| **Unstructured** | no predefined schema | images, audio, video, free text, scanned PDFs | content must be converted into features (embeddings, counts, metadata) and the conversion loses meaning |\n\n**Rough proportions to quote.** In most organisations about 20 percent of the data is structured, and roughly 80 percent is semi-structured or unstructured. The proportion matters because the analytical method is chosen by the type: SQL and aggregation for structured, parsing and flattening for semi-structured, and natural language processing or computer vision for unstructured.\n\n**The point that earns the last mark.** Real systems use all three together — a retail analysis joins a structured sales table, semi-structured clickstream JSON and unstructured product images. That mixture is called hybrid data, and handling it is the reason modern pipelines are more complex than a data warehouse.\n\n**Exam line:** structured data fits a table, semi-structured data carries its own labels, unstructured data must be converted — and most real analysis uses all three together.',
              diagram: 'data-types',
              diagramCaption:
                'Structured, semi-structured and unstructured data with examples, the storage effort each needs, and the analysis each allows.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain the four measurement scales — nominal, ordinal, interval and ratio — with one example each, and state which statistical operations are valid on each.',
              explain:
                '**What is being asked.** The scale of a variable decides which statistics are legitimate. The examiner wants the four scales, an example, and the operations each allows — that last column is where most marks are lost.\n\n**The scales.** Nominal — labels with no order (city, blood group, payment mode). Ordinal — ordered categories without a known distance (small, medium, large; satisfaction 1 to 5). Interval — equal distances but an arbitrary zero (temperature in Celsius, calendar year). Ratio — equal distances and a true zero, so ratios are meaningful (income, weight, number of orders).\n\n**The operations.** Nominal — count, mode, chi-square. Ordinal — median, percentile, rank correlation. Interval — mean, standard deviation, correlation, but not ratio statements. Ratio — everything, including ratios and coefficient of variation.\n\n**How to score the 5 marks.** Four scales with examples (2) · valid operations for each (2) · the zero point explanation (1).',
              answer:
                'A **measurement scale** describes how much information a variable carries. The test is three questions: is there an order, are the intervals equal, and is there a true zero?\n\n| Scale | Test passed | Example | Valid operations |\n|---|---|---|---|\n| **Nominal** | labels only | city, blood group, payment mode, gender | count, frequency, mode, chi-square — no average |\n| **Ordinal** | order, but the gap is unknown | small / medium / large, satisfaction 1 to 5, ranking | median, percentile, rank correlation — mean is not meaningful |\n| **Interval** | order and equal gaps, but zero is arbitrary | temperature in Celsius, calendar year, IQ score | mean, standard deviation, correlation — not ratios |\n| **Ratio** | order, equal gaps and a true zero | income, weight, number of orders, revenue | every operation, including ratio and coefficient of variation |\n\n**Why the zero point matters.** Ten degrees Celsius is not twice as warm as five, because zero Celsius is an arbitrary point on the scale; but ten kilograms is twice five kilograms, because zero weight means no weight. The first is interval, the second is ratio — and only the ratio scale allows "twice as much".\n\n**Why the examiners ask.** Wrong operations produce wrong conclusions: averaging a nominal code (2 for "cash", 3 for "card") produces a number with no meaning; taking a mean of an ordinal satisfaction score treats "very satisfied" as exactly one unit above "satisfied"; and computing a percentage increase from a Celsius temperature gives a value that nobody can defend.\n\n**Exam line:** order, equal intervals, true zero — pass one test for ordinal, two for interval, all three for ratio, and choose the statistics the scale permits.',
              diagram: 'measurement-scales',
              diagramCaption:
                'The four measurement scales and the three tests — order, equal intervals and a true zero — that decide which statistics are valid.',
            },
          ],
        },
      ],
    },
    {
      number: 2,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Why is data pre-processing necessary? Explain the problems in raw data and the effect each problem has on a model.',
              explain:
                '**What is being asked.** A justification question with a chain: dirty data produces a wrong pattern, the wrong pattern produces a wrong prediction, and the wrong prediction produces a wrong decision.\n\n**The problems.** Missing values, noise and outliers, inconsistency (units, names, codes), duplicates, and wrong types. **The effect.** A model trained on a biased sample, a mean pulled by outliers, a feature that contradicts itself, and inflated accuracy from duplicate rows that appear in both train and test.\n\n**The volume statement.** Analysts spend a large share of project time — commonly quoted as 60 to 80 percent — on preparing data, and the preparation, not the algorithm, usually decides the result.\n\n**How to score the 5 marks.** The chain argument (1) · five problems with the effect of each (3) · the time proportion or the "garbage in, garbage out" line (1).',
              answer:
                '**Pre-processing** is the work that turns raw, messy data into a dataset that a model can learn from. It is necessary because every later step — model, metric, decision — inherits the quality of the data.\n\n**The chain.** Raw data problem → wrong pattern learned → wrong prediction → wrong business decision. Cleaning breaks the chain at the first link, which is the cheapest place to break it.\n\n| Problem in raw data | What it looks like | Effect on the model |\n|---|---|---|\n| **Missing values** | blank cells, nulls, 0 used as a placeholder | most algorithms cannot handle nulls, and dropping rows silently biases the sample |\n| **Noise** | wrong entry, rounding, sensor jitter | the model learns the noise as if it were signal, so accuracy falls |\n| **Outliers** | a price of 999 among 32, 35, 34 | the mean shifts, scaling is distorted, and distance-based models are pulled toward the outlier |\n| **Inconsistency** | Pune and pune, kg and g, INR and USD | the same category is counted twice, and ratios are meaningless |\n| **Duplicates** | the same customer row twice | the duplicate can appear in both training and test data, which inflates the measured accuracy |\n\n**Why it is most of the work.** Industry reports put 60 to 80 percent of a data project in preparation. The reason is simple: algorithms are commodities, and the difference between two projects is usually the quality of the data and the care of the features, not the choice of model.\n\n**The line to quote.** Garbage in, garbage out — a sophisticated model trained on bad data gives a sophisticated wrong answer.\n\n**Exam line:** missing, noisy, inconsistent, duplicated data teaches the model a wrong pattern — so pre-processing comes before modelling, not after it.',
              diagram: 'ds-preprocessing-need',
              diagramCaption:
                'Why pre-processing is needed — the chain reaction from dirty data to a wrong forecast, and the benefits of cleaning it first.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain data cleaning. Describe the techniques for handling missing values, noise and outliers, with one example of each.',
              explain:
                '**What is being asked.** Cleaning is the specific work of fixing values. The examiner wants the three sub-problems and the named techniques, because the technique names are the marks.\n\n**Missing values.** Drop the row or column, impute with mean, median or mode, forward or backward fill for time series, model-based imputation, and a separate "missing" indicator. **Noise.** Binning, smoothing by moving average, regression smoothing, and clustering to detect outlying groups. **Outliers.** IQR rule, z-score, caps or winsorising, transformation, or a separate model for the outlier population.\n\n**The rule.** Choose the technique from the reason the value is missing, not from convenience; and never replace blindly, because a real outlier is sometimes the signal — a fraud transaction is supposed to look unusual.\n\n**How to score the 5 marks.** Definition (1) · missing values, noise, outliers with techniques (3) · the example or the rule (1).',
              answer:
                '**Data cleaning** is the process of detecting and correcting corrupt, incomplete, inconsistent or duplicated records so that each row is one true observation and each column carries one meaning.\n\n**A. Missing values**\n\n| Technique | When it is right | Example |\n|---|---|---|\n| drop the row | very few rows are affected and the loss is random | 4 blank rows out of 50,000 |\n| impute the mean | numeric column, roughly symmetric, no outliers | missing age replaced by 34.2 |\n| impute the median | numeric column with outliers or skew | income missing filled with the median, not the mean |\n| impute the mode | categorical column | missing payment mode filled with "UPI", the most frequent |\n| forward or backward fill | time series where the last known value is a fair estimate | missing daily meter reading filled from the previous day |\n| model-based imputation | the value can be predicted from other columns | missing salary predicted from designation and experience |\n| "missing" indicator | the fact of being missing is itself informative | a missing credit score flags a thin-file customer |\n\n**B. Noise** — random error in a value. **Binning** puts values into ranges and replaces each with the bin mean or median, which smooths small jitter; a **moving average** smooths a time series; **regression smoothing** fits a line and replaces values that are far from it; **clustering** groups similar records and treats the odd one out as noise. Example: a temperature sensor reading 22.1, 22.0, 41.7, 22.2 — the 41.7 is noise and a three-point moving average damps it.\n\n**C. Outliers** — a value far from the rest. Detect with the **IQR rule** (outside Q1 minus 1.5 times IQR, or Q3 plus 1.5 times IQR), the **z-score** (beyond about 3 standard deviations), or a box plot. Handle by **removing** (when it is an error), **capping or winsorising** (bring it to a percentile), **transforming** (log or square root), or **modelling separately** (a fraud model, where the outlier is the target).\n\n**Worked example.** Prices 32, 35, 34, 999. The IQR rule flags 999; if it is a data-entry error it is removed or capped; if it is a genuine bulk order it is kept and the model is trained on a log-transformed price. Cleaning is judgement, not a replace-all.\n\n**The rule to state.** First understand why the value is dirty, then choose the technique — a blind replace destroys both the error and the signal.\n\n**Exam line:** cleaning handles missing values, noise, outliers and duplicates, and the technique is chosen from the cause, not from convenience.',
              diagram: 'ds-cleaning',
              diagramCaption:
                'Data cleaning — techniques for missing values, noise and outliers, with the decision rule for choosing between them.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain data integration and its main challenges. Describe the techniques used to resolve schema conflict, duplicates and unit mismatch.',
              explain:
                '**What is being asked.** Integration combines several sources into one consistent dataset — and the whole difficulty is that the sources disagree.\n\n**The challenges.** Schema conflict (different column names or structures), entity resolution (is "Riya Sharma" the same person as "riya s."?), unit and currency mismatch, duplicate records, conflicting values for the same field, and missing lineage.\n\n**The techniques.** A common key or a surrogate key; a data dictionary and naming standard; unit and currency normalisation to a base; fuzzy matching and a master record for duplicates; and lineage recorded per column.\n\n**How to score the 5 marks.** Definition and aim (1) · four challenges (2) · the techniques (2).',
              answer:
                '**Data integration** is the process of combining data from multiple heterogeneous sources into a single, consistent dataset in which one row means one entity and all its attributes sit together.\n\n**The aim.** A single source of truth — one definition of a customer, one definition of revenue — so that two reports cannot disagree about the same number.\n\n**Challenges**\n\n| Challenge | What it looks like | Technique |\n|---|---|---|\n| **Schema conflict** | the same field is `cust_id` in one source and `customer_no` in another; a field is split or merged | build a data dictionary and a naming standard, then map every source field to the target schema |\n| **Entity resolution** | "Riya Sharma", "riya s.", "R. Sharma" — one person or three? | common or surrogate key first; fuzzy matching (name similarity, phone, address) and a master record where no key exists |\n| **Unit and currency mismatch** | kg and g, INR and USD, km and mile | convert everything to one base unit and one base currency, and record the conversion rate and date |\n| **Duplicates and conflicts** | the same customer twice with two different phone numbers | de-duplicate, keep a golden record, and keep the source of the chosen value |\n| **Missing lineage** | nobody knows which source produced a figure | record lineage per column: source, transformation, timestamp |\n\n**How integration is done.** Extract each source, transform it to the common schema, match the entities, merge into one dataset, validate the row counts and totals against the sources, and store the lineage. ETL and ELT tools automate exactly this sequence.\n\n**Why it matters.** Without lineage, a wrong number cannot be traced, and without entity resolution, one customer is counted three times — which is how two dashboards end up reporting different revenue for the same month.\n\n**Exam line:** integration brings heterogeneous sources onto one schema and one key, and the hard part is not the join — it is deciding that two rows describe the same person.',
              diagram: 'ds-integration',
              diagramCaption:
                'Data integration — the four challenges from schema conflict to lineage, and the techniques that resolve each one.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain data transformation. Describe normalisation, standardisation, encoding and discretisation with one use case each.',
              explain:
                '**What is being asked.** Transformation changes the shape and scale of data so that a model can use it. The examiner wants the four main operations and when each is used.\n\n**The operations.** Normalisation (min–max) to a 0–1 range — used when a distance or gradient method needs comparable scales with a bounded range. Standardisation (z-score) to mean 0 and standard deviation 1 — used when the algorithm assumes a normal distribution, as in regression and SVM. Encoding of categorical data — one-hot for nominal, ordinal for ordered categories. Discretisation — turning a continuous variable into bins, used for rules and for reducing noise.\n\n**The extra pair worth a line.** Log transformation for skewed positive data, and feature scaling inside a pipeline so that the test set is transformed with the training statistics.\n\n**How to score the 5 marks.** Definition and aim (1) · four operations with formula or meaning (3) · one use case each (1).',
              answer:
                '**Data transformation** changes data into the form the model needs: a different scale, a different distribution, a numeric representation of a category, or a coarser representation of a value.\n\n| Technique | What it does | Formula or rule | Use case |\n|---|---|---|---|\n| **Normalisation (min–max)** | scales to a fixed range, usually 0 to 1 | (x − min) / (max − min) | neural networks and KNN, where a bounded range keeps distances comparable |\n| **Standardisation (z-score)** | centres on 0 with standard deviation 1 | (x − mean) / standard deviation | linear regression, SVM and PCA, which assume a comparable spread |\n| **Encoding** | converts categories to numbers | one-hot for nominal; ordinal code for ordered categories | a "city" column becomes several 0/1 columns before a model can read it |\n| **Discretisation (binning)** | turns a continuous value into ordered bins | equal width, equal frequency, or domain cut points | age into 18–25, 26–35 and so on, for rule-based scoring and to damp noise |\n| **Log or power transform** | compresses a long right tail | log(x + 1) | income and price, which are usually skewed |\n\n**Why encoding has two forms.** A nominal category has no order, so a single numeric code (1, 2, 3) would make the model believe that category 3 is larger than category 1; one-hot avoids that. An ordinal category does have order, so one-hot would throw away information — an ordinal code is correct there.\n\n**The rule that prevents a classic mistake.** Fit the scaler on the training data only, then apply the same parameters to the test data. Scaling the whole dataset before the split leaks information from the test set into training and inflates the measured accuracy.\n\n**Exam line:** normalise for a bounded range, standardise for a comparable spread, encode categories as one-hot or ordinal, and bin only when the bins carry meaning.',
              diagram: 'ds-transformation',
              diagramCaption:
                'Data transformation — normalisation, standardisation, encoding, discretisation and the log transform, with a use case for each.',
            },
          ],
        },
      ],
    },
    {
      number: 3,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Explain the types of machine learning — supervised, unsupervised, semi-supervised and reinforcement learning — with one application of each.',
              explain:
                '**What is being asked.** A classification of learning by the kind of feedback available. The examiner wants the four types, what data each needs and one application.\n\n**The types.** Supervised — labelled data, learn a mapping from input to known output; classification and regression. Unsupervised — no labels, find structure; clustering, association, dimensionality reduction. Semi-supervised — a small labelled set and a large unlabelled one. Reinforcement — an agent learns from reward by acting in an environment.\n\n**The distinguishing question.** Does the data carry the correct answer? If yes, supervised. If no, unsupervised. If partly, semi-supervised. If the answer arrives as a reward after an action, reinforcement.\n\n**How to score the 5 marks.** Four types explained (3) · one application each (1) · the distinguishing question (1).',
              answer:
                'Machine learning is classified by the feedback available during learning.\n\n| Type | Data | What is learned | Application |\n|---|---|---|---|\n| **Supervised** | labelled — each row has the correct answer | a mapping from input to output: classification for categories, regression for numbers | churn prediction, credit scoring, house price estimation |\n| **Unsupervised** | unlabelled | structure: groups, associations, a lower-dimensional representation | customer segmentation, market basket analysis, PCA |\n| **Semi-supervised** | a small labelled set plus a large unlabelled set | a mapping that uses the unlabelled data to improve generalisation | labelling scanned documents where only a few thousand are tagged |\n| **Reinforcement** | no dataset — an agent acts and receives a reward | a policy that maximises long-run reward | game playing, robot navigation, recommendation with feedback, inventory control |\n\n**The distinguishing question.** Ask whether the correct answer is present in the data. If every row carries the answer, it is supervised; if no row does, it is unsupervised; if only a few do, it is semi-supervised; and if the answer arrives as a delayed reward after an action, it is reinforcement learning.\n\n**The examples that show the difference.** A spam filter is supervised because every training mail is already marked spam or not. Segmentation of customers into groups is unsupervised because nobody has defined the groups in advance. A recommendation system usually mixes both: unsupervised similarity to find neighbours, and supervised or reinforcement learning to rank what to show next.\n\n**Exam line:** labels decide the type — all rows labelled is supervised, none is unsupervised, a few is semi-supervised, and reward after action is reinforcement.',
              diagram: 'ds3-ml-types',
              diagramCaption:
                'The four types of machine learning by the feedback available, with the task and an application for each.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain the K nearest neighbours algorithm. State how k is chosen and why feature scaling is essential for it.',
              explain:
                '**What is being asked.** KNN is a lazy, instance-based learner: it stores the training data and, for a new point, looks at the k nearest stored points and takes a majority vote (classification) or an average (regression).\n\n**How k is chosen.** Small k — noisy, high variance, sensitive to outliers; large k — smooth but biased, and eventually every point votes the same. k is chosen by cross-validation, an odd number for two-class problems to avoid ties, and roughly the square root of n as a starting point.\n\n**Why scaling matters.** Distance is the whole algorithm, so a feature measured in rupees (0 to 1,00,000) drowns a feature measured in years (0 to 60). Without standardisation the algorithm effectively ignores the small-scale features.\n\n**How to score the 5 marks.** Algorithm with steps (2) · choice of k (1) · scaling with the reason (2).',
              answer:
                '**K nearest neighbours (KNN)** is a non-parametric, instance-based method: it does not build a model at training time. It stores the training rows, and when a new point arrives it computes the distance to every stored point, takes the k closest, and decides by majority vote (classification) or by the average of the neighbours (regression).\n\n**Steps**\n1. Choose k and a distance measure — Euclidean for continuous, Manhattan for grid-like data, cosine for text vectors.\n2. Scale the features, because distance is computed on all of them.\n3. For a new point, compute the distance to every training point.\n4. Take the k smallest distances and their labels.\n5. Classification: the majority label. Regression: the mean of the neighbours. With distance weighting, nearer neighbours count more.\n\n**Choosing k**\n\n| k | Effect |\n|---|---|\n| very small (k = 1) | the model follows every noise point; high variance; one outlier decides the answer |\n| moderate | the usual compromise, found by cross-validation |\n| very large | the neighbourhood covers everything, so every prediction tends toward the majority class; high bias |\n\nPractical rules: try a range of values with k-fold cross-validation, choose an odd number for a two-class problem to avoid a tie, and start from roughly the square root of the number of training rows.\n\n**Why scaling is essential.** KNN never multiplies by a learned weight; it only measures distance. If income ranges to 1,00,000 and experience to 40, the income difference dominates every distance and the experience feature is effectively ignored. Standardising each feature to mean 0 and standard deviation 1 makes the distance meaningful — and it must be fitted on the training data only.\n\n**The trade-off to mention.** KNN is easy to explain and needs no training time, but it is slow at prediction on large data, memory-hungry, sensitive to irrelevant features and to the curse of dimensionality.\n\n**Exam line:** KNN classifies by the company a point keeps — choose k by cross-validation, scale the features, and remember that the model is the training data itself.',
              diagram: 'ds3-knn',
              diagramCaption:
                'K nearest neighbours — the distance computation, the vote among k neighbours, and the effect of small and large k.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain the naive Bayes classifier using a spam filtering example, and state why the independence assumption is called naive.',
              explain:
                '**What is being asked.** Naive Bayes applies Bayes theorem to classification and assumes that features are conditionally independent given the class. The examiner wants the formula, a worked spam example and the reason for the word "naive".\n\n**The formula.** P(class | features) is proportional to P(class) times the product of P(feature | class). The class with the highest value wins.\n\n**The example.** Compute P(spam) and P(ham) from the training set, then the likelihood of each word in each class, multiply, and compare.\n\n**Why naive.** Words in a mail are obviously not independent — "free" and "offer" travel together — but the assumption still produces good rankings, so it is naive and useful at the same time.\n\n**How to score the 5 marks.** Formula (1) · worked example (2) · the independence point (1) · one strength and one weakness (1).',
              answer:
                '**Naive Bayes** is a probabilistic classifier built on Bayes theorem with one simplifying assumption: every feature is conditionally independent of every other feature, given the class.\n\n**Formula.** For a class c and features x1 to xn:\nP(c | x1…xn) is proportional to P(c) × P(x1 | c) × P(x2 | c) × … × P(xn | c)\nThe predicted class is the one with the largest value; the denominator P(features) is the same for every class, so it can be ignored for a decision.\n\n**Spam filtering example.** Training data: 60 percent of mails are spam. The word "free" appears in 40 percent of spam and 2 percent of ham; "meeting" appears in 5 percent of spam and 30 percent of ham. For a new mail containing both words:\n\n| Class | Prior | P(free) | P(meeting) | Score (proportional) |\n|---|---|---|---|---|\n| spam | 0.60 | 0.40 | 0.05 | 0.60 × 0.40 × 0.05 = 0.0120 |\n| ham | 0.40 | 0.02 | 0.30 | 0.40 × 0.02 × 0.30 = 0.0024 |\n\nThe spam score is five times the ham score, so the mail is classified as spam. In practice the log of the probabilities is summed, because multiplying many small numbers underflows.\n\n**Why it is called naive.** The assumption is false: the words in a mail are strongly dependent, and "free" almost always arrives with "offer". The classifier is naive about that dependence, yet it still ranks classes well — which is why it remains a standard baseline for text classification, and why Laplace smoothing is added so that an unseen word does not zero the whole product.\n\n**The trade-off.** Training is extremely fast and works with little data; the independence assumption caps its accuracy when features are strongly correlated, and calibrated probabilities should not be trusted even when the ranking is good.\n\n**Exam line:** naive Bayes multiplies the prior by the likelihood of each feature and picks the largest — naive about independence, surprisingly effective in practice.',
              diagram: 'ds3-naive-bayes',
              diagramCaption:
                'Naive Bayes — the prior, the likelihoods and the posterior, with a spam example that compares the two class scores.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain the decision tree algorithm. Define entropy and information gain, and state one advantage and one disadvantage of decision trees.',
              explain:
                '**What is being asked.** A decision tree splits the data repeatedly on the feature that separates the classes best. The examiner wants the split criterion — entropy and information gain — plus the strengths and weaknesses.\n\n**Entropy.** A measure of impurity: 0 for a pure node, 1 for a two-class node split 50–50. **Information gain.** The impurity before the split minus the weighted impurity after it; the split with the highest gain is chosen.\n\n**Advantages.** Interpretable, no scaling needed, handles non-linearity, works with mixed data. **Disadvantages.** Overfits without pruning or a depth limit, is unstable to small data changes, and a single tree is usually less accurate than an ensemble.\n\n**How to score the 5 marks.** Algorithm (2) · entropy and information gain with a small calculation (2) · two limitations and one advantage (1).',
              answer:
                'A **decision tree** is a supervised model that splits the data repeatedly into purer subsets, using a sequence of if-then tests, until each leaf is (almost) a single class or a stable average.\n\n**Entropy.** Entropy measures impurity in a node: H = −Σ p log2 p. A node with one class only has entropy 0; a two-class node split 50–50 has entropy 1 (the maximum).\n\n**Information gain.** For a candidate split:\nGain = H(parent) − Σ (n_i / n) × H(child_i)\nThe split with the highest gain is chosen, and the process repeats inside each child.\n\n**Worked example.** A node has 10 records: 6 positive, 4 negative. H(parent) = −(0.6 log2 0.6 + 0.4 log2 0.4) = 0.971. Splitting on a feature gives child A with 5 records all positive (H = 0) and child B with 5 records, 1 positive and 4 negative (H = 0.722). Weighted child entropy = 0.5 × 0 + 0.5 × 0.722 = 0.361, so the gain is 0.971 − 0.361 = **0.610**. That gain is compared with every other candidate feature, and the highest wins.\n\n| Aspect | Detail |\n|---|---|\n| **Advantage** | interpretable as a flow of rules, needs no feature scaling, captures non-linear relations, handles numeric and categorical data |\n| **Disadvantage** | overfits easily — a deep tree memorises the training data — so depth limits, minimum leaf size or pruning are required |\n| **Also a weakness** | unstable: a small change in the data can produce a different tree; and a single tree is usually less accurate than a random forest or a boosted ensemble |\n\n**Variants worth naming.** CART uses the Gini index rather than entropy; ID3 and C4.5 use entropy and gain ratio; random forests average many trees to reduce variance.\n\n**Exam line:** a decision tree repeatedly chooses the split with the highest information gain — readable and flexible, but it must be pruned or it memorises.',
              diagram: 'ds3-decision-tree',
              diagramCaption:
                'A decision tree — the split on the feature with the highest information gain, and the entropy calculation behind it.',
            },
          ],
        },
      ],
    },
    {
      number: 4,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Explain the distance measures used in clustering — Euclidean, Manhattan, Minkowski and cosine — with one use case each.',
              explain:
                '**What is being asked.** Every distance-based algorithm depends on the measure, and the choice changes the clusters. The examiner wants the four measures, the formula idea and a use case.\n\n**The measures.** Euclidean — straight line, sensitive to scale, good for continuous low-dimensional data. Manhattan — sum of absolute differences, more robust to outliers, good for grid or city data. Minkowski — the generalisation with a parameter p that becomes Euclidean at p = 2 and Manhattan at p = 1. Cosine — the angle between vectors, ignores magnitude, the standard for text and high-dimensional sparse data.\n\n**Why it matters.** A cluster is defined by "close", so the measure is the definition of similarity. Cosine on text avoids the long-document bias; Euclidean on unscaled features lets the largest unit dominate.\n\n**How to score the 5 marks.** Four measures (2) · formula idea or property of each (2) · scaling and use cases (1).',
              answer:
                'A **distance measure** defines what "similar" means. Every clustering and neighbour-based method inherits that definition.\n\n| Measure | Formula idea | Property | Use case |\n|---|---|---|---|\n| **Euclidean** | square root of the sum of squared differences | straight-line distance; sensitive to scale and to outliers | K-means on scaled, continuous, low-dimensional data |\n| **Manhattan (city block)** | sum of absolute differences | more robust to outliers than Euclidean; measures along axes | grid movement, warehouse layout, robust clustering |\n| **Minkowski** | the general power form; p = 2 gives Euclidean, p = 1 gives Manhattan | one family, a tunable sensitivity | experimenting with the sensitivity of a distance |\n| **Cosine** | 1 minus the cosine of the angle between two vectors | ignores magnitude, uses direction only | text and TF-IDF vectors, where a long document should not be "further" merely for being long |\n| **Jaccard** | intersection over union of sets | for binary or set data | market basket items, presence-absence data |\n\n**Why the choice matters**\n1. **Scale.** Euclidean distance adds the squared differences of every feature, so a feature measured in lakhs drowns a feature measured in tens. Standardisation is mandatory before a Euclidean or Manhattan distance.\n2. **Outliers.** Squaring in Euclidean exaggerates a single large difference; Manhattan does not, which is why it is preferred on noisy data.\n3. **Dimension.** In high dimensions Euclidean distances concentrate — every pair looks equally far — which is one reason text uses cosine.\n4. **Meaning.** Cosine compares the profile of a document rather than its length, which is the right question for text and the wrong one for physical distance.\n\n**Exam line:** Euclidean for scaled physical data, Manhattan for robustness, Minkowski as the family, cosine for text — the measure is the definition of similar.',
              diagram: 'ds4-distances',
              diagramCaption:
                'Distance measures used in clustering — Euclidean, Manhattan, Minkowski and cosine — with their properties and use cases.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain the K-means clustering algorithm with its steps. State how the number of clusters is chosen and two limitations of the method.',
              explain:
                '**What is being asked.** K-means alternates two steps — assign each point to the nearest centroid, then move each centroid to the mean of its members — until nothing changes. The examiner wants the steps, the choice of k and the limitations.\n\n**The steps.** Choose k and initial centroids; assign; update; repeat until the assignments stop changing or the objective stops improving. **The objective.** Minimise WCSS — the within-cluster sum of squares, also called inertia.\n\n**Choosing k.** The elbow method plots WCSS against k and looks for the bend; the silhouette score measures how well separated the clusters are. **Limitations.** k must be given, outliers drag the mean, only spherical clusters of similar size are found, and the result depends on initialisation — hence k-means++ and multiple restarts.\n\n**How to score the 5 marks.** Steps (2) · objective and choice of k (2) · two limitations with mitigation (1).',
              answer:
                '**K-means** partitions n points into k clusters by repeatedly assigning each point to the nearest centroid and moving each centroid to the mean of its members.\n\n**Steps**\n1. Choose k (the number of clusters).\n2. Initialise k centroids — randomly, or with k-means++ which spreads the initial centroids apart.\n3. **Assign** every point to the nearest centroid by Euclidean distance.\n4. **Update** every centroid to the mean of the points assigned to it.\n5. Repeat steps 3 and 4 until the assignments stop changing or the objective stops improving.\n6. Report the clusters and the objective value.\n\n**The objective.** K-means minimises the **within-cluster sum of squares (WCSS)**, also called inertia: the sum over all points of the squared distance to their own centroid. A smaller WCSS means tighter clusters — but WCSS always falls as k rises, so it cannot be used alone to choose k.\n\n**Choosing k**\n\n| Method | How it works |\n|---|---|\n| **Elbow method** | plot WCSS against k; the true k is usually where the curve bends and further clusters stop reducing the error much |\n| **Silhouette score** | for each point compare its average distance inside the cluster with its average distance to the nearest other cluster; a score near 1 means well separated, near 0 means overlapping |\n| **Domain knowledge** | the business may already define the number — four customer tiers, five regions |\n\n**Limitations and the mitigation**\n1. **k must be supplied** — hence the elbow and silhouette methods.\n2. **Outliers pull the mean** — a single extreme point can drag a centroid; remove or cap outliers first, or use K-medoids.\n3. **Only convex, similar-sized clusters** — K-means cannot find a ring or two moons; use DBSCAN or hierarchical clustering instead.\n4. **Local optima** — the answer depends on the initial centroids; run several times with k-means++ and keep the solution with the lowest WCSS.\n\n**Exam line:** assign, update, repeat — K-means minimises WCSS, k comes from the elbow or silhouette, and outliers are handled before the mean is trusted.',
              diagram: 'ds4-kmeans',
              diagramCaption:
                'K-means — the assign-and-update loop, the WCSS objective, and the elbow plot used to choose k.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain the Apriori algorithm for association rule mining with its steps, and state why the candidate generation is expensive.',
              explain:
                '**What is being asked.** Apriori finds frequent itemsets by a level-wise search with one rule: if an itemset is infrequent, every superset of it is also infrequent, so it can be pruned. The examiner wants the steps and the cost.\n\n**The steps.** Count 1-itemsets and drop those below minimum support; generate candidate 2-itemsets from the survivors; count them by scanning the data; prune; repeat for 3-itemsets and so on until no candidate survives; then generate rules from the frequent itemsets and filter by confidence.\n\n**The cost.** Each level needs a full scan of the transaction data, and the number of candidate itemsets can grow exponentially — the whole point of FP-Growth is to avoid candidate generation.\n\n**How to score the 5 marks.** The principle (1) · steps (2) · example of pruning (1) · the cost (1).',
              answer:
                '**Apriori** is an algorithm for finding frequent itemsets in transaction data, on which association rules are then built. It relies on the **Apriori property**: if an itemset is infrequent, every superset that contains it is also infrequent, so the superset can be pruned without ever being counted.\n\n**Steps**\n1. Set **minimum support** (for example 2 out of 5 transactions, or 40 percent).\n2. **Scan the data** and count every 1-itemset; keep those at or above minimum support (the frequent 1-itemsets).\n3. **Generate candidates** for the next size by joining the frequent itemsets of the previous level.\n4. **Prune** any candidate that contains an infrequent subset, because it cannot be frequent.\n5. **Scan and count** the surviving candidates; keep those above minimum support.\n6. **Repeat** steps 3 to 5 until no candidate survives.\n7. **Generate rules** from each frequent itemset and keep those whose confidence is at or above minimum confidence.\n\n**Worked pruning example.** With 5 transactions and minimum support 2: {milk} appears 4 times, {bread} 4, {diaper} 3, {beer} 3, {eggs} 1. {eggs} is below support, so it is dropped. Candidate {eggs, milk} is never generated, because any superset of an infrequent itemset must be infrequent — four candidates are eliminated by one count.\n\n**Why candidate generation is expensive**\n1. **Every level needs a full scan** of the transaction database, so a large database is read once per level.\n2. **The candidate set can explode** — with m items there are 2^m possible itemsets, and the join step can create a very large candidate list before pruning reduces it.\n3. **Long itemsets need many levels**, so the cost grows with the length of the longest frequent itemset.\n\nThis cost is exactly what **FP-Growth** removes: it compresses the data into an FP-tree and mines it without generating candidates, using two scans only.\n\n**Exam line:** Apriori counts level by level and prunes with the property that an infrequent set cannot have a frequent superset — correct and simple, but expensive because of repeated scans and candidate explosion.',
              diagram: 'ds4-apriori',
              diagramCaption:
                'The Apriori algorithm — level-wise candidate generation, the pruning rule, and the repeated scans that make it costly.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Define support, confidence and lift with one worked example, and explain why lift is needed when confidence is high.',
              explain:
                '**What is being asked.** Three measures that score an association rule X → Y. Support is how common the combination is, confidence is how reliable the rule is, lift is whether the rule beats chance.\n\n**The formulas.** Support = P(X and Y). Confidence = P(Y | X) = support(X and Y) / support(X). Lift = confidence / support(Y) = P(Y | X) / P(Y).\n\n**Why lift.** Bread → milk can show confidence 0.75 simply because 80 percent of baskets contain milk anyway; lift below 1 exposes the rule as worthless. Lift above 1 means a genuine positive association.\n\n**How to score the 5 marks.** Three definitions with formula (2) · worked example (2) · the lift argument (1).',
              answer:
                'An **association rule** X → Y says that a basket containing X tends to contain Y. Three measures decide whether the rule is worth acting on.\n\n| Measure | Question it answers | Formula |\n|---|---|---|\n| **Support** | how common is the combination? | support(X∪Y) = transactions containing both / total transactions |\n| **Confidence** | how reliable is the rule? | confidence(X→Y) = support(X∪Y) / support(X) |\n| **Lift** | does the rule beat chance? | lift = confidence(X→Y) / support(Y) = P(Y|X) / P(Y) |\n\n**Worked example.** 5 baskets: {bread, milk}, {bread, milk}, {bread, milk, beer}, {milk, beer}, {bread, beer}. For the rule bread → milk: baskets with both = 3, baskets with bread = 4, baskets with milk = 4, total = 5.\n- support = 3 / 5 = **0.60**\n- confidence = 3 / 4 = **0.75** — 75 percent of bread baskets also carry milk\n- lift = 0.75 / (4 / 5) = 0.75 / 0.80 = **0.94**\n\nA lift of 0.94 is below 1: milk is slightly **less** likely when bread is present than in general, so the rule is a coincidence of milk being everywhere. Compare diaper → beer with support 0.60, confidence 0.75 and lift 1.25 — the same support and confidence, but a real positive association because beer is in only 60 percent of baskets.\n\n**Why lift is needed.** Confidence is directional but blind to the base rate. Anything → milk will show high confidence in a store where most baskets contain milk. Lift divides by that base rate, so a value above 1 means the items genuinely attract each other, a value of 1 means independence, and below 1 means they repel.\n\n**Two further measures for a good answer.** Leverage = P(X∪Y) − P(X)P(Y), the absolute deviation from independence; conviction = (1 − support(Y)) / (1 − confidence), which rises sharply as confidence approaches 1.\n\n**Exam line:** support measures frequency, confidence measures reliability, lift measures whether the rule beats chance — and only lift can expose a confident rule that means nothing.',
              diagram: 'ds4-support-confidence',
              diagramCaption:
                'Support, confidence and lift worked on the same five baskets, showing how lift separates a real association from a coincidence.',
            },
          ],
        },
      ],
    },
    {
      number: 5,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Explain the data visualization pipeline and the visual encodings used, stating which encodings people read most accurately.',
              explain:
                '**What is being asked.** Visualization is a pipeline from raw data to a perceptual insight. The examiner wants the stages and the encodings, ordered by accuracy.\n\n**The pipeline.** Data → transformation (aggregate, filter) → encoding (choose marks and channels) → perception (the eye reads it) → insight (a decision).\n\n**The encodings.** Position on a common scale, length, angle and slope, area, colour hue, colour intensity, shape. Position and length are read most accurately; area and angle are read poorly; colour is good for categories and for highlighting, not for precise comparison.\n\n**The rule that carries marks.** Choose the chart from the question and the data type, not from habit; and put the most important comparison on the most accurate channel.\n\n**How to score the 5 marks.** Pipeline stages (2) · encodings ordered (2) · the rule (1).',
              answer:
                '**Data visualization** converts a table into a picture so that the eye can do the comparison that the mind would otherwise have to compute.\n\n**The pipeline**\n\n| Stage | What happens |\n|---|---|\n| **1. Data** | the table, with its types and scales identified |\n| **2. Transformation** | filter, aggregate, derive a ratio, sort — decide what the picture will compare |\n| **3. Encoding** | map fields to marks (bar, point, line, area) and channels (position, length, colour, size, shape) |\n| **4. Perception** | the eye decodes position, length, colour and motion pre-attentively, in milliseconds |\n| **5. Insight** | a difference, a trend or an exception becomes visible and supports a decision |\n\n**Encodings ordered by accuracy**\n1. **Position on a common scale** — the most accurate; this is why bar and line charts work.\n2. **Length** — accurate and intuitive; a bar length is read reliably.\n3. **Angle and slope** — less accurate; a pie slice is judged poorly beyond three or four categories.\n4. **Area and volume** — the eye underestimates; a bubble chart is good for the big picture, not for exact values.\n5. **Colour hue** — good for categories and for highlighting an exception, poor for magnitude; colour intensity can encode magnitude if a sequential palette is used.\n\n**The rule.** Choose the chart from the question and the data type, and put the most important comparison on the most accurate channel. If the task is to rank, use position; if it is to show a trend, use position with time on the x axis; if it is to show one proportion, use a single number or a bar before reaching for a pie.\n\n**Pre-attentive processing.** Colour, size and position differences are noticed within about a quarter of a second, before conscious reading. That is why an exception is coloured and everything else is kept grey — the picture does the searching for the reader.\n\n**Exam line:** data to encoding to perception to insight — position is read best, area and angle worst, so put the question you care about on the strongest channel.',
              diagram: 'ds5-visualization-intro',
              diagramCaption:
                'The visualization pipeline from data to insight, with the visual encodings ordered by how accurately people read them.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain the basic chart types — bar, line, pie, scatter and histogram — stating the question each answers and the one rule that keeps each honest.',
              explain:
                '**What is being asked.** A chart-selection question. Each chart answers one question well and misleads when used for another; the examiner wants the match and the rule.\n\n**The charts.** Bar — compare categories. Line — trend over time. Pie — part of a whole for two or three slices. Scatter — relationship between two numeric variables. Histogram — distribution of one numeric variable.\n\n**The rules.** Bar: start at zero and sort. Line: keep the time axis evenly spaced and do not connect unrelated points. Pie: only for a few slices and never for ranking. Scatter: handle overplotting with transparency or hexbinning. Histogram: bins are continuous and touch, unlike a bar chart.\n\n**How to score the 5 marks.** Five charts with the question each answers (3) · the rule for each (2).',
              answer:
                'Each basic chart answers one kind of question; using it for another is where misleading pictures begin.\n\n| Chart | Question it answers | Rule that keeps it honest |\n|---|---|---|\n| **Bar** | how do categories compare? | start the axis at zero, sort by value, keep bars one width, and label values at the end |\n| **Line** | how does a value change over time? | keep the time axis evenly spaced, one line per series, direct labels instead of a legend |\n| **Pie / donut** | what is the share of a whole? | use it for two or three slices only, never for ranking or for many categories |\n| **Scatter** | is there a relationship between two numeric variables? | use transparency or hexbinning when points overlap, and do not imply causation |\n| **Histogram** | how is one numeric variable distributed? | bins are continuous and touch each other; state the bin width |\n\n**Two tests worth quoting.** For category comparison, the bar beats the pie whenever slices must be ranked or a small difference must be seen, because position along a common scale is read far more accurately than angle. For a distribution, the histogram beats a bar chart of averages, because an average hides a second peak.\n\n**The histogram-versus-bar distinction.** In a bar chart the bars are separate categories and the gaps are meaningful; in a histogram the bars represent continuous ranges, so they touch — a gap would imply that no value falls in an interval that actually exists.\n\n**The stacked-bar limitation.** In a stacked bar only the bottom segment shares a common baseline, so only that segment can be compared across bars. For the middle segments use a 100 percent stacked bar or small multiples.\n\n**Exam line:** bar for comparison, line for trend, pie for a two-slice share, scatter for a relationship, histogram for a distribution — and every one of them has one rule that keeps it honest.',
              diagram: 'ds5-charts-basic',
              diagramCaption:
                'Basic chart types, the question each answers, and the rule that prevents the most common misuse of each.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain the common ways a visualization misleads, and the checks that catch each one. Illustrate with Simpson paradox.',
              explain:
                '**What is being asked.** Misleading charts are usually made with four tools: a truncated axis, the wrong chart type, aggregation that hides a group, and a misleading colour or area encoding.\n\n**The traps.** Truncated y-axis exaggerates a small change; pie with many slices hides ranking; dual axes imply a relationship; 3-D and area encodings distort magnitude; cherry-picked time range; and Simpson paradox, where a trend in every group reverses in the aggregate.\n\n**The checks.** Zero baseline or a clearly marked break; the right chart for the question; show the groups as well as the total; state the time window; and plot before computing a summary.\n\n**How to score the 5 marks.** Four traps explained (2) · the checks (2) · the Simpson paradox explanation with example (1).',
              answer:
                'A visualization misleads when the picture suggests a conclusion the data does not support.\n\n| Trap | How it misleads | Check |\n|---|---|---|\n| **Truncated axis** | starting the y axis at 95 makes a 2 percent change look like a doubling | start at zero, or mark the break explicitly and write the range |\n| **Wrong chart type** | a pie with twelve slices, or a line chart for unordered categories | choose the chart from the question and the data type |\n| **Aggregation that hides groups** | the total moves one way while every group moves the other | show the grouped view beside the total — this is the Simpson trap |\n| **Dual axes** | two unrelated series are scaled to cross, implying a relationship | avoid dual axes; use two aligned panels with a shared x axis |\n| **Area and 3-D distortion** | doubling the radius of a bubble quadruples the visible area | encode magnitude by position or length, and label the values |\n| **Cherry-picked window** | a start date chosen to make a trend look strong | show the full period and mark the window that was selected |\n\n**Simpson paradox.** A trend that appears in every subgroup can reverse when the subgroups are combined, because the sizes of the groups differ. Classic example: treatment A has a higher recovery rate than treatment B in the mild cases (93 percent against 87 percent) and in the severe cases (73 percent against 69 percent), yet overall B looks better (83 percent against 78 percent) because B was given mostly to mild cases. The aggregate is not wrong arithmetic — it is answering a different question, and the grouped view is the honest one.\n\n**The habit that prevents all of it.** Plot first, summarise second; show the distribution and not only the mean; and state the range, the window and the group sizes beside every claim.\n\n**Exam line:** a truncated axis exaggerates, a wrong chart type hides, aggregation reverses — so show the groups, start at zero and plot before you summarise.',
              diagram: 'ds5-challenges',
              diagramCaption:
                'Common ways a visualization misleads — truncated axes, wrong chart types and aggregation — with the check for each and Simpson paradox.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain the types of dashboards — operational, tactical and strategic — and state how each differs in audience, refresh rate and content.',
              explain:
                '**What is being asked.** Dashboards are classified by the decision they support. The examiner wants the three types with audience, refresh rate and content, because those three columns are the marks.\n\n**The types.** Operational — monitor now, refreshed continuously, detailed, used by front-line staff. Tactical — analyse the near term, refreshed daily or weekly, used by managers, with drill-down. Strategic — track long-term goals, refreshed monthly or quarterly, used by the executive, with few KPIs and trends.\n\n**The rules.** One screen, five to seven KPIs, the five-second rule, and a clear difference between a dashboard (monitor), a report (record) and a scorecard (target).\n\n**How to score the 5 marks.** Three types with audience and refresh (3) · content difference (1) · one design rule (1).',
              answer:
                'A dashboard is a single screen built for monitoring, not a report and not a data dump. It is classified by the decision it supports.\n\n| Type | Audience | Refresh | Content |\n|---|---|---|---|\n| **Operational** | front-line staff and supervisors | continuous or near real time | current status, queue depth, failure counts, alerts — detail and action links |\n| **Tactical** | department managers | daily or weekly | trends against the previous period, comparisons by team or region, drill-down into the cause |\n| **Strategic** | executives and the board | monthly or quarterly | five to seven KPIs against target, long-term trends, one number per objective |\n\n**How the three differ.** The operational dashboard answers "is anything broken right now?" and must be fast and detailed; the tactical dashboard answers "where are we against plan this month and why?" and must support slicing; the strategic dashboard answers "are we moving toward the goal?" and must resist detail, because a board meeting needs direction, not a transaction list.\n\n**Design rules that apply to all three**\n1. **One screen, no scroll** — 5 to 7 KPIs; anything more is a report.\n2. **Five-second rule** — purpose, status and exception visible at a glance.\n3. **Exception first** — grey base with one accent colour for the item that needs attention.\n4. **Context on every number** — target, previous period, or trend, because a number alone is not information.\n\n**The distinction worth stating.** A **dashboard** monitors the current state, a **report** holds the detailed record, and a **scorecard** compares KPIs with targets for accountability. All three can be built from the same star schema; the delivery format is what differs.\n\n**Exam line:** operational watches the minute, tactical watches the month, strategic watches the year — one screen, few KPIs, and the exception visible in five seconds.',
              diagram: 'ds5-dashboard-types',
              diagramCaption:
                'Operational, tactical and strategic dashboards compared by audience, refresh rate and content, with the design rules shared by all three.',
            },
          ],
        },
      ],
    },
  ],
};
