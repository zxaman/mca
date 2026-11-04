// ============================================================
// Important 6-Mark Exam Questions for Unit 1 (BI)
// Curated most important questions across all 8 topics
// Each with complete answer + diagram reference
// ============================================================

import { dataScienceImportantQuestions } from './dataScienceQuestions.js';
import { webTechnologyImportantQuestions } from './webTechnologyQuestions.js';

const baseImportantQuestions = [
  {
    id: 'q1',
    topicNumber: '1.1',
    topicTitle: 'Introduction to Business Intelligence',
    question: 'Define Business Intelligence (BI). Explain the components of BI with a suitable diagram.',
    answer: `**Definition:**
Business Intelligence (BI) is a technology-driven process for analyzing business data and presenting actionable information to help decision makers make informed business decisions.

**Components of BI:**
1. **Data Sources** — ERP, CRM, databases, Excel, external sources
2. **ETL (Extract, Transform, Load)** — data ko extract karna, transform (clean, format) karna, aur warehouse mein load karna
3. **Data Warehouse** — central store for historical, integrated data (Subject-oriented, Time-variant, Non-volatile)
4. **OLAP Server** — multi-dimensional analysis through data cubes (Drill-down, Slice, Dice)
5. **BI Applications** — Dashboards, reports, scorecards (Tableau, Power BI, QlikSense)
6. **Users** — Analysts, managers, executives who consume the insights

**Data Flow:** Data Sources → ETL → Data Warehouse → OLAP → BI Applications → Users

**Diagram:** Refer to the BI Architecture Flow diagram showing data flowing from sources through ETL into the warehouse, then OLAP analysis, and finally dashboards for decision making.`,
    diagram: 'biflow',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q2',
    topicNumber: '1.2',
    topicTitle: 'Evolution of BI & Decision Support Systems',
    question: 'Explain the evolution of Business Intelligence from MIS to modern BI with a timeline. Also describe the components of a Decision Support System (DSS).',
    answer: `**Evolution of BI:**
1. **1950s–60s — MIS** (Management Information Systems): Structured, routine reports. Operational decisions.
2. **1970s — DSS** (Decision Support Systems): Semi-structured problems. Data + models. Gorry & Scott Morton (1971).
3. **1980s — EIS** (Executive Information Systems): For top executives. External + internal data.
4. **1990s — Data Warehouse & OLAP**: Bill Inmon (father of data warehouse). Codd (OLAP, 1993). Gartner ne 1996 mein "BI" term popular kiya.
5. **2000s — Self-Service BI**: Tableau (2003), Power BI, Qlik. Non-technical users khud reports banane lage.
6. **2010s+ — Modern BI**: Cloud BI, embedded analytics, real-time dashboards, AI/ML-powered BI.

**Components of DSS:**
1. **Database Management System (DBMS)** — data ko store, manage aur retrieve karta hai
2. **Model Management System** — analysis models (forecasting, optimization, simulation)
3. **User Interface / Dialogue Management** — user interaction, query, reports

**Diagram:** Refer to the Evolution Timeline diagram (MIS → DSS → EIS → DW/OLAP → Self-Service → Modern BI) and the DSS Components diagram.`,
    diagram: 'timeline',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q3',
    topicNumber: '1.3',
    topicTitle: 'Data-driven Decision Making',
    question: 'What is data-driven decision making? Explain the DIKW pyramid and the four types of analytics with examples.',
    answer: `**Definition:**
Data-driven decision making is a process in which organizations base their decisions on data, facts and metrics rather than solely on intuition or experience.

**DIKW Pyramid:**
1. **Data** — raw facts and figures (e.g., "sales = 1000")
2. **Information** — data + context (e.g., "sales increased 10%")
3. **Knowledge** — patterns and understanding (e.g., "sales drop in July — seasonal trend")
4. **Wisdom** — using knowledge for decisions (e.g., "keep lower stock in July")

**Four Types of Analytics:**
1. **Descriptive — "What happened?"** — Past data summary. Example: last month sales report.
2. **Diagnostic — "Why did it happen?"** — Root cause analysis. Example: sales drop kyunki competitor ne discount diya.
3. **Predictive — "What will happen?"** — Future estimate with ML. Example: agle month sales ka estimate.
4. **Prescriptive — "What should we do?"** — Best action recommendations. Example: stock kitna rakho, kaunsa campaign chalo.

**Diagram:** Refer to the DIKW Pyramid diagram and the Analytics Stages diagram (Descriptive → Diagnostic → Predictive → Prescriptive).`,
    diagram: 'dikw',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q4',
    topicNumber: '1.4',
    topicTitle: 'Components of BI Architecture',
    question: 'Describe the components of Business Intelligence architecture. Explain the ETL process in detail.',
    answer: `**BI Architecture Components:**
1. **Data Sources** — ERP, CRM, operational databases, Excel, external sources
2. **ETL (Extract, Transform, Load)** — data preparation ka heart
3. **Data Warehouse** — central repository. Features: Subject-oriented, Integrated, Time-variant, Non-volatile
4. **OLAP Server** — data cubes, drill-down, slice, dice operations
5. **BI Applications** — dashboards, reports, scorecards
6. **Users** — analysts, managers, executives

**ETL Process in Detail:**
1. **Extract** — data ko source systems se nikalna. Multiple sources se collect karna.
2. **Transform** — data ko clean karna, correct format mein badalna, duplicate hatana, business rules apply karna, aggregations karna.
3. **Load** — transformed data ko data warehouse mein daalna. Historical data ke saath integrate karna.

**Importance:** ETL data quality ensure karta hai. Kharab ETL se kharab data warehouse banta hai — "garbage in, garbage out".

**Diagram:** Refer to the Full BI Architecture diagram (6 layers) and the ETL Process diagram (Extract → Transform → Load).`,
    diagram: 'etl',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q5',
    topicNumber: '1.5',
    topicTitle: 'Role of Databases, Data Warehouses & Analytics in BI',
    question: 'Differentiate between databases (OLTP) and data warehouses (OLAP). Explain how analytics converts data into business decisions.',
    answer: `**Database (OLTP — Online Transaction Processing):**
- Purpose: Daily transactions (sales, orders, inventory)
- Data: Current, operational
- Structure: Row-based, normalized
- Operations: Fast inserts & updates
- Users: Operational staff
- Example: ATM transactions

**Data Warehouse (OLAP — Online Analytical Processing):**
- Purpose: Historical data analysis
- Data: Integrated, historical, time-variant
- Structure: Multi-dimensional cubes, denormalized
- Operations: Complex queries, drill-down, slice, dice
- Users: Analysts, managers, executives
- Features: Subject-oriented, Integrated, Time-variant, Non-volatile

**How Analytics Converts Data into Decisions:**
1. **Descriptive** — "What happened?" (past summary)
2. **Diagnostic** — "Why did it happen?" (root cause)
3. **Predictive** — "What will happen?" (forecasting)
4. **Prescriptive** — "What should we do?" (recommendations)

**Example:** Descriptive: "Sales 10% kam hui." Diagnostic: "Kyun? Competitor discount." Predictive: "Agle month bhi kam hogi." Prescriptive: "Extra campaign chalo."

**Diagram:** Refer to the OLTP vs OLAP comparison diagram and the Analytics Stages diagram.`,
    diagram: 'db-vs-dw',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q6',
    topicNumber: '1.6',
    topicTitle: 'Applications of BI in Business Domains',
    question: 'Explain the applications of Business Intelligence in finance and healthcare domains with examples.',
    answer: `**BI Applications in Finance:**
1. **Fraud Detection** — real-time transaction monitoring, anomaly detection
2. **Risk Management** — credit risk, market risk analysis
3. **Portfolio Optimization** — investment decisions, asset allocation
4. **Regulatory Compliance** — automatic report generation (Basel, SOX)

**BI Applications in Healthcare:**
1. **Patient Outcome Analysis** — treatment effectiveness, recovery rates, mortality analysis
2. **Resource Planning** — beds, staff, equipment utilization optimization
3. **Clinical Operations** — workflow optimization, waiting time analysis
4. **Population Health Management** — disease patterns, preventive care, health trends

**Example:** A hospital uses BI to analyze patient admission patterns, optimize bed allocation during peak seasons, and predict patient demand for different departments. A bank uses BI for real-time fraud detection across millions of transactions.

**Diagram:** Refer to the BI Applications reference image in this topic showing BI applications across domains.`,
    diagram: null,
    image: '/images/bi-healthcare.png',
    importance: '⭐⭐⭐',
  },
  {
    id: 'q7',
    topicNumber: '1.7',
    topicTitle: 'Benefits & Challenges of BI Systems',
    question: 'Discuss the benefits and challenges of implementing a Business Intelligence system in an organization.',
    answer: `**Benefits of BI:**
1. **Better Decision Making** — Data-driven decisions, real-time insights, accuracy
2. **Increased Efficiency** — Automated reporting, faster processes, less manual work
3. **Competitive Advantage** — Market trends early detection, customer understanding
4. **Cost Reduction** — Waste identification, inventory optimization
5. **Revenue Growth** — Better marketing, customer retention
6. **Customer Satisfaction** — Personalized experiences, better service

**Challenges of BI:**
1. **Data Quality** — "Garbage in, garbage out". Incomplete, inconsistent, or outdated data.
2. **Cost & Complexity** — High implementation cost, infrastructure, tools, skilled personnel.
3. **Security & Privacy** — Data breaches, compliance (GDPR), unauthorized access.
4. **Resistance to Change** — Employees resist new tools and processes. Change management chahiye.
5. **Technical Complexity** — Integration with existing systems, maintenance.
6. **Skilled Personnel** — Need for data analysts, data scientists, IT support.

**Conclusion:** BI benefits aur challenges dono hain. Successful implementation ke liye challenges ko address karna (data quality, training, security) important hai. Benefits ko maximize karna aur challenges ko minimize karna part of planning hai.

**Diagram:** Refer to the Benefits vs Challenges diagram showing both sides of BI implementation.`,
    diagram: 'benefits-challenges',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q8',
    topicNumber: '1.8',
    topicTitle: 'Generative AI & LLMs in Business Intelligence',
    question: 'Define Generative AI and Large Language Models (LLMs). Explain how they are transforming Business Intelligence with examples.',
    answer: `**Generative AI (GenAI):**
GenAI ek AI ka type hai jo naye content generate karti hai — text, images, code, audio, video. Ye previous patterns se naya output banati hai.

**Large Language Models (LLMs):**
LLMs GenAI ka subtype hai jo language ko samajh aur generate karti hai. Ye bade datasets par train kiye hoti hain. Examples: GPT-4, Claude, Gemini, LLaMA.

**How LLMs are Transforming BI:**

1. **Conversational Analytics** — "Ask your data" — users normal language mein data se puchte hain. "Show me last quarter sales" ya "Why did sales drop?" — system answer degi. Ye non-technical users ke liye BI accessible banati hai.

2. **Automated Report Generation** — LLMs automatic reports likh sakti hain. Data ka summary automatically prepare karti hain. Ye time bachata hai aur efficiency badhata hai.

3. **Anomaly Detection & Explanation** — GenAI unusual patterns detect aur explain karti hai. "Sales kam hui kyun?" — system batati hai possible reasons.

4. **Predictive Recommendations** — LLMs historical data aur patterns dekh kar recommendations generate karti hain. "Kaunsa product stock karna hai?" — prescriptive analytics ka advanced version.

**Example:** Ek sales manager normal language mein puchta hai: "Pichhle quarter ka sales report dikhao" ya "Kaunsa product sabse jada bik raha hai?" — GenAI-powered BI dashboard instant answer deti hai. Ye conversational analytics hai — BI + LLM ka mishran.

**Impact:** GenAI BI ko accessible, automatic aur conversational banati hai. Ye "democratization of data" kehlaata hai.

**Diagram:** Refer to the GenAI + BI Integration diagram showing data flow: Business Data → BI System → GenAI/LLM → Natural Language Outputs.`,
    diagram: 'genai',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'q9',
    topicNumber: '1.1',
    topicTitle: 'Introduction to Business Intelligence',
    question: 'What is ETL? Explain the three stages of ETL with a diagram. Why is ETL important in BI?',
    answer: `**ETL (Extract, Transform, Load):**

1. **Extract** — Data ko source systems (ERP, CRM, databases) se nikalna. Multiple sources se data collect karna. Extraction methods: full extraction, incremental extraction, change data capture.

2. **Transform** — Data ko clean karna, correct format mein badalna, duplicate hatana, business rules apply karna, aggregations karna. Data ko "analysis-ready" banana. Transformation types: cleansing, formatting, aggregation, enrichment, deduplication.

3. **Load** — Transformed data ko data warehouse mein daalna. Historical data ke saath integrate karna. Loading strategies: full refresh, incremental load.

**Why ETL Important in BI:**
- Data quality ensure karta hai
- Data ko analysis-ready banata hai
- Kharab ETL se kharab data warehouse banta hai
- "Garbage in, garbage out" principle — ETL ka quality BI results pe directly impact dalta hai
- Different sources se data ko integrate karta hai

**Diagram:** Refer to the ETL Process diagram (Extract → Transform → Load).`,
    diagram: 'etl',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'q10',
    topicNumber: '1.3',
    topicTitle: 'Data-driven Decision Making',
    question: 'Explain the data-driven decision cycle with a diagram. What are the challenges of data-driven decision making?',
    answer: `**Data-Driven Decision Cycle:**
1. **Identify Problem** — kaunsa decision lena hai? Objective set karo.
2. **Collect Data** — relevant data collect karo (sales, customer, market data)
3. **Clean & Process Data** — remove errors, fill missing values ("garbage in, garbage out")
4. **Analyze** — descriptive/diagnostic/predictive/prescriptive analytics use karo
5. **Interpret** — results ko interpret karo, insights nikalo
6. **Decide** — decision lo, best option chuno
7. **Implement & Monitor** — decision apply karo, results track karo → phir se cycle shuru

**Circular process** — ek baar decision lene se kaam nahi khatam hota. Results monitor kiye jaate hain aur feedback se cycle repeat hoti hai.

**Challenges:**
1. **Data Quality** — kharab data se kharab decisions
2. **Data Security & Privacy** — sensitive data ka security
3. **Cost** — technology aur skilled people ka cost
4. **Over-reliance on Data** — data sabse nahi batata, human judgment bhi important hai
5. **Skills Gap** — data analysis ki skills ki kami
6. **Resistance to Change** — decisions change nahi chahte

**Diagram:** Refer to the Data-Driven Decision Cycle diagram (circular 7-step process).`,
    diagram: 'cycle',
    image: null,
    importance: '⭐⭐',
  },
  // ============================================================
  // Cyber Security Unit 1 — 17 Most Important 6-Mark Questions
  // ============================================================
  {
    id: 'cq1',
    subjectId: 'cyber-security',
    topicNumber: '1.1',
    topicTitle: 'Introduction to Cyber Security',
    question: 'Define Cyber Security. Explain its 4 key areas with a suitable diagram.',
    answer: `**Definition:**
Cyber security is the practice of protecting systems, networks, and programs from digital attacks. Ye internet par apne digital assets ko hackers, malware aur online threats se protect karti hai.

**4 Key Areas of Cyber Security:**
1. **Network Security** — computer networks ko protect karti hai. Firewalls, IDS (Intrusion Detection Systems), VPNs ka use karti hai. Network traffic monitor karti hai aur unauthorized access rokti hai.
2. **Application Security** — apps aur software ko protect karti hai. Development ke time security features add karti hai — input validation, authentication, encryption, code reviews.
3. **Information Security** — sensitive data ko protect karti hai. Data encryption, access controls, backup policies ka use karti hai.
4. **Operational Security** — organizational processes ko protect karti hai. Security policies, procedures, guidelines banati hai. Employee training, incident response plans, risk management.

**Diagram:** Refer to the Cyber Security Framework diagram showing 4 key areas — Network, Application, Information, Operational Security — all working together.`,
    diagram: 'cyber-framework',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq2',
    subjectId: 'cyber-security',
    topicNumber: '1.2',
    topicTitle: 'Need, Importance and Challenges in Cyber Security',
    question: 'Why is cyber security important? Explain the major challenges faced in implementing cyber security.',
    answer: `**Importance of Cyber Security:**
1. **Infrastructure Protection** — power grids, transportation, hospitals sab online hain. Hack ho toh nation halt ho sakti hai.
2. **Economic Stability** — cyber attacks financial markets ko affect karte hain. Companies ka loss millions mein ho sakta hai.
3. **National Security** — defense systems, government databases cyber attacks ke target ho sakte hain.
4. **Individual Privacy** — personal data, bank details, messages sab protect hona chahiye.

**Major Challenges:**
1. **Rapidly Evolving Threats** — hackers ka techniques continuous badalte hain. Security measures ek time fixed hoti hai, but hackers naya bypass dhundh lete hain.
2. **Legacy Systems** — purane systems (30+ years old) abhi bhi use hote hain. Ye modern security tools nahi support karte.
3. **Skills Gap** — cyber security experts ki demand high hai, supply kam hai.
4. **Balancing Security & Usability** — zyada security strict ho toh users iske use karna band dete hain. Ek balance maintain karna zaroori hai.

**Diagram:** Refer to the Cyber Security Framework diagram and the Importance/Challenges content.`,
    diagram: 'cyber-framework',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq3',
    subjectId: 'cyber-security',
    topicNumber: '1.3',
    topicTitle: 'Cyberspace',
    question: 'Define Cyberspace. Explain its layered structure with a diagram.',
    answer: `**Definition:**
Cyberspace ek global virtual environment hai jahan digital communication aur human activity hoti hai. Ye internet, cellular networks, aur connected devices par based hai. Cyberspace ek physical jagah nahi hai — ye digital networks ka wo space hai jahan information create, store, share aur protect hoti hai.

**Layers of Cyberspace:**
1. **Physical Layer** — servers, routers, switches, undersea cables, satellites. Ye digital data ko physically transmit aur store karte hain.
2. **Logical Layer** — software, protocols (TCP/IP, HTTP, DNS), applications. Ye data ko process, route, aur protect karta hai.
3. **Social Layer** — users, communities, human activity. Social media, online transactions, digital communication.
4. **Security Layer** — firewalls, encryption, authentication. Ye cyberspace ko protect karti hai.

**Significance:** Cyberspace global reach hai — borders ko cross karta hai. Modern economy, society, national security sab cyberspace par depend hain.

**Diagram:** Refer to the Cyberspace Layered Structure diagram — 4 layers (Physical → Logical → Security → Social).`,
    diagram: 'cyberspace-layers',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq4',
    subjectId: 'cyber-security',
    topicNumber: '1.4',
    topicTitle: 'Cyber Threats',
    question: 'Describe the different types of cyber threats with examples. Add a diagram.',
    answer: `**Types of Cyber Threats:**
1. **Malware** — malicious software including viruses, worms, trojans, ransomware. Ye system ko damage karta hai, data corrupt karta hai. Example: Trojan horse fake software ban ke system mein enter karta hai.
2. **Phishing** — fraudulent emails/messages legitimate sources jaise dikhte hain. Users se sensitive information capture karte hain.
3. **Ransomware** — system ko lock kar deta hai, data ko encrypt karta hai. Ransom ke liye paise demand karta hai.
4. **DDoS (Distributed Denial of Service)** — multiple computers se ek website pe traffic flood kar deta hai. Website overload ho jati hai, users ko access nahi milta.
5. **Man-in-the-Middle (MITM)** — hacker communication ke beech mein aa jata hai. Data intercept aur modify karta hai.
6. **Insider Threats** — organisation ke own employees data leak karte hain.
7. **Zero-Day Exploits** — security vulnerabilities jinka software maker ko bhi pata nahi. Hackers exploit kar dete hain.

**Diagram:** Refer to the Types of Cyber Threats diagram showing 6 major categories — Malware, Phishing, Ransomware, DDoS, MITM, Zero-Day.`,
    diagram: 'cyber-threats',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq5',
    subjectId: 'cyber-security',
    topicNumber: '1.5',
    topicTitle: 'Cyber-warfare',
    question: 'What is cyber-warfare? Explain its three levels with examples. Add a diagram.',
    answer: `**Definition:**
Cyber-warfare ka matlab hai nation-states ka digital attacks ka use karna — dusre nation ke critical infrastructure, computer systems, aur networks ko disrupt, damage, ya destroy karne ke liye. Ye traditional warfare ka digital form hai jo cyberspace mein hota hai.

**Three Levels of Cyber-warfare:**
1. **Cyber Espionage** — dusre country ke sensitive information chura lena — defense plans, government secrets, economic data. Ye spy ka digital form hai.
2. **Cyber Sabotage** — physical infrastructure ko damage karna — power grids hack karna, transportation systems disrupt karna. Stuxnet (Iran nuclear program) iska famous example hai.
3. **Full Cyber-Warfare** — critical systems ko completely disrupt karna — communication networks down karna, financial systems collapse karna.

**Impact on National Security:**
1. Power grid attacks — electricity supply disrupt ho sakta hai.
2. Financial system disruption — banks, stock markets hack ho sakte hain.
3. Defense systems — military communication aur weapon systems target ho sakte hain.

**APTs:** Advanced Persistent Threats — long-term, targeted, state-sponsored attacks. Ye years tak chalti hain, hard to detect.

**Diagram:** Refer to the Cyber-warfare Levels diagram — Espionage → Sabotage → Full War (escalating severity).`,
    diagram: 'cyber-warfare',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq6',
    subjectId: 'cyber-security',
    topicNumber: '1.6',
    topicTitle: 'CIA Triad',
    question: 'Explain the CIA Triad — Confidentiality, Integrity, and Availability — with examples. Add a diagram.',
    answer: `**CIA Triad — 3 Core Security Principles:**
1. **Confidentiality** — sensitive data ko unauthorized users se bachaana. Data sirf authorized persons tak hi reachable hona chahiye.
   - *Methods:* Encryption, passwords, access controls, biometric authentication.
   - *Example:* Bank account details sirf account holder aur authorized bank employees ko dekhne milna chahiye.
   - *Breach:* Data leak, unauthorized access, password cracking.

2. **Integrity** — data accurate, consistent, aur tamper-free rakhna. Data modify hona authorized persons hi kar sakte hain.
   - *Methods:* Checksums, digital signatures, version controls, hash functions.
   - *Example:* Transaction details correct hona chahiye — kisi na kisi change nahi karna chahiye.
   - *Breach:* Data corruption, unauthorized modification, man-in-the-middle attacks.

3. **Availability** — systems aur data authorized users ke liye available rakhna. Users ko zaroorat ke time access milna chahiye.
   - *Methods:* Redundancy, backups, DDoS protection, failover systems.
   - *Example:* Bank website 24/7 available hona chahiye — DDoS attack se down nahi hona chahiye.
   - *Breach:* System down, service disruption, DDoS attacks, hardware failure.

**Importance:** Ye 3 principles mil kar ek complete security model banate hain. Har security measure inme ek ya zyada principles ensure karti hai.

**Diagram:** Refer to the CIA Triad diagram — 3 circles (C-I-A) around a central security model.`,
    diagram: 'cia-triad',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq7',
    subjectId: 'cyber-security',
    topicNumber: '1.7',
    topicTitle: 'Cyber Terrorism',
    question: 'Define Cyber Terrorism. Describe its forms and impact with a diagram.',
    answer: `**Definition:**
Cyber terrorism ka matlab hai terrorism ko digital form mein use karna — hackers critical infrastructure, government systems, aur public services ko attack karte hain taaki mass disruption, fear, aur panic paida ho. Ye digital attacks se physical world mein damage karti hai.

**Forms of Cyber Terrorism:**
1. **Infrastructure Attacks** — power grids, water supply, transportation systems hack karna.
2. **Government System Attacks** — official websites hack karna, citizen data leak karna, election systems disrupt karna.
3. **Social Media Propaganda** — fake news, hate speech spread karna, public fear paida karna.
4. **Ransomware on Public Services** — hospitals, municipal services ko lock karke ransom demand karna.

**Impact:**
1. **Public Fear & Panic** — citizens feel unsafe digitally.
2. **Economic Disruption** — businesses stop, services halt.
3. **Loss of Life (indirect)** — hospital systems down, emergency services affected.
4. **National Security Threat** — critical infrastructure affected.

**Diagram:** Refer to the Cyber Terrorism diagram — Motive → Attack → Targets → Impact cycle.`,
    diagram: 'cyber-terrorism',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq8',
    subjectId: 'cyber-security',
    topicNumber: '1.8',
    topicTitle: 'Cyber Security of Critical Infrastructure',
    question: 'What is critical infrastructure? Explain the sectors that need protection with a diagram.',
    answer: `**Definition:**
Critical infrastructure wo physical aur digital systems hain jin par nation ka survival depend karta hai — power, water, transport, healthcare, finance, telecom. Hack ho toh country ek dam halt ho sakti hai.

**Critical Infrastructure Sectors:**
1. **Energy Sector** — power grids, oil refineries, nuclear plants.
2. **Water Supply** — treatment plants, reservoirs, distribution systems.
3. **Transportation** — railways, airports, shipping ports, traffic systems.
4. **Healthcare** — hospitals, patient records, medical devices.
5. **Finance** — banks, stock exchanges, payment systems.
6. **Telecom** — communication networks, internet backbone.

**Why Protection Zaroori Hai:**
- Attack on any one sector cascading effect daal sakta hai — power down toh sab systems down.
- 24/7 dependency — nation ka har kaam in systems par depend karta hai.
- Interconnected systems — ek hack se multiple sectors affect ho sakte hain.

**Diagram:** Refer to the Critical Infrastructure diagram — 6 sectors connected to a central "Nation" hub.`,
    diagram: 'critical-infra',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq9',
    subjectId: 'cyber-security',
    topicNumber: '1.9',
    topicTitle: 'Cyber Security — Organizational Implications',
    question: 'Explain the organizational implications of cyber security attacks with a diagram.',
    answer: `**Organizational Implications of Cyber Security:**
1. **Data Loss** — customer information, financial records, trade secrets chur jaate hain.
2. **Financial Loss** — ransom payments, revenue loss, legal fines.
3. **Reputation Damage** — customer trust lost, brand damage, market value down.
4. **Operational Disruption** — systems down, employees blocked, work halted.
5. **Legal Compliance** — IT Act violations, fines, lawsuits.
6. **National Impact** — critical infrastructure affected, economy hit.

**Business Impact:**
- Customer trust aur reputation sabse important hai.
- Legal compliance mandatory hai — IT Act violations heavy fines leta hai.
- Operational disruption se productivity down jata hai.

**Building Security-Aware Culture:**
- Employee training zaroori hai.
- Security policies clear aur enforced honi chahiye.
- Incident response plans hone chahiye.

**Diagram:** Refer to the Organizational Security Implications diagram — 6 areas of impact (Data Loss, Financial, Reputation, Operational, Legal, National).`,
    diagram: 'org-security',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq10',
    subjectId: 'cyber-security',
    topicNumber: '1.10',
    topicTitle: 'Need for a Comprehensive Cyber Security Policy and Governance',
    question: 'Why is a cyber security policy important? Explain the components of a security policy framework with a diagram.',
    answer: `**Definition:**
Security policy ek documented rules aur guidelines hai jo organization apne digital assets ko protect karne ke liye follow karti hai. Governance ka matlab hai policy ko implement aur monitor karne ka process.

**Components of Security Policy:**
1. **Acceptable Use Policy** — employees ko bataya jata hai ki system ka use kaise karna hai.
2. **Access Control Policy** — kis ko kin resources ka access hai — authentication, authorization.
3. **Incident Response Policy** — attack ho toh kya karna hai — steps, reporting, escalation.
4. **Compliance Policy** — legal aur regulatory requirements follow karne ka policy.

**Governance Elements:**
1. **National Layer** — IT Act, National Policy, Cyber Crime Laws, Standards (BIS).
2. **Organizational Layer** — Security Policy, Risk Management, Incident Response Plan, Audit & Compliance.
3. **Individual Layer** — Password hygiene, Phishing awareness, Safe browsing, Personal data care.

**Why Zaroori Hai:**
- Ek clear policy se sab employees ko pata chalta hai ki kya allowed hai aur kya nahi.
- Compliance mandatory hai — IT Act violations heavy fines leta hai.
- Governance se security measures monitored aur improved hoti hain.

**Diagram:** Refer to the Policy & Governance Framework diagram — 3 layers (National → Organizational → Individual).`,
    diagram: 'policy-framework',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq11',
    subjectId: 'cyber-security',
    topicNumber: '1.11',
    topicTitle: 'Need for a Nodal Authority',
    question: 'What is a nodal authority? Explain the functions of CERT-In with a diagram.',
    answer: `**Definition:**
Nodal authority ek central organization hai jo cyber security incidents ko handle, coordinate, aur respond karti hai. India mein CERT-In (Computer Emergency Response Team — India) national nodal agency hai.

**Functions of CERT-In:**
1. **Incident Response** — cyber attacks report kare toh CERT-In immediate response provide karta hai. Ye attacks ko contain, eradicate, aur recover karta hai.
2. **Threat Intelligence** — CERT-In new threats, vulnerabilities, aur attack patterns monitor karta hai. Ye alerts issue karta hai taaki organizations prepare reh sakein.
3. **Policy Coordination** — government, organizations, aur individuals ke beech coordination karta hai. Security guidelines aur best practices share karta hai.

**Why Zaroori Hai:**
- Ek central authority se incident response fast aur organized hota hai.
- Threat intelligence shared karne se sab organizations ek saath prepare reh sakte hain.
- International cooperation ke liye national focal point hota hai.

**Structure:**
- Government (ministries, central agencies) → report incidents
- Organizations (banks, ISPs, companies) → report incidents
- Individuals (citizens) → report incidents
- CERT-In → coordinates, responds, issues alerts

**Diagram:** Refer to the Nodal Authority diagram — CERT-In at top, government, organizations, individuals reporting to it.`,
    diagram: 'nodal-authority',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq12',
    subjectId: 'cyber-security',
    topicNumber: '1.12',
    topicTitle: 'Need for an International Convention on Cyberspace',
    question: 'Why is an international convention on cyberspace needed? Explain the Budapest Convention with a diagram.',
    answer: `**Why International Convention Zaroori Hai:**
1. **Cyberspace Global Hai** — cyberspace borders ko cross karta hai. Ek country ke rules dusre country ke users pe apply nahi hote.
2. **Cross-Border Cybercrime** — hackers ek country se dusre country ke systems attack karte hain. International cooperation zaroori hai.
3. **Shared Threat Intelligence** — ek country ko threats ka pata hai toh dusre countries ko bhi batana chahiye.
4. **Standardized Rules** — sab countries ke liye common rules hone se confusion kam hoga.

**Budapest Convention on Cybercrime:**
- 2001 mein bane — pehla international treaty specifically cybercrime ke liye.
- 38 countries ne sign kiya — Europe, Americas, aur kuch Asian countries.
- Cybercrime ke liye common definitions aur rules provide karta hai.
- Cross-border investigation aur cooperation easy banata hai.
- Human rights, democracy, aur rule of law ko respect karta hai.

**India's Position:**
- India Budapest Convention ka signatory nahi hai.
- India apne IT Act 2000 aur amendments par kaam karta hai.
- But international cooperation ke liye UN aur other forums mein support karta hai.

**Diagram:** Refer to the International Cyber Conventions diagram — UN, Buenos Aires, Tallinn, Madrid initiatives.`,
    diagram: 'international-cyber',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq13',
    subjectId: 'cyber-security',
    topicNumber: '1.13',
    topicTitle: 'Introduction to Cyber Laws',
    question: 'Define Cyber Laws. Explain the scope and areas covered by cyber laws with a diagram.',
    answer: `**Definition:**
Cyber laws wo laws hain jo cyberspace, internet, aur digital technology se related hain. Ye cybercrime, data protection, e-commerce, digital signatures, aur internet governance ko cover karti hain. India mein IT Act 2000 (amended 2008) sabse important cyber law hai.

**Scope of Cyber Laws:**
1. **Data Protection aur Privacy** — personal data ko protect karna. Consent ke bina data collect nahi karna.
2. **E-Commerce aur Digital Transactions** — online transactions ki validity, digital contracts, payment systems.
3. **Cyber Crimes aur Penalties** — hacking, phishing, identity theft, ransomware, obscenity.
4. **Intellectual Property** — digital piracy, software copyright, patents.

**Why Zaroori Hai:**
- Digital world grow kar raha hai — rules chahiye taaki safe environment ho.
- Users ko protection chahiye — personal data, financial transactions.
- Cybercrimes rokne ke liye penalties zaroori hain.
- Trust aur confidence digital economy ke liye zaroori hai.

**Diagram:** Refer to the Cyber Laws diagram — 4 pillars (Definition, Scope, Purpose, Enforcement).`,
    diagram: 'cyber-laws',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq14',
    subjectId: 'cyber-security',
    topicNumber: '1.14',
    topicTitle: 'Key Principles of Cyber Laws',
    question: 'Explain the key principles of cyber laws with examples. Add a diagram.',
    answer: `**Key Principles of Cyber Laws:**
1. **Legality** — all digital activity laws ke under aana chahiye. Rules clear aur enforceable hone chahiye.
2. **Proportionality** — response threat level ke hisaab se hona chahiye. Ek choti attack pe heavy penalty nahi dena chahiye.
3. **Data Protection** — personal data protect hona chahiye. Consent ke bina data collect nahi karna.
4. **Cooperation** — cross-border enforcement zaroori hai. Cybercrime international problem hai.
5. **Accountability** — violators ko legal action face karna chahiye. Laws bina enforcement bekaar hain.
6. **Transparency** — laws aur policies public honi chahiye. Users ko pata hona chahiye ki rules kya hain.

**Examples:**
- IT Act 2000 — India ka pehla cyber law. Digital signatures, e-commerce validity, cybercrime penalties.
- GDPR — Europe ka data protection law. Personal data consent aur protection.
- Budapest Convention — international cybercrime cooperation.

**Diagram:** Refer to the Key Principles of Cyber Law diagram — 6 principles in circles (Legality, Proportionality, Data Protection, Cooperation, Accountability, Transparency).`,
    diagram: 'law-principles',
    image: null,
    importance: '⭐⭐',
  },
  {
    id: 'cq15',
    subjectId: 'cyber-security',
    topicNumber: '1.15',
    topicTitle: 'Overview of IT Act 2000',
    question: 'Describe the IT Act 2000 — its key provisions and importance. Add a diagram.',
    answer: `**IT Act 2000 — Overview:**
- India ka pehla cyber law — 9 June 2000 pass hua, 17 October 2000 effective hua.
- Computer aur digital transactions ko legal recognition diya.
- Cybercrime ke liye penalties banaye.

**Key Provisions:**
1. **Digital Signatures** — Section 3 aur 5: Digital signatures ki legal validity di. Secure digital transactions ka base bana.
2. **E-Commerce** — Section 4: Electronic records aur digital contracts ki legal validity di. Paper ki zaroorat nahi.
3. **Cyber Crimes** — Sections 65, 66, 72, 74: Hacking, fraud, obscenity ke liye penalties.
   - Section 65: Tampering with source code — 3 years jail + ₹20,000 fine.
   - Section 66: Computer-related offences — 3 years jail + ₹500,000 fine.
   - Section 72: Breach of confidentiality — 2 years jail + ₹100,000 fine.
   - Section 67: Publishing obscene material — 5 years jail + ₹1,00,000 fine.

**Importance:**
- Digital transactions ko legal backing di.
- Users ko cybercrime se protection di.
- Digital economy ke liye trust paida kiya.

**Diagram:** Refer to the IT Act 2000 Overview diagram — 3 pillars (Validity, Security, Governance) and key sections.`,
    diagram: 'it-act-2000',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq16',
    subjectId: 'cyber-security',
    topicNumber: '1.16',
    topicTitle: 'IT Act 2000 — Key Provisions',
    question: 'Explain the important provisions of IT Act 2000 with their penalties. Add a diagram.',
    answer: `**IT Act 2000 — Key Provisions:**

**Section 65 — Tampering with Source Code:**
- Computer source code ko intentionally alter ya destroy karna.
- Penalty: Imprisonment up to 3 years + Fine up to ₹20,000.

**Section 66 — Computer-Related Offences:**
- Hacking, unauthorized access, data theft, computer-related fraud.
- Penalty: Imprisonment up to 3 years + Fine up to ₹500,000.

**Section 72 — Breach of Confidentiality:**
- Confidential information leak karna — unauthorized access se.
- Penalty: Imprisonment up to 2 years + Fine up to ₹100,000.

**Section 10A — Validity of E-Transactions:**
- Electronic records aur digital contracts ki legal validity di.
- No paper needed — digital transactions legally valid.

**Section 43A — Compensation for Data Breach:**
- Organization negligently sensitive personal data protect nahi karti toh compensation dena padega.

**Section 67 — Publishing Obscene Material:**
- Obscene material publish karna electronic form mein.
- Penalty: Imprisonment up to 5 years + Fine up to ₹1,00,000 (pehli conviction).

**Diagram:** Refer to the IT Act Provisions diagram — 6 key sections with penalties (red = criminal, blue = legal validity, purple = civil).`,
    diagram: 'it-act-provisions',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq17',
    subjectId: 'cyber-security',
    topicNumber: '1.17',
    topicTitle: 'IT Act 2008 Amendments',
    question: 'Explain the key amendments made to the IT Act in 2008 with a diagram.',
    answer: `**IT Act 2008 Amendments — Key Changes:**

**1. Data Protection:**
- Personal data ko legal protection diya.
- Consent required for data collection.
- Sensitive personal data define kara — Section 43A.

**2. Cyber Crime:**
- Naye offences add kiye — identity theft, phishing, child pornography, cyber stalking.
- Penalties increase karke strict banaye.

**3. Borderless Offence:**
- Act apply karta hai even if offence India se bahar committed hua hai, agar target India ke device ya system hai.

**4. Enforcement:**
- Police ko stronger powers di — cyber cells, investigation tools.
- Cyber forensics ka legal recognition.

**5. Compensation:**
- Section 43A — data breach ka compensation.
- Organizations negligently data protect nahi karti toh damages dena padega.

**6. Sensitive Data:**
- Section 43A — sensitive personal data define kara — medical records, financial data, biometric data.

**Why Important:**
- 2008 amendment IT Act 2000 ko modern cyber threats ke liye update kiya.
- Data protection ko legal status diya.
- Borderless offences ko cover kiya.
- Enforcement aur compensation mechanisms strong banaye.

**Diagram:** Refer to the IT Act 2008 Amendments diagram — 6 key changes (Data Protection, Cyber Crime, Borderless, Enforcement, Compensation, Sensitive Data).`,
    diagram: 'it-act-amendments',
    image: null,
    importance: '⭐⭐⭐',
  },

  // ========================================================
  // UNIT 2 — Cybercrimes and Hacking
  // ========================================================
  {
    id: 'cq18',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What are cyber-attacks and vulnerabilities? Explain the different types of cyber-attacks with examples.',
    answer:
      '**Cyber-Attack Definition:**\nA cyber-attack is a deliberate exploitation of a system, network, or device vulnerability to gain unauthorized access, cause damage, or steal data. Attackers use various techniques to exploit weaknesses in systems, applications, or human behavior.\n\n**Vulnerability Definition:**\nA vulnerability is a weakness or flaw in a system, application, or process that can be exploited by an attacker to cause harm or gain unauthorized access. Vulnerabilities can exist in software, hardware, network configurations, or human practices.\n\n**Types of Cyber-Attacks:**\n\n1. **Malware Attacks** — Malicious software (viruses, worms, Trojans, ransomware) system mein install hota hai. Attackers system control lena chahte hain. Example: WannaCry ransomware attack (2017).\n\n2. **Phishing Attacks** — Attackers fake emails, messages, ya websites bana ke users ke sensitive information churate hain. Users ko trick karte hain — login credentials, bank details leak karwa dete hain. Example: Fake banking website login pages.\n\n3. **Man-in-the-Middle (MITM) Attacks** — Attackers victim aur server ke beech intercept kar dete hain. Communication sunte hain aur modify karte hain. Public Wi-Fi networks par common hai. Example: Attackers Wi-Fi traffic intercept karke passwords churate hain.\n\n4. **Denial-of-Service (DoS/DDoS) Attacks** — Attackers multiple computers se victim server par request flood karte hain. Server crash ho jata hai — legitimate users access nahi kar paate. Example: DDoS attack on Dyn (2016).\n\n5. **SQL Injection** — Attackers application ke input fields mein malicious SQL code daal dete hain. Database query manipulate ho jata hai. Sensitive data leak ho jata hai. Example: OWASP Top 10 vulnerability.\n\n6. **Cross-Site Scripting (XSS)** — Attackers malicious scripts website mein inject karte hain. Other users ke browser mein scripts run hote hain. Cookie theft, session hijacking. Example: Facebook XSS vulnerability (2018).\n\n7. **Credential Stuffing** — Stolen credentials (from data breaches) use karke multiple accounts hack karte hain. Users same password reuse karte hain toh attack easy ho jata hai. Example: 500M+ Yahoo accounts breach (2014).\n\n8. **Zero-Day Attacks** — Unknown software vulnerability exploit karte hain. Patch available nahi hota. Attackers vulnerability exploit karte hain before vendor patch lanch kare. Example: Stuxnet attack on nuclear facilities.\n\n9. **Social Engineering** — Psychological manipulation karke users se sensitive information obtain karte hain. Phishing, pretexting, baiting. Humans weakest link hote hain. Example: Fake IT support call.\n\n10. **Ransomware** — Malware system lock kar deta hai. Data encrypt kar deta hai. Decryption key ke liye ransom demand karta hai. Example: WannaCry, NotPetya.\n\n**Attack Lifecycle:**\n1. Reconnaissance — Target information gather karna\n2. Weaponization — Malicious code prepare karna\n3. Delivery — Attack tool deliver karna\n4. Exploitation — Vulnerability exploit karna\n5. Installation — Malware install karna\n6. Command & Control — Remote access establish karna\n7. Actions on Objectives — Data theft, damage\n\n**Diagram:** Refer to the Cyber-Attacks Overview diagram — attack lifecycle, vulnerability types, attack classification.',
    diagram: 'cyber-attacks-overview',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq19',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is malware? Explain the different types of malware including spyware and sniffing attacks.',
    answer:
      '**Malware Definition:**\nMalware (malicious software) is a program or code written to damage, disrupt, or gain unauthorized access to computer systems. Malware includes viruses, worms, Trojans, ransomware, spyware, adware, rootkits, and more.\n\n**Types of Malware:**\n\n1. **Virus** — Self-replicating malware jo attachment ya file ke saath spread hota hai. Host program mein attach ho jata hai. Jab file run hota hai, virus spread hota hai. Computer slow kar deta hai, file corruption karta hai.\n\n2. **Worm** — Self-replicating malware jo network se spread hota hai. Host file attach nahi hota. Network vulnerabilities exploit karke spread karta hai. Email attachments, network shares se spread karta hai.\n\n3. **Trojan Horse** — Malware jo legitimate software ki tarah dikhta hai. Users download karte hain — malicious software install hota hai. Backdoor open kar deta hai. Remote access allow karta hai.\n\n4. **Ransomware** — Malware jo system lock kar deta hai. Files encrypt kar deta hai. Decryption key ke liye ransom demand karta hai. WannaCry, CryptoLocker common examples.\n\n5. **Spyware** — Hidden software jo user activity monitor karta hai. Keystrokes record karta hai. Passwords, credit card numbers churata hai. Internet usage track karta hai. Adware, keyloggers spyware ke subtypes hain.\n\n6. **Adware** — Automatically advertisements display karta hai. Pop-up ads, banner ads. User activity track karta hai — targeted ads show karta hai. Revenue generation ka mode hai.\n\n7. **Rootkit** — Stealthy malware jo OS kernel level modify karta hai. System se hide karta hai. Antivirus detect nahi kar paata. Rootkits powerful malware hain — difficult to detect.\n\n8. **Fileless Malware** — No executable file. Memory ya registry mein hide hota hai. PowerShell, WMI abuse karta hai. Traditional antivirus detect nahi kar paata.\n\n9. **Botnet Malware** — Multiple compromised systems control karta hai. Zombie systems banata hai. DDoS attacks, spam, cryptocurrency mining kare.\n\n10. **Wiper Malware** — Data destroy karta hai. Files encrypt nahi karta — permanently delete karta hai. Disk wipe karta hai. Data destruction ka purpose hai.\n\n**Spyware:**\n- User activity monitor karta hai — browsing history, keystrokes, passwords.\n- Personal information collect karta hai.\n- System slowdown karta hai.\n- Examples: Pegasus spyware, FinSpy.\n\n**Sniffing Attacks:**\n- Network traffic capture karta hai.\n- Data packets read karta hai.\n- Usernames, passwords, sensitive data extract karta hai.\n- Wired aur wireless networks par possible hai.\n- Tools: Wireshark, dsniff, tcpdump.\n- Prevention: Encryption (HTTPS, WPA3), VPN use karna.\n\n**Diagram:** Refer to the Threats — Malware, Spyware, Sniffing diagram — malware types, spyware behavior, sniffing attack flow.',
    diagram: 'threats-malware-spyware-sniffing',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq20',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'Explain the process of gaining unauthorized access to a computer system. What are the common access methods?',
    answer:
      '**Gaining Access Definition:**\nGaining unauthorized access is the process by which attackers exploit vulnerabilities to enter a computer system without permission. This is the first major phase of a cyber-attack after reconnaissance.\n\n**Methods of Gaining Access:**\n\n1. **Password Cracking**\n- Weak passwords brute-force ya dictionary attacks se crack karna.\n- Password guessing, password reset attacks.\n- Tools: John the Ripper, Hashcat, Hydra.\n- Prevention: Strong password policies, MFA, password managers.\n\n2. **Software Exploits**\n- Known vulnerabilities in software exploit karna.\n- Patch nahi lagae hue systems attack karna.\n- Example: EternalBlue exploit — Windows vulnerability.\n- Tools: Metasploit framework.\n- Prevention: Regular patching, vulnerability scanning.\n\n3. **Social Engineering**\n- Humans manipulate karke credentials obtain karna.\n- Phishing, pretexting, baiting, quid pro quo.\n- Phone calls, emails, messages through fake identities.\n- Example: CEO fraud — fake executive email.\n- Prevention: Employee training, verification protocols.\n\n4. **Credential Theft**\n- Stolen credentials use karna.\n- Data breaches se leaked credentials use karna.\n- Credential stuffing — multiple sites par same credentials test karna.\n- Example: LinkedIn breach (100M+ passwords).\n- Prevention: Unique passwords, password managers, MFA.\n\n5. **Network-Based Attacks**\n- Network services exploit karna — SMB, RDP, FTP.\n- Unsecured services attack karna.\n- Port scanning, service enumeration.\n- Tools: Nmap, Nessus.\n- Prevention: Firewall, network segmentation.\n\n6. **Physical Access**\n- Unlocked computers, USB drives, physical access exploit karna.\n- Shoulder surfing — screens monitor karna.\n- Malicious USB drives plug karna.\n- Prevention: Physical security, USB blocking.\n\n7. **Web Application Attacks**\n- SQL injection, XSS, CSRF.\n- Application vulnerabilities exploit karna.\n- Input validation bypass karna.\n- Prevention: Secure coding, WAF, input sanitization.\n\n8. **Wireless Attacks**\n- Wi-Fi networks attack karna.\n- WEP/WPA2 vulnerabilities exploit karna.\n- Wardriving — vulnerable networks find karna.\n- Tools: Aircrack-ng.\n- Prevention: WPA3, strong Wi-Fi passwords.\n\n**Attack Chain:**\n1. Reconnaissance — Information gather karna\n2. Scanning — Vulnerabilities find karna\n3. Gaining Access — Entry karna\n4. Maintaining Access — Persistence establish karna\n\n**Diagram:** Refer to the Gaining Access diagram — 4 main access methods, attack chain, vulnerabilities.',
    diagram: 'gaining-access',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq21',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is privilege escalation? Explain vertical and horizontal privilege escalation with examples.',
    answer:
      '**Privilege Escalation Definition:**\nPrivilege escalation is the process of obtaining higher-level permissions on a system than originally intended. Attackers exploit vulnerabilities to gain elevated access — admin, root, or system-level privileges.\n\n**Types of Privilege Escalation:**\n\n1. **Vertical Privilege Escalation (Privilege Elevation)**\n- Lower-privilege user higher-level access obtain karta hai.\n- Normal user admin ya root access obtain karta hai.\n- OS kernel vulnerabilities exploit karta hai.\n- Example: Buffer overflow attacks.\n- Tools: LinPEAS, WinPEAS.\n- Prevention: Least privilege, regular patching, privilege monitoring.\n\n2. **Horizontal Privilege Escalation**\n- Same-level access different user account obtain karta hai.\n- Normal user same-level access another user obtain karta hai.\n- Another user\'s account hack karta hai — same privilege level.\n- Example: Attackers other users\' sessions hijack karte hain.\n- Prevention: Unique credentials, MFA, session management.\n\n**Vertical Escalation Methods:**\n\n1. **Kernel Vulnerabilities**\n- OS-level vulnerabilities exploit karna.\n- Kernel-level exploits system-wide access dete hain.\n- Example: Dirty COW vulnerability (Linux).\n- Prevention: Regular kernel updates, SELinux.\n\n2. **Application Vulnerabilities**\n- Application vulnerabilities exploit karna.\n- Buffer overflows, format string attacks.\n- Application admin privileges obtain karta hai.\n- Prevention: Secure coding, input validation.\n\n3. **Misconfigured Permissions**\n- Weak file/directory permissions exploit karna.\n- SUID/SGID binaries abuse karna.\n- Example: /usr/bin/passwd root access allow karta hai.\n- Prevention: Proper permission settings, regular audits.\n\n4. **Password Attack**\n- Admin password crack karna.\n- Brute force, dictionary attacks.\n- Credential theft — admin credentials steal karna.\n- Prevention: Strong passwords, MFA, rate limiting.\n\n5. **Service Misconfiguration**\n- Running services with elevated privileges.\n- Misconfigured services exploit karna.\n- Example: Misconfigured SSH keys.\n- Prevention: Service hardening, regular configuration audits.\n\n**Horizontal Escalation Methods:**\n\n1. **Session Hijacking**\n- Other users\' sessions intercept karna.\n- Cookie theft, session ID guessing.\n- Example: XSS attack se cookie steal karna.\n- Prevention: HTTPS, secure cookies, session regeneration.\n\n2. **Credential Theft**\n- Other users\' credentials obtain karna.\n- Keyloggers, phishing attacks.\n- Prevention: MFA, antivirus, user education.\n\n3. **Account Takeover**\n- Password reset vulnerabilities exploit karna.\n- Other accounts access karna.\n- Example: Weak password reset questions.\n- Prevention: Strong password reset policies.\n\n**Diagram:** Refer to the Escalating Privileges diagram — vertical aur horizontal paths, escalation methods.',
    diagram: 'escalating-privileges',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq22',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'How do attackers execute applications on a compromised system? Explain different execution techniques.',
    answer:
      '**Application Execution Definition:**\nAfter gaining access and escalating privileges, attackers execute malicious applications or commands on the compromised system. This allows them to run malicious code, download additional tools, and carry out further attacks.\n\n**Execution Techniques:**\n\n1. **Binary Execution**\n- Malicious binaries download aur execute karna.\n- Reverse shells establish karna.\n- Attacker tools system mein run karna.\n- Example: Metasploit payloads.\n- Prevention: Application whitelisting, endpoint detection.\n\n2. **Script Execution**\n- PowerShell, Bash, Python scripts execute karna.\n- Legitimate interpreters misuse karna.\n- Fileless attacks — scripts memory mein run karna.\n- Example: PowerShell Empire framework.\n- Prevention: Script logging, PowerShell constraints, AppLocker.\n\n3. **Code Injection**\n- Running processes mein code inject karna.\n- DLL injection, process hollowing.\n- Legitimate processes use karke malicious code run karna.\n- Example: Process injection techniques.\n- Prevention: Behavior monitoring, integrity checks.\n\n4. **LOLBins (Living Off the Land Binaries)**\n- System tools misuse karna — certutil, bitsadmin, wget, curl.\n- Legitimate tools malicious purposes ke liye use karna.\n- Tools firewall bypass karna, files download karna.\n- Example: certutil URL download karna.\n- Prevention: Tool monitoring, behavior analysis.\n\n5. **Scheduled Tasks**\n- Windows Task Scheduler, Linux cron jobs abuse karna.\n- Malicious scripts schedule karna — persistence.\n- System restarts ke baad execution continue karta hai.\n- Example: Cron job malware execution.\n- Prevention: Task monitoring, regular audits.\n\n6. **Service Manipulation**\n- Windows services manipulate karna.\n- Malicious services create karna — auto-start.\n- Service accounts abuse karna.\n- Example: Service backdoor creation.\n- Prevention: Service audits, privilege restrictions.\n\n7. **Registry Manipulation**\n- Windows Registry modify karna.\n- Run keys use karke auto-execution.\n- Example: HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run.\n- Prevention: Registry monitoring, AppLocker.\n\n8. **In-Memory Execution**\n- Fileless execution — memory mein code run karna.\n- Detect difficult hai — no file creation.\n- Example: Reflective DLL injection.\n- Prevention: Memory monitoring, EDR solutions.\n\n**Defense:**\n1. **Application Whitelisting** — AppLocker, Software Limitations Policies.\n2. **Behavior Monitoring** — EDR solutions, behavior analysis.\n3. **Script Logging** — PowerShell logging, script block logging.\n4. **Memory Protection** — ASLR, DEP, Stack canaries.\n5. **Regular Audits** — Process monitoring, registry audits.\n\n**Diagram:** Refer to the Executing Applications diagram — execution techniques, LOLBins, defense methods.',
    diagram: 'executing-applications',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq23',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'How do attackers hide files and maintain persistence on a compromised system?',
    answer:
      '**Hiding Files Definition:**\nAfter executing malicious code, attackers hide their files to avoid detection and maintain persistence on the compromised system. Hiding techniques include encryption, disguising, rootkits, and steganography.\n\n**Hiding Techniques:**\n\n1. **Encryption**\n- Malicious files encrypt karke hide karna.\n- Encrypted payloads antivirus detect nahi kar paati.\n- Decryption key attacker ke paas rehta hai.\n- Example: Encrypted malware droppers.\n- Prevention: Memory scanning, behavior analysis.\n\n2. **Disguising (Masquerading)**\n- Malicious files legitimate file names mein hide karna.\n- System files copy karke replace karna.\n- Example: malware.exe ko svchost.exe naam se save karna.\n- Prevention: File integrity monitoring, digital signatures.\n\n3. **Rootkit Techniques**\n- Kernel-level stealth — OS se hide karna.\n- Files invisible bana deta hai.\n- System calls intercept karta hai.\n- Example: Stuxnet rootkit.\n- Prevention: Rootkit scanners, secure boot.\n\n4. **Steganography**\n- Malicious code images, audio, ya documents mein hide karna.\n- Files visually same dikhte hain.\n- Example: Malware JPEG images mein hidden.\n- Prevention: Steganography detection tools.\n\n5. **Hidden Directories**\n- System hidden directories mein files save karna.\n- Windows: C:\\Windows\\System32, Linux: /tmp, /dev/shm.\n- Hidden attributes set karna.\n- Prevention: Directory monitoring, hidden file scans.\n\n6. **Memory-Based Persistence**\n- Files memory mein hide karna — no disk footprint.\n- Memory injection techniques use karna.\n- Example: Fileless malware.\n- Prevention: Memory forensics, EDR.\n\n7. **Registry-Based Hiding**\n- Windows Registry mein configurations hide karna.\n- Malicious entries deep registry keys mein save karna.\n- Example: Registry persistence techniques.\n- Prevention: Registry monitoring, regular audits.\n\n**Persistence Mechanisms:**\n\n1. **Bootkits**\n- BIOS/firmware level persistence.\n- System restart ke baad malware load hota hai.\n- Example: LoJax malware.\n- Prevention: Secure boot, UEFI protection.\n\n2. **Scheduled Tasks**\n- Cron jobs (Linux), Task Scheduler (Windows).\n- Automatic execution schedule karna.\n- Example: Cron job backdoor.\n- Prevention: Task monitoring, regular audits.\n\n3. **Service Persistence**\n- Windows services, systemd services.\n- Auto-start services create karna.\n- Example: Service backdoor.\n- Prevention: Service audits, privilege restrictions.\n\n4. **Startup Folder**\n- Login scripts, startup items.\n- User-level aur system-level startup entries.\n- Example: Windows startup folder malware.\n- Prevention: Startup item monitoring.\n\n5. **DLL Hijacking**\n- Legitimate applications hijack karna.\n- Malicious DLLs load karna.\n- Example: Application DLL hijacking.\n- Prevention: DLL search order hardening.\n\n6. **WMI Subscriptions**\n- Windows Management Instrumentation use karke persistence.\n- Event-driven execution — WMI subscriptions.\n- Example: WMI backdoor.\n- Prevention: WMI monitoring.\n\n**Diagram:** Refer to the Hiding Files diagram — hiding techniques, persistence mechanisms, defense methods.',
    diagram: 'hiding-files',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq24',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is covering tracks in cyber attacks? Explain the techniques attackers use to hide their activities.',
    answer:
      '**Covering Tracks Definition:**\nCovering tracks is the phase of a cyber-attack where attackers erase or modify evidence of their activities to avoid detection and attribution. This includes deleting logs, modifying timestamps, and using anti-forensics techniques.\n\n**Covering Tracks Techniques:**\n\n1. **Log Deletion**\n- System logs, application logs delete karna.\n- Windows Event Logs, Linux syslog clear karna.\n- Audit trails erase karna — no evidence.\n- Example: We@W: eventvwr — Windows Event Log clear karna.\n- Prevention: Centralized logging, log protection.\n\n2. **Timestamp Modification (Timestomping)**\n- File timestamps modify karna — creation, access, modification times.\n- Malicious files legitimate timestamps ke saath match karna.\n- Tools: Touch, Systeminner utilities.\n- Example: Touch -d "2020-01-01" malicious_file.\n- Prevention: File integrity monitoring, secure timestamping.\n\n3. **Shadow Copy Deletion**\n- Windows Volume Shadow Copies delete karna.\n- System restore points erase karna.\n- Example: wmic shadowcopy delete.\n- Prevention: Shadow copy protection, backup isolation.\n\n4. **Anti-Forensics Tools**\n- Anti-forensics tools use karna — evidence erase karna.\n- Data wiping tools, file shredders.\n- Tools: CCleaner, SDelete, shred.\n- Example: Secure file deletion.\n- Prevention: Forensic imaging, write blockers.\n\n5. **Registry Modification**\n- Windows Registry modify karna.\n- Last Write Time (LWT) modify karna.\n- Example: Registry key timestamps change karna.\n- Prevention: Registry auditing, change monitoring.\n\n6. **Network Cover Tracks**\n- Network traffic logs clear karna.\n- Firewall logs delete karna.\n- Proxy logs, IDS logs clear karna.\n- Prevention: Network traffic capture, log aggregation.\n\n7. **Memory Forensics Evasion**\n- Memory artifacts clear karna.\n- Memory wiping tools use karna.\n- Malicious code memory clear karke terminate karna.\n- Example: Memory wipe before exit.\n- Prevention: Memory forensics, volatile data capture.\n\n8. **File System Evidence**\n- File system artifacts delete karna.\n- MFT (Master File Table) entries modify karna.\n- Slack space clear karna.\n- Example: File deletion, free space wiping.\n- Prevention: File system forensics, MFT analysis.\n\n9. **Process/Service Evidence**\n- Malicious processes terminate karna.\n- Services stop karke delete karna.\n- Scheduled tasks delete karna.\n- Prevention: Process monitoring, service audits.\n\n10. **Browser History**\n- Browser cache, history, cookies clear karna.\n- Downloaded files delete karna.\n- Example: Browser data clear karna.\n- Prevention: Browser forensics, user activity monitoring.\n\n**Diagram:** Refer to the Covering Tracks diagram — log deletion, timestomping, shadow copy, anti-forensics.',
    diagram: 'covering-tracks',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq25',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What are computer worms? How do they spread and what is their impact?',
    answer:
      '**Worm Definition:**\nA computer worm is a standalone malware program that replicates itself to spread to other computers. Unlike viruses, worms do not need to attach to existing programs. Worms spread through networks, exploiting vulnerabilities.\n\n**Worm Characteristics:**\n\n1. **Self-Replicating**\n- Worm independent program hai.\n- Apne aap copy create karta hai.\n- Other systems spread karta hai.\n\n2. **No Host File Needed**\n- Virus ki tarah host file attach nahi hota.\n- Independently run karta hai.\n\n3. **Network Spread**\n- Network vulnerabilities exploit karta hai.\n- Email, instant messaging, file sharing through spread karta hai.\n\n4. **Bandwidth Consumption**\n- Network traffic increase karta hai.\n- Internet slowdown kar sakta hai.\n\n**Worm Spread Methods:**\n\n1. **Email Attachments**\n- Worm email attachments through spread karta hai.\n- User opens attachment — worm activates.\n- Example: ILOVEYOU worm (2000).\n\n2. **Network Shares**\n- SMB shares, shared directories exploit karta hai.\n- Other computers spread karta hai.\n- Example: Code Red worm.\n\n3. **Software Vulnerabilities**\n- OS ya application vulnerabilities exploit karta hai.\n- Remote code execution vulnerabilities.\n- Example: EternalBlue exploit — WannaCry.\n\n4. **Instant Messaging**\n- IM clients through spread karta hai.\n- Contacts automatically message karna.\n- Example: ICQ worm.\n\n5. **Removable Media**\n- USB drives, external hard drives through spread karta hai.\n- Auto-run features exploit karta hai.\n- Example: Conficker worm.\n\n6. **Peer-to-Peer Networks**\n- P2P file sharing networks through spread karta hai.\n- Shared files contain worm.\n\n**Impact of Worms:**\n\n1. **Network Damage**\n- Massive network traffic — bandwidth consumption.\n- Internet slowdown.\n- Denial-of-Service conditions.\n\n2. **System Damage**\n- Delete files, corrupt data.\n- System instability.\n- Application crashes.\n\n3. **Privacy Violation**\n- Personal information collect karna.\n- Keyloggers install karna.\n- Credential theft.\n\n4. **Backdoor Installation**\n- Backdoors install karna — remote access.\n- Botnet creation.\n- DDoS attacks.\n\n5. **Financial Damage**\n- Extortion — ransomware.\n- Data recovery costs.\n- System repair costs.\n\n**Examples:**\n- **ILOVEYOU (2000)** — Email worm, billions of infections.\n- **Conficker (2008)** — Network worm, millions of computers.\n- **Stuxnet (2010)** — Industrial control system worm.\n- **WannaCry (2017)** — Ransomware worm, EternalBlue exploit.\n\n**Diagram:** Refer to the Worms diagram — replication cycle, spread methods, impact.',
    diagram: 'worms',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq26',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is a Trojan horse? Explain the different types of Trojans and their uses.',
    answer:
      '**Trojan Horse Definition:**\nA Trojan horse is a malware that disguises itself as legitimate software to trick users into installing it. Unlike viruses and worms, Trojans do not self-replicate. They rely on user deception to gain access.\n\n**Characteristics:**\n1. **Disguise** — Legitimate software ki tarah dikhta hai.\n2. **No Self-Replication** — Apne aap copy create nahi karta.\n3. **Social Engineering** — Users ko trick karta hai.\n4. **Payload** — Malicious payload contain karta hai.\n\n**Types of Trojans:**\n\n1. **Remote Access Trojan (RAT)**\n- Attackers remote control of victim\'s system.\n- Backdoor access provide karta hai.\n- File access, command execution.\n- Example: DarkComet, Sub7, NetBus.\n\n2. **Banking Trojan**\n- Financial information target karta hai.\n- Banking credentials, credit card numbers steal karta hai.\n- Form grabbing, keylogging.\n- Example: Zeus, SpyEye.\n\n3. **Worm-like Trojan**\n- Trojan + worm capabilities.\n- Email, network through spread karta hai.\n- Example: Paderu.\n\n4. **Backdoor Trojan**\n- System access provide karta hai.\n- Hidden accounts create karta hai.\n- Example: Back Orifice.\n\n5. **Rootkit Trojan**\n- System hide karta hai.\n- Kernel-level stealth.\n- Example: Nebulet.\n\n6. **Spy Trojan**\n- User activity monitor karta hai.\n- Keystrokes, screen capture, webcam.\n- Example: Pegasus.\n\n7. **Adware Trojan**\n- Advertisements display karta hai.\n- Pop-up ads, banner ads.\n- Revenue generation.\n- Example: Zango.\n\n8. **Launcher Trojan**\n- Other malware download aur install karta hai.\n- Dropper ka kaam karta hai.\n- Example: Installers.\n\n9. **Fake Antivirus Trojan**\n- Fake antivirus software dikhta hai.\n- Users ko scare karta hai — fake threats.\n- Purchase Force — money extortion.\n- Example: FakeAV.\n\n10. **Game/App Trojan**\n- Legitimate game/app ki tarah dikhta hai.\n- Malicious payload contain karta hai.\n- Example: Fake Android games.\n\n**Trojan Installation Methods:**\n1. **Freeware** — Free software bundled with Trojan.\n2. **Pirated Software** — Cracked software Trojans contain karta hai.\n3. **Email Attachments** — Fake attachments through spread karta hai.\n4. **Fake Updates** — Fake software updates.\n5. **Malicious Websites** — Drive-by downloads.\n6. **USB Drives** — Auto-run infected drives.\n\n**Diagram:** Refer to the Trojans diagram — disguise → download → install → backdoor flow, types.',
    diagram: 'trojans',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq27',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is a computer virus? Explain the virus lifecycle and different types of viruses.',
    answer:
      '**Computer Virus Definition:**\nA computer virus is a malicious program that attaches itself to a legitimate program or file and replicates when the host program is executed. Viruses spread from one system to another through infected files.\n\n**Virus Characteristics:**\n1. **Host-Dependent** — Host file attach hota hai.\n2. **Self-Replicating** — Jab host run hota hai, virus copy create karta hai.\n3. **Spread Through** — Infected files, removable media, networks.\n4. **Payload** — Damage, data theft, system disruption.\n\n**Virus Lifecycle:**\n\n1. **Creation**\n- Virus code write karna.\n- Assembly language, high-level languages.\n- Example: Virus generators.\n\n2. **Replication**\n- Host file attach karna.\n- Apne aap copy create karna.\n- Other files infect karna.\n\n3. **Installation**\n- System mein install karna.\n- Registry entries modify karna.\n- Auto-start setup karna.\n\n4. **Detection & Evasion**\n- Antivirus detection avoid karna.\n- Obfuscation, polymorphism.\n- Stealth techniques.\n\n5. **Payload Delivery**\n- Malicious activity execute karna.\n- Data destruction, theft, encryption.\n- Example: Ransomware.\n\n6. **Spread**\n- Other systems infect karna.\n- Network shares, email, USB.\n\n**Types of Viruses:**\n\n1. **File Infector Virus**\n- Executable files infect karta hai.\n- .EXE, .COM files modify karta hai.\n- Jab file run hota hai, virus active hota hai.\n- Example: CIH virus.\n\n2. **Partition Table Virus**\n- Hard disk partition table infect karta hai.\n- Boot sector modify karta hai.\n- System boot nahi karta.\n- Example: Stoned virus.\n\n3. **Macro Virus**\n- Microsoft Office documents infect karta hai.\n- Word, Excel macros manipulate karta hai.\n- Documents through spread karta hai.\n- Example: Concept virus.\n\n4. **Multipartite Virus**\n- Multiple infection methods combine karta hai.\n- File infector + boot sector.\n- Hard to remove.\n- Example: Frodo virus.\n\n5. **Polymorphic Virus**\n- Apne code modify karta hai — detect difficult.\n- Encryption, mutation.\n- Antivirus signature change karta hai.\n- Example: 1260 virus.\n\n6. **Encrypted Virus**\n- Virus code encrypt karta hai.\n- Decryption routine payload contain karta hai.\n- Detect difficult hai.\n\n7. **Metamorphic Virus**\n- Full code modify karta hai.\n- Different formats — detect very difficult.\n- Example: W2K/Kak.\n\n8. **Stealth Virus**\n- System se hide karta hai.\n- Antivirus evade karta hai.\n- Example: Hidden partition viruses.\n\n**Virus Effects:**\n1. **Data Destruction** — File corruption, deletion.\n2. **System Slowdown** — CPU, memory consumption.\n3. **Privacy Violation** — Information theft.\n4. **Backdoor** — Remote access.\n5. **Spam** — Email spam spread.\n\n**Diagram:** Refer to the Viruses diagram — lifecycle stages, types, effects.',
    diagram: 'viruses',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq28',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is a backdoor in cyber security? Explain the types of backdoors and why they are dangerous.',
    answer:
      '**Backdoor Definition:**\nA backdoor is a hidden method for bypassing normal authentication or encryption in a computer system. Attackers install backdoors to gain persistent remote access to compromised systems without re-exploiting vulnerabilities.\n\n**Types of Backdoors:**\n\n1. **Remote Access Backdoor**\n- Attacker system mein remote access backdoor install karta hai.\n- Jab bhi attacker system access chahe, backdoor se directly enter kar sakta hai.\n- RAT Trojans iske liye use hote hain.\n- Example: DarkComet, Sub7, NetBus.\n\n2. **Rootkit Backdoor**\n- Rootkit backdoor kernel-level stealth techniques use karta hai.\n- System se hidden rehta hai — OS detect nahi kar paati.\n- Malicious files invisible bana deta hai.\n- Sabse dangerous backdoor type hai.\n- Example: Stuxnet, ZeroAccess.\n\n3. **Account Backdoor**\n- Attacker system mein hidden account create karta hai — admin ya privileged account.\n- Normal users ko pata nahi chalta.\n- Attacker account se asaani se system access hasil karta hai.\n\n4. **Command Injection Backdoor**\n- Attacker application ke input field mein command injection backdoor create karta hai.\n- SQL injection, shell command injection — attacker system commands execute kar sakta hai.\n\n5. **Hardware Backdoor**\n- Hardware level backdoor — motherboard firmware, BIOS modification.\n- Hardware detect karna difficult hai.\n- Example: NSA hardware implants.\n\n**Why Most Dangerous:**\n\n1. **Permanent Access**\n- Backdoor attacker ko permanent system access deta hai.\n- Re-exploitation nahi karna padta — wapas asaani se aa sakta hai.\n\n2. **Authentication Bypass**\n- Normal login process bypass karta hai — no detection.\n\n3. **Invisible Operation**\n- Rootkit backdoor OS level stealth provide karta hai.\n\n4. **Future Attacks**\n- Backdoor future attacks ke liye base banata hai.\n\n5. **Difficult Detection**\n- Backdoors hidden rehte hain — forensic analysis difficult hai.\n\n**Prevention:**\n- Regular system scans aur monitoring.\n- Strong authentication — MFA, strong passwords.\n- Patch management — vulnerabilities fix karo.\n- Network segmentation.\n- Endpoint protection — behavior monitoring.\n\n**Diagram:** Refer to the Backdoors diagram — attack flow, types, prevention.',
    diagram: 'backdoors',
    image: null,
    importance: '⭐⭐⭐',
  },

  {
    id: 'cq29',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'Explain different types of hackers. Differentiate between white hat and black hat hackers.',
    answer:
      '**Types of Hackers:**\n\n1. **White Hat Hackers (Ethical Hackers)**\n- Permission se vulnerabilities find karte hain.\n- Security improve karna chahte hain.\n- Companies ke liye security testing karte hain.\n- Legal aur ethical hai.\n- Example: Penetration testers, security researchers.\n\n2. **Black Hat Hackers (Malicious Hackers)**\n- Illegal access lena chahte hain.\n- Data churana, damage karna.\n- Personal gain, financial benefit ke liye hack karte hain.\n- Illegal hai — jail time, fines.\n- Example: Cybercriminals, attackers.\n\n3. **Grey Hat Hackers**\n- Mixed approach follow karte hain.\n- Permission nahi leta but vulnerabilities report karta hai.\n- Kya legal hai — depends on situation.\n- Example: Hackers who find bugs without permission.\n\n4. **Script Kiddies**\n- Inexperienced hackers.\n- Tools use karte hain without understanding.\n- Limited skills — hacking tools chalate hain.\n- Damage kar sakte hain but expert nahi hote.\n\n5. **Hacktivists**\n- Political motivations ke saath hack karte hain.\n- Government, corporations hack karte hain.\n- Anonymous group, political causes.\n- Example: Anonymous.\n\n6. **State-Sponsored Hackers**\n- Government sponsored hackers.\n- National security targets.\n- Cyber warfare — country-level attacks.\n- Example: APT groups.\n\n**White Hat vs Black Hat:**\n\n| Aspect | White Hat | Black Hat |\n|--------|-----------|----------|\n| Permission | Permission required | No permission |\n| Intent | Help organizations | Harm organizations |\n| Legality | Legal | Illegal |\n| Goal | Security improvement | Personal gain |\n| Tools | Same tools | Same tools |\n| Result | Vulnerabilities fixed | Systems damaged |\n\n**Diagram:** Refer to the Types of Hackers diagram — 6 categories with colors.',
    diagram: 'types-of-hackers',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq30',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'Differentiate between hacking and cracking. What are the different types of cracking activities?',
    answer:
      '**Hacking vs Cracking:**\n\n| Aspect | Hacking | Cracking |\n|--------|---------|----------|\n| Definition | Finding weaknesses | Exploiting weaknesses |\n| Goal | Understand system | Gain access |\n| Permission | With permission | Without permission |\n| Legality | Can be legal | Usually illegal |\n| Examples | Penetration testing | Password cracking |\n\n**Hacking Activities:**\n1. **Penetration Testing** — Authorized security testing.\n2. **Security Research** — System research, vulnerability discovery.\n3. **Code Review** — Source code analysis.\n4. **Surveillance** — Network monitoring.\n\n**Cracking Activities:**\n\n1. **Password Cracking**\n- Passwords break karna.\n- Brute force, dictionary attacks.\n- Unauthorized access.\n- Tools: John the Ripper, Hashcat.\n\n2. **Software Cracking**\n- Software licensing bypass karna.\n- Piracy karna.\n- Protection remove karna.\n- Example: Cracked software.\n\n3. **Jailbreaking**\n- Device restrictions remove karna.\n- Root access lena.\n- System modify karna.\n- Example: iOS jailbreaking.\n\n4. **Exploit Development**\n- Vulnerabilities exploit karna.\n- Malware create karna.\n- System compromise karna.\n\n5. **DRM Bypass**\n- Digital rights management bypass karna.\n- Media protection remove karna.\n\n6. **Serial Key Generation**\n- Software keys generate karna.\n- License bypass karna.\n\n**Key Difference:**\nHacking = vulnerabilities find karna, system understanding karna.\nCracking = unauthorized access lena, passwords break karna, systems exploit karna.\nHacking can be ethical, cracking mostly unethical hai.\n\n**Diagram:** Refer to the Hacking and Cracking diagram — comparison, activities.',
    diagram: 'hacking-and-cracking',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq31',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What are the ethical issues in hacking? How does ethical hacking differ from unethical hacking?',
    answer:
      '**Ethical Issues in Hacking:**\n\n1. **Privacy Violation**\n- Personal data access without consent.\n- Private information exposure.\n- Privacy rights violation.\n\n2. **Unauthorized Access**\n- System access without permission.\n- Breaking security barriers.\n- Trust violation.\n\n3. **Data Theft**\n- Sensitive information steal karna.\n- Financial data, personal info.\n- Identity theft risk.\n\n4. **System Damage**\n- Intentional system harm.\n- Data destruction, service disruption.\n- Financial impact.\n\n5. **Legal Consequences**\n- Jail time, fines, criminal records.\n- Legal action against hackers.\n- Career destruction.\n\n6. **Business Impact**\n- Company reputation damage.\n- Financial losses.\n- Customer trust loss.\n\n**Ethical vs Unethical Hacking:**\n\n| Aspect | Ethical | Unethical |\n|--------|---------|-----------|\n| Permission | With permission | Without permission |\n| Intent | Help organization | Harm organization |\n| Data Access | Authorized only | Unauthorized |\n| Reporting | Vulnerabilities reported | Vulnerabilities hidden |\n| Consent | Consent obtained | No consent |\n| Legality | Legal | Illegal |\n\n**Key Points:**\n- Ethical hacking permission se, reporting karna, consent lena.\n- Unethical hacking permission bina, damage karna, data steal karna.\n- Ethical hacking security improve karta hai.\n- Unethical hacking personal gain karta hai.\n\n**Diagram:** Refer to the Ethical Issues diagram — 5 issues, warning signs.',
    diagram: 'ethical-issues-hacking',
    image: null,
    importance: '⭐⭐⭐',
  },
  {
    id: 'cq32',
    unit: '2',
    subjectId: 'cyber-security',
    question: 'What is ethical hacking? Explain the process and benefits of ethical hacking.',
    answer:
      '**Ethical Hacking Definition:**\nPermission se security testing karna. Vulnerabilities find karna, report karna. Security improve karna. White hat hackers ethical hacking karte hain.\n\n**Ethical Hacking Process:**\n\n1. **Planning**\n- Scope define karna.\n- Rules of engagement set karna.\n- Permission obtain karna.\n\n2. **Scanning**\n- Network scan karna.\n- Vulnerabilities identify karna.\n- Information gather karna.\n\n3. **Gaining Access**\n- Vulnerabilities exploit karna.\n- Access gain karna.\n- Security test karna.\n\n4. **Maintaining Access**\n- Access maintain karna.\n- Persistence test karna.\n- Depth testing karna.\n\n5. **Analysis**\n- Vulnerabilities analyze karna.\n- Impact assess karna.\n- Risk evaluation karna.\n\n6. **Reporting**\n- Findings report karna.\n- Recommendations provide karna.\n- Remediation support karna.\n\n**Benefits of Ethical Hacking:**\n\n1. **Security Improvement**\n- Vulnerabilities identify karna.\n- Security weaknesses fix karna.\n- System protection improve karna.\n\n2. **Attack Prevention**\n- Attacks prevent karna.\n- Security breaches avoid karna.\n- Data protection ensure karna.\n\n3. **Risk Assessment**\n- Risks assess karna.\n- Security posture evaluate karna.\n- Compliance ensure karna.\n\n4. **Vulnerability Discovery**\n- New vulnerabilities find karna.\n- Zero-days discover karna.\n- Security research support karna.\n\n5. **Security Awareness**\n- Security awareness build karna.\n- Best practices promote karna.\n- Culture improve karna.\n\n6. **Compliance**\n- Regulatory requirements meet karna.\n- Security standards follow karna.\n- Audits pass karna.\n\n7. **Cost Saving**\n- Future breaches avoid karna.\n- Financial loss reduce karna.\n\n8. **Customer Trust**\n- Security ensure karna.\n- Trust build karna.\n\n**Ethical vs Malicious Hacking:**\n\n| Aspect | Ethical | Malicious |\n|--------|---------|-----------|\n| Permission | Permission required | No permission |\n| Intent | Help organization | Harm organization |\n| Reporting | Vulnerabilities reported | Vulnerabilities hidden |\n| Data Handling | Authorized only | Unauthorized access |\n| Legality | Legal | Illegal |\n| Goal | Security improvement | Personal gain |\n\n**Diagram:** Refer to the Ethical Hacking diagram — 6-step process, benefits.',
    diagram: 'ethical-hacking',
    image: null,
    importance: '⭐⭐⭐',
  },
// ========================================================
  // Software Testing Unit 1 — Fundamentals of Software Quality Assurance
  // ========================================================
  {
    id: 'stq1',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Define software quality. What are the key characteristics of quality software?',
    answer: '**Software Quality Definition:**\nSoftware quality is the degree to which a software system meets its requirements, is reliable, maintainable, and performs efficiently.\n\n**Key Characteristics:**\n1. **Reliability** — Software kabhi na kabhi crash nahi karta. Stable chalta hai.\n2. **Maintainability** — Aasani se modify kiya ja sakta hai. Code readable hai.\n3. **Efficiency** — Fast chalta hai. Resources ka accha use karta hai.\n4. **Usability** — Aasani se use kiya ja sakta hai. User-friendly hai.\n5. **Security** — Secure hai. Vulnerabilities kam hain.\n\nQuality ek subjective term hai — ek user ke liye accha hai woh dusre ke liye accha nahi hai. Isliye quality ko measure karne ke liye metrics use hote hain.',
    diagram: null,
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq2',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Differentiate between QA, QC, and SQA.',
    answer: '**QA (Quality Assurance):**\n- Process-oriented\n- Defects prevent karta hai\n- Whole team ka responsibility hai\n- Systematic approach hai\n\n**QC (Quality Control):**\n- Product-oriented\n- Defects find karta hai\n- QA team ka responsibility hai\n- Deliverables verify karta hai\n\n**SQA (Software Quality Assurance):**\n- QA + QC combined\n- Full lifecycle coverage\n- Standards aur processes apply karta hai\n- Systematic approach hai\n\n**Main Difference:**\nQA = Prevention (Process)\nQC = Detection (Product)\nSQA = QA + QC (Combined approach)',
    diagram: 'qa-qc-comparison',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq3',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Explain the components of an SQA system.',
    answer: '**SQA System Components:**\n\n1. **Quality Standards**\n- ISO 9001, CMMI, Six Sigma\n- Standards define karte hain ki quality kya hai\n- Organizations follow karte hain\n\n2. **Quality Metrics**\n- Defect density, test coverage, code complexity\n- Quality measure karte hain\n- Trends track karte hain\n\n3. **Quality Reviews**\n- Code review, design review, walkthroughs\n- Defects early detect karte hain\n- Peer review important hai\n\n4. **Testing Processes**\n- Unit, integration, system, acceptance testing\n- Defects detect karte hain\n- Quality ensure karte hain\n\n5. **Training Programs**\n- Team ko quality train karte hain\n- New tools aur processes sikhaate hain\n- Skills improve karte hain\n\n6. **Audit Mechanisms**\n- Process audit, product audit\n- Independent review hota hai\n- Compliance check karta hai\n\n**All components milte hain SQA system banane ke liye.**',
    diagram: 'sqa-components',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq4',
    unit: '1',
    subjectId: 'software-testing',
    question: 'How does software quality impact business success?',
    answer: '**Business Impact of Quality:**\n\n1. **Lower Costs**\n- Accha software maintain karne mein less cost hota hai\n- Less bugs = less support\n\n2. **Customer Satisfaction**\n- Accha software user ko pasand aata hai\n- Better UX = happier users\n\n3. **Reputation**\n- Accha software company ki image acchi banata hai\n- Positive reviews aate hain\n\n4. **Competitive Advantage**\n- Accha quality competitive advantage provide karta hai\n- Market mein alag bante hain\n\n5. **Reduced Risks**\n- Accha software risks kam karta hai\n- Fewer failures\n\n**Quality-Cost Relationship:**\nInvestment in quality returns karata hai.\nHigh quality = low failure costs.\n\n**Business Benefits:**\n- Maintenance costs kam\n- Customer satisfaction increase\n- Reputation improve\n- Competitive advantage milta hai\n- Revenue increase hota hai',
    diagram: 'quality-business-impact',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq5',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Explain SQA planning and its best practices.',
    answer: '**SQA Planning:**\n\nSQA planning involve karta hai:\n1. Quality goals define karna\n2. Standards establish karna\n3. Resources allocate karna\n4. Schedules create karna\n5. Processes define karna\n\n**Best Practices:**\n\n1. **Early Planning**\n- Project start mein goals define karo\n- Accha plan quality built karta hai\n\n2. **Clear Goals**\n- Measurable objectives define karo\n- Defect density target, coverage target\n\n3. **Established Standards**\n- Coding standards, review procedures\n- Testing procedures define karo\n\n4. **Allocated Resources**\n- Budget, time, people allocate karo\n- Quality activities ka timeline create karo\n\n5. **Defined Processes**\n- How quality ensure hogi\n- Roles aur responsibilities clear karo\n\n6. **Maintained Documentation**\n- Plan document maintain karo\n- Standards documents document karo\n\n**Important:**\nQuality built-in karo — not tested-in.\nAccha plan quality early ensure karta hai.',
    diagram: 'sqa-planning-process',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq6',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Differentiate between product quality and process quality.',
    answer: '**Product Quality:**\n- Final software product ki quality\n- Outcome (what we get)\n- Aspects: Reliability, Usability, Performance, Maintainability, Scalability, Security\n\n**Process Quality:**\n- Development process ki quality\n- Approach (how we work)\n- Aspects: Planning, Design, Coding, Testing, Standards, Metrics\n\n**Relationship:**\n- Good process → Good product\n- Good product indicates good process\n- Bad process → Bad product\n- Bad product may indicate bad process\n\n**Key Difference:**\nProduct quality = outcome\nProcess quality = approach\n\n**Importance:**\nDono important hain.\nProcess improvement → product improvement\nFocus on both — ek ek karke nahi, dono saath.',
    diagram: 'product-process-quality',
    image: null,
    importance: '⭐⭐⭐⭐',
  },
  {
    id: 'stq7',
    unit: '1',
    subjectId: 'software-testing',
    question: 'Describe the Waterfall and Agile process models with their advantages and disadvantages.',
    answer: '**Waterfall Model:**\n\n**Approach:** Linear, sequential\n**Phases:** Requirements → Design → Coding → Testing → Deployment\n\n**Advantages:**\n- Simple hai\n- Easy to understand\n- Well-documented hai\n- Good planning hai\n\n**Disadvantages:**\n- Rigid hai\n- Changes difficult hain\n- Testing late hota hai\n- Customer feedback late milta hai\n\n**When to Use:**\n- Small projects\n- Well-defined requirements\n- Fixed budget aur timeline\n\n---\n\n**Agile Model:**\n\n**Approach:** Iterative, incremental\n**Process:** Short cycles (sprints)\n\n**Advantages:**\n- Flexible hai\n- Customer involvement accha hai\n- Early delivery hoti hai\n- Quality accha hai\n\n**Disadvantages:**\n- Costly hai\n- Documentation less hota hai\n- Team ka experience important hai\n- Scalability issues ho sakte hain\n\n**When to Use:**\n- Large projects\n- Changing requirements\n- Customer collaboration zaroori hai',
    diagram: 'process-models-comparison',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },
  {
    id: 'stq8',
    unit: '1',
    subjectId: 'software-testing',
    question: 'List and explain the 7 QC tools with their uses.',
    answer: '**7 QC Tools:**\n\n1. **Check Sheet**\n- Data collect karta hai\n- Frequency count karta hai\n- Simple tool hai\n\n2. **Flow Chart**\n- Process flow dikhata hai\n- Steps aur decisions dikhata hai\n- Complex processes simplify karta hai\n\n3. **Histogram**\n- Data distribution dikhata hai\n- Bar chart hota hai\n- Patterns dikhata hai\n\n4. **Pareto Chart**\n- Problems prioritize karta hai\n- 80/20 rule follow karta hai\n- Important problems identify karta hai\n\n5. **Fishbone Diagram (Cause and Effect)**\n- Root cause analysis karta hai\n- Causes identify karta hai\n- Problem solve karta hai\n\n6. **Scatter Diagram**\n- Relationship dikhata hai\n- Correlation check karta hai\n- Relationship measure karta hai\n\n7. **Control Chart**\n- Process control karta hai\n- Variation measure karta hai\n- Quality maintain karta hai\n\n**Use:**\nSab tools problems identify aur solve karne mein help karte hain.',
    diagram: 'qc-tools-overview',
    image: null,
    importance: '⭐⭐⭐⭐⭐',
  },

  // ========================================================
];

// Merge subject-wise question banks
export const importantQuestions = [
  ...baseImportantQuestions,
  ...dataScienceImportantQuestions,
  ...webTechnologyImportantQuestions,
];
