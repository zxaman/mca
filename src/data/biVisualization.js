// Business Intelligence — Unit V: Data Visualization and BI Tools
// Topics 5.1 – 5.9, teacher-style Hinglish notes + exam Q&A.

export const biVisualizationTopics = [
  {
    "id": "dataviz-intro",
    "number": "5.1",
    "title": "Introduction to Data Visualization",
    "subtitle": "Numbers se picture tak — dimaag chart kaise padhta hai",
    "icon": "chart",
    "accent": "#00d4ff",
    "englishDefinition": "Data visualization is the graphical representation of data using visual encodings - position, length, area, angle, colour and shape - so that patterns, comparisons, trends and outliers become perceptible at a glance instead of being calculated row by row. It sits at the end of the BI pipeline: data is collected, cleaned, modelled and aggregated, and visualization is the interface where a human finally interprets it. Visualization works because the human visual system processes pre-attentive attributes in parallel and in milliseconds, whereas reading a table of numbers is serial and effortful; it also exploits the eye's accuracy for common-scale position and length judgements and its weakness for area and colour-only comparisons. A good visualization answers one question, carries a clear message, uses an appropriate chart form, removes non-data ink, and supplies context - a baseline, a target, a comparison or a benchmark - without which a number has no meaning. Visualization is not decoration: it is a decision instrument, and a misleading one is worse than a plain table because it convinces.",
    "intro": "**Data visualization** = data ko visual form mein dikhana (bars, lines, maps, colours) taaki pattern, comparison, trend aur outlier **ek nazar mein** dikh jaye. Ye BI pipeline ka last step hai — data collect, clean, model, aggregate, aur phir **visual** jahan insaan use padhta hai. Visual isliye kaam karta hai kyunki dimaag **position aur length** ko bahut accurate padhta hai, par **area aur colour** ko kam. Isliye chart ka shape galat chuna to baat galat samajh aati hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Data visualization kya hai",
        "kicker": "Definition",
        "body": "**Data visualization** data ka graphical representation hai, jisme values ko visual encodings se dikhaya jaata hai — position, length, area, angle, colour, shape, size.",
        "body2": "Purpose sirf sundar banana nahi: **pattern dhoondhna**, **comparison karna**, **trend dekhna** aur **outlier pakadna** — teeno ek chart se. Ek achha chart ek hi sawaal ka jawab deta hai aur uske saath **context** (target, last period, benchmark) bhi deta hai.",
        "chips": [
          "visual encoding",
          "pattern",
          "context",
          "insight",
          "decision"
        ]
      },
      {
        "type": "comparison",
        "title": "Table vs chart vs dashboard",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Table",
          "Chart",
          "Dashboard"
        ],
        "rows": [
          {
            "label": "Best at",
            "values": [
              "exact lookup",
              "pattern and trend",
              "overview at a glance"
            ]
          },
          {
            "label": "Speed for humans",
            "values": [
              "slow, serial",
              "fast, parallel",
              "fastest"
            ]
          },
          {
            "label": "Detail",
            "values": [
              "full",
              "aggregated",
              "KPI + limited detail"
            ]
          },
          {
            "label": "Precision",
            "values": [
              "exact numbers",
              "approximate but clear",
              "status, not exact"
            ]
          },
          {
            "label": "Use",
            "values": [
              "audit, exports",
              "analysis, reports",
              "monitoring, alerts"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#00d4ff",
          "#00e676",
          "#c4ff00"
        ]
      },
      {
        "type": "cards",
        "title": "Kyun visualization kaam karta hai — perception ka logic",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "chart",
            "title": "Pre-attentive attributes",
            "body": "Colour, size, position, orientation 200-500 ms mein process hote hain, bina padhe.",
            "color": "#00d4ff"
          },
          {
            "icon": "half",
            "title": "Position > length > area",
            "body": "Common scale par position sabse accurate; pie ka angle aur bubble ka area sabse weak.",
            "color": "#00e676"
          },
          {
            "icon": "search",
            "title": "Parallel processing",
            "body": "Table padhna serial hai; chart ek saath poora scan hota hai.",
            "color": "#ff8800"
          },
          {
            "icon": "warn",
            "title": "Limited working memory",
            "body": "7±2 cheezein yaad rehti hain - isliye grouping aur highlighting zaroori hai.",
            "color": "#ff5252"
          },
          {
            "icon": "bulb",
            "title": "Pattern detection",
            "body": "Insaan ka dimaag trend, gap aur outlier automatically dhoondhta hai.",
            "color": "#aa00ff"
          },
          {
            "icon": "layers",
            "title": "Gestalt grouping",
            "body": "Proximity, similarity, enclosure se related cheezein apne aap group dikhti hain.",
            "color": "#00bcd4"
          }
        ]
      },
      {
        "type": "points",
        "title": "Visualization ka BI pipeline mein role",
        "kicker": "Key Points",
        "points": [
          "**Raw data** → ETL → **warehouse / model** → **aggregate query** → **visual** → **insight** → **decision**.",
          "Visualization **last mile** hai — model sahi par chart galat ho to decision galat.",
          "Ye **non-technical users** ke liye data ka interface hai.",
          "Ye **exception** dikhata hai, isliye monitoring aur alerting ka base hai.",
          "Ye **storytelling** ka medium hai — boardroom mein chart bhasha hai.",
          "Galat chart **convincingly galat** hota hai, isliye design discipline zaroori."
        ]
      },
      {
        "type": "example",
        "title": "Ek hi data, teen chart — teen kahaniyan",
        "kicker": "Example",
        "body": "Numbers: monthly sales Rs 40, 42, 41, 43, 45, 44 lakh.\n\n- **Line chart, Y-axis 0 se:** line lagbhag flat dikhti hai → \"sales stable hai\".\n- **Bar chart, Y-axis 39 se:** bars bahut alag dikhte hain → \"bahut growth hui\" (exaggerated, misleading).\n- **Line + target line 46 lakh:** gap clearly dikhta hai → \"target se peeche hain\"\n\nData same hai, insaani nateeja alag. Isliye **truncated axis** (non-zero baseline) comparison ke liye forbidden hai, aur context line (target) hamesha add karo."
      },
      {
        "type": "diagram",
        "title": "Introduction to data visualization",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "vz-intro",
        "caption": "The BI pipeline from raw data through warehouse and query to a visual insight, the three destinations table chart and dashboard, and the perception reasons visualization works such as pre-attentive attributes and position beating area"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Visualization = data ka **visual encoding** (position, length, colour).",
          "Kaam: pattern, comparison, trend, outlier — **ek nazar** mein.",
          "Position sabse accurate, area/angle sabse weak.",
          "Context ke bina number ka koi matlab nahi (target/benchmark).",
          "Exam line: \"visualization decision ka instrument hai, decoration nahi.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define data visualization. Explain its importance in business intelligence.",
        "answer": "**Definition:** data visualization data ka graphical representation hai, jisme values ko visual encodings (position, length, area, angle, colour, shape) se dikhaya jaata hai taaki pattern, comparison, trend aur outlier ek nazar mein samajh aaye.\n\n**BI mein importance:**\n1. **Speed** - chart parallel process hota hai, table serial; decision tez.\n2. **Pattern detection** - trend, seasonality, gap, outlier automatically dikhte hain.\n3. **Non-technical access** - managers ko SQL nahi aata, chart aata hai.\n4. **Exception monitoring** - threshold ke bahar value colour se turant dikhti hai.\n5. **Comparison** - target, last period, benchmark ek hi frame mein.\n6. **Communication** - boardroom storytelling ka medium.\n7. **Exploration** - interactive filters se khud analysis (self-service).\n8. **Data quality signal** - galat data ka pattern ajeeb dikhta hai.\n\n**Kaam kaise karta hai:** pre-attentive attributes 200-500 ms mein process hote hain; position/length judgements accurate hote hain, area/angle weak.\n\n**Caveat:** galat chart convincingly galat hota hai - isliye principles aur context zaroori.\n\n**Diagram:** Refer to the introduction to data visualization diagram."
      },
      {
        "question": "Explain the visual encodings used in data visualization and rank them by perceptual accuracy.",
        "answer": "**Visual encodings** wo visual properties hain jinse value dikhti hai:\n\n1. **Position** (common scale) - scatter plot, dot plot, line chart.\n2. **Position** (non-common scale) - multiple small charts.\n3. **Length** - bar chart.\n4. **Angle / slope** - pie, donut, line slope.\n5. **Area** - bubble, treemap, stacked area.\n6. **Colour hue / saturation** - categories, heatmaps.\n7. **Shape / icon** - categorical markers.\n\n**Accuracy ranking (Cleveland and McGill):** position (common scale) > position (non-common) > length > angle/slope > area > volume > colour saturation > colour hue.\n\n**Practical rules:**\n- Exact comparison chahiye to **position ya length** (bar, dot, line).\n- Ranking/parts-of-whole ke liye bar better hai, pie se.\n- Area aur colour sirf **approximate** grouping ke liye.\n- Ek chart mein 5-7 colours se zyada nahi.\n- Colour-blind safe palette aur redundant encoding (colour + label) use karo.\n\n**Diagram:** Refer to the introduction to data visualization diagram."
      },
      {
        "question": "\"A chart can be technically correct yet misleading.\" Discuss with examples.",
        "answer": "**Examples of misleading but correct charts:**\n\n1. **Truncated Y-axis** - bar chart 39 se shuru; chhoti difference badi dikhti hai. Bar charts ko zero baseline chahiye.\n2. **Dual axes** - do alag scale par lines; correlation jhootha lagta hai.\n3. **3-D pie / perspective** - front slices bade dikhte hain (area distortion).\n4. **Cherry-picked range** - sirf achhe 6 mahine dikhana.\n5. **Missing context** - absolute numbers without population/denominator (100 complaints: 100 customers ya 1 lakh?).\n6. **Aggregation trap** - Simpson's paradox: har segment mein improvement, total mein decline.\n7. **Colour misuse** - red/green traffic colours colour-blind users ke liye same.\n8. **Chart junk** - gradients, shadows, gridlines data ko dabaa dete hain.\n9. **Too many categories** - 20-slice pie kuch nahi batata.\n\n**Prevention:** zero baseline for bars, consistent scales, annotated context, honest ranges, denominator dikhao, colour-blind palette, aur \"kya decision nikalta hai\" test.\n\n**Exam line:** misleading chart data ko galat nahi karta, insaan ko galat karta hai - aur wo zyada khatarnak hai.\n\n**Diagram:** Refer to the introduction to data visualization diagram."
      }
    ]
  },
  {
    "id": "dataviz-principles",
    "number": "5.2",
    "title": "Principles of Effective Data Visualization",
    "subtitle": "Sahi chart + saaf design — accuracy se clarity tak",
    "icon": "bulb",
    "accent": "#00e676",
    "englishDefinition": "Effective visualization follows a small set of principles that can be checked before publishing. The first is accuracy: the encoding must be proportionate to the data, so bars start at zero, axes are not truncated for comparison, and area or angle encodings are avoided for precise judgements. The second is clarity: one message per chart, a declarative title that states the finding rather than the variable names, minimal non-data ink, direct labelling over separate legends, and a visual hierarchy that leads the eye from the headline to the detail. The third is context: every number is shown against a target, a previous period, a benchmark or a distribution, because an isolated number cannot be judged. The fourth is consistency: the same colour, axis range and aggregation across all charts of a topic, so the reader learns the encoding once. The fifth is accessibility: colour-blind safe palettes, sufficient contrast, redundant encoding with labels or shapes, and readable font sizes. The sixth is honesty about uncertainty: sample sizes, confidence bands and data cutoffs should be visible. Tufte's data-ink ratio, the Gestalt grouping laws and the pre-attentive attributes are the theoretical backbone; the practical test is whether a reader can extract the intended message in five seconds without explanation.",
    "intro": "Achhe visualization ke 6 principles: **accuracy** (bar zero se, axis truncated nahi), **clarity** (ek chart ek message, declarative title, kam se kam ink), **context** (target/pichhla period/benchmark), **consistency** (same colour aur scale har chart mein), **accessibility** (colour-blind safe, contrast, labels), aur **honesty** (sample size, cutoff, uncertainty). Test simple hai: **5 second mein message milta hai?**",
    "sections": [
      {
        "type": "definition",
        "title": "Principles ka core idea",
        "kicker": "Definition",
        "body": "**Effective visualization** wo hai jisme reader **kam effort** mein **sahi message** nikaal le. Iske liye chart ka form data ke hisaab se sahi ho (accuracy), design saaf ho (clarity), aur comparison ka reference ho (context).",
        "body2": "Do famous rules yaad rakho: **Tufte ka data-ink ratio** (jitna ink, utna hi data ke liye — baaki hatao) aur **Gestalt laws** (proximity, similarity, enclosure se grouping apne aap banti hai). Plus **pre-attentive attributes** — colour aur position se aankh turant guide hoti hai.",
        "chips": [
          "accuracy",
          "clarity",
          "context",
          "consistency",
          "accessibility",
          "honesty"
        ]
      },
      {
        "type": "cards",
        "title": "Chhe principles — exam ke liye",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "check",
            "title": "1. Accuracy",
            "body": "Bars zero se, no truncated axis, no 3-D pie, area/angle se precise comparison nahi.",
            "color": "#00d4ff"
          },
          {
            "icon": "search",
            "title": "2. Clarity",
            "body": "Ek chart ek message; declarative title; direct labels; chart junk hatao.",
            "color": "#00e676"
          },
          {
            "icon": "layers",
            "title": "3. Context",
            "body": "Target, previous period, benchmark ya distribution — akela number meaningless.",
            "color": "#ff8800"
          },
          {
            "icon": "cycle",
            "title": "4. Consistency",
            "body": "Same colour, scale, aggregation, date format har chart mein.",
            "color": "#aa00ff"
          },
          {
            "icon": "half",
            "title": "5. Accessibility",
            "body": "Colour-blind palette, contrast, redundant labels, min 11-12 px font.",
            "color": "#00bcd4"
          },
          {
            "icon": "warn",
            "title": "6. Honesty",
            "body": "Sample size, cutoff date, confidence band, denominator dikhao.",
            "color": "#ff5252"
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Kharab chart vs achha chart — same data",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Weak practice",
          "Strong practice"
        ],
        "rows": [
          {
            "label": "Title",
            "values": [
              "\"Sales by month\"",
              "\"Q3 sales 8% below target, led by West\""
            ]
          },
          {
            "label": "Y-axis",
            "values": [
              "39 se start (bar)",
              "0 se start, ya line chart with context"
            ]
          },
          {
            "label": "Colours",
            "values": [
              "rainbow, 12 hues",
              "12 hues nahi, 2-3 + highlight"
            ]
          },
          {
            "label": "Legend",
            "values": [
              "alag box, 8 items",
              "direct labels on series"
            ]
          },
          {
            "label": "Grid",
            "values": [
              "heavy gridlines, borders",
              "light or none, data stands out"
            ]
          },
          {
            "label": "Comparison",
            "values": [
              "none",
              "target line + last year"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#ff5252",
          "#00e676"
        ]
      },
      {
        "type": "points",
        "title": "Practical checklist — publish se pehle",
        "kicker": "Key Points",
        "points": [
          "Title message batata hai ya variable naam? (**declarative title**)",
          "Ek hi question ka jawab deta hai? (**one message**)",
          "Chart type data ke hisaab se sahi hai? (trend → line, comparison → bar)",
          "Baseline zero hai (bar) ya axis justified (line)?",
          "Context hai — target, last period, benchmark?",
          "Colour sirf meaning ke liye use hua, decoration ke liye nahi?",
          "Colour-blind safe hai aur labels direct hain?",
          "Cutoff date, units aur source likha hai?"
        ]
      },
      {
        "type": "example",
        "title": "Ek report ka before-after",
        "kicker": "Example",
        "body": "**Before:** bar chart, title \"Monthly Revenue\", Y-axis 38-46 lakh, rainbow colours, 3-D effect, mojibake legend, no target. Reader ka nateeja: \"bahut volatility hai\".\n\n**After:** line chart, Y-axis 0-50 lakh, ek target line 46 lakh, title \"Revenue 6% below target since July\", West region highlighted in one accent colour, direct labels. Reader ka nateeja: \"July se target se neeche, West ki wajah se\".\n\nSame numbers, par **decision** sirf doosre chart se nikalta hai. Yahi principles ka poora point hai."
      },
      {
        "type": "diagram",
        "title": "Principles of effective data visualization",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "vz-principles",
        "caption": "Six principle cards for accuracy clarity context consistency accessibility and honesty around a before-and-after chart redesign, with the data-ink ratio, Gestalt grouping laws and a pre-publish checklist"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "6 principles: **accuracy, clarity, context, consistency, accessibility, honesty**.",
          "Bar **zero baseline**; truncated axis comparison ke liye galat.",
          "**Declarative title** — message, variable naam nahi.",
          "**Data-ink ratio** high rakho, chart junk hatao.",
          "Exam line: \"5 second mein message na mile to chart fail hai.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the principles of effective data visualization.",
        "answer": "**1. Accuracy** - encoding data ke proportionate ho: bar chart zero se shuru, truncated axis se comparison nahi, 3-D pie avoid, precise comparison ke liye position/length.\n\n**2. Clarity** - ek chart ek message; declarative title (finding likho, variable naam nahi); direct labels instead of legend; gridlines aur borders halke; chart junk zero.\n\n**3. Context** - har number ke saath target, previous period, benchmark ya distribution; warna reader judge nahi kar sakta.\n\n**4. Consistency** - same colour, axis range, aggregation, date format aur units across charts; reader encoding ek baar seekhta hai.\n\n**5. Accessibility** - colour-blind safe palette, sufficient contrast, redundant encoding (colour + label/shape), readable font size, alt text.\n\n**6. Honesty** - sample size, data cutoff, confidence band aur denominator visible; cherry-picked ranges nahi.\n\n**Theory:** Tufte ka data-ink ratio (non-data ink minimize), Gestalt laws (proximity, similarity, enclosure), pre-attentive attributes (colour/position se attention guide).\n\n**Test:** 5 second mein intended message nikalna chahiye.\n\n**Diagram:** Refer to the principles of effective data visualization diagram."
      },
      {
        "question": "What is chart junk? Discuss the design techniques used to reduce clutter in a visualization.",
        "answer": "**Chart junk** wo saara visual element hai jo data nahi batata - 3-D effects, gradients, shadows, heavy gridlines, borders, unnecessary icons, background images, redundant legends.\n\n**Nuksan:** data-ink ratio girta hai, aankh distract hoti hai, comparison mushkil hoti hai, aur chart impress karta hai par samjhaata nahi.\n\n**Techniques to reduce clutter:**\n1. **Data-ink ratio** badhao - har element ka purpose poochho.\n2. **Gridlines halke** ya hata do; borders aur box remove.\n3. **Direct labelling** - legend box ki jagah line ke paas label.\n4. **Ek accent colour** - sirf highlight ke liye, baaki grey.\n5. **Sort** karo (alphabetical nahi, value se) - comparison easy.\n6. **Small multiples** - 12 charts ki jagah 12 chhote panels same scale par.\n7. **Annotation** - insight seedha chart par likho.\n8. **White space** ko dushman na samjho - breathing room clarity deta hai.\n9. **3-D, shadows, gradients** band karo.\n10. **Ek chart, ek message** - do sawaal ho to do chart.\n\n**Diagram:** Refer to the principles of effective data visualization diagram."
      },
      {
        "question": "How do colour, title and annotation improve a visualization? Explain with best practices.",
        "answer": "**Colour**\n- Sirf **meaning** ke liye: category, magnitude, ya highlight.\n- **Categorical:** max 5-7 hues, colour-blind safe palette.\n- **Sequential:** ek hue, light se dark (magnitude).\n- **Diverging:** do hues + neutral centre (profit/loss).\n- **Highlight:** ek accent colour, baaki grey - focus banata hai.\n- Red/green traffic light akela na use karo; icon ya label bhi do.\n\n**Title**\n- **Declarative** ho: \"Q3 revenue 8% below target\" instead of \"Revenue by quarter\".\n- Subtitle mein unit, period aur cutoff.\n- Title hi 80% message de de to chart ka kaam aasan ho jaata hai.\n\n**Annotation**\n- Outlier, policy change, campaign launch ko chart par mark karo.\n- Ek-do annotations kaafi hain; har point par label nahi.\n- Direct labels series ke paas, legend door nahi.\n\n**Example:** line chart with grey lines for all regions, one region highlighted in accent, target dashed line, annotation \"price cut 15 Aug\", title stating the finding.\n\n**Result:** reader ko chart padhne ke liye effort nahi karna padta - message seedha milta hai.\n\n**Diagram:** Refer to the principles of effective data visualization diagram."
      }
    ]
  },
  {
    "id": "charts-types",
    "number": "5.3",
    "title": "Types of Charts and Visual Representations",
    "subtitle": "Sahi sawaal ke liye sahi chart — chooser matrix",
    "icon": "layers",
    "accent": "#ff8800",
    "englishDefinition": "Charts are chosen by the question being asked and the shape of the data, not by taste. Comparison across categories uses bar charts (horizontal bars for long labels and ranking); change over time uses line charts, area charts for cumulative volume, and column charts for few discrete periods; part-to-whole composition uses stacked bars, treemaps for hierarchies, and pie or donut charts only for two or three slices; distribution uses histograms, box plots and violin plots; relationship and correlation use scatter plots with trend lines; deviation from a target uses bullet charts and diverging bars; geographic patterns use choropleth or symbol maps with an appropriate projection; and flow or hierarchy uses Sankey diagrams, funnel charts and org-style trees. Specialised forms cover heatmaps for dense matrices, small multiples for many series, waterfall charts for contribution decomposition, gauge and KPI tiles for single values, and sparklines for inline trends. The recurring mistakes are using pie charts for many categories, using line charts for categorical data, mixing chart types in one frame, and choosing a form that hides the very comparison the decision depends on.",
    "intro": "Chart **sawaal** se chunte hain, taste se nahi. Comparison → **bar**, time trend → **line**, composition → **stacked bar/treemap** (pie sirf 2-3 slices), distribution → **histogram/box**, relationship → **scatter**, target ke saath deviation → **bullet/diverging**, geography → **map**, contribution → **waterfall**. Sabse common galti: pie mein 10 categories, line chart mein categorical data, aur ek frame mein mix chart types.",
    "sections": [
      {
        "type": "definition",
        "title": "Chart selection ka rule",
        "kicker": "Definition",
        "body": "**Chart type data ke \"question shape\" se decide hota hai** — comparison, trend, composition, distribution, relationship, geography, ya flow.",
        "body2": "Same data par galat chart chunne se wo comparison hi chhap jaata hai jispar decision depend karta hai. Isliye pehle **sawaal likho**, phir chart chuno. Ek chart mein ek question.",
        "chips": [
          "comparison",
          "trend",
          "composition",
          "distribution",
          "relationship",
          "geography"
        ]
      },
      {
        "type": "comparison",
        "title": "Question ke hisaab se chart — chooser matrix",
        "kicker": "Comparison",
        "columns": [
          "Question",
          "Best chart",
          "Avoid"
        ],
        "rows": [
          {
            "label": "Compare categories",
            "values": [
              "horizontal bar, dot plot",
              "pie, 3-D bar"
            ]
          },
          {
            "label": "Change over time",
            "values": [
              "line, column (few periods)",
              "pie, stacked area for trend"
            ]
          },
          {
            "label": "Part-to-whole",
            "values": [
              "stacked bar, treemap",
              "pie with 6+ slices"
            ]
          },
          {
            "label": "Distribution",
            "values": [
              "histogram, box plot",
              "average-only bar"
            ]
          },
          {
            "label": "Correlation",
            "values": [
              "scatter + trend line",
              "dual-axis line"
            ]
          },
          {
            "label": "Target vs actual",
            "values": [
              "bullet chart, diverging bar",
              "gauge alone"
            ]
          },
          {
            "label": "Geography",
            "values": [
              "choropleth, symbol map",
              "map for non-spatial data"
            ]
          },
          {
            "label": "Contribution / flow",
            "values": [
              "waterfall, Sankey, funnel",
              "pie"
            ]
          },
          {
            "label": "Dense matrix",
            "values": [
              "heatmap, small multiples",
              "rainbow 3-D surface"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#00e676",
          "#ff5252"
        ]
      },
      {
        "type": "cards",
        "title": "Common chart types — kab kya",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "chart",
            "title": "Bar / column",
            "body": "Category comparison aur ranking. Horizontal bar long labels ke liye.",
            "color": "#00d4ff"
          },
          {
            "icon": "timeline",
            "title": "Line",
            "body": "Continuous time trend; multiple series ek hi scale par.",
            "color": "#00e676"
          },
          {
            "icon": "layers",
            "title": "Stacked bar / area",
            "body": "Composition over time; 100% stacked se share compare.",
            "color": "#ff8800"
          },
          {
            "icon": "half",
            "title": "Pie / donut",
            "body": "Sirf 2-3 slices, part-to-whole ka quick look. Warna bar.",
            "color": "#ffd600"
          },
          {
            "icon": "search",
            "title": "Scatter",
            "body": "Do measures ka relationship, correlation, outlier clusters.",
            "color": "#aa00ff"
          },
          {
            "icon": "cycle",
            "title": "Histogram / box",
            "body": "Distribution, spread, skew, median vs mean.",
            "color": "#00bcd4"
          },
          {
            "icon": "warn",
            "title": "Bullet / gauge",
            "body": "Target vs actual ek nazar mein; gauge akela na use karo.",
            "color": "#ff5252"
          },
          {
            "icon": "ai",
            "title": "Waterfall / funnel",
            "body": "Contribution breakdown (bridge) aur conversion stages.",
            "color": "#ff7ab2"
          }
        ]
      },
      {
        "type": "points",
        "title": "Chart chunne ke practical rules",
        "kicker": "Key Points",
        "points": [
          "**Horizontal bars** long category names ke liye (region, product).",
          "**Sort** value se, alphabetical se nahi.",
          "**Zero baseline** bar ke liye; line chart ke liye justified range.",
          "**Time on X-axis**, left to right; gaps interpolate na karo.",
          "**5-7 series** se zyada ho to small multiples ya highlight.",
          "**Pie** sirf 2-3 slices, warna stacked bar.",
          "**Dual axis** avoid karo - do charts ya indexed values.",
          "**Annotation** se outlier/event mark karo."
        ]
      },
      {
        "type": "example",
        "title": "Ek sales report mein chart choices",
        "kicker": "Example",
        "body": "Sawaal 1: \"Kaunsa region sabse peeche?\" → **horizontal bar**, sorted ascending, target line ke saath.\n\nSawaal 2: \"Saal bhar trend kaisa raha?\" → **line chart**, monthly, last year ki grey line.\n\nSawaal 3: \"Category mix kya hai?\" → **100% stacked bar** by month (pie nahi, kyunki 6 categories hain).\n\nSawaal 4: \"Target se kitna gap?\" → **bullet chart** per region.\n\nSawaal 5: \"Do measures ka relation?\" → **scatter** (discount vs margin), trend line ke saath.\n\nSawaal 6: \"Kis stage par log chhoot rahe hain?\" → **funnel chart**.\n\nHar chart ek alag sawaal ka jawab de raha hai — isi ko \"one chart, one question\" kehte hain."
      },
      {
        "type": "diagram",
        "title": "Types of charts and visual representations",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "vz-charts",
        "caption": "A chart chooser matrix mapping the analytical question to the right chart family, tiles for eleven common chart types from bar and line to waterfall and heatmap, and the avoid-list of pie charts with many slices truncated axes and dual axes"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Chart **sawaal** se chunte hain: comparison, trend, composition, distribution, relationship, geography, flow.",
          "Comparison → **bar**, trend → **line**, composition → **stacked bar**, distribution → **histogram**.",
          "**Pie** sirf 2-3 slices, warna bar/treemap better.",
          "**Scatter** relationship ke liye, **waterfall** contribution ke liye.",
          "Zero baseline for bars; sorted categories; 5-7 series max.",
          "Exam line: \"ek chart, ek sawaal.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the different types of charts used in data visualization with their suitability.",
        "answer": "**1. Bar / column chart** - category comparison aur ranking. Horizontal bar long labels ke liye. Zero baseline zaroori.\n**2. Line chart** - continuous time trend, multiple series ek scale par.\n**3. Area / stacked area** - cumulative volume aur composition over time.\n**4. Pie / donut** - part-to-whole, sirf 2-3 slices ke liye.\n**5. Scatter plot** - do measures ka relationship, correlation, outliers.\n**6. Histogram** - distribution, spread, skew.\n**7. Box plot** - median, quartiles, outliers ka comparison across groups.\n**8. Heatmap** - dense matrix, category x time intensity.\n**9. Bullet chart / gauge** - target vs actual.\n**10. Waterfall** - contribution decomposition (start se end tak bridge)\n**11. Funnel** - conversion stages.\n**12. Map (choropleth / symbol)** - geographic pattern.\n**13. Treemap** - hierarchy aur part-to-whole with many categories.\n**14. Small multiples** - many series, same scale par comparable panels.\n**15. Sparkline / KPI tile** - inline trend aur single value.\n\n**Selection rule:** pehle sawaal (compare/trend/compose/distribute/relate) likho, phir chart chuno; charts ki ginti nahi, clarity matter karti hai.\n\n**Diagram:** Refer to the types of charts and visual representations diagram."
      },
      {
        "question": "How do you select an appropriate chart for a given business question? Illustrate with examples.",
        "answer": "**Selection process**\n1. **Sawaal likho** - comparison, trend, composition, distribution, correlation, geography, flow.\n2. **Data ka shape dekho** - categorical vs continuous, time series, kya zero baseline chahiye.\n3. **Chart family chuno** matrix se.\n4. **Check karo** - kya decision-relevant comparison dikh raha hai?\n5. **Simplify** - ek message, ek chart.\n\n**Examples**\n- \"Kaunsa region peeche hai?\" → horizontal bar, sorted, target line.\n- \"Trend kaisa hai?\" → line chart, monthly, last year grey.\n- \"Category mix?\" → 100% stacked bar (6 categories) - pie nahi.\n- \"Target gap?\" → bullet chart.\n- \"Discount vs margin?\" → scatter + trend line.\n- \"Kahan customers chhoot rahe hain?\" → funnel.\n- \"Contribution of each factor in variance?\" → waterfall.\n- \"State-wise performance?\" → choropleth map + bar.\n\n**Anti-patterns:** pie with 8 slices, line chart for categories, dual axes, 3-D effects, map for non-spatial data.\n\n**Diagram:** Refer to the types of charts and visual representations diagram."
      },
      {
        "question": "Discuss the common mistakes in chart selection and how to avoid them.",
        "answer": "**Mistakes**\n1. **Pie with many slices** - angles compare karna mushkil; bar use karo.\n2. **Line chart for categorical data** - continuity ka galat signal.\n3. **Truncated axis on bars** - difference exaggerate.\n4. **Dual axes** - fake correlation.\n5. **3-D and perspective** - area distortion.\n6. **Too many series** - 12 lines ek chart mein; small multiples ya highlight.\n7. **Rainbow palette** - meaning khatam, colour-blind issue.\n8. **Aggregated chart hiding the driver** - total flat par ek segment collapse ho raha ho.\n9. **Map for non-spatial data** - geography ka jhootha implication.\n10. **Gauge-only KPI** - exact value aur trend dono kho jaate hain.\n11. **Mixing chart types in one frame** - confusion.\n12. **No context** - target/benchmark missing.\n\n**Avoid karne ke tareeke:** question-first selection, chooser matrix, checklist review, peer review, aur \"5-second test\" - kya reader message nikaal paata hai.\n\n**Diagram:** Refer to the types of charts and visual representations diagram."
      }
    ]
  },
  {
    "id": "dashboard-design",
    "number": "5.4",
    "title": "Dashboard Design Principles",
    "subtitle": "Ek screen par poora business — layout, hierarchy aur focus",
    "icon": "dashboard",
    "accent": "#aa00ff",
    "englishDefinition": "A dashboard is a single screen that answers a defined set of questions for a defined audience at a defined cadence; it is a monitoring instrument, not a report dump. Dashboard design therefore starts with the audience and the decisions they make, then fixes the number of KPIs (typically five to nine on the first screen), the reading order, and the level of detail. The standard conventions are: place the most important KPI top-left because the eye starts there; follow a Z or F reading pattern; use a headline band of KPI tiles with sparklines, a middle band of trends and comparisons, and a detail band of tables or drill-downs; keep a consistent grid (12-column), consistent margins, and one accent colour for exceptions; show comparisons, not bare numbers, with red-amber-green status used sparingly and never as the only encoding; and provide global filters such as date range, region and product at the top in one place. Performance matters as much as layout - a dashboard that takes fifteen seconds to load will not be used, so aggregates and extract-based models, indexed filters and query folding are design requirements. Mobile and accessibility constraints, a visible data refresh timestamp, and a clear owner complete a professional dashboard.",
    "intro": "**Dashboard** = ek screen par defined audience ke defined sawaalon ka jawab, defined cadence par. Ye report ka dump nahi, **monitoring instrument** hai. Design ke basics: audience pehle, **5-9 KPIs** first screen par, important KPI **top-left**, Z/F reading pattern, ek accent colour, comparisons (target/last period) har number ke saath, filters ek hi jagah upar, aur **load time 5 second** ke andar. Refresh timestamp aur owner likhna mat bhoolo.",
    "sections": [
      {
        "type": "definition",
        "title": "Dashboard kya hai (aur report se alag kaise)",
        "kicker": "Definition",
        "body": "**Dashboard** ek single screen hai jo ek defined audience ke kuch defined sawaalon ka jawab **glance** mein deta hai — monitoring aur alerting ke liye.",
        "body2": "**Report** detailed aur multi-page hoti hai (analysis ke liye). Dashboard ka test: \"**5 second mein status pata chal jaata hai?**\" Agar nahi, to wo dashboard nahi, report hai.",
        "chips": [
          "single screen",
          "audience",
          "5-9 KPIs",
          "glanceable",
          "monitoring"
        ]
      },
      {
        "type": "cards",
        "title": "Design principles — screen ke andar",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "dashboard",
            "title": "1. Audience + purpose",
            "body": "Pehle likho: kaun dekhega, kya decision lega, kitni baar. Uske baad visuals.",
            "color": "#00d4ff"
          },
          {
            "icon": "chart",
            "title": "2. KPI hierarchy",
            "body": "Top-left sabse important KPI; 5-9 tiles; baaki detail neeche.",
            "color": "#00e676"
          },
          {
            "icon": "layers",
            "title": "3. Layout bands",
            "body": "Headline (KPI+trend) → trend/compare → detail table/drill.",
            "color": "#ff8800"
          },
          {
            "icon": "search",
            "title": "4. Comparisons not numbers",
            "body": "Har tile par target, last period ya sparkline.",
            "color": "#ffd600"
          },
          {
            "icon": "half",
            "title": "5. One accent colour",
            "body": "RAG sirf exceptions par; colour-blind safe; icon + label bhi.",
            "color": "#aa00ff"
          },
          {
            "icon": "cycle",
            "title": "6. Global filters",
            "body": "Date, region, product ek jagah upar; har chart par alag filter nahi.",
            "color": "#00bcd4"
          },
          {
            "icon": "warn",
            "title": "7. Performance",
            "body": "Aggregates, extract, query folding; 5 second load target.",
            "color": "#ff5252"
          },
          {
            "icon": "clock",
            "title": "8. Trust signals",
            "body": "Refresh timestamp, data source, owner, metric definition.",
            "color": "#ff7ab2"
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Dashboard vs report vs scorecard",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Dashboard",
          "Report",
          "Scorecard"
        ],
        "rows": [
          {
            "label": "Purpose",
            "values": [
              "monitor now",
              "analyse why",
              "track goals"
            ]
          },
          {
            "label": "Screen",
            "values": [
              "one screen",
              "many pages",
              "one screen, few KPIs"
            ]
          },
          {
            "label": "Audience",
            "values": [
              "operations, managers",
              "analysts",
              "management, board"
            ]
          },
          {
            "label": "Interactivity",
            "values": [
              "filters, drill",
              "deep drill, export",
              "status only"
            ]
          },
          {
            "label": "Cadence",
            "values": [
              "daily / real time",
              "ad-hoc",
              "monthly / quarterly"
            ]
          },
          {
            "label": "Content",
            "values": [
              "KPI + trends",
              "tables, detail, narrative",
              "KPI vs target"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#aa00ff",
          "#00bcd4",
          "#c4ff00"
        ]
      },
      {
        "type": "points",
        "title": "Layout blueprint (12-column grid)",
        "kicker": "Key Points",
        "points": [
          "**Header band:** title, date range, global filters, refresh time.",
          "**KPI band (top):** 4-6 tiles, each with value + delta + sparkline.",
          "**Middle band:** 2-3 trend/comparison charts (target line, last period).",
          "**Right rail:** alerts, exceptions, top-N lists.",
          "**Bottom band:** detail table with drill-through.",
          "**Consistent margins** (16 px) aur ek hi font family, 2-3 sizes.",
          "**White space** ko jagah do — clutter se glanceability marta hai."
        ]
      },
      {
        "type": "example",
        "title": "Ek sales dashboard ka blueprint",
        "kicker": "Example",
        "body": "**Audience:** regional sales head, roz subah. **Decision:** kahan action chahiye aaj?\n\n- **Header:** \"Sales performance - as of 5 Nov 09:00\", filters: region, category, period.\n- **KPI tiles (4):** Sales vs target (92%, red), MTD growth (+8%, green), Active dealers (1,240, amber), Avg order value (Rs 18,400, green) - sab par sparkline.\n- **Middle:** monthly trend vs last year (line), region-wise bar sorted with target line.\n- **Right rail:** top 5 declining SKUs, stock-out alerts.\n- **Bottom:** dealer table with drill-through to invoices.\n\n**Result:** 5 second mein status + action list. Load time 3 second (extract model, aggregated)."
      },
      {
        "type": "diagram",
        "title": "Dashboard design principles",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "vz-dashboard",
        "caption": "A twelve column dashboard blueprint with header and global filters, a KPI tile band, trend and comparison charts, an alerts rail and a detail table, beside the eight design principles and the dashboard versus report distinction"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Dashboard = **single screen + defined audience + 5-9 KPIs**.",
          "Important KPI **top-left**, Z/F reading pattern, bands mein layout.",
          "Har number ke saath **comparison** (target/last period/sparkline).",
          "**Ek accent colour**, RAG sparingly, colour-blind safe.",
          "**5 second load** aur refresh timestamp — warna dashboard use nahi hota."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is a dashboard? Explain the principles of effective dashboard design.",
        "answer": "**Dashboard:** ek single screen jo ek defined audience ke defined sawaalon ka jawab glance mein deta hai - monitoring aur alerting ke liye.\n\n**Design principles:**\n1. **Audience and purpose first** - kaun, kya decision, kitni baar.\n2. **KPI hierarchy** - 5-9 KPIs, sabse important top-left.\n3. **Layout bands** - header, KPI band, trend/comparison band, detail band.\n4. **Comparisons** - target, last period, sparkline har tile par.\n5. **Consistency** - grid, margins, fonts, colours, date format.\n6. **One accent colour** - exceptions highlight, baaki grey.\n7. **Global filters** - date/region/product ek jagah.\n8. **Performance** - aggregates, extract, 5 second load.\n9. **Trust** - refresh timestamp, source, owner, definitions.\n10. **Accessibility** - contrast, font size, colour-blind safe, mobile layout.\n\n**Anti-patterns:** 40 charts on one screen, rainbow colours, no target, no filters, no refresh time.\n\n**Test:** 5 second mein status aur action samajh aaye.\n\n**Diagram:** Refer to the dashboard design principles diagram."
      },
      {
        "question": "Differentiate between a dashboard, a report and a scorecard.",
        "answer": "| Point | Dashboard | Report | Scorecard |\n|---|---|---|---|\n| Purpose | abhi monitor karna | kyun analyse karna | goals track karna |\n| Screen | one screen | many pages | one screen, few KPIs |\n| Audience | operations, managers | analysts | management, board |\n| Content | KPI + trends | tables, detail, narrative | KPI vs target |\n| Interactivity | filters, drill | deep drill, export | status only |\n| Cadence | daily / real time | ad-hoc / periodic | monthly / quarterly |\n| Design focus | glanceability | completeness | alignment to goals |\n\n**Explanation:**\n- Dashboard \"kya ho raha hai\" batata hai; report \"kyun ho raha hai\".\n- Scorecard balanced scorecard framework se juda hota hai - chaar perspectives, KPI vs target, RAG status.\n- Dashboard aur scorecard dono single screen, par scorecard mein detail kam aur goal tracking zyada.\n\n**Practical:** ek hi BI system mein teeno layers hoti hain - dashboard (daily), report (weekly), scorecard (quarterly).\n\n**Diagram:** Refer to the dashboard design principles diagram."
      },
      {
        "question": "Discuss the layout, visual hierarchy and performance considerations of a dashboard.",
        "answer": "**Layout**\n- **12-column grid**, 16 px margins, consistent gutters.\n- **Header:** title, period, global filters, refresh timestamp.\n- **KPI band:** 4-6 tiles (value + delta + sparkline).\n- **Middle:** trends aur comparisons (target line).\n- **Right rail:** alerts, top-N.\n- **Bottom:** detail table + drill-through.\n- **Mobile:** single column, KPI tiles stacked, filters collapsible.\n\n**Visual hierarchy**\n- Sabse important KPI **top-left** (F/Z reading pattern).\n- Size se importance: bada tile = important KPI.\n- **Ek accent colour**; exceptions RAG, par icon/label ke saath.\n- Grouping Gestalt se (proximity, enclosure) - related charts ek card mein.\n- Number of charts kam rakho; white space do.\n\n**Performance**\n- **Aggregates** aur summary tables use karo, row-level nahi.\n- **Extract / import mode** vs direct query - load time ka farq.\n- **Query folding**, indexed filter columns, partition pruning.\n- **Page-level** par query count kam (har visual = ek query).\n- **Incremental refresh** taaki raat ka load chhota rahe.\n- Target **5 second** load; 10+ second par users chhod dete hain.\n\n**Trust signals:** refresh timestamp, source, metric definition link.\n\n**Diagram:** Refer to the dashboard design principles diagram."
      }
    ]
  },
  {
    "id": "interactive-reporting",
    "number": "5.5",
    "title": "Interactive Reporting and Visual Analytics",
    "subtitle": "Report se conversation tak — filter, drill, brush, what-if",
    "icon": "zap",
    "accent": "#ffd600",
    "englishDefinition": "Interactive reporting turns a static report into a conversation with data: the reader selects a period, filters a region, drills from a summary into transactions, hovers for the exact value and the definition, and compares scenarios. Visual analytics adds the analytical layer on top - linked brushing across views, cross-filtering, small multiples, anomaly highlighting, trend lines and forecasting, clustering, and what-if parameters - so that the analyst can form and test hypotheses without writing SQL. The technical enablers are a semantic layer with conformed dimensions (so a filter means the same thing everywhere), pre-aggregated data for responsiveness, query folding or in-memory engines, and a governed metric catalogue. Good interactivity follows the drill path of the decision: overview, then filter, then detail, then action, with breadcrumbs and a clear way back. The design risks are filter overload, hidden state where two viewers see different numbers, interactivity that hides the headline, and export or alerting gaps that force manual work. Interactivity is therefore judged by whether it shortens the path from question to decision - not by how many controls a page carries.",
    "intro": "**Interactive reporting** = report se **conversation**: filter, drill, hover, compare, what-if. **Visual analytics** uspar analytical layer hai — linked brushing, cross-filtering, anomaly highlight, trend/forecast, clustering, parameters. Iske liye **semantic layer + conformed dimensions** chahiye, warna filter ka matlab har jagah alag hoga. Interactivity ka test: **question se decision tak ka rasta chhota hua?** Bas controls ki ginti nahi.",
    "sections": [
      {
        "type": "definition",
        "title": "Interactive reporting aur visual analytics",
        "kicker": "Definition",
        "body": "**Interactive reporting:** user khud data se sawaal karta hai — filter lagata hai, drill karta hai, hover par exact value dekhta hai.",
        "body2": "**Visual analytics:** iske upar analysis — linked views (ek filter sab par), cross-filter, anomaly detection, trend line, forecast, clustering, what-if parameters. Dono milkar **self-service analytics** banate hain.",
        "chips": [
          "filter",
          "drill",
          "cross-filter",
          "what-if",
          "self-service"
        ]
      },
      {
        "type": "cards",
        "title": "Interactivity ke building blocks",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "search",
            "title": "Filters / slicers",
            "body": "Date, region, product. Global filter ek jagah, page filters alag.",
            "color": "#00d4ff"
          },
          {
            "icon": "layers",
            "title": "Drill-down / up",
            "body": "Summary se detail tak hierarchy ke through.",
            "color": "#00e676"
          },
          {
            "icon": "arrow",
            "title": "Drill-through",
            "body": "KPI se source rows tak (invoice level) — audit ke liye.",
            "color": "#ff8800"
          },
          {
            "icon": "cycle",
            "title": "Cross-filter / brush",
            "body": "Ek chart par click, baaki sab filter ho jaate hain.",
            "color": "#aa00ff"
          },
          {
            "icon": "bulb",
            "title": "Tooltip + definition",
            "body": "Hover par exact value, formula aur source.",
            "color": "#00bcd4"
          },
          {
            "icon": "half",
            "title": "What-if parameters",
            "body": "Slider se price/discount badlo, KPI turant badalta hai.",
            "color": "#ff7ab2"
          },
          {
            "icon": "forecast",
            "title": "Analytics layer",
            "body": "Trend line, forecast, clustering, anomaly highlight.",
            "color": "#ffd600"
          },
          {
            "icon": "warn",
            "title": "Bookmarks / alerts",
            "body": "View save karo, threshold par email/Teams alert.",
            "color": "#ff5252"
          }
        ]
      },
      {
        "type": "points",
        "title": "Interactivity ke rules (design)",
        "kicker": "Key Points",
        "points": [
          "**Drill path decision se match kare** — overview → filter → detail → action.",
          "**Breadcrumb** dikhao aur \"back\" aasan ho.",
          "**Hidden state** mat rakhо — filter ka summary header mein dikhe.",
          "**Filters ki ginti** kam rakho (3-5), warna user confuse hota hai.",
          "**Headline kabhi hide na ho** — interactivity ke baad bhi KPI dikhe.",
          "**Response time** 1-2 second; warna user filter lagana chhod deta hai.",
          "**Conformed dimensions** — filter ka matlab har page par same.",
          "**Export / subscribe** option do, warna manual screenshot culture banta hai."
        ]
      },
      {
        "type": "example",
        "title": "Regional review meeting ka flow",
        "kicker": "Example",
        "body": "**Step 1 (overview):** dashboard par West region red - sales 88% of target.\n**Step 2 (filter):** region = West, period = last 90 days.\n**Step 3 (drill):** category-wise bar par click → Snacks sabse peeche.\n**Step 4 (drill-through):** top declining SKUs ki list → 3 SKUs stock-out.\n**Step 5 (cross-check):** inventory dashboard brush karke supply chain team ko alert.\n**Step 6 (what-if):** \"agar 3 SKUs ka stock next week aa jaye\" → forecast se ~6% recovery estimate.\n\nYahan interactivity ne 4 ghante ki manual analysis ko 10 minute ka conversation bana diya. Yahi self-service analytics ka maqsad hai."
      },
      {
        "type": "diagram",
        "title": "Interactive reporting and visual analytics",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "vz-interactive",
        "caption": "The drill path from overview to filter to detail to action, the interactivity building blocks such as slicers drill-down cross-filtering and what-if parameters, and the analytics layer of trend lines forecasts clustering and anomaly highlighting"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Interactivity: **filter → drill → cross-filter → what-if**.",
          "Semantic layer + **conformed dimensions** = consistent filters.",
          "Drill path: **overview → filter → detail → action**.",
          "Response 1-2 second, filters 3-5, hidden state nahi.",
          "Exam line: \"interactivity ka test — question se decision ka rasta chhota hua?\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is interactive reporting? Explain its features and benefits in visual analytics.",
        "answer": "**Interactive reporting:** aisa reporting interface jisme user khud data explore karta hai - filter, drill, hover, compare, what-if - bina naya report banwane ke.\n\n**Features:**\n1. **Slicers / filters** - date, region, product.\n2. **Drill-down / drill-up** - hierarchy ke through detail.\n3. **Drill-through** - KPI se source rows tak.\n4. **Cross-filtering / linked brushing** - ek chart se baaki views filter.\n5. **Tooltips** - exact value + metric definition.\n6. **What-if parameters** - slider se scenario.\n7. **Sorting, top-N, search.**\n8. **Bookmarks, export, subscribe, alerts.**\n9. **Annotations** - event/insight ko chart par mark karna.\n\n**Visual analytics layer:** trend line, forecast, clustering, anomaly detection, small multiples.\n\n**Benefits:** self-service, faster decisions, less IT backlog, ad-hoc questions ka jawab, anomalies ki discovery, aur ek hi data par multiple views.\n\n**Requirements:** semantic layer, conformed dimensions, aggregated data for speed, governed metric definitions.\n\n**Diagram:** Refer to the interactive reporting and visual analytics diagram."
      },
      {
        "question": "Explain cross-filtering, drill-down and drill-through. How do they differ?",
        "answer": "**Cross-filtering (linked brushing):** ek visual par selection karne se baaki visuals us selection par filter ho jaate hain. Example: region chart par \"West\" click → sab charts West ka data dikhate hain.\n\n**Drill-down:** ek hi visual ke andar hierarchy ke through neeche jaana. Example: year → quarter → month, ya category → subcategory. Values dis-aggregate hote hain.\n\n**Drill-through:** selected aggregate se **alag detail page** par source rows dekhna. Example: total sales 92 lakh par right-click → 4,820 invoice rows.\n\n| Point | Cross-filter | Drill-down | Drill-through |\n|---|---|---|---|\n| Scope | doosre visuals | same visual, hierarchy | naya detail view |\n| Result | filtered view | finer granularity | row-level data |\n| Use | compare segments | root cause | audit, verification |\n| Data | consistent | disaggregated | transactional |\n\n**Design notes:** drill-down ke liye clean hierarchy chahiye; drill-through ke liye fact table grain aur security; cross-filter mein conformed dimensions zaroori warna selection ka matlab badal jaata hai.\n\n**Diagram:** Refer to the interactive reporting and visual analytics diagram."
      },
      {
        "question": "Discuss the design considerations and risks of interactive dashboards.",
        "answer": "**Design considerations**\n1. **Drill path** decision ke flow se match kare.\n2. **Breadcrumbs** aur easy back navigation.\n3. **Filter placement** - global filters upar, 3-5 se zyada nahi.\n4. **Visible state** - kaunse filters lage hain, header mein dikhe.\n5. **Response time** 1-2 second (aggregates, extract mode, query folding).\n6. **Metric definitions** tooltip/link se available.\n7. **Conformed dimensions** for consistent filtering.\n8. **Mobile/touch** friendly controls.\n9. **Export/subscribe/alerts** - manual work khatam.\n10. **Accessibility** - keyboard navigation, contrast, alt text.\n\n**Risks**\n- **Filter overload** - user ko samajh nahi aata.\n- **Hidden state** - do log alag numbers dekhte hain aur debate karte hain.\n- **Performance collapse** - har click par 8 queries.\n- **Headline hiding** - interactivity ke chakkar mein main message kho jaata hai.\n- **False precision** - drill-through se row-level noise par discussion.\n- **Governance gap** - self-service se \"shadow metrics\" ban jaate hain.\n\n**Mitigation:** metric catalogue, default views, performance budget, training, aur usage analytics.\n\n**Diagram:** Refer to the interactive reporting and visual analytics diagram."
      }
    ]
  },
  {
    "id": "bi-tools",
    "number": "5.6",
    "title": "Introduction to Business Intelligence Tools (Power BI / Tableau)",
    "subtitle": "Do market leaders — architecture, strengths aur fit",
    "icon": "server",
    "accent": "#00bcd4",
    "englishDefinition": "Power BI and Tableau are the two market-leading BI platforms, and both follow the same conceptual pipeline - connect, model, visualize, publish, govern - while differing in architecture and emphasis. Power BI is Microsoft-centric: Power Query for ETL, a Tabular/VertiPaq in-memory model with DAX measures, report pages built on a 12-column grid, a Service layer for workspaces, scheduled refresh, row-level security, dataflows and a low entry price bundled with Microsoft 365; its strengths are price, Office integration, governed shared semantic models and fast development. Tableau is visualisation-first: VizQL translates drag-and-drop into queries, extracts (.hyper) or live connections, LOD expressions for granular calculations, strong ad-hoc exploration, excellent chart craft and dashboards plus Tableau Prep for preparation and Server or Cloud for distribution; its strengths are exploratory depth, visual quality and handling messy or wide data. Selection depends on the existing stack (Microsoft estate, Excel culture), cost model, data volumes and refresh needs, governance and skills, and often both coexist - Power BI for governed enterprise reporting, Tableau for analyst-led exploration.",
    "intro": "Market ke do bade tools: **Power BI** aur **Tableau**. Dono ka pipeline same hai — connect → model → visualize → publish → govern. **Power BI:** Microsoft ecosystem, Power Query + VertiPaq + **DAX**, sasta, Office integration, shared semantic models. **Tableau:** visualization-first, **VizQL**, drag-and-drop exploration, **LOD expressions**, behtar chart craft. Selection: existing stack, cost, data volume, governance aur skills par depend karta hai — dono saath bhi chal sakte hain.",
    "sections": [
      {
        "type": "definition",
        "title": "BI tool kya karta hai",
        "kicker": "Definition",
        "body": "**BI tool** wo platform hai jahan data se report/dashboard banti hai — connectors, data model, visual canvas, publishing, security aur refresh.",
        "body2": "Dono leaders ka workflow same hai: **connect → model → visual → publish → govern**. Farq architecture, calculation language, exploration style aur pricing model mein hai.",
        "chips": [
          "connectors",
          "semantic model",
          "visuals",
          "publish",
          "governance"
        ]
      },
      {
        "type": "comparison",
        "title": "Power BI vs Tableau",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Power BI",
          "Tableau"
        ],
        "rows": [
          {
            "label": "Vendor / ecosystem",
            "values": [
              "Microsoft 365, Azure",
              "Salesforce (Tableau)"
            ]
          },
          {
            "label": "Prepare data",
            "values": [
              "Power Query (M)",
              "Tableau Prep"
            ]
          },
          {
            "label": "Engine",
            "values": [
              "VertiPaq in-memory (Tabular)",
              "VizQL + Hyper extracts / live"
            ]
          },
          {
            "label": "Calculations",
            "values": [
              "DAX (measures, context)",
              "calculated fields, LOD expressions"
            ]
          },
          {
            "label": "Interaction model",
            "values": [
              "model-first, governed model",
              "visual-first, drag and drop"
            ]
          },
          {
            "label": "Strength",
            "values": [
              "price, Office fit, shared models",
              "exploration depth, chart craft"
            ]
          },
          {
            "label": "Publishing",
            "values": [
              "Power BI Service / workspaces",
              "Tableau Server / Cloud"
            ]
          },
          {
            "label": "Cost",
            "values": [
              "lower (Pro bundled, Fabric)",
              "higher per-seat"
            ]
          },
          {
            "label": "Best fit",
            "values": [
              "enterprise governed reporting",
              "analyst-led ad-hoc analysis"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#00d4ff",
          "#aa00ff"
        ]
      },
      {
        "type": "cards",
        "title": "Tool ke core components",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "database",
            "title": "Connectors",
            "body": "SQL, Excel, cloud (Azure, Snowflake), APIs, files; import vs direct query.",
            "color": "#00d4ff"
          },
          {
            "icon": "layers",
            "title": "Semantic model",
            "body": "Tables, relationships, hierarchies, measures; star schema recommended.",
            "color": "#00e676"
          },
          {
            "icon": "chart",
            "title": "Visual canvas",
            "body": "Pages, grid layout, chart types, formatting, interactions.",
            "color": "#ff8800"
          },
          {
            "icon": "lock",
            "title": "Security",
            "body": "Row-level security, workspace roles, gateway, sensitivity labels.",
            "color": "#ff5252"
          },
          {
            "icon": "cycle",
            "title": "Refresh",
            "body": "Scheduled / incremental refresh; gateway for on-prem sources.",
            "color": "#aa00ff"
          },
          {
            "icon": "check",
            "title": "Governance",
            "body": "Certified datasets, lineage, usage metrics, deployment pipelines.",
            "color": "#00bcd4"
          }
        ]
      },
      {
        "type": "points",
        "title": "Selection criteria (exam ke liye)",
        "kicker": "Key Points",
        "points": [
          "**Existing stack** — Microsoft-heavy ho to Power BI sasta aur integrated.",
          "**Cost model** — per-user licence vs capacity/consumption.",
          "**Data volume aur refresh** — in-memory limits, incremental refresh, gateway.",
          "**Exploration need** — ad-hoc depth chahiye to Tableau.",
          "**Governance** — shared certified semantic model chahiye to Power BI strong.",
          "**Skills** — DAX vs VizQL learning curve; team ki existing skill.",
          "**Deployment** — cloud-only ya on-prem server.",
          "**Mobile + embedding** — both support, licensing alag."
        ]
      },
      {
        "type": "example",
        "title": "Chunaav ka example",
        "kicker": "Example",
        "body": "Ek FMCG company: 400 Excel users, Microsoft 365 already, finance ke governed reports chahiye, budget tight.\n\n**Decision:** Power BI — E5 licence ke saath, shared semantic model (certified dataset), row-level security region-wise, nightly incremental refresh, gateway on-prem ERP ke liye.\n\n**Analytics team** (8 analysts) ad-hoc exploration ke liye Tableau rakhti hai — messy wide datasets aur complex chart craft ke liye.\n\n**Result:** governed reporting Power BI mein (single version of truth), exploration Tableau mein. Dono ek hi warehouse par, isliye numbers match karte hain — yahi hybrid ka success factor hai."
      },
      {
        "type": "diagram",
        "title": "Introduction to BI tools - Power BI and Tableau",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "vz-tools",
        "caption": "Side by side comparison of Power BI and Tableau across preparation engine calculation language interaction model publishing and cost, with the shared connect model visualize publish govern pipeline and the selection criteria"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Pipeline same: **connect → model → visualize → publish → govern**.",
          "Power BI: **Power Query + VertiPaq + DAX**, Microsoft ecosystem, sasta.",
          "Tableau: **VizQL + Hyper**, visual-first exploration, LOD expressions.",
          "Selection: stack, cost, volume, governance, skills.",
          "Exam line: \"Power BI governance ke liye, Tableau exploration ke liye\" — dono saath chal sakte hain."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Compare Power BI and Tableau as business intelligence tools.",
        "answer": "| Point | Power BI | Tableau |\n|---|---|---|\n| Vendor | Microsoft | Salesforce (Tableau) |\n| Data prep | Power Query (M) | Tableau Prep |\n| Engine | VertiPaq in-memory Tabular | VizQL + Hyper extracts / live |\n| Calculation | DAX measures, filter context | calculated fields, LOD expressions |\n| Interaction | model-first, governed dataset | visual-first, drag and drop |\n| Strength | price, Office fit, shared semantic model | exploration depth, chart craft |\n| Publishing | Power BI Service workspaces | Tableau Server / Cloud |\n| Security | RLS, workspace roles, labels | user filters, row-level security |\n| Cost | lower, bundled with M365 / Fabric | higher per seat |\n| Best fit | enterprise governed reporting | analyst-led ad-hoc analysis |\n\n**Common ground:** both connect to warehouses, build a semantic layer, publish dashboards, support refresh, security and mobile.\n\n**Conclusion:** technical superiority se zyada **fit** matter karta hai - existing stack, budget, governance aur skills. Bahut organisations dono use karti hain.\n\n**Diagram:** Refer to the introduction to BI tools diagram."
      },
      {
        "question": "Explain the typical workflow of creating a dashboard in a BI tool such as Power BI or Tableau.",
        "answer": "**Workflow (both tools)**\n1. **Connect** - source chuno (SQL warehouse, Excel, cloud); import vs direct query decide karo.\n2. **Prepare** - Power Query / Tableau Prep se clean, rename, type fix, join.\n3. **Model** - star schema, relationships, hierarchies, measures (DAX / calculated fields), date table.\n4. **Visualize** - chart type per question, 12-column grid layout, formatting, interactions.\n5. **Interactivity** - slicers, drill-down, cross-filter, tooltips, bookmarks.\n6. **Validate** - totals reconcile with source, edge cases, RLS test.\n7. **Publish** - workspace / server, permissions, scheduled refresh, gateway.\n8. **Govern** - certify dataset, usage metrics, alerts/subscriptions, iteration.\n\n**Best practices:** star schema model, measures not calculated columns where possible, one certified dataset per domain, performance profiling, documentation of metric definitions.\n\n**Diagram:** Refer to the introduction to BI tools diagram."
      },
      {
        "question": "What criteria should an organisation use to select a BI tool? Discuss with a recommendation.",
        "answer": "**Criteria**\n1. **Existing ecosystem** - Microsoft 365/Azure ho to Power BI integrated aur sasta.\n2. **Cost model** - per-seat vs capacity; total cost with gateway, server, training.\n3. **Data volume and refresh** - in-memory limits, incremental refresh, direct query support.\n4. **Analysis depth** - ad-hoc exploration chahiye to Tableau, governed reporting to Power BI.\n5. **Governance** - certified shared semantic models, lineage, RLS, deployment pipelines.\n6. **Skills and learning curve** - DAX vs VizQL; team ki current skill.\n7. **Deployment** - cloud-only vs on-prem server requirement.\n8. **Embedding and mobile** - OEM embedding, mobile app, licensing.\n9. **Ecosystem partners** - SI support, community, hiring pool.\n\n**Recommendation approach:** pilot with the same dataset on both tools, measure time-to-dashboard, load performance, governance effort aur user satisfaction, then decide.\n\n**Common outcome:** hybrid - Power BI for enterprise governed reporting, Tableau for analyst-led exploration, both on the same warehouse.\n\n**Diagram:** Refer to the introduction to BI tools diagram."
      }
    ]
  },
  {
    "id": "building-dashboards",
    "number": "5.7",
    "title": "Creating Dashboards and Visual Reports Using BI Tools",
    "subtitle": "Requirement se publish tak — step-by-step build",
    "icon": "layers",
    "accent": "#00e676",
    "englishDefinition": "Building a dashboard in a BI tool is a disciplined sequence rather than a drag-and-drop exercise. It begins with a requirements brief that names the audience, the decisions, the KPIs with exact formulas and the acceptable refresh cadence, and it continues with data preparation (profiling, cleaning, conforming keys), a dimensional model (facts at a declared grain, conformed dimensions, a marked date table, relationships one-to-many from dimension to fact), and a measure layer (base measures, time intelligence, ratios as DIVIDE, no hard-coded filters). The visual build then proceeds top-down: page layout and grid, KPI tiles with deltas and sparklines, trend and comparison visuals, then detail tables and drill-through. Every visual must be validated against the source totals, tested with edge cases such as no-data and negative values, and profiled for speed. Publication covers workspace permissions, row-level security testing with a real restricted user, scheduled or incremental refresh with an on-premises gateway where needed, sensitivity labels, certification of the dataset so others trust it, subscriptions and alerts, and usage monitoring after go-live. Documentation of metric definitions, data lineage and ownership is part of the deliverable - a dashboard without a definition sheet is a future argument, not a decision tool.",
    "intro": "BI tool mein dashboard banana **discipline** hai, drag-and-drop nahi. Sequence: **requirement brief → data prep → star schema model → measures → visuals (top-down) → validate → publish (permissions/RLS/refresh) → govern (certify + docs)**. Billkul key baat: har visual ka total source se **reconcile** karo, RLS ek real restricted user se test karo, aur **metric definition sheet** likho — warna dashboard future ke jhagde ka source ban jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Dashboard build kya hai",
        "kicker": "Definition",
        "body": "**Dashboard build** = requirement brief se published, governed, documented report tak ka end-to-end process.",
        "body2": "Tool koi bhi ho (Power BI, Tableau), steps same rehte hain — sirf syntax aur UI badalta hai. Build ka output sirf file nahi, **certified dataset + docs + owner** hota hai.",
        "chips": [
          "requirement brief",
          "model",
          "measures",
          "validate",
          "publish",
          "govern"
        ]
      },
      {
        "type": "points",
        "title": "Step-by-step build process",
        "kicker": "Key Points",
        "points": [
          "**1. Requirement brief:** audience, decisions, 5-9 KPIs + exact formula, refresh cadence, security needs.",
          "**2. Data prep:** profiling, cleaning, type fixing, conformed keys, deduplication (Power Query / Tableau Prep).",
          "**3. Model:** star schema — fact at declared grain, conformed dimensions, marked date table, 1:* relationships.",
          "**4. Measures:** base measures, time intelligence (YTD, MTD, PY), ratios with DIVIDE, no hard-coded filters.",
          "**5. Layout:** 12-column grid, header + filters + refresh timestamp, KPI band, trend band, detail band.",
          "**6. Interactivity:** slicers, drill-down, drill-through, cross-filter, tooltips, bookmarks.",
          "**7. Validate:** totals reconcile, no-data/negative edge cases, RLS test, performance profile.",
          "**8. Publish:** workspace, permissions, gateway + scheduled/incremental refresh, sensitivity labels.",
          "**9. Govern:** certify dataset, subscriptions/alerts, usage metrics, definition sheet, owner, iteration."
        ]
      },
      {
        "type": "cards",
        "title": "Build ke common mistakes",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "warn",
            "title": "Flat single table",
            "body": "Excel jaisa flat file model — slow aur ambiguous. Star schema chahiye.",
            "color": "#ff5252"
          },
          {
            "icon": "warn",
            "title": "Calculated columns overload",
            "body": "Row context wale columns memory khaate hain; measures use karo.",
            "color": "#ff8800"
          },
          {
            "icon": "warn",
            "title": "Hard-coded filters",
            "body": "FILTER(table, region=\"West\") — dynamic slicer se karо.",
            "color": "#ffd600"
          },
          {
            "icon": "warn",
            "title": "No date table",
            "body": "Time intelligence ke liye marked date table zaroori.",
            "color": "#aa00ff"
          },
          {
            "icon": "warn",
            "title": "40 visuals per page",
            "body": "Har visual = query; page slow ho jaata hai.",
            "color": "#00bcd4"
          },
          {
            "icon": "check",
            "title": "Reconciliation",
            "body": "Har KPI ka total source se match karo, warna trust zero.",
            "color": "#00e676"
          }
        ]
      },
      {
        "type": "example",
        "title": "Build example — dealer performance page",
        "kicker": "Example",
        "body": "**Brief:** regional head, daily, 5 KPIs (sales vs target, growth, active dealers, stock cover, collection %).\n\n**Model:** fact_sales (grain: invoice line), dim_dealer, dim_product, dim_date (marked), dim_region. Relationships 1:*.\n\n**Measures:** `Sales = SUM(fact_sales[amount])`, `Target`, `Achievement % = DIVIDE([Sales],[Target])`, `PY Sales = CALCULATE([Sales], SAMEPERIODLASTYEAR(dim_date[date]))`.\n\n**Layout:** KPI band 5 tiles + sparkline; middle: month trend vs PY, region bar with target line; right rail: top declining dealers; bottom: dealer table with drill-through to invoices.\n\n**Validate:** total sales = 92.4 Cr matches warehouse; no-data month shows blank not zero; RLS tested with West-only user (only West rows).\n\n**Publish:** workspace \"Sales Analytics\", nightly 02:00 incremental refresh via gateway, dataset certified, definition sheet linked in the header."
      },
      {
        "type": "diagram",
        "title": "Creating dashboards and visual reports using BI tools",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "vz-build",
        "caption": "The nine step build pipeline from requirement brief through data preparation dimensional model measures layout interactivity validation publishing and governance, with the common build mistakes listed against each stage"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Build sequence: **brief → prep → model → measures → visuals → validate → publish → govern**.",
          "Model: **star schema + marked date table + 1:* relationships**.",
          "Ratios **DIVIDE** se, hard-coded filters nahi.",
          "**Validate**: reconcile totals, edge cases, RLS test, performance.",
          "**Publish + govern**: refresh, permissions, certification, definition sheet, owner."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the steps involved in creating a dashboard and visual report using a BI tool.",
        "answer": "**1. Requirement brief** - audience, decisions, KPIs with formulas, refresh cadence, security.\n**2. Connect** - source chuno; import vs direct query.\n**3. Prepare** - profiling, cleaning, types, conformed keys (Power Query / Tableau Prep).\n**4. Model** - star schema, fact grain, conformed dimensions, marked date table, relationships.\n**5. Measures** - base measures, time intelligence, ratios with DIVIDE, no hard-coded filters.\n**6. Layout** - grid, header + global filters + refresh time, KPI band, trend band, detail band.\n**7. Interactivity** - slicers, drill-down, drill-through, cross-filter, tooltips, bookmarks.\n**8. Validate** - reconcile totals, edge cases (no data, negative), RLS test, performance profile.\n**9. Publish** - workspace permissions, gateway, scheduled/incremental refresh, sensitivity labels.\n**10. Govern** - certify dataset, subscriptions/alerts, usage metrics, definition sheet, owner.\n\n**Deliverables:** report file, certified dataset, definition sheet, owner, refresh schedule.\n\n**Diagram:** Refer to the creating dashboards and visual reports diagram."
      },
      {
        "question": "What are the common mistakes made while building BI dashboards and how can they be avoided?",
        "answer": "**Mistakes and fixes**\n1. **Flat single-table model** → star schema with dimensions.\n2. **Too many calculated columns** → measures and DAX instead.\n3. **Hard-coded filters** → dynamic slicers and context.\n4. **Missing date table** → marked dedicated date table for time intelligence.\n5. **Wrong grain / double counting** → declare grain, test with a known transaction.\n6. **Too many visuals per page** → 6-10 visuals, split into pages.\n7. **No validation** → reconcile every KPI with source totals.\n8. **No RLS test** → test with a restricted real user account.\n9. **Ignoring performance** → aggregates, incremental refresh, query folding, performance analyser.\n10. **No documentation** → definition sheet, lineage, owner, refresh timestamp.\n11. **No adoption plan** → training, subscriptions, feedback loop.\n\n**Root cause:** requirement brief skip karna. Fix: brief pehle, build baad mein.\n\n**Diagram:** Refer to the creating dashboards and visual reports diagram."
      },
      {
        "question": "Describe validation, publishing and governance activities after a dashboard is built.",
        "answer": "**Validation**\n- **Reconciliation:** KPI totals source/warehouse totals se match (tolerance 0).\n- **Grain test:** ek known transaction ka row count aur amount check.\n- **Edge cases:** no data, zero, negative, future dates, null dimension keys.\n- **RLS test:** restricted user account se login karke dekho sirf allowed rows dikhein.\n- **Performance:** performance analyser, target < 5 s page load, query timings.\n- **UAT:** business users ke saath sign-off on definitions aur numbers.\n\n**Publishing**\n- **Workspace** structure (dev/test/prod), permissions by role.\n- **Gateway** on-prem sources ke liye; **scheduled/incremental refresh**.\n- **Sensitivity labels**, export controls, mobile layout.\n- **Subscriptions and alerts** for cadence aur thresholds.\n\n**Governance**\n- **Certification / endorsement** of dataset so users trust it.\n- **Metric catalogue** with definitions and owners.\n- **Lineage and impact analysis** for changes.\n- **Usage metrics** monitoring adoption; unused reports retire karo.\n- **Change management:** versioning, deployment pipelines, review process.\n\n**Diagram:** Refer to the creating dashboards and visual reports diagram."
      }
    ]
  },
  {
    "id": "viz-decision-making",
    "number": "5.8",
    "title": "Role of Visualization in Business Decision Making",
    "subtitle": "Data se decision tak — speed, shared truth aur action",
    "icon": "target",
    "accent": "#ff8800",
    "englishDefinition": "Visualisation is the bridge between data and a decision, because decisions are made by humans under time pressure and visual encoding exploits the fastest channels of human perception - position, length and colour are processed pre-attentively, before conscious reading. Well-designed visuals therefore compress a table of thousands of rows into a pattern that can be judged at a glance, expose exceptions that would stay hidden in numbers, and create a shared reference so that a room full of people argues about the decision rather than about whose spreadsheet is right. In decision-making terms visualisation supports four jobs: monitoring (are we on track), diagnosis (why did it change), prioritisation (where is the biggest gap), and communication (getting alignment and action). Its contribution is measurable in cycle time (from weekly report to daily dashboard), in decision quality (fewer reversals, faster anomaly detection) and in accountability (one number, one definition, an owner). The limits matter equally - visuals can mislead through truncated axes, misleading area encodings, cherry-picked periods and correlation implied as causation, and visualisation supports judgement, it does not replace it.",
    "intro": "Visualisation **data aur decision ke beech ka bridge** hai, kyunki decision insaan leta hai — aur insaan **position, length, colour** ko sabse pehle process karta hai (pre-attentive). Isliye 10,000 rows ka table ek glance mein pattern ban jaata hai. Decision support ke **4 kaam**: **monitoring** (track par hain?), **diagnosis** (kyun badla?), **prioritisation** (sabse bada gap kahan?), **communication** (alignment + action). Value: cycle time kam, decision quality better, accountability (ek number, ek definition, ek owner).",
    "sections": [
      {
        "type": "definition",
        "title": "Visualisation ka decision-making mein role",
        "kicker": "Definition",
        "body": "**Role:** data ko aise encode karna ki human judgment fast, accurate aur shared ho — monitoring, diagnosis, prioritisation aur communication ke liye.",
        "body2": "Visualisation decision **leti nahi**, decision **enable** karti hai: pattern dikhati hai, exception ubhaarti hai, aur ek shared version of truth banati hai. Isliye \"chart banaya\" kaafi nahi — chart ko decision se jodna padta hai.",
        "chips": [
          "pre-attentive",
          "pattern",
          "exception",
          "shared truth",
          "action"
        ]
      },
      {
        "type": "cards",
        "title": "Chaar decision jobs",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "search",
            "title": "1. Monitoring",
            "body": "Kya hum track par hain? KPI vs target, trend, alert.",
            "color": "#00d4ff"
          },
          {
            "icon": "bulb",
            "title": "2. Diagnosis",
            "body": "Kyun badla? Drill-down, segment comparison, decomposition tree.",
            "color": "#00e676"
          },
          {
            "icon": "target",
            "title": "3. Prioritisation",
            "body": "Sabse bada gap kahan? Pareto, sorted bars, heatmap.",
            "color": "#ff8800"
          },
          {
            "icon": "users",
            "title": "4. Communication",
            "body": "Alignment aur action: simple chart + narrative + owner.",
            "color": "#aa00ff"
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Table vs chart — decision ke liye kya behtar",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Table",
          "Chart"
        ],
        "rows": [
          {
            "label": "Best for",
            "values": [
              "exact lookup, few rows",
              "pattern, comparison, trend"
            ]
          },
          {
            "label": "Perception",
            "values": [
              "slow, sequential reading",
              "pre-attentive, instant"
            ]
          },
          {
            "label": "Large data",
            "values": [
              "unreadable",
              "pattern visible"
            ]
          },
          {
            "label": "Exceptions",
            "values": [
              "hidden in rows",
              "jump out visually"
            ]
          },
          {
            "label": "Precision",
            "values": [
              "exact values",
              "approximate, trend"
            ]
          },
          {
            "label": "Decision use",
            "values": [
              "verify, audit",
              "monitor, compare, convince"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#00bcd4",
          "#ff8800"
        ]
      },
      {
        "type": "points",
        "title": "Business value kaise measure karein",
        "kicker": "Key Points",
        "points": [
          "**Cycle time** — weekly report se daily dashboard; decision latency ghata.",
          "**Decision quality** — fewer reversals, faster anomaly response, better forecast accuracy.",
          "**Accountability** — ek number, ek definition, ek owner; debate data par nahi decision par.",
          "**Adoption** — active users, views per week, self-service queries, alerts acted upon.",
          "**Cost avoided** — manual reporting hours, spreadsheet reconciliation effort."
        ]
      },
      {
        "type": "example",
        "title": "Decision-making example — stock-out control",
        "kicker": "Example",
        "body": "Pehle: har Monday 300 rows ka Excel stock report, 6 ghante manual analysis, stock-outs 3 hafte baad pakde jaate.\n\nAb: daily dashboard — \"Stock cover\" KPI (days), RAG status, SKU-level heatmap, aur 7-day cover par alert.\n\n**Decision flow:** amber alert → plant-wise drill-down → top 10 SKUs → reorder trigger.\n\n**Impact:** stock-out detection 3 hafte se 1 din, lost sales 4.2% se 1.1%, aur ek hi number par sab agree (definition sheet).\n\n**Lesson:** value dashboard ke pixels mein nahi, **decision latency** mein hai."
      },
      {
        "type": "diagram",
        "title": "Role of visualization in business decision making",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "vz-decision",
        "caption": "The four decision jobs of monitoring diagnosis prioritisation and communication feeding a decision and action loop, with the value measures of cycle time decision quality accountability and adoption, and the misleading practices to avoid"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Visualisation = **data aur decision ka bridge** (pre-attentive perception).",
          "Chaar jobs: **monitor, diagnose, prioritise, communicate**.",
          "Value = **cycle time**, decision quality, accountability, adoption.",
          "Chart vs table: pattern ke liye chart, exact lookup ke liye table.",
          "Misleading: truncated axis, cherry-picked period, correlation ≠ causation."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the role of data visualization in business decision making.",
        "answer": "**Role**\n1. **Fast perception** - position, length, colour pre-attentively process hote hain, isliye pattern turant dikhta hai.\n2. **Pattern and trend** - hazaaron rows ka trend ek glance mein.\n3. **Exception detection** - outliers aur anomalies visually jump karte hain.\n4. **Comparison** - target vs actual, period vs period, segment vs segment.\n5. **Shared truth** - ek chart, ek definition, ek number - debate data par nahi decision par.\n6. **Root cause** - drill-down aur decomposition se \"kyun\".\n7. **Communication** - management aur stakeholders ko alignment aur action.\n\n**Decision jobs:** monitoring, diagnosis, prioritisation, communication.\n\n**Measurable value:** decision cycle time, faster anomaly response, fewer reversals, adoption, manual effort saved.\n\n**Limits:** misleading axes, cherry-picked data, correlation≠causation; visualisation judgment ko support karti hai, replace nahi.\n\n**Diagram:** Refer to the role of visualization in business decision making diagram."
      },
      {
        "question": "How can visualization mislead? What safeguards should be applied?",
        "answer": "**Ways visualisation misleads**\n1. **Truncated y-axis** - chhote differences bade dikhte hain.\n2. **Inconsistent scales** - \"vs last year\" chart par alag baseline.\n3. **Area/volume for linear data** - bubbles se 2x value 4x dikhti hai.\n4. **Cherry-picked period** - favourable window chunna.\n5. **Dual axes** - do unrelated series ko correlate dikhana.\n6. **3D and perspective** - distortion.\n7. **Aggregation hiding** - Simpson’s paradox; total upar, segments neeche.\n8. **Colour misuse** - RAG rainbow, colour-blind unsafe.\n9. **Missing denominators** - percentages without base.\n10. **Correlation as causation.**\n\n**Safeguards**\n- Zero baseline for bar charts; clear axis labels and units.\n- Show sample size and period explicitly.\n- Use the same scale for comparisons; annotate breaks.\n- Provide detail/table for verification (drill-through).\n- Peer review of chart and metric definitions.\n- Accessibility check (contrast, colour-blind safe).\n- Governance: definition sheet aur certified datasets.\n\n**Diagram:** Refer to the role of visualization in business decision making diagram."
      },
      {
        "question": "Discuss how dashboards improve decision cycle time with a business example.",
        "answer": "**Problem (before):** manual Excel reporting, weekly cadence, 300 rows, 6 hours of analyst time, stock-outs detected after 3 weeks.\n\n**Dashboard solution:**\n1. **Daily refresh** - data warehouse se automated.\n2. **KPI band** - stock cover (days), fill rate, RAG status.\n3. **Drill path** - plant → SKU → reorder trigger.\n4. **Alerts** - cover < 7 days par email/Teams.\n5. **Shared definitions** - ek metric formula, owner documented.\n\n**Decision cycle time improvement**\n| Stage | Before | After |\n|---|---|---|\n| Data collection | 2 days | automated |\n| Analysis | 6 hours | instant |\n| Detection | 3 weeks | 1 day |\n| Action | next monthly meet | same day |\n\n**Business impact:** lost sales 4.2% → 1.1%, better forecast accuracy, analyst time analysis par (reporting par nahi).\n\n**Key factors:** automated refresh, right KPIs, drill path to action, alerts, trusted definitions.\n\n**Diagram:** Refer to the role of visualization in business decision making diagram."
      }
    ]
  },
  {
    "id": "ai-visualization-llm",
    "number": "5.9",
    "title": "AI-Assisted Data Visualization and Use of LLMs for Automated Dashboard Generation and Natural Language Reporting",
    "subtitle": "NL se chart — AI ka role, limits aur governance",
    "icon": "bulb",
    "accent": "#ff7ab2",
    "englishDefinition": "AI-assisted visualisation uses machine learning to recommend chart types, auto-generate narratives, detect anomalies and forecast, while large language models add a natural language interface on top: the user asks a question in plain language, the system maps it to the semantic model through text-to-query or text-to-DAX generation, runs the query, chooses a visual and explains the result. This makes reporting accessible to non-technical users, shortens dashboard build time through generated layouts and measures, and produces auto-written summaries for executives. The mechanism has three parts - a semantic layer that defines the available fields and metrics (the model is the guardrail that prevents hallucinated numbers), a retrieval and translation layer that converts the question into a valid query, and a presentation layer that selects and annotates a visual. The risks are equally concrete: hallucinated values and metrics, ambiguous questions, wrong joins and double counting, exposure of sensitive data through casual questions, bias in auto-selected charts, and an audit trail that is hard to reconstruct. Sound practice therefore requires the AI to query governed metrics rather than free-form SQL, to show its working with the generated query or definition, to require human review before publishing, and to log every prompt and result. AI accelerates the analyst; accountability for the number still sits with a named owner.",
    "intro": "AI-assisted visualisation = **ML se chart/narrative/anomaly recommendation** + **LLM se natural language interface**. User plain language mein poochta hai → system semantic model se query banata hai → visual chunta hai → explain karta hai. Guardrail: **AI governed metrics par query kare**, hallucinated numbers na de, aur **human review** ho. Bottom line: AI analyst ko **accelerate** karta hai, number ki accountability phir bhi **named owner** ki hai.",
    "sections": [
      {
        "type": "definition",
        "title": "AI-assisted visualisation kya hai",
        "kicker": "Definition",
        "body": "**Definition:** ML/LLM ka use visualisation ke har stage par — chart recommendation, narrative generation, anomaly detection, forecasting, aur natural language se query/report generation.",
        "body2": "Core idea: **natural language → semantic model → query → visual + explanation**. Model hi guardrail hai — AI ko free-form SQL nahi, **governed metrics** par query karni chahiye.",
        "chips": [
          "NL query",
          "text-to-visual",
          "auto narrative",
          "anomaly",
          "governed metrics"
        ]
      },
      {
        "type": "cards",
        "title": "AI ke use cases visualization mein",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "search",
            "title": "Chart recommendation",
            "body": "Data type + intent se best chart suggest (bar/line/scatter).",
            "color": "#00d4ff"
          },
          {
            "icon": "layers",
            "title": "Auto dashboard generation",
            "body": "Prompt se layout, KPI tiles aur measures generate.",
            "color": "#00e676"
          },
          {
            "icon": "bulb",
            "title": "NL reporting (Q&A)",
            "body": "\"Last quarter West ki sales?\" → query + chart + answer.",
            "color": "#ffd600"
          },
          {
            "icon": "warn",
            "title": "Anomaly detection",
            "body": "ML se unexpected spike/dip highlight aur explain.",
            "color": "#ff5252"
          },
          {
            "icon": "forecast",
            "title": "Forecasting",
            "body": "Time-series model se future values + confidence band.",
            "color": "#aa00ff"
          },
          {
            "icon": "users",
            "title": "Auto narrative",
            "body": "Exec summary: \"sales 8% up, driven by North\".",
            "color": "#00bcd4"
          },
          {
            "icon": "check",
            "title": "Data prep assist",
            "body": "Column type detection, cleaning suggestions, key matching.",
            "color": "#ff8800"
          },
          {
            "icon": "lock",
            "title": "Governance assist",
            "body": "Sensitive column detection, PII masking, usage insights.",
            "color": "#ff7ab2"
          }
        ]
      },
      {
        "type": "points",
        "title": "LLM pipeline (text se visual tak)",
        "kicker": "Key Points",
        "points": [
          "**1. Question:** \"Compare Q3 sales by region with last year\" (plain language).",
          "**2. Intent + entity extraction:** metric = sales, dimension = region, filter = Q3, comparison = YoY.",
          "**3. Model grounding:** semantic layer se valid measures/fields match (text-to-query / text-to-DAX).",
          "**4. Query:** generated query run hoti hai — **governed metric** par, free-form SQL nahi.",
          "**5. Visual selection:** chart type intent ke hisaab se (comparison → bar, trend → line).",
          "**6. Explanation:** natural language summary + assumptions + \"show query\" option.",
          "**7. Human review:** publish se pehle analyst verify kare."
        ]
      },
      {
        "type": "comparison",
        "title": "AI-assisted vs traditional BI",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Traditional BI",
          "AI-assisted BI"
        ],
        "rows": [
          {
            "label": "Who builds",
            "values": [
              "analyst / IT",
              "business user + AI assist"
            ]
          },
          {
            "label": "Interface",
            "values": [
              "drag and drop, DAX",
              "natural language + prompts"
            ]
          },
          {
            "label": "Speed to first cut",
            "values": [
              "hours to days",
              "minutes"
            ]
          },
          {
            "label": "Risk",
            "values": [
              "wrong model, backlog",
              "hallucination, ambiguity"
            ]
          },
          {
            "label": "Control",
            "values": [
              "explicit, auditable",
              "needs guardrails + logging"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "governed enterprise reporting",
              "exploration, exec summaries"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#00bcd4",
          "#ff7ab2"
        ]
      },
      {
        "type": "example",
        "title": "NL reporting ka example",
        "kicker": "Example",
        "body": "**Prompt:** \"Is mahine kaunse region target se peeche hain aur kyun?\"\n\n**System:**\n1. Metric = Achievement %, dimension = region, period = current month.\n2. Query governed model par chalti hai (certified dataset ka `Achievement %` measure).\n3. Result: West 88%, South 94%, North 103%.\n4. Visual: sorted bar with target line + West ka category breakdown.\n5. Narrative: \"West 12% behind; Snacks category 22% down, 3 SKUs stock-out.\"\n6. \"Show query\" link + definition of Achievement %.\n\n**Guardrails used:** sirf certified measures, no free-form SQL, PII fields excluded, prompt + query logged, analyst ne publish se pehle verify kiya.\n\n**Outcome:** region head ko 30 second mein answer, analyst ka 2 ghanta bacha."
      },
      {
        "type": "diagram",
        "title": "AI-assisted data visualization and LLMs",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "vz-ai",
        "caption": "The natural language to semantic model to query to visual pipeline for LLM based reporting, the AI use cases such as chart recommendation auto dashboards anomaly detection and forecasting, and the guardrails of grounded metrics human review and audit logging"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Pipeline: **NL question → semantic model → query → visual + explanation**.",
          "Guardrail: AI **governed metrics** par query kare, free-form SQL nahi.",
          "Risks: **hallucinated numbers**, ambiguity, wrong joins, PII exposure.",
          "Human review publish se pehle + prompt/query **logging** (audit).",
          "Exam line: \"AI analyst ko accelerate karta hai, accountability owner ki rehti hai.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain AI-assisted data visualization. Discuss the role of LLMs in automated dashboard generation and natural language reporting.",
        "answer": "**AI-assisted visualisation:** ML/LLM ka use visualisation ke stages par - chart recommendation, narrative generation, anomaly detection, forecasting, aur NL interface.\n\n**LLM ka role**\n1. **Natural language reporting (Q&A):** plain question → query + chart + explanation.\n2. **Automated dashboard generation:** prompt se layout, KPI tiles, measures aur visuals ka first draft.\n3. **Auto narrative:** exec summary aur insights ka text.\n4. **Chart recommendation:** intent aur data type se best visual.\n5. **Data prep assist:** column typing, cleaning suggestions, join keys.\n6. **Explanation:** \"ye spike kyun\" ka textual answer.\n\n**Pipeline:** question → intent/entity extraction → semantic model grounding (text-to-query / text-to-DAX) → query on governed metrics → visual selection → explanation → human review.\n\n**Benefits:** non-technical access, speed (minutes vs days), analyst time saved, exec-friendly summaries.\n\n**Risks:** hallucinated values, ambiguous questions, wrong joins/double counting, PII exposure, biased chart choice, poor auditability.\n\n**Guardrails:** grounded metrics only, show generated query, human review, logging, access control.\n\n**Diagram:** Refer to the AI-assisted data visualization diagram."
      },
      {
        "question": "What are the risks and challenges of using LLMs for reporting, and what guardrails are needed?",
        "answer": "**Risks**\n1. **Hallucination** - galat number ya metric invent karna.\n2. **Ambiguity** - \"best region\" ka matlab sales, growth ya margin?\n3. **Wrong joins / double counting** - grain ka galat samajh.\n4. **Prompt injection** - malicious text se behaviour badalna.\n5. **Data leakage / PII** - casual question se sensitive data exposure.\n6. **Bias** - auto chart choice ya narrative slant.\n7. **Auditability** - kaunsa query chali, reconstruct karna mushkil.\n8. **Over-trust** - user bina verify kiye number use karta hai.\n9. **Cost and latency** - per-query LLM calls.\n10. **Drift** - model ya data change se answers badalna.\n\n**Guardrails**\n- **Semantic layer grounding** - AI sirf certified measures/fields par query kare, free-form SQL nahi.\n- **Show your work** - generated query, definition, filters visible.\n- **Human review** before publishing any AI-generated dashboard or number.\n- **Row-level security** enforced at query time, PII fields excluded.\n- **Logging and audit** of prompt, query, result, user.\n- **Evaluation set** with known answers; regression testing.\n- **Confidence and refusal** - ambiguous question par clarifying question.\n\n**Diagram:** Refer to the AI-assisted data visualization diagram."
      },
      {
        "question": "Compare traditional BI with AI-assisted BI and discuss where each should be used.",
        "answer": "| Point | Traditional BI | AI-assisted BI |\n|---|---|---|\n| Builder | analyst / IT | business user + AI assist |\n| Interface | drag and drop, DAX/SQL | natural language, prompts |\n| Speed to first cut | hours to days | minutes |\n| Control | explicit, auditable | needs guardrails, logging |\n| Main risk | model errors, IT backlog | hallucination, ambiguity |\n| Strength | governed, repeatable, precise | exploration, exec summaries, access |\n| Trust | high (certified) | depends on grounding |\n\n**Where traditional BI wins**\n- Regulated, audited reporting (finance close, statutory).\n- High-precision KPI reporting with fixed definitions.\n- Complex models with strict performance needs.\n\n**Where AI-assisted wins**\n- Ad-hoc exploration by non-technical users.\n- Auto first drafts of dashboards to cut build time.\n- Executive narratives and summaries.\n- Anomaly explanation and \"why\" questions.\n\n**Best practice:** hybrid - governed semantic model as the single source, AI as the interface on top, human review for anything published.\n\n**Conclusion:** AI visualisation ki **speed aur accessibility** badhata hai, **accuracy ki accountability** nahi hataata.\n\n**Diagram:** Refer to the AI-assisted data visualization diagram."
      }
    ]
  }
];

export const biVisualizationUnit = {
  id: 'unit-5',
  number: '5',
  name: 'Data Visualization and BI Tools',
  topics: biVisualizationTopics,
};
