import { dataScienceExtraTopics } from './dataScienceUnit1b.js';
import { dataScienceFinalTopics } from './dataScienceUnit1c.js';

// ============================================================
// DATA SCIENCE — Unit I: Fundamentals of Data Science
// Syllabus covered:
//   · Importance of data science
//   · Types of data: structured, semi-structured, unstructured
//   · Scales of measurement: nominal, ordinal, interval, ratio
// Format: same as other subjects (English definition, Hinglish
// explanation, animated diagrams, 6-mark exam questions)
// ============================================================

export const dataScienceUnits = [
  {
    id: 'unit-1',
    number: '1',
    name: 'Fundamentals of Data Science',
    topics: [
      // ========================================================
      // 1.1 — Importance of Data Science
      // ========================================================
      {
        id: 'ds-importance',
        number: '1.1',
        title: 'Importance of Data Science',
        subtitle: 'Data science kya hai, kis-kis discipline se banti hai aur kyun zaroori hai',
        icon: 'scatter',
        accent: '#00d4ff',
        englishDefinition:
          'Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and actionable insights from noisy, structured and unstructured data, and to apply those insights to solve real-world problems. It combines statistics and mathematics (for inference and modelling), computer science (programming, databases, machine learning) and domain expertise (to frame the right question and interpret results). The term was popularised by W. S. Cleveland in his 2001 paper "Data Science: An Action Plan for Expanding the Technical Areas of the Field of Statistics", and the ACM Data Science taxonomy describes data science as the study of the generalisable extraction of knowledge from data.',
        intro:
          'Har second duniya mein data paida ho raha hai — WhatsApp messages, UPI payments, YouTube views, hospital reports, weather sensors, delivery apps. Sawaal ye hai: itna saara data kaam kaise aaye? Yahi kaam Data Science karti hai. Simple words mein — data ko collect karke, saaf karke, analyze karke usme se aisi insights nikalna jo business ya society ke liye useful ho. Pehle companies sirf report dekhti thi ki "pichhle mahine kya hua". Aaj wo predict karti hain ki "agle mahine kya hoga" — aur yahi Data Science ki asli taakat hai. Aaiye step by step samjhte hain.',
        sections: [
          {
            type: 'definition',
            kicker: 'Definition',
            title: 'Data Science kya hai? (Simple Words Mein)',
            body:
              'Data Science ek interdisciplinary field hai jo data se knowledge aur insights nikalne ke liye statistics, mathematics, programming aur domain knowledge ko combine karti hai. Yani data ko padhna, usme pattern dhundhna, aur us pattern se aage ka behaviour predict karna.',
            body2:
              'Ek line mein: Data Science = Data + Statistics + Programming + Domain Knowledge. Iska final goal sirf report banana nahi hai — prediction, automation aur better decision hai. Isliye data science ko "data se decision tak ka pul" bhi kehte hain.',
            chips: ['Data collection', 'Cleaning', 'Statistics', 'Machine Learning', 'Visualization', 'Insight'],
          },
          {
            type: 'cards',
            kicker: 'Important Terms',
            title: 'Data Science ke 4 Pillars (Interdisciplinary Nature)',
            cards: [
              {
                icon: 'chart',
                title: 'Statistics & Mathematics',
                body:
                  'Mean, median, variance, probability, hypothesis testing aur regression — ye batate hain ki data ka pattern real hai ya sirf luck. Bina statistics ke model ka result galat interpret ho jata hai. Example: do classes ke average marks same hain, par variance dekhne par pata chalta hai ki ek class mein sab average hain aur doosri mein kuch top aur kuch fail.',
              },
              {
                icon: 'code',
                title: 'Computer Science & Programming',
                body:
                  'Python, R, SQL, databases, cloud computing aur machine learning libraries. Data bada hota hai (lakhs-crore rows) — usko process karne ke liye efficient code aur computing power chahiye. Isi pillar ki wajah se data science scalable banti hai.',
              },
              {
                icon: 'book',
                title: 'Domain Knowledge',
                body:
                  'Bank ka data banking samajhne wala hi theek interpret kar sakta hai. Domain knowledge batati hai kaunsa question important hai, kaunsa result practically possible hai aur kaunsi galti data ki hai. Iske bina model technically sahi par business-wise useless ho sakta hai.',
              },
              {
                icon: 'dashboard',
                title: 'Communication & Visualization',
                body:
                  'Insight tabhi value banati hai jab decision maker ko samajh aaye. Dashboards, charts, aur clear story-telling isi pillar ka part hain. Ek acha data scientist numbers ko aisi kahani mein badal deta hai jise manager 2 minute mein samajh jaaye.',
              },
            ],
          },
          {
            type: 'diagram',
            kicker: 'Diagram (Exam Mein Zaroor Draw Karein)',
            title: 'Data Science = 3 Disciplines ka Intersection',
            diagram: 'ds-venn',
            caption:
              'Statistics se method milta hai (kaise measure karein), Computer Science se tools milte hain (kaise process karein), aur Domain Knowledge se context milta hai (kyun aur kis liye). In teeno ke intersection mein Data Science aati hai. Exam point: sirf statistics = statistical analysis, sirf programming = software development, teeno ka mix = Data Science.',
          },
          {
            type: 'points',
            kicker: 'Exam Points',
            title: 'Data Science kyun Important hai? (8 Points)',
            points: [
              'Better decisions — gut feeling ki jagah data-based evidence. Managers ke paas proof hota hai ki kaunsa step lena chahiye.',
              'Prediction aur forecasting — agle mahine ki demand, sales, stock requirement, customer churn pehle se estimate ho jaata hai.',
              'Personalization — Netflix, Amazon, Flipkart, Spotify aapke behaviour ke hisaab se content/product dikhate hain.',
              'Cost aur time saving — predictive maintenance se machine kharab hone se pehle service ho jaati hai; fraud real-time pakda jaata hai.',
              'Automation — repetitive decisions (loan approval, spam filtering, delivery assignment) ML models se automate ho jaate hain.',
              'Naye business models — ride matching, surge pricing, OTT recommendation, credit-on-UPI jaisi cheezein data ke bina possible nahi.',
              'Society ke liye — healthcare mein early diagnosis, agriculture mein yield prediction, disaster management mein risk mapping.',
              'Competitive advantage — jo company data ko better use karti hai, wo market mein competitors se aage nikal jaati hai.',
            ],
          },
          {
            type: 'diagram',
            kicker: 'Diagram',
            title: 'Data se Value Tak ka Safar',
            diagram: 'ds-impact',
            caption:
              'Chain ye hai: Data (raw events) → Information (clean aur organised) → Insight (pattern ya model) → Decision (action) → Value (revenue ya saving). Data Science beech ke steps — cleaning, modelling aur prediction — ko strong karti hai. Exam answer mein ye 5-step flow likhna bahut scoring hota hai.',
          },
          {
            type: 'points',
            kicker: 'Quick Look',
            title: 'Applications (Poora Detail Topic 1.8 Mein)',
            points: [
              'Healthcare — disease prediction, medical imaging, drug discovery.',
              'Finance — credit scoring, real-time fraud detection, algorithmic trading.',
              'Retail — recommendation engine, demand forecasting, dynamic pricing.',
              'Manufacturing — predictive maintenance, quality inspection.',
              'Transport — traffic prediction, route optimisation, ride matching.',
              'Agriculture — yield prediction, satellite based crop monitoring.',
              'Har application ka pattern same hai: data → model → decision → value.',
            ],
          },
          {
            type: 'comparison',
            kicker: 'Compare Karein',
            title: 'Data Science vs Traditional Data Analysis (BI)',
            columns: ['Data Science', 'Traditional BI / Data Analysis'],
            columnColors: ['#00d4ff', '#0047ff'],
            rows: [
              { label: 'Main question', values: ['Kya hoga? (predict)', 'Kya hua? (describe)'] },
              { label: 'Data used', values: ['Structured + unstructured (text, images, logs)', 'Mostly structured (tables, reports)'] },
              { label: 'Techniques', values: ['ML, deep learning, NLP, statistics', 'Aggregation, OLAP, dashboards'] },
              { label: 'Output', values: ['Model, score, recommendation', 'Report, dashboard, KPI'] },
              { label: 'Skills', values: ['Python/R, ML, statistics, domain', 'SQL, Excel, BI tools (Power BI, Tableau)'] },
              { label: 'Nature', values: ['Forward-looking, exploratory', 'Backward-looking, reporting'] },
            ],
          },
          {
            type: 'example',
            kicker: 'Example',
            title: 'Example: Flipkart ka Recommendation System',
            body:
              'Aap Flipkart par mobile dekhte hain. Data Science chupchaap 4 kaam karti hai: (1) aapka click, search aur browse history collect karti hai, (2) similar users ka behaviour dekhti hai (collaborative filtering), (3) predict karti hai ki aap kaunsa phone kharidne ke sabse zyada kareeb hain, (4) home page par wahi product dikhati hai. Isi tarah Swiggy delivery time predict karti hai, bank loan default risk nikaalti hai aur Netflix next episode suggest karta hai.',
          },
          {
            type: 'recap',
            kicker: 'Recap',
            title: 'Quick Recap',
            points: [
              'Data Science = Data + Statistics + Programming + Domain Knowledge.',
              'Ye interdisciplinary hai — maths, CS aur domain ka intersection.',
              'Iska goal sirf reporting nahi, prediction aur decision support hai.',
              'Main benefits: better decisions, forecasting, personalization, cost saving, automation.',
              'Real domains: healthcare, finance, retail, manufacturing, transport, agriculture.',
              'BI "kya hua" batati hai, Data Science "kya hoga" batati hai.',
              'Data se value ka flow: Data → Information → Insight → Decision → Value.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Define Data Science. Explain why data science is important for modern organizations.',
            answer:
              '**Definition:**\nData science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and actionable insights from structured and unstructured data, and to apply those insights to solve real-world problems.\n\n**Interdisciplinary nature:**\n1. **Statistics & Mathematics** — probability, inference, regression\n2. **Computer Science** — programming (Python/R), databases, machine learning\n3. **Domain Knowledge** — business context aur interpretation\n\n**Importance (6 points):**\n1. **Better decision making** — gut feeling ki jagah data-based evidence\n2. **Prediction and forecasting** — demand, sales, churn, risk pehle se pata chalta hai\n3. **Personalization** — recommendation systems se customer experience improve\n4. **Cost and time saving** — predictive maintenance aur fraud detection\n5. **Automation** — repetitive decisions ML se automate\n6. **Competitive advantage and new business models** — data-driven products\n\n**Diagram:** Refer to the Data Science intersection diagram (Statistics ∩ Computer Science ∩ Domain) and the Data → Value flow diagram.',
          },
          {
            question: 'Explain the interdisciplinary nature of Data Science with a suitable diagram.',
            answer:
              '**Meaning:**\nData Science kisi ek subject ka extension nahi hai — ye teen disciplines ke intersection par kaam karti hai.\n\n**1. Statistics and Mathematics**\n- Mean, median, variance, probability, hypothesis testing\n- Regression aur classification ke mathematical base\n- Result valid hai ya random — ye statistics batati hai\n\n**2. Computer Science**\n- Python, R, SQL programming\n- Databases, cloud, big-data tools (Spark, Hadoop)\n- Machine learning aur deep learning libraries\n\n**3. Domain Knowledge**\n- Business/healthcare/finance ki samajh\n- Sahi question frame karna aur result interpret karna\n\n**4. Communication**\n- Visualization aur dashboards se insight decision maker tak pahunchana\n\n**Diagram:** Draw three overlapping circles — Statistics & Mathematics, Computer Science, Domain Knowledge — aur centre mein "DATA SCIENCE" likhein. Sirf do circles ka overlap statistical analysis ya software development hai; teeno ka overlap hi Data Science hai.',
          },
          {
            question: 'Differentiate between Data Science and traditional Business Intelligence with examples.',
            answer:
              '**Data Science vs Traditional BI:**\n\n| Aspect | Data Science | Traditional BI |\n|---|---|---|\n| Question | Kya hoga? (predict) | Kya hua? (report) |\n| Data | Structured + unstructured | Mostly structured |\n| Techniques | ML, deep learning, NLP | Aggregation, OLAP, dashboards |\n| Output | Model, score, recommendation | Report, dashboard, KPI |\n| Skills | Python/R, ML, statistics | SQL, Excel, BI tools |\n| Nature | Forward-looking | Backward-looking |\n\n**Example (BI):** Ek retail manager dashboard dekhta hai ki pichhle quarter mein Pune region ki sales 12% giri.\n\n**Example (Data Science):** Model predict karta hai ki agle quarter mein kaunse 500 customers churn karenge, aur unhe discount offer bheja jaata hai.\n\n**Note:** Dono ek dusre ke competitor nahi, complementary hain — BI past batati hai, Data Science future predict karti hai.\n\n**Diagram:** Refer to the Data → Value flow diagram.',
          },
        ],
      },

      // ========================================================
      // 1.2 — Types of Data
      // ========================================================
      {
        id: 'ds-types-of-data',
        number: '1.2',
        title: 'Types of Data: Structured, Semi-structured, Unstructured',
        subtitle: 'Teen types ka difference, examples, formats aur kaunse tools lagte hain',
        icon: 'table',
        accent: '#00d4ff',
        englishDefinition:
          'Data can be classified by the amount of structure it carries. Structured data is highly organised and follows a predefined schema — typically stored in relational databases as rows and columns (e.g. student records, bank transactions). Semi-structured data carries its own structure through tags, keys or markers, but does not follow a rigid schema — e.g. JSON, XML, YAML, email, log files and NoSQL documents. Unstructured data has no predefined data model or schema and is not easily stored in tabular form — e.g. images, audio, video, free text, PDFs and CCTV footage. Roughly 80–90% of the data generated today is unstructured.',
        intro:
          'Data sirf ek hi tarah ka nahi hota. Aapke college ka attendance register (table) structured hai, WhatsApp ka message semi-structured hai, aur professor ki handwriting wali answer sheet unstructured hai. Data ka type decide karta hai ki usko kahan store karenge, kaunsa tool chalayenge, kitna kharcha aayega aur kitni insight milegi. Exam mein ye topic bahut frequently poochha jaata hai — definitions, examples aur ek comparison table ke saath.',
        sections: [
          {
            type: 'definition',
            kicker: 'Definition',
            title: 'Data kya hai aur type kyun matter karta hai?',
            body:
              'Data raw facts aur figures hote hain — marks, temperature, clicks, photos, messages. Jab unko organise karke context diya jaata hai to information ban jaate hain. Data ka "type" uski structure se tay hota hai: kitna fixed format hai, kya machine usko seedha table mein daal sakti hai, ya pehle process karna padega.',
            body2:
              'Aaj duniya ka lagbhag 80–90% data unstructured hai (images, video, text). Isliye modern data science mein NLP aur computer vision itne important ho gaye hain — kyunki simple SQL se ye data handle nahi hota.',
            chips: ['Structured', 'Semi-structured', 'Unstructured', 'Hybrid', 'Big Data'],
          },
          {
            type: 'cards',
            kicker: 'Three Types',
            title: 'Data ke 3 Main Types',
            cards: [
              {
                icon: 'table',
                title: 'Structured Data',
                body:
                  'Fixed schema ke saath rows aur columns mein stored data — jaise relational database ki table. Har record ka format pehle se define hota hai, isliye SQL se search, filter, join aur aggregate karna easy hai. Example: student table (roll_no, name, marks), bank transaction table, billing records. Enterprise data ka lagbhag 10–20% hissa. Storage: RDBMS (MySQL, Oracle, PostgreSQL).',
              },
              {
                icon: 'code',
                title: 'Semi-structured Data',
                body:
                  'Iska apna structure hota hai — tags, keys ya markers ke through — lekin rigid schema nahi hota. Har record alag fields rakh sakta hai, isliye flexible hai par analysis se pehle parse karna padta hai. Example: JSON (API responses), XML, YAML (config), HTML, email (headers + body), log files, NoSQL documents. Storage: MongoDB, HBase, file systems, data lakes.',
              },
              {
                icon: 'file',
                title: 'Unstructured Data',
                body:
                  'Koi predefined model ya schema nahi — na rows, na columns. Isme images, audio, video, PDF, free text, CCTV footage, doctor ke notes, social media posts aate hain. Ye data ka sabse bada hissa (80–90%) hai aur sabse valuable bhi, par isko process karne ke liye NLP, computer vision aur deep learning chahiye. Storage: object stores (S3), data lakes.',
              },
            ],
          },
          {
            type: 'diagram',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            title: 'Types of Data — Hierarchy',
            diagram: 'data-types',
            caption:
              'Ek hi root "DATA" se teen branches nikalti hain: structured (rows aur columns, fixed schema), semi-structured (self-describing tags, flexible schema) aur unstructured (koi schema nahi). Har branch ke saath examples, tools aur data share diya gaya hai. Exam mein ye tree draw karke teeno ke 2-2 examples likhna 6 marks ka poora answer ban jaata hai.',
          },
          {
            type: 'comparison',
            kicker: 'Comparison Table (Most Important)',
            title: 'Structured vs Semi-structured vs Unstructured',
            columns: ['Structured', 'Semi-structured', 'Unstructured'],
            columnColors: ['#0047ff', '#00d4ff', '#ff8800'],
            rows: [
              { label: 'Schema', values: ['Fixed, predefined', 'Flexible, self-describing', 'No schema'] },
              { label: 'Format', values: ['Rows and columns (table)', 'Tags / keys (JSON, XML)', 'Images, audio, video, text'] },
              { label: 'Examples', values: ['Bank transactions, marks, orders', 'JSON API, logs, email, YAML', 'CCTV, X-ray, PDFs, chat'] },
              { label: 'Storage', values: ['RDBMS (MySQL, Oracle)', 'NoSQL, data lake', 'Object store (S3), data lake'] },
              { label: 'Query', values: ['SQL', 'JSON path, MapReduce/Spark', 'NLP, CV, deep learning'] },
              { label: 'Share of data', values: ['~10–20%', '~5–10%', '~80–90%'] },
              { label: 'Analysis effort', values: ['Low', 'Medium', 'High'] },
            ],
          },
          {
            type: 'points',
            kicker: 'Exam Points',
            title: 'Semi-structured Data ke Common Examples',
            points: [
              'JSON — REST API response ka sabse common format (e.g. weather API).',
              'XML — purane enterprise systems, SOAP services, RSS feeds, sitemap.',
              'YAML — configuration files (Docker Compose, Kubernetes manifests).',
              'HTML — web pages semi-structured hi hote hain; scraping ke baad data nikalta hai.',
              'Email — headers (From, To, Subject) structured hain, body free text hai.',
              'Log files — timestamp + level + message ka apna pattern hota hai.',
              'NoSQL documents — MongoDB ka BSON document, jisme har record ke fields alag ho sakte hain.',
              'Sensor / IoT feeds — device id, time, reading ke saath JSON payload.',
            ],
          },
          {
            type: 'example',
            kicker: 'Example',
            title: 'Ek Hospital ka Data — Teeno Types Ek Saath',
            body:
              'Hospital ke system mein: (1) Structured — patient table (patient_id, name, age, admission_date) aur billing table, jo SQL se query hoti hai. (2) Semi-structured — lab machine se aane wala JSON/HL7 report aur CT machine ka log file. (3) Unstructured — doctor ki handwritten/typed notes, X-ray aur MRI images, operation ka video. Isliye real project mein ek data lake banaya jaata hai jahan teeno types rakhe jaate hain aur zarurat ke hisaab se alag-alag tools chalte hain. Isi ko hybrid data environment kehte hain.',
          },
          {
            type: 'points',
            kicker: 'Why Difficult',
            title: 'Unstructured Data Challenging kyun hai?',
            points: [
              'Volume — total data ka 80–90%, isliye storage aur processing cost zyada.',
              'No schema — pehle structure dhundhna padta hai (parsing, OCR, transcription).',
              'Feature extraction mushkil — image se edges, text se words/embeddings banana padta hai.',
              'Verification mushkil — model ka output human ke liye check karna costly hota hai.',
              'Tools mehnge — GPU, deep learning frameworks aur bade storage ki zarurat.',
              'Privacy aur compliance — images aur medical text mein sensitive information hoti hai.',
            ],
          },
          {
            type: 'recap',
            kicker: 'Recap',
            title: 'Quick Recap',
            points: [
              'Structured = fixed schema, rows/columns, SQL (bank transactions, marks).',
              'Semi-structured = self-describing tags, flexible schema (JSON, XML, logs).',
              'Unstructured = no schema (images, audio, video, free text).',
              'Share of enterprise data: structured ~10–20%, semi ~5–10%, unstructured ~80–90%.',
              'Structured ka analysis easy, unstructured ka sabse mushkil par value sabse zyada.',
              'Real systems mein teeno types saath hote hain — hybrid data environment.',
              'Tools: RDBMS + SQL → NoSQL/Spark → NLP, computer vision, deep learning.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Explain the types of data with suitable examples and a diagram.',
            answer:
              '**1. Structured Data**\nData jo predefined schema ke saath rows aur columns mein store hota hai.\n- Example: student table (roll_no, name, marks), bank transactions\n- Storage: RDBMS (MySQL, Oracle)\n- Query: SQL\n- Share: ~10–20% of enterprise data\n\n**2. Semi-structured Data**\nData jisme apna structure tags/keys ke roop mein hota hai, par rigid schema nahi hota.\n- Example: JSON API response, XML, YAML config, email, log files\n- Storage: NoSQL (MongoDB), data lake\n- Query: JSON path, Spark\n- Share: ~5–10%\n\n**3. Unstructured Data**\nData jiska koi predefined model ya schema nahi hota.\n- Example: images, audio, video, PDF, free text, CCTV footage\n- Storage: object store (S3), data lake\n- Processing: NLP, computer vision, deep learning\n- Share: ~80–90%\n\n**Diagram:** Draw a tree with root "DATA" branching into Structured, Semi-structured and Unstructured, with 2 examples and 1 tool written under each branch.',
          },
          {
            question: 'What is semi-structured data? Explain JSON and XML with examples and state its advantages.',
            answer:
              '**Definition:**\nSemi-structured data wo data hai jisme structure maujood hota hai par fixed schema ke roop mein nahi — tags, keys ya markers ke through har record apna structure khud carry karta hai.\n\n**JSON example:**\n{"student": {"name": "Riya", "marks": [78, 82], "course": "MCA"}}\n\n**XML example:**\n<student><name>Riya</name><marks>78</marks></student>\n\n**Characteristics:**\n- Self-describing (field names data ke saath hote hain)\n- Flexible schema — naye fields baad mein add ho sakte hain\n- Heterogeneous records ek hi collection mein\n\n**Advantages:**\n1. Flexibility — schema change ke liye database migrate nahi karna padta\n2. Web/API friendly — REST APIs JSON hi bhejti hain\n3. Nested aur hierarchical data easily represent hota hai\n4. Semi-structured ko structured mein convert karna aasaan hai (flattening)\n\n**Limitations:**\n- Storage overhead (tags repeat hote hain)\n- Analysis se pehle parsing zaroori\n- Complex queries structured data se mushkil\n\n**Diagram:** Refer to the Types of Data hierarchy diagram.',
          },
          {
            question: 'Why is unstructured data difficult to handle? Explain the techniques used to analyse it.',
            answer:
              '**Why difficult:**\n1. **No schema** — pehle structure identify karna padta hai\n2. **Huge volume** — total data ka 80–90% hissa\n3. **Feature extraction** — image/text se numerical features banana padta hai\n4. **Storage and cost** — object storage + GPU compute chahiye\n5. **Verification** — output validate karna costly aur subjective\n6. **Privacy** — medical images aur personal text sensitive hote hain\n\n**Techniques used:**\n1. **NLP** — tokenization, embeddings, sentiment analysis, topic modelling text ke liye\n2. **Computer Vision** — CNN se image classification, object detection, OCR\n3. **Speech processing** — audio ko text mein convert karke analyse karna\n4. **Deep learning** — transformers aur large language models\n5. **Metadata tagging** — analysis se pehle manual/auto tags lagana\n6. **Vector databases** — embeddings store karke similarity search karna\n\n**Example:** Hospital X-ray images pe CNN train karke pneumonia detection — yahi unstructured data analysis ka classic example hai.\n\n**Diagram:** Refer to the Types of Data hierarchy diagram.',
          },
        ],
      },

      // ========================================================
      // 1.3 — Scales of Measurement
      // ========================================================
      {
        id: 'ds-scales-measurement',
        number: '1.3',
        title: 'Scales of Measurement: Nominal, Ordinal, Interval, Ratio',
        subtitle: 'Stevens ke 4 scales, unki properties aur kaunse statistical operations allowed hain',
        icon: 'ruler',
        accent: '#00d4ff',
        englishDefinition:
          'A scale of measurement is a system of assigning numbers or labels to objects or events according to a defined rule. S. S. Stevens (1946) classified measurement into four scales — nominal, ordinal, interval and ratio — on the basis of three properties: order (whether values can be ranked), equal interval (whether the distance between consecutive values is the same) and true zero (whether an absolute zero, meaning absence of the attribute, exists). Nominal has none of these properties, ordinal has order only, interval has order and equal intervals, and ratio has all three.',
        intro:
          'Jab hum kisi cheez ko number dete hain, to har number ka matlab same nahi hota. Jersey number 10 aur 20 — inko jodna bekaar hai. Lekin 10 runs aur 20 runs — inko jodna bilkul sahi hai. Yahi difference measurement scale ka hai. Scale decide karta hai ki aap mean nikaal sakte hain ya nahi, ratio bana sakte hain ya nahi. Exam mein ye almost pakka topic hai: 4 scales, properties aur examples ke saath.',
        sections: [
          {
            type: 'definition',
            kicker: 'Definition',
            title: 'Measurement Scale kya hota hai?',
            body:
              'Measurement scale ek rule hai jisse objects/events ko numbers ya labels assign kiye jaate hain. Har scale ki apni "taakat" hoti hai — kitna mathematical kaam usme allowed hai. Ye decide karne ke 3 sawaal hain: (1) Order — values ko rank kar sakte hain? (2) Equal interval — do consecutive values ke beech ka gap same hai? (3) True zero — absolute zero (attribute ka bilkul absent hona) exist karta hai?',
            body2:
              'In teeno sawaalon ke jawab se scale tay hota hai: koi property nahi = Nominal, sirf order = Ordinal, order + equal interval = Interval, teeno = Ratio.',
            chips: ['Order?', 'Equal interval?', 'True zero?', 'Allowed operations'],
          },
          {
            type: 'cards',
            kicker: 'Four Scales',
            title: 'Char Scales of Measurement',
            cards: [
              {
                icon: 'tag',
                title: '1. Nominal Scale',
                body:
                  'Sirf naming ya labelling — numbers ka koi order ya distance nahi. Example: gender (M/F/Other), blood group (A/B/O/AB), city, religion, PIN code, jersey number. Allowed statistics: count, frequency, mode, chi-square. Jersey number 10 aur 20 ko jodna galat hai kyunki ye numbers sirf naam hain. Lowest level of measurement.',
              },
              {
                icon: 'list',
                title: '2. Ordinal Scale',
                body:
                  'Order ya ranking hoti hai, lekin consecutive values ke beech ka gap equal nahi hota. Example: exam grades (A > B > C), race position (1st, 2nd, 3rd), customer satisfaction (1–5), Likert scale. Allowed: mode, median, percentile, rank correlation (Spearman). Note: rank 1 aur rank 2 ka distance rank 2 aur 3 ke distance ke barabar nahi maana jaata.',
              },
              {
                icon: 'clock',
                title: '3. Interval Scale',
                body:
                  'Order + equal intervals, lekin true zero nahi hota. Example: temperature in °C/°F, IQ score, calendar year, time of day. Allowed: mode, median, mean, standard deviation, correlation. Important: 40°C, 20°C se "do guna garam" nahi hai, kyunki 0°C ka matlab temperature ka absent hona nahi hai — ratio meaningless hai.',
              },
              {
                icon: 'ruler',
                title: '4. Ratio Scale',
                body:
                  'Sabse strong scale — order + equal intervals + true zero. Example: height, weight, income, age, sales amount, distance, response time, marks (0–100), Kelvin temperature. True zero ka matlab hai attribute ka bilkul absent hona (0 kg = weight nahi). Isliye sab operations allowed: mean, SD, ratio, percentage. 40 kg, 20 kg se exactly do guna hai.',
              },
            ],
          },
          {
            type: 'diagram',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            title: 'Char Scales — Badhti Hui Taakat',
            diagram: 'measurement-scales',
            caption:
              'Steps ki tarah scales upar jaate hain: Nominal (sirf labels) → Ordinal (order added) → Interval (equal intervals added) → Ratio (true zero added). Jitna upar, utne zyada mathematical operations allowed. Exam mein ye ladder draw karke har step par ek example aur ek allowed operation likhna best answer hota hai.',
          },
          {
            type: 'comparison',
            kicker: 'Comparison Table (Most Important)',
            title: 'Nominal vs Ordinal vs Interval vs Ratio',
            columns: ['Nominal', 'Ordinal', 'Interval', 'Ratio'],
            columnColors: ['#5a6a9e', '#0047ff', '#00d4ff', '#c4ff00'],
            rows: [
              { label: 'Order (ranking)', values: ['No', 'Yes', 'Yes', 'Yes'] },
              { label: 'Equal intervals', values: ['No', 'No', 'Yes', 'Yes'] },
              { label: 'True zero', values: ['No', 'No', 'No', 'Yes'] },
              { label: 'Examples', values: ['Gender, blood group, city', 'Grades, rank, satisfaction', 'Temperature °C, IQ, year', 'Height, weight, income, age'] },
              { label: 'Central tendency', values: ['Mode', 'Mode, Median', 'Mode, Median, Mean', 'Mode, Median, Mean'] },
              { label: 'Other allowed', values: ['Frequency, chi-square', 'Percentile, rank correlation', 'SD, correlation, t-test', 'All + ratio, %, geometric mean'] },
              { label: 'Ratio meaningful?', values: ['No', 'No', 'No', 'Yes'] },
            ],
          },
          {
            type: 'points',
            kicker: 'Exam Points',
            title: 'Important Points jo Examiner Dhundhta hai',
            points: [
              'Mean sirf interval aur ratio scale par nikaalna chahiye; nominal/ordinal par mean galat interpretation deta hai.',
              'Median ordinal, interval aur ratio par valid hai; nominal par nahi.',
              'Mode har scale par valid hai — isliye categorical data ka favourite statistic hai.',
              'Ratio (2x, half) sirf ratio scale par meaningful hai — interval par nahi.',
              'Temperature: Celsius/Fahrenheit interval hai, Kelvin ratio hai (kyunki 0 K = absolute zero).',
              'Likert scale (agree/disagree 1–5) technically ordinal hai; researchers often interval maan lete hain — ye limitation answer mein likhna chahiye.',
              'Nominal numbers labels hote hain (jersey 10, 20) — unko add/multiply karna galti hai.',
              'Continuous data interval/ratio par aata hai; categorical data nominal/ordinal par.',
            ],
          },
          {
            type: 'example',
            kicker: 'Example',
            title: 'Ek hi Survey, Char Alag Scales',
            body:
              'Ek cricket survey socho: (1) Player ka favourite team — India, Australia, England = Nominal. (2) Team ka ranking — 1st, 2nd, 3rd = Ordinal (gap equal nahi). (3) Match ka temperature — 28°C, 32°C = Interval (30°C, 15°C se do guna garam nahi). (4) Player ka score — 45 runs, 90 runs = Ratio (90, 45 se do guna hai, aur 0 runs ka matlab bilkul koi run nahi). Ek hi survey ke chaar variables, chaar alag scales — aur isi liye chaar alag statistical tests.',
          },
          {
            type: 'recap',
            kicker: 'Recap',
            title: 'Quick Recap',
            points: [
              'Scale banane ke 3 sawaal: order, equal interval, true zero.',
              'Nominal = labels only (gender, blood group) — mode allowed.',
              'Ordinal = order, unequal gaps (grades, rank) — mode + median.',
              'Interval = order + equal gaps, no true zero (temperature °C, IQ) — mean allowed, ratio nahi.',
              'Ratio = sab kuch + true zero (height, income, age) — saare operations allowed.',
              'Galat scale chunna = galat statistic = galat conclusion.',
              'Stevens (1946) ne ye chaar scales diye.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Explain the four scales of measurement with properties and examples.',
            answer:
              '**Definition:**\nA scale of measurement is a rule for assigning numbers or labels to objects/events. Stevens (1946) ne teen properties ke basis par chaar scales diye — order, equal interval aur true zero.\n\n**1. Nominal Scale**\n- Properties: sirf labelling, koi order nahi, koi interval nahi, koi zero nahi\n- Examples: gender, blood group, city, religion\n- Allowed: count, frequency, mode, chi-square\n\n**2. Ordinal Scale**\n- Properties: order hota hai, lekin intervals equal nahi\n- Examples: grades A/B/C, rank 1st/2nd, satisfaction 1–5\n- Allowed: mode, median, percentile, rank correlation\n\n**3. Interval Scale**\n- Properties: order + equal intervals, lekin true zero nahi\n- Examples: temperature °C, IQ, calendar year\n- Allowed: mode, median, mean, SD, correlation\n- Limitation: ratio meaningful nahi (40°C ≠ 2 × 20°C)\n\n**4. Ratio Scale**\n- Properties: order + equal intervals + true zero\n- Examples: height, weight, income, age, sales, Kelvin\n- Allowed: all operations including ratio\n\n**Diagram:** Draw four ascending steps (Nominal → Ordinal → Interval → Ratio) aur har step par example + allowed operation likhein.',
          },
          {
            question: 'Why is it important to identify the scale of measurement before applying statistical tools?',
            answer:
              '**Reason:**\nHar statistical tool ek certain scale ki assumption par kaam karta hai. Galat scale chunne se result meaningless ho jaata hai.\n\n**1. Central tendency ka choice**\n- Nominal → sirf mode (mean nikaalna galat)\n- Ordinal → mode, median\n- Interval/Ratio → mean bhi valid\n\n**2. Dispersion measures**\n- Range ordinal tak theek hai\n- Standard deviation ke liye interval/ratio chahiye\n\n**3. Ratio statements**\n- Sirf ratio scale par "do guna" bolna sahi hai\n- Interval par percentage change galat hota hai (20°C → 40°C "100% increase" meaningless)\n\n**4. Test selection**\n- Nominal → chi-square\n- Ordinal → Mann-Whitney, Spearman\n- Interval/Ratio → t-test, ANOVA, Pearson\n\n**5. Data entry aur coding**\n- Nominal codes ko numbers maan lena (jersey 10 + 20 = 30) galti hai\n\n**Conclusion:** Scale identify karna data analysis ka pehla aur sabse zaroori step hai — kyunki tool ka valid use isi par depend karta hai.',
          },
          {
            question: 'Classify the following variables by scale of measurement and justify: gender, exam grade, temperature in °C, body weight, income, jersey number, satisfaction rating.',
            answer:
              '**Classification:**\n\n| Variable | Scale | Reason |\n|---|---|---|\n| Gender | Nominal | Sirf categories, koi order nahi |\n| Exam grade (A/B/C) | Ordinal | Order hai, gap equal nahi |\n| Temperature °C | Interval | Equal intervals, true zero nahi |\n| Body weight | Ratio | True zero (0 kg = no weight) |\n| Income | Ratio | True zero, ratios meaningful |\n| Jersey number | Nominal | Number sirf label hai |\n| Satisfaction rating 1–5 | Ordinal | Order hai, distance unequal |\n\n**Justification of tricky ones:**\n- **Temperature:** 30°C aur 15°C ka difference 15 hai, par "2 guna garam" nahi keh sakte — 0°C arbitrary hai. Isliye interval.\n- **Jersey number:** 10 + 20 = 30 ka koi matlab nahi — nominal.\n- **Satisfaction rating:** Likert type; technically ordinal. Mean nikaalna common practice hai par usko "quasi-interval" maana jaata hai.\n\n**Diagram:** Refer to the Scales of Measurement ladder diagram.',
          },
          {
            question: 'Differentiate between interval and ratio scale with examples.',
            answer:
              '**Interval Scale:**\n- Order + equal intervals, lekin **true zero nahi**\n- Zero arbitrary hota hai (sirf reference point)\n- Ratio comparisons meaningful nahi\n- Example: temperature in °C/°F, IQ, calendar year\n- Allowed: mean, SD, correlation; ratio nahi\n\n**Ratio Scale:**\n- Order + equal intervals + **true zero**\n- Zero ka matlab attribute ka absent hona\n- Ratio comparisons meaningful\n- Example: height, weight, income, age, sales, Kelvin temperature\n- Allowed: sab operations (mean, SD, ratio, geometric mean)\n\n**Key difference table:**\n\n| Aspect | Interval | Ratio |\n|---|---|---|\n| True zero | No | Yes |\n| Ratio statements | Meaningless | Meaningful |\n| Example | 20°C, 40°C | 20 kg, 40 kg |\n| Doubling | 40°C is not 2 × 20°C | 40 kg = 2 × 20 kg |\n| Multiplication/division | Not valid | Valid |\n\n**Conclusion:** Ratio scale interval ka superset hai — ek extra property (absolute zero) isko stronger banati hai.\n\n**Diagram:** Refer to the Scales of Measurement ladder diagram.',
          },
        ],
      },
      ...dataScienceExtraTopics,
      ...dataScienceFinalTopics,
    ],
  },
];
