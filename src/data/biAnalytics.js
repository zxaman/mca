// Business Intelligence — Unit IV: Business Analytics and Temporal Data
// Topics 4.1 – 4.8, teacher-style Hinglish notes + exam Q&A.

export const biAnalyticsTopics = [
  {
    "id": "business-metrics-kpis",
    "number": "4.1",
    "title": "Business Metrics and Key Performance Indicators (KPIs)",
    "subtitle": "Number se business samajhna — metric, KPI aur inka farq",
    "icon": "chart",
    "accent": "#00d4ff",
    "englishDefinition": "A business metric is a quantifiable measure used to track and assess the status of a specific business process; it becomes a key performance indicator (KPI) when it is tied to a strategic objective, has a target and a time frame, and is used by management to judge success. Metrics simply describe activity (orders shipped, tickets closed, page views), whereas KPIs evaluate performance against a goal (order fill rate of 98 percent this quarter, customer churn below 5 percent annually). Good KPIs are specific, measurable, achievable, relevant and time-bound, are owned by an accountable person, and are reported at a defined frequency. Organisations arrange them in a hierarchy - strategic KPIs for the board, tactical KPIs for department heads, and operational metrics for teams - using the same definitions everywhere so that numbers reconcile. A KPI system therefore consists of the measure itself, its formula and data source, the target and thresholds, the reporting cadence, and the owner. Poorly chosen KPIs create the wrong incentives, so they must be few, balanced across financial and non-financial dimensions, and reviewed as the strategy changes.",
    "intro": "Har business roz kuch na kuch naapta hai. **Metric** = jo bhi number track ho raha hai (kitne orders aaye, kitne tickets band hue). **KPI** = wahi number jab wo kisi **strategic goal** se juda ho, uska **target** ho aur usse performance judge ho. Isliye har metric KPI nahi hota, par har KPI ek metric zaroor hota hai. Achha KPI **SMART** hota hai, uska **owner** hota hai, aur wo poore organisation mein **ek hi definition** se calculate hota hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Metric kya hai, KPI kya hai",
        "kicker": "Definition",
        "body": "**Business metric** ek quantifiable measure hai jo kisi process ki status batata hai — jaise \"is month 12,000 orders ship hue\". Ye **activity** describe karta hai, achha-bura nahi batata.",
        "body2": "**KPI** wo metric hai jo ek **strategic objective** se juda hai, jiska **target** aur **time frame** hai, aur jise management success judge karne ke liye use karta hai — jaise \"order fill rate is quarter 98% se upar\". KPI decision ka trigger hota hai, sirf information nahi.",
        "chips": [
          "metric",
          "KPI",
          "target",
          "owner",
          "frequency"
        ]
      },
      {
        "type": "comparison",
        "title": "Metric vs KPI — ek line ka farq",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Metric",
          "KPI"
        ],
        "rows": [
          {
            "label": "Purpose",
            "values": [
              "activity describe karna",
              "performance evaluate karna"
            ]
          },
          {
            "label": "Target",
            "values": [
              "zaroori nahi",
              "hamesha (target + threshold)"
            ]
          },
          {
            "label": "Scope",
            "values": [
              "kai metrics per process",
              "2-5 KPIs per function"
            ]
          },
          {
            "label": "Audience",
            "values": [
              "team, operations",
              "management, board"
            ]
          },
          {
            "label": "Example",
            "values": [
              "page views, tickets closed",
              "churn %, on-time delivery %"
            ]
          },
          {
            "label": "Decision link",
            "values": [
              "indirect",
              "direct - action trigger"
            ]
          }
        ]
      },
      {
        "type": "cards",
        "title": "KPIs ke types — kaun kis level ka KPI dekhta hai",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "chart",
            "title": "Strategic KPI",
            "body": "Board/CXO level — revenue growth, market share, EBITDA margin. Time frame: quarter to year.",
            "color": "#00d4ff"
          },
          {
            "icon": "dashboard",
            "title": "Tactical KPI",
            "body": "Department head level — conversion rate, inventory turns, cost per hire. Time frame: month.",
            "color": "#00e676"
          },
          {
            "icon": "cycle",
            "title": "Operational metric",
            "body": "Team level — daily orders, average handling time, stock-outs. Time frame: day to week.",
            "color": "#ff8800"
          },
          {
            "icon": "forecast",
            "title": "Leading indicator",
            "body": "Aage kya hoga batata hai — pipeline, website traffic, trial signups. Action pehle ho sakta hai.",
            "color": "#aa00ff"
          },
          {
            "icon": "timeline",
            "title": "Lagging indicator",
            "body": "Kya ho gaya batata hai — revenue, profit, churn. Sahi par late.",
            "color": "#ffd600"
          },
          {
            "icon": "half",
            "title": "Financial vs non-financial",
            "body": "Financial: revenue, cost, margin. Non-financial: satisfaction, quality, safety, engagement.",
            "color": "#00bcd4"
          }
        ]
      },
      {
        "type": "points",
        "title": "Achha KPI banane ke criteria (SMART+)",
        "kicker": "Key Points",
        "points": [
          "**Specific** — ek hi cheez naape, sab kuch nahi.",
          "**Measurable** — data source aur formula exact ho.",
          "**Achievable** — target realistic ho, na aasan na impossible.",
          "**Relevant** — strategy se seedha juda ho.",
          "**Time-bound** — daily / weekly / monthly cadence fix.",
          "**Owned** — ek naam accountable ho, team nahi.",
          "**Actionable** — KPI red ho to koi action define ho.",
          "**Comparable** — trend, target aur benchmark teeno ke saath dikhe."
        ]
      },
      {
        "type": "example",
        "title": "Retail company ke real KPIs",
        "kicker": "Example",
        "body": "Ek grocery retail chain ke 5 KPIs: (1) **Sales per square foot** - target Rs 2,200/month; (2) **Gross margin %** - target 22%; (3) **Inventory turns** - target 12 per year; (4) **Stock-out %** on top 200 SKUs - under 2%; (5) **Customer NPS** - above 45.\n\nDhyan do: \"kitne customers aaye\" ek metric hai, par \"conversion rate 18% (target 20%)\" KPI hai - kyunki target, time frame aur owner (store ops head) defined hain. Sab KPIs ek hi **date dimension** aur ek hi **revenue definition** se bante hain, warna do dashboards do number dikhayenge."
      },
      {
        "type": "diagram",
        "title": "Business metrics aur KPIs",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "td-metrics",
        "caption": "Metric pyramid from raw operational metrics up to board level KPIs, with the SMART criteria, leading and lagging indicators, and the KPI definition sheet containing formula, target, owner, cadence and thresholds"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Metric** = number; **KPI** = number + target + owner + decision.",
          "**SMART** + owned + actionable + comparable.",
          "Hierarchy: operational → tactical → strategic.",
          "**Leading** = future signal, **lagging** = past result.",
          "Exam line: \"KPIs few, balanced aur ek definition par based hone chahiye.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define business metrics and KPIs. Explain the difference between them with examples.",
        "answer": "**Business metric:** ek quantifiable measure jo kisi business process ki status track karta hai. Example: is month 12,000 orders ship hue, website par 4 lakh visits aaye.\n\n**KPI (Key Performance Indicator):** wo metric jo kisi **strategic objective** se juda ho, jiska **target**, **time frame** aur **owner** ho, aur jo performance evaluate karne ke liye use ho. Example: order fill rate 98% (target 98%, owner supply chain head, monthly).\n\n**Difference:**\n\n| Point | Metric | KPI |\n|---|---|---|\n| Purpose | activity describe karna | performance evaluate karna |\n| Target | optional | mandatory |\n| Count | kai ho sakte hain | 2-5 per function |\n| Audience | team/operations | management/board |\n| Action | indirect | direct trigger |\n\n**Example to remember:** \"customers kitne aaye\" = metric. \"Conversion rate 18% vs target 20%\" = KPI.\n\n**Why it matters:** agar har metric ko KPI bana diya jaye to dashboard noise ban jaata hai aur focus khatam ho jaata hai.\n\n**Diagram:** Refer to the business metrics and KPIs diagram."
      },
      {
        "question": "What are the characteristics of a good KPI? Explain the types of KPIs with examples.",
        "answer": "**Characteristics of a good KPI (SMART+):**\n\n1. **Specific** - ek clear process naape.\n2. **Measurable** - formula aur data source exact (single definition).\n3. **Achievable** - target realistic.\n4. **Relevant** - strategy se juda.\n5. **Time-bound** - daily/weekly/monthly cadence.\n6. **Owned** - ek accountable person.\n7. **Actionable** - red hone par defined action.\n8. **Comparable** - trend, target aur benchmark ke saath.\n\n**Types:**\n\n- **Strategic** (CXO/board): revenue growth, EBITDA margin, market share.\n- **Tactical** (department): conversion rate, inventory turns, cost per hire.\n- **Operational** (team): orders per day, average handling time, stock-outs.\n- **Leading indicators:** pipeline value, trial signups, website traffic - aage ka signal.\n- **Lagging indicators:** revenue, profit, churn - result, par late.\n- **Financial:** revenue, cost, margin, ROI.\n- **Non-financial:** NPS, quality defects, safety incidents, employee engagement.\n\n**Balance:** leading + lagging aur financial + non-financial dono rakho, warna short-term gaming hota hai.\n\n**Diagram:** Refer to the business metrics and KPIs diagram."
      },
      {
        "question": "How are KPIs designed, documented and cascaded in an organisation? Discuss with examples.",
        "answer": "**Design process**\n1. **Objective se shuru** - strategic goal likho (e.g. \"retention improve karna\").\n2. **Measure choose karo** - jo behaviour drive kare (churn %, repeat purchase rate).\n3. **Formula define karo** - numerator, denominator, filters, date basis.\n4. **Target + thresholds** - green/amber/red bands.\n5. **Owner assign** - ek naam, accountability.\n6. **Cadence + review** - weekly ops review, monthly business review.\n\n**Documentation (KPI definition sheet):**\n- Name, business question, formula, data source table/column,\n- grain and filters, target and thresholds, owner, refresh frequency,\n- known exclusions (returns, internal orders), version and change log.\n\n**Cascading**\n- Company KPI: revenue growth 15%\n  - Sales KPI: new customer acquisition 20,000\n  - Marketing KPI: qualified leads 60,000, CAC under Rs 900\n  - Support KPI: first-response time under 4 hours (retention driver)\n\n**Governance:** shared metric layer in the warehouse (one number per KPI), quarterly KPI review, retire KPIs jo behaviour nahi badalte.\n\n**Anti-pattern:** har team apna \"revenue\" define kare - isse trust khatam ho jaata hai.\n\n**Diagram:** Refer to the business metrics and KPIs diagram."
      }
    ]
  },
  {
    "id": "kpi-decision-making",
    "number": "4.2",
    "title": "Importance of KPIs in Organizational Decision Making",
    "subtitle": "KPI se decision tak — measurement culture kaise banti hai",
    "icon": "bulb",
    "accent": "#00e676",
    "englishDefinition": "KPIs matter because they convert strategy into measurable commitments and convert measurement into decisions: they align every function to the same objectives, make accountability explicit through ownership and targets, surface problems early through thresholds and alerts, and provide an objective basis for prioritising investments, budgets and corrective action. In a decision loop the KPI is measured, compared with target and trend, diagnosed for cause, acted upon, and then re-measured - closing the loop is what separates a performance culture from a reporting culture. KPIs also support resource allocation and trade-off decisions, incentive and appraisal design, risk monitoring, and communication with investors and regulators. The risks are equally important: tunnel vision when a single KPI dominates, gaming and manipulation of the metric, measure proliferation that dilutes focus, lagging indicators that arrive too late to act on, and targets that are set arbitrarily and destroy trust. Good practice therefore uses a balanced set of leading and lagging KPIs, ties them to the decision rights of the person accountable, reviews them at a defined cadence, and retires measures that no longer drive behaviour.",
    "intro": "KPI ka matlab sirf report dikhana nahi — **KPI decision ka trigger** hai. Achhe KPI organisation mein teen kaam karte hain: **align** (sab ek hi goal ki taraf), **accountable** (kaun zimmedar hai clear), aur **early warning** (problem pehle dikh jaaye). Par galat KPI se log sirf number theek karte hain — isliye balanced set aur review cycle zaroori hai.",
    "sections": [
      {
        "type": "definition",
        "title": "KPI decision making mein kya badalte hain",
        "kicker": "Definition",
        "body": "**Alignment:** har department ka KPI company objective se juda hota hai, isliye sales, ops aur finance ek hi direction mein chalte hain.",
        "body2": "**Accountability:** owner + target hone se \"kaun kya karega\" clear ho jaata hai, aur review meeting mein discussion number par hoti hai, opinion par nahi. **Early warning:** threshold breach hone par corrective action tab hota hai jab problem chhoti hai.",
        "chips": [
          "alignment",
          "accountability",
          "early warning",
          "prioritisation"
        ]
      },
      {
        "type": "points",
        "title": "KPIs ke 6 bade fayde",
        "kicker": "Key Points",
        "points": [
          "**Strategy ko measurable banana** — \"customer first\" jaisa slogan churn % aur NPS mein badal jaata hai.",
          "**Decision speed** — dashboard dekh kar turant pata chalta hai kahan action chahiye.",
          "**Resource allocation** — budget wahan jaata hai jahan KPI gap hai.",
          "**Performance appraisal** — incentive aur review objective data par based hote hain.",
          "**Risk monitoring** — fraud, default, downtime jaise risk KPIs alert dete hain.",
          "**Communication** — investors, board aur regulators ko ek consistent story milti hai."
        ]
      },
      {
        "type": "cards",
        "title": "Decision loop — KPI se action tak 5 step",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "search",
            "title": "1. Measure",
            "body": "KPI dashboard se current value, target aur trend dekho.",
            "color": "#00d4ff"
          },
          {
            "icon": "half",
            "title": "2. Compare",
            "body": "Target, last period aur benchmark se gap nikalo.",
            "color": "#ffd600"
          },
          {
            "icon": "bulb",
            "title": "3. Diagnose",
            "body": "Drill-down se root cause dhoondo - dimension wise.",
            "color": "#aa00ff"
          },
          {
            "icon": "zap",
            "title": "4. Act",
            "body": "Owner action leta hai - pricing, stock, staffing, campaign.",
            "color": "#ff8800"
          },
          {
            "icon": "cycle",
            "title": "5. Re-measure",
            "body": "Agla cycle dekhta hai ki action ka asar hua ya nahi.",
            "color": "#00e676"
          },
          {
            "icon": "warn",
            "title": "Loop band na ho to",
            "body": "Reporting culture ban jaati hai - report banti hai, decision nahi hota.",
            "color": "#ff5252"
          }
        ]
      },
      {
        "type": "comparison",
        "title": "KPI-driven organisation vs reporting-only organisation",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "KPI-driven",
          "Reporting-only"
        ],
        "rows": [
          {
            "label": "Focus",
            "values": [
              "few KPIs, clear owners",
              "sau reports, koi owner nahi"
            ]
          },
          {
            "label": "Meeting",
            "values": [
              "number par discussion + action",
              "report present karna"
            ]
          },
          {
            "label": "Target",
            "values": [
              "defined thresholds",
              "target hi nahi"
            ]
          },
          {
            "label": "Cadence",
            "values": [
              "weekly / monthly review",
              "ad-hoc"
            ]
          },
          {
            "label": "Outcome",
            "values": [
              "behaviour badalta hai",
              "paperwork badhta hai"
            ]
          }
        ]
      },
      {
        "type": "example",
        "title": "Ek telecom company ka KPI review",
        "kicker": "Example",
        "body": "Monthly business review mein 4 KPIs: **ARPU**, **churn %**, **network downtime minutes**, **first-call resolution %**.\n\nChurn 5.8% (target 5%) - amber. Drill-down: prepaid circle-B mein churn 9%. Diagnosis: pichhle month network downtime 40 min/day tha. Action: tower capacity upgrade + retention offer. Agle quarter churn 5.1%, downtime 8 min/day.\n\nYahan KPI ne **kya** bataya, drill-down ne **kyun** bataya, aur owner ne **kya karna hai** decide kiya - teeno mile to hi decision making hui."
      },
      {
        "type": "diagram",
        "title": "KPIs aur organizational decision making",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "td-kpi-decision",
        "caption": "Strategy at the top feeding department KPIs, the measure - compare - diagnose - act - re-measure decision loop, the benefits of KPI alignment, and the failure modes of tunnel vision, gaming and measure proliferation"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "KPIs = **align + accountable + early warning**.",
          "Decision loop: measure → compare → diagnose → act → re-measure.",
          "Fayde: speed, prioritisation, appraisal, risk, communication.",
          "Khatra: tunnel vision, gaming, too many measures, arbitrary targets.",
          "Exam line: \"KPI ka kaam report banana nahi, decision trigger karna hai.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the importance of KPIs in organizational decision making.",
        "answer": "**1. Strategy ko measurable banana** - abstract goal (customer first, operational excellence) KPI se concrete ban jaata hai: churn %, on-time delivery %.\n\n**2. Alignment** - har function ka KPI company objective se juda hota hai, isliye sales, ops aur finance ek direction mein chalte hain.\n\n**3. Accountability** - owner + target hone se zimmedari clear hoti hai; review number par hoti hai, opinion par nahi.\n\n**4. Early warning** - threshold breach par corrective action tab hota hai jab problem chhoti hai (stock-out %, downtime minutes).\n\n**5. Resource allocation** - budget aur manpower wahan jaate hain jahan KPI gap hai.\n\n**6. Performance appraisal** - incentive aur promotion objective data par based hote hain.\n\n**7. Risk monitoring** - fraud rate, default %, safety incidents.\n\n**8. Communication** - board, investors aur regulator ko consistent story.\n\n**Decision loop:** measure → compare with target/trend → diagnose root cause (drill-down) → act → re-measure. Loop band ho jaye to \"reporting culture\" ban jaati hai jahan report banti hai par decision nahi hota.\n\n**Diagram:** Refer to the KPIs and organizational decision making diagram."
      },
      {
        "question": "Discuss the benefits and risks of using KPIs for performance management.",
        "answer": "**Benefits**\n- Focus: few measures, clear priorities.\n- Objectivity: data-based review, less politics.\n- Speed: problem early dikhta hai.\n- Alignment: departments ek hi goal par.\n- Accountability: named owner per KPI.\n- Learning: action ka asar agle cycle mein dikhta hai.\n\n**Risks / limitations**\n1. **Tunnel vision** - ek KPI dominate kare to baaki cheezein ignore (sirf cost cut, quality gira).\n2. **Gaming** - metric theek karne ke liye galat behaviour (tickets jaldi \"close\" karna).\n3. **Measure proliferation** - 60 KPIs = koi focus nahi.\n4. **Lagging-only** - churn ka pata tab chalta hai jab customer ja chuka.\n5. **Arbitrary targets** - bina baseline ke target se demotivation.\n6. **Data quality** - galat number se galat decision.\n7. **Short-termism** - quarterly KPI se long-term investment kat jaata hai.\n\n**Mitigation:** balanced scorecard (financial + customer + process + learning), leading + lagging mix, KPI governance with one definition, periodic review and retirement of KPIs, aur metrics ke saath qualitative context.\n\n**Diagram:** Refer to the KPIs and organizational decision making diagram."
      },
      {
        "question": "Explain the KPI-based decision making cycle with a suitable example.",
        "answer": "**Cycle (5 steps)**\n1. **Measure** - dashboard current value dikhata hai (churn 5.8%, target 5%).\n2. **Compare** - target, last period, benchmark aur trend se gap.\n3. **Diagnose** - drill-down dimensions (circle, plan, tenure) se root cause.\n4. **Act** - owner corrective action leta hai.\n5. **Re-measure** - agle cycle mein improvement verify.\n\n**Example (telecom)**\n- KPI: monthly churn % (target 5%).\n- Measure: 5.8% - amber.\n- Compare: last month 5.2%, industry 5.5%.\n- Diagnose: prepaid circle-B 9%; network downtime 40 min/day.\n- Act: tower capacity upgrade + retention offer for at-risk segment.\n- Re-measure: churn 5.1%, downtime 8 min/day.\n\n**Enablers:** single KPI definition layer, automated refresh, alerts on thresholds, owner assigned, aur review cadence fixed.\n\n**Conclusion:** KPI ka value uske number mein nahi, uske triggers mein hai - jo action aur re-measurement se band loop banta hai.\n\n**Diagram:** Refer to the KPIs and organizational decision making diagram."
      }
    ]
  },
  {
    "id": "performance-measurement-reporting",
    "number": "4.3",
    "title": "Performance Measurement and Analytical Reporting",
    "subtitle": "Balanced scorecard, reporting types aur dashboard design",
    "icon": "dashboard",
    "accent": "#ff8800",
    "englishDefinition": "Performance measurement is the systematic process of defining measures, collecting data, comparing actual results with targets and standards, and communicating the outcome so that management can act. Analytical reporting is the delivery mechanism: it turns measured data into operational, tactical and strategic reports, dashboards, scorecards and exception alerts. Frameworks give structure - the balanced scorecard balances four perspectives (financial, customer, internal process, learning and growth), the performance pyramid links objectives down the hierarchy, and the performance prism adds stakeholder satisfaction and contribution. Reporting is layered by audience and cadence: operational reports are detailed and daily, tactical reports are aggregated and weekly or monthly, strategic reports are summarised and quarterly. Good reports share five traits - relevance to a decision, a single trusted definition, comparison against target and trend, visual hierarchy that highlights exceptions, and drill-down to detail. Variance analysis is the workhorse: it decomposes the gap between actual and plan into volume, price and mix effects so that the corrective action is specific rather than generic.",
    "intro": "Performance measurement = **measure → compare with target → report → act**. Analytical reporting usi ka delivery part hai. Framework ke liye **balanced scorecard** (financial, customer, process, learning) yaad rakho. Reports teen layer mein aate hain: **operational** (daily detail), **tactical** (weekly/monthly aggregate), **strategic** (quarterly summary). Achhi report ka test: **kya isse koi decision nikalta hai?**",
    "sections": [
      {
        "type": "definition",
        "title": "Performance measurement kya hai",
        "kicker": "Definition",
        "body": "**Performance measurement** wo process hai jisme organisation measures define karta hai, data collect karta hai, **actual vs target/standard** compare karta hai, aur result ko communicate karta hai taaki action liya ja sake.",
        "body2": "**Analytical reporting** usi ka delivery layer hai - scores, dashboards, variance reports, exception alerts. Measurement ke bina reporting khaali table hai; reporting ke bina measurement ka koi asar nahi.",
        "chips": [
          "measures",
          "actual vs target",
          "variance",
          "reporting",
          "action"
        ]
      },
      {
        "type": "cards",
        "title": "Balanced Scorecard ke 4 perspectives",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "chart",
            "title": "Financial",
            "body": "Revenue growth, margin, ROI, cost ratio — \"shareholders ko kaisa dikhte hain?\"",
            "color": "#00d4ff"
          },
          {
            "icon": "executive",
            "title": "Customer",
            "body": "NPS, churn, satisfaction, on-time delivery — \"customers kaisa dekhte hain?\"",
            "color": "#00e676"
          },
          {
            "icon": "cycle",
            "title": "Internal process",
            "body": "Cycle time, defect rate, fill rate, downtime — \"kaunse process improve karne hain?\"",
            "color": "#ff8800"
          },
          {
            "icon": "bulb",
            "title": "Learning & growth",
            "body": "Training hours, attrition, engagement, innovation — \"kya hum improve kar sakte hain?\"",
            "color": "#aa00ff"
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Operational, tactical aur strategic reporting",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Operational",
          "Tactical",
          "Strategic"
        ],
        "rows": [
          {
            "label": "Audience",
            "values": [
              "team / supervisor",
              "department head",
              "CXO / board"
            ]
          },
          {
            "label": "Cadence",
            "values": [
              "daily / real-time",
              "weekly / monthly",
              "quarterly / annual"
            ]
          },
          {
            "label": "Detail",
            "values": [
              "row level",
              "aggregated",
              "summarised + trend"
            ]
          },
          {
            "label": "Purpose",
            "values": [
              "run today",
              "fix this month",
              "steer the year"
            ]
          },
          {
            "label": "Example",
            "values": [
              "stock-out list",
              "category margin report",
              "scorecard, forecast"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#00bcd4",
          "#ff8800",
          "#c4ff00"
        ]
      },
      {
        "type": "points",
        "title": "Achhi report ke 6 gun (design rules)",
        "kicker": "Key Points",
        "points": [
          "**Decision-first** — report ke shuru mein \"so what\" likho, number baad mein.",
          "**Ek definition** — sab reports ek hi metric layer se aayein.",
          "**Comparison** — target, last period, benchmark teeno dikhein.",
          "**Exception highlight** — red/amber/green se aankh wahi jaye.",
          "**Visual hierarchy** — KPI tile, phir trend, phir table, phir detail.",
          "**Drill-down** — aggregate se row level tak jaane ka rasta ho."
        ]
      },
      {
        "type": "example",
        "title": "Variance analysis — actual vs budget",
        "kicker": "Example",
        "body": "Monthly sales actual **Rs 92 lakh** vs budget **Rs 1 crore** → variance **-8 lakh (unfavourable)**.\n\nDecompose karo:\n- **Volume:** 4,600 units vs plan 5,000 = -400 units x Rs 200 = -8 lakh.\n- **Price:** average price plan ke barabar = 0.\n- **Mix:** premium SKU share 22% vs 25% = additional -1.2 lakh, par discount kam hone se +1.2 lakh offset.\n\nIsliye action **volume** par hai - stock-out 12 SKUs mein tha, supply fix karo. Agar sirf \"sales kam hai\" likhte to action generic rehta.\n\n**Reporting output:** one-page variance report + drill-down by region + owner with action date."
      },
      {
        "type": "diagram",
        "title": "Performance measurement aur analytical reporting",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "td-performance",
        "caption": "Balanced scorecard with its four perspectives, the three reporting layers from operational to strategic, the anatomy of a good analytical report with KPI tiles trend and drill-down, and variance decomposition into volume price and mix"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Performance measurement = **measure + compare + communicate + act**.",
          "**Balanced scorecard**: financial, customer, process, learning.",
          "Reporting layers: operational (daily), tactical (monthly), strategic (quarterly).",
          "Report test: decision nikalta hai ya nahi.",
          "Variance = **volume + price + mix** effect."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is performance measurement? Explain the balanced scorecard approach with its perspectives.",
        "answer": "**Performance measurement:** systematic process jisme measures define kiye jaate hain, data collect hota hai, **actual ko target/standard** se compare kiya jaata hai, aur result communicate karke corrective action liya jaata hai.\n\n**Balanced scorecard (Kaplan & Norton):** performance ko chaar perspectives se balance karta hai, taaki sirf financial numbers par focus na ho.\n\n1. **Financial** - revenue growth, margin, ROI, cost ratio.\n2. **Customer** - NPS, churn, satisfaction, on-time delivery.\n3. **Internal business process** - cycle time, defect rate, fill rate, downtime.\n4. **Learning and growth** - training hours, attrition, engagement, innovation.\n\n**Kaise kaam karta hai:** har perspective mein objective → measure → target → initiative. Learning se process improve hota hai, process se customer khush hota hai, customer se financial result aata hai - cause-and-effect chain.\n\n**Fayde:** balance (short vs long term), strategy ko measurable banana, leading + lagging mix.\n\n**Limitation:** measures design karna mehnat ka kaam hai; galat measures se galat behaviour.\n\n**Diagram:** Refer to the performance measurement and analytical reporting diagram."
      },
      {
        "question": "Explain the types of analytical reporting in a BI system. What makes a report effective?",
        "answer": "**Types by audience/cadence:**\n\n| Layer | Audience | Cadence | Example |\n|---|---|---|---|\n| Operational | team/supervisor | daily, real-time | stock-out list, dispatch status |\n| Tactical | department head | weekly/monthly | category margin, SLA report |\n| Strategic | CXO/board | quarterly/annual | scorecard, forecast, market share |\n\n**Types by format:**\n- **Dashboard** - KPIs ek screen par, glanceable.\n- **Scorecard** - KPI vs target, RAG status.\n- **Variance report** - actual vs budget/forecast with explanation.\n- **Exception / alert report** - sirf outliers.\n- **Ad-hoc / self-service** - analyst khud banata hai.\n- **Regulatory / statutory** - fixed format, audit trail.\n\n**Effective report ke gun:**\n1. **Decision-first layout** - insight upar, detail neeche.\n2. **Single definition** - ek metric layer.\n3. **Comparison** - target, previous period, benchmark.\n4. **Exception highlighting** - RAG colours.\n5. **Drill-down** - aggregate se row level.\n6. **Right grain** - audience jitna detail chahiye utna hi.\n7. **Performance** - 5 second mein load.\n8. **Trust** - refresh time aur data source likha ho.\n\n**Diagram:** Refer to the performance measurement and analytical reporting diagram."
      },
      {
        "question": "What is variance analysis? Explain volume, price and mix variance with an example.",
        "answer": "**Variance analysis:** actual performance aur plan/standard ke beech ka gap quantify karna, aur us gap ko **kaaranon mein todna** taaki action specific ho.\n\n**Components (sales variance):**\n1. **Volume variance** = (actual qty - plan qty) x standard price.\n2. **Price variance** = (actual price - standard price) x actual qty.\n3. **Mix variance** = product mix change ka effect (premium vs economy share).\n\n**Example:** plan 5,000 units x Rs 200 = Rs 10 lakh; actual 4,600 units x Rs 200 = Rs 9.2 lakh.\n- Volume variance = -400 x 200 = **-Rs 80,000**.\n- Price variance = 0 (price same).\n- Mix variance = premium share 25% se 22% gira = additional **-Rs 12,000**, discount kam hone se +12,000 offset.\n- Total = **-Rs 80,000 (8% unfavourable)**.\n\n**Insight:** problem volume ki hai (stock-out 12 SKUs), price ki nahi. Isliye action supply chain mein hoga.\n\n**Reporting:** variance report + drill-down by region + owner + action date. Isi se variance analysis decision tool ban jaata hai.\n\n**Diagram:** Refer to the performance measurement and analytical reporting diagram."
      }
    ]
  },
  {
    "id": "temporal-data-intro",
    "number": "4.4",
    "title": "Introduction to Temporal Data",
    "subtitle": "Jo data samay ke saath badalta hai — usse sambhalna kaise",
    "icon": "clock",
    "accent": "#aa00ff",
    "englishDefinition": "Temporal data is data whose correctness is tied to time: every fact or attribute value is associated with the period during which it was true. Ordinary data answers \"what is the value now\", while temporal data answers \"what was the value on a given date, and when did we believe it\". A data warehouse is inherently temporal because it keeps history, but most warehouses keep only one notion of time - the business event date recorded in the fact table - and lose the second notion, the date on which the record was loaded or corrected. Temporal databases formalise this with two independent time dimensions, valid time and transaction time, and classify the result as valid-time, transaction-time or bitemporal data. Temporal data raises practical questions for BI: which timestamp do we filter on, how do late-arriving and corrected records get handled, how do slowly changing dimension attributes align with facts, how long is history retained, and how do time zones affect the day boundary. Handling it correctly is what makes \"as of last quarter, as we knew it then\" a reproducible answer instead of an argument.",
    "intro": "**Temporal data** = jiski sachchai samay se judi ho. Simple data \"abhi kya hai\" batata hai; temporal data \"us din kya tha, aur humein kab pata chala\" batata hai. Do tarah ke time hote hain — **valid time** (business mein kab sach tha) aur **transaction time** (database mein kab record hua). In dono ke combination se **valid-time, transaction-time aur bitemporal** data banta hai. BI mein ye isliye important hai ki late data aur corrections ko sahi period mein report karna padta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Temporal data kya hai",
        "kicker": "Definition",
        "body": "**Temporal data** wo data hai jisme har value ke saath ek **time period ya timestamp** juda hota hai jiske liye wo value sach thi — jaise \"price Rs 100 tha 1 Jan se 31 Mar tak\".",
        "body2": "Non-temporal data sirf current value rakhta hai; usse pata nahi chalta ki March mein price kya tha, ya correction kab aaya. Warehouse ka poora kaam hi **history** hai, isliye temporal handling BI ka core skill hai.",
        "chips": [
          "time period",
          "history",
          "valid time",
          "transaction time",
          "bitemporal"
        ]
      },
      {
        "type": "comparison",
        "title": "Non-temporal, valid-time, transaction-time aur bitemporal data",
        "kicker": "Comparison",
        "columns": [
          "Type",
          "Time dimension",
          "Example question"
        ],
        "rows": [
          {
            "label": "Snapshot (non-temporal)",
            "values": [
              "koi nahi - sirf current",
              "\"abhi price kya hai?\""
            ]
          },
          {
            "label": "Valid-time",
            "values": [
              "business time only",
              "\"March mein price kya tha?\""
            ]
          },
          {
            "label": "Transaction-time",
            "values": [
              "database/system time only",
              "\"March mein humein kya pata tha?\""
            ]
          },
          {
            "label": "Bitemporal",
            "values": [
              "dono time",
              "\"March ke liye ab kya sahi maana jaata hai?\""
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#00d4ff",
          "#ffd600",
          "#c4ff00"
        ]
      },
      {
        "type": "points",
        "title": "Time BI mein kaun kaun se roop mein aata hai",
        "kicker": "Key Points",
        "points": [
          "**Event time / business time** — sale kab hui, order kab place hua.",
          "**Valid time** — attribute ya fact kis period ke liye sach hai (price validity).",
          "**Transaction time** — record kab insert/update hua (load timestamp).",
          "**Processing time** — ETL kab chala.",
          "**Reporting time** — report kis cutoff par bani.",
          "**Time zone** — UTC vs local; din ka boundary badal jaata hai.",
          "**Grain** — second, day, month, fiscal period."
        ]
      },
      {
        "type": "example",
        "title": "Late-arriving aur corrected data ka problem",
        "kicker": "Example",
        "body": "Ek order 28 March ko place hua par warehouse mein 3 April ko load hua (late-arriving fact). Agar sirf load date se report banao to March ka revenue kam dikhega aur April zyada.\n\nDoosra case: 10 March ko pata chala ki 1 March ka price galat tha; correction 10 March ko aaya. Business ke liye March ka price Rs 100 tha (valid time), par system ko 10 March se pata hai (transaction time).\n\nIsliye BI mein likhna padta hai: \"1 March ko valid price\" ya \"10 March tak jo hum jaante the\" — dono alag sawaal hain aur dono ke answer alag ho sakte hain."
      },
      {
        "type": "points",
        "title": "Temporal data ke challenges",
        "kicker": "Key Points",
        "points": [
          "**Late-arriving data** — period restrict karna, load date nahi.",
          "**Corrections / restatement** — pehle report kiya number badalna padta hai; audit trail chahiye.",
          "**Slowly changing dimensions** — attribute ka version kaunse fact par lagega.",
          "**Time zone aur DST** — same din do baar ya skip.",
          "**Retention** — kitna history rakhein, kya archive karein.",
          "**Fiscal vs calendar** — financial year April se shuru.",
          "**Duplicate aur idempotency** — re-run se double counting na ho."
        ]
      },
      {
        "type": "diagram",
        "title": "Temporal data ka introduction",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "td-temporal",
        "caption": "A timeline showing event time, valid time and transaction time for the same business fact, the four data classes from snapshot to bitemporal, and the practical problems of late-arriving data, corrections, time zones and retention in a BI warehouse"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Temporal data = value + **jiske liye sach thi wo period**.",
          "**Valid time** = business, **transaction time** = system.",
          "Dono mile to **bitemporal**.",
          "BI problem: late data, correction, SCD, time zone, retention.",
          "Exam line: \"valid time business se aata hai, transaction time database se.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is temporal data? Explain its types with examples.",
        "answer": "**Temporal data:** wo data jisme har value ke saath ek **time period ya timestamp** juda hota hai jiske liye wo value sach thi. Normal data current value rakhta hai; temporal data history rakhta hai.\n\n**Types:**\n\n1. **Snapshot / non-temporal** - sirf current state. Example: aaj ka price list. Question: \"abhi price kya hai?\"\n2. **Valid-time data** - business ke hisaab se kab sach tha. Example: price Rs 100 from 1 Jan to 31 Mar, Rs 110 from 1 Apr. Question: \"March mein price kya tha?\"\n3. **Transaction-time data** - system mein kab record hua. Example: price change 5 Apr ko enter hua, effective 1 Apr. Question: \"March ke end mein humein kya pata tha?\"\n4. **Bitemporal data** - dono time ek saath. Question: \"1 March ke liye aaj kya sahi maana jaata hai?\"\n\n**BI examples:** sales fact (event time), dim_product (valid time via SCD type 2), load/audit columns (transaction time).\n\n**Why needed:** late-arriving data, corrections, audit, period-end reporting aur reproducibility ke liye.\n\n**Diagram:** Refer to the temporal data introduction diagram."
      },
      {
        "question": "Discuss the challenges of handling temporal data in a BI system.",
        "answer": "**1. Late-arriving facts** - order March ka, load April mein. Agar load date se filter kiya to galat period.\n**2. Corrections and restatement** - pehle report kiya number badalna padta hai; audit trail aur version chahiye.\n**3. Slowly changing dimensions** - attribute ka kaunsa version us fact par lagega (effective dating).\n**4. Time zone and DST** - UTC vs local; ek din 23 ya 25 ghante ka.\n**5. Fiscal vs calendar year** - April-March FY; reports dono chahte hain.\n**6. Grain mismatch** - fact daily, dimension monthly.\n**7. Retention and archival** - kitna history online rakhein (cost vs audit).\n**8. Idempotency** - ETL re-run se duplicate rows / double counting.\n**9. Query ambiguity** - \"as of\" ka matlab valid time ya transaction time?\n**10. Late-arriving dimensions** - naya product pehle fact mein aa gaya, dimension baad mein.\n\n**Mitigation:** date dimension with fiscal flags, load/audit timestamps, SCD type 2 with effective dates, deterministic idempotent loads, partition by period, aur documented \"as of\" semantics.\n\n**Diagram:** Refer to the temporal data introduction diagram."
      },
      {
        "question": "Explain how a data warehouse stores time. Why is a date dimension important?",
        "answer": "**Warehouse mein time ke kai roop:**\n- **Fact table** mein date foreign key (event date) aur aksar load timestamp.\n- **Dimension tables** mein attribute validity (SCD type 2 effective dates).\n- **Date dimension** har din ki ek row.\n\n**Date dimension ke columns:** date key (YYYYMMDD), full date, day of week, day of month, month, month name, quarter, year, fiscal period, fiscal quarter, week number, is_weekend, is_holiday, working day index, days from start of year.\n\n**Kyun important:**\n1. **Consistent grouping** - month/quarter/fiscal sab ek jagah define.\n2. **Fast filtering** - integer key par partition pruning.\n3. **Business calendar** - holidays, promotions, weekends, retail weeks (4-5-4).\n4. **Comparisons** - same period last year, YTD, MTD ke liye ready attributes.\n5. **No date functions at query time** - calculation pehle se stored.\n6. **Gap handling** - jis din sale nahi hui us din bhi row hoti hai, trend mein zero dikhta hai.\n\n**Best practice:** date dimension ko hi fiscal calendar ka single source of truth banao; time zone ko UTC mein store karo aur reporting ke liye local convert karo.\n\n**Diagram:** Refer to the temporal data introduction diagram."
      }
    ]
  },
  {
    "id": "valid-transaction-time",
    "number": "4.5",
    "title": "Valid Time and Transaction Time",
    "subtitle": "Do ghadiyan — duniya ki aur database ki",
    "icon": "timeline",
    "accent": "#00bcd4",
    "englishDefinition": "Valid time (also called application time or business time) is the time period during which a fact was true in the real world: the price of Rs 100 was valid from 1 January to 31 March. Transaction time (also called system time or assertion time) is the period during which that assertion was stored and believed by the database: the row was inserted on 4 January and superseded on 5 April. The two are independent - a record can be entered before it takes effect (future-dated price), entered after it took effect (late entry), or corrected long after both. A relation that supports both is called bitemporal, and its rows carry four columns: valid_from, valid_to, txn_from, txn_to. Bitemporal storage makes three classic questions answerable and reproducible: the current view, the as-of view (what did we believe on a date), and the as-was view (what was actually true in a period, as known today). In BI this maps onto slowly changing dimensions type 2 for valid time plus load and update timestamps or a history table for transaction time, and onto audit requirements such as restatement, back-dated corrections, regulatory reporting and dispute resolution.",
    "intro": "**Valid time** = duniya mein kab sach tha (business time). **Transaction time** = database mein kab record hua (system time). Ye dono **independent** hain — price 1 April se effective ho sakta hai par entry 5 April ko hui ho. Dono ko saath rakhne ko **bitemporal** kehte hain, aur uske chaar columns hote hain: `valid_from`, `valid_to`, `txn_from`, `txn_to`. Isse teen sawaal answer hote hain: **current**, **as-of** (tab kya pata tha) aur **as-was** (asli mein kya tha).",
    "sections": [
      {
        "type": "definition",
        "title": "Valid time aur transaction time ka farq",
        "kicker": "Definition",
        "body": "**Valid time:** wo period jiske liye fact real world mein sach tha — \"Rs 100 price 1 Jan se 31 Mar tak valid\". Ye **business** decide karta hai.",
        "body2": "**Transaction time:** wo period jiske liye ye assertion database mein store thi — \"ye row 4 Jan ko insert hui, 5 Apr ko supersede hui\". Ye **system** decide karta hai, kabhi change nahi hota.",
        "chips": [
          "valid time",
          "transaction time",
          "as-of",
          "audit",
          "bitemporal"
        ]
      },
      {
        "type": "comparison",
        "title": "Valid time vs transaction time",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Valid time",
          "Transaction time"
        ],
        "rows": [
          {
            "label": "Meaning",
            "values": [
              "real world mein kab sach",
              "database mein kab record"
            ]
          },
          {
            "label": "Owner",
            "values": [
              "business / user",
              "system / DBMS"
            ]
          },
          {
            "label": "Kabhi badalta hai?",
            "values": [
              "haan, correction se",
              "nahi, append-only"
            ]
          },
          {
            "label": "Example column",
            "values": [
              "valid_from, valid_to",
              "txn_from, txn_to / load_ts"
            ]
          },
          {
            "label": "Question",
            "values": [
              "\"March mein price kya tha?\"",
              "\"March mein humein kya pata tha?\""
            ]
          },
          {
            "label": "BI mapping",
            "values": [
              "SCD type 2 effective dates",
              "audit columns + history table"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#00d4ff",
          "#ffd600"
        ]
      },
      {
        "type": "cards",
        "title": "Teen classic temporal queries",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "clock",
            "title": "Current view",
            "body": "Aaj ka sach: `WHERE valid_to IS NULL` (ya future date). Dashboard default.",
            "color": "#00d4ff"
          },
          {
            "icon": "search",
            "title": "As-of view",
            "body": "Us date tak jo hum jaante the: `txn_from <= D < txn_to` aur us version ka valid range.",
            "color": "#ffd600"
          },
          {
            "icon": "timeline",
            "title": "As-was view",
            "body": "Us period mein asli sach kya tha (aaj ki knowledge se): `valid_from <= D < valid_to` latest txn version.",
            "color": "#00e676"
          },
          {
            "icon": "warn",
            "title": "Restatement",
            "body": "Correction ke baad purani report badal jaati hai - isliye dono view zaroori.",
            "color": "#ff5252"
          },
          {
            "icon": "lock",
            "title": "Audit trail",
            "body": "Transaction time immutable hone se \"kab kya bataya\" proof rehta hai.",
            "color": "#aa00ff"
          },
          {
            "icon": "cycle",
            "title": "Future-dated",
            "body": "Valid from agle mahine, entry aaj - as-of query se pata chalta hai.",
            "color": "#ff8800"
          }
        ]
      },
      {
        "type": "example",
        "title": "Bitemporal price table ka example",
        "kicker": "Example",
        "body": "| product | price | valid_from | valid_to | txn_from | txn_to |\n|---|---|---|---|---|---|\n| Aata 5kg | 100 | 2025-01-01 | 2025-04-01 | 2025-01-04 | 2025-04-05 |\n| Aata 5kg | 110 | 2025-04-01 | 9999-12-31 | 2025-04-05 | 9999-12-31 |\n| Aata 5kg | 100 | 2025-04-01 | 2025-04-15 | 2025-05-10 | 9999-12-31 |\n\nTeen sawaal:\n- **Current:** Rs 100 (1 Apr se 15 Apr tak, latest belief).\n- **As-of 20 April:** Rs 110 - us waqt hum yahi maante the.\n- **As-was 1 April:** Rs 100 - aaj ki knowledge se sahi value.\n\nEk hi table, teen sahi jawab - yahi bitemporal ka fayda hai."
      },
      {
        "type": "diagram",
        "title": "Valid time aur transaction time",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "td-bitemporal",
        "caption": "Two independent time axes for valid time and transaction time, a bitemporal table with four timestamp columns, and the three queries current, as-of and as-was resolved on the same data with a late correction example"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Valid time** = duniya, **transaction time** = database.",
          "Bitemporal = chaar columns: valid_from/to + txn_from/to.",
          "Teen view: **current**, **as-of**, **as-was**.",
          "Transaction time **immutable** hota hai — audit ka base.",
          "Exam line: \"valid time business badalta hai, transaction time kabhi nahi.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between valid time and transaction time with examples.",
        "answer": "**Valid time** - wo period jiske liye fact real world mein sach tha. Business decide karta hai. Example: \"Rs 100 price 1 Jan se 31 Mar tak valid tha.\"\n\n**Transaction time** - wo period jiske liye assertion database mein stored thi. System decide karta hai aur ye kabhi change nahi hota. Example: \"Ye price row 4 Jan ko insert hui aur 5 Apr ko supersede hui.\"\n\n| Point | Valid time | Transaction time |\n|---|---|---|\n| Meaning | real world validity | database record period |\n| Owner | business | system |\n| Changeable | haan (correction) | nahi (append-only) |\n| Columns | valid_from, valid_to | txn_from, txn_to |\n| Question | \"March mein price kya tha?\" | \"March mein humein kya pata tha?\" |\n| BI mapping | SCD type 2 | audit/load timestamps |\n\n**Independent kyun:** ek price 1 April se effective ho sakta hai par entry 5 April ko ho (late entry); ya entry 1 March ko ho par valid 1 May se (future-dated).\n\n**Dono saath = bitemporal**, jo restatement aur audit ko possible banata hai.\n\n**Diagram:** Refer to the valid time and transaction time diagram."
      },
      {
        "question": "What is bitemporal data? Explain the current, as-of and as-was views with an example.",
        "answer": "**Bitemporal data:** wo data jisme **valid time** aur **transaction time** dono store hote hain. Table mein chaar columns: valid_from, valid_to, txn_from, txn_to.\n\n**Views:**\n1. **Current view** - aaj ka sach (`txn_to = 9999-12-31`).\n2. **As-of view** - us date tak hum kya maante the (`txn_from <= D < txn_to`). Restatement reproduce karne ke liye.\n3. **As-was view** - us period mein asli sach kya tha, aaj ki latest knowledge se.\n\n**Example:** Rs 100 valid 1 Jan-1 Apr, entered 4 Jan; Rs 110 valid 1 Apr se, entered 5 Apr; 10 May ko pata chala ki 1-15 Apr ke liye asli price Rs 100 tha (correction).\n\n- **Current (aaj):** 1 Apr se Rs 100 (latest belief, 15 Apr tak).\n- **As-of 20 Apr:** Rs 110 - us waqt yahi belief thi.\n- **As-was 1 Apr:** Rs 100 - aaj ki knowledge se sahi.\n\n**Fayde:** reproducible reports, audit trail, dispute resolution, regulator ko restatement explain karna.\n\n**Diagram:** Refer to the valid time and transaction time diagram."
      },
      {
        "question": "How are valid time and transaction time implemented in a data warehouse for audit and restatement?",
        "answer": "**Valid time implementation**\n- **SCD type 2** dimension: effective_from, effective_to, is_current, version.\n- Fact table event date + price/attribute version lookup at the event date.\n- Late-arriving dimension: fact style lookup \"us din ka version\".\n\n**Transaction time implementation**\n- Load/audit columns: `load_ts`, `update_ts`, `batch_id`, `source_file`, `record_hash`.\n- History (audit) table with before/after image for every change.\n- Append-only insert: correction = naya row + purane row ka txn_to band.\n- SQL:2011 temporal tables (`SYSTEM_TIME`) ya CDC stream.\n\n**Both (bitemporal)**\n- Four columns: valid_from, valid_to, txn_from, txn_to.\n- Query patterns: current / as-of / as-was.\n\n**Restatement process**\n1. Correction detect (source vs warehouse reconciliation).\n2. As-of view nikalo - \"us waqt kya report hua tha\".\n3. Correction apply (new txn version) - valid time fix.\n4. Impact analysis - kaunse reports badle.\n5. Restated report + audit note publish karo.\n\n**Governance:** immutable transaction time, retention policy, access log, aur documented metric version.\n\n**Diagram:** Refer to the valid time and transaction time diagram."
      }
    ]
  },
  {
    "id": "temporal-attributes-timestamps",
    "number": "4.6",
    "title": "Temporal Attributes and Timestamps",
    "subtitle": "Effective dates, audit columns aur time zone ka discipline",
    "icon": "layers",
    "accent": "#ffd600",
    "englishDefinition": "Temporal attributes are the columns that carry time semantics in a warehouse: effective/validity dates on dimension rows, event and posting dates on facts, and audit timestamps recording when a row was created or changed. Common attributes are valid_from and valid_to (with a sentinel such as 9999-12-31 for open-ended rows), effective_date and end_date, load_ts, update_ts, batch_id, source_system, and record_version. Design rules matter: store timestamps in UTC and convert at the presentation layer, fix the grain explicitly (second, day, month), never rely on the database default like CURRENT_TIMESTAMP inside controlled ETL where batch time should be uniform, make the open-ended row explicit rather than NULL if the reporting tool cannot handle NULLs, and never overwrite history without leaving an audit trace. Attribute changes are tracked with slowly changing dimension types - type 1 overwrites, type 2 adds a versioned row with effective dates, type 3 keeps a previous-value column. Composite keys (natural key plus valid_from) and range joins are the standard way to attach the correct attribute version to each fact, and a date dimension supplies the calendar semantics - fiscal periods, week numbers, holidays - so that temporal logic lives in data, not in hundreds of ad-hoc SQL date functions.",
    "intro": "Temporal attributes wo columns hain jo time ka matlab rakhte hain: **effective dates** (valid_from, valid_to), **event dates** (fact), aur **audit timestamps** (load_ts, update_ts, batch_id). Rules yaad rakho: time **UTC** mein store karo, grain **explicit** likho, open-ended row ke liye **9999-12-31** sentinel use karo, aur history ko **overwrite mat karo**. Attribute change ko **SCD type 1/2/3** se handle karte hain, aur correct version attach karne ke liye **range join** (natural key + valid_from) use hota hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Temporal attribute kya hota hai",
        "kicker": "Definition",
        "body": "**Temporal attribute** wo column hai jo kisi row ka **time context** batata hai — kab se kab tak valid hai, kab load hua, kab badla.",
        "body2": "Ye attributes batate hain ki row ko kis period ke liye count karna hai. Inke bina warehouse history rakhta hai par history ka **matlab** nahi bata sakta. Example: `valid_from`, `valid_to`, `load_ts`, `batch_id`, `record_version`.",
        "chips": [
          "valid_from",
          "valid_to",
          "load_ts",
          "batch_id",
          "version"
        ]
      },
      {
        "type": "cards",
        "title": "Warehouse mein common temporal attributes",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "timeline",
            "title": "valid_from / valid_to",
            "body": "Dimension row kiske period ke liye sach hai. Open-ended row ke liye 9999-12-31.",
            "color": "#00d4ff"
          },
          {
            "icon": "clock",
            "title": "event_date / posting_date",
            "body": "Fact ka business date. Reporting ka primary filter.",
            "color": "#00e676"
          },
          {
            "icon": "folder",
            "title": "load_ts / update_ts",
            "body": "ETL ne kab insert/update kiya. Batch ka time uniform rakho.",
            "color": "#ff8800"
          },
          {
            "icon": "layers",
            "title": "batch_id / source_file",
            "body": "Lineage — kaunse run se aaya, dubara trace ho sake.",
            "color": "#aa00ff"
          },
          {
            "icon": "check",
            "title": "record_version / is_current",
            "body": "SCD type 2 ka version number aur current flag.",
            "color": "#00bcd4"
          },
          {
            "icon": "warn",
            "title": "deleted_flag / soft delete",
            "body": "Delete ko physically hatane ke bajaye flag, warna history toot jaati hai.",
            "color": "#ff5252"
          }
        ]
      },
      {
        "type": "points",
        "title": "Design rules (exam ke liye ready list)",
        "kicker": "Key Points",
        "points": [
          "**UTC mein store, local mein dikhao** — DST aur multi-country ke liye.",
          "**Grain explicit** — timestamp (second) ya date (day)? Dono mix mat karo.",
          "**Sentinel date** — open-ended row ke liye 9999-12-31, NULL se better.",
          "**Ranges half-open** — `[valid_from, valid_to)` taaki overlap aur gap na ho.",
          "**Batch time uniform** — poore batch ka ek `load_ts`, row-by-row CURRENT_TIMESTAMP nahi.",
          "**Immutable history** — purani row update nahi, naya version insert.",
          "**Fiscal aur calendar dono** — date dimension mein dono columns.",
          "**Timezone-aware source** — source ka time zone metadata mein likho."
        ]
      },
      {
        "type": "comparison",
        "title": "SCD type 1, 2 aur 3 — attribute change kaise track karein",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Type 1",
          "Type 2",
          "Type 3"
        ],
        "rows": [
          {
            "label": "Method",
            "values": [
              "overwrite",
              "naya versioned row",
              "previous value column"
            ]
          },
          {
            "label": "History",
            "values": [
              "koi nahi",
              "poori",
              "ek step"
            ]
          },
          {
            "label": "Columns",
            "values": [
              "same",
              "valid_from, valid_to, is_current",
              "prev_value, effective_date"
            ]
          },
          {
            "label": "Storage",
            "values": [
              "kam",
              "zyada",
              "beech mein"
            ]
          },
          {
            "label": "Use",
            "values": [
              "typo fix",
              "audit, trend",
              "limited comparison"
            ]
          }
        ],
        "columnColors": [
          "#9ab0e0",
          "#ffd600",
          "#00e676",
          "#ff8800"
        ]
      },
      {
        "type": "example",
        "title": "Range join — sahi version kaise attach karein",
        "kicker": "Example",
        "body": "Fact: sale on 2025-03-12 of product Aata-5kg at Rs 100.\ndim_product versions: v1 (category Grocery) valid 2024-01-01 to 2025-02-01; v2 (category Staples) valid 2025-02-01 to 9999-12-31.\n\n**Range join:**\n`ON f.product_nk = d.product_nk AND f.event_date >= d.valid_from AND f.event_date < d.valid_to`\n\nResult: sale v2 ke saath attach hoti hai (Staples), kyunki us din category Staples thi. Agar sirf `is_current = 1` par join karte to purani sale bhi nayi category mein chali jaati - history galat ho jaati.\n\nYahi effective dating ka poora point hai: **fact ka date decide karta hai kaunsa version lagega**."
      },
      {
        "type": "diagram",
        "title": "Temporal attributes aur timestamps",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "td-attributes",
        "caption": "A dimension row with effective dates and audit timestamp columns, the half-open validity interval with a sentinel end date, SCD type 1 2 and 3 behaviour side by side, and a range join attaching the correct attribute version to each fact"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Temporal attributes: **valid_from/to**, **event date**, **load_ts**, **batch_id**, **version**.",
          "Half-open interval + **9999-12-31** sentinel.",
          "**UTC store, local display**; grain explicit.",
          "SCD: type 1 overwrite, type 2 history, type 3 previous column.",
          "Range join: `fact.date >= valid_from AND < valid_to`."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What are temporal attributes? Explain the important temporal attributes used in a data warehouse.",
        "answer": "**Temporal attributes:** wo columns jo row ka time context batate hain - kab valid, kab load, kab change.\n\n**Important attributes:**\n1. **valid_from / valid_to** - dimension row ki validity; open-ended ke liye 9999-12-31.\n2. **event_date / posting_date** - fact ka business date (reporting filter).\n3. **load_ts / update_ts** - ETL ne kab load/update kiya.\n4. **batch_id / source_file** - lineage aur reprocessing.\n5. **record_version / is_current** - SCD type 2 versioning.\n6. **deleted_flag** - soft delete, history preserve.\n7. **effective_date + prev_value** - SCD type 3 ke liye.\n8. **time_zone / utc_offset** - source time zone.\n\n**Design rules:** UTC mein store; grain explicit (second vs day); half-open intervals; sentinel end date; batch-level uniform load_ts; history immutable; fiscal + calendar dono.\n\n**Use:** correct attribute version attach karna (range join), as-of reporting, audit, restatement, late-arriving data handle karna.\n\n**Diagram:** Refer to the temporal attributes and timestamps diagram."
      },
      {
        "question": "Explain slowly changing dimensions type 1, 2 and 3 with examples.",
        "answer": "**SCD** ka matlab: dimension attribute badle to history kaise rakhein.\n\n**Type 1 - overwrite**\n- Purani value replace ho jaati hai, history nahi rehti.\n- Example: customer ka galat spelling fix.\n- Fayda: simple, storage kam. Nuksan: history khatam.\n\n**Type 2 - versioned row (recommended for analysis)**\n- Naya row insert + purane row ka valid_to band + is_current flag.\n- Columns: valid_from, valid_to, is_current, version.\n- Example: product category Grocery se Staples; purani sales Grocery mein rahengi, nayi Staples mein.\n- Fayda: history + trend accurate. Nuksan: storage, queries mein range join.\n\n**Type 3 - previous value column**\n- Ek column purani value rakhta hai (prev_category, effective_date).\n- Example: region reorganisation ka before-after comparison.\n- Fayda: simple comparison. Nuksan: sirf ek step history.\n\n**Selection:** audit/trend chahiye to type 2; typo fix to type 1; limited before-after to type 3; bahut columns ke liye type 4/6 hybrids.\n\n**Diagram:** Refer to the temporal attributes and timestamps diagram."
      },
      {
        "question": "How do timestamps and effective dates handle late-arriving data and corrections? Discuss with an example.",
        "answer": "**Late-arriving fact**\n- Fact event_date se report hota hai, load_ts se nahi.\n- Period partition mein backfill: March ka order April mein aaya to March partition mein insert.\n- Idempotent load (upsert on natural key + date) taaki re-run duplicate na kare.\n\n**Late-arriving dimension**\n- Fact pehle aa jaye, dimension baad mein - \"inferred member\" (placeholder) banao, baad mein same key se update.\n- Alternative: fact ke event date par valid version lookup (range join).\n\n**Corrections**\n- Type 1: overwrite + audit history table mein before/after image.\n- Bitemporal: purani row ka txn_to band, naya row naye txn_from ke saath.\n- Restatement report + audit note, taaki purani published number explain ho sake.\n\n**Example**\n- 28 March ka order 3 April ko load hua: event_date = 2025-03-28, load_ts = 2025-04-03.\n- March report (as-was) mein Rs 50,000 tha; backfill ke baad March Rs 58,000.\n- April report mein wo order count nahi hoga (kyunki event date March hai).\n- As-of 2 April report Rs 50,000 hi dikhayegi - jo us waqt publish hui thi.\n\n**Governance:** load_ts immutable, batch_id mandatory, reconciliation report, aur documented restatement policy.\n\n**Diagram:** Refer to the temporal attributes and timestamps diagram."
      }
    ]
  },
  {
    "id": "time-based-analysis",
    "number": "4.7",
    "title": "Time-based Data Analysis",
    "subtitle": "YTD, MTD, YoY, moving average aur seasonality",
    "icon": "cycle",
    "accent": "#ff5252",
    "englishDefinition": "Time-based data analysis is the family of techniques that compare and aggregate measures along the time dimension instead of treating periods as unrelated buckets. The core building blocks are period-to-date accumulation (MTD, QTD, YTD), period-over-period comparison (previous month, same month last year), moving and rolling windows (7-day and 3-month moving average, rolling 12 months), growth rates (simple growth and compound annual growth rate), and seasonality handling through seasonal indices or year-over-year comparison. A well-designed date dimension carries fiscal periods, week numbers, holiday flags and a working-day index so that these calculations are data rather than ad-hoc SQL. Two decisions decide correctness: the aggregation rule for each measure (additive versus semi-additive, so stock must use period-end or average, not sum) and the completeness rule for the current period (partial months must be compared with partial periods, or annualised, otherwise every month looks like a decline). Decomposition into trend, seasonal and residual components, cohort and retention analysis, and same-store or like-for-like comparison then convert the numbers into explanations a manager can act on.",
    "intro": "**Time-based analysis** = measures ko time ke saath compare karna, na ki har period ko alag dabba samajhna. Building blocks: **MTD/QTD/YTD**, **period-over-period** (last month, same month last year), **moving average** (7-day, 3-month, rolling 12), **growth rate** (simple + CAGR), aur **seasonality**. Do cheezein sabse zyada galat hoti hain — **semi-additive measure** ko sum karna (stock), aur **adhoore period** ko poore period se compare karna.",
    "sections": [
      {
        "type": "definition",
        "title": "Time-based analysis kya hai",
        "kicker": "Definition",
        "body": "**Time-based data analysis** wo techniques hain jo measure ko **time dimension ke saath** aggregate aur compare karti hain — trend, growth, seasonality aur rolling windows ke through.",
        "body2": "Iska base ek achha **date dimension** hai (fiscal period, week, holiday, working days). Calculation data mein hoti hai, query mein nahi — isliye har analyst ka YTD same aata hai.",
        "chips": [
          "MTD",
          "YTD",
          "YoY",
          "moving average",
          "CAGR",
          "seasonality"
        ]
      },
      {
        "type": "cards",
        "title": "Core time calculations — formula ke saath",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "clock",
            "title": "MTD / QTD / YTD",
            "body": "Month start se aaj tak ka total. `SUM(measure) WHERE date BETWEEN period_start AND current_date`.",
            "color": "#00d4ff"
          },
          {
            "icon": "cycle",
            "title": "YoY / MoM growth",
            "body": "`(current - previous) / previous x 100`. YoY seasonality ko neutralise karta hai.",
            "color": "#00e676"
          },
          {
            "icon": "timeline",
            "title": "Moving average",
            "body": "Last N periods ka average (7-day, 3-month). Noise hatata hai, trend dikhata hai.",
            "color": "#ff8800"
          },
          {
            "icon": "forecast",
            "title": "CAGR",
            "body": "`(end/start)^(1/n) - 1`. Multi-year growth ko ek number mein.",
            "color": "#aa00ff"
          },
          {
            "icon": "half",
            "title": "Seasonal index",
            "body": "`period value / overall average`. Retail Diwali, insurance renewal ke liye.",
            "color": "#00bcd4"
          },
          {
            "icon": "warn",
            "title": "Rolling 12 months",
            "body": "Har month pichhle 12 mahine ka total - adhoora saal compare karne ka safe tareeka.",
            "color": "#ffd600"
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Additive vs semi-additive — time par sum ka trap",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Additive measure (sales)",
          "Semi-additive (stock on hand)"
        ],
        "rows": [
          {
            "label": "Time par sum",
            "values": [
              "sahi hai",
              "galat hai"
            ]
          },
          {
            "label": "Correct rule",
            "values": [
              "SUM",
              "last day / period-end / average"
            ]
          },
          {
            "label": "Agar sum kiya",
            "values": [
              "sahi total",
              "impossible number"
            ]
          },
          {
            "label": "Example",
            "values": [
              "March sales 12 lakh",
              "March stock 12 lakh (do mahine ka jod?)"
            ]
          },
          {
            "label": "Query",
            "values": [
              "GROUP BY month SUM()",
              "last non-empty day of month"
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
        "type": "points",
        "title": "Adhoore period ke rules (partial period)",
        "kicker": "Key Points",
        "points": [
          "**MTD vs MTD last year** compare karo, poore month se nahi.",
          "**Annualise na karo** chhote period se blindly (seasonality distort karti hai).",
          "**Rolling 12 months** use karo jab saal adhoora ho.",
          "**Working days normalise** — 22 din vs 26 din ka month same nahi.",
          "**Holiday calendar** ko date dimension se lo.",
          "**Cutoff likho** — \"data as of 5 Nov 09:00\" report par mandatory.",
          "**Late data** ke liye refresh window rakho (T+2).",
          "**Zero vs missing** — jis din sale nahi hui wo zero hai, missing nahi."
        ]
      },
      {
        "type": "example",
        "title": "Ek retail dashboard ke numbers",
        "kicker": "Example",
        "body": "Ek store ka FY25 (Apr-Mar) data:\n\n- **MTD (Nov 1-5):** Rs 12 lakh; **MTD last year:** Rs 10 lakh → **+20%**.\n- **YTD (Apr-Nov 5):** Rs 3.2 crore; **YTD last year:** Rs 2.9 crore → **+10.3%**.\n- **Rolling 12M:** Rs 4.6 crore (adhoore saal ki safe comparison).\n- **3-month moving average:** 42, 45, 48 lakh → upward trend.\n- **Seasonal index (Diwali month):** 1.8 — normal month se 80% zyada.\n- **CAGR (4 saal):** (4.6/2.9)^(1/3)-1 = **16.6%**.\n\n**Exam point:** YoY growth +10.3% dikhta hai par MTD +20% hai — kyunki November seasonal peak hai. Isliye trend ke saath seasonality alag se report karna zaroori hai."
      },
      {
        "type": "diagram",
        "title": "Time-based data analysis",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "td-time-analysis",
        "caption": "A date dimension feeding MTD QTD YTD accumulation, period-over-period and year-over-year comparison, moving average and rolling twelve month windows, with a seasonality chart and the partial-period and semi-additive pitfalls marked"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Building blocks: **MTD/QTD/YTD**, **YoY**, **moving average**, **CAGR**, **seasonal index**.",
          "Semi-additive measure time par **sum nahi** — period-end/average.",
          "Partial period ko partial se compare karo, warna trend galat.",
          "**Rolling 12M** adhoore saal ka safe answer.",
          "Exam line: \"YoY seasonality hatata hai, MoM noise dikhata hai.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain time-based data analysis. Discuss MTD, YTD, YoY and moving average with examples.",
        "answer": "**Time-based data analysis:** measure ko time dimension ke saath aggregate/compare karna taaki trend, growth aur seasonality samajh aaye.\n\n**1. MTD / QTD / YTD** - period start se aaj tak ka total. Example: April se 5 Nov tak sales Rs 3.2 crore (YTD).\n**2. Period-over-period (MoM)** - pichhle month se comparison. `(current - previous)/previous x 100`.\n**3. YoY** - same period last year se comparison; seasonality neutralise hoti hai. Example: Nov 1-5 Rs 12 lakh vs last year 10 lakh = +20%.\n**4. Moving average** - last N periods ka average (3-month, 7-day). Noise hata kar trend dikhata hai.\n**5. Rolling 12 months** - adhoore saal ki safe comparison.\n**6. CAGR** - `(end/start)^(1/n) - 1`.\n\n**Pitfalls:**\n- Semi-additive measure (stock) ko time par sum karna.\n- Adhoore period ko poore period se compare karna.\n- Working days aur holidays ignore karna.\n- Data cutoff na likhna.\n\n**Enabler:** date dimension with fiscal periods, week numbers, holiday flags.\n\n**Diagram:** Refer to the time-based data analysis diagram."
      },
      {
        "question": "Discuss seasonality and trend analysis in time-based BI. How are they separated?",
        "answer": "**Trend** - long-term direction (up/down) clean series mein. **Seasonality** - fixed period ke andar repeat hone wala pattern (Diwali peak, monsoon dip). **Residual/irregular** - random noise, event-driven.\n\n**Separation ke tareeke:**\n1. **YoY comparison** - same month last year se compare karo; seasonal effect cancel ho jaata hai.\n2. **Seasonal index** - `period value / overall average`. Retail Diwali index 1.8 matlab 80% zyada.\n3. **Decomposition (additive/multiplicative)** - `value = trend + seasonal + residual`.\n4. **12-month moving average** - seasonality smooth ho jaati hai, trend bachta hai.\n5. **STL / regression** - advanced stats.\n\n**Business use:**\n- Inventory: peak season se pehle stock.\n- Staffing: seasonal roster.\n- Target setting: seasonal index se month-wise target.\n- Anomaly detection: residual zyada ho to kuch event hua.\n\n**Pitfall:** seasonal business mein MoM growth dekhna - Diwali ke baad har saal \"decline\" dikhta hai, jabki YoY flat hai.\n\n**Diagram:** Refer to the time-based data analysis diagram."
      },
      {
        "question": "What is CAGR? Explain the common pitfalls in time-based aggregation of measures.",
        "answer": "**CAGR (Compound Annual Growth Rate):** `(ending value / starting value)^(1/number of years) - 1`. Example: revenue Rs 2.9 crore se Rs 4.6 crore in 3 saal → (4.6/2.9)^(1/3)-1 = **16.6% per year**. Ye multi-year growth ko ek comparable number deta hai (simple average se better).\n\n**Pitfalls in time aggregation:**\n1. **Semi-additive measure sum** - stock, balance, headcount time par sum nahi hote; period-end ya average lo.\n2. **Non-additive ratio** - margin % ka average galat; numerator/denominator alag jodo.\n3. **Partial period** - 5 din ko 30 din se compare karna.\n4. **Working days** - 22 vs 26 din ka month same nahi.\n5. **Double counting** - adjacently nested periods (month + quarter) ek saath jodna.\n6. **Late data** - refresh window ke bina month-end number badalta rehta hai.\n7. **Time zone** - din ka boundary shift.\n8. **CAGR ka misuse** - negative se positive growth par CAGR meaningless; short period par volatile.\n\n**Rule:** pehle measure ki nature (additive/semi/non) decide karo, phir period completeness check karo, phir aggregation lagao.\n\n**Diagram:** Refer to the time-based data analysis diagram."
      }
    ]
  },
  {
    "id": "trend-historical-tracking",
    "number": "4.8",
    "title": "Trend Analysis and Historical Data Tracking in BI Systems",
    "subtitle": "Trend line, forecast aur history ka poora record",
    "icon": "forecast",
    "accent": "#ff7ab2",
    "englishDefinition": "Trend analysis in BI identifies the direction and rate of change of a measure over time, separates signal from noise, and projects the near future, while historical data tracking is the machinery that keeps the underlying history complete, consistent and auditable. Typical techniques are trend lines and linear or exponential fits, moving averages and exponentially weighted smoothing, growth rates and CAGR, year-over-year comparison, control charts and threshold-based anomaly detection, and lightweight forecasting methods such as moving-average extrapolation, exponential smoothing (Holt-Winters for seasonality) and driver-based models, with accuracy checked through MAPE, MAE or RMSE on a hold-out period. Historical tracking depends on warehouse discipline: append-only facts keyed by event date, slowly changing dimensions with effective dates, load audit columns, immutable transaction history, partitioned storage with archival tiers, retention and purge policies that satisfy legal requirements, and reproducible snapshots so that a report published last quarter can still be regenerated exactly. Together they answer the questions management actually asks - is performance improving, is this month an outlier, where will the year land, and why does this number differ from the one reported three months ago.",
    "intro": "**Trend analysis** = time ke saath direction aur speed nikalna (trend line, moving average, CAGR, anomaly detection) aur aage ka halka forecast. **Historical tracking** = wo discipline jisse history poori, consistent aur auditable rahe (append-only facts, SCD, audit columns, partitioned storage, retention policy, reproducible snapshots). Dono milkar management ke chaar sawaal answer karte hain: **improve ho raha hai? outlier hai? saal kahan khatam hoga? number pehle se alag kyun?**",
    "sections": [
      {
        "type": "definition",
        "title": "Trend analysis aur historical tracking",
        "kicker": "Definition",
        "body": "**Trend analysis:** measure ka long-term direction aur rate of change nikalna — trend line, moving average, growth rate, aur anomaly detection. Iske aage halka **forecast** (moving average extrapolation, exponential smoothing) lagta hai.",
        "body2": "**Historical tracking:** history ko store, version aur audit karne ka system — append-only facts, SCD type 2, load audit columns, partitioned retention, aur aise snapshots jisse purani report **exactly reproduce** ho sake.",
        "chips": [
          "trend line",
          "moving average",
          "forecast",
          "history",
          "audit",
          "retention"
        ]
      },
      {
        "type": "cards",
        "title": "Trend analysis techniques",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "chart",
            "title": "Trend line / regression",
            "body": "Linear ya exponential fit se direction aur slope. Slope = per period change.",
            "color": "#00d4ff"
          },
          {
            "icon": "cycle",
            "title": "Moving average / EWMA",
            "body": "Noise smooth karta hai; EWMA recent data ko zyada weight deta hai.",
            "color": "#00e676"
          },
          {
            "icon": "forecast",
            "title": "Exponential smoothing",
            "body": "Holt-Winters seasonal trend + level + season teeno model karta hai.",
            "color": "#ff8800"
          },
          {
            "icon": "warn",
            "title": "Anomaly / control chart",
            "body": "Mean se 2-3 standard deviation door value = signal, sirf noise nahi.",
            "color": "#ff5252"
          },
          {
            "icon": "half",
            "title": "Growth & CAGR",
            "body": "Simple growth short term, CAGR long term comparison ke liye.",
            "color": "#aa00ff"
          },
          {
            "icon": "search",
            "title": "Accuracy metrics",
            "body": "MAPE, MAE, RMSE - forecast ko hold-out period par test karo.",
            "color": "#00bcd4"
          }
        ]
      },
      {
        "type": "points",
        "title": "Historical tracking ke requirements",
        "kicker": "Key Points",
        "points": [
          "**Append-only facts** — event date ke saath insert, delete nahi.",
          "**SCD type 2 dimensions** — attribute ka version aur effective dates.",
          "**Audit columns** — load_ts, batch_id, source, record hash.",
          "**Immutable transaction history** — \"kab kya bataya\" ka proof.",
          "**Partitioned storage + archival** — hot (90 din) → warm (2 saal) → cold (7 saal).",
          "**Retention policy** — legal, tax aur privacy requirement ke hisaab se.",
          "**Reproducible snapshots** — quarter-end snapshot taaki purani report regenerate ho.",
          "**Reconciliation** — source vs warehouse count aur amount match."
        ]
      },
      {
        "type": "example",
        "title": "Trend + history ka combined example",
        "kicker": "Example",
        "body": "Ek SaaS company ka monthly churn: 6.4, 6.1, 6.3, 5.9, 5.7, 5.8, 5.4% (7 month).\n\n- **Trend line** slope = -0.16 percentage point per month → improvement.\n- **3-month moving average** = 5.63% (latest window), noise hata kar.\n- **Anomaly check** — 6.3% control limit ke andar, outlier nahi.\n- **Forecast (exponential smoothing):** next month ~5.3%.\n- **History check:** 3 mahine purani report mein April 6.0% tha, aaj 5.9% hai — kyunki 8 late cancellations backfill hui.\n- **Resolution:** as-of report se purana number explain, restatement note publish.\n\nYahan trend ne direction diya, aur historical tracking ne us number par **bharosa** diya."
      },
      {
        "type": "comparison",
        "title": "Reporting culture vs tracking culture",
        "kicker": "Comparison",
        "columns": [
          "Point",
          "Sirf reporting",
          "Trend + tracking"
        ],
        "rows": [
          {
            "label": "Output",
            "values": [
              "last month ka number",
              "trend + forecast + confidence"
            ]
          },
          {
            "label": "History",
            "values": [
              "overwrite, loss",
              "versioned, auditable"
            ]
          },
          {
            "label": "Old report",
            "values": [
              "regenerate nahi hoti",
              "snapshot se exact reproduce"
            ]
          },
          {
            "label": "Decision",
            "values": [
              "reactive",
              "proactive (aage ka action)"
            ]
          },
          {
            "label": "Trust",
            "values": [
              "\"number badal gaya kyun?\"",
              "explained restatement"
            ]
          }
        ]
      },
      {
        "type": "diagram",
        "title": "Trend analysis aur historical data tracking",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "td-trend",
        "caption": "A monthly time series with trend line moving average and forecast cone, anomaly flags on control limits, and beneath it the historical tracking stack of append-only facts slowly changing dimensions audit columns partitioned retention tiers and reproducible snapshots"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Trend: trend line, moving average, EWMA, CAGR, anomaly detection.",
          "Forecast: smoothing/Winters + accuracy via **MAPE/MAE/RMSE**.",
          "History: append-only, SCD2, audit columns, partitions, retention.",
          "**Reproducible snapshot** = purani report ka proof.",
          "Exam line: \"trend batata hai kahan ja rahe hain, history batati hai number par bharosa kyun.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is trend analysis? Explain the techniques used for trend analysis in BI.",
        "answer": "**Trend analysis:** time ke saath measure ki direction aur rate of change nikalna, noise ko signal se alag karke.\n\n**Techniques:**\n1. **Trend line / regression** - linear ya exponential fit; slope per period change batata hai.\n2. **Moving average** - last N periods ka average (3-month, 12-month), noise smooth.\n3. **EWMA / exponential smoothing** - recent periods ko zyada weight.\n4. **Holt-Winters** - level + trend + season, seasonal data ke liye best simple method.\n5. **Growth rate / CAGR** - short term aur long term comparison.\n6. **YoY comparison** - seasonality neutralise.\n7. **Control charts / anomaly detection** - 2-3 sigma se bahar value = signal.\n8. **Accuracy metrics** - MAPE, MAE, RMSE on hold-out period.\n\n**Business use:** demand planning, revenue trajectory, churn trend, cost trend, early warning of decline.\n\n**Caveat:** trend ko seasonality ke saath padho; chhote period se forecast na banao; structural break (policy change) ko alag mark karo.\n\n**Diagram:** Refer to the trend analysis and historical data tracking diagram."
      },
      {
        "question": "Explain historical data tracking in a BI system. What are its requirements and benefits?",
        "answer": "**Historical data tracking:** history ko is tarah store aur manage karna ki wo poori, consistent, versioned aur auditable rahe.\n\n**Requirements:**\n1. **Append-only facts** keyed by event date.\n2. **SCD type 2 dimensions** with effective dates (attribute version).\n3. **Audit columns** - load_ts, update_ts, batch_id, source, record hash.\n4. **Immutable transaction history** - \"kab kya report hua\" ka proof.\n5. **Partitioned storage + archival tiers** (hot/warm/cold).\n6. **Retention and purge policy** - legal, tax, privacy.\n7. **Reproducible snapshots** - quarter-end snapshot; purani report exact regenerate.\n8. **Reconciliation** - source vs warehouse counts and amounts.\n9. **Documented restatement policy.**\n\n**Benefits:**\n- Accurate YoY/trend analysis.\n- Audit and regulatory compliance.\n- Dispute resolution (\"us waqt number ye tha\").\n- Better forecasting baseline.\n- Root cause analysis with context.\n- Trust in dashboards.\n\n**Costs:** storage, ETL complexity, governance effort.\n\n**Diagram:** Refer to the trend analysis and historical data tracking diagram."
      },
      {
        "question": "How does a BI system produce forecasts and handle restatement of previously reported numbers?",
        "answer": "**Forecast production**\n1. **Clean series** - outliers, missing periods, late data handle karo.\n2. **Decompose** - trend, seasonality, residual.\n3. **Model choose** - moving average (stable), exponential smoothing/Holt-Winters (seasonal), regression (drivers).\n4. **Validate** - hold-out period par MAPE/MAE/RMSE; naive baseline se compare.\n5. **Publish with range** - point forecast + confidence interval + cutoff date.\n6. **Monitor** - actual vs forecast accuracy track, model refresh monthly.\n\n**Restatement handling**\n- Numbers badalte hain kyunki late data, correction ya definition change.\n- **Bitemporal storage**: valid time + transaction time.\n- **Snapshots**: quarter-end frozen copy taaki purani report reproduce ho.\n- **Audit log**: kaun, kab, kya badla, kis batch se.\n- **Impact analysis**: kaunse reports/KPIs affected.\n- **Restatement note**: purana number, naya number aur reason publish karo.\n\n**Example:** April churn 6.0% report hua; 8 late cancellations backfill hui; May mein April 5.9% ho gaya. As-of view se purana 6.0% explain, as-was view se 5.9% sahi, aur note mein reason.\n\n**Diagram:** Refer to the trend analysis and historical data tracking diagram."
      }
    ]
  }
];

export const biAnalyticsUnit = {
  id: 'unit-4',
  number: '4',
  name: 'Business Analytics and Temporal Data',
  topics: biAnalyticsTopics,
};
