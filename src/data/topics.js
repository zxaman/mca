import { dataScienceUnits } from './dataScience.js';
import { webTechnologyUnits } from './webTechnology.js';
import { cyberForensicsUnit } from './cyberForensics.js';
import { digitalForensicsUnit } from './digitalForensics.js';
import { socialEngineeringUnit } from './socialEngineering.js';
import { softwareTestingUnit3Topics } from './softwareTesting3.js';
import { softwareTestingUnit4Topics } from './softwareTesting4.js';
import { softwareTestingUnit5Topics } from './softwareTesting5.js';

export const subjects = [
  {
    "id": "software-testing",
    "name": "Software Testing and Quality Assurance",
    "code": "STQA",
    "color": "#0047ff",
    "available": true,
    "description": "Quality assurance se testing tak — concepts, metrics aur models Hinglish mein"
  },
  {
    "id": "data-science",
    "name": "Data Science",
    "code": "DS",
    "color": "#00d4ff",
    "available": true,
    "description": "Data se insight tak ka safar — data types, scales, formats, life cycle, CRISP-DM, ML/AI, roles aur statistics, simple Hinglish mein"
  },
  {
    "id": "web-technology",
    "name": "Web Technology",
    "code": "WT",
    "color": "#0047ff",
    "available": true,
    "description": "HTML se AngularJS aur Next.js tak — har concept ka code, output aur diagram, simple Hinglish mein"
  },
  {
    "id": "cyber-security",
    "name": "Cyber Security",
    "code": "CYS",
    "color": "#0047ff",
    "available": true,
    "description": "Cyber security se social engineering tak — attacks, laws, investigation, evidence aur human manipulation, simple Hinglish mein"
  },
  {
    "id": "business-intelligence",
    "name": "Business Intelligence",
    "code": "BI",
    "color": "#0047ff",
    "available": true,
    "description": "Data se decisions tak ka safar — bilkul simple Hinglish mein"
  }
];

export const units = {
  "business-intelligence": [
    {
      "id": "unit-1",
      "number": "1",
      "name": "Introduction to Business Intelligence",
      "topics": [
        {
          "id": "intro-bi",
          "number": "1.1",
          "title": "Introduction to Business Intelligence",
          "subtitle": "BI kya hai, iske components aur faayde",
          "icon": "chart",
          "accent": "#0047ff",
          "englishDefinition": "Business Intelligence (BI) is a technology-driven process for analyzing business data and presenting actionable information to help corporate executives, business managers and other end users make informed business decisions. BI encompasses a wide variety of business analysis tools and methodologies that collect, integrate, analyze and present business data to support better decision making.",
          "intro": "Duniya mein har company decisions leti hai — kahan kharcha kare, kaunsa product beche, customers ko kya pasand hai. Pehle log decisions apne experience aur \"gut feeling\" pe lete the. Lekin ab samay badla hai. Ab koi bhi bada decision lete waqt companies data ko dekhti hain. Is data-driven approach ko hi Business Intelligence (BI) kehte hain. Aayie, samjhte hain iske basics.",
          "sections": [
            {
              "type": "definition",
              "title": "BI kya hai? (Simple Words Mein)",
              "kicker": "Definition",
              "body": "Business Intelligence (BI) ek aisa process hai jisme organization apne business data ko collect karti hai, analyze karti hai, aur ek easy-to-read format (jaise chart, report, dashboard) mein convert karti hai — taaki managers aur decision makers better (acche) decisions le sake.",
              "body2": "Ek sentence mein: BI ka matlab hai \"data ki madad se apne business ko samajhna aur uske hisaab se decisions banana\".",
              "chips": [
                "Data collect karna",
                "Analyze karna",
                "Visualize karna",
                "Better decisions"
              ]
            },
            {
              "type": "cards",
              "title": "BI ke Key Components",
              "kicker": "Important Terms",
              "cards": [
                {
                  "icon": "database",
                  "title": "Data Sources",
                  "body": "BI ka pehla kadam hai data collect karna. Data kahan se aata hai? Databases, Excel sheets, ERP systems (jaise SAP), CRM software, websites aur social media se. Wahan business chal rahi hai — wahan se data collect kiya jata hai."
                },
                {
                  "icon": "etl",
                  "title": "ETL (Extract, Transform, Load)",
                  "body": "ETL ek process hai jisme data ko teen steps mein process karte hain: Extract (source se nikalna), Transform (data ko clean karna, correct format mein badalna, duplicate hatana), Load (ek central place mein daalna)."
                },
                {
                  "icon": "warehouse",
                  "title": "Data Warehouse",
                  "body": "Ye ek central \"store\" hai jahan ek jagah par sabhi historical data rakha jata hai. Bilkul jaise library mein sabhi books ek saath hoti hain. Data warehouse mein data analysis ke liye ready rehta hai."
                },
                {
                  "icon": "cube",
                  "title": "OLAP",
                  "body": "OLAP (Online Analytical Processing) data ko fastly multi-dimensional analysis karne ka technique hai. Data ko \"cubes\" banana hota hai — jaise sales ke liye time, region aur product ko milakar dekhna."
                },
                {
                  "icon": "dashboard",
                  "title": "BI Tools & Dashboards",
                  "body": "Tableau, Power BI, QlikSense jaise tools raw data ko beautiful charts, graphs aur interactive dashboards mein convert karti hain. Managers dashboard dekh kar hi samajh jaate hain ki business kaha chal rahi hai."
                },
                {
                  "icon": "bulb",
                  "title": "Decision Making",
                  "body": "Ye BI ka final output hai. Data-driven decisions — kaunsa product bechna hai, kahan stock barhana hai, kaunsa marketing campaign chalna hai. Sab data dekh kar decide hota hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "BI Architecture — Data ka Safar",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "biflow",
              "caption": "Pehle data sources se data aata hai. Phir ETL process use clean karta hai aur data warehouse mein daalta hai. Wahan se OLAP use multi-dimensional analysis karta hai. Final mein BI tools use reports aur dashboards banati hain, aur managers decision lete hain. Yeh diagram exam mein demonstrate karna bhi sakta hai."
            },
            {
              "type": "image",
              "title": "Real BI Architecture (Reference Image)",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/warehouse-architecture.jpg",
                  "caption": "Warehouse Architecture — Client, Source, Integration, Query & Analysis, Metadata"
                }
              ]
            },
            {
              "type": "example",
              "title": "Real-World Example",
              "kicker": "Example",
              "body": "Imagine ek bada retail store chain (jaise Big Bazaar ya Amazon). Wo daily sabhi stores se sales data collect karti hai. BI system us data ko analyze karta hai — kaunsa product kahan bik raha hai, kaunsa season mein kya chalega, inventory ka status kaisa hai. Dashboard dekh kar manager decide karta hai: kaunsa stock barhana hai, kaunsa product discount par rakhna hai, kahan naya store kholnna hai. Pehle wo aisa decision sirf experience pe leta tha — ab data pe."
            },
            {
              "type": "points",
              "title": "Exam-Focused Points",
              "kicker": "Important For Exam",
              "points": [
                "BI = Business Intelligence. Data ko actionable information mein convert karna hi BI ka kaam hai.",
                "BI ek process hai, not sirf ek tool. Agar kisi ne pucha \"BI kya hai?\" to answer dijiye: \"Data collect, analyze aur visualize karke better decisions lane ka process\".",
                "ETL = Extract (nikalna), Transform (clean aur format karna), Load (central place mein daalna). Ye BI ka heart hai.",
                "Data warehouse = central repository for historical data. Historical sabd important hai.",
                "OLAP = Online Analytical Processing. Multi-dimensional analysis ke liye.",
                "BI ke famous tools: Tableau, Power BI, QlikSense.",
                "BI reports batati hain ki \"kuch kya hua\" (what happened) aur \"kuch ho raha hai\" (what is happening)."
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "BI ka matlab hai data ki madad se business ko samajhna.",
                "Data ka safar: Sources → ETL → Data Warehouse → OLAP → Dashboards → Decisions.",
                "ETL: Extract, Transform, Load.",
                "BI tools: Tableau, Power BI, Qlik.",
                "Data se decisions — ye hi BI ka goal hai."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Define Business Intelligence (BI). Explain the need and benefits of BI in organizations.",
              "answer": "**Definition:** Business Intelligence (BI) is a technology-driven process for analyzing business data and presenting actionable information to help decision makers make informed business decisions.\n\n**Explanation:** BI collects data from various sources (databases, ERP, CRM), processes it through ETL, stores it in a data warehouse, and presents it through dashboards and reports. It helps organizations make faster, accurate, data-driven decisions.\n\n**Benefits:** (1) Faster and better decisions, (2) Increased accuracy, (3) Competitive advantage, (4) Better customer service, (5) Cost reduction, (6) Improved efficiency.\n\n**Diagram:** Refer to the BI Architecture diagram (Data Sources → ETL → Data Warehouse → OLAP → Dashboards → Decisions) in this topic."
            },
            {
              "question": "Describe the main components of a Business Intelligence system with a suitable diagram.",
              "answer": "**Components of BI:**\n1. **Data Sources** — databases, Excel, ERP, CRM (raw data ka source)\n2. **ETL** — Extract, Transform, Load (data ko clean aur warehouse mein daalna)\n3. **Data Warehouse** — central store for historical data\n4. **OLAP** — Online Analytical Processing (multi-dimensional analysis)\n5. **BI Tools & Dashboards** — Tableau, Power BI (reports, charts, KPIs)\n6. **Decision Makers** — managers who use the dashboards\n\n**Diagram:** Refer to the BI Architecture flow diagram showing data flowing from sources through ETL into the warehouse, then OLAP analysis, and finally dashboards for decision making."
            }
          ]
        },
        {
          "id": "evolution-bi",
          "number": "1.2",
          "title": "Evolution of BI & Decision Support Systems",
          "subtitle": "BI kab aur kaise badla — timeline aur DSS",
          "icon": "timeline",
          "accent": "#0047ff",
          "englishDefinition": "A Decision Support System (DSS) is an interactive, computer-based information system that helps decision-makers use data and models to solve semi-structured and unstructured problems. The evolution of Business Intelligence traces the journey from MIS in the 1950s-60s, through DSS in the 1970s, EIS in the 1980s, data warehousing and OLAP in the 1990s, self-service BI in the 2000s, to modern cloud and AI-powered BI in the 2010s and beyond.",
          "intro": "Aaj ham BI ke zamana mein reh rahe hain — dashboards, real-time reports, AI-powered analytics. Lekin kya aapne socha hai ki ye sab ek din mein nahi aaya? Pehle computers sirf basic reports banate the. Phir dheere-dheere systems improve hue. Is topic mein ham dekhnge ki BI kab aur kaise develop hua, aur Decision Support Systems (DSS) kahan se start hui.",
          "sections": [
            {
              "type": "definition",
              "title": "DSS kya hai?",
              "kicker": "Definition",
              "body": "DSS (Decision Support System) ek computer-based system hai jo decision makers ko data aur analysis models ki madad se better decisions lane mein help karta hai. Ye specially semi-structured aur unstructured problems ke liye banaya gaya tha.",
              "body2": "1970s mein Gorry aur Scott Morton ne DSS ka concept diya tha. Ye idea tha ki kaise computer data aur models combine karke decisions mein support de sakta hai.",
              "chips": [
                "Computer-based system",
                "Data + models",
                "Decision makers ki help",
                "1970s ka concept"
              ]
            },
            {
              "type": "cards",
              "title": "Evolution Timeline in Simple Words",
              "kicker": "Timeline",
              "cards": [
                {
                  "icon": "clock",
                  "title": "1950s–60s: MIS",
                  "body": "MIS (Management Information Systems) pehla system tha. Routine, structured reports banata tha — jaise daily sales report. Decisions ekdum clear the aur fixed the. Ye operational level ke liye tha."
                },
                {
                  "icon": "dss",
                  "title": "1970s: DSS",
                  "body": "DSS (Decision Support Systems) aaya. Semi-structured problems ke liye data aur models ko combine karke decisions mein support mila. Gorry & Scott Morton (1971) ne ye framework diya."
                },
                {
                  "icon": "executive",
                  "title": "1980s: EIS",
                  "body": "EIS (Executive Information Systems) top-level executives ke liye bana. External data (market trends) aur internal data dono dikhata tha, taaki senior managers strategy bana sake."
                },
                {
                  "icon": "warehouse",
                  "title": "1990s: Data Warehouse",
                  "body": "Bill Inmon ne data warehouse concept popular kiya — unhe \"father of data warehouse\" kaha jata hai. Codd ne OLAP diya. 1996 mein Gartner (Howard Dresner) ne \"Business Intelligence\" term popular kiya."
                },
                {
                  "icon": "dashboard",
                  "title": "2000s: Self-Service BI",
                  "body": "Tableau (2003), Power BI aur Qlik aaye. Ab non-technical users khud reports aur dashboards banane lage. BI ek DBA ya IT person ki deewani rahega nai — har koi use kar sakta tha."
                },
                {
                  "icon": "ai",
                  "title": "2010s+: Modern BI",
                  "body": "Cloud BI, embedded analytics, real-time dashboards, aur AI/ML-powered BI aa gaye. Ab BI sirf reports dikhati hai — wo predictions bhi karti hai aur automatic recommendations bhi degi."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Evolution Timeline of BI",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "timeline",
              "caption": "Dekhiye BI ka safar: MIS (1950s-60s) → DSS (1970s) → EIS (1980s) → Data Warehouse/OLAP/BI term (1990s) → Self-Service BI (2000s) → AI & Cloud BI (2010s+). Ye timeline ek baar exam mein draw kar lijiye."
            },
            {
              "type": "image",
              "title": "DSS Structure (Reference Image)",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/dss-components.png",
                  "caption": "DSS Structure — Model Management System, User Interface, Knowledge Base"
                }
              ]
            },
            {
              "type": "cards",
              "title": "Types of Decision Problems",
              "kicker": "Important Classification",
              "cards": [
                {
                  "icon": "check",
                  "title": "Structured",
                  "body": "Problem ekdum clear hai, routine hai, rules pe based hai. Computer automatic solve kar sakta hai. Example: inventory reorder point — stock kitna rakhna hai wo rules se pata chal jata hai."
                },
                {
                  "icon": "half",
                  "title": "Semi-Structured",
                  "body": "Kuch data hai, kuch decisions human judgment pe depend karte hain. Computer help kar sakta hai but final decision human leta hai. Example: budget planning, marketing campaign ka plan."
                },
                {
                  "icon": "unstruct",
                  "title": "Unstructured",
                  "body": "Koi clear data nahi hai, naya problem hai. Sirf human experience, intuition aur creativity matter karti hai. Example: new market mein entry kare ya nahi, kisi competitor ka response kaisa hoga."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "DSS Ke Components",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "dss",
              "caption": "DSS mein tin important components hain: Database Management System (data store, manage, retrieve karta hai), Model Management System (analysis models jaise forecasting, optimization), aur User Interface (user ko system se interact karne ka tarika). Tin ek saath mil kar decision makers ko support dete hain."
            },
            {
              "type": "example",
              "title": "Real-World Example",
              "kicker": "Example",
              "body": "Ek bank manager loan approval ka decision leta hai. Sirf gut feeling pe nahi — wo DSS use karta hai. DSS customer ka data (income, transaction history, credit score) ek database se nikalta hai. Phir risk analysis ka model us data pe chalata hai. Aur manager ko interface (screen) par results milta hai. Ab manager data aur model ke results dekh kar final decision leta hai. Yehi data-driven decision hai."
            },
            {
              "type": "points",
              "title": "Exam-Focused Points",
              "kicker": "Important For Exam",
              "points": [
                "DSS ka full form: Decision Support System. 1970s ka concept hai.",
                "DSS teen components: Database Management, Model Management, User Interface.",
                "DSS specially semi-structured problems ke liye bana tha.",
                "Structured decisions: rules pe based, routine — ex: inventory reorder.",
                "Unstructured decisions: naya problem, data nahi — human judgment zyada matters.",
                "Father of Data Warehouse: Bill Inmon.",
                "BI term 1996 mein Gartner (Howard Dresner) ne popular kiya tha.",
                "OLAP ka concept Codd (1993) ne diya tha.",
                "Evolution: MIS → DSS → EIS → Data Warehouse/OLAP → Self-Service BI → AI/Cloud BI."
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "DSS = Decision Support System. Data + models se decisions mein help.",
                "1970s: DSS aaya. 1990s: Data warehouse aur BI term.",
                "Structured → routine rules. Unstructured → human judgment.",
                "DSS components: DBMS, Model Management, User Interface.",
                "Aaj ka BI: cloud, real-time, AI-powered."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Explain the evolution of Business Intelligence from MIS to modern BI with a timeline.",
              "answer": "**Evolution of BI:**\n1. **1950s-60s — MIS:** Management Information Systems. Structured, routine reports (daily sales reports). Operational decisions.\n2. **1970s — DSS:** Decision Support Systems. Semi-structured problems. Data + models combine karke decision support. Gorry & Scott Morton (1971).\n3. **1980s — EIS:** Executive Information Systems. For top executives. External + internal data.\n4. **1990s — Data Warehouse & OLAP:** Bill Inmon (father of data warehouse), Codd (OLAP, 1993). Gartner ne 1996 mein \"BI\" term popular kiya.\n5. **2000s — Self-Service BI:** Tableau (2003), Power BI, Qlik. Non-technical users khud reports banane lage.\n6. **2010s+ — Modern BI:** Cloud BI, embedded analytics, real-time dashboards, AI/ML-powered BI.\n\n**Diagram:** Refer to the Evolution Timeline diagram showing MIS → DSS → EIS → DW/OLAP → Self-Service BI → AI/Cloud BI."
            },
            {
              "question": "What is a Decision Support System (DSS)? Describe its components with a diagram.",
              "answer": "**Definition:** DSS is an interactive, computer-based information system that helps decision-makers use data and models to solve semi-structured and unstructured problems.\n\n**Components of DSS:**\n1. **Database Management System (DBMS)** — data ko store, manage aur retrieve karta hai. Decision data ek centralized database se aata hai.\n2. **Model Management System** — analysis models rakhta hai (forecasting, optimization, simulation). Models data ko process karke results dete hain.\n3. **User Interface / Dialogue Management** — user ko system se interact karne ke liye interface deta hai. Query, report, aur interaction ke liye.\n\n**Diagram:** Refer to the DSS Components diagram — tin components (DBMS, Model Management, User Interface) ek saath mil kar decision makers ko support dete hain."
            }
          ]
        },
        {
          "id": "data-driven-decisions",
          "number": "1.3",
          "title": "Data-driven Decision Making",
          "subtitle": "Data se decisions — cycle, analytics types aur challenges",
          "icon": "cycle",
          "accent": "#0047ff",
          "englishDefinition": "Data-driven decision making (DDDM) is a process in which organizations base their decisions on data, facts and metrics rather than solely on intuition or experience. It involves collecting, analyzing and interpreting data to guide business strategy and operational decisions. The DIKW pyramid (Data → Information → Knowledge → Wisdom) illustrates how raw data becomes actionable wisdom, and four types of analytics — descriptive, diagnostic, predictive and prescriptive — support decisions at different levels.",
          "intro": "Aapne kabhi socha hai ki Netflix aapko aapke pasand ke shows recommend kyun karti hai? Ya Amazon aapko aapke pasand ke products dikhata hai? Ye sab data-driven decisions hain. Netflix aapki watch history (data) analyze karti hai aur aapke liye best show chunti hai. Is topic mein ham dekhnge ki organizations data ka use karke decisions leti hain — aur woh kaisa process hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Data-Driven Decision Making kya hai?",
              "kicker": "Definition",
              "body": "Data-driven decision making ka matlab hai decisions data (evidence) pe based karna — sirf apne gut feeling, experience ya assumptions pe nahi. Jab organization kisi decision ke liye historical data, current data aur analysis ko consider karti hai, toh woh ek data-driven decision hai.",
              "body2": "Ek famous quote hai W. Edwards Deming ka: \"In God we trust, all others bring data.\" Matlab — haan, intuition zaror kaam aata hai, lekin koi bhi decision data ke saath kare toh trustworthy hota hai.",
              "chips": [
                "Data pe based decisions",
                "Gut feeling pe nahi",
                "Evidence matters",
                "Measurable results"
              ]
            },
            {
              "type": "diagram",
              "title": "Data-Driven Decision Cycle",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "cycle",
              "caption": "Data-driven decision cycle ek circular process hai: Problem identify karo → relevant data collect karo → data ko clean & process karo → analyze karo → results interpret karo → decision lo → implement karo aur monitor karo. Phir se cycle shuru hota hai. Ek baar decision lene se kaam nahi khatam hota — results track kiye jaate hain aur process dobara chalti hai."
            },
            {
              "type": "diagram",
              "title": "DIKW Pyramid — Data se Wisdom Tak",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "dikw",
              "caption": "DIKW pyramid batata hai ki data se wisdom tak ka safar kaisa hota hai: Data (raw facts — \"sales 1000\") → Information (data + context — \"sales 10% badhi\") → Knowledge (patterns aur experience — \"July mein sales kam hoti hai, seasonal trend hai\") → Wisdom (decisions — \"July mein stock kam rakho, extra campaign chalo\"). Pyramid bhi exam mein draw kar sakte hain."
            },
            {
              "type": "cards",
              "title": "4 Types of Analytics (Bada important hai!)",
              "kicker": "Must Know",
              "cards": [
                {
                  "icon": "chart",
                  "title": "Descriptive — \"What happened?\"",
                  "body": "Past data ka summary. Reports, dashboards batati hain ki kya hua. Example: pichhle month ki sales report, user growth stats. Sirf fact batati hain."
                },
                {
                  "icon": "search",
                  "title": "Diagnostic — \"Why did it happen?\"",
                  "body": "Root cause analysis. Data ke andar implicit reasons dhundti hain. Example: \"sales kam hui, kyun? kyunki ek competitor ne discount diya!\""
                },
                {
                  "icon": "forecast",
                  "title": "Predictive — \"What will happen?\"",
                  "body": "Future ka estimate. ML models aur statistics ka use karti hain. Example: \"agle month sales karegi 1.2 lakh\" ya \"customer churn risk hai\"."
                },
                {
                  "icon": "prescriptive",
                  "title": "Prescriptive — \"What should we do?\"",
                  "body": "Best action recommend karti hai. Optimization, simulation ka use hai. Example: \"stock kitna rakho, kaunsa campaign chalo, kahan naya store kholo\"."
                }
              ]
            },
            {
              "type": "image",
              "title": "4 Types of Analytics (Reference Image)",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/analytics-types.png",
                  "caption": "Analytics Flowchart — Descriptive, Diagnostic, Predictive, Prescriptive leading to Decision & Action"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Analytics Ka Safar — 4 Stages",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "analytics",
              "caption": "Analytics ka safar chaar stages mein hota hai: Descriptive (kya hua?) → Diagnostic (kyun hua?) → Predictive (kya hoga?) → Prescriptive (kahan karna?). Pehle past dekha jata hai, phir reasons, phir future, aur final mein best action."
            },
            {
              "type": "example",
              "title": "Real-World Example",
              "kicker": "Example",
              "body": "Netflix aapki watch history (data) collect karti hai. Phir wo data analyze karti hai — aap kis genre ke shows dekhte hain, aap kis time dekhte hain, aapke jaise users kya dekhte hain (ye predictive/diagnostic analytics hai). Final mein aapko aapke pasand ke shows recommend kar diya jata hai (prescriptive). Amazon bhi aapke purchases aur similar customers ke purchases dekh kar products suggest karti hai. Ye sab data-driven decisions hain."
            },
            {
              "type": "cards",
              "title": "Benefits & Challenges",
              "kicker": "Bada important — exam mein aa sakta hai",
              "cards": [
                {
                  "icon": "check",
                  "title": "Benefits",
                  "body": "Decisions objectivity se hoti hain — bias kam hota hai. Risk kam ho jata hai kyunki facts pe decisions hoti hain. Results measurable hote hain. Faster decisions aur better efficiency. Competitive advantage milta hai."
                },
                {
                  "icon": "warn",
                  "title": "Challenges",
                  "body": "Data quality ka problem — \"garbage in, garbage out\": kharab data se kharab decisions. Data security aur privacy ka sawal. Technology aur skilled people ka cost. Sirf data dekh kar context ko bhool jaana — sab data mein nahi hota."
                }
              ]
            },
            {
              "type": "points",
              "title": "Exam-Focused Points",
              "kicker": "Important For Exam",
              "points": [
                "Data-driven decision making: decisions data pe based karna, gut feeling pe nahi.",
                "Cycle ke 7 steps: Identify problem → Collect data → Clean/process → Analyze → Interpret → Decide → Implement & monitor.",
                "DIKW pyramid: Data → Information → Knowledge → Wisdom. Order yaad rakhna.",
                "Data = raw facts. Information = data + context. Knowledge = patterns. Wisdom = decisions.",
                "Descriptive analytics: \"What happened?\" (past).",
                "Diagnostic analytics: \"Why did it happen?\" (root cause).",
                "Predictive analytics: \"What will happen?\" (future, ML).",
                "Prescriptive analytics: \"What should we do?\" (recommendations).",
                "Challenge: garbage in, garbage out — data quality matter karta hai."
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Data-driven decision = decisions data pe based, gut feeling pe nahi.",
                "Cycle: Problem → Collect → Clean → Analyze → Interpret → Decide → Monitor.",
                "DIKW: Data → Information → Knowledge → Wisdom.",
                "Analytics: Descriptive (kya hua) → Diagnostic (kyun) → Predictive (kya hoga) → Prescriptive (kahan karo).",
                "Garbage in, garbage out — data quality matters."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "What is data-driven decision making? Explain the DIKW pyramid with a diagram.",
              "answer": "**Definition:** Data-driven decision making is a process in which organizations base their decisions on data, facts and metrics rather than solely on intuition or experience.\n\n**Explanation:** Organizations collect data, analyze it, interpret results and take decisions. The process is cyclic — decisions are monitored and feedback improves future decisions.\n\n**DIKW Pyramid:**\n1. **Data** — raw facts and figures (e.g., \"sales = 1000\")\n2. **Information** — data + context (e.g., \"sales increased 10%\")\n3. **Knowledge** — patterns and understanding (e.g., \"sales drop in July — seasonal trend\")\n4. **Wisdom** — using knowledge for decisions (e.g., \"keep lower stock in July, run extra campaign\")\n\n**Diagram:** Refer to the DIKW Pyramid diagram in this topic."
            },
            {
              "question": "Explain the four types of analytics with examples.",
              "answer": "**Four Types of Analytics:**\n\n1. **Descriptive Analytics — \"What happened?\"** — Past data ka summary. Reports aur dashboards. Example: last month sales report, user growth stats.\n\n2. **Diagnostic Analytics — \"Why did it happen?\"** — Root cause analysis. Data ke andar reasons dhundti hai. Example: sales kam hui kyunki competitor ne discount diya.\n\n3. **Predictive Analytics — \"What will happen?\"** — Future ka estimate. ML models aur statistics. Example: agle month sales ka estimate, customer churn risk.\n\n4. **Prescriptive Analytics — \"What should we do?\"** — Best action recommend karti hai. Optimization aur simulation. Example: stock kitna rakho, kaunsa campaign chalo.\n\n**Diagram:** Refer to the Analytics Stages diagram — Descriptive → Diagnostic → Predictive → Prescriptive."
            }
          ]
        },
        {
          "id": "components-bi-architecture",
          "number": "1.4",
          "title": "Components of Business Intelligence Architecture",
          "subtitle": "BI architecture ke components — full structure",
          "icon": "warehouse",
          "accent": "#0047ff",
          "englishDefinition": "Business Intelligence architecture is the framework that describes how data flows from various sources to end users. Its core components are: (1) Data Sources — operational systems like ERP and CRM; (2) ETL — Extract, Transform, Load processes that prepare data; (3) Data Warehouse — central store of historical, integrated data; (4) OLAP Server — provides multi-dimensional analysis through data cubes; (5) BI Applications — dashboards, reports and analytics tools; and (6) Users — business analysts, managers and executives who consume the insights.",
          "intro": "Aapne dekha hai ki BI decisions data se leti hai. Lekin kya aap sochte hai ki ye data kahan se aata hai, kahan rakhta hai, aur kaise final dashboard tak aata hai? Is topic mein ham BI architecture ke sab components ko detail mein dekhnge — ek tarah se BI ka \"blueprint\" samjhnge. Exam mein ye topic bahut important hai kyunki architecture diagram ka bhi sawal aa sakta hai.",
          "sections": [
            {
              "type": "definition",
              "title": "BI Architecture kya hai?",
              "kicker": "Definition",
              "body": "BI architecture ek framework hai jo batata hai ki data various sources se kaise flow karta hai aur final user tak kaise aata hai. Iske components ko mila kar ek structure bana hota hai jisse data ka safar clearly dikhai de.",
              "body2": "Architecture ka matlab hai \"structure\" ya \"blueprint\" — ye batata hai ki BI system ke different parts kahan hai aur data unke beech kaise aata-jata hai.",
              "chips": [
                "Framework",
                "Data flow structure",
                "Components",
                "Blueprint"
              ]
            },
            {
              "type": "diagram",
              "title": "BI Architecture — Full Components",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "arch",
              "caption": "BI architecture ke 6 main components hain: Data Sources (ERP, CRM, DB, Excel), ETL (Extract, Transform, Load), Data Warehouse (central historical store), OLAP Server (multi-dimensional cubes), BI Applications (dashboards, reports), aur Users (analysts, managers, executives). Data ek taraf se aata hai aur dusri taraf dashboard tak pahuchta hai."
            },
            {
              "type": "image",
              "title": "BI Architecture (Reference Image)",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/bi-architecture.jpg",
                  "caption": "Multi-Tiered BI Architecture — Data Sources, ETL (Extract Transform Load), Data Warehouse, OLAP Engine, Analysis, Query, Reports, Data Marts, Metadata"
                },
                {
                  "src": "/images/etl-warehouse.jpg",
                  "caption": "Data Warehouse Architecture with ETL Process — Source → ETL → Warehouse → Data Marts"
                }
              ]
            },
            {
              "type": "cards",
              "title": "Har Component Ki Detail",
              "kicker": "Component Detail",
              "cards": [
                {
                  "icon": "database",
                  "title": "1. Data Sources",
                  "body": "BI ka entry point. Data kahan se aata hai? ERP systems (SAP), CRM systems, operational databases, Excel files, external sources (market data, social media). Ye sabhi data ko collect karna part of architecture hai."
                },
                {
                  "icon": "etl",
                  "title": "2. ETL — Extract, Transform, Load",
                  "body": "Architecture ka heart. Extract = data ko sources se nikalna. Transform = data ko clean karna, format karna, de-duplicate karna, business rules apply karna. Load = data ko data warehouse mein daalna. Ye process data ko \"analysis-ready\" banata hai."
                },
                {
                  "icon": "warehouse",
                  "title": "3. Data Warehouse",
                  "body": "Central repository. Subject-oriented, integrated, time-variant, non-volatile historical data. Data warehouse mein data clean aur organized hota hai — analysis ke liye ready. Data marts bhi hote hain (subset for specific departments)."
                },
                {
                  "icon": "cube",
                  "title": "4. OLAP Server",
                  "body": "Data warehouse se data ko multi-dimensional cubes mein organize karta hai. Drill-down, drill-up, slice, dice jaise operations allow karta hai. Fast query responses deta hai. Ye architecture ka \"engine\" hai."
                },
                {
                  "icon": "dashboard",
                  "title": "5. BI Applications",
                  "body": "Front-end layer. Dashboards, reports, scorecards, ad-hoc queries, analytics applications. Tools jaise Tableau, Power BI, QlikSense. Ye sab data ko visual format mein present karte hain."
                },
                {
                  "icon": "bulb",
                  "title": "6. Users",
                  "body": "Architecture ka final component. Business analysts, managers, executives — sabhi dashboards dekh kar decisions lete hain. Architecture ka goal hai user ko relevant, accurate aur timely information dena."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "ETL Process in Detail",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "etl",
              "caption": "ETL teen stages mein kaam karta hai: Extract (sources se data nikalna) → Transform (clean karna, format karna, duplicate hatana, business rules apply karna) → Load (data warehouse mein daalna). Ye sab data ko analysis-ready banata hai."
            },
            {
              "type": "image",
              "title": "ETL Stages (Reference Image)",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/etl-stages.jpg",
                  "caption": "ETL Process Stages — Extract, Transform, Load"
                }
              ]
            },
            {
              "type": "example",
              "title": "Real-World Example",
              "kicker": "Example",
              "body": "Ek bank hai. Uske lakhon customers hain, hr din transaction data aata hai (data sources). ETL process roz raat ko chalتا hai — extract karta hai sab transactions, transform karta hai (currency convert karna, duplicate entries hatana, category set karna), aur load karta hai data warehouse mein. Phir OLAP server us data ko cubes mein organize karta hai — \"monthly transactions by branch\". Managers Tableau dashboard par dekhte hain aur decisions lete hain: kaun sa branch kam kaam kar raha hai, kaun sa product bechna hai. Ye full BI architecture hai."
            },
            {
              "type": "points",
              "title": "Exam-Focused Points",
              "kicker": "Important For Exam",
              "points": [
                "BI architecture ek framework hai — data flow ka structure.",
                "6 components: Data Sources, ETL, Data Warehouse, OLAP Server, BI Applications, Users.",
                "ETL = Extract, Transform, Load. Architecture ka heart.",
                "Data Warehouse features: Subject-oriented, Integrated, Time-variant, Non-volatile (SITn).",
                "OLAP operations: Drill-down, Drill-up, Slice, Dice.",
                "Data marts = data warehouse ka subset for specific departments.",
                "Data flow: Sources → ETL → Warehouse → OLAP → Dashboards → Users."
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "BI architecture = data flow ka structure / blueprint.",
                "6 components: Sources, ETL, Warehouse, OLAP, Apps, Users.",
                "ETL: Extract, Transform, Load — architecture ka heart.",
                "Data Warehouse: Subject-oriented, Integrated, Time-variant, Non-volatile.",
                "OLAP: Drill-down, Slice, Dice — multi-dimensional analysis."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Describe the components of Business Intelligence architecture with a diagram.",
              "answer": "**BI Architecture Components:**\n1. **Data Sources** — ERP, CRM, operational databases, Excel, external sources. Data ka entry point.\n2. **ETL (Extract, Transform, Load)** — data ko extract karna, transform (clean, format, de-duplicate) karna, aur load (warehouse mein daalna).\n3. **Data Warehouse** — central repository. Subject-oriented, integrated, time-variant, non-volatile historical data.\n4. **OLAP Server** — multi-dimensional cubes banata hai. Drill-down, drill-up, slice, dice operations allow karta hai.\n5. **BI Applications** — dashboards, reports, scorecards. Tools: Tableau, Power BI, QlikSense.\n6. **Users** — analysts, managers, executives. Decisions lete hain.\n\n**Data Flow:** Data Sources → ETL → Data Warehouse → OLAP Server → BI Applications → Users.\n\n**Diagram:** Refer to the BI Architecture diagram in this topic."
            },
            {
              "question": "Explain the ETL process in Business Intelligence architecture with a diagram.",
              "answer": "**ETL Process:**\n\n1. **Extract** — Data ko source systems (ERP, CRM, databases) se nikalna. Multiple sources se data collect karna.\n\n2. **Transform** — Data ko clean karna, correct format mein badalna, duplicate hatana, business rules apply karna, aggregations karna. Data ko \"analysis-ready\" banana.\n\n3. **Load** — Transformed data ko data warehouse mein daalna. Historical data ke saath integrate karna.\n\n**Why important:** ETL data quality ensure karta hai. Kharab ETL se kharab data warehouse banta hai — \"garbage in, garbage out\".\n\n**Diagram:** Refer to the ETL Process diagram — Extract → Transform → Load."
            }
          ]
        },
        {
          "id": "role-db-warehouse-analytics",
          "number": "1.5",
          "title": "Role of Databases, Data Warehouses & Analytics in BI",
          "subtitle": "Database, data warehouse aur analytics ka role",
          "icon": "cube",
          "accent": "#0047ff",
          "englishDefinition": "In Business Intelligence, three core technologies play complementary roles: (1) Databases (OLTP — Online Transaction Processing) store day-to-day operational data such as sales, inventory and customer transactions; (2) Data Warehouses (OLAP — Online Analytical Processing) integrate historical data from multiple sources for analysis; and (3) Analytics — descriptive, diagnostic, predictive and prescriptive techniques — transform this data into insights that support business decisions. Databases are the source, data warehouses are the analytical store, and analytics provides the intelligence.",
          "intro": "Aapne socha hai ki ek bade company mein data kahan rehta hai aur uska kya use hota hai? Kuch data rozana transactions mein use hota hai (jaise ek sale karna), kuch data analysis ke liye store hota hai (jaise pichhle 5 saal ki sales). Aur phir us data ko analyze karke insights nikale jaate hain. Is topic mein ham dekhnge ki database, data warehouse aur analytics — teeno ka BI mein kya role hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Teeno Technologies Kya Hai?",
              "kicker": "Overview",
              "body": "BI mein teeno cheezein alag kaam karti hain: (1) Database — rozana transactions ke liye (OLTP), (2) Data Warehouse — historical data analysis ke liye (OLAP), (3) Analytics — data se insights nikalne ke liye. Teeno mil kar ek ecosystem banati hain.",
              "body2": "Aasan sabd mein: Database = rozana ka kaam. Data Warehouse = purana data, analysis ke liye. Analytics = data se wisdom nikalna.",
              "chips": [
                "Database = OLTP",
                "Data Warehouse = OLAP",
                "Analytics = Insights",
                "Teeno ek saath"
              ]
            },
            {
              "type": "cards",
              "title": "Database (OLTP) ka Role",
              "kicker": "Part 1",
              "cards": [
                {
                  "icon": "database",
                  "title": "OLTP — Online Transaction Processing",
                  "body": "Database rozana transactions store karta hai. Jaise ek customer store mein product khareedta hai — wo transaction database mein record hoti hai. Ye real-time, row-based data hai. Fast inserts aur updates ke liye optimized hai."
                },
                {
                  "icon": "cube",
                  "title": "Operational Data",
                  "body": "Database mein current, operational data rehta hai. Daily sales, inventory levels, customer orders, employee records. Ye data analysis ke liye directly use nahi hota — isliye BI uski extraction karke warehouse mein daalti hai."
                },
                {
                  "icon": "check",
                  "title": "BI ka Source",
                  "body": "Database BI ka pehla source hai. ETL process database se data extract karta hai, transform karta hai aur data warehouse mein load karta hai. Database mein jo data hota hai, wo analysis ka base banta hai."
                }
              ]
            },
            {
              "type": "cards",
              "title": "Data Warehouse (OLAP) ka Role",
              "kicker": "Part 2",
              "cards": [
                {
                  "icon": "warehouse",
                  "title": "OLAP — Online Analytical Processing",
                  "body": "Data warehouse historical, integrated data store karta hai. Multi-dimensional analysis ke liye. Data cubes banata hai — jaise \"sales by month, region, product\". Drill-down aur slice-dice operations allow karta hai."
                },
                {
                  "icon": "clock",
                  "title": "Historical Data",
                  "body": "Data warehouse mein pichhle years ka data rehta hai. Time-variant data — aap pichhle month, pichhle saal ki comparison kar sakte hain. Analysis aur reporting ke liye perfect hai."
                },
                {
                  "icon": "search",
                  "title": "Analysis ka Store",
                  "body": "Data warehouse ek \"analytical store\" hai. BI tools (Tableau, Power BI) warehouse se data fetch karti hain aur dashboards banati hain. Warehouse data ko fast, accurate analysis ke liye ready rakhta hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Database vs Data Warehouse (OLTP vs OLAP)",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "db-vs-dw",
              "caption": "Database (OLTP) aur Data Warehouse (OLAP) alag kaam karte hain: Database rozana transactions ke liye (fast inserts/updates, current data), Data Warehouse analysis ke liye (historical, integrated, multi-dimensional). OLTP se data nikalta hai, ETL karke warehouse mein daalta hai, phir OLAP analysis karta hai."
            },
            {
              "type": "cards",
              "title": "Analytics ka Role",
              "kicker": "Part 3",
              "cards": [
                {
                  "icon": "chart",
                  "title": "Descriptive Analytics",
                  "body": "Warehouse se data lekar past ka summary banati hai. \"Kya hua?\" — reports, dashboards. Ye sabse basic level hai — fact present karna."
                },
                {
                  "icon": "search",
                  "title": "Diagnostic Analytics",
                  "body": "Data ke andar reasons dhundti hai. \"Kyun hua?\" — root cause analysis. Warehouse ka data deep dive karke patterns nikalti hai."
                },
                {
                  "icon": "forecast",
                  "title": "Predictive Analytics",
                  "body": "ML models ka use karke future ka estimate banati hai. \"Kya hoga?\" — forecasting. Data warehouse ka historical data training ke liye use hota hai."
                },
                {
                  "icon": "prescriptive",
                  "title": "Prescriptive Analytics",
                  "body": "Best action recommend karti hai. \"Kahan karna hai?\" — optimization. Final output decision support hai. Analytics ka final goal yahi hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Analytics Ka Safar — 4 Stages",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "analytics",
              "caption": "Analytics ka safar chaar stages mein hota hai: Descriptive (kya hua?) → Diagnostic (kyun hua?) → Predictive (kya hoga?) → Prescriptive (kahan karna?). Database data deta hai, warehouse data organize karta hai, aur analytics us data se insights nikalti hai."
            },
            {
              "type": "image",
              "title": "Analytics Types (Reference Image)",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/analytics-types.png",
                  "caption": "Analytics Flowchart — Descriptive, Diagnostic, Predictive, Prescriptive leading to Decision & Action"
                }
              ]
            },
            {
              "type": "example",
              "title": "Real-World Example",
              "kicker": "Example",
              "body": "Ek e-commerce company (Amazon jaisi). Rozana lakhon transactions hoti hain — wo sab database (OLTP) mein store hoti hain. Raat ko ETL process sab transaction data ko data warehouse (OLAP) mein daal deta hai. Phir analytics tools warehouse se data lekar descriptive analytics karti hain (monthly sales), diagnostic analytics (sales kam kaaran kya hai), predictive analytics (agle month ka estimate), aur prescriptive analytics (kaunsa product suggest karna hai). Final mein customer ko products recommend kar diya jata hai. Ye full ecosystem hai — Database, Data Warehouse aur Analytics ek saath."
            },
            {
              "type": "points",
              "title": "Exam-Focused Points",
              "kicker": "Important For Exam",
              "points": [
                "Database = OLTP (Online Transaction Processing). Rozana transactions ke liye.",
                "Data Warehouse = OLAP (Online Analytical Processing). Historical analysis ke liye.",
                "OLTP: fast inserts/updates, current data, row-based.",
                "OLAP: multi-dimensional analysis, historical data, data cubes.",
                "Data flow: Database (OLTP) → ETL → Data Warehouse (OLAP) → Analytics → Decisions.",
                "Analytics 4 types: Descriptive, Diagnostic, Predictive, Prescriptive.",
                "Database = source, Warehouse = analytical store, Analytics = intelligence.",
                "Warehouse features: Subject-oriented, Integrated, Time-variant, Non-volatile."
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Database (OLTP): rozana transactions, current data.",
                "Data Warehouse (OLAP): historical data, multi-dimensional analysis.",
                "Data flow: DB → ETL → Warehouse → Analytics → Decisions.",
                "Analytics: Descriptive → Diagnostic → Predictive → Prescriptive.",
                "DB = source, Warehouse = store, Analytics = intelligence."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Differentiate between databases (OLTP) and data warehouses (OLAP) in Business Intelligence.",
              "answer": "**Database (OLTP — Online Transaction Processing):**\n- Purpose: rozana transactions ke liye (sales, orders, inventory)\n- Data: current, operational\n- Structure: row-based, normalized\n- Operations: fast inserts aur updates\n- Users: operational staff\n\n**Data Warehouse (OLAP — Online Analytical Processing):**\n- Purpose: historical data analysis\n- Data: integrated, historical, time-variant\n- Structure: multi-dimensional cubes, denormalized\n- Operations: complex queries, drill-down, slice, dice\n- Users: analysts, managers, executives\n\n**Relationship:** Database se data extract kiya jata hai, ETL process se transform kiya jata hai, aur data warehouse mein load kiya jata hai. Phir OLAP analysis ke liye use hota hai.\n\n**Diagram:** Refer to the OLTP vs OLAP diagram in this topic."
            },
            {
              "question": "Explain how analytics (descriptive, diagnostic, predictive, prescriptive) converts data into business decisions.",
              "answer": "**Analytics ka safar:**\n\n1. **Descriptive — \"What happened?\"** — Past data ka summary. Reports, dashboards. Ye data ko present karta hai.\n\n2. **Diagnostic — \"Why did it happen?\"** — Root cause analysis. Data ke andar reasons dhundti hai.\n\n3. **Predictive — \"What will happen?\"** — Future ka estimate. ML models ka use.\n\n4. **Prescriptive — \"What should we do?\"** — Best action recommend karti hai. Optimization, simulation.\n\n**Ek example se samjhte hain:**\n- Descriptive: \"Last month sales 10% kam hui.\"\n- Diagnostic: \"Kyun hui? Kyunki ek competitor ne discount diya.\"\n- Predictive: \"Agle month bhi sales kam hogi.\"\n- Prescriptive: \"Toh competitor ke saath alag strategy lo, extra campaign chalo.\"\n\n**Diagram:** Refer to the Analytics Stages diagram — 4 stages of analytics."
            }
          ]
        },
        {
          "id": "applications-bi",
          "number": "1.6",
          "title": "Applications of BI in Business Domains",
          "subtitle": "BI ka use finance, healthcare, retail aur education mein",
          "icon": "ai",
          "accent": "#0047ff",
          "englishDefinition": "Business Intelligence is applied across diverse business domains. In **finance**, BI supports fraud detection, risk management, portfolio optimization and regulatory compliance. In **healthcare**, BI enables patient outcome analysis, resource planning, clinical operations and population health management. In **retail**, BI drives sales forecasting, inventory optimization, customer segmentation and omnichannel analytics. In **education**, BI helps student performance monitoring, enrollment analytics, institutional planning and resource allocation.",
          "intro": "Socha hai ki ek bank, ek hospital, ek shop ya ek school — sab apne tarah se data ka use karte hain? Ek hi BI technology ke different domains mein different applications hain. Is topic mein ham dekhnge ki finance, healthcare, retail aur education — 4 major domains mein BI ka kya use hota hai. Ye bahut important hai kyunki exam mein domain-based applications ka sawal aa sakta hai.",
          "sections": [
            {
              "type": "definition",
              "title": "BI Domains kya hain?",
              "kicker": "Overview",
              "body": "BI ek universal technology hai — ye kisi ek field se simit nahi hai. Har business domain apne data ko analyze karke better decisions leta hai. Finance, healthcare, retail aur education — ye 4 domains sabse important hain.",
              "body2": "Aasan sabd mein: BI ka use karke har field apne problems ko data se solve karta hai — finance mein risk, healthcare mein patient care, retail mein sales, education mein student performance.",
              "chips": [
                "Finance",
                "Healthcare",
                "Retail",
                "Education"
              ]
            },
            {
              "type": "cards",
              "title": "BI Applications by Domain",
              "kicker": "Domain-wise Uses",
              "cards": [
                {
                  "icon": "chart",
                  "title": "Finance",
                  "body": "BI finance mein fraud detection, risk management, portfolio optimization aur regulatory compliance ke liye use hota hai. Banks real-time transaction monitoring karti hain, risk models chalti hain, aur compliance reports auto-generate hoti hain."
                },
                {
                  "icon": "warehouse",
                  "title": "Healthcare",
                  "body": "BI healthcare mein patient outcomes ka analysis, resource planning (beds, staff), clinical operations aur population health management ke liye use hota hai. Hospitals patient data, treatment outcomes aur resource utilization ko analyze karti hain."
                },
                {
                  "icon": "dashboard",
                  "title": "Retail",
                  "body": "BI retail mein sales forecasting, inventory optimization, customer segmentation aur omnichannel analytics ke liye use hota hai. Stores ek saath online aur offline sales dekhte hain, stock levels manage karte hain, aur customers ko segment karte hain."
                },
                {
                  "icon": "book",
                  "title": "Education",
                  "body": "BI education mein student performance monitoring, enrollment analytics, institutional planning aur resource allocation ke liye use hota hai. Schools/universities attendance, grades, completion rates aur resource usage ko track karti hain."
                }
              ]
            },
            {
              "type": "image",
              "title": "BI in Healthcare (Reference Image)",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/bi-healthcare.png",
                  "caption": "BI Applications in Healthcare — leveraging data for operational and financial success"
                }
              ]
            },
            {
              "type": "cards",
              "title": "Common BI Applications (All Domains)",
              "kicker": "General Applications",
              "cards": [
                {
                  "icon": "search",
                  "title": "Customer Insights",
                  "body": "Har domain mein customer/patient/student ka data analyze hota hai. Retail mein customers, healthcare mein patients, education mein students — sabka behavior, preferences aur needs data se pata chalta hai."
                },
                {
                  "icon": "clock",
                  "title": "Operational Efficiency",
                  "body": "Resources ka best use karna. Finance mein capital allocation, healthcare mein beds/staff, retail mein inventory, education mein classrooms/teachers — sab optimize hota hai."
                },
                {
                  "icon": "forecast",
                  "title": "Future Planning",
                  "body": "Forecasting aur planning har domain mein important hai. Finance mein market trends, healthcare mein patient demand, retail mein sales seasonality, education mein enrollment trends — sab predict kiye jaate hain."
                }
              ]
            },
            {
              "type": "example",
              "title": "Real-World Example",
              "kicker": "Example",
              "body": "Ek retail chain (jaise Walmart) BI use karti hai — stores mein cameras aur POS systems se data collect karti hai. BI analyze karta hai: kaunsa product kahan bik raha hai, kaunsa season mein kya chalega, inventory ka status kaisa hai. Phir supply chain optimize karta hai — kaun si store mein kaun sa product bhejo. Yehi BI ka retail domain application hai. Healthcare mein ek hospital BI use karta hai patient wait times, bed utilization aur treatment outcomes ka analysis karne ke liye."
            },
            {
              "type": "points",
              "title": "Exam-Focused Points",
              "kicker": "Important For Exam",
              "points": [
                "BI applications domain-wise classify hoti hain — finance, healthcare, retail, education.",
                "Finance: fraud detection, risk management, portfolio optimization, compliance.",
                "Healthcare: patient outcomes, resource planning, clinical operations.",
                "Retail: sales forecasting, inventory optimization, customer segmentation.",
                "Education: student performance, enrollment analytics, resource allocation.",
                "Common applications: customer insights, operational efficiency, future planning.",
                "BI har domain mein data-driven decisions leti hai."
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Finance: fraud, risk, portfolio, compliance.",
                "Healthcare: patient outcomes, resources, clinical ops.",
                "Retail: sales forecast, inventory, customer segments.",
                "Education: student performance, enrollment, planning.",
                "BI har domain mein data se better decisions deti hai."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Explain the applications of Business Intelligence in any two business domains with examples.",
              "answer": "**BI Applications in Different Domains:**\n\n**1. Finance:**\n- **Fraud detection** — real-time transaction monitoring, anomaly detection\n- **Risk management** — credit risk, market risk analysis\n- **Portfolio optimization** — investment decisions\n- **Regulatory compliance** — automatic report generation\n\n**2. Healthcare:**\n- **Patient outcome analysis** — treatment effectiveness, recovery rates\n- **Resource planning** — beds, staff, equipment utilization\n- **Clinical operations** — workflow optimization\n- **Population health** — disease patterns, preventive care\n\n**3. Retail:**\n- **Sales forecasting** — seasonal trends, demand prediction\n- **Inventory optimization** — stock levels, replenishment\n- **Customer segmentation** — behavior, preferences, lifetime value\n- **Omnichannel analytics** — online + offline sales\n\n**4. Education:**\n- **Student performance** — grades, attendance, completion rates\n- **Enrollment analytics** — admission trends, retention\n- **Institutional planning** — resource allocation\n\n**Diagram:** Refer to BI applications by domain structure in this topic."
            },
            {
              "question": "What are the common applications of BI across all business domains?",
              "answer": "**Common BI Applications Across Domains:**\n\n1. **Customer Insights** — har domain mein customer/patient/student ka behavior aur preferences analyze kiye jaate hain.\n\n2. **Operational Efficiency** — resources ka best use. Finance mein capital, healthcare mein beds/staff, retail mein inventory, education mein classrooms.\n\n3. **Future Planning** — forecasting aur strategic planning. Market trends, demand prediction, seasonal patterns, enrollment trends.\n\n4. **Performance Monitoring** — KPIs track karna. Sales, patient satisfaction, student grades, financial ratios.\n\n5. **Decision Support** — data-driven decisions har level par. Strategic, tactical, operational.\n\n**Aasan sabd mein:** BI har domain mein \"data se better decisions\" ka kaam karta hai — chahe finance ho, healthcare, retail ya education."
            }
          ]
        },
        {
          "id": "benefits-challenges-bi",
          "number": "1.7",
          "title": "Benefits & Challenges of BI Systems",
          "subtitle": "BI implement karna — faayde aur challenges",
          "icon": "warn",
          "accent": "#0047ff",
          "englishDefinition": "Business Intelligence systems offer significant **benefits** including improved decision-making, increased operational efficiency, enhanced customer satisfaction, competitive advantage, cost reduction and revenue growth. However, implementing BI also involves **challenges** such as data quality issues, high costs of implementation, data security and privacy concerns, resistance to change, technical complexity, and the need for skilled personnel. Understanding both benefits and challenges helps organizations plan successful BI implementations.",
          "intro": "Har technology ka dukh aur sukh hota hai. BI bhi exception nahi hai — ye bade faayde deti hai, lekin implementation mein challenges bhi hai. Aaj ke time mein companies BI implement karna chahti hain, lekin kuch problems ka samna bhi hota hai. Is topic mein ham dono dekhnge — faayde (benefits) aur challenges — aur samjhnge ki successful BI implementation ka kya tarika hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Benefits vs Challenges — Ek Jhatka Mein",
              "kicker": "Overview",
              "body": "BI ka main goal hai better decisions dena. Iske faayde clear hain — fast decisions, accuracy, efficiency, competitive advantage. Lekin implementation ke raaste mein kuch challenges bhi hain — data quality, cost, security, aur change management.",
              "body2": "Aasan sabd mein: BI acha hai — lekin iske liye acha data, achi technology aur logon ka support chahiye. \"Garbage in, garbage out\" ka principle yaad rakhna.",
              "chips": [
                "Benefits = Faayde",
                "Challenges = Mushkilein",
                "Both important"
              ]
            },
            {
              "type": "cards",
              "title": "BI ke Benefits (Faayde)",
              "kicker": "Why implement BI?",
              "cards": [
                {
                  "icon": "bulb",
                  "title": "Better Decision Making",
                  "body": "BI data-driven decisions deti hai — gut feeling pe nahi. Managers real-time data dekh kar decisions lete hain, jo accurate aur fast hoti hain. Ye BI ka sabse bada benefit hai."
                },
                {
                  "icon": "clock",
                  "title": "Increased Efficiency",
                  "body": "Operations fast aur efficient hote hain. Manual reporting automatize hota hai, data analysis fast hota hai, aur processes smooth chalte hain. Time aur cost dono bachte hain."
                },
                {
                  "icon": "chart",
                  "title": "Competitive Advantage",
                  "body": "Data-driven companies market mein aage rehti hain. Wo customers ko behtar samajhti hain, market trends ko pehle pakadti hain, aur competitors se aage nikalti hain."
                },
                {
                  "icon": "check",
                  "title": "Cost Reduction",
                  "body": "BI waste identify karti hai — extra inventory, underperforming campaigns, inefficient processes. Isse costs kam hote hain aur ROI (Return on Investment) badhta hai."
                }
              ]
            },
            {
              "type": "cards",
              "title": "BI ke Challenges (Mushkilein)",
              "kicker": "What can go wrong?",
              "cards": [
                {
                  "icon": "database",
                  "title": "Data Quality",
                  "body": "Sabse bada challenge — \"garbage in, garbage out\". Kharab, incomplete ya outdated data se kharab decisions nikalti hain. Data ko clean aur maintain karna mushkil hai."
                },
                {
                  "icon": "ai",
                  "title": "Cost & Complexity",
                  "body": "BI implement karne mein cost high hai — technology, infrastructure, tools, aur skilled people. Small organizations ke liye ye challenge ho sakta hai."
                },
                {
                  "icon": "warn",
                  "title": "Security & Privacy",
                  "body": "Sensitive business data ka security aur privacy ka sawal hai. Data breaches, compliance (GDPR etc.), aur unauthorized access — sabse risk hai."
                },
                {
                  "icon": "executive",
                  "title": "Resistance to Change",
                  "body": "Employees naye tools aur processes mein changes nahi chahte. Training aur change management chahiye. \"People\" ka factor sabse important hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "BI Benefits vs Challenges",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "benefits-challenges",
              "caption": "BI implementation ke faayde (better decisions, efficiency, competitive advantage, cost reduction) aur challenges (data quality, cost, security, resistance to change) dono sides dekhna important hai. Successful implementation ke liye benefits ko maximize aur challenges ko minimize karna part of planning hai."
            },
            {
              "type": "example",
              "title": "Real-World Example",
              "kicker": "Example",
              "body": "Ek mid-size company ne BI implement kiya. Pehle faayde mila — managers dashboards dekh kar fast decisions le rahe the, sales improve ho rahi thi. Lekin 6 months baad ek problem hui — data quality issue (kharab data) se kuch dashboards wrong information dikha rahe the. Phir company ne data clean karna, staff ko train karna aur security measures lagaye. Final mein BI successful ho gayi. Ye example batata hai — benefits to aayengi, lekin challenges ko address karna important hai."
            },
            {
              "type": "points",
              "title": "Exam-Focused Points",
              "kicker": "Important For Exam",
              "points": [
                "Benefits: better decisions, increased efficiency, competitive advantage, cost reduction, revenue growth, customer satisfaction.",
                "Challenges: data quality, cost, complexity, security/privacy, resistance to change, skilled personnel.",
                "\"Garbage in, garbage out\" — data quality sabse important challenge hai.",
                "Change management — employees ko train karna aur support dena important hai.",
                "Successful BI = benefits maximize karna + challenges minimize karna."
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Benefits: better decisions, efficiency, competitive advantage, cost reduction.",
                "Challenges: data quality, cost, security, resistance to change.",
                "Garbage in, garbage out — kharab data se kharab decisions.",
                "Change management important hai.",
                "Successful BI = benefits maximize + challenges minimize."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Discuss the benefits and challenges of implementing a Business Intelligence system in an organization.",
              "answer": "**Benefits of BI:**\n\n1. **Better Decision Making** — Data-driven decisions, real-time insights, accuracy.\n2. **Increased Efficiency** — Automated reporting, faster processes, less manual work.\n3. **Competitive Advantage** — Market trends early detection, customer understanding.\n4. **Cost Reduction** — Waste identification, inventory optimization.\n5. **Revenue Growth** — Better marketing, customer retention.\n6. **Customer Satisfaction** — Personalized experiences, better service.\n\n**Challenges of BI:**\n\n1. **Data Quality** — \"Garbage in, garbage out\". Incomplete, inconsistent, or outdated data.\n2. **Cost & Complexity** — High implementation cost, infrastructure, tools.\n3. **Security & Privacy** — Data breaches, compliance (GDPR), unauthorized access.\n4. **Resistance to Change** — Employees resist new tools and processes.\n5. **Technical Complexity** — Integration with existing systems, maintenance.\n6. **Skilled Personnel** — Need for data analysts, data scientists.\n\n**Conclusion:** BI benefits aur challenges dono hain — successful implementation ke liye challenges ko address karna (data quality, training, security) important hai."
            },
            {
              "question": "What is \"garbage in, garbage out\" in the context of BI? Explain with an example.",
              "answer": "**\"Garbage in, garbage out\" (GIGO)** — kharab (garbage) data se kharab (garbage) results nikalte hain. Ye BI ka sabse important principle hai.\n\n**Explanation:**\n- BI system sirf data ko process aur present karti hai — data ka quality BI ke results pe directly impact dalta hai.\n- Agar data kharab hai (incomplete, duplicate, outdated, incorrect), toh analysis bhi kharab hogi.\n- Kharab analysis se kharab decisions nikalti hain.\n\n**Example:**\n- Ek retail company mein inventory data mein duplicate entries hain.\n- BI dashboard batata hai \"stock 100 units hai\" — lekin actually stock 100 nahi hai.\n- Manager decision leta hai \"order kam karo\" — lekin actual stock kam hai.\n- Result: stock-out ho jata hai, sales loss hota hai.\n\n**Lesson:** Data quality sabse pehla priority hai — data ko clean, accurate aur up-to-date rakhna important hai."
            }
          ]
        },
        {
          "id": "genai-llm-bi",
          "number": "1.8",
          "title": "Generative AI & LLMs in Business Intelligence",
          "subtitle": "GenAI aur LLMs ka BI mein use",
          "icon": "ai",
          "accent": "#0047ff",
          "englishDefinition": "Generative AI (GenAI) refers to artificial intelligence capable of generating text, images, code or other content. Large Language Models (LLMs) such as GPT-4 are a type of GenAI trained on vast amounts of text. In Business Intelligence, GenAI and LLMs are transforming how users interact with data — enabling natural language queries (\"ask your data\"), automated insight generation, report writing, anomaly explanations, and conversational analytics dashboards. They bridge the gap between data analysts and non-technical business users.",
          "intro": "Aapne ChatGPT use kiya hai? Ya aapne Google se normal language mein question pucha hai? Wo Generative AI hai. Ab imaginary karo ki aap apne business data se normal Hindi/English mein puch sakte ho — \"Pichhle month ka sales kaisa raha?\" aur system aapko answer degi. Ye GenAI aur LLMs ka BI mein use hai. Is topic mein ham dekhnge ki GenAI/LLMs kya hain, aur ye BI ko kaisa transform kar rahi hain. Ye aaj ke zamana ka sabse trending topic hai.",
          "sections": [
            {
              "type": "definition",
              "title": "GenAI aur LLM kya hain?",
              "kicker": "Definition",
              "body": "Generative AI (GenAI) ek AI ka type hai jo content generate kar sakti hai — text, images, code, aur baki media. LLMs (Large Language Models) GenAI ka ek subtype hain jo text ko process aur generate karti hain.",
              "body2": "Aasan sabd mein: GenAI = \"bana do\" (content generate karna). LLM = \"samajh lo aur likh do\" (language ko samajh kar text generate karna). ChatGPT ek LLM hai.",
              "chips": [
                "GenAI = Generate content",
                "LLM = Language models",
                "ChatGPT example hai",
                "BI mein transform kar rahe hain"
              ]
            },
            {
              "type": "cards",
              "title": "GenAI/LLMs ke Key Concepts",
              "kicker": "Important Terms",
              "cards": [
                {
                  "icon": "ai",
                  "title": "Generative AI (GenAI)",
                  "body": "AI ka wo type jo naye content generate karti hai — text, images, code, audio, video. \"Generative\" ka matlab hai \"banana\". Ye previous patterns se naya output banati hai."
                },
                {
                  "icon": "book",
                  "title": "Large Language Models (LLMs)",
                  "body": "GenAI ka ek subtype jo language ko samajh aur generate karti hai. LLMs par bade datasets par train kiye hote hain — text, code, aur baki content. Examples: GPT-4, Claude, Gemini, LLaMA."
                },
                {
                  "icon": "search",
                  "title": "Natural Language Query",
                  "body": "\"Ask your data\" — users normal language mein data se puch sakte hain. \"Pichhle month ka sales?\" ya \"Kaunsa product top mein hai?\" — ek normal conversation jaise. Ye non-technical users ke liye BI accessible banati hai."
                },
                {
                  "icon": "bulb",
                  "title": "AI-Powered Insights",
                  "body": "BI + GenAI mil kar automatic insights generate karti hain. System data ko analyze karke automatically batati hai \"kuch kya hua, kyun hua, aur kya karna hai\". Ye traditional BI se aage hai."
                }
              ]
            },
            {
              "type": "cards",
              "title": "GenAI/LLMs in BI — Applications",
              "kicker": "Use in BI",
              "cards": [
                {
                  "icon": "chart",
                  "title": "Conversational Analytics",
                  "body": "Chatbots aur voice assistants data se conversation karti hain. \"Show me last quarter sales\" ya \"Why did sales drop?\" — aap normal language mein puch sakte hain, system answer degi. Ye BI ko non-technical users ke liye accessible banati hai."
                },
                {
                  "icon": "dashboard",
                  "title": "Automated Report Generation",
                  "body": "LLMs automatic reports likh sakti hain — data ka summary automatically prepare karti hain. Excel/Power BI se ek click mein report generate ho sakti hai. Ye time bachata hai aur efficiency badhata hai."
                },
                {
                  "icon": "forecast",
                  "title": "Anomaly Detection & Explanation",
                  "body": "GenAI data ke anomalies (unusual patterns) detect aur explain kar sakti hai. \"Sales kam hui kyun?\" — system batati hai possible reasons. Ye diagnostic analytics ko aur powerful banati hai."
                },
                {
                  "icon": "prescriptive",
                  "title": "Predictive Recommendations",
                  "body": "LLMs historical data aur patterns dekh kar recommendations generate karti hain. \"Kaunsa product stock karna hai?\" ya \"Kaunsa campaign chalana hai?\" — prescriptive analytics ka advanced version."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "GenAI + BI Integration",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "genai",
              "caption": "GenAI/LLMs BI ke saath integration kar rahi hain: Data → BI system → GenAI/LLM → Natural language output. Users normal language mein puchte hain, LLM data ko samajh kar answer generate karti hai. Ye BI ko accessible, automatic aur conversational banati hai."
            },
            {
              "type": "image",
              "title": "GenAI in Analytics (Reference Images)",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/genai-bi.jpg",
                  "caption": "Generative AI Analytics — Transforming Business Intelligence"
                },
                {
                  "src": "/images/genai-analytics.jpg",
                  "caption": "AI Analytics Myths Demystified — GenAI and BI integration"
                }
              ]
            },
            {
              "type": "example",
              "title": "Real-World Example",
              "kicker": "Example",
              "body": "Imagine ek sales manager hai. Pehle wo reports ke liye IT team ko mail karta tha, 2 days wait karta tha. Ab wo ek GenAI-powered BI dashboard use karta hai — normal language mein puchta hai: \"Pichhle quarter ka sales report dikhao\" ya \"Kaunsa product sabse jada bik raha hai?\" — system instant answer deti hai. Wo aage puchta hai: \"Sales kam hui kyun?\" — GenAI diagnostic analysis karke batati hai possible reasons. Ye conversational analytics hai — BI + LLM ka mishran."
            },
            {
              "type": "points",
              "title": "Exam-Focused Points",
              "kicker": "Important For Exam",
              "points": [
                "GenAI = Generative AI — content generate karna (text, images, code).",
                "LLM = Large Language Model — language ko samajh aur generate karna. Examples: GPT-4, Claude, Gemini.",
                "BI mein GenAI/LLMs ka use: conversational analytics, automated reports, anomaly explanation, recommendations.",
                "\"Ask your data\" — natural language query karna ek important application hai.",
                "GenAI BI ko non-technical users ke liye accessible banati hai.",
                "Conversational analytics — chatbots aur voice assistants data se conversation karti hain.",
                "AI-powered insights — automatic analysis aur recommendations.",
                "ChatGPT ek LLM hai — GenAI ka sabse famous example."
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "GenAI = content generate karna (text, images, code).",
                "LLM = language model — ChatGPT/GPT-4 examples.",
                "BI mein: ask your data, auto reports, anomaly explanation.",
                "Conversational analytics — normal language mein data se pucho.",
                "GenAI BI ko accessible aur automatic banati hai."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Define Generative AI (GenAI) and Large Language Models (LLMs). Explain their applications in Business Intelligence.",
              "answer": "**Generative AI (GenAI):**\nGenAI ek AI ka type hai jo naye content generate karti hai — text, images, code, audio. Ye previous patterns se naya output banati hai.\n\n**Large Language Models (LLMs):**\nLLMs GenAI ka subtype hai jo language ko samajh aur generate karti hai. Ye bade datasets par train kiye hoti hain. Examples: GPT-4, Claude, Gemini, LLaMA.\n\n**Applications in BI:**\n\n1. **Conversational Analytics** — \"Ask your data\" — users normal language mein data se puchte hain, system answer deti hai.\n\n2. **Automated Report Generation** — reports automatic generate hoti hain, time bachta hai.\n\n3. **Anomaly Detection & Explanation** — unusual patterns detect aur explain karti hai.\n\n4. **Predictive Recommendations** — historical data se recommendations generate karti hai.\n\n**Impact:** GenAI BI ko accessible, automatic aur conversational banati hai — non-technical users bhi data se directly interact kar sakte hain.\n\n**Diagram:** Refer to GenAI + BI Integration diagram in this topic."
            },
            {
              "question": "What is \"Conversational Analytics\"? How does it benefit non-technical business users?",
              "answer": "**Conversational Analytics:**\nConversational analytics ka matlab hai data se normal language (Hinglish/English) mein conversation karna. Users complex queries likhne ya dashboards interact karne ke  instead normal language mein puchte hain.\n\n**Example:**\n- \"Pichhle month ka sales kaisa raha?\"\n- \"Kaunsa product sabse jada bik raha hai?\"\n- \"Sales kam hui kyun?\"\n\n**Benefits for Non-Technical Users:**\n\n1. **No technical knowledge needed** — users SQL, dashboards ya complex tools jaanne ki zaroorat nahi hai.\n\n2. **Faster decisions** — data tak direct access, reports ke liye IT team ka wait nahi karna.\n\n3. **Self-service** — non-technical users khud apna analysis kar sakte hain.\n\n4. **Accessibility** — BI har employee ke liye accessible ho jati hai — chahe wo finance ho, marketing, HR, ya operations.\n\n**Impact:** Ye BI ka reach badhati hai — ek sales manager, HR person ya marketing executive sab data se directly interact kar sakte hain. Ye \"democratization of data\" kehlaata hai."
            }
          ]
        }
      ]
    }
  ],
  "cyber-security": [
    {
      "id": "unit-1",
      "number": "1",
      "name": "Introduction to Cyber Security",
      "topics": [
        {
          "id": "intro-cyber",
          "number": "1.1",
          "title": "Introduction to Cyber Security",
          "subtitle": "Cyber security kya hai — basic concepts aur importance",
          "icon": "shield",
          "accent": "#0047ff",
          "englishDefinition": "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes. Implementing effective cybersecurity measures is especially challenging today because there are more devices than people, and attackers are becoming more innovative.",
          "intro": "Aaj ki digital duniya mein, har jagah computers, smartphones aur internet hai. Har din hum online banking, shopping, social media — sab karte hain. Lekin kya aapne socha hai ki ye sab safely kaise chal raha hai? Cyber security ka matlab hai internet par safe rehna, hackers se bachna, aur apne digital data ko protect karna. Is topic mein ham samjhnge ki cyber security kya hai, kaisa kam karti hai, aur ye hamari zindagi mein kyun important hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Cyber Security kya hai? (Simple Words Mein)",
              "kicker": "Definition",
              "body": "Cyber security ek aisa process hai jisme ham apne computers, networks, aur digital data ko hackers, malware, aur other online threats se protect karte hain. Ye har tarike se digital attacks se bachne ka kaam karti hai — chahe wo phishing ho, virus ho, ya ransomware.",
              "body2": "Ek sentence mein: Cyber security ka matlab hai \"internet par apne digital assets ko safe rakhna aur unhe attackers se protect karna\".",
              "chips": [
                "Protect systems",
                "Secure networks",
                "Defend data",
                "Prevent attacks"
              ]
            },
            {
              "type": "cards",
              "title": "Cyber Security Ke Key Areas",
              "kicker": "Important Concepts",
              "cards": [
                {
                  "icon": "shield",
                  "title": "Network Security",
                  "body": "Network security ka matlab hai apne computer network ko protect karna. Ye firewalls, intrusion detection systems (IDS), aur virtual private networks (VPNs) ka use karti hai taaki unauthorized access roka ja sake."
                },
                {
                  "icon": "database",
                  "title": "Application Security",
                  "body": "Application security apps aur software ko threats se protect karti hai. Ye development ke time hi security features add karti hai — input validation, authentication, encryption."
                },
                {
                  "icon": "lock",
                  "title": "Information Security",
                  "body": "Information security ka matlab hai sensitive data ko protect karna — chahe wo personal information ho, financial records ho, ya business secrets. Ye data ko unauthorized access se bachati hai."
                },
                {
                  "icon": "bulb",
                  "title": "Operational Security",
                  "body": "Operational security processes aur decisions ko protect karti hai. Ye policies, procedures, aur guidelines banati hai taaki organization ka har operation safe rahe."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Cyber Security — Overall Framework",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "cyber-framework",
              "caption": "Cyber security 4 main areas par kaam karti hai: Network Security, Application Security, Information Security, aur Operational Security. Sab milkar ek complete security posture banati hai."
            },
            {
              "type": "points",
              "title": "Cyber Security Kyon Important Hai?",
              "kicker": "Key Points",
              "points": [
                "Digital transformation — aaj har business online hai, isliye security zaroori hai.",
                "Data breaches ka loss — financial aur reputational damage dono ho sakta hai.",
                "Legal compliance — government regulations data protection ko mandatory karti hain.",
                "Trust — customers sirf tabhi business se connect karte hain jab wo safe feel karte hain."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-intro-shield.jpg",
                  "caption": "Cyber Security - Shielding digital systems from online threats"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Cyber security = digital systems aur data ko online threats se protect karna.",
                "4 key areas: Network, Application, Information, Operational Security.",
                "Hack hone par financial loss, reputation damage, aur legal issues ho sakte hain.",
                "Security har organization ki zaroorat hai — small business bhi."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Define Cyber Security. Explain its importance in the modern digital world.",
              "answer": "**Cyber Security Definition:**\nCyber security is the practice of protecting systems, networks, aur digital data from cyber attacks. Ye unauthorized access, data breaches, aur digital theft se bachne ka process hai.\n\n**Importance:**\n\n1. **Digital Transformation** — Aaj har business online hai. Banks, hospitals, schools — sab digital services provide karte hain. Security ke bina ye sab risky ho jata hai.\n\n2. **Data Protection** — Personal information, financial records, business secrets — sab sensitive data hackers ke target hoti hai. Security isse protect karti hai.\n\n3. **Financial Loss Prevention** — Cyber attacks ka financial loss hota hai. Ransomware attacks mein companies khud paise de deti hain. Security isse rokti hai.\n\n4. **Legal Compliance** — Government ne data protection laws banaye hain (jaise IT Act 2000). Security compliance ke liye zaroori hai.\n\n5. **Trust aur Reputation** — Customers sirf tabhi business se connect karte hain jab wo safe feel karte hain. Data breach par company ki reputation kharb hoti hai.\n\n**Diagram:** Refer to Cyber Security Framework diagram showing 4 key areas."
            },
            {
              "question": "What are the main areas of Cyber Security? Briefly explain each.",
              "answer": "**4 Main Areas of Cyber Security:**\n\n1. **Network Security** — Computer networks ko protect karti hai. Firewalls, IDS (Intrusion Detection Systems), VPNs (Virtual Private Networks) ka use karti hai. Network traffic monitor karti hai aur unauthorized access rokti hai.\n\n2. **Application Security** — Apps aur software ko protect karti hai. Development ke time security features add karti hai — input validation, authentication, encryption, code reviews.\n\n3. **Information Security** — Sensitive data ko protect karti hai. Data encryption, access controls, aur backup policies ka use karti hai. Personal information, financial records, business secrets sab safe rehte hain.\n\n4. **Operational Security** — Organizational processes ko protect karti hai. Security policies, procedures, aur guidelines banati hai. Employee training, incident response plans, aur risk management ka kaam karti hai.\n\n**Aasan sabd mein:** Network security traffic ko control karti hai, application security software ko safe banati hai, information security data ko protect karti hai, operational security processes ko secure rakhti hai.\n\n**Diagram:** Refer to Cyber Security Framework diagram."
            }
          ]
        },
        {
          "id": "need-importance-cyber",
          "number": "1.2",
          "title": "Need, Importance and Challenges in Cyber Security",
          "subtitle": "Cyber security kyun zaroori hai aur challenges kya hain",
          "icon": "warn",
          "accent": "#0047ff",
          "englishDefinition": "Cybersecurity is critically important because society is deeply dependent on technology. From personal communications to national infrastructure, everything is connected. The need arises from increasing cyber threats, growing attack surfaces, and the high cost of data breaches. Key challenges include keeping pace with evolving threats, securing legacy systems, addressing the skills gap, and balancing security with usability.",
          "intro": "Kya aapne socha hai ki aaj ke bina cyber security kya hoga? Banks ka server hack ho, hospital ka data leak ho, ya government websites down ho — toh kya hoga? Cyber security aaj ki zaroorat hai, nahi toh digital duniya collapse ho sakti hai. Is topic mein ham dekhnge ki cyber security ka need kahan se aata hai, ye kaise important hai, aur hamare samajh mein challenges kya hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Cyber Security ka Need kahan se aata hai?",
              "kicker": "Understanding the Need",
              "body": "Cyber security ka need 3 main reasons se aata hai: (1) Internet ka overuse — aaj har cheez online hai, (2) Hackers ka increase — attacks roz badh rahe hain, (3) Data ka importance — personal, financial, government data sab sensitive hai.",
              "body2": "Simple words mein: Jab aapka sabkuch online hai, toh uska protection zaroori hai. Bini security ke online system hamesha risk mein rehte hain.",
              "chips": [
                "Internet overuse",
                "Growing threats",
                "Data importance"
              ]
            },
            {
              "type": "cards",
              "title": "Cyber Security ke Challenges",
              "kicker": "Key Challenges",
              "cards": [
                {
                  "icon": "warn",
                  "title": "Rapidly Evolving Threats",
                  "body": "Hackers ka techniques din ba din badalte hain. Ek security measure fix hoti hai toh hackers naya bypass dhundh lete hain. Staying ahead of threats ek constant challenge hai."
                },
                {
                  "icon": "database",
                  "title": "Legacy Systems",
                  "body": "Bada organizations mein purane systems (30+ years old) abhi bhi use hote hain. Ye modern security tools nahi support karte. Old software patch nahi ho sakta, isliye vulnerable rehte hain."
                },
                {
                  "icon": "users",
                  "title": "Skills Gap",
                  "body": "Cyber security experts ki demand bahut high hai, supply kam hai. Qualified professionals kam hain. Ye industry ka sabse bada challenge hai — qualified security engineers nahi milte."
                },
                {
                  "icon": "bulb",
                  "title": "Balancing Security & Usability",
                  "body": "Zyada security strict ho toh users iske use karna band dete hain. Simple passwords require karti hai toh weak ho jata hai. Ek balance maintain karna zaroori hai — secure hone ke saath use bhi easy hona chahiye."
                }
              ]
            },
            {
              "type": "points",
              "title": "Cyber Security ka Importance",
              "kicker": "Why It Matters",
              "points": [
                "Infrastructure protection — power grids, transportation, healthcare systems sab online hain.",
                "Economic stability — cyber attacks economic growth ko slow kar sakte hain.",
                "National security — government data, defense systems cyber attacks ke target ho sakte hain.",
                "Individual privacy — personal information, messages, photos sab protect karna zaroori hai."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-framework-shield.jpg",
                  "caption": "Cyber Security Framework - 4 key areas of protection"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Cyber security ka need Internet overuse, growing threats, aur data importance se aata hai.",
                "4 key challenges: evolving threats, legacy systems, skills gap, security-usability balance.",
                "Importance: infrastructure, economy, national security, individual privacy.",
                "Security hamesha evolving rahti hai — ek solution forever nahi chalti."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Discuss the need and importance of Cyber Security in today's digital world.",
              "answer": "**Need for Cyber Security:**\n\n1. **Internet ka Overuse** — Aaj har cheez online hai: banking, shopping, education, healthcare. Jitna online activity badhegi, utna attack surface badhega.\n\n2. **Growing Cyber Threats** — Hackers din ba din naye techniques dhundh rahe hain. Ransomware, phishing, DDoS attacks roz hote hain.\n\n3. **Data Importance** — Personal data, financial records, government information — sab sensitive hai. Data leak ho toh heavy loss ho sakta hai.\n\n**Importance:**\n\n1. **Infrastructure Protection** — Power grids, transportation systems, hospitals — sab online hain. Hack ho toh nation halt ho sakti hai.\n\n2. **Economic Stability** — Cyber attacks financial markets ko affect karte hain. Companies ka loss millions mein ho sakta hai.\n\n3. **National Security** — Defense systems, government databases cyber attacks ke target ho sakte hain.\n\n4. **Individual Privacy** — Har insaan ka personal data — messages, photos, bank details — sab protect hona chahiye.\n\n**Diagram:** Refer to Cyber Security Importance diagram."
            },
            {
              "question": "What are the major challenges faced in implementing Cyber Security?",
              "answer": "**4 Major Challenges in Cyber Security:**\n\n1. **Rapidly Evolving Threats** — Hackers ka techniques continuous badalte hain. Security measures ek time fixed hoti hai, but hackers naya bypass dhundh lete hain. Staying ahead of threats ek constant challenge hai.\n\n2. **Legacy Systems** — Purane systems (30+ years old) abhi bhi use hote hain. Ye modern security tools nahi support karte. Old software patch nahi ho sakta — isliye long-term vulnerable rehte hain.\n\n3. **Skills Gap** — Cyber security experts ki demand high hai, supply kam hai. Qualified professionals kam hain. Ye industry ka sabse bada challenge hai.\n\n4. **Balancing Security & Usability** — Zyada security strict ho toh users iske use karna band dete hain. Simple passwords require karti hai toh weak ho jata hai. Ek balance maintain karna zaroori hai.\n\n**Other Challenges:**\n\n5. **Cost** — Security implementation expensive hai. Small companies afford nahi kar pati.\n\n6. **Complexity** — Modern IT environments bahut complex hain. Multi-cloud, remote work, IoT devices — sab security ko difficult banate hain.\n\n**Diagram:** Refer to Cyber Security Challenges diagram."
            }
          ]
        },
        {
          "id": "cyberspace",
          "number": "1.3",
          "title": "Cyberspace",
          "subtitle": "Cyberspace kya hai — digital world ka concept",
          "icon": "globe",
          "accent": "#0047ff",
          "englishDefinition": "Cyberspace is the global domain of human activity and communication via digital networks. It encompasses the internet, cellular networks, and all connected devices and systems. Cyberspace is not a physical place but a virtual environment where information is created, stored, shared, and protected.",
          "intro": "\"Cyberspace\" word sun ke aapke dimaag mein kya aata hai? Ek virtual duniya, internet ka wo jagah jahan hum sab online activity karte hain. Lekin cyberspace sirf internet nahi hai — ye ek broader concept hai. Is topic mein ham samjhnge ki cyberspace kya hai, iske components kya hain, aur ye hamari zindagi mein kahan tak faila hua hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Cyberspace kya hai?",
              "kicker": "Definition",
              "body": "Cyberspace ek global virtual environment hai jahan digital communication aur human activity hoti hai. Ye internet, cellular networks, aur connected devices par based hai. Cyberspace ek physical jagah nahi hai — ye digital networks ka wo space hai jahan information create, store, share aur protect hoti hai.",
              "body2": "Simple words mein: Cyberspace = Internet + Mobile Networks + Connected Devices + Digital Communication. Ye aaj ki modern duniya ka sabse important virtual space hai.",
              "chips": [
                "Virtual environment",
                "Global domain",
                "Digital communication",
                "Connected networks"
              ]
            },
            {
              "type": "cards",
              "title": "Cyberspace ke Components",
              "kicker": "Key Components",
              "cards": [
                {
                  "icon": "globe",
                  "title": "Physical Infrastructure",
                  "body": "Cyberspace ka base physical infrastructure hai — servers, routers, switches, undersea cables, satellites. Ye sab digital data ko physically transmit aur store karte hain."
                },
                {
                  "icon": "database",
                  "title": "Logical Layer",
                  "body": "Logical layer software, protocols, aur applications ka hai. Ye data ko process, route, aur protect karta hai. TCP/IP, HTTP, DNS — ye sab protocols logical layer ka part hain."
                },
                {
                  "icon": "users",
                  "title": "Social Layer",
                  "body": "Social layer users, communities, aur human activity ka hai. Social media, online transactions, digital communication — sab cyberspace ka social layer hai."
                },
                {
                  "icon": "shield",
                  "title": "Security Layer",
                  "body": "Security layer cyberspace ko protect karti hai. Firewalls, encryption, authentication — ye sab security mechanisms cyberspace ka integral part hain."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Cyberspace — Layered Structure",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "cyberspace-layers",
              "caption": "Cyberspace 4 layers par based hai: Physical (infrastructure), Logical (software/protocols), Social (users/activity), aur Security (protection). Sab milkar digital world banate hain."
            },
            {
              "type": "points",
              "title": "Cyberspace ka Scope aur Reach",
              "kicker": "Key Points",
              "points": [
                "Global reach — cyberspace duniya bhar mein faila hua hai, borders ko cross karta hai.",
                "Always connected — 24/7 activity, din raat digital communication hoti hai.",
                "Multi-dimensional — text, audio, video, images — sab cyberspace mein exist karte hain.",
                "Economic importance — e-commerce, digital services, online banking sab cyberspace par depend hain."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyberspace-layers.png",
                  "caption": "Cyberspace Layers - Physical, Logical, Social, Security"
                },
                {
                  "src": "/images/cyberspace-layers-logical.png",
                  "caption": "Logical Network Diagram - Protocols, Software and Applications"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Cyberspace = Internet + Mobile Networks + Connected Devices + Digital Communication.",
                "4 layers: Physical, Logical, Social, Security.",
                "Global reach — borders ko cross karta hai, 24/7 activity.",
                "Modern economy, society, aur national security sab cyberspace par depend hain."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Define Cyberspace. Explain its components and significance.",
              "answer": "**Cyberspace Definition:**\nCyberspace ek global virtual environment hai jahan digital communication aur human activity hoti hai. Ye internet, cellular networks, aur connected devices par based hai. Cyberspace ek physical jagah nahi hai — ye digital networks ka wo space hai jahan information create, store, share aur protect hoti hai.\n\n**Components:**\n\n1. **Physical Layer** — Servers, routers, switches, undersea cables, satellites. Ye digital data ko physically transmit aur store karte hain.\n\n2. **Logical Layer** — Software, protocols (TCP/IP, HTTP, DNS), aur applications. Ye data ko process, route, aur protect karta hai.\n\n3. **Social Layer** — Users, communities, aur human activity. Social media, online transactions, digital communication — sab social layer ka part hain.\n\n4. **Security Layer** — Firewalls, encryption, authentication. Ye cyberspace ko protect karti hai.\n\n**Significance:**\n- Cyberspace global reach hai — borders ko cross karta hai.\n- Modern economy, society, national security sab cyberspace par depend hain.\n- 24/7 activity — din raat digital communication hoti hai.\n\n**Diagram:** Refer to Cyberspace Layered Structure diagram."
            }
          ]
        },
        {
          "id": "cyber-threats",
          "number": "1.4",
          "title": "Cyber Threats",
          "subtitle": "Different types of cyber attacks aur threats",
          "icon": "virus",
          "accent": "#0047ff",
          "englishDefinition": "A cyber threat is any potential incident or event that could harm an organization by exploiting vulnerabilities in its systems, networks, or data. Cyber threats include malware attacks, phishing, ransomware, denial-of-service (DoS) attacks, insider threats, man-in-the-middle attacks, and zero-day exploits.",
          "intro": "Har din news mein hacking ki khabar aati hai — kisi ka bank account hack hua, kisi ki website down hui, kisi ko ransomware mila. Ye sab cyber threats hain. Is topic mein ham samjhnge ki different types of cyber threats kya hain, unka kaisa kaam karta hai, aur hum iske kaise protect ho sakte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Cyber Threats kya hain?",
              "kicker": "Definition",
              "body": "Cyber threat koi bhi aisi event ya incident hai jo organization ke systems, networks, ya data ko harm kar sakti hai. Ye vulnerabilities ka exploitation karti hai. Cyber threats ka source individual hackers se lekar organized criminal groups aur nation-states tak ho sakta hai.",
              "body2": "Simple words mein: Jab koi hacker aapke digital system ko harm karna chahta hai, toh wo cyber threat hai. Ye malware, phishing, hacking, aur other attacks ka form le sakta hai.",
              "chips": [
                "Potential harm",
                "Vulnerability exploitation",
                "Malicious actors",
                "Attack vectors"
              ]
            },
            {
              "type": "cards",
              "title": "Common Types of Cyber Threats",
              "kicker": "Threat Categories",
              "cards": [
                {
                  "icon": "virus",
                  "title": "Malware",
                  "body": "Malware ek恶意 software hai — virus, worm, trojan, ransomware. Ye aapke system ko damage karta hai, data ko corrupt karta hai, ya control le leta hai. Downloads, infected links, aur email attachments se spread hota hai."
                },
                {
                  "icon": "warn",
                  "title": "Phishing",
                  "body": "Phishing fraudulent emails ya messages hain jo legitimate sources jaise dikhte hain. Ye users se sensitive information (passwords, card details) capture karte hain. Clicking fake links aur login pages se personal data chura liya jata hai."
                },
                {
                  "icon": "shield",
                  "title": "Ransomware",
                  "body": "Ransomware system ko lock kar deta hai aur data ko encrypt karta hai. Hackers data wapas lane ke liye ransom (paise) lete hain. Ye sabse dangerous attack hai — hospitals, government offices iske target rahe hain."
                },
                {
                  "icon": "globe",
                  "title": "DDoS Attacks",
                  "body": "DDoS (Distributed Denial of Service) attack mein hackers multiple computers se ek website pe traffic flood kar dete hain. Website overload ho jati hai aur legitimate users ko access nahi milta. Website temporarily down ho jati hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Types of Cyber Threats — Overview",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "cyber-threats",
              "caption": "Cyber threats multiple types mein aate hain: Malware (virus, trojan, ransomware), Phishing, DDoS, Man-in-the-Middle, Insider Threats, aur Zero-Day Exploits. Har ek ka different method aur impact hota hai."
            },
            {
              "type": "points",
              "title": "Other Important Cyber Threats",
              "kicker": "Additional Threats",
              "points": [
                "Man-in-the-Middle (MITM) — hacker communication ke beech mein aa jata hai, data intercept karta hai.",
                "Insider Threats — organisation ke own employees intentionally ya accidentally data leak karte hain.",
                "Zero-Day Exploits — security vulnerability jinka software maker ko bhi pata nahi — hackers exploit kar dete hain.",
                "SQL Injection — hackers SQL queries ko manipulate kar database se sensitive data chura lete hain."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-threats-overview.webp",
                  "caption": "Cyber Threat Environment - INTERPOL reports surge in attacks"
                },
                {
                  "src": "/images/cyber-threats-types.jpg",
                  "caption": "Common Types of Cyber Threats - Phishing, Malware, Ransomware"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Cyber threat = digital system ko harm karne wali potential event.",
                "Main threats: Malware, Phishing, Ransomware, DDoS, MITM, Insider, Zero-Day.",
                "Threat actors: individual hackers, criminal groups, nation-states.",
                "Security measures har threat ka different response demand karti hain."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Explain the different types of cyber threats with examples.",
              "answer": "**Types of Cyber Threats:**\n\n1. **Malware** —恶意 software including viruses, worms, trojans, aur ransomware. Ye system ko damage karta hai, data corrupt karta hai. Example: Trojan horse fake software ban ke system mein enter karta hai.\n\n2. **Phishing** — Fraudulent emails/messages legitimate sources jaise dikhte hain. Users se sensitive information capture karte hain. Example: Fake bank email bhej ke login details chura liya jata hai.\n\n3. **Ransomware** — System ko lock kar deta hai, data ko encrypt karta hai. Ransom ke liye paise demand karta hai. Hospitals aur government offices ke target rahe hain.\n\n4. **DDoS (Distributed Denial of Service)** — Multiple computers se ek website pe traffic flood kar deta hai. Website overload ho jati hai, users ko access nahi milta.\n\n5. **Man-in-the-Middle (MITM)** — Hacker communication ke beech mein aa jata hai. Data intercept aur modify karta hai.\n\n6. **Insider Threats** — Organisation ke own employees data leak karte hain — intentionally ya accidentally.\n\n7. **Zero-Day Exploits** — Security vulnerabilities jinka software maker ko bhi pata nahi. Hackers exploit kar dete hain.\n\n**Diagram:** Refer to Types of Cyber Threats diagram."
            }
          ]
        },
        {
          "id": "cyber-warfare",
          "number": "1.5",
          "title": "Cyber-warfare",
          "subtitle": "Nation-state level cyber attacks aur digital warfare",
          "icon": "zap",
          "accent": "#0047ff",
          "englishDefinition": "Cyber-warfare refers to the use of digital attacks by nation-states to disrupt, damage, or destroy another nation's critical infrastructure, computer systems, and networks. It is a form of warfare that takes place in cyberspace rather than on physical battlefields.",
          "intro": "War ka concept toh aap jaante hain — tanks, guns, armies. Lekin kya aap jaante hain ki war digital space mein bhi ho sakta hai? Cyber-warfare mein nation-states ek dusre ke digital infrastructure pe attack karte hain — power grids hack karte hain, defense systems disrupt karte hain, government databases steal karte hain. Is topic mein ham samjhnge ki cyber-warfare kya hai, kaise kaam karta hai, aur iske implications kya hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Cyber-warfare kya hai?",
              "kicker": "Definition",
              "body": "Cyber-warfare ka matlab hai nation-states ka digital attacks ka use karna — dusre nation ke critical infrastructure, computer systems, aur networks ko disrupt, damage, ya destroy karne ke liye. Ye traditional warfare ka digital form hai jo cyberspace mein hota hai, nahi physical battlefield pe.",
              "body2": "Simple words mein: Jab ek country dusre country ke digital systems pe attack karti hai — power grid hack karti hai, bank servers down karti hai — toh ye cyber-warfare hai.",
              "chips": [
                "Nation-state attacks",
                "Digital warfare",
                "Critical infrastructure",
                "State-sponsored"
              ]
            },
            {
              "type": "cards",
              "title": "Cyber-warfare ke Levels",
              "kicker": "Different Levels",
              "cards": [
                {
                  "icon": "zap",
                  "title": "Level 1 — Cyber Espionage",
                  "body": "Cyber espionage mein nation-states dusre country ke sensitive information chura lete hain — defense plans, government secrets, economic data. Ye spy ka digital form hai."
                },
                {
                  "icon": "warn",
                  "title": "Level 2 — Cyber Sabotage",
                  "body": "Cyber sabotage mein attackers physical infrastructure ko damage karte hain — power grids hack karte hain, transportation systems disrupt karte hain. Ye country ke daily life ko affect karta hai. Stuxnet (Iran nuclear program) iska example hai."
                },
                {
                  "icon": "shield",
                  "title": "Level 3 — Cyber Warfare (Full)",
                  "body": "Full cyber-warfare mein attackers dusre country ke critical systems ko completely disrupt karte hain — communication networks down karte hain, financial systems collapse karte hain. Ye traditional war ka digital equivalent hai."
                },
                {
                  "icon": "globe",
                  "title": "Advanced Persistent Threats (APT)",
                  "body": "APT long-term, targeted attacks hain jo nation-states launch karti hain. Ye continuous surveillance aur data extraction ka kaam karti hain. Ye hard to detect aur hard to stop — years tak chalti hain."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Cyber-warfare — Levels and Types",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "cyber-warfare",
              "caption": "Cyber-warfare 3 levels par kaam karta hai: Espionage (data theft), Sabotage (infrastructure damage), Full Warfare (system disruption). State-sponsored APTs long-term targeted attacks karte hain."
            },
            {
              "type": "points",
              "title": "Cyber-warfare ka Impact",
              "kicker": "Key Impacts",
              "points": [
                "Power grid attacks — country ka electricity supply disrupt ho sakta hai.",
                "Financial system disruption — banks, stock markets hack ho sakte hain.",
                "Defense systems — military communication aur weapon systems target ho sakte hain.",
                "Government disruption — elections, administration sab affect ho sakti hain."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-warfare-state.png",
                  "caption": "State-Sponsored Cyber Warfare - Nation-state digital attacks"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Cyber-warfare = nation-states ka digital attacks dusre country pe.",
                "3 levels: Espionage (data theft), Sabotage (damage), Full Warfare (disruption).",
                "APTs — long-term, targeted, state-sponsored attacks.",
                "Targets: power grids, financial systems, defense, government."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "What is Cyber-warfare? Discuss its levels and impact on national security.",
              "answer": "**Cyber-warfare Definition:**\nCyber-warfare ka matlab hai nation-states ka digital attacks ka use karna — dusre nation ke critical infrastructure, computer systems, aur networks ko disrupt, damage, ya destroy karne ke liye. Ye traditional warfare ka digital form hai jo cyberspace mein hota hai.\n\n**Levels of Cyber-warfare:**\n\n1. **Cyber Espionage** — Dusre country ke sensitive information chura lena — defense plans, government secrets, economic data. Ye spy ka digital form hai.\n\n2. **Cyber Sabotage** — Physical infrastructure ko damage karna — power grids hack karna, transportation systems disrupt karna. Stuxnet (Iran nuclear program) iska famous example hai.\n\n3. **Full Cyber-Warfare** — Critical systems ko completely disrupt karna — communication networks down karna, financial systems collapse karna. Ye traditional war ka digital equivalent hai.\n\n**Impact on National Security:**\n\n1. **Power Grid Attacks** — Country ka electricity supply disrupt ho sakta hai.\n2. **Financial System Disruption** — Banks, stock markets hack ho sakte hain.\n3. **Defense Systems** — Military communication aur weapon systems target ho sakte hain.\n4. **Government Disruption** — Elections, administration sab affect ho sakti hain.\n\n**APTs:** Advanced Persistent Threats — long-term, targeted, state-sponsored attacks. Ye years tak chalti hain, hard to detect.\n\n**Diagram:** Refer to Cyber-warfare Levels diagram."
            }
          ]
        },
        {
          "id": "cia-triad",
          "number": "1.6",
          "title": "CIA Triad",
          "subtitle": "Confidentiality, Integrity, Availability — security ka foundation",
          "icon": "lock",
          "accent": "#0047ff",
          "englishDefinition": "The CIA Triad is a foundational model for cybersecurity that consists of three core principles: Confidentiality, Integrity, and Availability. Confidentiality ensures that sensitive information is accessible only to authorized individuals. Integrity ensures that data is accurate, consistent, and has not been tampered with. Availability ensures that systems and data are accessible to authorized users when needed.",
          "intro": "Cyber security ka ek sabse important concept CIA Triad hai. Ye 3 principles hain — Confidentiality, Integrity, Availability. Ye sab security measures ka base hai. Agar aapke paas ek secure system hai, toh usme ye 3 qualities honi chahiye. Is topic mein ham samjhnge ki ye 3 principles kya hain, kaisa kaam karti hain, aur ye overall security mein kya role play karti hain.",
          "sections": [
            {
              "type": "definition",
              "title": "CIA Triad kya hai?",
              "kicker": "Definition",
              "body": "CIA Triad cybersecurity ka foundational model hai jo 3 core principles pe based hai: Confidentiality (保密性), Integrity (数据完整性), aur Availability (可用性). Ye 3 principles security policies aur measures ka guide karti hain. Har secure system mein ye 3 qualities honi chahiye.",
              "body2": "Simple words mein: CIA Triad = data secret rakhna (Confidentiality), data correct rakhna (Integrity), aur data available rakhna (Availability). Ye 3 baatein mil kar ek secure system banati hain.",
              "chips": [
                "Confidentiality",
                "Integrity",
                "Availability"
              ]
            },
            {
              "type": "cards",
              "title": "CIA Triad ke 3 Principles",
              "kicker": "Core Principles",
              "cards": [
                {
                  "icon": "lock",
                  "title": "Confidentiality (保密性)",
                  "body": "Confidentiality ka matlab hai sensitive data ko unauthorized users se bachaana. Data sirf authorized persons tak hi reachable hona chahiye. Encryption, passwords, access controls — ye sab confidentiality ensure karte hain. Data leak ya unauthorized access confidentiality breach hai."
                },
                {
                  "icon": "check",
                  "title": "Integrity (数据完整性)",
                  "body": "Integrity ka matlab hai data accurate, consistent, aur tamper-free rakhna. Data modify hona authorized persons hi kar sakte hain. Checksums, digital signatures, version controls — ye sab integrity ensure karte hain. Data corruption ya unauthorized modification integrity breach hai."
                },
                {
                  "icon": "globe",
                  "title": "Availability (可用性)",
                  "body": "Availability ka matlab hai systems aur data authorized users ke liye available rakhna. Users ko zaroorat ke time access milna chahiye. Redundancy, backups, DDoS protection — ye sab availability ensure karte hain. System down ya service disruption availability breach hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "CIA Triad — Security Foundation",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "cia-triad",
              "caption": "CIA Triad 3 principles pe based hai: Confidentiality (data secret), Integrity (data correct), Availability (data available). Ye 3 milkar ek complete security model banate hain."
            },
            {
              "type": "example",
              "title": "CIA Triad ka Real-World Example",
              "kicker": "Example",
              "body": "Ek bank ka online system le lo. Confidentiality: aapke account details sirf aap aur bank ke authorized employees ko dekhne milna chahiye. Integrity: aapke transaction details correct hone chahiye — kisi na kisi change nahi karna chahiye. Availability: bank ka website 24/7 available hona chahiye — DDoS attack se down nahi hona chahiye. Ye 3 principles milkar ek secure banking system banate hain."
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cia-triad.jpg",
                  "caption": "CIA Triad - Confidentiality, Integrity, Availability"
                },
                {
                  "src": "/images/cia-triad-detail.jpg",
                  "caption": "CIA Security Triad Explained"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "CIA Triad = Confidentiality, Integrity, Availability — security ka foundation.",
                "Confidentiality: data sirf authorized users tak hi reachable.",
                "Integrity: data accurate, consistent, tamper-free.",
                "Availability: data aur systems available zaroorat ke time."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Explain the CIA Triad in Cyber Security with examples.",
              "answer": "**CIA Triad — 3 Core Principles:**\n\n1. **Confidentiality (保密性)** — Sensitive data ko unauthorized users se bachaana. Data sirf authorized persons tak hi reachable hona chahiye.\n\n   - *Methods:* Encryption, passwords, access controls, biometric authentication.\n   - *Example:* Bank account details sirf account holder aur authorized bank employees ko dekhne milna chahiye.\n   - *Breach:* Data leak, unauthorized access, password cracking.\n\n2. **Integrity (数据完整性)** — Data accurate, consistent, aur tamper-free rakhna. Data modify hona authorized persons hi kar sakte hain.\n\n   - *Methods:* Checksums, digital signatures, version controls, hash functions.\n   - *Example:* Transaction details correct hona chahiye — kisi na kisi change nahi karna chahiye.\n   - *Breach:* Data corruption, unauthorized modification, man-in-the-middle attacks.\n\n3. **Availability (可用性)** — Systems aur data authorized users ke liye available rakhna. Users ko zaroorat ke time access milna chahiye.\n\n   - *Methods:* Redundancy, backups, DDoS protection, failover systems.\n   - *Example:* Bank website 24/7 available hona chahiye — DDoS attack se down nahi hona chahiye.\n   - *Breach:* System down, service disruption, DDoS attacks, hardware failure.\n\n**Importance:** Ye 3 principles mil kar ek complete security model banate hain.\n\n**Diagram:** Refer to CIA Triad diagram."
            }
          ]
        },
        {
          "id": "cyber-terrorism",
          "number": "1.7",
          "title": "Cyber Terrorism",
          "subtitle": "Digital attacks se terrorism — impact aur prevention",
          "icon": "warn",
          "accent": "#0047ff",
          "englishDefinition": "Cyber terrorism is the use of computer networks and digital attacks to cause disruption, fear, or harm for political, social, or ideological goals. It involves exploiting technology to attack critical infrastructure, government systems, or public services to create panic, disrupt society, or achieve political objectives.",
          "intro": "Terrorism toh aap jaante hain — physical violence, fear create karna. Lekin kya terrorism digital space mein bhi ho sakta hai? Cyber terrorism ka matlab hai computer networks ka use karke disruption, fear, ya harm caused karna political ya social goals ke liye. Hackers government websites down karte hain, hospitals pe ransomware attack karte hain, social media pe propaganda spread karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Cyber Terrorism kya hai?",
              "kicker": "Definition",
              "body": "Cyber terrorism ka matlab hai computer networks ka use karke disruption, fear, ya harm caused karna political, social, ya ideological goals ke liye. Ye technology ka exploitation hai critical infrastructure, government systems, ya public services pe attack karke panic create karne ke liye.",
              "body2": "Simple words mein: Jab hackers digital attacks karke society mein fear create karte hain, government systems disrupt karte hain, ya political goals achieve karte hain — toh ye cyber terrorism hai.",
              "chips": [
                "Political goals",
                "Digital disruption",
                "Fear creation",
                "Critical infrastructure"
              ]
            },
            {
              "type": "cards",
              "title": "Cyber Terrorism ke Forms",
              "kicker": "Types of Cyber Terrorism",
              "cards": [
                {
                  "icon": "globe",
                  "title": "Infrastructure Attacks",
                  "body": "Cyber terrorists critical infrastructure pe attack karte hain — power grids, water systems, transportation networks. Ye society ko disrupt karta hai, public mein fear create karta hai."
                },
                {
                  "icon": "warn",
                  "title": "Government System Attacks",
                  "body": "Government websites, defense databases, election systems — sab cyber terrorism ke target ho sakte hain. Ye government ka functioning disrupt karta hai, public trust loss create karta hai."
                },
                {
                  "icon": "shield",
                  "title": "Social Media Propaganda",
                  "body": "Cyber terrorists social media ka use karte hain propaganda spread karne ke liye. Fake news, hate speech, radical content — sab digitally spread hota hai. Ye social unrest create karta hai."
                },
                {
                  "icon": "virus",
                  "title": "Ransomware on Public Services",
                  "body": "Hospitals, schools, government offices pe ransomware attacks cyber terrorism ka part ho sakte hain. Ye public services disrupt karta hai, people ka daily life affect karta hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Cyber Terrorism — Attack Vectors",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "cyber-terrorism",
              "caption": "Cyber terrorism multiple attack vectors use karta hai: Infrastructure attacks (power, water), Government attacks, Social media propaganda, aur Public service ransomware."
            },
            {
              "type": "points",
              "title": "Cyber Terrorism ka Impact",
              "kicker": "Key Impacts",
              "points": [
                "Public fear — cyber attacks public mein panic create karte hain.",
                "Infrastructure disruption — power, water, transport sab affect ho sakte hain.",
                "Economic damage — attacks ka financial loss hota hai.",
                "Social unrest — propaganda aur fake news social stability ko affect karte hain."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-terrorism-infra.webp",
                  "caption": "Cyber Terrorism Targeting Critical Infrastructure"
                },
                {
                  "src": "/images/cyber-terrorism-govt.jpg",
                  "caption": "Cybersecurity of Critical Infrastructure and Government Systems"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Cyber terrorism = digital attacks political/social goals ke liye.",
                "Forms: Infrastructure attacks, Government attacks, Propaganda, Ransomware.",
                "Impact: public fear, infrastructure disruption, economic damage, social unrest.",
                "Prevention: strong security, surveillance, international cooperation."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Define Cyber Terrorism. Discuss its forms and impact on society.",
              "answer": "**Cyber Terrorism Definition:**\nCyber terrorism ka matlab hai computer networks ka use karke disruption, fear, ya harm caused karna political, social, ya ideological goals ke liye. Ye technology ka exploitation hai critical infrastructure, government systems, ya public services pe attack karke panic create karne ke liye.\n\n**Forms of Cyber Terrorism:**\n\n1. **Infrastructure Attacks** — Power grids, water systems, transportation networks pe attack. Ye society ko disrupt karta hai, public mein fear create karta hai.\n\n2. **Government System Attacks** — Government websites, defense databases, election systems pe attack. Ye government ka functioning disrupt karta hai.\n\n3. **Social Media Propaganda** — Fake news, hate speech, radical content digitally spread karna. Ye social unrest create karta hai.\n\n4. **Ransomware on Public Services** — Hospitals, schools, government offices pe ransomware attacks. Ye public services disrupt karta hai.\n\n**Impact on Society:**\n\n1. **Public Fear** — Cyber attacks public mein panic create karte hain.\n2. **Infrastructure Disruption** — Power, water, transport sab affect ho sakte hain.\n3. **Economic Damage** — Financial loss hota hai.\n4. **Social Unrest** — Propaganda aur fake news social stability ko affect karte hain.\n\n**Diagram:** Refer to Cyber Terrorism Attack Vectors diagram."
            }
          ]
        },
        {
          "id": "critical-infrastructure-cyber",
          "number": "1.8",
          "title": "Cyber Security of Critical Infrastructure",
          "subtitle": "Power, water, transport — critical systems ka protection",
          "icon": "server",
          "accent": "#0047ff",
          "englishDefinition": "Critical infrastructure refers to the assets, systems, and networks essential for a society to function — including energy, water, transportation, healthcare, finance, and communication. Cyber security of critical infrastructure ensures these systems are protected from digital attacks that could cause widespread disruption, economic damage, or loss of life.",
          "intro": "Socha hai ki aapke city ka electricity kahan se aata hai? Water supply kahan se aati hai? Airports, banks, hospitals — ye sab ek dusre se connected hain. Ye sab \"critical infrastructure\" hain — society ka foundation. Agar hackers in systems pe attack kar de, toh society collapse ho sakti hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Critical Infrastructure kya hai?",
              "kicker": "Definition",
              "body": "Critical infrastructure ek society ke functioning ke liye essential assets, systems, aur networks hain — energy, water, transportation, healthcare, finance, communication. Ye systems society ka backbone hain. Agar inme koi attack ho, toh society disruption ho sakti hai, economic damage ho sakta hai, ya loss of life ho sakta hai.",
              "body2": "Simple words mein: Critical infrastructure = society ke liye zaroori systems — power grids, water supply, airports, hospitals, banks, communication networks.",
              "chips": [
                "Essential systems",
                "Society backbone",
                "High impact",
                "Protection priority"
              ]
            },
            {
              "type": "cards",
              "title": "Critical Infrastructure ke Types",
              "kicker": "Categories",
              "cards": [
                {
                  "icon": "zap",
                  "title": "Energy Sector",
                  "body": "Power grids, oil aur gas pipelines, nuclear plants — energy sector critical infrastructure hai. Hack ho toh city ka electricity supply disrupt ho sakta hai."
                },
                {
                  "icon": "globe",
                  "title": "Water Supply",
                  "body": "Water treatment plants, reservoirs, distribution networks — water supply critical hai. Water contamination ya supply disruption health aur sanitation issues create karta hai."
                },
                {
                  "icon": "server",
                  "title": "Transportation",
                  "body": "Airports, railways, highways, shipping ports — transportation systems critical hain. Disruption ho toh logistics, travel, aur supply chain affect ho sakte hain."
                },
                {
                  "icon": "users",
                  "title": "Healthcare",
                  "body": "Hospitals, medical devices, pharmacy databases — healthcare infrastructure critical hai. Attack ho toh patient care disrupt ho sakta hai, sensitive medical data leak ho sakti hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Critical Infrastructure Sectors",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "critical-infra",
              "caption": "Critical infrastructure 6 main sectors mein aata hai: Energy (power grids), Water (supply), Transportation (airports, railways), Healthcare (hospitals), Finance (banks), aur Communication (networks)."
            },
            {
              "type": "points",
              "title": "Protecting Critical Infrastructure",
              "kicker": "Security Measures",
              "points": [
                "Network segmentation — critical systems ko separate networks mein rakhna.",
                "Regular security audits — vulnerabilities time-time pe check karna.",
                "Incident response plans — attack ho toh fast response dena.",
                "Government-private cooperation — security agencies aur infrastructure owners mil kar kaam karna."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-terrorism-infra.webp",
                  "caption": "Critical Infrastructure Under Cyber Attack"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Critical infrastructure = society ke liye essential systems.",
                "Attack ho toh widespread disruption, economic damage, loss of life ho sakta hai.",
                "Protection: network segmentation, security audits, incident response, cooperation.",
                "Ye national security ka sabse important area hai."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "What is Critical Infrastructure? Why is its cyber security important?",
              "answer": "**Critical Infrastructure Definition:**\nCritical infrastructure ek society ke functioning ke liye essential assets, systems, aur networks hain — energy, water, transportation, healthcare, finance, communication.\n\n**Why Cyber Security is Important:**\n\n1. **Widespread Disruption** — Attack ho toh power grids hack ho sakte hain, water supply disrupt ho sakti hai.\n\n2. **Economic Damage** — Infrastructure disruption ka financial loss heavy ho sakta hai.\n\n3. **Loss of Life** — Healthcare systems attack ho toh patient care disrupt ho sakta hai.\n\n4. **National Security** — Critical infrastructure national security ka sabse important area hai.\n\n**Critical Sectors:**\n1. Energy — Power grids, oil/gas pipelines, nuclear plants\n2. Water — Treatment plants, reservoirs, distribution\n3. Transportation — Airports, railways, highways, ports\n4. Healthcare — Hospitals, medical devices, pharmacy databases\n5. Finance — Banks, stock exchanges, payment systems\n6. Communication — Internet, telecom networks, satellites\n\n**Protection Measures:** Network segmentation, security audits, incident response, government-private cooperation.\n\n**Diagram:** Refer to Critical Infrastructure Sectors diagram."
            }
          ]
        },
        {
          "id": "org-implications-cyber",
          "number": "1.9",
          "title": "Cyber Security — Organizational Implications",
          "subtitle": "Security ka organizational impact aur business perspective",
          "icon": "users",
          "accent": "#0047ff",
          "englishDefinition": "Cyber security has profound implications for organizations across all sectors. It affects business operations, customer trust, legal compliance, financial health, and competitive advantage. Organizations must integrate security into their business strategy, not just treat it as a technical issue.",
          "intro": "Socha hai ki ek company pe cyber attack ho, toh kya hoga? Sirf technical issue nahi hai — business ka pura structure affected ho sakta hai. Customer trust kharb ho sakta hai, legal penalties ho sakte hain, financial loss ho sakta hai. Cyber security sirf IT department ka kaam nahi hai — ye pura organization ka matter hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Organizational Implications kya hain?",
              "kicker": "Definition",
              "body": "Cyber security ka organizational impact bahut deep hai — business operations, customer trust, legal compliance, financial health, aur competitive advantage sab affect ho sakte hain. Security sirf technical issue nahi hai — ye business strategy ka part hona chahiye.",
              "body2": "Simple words mein: Jab company pe cyber attack ho, toh sirf systems down nahi hote — customer trust kharb hota hai, legal issues aate hain, financial loss hota hai.",
              "chips": [
                "Business impact",
                "Customer trust",
                "Legal compliance",
                "Financial health"
              ]
            },
            {
              "type": "cards",
              "title": "Security ka Business Impact",
              "kicker": "Key Implications",
              "cards": [
                {
                  "icon": "users",
                  "title": "Customer Trust aur Reputation",
                  "body": "Customers sirf tabhi company se business karte hain jab wo safe feel karte hain. Data breach par company ki reputation permanently damage ho sakti hai."
                },
                {
                  "icon": "warn",
                  "title": "Legal Compliance",
                  "body": "Government ne data protection laws banaye hain (IT Act 2000, GDPR). Agar company security compliance nahi karti, toh heavy fines aur legal penalties ho sakte hain."
                },
                {
                  "icon": "chart",
                  "title": "Financial Impact",
                  "body": "Cyber attacks ka direct financial loss hota hai — ransom payments, recovery costs, legal fees, aur lost business. Small companies iska impact explain nahi kar sakti."
                },
                {
                  "icon": "clock",
                  "title": "Operational Disruption",
                  "body": "Attacks business operations ko disrupt karte hain — systems down, production halt, services disrupt. Daily operations affected ho sakte hain."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Organizational Security — Business Impact",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "org-security",
              "caption": "Cyber security ka organizational impact 4 areas mein faila hua hai: Customer Trust (reputation), Legal Compliance (penalties), Financial Health (loss), Operational Efficiency (disruption)."
            },
            {
              "type": "points",
              "title": "Building Security-Aware Culture",
              "kicker": "Organizational Steps",
              "points": [
                "Security training — employees ko regular cyber security awareness dena.",
                "Policy enforcement — security policies ko strict implement karna.",
                "Incident response team — attack ho toh fast response dena.",
                "Continuous monitoring — security incidents continuous monitor karna."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-framework-shield.jpg",
                  "caption": "Organizational Security - Framework for Business Protection"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Security organizational impact: customer trust, legal compliance, financial health, operations.",
                "Security sirf IT issue nahi — business strategy ka part hai.",
                "Compliance mandatory hai — fines aur penalties ho sakte hain.",
                "Security-aware culture banana zaroori hai."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Discuss the organizational implications of cyber security.",
              "answer": "**Organizational Implications of Cyber Security:**\n\n1. **Customer Trust aur Reputation** — Customers sirf tabhi company se business karte hain jab wo safe feel karte hain. Data breach par reputation permanently damage ho sakti hai.\n\n2. **Legal Compliance** — Government ne data protection laws banaye hain (IT Act 2000, GDPR). Security compliance mandatory hai. Non-compliance par heavy fines aur legal penalties ho sakte hain.\n\n3. **Financial Impact** — Cyber attacks ka direct financial loss: ransom payments, recovery costs, legal fees, lost business.\n\n4. **Operational Disruption** — Attacks business operations ko disrupt karte hain: systems down, production halt, services disrupt.\n\n**Building Security-Aware Culture:**\n- Security training for employees\n- Strict policy enforcement\n- Incident response team\n- Continuous monitoring\n\n**Key Point:** Security sirf IT department ka kaam nahi hai — ye pura organization ka matter hai.\n\n**Diagram:** Refer to Organizational Security diagram."
            }
          ]
        },
        {
          "id": "cyber-policy-governance",
          "number": "1.10",
          "title": "Need for a Comprehensive Cyber Security Policy and Governance",
          "subtitle": "Security policy aur governance ka need",
          "icon": "file",
          "accent": "#0047ff",
          "englishDefinition": "A comprehensive cyber security policy is a documented set of guidelines, rules, and practices that govern an organization's security posture. It defines how to protect information assets, who is responsible for security, and how to respond to incidents. Security governance provides the framework for implementing and maintaining these policies.",
          "intro": "Socha hai ki ek company ka security policy kaisa hota hai? Sirf IT department ke paas ek document hai? Nahi — security policy pura organization ka framework hai. Ye define karta hai ki information assets kaise protect honge, kaun responsible hai, aur attack ho toh kya response dena hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Security Policy aur Governance kya hai?",
              "kicker": "Definition",
              "body": "Cyber security policy ek documented guidelines, rules, aur practices hai jo organization ka security posture govern karti hai. Ye information assets ka protection, roles aur responsibilities, aur incident response define karti hai. Security governance policies ko implement aur maintain ka framework provide karti hai.",
              "body2": "Simple words mein: Security policy = organization ka security rulebook. Governance = iske follow karne ka system.",
              "chips": [
                "Guidelines",
                "Rules",
                "Responsibilities",
                "Accountability"
              ]
            },
            {
              "type": "cards",
              "title": "Security Policy ke Components",
              "kicker": "Policy Structure",
              "cards": [
                {
                  "icon": "file",
                  "title": "Acceptable Use Policy",
                  "body": "Employees ka acceptable aur unacceptable behavior define karta hai. Internet use, email use, device use — sabka rules batata hai."
                },
                {
                  "icon": "lock",
                  "title": "Access Control Policy",
                  "body": "Data access ko control karta hai. Kaun kya dekh sakta hai, kaun kya modify kar sakta hai — sab define karta hai."
                },
                {
                  "icon": "warn",
                  "title": "Incident Response Policy",
                  "body": "Security incidents ka response plan provide karta hai. Attack ho toh kaun response dega, kya steps hain, kahan report karna hai — sab batata hai."
                },
                {
                  "icon": "check",
                  "title": "Compliance Policy",
                  "body": "Legal aur regulatory requirements ko address karta hai. IT Act 2000, GDPR — sab compliance ensure karta hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Security Policy Framework",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "policy-framework",
              "caption": "Security policy framework 4 main components pe based hai: Acceptable Use, Access Control, Incident Response, aur Compliance. Governance policies ko implement, monitor, aur improve ka framework provide karti hai."
            },
            {
              "type": "points",
              "title": "Security Governance ke Elements",
              "kicker": "Governance Framework",
              "points": [
                "Clear roles — kaun security ka responsible hai.",
                "Accountability — security failures ka responsibility clear.",
                "Continuous improvement — policies time-time pe update karna.",
                "Leadership commitment — top management security ko priority dena."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-intro-shield.jpg",
                  "caption": "Policy and Governance - Cyber Security Framework"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Security policy = organization ka security rulebook.",
                "4 components: Acceptable Use, Access Control, Incident Response, Compliance.",
                "Governance = policies ko implement aur maintain ka framework.",
                "Ye organization ko systematically secure rakhta hai."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Explain the need for a Comprehensive Cyber Security Policy and Governance.",
              "answer": "**Need for Cyber Security Policy and Governance:**\n\n1. **Clear Guidelines** — Security policy organization ke liye clear guidelines provide karti hai.\n\n2. **Accountability** — Governance clear roles aur responsibilities set karti hai.\n\n3. **Compliance** — Legal requirements (IT Act 2000, GDPR) ko address karta hai.\n\n4. **Incident Response** — Attack ho toh kya response dena hai — sab plan mein hota hai.\n\n5. **Continuous Improvement** — Policies time-time pe update hoti hain.\n\n**Security Policy Components:**\n1. Acceptable Use Policy — Employees ka acceptable behavior\n2. Access Control Policy — Data access ko control\n3. Incident Response Policy — Security incidents ka response plan\n4. Compliance Policy — Legal aur regulatory requirements\n\n**Governance Framework:**\n- Clear roles and responsibilities\n- Accountability mechanisms\n- Leadership commitment\n- Continuous monitoring and improvement\n\n**Diagram:** Refer to Security Policy Framework diagram."
            }
          ]
        },
        {
          "id": "nodal-authority-cyber",
          "number": "1.11",
          "title": "Need for a Nodal Authority",
          "subtitle": "Cyber security ke liye ek central authority ka need",
          "icon": "users",
          "accent": "#0047ff",
          "englishDefinition": "A nodal authority is a centralized organization or agency responsible for coordinating, managing, and responding to cyber security incidents at a national level. It serves as the primary point of contact for cyber threat intelligence, incident response, and policy implementation. India's nodal authority is CERT-In (Computer Emergency Response Team - India).",
          "intro": "Socha hai ki country ka pura cyber security kaun manage karta hai? Har company khud? Nahi — ek central authority zaroori hai jo pura country ka cyber security coordinate karti hai. Ye \"nodal authority\" hai. India ka nodal authority CERT-In hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Nodal Authority kya hai?",
              "kicker": "Definition",
              "body": "Nodal authority ek centralized organization hai jo national level pe cyber security incidents coordinate, manage, aur respond karti hai. Ye cyber threat intelligence, incident response, aur policy implementation ka primary point of contact hai.",
              "body2": "Simple words mein: Nodal authority = country ka cyber security central hub.",
              "chips": [
                "Central authority",
                "Coordination",
                "Incident response",
                "Threat intelligence"
              ]
            },
            {
              "type": "cards",
              "title": "Nodal Authority ke Functions",
              "kicker": "Key Functions",
              "cards": [
                {
                  "icon": "warn",
                  "title": "Incident Response",
                  "body": "Country mein kisi bhi cyber incident ka response dena. Attack ho toh nodal authority fast response degi."
                },
                {
                  "icon": "globe",
                  "title": "Threat Intelligence",
                  "body": "Cyber threat intelligence collect, analyze, aur share karna. New attacks, vulnerabilities, hacker groups — sabki information collect karke alert karna."
                },
                {
                  "icon": "shield",
                  "title": "Policy Coordination",
                  "body": "Government policies implement karna, agencies coordinate karna. Security guidelines issue karna, compliance monitor karna."
                },
                {
                  "icon": "users",
                  "title": "International Cooperation",
                  "body": "Other countries ke nodal authorities ke saath cooperation karna. Cross-border cyber attacks ka joint response dena."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Nodal Authority — Structure aur Role",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "nodal-authority",
              "caption": "Nodal authority country ka cyber security hub hai. 4 main functions: Incident Response, Threat Intelligence, Policy Coordination, aur International Cooperation. India ka nodal authority CERT-In hai."
            },
            {
              "type": "points",
              "title": "CERT-In — India ka Nodal Authority",
              "kicker": "India's Nodal Authority",
              "points": [
                "CERT-In — Computer Emergency Response Team - India.",
                "Cyber incidents report karna, alerts issue karna.",
                "Government, banks, critical infrastructure — sabke saath coordination.",
                "International cooperation — other countries ke CERTs ke saath."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-warfare-state.png",
                  "caption": "Nodal Authority - Central coordination for cyber incidents"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Nodal authority = country ka cyber security central hub.",
                "4 functions: Incident Response, Threat Intelligence, Policy, International Cooperation.",
                "India ka nodal authority: CERT-In.",
                "Central coordination zaroori hai."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "What is a Nodal Authority in Cyber Security? Explain its functions and CERT-In's role.",
              "answer": "**Nodal Authority Definition:**\nNodal authority ek centralized organization hai jo national level pe cyber security incidents coordinate, manage, aur respond karti hai.\n\n**Functions:**\n\n1. **Incident Response** — Country mein kisi bhi cyber incident ka response dena.\n\n2. **Threat Intelligence** — Cyber threat intelligence collect, analyze, aur share karna.\n\n3. **Policy Coordination** — Government policies implement karna, agencies coordinate karna.\n\n4. **International Cooperation** — Other countries ke nodal authorities ke saath cooperation.\n\n**CERT-In — India's Nodal Authority:**\n- Full form: Computer Emergency Response Team - India\n- Functions: Cyber incidents report, alerts issue, coordination\n- Role: India ka primary cyber security coordination center\n\n**Diagram:** Refer to Nodal Authority Structure diagram."
            }
          ]
        },
        {
          "id": "international-convention-cyber",
          "number": "1.12",
          "title": "Need for an International Convention on Cyberspace",
          "subtitle": "Cyberspace governance ka international framework",
          "icon": "globe",
          "accent": "#0047ff",
          "englishDefinition": "An international convention on cyberspace is a global treaty or agreement that governs how nations interact, cooperate, and regulate cyber activities. It establishes norms for cyber behavior, defines rules for cross-border cyber operations, and creates mechanisms for international cooperation on cyber security. The Budapest Convention on Cybercrime is an example.",
          "intro": "Socha hai ki internet ek country ka hai? Nahi — internet global hai, borders ko cross karta hai. Hackers ek country se attack kar sakte hain, dusre country ke systems ko target kar sakte hain. Isliye international cooperation zaroori hai.",
          "sections": [
            {
              "type": "definition",
              "title": "International Convention on Cyberspace kya hai?",
              "kicker": "Definition",
              "body": "International convention on cyberspace ek global treaty hai jo nations ke beech cyber activities ka regulation karegi. Ye cyber behavior ka norms, cross-border operations ka rules, aur international cooperation ka mechanisms banati hai.",
              "body2": "Simple words mein: Jaise countries ke beech physical borders ke rules hote hain, waise hi cyberspace ke global rules zaroori hain.",
              "chips": [
                "Global treaty",
                "Norms",
                "Cross-border rules",
                "Cooperation"
              ]
            },
            {
              "type": "cards",
              "title": "Why International Convention Zaroori Hai?",
              "kicker": "Key Reasons",
              "cards": [
                {
                  "icon": "globe",
                  "title": "Cyberspace Global Hai",
                  "body": "Internet ek country ka nahi hai — global hai. Attacks borders ko cross karte hain. Ek country khud security ensure nahi kar sakti — international cooperation zaroori hai."
                },
                {
                  "icon": "warn",
                  "title": "Cross-Border Cybercrime",
                  "body": "Hackers ek country se attack kar sakte hain, dusre country ke systems target kar sakte hain. Legal jurisdiction complex hai."
                },
                {
                  "icon": "shield",
                  "title": "Shared Threat Intelligence",
                  "body": "Threat intelligence countries ke beech share karna zaroori hai. Ek country attack detect kare toh dusri countries ko bhi alert karna."
                },
                {
                  "icon": "users",
                  "title": "Standardized Rules",
                  "body": "Har country ka different cyber laws hain. International convention standardized rules banati hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "International Cyberspace Governance",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "international-cyber",
              "caption": "International convention on cyberspace 4 areas address karta hai: Global nature, Cross-border crime, Shared intelligence, aur Standardized rules. Budapest Convention on Cybercrime iska famous example hai."
            },
            {
              "type": "points",
              "title": "Budapest Convention on Cybercrime",
              "kicker": "Existing Convention",
              "points": [
                "Budapest Convention — first international treaty on cybercrime.",
                "Cybercrime investigation aur cooperation ka framework.",
                "Signatory countries cybercrime laws align karti hain.",
                "Cross-border evidence collection, extradition rules."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyberspace-layers.png",
                  "caption": "International Cyberspace Governance - Global cooperation"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "International convention = cyberspace ka global governance framework.",
                "Zaroori kyun: cyberspace global hai, attacks cross borders.",
                "Budapest Convention on Cybercrime — famous example."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Why is an International Convention on Cyberspace needed?",
              "answer": "**Need for International Convention:**\n\n1. **Cyberspace is Global** — Internet ek country ka nahi hai. Attacks borders ko cross karte hain. Ek country khud security ensure nahi kar sakti.\n\n2. **Cross-Border Cybercrime** — Hackers ek country se attack kar sakte hain, dusre country ke systems target kar sakte hain. Legal jurisdiction complex hai.\n\n3. **Shared Threat Intelligence** — Threat intelligence countries ke beech share karna zaroori hai.\n\n4. **Standardized Rules** — Har country ka different cyber laws hain. International convention standardized rules banati hai.\n\n**Budapest Convention:**\n- First international treaty on cybercrime\n- Cybercrime investigation aur cooperation ka framework\n- Signatory countries cybercrime laws align karti hain\n\n**Diagram:** Refer to International Cyberspace Governance diagram."
            }
          ]
        },
        {
          "id": "intro-cyber-laws",
          "number": "1.13",
          "title": "Introduction to Cyber Laws",
          "subtitle": "Cyber laws ka concept, scope aur importance",
          "icon": "file",
          "accent": "#0047ff",
          "englishDefinition": "Cyber laws are legal rules and regulations that govern online activities, digital transactions, internet usage, and cyber crimes. They define what is legal and illegal in cyberspace, establish penalties for cyber crimes, and protect digital rights.",
          "intro": "Socha hai ki internet par koi bhi cheez kar sakte hain? Nahi — internet par bhi rules hain. Cyber laws online activities govern karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Cyber Laws kya hain?",
              "kicker": "Definition",
              "body": "Cyber laws legal rules hain jo online activities, digital transactions, internet usage, aur cyber crimes govern karte hain. Ye define karte hain ki cyberspace mein kya legal hai, kya illegal hai.",
              "body2": "Simple words mein: Cyber laws = internet par rules.",
              "chips": [
                "Legal rules",
                "Online activities",
                "Cyber crimes",
                "Digital rights"
              ]
            },
            {
              "type": "cards",
              "title": "Cyber Laws ke Areas",
              "kicker": "Scope",
              "cards": [
                {
                  "icon": "lock",
                  "title": "Data Protection aur Privacy",
                  "body": "Personal data ko protect karna. Data collection, storage, processing — sabka rules."
                },
                {
                  "icon": "chart",
                  "title": "E-Commerce aur Digital Transactions",
                  "body": "Online transactions, e-commerce ka rules. Payment security, consumer protection, digital contracts."
                },
                {
                  "icon": "warn",
                  "title": "Cyber Crimes aur Penalties",
                  "body": "Hacking, phishing, fraud, malware — sab cyber crimes hain. Cyber laws inki penalties define karte hain."
                },
                {
                  "icon": "shield",
                  "title": "Intellectual Property",
                  "body": "Digital content ka intellectual property rights. Copyright, trademark, patent."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Cyber Laws — Scope aur Coverage",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "cyber-laws",
              "caption": "Cyber laws 4 main areas cover karte hain: Data Protection, E-Commerce, Cyber Crimes, aur Intellectual Property."
            },
            {
              "type": "points",
              "title": "Cyber Laws ka Importance",
              "kicker": "Why It Matters",
              "points": [
                "Legal protection — digital rights ka legal protection milta hai.",
                "Crime prevention — cyber crimes ka penalties deterrent ka kaam karte hain.",
                "Fair play — online businesses aur users dono ka rights protect hote hain.",
                "International alignment — countries international cyber laws ko align karti hain."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-threats-types.jpg",
                  "caption": "Cyber Laws - Legal framework for digital world"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Cyber laws = internet par rules.",
                "4 areas: Data Protection, E-Commerce, Cyber Crimes, IP.",
                "Importance: legal protection, crime prevention, fair play."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Define Cyber Laws. Explain their scope and importance.",
              "answer": "**Cyber Laws Definition:**\nCyber laws legal rules hain jo online activities, digital transactions, internet usage, aur cyber crimes govern karte hain.\n\n**Scope:**\n1. **Data Protection aur Privacy** — Personal data ko protect karna.\n2. **E-Commerce aur Digital Transactions** — Online transactions ka rules.\n3. **Cyber Crimes aur Penalties** — Hacking, phishing, fraud — penalties.\n4. **Intellectual Property** — Digital content ka IP rights.\n\n**Importance:**\n1. Legal Protection — digital rights ka legal protection\n2. Crime Prevention — cyber crimes ka penalties deterrent\n3. Fair Play — online businesses aur users dono ka rights protect\n4. International Alignment — countries international cyber laws align\n\n**Diagram:** Refer to Cyber Laws Scope diagram."
            }
          ]
        },
        {
          "id": "key-principles-cyber",
          "number": "1.14",
          "title": "Key Principles of Cyber Laws",
          "subtitle": "Cyber law ka fundamental principles",
          "icon": "check",
          "accent": "#0047ff",
          "englishDefinition": "Key principles of cyber law are the foundational concepts that guide the interpretation and application of digital regulations. These include jurisdiction, sovereignty, proportionality, and due process.",
          "intro": "Har law ka kuch principles hote hain jo uska foundation banate hain. Cyber laws bhi iske apne key principles hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Key Principles kya hain?",
              "kicker": "Definition",
              "body": "Cyber law key principles fundamental concepts hain jo digital regulations ka interpretation aur application guide karte hain.",
              "body2": "Simple words mein: Key principles = cyber law ka rulebook.",
              "chips": [
                "Jurisdiction",
                "Sovereignty",
                "Proportionality",
                "Due process"
              ]
            },
            {
              "type": "cards",
              "title": "Cyber Law ke Key Principles",
              "kicker": "Core Principles",
              "cards": [
                {
                  "icon": "globe",
                  "title": "Jurisdiction",
                  "body": "Jurisdiction decide karta hai ki kaun country ka laws apply hoga. Cyberspace global hai, isliye jurisdiction complex hai."
                },
                {
                  "icon": "shield",
                  "title": "Sovereignty",
                  "body": "Sovereignty ka matlab hai ek nation apne cyberspace pe authority rakhti hai. Har country apne digital borders ka rules bana sakti hai."
                },
                {
                  "icon": "warn",
                  "title": "Proportionality",
                  "body": "Proportionality principle batata hai ki penalties crime ka severity ke saath match karna chahiye. Chhoti crime — chhoti penalty."
                },
                {
                  "icon": "check",
                  "title": "Due Process",
                  "body": "Due process principle batata hai ki legal procedures fair hona chahiye. Accused ko fair trial milna chahiye."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Cyber Law Principles — Framework",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "law-principles",
              "caption": "Cyber law 4 key principles: Jurisdiction, Sovereignty, Proportionality, Due Process. Ye fundamental principles cyber law ka application guide karte hain."
            },
            {
              "type": "points",
              "title": "Other Important Principles",
              "kicker": "Additional",
              "points": [
                "Data sovereignty — data ek country ke laws ke under ho.",
                "Cross-border liability — attackers cross borders, liability complex.",
                "Security-freedom balance — security aur individual freedom dono protect.",
                "Technology neutrality — laws technology pe based nahi, behavior pe."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cia-triad.jpg",
                  "caption": "Key Principles of Cyber Law - Foundation of digital governance"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "4 key principles: Jurisdiction, Sovereignty, Proportionality, Due Process.",
                "Jurisdiction: kaun country ka law apply hoga.",
                "Sovereignty: nation apne cyberspace pe authority.",
                "Proportionality: penalty crime severity ke saath match."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Explain the Key Principles of Cyber Law.",
              "answer": "**Key Principles of Cyber Law:**\n\n1. **Jurisdiction** — Kaun country ka laws apply hoga. Cyberspace global hai, isliye jurisdiction complex hai.\n\n2. **Sovereignty** — Ek nation apne cyberspace pe authority rakhti hai. Har country apne digital borders ka rules bana sakti hai.\n\n3. **Proportionality** — Penalties crime ka severity ke saath match karna chahiye.\n\n4. **Due Process** — Legal procedures fair hona chahiye. Accused ko fair trial milna chahiye.\n\n**Other Principles:**\n5. Data Sovereignty — Data ek country ke laws ke under ho.\n6. Cross-Border Liability — Attackers cross borders, liability complex.\n7. Security-Freedom Balance — Security aur individual freedom dono protect.\n8. Technology Neutrality — Laws technology pe based nahi, behavior pe.\n\n**Diagram:** Refer to Cyber Law Principles diagram."
            }
          ]
        },
        {
          "id": "it-act-2000",
          "number": "1.15",
          "title": "Information Technology Act 2000",
          "subtitle": "India ka cyber law — IT Act 2000 ka overview",
          "icon": "file",
          "accent": "#0047ff",
          "englishDefinition": "The Information Technology Act 2000 is India's primary cyber law, enacted to provide legal recognition to electronic transactions and facilitate e-filing of documents. It defines cyber crimes, establishes penalties, and creates mechanisms for digital signatures.",
          "intro": "India ka sabse important cyber law IT Act 2000 hai. Ye act 2000 mein banaya gaya tha. Ye electronic transactions ka legal recognition provide karti hai, cyber crimes define karti hai, aur penalties set karti hai.",
          "sections": [
            {
              "type": "definition",
              "title": "IT Act 2000 kya hai?",
              "kicker": "Definition",
              "body": "IT Act 2000 India ka primary cyber law hai. Ye electronic transactions ka legal recognition provide karti hai, cyber crimes define karti hai, penalties establish karti hai.",
              "body2": "Simple words mein: IT Act 2000 = India ka internet law.",
              "chips": [
                "Primary cyber law",
                "Legal framework",
                "Electronic transactions",
                "Cyber crimes"
              ]
            },
            {
              "type": "cards",
              "title": "IT Act 2000 ke Objectives",
              "kicker": "Key Objectives",
              "cards": [
                {
                  "icon": "file",
                  "title": "Legal Recognition",
                  "body": "Electronic transactions ka legal recognition dena. Digital signatures, electronic records — sab legal honge."
                },
                {
                  "icon": "shield",
                  "title": "Cyber Crimes Prevention",
                  "body": "Cyber crimes define karna aur penalties set karna. Hacking, phishing, fraud — sabke liye punishments hain."
                },
                {
                  "icon": "check",
                  "title": "Digital Infrastructure",
                  "body": "Cyber Security Council establish karna. Digital signatures ka framework."
                },
                {
                  "icon": "users",
                  "title": "Consumer Protection",
                  "body": "Online consumers ka protection. Digital transactions ka rules."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "IT Act 2000 — Structure",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "it-act-2000",
              "caption": "IT Act 2000 India ka primary cyber law hai. Ye 4 main areas cover karta hai: Legal Recognition, Cyber Crimes, Digital Infrastructure, aur Consumer Protection."
            },
            {
              "type": "points",
              "title": "IT Act 2000 ka Scope",
              "kicker": "Coverage",
              "points": [
                "Electronic transactions ka legal validity.",
                "Digital signatures ka recognition.",
                "Cyber crimes ka definition aur penalties.",
                "Data protection aur privacy ka framework."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-threats-overview.webp",
                  "caption": "IT Act 2000 - India first cyber law"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "IT Act 2000 = India ka primary cyber law.",
                "Objectives: legal recognition, cyber crime prevention, digital infrastructure, consumer protection.",
                "2008 mein amendments kiye gaye."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Describe the Information Technology Act 2000 and its key objectives.",
              "answer": "**IT Act 2000 — Overview:**\nIT Act 2000 India ka primary cyber law hai. Ye 2000 mein enact hua tha.\n\n**Key Objectives:**\n\n1. **Legal Recognition** — Electronic transactions ka legal recognition. Digital signatures, electronic records legally valid.\n\n2. **Cyber Crimes Prevention** — Cyber crimes define karna aur penalties set karna. Hacking, phishing, fraud — sabke punishments hain.\n\n3. **Digital Infrastructure** — Cyber Security Council establish karna. Digital signatures ka framework.\n\n4. **Consumer Protection** — Online consumers ka protection. Digital transactions ka rules.\n\n**Coverage:**\n- Electronic transactions ka legal validity\n- Digital signatures ka recognition\n- Cyber crimes ka definition aur penalties\n- Data protection aur privacy ka framework\n\n**Diagram:** Refer to IT Act 2000 Structure diagram."
            }
          ]
        },
        {
          "id": "it-act-provisions",
          "number": "1.16",
          "title": "IT Act 2000 — Overview and Provisions",
          "subtitle": "IT Act 2000 ke important provisions aur sections",
          "icon": "file",
          "accent": "#0047ff",
          "englishDefinition": "The IT Act 2000 contains specific provisions for various cyber offenses and digital regulations. Key provisions include Section 65 (tampering with computer source code), Section 66 (computer-related offenses), Section 72 (penalty for breach of privacy), and provisions for digital signatures.",
          "intro": "IT Act 2000 mein specific provisions hain jo different cyber offenses aur digital regulations ka rules batate hain. Kaun si section kaun sa crime cover karta hai, kaun si penalty hai — sab specific hai.",
          "sections": [
            {
              "type": "definition",
              "title": "IT Act 2000 ke Important Provisions",
              "kicker": "Key Sections",
              "body": "IT Act 2000 mein specific provisions hain jo cyber offenses aur digital regulations ka rules batate hain. Key sections include Section 65 (tampering with source code), Section 66 (computer-related offenses), Section 72 (breach of privacy penalty).",
              "body2": "Simple words mein: IT Act ke sections — kaun sa section kaun sa crime cover karta hai.",
              "chips": [
                "Section 65",
                "Section 66",
                "Section 72",
                "Digital signatures"
              ]
            },
            {
              "type": "cards",
              "title": "IT Act 2000 ke Key Sections",
              "kicker": "Important Provisions",
              "cards": [
                {
                  "icon": "file",
                  "title": "Section 65 — Source Code Tampering",
                  "body": "Computer source code tampering ka penalty. Original source code ko modify, conceal, aur destroy karna illegal hai. Fine lakhon tak ho sakta hai."
                },
                {
                  "icon": "warn",
                  "title": "Section 66 — Computer Offenses",
                  "body": "Computer-related offenses ka penalty. Hacking, unauthorized access, data theft — sab Section 66 ke under aate hain. Jail aur fine dono ho sakta hai."
                },
                {
                  "icon": "lock",
                  "title": "Section 72 — Privacy Breach",
                  "body": "Breach of privacy penalty. Sensitive information leak karna illegal hai. Digital records without consent disclose karna."
                },
                {
                  "icon": "check",
                  "title": "Digital Signatures ka Recognition",
                  "body": "Digital signatures ka legal recognition. Section 10A — electronic records ka validity."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "IT Act 2000 — Key Provisions",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "it-act-provisions",
              "caption": "IT Act 2000 ke 4 key provisions: Section 65 (source code tampering), Section 66 (computer offenses), Section 72 (privacy breach), aur Digital Signatures (Section 10A)."
            },
            {
              "type": "points",
              "title": "Penalties ka Overview",
              "kicker": "Penalty Structure",
              "points": [
                "Fine — amount varies by offense.",
                "Imprisonment — jail terms vary.",
                "Both — fine aur jail dono ho sakte hain.",
                "Severity — serious offenses heavy penalties."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-threats-types.jpg",
                  "caption": "IT Act Provisions - Penalties for cybercrimes"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "Section 65 — source code tampering.",
                "Section 66 — computer offenses (hacking, unauthorized access).",
                "Section 72 — privacy breach penalty.",
                "Digital signatures — Section 10A, legal recognition."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Explain the key provisions and penalties under the IT Act 2000.",
              "answer": "**IT Act 2000 — Key Provisions:**\n\n1. **Section 65 — Source Code Tampering** — Computer source code tampering ka penalty. Original source code modify, conceal, destroy karna illegal hai. Fine lakhon tak ho sakta hai.\n\n2. **Section 66 — Computer-Related Offenses** — Computer-related offenses ka penalty. Hacking, unauthorized access, data theft — sab Section 66 ke under. Jail aur fine dono ho sakta hai.\n\n3. **Section 72 — Breach of Privacy** — Breach of privacy penalty. Sensitive information leak karna illegal hai. Jail aur fine ho sakta hai.\n\n4. **Section 10A — Digital Signatures** — Digital signatures ka legal recognition. Electronic records ka validity.\n\n**Penalty Structure:**\n- Fine — amount varies by offense\n- Imprisonment — jail terms vary\n- Both — fine aur jail dono\n- Severity — serious offenses heavy penalties\n\n**Diagram:** Refer to IT Act Provisions diagram."
            }
          ]
        },
        {
          "id": "it-act-amendments",
          "number": "1.17",
          "title": "Amendments to IT Act 2000",
          "subtitle": "IT Act 2008 amendments — key changes aur updates",
          "icon": "check",
          "accent": "#0047ff",
          "englishDefinition": "The IT Act 2000 was significantly amended in 2008 to address new cyber threats and align with international standards. Key amendments include the introduction of new cyber crimes (phishing, identity theft, voyeurism), expansion of penalties, addition of Section 66A (offensive messages), stricter data protection rules, and provisions for intermediary liability.",
          "intro": "IT Act 2000 ke original version mein kuch limitations the. Naye cyber crimes aate gaye, naye threats develop ho gaye. Isliye 2008 mein IT Act ke significant amendments kiye gaye.",
          "sections": [
            {
              "type": "definition",
              "title": "IT Act 2008 Amendments kya hain?",
              "kicker": "Definition",
              "body": "IT Act 2000 ke 2008 amendments significant changes hain jo naye cyber threats address karte hain. Ye naye cyber crimes add karte hain, penalties expand karte hain, aur Act ko international standards se align karte hain.",
              "body2": "Simple words mein: 2008 amendments = IT Act ke upgrade.",
              "chips": [
                "2008 amendments",
                "New crimes",
                "Expanded penalties",
                "Global alignment"
              ]
            },
            {
              "type": "cards",
              "title": "2008 Amendments ke Key Changes",
              "kicker": "Major Amendments",
              "cards": [
                {
                  "icon": "warn",
                  "title": "New Cyber Crimes Add",
                  "body": "Naye cyber crimes add kiye gaye — phishing, identity theft, voyeurism. Ye crimes original IT Act mein nahi the."
                },
                {
                  "icon": "chart",
                  "title": "Penalties Expanded",
                  "body": "Existing penalties aur fines expand kiye gaye. Serious crimes ke liye heavy penalties. Jail terms bhi increase kiye gaye."
                },
                {
                  "icon": "globe",
                  "title": "Intermediary Liability",
                  "body": "Intermediaries (social media, ISPs) ka liability define kiya. Section 79 amendment — safe harbor provide."
                },
                {
                  "icon": "lock",
                  "title": "Data Protection Framework",
                  "body": "Data protection provisions expand kiye gaye. Sensitive personal data ka protection."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "IT Act 2008 Amendments — Changes",
              "kicker": "Diagram (Exam Demonstrate Karne Lagaat)",
              "diagram": "it-act-amendments",
              "caption": "IT Act 2008 amendments 4 key changes laye: New Cyber Crimes, Expanded Penalties, Intermediary Liability, aur Data Protection Framework."
            },
            {
              "type": "points",
              "title": "Other Important Amendments",
              "kicker": "Additional Changes",
              "points": [
                "Section 66A — offensive messages ka provision (2015 Supreme Court invalid).",
                "Section 66B — impugning meaning of images.",
                "Section 66C — identity theft penalty.",
                "Section 66D — cheating by impersonation."
              ]
            },
            {
              "type": "image",
              "title": "Reference Image",
              "kicker": "Image from the Internet",
              "images": [
                {
                  "src": "/images/cyber-terrorism-govt.jpg",
                  "caption": "IT Act 2008 Amendments - Updated cyber law provisions"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Quick Recap",
              "kicker": "5 Seconds Mein Yaad Karo",
              "points": [
                "2008 amendments = IT Act ke upgrade.",
                "4 key changes: New crimes, Expanded penalties, Intermediary liability, Data protection.",
                "Naye crimes: phishing, identity theft, voyeurism.",
                "Supreme Court 2015 — Section 66A invalid kiya."
              ]
            }
          ],
          "examQuestions": [
            {
              "question": "Discuss the key amendments made to the IT Act 2000 in 2008.",
              "answer": "**IT Act 2008 Amendments — Key Changes:**\n\n1. **New Cyber Crimes Add** — Naye cyber crimes add kiye gaye: phishing, identity theft, voyeurism.\n\n2. **Penalties Expanded** — Existing penalties aur fines expand kiye gaye. Serious crimes ke liye heavy penalties. Jail terms increase kiye gaye.\n\n3. **Intermediary Liability** — Section 79 amendment. Intermediaries ka liability define kiya. Safe harbor provide.\n\n4. **Data Protection Framework** — Data protection provisions expand kiye gaye. Sensitive personal data ka protection.\n\n**Other Amendments:**\n- Section 66A — Offensive messages (2015 Supreme Court invalid)\n- Section 66B — Impugn meaning of images\n- Section 66C — Identity theft penalty\n- Section 66D — Cheating by impersonation\n\n**Impact:** 2008 amendments IT Act ko modernize kiya. Ye international standards se align hui.\n\n**Diagram:** Refer to IT Act Amendments diagram."
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2",
      "number": "2",
      "name": "Cybercrimes and Hacking",
      "topics": [
        {
          "id": "overview-cyber-attacks",
          "number": "2.1",
          "title": "Overview of Cyber-Attacks and Vulnerabilities",
          "subtitle": "Cyber attacks kya hain — attack types aur vulnerability concept",
          "icon": "warn",
          "accent": "#0047ff",
          "englishDefinition": "A cyber-attack is a deliberate exploitation of a system, network, or device vulnerability to gain unauthorized access, cause damage, or steal data. A vulnerability is a weakness or flaw in a system, application, or process that can be exploited by an attacker to cause harm.",
          "intro": "Cyber attacks vaise hi hain jaise ghar mein ghusna — darwaza khole bina andar aana. Hackers system ke weaknesses find karke unka use karte hain. Aaj kal har jagah online hai — bank, hospital, government — sabke data online hai. Hackers us data ko churana chahte hain. Ye chapter bataega ki attacks hotekaise hain, kya types hain, aur kaise protect karna hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Cyber-Attack — Jab koi hacker intentionally system, network, ya device ko damage kare, data chure, ya unauthorized access le, woh cyber attack kehlata hai.\n\nVulnerability — System mein weakness ya flaw jo hacker exploit kar sakta hai. Vulnerability software, hardware, network config, ya human behavior mein ho sakta hai."
            },
            {
              "type": "cards",
              "title": "Types of Cyber-Attacks",
              "cards": [
                {
                  "icon": "virus",
                  "title": "Malware Attacks",
                  "desc": "Viruses, worms, Trojans, ransomware — system ko corrupt ya lock kar dete hain",
                  "color": "#ff0040"
                },
                {
                  "icon": "shield",
                  "title": "Phishing",
                  "desc": "Fake emails/messages — users ko trick karke sensitive info churate hain",
                  "color": "#0047ff"
                },
                {
                  "icon": "lock",
                  "title": "MITM",
                  "desc": "Victim aur server ke beech intercept — communication sunte/modify karte hain",
                  "color": "#ff8800"
                },
                {
                  "icon": "server",
                  "title": "DoS/DDoS",
                  "desc": "Server par request flood — system crash ho jata hai, legit users access nahi kar paate",
                  "color": "#aa00ff"
                },
                {
                  "icon": "database",
                  "title": "SQL Injection",
                  "desc": "Input fields mein SQL code — database manipulate hota hai, data leak",
                  "color": "#00c8ff"
                },
                {
                  "icon": "users",
                  "title": "Social Engineering",
                  "desc": "Psychological manipulation — users se info obtain karte hain, humans weakest link",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Attack Lifecycle Diagram",
              "diagram": "cyber-attacks-overview",
              "caption": "Attack phases — Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Cyber attack deliberate exploitation hai system ya network vulnerability ka.",
                "Vulnerability koi bhi weakness ho sakti hai — software, hardware, config, ya human.",
                "Malware attacks most common hain — viruses, worms, Trojans, ransomware.",
                "Phishing social engineering technique hai — fake emails/messages.",
                "DoS/DDoS attacks server ko crash kar dete hain — legitimate users affected.",
                "SQL injection database attack hai — input validation na hone par.",
                "Zero-day attacks unknown vulnerabilities exploit karte hain — patch available nahi.",
                "Attack lifecycle 7 phases hain — Recon, Weaponize, Deliver, Exploit, Install, C2, Actions."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Cyber attack = intentional exploitation of vulnerability.\nVulnerability = system weakness.\nAttacks types = Malware, Phishing, MITM, DoS, SQL Injection, XSS, Zero-Day, Social Engineering.\nLifecycle = 7 phases: Recon → Weaponize → Deliver → Exploit → Install → C2 → Actions."
            }
          ],
          "examQuestions": [
            {
              "question": "Define cyber-attack and vulnerability. Explain the 7 phases of the attack lifecycle.",
              "answer": "Cyber-attack: deliberate exploitation of system/network vulnerability to gain unauthorized access, cause damage, or steal data.\nVulnerability: weakness or flaw in system, application, or process that can be exploited.\n\nAttack Lifecycle 7 Phases:\n1. Reconnaissance — Target info gather karna\n2. Weaponization — Malicious code prepare karna\n3. Delivery — Attack tool deliver karna\n4. Exploitation — Vulnerability exploit karna\n5. Installation — Malware install karna\n6. Command & Control — Remote access establish karna\n7. Actions on Objectives — Data theft, damage"
            },
            {
              "question": "What are the major types of cyber-attacks? Give one example of each.",
              "answer": "Major Types:\n1. Malware — viruses, worms, Trojans (example: WannaCry ransomware 2017)\n2. Phishing — fake emails (example: fake banking login pages)\n3. MITM — communication intercept (example: public Wi-Fi traffic capture)\n4. DoS/DDoS — server flood (example: DDoS attack on Dyn 2016)\n5. SQL Injection — database exploit (example: OWASP Top 10)\n6. XSS — script injection (example: Facebook XSS 2018)\n7. Zero-Day — unknown vuln (example: Stuxnet)\n8. Social Engineering — manipulation (example: fake IT support call)"
            }
          ]
        },
        {
          "id": "threats-malware-spyware-sniffing",
          "number": "2.2",
          "title": "Types of Threats — Malware, Spyware, Sniffing",
          "subtitle": "Malware types, spyware behavior, aur sniffing attack concept",
          "icon": "virus",
          "accent": "#ff0040",
          "englishDefinition": "Malware is malicious software designed to damage, disrupt, or gain unauthorized access. Spyware secretly monitors user activity. Sniffing captures network traffic to intercept data packets including passwords and sensitive information.",
          "intro": "Malware vaise hi hai jaise kisi ke ghar mein chupke se aana — system ko damage karna. Spyware jaise chhote camera — aapke activities dekh raha hai. Sniffing jaise phone tapping — aapki conversation sun raha hai. Ye chapter malware ke different types, spyware, aur sniffing attacks ko samjhaega.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Malware (malicious software) — Koi bhi software jo system ko damage, disrupt, ya unauthorized access provide kare.\n\nSpyware — Chhupa software jo user activity monitor karta hai — keystrokes, browsing, passwords.\n\nSniffing — Network traffic capture karna — data packets read karna, sensitive info extract karna."
            },
            {
              "type": "cards",
              "title": "Types of Malware",
              "cards": [
                {
                  "icon": "virus",
                  "title": "Virus",
                  "desc": "Self-replicating — host file attach hota hai. Jab run ho, spread hota hai",
                  "color": "#ff0040"
                },
                {
                  "icon": "server",
                  "title": "Worm",
                  "desc": "Self-replicating — network se spread hota hai. Host file attach nahi hota",
                  "color": "#ff8800"
                },
                {
                  "icon": "lock",
                  "title": "Trojan",
                  "desc": "Legitimate software ki tarah dikhta hai — backdoor open kar deta hai",
                  "color": "#0047ff"
                },
                {
                  "icon": "warn",
                  "title": "Ransomware",
                  "desc": "System lock kar deta hai — files encrypt. Ransom demand karta hai",
                  "color": "#aa00ff"
                },
                {
                  "icon": "eye",
                  "title": "Spyware",
                  "desc": "User activity monitor karta hai — keystrokes, passwords, browsing",
                  "color": "#00c8ff"
                },
                {
                  "icon": "layers",
                  "title": "Rootkit",
                  "desc": "Kernel-level stealth — system se hide karta hai. Antivirus detect nahi",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Malware, Spyware & Sniffing Comparison",
              "diagram": "threats-malware-spyware-sniffing",
              "caption": "3 types of threats — malware types, spyware monitoring, sniffing attack flow"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Malware 10+ types hain — virus, worm, Trojan, ransomware, spyware, adware, rootkit, fileless, botnet, wiper.",
                "Virus host file attach hota hai — worm independent hai.",
                "Trojan legitimate software ki tarah dikhta hai — backdoor open karta hai.",
                "Ransomware files encrypt kar deta hai — ransom demand karta hai.",
                "Spyware user activity monitor karta hai — keystrokes, passwords churata hai.",
                "Sniffing network traffic capture karta hai — data packets read karta hai.",
                "Sniffing tools: Wireshark, dsniff, tcpdump.",
                "Prevention: Encryption (HTTPS, WPA3), VPN, antivirus."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Malware = malicious software (virus, worm, Trojan, ransomware, spyware, rootkit).\nSpyware = hidden monitoring software.\nSniffing = network traffic capture.\nPrevention = encryption, VPN, antivirus, behavior monitoring."
            }
          ],
          "examQuestions": [
            {
              "question": "What is malware? Explain the different types of malware with examples.",
              "answer": "Malware: malicious software designed to damage, disrupt, or gain unauthorized access.\n\nTypes:\n1. Virus — self-replicating, host attach (example: CIH)\n2. Worm — self-replicating, network spread (example: ILOVEYOU)\n3. Trojan — disguised as legit software, backdoor (example: DarkComet)\n4. Ransomware — locks system, encrypts files (example: WannaCry)\n5. Spyware — monitors activity, steals data (example: Pegasus)\n6. Adware — displays ads, tracks activity (example: Zango)\n7. Rootkit — kernel stealth, invisible (example: Stuxnet)\n8. Fileless — memory/registry hide (example: PowerShell malware)"
            },
            {
              "question": "Explain spyware and sniffing attacks. How can they be prevented?",
              "answer": "Spyware: hidden software that monitors user activity — keystrokes, browsing, passwords. Examples: Pegasus, FinSpy.\n\nSniffing: captures network traffic — reads data packets, extracts sensitive info. Tools: Wireshark, tcpdump.\n\nPrevention:\n- Encryption: HTTPS, WPA3\n- VPN use karna\n- Antivirus + behavior monitoring\n- Network segmentation\n- Regular security audits"
            }
          ]
        },
        {
          "id": "gaining-access",
          "number": "2.3",
          "title": "Gaining Access",
          "subtitle": "System kaise hack karte hain — access methods aur attack chain",
          "icon": "lock",
          "accent": "#0047ff",
          "englishDefinition": "Gaining unauthorized access is the process by which attackers exploit vulnerabilities to enter a computer system without permission. Common methods include password cracking, software exploits, social engineering, and credential theft.",
          "intro": "Gaining access means system mein ghusna — jaise kisi ghar ka darwaza khole bina andar aana. Hackers various methods use karte hain — password crack, software exploit, social engineering. Ye chapter attack chain ke first major phase ko samjhaega — kaise hackers system mein entry karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Gaining Access — Jab hacker intentionally vulnerabilities exploit karke system mein enter kare without permission. Yeh attack chain ka first major phase hai after reconnaissance."
            },
            {
              "type": "cards",
              "title": "Methods of Gaining Access",
              "cards": [
                {
                  "icon": "lock",
                  "title": "Password Cracking",
                  "desc": "Weak passwords brute-force ya dictionary attack se crack karna. Tools: John the Ripper, Hashcat",
                  "color": "#ff0040"
                },
                {
                  "icon": "server",
                  "title": "Software Exploits",
                  "desc": "Known software vulnerabilities exploit karna. Tools: Metasploit. Example: EternalBlue",
                  "color": "#ff8800"
                },
                {
                  "icon": "users",
                  "title": "Social Engineering",
                  "desc": "Humans manipulate karke credentials obtain karna. Phishing, pretexting, baiting",
                  "color": "#0047ff"
                },
                {
                  "icon": "database",
                  "title": "Credential Theft",
                  "desc": "Stolen credentials use karna. Credential stuffing — multiple sites test karna",
                  "color": "#aa00ff"
                },
                {
                  "icon": "globe",
                  "title": "Network Attacks",
                  "desc": "SMB, RDP, FTP services exploit karna. Tools: Nmap, Nessus",
                  "color": "#00c8ff"
                },
                {
                  "icon": "warn",
                  "title": "Physical Access",
                  "desc": "Unlocked computers, USB drives, shoulder surfing. Physical security bypass",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Gaining Access — Attack Chain",
              "diagram": "gaining-access",
              "caption": "4 main access methods — password cracking, software exploits, social engineering, credential theft"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Gaining access attack chain ka phase 3 hai — Recon → Scan → Gain Access.",
                "Password cracking brute-force ya dictionary attacks se hota hai.",
                "Software exploits known vulnerabilities use karte hain — patch nahi lagae hue.",
                "Social engineering humans manipulate karke credentials obtain karta hai.",
                "Credential theft data breaches se leaked credentials use karta hai.",
                "Network attacks SMB, RDP, FTP services exploit karte hain.",
                "Physical access unlocked computers, USB drives exploit karta hai.",
                "Web application attacks SQL injection, XSS, CSRF include karte hain.",
                "Wireless attacks Wi-Fi vulnerabilities exploit karte hain."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Gaining access = unauthorized system entry.\nMethods = password cracking, software exploits, social engineering, credential theft, network attacks, physical access, web app attacks.\nAttack chain = Recon → Scan → Gain Access → Maintain Access."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain the process of gaining unauthorized access to a computer system.",
              "answer": "Gaining unauthorized access: process by which attackers exploit vulnerabilities to enter a system without permission.\n\nMethods:\n1. Password Cracking — brute-force, dictionary attacks. Tools: John the Ripper, Hashcat\n2. Software Exploits — known vulnerabilities. Tools: Metasploit\n3. Social Engineering — humans manipulate. Phishing, pretexting\n4. Credential Theft — stolen credentials. Credential stuffing\n5. Network Attacks — SMB, RDP, FTP. Tools: Nmap\n6. Physical Access — unlocked computers, USB drives\n7. Web Application Attacks — SQL injection, XSS\n8. Wireless Attacks — Wi-Fi vulnerabilities"
            },
            {
              "question": "What are the common methods used by attackers to gain system access? Give examples.",
              "answer": "Common Methods:\n1. Password Cracking — brute-force, dictionary (example: John the Ripper)\n2. Software Exploits — known vulnerabilities (example: EternalBlue, Metasploit)\n3. Social Engineering — phishing, pretexting (example: fake CEO email)\n4. Credential Theft — data breaches, stuffing (example: LinkedIn breach)\n5. Network Attacks — SMB, RDP (example: Nmap scanning)\n6. Physical Access — USB, shoulder surfing\n7. Web App Attacks — SQL injection, XSS\n8. Wireless — Wi-Fi exploits (example: Aircrack-ng)"
            }
          ]
        },
        {
          "id": "escalating-privileges",
          "number": "2.4",
          "title": "Escalating Privileges",
          "subtitle": "Privilege escalation kya hai — vertical aur horizontal",
          "icon": "arrow",
          "accent": "#ff8800",
          "englishDefinition": "Privilege escalation is obtaining higher-level permissions on a system than originally intended. Vertical escalation moves from lower to higher privilege levels (e.g., user to admin). Horizontal escalation accesses another user account at the same level.",
          "intro": "Privilege escalation jaise ghar mein ghuske chhup jaana aur phir captain banjana. Hackers system mein entry karke admin ya root access lena chahte hain. Vertical escalation same user ko higher rank. Horizontal escalation same rank ka alag user account access karna. Ye chapter dono types ko samjhaega.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Privilege Escalation — System par higher-level permissions obtain karna than originally intended.\n\nVertical Escalation — Lower-privilege user higher-level access (user → admin).\n\nHorizontal Escalation — Same-level access different user account."
            },
            {
              "type": "cards",
              "title": "Types of Privilege Escalation",
              "cards": [
                {
                  "icon": "arrow",
                  "title": "Vertical Escalation",
                  "desc": "Lower → higher. User → admin → root. OS kernel exploit. Tools: LinPEAS, WinPEAS",
                  "color": "#ff0040"
                },
                {
                  "icon": "users",
                  "title": "Horizontal Escalation",
                  "desc": "Same level different account. Session hijacking, credential theft",
                  "color": "#0047ff"
                },
                {
                  "icon": "server",
                  "title": "Kernel Vulnerabilities",
                  "desc": "OS-level exploits system-wide access. Example: Dirty COW (Linux)",
                  "color": "#ff8800"
                },
                {
                  "icon": "layers",
                  "title": "Application Vulnerabilities",
                  "desc": "Buffer overflows, format string. Admin privileges obtain karta hai",
                  "color": "#aa00ff"
                },
                {
                  "icon": "lock",
                  "title": "Password Attack",
                  "desc": "Admin password crack karna. Brute force, dictionary, credential theft",
                  "color": "#00c8ff"
                },
                {
                  "icon": "database",
                  "title": "Misconfigured Permissions",
                  "desc": "Weak file/directory permissions. SUID/SGID abuse. Root access allow karta hai",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Vertical vs Horizontal Escalation",
              "diagram": "escalating-privileges",
              "caption": "Vertical — user → admin → root. Horizontal — same level different account."
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Vertical escalation lower-privilege user higher-level access obtain karta hai.",
                "Horizontal escalation same-level access different user account obtain karta hai.",
                "Kernel vulnerabilities OS-level exploits system-wide access provide karte hain.",
                "Application vulnerabilities buffer overflows, format string attacks include karte hain.",
                "Misconfigured permissions weak file/directory permissions exploit karte hain.",
                "SUID/SGID binaries abuse karte hain — root access allow karta hai.",
                "Password attack admin password crack karta hai — brute force, dictionary.",
                "Service misconfiguration elevated privileges wale services exploit karta hai.",
                "Session hijacking horizontal escalation ka common method hai.",
                "Prevention: least privilege, patching, MFA, monitoring."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Vertical escalation = user → admin → root.\nHorizontal escalation = same level different account.\nMethods = kernel exploits, app vulnerabilities, misconfigured permissions, password attacks.\nPrevention = least privilege, patching, MFA, monitoring."
            }
          ],
          "examQuestions": [
            {
              "question": "Define privilege escalation. Explain vertical and horizontal escalation.",
              "answer": "Privilege escalation: obtaining higher-level permissions on a system than originally intended.\n\nVertical Escalation: lower-privilege user higher-level access (user → admin → root).\n- Kernel vulnerabilities exploit (Dirty COW)\n- Application vulnerabilities (buffer overflows)\n- Misconfigured permissions (SUID/SGID abuse)\n- Password attacks (brute force, dictionary)\n- Service misconfiguration\n\nHorizontal Escalation: same-level access different user account.\n- Session hijacking (cookie theft)\n- Credential theft (keyloggers)\n- Account takeover (password reset)"
            },
            {
              "question": "What are the methods used for vertical privilege escalation? Explain with examples.",
              "answer": "Vertical Escalation Methods:\n1. Kernel Vulnerabilities — OS-level exploits. Example: Dirty COW (Linux)\n2. Application Vulnerabilities — buffer overflows, format strings. Example: Format string attack\n3. Misconfigured Permissions — weak permissions, SUID/SGID. Example: /usr/bin/passwd root access\n4. Password Attack — admin password crack. Example: brute force, dictionary\n5. Service Misconfiguration — elevated privilege services. Example: misconfigured SSH keys\n\nPrevention: least privilege, regular patching, MFA, privilege monitoring, service hardening"
            }
          ]
        },
        {
          "id": "executing-applications",
          "number": "2.5",
          "title": "Executing Applications",
          "subtitle": "Malicious code kaise run karte hain — execution techniques",
          "icon": "file",
          "accent": "#aa00ff",
          "englishDefinition": "After gaining access, attackers execute malicious applications or commands on the compromised system. Techniques include binary execution, script execution, code injection, and LOLBins (Living Off the Land Binaries) abuse.",
          "intro": "Executing applications means system mein malicious code run karna. Jaise kisi ghar mein ghuske khana banana shuru karna. Hackers various techniques use karte hain — binary run karna, PowerShell scripts, DLL injection, aur system tools ka misuse karna. Ye chapter execution techniques ko samjhaega.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Application Execution — After gaining access, attackers malicious applications ya commands execute karna compromised system par. Yeh allow karta hai malicious code run karna, tools download karna, aur further attacks carry karna."
            },
            {
              "type": "cards",
              "title": "Execution Techniques",
              "cards": [
                {
                  "icon": "file",
                  "title": "Binary Execution",
                  "desc": "Malicious binaries download aur execute karna. Reverse shells establish karna. Tools: Metasploit",
                  "color": "#ff0040"
                },
                {
                  "icon": "layers",
                  "title": "Script Execution",
                  "desc": "PowerShell, Bash, Python scripts run karna. Fileless attacks. Tools: PowerShell Empire",
                  "color": "#0047ff"
                },
                {
                  "icon": "arrow",
                  "title": "Code Injection",
                  "desc": "Running processes mein code inject karna. DLL injection, process hollowing",
                  "color": "#ff8800"
                },
                {
                  "icon": "server",
                  "title": "LOLBins",
                  "desc": "Living Off the Land — system tools misuse (certutil, bitsadmin, wget, curl). Legit tools misuse",
                  "color": "#aa00ff"
                },
                {
                  "icon": "clock",
                  "title": "Scheduled Tasks",
                  "desc": "Windows Task Scheduler, Linux cron abuse. Malicious scripts schedule karna — persistence",
                  "color": "#00c8ff"
                },
                {
                  "icon": "database",
                  "title": "Service Manipulation",
                  "desc": "Windows services manipulate karna. Malicious services create karna — auto-start",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Application Execution Methods",
              "diagram": "executing-applications",
              "caption": "Binary execution, script execution, code injection, LOLBins, scheduled tasks, service manipulation"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Binary execution malicious binaries download aur execute karta hai.",
                "Script execution PowerShell, Bash, Python use karta hai — fileless attacks.",
                "Code injection running processes mein code inject karta hai — DLL injection.",
                "LOLBins system tools misuse karta hai — certutil, bitsadmin, wget, curl.",
                "Scheduled tasks Windows Task Scheduler, Linux cron abuse karta hai.",
                "Service manipulation Windows services manipulate karta hai — auto-start.",
                "Registry manipulation Run keys use karta hai — auto-execution.",
                "In-memory execution fileless hai — memory mein code run karta hai.",
                "Defense: application whitelisting, behavior monitoring, script logging.",
                "Memory protection: ASLR, DEP, stack canaries."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Binary execution = download and run malicious binaries.\nScript execution = PowerShell, Bash, Python scripts.\nCode injection = DLL injection, process hollowing.\nLOLBins = system tools misuse.\nDefense = whitelisting, behavior monitoring, script logging, memory protection."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain the different techniques used by attackers to execute applications on a compromised system.",
              "answer": "Execution Techniques:\n1. Binary Execution — download and run malicious binaries. Reverse shells establish. Tools: Metasploit\n2. Script Execution — PowerShell, Bash, Python scripts. Fileless attacks. Tools: PowerShell Empire\n3. Code Injection — running processes mein code inject. DLL injection, process hollowing\n4. LOLBins — Living Off the Land. System tools misuse (certutil, bitsadmin, wget, curl)\n5. Scheduled Tasks — Windows Task Scheduler, Linux cron abuse. Persistence\n6. Service Manipulation — Windows services manipulate. Auto-start\n7. Registry Manipulation — Run keys use. Auto-execution\n8. In-Memory Execution — fileless. Memory monitoring bypass"
            },
            {
              "question": "What are LOLBins? How do attackers use them for execution?",
              "answer": "LOLBins (Living Off the Land Binaries): legitimate system tools misused by attackers for malicious purposes.\n\nUsage:\n- certutil — URL download (code decode)\n- bitsadmin — background download\n- wget, curl — files download\n- PowerShell — script execution\n- cmd — command execution\n\nWhy dangerous: legit tools look normal — difficult to detect.\n\nPrevention: Tool monitoring, behavior analysis, application whitelisting, endpoint detection."
            }
          ]
        },
        {
          "id": "hiding-files",
          "number": "2.6",
          "title": "Hiding Files",
          "subtitle": "Malicious files kaise hide karte hain — persistence techniques",
          "icon": "eye",
          "accent": "#00c8ff",
          "englishDefinition": "After executing malicious code, attackers hide files to avoid detection. Techniques include encryption, disguising, rootkit stealth, steganography, and memory-based persistence. Attackers maintain persistence through bootkits, scheduled tasks, and service manipulation.",
          "intro": "Hiding files means malicious files chhupana — jaise kisi ghar mein chhup ke baithna. Hackers files encrypt karte hain, system files copy karte hain, rootkit techniques use karte hain. Ye chapter hiding techniques aur persistence mechanisms ko samjhaega — kaise hackers system mein rehte hain bina detect hue.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Hiding Files — Malicious files chhupana detection se avoid karna.\n\nTechniques: encryption, disguising, rootkits, steganography, hidden directories, memory-based persistence, registry-based hiding.\n\nPersistence — System restart ke baad bhi malware rehna. Bootkits, scheduled tasks, service persistence, startup folder, DLL hijacking, WMI subscriptions."
            },
            {
              "type": "cards",
              "title": "Hiding Techniques",
              "cards": [
                {
                  "icon": "lock",
                  "title": "Encryption",
                  "desc": "Malicious files encrypt karke hide karna. Encrypted payloads antivirus detect nahi kar paate",
                  "color": "#ff0040"
                },
                {
                  "icon": "file",
                  "title": "Disguising",
                  "desc": "Malicious files legitimate names mein hide karna. malware.exe ko svchost.exe naam se save karna",
                  "color": "#0047ff"
                },
                {
                  "icon": "layers",
                  "title": "Rootkit",
                  "desc": "Kernel-level stealth — OS se hide karna. Files invisible bana deta hai",
                  "color": "#ff8800"
                },
                {
                  "icon": "eye",
                  "title": "Steganography",
                  "desc": "Malicious code images, audio, documents mein hide karna. Files visually same dikhte hain",
                  "color": "#aa00ff"
                },
                {
                  "icon": "server",
                  "title": "Hidden Directories",
                  "desc": "System hidden directories mein files save karna. Windows: System32, Linux: /tmp",
                  "color": "#00c8ff"
                },
                {
                  "icon": "database",
                  "title": "Memory-Based",
                  "desc": "Files memory mein hide karna — no disk footprint. Memory injection techniques",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Hiding Files — Techniques & Persistence",
              "diagram": "hiding-files",
              "caption": "Hiding: encryption, disguising, rootkit, steganography. Persistence: bootkits, scheduled tasks, services."
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Encryption malicious files encrypt karke hide karta hai — antivirus detect nahi kar paata.",
                "Disguising files legitimate names mein hide karta hai — svchost.exe name use karta hai.",
                "Rootkit kernel-level stealth provide karta hai — OS detect nahi kar paata.",
                "Steganography malicious code images/audio/documents mein hide karta hai.",
                "Hidden directories system folders mein files save karta hai.",
                "Memory-based persistence memory injection techniques use karta hai — no disk.",
                "Registry-based hiding configurations registry mein save karta hai.",
                "Bootkits BIOS/firmware level persistence provide karte hain.",
                "Scheduled tasks automatic execution schedule karte hain.",
                "DLL hijacking legitimate applications hijack karte hain."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Hiding = encryption, disguising, rootkit, steganography, hidden dirs, memory-based, registry.\nPersistence = bootkits, scheduled tasks, services, startup folder, DLL hijacking, WMI.\nDefense = file integrity monitoring, rootkit scanners, memory forensics, regular audits."
            }
          ],
          "examQuestions": [
            {
              "question": "How do attackers hide files on a compromised system? Explain different techniques.",
              "answer": "Hiding Techniques:\n1. Encryption — files encrypt karke hide karna. Encrypted payloads antivirus detect nahi\n2. Disguising — legitimate names mein hide karna. malware.exe ko svchost.exe\n3. Rootkit — kernel-level stealth. Files invisible bana deta hai\n4. Steganography — images/audio/documents mein hide karna. Visually same dikhte hain\n5. Hidden Directories — System32, /tmp mein save karna\n6. Memory-Based — memory injection, no disk footprint\n7. Registry-Based — deep registry keys mein save karna"
            },
            {
              "question": "What are persistence mechanisms used by attackers? Explain with examples.",
              "answer": "Persistence Mechanisms:\n1. Bootkits — BIOS/firmware level. System restart ke baad malware load (example: LoJax)\n2. Scheduled Tasks — Windows Task Scheduler, Linux cron. Auto-execution (example: cron backdoor)\n3. Service Persistence — Windows/systemd services. Auto-start (example: service backdoor)\n4. Startup Folder — login scripts, startup items\n5. DLL Hijacking — legitimate apps hijack karna. Malicious DLL load\n6. WMI Subscriptions — event-driven execution. WMI backdoor\n\nDefense: file integrity monitoring, rootkit scanners, memory forensics, regular audits"
            }
          ]
        },
        {
          "id": "covering-tracks",
          "number": "2.7",
          "title": "Covering Tracks",
          "subtitle": "Evidence kaise delete karte hain — anti-forensics techniques",
          "icon": "clock",
          "accent": "#ff8800",
          "englishDefinition": "Covering tracks is the phase where attackers erase or modify evidence of their activities to avoid detection. Techniques include log deletion, timestomping, shadow copy deletion, and anti-forensics tools. Attackers use tools like CCleaner, SDelete to remove traces.",
          "intro": "Covering tracks means apne footprint chhupana — jaise kisi ghar se nikalke khidki band karna. Hackers logs delete karte hain, timestamps modify karte hain, system restore points erase karte hain. Ye chapter anti-forensics techniques ko samjhaega — kaise hackers apne activities ko chhupate hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Covering Tracks — Attackers evidence erase ya modify karna detection aur attribution se avoid karna.\n\nTechniques: log deletion, timestomping, shadow copy deletion, anti-forensics tools, registry modification, network cover tracks, memory forensics evasion, file system evidence deletion."
            },
            {
              "type": "cards",
              "title": "Covering Tracks Techniques",
              "cards": [
                {
                  "icon": "clock",
                  "title": "Log Deletion",
                  "desc": "System/application logs delete karna. Windows Event Logs, Linux syslog clear karna",
                  "color": "#ff0040"
                },
                {
                  "icon": "file",
                  "title": "Timestomping",
                  "desc": "File timestamps modify karna — creation, access, modification times. Malicious files legit timestamps match",
                  "color": "#0047ff"
                },
                {
                  "icon": "layers",
                  "title": "Shadow Copy",
                  "desc": "Windows Volume Shadow Copies delete karna. System restore points erase karna",
                  "color": "#ff8800"
                },
                {
                  "icon": "warn",
                  "title": "Anti-Forensics",
                  "desc": "Data wiping tools, file shredders. Tools: CCleaner, SDelete, shred",
                  "color": "#aa00ff"
                },
                {
                  "icon": "database",
                  "title": "Registry Modification",
                  "desc": "Windows Registry modify karna. Last Write Time (LWT) modify karna",
                  "color": "#00c8ff"
                },
                {
                  "icon": "globe",
                  "title": "Network Cover",
                  "desc": "Network traffic logs clear karna. Firewall, proxy, IDS logs delete karna",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Covering Tracks — Anti-Forensics",
              "diagram": "covering-tracks",
              "caption": "Log deletion, timestomping, shadow copy, anti-forensics tools, registry modification"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Log deletion system/application logs clear karta hai — no evidence.",
                "Timestomping file timestamps modify karta hai — malicious files legit timestamps match.",
                "Shadow copy deletion Volume Shadow Copies erase karta hai.",
                "Anti-forensics tools data wiping, file shredding provide karte hain.",
                "Registry modification Last Write Time modify karta hai.",
                "Network cover tracks traffic logs clear karta hai.",
                "Memory forensics evasion memory artifacts clear karta hai.",
                "File system evidence MFT entries, slack space clear karta hai.",
                "Process/service evidence malicious processes terminate karta hai.",
                "Browser history cache, cookies clear karta hai."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Covering tracks = evidence erase/modify karna detection se avoid karna.\nTechniques = log deletion, timestomping, shadow copy, anti-forensics, registry mod, network cover, memory evasion, file system.\nDefense = centralized logging, log protection, file integrity, secure timestamping, backup isolation."
            }
          ],
          "examQuestions": [
            {
              "question": "What is covering tracks in cyber attacks? Explain the techniques used.",
              "answer": "Covering tracks: phase where attackers erase or modify evidence of activities to avoid detection.\n\nTechniques:\n1. Log Deletion — system/application logs clear. Windows Event Logs, Linux syslog\n2. Timestomping — file timestamps modify. Malicious files legit timestamps match\n3. Shadow Copy Deletion — Volume Shadow Copies erase. System restore points\n4. Anti-Forensics — data wiping, file shredders. Tools: CCleaner, SDelete, shred\n5. Registry Modification — LWT modify. Registry key timestamps change\n6. Network Cover — traffic logs clear. Firewall, proxy, IDS logs\n7. Memory Evasion — memory artifacts clear. Memory wipe before exit\n8. File System — MFT entries, slack space clear\n9. Process/Service — malicious processes terminate. Services delete\n10. Browser History — cache, cookies, history clear"
            },
            {
              "question": "Explain timestomping and shadow copy deletion. How can they be prevented?",
              "answer": "Timestomping: file timestamps modify karna — creation, access, modification times. Malicious files legitimate timestamps ke saath match karna. Tools: Touch.\n\nShadow Copy Deletion: Windows Volume Shadow Copies delete karna — system restore points erase. Example: wmic shadowcopy delete.\n\nPrevention:\n- Centralized logging, log protection\n- File integrity monitoring, secure timestamping\n- Shadow copy protection, backup isolation\n- Registry auditing, change monitoring\n- Network traffic capture, log aggregation\n- Memory forensics, volatile data capture"
            }
          ]
        },
        {
          "id": "worms",
          "number": "2.8",
          "title": "Worms",
          "subtitle": "Self-replicating malware — network se spread hota hai",
          "icon": "server",
          "accent": "#0047ff",
          "englishDefinition": "A computer worm is a standalone malware that replicates itself to spread to other computers. Unlike viruses, worms do not need to attach to existing programs. They spread through networks, exploiting vulnerabilities, email attachments, and removable media.",
          "intro": "Worms jaise zombies — ek computer se doosre computer automatically spread hote hain. Virus ki tarah host file attach nahi hota. Network vulnerabilities exploit karke spread hote hain. Email attachments, USB drives, network shares se spread hote hain. Ye chapter worm characteristics, spread methods, aur impact ko samjhaega.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Worm — Standalone malware jo apne aap copy create karta hai aur other computers spread karta hai.\n\nVirus se alag — worm host file attach nahi hota. Independently run karta hai.\n\nNetwork vulnerabilities exploit karke spread karta hai — email, network shares, removable media."
            },
            {
              "type": "cards",
              "title": "Worm Characteristics",
              "cards": [
                {
                  "icon": "server",
                  "title": "Self-Replicating",
                  "desc": "Worm independent program hai. Apne aap copy create karta hai. Other systems spread karta hai",
                  "color": "#ff0040"
                },
                {
                  "icon": "globe",
                  "title": "No Host File",
                  "desc": "Virus ki tarah host file attach nahi hota. Independently run karta hai",
                  "color": "#0047ff"
                },
                {
                  "icon": "network",
                  "title": "Network Spread",
                  "desc": "Network vulnerabilities exploit karta hai. Email, IM, file sharing through spread",
                  "color": "#ff8800"
                },
                {
                  "icon": "warn",
                  "title": "Bandwidth",
                  "desc": "Network traffic increase karta hai. Internet slowdown kar sakta hai",
                  "color": "#aa00ff"
                },
                {
                  "icon": "file",
                  "title": "Email Attachments",
                  "desc": "Email attachments through spread karta hai. User opens attachment — worm activates",
                  "color": "#00c8ff"
                },
                {
                  "icon": "layers",
                  "title": "Software Exploits",
                  "desc": "OS ya application vulnerabilities exploit karta hai. Remote code execution",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Worm Replication Cycle",
              "diagram": "worms",
              "caption": "Replication — infect → copy → search vulnerable → exploit → spread"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Worm standalone malware hai — host file attach nahi hota.",
                "Self-replicating hai — apne aap copy create karta hai.",
                "Network vulnerabilities exploit karta hai — email, network shares.",
                "Email attachments through spread karta hai — ILOVEYOU example.",
                "Network shares SMB exploit karta hai — Code Red example.",
                "Software vulnerabilities exploit karta hai — EternalBlue/WannaCry.",
                "Removable media USB drives through spread karta hai — Conficker.",
                "Impact: network damage, system damage, privacy violation.",
                "Backdoor installation, botnet creation, DDoS attacks.",
                "Financial damage: extortion, data recovery costs."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Worm = standalone self-replicating malware.\nSpread = email attachments, network shares, software exploits, removable media, P2P.\nImpact = network damage, system damage, privacy, backdoors, financial.\nExamples = ILOVEYOU, Conficker, Stuxnet, WannaCry.\nPrevention = patching, antivirus, network security, email filtering."
            }
          ],
          "examQuestions": [
            {
              "question": "What is a computer worm? How does it differ from a virus?",
              "answer": "Worm: standalone malware that replicates itself to spread to other computers.\n\nVirus vs Worm:\n- Virus: host file attach hota hai. Jab host run ho, spread hota hai.\n- Worm: host file attach nahi hota. Independently run karta hai.\n- Virus: infected files/removable media se spread hota hai.\n- Worm: network vulnerabilities exploit karke spread hota hai.\n\nExamples:\n- ILOVEYOU (2000) — email worm\n- Conficker (2008) — network worm\n- Stuxnet (2010) — industrial worm\n- WannaCry (2017) — ransomware worm"
            },
            {
              "question": "Explain the spread methods and impact of computer worms.",
              "answer": "Spread Methods:\n1. Email Attachments — user opens attachment, worm activates (ILOVEYOU)\n2. Network Shares — SMB shares exploit (Code Red)\n3. Software Vulnerabilities — OS/app exploits (EternalBlue/WannaCry)\n4. Instant Messaging — IM clients through spread\n5. Removable Media — USB drives, auto-run (Conficker)\n6. P2P Networks — file sharing through spread\n\nImpact:\n1. Network Damage — traffic, slowdown, DoS\n2. System Damage — file corruption, instability\n3. Privacy — info theft, keyloggers\n4. Backdoors — remote access, botnets\n5. Financial — extortion, recovery costs"
            }
          ]
        },
        {
          "id": "trojans",
          "number": "2.9",
          "title": "Trojans",
          "subtitle": "Disguise malware — backdoor open karta hai",
          "icon": "lock",
          "accent": "#ff0040",
          "englishDefinition": "A Trojan horse is malware that disguises itself as legitimate software to trick users into installing it. Unlike viruses and worms, Trojans do not self-replicate. They rely on user deception and commonly install backdoors for remote access.",
          "intro": "Trojan jaise kisi mask cosmetic ki tarah — andar malicious hai. Users ko lagta hai woh legitimate software hai — install karte hain. Backdoor open ho jata hai — hacker remote access le leta hai. Ye chapter Trojan characteristics, types, aur installation methods ko samjhaega.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Trojan Horse — Malware jo legitimate software ki tarah dikhta hai. Users ko trick karke install hota hai.\n\nVirus/Worm se alag — Trojan self-replicate nahi karta. User deception pe rely karta hai.\n\nCommon effect — Backdoor open kar deta hai. Remote access allow karta hai."
            },
            {
              "type": "cards",
              "title": "Types of Trojans",
              "cards": [
                {
                  "icon": "lock",
                  "title": "RAT",
                  "desc": "Remote Access Trojan — attacker remote control. Backdoor access. Example: DarkComet, Sub7",
                  "color": "#ff0040"
                },
                {
                  "icon": "database",
                  "title": "Banking Trojan",
                  "desc": "Financial info target karta hai. Credentials, credit card steal karta hai. Example: Zeus",
                  "color": "#0047ff"
                },
                {
                  "icon": "server",
                  "title": "Backdoor Trojan",
                  "desc": "System access provide karta hai. Hidden accounts create karta hai. Example: Back Orifice",
                  "color": "#ff8800"
                },
                {
                  "icon": "layers",
                  "title": "Rootkit Trojan",
                  "desc": "System hide karta hai. Kernel-level stealth. Example: Nebulet",
                  "color": "#aa00ff"
                },
                {
                  "icon": "eye",
                  "title": "Spy Trojan",
                  "desc": "User activity monitor karta hai. Keystrokes, screen capture, webcam. Example: Pegasus",
                  "color": "#00c8ff"
                },
                {
                  "icon": "warn",
                  "title": "Fake AV",
                  "desc": "Fake antivirus dikhta hai. Users ko scare karta hai — fake threats. Money extortion. Example: FakeAV",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Trojan Installation Flow",
              "diagram": "trojans",
              "caption": "Disguise → download → install → backdoor. Types: RAT, Banking, Backdoor, Rootkit, Spy, Adware."
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Trojan legitimate software ki tarah dikhta hai — users ko trick karta hai.",
                "Self-replication nahi karta — user deception pe rely karta hai.",
                "RAT remote access provide karta hai — backdoor access.",
                "Banking Trojan financial info target karta hai — credentials, credit cards.",
                "Backdoor Trojan system access provide karta hai — hidden accounts.",
                "Rootkit Trojan kernel-level stealth provide karta hai.",
                "Spy Trojan user activity monitor karta hai — keystrokes, screen capture.",
                "Adware Trojan advertisements display karta hai — revenue generation.",
                "Launcher Trojan other malware download aur install karta hai.",
                "Installation: freeware, pirated software, email attachments, fake updates."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Trojan = disguised malware.\nTypes = RAT, Banking, Backdoor, Rootkit, Spy, Adware, Launcher, Fake AV, Game/App.\nInstallation = freeware, pirated, email, fake updates, malicious sites, USB.\nDefense = don't download unknown, use antivirus, check file signatures."
            }
          ],
          "examQuestions": [
            {
              "question": "What is a Trojan horse? How is it different from a virus or worm?",
              "answer": "Trojan Horse: malware that disguises itself as legitimate software to trick users into installing it.\n\nDifferences:\n- Virus: self-replicating, host file attach hota hai\n- Worm: self-replicating, network spread\n- Trojan: no self-replication, user deception pe rely karta hai\n\nTypes:\n1. RAT — remote control, backdoor (DarkComet, Sub7)\n2. Banking Trojan — financial theft (Zeus)\n3. Backdoor Trojan — system access, hidden accounts\n4. Rootkit Trojan — kernel stealth\n5. Spy Trojan — activity monitoring (Pegasus)\n6. Adware Trojan — ads display\n7. Launcher Trojan — other malware install"
            },
            {
              "question": "Explain the different types of Trojans and how they are installed.",
              "answer": "Types of Trojans:\n1. RAT — remote control, backdoor access (DarkComet, Sub7)\n2. Banking Trojan — financial theft, credentials (Zeus, SpyEye)\n3. Backdoor Trojan — system access, hidden accounts (Back Orifice)\n4. Rootkit Trojan — kernel-level stealth (Nebulet)\n5. Spy Trojan — activity monitoring (Pegasus)\n6. Adware Trojan — ads display, revenue (Zango)\n7. Launcher Trojan — other malware download/install\n8. Fake AV — fake threats, money extortion (FakeAV)\n9. Game/App Trojan — disguised as legit app\n\nInstallation:\n1. Freeware — bundled with Trojan\n2. Pirated Software — cracked software\n3. Email Attachments — fake attachments\n4. Fake Updates — fake software updates\n5. Malicious Websites — drive-by downloads\n6. USB Drives — auto-run"
            }
          ]
        },
        {
          "id": "viruses",
          "number": "2.10",
          "title": "Viruses",
          "subtitle": "Self-replicating malware — host file attach hota hai",
          "icon": "virus",
          "accent": "#ff0040",
          "englishDefinition": "A computer virus is a malicious program that attaches itself to a legitimate program or file and replicates when the host program is executed. Viruses spread from one system to another through infected files, removable media, and networks.",
          "intro": "Virus jaise kisi bimaari — ek computer se doosre computer spread hota hai. Host file attach hota hai. Jab file run hoti hai, virus active hota hai. Ye chapter virus lifecycle, types, aur effects ko samjhaega — kaise viruses create, replicate, install, evade detection.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Computer Virus — Malicious program jo legitimate program ya file attach hota hai. Jab host program run hota hai, virus replicate hota hai.\n\nSpread — Infected files, removable media, networks.\n\nCharacteristics: Host-dependent, self-replicating, spread through files, payload damage."
            },
            {
              "type": "cards",
              "title": "Types of Viruses",
              "cards": [
                {
                  "icon": "file",
                  "title": "File Infector",
                  "desc": "Executable files infect karta hai. .EXE, .COM modify karta hai. Jab file run ho, virus active",
                  "color": "#ff0040"
                },
                {
                  "icon": "server",
                  "title": "Boot/Partition",
                  "desc": "Hard disk partition table infect karta hai. Boot sector modify karta hai. System boot nahi karta",
                  "color": "#0047ff"
                },
                {
                  "icon": "layers",
                  "title": "Macro Virus",
                  "desc": "Microsoft Office documents infect karta hai. Word, Excel macros manipulate karta hai",
                  "color": "#ff8800"
                },
                {
                  "icon": "arrow",
                  "title": "Multipartite",
                  "desc": "Multiple infection methods combine karta hai. File infector + boot sector. Hard to remove",
                  "color": "#aa00ff"
                },
                {
                  "icon": "lock",
                  "title": "Polymorphic",
                  "desc": "Apne code modify karta hai — detect difficult. Encryption, mutation. Signature change karta hai",
                  "color": "#00c8ff"
                },
                {
                  "icon": "eye",
                  "title": "Stealth",
                  "desc": "System se hide karta hai. Antivirus evade karta hai. Hidden partition viruses",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Virus Lifecycle",
              "diagram": "viruses",
              "caption": "Create → Replicate → Install → Evade → Payload → Spread"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Virus host file attach hota hai — jab host run ho, virus active hota hai.",
                "File infector virus .EXE, .COM files modify karta hai.",
                "Boot/partition virus hard disk partition table infect karta hai.",
                "Macro virus Microsoft Office documents infect karta hai.",
                "Multipartite virus multiple infection methods combine karta hai.",
                "Polymorphic virus apne code modify karta hai — detect difficult.",
                "Metamorphic virus full code modify karta hai — very difficult detect.",
                "Encrypted virus code encrypt karta hai — detect difficult.",
                "Stealth virus system se hide karta hai — antivirus evade karta hai.",
                "Effects: data destruction, system slowdown, privacy violation, backdoor."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Virus = host-attached self-replicating malware.\nLifecycle = Create → Replicate → Install → Evade → Payload → Spread.\nTypes = File Infector, Boot, Macro, Multipartite, Polymorphic, Encrypted, Metamorphic, Stealth.\nEffects = data destruction, system slowdown, privacy, backdoor, spam.\nDefense = antivirus, regular scans, updates, safe browsing."
            }
          ],
          "examQuestions": [
            {
              "question": "What is a computer virus? Explain the virus lifecycle.",
              "answer": "Computer Virus: malicious program that attaches itself to a legitimate program or file and replicates when the host program is executed.\n\nLifecycle:\n1. Creation — virus code write karna\n2. Replication — host file attach, copy create\n3. Installation — system mein install, registry modify\n4. Detection & Evasion — antivirus avoid, obfuscation\n5. Payload Delivery — malicious activity execute\n6. Spread — other systems infect\n\nCharacteristics: host-dependent, self-replicating, spread through files."
            },
            {
              "question": "Explain the different types of viruses with examples.",
              "answer": "Types:\n1. File Infector — .EXE, .COM modify. Example: CIH virus\n2. Boot/Partition — partition table, boot sector infect. Example: Stoned\n3. Macro — Office documents infect. Example: Concept\n4. Multipartite — multiple methods combine. Example: Frodo\n5. Polymorphic — code modify, signature change. Example: 1260\n6. Encrypted — code encrypt, detect difficult\n7. Metamorphic — full code modify. Example: W2K/Kak\n8. Stealth — system se hide. Example: hidden partition viruses\n\nEffects: data destruction, system slowdown, privacy violation, backdoor, spam"
            }
          ]
        },
        {
          "id": "backdoors",
          "number": "2.11",
          "title": "Backdoors",
          "subtitle": "Hidden access — authentication bypass karta hai",
          "icon": "shield",
          "accent": "#00ff88",
          "englishDefinition": "A backdoor is a hidden method for bypassing normal authentication or encryption in a computer system. Attackers install backdoors to gain persistent remote access to compromised systems without re-exploiting vulnerabilities.",
          "intro": "Backdoor jaise ghar ka chupa darwaza — normal lock bypass karke andar aana. Hackers backdoor install karte hain — permanent access. Jab bhi attacker system access chahe, backdoor se directly enter kar sakta hai. Ye chapter backdoor types, why dangerous, aur prevention ko samjhaega.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Backdoor — Hidden method for bypassing normal authentication ya encryption.\n\nAttackers backdoors install karte hain — persistent remote access.\nRe-exploitation nahi karna padta — wapas asaani se aa sakta hai."
            },
            {
              "type": "cards",
              "title": "Types of Backdoors",
              "cards": [
                {
                  "icon": "lock",
                  "title": "Remote Access",
                  "desc": "Attacker system mein remote access backdoor install karta hai. Jab bhi chahe, backdoor se enter kar sakta hai. RAT Trojans",
                  "color": "#ff0040"
                },
                {
                  "icon": "layers",
                  "title": "Rootkit",
                  "desc": "Kernel-level stealth. System se hidden rehta hai. OS detect nahi kar paati. Sabse dangerous",
                  "color": "#0047ff"
                },
                {
                  "icon": "users",
                  "title": "Account",
                  "desc": "Hidden account create karta hai — admin ya privileged account. Normal users ko pata nahi chalta",
                  "color": "#ff8800"
                },
                {
                  "icon": "arrow",
                  "title": "Command Injection",
                  "desc": "Application ke input field mein command injection backdoor create karta hai. SQL injection, shell commands",
                  "color": "#aa00ff"
                },
                {
                  "icon": "server",
                  "title": "Hardware",
                  "desc": "Hardware level backdoor — motherboard firmware, BIOS modification. Hardware detect difficult",
                  "color": "#00c8ff"
                },
                {
                  "icon": "shield",
                  "title": "RAT Trojan",
                  "desc": "Remote Access Trojan — backdoor install karta hai. DarkComet, Sub7, NetBus",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Backdoor Attack Flow",
              "diagram": "backdoors",
              "caption": "Exploit → install → hidden access → remote control. Types: RAT, Rootkit, Account, Command Injection, Hardware."
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Backdoor hidden method hai normal authentication bypass karna.",
                "Remote access backdoor attacker ko permanent system access deta hai.",
                "Rootkit backdoor kernel-level stealth provide karta hai — OS detect nahi kar paata.",
                "Account backdoor hidden account create karta hai — admin privileges.",
                "Command injection backdoor SQL injection, shell command injection allow karta hai.",
                "Hardware backdoor motherboard firmware, BIOS modification karta hai.",
                "RAT Trojans backdoor install karte hain — DarkComet, Sub7, NetBus.",
                "Permanent access — re-exploitation nahi karna padta.",
                "Authentication bypass — normal login process bypass.",
                "Invisible operation — rootkit stealth.",
                "Difficult detection — forensic analysis difficult."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Backdoor = hidden authentication bypass.\nTypes = Remote Access, Rootkit, Account, Command Injection, Hardware, RAT Trojan.\nWhy dangerous = permanent access, auth bypass, invisible, future attacks, difficult detection.\nPrevention = regular scans, strong auth (MFA), patching, network segmentation, endpoint protection."
            }
          ],
          "examQuestions": [
            {
              "question": "Define backdoor. Explain the types of backdoors.",
              "answer": "Backdoor: hidden method for bypassing normal authentication or encryption in a computer system.\n\nTypes:\n1. Remote Access — attacker remote access backdoor install karta hai. Jab bhi chahe, enter kar sakta hai\n2. Rootkit — kernel-level stealth. System se hidden rehta hai. OS detect nahi kar paati\n3. Account — hidden account create karta hai. Admin privileges\n4. Command Injection — SQL injection, shell command injection\n5. Hardware — motherboard firmware, BIOS modification\n6. RAT Trojan — Remote Access Trojan. DarkComet, Sub7, NetBus"
            },
            {
              "question": "Why are backdoors considered dangerous? How can they be prevented?",
              "answer": "Why Dangerous:\n1. Permanent Access — attacker ko permanent system access. Re-exploitation nahi karna padta\n2. Authentication Bypass — normal login process bypass. No detection\n3. Invisible Operation — rootkit stealth. OS level bypass\n4. Future Attacks — base banata hai future attacks ke liye\n5. Difficult Detection — forensic analysis difficult\n\nPrevention:\n1. Regular system scans aur monitoring\n2. Strong authentication — MFA, strong passwords\n3. Patch management — vulnerabilities fix\n4. Network segmentation\n5. Endpoint protection — behavior monitoring\n6. Forensic analysis — regular scans, log analysis"
            }
          ]
        },
        {
          "id": "cyber-stalking",
          "number": "2.12",
          "title": "Cyber Stalking",
          "subtitle": "Online harassment and stalking kya hai",
          "icon": "users",
          "accent": "#ff0040",
          "englishDefinition": "Cyber stalking is the use of electronic communication to harass or intimidate someone, often involving repeated unwanted contact through emails, social media, messages, or other online platforms.",
          "intro": "Cyber stalking vaise hi hai jaise kisi ke piche lagna — online mann se nahin rukta. Hacker repeated unwanted messages, emails, social media posts send karta hai. Victim ko fear, harassment, ya threat feel hota hai. Yeh crime physically stalking se bhi dangerous ho sakta hai — online 24/7 aapke piche rehta hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Cyber Stalking — Electronic communication ka use karke harass ya intimidate karna. Repeated unwanted contact — emails, social media, messages. Victim ko fear, harassment, threat feel hota hai."
            },
            {
              "type": "cards",
              "title": "Types & Examples",
              "cards": [
                {
                  "icon": "users",
                  "title": "Repeated Messages",
                  "desc": "Unwanted emails, texts, DMs bhejna — daily 50+ messages",
                  "color": "#ff0040"
                },
                {
                  "icon": "globe",
                  "title": "Social Media",
                  "desc": "Fake accounts, harassing posts, tagging, commenting",
                  "color": "#0047ff"
                },
                {
                  "icon": "warn",
                  "title": "Threats",
                  "desc": "Physical harm, death threats online — fear banana",
                  "color": "#ff8800"
                },
                {
                  "icon": "eye",
                  "title": "Monitoring",
                  "desc": "GPS tracking, camera hacking, location tracking",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Cyber Stalking Flow",
              "diagram": "cyber-stalking",
              "caption": "Contact → Monitor → Threat → Harass → Repeat"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Cyber stalking electronic communication ka use karta hai — emails, social media, messages.",
                "Repeated unwanted contact hota hai — 50+ messages daily bhejna common hai.",
                "Social media fake accounts, harassing posts, tagging include karta hai.",
                "Physical harm, death threats online bhejna — fear banana attacker ka goal hai.",
                "GPS tracking, camera hacking, location tracking monitoring techniques hain.",
                "Victim ko anxiety, depression, fear feel hota hai — mental health affect karta hai.",
                "Physical stalking se bhi dangerous ho sakta hai — online 24/7 aapke piche rehta hai.",
                "Cyber stalking criminal offense hai — penalties jail, fine both include karte hain."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Cyber stalking = online harassment through electronic communication.\nTypes = repeated messages, social media, threats, monitoring.\nEffects = fear, anxiety, mental health issues.\nPrevention = block, report, document everything, seek help."
            }
          ],
          "examQuestions": [
            {
              "question": "Define cyber stalking. What are its types?",
              "answer": "Cyber Stalking: electronic communication ka use karke harass ya intimidate karna.\n\nTypes:\n1. Repeated Messages — unwanted emails, texts, DMs (50+ daily)\n2. Social Media — fake accounts, harassing posts, tagging\n3. Threats — physical harm, death threats online\n4. Monitoring — GPS tracking, camera hacking, location tracking\n\nEffects: fear, anxiety, mental health issues. Prevention: block, report, document."
            },
            {
              "question": "How is cyber stalking different from physical stalking? Explain with examples.",
              "answer": "Cyber Stalking: online communication through emails, social media, messages. 24/7 online rehna possible hai.\nPhysical Stalking: physically following, watching in real life.\n\nDifferences:\n1. Location — online anywhere vs physical proximity\n2. Anonymity — online fake accounts vs physical identity\n3. Frequency — online 24/7 possible vs physical limited\n4. Evidence — digital logs vs physical witnesses\n\nExamples: Online — repeated DMs, GPS tracking. Physical — following home, watching."
            }
          ]
        },
        {
          "id": "software-piracy",
          "number": "2.13",
          "title": "Software Piracy",
          "subtitle": "Unauthorized software copy karna",
          "icon": "file",
          "accent": "#0047ff",
          "englishDefinition": "Software piracy is the unauthorized copying, distribution, or use of copyrighted software without purchasing a valid license, violating copyright laws.",
          "intro": "Software piracy jaise kisi book ki photo copy karke free distribute karna. Jab aap paid software ko crack karke free use karte hain, woh piracy hai. Yeh copyright laws ke against hai. Companies losing money karti hain — billions of dollars loss hota hai annual basis par.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Software Piracy — Copyrighted software ka unauthorized copy, distribution, ya use without valid license. Copyright laws ke against hai."
            },
            {
              "type": "cards",
              "title": "Types of Piracy",
              "cards": [
                {
                  "icon": "file",
                  "title": "Cracking",
                  "desc": "License key hack karna — paid software free use karna",
                  "color": "#ff0040"
                },
                {
                  "icon": "server",
                  "title": "Sharing",
                  "desc": "Paid software multiple users se share karna — torrent, USB",
                  "color": "#0047ff"
                },
                {
                  "icon": "globe",
                  "title": "Downloading",
                  "desc": "Illegal websites se software download karna — no license",
                  "color": "#ff8800"
                },
                {
                  "icon": "layers",
                  "title": "Counterfeit",
                  "desc": "Fake software copies market mein sell karna — fake CDs, keys",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Software Piracy Flow",
              "diagram": "software-piracy",
              "caption": "Crack → Share → Download → Use → Loss"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Software piracy unauthorized copy, distribution ya use hai without license.",
                "Cracking license key hack karke paid software free use karna include karta hai.",
                "Sharing paid software multiple users se — torrent, USB through hota hai.",
                "Illegal websites se software download karna — no license ka proof.",
                "Counterfeit fake software copies market mein sell karte hain — fake CDs, keys.",
                "Companies billions of dollars annual loss hota hai piracy se.",
                "Piracy malware, viruses include karta hai — illegal downloads dangerous hain.",
                "Copyright laws violation hai — penalties fine, jail include karte hain.",
                "Legal alternatives: free software, open source, affordable licenses."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Software piracy = unauthorized copy/use of copyrighted software.\nTypes = cracking, sharing, downloading, counterfeit.\nEffects = billions loss, malware risk, legal penalties.\nSolution = buy license, use open source, avoid pirated software."
            }
          ],
          "examQuestions": [
            {
              "question": "Define software piracy. What are its types?",
              "answer": "Software Piracy: copyrighted software ka unauthorized copy, distribution, ya use without valid license.\n\nTypes:\n1. Cracking — license key hack, paid software free use\n2. Sharing — paid software multiple users se share (torrent, USB)\n3. Downloading — illegal websites se download, no license\n4. Counterfeit — fake software copies market sell\n\nEffects: billions loss, malware risk. Prevention: buy license, open source."
            },
            {
              "question": "What are the consequences of software piracy? How can it be prevented?",
              "answer": "Consequences:\n1. Financial Loss — companies billions of dollars annual loss\n2. Malware — illegal downloads viruses, malware include karte hain\n3. Legal — copyright violation, fines, jail\n4. Quality — no updates, no support, bugs\n\nPrevention:\n1. Buy genuine license\n2. Use open source alternatives\n3. Education — piracy illegal hai\n4. Enforcement — copyright laws"
            }
          ]
        },
        {
          "id": "cyber-terrorism-2",
          "number": "2.14",
          "title": "Cyber Terrorism",
          "subtitle": "Political/ideological cyber attacks",
          "icon": "warn",
          "accent": "#ff0040",
          "englishDefinition": "Cyber terrorism is the use of cyber attacks to cause disruption, fear, or damage for political, religious, or ideological goals, often targeting critical infrastructure or civilian systems.",
          "intro": "Cyber terrorism jaise kisi country ke power grid hack karna — pura city dark main daal dena. Yeh political, religious, ya ideological goals ke liye cyber attacks use karta hai. Critical infrastructure target karta hai — power, water, hospitals. Civilian populations affect karta hai — fear, disruption, damage.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Cyber Terrorism — Cyber attacks ka use karke disruption, fear, damage create karna. Political, religious, ideological goals ke liye. Critical infrastructure ya civilian systems target karna."
            },
            {
              "type": "cards",
              "title": "Cyber Terrorism Attacks",
              "cards": [
                {
                  "icon": "server",
                  "title": "Power Grid",
                  "desc": "Electrical grid hack karna — city dark main daal dena",
                  "color": "#ff0040"
                },
                {
                  "icon": "database",
                  "title": "Hospitals",
                  "desc": "Hospital systems attack karna — patient data leak, service disrupt",
                  "color": "#0047ff"
                },
                {
                  "icon": "globe",
                  "title": "Government",
                  "desc": "Government websites, systems attack karna — embarrassment, disruption",
                  "color": "#ff8800"
                },
                {
                  "icon": "warn",
                  "title": "Financial",
                  "desc": "Banking systems attack karna — money theft, economy disrupt",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Cyber Terrorism Attack Flow",
              "diagram": "cyber-terrorism",
              "caption": "Recon → Exploit → Damage → Disrupt → Fear"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Cyber terrorism cyber attacks ka use karta hai — political, religious, ideological goals.",
                "Power grid hack karke city dark main daal dena — civilians affect karte hain.",
                "Hospital systems attack karna — patient data leak, service disrupt.",
                "Government websites, systems attack karna — embarrassment, disruption create karte hain.",
                "Banking systems attack karna — money theft, economy disrupt karta hai.",
                "Critical infrastructure target karna — power, water, transportation include hai.",
                "Civilian populations affect karte hain — fear, disruption, damage create karte hain.",
                "Anonymous attackers — difficult to trace, attribution hard hai.",
                "Prevention — critical infrastructure security, incident response plans."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Cyber terrorism = cyber attacks for political/ideological goals.\nTargets = power grid, hospitals, government, financial systems.\nEffects = disruption, fear, damage to civilians.\nPrevention = infrastructure security, response plans, international cooperation."
            }
          ],
          "examQuestions": [
            {
              "question": "Define cyber terrorism. What are its targets?",
              "answer": "Cyber Terrorism: cyber attacks ka use karke disruption, fear, damage create karna. Political, religious, ideological goals.\n\nTargets:\n1. Power Grid — city dark main daal dena\n2. Hospitals — patient data leak, service disrupt\n3. Government — websites attack, embarrassment\n4. Financial — banking systems attack, economy disrupt\n5. Critical Infrastructure — water, transportation\n\nEffects: civilian disruption, fear. Prevention: infrastructure security."
            },
            {
              "question": "How is cyber terrorism different from other cyber attacks?",
              "answer": "Cyber Terrorism vs Other Attacks:\n1. Motive — political/ideological vs financial/personal\n2. Target — critical infrastructure/civilians vs specific companies\n3. Effect — mass disruption/fear vs specific damage\n4. Scale — large scale, public impact vs limited scope\n\nOther attacks: Hacking (financial), Malware (damage), Phishing (theft).\nCyber terrorism: mass disruption, fear, political goals."
            }
          ]
        },
        {
          "id": "phishing-2",
          "number": "2.15",
          "title": "Phishing",
          "subtitle": "Fake emails aur websites se info theft",
          "icon": "lock",
          "accent": "#0047ff",
          "englishDefinition": "Phishing is a social engineering attack where attackers send fraudulent emails, messages, or create fake websites to trick users into revealing sensitive information like passwords, credit card numbers, or login credentials.",
          "intro": "Phishing jaise kisi bank ke fake email aana — aapse password mangta hai. Attackers fake websites bana ke users ko trick karte hain. Sensitive information churate hain — passwords, credit cards, login details. Yeh social engineering ka most common attack hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Phishing — Fraudulent emails, messages, ya fake websites bana ke users ko trick karna. Sensitive information reveal karwa na — passwords, credit cards, login credentials."
            },
            {
              "type": "cards",
              "title": "Types of Phishing",
              "cards": [
                {
                  "icon": "lock",
                  "title": "Email Phishing",
                  "desc": "Fake emails — bank, company impersonate karke password mangna",
                  "color": "#ff0040"
                },
                {
                  "icon": "globe",
                  "title": "Website Phishing",
                  "desc": "Fake websites bana ke real login page dikhana — credentials churana",
                  "color": "#0047ff"
                },
                {
                  "icon": "users",
                  "title": "Spear Phishing",
                  "desc": "Targeted attack — specific person/company information use karna",
                  "color": "#ff8800"
                },
                {
                  "icon": "warn",
                  "title": "Whaling",
                  "desc": "Executives target karna — CEO fraud, high-level credentials",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Phishing Attack Flow",
              "diagram": "phishing",
              "caption": "Fake Email → Click → Fake Website → Enter Info → Theft"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Phishing fraudulent emails, messages, ya fake websites bana ke users ko trick karta hai.",
                "Email phishing bank, company impersonate karta hai — password mangta hai.",
                "Website phishing fake login pages bana ke credentials churata hai.",
                "Spear phishing targeted attack hai — specific person/company information use karta hai.",
                "Whaling executives target karta hai — CEO fraud, high-level credentials.",
                "Smishing SMS phishing hai — fake text messages through attack.",
                "Vishing voice phishing hai — fake phone calls.",
                "Phishing most common social engineering attack hai.",
                "Prevention — verify sender, check URL, never click suspicious links.",
                "Use MFA, keep software updated, employee training."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Phishing = fraudulent emails/messages/websites for info theft.\nTypes = email, website, spear, whaling, smishing, vishing.\nPrevention = verify sender, check URL, MFA, training.\nEffects = credential theft, financial loss, identity theft."
            }
          ],
          "examQuestions": [
            {
              "question": "Define phishing. What are its types?",
              "answer": "Phishing: fraudulent emails, messages, ya fake websites bana ke users ko trick karna. Sensitive information reveal karwa na.\n\nTypes:\n1. Email Phishing — fake bank/company emails, password mangna\n2. Website Phishing — fake login pages, credentials churana\n3. Spear Phishing — targeted attack, specific person\n4. Whaling — executives target, CEO fraud\n5. Smishing — SMS phishing\n6. Vishing — voice phishing\n\nPrevention: verify sender, check URL, MFA."
            },
            {
              "question": "Explain spear phishing and whaling. How do they differ from regular phishing?",
              "answer": "Spear Phishing: targeted attack — specific person/company information use karke. Research karke attacker personalized message banata hai.\n\nWhaling: spear phishing ka advanced form — executives (CEO, CFO) target karta hai. High-level credentials churana.\n\nRegular Phishing: mass emails, generic, low success rate.\nSpear/Whaling: targeted, personalized, high success rate.\n\nDifference: Targeting, personalization, success rate."
            }
          ]
        },
        {
          "id": "computer-hacking",
          "number": "2.16",
          "title": "Computer Hacking",
          "subtitle": "Unauthorized system access methods",
          "icon": "lock",
          "accent": "#ff8800",
          "englishDefinition": "Computer hacking is the unauthorized access to or control of a computer system, often through exploiting vulnerabilities to gain entry, steal data, or cause damage.",
          "intro": "Computer hacking jaise kisi ghar ka lock khole bina andar aana. Hackers system ke vulnerabilities exploit karte hain — password crack, software exploit. Access gain karte hain — data steal, damage cause karte hain. Yeh unauthorized access ka broad term hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Computer Hacking — Unauthorized access ya control of computer system. Vulnerabilities exploit karke entry gain karna. Data steal karna, damage cause karna."
            },
            {
              "type": "cards",
              "title": "Hacking Methods",
              "cards": [
                {
                  "icon": "lock",
                  "title": "Password Hacking",
                  "desc": "Weak passwords crack karna — brute force, dictionary, social engineering",
                  "color": "#ff0040"
                },
                {
                  "icon": "server",
                  "title": "Exploit",
                  "desc": "Software vulnerabilities exploit karna — known security flaws use karna",
                  "color": "#0047ff"
                },
                {
                  "icon": "users",
                  "title": "Social Eng.",
                  "desc": "Humans manipulate karke access gain karna — phishing, pretexting",
                  "color": "#ff8800"
                },
                {
                  "icon": "globe",
                  "title": "Network",
                  "desc": "Network services attack karna — SMB, RDP, FTP exploitation",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Hacking Attack Chain",
              "diagram": "computer-hacking",
              "caption": "Recon → Scan → Exploit → Access → Damage"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Computer hacking unauthorized access ya control hai computer system ka.",
                "Password hacking weak passwords crack karta hai — brute force, dictionary.",
                "Social engineering humans manipulate karta hai — access gain karta hai.",
                "Software exploits known vulnerabilities use karta hai — security flaws.",
                "Network attacks SMB, RDP, FTP services exploit karte hain.",
                "Attack chain — Recon → Scan → Exploit → Access → Damage.",
                "Hackers data steal karte hain — sensitive information, credentials.",
                "Damage cause karte hain — file deletion, corruption, system disruption.",
                "White hat hackers authorized test karte hain — security improvement.",
                "Black hat hackers unauthorized access lete hain — criminal activity."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Computer hacking = unauthorized access to computer systems.\nMethods = password hacking, exploits, social engineering, network attacks.\nAttack chain = Recon → Scan → Exploit → Access → Damage.\nTypes = white hat (authorized), black hat (unauthorized)."
            }
          ],
          "examQuestions": [
            {
              "question": "Define computer hacking. What are the different methods?",
              "answer": "Computer Hacking: unauthorized access ya control of computer system.\n\nMethods:\n1. Password Hacking — brute force, dictionary, social engineering\n2. Software Exploits — known vulnerabilities use karna\n3. Social Engineering — humans manipulate, access gain\n4. Network Attacks — SMB, RDP, FTP exploitation\n5. Physical Access — unlocked computers, USB\n\nAttack chain: Recon → Scan → Exploit → Access → Damage"
            },
            {
              "question": "What is the difference between white hat and black hat hacking?",
              "answer": "White Hat Hacking:\n- Authorized testing\n- Goal: security improvement\n- Methods: ethical, legal\n- Payment: company hires\n- Result: vulnerabilities fixed\n\nBlack Hat Hacking:\n- Unauthorized access\n- Goal: personal gain, damage\n- Methods: illegal, unethical\n- Payment: criminal activity\n- Result: data theft, damage\n\nGrey Hat: somewhere in between — unauthorized but no malicious intent."
            }
          ]
        },
        {
          "id": "spamming",
          "number": "2.17",
          "title": "Spamming",
          "subtitle": "Unsolicited bulk messages",
          "icon": "warn",
          "accent": "#aa00ff",
          "englishDefinition": "Spamming is sending unsolicited bulk messages, typically through email, SMS, or social media, often for advertising, phishing, or malicious purposes.",
          "intro": "Spamming jaise aapke email mein daily 100+ unwanted messages aana. Spammers bulk messages send karte hain — advertising, phishing, malware. Yeh unsolicited hai — aapne request nahi kiya. Time waste karta hai, inbox clutter karta hai, sometimes malware include karta hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Spamming — Unsolicited bulk messages send karna. Email, SMS, social media through. Advertising, phishing, malicious purposes."
            },
            {
              "type": "cards",
              "title": "Types of Spam",
              "cards": [
                {
                  "icon": "warn",
                  "title": "Advertising",
                  "desc": "Products sell karna — cheap offers, discounts, loans",
                  "color": "#ff0040"
                },
                {
                  "icon": "lock",
                  "title": "Phishing",
                  "desc": "Fake emails — credentials, financial info churana",
                  "color": "#0047ff"
                },
                {
                  "icon": "virus",
                  "title": "Malware",
                  "desc": "Malicious links, attachments — viruses, ransomware spread",
                  "color": "#ff8800"
                },
                {
                  "icon": "globe",
                  "title": "Scam",
                  "desc": "Money fraud — fake prizes, investments, inheritance",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Spam Attack Flow",
              "diagram": "spamming",
              "caption": "Email List → Bulk Send → User Clicks → Malware/Theft"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Spamming unsolicited bulk messages send karna hai — email, SMS, social media.",
                "Advertising spam products sell karta hai — cheap offers, discounts.",
                "Phishing spam fake emails through credentials, financial info churata hai.",
                "Malware spam malicious links, attachments through viruses, ransomware spread karta hai.",
                "Scam spam money fraud karta hai — fake prizes, investments.",
                "Spam time waste karta hai — inbox clutter, productivity decrease.",
                "Sometimes malware include karta hai — dangerous for system.",
                "Spammer email lists buy/sell karte hain — addresses leak hote hain.",
                "Prevention — spam filters, don't click unknown links, mark as spam."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Spamming = unsolicited bulk messages.\nTypes = advertising, phishing, malware, scam.\nEffects = time waste, malware risk, fraud.\nPrevention = spam filters, don't click, mark spam, be careful."
            }
          ],
          "examQuestions": [
            {
              "question": "Define spamming. What are its types?",
              "answer": "Spamming: unsolicited bulk messages send karna. Email, SMS, social media through.\n\nTypes:\n1. Advertising — products sell, cheap offers, discounts\n2. Phishing — fake emails, credentials churana\n3. Malware — malicious links, viruses spread\n4. Scam — money fraud, fake prizes\n\nEffects: time waste, malware risk. Prevention: spam filters, don't click."
            },
            {
              "question": "How can spam be prevented?",
              "answer": "Prevention Methods:\n1. Spam Filters — email filters block spam\n2. Don't Click — unknown links, attachments\n3. Mark as Spam — report spam messages\n4. Protect Email — don't share publicly\n5. Use Alternative — disposable email for signups\n6. Software — anti-spam tools\n\nEducation: teach users spam识别 karna."
            }
          ]
        },
        {
          "id": "xss",
          "number": "2.18",
          "title": "Cross Site Scripting (XSS)",
          "subtitle": "Malicious scripts website mein inject",
          "icon": "eye",
          "accent": "#00c8ff",
          "englishDefinition": "Cross Site Scripting (XSS) is a web security vulnerability where attackers inject malicious scripts into trusted websites, which then execute in the browsers of other users visiting the site.",
          "intro": "XSS jaise kisi website mein hidden code daalna — jab doosre users visit karte hain, woh code run hota hai. Attackers malicious JavaScript website mein inject karte hain. Cookie theft, session hijacking, defacement sab hota hai. Yeh web application vulnerability hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Cross Site Scripting (XSS) — Malicious scripts website mein inject karna. Scripts run hote hain doosre users ke browsers mein. Cookie theft, session hijacking, defacement."
            },
            {
              "type": "cards",
              "title": "Types of XSS",
              "cards": [
                {
                  "icon": "eye",
                  "title": "Stored XSS",
                  "desc": "Malicious script permanently store hota hai — database, victim ko affect karta hai",
                  "color": "#ff0040"
                },
                {
                  "icon": "arrow",
                  "title": "Reflected XSS",
                  "desc": "Malicious script server response mein reflect hota hai — immediate attack",
                  "color": "#0047ff"
                },
                {
                  "icon": "layers",
                  "title": "DOM XSS",
                  "desc": "DOM environment modify karke attack karna — JavaScript manipulation",
                  "color": "#ff8800"
                },
                {
                  "icon": "warn",
                  "title": "Effects",
                  "desc": "Cookie theft, session hijacking, defacement, redirect",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "XSS Attack Flow",
              "diagram": "xss",
              "caption": "Inject → Store/Reflect → User Visits → Script Runs → Theft"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "XSS malicious scripts website mein inject karta hai — JavaScript.",
                "Stored XSS script permanently store hota hai — database mein, sabko affect karta hai.",
                "Reflected XSS server response mein reflect hota hai — immediate attack.",
                "DOM XSS DOM environment modify karke attack karta hai — JavaScript manipulation.",
                "Cookie theft hota hai — session IDs, credentials churate hain.",
                "Session hijacking — attacker user session control karta hai.",
                "Defacement — website look modify karta hai — reputation damage.",
                "Redirect — malicious websites par redirect karta hai.",
                "Prevention — input validation, output encoding, CSP (Content Security Policy)."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "XSS = malicious scripts in websites.\nTypes = stored, reflected, DOM.\nEffects = cookie theft, session hijacking, defacement.\nPrevention = input validation, output encoding, CSP."
            }
          ],
          "examQuestions": [
            {
              "question": "Define Cross Site Scripting (XSS). What are its types?",
              "answer": "XSS: malicious scripts website mein inject karna. Scripts run hote hain doosre users ke browsers mein.\n\nTypes:\n1. Stored XSS — script permanently store, database, sabko affect\n2. Reflected XSS — server response reflect, immediate attack\n3. DOM XSS — DOM environment modify, JavaScript manipulation\n\nEffects: cookie theft, session hijacking, defacement.\nPrevention: input validation, output encoding, CSP."
            },
            {
              "question": "Explain how XSS attacks work with an example.",
              "answer": "XSS Attack:\n1. Attacker malicious JavaScript code banata hai\n2. Website input field mein script inject karta hai\n3. Script website database mein store hota hai (Stored XSS)\n4. Other users website visit karte hain\n5. Script user ke browser mein run hota hai\n6. Script cookies, session IDs steal karta hai\n\nExample: Comment section mein <script>document.cookie</script> inject karna.\n\nPrevention: sanitize input, encode output, use CSP."
            }
          ]
        },
        {
          "id": "online-auction-fraud",
          "number": "2.19",
          "title": "Online Auction Fraud",
          "subtitle": "Fake auctions aur fraud",
          "icon": "warn",
          "accent": "#00ff88",
          "englishDefinition": "Online auction fraud is the act of deceiving buyers or sellers on online auction platforms by misrepresenting products, failing to deliver goods, or creating fake auction listings.",
          "intro": "Online auction fraud jaise kisi product ko cheap dikha ke money lekar deliver nahi karna. Fraudsters fake listings banate hain — original photos dikha ke fake product deliver karte hain. Buyers money lose karte hain. Sellers bhi fraud ka target ban sakte hain — fake payments, chargebacks.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Online Auction Fraud — Auction platforms par buyers/sellers ko deceive karna. Products misrepresent karna, goods deliver nahi karna, fake listings banana."
            },
            {
              "type": "cards",
              "title": "Types of Fraud",
              "cards": [
                {
                  "icon": "warn",
                  "title": "Fake Listings",
                  "desc": "Original photos dikha ke fake product diya — money lekar no delivery",
                  "color": "#ff0040"
                },
                {
                  "icon": "file",
                  "title": "Misrepresent",
                  "desc": "Product description false — original nahi, damage hua product",
                  "color": "#0047ff"
                },
                {
                  "icon": "lock",
                  "title": "Payment Fraud",
                  "desc": "Fake payments, chargebacks — seller money lose karta hai",
                  "color": "#ff8800"
                },
                {
                  "icon": "globe",
                  "title": "Shill Bidding",
                  "desc": "Fake bidders — price inflate karna — seller ko benefit",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Auction Fraud Flow",
              "diagram": "online-auction-fraud",
              "caption": "Fake Listing → Payment → No Delivery → Buyer Loss"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Online auction fraud auction platforms par deception hai.",
                "Fake listings — original photos, fake product — money lekar no delivery.",
                "Misrepresentation — false description — damage product diya.",
                "Payment fraud — fake payments, chargebacks — seller money lose.",
                "Shill bidding — fake bidders — price inflate — seller benefit.",
                "Buyers money lose karte hain — no product, no refund.",
                "Sellers fraud ka target ban sakte hain — fake payments.",
                "Protection — use verified platforms, check seller rating, escrow."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Online auction fraud = deception on auction platforms.\nTypes = fake listings, misrepresent, payment fraud, shill bidding.\nEffects = buyer/seller money loss.\nPrevention = verified platforms, seller rating, escrow, secure payment."
            }
          ],
          "examQuestions": [
            {
              "question": "Define online auction fraud. What are its types?",
              "answer": "Online Auction Fraud: auction platforms par buyers/sellers ko deceive karna.\n\nTypes:\n1. Fake Listings — original photos, fake product, no delivery\n2. Misrepresent — false description, damage product\n3. Payment Fraud — fake payments, chargebacks\n4. Shill Bidding — fake bidders, price inflate\n\nEffects: money loss. Prevention: verified platforms, seller rating, escrow."
            },
            {
              "question": "How can buyers protect themselves from online auction fraud?",
              "answer": "Protection Methods:\n1. Verified Platforms — use reputed auction sites\n2. Seller Rating — check feedback, reviews\n3. Product Research — compare prices, read descriptions\n4. Secure Payment — escrow, PayPal protection\n5. Communicate — platform messaging use karna\n6. Report — fraud report karna\n\nEducation: fraud识别 karna, safe online shopping."
            }
          ]
        },
        {
          "id": "logic-bombs",
          "number": "2.20",
          "title": "Logic Bombs",
          "subtitle": "Conditional trigger malware",
          "icon": "warn",
          "accent": "#ff0040",
          "englishDefinition": "A logic bomb is a malicious program embedded in legitimate software that triggers when certain conditions are met, such as a specific date, time, or event, causing damage to systems or data.",
          "intro": "Logic bomb jaise kisi software mein hidden timer daalna — specific date par blast ho jaana. Virus ki tarah hi hai, lekin trigger conditional hai — date, event, condition. Jab condition meet hoti hai, damage hota hai — file deletion, corruption, system crash.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Logic Bomb — Malicious program embedded in legitimate software. Trigger conditional hai — date, time, event. Jab condition meet ho, damage cause karta hai."
            },
            {
              "type": "cards",
              "title": "Logic Bomb Triggers",
              "cards": [
                {
                  "icon": "clock",
                  "title": "Date/Time",
                  "desc": "Specific date, time trigger karna — 26th December, Friday 3PM",
                  "color": "#ff0040"
                },
                {
                  "icon": "file",
                  "title": "File Count",
                  "desc": "Specific file count trigger karna — 100 files create hone par",
                  "color": "#0047ff"
                },
                {
                  "icon": "users",
                  "title": "User Action",
                  "desc": "Specific user action trigger karna — login, logout, command",
                  "color": "#ff8800"
                },
                {
                  "icon": "warn",
                  "title": "Damage",
                  "desc": "File deletion, corruption, system crash, data theft",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Logic Bomb Flow",
              "diagram": "logic-bombs",
              "caption": "Embed → Wait → Condition Met → Trigger → Damage"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Logic bomb malicious program embedded in legitimate software.",
                "Trigger conditional hai — date, time, event, condition.",
                "Date/time trigger specific date, time par blast hota hai.",
                "File count trigger specific number of files create hone par hota hai.",
                "User action trigger login, logout, command par hota hai.",
                "Damage file deletion, corruption, system crash include karta hai.",
                "Logic bombs hard to detect — no signature, hidden in code.",
                "Often insider attacks — employees malicious code daal dete hain.",
                "Prevention — code review, access control, monitoring, anomaly detection."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Logic bomb = malicious program with conditional trigger.\nTriggers = date/time, file count, user action.\nDamage = file deletion, corruption, crash.\nPrevention = code review, access control, monitoring."
            }
          ],
          "examQuestions": [
            {
              "question": "Define logic bomb. What are its triggers?",
              "answer": "Logic Bomb: malicious program embedded in legitimate software. Trigger conditional — date, time, event.\n\nTriggers:\n1. Date/Time — specific date, time (26th Dec, Friday 3PM)\n2. File Count — specific number of files create hone par\n3. User Action — login, logout, command\n\nDamage: file deletion, corruption, crash.\nPrevention: code review, access control, monitoring."
            },
            {
              "question": "How is a logic bomb different from a virus?",
              "answer": "Logic Bomb vs Virus:\n1. Trigger — conditional (date/event) vs self-replicating always\n2. Spread — no spread, embedded vs self-spread\n3. Activation — conditional vs on execution\n4. Detection — hard (no signature) vs signature-based\n\nLogic bomb: embedded, conditional trigger, damage on condition.\nVirus: self-replicating, always active, spread through files."
            }
          ]
        },
        {
          "id": "web-jacking",
          "number": "2.21",
          "title": "Web Jacking",
          "subtitle": "Website hijack aur control",
          "icon": "globe",
          "accent": "#ff8800",
          "englishDefinition": "Web jacking is the act of taking over a website through unauthorized access, often to display false information, steal data, or disrupt services, usually for financial gain or reputational damage.",
          "intro": "Web jacking jaise kisi company ke website hack karke fake information daal dena. Attackers website control karte hain — false info display karna, data steal karna, services disrupt karna. Yeh website hijacking ka another name hai. Companies reputation damage hota hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Web Jacking — Website takeover through unauthorized access. False information display karna, data steal karna, services disrupt karna. Financial gain, reputational damage."
            },
            {
              "type": "cards",
              "title": "Web Jacking Attacks",
              "cards": [
                {
                  "icon": "globe",
                  "title": "Website Hijack",
                  "desc": "Website control karna — false information, logo change",
                  "color": "#ff0040"
                },
                {
                  "icon": "database",
                  "title": "Data Theft",
                  "desc": "User data, credentials, financial info steal karna",
                  "color": "#0047ff"
                },
                {
                  "icon": "warn",
                  "title": "Service Disrupt",
                  "desc": "Website down karna — customers affect, reputation damage",
                  "color": "#ff8800"
                },
                {
                  "icon": "lock",
                  "title": "Redirect",
                  "desc": "Visitors fake website par redirect karna — phishing",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Web Jacking Flow",
              "diagram": "web-jacking",
              "caption": "Hack → Control → Modify → Damage → Reputation Loss"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Web jacking website takeover hai through unauthorized access.",
                "Website hijack karna — false information, logo change, content modification.",
                "Data theft — user data, credentials, financial information steal.",
                "Service disrupt karna — website down karna — customers affect.",
                "Redirect karna — visitors fake website par redirect karna.",
                "Reputation damage hota hai — customers trust lose karte hain.",
                "Financial loss — customers lose, business damage.",
                "Prevention — strong security, regular updates, backups, monitoring."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Web jacking = website takeover.\nAttacks = hijack, data theft, service disrupt, redirect.\nEffects = reputation damage, financial loss.\nPrevention = security, updates, backups, monitoring."
            }
          ],
          "examQuestions": [
            {
              "question": "Define web jacking. What are its effects?",
              "answer": "Web Jacking: website takeover through unauthorized access. False info, data steal, services disrupt.\n\nEffects:\n1. Reputation Damage — customers trust lose\n2. Financial Loss — business damage, customers lose\n3. Data Theft — user data, credentials\n4. Service Disrupt — website down, customers affect\n\nPrevention: strong security, updates, backups, monitoring."
            },
            {
              "question": "How can organizations prevent web jacking?",
              "answer": "Prevention:\n1. Strong Security — firewalls, encryption, access control\n2. Regular Updates — software patches\n3. Backups — regular backups, restore capability\n4. Monitoring — security monitoring, alerts\n5. Education — employees security awareness\n6. Response Plan — incident response preparation\n\nSecurity audits, penetration testing bhi important hain."
            }
          ]
        },
        {
          "id": "internet-time-theft",
          "number": "2.22",
          "title": "Internet Time Theft",
          "subtitle": "Work time internet waste",
          "icon": "clock",
          "accent": "#0047ff",
          "englishDefinition": "Internet time theft refers to the unauthorized use of internet connectivity, typically by employees accessing non-work websites or personal activities during work hours, resulting in wasted company resources and productivity loss.",
          "intro": "Internet time theft jaise office time mein personal Facebook, YouTube dekhna — company internet ka unauthorized use. Employees work hours mein non-work activities karte hain. Company resources waste hote hain — bandwidth, electricity, productivity. Yeh internal cyber crime hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Internet Time Theft — Unauthorized internet connectivity use karna. Employees non-work websites access karna, personal activities work hours mein. Company resources waste karna, productivity loss."
            },
            {
              "type": "cards",
              "title": "Types of Time Theft",
              "cards": [
                {
                  "icon": "globe",
                  "title": "Social Media",
                  "desc": "Facebook, Instagram, Twitter work hours mein use karna",
                  "color": "#ff0040"
                },
                {
                  "icon": "eye",
                  "title": "Streaming",
                  "desc": "YouTube, Netflix, movies watch karna — bandwidth waste",
                  "color": "#0047ff"
                },
                {
                  "icon": "file",
                  "title": "Downloads",
                  "desc": "Personal files, software download karna — storage, bandwidth",
                  "color": "#ff8800"
                },
                {
                  "icon": "users",
                  "title": "Gaming",
                  "desc": "Online games play karna work hours mein",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Internet Time Theft Flow",
              "diagram": "internet-time-theft",
              "caption": "Work Time → Personal Use → Resource Waste → Productivity Loss"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Internet time theft unauthorized internet use hai — work hours mein.",
                "Social media use karna — Facebook, Instagram, Twitter.",
                "Streaming — YouTube, Netflix, movies watch karna — bandwidth waste.",
                "Downloads — personal files, software — storage, bandwidth waste.",
                "Gaming — online games work hours mein play karna.",
                "Company resources waste hote hain — bandwidth, electricity, storage.",
                "Productivity loss hota hai — work time waste, deadlines miss.",
                "Security risk — malware downloads, phishing links click karna.",
                "Prevention — internet policies, monitoring, education, limits."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Internet time theft = unauthorized internet use during work hours.\nTypes = social media, streaming, downloads, gaming.\nEffects = resource waste, productivity loss, security risk.\nPrevention = policies, monitoring, education, limits."
            }
          ],
          "examQuestions": [
            {
              "question": "Define internet time theft. What are its types?",
              "answer": "Internet Time Theft: unauthorized internet connectivity use. Employees work hours mein non-work activities.\n\nTypes:\n1. Social Media — Facebook, Instagram, Twitter\n2. Streaming — YouTube, Netflix, movies\n3. Downloads — personal files, software\n4. Gaming — online games\n\nEffects: resource waste, productivity loss, security risk.\nPrevention: policies, monitoring, education."
            },
            {
              "question": "What are the consequences of internet time theft for organizations?",
              "answer": "Consequences:\n1. Resource Waste — bandwidth, electricity, storage\n2. Productivity Loss — work time waste, deadlines miss\n3. Security Risk — malware, phishing links\n4. Bandwidth Issues — other employees affect\n5. Legal — policy violation, disciplinary action\n\nPrevention: internet policies, monitoring tools, education, limits."
            }
          ]
        },
        {
          "id": "dos-attack",
          "number": "2.23",
          "title": "DoS Attack",
          "subtitle": "Server flood aur crash",
          "icon": "server",
          "accent": "#ff0040",
          "englishDefinition": "A Denial-of-Service (DoS) attack is an attempt to make a service unavailable by overwhelming it with traffic, causing it to crash or slow down significantly.",
          "intro": "DoS attack jaise kisi shop ke bahar 1000 log jam karna — genuine customers ko entry nahi. Server par request flood karte hain — server crash ho jata hai. Legit users access nahi kar paate. Yeh service disruption ka attack hai. DDoS multiple computers se attack karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "DoS Attack — Service unavailable karna traffic overwhelming karke. Server crash, slow down karna. Legit users access nahi kar paate."
            },
            {
              "type": "cards",
              "title": "Types of DoS",
              "cards": [
                {
                  "icon": "server",
                  "title": "DoS",
                  "desc": "Single computer attack — server request flood",
                  "color": "#ff0040"
                },
                {
                  "icon": "users",
                  "title": "DDoS",
                  "desc": "Multiple computers attack — botnet use karna",
                  "color": "#0047ff"
                },
                {
                  "icon": "globe",
                  "title": "Application",
                  "desc": "Application layer attack — HTTP request flood",
                  "color": "#ff8800"
                },
                {
                  "icon": "warn",
                  "title": "Syn Flood",
                  "desc": "TCP SYN packets flood — connection table overflow",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "DoS Attack Flow",
              "diagram": "dos-attack",
              "caption": "Flood Requests → Server Overwhelmed → Crash/Slow → Users Blocked"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "DoS attack service unavailable karna hai traffic overwhelming karke.",
                "DoS single computer attack hai — server request flood.",
                "DDoS multiple computers attack karte hain — botnet use karta hai.",
                "Application layer attack HTTP request flood include karta hai.",
                "Syn flood TCP SYN packets flood karta hai — connection overflow.",
                "Server crash ho jata hai — legit users access nahi kar paate.",
                "Service disruption hota hai — business damage, revenue loss.",
                "DDoS difficult to prevent — multiple sources, hard to block.",
                "Prevention — rate limiting, traffic filtering, DDoS protection services."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "DoS attack = service unavailable through traffic flood.\nTypes = DoS, DDoS, application layer, SYN flood.\nEffects = server crash, users blocked, business damage.\nPrevention = rate limiting, filtering, DDoS protection."
            }
          ],
          "examQuestions": [
            {
              "question": "Define DoS attack. What is the difference between DoS and DDoS?",
              "answer": "DoS Attack: service unavailable karna traffic overwhelming karke. Server crash, slow down.\n\nDoS vs DDoS:\n1. Source — single computer vs multiple computers\n2. Power — limited vs distributed, more powerful\n3. Detection — easier vs harder\n4. Prevention — easier vs harder\n\nDoS: single attacker, server request flood.\nDDoS: multiple attackers (botnet), distributed attack."
            },
            {
              "question": "How can DoS attacks be prevented?",
              "answer": "Prevention:\n1. Rate Limiting — requests limit karna per IP\n2. Traffic Filtering — malicious traffic block karna\n3. DDoS Protection — specialized services (Cloudflare, Akamai)\n4. Redundancy — multiple servers, load balancing\n5. Monitoring — traffic monitoring, alerts\n6. Network Security — firewalls, IDS\n\nEducation: attack识别 karna, response plans."
            }
          ]
        },
        {
          "id": "salami-attack",
          "number": "2.24",
          "title": "Salami Attack",
          "subtitle": "Small amounts repeated theft",
          "icon": "layers",
          "accent": "#aa00ff",
          "englishDefinition": "A salami attack is a type of financial fraud where small amounts are repeatedly stolen from multiple accounts or transactions, making each individual theft unnoticeable.",
          "intro": "Salami attack jaise kisi bank mein 1000 accounts se 1 rupee stole karna — koi notice nahi karta. Small amounts ek ek karke steal karte hain — individual theft unnoticeable. Total amount large ho jata hai — millions. Yeh financial fraud hai — slicing karne ki tarah — ek ek slice.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Salami Attack — Financial fraud. Small amounts repeatedly steal karna multiple accounts/transactions se. Individual theft unnoticeable. Total amount large ho jata hai."
            },
            {
              "type": "cards",
              "title": "Salami Attack Methods",
              "cards": [
                {
                  "icon": "layers",
                  "title": "Rounding",
                  "desc": "Amount rounding karke steal karna — 1 rupee per transaction",
                  "color": "#ff0040"
                },
                {
                  "icon": "database",
                  "title": "Account Theft",
                  "desc": "Multiple accounts se small amounts steal karna — 1000 accounts",
                  "color": "#0047ff"
                },
                {
                  "icon": "clock",
                  "title": "Time Theft",
                  "desc": "Time calculations modify karke overtime theft karna",
                  "color": "#ff8800"
                },
                {
                  "icon": "warn",
                  "title": "Total Amount",
                  "desc": "Small amounts total large ho jata hai — millions",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Salami Attack Flow",
              "diagram": "salami-attack",
              "caption": "Steal Small → Many Times → Unnoticed → Total Large → Fraud"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Salami attack financial fraud hai — small amounts repeatedly steal karna.",
                "Rounding karke amount steal karna — 1 rupee per transaction.",
                "Multiple accounts se small amounts steal karna — 1000 accounts.",
                "Time calculations modify karke overtime theft karna.",
                "Individual theft unnoticeable hai — small amount.",
                "Total amount large ho jata hai — millions.",
                "Difficult to detect — individual thefts small hain.",
                "Often insider attacks — employees financial systems manipulate karte hain.",
                "Prevention — audit trails, reconciliation, monitoring, fraud detection."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Salami attack = small amounts repeated theft.\nMethods = rounding, account theft, time theft.\nEffect = unnoticed individual theft, large total.\nPrevention = audit trails, reconciliation, monitoring."
            }
          ],
          "examQuestions": [
            {
              "question": "Define salami attack. How does it work?",
              "answer": "Salami Attack: financial fraud. Small amounts repeatedly steal karna multiple accounts/transactions se.\n\nHow it works:\n1. Attacker financial system access karta hai\n2. Small amounts modify karta hai — 1 rupee per transaction\n3. Many transactions modify karta hai — 1000+\n4. Individual theft unnoticeable — small amount\n5. Total amount large ho jata hai — millions\n\nPrevention: audit trails, reconciliation, monitoring, fraud detection."
            },
            {
              "question": "Why is salami attack difficult to detect?",
              "answer": "Difficult to Detect:\n1. Small Amounts — individual thefts small, unnoticeable\n2. Many Transactions — volume large, hard to track individually\n3. Legitimate Look — transactions appear normal\n4. No Single Evidence — one transaction no clear fraud\n5. Insider Access — authorized access, suspicion low\n\nDetection: audit trails, reconciliation, anomaly detection, regular reviews."
            }
          ]
        },
        {
          "id": "data-diddling",
          "number": "2.25",
          "title": "Data Diddling",
          "subtitle": "Data modification before processing",
          "icon": "database",
          "accent": "#00c8ff",
          "englishDefinition": "Data diddling is the alteration of data before it is processed by a system, often through corrupting input data or modifying it during transmission, causing incorrect processing and results.",
          "intro": "Data diddling jaise kisi form mein apni age 21 dikha ke 25 daal dena — data modify kar dena before processing. Input data corrupt karna, transmission mein modify karna. System incorrect data process karta hai — wrong results. Yeh data manipulation hai — small changes, big impact.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Data Diddling — Data modify karna before system process kare. Input data corrupt karna, transmission mein modify karna. Incorrect processing, wrong results."
            },
            {
              "type": "cards",
              "title": "Data Diddling Methods",
              "cards": [
                {
                  "icon": "database",
                  "title": "Input Modification",
                  "desc": "Input data modify karna — age, amount, numbers change karna",
                  "color": "#ff0040"
                },
                {
                  "icon": "arrow",
                  "title": "Transmission",
                  "desc": "Data transmission mein modify karna — intercept karke change karna",
                  "color": "#0047ff"
                },
                {
                  "icon": "file",
                  "title": "Storage",
                  "desc": "Data storage mein modify karna — file edit karna",
                  "color": "#ff8800"
                },
                {
                  "icon": "warn",
                  "title": "Impact",
                  "desc": "Incorrect processing, wrong results, decisions affect",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Data Diddling Flow",
              "diagram": "data-diddling",
              "caption": "Data → Modify → Process → Wrong Result → Decision"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Data diddling data modify karna hai before system process kare.",
                "Input modification — input data modify karna — age, amount, numbers.",
                "Transmission modification — data intercept karke change karna.",
                "Storage modification — data storage mein modify karna — file edit.",
                "Incorrect processing hota hai — wrong results.",
                "Decisions affect hote hain — wrong data se wrong decisions.",
                "Financial impact — wrong calculations, payments.",
                "Hard to detect — small changes, no clear pattern.",
                "Prevention — data validation, encryption, audit trails, integrity checks."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Data diddling = data modification before processing.\nMethods = input, transmission, storage modification.\nEffects = wrong results, bad decisions.\nPrevention = validation, encryption, audit trails."
            }
          ],
          "examQuestions": [
            {
              "question": "Define data diddling. What are its types?",
              "answer": "Data Diddling: data modify karna before system process kare. Incorrect processing, wrong results.\n\nTypes:\n1. Input Modification — input data modify (age, amount, numbers)\n2. Transmission — data intercept karke change karna\n3. Storage — data storage modify, file edit\n\nEffects: wrong results, bad decisions, financial impact.\nPrevention: validation, encryption, audit trails, integrity checks."
            },
            {
              "question": "How does data diddling affect business decisions?",
              "answer": "Impact on Decisions:\n1. Wrong Data — decisions based on incorrect data\n2. Financial — wrong calculations, payments, losses\n3. Operations — inefficient processes, delays\n4. Strategy — bad planning based on wrong data\n5. Reputation — customer trust loss\n\nPrevention: data validation, encryption, audit trails, integrity checks, regular reviews."
            }
          ]
        },
        {
          "id": "email-spoofing",
          "number": "2.26",
          "title": "Email Spoofing",
          "subtitle": "Forged sender addresses",
          "icon": "warn",
          "accent": "#00ff88",
          "englishDefinition": "Email spoofing is the creation of email messages with a forged sender address, making it appear as if the email came from a trusted source when it actually did not.",
          "intro": "Email spoofing jaise kisi email mein aapke friend ka address dikha ke message bhejna. Sender address forged hota hai — real sender different. Trusted source dikhaya jata hai — bank, company, friend. Phishing, fraud sab possible hai. Yeh sender address manipulation hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Definition",
              "content": "Email Spoofing — Email messages bana na with forged sender address. Trusted source dikha na — bank, company, friend. Real sender different."
            },
            {
              "type": "cards",
              "title": "Spoofing Techniques",
              "cards": [
                {
                  "icon": "warn",
                  "title": "Display Name",
                  "desc": "Display name modify karna — \"Bank Name\" dikhana — actual address different",
                  "color": "#ff0040"
                },
                {
                  "icon": "lock",
                  "title": "Address Forge",
                  "desc": "Sender address forge karna — bank@evil.com, actual sender hacker",
                  "color": "#0047ff"
                },
                {
                  "icon": "globe",
                  "title": "Domain Spoof",
                  "desc": "Domain name similar rakhna — bank-secure.com, real bank.com",
                  "color": "#ff8800"
                },
                {
                  "icon": "eye",
                  "title": "Reply To",
                  "desc": "Reply-to address different karna — reply aata hai different address",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Email Spoofing Flow",
              "diagram": "email-spoofing",
              "caption": "Forge Address → Send Email → User Trusts → Clicks/Responds → Fraud"
            },
            {
              "type": "points",
              "title": "Key Points",
              "points": [
                "Email spoofing email messages bana na hai with forged sender address.",
                "Display name modify karna — \"Bank Name\" dikhana — actual address different.",
                "Address forge karna — bank@evil.com — actual sender hacker.",
                "Domain spoof karna — bank-secure.com — real bank.com.",
                "Reply-to address different karna — reply different address aata hai.",
                "Phishing possible hai — credentials, financial info churana.",
                "Fraud possible hai — money transfer, purchases.",
                "Difficult to detect — looks legitimate.",
                "Prevention — SPF, DKIM, DMARC, user education, verify sender."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Email spoofing = forged sender address.\nTechniques = display name, address forge, domain spoof, reply-to.\nEffects = phishing, fraud.\nPrevention = SPF, DKIM, DMARC, user education."
            }
          ],
          "examQuestions": [
            {
              "question": "Define email spoofing. What are its techniques?",
              "answer": "Email Spoofing: email messages bana na with forged sender address. Trusted source dikha na.\n\nTechniques:\n1. Display Name — \"Bank Name\" dikhana, actual address different\n2. Address Forge — bank@evil.com, actual sender hacker\n3. Domain Spoof — bank-secure.com, real bank.com\n4. Reply-To — reply different address aata hai\n\nEffects: phishing, fraud.\nPrevention: SPF, DKIM, DMARC, user education."
            },
            {
              "question": "How can email spoofing be prevented?",
              "answer": "Prevention:\n1. SPF (Sender Policy Framework) — authorized senders allow karna\n2. DKIM (DomainKeys Identified Mail) — email signing, verification\n3. DMARC — SPF/DKIM policy, reporting\n4. User Education — verify sender, don't click unknown\n5. Email Filters — spam, spoof filter karna\n6. Two-Factor Auth — account security\n\nOrganizations: implement SPF, DKIM, DMARC."
            }
          ]
        },
        {
          "id": "types-of-hackers",
          "number": "2.27",
          "title": "Types of Hackers",
          "subtitle": "Different categories of hackers",
          "icon": "users",
          "accent": "#ff0040",
          "englishDefinition": "Types of hackers include white hat hackers (ethical), black hat hackers (malicious), grey hat hackers (mixed), script kiddies (inexperienced), and hacktivists (political motivations).",
          "intro": "Hackers alag-alag categories mein bante hain. White hat hackers ethical hackers hain — vulnerabilities find karte hain with permission. Black hat hackers malicious hain — illegal access lena chahte hain. Grey hat hackers mixed approach follow karte hain. Script kiddies inexperienced hain — tools use karte hain without understanding. Hacktivists political motivations ke saath hack karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Types of Hackers",
              "content": "White hat — ethical hackers. Black hat — malicious hackers. Grey hat — mixed approach. Script kiddies — inexperienced. Hacktivists — political motivations."
            },
            {
              "type": "cards",
              "title": "Hacker Categories",
              "cards": [
                {
                  "icon": "shield",
                  "title": "White Hat",
                  "desc": "Ethical hackers. Permission se vulnerabilities find karte hain. Security improve karna chahte hain.",
                  "color": "#00ff88"
                },
                {
                  "icon": "warn",
                  "title": "Black Hat",
                  "desc": "Malicious hackers. Illegal access lena chahte hain. Data churana, damage karna.",
                  "color": "#ff0040"
                },
                {
                  "icon": "globe",
                  "title": "Grey Hat",
                  "desc": "Mixed approach. Permission nahi lena but vulnerabilities report karte hain.",
                  "color": "#ff8800"
                },
                {
                  "icon": "code",
                  "title": "Script Kiddie",
                  "desc": "Inexperienced hackers. Tools use karte hain without understanding. Limited skills.",
                  "color": "#aa00ff"
                },
                {
                  "icon": "flag",
                  "title": "Hacktivist",
                  "desc": "Political motivations. Government, corporations hack karte hain. Anonymous group.",
                  "color": "#0047ff"
                },
                {
                  "icon": "eye",
                  "title": "State-Sponsored",
                  "desc": "Government sponsored hackers. National security targets. Cyber warfare.",
                  "color": "#00ffff"
                }
              ]
            },
            {
              "type": "comparison",
              "title": "White Hat vs Black Hat",
              "rows": [
                {
                  "label": "Permission",
                  "values": [
                    "Permission required",
                    "No permission"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Intent",
                  "values": [
                    "Help organizations",
                    "Harm organizations"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Legality",
                  "values": [
                    "Legal",
                    "Illegal"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Goal",
                  "values": [
                    "Security improvement",
                    "Personal gain"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Tools",
                  "values": [
                    "Same tools",
                    "Same tools"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Result",
                  "values": [
                    "Vulnerabilities fixed",
                    "Systems damaged"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                }
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Types of hackers = White hat (ethical), Black hat (malicious), Grey hat (mixed), Script kiddies (inexperienced), Hacktivists (political), State-sponsored (government)."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain different types of hackers.",
              "answer": "Types of Hackers:\n1. White Hat — Ethical hackers. Permission se vulnerabilities find karte hain. Security improve karna chahte hain.\n2. Black Hat — Malicious hackers. Illegal access lena chahte hain. Data churana, damage karna.\n3. Grey Hat — Mixed approach. Permission nahi lena but vulnerabilities report karte hain.\n4. Script Kiddies — Inexperienced hackers. Tools use karte hain without understanding.\n5. Hacktivists — Political motivations. Government, corporations hack karte hain.\n6. State-Sponsored — Government sponsored hackers. National security targets."
            },
            {
              "question": "Differentiate between white hat and black hat hackers.",
              "answer": "White Hat vs Black Hat:\n1. Permission — White hat permission required, black hat no permission\n2. Intent — White hat help organizations, black hat harm organizations\n3. Legality — White hat legal, black hat illegal\n4. Goal — White hat security improvement, black hat personal gain\n5. Tools — Same tools dono use karte hain\n6. Result — White hat vulnerabilities fix, black hat systems damage\nWhite hat ethical hai, black hat malicious hai."
            }
          ]
        },
        {
          "id": "hacking-and-cracking",
          "number": "2.28",
          "title": "Hacking and Cracking",
          "subtitle": "Difference between hacking and cracking",
          "icon": "code",
          "accent": "#00ff88",
          "englishDefinition": "Hacking is the act of finding weaknesses in a computer system or network, while cracking is the act of exploiting those weaknesses to gain unauthorized access.",
          "intro": "Hacking aur cracking main difference intent mein hai. Hacking = vulnerabilities find karna, system understanding karna. Cracking = unauthorized access lena, passwords break karna, systems exploit karna. Hacking ethical ya unethical ho sakta hai. Cracking mostly unethical hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Hacking vs Cracking",
              "content": "Hacking = vulnerabilities find karna, system understanding karna. Cracking = unauthorized access lena, passwords break karna, systems exploit karna."
            },
            {
              "type": "comparison",
              "title": "Hacking vs Cracking",
              "rows": [
                {
                  "label": "Definition",
                  "values": [
                    "Finding weaknesses",
                    "Exploiting weaknesses"
                  ],
                  "colors": [
                    "#0047ff",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Goal",
                  "values": [
                    "Understand system",
                    "Gain access"
                  ],
                  "colors": [
                    "#0047ff",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Permission",
                  "values": [
                    "With permission",
                    "Without permission"
                  ],
                  "colors": [
                    "#0047ff",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Skill Level",
                  "values": [
                    "High skill needed",
                    "High skill needed"
                  ],
                  "colors": [
                    "#0047ff",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Legality",
                  "values": [
                    "Can be legal",
                    "Usually illegal"
                  ],
                  "colors": [
                    "#0047ff",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Examples",
                  "values": [
                    "Penetration testing",
                    "Password cracking, jailbreaking"
                  ],
                  "colors": [
                    "#0047ff",
                    "#ff0040"
                  ]
                }
              ]
            },
            {
              "type": "cards",
              "title": "Hacking Activities",
              "cards": [
                {
                  "icon": "shield",
                  "title": "Penetration Testing",
                  "desc": "Authorized security testing. Vulnerabilities find karna. Security improve karna.",
                  "color": "#00ff88"
                },
                {
                  "icon": "globe",
                  "title": "Security Research",
                  "desc": "System research karna. Vulnerabilities discover karna. Understanding develop karna.",
                  "color": "#0047ff"
                },
                {
                  "icon": "code",
                  "title": "Code Review",
                  "desc": "Source code analysis. Security issues find karna. Best practices implement karna.",
                  "color": "#ff8800"
                },
                {
                  "icon": "eye",
                  "title": "Surveillance",
                  "desc": "Network monitoring. System observation karna. Behavior analysis karna.",
                  "color": "#aa00ff"
                }
              ]
            },
            {
              "type": "cards",
              "title": "Cracking Activities",
              "cards": [
                {
                  "icon": "warn",
                  "title": "Password Cracking",
                  "desc": "Passwords break karna. Brute force, dictionary attacks. Unauthorized access.",
                  "color": "#ff0040"
                },
                {
                  "icon": "lock",
                  "title": "Software Cracking",
                  "desc": "Software licensing bypass karna. Piracy karna. Protection remove karna.",
                  "color": "#ff0040"
                },
                {
                  "icon": "globe",
                  "title": "Jailbreaking",
                  "desc": "Device restrictions remove karna. Root access lena. System modify karna.",
                  "color": "#ff0040"
                },
                {
                  "icon": "code",
                  "title": "Exploit Development",
                  "desc": "Vulnerabilities exploit karna. Malware create karna. System compromise karna.",
                  "color": "#ff0040"
                }
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Hacking = vulnerabilities find karna, system understanding karna. Cracking = unauthorized access lena, passwords break karna. Hacking can be ethical, cracking mostly unethical."
            }
          ],
          "examQuestions": [
            {
              "question": "Differentiate between hacking and cracking.",
              "answer": "Hacking vs Cracking:\n1. Definition — Hacking finding weaknesses, cracking exploiting weaknesses\n2. Goal — Hacking understand system, cracking gain access\n3. Permission — Hacking with permission, cracking without permission\n4. Legality — Hacking can be legal, cracking usually illegal\n5. Examples — Hacking penetration testing, cracking password cracking\nHacking ethical security testing hai, cracking unauthorized access hai."
            },
            {
              "question": "What are the different types of cracking activities?",
              "answer": "Cracking Activities:\n1. Password Cracking — Passwords break karna. Brute force, dictionary attacks.\n2. Software Cracking — Software licensing bypass karna. Piracy karna.\n3. Jailbreaking — Device restrictions remove karna. Root access lena.\n4. Exploit Development — Vulnerabilities exploit karna. Malware create karna.\n5. DRM Bypass — Digital rights management bypass karna.\n6. Serial Key Generation — Software keys generate karna.\nCracking mostly illegal hai."
            }
          ]
        },
        {
          "id": "ethical-issues-hacking",
          "number": "2.29",
          "title": "Hacking: Ethical Issues",
          "subtitle": "Moral and legal considerations",
          "icon": "flag",
          "accent": "#ff8800",
          "englishDefinition": "Ethical issues in hacking include privacy violations, unauthorized access, data theft, damage to systems, and legal consequences. Hackers must consider consent, intent, and impact.",
          "intro": "Hacking ethical issues bahut important hai. Privacy violation — personal data access without consent. Unauthorized access — system access without permission. Data theft — sensitive information steal karna. Damage to systems — intentional system harm. Legal consequences — jail time, fines, criminal records.",
          "sections": [
            {
              "type": "definition",
              "title": "Ethical Issues in Hacking",
              "content": "Privacy violation — personal data access without consent. Unauthorized access — system access without permission. Data theft — sensitive information steal karna. Damage to systems — intentional system harm."
            },
            {
              "type": "cards",
              "title": "Ethical Issues",
              "cards": [
                {
                  "icon": "eye",
                  "title": "Privacy Violation",
                  "desc": "Personal data access without consent. Private information exposure. Privacy rights violation.",
                  "color": "#ff0040"
                },
                {
                  "icon": "lock",
                  "title": "Unauthorized Access",
                  "desc": "System access without permission. Breaking security barriers. Trust violation.",
                  "color": "#ff0040"
                },
                {
                  "icon": "warn",
                  "title": "Data Theft",
                  "desc": "Sensitive information steal karna. Financial data, personal info. Identity theft risk.",
                  "color": "#ff0040"
                },
                {
                  "icon": "code",
                  "title": "System Damage",
                  "desc": "Intentional system harm. Data destruction, service disruption. Financial impact.",
                  "color": "#ff0040"
                },
                {
                  "icon": "flag",
                  "title": "Legal Consequences",
                  "desc": "Jail time, fines, criminal records. Legal action against hackers. Career destruction.",
                  "color": "#ff0040"
                },
                {
                  "icon": "globe",
                  "title": "Business Impact",
                  "desc": "Company reputation damage. Financial losses. Customer trust loss.",
                  "color": "#ff0040"
                }
              ]
            },
            {
              "type": "comparison",
              "title": "Ethical vs Unethical Hacking",
              "rows": [
                {
                  "label": "Permission",
                  "values": [
                    "With permission",
                    "Without permission"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Intent",
                  "values": [
                    "Help organization",
                    "Harm organization"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Data Access",
                  "values": [
                    "Authorized only",
                    "Unauthorized"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Reporting",
                  "values": [
                    "Vulnerabilities reported",
                    "Vulnerabilities hidden"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Consent",
                  "values": [
                    "Consent obtained",
                    "No consent"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Legality",
                  "values": [
                    "Legal",
                    "Illegal"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                }
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Ethical issues = privacy violation, unauthorized access, data theft, system damage, legal consequences. Ethical hacking permission se, reporting karna, consent lena. Unethical hacking permission bina, damage karna, data steal karna."
            }
          ],
          "examQuestions": [
            {
              "question": "What are the ethical issues in hacking?",
              "answer": "Ethical Issues in Hacking:\n1. Privacy Violation — Personal data access without consent\n2. Unauthorized Access — System access without permission\n3. Data Theft — Sensitive information steal karna\n4. System Damage — Intentional system harm\n5. Legal Consequences — Jail time, fines, criminal records\n6. Business Impact — Reputation damage, financial losses\n7. Trust Violation — Breaking security barriers\nEthical hacking permission se, reporting karna, consent lena chahiye."
            },
            {
              "question": "How does ethical hacking differ from unethical hacking?",
              "answer": "Ethical vs Unethical Hacking:\n1. Permission — Ethical with permission, unethical without permission\n2. Intent — Ethical help organization, unethical harm organization\n3. Data Access — Ethical authorized only, unethical unauthorized\n4. Reporting — Ethical vulnerabilities report karna, unethical hidden rakhna\n5. Consent — Ethical consent obtain karna, unethical no consent\n6. Legality — Ethical legal, unethical illegal\nEthical hacking security improve karna hai, unethical hacking personal gain ke liye hack karna hai."
            }
          ]
        },
        {
          "id": "ethical-hacking",
          "number": "2.30",
          "title": "Ethical Hacking",
          "subtitle": "Security testing with permission",
          "icon": "shield",
          "accent": "#00ff88",
          "englishDefinition": "Ethical hacking is the practice of testing computer systems and networks for vulnerabilities with the permission of the owner, to help improve security before malicious hackers can exploit them.",
          "intro": "Ethical hacking = permission se security testing karna. Company allow karti hai — vulnerabilities find karo, report karo. Goal = security improve karna, systems protect karna. White hat hackers ethical hacking karte hain. Process = planning, scanning, gaining access, maintaining access, analysis, reporting.",
          "sections": [
            {
              "type": "definition",
              "title": "Ethical Hacking",
              "content": "Permission se security testing karna. Vulnerabilities find karna, report karna. Security improve karna. White hat hackers ethical hacking karte hain."
            },
            {
              "type": "cards",
              "title": "Ethical Hacking Process",
              "cards": [
                {
                  "icon": "flag",
                  "title": "Planning",
                  "desc": "Scope define karna. Rules of engagement set karna. Permission obtain karna.",
                  "color": "#0047ff"
                },
                {
                  "icon": "eye",
                  "title": "Scanning",
                  "desc": "Network scan karna. Vulnerabilities identify karna. Information gather karna.",
                  "color": "#0047ff"
                },
                {
                  "icon": "lock",
                  "title": "Gaining Access",
                  "desc": "Vulnerabilities exploit karna. Access gain karna. Security test karna.",
                  "color": "#0047ff"
                },
                {
                  "icon": "code",
                  "title": "Maintaining Access",
                  "desc": "Access maintain karna. Persistence test karna. Depth testing karna.",
                  "color": "#0047ff"
                },
                {
                  "icon": "chart",
                  "title": "Analysis",
                  "desc": "Vulnerabilities analyze karna. Impact assess karna. Risk evaluation karna.",
                  "color": "#0047ff"
                },
                {
                  "icon": "doc",
                  "title": "Reporting",
                  "desc": "Findings report karna. Recommendations provide karna. Remediation support karna.",
                  "color": "#0047ff"
                }
              ]
            },
            {
              "type": "cards",
              "title": "Ethical Hacking Benefits",
              "cards": [
                {
                  "icon": "shield",
                  "title": "Security Improvement",
                  "desc": "Vulnerabilities identify karna. Security weaknesses fix karna. System protection improve karna.",
                  "color": "#00ff88"
                },
                {
                  "icon": "globe",
                  "title": "Attack Prevention",
                  "desc": "Attacks prevent karna. Security breaches avoid karna. Data protection ensure karna.",
                  "color": "#00ff88"
                },
                {
                  "icon": "chart",
                  "title": "Risk Assessment",
                  "desc": "Risks assess karna. Security posture evaluate karna. Compliance ensure karna.",
                  "color": "#00ff88"
                },
                {
                  "icon": "eye",
                  "title": "Vulnerability Discovery",
                  "desc": "New vulnerabilities find karna. Zero-days discover karna. Security research support karna.",
                  "color": "#00ff88"
                },
                {
                  "icon": "users",
                  "title": "Security Awareness",
                  "desc": "Security awareness build karna. Best practices promote karna. Culture improve karna.",
                  "color": "#00ff88"
                },
                {
                  "icon": "lock",
                  "title": "Compliance",
                  "desc": "Regulatory requirements meet karna. Security standards follow karna. Audits pass karna.",
                  "color": "#00ff88"
                }
              ]
            },
            {
              "type": "comparison",
              "title": "Ethical vs Malicious Hacking",
              "rows": [
                {
                  "label": "Permission",
                  "values": [
                    "Permission required",
                    "No permission"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Intent",
                  "values": [
                    "Help organization",
                    "Harm organization"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Reporting",
                  "values": [
                    "Vulnerabilities reported",
                    "Vulnerabilities hidden"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Data Handling",
                  "values": [
                    "Authorized only",
                    "Unauthorized access"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Legality",
                  "values": [
                    "Legal",
                    "Illegal"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                },
                {
                  "label": "Goal",
                  "values": [
                    "Security improvement",
                    "Personal gain"
                  ],
                  "colors": [
                    "#00ff88",
                    "#ff0040"
                  ]
                }
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Ethical hacking = permission se security testing karna. Process = planning, scanning, gaining access, maintaining access, analysis, reporting. Benefits = security improvement, attack prevention, risk assessment, vulnerability discovery, compliance."
            }
          ],
          "examQuestions": [
            {
              "question": "What is ethical hacking? Explain the process.",
              "answer": "Ethical Hacking: Permission se security testing karna. Vulnerabilities find karna, report karna. Security improve karna.\n\nProcess:\n1. Planning — Scope define karna, rules set karna, permission obtain karna\n2. Scanning — Network scan karna, vulnerabilities identify karna\n3. Gaining Access — Vulnerabilities exploit karna, access gain karna\n4. Maintaining Access — Access maintain karna, persistence test karna\n5. Analysis — Vulnerabilities analyze karna, impact assess karna\n6. Reporting — Findings report karna, recommendations provide karna\n\nGoal = security improvement, systems protect karna."
            },
            {
              "question": "What are the benefits of ethical hacking?",
              "answer": "Benefits of Ethical Hacking:\n1. Security Improvement — Vulnerabilities identify karna, weaknesses fix karna\n2. Attack Prevention — Attacks prevent karna, breaches avoid karna\n3. Risk Assessment — Risks assess karna, posture evaluate karna\n4. Vulnerability Discovery — New vulnerabilities find karna, zero-days discover karna\n5. Security Awareness — Awareness build karna, best practices promote karna\n6. Compliance — Regulatory requirements meet karna, standards follow karna\n7. Cost Saving — Future breaches avoid karna, financial loss reduce karna\n8. Customer Trust — Security ensure karna, trust build karna\nEthical hacking proactive security approach hai."
            }
          ]
        }
      ]
    },
    cyberForensicsUnit,
    digitalForensicsUnit,
    socialEngineeringUnit
  ],
  "software-testing": [
    {
      "id": "unit-1",
      "number": "1",
      "name": "Fundamentals of Software Quality Assurance",
      "topics": [
        {
          "id": "fundamentals-software-quality",
          "number": "1.1",
          "title": "Fundamentals of Software Quality",
          "subtitle": "Definition of Quality, QA, QC, SQA aur SQA basics",
          "icon": "check",
          "accent": "#0047ff",
          "englishDefinition": "Testing Software System Security involves validating that software systems are secure against unauthorized access, attacks, and vulnerabilities. Security testing includes vulnerability assessment, penetration testing, code review, and security audits. Six-Sigma is a methodology for minimizing defects and variations in processes. TQM (Total Quality Management) is a comprehensive approach to quality improvement involving all organizational members. Security testing ensures data confidentiality, integrity, availability, authentication, and authorization mechanisms work correctly.",
          "intro": "Software system security testing alag alag techniques hain jo software ke vulnerabilities detect aur prevent karne mein help karte hain. Six-Sigma quality improvement methodology hai jo defects minimize karti hai. TQM organization-wide quality improvement approach hai. Hum dekhenge ki security testing kya hai, Six-Sigma aur TQM kya hai, aur yeh kaise software quality improve karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Software Security Testing",
              "body": "Security testing software systems ke security validate karne ka process hai. Objectives: Confidentiality (data private), Integrity (data correct), Availability (system accessible), Authentication (user identity verify), Authorization (access control). Security testing types: Vulnerability scanning, Penetration testing, Code review, Security audits, Risk assessment.",
              "chips": [
                "Confidentiality",
                "Integrity",
                "Availability",
                "Authentication",
                "Authorization"
              ]
            },
            {
              "type": "definition",
              "title": "Security Testing Methods",
              "body": "Security testing ke methods: 1. Vulnerability Scanning — Automated tools se vulnerabilities identify karna. 2. Penetration Testing — Hackers ki tarah attack karke vulnerabilities test karna. 3. Code Review — Source code mein security issues check karna. 4. Security Audits — Security policies aur procedures review karna. 5. Risk Assessment — Security risks identify aur prioritize karna.",
              "chips": [
                "Vuln Scan",
                "Pen Test",
                "Code Review",
                "Audits"
              ]
            },
            {
              "type": "points",
              "title": "Six-Sigma",
              "points": [
                "Quality improvement methodology.",
                "DMAIC: Define, Measure, Analyze, Improve, Control.",
                "DMADV: Define, Measure, Analyze, Design, Verify.",
                "Defects 3.4 per million opportunities tak reduce karta hai.",
                "Process variation minimize karta hai.",
                "Sigma levels: 1σ (69% defects), 2σ (31%), 3σ (6.7%), 4σ (0.6%), 5σ (0.02%), 6σ (0.00034%).",
                "Benefits: Quality improve, cost reduce, customer satisfaction increase.",
                "Applications: Manufacturing, Service, Software, Healthcare."
              ]
            },
            {
              "type": "points",
              "title": "Six-Sigma DMAIC Process",
              "points": [
                "Define: Problem define karna, Goals set karna, Project scope define karna.",
                "Measure: Data collect karna, Process baseline measure karna, Current performance measure karna.",
                "Analyze: Root causes analyze karna, Data analyze karna, Hypotheses test karna.",
                "Improve: Solutions develop karna, Solutions implement karna, Process optimize karna.",
                "Control: Results control karna, Standardize karna, Monitoring maintain karna."
              ]
            },
            {
              "type": "points",
              "title": "TQM (Total Quality Management)",
              "points": [
                "Organization-wide quality improvement approach.",
                "Customer focus — Customer needs pe focus karna.",
                "Total involvement — Sabhi employees involve karna.",
                "Continuous improvement — Quality continuously improve karna.",
                "Process-centered — Processes pe focus karna.",
                "Fact-based decision making — Data pe decisions lena.",
                "Communication — Open communication maintain karna.",
                "Tools: SPC, Quality circles, Benchmarking, PDCA cycle."
              ]
            },
            {
              "type": "points",
              "title": "TQM Principles",
              "points": [
                "Customer Focus: Customer needs understand aur meet karna.",
                "Leadership: Leaders quality commitment dekhna.",
                "People Involvement: Employees empower aur involve karna.",
                "Process Approach: Processes identify aur manage karna.",
                "Continuous Improvement: PDCA cycle use karna.",
                "Factual Approach: Data pe decisions lena.",
                "Mutually Beneficial Supplier Relationships: Long-term partnerships.",
                "System Approach: Organization ko system ke roop mein manage karna."
              ]
            },
            {
              "type": "diagram",
              "title": "Security Testing Overview",
              "diagram": "security-testing-overview",
              "caption": "Security Testing — Six-Sigma, TQM, Vulnerability Assessment, Penetration Testing"
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Security Testing: Software security validate karna. Six-Sigma: DMAIC methodology, 6σ = 3.4 defects per million. TQM: Organization-wide quality improvement, customer focus, continuous improvement."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain software security testing and its objectives.",
              "answer": "Security testing: Software systems ke security validate karne ka process. Objectives: Confidentiality (data private), Integrity (data correct), Availability (system accessible), Authentication (identity verify), Authorization (access control). Methods: Vulnerability scanning, penetration testing, code review, security audits."
            },
            {
              "question": "Describe Six-Sigma methodology with DMAIC.",
              "answer": "Six-Sigma: Quality improvement methodology. DMAIC: Define (problem define), Measure (data collect), Analyze (root causes find), Improve (solutions implement), Control (results maintain). 6σ = 3.4 defects per million. Process variation minimize karta hai."
            },
            {
              "question": "What is TQM? Explain its principles.",
              "answer": "TQM: Organization-wide quality improvement approach. Principles: Customer focus, Leadership, People involvement, Process approach, Continuous improvement, Factual approach, Supplier relationships, System approach."
            },
            {
              "question": "Differentiate between Six-Sigma and TQM.",
              "answer": "Six-Sigma: Statistical methodology, DMAIC framework, Defects minimize karta hai, 3.4 ppm target. TQM: Management philosophy, Organization-wide approach, Quality culture build karta hai, Continuous improvement focus."
            }
          ]
        },
        {
          "id": "components-sqa-system",
          "number": "1.2",
          "title": "Components of the Software Quality Assurance System",
          "subtitle": "SQA system ke components aur structure",
          "icon": "grid",
          "accent": "#00aaff",
          "englishDefinition": "A Software Quality Assurance System consists of several components including quality standards, quality metrics, quality reviews, testing processes, training programs, and audit mechanisms. These components work together to ensure software quality throughout the development lifecycle.",
          "intro": "SQA system ek structured approach hai software quality ensure karne ke liye. Isme multiple components hote hain jo ek saath kaam karte hain. Hum dekhenge ki SQA system mein kaunse components hote hain aur woh kaise kaam karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "SQA System Components",
              "body": "SQA system mein yeh components hote hain:\n1. Quality Standards — ISO 9001, CMMI, Six Sigma\n2. Quality Metrics — quality measure karne ke liye\n3. Quality Reviews — code aur process review\n4. Testing Processes — unit, integration, system testing\n5. Training Programs — team ko quality train karna\n6. Audit Mechanisms — process check karna",
              "chips": [
                "Standards",
                "Metrics",
                "Reviews",
                "Testing",
                "Training",
                "Audits"
              ]
            },
            {
              "type": "cards",
              "title": "Component Details",
              "cards": [
                {
                  "icon": "book",
                  "title": "Quality Standards",
                  "body": "ISO 9001, CMMI, Six Sigma. Standards define karte hain ki quality kya hai. Organizations follow karte hain. Certification ke liye zaroori hai."
                },
                {
                  "icon": "chart",
                  "title": "Quality Metrics",
                  "body": "Defect density, test coverage, code complexity. Metrics se quality measure hota hai. Trends track karte hain."
                },
                {
                  "icon": "eye",
                  "title": "Quality Reviews",
                  "body": "Code review, design review, walkthroughs. Peer review important hai. Defects early detect karte hain."
                },
                {
                  "icon": "test",
                  "title": "Testing Processes",
                  "body": "Unit, integration, system, acceptance testing. Testing QC ka part hai. Defects detect karta hai."
                },
                {
                  "icon": "users",
                  "title": "Training Programs",
                  "body": "Team ko quality train karte hain. New tools aur processes sikhaate hain. Skills improve karte hain."
                },
                {
                  "icon": "shield",
                  "title": "Audit Mechanisms",
                  "body": "Process audit, product audit. Independent review hota hai. Compliance check karta hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "SQA System Architecture",
              "diagram": "sqa-components",
              "caption": "SQA System — Standards, Metrics, Reviews, Testing, Training, Audits"
            },
            {
              "type": "points",
              "title": "How Components Work Together",
              "points": [
                "Standards define karte hain ki quality kya hai.",
                "Metrics quality measure karte hain.",
                "Reviews defects early detect karte hain.",
                "Testing products verify karte hain.",
                "Training team ko quality sikhaate hain.",
                "Audits compliance check karte hain.",
                "Sab components milte hain SQA system banane ke liye."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "SQA system components = Standards, Metrics, Reviews, Testing, Training, Audits. Sab components milte hain quality ensure karne ke liye. Standards define karte hain, metrics measure karte hain, reviews detect karte hain, testing verifies karte hain, training teach karte hain, audits check karte hain."
            }
          ],
          "examQuestions": [
            {
              "question": "What are the components of an SQA system?",
              "answer": "SQA system components: Quality Standards (ISO 9001, CMMI), Quality Metrics (defect density, coverage), Quality Reviews (code review, design review), Testing Processes (unit, integration, system), Training Programs (team training), Audit Mechanisms (process audit, product audit)."
            },
            {
              "question": "Explain the role of quality standards in SQA.",
              "answer": "Quality standards define karte hain ki quality kya hai. ISO 9001, CMMI, Six Sigma standard frameworks hain. Organizations follow karte hain. Certification ke liye zaroori hai. Standards consistent quality provide karte hain. Processes standardize karte hain."
            },
            {
              "question": "How do quality reviews help in SQA?",
              "answer": "Quality reviews: Code review, design review, walkthroughs. Peer review important hai. Defects early detect karte hain. Cost effective hai — early detection less expensive hai. Knowledge sharing karte hain. Team learn karte hain. Quality improve karte hain."
            }
          ]
        },
        {
          "id": "software-quality-business",
          "number": "1.3",
          "title": "Software Quality in Business Context",
          "subtitle": "Business mein software quality ka importance",
          "icon": "briefcase",
          "accent": "#ff8800",
          "englishDefinition": "Software quality directly impacts business success. High-quality software reduces costs, increases customer satisfaction, improves reputation, and provides competitive advantage. Quality software leads to lower maintenance costs, fewer defects, and better user experience.",
          "intro": "Software quality business ke liye bahut important hai. Accha software business ko success dilata hai. Is chapter mein hum dekhenge ki software quality business context mein kaam karti hai aur business success mein kya role hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Business Impact of Quality",
              "body": "Software quality business pe direct impact daalta hai:\n1. Lower Costs — Accha software maintain karne mein less cost hota hai.\n2. Customer Satisfaction — Accha software user ko pasand aata hai.\n3. Reputation — Accha software company ki image acchi banata hai.\n4. Competitive Advantage — Accha quality competitive advantage provide karta hai.\n5. Reduced Risks — Accha software risks kam karta hai.",
              "chips": [
                "Lower Costs",
                "Customer Satisfaction",
                "Reputation",
                "Competitive Advantage"
              ]
            },
            {
              "type": "cards",
              "title": "Quality-Cost Relationship",
              "cards": [
                {
                  "icon": "money",
                  "title": "Cost of Quality",
                  "body": "Prevention costs, appraisal costs, internal failure costs, external failure costs. High quality = low failure costs."
                },
                {
                  "icon": "chart",
                  "title": "ROI of Quality",
                  "body": "Investment in quality returns karata hai. Less defects = less support. Customer retention increase karta hai."
                },
                {
                  "icon": "users",
                  "title": "Customer Impact",
                  "body": "Quality customer satisfaction increase karta hai. Negative reviews avoid karta hai. Brand loyalty build karta hai."
                },
                {
                  "icon": "trophy",
                  "title": "Market Position",
                  "body": "Quality competitive advantage provide karta hai. Market share increase karta hai. Reputation build karta hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Quality-Cost-Benefit Analysis",
              "diagram": "quality-business-impact",
              "caption": "Quality → Lower Costs + Higher Satisfaction + Better Reputation → Business Success"
            },
            {
              "type": "points",
              "title": "Business Benefits of Quality",
              "points": [
                "Maintenance costs kam hote hain — less bugs.",
                "Customer satisfaction increase hota hai — better UX.",
                "Reputation improve hoti hai — positive reviews.",
                "Competitive advantage milta hai — quality differentiator.",
                "Risks kam hote hain — fewer failures.",
                "Revenue increase hota hai — customer retention.",
                "Market share increase hota hai — better positioning."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Software quality business impact: Lower costs, higher satisfaction, better reputation, competitive advantage, reduced risks. Quality-cost relationship: investment in quality returns karata hai. Business benefits: maintenance costs kam, customer satisfaction increase, reputation improve, competitive advantage milta hai."
            }
          ],
          "examQuestions": [
            {
              "question": "How does software quality impact business success?",
              "answer": "Software quality business impact: Lower costs (less maintenance), Customer satisfaction (better UX), Reputation (positive reviews), Competitive advantage (quality differentiator), Reduced risks (fewer failures). Quality business success dilata hai."
            },
            {
              "question": "Explain the quality-cost relationship in business.",
              "answer": "Quality-cost relationship: Prevention costs (training, planning), Appraisal costs (testing, reviews), Internal failure costs (bugs found before release), External failure costs (bugs found after release). High quality = low failure costs. Investment in quality returns karata hai."
            },
            {
              "question": "What are the business benefits of software quality?",
              "answer": "Business benefits: Maintenance costs kam, Customer satisfaction increase, Reputation improve, Competitive advantage milta hai, Risks kam hote hain, Revenue increase hota hai (customer retention), Market share increase hota hai."
            }
          ]
        },
        {
          "id": "planning-sqa",
          "number": "1.4",
          "title": "Planning for Software Quality Assurance",
          "subtitle": "SQA planning process aur best practices",
          "icon": "calendar",
          "accent": "#00ff88",
          "englishDefinition": "SQA planning involves defining quality goals, establishing standards, allocating resources, creating schedules, and defining processes. A good SQA plan ensures quality is built into the software from the beginning rather than tested in at the end.",
          "intro": "SQA planning important hai quality ensure karne ke liye. Ek accha plan quality ko software mein built karta hai. Is chapter mein hum dekhenge ki SQA planning kya hai, kyun important hai, aur best practices kya hain.",
          "sections": [
            {
              "type": "definition",
              "title": "SQA Planning Kya Hai?",
              "body": "SQA planning = quality goals define karna, standards establish karna, resources allocate karna, schedules create karna, processes define karna. Accha plan quality ko early build karta hai — testing sirf end mein nahi.\n\nSQA planning kai phases mein hota hai:\n1. Initiation — Goals define karna\n2. Planning — Standards, resources, schedules\n3. Execution — Plan follow karna\n4. Monitoring — Progress track karna\n5. Closure — Lessons learn karna",
              "chips": [
                "Goals",
                "Standards",
                "Resources",
                "Schedules",
                "Processes"
              ]
            },
            {
              "type": "cards",
              "title": "SQA Plan Components",
              "cards": [
                {
                  "icon": "target",
                  "title": "Quality Goals",
                  "body": "Measurable objectives. Defect density target. Coverage target. Quality levels define karte hain."
                },
                {
                  "icon": "book",
                  "title": "Standards & Procedures",
                  "body": "Coding standards, review procedures, testing procedures. Consistent approach provide karte hain."
                },
                {
                  "icon": "users",
                  "title": "Roles & Responsibilities",
                  "body": "Who is responsible for quality. Team members ke roles clear hone chahiye. Accountability define karta hai."
                },
                {
                  "icon": "calendar",
                  "title": "Schedule & Milestones",
                  "body": "Quality activities ka timeline. Reviews, testing, audits ka schedule. Milestones set karte hain."
                },
                {
                  "icon": "chart",
                  "title": "Metrics & Measures",
                  "body": "Quality metrics define karte hain. How quality measure hogi. Trends track karte hain."
                },
                {
                  "icon": "file",
                  "title": "Documentation",
                  "body": "SQA plan document. Standards documents. Test plans. Documentation important hai."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "SQA Planning Process",
              "diagram": "sqa-planning-process",
              "caption": "SQA Planning — Goals → Standards → Resources → Schedules → Processes → Documentation"
            },
            {
              "type": "points",
              "title": "SQA Planning Best Practices",
              "points": [
                "Quality goals early define karo — start of project.",
                "Standards establish karo — coding, review, testing.",
                "Resources allocate karo — budget, time, people.",
                "Schedules create karo — quality activities ka timeline.",
                "Processes define karo — how quality ensure hogi.",
                "Documentation maintain karo — plan document.",
                "Reviews conduct karo — plan review karo.",
                "Adjustments make karo — changes aane par."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "SQA planning: Quality goals define karna, standards establish karna, resources allocate karna, schedules create karna, processes define karna. Best practices: Early planning, clear goals, established standards, allocated resources, defined processes, maintained documentation. Accha plan quality built karta hai."
            }
          ],
          "examQuestions": [
            {
              "question": "What is SQA planning? Why is it important?",
              "answer": "SQA planning = quality goals define karna, standards establish karna, resources allocate karna, schedules create karna, processes define karna. Important hai kyunki accha plan quality built karta hai — testing sirf end mein nahi. Quality early ensure karta hai."
            },
            {
              "question": "List the components of an SQA plan.",
              "answer": "SQA plan components: Quality Goals (measurable objectives), Standards & Procedures (coding, review, testing), Roles & Responsibilities (who is responsible), Schedule & Milestones (timeline), Metrics & Measures (how to measure), Documentation (plan document)."
            },
            {
              "question": "What are the best practices for SQA planning?",
              "answer": "Best practices: Quality goals early define, Standards establish, Resources allocate, Schedules create, Processes define, Documentation maintain, Reviews conduct, Adjustments make. Early planning important hai. Quality built-in karo — not tested-in."
            }
          ]
        },
        {
          "id": "product-process-quality",
          "number": "1.5",
          "title": "Product Quality and Process Quality",
          "subtitle": "Product quality vs process quality — difference aur importance",
          "icon": "cube",
          "accent": "#aa00ff",
          "englishDefinition": "Product quality refers to the characteristics of the final software product. Process quality refers to the quality of the development process used to create the product. Both are important: good processes lead to good products, and good products indicate good processes.",
          "intro": "Product quality aur process quality alag-alag concepts hain lekin ek doosre se related hain. Product quality final product ki quality hai. Process quality development process ki quality hai. Is chapter mein hum dekhenge ki dono kya hain aur unka relationship kya hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Product vs Process Quality",
              "body": "Product Quality = final software product ki quality. Reliability, usability, performance, maintainability.\n\nProcess Quality = development process ki quality. Planning, design, coding, testing processes. Standards, procedures, methodologies.\n\nDifference:\n- Product quality = outcome (what we get)\n- Process quality = approach (how we work)\n- Good process → Good product\n- Good product indicates good process",
              "chips": [
                "Product Quality",
                "Process Quality"
              ]
            },
            {
              "type": "cards",
              "title": "Product Quality Aspects",
              "cards": [
                {
                  "icon": "shield",
                  "title": "Reliability",
                  "body": "Software kabhi na kabhi crash nahi karta. Bugs kam hote hain. Stable chalta hai. User trust build karta hai."
                },
                {
                  "icon": "users",
                  "title": "Usability",
                  "body": "Aasani se use kiya ja sakta hai. User-friendly interface. Good UX. User satisfaction increase karta hai."
                },
                {
                  "icon": "speed",
                  "title": "Performance",
                  "body": "Fast chalta hai. Efficient hai. Resources ka accha use karta hai. User experience accha rakhta hai."
                },
                {
                  "icon": "wrench",
                  "title": "Maintainability",
                  "body": "Aasani se modify kiya ja sakta hai. Code readable hai. Documentation accha hai. Future changes easy hain."
                },
                {
                  "icon": "expand",
                  "title": "Scalability",
                  "body": "Growth handle karta hai. More users handle karta hai. More data handle karta hai. Future growth support karta hai."
                },
                {
                  "icon": "shield",
                  "title": "Security",
                  "body": "Secure hai. Vulnerabilities kam hain. Data protect karta hai. Attack se protect karta hai."
                }
              ]
            },
            {
              "type": "cards",
              "title": "Process Quality Aspects",
              "cards": [
                {
                  "icon": "target",
                  "title": "Planning",
                  "body": "Requirements clear hain. Goals defined hain. Resources allocated hain. Schedule realistic hai."
                },
                {
                  "icon": "design",
                  "title": "Design",
                  "body": "Architecture accha hai. Design documented hai. Design reviewed hai. Requirements follow karta hai."
                },
                {
                  "icon": "code",
                  "title": "Coding",
                  "body": "Coding standards follow hote hain. Code reviewed hota hai. Code documented hota hai. Best practices follow hote hain."
                },
                {
                  "icon": "test",
                  "title": "Testing",
                  "body": "Testing comprehensive hai. Coverage accha hai. Defects detected hain. Quality ensure karta hai."
                },
                {
                  "icon": "book",
                  "title": "Standards",
                  "body": "Standards established hain. Procedures defined hain. Follow hote hain. Consistency maintain hoti hai."
                },
                {
                  "icon": "chart",
                  "title": "Metrics",
                  "body": "Metrics defined hain. Measured hote hain. Tracked hote hain. Improvement ke liye use hote hain."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Product-Process Quality Relationship",
              "diagram": "product-process-quality",
              "caption": "Good Process → Good Product | Good Product Indicates Good Process"
            },
            {
              "type": "points",
              "title": "Relationship Between Product and Process Quality",
              "points": [
                "Good process → Good product — quality built-in.",
                "Good product indicates good process — outcome proves approach.",
                "Bad process → Bad product — quality issues.",
                "Bad product may indicate bad process — investigation needed.",
                "Both important — product quality outcome hai, process quality approach hai.",
                "Process improvement → product improvement — continuous improvement.",
                "Focus on both — ek ek karke nahi, dono saath."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Product quality = final product ki quality (reliability, usability, performance, maintainability, scalability, security). Process quality = development process ki quality (planning, design, coding, testing, standards, metrics). Relationship: Good process → Good product. Good product indicates good process. Dono important hain."
            }
          ],
          "examQuestions": [
            {
              "question": "Differentiate between product quality and process quality.",
              "answer": "Product Quality = final software product ki quality. Reliability, usability, performance, maintainability, scalability, security. Process Quality = development process ki quality. Planning, design, coding, testing, standards, metrics. Product quality = outcome, process quality = approach."
            },
            {
              "question": "What are the aspects of product quality?",
              "answer": "Product quality aspects: Reliability (stable, fewer bugs), Usability (user-friendly), Performance (fast, efficient), Maintainability (easy to modify), Scalability (handle growth), Security (protected from attacks). Sab aspects product quality define karte hain."
            },
            {
              "question": "What is the relationship between product and process quality?",
              "answer": "Relationship: Good process → Good product (quality built-in). Good product indicates good process (outcome proves approach). Bad process → Bad product. Bad product may indicate bad process. Dono important hain — focus on both. Process improvement → product improvement."
            }
          ]
        },
        {
          "id": "software-process-models",
          "number": "1.6",
          "title": "Software Process Models",
          "subtitle": "Different process models — Waterfall, Agile, Spiral, V-Model",
          "icon": "flow",
          "accent": "#ff0080",
          "englishDefinition": "Software process models define the approach to software development. Common models include Waterfall (linear), Agile (iterative), Spiral (risk-driven), V-Model (verification and validation), and Incremental models. Each model has strengths and weaknesses.",
          "intro": "Software process models development approach define karte hain. Alag-alag models alag-alag tarike se kaam karte hain. Is chapter mein hum dekhenge ki common process models kya hain, unki characteristics kya hain, aur unka use kab hota hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Process Models Kya Hain?",
              "body": "Process models = software development ka approach. Different models different situations ke liye suitable hain.\n\nCommon models:\n1. Waterfall — Linear, sequential\n2. Agile — Iterative, incremental\n3. Spiral — Risk-driven\n4. V-Model — Verification & Validation\n5. Incremental — Gradual development\n6. RAD — Rapid Application Development",
              "chips": [
                "Waterfall",
                "Agile",
                "Spiral",
                "V-Model",
                "Incremental"
              ]
            },
            {
              "type": "cards",
              "title": "Waterfall Model",
              "cards": [
                {
                  "icon": "down",
                  "title": "Linear Approach",
                  "body": "Sequential process. Ek phase khatam hone par doosra start hota hai. Phases: Requirements → Design → Coding → Testing → Deployment."
                },
                {
                  "icon": "check",
                  "title": "Advantages",
                  "body": "Simple hai. Easy to understand. Well-documented hai. Planning accha hai."
                },
                {
                  "icon": "warn",
                  "title": "Disadvantages",
                  "body": "Rigid hai. Changes difficult hain. Testing late hota hai. Customer feedback late milta hai."
                },
                {
                  "icon": "target",
                  "title": "When to Use",
                  "body": "Small projects. Well-defined requirements. Fixed budget aur timeline. Government projects."
                }
              ]
            },
            {
              "type": "cards",
              "title": "Agile Model",
              "cards": [
                {
                  "icon": "refresh",
                  "title": "Iterative Approach",
                  "body": "Iterative aur incremental. Short cycles (sprints). Customer feedback early. Adaptive hai."
                },
                {
                  "icon": "users",
                  "title": "Advantages",
                  "body": "Flexible hai. Customer involvement accha hai. Early delivery hoti hai. Quality accha hai."
                },
                {
                  "icon": "warn",
                  "title": "Disadvantages",
                  "body": "Costly hai. Documentation less hota hai. Team ka experience important hai. Scalability issues ho sakte hain."
                },
                {
                  "icon": "target",
                  "title": "When to Use",
                  "body": "Large projects. Changing requirements. Customer collaboration zaroori hai. Modern software development."
                }
              ]
            },
            {
              "type": "cards",
              "title": "Spiral Model",
              "cards": [
                {
                  "icon": "loop",
                  "title": "Risk-Driven",
                  "body": "Risk analysis important hai. Iterative approach. Four phases: Plan → Risk analysis → Engineer → Evaluate."
                },
                {
                  "icon": "check",
                  "title": "Advantages",
                  "body": "Risk management accha hai. Quality accha hai. Customer feedback accha hai. Good for large projects."
                },
                {
                  "icon": "warn",
                  "title": "Disadvantages",
                  "body": "Complex hai. Costly hai. Expertise zaroori hai. Duration long hota hai."
                },
                {
                  "icon": "target",
                  "title": "When to Use",
                  "body": "Large projects. High-risk projects. Mission-critical systems. Government projects."
                }
              ]
            },
            {
              "type": "cards",
              "title": "V-Model",
              "cards": [
                {
                  "icon": "check",
                  "title": "Verification & Validation",
                  "body": "Testing parallel hota hai. Verification (right product) aur Validation (right product). Left side: Verification. Right side: Validation."
                },
                {
                  "icon": "check",
                  "title": "Advantages",
                  "body": "Testing early start hota hai. Quality accha hai. Defects early detect hote hain. Documentation accha hai."
                },
                {
                  "icon": "warn",
                  "title": "Disadvantages",
                  "body": "Rigid hai. Changes difficult hain. Testing complex hai. Long duration hota hai."
                },
                {
                  "icon": "target",
                  "title": "When to Use",
                  "body": "Mission-critical systems. Safety-critical systems. Well-defined requirements. Government projects."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "Process Models Comparison",
              "diagram": "process-models-comparison",
              "caption": "Waterfall (Linear) | Agile (Iterative) | Spiral (Risk-Driven) | V-Model (Verification & Validation)"
            },
            {
              "type": "points",
              "title": "Choosing the Right Model",
              "points": [
                "Project size — small vs large.",
                "Requirements — clear vs changing.",
                "Risk level — low vs high.",
                "Customer involvement — low vs high.",
                "Budget aur timeline — fixed vs flexible.",
                "Team experience — beginner vs expert.",
                "Project type — simple vs complex."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Process models: Waterfall (linear, simple), Agile (iterative, flexible), Spiral (risk-driven, complex), V-Model (verification & validation, quality-focused). Each model strengths aur weaknesses hain. Right model choose karna project requirements pe depend karta hai."
            }
          ],
          "examQuestions": [
            {
              "question": "Describe the Waterfall model. What are its advantages and disadvantages?",
              "answer": "Waterfall model: Linear, sequential process. Phases: Requirements → Design → Coding → Testing → Deployment. Advantages: Simple, easy to understand, well-documented, good planning. Disadvantages: Rigid, changes difficult, testing late, customer feedback late. Use: Small projects, well-defined requirements."
            },
            {
              "question": "Explain the Agile model and its characteristics.",
              "answer": "Agile model: Iterative, incremental approach. Short cycles (sprints). Customer feedback early. Adaptive hai. Advantages: Flexible, customer involvement, early delivery, quality accha. Disadvantages: Costly, documentation less, team experience important. Use: Large projects, changing requirements."
            },
            {
              "question": "Compare Spiral and V-Model.",
              "answer": "Spiral Model: Risk-driven, iterative. Four phases: Plan → Risk analysis → Engineer → Evaluate. Advantages: Risk management, quality, customer feedback. Disadvantages: Complex, costly. V-Model: Verification & Validation. Testing parallel. Left side verification, right side validation. Advantages: Early testing, quality, early defect detection. Disadvantages: Rigid, complex, long duration."
            }
          ]
        },
        {
          "id": "qc-tools-modern",
          "number": "1.7",
          "title": "7 QC Tools and Modern Tools",
          "subtitle": "Quality Control tools aur modern tools",
          "icon": "tools",
          "accent": "#00aaff",
          "englishDefinition": "The 7 QC Tools are: Check Sheet, Flow Chart, Histogram, Pareto Chart, Cause and Effect Diagram (Fishbone), Scatter Diagram, and Control Chart. Modern tools include automated testing tools, code analysis tools, and quality management systems like JIRA, Jenkins, SonarQube, and Selenium.",
          "intro": "QC tools quality control mein use hote hain. 7 traditional QC tools hain jo problems solve karne mein help karte hain. Modern tools automated testing aur quality management ke liye use hote hain. Is chapter mein hum dekhenge ki dono types ke tools kya hain.",
          "sections": [
            {
              "type": "definition",
              "title": "7 QC Tools Kya Hain?",
              "body": "7 QC Tools:\n1. Check Sheet — Data collect karne ke liye\n2. Flow Chart — Process flow dikhane ke liye\n3. Histogram — Data distribution dikhane ke liye\n4. Pareto Chart — Problems prioritize karne ke liye\n5. Cause and Effect Diagram (Fishbone) — Root cause analysis ke liye\n6. Scatter Diagram — Relationship dikhane ke liye\n7. Control Chart — Process control ke liye\n\nYeh tools problems identify aur solve karne mein help karte hain.",
              "chips": [
                "Check Sheet",
                "Flow Chart",
                "Histogram",
                "Pareto Chart",
                "Fishbone",
                "Scatter",
                "Control Chart"
              ]
            },
            {
              "type": "cards",
              "title": "7 QC Tools Details",
              "cards": [
                {
                  "icon": "list",
                  "title": "Check Sheet",
                  "body": "Data collect karta hai. Frequency count karta hai. Simple tool hai. Problems identify karta hai."
                },
                {
                  "icon": "flow",
                  "title": "Flow Chart",
                  "body": "Process flow dikhata hai. Steps dikhata hai. Decisions dikhata hai. Complex processes simplify karta hai."
                },
                {
                  "icon": "chart",
                  "title": "Histogram",
                  "body": "Data distribution dikhata hai. Bar chart hota hai. Patterns dikhata hai. Variability measure karta hai."
                },
                {
                  "icon": "chart",
                  "title": "Pareto Chart",
                  "body": "Problems prioritize karta hai. 80/20 rule follow karta hai. Important problems identify karta hai."
                },
                {
                  "icon": "fish",
                  "title": "Fishbone Diagram",
                  "body": "Root cause analysis karta hai. Causes identify karta hai. Effect pe focus karta hai. Problem solve karta hai."
                },
                {
                  "icon": "scatter",
                  "title": "Scatter Diagram",
                  "body": "Relationship dikhata hai. Correlation check karta hai. Patterns dikhata hai. Relationship measure karta hai."
                },
                {
                  "icon": "chart",
                  "title": "Control Chart",
                  "body": "Process control karta hai. Variation measure karta hai. Control limits set karta hai. Quality maintain karta hai."
                }
              ]
            },
            {
              "type": "cards",
              "title": "Modern Tools",
              "cards": [
                {
                  "icon": "test",
                  "title": "Automated Testing",
                  "body": "Selenium, JUnit, TestNG. Automated tests run karte hain. Regression testing easy hai. Coverage accha hai."
                },
                {
                  "icon": "code",
                  "title": "Code Analysis",
                  "body": "SonarQube, ESLint, PMD. Code quality check karte hain. Best practices enforce karte hain. Defects detect karte hain."
                },
                {
                  "icon": "dashboard",
                  "title": "Quality Management",
                  "body": "JIRA, QUALCENTER, TestRail. Quality track karte hain. Defects manage karte hain. Reports generate karte hain."
                },
                {
                  "icon": "refresh",
                  "title": "CI/CD Tools",
                  "body": "Jenkins, GitLab CI, CircleCI. Continuous integration aur deployment. Automated builds aur tests. Quality ensure karte hain."
                },
                {
                  "icon": "performance",
                  "title": "Performance Testing",
                  "body": "JMeter, LoadRunner, Gatling. Performance test karte hain. Load test karte hain. Stress test karte hain."
                },
                {
                  "icon": "security",
                  "title": "Security Testing",
                  "body": "OWASP ZAP, Burp Suite, Nessus. Security vulnerabilities detect karte hain. Attack simulate karte hain. Security ensure karte hain."
                }
              ]
            },
            {
              "type": "diagram",
              "title": "QC Tools Overview",
              "diagram": "qc-tools-overview",
              "caption": "7 QC Tools — Check Sheet, Flow Chart, Histogram, Pareto Chart, Fishbone, Scatter, Control Chart"
            },
            {
              "type": "points",
              "title": "When to Use QC Tools",
              "points": [
                "Check Sheet — Data collect karne ke liye.",
                "Flow Chart — Process understand karne ke liye.",
                "Histogram — Data distribution dikhane ke liye.",
                "Pareto Chart — Problems prioritize karne ke liye.",
                "Fishbone — Root cause analysis karne ke liye.",
                "Scatter Diagram — Relationship dikhane ke liye.",
                "Control Chart — Process control karne ke liye.",
                "Modern tools — Automated testing aur quality management ke liye."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "7 QC Tools: Check Sheet (data collect), Flow Chart (process flow), Histogram (distribution), Pareto Chart (prioritize), Fishbone (root cause), Scatter (relationship), Control Chart (process control). Modern tools: Automated testing (Selenium), Code analysis (SonarQube), Quality management (JIRA), CI/CD (Jenkins), Performance testing (JMeter), Security testing (OWASP)."
            }
          ],
          "examQuestions": [
            {
              "question": "List the 7 QC tools and explain their uses.",
              "answer": "7 QC tools: Check Sheet (data collection), Flow Chart (process flow), Histogram (data distribution), Pareto Chart (problem prioritization), Cause and Effect Diagram/Fishbone (root cause analysis), Scatter Diagram (relationship), Control Chart (process control). Sab tools problems identify aur solve karne mein help karte hain."
            },
            {
              "question": "Explain the Pareto Chart and its importance.",
              "answer": "Pareto Chart: Bar chart with cumulative line. 80/20 rule follow karta hai — 80% problems 20% causes se aate hain. Problems prioritize karta hai. Important problems identify karta hai. Focus important problems pe rehta hai. Effective problem solving tool hai."
            },
            {
              "question": "What are modern quality tools? Give examples.",
              "answer": "Modern tools: Automated testing (Selenium, JUnit), Code analysis (SonarQube, ESLint), Quality management (JIRA, TestRail), CI/CD tools (Jenkins, GitLab CI), Performance testing (JMeter, LoadRunner), Security testing (OWASP ZAP, Burp Suite). Modern tools automated aur efficient hain. Quality ensure karte hain."
            }
          ]
        },
        {
          "id": "qa-models",
          "number": "1.8",
          "title": "Quality Assurance Models",
          "subtitle": "ISO-9000, CMM, CMMI, TMM, SPICE, Malcolm Baldrige, P-CMM",
          "icon": "check",
          "accent": "#aa00ff",
          "englishDefinition": "Quality Assurance Models are frameworks that provide structured approaches to implementing and improving software quality processes. ISO-9000 is an international standard for quality management. CMM (Capability Maturity Model) and CMMI (Capability Maturity Model Integration) are frameworks for process improvement. TMM (Test Maturity Model) focuses on testing processes. SPICE (Software Process Improvement and Capability Determination) is an international standard. Malcolm Baldrige Model is a performance excellence framework. P-CMM (People-Capability Maturity Model) focuses on human resources.",
          "intro": "Quality Assurance Models different frameworks hain jo software quality processes implement aur improve karne ka structured approach provide karte hain. Is topic mein hum dekhenge ISO-9000, CMM, CMMI, TMM, SPICE, Malcolm Baldrige aur P-CMM models. Har model ka different focus hota hai — kuch processes par focus karte hain, kuch people par, kuch overall quality management par.",
          "sections": [
            {
              "type": "definition",
              "title": "Quality Assurance Models kya hain?",
              "body": "Quality Assurance Models frameworks hain jo quality processes structured approach se implement aur improve karte hain. Different models alag alag focus par focus karte hain:\n\n1. ISO-9000 — International standard for quality management\n2. CMM/CMMI — Process maturity aur improvement\n3. TMM — Testing process maturity\n4. SPICE — Software process improvement\n5. Malcolm Baldrige — Performance excellence\n6. P-CMM — People capability maturity",
              "chips": [
                "ISO-9000",
                "CMM",
                "CMMI",
                "TMM",
                "SPICE"
              ]
            },
            {
              "type": "cards",
              "title": "ISO-9000 Series",
              "cards": [
                {
                  "icon": "check",
                  "title": "ISO-9000",
                  "body": "Quality management standard. Quality systems ka requirements define karta hai. International level par recognized hai."
                },
                {
                  "icon": "check",
                  "title": "ISO-9001",
                  "body": "Quality management system requirements. Organizations ko certify karta hai. Compliance demonstrate karta hai."
                },
                {
                  "icon": "check",
                  "title": "Benefits",
                  "body": "International recognition milta hai. Customer satisfaction improve hota hai. Quality culture develop hota hai."
                }
              ]
            },
            {
              "type": "points",
              "title": "CMM 5 Levels",
              "points": [
                "Level 1 — Initial: Processes ad hoc hain. Chaotic hain.",
                "Level 2 — Repeatable: Basic project management processes established hain.",
                "Level 3 — Defined: Software process documented, standardized aur integrated hain.",
                "Level 4 — Managed: Quantitative process control. Detailed measures collect karte hain.",
                "Level 5 — Optimizing: Continuous process improvement. Innovations deploy karte hain."
              ]
            },
            {
              "type": "diagram",
              "title": "QA Models Overview",
              "diagram": "qa-models-overview",
              "caption": "QA Models — ISO-9000, CMM, CMMI, TMM, SPICE, Malcolm Baldrige, P-CMM"
            },
            {
              "type": "points",
              "title": "Model Selection",
              "points": [
                "ISO-9000 — Quality management standard ke liye.",
                "CMM/CMMI — Process maturity improve karne ke liye.",
                "TMM — Testing process improve karne ke liye.",
                "SPICE — Process assessment ke liye.",
                "Malcolm Baldrige — Organizational excellence ke liye.",
                "P-CMM — People capability improve karne ke liye."
              ]
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "QA Models: ISO-9000 (quality management standard), CMM (5 maturity levels), CMMI (CMM integration), TMM (testing maturity), SPICE (process assessment), Malcolm Baldrige (performance excellence), P-CMM (people capability). Har model alag focus par focus karta hai."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain ISO-9000 series of quality standards.",
              "answer": "ISO-9000 series: ISO-9000 (quality management standard), ISO-9001 (quality management system requirements), ISO-9002 (production/installation requirements), ISO-9003 (final inspection requirements). International recognition milta hai. Quality management principles follow karte hain."
            },
            {
              "question": "Describe the 5 levels of CMM.",
              "answer": "CMM 5 levels: Level 1 — Initial (ad hoc processes), Level 2 — Repeatable (basic project management), Level 3 — Defined (documented, standardized processes), Level 4 — Managed (quantitative process control), Level 5 — Optimizing (continuous process improvement)."
            },
            {
              "question": "What is CMMI and how is it different from CMM?",
              "answer": "CMMI (Capability Maturity Model Integration) — CMM ka updated version. Multiple disciplines (software, systems, people) integrate karta hai. 22 process areas cover karta hai. 5 levels same hain. Better improvement guidance provide karta hai."
            }
          ]
        },
        {
          "id": "sqa-trends",
          "number": "1.9",
          "title": "Software Quality Assurance Trends",
          "subtitle": "Modern SQA trends — PSP, TSP, OO methodology aur emerging areas",
          "icon": "trend",
          "accent": "#00ff88",
          "englishDefinition": "Software Quality Assurance is continuously evolving with new trends and methodologies. Modern trends include PSP (Personal Software Process), TSP (Team Software Process), Object-Oriented methodology, CMMI integration, Six Sigma in SQA, automation testing, and continuous quality improvement approaches. These trends aim to improve quality, reduce costs, and increase efficiency.",
          "intro": "Software quality assurance aaj kal badal raha hai — naye methods aur technologies aate ja rahe hain. PSP aur TSP aise process models hain jo individual aur team quality improve karte hain. OO methodology objects pe based design hai. Modern SQA mein automation, CMMI, aur Six Sigma ka use badh raha hai. Is chapter mein hum in trends ko detailed mein dekhenge.",
          "sections": [
                {
                  "type": "definition",
                  "title": "SQA Trends kya hain?",
                  "kicker": "Definition",
                  "body": "SQA trends modern quality assurance approaches hain jo software quality improve karne ke liye use hote hain. Ye trends traditional QA approaches ko replace ya enhance karte hain. Main trends: PSP (Personal Software Process), TSP (Team Software Process), Object-Oriented Methodology, CMMI, Six Sigma, Automation Testing, Continuous Quality Improvement. Ye trends quality, cost, aur efficiency improve karte hain.",
                  "body2": "Simple words mein: Jaise technology badalti hai, waise hi software quality methods bhi badalte hain. Naye trends aate hain jo quality aur efficiency aur improve karte hain. PSP aur TSP aise naye methods hain jo individual aur team quality improve karte hain.",
                  "chips": ["PSP", "TSP", "OO", "CMMI", "Automation"],
                },
                {
                  "type": "cards",
                  "title": "PSP vs TSP",
                  "kicker": "Personal aur Team Process",
                  "cards": [{
                      "icon": "user",
                      "title": "PSP (Personal Software Process)",
                      "body": "PSP individual developers ka structured process hai. PSP mein planning, design, code, test, aur postmortem phases hain. Individual quality improve karta hai. Developers apna process measure aur improve karte hain. PSP ka goal hai individual performance improve karna."
                    },
{
                      "icon": "users",
                      "title": "TSP (Team Software Process)",
                      "body": "TSP team-based development process hai. TSP mein team roles aur processes structured hain. Team performance improve karta hai. TSP teams PSP principles use karte hain. TSP ka goal hai team quality aur productivity improve karna."
                    },
{
                      "icon": "check",
                      "title": "PSP vs TSP Difference",
                      "body": "PSP individual hai — single developer ka process. TSP team hai — multiple developers ka process. PSP individual quality improve karta hai. TSP team quality aur productivity improve karta hai. Dono CSV (Common Software Process) pe based hain."
                    }
                  ],
                },
                {
                  "type": "definition",
                  "title": "PSP (Personal Software Process)",
                  "kicker": "PSP Overview",
                  "body": "PSP Individual Software Process hai. PSP 4 phases pe based hai: Planning, Design, Code, Test. Planning: Tasks plan karna, resources plan karna. Design: Detailed design banaya jata hai. Code: Code likhna. Test: Testing karna, defects find karna. Postmortem: Process analysis karna, improvement plan karna. PSP benefits: Individual quality improve karta hai, defects reduce karta hai, productivity improve karta hai.",
                  "body2": "PSP aise samjho — ek student ka personal study plan. Har student apna plan banata hai, topics study karta hai, exam deta hai, aur apna performance analyze karta hai. PSP bhi wahi hai — developer apna process measure aur improve karta hai.",
                  "chips": ["Planning", "Design", "Code", "Test"],
                },
                {
                  "type": "points",
                  "title": "PSP Phases Details",
                  "kicker": "PSP Phases",
                  "points": ["Planning: Tasks plan karna. Resources plan karna. Time estimate karna. Size estimate karna.", "Design: Detailed design banaya jata hai. Architecture design. Module design. Interface design.", "Code: Code likhna. Coding standards follow karna. Code documentation karna.", "Test: Testing karna. Defects find karna. Test cases design karna. Test results record karna.", "Postmortem: Process analysis karna. Defects analysis karna. Improvement plan karna. Process metrics track karna."],
                },
                {
                  "type": "definition",
                  "title": "TSP (Team Software Process)",
                  "kicker": "TSP Overview",
                  "body": "TSP Team Software Process hai. TSP PSP principles use karta hai team level pe. TSP roles: Team Leader, Development Manager, Quality Manager, Planning Manager, Design Manager, Test Manager. TSP phases: Launch, Planning, Requirements, Design, Implementation, Test, Postmortem. TSP benefits: Team quality improve karta hai, team productivity improve karta hai, defects reduce karta hai, team coordination improve karta hai.",
                  "body2": "TSP aise samjho — ek cricket team ka game plan. Captain (Team Leader) plan banata hai, coach (Development Manager) strategy dekhata hai, aur sab milkar quality performance dikhate hain. TSP bhi wahi hai — team ka structured process hai.",
                  "chips": ["Team Leader", "Quality Manager", "Planning", "Design"],
                },
                {
                  "type": "points",
                  "title": "TSP Phases Details",
                  "kicker": "TSP Phases",
                  "points": ["Launch: Team formation. Roles define karna. Objectives define karna. Process launch karna.", "Planning: Project plan banaya jata hai. Schedule plan karna. Resources plan karna. Risks plan karna.", "Requirements: Requirements develop karna. Requirements analyze karna. Requirements document karna.", "Design: Architecture design. Detailed design. Design review karna. Design validation karna.", "Implementation: Code develop karna. Unit testing karna. Code review karna.", "Test: Integration testing. System testing. UAT. Defects fix karna.", "Postmortem: Process analysis karna. Team performance evaluate karna. Improvement plan karna."],
                },
                {
                  "type": "definition",
                  "title": "Object-Oriented Methodology",
                  "kicker": "OO Methodology",
                  "body": "Object-Oriented Methodology software design objects pe based hai. OO concepts: Encapsulation (data aur methods combine), Inheritance (code reuse), Polymorphism (flexible interfaces), Abstraction (complexity hide karna). OO benefits: Code reuse increase karta hai. Maintainability improve karta hai. Development time reduce karta hai. Quality improve karta hai.",
                  "body2": "OO methodology aise samjho — ek building banana. Building mein floors (classes), rooms (objects), doors (methods) hote hain. Har room apne aap ek unit hai, lekin building ke saath connected bhi hai. OO bhi wahi hai — objects ek doosre se connected hote hain aur code reuse hota hai.",
                  "chips": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
                },
                {
                  "type": "points",
                  "title": "OO Methodology Concepts",
                  "kicker": "OO Concepts",
                  "points": ["Encapsulation: Data aur methods combine karna. Internal details hide karna. Interface expose karna. Data protection provide karna.", "Inheritance: Parent class se child class inherits karna. Code reuse karna. Hierarchy create karna. Specialization karna.", "Polymorphism: Ek interface different behaviors show karna. Method overloading karna. Method overriding karna. Flexible interfaces provide karna.", "Abstraction: Complexity hide karna. Essential features expose karna. Implementation details hide karna. Simplicity maintain karna.", "Classes: Object templates. Properties define karna. Methods define karna. Objects create karna.", "Objects: Class instances. Data hold karte hain. Methods execute karte hain. Interaction karte hain.", "Benefits: Code reuse increase karta hai. Maintainability improve karta hai. Development time reduce karta hai. Quality improve karta hai. Scalability improve karta hai."],
                },
                {
                  "type": "definition",
                  "title": "Modern SQA Trends",
                  "kicker": "Emerging Trends",
                  "body": "Modern SQA trends multiple areas mein faile hue hain: 1. CMMI Integration — Capability Maturity Model Integration. Process maturity improve karta hai. 2. Six Sigma in SQA — Defects minimize karta hai. Process variation reduce karta hai. 3. Automation Testing — Automated testing implement karna. Test coverage improve karta hai. 4. Continuous Quality Improvement — Continuous improvement cycles. Kaizen approach. 5. DevOps Integration — Development aur operations integrate karna. Continuous delivery karna. 6. Agile Quality — Agile methods mein quality integrate karna. Iterative testing karna.",
                  "body2": "Modern trends aise samjho — naye techniques jo quality aur efficiency aur improve karte hain. CMMI process maturity improve karta hai. Automation testing speed aur accuracy improve karta hai. DevOps development aur operations ko milata hai.",
                  "chips": ["CMMI", "Six Sigma", "Automation", "DevOps", "Agile"],
                },
                {
                  "type": "points",
                  "title": "Trend Selection",
                  "kicker": "Choosing Trends",
                  "points": ["Project Size: Small projects ke liye Agile. Large projects ke liye CMMI.", "Team Experience: Experienced teams TSP use kar sakte hain. New teams PSP se start kar sakte hain.", "Quality Goals: High quality ke liye Six Sigma. Fast delivery ke liye Agile.", "Budget: Limited budget ke liye PSP. Large budget ke liye TSP.", "Timeline: Tight timeline ke liye Automation testing. Flexible timeline ke liye OO methodology.", "Technology: Modern technology ke liye DevOps. Traditional technology ke liye CMMI.", "Process Maturity: Low maturity ke liye PSP. High maturity ke liye TSP + CMMI.", "Team Structure: Individual developers ke liye PSP. Team-based development ke liye TSP."],
                },
                {
                  "type": "diagram",
                  "title": "SQA Trends Overview",
                  "kicker": "Diagram",
                  "diagram": "sqa-trends-overview",
                  "caption": "SQA Trends — PSP, TSP, OO Methodology, CMMI, Six Sigma, Automation, DevOps",
                },
                {
                  "type": "recap",
                  "title": "Recap",
                  "kicker": "5 Seconds Mein Yaad Karo",
                  "points": ["SQA Trends: PSP, TSP, OO methodology, CMMI, Six Sigma, Automation, DevOps, Agile.", "PSP: Individual process — Planning, Design, Code, Test, Postmortem.", "TSP: Team process — Launch, Planning, Requirements, Design, Implementation, Test, Postmortem.", "OO Methodology: Encapsulation, Inheritance, Polymorphism, Abstraction.", "Modern Trends: CMMI (maturity), Six Sigma (defects), Automation (speed), DevOps (integration).", "Trend Selection: Project size, team experience, quality goals, budget, timeline, technology."],
                }
  ],
          "examQuestions": [
                {
                  "question": "Explain PSP and TSP with their benefits.",
                  "answer": "**PSP (Personal Software Process):** Individual developers ka structured process. 4 phases: Planning (tasks plan, resources plan, time estimate), Design (detailed design, architecture), Code (coding, documentation), Test (testing, defects find), Postmortem (process analysis, improvement plan).\n\n**PSP Benefits:** Individual quality improve karta hai. Defects reduce karta hai. Productivity improve karta hai. Developers apna process measure aur improve karte hain.\n\n**TSP (Team Software Process):** Team-based development process. PSP principles team level pe use karta hai. Roles: Team Leader, Development Manager, Quality Manager, Planning Manager, Design Manager, Test Manager. Phases: Launch, Planning, Requirements, Design, Implementation, Test, Postmortem.\n\n**TSP Benefits:** Team quality improve karta hai. Team productivity improve karta hai. Defects reduce karta hai. Team coordination improve karta hai.\n\n**Difference:** PSP individual hai — single developer. TSP team hai — multiple developers. PSP individual quality improve karta hai. TSP team quality aur productivity improve karta hai."
                },
                {
                  "question": "What is Object-Oriented Methodology? Explain its key concepts.",
                  "answer": "**Object-Oriented Methodology:** Software design objects pe based hai. OO concepts objects aur classes pe based design provide karte hain.\n\n**Key Concepts:**\n\n1. **Encapsulation** — Data aur methods combine karna. Internal details hide karna. Interface expose karna. Data protection provide karna. Example: Class mein data private hota hai, sirf public methods se access hota hai.\n\n2. **Inheritance** — Parent class se child class inherits karna. Code reuse karna. Hierarchy create karna. Specialization karna. Example: Vehicle class se Car, Bike, Truck inherits karte hain.\n\n3. **Polymorphism** — Ek interface different behaviors show karna. Method overloading karna. Method overriding karna. Flexible interfaces provide karna. Example: Ek 'calculate' method different operations perform karta hai.\n\n4. **Abstraction** — Complexity hide karna. Essential features expose karna. Implementation details hide karna. Simplicity maintain karna. Example: Car ka user sirf steering, brakes aur accelerator dekhta hai — internal engine details nahi.\n\n**Benefits:** Code reuse increase karta hai. Maintainability improve karta hai. Development time reduce karta hai. Quality improve karta hai. Scalability improve karta hai.\n\n**Diagram:** Refer to SQA Trends Overview diagram."
                },
                {
                  "question": "Describe modern SQA trends and how to select them.",
                  "answer": "**Modern SQA Trends:**\n\n1. **CMMI Integration** — Capability Maturity Model Integration. Process maturity improve karta hai. 5 levels: Initial, Repeatable, Defined, Managed, Optimizing.\n\n2. **Six Sigma in SQA** — Defects minimize karta hai. Process variation reduce karta hai. DMAIC methodology: Define, Measure, Analyze, Improve, Control.\n\n3. **Automation Testing** — Automated testing implement karna. Test coverage improve karta hai. Speed aur accuracy improve karta hai. Tools: Selenium, JIRA, TestRail.\n\n4. **Continuous Quality Improvement** — Continuous improvement cycles. Kaizen approach. PDCA cycle: Plan, Do, Check, Act.\n\n5. **DevOps Integration** — Development aur operations integrate karna. Continuous delivery karna. CI/CD pipelines.\n\n6. **Agile Quality** — Agile methods mein quality integrate karna. Iterative testing karna. Sprint-based quality.\n\n**Trend Selection Factors:**\n- **Project Size:** Small projects ke liye Agile. Large projects ke liye CMMI.\n- **Team Experience:** Experienced teams TSP use kar sakte hain. New teams PSP se start kar sakte hain.\n- **Quality Goals:** High quality ke liye Six Sigma. Fast delivery ke liye Agile.\n- **Budget:** Limited budget ke liye PSP. Large budget ke liye TSP.\n- **Timeline:** Tight timeline ke liye Automation testing.\n- **Technology:** Modern technology ke liye DevOps.\n- **Process Maturity:** Low maturity ke liye PSP. High maturity ke liye TSP + CMMI.\n\n**Diagram:** Refer to SQA Trends Overview diagram."
                },
                {
                  "question": "Differentiate between PSP and TSP.",
                  "answer": "**PSP vs TSP:**\n\n| Aspect | PSP | TSP |\n|---|---|---|\n| **Scope** | Individual developer | Team of developers |\n| **Focus** | Personal quality | Team quality |\n| **Phases** | Planning, Design, Code, Test, Postmortem | Launch, Planning, Requirements, Design, Implementation, Test, Postmortem |\n| **Roles** | Single developer | Team Leader, Quality Manager, Planning Manager, etc. |\n| **Goal** | Individual performance improve karna | Team quality aur productivity improve karna |\n| **Complexity** | Simpler — individual level | Complex — team level |\n| **Measurement** | Personal metrics | Team metrics |\n| **Benefits** | Individual quality, defects reduce | Team coordination, productivity |\n\n**Key Point:** PSP individual level pe work karta hai. TSP team level pe work karta hai. PSP TSP ka base hai — TSP PSP principles use karta hai team level pe. Dono CSV (Common Software Process) pe based hain.\n\n**Diagram:** Refer to SQA Trends Overview diagram."
                }
  ]
        },
        {
          "id": "software-security-testing",
          "number": "1.10",
          "title": "Testing Software System Security",
          "subtitle": "Security testing, Six-Sigma, TQM aur software security validation",
          "icon": "shield",
          "accent": "#00ff88",
          "englishDefinition": "Testing Software System Security involves validating that software systems are secure against unauthorized access, attacks, and vulnerabilities. Security testing includes vulnerability assessment, penetration testing, code review, and security audits. Six-Sigma is a methodology for minimizing defects and variations in processes. TQM (Total Quality Management) is a comprehensive approach to quality improvement involving all organizational members. Security testing ensures data confidentiality, integrity, availability, authentication, and authorization mechanisms work correctly.",
          "intro": "Software system security testing alag alag techniques hain jo software ke vulnerabilities detect aur prevent karne mein help karte hain. Six-Sigma quality improvement methodology hai jo defects minimize karti hai. TQM organization-wide quality improvement approach hai. Hum dekhenge ki security testing kya hai, Six-Sigma aur TQM kya hai, aur yeh kaise software quality improve karte hain.",
          "sections": [
                {
                  "type": "definition",
                  "title": "Software Security Testing",
                  "kicker": "Definition",
                  "body": "Security testing software systems ke security validate karne ka process hai. Objectives: Confidentiality (data private), Integrity (data correct), Availability (system accessible), Authentication (user identity verify), Authorization (access control). Security testing types: Vulnerability scanning, Penetration testing, Code review, Security audits, Risk assessment. Security testing ensures data confidentiality, integrity, availability, authentication, aur authorization mechanisms work correctly.",
                  "body2": "Security testing aise samjho — ek ghar ki security check. Ghar mein locks (authentication), cameras (monitoring), alarms (alerts) hote hain. Security testing mein hum check karte hain ki locks kaam kar rahe hain, cameras working hain, aur alarms set hain. Software mein bhi wahi hai — hum check karte hain ki data safe hai, system accessible hai, aur unauthorized access roka gaya hai.",
                  "chips": ["Confidentiality", "Integrity", "Availability", "Authentication", "Authorization"],
                },
                {
                  "type": "definition",
                  "title": "Security Testing Objectives",
                  "kicker": "5 Objectives",
                  "body": "Security testing 5 objectives pe focus karta hai: 1. Confidentiality — Data private hai. Unauthorized users data access nahi kar sakte. 2. Integrity — Data correct hai. Data tamper nahi hua hai. 3. Availability — System accessible hai. System down nahi hai. 4. Authentication — User identity verify hota hai. User ka identity confirm hota hai. 5. Authorization — Access control hai. Authorized users hi access kar sakte hain. Ye 5 objectives CIA Triad ka part hain.",
                  "chips": ["Privacy", "Correctness", "Access", "Identity", "Control"],
                },
                {
                  "type": "points",
                  "title": "Security Testing Types",
                  "kicker": "Testing Types",
                  "points": ["Vulnerability Scanning — Automatic tools se vulnerabilities detect karna. Tools: Nessus, OpenVAS. Vulnerabilities scan karna.", "Penetration Testing — Hacker ki tarah attack karna. System ko hack karne ka attempt karna. Vulnerabilities exploit karna.", "Code Review — Code manual review karna. Security issues check karna. Code patterns analyze karna.", "Security Audits — Security policies check karna. Compliance verify karna. Security standards check karna.", "Risk Assessment — Security risks identify karna. Risk levels assess karna. Mitigation plan karna."],
                },
                {
                  "type": "definition",
                  "title": "Six-Sigma",
                  "kicker": "Six-Sigma Overview",
                  "body": "Six-Sigma quality improvement methodology hai jo defects minimize karti hai. Six-Sigma process variation reduce karta hai. DMAIC framework: Define (problem define karna), Measure (current performance measure karna), Analyze (root cause analyze karna), Improve (solutions implement karna), Control (results control karna). DMADV framework: Define (design goals define karna), Measure (design requirements measure karna), Analyze (design alternatives analyze karna), Design (optimal design design karna), Verify (design verify karna). Six-Sigma defects 3.4 per million opportunities tak reduce karta hai.",
                  "body2": "Six-Sigma aise samjho — ek restaurant mein khana banate hain. Agar ek dish mein 1000 mein se 3.4 baar problem aati hai, toh yeh Six-Sigma hai. Yeh batata hai ki process mein kitna variation hai. Lower sigma = less variation = better quality.",
                  "chips": ["DMAIC", "DMADV", "3.4 DPMO"],
                },
                {
                  "type": "points",
                  "title": "Six-Sigma Details",
                  "kicker": "Six-Sigma Phases",
                  "points": ["Define: Problem define karna. Goals define karna. Project scope define karna. Customer requirements define karna.", "Measure: Current performance measure karna. Data collect karna. Process baseline establish karna. Defects measure karna.", "Analyze: Root cause analyze karna. Causes identify karna. Data analysis karna. Variation analyze karna.", "Improve: Solutions develop karna. Solutions implement karna. Defects reduce karna. Process improve karna.", "Control: Results control karna. Improvements maintain karna. Controls implement karna. Standards document karna.", "DMADV: Define (design goals), Measure (requirements), Analyze (alternatives), Design (optimal design), Verify (design verify).", "Sigma Levels: 1 Sigma = 69% defects. 3 Sigma = 66,807 DPMO. 6 Sigma = 3.4 DPMO. Higher sigma = better quality.", "Benefits: Quality improve karta hai. Cost reduce karta hai. Customer satisfaction improve karta hai. Process efficiency improve karta hai."],
                },
                {
                  "type": "definition",
                  "title": "TQM (Total Quality Management)",
                  "kicker": "TQM Overview",
                  "body": "TQM organization-wide quality improvement approach hai. TQM principles: Customer focus (customer needs pe focus), Total involvement (sabhi employees involve), Continuous improvement (continuous improvement), Fact-based decision making (facts pe based decisions), Systematic approach (systematic approach). TQM tools: SPC (Statistical Process Control), Quality circles, Benchmarking, Flowcharts, Cause-effect diagrams, Pareto charts. TQM benefits: Quality improve karta hai, Productivity increase karta hai, Customer satisfaction improve karta hai, Waste reduce karta hai.",
                  "body2": "TQM aise samjho — ek school ka principal har teacher, student, aur staff se quality improve karne ke liye kaam karta hai. Sirf ek teacher nahi — sab milkar quality improve karte hain. TQM bhi wahi hai — organization ka har member quality improve karta hai.",
                  "chips": ["Customer focus", "Total involvement", "Continuous improvement", "Fact-based"],
                },
                {
                  "type": "points",
                  "title": "TQM Details",
                  "kicker": "TQM Principles",
                  "points": ["Customer Focus: Customer needs pe focus. Customer satisfaction improve karna. Quality customer expectations meet karna.", "Total Involvement: Sabhi employees involve. Har employee quality improve karta hai. Teamwork promote karna.", "Continuous Improvement: Continuous improvement. Kaizen approach. PDCA cycle: Plan, Do, Check, Act.", "Fact-Based Decisions: Facts pe based decisions. Data analysis karna. Metrics use karna. Evidence-based decisions.", "Systematic Approach: Systematic approach. Processes integrate karna. Quality system develop karna.", "TQM Tools: SPC (Statistical Process Control) — process variation control karna. Quality circles — group discussion. Benchmarking — best practices compare karna.", "Benefits: Quality improve karta hai. Productivity increase karta hai. Customer satisfaction improve karta hai. Waste reduce karta hai. Employee morale improve karta hai.", "TQM vs Six-Sigma: TQM organization-wide hai. Six-Sigma specific problems solve karta hai. Dono quality improve karte hain."],
                },
                {
                  "type": "diagram",
                  "title": "Security Testing Overview",
                  "kicker": "Diagram",
                  "diagram": "security-testing-overview",
                  "caption": "Security Testing — Six-Sigma, TQM, Vulnerability Assessment, Penetration Testing",
                },
                {
                  "type": "recap",
                  "title": "Recap",
                  "kicker": "5 Seconds Mein Yaad Karo",
                  "points": ["Security Testing: Confidentiality, Integrity, Availability, Authentication, Authorization.", "Security Testing Types: Vulnerability scanning, Penetration testing, Code review, Security audits, Risk assessment.", "Six-Sigma: DMAIC (Define, Measure, Analyze, Improve, Control). 3.4 DPMO target.", "TQM: Customer focus, Total involvement, Continuous improvement, Fact-based decisions.", "Six-Sigma specific problems solve karta hai. TQM organization-wide quality improve karta hai."],
                }
  ],
          "examQuestions": [
                {
                  "question": "Explain Six-Sigma methodology with its phases.",
                  "answer": "**Six-Sigma:** Quality improvement methodology jo defects minimize karti hai. Process variation reduce karta hai.\n\n**DMAIC Framework (5 Phases):**\n\n1. **Define** — Problem define karna. Goals define karna. Project scope define karna. Customer requirements define karna. Yeh phase mein problem clear kiya jata hai.\n\n2. **Measure** — Current performance measure karna. Data collect karna. Process baseline establish karna. Defects measure karna. Yeh phase mein current state measure kiya jata hai.\n\n3. **Analyze** — Root cause analyze karna. Causes identify karna. Data analysis karna. Variation analyze karna. Yeh phase mein root causes find kiye jaate hain.\n\n4. **Improve** — Solutions develop karna. Solutions implement karna. Defects reduce karna. Process improve karna. Yeh phase mein solutions implement kiye jaate hain.\n\n5. **Control** — Results control karna. Improvements maintain karna. Controls implement karna. Standards document karna. Yeh phase mein improvements control kiye jaate hain.\n\n**DMADV Framework:** Define (design goals), Measure (requirements), Analyze (alternatives), Design (optimal design), Verify (design verify).\n\n**Sigma Levels:** 1 Sigma = 69% defects. 3 Sigma = 66,807 DPMO. 6 Sigma = 3.4 DPMO. Higher sigma = better quality.\n\n**Benefits:** Quality improve karta hai. Cost reduce karta hai. Customer satisfaction improve karta hai.\n\n**Diagram:** Refer to Security Testing Overview diagram."
                },
                {
                  "question": "What is TQM? Explain its principles and benefits.",
                  "answer": "**TQM (Total Quality Management):** Organization-wide quality improvement approach. Har employee quality improve karta hai.\n\n**5 Principles:**\n\n1. **Customer Focus** — Customer needs pe focus. Customer satisfaction improve karna. Quality customer expectations meet karna.\n\n2. **Total Involvement** — Sabhi employees involve. Har employee quality improve karta hai. Teamwork promote karna.\n\n3. **Continuous Improvement** — Continuous improvement. Kaizen approach. PDCA cycle: Plan, Do, Check, Act.\n\n4. **Fact-Based Decisions** — Facts pe based decisions. Data analysis karna. Metrics use karna. Evidence-based decisions.\n\n5. **Systematic Approach** — Systematic approach. Processes integrate karna. Quality system develop karna.\n\n**TQM Tools:** SPC (Statistical Process Control), Quality circles, Benchmarking, Flowcharts, Cause-effect diagrams, Pareto charts.\n\n**Benefits:** Quality improve karta hai. Productivity increase karta hai. Customer satisfaction improve karta hai. Waste reduce karta hai. Employee morale improve karta hai.\n\n**TQM vs Six-Sigma:** TQM organization-wide hai. Six-Sigma specific problems solve karta hai. Dono quality improve karte hain.\n\n**Diagram:** Refer to Security Testing Overview diagram."
                },
                {
                  "question": "Explain security testing and its types.",
                  "answer": "**Security Testing:** Software systems ke security validate karne ka process. Yeh ensure karta hai ki software unauthorized access, attacks, aur vulnerabilities se protected hai.\n\n**5 Objectives:**\n1. **Confidentiality** — Data private hai. Unauthorized users data access nahi kar sakte.\n2. **Integrity** — Data correct hai. Data tamper nahi hua hai.\n3. **Availability** — System accessible hai. System down nahi hai.\n4. **Authentication** — User identity verify hota hai.\n5. **Authorization** — Access control hai. Authorized users hi access kar sakte hain.\n\n**5 Types:**\n1. **Vulnerability Scanning** — Automatic tools se vulnerabilities detect karna. Tools: Nessus, OpenVAS.\n2. **Penetration Testing** — Hacker ki tarah attack karna. System ko hack karne ka attempt karna.\n3. **Code Review** — Code manual review karna. Security issues check karna.\n4. **Security Audits** — Security policies check karna. Compliance verify karna.\n5. **Risk Assessment** — Security risks identify karna. Risk levels assess karna.\n\n**Diagram:** Refer to Security Testing Overview diagram."
                }
  ]
        },
        {
          "id": "complexity-metrics-models",
          "number": "1.11",
          "title": "Complexity Metrics and Models",
          "subtitle": "Software complexity measurement aur models",
          "icon": "chart",
          "accent": "#00aaff",
          "englishDefinition": "Complexity Metrics measure software complexity through various approaches including cyclomatic complexity (control flow), Halstead metrics (vocabulary analysis), McCabe complexity (decision points), and object-oriented complexity metrics (inheritance, coupling, cohesion). These metrics help predict maintainability, testability, and defect density. High complexity indicates higher risk and maintenance cost.",
          "intro": "Software complexity metrics software code ke complexity measure karne ka tools provide karte hain. Cyclomatic complexity control flow analyze karta hai. Halstead metrics operators aur operands pe focus karta hai. McCabe complexity decision points count karta hai. OO complexity inheritance, coupling, aur cohesion measure karta hai. Yeh metrics maintainability, testability, aur defect density predict karne mein help karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Complexity Metrics",
              "body": "Software Complexity Metrics quantitative measures hain jo software complexity assess karte hain. Importance: Maintainability predict karna, Testability measure karna, Defect density estimate karna, Refactoring decisions lena. High complexity = High maintenance cost, High defect probability, Difficult testing. Low complexity = Easy maintenance, Low defects, Easy testing.",
        "body2": "Simple words mein: Complexity metrics software code ke complexity measure karne ka tools hain. Agar code complex hai, toh maintain aur test karna mushkil hai. Metrics batate hain ki code ka complexity kitna hai — simple hai ya complex hai.",
              "chips": [
                "Cyclomatic",
                "Halstead",
                "McCabe",
                "OO"
              ]
            },
            {
              "type": "definition",
              "title": "Cyclomatic Complexity",
              "body": "Cyclomatic Complexity control flow graph ka complexity measure karta hai. Formula: M = E - N + 2P. Where: M = Cyclomatic complexity, E = Number of edges, N = Number of nodes, P = Number of connected components. Interpretation: M = 1-5: Simple (easy to test), M = 6-10: Moderate, M = 11-20: Complex, M = 21+: Very complex. Test cases = M + 1. Example: If M = 5, need 6 test cases.",
        "body2": "Cyclomatic complexity control flow graph ka complexity measure karta hai. Iska matlab hai code mein decision points kitne hain. If, else, while, for — yeh sab decision points hain. Jitne jada decision points, utna complex code. Formula: M = E - N + 2P.",
              "chips": [
                "M = E - N + 2P",
                "Test = M + 1"
              ]
            },
            {
              "type": "points",
              "title": "Cyclomatic Complexity Details",
              "points": [
                "Control flow graph represent karta hai.",
                "Decision points count karta hai.",
                "Test case count determine karta hai.",
                "1-5: Simple, easy to test.",
                "6-10: Moderate complexity.",
                "11-20: Complex, high risk.",
                "Above 20: Very complex, refactoring needed.",
                "McCabe named this metric.",
                "V(G) = E - N + 2."
              ]
            },
            {
              "type": "definition",
              "title": "Halstead Metrics",
              "body": "Halstead metrics operators aur operands pe analysis karta hai. Components: n1 = Number of unique operators, n2 = Number of unique operands, N1 = Total operators, N2 = Total operands. Derived metrics: Vocabulary (n = n1 + n2), Length (N = N1 + N2), Volume (V = N * log2(n)), Difficulty (D = (n1/2) * (N2/n2)), Effort (E = D * V), Bugs (B = V/3000).",
        "body2": "Halstead metrics operators aur operands pe analysis karta hai. Code ka vocabulary (n), length (N), volume (V) measure karta hai. Yeh batata hai ki code kitna complex hai — operators aur operands ka count se.",
              "chips": [
                "V = N * log2(n)",
                "D = (n1/2)(N2/n2)",
                "E = D * V",
                "B = V/3000"
              ]
            },
            {
              "type": "points",
              "title": "Halstead Metrics Details",
              "points": [
                "Operators: +, -, *, /, =, if, while, for.",
                "Operands: Variables, constants, function calls.",
                "Vocabulary (n): Unique operators + operands.",
                "Length (N): Total operators + operands.",
                "Volume (V): Code size measure.",
                "Difficulty (D): Code complexity measure.",
                "Effort (E): Development effort estimate.",
                "Bugs (B): Estimated bugs in code.",
                "Higher V, D, E = More complex code."
              ]
            },
            {
              "type": "definition",
              "title": "McCabe Complexity",
              "body": "McCabe Complexity decision points count karta hai. Formula: V(G) = number of decision points + 1. Decision points: if, else, while, for, do-while, case statements, &&, ||. Interpretation: 1-5: Simple, 6-10: Moderate, 11-15: Complex, 16+: Very complex. Target: Keep complexity below 10. Above 10: Refactoring needed.",
        "body2": "McCabe complexity decision points count karta hai. If, else, while, for, case — yeh sab decision points hain. V(G) = D + 1 formula hai. Jitne jada decision points, utna complex code.",
              "chips": [
                "V(G) = D + 1",
                "Target: less than 10"
              ]
            },
            {
              "type": "points",
              "title": "McCabe Complexity Details",
              "points": [
                "Decision points count karta hai.",
                "if, else, while, for, do, case.",
                "&&, || operators bhi count karta hai.",
                "V(G) = Decision points + 1.",
                "1-5: Simple, maintainable.",
                "6-10: Moderate, acceptable.",
                "11-15: Complex, high risk.",
                "16+: Very complex, refactor.",
                "Maintenance cost predict karta hai.",
                "Test case count determine karta hai."
              ]
            },
            {
              "type": "definition",
              "title": "Object-Oriented Complexity",
              "body": "Object-Oriented Complexity Metrics OO design ke complexity measure karte hain. Metrics: Inheritance Depth (Class hierarchy depth), Coupling (Dependencies between classes), Cohesion (Member relatedness), Method count, Attribute count, LCOM (Lack of Cohesion in Methods). High inheritance depth = Complex design. High coupling = High dependencies. Low cohesion = Poor design.",
        "body2": "Object-oriented complexity OO design ke complexity measure karta hai. Inheritance depth, coupling, cohesion — yeh sab batate hain ki OO design ka quality kaisa hai. Low coupling aur high cohesion accha design batate hain.",
              "chips": [
                "Inheritance",
                "Coupling",
                "Cohesion",
                "LCOM"
              ]
            },
            {
              "type": "points",
              "title": "OO Complexity Details",
              "points": [
                "Inheritance Depth: Class hierarchy depth.",
                "Deep inheritance = Complex design.",
                "Shallow inheritance = Simple design.",
                "Coupling: Dependencies between classes.",
                "High coupling = High complexity.",
                "Low coupling = Better design.",
                "Cohesion: Member relatedness.",
                "High cohesion = Good design.",
                "Low cohesion = Poor design.",
                "LCOM: Lack of Cohesion in Methods.",
                "Method count, attribute count bhi metrics."
              ]
            },
            {
              "type": "diagram",
              "title": "Complexity Metrics Overview",
              "diagram": "complexity-metrics-overview",
              "caption": "Complexity Metrics — Cyclomatic, Halstead, McCabe, Object-Oriented"
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Complexity Metrics: Software complexity measure karte hain. Cyclomatic: Control flow, M = E - N + 2P. Halstead: Operators/operands, V = N * log2(n). McCabe: Decision points, V(G) = D + 1. OO: Inheritance, coupling, cohesion. High complexity = High maintenance cost, high defect probability."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain Cyclomatic Complexity with formula and interpretation.",
              "answer": "Cyclomatic Complexity: Control flow graph complexity. Formula: M = E - N + 2P. Interpretation: 1-5 Simple, 6-10 Moderate, 11-20 Complex, 21+ Very complex. Test cases = M + 1. High complexity = High risk."
            },
            {
              "question": "Describe Halstead Metrics.",
              "answer": "Halstead Metrics: Operators aur operands analysis. Vocabulary (n), Length (N), Volume (V = N * log2(n)), Difficulty (D), Effort (E = D * V), Bugs (B = V/3000). Higher values = More complex code."
            },
            {
              "question": "What is McCabe Complexity? How is it calculated?",
              "answer": "McCabe Complexity: Decision points count. Formula: V(G) = D + 1. Decision points: if, else, while, for, case, &&, ||. 1-5 Simple, 6-10 Moderate, 11-15 Complex, 16+ Very complex. Target: Below 10."
            },
            {
              "question": "Explain Object-Oriented Complexity Metrics.",
              "answer": "OO Complexity: Inheritance depth, coupling (dependencies), cohesion (member relatedness), LCOM. High inheritance = Complex. High coupling = Poor design. Low cohesion = Poor design. Target: Low coupling, high cohesion."
            }
          ]
        },
        {
          "id": "quality-management-metrics",
          "number": "1.12",
          "title": "Quality Management Metrics",
          "subtitle": "Software quality measurement aur metrics",
          "icon": "metrics",
          "accent": "#ff8800",
          "englishDefinition": "Quality Management Metrics are quantitative measures used to assess and track software quality including defect density, test coverage, code quality metrics, and process maturity metrics. These metrics help organizations measure quality effectiveness, identify improvement areas, and make informed decisions. Metrics should be measurable, repeatable, and actionable.",
          "intro": "Quality Management Metrics software quality ko measure aur track karne ka tools provide karte hain. Defect metrics defects measure karte hain. Testing metrics test effectiveness measure karte hain. Code quality metrics code quality assess karte hain. Process metrics process maturity measure karte hain. Yeh metrics quality effectiveness measure karne aur improvement areas identify karne mein help karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Quality Metrics",
              "body": "Quality Management Metrics quantitative measures hain jo software quality assess karte hain. Characteristics: Measurable, Repeatable, Actionable, Objective. Types: Defect Metrics (quality defects measure), Testing Metrics (test effectiveness), Code Quality Metrics (code quality), Process Metrics (process maturity). Purpose: Quality track karna, Improvement areas identify karna, Decisions lena, Communication karna.",
        "body2": "Simple words mein: Quality metrics software quality ko measure karne ka tools hain. Yeh batate hain ki software quality kaisi hai — defects kitne hain, testing coverage kaisa hai, code quality kaisi hai. Metrics quality track karne aur improvement identify karne mein help karte hain.",
              "chips": [
                "Defect",
                "Testing",
                "Code Quality",
                "Process"
              ]
            },
            {
              "type": "definition",
              "title": "Defect Metrics",
              "body": "Defect Metrics quality defects measure karte hain. Metrics: Defect Density = Defects / KLOC (1-10 typical), DRE = (Pre-release defects / Total defects) * 100 (90%+ target), Reopen Rate = (Reopened defects / Total defects) * 100 (less than 5% target), Defect Removal Rate, Defect Arrival Rate, MTTR (Mean Time To Repair), MTBF (Mean Time Between Failures).",
        "body2": "Defect metrics quality defects measure karte hain. Defect density (defects per KLOC), DRE (defects caught before release), reopen rate — yeh sab defects ka analysis karte hain. Yeh batate hain ki defects ka quality kaisa hai.",
              "chips": [
                "Density",
                "DRE",
                "Reopen",
                "MTTR"
              ]
            },
            {
              "type": "points",
              "title": "Defect Metrics Details",
              "points": [
                "Defect Density: 1-10 per KLOC (typical).",
                "Low density = Good quality.",
                "High density = Poor quality.",
                "DRE: 90%+ target.",
                "High DRE = Good testing.",
                "Low DRE = Poor testing.",
                "Reopen Rate: Less than 5% target.",
                "High reopen = Poor fixes.",
                "MTTR: Mean Time To Repair.",
                "MTBF: Mean Time Between Failures.",
                "Defect metrics quality effectiveness measure karte hain."
              ]
            },
            {
              "type": "definition",
              "title": "Testing Metrics",
              "body": "Testing Metrics test effectiveness measure karte hain. Metrics: Test Coverage (code, requirements, design), Test Execution Rate, Test Pass Rate, Test Fail Rate, Automation Coverage, Test Cycle Time, Test Effort, Test ROI. Coverage types: Statement coverage, Branch coverage, Condition coverage, Path coverage, Requirement coverage.",
        "body2": "Testing metrics test effectiveness measure karte hain. Test coverage, pass rate, fail rate, automation coverage — yeh batate hain ki testing ka quality kaisa hai. High coverage = accha testing.",
              "chips": [
                "Coverage",
                "Pass Rate",
                "Automation",
                "ROI"
              ]
            },
            {
              "type": "points",
              "title": "Testing Metrics Details",
              "points": [
                "Test Coverage: Code, requirements, design.",
                "Statement coverage: Executed statements %.",
                "Branch coverage: Executed branches %.",
                "Condition coverage: Condition outcomes %.",
                "Path coverage: Executed paths %.",
                "Test Pass Rate: Passed tests / Total tests.",
                "Test Fail Rate: Failed tests / Total tests.",
                "Automation Coverage: Automated tests %.",
                "Test Cycle Time: Time to complete testing.",
                "Test ROI: Return on investment.",
                "High coverage = Good testing."
              ]
            },
            {
              "type": "definition",
              "title": "Code Quality Metrics",
              "body": "Code Quality Metrics code quality assess karte hain. Metrics: Code Review Coverage, Code Complexity (Cyclomatic, Halstead), Code Duplication %, Documentation Coverage, Comment Ratio, Function Length, Maintainability Index, Lint errors, Static analysis findings. High complexity, high duplication = Poor quality.",
        "body2": "Code quality metrics code quality assess karte hain. Complexity, duplication, review coverage, documentation — yeh batate hain ki code ka quality kaisa hai. High complexity, high duplication = kharab quality.",
              "chips": [
                "Complexity",
                "Duplication",
                "Review",
                "Docs"
              ]
            },
            {
              "type": "points",
              "title": "Code Quality Metrics Details",
              "points": [
                "Code Review Coverage: Reviewed code %.",
                "High review coverage = Good quality.",
                "Code Complexity: Cyclomatic, Halstead.",
                "High complexity = Poor quality.",
                "Code Duplication: Duplicated code %.",
                "High duplication = Poor maintainability.",
                "Documentation Coverage: Documented code %.",
                "Comment Ratio: Comments / Code ratio.",
                "Function Length: Average function size.",
                "Maintainability Index: Maintainability measure.",
                "Lint errors: Code style issues.",
                "Static analysis: Security, bug findings."
              ]
            },
            {
              "type": "definition",
              "title": "Process Metrics",
              "body": "Process Metrics process maturity measure karte hain. Metrics: Schedule Variance, Cost Variance, Effort Variance, Requirements Volatility, Defect Escape Rate, Change Request Rate, Review Effectiveness, Process Compliance Rate. High variance = Process issues. High defect escape = Testing issues.",
        "body2": "Process metrics process maturity measure karte hain. Schedule variance, cost variance, escape rate, volatility — yeh batate hain ki process ka quality kaisa hai. High variance = process issues.",
              "chips": [
                "Schedule",
                "Cost",
                "Volatility",
                "Escape"
              ]
            },
            {
              "type": "points",
              "title": "Process Metrics Details",
              "points": [
                "Schedule Variance: Planned vs actual schedule.",
                "Negative variance = Delay.",
                "Positive variance = Early completion.",
                "Cost Variance: Planned vs actual cost.",
                "Negative variance = Over budget.",
                "Effort Variance: Planned vs actual effort.",
                "Requirements Volatility: Requirement changes.",
                "High volatility = Poor requirements.",
                "Defect Escape Rate: Defects found post-release.",
                "High escape rate = Poor testing.",
                "Change Request Rate: Change requests count.",
                "Process Compliance: Processes followed %.",
                "Review Effectiveness: Defects found in reviews."
              ]
            },
            {
              "type": "diagram",
              "title": "Quality Metrics Overview",
              "diagram": "quality-metrics-overview",
              "caption": "Quality Management Metrics — Defect, Testing, Code Quality, Process"
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Quality Metrics: Software quality measure karte hain. Defect Metrics: Density, DRE, Reopen Rate, MTTR. Testing Metrics: Coverage, Pass Rate, Automation. Code Quality: Complexity, Duplication, Review, Documentation. Process Metrics: Schedule, Cost, Volatility, Escape Rate. Metrics quality track karne aur improvement identify karne mein help karte hain."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain Defect Density and DRE.",
              "answer": "Defect Density: Defects per KLOC. Typical: 1-10 per KLOC. Low density = Good quality. DRE: (Pre-release defects / Total defects) * 100. Target: 90%+. High DRE = Good testing process."
            },
            {
              "question": "Describe Testing Metrics.",
              "answer": "Testing Metrics: Test coverage, test pass rate, test fail rate, automation coverage, test cycle time, test ROI. Coverage types: Statement, branch, condition, path, requirement coverage. High coverage = Good testing."
            },
            {
              "question": "What are Code Quality Metrics?",
              "answer": "Code Quality Metrics: Code review coverage, code complexity (cyclomatic, Halstead), code duplication %, documentation coverage, comment ratio, function length, maintainability index, lint errors, static analysis findings. High complexity, high duplication = Poor quality."
            },
            {
              "question": "Explain Process Metrics.",
              "answer": "Process Metrics: Schedule variance, cost variance, effort variance, requirements volatility, defect escape rate, change request rate, review effectiveness, process compliance rate. High variance, high escape rate = Process issues."
            }
          ]
        },
        {
          "id": "availability-metrics",
          "number": "1.13",
          "title": "Availability Metrics",
          "subtitle": "System reliability aur availability measures",
          "icon": "clock",
          "accent": "#00ff88",
          "englishDefinition": "Availability Metrics measure the degree to which a system is operational and accessible. Common metrics include uptime percentage, MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair), MTTF (Mean Time To Failure), SLAs (Service Level Agreements), and recovery metrics (RTO, RPO). High availability systems aim for 99.999% uptime (five nines).",
          "intro": "Availability Metrics system ki operational availability measure karte hain. Uptime metrics uptime percentage measure karte hain. Reliability metrics MTBF, MTTR, MTTF use karte hain. Recovery metrics RTO, RPO recovery capability measure karte hain. SLAs service level agreements define karte hain. High availability systems 99.999% uptime target karte hain.",
          "sections": [
            {
              "type": "definition",
              "title": "Availability",
              "body": "Availability = (Uptime / Total Time) * 100. Tiers: 99% (7.3 hours/month downtime), 99.9% (43.8 minutes/month), 99.99% (4.38 minutes/month), 99.999% (26.3 seconds/month), 99.9999% (2.6 seconds/month). Availability calculation: Availability = MTBF / (MTBF + MTTR) * 100.",
        "body2": "Simple words mein: Availability system operational hone ka percentage hai. Agar system 99.9% available hai, toh 0.1% down hai. Jitne jada available, utna accha hai. 99.999% = five nines = 26 seconds downtime per month.",
              "chips": [
                "99%",
                "99.9%",
                "99.99%",
                "99.999%"
              ]
            },
            {
              "type": "points",
              "title": "Uptime Tiers",
              "points": [
                "99%: 7.3 hours/month downtime.",
                "99.9%: 43.8 minutes/month.",
                "99.99%: 4.38 minutes/month.",
                "99.999%: 26.3 seconds/month.",
                "99.9999%: 2.6 seconds/month.",
                "Higher tier = Less downtime.",
                "99.9%: Good for most applications.",
                "99.99%: Critical systems.",
                "99.999%: Telecom, banking.",
                "99.9999%: Aerospace, defense."
              ]
            },
            {
              "type": "definition",
              "title": "Uptime Metrics",
              "body": "Uptime Metrics system availability measure karte hain. Metrics: Uptime Percentage (availability %), Downtime (total downtime), SLA Compliance (SLA met %), Monthly Uptime, Annual Uptime, Rolling uptime. Calculation: Uptime % = (Total Time - Downtime) / Total Time * 100. Example: 99.5% uptime = 3.65 days downtime per year.",
        "body2": "Uptime metrics system uptime measure karte hain. Uptime percentage, downtime, SLA compliance — yeh sab availability batate hain. 99.5% uptime = 3.65 days downtime per year.",
              "chips": [
                "Uptime %",
                "Downtime",
                "SLA"
              ]
            },
            {
              "type": "points",
              "title": "Uptime Metrics Details",
              "points": [
                "Uptime Percentage: Availability measure.",
                "Higher uptime = Better availability.",
                "Downtime: Total system downtime.",
                "Less downtime = Better availability.",
                "SLA Compliance: SLA met percentage.",
                "100% compliance = SLA met.",
                "Monthly Uptime: Monthly availability.",
                "Annual Uptime: Annual availability.",
                "Rolling Uptime: Rolling period availability.",
                "99.5% uptime = 3.65 days downtime/year.",
                "Monitoring tools track uptime."
              ]
            },
            {
              "type": "definition",
              "title": "Reliability Metrics",
              "body": "Reliability Metrics system reliability measure karte hain. Metrics: MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair), MTTF (Mean Time To Failure), Failure Rate, Bathtub Curve, Reliability Function, Failure Probability. MTBF = Total operational time / Number of failures. MTTR = Total repair time / Number of repairs.",
        "body2": "Reliability metrics system reliability measure karte hain. MTBF (Mean Time Between Failures) — failures beech ka time. MTTR (Mean Time To Repair) — repair ka time. High MTBF = reliable. Low MTTR = fast recovery.",
              "chips": [
                "MTBF",
                "MTTR",
                "MTTF",
                "Failure Rate"
              ]
            },
            {
              "type": "points",
              "title": "Reliability Metrics Details",
              "points": [
                "MTBF: Mean Time Between Failures.",
                "High MTBF = Reliable system.",
                "MTTR: Mean Time To Repair.",
                "Low MTTR = Fast recovery.",
                "MTTF: Mean Time To Failure.",
                "Used for non-repairable systems.",
                "Failure Rate: Failures per unit time.",
                "Lambda = 1 / MTBF.",
                "Bathtub Curve: Failure rate over time.",
                "Early failures: High failure rate.",
                "Random failures: Low failure rate.",
                "Wear-out failures: High failure rate.",
                "Reliability Function: Survival probability."
              ]
            },
            {
              "type": "definition",
              "title": "Performance Metrics",
              "body": "Performance Metrics system performance measure karte hain. Metrics: Response Time (request to response), Throughput (requests per second), Error Rate (errors per request), Concurrent Users (simultaneous users), Resource Utilization (CPU, memory, disk, network), Transaction Time, Page Load Time, API Latency. Performance affects availability — slow system = poor availability.",
        "body2": "Performance metrics system performance measure karte hain. Response time (request to response), throughput (requests per second), error rate — yeh batate hain ki system ka performance kaisa hai.",
              "chips": [
                "Response",
                "Throughput",
                "Error Rate",
                "Users"
              ]
            },
            {
              "type": "points",
              "title": "Performance Metrics Details",
              "points": [
                "Response Time: Request to response time.",
                "Low response time = Good performance.",
                "Throughput: Requests per second.",
                "High throughput = Good performance.",
                "Error Rate: Errors per request.",
                "Low error rate = Good performance.",
                "Concurrent Users: Simultaneous users.",
                "High user capacity = Good performance.",
                "Resource Utilization: CPU, memory, disk.",
                "Optimal utilization = Good performance.",
                "Transaction Time: Complete transaction time.",
                "Page Load Time: Page load time.",
                "API Latency: API response time.",
                "Performance affects availability."
              ]
            },
            {
              "type": "definition",
              "title": "Recovery Metrics",
              "body": "Recovery Metrics system recovery capability measure karte hain. Metrics: RTO (Recovery Time Objective) — Maximum acceptable downtime, RPO (Recovery Point Objective) — Maximum acceptable data loss, Recovery Success Rate, Backup Success Rate, Recovery Time Actual, Data Loss Actual. RTO: Time to recover. RPO: Data loss tolerance.",
        "body2": "Recovery metrics system recovery capability measure karte hain. RTO (Recovery Time Objective) — maximum acceptable downtime. RPO (Recovery Point Objective) — maximum acceptable data loss. RPO = 0 = zero data loss.",
              "chips": [
                "RTO",
                "RPO",
                "Recovery",
                "Backup"
              ]
            },
            {
              "type": "points",
              "title": "Recovery Metrics Details",
              "points": [
                "RTO: Recovery Time Objective.",
                "Maximum acceptable downtime.",
                "Low RTO = Fast recovery needed.",
                "RPO: Recovery Point Objective.",
                "Maximum acceptable data loss.",
                "Low RPO = Minimal data loss.",
                "RPO = 0: Zero data loss.",
                "Recovery Success Rate: Successful recoveries %.",
                "High success rate = Reliable recovery.",
                "Backup Success Rate: Backup success %.",
                "High backup success = Reliable backups.",
                "Recovery Time Actual: Actual recovery time.",
                "Data Loss Actual: Actual data loss.",
                "Recovery metrics disaster recovery measure karte hain."
              ]
            },
            {
              "type": "diagram",
              "title": "Availability Metrics Overview",
              "diagram": "availability-metrics-overview",
              "caption": "Availability Metrics — Uptime, Reliability, Performance, Recovery"
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Availability Metrics: System availability measure karte hain. Uptime: 99% to 99.999%. Reliability: MTBF (high = reliable), MTTR (low = fast recovery), MTTF, Failure Rate. Performance: Response time, throughput, error rate, concurrent users. Recovery: RTO (time to recover), RPO (data loss tolerance), recovery success rate."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain Availability and its calculation.",
              "answer": "Availability: (Uptime / Total Time) * 100. Also: MTBF / (MTBF + MTTR) * 100. Tiers: 99% (7.3 hrs/mo), 99.9% (43.8 min/mo), 99.99% (4.38 min/mo), 99.999% (26.3 sec/mo). Higher tier = Less downtime."
            },
            {
              "question": "What is MTBF and MTTR? How are they calculated?",
              "answer": "MTBF: Mean Time Between Failures = Total operational time / Number of failures. High MTBF = Reliable system. MTTR: Mean Time To Repair = Total repair time / Number of repairs. Low MTTR = Fast recovery."
            },
            {
              "question": "Explain RTO and RPO.",
              "answer": "RTO: Recovery Time Objective — Maximum acceptable downtime. Low RTO = Fast recovery needed. RPO: Recovery Point Objective — Maximum acceptable data loss. RPO = 0 means zero data loss. RPO = 1 hour means 1 hour data loss acceptable."
            },
            {
              "question": "Describe the Bathtub Curve.",
              "answer": "Bathtub Curve: Failure rate over time. Three phases: Early failures (high failure rate, infant mortality), Random failures (low failure rate, useful life), Wear-out failures (high failure rate, end of life). Reliability improves in middle phase."
            }
          ]
        },
        {
          "id": "defect-removal-effectiveness",
          "number": "1.14",
          "title": "Defect Removal Effectiveness",
          "subtitle": "Quality assurance aur defect removal efficiency",
          "icon": "bug",
          "accent": "#aa00ff",
          "englishDefinition": "Defect Removal Effectiveness (DRE) measures the percentage of defects eliminated before release. High DRE means most defects are caught during development. Formula: DRE = (Defects Found Pre-Release / Total Defects) * 100. Target: 90%+. DRE indicates testing effectiveness and quality process maturity.",
          "intro": "DRE (Defect Removal Effectiveness) software quality ko measure karne ka important metric hai. Yeh measure karta hai ki total defects mein se kitne defects pre-release phase mein caught kiye gaye. High DRE = Most defects caught during development. Low DRE = Many defects escape to production. Target: 90%+. DRE testing effectiveness aur quality process maturity indicate karta hai.",
          "sections": [
            {
              "type": "definition",
              "title": "DRE",
              "body": "DRE = (Defects Found Pre-Release / Total Defects) * 100. Total Defects = Pre-Release Defects + Post-Release Defects. Target: 90%+ (excellent), 80-89% (good), 70-79% (fair), Below 70% (poor). Example: 100 total defects, 95 pre-release, 5 post-release. DRE = (95 / 100) * 100 = 95%. High DRE = Effective testing. Low DRE = Poor testing.",
        "body2": "Simple words mein: DRE (Defect Removal Effectiveness) software quality ka important metric hai. Yeh batata hai ki total defects mein se kitne defects pre-release phase mein caught kiye gaye. Target 90%+ hai. High DRE = effective testing.",
              "chips": [
                "DRE = Pre/Total * 100",
                "Target: 90%+"
              ]
            },
            {
              "type": "definition",
              "title": "DRE Calculation",
              "body": "DRE calculation steps: 1. Count defects found during development (pre-release). 2. Count defects found after release (post-release). 3. Calculate total defects. 4. Apply formula: DRE = (Pre-Release / Total) * 100. Example 1: 90 pre-release, 10 post-release. DRE = (90/100) * 100 = 90%. Example 2: 70 pre-release, 30 post-release. DRE = (70/100) * 100 = 70%.",
        "body2": "DRE calculation mein pre-release defects aur total defects ka ratio lena hota hai. Formula: DRE = (Pre-release defects / Total defects) * 100. Example: 95 pre-release, 5 post-release. DRE = 95%.",
              "chips": [
                "Pre-Release",
                "Post-Release",
                "Total"
              ]
            },
            {
              "type": "points",
              "title": "DRE Calculation Details",
              "points": [
                "Step 1: Count pre-release defects.",
                "Includes: Unit test, integration test, system test, UAT defects.",
                "Step 2: Count post-release defects.",
                "Includes: Production defects, customer-reported defects.",
                "Step 3: Calculate total defects.",
                "Total = Pre-release + Post-release.",
                "Step 4: Apply formula.",
                "DRE = (Pre-release / Total) * 100.",
                "Example: 95 pre, 5 post. DRE = 95%.",
                "90%+ = Excellent testing.",
                "80-89% = Good testing.",
                "70-79% = Fair testing.",
                "Below 70% = Poor testing."
              ]
            },
            {
              "type": "definition",
              "title": "DRE Improvement",
              "body": "DRE improvement strategies: 1. Comprehensive Testing — Full test coverage, all test types. 2. Early Testing — Testing start early in SDLC. 3. Code Reviews — Code review defects catch karna. 4. Static Analysis — Static analysis tools use karna. 5. Test Automation — Automated testing implement karna. 6. Quality Gates — Quality gates enforce karna. 7. Training — Team training provide karna.",
        "body2": "DRE improvement strategies: comprehensive testing (full coverage), early testing (shift-left), code reviews, static analysis, test automation, quality gates, training. Yeh sab DRE improve karne ke liye important hain.",
              "chips": [
                "Testing",
                "Reviews",
                "Automation",
                "Training"
              ]
            },
            {
              "type": "points",
              "title": "DRE Improvement Strategies",
              "points": [
                "Comprehensive Testing: Full test coverage.",
                "Cover all test types: Unit, integration, system, UAT.",
                "Early Testing: Start testing early in SDLC.",
                "Shift-left testing: Defects early catch karna.",
                "Code Reviews: Code review defects catch karna.",
                "Review effectiveness: High review coverage.",
                "Static Analysis: Static analysis tools use karna.",
                "Tools: SonarQube, ESLint, Checkmarx.",
                "Test Automation: Automated testing implement karna.",
                "Automation coverage: High automation coverage.",
                "Quality Gates: Quality gates enforce karna.",
                "Gates: Definition of Done, exit criteria.",
                "Training: Team training provide karna.",
                "Quality culture: Quality culture build karna."
              ]
            },
            {
              "type": "definition",
              "title": "DRE Challenges",
              "body": "DRE challenges: 1. Defect Detection — Some defects hard to detect. 2. Environment Differences — Test environment vs production differences. 3. User Expectations — User expectations vary. 4. Complexity — Software complexity defects hide karta hai. 5. Documentation — Poor documentation defects cause karta hai. 6. Resources — Limited testing resources.",
        "body2": "DRE challenges: defect detection (hidden defects), environment differences (test vs production), user expectations (variability), complexity (hidden defects), documentation (poor docs), resources (limited testing).",
              "chips": [
                "Detection",
                "Environment",
                "Complexity",
                "Resources"
              ]
            },
            {
              "type": "points",
              "title": "DRE Challenges Details",
              "points": [
                "Defect Detection: Some defects hard to detect.",
                "Hidden defects: Defects code mein hide hote hain.",
                "Environment Differences: Test vs production.",
                "Different environments = Different behaviors.",
                "User Expectations: User expectations vary.",
                "Different users = Different expectations.",
                "Complexity: Software complexity defects hide karta hai.",
                "High complexity = More hidden defects.",
                "Documentation: Poor documentation defects cause karta hai.",
                "Missing docs = Defects.",
                "Resources: Limited testing resources.",
                "Less testing = Lower DRE.",
                "Time constraints: Tight schedules.",
                "Scope changes: Changing requirements."
              ]
            },
            {
              "type": "diagram",
              "title": "DRE Overview",
              "diagram": "dre-overview",
              "caption": "DRE — Defect Removal Effectiveness"
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "DRE: Defects caught before release percentage. Formula: (Pre-release / Total) * 100. Target: 90%+. High DRE = Effective testing. Improvement: Comprehensive testing, early testing, code reviews, static analysis, automation, quality gates, training. Challenges: Defect detection, environment differences, user expectations, complexity, documentation, resources."
            }
          ],
          "examQuestions": [
            {
              "question": "Define DRE with formula and target.",
              "answer": "DRE: Defects caught before release percentage. Formula: (Pre-release defects / Total defects) * 100. Target: 90%+. Example: 95 pre-release, 5 post-release. DRE = 95%. High DRE = Effective testing."
            },
            {
              "question": "Explain how to improve DRE.",
              "answer": "DRE Improvement: Comprehensive testing (full coverage), early testing (shift-left), code reviews (high coverage), static analysis (tools), test automation (high coverage), quality gates (enforce), training (quality culture)."
            },
            {
              "question": "What are the challenges in achieving high DRE?",
              "answer": "DRE Challenges: Defect detection (hidden defects), environment differences (test vs production), user expectations (variability), complexity (hidden defects), documentation (poor docs), resources (limited testing), time constraints, scope changes."
            },
            {
              "question": "Calculate DRE: 85 pre-release defects, 15 post-release defects.",
              "answer": "Total defects = 85 + 15 = 100. DRE = (85 / 100) * 100 = 85%. Interpretation: 85% is good but below 90% target. Need improvement in testing."
            }
          ]
        },
        {
          "id": "fmea",
          "number": "1.15",
          "title": "FMEA (Failure Mode and Effects Analysis)",
          "subtitle": "Failure analysis aur risk management tool",
          "icon": "alert",
          "accent": "#ff0080",
          "englishDefinition": "FMEA (Failure Mode and Effects Analysis) is a systematic approach for identifying and analyzing potential failure modes to prioritize risks and implement preventive measures. FMEA uses Risk Priority Number (RPN) = Severity * Occurrence * Detection. RPN helps prioritize failures for action. FMEA is proactive risk management.",
          "intro": "FMEA (Failure Mode and Effects Analysis) systematic failure analysis approach hai. Yeh potential failure modes identify aur analyze karta hai. RPN (Risk Priority Number) = Severity * Occurrence * Detection. High RPN = High risk. FMEA proactive risk management hai — defects prevent karne ka approach. Yeh design, process, aur system analysis mein use hota hai.",
          "sections": [
            {
              "type": "definition",
              "title": "FMEA",
              "body": "FMEA systematic failure analysis approach hai. Purpose: Potential failures identify karna, Failure effects analyze karna, Risk prioritize karna, Preventive measures implement karna. FMEA types: Design FMEA (DFMEA), Process FMEA (PFMEA), System FMEA. FMEA proactive hai — failures occur hone se pehle identify karta hai.",
        "body2": "Simple words mein: FMEA (Failure Mode and Effects Analysis) systematic failure analysis approach hai. Yeh potential failures identify karta hai aur unka analysis karta hai. RPN = S * O * D. High RPN = High risk. Yeh proactive risk management hai.",
              "chips": [
                "Risk",
                "Failure",
                "RPN",
                "Proactive"
              ]
            },
            {
              "type": "definition",
              "title": "FMEA Process",
              "body": "FMEA process steps: 1. System Analysis — System components identify karna. 2. Failure Identification — Potential failure modes identify karna. 3. Effects Analysis — Failure effects analyze karna. 4. Severity Scoring — Severity (S) 1-10 assign karna. 5. Occurrence Scoring — Occurrence (O) 1-10 assign karna. 6. Detection Scoring — Detection (D) 1-10 assign karna. 7. RPN Calculation — RPN = S * O * D. 8. Action Plan — High RPN prioritize karna, Actions plan karna.",
        "body2": "FMEA process 8 steps pe based hai: system analysis (components identify), failure identification (potential failures), effects analysis (failure impact), severity scoring (S 1-10), occurrence scoring (O 1-10), detection scoring (D 1-10), RPN calculation (S * O * D), action plan (high RPN actions).",
              "chips": [
                "System",
                "Failure",
                "Effects",
                "RPN"
              ]
            },
            {
              "type": "points",
              "title": "FMEA Process Steps",
              "points": [
                "Step 1: System Analysis.",
                "Identify system components, functions.",
                "Understand system structure.",
                "Step 2: Failure Identification.",
                "Identify potential failure modes.",
                "Each component failure consider karna.",
                "Step 3: Effects Analysis.",
                "Analyze failure effects.",
                "Impact on system, user, environment.",
                "Step 4: Severity Scoring (S).",
                "Severity 1-10 assign karna.",
                "10 = Catastrophic, 1 = Minor.",
                "Step 5: Occurrence Scoring (O).",
                "Occurrence 1-10 assign karna.",
                "10 = Very likely, 1 = Very unlikely.",
                "Step 6: Detection Scoring (D).",
                "Detection 1-10 assign karna.",
                "10 = Hard to detect, 1 = Easy to detect.",
                "Step 7: RPN Calculation.",
                "RPN = S * O * D.",
                "Maximum 1000.",
                "Step 8: Action Plan.",
                "High RPN prioritize karna.",
                "Preventive actions plan karna.",
                "RPN reduce karne ke actions."
              ]
            },
            {
              "type": "definition",
              "title": "FMEA Scoring",
              "body": "FMEA scoring: Severity (S): 1-10. 10 = Catastrophic (safety, critical), 9 = Very severe, 5 = Moderate, 1 = Minor. Occurrence (O): 1-10. 10 = Very likely (greater than 10 per million), 5 = Occasional, 1 = Very unlikely (less than 0.01 per million). Detection (D): 1-10. 10 = Undetectable, 5 = Moderate detection, 1 = Certain detection. RPN = S * O * D. Maximum 1000.",
        "body2": "FMEA scoring mein 3 parameters hain: Severity (S): 1-10. 10 = Catastrophic, 1 = Minor. Occurrence (O): 1-10. 10 = Very likely, 1 = Very unlikely. Detection (D): 1-10. 10 = Undetectable, 1 = Certain detection. RPN = S * O * D. Maximum 1000.",
              "chips": [
                "S: 1-10",
                "O: 1-10",
                "D: 1-10",
                "RPN: S*O*D"
              ]
            },
            {
              "type": "points",
              "title": "FMEA Scoring Details",
              "points": [
                "Severity (S) Scale:",
                "10: Catastrophic — Safety, critical system.",
                "9: Very severe — Major system failure.",
                "8: Severe — Significant failure.",
                "5: Moderate — Moderate failure.",
                "2: Minor — Minor failure.",
                "1: Negligible — Negligible failure.",
                "Occurrence (O) Scale:",
                "10: Very likely — greater than 10 per million.",
                "8: Likely — 1-10 per million.",
                "5: Occasional — 100-500 per million.",
                "2: Unlikely — 1-100 per million.",
                "1: Very unlikely — less than 1 per million.",
                "Detection (D) Scale:",
                "10: Undetectable — No detection method.",
                "8: Very hard to detect.",
                "5: Moderate detection.",
                "2: Easy to detect.",
                "1: Certain detection — 100% detect.",
                "RPN: S * O * D.",
                "Maximum: 1000.",
                "RPN 1-100: Low risk.",
                "RPN 101-500: Medium risk.",
                "RPN 501-1000: High risk."
              ]
            },
            {
              "type": "definition",
              "title": "FMEA Benefits",
              "body": "FMEA benefits: 1. Proactive Risk Management — Failures prevent karta hai. 2. Quality Improvement — Quality improve karta hai. 3. Cost Reduction — Failure costs reduce karta hai. 4. Safety Improvement — Safety improve karta hai. 5. Documentation — Failure analysis document karta hai. 6. Team Collaboration — Team collaboration improve karta hai. 7. Decision Making — Risk-based decisions enable karta hai.",
        "body2": "FMEA benefits: proactive risk management (failures prevent), quality improvement (defects reduce), cost reduction (failure costs reduce), safety improvement (safety incidents prevent), documentation (failure analysis), team collaboration (cross-functional teams), decision making (risk-based decisions).",
              "chips": [
                "Proactive",
                "Quality",
                "Cost",
                "Safety"
              ]
            },
            {
              "type": "points",
              "title": "FMEA Benefits Details",
              "points": [
                "Proactive Risk Management: Failures prevent karta hai.",
                "Defects occur hone se pehle identify karta hai.",
                "Preventive actions implement karta hai.",
                "Quality Improvement: Quality improve karta hai.",
                "Defects reduce karta hai.",
                "Customer satisfaction improve karta hai.",
                "Cost Reduction: Failure costs reduce karta hai.",
                "Internal failure costs reduce karta hai.",
                "External failure costs reduce karta hai.",
                "Safety Improvement: Safety improve karta hai.",
                "Critical failures identify karta hai.",
                "Safety incidents prevent karta hai.",
                "Documentation: Failure analysis document karta hai.",
                "Historical data maintain karta hai.",
                "Knowledge base build karta hai.",
                "Team Collaboration: Team collaboration improve karta hai.",
                "Cross-functional team involve karta hai.",
                "Communication improve karta hai.",
                "Decision Making: Risk-based decisions enable karta hai.",
                "Prioritization clear karta hai.",
                "Resource allocation optimize karta hai."
              ]
            },
            {
              "type": "diagram",
              "title": "FMEA Overview",
              "diagram": "fmea-overview",
              "caption": "FMEA — Failure Mode and Effects Analysis"
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "FMEA: Systematic failure analysis. Process: System analysis, failure identification, effects analysis, severity scoring, occurrence scoring, detection scoring, RPN calculation, action plan. RPN = S * O * D. Maximum 1000. High RPN = High risk. Benefits: Proactive risk management, quality improvement, cost reduction, safety improvement, documentation, team collaboration, decision making."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain FMEA with its process.",
              "answer": "FMEA: Systematic failure analysis. Process: 1. System analysis (components identify), 2. Failure identification (potential failures), 3. Effects analysis (failure impact), 4. Severity scoring (S 1-10), 5. Occurrence scoring (O 1-10), 6. Detection scoring (D 1-10), 7. RPN calculation (S * O * D), 8. Action plan (high RPN actions)."
            },
            {
              "question": "Describe FMEA scoring system.",
              "answer": "FMEA Scoring: Severity (S): 1-10. 10 = Catastrophic, 1 = Minor. Occurrence (O): 1-10. 10 = Very likely, 1 = Very unlikely. Detection (D): 1-10. 10 = Undetectable, 1 = Certain detection. RPN = S * O * D. Maximum 1000. RPN 1-100: Low risk. 501-1000: High risk."
            },
            {
              "question": "What are the benefits of FMEA?",
              "answer": "FMEA Benefits: Proactive risk management (failures prevent), quality improvement (defects reduce), cost reduction (failure costs reduce), safety improvement (safety incidents prevent), documentation (failure analysis), team collaboration (cross-functional teams), decision making (risk-based decisions)."
            },
            {
              "question": "Calculate RPN: Severity = 8, Occurrence = 5, Detection = 3.",
              "answer": "RPN = S * O * D = 8 * 5 * 3 = 120. Interpretation: 120 is medium risk (101-500 range). Needs some action but not critical. Priority: Medium."
            }
          ]
        },
        {
          "id": "quality-function-deployment",
          "number": "1.16",
          "title": "Quality Function Deployment (QFD)",
          "subtitle": "Customer requirements aur quality deployment",
          "icon": "target",
          "accent": "#00aaff",
          "englishDefinition": "QFD (Quality Function Deployment) is a systematic approach to translate customer requirements into technical specifications ensuring customer needs are consistently met. QFD uses the House of Quality matrix to map customer requirements to technical requirements, set target values, and prioritize design decisions. QFD reduces design changes and improves customer satisfaction.",
          "intro": "QFD (Quality Function Deployment) customer requirements ko technical specifications mein translate karne ka systematic approach hai. House of Quality matrix customer requirements ko technical requirements se link karta hai. Yeh design decisions prioritize karta hai aur customer satisfaction improve karta hai. QFD design changes reduce karta hai aur quality improve karta hai.",
          "sections": [
            {
              "type": "definition",
              "title": "QFD",
              "body": "QFD customer requirements ko technical specifications mein translate karta hai. Purpose: Customer needs meet karna, Design decisions prioritize karna, Quality improve karna, Design changes reduce karna. QFD process: Customer requirements collect karna, Technical requirements identify karna, Relationship matrix build karna, Competitive analysis karna, Target values set karna, Deployment karna.",
        "body2": "Simple words mein: QFD (Quality Function Deployment) customer requirements ko technical specifications mein translate karne ka systematic approach hai. Yeh ensure karta hai ki customer needs properly meet hoti hain. House of Quality matrix customer aur technical requirements ko link karta hai.",
              "chips": [
                "Customer",
                "Technical",
                "Matrix",
                "Deployment"
              ]
            },
            {
              "type": "definition",
              "title": "House of Quality",
              "body": "House of Quality QFD ka central matrix hai. Components: 1. Customer Requirements (Whats) — Customer needs. 2. Technical Requirements (Hows) — Technical solutions. 3. Relationship Matrix — Customer vs Technical relationships. 4. Competitive Assessment — Competitor comparison. 5. Target Values — Technical targets. 6. Design Direction — Design priorities. House shape: Roof (correlations), Main body (matrix), Base (technical assessment).",
        "body2": "House of Quality QFD ka central matrix hai. Customer requirements (Whats) — customer needs. Technical requirements (Hows) — technical solutions. Relationship matrix — customer vs technical relationships. Competitive assessment — competitor comparison. Target values — technical targets.",
              "chips": [
                "Whats",
                "Hows",
                "Matrix",
                "Targets"
              ]
            },
            {
              "type": "points",
              "title": "House of Quality Components",
              "points": [
                "Customer Requirements (Whats):",
                "Customer needs aur expectations.",
                "Voice of Customer (VOC).",
                "Customer priorities.",
                "Technical Requirements (Hows):",
                "Technical solutions.",
                "Design characteristics.",
                "Engineering specifications.",
                "Relationship Matrix:",
                "Customer vs Technical relationships.",
                "Strong, medium, weak relationships.",
                "Relationship scoring.",
                "Competitive Assessment:",
                "Competitor product comparison.",
                "Customer satisfaction comparison.",
                "Technical benchmarking.",
                "Target Values:",
                "Technical target values.",
                "Design targets set karna.",
                "Design Direction:",
                "Design priorities.",
                "Technical correlations (roof).",
                "Design optimization."
              ]
            },
            {
              "type": "definition",
              "title": "QFD Process",
              "body": "QFD process steps: 1. Customer Research — Customer requirements collect karna. 2. Requirements Analysis — Requirements analyze karna, Prioritize karna. 3. Technical Translation — Customer requirements ko technical specifications mein translate karna. 4. Relationship Matrix — Customer vs Technical relationships map karna. 5. Competitive Analysis — Competitor comparison karna. 6. Target Setting — Technical target values set karna. 7. Deployment — Technical requirements departments mein deploy karna.",
        "body2": "QFD process 7 steps pe based hai: customer research (requirements collect), requirements analysis (prioritize), technical translation (customer to technical), relationship matrix (customer vs technical), competitive analysis (competitor comparison), target setting (technical targets), deployment (departments mein cascade).",
              "chips": [
                "Research",
                "Analysis",
                "Translation",
                "Deployment"
              ]
            },
            {
              "type": "points",
              "title": "QFD Process Steps",
              "points": [
                "Step 1: Customer Research.",
                "Customer requirements collect karna.",
                "Voice of Customer (VOC) capture karna.",
                "Surveys, interviews, focus groups.",
                "Step 2: Requirements Analysis.",
                "Requirements analyze karna.",
                "Requirements prioritize karna.",
                "Kano model use karna.",
                "Step 3: Technical Translation.",
                "Customer requirements ko technical translate karna.",
                "Technical solutions identify karna.",
                "Engineering specifications define karna.",
                "Step 4: Relationship Matrix.",
                "Customer vs Technical relationships map karna.",
                "Strong, medium, weak relationships.",
                "Relationship scoring (9, 5, 3, 1).",
                "Step 5: Competitive Analysis.",
                "Competitor products compare karna.",
                "Customer satisfaction benchmarks.",
                "Technical benchmarks.",
                "Step 6: Target Setting.",
                "Technical target values set karna.",
                "Design targets define karna.",
                "Performance targets.",
                "Step 7: Deployment.",
                "Technical requirements deploy karna.",
                "Departments mein cascade karna.",
                "Design, manufacturing, service."
              ]
            },
            {
              "type": "definition",
              "title": "QFD Benefits",
              "body": "QFD benefits: 1. Customer Focus — Customer needs pe focus karta hai. 2. Early Quality — Quality early in design. 3. Communication — Team communication improve karta hai. 4. Cost Reduction — Design changes reduce karta hai. 5. Documentation — Requirements documentation karta hai. 6. Team Collaboration — Cross-functional collaboration improve karta hai. 7. Decision Making — Design decisions prioritize karta hai.",
        "body2": "QFD benefits: customer focus (needs meet), early quality (design defects prevent), communication (team communication), cost reduction (design changes reduce), documentation (requirements document), team collaboration (cross-functional), decision making (design priorities).",
              "chips": [
                "Customer",
                "Early",
                "Communication",
                "Cost"
              ]
            },
            {
              "type": "points",
              "title": "QFD Benefits Details",
              "points": [
                "Customer Focus: Customer needs pe focus karta hai.",
                "Voice of Customer capture karta hai.",
                "Customer satisfaction improve karta hai.",
                "Early Quality: Quality early in design.",
                "Design defects prevent karta hai.",
                "Design changes reduce karta hai.",
                "Communication: Team communication improve karta hai.",
                "Cross-functional communication.",
                "Requirements clear karta hai.",
                "Cost Reduction: Design changes reduce karta hai.",
                "Rework costs reduce karta hai.",
                "Development costs reduce karta hai.",
                "Documentation: Requirements documentation karta hai.",
                "Design decisions record karta hai.",
                "Knowledge base build karta hai.",
                "Team Collaboration: Cross-functional collaboration.",
                "Design, manufacturing, service teams.",
                "Shared understanding build karta hai.",
                "Decision Making: Design decisions prioritize karta hai.",
                "Resource allocation optimize karta hai.",
                "Design trade-offs clear karta hai."
              ]
            },
            {
              "type": "diagram",
              "title": "QFD Overview",
              "diagram": "qfd-overview",
              "caption": "QFD — Quality Function Deployment"
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "QFD: Customer requirements ko technical specifications mein translate karta hai. House of Quality: Customer requirements (Whats), technical requirements (Hows), relationship matrix, competitive assessment, target values. Process: Customer research, requirements analysis, technical translation, relationship matrix, competitive analysis, target setting, deployment. Benefits: Customer focus, early quality, communication, cost reduction, documentation, team collaboration, decision making."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain QFD and its importance.",
              "answer": "QFD: Customer requirements ko technical specifications mein translate karne ka systematic approach. Importance: Customer needs meet karta hai, design decisions prioritize karta hai, quality improve karta hai, design changes reduce karta hai, customer satisfaction improve karta hai."
            },
            {
              "question": "Describe the House of Quality.",
              "answer": "House of Quality: QFD ka central matrix. Components: Customer requirements (Whats), technical requirements (Hows), relationship matrix (customer vs technical), competitive assessment (competitor comparison), target values (technical targets), design direction (priorities)."
            },
            {
              "question": "Explain the QFD process.",
              "answer": "QFD Process: 1. Customer research (requirements collect), 2. Requirements analysis (prioritize), 3. Technical translation (customer to technical), 4. Relationship matrix (customer vs technical), 5. Competitive analysis (competitor comparison), 6. Target setting (technical targets), 7. Deployment (departments mein cascade)."
            },
            {
              "question": "What are the benefits of QFD?",
              "answer": "QFD Benefits: Customer focus (needs meet), early quality (design defects prevent), communication (team communication), cost reduction (design changes reduce), documentation (requirements document), team collaboration (cross-functional), decision making (design priorities)."
            }
          ]
        },
        {
          "id": "taguchi-quality-loss-function",
          "number": "1.17",
          "title": "Taguchi Quality Loss Function",
          "subtitle": "Quality loss measurement aur Taguchi approach",
          "icon": "chart",
          "accent": "#ff8800",
          "englishDefinition": "Taguchi Quality Loss Function measures quality loss when product performance deviates from target. Formula: L = k * (y - m)^2. L = Loss, k = Cost coefficient, y = Actual value, m = Target value. Taguchi philosophy: Quality = Minimal deviation from target. Any deviation, even within specifications, causes quality loss. Taguchi approach includes robust design and loss function types.",
          "intro": "Taguchi Quality Loss Function quality loss ko measure karne ka quantitative approach hai. Formula: L = k * (y - m)^2. Yeh measure karta hai ki product performance target se kitna deviate hai. Taguchi philosophy: Quality = Minimal deviation from target. Yeh loss function types define karta hai: Smaller-the-Better, Larger-the-Better, Nominal-the-Best. Taguchi robust design approach quality improve karta hai.",
          "sections": [
            {
              "type": "definition",
              "title": "Taguchi Loss Function",
              "body": "Loss Function Formula: L = k * (y - m)^2. Where: L = Loss (quality loss), k = Cost coefficient (proportionality constant), y = Actual value (measured value), m = Target value (ideal value). Taguchi Philosophy: Quality = Minimal deviation from target. Any deviation, even within specifications, causes quality loss. Loss is continuous — no threshold.",
        "body2": "Simple words mein: Taguchi Loss Function quality loss ko measure karne ka quantitative approach hai. Formula: L = k * (y - m)^2. Yeh measure karta hai ki product performance target se kitna deviate hai. Quality = minimal deviation from target.",
              "chips": [
                "L = k(y-m)²",
                "Quality",
                "Loss"
              ]
            },
            {
              "type": "definition",
              "title": "Loss Function Types",
              "body": "Loss Function Types: 1. Smaller-the-Better — Target = 0. Loss = k * y^2. Example: Defects, failures, noise. 2. Larger-the-Better — Target = infinity. Loss = k * (1/y)^2. Example: Strength, durability, efficiency. 3. Nominal-the-Best — Target = specific value. Loss = k * (y - m)^2. Example: Dimensions, temperature, voltage.",
        "body2": "Loss function types: Smaller-the-Better (target=0, loss=k*y^2, examples: defects, noise), Larger-the-Better (target=infinity, loss=k*(1/y)^2, examples: strength, efficiency), Nominal-the-Best (target=m, loss=k*(y-m)^2, examples: dimensions, temperature).",
              "chips": [
                "Smaller",
                "Larger",
                "Nominal"
              ]
            },
            {
              "type": "points",
              "title": "Loss Function Types Details",
              "points": [
                "Smaller-the-Better:",
                "Target = 0 (zero).",
                "Loss = k * y^2.",
                "Smaller value = Better quality.",
                "Examples: Defects, failures, noise, impurities.",
                "Larger-the-Better:",
                "Target = infinity.",
                "Loss = k * (1/y)^2.",
                "Larger value = Better quality.",
                "Examples: Strength, durability, efficiency, lifespan.",
                "Nominal-the-Best:",
                "Target = specific value (m).",
                "Loss = k * (y - m)^2.",
                "Exact target = Best quality.",
                "Examples: Dimensions, temperature, voltage, speed.",
                "One-Sided Specification:",
                "Only upper or lower limit.",
                "Smaller-the-Better ya Larger-the-Better use karna.",
                "Two-Sided Specification:",
                "Upper aur lower limits.",
                "Nominal-the-Best use karna."
              ]
            },
            {
              "type": "definition",
              "title": "Taguchi's Approach",
              "body": "Taguchi's Approach: 1. Target-Oriented — Target values pe focus karta hai. 2. Continuous Loss — Quality loss continuous measure karta hai. 3. Customer Focus — Customer impact measure karta hai. 4. Preventive Approach — Defects prevent karta hai. 5. Design for Quality — Quality design mein integrate karta hai. 6. Cost of Quality — Quality loss costs quantify karta hai. 7. Robust Design — Design variation resistant banata hai.",
        "body2": "Taguchi's approach: target-oriented (target values pe focus), continuous loss (loss continuous measure), customer focus (customer impact), preventive approach (defects prevent), design for quality (quality design mein integrate), robust design (variation resistant).",
              "chips": [
                "Target",
                "Continuous",
                "Customer",
                "Robust"
              ]
            },
            {
              "type": "points",
              "title": "Taguchi's Approach Details",
              "points": [
                "Target-Oriented:",
                "Target values pe focus karta hai.",
                "Ideal target values define karta hai.",
                "Deviation minimize karta hai.",
                "Continuous Loss:",
                "Quality loss continuous measure karta hai.",
                "Loss starts from target.",
                "No threshold — continuous function.",
                "Customer Focus:",
                "Customer impact measure karta hai.",
                "Customer perspective se quality measure karta hai.",
                "Customer loss quantify karta hai.",
                "Preventive Approach:",
                "Defects prevent karta hai.",
                "Quality loss prevent karta hai.",
                "Design improvement karta hai.",
                "Design for Quality:",
                "Quality design mein integrate karta hai.",
                "Design decisions quality pe based karta hai.",
                "Robust design approach.",
                "Cost of Quality:",
                "Quality loss costs quantify karta hai.",
                "Loss costs calculate karta hai.",
                "Cost-benefit analysis enable karta hai."
              ]
            },
            {
              "type": "definition",
              "title": "Taguchi's Robust Design",
              "body": "Taguchi's Robust Design: Design variation resistant banata hai. Components: 1. Control Factors — Design parameters (adjustable). 2. Noise Factors — Environmental factors (unavoidable). 3. Parameter Design — Parameters optimize karta hai. 4. Tolerance Design — Tolerances specify karta hai. 5. Taguchi Methods — Orthogonal arrays use karta hai. 6. DOE — Experiments design karta hai. Robust design variation minimize karta hai.",
        "body2": "Taguchi's robust design variation resistant banata hai. Control factors (design parameters), noise factors (environmental factors), parameter design (optimize), tolerance design (specify), orthogonal arrays (Taguchi methods), DOE (experiments). Yeh sab variation minimize karte hain.",
              "chips": [
                "Robust",
                "Control",
                "Noise",
                "DOE"
              ]
            },
            {
              "type": "points",
              "title": "Taguchi's Robust Design Details",
              "points": [
                "Robust Design:",
                "Design variation resistant banata hai.",
                "Performance variation minimize karta hai.",
                "Noise factors se robust banata hai.",
                "Control Factors:",
                "Design parameters (adjustable).",
                "Design decisions control karta hai.",
                "Parameters optimize karta hai.",
                "Noise Factors:",
                "Environmental factors (unavoidable).",
                "Operating conditions, environment.",
                "Noise minimize ya compensate karta hai.",
                "Parameter Design:",
                "Parameters optimize karta hai.",
                "Design parameters tune karta hai.",
                "Optimal settings find karta hai.",
                "Tolerance Design:",
                "Tolerances specify karta hai.",
                "Component tolerances define karta hai.",
                "Cost vs quality trade-off.",
                "Taguchi Methods:",
                "Orthogonal arrays use karta hai.",
                "Experiments efficiently design karta hai.",
                "DOE (Design of Experiments):",
                "Experiments design karta hai.",
                "Factorial experiments use karta hai.",
                "Results analyze karta hai.",
                "Robustness test karta hai."
              ]
            },
            {
              "type": "diagram",
              "title": "Taguchi Loss Function Overview",
              "diagram": "taguchi-loss-overview",
              "caption": "Taguchi Loss Function — Quality Loss, Robust Design, Loss Types"
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "Taguchi Loss Function: L = k * (y - m)^2. Types: Smaller-the-Better (target=0), Larger-the-Better (target=infinity), Nominal-the-Best (target=m). Taguchi Approach: Target-oriented, continuous loss, customer focus, preventive, design for quality, cost of quality. Robust Design: Control factors, noise factors, parameter design, tolerance design, orthogonal arrays, DOE."
            }
          ],
          "examQuestions": [
            {
              "question": "Explain Taguchi Loss Function with formula.",
              "answer": "Taguchi Loss Function: L = k * (y - m)^2. L = Loss, k = Cost coefficient, y = Actual value, m = Target value. Taguchi Philosophy: Quality = Minimal deviation from target. Any deviation causes quality loss. Loss is continuous."
            },
            {
              "question": "Describe the different types of loss functions.",
              "answer": "Loss Function Types: Smaller-the-Better (target=0, loss=k*y^2, examples: defects, noise), Larger-the-Better (target=infinity, loss=k*(1/y)^2, examples: strength, efficiency), Nominal-the-Best (target=m, loss=k*(y-m)^2, examples: dimensions, temperature)."
            },
            {
              "question": "What is Taguchi's Robust Design?",
              "answer": "Robust Design: Design variation resistant banata hai. Components: Control factors (design parameters), noise factors (environmental factors), parameter design (optimize), tolerance design (specify), orthogonal arrays (Taguchi methods), DOE (experiments). Variation minimize karta hai."
            },
            {
              "question": "Calculate loss: k=100, y=10.5, m=10.",
              "answer": "L = k * (y - m)^2 = 100 * (10.5 - 10)^2 = 100 * 0.25 = 25. Quality loss = 25 units. Small deviation from target but still causes loss."
            }
          ]
        },
        {
          "id": "cost-of-quality",
          "number": "1.18",
          "title": "Cost of Quality (COQ)",
          "subtitle": "Quality costs aur quality economics",
          "icon": "dollar",
          "accent": "#00ff88",
          "englishDefinition": "COQ (Cost of Quality) quantifies total costs associated with quality including costs of conformance (prevention + appraisal) and costs of non-conformance (internal + external failure). COQ = Prevention + Appraisal + Internal Failure + External Failure. High external failure costs indicate poor quality. Investing in prevention reduces total COQ.",
          "intro": "COQ (Cost of Quality) quality-related costs ko quantify karne ka framework hai. Yeh 4 categories mein divide karta hai: Prevention costs (defects prevent karne ke costs), Appraisal costs (quality measure karne ke costs), Internal failure costs (internal defects fix karne ke costs), External failure costs (external defects fix karne ke costs). COQ total quality costs measure karta hai. High external failure costs = Poor quality.",
          "sections": [
            {
              "type": "definition",
              "title": "COQ",
              "body": "COQ = Prevention Costs + Appraisal Costs + Internal Failure Costs + External Failure Costs. COQ = Costs of Conformance + Costs of Non-Conformance. Costs of Conformance = Prevention + Appraisal. Costs of Non-Conformance = Internal Failure + External Failure. Objectives: Quality costs quantify karna, Quality investment decisions lena, Cost-benefit analysis karna, Quality improvement prioritize karna.",
        "body2": "Simple words mein: COQ (Cost of Quality) quality-related costs ko quantify karne ka framework hai. Yeh 4 categories mein divide karta hai: Prevention (defects prevent karne ke costs), Appraisal (quality measure karne ke costs), Internal Failure (internal defects fix karne ke costs), External Failure (external defects fix karne ke costs). Total COQ = sabhi costs ka sum.",
              "chips": [
                "Prevention",
                "Appraisal",
                "Internal",
                "External"
              ]
            },
            {
              "type": "definition",
              "title": "COQ Categories",
              "body": "COQ 4 categories: 1. Prevention Costs — Defects prevent karne ke costs. 2. Appraisal Costs — Quality measure karne ke costs. 3. Internal Failure Costs — Internal defects fix karne ke costs. 4. External Failure Costs — External defects fix karne ke costs. Total COQ = All 4 categories. High prevention = Low failure. Low prevention = High failure.",
        "body2": "COQ 4 categories: Prevention (quality planning, training, docs, audits) — defects rokne ke costs. Appraisal (inspection, testing, measurement) — quality check karne ke costs. Internal Failure (scrap, rework, downtime) — internal defects fix karne ke costs. External Failure (warranty, returns, complaints) — external defects fix karne ke costs.",
              "chips": [
                "Prevent",
                "Appraise",
                "Internal",
                "External"
              ]
            },
            {
              "type": "definition",
              "title": "Prevention Costs",
              "body": "Prevention Costs defects prevent karne ke costs hain. Metrics: Quality planning costs, Quality training costs, Quality documentation costs, Quality audit costs, Design review costs, Process improvement costs. Prevention costs quality improve karte hain. High prevention = Low failure costs.",
        "body2": "Prevention costs defects prevent karne ke costs hain. Quality planning (quality plans develop), training (employees quality train), documentation (quality procedures document), audits (quality systems audit), design reviews (designs review), process improvement (processes improve). Yeh defects rokne ke liye invest kiye jaate hain.",
              "chips": [
                "Planning",
                "Training",
                "Docs",
                "Audits"
              ]
            },
            {
              "type": "points",
              "title": "Prevention Costs Details",
              "points": [
                "Quality Planning:",
                "Quality plans develop karna.",
                "Quality strategies define karna.",
                "Quality standards document karna.",
                "Quality Training:",
                "Employees quality train karna.",
                "Training materials develop karna.",
                "Training programs conduct karna.",
                "Quality Documentation:",
                "Quality procedures document karna.",
                "Quality manuals develop karna.",
                "Quality records maintain karna.",
                "Quality Audits:",
                "Quality systems audit karna.",
                "Internal audits conduct karna.",
                "Audit costs.",
                "Design Reviews:",
                "Designs review karna.",
                "Design defects catch karna.",
                "Review costs.",
                "Process Improvement:",
                "Processes improve karna.",
                "Improvement projects.",
                "Process optimization."
              ]
            },
            {
              "type": "definition",
              "title": "Appraisal Costs",
              "body": "Appraisal Costs quality measure karne ke costs hain. Metrics: Inspection costs, Testing costs, Measurement costs, Calibration costs, Testing equipment costs. Appraisal costs quality measure karte hain. High appraisal = Good quality measurement.",
        "body2": "Appraisal costs quality measure karne ke costs hain. Inspection (products inspect), testing (products test), measurement (quality characteristics measure), calibration (equipment calibrate), testing equipment (equipment purchase). Yeh quality check karne ke liye invest kiye jaate hain.",
              "chips": [
                "Inspection",
                "Testing",
                "Measure",
                "Calibrate"
              ]
            },
            {
              "type": "points",
              "title": "Appraisal Costs Details",
              "points": [
                "Inspection:",
                "Products inspect karna.",
                "Visual inspections.",
                "Dimensional inspections.",
                "Inspection costs.",
                "Testing:",
                "Products test karna.",
                "Functional testing.",
                "Performance testing.",
                "Testing costs.",
                "Measurement:",
                "Quality characteristics measure karna.",
                "Metrics calculate karna.",
                "Measurement costs.",
                "Calibration:",
                "Equipment calibrate karna.",
                "Calibration schedules.",
                "Calibration costs.",
                "Testing Equipment:",
                "Testing equipment purchase karna.",
                "Equipment maintenance.",
                "Equipment depreciation."
              ]
            },
            {
              "type": "definition",
              "title": "Internal Failure Costs",
              "body": "Internal Failure Costs internal defects fix karne ke costs hain. Metrics: Scrap costs, Rework costs, Retest costs, Downtime costs, Failure analysis costs, Yield loss costs, Corrective action costs. Internal failure costs quality issues indicate karte hain. High internal failure = Poor quality.",
        "body2": "Internal failure costs internal defects fix karne ke costs hain. Scrap (defective products discard), rework (defective products repair), retest (repaired products test), downtime (equipment downtime), failure analysis (causes analyze), yield loss (quality yield loss), corrective actions (actions implement). Yeh defects fix karne ke costs hain.",
              "chips": [
                "Scrap",
                "Rework",
                "Downtime",
                "Yield"
              ]
            },
            {
              "type": "points",
              "title": "Internal Failure Costs Details",
              "points": [
                "Scrap:",
                "Defective products discard karna.",
                "Material waste.",
                "Scrap costs.",
                "Rework:",
                "Defective products repair karna.",
                "Labor costs.",
                "Rework costs.",
                "Retest:",
                "Repaired products test karna.",
                "Additional testing.",
                "Retest costs.",
                "Downtime:",
                "Equipment downtime.",
                "Production delays.",
                "Downtime costs.",
                "Failure Analysis:",
                "Failure causes analyze karna.",
                "Root cause analysis.",
                "Analysis costs.",
                "Yield Loss:",
                "Quality yield loss.",
                "Defective units.",
                "Yield loss costs.",
                "Corrective Actions:",
                "Corrective actions implement karna.",
                "Action costs.",
                "Follow-up costs."
              ]
            },
            {
              "type": "definition",
              "title": "External Failure Costs",
              "body": "External Failure Costs external defects fix karne ke costs hain. Metrics: Warranty costs, Returns costs, Customer complaint costs, Lost sales costs, Lost customers costs, Liability costs, Reputation damage costs. External failure costs internal failure se zyada expensive hote hain. High external failure = Very poor quality.",
        "body2": "External failure costs external defects fix karne ke costs hain. Warranty (warranty claims), returns (defective products return), complaints (customer complaints), lost sales (sales lose), lost customers (customers lose), liability (product liability), reputation damage (brand reputation damage). Yeh external defects se hone wale costs hain.",
              "chips": [
                "Warranty",
                "Returns",
                "Lost",
                "Reputation"
              ]
            },
            {
              "type": "points",
              "title": "External Failure Costs Details",
              "points": [
                "Warranty Costs:",
                "Warranty claims handle karna.",
                "Repairs, replacements.",
                "Warranty costs.",
                "Returns:",
                "Defective products return karna.",
                "Return processing.",
                "Returns costs.",
                "Customer Complaints:",
                "Customer complaints handle karna.",
                "Complaint investigation.",
                "Complaint costs.",
                "Lost Sales:",
                "Quality issues se sales lose karna.",
                "Revenue loss.",
                "Lost sales costs.",
                "Lost Customers:",
                "Quality issues se customers lose karna.",
                "Customer churn.",
                "Lost customers costs.",
                "Liability:",
                "Product liability costs.",
                "Legal costs.",
                "Liability costs.",
                "Reputation Damage:",
                "Brand reputation damage karna.",
                "Market share loss.",
                "Reputation costs.",
                "External failure costs internal se expensive."
              ]
            },
            {
              "type": "diagram",
              "title": "Cost of Quality Overview",
              "diagram": "coq-overview",
              "caption": "COQ — Cost of Quality, Prevention, Appraisal, Internal/External Failure"
            },
            {
              "type": "recap",
              "title": "Recap",
              "content": "COQ: Quality-related costs ka total. Categories: Prevention (planning, training, docs, audits), Appraisal (inspection, testing, measurement), Internal Failure (scrap, rework, downtime), External Failure (warranty, returns, complaints, lost sales). External failure costs internal se zyada expensive. High prevention = Low failure."
            }
          ],
          "examQuestions": [
            {
              "question": "Define COQ and its categories.",
              "answer": "COQ: Quality-related costs ka total. 4 categories: Prevention (planning, training, docs, audits), Appraisal (inspection, testing, measurement), Internal Failure (scrap, rework, downtime), External Failure (warranty, returns, complaints, lost sales). COQ = Prevention + Appraisal + Internal Failure + External Failure."
            },
            {
              "question": "Explain Prevention vs Appraisal costs.",
              "answer": "Prevention Costs: Defects prevent karne ke costs. Quality planning, training, documentation, audits, design reviews, process improvement. Appraisal Costs: Quality measure karne ke costs. Inspection, testing, measurement, calibration, testing equipment."
            },
            {
              "question": "Describe Internal vs External failure costs.",
              "answer": "Internal Failure: Internal defects fix karne ke costs. Before delivery. Scrap, rework, retest, downtime, failure analysis, yield loss, corrective actions. External Failure: External defects fix karne ke costs. After delivery. Warranty, returns, complaints, lost sales, lost customers, liability, reputation damage. External failure costs internal se expensive."
            },
            {
              "question": "Why is investing in prevention important?",
              "answer": "Investing in prevention important hai because prevention costs defects prevent karte hain. High prevention = Low failure costs. Quality improve karta hai. Total COQ reduce karta hai. ROI positive hota hai. Quality investment cost-effective hai."
            }
          ]
        }
      ]
    },
    {
      "id": "unit-2",
      "number": "2",
      "name": "Essentials of Software Testing",
      "topics": [
{
          "id": "software-testing-basics",
          "number": "2.1",
          "title": "Software Testing Basics",
          "subtitle": "Testing definitions, life cycle, principles aur tester role",
          "icon": "flask",
          "accent": "#0047ff",
          "englishDefinition": "Software Testing is the process of evaluating and verifying that a software system meets its intended requirements and works as expected. It involves executing a system to identify bugs, errors, or defects. The testing life cycle follows a structured approach from planning through closure. Testing principles guide testers in effective testing. The tester plays a critical role in quality assurance within software development organizations.",
          "intro": "Software testing software system ke quality aur correctness check karne ka process hai. Testing life cycle test planning se lekar test closure tak ke steps include karta hai. Testing principles effective testing ke guidelines provide karte hain. Tester software development organization mein quality assurance ka critical role play karta hai. Is chapter mein hum testing basics, life cycle, principles, aur tester role ko detailed mein dekhenge.",
          "sections": [
                {
                  "type": "definition",
                  "title": "Software Testing Definition",
                  "kicker": "Definition",
                  "body": "Software testing process hai jisme software systems evaluate aur verify karte hain ki woh intended requirements meet karta hai aur expected tarike se kaam karta hai. Testing kya hai: 1. Defects identify karna — Bugs, errors, aur issues find karna. 2. Requirements verify karna — All requirements met hain ya nahi. 3. Quality ensure karna — Software quality standards meet karta hai. 4. Risks reduce karna — Software risks identify aur mitigate karna.",
                  "body2": "Simple words mein: Testing ka matlab hai software ko thoroughly check karna taaki usme koi problem na rahe. Ek tester software ko aise use karta hai jaise ek user use karega, aur dekhta hai ki kya woh expected tarike se kaam karta hai. Agar koi problem hai, toh woh defect banata hai.",
                  "chips": ["Testing", "Quality", "Defects", "Risks"],
                },
                {
                  "type": "definition",
                  "title": "Testing Types",
                  "kicker": "Testing Types",
                  "body": "Software testing different approaches mein kari ja sakti hai: 1. Manual Testing — Tester khud software use karta hai, keyboard aur mouse se. 2. Automated Testing — Tools ka use karke test cases automatic execute karte hain. 3. White-box Testing — Tester code ke internal structure jaanta hai, internal logic test karta hai. 4. Black-box Testing — Tester sirf input aur output dekhta hai, internal structure nahi jaanta. 5. Grey-box Testing — White-box aur black-box ka mix. Partial internal knowledge hota hai.",
                  "chips": ["Manual", "Automated", "White-box", "Black-box", "Grey-box"],
                },
                {
                  "type": "points",
                  "title": "Testing Objectives",
                  "kicker": "Key Objectives",
                  "points": ["Defects Detection — Bugs identify karna. Software mein defects find karna.", "Requirements Verification — Requirements check karna. All requirements met hain ya nahi.", "Quality Assurance — Quality ensure karna. Software quality standards meet karta hai.", "Risk Mitigation — Risks reduce karna. Software risks identify aur mitigate karna.", "Reliability Improvement — Reliability improve karna. Software reliability increase karna.", "Performance Verification — Performance check karna. Software performance verify karna.", "User Satisfaction — User satisfaction ensure karna. Software user-friendly hai.", "Safety Assurance — Safety ensure karna. Software safe hai."],
                },
                {
                  "type": "points",
                  "title": "Testing Objectives Details",
                  "kicker": "Detailed Objectives",
                  "points": ["Defects Detection: Bugs identify karna. Defects software mein find karna. Defects categories: Functional, performance, security.", "Requirements Verification: Requirements check karna. Functional requirements verify karna. Non-functional requirements verify karna.", "Quality Assurance: Quality ensure karna. Quality standards follow karna. Quality metrics track karna.", "Risk Mitigation: Risks identify karna. Risks assess karna. Risks mitigate karna. Risks monitor karna.", "Reliability Improvement: Software reliability increase karna. Defects reduce karna. Stability improve karna.", "Performance Verification: Software performance verify karna. Response time check karna. Throughput check karna.", "User Satisfaction: Software user-friendly hai. User expectations meet karta hai. Customer satisfaction ensure karna.", "Safety Assurance: Safety ensure karna. Critical systems safe hain. Safety standards meet karte hain."],
                },
                {
                  "type": "definition",
                  "title": "Testing Life Cycle",
                  "kicker": "Test Life Cycle",
                  "body": "Testing Life Cycle (STLC) structured approach hai testing ke liye. Ye 7 phases pe based hai: 1. Test Planning — Strategy, scope, resources, schedule plan karna. 2. Test Analysis — Requirements analyze karna, Test conditions identify karna. 3. Test Design — Test cases design karna, Test data prepare karna. 4. Test Environment Setup — Environment configure karna, Tools setup karna. 5. Test Execution — Test cases execute karna, Results record karna. 6. Test Evaluation — Results analyze karna, Coverage assess karna. 7. Test Closure — Activities close karna, Lessons learn karna.",
                  "body2": "STLC ko aise samjho — ek building banane se pehle plan karna, drawing banana, material lena, construction karna, check karna, aur final handover dena. Testing mein bhi wahi process hai — plan karna, design karna, execute karna, aur close karna.",
                  "chips": ["Planning", "Analysis", "Design", "Execution", "Closure"],
                },
                {
                  "type": "points",
                  "title": "Testing Life Cycle Steps",
                  "kicker": "STLC Phases",
                  "points": ["Test Planning: Strategy define karna. Scope define karna. Resources plan karna. Schedule plan karna. Risks assess karna.", "Test Analysis: Requirements analyze karna. Test conditions identify karna. Test requirements define karna. Traceability matrix create karna.", "Test Design: Test cases design karna. Test data prepare karna. Test scenarios create karna. Test procedures document karna.", "Test Environment Setup: Environment configure karna. Hardware setup karna. Software install karna. Tools setup karna. Data prepare karna.", "Test Execution: Test cases execute karna. Results record karna. Defects log karna. Progress track karna.", "Test Evaluation: Results analyze karna. Coverage assess karna. Quality evaluate karna. Reports prepare karna.", "Test Closure: Activities close karna. Deliverables handover karna. Lessons learn karna. Resources release karna."],
                },
                {
                  "type": "definition",
                  "title": "Testing Principles",
                  "kicker": "Testing Principles",
                  "body": "Testing principles effective testing ke guidelines provide karte hain. 7 key principles hain: 1. Testing shows presence of defects, not absence — Testing defects detect karta hai, perfect software nahi prove karta hai. 2. Exhaustive testing is impossible — Har possible input test nahi kiya ja sakta, risk-based testing use karna. 3. Early testing saves time and cost — Testing start early karna, defects early catch karna. 4. Defect clustering — Few modules mein most defects hote hain, Pareto principle apply hota hai. 5. Testing is context-dependent — Testing approach context pe depend karta hai. 6. Absence-of-errors fallacy — Bug-free software useful nahi hai agar woh user needs meet nahi karta hai. 7. Test cases must be traceable — Test cases requirements se traceable hone chahiye.",
                  "body2": "Ye principles testers ko guide karte hain ki testing ka best approach kya hai. Ye basic rules hain jo har tester ko follow karna chahiye.",
                  "chips": ["Presence", "Exhaustive", "Early", "Clustering", "Context"],
                },
                {
                  "type": "points",
                  "title": "Testing Principles Details",
                  "kicker": "Principle Details",
                  "points": ["Testing shows presence of defects: Testing defects detect karta hai. Perfect software nahi prove karta hai. Defects find karna goal hai.", "Exhaustive testing is impossible: Har possible input test nahi kiya ja sakta. Risk-based testing use karna. Priority-based testing use karna.", "Early testing saves time and cost: Testing early start karna. Defects early catch karna. Defects fix karne ke cost reduce karta hai.", "Defect clustering: Few modules mein most defects hote hain. Pareto principle apply hota hai. 80% defects 20% modules mein hote hain.", "Testing is context-dependent: Testing approach context pe depend karta hai. Different contexts different testing approaches. Application type pe depend karta hai.", "Absence-of-errors fallacy: Bug-free software useful nahi hai. User needs meet nahi karta hai. User expectations meet nahi karta hai.", "Test cases must be traceable: Test cases requirements se traceable hone chahiye. Requirements traceability matrix use karna. All requirements covered hain ya nahi verify karna."],
                },
                {
                  "type": "definition",
                  "title": "Tester Role",
                  "kicker": "Tester Role",
                  "body": "Tester software development organization mein quality assurance ka critical role play karta hai. Roles: 1. Quality Advocate — Quality focus rakhna. 2. Test Lead — Testing team lead karna. 3. Tester — Test cases design aur execute karna. 4. Reviewer — Code, design, documentation review karna. 5. Quality Engineer — Quality processes implement karna. 6. Team Collaborator — Development team saath collaborate karna. 7. Risk Analyst — Quality risks identify karna. Tester skills: Analytical thinking, attention to detail, communication, technical knowledge, testing tools knowledge.",
                  "body2": "Tester ka kaam sirf bugs find karna nahi hai — woh quality ka advocate bhi hai. Woh development team ke saath collaborate karta hai, quality processes implement karta hai, aur risks analyze karta hai.",
                  "chips": ["Advocate", "Lead", "Tester", "Reviewer", "Engineer"],
                },
                {
                  "type": "points",
                  "title": "Tester Role Details",
                  "kicker": "Role Details",
                  "points": ["Quality Advocate: Quality focus rakhna. Quality standards promote karna. Quality culture build karna.", "Test Lead: Testing team lead karna. Test strategy plan karna. Test schedule manage karna. Test resources manage karna.", "Tester: Test cases design karna. Test cases execute karna. Defects report karna. Test results document karna.", "Reviewer: Code review karna. Design review karna. Documentation review karna.", "Quality Engineer: Quality processes implement karna. Quality standards define karna. Quality metrics track karna.", "Team Collaborator: Development team saath collaborate karna. Communication karna. Coordination karna. Teamwork show karna.", "Risk Analyst: Quality risks identify karna. Risks assess karna. Risk mitigation plan karna.", "Tester Skills: Analytical thinking. Attention to detail. Communication skills. Technical knowledge. Testing tools knowledge."],
                },
                {
                  "type": "diagram",
                  "title": "Software Testing Basics Overview",
                  "kicker": "Diagram",
                  "diagram": "software-testing-basics-overview",
                  "caption": "Software Testing Basics — Definitions, Objectives, Life Cycle, Principles, Tester Role",
                },
                {
                  "type": "recap",
                  "title": "Recap",
                  "kicker": "5 Seconds Mein Yaad Karo",
                  "points": ["Software Testing: Software ke quality aur correctness check karne ka process.", "Types: Manual, Automated, White-box, Black-box, Grey-box.", "Objectives: Defects detect, requirements verify, quality ensure, risks reduce.", "STLC: Test Planning → Test Analysis → Test Design → Environment Setup → Test Execution → Test Evaluation → Test Closure.", "7 Principles: Presence of defects, Exhaustive impossible, Early testing, Defect clustering, Context-dependent, Absence-of-errors fallacy, Traceability.", "Tester Roles: Quality Advocate, Test Lead, Tester, Reviewer, Quality Engineer, Team Collaborator, Risk Analyst."],
                }
  ],
          "examQuestions": [
                {
                  "question": "Define software testing and its objectives.",
                  "answer": "**Software Testing:** Software testing software system ke quality aur correctness check karne ka process hai. Yeh defects identify karta hai, requirements verify karta hai, quality ensure karta hai, aur risks reduce karta hai.\n\n**Objectives:**\n1. **Defects Detection** — Bugs identify karna. Software mein defects find karna.\n2. **Requirements Verification** — All requirements met hain ya nahi check karna.\n3. **Quality Assurance** — Quality ensure karna, quality standards follow karna.\n4. **Risk Mitigation** — Software risks identify aur mitigate karna.\n5. **Reliability Improvement** — Software reliability increase karna.\n6. **Performance Verification** — Software performance verify karna, response time check karna.\n7. **User Satisfaction** — Software user-friendly hai, user expectations meet karta hai.\n8. **Safety Assurance** — Safety ensure karna, critical systems safe hain.\n\n**Testing Types:** Manual, Automated, White-box, Black-box, Grey-box.\n\n**Diagram:** Refer to Software Testing Basics Overview diagram."
                },
                {
                  "question": "Explain the testing life cycle with all phases.",
                  "answer": "**Testing Life Cycle (STLC) — 7 Phases:**\n\n1. **Test Planning** — Test strategy define karna. Scope define karna. Resources plan karna. Schedule plan karna. Risks assess karna. Yeh phase mein overall test plan banaya jata hai.\n\n2. **Test Analysis** — Requirements analyze karna. Test conditions identify karna. Test requirements define karna. Traceability matrix create karna. Yeh phase mein requirements ko breakdown kiya jata hai.\n\n3. **Test Design** — Test cases design karna. Test data prepare karna. Test scenarios create karna. Test procedures document karna. Yeh phase mein test cases banaye jaate hain.\n\n4. **Test Environment Setup** — Environment configure karna. Hardware setup karna. Software install karna. Tools setup karna. Data prepare karna. Yeh phase mein testing ke liye environment taiyar kiya jata hai.\n\n5. **Test Execution** — Test cases execute karna. Results record karna. Defects log karna. Progress track karna. Yeh phase mein actual testing kiya jata hai.\n\n6. **Test Evaluation** — Results analyze karna. Coverage assess karna. Quality evaluate karna. Reports prepare karna. Yeh phase mein results ka analysis kiya jata hai.\n\n7. **Test Closure** — Activities close karna. Deliverables handover karna. Lessons learn karna. Resources release karna. Yeh phase mein testing activities close kiye jaate hain.\n\n**Diagram:** Refer to Software Testing Basics Overview diagram."
                },
                {
                  "question": "List and explain the key testing principles.",
                  "answer": "**7 Key Testing Principles:**\n\n1. **Testing shows presence of defects, not absence** — Testing defects detect karta hai, perfect software nahi prove karta hai. Har testing se defects find hote hain, par yeh prove nahi karta ki software mein koi defect nahi hai.\n\n2. **Exhaustive testing is impossible** — Har possible input test nahi kiya ja sakta. Risk-based testing use karna. Priority-based testing use karna. Sabhi inputs ko test karna practically impossible hai.\n\n3. **Early testing saves time and cost** — Testing early start karna. Defects early catch karna. Defects jaldi fix karne se cost bahut kam ho jati hai. Early testing defect fix ka cost significantly reduce karta hai.\n\n4. **Defect clustering** — Few modules mein most defects hote hain. Pareto principle apply hota hai — 80% defects 20% modules mein hote hain. Testing focus high-defect modules pe karna chahiye.\n\n5. **Testing is context-dependent** — Testing approach context pe depend karta hai. Different contexts different testing approaches require karte hain. Application type pe depend karta hai.\n\n6. **Absence-of-errors fallacy** — Bug-free software useful nahi hai agar woh user needs meet nahi karta hai. Bug-free hone ke baad bhi software useful nahi hai agar woh user expectations meet nahi karta hai.\n\n7. **Test cases must be traceable** — Test cases requirements se traceable hone chahiye. Requirements traceability matrix use karna. All requirements covered hain ya nahi verify karna.\n\n**Diagram:** Refer to Software Testing Basics Overview diagram."
                },
                {
                  "question": "Describe the tester role in a software development organization.",
                  "answer": "**Tester Roles in Software Development Organization:**\n\n1. **Quality Advocate** — Quality focus rakhna. Quality standards promote karna. Quality culture build karna. Tester sirf bugs find nahi karta — woh quality ka champion bhi hai.\n\n2. **Test Lead** — Testing team lead karna. Test strategy plan karna. Test schedule manage karna. Test resources manage karna. Senior tester ya manager yeh role play karta hai.\n\n3. **Tester** — Test cases design karna. Test cases execute karna. Defects report karna. Test results document karna. Yeh primary role hai — test cases banana, execute karna, aur defects report karna.\n\n4. **Reviewer** — Code review karna. Design review karna. Documentation review karna. Yeh role mein tester code, design, aur documentation ko review karta hai.\n\n5. **Quality Engineer** — Quality processes implement karna. Quality standards define karna. Quality metrics track karna. Yeh role quality processes aur standards ka implementation karta hai.\n\n6. **Team Collaborator** — Development team saath collaborate karna. Communication karna. Coordination karna. Teamwork show karna. Tester development team ke saath mil kar kaam karta hai.\n\n7. **Risk Analyst** — Quality risks identify karna. Risks assess karna. Risk mitigation plan karna. Yeh role mein tester quality risks identify aur mitigate karta hai.\n\n**Tester Skills:** Analytical thinking, attention to detail, communication skills, technical knowledge, testing tools knowledge.\n\n**Diagram:** Refer to Software Testing Basics Overview diagram."
                }
  ]
        },
{
          "id": "test-plan-and-test-cases",
          "number": "2.2",
          "title": "Test Plan and Test Cases",
          "subtitle": "Test planning, test case design aur test reports",
          "icon": "clipboard",
          "accent": "#00aaff",
          "englishDefinition": "A Test Plan is a formal document describing the test strategy, scope, approach, resources, schedule and risks. Test cases are specific test scenarios with expected and actual results. Test case design uses techniques like equivalence partitioning, boundary value analysis, decision tables, and state transition testing. Test reports document progress, defects, and coverage.",
          "intro": "Test Plan testing process ka formal document hai jo strategy, scope, approach, resources, schedule, aur risks describe karta hai. Test cases specific test scenarios hain with expected aur actual results. Test case design techniques equivalence partitioning, boundary value analysis, decision tables, state transition testing use karta hai. Test reports progress, defects, aur coverage document karte hain.",
          "sections": [
                {
                  "type": "definition",
                  "title": "Test Plan",
                  "kicker": "Definition",
                  "body": "Test Plan formal document hai jo test strategy, scope, approach, resources, schedule, risks describe karta hai. Objectives: Testing approach document karna, Testing scope define karna, Testing resources plan karna, Testing schedule plan karna, Testing risks identify karna. Test Plan types: Master Test Plan (complete project ka plan), Specific Test Plan (ek specific area ka plan). Test Plan contents: Scope, Approach, Resources, Schedule, Risks, Test Items, Test Environment, Entry/Exit Criteria.",
                  "body2": "Aise samjho — test plan ek building ka blueprint hai. Blueprint mein building ka design, materials, timeline, aur budget hota hai. Test plan mein test ka strategy, scope, resources, schedule, aur risks hota hai.",
                  "chips": ["Strategy", "Scope", "Approach", "Schedule", "Risks"],
                },
                {
                  "type": "definition",
                  "title": "Test Plan Elements",
                  "kicker": "Key Elements",
                  "body": "Test Plan ke 8 important elements hain: 1. Scope — Testing ka scope define karna. In-scope items aur out-scope items. 2. Approach — Testing approach define karna. Testing strategy select karna. 3. Resources — Testing resources plan karna. Human resources, testing tools, environment, budget. 4. Schedule — Testing schedule plan karna. Test activities schedule, milestones, deadlines. 5. Risks — Testing risks identify karna. Risk assessment aur mitigation plan. 6. Test Items — Test items identify karna. Test item features. 7. Test Environment — Hardware, software, network requirements. 8. Entry/Exit Criteria — Entry criteria, exit criteria, suspension criteria.",
                  "chips": ["Scope", "Approach", "Resources", "Schedule", "Risks", "Test Items", "Environment", "Criteria"],
                },
                {
                  "type": "points",
                  "title": "Test Plan Elements Details",
                  "kicker": "Element Details",
                  "points": ["Scope: In-scope items define karna. Out-scope items define karna. Test items identify karna. Features identify karna.", "Approach: Testing strategy select karna. Testing techniques select karna. Testing levels plan karna — Unit, integration, system, UAT.", "Resources: Human resources plan karna — test lead, testers, developers. Testing tools select karna — Selenium, JIRA, TestRail. Testing environment setup karna. Budget plan karna.", "Schedule: Test activities schedule karna. Milestones define karna. Deadlines set karna. Timeline create karna.", "Risks: Testing risks identify karna. Risk assessment karna. Risk mitigation plan karna. Contingency plan karna.", "Test Items: Test items identify karna. Test items list karna. Test item features document karna.", "Test Environment: Hardware requirements. Software requirements. Network requirements.", "Entry/Exit Criteria: Entry criteria define karna — testing start ka condition. Exit criteria define karna — testing complete ka condition. Suspension criteria define karna — testing pause ka condition."],
                },
                {
                  "type": "definition",
                  "title": "Test Case Design",
                  "kicker": "Test Case Design",
                  "body": "Test Case Design test cases create karne ka process hai. Test Case Definition: A test case ek specific scenario hai with input, expected result, actual result, status. Test Case Components: Test Case ID, Test Title, Description, Prerequisites, Test Steps, Test Data, Expected Result, Actual Result, Status (Pass/Fail), Tester Name, Date. Test Case Design Process: 1. Requirements analyze karna. 2. Test conditions identify karna. 3. Test cases design karna. 4. Test data prepare karna. 5. Test cases review karna.",
                  "body2": "Test case aise samjho — ek recipe hai. Recipe mein ingredients (test data), steps (test steps), expected result (expected outcome) hota hai. Test case mein input, expected output, aur steps hote hain.",
                  "chips": ["Test Case", "Steps", "Expected", "Actual", "Status"],
                },
                {
                  "type": "points",
                  "title": "Test Case Design Details",
                  "kicker": "Component Details",
                  "points": ["Test Case ID: Unique test case ID. Naming convention follow karna. Example: TC_LOGIN_001.", "Test Case Title: Test case title. Brief description of what is being tested.", "Description: Test case description. Detailed explanation of the test scenario.", "Prerequisites: Test prerequisites. Requirements for testing — e.g., user account created, database ready.", "Test Steps: Test steps sequence. Step 1, Step 2, Step 3... Each step clear aur specific hona chahiye.", "Test Data: Test input data. Test values prepare karna. Input values, test data.", "Expected Result: Expected output. What should happen. Clear expected outcome.", "Actual Result: Actual output. What actually happened. Tester fill karta hai execution ke baad.", "Status: Pass/Fail status. Pass = Expected match. Fail = Expected mismatch.", "Tester Name: Tester name. Who executed. Tester ka naam.", "Date: Execution date. When executed. Date of execution.", "Test Case Design Process: Requirements analyze karna. Test conditions identify karna. Test cases design karna. Test data prepare karna. Test cases review karna."],
                },
                {
                  "type": "definition",
                  "title": "Test Case Design Techniques",
                  "kicker": "Design Techniques",
                  "body": "Test Case Design Techniques test cases effective tarike se design karne ke liye use hote hain. 7 main techniques hain: 1. Equivalence Partitioning — Input values partitions mein divide karna, ek value per partition test karna. 2. Boundary Value Analysis — Boundary values test karna (min, min-1, max, max+1). 3. Decision Table Testing — Decision tables use karna complex business logic ke liye. 4. State Transition Testing — State transitions test karna. 5. Use Case Testing — Use cases use karna. 6. Cause-Effect Graphing — Cause-effect relationships map karna. 7. Error Guessing — Experience based testing, errors guess karna.",
                  "body2": "Ye techniques test cases design karne ke liye systematic approach provide karte hain. Har technique ka apna approach hai input values ko select karne ka.",
                  "chips": ["Equivalence", "Boundary", "Decision", "State", "Use Case"],
                },
                {
                  "type": "points",
                  "title": "Test Case Design Techniques Details",
                  "kicker": "Technique Details",
                  "points": ["Equivalence Partitioning: Input values partitions mein divide karna. Valid partitions, invalid partitions. Ek value per partition test karna. Example: 1-100 age range, partitions: 1-100 (valid), less than 1 (invalid), greater than 100 (invalid). Test 50 (valid), 0 (invalid), 150 (invalid).", "Boundary Value Analysis: Boundary values test karna. Min, min-1, max, max+1. Example: 1-100 range, test 0, 1, 2, 99, 100, 101. Boundary cases most error-prone hote hain.", "Decision Table Testing: Decision tables use karna. Complex business logic ke liye. Conditions aur actions map karna. Example: If credit > 500 AND income > 50000, approve loan.", "State Transition Testing: State transitions test karna. State diagrams use karna. Valid aur invalid transitions test karna. Example: ATM card — active, inactive, blocked states.", "Use Case Testing: Use cases use karna. User interactions test karna. Actor aur system interactions. Example: User login, search, cart, checkout.", "Cause-Effect Graphing: Cause-effect relationships map karna. Causes, effects, conditions. Decision tables create karna. Cause-effect graph se decision table banate hain.", "Error Guessing: Experience based testing. Errors guess karna. Previous defects knowledge use karna. Experienced tester errors guess karta hai."],
                },
                {
                  "type": "definition",
                  "title": "Test Reporting",
                  "kicker": "Test Reporting",
                  "body": "Test Reporting test progress aur results communicate karne ka process hai. Reports types: 1. Progress Report — daily/weekly status. 2. Defect Report — defects list aur details. 3. Coverage Report — test coverage. 4. Summary Report — overall summary. 5. Quality Report — quality assessment. 6. Metrics Report — quantitative metrics. Test Report Contents: Test progress, Defects found, Defects fixed, Test coverage, Test results, Quality assessment, Risks aur issues.",
                  "body2": "Test report aise samjho — ek project report hai. Weekly progress report, defect report, aur summary report. Yeh reports stakeholders ko testing status batate hain.",
                  "chips": ["Progress", "Defects", "Coverage", "Quality", "Metrics"],
                },
                {
                  "type": "points",
                  "title": "Test Reporting Details",
                  "kicker": "Report Types",
                  "points": ["Progress Report: Daily status report. Weekly status report. Test progress update. Completed, pending items.", "Defect Report: Defects list. Defect details. Severity, priority, status. Defect trends. Defect report mein sabhi defects ka details hota hai.", "Coverage Report: Test coverage. Code coverage. Requirements coverage. Design coverage. Yeh batata hai ki testing kitni coverage hai.", "Summary Report: Overall summary. Test summary. Quality summary. Risks aur issues. Yeh overall testing ka summary hai.", "Quality Report: Quality assessment. Quality evaluation. Quality metrics. Quality trends. Yeh quality ka assessment hai.", "Metrics Report: Quantitative metrics. Defect density. Test pass rate. Test execution rate. Yeh quantitative metrics report hai."],
                },
                {
                  "type": "diagram",
                  "title": "Test Plan and Test Cases Overview",
                  "kicker": "Diagram",
                  "diagram": "test-plan-test-cases-overview",
                  "caption": "Test Plan and Test Cases — Planning, Design, Techniques, Reporting",
                },
                {
                  "type": "recap",
                  "title": "Recap",
                  "kicker": "5 Seconds Mein Yaad Karo",
                  "points": ["Test Plan: Formal document with strategy, scope, approach, resources, schedule, risks, test items, environment, entry/exit criteria.", "Test Plan Types: Master Test Plan (complete project), Specific Test Plan (specific area).", "Test Case Components: ID, title, description, prerequisites, steps, data, expected, actual, status, tester, date.", "Test Case Design Techniques: Equivalence partitioning, Boundary value analysis, Decision tables, State transition, Use case, Cause-effect graphing, Error guessing.", "Test Reporting: Progress, defects, coverage, summary, quality, metrics reports.", "Test Report Contents: Test progress, defects found/fixed, coverage, results, quality assessment, risks."],
                }
  ],
          "examQuestions": [
                {
                  "question": "What is a Test Plan? Explain its key elements.",
                  "answer": "**Test Plan:** Test Plan ek formal document hai jo test strategy, scope, approach, resources, schedule, aur risks describe karta hai.\n\n**Test Plan Types:**\n1. **Master Test Plan** — Complete project ka test plan.\n2. **Specific Test Plan** — Ek specific area ka test plan.\n\n**Key Elements (8 Elements):**\n\n1. **Scope** — Testing ka scope define karna. In-scope items aur out-scope items. Test items identify karna.\n\n2. **Approach** — Testing approach define karna. Testing strategy select karna. Testing techniques select karna. Testing levels plan karna (Unit, integration, system, UAT).\n\n3. **Resources** — Human resources plan karna (test lead, testers, developers). Testing tools select karna (Selenium, JIRA, TestRail). Testing environment setup karna. Budget plan karna.\n\n4. **Schedule** — Test activities schedule karna. Milestones define karna. Deadlines set karna. Timeline create karna.\n\n5. **Risks** — Testing risks identify karna. Risk assessment karna. Risk mitigation plan karna. Contingency plan karna.\n\n6. **Test Items** — Test items identify karna. Test items list karna. Test item features document karna.\n\n7. **Test Environment** — Hardware requirements. Software requirements. Network requirements.\n\n8. **Entry/Exit Criteria** — Entry criteria (testing start ka condition), exit criteria (testing complete ka condition), suspension criteria (testing pause ka condition).\n\n**Diagram:** Refer to Test Plan and Test Cases Overview diagram."
                },
                {
                  "question": "Explain Test Case design with its components.",
                  "answer": "**Test Case Design:** Test cases create karne ka process. A test case ek specific scenario hai with input, expected result, actual result, status.\n\n**Test Case Components (11 Components):**\n\n1. **Test Case ID** — Unique test case ID. Naming convention follow karna. Example: TC_LOGIN_001.\n2. **Test Title** — Brief description of what is being tested.\n3. **Description** — Detailed explanation of the test scenario.\n4. **Prerequisites** — Requirements for testing — e.g., user account created, database ready.\n5. **Test Steps** — Test steps sequence. Step 1, Step 2, Step 3...\n6. **Test Data** — Test input data. Test values prepare karna.\n7. **Expected Result** — Expected output. What should happen.\n8. **Actual Result** — Actual output. What actually happened.\n9. **Status** — Pass/Fail status. Pass = Expected match. Fail = Expected mismatch.\n10. **Tester Name** — Who executed.\n11. **Date** — Execution date.\n\n**Test Case Design Process:**\n1. Requirements analyze karna\n2. Test conditions identify karna\n3. Test cases design karna\n4. Test data prepare karna\n5. Test cases review karna\n\n**Diagram:** Refer to Test Plan and Test Cases Overview diagram."
                },
                {
                  "question": "Describe the different test case design techniques.",
                  "answer": "**7 Test Case Design Techniques:**\n\n1. **Equivalence Partitioning** — Input values partitions mein divide karna. Valid partitions aur invalid partitions. Ek value per partition test karna. Example: 1-100 age range — partitions: 1-100 (valid), less than 1 (invalid), greater than 100 (invalid). Test 50, 0, 150.\n\n2. **Boundary Value Analysis** — Boundary values test karna. Min, min-1, max, max+1. Example: 1-100 range, test 0, 1, 2, 99, 100, 101. Boundary cases most error-prone hote hain.\n\n3. **Decision Table Testing** — Decision tables use karna complex business logic ke liye. Conditions aur actions map karna. Example: If credit > 500 AND income > 50000, approve loan.\n\n4. **State Transition Testing** — State transitions test karna. State diagrams use karna. Valid aur invalid transitions test karna. Example: ATM card states — active, inactive, blocked.\n\n5. **Use Case Testing** — Use cases use karna. User interactions test karna. Actor aur system interactions. Example: User login, search, cart, checkout.\n\n6. **Cause-Effect Graphing** — Cause-effect relationships map karna. Causes, effects, conditions. Decision tables create karna. Cause-effect graph se decision table banate hain.\n\n7. **Error Guessing** — Experience based testing. Errors guess karna. Previous defects knowledge use karna. Experienced tester errors guess karta hai.\n\n**Diagram:** Refer to Test Plan and Test Cases Overview diagram."
                },
                {
                  "question": "Explain test reporting and its types.",
                  "answer": "**Test Reporting:** Test progress aur results communicate karne ka process. Yeh reports stakeholders ko testing status batate hain.\n\n**6 Types of Test Reports:**\n\n1. **Progress Report** — Daily/weekly status. Test progress update. Completed, pending items. Yeh daily ya weekly status batata hai.\n\n2. **Defect Report** — Defects list aur details. Severity, priority, status. Defect trends. Yeh sabhi defects ka details document karta hai.\n\n3. **Coverage Report** — Test coverage. Code coverage. Requirements coverage. Design coverage. Yeh batata hai ki testing kitni coverage hai.\n\n4. **Summary Report** — Overall summary. Test summary. Quality summary. Risks aur issues. Yeh overall testing ka summary hai.\n\n5. **Quality Report** — Quality assessment. Quality evaluation. Quality metrics. Quality trends. Yeh quality ka assessment karta hai.\n\n6. **Metrics Report** — Quantitative metrics. Defect density. Test pass rate. Test execution rate. Yeh quantitative metrics report karta hai.\n\n**Test Report Contents:** Test progress, defects found, defects fixed, test coverage, test results, quality assessment, risks aur issues.\n\n**Diagram:** Refer to Test Plan and Test Cases Overview diagram."
                }
  ]
        },
{
          "id": "defect-management",
          "number": "2.3",
          "title": "Defect Management",
          "subtitle": "Defect origins, classes, repository aur management",
          "icon": "bug",
          "accent": "#ff0080",
          "englishDefinition": "Defect Management is the process of identifying, tracking, and resolving defects in software. Defect origins include requirements, design, coding, configuration, and environment issues. Defect classes categorize defects by type: functional, performance, security, usability, and compatibility. The defect repository tracks all defects through their life cycle. Severity and priority determine fix urgency.",
          "intro": "Defect Management defects ko identify, track, aur resolve karne ka process hai. Defect origins requirements, design, coding, configuration, environment issues se aate hain. Defect classes defects ko type ke basis pe categorize karte hain: functional, performance, security, usability, compatibility. Defect repository sabhi defects ko track karta hai through their life cycle. Severity aur priority fix urgency determine karte hain.",
          "sections": [
                {
                  "type": "definition",
                  "title": "Defect Management",
                  "kicker": "Definition",
                  "body": "Defect Management defects ko identify, track, aur resolve karne ka process hai. Objectives: Defects identify karna, Defects track karna, Defects resolve karna, Quality improve karna, Customer satisfaction improve karna. Process: Defect identification, Defect logging, Defect triage, Defect assignment, Defect fixing, Defect verification, Defect closure. Defect Management Benefits: Quality improve karta hai, Cost reduce karta hai, Customer satisfaction improve karta hai, Process improvement karta hai.",
                  "body2": "Defect management aise samjho — ek hospital ka patient treatment system hai. Patient (defect) aata hai, admit hota hai (logging), doctor (developer) treatment karta hai, nurse (tester) check karta hai, patient discharge hota hai (closure). Har defect ka lifecycle manage kiya jata hai.",
                  "chips": ["Defects", "Track", "Resolve", "Quality", "Cost"],
                },
                {
                  "type": "points",
                  "title": "Defect Management Process",
                  "kicker": "Process Steps",
                  "points": ["Defect Identification: Defects find karna. Testing, reviews, feedback se.", "Defect Logging: Defects log karna. Defect tracker mein log karna. Defect details document karna.", "Defect Triage: Defects prioritize karna. Severity aur priority assign karna.", "Defect Assignment: Defects assign karna. Developer ko assign karna.", "Defect Fixing: Developer defects fix karta hai. Root cause analyze karna. Fix implement karna.", "Defect Verification: Tester fix verify karta hai. Retest karna. Fix confirmed karna.", "Defect Closure: Defect close karna. Status update karna. Lessons learn karna."],
                },
                {
                  "type": "definition",
                  "title": "Defect Origins",
                  "kicker": "Defect Origins",
                  "body": "Defect Origins defects ka source hai — ye batata hai ki defect kahan se aaya. 6 main origins hain: 1. Requirements Defects — Ambiguous, incomplete, inconsistent requirements. 2. Design Defects — Design errors, logic errors, interface errors. 3. Coding Defects — Implementation errors, syntax errors, logic errors. 4. Configuration Defects — Configuration errors, environment issues. 5. Environment Defects — Hardware, software, network issues. 6. Integration Defects — Interface errors, data issues. Understanding origins helps prevent defects.",
                  "body2": "Defect origins aise samjho — ek bimaari ka source dhundna. Agar defect ka source pata hai, toh uske prevent karne ka tarika bhi dhund sakte hain. Requirements defects se requirements phase mein hi prevention possible hai.",
                  "chips": ["Requirements", "Design", "Coding", "Config", "Environment"],
                },
                {
                  "type": "points",
                  "title": "Defect Origins Details",
                  "kicker": "Origin Details",
                  "points": ["Requirements Defects: Ambiguous requirements — requirement clearly nahi hai. Incomplete requirements — kuch requirements missing hain. Inconsistent requirements — requirements contradict each other. Changing requirements — requirements badalte rehte hain. Unclear requirements — requirement samajh nahi aata.", "Design Defects: Design errors — architecture ya design mein errors. Logic errors in design — design logic galat hai. Interface design errors — interface design issues. Architecture errors — overall architecture problems. Design not meeting requirements — design requirements ko follow nahi karta.", "Coding Dehids: Implementation errors — code galat implement hua hai. Syntax errors — code syntax galat hai. Logic errors in code — code logic galat hai. Coding mistakes — simple coding errors. Incorrect implementation — requirement kaa pura implementation nahi hua.", "Configuration Defects: Configuration errors — settings galat hain. Wrong settings — incorrect configuration values. Missing configuration — required config missing hai. Environment mismatches — environment differences se issues.", "Environment Defects: Hardware issues — hardware problems. Software issues — software compatibility issues. Network issues — network connectivity problems. Compatibility issues — different platform issues.", "Integration Defects: Interface errors — API ya interface errors. Data issues — data integration problems. API errors — API calls failing. Communication errors — inter-module communication issues."],
                },
                {
                  "type": "definition",
                  "title": "Defect Classes",
                  "kicker": "Defect Classes",
                  "body": "Defect Classes defects ko type ke basis pe categorize karte hain. 7 main classes hain: 1. Functional Defects — Functionality doesn't work as expected. 2. Performance Defects — Performance issues: slow, resource-heavy. 3. Security Defects — Security vulnerabilities, breaches. 4. Usability Defects — Hard to use, confusing. 5. Compatibility Defects — Not compatible with platforms. 6. Documentation Defects — Incorrect or missing documentation. 7. Usability/UI Defects — User interface issues. Understanding classes helps prioritize fixes.",
                  "body2": "Defect classes aise samjho — hospitals mein different wards hote hain (cardiology, neurology, etc.). Har defect class ka apna type hai, aur har class ka different approach hota hai fix karne ka.",
                  "chips": ["Functional", "Performance", "Security", "Usability", "Compatibility"],
                },
                {
                  "type": "points",
                  "title": "Defect Classes Details",
                  "kicker": "Class Details",
                  "points": ["Functional Defects: Functionality doesn't work. Features not working. Incorrect output. Wrong behavior. Example: Login button click nahi karta.", "Performance Defects: Performance issues. Slow response time. High resource usage. Scalability issues. Example: Page load time 10 seconds hai.", "Security Defects: Security vulnerabilities. Security breaches. Authentication issues. Authorization issues. Example: Password without encryption store hota hai.", "Usability Defects: Hard to use. Confusing interface. Poor user experience. Navigation issues. Example: Menu items confusing hain.", "Compatibility Defects: Platform incompatibility. Browser incompatibility. Device incompatibility. OS incompatibility. Example: App iOS par work nahi karta.", "Documentation Defects: Incorrect documentation. Missing documentation. Outdated documentation. Example: User manual wrong information contain karta hai.", "Usability/UI Defects: User interface issues. UI design problems. Accessibility issues. Example: Text small hai, read nahi ho pa raha."],
                },
                {
                  "type": "definition",
                  "title": "Defect Repository",
                  "kicker": "Defect Repository",
                  "body": "Defect Repository defects ko track karne ka central system hai. Components: Defect ID, Defect Title, Defect Description, Defect Severity, Defect Priority, Defect Status, Defect Assignee, Defect Reporter, Defect Dates, Defect Steps. Defect Repository Benefits: Central tracking, Historical data, Analysis aur trends, Knowledge base, Process improvement. Defect Repository Tools: JIRA, Bugzilla, Trello, Asana, Azure DevOps.",
                  "body2": "Defect repository aise samjho — ek library hai. Har book (defect) ka record hai. Library mein book ka ID, title, author, category sab hota hai. Defect repository mein defect ka ID, title, description, severity sab hota hai.",
                  "chips": ["Repository", "Tracking", "History", "Analysis", "Tools"],
                },
                {
                  "type": "points",
                  "title": "Defect Repository Details",
                  "kicker": "Repository Details",
                  "points": ["Defect ID: Unique defect identifier. Naming convention follow karna. Example: BUG-12345.", "Defect Title: Brief defect title. Summary of defect. Ek line mein describe karna.", "Defect Description: Detailed description. Steps to reproduce. Expected aur actual results. Screenshots.", "Defect Severity: Impact level. Critical, high, medium, low. Defect ka impact kitna hai.", "Defect Priority: Fix urgency. P1, P2, P3, P4. Defect fix ka urgency kitna hai.", "Defect Status: Current status. New, assigned, in progress, fixed, retest, closed.", "Defect Assignee: Assigned person. Developer assigned. Kaun fix karega.", "Defect Reporter: Who reported. Tester reported. Kaun defect report kiya.", "Defect Dates: Report date, fix date, close date. Timeline.", "Defect Steps: Steps to reproduce. Reproduction steps. Test data.", "Repository Benefits: Central tracking — sabhi defects ek jagah. Historical data maintain karna. Analysis aur trends — defect patterns. Knowledge base build karna. Process improvement.", "Repository Tools: JIRA (popular), Bugzilla (old), Trello (simple), Asana (project management), Azure DevOps (Microsoft)."],
                },
                {
                  "type": "definition",
                  "title": "Defect Life Cycle",
                  "kicker": "Defect Life Cycle",
                  "body": "Defect Life Cycle defects ka lifecycle hai from creation to closure. States: 1. New — Defect reported. 2. Assigned — Defect assigned to developer. 3. In Progress — Developer working on fix. 4. Fixed — Developer fixed defect. 5. Retest — Tester verifying fix. 6. Closed — Fix confirmed, defect closed. 7. Reopened — Fix failed, defect reopened. 8. Deferred — Defect deferred for later fix. 9. Rejected — Defect not valid, rejected. Life cycle ensures proper tracking.",
                  "body2": "Defect lifecycle aise samjho — ek student ka education lifecycle. Admission (New), class assignment (Assigned), study (In Progress), exam pass (Fixed), result verification (Retest), pass (Closed). Agar exam fail (Reopened). Agar admission cancel (Rejected).",
                  "chips": ["New", "Assigned", "Fixed", "Retest", "Closed"],
                },
                {
                  "type": "points",
                  "title": "Defect Life Cycle Details",
                  "kicker": "Lifecycle States",
                  "points": ["New: Defect reported. Tester reports defect. Defect logged in repository. Yeh state mein defect sirf report hua hai.", "Assigned: Defect assigned. Developer assigned. Priority aur severity review. Triage team assign karte hain.", "In Progress: Developer working. Root cause analysis. Fix development. Developer defect fix kar raha hai.", "Fixed: Developer fixed. Fix implemented. Fix ready for testing. Developer fix kar chuka hai.", "Retest: Tester verifying. Tester retests. Fix verified. Tester fix check kar raha hai.", "Closed: Fix confirmed. Defect closed. No further action. Tester fix confirm kar chuka hai.", "Reopened: Fix failed. Fix didn't work. Defect reopened. Developer fix again. Tester fix verify karta hai toh fix fail ho jata hai.", "Deferred: Defect deferred. Fix later. Low priority defects. Kuch defects aise hain jo abhi fix nahi karna chahiye.", "Rejected: Defect not valid. Duplicate defect. Working as designed. Not a defect. Defect valid nahi hai."],
                },
                {
                  "type": "definition",
                  "title": "Defect Severity and Priority",
                  "kicker": "Severity vs Priority",
                  "body": "Defect Severity aur Priority defects ko classify karne ke liye use hote hain. Severity: Defect impact hai — kitna affected hai. Critical (system crash, data loss), High (major feature not working), Medium (moderate impact), Low (minor issue). Priority: Fix urgency hai — kitni jaldi fix karna hai. P1 (fix immediately), P2 (fix soon), P3 (fix when possible), P4 (optional). Severity vs Priority: High severity low priority (rare but critical), Low severity high priority (common but minor).",
                  "body2": "Severity aur priority aise samjho — ek bimaari ki seriousness (severity) aur treatment urgency (priority). Cancer ek rare bimaari hai (low priority) par bahut serious hai (high severity). Pregnancy common hai (high priority) par less serious hai (low severity).",
                  "chips": ["Severity", "Priority", "Critical", "High", "Medium", "Low"],
                },
                {
                  "type": "points",
                  "title": "Defect Severity and Priority Details",
                  "kicker": "Severity/Priority Details",
                  "points": ["Severity Levels: Critical — System crash, data loss, security breach. High — Major feature not working. Medium — Moderate impact. Low — Minor issue.", "Priority Levels: P1 — Fix immediately. Critical business impact. P2 — Fix soon. High business impact. P3 — Fix when possible. Moderate business impact. P4 — Optional. Low business impact.", "Severity vs Priority Combinations: High severity low priority — Rare but critical. Example: Security vulnerability (rare but critical). Low severity high priority — Common but minor. Example: UI typo (common but minor). High severity high priority — Critical and urgent. Example: System crash. Low severity low priority — Minor aur optional. Example: Color issue.", "Key Point: Severity ka matlab hai kitna affected hai. Priority ka matlab hai kitni jaldi fix karna hai. Dono alag concepts hain."],
                },
                {
                  "type": "diagram",
                  "title": "Defect Management Overview",
                  "kicker": "Diagram",
                  "diagram": "defect-management-overview",
                  "caption": "Defect Management — Origins, Classes, Repository, Life Cycle, Severity/Priority",
                },
                {
                  "type": "recap",
                  "title": "Recap",
                  "kicker": "5 Seconds Mein Yaad Karo",
                  "points": ["Defect Management: Defects identify, track, resolve process.", "Process: Identification → Logging → Triage → Assignment → Fixing → Verification → Closure.", "Defect Origins: Requirements (ambiguous, incomplete), Design (errors, logic), Coding (implementation, syntax), Configuration (errors, settings), Environment (hardware, software), Integration (interface, data).", "Defect Classes: Functional, Performance, Security, Usability, Compatibility, Documentation, UI.", "Defect Repository: Central tracking system with JIRA, Bugzilla. Components: ID, title, description, severity, priority, status, assignee, reporter, dates, steps.", "Defect Life Cycle: New → Assigned → In Progress → Fixed → Retest → Closed (or Reopened, Deferred, Rejected).", "Severity: Impact level (Critical, High, Medium, Low). Priority: Fix urgency (P1, P2, P3, P4)."],
                }
  ],
          "examQuestions": [
                {
                  "question": "What is defect management? Explain its process.",
                  "answer": "**Defect Management:** Defects ko identify, track, aur resolve karne ka process. Yeh process ensure karta hai ki har defect properly handle ho.\n\n**Objectives:** Defects identify karna, Defects track karna, Defects resolve karna, Quality improve karna, Customer satisfaction improve karna.\n\n**Defect Management Process (7 Steps):**\n\n1. **Defect Identification** — Defects find karna. Testing, reviews, feedback se. Tester testing karte waqt defects find karta hai.\n2. **Defect Logging** — Defects log karna. Defect tracker mein log karna. Defect details document karna. Defect ka pura details (severity, priority, steps) log kiya jata hai.\n3. **Defect Triage** — Defects prioritize karna. Severity aur priority assign karna. Triage team defects ka assessment karke priority assign karte hain.\n4. **Defect Assignment** — Defects assign karna. Developer ko assign karna. Defects respective developers ko assign kiye jaate hain.\n5. **Defect Fixing** — Developer defects fix karta hai. Root cause analyze karna. Fix implement karna. Developer root cause find karke fix karta hai.\n6. **Defect Verification** — Tester fix verify karta hai. Retest karna. Fix confirmed karna. Tester fix retest karke verify karta hai.\n7. **Defect Closure** — Defect close karna. Status update karna. Lessons learn karna. Fix confirmed hone par defect close kiya jata hai.\n\n**Benefits:** Quality improve karta hai, Cost reduce karta hai, Customer satisfaction improve karta hai, Process improvement karta hai.\n\n**Diagram:** Refer to Defect Management Overview diagram."
                },
                {
                  "question": "Describe defect origins with examples.",
                  "answer": "**Defect Origins — 6 Sources:**\n\n1. **Requirements Defects** — Ambiguous requirements (clearly nahi hai), Incomplete requirements (kuch missing hain), Inconsistent requirements (contradict each other), Changing requirements (badalte rehte hain), Unclear requirements (samajh nahi aata).\n   - *Example:* Requirements mein likha hai 'user fast login kar sake' — 'fast' clearly define nahi hai.\n\n2. **Design Defects** — Design errors, Logic errors in design, Interface design errors, Architecture errors, Design not meeting requirements.\n   - *Example:* Architecture mein scalability ka consideration nahi hua.\n\n3. **Coding Defects** — Implementation errors, Syntax errors, Logic errors in code, Coding mistakes, Incorrect implementation.\n   - *Example:* If condition mein '>' galat use hua hai, '<' hona chahiye.\n\n4. **Configuration Defects** — Configuration errors, Wrong settings, Missing configuration, Environment mismatches.\n   - *Example:* Database connection string galat hai.\n\n5. **Environment Defects** — Hardware issues, Software issues, Network issues, Compatibility issues.\n   - *Example:* Server hardware capacity kam hai, system slow ho raha hai.\n\n6. **Integration Defects** — Interface errors, Data issues, API errors, Communication errors.\n   - *Example:* Two modules ke beech data format mismatch hai.\n\n**Understanding origins helps prevent defects** — jaise requirements defects ko requirements phase mein hi fix kar sakte hain.\n\n**Diagram:** Refer to Defect Management Overview diagram."
                },
                {
                  "question": "Explain the defect life cycle with all states.",
                  "answer": "**Defect Life Cycle — 9 States:**\n\n1. **New** — Defect reported. Tester reports defect. Defect logged in repository. Yeh pehla state hai — defect sirf report hua hai.\n\n2. **Assigned** — Defect assigned. Developer assigned. Priority aur severity review. Triage team assign karte hain.\n\n3. **In Progress** — Developer working. Root cause analysis. Fix development. Developer defect fix kar raha hai.\n\n4. **Fixed** — Developer fixed. Fix implemented. Fix ready for testing. Developer fix kar chuka hai.\n\n5. **Retest** — Tester verifying. Tester retests. Fix verified. Tester fix check kar raha hai.\n\n6. **Closed** — Fix confirmed. Defect closed. No further action. Tester fix confirm kar chuka hai.\n\n7. **Reopened** — Fix failed. Fix didn't work. Defect reopened. Developer fix again. Fix fail hone par defect reopened kiya jata hai.\n\n8. **Deferred** — Defect deferred. Fix later. Low priority defects. Kuch defects aise hain jo abhi fix nahi karna chahiye.\n\n9. **Rejected** — Defect not valid. Duplicate defect. Working as designed. Not a defect. Defect valid nahi hai — reject kiya jata hai.\n\n**Normal Flow:** New → Assigned → In Progress → Fixed → Retest → Closed\n\n**Alternative Flows:**\n- New → Assigned → In Progress → Fixed → Retest → Reopened → In Progress → Fixed → Retest → Closed\n- New → Deferred\n- New → Rejected\n\n**Diagram:** Refer to Defect Management Overview diagram."
                },
                {
                  "question": "Differentiate between defect severity and priority with examples.",
                  "answer": "**Defect Severity vs Priority:**\n\n**Severity** — Defect impact kitna hai. Kitne users affected hain. Kitna damage hai.\n\n- **Critical:** System crash, data loss, security breach. Example: Login system crash, bank transaction fail.\n- **High:** Major feature not working. Example: Payment gateway not working.\n- **Medium:** Moderate impact. Example: Some fields not validating correctly.\n- **Low:** Minor issue. Example: Typo in error message.\n\n**Priority** — Fix urgency kitna hai. Kitni jaldi fix karna hai.\n\n- **P1:** Fix immediately. Critical business impact. Example: System down, users access nahi kar paa rahe.\n- **P2:** Fix soon. High business impact. Example: Major feature broken.\n- **P3:** Fix when possible. Moderate business impact. Example: Minor feature issue.\n- **P4:** Optional. Low business impact. Example: Cosmetic issue.\n\n**Severity vs Priority Combinations:**\n\n| Combination | Meaning | Example |\n|---|---|---|\n| High severity, Low priority | Rare but critical | Security vulnerability (rare but dangerous) |\n| Low severity, High priority | Common but minor | UI typo (common, quickly fix) |\n| High severity, High priority | Critical and urgent | System crash (must fix immediately) |\n| Low severity, Low priority | Minor and optional | Color issue (cosmetic) |\n\n**Key Point:** Severity ka matlab hai kitna affected hai. Priority ka matlab hai kitni jaldi fix karna hai. Dono alag concepts hain — high severity defect low priority bhi ho sakta hai.\n\n**Diagram:** Refer to Defect Management Overview diagram."
                }
  ]
        }
      ]
    },
    {
      "id": "unit-3",
      "number": "3",
      "name": "Software Testing Techniques",
      "topics": softwareTestingUnit3Topics
    },
    {
      "id": "unit-4",
      "number": "4",
      "name": "Testing Strategies",
      "topics": softwareTestingUnit4Topics
    },
    {
      "id": "unit-5",
      "number": "5",
      "name": "Software Test Automation",
      "topics": softwareTestingUnit5Topics
    }
  ],
  "data-science": dataScienceUnits,
  "web-technology": webTechnologyUnits
};
