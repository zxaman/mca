// One Shot revision notes — Data Science.

export const dsOneShot = {
  subjectId: 'data-science',
  code: 'DS',
  accent: '#00d4ff',
  blurb: 'Data science fundamentals se clustering, association aur dashboards tak',
  units: [
    {
      id: 'unit-1',
      number: '1',
      name: 'Fundamentals of Data Science',
      tagline: 'Data ke types aur scales se life cycle, CRISP-DM aur roles tak',
      overview: 'Data science ki entry point: data kya hota hai (types aur scales), project ka life cycle, aur DS kis-kis se alag hai (BI, statistics, ML, AI). Ye unit baaki chaar units ka base hai.',
      minutes: 18,
      sections: [
        {
          title: '1.1–1.4 · Importance, data types, scales, formats',
          simple: 'Simple mein: data science data se sawaal poochhna hai, andaze se nahi.',
          example: 'Flipkart ka aapke liye recommended section aapke clicks ke data se nikla pattern hai, kisi ke mood se nahi.',
          text: `- **Data science:** data se insight nikaalne ka multidisciplinary process — statistics + programming + domain.
- **Data types:**
  - Structured: table rows/columns (SQL, CSV).
  - Semi-structured: tags/keys hain par fixed schema nahi (JSON, XML, logs).
  - Unstructured: text, image, audio, video.
- **Scales of measurement:**

| Scale | Property | Example | Allowed ops |
|---|---|---|---|
| Nominal | naam/label | gender, city | count, mode |
| Ordinal | order | grade A/B/C, rating | + median, rank |
| Interval | order + equal gap, no true zero | temperature °C | + mean, difference |
| Ratio | order + gap + true zero | height, income | + ratio, multiply |

- **Formats:** CSV (plain, header row), JSON (key-value, nested), XML (tags, strict), SQL table (schema + constraints).`,
          diagram: 'data-types',
          caption: 'Data ke teen types — structured, semi-structured, unstructured, example ke saath.',
        },
        {
          title: '1.5–1.7 · Big data vs DS, life cycle, process models',
          simple: 'Simple mein: life cycle ka ek hi rasta hai — data laao, saaf karo, model banao, deploy karo, monitor karo.',
          example: 'CRISP-DM: churn kam karna hai to purana data, model, deploy, phir 3 mahine baad accuracy check.',
          text: `- **Big data:** 3 V — volume, velocity, variety (+ veracity, value). Data science us data se method nikaalti hai; big data infra deta hai.
- **DS life cycle:** problem define → data collect → clean → explore (EDA) → model → evaluate → deploy → monitor.
- **CRISP-DM (6 phases):** business understanding → data understanding → data preparation → modelling → evaluation → deployment (iterative).
- **SEMMA (SAS):** Sample → Explore → Modify → Model → Assess.
- **TDSP (Microsoft):** business understanding → data acquisition → modelling → deployment, with team roles + versioning.

**Exam line:** CRISP-DM ki 6 phases yaad rakho — sabse zyada poocha jaata hai.`,
          diagram: 'crisp-dm',
          caption: 'CRISP-DM ke 6 phases — business understanding se deployment tak ka cycle.',
        },
        {
          title: '1.8–1.10 · Applications, DS vs BI vs stats vs ML vs AI',
          simple: 'Simple mein: BI batata hai kya hua, data science andaza lagata hai aage kya hoga.',
          example: 'BI dashboard: pichle mahine sales 20% giri. DS model: agle mahine kaunse 500 customer churn karenge.',
          text: `- **Applications:** healthcare (diagnosis, readmission), finance (fraud, credit), retail (recommendation, demand), manufacturing (predictive maintenance), telecom (churn), transport (route), education (dropout).
- **Farq (table form):**

| Field | Focus | Output |
|---|---|---|
| Statistics | inference, sampling | confidence, significance |
| BI | past kya hua | dashboards, reports |
| Data science | end-to-end insight | model + story |
| ML | algorithm se pattern | prediction |
| AI | machine se intelligent behaviour | decision/automation |

- **ML and AI:** AI broader; ML subset (data se seekhna); deep learning ML ka subset (neural networks).
- **ML types:** supervised (labelled), unsupervised (unlabelled), semi-supervised, reinforcement (reward se seekhna).`,
        },
        {
          title: '1.11–1.12 · Roles + mathematical statistics',
          simple: 'Simple mein: statistics data ka health check hai — average, spread aur galti ka hisaab.',
          example: 'Mean 45 aur std 3 matlab sab log 42 se 48 ke beech; 90 marks wala ek outlier alag dikh jayega.',
          text: `- **Roles:** data analyst, data scientist, ML engineer, data engineer, BI developer, domain expert, data steward/architect.
- **Statistics kyun:** central tendency (mean/median/mode), dispersion (variance, SD, IQR), distribution (normal, skew), probability, sampling, hypothesis testing (p-value, t-test), correlation vs causation.
- **Outlier rule:** z-score > 3 ya IQR ke 1.5× bahar.
- **Correlation:** Pearson (linear, −1..1), Spearman (rank).

**Exam line:** data science ki neev statistics hai — bina distribution samjhe model ka result bharosa layak nahi.`,
          diagram: 'stats-foundation',
          caption: 'Statistics ke basic building blocks — central tendency, dispersion aur distribution.',
        },
      ],
      lastMinute: [
        '4 scales of measurement + allowed operations — table form.',
        'CRISP-DM ke 6 phases aur SEMMA ke 5.',
        'DS vs BI vs ML vs AI — ek-ek line.',
        'Structured/semi/unstructured ke 2 example each.',
      ],
    },
    {
      id: 'unit-2',
      number: '2',
      name: 'Data Pre-processing and Data Warehouse',
      tagline: 'Cleaning, integration, reduction se DW architecture aur OLAP tak',
      overview: 'Yahan data ko model ke laayak banaya jaata hai — cleaning, integration, transformation, reduction — aur phir warehouse, ETL aur star schema, jahan se analysis ke liye saaf data aata hai.',
      minutes: 20,
      sections: [
        {
          title: '2.1–2.2 · Pre-processing kya aur kyun',
          simple: 'Simple mein: garbage in, garbage out — kachra data se model bhi kachra jawab deta hai.',
          example: 'Ek column mein Pune, pune aur PUNE likha hai; computer teeno ko alag maanta hai, pre-processing se ek ho jaate hain.',
          text: `- **Pre-processing =** raw data ko model-ready banana — 4 steps: cleaning, integration, transformation, reduction.
- **Kyun:** real data ganda hota hai — missing, noisy, inconsistent, duplicate, wrong scale.
- **Garbage in, garbage out:** model ki quality data ki quality se upar nahi ja sakti.
- **Rule of thumb:** project ka 60–80% time pre-processing mein jaata hai.`,
          diagram: 'ds-preprocessing',
          caption: 'Pre-processing ke chaar steps aur unka kaam.',
        },
        {
          title: '2.3–2.6 · Cleaning, integration, transformation, reduction',
          simple: 'Simple mein: saaf karo (missing, duplicate), jodo (multiple source), badlo (scale, encode), chhota karo (kam columns).',
          example: 'Salary 50000 aur 5 lakh ko min-max se 0 se 1 range mein laaya; profession column ko one-hot 0/1 mein tod diya.',
          text: `- **Cleaning:**
  - Missing: drop, mean/median, group mean, model-based, ya flag karke impute.
  - Noisy: binning, regression smoothing, clustering.
  - Outliers: z-score/IQR par detect, remove ya cap (reason ke saath).
  - Duplicate: dedupe on key + fuzzy matching.
- **Integration:** multiple sources ko ek mein — schema matching, entity resolution, redundancy/ correlation handle karna.
- **Transformation:**
  - Normalisation (min-max: \`(x−min)/(max−min)\` → 0–1).
  - Standardisation (z-score: \`(x−μ)/σ\`).
  - Encoding (one-hot, label), discretisation (bins), aggregation, log transform.
- **Reduction:** dimension (PCA, feature selection), numerosity (sampling, binning), compression.
- **Kis par kaunsa:** distance-based models (KNN, k-means) ke liye **scaling zaroori**; tree models ko scaling ki zaroorat nahi.`,
          diagram: 'ds-cleaning',
          caption: 'Data cleaning ke techniques — missing values, noise, outliers aur duplicates.',
        },
        {
          title: '2.7–2.9 · Data warehouse + architecture + ETL',
          simple: 'Simple mein: data warehouse company ka godown hai jahan saara data ek jagah, ek format mein rakha jaata hai.',
          example: 'Sales, app aur CRM ka data raat ko ETL se warehouse mein jaata hai; subah manager ek hi dashboard dekhta hai.',
          text: `- **DW characteristics (SITN):** subject-oriented, integrated, time-variant, non-volatile.
- **Architecture:** source → staging → warehouse (integrated store) → data marts → BI tools; metadata har layer mein.
- **ETL:** extract (full/incremental) → transform (clean, conform, derive) → load (full/append/MERGE).
- **ELT:** raw load + warehouse compute se transform (cloud DW).
- **OLTP vs DW:** OLTP current + normalised + write-heavy; DW historical + dimensional + read-heavy.`,
          diagram: 'ds-dw-architecture',
          caption: 'Data warehouse architecture — sources, staging, warehouse, marts aur metadata.',
        },
        {
          title: '2.10–2.13 · Fact/dimension, star, snowflake, OLAP vs OLTP',
          simple: 'Simple mein: fact mein numbers hote hain, dimension mein unki detail — kaun, kahan, kab.',
          example: 'Fact: 500 units becha. Dimension: product Shoes, store Pune, date 4 Nov — inhe jodne se star schema banta hai.',
          text: `- **Fact table:** foreign keys + numeric measures, grain par ek row (sales line).
- **Dimension table:** descriptive attributes (product, customer, date, store).
- **Star schema:** ek fact + flat dimensions — kam joins, fast.
- **Snowflake schema:** dimensions normalised — storage bachta, joins badhte.
- **Cube/OLAP:** dimensions = address, measures = value; operations — roll-up, drill-down, slice, dice, pivot.
- **OLAP vs OLTP table:**

| Point | OLTP | OLAP |
|---|---|---|
| Data | current | historical |
| Design | normalised | star/cube |
| Query | simple, many | complex, few |
| Metric | throughput | analysis speed |`,
          diagram: 'ds-star-schema',
          caption: 'Star schema — fact table centre mein, dimension tables chaaron taraf.',
        },
      ],
      lastMinute: [
        'Pre-processing ke 4 steps aur missing value ke 4 treatments.',
        'Normalisation vs standardisation ka formula.',
        'DW ke SITN characteristics + architecture ke layers.',
        'Star vs snowflake ke 4 farq + OLAP vs OLTP table.',
      ],
    },
    {
      id: 'unit-3',
      number: '3',
      name: 'Classification',
      tagline: 'Regression se SVM tak, aur confusion matrix + metrics',
      overview: 'Classification ka poora safar: problem kya hai, kaunse algorithms (regression, Naive Bayes, KNN, tree, SVM), aur model ko judge kaise karein (confusion matrix, precision/recall, R2).',
      minutes: 24,
      sections: [
        {
          title: '3.1–3.2 · Classification applications + ML types',
          simple: 'Simple mein: classification fixed categories mein daalta hai, regression number predict karta hai.',
          example: 'Spam ya not spam = classification. Kal ka temperature 31 degree = regression.',
          text: `- **Classification:** labelled data par model, output = class (spam/not, fraud/not, disease/yes-no).
- **Applications:** spam filter, credit scoring, churn, disease diagnosis, sentiment, image recognition.
- **ML types:** supervised (classification + regression), unsupervised (clustering, association), semi-supervised, reinforcement (reward).
- **Training/testing split:** 70/30 ya 80/20; cross-validation (k-fold) se reliable estimate.
- **Overfitting:** train par achha, test par kharab — fix: more data, regularisation, simpler model, cross-validation.
| ML type | Data | Example |
|---|---|---|
| Supervised | labelled | spam detect, house price |
| Unsupervised | unlabelled | customer segments, apriori |
| Reinforcement | reward + penalty | game, robot |
`,
          diagram: 'ds3-ml-types',
          caption: 'Machine learning ke types — supervised, unsupervised, semi-supervised, reinforcement.',
        },
        {
          title: '3.3–3.4 · Linear aur logistic regression',
          simple: 'Simple mein: linear regression seedhi line se number nikalta hai, logistic probability nikaal ke haan ya na mein badalta hai.',
          example: 'Area se ghar ka price = linear. Customer kharidega ya nahi = logistic, 0.8 probability matlab haan.',
          text: `- **Linear regression:** continuous output — \`y = b0 + b1x1 + … + bnxn\`; least squares se fit; R² se fit quality.
- **Logistic regression:** binary output — sigmoid se probability, \`p = 1/(1+e^-z)\`, threshold (0.5) par class.
- **Log-odds:** \`log(p/(1−p)) = b0 + b1x\`.
- **Kab:** linear — price/demand forecast; logistic — churn/fraud/yes-no.
- **Assumption to mention:** linearity, independence, no multicollinearity (linear), large sample (logistic).`,
          diagram: 'ds3-logistic-reg',
          caption: 'Logistic regression — sigmoid curve se probability, phir threshold par class.',
        },
        {
          title: '3.5–3.8 · Naive Bayes, KNN, decision tree, SVM',
          simple: 'Simple mein: KNN kehta hai jo tumhare jaise hain wahi dekho, decision tree 20 sawaal poochh ke faisla karta hai.',
          example: 'KNN: paas ke 5 customer mein 4 ne kharida to ye bhi kharidega. Tree: age 30 se zyada? income 50k se zyada? phir approve.',
          text: `- **Naive Bayes:** Bayes theorem + feature independence assumption; text/spam ke liye strong, fast, small data par bhi.
- **KNN:** k nearest points ka majority vote; distance (Euclidean/Manhattan); scaling zaroori; k odd rakho; slow on large data.
- **Decision tree:** recursive split (Gini/Entropy/Information gain); interpretable; overfit hone par pruning.
  - \`Entropy = −Σ p log2 p\`, \`Information gain = entropy(parent) − weighted entropy(children)\`.
- **SVM:** maximum margin hyperplane; kernel trick (linear, polynomial, RBF) se non-linear; high dimension mein strong, slow on huge data.
- **Model choice one-liner:** text → NB; small numeric → KNN; explainable rules → tree; high-dim boundary → SVM.`,
          diagram: 'ds3-decision-tree',
          caption: 'Decision tree — root se leaf tak splits aur entropy/information gain.',
        },
        {
          title: '3.9–3.11 · Confusion matrix, precision/recall/F1, ROC-AUC',
          simple: 'Simple mein: confusion matrix chaar dabbe ka scorecard hai — kitne sahi, kitne galat, kis type ke galat.',
          example: '1000 logon mein 10 asli patient the, model ne 9 pakde (recall 90%) par 50 healthy ko galat flag kiya (precision kam).',
          text: `- **Confusion matrix:** TP, FP, FN, TN.
- **Formulas:**
  - \`Accuracy = (TP+TN)/total\`
  - \`Precision = TP/(TP+FP)\` — "jo positive bola, kitne sahi"
  - \`Recall/Sensitivity = TP/(TP+FN)\` — "jo actually positive the, kitne pakde"
  - \`Specificity = TN/(TN+FP)\`
  - \`F1 = 2 × (P × R)/(P + R)\`
- **Kab kya:** fraud/rare disease → recall important; spam filter → precision important; imbalance → accuracy dhokha deti hai, F1 use karo.
- **ROC curve:** TPR vs FPR; **AUC** 1 = perfect, 0.5 = random.`,
          diagram: 'ds3-confusion-matrix',
          caption: 'Confusion matrix — TP, FP, FN, TN aur unse nikalne wale metrics.',
        },
        {
          title: '3.12 · Regression metrics: MAE, MSE, RMSE, R²',
          simple: 'Simple mein: MAE average galti batata hai, RMSE badi galti par zyada daantta hai, R2 batata hai model ne kitna samjha.',
          example: 'Actual 100, model ne 110 bola to error 10. R2 = 0.85 matlab 85% variation model samajh gaya.',
          text: `- \`MAE = (1/n) Σ |y − ŷ|\` — same unit, outlier ke prati soft.
- \`MSE = (1/n) Σ (y − ŷ)²\` — outlier ko zyada punish karta hai.
- \`RMSE = √MSE\` — same unit, MSE se interpretable.
- \`R² = 1 − SSres/SStot\` — 1 perfect, 0 mean-model jitna; negative = worse than mean.
- **Adjusted R²:** extra features ka penalty — feature compare karte waqt use karo.
- **Exam line:** MAE/RMSE tab jab error ka matlab samajhna ho; MSE tab jab bade error ko zyada weight dena ho.`,
          diagram: 'ds3-regression-metrics',
          caption: 'Regression metrics — MAE, MSE, RMSE aur R² ka matlab.',
        },
      ],
      lastMinute: [
        'Precision, recall, F1 ke formula + kab kaunsa important.',
        'ROC-AUC ka matlab (1 perfect, 0.5 random).',
        'Naive Bayes ka assumption aur KNN mein k odd kyun.',
        'Decision tree ka entropy + information gain formula.',
      ],
    },
    {
      id: 'unit-4',
      number: '4',
      name: 'Clustering and Association Rule Mining',
      tagline: 'K-means se apriori tak — unsupervised ka poora unit',
      overview: 'Is unit mein labels nahi hote, sirf data hota hai. Distance se similarity nikaalna, K-means aur hierarchical clustering se group banana, aur apriori se “saath kharide jaane wale” rules.',
      minutes: 18,
      sections: [
        {
          title: '4.1 · Distance based models',
          simple: 'Simple mein: clustering mein paas-paas wale ek group mein jaate hain — yahan distance hi similarity hai.',
          example: 'Do customer ka age aur income paas hai to ek hi segment. Euclidean seedhi doori, cosine sirf direction dekhta hai (text ke liye).',
          text: `- **Euclidean:** \`√Σ(xi − yi)²\` — straight line, scaling zaroori.
- **Manhattan:** \`Σ|xi − yi|\` — grid distance, outlier ke prati robust.
- **Cosine:** angle based — text/high-dim ke liye.
- **Minkowski:** \`(Σ|xi − yi|^p)^(1/p)\` — p=1 Manhattan, p=2 Euclidean.
- **Chebyshev:** max coordinate difference.
- **Rule:** distance-based algorithms ke liye features **normalise** karo warna bada scale dominate karega.
| Distance | Formula ka matlab | Kab use |
|---|---|---|
| Euclidean | seedhi line ki doori | normal numeric data |
| Manhattan | grid/block ki doori | outliers, city routes |
| Cosine | angle (direction) | text similarity |
| Jaccard | intersection / union | sets, binary data |
`,
          diagram: 'ds4-distances',
          caption: 'Distance measures — Euclidean, Manhattan, cosine aur Minkowski.',
        },
        {
          title: '4.2–4.5 · K-means, k-medoid, hierarchical, elbow',
          simple: 'Simple mein: K-means k group banata hai, har point ko nearest centre par daalta hai, phir centre ko beech mein le aata hai — repeat.',
          example: '1000 customer 3 group mein: budget, mid, premium. Elbow graph ne bataya k = 3 sahi hai. K-medoid centre ke liye asli point chunta hai.',
          text: `- **K-means:** k centroids, assign → recompute loop, SSE minimise.
  - Steps: k chuno → centroid init → assign → update → repeat till stable.
  - Limitation: k manual, sensitive to init (k-means++), outliers, sirf spherical clusters.
- **K-medoid (PAM):** actual point medoid — outlier ke prati robust, O(k(n−k)²) slower.
- **Hierarchical:** agglomerative (bottom-up merge) ya divisive (top-down split); dendrogram se cut; distance linkage: single, complete, average, Ward.
- **Elbow method:** k ke against SSE plot — jahan curve "kohni" bane wahi k.
- **Silhouette score:** \`(b − a)/max(a,b)\` — 1 best, 0 overlap, negative galat cluster.`,
          diagram: 'ds4-kmeans',
          caption: 'K-means ka loop — assign, update centroid, repeat, aur elbow method se k.',
        },
        {
          title: '4.6–4.9 · Association rules, apriori, FP-growth, support & confidence',
          simple: 'Simple mein: association rule batata hai ki kaunsi cheezein saath kharidi jaati hain.',
          example: '1000 bill mein 300 mein bread, 200 mein bread aur butter: bread to butter ka support 20%, confidence 200/300 = 67%.',
          text: `- **Market basket:** "jo saath kharida gaya" — association rules.
- **Terms:** itemset, \`Support(A) = freq(A)/N\`, \`Confidence(A→B) = support(A∪B)/support(A)\`, \`Lift = confidence/support(B)\`.
  - Lift > 1 = positive association, = 1 independent, < 1 negative.
- **Apriori:** level-wise candidate generation; **apriori property** = frequent itemset ke sab subsets frequent; candidate pruning se speed.
- **FP-growth:** FP-tree banao (compressed), conditional patterns — candidate generation nahi, isliye faster on dense data.
- **Example:** 100 transactions, bread 40, butter 30, dono 25 → support 0.25, confidence 25/40 = 0.625, lift = 0.625/0.30 ≈ 2.08 → strong rule.`,
          diagram: 'ds4-apriori',
          caption: 'Apriori algorithm — candidate generation, pruning aur frequent itemsets.',
        },
      ],
      lastMinute: [
        'K-means ke steps + 3 limitations.',
        'Elbow method kya batata hai; silhouette ka range.',
        'Support, confidence, lift ke formula + ek numeric example.',
        'Apriori vs FP-growth — ek-ek line.',
      ],
    },
    {
      id: 'unit-5',
      number: '5',
      name: 'Data Visualization and Emerging Trends',
      tagline: 'Dashboard, charts, tools aur RL/generative AI ka quick revision',
      overview: 'Aakhir mein result dikhana aur naye trends: visualization ke principles, sahi chart ka chunav, dashboard design, aur RL, generative AI aur XAI jaise naye vishay.',
      minutes: 16,
      sections: [
        {
          title: '5.1–5.4 · Visualization intro, challenges, dashboard types, evolution',
          simple: 'Simple mein: visualization ka lakshya hai numbers ko aisa dikhana ki 5 second mein samajh aa jaye.',
          example: '12 mahine ki sales table padhne mein 5 minute lagte hain, line chart dekhne mein 5 second — data wahi hai.',
          text: `- **Visualization ka kaam:** pattern, trend, outlier, comparison — jo table mein nahi dikhta.
- **Challenges:** data quality, over-plotting, misleading scale, accessibility, tool choice, big data performance.
- **Dashboard types:** strategic (executive, KPI), operational (daily monitoring), analytical (explore/drill).
- **Evolution:** static reports → interactive dashboards → self-service → real-time/streaming → AI-assisted narrative dashboards.
- **Display media:** desktop, mobile, big screen/wall, embedded in app, print/PDF.`,
          diagram: 'ds5-dashboard-types',
          caption: 'Dashboard ke types — strategic, operational, analytical, aur unka audience.',
        },
        {
          title: '5.5–5.6 · Design principles + display media',
          simple: 'Simple mein: kam se kam ink se zyada se zyada meaning — faltu color, grid aur 3D hataao.',
          example: 'Ek page par 5 KPI aur 1 trend line clear lagta hai, 12 chart aur 3D pie confusion. Mobile, desktop aur board ke hisaab se detail badalti hai.',
          text: `- **Principles:** ek screen ek message, 5–9 KPI, hierarchy (KPI band → trend → detail), zero baseline, consistent colour, filter + refresh visible.
- **Layout:** F/Z reading pattern, most important top-left, grouping, white space.
- **Colour:** status ke liye red/amber/green, categorical ke liye 6 colours, colour-blind safe.
- **Display media:** choose by decision cycle — desktop for analysis, mobile for alert, wall for monitoring.`,
          diagram: 'ds5-dashboard-design',
          caption: 'Dashboard design — layout bands, KPI limit aur colour discipline.',
        },
        {
          title: '5.7–5.10 · Charts + tools',
          simple: 'Simple mein: chart data ke type se chunte hain, sundar dikhne se nahi.',
          example: 'Trend ke liye line, category compare ke liye bar, hissa dikhane ke liye pie (kam slices), relation ke liye scatter. Tools: Power BI, Tableau.',
          text: `- **Bar / stacked bar / pie / doughnut:** comparison, composition (pie sirf 2–3 slices).
- **Line / area / treemap / heatmap:** trend, cumulative, hierarchy, matrix intensity.
- **Waterfall / scatter / histogram / box plot:** contribution, relationship, distribution, spread+outliers.
- **Rule:** position > length > angle > area > colour; truncate mat karo.
- **Tools:** Tableau (visual exploration, VizQL), Power BI (Microsoft stack, DAX, cheaper), plus Looker, Qlik, Python (matplotlib/seaborn/plotly).
| Chart | Kab use karo | Avoid |
|---|---|---|
| Bar | category compare | 30+ categories |
| Line | trend over time | unordered categories |
| Pie | 2–4 part of whole | 6+ slices |
| Scatter | do variable ka relation | time series |
`,
          diagram: 'ds5-charts-basic',
          caption: 'Basic chart types aur kis sawaal ke liye kaunsa chart.',
        },
        {
          title: '5.11–5.12 · Reinforcement learning, generative/deep learning, XAI',
          simple: 'Simple mein: RL try karke reward aur penalty se seekhta hai, XAI batata hai model ne kya socha.',
          example: 'Game AI ko jeetne par +1 aur marne par -1 milta hai. Bank loan reject kare to XAI batata hai ki income kam thi.',
          text: `- **RL elements:** agent, environment, state, action, reward, policy, value function.
- **RL steps:** observe state → choose action → receive reward → update policy → repeat; exploration vs exploitation.
- **RL types:** model-free (Q-learning, DQN) vs model-based; on-policy (SARSA) vs off-policy (Q-learning).
- **Deep learning:** multi-layer neural networks — CNN (image), RNN/LSTM (sequence), Transformer (text).
- **Generative AI:** data se naya content (text/image/code) — GAN, diffusion, LLM.
- **XAI:** model ka decision explain karna — LIME, SHAP, feature importance, rules; regulated domains mein zaroori.`,
          diagram: 'ds5-reinforcement-learning',
          caption: 'Reinforcement learning ka loop — agent, action, reward, policy update.',
        },
      ],
      lastMinute: [
        'Dashboard ke 3 types + audience.',
        'Chart selection table — question se chart.',
        'RL ke 6 elements (agent, environment, state, action, reward, policy).',
        'Generative AI vs discriminative, aur XAI ke 2 tools (LIME, SHAP).',
      ],
    },
  ],
};
