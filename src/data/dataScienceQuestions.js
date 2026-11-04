// ============================================================
// Important 6-Mark Exam Questions — Data Science, Unit I
// Curated across all 3 topics of Fundamentals of Data Science
// Each with complete answer + diagram reference
// ============================================================

export const dataScienceImportantQuestions = [
  {
    id: 'dsq1',
    subjectId: 'data-science',
    unit: '1',
    topicNumber: '1.1',
    topicTitle: 'Importance of Data Science',
    question: 'Define Data Science. Explain why data science is important for modern organizations.',
    answer:
      '**Definition:**\nData science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and actionable insights from structured and unstructured data, and to apply those insights to solve real-world problems.\n\n**Interdisciplinary nature:**\n1. **Statistics & Mathematics** — probability, inference, regression\n2. **Computer Science** — programming (Python/R), databases, machine learning\n3. **Domain Knowledge** — business context aur result interpretation\n\n**Importance (6 points):**\n1. **Better decision making** — gut feeling ki jagah data-based evidence\n2. **Prediction and forecasting** — demand, sales, churn aur risk pehle se pata chalta hai\n3. **Personalization** — recommendation systems se customer experience improve hota hai\n4. **Cost and time saving** — predictive maintenance, real-time fraud detection\n5. **Automation** — repetitive decisions ML models se automate\n6. **Competitive advantage and new business models** — data-driven products aur services\n\n**Diagram:** Refer to the Data Science intersection diagram (Statistics ∩ Computer Science ∩ Domain) and the Data → Value flow diagram.',
    diagram: 'ds-venn',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'dsq2',
    subjectId: 'data-science',
    unit: '1',
    topicNumber: '1.1',
    topicTitle: 'Importance of Data Science',
    question: 'Explain the interdisciplinary nature of Data Science with a suitable diagram.',
    answer:
      '**Meaning:**\nData Science kisi ek subject ka extension nahi hai — ye teen disciplines ke intersection par kaam karti hai.\n\n**1. Statistics and Mathematics**\n- Mean, median, variance, probability, hypothesis testing\n- Regression aur classification ka mathematical base\n- Result valid hai ya random — statistics batati hai\n\n**2. Computer Science**\n- Python, R, SQL programming\n- Databases, cloud, big-data tools (Spark, Hadoop)\n- Machine learning aur deep learning libraries\n\n**3. Domain Knowledge**\n- Business / healthcare / finance ki samajh\n- Sahi question frame karna aur result interpret karna\n\n**4. Communication (supporting pillar)**\n- Visualization aur dashboards se insight decision maker tak pahunchana\n\n**Diagram:** Three overlapping circles — Statistics & Mathematics, Computer Science, Domain Knowledge — centre mein "DATA SCIENCE". Do circles ka overlap statistical analysis ya software development hai; teeno ka overlap Data Science hai.',
    diagram: 'ds-venn',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'dsq3',
    subjectId: 'data-science',
    unit: '1',
    topicNumber: '1.1',
    topicTitle: 'Importance of Data Science',
    question: 'Differentiate between Data Science and traditional Business Intelligence with examples.',
    answer:
      '**Data Science vs Traditional BI:**\n\n| Aspect | Data Science | Traditional BI |\n|---|---|---|\n| Question | Kya hoga? (predict) | Kya hua? (report) |\n| Data | Structured + unstructured | Mostly structured |\n| Techniques | ML, deep learning, NLP | Aggregation, OLAP, dashboards |\n| Output | Model, score, recommendation | Report, dashboard, KPI |\n| Skills | Python/R, ML, statistics | SQL, Excel, BI tools |\n| Nature | Forward-looking, exploratory | Backward-looking, reporting |\n\n**Example (BI):** Manager dashboard dekhta hai ki pichhle quarter Pune region ki sales 12% giri.\n\n**Example (Data Science):** Model predict karta hai ki agle quarter kaunse 500 customers churn karenge, aur unhe offer bheja jaata hai.\n\n**Note:** Dono complementary hain — BI past batati hai, Data Science future predict karti hai.\n\n**Diagram:** Refer to the Data → Value flow diagram.',
    diagram: 'ds-impact',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'dsq4',
    subjectId: 'data-science',
    unit: '1',
    topicNumber: '1.2',
    topicTitle: 'Types of Data',
    question: 'Explain the types of data — structured, semi-structured and unstructured — with examples and a diagram.',
    answer:
      '**1. Structured Data**\nPredefined schema ke saath rows aur columns mein stored data.\n- Example: student table (roll_no, name, marks), bank transactions\n- Storage: RDBMS (MySQL, Oracle) · Query: SQL\n- Share: ~10–20% of enterprise data\n\n**2. Semi-structured Data**\nApna structure tags/keys ke roop mein rakhta hai, rigid schema nahi hota.\n- Example: JSON API response, XML, YAML, email, log files\n- Storage: NoSQL (MongoDB), data lake · Query: JSON path, Spark\n- Share: ~5–10%\n\n**3. Unstructured Data**\nKoi predefined model ya schema nahi.\n- Example: images, audio, video, PDF, free text, CCTV footage\n- Processing: NLP, computer vision, deep learning\n- Share: ~80–90%\n\n**Comparison:** Structure jitna kam, storage aur processing effort utna zyada — par insight value bhi utni hi zyada.\n\n**Diagram:** Draw a tree with root "DATA" branching into the three types, each with 2 examples and 1 tool.',
    diagram: 'data-types',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'dsq5',
    subjectId: 'data-science',
    unit: '1',
    topicNumber: '1.2',
    topicTitle: 'Types of Data',
    question: 'What is semi-structured data? Explain JSON and XML with examples and state its advantages.',
    answer:
      '**Definition:**\nSemi-structured data wo data hai jisme structure maujood hota hai par fixed schema ke roop mein nahi — tags, keys ya markers ke through har record apna structure khud carry karta hai.\n\n**JSON example:**\n{"student": {"name": "Riya", "marks": [78, 82], "course": "MCA"}}\n\n**XML example:**\n<student><name>Riya</name><marks>78</marks></student>\n\n**Characteristics:**\n- Self-describing (field names data ke saath)\n- Flexible schema — naye fields baad mein add ho sakte hain\n- Heterogeneous records ek hi collection mein\n\n**Advantages:**\n1. Flexibility — schema change ke liye migration nahi chahiye\n2. Web/API friendly — REST APIs JSON bhejti hain\n3. Nested aur hierarchical data easily represent hota hai\n4. Structured format mein convert karna aasaan (flattening)\n\n**Limitations:**\n- Storage overhead (tags repeat hote hain)\n- Analysis se pehle parsing zaroori\n- Complex queries structured data se mushkil\n\n**Diagram:** Refer to the Types of Data hierarchy diagram.',
    diagram: 'data-types',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'dsq6',
    subjectId: 'data-science',
    unit: '1',
    topicNumber: '1.3',
    topicTitle: 'Scales of Measurement',
    question: 'Explain the four scales of measurement with properties and examples.',
    answer:
      '**Definition:**\nA scale of measurement is a rule for assigning numbers or labels to objects/events. Stevens (1946) ne teen properties ke basis par chaar scales diye — order, equal interval aur true zero.\n\n**1. Nominal Scale**\n- Properties: sirf labelling, koi order/interval/zero nahi\n- Examples: gender, blood group, city, religion\n- Allowed: count, frequency, mode, chi-square\n\n**2. Ordinal Scale**\n- Properties: order hai, intervals equal nahi\n- Examples: grades A/B/C, rank 1st/2nd, satisfaction 1–5\n- Allowed: mode, median, percentile, rank correlation\n\n**3. Interval Scale**\n- Properties: order + equal intervals, true zero nahi\n- Examples: temperature °C, IQ, calendar year\n- Allowed: mode, median, mean, SD, correlation\n- Limitation: ratio meaningful nahi (40°C ≠ 2 × 20°C)\n\n**4. Ratio Scale**\n- Properties: order + equal intervals + true zero\n- Examples: height, weight, income, age, sales, Kelvin\n- Allowed: saare operations including ratio\n\n**Diagram:** Four ascending steps (Nominal → Ordinal → Interval → Ratio), har step par example aur allowed operations.',
    diagram: 'measurement-scales',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'dsq7',
    subjectId: 'data-science',
    unit: '1',
    topicNumber: '1.3',
    topicTitle: 'Scales of Measurement',
    question: 'Why is it important to identify the scale of measurement before applying statistical tools?',
    answer:
      '**Reason:**\nHar statistical tool ek certain scale ki assumption par kaam karta hai. Galat scale chunne se result meaningless ho jaata hai.\n\n**1. Central tendency ka choice**\n- Nominal → sirf mode\n- Ordinal → mode, median\n- Interval/Ratio → mean bhi valid\n\n**2. Dispersion measures**\n- Range ordinal tak theek hai\n- Standard deviation ke liye interval/ratio chahiye\n\n**3. Ratio statements**\n- Sirf ratio scale par "do guna" bolna sahi hai\n- Interval par percentage change galat (20°C → 40°C "100% increase" meaningless)\n\n**4. Test selection**\n- Nominal → chi-square\n- Ordinal → Mann-Whitney, Spearman\n- Interval/Ratio → t-test, ANOVA, Pearson\n\n**5. Coding discipline**\n- Nominal codes ko numbers maan lena (jersey 10 + 20 = 30) galti hai\n\n**Conclusion:** Scale identification data analysis ka pehla step hai — tool ka valid use isi par depend karta hai.',
    diagram: 'measurement-scales',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'dsq8',
    subjectId: 'data-science',
    unit: '1',
    topicNumber: '1.3',
    topicTitle: 'Scales of Measurement',
    question: 'Differentiate between interval and ratio scale with examples, and classify: gender, exam grade, temperature °C, body weight, income, jersey number.',
    answer:
      '**Interval Scale:**\n- Order + equal intervals, true zero nahi\n- Zero arbitrary reference point hota hai\n- Ratio comparisons meaningful nahi\n- Example: temperature °C/°F, IQ, calendar year\n\n**Ratio Scale:**\n- Order + equal intervals + true zero\n- Zero = attribute ka absent hona\n- Ratio comparisons meaningful\n- Example: height, weight, income, age, sales\n\n| Aspect | Interval | Ratio |\n|---|---|---|\n| True Zero | No | Yes |\n| Ratio statement | Meaningless | Meaningful |\n| Doubling | 40°C ≠ 2 × 20°C | 40 kg = 2 × 20 kg |\n| Multiply/divide | Not valid | Valid |\n\n**Classification:**\n\n| Variable | Scale |\n|---|---|\n| Gender | Nominal |\n| Exam grade (A/B/C) | Ordinal |\n| Temperature °C | Interval |\n| Body weight | Ratio |\n| Income | Ratio |\n| Jersey number | Nominal |\n\n**Diagram:** Refer to the Scales of Measurement ladder diagram.',
    diagram: 'measurement-scales',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
];
