// Data Science — Unit II: Data Pre-processing and Data Warehouse
export const dataScienceUnit2Topics = [
  {
    "id": "data-preprocessing",
    "number": "2.1",
    "title": "Data Pre-processing",
    "subtitle": "Kacche data ko model-ready banane ki process aur uske chaar techniques",
    "icon": "flow",
    "accent": "#00d4ff",
    "englishDefinition": "Data pre-processing is the set of techniques used to transform raw, real-world data into a clean, consistent and model-ready form before data mining or machine learning. It converts data into a format that is understandable and usable by algorithms, and it typically includes data cleaning (handling missing values, noise and outliers), data integration (combining multiple sources), data transformation (normalisation, encoding, aggregation) and data reduction (reducing the volume while preserving the information).",
    "intro": "Jo data hum collect karte hain wo kabhi bhi analysis-ready nahi hota — kisi table mein value missing hai, kisi mein unit galat hai, kisi mein duplicate row hai. Data pre-processing wahi safai aur tayyari ka kaam karti hai. Simple line: **model jitna achha data utna achha**.",
    "sections": [
      {
        "type": "definition",
        "title": "Data Pre-processing Kya Hai",
        "kicker": "Definition",
        "body": "Data pre-processing raw data ko analyse karne layak banane ki process hai — values theek karna, kai sources jodna, scale aur format badalna, aur size kam karna. Iska output ek clean, consistent dataset hota hai jise algorithm samajh sake.",
        "body2": "Ye process data mining / ML pipeline ka **pehla aur sabse lamba step** hai. Industry reports ke mutabik data analyst ka 60–80% time data prepare karne mein jaata hai. Pre-processing ke baad hi model ka result bharosemand hota hai.",
        "chips": ["Raw → clean", "Model ready", "4 techniques", "GIGO", "Pipeline step 1"]
      },
      {
        "type": "cards",
        "title": "Chaar Main Techniques",
        "kicker": "Techniques",
        "cards": [
          {
            "icon": "wrench",
            "title": "1. Data Cleaning",
            "body": "Missing values, noise, outliers, duplicates aur inconsistency ko theek karna."
          },
          {
            "icon": "network",
            "title": "2. Data Integration",
            "body": "Kai sources (DB, Excel, logs, API) ko ek consistent schema par laana."
          },
          {
            "icon": "loop",
            "title": "3. Data Transformation",
            "body": "Normalisation, encoding, discretisation, aggregation aur naye attributes banana."
          },
          {
            "icon": "down",
            "title": "4. Data Reduction",
            "body": "Rows/columns/size kam karna — information ka loss minimum rakhte hue."
          }
        ]
      },
      {
        "type": "points",
        "title": "Pre-processing Ke Steps (Order)",
        "kicker": "Pipeline",
        "points": [
          "**1. Data profiling** — data ko dekho: rows, columns, types, missing %, duplicates.",
          "**2. Cleaning** — missing values bharo, noise smooth karo, outliers handle karo, duplicates hatao.",
          "**3. Integration** — multiple sources ko join karo, keys match karo, units standardise karo.",
          "**4. Transformation** — scale (min-max/z-score), encode (one-hot/label), bin, aggregate.",
          "**5. Reduction** — feature selection/PCA, sampling, compression.",
          "**6. Validation** — row count, null %, range aur distribution check karo.",
          "**7. Split** — train/test split ke baad fit sirf train par (data leakage se bacho)."
        ]
      },
      {
        "type": "diagram",
        "title": "Pre-processing Pipeline",
        "kicker": "Diagram",
        "diagram": "ds-preprocessing",
        "caption": "Raw data → cleaning → integration → transformation → reduction → model-ready data"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Pre-processing raw data ko clean, consistent aur model-ready banati hai.",
          "Chaar techniques: cleaning, integration, transformation, reduction.",
          "Analyst ka 60–80% time data prepare karne mein jaata hai — ye normal hai.",
          "Garbage In, Garbage Out: galat input se galat model hi milega.",
          "Order: profile → clean → integrate → transform → reduce → validate.",
          "Pre-processing ke baad model accuracy, speed aur reliability — teeno better hote hain."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define data pre-processing. Explain its need and the main techniques.",
        "answer": "**Data Pre-processing:** Raw, real-world data ko clean, consistent aur model-ready form mein badalne ki technique — taaki algorithms usse sahi se use kar saken.\n\n**Need:** Real data hamesha incomplete (missing values), noisy (typo, random error), inconsistent (Pune/pune, kg/g) aur redundant (duplicate rows) hota hai. Bina pre-processing ke model galat pattern seekhta hai, accuracy girti hai aur pipeline crash ho jaati hai.\n\n**Main techniques:**\n1. **Data cleaning** — missing values impute/drop, noise smooth, outliers detect + handle, duplicates remove, inconsistency standardise.\n2. **Data integration** — multiple sources (DB, Excel, logs, API) ko ek schema par laana, entity resolution aur redundancy removal.\n3. **Data transformation** — normalisation (min-max, z-score), encoding (label, one-hot), discretisation (binning), aggregation, smoothing, attribute construction.\n4. **Data reduction** — dimensionality reduction (feature selection, PCA), numerosity reduction (sampling, clustering), compression.\n\n**Diagram:** Refer to Pre-processing Pipeline diagram."
      },
      {
        "question": "Explain the major tasks involved in data pre-processing with examples.",
        "answer": "**Major tasks with examples:**\n\n| Task | Kya karta hai | Example |\n|---|---|---|\n| Data cleaning | galat/incomplete values theek | age blank → median 28; price 99999 → cap |\n| Data integration | sources jodna | CRM + billing + web logs → ek customer view |\n| Transformation | scale/format badalna | salary 45000 → 0.45 (min-max); city → one-hot |\n| Reduction | size kam karna | 1000 columns → 12 PCA components |\n| Discretisation | continuous → bins | age 24 → \"20-30\" bucket |\n| Aggregation | summary banana | daily sales → monthly sales |\n\n**Detailed steps:**\n1. **Profiling** — shape, dtypes, null %, unique values, duplicates.\n2. **Cleaning** — impute (mean/median/mode/KNN), smooth noise (binning, regression), handle outliers (IQR/z-score), dedupe.\n3. **Integration** — schema matching, surrogate keys, unit conversion, conflict resolution.\n4. **Transformation** — normalisation, standardisation, encoding, log transform, feature construction.\n5. **Reduction** — feature selection (filter/wrapper/embedded), PCA, sampling, compression.\n6. **Validation** — null %, range, row count, distribution compare.\n\n**Diagram:** Refer to Pre-processing Pipeline diagram."
      },
      {
        "question": "Why is data pre-processing considered the most important step in data science? What happens without it?",
        "answer": "**Kyun sabse important hai:**\n1. **GIGO** — garbage in, garbage out: model ka output utna hi achha jitna input.\n2. **Accuracy** — clean data par same algorithm 10–30% better perform karta hai.\n3. **Algorithm compatibility** — sklearn/SQL ko numbers chahiye; text aur missing values direct nahi chalte.\n4. **Speed** — kam rows/columns = fast training aur kam memory.\n5. **Fairness** — biased ya duplicate data se model partial ho jaata hai.\n6. **Reproducibility** — documented pipeline se same result dobara milta hai.\n\n**Bina pre-processing ke:**\n- `NaN` ya type error se code crash.\n- Outlier (999, -1, 0 salary) se mean bigad jaata hai.\n- Duplicate rows se model double counting karta hai.\n- Different scale (salary vs age) se distance-based algorithms galat weight dete hain.\n- Text/date columns ko model samajh hi nahi paata.\n\n**Diagram:** Refer to Pre-processing Pipeline diagram."
      }
    ]
  },
  {
    "id": "need-of-data-preprocessing",
    "number": "2.2",
    "title": "Need for Data Pre-processing",
    "subtitle": "Real world data mein kya-kya kharab hota hai aur usse model par kya asar padta hai",
    "icon": "warn",
    "accent": "#ff0080",
    "englishDefinition": "Data pre-processing is needed because real-world data is generally incomplete (lacking attribute values or certain attributes of interest), noisy (containing errors or outliers), inconsistent (containing discrepancies in codes or names) and redundant (containing duplicate records or attributes). Mining on such data produces unreliable models and wrong decisions, whereas pre-processed data improves accuracy, reduces learning time and makes the results reproducible.",
    "intro": "Ek line mein: **jo data aapko milta hai wo data nahi hota jo aapko chahiye**. Missing values, galat units, duplicate entries, typo — ye sab real data ka hissa hain. Inhe theek kiye bina model ko train karna aise hi hai jaise gande paani se chai banane ki koshish.",
    "sections": [
      {
        "type": "definition",
        "title": "Real World Data Ki Chaar Problems",
        "kicker": "Definition",
        "body": "Industry ke standard hisaab se raw data mein chaar quality problems hoti hain: **incomplete** (kuch values missing), **noisy** (random error, typo, wrong reading), **inconsistent** (same cheez alag-alag tarah likhi hui) aur **redundant** (duplicate rows ya duplicate columns).",
        "body2": "In chaar problems ka seedha asar model par padta hai: missing value se bias aata hai, noise se pattern dhundhla hota hai, inconsistency se group by galat hota hai aur redundancy se result duplicate count ho jaata hai.",
        "chips": ["Incomplete", "Noisy", "Inconsistent", "Redundant", "Low quality"]
      },
      {
        "type": "cards",
        "title": "Missing Values Kaise Aate Hain",
        "kicker": "Why Missing",
        "cards": [
          {
            "icon": "alert",
            "title": "Data entry chhoot gayi",
            "body": "Form mein field optional thi, ya user ne skip kiya — blank cell."
          },
          {
            "icon": "server",
            "title": "System failure",
            "body": "Sensor off tha, API timeout hua, ETL job beech mein ruk gaya."
          },
          {
            "icon": "user",
            "title": "Not applicable",
            "body": "Married hone ki date unmarried ke liye, exit date current employee ke liye."
          },
          {
            "icon": "shield",
            "title": "Privacy / refusal",
            "body": "User ne salary ya phone share nahi kiya — deliberately blank."
          },
          {
            "icon": "clock",
            "title": "Time mismatch",
            "body": "Purane records mein naya field hi nahi tha (schema change)."
          },
          {
            "icon": "wrench",
            "title": "Join failure",
            "body": "Do tables ke keys match nahi hue — LEFT JOIN se NULL aa gaya."
          }
        ]
      },
      {
        "type": "points",
        "title": "Isse Model Par Kya Asar Padta Hai",
        "kicker": "Impact",
        "points": [
          "**Bias** — agar missing values ek hi group mein zyada hain, model us group ke liye galat predict karega.",
          "**Accuracy loss** — noise aur outlier se decision boundary bigad jaati hai.",
          "**Crash** — NaN ya string value par algorithm error deta hai.",
          "**Wrong aggregation** — inconsistency (Pune vs pune) se group by do group bana deta hai.",
          "**Double counting** — duplicate rows se sales 2x dikhti hai.",
          "**Slow training** — irrelevant columns se time aur memory waste.",
          "**Galat business decision** — model ka output hi galat to decision bhi galat."
        ]
      },
      {
        "type": "diagram",
        "title": "Need for Pre-processing",
        "kicker": "Diagram",
        "diagram": "ds-preprocessing-need",
        "caption": "Raw table ke problems, dirty data ka chain reaction aur pre-processing ke fayde"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Real data incomplete, noisy, inconsistent aur redundant hota hai.",
          "Missing values ke kaaran: entry gap, system failure, not applicable, privacy, join failure.",
          "Dirty data → wrong training → wrong output → wrong business decision.",
          "Clean data se accuracy, speed aur reliability — teeno better hote hain.",
          "Pre-processing ke bina project ka 80% time debugging mein nikal jaata hai.",
          "Exam line: pre-processing ka goal data ko complete, consistent aur noise-free banana hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Why is data pre-processing needed? Explain the characteristics of real-world data.",
        "answer": "**Data pre-processing ki zaroorat** kyunki real-world data hamesha perfect nahi hota. Standard reasons:\n\n1. **Incomplete data** — attributes missing (salary blank, age `?`), ya important attributes hi nahi hain.\n2. **Noisy data** — random error, typo, wrong sensor reading, outliers (`age = 999`).\n3. **Inconsistent data** — same value alag format mein (`Pune` / `pune`, `45,000` / `45000`, `dd-mm-yyyy` / `yyyy-mm-dd`).\n4. **Redundant data** — duplicate rows ya duplicate attributes (correlated columns).\n5. **Different scales** — salary 45000 vs age 24; distance-based algorithms bigad jaate hain.\n6. **Wrong data types** — date stored as text, amount as string.\n7. **Multiple sources** — CRM, billing, logs ka schema alag.\n\n**Impact:** model accuracy girti hai, training slow hoti hai, bias aata hai, aur business decision galat hota hai (loan reject, stock over-order).\n\n**Diagram:** Refer to Need for Pre-processing diagram."
      },
      {
        "question": "Explain how missing values occur and how they can be handled.",
        "answer": "**Missing values kaise aate hain:**\n- Data entry ke waqt field chhoot gayi.\n- Sensor/device failure ya API timeout.\n- Attribute us record par applicable nahi (unmarried ki wedding date).\n- User ne deliberately share nahi kiya (privacy).\n- Do tables ka join fail hua → NULL.\n- Schema change — purane records mein naya column nahi.\n\n**Handling techniques:**\n1. **Drop rows** — missing bahut kam (<5%) ho to safe.\n2. **Drop column** — 40%+ missing ho to column ka use chhodo.\n3. **Mean / median / mode imputation** — numeric ke liye mean/median, categorical ke liye mode. Outlier ho to median better.\n4. **Constant / \"Unknown\"** — missing ko apni category banao.\n5. **Forward / backward fill** — time series ke liye (last known value).\n6. **KNN / regression imputation** — baaki features se value predict karo.\n7. **Model-based** — XGBoost/LightGBM missing ko khud handle karte hain.\n\n**Dhyan:** imputation ke baad ek `is_missing` flag banao, warna model ko pata nahi chalega ki value original thi ya bhara hua.\n\n**Diagram:** Refer to Need for Pre-processing diagram."
      },
      {
        "question": "How does noisy and inconsistent data affect data mining results?",
        "answer": "**Noisy data (random error / outlier):**\n- Mean aur standard deviation bigad jaate hain (ek 999 age average ko 40 se 55 kar deta hai).\n- Regression line ka slope galat ho jaata hai.\n- Decision tree galat split par branches bana deta hai.\n- Clustering mein noise apna alag cluster bana leta hai.\n- Neural network noise ko pattern samajh kar overfit kar leta hai.\n\n**Inconsistent data (format/code mismatch):**\n- Group by double count karta hai (`Pune` + `pune` = 2 cities).\n- Join fail hota hai (`MH-12` vs `Maharashtra`), records gayab ho jaate hain.\n- Duplicate detection fail hota hai (same customer 2 baar).\n- Reports ka total mismatch — audit issue.\n- Time series mein gap create hota hai (date format galat).\n\n**Handling:**\n- Noise: binning, smoothing (moving average/median), regression fit, clustering.\n- Inconsistency: standard naming dictionary, unit conversion, date normalisation, trim + lower-case, master data management.\n\n**Diagram:** Refer to Need for Pre-processing diagram."
      }
    ]
  },
  {
    "id": "data-cleaning",
    "number": "2.3",
    "title": "Data Cleaning",
    "subtitle": "Missing values, noise, outliers, duplicates aur inconsistency ko theek karna",
    "icon": "wrench",
    "accent": "#00ff88",
    "englishDefinition": "Data cleaning (or data cleansing) is the pre-processing step that detects and corrects inaccurate, incomplete, duplicated or inconsistent records. It handles missing values through deletion or imputation, reduces noise using binning, regression, clustering and smoothing, detects and treats outliers using statistical rules such as the IQR rule and z-score, removes duplicate records, and standardises inconsistent values, codes, units and formats.",
    "intro": "Data cleaning pre-processing ka wo hissa hai jahan sabse zyada time jaata hai. Iska rule simple hai: **pehle problem ko samjho, phir technique chuno** — andhadhund mean se replace karna ya saare outliers delete karna solution nahi hota.",
    "sections": [
      {
        "type": "definition",
        "title": "Data Cleaning Kya Hai",
        "kicker": "Definition",
        "body": "Data cleaning ka matlab hai data ke andar ki galtiyan dhoondhna aur theek karna: khaali cells, galat range ki values, duplicate rows, mismatched formats aur typo — taaki analysis ka result bharosemand rahe.",
        "body2": "Cleaning ke baad ek rule ban jaata hai: **ek row = ek sach** aur **ek column = ek hi unit**. Cleaning ke bina aage ke saare steps (integration, transformation, modelling) galat data par banenge — yaani mehnat barbaad.",
        "chips": ["Missing values", "Noise", "Outliers", "Duplicates", "Standardisation"]
      },
      {
        "type": "cards",
        "title": "Chaar Problems Aur Unke Solutions",
        "kicker": "Techniques",
        "cards": [
          {
            "icon": "alert",
            "title": "Missing Values",
            "body": "Row/column drop, mean/median/mode imputation, forward fill, KNN ya model-based imputation + missing flag."
          },
          {
            "icon": "refresh",
            "title": "Noisy Data",
            "body": "Binning (equal width/frequency), regression fit, clustering, moving average aur typo correction."
          },
          {
            "icon": "target",
            "title": "Outliers",
            "body": "IQR rule (Q1 − 1.5·IQR, Q3 + 1.5·IQR), z-score |z| > 3, box plot, isolation forest; remove ya cap karo."
          },
          {
            "icon": "check",
            "title": "Duplicates + Inconsistency",
            "body": "drop_duplicates, fuzzy matching, unit/date/format standardisation, trim aur lower-case."
          }
        ]
      },
      {
        "type": "points",
        "title": "Outlier Detect Karne Ke Rules",
        "kicker": "Formulas",
        "points": [
          "**IQR rule** — IQR = Q3 − Q1; lower = Q1 − 1.5 × IQR; upper = Q3 + 1.5 × IQR. Iske bahar wali value outlier.",
          "**Z-score** — z = (x − μ) / σ; |z| > 3 ho to outlier (normal distribution ke liye).",
          "**Box plot / scatter plot** — visual detection, especially 1-D aur 2-D mein.",
          "**Isolation Forest / LOF** — machine learning based detection, high dimensional data ke liye.",
          "**Handle kaise karein** — remove, cap (winsorise), log transform, ya alag model banao.",
          "**Yaad rakho** — har outlier galti nahi hota; fraud, VIP customer ya genuine spike bhi outlier dikhta hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Data Cleaning",
        "kicker": "Diagram",
        "diagram": "ds-cleaning",
        "caption": "Missing values, noise, outliers aur duplicates ke techniques with formulas"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Cleaning galtiyan dhoondh kar theek karti hai — missing, noise, outlier, duplicate, inconsistency.",
          "Missing values: drop, impute (mean/median/mode, KNN), forward fill + flag.",
          "Noise: binning, regression, clustering, smoothing.",
          "Outlier: IQR rule, z-score, box plot; remove ya cap karo.",
          "Duplicates: exact + fuzzy match; inconsistency: standardise units, dates, names.",
          "Rule: problem samajh kar technique chuno, aur cleaning ke baad validation zaroor karo."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is data cleaning? Explain the techniques used for handling missing values and noisy data.",
        "answer": "**Data Cleaning:** Data ke andar ki galtiyan — missing values, noise, outliers, duplicates aur inconsistency — dhoondh kar theek karna.\n\n**Missing values:**\n1. **Row deletion** — missing % bahut kam ho.\n2. **Column deletion** — 40%+ missing ho.\n3. **Mean/median/mode imputation** — outlier ho to median.\n4. **Constant/\"Unknown\"** — missing ek category.\n5. **Forward/backward fill** — time series.\n6. **KNN / regression imputation** — related features se predict.\n7. **Model native handling** — XGBoost/LightGBM.\n\n**Noisy data:**\n1. **Binning** — equal-width ya equal-frequency bins, bin mean/median se smooth.\n2. **Regression** — fit line/curve se value replace.\n3. **Clustering** — similar values ko cluster mein daal kar outlier detect.\n4. **Smoothing** — moving average, median filter, LOWESS.\n5. **Manual/typo correction** — dictionary, spell check, standard mapping.\n\n**Diagram:** Refer to Data Cleaning diagram."
      },
      {
        "question": "How do you detect and treat outliers in a dataset?",
        "answer": "**Outlier:** Aisi observation jo baaki data se bahut door hai — measurement error, data entry error ya genuine rare event.\n\n**Detection:**\n1. **IQR rule (box plot)** — `IQR = Q3 − Q1`; outlier agar `x < Q1 − 1.5·IQR` ya `x > Q3 + 1.5·IQR`. Example: marks 10–90, ek value 300.\n2. **Z-score** — `z = (x − μ)/σ`; `|z| > 3` outlier. (Normal distribution assumption.)\n3. **Modified z-score (MAD)** — median based, robust alternative.\n4. **Scatter / histogram / box plot** — visual detection.\n5. **Isolation Forest, LOF, DBSCAN** — multivariate outlier detection.\n\n**Treatment:**\n- **Remove** — agar clearly error ho (age 999).\n- **Cap / winsorise** — 1st–99th percentile par clip.\n- **Transform** — log ya sqrt se skew kam.\n- **Impute** — mean/median se replace (kam cases).\n- **Keep + flag** — genuine rare event (fraud) ke liye alag feature.\n- **Robust model** — tree-based models outlier se kam affected hote hain.\n\n**Diagram:** Refer to Data Cleaning diagram."
      },
      {
        "question": "Explain data cleaning with respect to duplicates and inconsistent data.",
        "answer": "**Duplicates:**\n- **Exact duplicates** — poori row same. Detect: `duplicated()`; Remove: `drop_duplicates()`.\n- **Fuzzy duplicates** — same entity, thoda alag (`Riya Sharma` / `riya s.` / `R. Sharma`). Detect: fuzzy matching (edit distance, soundex, email/phone match), record linkage.\n- **Cause:** double form submit, multiple source systems, manual entry, ETL dobara chalna.\n- **Asar:** counts double, average galat, marketing same customer ko 2 baar mail bhejta hai.\n\n**Inconsistent data:**\n- **Case/space** — `Pune`, `pune`, ` Pune ` → trim + lower-case + standard dictionary.\n- **Units** — kg vs g, km vs mile, Rs vs $ → ek base unit par convert.\n- **Date formats** — `01-02-2025` (dd-mm) vs `2025-02-01` → ISO `yyyy-mm-dd`.\n- **Codes** — `M`/`Male`/`1` → single code list (master data).\n- **Derived inconsistency** — total ≠ qty × price → recompute aur validate.\n- **Missing standard** — pincode 5 digit vs 6 digit.\n\n**Tools:** pandas, OpenRefine, Excel Power Query, SQL constraints, dbt tests.\n\n**Diagram:** Refer to Data Cleaning diagram."
      }
    ]
  },
  {
    "id": "data-integration",
    "number": "2.4",
    "title": "Data Integration",
    "subtitle": "Kai heterogeneous sources ko ek consistent dataset mein jodna",
    "icon": "network",
    "accent": "#ff8800",
    "englishDefinition": "Data integration is the process of combining data from multiple heterogeneous sources, such as databases, data warehouses, flat files and web services, into a single, coherent and consistent data store. It involves schema matching and mapping, entity identification and resolution, handling redundancy through correlation analysis, resolving value conflicts, and tracking the lineage of the integrated data so that analysts can trust and trace the result.",
    "intro": "Ek hi company ke paas data kai jagah hota hai — CRM mein customer, billing mein payment, website logs mein clicks, Excel mein manual entries. Data integration in sab ko jod kar ek hi consistent view banata hai, jise **single source of truth** kehte hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Data Integration Kya Hai",
        "kicker": "Definition",
        "body": "Data integration multiple sources ka data combine karke ek unified schema aur consistent values wala dataset banata hai. Isme teen kaam hote hain: schema match karna, same entity ko pehchanna (entity resolution) aur conflict resolve karna.",
        "body2": "Iska output analysis aur reporting ke liye use hota hai. Integration ke bina har department apna number dikhata hai — sales ka total billing se match nahi karta, aur management meeting mein debate data par hoti hai, decision par nahi.",
        "chips": ["Multiple sources", "Schema matching", "Entity resolution", "Redundancy", "Lineage"]
      },
      {
        "type": "cards",
        "title": "Integration Ke 4 Challenge",
        "kicker": "Challenges",
        "cards": [
          {
            "icon": "search",
            "title": "Entity Identification",
            "body": "“Riya Sharma”, “riya s.”, “R. Sharma” — kya ek hi insaan hai? Email/phone/pan se match karo."
          },
          {
            "icon": "layers",
            "title": "Schema Conflict",
            "body": "Cust_id vs customer_no, amount in Rs vs $, date formats alag — mapping aur conversion chahiye."
          },
          {
            "icon": "refresh",
            "title": "Redundancy",
            "body": "Duplicate attribute ya duplicate row — correlation ≈ 1 aur chi-square test se detect karo."
          },
          {
            "icon": "file",
            "title": "Tuple Duplication",
            "body": "Same record do sources mein — master record banao, source ko flag karo."
          }
        ]
      },
      {
        "type": "points",
        "title": "Integration Kaise Karte Hain",
        "kicker": "How To Integrate",
        "points": [
          "**Common key banao** — har source mein unique customer_id (surrogate key) generate karo.",
          "**Schema mapping** — source column ko target column se map karo (document karo).",
          "**Data dictionary** — naming standard: `customer_id`, `order_date`, `amount_inr`.",
          "**Unit / format conversion** — currency, date, pincode sab ek standard par.",
          "**Entity resolution** — fuzzy matching + deterministic rules (email exact, phone last 10 digit).",
          "**Conflict resolution** — kaunsa source priority rakhega (billing > CRM for amount).",
          "**Lineage + metadata** — kis record ka source kya hai, ye save karo."
        ]
      },
      {
        "type": "diagram",
        "title": "Data Integration",
        "kicker": "Diagram",
        "diagram": "ds-integration",
        "caption": "Multiple sources → integration engine → unified table, plus 4 challenges aur solutions"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Integration multiple sources ko ek consistent dataset mein jodta hai.",
          "Char challenges: entity identification, schema conflict, redundancy, tuple duplication.",
          "Solution: common/surrogate key, data dictionary, fuzzy matching, unit conversion.",
          "Conflict resolution rule pehle decide karo — authority source kaun hai.",
          "Lineage (source tracking) ke bina galat number ka root cause nahi milega.",
          "Result: single source of truth — reporting aur ML dono ke liye zaroori."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is data integration? Explain the issues in data integration.",
        "answer": "**Data Integration:** Multiple heterogeneous sources (databases, files, APIs, logs) ka data combine karke ek consistent, unified data store banana.\n\n**Process:** schema matching → mapping → entity resolution → conflict resolution → validation → lineage.\n\n**Issues / challenges:**\n1. **Entity identification** — same real-world entity different sources mein different naam se (`Riya Sharma` / `R. Sharma`). Solution: email/phone/ID se matching, fuzzy matching.\n2. **Schema conflict** — column names aur types alag (`cust_id` vs `customer_no`), structure alag (normalised vs flat). Solution: mapping table.\n3. **Value conflict** — same attribute ke different values (billing ₹45000, CRM ₹42000). Solution: priority rule / latest source.\n4. **Redundancy** — duplicate attributes ya duplicate rows. Detect: correlation (~1), chi-square; remove with dedupe.\n5. **Unit/format mismatch** — kg vs g, dd-mm-yyyy vs yyyy-mm-dd.\n6. **Scalability** — bade volume par join slow.\n7. **Data quality** — ek source dirty ho to poora integrated view dirty.\n\n**Diagram:** Refer to Data Integration diagram."
      },
      {
        "question": "Explain entity identification and redundancy analysis in data integration.",
        "answer": "**Entity identification (object identification):** Decide karna ki do records same real-world entity ko represent karte hain ya nahi.\n\n- **Deterministic matching** — exact key match (email, phone, PAN, customer ID).\n- **Fuzzy / probabilistic matching** — naam ki similarity (Levenshtein distance), phonetic (Soundex), DOB + city combination.\n- **Blocking** — pehle candidate pairs banao (same pincode), phir compare — bade data ke liye zaroori.\n- **Merge rules** — jeetne wali value (latest, most complete, trusted source).\n\n**Redundancy analysis:** Do attributes agar ek doosre se strongly related hain to ek duplicate information hai.\n\n- **Numeric:** correlation coefficient (`r ≈ 1` ya `r ≈ −1`) — ek feature hata do.\n- **Categorical:** chi-square test — association strong ho to redundancy.\n- **Row-level:** duplicate tuples detect karke merge.\n- **Fayda:** storage kam, training fast, multicollinearity kam.\n\n**Diagram:** Refer to Data Integration diagram."
      },
      {
        "question": "What is ETL in the context of data integration? Explain its role.",
        "answer": "**ETL (Extract, Transform, Load):** Data integration ka practical implementation — sources se data nikalna, saaf/standard karna, aur target warehouse mein daalna.\n\n**Extract:** full ya incremental extract, CDC, staging area mein raw copy.\n**Transform:** cleaning, standardisation, schema mapping, joins, aggregation, derivations — yahi integration ka asli kaam hota hai.\n**Load:** dimension pehle, fact baad mein; full refresh ya upsert; validation ke saath.\n\n**Data integration mein ETL ka role:**\n1. Multiple sources ko **ek schema** par laata hai.\n2. Keys generate karke **entity resolution** support karta hai.\n3. **Conflict rules** apply karta hai (priority source).\n4. **Lineage** save karta hai (kaunsa column kis source se).\n5. **Data quality checks** chalata hai (null %, duplicate, reconciliation).\n\n**ELT variant:** cloud warehouse mein pehle load karke andar transform (dbt) — bade data ke liye faster.\n\n**Diagram:** Refer to Data Integration diagram."
      }
    ]
  },
  {
    "id": "data-transformation",
    "number": "2.5",
    "title": "Data Transformation",
    "subtitle": "Normalisation, encoding, discretisation, aggregation aur attribute construction",
    "icon": "loop",
    "accent": "#aa00ff",
    "englishDefinition": "Data transformation is the pre-processing step that converts data into appropriate forms for mining by applying operations such as smoothing, aggregation, generalisation, normalisation (min-max and z-score), attribute construction and encoding of categorical variables, and discretisation of continuous variables into bins, so that all features are on comparable scales and in a form the algorithm can consume.",
    "intro": "Algorithm ko numbers chahiye, aur numbers bhi comparable scale par. Agar ek column salary (45,000) hai aur doosra age (24), to KNN ya K-means salary ko hi zyada importance dega. Data transformation yahi problem solve karta hai — scale ek karta hai, text ko number banata hai aur naye useful features deta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Data Transformation Kya Hai",
        "kicker": "Definition",
        "body": "Transformation data ko us form mein badalta hai jo algorithm samajh sake aur sahi weight de — scale same karke, category ko number mein convert karke, continuous value ko bins mein daal kar aur naye attributes bana kar.",
        "body2": "Yaad rakhne ka order: **clean → integrate → transform → reduce**. Transformation clean data par hi lagana chahiye, warna aap noise ko bhi scale kar denge. Aur fit (mean, min-max) sirf training data par karo, warna data leakage ho jaayega.",
        "chips": ["Normalisation", "Encoding", "Discretisation", "Aggregation", "New attributes"]
      },
      {
        "type": "cards",
        "title": "Main Techniques",
        "kicker": "Techniques",
        "cards": [
          {
            "icon": "ruler",
            "title": "Normalisation",
            "body": "Min-max: x' = (x − min)/(max − min) → 0..1. Z-score: z = (x − μ)/σ → mean 0, SD 1."
          },
          {
            "icon": "table",
            "title": "Encoding",
            "body": "One-hot (nominal), label (ordinal), binary, TF-IDF (text), embeddings."
          },
          {
            "icon": "target",
            "title": "Discretisation",
            "body": "Continuous → bins: equal-width, equal-frequency, custom domain bins, concept hierarchy."
          },
          {
            "icon": "refresh",
            "title": "Smoothing/Aggregation",
            "body": "Moving average, median filter, log transform, daily → monthly summary."
          }
        ]
      },
      {
        "type": "points",
        "title": "Kab Kaunsa Transform",
        "kicker": "Which When",
        "points": [
          "**Min-max** — jab algorithm distance/neural network ho aur data mein outlier kam ho.",
          "**Z-score** — outlier ho ya algorithm mean/SD maangta ho (PCA, logistic regression).",
          "**Log / sqrt** — right-skewed data (income, sales, counts) ko linear banane ke liye.",
          "**One-hot** — nominal category jab unique values kam hon (city, payment mode).",
          "**Label encoding** — ordinal category (small < medium < large) ya tree-based model ke liye.",
          "**Binning** — jab relationship non-linear ho ya interpretability chahiye (age group).",
          "**Attribute construction** — raw columns se naya useful feature (BMI, total amount, day of week)."
        ]
      },
      {
        "type": "diagram",
        "title": "Data Transformation",
        "kicker": "Diagram",
        "diagram": "ds-transformation",
        "caption": "Scaling formulas, encoding, binning, smoothing aur attribute construction"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Transformation data ko algorithm-compatible form mein laata hai.",
          "Normalisation: min-max (0–1) aur z-score (mean 0, SD 1).",
          "Encoding: one-hot nominal ke liye, label ordinal ke liye.",
          "Discretisation continuous value ko bins mein daalta hai.",
          "Smoothing noise kam karta hai, aggregation summary deta hai.",
          "Fit train par, apply test par — warna data leakage."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is data transformation? Explain normalisation methods with formulas and examples.",
        "answer": "**Data Transformation:** Data ko aise form mein badalna jo algorithm ke liye suitable ho — same scale, numeric encoding, bins aur naye attributes.\n\n**1. Min-Max Normalisation**\n`x' = (x − min) / (max − min)`\n- Range 0 se 1. Example: salary 30k, 45k, 60k → 0, 0.5, 1.\n- ✔ Simple, range fixed · ✘ outlier se poori scale bigad jaati hai.\n\n**2. Z-score Standardisation**\n`z = (x − μ) / σ`\n- Mean 0, SD 1. Example: marks μ=60, σ=10 → 70 ka z = 1.0.\n- ✔ Outlier ke liye better, PCA/regression ke liye standard · ✘ bounded nahi.\n\n**3. Decimal Scaling**\n`x' = x / 10^j` (j = max absolute value ke digits)\n- Example: 986 → 0.986.\n\n**4. Log / sqrt transform** — skewed data: `log(1 + x)`.\n\n**Kab kya:** distance-based (KNN, K-means) → scaling zaroori; tree-based (Random Forest, XGBoost) → scaling optional.\n\n**Diagram:** Refer to Data Transformation diagram."
      },
      {
        "question": "Explain discretisation and concept hierarchy with examples.",
        "answer": "**Discretisation (binning):** Continuous variable ko finite intervals (bins) mein badalna, taaki data simple aur interpretable ho jaaye.\n\n**Methods:**\n1. **Equal-width** — range ko barabar hisson mein: age 0–80 → 0–20, 21–40, 41–60, 61–80. Problem: skewed data mein kuch bins khaali.\n2. **Equal-frequency (quantile)** — har bin mein same number of records: 1000 rows → 4 bins × 250 rows.\n3. **Custom / domain based** — business rules: 0–18 minor, 19–30 young, 31–45 mid, 46+ senior.\n4. **K-means binning** — clusters ke boundary par bins.\n\n**Concept hierarchy:** Value ko uske upar ke level par generalise karna — `Pune → Maharashtra → India`, `24 Jan 2025 → Jan 2025 → Q1 2025 → 2025`. Isse roll-up/drill-down (OLAP) possible hota hai.\n\n**Fayde:** noise kam, non-linear relation capture, interpretability, storage kam.\n**Nuksaan:** information loss, bin boundary par sensitivity.\n\n**Example:** price 499, 520, 480 → bin \"budget\"; 1500, 1600 → \"premium\".\n\n**Diagram:** Refer to Data Transformation diagram."
      },
      {
        "question": "What is attribute construction? Why is it useful? Give examples.",
        "answer": "**Attribute construction (feature construction):** Existing attributes se naye, zyada informative attributes banana.\n\n**Examples:**\n- `dob` → `age`, `age_group`\n- `order_date` → `day_of_week`, `month`, `is_weekend`, `quarter`\n- `price` × `quantity` → `total_amount`\n- `weight`, `height` → `BMI = w / h²`\n- `first_name` + `last_name` → `full_name`\n- `clicks` / `impressions` → `CTR`\n- `last_login` − `today` → `days_since_login`\n\n**Kyun useful:**\n1. **Signal strong** — raw column se zyada predictive power (days_since_login churn ka best feature).\n2. **Interpretability** — business ko samajhna aasan.\n3. **Model simplicity** — simple model bhi achha perform karta hai.\n4. **Domain knowledge encode** — rules feature mein daal do.\n5. **Missing interaction capture** — ratio/difference se do variables ka relation.\n\n**Dhyan:** leakage na ho (future information use na karo) aur naye features ka count control rakho.\n\n**Diagram:** Refer to Data Transformation diagram."
      }
    ]
  },
  {
    "id": "data-reduction",
    "number": "2.6",
    "title": "Data Reduction",
    "subtitle": "Volume kam karo par information bachaao — dimensionality, numerosity, compression",
    "icon": "down",
    "accent": "#00d4ff",
    "englishDefinition": "Data reduction is the pre-processing technique that obtains a reduced representation of the data set which is much smaller in volume but still produces almost the same analytical results. It includes dimensionality reduction (feature selection and feature extraction such as PCA), numerosity reduction (sampling, histograms, clustering and regression models) and data compression (lossless and lossy).",
    "intro": "Bada data hamesha achha nahi hota — 1000 columns aur 10 lakh rows par model train karna slow aur overfit-prone hota hai. Reduction ka rule: **size kam karo, matlab wahi rakho**. Aur reduction ke baad accuracy compare karna zaroori hai — kabhi information chhup ke chali jaati hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Data Reduction Kya Hai",
        "kicker": "Definition",
        "body": "Data reduction dataset ka chhota representation banata hai — kam rows, kam columns ya kam storage — lekin analysis ka result lagbhag same rehta hai.",
        "body2": "Iske teen hisse hain: **dimensionality reduction** (columns kam), **numerosity reduction** (rows kam) aur **compression** (size kam). Reduction se training fast hoti hai, storage bachta hai aur overfitting kam hota hai.",
        "chips": ["Fewer columns", "Fewer rows", "Compression", "Same insight", "Faster model"]
      },
      {
        "type": "cards",
        "title": "Teen Categories",
        "kicker": "Categories",
        "cards": [
          {
            "icon": "layers",
            "title": "Dimensionality Reduction",
            "body": "Feature selection (filter, wrapper, embedded) aur feature extraction (PCA, LDA, autoencoder)."
          },
          {
            "icon": "list",
            "title": "Numerosity Reduction",
            "body": "Sampling (random, stratified, cluster), histogram, clustering, regression model."
          },
          {
            "icon": "down",
            "title": "Compression",
            "body": "Lossless (gzip, snappy) aur lossy (wavelet, JPEG); columnar + dictionary encoding (Parquet)."
          },
          {
            "icon": "target",
            "title": "Feature Selection",
            "body": "Sirf important features rakho — model interpretable rehta hai."
          },
          {
            "icon": "cube",
            "title": "Feature Extraction",
            "body": "Naye components banao — PCA, variance preserve karta hai par interpretability kam."
          },
          {
            "icon": "grid",
            "title": "Sampling",
            "body": "Representative subset — class balance (stratified) dhyan rakho."
          }
        ]
      },
      {
        "type": "points",
        "title": "Dhyan Rakhne Wali Baatein",
        "kicker": "Care Points",
        "points": [
          "**Accuracy compare karo** — reduction ke baad same test par evaluate karo; bada drop ho to reduction zyada aggressive hai.",
          "**Rare class na kho** — fraud/rare disease rows random sampling se gayab ho sakti hain → stratified sampling.",
          "**Leakage se bacho** — PCA/scaling fit sirf train par, phir test par transform.",
          "**Interpretability** — PCA components ka business meaning nahi hota; compliance mein feature selection better.",
          "**Threshold** — PCA mein 90–95% explained variance ka target rakho.",
          "**Pipeline mein daalo** — reduction ko reproducible step banao (sklearn Pipeline, dbt model)."
        ]
      },
      {
        "type": "diagram",
        "title": "Data Reduction",
        "kicker": "Diagram",
        "diagram": "ds-reduction",
        "caption": "Dimensionality, numerosity aur compression — techniques, examples aur care points"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Reduction volume kam karta hai par analysis ka result lagbhag same rakhta hai.",
          "Dimensionality reduction: feature selection (filter/wrapper/embedded) aur PCA/LDA.",
          "Numerosity reduction: sampling, histogram, clustering, regression.",
          "Compression: lossless (gzip) aur lossy (wavelet, JPEG).",
          "PCA = correlated columns ko orthogonal components mein badalna, variance preserve karke.",
          "Reduction ke baad accuracy verify karo aur sampling mein rare class bachaao."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is data reduction? Explain dimensionality reduction, numerosity reduction and compression.",
        "answer": "**Data Reduction:** Dataset ka chhota representation banana jisme volume kam ho par analytical result lagbhag same rahe.\n\n**1. Dimensionality reduction (columns kam):**\n- **Feature selection** — original features mein se important chunna: filter (correlation, chi-square), wrapper (forward/backward selection, RFE), embedded (Lasso, tree importance).\n- **Feature extraction** — naye features banana: PCA (variance maximise, orthogonal components), LDA (class separation), autoencoder.\n- Example: 1000 columns → 12 PCA components = 95% variance.\n\n**2. Numerosity reduction (rows kam):**\n- **Sampling** — random, stratified (class balance), cluster sampling.\n- **Histogram** — distribution ka summary.\n- **Clustering** — cluster representative se data summarise.\n- **Regression / log-linear model** — fit model se data represent.\n- Example: 1 lakh rows → 10,000 representative rows.\n\n**3. Data compression (size kam):**\n- **Lossless** — gzip, snappy, Parquet columnar + dictionary encoding.\n- **Lossy** — wavelet transform, JPEG, quantisation.\n- Example: 4 GB CSV → 600 MB Parquet.\n\n**Diagram:** Refer to Data Reduction diagram."
      },
      {
        "question": "Explain PCA. What are its advantages and limitations?",
        "answer": "**PCA (Principal Component Analysis):** Dimensionality reduction ki technique jo correlated features ko naye **orthogonal components** mein transform karti hai, jahan pehla component sabse zyada variance (information) hold karta hai.\n\n**Kaam kaise karta hai:**\n1. Data ko standardise karo (z-score).\n2. Covariance matrix nikalo.\n3. Eigenvalues/eigenvectors compute karo.\n4. Top-k eigenvectors chuno (jinke eigenvalue bade).\n5. Data ko un components par project karo.\n\n**Advantages:**\n- Multicollinearity hataata hai (components independent hote hain).\n- Training fast, storage kam, overfitting kam.\n- Visualisation (2D/3D projection).\n\n**Limitations:**\n- **Interpretability khatam** — \"PC1\" ka business meaning nahi hota.\n- **Scaling par sensitive** — scale kiye bina PCA galat result deta hai.\n- **Outlier sensitive** — robust PCA chahiye ho sakta hai.\n- **Class separation ignore** — PLS/LDA supervised alternatives hain.\n\n**Diagram:** Refer to Data Reduction diagram."
      },
      {
        "question": "What is sampling? Explain the types used in data reduction with precautions.",
        "answer": "**Sampling:** Poori population se ek representative subset lena — data reduction ka sabse simple tareeka.\n\n**Types:**\n1. **Simple random sampling** — har row ka equal chance. Bias-free, par rare classes miss ho sakti hain.\n2. **Stratified sampling** — population ko groups (strata) mein baanto aur har group se proportional sample lo. Class imbalance ke liye best.\n3. **Systematic sampling** — har k-th row (1 in 10).\n4. **Cluster sampling** — poore clusters (city, store) select karo.\n5. **Reservoir sampling** — streaming/bade data ke liye.\n\n**Precautions:**\n- **Class balance** — fraud 0.5% hai to random sample se model ko fraud examples hi nahi milenge → stratified + oversampling (SMOTE).\n- **Time leakage** — future data sample mein na aaye; time-based split karo.\n- **Representativeness** — sample ka distribution population se compare karo.\n- **Sample size** — chhota sample = high variance result.\n- **Reproducibility** — random seed fix karo.\n\n**Fayda:** fast training, kam cost; **nuksaan:** information loss aur bias risk.\n\n**Diagram:** Refer to Data Reduction diagram."
      }
    ]
  },
  {
    "id": "data-warehouse-basics",
    "number": "2.7",
    "title": "Data Warehouse and Its Characteristics",
    "subtitle": "Subject-oriented, integrated, time-variant aur non-volatile repository",
    "icon": "warehouse",
    "accent": "#ff0080",
    "englishDefinition": "A data warehouse is a subject-oriented, integrated, time-variant and non-volatile collection of data in support of management's decision-making process (W. H. Inmon). It is built by extracting data from heterogeneous operational sources through ETL, is maintained separately from operational systems, stores historical as well as summarised data, and provides a single integrated source for reporting, OLAP and analytics.",
    "intro": "Operational database roz ka kaam chalata hai — order lena, payment lena, stock update karna. Data warehouse uska ulta hai: ye **analysis** ke liye banta hai. Isme data copy hota hai, history ke saath, aur ek baar load hone ke baad sirf padha jaata hai — update nahi hota.",
    "sections": [
      {
        "type": "definition",
        "title": "Data Warehouse Kya Hai",
        "kicker": "Definition",
        "body": "Data warehouse ek central repository hai jahan different operational systems ka data ETL ke through aakar, ek consistent format mein, history ke saath, analysis ke liye rakha jaata hai.",
        "body2": "Inmon ki definition ke chaar keyword hi poora concept hain: **Subject-oriented** (analysis ke subject ke hisaab se), **Integrated** (ek hi standard format), **Time-variant** (history ke saath) aur **Non-volatile** (load ke baad update nahi). Ye chaar milkar warehouse ko reporting ke liye bharosemand banate hain.",
        "chips": ["Subject-oriented", "Integrated", "Time-variant", "Non-volatile", "Inmon"]
      },
      {
        "type": "cards",
        "title": "Chaar Characteristics",
        "kicker": "S-I-T-N",
        "cards": [
          {
            "icon": "target",
            "title": "Subject-Oriented",
            "body": "Data analysis ke subject ke hisaab se organise hota hai — sales, customer, product, inventory. Application ke hisaab se nahi."
          },
          {
            "icon": "network",
            "title": "Integrated",
            "body": "Kai sources ka data ek consistent format mein: same naming, same unit, same code. Pune/pune aur kg/g jaise conflicts resolve."
          },
          {
            "icon": "clock",
            "title": "Time-Variant",
            "body": "Har record ke saath time hota hai; 5–10 saal ke snapshots. Current value ke bajaye trend aur comparison possible."
          },
          {
            "icon": "lock",
            "title": "Non-Volatile",
            "body": "Load ke baad data update/delete nahi hota — sirf read aur periodic refresh. Isliye report reproducibility milti hai."
          }
        ]
      },
      {
        "type": "points",
        "title": "Operational DB vs Warehouse",
        "kicker": "Comparison",
        "points": [
          "**Purpose** — OLTP: transaction chalana; DW: analysis aur decision support.",
          "**Data** — OLTP: current, detailed; DW: historical, summarised.",
          "**Operations** — OLTP: insert/update/delete; DW: bulk load + read-only query.",
          "**Design** — OLTP: normalised (3NF); DW: dimensional (star/snowflake).",
          "**Query** — OLTP: chhoti, simple, hazaaron users; DW: badi, complex, kuch analysts.",
          "**Size** — OLTP: GB; DW: TB–PB.",
          "**Refresh** — OLTP: real time; DW: batch (raat) ya micro-batch."
        ]
      },
      {
        "type": "diagram",
        "title": "Data Warehouse",
        "kicker": "Diagram",
        "diagram": "ds-dw-intro",
        "caption": "S-I-T-N characteristics aur OLTP vs data warehouse comparison"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Data warehouse analysis ke liye bana central, integrated, historical data store hai.",
          "Chaar characteristics: subject-oriented, integrated, time-variant, non-volatile (S-I-T-N).",
          "Inmon ne ise decision support ke liye define kiya; Kimball ne dimensional modelling di.",
          "Operational DB (OLTP) transaction ke liye, warehouse (OLAP) analysis ke liye.",
          "Data mart ek department ka chhota warehouse hota hai.",
          "Warehouse ka data ETL se aata hai aur read-only rehta hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define data warehouse. Explain its characteristics.",
        "answer": "**Data Warehouse:** A subject-oriented, integrated, time-variant and non-volatile collection of data in support of management's decision-making process (Inmon).\n\n**1. Subject-oriented:** Data application ke bajaye analysis ke subject ke hisaab se organise hota hai — sales, customer, product, inventory. Example: billing system order-wise data rakhta hai, warehouse customer-wise sales rakhta hai.\n\n**2. Integrated:** Multiple sources ka data ek consistent format mein aata hai — same naming convention, same codes, same units. `Pune`/`pune`, `kg`/`g`, `dd-mm-yyyy`/`yyyy-mm-dd` — sab resolve ho jaate hain.\n\n**3. Time-variant:** Har record ke saath time dimension hota hai; data 5–10 saal ka history rakhta hai. Isse trend, YoY comparison aur forecasting possible hoti hai — operational DB sirf current value rakhta hai.\n\n**4. Non-volatile:** Load hone ke baad data update ya delete nahi hota; sirf read aur periodic refresh. Isliye same report dobara chalane par same answer milta hai (reproducibility).\n\n**Diagram:** Refer to Data Warehouse diagram."
      },
      {
        "question": "Differentiate between operational database and data warehouse.",
        "answer": "| Point | Operational DB (OLTP) | Data Warehouse (OLAP) |\n|---|---|---|\n| Purpose | Roz ka transaction | Analysis, decision support |\n| Data | Current, detailed | Historical, summarised |\n| Operations | Insert, update, delete | Bulk load, read-only |\n| Design | Normalised (3NF) | Dimensional (star/snowflake) |\n| Query | Short, simple, indexed | Long, complex, full scan |\n| Users | Hazaaron (clerk, app) | Kuch sau (analyst, manager) |\n| Size | GB | TB – PB |\n| Refresh | Real time | Batch / micro-batch |\n| Index | B-tree on rows | Bitmap, columnar, cube |\n| Example | Billing, banking core | Sales warehouse, BI mart |\n\n**Ek line:** OLTP likhta hai aur chalata hai; warehouse padhta hai aur samajhta hai.\n\n**Diagram:** Refer to Data Warehouse diagram."
      },
      {
        "question": "Explain data warehouse, data mart and data lake with differences.",
        "answer": "**Data Warehouse:** Central, structured, modelled repository with full company history — subject-oriented, integrated, time-variant, non-volatile. Query-ready, schema-on-write.\n\n**Data Mart:** Warehouse ka chhota, department-specific version (sales mart, HR mart, finance mart). Scope kam, build fast, ownership clear. Dependent mart (warehouse se banta hai) ya independent mart (direct sources se).\n\n**Data Lake:** Raw data ka store — files, JSON, logs, images — schema-on-read. Cheap storage (S3/GCS/HDFS), ML aur unstructured data ke liye achha, par governance ke bina \"data swamp\" ban jaata hai.\n\n| Point | Warehouse | Mart | Lake |\n|---|---|---|---|\n| Scope | Poora enterprise | Ek department | Sab kuch (raw) |\n| Schema | On write | On write | On read |\n| Data | Structured, modelled | Structured subset | Raw, any format |\n| Users | Analysts, BI | Dept analysts | Data scientists |\n| Cost/size | Medium | Small | Very large, cheap |\n\n**Lakehouse:** lake ka storage + warehouse ka governance/model — modern default (Delta, Iceberg).\n\n**Diagram:** Refer to Data Warehouse diagram."
      }
    ]
  },
  {
    "id": "data-warehouse-architecture",
    "number": "2.8",
    "title": "Data Warehouse Architecture",
    "subtitle": "3-tier architecture — source, ETL, warehouse, marts aur reporting",
    "icon": "layers",
    "accent": "#00ff88",
    "englishDefinition": "A data warehouse architecture describes the components and their relationships: source systems and the data staging area, the ETL layer that extracts, cleans and transforms data, the central data warehouse with its metadata repository, dependent data marts, and the presentation layer of reporting, OLAP and analytics tools. Architectures are described using three tiers — the data acquisition (bottom) tier, the data storage tier and the presentation (top) tier — and can be built top-down (Inmon) or bottom-up (Kimball).",
    "intro": "Architecture ka matlab hai: data kahan se aayega, kahan saaf hoga, kahan rahega aur user tak kaise pahunchega. Iska ek simple flow yaad rakho — **sources → staging → ETL → warehouse → data marts → BI tools**.",
    "sections": [
      {
        "type": "definition",
        "title": "Teen Tier Architecture",
        "kicker": "Definition",
        "body": "Data warehouse architecture ko teen tier mein dekha jaata hai: **bottom tier** (source systems + staging + ETL), **middle tier** (central warehouse + metadata + OLAP server) aur **top tier** (reporting, dashboards, data mining tools).",
        "body2": "Har tier ka apna kaam hai. Bottom tier data ko laata aur saaf karta hai; middle tier use store, model aur aggregate karta hai; top tier use user tak pahunchata hai. Metadata poore system ka index hai — uske bina warehouse black box ban jaata hai.",
        "chips": ["Bottom tier", "Middle tier", "Top tier", "Staging", "Metadata"]
      },
      {
        "type": "cards",
        "title": "Architecture Ke Components",
        "kicker": "Components",
        "cards": [
          {
            "icon": "server",
            "title": "Source Systems",
            "body": "ERP, CRM, billing, POS, website logs, Excel, external APIs — operational data ka ghar."
          },
          {
            "icon": "refresh",
            "title": "Staging Area",
            "body": "ETL se pehle raw copy — validation, dedupe aur recovery ke liye."
          },
          {
            "icon": "layers",
            "title": "Central Warehouse",
            "body": "Integrated, historical, modelled data (star/snowflake) — single source of truth."
          },
          {
            "icon": "grid",
            "title": "Data Marts",
            "body": "Department-specific subset — sales, finance, HR mart, fast queries ke liye."
          },
          {
            "icon": "doc",
            "title": "Metadata Repository",
            "body": "Schema, definitions, lineage, ETL job history, data quality results."
          },
          {
            "icon": "dashboard",
            "title": "Presentation Tools",
            "body": "Power BI, Tableau, SQL, Excel, Python, OLAP cubes."
          }
        ]
      },
      {
        "type": "points",
        "title": "Build Strategies",
        "kicker": "Top-down vs Bottom-up",
        "points": [
          "**Top-down (Inmon)** — pehle enterprise-level normalised data warehouse banao, phir marts. Fayda: consistency; nuksaan: mehnga aur slow.",
          "**Bottom-up (Kimball)** — pehle departmental data marts (star schema) banao, phir unhe integrate karo. Fayda: fast value delivery; nuksaan: consistency risk.",
          "**Hybrid** — central warehouse + dependent marts; aaj kal sabse common.",
          "**Data Vault** — detail-oriented, audit-friendly modelling (hub, link, satellite).",
          "**Lakehouse** — cloud storage + warehouse-style modelling (Delta Lake, Iceberg).",
          "**Two-tier / three-tier** — kya OLAP server middleware chahiye ya direct warehouse query chalega."
        ]
      },
      {
        "type": "diagram",
        "title": "DW Architecture",
        "kicker": "Diagram",
        "diagram": "ds-dw-architecture",
        "caption": "Sources, ETL, warehouse, metadata, data marts, tools, tier labels aur build approaches"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "3 tiers: acquisition (sources + ETL), storage (warehouse + metadata), presentation (BI).",
          "Staging area raw copy rakhta hai — recovery aur validation ke liye.",
          "Metadata schema, definition, lineage aur quality results rakhta hai.",
          "Data marts department-specific subset hain, queries fast karte hain.",
          "Top-down (Inmon) consistent par slow; bottom-up (Kimball) fast par risk.",
          "Aaj kal lakehouse/hybrid architecture common hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the three-tier architecture of a data warehouse.",
        "answer": "**Data warehouse architecture ke 3 tiers:**\n\n**1. Bottom tier — Data acquisition:**\n- **Source systems:** ERP, CRM, billing, POS, web logs, Excel, external APIs.\n- **Staging area:** raw extract ka copy, validation aur recovery.\n- **ETL:** extract → transform (clean, conform, integrate) → load.\n\n**2. Middle tier — Data storage:**\n- **Central data warehouse:** integrated, historical, subject-oriented data; star/snowflake schema.\n- **Metadata repository:** schema, definitions, lineage, ETL history, DQ results.\n- **OLAP server (optional):** ROLAP/MOLAP/HOLAP cubes for fast aggregation.\n\n**3. Top tier — Presentation:**\n- BI tools (Power BI, Tableau), SQL clients, Excel, Python notebooks.\n- Dashboards, reports, ad-hoc queries, data mining/ML.\n\n**Data flow:** source → staging → ETL → warehouse → data mart → BI tool → user.\n\n**Diagram:** Refer to DW Architecture diagram."
      },
      {
        "question": "Differentiate between top-down and bottom-up approaches of data warehouse design.",
        "answer": "**Top-down (Inmon):**\n- Pehle enterprise-wide **normalised** (3NF) data warehouse banao, phir usse data marts derive karo.\n- ✔ Single source of truth, consistency, minimal redundancy.\n- ✘ Time, cost aur effort zyada; value late milti hai.\n- Suitable: bade enterprise, long-term programme, strong data governance.\n\n**Bottom-up (Kimball):**\n- Pehle department ke **data marts** (star schema, dimensional model) banao, phir unhe integrate karke warehouse banao.\n- ✔ Fast delivery, business ko jaldi value, simple model.\n- ✘ Consistency risk, duplicate dimensions, later integration pain.\n- Suitable: mid-size organisations, quick wins chahiye.\n\n| Point | Top-down | Bottom-up |\n|---|---|---|\n| Start | Warehouse | Data mart |\n| Model | Normalised 3NF | Dimensional star |\n| Time | Zyada | Kam |\n| Risk | Slow value | Inconsistency |\n| Known as | Inmon | Kimball |\n\n**Practical:** hybrid — central warehouse + dependent marts.\n\n**Diagram:** Refer to DW Architecture diagram."
      },
      {
        "question": "What is metadata? Why is it important in a data warehouse? Explain lineage.",
        "answer": "**Metadata:** Data ke baare mein data — structure, meaning, ownership aur history.\n\n**Types:**\n1. **Technical metadata** — tables, columns, data types, keys, indexes, ETL job name, run time, error logs.\n2. **Business metadata** — business definition, KPI formula, owner, refresh frequency, sensitivity.\n3. **Operational metadata** — run statistics, row counts, failures, data quality checks.\n4. **Lineage/audit metadata** — ye number kis source se, kis transformation se aaya.\n\n**Importance:**\n- Analyst ko pata chalta hai kaunsa column kya hai (`amt` = gross ya net?).\n- **Impact analysis** — column badalne se kaunsi reports tootengi.\n- **Root cause** — galat dashboard ka source dhoondhna aasan.\n- **Compliance/audit** — GDPR, RBI ke liye traceability.\n- **Onboarding** — naya member bina poochhe samajh jaata hai.\n\n**Lineage:** Field-to-field mapping (source → staging → warehouse → mart → report). Iske bina debug karna guesswork ban jaata hai.\n\n**Diagram:** Refer to DW Architecture diagram."
      }
    ]
  },
  {
    "id": "etl-process",
    "number": "2.9",
    "title": "ETL Process",
    "subtitle": "Extract, Transform, Load — warehouse mein data aane ka poora pipeline",
    "icon": "etl",
    "accent": "#ff8800",
    "englishDefinition": "The ETL process — Extract, Transform, Load — is the pipeline that moves data from source systems into the data warehouse. Extraction reads data from heterogeneous sources using full or incremental extraction including change data capture; transformation cleans, conforms, integrates, aggregates and derives values and applies slowly changing dimension logic; and loading writes the data into the warehouse using full refresh, incremental append or upsert, followed by validation checks.",
    "intro": "ETL data warehouse ka pehla aur sabse zaroori step hai — yahan data 'trustworthy' banta hai. Ye raat ke batch mein chalta hai (ya real-time streams mein) aur iske baad hi dashboards fresh hote hain. Exam mein E-T-L ke teeno steps ke saath SCD aur data quality checks likhna best answer hota hai.",
    "sections": [
      {
        "type": "definition",
        "title": "ETL Kya Hai",
        "kicker": "Definition",
        "body": "ETL ek pipeline hai: **Extract** (sources se data lena), **Transform** (saaf, standard aur business rules apply karna) aur **Load** (warehouse mein daalna).",
        "body2": "Iska ulta **ELT** bhi hota hai — pehle raw data cloud warehouse mein load karo, phir andar SQL se transform karo (dbt). Dono ka goal same hai: analysis-ready, consistent data. Farak sirf kahan transform hota hai.",
        "chips": ["Extract", "Transform", "Load", "Staging", "Scheduling"]
      },
      {
        "type": "cards",
        "title": "Teeno Steps",
        "kicker": "E·T·L",
        "cards": [
          {
            "icon": "down",
            "title": "Extract",
            "body": "Full extract, incremental (timestamp/ID), CDC (log based), API pagination, file drop; staging mein raw copy."
          },
          {
            "icon": "wrench",
            "title": "Transform",
            "body": "Cleaning, standardisation, integration, aggregation, derivation, SCD handling, business rules."
          },
          {
            "icon": "down",
            "title": "Load",
            "body": "Full refresh, incremental append, upsert/merge; dimension pehle, fact baad mein; validation ke saath."
          },
          {
            "icon": "clock",
            "title": "Scheduling",
            "body": "Airflow, cron, ADF trigger; dependency order, retry, alert, SLA."
          },
          {
            "icon": "check",
            "title": "Data Quality",
            "body": "Null %, duplicate, referential integrity, row count, amount reconciliation, freshness."
          },
          {
            "icon": "refresh",
            "title": "SCD",
            "body": "Type 1 overwrite, Type 2 add row + valid_from/valid_to, Type 3 previous column."
          }
        ]
      },
      {
        "type": "points",
        "title": "ETL Best Practices",
        "kicker": "Practices",
        "points": [
          "**Idempotent job** — dobara chalane par duplicate na bane (merge/upsert use karo).",
          "**Incremental load** — poora table har baar extract na karo; watermark/timestamp rakho.",
          "**Fail fast + alert** — quality check fail ho to load roko aur team ko batao.",
          "**Staging rakho** — debugging aur replay ke liye raw copy bachao.",
          "**Logging + lineage** — har run ka row count, time, status aur source save karo.",
          "**Version control** — ETL code git mein, environment-wise config ke saath.",
          "**Atomic load** — transaction mein load karo, adhoora data warehouse mein na jaaye."
        ]
      },
      {
        "type": "diagram",
        "title": "ETL Process",
        "kicker": "Diagram",
        "diagram": "ds-etl",
        "caption": "Extract, Transform, Load ka detail, SCD types, ELT vs ETL aur quality checks"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "ETL = Extract → Transform → Load; DW ka data isi pipeline se aata hai.",
          "Extract: full, incremental, CDC; staging mein raw copy.",
          "Transform: clean, standardise, integrate, aggregate, derive, SCD.",
          "Load: full refresh, incremental append, upsert; validate row counts.",
          "SCD Type 1 overwrite, Type 2 history (valid_from/to), Type 3 previous value.",
          "ELT = load pehle, transform warehouse mein (cloud + dbt)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the ETL process in detail.",
        "answer": "**ETL (Extract, Transform, Load):** Data ko source systems se data warehouse tak le jaane ka pipeline.\n\n**1. Extract:**\n- Sources: relational DB, APIs, files (CSV/Excel), SaaS apps, logs, streams.\n- **Full extract** — poora table copy (chhote tables ke liye).\n- **Incremental extract** — sirf naye/badle rows (timestamp, auto-increment ID, watermark).\n- **CDC (Change Data Capture)** — DB transaction logs se changes pakadna, real-time ke liye best.\n- Raw data **staging area** mein rakha jaata hai.\n\n**2. Transform:**\n- **Clean** — missing, duplicate, typo, outlier.\n- **Standardise** — codes, units, date formats, naming.\n- **Integrate** — sources ko keys se jodna, entity resolution.\n- **Aggregate/derive** — daily→monthly, total, margin, flags.\n- **SCD** — dimension history handle karna.\n- Business rules yahin apply hote hain.\n\n**3. Load:**\n- Full refresh, incremental append ya upsert/merge.\n- Load order: dimensions pehle, facts baad mein.\n- Validation: row count, checksum, null %, reconciliation.\n- Failure par rollback aur alert.\n\n**Diagram:** Refer to ETL Process diagram."
      },
      {
        "question": "What are slowly changing dimensions? Explain SCD types 1, 2 and 3 with examples.",
        "answer": "**SCD (Slowly Changing Dimension):** Dimension ki aisi attribute jo dheere-dheere badalti hai — customer ka city, product ka price, employee ka department. Warehouse ko decide karna hota hai ki history rakhe ya na rakhe.\n\n**Type 1 — Overwrite:**\n- Purani value ko naye se replace kar dete hain. Koi history nahi.\n- Example: customer ka galat phone number correct karna.\n- ✔ Simple, storage kam · ✘ history khatam, purani reports badal jaati hain.\n\n**Type 2 — Add new row (history):**\n- Naya row banao, purane row ko `valid_to` aur `is_current = 0` set karo.\n- Columns: `surrogate_key`, `valid_from`, `valid_to`, `is_current`.\n- Example: customer Pune se Mumbai shift — dono rows rahengi, purani sales Pune se judi rahegi.\n- ✔ Poori history, accurate trend · ✘ rows badh jaate hain, ETL complex.\n\n**Type 3 — Previous value column:**\n- Ek extra column `previous_city` rakho.\n- ✔ Fast access, limited history (ek step) · ✘ sirf ek purani value.\n\n**Practical:** Type 2 sabse common (analytics correctness ke liye), Type 1 correction ke liye.\n\n**Diagram:** Refer to ETL Process diagram."
      },
      {
        "question": "Differentiate between ETL and ELT. Which one should be used when?",
        "answer": "**ETL (Extract → Transform → Load):**\n- Data transform **staging server** par hota hai, phir warehouse mein load.\n- Warehouse ko sirf clean data milta hai.\n- ✔ Data quality gate, warehouse clean · ✘ transform server ka load zyada, bade data par slow, on-prem ke liye typical.\n\n**ELT (Extract → Load → Transform):**\n- Raw data pehle warehouse/lake mein load, transform **andar SQL** se (dbt, Spark).\n- Cloud warehouse ki compute power use hoti hai.\n- ✔ Fast (parallel, scalable), raw data bacha rehta hai, flexible re-transform · ✘ warehouse storage/compute cost, governance chahiye.\n\n| Point | ETL | ELT |\n|---|---|---|\n| Transform kahan | Staging server | Warehouse ke andar |\n| Speed (big data) | Slow | Fast |\n| Raw data | Nahi bachta | Bachta hai (replay) |\n| Cost | ETL server | Warehouse compute |\n| Tools | Informatica, Talend, SSIS | dbt, Spark, BigQuery SQL |\n\n**Kab kya:** on-prem + sensitive data → ETL; cloud warehouse + agile analytics → ELT.\n\n**Diagram:** Refer to ETL Process diagram."
      }
    ]
  },
  {
    "id": "fact-and-dimension-tables",
    "number": "2.10",
    "title": "Fact and Dimension Tables",
    "subtitle": "Dimensional modelling ka core — measures aur context",
    "icon": "table",
    "accent": "#aa00ff",
    "englishDefinition": "In dimensional modelling, a fact table stores the quantitative measures of a business process together with foreign keys to the dimensions, at a defined grain such as one row per order line; a dimension table stores the descriptive attributes that provide context such as who, what, when and where. Fact tables are long and narrow with numeric additive measures, while dimension tables are short and wide with textual descriptive attributes and a surrogate primary key.",
    "intro": "Dimensional modelling ki poori kahani do tables par tiki hai: **fact** batata hai kitna hua, **dimension** batata hai kisne-kab-kahan. Design ka pehla sawaal yahi hota hai — **grain kya hai?** Grain galat hua to total double count hoga aur koi bhi query bharosemand nahi rahegi.",
    "sections": [
      {
        "type": "definition",
        "title": "Fact Table",
        "kicker": "Definition",
        "body": "Fact table business process ki numeric measurements rakhta hai — quantity, amount, discount, balance — aur dimension tables ke foreign keys. Iski rows bahut zyada hoti hain aur columns kam.",
        "body2": "Fact table ke do hisse hote hain: **foreign keys** (kis dimension ka record) aur **measures** (kya value). Measures mostly **additive** hote hain (amount ko sum kar sakte hain); kuch **semi-additive** hote hain (balance ko time ke saath sum nahi kar sakte) aur kuch **non-additive** (percentage, ratio).",
        "chips": ["Measures", "Foreign keys", "Grain", "Additive", "Long table"]
      },
      {
        "type": "definition",
        "title": "Dimension Table",
        "kicker": "Definition",
        "body": "Dimension table context deta hai — who, what, when, where, how. Isme descriptive text attributes (name, category, city, brand) aur ek surrogate primary key hoti hai. Rows kam, columns zyada.",
        "body2": "Dimensions **denormalised** (flat) rakhe jaate hain taaki reporting simple rahe — ek hi dimension table mein city, state aur region teeno ho. Dimension ko flatter rakhna star schema ki speed ka raaz hai; iske badle thoda storage redundancy accept kiya jaata hai.",
        "chips": ["Descriptive", "Surrogate key", "Flat/denormalised", "Hierarchies", "Fewer rows"]
      },
      {
        "type": "points",
        "title": "Grain, Types Aur Design Rules",
        "kicker": "Design",
        "points": [
          "**Grain pehle decide karo** — “ek row = ek order line” ya “ek row = ek din ka store total”. Baad mein badalna mehnga hai.",
          "**Fact types** — transaction fact (ek event), periodic snapshot (roz/mahine ka total), accumulating snapshot (process ke stages).",
          "**Surrogate key** — warehouse ka apna integer key; source ka natural key sirf dimension mein rakho.",
          "**Conformed dimension** — same dimension kai fact tables mein use ho (dim_date, dim_customer).",
          "**Degenerate dimension** — bina dimension table ke ID jo fact mein hi rakha jaaye (invoice_no).",
          "**Aur measures** — kuch measures add nahi hote (percentage, avg price) → derived measure bana kar store karo."
        ]
      },
      {
        "type": "diagram",
        "title": "Fact and Dimension",
        "kicker": "Diagram",
        "diagram": "ds-fact-dim",
        "caption": "Fact table with keys and measures, four dimensions, grain aur design notes"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Fact table measures aur foreign keys rakhta hai — long and narrow.",
          "Dimension table descriptive context deta hai — short and wide, surrogate key ke saath.",
          "Grain (ek row kis level par) sabse pehle decide karo — warna double counting.",
          "Fact types: transaction, periodic snapshot, accumulating snapshot.",
          "Measures additive, semi-additive ya non-additive ho sakte hain.",
          "Conformed dimension kai fact tables ke saath share hoti hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between fact table and dimension table with examples.",
        "answer": "| Point | Fact Table | Dimension Table |\n|---|---|---|\n| Content | Numeric measures + foreign keys | Descriptive attributes + surrogate key |\n| Answers | “kitna hua” | “kisne, kab, kahan, kaunsa” |\n| Size | Bahut rows, kam columns | Kam rows, zyada columns |\n| Example | `fact_sales(sale_id, date_key, product_key, qty, amount)` | `dim_product(product_key, name, category, brand)` |\n| Data type | Numbers | Text/descriptive |\n| Keys | Foreign keys + degenerate key | Surrogate primary key |\n| Growth | Roz badhti hai (facts) | Dheere badhti hai (SCD) |\n| Additivity | Mostly additive | Not applicable |\n| Grain | Ek row = ek event/level | Ek row = ek member |\n\n**Example query:** total sales by category in 2025 = `fact_sales` (amount, qty) joined with `dim_date` (year) and `dim_product` (category).\n\n**Diagram:** Refer to Fact and Dimension diagram."
      },
      {
        "question": "What is grain in a data warehouse? Why is it important?",
        "answer": "**Grain:** Fact table ki sabse chhoti detail level — “ek row kis cheez ko represent karti hai?”.\n\n**Examples:**\n- Ek row = ek order line (product-wise).\n- Ek row = ek order (order total).\n- Ek row = ek din ka ek store ka total (daily snapshot).\n\n**Kyun important:**\n1. **Double counting rokta hai** — agar grain order hai par aap product-wise sum karo, to order ka amount har product par repeat hoga.\n2. **Sab measures define karta hai** — qty ka matlab grain ke saath hi clear hota hai.\n3. **Dimensions decide karta hai** — grain ke hisaab se keys chahiye.\n4. **Baad mein badalna mushkil** — grain badalna = fact table rebuild.\n5. **Consistency** — same grain ke fact tables asaani se compare/union ho jaate hain.\n\n**Rule:** grain ko business requirement se decide karo (lowest level of detail jo chahiye), aur design document mein likho.\n\n**Diagram:** Refer to Fact and Dimension diagram."
      },
      {
        "question": "Explain the types of fact tables with examples.",
        "answer": "**1. Transaction fact table:**\n- Ek row = ek business event (order line, payment, click).\n- Sabse detailed aur flexible; grain event-level.\n- Example: `fact_sales` — ek row per product sold.\n- ✔ Drilling aasan · ✘ rows bahut badh jaate hain.\n\n**2. Periodic snapshot fact table:**\n- Ek fixed interval par state ka snapshot (daily/monthly balance, inventory level).\n- Example: `fact_inventory_monthly` — har mahine ka closing stock.\n- ✔ Trend analysis aasan, size controlled · ✘ event-level detail nahi.\n\n**3. Accumulating snapshot fact table:**\n- Ek row = ek process instance, jiske multiple milestone dates update hote hain (order → ship → deliver → return).\n- Example: `fact_order_fulfilment` — order_date, ship_date, delivery_date.\n- ✔ Process cycle time measure karna aasan · ✘ rows update hote hain (non-volatile principle ka exception).\n\n**4. Factless fact table:**\n- Koi measure nahi, sirf keys — event hua ya nahi, ya coverage (kaunse products ka promotion mein tha).\n\n**Diagram:** Refer to Fact and Dimension diagram."
      }
    ]
  },
  {
    "id": "star-schema",
    "number": "2.11",
    "title": "Star Schema",
    "subtitle": "Ek central fact table, chaaron taraf denormalised dimension tables",
    "icon": "star",
    "accent": "#00d4ff",
    "englishDefinition": "A star schema is a dimensional data warehouse model with a single central fact table connected directly to a set of denormalised dimension tables. Each dimension is joined to the fact table through a surrogate foreign key in a single join hop, which makes queries simple and fast, at the cost of storing redundant descriptive data in the dimensions. It is the most widely used schema for data marts and BI reporting (Kimball).",
    "intro": "Star schema ka naam diagram dekh kar samajh aata hai — beech mein fact table aur uske chaaron taraf dimension tables, jaise taare ke points. Bas ek join chahiye fact se dimension tak, isliye query fast aur simple hoti hai. Yahi reason hai ki BI tools aur data marts star schema par bante hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Star Schema Kya Hai",
        "kicker": "Definition",
        "body": "Star schema mein ek central fact table hota hai jo seedhe (ek join mein) kai denormalised dimension tables se juda hota hai. Dimensions flat hoti hain — city, state, region ek hi table mein.",
        "body2": "Iska structure **Kimball** ke dimensional modelling ka core hai. Denormalisation ki keemat par simplicity aur speed milti hai: BI tool ko sirf ek join karna hota hai, analyst ko schema samajhna aasan hota hai.",
        "chips": ["Central fact", "Denormalised dims", "1-hop join", "Surrogate keys", "Kimball"]
      },
      {
        "type": "cards",
        "title": "Fayde Aur Nuksan",
        "kicker": "Pros & Cons",
        "cards": [
          {
            "icon": "zap",
            "title": "Fayda: Simple",
            "body": "Fact se dimension tak ek hi join — query likhna aasan, errors kam."
          },
          {
            "icon": "speed",
            "title": "Fayda: Fast",
            "body": "Star join optimised hota hai; BI tools aur columnar DB iske liye bane hain."
          },
          {
            "icon": "eye",
            "title": "Fayda: Readable",
            "body": "Business user bhi schema samajh leta hai; dimension attributes seedhe filter mein use hote hain."
          },
          {
            "icon": "warn",
            "title": "Nuksan: Redundancy",
            "body": "Dimension mein city/state/region repeat — storage zyada."
          },
          {
            "icon": "alert",
            "title": "Nuksan: Anomaly risk",
            "body": "Denormalised data mein update anomaly ho sakta hai — ETL se control karo."
          },
          {
            "icon": "layers",
            "title": "Nuksan: Bada dimension",
            "body": "Bahut bade dimension par storage aur maintenance badhta hai — tab snowflake socho."
          }
        ]
      },
      {
        "type": "points",
        "title": "Design Rules",
        "kicker": "Rules",
        "points": [
          "**Ek fact, kai dimensions** — fact table ko hub banao, dimensions ko spokes.",
          "**Surrogate keys** — warehouse generate kare (1,2,3…), source ka natural key dimension mein rakho.",
          "**Conformed dimensions** — `dim_date` aur `dim_customer` ko sab fact tables share karein.",
          "**Denormalise** — hierarchy ko ek table mein rakho (city + state + region).",
          "**Additive measures** — fact mein sum-able numbers; percentages derived rakho.",
          "**Query pattern** — `SELECT dim, SUM(measure) FROM fact JOIN dims GROUP BY dim`."
        ]
      },
      {
        "type": "diagram",
        "title": "Star Schema",
        "kicker": "Diagram",
        "diagram": "ds-star-schema",
        "caption": "Central fact table, four denormalised dimensions, ek join hop aur pros/cons"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Star schema: central fact + denormalised dimension tables, seedhe jude.",
          "Ek join hop — query simple aur fast, BI ke liye ideal.",
          "Keemat: redundancy aur zyada storage, update anomaly ka risk.",
          "Surrogate keys aur conformed dimensions design ka core hain.",
          "Query: fact join dimensions → group by dimension → sum measure.",
          "Bada/normalised dimension chahiye to snowflake schema."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is a star schema? Explain its components with an example.",
        "answer": "**Star Schema:** Dimensional model jisme ek central **fact table** hota hai aur uske chaaron taraf **denormalised dimension tables** hoti hain, har dimension fact se seedhe ek foreign key se juda hota hai.\n\n**Components:**\n1. **Fact table** — measures (qty, amount, discount) + foreign keys; bahut rows, kam columns.\n2. **Dimension tables** — descriptive attributes (name, category, city, date parts), surrogate primary key; kam rows, zyada columns.\n3. **Surrogate keys** — warehouse ke generated integers.\n4. **Grain** — fact table ka detail level.\n\n**Example:**\n- `fact_sales(sale_id, date_key, product_key, store_key, customer_key, qty, amount)`\n- `dim_date(date_key, day, month, quarter, year, is_festival)`\n- `dim_product(product_key, name, category, brand, price)`\n- `dim_store(store_key, city, state, region)`\n- `dim_customer(customer_key, name, segment, city)`\n\n**Query:** `SELECT d.year, p.category, SUM(f.amount) FROM fact_sales f JOIN dim_date d ON ... JOIN dim_product p ON ... GROUP BY 1,2;`\n\n**Diagram:** Refer to Star Schema diagram."
      },
      {
        "question": "What are the advantages and disadvantages of a star schema?",
        "answer": "**Advantages:**\n1. **Simple** — ek join hop fact se dimension tak; SQL likhna aasan.\n2. **Fast** — star join ke liye DB aur BI tools optimised hote hain.\n3. **Readable** — business user bina training schema samajh jaata hai.\n4. **BI friendly** — Power BI/Tableau extract aur cube build fast.\n5. **Predictable performance** — joins fix, query plan stable.\n6. **Aggregates aasan** — cube, materialised view, rollup simple.\n7. **Kimball standard** — industry mein widely documented.\n\n**Disadvantages:**\n1. **Redundancy** — city/state/region dimension mein repeat, storage zyada.\n2. **Update anomaly** risk — denormalised attribute ek jagah update na ho.\n3. **Bada dimension** — millions of members wala dimension manage karna mushkil.\n4. **Complex ETL** — SCD Type 2 ke saath dimension maintain karna padta hai.\n5. **Normalisation compromise** — DBA ko \"proper\" design nahi lagta.\n6. **Kam flexibility** — naya hierarchy add karne ke liye dimension badalna padta hai.\n\n**Diagram:** Refer to Star Schema diagram."
      },
      {
        "question": "Design a star schema for a retail sales data warehouse.",
        "answer": "**Requirement:** Product-wise, store-wise, day-wise sales analysis with customer segmentation.\n\n**Step 1 — Grain decide karo:** ek row = ek product ka ek line item ek order mein.\n\n**Step 2 — Fact table:**\n`fact_sales(sale_id, date_key, product_key, store_key, customer_key, promo_key, qty, unit_price, discount_amount, total_amount)`\n- Measures: qty (additive), unit_price (non-additive), discount, total (additive).\n\n**Step 3 — Dimensions (denormalised):**\n- `dim_date(date_key, date, day, month, quarter, year, weekday, is_holiday)`\n- `dim_product(product_key, sku, name, category, sub_category, brand, supplier)`\n- `dim_store(store_key, store_name, city, state, region, store_type)`\n- `dim_customer(customer_key, name, segment, city, signup_date)`\n- `dim_promotion(promo_key, promo_name, type, discount_pct, start_date, end_date)`\n\n**Step 4 — Keys:** surrogate integers; source IDs dimension mein as natural key.\n\n**Step 5 — Queries:**\n- Monthly sales by category: join `dim_date` + `dim_product`.\n- Top stores by region: join `dim_store`.\n- Coupon impact: join `dim_promotion`.\n\n**Validations:** grain check (order line count = fact row count), FK integrity, amount reconciliation.\n\n**Diagram:** Refer to Star Schema diagram."
      }
    ]
  },
  {
    "id": "snowflake-schema",
    "number": "2.12",
    "title": "Snowflake Schema",
    "subtitle": "Dimensions ko normalise karke banaya gaya star — kam redundancy, zyada joins",
    "icon": "scatter",
    "accent": "#ff0080",
    "englishDefinition": "A snowflake schema is a dimensional model in which the dimension tables are normalised into multiple related tables, so that a dimension such as product points to a category table, which further points to a department table. It reduces data redundancy and storage compared with a star schema, but increases the number of joins required for queries, which can reduce query performance and make the schema harder to understand.",
    "intro": "Snowflake schema star schema ka normalised version hai — dimension ke andar dimension. Iska fayda: storage kam, redundancy kam, data integrity better. Nuksaan: query mein zyada joins, isliye slow aur complex. Exam mein dono ka comparison table likhna safest answer hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Snowflake Schema Kya Hai",
        "kicker": "Definition",
        "body": "Snowflake schema mein dimension tables normalised hoti hain — ek dimension ek ya zyada sub-dimension tables se juda hota hai. Jaise `dim_product` → `dim_category` → `dim_department`, aur `dim_store` → `dim_city` → `dim_region`.",
        "body2": "Naam 'snowflake' (barfee ka phool) isliye pada kyunki normalised branches ke saath structure star se zyada complex, snowflake jaisa dikhta hai. Industry mein iska use tab hota hai jab dimension bahut bada ho ya storage/consistency critical ho.",
        "chips": ["Normalised dims", "Sub-dimensions", "Kam redundancy", "Zyada joins", "Complex"]
      },
      {
        "type": "cards",
        "title": "Star vs Snowflake",
        "kicker": "Comparison",
        "cards": [
          {
            "icon": "star",
            "title": "Star",
            "body": "Ek join hop; denormalised dimensions; fast par redundancy zyada; simple."
          },
          {
            "icon": "scatter",
            "title": "Snowflake",
            "body": "Multi-hop joins; normalised dimensions; storage kam par query slow; complex."
          },
          {
            "icon": "speed",
            "title": "Speed",
            "body": "Star fast (kam join); snowflake slow (zyada join)."
          },
          {
            "icon": "layers",
            "title": "Storage",
            "body": "Star zyada storage; snowflake kam storage."
          },
          {
            "icon": "check",
            "title": "Integrity",
            "body": "Snowflake better (ek jagah update); star mein anomaly ka risk."
          },
          {
            "icon": "flag",
            "title": "Kab kya",
            "body": "Reporting speed chahiye → star; bada dimension/consistency → snowflake."
          }
        ]
      },
      {
        "type": "points",
        "title": "Kab Snowflake Chunein",
        "kicker": "When",
        "points": [
          "**Dimension bahut bada** ho (millions of members, multi-level hierarchy).",
          "**Storage cost** important ho (cloud warehouse par data volume bada).",
          "**Frequent updates** dimension attributes mein ho — normalised update aasan.",
          "**Enterprise standards** 3NF normalisation demand karte hon.",
          "**Dhyan:** query performance aur BI tool setup ki extra mehnat accept karni padegi.",
          "**Hybrid** — important performance dimensions flat (star), baaki normalised."
        ]
      },
      {
        "type": "diagram",
        "title": "Snowflake Schema",
        "kicker": "Diagram",
        "diagram": "ds-snowflake-schema",
        "caption": "Normalised dimension chains (product → category/brand, store → city/region) aur star comparison"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Snowflake schema = normalised dimensions wala star schema.",
          "Dimension ke andar dimension: product → category → department.",
          "Fayda: kam redundancy, kam storage, better integrity.",
          "Nuksaan: zyada joins, slow query, complex schema.",
          "Practical: mostly star; bada dimension ho to snowflake/hybrid.",
          "Exam: star vs snowflake ka table (joins, storage, speed, complexity) zaroor likho."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is a snowflake schema? How is it different from a star schema?",
        "answer": "**Snowflake Schema:** Dimensional model jisme dimension tables **normalised** hoti hain aur sub-dimension tables se judi hoti hain — jaise `dim_product → dim_category → dim_department`.\n\n**Difference:**\n\n| Point | Star Schema | Snowflake Schema |\n|---|---|---|\n| Dimensions | Denormalised (flat) | Normalised (split) |\n| Joins | 1 hop (fact → dim) | Multi-hop (dim → sub-dim) |\n| Query speed | Fast | Slower |\n| Storage | Zyada (redundancy) | Kam |\n| Complexity | Simple | Complex |\n| Data integrity | Anomaly risk | Better |\n| BI tool setup | Easy | Extra work |\n| Best for | Reporting marts | Bade dimension, strict consistency |\n\n**Example:** star mein `dim_product(name, category, department)`; snowflake mein `dim_product(name, category_id)` + `dim_category(category_id, name, dept_id)` + `dim_department(...)`.\n\n**Diagram:** Refer to Snowflake Schema diagram."
      },
      {
        "question": "What are the advantages and disadvantages of a snowflake schema?",
        "answer": "**Advantages:**\n1. **Reduced redundancy** — category/department ek hi jagah store hote hain.\n2. **Less storage** — bade dimension mein significant saving.\n3. **Better data integrity** — update ek jagah, anomaly kam.\n4. **Easier maintenance** — normalised structure, standard DB practice.\n5. **Supports complex hierarchies** — multi-level (product → category → department → division).\n6. **Smaller dimension tables** — join ke liye smaller tables, cache-friendly.\n\n**Disadvantages:**\n1. **More joins** — query likhna aur chalana complex, performance slow.\n2. **BI tool setup** — semantic layer banana padta hai.\n3. **Harder to understand** — business user ke liye schema mushkil.\n4. **ETL complexity** — zyada tables, dependency order maintain karna padta hai.\n5. **Over-normalisation risk** — bahut chhoti tables se join explosion.\n6. **Aggregate/cube build** mehnat.\n\n**Diagram:** Refer to Snowflake Schema diagram."
      },
      {
        "question": "Compare star and snowflake schema and state which one you would choose for a retail warehouse.",
        "answer": "**Comparison:**\n\n| Criterion | Star | Snowflake |\n|---|---|---|\n| Design | Denormalised | Normalised |\n| Joins per query | 1 | 2+ |\n| Query speed | Faster | Slower |\n| Storage | Higher | Lower |\n| Maintenance | Simpler ETL | More tables/ETL |\n| Flexibility | Moderate | High (hierarchies) |\n| Understandability | High | Low |\n\n**Retail warehouse ke liye choice:**\n- **Default: star schema** — BI dashboards, daily sales reports, category managers ke ad-hoc queries ke liye fast aur simple.\n- **Exception: snowflake** — `dim_product` mein lakhon SKUs aur multiple hierarchy levels (category → department → division), ya `dim_store` multi-level (store → city → region → zone) ho aur storage/consistency priority ho.\n- **Best practice: hybrid** — high-usage dimensions flat (star), rare/very large dimensions normalised (snowflake).\n\n**Rule of thumb:** performance aur simplicity chahiye → star; normalisation aur storage chahiye → snowflake.\n\n**Diagram:** Refer to Snowflake Schema diagram."
      }
    ]
  },
  {
    "id": "olap-vs-oltp",
    "number": "2.13",
    "title": "OLAP vs OLTP",
    "subtitle": "Transaction processing aur analytical processing — farak aur OLAP operations",
    "icon": "cube",
    "accent": "#00ff88",
    "englishDefinition": "OLTP (Online Transaction Processing) systems manage day-to-day transactional data with many short insert, update and delete operations on current, highly normalised data, while OLAP (Online Analytical Processing) systems support analysis of large volumes of historical, aggregated, dimensional data using complex read-only queries. OLAP operations include roll-up, drill-down, slice, dice and pivot, and OLAP servers are implemented as ROLAP, MOLAP or HOLAP.",
    "intro": "OLTP aur OLAP ek hi company ke do alag duniya hain. OLTP poochhta hai: 'abhi kya hona chahiye' — order lo, payment karo, stock ghatao. OLAP poochhta hai: 'pichhle saal kya hua aur aage kya hoga' — trend, comparison, forecast. Dono ka design hi ulta hai: OLTP normalised (fast write), OLAP dimensional (fast read).",
    "sections": [
      {
        "type": "definition",
        "title": "OLTP vs OLAP",
        "kicker": "Definition",
        "body": "**OLTP** — Online Transaction Processing: roz ke transactions (insert/update/delete), current data, normalised (3NF) design, hazaaron users, short queries, response milliseconds mein.",
        "body2": "**OLAP** — Online Analytical Processing: analysis aur reporting (read-only), historical + aggregated data, dimensional design (star/snowflake), kuch analysts, complex queries, response seconds se minutes. OLAP warehouse ke data par kaam karta hai; OLTP source systems chalata hai.",
        "chips": ["OLTP: write-heavy", "OLAP: read-heavy", "3NF vs star", "Milliseconds vs minutes"]
      },
      {
        "type": "cards",
        "title": "OLAP Operations",
        "kicker": "Operations",
        "cards": [
          {
            "icon": "arrow",
            "title": "Roll-up",
            "body": "Detail se summary — city → state → country, ya month → quarter → year (aggregation)."
          },
          {
            "icon": "down",
            "title": "Drill-down",
            "body": "Summary se detail — year → quarter → month → day (roll-up ka ulta)."
          },
          {
            "icon": "layers",
            "title": "Slice",
            "body": "Ek dimension fix karo — sirf 2025 ka data, ya sirf ek region."
          },
          {
            "icon": "grid",
            "title": "Dice",
            "body": "Do ya zyada dimensions par range select — 2024–2025, Pune + Mumbai, category A."
          },
          {
            "icon": "refresh",
            "title": "Pivot",
            "body": "Rows aur columns rotate karo — cross-tab view (product × month)."
          }
        ]
      },
      {
        "type": "points",
        "title": "OLAP Server Ke Prakaar",
        "kicker": "Server Types",
        "points": [
          "**ROLAP** — relational tables par OLAP (star schema + SQL + aggregate tables). Scalable, flexible, data fresh; speed thodi kam.",
          "**MOLAP** — pre-computed multi-dimensional cube (array based). Sabse fast, par storage zyada aur data stale ho sakta hai.",
          "**HOLAP** — hybrid: detail relational mein, summary cube mein. Balance of speed aur storage.",
          "**Tools** — SSAS, Oracle Essbase, ClickHouse, DuckDB, BigQuery, Snowflake.",
          "**SQL mein** — `GROUP BY ROLLUP(...)`, `CUBE(...)`, `GROUPING SETS(...)`."
        ]
      },
      {
        "type": "diagram",
        "title": "OLTP vs OLAP",
        "kicker": "Diagram",
        "diagram": "ds-olap-oltp",
        "caption": "8-point comparison table, 5 OLAP operations aur ROLAP/MOLAP/HOLAP"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "OLTP = transactional, current, normalised, write-heavy, milliseconds.",
          "OLAP = analytical, historical, dimensional, read-heavy, seconds–minutes.",
          "OLAP operations: roll-up, drill-down, slice, dice, pivot.",
          "ROLAP relational, MOLAP cube (fast), HOLAP hybrid.",
          "Real system: OLTP par likho → ELT se DW → OLAP par analysis.",
          "Exam: OLTP vs OLAP ka table + operations likhna best answer."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between OLTP and OLAP systems.",
        "answer": "| Point | OLTP | OLAP |\n|---|---|---|\n| Full form | Online Transaction Processing | Online Analytical Processing |\n| Purpose | Roz ka transaction chalana | Analysis, reporting, decision support |\n| Data | Current, detailed | Historical, aggregated |\n| Operations | Insert, update, delete | Read-only complex queries |\n| Design | Normalised (3NF) | Dimensional (star/snowflake) |\n| Users | Hazaaron (clerk, app) | Kuch sau (analyst, manager) |\n| Query | Short, simple, indexed | Long, complex, full scan |\n| Response | Milliseconds | Seconds to minutes |\n| Size | GB | TB – PB |\n| Backup | Critical (frequent) | Periodic |\n| Example | Banking core, billing, order system | Sales warehouse, BI dashboard |\n\n**Ek line:** OLTP system ko chalata hai, OLAP system ko samajhta hai.\n\n**Diagram:** Refer to OLTP vs OLAP diagram."
      },
      {
        "question": "Explain OLAP operations with examples.",
        "answer": "**OLAP operations** multidimensional data (cube) par ki jaati hain:\n\n1. **Roll-up (consolidation):** Detail se summary ki taraf jana — dimension hierarchy mein upar.\n   - Example: monthly sales → quarterly → yearly total; city → state → country.\n   - Result: kam rows, aggregate values.\n\n2. **Drill-down:** Roll-up ka ulta — summary se detail.\n   - Example: yearly sales → quarter → month → day; country → state → city.\n   - Result: zyada rows, detailed values.\n\n3. **Slice:** Ek dimension par fix value rakhna.\n   - Example: sirf `year = 2025` ka data dekhna (baaki dimensions same).\n   - Result: cube ka ek \"slice\" (2-D view).\n\n4. **Dice:** Do ya zyada dimensions par range/values select karna.\n   - Example: `year IN (2024, 2025) AND city IN (Pune, Mumbai) AND category = 'Electronics'`.\n   - Result: sub-cube.\n\n5. **Pivot (rotate):** Rows aur columns exchange karna.\n   - Example: product × month table ko month × product bana dena.\n\n**SQL mapping:** `ROLLUP`, `CUBE`, `GROUPING SETS`, `PIVOT`.\n\n**Diagram:** Refer to OLTP vs OLAP diagram."
      },
      {
        "question": "Explain ROLAP, MOLAP and HOLAP architectures.",
        "answer": "**ROLAP (Relational OLAP):**\n- Data relational warehouse (star/snowflake) mein rehta hai; queries SQL se chalti hain; aggregate/summary tables speed ke liye.\n- ✔ Scalable (TB–PB), flexible, real-time data, standard DB tools.\n- ✘ Bade aggregate queries slow ho sakti hain; pre-aggregation ka design chahiye.\n- Example: BigQuery, Snowflake, Redshift + BI tool.\n\n**MOLAP (Multidimensional OLAP):**\n- Data pre-computed **cube** (multi-dimensional array) mein store hota hai, compressed indexing ke saath.\n- ✔ Sabse fast response, complex calculation aasan, slicing/dicing instant.\n- ✘ Storage bahut zyada, cube build time, data freshness limited (batch), size limit.\n- Example: SSAS multidimensional, Oracle Essbase.\n\n**HOLAP (Hybrid OLAP):**\n- Detail data relational mein, aggregate/summary cube mein.\n- ✔ Speed + scalability ka balance, storage bachta hai.\n- ✘ Architecture complex, do jagah manage karna padta hai.\n\n| Type | Storage | Speed | Scale |\n|---|---|---|---|\n| ROLAP | Relational | Medium | Very high |\n| MOLAP | Cube | Very high | Limited |\n| HOLAP | Both | High | High |\n\n**Diagram:** Refer to OLTP vs OLAP diagram."
      }
    ]
  },
];
