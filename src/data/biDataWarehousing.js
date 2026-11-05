// Business Intelligence — Unit II: Data Warehousing and Data Preparation
// Topics 2.1 – 2.9, teacher-style Hinglish notes + exam Q&A.

export const biWarehousingTopics = [
  {
    "id": "operational-vs-dw",
    "number": "2.1",
    "title": "Operational Databases vs Data Warehouses",
    "subtitle": "Roz ka kaam vs analysis — OLTP aur OLAP ka farq",
    "icon": "database",
    "accent": "#00d4ff",
    "englishDefinition": "An operational database supports the day-to-day transactions of a business: it is designed with a normalized schema, holds only current data, and is optimized for many small, concurrent read-write operations with sub-second response - the classic OLTP workload. A data warehouse is a subject-oriented, integrated, time-variant and non-volatile store built for analysis: it holds historical, summarized and denormalized data (star or snowflake schemas) and is optimized for a small number of large, complex, read-only queries that scan millions of rows - the OLAP workload. The two differ in purpose, schema design, data currency, granularity, volume, indexing, concurrency pattern, backup and recovery needs, and in the people who use them. Mixing the two on one system causes lock contention and slow reports, which is why warehouses are separated from operational systems and loaded through ETL. The warehouse does not replace the operational database: the operational system is the system of record for transactions, while the warehouse is the system of record for history and analysis, and the two are linked by a pipeline that extracts, transforms and loads data on a schedule.",
    "intro": "**Operational database** = roz ka kaam (billing, orders, banking) — **OLTP**, normalized schema, current data, chhoti-chhoti fast transactions. **Data warehouse** = analysis ke liye — **OLAP**, denormalized (star/snowflake), historical data, badi complex queries. Dono ka kaam alag hai: ek **system of record for transactions**, doosra **system of record for history**. Isliye warehouse alag banaya jaata hai aur ETL se bhara jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Do duniya — OLTP aur OLAP",
        "kicker": "Definition",
        "body": "**Operational database (OLTP):** customer ka order, payment, inventory update — har second ka kaam. Schema **normalized** hota hai (3NF) taaki duplicate na ho aur update safe rahe. Data **current** hota hai; purana data archive ho jaata hai.",
        "body2": "**Data warehouse (OLAP):** \"pichhle 3 saal mein region-wise sales ka trend kya raha?\" — aise sawaalon ke liye. Data **denormalized** (star schema), **historical**, summarize kiya hua. Ek query lakhon rows scan karti hai, isliye column-store, bitmap index aur partitioning use hoti hai.",
        "chips": [
          "OLTP",
          "OLAP",
          "normalization",
          "star schema",
          "historical data"
        ]
      },
      {
        "type": "comparison",
        "title": "Operational database vs data warehouse",
        "kicker": "Comparison",
        "columns": [
          "Operational database (OLTP)",
          "Data warehouse (OLAP)"
        ],
        "rows": [
          {
            "label": "Purpose",
            "values": [
              "run the business (transactions)",
              "analyse the business (decisions)"
            ]
          },
          {
            "label": "Workload",
            "values": [
              "many small read-write",
              "few large read-only"
            ]
          },
          {
            "label": "Response time",
            "values": [
              "milliseconds",
              "seconds to minutes"
            ]
          },
          {
            "label": "Schema",
            "values": [
              "normalized (3NF)",
              "denormalized (star / snowflake)"
            ]
          },
          {
            "label": "Data",
            "values": [
              "current, detailed",
              "historical, summarized"
            ]
          },
          {
            "label": "Operations",
            "values": [
              "INSERT/UPDATE/DELETE",
              "bulk load + SELECT"
            ]
          },
          {
            "label": "Size",
            "values": [
              "GB, grows with transactions",
              "TB-PB, grows with history"
            ]
          },
          {
            "label": "Users",
            "values": [
              "clerks, apps, customers",
              "analysts, managers, BI tools"
            ]
          },
          {
            "label": "Indexing",
            "values": [
              "B-tree on keys",
              "bitmap, columnar, partition"
            ]
          },
          {
            "label": "Backup / recovery",
            "values": [
              "point-in-time, critical",
              "periodic reload possible"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00e676"
        ]
      },
      {
        "type": "cards",
        "title": "Teen characters jo yaad rakhne hain",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "database",
            "title": "OLTP system",
            "body": "Order entry, banking core, billing — high concurrency, strict ACID, row-level locks."
          },
          {
            "icon": "cube",
            "title": "OLAP warehouse",
            "body": "Subject-wise, integrated, historical — complex aggregations, star joins, scans."
          },
          {
            "icon": "flow",
            "title": "ETL bridge",
            "body": "Operational data ko extract -> transform -> load karke warehouse mein daalta hai."
          },
          {
            "icon": "layers",
            "title": "Data mart",
            "body": "Warehouse ka chhota, department-specific subset (sales mart, HR mart)."
          },
          {
            "icon": "clock",
            "title": "Batch vs real-time",
            "body": "Classic DW nightly batch; modern stack streaming/CDC ke saath near real-time."
          },
          {
            "icon": "warn",
            "title": "Kyun alag rakhein",
            "body": "Warehouse ki heavy query production system ko slow kar deti hai (lock contention)."
          }
        ]
      },
      {
        "type": "points",
        "title": "Kyun warehouse ko alag system banana padta hai",
        "kicker": "Design Logic",
        "points": [
          "**Performance:** ek aggregate query operational tables par lock contention aur slow billing create karti hai.",
          "**History:** OLTP sirf current state rakhta hai; trend analysis ke liye saalon ka data chahiye.",
          "**Integration:** data 5 systems (ERP, CRM, POS, web, finance) se aata hai — pehle harmonise karna hota hai.",
          "**Schema:** analyst ko star schema chahiye, developer ko 3NF — dono ek table set par nahi chal sakte.",
          "**Governance:** reporting ke liye read-only access dena safe hai; production DB par nahi.",
          "**Recomputation:** warehouse ko galat load se reload kiya ja sakta hai; transactions ko nahi."
        ]
      },
      {
        "type": "example",
        "title": "Retail chain ka example",
        "kicker": "Example",
        "body": "Ek retail chain ka **POS/ERP** OLTP system hai: har bill ek transaction (INSERT into sales, UPDATE inventory). Manager ko chahiye \"last quarter mein Pune region mein footwear ka margin, store-wise\" — ye query OLTP par chalane se billing slow ho jaayegi. Isliye raat ko ETL chalta hai: sales, inventory, customer aur product master data extract hote hain, clean hote hain, aur `fact_sales` + `dim_store`, `dim_product`, `dim_date` mein load hote hain. Subah analyst star schema par query chalata hai — production untouched."
      },
      {
        "type": "diagram",
        "title": "Operational database vs data warehouse",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "bw-oltp-olap",
        "caption": "OLTP sources -> ETL -> subject-oriented warehouse (star schema, history) -> OLAP queries and BI dashboards, with the point-by-point contrast"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**OLTP:** transactions, normalized, current, fast small writes.",
          "**OLAP:** analysis, denormalized, historical, heavy reads.",
          "**Warehouse ka role:** system of record for history.",
          "**OLTP ka role:** system of record for transactions.",
          "**Bridge:** ETL/ELT pipeline.",
          "**Exam line:** same data nahi — same business ke do alag purposes."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between operational databases and data warehouses.",
        "answer": "Dono ka purpose hi alag hai: ek business **chalata** hai, doosra business ko **samajhne** mein help karta hai.\n\n| Point | Operational database (OLTP) | Data warehouse (OLAP) |\n|---|---|---|\n| Purpose | day-to-day transactions | analysis aur decision support |\n| Workload | many small read-write | few large read-only |\n| Response time | milliseconds | seconds to minutes |\n| Schema | normalized (3NF) | denormalized (star/snowflake) |\n| Data | current, detailed | historical, summarized |\n| Operations | INSERT/UPDATE/DELETE | bulk load, SELECT |\n| Size | GB | TB to PB |\n| Users | clerks, applications | analysts, managers, BI tools |\n| Indexing | B-tree | bitmap, columnar, partition |\n| Backup | point-in-time critical | periodic reload possible |\n\n**Explanation:** OLTP system me ACID aur concurrency important hai; warehouse me scan speed aur aggregation important hai. Isliye warehouse alag system hota hai aur ETL se load hota hai — warna heavy analytical query production ko slow kar degi.\n\n**Diagram:** Refer to the Operational database vs data warehouse diagram."
      },
      {
        "question": "Explain OLTP and OLAP with examples and state why both are needed.",
        "answer": "**OLTP (Online Transaction Processing):**\n- Chhoti, fast, concurrent transactions.\n- Example: bank mein paisa transfer, e-commerce order placement, hospital billing.\n- Requirements: ACID, row-level locking, indexes on keys, high concurrency.\n\n**OLAP (Online Analytical Processing):**\n- Badi, complex, read-only queries with aggregation.\n- Example: \"quarter-wise region-wise product margin\", \"campaign ka ROI\", \"student performance trend\".\n- Requirements: star schema, bitmap/columnar storage, partitioning, pre-aggregation (cubes).\n\n**Kyun dono chahiye:**\n1. **Different workload** — ek hi system par dono chalane se lock contention.\n2. **Different schema** — 3NF updates ke liye, star reads ke liye.\n3. **History** — OLTP current state rakhta hai, OLAP years ka history.\n4. **Integration** — multiple sources ko ek model mein laana padta hai.\n5. **Governance** — analysts ko read-only replica chahiye, production par nahi.\n\n**Rule of thumb:** OLTP = \"kya hua abhi\", OLAP = \"pattern kya hai\".\n\n**Diagram:** Refer to the Operational database vs data warehouse diagram."
      },
      {
        "question": "Why is a separate data warehouse required when organisations already have operational systems?",
        "answer": "Operational systems business chalane ke liye bane hain, analysis ke liye nahi.\n\n**1. Performance isolation**\n- Analytical query lakhon rows scan karti hai.\n- Production par chalane se billing/orders slow, locks aur timeouts.\n\n**2. Historical depth**\n- OLTP current state rakhta hai; purana data archive/delete ho jaata hai.\n- Trend aur YoY comparison ke liye multi-year history chahiye.\n\n**3. Integrated single view**\n- Data ERP, CRM, POS, web, finance — sabme alag codes.\n- Warehouse pehle standardise karta hai, phir ek model deta hai.\n\n**4. Analysis-friendly schema**\n- Star/snowflake analyst ke liye simple; 3NF developer ke liye.\n- Dimension/fact model se BI tools fast chalte hain.\n\n**5. Data quality and cleansing**\n- Duplicate customers, missing pincodes, inconsistent dates — ETL mein fix hote hain.\n\n**6. Governance and security**\n- Read-only access, masking, row-level security analysts ke liye.\n- Production DB par direct access risk hai.\n\n**7. Non-volatile snapshot**\n- Warehouse ka data stable hota hai, isliye do reports same number dete hain (reproducibility).\n\n**Diagram:** Refer to the Operational database vs data warehouse diagram."
      }
    ]
  },
  {
    "id": "dw-characteristics",
    "number": "2.2",
    "title": "Characteristics of Data Warehouses",
    "subtitle": "Subject-oriented, integrated, time-variant, non-volatile",
    "icon": "warehouse",
    "accent": "#00e676",
    "englishDefinition": "A data warehouse is defined by four characteristics introduced by Bill Inmon. It is subject-oriented: it is organised around business subjects such as customer, product, sales or finance rather than around application functions, so each subject has a complete, consistent view across the enterprise. It is integrated: data arriving from many heterogeneous sources is made consistent in naming, coding, units, formats and semantics before it is stored, so one customer has one representation. It is time-variant: every record carries a time dimension, data is stored as snapshots or with effective dates, and the warehouse holds years of history rather than only the current state. It is non-volatile: data is loaded and refreshed in bulk, is not updated or deleted by users in the normal course of analysis, and survives as a stable snapshot so that repeated queries return the same answer. Beyond these four, practical warehouses are also summarized and granular at multiple levels, metadata-driven, read-optimised, subject to ETL scheduling and quality checks, scalable, secure and auditable. Together these properties explain why a warehouse supports consistent historical analysis, and why building one is mostly a data-integration and data-quality effort rather than a database installation.",
    "intro": "Inmon ke **chaar characteristics**: **subject-oriented** (customer/product/sales ke hisaab se, na ki application ke hisaab se), **integrated** (alag sources ka coding, naming, units ek jaisa), **time-variant** (har record ke saath time dimension, saalon ka history), **non-volatile** (load ke baad update/delete nahi — stable snapshot). Iske alawa practical properties: multi-level summarization, metadata-driven, read-optimised, secure aur auditable.",
    "sections": [
      {
        "type": "definition",
        "title": "Chaar core characteristics",
        "kicker": "Definition",
        "body": "**1. Subject-oriented:** warehouse application ke bajaye **business subject** ke around banta hai — customer, product, sales, finance, inventory. Isliye har subject ka ek hi consistent view milta hai.",
        "body2": "**2. Integrated:** ERP ka `CUST_NO`, CRM ka `customer_id`, POS ka `phone` — sabko ek `customer_key` par laana, units (kg/g, INR/USD), codes (M/F, Male/Female) aur formats (DD-MM-YYYY) standardise karna.",
        "chips": [
          "subject-oriented",
          "integrated",
          "time-variant",
          "non-volatile"
        ]
      },
      {
        "type": "cards",
        "title": "Chaar characteristics — detail",
        "kicker": "The Four Pillars",
        "cards": [
          {
            "icon": "users",
            "title": "Subject-oriented",
            "body": "Business subject ke hisaab se design; application-oriented nahi. Customer, product, sales, finance."
          },
          {
            "icon": "layers",
            "title": "Integrated",
            "body": "Naming, coding, units, formats, semantics consistent — duplicate customer ek hi key par."
          },
          {
            "icon": "clock",
            "title": "Time-variant",
            "body": "Har fact ke saath date/time; snapshots aur effective dates; 5-10 saal ka history."
          },
          {
            "icon": "lock",
            "title": "Non-volatile",
            "body": "Bulk load ke baad read-only; users update/delete nahi karte; stable snapshot."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Practical characteristics (exam mein bonus points)",
        "kicker": "Beyond The Four",
        "cards": [
          {
            "icon": "cube",
            "title": "Summarized + granular",
            "body": "Multiple levels: daily detail se monthly/yearly aggregate (drill-down possible)."
          },
          {
            "icon": "tag",
            "title": "Metadata-driven",
            "body": "Business glossary, data dictionary, lineage — warehouse ka \"index\"."
          },
          {
            "icon": "speed",
            "title": "Read-optimised",
            "body": "Star joins, bitmap/columnar, partitioning, materialized views."
          },
          {
            "icon": "chart",
            "title": "Historical & comparative",
            "body": "Trend, YoY, seasonality — time dimension ke bina possible nahi."
          },
          {
            "icon": "shield",
            "title": "Secure & auditable",
            "body": "Row-level security, masking, access logs, audit trail."
          },
          {
            "icon": "refresh",
            "title": "Scheduled refresh",
            "body": "ETL windows, incremental loads, CDC, data freshness SLA."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Characteristic ka practical matlab",
        "kicker": "Comparison",
        "columns": [
          "Characteristic",
          "Agar ye na ho to"
        ],
        "rows": [
          {
            "label": "Subject-oriented",
            "values": [
              "application-wise silos, cross-subject analysis nahi",
              "subject view, drill-across possible"
            ]
          },
          {
            "label": "Integrated",
            "values": [
              "same customer 4 baar, numbers mismatch",
              "one customer, one truth"
            ]
          },
          {
            "label": "Time-variant",
            "values": [
              "sirf current state, trend nahi",
              "history, YoY, seasonality"
            ]
          },
          {
            "label": "Non-volatile",
            "values": [
              "report dobara chalane par number badal jaaye",
              "reproducible results"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#00e676"
        ]
      },
      {
        "type": "example",
        "title": "Integrated ka concrete example",
        "kicker": "Example",
        "body": "Teen source: ERP mein `M`, CRM mein `Male`, hospital app mein `1`. Warehouse mein ek standard code `GENDER_M` banta hai aur mapping table (`source_code -> standard_code`) metadata mein store hoti hai. Isi tarah dates: ERP `12-05-2024` (DD-MM), US CRM `05/12/2024` (MM-DD), web `2024-05-12T00:00:00Z` — sab `DATE_KEY = 20240512` par convert hote hain. Bina is standardisation ke cross-source report galat aayega."
      },
      {
        "type": "points",
        "title": "Exam points — kaise yaad rakhein",
        "kicker": "Memory Hook",
        "points": [
          "**Mnemonic:** **SITN** — Subject-oriented, Integrated, Time-variant, Non-volatile.",
          "**Subject-oriented:** \"kaunse business subject par sawaal?\"",
          "**Integrated:** \"sab sources ka ek hi language\".",
          "**Time-variant:** \"har row ke saath kab ka data\".",
          "**Non-volatile:** \"load ke baad chhed-chhaad nahi\".",
          "**Extra:** summarized, metadata-driven, read-optimised, secure."
        ]
      },
      {
        "type": "diagram",
        "title": "Data warehouse characteristics",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "bw-characteristics",
        "caption": "Four pillars SITN with an example of each, plus the practical properties: summarization, metadata, read optimisation, security and scheduled refresh"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**SITN:** Subject-oriented, Integrated, Time-variant, Non-volatile (Inmon).",
          "**Subject-oriented:** business subject ke hisaab se, application ke nahi.",
          "**Integrated:** naming/coding/units/formats consistent.",
          "**Time-variant:** history + time dimension.",
          "**Non-volatile:** read-only stable snapshot.",
          "**Extra:** summarized, metadata-driven, secure, scheduled ETL."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the characteristics of a data warehouse.",
        "answer": "Data warehouse ki pehchaan Inmon ke **chaar characteristics** se hoti hai (SITN).\n\n**1. Subject-oriented**\n- Application ke bajaye business subject ke around design: customer, product, sales, finance.\n- Example: sales subject mein POS, web aur distributor — teeno ka sales data.\n\n**2. Integrated**\n- Multiple heterogeneous sources ka data consistent banaya jaata hai.\n- Naming (`cust_no` = `customer_id`), coding (M/Male/1), units (kg/g), formats (dates), semantics.\n- Result: one customer, one truth.\n\n**3. Time-variant**\n- Har record ke saath time dimension; snapshots / effective dates.\n- 5-10 saal ka history, isliye trend, YoY aur seasonality analysis possible.\n\n**4. Non-volatile**\n- Data bulk load hota hai, users update/delete nahi karte.\n- Stable snapshot se repeated queries same answer deti hain.\n\n**Additional practical characteristics:**\n5. **Summarized + granular** — multiple aggregation levels (drill-down/roll-up).\n6. **Metadata-driven** — data dictionary, business glossary, lineage.\n7. **Read-optimised** — star schema, bitmap/columnar, partitioning.\n8. **Secure and auditable** — RLS, masking, access logs.\n9. **Scheduled refresh** — ETL windows, incremental load, freshness SLA.\n\n**Diagram:** Refer to the Data warehouse characteristics diagram."
      },
      {
        "question": "What is meant by \"integrated\" and \"non-volatile\" in a data warehouse? Explain with examples.",
        "answer": "**INTEGRATED — sab sources ko ek bhasha mein laana.**\n\nJab data ERP, CRM, POS, hospital app se aata hai to:\n1. **Naming conflict:** `cust_no` vs `customer_id` vs `phone` -> `customer_key`.\n2. **Coding conflict:** `M` vs `Male` vs `1` -> `GENDER_M`.\n3. **Unit conflict:** weights kg aur g mein, currency INR aur USD -> standard units + conversion table.\n4. **Format conflict:** `12-05-2024`, `05/12/2024`, ISO timestamp -> `DATE_KEY = 20240512`.\n5. **Semantic conflict:** \"revenue\" = gross ya net? Definition business glossary mein fix.\n\nExample: teen systems ka same customer warehouse mein **ek** `customer_key` par merge hota hai, isliye lifetime value sahi nikalti hai.\n\n**NON-VOLATILE — load ke baad stable.**\n\n1. Data **bulk load** se aata hai (ETL), row-by-row user update nahi.\n2. Analysts sirf **read** karte hain (SELECT) — koi UPDATE/DELETE nahi.\n3. Correction ka tareeka: naya load ya naya snapshot, purana record preserve.\n4. Fayda: **reproducibility** — ek report dobara chalane par same number.\n5. Comparison: OLTP volatile hai (har second badalta hai), warehouse non-volatile.\n\nExample: agar 2023 ka sales figure baad mein badal jaata to audit fail ho jaata; non-volatile hone se 2023 ka snapshot waisa hi rehta hai.\n\n**Diagram:** Refer to the Data warehouse characteristics diagram."
      },
      {
        "question": "Why is building a data warehouse mainly a data integration and data quality effort?",
        "answer": "Kyunki database install karna aasan hai — **sahi data laana** mushkil.\n\n**1. Heterogeneous sources**\n- ERP, CRM, POS, spreadsheets, APIs, logs — alag schema, alag codes.\n- Integration ke bina warehouse sirf ek aur silo ban jaata hai.\n\n**2. Integration effort**\n- Source profiling, mapping, transformation rules, surrogate keys.\n- Conflict resolution (kaunsa source authoritative hai).\n\n**3. Data quality effort**\n- Missing values, duplicates, invalid dates, negative quantity, test records.\n- Rules + exception handling + stewardship ke bina reports par bharosa nahi.\n\n**4. Historical consistency**\n- Purane data ke codes badal gaye hote hain (product recoded, store closed).\n- Slowly changing dimensions se history preserve karni padti hai.\n\n**5. Governance**\n- Metadata, business glossary, ownership, access control, audit.\n\n**6. Effort distribution (industry rule of thumb)**\n- 60-80% time integration + cleansing, 20-40% modelling + reporting.\n\n**Isliye:** \"warehouse project = data project\", technology sirf 20% hai.\n\n**Diagram:** Refer to the Data warehouse characteristics diagram."
      }
    ]
  },
  {
    "id": "dw-architecture",
    "number": "2.3",
    "title": "Data Warehouse Architecture (Three-Tier)",
    "subtitle": "Bottom: data, middle: OLAP server, top: BI tools",
    "icon": "layers",
    "accent": "#ff8800",
    "englishDefinition": "A data warehouse architecture describes how source data becomes analysis: which layers exist, what each layer does, and how data moves between them. In the widely taught three-tier model - the one used in most textbooks and interviews - the bottom tier is the data warehouse database server: back-end tools extract data from source systems, clean and transform it in a staging area, and load it into the warehouse database, with metadata and ETL jobs managed here. The middle tier is the OLAP server: it presents a multidimensional view of warehouse data, either by translating OLAP operations into SQL over a relational star schema (ROLAP), by pre-computing data cubes (MOLAP), or by combining both (HOLAP). The top tier is the front-end client layer: query and reporting tools, dashboards, spreadsheets, ad-hoc analysis, data mining and, increasingly, natural-language assistants that consume the served data. Practical implementations add a staging area before the warehouse, one or more dependent or independent data marts after it, a metadata repository spanning every layer, and a scheduler/ETL manager that orchestrates the loads. Compared with a two-tier design, three-tier separates query serving from storage, which allows scaling each layer independently and keeps heavy aggregation away from the database server.",
    "intro": "**Three-tier architecture:** **Bottom tier** = data warehouse DB server + back-end (extraction, cleaning, transformation, load, staging, metadata). **Middle tier** = **OLAP server** (ROLAP / MOLAP / HOLAP) jo multidimensional view deta hai. **Top tier** = front-end tools (query, reporting, dashboard, data mining, NL assistant). Practical deployment mein staging area, data marts, metadata repository aur scheduler bhi hote hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Architecture kya batati hai",
        "kicker": "Definition",
        "body": "Architecture batati hai: **kaunse layers hain, har layer ka kaam kya hai, aur data kaise travel karta hai**. Exam mein three-tier model hi poocha jaata hai.",
        "body2": "Core idea: **storage (bottom)**, **serving (middle)** aur **consumption (top)** ko alag rakho — taaki har layer independently scale ho sake.",
        "chips": [
          "bottom tier",
          "OLAP server",
          "front-end",
          "staging",
          "data mart"
        ]
      },
      {
        "type": "cards",
        "title": "Teen tiers ka kaam",
        "kicker": "The Three Tiers",
        "cards": [
          {
            "icon": "database",
            "title": "Bottom tier — DW server",
            "body": "Warehouse database; back-end ETL, staging area, metadata, load jobs, aggregation."
          },
          {
            "icon": "cube",
            "title": "Middle tier — OLAP server",
            "body": "Multidimensional model; slice/dice/drill/rollup; ROLAP / MOLAP / HOLAP."
          },
          {
            "icon": "monitor",
            "title": "Top tier — front-end",
            "body": "Query & reporting, dashboards, spreadsheets, ad-hoc, data mining, NL/Q&A."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Supporting components (practical view)",
        "kicker": "Supporting Layers",
        "cards": [
          {
            "icon": "flow",
            "title": "Staging area",
            "body": "Raw extract land karta hai; validate, clean, transform — warehouse se alag."
          },
          {
            "icon": "folder",
            "title": "Data marts",
            "body": "Department-specific subset: dependent (warehouse se) ya independent (direct sources se)."
          },
          {
            "icon": "tag",
            "title": "Metadata repository",
            "body": "Source definitions, mappings, business glossary, lineage, load stats."
          },
          {
            "icon": "clock",
            "title": "Scheduler / ETL manager",
            "body": "Job order, dependencies, retries, alerting, SLA monitoring."
          },
          {
            "icon": "shield",
            "title": "Security layer",
            "body": "Authentication, row-level security, masking, audit."
          },
          {
            "icon": "chart",
            "title": "Presentation",
            "body": "Semantic layer jo BI tools ko friendly names, measures aur hierarchies deta hai."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "ROLAP vs MOLAP vs HOLAP",
        "kicker": "Comparison",
        "columns": [
          "ROLAP",
          "MOLAP",
          "HOLAP"
        ],
        "rows": [
          {
            "label": "Data kahan",
            "values": [
              "relational star schema",
              "pre-built cube (proprietary)",
              "dono"
            ]
          },
          {
            "label": "Speed",
            "values": [
              "aggregation par SQL, medium",
              "fastest for aggregates",
              "summary fast, detail SQL"
            ]
          },
          {
            "label": "Storage",
            "values": [
              "kam (no duplication)",
              "zyada (cube copy)",
              "balanced"
            ]
          },
          {
            "label": "Detail drill-down",
            "values": [
              "excellent",
              "limited",
              "excellent for detail"
            ]
          },
          {
            "label": "Freshness",
            "values": [
              "near real-time possible",
              "cube refresh chahiye",
              "mixed"
            ]
          },
          {
            "label": "Use case",
            "values": [
              "large detail, SQL warehouse",
              "fixed KPIs, fast dashboards",
              "hybrid BI estate"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800",
          "#00e676"
        ]
      },
      {
        "type": "points",
        "title": "Three-tier kyun (two-tier se behtar)",
        "kicker": "Design Benefits",
        "points": [
          "**Scalability:** storage aur OLAP serving alag scale hote hain.",
          "**Performance:** heavy aggregation middle tier par, database par nahi.",
          "**Flexibility:** ek hi warehouse par multiple front-end tools.",
          "**Security:** middle tier par semantic + access control enforce kar sakte hain.",
          "**Maintainability:** tool badalna = sirf top tier badalna.",
          "**Concurrency:** dashboards aur ad-hoc queries ek doosre ko block nahi karte."
        ]
      },
      {
        "type": "example",
        "title": "Bank ka warehouse — layer by layer",
        "kicker": "Example",
        "body": "**Sources:** core banking (OLTP), ATM switch, net-banking logs, credit bureau file, CRM. **Staging:** nightly extract `stg_txn`, `stg_customer` mein; duplicate aur invalid rows flag. **Transform:** customer key generate, product code standardise, `fact_txn` + `dim_customer`, `dim_account`, `dim_date`. **Bottom tier:** warehouse DB par star schema. **Middle tier:** OLAP server monthly balances aur branch-wise aggregates serve karta hai. **Top tier:** risk dashboard, regulatory report, branch manager ka weekly view. **Metadata:** RBI report ka definition glossary mein."
      },
      {
        "type": "diagram",
        "title": "Data warehouse three-tier architecture",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "bw-architecture",
        "caption": "Sources -> staging -> ETL -> warehouse (bottom), OLAP server with ROLAP/MOLAP/HOLAP (middle), and front-end BI tools (top), with metadata and scheduler spanning the tiers"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Bottom tier:** DW database + ETL + staging + metadata.",
          "**Middle tier:** OLAP server — ROLAP / MOLAP / HOLAP.",
          "**Top tier:** query, reporting, dashboard, mining, NL.",
          "**Marts:** dependent (warehouse se) ya independent (sources se).",
          "**Why three-tier:** scale, performance, flexibility, security.",
          "**Exam line:** storage, serving aur consumption alag rakho."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the three-tier architecture of a data warehouse with a diagram.",
        "answer": "Data warehouse ka classic **three-tier architecture** storage, serving aur consumption ko alag karta hai.\n\n**1. Bottom tier — Data warehouse database server**\n- Warehouse database (star/snowflake schema).\n- **Back-end tools:** extraction, cleaning, transformation, load (ETL).\n- **Staging area:** raw extracts, validation, temporary tables.\n- Metadata repository aur job scheduling bhi isi layer mein.\n\n**2. Middle tier — OLAP server**\n- Warehouse data ka multidimensional view deta hai.\n- Operations: slice, dice, drill-down, roll-up, pivot.\n- Implementations:\n  - **ROLAP** — OLAP operations ko SQL queries mein translate karta hai (relational star schema).\n  - **MOLAP** — pre-computed cubes (fast aggregates, extra storage).\n  - **HOLAP** — summary cube + detail relational.\n\n**3. Top tier — Front-end client layer**\n- Query & reporting tools, dashboards, spreadsheets.\n- Ad-hoc analysis, data mining, alerting, natural-language Q&A.\n\n**Supporting components:** staging area, data marts (dependent/independent), metadata repository, scheduler, security layer, semantic layer.\n\n**Data flow:** sources -> staging -> ETL -> warehouse -> OLAP server -> BI tools -> users.\n\n**Diagram:** Refer to the Data warehouse three-tier architecture diagram."
      },
      {
        "question": "Compare ROLAP, MOLAP and HOLAP. Which one would you choose and why?",
        "answer": "Teeno OLAP server ke implementation options hain.\n\n| Point | ROLAP | MOLAP | HOLAP |\n|---|---|---|---|\n| Data location | relational star schema | pre-built cube | cube + relational |\n| Speed (aggregates) | medium (SQL) | fastest | fast |\n| Storage | low | high (cube copy) | balanced |\n| Detail drill-down | excellent | limited | good |\n| Freshness | near real-time | cube refresh needed | mixed |\n| Best for | large detail data | fixed KPI dashboards | hybrid estate |\n\n**ROLAP:** OLAP queries ko SQL mein convert; existing warehouse DB ka faayda, detail tak drill possible; aggregates slow ho sakte hain.\n\n**MOLAP:** cube pre-compute; dashboards fastest; storage zyada, detail limited, refresh ka jhanjhat.\n\n**HOLAP:** summary cube mein, detail warehouse mein — balance.\n\n**Choice kaise karein:**\n1. **Fixed KPI dashboards + speed critical** -> MOLAP.\n2. **Large detail + ad-hoc queries + freshness** -> ROLAP.\n3. **Mixed workload / budget balance** -> HOLAP.\n4. **Cloud columnar warehouse (BigQuery, Snowflake, Redshift)** -> practically ROLAP-style with materialized views.\n\n**Exam line:** pehle workload samjho, phir OLAP flavour chuno.\n\n**Diagram:** Refer to the Data warehouse three-tier architecture diagram."
      },
      {
        "question": "Differentiate two-tier and three-tier data warehouse architectures.",
        "answer": "| Point | Two-tier | Three-tier |\n|---|---|---|\n| Layers | warehouse DB + client tools | DB + OLAP server + client tools |\n| Where aggregation | client ya database par | middle-tier OLAP server par |\n| Scalability | limited (client heavy) | each tier independently scalable |\n| Performance | heavy queries DB ko load karti hain | aggregation middle tier par |\n| Concurrency | client races, DB contention | server-managed, better throughput |\n| Tool support | tool-specific | multiple front-ends ek hi server par |\n| Security | DB aur client par | middle tier par centralised |\n| Maintenance | tool upgrade = client upgrade | only top tier changes |\n| Cost | low | higher (extra server) |\n| Suits | small, single-department warehouse | enterprise warehouse, many users |\n\n**Explanation:** two-tier mein client tool directly warehouse DB se baat karta hai — users badhne par DB par load aur inconsistent semantics. Three-tier mein OLAP server beech mein aa jaata hai: aggregation, caching aur a common semantic model deta hai.\n\n**Verdict:** enterprise ke liye three-tier; chhote pilot ke liye two-tier chal sakta hai.\n\n**Diagram:** Refer to the Data warehouse three-tier architecture diagram."
      }
    ]
  },
  {
    "id": "etl-process",
    "number": "2.4",
    "title": "ETL Process: Extraction, Transformation and Loading",
    "subtitle": "Extract, transform, load — pipeline ka dil",
    "icon": "flow",
    "accent": "#aa00ff",
    "englishDefinition": "ETL is the pipeline that moves data from source systems into a data warehouse, in three stages. Extraction pulls data from operational databases, files, APIs, logs and third parties; it can be a full extract or an incremental extract driven by timestamps, change-data-capture logs or triggers, and it always lands raw data in a staging area so that the source is not touched again. Transformation converts that raw data into warehouse-ready data: it cleans and standardises values, resolves duplicates, applies business rules, converts units and currencies, derives calculated columns, aggregates where required, generates surrogate keys, handles slowly changing dimensions, and reconciles record counts and totals. Loading writes the result into fact and dimension tables - a full refresh for small tables, an append or upsert for facts, with validation, error tables, restartability and audit logging. ETL traditionally runs in a separate engine before the data reaches the warehouse; ELT instead loads raw data first and uses the warehouse's own compute for transformation, which suits cloud columnar platforms. A well-built pipeline is idempotent, restartable, monitored, documented in metadata, and measured with data-freshness and reconciliation SLAs.",
    "intro": "**ETL = Extract -> Transform -> Load.** Extract: sources (DB, file, API, logs), full ya incremental (**CDC**/timestamp), raw data staging mein. Transform: clean, standardise, dedupe, business rules, units/currency, derived columns, aggregates, **surrogate keys**, **SCD**, reconciliation. Load: fact/dim tables mein full refresh ya append/upsert + validation + error table + restart. **ELT** mein load pehle, transform warehouse ke compute par.",
    "sections": [
      {
        "type": "definition",
        "title": "ETL ka matlab",
        "kicker": "Definition",
        "body": "**ETL** ek pipeline hai jo source systems ka data warehouse-ready banata hai: pehle **extract** (bahar nikalo), phir **transform** (sahi karo), phir **load** (warehouse mein daalo).",
        "body2": "Achhi pipeline **idempotent** hoti hai (dobara chalane par same result), **restartable** hoti hai (fail hone par wahin se chalu), aur **monitored** hoti hai (freshness + reconciliation).",
        "chips": [
          "extraction",
          "CDC",
          "transformation",
          "surrogate key",
          "SCD",
          "idempotent"
        ]
      },
      {
        "type": "cards",
        "title": "Stage 1 — Extraction",
        "kicker": "Extract",
        "cards": [
          {
            "icon": "down",
            "title": "Full extract",
            "body": "Poora table/file copy; simple but heavy — initial load ke liye."
          },
          {
            "icon": "refresh",
            "title": "Incremental extract",
            "body": "Sirf badla hua data: `last_modified > watermark`."
          },
          {
            "icon": "clock",
            "title": "CDC (change data capture)",
            "body": "DB log/trigger se insert-update-delete pakadna — near real-time."
          },
          {
            "icon": "network",
            "title": "API / file / stream",
            "body": "REST pagination, CSV/JSON/XML, Kafka events."
          },
          {
            "icon": "folder",
            "title": "Staging area",
            "body": "Raw land; source untouched; validate + replay possible."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Stage 2 — Transformation",
        "kicker": "Transform",
        "cards": [
          {
            "icon": "wrench",
            "title": "Cleaning & standardising",
            "body": "Trim, case, date/unit/currency formats, code mapping."
          },
          {
            "icon": "users",
            "title": "Dedupe & entity resolution",
            "body": "Exact + fuzzy match; golden record; survivor rules."
          },
          {
            "icon": "tag",
            "title": "Business rules & derivations",
            "body": "Margin = revenue - cost; age bucket; tax logic."
          },
          {
            "icon": "layers",
            "title": "Aggregation & pivoting",
            "body": "Daily se monthly rollup; columns ko rows mein."
          },
          {
            "icon": "grid",
            "title": "Surrogate keys & joins",
            "body": "Source natural key -> warehouse surrogate key; lookup joins."
          },
          {
            "icon": "clock",
            "title": "SCD handling",
            "body": "Type 1 overwrite, Type 2 history rows, Type 3 previous value."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Stage 3 — Loading",
        "kicker": "Load",
        "cards": [
          {
            "icon": "up",
            "title": "Full refresh",
            "body": "Small dimension tables: truncate + reload."
          },
          {
            "icon": "plus",
            "title": "Append / incremental",
            "body": "Facts: naye rows add, kabhi update nahi (immutable facts)."
          },
          {
            "icon": "refresh",
            "title": "Upsert / merge",
            "body": "Dimension changes ke liye MERGE (insert ya update)."
          },
          {
            "icon": "check",
            "title": "Validation & reconcile",
            "body": "Row counts, control totals, checksum — source vs target."
          },
          {
            "icon": "alert",
            "title": "Error handling",
            "body": "Reject table, bad-file quarantine, alert + retry."
          },
          {
            "icon": "chart",
            "title": "Audit logging",
            "body": "Start/end time, rows read/written/rejected, load id, lineage."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "ETL vs ELT",
        "kicker": "Comparison",
        "columns": [
          "ETL",
          "ELT"
        ],
        "rows": [
          {
            "label": "Order",
            "values": [
              "transform before load",
              "load raw, transform in warehouse"
            ]
          },
          {
            "label": "Compute",
            "values": [
              "separate ETL engine",
              "warehouse engine (SQL/ELT)"
            ]
          },
          {
            "label": "Raw data",
            "values": [
              "warehouse mein nahi aata",
              "raw layer mein preserve"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "on-prem, strict governance",
              "cloud columnar, big data"
            ]
          },
          {
            "label": "Speed to build",
            "values": [
              "slower (heavy modelling first)",
              "faster (raw first)"
            ]
          },
          {
            "label": "Reprocessing",
            "values": [
              "source se dobara extract",
              "raw se dobara transform"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff"
        ]
      },
      {
        "type": "example",
        "title": "Nightly retail ETL — timeline",
        "kicker": "Example",
        "body": "**00:30 Extract:** POS se `stg_pos_sales` (incremental, `business_date = yesterday`), ERP se product master (full), CRM se customers (delta 2 hours). **01:15 Transform:** duplicate bill ids remove, `gender` code map, `amount` INR, return flags, `dim_product` SCD2 (price change -> new version), surrogate keys assign. **02:00 Load:** `fact_sales` append (append-only), `dim_customer` MERGE, reconcile row count = 1,84,203 aur total = source total. **02:20 Audit:** load id, rows rejected 12 (bad pincode), alert sent. **02:30 Validation queries** green -> warehouse ready 03:00 se pehle."
      },
      {
        "type": "points",
        "title": "Exam-worthy design principles",
        "kicker": "Best Practices",
        "points": [
          "**Idempotent:** same input -> same output, dobara chalane par duplicate na ho.",
          "**Restartable:** checkpoint se resume, poora load dobara nahi.",
          "**Watermark-driven:** last successful time/ID se incremental.",
          "**Reconciliation:** counts + totals + hash comparison.",
          "**Error isolation:** bad rows reject table mein, pipeline na ruke.",
          "**Metadata & lineage:** har job ka source-target mapping documented.",
          "**Freshness SLA:** data kitni der mein available hoga, monitor ho."
        ]
      },
      {
        "type": "diagram",
        "title": "ETL process — extract, transform, load",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "bw-etl",
        "caption": "Sources -> staging -> transformation rules (cleaning, dedupe, derivations, SCD) -> load with validation, reject handling and audit, plus the ETL vs ELT contrast"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**E:** extract (full / incremental / CDC) into staging.",
          "**T:** clean, standardise, dedupe, derive, aggregate, surrogate keys, SCD.",
          "**L:** full refresh, append, merge + validation + error table.",
          "**Golden rules:** idempotent, restartable, reconciled, monitored.",
          "**ETL vs ELT:** transform-before-load vs transform-in-warehouse.",
          "**Exam line:** ETL ka asli kaam data ko trustworthy banana hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the ETL process in detail with its three stages.",
        "answer": "ETL ka kaam: source data ko warehouse-ready banana.\n\n**1. Extraction**\n- Sources: operational DB, files (CSV/XML/JSON), APIs, logs, third-party feeds.\n- **Full extract:** poora data (initial load).\n- **Incremental extract:** `modified_date > watermark`, ya row counts.\n- **CDC:** DB logs/triggers/streams se changes capture.\n- Output staging area mein — source par dobara load nahi.\n\n**2. Transformation**\n- Cleaning: nulls, invalid values, whitespace, encoding.\n- Standardisation: dates, units, currency, codes, names.\n- Deduplication + entity resolution (exact + fuzzy).\n- Business rules: margin, tax, age bucket, flag derivations.\n- Aggregation / pivoting / sorting.\n- Surrogate key generation aur lookup joins.\n- SCD Type 1/2/3 handling for dimension history.\n- Reconciliation values (control totals).\n\n**3. Loading**\n- Full refresh (small dims), append (facts), MERGE/upsert (dims).\n- Bulk load utilities for performance.\n- Validation: row counts, totals, null checks.\n- Error handling: reject table + alert + retry.\n- Audit log: load id, rows read/written/rejected, duration.\n\n**Design:** idempotent, restartable, watermark-based, monitored with freshness SLA.\n\n**Diagram:** Refer to the ETL process — extract, transform, load diagram."
      },
      {
        "question": "Differentiate ETL and ELT. Why is ELT popular in cloud data platforms?",
        "answer": "| Point | ETL | ELT |\n|---|---|---|\n| Order | transform, phir load | load raw, phir transform |\n| Engine | separate ETL tool | warehouse SQL engine |\n| Raw data | warehouse mein store nahi | raw/staging layer mein safe |\n| Reprocessing | source se dobara extract | raw se dobara transform |\n| Cost model | ETL server + licence | warehouse compute |\n| Agility | modelling pehle fix karni padti | raw first, model baad mein |\n| Best fit | on-prem, heavy governance | cloud columnar, big data |\n\n**ELT cloud mein kyun popular:**\n1. **Cheap scalable compute** — Snowflake/BigQuery/Redshift parallel SQL chalate hain.\n2. **Raw data preserve** — dobara transform karne ke liye source ki zaroorat nahi.\n3. **Semi-structured support** — JSON/Parquet direct query.\n4. **Fewer moving parts** — separate ETL server nahi chahiye.\n5. **Faster iteration** — analyst SQL se transform likh sakta hai (dbt style).\n6. **Governance tooling** — cloud mein lineage, RBAC, masking built-in.\n\n**Caveat:** ELT mein raw layer par PII governance aur cost control zaroori hai; warna \"data swamp\".\n\n**Diagram:** Refer to the ETL process — extract, transform, load diagram."
      },
      {
        "question": "How are data quality errors handled inside an ETL pipeline?",
        "answer": "Errors ko pipeline rokne ke bajaye **isolate + report + reprocess** karna chahiye.\n\n**1. Layer-wise checks**\n- **Extract:** file present? row count expected? schema match?\n- **Transform:** type cast, range, referential, business rules.\n- **Load:** key uniqueness, FK valid, counts/totals reconcile.\n\n**2. Validation patterns**\n- **Reject table:** bad rows `etl_rejects` mein with reason code.\n- **Quarantine file:** poori file suspicious ho to alag rakho.\n- **Threshold:** X% se zyada rejects -> pipeline fail + alert.\n- **Null/default policy:** mandatory field null -> reject; optional -> default + flag.\n\n**3. Recovery patterns**\n- **Checkpoint/restart:** last successful key se resume.\n- **Idempotent MERGE:** duplicate load se data corrupt na ho.\n- **Reprocess job:** reject table fix karke dobara chalao.\n- **Backfill:** kisi date ka data dobara load.\n\n**4. Monitoring & audit**\n- Audit table: rows read/written/rejected, duration, status.\n- Alerts: SLA miss, zero-row load, spike in rejects.\n- Reconciliation report: source total vs target total.\n\n**5. Governance**\n- Data steward ko reject sample review karwao.\n- Root cause fix source system mein, sirf patch nahi.\n\n**Diagram:** Refer to the ETL process — extract, transform, load diagram."
      }
    ]
  },
  {
    "id": "data-cleaning",
    "number": "2.5",
    "title": "Data Cleaning Techniques",
    "subtitle": "Ganda data theek karna — missing, duplicate, outlier",
    "icon": "wrench",
    "accent": "#ffd600",
    "englishDefinition": "Data cleaning (also called cleansing or scrubbing) is the set of techniques that detect and correct defects in raw data so that it can be trusted for analysis. It normally starts with data profiling - column statistics, null rates, distinct counts, pattern and range checks - because defects must be measured before they can be fixed. Missing values are handled by deletion (row or column), statistical imputation (mean, median, mode, regression, k-nearest neighbours, multiple imputation) or business defaults with a quality flag, chosen so that the method does not distort the distribution. Duplicates are found by exact matching on keys and by fuzzy matching on names and addresses (Jaro-Winkler, Levenshtein, phonetic and blocking algorithms), then resolved with survivor rules into a golden record. Outliers are detected statistically (z-score, IQR, Mahalanobis, isolation forest) but are only removed when they are errors, not when they are genuine business events. Standardisation fixes formats, units, currencies, codes and casing; parsing and validation fix dtypes, dates, phone and postal formats; consistency checks enforce referential integrity and cross-field rules; and text cleaning removes whitespace, control characters and encoding errors. Every correction should be logged, reversible and covered by a rule that can be re-run, with before-and-after quality metrics reported.",
    "intro": "**Data cleaning** = raw data ke defects dhoond kar theek karna. Pipeline: **profiling** (null rate, distinct, range, pattern) -> **missing values** (delete / mean-median-mode / regression / KNN imputation / business default + flag) -> **duplicates** (exact + fuzzy match -> golden record) -> **outliers** (z-score, IQR; sirf error ho to hatao) -> **standardisation** (format, unit, code, case) -> **validation** (type, range, referential) -> **text cleaning**. Har fix log + reversible + rule-based hona chahiye.",
    "sections": [
      {
        "type": "definition",
        "title": "Data cleaning kya hai",
        "kicker": "Definition",
        "body": "**Data cleaning** wo techniques hain jo raw data ke **defects** (missing, duplicate, invalid, inconsistent, outlier) detect karke correct karti hain — taaki analysis aur report par bharosa kiya ja sake.",
        "body2": "Rule: **pehle measure, phir fix.** Profiling ke bina cleaning andhere mein teer chalana hai.",
        "chips": [
          "profiling",
          "imputation",
          "dedupe",
          "outlier",
          "standardisation",
          "validation"
        ]
      },
      {
        "type": "cards",
        "title": "Techniques — defects ke hisaab se",
        "kicker": "Cleaning Toolkit",
        "cards": [
          {
            "icon": "search",
            "title": "Profiling",
            "body": "Null %, distinct count, min/max, pattern check, frequency — defect measure karo."
          },
          {
            "icon": "half",
            "title": "Missing values",
            "body": "Delete row/column, mean/median/mode, regression/KNN, business default + flag."
          },
          {
            "icon": "grid",
            "title": "Duplicates",
            "body": "Exact key match + fuzzy (Levenshtein, Jaro-Winkler, phonetic, blocking) -> golden record."
          },
          {
            "icon": "scatter",
            "title": "Outliers",
            "body": "z-score, IQR, Mahalanobis, isolation forest — error ho to fix, genuine ho to rakho."
          },
          {
            "icon": "ruler",
            "title": "Standardisation",
            "body": "Date/unit/currency/code/case/whitespace fix; mapping tables."
          },
          {
            "icon": "check",
            "title": "Validation",
            "body": "Type cast, range, format regex, referential integrity, cross-field rules."
          },
          {
            "icon": "doc",
            "title": "Text cleaning",
            "body": "Trim, control characters, encoding (UTF-8), HTML entities, name parsing."
          },
          {
            "icon": "tag",
            "title": "Rule-based fixes",
            "body": "Har fix ka documented rule + log; reversible aur repeatable."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Missing value strategies",
        "kicker": "Comparison",
        "columns": [
          "Method",
          "Kab use karein"
        ],
        "rows": [
          {
            "label": "Delete row",
            "values": [
              "bahut kam rows affected",
              "key field missing, unreliable record"
            ]
          },
          {
            "label": "Delete column",
            "values": [
              ">60-70% nulls",
              "field analysis ke liye useless"
            ]
          },
          {
            "label": "Mean / median",
            "values": [
              "numeric, symmetric (median if skewed)",
              "simple, distribution distort kar sakta hai"
            ]
          },
          {
            "label": "Mode",
            "values": [
              "categorical",
              "bias risk agar ek category dominate kare"
            ]
          },
          {
            "label": "Regression / KNN",
            "values": [
              "correlated columns available",
              "better accuracy, compute zyada"
            ]
          },
          {
            "label": "Business default + flag",
            "values": [
              "process se default pata ho",
              "audit trail chahiye (\"UNKNOWN\")"
            ]
          }
        ],
        "columnColors": [
          "#ffd600",
          "#ff8800"
        ]
      },
      {
        "type": "example",
        "title": "Customer master cleaning — step by step",
        "kicker": "Example",
        "body": "Raw file: 1,00,000 rows. **Profile:** `phone` 18% null, `email` 6% invalid, `city` 22 spelling variants, `dob` 3% future dates, 4% duplicate customers. **Fix:** future dob reject (rule: dob <= today-18y), email regex validate -> `email_invalid` flag, city ko mapping table se standard (`Bombay/BOM/ Mumbai` -> `Mumbai`), phone null par `UNKNOWN` + flag (delete nahi, kyunki customer valuable hai), duplicates fuzzy match (name + phone last 4) -> survivor = latest updated + non-null email. **Result:** duplicates 4% -> 0.2%, email valid 94% -> 99.7%, city distinct 22 -> 1. Metrics before/after report mein."
      },
      {
        "type": "points",
        "title": "Golden rules",
        "kicker": "Best Practices",
        "points": [
          "**Measure first:** profiling ke bina cleaning na karo.",
          "**Preserve raw:** staging mein original copy rakho; cleaning ke baad hi warehouse.",
          "**Log every change:** kaunsa rule, kitni rows, kab.",
          "**Don't over-clean:** genuine outlier business event ho sakta hai.",
          "**Prefer rules over manual edits:** manual fix repeatable nahi hota.",
          "**Flag, don't hide:** imputed value ko flag karo taaki analysis mein pata rahe.",
          "**Close the loop:** root cause source system mein fix karwao."
        ]
      },
      {
        "type": "diagram",
        "title": "Data cleaning techniques",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "bw-cleaning",
        "caption": "Profile -> missing values -> duplicates -> outliers -> standardise -> validate -> text clean, each with its methods and the golden rules of logging and preserving raw data"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Profile first** — null rate, distinct, range, pattern.",
          "**Missing:** delete, impute (mean/median/mode/KNN), default + flag.",
          "**Duplicates:** exact + fuzzy -> golden record.",
          "**Outliers:** z-score/IQR — error ho to fix.",
          "**Standardise + validate:** format, unit, code, referential.",
          "**Exam line:** cleaning ke bina warehouse sirf ganda data ka bada store hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain data cleaning techniques used in data warehousing.",
        "answer": "Data cleaning raw data ke defects correct karti hai.\n\n**1. Data profiling (pehla step)**\n- Column stats: null %, distinct, min/max, mean, pattern.\n- Defect measure karta hai — bina iske cleaning blind hai.\n\n**2. Missing values**\n- Delete row/column, mean/median/mode imputation, regression/KNN, business default + flag.\n\n**3. Duplicate removal**\n- Exact key matching.\n- Fuzzy matching: Levenshtein, Jaro-Winkler, phonetic (Soundex), blocking.\n- Survivor rules -> golden record.\n\n**4. Outlier handling**\n- z-score (>3), IQR (1.5x), Mahalanobis, isolation forest.\n- Error -> correct/remove; genuine business event -> retain.\n\n**5. Standardisation**\n- Dates (`DD-MM-YYYY` -> ISO), units (kg/g), currency, gender codes, city names, casing.\n\n**6. Parsing & validation**\n- Type casting, regex (email, phone, pincode), range checks, referential integrity, cross-field rules.\n\n**7. Text cleaning**\n- Whitespace, control chars, encoding, HTML entities, name/address parsing.\n\n**8. Governance**\n- Rule log, before/after metrics, source root-cause fix.\n\n**Diagram:** Refer to the Data cleaning techniques diagram."
      },
      {
        "question": "Discuss how missing values and outliers are handled. What precautions are needed?",
        "answer": "**Missing values — strategies:**\n\n| Method | When |\n|---|---|\n| Delete row | very few rows, key field missing |\n| Delete column | >60-70% null, useless field |\n| Mean/median | numeric, median if skewed |\n| Mode | categorical |\n| Regression / KNN | correlated fields available |\n| Business default + flag | process default known (e.g. UNKNOWN) |\n\n**Precautions (missing):**\n- Missingness pattern dekho: MCAR / MAR / MNAR — MNAR mein imputation bias la sakta hai.\n- Imputation ke baad **flag** rakho, warna analysis mein pata nahi chalega.\n- Missing ko zero se replace karna galat ho sakta hai (average distort).\n\n**Outliers — detection:**\n- **z-score:** |z| > 3 (normal-ish data).\n- **IQR:** below Q1-1.5*IQR, above Q3+1.5*IQR.\n- **Mahalanobis / isolation forest:** multivariate.\n- **Business rules:** quantity <= 0, age > 120.\n\n**Precautions (outliers):**\n1. Pehle **error ya genuine** decide karo — festive sale spike genuine hai.\n2. Remove karne se mean/variance badalta hai; winsorising ya capping better ho sakta hai.\n3. Reason code ke saath reject table mein rakho.\n4. Domain expert se confirm karo bade values par.\n\n**Diagram:** Refer to the Data cleaning techniques diagram."
      },
      {
        "question": "Describe a complete data cleaning pipeline with quality checks.",
        "answer": "**Step 1 — Ingest to staging**\n- Raw copy preserve (CSV/Parquet as-is), checksum + count.\n\n**Step 2 — Profile**\n- Null %, distinct, min/max, pattern distribution, duplicate estimate.\n- Baseline metrics record karo.\n\n**Step 3 — Structural cleaning**\n- Column names/type cast, date parse, trim, encoding fix.\n\n**Step 4 — Value cleaning**\n- Invalid values (dob future, qty negative, pincode length).\n- Standardise codes/units/currency/city names.\n\n**Step 5 — Deduplicate**\n- Exact match, phir fuzzy (name/address/phone), survivor rules -> golden record.\n\n**Step 6 — Missing & outlier policy**\n- Impute/default + flag; outlier review with reason code.\n\n**Step 7 — Conform & integrate**\n- Surrogate keys, lookups, referential integrity, cross-field rules.\n\n**Step 8 — Quality gates**\n- Row count reconcile, null-rate thresholds, duplicate rate, referential pass %.\n- Fail -> alert + quarantine; pass -> load.\n\n**Step 9 — Load + audit**\n- Load id, rows in/out/rejected, rule version, duration.\n\n**Step 10 — Feedback loop**\n- Exception report data steward ko; root cause source system mein fix.\n\n**Metrics:** completeness %, validity %, uniqueness %, consistency %, timeliness.\n\n**Diagram:** Refer to the Data cleaning techniques diagram."
      }
    ]
  },
  {
    "id": "data-integration",
    "number": "2.6",
    "title": "Data Integration from Heterogeneous Sources",
    "subtitle": "Alag-alag systems ka data ek model mein",
    "icon": "network",
    "accent": "#00bcd4",
    "englishDefinition": "Data integration is the process of combining data that lives in different systems - ERP, CRM, point of sale, spreadsheets, web logs, APIs, sensors and third-party feeds - into a single, consistent and queryable view. The difficulty is heterogeneity at four levels: system (different DBMS and platforms), syntactic (different formats, encodings, delimiters), schematic (different structures, names and granularity) and semantic (the same word means different things, or different words mean the same thing). The main approaches are extract-transform-load into a warehouse, extract-load-transform inside a cloud warehouse, enterprise application integration through messaging and APIs, data virtualisation or federation that queries sources on demand, and data lakes or lakehouses that store raw and refined copies. Whichever approach is used, the work is the same in essence: profile each source, build a canonical model, map source fields to it, define transformation and conflict-resolution rules (which source wins, how duplicates merge), generate surrogate keys, and then keep the result consistent over time through master data management, change-data-capture and continuous quality monitoring. Integration is what turns many operational silos into one enterprise view.",
    "intro": "**Data integration** = alag-alag systems (ERP, CRM, POS, logs, APIs) ka data ek consistent view mein laana. Mushkil **heterogeneity** hai: system, syntactic (format), schematic (structure) aur **semantic** (matlab) level par. Approaches: **ETL**, **ELT**, **EAI** (API/messaging), **data virtualisation** (federation), **data lake/lakehouse**. Core kaam: profile -> canonical model -> mapping -> transformation rules -> conflict resolution -> surrogate keys -> MDM + CDC se consistent rakhna.",
    "sections": [
      {
        "type": "definition",
        "title": "Data integration kya hai",
        "kicker": "Definition",
        "body": "Jab ek hi customer ERP mein `C001`, CRM mein `cust-1`, POS par sirf phone number se exist karta hai — tab tak koi \"single view\" nahi hai. Integration ye silos todta hai.",
        "body2": "Integration ka output ek **canonical model** hai: standard entities (customer, product, store, date) aur standard codes, jispar warehouse aur BI dono chalte hain.",
        "chips": [
          "heterogeneity",
          "canonical model",
          "mapping",
          "federation",
          "MDM"
        ]
      },
      {
        "type": "cards",
        "title": "Heterogeneity ke chaar level",
        "kicker": "Why It Is Hard",
        "cards": [
          {
            "icon": "server",
            "title": "System-level",
            "body": "Alag DBMS/platform: Oracle, SQL Server, SAP, MongoDB, flat files."
          },
          {
            "icon": "doc",
            "title": "Syntactic",
            "body": "Encoding, delimiter, date format, JSON vs CSV vs XML, header names."
          },
          {
            "icon": "layers",
            "title": "Schematic",
            "body": "Alag structure, granularity, keys, normalization level."
          },
          {
            "icon": "bulb",
            "title": "Semantic",
            "body": "\"Revenue\" ka matlab gross ya net? \"Active customer\" ki definition?"
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Integration approaches",
        "kicker": "Comparison",
        "columns": [
          "Approach",
          "Kya karta hai / kab"
        ],
        "rows": [
          {
            "label": "ETL",
            "values": [
              "transform then load into warehouse",
              "batch reporting, governed DW"
            ]
          },
          {
            "label": "ELT",
            "values": [
              "load raw, transform in warehouse",
              "cloud columnar, big data"
            ]
          },
          {
            "label": "EAI / API",
            "values": [
              "application-to-application messaging",
              "real-time operational sync"
            ]
          },
          {
            "label": "Virtualisation",
            "values": [
              "query sources on demand, no copy",
              "agile access, but source load"
            ]
          },
          {
            "label": "Data lake",
            "values": [
              "raw + refined copies in object store",
              "ML, unstructured, cheap storage"
            ]
          },
          {
            "label": "MDM",
            "values": [
              "golden record for master entities",
              "customer/product single view"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff",
          "#00bcd4"
        ]
      },
      {
        "type": "cards",
        "title": "Integration ke practical steps",
        "kicker": "How To Do It",
        "cards": [
          {
            "icon": "search",
            "title": "Source profiling",
            "body": "Har source ka schema, keys, null rate, duplicates, business meaning."
          },
          {
            "icon": "layers",
            "title": "Canonical model",
            "body": "Standard entities, attributes, codes, grains — target design."
          },
          {
            "icon": "ruler",
            "title": "Schema mapping",
            "body": "Source field -> target field + transformation rule (documented)."
          },
          {
            "icon": "wrench",
            "title": "Transformation",
            "body": "Standardise codes, units, dates; derive keys; merge columns."
          },
          {
            "icon": "users",
            "title": "Entity resolution",
            "body": "Kaunsi rows same entity hain? Survivor/golden record rules."
          },
          {
            "icon": "flag",
            "title": "Conflict resolution",
            "body": "Source priority, freshness, completeness — kaun jeetega."
          },
          {
            "icon": "clock",
            "title": "CDC / incremental",
            "body": "Changes ko continuously sync karna."
          },
          {
            "icon": "shield",
            "title": "Governance",
            "body": "Ownership, lineage, PII masking, access control."
          }
        ]
      },
      {
        "type": "example",
        "title": "Hospital network — 4 sources, 1 model",
        "kicker": "Example",
        "body": "**Sources:** HIS (admissions), LIS (lab), billing, pharmacy — alag patient IDs. **Problem:** same patient HIS mein `P-9081`, LIS mein `LAB-5521`, billing mein Aadhaar last 4. **Mapping:** Aadhaar/phone/name+dob se entity resolution; canonical `patient_key`. **Semantic conflict:** \"discharge date\" HIS mein clinical, billing mein final bill date — glossary mein define. **Result:** ek patient ka complete journey view (admission -> lab -> billing) aur readmission analysis possible."
      },
      {
        "type": "points",
        "title": "Integration ke challenges",
        "kicker": "Challenges",
        "points": [
          "**Semantic mismatch:** same naam, alag matlab (`revenue`, `active`).",
          "**Keys:** natural key missing/duplicate; surrogate key chahiye.",
          "**Timing:** sources alag schedule par update hote hain — consistency window.",
          "**Volume:** logs/events bahut bade — batch vs streaming decision.",
          "**Quality:** galat data integrate karne se galat \"single view\" banta hai.",
          "**Governance:** ownership, PII, consent, lineage ke bina audit fail.",
          "**Change:** source schema badla to mappings break — version control chahiye."
        ]
      },
      {
        "type": "diagram",
        "title": "Data integration from heterogeneous sources",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "bw-integration",
        "caption": "Heterogeneous sources mapped through profiling, canonical model, mapping and conflict resolution into one integrated warehouse view, with ETL/ELT/EAI/virtualisation/MDM approaches compared"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Heterogeneity:** system, syntactic, schematic, semantic.",
          "**Approaches:** ETL, ELT, EAI, virtualisation, lake, MDM.",
          "**Core:** canonical model + mapping + rules + surrogate keys.",
          "**Hard part:** semantic conflict aur entity resolution.",
          "**Governance:** lineage, ownership, PII, versioned mappings.",
          "**Exam line:** integration many silos ko one enterprise view banata hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain data integration from heterogeneous sources with its challenges.",
        "answer": "**Data integration** alag systems ka data ek consistent, queryable view mein laata hai.\n\n**Heterogeneity ke levels:**\n1. **System-level** — Oracle, SAP, MongoDB, flat files.\n2. **Syntactic** — encoding, delimiter, date format, JSON/CSV/XML.\n3. **Schematic** — structure, granularity, keys, normalization.\n4. **Semantic** — \"revenue\" gross ya net, \"active customer\" ki definition.\n\n**Approaches:**\n- **ETL** — transform then load into warehouse.\n- **ELT** — raw load, transform in warehouse.\n- **EAI / API** — application-to-application real-time sync.\n- **Data virtualisation** — query sources on demand.\n- **Data lake / lakehouse** — raw + refined copies.\n- **MDM** — golden record for customer/product.\n\n**Steps:**\n1. Source profiling (schema, keys, quality).\n2. Canonical model design.\n3. Schema mapping + transformation rules.\n4. Entity resolution (duplicate detection).\n5. Conflict resolution (source priority).\n6. Surrogate keys + load.\n7. CDC + monitoring se consistent rakhna.\n\n**Challenges:** semantic mismatch, missing keys, different refresh cycles, volume, poor quality, PII governance, schema drift.\n\n**Diagram:** Refer to the Data integration from heterogeneous sources diagram."
      },
      {
        "question": "Compare ETL, ELT, data virtualisation and MDM as integration approaches.",
        "answer": "| Point | ETL | ELT | Virtualisation | MDM |\n|---|---|---|---|---|\n| Data copy | warehouse mein copy | raw layer mein copy | koi copy nahi (on-demand) | golden record copy |\n| Latency | batch | batch/near real-time | real-time (query time) | near real-time |\n| Source load | extract only | extract only | har query source par | extract + match |\n| Best for | governed DW | cloud big data | agile, few sources | single customer view |\n| Weakness | heavy ETL server | raw governance | slow/complex joins | long implementation |\n\n**ETL:** classic, mature, governance-friendly; transform logic separate engine mein.\n\n**ELT:** cloud columnar ka default; raw preserve, dobara transform possible.\n\n**Virtualisation:** source systems live query; data freshness best, par performance aur availability source par depend.\n\n**MDM:** master entities (customer, product, supplier) ka golden record; integration ka outcome, sirf tool nahi — process + stewardship.\n\n**Practical architecture:** ELT se lakehouse + MDM se golden dimensions + virtualisation se real-time lookups.\n\n**Diagram:** Refer to the Data integration from heterogeneous sources diagram."
      },
      {
        "question": "How is conflict resolution and entity resolution done during integration?",
        "answer": "**Entity resolution (same entity pehchanna):**\n1. **Blocking** — candidate pairs banao (same pincode/phone prefix) taaki sab vs sab compare na ho.\n2. **Exact match** — key, email, phone.\n3. **Fuzzy match** — Levenshtein/Jaro-Winkler (names), phonetic (Soundex), token-based (addresses).\n4. **Score + threshold** — match / no-match / manual review queue.\n5. **Golden record** — survivor rules: most recent, most complete, source priority.\n\n**Conflict resolution (kaunsa value sahi):**\n1. **Source precedence** — core banking > CRM for account data.\n2. **Recency** — latest updated wins.\n3. **Completeness** — non-null preferred.\n4. **Trust score** — historically accurate source.\n5. **Business rule** — finance ka official figure regulatory source se.\n6. **Manual override** — steward decision, documented.\n\n**Governance:** har unresolved conflict ka owner, SLA, aur decision log; MDM tool mein survivorship rules version-controlled.\n\n**Example:** customer ka address CRM mein naya, ERP mein purana -> recency rule se CRM; par PAN number ERP (authoritative) se.\n\n**Diagram:** Refer to the Data integration from heterogeneous sources diagram."
      }
    ]
  },
  {
    "id": "metadata",
    "number": "2.7",
    "title": "Metadata: Types and Importance",
    "subtitle": "Data ke baare mein data — warehouse ka index",
    "icon": "tag",
    "accent": "#ff7ab2",
    "englishDefinition": "Metadata is data about data: it describes what a data item is, where it came from, how it was transformed, who owns it and how it may be used. In a warehouse it is the catalogue that makes the stored data understandable and auditable. Metadata is commonly classified into three types. Technical (structural) metadata describes physical design - tables, columns, data types, keys, indexes, partitions, file formats. Business (semantic) metadata describes meaning - business names, definitions, calculations, hierarchies, report definitions, the business glossary. Operational (administrative) metadata describes activity - ETL job logs, load statistics, row counts, refresh timestamps, data quality scores, access and audit records, data lineage and provenance. Some frameworks add a fourth category, descriptive or discovery metadata, covering tags, search keywords and usage popularity. Metadata matters because it enables self-service discovery, impact analysis before schema changes, lineage and regulatory audit, consistency of KPI definitions across teams, data quality monitoring, access control and cost management. Without metadata a warehouse becomes a collection of tables only their original author understands; with it, the warehouse becomes a governed, searchable and trustworthy asset.",
    "intro": "**Metadata = data ke baare mein data.** Warehouse mein teen types: **technical/structural** (tables, columns, types, keys, partitions), **business/semantic** (business name, definition, calculation, hierarchy, glossary), **operational/administrative** (job logs, row counts, refresh time, DQ score, lineage, audit). Importance: discovery, impact analysis, lineage, KPI consistency, audit, quality monitoring, access control. Metadata ke bina warehouse andhera hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Metadata kya hai",
        "kicker": "Definition",
        "body": "Agar table mein column `amt_net` hai, to metadata batata hai: ye **net amount** hai, currency INR, source `erp.invoice.amount` se aaya, ETL rule se tax minus hua, owner finance team hai, aur last refresh 2 AM tha.",
        "body2": "Isi liye metadata ko warehouse ka **catalogue / index / dictionary** kaha jaata hai — data dhoondhna, samajhna aur audit karna isi se hota hai.",
        "chips": [
          "technical metadata",
          "business metadata",
          "operational metadata",
          "lineage",
          "glossary"
        ]
      },
      {
        "type": "cards",
        "title": "Teen types",
        "kicker": "Types of Metadata",
        "cards": [
          {
            "icon": "table",
            "title": "Technical / structural",
            "body": "Tables, columns, data types, keys, indexes, partitions, file format, storage location."
          },
          {
            "icon": "book",
            "title": "Business / semantic",
            "body": "Business names, definitions, calculation logic, hierarchies, report specs, glossary."
          },
          {
            "icon": "clock",
            "title": "Operational / administrative",
            "body": "Job logs, row counts, load time, DQ scores, access logs, lineage, version."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Metadata ke andar kya aata hai (examples)",
        "kicker": "Metadata Repository",
        "cards": [
          {
            "icon": "layers",
            "title": "Schema metadata",
            "body": "Table/column names, types, constraints, relationships."
          },
          {
            "icon": "flow",
            "title": "Mapping metadata",
            "body": "Source field -> target field -> transformation rule."
          },
          {
            "icon": "network",
            "title": "Lineage metadata",
            "body": "Data ka poora raasta: source -> staging -> fact/dim -> report."
          },
          {
            "icon": "chart",
            "title": "Business glossary",
            "body": "KPI definitions: \"active customer\", \"net revenue\", \"churn\"."
          },
          {
            "icon": "metrics",
            "title": "Statistics metadata",
            "body": "Row counts, null %, distinct values, min/max, freshness."
          },
          {
            "icon": "shield",
            "title": "Governance metadata",
            "body": "Owner, steward, classification (PII), retention, access policy."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Metadata vs data",
        "kicker": "Comparison",
        "columns": [
          "Data",
          "Metadata"
        ],
        "rows": [
          {
            "label": "Kya hai",
            "values": [
              "actual values (rows)",
              "values ke baare mein jaankari"
            ]
          },
          {
            "label": "Example",
            "values": [
              "`amt_net = 4500`",
              "`amt_net` = net amount, INR, from ERP, owner finance"
            ]
          },
          {
            "label": "Kis kaam",
            "values": [
              "analysis aur reporting",
              "discovery, lineage, audit, governance"
            ]
          },
          {
            "label": "Kahan",
            "values": [
              "fact/dim tables",
              "metadata repository / catalogue"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff7ab2"
        ]
      },
      {
        "type": "points",
        "title": "Importance — exam ke liye ready points",
        "kicker": "Why It Matters",
        "points": [
          "**Discoverability:** analyst ko pata chalta hai kaunsa table/column chahiye.",
          "**Understanding:** definition aur calculation ke bina KPI galat interpret hota hai.",
          "**Impact analysis:** column badalne se kaunse reports tootenge — pehle pata.",
          "**Lineage & audit:** regulator ko data ka raasta dikhana padta hai.",
          "**Consistency:** ek hi KPI ka ek hi definition (glossary).",
          "**Quality monitoring:** freshness, null rate, DQ score track hote hain.",
          "**Security & compliance:** PII classification, retention, access policy.",
          "**Productivity:** naye team member ko onboard hone mein hafte nahi, din lagte hain."
        ]
      },
      {
        "type": "example",
        "title": "Impact analysis ka real use",
        "kicker": "Example",
        "body": "Team `dim_customer.email` ko drop karna chahti hai. Metadata catalogue query: is column ko 14 reports, 3 dashboards aur 2 ML features use karte hain, aur ek regulatory report bhi. Bina metadata ke change production mein jaata aur Monday morning sab reports fail hoti. Metadata se impact pehle dikha, migration plan bana, aur dependency order mein fix hua."
      },
      {
        "type": "diagram",
        "title": "Metadata — types aur importance",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "bw-metadata",
        "caption": "Technical, business and operational metadata feeding a metadata repository that powers discovery, lineage, impact analysis, KPI consistency, quality monitoring and governance"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Metadata = data about data.**",
          "**Technical:** schema, types, keys, partitions.",
          "**Business:** names, definitions, calculations, glossary.",
          "**Operational:** logs, counts, freshness, DQ, lineage, audit.",
          "**Importance:** discovery, impact, lineage, consistency, security.",
          "**Exam line:** metadata ke bina warehouse andha aur ungoverned hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define metadata. Explain its types with examples.",
        "answer": "**Definition:** Metadata data ke baare mein data hai — ye batata hai ki data kya hai, kahan se aaya, kaise transform hua, kaun owner hai aur kaise use ho sakta hai.\n\n**1. Technical (structural) metadata**\n- Tables, columns, data types, lengths, keys, indexes, partitions, file formats, storage paths.\n- Example: `fact_sales.amount` -> DECIMAL(12,2), not null, partitioned by month.\n\n**2. Business (semantic) metadata**\n- Business names, definitions, calculations, hierarchies, report definitions, business glossary.\n- Example: \"Net Revenue\" = gross sales - returns - discounts; \"Active Customer\" = purchase in last 90 days.\n\n**3. Operational (administrative) metadata**\n- ETL job logs, start/end time, rows read/written/rejected, refresh timestamps, DQ scores, access logs, lineage, versions.\n- Example: `load_sales_2024_05_12` -> 1,84,203 rows, 12 rejected, 02:20 AM, status SUCCESS.\n\n**4. (Optional) Descriptive / discovery metadata**\n- Tags, keywords, popularity, owner contact, sample queries.\n\n**Where it lives:** metadata repository / data catalogue, business glossary, ETL tool repository, DB catalog views.\n\n**Diagram:** Refer to the Metadata — types aur importance diagram."
      },
      {
        "question": "Why is metadata important in a data warehouse?",
        "answer": "Metadata warehouse ko usable, trustworthy aur auditable banata hai.\n\n**1. Discoverability** — analyst ko search se pata chalta hai kaunsa table/column chahiye.\n**2. Understanding** — definition/calculation ke bina KPI galat interpret hota hai.\n**3. Impact analysis** — schema change se pehle affected reports/ML features pata chalte hain.\n**4. Data lineage** — source se report tak ka raasta; debugging aur regulatory audit ke liye zaroori.\n**5. Consistency** — business glossary se ek KPI ka ek hi definition.\n**6. Data quality monitoring** — freshness, row counts, null rate, DQ score.\n**7. Security & compliance** — PII classification, retention, access policies, DPDP audit.\n**8. Productivity** — naye members ka onboarding fast; tribal knowledge kam.\n**9. Cost management** — kaunsa data kitna use hota hai, unused tables archive.\n\n**Result:** metadata ke bina warehouse \"data swamp\" ban jaata hai; metadata ke saath **data asset**.\n\n**Diagram:** Refer to the Metadata — types aur importance diagram."
      },
      {
        "question": "Explain metadata management and data lineage in a warehouse environment.",
        "answer": "**Metadata management** = metadata ko collect, store, link, version aur publish karna.\n\n**Components:**\n1. **Metadata repository / catalogue** — central store.\n2. **Automated harvesting** — DB catalogs, ETL tool, BI tool se scan.\n3. **Business glossary** — curated definitions with owner approval.\n4. **Lineage graph** — column-level links.\n5. **Governance** — owner, steward, classification, retention.\n6. **Versioning** — definition badla to purana version bhi rahe.\n\n**Data lineage:**\n- **Kya hai:** data ka poora raasta — source -> staging -> transform -> fact/dim -> semantic layer -> report.\n- **Types:** table-level vs column-level; forward vs backward.\n- **Kaise:** ETL mappings parse, SQL parse, log-based, ya tools (Atlan, Collibra, DataHub, dbt docs).\n\n**Lineage ke fayde:**\n1. **Debugging:** galat number ka source jaldi milta hai.\n2. **Impact analysis:** upstream change ka downstream effect.\n3. **Audit / compliance:** regulator ko proof.\n4. **Trust:** analyst dekh sakta hai data kahan se aaya.\n\n**Best practice:** \"metadata as code\" — definitions aur lineage version control mein; automated harvesting, manual glossary approval.\n\n**Diagram:** Refer to the Metadata — types aur importance diagram."
      }
    ]
  },
  {
    "id": "data-quality",
    "number": "2.8",
    "title": "Data Quality: Concepts and Challenges",
    "subtitle": "Sahi, poora, consistent, time par — warna BI jhooth bolta hai",
    "icon": "check",
    "accent": "#ff5252",
    "englishDefinition": "Data quality is the degree to which data is fit for its intended use in operations, decisions and reporting. It is usually described through dimensions: accuracy (values match reality), completeness (all required records and attributes present), consistency (the same fact agrees across systems and within rules), timeliness (available when needed and current), validity (values conform to format, type and domain rules), uniqueness (no unintended duplication), integrity (relationships between entities hold) and, increasingly, interpretability and believability. Quality is measured with data profiling and rule-based checks that produce scores and exception reports, and it is managed through a lifecycle: define critical data elements and rules, assess and baseline, cleanse and remediate at source, monitor continuously, and govern with named data owners and stewards. The challenges are well known: data enters from many heterogeneous systems with different definitions, quality problems are created upstream by manual entry and missing validations, they are discovered only when a report is questioned, fixing them at the warehouse is expensive and temporary unless the source is corrected, and quality initiatives need business ownership rather than technology alone. Poor quality is costly not only in rework but in wrong decisions, failed audits and lost credibility, so quality must be built into the pipeline rather than inspected at the end.",
    "intro": "**Data quality** = data apne use ke liye kitna fit hai. Dimensions: **accuracy, completeness, consistency, timeliness, validity, uniqueness, integrity**. Kaam: critical data elements + rules define karo, profile karke baseline banao, source par fix karo, continuously monitor karo, owner/steward ke saath govern karo. Challenges: heterogeneous sources, manual entry, late detection, warehouse par patch (temporary), business ownership ki kami.",
    "sections": [
      {
        "type": "definition",
        "title": "Data quality kya hai",
        "kicker": "Definition",
        "body": "**Data quality** ka matlab hai: data **sahi (accurate), poora (complete), consistent, time par (timely), valid aur unique** hai — yaani apne use ke liye fit hai.",
        "body2": "\"Fit for use\" important hai: ek HR report ke liye pincode optional ho sakta hai, delivery report ke liye mandatory. Isliye quality **use-case ke hisaab se** define hoti hai.",
        "chips": [
          "accuracy",
          "completeness",
          "consistency",
          "timeliness",
          "validity",
          "uniqueness"
        ]
      },
      {
        "type": "cards",
        "title": "Quality dimensions",
        "kicker": "Dimensions",
        "cards": [
          {
            "icon": "target",
            "title": "Accuracy",
            "body": "Value reality se match karta hai? (phone actually customer ka hai)"
          },
          {
            "icon": "half",
            "title": "Completeness",
            "body": "Sab required records/fields present? (missing pincode, null email)"
          },
          {
            "icon": "layers",
            "title": "Consistency",
            "body": "Do systems same baat kehte hain? Cross-field rules hold karte hain?"
          },
          {
            "icon": "clock",
            "title": "Timeliness",
            "body": "Data available aur current hai? Freshness SLA meet hua?"
          },
          {
            "icon": "check",
            "title": "Validity",
            "body": "Format/type/domain rules ke andar? (email regex, age 0-120)"
          },
          {
            "icon": "grid",
            "title": "Uniqueness",
            "body": "Unintended duplicates nahi? Ek customer ek baar?"
          },
          {
            "icon": "network",
            "title": "Integrity",
            "body": "Relationships sahi? (order ka customer exist karta hai)"
          },
          {
            "icon": "book",
            "title": "Interpretability",
            "body": "Definition clear? Analyst samajh sakta hai?"
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Poor quality ka asar",
        "kicker": "Comparison",
        "columns": [
          "Dimension fail",
          "Business impact"
        ],
        "rows": [
          {
            "label": "Accuracy",
            "values": [
              "galat address par delivery",
              "return cost + customer churn"
            ]
          },
          {
            "label": "Completeness",
            "values": [
              "missing sales region",
              "region report adhoora"
            ]
          },
          {
            "label": "Consistency",
            "values": [
              "finance aur sales ka revenue alag",
              "board meeting mein credibility loss"
            ]
          },
          {
            "label": "Timeliness",
            "values": [
              "T+3 data T+1 par chahiye",
              "late decisions"
            ]
          },
          {
            "label": "Uniqueness",
            "values": [
              "duplicate customer",
              "inflated counts aur wrong CLV"
            ]
          },
          {
            "label": "Validity",
            "values": [
              "future date, negative qty",
              "galat aggregates"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#ff8800"
        ]
      },
      {
        "type": "points",
        "title": "Challenges — exam ke liye",
        "kicker": "Challenges",
        "points": [
          "**Heterogeneous sources:** har system ka apna format, code aur definition.",
          "**Manual entry:** typos, shortcuts, missing mandatory fields.",
          "**No upstream validation:** source app mein rule nahi, galti aage aati hai.",
          "**Late detection:** problem report ke time pata chalti hai, data entry ke time nahi.",
          "**Warehouse-side patching:** clean karna costly aur temporary — source fix hona chahiye.",
          "**Ownership gap:** \"data kiski hai?\" ka jawab nahi — koi accountable nahi.",
          "**Volume & velocity:** bade/streaming data par rules chalana mehnga.",
          "**Privacy constraints:** PII ki wajah se sample dekhna/review karna limited."
        ]
      },
      {
        "type": "example",
        "title": "Ek hi number, teen jawab",
        "kicker": "Example",
        "body": "Monday meeting: Sales dashboard \"revenue 4.2 Cr\", Finance ka report \"3.9 Cr\", CRM \"4.4 Cr\". **Root causes:** Sales ne returns subtract nahi kiye (definition), Finance ne GST include kiya (semantic), CRM mein duplicate orders (uniqueness). **Fix:** business glossary mein \"Net Revenue\" define, ETL mein returns + GST rules add, duplicate order rule, aur ek certified KPI layer. Ab teeno dashboard ek number dete hain."
      },
      {
        "type": "points",
        "title": "Quality programme kaise banayein",
        "kicker": "DQ Lifecycle",
        "points": [
          "**Critical data elements (CDE)** identify karo — jinke bina decision nahi hota.",
          "**Rules define karo:** format, range, referential, cross-field, freshness.",
          "**Profile + baseline:** current score measure karo (e.g. completeness 86%).",
          "**Fix at source:** app validation, dropdown, mandatory field, training.",
          "**Cleanse + quarantine:** exception table + steward review.",
          "**Monitor:** DQ dashboard, alerts, SLA (freshness, null rate).",
          "**Govern:** owner + steward, issue log, root-cause, policy."
        ]
      },
      {
        "type": "diagram",
        "title": "Data quality — dimensions, challenges, lifecycle",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "bw-dq",
        "caption": "Eight quality dimensions on one side, the define-assess-cleanse-monitor-govern lifecycle on the other, with the business impact of each failed dimension"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Fit for use** — quality use-case ke hisaab se.",
          "**Dimensions:** accuracy, completeness, consistency, timeliness, validity, uniqueness, integrity.",
          "**Challenges:** silos, manual entry, late detection, ownership gap.",
          "**Lifecycle:** define -> assess -> cleanse -> monitor -> govern.",
          "**Fix at source**, warehouse par sirf patch na karo.",
          "**Exam line:** galat data se BI faster galat decision deta hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define data quality. Explain its dimensions with examples.",
        "answer": "**Definition:** Data quality data ki wo degree hai jisse data apne intended use (operations, decisions, reporting) ke liye **fit** hota hai.\n\n**Dimensions:**\n\n| Dimension | Matlab | Example of failure |\n|---|---|---|\n| Accuracy | value reality se match kare | galat phone number |\n| Completeness | required data present | missing pincode, null email |\n| Consistency | systems aur rules ke beech same | finance 3.9 Cr vs sales 4.2 Cr |\n| Timeliness | time par aur current | T+3 data T+1 report mein |\n| Validity | format/type/domain rules | dob future date, qty negative |\n| Uniqueness | duplicates nahi | ek customer 3 rows |\n| Integrity | relationships valid | order ka customer missing |\n| Interpretability | definition clear | \"revenue\" gross ya net? |\n\n**Kaise measure karte hain:** data profiling (null %, distinct, range) + rule-based checks -> DQ score + exception report.\n\n**Kaise improve:** critical data elements define, rules at source, cleanse + quarantine, monitor dashboard, owner/steward governance.\n\n**Diagram:** Refer to the Data quality — dimensions, challenges, lifecycle diagram."
      },
      {
        "question": "Discuss the challenges in maintaining data quality in a data warehouse.",
        "answer": "Data quality maintain karna muskil hai kyunki problem ka source warehouse ke bahar hota hai.\n\n**1. Heterogeneous sources**\n- Alag formats, codes, definitions; integration ke waqt mismatch.\n\n**2. Manual data entry**\n- Typos, shortcuts, mandatory fields skip.\n\n**3. Missing upstream validation**\n- Source app mein regex/range/dropdown rules nahi.\n\n**4. Late detection**\n- Problem report ke time pata chalti hai, entry ke time nahi.\n\n**5. Warehouse-side cleansing is temporary**\n- Har load par dobara clean karna padta hai; root cause source mein rehta hai.\n\n**6. Ownership gap**\n- \"Data kiski hai\" clear nahi; koi accountable nahi.\n\n**7. Volume and speed**\n- Streaming/big data par rules chalana costly; sampling se blind spots.\n\n**8. Changing definitions**\n- Business badalti hai (naya region, naya product line) — glossary update nahi hota.\n\n**9. Privacy constraints**\n- PII ki wajah se raw data review limited.\n\n**10. Measurement na hona**\n- Koi DQ score/SLA nahi to problem invisible rehti hai.\n\n**Mitigation:** CDE prioritise, source validation, exception workflow, DQ dashboard + SLA, steward governance, root-cause fix.\n\n**Diagram:** Refer to the Data quality — dimensions, challenges, lifecycle diagram."
      },
      {
        "question": "Explain the data quality lifecycle and how quality is measured and monitored.",
        "answer": "**Lifecycle:**\n\n**1. Define**\n- Critical data elements (CDE), business definitions, rules (format, range, referential, freshness).\n\n**2. Assess / profile**\n- Baseline: null %, distinct, duplicate rate, range violations, cross-system mismatch.\n\n**3. Cleanse / remediate**\n- Fix in staging, quarantine bad rows, correct at source, backfill.\n\n**4. Monitor**\n- Automated rules har load par; DQ score trend; alerts (freshness miss, null spike).\n\n**5. Govern**\n- Owner + steward, issue log, root cause, policy, training.\n\n**Measurement techniques:**\n1. **Rule-based checks** — `email REGEX`, `qty >= 0`, `dob <= today`.\n2. **Completeness %** — non-null / total rows.\n3. **Uniqueness %** — distinct / total on key.\n4. **Consistency check** — warehouse total vs source total.\n5. **Freshness** — `now - max(load_time)` vs SLA.\n6. **Referential pass %** — FK matches / total.\n7. **DQ score** — weighted average of dimensions (0-100).\n\n**Monitoring:** DQ dashboard per subject area, threshold-based alerts, exception report to stewards weekly, monthly review with business.\n\n**Diagram:** Refer to the Data quality — dimensions, challenges, lifecycle diagram."
      }
    ]
  },
  {
    "id": "ai-llm-data-prep",
    "number": "2.9",
    "title": "Role of AI and LLMs in Data Preparation",
    "subtitle": "AI se cleaning, mapping aur automated ETL",
    "icon": "ai",
    "accent": "#c4ff00",
    "englishDefinition": "AI and large language models are changing data preparation from hand-written rules to assisted and increasingly autonomous pipelines. In profiling, machine learning clusters tables and columns, suggests primary keys and joins, and flags anomalous distributions. In mapping, LLMs read column names, sample values and documentation to propose source-to-target mappings, transformation logic and glossary definitions, which an engineer then reviews. In cleaning, models handle fuzzy matching and entity resolution, probabilistic deduplication, missing-value imputation, address and name parsing, and anomaly and outlier detection at scale; natural-language rules (\"drop rows where quantity is negative\") can be compiled into SQL or pandas. In extraction, LLMs parse unstructured documents - invoices, contracts, e-mails, scanned forms - into structured fields. In orchestration, code-generating assistants write and explain ETL scripts, documentation and tests, and agentic frameworks can monitor pipelines, diagnose failures and propose fixes or re-run backfills. The gains are speed, coverage of unstructured data and lower skill barriers. The risks are equally real: hallucinated mappings, non-deterministic output, silent data drift, bias in imputation, prompt injection from data, and privacy exposure when sensitive data is sent to an external model. Sound practice therefore keeps humans in the loop for approvals, validates every AI-generated rule against data, versions prompts and models, logs what was changed, and runs AI inside a governed environment with masking and evaluation metrics.",
    "intro": "**AI/LLM data prep mein:** profiling (cluster, key/join suggestion, anomaly), **mapping** (source-to-target suggestion + transformation logic), **cleaning** (fuzzy match, dedupe, imputation, name/address parsing), **unstructured extraction** (invoice/contract se fields), **code generation** (ETL script + docs + tests), **orchestration** (monitor, diagnose, backfill). Fayde: speed, coverage, low barrier. Risks: hallucination, non-determinism, bias, privacy, drift — isliye **human-in-the-loop**, validation, versioning aur governance zaroori.",
    "sections": [
      {
        "type": "definition",
        "title": "AI ka role kya hai",
        "kicker": "Definition",
        "body": "Traditional ETL mein rules **haath se** likhe jaate hain: `if pincode length != 6 then reject`. AI ka role hai: **pattern seekhna, suggest karna, aur repetitive kaam automate karna** — phir insaan approve kare.",
        "body2": "Sabse bada practical fayda **unstructured data** hai: invoice, contract, email, scanned form — jo pehle manually type hote the, ab LLM se structured bante hain.",
        "chips": [
          "LLM mapping",
          "fuzzy dedupe",
          "document extraction",
          "code generation",
          "human-in-the-loop"
        ]
      },
      {
        "type": "cards",
        "title": "Kahan-kahan use hota hai",
        "kicker": "Use Cases",
        "cards": [
          {
            "icon": "search",
            "title": "Profiling & discovery",
            "body": "Table/column clustering, key aur join suggestion, distribution anomaly."
          },
          {
            "icon": "layers",
            "title": "Schema mapping",
            "body": "LLM column names + samples padh kar source-to-target mapping suggest karta hai."
          },
          {
            "icon": "users",
            "title": "Entity resolution",
            "body": "Fuzzy match, probabilistic dedupe, golden record survivor scoring."
          },
          {
            "icon": "half",
            "title": "Missing values & outliers",
            "body": "ML imputation, isolation forest, behaviour-based anomaly."
          },
          {
            "icon": "doc",
            "title": "Document extraction",
            "body": "Invoice, PO, contract, scanned form -> structured JSON fields."
          },
          {
            "icon": "code",
            "title": "Code generation",
            "body": "ETL script, SQL, tests aur documentation generate/explain."
          },
          {
            "icon": "loop",
            "title": "Pipeline agents",
            "body": "Failure diagnose, retry, backfill suggest, data contract check."
          },
          {
            "icon": "book",
            "title": "Business glossary",
            "body": "LLM draft definitions; steward approve karta hai."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Rule-based vs AI-assisted preparation",
        "kicker": "Comparison",
        "columns": [
          "Rule-based ETL",
          "AI/LLM-assisted"
        ],
        "rows": [
          {
            "label": "Logic",
            "values": [
              "explicit, deterministic",
              "learned/probabilistic"
            ]
          },
          {
            "label": "Setup speed",
            "values": [
              "slow (har rule likhna)",
              "fast (suggestions)"
            ]
          },
          {
            "label": "Unstructured data",
            "values": [
              "bahut mushkil",
              "strong (LLM extraction)"
            ]
          },
          {
            "label": "Explainability",
            "values": [
              "poori (code padho)",
              "partial (model + prompt)"
            ]
          },
          {
            "label": "Failure mode",
            "values": [
              "rule miss -> clean fail",
              "hallucination -> silent error"
            ]
          },
          {
            "label": "Governance need",
            "values": [
              "code review",
              "code review + eval + versioning + masking"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#c4ff00"
        ]
      },
      {
        "type": "example",
        "title": "Invoice processing pipeline with LLM",
        "kicker": "Example",
        "body": "**Problem:** 40,000 supplier invoices/month, PDF aur scanned, 12 fields chahiye. **Pehle:** 6 data-entry staff, 3% error. **Ab:** LLM extraction -> JSON (`invoice_no`, `date`, `gstin`, `line_items`, `total`), phir **validation layer**: total = sum(line items)? GSTIN regex + checksum? PO DB mein exist karta hai? Confidence < 0.9 ya validation fail -> human review queue. **Result:** 92% auto-pass, error 0.6%, staff sirf exceptions dekhte hain. AI ne speed di, **rules ne** correctness."
      },
      {
        "type": "points",
        "title": "Risks aur controls",
        "kicker": "Risks & Controls",
        "points": [
          "**Hallucination:** mapping/field invent kar sakta hai — sample validation + schema check.",
          "**Non-determinism:** same input, different output — temp 0, eval set, versioned prompts.",
          "**Privacy:** PII external model ko na bhejo — masking, on-prem/private endpoint, DPDP compliance.",
          "**Prompt injection:** document ke andar instructions — sandbox, output schema enforce.",
          "**Bias:** imputation majority community par bias — fairness check, segment-wise error.",
          "**Drift:** model/source badla, accuracy giri — monitoring + periodic re-eval.",
          "**Ownership:** AI-generated rule ka approver kaun — human-in-the-loop sign-off.",
          "**Cost:** token cost per document — batch, cache, chhote model for easy cases."
        ]
      },
      {
        "type": "points",
        "title": "Exam answer ka structure",
        "kicker": "How To Write",
        "points": [
          "**Pehle traditional ETL** ka scope batao (rules, deterministic).",
          "**Phir AI/LLM ke 4-5 use cases** with examples.",
          "**Fayde:** speed, unstructured coverage, lower skill barrier, 24x7 agents.",
          "**Risks:** hallucination, privacy, drift, bias, explainability.",
          "**Controls:** human-in-the-loop, validation, versioning, masking, eval metrics.",
          "**Conclusion:** AI accelerates, **governance decide** karti hai ki bharosa karein ya nahi."
        ]
      },
      {
        "type": "diagram",
        "title": "AI and LLMs in data preparation",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "bw-ai-etl",
        "caption": "AI touchpoints across profiling, mapping, cleaning, document extraction, code generation and pipeline agents, balanced against hallucination, privacy, drift and bias with human-in-the-loop approval"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**AI use cases:** profiling, mapping, dedupe, imputation, extraction, code-gen, agents.",
          "**Biggest win:** unstructured documents -> structured fields.",
          "**Traditional vs AI:** deterministic rules vs probabilistic suggestions.",
          "**Risks:** hallucination, privacy, drift, bias, explainability.",
          "**Controls:** human approval, validation, versioning, masking, evals.",
          "**Exam line:** AI speed deta hai, governance trust deti hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the role of AI and LLMs in data preparation and ETL.",
        "answer": "AI/LLM data preparation ko rule-writing se **assisted** aur partly **autonomous** banate hain.\n\n**1. Profiling and discovery**\n- Table/column clustering, primary key aur join suggestions.\n- Distribution anomaly detection.\n\n**2. Schema mapping**\n- LLM column names, samples aur docs padh kar source-to-target mapping aur transformation logic suggest karta hai.\n- Engineer review karta hai, phir mapping metadata mein jaati hai.\n\n**3. Data cleaning**\n- Fuzzy matching, probabilistic deduplication, golden record scoring.\n- Missing value imputation, outlier/anomaly detection.\n- Natural-language rules -> SQL/pandas.\n\n**4. Unstructured extraction**\n- Invoice, PO, contract, email, scanned form -> structured JSON.\n- OCR + LLM combination.\n\n**5. Code generation and documentation**\n- ETL scripts, SQL, tests, data dictionaries, lineage explanation.\n\n**6. Pipeline orchestration (agents)**\n- Failure diagnosis, retry/backfill suggestion, data contract checks.\n\n**Benefits:** speed, unstructured data coverage, lower skill barrier, better anomaly coverage.\n\n**Risks:** hallucination, non-determinism, privacy, bias, drift, weak explainability.\n\n**Controls:** human-in-the-loop approval, validation rules, prompt/model versioning, PII masking, evaluation metrics.\n\n**Diagram:** Refer to the AI and LLMs in data preparation diagram."
      },
      {
        "question": "Compare rule-based ETL with AI-assisted data preparation. What are the risks and controls?",
        "answer": "| Point | Rule-based ETL | AI/LLM-assisted |\n|---|---|---|\n| Logic | explicit, deterministic | learned, probabilistic |\n| Setup speed | slow | fast |\n| Unstructured data | hard | strong |\n| Explainability | full (code) | partial (model/prompt) |\n| Failure mode | missed rule -> bad data | hallucination -> silent error |\n| Change handling | rule update | prompt/model update + re-eval |\n| Governance | code review | code review + eval + masking + versioning |\n\n**Risks:**\n1. **Hallucination** — invented mapping/values.\n2. **Non-determinism** — same input, different output.\n3. **Privacy** — PII external model ko jaana.\n4. **Prompt injection** — document ke andar instructions.\n5. **Bias** — imputation/matching ka unfair behaviour.\n6. **Drift** — model ya source change se accuracy girna.\n7. **Accountability** — AI-generated rule ka owner kaun.\n\n**Controls:**\n- **Human-in-the-loop** approval for every generated rule.\n- **Validation layer** — schema, totals, referential checks.\n- **Deterministic settings** + eval dataset + regression tests.\n- **Masking / private endpoints** for sensitive data.\n- **Versioning** of prompts, models, and mappings.\n- **Monitoring** — accuracy, reject rate, drift alerts.\n\n**Conclusion:** AI accelerates preparation but correctness aur accountability insaan ke paas rehni chahiye.\n\n**Diagram:** Refer to the AI and LLMs in data preparation diagram."
      },
      {
        "question": "Discuss automated ETL with AI: architecture, benefits and limitations.",
        "answer": "**Architecture (AI-augmented pipeline):**\n\n1. **Data contracts** — source teams schema + quality expectations declare karte hain.\n2. **Ingestion** — connector + LLM extraction for documents.\n3. **Auto-mapping** — LLM proposed mappings, stored as metadata, engineer-approved.\n4. **Auto-cleansing** — ML dedupe/impute + rule engine for hard constraints.\n5. **Orchestration agent** — schedule, retry, backfill, failure diagnosis.\n6. **Quality gates** — DQ rules + anomaly detection; fail -> quarantine.\n7. **Governance** — lineage, masking, approval log, model/prompt registry.\n\n**Benefits:**\n- Setup time tezi se kam (mapping suggestions).\n- Unstructured data ka coverage.\n- Anomaly detection jo manual rules miss karte hain.\n- Maintenance easy: NL se rule change, docs auto-generate.\n- Skill barrier kam — SQL/pandas generate.\n\n**Limitations:**\n1. **Hallucination** — galat mapping productiom mein.\n2. **Cost** — token/compute kharch; bade volume par mehnga.\n3. **Latency** — real-time ke liye model inference slow.\n4. **Privacy/legal** — PII third-party model ko bhejna DPDP risk.\n5. **Explainability/audit** — regulator ko \"model ne kaha\" kaafi nahi.\n6. **Drift** — model update se behaviour badalna.\n7. **Skill shift** — team ko prompt + eval + data engineering dono chahiye.\n\n**Best practice:** AI **suggest** kare, rules **validate** karein, insaan **approve** kare, aur sab kuch **versioned + logged** rahe.\n\n**Diagram:** Refer to the AI and LLMs in data preparation diagram."
      }
    ]
  }
];

export const biWarehousingUnit = {
  id: 'unit-2',
  number: '2',
  name: 'Data Warehousing and Data Preparation',
  topics: biWarehousingTopics,
};
