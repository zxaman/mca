// ============================================================
// DATA SCIENCE — Unit I, topics 1.4 to 1.9
//  1.4 Data formats: CSV, JSON, XML, SQL tables
//  1.5 Big data vs Data Science
//  1.6 Data science life cycle
//  1.7 Process models: CRISP-DM, TDSP, SEMMA
//  1.8 Applications of data science
//  1.9 Distinction: DS vs BI vs Statistics vs ML vs AI
// ============================================================

export const dataScienceExtraTopics = [
  // ==========================================================
  // 1.4 — Data Formats
  // ==========================================================
  {
    id: 'ds-data-formats',
    number: '1.4',
    title: 'Data Formats: CSV, JSON, XML, SQL Tables',
    subtitle: 'Ek hi record char formats mein — kaunsa format kab use karein',
    icon: 'table',
    accent: '#00d4ff',
    englishDefinition:
      'A data format is the layout or syntax in which data is stored and exchanged. CSV (Comma Separated Values) stores tabular data as plain text, one record per line with values separated by commas. JSON (JavaScript Object Notation) stores data as key-value pairs with support for nesting, arrays and mixed types, and is the default format of REST APIs. XML (eXtensible Markup Language) stores data in a tag-based tree with attributes and a strict, self-describing structure. An SQL table stores data inside a relational database with a fixed, typed schema (columns with data types, constraints and keys) and is queried with SQL. The format decides the storage engine, the tools and the cost of analysis.',
    intro:
      'Aapka college ka wahi ek record — roll number, naam, marks — char tarah se save ho sakta hai. Excel jaisi CSV file mein, kisi app ke JSON response mein, purane server ke XML mein, ya database ki SQL table mein. Data ka content same hai, par format badalne se poora toolchain badal jaata hai. Exam mein ye topic usually "compare these formats with examples" ke roop mein aata hai — isliye ek hi record ko charo formats mein likhna zaroor practice karein.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Data format kya hota hai?',
        body:
          'Data format wo rule hai jo batata hai ki data ko file ya system mein kaise likha jayega — kaunse character field ko alag karenge, schema kahan likha jayega, nesting kaise dikhegi. Format decide karta hai ki data ko padhne ke liye kaunsa parser, kaunsa storage aur kaunsa query tool chahiye.',
        body2:
          'Ek hi data, char formats: CSV (plain text table), JSON (key-value, nested), XML (tag tree), SQL table (typed rows and columns). Format galat chuna to analysis slow, costly ya galat ho jaata hai.',
        chips: ['CSV', 'JSON', 'XML', 'SQL table', 'Schema', 'Parser'],
      },
      {
        type: 'cards',
        kicker: 'Four Formats',
        title: 'Chaar Main Data Formats',
        cards: [
          {
            icon: 'table',
            title: 'CSV — Comma Separated Values',
            body:
              'Plain text file jisme har line ek record aur commas values ko alag karte hain. Sabse simple aur lightweight format. Koi schema nahi hota — column ka type aapko khud maanna padta hai. Example: roll,name,marks / 1,Riya,78. Best for: Excel exports, quick data exchange, ML datasets. Limitation: nesting possible nahi, commas aur quotes escape karne padte hain.',
          },
          {
            icon: 'code',
            title: 'JSON — JavaScript Object Notation',
            body:
              'Key-value pairs ka format, jisme arrays aur nested objects allowed hain. REST API ka default format — kyunki ye self-describing hai aur har language mein parse hota hai. Example: {"name": "Riya", "marks": [78, 82]}. Best for: web APIs, NoSQL documents, config. Limitation: comments nahi, bada file human ke liye thoda mushkil.',
          },
          {
            icon: 'doc',
            title: 'XML — eXtensible Markup Language',
            body:
              'Tag based tree format — <student><name>Riya</name></student>. Strict, self-describing aur attributes support karta hai, isliye banking aur government systems mein aaj bhi use hota hai (SOAP, HL7). Best for: legacy integration, documents, strict validation (XSD). Limitation: verbose — JSON se 2–3 guna bada, parse karna slow.',
          },
          {
            icon: 'database',
            title: 'SQL Table — Relational Database',
            body:
              'Data rows aur columns mein, fixed aur typed schema ke saath. Primary key, foreign key aur constraints built-in hote hain, aur SQL se query hota hai. Best for: transactions, joins, multi-user consistency, reporting. Limitation: schema change costly, unstructured data ke liye suitable nahi.',
          },
        ],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
        title: 'Ek hi Record, Chaar Formats',
        diagram: 'data-formats',
        caption:
          'Chaaron panels mein same record hai (roll = 1, name = Riya, marks = 78). CSV mein ek line, JSON mein ek object, XML mein ek tree, SQL table mein ek row. Exam mein ye diagram draw karke "format = syntax, data = same" likhna best answer hota hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'CSV vs JSON vs XML vs SQL Tables',
        columns: ['CSV', 'JSON', 'XML', 'SQL table'],
        columnColors: ['#0047ff', '#00d4ff', '#c4ff00', '#ff8800'],
        rows: [
          { label: 'Structure', values: ['Lines + commas', 'Key-value + arrays', 'Tag tree', 'Rows + columns'] },
          { label: 'Schema', values: ['None (implicit)', 'Flexible / self-describing', 'Strict (XSD optional)', 'Fixed + typed'] },
          { label: 'Nesting', values: ['No', 'Yes', 'Yes', 'Only via relations'] },
          { label: 'Human readable', values: ['High', 'High', 'Medium (verbose)', 'Low (binary pages)'] },
          { label: 'Typical size', values: ['Smallest', 'Small', '2–3× JSON', 'Compact + indexes'] },
          { label: 'Query / tool', values: ['Excel, Pandas', 'API, Mongo, JS', 'SOAP, parsers', 'SQL'] },
          { label: 'Best for', values: ['Exports, ML datasets', 'Web APIs, config', 'Legacy, documents', 'Transactions, joins'] },
        ],
      },
      {
        type: 'example',
        kicker: 'Example',
        title: 'Same record — likhne ka tareeka',
        body:
          'CSV:\nroll,name,marks\n1,Riya,78\n\nJSON:\n{ "roll": 1, "name": "Riya", "marks": [78, 82] }\n\nXML:\n<student id="1"><name>Riya</name><marks>78</marks></student>\n\nSQL:\nINSERT INTO students (roll, name, marks) VALUES (1, "Riya", 78);\n\nNote: CSV mein type nahi dikhta (78 string hai ya number?), JSON/XML mein structure dikhta hai, SQL mein type schema se pata chalta hai.',
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Format choose karne ke 5 Rules',
        points: [
          'Tabular + simple + size chhota → CSV.',
          'API ya web app + nesting → JSON.',
          'Strict validation ya purana enterprise system → XML.',
          'Transactions, joins ya multi-user reporting → SQL table.',
          'Mixed data (text + image + logs) → object store / data lake; format ko metadata se handle karein.',
          'Interview line: "Format ka choice aapke use-case aur consumers se decide hota hai, data se nahi."',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'CSV = plain text table, no schema, sabse simple.',
          'JSON = key-value + nesting, REST API ka default.',
          'XML = tag tree, strict par verbose (JSON se 2–3× bada).',
          'SQL table = typed schema, keys aur joins ke saath.',
          'Format = syntax; data same rehta hai.',
          'Format choice: structure, size, tooling aur consumers dekhkar karein.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain CSV, JSON, XML and SQL table formats with the same example. Compare them on any four parameters.',
        answer:
          '**Data format:** Data format wo layout hai jisme data store ya exchange hota hai.\n\n**Same record (roll = 1, name = Riya, marks = 78):**\n- **CSV:** `roll,name,marks` → `1,Riya,78`\n- **JSON:** `{"roll": 1, "name": "Riya", "marks": [78, 82]}`\n- **XML:** `<student id="1"><name>Riya</name><marks>78</marks></student>`\n- **SQL:** `INSERT INTO students VALUES (1, "Riya", 78);` (table: roll | name | marks)\n\n**Comparison:**\n\n| Parameter | CSV | JSON | XML | SQL table |\n|---|---|---|---|---|\n| Schema | None | Flexible | Strict | Fixed + typed |\n| Nesting | No | Yes | Yes | Only relations |\n| Size | Smallest | Small | 2–3× JSON | Compact + index |\n| Query | Pandas/Excel | API/JS | Parsers | SQL |\n\n**Diagram:** Refer to the "Same record — chaar formats" diagram.',
      },
      {
        question: 'Differentiate between JSON and XML. Why is JSON preferred in modern web APIs?',
        answer:
          '**JSON vs XML:**\n\n| Aspect | JSON | XML |\n|---|---|---|\n| Syntax | Key-value braces | Tags |\n| Readability | Compact | Verbose |\n| Size | Smaller | 2–3× larger |\n| Types | Number, string, bool, null, array, object | Text only (typing via schema) |\n| Parsing | Native in JS, fast | Need DOM/SAX parser |\n| Validation | JSON Schema | XSD / DTD (stronger) |\n| Attributes | Not separate | Yes |\n\n**Why JSON is preferred:**\n1. Compact size → less bandwidth\n2. Native browser/JS support → `JSON.parse()` built-in\n3. Directly maps to objects and arrays used in code\n4. Simpler to read and debug\n5. REST APIs ke saath standard, OpenAPI se documented\n\n**Where XML still wins:** legacy/SOAP systems, strict XSD validation, documents with attributes, banking aur healthcare standards (HL7).\n\n**Diagram:** Refer to the data formats diagram.',
      },
      {
        question: 'You are given three projects: (a) marks data for a college report, (b) a mobile app talking to a server, (c) a bank transfer system. Which data format would you choose for each and why?',
        answer:
          '**(a) College marks report → CSV**\n- Tabular, fixed columns, small size\n- Excel/Pandas mein seedha khulta hai, non-technical staff bhi use kar sakta hai\n- Limitation: type aur validation nahi\n\n**(b) Mobile app ↔ server → JSON**\n- Nested objects aur arrays chahiye (user → orders → items)\n- REST API ka standard, har language mein parser\n- Kam size, fast transfer\n\n**(c) Bank transfer system → SQL table**\n- ACID transactions, constraints aur referential integrity zaroori\n- Rollback, locking, audit trail\n- Joins se reporting\n\n**Conclusion:** Same organisation teeno formats use karti hai — format use-case ke hisaab se chunte hain, ek universal best format nahi hota.\n\n**Diagram:** Refer to the data formats diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.5 — Big Data vs Data Science
  // ==========================================================
  {
    id: 'ds-bigdata-vs-ds',
    number: '1.5',
    title: 'Big Data vs Data Science',
    subtitle: 'Paanch V, tools aur dono ka relationship — fuel aur engine',
    icon: 'warehouse',
    accent: '#00d4ff',
    englishDefinition:
      'Big data refers to datasets whose volume, velocity and variety exceed the capacity of traditional database tools, requiring distributed storage and parallel processing (Hadoop, Spark, Kafka). It is characterised by the 5 V s: Volume (terabytes to petabytes), Velocity (high-speed streams), Variety (structured, semi-structured and unstructured), Veracity (noise and uncertainty) and Value (usefulness). Data science is the discipline of extracting insight from data using statistics, programming and domain knowledge. Big data supplies the data and the infrastructure; data science supplies the methods and the decisions.',
    intro:
      'Do terms jo interview mein aksar mix ho jaate hain. Big Data ek problem hai — data itna bada, tez aur alag-alag tarah ka hai ki normal database choke kar jaata hai. Data Science ek approach hai — us data se sawaal ka jawab nikalna. Ek line mein: Big Data fuel hai, Data Science engine hai. Exam mein "differentiate" aata hai, isliye 5 V aur tools yaad rakhein.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Big Data kya hai?',
        body:
          'Jab data ka volume, velocity ya variety itna badh jaaye ki traditional RDBMS usko store ya process nahi kar paaye, to usko big data kehte hain. Aise data ko distributed systems (multiple machines) par parallel process karna padta hai — jaise Hadoop ka HDFS + MapReduce, ya Spark.',
        body2:
          'Data Science us data (bade ya chhote) se insight nikalne ka process hai. Big data ke bina bhi data science ho sakti hai; par big data ke bina us data ka 90% hissa process hi nahi hoga.',
        chips: ['Volume', 'Velocity', 'Variety', 'Veracity', 'Value'],
      },
      {
        type: 'cards',
        kicker: '5 Vs',
        title: 'Big Data ke 5 V (Yaad Rakhne Wale)',
        cards: [
          {
            icon: 'warehouse',
            title: 'Volume',
            body:
              'Data ka size terabytes se petabytes tak. Ek UPI transaction chhoti hai, par 10 crore users ke 5 saal ke transactions lakhs of GB ban jaate hain. Isliye data ko cluster par todkar (sharding) store karna padta hai.',
          },
          {
            icon: 'zap',
            title: 'Velocity',
            body:
              'Data kitni tezi se aa raha hai. Stock prices, UPI fraud alerts, sensor readings aur social media posts real-time streams hote hain — inhe batch mein raat ko process karna possible nahi, streaming chahiye (Kafka, Spark Streaming).',
          },
          {
            icon: 'layers',
            title: 'Variety',
            body:
              'Data ke types ki variety — tables (structured), JSON/logs (semi-structured), aur images, audio, video, text (unstructured). Ek hi system mein teeno handle karne ke liye data lake chahiye.',
          },
          {
            icon: 'alert',
            title: 'Veracity',
            body:
              'Data kitna trustworthy hai. Missing values, duplicate records, galat sensor readings aur fake reviews — big data naturally noisy hota hai. Cleaning ke bina model ka output galat hota hai.',
          },
          {
            icon: 'star',
            title: 'Value',
            body:
              'Sabse important V — data se business value mili ya nahi. 10 TB data bhi bekaar hai agar usse koi decision, saving ya naya product na nikle. Value hi big data ko justify karti hai.',
          },
        ],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Big Data vs Data Science — Fuel aur Engine',
        diagram: 'bigdata-vs-ds',
        caption:
          'Left side infrastructure aur technology hai (Hadoop, Spark, Kafka, cloud), right side methods aur decisions (statistics, ML, domain knowledge). Beech mein 5 V likhe hain. Exam mein ye figure draw karke "Big data = data + infrastructure, Data science = methods + decisions" likhna scoring hota hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table (Most Important)',
        title: 'Big Data vs Data Science',
        columns: ['Big Data', 'Data Science'],
        columnColors: ['#0047ff', '#c4ff00'],
        rows: [
          { label: 'Definition', values: ['Data jo traditional tools se handle na ho', 'Data se insight nikalne ki discipline'] },
          { label: 'Nature', values: ['Infrastructure + technology', 'Methods + analysis + decisions'] },
          { label: 'Focus', values: ['Store, process, move data', 'Samajhna, predict karna, decide karna'] },
          { label: 'Main skills', values: ['Distributed systems, cloud, DevOps', 'Statistics, ML, domain, communication'] },
          { label: 'Key tools', values: ['Hadoop, Spark, Kafka, Hive, NoSQL', 'Python/R, scikit-learn, SQL, BI tools'] },
          { label: 'Main question', values: ['Data itna bada kaise handle karein?', 'Data se kya seekhein aur kya karein?'] },
          { label: 'Typical output', values: ['Data pipeline, cluster, data lake', 'Model, insight, recommendation'] },
          { label: 'Dependency', values: ['Data science ke liye data ready karta hai', 'Big data ke tools use karti hai (zaroorat par)'] },
        ],
      },
      {
        type: 'example',
        kicker: 'Example',
        title: 'Ek E-commerce ka Case',
        body:
          'Flipkart ke paas roz 10 TB clickstream data aata hai (kaun kya click kiya). Big Data team Kafka + Spark se ye data collect, clean aur data lake mein store karti hai. Data Science team usi data par churn model banati hai: "kaunse 5% customers next month churn karenge". Business team unhe offer bhejti hai. Big data ne data sambhala, data science ne decision diya — dono ke bina result zero.',
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Important Points',
        points: [
          '5 V: Volume, Velocity, Variety, Veracity, Value (kuch books 3 V + 2 extra likhti hain).',
          'Big data tools: HDFS (storage), MapReduce (batch), Spark (in-memory), Kafka (streaming), Hive (SQL on Hadoop), NoSQL.',
          'Data science tools: Python/R, Pandas, scikit-learn, TensorFlow, SQL, Tableau/Power BI.',
          'Big data bina data science ke = mehnga data store; data science bina big data ke = chhote data tak seemit.',
          'Data lake = raw data (teeno variety), data warehouse = cleaned structured data.',
          'Interview line: "Big data is a data problem; data science is a decision problem."',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Big Data = volume + velocity + variety + veracity + value.',
          'Big Data infrastructure hai; Data Science methods hain.',
          'Tools: Hadoop/Spark/Kafka vs Python/ML/SQL.',
          'Dono complementary hain — ek data ready karta hai, doosra insight nikaalta hai.',
          'Value ke bina big data investment waste hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Define Big Data. Explain the 5 V characteristics with examples.',
        answer:
          '**Definition:**\nBig data refers to datasets whose volume, velocity and variety exceed the capacity of traditional database tools, so they require distributed storage and parallel processing.\n\n**5 V characteristics:**\n1. **Volume** — size in TB to PB. Example: 10 crore users ke 5 saal ke UPI transactions.\n2. **Velocity** — speed of arrival. Example: stock prices, fraud alerts (milliseconds).\n3. **Variety** — formats. Example: tables + JSON logs + CCTV video.\n4. **Veracity** — trustworthiness. Example: missing sensor values, duplicate records, fake reviews.\n5. **Value** — usefulness. Example: 10 TB data se churn model banana jo revenue bachaye.\n\n**Handling tools:** HDFS (storage), MapReduce/Spark (processing), Kafka (streaming), Hive (query), NoSQL (flexible schema).\n\n**Diagram:** Refer to the Big Data vs Data Science diagram.',
      },
      {
        question: 'Differentiate between Big Data and Data Science. Explain how they complement each other.',
        answer:
          '**Differences:**\n\n| Aspect | Big Data | Data Science |\n|---|---|---|\n| Nature | Infrastructure + technology | Methods + analysis |\n| Focus | Store, process, move data | Understand, predict, decide |\n| Skills | Distributed systems, cloud | Statistics, ML, domain |\n| Tools | Hadoop, Spark, Kafka | Python/R, scikit-learn, SQL |\n| Output | Data pipeline, lake | Model, insight |\n\n**How they complement:**\n1. Big data ingests aur cleans raw data → data science ke liye ready karta hai\n2. Data science big data tools par models train karti hai (Spark ML, distributed training)\n3. Model ka output wapas big data pipeline se serve hota hai (real-time scoring)\n\n**Example:** Flipkart ka 10 TB clickstream (big data) + churn model (data science) + offer campaign (business value).\n\n**Conclusion:** Big data fuel hai, data science engine — dono milkar value dete hain.\n\n**Diagram:** Refer to the Big Data vs Data Science diagram.',
      },
      {
        question: 'Explain the role of Hadoop, Spark and Kafka in a big data pipeline.',
        answer:
          '**Hadoop (HDFS + MapReduce):**\n- HDFS: data ko blocks mein cluster par store karta hai (replication ke saath)\n- MapReduce: batch processing model\n- Best for: very large historical data, cheap commodity hardware\n\n**Spark:**\n- In-memory distributed processing, MapReduce se 10–100× tez\n- Spark SQL, MLlib, GraphX, Structured Streaming\n- Best for: iterative ML, ETL, interactive analytics\n\n**Kafka:**\n- Distributed event streaming platform (publish-subscribe)\n- Real-time data ingestion with durability\n- Best for: clickstream, logs, transaction feeds, microservices\n\n**Pipeline example:**\nUser events → **Kafka** (ingest) → **Spark** (clean + transform) → **HDFS/data lake** (store) → Spark ML (model) → dashboard/API (serve)\n\n**Diagram:** Refer to the Big Data vs Data Science diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.6 — Data Science Life Cycle
  // ==========================================================
  {
    id: 'ds-lifecycle',
    number: '1.6',
    title: 'Data Science Life Cycle',
    subtitle: 'Problem se monitoring tak — 8 stages aur feedback loop',
    icon: 'cycle',
    accent: '#00d4ff',
    englishDefinition:
      'The data science life cycle is the end-to-end sequence of stages followed to convert a business problem into a working data product. Typical stages are: problem definition (business understanding), data collection, data cleaning and preparation, exploratory data analysis (EDA), modelling, evaluation, deployment and monitoring. The cycle is iterative, not linear — findings at any stage can send the team back to an earlier stage, and monitoring feeds new problems back into the loop.',
    intro:
      'Data science sirf model banane ka naam nahi hai. Aap ek business sawaal se shuru karte hain, data laate hain, saaf karte hain, explore karte hain, model banate hain, test karte hain, deploy karte hain aur phir usko monitor karte rehte hain. Real projects mein 70–80% time data collection aur cleaning mein jaata hai — modelling sirf ek chhota hissa hai. Exam mein "explain the life cycle with a diagram" almost pakka aata hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Life cycle kya hota hai?',
        body:
          'Life cycle stages ka wo sequence hai jo ek data science project start se end tak follow karta hai — business problem samajhne se lekar model ko production mein monitor karne tak. Har stage ka output agle stage ka input banta hai.',
        body2:
          'Ye process linear nahi, iterative hai: EDA mein pata chale ki data galat hai to wapas data collection par; evaluation mein model fail ho to wapas modelling par; monitoring mein drift dikhe to wapas problem definition par.',
        chips: ['Problem', 'Data', 'Cleaning', 'EDA', 'Modelling', 'Deployment'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Mein Zaroor Draw Karein)',
        title: 'Data Science Life Cycle — 8 Stages',
        diagram: 'ds-lifecycle',
        caption:
          'Aath stages ek circle mein: Problem → Data → Cleaning → EDA → Modelling → Evaluation → Deployment → Monitoring, aur monitoring se wapas problem par arrow. Exam mein circle draw karke har stage ke neeche 1 line likhna 6 marks ka answer hai.',
      },
      {
        type: 'cards',
        kicker: 'Stages',
        title: 'Har Stage ka Kaam',
        cards: [
          {
            icon: 'target',
            title: '1. Problem Definition',
            body:
              'Business problem ko data problem mein convert karna. "Sales badhani hai" vague hai; "next month kaunse 500 customers churn karenge" measurable hai. Success metric, scope aur constraints yahin decide hote hain.',
          },
          {
            icon: 'database',
            title: '2. Data Collection',
            body:
              'Required data identify karke laana — databases, APIs, logs, third-party sources. Data governance, privacy aur consent yahin check hote hain. Output: raw dataset.',
          },
          {
            icon: 'tools',
            title: '3. Data Cleaning (Preparation)',
            body:
              'Missing values, duplicates, outliers, galat types aur inconsistent units fix karna. Feature engineering bhi yahin hoti hai. Yahi stage sabse zyada time leta hai (70–80%).',
          },
          {
            icon: 'search',
            title: '4. Exploratory Data Analysis (EDA)',
            body:
              'Graphs aur summary statistics se data ko samajhna — distribution, correlation, seasonality, anomalies. EDA se hypothesis banti hai aur modelling strategy decide hoti hai.',
          },
          {
            icon: 'cube',
            title: '5. Modelling',
            body:
              'Algorithms chunna (regression, decision tree, ensemble, neural network), train/test split, cross-validation aur hyperparameter tuning. Baseline se hamesha compare karein.',
          },
          {
            icon: 'check',
            title: '6. Evaluation',
            body:
              'Model ki performance aur business usefulness dono check karna. Accuracy, precision, recall, F1, RMSE — metric problem ke hisaab se chunein. Business constraint (cost, latency) bhi validate karein.',
          },
          {
            icon: 'expand',
            title: '7. Deployment',
            body:
              'Model ko production mein le jaana — batch scoring, REST API ya embedded. Versioning, testing, rollback plan aur security zaroori. Model ka output ab user tak pahunchta hai.',
          },
          {
            icon: 'refresh',
            title: '8. Monitoring',
            body:
              'Production mein performance track karna — data drift, model drift, latency aur business KPI. Drift milne par retraining ya naya problem definition. Isi se cycle dobara shuru hoti hai.',
          },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Important Points',
        points: [
          'Life cycle iterative hai, waterfall jaisa linear nahi.',
          'Sabse zyada time cleaning + preparation mein (70–80%), modelling mein kam.',
          'EDA ke bina model banana = andhere mein teer.',
          'Train/test split zaroori — test data model ne pehle kabhi na dekha ho.',
          'Deployment ke baad hi model ka asli test hota hai.',
          'Data drift = production data ka distribution badalna; model ka performance girta hai.',
          'Monitoring se feedback milta hai, jo naya problem define karta hai — isliye "life cycle".',
        ],
      },
      {
        type: 'example',
        kicker: 'Example',
        title: 'Churn Project — Stage by Stage',
        body:
          'Problem: "next quarter churn 20% se 15% par laana". Data: billing, usage, support tickets. Cleaning: missing usage records fill karna, duplicate accounts hatana. EDA: churners ka support-ticket count 3× zyada nikla. Modelling: random forest + logistic regression baseline. Evaluation: recall 0.78 (churners ka 78% pakda), business cost analysis ke saath threshold set. Deployment: nightly batch scoring, CRM ko list. Monitoring: har mahine drift check, 3 mahine mein retraining. Isi cycle se churn 17.4% aaya.',
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          '8 stages: problem → data → cleaning → EDA → modelling → evaluation → deployment → monitoring.',
          'Process iterative hai — har stage se wapas ja sakte hain.',
          'Cleaning sabse time-consuming stage hai.',
          'Evaluation mein statistical + business dono metrics dekhein.',
          'Monitoring ke baad cycle repeat hoti hai (drift par retraining).',
          'CRISP-DM isi life cycle ka formal process model hai (next topic).',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the data science life cycle with a suitable diagram.',
        answer:
          '**Definition:**\nData science life cycle wo end-to-end stages hain jinse business problem ko working data product mein convert kiya jaata hai.\n\n**8 stages:**\n1. **Problem definition** — business problem ko measurable data problem mein badalna\n2. **Data collection** — databases, APIs, logs se data laana (privacy check)\n3. **Data cleaning** — missing values, duplicates, outliers, feature engineering\n4. **EDA** — graphs + statistics se pattern aur anomaly samajhna\n5. **Modelling** — algorithm selection, train/test split, tuning\n6. **Evaluation** — metrics + business constraints validate karna\n7. **Deployment** — API/batch mein live karna\n8. **Monitoring** — drift, latency, KPI track karna → retraining\n\n**Iterative nature:** EDA se data problem mile to stage 2 par, evaluation fail ho to stage 5 par wapas.\n\n**Diagram:** Draw a circle with 8 stages aur monitoring se problem definition tak feedback arrow.',
      },
      {
        question: 'Which stage of the data science life cycle consumes the most effort and why? What happens if it is skipped?',
        answer:
          '**Stage:** Data cleaning and preparation (stage 3) — typically 70–80% of project effort.\n\n**Why it takes so long:**\n1. Real data messy hota hai — missing values, duplicates, inconsistent units\n2. Multiple sources ko merge karna padta hai (joins, key mismatch)\n3. Feature engineering — raw columns se useful features banana\n4. Data quality validation aur domain expert se confirm karna\n5. Unstructured data mein parsing/OCR/transcription\n\n**If skipped (garbage in, garbage out):**\n- Model galat pattern seekh leta hai (leakage, outliers)\n- Accuracy training par acchi, production mein fail\n- Business decision galat — cost zyada\n- Debugging baad mein 10× mehnga padta hai\n\n**Conclusion:** Cleaning boring lagti hai par project ki success 80% isi par depend karti hai.\n\n**Diagram:** Refer to the life cycle diagram.',
      },
      {
        question: 'What is data drift and why is the monitoring stage important?',
        answer:
          '**Data drift:** Production data ka distribution training data se alag ho jaana. Example: pandemic ke baad travel bookings ka pattern badal gaya, purana demand model fail.\n\n**Types:**\n1. **Covariate/data drift** — input features ka distribution badalna\n2. **Concept drift** — input aur output ka relationship badalna\n3. **Label drift** — target ki distribution badalna\n\n**Monitoring stage kya karti hai:**\n- Input distribution aur prediction distribution track karti hai\n- Model performance (precision/recall) production data par measure karti hai\n- Latency, error rate aur cost monitor karti hai\n- Alerts deti hai jab drift threshold cross ho\n- Retraining ya naya model trigger karti hai\n\n**Importance:** Model ek baar deploy karke bhool jaana = silently galat predictions. Monitoring model ko "living" rakhti hai aur business ko surprise se bachati hai.\n\n**Diagram:** Refer to the life cycle diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.7 — Process Models: CRISP-DM, TDSP, SEMMA
  // ==========================================================
  {
    id: 'ds-process-models',
    number: '1.7',
    title: 'Process Models: CRISP-DM, TDSP, SEMMA',
    subtitle: 'Teen standard frameworks — phases, origin aur kab kaunsa use karein',
    icon: 'flow',
    accent: '#00d4ff',
    englishDefinition:
      'A data science process model is a structured, reusable framework that defines the phases, deliverables and review points of a data science project. CRISP-DM (Cross Industry Standard Process for Data Mining, 1996) has six phases: business understanding, data understanding, data preparation, modelling, evaluation and deployment; it is cyclic and industry-neutral. SEMMA (Sample, Explore, Modify, Model, Assess) is a five-step methodology introduced by SAS, focused on the modelling pipeline. TDSP (Team Data Science Process) is Microsoft s five-stage framework with defined team roles, Azure tooling and DevOps-style iteration.',
    intro:
      'Har team apne tareeke se project karti hai — isliye standard process models bane, taaki project na bhatke. Teen naam exam mein aate hain: CRISP-DM (sabse popular, 6 phases), SEMMA (SAS ka 5-step pipeline), aur TDSP (Microsoft ka 5-stage, team roles ke saath). CRISP-DM sabse zyada poochha jaata hai — usko diagram ke saath yaad karein.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Process model kyun chahiye?',
        body:
          'Data science project mein bahut log kaam karte hain — business analyst, data engineer, data scientist, ML engineer. Process model batata hai kaunsi phase kab hogi, kya deliverable hoga aur kab review hoga. Isse project repeatable, measurable aur auditable ban jaata hai.',
        body2:
          'Teen popular models: CRISP-DM (industry standard, 6 phases), SEMMA (SAS, 5 steps), TDSP (Microsoft, 5 stages + team roles + DevOps).',
        chips: ['CRISP-DM', 'TDSP', 'SEMMA', 'Phases', 'Deliverables'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Mein Zaroor Draw Karein)',
        title: 'CRISP-DM — 6 Phases',
        diagram: 'crisp-dm',
        caption:
          'Business understanding → data understanding → data preparation → modelling → evaluation → deployment, aur cycle wapas ghoomti hai. Business understanding sabse important hai kyunki yahin success criteria decide hota hai. Exam mein ye wheel draw karein aur har phase ke 1-1 line likhein.',
      },
      {
        type: 'cards',
        kicker: 'CRISP-DM',
        title: 'CRISP-DM ke 6 Phases',
        cards: [
          {
            icon: 'target',
            title: '1. Business Understanding',
            body:
              'Business objectives aur success criteria define karna. "Customer churn 20% se 15% karna" jaisa measurable goal. Constraint (budget, timeline, compliance) bhi yahin note hote hain. Deliverable: project charter.',
          },
          {
            icon: 'search',
            title: '2. Data Understanding',
            body:
              'Available data sources identify karna, initial data collect karna aur quality problems note karna. EDA ka pehla hissa. Deliverable: data inventory aur quality report.',
          },
          {
            icon: 'tools',
            title: '3. Data Preparation',
            body:
              'Clean, join, transform aur feature engineer karna. Modelling ke liye final dataset bananta hai. CRISP-DM mein ye phase sabse zyada effort leta hai.',
          },
          {
            icon: 'cube',
            title: '4. Modelling',
            body:
              'Technique select karna, test design banana (train/validation/test), model train karna aur parameters tune karna. Multiple models compare kiye jaate hain.',
          },
          {
            icon: 'check',
            title: '5. Evaluation',
            body:
              'Model ne business objective achieve kiya? Technical metrics + business criteria dono check hote hain. Yahan decide hota hai ki deploy karein ya modelling par wapas jaayein.',
          },
          {
            icon: 'expand',
            title: '6. Deployment',
            body:
              'Model ko production mein le jaana, monitoring plan banana, report aur documentation dena. Review aur lessons-learned ke saath project close hota hai.',
          },
        ],
      },
      {
        type: 'cards',
        kicker: 'TDSP & SEMMA',
        title: 'TDSP aur SEMMA — Quick Look',
        cards: [
          {
            icon: 'users',
            title: 'TDSP (Microsoft)',
            body:
              'Team Data Science Process — 5 stages: business understanding, data acquisition & understanding, modelling, deployment, customer acceptance. Isme team roles defined hain (data engineer, data scientist, ML engineer, project lead) aur DevOps-style iteration (CI/CD, versioning) follow hoti hai.',
          },
          {
            icon: 'timeline',
            title: 'SEMMA (SAS)',
            body:
              'Sample → Explore → Modify → Model → Assess. Modelling pipeline par focus — data ko sample karo, explore karo, variables modify karo, model banao, assess karo. Business understanding aur deployment SEMMA mein explicit phase nahi hain, isliye ye analysis-centric hai.',
          },
          {
            icon: 'dss',
            title: 'Kaunsa Kab?',
            body:
              'CRISP-DM — general industry projects (default choice). TDSP — team-based enterprise delivery with DevOps. SEMMA — SAS toolchain aur modelling-heavy analysis. Practice mein log CRISP-DM + agile ka mix use karte hain.',
          },
        ],
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table (Most Important)',
        title: 'CRISP-DM vs TDSP vs SEMMA',
        columns: ['CRISP-DM', 'TDSP', 'SEMMA'],
        columnColors: ['#c4ff00', '#00d4ff', '#ff8800'],
        rows: [
          { label: 'Origin', values: ['1996, industry consortium', 'Microsoft', 'SAS Institute'] },
          { label: 'Phases', values: ['6', '5', '5'] },
          { label: 'Phase names', values: ['Business understanding, data understanding, data preparation, modelling, evaluation, deployment', 'Business understanding, data acquisition & understanding, modelling, deployment, customer acceptance', 'Sample, explore, modify, model, assess'] },
          { label: 'Focus', values: ['Business problem se deployment tak', 'Team delivery + DevOps', 'Modelling pipeline'] },
          { label: 'Business phase', values: ['Yes (phase 1)', 'Yes (phase 1)', 'No (implicit)'] },
          { label: 'Deployment', values: ['Yes (phase 6)', 'Yes (phase 4)', 'No'] },
          { label: 'Team roles', values: ['Defined loosely', 'Explicitly defined', 'Not defined'] },
          { label: 'Best for', values: ['General industry projects', 'Enterprise/cloud teams', 'SAS analytics projects'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Important Points',
        points: [
          'CRISP-DM ka full form: Cross Industry Standard Process for Data Mining.',
          'CRISP-DM cyclic hai — evaluation ke baad phase 1 ya 4 par wapas ja sakte hain.',
          'SEMMA ka full form: Sample, Explore, Modify, Model, Assess.',
          'TDSP ek team process hai — roles aur DevOps iski khaas baat.',
          'CRISP-DM mein business understanding pehla phase hai; SEMMA seedha sampling se shuru hota hai.',
          'Data preparation sab models mein sabse mehnga phase hota hai.',
          'Exam line: "CRISP-DM industry-neutral hai, TDSP team-oriented, SEMMA tool-centric."',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'CRISP-DM = 6 phases, cyclic, industry standard.',
          'SEMMA = Sample, Explore, Modify, Model, Assess (SAS).',
          'TDSP = 5 stages + roles + DevOps (Microsoft).',
          'Business understanding CRISP-DM aur TDSP dono mein pehla phase hai.',
          'SEMMA mein deployment phase nahi hota.',
          'Life cycle (1.6) inhi process models ka practical version hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain CRISP-DM with its phases and a diagram.',
        answer:
          '**CRISP-DM:** Cross Industry Standard Process for Data Mining — 1996 mein industry consortium ne banaya, sabse widely used data science process model.\n\n**6 phases:**\n1. **Business Understanding** — objectives, success criteria, constraints\n2. **Data Understanding** — sources identify, collect, quality check, initial EDA\n3. **Data Preparation** — clean, join, transform, feature engineering\n4. **Modelling** — technique selection, train/validation/test design, tuning\n5. **Evaluation** — technical metrics + business criteria; deploy karne layak hai ya nahi\n6. **Deployment** — production, monitoring plan, documentation\n\n**Cyclic nature:** Evaluation ke baad phase 1 ya phase 4 par wapas ja sakte hain; deployment ke baad monitoring se naya cycle.\n\n**Why popular:** Industry-neutral, tool-independent aur complete (business se deployment tak).\n\n**Diagram:** Draw a circle with the 6 phases and arrows between them, plus a feedback arrow from evaluation.',
      },
      {
        question: 'Compare CRISP-DM, SEMMA and TDSP.',
        answer:
          '**CRISP-DM (1996):**\n- 6 phases: business understanding, data understanding, data preparation, modelling, evaluation, deployment\n- Industry-neutral, cyclic, complete lifecycle\n- Best for: general data science projects\n\n**SEMMA (SAS):**\n- 5 steps: Sample, Explore, Modify, Model, Assess\n- Modelling pipeline par focus; business understanding aur deployment explicit nahi\n- Best for: SAS toolchain, analysis-heavy work\n\n**TDSP (Microsoft):**\n- 5 stages: business understanding, data acquisition & understanding, modelling, deployment, customer acceptance\n- Team roles (data engineer, data scientist, ML engineer, lead) + DevOps (CI/CD, versioning)\n- Best for: enterprise teams on cloud\n\n**Comparison:**\n\n| Aspect | CRISP-DM | SEMMA | TDSP |\n|---|---|---|---|\n| Phases | 6 | 5 | 5 |\n| Business phase | Yes | No | Yes |\n| Deployment | Yes | No | Yes |\n| Focus | Full lifecycle | Modelling | Team delivery |\n\n**Diagram:** Refer to the CRISP-DM wheel diagram.',
      },
      {
        question: 'What is a process model? Why is it important in data science projects?',
        answer:
          '**Definition:**\nProcess model ek structured framework hai jo project ke phases, deliverables, review points aur roles define karta hai.\n\n**Importance:**\n1. **Repeatability** — har project same tarah chalta hai, results compare ho sakte hain\n2. **Clear deliverables** — har phase ka output defined (charter, data report, model, deployment plan)\n3. **Risk reduction** — business understanding pehle hoti hai, isliye galat problem par kaam nahi hota\n4. **Team coordination** — data engineer, data scientist, business analyst ka kaam clear\n5. **Review gates** — evaluation phase par rukkar justify karte hain\n6. **Documentation aur audit** — regulated industries ke liye zaroori\n7. **Iteration control** — feedback loop define hota hai, ad-hoc rework kam\n\n**Example:** CRISP-DM ke phases follow karke bank ka credit model audit ke liye traceable ban jaata hai.\n\n**Diagram:** Refer to the CRISP-DM wheel diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.8 — Applications of Data Science
  // ==========================================================
  {
    id: 'ds-applications',
    number: '1.8',
    title: 'Applications of Data Science',
    subtitle: 'Domain-wise use cases — healthcare se sports tak, 10 sectors',
    icon: 'grid',
    accent: '#00d4ff',
    englishDefinition:
      'Data science is applied wherever decisions can be improved with data: healthcare (disease prediction, medical imaging, drug discovery), finance (credit scoring, fraud detection, algorithmic trading), retail and e-commerce (recommendation, demand forecasting, dynamic pricing), manufacturing (predictive maintenance, quality inspection), transport (route optimisation, ride matching), agriculture (yield prediction, crop health from satellite data), education (dropout risk, adaptive learning), government (policy analytics, disaster management), media (content ranking, churn) and sports (player performance, injury risk).',
    intro:
      'Data science ka syllabus theory se zyada examples par test hota hai. Har domain ka pattern same hai: problem → data → model → action → measurable value. Bas domain ka data aur metric badalta hai. Is topic mein 10 sectors ke concrete use cases hain, jo aap kisi bhi 6-mark answer mein examples ke roop mein likh sakte hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Application ka matlab kya hai?',
        body:
          'Data science ka application matlab kisi real problem par data-driven method lagana — jahan pehle decision experience ya guess se hota tha. Har application mein 4 cheezein hoti hain: data source, model, decision aur measurable value (cost saving, revenue, safety, time).',
        body2:
          'Exam tip: kisi bhi domain ka answer dete waqt ye chain likhein — "data → model → decision → value". Isse answer descriptive ke bajaye analytical lagta hai.',
        chips: ['Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Agriculture', 'Public sector'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram',
        title: '10 Domains — Ek Nazar Mein',
        diagram: 'ds-applications',
        caption:
          'Har tile ek domain aur uske do main use cases dikhata hai. Exam mein 5-6 tiles draw karke har ek ke saath ek line likhna kaafi hota hai — poora 10 likhne ki zaroorat nahi.',
      },
      {
        type: 'cards',
        kicker: 'Applications',
        title: 'Sector-wise Use Cases (1–5)',
        cards: [
          {
            icon: 'shield',
            title: 'Healthcare',
            body:
              'Bimari ka early prediction (diabetes, sepsis), X-ray/MRI se cancer detection (CNN), drug discovery, patient readmission risk, hospital bed aur staff planning. Data: EHR (structured) + reports, images aur notes (unstructured). Value: early diagnosis aur cost saving.',
          },
          {
            icon: 'money',
            title: 'Finance & Banking',
            body:
              'Credit scoring (loan default prediction), real-time fraud detection (UPI/card), algorithmic trading, customer churn, anti-money-laundering alerts. Data: transactions, KYC, bureau data. Value: fraud loss kam, better risk pricing.',
          },
          {
            icon: 'dashboard',
            title: 'Retail & E-commerce',
            body:
              'Recommendation engine, demand forecasting, dynamic pricing, inventory optimisation, customer segmentation, churn prediction. Data: clickstream, orders, reviews. Value: higher conversion aur kam stock-out.',
          },
          {
            icon: 'wrench',
            title: 'Manufacturing',
            body:
              'Predictive maintenance (vibration/temperature sensors se failure predict), quality inspection (camera + CV), energy optimisation, supply-chain planning. Value: unplanned downtime kam, scrap kam.',
          },
          {
            icon: 'globe',
            title: 'Transport & Smart Cities',
            body:
              'Traffic prediction, route optimisation, ride matching (Ola/Uber), ETA estimation, public-transport crowd prediction, air-quality forecasting. Data: GPS traces, weather, maps. Value: fuel saving aur better service.',
          },
        ],
      },
      {
        type: 'cards',
        kicker: 'Applications',
        title: 'Sector-wise Use Cases (6–10)',
        cards: [
          {
            icon: 'layers',
            title: 'Agriculture',
            body:
              'Crop yield prediction, soil health analysis, satellite/drone images se crop damage detection, irrigation scheduling, pest-risk alerts. Data: weather, soil sensors, remote sensing. Value: yield badhna aur water saving (India ke liye high impact).',
          },
          {
            icon: 'book',
            title: 'Education',
            body:
              'Dropout risk prediction, adaptive learning paths, performance analytics, question difficulty calibration, proctoring anomaly detection. Data: LMS activity, attendance, assessment history. Value: retention aur personalisation.',
          },
          {
            icon: 'flag',
            title: 'Government & Public Policy',
            body:
              'Policy impact analysis, disaster risk mapping, welfare-scheme targeting, tax fraud detection, census and survey analytics. Data: administrative records, satellite, open data. Value: better targeting aur transparency.',
          },
          {
            icon: 'eye',
            title: 'Media & Entertainment',
            body:
              'Content recommendation (Netflix/YouTube), viewership forecasting, churn prediction, ad targeting aur bidding, content tagging (auto). Data: watch history, clicks, thumbnails. Value: engagement aur retention.',
          },
          {
            icon: 'trophy',
            title: 'Sports',
            body:
              'Player performance analytics, team selection, injury-risk prediction, opponent strategy analysis, fan engagement. Data: tracking sensors, match events. Value: performance aur injury prevention (jaise IPL analytics teams).',
          },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Har Application ka Common Pattern',
        points: [
          'Data source identify karo (structured + unstructured).',
          'Problem type tay karo — classification, regression, clustering, forecasting, anomaly detection.',
          'Metric business se link karo (cost saving, conversion, downtime hours, early detection rate).',
          'Deployment ka mode socho — batch, real-time API, dashboard.',
          'Privacy aur regulation check karo (health data, financial data).',
          'Value measure karo — warna project demo ban kar reh jaata hai.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          '10 domains: healthcare, finance, retail, manufacturing, transport, agriculture, education, government, media, sports.',
          'Healthcare = diagnosis aur imaging; finance = fraud aur credit.',
          'Retail = recommendation aur forecast; manufacturing = predictive maintenance.',
          'Pattern hamesha same: data → model → decision → value.',
          'Domain knowledge hi batati hai kaunsa metric important hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain any five applications of data science in different domains with examples.',
        answer:
          '**1. Healthcare — disease prediction and imaging**\nX-ray/MRI images par CNN se pneumonia/cancer detection; sepsis ka early warning. Value: early treatment, cost saving.\n\n**2. Finance — fraud detection and credit scoring**\nReal-time UPI transaction scoring; loan default prediction. Value: fraud loss kam, better risk pricing.\n\n**3. Retail — recommendation and demand forecasting**\nCollaborative filtering se product suggestion; festive season demand forecast. Value: conversion up, stock-out down.\n\n**4. Manufacturing — predictive maintenance**\nSensor data (vibration, temperature) se machine failure predict. Value: unplanned downtime kam.\n\n**5. Agriculture — yield prediction**\nWeather + soil + satellite data se crop yield forecast aur irrigation planning. Value: yield up, water saving.\n\n**Common pattern:** Data → Model → Decision → Value.\n\n**Diagram:** Refer to the 10 domains applications diagram.',
      },
      {
        question: 'How is data science used in healthcare and finance? Give three use cases of each.',
        answer:
          '**Healthcare:**\n1. **Medical imaging** — CNN se X-ray/MRI classification (pneumonia, tumour)\n2. **Readmission risk** — kis patient ke dobara bharat aane ke chances zyada hain\n3. **Drug discovery** — molecule screening aur clinical-trial data analysis\n- Data: EHR, images, reports, genomics (mostly unstructured)\n- Value: early diagnosis, cost reduction, better outcomes\n\n**Finance:**\n1. **Fraud detection** — real-time transaction anomaly scoring\n2. **Credit scoring** — default probability, risk-based pricing\n3. **Algorithmic trading / churn** — market signals aur customer retention\n- Data: transactions, KYC, bureau, market feeds\n- Value: loss prevention, regulatory compliance, revenue\n\n**Common challenges:** data privacy (HIPAA/DPDP), explainability, class imbalance, regulatory audit.\n\n**Diagram:** Refer to the applications diagram.',
      },
      {
        question: 'Choose any one domain and explain a complete data science use case: problem, data, model, deployment and value.',
        answer:
          '**Domain: Banking — fraud detection**\n\n**1. Problem:** UPI/card frauds real-time pakadna; false positives kam rakhna (customer ko block na ho).\n\n**2. Data:** transaction amount, merchant category, time, device, location, past behaviour, chargeback history.\n\n**3. Preparation:** imbalance handling (SMOTE), feature engineering (velocity, deviation from usual spend), train/test split by time.\n\n**4. Model:** gradient boosting / random forest + rules; anomaly detection for new fraud patterns. Metrics: precision, recall, PR-AUC (accuracy nahi).\n\n**5. Deployment:** real-time scoring API (<200 ms), threshold tuning business cost ke hisaab se, human review queue for borderline cases.\n\n**6. Monitoring:** drift, false-positive rate, fraud catch rate; monthly retraining.\n\n**Value:** fraud loss 30% kam, customer friction kam, regulator ko auditable model.\n\n**Diagram:** Refer to the applications diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.9 — Distinction: DS vs BI vs Statistics vs ML vs AI
  // ==========================================================
  {
    id: 'ds-vs-fields',
    number: '1.9',
    title: 'Distinction: Data Science vs BI vs Statistics vs ML vs AI',
    subtitle: 'Kaun kya karta hai — overlap aur difference ek table mein',
    icon: 'network',
    accent: '#00d4ff',
    englishDefinition:
      'Statistics is the science of collecting, summarising and inferring from data. Business intelligence (BI) uses that data to report and monitor past performance through dashboards and KPIs. Machine learning is a set of algorithms that learn patterns from data to make predictions without being explicitly programmed. Artificial intelligence is the broader goal of building systems that perform tasks requiring human intelligence; ML is a subset of AI. Data science is an applied, interdisciplinary field that combines statistics, ML, computer science and domain knowledge to solve business problems end to end. Informally: AI ⊃ ML; data science uses ML and statistics; BI consumes their outputs.',
    intro:
      'Ye sabse zyada confuse karne wala topic hai — kyunki sab data ke around ghoomte hain. Farq ek line mein: Statistics poochti hai "data bharosemand hai?", BI poochti hai "kya hua?", ML kehti hai "pattern seekho", AI kehti hai "system ko smart banao", aur Data Science poochti hai "kya hoga aur kya karein, business ke liye?". Exam mein "differentiate DS and ML" ya "DS vs BI" aata hai — table se likhein.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Overlap kahan hai, difference kahan?',
        body:
          'Data Science ek applied field hai — ye statistics se method leti hai, computer science se tools, machine learning se prediction power aur domain se context. Isliye ye "baaki sab ka superset" jaisi lagti hai, par nahi hai: statistics theory par, ML algorithms par, AI intelligent behaviour par aur BI reporting par focus karti hai.',
        body2:
          'Relationship: AI ⊃ ML ⊃ deep learning. Data Science ML aur statistics ka use karti hai. BI in sab ke output ko dashboard mein dikhati hai.',
        chips: ['Statistics', 'BI', 'ML', 'AI', 'Data Science'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Paanch Fields — Side by Side',
        diagram: 'ds-vs-fields',
        caption:
          'Har field ka sawaal, output aur tool alag hai. Data Science column highlighted hai kyunki wo baaki chaar ko combine karta hai. Exam mein ye comparison table bana kar 1-1 line likhna best answer hota hai.',
      },
      {
        type: 'cards',
        kicker: 'Definitions',
        title: 'Har Field Ek Line Mein',
        cards: [
          {
            icon: 'chart',
            title: 'Statistics',
            body:
              'Data collect, summarise aur infer karne ka science. Sawaal: "ye result real hai ya chance?". Tools: sampling, hypothesis testing, confidence interval, regression. Output: inference aur validation. Purani aur foundational field.',
          },
          {
            icon: 'dashboard',
            title: 'Business Intelligence (BI)',
            body:
              'Past data se reports aur dashboards. Sawaal: "kya hua aur kitna?". Tools: SQL, OLAP, Power BI, Tableau. Output: KPI dashboard, report. Decision support karti hai par predict nahi karti.',
          },
          {
            icon: 'cube',
            title: 'Machine Learning (ML)',
            body:
              'Algorithms jo data se pattern seekh kar prediction karte hain, bina explicit rules ke. Sawaal: "naye input par output kya hoga?". Types: supervised, unsupervised, reinforcement. Output: trained model (file/API).',
          },
          {
            icon: 'ai',
            title: 'Artificial Intelligence (AI)',
            body:
              'Machines ko human-jaisi intelligence dene ka broader goal — perception, language, reasoning, planning, decision making. ML iska subset hai; deep learning, NLP, computer vision, robotics sab AI ke andar aate hain. Output: autonomous/intelligent system.',
          },
          {
            icon: 'scatter',
            title: 'Data Science',
            body:
              'Applied, end-to-end field — problem define karna, data laana, model banana, deploy karna aur value measure karna. Statistics + ML + programming + domain knowledge. Output: model + insight + business decision.',
          },
          {
            icon: 'users',
            title: 'Data Engineer (support role)',
            body:
              'Data pipelines, ETL, warehouse/lake aur infrastructure banata hai. Data scientist ka kaam data engineer ke banaye pipeline par depend karta hai. Exam mein ye "supporting role" ke roop mein likh sakte hain.',
          },
        ],
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table (Most Important)',
        title: 'DS vs BI vs Statistics vs ML vs AI',
        columns: ['Statistics', 'BI', 'ML', 'AI', 'Data Science'],
        columnColors: ['#8f9dc4', '#2f6fff', '#00d4ff', '#ff8800', '#c4ff00'],
        rows: [
          { label: 'Main question', values: ['Result valid hai?', 'Kya hua?', 'Pattern kya hai?', 'System smart kaise bane?', 'Kya hoga + kya karein?'] },
          { label: 'Focus', values: ['Inference', 'Reporting', 'Prediction', 'Intelligence', 'End-to-end problem solving'] },
          { label: 'Output', values: ['p-value, CI', 'Dashboard, KPI', 'Trained model', 'Intelligent system', 'Insight + model + decision'] },
          { label: 'Data', values: ['Sample data', 'Mostly structured', 'Structured + text/image', 'Multi-modal', 'Kuch bhi'] },
          { label: 'Tools', values: ['R, SPSS, tests', 'SQL, Power BI', 'scikit-learn, XGBoost', 'TensorFlow, LLMs', 'Python/R + ML + SQL'] },
          { label: 'Nature', values: ['Theoretical', 'Descriptive', 'Algorithmic', 'Broad goal', 'Applied'] },
          { label: 'Example', values: ['Is the drug effective?', 'Monthly sales dashboard', 'Churn prediction', 'Self-driving car', 'Churn model + retention plan'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Relationships (Yaad Rakhein)',
        points: [
          'AI ⊃ ML ⊃ deep learning — ML AI ka subset hai, AI ML ka nahi.',
          'Data Science statistics aur ML dono use karti hai, par domain knowledge ke saath.',
          'BI descriptive hai (kya hua); Data Science predictive/prescriptive (kya hoga, kya karein).',
          'Statistics theory deti hai, ML algorithms, Data Science end-to-end delivery.',
          'ML engineer model deploy/scale karta hai; data engineer pipeline banata hai; data scientist problem solve karta hai.',
          'Ek hi project mein sab hote hain: data engineer pipeline, data scientist model, ML engineer deployment, BI team dashboard.',
        ],
      },
      {
        type: 'example',
        kicker: 'Example',
        title: 'Ek Hi Problem — Char Nazariye',
        body:
          'Email spam ko chaar tarah se dekhein: (1) Statistics — "spam filter ke precision ka confidence interval kya hai?" (2) BI — "is mahine kitne spam block hue, trend dashboard". (3) ML — "spam vs not-spam classifier train karo (Naive Bayes/SVM)". (4) AI — "email system khud spam samajh kar filter kare aur naye pattern seekhe". (5) Data Science — "spam problem ko end-to-end solve karo: data, model, deployment, monitoring aur user impact". Same problem, alag scope.',
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Statistics = inference; BI = reporting; ML = prediction; AI = intelligence; DS = applied end-to-end.',
          'AI ⊃ ML; Data Science ML + statistics + domain use karti hai.',
          'BI backward-looking, Data Science forward-looking.',
          'ML model deta hai; Data Science decision aur value tak le jaati hai.',
          'Interview/exam line: "Data science is the applied umbrella; the others are its components or consumers."',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Differentiate between Data Science, Machine Learning and Artificial Intelligence.',
        answer:
          '**Artificial Intelligence (AI):**\nMachines ko human-like intelligence dena — perception, language, reasoning, planning. ML iska subset hai. Example: self-driving car, chatbots.\n\n**Machine Learning (ML):**\nAlgorithms jo data se pattern seekhte hain aur prediction karte hain, bina explicit programming ke. Types: supervised, unsupervised, reinforcement. Example: churn classifier.\n\n**Data Science:**\nApplied, end-to-end field — problem define karna, data laana, model banana, deploy karna, value measure karna. Statistics + ML + programming + domain.\n\n**Comparison:**\n\n| Aspect | Data Science | ML | AI |\n|---|---|---|---|\n| Scope | End-to-end project | Model building | Intelligent systems |\n| Question | Kya hoga + kya karein? | Pattern kya hai? | System smart kaise bane? |\n| Output | Insight + model + decision | Trained model | Autonomous system |\n| Skills | Stats + ML + domain | Algorithms + math | Broader CS + ML |\n\n**Relationship:** AI ⊃ ML ⊂ Data Science (Data Science ML ka use karti hai).\n\n**Diagram:** Refer to the five-fields diagram.',
      },
      {
        question: 'Differentiate between Data Science and Business Intelligence.',
        answer:
          '**Business Intelligence:**\n- Question: kya hua?\n- Data: mostly structured (tables, reports)\n- Techniques: aggregation, OLAP, dashboards\n- Output: reports, KPIs, dashboards\n- Tools: SQL, Power BI, Tableau\n- Nature: descriptive, backward-looking\n\n**Data Science:**\n- Question: kya hoga aur kya karein?\n- Data: structured + unstructured\n- Techniques: statistics, ML, NLP, deep learning\n- Output: predictive model, recommendation, decision\n- Tools: Python/R + ML + SQL\n- Nature: predictive/prescriptive, forward-looking\n\n**Example:** BI batati hai ki pichhle quarter sales 12% giri. Data Science predict karti hai kaunse 500 customers churn karenge aur kya offer chahiye.\n\n**Relationship:** BI Data Science ka consumer hai — model ka output dashboard mein dikh sakta hai. Dono complementary hain.\n\n**Diagram:** Refer to the five-fields diagram.',
      },
      {
        question: 'Explain the role of statistics in data science. How is it different from machine learning?',
        answer:
          '**Statistics in data science:**\n1. Data summarise karna — mean, median, variance, distribution\n2. Sampling aur experimental design — representative data lena\n3. Hypothesis testing — result real hai ya chance\n4. Confidence intervals aur error bars\n5. Regression aur model assumptions\n6. A/B testing se business decisions validate karna\n\n**Statistics vs ML:**\n\n| Aspect | Statistics | ML |\n|---|---|---|\n| Goal | Inference — kyun aur valid hai? | Prediction — accurate output |\n| Approach | Model pehle, data baad mein | Data pehle, model data se seekhta hai |\n| Focus | Parameters, significance | Generalisation, error minimisation |\n| Data size | Chhote samples | Bade datasets |\n| Explainability | High | Variable (deep learning low) |\n| Example | Is the drug effective? | Which customer will churn? |\n\n**Conclusion:** ML prediction par, statistics explanation par focus karti hai — data science dono ko combine karti hai (predict + explain).\n\n**Diagram:** Refer to the five-fields diagram.',
      },
    ],
  },
];
