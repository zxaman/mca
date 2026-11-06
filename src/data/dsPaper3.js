// Data Science Paper 3 — Model Paper (5 + 5 division)
//
// Second 5 + 5 paper: every question is (a) 5 + (b) 5, with a 5 + 5 OR set.
//
// Topic map (all different from Papers 1, 2 and 4):
//   Unit 1 — 1.7 CRISP-DM, 1.9 applications of data science, 1.13 role of
//            statistics, 1.8 data science and related fields
//   Unit 2 — 2.5 data reduction, 2.10 OLAP versus OLTP, 2.9 snowflake schema,
//            2.1 data pre-processing overview
//   Unit 3 — 3.3 linear regression, 3.10 precision, recall and F1,
//            3.2 classification applications, 3.12 regression metrics
//   Unit 4 — 4.7 market basket analysis, 4.1 distance and similarity measures,
//            4.2 K-means initialisation, 4.5 silhouette score
//   Unit 5 — 5.10 reinforcement learning, 5.11 generative models and XAI,
//            5.4 dashboard evolution, 5.7 special charts

export const dsPaper3 = {
  id: 'ds-paper-3',
  number: 3,
  name: 'Paper 3',
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
                'Explain the CRISP-DM methodology with its six phases, and state why the model is drawn as a cycle.',
              explain:
                '**What is being asked.** CRISP-DM is the standard process model for data mining and data science. The examiner wants the six phases in order and the reason for the arrows that run backwards.\n\n**The phases.** Business understanding, data understanding, data preparation, modelling, evaluation, deployment.\n\n**Why a cycle.** Evaluation sends the team back to modelling or to data preparation; deployment produces monitoring that sends the team back to business understanding when the objective changes. The cycle is the point: the process is iterative, not a waterfall.\n\n**How to score the 5 marks.** Six phases (3) · the iterative argument (1) · one note on effort distribution (1).',
              answer:
                '**CRISP-DM** (Cross-Industry Standard Process for Data Mining) is the most widely used process model for a data science project. It has six phases.\n\n| Phase | What is done | Output |\n|---|---|---|\n| **1. Business understanding** | define the objective, the decision, the success metric and the constraints | project charter with a measurable goal |\n| **2. Data understanding** | collect initial data, describe it, explore it, check quality | data description and quality report |\n| **3. Data preparation** | select, clean, construct and integrate the data | modelling-ready dataset |\n| **4. Modelling** | choose techniques, design the test, build and tune the model | trained model with parameters |\n| **5. Evaluation** | measure against the business objective, review the process, decide the next step | evaluation report and go or no-go |\n| **6. Deployment** | deliver as a report, a service or a process change; monitor and maintain | deployed result and a maintenance plan |\n\n**Why it is drawn as a cycle.** Evaluation frequently shows that a model is accurate but useless for the business objective, which sends the team back to phase 1; or that a feature cannot be built as expected, which sends it back to phase 3; or that a different algorithm suits the data better, which sends it back to phase 4. After deployment, monitoring shows drift and the cycle begins again with a new objective.\n\n**Where the effort sits.** Preparation dominates — commonly 50 to 70 percent of the project — and business understanding, though short, decides whether the other five phases are worth doing.\n\n**The advantage to state.** Because the phases are named and their outputs defined, a project can be reviewed at each boundary: the sponsor signs off the objective, the analyst signs off the data, the scientist signs off the model.\n\n**Exam line:** business understanding, data understanding, preparation, modelling, evaluation, deployment — six phases, and the arrows run backwards because evaluation changes the plan.',
              diagram: 'crisp-dm',
              diagramCaption:
                'The six phases of CRISP-DM with the iteration arrows that make it a cycle rather than a waterfall.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain five application areas of data science with one concrete use case each and the metric that would be used to judge success.',
              explain:
                '**What is being asked.** Breadth with specificity. The examiner wants five domains, a use case and a success metric for each, because a metric is what separates an application from a wish.\n\n**The five.** Retail — demand forecasting and basket analysis, judged by forecast error and basket size. Banking — credit scoring and fraud detection, judged by AUC and fraud loss avoided. Healthcare — readmission risk and image diagnosis, judged by recall and false positive rate. Telecom — churn prediction, judged by saved revenue against campaign cost. Transport and logistics — route and ETA prediction, judged by on-time percentage.\n\n**The rule.** Every application ends with an action and a measured outcome.\n\n**How to score the 5 marks.** Five domains with use cases (3) · metrics (1) · the action-and-outcome rule (1).',
              answer:
                'Data science is applied wherever a decision can be improved by a prediction from data. Five domains cover the syllabus.\n\n| Domain | Use case | Model | Success metric |\n|---|---|---|---|\n| **Retail** | demand forecasting and market basket analysis | time-series regression, association rules | forecast error (MAPE), average basket size, stock-out rate |\n| **Banking and finance** | credit scoring, fraud detection, customer churn | logistic regression, gradient boosting, anomaly detection | AUC, precision at a fixed review budget, fraud loss avoided |\n| **Healthcare** | readmission risk, diagnostic imaging support, appointment no-shows | classification, computer vision | recall of high-risk patients, false positive rate, no-show reduction |\n| **Telecom** | churn prediction and network fault detection | classification, anomaly detection | churn saved against campaign cost, mean time to detect a fault |\n| **Transport and logistics** | ETA prediction, route optimisation, predictive maintenance | regression, optimisation, survival models | on-time percentage, fuel per trip, unplanned downtime hours |\n| **Manufacturing** | predictive maintenance and quality inspection | time-series, computer vision | unplanned downtime, defect escape rate |\n\n**Why the metric matters.** Each use case ends with a decision: offer a retention deal, block a transaction, schedule maintenance. Without a metric that measures the decision, the model cannot be judged, and without a decision, the model is only a demonstration.\n\n**The common shape.** Every application follows the same chain — a problem with a cost, data that describes it, a model that predicts, a process that acts, and a measurement that compares the outcome with a control.\n\n**Exam line:** retail, banking, healthcare, telecom, transport — each application is a prediction plus an action plus a metric.',
              diagram: 'ds-applications',
              diagramCaption:
                'Application areas of data science with the model used and the business metric that judges success.',
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
                'Explain the role of statistics in data science — descriptive, inferential and the concepts of distribution, sampling and hypothesis testing.',
              explain:
                '**What is being asked.** Statistics is the part of data science that decides whether a result is real. The examiner wants the descriptive and inferential halves and the three concepts.\n\n**Descriptive.** Summarising the data: mean, median, spread, correlation, distribution. **Inferential.** Generalising from a sample to a population: confidence intervals, hypothesis tests, p-values, effect size.\n\n**The concepts.** Distribution — the shape of a variable and the model it follows; sampling — how the sample was drawn decides whether the inference is valid; hypothesis testing — a null hypothesis, a test statistic, a decision, with the risk of false positive and false negative.\n\n**How to score the 5 marks.** Descriptive and inferential (2) · distribution, sampling and testing (2) · the value statement (1).',
              answer:
                'Statistics is the part of data science that answers a different question from the model: not "what does the data suggest" but "how much confidence does the evidence justify".\n\n**Descriptive statistics** summarise the data that exists: mean, median, mode, variance, standard deviation, quartiles, correlation, and the shape of the distribution. They are the first thing computed and the thing that reveals anomalies — a mean far from the median signals skew, and a standard deviation larger than the mean signals a heavy tail.\n\n**Inferential statistics** generalise from a sample to a population: a confidence interval for an estimate, a hypothesis test for a difference, and an effect size for practical significance.\n\n| Concept | What it decides | Why it matters |\n|---|---|---|\n| **Distribution** | the shape a variable follows — normal, skewed, bimodal | it decides which test and which model are valid, and a mean of a bimodal variable describes nobody |\n| **Sampling** | how the sample was drawn — random, stratified, convenience | only a representative sample supports a generalisation; a biased sample gives a confident wrong answer |\n| **Hypothesis testing** | whether an observed difference is larger than chance | it protects against announcing a 2 percent lift that is noise |\n\n**Hypothesis testing in one line.** State a null hypothesis (no difference), choose a test, compute a statistic and a p-value, and reject the null when the p-value is below the agreed threshold — while remembering that a significant result can still be too small to matter, and that testing many hypotheses produces false positives unless it is corrected.\n\n**The value statement.** A machine learning model gives a prediction; statistics says how much that prediction can be trusted, whether the difference is real, and how large the sample must be before the answer means anything. Without it, a data scientist is a person who reports numbers.\n\n**Exam line:** descriptive statistics describe what is there, inferential statistics decide what can be concluded, and sampling decides whether either is worth anything.',
              diagram: 'stats-foundation',
              diagramCaption:
                'The role of statistics in data science — descriptive summaries, inferential tests and the sampling that supports them.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain how data science relates to statistics, computer science, machine learning, artificial intelligence and business intelligence, and where they overlap.',
              explain:
                '**What is being asked.** A relationship question — several disciplines that are often treated as synonyms. The examiner wants the contribution of each and the overlap.\n\n**The relationships.** Statistics gives inference; computer science gives algorithms, storage and scale; machine learning is the modelling toolkit inside data science; AI is the broader goal, of which ML is a part; BI is descriptive reporting on known questions.\n\n**The overlap.** Data science is the practice that combines them for a decision; ML is a tool it uses, not a synonym; BI and data science overlap in reporting and diverge in prediction.\n\n**How to score the 5 marks.** Five relationships (3) · the overlap statement (1) · one sentence on why the distinction matters in practice (1).',
              answer:
                'Data science is a practice rather than a single discipline, and each neighbouring field supplies one of its parts.\n\n| Field | What it supplies | Overlap with data science |\n|---|---|---|\n| **Statistics** | inference, sampling, distributions, testing, regression | the whole of exploratory analysis and every claim of significance |\n| **Computer science** | programming, databases, distributed systems, algorithms | the pipeline, the storage and the scale |\n| **Machine learning** | the algorithms that learn a mapping from data | the modelling stage — ML is a toolkit used inside data science |\n| **Artificial intelligence** | the broader goal of intelligent behaviour, including rule-based systems | ML is a subset of AI; data science uses ML, so it uses a part of AI |\n| **Business intelligence** | reporting, aggregation, dashboards on known questions | both describe the business; BI stops at description, data science predicts |\n\n**Where the boundaries actually fall**\n1. **Statistics versus machine learning** — statistics asks whether an effect is real and why; machine learning asks how well a model predicts on new data. The same regression is a statistical model when the coefficients are interpreted and an ML model when only its accuracy matters.\n2. **BI versus data science** — BI answers a question a manager already knows how to ask, on structured historical data, in a dashboard. Data science often begins by finding the question, works on messy mixed data, and ends with a model in production.\n3. **ML versus AI** — a rule-based expert system is AI without learning; a neural network is ML and therefore also AI.\n\n**Why the distinction matters in practice.** It decides who is hired and what is measured: a BI analyst is judged on the accuracy and timeliness of a report, a data scientist on whether a model beats a baseline in production, and an ML engineer on whether the service stays accurate and available. Using the words interchangeably leads to the wrong expectation and the wrong hire.\n\n**Exam line:** statistics for proof, computer science for scale, ML for the model, AI for the ambition, BI for the report — data science is the practice that joins them for a decision.',
              diagram: 'ds-vs-fields',
              diagramCaption:
                'Data science and its neighbouring fields, with the part each contributes and the area of overlap.',
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
                'Explain data reduction. Describe dimensionality reduction, numerosity reduction and compression with one technique each.',
              explain:
                '**What is being asked.** Reduction makes the data smaller while keeping the answer essentially the same. The examiner wants the three families and a named technique in each.\n\n**The families.** Dimensionality reduction — fewer columns: PCA, feature selection. Numerosity reduction — fewer rows: sampling, binning, clustering, parametric models. Compression — smaller representation: lossless and lossy encodings.\n\n**The rule.** Reduction is a trade of accuracy for speed and storage; test the accuracy after reduction, and fit the reduction on the training data only, or information leaks from the test set.\n\n**How to score the 5 marks.** Three families with a technique each (3) · the trade-off (1) · the leakage rule (1).',
              answer:
                '**Data reduction** produces a smaller representation of the dataset that yields almost the same analytical result — less storage, faster training, less noise.\n\n| Family | What is reduced | Techniques | Example |\n|---|---|---|---|\n| **Dimensionality reduction** | columns (features) | feature selection (filter, wrapper, embedded); feature extraction (PCA, LDA, t-SNE) | 100 correlated columns replaced by 8 principal components that hold 92 percent of the variance |\n| **Numerosity reduction** | rows (records) | sampling, binning, clustering-based reduction, regression or log-linear models | a stratified sample of 100,000 from 10 million rows, or histograms for a distribution |\n| **Compression** | the size of the representation | lossless (Huffman, run-length) and lossy (wavelet, JPEG-like for images) | storing a compressed columnar file instead of raw text |\n\n**How PCA works in one paragraph.** PCA finds new axes — the principal components — along which the data varies most, as combinations of the original columns, and keeps the first few. It removes correlation between features and reduces dimension, at the cost of interpretability: a component is a mixture, so the business meaning of a column is lost.\n\n**The trade-off.** Reduction buys speed and storage and reduces overfitting, but it can lose information. Feature selection keeps the original columns and stays interpretable, so it is tried first; extraction is used when the columns are numerous and correlated.\n\n**The rule that prevents a classic mistake.** Fit the reduction on the training data only, then apply the same transformation to the test data. Fitting PCA on the full dataset leaks information from test to train and inflates the measured accuracy.\n\n**Exam line:** fewer columns by selection or PCA, fewer rows by sampling, smaller size by compression — and always measure the accuracy after the reduction.',
              diagram: 'ds-reduction',
              diagramCaption:
                'Data reduction — dimensionality, numerosity and compression — with a technique and an example for each.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Differentiate OLTP and OLAP systems, and explain the OLAP operations roll-up, drill-down, slice, dice and pivot.',
              explain:
                '**What is being asked.** Two workloads plus five operations. OLTP supports transactions; OLAP supports analysis. The examiner wants the comparison table and the five operations with an example.\n\n**The comparison.** Purpose, data, schema, operations, users, response time.\n\n**The operations.** Roll-up — aggregate to a coarser level (day to month). Drill-down — the reverse (month to day). Slice — fix one dimension. Dice — fix a range on two or more dimensions. Pivot — rotate the axes.\n\n**How to score the 5 marks.** Comparison (2) · five operations with examples (2) · the "write on OLTP, read on OLAP" note (1).',
              answer:
                '| Point | OLTP | OLAP |\n|---|---|---|\n| Purpose | run the business — day-to-day transactions | analyse the business — trends and decisions |\n| Data | current, detailed, normalised | historical, aggregated, dimensional |\n| Typical operation | insert, update, delete one row | read many rows and aggregate |\n| Schema | normalised (3NF) to avoid redundancy | star or snowflake for fast reads |\n| Users | many, operational staff | few, analysts and managers |\n| Response time | milliseconds per transaction | seconds to minutes per query |\n| Example | a payment posted at a billing counter | revenue by region and quarter over three years |\n\n**The five OLAP operations**\n\n| Operation | What it does | Example |\n|---|---|---|\n| **Roll-up** | aggregates upward along a hierarchy | sales by day → by month → by year |\n| **Drill-down** | the reverse — moves to finer detail | year → quarter → month → day |\n| **Slice** | fixes one dimension to a single value | only the year 2025 |\n| **Dice** | selects a sub-cube by ranges on two or more dimensions | year 2025 and 2026, region north and west, category beverages |\n| **Pivot** | rotates the cube so that rows become columns | products as rows become products as columns by month |\n\n**How the two coexist.** A transaction is written to the OLTP system, extracted and loaded into the warehouse, and analysed through OLAP. Separating the workloads protects the transaction from analytical load and protects the analysis from constant change — which is precisely why the warehouse is a separate store.\n\n**Exam line:** OLTP writes one row at a time and OLAP reads many; roll-up coarsens, drill-down refines, slice fixes, dice selects, pivot rotates.',
              diagram: 'ds-olap-oltp',
              diagramCaption:
                'OLTP compared with OLAP, and the five OLAP operations from roll-up and drill-down to slice, dice and pivot.',
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
                'Explain the snowflake schema. State when it is preferred to a star schema and the cost of using it.',
              explain:
                '**What is being asked.** A design question. A snowflake schema is a star whose dimensions are normalised into sub-dimensions, so a product points to a category table and a category points to a department table.\n\n**When preferred.** Very large dimensions, strong reuse of a sub-dimension across dimensions, storage constraints, and a need to update an attribute in one place.\n\n**The cost.** More joins, slower queries, a more complex model for a BI tool and for a business user, and more ETL work.\n\n**How to score the 5 marks.** Structure with example (2) · when preferred (2) · the cost (1).',
              answer:
                'A **snowflake schema** is a star schema whose dimension tables are normalised: each dimension is split into a chain of smaller tables, so the diagram branches like a snowflake.\n\n**Example.** Dim_Product is split into Dim_Product (product_key, name, brand, category_key) and Dim_Category (category_key, category, department_key) and Dim_Department (department_key, department, division). A query that wants the division joins the fact table to product, category and department — three hops instead of one.\n\n**When it is preferred**\n1. **The dimension is very large** — a product or customer dimension with crores of rows saves substantial storage when its repeated attributes are normalised out.\n2. **An attribute is shared** by several dimensions — a region table used by store, customer and supplier dims is maintained once.\n3. **Updates must be single-place** — a category renamed once rather than on a million product rows.\n4. **Storage or memory is constrained** — the model is smaller, which matters on an in-memory engine with a fixed capacity.\n\n**The cost**\n- **More joins**, so each query is slower — and reporting tools generate many queries.\n- **A more complex model**, which a business user and even a BI tool find harder to navigate; a wrong join path produces a wrong total.\n- **More ETL work**, because each sub-dimension needs its own load and its own slowly changing dimension handling.\n\n**The practical rule.** Start with a star, because reporting wants speed and clarity; snowflake only the dimension that is genuinely large or genuinely shared. A mixed model — a star with one or two snowflaked dimensions — is common and perfectly reasonable.\n\n**Exam line:** a snowflake is a normalised star — less redundancy and more joins, chosen for very large or shared dimensions.',
              diagram: 'ds-snowflake-schema',
              diagramCaption:
                'The snowflake schema with normalised sub-dimensions, and the trade of storage for joins it makes.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain data pre-processing as a whole: its four families of work and the pipeline order in which they are applied.',
              explain:
                '**What is being asked.** An overview question that ties the unit together: cleaning, integration, transformation and reduction, and the order in which they are done.\n\n**The four families.** Cleaning — fix values. Integration — combine sources. Transformation — change scale and shape. Reduction — make it smaller.\n\n**The order.** Understand and profile, then clean, then integrate, then transform, then reduce — and split into train and test before any fitting of scalers or PCA.\n\n**How to score the 5 marks.** Four families (2) · the pipeline order with the reason (2) · the leakage rule (1).',
              answer:
                '**Data pre-processing** is the set of operations that turn raw data into a modelling-ready dataset. It has four families of work, applied in a deliberate order.\n\n| Family | What it fixes | Typical techniques |\n|---|---|---|\n| **Cleaning** | wrong, missing, duplicated or noisy values | imputation, de-duplication, outlier detection, smoothing |\n| **Integration** | data spread over several sources with different schemas | entity resolution, common keys, unit and currency conversion, lineage |\n| **Transformation** | scale, distribution and representation | normalisation, standardisation, encoding, discretisation, log transform |\n| **Reduction** | size — too many rows or columns | feature selection, PCA, sampling, aggregation |\n\n**The pipeline order and the reason for it**\n1. **Profile and explore** — understand the data before changing it; a fix applied without diagnosis hides the problem.\n2. **Clean** — because an imputed value must be computed from correct neighbours, and a duplicate must be removed before any aggregate is trusted.\n3. **Integrate** — because unit and entity conflicts must be resolved before features are built; integrating after transformation means transforming twice.\n4. **Transform** — scale and encode once the set of columns is final.\n5. **Reduce** — last, because reduction depends on the final feature set.\n6. **Split into train and test, then fit the scaler or PCA on train only.**\n\n**The leakage rule.** Any step that learns parameters from the data — mean, standard deviation, PCA axes, imputation model — is fitted on the training part and applied to the test part. Fitting on everything leaks information and produces a model that looks better in testing than it will ever be in production.\n\n**Why the order is examinable.** A pipeline that integrates before cleaning imputes the wrong mean; one that scales before splitting leaks; one that reduces before transforming removes the wrong columns. The order is not a convention — each step depends on the one before it.\n\n**Exam line:** profile, clean, integrate, transform, reduce — and split before you fit, or the test set teaches the model.',
              diagram: 'ds-preprocessing',
              diagramCaption:
                'Data pre-processing as a pipeline — cleaning, integration, transformation and reduction, in the order that makes each step valid.',
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
                'Explain simple and multiple linear regression. State the assumptions of the model and the meaning of R-squared with an example.',
              explain:
                '**What is being asked.** Linear regression fits a line (or a plane) that minimises the squared error between the prediction and the actual value. The examiner wants the model, the assumptions and the interpretation of R-squared.\n\n**The model.** Simple: y = b0 + b1x. Multiple: y = b0 + b1x1 + … + bnxn. Coefficients are estimated by ordinary least squares.\n\n**The assumptions.** Linearity, independence of errors, constant variance (homoscedasticity), normally distributed errors, and no severe multicollinearity.\n\n**R-squared.** The share of variance in y explained by the model; 0.82 means 82 percent explained and 18 percent unexplained. Adjusted R-squared penalises extra predictors.\n\n**How to score the 5 marks.** Model and OLS (2) · assumptions (2) · R-squared interpretation (1).',
              answer:
                '**Linear regression** models a numeric outcome as a linear combination of inputs, with coefficients estimated by **ordinary least squares (OLS)** — the line that minimises the sum of squared errors.\n\n**Simple linear regression.** y = b0 + b1x. b1 is the change in y for a one-unit change in x, and b0 is the intercept.\n\n**Multiple linear regression.** y = b0 + b1x1 + b2x2 + … + bnxn. Each coefficient is the effect of that feature while holding the others constant — which is what makes the model useful for explanation, not only for prediction.\n\n**Worked interpretation.** For a house price model, price = 12,00,000 + 5,500 × area (sq ft) − 90,000 × age (years): each extra square foot adds about 5,500 rupees, and each extra year reduces the price by about 90,000 rupees, other things equal.\n\n**The five assumptions**\n1. **Linearity** — the relationship between each feature and the outcome is linear (check a residual plot).\n2. **Independence of errors** — no autocorrelation, important in time series.\n3. **Constant variance** — the spread of residuals is the same across the range (homoscedasticity); a funnel shape in the residuals violates it.\n4. **Normality of errors** — needed for confidence intervals and p-values, less critical for prediction.\n5. **No severe multicollinearity** — two features that carry the same information make the coefficients unstable and uninterpretable, which the variance inflation factor detects.\n\n**R-squared.** R² is the proportion of the variance in y explained by the model. An R² of 0.82 means the model explains 82 percent of the variation and 18 percent remains unexplained. It never falls when a feature is added, even a useless one, so **adjusted R²** is used to compare models of different size. A high R² does not prove causation, and a low R² does not prove that the model is useless for a directional decision.\n\n**Exam line:** OLS minimises squared error, each coefficient is an effect holding the rest constant, and R² is the share of variance explained — not the share of truth.',
              diagram: 'ds3-linear-reg',
              diagramCaption:
                'Simple and multiple linear regression — the fitted line, the residuals and the meaning of the coefficients and R-squared.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain precision, recall and F1 score in detail, and state the situation in which recall matters more than precision.',
              explain:
                '**What is being asked.** Three metrics that describe a classifier from different directions. The examiner wants the definitions, the formulas, the trade-off, and the decision rule for which one to optimise.\n\n**The definitions.** Precision — of the predicted positives, how many were true. Recall — of the true positives, how many were found. F1 — the harmonic mean, a single balanced number.\n\n**The trade-off.** Raising the threshold increases precision and lowers recall; lowering it does the opposite.\n\n**Where recall matters more.** Medical screening, fraud and security alerts, predictive maintenance — anywhere a miss is much more expensive than a false alarm.\n\n**How to score the 5 marks.** Three definitions with formulas (2) · the trade-off (1) · the recall-first situations with a reason (2).',
              answer:
                '**Precision, recall and F1** describe a classifier from three angles; accuracy alone hides what a model is doing.\n\n| Metric | Formula | Question it answers |\n|---|---|---|\n| **Precision** | TP / (TP + FP) | when the model says positive, how often is it right? |\n| **Recall (sensitivity)** | TP / (TP + FN) | of the actual positives, how many did it catch? |\n| **F1** | 2 × (P × R) / (P + R) | a single number balancing the two |\n| **Specificity** | TN / (TN + FP) | of the actual negatives, how many were correctly cleared? |\n\n**The trade-off.** The decision threshold moves the two in opposite directions. At a high threshold the model predicts positive only when confident, so precision rises and recall falls; at a low threshold it flags more cases, so recall rises and precision falls. A model is not "good" or "bad" without the threshold and the cost of the two errors.\n\n**Why F1 rather than a plain average.** F1 is the harmonic mean, so it falls when either precision or recall is low — a model with precision 1.0 and recall 0.1 scores 0.18, while an arithmetic average would have said 0.55 and flattered it.\n\n**When recall matters more than precision**\n1. **Medical screening** — a missed cancer is far worse than a biopsy that turns out clear.\n2. **Fraud and security alerts** — a missed intrusion costs more than an analyst reviewing a false alarm.\n3. **Predictive maintenance** — a missed failure stops a plant; a false alarm costs an inspection.\n4. **Safety and legal compliance** — a missed defect can injure a person, while a false positive only delays a shipment.\n\n**When precision matters more.** Campaign targeting with a limited sales team, spam filtering that must not lose legitimate mail, and any review process with a fixed capacity — a false positive here wastes the scarce resource.\n\n**The reporting rule.** State the threshold, the precision and the recall together, and the cost of a false positive and a false negative. A single F1 without the threshold and the cost is a number that cannot be acted on.\n\n**Exam line:** precision guards the alarms, recall guards the misses, F1 balances them — and which one you optimise is a business decision about the cost of an error.',
              diagram: 'ds3-metrics-prf',
              diagramCaption:
                'Precision, recall and F1 with their formulas, the threshold trade-off between them, and the situations where recall dominates.',
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
                'Explain classification applications in business with four examples, and state the data and target variable each needs.',
              explain:
                '**What is being asked.** An application question. Classification predicts a category, so each example must name the target and the features.\n\n**The examples.** Churn (target: churned or not; features: usage, tenure, complaints), credit default (target: default in 12 months; features: repayment history, income, existing debt), fraud (target: fraudulent transaction; features: amount, merchant, time, device), disease risk (target: readmission within 30 days; features: diagnosis, length of stay, labs).\n\n**The common shape.** A labelled history, a target that is a category, and a decision that follows the prediction.\n\n**How to score the 5 marks.** Four applications with target and features (3) · the decision each supports (1) · the class-imbalance note (1).',
              answer:
                'Classification predicts a category, so every application needs a labelled history, a target that is a class, and a decision that follows.\n\n| Application | Target variable | Features | Decision supported |\n|---|---|---|---|\n| **Customer churn** | churned in next 60 days (yes / no) | usage frequency, tenure, plan, support tickets, payment failures | who receives a retention offer |\n| **Credit default** | default within 12 months (yes / no) | repayment history, income, existing debt, employment length, credit utilisation | approve, decline or price the loan |\n| **Fraud detection** | transaction fraudulent (yes / no) | amount, merchant category, time of day, device, location, velocity | block, challenge or allow the transaction |\n| **Disease risk** | readmission within 30 days (yes / no) | diagnosis, age, length of stay, lab values, prior admissions | which patients get a follow-up call |\n| **Email spam** | spam (yes / no) | sender reputation, words, links, attachments, header fields | deliver, quarantine or block |\n\n**The pattern.** Each problem has a labelled history from which the model learns, an imbalance that makes accuracy misleading, and an asymmetric cost between the two errors — a missed fraud and a blocked genuine payment do not cost the same.\n\n**The commercial point.** Classification is used where the decision is a binary routing — offer or not, review or not, escalate or not. The model does not make the decision; it ranks or scores cases so that a limited human or financial capacity is spent on the cases most likely to need it.\n\n**Exam line:** churn, credit, fraud, readmission — a labelled history, a binary target, and a routing decision that spends scarce attention on the right cases.',
              diagram: 'ds3-applications',
              diagramCaption:
                'Classification applications in business, with the target variable, the features and the decision each one supports.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain regression metrics — MAE, MSE, RMSE and R-squared — and state which metric to quote for a given business situation.',
              explain:
                '**What is being asked.** Four metrics for a numeric prediction. The examiner wants the formula idea, the unit, the sensitivity to outliers, and the choice rule.\n\n**The metrics.** MAE — average absolute error, same unit, robust. MSE — average squared error, penalises large errors, unit squared. RMSE — square root of MSE, same unit, penalises large errors. R² — share of variance explained, unitless.\n\n**The choice.** MAE for a typical error that a business understands; RMSE when a large error is much worse than several small ones; R² to compare models on the same data.\n\n**How to score the 5 marks.** Four metrics (2) · the outlier sensitivity and units (2) · the choice rule with an example (1).',
              answer:
                'Regression metrics measure how far a numeric prediction is from the actual value.\n\n| Metric | Formula idea | Unit | Behaviour |\n|---|---|---|---|\n| **MAE** | average of |y − ŷ| | same as y | robust to outliers; easy to explain |\n| **MSE** | average of (y − ŷ)² | squared unit | punishes large errors heavily |\n| **RMSE** | square root of MSE | same as y | punishes large errors but stays in the original unit |\n| **R²** | 1 − (SS_residual / SS_total) | unitless | the share of variance explained by the model |\n\n**Worked example.** Predictions 100, 200 against actuals 110, 220: errors are −10 and −20, so MAE = 15, MSE = 250, RMSE = 15.8. The MAE says the typical miss is 15 units; the RMSE is larger because it weights the second error more.\n\n**When each is quoted**\n1. **MAE** — for a business audience and a decision tolerance: "the demand forecast is typically off by 15 units" is a sentence a planner can use.\n2. **RMSE** — when one large miss is much worse than several small ones, as in inventory planning where a single stock-out costs more than a little extra stock.\n3. **MSE** — mainly as an optimiser objective, since it is differentiable; rarely quoted to a business because the unit is squared.\n4. **R²** — to compare models on the same target, and to state how much of the variation remains unexplained; adjusted R² when the models have different numbers of features.\n\n**The caution.** All four are computed on a held-out set. A metric on training data measures memorisation, and an R² of 0.99 in training with an RMSE that doubles in testing is the classic sign of overfitting.\n\n**Exam line:** MAE for the typical error, RMSE when a big miss hurts, R² for the share explained — and every one of them on data the model has never seen.',
              diagram: 'ds3-regression-metrics',
              diagramCaption:
                'Regression metrics — MAE, MSE, RMSE and R-squared — with units, sensitivity to outliers and when to quote each.',
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
                'Explain market basket analysis and its two mining phases, with a retail example and three business uses.',
              explain:
                '**What is being asked.** Market basket analysis finds which items are bought together, using association rules. The examiner wants the concept, the two phases and the business use.\n\n**The two phases.** First find frequent itemsets whose support is at least the minimum support; then generate rules from those itemsets and keep those whose confidence is at least the minimum confidence.\n\n**The example.** Bread → milk with support 0.6 and confidence 0.75.\n\n**The uses.** Store layout, bundling and pricing, recommendation engines, and cross-sell in campaigns.\n\n**How to score the 5 marks.** Concept (1) · two phases with the parameters (2) · example (1) · business uses (1).',
              answer:
                '**Market basket analysis** examines transaction data to discover which items are purchased together, and expresses the finding as an association rule X → Y — "a customer who buys X also buys Y".\n\n**The two mining phases**\n1. **Frequent itemset generation** — find every itemset whose support (the share of baskets containing it) is at least the minimum support. The itemset space is 2^m for m items, so this phase prunes with support before any rule is considered; Apriori or FP-Growth is used.\n2. **Rule generation** — from each frequent itemset, generate every X → Y split and keep those whose confidence is at least the minimum confidence. Confidence is not symmetric, so bread → milk and milk → bread are two different rules.\n\n**Worked example.** In five baskets, bread and milk appear together in three, bread appears in four and milk in four. Rule bread → milk: support 3/5 = 0.60, confidence 3/4 = 0.75, lift 0.75/0.80 = 0.94. The rule is frequent and confident but lift below 1 shows that milk is common anyway — a useful negative result, because it tells the store not to build a layout decision on it.\n\n**Business uses**\n1. **Store layout** — place items that are bought together near each other, or deliberately apart to increase the walk past other shelves.\n2. **Bundling and pricing** — combine items into a combo offer, or discount the second item in a pair that has high lift.\n3. **Recommendation and cross-sell** — "customers who bought this also bought", on the site and in the campaign.\n4. Beyond retail: insurance fraud (unusual combinations of claims), medical patterns (co-occurring diagnoses), and web analytics (pages visited together).\n\n**Exam line:** find frequent itemsets by support, then keep the rules that clear confidence — and check lift before acting on any of them.',
              diagram: 'ds4-market-basket',
              diagramCaption:
                'Market basket analysis — the two mining phases, a worked rule with support, confidence and lift, and the business uses.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'How is a similarity measure chosen for text and for mixed data? Explain cosine similarity, Jaccard similarity and the handling of mixed types.',
              explain:
                '**What is being asked.** Distance choice is data-dependent. The examiner wants the reasoning for high-dimensional sparse data (text) and for tables that mix numeric and categorical columns.\n\n**Cosine.** Compares the angle between vectors and ignores magnitude, so document length does not distort similarity. **Jaccard.** Intersection over union of sets, used for presence-absence data such as baskets and tags. **Mixed data.** Normalise numeric features and encode categorical ones, use Gower distance, or weigh the blocks so that no group dominates.\n\n**How to score the 5 marks.** Cosine for text with the reason (2) · Jaccard for sets (1) · mixed data handling (2).',
              answer:
                'A similarity measure must match the kind of data, because the measure is the definition of "close".\n\n**A. Text and high-dimensional sparse data — cosine similarity**\n- Represent each document as a TF-IDF vector over the vocabulary.\n- Cosine similarity = (A · B) / (|A| × |B|) — the cosine of the angle between the two vectors.\n- It ignores magnitude, so a long document is not automatically "far" from a short one that discusses the same topic, and it behaves well when most vector entries are zero.\n- Why not Euclidean: in high dimensions with sparse vectors, Euclidean distance grows with document length and the squared differences are dominated by the words that appear in only one document.\n\n**B. Sets and presence-absence data — Jaccard similarity**\n- Jaccard = |A ∩ B| / |A ∪ B| — the share of shared items among all items present.\n- Used for baskets, tags, skills on a profile, and the overlap of two user sessions.\n- It ignores frequency, which is the right choice when only presence matters.\n\n**C. Mixed data — numeric and categorical in one table**\n\n| Step | What to do |\n|---|---|\n| 1. Separate the blocks | keep numeric columns apart from categorical ones |\n| 2. Scale the numeric block | standardise or min–max, so that a large-unit column does not dominate |\n| 3. Encode the categorical block | one-hot for nominal, ordinal code where an order exists |\n| 4. Combine | use Gower distance, which averages a scaled numeric difference and a 0/1 categorical mismatch, or compute one distance per block and take a weighted average |\n| 5. Justify the weights | if region should count as much as revenue, say so and record it — the weight is a modelling decision, not a technical detail |\n\n**The rule.** Choose the measure by the data type and the question: cosine for text, Jaccard for sets, Gower or a weighted combination for mixed tables, and Euclidean or Manhattan for scaled numeric data. Record the choice, because a different measure produces different clusters from the same data.\n\n**Exam line:** cosine compares direction in text, Jaccard compares overlap in sets, Gower averages mixed blocks — and the measure is a modelling decision that must be documented.',
              diagram: 'ds4-distances',
              diagramCaption:
                'Choosing a similarity measure — cosine for text, Jaccard for sets and Gower for mixed numeric and categorical data.',
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
                'Explain the initialisation problem in K-means and the remedies — random restarts, k-means++ and a fixed seed.',
              explain:
                '**What is being asked.** K-means converges to a local optimum, so the starting centroids decide the result. The examiner wants the problem and the three remedies.\n\n**The problem.** Bad initial centroids can merge two real clusters and split one, producing a higher WCSS; two runs give two answers, which is unacceptable in a report.\n\n**The remedies.** Multiple random restarts and keep the lowest WCSS; k-means++ which places the first centroid at random and each next one with probability proportional to the squared distance from the nearest existing centroid; and a fixed random seed so that the run is reproducible.\n\n**How to score the 5 marks.** The problem with an example (2) · the three remedies (2) · the reproducibility point (1).',
              answer:
                'K-means minimises WCSS by alternating assignment and update, and that process stops at the first configuration it cannot improve — a **local optimum**. The starting centroids decide which local optimum is reached.\n\n**The problem.** If two initial centroids fall inside the same real cluster, one real cluster is split and two others are merged. The result has a higher WCSS and a wrong segmentation, and a second run with different random centroids can produce a different answer from the same data — which makes the analysis unreproducible.\n\n**Three remedies**\n\n| Remedy | How it works | Effect |\n|---|---|---|\n| **Random restarts (n_init)** | run the algorithm several times with different random centroids and keep the solution with the lowest WCSS | simple and effective; costs several times the compute |\n| **k-means++** | choose the first centroid at random, then each next centroid with probability proportional to the squared distance to the nearest existing centroid | spreads the initial centroids apart, so the chance of two in one cluster falls sharply |\n| **Fixed random seed** | set the random state explicitly | makes the run reproducible, so the same data gives the same clusters next month |\n\n**Practical setting.** k-means++ with 10 random restarts and a fixed seed is a sensible default: k-means++ does the work of finding a good start, the restarts insure against a bad one, and the seed makes the result defensible in a report.\n\n**How to prove the problem exists.** Run the algorithm five times without a seed and report the range of WCSS values. A visible spread is the evidence that initialisation matters, and the remedy is the answer.\n\n**Exam line:** random start, local optimum — use k-means++, restart several times, keep the lowest WCSS and fix the seed so the answer can be reproduced.',
              diagram: 'ds4-kmeans',
              diagramCaption:
                'The K-means initialisation problem — a bad start that splits a cluster — and the remedies of restarts, k-means++ and a fixed seed.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain the silhouette score. How is it computed, how is it read, and why is it preferred to the elbow method as evidence for k?',
              explain:
                '**What is being asked.** Silhouette measures how well each point fits its own cluster compared with the nearest other cluster. The examiner wants the computation, the interpretation and the comparison with the elbow.\n\n**The computation.** For each point: a = mean distance to points in its own cluster; b = mean distance to points in the nearest other cluster; s = (b − a) / max(a, b). Average over all points.\n\n**Reading.** Close to 1 is well separated, around 0 is on a boundary, negative means the point is probably in the wrong cluster. Above 0.5 is a reasonable structure.\n\n**Why preferred.** It gives a number that peaks at a k and can be compared across k, while the elbow relies on a visual judgement of a bend.\n\n**How to score the 5 marks.** Computation (2) · reading the range (2) · the comparison (1).',
              answer:
                'The **silhouette score** measures how similar a point is to its own cluster compared with the nearest other cluster, and averages that over all points.\n\n**How it is computed**\n1. For a point i, compute **a(i)** — the mean distance to all other points in its own cluster.\n2. Compute **b(i)** — the mean distance to the points of the nearest other cluster.\n3. Silhouette s(i) = (b(i) − a(i)) / max(a(i), b(i)), which lies between −1 and +1.\n4. The score for the clustering is the mean of s(i) over all points.\n\n**How to read it**\n\n| Value | Meaning |\n|---|---|\n| close to **+1** | the point is far from the nearest other cluster — well placed |\n| around **0** | the point lies on the boundary between two clusters |\n| **negative** | the point is closer to another cluster — probably assigned wrongly |\n| average **above 0.5** | a reasonable structure |\n| average **0.25 to 0.5** | weak structure, may be artificial |\n| average **below 0.25** | no substantial structure found |\n\n**Why it is preferred to the elbow as evidence for k.** The elbow requires a human to judge a bend in a curve, and on real data the bend is often soft, so two analysts defend two answers. The silhouette produces a number for every k, so the k with the highest mean silhouette can be stated, compared and re-checked — and it also exposes individual points with a negative score, which is useful for diagnosing a badly formed cluster.\n\n**The caveat.** Silhouette favours convex, well-separated clusters, so it underestimates the quality of a correct clustering of a ring-shaped or elongated group. It is evidence, not proof, and it is read alongside the elbow and the business meaning of the segments.\n\n**Exam line:** a is inside, b is outside, and (b − a) / max(a, b) becomes the score — near 1 is good, near 0 is a boundary, negative is a mistake, and the peak suggests k.',
              diagram: 'ds4-elbow',
              diagramCaption:
                'The silhouette score — how a and b are computed, how the value is read, and how it compares with the elbow method.',
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
                'Explain reinforcement learning — the agent, environment, state, action and reward — and the exploration versus exploitation trade-off, with one application.',
              explain:
                '**What is being asked.** RL learns by acting: the agent observes a state, takes an action, receives a reward and a new state, and adjusts a policy to maximise long-run reward.\n\n**The elements.** Agent, environment, state, action, reward, policy, value. **The trade-off.** Explore to find better actions, exploit to collect the reward you already know; both are needed, and the balance is set by the algorithm.\n\n**The application.** Recommendation, bidding, inventory control, robotics, game playing.\n\n**How to score the 5 marks.** The loop with its elements (2) · exploration versus exploitation (2) · one application with the reward defined (1).',
              answer:
                '**Reinforcement learning (RL)** trains an agent to take actions in an environment so that the total reward over time is maximised. There is no labelled dataset: the data is generated by acting.\n\n**The loop**\n1. The agent observes the **state** of the environment.\n2. It chooses an **action** according to its **policy**.\n3. The environment returns a **reward** and the next **state**.\n4. The agent updates the policy so that actions that led to high reward become more likely.\n5. Repeat, over many episodes.\n\n| Element | Meaning | Example in a recommendation system |\n|---|---|---|\n| Agent | the learner and decision maker | the recommender |\n| Environment | everything it interacts with | the user and the catalogue |\n| State | the current situation | the user history and context of the session |\n| Action | what the agent can do | which item to show next |\n| Reward | the feedback signal | a click, a purchase, or time spent |\n| Policy | the mapping from state to action | the rule that picks the item |\n\n**Exploration versus exploitation.** **Exploit** means choosing the action that currently looks best, to collect the reward you already understand. **Explore** means trying an action whose value is uncertain, to learn whether it is better. A system that only exploits never discovers a better option; a system that only explores never earns anything. The balance is set by the algorithm — epsilon-greedy (explore with a small probability), softmax, or upper confidence bound — and it is usually shifted toward exploitation over time.\n\n**Applications.** Recommendation and ranking (reward: click or purchase), dynamic pricing and bidding (reward: margin), inventory and supply control (reward: profit minus holding cost), robotics and autonomous control (reward: task completion), and game playing (reward: win or score).\n\n**The cost to mention.** RL needs many interactions to learn, so it is used where simulation or a live trial is cheap; an offline dataset alone is a weak substitute because it does not contain the outcomes of the actions the agent did not take.\n\n**Exam line:** state, action, reward, update — and explore enough to find the better action without exploring so much that the reward is lost.',
              diagram: 'ds5-reinforcement-learning',
              diagramCaption:
                'The reinforcement learning loop of agent, environment, state, action and reward, with the exploration-exploitation trade-off.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain generative models and explainable AI. State why explainability is required and the trade-off between accuracy and interpretability.',
              explain:
                '**What is being asked.** Two modern topics joined by one question: models that generate data, and models that must explain themselves.\n\n**Generative.** Learns the distribution P(X) or the joint P(X, Y) and can produce new samples — GAN, VAE, diffusion, large language models. **Discriminative.** Learns P(Y | X) only, for classification.\n\n**XAI.** Methods that explain a model: inherently interpretable models, feature importance, SHAP, LIME, counterfactuals, attention maps.\n\n**Why required.** Trust, debugging, bias detection, regulation such as the right to an explanation and the EU AI Act, safety and accountability.\n\n**The trade-off.** Interpretable models are simpler and often slightly less accurate; deep models are accurate and opaque. XAI is the middle path, but an explanation is itself an approximation and must be tested for faithfulness and stability.\n\n**How to score the 5 marks.** Generative versus discriminative (1) · XAI methods (2) · why it is required (1) · the trade-off (1).',
              answer:
                '**A. Generative models** learn the distribution of the data itself — P(X), or the joint P(X, Y) — so they can produce new, plausible samples rather than only a label for a given input.\n\n| Model type | What it learns | Can it generate? | Examples |\n|---|---|---|---|\n| **Generative** | P(X) or P(X, Y) | yes | GAN, VAE, diffusion, large language models |\n| **Discriminative** | P(Y \\| X) only | no | logistic regression, SVM, most classifiers |\n\nBecause a generative model must represent the whole distribution, it usually needs more data and more compute than a discriminative model that only needs the boundary. Uses: synthetic data for rare classes, image and text generation, data augmentation, and anomaly detection from the learned distribution.\n\n**B. Explainable AI (XAI)** is the set of methods that make a model decision understandable to a human.\n\n| Method | Idea |\n|---|---|\n| inherently interpretable model | use a model you can read — a linear model, a shallow tree, a rule set |\n| feature importance | which inputs the model relies on overall |\n| SHAP | the contribution of each feature to one specific prediction, with a consistent additive attribution |\n| LIME | a local surrogate: fit a simple model around one prediction to see what mattered there |\n| counterfactual | the smallest change to the input that would flip the decision — "what would have to be different?" |\n| attention or saliency | which parts of an image or a sentence the model weighted |\n\n**Why explainability is required**\n1. **Trust and adoption** — a loan officer will not act on a score that nobody can explain.\n2. **Debugging** — an explanation shows that a model learned a shortcut, such as a hospital name instead of a symptom.\n3. **Bias and fairness** — explaining decisions is how discriminatory patterns are found and defended against.\n4. **Regulation** — a right to an explanation of an automated decision, and the EU AI Act obligations for high-risk systems.\n5. **Accountability and safety** — in medicine, credit and hiring, someone must be able to answer why.\n\n**The trade-off.** An interpretable model is easy to explain and usually a little less accurate; a deep model is more accurate and opaque. XAI narrows the gap, but an explanation is itself an approximation: it must be tested for faithfulness (does it reflect the model) and stability (does it stay the same for similar inputs), or the explanation is a plausible story rather than a proof.\n\n**Exam line:** generative models learn the data and make new samples, discriminative models learn the boundary — and when the decision affects a person, the model must be able to say why.',
              diagram: 'ds5-generative-deep-xai',
              diagramCaption:
                'Generative models compared with discriminative models, and the explainability methods and reasons behind XAI.',
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
                'Trace the evolution of dashboards and BI — from static reports to interactive, cloud and mobile analytics — and name the technologies that drove each step.',
              explain:
                '**What is being asked.** A history question with a cause: each generation of dashboard was enabled by a technology and demanded by an audience.\n\n**The generations.** Static printed and spreadsheet reports; client-server reporting tools; in-memory and visual discovery; self-service and cloud; mobile and embedded; today AI-assisted and natural language.\n\n**The drivers.** In-memory engines made filtering and drill-down instant; the web made distribution easy; cloud made scale elastic; mobile changed the layout and the audience.\n\n**How to score the 5 marks.** Three or four eras with the technology (3) · the effect on the audience (1) · the trend statement (1).',
              answer:
                'Dashboard design evolved with three things at once: the technology available, the audience asking for numbers, and the decision that had to be supported.\n\n| Era | Form | Enabling technology | Effect |\n|---|---|---|---|\n| **1980s–1990s** | printed reports and spreadsheets | relational databases, PC spreadsheets | monthly, backward-looking, one analyst produced it |\n| **late 1990s–2000s** | client-server BI portals, OLAP cubes | data warehouses, OLAP engines | managers could slice a cube, but only through the IT team |\n| **2005–2012** | visual discovery, in-memory analytics | in-memory engines, columnar stores (VizQL and Hyper, VertiPaq) | live filtering and drill-down in seconds; the analyst became self-service |\n| **2012–2018** | cloud and mobile dashboards | cloud compute, SaaS BI, responsive web | access from any device; the audience widened beyond analysts |\n| **2018–today** | embedded, real-time and AI-assisted analytics | streaming, semantic layers, natural-language query, generative AI | the dashboard appears inside the workflow, and questions can be asked in words |\n\n**What each step changed**\n1. **In-memory computing** removed the wait, so a manager could filter and drill instead of requesting a report.\n2. **The web and cloud** removed the installation and the capacity limit, so the number of viewers grew from dozens to thousands.\n3. **Mobile** changed the layout: three KPIs on a phone instead of twenty on a desktop, and an alert instead of a dashboard.\n4. **Embedding and AI** changed the delivery: the chart appears in the operational system, and the question is asked in natural language rather than built in a tool.\n\n**The trend.** The audience widened, the decision time fell, and the dashboard moved from a monthly artefact to a continuous signal inside the workflow — while the design principles of one screen and a few KPIs stayed the same.\n\n**Exam line:** reports, cubes, in-memory discovery, cloud and mobile, embedded and AI — each step made the same insight faster and available to more people.',
              diagram: 'ds5-dashboard-evolution',
              diagramCaption:
                'The evolution of dashboards and BI across five eras, with the technology driver and the change in audience for each.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain the chart types used for distribution and outliers — histogram, box plot, violin plot and strip plot — and state what each reveals and hides.',
              explain:
                '**What is being asked.** Distribution charts answer "how are the values spread?" and each reveals a different aspect.\n\n**The charts.** Histogram — the shape and the number of peaks, with a bin-width choice. Box plot — median, quartiles, whiskers and outliers, compact for many groups, but hides multi-modality. Violin — the density shape with the box inside. Strip or swarm — every point, best for small samples.\n\n**The traps.** Bin width changes the story in a histogram; a box plot hides a bimodal distribution; and overplotting hides density in a strip plot.\n\n**How to score the 5 marks.** Four charts with what each shows (3) · what each hides (1) · the bin-width or overplotting caution (1).',
              answer:
                'Distribution charts answer a different question from bar and line charts: not "how much" but "how are the values spread, and are there outliers?"\n\n| Chart | What it shows | What it hides |\n|---|---|---|\n| **Histogram** | the shape of the distribution, the number of peaks, skew, spread | individual points; and the shape changes with the bin width |\n| **Box plot** | median, quartiles, interquartile range, whiskers and flagged outliers; compact enough for many groups side by side | multi-modality — two peaks look identical to one |\n| **Violin plot** | the density shape plus the box inside it | exact counts; and it needs enough data to estimate density |\n| **Strip or swarm plot** | every observation, so density and gaps are visible | becomes unreadable beyond a few hundred points without jitter or transparency |\n\n**Outliers in each.** A box plot flags them with the 1.5 × IQR rule — for example with Q1 = 12 and Q3 = 24, IQR = 12 and the fences are 0 and 48, so a value of 65 is drawn as an outlier. A histogram shows a long tail but not the specific points. A strip plot shows the outlier as a lone dot, which is why it is used when the sample is small and every value matters.\n\n**The bin-width caution.** The same data can look unimodal at one bin width and bimodal at another. State the bin width, or use a density estimate alongside, otherwise the chart reports the analyst choice rather than the data.\n\n**Which to choose.** Use a histogram to understand the shape, a box plot to compare many groups compactly, a violin when the shape of each group matters, and a strip plot for a small sample where every point should be visible. When in doubt, show a histogram and a box plot side by side — one for shape, one for comparison.\n\n**Exam line:** histogram for shape, box plot for comparison, violin for shape per group, strip for every point — and a box plot cannot see two peaks.',
              diagram: 'ds5-charts-special',
              diagramCaption:
                'Distribution charts — histogram, box plot, violin and strip plot — with what each reveals, what each hides and the outlier rule.',
            },
          ],
        },
      ],
    },
  ],
};
