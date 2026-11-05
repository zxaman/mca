// Business Intelligence — Unit III: Multidimensional Data Modeling and OLAP
// Topics 3.1 – 3.12, teacher-style Hinglish notes + exam Q&A.

export const biOlapTopics = [
  {
    "id": "multidimensional-model",
    "number": "3.1",
    "title": "Multidimensional Data Models",
    "subtitle": "Data ko cube ki tarah sochna — dimension, measure, cell",
    "icon": "cube",
    "accent": "#00d4ff",
    "englishDefinition": "A multidimensional data model represents analytical data as a cube (more precisely a hypercube): a set of numeric facts located by a set of descriptive dimensions. Each dimension is a categorical axis - product, time, geography, customer, channel - organised into hierarchies such as year to quarter to month to day, or country to state to city. The intersection of one member from each dimension defines a cell, and each cell holds one or more measures such as sales amount, quantity or margin. This model exists because business questions are naturally multidimensional (\"sales by product by region by month\"), while operational schemas are normalised for update efficiency and require many joins to answer the same question. The multidimensional view supports fast aggregation, intuitive navigation - roll-up, drill-down, slice, dice and pivot - and a vocabulary that business users already understand. It is implemented physically as a star or snowflake schema in a relational database (ROLAP), as proprietary cubes (MOLAP), or as a hybrid, and logical definitions live in a semantic layer so that BI tools see uniform dimensions and measures. Because real cubes are extremely sparse, implementations store only non-empty cells and pre-compute aggregates at higher levels of each hierarchy.",
    "intro": "**Multidimensional model = cube.** Teen cheezein: **dimensions** (product, time, region, customer — analysis ke axis), **hierarchies/levels** (year -> quarter -> month -> day), aur **measures** (sales, quantity, margin — numbers jo cell mein baithte hain). Ek dimension ka ek member + doosre ka member = **cell**. Kyun? Kyunki business ke sawaal multidimensional hote hain, aur normalized OLTP schema par wahi jawab dene ke liye 8 joins chahiye.",
    "sections": [
      {
        "type": "definition",
        "title": "Multidimensional model kya hai",
        "kicker": "Definition",
        "body": "**Multidimensional data model** data ko **cube** ki tarah dekhta hai: har fact kuch **dimensions** ke coordinates par baithta hai aur uske saath **measures** hote hain.",
        "body2": "Socho: `Sales = 45,000` — par ye kis product ka, kis city ka, kis mahine ka? Dimensions wahi context deti hain. Isliye analysis ka basic unit **cell** hai: (Product = Shoes) x (City = Pune) x (Month = Mar-2024) -> Sales = 45,000, Qty = 300.",
        "chips": [
          "cube",
          "dimension",
          "hierarchy",
          "measure",
          "cell"
        ]
      },
      {
        "type": "cards",
        "title": "Cube ke components",
        "kicker": "Building Blocks",
        "cards": [
          {
            "icon": "layers",
            "title": "Dimensions",
            "body": "Analysis ke axis: product, time, geography, customer, channel, promotion."
          },
          {
            "icon": "timeline",
            "title": "Hierarchies & levels",
            "body": "Year -> Quarter -> Month -> Day; Country -> State -> City."
          },
          {
            "icon": "chart",
            "title": "Measures",
            "body": "Cell ke andar ke numbers: sales amount, quantity, margin, discount."
          },
          {
            "icon": "grid",
            "title": "Cell",
            "body": "Ek member per dimension ka intersection — jahan measure value rehti hai."
          },
          {
            "icon": "cube",
            "title": "Cube / hypercube",
            "body": "N dimensions ka box — 3D se zyada ho to hypercube kehte hain."
          },
          {
            "icon": "folder",
            "title": "Members",
            "body": "Ek dimension ki values: {Shoes, Shirts, Belts} ya {2023, 2024}."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Relational view vs multidimensional view",
        "kicker": "Comparison",
        "columns": [
          "Relational (normalized)",
          "Multidimensional (cube)"
        ],
        "rows": [
          {
            "label": "Structure",
            "values": [
              "tables + joins",
              "dimensions + measures"
            ]
          },
          {
            "label": "Question fit",
            "values": [
              "\"is order ka status?\"",
              "\"region-wise monthly trend?\""
            ]
          },
          {
            "label": "Query",
            "values": [
              "8-12 joins, complex SQL",
              "slice/dice/roll-up operations"
            ]
          },
          {
            "label": "User",
            "values": [
              "developer/DBA",
              "business analyst"
            ]
          },
          {
            "label": "Data",
            "values": [
              "current, detailed",
              "historical, aggregated"
            ]
          },
          {
            "label": "Speed",
            "values": [
              "seconds-minutes",
              "sub-second (pre-aggregated)"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#00d4ff"
        ]
      },
      {
        "type": "example",
        "title": "Retail cube — ek cell ki kahani",
        "kicker": "Example",
        "body": "Dimensions: **Product** (Category -> Sub-category -> SKU), **Time** (Year -> Quarter -> Month -> Day), **Store** (Region -> State -> City -> Store), **Channel** (Online / Offline). Cell (Category = Footwear, Month = Mar-2024, City = Pune, Channel = Online) mein `Sales = 12,40,000`, `Qty = 1,850`, `Margin = 3,10,000`. Ab roll-up karo -> Q1 2024; drill-down karo -> SKU level; slice maaro -> sirf Online; dice maaro -> sirf Footwear aur Apparel, sirf Jan-Mar, sirf Pune + Mumbai."
      },
      {
        "type": "points",
        "title": "Kyun multidimensional model chahiye",
        "kicker": "Why It Matters",
        "points": [
          "**Business language:** \"product by region by month\" — model bhi wahi bolta hai.",
          "**Speed:** pre-aggregated cells se jawab instant.",
          "**Simplicity:** analyst ko joins ya SQL nahi likhna padta.",
          "**Navigation:** roll-up/drill-down/pivot built-in.",
          "**Consistency:** ek hi semantic layer par sab reports.",
          "**Scalability:** sparse storage + partition se bade data par bhi chalta hai."
        ]
      },
      {
        "type": "points",
        "title": "Limitations / dhyan rakhne wali baatein",
        "kicker": "Watch Out",
        "points": [
          "**Sparsity:** har cell bhara nahi hota — storage plan chahiye.",
          "**Rigidity:** naya dimension add karna modelling change maangta hai.",
          "**Grain decisions:** galat grain baad mein badalna mushkil.",
          "**Update cost:** cube refresh expensive ho sakta hai.",
          "**Not for transactions:** OLTP ka kaam nahi."
        ]
      },
      {
        "type": "diagram",
        "title": "Multidimensional data model",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-multidim",
        "caption": "Three-dimensional cube with product, time and store axes, hierarchy levels on each axis, and cells holding measures such as sales, quantity and margin"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Cube** = dimensions + measures + cells.",
          "**Dimensions** = axis (product, time, store, channel).",
          "**Hierarchies** = year-quarter-month, region-state-city.",
          "**Measures** = numbers (sales, qty, margin).",
          "**Implementation:** star/snowflake (ROLAP) ya proprietary cube (MOLAP).",
          "**Exam line:** multidimensional model analysis ki bhasha hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the multidimensional data model with the cube concept.",
        "answer": "**Definition:** Multidimensional data model analytical data ko **cube** ke roop mein dekhta hai — kuch **dimensions** (axis) aur unke intersection par **measures** (numbers).\n\n**Components:**\n1. **Dimensions** — product, time, geography, customer, channel.\n2. **Hierarchies/levels** — year -> quarter -> month -> day; country -> state -> city.\n3. **Members** — ek dimension ki values (Shoes, Shirts; 2023, 2024).\n4. **Measures** — sales amount, quantity, margin, discount.\n5. **Cell** — ek member per dimension ka intersection; measure value yahan hoti hai.\n6. **Cube/hypercube** — 3 se zyada dimensions hone par bhi \"cube\" hi kehte hain.\n\n**Example:** (Product = Footwear) x (City = Pune) x (Month = Mar-2024) -> Sales = 12,40,000, Qty = 1,850.\n\n**Operations jo possible hote hain:** roll-up, drill-down, slice, dice, pivot.\n\n**Implementation:**\n- **ROLAP** — star/snowflake schema relational DB mein.\n- **MOLAP** — proprietary cube (pre-aggregated).\n- **HOLAP** — dono ka mix.\n\n**Fayde:** business-friendly, fast aggregation, easy navigation.\n**Limitation:** sparse data, rigid structure, refresh cost.\n\n**Diagram:** Refer to the Multidimensional data model diagram."
      },
      {
        "question": "Why is a multidimensional model preferred over a normalized relational model for analysis?",
        "answer": "**1. Business questions multidimensional hote hain**\n- \"product-wise, region-wise, month-wise sales\" — cube isi shape mein hai.\n- Normalized schema mein isi ke liye 8-12 joins likhne padte hain.\n\n**2. Performance**\n- Pre-aggregated cells se sub-second response.\n- Normalized model mein har query par join + aggregation.\n\n**3. Simplicity for users**\n- Analyst dimension aur measure chunta hai, SQL nahi likhta.\n- BI tools cube/semantic layer ko directly samajhte hain.\n\n**4. Navigation**\n- Roll-up, drill-down, slice, dice, pivot built-in operations.\n- Ad-hoc exploration possible bina developer ke.\n\n**5. Consistency**\n- Ek hi semantic layer: \"Net Revenue\" ka ek definition, sab tools ke liye.\n\n**6. Storage efficiency**\n- Sparse cells skip, aggregates pre-computed.\n\n**Kab relational behtar hai:** transactional detail, compliance/audit ke liye row-level data, ya jab dimensions bahut dynamic hon.\n\n**Practical answer:** warehouse mein detail relational (star) form mein rehta hai, aur **multidimensional view** uske upar banti hai — dono ek saath.\n\n**Diagram:** Refer to the Multidimensional data model diagram."
      },
      {
        "question": "Explain dimensions, hierarchies, levels, members and cells with an example.",
        "answer": "**Dimension:** analysis ka axis — jis par hum group karte hain (product, time, store).\n\n**Hierarchy:** dimension ke andar levels ka order:\n- Time: Year -> Quarter -> Month -> Day\n- Geography: Country -> Region -> State -> City -> Store\n- Product: Category -> Sub-category -> Brand -> SKU\n\n**Level:** hierarchy ka ek step (Month ek level hai).\n**Member:** ek level ki ek value (Mar-2024, Pune, Footwear).\n**Cell:** har dimension ka ek member le kar bana intersection — measure yahan store hoti hai.\n\n**Example:**\n| Dimension | Member |\n|---|---|\n| Product | Footwear |\n| Time | Mar-2024 |\n| Store | Pune |\n| Channel | Online |\n\nCell value: `Sales = 12,40,000`, `Qty = 1,850`, `Margin = 3,10,000`.\n\n**Hierarchy ka use:**\n- **Roll-up:** Month -> Quarter -> Year (aggregate upar).\n- **Drill-down:** Year -> Quarter -> Month -> SKU (detail neeche).\n- **Slice/dice:** ek ya do dimensions fix karke baaki dekhna.\n\n**Diagram:** Refer to the Multidimensional data model diagram."
      }
    ]
  },
  {
    "id": "fact-dimension-tables",
    "number": "3.2",
    "title": "Fact Tables and Dimension Tables",
    "subtitle": "Ek table numbers, baaki tables context",
    "icon": "table",
    "accent": "#00e676",
    "englishDefinition": "Dimensional modelling separates measurement from context using two kinds of tables. A fact table stores the measurements of a business process at a declared grain: each row is one event or one periodic snapshot, it holds foreign keys to the dimension tables plus the numeric measures, and it is long and narrow, growing with business activity. Fact tables come in three common forms - transaction facts (one row per event), periodic snapshot facts (one row per entity per period, such as month-end inventory) and accumulating snapshot facts (one row per process instance, updated as it moves through stages). A dimension table stores the descriptive context - product name, category, brand, colour; customer city, segment; date, month, quarter, year - and is short and wide, with a surrogate key as its primary key, a natural or business key, and attributes used for filtering, grouping and labelling. Dimensions may be conformed across fact tables, role-playing (date used as order date and delivery date), degenerate (an invoice number kept in the fact table), junk (many small flags combined) or slowly changing (Type 1 overwrite, Type 2 history rows, Type 3 previous-value columns). A star schema is simply one fact table surrounded by its dimension tables, and the grain plus the dimension keys together determine what every query can answer.",
    "intro": "**Fact table = numbers + keys.** Grain declare karo (ek row = ek line item / ek din ka snapshot), dimension foreign keys + measures. Long aur narrow, business ke saath badhti hai. **Dimension table = context.** Surrogate key (PK) + business key + attributes (name, category, city). Short aur wide. Types: **transaction / periodic snapshot / accumulating snapshot** facts; **conformed, role-playing, degenerate, junk, SCD** dimensions.",
    "sections": [
      {
        "type": "definition",
        "title": "Do table, do kaam",
        "kicker": "Definition",
        "body": "**Fact table:** business process ki **measurements** — `fact_sales` mein har row ek invoice line: `date_key, product_key, store_key, customer_key, qty, amount, discount, cost`.",
        "body2": "**Dimension table:** us fact ka **context** — `dim_product` mein `product_key, sku, name, category, brand`, `dim_store` mein `store_key, city, state, region`. Rule: **fact table mein sirf numbers aur keys**, description nahi; **dimension mein description**, measures nahi.",
        "chips": [
          "grain",
          "surrogate key",
          "foreign key",
          "additive measure",
          "SCD"
        ]
      },
      {
        "type": "comparison",
        "title": "Fact table vs dimension table",
        "kicker": "Comparison",
        "columns": [
          "Fact table",
          "Dimension table"
        ],
        "rows": [
          {
            "label": "Content",
            "values": [
              "measures + foreign keys",
              "descriptive attributes"
            ]
          },
          {
            "label": "Rows",
            "values": [
              "bahut zyada (lakhs-crores)",
              "kam (hundreds-thousands)"
            ]
          },
          {
            "label": "Columns",
            "values": [
              "kam (narrow)",
              "zyada (wide)"
            ]
          },
          {
            "label": "Primary key",
            "values": [
              "composite (dim keys)",
              "surrogate key"
            ]
          },
          {
            "label": "Growth",
            "values": [
              "business activity ke saath",
              "slowly (SCD)"
            ]
          },
          {
            "label": "Query role",
            "values": [
              "aggregate (SUM, COUNT)",
              "filter, group, label"
            ]
          },
          {
            "label": "Example",
            "values": [
              "fact_sales, fact_inventory",
              "dim_product, dim_date, dim_store"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#00d4ff"
        ]
      },
      {
        "type": "cards",
        "title": "Fact table ke types",
        "kicker": "Fact Table Types",
        "cards": [
          {
            "icon": "list",
            "title": "Transaction fact",
            "body": "Ek row = ek event (invoice line, payment, click). Sabse common."
          },
          {
            "icon": "calendar",
            "title": "Periodic snapshot",
            "body": "Ek row = ek entity per period (month-end inventory, daily balance)."
          },
          {
            "icon": "loop",
            "title": "Accumulating snapshot",
            "body": "Ek row = ek process instance, stages ke saath update hoti hai (order -> ship -> deliver)."
          },
          {
            "icon": "zap",
            "title": "Factless fact",
            "body": "Koi measure nahi — sirf events/coverage (kaun promotion mein tha)."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Dimension table ke types",
        "kicker": "Dimension Table Types",
        "cards": [
          {
            "icon": "layers",
            "title": "Conformed dimension",
            "body": "Ek hi dimension multiple fact tables ke saath (dim_date sab jagah)."
          },
          {
            "icon": "users",
            "title": "Role-playing dimension",
            "body": "Ek dimension, kai roles — order date, ship date, delivery date."
          },
          {
            "icon": "tag",
            "title": "Degenerate dimension",
            "body": "Key/ID fact table mein hi rakha (invoice number)."
          },
          {
            "icon": "grid",
            "title": "Junk dimension",
            "body": "Chhote flags ek saath (is_gift, is_return, payment_mode)."
          },
          {
            "icon": "clock",
            "title": "SCD Type 1/2/3",
            "body": "Overwrite / history rows / previous-value column."
          },
          {
            "icon": "folder",
            "title": "Mini-dimension",
            "body": "Fast-changing attributes alag (age band, income band)."
          }
        ]
      },
      {
        "type": "example",
        "title": "Star schema ka concrete example",
        "kicker": "Example",
        "body": "**fact_sales** (grain = ek invoice line): `date_key, product_key, store_key, customer_key, promo_key, qty, gross_amount, discount, net_amount, cost`. **dim_date:** `date_key, date, day, month, quarter, year, is_festive`. **dim_product:** `product_key, sku, name, category, brand, size`. **dim_store:** `store_key, store_name, city, state, region`. **dim_customer:** `customer_key, name, segment, city`. Ab query: \"Pune mein footwear ka Q1 net margin\" — teen dimensions join, ek fact aggregate."
      },
      {
        "type": "points",
        "title": "Design rules — exam + interview dono",
        "kicker": "Best Practices",
        "points": [
          "**Grain pehle decide karo** — ek row kya represent karti hai.",
          "**Surrogate keys** use karo (source key badal sakti hai).",
          "**Conformed dimensions** banao taaki facts compare ho saken.",
          "**Additive measures** rakho; ratios ko derive karo.",
          "**Dimension mein hierarchy** levels store karo (roll-up ke liye).",
          "**SCD policy** document karo (kaunsa attribute history rakhta hai).",
          "**Fact table ko narrow** rakho — description dimension mein."
        ]
      },
      {
        "type": "diagram",
        "title": "Fact and dimension tables",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-fact-dim",
        "caption": "Central fact table with foreign keys and measures surrounded by product, date, store and customer dimension tables, plus the fact and dimension type families"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Fact:** keys + measures, long and narrow, grows with activity.",
          "**Dimension:** surrogate key + attributes, short and wide.",
          "**Fact types:** transaction, periodic snapshot, accumulating, factless.",
          "**Dimension types:** conformed, role-playing, degenerate, junk, SCD.",
          "**Grain** sabse pehle decide hota hai.",
          "**Exam line:** fact = kya hua, dimension = kis baare mein."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between fact tables and dimension tables with an example.",
        "answer": "Dimensional model do tarah ki tables se banta hai: numbers aur context.\n\n| Point | Fact table | Dimension table |\n|---|---|---|\n| Content | measures + foreign keys | descriptive attributes |\n| Rows | lakhs-crores | hundreds-thousands |\n| Columns | kam (narrow) | zyada (wide) |\n| Primary key | composite (dimension keys) | surrogate key |\n| Growth | business activity ke saath | slowly (SCD) |\n| Role in query | SUM, COUNT, AVG | filter, group by, label |\n| Example | `fact_sales` | `dim_product`, `dim_date` |\n\n**Example rows:**\n- `fact_sales`: `(20240512, 1001, 5, 220, 3, 4500, 500, 4000)` — date_key, product_key, store_key, customer_key, qty, gross, discount, net.\n- `dim_product`: `(1001, 'SH-101', 'Running Shoes', 'Footwear', 'Nike', 'UK 9')`.\n\n**Grain:** fact table ki ek row ka matlab declare karna padta hai (ek invoice line, ek din ka snapshot).\n\n**Diagram:** Refer to the Fact and dimension tables diagram."
      },
      {
        "question": "Explain the types of fact tables and dimension tables.",
        "answer": "**Fact table types:**\n\n1. **Transaction fact** — ek row = ek event (invoice line, payment). Sabse detailed aur common.\n2. **Periodic snapshot** — ek row = entity per period (month-end inventory, daily account balance). Semi-additive measures.\n3. **Accumulating snapshot** — ek row = process instance, milestones ke saath update (order placed -> shipped -> delivered), duration measures ke liye.\n4. **Factless fact** — koi measure nahi; attendance/coverage/event track karta hai.\n\n**Dimension table types:**\n\n1. **Conformed dimension** — multiple facts ke saath same dimension (dim_date, dim_customer).\n2. **Role-playing** — ek dimension kai roles mein (order date, ship date, delivery date -> dim_date teen baar).\n3. **Degenerate dimension** — ID fact table mein hi (invoice_no), separate table nahi.\n4. **Junk dimension** — chhote flags/indicators ek saath.\n5. **Slowly changing dimension (SCD)** — Type 1 overwrite, Type 2 new row with effective dates, Type 3 previous value column.\n6. **Mini-dimension** — fast-changing attributes alag rakh kar dimension chhoti rakho.\n\n**Diagram:** Refer to the Fact and dimension tables diagram."
      },
      {
        "question": "How is a fact table designed? Explain grain, keys and measure selection.",
        "answer": "**1. Business process chuno**\n- Example: sales, inventory, payments, claims.\n\n**2. Grain declare karo** (sabse important decision)\n- \"Ek row = ek invoice line\" ya \"ek row = ek product per store per day\".\n- Galat grain baad mein badalna mehnga hai.\n\n**3. Dimensions identify karo**\n- Grain ke hisaab se: date, product, store, customer, promotion, employee.\n\n**4. Surrogate keys use karo**\n- Har dimension ka `*_key` integer; source ID business key ke roop mein dimension mein.\n\n**5. Measures chuno**\n- **Additive:** qty, gross amount, discount, cost (sab dimensions par sum ho sakte hain).\n- **Semi-additive:** inventory balance, account balance (time par sum nahi).\n- **Non-additive:** margin %, average price (derive karo, store na karo).\n\n**6. Derived measures / audit columns**\n- `net_amount = gross - discount`, `margin = net - cost`, `load_id`, `etl_timestamp`.\n\n**7. Physical design**\n- Partition by date, cluster/index on common dimension keys, compress, columnstore.\n\n**8. Documentation**\n- Grain statement, dimension list, measure definitions, refresh policy metadata mein.\n\n**Diagram:** Refer to the Fact and dimension tables diagram."
      }
    ]
  },
  {
    "id": "measures-dimensions",
    "number": "3.3",
    "title": "Measures and Dimensions",
    "subtitle": "Number kya hai, context kya hai",
    "icon": "metrics",
    "accent": "#ff8800",
    "englishDefinition": "In a multidimensional model, dimensions describe and measures quantify. A measure is a numeric property of a business event that can be aggregated - sales amount, quantity sold, cost, discount, margin, headcount. Measures are classified by how they aggregate. Additive measures can be summed across every dimension (sales amount by product, by store, by month). Semi-additive measures can be summed across some dimensions but not across time (inventory on hand, account balance, headcount at month end) and require last-period or average aggregation over the time axis. Non-additive measures cannot be summed at all (ratios, percentages, averages, unit price, distinct customer count) and must be computed from additive components at query time. Dimensions are the descriptive, usually textual attributes used to filter, group and label: product name, category, city, segment, month, channel. Each dimension belongs to a hierarchy that gives levels for roll-up and drill-down, and the same column can never be both a measure and a dimension. Good models keep measures few, additive and well-defined, put descriptive attributes in dimensions, and encode aggregation rules in the semantic layer so that every report sums the data the same, correct way.",
    "intro": "**Measure = number jo aggregate hota hai** (sales, qty, cost, margin). **Dimension = context** (product, city, month, segment). Measures ke types: **additive** (har dimension par sum), **semi-additive** (balance/inventory — time par sum nahi), **non-additive** (ratio, %, average — derive karo). Dimension ke attributes filter/group/label karte hain aur hierarchy se roll-up hota hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Measure vs dimension",
        "kicker": "Definition",
        "body": "**Measure:** numeric, aggregatable. `net_amount`, `qty`, `discount`, `cost`.",
        "body2": "**Dimension:** descriptive, non-aggregatable. `product_category`, `city`, `month_name`, `segment`. Simple test: **\"iska SUM karna meaningful hai?\"** Haan -> measure. Nahi -> dimension (ya derived measure).",
        "chips": [
          "additive",
          "semi-additive",
          "non-additive",
          "hierarchy",
          "aggregation rule"
        ]
      },
      {
        "type": "cards",
        "title": "Measures ke teen types",
        "kicker": "Measure Classification",
        "cards": [
          {
            "icon": "plus",
            "title": "Additive",
            "body": "Har dimension par sum: sales amount, quantity, discount, cost."
          },
          {
            "icon": "half",
            "title": "Semi-additive",
            "body": "Kuch dimensions par sum, time par nahi: inventory balance, account balance, headcount."
          },
          {
            "icon": "percent",
            "title": "Non-additive",
            "body": "Sum hi nahi ho sakte: margin %, average price, ratio, distinct customers."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Measure types — behaviour",
        "kicker": "Comparison",
        "columns": [
          "Type",
          "Aggregation rule"
        ],
        "rows": [
          {
            "label": "Additive",
            "values": [
              "SUM across all dimensions",
              "qty, gross_amount, cost"
            ]
          },
          {
            "label": "Semi-additive",
            "values": [
              "SUM across dims, LAST/AVG over time",
              "closing inventory, balance"
            ]
          },
          {
            "label": "Non-additive",
            "values": [
              "derive from components at query time",
              "margin %, avg price, ratio"
            ]
          },
          {
            "label": "Derived",
            "values": [
              "formula on facts",
              "net = gross - discount"
            ]
          },
          {
            "label": "Distinct count",
            "values": [
              "unique entities, not summable",
              "distinct customers"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#ffd600",
          "#ff5252"
        ]
      },
      {
        "type": "cards",
        "title": "Dimensions ke attributes",
        "kicker": "Dimension Anatomy",
        "cards": [
          {
            "icon": "tag",
            "title": "Descriptive attributes",
            "body": "Name, brand, colour, size — labels ke liye."
          },
          {
            "icon": "layers",
            "title": "Hierarchy levels",
            "body": "Category -> Sub-category -> SKU; Country -> State -> City."
          },
          {
            "icon": "flag",
            "title": "Flags",
            "body": "is_festive, is_promotional, is_active (junk dimension)."
          },
          {
            "icon": "clock",
            "title": "Time attributes",
            "body": "Date, day, week, month, quarter, year, financial year."
          },
          {
            "icon": "users",
            "title": "Role attributes",
            "body": "Segment, tier, loyalty band (customer)."
          },
          {
            "icon": "wrench",
            "title": "Surrogate + business key",
            "body": "Internal key + source key for traceability."
          }
        ]
      },
      {
        "type": "example",
        "title": "Semi-additive ka classic trap",
        "kicker": "Example",
        "body": "Store ka **month-end inventory**: Jan 100, Feb 120, Mar 90. SUM = 310 — **galat**. Ye teen alag snapshots hain, ek store ka total stock 310 nahi hai. Sahi: **March ka closing = 90** (last non-empty) ya **average = 103**. Isi tarah bank balance, headcount, open tickets — inhe time par sum nahi karte."
      },
      {
        "type": "points",
        "title": "Practical rules",
        "kicker": "Do / Don't",
        "points": [
          "**Ratios store na karo** — components store karo, ratio query par derive karo.",
          "**Distinct count** sum nahi hota — alag measure type hai.",
          "**Semi-additive** ke liye last-period/average aggregation define karo.",
          "**Har measure ka** definition + aggregation rule semantic layer mein.",
          "**Dimensions ko clean** rakho — description, keys, hierarchy.",
          "**Consistent naming** — `amount`, `qty`, `cost` ka matlab sab jagah same."
        ]
      },
      {
        "type": "diagram",
        "title": "Measures and dimensions",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-measures",
        "caption": "Left side the three measure classes with aggregation rules, right side dimension anatomy with hierarchies and attributes, meeting in a cell that shows which numbers can be summed and which cannot"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Measure:** aggregatable number (sales, qty, cost).",
          "**Dimension:** descriptive context (product, city, month).",
          "**Additive:** sum everywhere.",
          "**Semi-additive:** time par sum nahi (balance, inventory).",
          "**Non-additive:** ratio/average — derive karo.",
          "**Exam line:** measure = kitna, dimension = kiska."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between measures and dimensions with examples.",
        "answer": "| Point | Measure | Dimension |\n|---|---|---|\n| Nature | numeric, quantitative | descriptive, textual/categorical |\n| Purpose | quantify the event | describe, filter, group, label |\n| Aggregation | SUM/AVG/COUNT hota hai | aggregate nahi hota |\n| Location | fact table | dimension table |\n| Examples | sales amount, qty, cost, discount | product name, category, city, month |\n| Test | \"SUM meaningful hai?\" | \"group/filter karna meaningful hai?\" |\n\n**Example:** fact row `(2024-03, Footwear, Pune, 3 qty, 4500 amount)` — yahan `qty` aur `amount` measures hain; `Footwear`, `Pune`, `2024-03` dimensions ke members hain.\n\n**Hierarchy:** har dimension ke levels hote hain (category -> sub-category -> SKU), jo roll-up/drill-down enable karte hain.\n\n**Rule:** ek column measure aur dimension dono nahi ho sakta; ratios ko measure ke roop mein store nahi karte, derive karte hain.\n\n**Diagram:** Refer to the Measures and dimensions diagram."
      },
      {
        "question": "Explain additive, semi-additive and non-additive measures with examples.",
        "answer": "**1. Additive measures**\n- Har dimension par sum ho sakte hain.\n- Examples: sales amount, quantity sold, discount, cost.\n- `SUM(amount)` by product, by store, by month — sab valid.\n\n**2. Semi-additive measures**\n- Kuch dimensions par sum valid, **time par nahi**.\n- Examples: inventory on hand, account balance, headcount, open tickets.\n- Jan 100 + Feb 120 + Mar 90 = 310 **galat** (stock 310 nahi).\n- Sahi: **last non-empty** (Mar = 90), **average** (103), ya period-end rule.\n\n**3. Non-additive measures**\n- Sum bilkul nahi ho sakta; components se derive karna padta hai.\n- Examples: margin %, average price, ratio, conversion rate, distinct customers.\n- `AVG(price)` ≠ `SUM(sales)/SUM(qty)` — weighted average chahiye.\n\n**Handling in models:**\n- Fact table mein additive components store karo; ratio semantic layer mein calculate karo.\n- Semi-additive ke liye measure ka aggregation rule define karo (`LAST_NON_EMPTY`, `AVG`).\n- Distinct count ko separate measure type ke roop mein handle karo (approx algorithms bade data ke liye).\n\n**Diagram:** Refer to the Measures and dimensions diagram."
      },
      {
        "question": "How are measures and dimensions implemented in a warehouse, and what design rules apply?",
        "answer": "**Implementation:**\n\n1. **Fact table** — foreign keys + additive measures + derived columns (net amount, margin amount).\n2. **Dimension table** — surrogate key, business key, descriptive attributes, hierarchy levels, flags.\n3. **Semantic layer** — measures ke aggregation rules (`SUM`, `LAST_NON_EMPTY`, `AVG`, `DISTINCT_COUNT`) aur calculated measures (`margin % = margin / net * 100`).\n4. **Metadata** — measure definitions, formats, ownership.\n5. **Aggregates** — pre-computed summary tables/cubes for speed.\n\n**Design rules:**\n1. Grain declare karo aur uske hisaab se measures rakho.\n2. Sirf additive measures store karo; ratio derive karo.\n3. Description dimension mein, number fact mein.\n4. Semi-additive measures ko snapshot fact mein rakho.\n5. Consistent naming aur units (INR, qty) document karo.\n6. Null ka matlab define karo (0 vs unknown).\n7. Currency/unit conversion ko dimension ya transform ke through handle karo.\n8. Har measure ka owner aur definition metadata mein.\n\n**Diagram:** Refer to the Measures and dimensions diagram."
      }
    ]
  },
  {
    "id": "star-schema",
    "number": "3.4",
    "title": "Star Schema",
    "subtitle": "Ek fact, chaaron taraf dimensions",
    "icon": "star",
    "accent": "#ffd600",
    "englishDefinition": "A star schema is the simplest and most widely used dimensional model: one central fact table whose composite key is made of foreign keys, surrounded by a small number of denormalized dimension tables - the shape resembles a star. Each dimension is a single table that already contains every descriptive attribute and hierarchy level an analyst needs, so product category, sub-category and brand all sit as columns in dim_product rather than in separate normalized tables. The fact table stores the measures and the dimension keys at a declared grain, which keeps it narrow, additive and fast to scan. Because a question of the form \"measure by attribute by attribute\" needs only one join per dimension and no multi-level joins, star schemas give simple SQL, predictable performance, easy indexing with bitmap or columnstore structures, and intuitive models that business users can read. The cost is controlled redundancy - category names repeat across product rows - which is acceptable in a warehouse because storage is cheap and dimensions are small. Variants include a star with a junk dimension for many small flags, a star with outrigger tables for a few very large attributes, and a fact constellation when several facts share conformed dimensions. The star schema is the default choice unless a specific reason - very large dimensions, strict attribute governance - argues for snowflaking.",
    "intro": "**Star schema** = ek central **fact table** + uske chaaron taraf **denormalized dimension tables**. Har dimension ek hi table mein saare attributes aur hierarchy levels rakhti hai (`category`, `sub_category`, `brand` sab `dim_product` mein). Isliye query simple: har dimension par **ek join**, koi multi-level join nahi. Trade-off: thoda redundancy (category naam repeat) — par dimensions chhoti hoti hain, isliye sasta sauda.",
    "sections": [
      {
        "type": "definition",
        "title": "Star schema kya hai",
        "kicker": "Definition",
        "body": "**Star schema** mein **ek fact table** hota hai jiski key dimension foreign keys se banti hai, aur chaaron taraf **denormalized dimension tables** — diagram dekhne mein star jaisa.",
        "body2": "Har dimension **flat** hoti hai: `dim_product(product_key, sku, name, category, sub_category, brand, size)`. Isliye \"category-wise sales\" ke liye sirf `fact_sales` + `dim_product` join chahiye.",
        "chips": [
          "fact",
          "dimension",
          "denormalized",
          "one join per dimension",
          "grain"
        ]
      },
      {
        "type": "cards",
        "title": "Star schema ke components",
        "kicker": "Anatomy",
        "cards": [
          {
            "icon": "table",
            "title": "Fact table",
            "body": "Composite key (dimension FKs) + additive measures; ek grain par."
          },
          {
            "icon": "layers",
            "title": "Dimension tables",
            "body": "Flat, denormalized: hierarchy levels columns mein."
          },
          {
            "icon": "grid",
            "title": "Surrogate keys",
            "body": "Join ke liye integer keys; source key business key ke roop mein."
          },
          {
            "icon": "chart",
            "title": "Measures",
            "body": "Additive: qty, gross, discount, net, cost."
          },
          {
            "icon": "tag",
            "title": "Attributes",
            "body": "Filter/group/label ke liye: name, category, city, month."
          },
          {
            "icon": "clock",
            "title": "Date dimension",
            "body": "Special: har fact ke saath; fiscal year, week, festive flags."
          }
        ]
      },
      {
        "type": "example",
        "title": "Retail star schema — tables aur ek query",
        "kicker": "Example",
        "body": "**fact_sales**(`date_key, product_ker, store_key, customer_key, qty, gross_amt, discount, net_amt, cost`). **dim_date**(`date_key, date, day, month, quarter, year, is_festive`). **dim_product**(`product_key, sku, name, category, sub_category, brand`). **dim_store**(`store_key, store, city, state, region`). **dim_customer**(`customer_key, name, segment, city`). Query: `SELECT p.category, d.quarter, SUM(f.net_amt) FROM fact_sales f JOIN dim_product p ... JOIN dim_date d ... WHERE d.year = 2024 GROUP BY p.category, d.quarter` — do joins, ek aggregate."
      },
      {
        "type": "comparison",
        "title": "Star schema ke fayde vs nuksan",
        "kicker": "Comparison",
        "columns": [
          "Fayde",
          "Nuksan / limit"
        ],
        "rows": [
          {
            "label": "Simplicity",
            "values": [
              "1 join per dimension, easy SQL",
              "dimension mein redundancy"
            ]
          },
          {
            "label": "Performance",
            "values": [
              "fewer joins, bitmap/columnstore",
              "badi dimension scan"
            ]
          },
          {
            "label": "Usability",
            "values": [
              "business users samajh jaate hain",
              "attribute governance kam formal"
            ]
          },
          {
            "label": "Maintenance",
            "values": [
              "dimension ek jagah update",
              "category change -> many rows update"
            ]
          },
          {
            "label": "BI compatibility",
            "values": [
              "har BI tool support karta hai",
              "complex hierarchies handle manually"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#ff8800"
        ]
      },
      {
        "type": "points",
        "title": "Design steps",
        "kicker": "How To Build",
        "points": [
          "**Grain fix karo:** ek row = ek invoice line ya ek product-store-day.",
          "**Dimensions identify karo:** date, product, store, customer, promotion.",
          "**Dimension flatten karo:** hierarchy levels columns mein.",
          "**Surrogate keys** generate karo (ETL).",
          "**Fact measures** chuno — additive pehle, derived baad mein.",
          "**Partition/index:** date par partition, common keys par index.",
          "**Document** grain + attributes metadata mein."
        ]
      },
      {
        "type": "diagram",
        "title": "Star schema",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-star",
        "caption": "Central fact_sales table with five dimension tables around it, showing keys and measures, plus the query pattern of one join per dimension"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Star = 1 fact + flat dimensions.**",
          "**Flat dimensions:** hierarchy levels columns mein.",
          "**Query:** one join per dimension.",
          "**Fayde:** simple, fast, BI-friendly.",
          "**Limit:** redundancy aur large dimension scan.",
          "**Exam line:** star schema default choice hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the star schema with a diagram and its advantages.",
        "answer": "**Definition:** Star schema dimensional model ka simplest form hai — ek central **fact table** aur uske chaaron taraf **denormalized dimension tables** (shape star jaisi).\n\n**Components:**\n1. **Fact table** — composite key (dimension foreign keys) + measures; declared grain par.\n2. **Dimension tables** — flat, denormalized, hierarchy levels columns mein.\n3. **Surrogate keys** — joins ke liye integer keys.\n\n**Example:**\n- `fact_sales(date_key, product_key, store_key, customer_key, qty, gross_amt, discount, net_amt, cost)`\n- `dim_product(product_key, sku, name, category, sub_category, brand)`\n- `dim_date(date_key, date, month, quarter, year, is_festive)`\n- `dim_store(store_key, store, city, state, region)`\n\n**Query:** category-wise quarterly sales ke liye sirf 2 joins + 1 aggregate.\n\n**Advantages:**\n1. Simple SQL — ek join per dimension.\n2. Fast — fewer joins, bitmap/columnstore friendly.\n3. Business users samajh jaate hain.\n4. BI tools ka universal support.\n5. Dimension changes ek jagah.\n6. Aggregates aur cubes easily ban jaate hain.\n\n**Disadvantage:** redundancy (category name repeat) aur bahut badi dimension par scan cost.\n\n**Diagram:** Refer to the Star schema diagram."
      },
      {
        "question": "How is a star schema designed? Explain grain, dimensions, keys and measures.",
        "answer": "**Step 1 — Business process chuno**\n- Sales, inventory, payments, claims.\n\n**Step 2 — Grain declare karo**\n- \"Ek row = ek invoice line\" — sabse important decision.\n\n**Step 3 — Dimensions identify karo**\n- Date, product, store, customer, promotion, employee.\n\n**Step 4 — Dimensions denormalize karo**\n- Hierarchy levels columns mein: `category`, `sub_category`, `brand` ek hi table mein.\n\n**Step 5 — Surrogate keys**\n- `product_key` integer; source `sku` business key ke roop mein dimension mein.\n\n**Step 6 — Measures**\n- Additive: qty, gross, discount, cost, net.\n- Derived: margin = net - cost (query par).\n\n**Step 7 — Physical design**\n- Date par partition, dimension keys par index/bitmap, columnstore.\n\n**Step 8 — Validation**\n- Har dimension ke saath fact join test; row count reconcile; sample queries.\n\n**Result:** simple, fast, maintainable star schema.\n\n**Diagram:** Refer to the Star schema diagram."
      },
      {
        "question": "Compare star schema with a fully normalized (3NF) model for analytics.",
        "answer": "| Point | Star schema | Normalized 3NF |\n|---|---|---|\n| Tables | few (1 fact + dims) | many (entities + relations) |\n| Joins per query | 1 per dimension | 5-12 typical |\n| Redundancy | controlled (dimension mein) | minimal |\n| Query simplicity | high | low |\n| Performance | fast (fewer joins) | slower for aggregates |\n| Storage | zyada (redundancy) | kam |\n| Update anomaly risk | dimension mein possible | very low |\n| Business readability | high | low |\n| BI tool fit | excellent | needs semantic layer |\n| Best for | analytical reporting | transactional systems |\n\n**Explanation:** 3NF update efficiency ke liye bana hai — analytics ke liye usmein join-heavy queries aur complex SQL likhna padta hai. Star schema analysis ke liye bana hai: denormalized dimensions, few joins, fast aggregates.\n\n**Caveat:** star schema mein attribute change (category rename) ke liye many rows update karne padte hain — isliye governed SCD process chahiye.\n\n**Diagram:** Refer to the Star schema diagram."
      }
    ]
  },
  {
    "id": "snowflake-schema",
    "number": "3.5",
    "title": "Snowflake Schema",
    "subtitle": "Dimensions ko normalize karna — branches wali star",
    "icon": "network",
    "accent": "#00bcd4",
    "englishDefinition": "A snowflake schema is a star schema whose dimension tables have been normalized into hierarchies of related tables: dim_product becomes dim_product, dim_sub_category and dim_category linked by foreign keys, and dim_store becomes dim_store, dim_city, dim_state and dim_region. The fact table is unchanged - it still holds dimension keys and measures - so the star's centre stays the same while its arms branch out, which gives the name snowflake. Normalising dimensions removes redundancy: a category name is stored once, not once per product row, which saves storage for very large dimensions, keeps attribute changes in one place, and supports dimensions with deep or formally managed hierarchies. The price is query complexity and performance: answering \"sales by category\" now needs three joins instead of one, BI tools must traverse multiple levels, and poorly designed snowflakes can multiply joins across the whole model. In practice snowflaking is applied selectively - usually to big, slowly changing or shared dimensions such as product, geography or chart of accounts - while small dimensions stay flat. Many modern cloud platforms also implement star schemas on columnar storage and rely on the optimiser, so the trade-off is decided by data volume, hierarchy depth, governance needs and query patterns rather than by storage cost alone.",
    "intro": "**Snowflake schema** = star schema jismein **dimensions normalized** hain. `dim_product` ki jagah `dim_product` + `dim_sub_category` + `dim_category`; `dim_store` + `dim_city` + `dim_state` + `dim_region`. Fact table wahi rehta hai — bas arms branch kar jaate hain (isliye snowflake). Fayda: **kam redundancy**, attribute change ek jagah, deep hierarchies. Nuksan: **zyada joins**, slow, complex queries.",
    "sections": [
      {
        "type": "definition",
        "title": "Snowflake schema kya hai",
        "kicker": "Definition",
        "body": "**Snowflake schema** mein dimensions **normalized** hoti hain — ek dimension ke attributes multiple related tables mein split ho jaate hain.",
        "body2": "Example: `dim_product(product_key, sku, name, sub_category_key)` -> `dim_sub_category(sub_category_key, sub_category, category_key)` -> `dim_category(category_key, category, department)`. Category naam ab sirf ek jagah rehta hai.",
        "chips": [
          "normalized dimension",
          "hierarchy tables",
          "fewer redundancy",
          "more joins"
        ]
      },
      {
        "type": "cards",
        "title": "Snowflake ke characteristics",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "network",
            "title": "Branched dimensions",
            "body": "Dimension tables ek doosre se FK se judi — hierarchy tables."
          },
          {
            "icon": "layers",
            "title": "Normalization",
            "body": "2NF/3NF style: repeat attributes hata kar alag table."
          },
          {
            "icon": "table",
            "title": "Same fact table",
            "body": "Fact table star jaisa hi — sirf dimension keys badalte hain."
          },
          {
            "icon": "check",
            "title": "Storage saving",
            "body": "Badi dimensions par duplicate text hata kar space bachta hai."
          },
          {
            "icon": "refresh",
            "title": "Single place update",
            "body": "Category rename ek row mein — many rows nahi."
          },
          {
            "icon": "warn",
            "title": "More joins",
            "body": "Category-wise report ke liye 3 joins chahiye."
          }
        ]
      },
      {
        "type": "example",
        "title": "Snowflake transformation — step by step",
        "kicker": "Example",
        "body": "**Star version:** `dim_product(product_key, sku, name, category, sub_category, brand)`. **Snowflake version:** `dim_product(product_key, sku, name, brand, sub_category_key)` -> `dim_sub_category(sub_category_key, sub_category_name, category_key)` -> `dim_category(category_key, category_name, department)`. Ab \"Footwear -> Running -> Nike\" ka raasta teen tables se banta hai. Category rename karne par sirf `dim_category` ki ek row badalti hai — star mein hazaaron product rows."
      },
      {
        "type": "comparison",
        "title": "Kab snowflake chuno",
        "kicker": "Comparison",
        "columns": [
          "Situation",
          "Better choice"
        ],
        "rows": [
          {
            "label": "Bahut badi dimension",
            "values": [
              "lakhon rows, repeat text",
              "snowflake (storage bachta hai)"
            ]
          },
          {
            "label": "Deep hierarchy",
            "values": [
              "5+ levels, formally managed",
              "snowflake"
            ]
          },
          {
            "label": "Simple reporting, speed",
            "values": [
              "dashboards, ad-hoc",
              "star"
            ]
          },
          {
            "label": "Shared/master dimension",
            "values": [
              "enterprise conformed dims",
              "snowflake with governance"
            ]
          },
          {
            "label": "BI tool simplicity",
            "values": [
              "self-service users",
              "star"
            ]
          }
        ],
        "columnColors": [
          "#00bcd4",
          "#ffd600"
        ]
      },
      {
        "type": "points",
        "title": "Snowflake ke fayde aur nuksan",
        "kicker": "Trade-off",
        "points": [
          "**Fayde:** kam redundancy, storage saving, attribute change ek jagah, formal hierarchies, referential integrity strong.",
          "**Nuksan:** zyada joins (slow), complex SQL, BI tools ko extra configuration, grain samajhna mushkil, badly designed snowflake mein join explosion.",
          "**Practical:** selective snowflaking — sirf badi/shared dimensions ko normalize karo, baaki flat rakho."
        ]
      },
      {
        "type": "diagram",
        "title": "Snowflake schema",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-snowflake",
        "caption": "Fact table surrounded by dimension tables that branch into normalized hierarchy tables for product, category, city, state and region, with the extra join path highlighted"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Snowflake = star + normalized dimensions.**",
          "**Dimensions branch** karti hain hierarchy tables mein.",
          "**Fayda:** kam redundancy, ek jagah update, deep hierarchy.",
          "**Nuksan:** zyada joins, slow, complex.",
          "**Selective snowflaking** best practice hai.",
          "**Exam line:** storage bachao, joins ki keemat chukao."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the snowflake schema with an example and its advantages and disadvantages.",
        "answer": "**Definition:** Snowflake schema star schema ka normalized version hai, jismein dimension tables ko hierarchy tables mein split kiya jaata hai; fact table same rehta hai.\n\n**Example:**\n- `fact_sales(date_key, product_key, store_key, qty, net_amt)`\n- `dim_product(product_key, sku, name, sub_category_key)`\n- `dim_sub_category(sub_category_key, sub_category, category_key)`\n- `dim_category(category_key, category, department)`\n- `dim_store(store_key, store, city_key)` -> `dim_city(city_key, city, state_key)` -> `dim_state(state_key, state, region)`\n\n**Advantages:**\n1. Redundancy kam — category naam ek jagah.\n2. Storage saving (badi dimensions par).\n3. Attribute change ek row mein.\n4. Deep/formally managed hierarchies support.\n5. Referential integrity strong.\n\n**Disadvantages:**\n1. Zyada joins — query slow.\n2. SQL complex, BI tool configuration zyada.\n3. Model samajhna mushkil.\n4. Join explosion ka risk agar over-normalize karein.\n\n**Use kab:** badi dimensions, deep hierarchies, shared/master data; warna star better.\n\n**Diagram:** Refer to the Snowflake schema diagram."
      },
      {
        "question": "How is a star schema converted into a snowflake schema?",
        "answer": "**Process:**\n\n**1. Dimension identify karo jise normalize karna hai**\n- Badi dimension jisme repeated hierarchical text ho (product, geography, chart of accounts).\n\n**2. Hierarchy levels alag karo**\n- `category` -> `dim_category`, `sub_category` -> `dim_sub_category`, `product` -> `dim_product`.\n\n**3. Surrogate keys generate karo**\n- Har naye table ke liye apna key; parent table mein FK.\n\n**4. ETL mapping update karo**\n- Source attributes -> naye tables; lookups se keys.\n\n**5. Fact table chhedo mat**\n- Fact sirf leaf-level dimension key (`product_key`) rakhta hai — baaki joins se aata hai.\n\n**6. Query rewrite**\n- \"Category-wise sales\": `fact -> dim_product -> dim_sub_category -> dim_category` (3 joins).\n\n**7. Validate**\n- Row counts, referential integrity, aur totals star version se match karo.\n\n**Example:** `dim_product(product_key, sku, name, brand, sub_category_key)` + `dim_sub_category(sub_category_key, sub_category, category_key)` + `dim_category(category_key, category, department)`.\n\n**Tip:** sirf selective snowflaking karo — chhoti dimensions flat rakho.\n\n**Diagram:** Refer to the Snowflake schema diagram."
      },
      {
        "question": "When should a snowflake schema be preferred over a star schema?",
        "answer": "**Snowflake prefer karo jab:**\n\n1. **Dimension bahut badi ho** — lakhon rows, repeated text, storage meaningful ho jaata hai.\n2. **Deep hierarchy** — 5+ levels ya formally managed (chart of accounts, product taxonomy).\n3. **Attributes frequently change** — rename/restructure ek row mein ho jaaye.\n4. **Shared/master dimensions** — enterprise-wide conformed dimensions with governance.\n5. **Referential integrity strict** chahiye — normalized tables constraints enforce karte hain.\n6. **Update-heavy dimension** — redundancy ki wajah se anomaly risk kam.\n\n**Star prefer karo jab:**\n\n1. Query speed aur simplicity priority ho.\n2. Self-service BI users hain.\n3. Dimensions chhoti hain (thousands of rows).\n4. Ad-hoc analysis zyada hoti hai.\n5. Cloud columnar platform join cost handle kar leta hai — phir bhi star simple rehta hai.\n\n**Practical answer:** hybrid — fact ke paas flat star, par 1-2 badi dimensions snowflaked; ya star + semantic layer jo hierarchy chhupa de.\n\n**Diagram:** Refer to the Snowflake schema diagram."
      }
    ]
  },
  {
    "id": "star-vs-snowflake",
    "number": "3.6",
    "title": "Star vs Snowflake Schema",
    "subtitle": "Kab kaunsa — trade-off ka faisla",
    "icon": "layers",
    "accent": "#aa00ff",
    "englishDefinition": "A star schema and a snowflake schema differ mainly in how dimensions are treated, not in what they can answer. In a star, each dimension is one denormalized table, so a query touches the fact table and one table per dimension; in a snowflake, dimensions are normalized into parent-child tables, so the same query adds joins along the hierarchy. Star favours query simplicity, fewer joins, predictable performance and easier self-service; snowflake favours storage efficiency, single-point attribute updates, formally enforced hierarchies and better handling of very large or shared dimensions. Practically the decision rests on dimension size, hierarchy depth, how often hierarchy attributes change, the BI tool and user population, and the warehouse engine - columnar cloud warehouses with strong optimisers often make the star viable even for large dimensions, whereas highly governed enterprise dimensions still benefit from normalisation. The two also combine: a star whose fact table is shared by several stars with conformed dimensions becomes a galaxy (fact constellation), and a star with a few selectively snowflaked dimensions is the common middle ground. The exam answer should present the contrast table, the criteria for choosing, and a recommendation with justification.",
    "intro": "**Same model, alag physical design.** Star = flat dimensions (1 join per dimension). Snowflake = normalized dimensions (hierarchy joins). Star jeetta hai **speed + simplicity** mein, snowflake **storage + governance** mein. Faisla: dimension ka size, hierarchy depth, change frequency, BI tool, user type aur engine. Practical best: **selective snowflaking** ya **galaxy** (multiple facts, conformed dimensions).",
    "sections": [
      {
        "type": "definition",
        "title": "Comparison ka core",
        "kicker": "Definition",
        "body": "Dono models ka **logical answer same** hota hai — farq **kitne joins** aur **kitni redundancy** mein hai.",
        "body2": "Star: `fact -> dim_product(category column)`. Snowflake: `fact -> dim_product -> dim_sub_category -> dim_category`. Result same, raasta alag — aur raasta hi performance decide karta hai.",
        "chips": [
          "joins",
          "redundancy",
          "normalization",
          "galaxy",
          "selective snowflaking"
        ]
      },
      {
        "type": "comparison",
        "title": "Star vs Snowflake",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Star schema",
          "Snowflake schema"
        ],
        "rows": [
          {
            "label": "Dimensions",
            "values": [
              "flat, denormalized",
              "normalized hierarchy tables"
            ]
          },
          {
            "label": "Joins per query",
            "values": [
              "1 per dimension",
              "multiple (hierarchy)"
            ]
          },
          {
            "label": "Redundancy",
            "values": [
              "controlled repeat",
              "minimal"
            ]
          },
          {
            "label": "Storage",
            "values": [
              "zyada",
              "kam"
            ]
          },
          {
            "label": "Query speed",
            "values": [
              "fast",
              "slower (more joins)"
            ]
          },
          {
            "label": "SQL simplicity",
            "values": [
              "high",
              "medium-low"
            ]
          },
          {
            "label": "BI tool fit",
            "values": [
              "excellent",
              "needs hierarchy config"
            ]
          },
          {
            "label": "Attribute change",
            "values": [
              "many rows update",
              "one row update"
            ]
          },
          {
            "label": "Model complexity",
            "values": [
              "simple",
              "complex"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "dashboards, ad-hoc, self-service",
              "large/shared dims, deep hierarchies"
            ]
          }
        ],
        "columnColors": [
          "#ffd600",
          "#00bcd4"
        ]
      },
      {
        "type": "cards",
        "title": "Decision criteria",
        "kicker": "Choose With",
        "cards": [
          {
            "icon": "ruler",
            "title": "Dimension size",
            "body": "Chhoti dimension -> star. Lakhon rows -> snowflake."
          },
          {
            "icon": "layers",
            "title": "Hierarchy depth",
            "body": "2-3 levels -> star. 5+ ya formal taxonomy -> snowflake."
          },
          {
            "icon": "refresh",
            "title": "Change frequency",
            "body": "Hierarchy attributes often badalte hain -> snowflake (ek jagah update)."
          },
          {
            "icon": "users",
            "title": "User population",
            "body": "Self-service users -> star (simple)."
          },
          {
            "icon": "speed",
            "title": "Engine",
            "body": "Columnar + optimiser -> star feasible bade data par bhi."
          },
          {
            "icon": "shield",
            "title": "Governance",
            "body": "Enterprise master dimensions -> snowflake/star with governance layer."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Hybrid patterns",
        "kicker": "Real World",
        "cards": [
          {
            "icon": "star",
            "title": "Selective snowflaking",
            "body": "Star + sirf 1-2 badi dimension normalized (product/geography)."
          },
          {
            "icon": "layers",
            "title": "Galaxy / fact constellation",
            "body": "Multiple fact tables, shared conformed dimensions."
          },
          {
            "icon": "cube",
            "title": "Semantic layer",
            "body": "Physical star, par hierarchy logical layer mein — user ko flat dikhta hai."
          },
          {
            "icon": "chart",
            "title": "Aggregates",
            "body": "Star + materialized aggregate tables/cubes speed ke liye."
          }
        ]
      },
      {
        "type": "example",
        "title": "Same report, dono models mein",
        "kicker": "Example",
        "body": "**Report:** 2024 mein category-wise net sales (Pune). **Star:** `fact_sales JOIN dim_product USING(product_key) JOIN dim_store USING(store_key) JOIN dim_date USING(date_key)` — 3 joins. **Snowflake:** wahi query + `JOIN dim_sub_category` + `JOIN dim_category` — 5 joins. **Result:** same numbers, par snowflake mein 40% zyada time (typical), aur agar category rename hui to star mein 12,000 product rows update, snowflake mein 1 row."
      },
      {
        "type": "points",
        "title": "Exam answer ka structure",
        "kicker": "How To Write",
        "points": [
          "**Define dono** ek-ek line mein.",
          "**Contrast table** — joins, redundancy, storage, speed, complexity.",
          "**Criteria** — size, hierarchy, change frequency, users, engine.",
          "**Trade-off** — speed vs storage/governance.",
          "**Recommendation** — mostly star, selective snowflaking, galaxy for multiple facts."
        ]
      },
      {
        "type": "diagram",
        "title": "Star vs snowflake schema",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-star-vs-snow",
        "caption": "Side-by-side comparison: a flat star with one join per dimension against a snowflake with hierarchy joins, plus the decision criteria and hybrid patterns"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Same answer, different path.**",
          "**Star:** flat dims, fewer joins, fast, simple.",
          "**Snowflake:** normalized dims, storage saving, more joins.",
          "**Decide:** size, hierarchy depth, change rate, users, engine.",
          "**Hybrid:** selective snowflaking, galaxy, semantic layer.",
          "**Exam line:** star default, snowflake exception."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Compare star schema and snowflake schema with a table.",
        "answer": "| Point | Star schema | Snowflake schema |\n|---|---|---|\n| Dimensions | flat, denormalized | normalized into hierarchy tables |\n| Joins per query | 1 per dimension | multiple (one per level) |\n| Redundancy | controlled repetition | minimal |\n| Storage | higher | lower |\n| Query speed | fast | slower |\n| SQL simplicity | high | medium to low |\n| BI tool support | excellent | needs hierarchy configuration |\n| Attribute change | many rows update | one row update |\n| Model complexity | simple | complex |\n| Best for | dashboards, ad-hoc, self-service | large/shared dimensions, deep hierarchies |\n\n**Explanation:** star performance aur simplicity deta hai; snowflake storage aur governance deta hai. Logical result same hota hai — bas join path lamba ho jaata hai.\n\n**Recommendation:** default star; badi ya governed dimensions ke liye selective snowflaking.\n\n**Diagram:** Refer to the Star vs snowflake schema diagram."
      },
      {
        "question": "How do you decide between star and snowflake schema for a warehouse? Explain the criteria.",
        "answer": "**Criteria:**\n\n**1. Dimension size**\n- Thousands of rows -> star (redundancy sasti).\n- Lakhs of rows with repeated text -> snowflake (storage meaningful).\n\n**2. Hierarchy depth**\n- 2-3 levels -> star mein columns.\n- 5+ levels ya formal taxonomy -> snowflake.\n\n**3. Change frequency**\n- Hierarchy attributes often badalte hain -> snowflake (ek row update).\n- Stable attributes -> star.\n\n**4. User population and tooling**\n- Self-service BI -> star.\n- Governed reporting with semantic layer -> either.\n\n**5. Query pattern**\n- Ad-hoc, many dimensions -> star (fewer joins).\n- Fixed reports on deep hierarchy -> snowflake acceptable.\n\n**6. Engine**\n- Columnar cloud warehouse strong optimiser -> star feasible for large dims.\n- Row-store/on-prem -> snowflake joins mehnge.\n\n**7. Governance need**\n- Master/conformed dimensions -> normalized + governance.\n\n**Decision rule:** star by default; snowflake where a specific dimension needs it; galaxy when multiple facts share dimensions.\n\n**Diagram:** Refer to the Star vs snowflake schema diagram."
      },
      {
        "question": "Explain fact constellation (galaxy schema) and hybrid dimensional designs.",
        "answer": "**Fact constellation (galaxy):** multiple fact tables jo **conformed dimensions** share karte hain.\n\n**Example:** `fact_sales`, `fact_inventory`, `fact_returns` — teeno `dim_product`, `dim_date`, `dim_store` use karte hain. Isse cross-process analysis hoti hai: \"sales vs returns vs stock\" ek hi product/date/store par.\n\n**Conformed dimension:** same keys, same attributes, same definitions — iske bina facts compare nahi ho sakte.\n\n**Hybrid designs:**\n1. **Selective snowflaking** — star + 1-2 badi dimensions normalized.\n2. **Star with junk dimension** — many flags ek table mein.\n3. **Star + outrigger** — ek dimension ke kuch attributes alag table mein.\n4. **Semantic layer** — physical star, logical hierarchy user ke liye.\n5. **Aggregate tables/cubes** — summary star for speed.\n\n**Fayde:** flexibility, reuse, cross-process analysis.\n**Dhyan:** conformed dimensions ka discipline zaroori; warna \"drift\" ho jaati hai (same naam, alag meaning).\n\n**Diagram:** Refer to the Star vs snowflake schema diagram."
      }
    ]
  },
  {
    "id": "olap-intro",
    "number": "3.7",
    "title": "Introduction to OLAP and its Architecture",
    "subtitle": "Online Analytical Processing — sochne ka engine",
    "icon": "cube",
    "accent": "#ff5252",
    "englishDefinition": "Online Analytical Processing (OLAP) is the technology that lets users explore multidimensional data interactively: they aggregate, compare and drill into numbers sliced by product, time, geography and any other dimension, and expect answers in seconds. The term was formalised by E. F. Codd in 1993, and OLAP systems are usually judged by the FASMI test - Fast, Analysis, Shared, Multidimensional, Information. Functionally an OLAP system has three layers. The data layer holds the warehouse or mart, loaded by ETL and organised as facts and dimensions. The OLAP server layer holds the multidimensional model, implements aggregation, caching, calculation and security, and exposes a semantic schema to clients; it may be relational (ROLAP), cube-based (MOLAP) or hybrid (HOLAP). The client layer provides the interface - pivot tables, dashboards, ad-hoc query tools, Excel, mobile apps and increasingly natural-language assistants. Around these layers sit the metadata repository, the security model and the scheduling and caching components. OLAP is not a database product but an access and calculation paradigm: the same star schema can be queried by SQL, served by an OLAP engine, or materialised as pre-computed cubes, and the business benefit - fast, flexible, consistent analysis - depends more on good dimensional design than on the specific engine.",
    "intro": "**OLAP** = multidimensional data par interactive analysis — seconds mein aggregate, compare aur drill. Codd (1993) + **FASMI** test: **F**ast, **A**nalysis, **S**hared, **M**ultidimensional, **I**nformation. Teen layers: **data layer** (warehouse/mart), **OLAP server** (model, aggregation, cache, security, semantic schema), **client layer** (pivot, dashboard, Excel, NL). Saath mein metadata, security aur scheduling.",
    "sections": [
      {
        "type": "definition",
        "title": "OLAP kya hai",
        "kicker": "Definition",
        "body": "**OLAP (Online Analytical Processing)** wo technology hai jisse user multidimensional data par **interactively** kaam karta hai — aggregate karna, compare karna, drill karna — aur jawab **seconds** mein milta hai.",
        "body2": "Contrast: OLTP poochta hai \"is order ka status kya hai?\"; OLAP poochta hai \"pichhle 5 quarter mein region-wise margin ka trend kya hai?\".",
        "chips": [
          "FASMI",
          "OLAP server",
          "semantic layer",
          "aggregation",
          "caching"
        ]
      },
      {
        "type": "cards",
        "title": "FASMI test — Codd ke paanch criteria",
        "kicker": "FASMI",
        "cards": [
          {
            "icon": "speed",
            "title": "Fast",
            "body": "Typical query seconds mein, complex query minutes mein."
          },
          {
            "icon": "chart",
            "title": "Analysis",
            "body": "Business logic aur statistics support kare — time series, share, growth."
          },
          {
            "icon": "users",
            "title": "Shared",
            "body": "Multi-user, concurrent, secure access."
          },
          {
            "icon": "cube",
            "title": "Multidimensional",
            "body": "Dimensions aur hierarchies ka conceptual model."
          },
          {
            "icon": "database",
            "title": "Information",
            "body": "Sab data ek jagah, size ki limit nahi — detail tak access."
          }
        ]
      },
      {
        "type": "cards",
        "title": "OLAP architecture ke layers",
        "kicker": "Architecture",
        "cards": [
          {
            "icon": "database",
            "title": "Data layer",
            "body": "Warehouse/mart: fact + dimension tables, ETL se loaded."
          },
          {
            "icon": "server",
            "title": "OLAP server",
            "body": "Multidimensional model, aggregation engine, cache, calculations, security."
          },
          {
            "icon": "monitor",
            "title": "Client layer",
            "body": "Pivot tables, dashboards, Excel, ad-hoc tools, mobile, NL assistants."
          },
          {
            "icon": "tag",
            "title": "Metadata",
            "body": "Cube schema, dimensions, hierarchies, measures, security rules."
          },
          {
            "icon": "shield",
            "title": "Security model",
            "body": "Row/column level, role-based, per-cube access."
          },
          {
            "icon": "clock",
            "title": "Scheduler & cache",
            "body": "Cube refresh, aggregate builds, query result caching."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "OLAP server ke flavours (preview)",
        "kicker": "Comparison",
        "columns": [
          "Type",
          "Kahan data rehta hai"
        ],
        "rows": [
          {
            "label": "ROLAP",
            "values": [
              "relational star schema",
              "SQL par OLAP operations"
            ]
          },
          {
            "label": "MOLAP",
            "values": [
              "proprietary cube",
              "pre-computed aggregates"
            ]
          },
          {
            "label": "HOLAP",
            "values": [
              "cube + relational detail",
              "hybrid"
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
        "type": "example",
        "title": "Ek OLAP session — minute by minute",
        "kicker": "Example",
        "body": "Manager dashboard kholta hai: **Region = West**, **Year = 2024**, **Measure = Net Sales**. Dekhta hai Pune ka number gir raha hai -> **drill-down** karta hai city -> store -> category. **Slice** lagata hai sirf Footwear par. **Dice** karta hai Jan-Mar aur Online channel. **Pivot** karke category ko rows aur month ko columns banata hai. Phir **roll-up** karke national view leta hai. Har click seconds mein — ye OLAP hai: koi SQL likhna nahi, koi developer nahi."
      },
      {
        "type": "points",
        "title": "OLAP ki zaroorat kyun hai",
        "kicker": "Why OLAP",
        "points": [
          "**Interactive speed:** pre-aggregation aur cache se sub-second response.",
          "**Business vocabulary:** dimensions aur measures, SQL nahi.",
          "**Consistency:** ek semantic model — sab ek hi number dekhte hain.",
          "**Self-service:** analyst khud explore karta hai.",
          "**Depth:** summary se detail tak ek hi model mein.",
          "**Scalability:** aggregate tables se bade data par bhi fast."
        ]
      },
      {
        "type": "diagram",
        "title": "OLAP introduction aur architecture",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-olap-arch",
        "caption": "Three layers - data warehouse, OLAP server with aggregation and cache, and client tools - plus FASMI criteria and the metadata, security and scheduling components"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**OLAP** = multidimensional interactive analysis.",
          "**FASMI:** Fast, Analysis, Shared, Multidimensional, Information.",
          "**Layers:** data, OLAP server, client.",
          "**Server ka kaam:** aggregation, cache, calculations, security.",
          "**Client:** pivot, dashboard, Excel, NL.",
          "**Exam line:** OLAP ek access paradigm hai, sirf product nahi."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define OLAP. Explain its architecture with a diagram.",
        "answer": "**Definition:** OLAP (Online Analytical Processing) multidimensional data par interactive analysis ki technology hai — aggregate, compare, drill — seconds mein jawab.\n\n**FASMI criteria (Codd):** Fast, Analysis, Shared, Multidimensional, Information.\n\n**Architecture (three layers):**\n\n**1. Data layer**\n- Warehouse/mart: fact + dimension tables.\n- ETL se loaded, star/snowflake schema.\n- Aggregate tables detail ke saath.\n\n**2. OLAP server layer**\n- Multidimensional model (cube) hold karta hai.\n- Aggregation engine, query cache, calculation rules.\n- Security (row/column level) aur semantic schema.\n- Implementation: ROLAP / MOLAP / HOLAP.\n\n**3. Client layer**\n- Pivot tables, dashboards, ad-hoc query tools.\n- Excel/Power BI/Tableau, mobile apps, NL assistants.\n\n**Supporting components:** metadata repository, scheduler (cube refresh), cache manager, security model, monitoring.\n\n**Data flow:** sources -> warehouse -> OLAP server -> client tools -> users -> insights.\n\n**Diagram:** Refer to the OLAP introduction aur architecture diagram."
      },
      {
        "question": "Explain the FASMI test and why OLAP is needed in business intelligence.",
        "answer": "**FASMI (Codd's criteria):**\n\n1. **Fast** — typical query seconds mein; complex query minutes mein; consistency ke liye pre-aggregation aur caching.\n2. **Analysis** — business logic aur statistics: growth, share, trend, contribution, what-if.\n3. **Shared** — multi-user concurrent access, security aur access control.\n4. **Multidimensional** — dimensions, hierarchies, measures ka conceptual model.\n5. **Information** — saara data ek jagah, bade volume par bhi, detail tak access.\n\n**OLAP kyun chahiye:**\n1. Analyticals question multidimensional hote hain — cube model unke hisaab se bana hai.\n2. Business users SQL nahi likh sakte — OLAP interface deta hai.\n3. Interactive exploration (drill/slice) se insight jaldi milta hai.\n4. Pre-aggregation se performance predictable hoti hai.\n5. Ek semantic layer se numbers consistent rehte hain.\n6. Self-service BI possible hota hai — IT bottleneck kam.\n\n**Diagram:** Refer to the OLAP introduction aur architecture diagram."
      },
      {
        "question": "Differentiate OLAP from ordinary SQL reporting on a warehouse.",
        "answer": "| Point | OLAP | Plain SQL reporting |\n|---|---|---|\n| Model | multidimensional cube (dims + measures) | tables and joins |\n| User | business analyst | developer/DBA |\n| Interaction | drill, slice, pivot, roll-up | fixed query, re-write SQL |\n| Speed | pre-aggregated + cached, seconds | depends on query, often slow |\n| Navigation | hierarchies built in | manual GROUP BY |\n| Consistency | semantic layer definitions | query-by-query logic |\n| Flexibility | ad-hoc exploration | predefined reports |\n| Governance | measure rules centralised | scattered logic |\n\n**Explanation:** SQL reporting raw tables par chalta hai — har naye sawaal ke liye query likhni padti hai. OLAP semantic model par chalta hai: dimensions, measures aur hierarchies define hote hain, aur user unhe drag/drill karta hai.\n\n**Reality:** modern tools (Power BI, Tableau, Looker) warehouse ke SQL par semantic layer lagate hain — conceptually wahi OLAP hai.\n\n**Diagram:** Refer to the OLAP introduction aur architecture diagram."
      }
    ]
  },
  {
    "id": "olap-types",
    "number": "3.8",
    "title": "Types of OLAP Systems: ROLAP, MOLAP, HOLAP",
    "subtitle": "Query kahan chalti hai — relational, cube ya dono",
    "icon": "server",
    "accent": "#00e676",
    "englishDefinition": "OLAP systems are classified by where the multidimensional model and its aggregates physically live. ROLAP (relational OLAP) keeps all data in the relational warehouse and translates OLAP operations into SQL over a star or snowflake schema; it scales to very large detail, supports near real-time updates and needs no separate cube store, but aggregation queries can be slow unless materialized views or aggregates are built. MOLAP (multidimensional OLAP) pre-computes and stores data in proprietary multidimensional cubes with dense array structures and bitmap indexing; aggregation is extremely fast and calculations are rich, but the cube must be refreshed, storage grows with the number of dimensions and sparsity, and detail drill-through is limited. HOLAP (hybrid OLAP) keeps summarized data in MOLAP cubes and detailed records in the relational store, answering aggregate queries from the cube and detail questions from SQL. Related variants include DOLAP (desktop, local cube files), web/mobile OLAP and real-time OLAP. Modern cloud warehouses blur the categories: columnar engines with materialized views behave like ROLAP with MOLAP-like speed. The practical selection depends on data volume, required latency, update frequency, detail drill-through needs, concurrency and cost, and it is common to run a hybrid - aggregate cubes for dashboards and relational detail for investigation.",
    "intro": "**ROLAP:** sab kuch relational star/snowflake mein; OLAP operations SQL ban jaate hain. Bada detail, near real-time, cubes nahi. **MOLAP:** proprietary **cube** (dense arrays + bitmap index), pre-aggregated, sabse fast, par refresh chahiye aur storage zyada. **HOLAP:** summary cube mein + detail relational mein. Plus variants: **DOLAP** (desktop), web/mobile OLAP, real-time OLAP.",
    "sections": [
      {
        "type": "definition",
        "title": "Classification ka base",
        "kicker": "Definition",
        "body": "Sawaal simple hai: **multidimensional model aur aggregates physically kahan rehte hain?**",
        "body2": "Relational tables mein -> **ROLAP**. Proprietary cube mein -> **MOLAP**. Dono mein -> **HOLAP**. Isi ek sawaal se teeno ka performance, storage aur refresh behaviour decide hota hai.",
        "chips": [
          "ROLAP",
          "MOLAP",
          "HOLAP",
          "DOLAP",
          "cube refresh"
        ]
      },
      {
        "type": "cards",
        "title": "ROLAP — relational OLAP",
        "kicker": "ROLAP",
        "cards": [
          {
            "icon": "database",
            "title": "Data kahan",
            "body": "Relational warehouse: star/snowflake schema."
          },
          {
            "icon": "code",
            "title": "Operations",
            "body": "OLAP operations SQL mein translate hote hain (GROUP BY, ROLLUP, CUBE)."
          },
          {
            "icon": "expand",
            "title": "Fayde",
            "body": "Bada detail, near real-time, no separate cube, standard SQL tools."
          },
          {
            "icon": "warn",
            "title": "Nuksan",
            "body": "Aggregates slow ho sakte hain; materialized views/aggregate tables chahiye."
          }
        ]
      },
      {
        "type": "cards",
        "title": "MOLAP — multidimensional OLAP",
        "kicker": "MOLAP",
        "cards": [
          {
            "icon": "cube",
            "title": "Data kahan",
            "body": "Proprietary multidimensional cube (array + bitmap index)."
          },
          {
            "icon": "speed",
            "title": "Operations",
            "body": "Pre-computed aggregates se instant drill/roll-up."
          },
          {
            "icon": "expand",
            "title": "Fayde",
            "body": "Sabse fast aggregates, rich calculations, compact for dense data."
          },
          {
            "icon": "warn",
            "title": "Nuksan",
            "body": "Cube refresh, storage blow-up for sparse, detail drill limited."
          }
        ]
      },
      {
        "type": "cards",
        "title": "HOLAP — hybrid OLAP",
        "kicker": "HOLAP",
        "cards": [
          {
            "icon": "layers",
            "title": "Data kahan",
            "body": "Summary cube mein (MOLAP), detail relational mein (ROLAP)."
          },
          {
            "icon": "loop",
            "title": "Operations",
            "body": "Aggregate queries cube se, detail queries SQL se."
          },
          {
            "icon": "expand",
            "title": "Fayde",
            "body": "Speed + detail ka balance, storage controlled."
          },
          {
            "icon": "warn",
            "title": "Nuksan",
            "body": "Do systems manage karne padte hain; consistency sync chahiye."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "ROLAP vs MOLAP vs HOLAP",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "ROLAP",
          "MOLAP",
          "HOLAP"
        ],
        "rows": [
          {
            "label": "Storage",
            "values": [
              "relational tables",
              "proprietary cube",
              "cube + tables"
            ]
          },
          {
            "label": "Aggregate speed",
            "values": [
              "medium (SQL)",
              "fastest",
              "fast"
            ]
          },
          {
            "label": "Detail drill",
            "values": [
              "excellent",
              "limited",
              "good"
            ]
          },
          {
            "label": "Freshness",
            "values": [
              "near real-time",
              "refresh needed",
              "mixed"
            ]
          },
          {
            "label": "Storage size",
            "values": [
              "low",
              "high",
              "balanced"
            ]
          },
          {
            "label": "Complexity",
            "values": [
              "low",
              "medium",
              "high"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "large detail, ad-hoc",
              "fixed KPI dashboards",
              "hybrid estate"
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
        "title": "Related variants",
        "kicker": "Variants",
        "points": [
          "**DOLAP:** desktop OLAP — local cube file (.cub/.hyper), offline analysis.",
          "**WOLAP / web OLAP:** browser-based, thin client.",
          "**Real-time OLAP (RTOLAP):** streaming updates ke saath cube.",
          "**Mobile OLAP:** low-bandwidth devices par aggregated views."
        ]
      },
      {
        "type": "diagram",
        "title": "Types of OLAP systems",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-olap-types",
        "caption": "ROLAP with SQL over star schema, MOLAP with a pre-built cube and HOLAP with summary cube plus relational detail, compared on storage, speed, freshness and drill-down"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**ROLAP:** relational, SQL translate, bada detail, near real-time.",
          "**MOLAP:** cube, pre-aggregated, fastest, refresh + storage cost.",
          "**HOLAP:** summary cube + relational detail.",
          "**Variants:** DOLAP, WOLAP, real-time, mobile.",
          "**Cloud blur:** columnar + materialized views = ROLAP with MOLAP speed.",
          "**Exam line:** data char flavour mein hi rehta hai — tables, cube, ya dono."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain ROLAP, MOLAP and HOLAP with their advantages and disadvantages.",
        "answer": "OLAP systems ka classification is baat par hai ki multidimensional data **physically kahan** rehta hai.\n\n**1. ROLAP (Relational OLAP)**\n- Data: relational warehouse (star/snowflake).\n- Operations SQL mein translate: GROUP BY, ROLLUP, CUBE.\n- Fayde: bada detail, near real-time, no cube refresh, standard SQL tools.\n- Nuksan: aggregates slow; materialized views/aggregate tables zaroori.\n\n**2. MOLAP (Multidimensional OLAP)**\n- Data: proprietary cube (array + bitmap index), pre-aggregated.\n- Fayde: sabse fast, rich calculations, dense data par compact.\n- Nuksan: cube refresh time, sparse data par storage blow-up, limited detail drill.\n\n**3. HOLAP (Hybrid OLAP)**\n- Data: summary cube + relational detail.\n- Fayde: speed + drill-through balance, storage controlled.\n- Nuksan: do systems manage karna, sync/consistency ka issue.\n\n**Selection:**\n- Bada detail + freshness -> ROLAP.\n- Fixed KPI dashboard + speed -> MOLAP.\n- Mixed workload -> HOLAP.\n- Cloud columnar warehouse -> ROLAP-style with materialized views.\n\n**Diagram:** Refer to the Types of OLAP systems diagram."
      },
      {
        "question": "Which OLAP type would you choose for a retail chain and why? Justify with criteria.",
        "answer": "**Scenario:** 400 stores, 10 lakh SKUs, 3 saal ka history, 200 concurrent users, daily refresh, dashboards + ad-hoc analysis.\n\n**Evaluation:**\n\n| Criterion | Requirement | Best fit |\n|---|---|---|\n| Data volume | ~500 Cr fact rows | ROLAP/HOLAP (MOLAP storage mehnga) |\n| Detail drill | SKU + invoice level | ROLAP/HOLAP |\n| Latency | dashboard < 2 sec | MOLAP aggregates |\n| Refresh | daily | sab chalega |\n| Concurrency | 200 users | ROLAP server / columnar |\n| Ad-hoc | analysts explore | ROLAP |\n\n**Recommendation: HOLAP-style hybrid**\n1. **Aggregate layer** (MOLAP-style / materialized views) for standard dashboards: month x category x store cluster.\n2. **Detail layer** (ROLAP) for drill-through to SKU/invoice.\n3. **Semantic layer** dono ke upar — user ko ek model dikhe.\n4. **Cache** common queries.\n5. **Refresh:** nightly aggregates + hourly detail CDC.\n\n**Justification:** pure MOLAP storage aur refresh se mehnga; pure ROLAP dashboards par slow. Hybrid dono problems solve karta hai.\n\n**Diagram:** Refer to the Types of OLAP systems diagram."
      },
      {
        "question": "Explain DOLAP, web OLAP and real-time OLAP as variants of OLAP systems.",
        "answer": "**1. DOLAP (Desktop OLAP)**\n- Cube file local machine par download (.cub, .hyper, .pbix).\n- Offline analysis, fast, low server load.\n- Limit: stale data, size limit, security (data laptop par).\n\n**2. Web / Mobile OLAP (WOLAP)**\n- Thin client browser/mobile se OLAP server access.\n- Centralised security aur refresh.\n- Limit: bandwidth, limited interaction on mobile.\n\n**3. Real-time OLAP (RTOLAP)**\n- Streaming/CDC se cube continuously update.\n- Fraud monitoring, live operations dashboards, dynamic pricing.\n- Limit: complexity, cost, aggregation consistency.\n\n**4. Related: HTAP / lakehouse**\n- Transaction + analytics ek platform par (modern cloud).\n- OLAP-style queries seedha operational data par.\n\n**Common thread:** core concept same — dimensions, measures, aggregation, navigation; sirf **deployment aur freshness** badalta hai.\n\n**Diagram:** Refer to the Types of OLAP systems diagram."
      }
    ]
  },
  {
    "id": "olap-cube",
    "number": "3.9",
    "title": "OLAP Cube Concept",
    "subtitle": "Multidimensional box — cells, sparsity, pre-aggregation",
    "icon": "cube",
    "accent": "#00bcd4",
    "englishDefinition": "An OLAP cube is the physical or logical structure that stores measures at every combination of dimension members. With n dimensions the structure is an n-dimensional array: a cell is identified by one member from each dimension and holds one or more measure values. Because a real cube contains every combination - including combinations with no business event - most cells are empty; such a cube is sparse, and sparse storage would waste space, so implementations store only non-empty cells with indexing schemes, or compress dense blocks and index sparse ones. Cubes also pre-compute aggregates at higher hierarchy levels (month, quarter, year; city, state, region) so that roll-up and drill-down do not scan detail data. A cube has a schema - dimensions, hierarchies, levels, measures and calculation rules - and it is refreshed on a schedule, either fully or incrementally through partitions. Conceptually a cube is the multidimensional model; physically it may be a MOLAP array store, a set of relational aggregate tables with materialized views (ROLAP), or a hybrid. Understanding sparsity, aggregation design and refresh strategy is what separates a fast cube from one that is large, stale and slow.",
    "intro": "**Cube** = n dimensions ka array; har **cell** ek member per dimension ka intersection hai aur usme **measures** hote hain. Real cubes **sparse** hote hain (bahut combos empty) — isliye sirf non-empty cells store hote hain aur higher-level **aggregates pre-compute** hote hain (month, quarter, year). Cube ka **schema**: dimensions, hierarchies, levels, measures, calculations; **refresh** full ya incremental (partitions).",
    "sections": [
      {
        "type": "definition",
        "title": "Cube kya hai",
        "kicker": "Definition",
        "body": "**OLAP cube** ek multidimensional structure hai jo measures ko **har dimension member combination** par store karta hai.",
        "body2": "3 dimensions ke saath ye visually box jaisa dikhta hai; 5, 10, 20 dimensions ke saath bhi \"cube\" hi kehte hain (hypercube) — bas cells ki ginti dimension members ke product jitni badh jaati hai.",
        "chips": [
          "cell",
          "sparsity",
          "pre-aggregation",
          "partition",
          "cube schema"
        ]
      },
      {
        "type": "cards",
        "title": "Cube ke components",
        "kicker": "Anatomy",
        "cards": [
          {
            "icon": "layers",
            "title": "Dimensions & hierarchies",
            "body": "Har axis ka structure: product, time, store, channel."
          },
          {
            "icon": "grid",
            "title": "Cells",
            "body": "Ek member per dimension = ek cell; measure value wahan."
          },
          {
            "icon": "chart",
            "title": "Measures",
            "body": "Sales, qty, margin — additive values per cell."
          },
          {
            "icon": "cube",
            "title": "Aggregates",
            "body": "Higher levels pre-computed: month, quarter, year."
          },
          {
            "icon": "settings",
            "title": "Calculations",
            "body": "Derived measures: share %, YoY growth, margin %."
          },
          {
            "icon": "clock",
            "title": "Partitions",
            "body": "Time ya region wise chunks; incremental refresh ke liye."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Cube vs relational table",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "OLAP cube",
          "Relational table"
        ],
        "rows": [
          {
            "label": "Structure",
            "values": [
              "n-dimensional array",
              "rows and columns"
            ]
          },
          {
            "label": "Aggregation",
            "values": [
              "pre-computed cells",
              "query-time GROUP BY"
            ]
          },
          {
            "label": "Speed",
            "values": [
              "sub-second",
              "depends on query"
            ]
          },
          {
            "label": "Storage",
            "values": [
              "aggregates + sparse handling",
              "detail only"
            ]
          },
          {
            "label": "Refresh",
            "values": [
              "scheduled / partition",
              "continuous load"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "fixed dimensions, dashboards",
              "detail, ad-hoc, audit"
            ]
          }
        ],
        "columnColors": [
          "#00bcd4",
          "#ff8800"
        ]
      },
      {
        "type": "example",
        "title": "Sparsity ka calculation",
        "kicker": "Example",
        "body": "Maan lo: 3,000 products x 400 stores x 1,100 days x 2 channels = **2.64 arab** possible cells. Reality mein roz ke sales se bane combos sirf ~**4 crore** hote hain — yaani **1.5% dense**. Agar saare cells store karo to storage barbaad. Isliye: sirf non-empty cells + bitmap index, aur sparse dimensions ko alag rakhna. Yahi sparsity management cube design ka core hai."
      },
      {
        "type": "points",
        "title": "Cube design best practices",
        "kicker": "Design Rules",
        "points": [
          "**Sparsity samjho:** densest combinations pehle, sparse ko compress karo.",
          "**Aggregates plan karo:** kaunse levels pre-compute honge (month/quarter, city/state)?",
          "**Partition by time:** purana data compress, naya data fast refresh.",
          "**Calculated measures** cube ke andar rakho (share, growth) taaki consistent rahein.",
          "**Refresh strategy:** full vs incremental; freshness SLA define karo.",
          "**Security in cube:** role-based dimension/measure access.",
          "**Monitor usage:** jo aggregates use nahi hote, hata do."
        ]
      },
      {
        "type": "diagram",
        "title": "OLAP cube concept",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-cube",
        "caption": "A three-dimensional cube of product, time and store with one highlighted cell, its pre-computed aggregate levels above, and the sparsity and partition strategy that keeps it small and fast"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Cube** = n-dimensional array of measures.",
          "**Cell** = one member per dimension.",
          "**Sparse** cubes: sirf non-empty cells store karo.",
          "**Pre-aggregation** se roll-up fast.",
          "**Partitions** se refresh aur storage manage karo.",
          "**Exam line:** cube speed aggregate pre-compute karne se aati hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the OLAP cube concept with sparsity and aggregation.",
        "answer": "**Definition:** OLAP cube ek multidimensional structure hai jo measures ko har dimension member combination par store karta hai; n dimensions ke saath ye n-dimensional array (hypercube) hota hai.\n\n**Components:**\n1. **Dimensions** — product, time, store, channel.\n2. **Hierarchies/levels** — year -> quarter -> month.\n3. **Cells** — ek member per dimension; measure value.\n4. **Measures** — sales, qty, margin.\n5. **Calculations** — share %, YoY growth.\n6. **Partitions** — time/region chunks for refresh.\n\n**Sparsity:** 3,000 products x 400 stores x 1,100 days x 2 channels = 2.64 arab cells, par actual combinations ~4 crore (1.5% dense). Isliye:\n- Sirf non-empty cells store karo.\n- Dense blocks compress, sparse ko index karo.\n- Unused dimensions ko prune karo.\n\n**Aggregation:** higher levels (month, quarter, year) pre-compute karke store — roll-up instant ho jaata hai, detail scan nahi karni padti.\n\n**Refresh:** full ya incremental (partition-wise), scheduled.\n\n**Diagram:** Refer to the OLAP cube concept diagram."
      },
      {
        "question": "How is an OLAP cube designed and maintained?",
        "answer": "**Design steps:**\n\n**1. Requirements**\n- Kaunse business questions, kaunse dimensions, kaunse measures.\n\n**2. Dimensions aur hierarchies define karo**\n- Product (category -> sub-category -> SKU), Time (year -> quarter -> month -> day), Store (region -> state -> city).\n\n**3. Grain decide karo**\n- Cube ka base grain (day-level fact, store-level).\n\n**4. Aggregation design**\n- Kaunse levels pre-compute: month, quarter, year; city/state/region.\n- Usage data se decide karo — sab pre-compute karna storage waste hai.\n\n**5. Sparsity handling**\n- Non-empty cell storage, compression, dimension pruning.\n\n**6. Calculations**\n- Share %, growth, margin % cube ke andar (consistent definitions).\n\n**7. Partitioning**\n- Time-based (mahina/quarter) — purana compress, naya fast refresh.\n\n**8. Security**\n- Role-based access: dimension members, measures, cells.\n\n**Maintenance:**\n1. Scheduled refresh (full/incremental), partition switching.\n2. Usage monitoring — unused aggregates hatao.\n3. Index/compression tune karo.\n4. Data quality checks refresh se pehle.\n5. Documentation + lineage.\n\n**Diagram:** Refer to the OLAP cube concept diagram."
      },
      {
        "question": "Compare a cube-based approach with query-time aggregation over a star schema.",
        "answer": "| Point | Cube (pre-aggregated) | Query-time aggregation (star) |\n|---|---|---|\n| Speed | sub-second for aggregates | depends on data volume/engine |\n| Storage | extra (aggregates + indexes) | sirf detail |\n| Freshness | refresh schedule | near real-time |\n| Flexibility | fixed dimension/level set | koi bhi GROUP BY |\n| Maintenance | cube build + refresh | materialized views maintain karna |\n| Detail drill | limited (unless HOLAP) | full detail |\n| Cost | cube infrastructure | warehouse compute |\n| Governance | calculations cube mein centralised | semantic layer mein |\n\n**Explanation:** cube speed deta hai kyunki aggregation pehle se hoti hai; star schema flexibility deta hai kyunki har query apni grouping chunti hai.\n\n**Modern middle ground:**\n- Materialized views / aggregate tables (ROLAP-style cube).\n- Columnar engine + result cache.\n- Semantic layer jo user ko cube jaisa experience de.\n\n**Rule:** repetitive dashboards -> cube; unpredictable ad-hoc -> star/query-time; dono -> hybrid.\n\n**Diagram:** Refer to the OLAP cube concept diagram."
      }
    ]
  },
  {
    "id": "olap-operations",
    "number": "3.10",
    "title": "OLAP Operations: Roll-up, Drill-down, Slice, Dice, Pivot",
    "subtitle": "Cube par paanch basic moves",
    "icon": "loop",
    "accent": "#aa00ff",
    "englishDefinition": "OLAP operations are the navigation primitives that let a user move around a cube. Roll-up (consolidation) aggregates data to a higher level of a hierarchy or drops a dimension - from month to quarter to year, or from city to region - producing fewer, larger numbers. Drill-down is the inverse: it moves to a finer level or adds a dimension, from year to quarter, or from category to SKU, revealing the detail behind a number. Slice fixes one dimension to a single member and returns a sub-cube, for example sales for 2024 only. Dice fixes ranges or sets across two or more dimensions, for example 2023-2024, Footwear and Apparel, Pune and Mumbai, giving an intersecting sub-cube. Pivot (rotate) changes the visual orientation of the data - swapping rows and columns, moving a dimension to a different axis - without changing the underlying values. Related operations include drill-across between two fact tables that share conformed dimensions, drill-through to the underlying relational rows, and ranking or top-n selection. Together these operations define the interactive, exploratory character of OLAP: the same cube answers summary, detail, comparison and layout questions without rewriting a query.",
    "intro": "**Paanch operations:** **Roll-up** (upar aggregate — month -> quarter -> year, ya dimension drop), **Drill-down** (neeche detail — year -> quarter -> SKU, ya dimension add), **Slice** (ek dimension ek member par fix), **Dice** (2+ dimensions par ranges/sets), **Pivot/Rotate** (rows aur columns swap — values same). Extra: **drill-across** (do facts, conformed dimensions) aur **drill-through** (raw rows tak).",
    "sections": [
      {
        "type": "definition",
        "title": "Operations kya karte hain",
        "kicker": "Definition",
        "body": "OLAP operations cube par **navigation** karne ke tools hain — numbers badalte nahi, **view** badalta hai (pivot mein), ya **aggregation level** badalta hai (roll-up/drill-down).",
        "body2": "Yaad rakhne ka simple rule: **Roll-up = zoom out, Drill-down = zoom in, Slice = ek page, Dice = chhota box, Pivot = page ghumao.**",
        "chips": [
          "roll-up",
          "drill-down",
          "slice",
          "dice",
          "pivot",
          "drill-through"
        ]
      },
      {
        "type": "cards",
        "title": "Paanch operations — examples ke saath",
        "kicker": "The Five Moves",
        "cards": [
          {
            "icon": "trends",
            "title": "Roll-up",
            "body": "Month -> Quarter -> Year; City -> State -> Region. Fewer, bigger numbers."
          },
          {
            "icon": "search",
            "title": "Drill-down",
            "body": "Year -> Quarter -> Month -> Day; Category -> SKU. Detail behind a number."
          },
          {
            "icon": "layers",
            "title": "Slice",
            "body": "Ek dimension ek member: sirf `Year = 2024`, ya sirf `Region = West`."
          },
          {
            "icon": "grid",
            "title": "Dice",
            "body": "Sets/ranges: 2023-24, {Footwear, Apparel}, {Pune, Mumbai}."
          },
          {
            "icon": "refresh",
            "title": "Pivot / rotate",
            "body": "Rows <-> columns swap; dimension axis change; values same."
          },
          {
            "icon": "arrow",
            "title": "Drill-through",
            "body": "Aggregate se seedha raw transaction rows tak (invoice level)."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Roll-up vs drill-down",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Roll-up",
          "Drill-down"
        ],
        "rows": [
          {
            "label": "Direction",
            "values": [
              "summary ki taraf (up)",
              "detail ki taraf (down)"
            ]
          },
          {
            "label": "Hierarchy",
            "values": [
              "month -> quarter -> year",
              "year -> quarter -> month"
            ]
          },
          {
            "label": "Dimensions",
            "values": [
              "dimension drop ho sakta hai",
              "dimension add ho sakta hai"
            ]
          },
          {
            "label": "Rows in result",
            "values": [
              "kam, aggregate values",
              "zyada, granular values"
            ]
          },
          {
            "label": "Question",
            "values": [
              "\"overall kaisa chal raha hai?\"",
              "\"kaun responsible hai?\""
            ]
          },
          {
            "label": "Cost",
            "values": [
              "cheap (pre-aggregated)",
              "relatively expensive"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#ff8800"
        ]
      },
      {
        "type": "example",
        "title": "Ek hi cube, paanch operations",
        "kicker": "Example",
        "body": "Base cell: (Product = Running Shoes, Month = Mar-2024, City = Pune) = Sales 4,80,000. **Roll-up:** (Footwear, Q1-2024, Maharashtra) = 92,00,000. **Drill-down:** (Running Shoes -> SKU-U9, Week 12, Pune-Kothrud store) = 38,000. **Slice:** sirf `Channel = Online` par poora cube. **Dice:** {Footwear, Apparel} x {Jan, Feb, Mar 2024} x {Pune, Mumbai}. **Pivot:** category rows se columns mein — trend dekhne ke liye. Values nahi badle, sirf nazariya."
      },
      {
        "type": "points",
        "title": "Exam-friendly points",
        "kicker": "Key Points",
        "points": [
          "**Roll-up** = aggregation upar; **Drill-down** = detail neeche (inverse operations).",
          "**Slice** = ek dimension fix; **Dice** = multiple dimensions par restriction.",
          "**Pivot** = presentation change, data change nahi.",
          "**Drill-through** = aggregate se raw rows tak (audit ke liye zaroori).",
          "**Drill-across** = conformed dimensions par do facts compare.",
          "Operations ka purpose: **self-service exploration** bina SQL."
        ]
      },
      {
        "type": "diagram",
        "title": "OLAP operations",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-operations",
        "caption": "One cube with roll-up and drill-down along the time hierarchy, slice on a single year, dice across product and city ranges, and pivot swapping rows and columns"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Roll-up:** month -> quarter -> year.",
          "**Drill-down:** year -> quarter -> SKU.",
          "**Slice:** ek dimension, ek member.",
          "**Dice:** multiple dimensions par sets/ranges.",
          "**Pivot:** rows <-> columns, values same.",
          "**Exam line:** paanch operations, ek hi cube."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the OLAP operations: roll-up, drill-down, slice, dice and pivot.",
        "answer": "OLAP operations cube par navigate karne ke primitives hain.\n\n**1. Roll-up (consolidation)**\n- Higher hierarchy level par aggregate.\n- Month -> Quarter -> Year; City -> State -> Region.\n- Dimension drop bhi ho sakta hai (country hata do -> total).\n- Result: fewer rows, bigger numbers.\n\n**2. Drill-down**\n- Roll-up ka inverse — finer level ya extra dimension.\n- Year -> Quarter -> Month -> Day; Category -> Sub-category -> SKU.\n- Question: \"is number ke peeche kaun hai?\"\n\n**3. Slice**\n- Ek dimension ko ek member par fix karke sub-cube lena.\n- Example: sirf `Year = 2024`, ya sirf `Region = West`.\n\n**4. Dice**\n- Do ya zyada dimensions par sets/ranges fix karna.\n- Example: 2023-2024, {Footwear, Apparel}, {Pune, Mumbai}.\n\n**5. Pivot (rotate)**\n- Rows aur columns swap, ya dimension doosre axis par.\n- Values same rehte hain — sirf presentation badalti hai.\n\n**Related:** drill-through (raw rows), drill-across (do facts, conformed dimensions), top-n ranking.\n\n**Diagram:** Refer to the OLAP operations diagram."
      },
      {
        "question": "Differentiate roll-up and drill-down with examples. What is the role of hierarchies?",
        "answer": "| Point | Roll-up | Drill-down |\n|---|---|---|\n| Direction | up (summary) | down (detail) |\n| Hierarchy | month -> quarter -> year | year -> quarter -> month |\n| Dimensions | drop ho sakta hai | add ho sakta hai |\n| Result rows | kam | zyada |\n| Purpose | trend/overall view | root cause/detail |\n| Cost | cheap (pre-aggregated) | expensive |\n\n**Example:** Pune ka March sales 4.8 lakh.\n- Roll-up: Q1 Maharashtra footwear = 92 lakh.\n- Drill-down: Kothrud store, Week 12, SKU-U9 = 38,000.\n\n**Hierarchies ka role:**\n1. Roll-up/drill-down ke **paths** define karti hain (level order).\n2. Pre-aggregation ke liye target levels deti hain.\n3. User navigation intuitive banati hain.\n4. Consistent grouping ensure karti hain (sab reports same levels).\n5. Hierarchy ke bina drill-down ka koi raasta nahi.\n\n**Note:** hierarchy galat define ho to drill-down do level skip kar jaata hai aur numbers confuse karte hain.\n\n**Diagram:** Refer to the OLAP operations diagram."
      },
      {
        "question": "Explain slice, dice and pivot with examples. How do they differ?",
        "answer": "**Slice:**\n- Ek dimension ko ek single member par fix karna.\n- Result: cube ka ek \"slice\" (n-1 dimensional sub-cube).\n- Example: `Year = 2024` fix -> baaki product x store dekh sakte hain.\n\n**Dice:**\n- Do ya zyada dimensions par **sets/ranges** lagana.\n- Result: intersecting sub-cube.\n- Example: Products {Footwear, Apparel} x Months {Jan-Mar} x Cities {Pune, Mumbai}.\n\n**Pivot (rotate):**\n- Data ka orientation badalna — rows aur columns swap.\n- Values same, presentation alag.\n- Example: pehle rows = category, columns = month; pivot ke baad rows = month, columns = category.\n\n**Farq:**\n| Operation | Kya badalta hai | Dimensions affected |\n|---|---|---|\n| Slice | data subset | 1 (fixed to a member) |\n| Dice | data subset | 2+ (ranges/sets) |\n| Pivot | layout | 0 (only orientation) |\n\n**Business use:** slice se focus, dice se comparison, pivot se trend reading.\n\n**Diagram:** Refer to the OLAP operations diagram."
      }
    ]
  },
  {
    "id": "olap-vs-oltp",
    "number": "3.11",
    "title": "OLAP vs OLTP Systems",
    "subtitle": "Do system, do kaam — confusion khatam",
    "icon": "columns",
    "accent": "#ff8800",
    "englishDefinition": "OLTP and OLAP systems are built for opposite workloads. An OLTP system runs the business: it processes many short, concurrent transactions - insert an order, update inventory, post a payment - with strict ACID guarantees, row-level locking, normalized schemas and indexes tuned for point lookups, and it holds the current state of a few records at a time. An OLAP system explains the business: it answers a small number of large, complex, read-mostly queries that scan and aggregate millions of rows across many dimensions, using denormalized star or snowflake schemas, bitmap or columnar storage, partitions and pre-computed aggregates, over years of historical data. The two differ in users (clerks and applications versus analysts and managers), in data (current and detailed versus historical and summarized), in metrics (transactions per second and latency versus query complexity and scan throughput), in backup and recovery needs, and in tuning strategy. Running analytical queries on the operational database causes lock contention, unpredictable response and risk to the transaction path, which is exactly why warehouses and OLAP servers exist as separate systems fed by ETL or CDC. Understanding this split also explains the modern landscape: HTAP systems and lakehouses try to serve both, but the design trade-off never fully disappears.",
    "intro": "**OLTP business chalata hai:** bahut si chhoti concurrent transactions (order, payment, inventory), ACID, row-level locks, normalized schema, current data. **OLAP business samajhta hai:** kam badi complex read-only queries, lakhon rows scan, star schema, bitmap/columnar, history. Farq: **users, data, workload, schema, tuning, backup**. Isliye dono alag systems hote hain — ETL/CDC se jude.",
    "sections": [
      {
        "type": "definition",
        "title": "Ek line mein farq",
        "kicker": "Definition",
        "body": "**OLTP:** \"abhi kya hua?\" — ek order ka status, ek customer ka balance.",
        "body2": "**OLAP:** \"pattern kya hai?\" — 3 saal ka trend, region-wise margin, category-wise growth. Isi wajah se OLTP ka metric **TPS aur latency** hai, OLAP ka metric **query complexity aur scan throughput**.",
        "chips": [
          "ACID",
          "normalized",
          "star schema",
          "concurrency",
          "columnar"
        ]
      },
      {
        "type": "comparison",
        "title": "OLAP vs OLTP — detailed",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "OLTP",
          "OLAP"
        ],
        "rows": [
          {
            "label": "Purpose",
            "values": [
              "run the business",
              "analyse the business"
            ]
          },
          {
            "label": "Workload",
            "values": [
              "many short read-write",
              "few long read-only"
            ]
          },
          {
            "label": "Operations",
            "values": [
              "INSERT/UPDATE/DELETE",
              "SELECT + aggregate"
            ]
          },
          {
            "label": "Schema",
            "values": [
              "normalized 3NF",
              "star / snowflake"
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
            "label": "Response",
            "values": [
              "milliseconds",
              "seconds to minutes"
            ]
          },
          {
            "label": "Users",
            "values": [
              "clerks, applications",
              "analysts, managers"
            ]
          },
          {
            "label": "Size",
            "values": [
              "GB",
              "TB to PB"
            ]
          },
          {
            "label": "Indexing",
            "values": [
              "B-tree, row store",
              "bitmap, columnar, partition"
            ]
          },
          {
            "label": "Backup",
            "values": [
              "point-in-time critical",
              "reload/partition possible"
            ]
          },
          {
            "label": "Metric",
            "values": [
              "TPS, latency, concurrency",
              "query time, scan throughput"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800"
        ]
      },
      {
        "type": "cards",
        "title": "Architecture kaise judte hain",
        "kicker": "End-to-End",
        "cards": [
          {
            "icon": "database",
            "title": "OLTP layer",
            "body": "Core systems: ERP, CRM, POS, banking core — transactions ka source."
          },
          {
            "icon": "flow",
            "title": "ETL / CDC",
            "body": "Extract, clean, transform; batch ya streaming."
          },
          {
            "icon": "cube",
            "title": "Warehouse + OLAP",
            "body": "Star schema + cube/aggregates; analysis ka engine."
          },
          {
            "icon": "monitor",
            "title": "BI layer",
            "body": "Dashboards, reports, self-service, alerts."
          },
          {
            "icon": "loop",
            "title": "Feedback",
            "body": "Insights se operational process improve — phir naya data."
          }
        ]
      },
      {
        "type": "example",
        "title": "Banking example — dono side",
        "kicker": "Example",
        "body": "**OLTP:** customer UPI se 5,000 bhejta hai — 300 ms mein debit/credit, balance update, SMS. Din mein crore transactions, ACID aur lock discipline zaroori. **OLAP:** risk team poochti hai \"pichhle 6 mahine mein branch-wise high-value transactions ka pattern, aur fraud flags ka trend\" — crores rows scan, star schema par aggregates. Agar ye query core banking par chalti to payment system slow ho jaata — isliye warehouse alag hai."
      },
      {
        "type": "points",
        "title": "Design implications",
        "kicker": "Implications",
        "points": [
          "**OLTP:** normalization, short transactions, row locks, connection pooling, HA clustering.",
          "**OLAP:** denormalization, batch loads, partitioning, columnstore, pre-aggregation, cache.",
          "**Concurrency:** OLTP mein hazaaron users ek-ek row; OLAP mein sau users badi queries.",
          "**Change management:** OLTP schema change risky; OLAP mein reload possible.",
          "**Security:** OLTP mein transaction-level; OLAP mein row/column/cube-level.",
          "**Cost:** OLTP per-transaction optimised; OLAP per-scan/warehouse compute."
        ]
      },
      {
        "type": "diagram",
        "title": "OLAP vs OLTP systems",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-vs-oltp",
        "caption": "Two columns: OLTP with short concurrent transactions and normalized tables, OLAP with long aggregate queries over a star schema, joined by an ETL/CDC pipeline"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**OLTP:** transactions, normalized, current, fast small writes.",
          "**OLAP:** analysis, star schema, historical, heavy reads.",
          "**Metrics:** TPS/latency vs query time/scan.",
          "**Bridge:** ETL/CDC; dono alag systems.",
          "**HTAP/lakehouse** dono serve karne ki koshish karte hain.",
          "**Exam line:** OLTP chalata hai, OLAP samajhta hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between OLAP and OLTP systems.",
        "answer": "| Point | OLTP | OLAP |\n|---|---|---|\n| Purpose | run the business | analyse the business |\n| Workload | many short read-write | few long read-only |\n| Operations | INSERT/UPDATE/DELETE | SELECT + aggregation |\n| Schema | normalized (3NF) | star / snowflake |\n| Data | current, detailed | historical, summarized |\n| Response time | milliseconds | seconds to minutes |\n| Users | clerks, applications | analysts, managers |\n| Size | GB | TB-PB |\n| Indexing | B-tree, row store | bitmap, columnar, partition |\n| Metric | TPS, latency, concurrency | query time, scan throughput |\n| Backup | point-in-time critical | periodic reload possible |\n\n**Explanation:** OLTP ACID aur concurrency par optimise hota hai; OLAP scan aur aggregation par. Isliye analytical queries operational system par nahi chalate — lock contention aur timeouts ka risk.\n\n**Diagram:** Refer to the OLAP vs OLTP systems diagram."
      },
      {
        "question": "Why are OLAP and OLTP kept as separate systems? Explain the integration between them.",
        "answer": "**Separate rakhne ke kaaran:**\n\n1. **Performance isolation** — heavy scan production transactions ko slow karta hai.\n2. **Schema mismatch** — 3NF vs star schema.\n3. **Concurrency pattern** — hazaaron small writes vs sau large reads.\n4. **History requirement** — OLTP current state, OLAP multi-year.\n5. **Indexing trade-off** — B-tree vs bitmap/columnstore.\n6. **Maintenance windows** — OLAP reload/reindex production ko affect nahi karta.\n7. **Security & governance** — analysts ko read-only access.\n\n**Integration:**\n- **ETL** (nightly batch) — extract, transform, load.\n- **CDC / streaming** — near real-time replication (Debezium, Kafka).\n- **Data virtualisation** — on-demand query (limited).\n- **Reverse ETL** — insights wapas operational systems mein (segments, scores).\n\n**Flow:** OLTP -> ETL/CDC -> warehouse -> OLAP cube -> BI -> decisions -> phir operational process improve.\n\n**Diagram:** Refer to the OLAP vs OLTP systems diagram."
      },
      {
        "question": "Discuss HTAP and modern convergence of OLAP and OLTP workloads.",
        "answer": "**HTAP (Hybrid Transactional/Analytical Processing):** ek hi system par dono workloads — usually row-store for transactions + column-store replica for analytics, with log-based sync.\n\n**Kaise kaam karta hai:**\n1. Row store transactional writes handle karta hai.\n2. Change log se column store asynchronously update hota hai.\n3. Analytics column store par chalti hai (production impact kam).\n\n**Fayde:**\n- Real-time analytics (fresh data).\n- Duplicate pipeline kam.\n- Simplification for SMEs.\n\n**Challenges:**\n1. **Resource contention** — heavy analytics transaction latency ko affect kar sakti hai.\n2. **Schema compromise** — normalized vs star, dono ke liye best mushkil.\n3. **Tuning conflict** — index strategy alag.\n4. **Cost** — memory/compute dono chahiye.\n5. **Governance** — ek hi system par PII aur analytics access.\n\n**Reality:** bade enterprises abhi bhi separation rakhte hain (warehouse/lakehouse), par cloud platforms (Snowflake, BigQuery, Databricks, SingleStore) convergence ki taraf ja rahe hain.\n\n**Diagram:** Refer to the OLAP vs OLTP systems diagram."
      }
    ]
  },
  {
    "id": "olap-applications",
    "number": "3.12",
    "title": "Applications of OLAP in Business Analysis",
    "subtitle": "Kahan-kahan cube kaam aata hai",
    "icon": "briefcase",
    "accent": "#00bcd4",
    "englishDefinition": "OLAP is used wherever decisions depend on comparing numbers across several dimensions at once. In sales and marketing it drives territory and product performance, campaign ROI, basket analysis and pricing; in finance it supports budgeting, variance and profitability analysis, cost-centre reporting and statutory consolidation; in supply chain it answers inventory turns, fill rates, supplier scorecards and demand patterns; in HR it tracks headcount, attrition, compensation and hiring funnels; in healthcare it analyses admissions, diagnoses, cost per case and readmissions; in banking and insurance it powers risk, fraud, portfolio and claims analysis; in telecom it supports churn, usage and network quality; in retail it covers category management, store performance and promotions; and in education it tracks enrolment, attendance and results. Common to all of them is the pattern: a measure, sliced by business dimensions, compared over time, with the ability to drill into exceptions. The benefits are faster and better-informed decisions, a single consistent set of numbers, exception detection, and self-service access that reduces the load on IT. The limits are equally worth stating - OLAP explains what happened and where, not why with certainty; it depends on data quality and model design; and prediction needs statistics and machine learning layered on top.",
    "intro": "**OLAP kahan use hota hai:** sales & marketing (territory, product, campaign ROI), finance (budget vs actual, profitability), supply chain (inventory turns, fill rate, supplier scorecard), HR (headcount, attrition), healthcare (admissions, cost per case), banking/insurance (risk, fraud, claims), telecom (churn, usage), retail (category, store, promotion), education (enrolment, results). Common pattern: **measure x dimensions x time**, phir exception par drill-down.",
    "sections": [
      {
        "type": "definition",
        "title": "Common pattern",
        "kicker": "Definition",
        "body": "Har application mein same shape hoti hai: ek **measure** (sales, cost, attrition), kuch **dimensions** (product, region, time, customer), aur **time ke saath comparison** — phir exception par drill-down.",
        "body2": "Isliye OLAP ka value **decision speed** hai: jo sawaal pehle hafte lete the, wo ab minute mein answer ho jaata hai.",
        "chips": [
          "sales analysis",
          "finance",
          "supply chain",
          "HR analytics",
          "healthcare"
        ]
      },
      {
        "type": "cards",
        "title": "Domain-wise applications",
        "kicker": "Applications",
        "cards": [
          {
            "icon": "money",
            "title": "Sales & marketing",
            "body": "Territory performance, product mix, campaign ROI, pricing, basket analysis."
          },
          {
            "icon": "chart",
            "title": "Finance",
            "body": "Budget vs actual, variance, profitability, cost centre, consolidation."
          },
          {
            "icon": "truck",
            "title": "Supply chain",
            "body": "Inventory turns, fill rate, supplier scorecard, demand pattern, ageing."
          },
          {
            "icon": "users",
            "title": "HR",
            "body": "Headcount, attrition, compensation, hiring funnel, training effectiveness."
          },
          {
            "icon": "shield",
            "title": "Healthcare",
            "body": "Admissions, diagnosis mix, cost per case, readmissions, bed utilisation."
          },
          {
            "icon": "lock",
            "title": "Banking & insurance",
            "body": "Risk exposure, fraud pattern, portfolio, claims analysis."
          },
          {
            "icon": "globe",
            "title": "Telecom",
            "body": "Churn, ARPU, usage pattern, network quality by circle."
          },
          {
            "icon": "tag",
            "title": "Retail & education",
            "body": "Category/store performance, promotions; enrolment, attendance, results."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "OLAP use case examples",
        "kicker": "Comparison",
        "columns": [
          "Domain",
          "Typical question"
        ],
        "rows": [
          {
            "label": "Sales",
            "values": [
              "kaunse region mein margin gir raha hai?",
              "slice by region, drill to SKU"
            ]
          },
          {
            "label": "Finance",
            "values": [
              "budget vs actual ka variance kahan hai?",
              "roll-up by cost centre"
            ]
          },
          {
            "label": "Supply chain",
            "values": [
              "kaunse SKU stock-out ho rahe hain?",
              "dice on warehouse + week"
            ]
          },
          {
            "label": "HR",
            "values": [
              "attrition kis department mein zyada?",
              "drill by tenure band"
            ]
          },
          {
            "label": "Banking",
            "values": [
              "high-value fraud pattern kahan?",
              "slice by channel, dice by month"
            ]
          }
        ],
        "columnColors": [
          "#00bcd4",
          "#ffd600"
        ]
      },
      {
        "type": "example",
        "title": "Retail chain ka monthly business review",
        "kicker": "Example",
        "body": "**Dashboard:** net sales, margin %, footfall, conversion, basket size — region aur category-wise, YoY. **OLAP flow:** roll-up se national number -> West region neeche -> drill-down Maharashtra -> Pune -> Kothrud store -> Footwear category -> Running shoes SKU. **Slice** online vs offline. **Dice** festive weeks. **Pivot** se category-wise trend. **Action:** Pune mein stock reallocation aur online promotion — ek meeting mein, ek hi data par."
      },
      {
        "type": "points",
        "title": "Business benefits",
        "kicker": "Benefits",
        "points": [
          "**Faster decisions:** minutes mein answer, hafte ka cycle khatam.",
          "**Consistency:** ek hi number sabke dashboard par.",
          "**Exception detection:** jo expected se hatke hai, wahi dikhta hai.",
          "**Self-service:** analyst khud explore karta hai, IT bottleneck kam.",
          "**Accountability:** drill-down se responsible unit pata chalta hai.",
          "**Historical learning:** multi-year trend se planning better."
        ]
      },
      {
        "type": "points",
        "title": "Limitations — imandaari se likho",
        "kicker": "Limitations",
        "points": [
          "**\"Kya hua\" batata hai, \"kyun\" nahi** — causal analysis ke liye statistics/ML chahiye.",
          "**Data quality par depend** — galat data se tez galat decision.",
          "**Model design** — galat grain/hierarchy se confusion.",
          "**Freshness** — batch cube purana ho sakta hai.",
          "**Adoption** — training ke bina tool bekaar.",
          "**Cost** — cube infrastructure aur skilled modellers."
        ]
      },
      {
        "type": "diagram",
        "title": "Applications of OLAP in business analysis",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "ol-apps",
        "caption": "Domain wheel of OLAP applications - sales, finance, supply chain, HR, healthcare, banking, telecom, retail and education - each with the measure, dimensions and decision it supports"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Pattern:** measure x dimensions x time, phir drill-down.",
          "**Domains:** sales, finance, supply chain, HR, healthcare, banking, telecom, retail, education.",
          "**Benefit:** faster, consistent, self-service decisions.",
          "**Limit:** \"kya\" batata hai, \"kyun\" nahi.",
          "**Success factors:** data quality, model design, adoption.",
          "**Exam line:** OLAP decision support ka backbone hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the applications of OLAP in business analysis with examples.",
        "answer": "**1. Sales and marketing**\n- Measure: net sales, margin, campaign cost.\n- Dimensions: product, region, channel, customer segment, month.\n- Use: territory performance, product mix, campaign ROI, pricing.\n\n**2. Finance**\n- Budget vs actual, variance analysis, profitability by cost centre.\n- Roll-up se consolidated view, drill-down se line item.\n\n**3. Supply chain**\n- Inventory turns, fill rate, supplier scorecard, ageing.\n- Dice on warehouse + week se stock-out pattern.\n\n**4. HR**\n- Headcount, attrition, compensation, hiring funnel.\n- Drill-down by department, tenure band, location.\n\n**5. Healthcare**\n- Admissions, diagnosis mix, cost per case, readmission rate.\n\n**6. Banking and insurance**\n- Risk exposure, fraud pattern, portfolio performance, claims analysis.\n\n**7. Telecom**\n- Churn, ARPU, usage, network quality by circle.\n\n**8. Retail and education**\n- Category/store performance, promotions; enrolment, attendance, results.\n\n**Common pattern:** measure sliced by dimensions over time, then drill into exceptions.\n\n**Diagram:** Refer to the Applications of OLAP in business analysis diagram."
      },
      {
        "question": "How does OLAP support decision making in a retail organisation?",
        "answer": "**Data:** sales, inventory, customer, promotion — star schema with date, product, store, customer, promo dimensions.\n\n**Decisions jo OLAP se hote hain:**\n\n1. **Assortment:** kaunse category/SKU bik rahe hain (drill-down), kaunse dead stock hain.\n2. **Pricing & promotion:** promotion weeks mein lift kitna (dice on promo + week), margin impact.\n3. **Store performance:** same-store sales, footfall vs conversion, region roll-up.\n4. **Inventory allocation:** stock-out vs overstock, store-wise replenishment.\n5. **Channel mix:** online vs offline share, category-wise.\n6. **Customer segment:** loyal vs new ka basket size aur margin.\n\n**OLAP operations ka use:**\n- Roll-up: national -> region -> state.\n- Drill-down: category -> sub-category -> SKU -> store.\n- Slice: sirf festive weeks ya sirf online.\n- Dice: {Footwear, Apparel} x {Pune, Mumbai} x {Q1}.\n- Pivot: month-wise trend by category.\n\n**Outcome:** faster category reviews, data-backed promotions, better stock allocation, margin improvement.\n\n**Diagram:** Refer to the Applications of OLAP in business analysis diagram."
      },
      {
        "question": "What are the benefits and limitations of OLAP for business analysis?",
        "answer": "**Benefits:**\n1. **Speed** — pre-aggregated answers in seconds.\n2. **Multidimensional view** — ek saath product, region, time, channel.\n3. **Consistency** — ek semantic model, ek number.\n4. **Self-service** — analyst khud explore karta hai.\n5. **Exception focus** — jo hatke hai wahi dikhta hai.\n6. **Drill-down** — summary se detail tak, root cause tak.\n7. **Historical analysis** — multi-year trend aur YoY.\n8. **Better planning** — budget vs actual, forecast vs actual.\n\n**Limitations:**\n1. **Descriptive only** — \"kya hua\", \"kyun\" nahi (causal/predictive ke liye ML chahiye).\n2. **Data quality dependent** — garbage in, fast garbage out.\n3. **Model rigidity** — naya dimension/hierarchy add karna design change.\n4. **Freshness** — batch cubes stale ho sakte hain.\n5. **Cost** — infrastructure + skilled modellers + licences.\n6. **Adoption risk** — training ke bina tool underused.\n7. **Security** — granular access manage karna zaroori (PII).\n\n**Balanced conclusion:** OLAP decision support ka backbone hai, par ye analysis ka starting point hai — end point nahi.\n\n**Diagram:** Refer to the Applications of OLAP in business analysis diagram."
      }
    ]
  }
];

export const biOlapUnit = {
  id: 'unit-3',
  number: '3',
  name: 'Multidimensional Data Modeling and OLAP',
  topics: biOlapTopics,
};
