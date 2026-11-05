// Data Science — Unit V: Data Visualization and Emerging Trends
// Generated content: 12 topics, each with Hinglish explanation, official English
// definition, animated diagram, recap and 3 exam questions.
export const dataScienceUnit5Topics = [
  {
    "id": "data-visualization-intro",
    "number": "5.1",
    "title": "Introduction to Data Visualization",
    "subtitle": "Data ko aankhon se samajhna — encodings, perception aur Anscombe ka sabak",
    "icon": "chart",
    "accent": "#00d4ff",
    "englishDefinition": "Data visualization is the graphical representation of data and information using visual elements such as position, length, area, angle, colour and shape, so that patterns, trends, outliers and relationships in the data can be perceived quickly and accurately. It combines statistics (what the numbers say), design (how the eye reads it) and communication (what the audience must understand). A visualization pipeline converts raw data into visual structures through encoding, marks and channels, and the resulting chart is read by the human visual system — which is far better at comparing position and length than at reading tables of digits. Visualization is used for exploration (finding unknown patterns) and for explanation (communicating a known finding), and forms the presentation layer of every dashboard and business-intelligence report.",
    "intro": "Ek table mein 10,000 rows hain — usme kaun sa trend hai, kaun sa outlier hai, koi nahi bata sakta. Wahi data ek chart mein daal do aur 2 second mein sab dikh jaata hai. Yahi **data visualization** hai: numbers ko aisi shakl dena jise **aankh** turant padh le. Iska scientific base perception hai — human eye position aur length ko bahut accurately compare karti hai, area aur angle ko nahi. Isi liye bar chart bar-pie se better hota hai, chahe pie kitna hi sundar lage.",
    "sections": [
      {
        "type": "definition",
        "title": "Data Visualization kya hai",
        "kicker": "Definition",
        "body": "Data visualization data aur information ka **graphical representation** hai — charts, graphs, maps aur dashboards ke through numbers ko visual form dena, taaki pattern, trend, outlier aur relationship **turant** samajh aayein. Ye teen cheezon ka mix hai: **statistics** (numbers kya keh rahe hain), **design** (aankh kaise padhegi) aur **communication** (audience ko kya samajhna hai).",
        "body2": "Definition ka doosra hissa important hai: visualization ka goal sirf 'sundar' banana nahi, **decision support** hai. Isliye chart ko data ke sawaal ke hisaab se chunna padta hai — comparison, distribution, trend, ya relationship.",
        "chips": [
          "Graphical representation",
          "Perception-based",
          "Exploration + Explanation",
          "Decision support"
        ]
      },
      {
        "type": "cards",
        "title": "Kyun zaroori hai (Benefits)",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "bulb",
            "title": "Aankh machine se tez",
            "body": "Visual system ek second mein lakhon pixels process karti hai. Table padhne mein 30 second lagte hain, bar chart 2 second mein samajh aata hai."
          },
          {
            "icon": "search",
            "title": "Pattern aur outlier dikhte hain",
            "body": "Trend, seasonality, cluster, spike aur gap — jo regression ke numbers mein chhup jaate hain, chart mein turant dikh jaate hain."
          },
          {
            "icon": "users",
            "title": "Storytelling aur memory",
            "body": "Log numbers bhool jaate hain, pictures yaad rehti hain. Presentation mein chart se argument strong hota hai."
          },
          {
            "icon": "clock",
            "title": "Speed aur cost saving",
            "body": "Fast decision = fast action. Fraud aur anomaly real-time dashboard se turant pakde jaate hain."
          },
          {
            "icon": "warn",
            "title": "Outlier ka warning",
            "body": "Ek galat entry (age = 999) chart mein confidently dikh jaati hai, CSV mein 40,000 rows ke beech nahi."
          },
          {
            "icon": "target",
            "title": "Exploration + explanation",
            "body": "Pehle explore karo (kya interesting hai?), phir explain karo (audience ko wahi ek message dikhao)."
          }
        ]
      },
      {
        "type": "points",
        "title": "Visual encoding — marks aur channels",
        "kicker": "Encodings",
        "points": [
          "**Marks** = chart ke building blocks: point, line, bar, area, rectangle.",
          "**Channels** = mark ki properties jo data carry karti hain: **position (x, y), length, angle, area, colour hue, colour intensity, shape, size**.",
          "**Cleveland & McGill ranking** (accuracy order): position (common scale) > position (non-aligned) > length > angle/slope > area > volume > colour hue. Isliye pie (angle) bar (position/length) se kam accurate hai.",
          "**Pre-attentive attributes** — jo cheez 250 ms se pehle bhi dikh jaati hai: colour, size, orientation, motion. Isliye exception ko ek bright colour se highlight karke baaki sab grey kar dete hain.",
          "**Data-ink ratio** (Tufte): jo ink data ke liye nahi hai (gridlines, 3-D, shadows, logos) wo **chartjunk** hai — hata do."
        ]
      },
      {
        "type": "comparison",
        "title": "Kaunsa Sawaal, Kaunsa Channel",
        "kicker": "Comparison",
        "columns": [
          "Achha channel",
          "Bura channel"
        ],
        "rows": [
          {
            "label": "Comparison",
            "values": [
              "position / length (bar)",
              "angle / area (pie slices)"
            ]
          },
          {
            "label": "Trend",
            "values": [
              "position over time (line)",
              "colour-only change"
            ]
          },
          {
            "label": "Distribution",
            "values": [
              "position (histogram, box plot)",
              "average ki single number"
            ]
          },
          {
            "label": "Relationship",
            "values": [
              "position x–y (scatter)",
              "two pie charts side by side"
            ]
          },
          {
            "label": "Hierarchy",
            "values": [
              "area nesting (treemap)",
              "table of indent rows"
            ]
          }
        ],
        "columnColors": [
          "#00ff88",
          "#ff7a90"
        ]
      },
      {
        "type": "points",
        "title": "Anscombe ka sabak (1973)",
        "kicker": "Classic Example",
        "points": [
          "Frank Anscombe ne **chaar datasets** banaye jinke summary statistics bilkul same the — mean x = 9, mean y = 7.50, correlation **0.816**, same regression line.",
          "Chaaron ka scatter plot dekhne par **bilkul alag** kahaani: (I) linear, (II) curved, (III) perfect line + ek outlier, (IV) sab points ek vertical line par (x = 8) aur ek leverage point.",
          "Sabak: **summary statistics data ko poora describe nahi karte**. Correlation 0.816 hone ke baad bhi shape, outlier aur relationship ki nature alag ho sakti hai.",
          "Isi ko aage le kar **Datasaurus dozen** bana — 13 datasets, same mean/sd/correlation, bilkul alag shapes (dinosaur tak).",
          "Exam line: visualization pehle **check** karne ka tool hai ki statistics ke assumptions (linearity, no outlier) sahi hain ya nahi."
        ]
      },
      {
        "type": "diagram",
        "title": "Data Visualization Pipeline",
        "kicker": "Diagram",
        "diagram": "ds5-visualization-intro",
        "caption": "Data → encoding (mark + channel) → perception → insight: pipeline ka har step ek decision hai"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Definition:** data/information ka graphical representation; statistics + design + communication ka mix.",
          "**Encoding:** position aur length sabse accurate channels; angle aur area sabse kam — isliye bar > pie.",
          "**Pre-attentive:** colour, size, orientation 250 ms mein register hote hain → exception highlight karo.",
          "**Anscombe's quartet:** same mean/sd/correlation (0.816) par bilkul alag shapes — chart ke bina data nahi samajh sakte.",
          "**Chartjunk hatao** (Tufte): data-ink ratio badhao, 3-D aur decoration band.",
          "**Do modes:** exploration (patterns dhoondhna) aur explanation (ek message communicate karna)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define data visualization. Explain its importance with any five benefits.",
        "answer": "**Definition:** Data visualization is the graphical representation of data and information using visual elements such as position, length, area, angle, colour and shape, so that patterns, trends and relationships can be perceived quickly and accurately. It combines **statistics** (numbers), **design** (perception) and **communication** (message).\n\n**Importance / benefits:**\n1. **Speed of comprehension** — human eye position aur length ko bahut accurately compare karti hai; 10,000 rows ka trend ek line chart mein 2 second mein dikh jaata hai.\n2. **Pattern, trend aur seasonality** — spikes, cycles aur clusters numbers mein chhup jaate hain, chart mein turant dikh jaate hain.\n3. **Outlier aur data quality** — galat entry (age = 999) chart mein confidently alag dikhti hai.\n4. **Better decisions** — management gut feeling ki jagah evidence dekhta hai; real-time dashboard se fraud/anomaly turant pakde jaate hain.\n5. **Storytelling aur communication** — presentation mein chart argument ko yaad rakhne layak banata hai (explanation mode).\n6. **Exploration** — analyst pehle patterns dhoondhta hai (exploratory), phir unhe audience ke liye explain karta hai (explanatory).\n\n**Classic proof — Anscombe's quartet:** chaar datasets ke mean, variance aur correlation (0.816) same, par scatter plot dekhne par relationships bilkul alag (linear, curved, line + outlier, vertical line + leverage point). Isliye \"numbers kaafi hain\" kehna galat hai.\n\n**Diagram:** Refer to the Data Visualization Pipeline diagram."
      },
      {
        "question": "Explain the data visualization pipeline with visual encodings and the accuracy ranking of channels.",
        "answer": "**Pipeline:** raw data → data table → visual encoding (marks + channels) → rendered image → human perception → insight/decision.\n\n**Marks:** point, line, bar, area, rectangle — chart ke building blocks.\n\n**Channels:** position (x, y), length, angle/slope, area, volume, colour hue, colour intensity, shape, size. Ek mark par multiple channels map ho sakte hain (jaise scatter mein position + colour + size).\n\n**Accuracy ranking (Cleveland & McGill):** position (common scale) > position (non-aligned) > length > angle/slope > area > volume > colour hue.\n\nIsliye:\n- **Bar chart** (length/position) pie chart (angle) se accurate — slices ko compare karna mushkil hota hai.\n- **Scatter** (position x–y) correlation dikhane ke liye best.\n- **Colour** sirf **categorical grouping** ya **highlight** ke liye — exact values padhne ke liye nahi.\n\n**Pre-attentive attributes:** colour, size, orientation, motion — 250 ms se pehle process hote hain. Design rule: poore dashboard ko grey rakho aur **jo exception important hai usi ko accent colour do**; aankh apne aap wahan jaati hai.\n\n**Data-ink ratio (Tufte):** chart ka jo bhi ink data encode nahi karta (3-D effect, shadow, gridlines, logo) wo **chartjunk** hai — hata do.\n\n**Do modes:** exploration (unknown pattern dhoondhna) aur explanation (known finding ko ek message mein dikhana). Ek hi chart dono kaam nahi karta — explanatory chart mein title hi finding hota hai (\"Revenue 18% badha, sirf West region se\").\n\n**Diagram:** Refer to the Data Visualization Pipeline diagram."
      },
      {
        "question": "What is Anscombe's quartet? What does it teach about summary statistics and chart choice?",
        "answer": "**Anscombe's quartet (1973):** ek hi summary statistics wale **chaar datasets** (11 points each):\n\n| Statistic | Value (all four) |\n| Mean of x | 9.0 |\n| Mean of y | 7.50 |\n| Variance of x | 11.0 |\n| Variance of y | 4.125 |\n| Correlation r | 0.816 |\n| Regression line | y = 3 + 0.5x |\n\n**Plots kya dikhate hain:**\n1. Set I — clean **linear** relationship, regression theek fit hai.\n2. Set II — clear **curve** (parabola) — linear regression galat model hai.\n3. Set III — perfect straight line + **ek outlier** jisne slope bigaada.\n4. Set IV — saare x = 8 par, sirf ek leverage point ne correlation 0.816 bana diya — regression ka matlab hi nahi.\n\n**Sabak:**\n- **Summary statistics (mean, variance, correlation) data ko describe karne ke liye kaafi nahi** — bilkul alag shapes same numbers de sakte hain.\n- Isliye analysis ka pehla step **always plot karo** (EDA) — outlier, non-linearity aur leverage point pehle pakdo, phir model lagao.\n- Aage isi idea ka **Datasaurus dozen** aaya: 13 datasets, same mean/sd/correlation, shapes dinosaur se lekar star tak.\n\n**Chart choice ka connection:** bar/line/scatter jaise **position-based** charts hi shape aur outlier dikha paate hain; pie ya single KPI number ye kabhi nahi dikha sakta — isliye exploration ke liye distribution aur scatter charts zaroori hain.\n\n**Diagram:** Refer to the Data Visualization Pipeline diagram."
      }
    ]
  },
  {
    "id": "visualization-challenges",
    "number": "5.2",
    "title": "Challenges of Data Visualization",
    "subtitle": "Galat chart, kata hua axis, overplotting aur perception ki limits",
    "icon": "warn",
    "accent": "#ff0080",
    "englishDefinition": "Data visualization faces challenges at three levels. Data-level challenges include poor data quality, missing values, noise and outliers, mixed scales and units, high dimensionality, huge volume and aggregation effects such as Simpson's paradox. Perceptual and cognitive challenges include the limited accuracy of the human eye for area and angle, colour-vision deficiency, change blindness, overplotting and occlusion, and limited working memory. Design and communication challenges include choosing the wrong chart type, truncated or non-zero baselines, dual axes, 3-D effects, chartjunk, misleading colour scales, cherry-picked ranges and the digital divide. Technical challenges cover rendering performance on large datasets, responsiveness across screen sizes, accessibility for screen readers and colour-blind users, and tool literacy. Poorly handled, these turn a visualization from an insight tool into a source of misinformation.",
    "intro": "Visualization ka power hi uska risk hai: ek **galat chart** kisi bhi jhooth ko sach jaisa dikha sakta hai. Y-axis 98 se shuru karo to 99 se 101 ka farq pahaad lagta hai; 12 slices ka pie banao to kuch compare hi nahi hota. Challenges teen level par aate hain — **data** (ganda, missing, high-dimensional), **perception** (aankh area/angle mein kamzor, 8% males ko colour blindness) aur **design** (galat chart, truncated axis, chartjunk). Exam mein aksar 'challenges of data visualization' ya 'misleading graphs' ka sawaal aata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Challenges ka matlab",
        "kicker": "Definition",
        "body": "Data visualization challenges wo problems hain jo **data se insight tak** ke safar mein aati hain — ganda data, galat chart choice, perception ki limits, tool ki performance aur ethical misuse. Inhe ignore karne se chart **misleading** ho jaata hai: technically sahi numbers, par galat message.",
        "body2": "Exam ke liye teen buckets yaad rakho: **(1) Data challenges, (2) Perceptual/cognitive challenges, (3) Design aur technical challenges** — phir har bucket se 2-3 example.",
        "chips": [
          "Data quality",
          "Perception limits",
          "Wrong chart",
          "Misleading axes",
          "Accessibility"
        ]
      },
      {
        "type": "cards",
        "title": "Data-level challenges",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "warn",
            "title": "Quality aur missing values",
            "body": "Duplicate rows, galat type (age = 'twenty'), missing entries — chart bubble ya 'NA' bar se poora shape badal jaata hai."
          },
          {
            "icon": "unstruct",
            "title": "Noise aur outliers",
            "body": "Ek galat entry axis ko stretch kar deti hai aur baaki saara data ek line mein simat jaata hai."
          },
          {
            "icon": "metrics",
            "title": "Mixed scales aur units",
            "body": "Revenue lakhon mein, count hundreds mein — ek hi axis par plot karo to chhota series gayab ho jaata hai (isliye dual axis ya indexing)."
          },
          {
            "icon": "cube",
            "title": "High dimensionality",
            "body": "10 features ko 2-D screen par dikhana: colour, size, shape, facet — jitne channels, utni confusion."
          },
          {
            "icon": "database",
            "title": "Volume aur performance",
            "body": "Karodon rows browser mein render nahi hoti — aggregation, sampling ya server-side filtering chahiye."
          },
          {
            "icon": "cycle",
            "title": "Simpson's paradox",
            "body": "Aggregate mein A > B, par har group mein A < B — aggregation level badalne se conclusion ulta ho jaata hai."
          }
        ]
      },
      {
        "type": "points",
        "title": "Perceptual aur cognitive challenges",
        "kicker": "Perception",
        "points": [
          "**Area aur angle padhna mushkil:** aankh length/position accurately compare karti hai, area aur angle ka estimate 25–30% tak off ho sakta hai — isliye pie aur bubble chart kamzor hain.",
          "**Colour vision deficiency:** lagbhag **8% males** (0.5% females) red-green colour blind hain — red/green traffic-light palette 10 mein se 1 user ke liye useless hai. Safe: blue-orange, viridis, plus shape/label ke saath redundancy.",
          "**Change blindness:** dashboard refresh hone par chhoti si change aankh miss kar jaati hai — animation, highlight ya 'what changed' callout chahiye.",
          "**Overplotting / occlusion:** hazaar points ek hi jagah — trend hi nahi dikhta. Fix: transparency (alpha), jitter, hexbin, 2-D density, sampling.",
          "**Limited working memory:** ek screen par 7±2 se zyada KPI/chart rakhne par kuch bhi yaad nahi rehta; isliye hierarchy aur progressive disclosure.",
          "**Order effects aur anchoring:** axis order, sort order aur default filter hi conclusion badal dete hain — isliye sorted bars aur explicit baselines."
        ]
      },
      {
        "type": "points",
        "title": "Design challenges — misleading charts",
        "kicker": "Design",
        "points": [
          "**Truncated y-axis:** axis 98 se shuru → sales 99, 100, 101 ka farq 2x lagta hai. Bar chart mein baseline **zero** hona chahiye (line chart mein allowed, par mark karo).",
          "**Galat chart type:** 12 categories ka pie (slices compare nahi hote), time-series ke liye bar, ranking ke liye pie — chart data ke sawaal se match nahi.",
          "**Dual axis / inconsistent scale:** do y-axis ko arbitrarily scale karke koi bhi correlation dikhaya ja sakta hai.",
          "**3-D aur chartjunk:** 3-D pie mein aage ka slice bada dikhta hai (perspective distortion); shadows, gradients aur background images data ko dabaa dete hain.",
          "**Rainbow colour scale:** ordered data par rainbow (jet) false boundaries bana deta hai — sequential data ke liye single-hue ya viridis.",
          "**Cherry-picked range aur aggregation:** sirf achhe mahine dikhana, ya baseline badal dena — ye **ethical** problem hai, technical nahi."
        ]
      },
      {
        "type": "comparison",
        "title": "Problem → Standard Fix",
        "kicker": "Comparison",
        "columns": [
          "Problem",
          "Fix"
        ],
        "rows": [
          {
            "label": "Outlier axis ko kheench le",
            "values": [
              "log scale ya outlier ko alag annotate karo"
            ]
          },
          {
            "label": "Overplotting",
            "values": [
              "alpha, hexbin, density, sampling, facets"
            ]
          },
          {
            "label": "12 categories ka pie",
            "values": [
              "sorted horizontal bar chart"
            ]
          },
          {
            "label": "Truncated baseline",
            "values": [
              "y-axis zero se shuru + clear label"
            ]
          },
          {
            "label": "Red/green palette",
            "values": [
              "blue-orange + labels/shape (redundant encoding)"
            ]
          },
          {
            "label": "Simpson's paradox",
            "values": [
              "grouped/faceted view + aggregate dono dikhao"
            ]
          }
        ],
        "columnColors": [
          "#ff7a90",
          "#00ff88"
        ]
      },
      {
        "type": "points",
        "title": "Simpson's paradox — ek concrete example",
        "kicker": "Example",
        "points": [
          "Do doctors ke success rate compare karo: **Dr. A** — 100 patients, 80 success = **80%**; **Dr. B** — 100 patients, 78 = **78%**.",
          "Ab severity ke hisaab se split karo: **easy cases** — A 60/80 = 75%, B 45/50 = **90%**; **hard cases** — A 20/20 = **100%** (asli hard case A ko), B 33/50 = 66%.",
          "Matlab har group mein B better (90%, 66%) phir bhi overall A better (80% vs 78%) — kyunki A ne 80/100 **hard** cases liye aur B ne 50/100.",
          "**Visualization lesson:** aggregate bar chart aur grouped bar chart **dono** dikhao; warna chart ek confounding variable chhupa dega aur decision galat hoga."
        ]
      },
      {
        "type": "diagram",
        "title": "Misleading vs Honest Chart",
        "kicker": "Diagram",
        "diagram": "ds5-challenges",
        "caption": "Truncated axis, overplotting, rainbow scale aur 12-slice pie — har problem ka standard fix"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Teen buckets:** data challenges, perception/cognitive challenges, design + technical challenges.",
          "**Data:** quality, missing, noise, mixed scale, high dimension, volume, Simpson's paradox.",
          "**Perception:** area/angle inaccurate, 8% males red-green colour blind, change blindness, overplotting.",
          "**Design:** truncated axis, wrong chart type, dual axis, 3-D, chartjunk, rainbow scale, cherry-picking.",
          "**Fixes:** zero baseline, sorted bars, alpha/hexbin, colourblind-safe palette, grouped views.",
          "**Ethics:** misleading chart technically sahi hota hai par galat decision karata hai — isliye label, baseline aur source mandatory."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the challenges faced in data visualization with suitable examples.",
        "answer": "Data visualization ke challenges ko teen level par baant sakte hain — **data, perception aur design/technical**.\n\n**1. Data-level challenges**\n- **Data quality:** duplicate rows, galat data type, missing values — chart mein 'NA' bucket ya spike create karta hai.\n- **Noise aur outliers:** ek galat entry (age = 999) axis ko stretch kar deti hai, baaki data ek line mein simat jaata hai.\n- **Mixed scales/units:** revenue (lakhs) aur count (hundreds) ek axis par — chhoti series ghayab.\n- **High dimensionality:** 10 features, 2-D screen — colour/size/shape sab use karo to confusion.\n- **Volume:** crore rows browser mein render nahi hoti — aggregation/sampling chahiye.\n- **Simpson's paradox:** aggregate mein A > B par har group mein A < B (doctors ka 80% vs 78% example).\n\n**2. Perceptual / cognitive challenges**\n- **Area aur angle** accurately padhna mushkil — pie slices 25–30% tak galat estimate ho jaate hain.\n- **Colour blindness** — lagbhag 8% males red-green deficient; red/green palette unke liye bekaar.\n- **Change blindness** — refresh par hui chhoti change miss ho jaati hai.\n- **Overplotting** — hazaar points ek jagah, trend hi nahi dikhta (fix: alpha, hexbin).\n- **Working memory** — 7±2 se zyada charts ek screen par yaad nahi rehte.\n\n**3. Design aur technical challenges**\n- **Truncated y-axis** (98 se shuru) se 99/100/101 ka farq pahaad lagta hai.\n- **Wrong chart type** (12 categories ka pie), **dual axis**, **3-D perspective**, **chartjunk**, **rainbow scale**.\n- **Accessibility** (screen reader, keyboard), **responsive layout** (mobile par 20 charts nahi), **tool literacy**, aur **ethics** (cherry-picking, misleading correlation).\n\n**Diagram:** Refer to the Misleading vs Honest Chart diagram."
      },
      {
        "question": "How can a chart mislead even with correct data? Explain truncated axis, wrong chart type and dual axis.",
        "answer": "Numbers sahi hote hain, phir bhi chart galat message de sakta hai — kyunki **perception** aur **design choices** message banate hain.\n\n**1. Truncated axis (kata hua y-axis)** — axis 98 se shuru karke values 99, 100, 101 plot karo: bar ki height ratio 2x+ lagti hai jabki asli difference 2%. Rule: **bar chart ka baseline hamesha zero**; line chart mein non-zero baseline allowed hai par clearly mark karo.\n\n**2. Wrong chart type** — 12 categories ka pie chart: slices ka angle compare karna mushkil, labels overlap, koi ranking nahi dikhti. Wahi data **sorted horizontal bar** mein 2 second mein readable hai. Time-series ko bar chart mein daalna bhi galat — trend ke liye line chahiye.\n\n**3. Dual axis** — left axis 0–100, right axis 0–1000; dono lines perfectly overlap karwa ke \"strong correlation\" dikha sakte hain. Axis ka scale badal do to correlation gayab. Fix: do alag aligned charts (small multiples) ya indexed values ek hi axis par.\n\n**4. Aggregation choice** — Simpson's paradox: Dr. A overall 80% vs Dr. B 78%, par easy cases mein B 90% vs A 75%. Sirf aggregate bar dikhao to B bekaar lagta hai; grouped/faceted chart sach dikhata hai.\n\n**5. Colour aur highlight** — sab bars bright colours mein hote hain to koi exception highlight nahi hota; \"don't make me think\" rule: grey + ek accent colour.\n\n**6. 3-D aur chartjunk** — 3-D pie mein aage wali slice bada dikhta hai (perspective distortion); shadows/gradients data-ink ratio giraate hain.\n\n**Lesson:** honest visualization ke rules — zero baseline, right chart for the question, consistent scale, source + timestamp, aur ek clear title jo finding batata hai.\n\n**Diagram:** Refer to the Misleading vs Honest Chart diagram."
      },
      {
        "question": "What perceptual factors limit data visualization? Discuss colour blindness, overplotting and pre-attentive processing.",
        "answer": "**Perception hi visualization ka medium hai** — isliye uski limits hi challenges ban jaati hain.\n\n**1. Accuracy of channels** — aankh **position** aur **length** ko bahut accurately compare karti hai, par **area** aur **angle** ka estimate 25–30% tak galat ho sakta hai. Isliye bar chart (length) pie (angle) se better hai, aur bubble chart ki size comparison avoid karni chahiye.\n\n**2. Colour blindness** — lagbhag **8% males** aur 0.5% females red-green deficient hain. Red/green traffic-light palette unke liye same dikhta hai. Fix: **colourblind-safe palette** (blue-orange, viridis), aur **redundant encoding** — colour ke saath label, shape ya pattern bhi.\n\n**3. Pre-attentive processing** — colour, size, orientation aur motion 250 ms se pehle process hote hain, baaki sab baad mein. Iska fayda: **exception ko accent colour** do aur baaki grey — aankh apne aap wahan jaati hai. Nuksaan: agar sab kuch colourful hai to koi cheez pop nahi karti.\n\n**4. Overplotting / occlusion** — hazaron points ek hi coordinate par: density ka pata nahi chalta. Fix: **alpha transparency**, **jitter**, **hexbin/2-D density**, **sampling**, ya **faceting**. Line chart mein bhi overlapping lines: 4–5 se zyada series na rakho.\n\n**5. Change blindness aur limited memory** — dashboard refresh par chhoti change miss ho jaati hai; working memory 7±2 items. Fix: \"what changed\" callout, animation, progressive disclosure (overview → zoom → details).\n\n**6. Gestalt aur bias** — proximity/similarity se grouping galat samajh aati hai; default sort order, axis range aur anchoring effect conclusion badal dete hain.\n\n**Diagram:** Refer to the Misleading vs Honest Chart diagram."
      }
    ]
  },
  {
    "id": "dashboard-basics",
    "number": "5.3",
    "title": "Dashboard — Definition and Types",
    "subtitle": "Ek screen par KPIs — operational, tactical, strategic aur analytical",
    "icon": "dashboard",
    "accent": "#00ff88",
    "englishDefinition": "A dashboard is a visual display of the most important information needed to achieve one or more objectives, consolidated and arranged on a single screen so that the information can be monitored at a glance (Stephen Few). Functionally a dashboard answers three questions: what is happening (monitoring), why is it happening (analysis) and what should be done (action). Dashboards are classified by their time horizon and audience — operational dashboards track live processes (call centre queues, server health) and are refreshed continuously; tactical dashboards support department heads with weekly or monthly trends and comparisons; strategic dashboards serve executives with long-horizon KPIs and targets; analytical dashboards support the analyst with drill-down, filtering and many dimensions. A dashboard differs from a report (static, detailed, paginated) and a scorecard (a small set of KPI-to-target measures). Its standard components are KPIs, trend charts, targets or comparisons, filters, alerts and drill-down paths.",
    "intro": "**Dashboard** ka matlab hai: saari zaroori information ek hi screen par, ek nazar mein. Stephen Few ki definition exam ke liye best hai — \"most important information, consolidated on a single screen, monitored at a glance\". Dashboard ka kaam sirf numbers dikhana nahi, **decision** possible banana hai: kya ho raha hai (monitor), kyun ho raha hai (analyse), aur ab kya karna hai (action). Type decide hota hai **audience aur time horizon** se — CEO ko strategic, floor manager ko operational.",
    "sections": [
      {
        "type": "definition",
        "title": "Dashboard ki definition",
        "kicker": "Definition",
        "body": "Dashboard ek **single-screen visual display** hai jisme ek ya zyada objectives ke liye sabse zaroori information (KPI, trend, comparison) consolidate karke rakhi jaati hai, taaki user use **ek nazar mein monitor** kar sake. Stephen Few ki definition: \"a visual display of the most important information needed to achieve one or more objectives, consolidated and arranged on a single screen so the information can be monitored at a glance.\"",
        "body2": "Isme teen shartein hain: (i) **important** information (sab kuch nahi), (ii) **single screen** (scroll karke dhoondhna na pade), (iii) **at a glance** (5 second mein samajh aaye). Dashboard ≠ data dump.",
        "chips": [
          "Single screen",
          "At a glance",
          "KPIs",
          "Monitoring + action",
          "Stephen Few"
        ]
      },
      {
        "type": "cards",
        "title": "Dashboard ke core components",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "target",
            "title": "KPI cards",
            "body": "Top par 4–6 headline numbers: revenue, orders, conversion, churn — target ke saath (actual vs target)."
          },
          {
            "icon": "chart",
            "title": "Trend charts",
            "body": "Time-series line/area — 'abhi kaisa chal raha hai' ka context."
          },
          {
            "icon": "metrics",
            "title": "Comparisons",
            "body": "Previous period, same period last year, target, benchmark — bina comparison ke number ka matlab nahi."
          },
          {
            "icon": "list",
            "title": "Filters aur dimension",
            "body": "Region, product, time range — ek dashboard, kai views (parameter-driven)."
          },
          {
            "icon": "warn",
            "title": "Alerts / thresholds",
            "body": "Threshold cross hone par red highlight ya notification — exception-driven management."
          },
          {
            "icon": "search",
            "title": "Drill-down",
            "body": "KPI → trend → transaction level, jaise Shneiderman ka 'overview first, zoom and filter, details on demand'."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Dashboard ke 4 types",
        "kicker": "Types",
        "cards": [
          {
            "icon": "clock",
            "title": "Operational",
            "body": "Real-time/near real-time process monitoring. Audience: supervisors. Refresh: seconds–minutes. Example: call-centre queue, server uptime, delivery tracking, stock levels."
          },
          {
            "icon": "metrics",
            "title": "Tactical",
            "body": "Short-term performance vs target, department level. Audience: managers. Refresh: daily–weekly. Example: sales vs target by region, campaign spend, SLA compliance."
          },
          {
            "icon": "executive",
            "title": "Strategic",
            "body": "Long-term health of organisation. Audience: executives/board. Refresh: monthly–quarterly. Example: revenue growth, market share, customer satisfaction, ESG metrics."
          },
          {
            "icon": "search",
            "title": "Analytical",
            "body": "Explore 'why' — many dimensions, drill-down, filters. Audience: analysts. Refresh: on demand. Example: root-cause analysis of churn by cohort/plan/region."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Type Comparison",
        "kicker": "Comparison",
        "columns": [
          "Operational",
          "Tactical",
          "Strategic",
          "Analytical"
        ],
        "rows": [
          {
            "label": "Audience",
            "values": [
              "supervisors",
              "managers",
              "executives",
              "analysts"
            ]
          },
          {
            "label": "Horizon",
            "values": [
              "real time",
              "days–weeks",
              "months–years",
              "any"
            ]
          },
          {
            "label": "Refresh",
            "values": [
              "seconds",
              "daily/weekly",
              "monthly",
              "on demand"
            ]
          },
          {
            "label": "Detail",
            "values": [
              "current status",
              "vs target",
              "high-level KPI",
              "deep drill-down"
            ]
          },
          {
            "label": "Action",
            "values": [
              "fix now",
              "adjust plan",
              "strategy",
              "explain why"
            ]
          },
          {
            "label": "Chart type",
            "values": [
              "gauges, alerts, sparklines",
              "bar + target line",
              "KPI + trend",
              "many linked views"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00ff88",
          "#ff8800",
          "#aa00ff"
        ]
      },
      {
        "type": "points",
        "title": "Dashboard vs Report vs Scorecard",
        "kicker": "Difference",
        "points": [
          "**Dashboard:** single screen, visual, at-a-glance monitoring, interactive; sawaal \"kya ho raha hai?\"",
          "**Report:** multi-page, detailed, tabular, static/scheduled; sawaal \"poora detail kya hai?\" (jaise monthly P&L).",
          "**Scorecard:** chhota set of KPIs **target ke against**, strategy tracking ke liye (Balanced Scorecard); sawaal \"target achieve ho raha hai?\"",
          "**Exam line:** dashboard = monitoring, report = detail, scorecard = accountability. Teeno BI ke delivery formats hain, ek hi cheez nahi."
        ]
      },
      {
        "type": "diagram",
        "title": "Dashboard Types Matrix",
        "kicker": "Diagram",
        "diagram": "ds5-dashboard-types",
        "caption": "Operational, tactical, strategic aur analytical — audience, refresh rate aur action ke hisaab se"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Definition (Few):** most important information, consolidated, single screen, monitored at a glance.",
          "**3 questions:** what is happening (monitor), why (analyse), what to do (action).",
          "**Components:** KPI cards, trend charts, comparisons/targets, filters, alerts, drill-down.",
          "**Types:** operational (real-time), tactical (days–weeks), strategic (months–years), analytical (why, drill-down).",
          "**Difference:** dashboard = monitor, report = detail, scorecard = KPI vs target accountability.",
          "**Rule:** 5–7 KPIs, one screen, no scroll — sab kuch dikhana dashboards ka sabse bada mistake hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define dashboard. Explain the types of dashboards with their characteristics and examples.",
        "answer": "**Definition (Stephen Few):** \"A dashboard is a visual display of the most important information needed to achieve one or more objectives, consolidated and arranged on a single screen so the information can be monitored at a glance.\"\n\nIsme teen conditions hain — **important information only**, **single screen**, **at a glance (5 second)**.\n\n**Types of dashboards:**\n\n| Type | Audience | Time horizon / refresh | Purpose | Example |\n| Operational | supervisors, staff | real time (seconds–minutes) | current process status, alerts | call-centre queue, server health, delivery tracking |\n| Tactical | department managers | daily / weekly | performance vs target | sales vs target by region, campaign spend, SLA |\n| Strategic | executives, board | monthly / quarterly | long-term health | revenue growth, market share, NPS, ESG |\n| Analytical | analysts | on demand | find \"why\", many dimensions | churn root-cause by cohort/plan/region |\n\n**Characteristics:**\n- **Operational** — high refresh, exception alerts, minimal context, action oriented.\n- **Tactical** — comparisons (target, previous period), trend charts, filters by team.\n- **Strategic** — few KPIs, trend + target, drill-down halka, clean design.\n- **Analytical** — linked views, cross-filtering, drill-down to transaction level.\n\n**Components (common):** KPI cards (actual vs target), trend charts, comparisons, filters, alerts/thresholds, drill-down path, timestamp + data source.\n\n**Diagram:** Refer to the Dashboard Types Matrix diagram."
      },
      {
        "question": "Differentiate between a dashboard, a report and a scorecard.",
        "answer": "Teeno BI ke **delivery formats** hain, par purpose aur design alag hai.\n\n| Point | Dashboard | Report | Scorecard |\n| Purpose | monitor current state, at a glance | detailed information, record | track KPIs against targets |\n| Layout | single screen, visual, no scroll | multi-page, tabular + charts | compact KPI set + targets |\n| Data | current + comparison (vs target/YoY) | full history, line-level detail | periodic KPI values, RAG status |\n| Interactivity | high (filters, drill-down) | low (static/scheduled) | medium |\n| Audience | managers, ops, executives | analysts, auditors, compliance | executives, strategy owners |\n| Refresh | minutes–days | daily/monthly schedule | weekly/monthly |\n| Question | \"kya ho raha hai abhi?\" | \"poora detail kya hai?\" | \"target achieve ho raha hai?\" |\n| Example | sales ops dashboard | monthly P&L statement | Balanced Scorecard (4 perspectives) |\n\n**Kya common hai:** dono KPI aur charts use karte hain, dono BI tool se bante hain.\n\n**Kab kya:** real-time action chahiye → dashboard; audit/records chahiye → report; accountability aur strategy tracking chahiye → scorecard. Achhe BI systems mein teeno ek hi data model (star schema) se bante hain.\n\n**Diagram:** Refer to the Dashboard Types Matrix diagram."
      },
      {
        "question": "What are the essential components and characteristics of a good dashboard?",
        "answer": "**Essential components:**\n1. **KPI cards** — 4–6 headline numbers, har ek ke saath target/previous period (bina comparison ke number useless).\n2. **Trend charts** — line/area se \"abhi kaisa chal raha hai\" ka context.\n3. **Comparisons** — target, previous period, same period last year, benchmark.\n4. **Filters/parameters** — region, product, time range; ek dashboard se kai views.\n5. **Alerts/thresholds** — exception par colour change ya notification.\n6. **Drill-down** — KPI se detail tak (Shneiderman: overview → zoom/filter → details on demand).\n7. **Metadata** — last refresh time, data source, definitions (KPI ka formula clearly likha ho).\n\n**Characteristics of a good dashboard:**\n- **Single screen, no scroll** — most important top-left (F-pattern).\n- **5-second rule** — ek nazar mein status samajh aaye.\n- **5–7 KPIs max** — 7±2 working memory limit.\n- **Context** — har number ke saath comparison ya sparkline.\n- **Right chart for the question** — trend → line, comparison → bar, distribution → histogram.\n- **Consistent colour meaning** — green = good, red = bad, sirf exception highlight.\n- **Performance** — 1–3 second load; pre-aggregation.\n- **Accessibility aur responsive** — mobile par KPI cards, colourblind-safe palette.\n\n**Common mistakes:** sab kuch dikhana, 3-D pie, gauges/speedometers, chartjunk, stale data, aur bina definition ke KPIs.\n\n**Diagram:** Refer to the Dashboard Types Matrix diagram."
      }
    ]
  },
  {
    "id": "dashboard-evolution",
    "number": "5.4",
    "title": "Evolution of Dashboard",
    "subtitle": "EIS se AI-driven augmented analytics tak — paanch generation",
    "icon": "timeline",
    "accent": "#ff8800",
    "englishDefinition": "Dashboard evolution follows the evolution of business intelligence. Generation 1 (1980s) was the Executive Information System: static, character-based screens refreshed nightly from mainframe extracts, built by IT for senior executives. Generation 2 (1990s) was the BI and OLAP era — Cognos, BusinessObjects, MicroStrategy, Essbase cubes, dimensional star schemas, scheduled refreshes and pixel-perfect reports. Generation 3 (2000s to early 2010s) brought self-service BI and in-memory visual analytics (Tableau, QlikView, Spotfire, Power Pivot), drag-and-drop dashboards, data extracts and business-user ownership. Generation 4 (2010s) added cloud, mobile and real-time streaming dashboards, embedded analytics, and governance of self-service content. Generation 5 (2020s) is AI-augmented: natural-language query, automated insight generation (augmented analytics), Copilot-style assistants, generative BI narratives, composable/headless BI and metric layers. Each generation widened the audience — from a few executives to every employee — and shortened the time from data to decision.",
    "intro": "Dashboard aaj jaisa dikhta hai, waisa hamesha nahi tha. 1980s mein executive ki screen par green text ki 20 lines hoti thin, jo raat ko batch job se update hoti thin. 1990s mein OLAP cubes aur BI tools aaye, 2000s mein Tableau ne drag-and-drop se **self-service** laaya, 2010s mein cloud + mobile + real-time, aur ab 2020s mein **AI** — natural language query, auto insights, Copilot. Exam mein \"evolution of dashboard\" ka answer **generation-wise table** se best banta hai: era, technology, audience, characteristic.",
    "sections": [
      {
        "type": "definition",
        "title": "Evolution ka matlab",
        "kicker": "Definition",
        "body": "Dashboard evolution ka matlab hai **kaise, kis ke liye aur kitni jaldi** information dikhti thi — iska badalna. Har generation mein teen cheezein badli hain: **technology** (batch → in-memory → cloud → AI), **audience** (executives only → every employee → customer/embedded) aur **latency** (nightly → hourly → real time → predictive).",
        "body2": "Isliye evolution ko seedha line samjho: **static → interactive → self-service → real-time + mobile → AI-augmented**. Har step ne 'dashboard banane wale' ko IT se business user ki taraf shift kiya.",
        "chips": [
          "EIS → BI → Self-service → Real-time → AI",
          "Batch → real time",
          "IT-built → self-service"
        ]
      },
      {
        "type": "cards",
        "title": "Paanch generations",
        "kicker": "Generations",
        "cards": [
          {
            "icon": "executive",
            "title": "Gen 1 — EIS (1980s)",
            "body": "Executive Information System: mainframe extract, character-based static screens, nightly refresh. Audience: sirf top executives. Build: IT."
          },
          {
            "icon": "database",
            "title": "Gen 2 — BI + OLAP (1990s)",
            "body": "Cognos, BusinessObjects, MicroStrategy, Essbase cubes; star schema; scheduled refresh; pixel-perfect reports + first dashboards. Audience: managers."
          },
          {
            "icon": "chart",
            "title": "Gen 3 — Self-service (2000s–2010s)",
            "body": "Tableau, QlikView, Spotfire, Power Pivot: drag-and-drop, in-memory extracts, visual analytics; business user apna dashboard banata hai."
          },
          {
            "icon": "globe",
            "title": "Gen 4 — Cloud + real-time (2010s)",
            "body": "Cloud BI (Power BI Service, Tableau Cloud), mobile dashboards, streaming/Kafka real-time ops, embedded analytics, governance aur data catalogues."
          },
          {
            "icon": "ai",
            "title": "Gen 5 — AI-augmented (2020s)",
            "body": "Natural language query ('is quarter ka revenue?'), auto insights, anomaly detection, Copilot/GenBI narratives, metric layer aur headless/composable BI."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Generation-wise Comparison",
        "kicker": "Comparison",
        "columns": [
          "Gen 1 (1980s)",
          "Gen 2 (1990s)",
          "Gen 3 (2000s)",
          "Gen 4 (2010s)",
          "Gen 5 (2020s)"
        ],
        "rows": [
          {
            "label": "Technology",
            "values": [
              "mainframe + batch",
              "OLAP cubes, SQL",
              "in-memory viz",
              "cloud, streaming",
              "AI/LLM, semantic layer"
            ]
          },
          {
            "label": "Refresh",
            "values": [
              "nightly",
              "daily/weekly",
              "extract refresh",
              "real time",
              "real time + predictive"
            ]
          },
          {
            "label": "Built by",
            "values": [
              "IT only",
              "IT + BI team",
              "business user",
              "business + governance",
              "business + AI assistant"
            ]
          },
          {
            "label": "Audience",
            "values": [
              "executives",
              "managers",
              "analysts",
              "all employees",
              "employees + customers"
            ]
          },
          {
            "label": "Interaction",
            "values": [
              "none (static)",
              "drill-down",
              "drag-drop, filter",
              "mobile, embedded",
              "natural language"
            ]
          }
        ],
        "columnColors": [
          "#8a95ad",
          "#00d4ff",
          "#00ff88",
          "#ff8800",
          "#aa00ff"
        ]
      },
      {
        "type": "points",
        "title": "Evolution ke drivers",
        "kicker": "Drivers",
        "points": [
          "**In-memory computing:** RAM sasta hua → live data par instant filter/drill (Tableau ka VizQL + Hyper, Power BI ka VertiPaq).",
          "**Cloud:** storage/compute elastic; dashboard kisi bhi device se, kisi bhi location se; SaaS BI ka rise.",
          "**Mobile + UX:** design thinking aur mobile-first layout — 10-foot wallboard se 5-inch phone tak.",
          "**Data volume aur streaming:** Kafka/IoT ne real-time ops dashboards zaroori bana diye.",
          "**Machine learning + LLM:** auto pattern detection, forecasting, anomaly alerts, aur natural-language BI.",
          "**Governance:** self-service ke baad 'data swamp' problem → metric definitions, catalogues aur certified datasets."
        ]
      },
      {
        "type": "points",
        "title": "Aaj ke trends (2025+)",
        "kicker": "Current",
        "points": [
          "**Augmented analytics:** tool khud insight suggest karta hai (\"West region ka churn 12% badha — reason: delivery delay\").",
          "**Generative BI / Copilot:** natural language se chart banana aur narrative summary likhna; risk — hallucinated numbers, isliye semantic layer zaroori.",
          "**Headless / embedded analytics:** dashboard product ke andar (bank app, SaaS), alag BI portal mein nahi.",
          "**Metric layer / semantic layer:** ek hi definition (\"active user\") sab dashboards mein — self-service ki sabse badi problem ka fix.",
          "**Real-time + decision intelligence:** dashboard se seedha action trigger (alert → workflow → ticket)."
        ]
      },
      {
        "type": "diagram",
        "title": "Dashboard Evolution Timeline",
        "kicker": "Diagram",
        "diagram": "ds5-dashboard-evolution",
        "caption": "EIS → BI/OLAP → self-service → cloud/real-time → AI-augmented: audience aur latency ka safar"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Gen 1 (1980s) EIS:** static, character-based, nightly batch, executives only.",
          "**Gen 2 (1990s) BI/OLAP:** cubes, star schema, scheduled refresh, pixel-perfect reports.",
          "**Gen 3 (2000s–10s) self-service:** Tableau/Qlik/Power BI, drag-and-drop, in-memory, business user.",
          "**Gen 4 (2010s):** cloud, mobile, real-time streaming, embedded analytics, governance.",
          "**Gen 5 (2020s):** AI-augmented — NLQ, auto insights, Copilot, metric/semantic layer.",
          "**Trend line:** audience badhi (executives → all → customers), latency ghati (nightly → real time)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the evolution of dashboards from Executive Information Systems to AI-driven dashboards.",
        "answer": "Dashboard evolution business intelligence ke saath chala — paanch generations mein:\n\n**Gen 1 — EIS (1980s):** Executive Information Systems. Mainframe se nightly extract, **character-based static screens** (green text), koi interaction nahi. Sirf top executives ke liye, IT build karta tha.\n\n**Gen 2 — BI aur OLAP (1990s):** Cognos, BusinessObjects, MicroStrategy, Essbase cubes. **Dimensional modelling** (star schema), scheduled refresh, pixel-perfect reports ke saath pehle dashboards. Audience: managers; IT/BI team banati thi.\n\n**Gen 3 — Self-service BI (2000s–2010s):** Tableau, QlikView, Spotfire, Power Pivot. **In-memory engine + drag-and-drop**, data extracts, visual analytics. Ab **business user khud dashboard banata hai** — IT bottleneck khatam.\n\n**Gen 4 — Cloud, mobile, real-time (2010s):** Cloud BI (Power BI Service, Tableau Cloud), mobile dashboards, Kafka streaming se **real-time ops dashboards**, embedded analytics product ke andar, aur self-service ke saath **governance** (catalogue, certified data).\n\n**Gen 5 — AI-augmented (2020s):** **Natural language query**, automated insight generation (augmented analytics), anomaly detection, Copilot/GenBI narrative, **semantic/metric layer**, headless BI.\n\n**Evolution ke 3 axis:**\n1. **Audience** — few executives → managers → analysts → all employees → customers (embedded).\n2. **Latency** — nightly batch → daily → real time → predictive.\n3. **Ownership** — IT → BI team → business user → business + AI assistant.\n\n**Diagram:** Refer to the Dashboard Evolution Timeline diagram."
      },
      {
        "question": "What were the limitations of traditional (first generation) dashboards and how did self-service BI solve them?",
        "answer": "**Traditional / Gen-1 dashboard limitations:**\n1. **Static aur non-interactive** — character-based screens, drill-down nahi; ek naya sawaal = naya report request.\n2. **Batch latency** — data raat ko update hota tha; subah ka decision pichhle din ke data par.\n3. **IT dependency** — har change ke liye IT queue; backlog mahino ka.\n4. **Rigid, pre-defined metrics** — jo pehle se define tha wahi dikhta tha; ad-hoc analysis possible nahi.\n5. **Sirf executives** — operational teams ke paas kuch nahi.\n6. **Poor visual design** — dense tables, chartjunk, koi hierarchy nahi.\n\n**Self-service BI (Gen 3) ne kaise solve kiya:**\n- **In-memory engine** (VizQL/Hyper, VertiPaq) — filter/drill par instant response.\n- **Drag-and-drop interface** — business user bina coding chart banata hai.\n- **Data extracts aur connectors** — Excel/CSV/DB se seedha connect.\n- **Iterative visual analysis** — sawaal → chart → naya sawaal, minutes mein.\n- **Dashboard sharing/portal** — ek baar banao, team ke saath share.\n\n**Naye problems jo aaye (isliye Gen 4/5):** multiple versions of truth, data swamp, governance ki kami, performance issues, aur galat chart design — inhe metric layer, catalogue aur AI assistance se solve kiya ja raha hai.\n\n**Diagram:** Refer to the Dashboard Evolution Timeline diagram."
      },
      {
        "question": "Discuss the current trends in dashboard and business intelligence technology.",
        "answer": "**1. Augmented analytics** — tool khud patterns, drivers aur anomalies suggest karta hai (\"churn West mein 12% badha, reason: delivery delay\"), analyst ko har cheez manually dhoondhni nahi padti.\n\n**2. Generative BI / Copilot** — natural language se sawaal, chart aur narrative summary; LLM se 'explain this chart'. Risk: **hallucinated numbers**, isliye semantic layer aur verified metrics zaroori.\n\n**3. Semantic / metric layer** — ek hi definition ('active user', 'revenue') sab dashboards mein; self-service ka 'multiple versions of truth' problem solve karta hai.\n\n**4. Real-time aur streaming dashboards** — Kafka/IoT se seconds-level refresh; ops, fraud aur logistics ke liye.\n\n**5. Embedded aur headless analytics** — dashboard product ke andar (bank app, SaaS portal), alag BI tool kholne ki zaroorat nahi; APIs se custom UI.\n\n**6. Mobile-first aur responsive design** — KPI cards, vertical scroll, touch interactions; field staff ke liye.\n\n**7. Cloud + composable BI** — storage/compute elastic, cost per query; chhote modular services.\n\n**8. Data governance aur trust** — catalogues, lineage, certified datasets, accessibility (WCAG), data privacy (GDPR/EU AI Act).\n\n**9. Decision intelligence** — dashboard se seedha action: alert → workflow → ticket/automation (dashboard sirf dekhne ki cheez nahi rehti).\n\n**Diagram:** Refer to the Dashboard Evolution Timeline diagram."
      }
    ]
  },
  {
    "id": "dashboard-design",
    "number": "5.5",
    "title": "Dashboard Design and Principles",
    "subtitle": "5-second rule, KPI hierarchy, Gestalt, colour aur layout",
    "icon": "layers",
    "accent": "#aa00ff",
    "englishDefinition": "Dashboard design is the discipline of arranging metrics, charts and controls on one screen so that the intended message is understood within seconds and the right action follows. Its core principles are: the five-second rule (the purpose and status must be readable at a glance); a hierarchy of importance (headline KPIs top-left, trends next, detail last, following the F- or Z-pattern of reading); Shneiderman's mantra (overview first, zoom and filter, details on demand); context for every number (target, previous period, benchmark, sparkline); the correct chart for the question; restraint in colour (grey base plus one accent for exceptions, colour-blind-safe palettes, consistent meaning); Gestalt grouping (proximity, similarity, enclosure, connection) to show relationships without borders; high data-ink ratio and no chartjunk; consistent typography with few sizes and right-aligned numbers; and interactive affordances such as filters, cross-highlighting and drill-down that respond within one to three seconds.",
    "intro": "Achha dashboard banane ka rule simple hai: **jo sabse important hai wo sabse pehle, sabse bada aur sabse upar** — baaki sab uske baad. Stephen Few ka **5-second rule** kehta hai ki ek dashboard 5 second mein samajhna chahiye: kya ho raha hai, kya theek hai, kya kharab hai. Design ke teen tools yaad rakho: **hierarchy** (importance ka order), **Gestalt** (aankh cheezon ko kaise group karti hai) aur **colour** (sirf exception highlight karne ke liye, decoration ke liiye nahi).",
    "sections": [
      {
        "type": "definition",
        "title": "Dashboard design kya hai",
        "kicker": "Definition",
        "body": "Dashboard design metrics, charts aur controls ko **ek screen par is tarah arrange** karna hai ki intended message seconds mein samajh aaye aur sahi action ho. Ye **information design** hai — data analysis aur graphic design ka intersection. Goal sundarta nahi, **clarity** hai: kam se kam ink mein maximum insight.",
        "body2": "Design ke 4 basic sawaal: (1) audience kaun hai (executive / analyst / operator)? (2) unka **decision** kya hai? (3) kaun se 5–7 KPI us decision ko drive karte hain? (4) un KPIs ke liye kaunsa chart sahi hai? Inka jawab mile to layout apne aap ban jaata hai.",
        "chips": [
          "5-second rule",
          "Hierarchy",
          "Shneiderman mantra",
          "Data-ink ratio",
          "Gestalt"
        ]
      },
      {
        "type": "cards",
        "title": "Core principles",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "clock",
            "title": "5-second rule",
            "body": "Ek nazar mein: purpose, current status aur ek exception dikh jaye. Nahi dikha to dashboard fail hai."
          },
          {
            "icon": "target",
            "title": "Hierarchy of importance",
            "body": "Headline KPIs top-left (sabse pehle padha jaata hai) → trend → detail. F-pattern / Z-pattern follow karo."
          },
          {
            "icon": "search",
            "title": "Overview first, zoom and filter, details on demand",
            "body": "Shneiderman ka mantra: pehle poora picture, phir filter, phir drill-down — ulta nahi."
          },
          {
            "icon": "metrics",
            "title": "Context for every number",
            "body": "Actual vs target, previous period, YoY, benchmark ya sparkline — bina comparison ke KPI ka matlab nahi."
          },
          {
            "icon": "chart",
            "title": "Right chart, right question",
            "body": "Comparison → bar, trend → line, distribution → histogram, relationship → scatter, part-to-whole → stacked bar."
          },
          {
            "icon": "eye",
            "title": "Colour as information",
            "body": "Grey base + ek accent colour for exception; max 5–7 colours; colourblind-safe; meaning consistent across pages."
          }
        ]
      },
      {
        "type": "points",
        "title": "Layout aur visual hierarchy",
        "kicker": "Layout",
        "points": [
          "**Grid:** 12-column grid use karo; KPI cards ek row mein equal width; charts do-thaai/ek-thaai mein. Alignment hi professionalism deta hai.",
          "**Above the fold:** sabse important cheez screen ke top-left quadrant mein — aankh wahin se shuru karti hai (F-pattern).",
          "**Reading order:** F-pattern (left→right, top→bottom scans) ya Z-pattern (top-left → top-right → diagonal → bottom-right).",
          "**White space:** ghatti hui spacing se groups banti hain; 8px ka base spacing scale (8/16/24/32) use karo.",
          "**Grouping (Gestalt):** **proximity** (paas wale related), **similarity** (same colour/shape = same type), **enclosure** (box = ek section), **connection** (line jo related points jode).",
          "**Progressive disclosure:** detail tooltip/drill-down mein rakho, screen par nahi — warna 5-second rule mar jaata hai."
        ]
      },
      {
        "type": "points",
        "title": "Colour, type aur interaction rules",
        "kicker": "Polish",
        "points": [
          "**Colour meaning fix karo:** green = good/on-track, red = bad/off-track, amber = warning — poore product mein same. Colour ke bina bhi samajh aaye (labels/arrows ke saath).",
          "**Exception highlight:** poora dashboard grey, jahan dhyan chahiye wahan accent (lime/red). Sab colourful = kuch bhi highlighted nahi.",
          "**Colourblind-safe:** red–green avoid; blue–orange ya viridis; intensity (sequential) ordered data ke liye.",
          "**Typography:** 3 sizes kaafi hain (KPI 28–36px, section 14–16px, label 11–12px); numbers **right-aligned** aur consistent decimals (1 decimal kaafi).",
          "**No chartjunk:** 3-D, shadows, gradients, background images, gauges/speedometers — hata do; data-ink ratio badhao.",
          "**Interaction:** filter, cross-highlight, drill-down, tooltip; response **1–3 second** ke andar; default filters sensible (last 30 days), reset ka option."
        ]
      },
      {
        "type": "comparison",
        "title": "Design Do vs Don't",
        "kicker": "Comparison",
        "columns": [
          "Do",
          "Don't"
        ],
        "rows": [
          {
            "label": "KPIs",
            "values": [
              "5–7 headline KPIs",
              "20 KPIs ek screen par"
            ]
          },
          {
            "label": "Charts",
            "values": [
              "bar, line, sparkline",
              "3-D pie, gauge, speedometer"
            ]
          },
          {
            "label": "Colour",
            "values": [
              "grey + 1 accent",
              "rainbow, har series ka alag bright colour"
            ]
          },
          {
            "label": "Axis",
            "values": [
              "zero baseline + label",
              "truncated axis, dual axis"
            ]
          },
          {
            "label": "Text",
            "values": [
              "short labels, units clear",
              "long sentences, missing units"
            ]
          },
          {
            "label": "Data",
            "values": [
              "timestamp + source + definition",
              "stale data, undefined KPI"
            ]
          }
        ],
        "columnColors": [
          "#00ff88",
          "#ff7a90"
        ]
      },
      {
        "type": "diagram",
        "title": "Dashboard Layout Wireframe",
        "kicker": "Diagram",
        "diagram": "ds5-dashboard-design",
        "caption": "KPI row top-left, trend charts, filters aur detail panel — 5-second rule ka layout"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**5-second rule:** purpose, status aur exception ek nazar mein dikhe.",
          "**Hierarchy:** most important top-left; F/Z-pattern; overview → filter → detail (Shneiderman).",
          "**Context:** har number ke saath target/previous period/benchmark — warna number meaningless.",
          "**Gestalt:** proximity, similarity, enclosure, connection se grouping; borders ki zaroorat kam.",
          "**Colour:** grey base + one accent, colourblind-safe, meaning consistent; chartjunk zero.",
          "**Interaction:** filters, cross-highlight, drill-down, 1–3s response; disclaimer/metadata zaroor."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the principles of dashboard design.",
        "answer": "**Dashboard design ka goal:** ek screen par sahi information, sahi order mein, taaki decision fast ho.\n\n**1. Five-second rule (Stephen Few):** user 5 second mein bata sake — kya ho raha hai, kya theek hai, kya kharab hai. Iske liye kam KPIs, bada font aur clear hierarchy.\n\n**2. Hierarchy of importance:** most important KPI **top-left** (aankh wahin se padhti hai), phir trend, phir detail. F-pattern/Z-pattern follow karo; sab kuch equal size = koi hierarchy nahi.\n\n**3. Shneiderman's mantra:** *overview first, zoom and filter, then details on demand.* Pehle poora picture, phir filter, phir drill-down — ulta karne se user kho jaata hai.\n\n**4. Context for every number:** actual vs target, previous period, YoY, benchmark ya sparkline. \"Revenue 42 lakh\" bina comparison ke bekaar hai.\n\n**5. Correct chart for the question:** comparison → bar; trend → line; distribution → histogram/box; relationship → scatter; part-to-whole → stacked bar (pie sirf 5–6 slices).\n\n**6. Gestalt grouping:** proximity, similarity, enclosure, connection — related metrics paas rakho, same colour/shape same category, box se section, line se connection.\n\n**7. Colour discipline:** grey base + **ek accent** exception ke liye; sequential/diverging palette; colourblind-safe (blue–orange); meaning consistent.\n\n**8. Less is more:** high data-ink ratio, no 3-D, no gauges, no chartjunk; 3 font sizes; numbers right-aligned.\n\n**9. Interaction:** filters, cross-highlighting, drill-down, tooltips; response 1–3 second.\n\n**10. Trust:** timestamp, data source, KPI definition, aur accessibility (keyboard, contrast).\n\n**Diagram:** Refer to the Dashboard Layout Wireframe diagram."
      },
      {
        "question": "What is the five-second rule? Explain Shneiderman's mantra with a dashboard layout example.",
        "answer": "**Five-second rule:** ek achha dashboard 5 second mein apna message de de — user ko scroll, click ya\nsochna na pade. Test: kisi naye user ko 5 second dashboard dikhao aur poochho \"kya ho raha hai?\" —\nagar wo bata de, design theek hai.\n\n**Iske liye 4 cheezein:** (i) 5–7 KPIs max, (ii) hierarchy (bada → chhota), (iii) context (target/trend), (iv) exception highlight (accent colour).\n\n**Shneiderman's mantra:** *\"Overview first, zoom and filter, then details on demand.\"*\n\n**Layout example (sales dashboard):**\n1. **Top row — overview (KPI cards):** Revenue 42L (target 45L, ▼6%), Orders 1,240 (▲4%), Conversion 18% (target 20%), Churn 2.1% (▲0.3). Colour sirf off-track KPIs par.\n2. **Second row — trend/zoom:** monthly revenue line with target line; region filter top-right.\n3. **Third row — comparison:** top 10 products bar (sorted), region-wise stacked bar (channel mix).\n4. **Filters:** date range, region, channel — default \"last 30 days\".\n5. **Details on demand:** KPI click → drill-down table (transactions), tooltip par exact value + definition.\n6. **Metadata:** \"Last refresh 09:15, source: warehouse.sales, revenue = net of returns\".\n\n**Anti-pattern:** sabse pehle ek 3-D pie chart, 20 KPIs, har cheez bright colour mein, aur bina timestamp — 5-second rule turant fail.\n\n**Diagram:** Refer to the Dashboard Layout Wireframe diagram."
      },
      {
        "question": "Discuss common dashboard design mistakes and how Gestalt principles and colour theory help avoid them.",
        "answer": "**Common mistakes:**\n1. **Sab kuch dikhana** — 20+ KPIs, scroll karna padta hai; 5-second rule fail.\n2. **Wrong chart** — 3-D pie, gauge/speedometer, time-series ko bar chart mein.\n3. **Chartjunk** — gradients, shadows, background images, clip-art, unnecessary gridlines.\n4. **Truncated ya dual axis** — misleading comparison.\n5. **Colour misuse** — rainbow palette, red/green only, har series ka bright colour (kuch highlight nahi hota).\n6. **No context** — target/previous period ke bina number; undefined KPI.\n7. **Poor hierarchy** — sab same size; important metric kahin beech mein.\n8. **Stale data / no timestamp** — decision galat data par.\n9. **Inconsistent definitions** — do pages par 'revenue' ka matlab alag.\n\n**Gestalt principles ka role:**\n- **Proximity** — related metrics paas rakho, unrelated door (spacing se grouping, box ki zaroorat nahi).\n- **Similarity** — same colour/shape = same category; alag rang = alag cheez.\n- **Enclosure** — halka background box ek section ko define karta hai.\n- **Connection** — line jo related points jode (jaise target ke saath actual).\n- **Closure/continuity** — aankh adhoori shapes complete kar leti hai; alignment se clean grid banta hai.\n\n**Colour theory ka role:**\n- **Categorical** data → distinct hues (max 5–7), colourblind-safe (blue–orange).\n- **Ordered** data → sequential single-hue (light → dark) ya viridis; rainbow avoid.\n- **Diverging** (−ve to +ve) → two hues with neutral middle (blue-white-red) — par red/green avoid.\n- **Highlight** → grey base + one accent; colour ke saath label/shape rakho (redundant encoding).\n\n**Diagram:** Refer to the Dashboard Layout Wireframe diagram."
      }
    ]
  },
  {
    "id": "display-media",
    "number": "5.6",
    "title": "Display Media for Dashboard",
    "subtitle": "Wallboard, desktop, tablet, mobile, projector, print — har screen ke apne rules",
    "icon": "dashboard",
    "accent": "#00d4ff",
    "englishDefinition": "Display media are the physical and digital channels through which a dashboard reaches its audience. Common media are the desktop or laptop monitor (the analyst's primary workspace, typically 1366–1920 px wide), large wall-mounted screens and video walls (dashboards viewed from 3–5 metres, needing large fonts and few metrics), projectors for meeting rooms, tablets (touch interaction, one-column responsive layout) and smartphones (KPI cards, vertical scroll), printed or PDF dashboards (static snapshots for reports), plus embedded dashboards inside other applications, email digests, digital signage and emerging voice or AR displays. Media differ in resolution and pixel density, physical size and viewing distance, ambient light and contrast, input method (mouse, touch, remote) and whether they allow interaction. Design must therefore be responsive and adaptive: the same underlying data model, but a layout, font scale, colour contrast and interaction model chosen for each medium.",
    "intro": "Ek hi dashboard sab jagah fit nahi hota. Analyst 27-inch monitor par 12 charts dekh sakta hai, lekin factory ke **wallboard** par 5 metre door se sirf 4 bade numbers dikhte hain, aur phone par ek column ke KPI cards. Isliye **display media** ek design decision hai: resolution, size, viewing distance, ambient light, input method (mouse/touch/remote) aur interactivity — in paanch cheezon se decide hota hai ki layout kaisa hoga.",
    "sections": [
      {
        "type": "definition",
        "title": "Display media kya hain",
        "kicker": "Definition",
        "body": "Display media wo **physical/digital channels** hain jinse dashboard audience tak pahunchta hai — monitor, laptop, tablet, smartphone, wallboard/video wall, projector, print/PDF, embedded app, email digest, digital signage, voice assistant aur AR/VR.",
        "body2": "Har medium ke constraints alag hain: **resolution aur pixel density** (kitni detail fit hogi), **physical size aur viewing distance** (font kitna bada), **ambient light** (contrast), **input method** (mouse/touch/remote/voice) aur **interactivity** (filter/drill possible ya nahi). Design inhi constraints se banta hai.",
        "chips": [
          "Monitor",
          "Wallboard",
          "Mobile",
          "Projector",
          "Print",
          "Embedded"
        ]
      },
      {
        "type": "cards",
        "title": "Main display media",
        "kicker": "Media",
        "cards": [
          {
            "icon": "dashboard",
            "title": "Desktop / laptop monitor",
            "body": "Analyst ka main workspace, 1366–1920 px; mouse hover, tooltip, cross-filter, drill-down — full interactivity."
          },
          {
            "icon": "chart",
            "title": "Wallboard / large screen",
            "body": "3–5 m viewing distance, 1080p ya 4K; 4–6 KPIs, 24–36 px fonts, auto-rotate pages, no interaction (remote)."
          },
          {
            "icon": "eye",
            "title": "Projector (meeting room)",
            "body": "Ambient light se contrast girta hai; bade fonts, high contrast, kam detail; 16:9 aspect."
          },
          {
            "icon": "monitor",
            "title": "Tablet",
            "body": "768–1024 px, touch; one-column responsive, tap targets ≥44 px, swipe between views."
          },
          {
            "icon": "users",
            "title": "Smartphone",
            "body": "360–430 css px, vertical scroll; KPI cards + sparkline, ek chart ek screen, minimal filters."
          },
          {
            "icon": "file",
            "title": "Print / PDF / email",
            "body": "Static snapshot, high contrast, page-break layout, timestamp mandatory; interaction zero."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Media Comparison",
        "kicker": "Comparison",
        "columns": [
          "Desktop",
          "Wallboard",
          "Mobile",
          "Print/PDF"
        ],
        "rows": [
          {
            "label": "Resolution",
            "values": [
              "1920 × 1080",
              "1080p / 4K",
              "360–430 px",
              "A4 @ 150–300 dpi"
            ]
          },
          {
            "label": "Viewing distance",
            "values": [
              "50–70 cm",
              "3–5 m",
              "25–30 cm",
              "30 cm (hand)"
            ]
          },
          {
            "label": "Body font",
            "values": [
              "12–14 px",
              "24–36 px",
              "14–16 px",
              "9–11 pt"
            ]
          },
          {
            "label": "Detail",
            "values": [
              "high (10+ charts)",
              "low (4–6 KPIs)",
              "very low (3–5)",
              "medium, paginated"
            ]
          },
          {
            "label": "Interaction",
            "values": [
              "full",
              "none/remote",
              "touch, swipe",
              "none"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800",
          "#00ff88",
          "#aa00ff"
        ]
      },
      {
        "type": "points",
        "title": "Medium-wise design rules",
        "kicker": "Rules",
        "points": [
          "**Desktop:** multi-column grid, hover tooltips, cross-filtering; 12–14 px labels; keyboard accessibility.",
          "**Wallboard:** **10-foot UI** — 4–6 metrics, 24–36 px text, high contrast (dark bg + bright text), no scroll, auto-rotate slides (15–30 s), colour for status only.",
          "**Tablet:** touch targets ≥ 44 px, one/two column, swipe navigation, no hover-dependent tooltip.",
          "**Phone:** KPI cards stacked, sparkline trend, 1 chart per screen, filters behind a button, thumb-zone ke andar actions.",
          "**Print/PDF:** fixed page size, high contrast, print-friendly colours, page numbers, timestamp + definition, no dark theme.",
          "**Embedded/signage/voice:** brand-matched, minimal chrome, ARIA labels; voice ke liye short spoken summary (\"revenue 6% below target\")."
        ]
      },
      {
        "type": "points",
        "title": "Responsive aur adaptive design",
        "kicker": "Responsive",
        "points": [
          "**Responsive:** layout breakpoints par flow badalta hai (grid → single column), content same rehta hai.",
          "**Adaptive:** medium ke hisaab se content hi badal jaata hai (mobile par 20 charts nahi, sirf top 3 KPIs).",
          "**Fluid typography aur container queries:** font/viewport ke hisaab se scale ho — wallboard par 2x, phone par 1x.",
          "**Performance:** mobile network par payload chhota rakho (aggregated data, lazy load charts).",
          "**Accessibility:** contrast ratio ≥ 4.5:1, colour ke saath text/icon, screen-reader ke liye table fallback, keyboard navigation."
        ]
      },
      {
        "type": "diagram",
        "title": "Display Media Comparison",
        "kicker": "Diagram",
        "diagram": "ds5-display-media",
        "caption": "Wallboard se phone tak — resolution, viewing distance aur font size ke hisaab se layout"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Display media:** monitor, laptop, tablet, phone, wallboard/video wall, projector, print/PDF, embedded, signage, voice/AR.",
          "**Deciding factors:** resolution, physical size, viewing distance, ambient light, input method, interactivity.",
          "**Wallboard (10-foot UI):** 4–6 KPIs, 24–36 px fonts, high contrast, auto-rotate, no interaction.",
          "**Phone:** stacked KPI cards, one chart per screen, touch targets ≥ 44 px, thumb zone.",
          "**Print/PDF:** static, high contrast, timestamp + definition, paginated.",
          "**Responsive = layout badalta hai; adaptive = content badalta hai** — accessibility dono mein mandatory."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the different display media used for dashboards and the design considerations for each.",
        "answer": "Display media wo channels hain jinse dashboard user tak pahunchta hai. Har medium ke constraints alag hain.\n\n**1. Desktop / laptop monitor** — analyst ka primary workspace (1366–1920 px, 50–70 cm distance). Full interactivity: hover tooltip, cross-filter, drill-down; 12–14 px labels; multiple charts ek screen par.\n\n**2. Wallboard / large screen / video wall** — 3–5 m door se dekha jaata hai, isliye **10-foot UI**: sirf 4–6 KPIs, 24–36 px fonts, high contrast, no scroll, auto-rotate pages (15–30 s), colour sirf status ke liye, remote se control.\n\n**3. Projector (meeting room)** — ambient light contrast kam kar deti hai: bade fonts, simple charts, 16:9, minimal detail.\n\n**4. Tablet** — touch input: tap targets ≥ 44 px, one/two column layout, swipe navigation, hover-dependent tooltip avoid.\n\n**5. Smartphone** — 360–430 px, vertical scroll: stacked KPI cards, sparkline, ek chart per screen, filters button ke peeche, thumb zone.\n\n**6. Print / PDF / email digest** — static snapshot: high contrast, print-friendly (light) theme, pagination, timestamp + KPI definition mandatory, interaction zero.\n\n**7. Embedded / digital signage / voice-AR** — dashboard product ke andar ya public screen par; brand-matched, minimal chrome; voice ke liye short spoken summary.\n\n**Design considerations (common):** resolution aur pixel density, physical size vs viewing distance, ambient light/contrast, input method, interactivity level, accessibility (contrast ≥ 4.5:1, colourblind-safe), aur performance.\n\n**Diagram:** Refer to the Display Media Comparison diagram."
      },
      {
        "question": "What is a wallboard dashboard? What design rules apply to it?",
        "answer": "**Wallboard dashboard:** ek bade screen (TV/video wall) par 24×7 chalta dashboard jo team ke workspace ya ops floor par lagi hoti hai — sabhi ko ek nazar mein status dikhana iska goal hai (jaise support queue, plant output, sales floor target).\n\n**Design rules (10-foot UI):**\n1. **Few metrics** — 4–6 only; wallboard par 20 charts kabhi nahi.\n2. **Large fonts** — 24–36 px body, KPI numbers 48–72 px; 3 m se readable.\n3. **High contrast** — dark background + bright text; glare aur ambient light ke liye.\n4. **No scroll, no hover** — sab kuch ek screen par; interaction remote/auto se.\n5. **Auto-rotation** — 15–30 second par page/slide badle, transition smooth.\n6. **Colour = status** — green/amber/red sirf threshold ke liye; decoration colour nahi.\n7. **Big picture only** — trend arrow, target line aur delta %; detail drill-down desktop version par.\n8. **Always fresh** — auto-refresh (1–5 min), \"last updated\" timestamp prominent, connection status indicator.\n9. **Error states** — data na aaye to \"NO DATA\" clearly, blank ya 0 nahi.\n10. **Placement** — eye level, glare-free, viewing distance ke hisaab se font size test karo.\n\n**Kab wallboard:** ops floor, NOC/SOC, manufacturing line, sales floor, hospital ward — jahan team ko continuous awareness chahiye, individual analysis nahi.\n\n**Diagram:** Refer to the Display Media Comparison diagram."
      },
      {
        "question": "Differentiate between responsive and adaptive dashboard design. What accessibility points matter across display media?",
        "answer": "**Responsive design:** ek hi layout breakpoints par **reflow** hota hai (CSS media queries / fluid grid) — content same, arrangement badalta hai. Example: desktop par 3-column KPI row, tablet par 2, phone par 1.\n\n**Adaptive design:** medium detect karke **content hi badal dete hain** — mobile par poore 20 charts nahi, sirf top 3 KPIs aur ek trend; wallboard par sirf 4 status metrics. Adaptive = server/device-based variants.\n\n| Point | Responsive | Adaptive |\n| Layout | reflow, same content | different content per device |\n| Tech | CSS media queries, fluid grid | device detection, separate templates |\n| Effort | kam | zyada |\n| Best for | web dashboards | wallboard + mobile + embedded mix |\n\n**Accessibility across media:**\n- **Contrast** ≥ 4.5:1 (wallboard aur projector par zyada), dark/light theme dono test karo.\n- **Colour independence** — status ke saath icon/text (▲/▼, \"below target\"), colourblind-safe palette.\n- **Touch/keyboard** — tap targets ≥ 44 px; keyboard navigation aur focus rings desktop par.\n- **Screen readers** — charts ke saath data table ya ARIA label/summary.\n- **Text scaling** — 200% zoom par bhi layout na toote.\n- **Print** — black-on-white version, page breaks, timestamp.\n\n**Practical rule:** ek **design system** banao (tokens: colour, spacing, type scale) aur usse teen layouts generate karo — desktop, mobile, wallboard. Data model ek, presentation teen.\n\n**Diagram:** Refer to the Display Media Comparison diagram."
      }
    ]
  },
  {
    "id": "charts-basic",
    "number": "5.7",
    "title": "Types of Graphs — Bar, Stacked Bar, Pie and Doughnut",
    "subtitle": "Comparison aur part-to-whole ke basic charts, unke rules aur traps",
    "icon": "chart",
    "accent": "#00ff88",
    "englishDefinition": "Bar graphs display a quantitative value for each category using rectangular bars whose length encodes the value; they are the most accurate chart for comparison because the eye reads length and position well, and their baseline must always be zero. A stacked bar chart splits each bar into segments showing sub-category composition, so it compares the total across categories and the composition within them; a 100% stacked bar shows proportions only. A pie chart divides a circle into sectors whose angle (and area) represents each part's share of a whole at one point in time — it is effective only with a few slices (roughly five to six), must sum to 100%, and is poor for comparing similar values or for ranking. A doughnut chart is a pie chart with a central hole, which reduces the visual area and allows a total or KPI label in the middle. Chart choice should follow the question: ranking or comparison of categories → bar; composition over categories → stacked bar; single part-to-whole snapshot with few slices → pie or doughnut.",
    "intro": "Ye chaar charts sabse zyada use hote hain aur sabse zyada galat bhi. **Bar chart** comparison ka king hai — length padhna aankh ke liye sabse accurate kaam hai. **Stacked bar** total + composition dono dikhata hai. **Pie** aur **doughnut** part-to-whole ke liye hain, par sirf jab slices **5–6 se kam** hon — 12 slices ka pie kisi kaam ka nahi. Exam mein chart ka 'use, advantage, limitation' poochha jaata hai, isliye har chart ke rules aur traps yaad rakho.",
    "sections": [
      {
        "type": "definition",
        "title": "Bar graph",
        "kicker": "Definition",
        "body": "Bar graph categories ke liye quantitative value dikhata hai — **bar ki length** value encode karti hai. Ye comparison ke liye sabse accurate chart hai kyunki human eye length aur position ko bahut precisely compare karti hai. Basline **zero** hona chahiye, warna ratio galat lagta hai.",
        "body2": "Rules: bars ko **sort** karo (descending/ascending), gap bar ki width ka 50–100% rakho, horizontal bars tab use karo jab labels lambe hon ya categories 10+ hon, aur grouped bars sirf 2–4 series tak.",
        "chips": [
          "Comparison",
          "Zero baseline",
          "Sorted",
          "Horizontal for long labels"
        ]
      },
      {
        "type": "cards",
        "title": "Stacked bar aur 100% stacked bar",
        "kicker": "Stacked",
        "cards": [
          {
            "icon": "layers",
            "title": "Stacked bar",
            "body": "Har bar total dikhata hai aur segments sub-category ka hissa. Total compare karna easy, andar ka segment compare karna mushkil (sirf neeche wala segment common baseline par hota hai)."
          },
          {
            "icon": "metrics",
            "title": "100% stacked bar",
            "body": "Sab bars 100% tak normalize — sirf **proportion** dikhta hai, total nahi. Composition shift dekhne ke liye best (jaise revenue mix by channel)."
          },
          {
            "icon": "warn",
            "title": "Traps",
            "body": "5+ segments → indistinguishable colours; middle segments float karte hain; exact values ke liye labels ya table chahiye."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Pie aur doughnut chart",
        "kicker": "Part-to-whole",
        "cards": [
          {
            "icon": "target",
            "title": "Pie chart",
            "body": "Circle ko sectors mein baant kar part-to-whole dikhata hai (angle + area). Sirf **5–6 slices** tak effective; 100% sum hona chahiye; ranking ke liye bekaar (bar better)."
          },
          {
            "icon": "cycle",
            "title": "Doughnut chart",
            "body": "Pie hi hai, beech mein hole — visual area kam, isliye 2–3 slices par clean; centre mein total/KPI likh sakte hain."
          },
          {
            "icon": "clock",
            "title": "Kab use karein",
            "body": "Ek time-snapshot ka composition jaise 'market share by brand' ya 'budget split' — trend ya ranking ke liye nahi."
          },
          {
            "icon": "warn",
            "title": "Pie ke traps",
            "body": "3-D pie (aage ka slice bada dikhta hai), 12 slices, similar values, labels overlap, zero-value slice, multiple pies compare karna."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Kaunsa Chart Kab",
        "kicker": "Comparison",
        "columns": [
          "Bar",
          "Stacked bar",
          "Pie / Doughnut"
        ],
        "rows": [
          {
            "label": "Sawaal",
            "values": [
              "compare categories",
              "total + composition",
              "parts of a whole"
            ]
          },
          {
            "label": "Encoding",
            "values": [
              "length (best)",
              "length + colour",
              "angle + area (weakest)"
            ]
          },
          {
            "label": "Max items",
            "values": [
              "15–20 (sorted)",
              "5–6 segments",
              "5–6 slices"
            ]
          },
          {
            "label": "Baseline",
            "values": [
              "zero mandatory",
              "zero mandatory",
              "n/a (100%)"
            ]
          },
          {
            "label": "Time trend",
            "values": [
              "no (use line)",
              "partial",
              "no"
            ]
          },
          {
            "label": "Biggest trap",
            "values": [
              "truncated axis",
              "too many segments",
              "too many slices, 3-D"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00ff88",
          "#ff8800"
        ]
      },
      {
        "type": "points",
        "title": "Practical rules",
        "kicker": "Rules",
        "points": [
          "**Sort karo:** descending order se ranking turant dikhti hai; alphabetical order insight chhupa deta hai.",
          "**Zero baseline:** bar/stacked bar ka y-axis 0 se shuru — warna 2% ka farq 200% lagta hai.",
          "**Labels:** pie par percentage + category label; bar par value end par (axis labels repeat na karo).",
          "**Colour:** ek hi accent colour sab bars par, sirf highlight wale bar ko alag colour; categorical palette max 5–7.",
          "**Doughnut centre:** total ya headline % likho (space ka fayda).",
          "**Bar vs pie test:** agar aapko slices ko **rank** karna hai ya do values ke beech chhota farq dikhana hai → bar chart."
        ]
      },
      {
        "type": "diagram",
        "title": "Basic Charts — Bar, Stacked Bar, Pie, Doughnut",
        "kicker": "Diagram",
        "diagram": "ds5-charts-basic",
        "caption": "Comparison → bar, composition → stacked bar, part-to-whole snapshot → pie/doughnut"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Bar:** category comparison, length encoding, zero baseline, sorted; horizontal for long labels.",
          "**Stacked bar:** total + composition; **100% stacked** sirf proportions; middle segments compare karna mushkil.",
          "**Pie:** part-to-whole snapshot, 5–6 slices max, sum 100%, ranking ke liye bekaar.",
          "**Doughnut:** pie + centre KPI; chhote slice counts par clean.",
          "**Common traps:** 3-D, truncated axis, 12 slices, rainbow colours, unsorted bars."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain bar graph and stacked bar chart with their advantages, disadvantages and appropriate use.",
        "answer": "**Bar graph:** categorical data ke liye quantitative value **rectangular bars** se dikhata hai; bar ki **length** value encode karti hai (kabhi width nahi).\n\n**Advantages:** (i) comparison ke liye sabse accurate chart — eye length/position ko accurately padhti hai; (ii) zero baseline se honest ratio; (iii) sorted order se ranking turant; (iv) labels ke liye jagah; (v) horizontal bars se lambe labels fit ho jaate hain.\n**Disadvantages:** (i) bahut zyada categories (20+) par clutter; (ii) time-series ke liye galat (line chahiye); (iii) truncated axis se misleading ho sakta hai.\n**Use:** region-wise sales, product ranking, survey counts, before/after comparison.\n\n**Stacked bar chart:** ek bar ko segments mein todta hai — har segment sub-category ka hissa. Total (bar ki height) aur composition (segments) dono dikhte hain.\n\n**Advantages:** (i) total + composition ek hi chart mein; (ii) categories ke beech mix ka comparison; (iii) **100% stacked** version se proportions compare karna easy; (iv) bar se zyada information density.\n**Disadvantages:** (i) sirf neeche wala segment common baseline par hota hai — middle segments compare karna mushkil; (ii) 5+ segments par colours confuse; (iii) negative values handle karna awkward.\n**Use:** revenue by channel over quarters, headcount by department, budget split across teams.\n\n**Rule of thumb:** ranking chahiye → simple bar; total + mix chahiye → stacked bar; sirf % mix chahiye → 100% stacked.\n\n**Diagram:** Refer to the Basic Charts — Bar, Stacked Bar, Pie, Doughnut diagram."
      },
      {
        "question": "Discuss pie chart and doughnut chart. When should they be used and what are their limitations?",
        "answer": "**Pie chart:** ek circle ko sectors mein baant kar har part ka share of whole dikhata hai — encoding **angle + area** hai, usually percentage labels ke saath.\n\n**Doughnut chart:** pie hi hai par beech mein **hole** — visual area kam, isliye comparison thoda easy, aur centre mein **total/KPI** likh sakte hain.\n\n**Kab use karein:**\n- Ek **time snapshot** ka composition (market share, budget allocation, party vote share).\n- **5–6 slices** tak, jab kuch parts saaf-saaf bade/chhote hon.\n- Jab audience ko \"whole ka hissa\" ka idea dena ho, exact comparison nahi.\n\n**Limitations:**\n1. **Angle aur area padhna mushkil** — eye position/length jitni accurate nahi; 2–3% ka farq dikhta nahi.\n2. **Ranking possible nahi** — slices ko order karke compare karna mental rotation maangta hai.\n3. **Zyada slices** — 10–12 slices par labels overlap aur colours confuse.\n4. **3-D pie** — perspective se aage ka slice bada dikhta hai (distortion).\n5. **Multiple pies compare karna** — do circles ke slices mentally compare karna almost impossible; **100% stacked bar** better.\n6. **Trend nahi dikhta** — pie ek point in time ka chart hai.\n\n**Best practice:** labels + % dono, slices clockwise descending, ek accent colour, 3-D band, aur agar comparison important hai to sorted bar chart use karo.\n\n**Diagram:** Refer to the Basic Charts — Bar, Stacked Bar, Pie, Doughnut diagram."
      },
      {
        "question": "How do you choose the right chart for a given question? Give examples for comparison, composition, trend and distribution.",
        "answer": "Chart choice **data ke sawaal** se aata hai, data ke type se nahi.\n\n**1. Comparison (kaun bada/chhota?)** → **bar chart** (sorted). Length encoding sabse accurate. Horizontal bars lambe labels ke liye. Example: top 10 products by revenue.\n\n**2. Composition (hissa kitna?)** →\n- Few categories + snapshot → **pie/doughnut** (max 5–6 slices).\n- Total + mix ek saath → **stacked bar**.\n- Sirf proportion → **100% stacked bar**.\n- Hierarchy → **treemap**.\nExample: revenue by channel per quarter.\n\n**3. Trend (samay ke saath kya badla?)** → **line chart** (continuous time), **area chart** (cumulative/volume), **sparkline** (compact). Example: monthly revenue 24 months.\n\n**4. Distribution (values kaise faili hain?)** → **histogram** (bins), **box plot** (quartiles + outliers), **violin/density**. Example: order value distribution.\n\n**5. Relationship (do variables ka rishta?)** → **scatter plot** (+ trendline); correlation ≠ causation.\n\n**6. Contribution to change (kyun badla?)** → **waterfall chart**. Example: revenue bridge (new − churn + upsell − discount).\n\n**7. Part-to-whole over time** → **stacked area**.\n\n**8. Correlation matrix / pattern** → **heatmap**.\n\n**Practical decision tree:** \"kitne variables?\" → 1 categorical = bar/pie; 1 numeric = histogram/box; 2 numeric = scatter; time series = line/area; hierarchy = treemap; change decomposition = waterfall.\n\n**Diagram:** Refer to the Basic Charts — Bar, Stacked Bar, Pie, Doughnut diagram."
      }
    ]
  },
  {
    "id": "charts-advanced",
    "number": "5.8",
    "title": "Types of Graphs — Line, Area, Treemap and Heatmap",
    "subtitle": "Trend, cumulative volume, hierarchy aur density ke charts",
    "icon": "chart",
    "accent": "#ff0080",
    "englishDefinition": "Line charts plot a quantitative value against a continuous dimension (usually time) and connect the points with a line, making trend, seasonality and rate of change visible; several series can be compared, but four to five lines is the practical limit. Area charts fill the region below the line, showing magnitude or cumulative volume; a stacked area chart shows how the composition of a total changes over time, while overlapping (non-stacked) areas hide the series behind them. A treemap encodes a hierarchy as nested rectangles whose area is proportional to a value, which makes it efficient for many categories and for spotting the largest contributors, although rectangles with similar areas are hard to compare. A heatmap shows a matrix of values as colour intensity, revealing patterns, clusters, gaps and calendar seasonality across two dimensions; it requires an ordered (sequential or diverging) colour scale and must remain readable for colour-blind viewers.",
    "intro": "Jahan bar chart comparison ke liye hai, wahan **line chart trend** ke liye. Uske baad teen charts data ki alag shakal dikhate hain: **area** (volume/stacked mix over time), **treemap** (hierarchy — kaun sabse bada hissa), aur **heatmap** (do dimensions ka pattern, jaise din × hour traffic). In chaaron ka rule ek hi hai: encoding sahi ho — line ke liye continuous time, treemap ke liye hierarchy, heatmap ke liye ordered colour scale.",
    "sections": [
      {
        "type": "definition",
        "title": "Line chart",
        "kicker": "Definition",
        "body": "Line chart ek quantitative value ko **continuous dimension** (usually time) ke against plot karta hai aur points ko line se jodta hai — trend, seasonality aur rate of change dikhte hain.",
        "body2": "Rules: x-axis par **continuous** data (months, days), 4–5 se zyada lines nahi, line thickness 2–3 px, direct labels (legend dhoondhna na pade), aur missing data par line **na jodo** (gap chhodo). Zero baseline line chart mein mandatory nahi, par change ki magnitude ignore na karo.",
        "chips": [
          "Trend",
          "Continuous x-axis",
          "Max 4–5 series",
          "Gaps for missing data"
        ]
      },
      {
        "type": "cards",
        "title": "Area, treemap aur heatmap",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "metrics",
            "title": "Area chart",
            "body": "Line ke neeche ka region fill — magnitude/volume dikhata hai. **Stacked area** se composition over time dikhta hai; overlapping (non-stacked) areas ek doosre ko chhupa dete hain."
          },
          {
            "icon": "layers",
            "title": "Treemap",
            "body": "Hierarchy ko nested rectangles se dikhata hai — **area = value**. Bahut categories ke liye efficient, sabse bada contributor turant dikhta hai; similar-size rectangles compare karna mushkil."
          },
          {
            "icon": "eye",
            "title": "Heatmap",
            "body": "Matrix ko colour intensity se dikhata hai — rows × columns ka pattern, cluster aur gap. Sequential (light→dark) ya diverging palette, colourblind-safe."
          },
          {
            "icon": "clock",
            "title": "Kab kaunsa",
            "body": "Trend → line; cumulative volume → area; stacked mix over time → stacked area; hierarchy (product → category) → treemap; 2-D pattern (day × hour) → heatmap."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Comparison",
        "kicker": "Comparison",
        "columns": [
          "Line",
          "Area",
          "Treemap",
          "Heatmap"
        ],
        "rows": [
          {
            "label": "Sawaal",
            "values": [
              "trend over time",
              "volume over time",
              "hierarchy share",
              "pattern in matrix"
            ]
          },
          {
            "label": "Encoding",
            "values": [
              "position (x,y)",
              "area under line",
              "rectangle area",
              "colour intensity"
            ]
          },
          {
            "label": "Max series",
            "values": [
              "4–5",
              "3–4 stacked",
              "many (20+)",
              "unlimited cells"
            ]
          },
          {
            "label": "Labels",
            "values": [
              "direct at line end",
              "legend",
              "inside rectangle",
              "axis + legend"
            ]
          },
          {
            "label": "Trap",
            "values": [
              "spaghetti chart",
              "hidden series",
              "similar areas",
              "rainbow scale"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00ff88",
          "#ff8800",
          "#aa00ff"
        ]
      },
      {
        "type": "points",
        "title": "Line aur area ke rules",
        "kicker": "Trend",
        "points": [
          "**Continuous x-axis:** line sirf time/ordered data par; categories ke liye bar chart.",
          "**Spaghetti avoid:** 5+ lines → small multiples (facet) ya highlight-one-grey-rest pattern.",
          "**Direct labeling:** legend ke bajaye line ke end par series ka naam — aankh ko idhar-udhar nahi jaana padta.",
          "**Rate vs absolute:** do series compare kar rahe ho to index karo (start = 100) warna bada series sab kuch dhak leta hai.",
          "**Stacked area:** total dikhta hai, andar ka series compare karna mushkil (sirf bottom wala common baseline par) — 3–4 max.",
          "**Annotations:** launch date, festive spike, outage — chart par mark karo, warna user khud guess karega."
        ]
      },
      {
        "type": "points",
        "title": "Treemap aur heatmap ke rules",
        "kicker": "Hierarchy + Matrix",
        "points": [
          "**Treemap:** area = value, colour = doosra measure (jaise growth %); rectangles bade se chhote (squarified algorithm — aspect ratio ~1 rakhta hai); label sirf jahan jagah ho, baaki tooltip.",
          "**Treemap trap:** do rectangles ka area ratio aankh se judge karna mushkil (area perception weak) — exact values ke liye bar chart ya table.",
          "**Heatmap:** ordered colour scale mandatory — **sequential** (single hue light→dark) ya **diverging** (blue-white-red around 0); rainbow (jet) avoid, false boundaries bana deta hai.",
          "**Heatmap readability:** cells par value likho agar grid chhota ho; colourblind-safe palette (viridis); legend zaroor.",
          "**Use cases:** website traffic by day × hour, correlation matrix, store sales by region × month, model confusion matrix."
        ]
      },
      {
        "type": "diagram",
        "title": "Advanced Charts — Line, Area, Treemap, Heatmap",
        "kicker": "Diagram",
        "diagram": "ds5-charts-advanced",
        "caption": "Trend → line, volume/mix → area, hierarchy → treemap, 2-D pattern → heatmap"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Line:** trend over continuous time; 4–5 series max; direct labels; missing data par gap.",
          "**Area:** volume/cumulative; **stacked** se composition over time; overlapping areas hide series.",
          "**Treemap:** hierarchy, area = value, 20+ categories, largeness turant dikti hai; similar areas compare nahi hote.",
          "**Heatmap:** 2-D pattern via colour intensity; sequential/diverging scale; viridis, rainbow nahi.",
          "**Common rule:** encoding sahi chuno — line = position, treemap = area, heatmap = intensity."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain line chart and area chart with their uses, advantages and limitations.",
        "answer": "**Line chart:** ek quantitative value ko continuous dimension (usually time) ke against plot karke points ko line se jodta hai.\n\n**Uses:** trend over time (monthly revenue), seasonality, growth rate, rate of change, forecasting, do series ka comparison (jaise actual vs target).\n\n**Advantages:** (i) trend aur direction turant dikhta hai; (ii) continuous data ke liye best encoding (position); (iii) kai time points ek saath; (iv) annotations (festival, outage) se context; (v) small multiples ke saath scalable.\n\n**Limitations:** (i) 5+ lines = spaghetti chart, padhna mushkil; (ii) categorical data ke liye galat (bar chahiye); (iii) non-zero baseline se change exaggerate ho sakta hai; (iv) irregular time gaps misleading; (v) exact values padhna mushkil (labels/tooltip chahiye).\n\n**Area chart:** line ke neeche ka region fill karta hai — magnitude/volume dikhata hai.\n\n**Uses:** cumulative volume (sign-ups over time), total traffic, aur **stacked area** se composition over time (revenue mix by channel).\n\n**Advantages:** (i) volume ka impression strong; (ii) stacked version mein total + mix ek saath; (iii) visually appealing for dashboards.\n\n**Limitations:** (i) overlapping (non-stacked) areas ek doosre ko dhak lete hain; (ii) stacked area mein sirf bottom series common baseline par — andar ka comparison mushkil; (iii) zero baseline zaroori (area = magnitude); (iv) 3+ series par clutter.\n\n**Rule:** trend dekhna hai → line; volume/accumulation dikhana hai → area; mix over time → stacked area (3–4 series max).\n\n**Diagram:** Refer to the Advanced Charts — Line, Area, Treemap, Heatmap diagram."
      },
      {
        "question": "What is a treemap chart? Explain its construction, advantages and limitations with an example.",
        "answer": "**Treemap:** hierarchy (nested categories) ko **nested rectangles** se dikhata hai jahan har rectangle ka **area uski value ke proportional** hota hai.\n\n**Construction:**\n1. Root rectangle se start karo (poora canvas).\n2. Har level ke children ko parent ke andar area-proportional rectangles mein baanto.\n3. Layout algorithm use karo — **squarified** treemap rectangles ka aspect ratio ~1 rakhta hai (padhna easy), slice-and-dice patli strips banata hai.\n4. Colour doosra measure encode kar sakta hai (jaise growth %, ya category).\n\n**Example:** company revenue — top level divisions, andar product categories, andar SKUs. Sabse bada rectangle turant dikh jata hai (jaise \"Electronics 38%\").\n\n**Advantages:** (i) bahut categories (20–100) ek screen par; (ii) hierarchy aur magnitude dono; (iii) sabse bada contributor visually obvious; (iv) space-efficient (koi gap waste nahi); (v) colour se doosra dimension.\n\n**Limitations:** (i) **area perception weak** hai — do similar rectangles ka ratio aankh se judge nahi hota (bar chart better for exact comparison); (ii) labels chhote rectangles mein fit nahi hote; (iii) bahut deep nesting confusing; (iv) sorting/ordering algorithm result badal deta hai; (v) negative values handle nahi hote.\n\n**Use cases:** disk space usage, portfolio allocation, budget breakdown, product mix, website section performance.\n\n**Diagram:** Refer to the Advanced Charts — Line, Area, Treemap, Heatmap diagram."
      },
      {
        "question": "What is a heatmap? Explain its use, colour rules and limitations.",
        "answer": "**Heatmap:** values ki matrix ko **colour intensity** se dikhata hai — do dimensions (rows × columns) ke beech pattern, cluster, gap aur seasonality ek nazar mein aate hain.\n\n**Use:** website traffic by **day × hour** (peak time), store sales by **region × month**, correlation matrix (features ke beech), model confusion matrix, calendar view (GitHub contributions), sensor data.\n\n**Construction / rules:**\n1. **Ordered colour scale mandatory:** **sequential** (ek hue, light → dark) jab values 0 se max tak ho; **diverging** (blue → white → red) jab 0 ke around +ve/−ve ho.\n2. **Rainbow (jet) avoid** — ordered data par false boundaries bana deta hai (0.5 par colour jump).\n3. **Colourblind-safe** palette (viridis, cividis); red–green avoid.\n4. **Legend + scale** dikhao; cell par value likho agar grid chhota (≤ 10×10).\n5. **Binning:** continuous values ko bins mein daalna padta hai — bin size result badalta hai (jaise 5-minute vs 1-hour traffic).\n6. **Sorting:** rows/columns ko value ya cluster se sort karo, warna pattern chhup jaata hai.\n\n**Limitations:** (i) exact values padhna mushkil (colour → number mental mapping); (ii) binning choice se pattern badal jaata hai; (iii) colourblind users ke liye risky agar palette galat; (iv) printer/black-white par kuch nahi dikhta; (v) 3+ dimensions ke liye ek heatmap kaafi nahi (faceting chahiye).\n\n**Diagram:** Refer to the Advanced Charts — Line, Area, Treemap, Heatmap diagram."
      }
    ]
  },
  {
    "id": "charts-special",
    "number": "5.9",
    "title": "Types of Graphs — Waterfall, Scatter, Histogram and Box Plot",
    "subtitle": "Contribution, correlation, distribution aur outliers ke charts",
    "icon": "metrics",
    "accent": "#ff8800",
    "englishDefinition": "A waterfall chart shows how an initial value is transformed into a final value by a sequence of intermediate positive and negative contributions, with floating bars connecting the running total — used for revenue bridges, profit walk-downs and budget variance. A scatter plot places one numeric variable on each axis to reveal the relationship between them: direction, strength, clusters and outliers, often with a fitted trend line; correlation shown by a scatter plot does not by itself prove causation. A histogram groups continuous data into bins and plots the count or frequency per bin, so the shape of the distribution (symmetric, skewed, bimodal, uniform) becomes visible; the number of bins is chosen by a rule such as Sturges' formula k = 1 + 3.322 log10(n). A box plot summarises a distribution with the five-number summary (minimum, first quartile, median, third quartile, maximum), draws the box from Q1 to Q3 with the interquartile range IQR = Q3 − Q1, extends whiskers to the most extreme values within 1.5 × IQR of the box, and marks values beyond the whiskers as outliers.",
    "intro": "Ye chaar charts 'special purpose' hain, aur exam mein bahut poochhe jaate hain kyunki inka calculation hota hai. **Waterfall** batata hai ki ek number se doosra number kaise bana (revenue 500 se 545 kaise pahuncha). **Scatter** do variables ka rishta dikhata hai. **Histogram** data ka shape (distribution) dikhata hai — bins ki ginti Sturges formula se. **Box plot** paanch numbers (min, Q1, median, Q3, max) mein poora distribution summarise karta hai aur IQR rule se outlier pakadta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Waterfall chart",
        "kicker": "Definition",
        "body": "Waterfall chart dikhata hai ki **starting value** kaise kai positive aur negative contributions ke through **ending value** ban gayi. Har step ek **floating bar** hota hai jo running total se judta hai — isliye 'bridge' bhi kehte hain.",
        "body2": "Rules: pehla aur aakhri bar **total** (baseline se, poora), beech ke bars floating; increase ek colour (green/blue), decrease doosra (red/orange); connecting lines halki; exact values labels par.",
        "chips": [
          "Running total",
          "Bridge chart",
          "Variance analysis",
          "Contribution"
        ]
      },
      {
        "type": "cards",
        "title": "Scatter plot, histogram aur box plot",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "network",
            "title": "Scatter plot",
            "body": "Do numeric variables: x aur y par position. Direction, strength, cluster aur outlier dikhte hain. Overplotting par alpha/jitter/hexbin. **Correlation ≠ causation.**"
          },
          {
            "icon": "metrics",
            "title": "Histogram",
            "body": "Continuous data ko **bins** mein daal kar frequency dikhata hai. Bins: Sturges k = 1 + 3.322 log10(n). Shape: symmetric, skewed, bimodal, uniform."
          },
          {
            "icon": "chart",
            "title": "Box plot",
            "body": "Five-number summary: min, Q1, median, Q3, max. Box = Q1–Q3 (IQR), whiskers = 1.5 × IQR tak, outliers dots. Distributions compare karne ke liye best."
          },
          {
            "icon": "warn",
            "title": "Kab nahi",
            "body": "Scatter: categorical data par nahi. Histogram: small n par shape galat lagta hai. Box plot: bimodal data chhupa deta hai (sirf summary dikhta hai)."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Comparison",
        "kicker": "Comparison",
        "columns": [
          "Waterfall",
          "Scatter",
          "Histogram",
          "Box plot"
        ],
        "rows": [
          {
            "label": "Sawaal",
            "values": [
              "kya badla, kitna?",
              "rishta hai?",
              "shape kya hai?",
              "spread/outlier?"
            ]
          },
          {
            "label": "Encoding",
            "values": [
              "floating bars",
              "position x–y",
              "bar height = count",
              "box + whiskers"
            ]
          },
          {
            "label": "Data",
            "values": [
              "+ve/−ve changes",
              "2 numeric",
              "1 numeric (binned)",
              "1 numeric (grouped)"
            ]
          },
          {
            "label": "Key reading",
            "values": [
              "contributions",
              "correlation, clusters",
              "skew, modes",
              "median, IQR, outlier"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00ff88",
          "#ff8800",
          "#aa00ff"
        ]
      },
      {
        "type": "points",
        "title": "Worked examples",
        "kicker": "Examples",
        "points": [
          "**Waterfall (revenue bridge, Rs lakh):** opening **500** → new customers **+80** → churn **−40** → upsell **+30** → discounts **−25** → closing **545** (500 + 80 − 40 + 30 − 25 = 545).",
          "**Histogram (20 order values, Rs ’000):** 10,12,12,13,15,15,16,16,17,18,18,19,20,21,22,24,25,27,30,34. Sturges: k = 1 + 3.322 × log10(20) = **5.32 ≈ 5 bins**, range 10–34 → width 5.",
          "Bin counts: [10,15) = **4**, [15,20) = **8**, [20,25) = **4**, [25,30) = **2**, [30,35) = **2** — roughly symmetric, halka right tail.",
          "**Box plot (10 values):** 12, 15, 18, 20, 22, 25, 28, 30, 32, 65 → **Q1 = 18, median = 23.5, Q3 = 30**, IQR = **12**; fences = 18 − 18 = **0** aur 30 + 18 = **48**; whiskers 12 aur 32; **65 outlier** hai (48 se bada)."
        ]
      },
      {
        "type": "points",
        "title": "Rules aur traps",
        "kicker": "Traps",
        "points": [
          "**Waterfall:** totals ko baseline se draw karo (floating nahi), warna reader confuse hota hai; 8–10 steps se zyada nahi.",
          "**Scatter:** correlation coefficient ke saath plot bhi dikhao — r = 0.9 curve par bhi aa sakta hai (Anscombe); trendline ka type (linear/loess) batao.",
          "**Histogram vs bar chart:** bar chart **categories** ke liye (gaps), histogram **continuous bins** ke liye (no gaps, ordered).",
          "**Histogram binning:** bins badalne se shape badal jaata hai — bin width mention karo; ≤ 5 values par histogram nahi.",
          "**Box plot:** whisker rule (1.5 × IQR) likho; box plot ek group compare karne ke liye, exact shape ke liye histogram/violin bhi dikhao."
        ]
      },
      {
        "type": "diagram",
        "title": "Special Charts — Waterfall, Scatter, Histogram, Box Plot",
        "kicker": "Diagram",
        "diagram": "ds5-charts-special",
        "caption": "Contribution → waterfall, correlation → scatter, distribution → histogram aur five-number summary → box plot"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Waterfall:** running total + floating bars; opening → +/− changes → closing (500 → 545).",
          "**Scatter:** 2 numeric variables, direction/strength/cluster/outlier; correlation ≠ causation.",
          "**Histogram:** continuous bins, Sturges k = 1 + 3.322 log10(n); shape (skew/bimodal) dikhta hai.",
          "**Box plot:** min, Q1, median, Q3, max; IQR = Q3 − Q1; whisker 1.5 × IQR; uske bahar outlier.",
          "**Example:** 12..65 ke data par Q1 18, median 23.5, Q3 30, IQR 12, upper fence 48 → 65 outlier."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is a waterfall chart? Explain its construction with a revenue example.",
        "answer": "**Waterfall chart (bridge chart):** dikhata hai ki ek **starting value** kai positive/negative contributions ke through **ending value** kaise banti hai. Har intermediate step ek **floating bar** hota hai jo pichhle running total se shuru hota hai.\n\n**Construction:**\n1. **Opening total** — baseline se poora bar (jaise revenue 500).\n2. **Har change** ke liye floating bar — increase upar, decrease neeche (same colour scheme, jaise green/blue upar, red/orange neeche).\n3. **Connecting lines** — pichhle bar ke end se next bar ke start tak (halki grey).\n4. **Closing total** — phir se baseline se poora bar (final value).\n5. X-axis par categories/period, y-axis par value; labels par exact numbers.\n\n**Revenue example (Rs lakh):**\n| Step | Change | Running total |\n| Opening revenue | — | 500 |\n| New customers | +80 | 580 |\n| Churn | −40 | 540 |\n| Upsell | +30 | 570 |\n| Discounts | −25 | 545 |\n| Closing revenue | — | **545** |\n\nCheck: 500 + 80 − 40 + 30 − 25 = **545**.\n\n**Reading:** biggest positive driver = new customers (+80), biggest leak = churn (−40); net growth +45 (9%).\n\n**Advantages:** contributions ka clear breakdown, \"kahan se aaya / kahan gaya\" turant dikhta hai.\n**Limitations:** 10+ steps par clutter; negative/positive ka mix confusing ho sakta hai; totals ko sahi tarah baseline se draw karna zaroori.\n**Uses:** profit walk-down, budget vs actual variance, headcount movement, cash-flow bridge.\n\n**Diagram:** Refer to the Special Charts — Waterfall, Scatter, Histogram, Box Plot diagram."
      },
      {
        "question": "Differentiate between a scatter plot and a line chart. What is a histogram and how is the number of bins decided?",
        "answer": "**Scatter plot vs line chart:**\n\n| Point | Scatter plot | Line chart |\n| Purpose | do numeric variables ka relationship | trend over continuous dimension (time) |\n| Axes | dono numeric, koi order nahi | x = time/ordered |\n| Marks | points (no connection) | points connected by line |\n| Shows | correlation, cluster, outlier | trend, seasonality, rate of change |\n| Example | height vs weight, ad spend vs sales | monthly revenue |\n\n**Line chart mein ordering ka matlab hai; scatter mein nahi.** Scatter par trendline (regression/loess) add ki jaati hai.\n\n**Histogram:** continuous data ko **bins (intervals)** mein daal kar har bin ki frequency (count) bar se dikhata hai. Bars **touch** karte hain (continuous) aur bins ordered hote hain — isliye histogram bar chart se alag hai (bar chart mein categories alag-alag hoti hain).\n\n**Bins kaise decide karo:**\n- **Sturges' rule:** k = 1 + 3.322 × log10(n). Example n = 20 → k = 1 + 3.322 × 1.301 = **5.32 ≈ 5 bins**.\n- **Rice rule:** k = 2 × n^(1/3) (thoda zyada bins).\n- **Freedman–Diaconis:** bin width = 2 × IQR / n^(1/3) (outlier-robust).\n- **Square-root rule:** k = √n.\n\n**Bin width** = (max − min) / k. Example: values 10–34, k = 5 → width 5 (bins 10–15, 15–20, 20–25, 25–30, 30–35).\n\n**Reading shape:** symmetric (normal), right-skewed (tail right), left-skewed, bimodal (do peaks — do populations mix hain), uniform.\n\n**Traps:** bins bahut kam → shape chhup jaata hai; bahut zyada → noise dikhta hai; different bin widths se different \"story\" ban sakti hai — isliye width report karo.\n\n**Diagram:** Refer to the Special Charts — Waterfall, Scatter, Histogram, Box Plot diagram."
      },
      {
        "question": "Explain the box plot with its five-number summary and the outlier rule. Draw the box plot for 12, 15, 18, 20, 22, 25, 28, 30, 32, 65.",
        "answer": "**Box plot (box-and-whisker plot):** distribution ko **five-number summary** se summarise karta hai aur outliers alag dikhata hai.\n\n**Five numbers:** minimum, **Q1** (25th percentile), **median** (Q2, 50th), **Q3** (75th), maximum.\n\n**Construction:**\n- **Box** = Q1 se Q3; uski height **IQR = Q3 − Q1**.\n- **Median line** box ke andar.\n- **Whiskers** = 1.5 × IQR ke andar sabse door wale actual values tak.\n- **Outliers** = whiskers ke bahar wale points (individual dots).\n\n**Solved example — 12, 15, 18, 20, 22, 25, 28, 30, 32, 65 (n = 10):**\n1. Sorted data already hai; **median** = (22 + 25)/2 = **23.5**.\n2. Lower half (12, 15, 18, 20, 22) → **Q1 = 18**; upper half (25, 28, 30, 32, 65) → **Q3 = 30**.\n3. **IQR** = 30 − 18 = **12**.\n4. Fences: lower = Q1 − 1.5×IQR = 18 − 18 = **0**; upper = Q3 + 1.5×IQR = 30 + 18 = **48**.\n5. Whiskers: lower whisker **12** (0 se bada sabse chhota), upper whisker **32** (48 se chhota sabse bada).\n6. **65 > 48** → **outlier** (ek dot).\n\n**Reading:** median 23.5, middle 50% data 18–30 ke beech, aur ek clear outlier 65 (isliye mean 24.7 misleading hota hai — median better).\n\n**Advantages:** outliers turant, multiple groups compare (side-by-side boxes), compact summary.\n**Limitations:** shape (bimodality) chhup jaati hai; small n par quartiles unstable; exact distribution ke liye histogram/violin bhi dekho.\n\n**Diagram:** Refer to the Special Charts — Waterfall, Scatter, Histogram, Box Plot diagram."
      }
    ]
  },
  {
    "id": "visualization-tools",
    "number": "5.10",
    "title": "Data Visualization Tools — Tableau and Power BI",
    "subtitle": "VizQL vs VertiPaq, DAX vs LOD, cost aur kis ke liye kaunsa",
    "icon": "dashboard",
    "accent": "#ff0080",
    "englishDefinition": "Tableau and Microsoft Power BI are the two leading self-service business-intelligence and data visualization platforms. Tableau (Salesforce) is built around VizQL, a visual query language that translates drag-and-drop actions on shelves into queries, with an in-memory Hyper engine, Level of Detail (LOD) expressions, strong chart aesthetics and exploration-oriented dashboards; it is available as Desktop, Public, Server and Cloud. Power BI (Microsoft) is built on the VertiPaq in-memory engine with Power Query (M) for data preparation, a tabular data model with relationships and star schemas, and DAX for measures; it ships as Desktop, Service (cloud) and Mobile, embeds through Power BI Embedded, integrates tightly with Excel, Azure, Fabric and Microsoft 365, and is generally the cheaper option per user. Both support connectors to hundreds of data sources, scheduled refresh, row-level security and mobile layouts; the choice usually depends on budget, existing Microsoft ecosystem, data governance needs and the depth of visual exploration required. Other tools include Qlik Sense, Looker, Looker Studio, Apache Superset, Excel and code libraries such as Matplotlib, Seaborn, Plotly, D3.js and ECharts.",
    "intro": "Market mein do naam sabse zyada sunne ko milte hain: **Tableau** aur **Power BI**. Tableau exploration aur chart aesthetics mein strong hai (VizQL, drag-and-drop shelves, LOD expressions), Power BI Microsoft ecosystem, cost aur DAX/data-model power mein strong hai. Exam ke liye **comparison table** (vendor, engine, data prep, language, cost, best for) aur dono ke features yaad rakho. Iske alawa Qlik, Looker, Superset aur Python libraries bhi jaanni hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Visualization tools kya hain",
        "kicker": "Definition",
        "body": "Data visualization tools wo software hain jo data sources se connect karke, bina (ya kam) coding ke, **interactive charts aur dashboards** banate hain — data prep, visual encoding, filtering, sharing aur governance ek hi platform mein.",
        "body2": "Categories: (i) **BI platforms** — Tableau, Power BI, Qlik Sense, Looker, Superset; (ii) **spreadsheet** — Excel/Google Sheets; (iii) **code libraries** — Matplotlib, Seaborn, Plotly, D3.js, ECharts; (iv) **notebook tools** — Jupyter + pandas. Business dashboards ke liye (i), custom/research charts ke liye (iii).",
        "chips": [
          "Self-service",
          "Connectors",
          "Dashboards",
          "Governance",
          "Sharing"
        ]
      },
      {
        "type": "cards",
        "title": "Tableau — key features",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "chart",
            "title": "VizQL",
            "body": "Visual Query Language — drag-and-drop ko SQL query mein translate karta hai; user ko query likhni nahi padti."
          },
          {
            "icon": "database",
            "title": "Hyper engine",
            "body": "In-memory columnar engine — crores rows par fast filter aur aggregation."
          },
          {
            "icon": "layers",
            "title": "Shelves + Marks",
            "body": "Rows/columns shelves, marks card (colour, size, label, detail, tooltip) se chart banate hain."
          },
          {
            "icon": "metrics",
            "title": "LOD expressions",
            "body": "FIXED / INCLUDE / EXCLUDE — aggregation ka level control karo (jaise 'customer ka pehla order')."
          },
          {
            "icon": "globe",
            "title": "Products",
            "body": "Desktop, Public (free), Server, Cloud, Prep (ETL), Tableau Pulse (AI insights)."
          },
          {
            "icon": "users",
            "title": "Best for",
            "body": "Exploratory analysis, aesthetics, complex visual design, data storytelling; enterprise scale par cost zyada."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Power BI — key features",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "database",
            "title": "VertiPaq engine",
            "body": "In-memory columnar + compression; DirectQuery se live source bhi."
          },
          {
            "icon": "etl",
            "title": "Power Query (M)",
            "body": "Data prep/ETL language — clean, merge, pivot, transform before loading."
          },
          {
            "icon": "network",
            "title": "Tabular model",
            "body": "Star schema + relationships; ek dataset se kai reports (single source of truth)."
          },
          {
            "icon": "metrics",
            "title": "DAX",
            "body": "Measures aur calculated columns: CALCULATE, FILTER, SUMX, time intelligence (YTD, YoY)."
          },
          {
            "icon": "money",
            "title": "Products",
            "body": "Desktop (free), Pro (~$10/user/month), Premium/Fabric capacity, Mobile, Embedded, Copilot."
          },
          {
            "icon": "users",
            "title": "Best for",
            "body": "Microsoft-first organisations (Excel, Azure, Teams, Fabric), cost-sensitive teams, governed enterprise BI."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Tableau vs Power BI",
        "kicker": "Comparison",
        "columns": [
          "Tableau",
          "Power BI"
        ],
        "rows": [
          {
            "label": "Vendor",
            "values": [
              "Salesforce",
              "Microsoft"
            ]
          },
          {
            "label": "Engine",
            "values": [
              "VizQL + Hyper",
              "VertiPaq (DAX)"
            ]
          },
          {
            "label": "Data prep",
            "values": [
              "Tableau Prep",
              "Power Query (M)"
            ]
          },
          {
            "label": "Calculation",
            "values": [
              "calculated fields, LOD",
              "DAX measures"
            ]
          },
          {
            "label": "Cost",
            "values": [
              "higher (creator ~$75/mo)",
              "lower (Pro ~$10/mo)"
            ]
          },
          {
            "label": "Learning curve",
            "values": [
              "easy start, design-first",
              "easy for Excel users, DAX deep"
            ]
          },
          {
            "label": "Strength",
            "values": [
              "visual exploration, aesthetics",
              "ecosystem, model, price"
            ]
          },
          {
            "label": "Deployment",
            "values": [
              "Desktop/Server/Cloud",
              "Desktop/Service/Mobile/Embedded"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#00d4ff"
        ]
      },
      {
        "type": "points",
        "title": "Baaki tools aur kab kaunsa",
        "kicker": "Landscape",
        "points": [
          "**Qlik Sense:** associative engine (associations ka auto-discovery), in-memory; strong for exploration.",
          "**Looker / Looker Studio:** LookML semantic layer, Google Cloud ecosystem; Studio free hai.",
          "**Apache Superset / Metabase:** open-source, self-hosted, SQL-first — budget-friendly.",
          "**Excel / Google Sheets:** chhote data, quick charts; pivot tables; BI ka starting point.",
          "**Python libraries:** Matplotlib (basic), Seaborn (statistical), Plotly/Bokeh (interactive), Altair (declarative), D3.js (full custom, JS), ECharts.",
          "**Choice rule:** Microsoft shop → Power BI; deep visual exploration → Tableau; open-source/self-hosted → Superset/Metabase; custom web → D3/ECharts."
        ]
      },
      {
        "type": "diagram",
        "title": "Tableau vs Power BI",
        "kicker": "Diagram",
        "diagram": "ds5-tools",
        "caption": "VizQL + Hyper vs VertiPaq + DAX — features, cost aur kis team ke liye kaunsa"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Tableau:** VizQL, Hyper, shelves + marks card, LOD expressions (FIXED/INCLUDE/EXCLUDE), Desktop/Server/Cloud.",
          "**Power BI:** VertiPaq, Power Query (M), tabular model (star schema), **DAX**, Desktop/Service/Mobile/Embedded.",
          "**Cost:** Power BI Pro ~$10/user/month vs Tableau Creator ~$75/user/month.",
          "**Strength:** Tableau = exploration + aesthetics; Power BI = ecosystem + price + governed model.",
          "**Others:** Qlik (associative), Looker/LookML, Superset/Metabase (open source), Excel, Python (Matplotlib/Seaborn/Plotly), D3.js."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Compare Tableau and Power BI as data visualization tools.",
        "answer": "Dono leading self-service BI platforms hain, par architecture aur positioning alag hai.\n\n| Point | Tableau | Power BI |\n| Vendor | Salesforce | Microsoft |\n| Engine | VizQL + **Hyper** (in-memory columnar) | **VertiPaq** (in-memory) + DirectQuery |\n| Interface | drag-and-drop **shelves**, marks card | ribbon + fields/visualisations pane, report canvas |\n| Data prep | Tableau Prep | **Power Query (M)** |\n| Calculations | calculated fields, **LOD expressions** | **DAX** measures (CALCULATE, time intelligence) |\n| Data model | workbook-level joins/blends, relationships | tabular model + relationships (star schema), shared datasets |\n| Cost | higher (Creator ~$75/user/month) | lower (Pro ~$10/user/month) |\n| Ecosystem | standalone, strong community/viz gallery | Excel, Azure, Fabric, Teams, Office 365 |\n| Strength | visual exploration, chart aesthetics, complex viz | price, Microsoft integration, governed single dataset |\n| Learning curve | easy start, design-oriented | easy for Excel users; DAX deep |\n| Deployment | Desktop, Server, Cloud, Public | Desktop, Service, Mobile, Embedded |\n| Mobile | Tableau Mobile | Power BI Mobile (strong) |\n\n**Similarities:** hundreds of connectors, in-memory speed, scheduled refresh, row-level security, dashboards + stories, AI features (Pulse vs Copilot), embedded options.\n\n**Choice:** Microsoft-first + budget + governed enterprise → **Power BI**; deep ad-hoc visual exploration, design-heavy dashboards, mixed data sources → **Tableau**.\n\n**Diagram:** Refer to the Tableau vs Power BI diagram."
      },
      {
        "question": "Explain the key features of Power BI and its components.",
        "answer": "**Power BI** Microsoft ka BI platform hai — data se interactive dashboards tak ka poora stack.\n\n**Key features:**\n1. **Power Query (M)** — ETL/data preparation: connect, clean, merge, pivot, transform; 200+ connectors.\n2. **Data model (tabular, VertiPaq)** — in-memory compressed columnar store; **star schema** + relationships; ek dataset se kai reports (single source of truth).\n3. **DAX** — measure language: `CALCULATE`, `FILTER`, `SUMX`, `ALL`, time intelligence (`TOTALYTD`, `SAMEPERIODLASTYEAR`).\n4. **Visualizations** — 30+ built-in visuals, custom visuals marketplace, bookmarks, drill-through, tooltips, cross-filtering.\n5. **Dashboards vs Reports** — reports (pages, interactive) + dashboards (pinned tiles from multiple reports).\n6. **Power BI Service** — cloud publishing, scheduled refresh, gateways (on-prem data), workspaces, apps, row-level security (RLS).\n7. **Mobile app** — responsive phone layouts, alerts, QR scan.\n8. **Embedded** — Power BI Embedded for apps; REST API.\n9. **AI** — Q&A (natural language), Quick Insights, Key Influencers, Decomposition Tree, Copilot.\n10. **Governance** — sensitivity labels, lineage, deployment pipelines, Fabric integration.\n\n**Components (exam line):** **Desktop** (authoring, free) → **Service** (publish/share, SaaS) → **Mobile** (consume) + **Gateway** (on-prem refresh) + **Embedded** (apps).\n\n**Diagram:** Refer to the Tableau vs Power BI diagram."
      },
      {
        "question": "What factors should an organisation consider while selecting a data visualization tool? Name some popular tools.",
        "answer": "**Selection factors:**\n1. **Data sources aur volume** — connectors, on-prem vs cloud, crores rows par performance (in-memory engine).\n2. **User skill aur audience** — business users (drag-and-drop) vs analysts (SQL/Python); self-service ka level.\n3. **Cost** — per-user licence, capacity/server cost, training; TCO 3 saal ka dekho (Power BI Pro ~$10 vs Tableau Creator ~$75 per user/month).\n4. **Ecosystem fit** — Microsoft shop (Excel/Azure/Fabric) → Power BI; Salesforce/standalone → Tableau; Google Cloud → Looker.\n5. **Governance aur security** — row-level security, SSO, audit logs, data lineage, semantic layer.\n6. **Deployment model** — cloud, on-premise, hybrid, embedded in a product, air-gapped requirements.\n7. **Visualization depth** — custom charts, LOD/complex calculations, aesthetics, storytelling.\n8. **Scalability aur performance** — refresh times, concurrency, extract vs live query.\n9. **Mobile aur accessibility** — responsive layouts, WCAG support.\n10. **Support, community aur roadmap** — vendor support, documentation, talent availability.\n\n**Popular tools:** **Tableau** (VizQL, exploration), **Power BI** (VertiPaq + DAX, Microsoft), **Qlik Sense** (associative engine), **Looker** (LookML semantic layer), **Looker Studio** (free), **Apache Superset / Metabase** (open source), **Excel** (ubiquitous), code libraries — **Matplotlib, Seaborn, Plotly, Altair, D3.js, ECharts**.\n\n**Rule:** POC (proof of concept) ek real dataset par karo — licence list dekhne se zyada, 2 hafte ka pilot sach batata hai.\n\n**Diagram:** Refer to the Tableau vs Power BI diagram."
      }
    ]
  },
  {
    "id": "reinforcement-learning",
    "number": "5.11",
    "title": "Reinforcement Learning — Key Elements, Steps and Types",
    "subtitle": "Agent, environment, reward — trial and error se seekhna",
    "icon": "cycle",
    "accent": "#00d4ff",
    "englishDefinition": "Reinforcement learning (RL) is a machine-learning paradigm in which an agent learns what to do — how to map situations to actions — by interacting with an environment and receiving a scalar reward, so as to maximise the cumulative reward over time (Sutton and Barto). Its key elements are the agent, the environment, the state, the action space, the reward signal, the policy (the learned mapping from states to actions), the value function (expected long-term return from a state) and optionally a model of the environment; the discount factor gamma trades off immediate and future reward, and the agent must balance exploration of new actions against exploitation of known good ones. The interaction is formalised as a Markov Decision Process and solved through the Bellman equations. The learning loop is: observe state, select an action by the policy, receive reward and next state, update value/policy estimates, and repeat over episodes. RL types include model-free (Q-learning, SARSA, policy gradient) versus model-based; value-based versus policy-based versus actor-critic; on-policy versus off-policy; and online versus batch. Applications include game playing, robotics, resource scheduling, personalised recommendation and RLHF for large language models.",
    "intro": "Supervised learning ko har example ka **answer** pehle se milta hai; RL mein answer kisi ne nahi bataya — agent **try** karta hai, reward milta hai, aur usi se seekhta hai. Jaise bachcha cycle chalana seekhta hai: gira, phir adjust kiya, aakhir mein balance aa gaya. Exam ke liye teen cheezein pakki karo: **key elements** (agent, environment, state, action, reward, policy, value), **steps** (observe → act → reward → update) aur **types** (model-free/model-based, value/policy/actor-critic, on/off-policy).",
    "sections": [
      {
        "type": "definition",
        "title": "Reinforcement learning kya hai",
        "kicker": "Definition",
        "body": "RL mein ek **agent** environment ke saath interact karke **reward** maximise karna seekhta hai — bina kisi labelled answer ke, **trial and error** se. Formal framework **Markov Decision Process (MDP)** hai: (S, A, P, R, γ).",
        "body2": "Supervised learning se farq: wahan har input ka correct output diya jaata hai; yahan agent ko sirf **feedback signal** (reward) milta hai, wo bhi delayed — aur usse khud decide karna padta hai ki kaunsa action liya jaye (exploration vs exploitation).",
        "chips": [
          "Agent + environment",
          "Reward maximisation",
          "Trial and error",
          "MDP",
          "Delayed reward"
        ]
      },
      {
        "type": "cards",
        "title": "Key elements",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "users",
            "title": "Agent",
            "body": "Learner aur decision maker — robot, game player, recommender, LLM policy."
          },
          {
            "icon": "globe",
            "title": "Environment",
            "body": "Jiske saath agent interact karta hai — game, road, market, user."
          },
          {
            "icon": "target",
            "title": "State (S) aur Action (A)",
            "body": "State = current situation; action = agent ke choices (discrete ya continuous)."
          },
          {
            "icon": "money",
            "title": "Reward (R)",
            "body": "Scalar feedback har step par — +1 win, −1 crash, 0 neutral; **reward design** hi asli challenge hai."
          },
          {
            "icon": "flow",
            "title": "Policy (π)",
            "body": "State se action ka mapping — deterministic ya stochastic; RL ka final output yahi hota hai."
          },
          {
            "icon": "metrics",
            "title": "Value function V(s) / Q(s,a)",
            "body": "State (ya state-action) se future cumulative reward ki expectation — policy se better evaluate karta hai."
          }
        ]
      },
      {
        "type": "points",
        "title": "Learning loop — steps",
        "kicker": "Steps",
        "points": [
          "**Step 1:** agent current **state s** observe karta hai.",
          "**Step 2:** policy π ke hisaab se **action a** chunta hai (thoda exploration ke saath).",
          "**Step 3:** environment next state s' aur **reward r** return karta hai.",
          "**Step 4:** agent **value/policy update** karta hai — Q-learning ka update: Q(s,a) ← Q(s,a) + α[r + γ·max Q(s',a') − Q(s,a)].",
          "**Step 5:** s ← s' karke step 2 se repeat; ek **episode** khatam hone par (win/lose) next episode shuru.",
          "**Goal:** total discounted return G = r1 + γr2 + γ²r3 + ... maximise — γ (0–1) future ka weight decide karta hai."
        ]
      },
      {
        "type": "comparison",
        "title": "RL ke types",
        "kicker": "Comparison",
        "columns": [
          "Type",
          "Meaning / example"
        ],
        "rows": [
          {
            "label": "Model-free",
            "values": [
              "environment model nahi; Q-learning, SARSA, policy gradient"
            ]
          },
          {
            "label": "Model-based",
            "values": [
              "model seekhta/use karta hai; planning (AlphaZero, Dyna-Q)"
            ]
          },
          {
            "label": "Value-based",
            "values": [
              "value function seekhta hai; Q-learning, DQN"
            ]
          },
          {
            "label": "Policy-based",
            "values": [
              "policy directly optimise; REINFORCE, PPO"
            ]
          },
          {
            "label": "Actor-Critic",
            "values": [
              "dono: actor = policy, critic = value (A3C, SAC)"
            ]
          },
          {
            "label": "On-policy",
            "values": [
              "jo behaviour chal rahi hai wahi improve hoti hai (SARSA)"
            ]
          },
          {
            "label": "Off-policy",
            "values": [
              "purana/other data se seekhna (Q-learning, DQN)"
            ]
          },
          {
            "label": "Bandit",
            "values": [
              "single state, sirf action choice (A/B testing, ads)"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00d4ff"
        ]
      },
      {
        "type": "points",
        "title": "Exploration vs exploitation aur challenges",
        "kicker": "Challenges",
        "points": [
          "**Exploration vs exploitation:** naya action try karna (seekhne ke liye) vs best known action (reward ke liye). Strategies: ε-greedy, softmax, UCB, Thompson sampling.",
          "**Credit assignment:** kaun sa action 10 steps baad aaye reward ke liye zimmedar tha — isliye value function aur discount factor.",
          "**Sparse/delayed reward:** Chess mein reward sirf end par — isliye reward shaping aur Monte Carlo returns.",
          "**Sample inefficiency:** millions of episodes chahiye; simulation (MuJoCo, Atari) se speed up.",
          "**Stability:** policy gradient high variance; fixes — baselines, GAE, PPO clipping.",
          "**Applications:** AlphaGo/AlphaZero, robotics, data-centre cooling (40% energy saving), recommendation, traffic signals, RLHF (ChatGPT ka alignment step), drug discovery."
        ]
      },
      {
        "type": "diagram",
        "title": "Reinforcement Learning Loop",
        "kicker": "Diagram",
        "diagram": "ds5-reinforcement-learning",
        "caption": "Agent ↔ environment loop (state, action, reward) aur RL ke types ka tree"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Definition:** agent environment ke saath interact karke reward maximise karna seekhta hai (trial and error).",
          "**Elements:** agent, environment, state, action, reward, policy, value function, (model), discount γ.",
          "**Loop:** observe s → action a → (r, s') → update Q/V → repeat; return G = Σ γ^t r.",
          "**Q-learning:** Q(s,a) ← Q(s,a) + α[r + γ max Q(s',a') − Q(s,a)] — off-policy, model-free.",
          "**Types:** model-free vs model-based; value vs policy vs actor-critic; on- vs off-policy.",
          "**Key tension:** exploration vs exploitation; reward design sabse bada practical challenge."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define reinforcement learning. Explain its key elements with a diagram.",
        "answer": "**Definition (Sutton & Barto):** \"Reinforcement learning is learning what to do — how to map situations to actions — so as to maximise a numerical reward signal.\" Agent **trial and error** se seekhta hai, koi labelled answer nahi milta.\n\n**Key elements:**\n1. **Agent** — learner/decision maker (robot, game bot, recommender).\n2. **Environment** — jiske saath interaction hota hai (game world, road, market).\n3. **State (S)** — environment ki current situation ka representation (board position, car speed/position).\n4. **Action (A)** — agent ke available choices (left/right, buy/hold); discrete ya continuous.\n5. **Reward (R)** — har step ka scalar feedback (+1 win, −1 crash, small negative per step); **reward design** hi asli engineering challenge hai.\n6. **Policy (π)** — state → action mapping (deterministic/stochastic); RL ka final output policy hoti hai.\n7. **Value function V(s) / Q(s,a)** — future cumulative reward ki expectation; policy ko evaluate karta hai (policy se better long-term decisions).\n8. **Model (optional)** — environment ka internal model (model-based RL).\n9. **Discount factor γ** — future reward ka weight (0 = myopic, 0.99 = far-sighted).\n\n**Formal framework:** Markov Decision Process (S, A, P, R, γ) + Bellman equations.\n\n**Example:** chess — state = board, action = move, reward = +1 win / −1 loss, policy = position → move, value = jeetne ki probability.\n\n**Diagram:** Refer to the Reinforcement Learning Loop diagram."
      },
      {
        "question": "Explain the steps of reinforcement learning and the exploration-exploitation dilemma.",
        "answer": "**Learning loop (steps):**\n1. **Observe state s** — environment se current state lo.\n2. **Select action a** — policy π ke hisaab se (ε-greedy: thoda random exploration).\n3. **Execute action** — environment transition karta hai: next state s' aur reward r milta hai.\n4. **Update** — value/policy update; Q-learning: `Q(s,a) ← Q(s,a) + α[r + γ max Q(s',a') − Q(s,a)]` (α = learning rate).\n5. **Repeat** — s ← s'; episode khatam (terminal state) hone par next episode.\n6. **Converge** — policy improve hoti jaati hai; goal: expected **discounted return** G = r1 + γr2 + γ²r3 + ... maximise.\n\n**Exploration vs exploitation:**\n- **Exploration** — naye actions try karna taaki agent ko pata chale kaun sa action better ho sakta hai.\n- **Exploitation** — ab tak ka best known action choose karna taaki immediate reward mile.\n\n**Dilemma:** sirf exploit karo to local optimum mein atak jaoge (kabhi pata nahi chalega ki doosra raasta behtar tha); sirf explore karo to reward waste. Balance strategies:\n- **ε-greedy** — probability ε random action, (1 − ε) best action; ε ko time ke saath decay karo.\n- **Softmax/Boltzmann** — better actions ko zyada probability, par sabko kuch.\n- **UCB (Upper Confidence Bound)** — jo action kam try hua usko bonus.\n- **Thompson sampling** — Bayesian probability matching.\n- **Optimistic initialisation** — shuru mein sab ko high value do, agent sab try karega.\n\n**Real example:** restaurant choice — favourite jagah (exploit) vs naya restaurant (explore). Multi-armed bandit isi ka formal version hai (A/B testing, ad selection).\n\n**Diagram:** Refer to the Reinforcement Learning Loop diagram."
      },
      {
        "question": "Explain the types of reinforcement learning and differentiate RL from supervised learning.",
        "answer": "**Types of RL:**\n\n**1. Model-free vs model-based**\n- **Model-free:** environment ka model nahi; experience se seedha value/policy seekhta hai — Q-learning, SARSA, DQN, policy gradient.\n- **Model-based:** environment ka model (transition + reward) seekhta hai aur **planning** karta hai — Dyna-Q, AlphaZero (MCTS + network).\n\n**2. Value-based vs policy-based vs actor-critic**\n- **Value-based:** value function seekhta hai, policy implicit (Q-learning, DQN).\n- **Policy-based:** policy ko directly optimise karta hai (REINFORCE, PPO) — continuous actions ke liye better.\n- **Actor-critic:** dono — actor policy, critic value (A3C, SAC, DDPG).\n\n**3. On-policy vs off-policy**\n- **On-policy:** wahi policy improve karta hai jo data generate kar rahi hai (SARSA).\n- **Off-policy:** kisi bhi (purani/exploratory) policy ke data se seekh sakta hai (Q-learning, DQN) — sample-efficient, par unstable.\n\n**4. Online vs batch (offline) RL** — live interaction vs fixed logged dataset.\n\n**5. Multi-armed bandit** — single state, sirf action choice (ads, A/B tests).\n\n**RL vs supervised learning:**\n\n| Point | Supervised | Reinforcement |\n| Feedback | correct label per example | scalar reward, often delayed |\n| Data | fixed dataset | generated by interaction |\n| Goal | minimise prediction error | maximise cumulative reward |\n| Sequence | independent examples | sequential decisions (state matters) |\n| Exploration | not needed | essential (exploration vs exploitation) |\n| Example | spam classification | game playing, robotics, RLHF |\n\n**Diagram:** Refer to the Reinforcement Learning Loop diagram."
      }
    ]
  },
  {
    "id": "generative-deep-xai",
    "number": "5.12",
    "title": "Generative Learning, Deep Learning and Explainable AI",
    "subtitle": "GAN se LLM tak, CNN se SHAP tak — naye AI ka naksha",
    "icon": "ai",
    "accent": "#aa00ff",
    "englishDefinition": "Generative learning models the data distribution itself, learning P(X) (or P(X|Y)) so that new, realistic samples can be produced; discriminative models learn only the decision boundary P(Y|X). Major generative families are generative adversarial networks (a generator and a discriminator trained in a minimax game), variational autoencoders (an encoder-decoder with a latent distribution and a KL term), diffusion models (learn to reverse a gradual noising process) and autoregressive transformer models such as GPT that predict the next token. Deep learning is a branch of machine learning that stacks many layers of artificial neurons (weights, biases, non-linear activations) and trains them by backpropagation and gradient descent; its main architectures are convolutional networks (CNN) for images, recurrent networks (RNN/LSTM) and transformers (self-attention) for sequences. Because these models are opaque 'black boxes', explainable AI (XAI) provides methods to make their behaviour understandable — either intrinsic (interpretable models such as linear regression, decision trees and rule lists) or post-hoc (LIME local surrogates, SHAP Shapley-value attributions, permutation importance, saliency and Grad-CAM maps, counterfactual explanations, partial dependence plots). XAI supports trust, debugging, bias detection, safety and legal compliance such as the GDPR right to explanation.",
    "intro": "Aaj ke AI ke teen bade concepts ek hi unit mein aate hain. **Generative learning** naya data banata hai (GAN, VAE, diffusion, GPT). **Deep learning** in sab ke peeche ka engine hai — kai layers, backpropagation, CNN/RNN/Transformer. Aur **Explainable AI (XAI)** ye decide karta hai ki model ne jo kiya, usko insaan ko samjha bhi sakte hain ya nahi — LIME, SHAP, saliency. Exam ke liye generative vs discriminative ka farq, deep learning ke architectures aur XAI ke techniques, teeno ka table bana kar yaad karo.",
    "sections": [
      {
        "type": "definition",
        "title": "Generative learning kya hai",
        "kicker": "Definition",
        "body": "Generative model data ka **joint distribution P(X)** (ya P(X, Y)) seekhta hai — matlab data kaise banta hai, uski 'shakl' learn karta hai — aur phir **naye realistic samples generate** kar sakta hai. Discriminative model sirf **P(Y|X)** seekhta hai (decision boundary), naya data nahi bana sakta.",
        "body2": "Families: **GAN** (generator vs discriminator, minimax game), **VAE** (encoder → latent → decoder, reconstruction + KL loss), **Diffusion** (noise add karna seekho, phir reverse denoise), **Autoregressive/Transformer** (next token predict — GPT, image transformers).",
        "chips": [
          "P(X) seekhna",
          "GAN / VAE / Diffusion",
          "Transformers",
          "Synthetic data"
        ]
      },
      {
        "type": "cards",
        "title": "Deep learning — architectures",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "layers",
            "title": "ANN / MLP",
            "body": "Dense layers: neurons = weights + bias + activation (ReLU); backpropagation + gradient descent se train; tabular data."
          },
          {
            "icon": "eye",
            "title": "CNN",
            "body": "Convolution + pooling filters se image ke local patterns (edge → texture → object); image classification, detection, medical imaging."
          },
          {
            "icon": "cycle",
            "title": "RNN / LSTM / GRU",
            "body": "Sequence ke hidden state se order yaad rakhta hai; time-series, speech; vanishing gradient ki problem LSTM solve karta hai."
          },
          {
            "icon": "ai",
            "title": "Transformer",
            "body": "Self-attention se poore sequence ke relations parallel mein; BERT/GPT ka base; NLP, vision, multimodal — aaj ka default architecture."
          },
          {
            "icon": "metrics",
            "title": "Training essentials",
            "body": "Loss function, backpropagation, optimiser (SGD/Adam), regularisation (dropout), batchnorm; bade data + GPU chahiye."
          },
          {
            "icon": "warn",
            "title": "Black box",
            "body": "Lakhon parameters — insaan ko pata nahi hota model ne kaunsa feature use kiya; isliye XAI ki zaroorat padti hai."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Explainable AI (XAI) — techniques",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "search",
            "title": "LIME",
            "body": "Local Interpretable Model-agnostic Explanation: ek prediction ke around simple surrogate model (linear) fit karke uske feature weights dikhata hai."
          },
          {
            "icon": "metrics",
            "title": "SHAP",
            "body": "Shapley values (game theory) — har feature ka contribution fairly allocate; local + global, additive aur consistent."
          },
          {
            "icon": "chart",
            "title": "Saliency / Grad-CAM",
            "body": "Gradient ya last conv layer se image ka wo hissa highlight jo prediction mein contribute kiya (CNN ke liye)."
          },
          {
            "icon": "flow",
            "title": "Permutation importance / PDP",
            "body": "Feature ki values shuffle karke accuracy drop naapo; PDP se ek feature ka effect curve dekho."
          },
          {
            "icon": "bulb",
            "title": "Counterfactual",
            "body": "\"Kya badalne par decision badal jaata?\" — loan rejected, income 5k zyada hoti to approve? — human-friendly explanation."
          },
          {
            "icon": "check",
            "title": "Intrinsic (interpretable)",
            "body": "Linear regression, logistic regression, decision tree, rule lists, GAM — apne aap se samajh aane wale models."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Generative vs Discriminative",
        "kicker": "Comparison",
        "columns": [
          "Generative",
          "Discriminative"
        ],
        "rows": [
          {
            "label": "Kya seekhta hai",
            "values": [
              "P(X) ya P(X,Y)",
              "P(Y|X)"
            ]
          },
          {
            "label": "Naya data",
            "values": [
              "bana sakta hai",
              "nahi bana sakta"
            ]
          },
          {
            "label": "Examples",
            "values": [
              "GAN, VAE, diffusion, GPT",
              "logistic regression, SVM, CNN classifier"
            ]
          },
          {
            "label": "Data need",
            "values": [
              "zyada (structure seekhna)",
              "kam"
            ]
          },
          {
            "label": "Use",
            "values": [
              "image/text synth, data augmentation",
              "classification, prediction"
            ]
          },
          {
            "label": "Risk",
            "values": [
              "deepfake, misuse",
              "bias, overfitting"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff"
        ]
      },
      {
        "type": "points",
        "title": "XAI kyun zaroori hai — aur limits",
        "kicker": "Why XAI",
        "points": [
          "**Trust aur adoption:** doctor/loan officer black box par bharosa nahi karega; explanation ke saath decision accept hota hai.",
          "**Debugging:** galat prediction ka kaaran (jaise background ka texture) pakadna.",
          "**Bias detection:** model ne gender/region ko proxy bana liya — SHAP se dikhta hai.",
          "**Regulation:** GDPR ka \"right to explanation\", EU AI Act ke high-risk systems, credit lending (RBI/ECOA jaisi rules), medical devices.",
          "**Safety:** autonomous systems mein failure mode samajhna zaroori.",
          "**Trade-off:** interpretability vs accuracy — simple model samajhna easy par kam accurate; deep model accurate par opaque. XAI beech ka raasta hai.",
          "**Limits of XAI:** explanation ek **approximation** hai (LIME local surrogate, SHAP assumptions) — explanation bhi galat ho sakta hai; isliye stability aur faithfulness test karo."
        ]
      },
      {
        "type": "diagram",
        "title": "Generative AI, Deep Learning aur XAI",
        "kicker": "Diagram",
        "diagram": "ds5-generative-deep-xai",
        "caption": "Teen pillars: generative models → deep learning engine → explainability layer"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Generative:** P(X) seekhta hai, naya data banata hai — GAN (minimax), VAE (latent + KL), diffusion, transformers.",
          "**Discriminative:** P(Y|X) — classification/prediction; naya data nahi banata.",
          "**Deep learning:** layers + backprop; CNN (images), RNN/LSTM (sequence), Transformer (attention) — aaj ka default.",
          "**XAI:** intrinsic (linear, tree, rules) vs post-hoc (LIME, SHAP, Grad-CAM, PDP, counterfactual).",
          "**Zaroorat:** trust, debugging, bias, GDPR/EU AI Act compliance, safety.",
          "**Trade-off:** accuracy vs interpretability; XAI explanation bhi approximation hai — verify karo."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between generative learning and discriminative learning. Explain any two generative models.",
        "answer": "**Generative learning:** data ka **joint distribution P(X)** (ya P(X, Y)) seekhta hai — data kaise generate hota hai wo model karta hai, isliye **naye samples** bana sakta hai.\n\n**Discriminative learning:** sirf **P(Y|X)** — input se output ka boundary/label — seekhta hai; naya data nahi bana sakta.\n\n| Point | Generative | Discriminative |\n| Learns | P(X) / P(X,Y) | P(Y|X) |\n| New data | generate kar sakta hai | nahi |\n| Examples | GAN, VAE, diffusion, GPT, Naive Bayes | logistic regression, SVM, CNN classifier |\n| Data requirement | zyada | kam |\n| Speed/accuracy (classification) | generally slower | generally better |\n| Uses | image/text synthesis, augmentation, anomaly detection | classification, prediction |\n\n**Two generative models:**\n\n**1. GAN (Generative Adversarial Network)** — do networks: **generator** random noise se fake sample banata hai, **discriminator** real vs fake classify karta hai. Dono minimax game khelte hain: generator discriminator ko dhokha dena seekhta hai, discriminator pakadna. Training ke end mein generator real jaisa data banata hai (deepfake, image synthesis, super-resolution).\n\n**2. VAE (Variational Autoencoder)** — encoder input ko **latent distribution** (mean, variance) mein map karta hai, decoder usse reconstruct karta hai. Loss = reconstruction loss + **KL divergence** (latent ko normal distribution jaisa rakhta hai). Fayda: smooth latent space — interpolation aur naye samples easy.\n\n**(Teen: Diffusion models** — data par gradually noise add karna, phir reverse process seekh kar noise se image banana — Stable Diffusion, DALL·E.**\n\n**Diagram:** Refer to the Generative AI, Deep Learning aur XAI diagram."
      },
      {
        "question": "What is deep learning? Explain CNN, RNN and Transformer architectures with applications.",
        "answer": "**Deep learning:** machine learning ki branch jisme **kai layers** ke artificial neurons (weights, biases, non-linear activation jaise ReLU) stack hote hain aur **backpropagation + gradient descent** se train hote hain. Feature engineering ki zaroorat kam — model khud hierarchical features seekhta hai. Zaroorat: bada data + GPU.\n\n**1. CNN (Convolutional Neural Network)** — convolution filters input par slide karke local patterns (edge → texture → object) detect karte hain; pooling layer size ghatati hai; end mein dense classifier.\n- **Kyun:** spatial structure preserve hota hai, parameters share hote hain (fully connected se bahut kam).\n- **Applications:** image classification (ResNet), object detection (YOLO), face recognition, medical imaging, video.\n\n**2. RNN / LSTM / GRU** — hidden state sequence ka order yaad rakhta hai; har step par pichhla hidden state input ke saath combine hota hai.\n- **Problem:** simple RNN mein vanishing gradient; **LSTM** gates (input, forget, output) se long-term memory rakhta hai.\n- **Applications:** time-series forecasting, speech recognition, machine translation (pre-2017), handwriting recognition.\n\n**3. Transformer** — **self-attention** se sequence ke saare tokens ek saath parallel process hote hain; har token doosre tokens se \"kitna related hai\" weight karta hai. Positional encoding order batati hai.\n- **Kyun:** parallel training (GPU-friendly), long-range dependency, scale par bahut achha.\n- **Applications:** BERT/GPT/LLM, machine translation, vision transformer (ViT), multimodal (CLIP), speech.\n\n**Training:** loss (cross-entropy/MSE) → backprop → optimiser (Adam) → epochs; regularisation — dropout, weight decay, batch norm, data augmentation.\n\n**Limitation:** black box — lakhon parameters, interpretability nahi; isliye XAI (SHAP, Grad-CAM) chahiye.\n\n**Diagram:** Refer to the Generative AI, Deep Learning aur XAI diagram."
      },
      {
        "question": "What is Explainable AI? Explain LIME and SHAP, and why explainability matters.",
        "answer": "**Explainable AI (XAI)** wo methods hain jo machine-learning model ke decisions ko **insaan ke liye samajhne layak** banati hain — kaun se features ne prediction ko kitna affect kiya, aur kyun.\n\n**Kyun zaroori hai:**\n1. **Trust** — doctor/loan officer black box par bharosa nahi karta.\n2. **Debugging** — galat prediction ka kaaran pakadna (background texture, spurious correlation).\n3. **Bias detection** — gender/region proxy features se discrimination pakadna.\n4. **Regulation** — GDPR \"right to explanation\", EU AI Act (high-risk), credit/insurance rules.\n5. **Safety aur accountability** — autonomous systems mein failure mode samajhna.\n\n**Techniques:**\n\n**LIME (Local Interpretable Model-agnostic Explanations)** — ek prediction ke aas-paas data ko perturb karke local **surrogate model** (jaise linear regression ya decision tree) fit karta hai; surrogate ke weights = har feature ka local contribution. Fayda: model-agnostic, fast. Nuksaan: local approximation, sampling par unstable.\n\n**SHAP (SHapley Additive exPlanations)** — game theory ke **Shapley values** se har feature ka contribution fairly allocate karta hai (saare subsets ka average marginal contribution). Properties: **local accuracy, missingness, consistency** — additive explanation. Global summary (beeswarm) aur dependence plots bhi milte hain. Nuksaan: computationally heavy (approximations jaise KernelSHAP/TreeSHAP).\n\n**Others:** permutation importance, partial dependence plots (PDP), saliency maps aur **Grad-CAM** (CNN images), counterfactual explanations (\"income 5k zyada hoti to approve\"), intrinsic models (linear, decision tree, rule lists).\n\n**Trade-off:** interpretability vs accuracy — simple model samajhna easy par kam accurate; deep model accurate par opaque. XAI explanation khud **approximation** hai, isliye stability aur faithfulness test karna zaroori hai.\n\n**Diagram:** Refer to the Generative AI, Deep Learning aur XAI diagram."
      }
    ]
  }
];
