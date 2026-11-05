// Software Testing and Quality Assurance — Unit V: Software Test Automation
export const softwareTestingUnit5Topics = [
  {
    "id": "introduction-to-automation-testing",
    "number": "5.1",
    "title": "Introduction to Automation Testing",
    "subtitle": "Software test automation kya hai, kaise kaam karta hai aur kyun zaroori hai",
    "icon": "zap",
    "accent": "#0047ff",
    "englishDefinition": "Test automation is the use of software tools to execute a set of predefined test cases, compare the actual outcomes with the expected results, report the results, and repeat the execution without manual intervention. The scripts drive the application under test through its user interface, API or service layer, and automation is most suitable for repeatable, stable, high-volume and regression test cases.",
    "intro": "Manual testing mein tester har baar wahi steps haath se dohrata hai — slow, boring aur error-prone. Automation mein ek baar script likhi jaati hai aur wahi script jitni baar chahe, kisi bhi machine par, kisi bhi time chal sakti hai. Isi liye regression, smoke aur data-heavy tests automation ke sabse achhe candidates hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Software Test Automation Kya Hai",
        "kicker": "Definition",
        "body": "Test automation ek process hai jisme predefined test cases ko ek software tool ki madad se execute kiya jaata hai — bina manual intervention ke. Script application ke saath interact karti hai (UI click, API call ya database query), actual result ko expected result se compare karti hai, aur pass/fail report banati hai.",
        "body2": "Automation ka focus testing ki speed badhana nahi, balki **repeatability** aur **consistency** dena hai. Insaan 500th baar wahi step thoda alag karta hai, tool bilkul same karta hai — isi liye automation ka result deterministic hota hai (jab tak script aur environment stable hain).",
        "chips": ["Repeatable", "Tool driven", "No manual steps", "Fast feedback", "CI/CD friendly"]
      },
      {
        "type": "points",
        "title": "Automation Kaise Kaam Karta Hai",
        "kicker": "Working",
        "points": [
          "Test case select karo — jo repeatable, stable aur high value ho.",
          "Script likho — tool ke API se UI/API ko drive karo (record karke ya code se).",
          "Test data aur environment ready karo — isolated data, stable build.",
          "Script run karo — locally, scheduler par ya CI pipeline mein.",
          "Result compare karo — assertion se expected vs actual.",
          "Report banao — pass/fail count, screenshot, log, video.",
          "Maintain karo — UI ya requirement badle to script update karo."
        ]
      },
      {
        "type": "cards",
        "title": "Automation Ke Components",
        "kicker": "Building Blocks",
        "cards": [
          {
            "icon": "tools",
            "title": "Test Tool",
            "body": "Selenium, Cypress, Playwright, TestCafe — application ko drive karne wala engine."
          },
          {
            "icon": "code",
            "title": "Test Script",
            "body": "Steps + assertions ka code. Aaj kal Page Object Model mein likha jaata hai."
          },
          {
            "icon": "table",
            "title": "Test Data",
            "body": "Excel, JSON, CSV ya database — data driven testing ka fuel."
          },
          {
            "icon": "layers",
            "title": "Framework",
            "body": "Reporting, logging, config, retry, parallel aur CI integration ka dhaancha."
          },
          {
            "icon": "refresh",
            "title": "Runner / CI",
            "body": "TestNG, pytest, Mocha, Jenkins, GitHub Actions — kab aur kaise chalega."
          },
          {
            "icon": "doc",
            "title": "Report",
            "body": "HTML report, Allure, screenshot, video — failure ka evidence."
          }
        ]
      },
      {
        "type": "diagram",
        "title": "Automation Pipeline",
        "kicker": "Diagram",
        "diagram": "st5-automation-intro",
        "caption": "Test case → script → tool → execution → report, test pyramid aur kab automate karein"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Test automation predefined test cases ko tool se chalane, compare karne aur report karne ki process hai.",
          "Iska asli fayda speed nahi — repeatability, consistency aur fast feedback hai.",
          "Har cheez automate nahi hoti: regression, smoke, data driven aur multi-browser runs best fit hain.",
          "Exploratory, usability aur ek baar chalne wale tests manual hi rehte hain.",
          "Components: test tool, script, data, framework, runner aur report.",
          "CI/CD ke bina automation ka poora fayda nahi milta — feedback late aata hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define software test automation. Explain its process and advantages.",
        "answer": "**Software Test Automation:** Predefined test cases ko software tool ki madad se execute karna, actual result ko expected result se compare karna aur report banana — bina manual intervention ke.\n\n**Process (7 steps):**\n1. **Test case selection** — repeatable, stable aur high-risk cases chuno.\n2. **Script development** — tool ke API se steps likho (record ya code).\n3. **Test data setup** — isolated, repeatable data taiyar karo.\n4. **Execution** — local, scheduled ya CI pipeline mein chalao.\n5. **Comparison** — assertion se expected vs actual.\n6. **Reporting** — pass/fail, screenshot, log, video.\n7. **Maintenance** — UI/requirement change par script update.\n\n**Advantages:**\n- **Speed** — 100 tests minutes mein, manual se 10x–100x fast.\n- **Repeatability** — same script, same steps, same result.\n- **Coverage** — cross-browser, cross-device, multi-language data.\n- **Regression safety** — har build par poora suite chal sakta hai.\n- **24x7** — scheduled night runs, CI par har commit.\n- **Reusability** — ek script baar-baar, kai environments mein.\n\n**Diagram:** Refer to Automation Pipeline diagram."
      },
      {
        "question": "What are the limitations of test automation? When should you not automate?",
        "answer": "**Limitations of automation:**\n1. **High initial cost** — tool, script development aur training ka kharcha.\n2. **Maintenance burden** — UI badle to scripts tootti hain.\n3. **No creativity** — naya defect dhoondhna, judgement aur intuition automation nahi kar sakta.\n4. **Brittle tests** — galat locator ya timing se flaky results.\n5. **Setup dependency** — environment, data aur build stable hone chahiye.\n6. **Tool limitation** — CAPTCHA, OTP, biometrics, hardware, PDF/visual check aaj bhi mushkil.\n7. **Skill requirement** — coding aani chahiye, warna framework bigadta hai.\n\n**Kab automate na karein:**\n- Test **ek hi baar** chalna hai (one-time, ad hoc).\n- Feature **abhi unstable** hai ya UI roz badal raha hai.\n- **Exploratory / usability / accessibility judgement** chahiye.\n- Requirement hi clear nahi hai — pehle manual exploration karo.\n- ROI negative hai (script banane ka effort test ke chalne se zyada).\n\n**Diagram:** Refer to Automation Pipeline diagram."
      },
      {
        "question": "Explain the test automation pyramid and its significance.",
        "answer": "**Test Automation Pyramid (Mike Cohn):** Automation ko layers mein batata hai — jitna neeche, utne zyada tests; jitna upar, utne kam.\n\n| Layer | Speed | Cost | Count | Tool example |\n|---|---|---|---|---|\n| Unit | Fastest | Cheapest | Sabse zyada (~70%) | JUnit, pytest, Jest |\n| API / Service | Fast | Medium | Medium (~20%) | RestAssured, Postman, SuperTest |\n| UI / E2E | Slowest | Costliest | Sabse kam (~10%) | Selenium, Cypress, Playwright |\n\n**Significance:**\n- UI tests slow aur brittle hote hain — unhe kam rakho, sirf critical user journeys.\n- Business logic unit aur API level par test karo — fast feedback, aasan debugging.\n- **Ice-cream cone anti-pattern** — sirf UI tests ka dher: slow suite, flaky, mehnga maintenance.\n- Pyramid follow karne se suite fast, stable aur maintainable rehti hai.\n\n**Diagram:** Refer to Automation Pipeline diagram."
      }
    ]
  },
  {
    "id": "skills-for-automation",
    "number": "5.2",
    "title": "Skills Needed for Automation",
    "subtitle": "Automation tester ke paas kaunsi technical aur analytical skills honi chahiye",
    "icon": "users",
    "accent": "#ff0080",
    "englishDefinition": "Automation testing requires a combination of technical and analytical skills: proficiency in at least one programming language, understanding of HTML/DOM and locator strategies, knowledge of the test automation framework and design patterns such as Page Object Model, version control with Git, CI/CD pipeline configuration, API and database knowledge for validation and test data setup, debugging and log analysis ability, and domain plus analytical thinking to decide what is worth automating.",
    "intro": "Automation tester sirf tool chalane wala nahi hota — wo ek software developer ki tarah sochta hai aur ek tester ki tarah risk dekhta hai. Isi combination ko 'testing mindset + coding skill' kehte hain, aur yahi best automation engineer banata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Technical Skills",
        "kicker": "Skill Set 1",
        "body": "1. **Programming language** — Java, Python ya JavaScript mein se ek par gehri pakad: loops, functions, OOP, exceptions, collections, file handling. Ye automation ka base hai.",
        "body2": "2. **HTML, CSS aur DOM** — page ka structure samajhna, kyunki locator likhna DOM padhne ka kaam hai. 3. **Locator strategy** — id, name, CSS selector, XPath, relative XPath, shadow DOM. 4. **Version control** — Git branch, commit, merge, pull request, code review.",
        "chips": ["Programming", "DOM / HTML", "Locators", "Git", "SQL"]
      },
      {
        "type": "definition",
        "title": "Framework Aur Process Skills",
        "kicker": "Skill Set 2",
        "body": "5. **Framework design** — Page Object Model, data driven, keyword driven, hybrid, reporting aur logging setup. 6. **CI/CD** — Jenkins, GitHub Actions, pipeline YAML, Docker basics, headless execution.",
        "body2": "7. **API testing** — REST, JSON, status codes, Postman/RestAssured, authentication — kyunki UI se pehle API level par setup aur validation karna padta hai. 8. **Database** — SQL se test data verify karna. 9. **Debugging** — logs, stack trace, breakpoint, screenshot, flaky test analysis.",
        "chips": ["POM", "CI/CD", "API + JSON", "Docker", "Debugging"]
      },
      {
        "type": "diagram",
        "title": "Skills Map",
        "kicker": "Diagram",
        "diagram": "st5-automation-skills",
        "caption": "Programming, locators, framework, Git, CI/CD, API/DB, debugging aur domain skills"
      },
      {
        "type": "points",
        "title": "Non-Technical Skills",
        "kicker": "Soft Skills",
        "points": [
          "Analytical thinking — kaunsa test automate karna worth hai, kaunsa nahi.",
          "Domain knowledge — business flow samajhne se hi sahi assertion likhi jaati hai.",
          "Patience aur persistence — flaky test ka root cause dhoondhna time maangta hai.",
          "Communication — developer ko clear bug report, manager ko ROI explain karna.",
          "Documentation habit — framework README, test data setup, run steps likhna.",
          "Ownership — failing suite ko 'environment ka issue' bol kar chhodna nahi."
        ]
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Ek programming language par pakad sabse pehli zaroorat hai — Java, Python ya JavaScript.",
          "DOM/HTML aur locator strategy ke bina stable script nahi banti.",
          "Framework design (POM, data driven, reporting) automation ko scale deta hai.",
          "Git, CI/CD, API aur SQL — modern automation tester ka daily toolkit.",
          "Debugging patience sabse under-rated skill hai — flaky test ka root cause yahin se milta hai.",
          "Domain + analytical thinking decide karti hai ki automation ROI deta hai ya nahi."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What skills are required for automation testing? Explain technical and non-technical skills.",
        "answer": "**Automation testing skills:**\n\n**A. Technical skills:**\n1. **Programming** — Java / Python / JavaScript: OOP, loops, functions, exception handling, collections.\n2. **HTML, CSS, DOM** — page structure padhna, element attributes samajhna.\n3. **Locator strategy** — id, name, CSS selector, relative XPath, shadow DOM, iframe.\n4. **Framework design** — Page Object Model, data driven, keyword driven, hybrid, reporting/logging.\n5. **Version control** — Git: branch, commit, merge, conflict resolve, pull request.\n6. **CI/CD** — Jenkins / GitHub Actions, pipeline config, headless run, Docker basics.\n7. **API testing** — REST, JSON, status codes, auth tokens, Postman/RestAssured.\n8. **Database** — SQL queries se data setup aur verification.\n9. **Debugging** — logs, stack trace, breakpoints, screenshot, flaky analysis.\n\n**B. Non-technical skills:**\n- Analytical thinking (kya automate karna hai)\n- Domain / business knowledge\n- Communication aur bug reporting\n- Documentation aur ownership\n- Patience (root cause hunting)\n\n**Diagram:** Refer to Skills Map diagram."
      },
      {
        "question": "Why is programming knowledge important for an automation tester?",
        "answer": "**Kyun zaroori hai:**\n\n1. **Script likhna** — tool ka API use karke steps aur assertions likhne padte hain; ye programming hi hai.\n2. **Logic aur reusability** — loops se 100 data rows, functions se repeated steps, conditions se dynamic flow.\n3. **Framework banana** — POM classes, utility methods, config reader, custom wait — sab code hai.\n4. **Exception handling** — flaky element, timeout, stale element ko gracefully handle karna.\n5. **Debugging** — stack trace padhna aur root cause tak pahunchne ke liye code samajhna zaroori.\n6. **Version control + CI** — code review, merge, pipeline script — sab developer tools hain.\n7. **API aur DB level testing** — HTTP client, JSON parse, SQL query — programming skill.\n\n**Bina programming ke:** record & playback tak seemit ho jaate hain, jo brittle hota hai; framework scale nahi karta; flaky test fix nahi hota.\n\n**Rule:** Ek language par gehri pakad > teen languages par superficial knowledge.\n\n**Diagram:** Refer to Skills Map diagram."
      },
      {
        "question": "How does domain knowledge help in automation testing?",
        "answer": "**Domain knowledge ka role:**\n\n1. **Sahi test chunna** — business critical flow (payment, login, order) pehle automate hota hai.\n2. **Sahi assertion** — sirf button click verify nahi, business rule verify (tax 18%, discount cap, seat lock 10 min).\n3. **Test data design** — domain ke valid/invalid combinations pata hote hain (pincode format, GSTIN, IFSC).\n4. **Risk-based prioritisation** — jahan defect ka business impact zyada, wahan suite strong.\n5. **Defect ki severity** — \"amount ka rounding\" minor lagta hai, par finance domain mein critical hai.\n6. **Communication** — developer aur business team se same bhasha mein baat.\n7. **Case study / ROI** — domain ke numbers (manual hours, defect cost) se hi automation ka fayda explain hota hai.\n\n**Example:** Banking domain mein tester jaanta hai ki \"same day NEFT cut-off 4 PM\" — to test usi scenario par banega, random click-flow par nahi.\n\n**Diagram:** Refer to Skills Map diagram."
      }
    ]
  },
  {
    "id": "scope-of-automation",
    "number": "5.3",
    "title": "Scope of Automation",
    "subtitle": "Kya automate karein, kitna karein aur kab — ROI ke saath decision",
    "icon": "target",
    "accent": "#00aaff",
    "englishDefinition": "The scope of automation defines which test cases, features and levels of the application will be automated, and to what extent. It is decided using factors such as the criticality of the feature, the frequency of test execution, the stability of the requirements and UI, the complexity of the test case, the availability of test data and tools, and the return on investment, which compares the cost of automating and maintaining the script with the manual execution effort saved over time.",
    "intro": "Automation ka scope decide karna utna hi important hai jitna script likhna. Sab kuch automate karne ki koshish karne wali team aksar aisi suite bana deti hai jo dheere chalti hai, baar-baar fail hoti hai aur maintain karne mein pura sprint nikal jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Scope Ka Matlab Kya Hai",
        "kicker": "Definition",
        "body": "Scope of automation ka matlab hai: kaunse test cases, kaunse modules, kaunse test levels (unit, API, UI) aur kitni percentage automate hogi — aur ye kis timeline mein hoga.",
        "body2": "Scope test plan mein likha jaata hai. Ise test se pehle decide karte hain, kyunki baad mein badalna mehnga hota hai. Achha scope 3 sawaalon ka jawab deta hai: **kya** automate karna hai, **kitna** (percentage) aur **kab tak** (release ke hisaab se).",
        "chips": ["Test cases", "Modules", "Test levels", "% coverage", "Timeline"]
      },
      {
        "type": "points",
        "title": "Automate Karein Ya Nahi — Criteria",
        "kicker": "Decision Criteria",
        "points": [
          "**Frequency** — jo test har build par chalta hai, wo automate karo (regression, smoke).",
          "**Stability** — requirement aur UI stable ho, tabhi script tikegi.",
          "**Criticality** — business critical flow (payment, login) hamesha priority.",
          "**Repetitiveness** — same steps different data se (1000 rows) — automation ka best case.",
          "**Measurable output** — pass/fail saaf decide ho sake, judgement na chahiye.",
          "**Complexity vs value** — bahut complex test jiska fayda kam, usse manual rakho.",
          "**Tool feasibility** — CAPTCHA/OTP/biometric/hardware — tool support nahi to skip.",
          "**ROI** — (manual runs × time) > (script banane + maintain karne ka time) hone par automate."
        ]
      },
      {
        "type": "cards",
        "title": "Automation Ke Levels",
        "kicker": "Where To Automate",
        "cards": [
          {
            "icon": "cube",
            "title": "Unit Level",
            "body": "Fastest, cheapest, sabse zyada tests. Developer likhta hai, milliseconds mein chalta hai."
          },
          {
            "icon": "server",
            "title": "API / Service",
            "body": "Business logic ka sabse achha ROI — UI se fast aur stable, data driven aasan."
          },
          {
            "icon": "dashboard",
            "title": "UI / E2E",
            "body": "Sirf critical user journeys — slow aur brittle, isliye kam."
          },
          {
            "icon": "database",
            "title": "Database",
            "body": "Data integrity, constraint, migration verification — direct SQL se."
          },
          {
            "icon": "performance",
            "title": "Performance",
            "body": "Load, stress, spike — JMeter, k6, Gatling se automate."
          },
          {
            "icon": "security",
            "title": "Security",
            "body": "Vulnerability scan, auth checks — OWASP ZAP, dependency scan."
          }
        ]
      },
      {
        "type": "diagram",
        "title": "Automation Scope",
        "kicker": "Diagram",
        "diagram": "st5-automation-scope",
        "caption": "Automate vs manual rakhne ke criteria aur 5 decision questions"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Scope batata hai kya, kitna aur kab tak automate hoga — test plan ka hissa.",
          "Criteria: frequency, stability, criticality, repeatability, measurable output, ROI.",
          "Regression aur smoke automation ke sabse safe candidates hain.",
          "Exploratory, usability aur one-time tests manual hi rehte hain.",
          "Levels: unit → API → UI, plus database, performance aur security automation.",
          "Scope likho, warna team 'sab automate' karne chali jaati hai aur suite bojh ban jaati hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is the scope of automation? What factors determine it?",
        "answer": "**Scope of Automation:** Ye define karta hai ki kaunse test cases, modules aur levels automate honge, kitni coverage hogi aur kis timeline mein. Ise test planning phase mein decide karte hain.\n\n**Determining factors:**\n1. **Frequency of execution** — regression/smoke har build par chalta hai → automate.\n2. **Criticality** — payment, login, checkout jaise business-critical flows pehle.\n3. **Stability of requirements/UI** — unstable feature automate karne se script roz tootegi.\n4. **Complexity** — bahut complex + low value test ko manual rakho.\n5. **Test data availability** — data hi nahi to data-driven automation nahi banegi.\n6. **Tool feasibility** — CAPTCHA, OTP, biometric, hardware simulation.\n7. **Team skill aur time** — framework banane ka bandwidth.\n8. **ROI** — manual effort saved vs automation + maintenance cost.\n9. **Environment** — stable test environment available hai ya nahi.\n\n**Diagram:** Refer to Automation Scope diagram."
      },
      {
        "question": "Explain ROI in test automation with an example.",
        "answer": "**ROI (Return on Investment):** Automation se bacha hua manual effort, automation banane aur maintain karne ke kharch ke against.\n\n**Formula:** `ROI = (manual effort saved − automation cost) / automation cost`\n\n**Example:** Regression suite = 300 test cases, manual execution = 5 din (40 hours) per release.\n- Automation cost (one time) = 300 scripts × 2 hours = 600 hours + framework 100 hours = **700 hours**.\n- Maintenance per release = 40 hours.\n- Manual cost per release = 40 hours.\n\n| Release | Manual cost | Automation cost (cumulative) |\n|---|---|---|\n| 1 | 40 h | 700 + 40 = 740 h |\n| 5 | 200 h | 700 + 200 = 900 h |\n| 20 | 800 h | 700 + 800 = 1500 h |\n\nBreak-even: `700 / (40 − 40)` — maintenance hi manual ke barabar ho gaya to ROI infinite nahi hota; real projects mein maintenance 20–30% hota hai. Agar maintenance 10 hours/release ho, to break-even = 700 / (40 − 10) ≈ **24 releases**.\n\n**Isliye:** ROI tab positive hota hai jab test frequently chalta ho, stable ho aur maintenance kam ho.\n\n**Diagram:** Refer to Automation Scope diagram."
      },
      {
        "question": "Which types of testing should not be automated and why?",
        "answer": "**Jinhe automate nahi karna chahiye:**\n\n1. **Exploratory testing** — naya defect dhoondhne ke liye soch aur judgement chahiye, script predefined steps hi chalati hai.\n2. **Ad hoc testing** — bina plan ke random checks, automate karne ka koi repeat value nahi.\n3. **Usability / UX testing** — \"feel\", layout, colour, readability — insaan ka perception chahiye.\n4. **One-time tests** — sirf ek baar chalna hai, script banane ka effort waste.\n5. **Rapidly changing UI** — prototype ya daily changing design; script roz tootegi.\n6. **Requirement unclear** — pehle manual explore karo, phir automate.\n7. **CAPTCHA / OTP / biometric / hardware** — tool se reliably handle nahi hota.\n8. **Accessibility judgement** — kuch checks automate ho sakte hain, par human review zaroori.\n9. **Negative business judgement** — \"kya ye legal/ethical hai\" type decisions.\n\n**Rule:** Automation wahan lagao jahan **repeatable + measurable** ho; jahan **judgement** chahiye wahan insaan.\n\n**Diagram:** Refer to Automation Scope diagram."
      }
    ]
  },
  {
    "id": "automation-design-architecture",
    "number": "5.4",
    "title": "Design and Architecture for Automation",
    "subtitle": "Framework ka layered design, POM aur framework ke prakaar",
    "icon": "layers",
    "accent": "#ff8800",
    "englishDefinition": "An automation framework is a set of guidelines, coding standards, reusable components, and supporting libraries that provide structure to automated test scripts. Its design and architecture typically include a layered structure of test data, test scripts, page objects, utilities and the driver/runner layer, and it is implemented using approaches such as linear (record and playback), modular, data-driven, keyword-driven, hybrid and behaviour-driven development, with the Page Object Model being the most widely used design pattern for keeping locators and page behaviour separate from test logic.",
    "intro": "Framework ka matlab sirf folder structure nahi — ye rules ka set hai: test kaise likha jayega, data kahan se aayega, report kaise banegi, failure par screenshot kaise lega. Achha architecture ek hi jagah change se poori suite ko update kar deta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Automation Framework Kya Hai",
        "kicker": "Definition",
        "body": "Automation framework ek structure hai jo test scripts ko organised rakhta hai: coding standards, reusable functions, config management, reporting, logging, test data handling aur execution control.",
        "body2": "Framework ka fayda: **reusability** (same login function har test mein), **maintainability** (UI change par ek hi file badalni pade), **readability** (test padhne se intent samajh aaye) aur **scalability** (100 se 1000 tests, parallel runs).",
        "chips": ["Structure", "Reusable", "Maintainable", "Config driven", "Report ready"]
      },
      {
        "type": "cards",
        "title": "Layered Architecture",
        "kicker": "Layers",
        "cards": [
          {
            "icon": "table",
            "title": "Test Data Layer",
            "body": "Excel, JSON, CSV, DB — input data aur expected values scripts se bahar."
          },
          {
            "icon": "code",
            "title": "Test Script Layer",
            "body": "Business steps + assertions. Yahan koi locator nahi hota."
          },
          {
            "icon": "layers",
            "title": "Page Object Layer",
            "body": "Har page ki class: locators + methods (login(), addToCart())."
          },
          {
            "icon": "wrench",
            "title": "Utility Layer",
            "body": "Wait, config reader, logger, screenshot, data reader, reporting."
          },
          {
            "icon": "server",
            "title": "Driver / Runner",
            "body": "WebDriver setup, browser factory, TestNG/pytest runner, CI hooks."
          },
          {
            "icon": "doc",
            "title": "Reporting Layer",
            "body": "HTML report, Allure, JUnit XML, screenshot on failure, video."
          }
        ]
      },
      {
        "type": "points",
        "title": "Framework Ke Prakaar",
        "kicker": "Types",
        "points": [
          "**Linear (record & playback)** — step by step script, koi reuse nahi. Chhota kaam, seekhne ke liye theek.",
          "**Modular** — application ko modules mein baanta, har module ki alag script + reusable function.",
          "**Data driven** — same script, data Excel/JSON/CSV se; 1 script × 1000 data rows.",
          "**Keyword driven** — action words (login, click, verify) table mein likhe jaate hain, engine unhe run karta hai.",
          "**Hybrid** — data driven + keyword + POM ka mix; industry ka default choice.",
          "**BDD (Behaviour driven)** — Given-When-Then feature file (Cucumber), business team bhi padh sakti hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Framework Architecture",
        "kicker": "Diagram",
        "diagram": "st5-automation-architecture",
        "caption": "Layered design, framework ke prakaar, POM aur external config"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Framework guidelines + reusable components + libraries ka set hai, sirf folder structure nahi.",
          "Layered design: data → scripts → page objects → utilities → driver/runner.",
          "POM ka core rule: locators aur page methods ek page class mein, test mein sirf business steps.",
          "Framework ke prakaar: linear, modular, data driven, keyword driven, hybrid, BDD.",
          "Config, URL, credentials environment variables se aayein — code mein hard-code nahi.",
          "Achha framework = reusable + maintainable + readable + report friendly."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is an automation framework? Explain the architecture of a test automation framework.",
        "answer": "**Automation Framework:** Guidelines, coding standards, reusable components aur libraries ka set jo test scripts ko structure deta hai — execution, data, reporting aur maintenance ke liye.\n\n**Typical layered architecture:**\n\n1. **Test Data Layer** — Excel/JSON/CSV/DB se input aur expected values.\n2. **Test Script Layer** — business steps + assertions; yahan locators nahi hote.\n3. **Page Object Layer** — har page ki class: locators + page methods (`login()`, `addToCart()`).\n4. **Utility Layer** — waits, config reader, logger, screenshot, data reader, retry.\n5. **Driver / Runner Layer** — browser factory, WebDriver setup, TestNG/pytest, CI hooks.\n6. **Reporting Layer** — HTML/Allure report, screenshot on failure, JUnit XML.\n\n**Dependency direction:** upar ki layer neeche wali par depend karti hai, ulta nahi. Isi liye UI change sirf page object layer ko touch karta hai.\n\n**Diagram:** Refer to Framework Architecture diagram."
      },
      {
        "question": "Explain the types of automation frameworks with their advantages and disadvantages.",
        "answer": "**1. Linear (Record & Playback)**\n- Har test ek script, steps sequential.\n- ✔ Simple, jaldi shuru · ✘ Reuse nahi, brittle, maintenance zyada.\n\n**2. Modular**\n- Application modules mein baanti, har module ke reusable functions.\n- ✔ Reuse, parallel kaam · ✘ Data handling weak, scale par messy.\n\n**3. Data Driven**\n- Same script, data Excel/JSON/CSV se.\n- ✔ 1 script × hazaron data sets, non-technical data update · ✘ data design aur validation chahiye.\n\n**4. Keyword Driven**\n- Action words (login, click, verify) table mein; engine execute karta hai.\n- ✔ Non-programmer bhi test likh sakta · ✘ Engine banana complex, debugging mushkil.\n\n**5. Hybrid**\n- Data driven + keyword + POM + reporting ka mix (industry default).\n- ✔ Flexible, scalable, maintainable · ✘ Design aur skill zyada chahiye.\n\n**6. BDD**\n- Given-When-Then feature file (Cucumber/SpecFlow).\n- ✔ Business readable, collaboration · ✘ Step definitions maintain karna padta hai.\n\n**Diagram:** Refer to Framework Architecture diagram."
      },
      {
        "question": "What is the Page Object Model? Explain its advantages with an example.",
        "answer": "**Page Object Model (POM):** Ek design pattern jisme har web page (ya page ka section) ke liye ek class banti hai — us class mein page ke **locators** aur **page methods** hote hain. Test scripts sirf in methods ko call karti hain, locators ko touch nahi karti.\n\n**Example:**\n```java\nclass LoginPage {\n  By email = By.id(\"email\");\n  By pass  = By.id(\"password\");\n  By btn   = By.cssSelector(\"button[type=submit]\");\n\n  void login(String u, String p) {\n    driver.findElement(email).sendKeys(u);\n    driver.findElement(pass).sendKeys(p);\n    driver.findElement(btn).click();\n  }\n}\n\n// test\nnew LoginPage().login(\"riya@mail.com\", \"Secret@123\");\n```\n\n**Advantages:**\n1. **Single place for change** — button ka id badla? sirf LoginPage badlo, 50 tests safe.\n2. **Reusability** — `login()` har test mein use ho sakta hai.\n3. **Readability** — test business language jaisa lagta hai.\n4. **Less duplication** — locators ek jagah, copy-paste nahi.\n5. **Better maintenance** — maintenance cost 40–60% kam.\n6. **Team friendly** — naya member test padh kar flow samajh jaata hai.\n\n**Diagram:** Refer to Framework Architecture diagram."
      }
    ]
  },
  {
    "id": "requirements-test-tool",
    "number": "5.5",
    "title": "Requirements for a Test Tool",
    "subtitle": "Automation tool chunne ke criteria aur evaluation ka tareeka",
    "icon": "tools",
    "accent": "#aa00ff",
    "englishDefinition": "The requirements for a test tool are the criteria used to select an automation tool: support for the required platforms, browsers and technologies; the scripting language and IDE support; the ability to identify and handle objects including dynamic elements; reporting and log quality; integration with test management, defect trackers and CI/CD tools; support for data parameterisation; cost including licence, training and maintenance; and scalability, vendor support and community strength. A short pilot project is the recommended way to evaluate these requirements before purchase.",
    "intro": "Tool selection ek technical decision nahi, business decision hai. Sabse popular tool aapke project ke liye sahi ho, ye zaroori nahi. Isliye requirements list banao, 2–3 tools ka pilot chalao, aur total cost of ownership dekho.",
    "sections": [
      {
        "type": "definition",
        "title": "Tool Requirements Kya Hain",
        "kicker": "Definition",
        "body": "Test tool ke requirements wo criteria hain jinse decide hota hai ki ek automation tool project ke liye fit hai ya nahi — technology support se lekar cost aur support tak.",
        "body2": "Ye requirements SRS ki tarah likhi jaati hain aur evaluation matrix banaya jaata hai: har criterion ko weight do, har tool ko score do. Scores ke saath cost dekho — sabse zyada score wala tool hamesha sabse sasta nahi hota.",
        "chips": ["Platform", "Scripting", "Object ID", "Reporting", "Integration", "Cost"]
      },
      {
        "type": "cards",
        "title": "8 Main Requirements",
        "kicker": "Criteria",
        "cards": [
          {
            "icon": "globe",
            "title": "1. Platform Support",
            "body": "OS, browser versions, mobile, desktop, API — jo product support karta hai wahi tool support kare."
          },
          {
            "icon": "code",
            "title": "2. Scripting Language",
            "body": "Team ki language (Java/Python/JS), IDE support, debugging, code reuse."
          },
          {
            "icon": "search",
            "title": "3. Object Identification",
            "body": "Stable locators, object repository, dynamic element aur iframe handling."
          },
          {
            "icon": "doc",
            "title": "4. Reporting",
            "body": "Pass/fail summary, step-wise log, screenshot on failure, export JUnit XML/HTML."
          },
          {
            "icon": "refresh",
            "title": "5. Integration",
            "body": "CI/CD (Jenkins, GitHub Actions), JIRA, test management, Docker, cloud grid."
          },
          {
            "icon": "table",
            "title": "6. Data Parameterisation",
            "body": "Excel/JSON/CSV/DB se data, loops, environment config support."
          },
          {
            "icon": "dollar",
            "title": "7. Cost & Licence",
            "body": "Licence model, training, hardware, maintenance — total cost of ownership."
          },
          {
            "icon": "expand",
            "title": "8. Scalability & Support",
            "body": "Parallel execution, grid, vendor help, community, release cadence."
          }
        ]
      },
      {
        "type": "points",
        "title": "Evaluation Aur Selection Process",
        "kicker": "How To Choose",
        "points": [
          "Requirements list banao — must-have vs nice-to-have.",
          "Market scan — 3–4 shortlisted tools (Selenium, Cypress, Playwright, TestCafe).",
          "Pilot project — 5–10 real test cases, har tool par 2–3 din.",
          "Metrics note karo — script banane ka time, run stability, debugging ease, report quality.",
          "TCO nikalo — licence + training + script development + maintenance (2–3 saal).",
          "Team feedback lo — jo tool team use nahi karegi, wo tool bekaar hai.",
          "Decision document banao — kyun ye tool chuna, kya trade-off hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Tool Requirements",
        "kicker": "Diagram",
        "diagram": "st5-test-tool-requirements",
        "caption": "8 requirements, pilot evaluation aur total cost of ownership"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Tool selection requirements: platform, scripting, object ID, reporting, integration, data, cost, scalability.",
          "Object identification aur reporting quality sabse zyada practical difference banate hain.",
          "Popularity ≠ fit — project ki technology aur team ki skill dekho.",
          "Pilot project (5–10 real cases) demo se zyada sach batata hai.",
          "TCO = licence + training + script development + maintenance.",
          "Community aur vendor support long term mein maintenance cost kam karte hain."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What are the requirements for selecting a test automation tool?",
        "answer": "**Requirements / criteria for tool selection:**\n\n1. **Platform & technology support** — OS, browsers, mobile (Android/iOS), desktop, API, technology stack (React, Angular, PHP).\n2. **Scripting language & IDE** — team ki known language, debugging, code reuse, IntelliSense.\n3. **Object identification** — stable locator strategy, object repository, dynamic element, iframe, shadow DOM.\n4. **Reporting & logging** — step-wise log, screenshot/video on failure, HTML/Allure/JUnit XML export.\n5. **Integration** — CI/CD (Jenkins, GitHub Actions), JIRA/defect tracker, test management, Docker, cloud grid.\n6. **Data parameterisation** — Excel/JSON/CSV/DB driven data, environment config.\n7. **Cost & licence** — open source vs commercial, training, infra, support contract.\n8. **Scalability & parallel execution** — grid, cloud, headless.\n9. **Vendor support & community** — docs, forum activity, release frequency.\n10. **Learning curve** — team kitni jaldi productive hogi.\n\n**Diagram:** Refer to Tool Requirements diagram."
      },
      {
        "question": "How do you evaluate and select an automation tool for a project?",
        "answer": "**Evaluation process:**\n\n1. **Requirement gathering** — technology stack, browsers, test types, CI pipeline, budget, team skill.\n2. **Shortlisting** — 3–4 tools (Selenium, Cypress, Playwright, TestCafe) criteria matrix par.\n3. **Weighted scoring** — har criterion ko weight (must-have = high), tool ko score.\n4. **Pilot / POC** — 5–10 real test cases par 2–3 din: script time, stability, debugging, report.\n5. **TCO calculation** — licence + training + script development + maintenance over 2–3 years.\n6. **Team validation** — jis tool ko team adopt nahi karegi, wo fail hai.\n7. **Decision document** — rationale, trade-offs, next steps.\n\n**Fixed costs vs hidden costs:**\n| Visible | Hidden |\n|---|---|\n| Licence | Training time |\n| Script development | Maintenance (UI change) |\n| Infra | Flaky-test debugging |\n| | Framework build |\n\n**Diagram:** Refer to Tool Requirements diagram."
      },
      {
        "question": "Compare Selenium, Cypress and Playwright as tool choices.",
        "answer": "**Comparison:**\n\n| Point | Selenium | Cypress | Playwright |\n|---|---|---|---|\n| Language | Java, Python, C#, JS, Ruby | JS/TS only | JS/TS, Python, Java, C# |\n| Browser control | WebDriver (outside browser) | In-browser | Browser protocol/CDP |\n| Browsers | Chrome, Firefox, Edge, Safari | Chrome family, Firefox (WebKit limited) | Chromium, Firefox, WebKit |\n| Parallelism | Grid / cloud | Cypress Cloud | Built-in workers |\n| Auto-wait | Manual (explicit waits) | Yes | Yes |\n| Multi-tab / multiple origin | Yes | Limited | Yes |\n| API testing | Library ke saath | `cy.request` | `request` fixture |\n| Learning curve | Medium–high | Low–medium | Low–medium |\n| Best for | Cross-browser, enterprise, legacy | SPA, JS teams | Modern web, fast CI |\n\n**Selection rule:** Technology + team language + browser matrix + CI speed dekho; popularity alone decision na bane.\n\n**Diagram:** Refer to Tool Requirements diagram."
      }
    ]
  },
  {
    "id": "challenges-in-automation",
    "number": "5.6",
    "title": "Challenges in Automation",
    "subtitle": "Flaky tests, maintenance, cost aur skill gap — aur unke solutions",
    "icon": "alert",
    "accent": "#00ff88",
    "englishDefinition": "Common challenges in test automation include flaky tests that pass and fail without any code change, high initial investment of time and cost, continuous maintenance as the application UI and requirements change, handling dynamic elements and asynchronous behaviour, the skill gap in the test team, test environment and test data instability, a false sense of confidence when a green suite hides real defects, and slow test suites that delay feedback. These are addressed with stable locators, explicit waits, framework design, parallel execution and a disciplined review process.",
    "intro": "Automation ki failure ka #1 reason tool nahi hota — maintenance aur test design hota hai. Jo team flaky test ko ignore karti hai, uski suite 6 mahine mein bekaar ho jaati hai, kyunki koi bhi failure par vishwas nahi bachta.",
    "sections": [
      {
        "type": "definition",
        "title": "Flaky Tests — Sabse Bada Dushman",
        "kicker": "Definition",
        "body": "Flaky test wo test hai jo same code par kabhi pass hota hai, kabhi fail — bina kisi change ke. Iske kaaran: timing issue, dynamic element, network delay, shared test data, test order dependency aur environment instability.",
        "body2": "Flakiness ka asar cumulative hota hai: agar har test 99% reliable hai aur suite mein 100 tests hain, to poora suite green hone ki sambhavna 0.99^100 ≈ **37%** hi hai. Isliye team failure ko ignore karna shuru kar deti hai — aur asli defect bhi ignore ho jaata hai.",
        "chips": ["Flaky", "Timing", "Dynamic", "Test data", "Order dependency"]
      },
      {
        "type": "points",
        "title": "Bade Challenges Aur Solutions",
        "kicker": "Challenges",
        "points": [
          "**High initial cost** — framework + scripts + training. Solution: pilot se shuru, ROI 3–6 runs ke baad dikhta hai.",
          "**Maintenance** — UI change se scripts tootti hain. Solution: POM, stable locators, kam UI-level tests.",
          "**Dynamic elements** — id har load par badalta hai. Solution: data-testid, relative XPath, role-based locators.",
          "**Async / timing** — element late aata hai. Solution: explicit waits, `Thread.sleep()` kabhi nahi.",
          "**Skill gap** — tester ko coding nahi aati. Solution: training, pairing, developer support.",
          "**Environment & data** — env down, shared DB, test data khatam. Solution: Docker, seeded data, isolated DB.",
          "**False confidence** — sab green par production mein bug. Solution: strong assertions + negative cases + exploratory testing.",
          "**Slow suite** — 6 ghante ka run. Solution: parallel, smoke-first ordering, sharding, only affected tests."
        ]
      },
      {
        "type": "cards",
        "title": "Flaky Test Ko Kaise Handle Karein",
        "kicker": "Best Practice",
        "cards": [
          {
            "icon": "search",
            "title": "Root Cause Dhundo",
            "body": "Screenshot, video, log aur trace ke saath failure reproduce karo — retry se problem chhupti hai."
          },
          {
            "icon": "refresh",
            "title": "Quarantine Karo",
            "body": "Flaky test ko alag suite mein daalo, fix ya delete karo — main suite green rakho."
          },
          {
            "icon": "clock",
            "title": "Smart Waits Lagao",
            "body": "ExpectedConditions / auto-wait use karo, fixed sleep nahi."
          },
          {
            "icon": "target",
            "title": "Isolate Data",
            "body": "Har test apna data banaye (API factory), shared row par depend na kare."
          },
          {
            "icon": "grid",
            "title": "Parallel + Sharding",
            "body": "Suite time kam karo; par pehle test independent banao."
          },
          {
            "icon": "eye",
            "title": "Monitor Karo",
            "body": "Flaky rate track karo — 2% se zyada ho to test fix/remove karo."
          }
        ]
      },
      {
        "type": "diagram",
        "title": "Automation Challenges",
        "kicker": "Diagram",
        "diagram": "st5-automation-challenges",
        "caption": "8 challenges with fixes, flaky test math aur quarantine strategy"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Flaky tests, maintenance, cost, dynamic elements, skill gap, environment aur slow suite main challenges hain.",
          "100 tests × 99% reliability = sirf 37% chance poora suite green ho.",
          "Maintenance kam karne ka tareeka: POM + stable locators + kam UI tests.",
          "Sleep ki jagah explicit wait, shared data ki jagah per-test data.",
          "Flaky test ko quarantine karo, ignore nahi — warna suite par bharosa khatam.",
          "Green suite ka matlab 'bug nahi' nahi hota — negative cases aur exploratory testing chahiye."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What are the common challenges in test automation? Suggest solutions.",
        "answer": "**Challenges and solutions:**\n\n1. **Flaky tests** — same code par pass/fail. *Fix:* explicit waits, stable locators, isolated data, root-cause analysis (retry se chhupao nahi).\n2. **High initial cost** — framework, scripts, training. *Fix:* pilot se shuru karo, phased rollout, ROI 3–6 runs ke baad.\n3. **Maintenance** — UI change se scripts tootti hain. *Fix:* Page Object Model, data-testid attributes, kam UI tests.\n4. **Dynamic elements** — badalte id/class. *Fix:* relative XPath, role/text locators, auto-healing (limited).\n5. **Async behaviour** — AJAX, spinner, delayed render. *Fix:* explicit/fluent waits, network idle wait.\n6. **Skill gap** — coding nahi aati. *Fix:* training, pairing, coding standards, code review.\n7. **Environment/data issues** — env down, shared DB. *Fix:* Docker, seeded data, per-test namespace.\n8. **False confidence** — green suite, production bug. *Fix:* strong assertions, negative cases, exploratory testing.\n9. **Slow suite** — feedback late. *Fix:* parallel, sharding, smoke first, test impact analysis.\n10. **Test order dependency** — ek test doosre par depend. *Fix:* independent atomic tests.\n\n**Diagram:** Refer to Automation Challenges diagram."
      },
      {
        "question": "What is a flaky test? Explain its causes and how to fix flakiness.",
        "answer": "**Flaky test:** Wo automated test jo bina code change ke kabhi pass aur kabhi fail hota hai. Ye non-deterministic hota hai.\n\n**Causes:**\n1. **Timing** — element render hone se pehle action, `Thread.sleep()` par depend.\n2. **Dynamic locators** — auto-generated id/class har load par badalna.\n3. **Test order dependency** — test B ko test A ke banaye data par bharosa.\n4. **Shared test data** — parallel runs same row/account update karein.\n5. **Network/API latency** — slow response, timeout.\n6. **Animation / overlay** — loader ya toast click rok deta hai.\n7. **Environment** — unstable grid node, browser version mismatch.\n8. **Date/time aur locale** — timezone, currency format.\n\n**Fixes:**\n- Explicit waits with conditions (`visibilityOfElementLocated`), auto-wait tools (Cypress/Playwright).\n- Stable locators (`data-testid`, relative XPath), kabhi index/absolute XPath nahi.\n- Har test apna data banaye, isolated environment (Docker, unique user per run).\n- Suite failure par screenshot + log + trace, root cause fix — retry sirf temporary band-aid.\n- Flaky test quarantine karo aur flaky-rate monitor karo.\n\n**Math:** 100 tests × 99% = 0.99^100 ≈ 37% chance sab green.\n\n**Diagram:** Refer to Automation Challenges diagram."
      },
      {
        "question": "Explain the concept of ROI and false confidence in automation.",
        "answer": "**ROI (Return on Investment):**\n- Automation ka fayda = bacha hua manual effort − (script development + maintenance cost).\n- Positive ROI ka matlab test frequently chalta hai, stable hai aur maintenance kam hai.\n- Example: 300 regression cases, manual 40 h/release; automation setup 700 h + 10 h maintenance/release → break-even ≈ 24 releases.\n- **Nuksaan:** Agar feature unstable hai to maintenance manual effort se zyada ho jaata hai — ROI negative.\n\n**False confidence (green suite syndrome):**\n- Suite green hai iska matlab ye nahi ki product defect-free hai.\n- Kaaran: kamzor assertions (sirf click, verify nahi), happy-path-only tests, skipped tests, stale scripts, UI check na karna.\n- 1000 tests pass ho rahe hain par ek bhi business rule verify nahi ho raha — worst case.\n- **Fix:** meaningful assertions (DB/API/UI cross-check), negative cases, exploratory testing, mutation-style review, coverage review.\n\n**Line:** Automation confidence deta hai **repeatable checks** par, **quality** ka poora bharosa nahi.\n\n**Diagram:** Refer to Automation Challenges diagram."
      }
    ]
  },
  {
    "id": "bug-tracking-debugging",
    "number": "5.7",
    "title": "Tracking the Bug and Debugging",
    "subtitle": "Defect life cycle, achi bug report aur debugging techniques",
    "icon": "bug",
    "accent": "#0047ff",
    "englishDefinition": "Bug tracking is the process of recording, prioritising, assigning, fixing and verifying defects through a defect tracking tool, following a defect life cycle of new, assigned, open, fixed, retest, verified and closed states, with rejected, deferred and reopened as alternate paths. Debugging is the process of locating the root cause of a defect using techniques such as log analysis, reproducing the issue with minimum steps, breakpoints and step-through execution, binary search over code or commits, git bisect, and layer-by-layer isolation.",
    "intro": "Bug tracking aur debugging do alag kaam hain: tracking record rakhta hai ki defect ka kya hua, debugging us defect ka asli kaaran dhoondhta hai. Achha tester dono karta hai — 'button nahi dikh raha' likh kar chhod nahi deta, root cause tak jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Defect Life Cycle",
        "kicker": "Definition",
        "body": "Defect life cycle (bug cycle) wo states hain jinse ek defect guzarta hai: **New → Assigned → Open → Fixed → Retest → Verified → Closed**. Alternate paths: **Rejected** (bug nahi hai), **Deferred** (agle release mein), **Reopened** (fix kaam nahi kiya), **Duplicate**.",
        "body2": "Automation mein failure ke baad ye cycle aur bhi zaroori ho jaati hai, kyunki 90% failures par sawaal hota hai: 'product ka bug hai ya test ka bug?' Isi liye report mein evidence (screenshot, log, trace, build number) hona chahiye.",
        "chips": ["New", "Assigned", "Fixed", "Retest", "Closed", "Reopened"]
      },
      {
        "type": "cards",
        "title": "Achhi Bug Report Ke 5 Hiss",
        "kicker": "Bug Report",
        "cards": [
          {
            "icon": "file",
            "title": "1. Title",
            "body": "Ek line mein problem: 'Checkout: coupon apply karne par total update nahi hota'."
          },
          {
            "icon": "list",
            "title": "2. Steps to Reproduce",
            "body": "Numbered, minimum steps, exact data — koi extra step nahi."
          },
          {
            "icon": "target",
            "title": "3. Expected vs Actual",
            "body": "Kya hona chahiye tha, kya hua — screenshot ke saath."
          },
          {
            "icon": "server",
            "title": "4. Environment",
            "body": "Build/version, browser + version, OS, device, user role, data."
          },
          {
            "icon": "eye",
            "title": "5. Evidence + Severity",
            "body": "Screenshot/video, console log, network log, HAR, severity + priority."
          }
        ]
      },
      {
        "type": "points",
        "title": "Debugging Techniques",
        "kicker": "How To Debug",
        "points": [
          "**Log padho** — stack trace, assertion message, timestamp, request/response log.",
          "**Reproduce karo** — minimum steps aur same data se; agar reproduce nahi hota to environment note karo.",
          "**Breakpoint / step-through** — IDE debugger se variable value aur flow dekho.",
          "**Binary search** — code ke aadhe hisse ko comment/disable karke dekho bug kahan hai.",
          "**git bisect** — kis commit ne bug introduce kiya, automatically dhoondho.",
          "**Layer isolation** — UI, API ya database — teeno alag alag check karo.",
          "**Compare working vs failing** — jo test pass ho raha hai usse diff karo (data, timing, locator).",
          "**Screenshot + trace viewer** — Cypress/Playwright trace se step-by-step replay dekho."
        ]
      },
      {
        "type": "diagram",
        "title": "Bug Tracking and Debugging",
        "kicker": "Diagram",
        "diagram": "st5-bug-debugging",
        "caption": "Defect life cycle, debugging techniques aur 5-part bug report"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Defect life cycle: New → Assigned → Open → Fixed → Retest → Verified → Closed.",
          "Alternate states: Rejected, Deferred, Duplicate, Reopened.",
          "Bug report ke 5 hisse: title, steps, expected vs actual, environment, evidence + severity.",
          "Debugging techniques: logs, reproduce, breakpoints, binary search, git bisect, layer isolation.",
          "Root cause aur symptom alag hote hain — 'button nahi dikha' symptom hai, wajah API/CSS/permission ho sakti hai.",
          "Automation failure par screenshot + log attach karna aadha debugging pehle se hi kar deta hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the defect life cycle with a diagram reference.",
        "answer": "**Defect Life Cycle (Bug Cycle):** Defect ki states aur transitions.\n\n1. **New** — tester ne defect raise kiya, abhi review nahi hua.\n2. **Assigned** — lead ne developer ko assign kiya.\n3. **Open** — developer accept karke fix par kaam kar raha hai.\n4. **Fixed / Resolved** — code fix ho gaya, build mein aayega.\n5. **Retest** — tester fix ko same steps se verify karta hai.\n6. **Verified** — fix sahi mila; regression bhi check.\n7. **Closed** — defect band.\n\n**Alternate paths:**\n- **Rejected** — developer kehta hai bug nahi hai / duplicate / by design.\n- **Deferred** — fix agle release ke liye postpone.\n- **Reopened** — retest mein fail, wapas Open.\n- **Duplicate** — pehle se exist karta hai.\n\n**Severity vs Priority:** Severity = kitna bada defect (technical impact); Priority = kitni jaldi fix (business impact). High severity + low priority example: crash in a rarely used admin report.\n\n**Diagram:** Refer to Bug Tracking and Debugging diagram."
      },
      {
        "question": "What are the components of a good bug report? Give an example.",
        "answer": "**Components of a good bug report:**\n\n1. **Title** — short, specific, searchable: \"Checkout: coupon apply karne par order total update nahi hota\".\n2. **Steps to reproduce** — numbered, minimal, exact test data.\n3. **Expected result** — requirement ke mutabik kya hona chahiye.\n4. **Actual result** — kya hua (error message, wrong value, blank screen).\n5. **Environment** — build/version, browser + version, OS, device, user role, test data.\n6. **Evidence** — screenshot, video, console log, network/HAR, DB query output.\n7. **Severity + priority** — impact aur urgency.\n8. **Attachments/references** — requirement ID, related test case, duplicate check.\n\n**Example:**\n> **Title:** Coupon apply par order total update nahi hota (SUMMER20)\n> **Steps:** 1. Login as riya@mail.com 2. Add product SKU-101 (₹1200) 3. Cart → Apply coupon SUMMER20 4. Click Apply\n> **Expected:** Total ₹960 (20% off), success toast\n> **Actual:** Total ₹1200, toast \"Coupon applied\" but amount unchanged\n> **Env:** Build 4.2.1, Chrome 126, Windows 11, user role = customer\n> **Evidence:** screenshot + network log (POST /coupon 200, response discount:240)\n\n**Rule:** Developer ko reproduce karne ke liye poochhna na pade — report itni clear ho.\n\n**Diagram:** Refer to Bug Tracking and Debugging diagram."
      },
      {
        "question": "What is debugging? Explain the techniques used for debugging automated test failures.",
        "answer": "**Debugging:** Defect ka **root cause** dhoondhne aur fix karne ki process. Testing defect ko expose karti hai, debugging uska kaaran dhoondhti hai.\n\n**Techniques:**\n1. **Log analysis** — stack trace, assertion message, timestamps, HTTP status.\n2. **Reproduce with minimum steps** — same data/environment; agar sirf CI par fail hota hai to environment diff dekho.\n3. **Breakpoints / step-through** — IDE debugger se variable values check karo.\n4. **Binary search** — code ka aadha hissa disable karke dekho; ya data set ko aadha karo.\n5. **git bisect** — `git bisect start/good/bad` se bug introduce karne wala commit milta hai.\n6. **Layer isolation** — UI locator, API response, DB row — teeno alag verify karo.\n7. **Head vs headless, local vs CI comparison** — timing, resolution, viewport, network.\n8. **Trace/video replay** — Playwright trace, Cypress video se failure ke waqt ka state dekho.\n9. **Flaky analysis** — run 10 baar, pattern dekho (data? order? time?).\n\n**Common automation failures:** stale element, element not interactable, timeout, strict mode violation (multiple matches), auth/session expiry, test data missing.\n\n**Diagram:** Refer to Bug Tracking and Debugging diagram."
      }
    ]
  },
  {
    "id": "manual-vs-automated-testing",
    "number": "5.8",
    "title": "Manual vs Automated Testing",
    "subtitle": "Donon ka farak, fayde-nuksaan aur sahi combination",
    "icon": "half",
    "accent": "#ff0080",
    "englishDefinition": "Manual testing is the process in which a human tester executes test cases step by step, compares the actual result with the expected result, and records observations, using judgement and experience. Automated testing uses tools and scripts to execute predefined test cases, compare results and generate reports without human intervention. Manual testing is better for exploratory, usability and one-time testing, while automation is better for regression, load, data-driven and repeated cross-browser testing; in practice both are combined in a balanced test strategy.",
    "intro": "Manual vs automation ka sawaal 'kaun behtar hai' nahi hai — sawaal ye hai 'kaunse kaam ke liye kaun sahi hai'. Manual testing judgement deti hai, automation speed aur consistency. Dono ko mila kar chalane ko hi 'right test mix' kehte hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Manual Testing",
        "kicker": "Definition",
        "body": "Manual testing mein tester document ke basis par test cases haath se execute karta hai: input deta hai, result dekhta hai, expected se compare karta hai aur defect log karta hai.",
        "body2": "Iske fayde: naya defect dhoondhne ki kshamta (exploratory), UX aur usability ka judgement, bina coding ke shuruaat, aur one-time tests ke liye zero setup. Nuksaan: slow, repetitive kaam mein galti, bade regression suite ke liye impractical.",
        "chips": ["Human judgement", "Exploratory", "No setup", "Slow", "Error possible"]
      },
      {
        "type": "cards",
        "title": "Manual vs Automated — Farak",
        "kicker": "Comparison",
        "cards": [
          {
            "icon": "user",
            "title": "Kaun chalata hai",
            "body": "Manual: tester haath se. Automation: tool aur script."
          },
          {
            "icon": "speed",
            "title": "Speed",
            "body": "Manual: slow, ek-ek step. Automation: seconds mein 100 tests."
          },
          {
            "icon": "dollar",
            "title": "Cost",
            "body": "Manual: shuru mein kam, long term zyada. Automation: initial zyada, long term kam."
          },
          {
            "icon": "refresh",
            "title": "Repeatability",
            "body": "Manual: har run mein thoda alag. Automation: same script, same result."
          },
          {
            "icon": "search",
            "title": "Exploration",
            "body": "Manual: naya defect dhoondhta hai. Automation: sirf likha hua check karta hai."
          },
          {
            "icon": "clock",
            "title": "Regression",
            "body": "Manual: boring, skip hota hai. Automation: har build par bina thakan."
          }
        ]
      },
      {
        "type": "definition",
        "title": "Kab Manual, Kab Automation",
        "kicker": "Right Mix",
        "body": "**Manual rakho:** exploratory testing, usability/UX, ad hoc, naya feature ka pehla round, one-time checks, CAPTCHA/OTP/hardware-heavy flows.",
        "body2": "**Automate karo:** regression suite, smoke/sanity, data driven tests (1000 rows), cross-browser matrix, API tests, performance/load, long end-to-end business flows. Achhi team mein dono ka mix hota hai — automation repeatable kaam leta hai, insaan sochne wala kaam karta hai.",
        "chips": ["Exploratory = manual", "Regression = automation", "UX = manual", "Load/API = automation"]
      },
      {
        "type": "diagram",
        "title": "Manual vs Automated",
        "kicker": "Diagram",
        "diagram": "st5-manual-vs-automation",
        "caption": "8-point comparison table aur sahi test mix"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Manual testing insaan ke judgement par chalti hai, automation tool aur script par.",
          "Manual: exploratory, usability, one-time, naya feature — best fit.",
          "Automation: regression, smoke, data driven, cross-browser, API, load — best fit.",
          "Manual ka initial cost kam par long-term cost zyada; automation ulta.",
          "Automation manual testing ko replace nahi karti — repetitive kaam usse le leti hai.",
          "Right mix = fast feedback + human insight, dono."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between manual testing and automated testing.",
        "answer": "**Difference table:**\n\n| Point | Manual Testing | Automated Testing |\n|---|---|---|\n| Executed by | Human tester | Tool + script |\n| Speed | Slow (ek-ek step) | Fast (parallel, seconds) |\n| Initial cost | Low | High (tool + scripting) |\n| Long-term cost | High (repeat effort) | Low (reuse) |\n| Accuracy | Human error possible | Consistent, same steps |\n| Exploration | Naya defect dhoondh sakta hai | Sirf predefined checks |\n| Regression | Boring, skip hota hai | Har build par reliable |\n| Setup needed | Kam | Framework, data, CI |\n| Best for | Exploratory, UX, one-time | Regression, load, data driven |\n| Skill | Domain + testing | Coding + tool + framework |\n\n**Conclusion:** Dono complementary hain — manual judgement deta hai, automation speed aur repeatability.\n\n**Diagram:** Refer to Manual vs Automated diagram."
      },
      {
        "question": "What is the right mix of manual and automated testing? Justify with examples.",
        "answer": "**Right mix principle:** Automation wo kaam le jo repeatable aur measurable hai; manual wo kaam jo judgement maangta hai.\n\n**Automate (70–80% of execution volume):**\n- Regression suite (har build).\n- Smoke/sanity (deployment ke baad 15 min).\n- Data driven tests (1000 rows, same steps).\n- Cross-browser matrix (Grid).\n- API aur database validation.\n- Performance/load (JMeter, k6).\n\n**Manual rakho:**\n- Exploratory testing (naya defect dhoondhna).\n- Usability, accessibility judgement, visual appeal.\n- Naya feature ka pehla round (requirements unstable).\n- One-time/ad hoc checks.\n- CAPTCHA, OTP, biometric, hardware.\n\n**Example — e-commerce release:**\n1. Developer unit + API tests (CI, har commit).\n2. Smoke (checkout, login) automated — deploy ke baad.\n3. Regression 300 cases automated — nightly.\n4. Manual exploratory — naye discount rules par 2 ghante.\n5. UAT — business team manual sign-off.\n\n**Result:** Feedback fast, cost controlled, aur human insight bacha hua.\n\n**Diagram:** Refer to Manual vs Automated diagram."
      },
      {
        "question": "Explain the advantages and disadvantages of manual testing.",
        "answer": "**Advantages of manual testing:**\n1. **Human judgement** — usability, look & feel, UX, \"kuch ajeeb lag raha hai\" wali feeling.\n2. **Exploratory power** — bina script ke naye defect dhoondhna.\n3. **No coding/setup** — turant shuru, chhote project ke liye sasta.\n4. **Short-term project** — ek baar test karna hai, automation ka investment waste.\n5. **Unstable requirement** — badalte feature par manual flexible rehta hai.\n6. **Real user simulation** — actual device, network, environment par.\n7. **Better for one-time / ad hoc / usability tests.**\n\n**Disadvantages:**\n1. **Slow** — bade suite ke liye impractical.\n2. **Repetitive kaam mein boredom aur galti** — 500th step miss ho sakta hai.\n3. **Not reusable** — same test dobara haath se.\n4. **Regression coverage kam** — time na hone par skip.\n5. **No parallel execution** — ek tester ek time par ek test.\n6. **Documentation dependency** — test cases likhe na ho to coverage pata nahi.\n7. **Scaling mushkil** — 10 browsers × 300 cases = 3000 manual runs.\n\n**Diagram:** Refer to Manual vs Automated diagram."
      }
    ]
  },
  {
    "id": "ui-automation-tools",
    "number": "5.9",
    "title": "UI Automation Tools",
    "subtitle": "Cypress, TestCafe aur Protractor — architecture, features aur kab kya chunna",
    "icon": "grid",
    "accent": "#00aaff",
    "englishDefinition": "UI automation tools are libraries and frameworks that drive a browser programmatically to perform user actions such as click, type, scroll and hover, and to verify the resulting state. The commonly discussed tools include Cypress, which runs inside the browser and provides automatic waiting and time-travel debugging; TestCafe, which injects scripts into the page through a Node proxy and therefore needs no WebDriver; and Protractor, a WebDriverJS-based framework built for Angular applications that is now deprecated.",
    "intro": "Cypress, TestCafe aur Protractor — teeno JavaScript family ke tools hain, par teeno ka architecture alag hai. Architecture ka farak hi batata hai ki kaunsa tool aapke app ke liye chalega: SPA ke liye Cypress, cross-browser bina driver ke TestCafe, aur legacy Angular ke liye Protractor (jo ab deprecated hai).",
    "sections": [
      {
        "type": "definition",
        "title": "UI Automation Tools Kya Hain",
        "kicker": "Definition",
        "body": "UI automation tools wo libraries/frameworks hain jo browser ke saath program se interact karke user actions (click, type, scroll, hover) perform karte hain aur result verify karte hain.",
        "body2": "Aaj market mein teen naam sabse zyada poochhe jaate hain: **Cypress** (modern SPA favourite), **TestCafe** (proxy based, WebDriver-free) aur **Protractor** (Angular-era tool, ab deprecated). Teeno browser automate karte hain, par architecture aur language support alag hai — isliye fit bhi alag hai.",
        "chips": ["Cypress", "TestCafe", "Protractor", "JavaScript heavy", "Browser automation"]
      },
      {
        "type": "cards",
        "title": "Teen Tools Ka Overview",
        "kicker": "Tools",
        "cards": [
          {
            "icon": "zap",
            "title": "Cypress",
            "body": "JavaScript/TypeScript. Browser ke andar chalta hai, auto-wait, time travel, video. Parallel Cypress Cloud se."
          },
          {
            "icon": "globe",
            "title": "TestCafe",
            "body": "JavaScript/TypeScript. Node proxy se page mein script inject karta hai — WebDriver ki zaroorat nahi, kisi bhi browser par."
          },
          {
            "icon": "target",
            "title": "Protractor",
            "body": "JavaScript, Angular apps ke liye WebDriverJS par bana. Angular ki support 2017+ se kam hoti gayi, ab deprecated."
          },
          {
            "icon": "code",
            "title": "Common Baat",
            "body": "Teeno JavaScript family ke hain, teeno selectors se element dhoondhte hain aur assertions dete hain."
          },
          {
            "icon": "refresh",
            "title": "Difference",
            "body": "Cypress in-browser, TestCafe proxy, Protractor WebDriver — architecture ka farak hi behaviour ka farak hai."
          },
          {
            "icon": "flag",
            "title": "Aaj Ka Scene",
            "body": "Cypress aur Playwright mainstream; Protractor legacy (migration recommended), TestCafe niche par stable."
          }
        ]
      },
      {
        "type": "points",
        "title": "Kab Kaunsa Tool",
        "kicker": "Selection",
        "points": [
          "**SPA / React / Vue app, JS team** → Cypress (fast feedback, great debugging) ya Playwright.",
          "**Cross-browser including remote/cloud browsers, no WebDriver setup** → TestCafe.",
          "**Legacy AngularJS app** → Protractor chal sakta hai par migration plan banao.",
          "**Multi-language team (Java/Python)** → Selenium/Playwright, Cypress nahi.",
          "**Multi-tab, multiple origin, iframe heavy** → Playwright ya Selenium (Cypress yahan limited hai).",
          "**CI speed chahiye** → parallel support dekho (Cypress Cloud, TestCafe `-c`, Playwright workers)."
        ]
      },
      {
        "type": "diagram",
        "title": "UI Tools Comparison",
        "kicker": "Diagram",
        "diagram": "st5-ui-tools",
        "caption": "Cypress vs TestCafe vs Protractor — language, architecture, browser support aur kab kya chunna"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Cypress: JavaScript, browser ke andar chalta hai, auto-wait aur time travel debugging deta hai.",
          "TestCafe: Node proxy se script inject karta hai — WebDriver ki zaroorat nahi, kisi bhi browser par.",
          "Protractor: Angular ke liye WebDriverJS based, 2017 ke baad support khatam, ab deprecated.",
          "SPA + JS team → Cypress/Playwright; cross-browser bina driver → TestCafe; legacy Angular → migration."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain Cypress, TestCafe and Protractor as UI automation tools.",
        "answer": "**1. Cypress**\n- JavaScript/TypeScript, browser ke andar (same run loop) chalta hai.\n- **Features:** auto-wait, time travel snapshots, live reload, video, network stub (`cy.intercept`), built-in assertions.\n- **Limit:** multi-tab aur cross-origin limited; parallel ke liye Cypress Cloud.\n- **Best for:** SPA (React/Angular/Vue), JS team, fast local feedback.\n\n**2. TestCafe**\n- JavaScript/TypeScript, **proxy based** — Node server page mein script inject karta hai, **WebDriver ki zaroorat nahi**.\n- **Features:** kisi bhi browser par chalta hai, built-in parallel (`-c`), reporters, iframe aur file upload support, no driver setup.\n- **Limit:** proxy ke kaaran kuch corporate setups mein network config; native events limited.\n- **Best for:** cross-browser runs bina driver management ke.\n\n**3. Protractor**\n- Angular apps ke liye bana, **WebDriverJS** par based, Angular-specific wait/selectors (`by.model`, `by.binding`).\n- **Status:** Angular ne 2017+ se support kam kiya, Protractor **deprecated** — naye projects ke liye recommended nahi.\n- **Migration:** Cypress / Playwright / Selenium.\n\n**Diagram:** Refer to UI Tools Comparison diagram."
      },
      {
        "question": "Compare Cypress and Selenium.",
        "answer": "**Cypress vs Selenium:**\n\n| Point | Cypress | Selenium |\n|---|---|---|\n| Language | JavaScript/TypeScript | Java, Python, C#, JS, Ruby |\n| Architecture | In-browser (same event loop) | WebDriver, browser ke bahar se control |\n| Auto-wait | Built-in | Manual explicit waits |\n| Browsers | Chrome family, Firefox (WebKit limited) | Chrome, Firefox, Edge, Safari |\n| Multi-tab / cross-origin | Limited | Supported |\n| Parallel | Cypress Cloud | Grid / cloud |\n| Debugging | Time travel, DOM snapshot, video | Logs, screenshot, waits |\n| Speed | Fast for SPA | Slower but flexible |\n| Ecosystem | JS-only, front-end dev friendly | Huge, enterprise standard |\n| Best for | SPA, JS teams, quick feedback | Cross-browser, multi-language, enterprise |\n\n**Rule:** language stack aur browser matrix decide karta hai — dono \"best\" nahi, fit alag.\n\n**Diagram:** Refer to UI Tools Comparison diagram."
      },
      {
        "question": "Why is Protractor deprecated and what should replace it?",
        "answer": "**Protractor kya tha:** Angular apps ke liye end-to-end test framework, WebDriverJS ke upar bana. Angular-specific locators (`by.model`, `by.binding`) aur automatic synchronisation deta tha.\n\n**Deprecation ke kaaran:**\n1. **Angular ne support chhoda** — Angular CLI ne naye projects se Protractor hataya (2019 ke aas-paas, announcement 2017+).\n2. **WebDriver control flow deprecated** — async/await style ne purana design purana kar diya.\n3. **Slow aur flaky** — Angular synchronisation issues, waits par nirbhar.\n4. **Better alternatives** — Cypress aur Playwright ne faster, self-contained runs diye.\n5. **Community shift** — updates, plugins aur support kam ho gaye.\n\n**Replacement:**\n- **Playwright** — multi-browser, auto-wait, multi-tab, trace viewer (best modern choice).\n- **Cypress** — SPA ke liye excellent DX.\n- **Selenium 4** — agar multi-language ya legacy grid chahiye.\n\n**Migration tip:** Page objects ko preserve karo, locators ko role/testid par shift karo, waits ko auto-wait par chhod do.\n\n**Diagram:** Refer to UI Tools Comparison diagram."
      }
    ]
  },
  {
    "id": "automation-case-studies",
    "number": "5.10",
    "title": "Case Studies of Automation Testing",
    "subtitle": "Real project ke examples — problem se result tak, numbers ke saath",
    "icon": "briefcase",
    "accent": "#ff8800",
    "englishDefinition": "An automation testing case study is a structured account of an automation initiative in a real or realistic project, covering the context, the problem such as high manual regression effort or late defect detection, the automation approach and scope, the tools and infrastructure used, and the measured result such as reduced regression time, faster feedback, lower defect escape rate and improved coverage, together with the lessons learnt.",
    "intro": "Case study exam mein aise poochhi jaati hai jaise 'ek project ka automation case study likhiye'. Iska answer ek story ki tarah likho: pehle problem numbers ke saath, phir approach, phir tools, phir result — aur end mein lessons. Numbers hi case study ko believable banate hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Case Study Kya Hoti Hai",
        "kicker": "Definition",
        "body": "Automation case study ek real (ya realistic) project ka structured description hai: problem kya tha, kya approach li gayi, kaunse tools aur infrastructure use hue, aur result kya mila — numbers ke saath.",
        "body2": "Exam mein case study poochhi jaati hai to expected answer **problem → approach → tools → result → lessons** ke format mein hota hai. Sabse important hissa **numbers** hain: 'automation se acha hua' nahi likhna, balki 'regression 5 din se 8 ghante' likhna.",
        "chips": ["Problem", "Approach", "Tools", "Result", "Lessons"]
      },
      {
        "type": "cards",
        "title": "Teen Typical Case Studies",
        "kicker": "Examples",
        "cards": [
          {
            "icon": "globe",
            "title": "E-commerce",
            "body": "Problem: 300 manual regression cases, 5 din per release. Approach: smoke + checkout flow + API layer automation. Tools: Selenium + TestNG + Jenkins. Result: regression 8 ghante, weekly se daily release, ROI 1 quarter."
          },
          {
            "icon": "server",
            "title": "Banking Portal",
            "body": "Problem: 5 browsers × 4 resolutions manual. Approach: data-driven suite + Grid parallel + Allure report. Tools: Selenium Grid + Docker + Allure. Result: 240 combinations 40 min, defects 60% jaldi."
          },
          {
            "icon": "zap",
            "title": "SaaS Dashboard",
            "body": "Problem: bugs production mein, sprint end par pata. Approach: har PR par API + critical UI tests. Tools: Cypress + GitHub Actions. Result: feedback 4 ghante se 9 minute, flaky 3%."
          }
        ]
      },
      {
        "type": "points",
        "title": "Case Study Likhne Ka Format",
        "kicker": "Answer Structure",
        "points": [
          "**1. Context** — product, team size, release cycle, current process.",
          "**2. Problem** — manual effort, defect leak, slow feedback, numbers ke saath.",
          "**3. Approach** — kya automate kiya, kya manual chhoda, framework design.",
          "**4. Tools + infrastructure** — tool, CI, reporting, grid, data strategy.",
          "**5. Result** — time, cost, defect escape rate, flaky rate, coverage.",
          "**6. Lessons** — kya galat hua (jaise flaky tests, unstable env) aur next time kya better karenge."
        ]
      },
      {
        "type": "diagram",
        "title": "Automation Case Studies",
        "kicker": "Diagram",
        "diagram": "st5-case-studies",
        "caption": "E-commerce, banking aur SaaS case studies — problem, approach, tools, result"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Case study format: context → problem → approach → tools → result → lessons.",
          "Sabse important hissa numbers hain — 'regression 5 din se 8 ghante' jaisa measurable result.",
          "E-commerce: Selenium + TestNG + Jenkins se regression 5 din se 8 ghante.",
          "Banking: Grid + data driven se 240 combinations 40 minute mein, defect 60% jaldi.",
          "SaaS: Cypress + GitHub Actions se feedback 4 ghante se 9 minute.",
          "Lessons hamesha likho — flaky tests aur test data management sabse common problem hain."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Write a case study of automation testing in an e-commerce project.",
        "answer": "**1. Context:** Mid-size e-commerce, 6 QA, weekly release, ~300 regression cases, manual regression 5 din.\n\n**2. Problem:**\n- Har release par 5 din manual regression — release slip hoti thi.\n- Regression skip hone par defect production mein.\n- Cross-browser (Chrome, Firefox, Safari) check adhoora.\n\n**3. Approach:**\n- **Smoke suite** (login, search, cart, checkout, payment) — 40 cases.\n- **Regression suite** — 300 cases, priority ke hisaab se P1 → P2.\n- **API layer tests** — order, inventory, coupon (UI se fast).\n- **Page Object Model** + external config, data driven for address/currency.\n- CI: har merge par smoke (15 min), nightly full regression.\n\n**4. Tools:** Selenium WebDriver + TestNG + Maven, Jenkins, Allure report, Selenium Grid (3 browsers), Git.\n\n**5. Result:**\n| Metric | Before | After |\n|---|---|---|\n| Regression time | 5 din | 8 ghante (parallel) |\n| Release cycle | weekly se monthly | weekly se daily |\n| Defect escape | 6–8 per release | 1–2 per release |\n| Smoke feedback | next day | 15 minutes |\n\n**6. Lessons:** Flaky tests sabse bada issue the — explicit waits + test data isolation se 12% se 2% par aaya. UI-heavy tests kam kiye, API tests badhaye.\n\n**Diagram:** Refer to Automation Case Studies diagram."
      },
      {
        "question": "How does automation help in a banking or financial application? Give a case study.",
        "answer": "**Context:** Banking portal (net banking + payments), 5 browsers × 4 resolutions matrix, quarterly audit requirement.\n\n**Problem:**\n- 240 combinations manually check karna impossible.\n- Financial calculations (interest, charges, tax) par rounding defects.\n- Audit ke liye har release ka proof (report) chahiye.\n\n**Approach:**\n- **Data-driven** suite — Excel/DB se account types, amounts, currencies.\n- **Grid parallel** — browsers × resolutions ek hi run mein.\n- **Assertions** — UI value + API response + DB row, teeno cross-check.\n- **Seeded test data** — masked production-like accounts, per-run unique namespace.\n- **Allure reports** — audit trail ke liye step-wise evidence + screenshots.\n\n**Tools:** Selenium Grid, Docker, TestNG, Allure, Jenkins, SQL validation scripts.\n\n**Result:**\n- 240 combinations 40 minutes mein.\n- Financial calculation defects 60% jaldi pakde (API+DB cross-check se).\n- Audit documentation automatic — manual screenshot banane ki zaroorat nahi.\n- Regression effort 70% kam.\n\n**Lessons:** Real money flows par sandbox data aur rollback strategy zaroori hai; session timeout aur OTP ke liye test-friendly hooks chahiye.\n\n**Diagram:** Refer to Automation Case Studies diagram."
      },
      {
        "question": "What should a good automation case study contain and what lessons usually emerge?",
        "answer": "**Case study ka structure:**\n\n1. **Context** — product, team, release cycle, existing process.\n2. **Problem** — manual effort, slow feedback, defect leak (numbers ke saath).\n3. **Goal** — kya achieve karna hai (regression 5 din → 1 din, coverage 40% → 80%).\n4. **Approach** — scope (kya automate, kya manual), framework (POM, data driven), CI integration.\n5. **Tools & infrastructure** — tool, runner, grid, reporting, test data strategy.\n6. **Execution plan** — pilot → smoke → regression → parallel.\n7. **Result** — time saved, defect detection improvement, cost, flaky rate, coverage.\n8. **Lessons** — kya fail hua aur next iteration kya badlega.\n\n**Common lessons:**\n- **Flaky tests** hi sabse bada blocker bante hain — waits aur data isolation se fix hote hain.\n- **Too many UI tests** suite ko slow karte hain — pyramid follow karo.\n- **Test data** management initial phase mein hi design karo, warna baad mein dard.\n- **CI integration** ke bina automation ka ROI aadha reh jaata hai.\n- **Maintenance** ko budget mein rakho — 20–30% effort har sprint.\n\n**Diagram:** Refer to Automation Case Studies diagram."
      }
    ]
  },
  {
    "id": "selenium-introduction-history",
    "number": "5.11",
    "title": "Introduction to Selenium and Its History",
    "subtitle": "Selenium kya hai, kaise shuru hua aur 2004 se 2021 tak ka safar",
    "icon": "timeline",
    "accent": "#aa00ff",
    "englishDefinition": "Selenium is an open-source suite of tools for automating web browsers, supporting multiple programming languages and browsers, and standardized on the W3C WebDriver protocol. The Selenium project started in 2004 with Selenium Core by Jason Huggins at ThoughtWorks, followed by Selenium IDE in 2006, Selenium RC in 2007, Selenium Grid in 2008, the merge of WebDriver into Selenium 2.0 in 2011, Selenium 3 in 2016 which made W3C WebDriver the standard and removed RC, and Selenium 4 in 2021 with W3C-only protocol, relative locators, CDP support and a new Grid.",
    "intro": "Selenium ka naam har automation tester ne suna hai, par exam mein iska itihaas poochha jaata hai — kaunsa version kab aaya aur kisne banaya. Yaad rakhne ka simple tareeka: 2004 Core → 2006 IDE → 2007 RC → 2008 Grid → 2011 WebDriver merge → 2016 Selenium 3 → 2021 Selenium 4.",
    "sections": [
      {
        "type": "definition",
        "title": "Selenium Kya Hai",
        "kicker": "Definition",
        "body": "Selenium ek open-source web automation suite hai jo browser ko program ke through control karta hai — click, type, navigate, assertion — multiple languages (Java, Python, C#, Ruby, JavaScript, Kotlin) aur multiple browsers (Chrome, Firefox, Edge, Safari) ke liye.",
        "body2": "Selenium sirf **web UI** automate karta hai. Mobile ke liye Appium, desktop ke liye WinAppDriver (alag projects) use hote hain. Free hone ke kaaran industry mein sabse zyada use hone wala tool hai, aur iske around bada ecosystem bana hai (TestNG, Cucumber, Allure, Grid, cloud providers).",
        "chips": ["Open source", "Cross-browser", "Multi-language", "W3C standard", "Web only"]
      },
      {
        "type": "points",
        "title": "Selenium Project Ka Itihaas",
        "kicker": "History",
        "points": [
          "**2004 — Selenium Core:** Jason Huggins (ThoughtWorks) ne JavaScript-based test runner banaya, taaki insurance app ke tests manually dohrne na padein. Isse hi Selenium ki neev padi.",
          "**2006 — Selenium IDE:** Firefox plugin, record & playback — non-programmers ke liye entry point.",
          "**2007 — Selenium RC:** Remote Control server, JavaScript injection se kisi bhi language se browser control.",
          "**2008 — Selenium Grid:** Parallel execution — ek hi suite kai machines aur browsers par.",
          "**2011 — Selenium 2.0:** Simon Stewart ke WebDriver project ka merge — native browser control, RC ki jagah.",
          "**2016 — Selenium 3:** WebDriver W3C standard, RC officially deprecated/removed; browser vendors apne drivers maintain karne lage.",
          "**2021 — Selenium 4:** W3C-only protocol, relative locators, CDP support, naya Grid (Router/Node), Selenium Manager, revived IDE."
        ]
      },
      {
        "type": "cards",
        "title": "Naam Ka Rahasya Aur Aaj",
        "kicker": "Trivia + Status",
        "cards": [
          {
            "icon": "bulb",
            "title": "Mercury vs Selenium",
            "body": "Ek time par Mercury (Mercury Interactive) ka testing product famous tha. Joke ke liye uske opposite chemical element 'selenium' naam rakha gaya."
          },
          {
            "icon": "trophy",
            "title": "Kyun Popular",
            "body": "Open source, free, cross-browser, multi-language, huge community aur Grid/cloud support."
          },
          {
            "icon": "flag",
            "title": "Aaj Ka Status",
            "body": "Selenium 4 current stable hai; W3C WebDriver protocol industry standard ban gaya."
          },
          {
            "icon": "wrench",
            "title": "Ecosystem",
            "body": "TestNG/JUnit, Cucumber, Allure, Selenium Grid, Docker, BrowserStack/Sauce Labs."
          }
        ]
      },
      {
        "type": "diagram",
        "title": "Selenium Journey",
        "kicker": "Diagram",
        "diagram": "st5-selenium-intro",
        "caption": "2004 Core → 2006 IDE → 2007 RC → 2008 Grid → 2011 WebDriver merge → 2016 Selenium 3 → 2021 Selenium 4"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "2004 — Selenium Core (Jason Huggins, ThoughtWorks), JS based test runner.",
          "2006 — Selenium IDE, 2007 — Selenium RC, 2008 — Selenium Grid.",
          "2011 — Selenium 2.0: WebDriver (Simon Stewart) ka RC ke saath merge.",
          "2016 — Selenium 3: W3C standard, RC removed. 2021 — Selenium 4: relative locators, CDP, new Grid.",
          "Naam Mercury (Mercury Interactive) ke ulta chemical 'selenium' se aaya — joke tha.",
          "Selenium sirf web automation karta hai — mobile ke liye Appium."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is Selenium? Explain its history from Selenium Core to Selenium 4.",
        "answer": "**Selenium:** Open-source web automation suite — browser ko program se control karta hai. Multiple languages (Java, Python, C#, Ruby, JavaScript, Kotlin) aur browsers (Chrome, Firefox, Edge, Safari) support karta hai. Sirf web UI automate karta hai.\n\n**History:**\n| Year | Milestone | Kya hua |\n|---|---|---|\n| 2004 | Selenium Core | Jason Huggins (ThoughtWorks) — JS test runner, manually dohrne ki jagah |\n| 2006 | Selenium IDE | Firefox plugin, record & playback |\n| 2007 | Selenium RC | Remote control server, any-language client, JS injection |\n| 2008 | Selenium Grid | Parallel/distributed runs |\n| 2011 | Selenium 2.0 | WebDriver (Simon Stewart) merge — native browser control |\n| 2016 | Selenium 3 | W3C WebDriver standard, RC removed |\n| 2021 | Selenium 4 | W3C only, relative locators, CDP, new Grid, Selenium Manager |\n\n**Naam:** Mercury (Mercury Interactive) ke ulta chemical — selenium — joke ke roop mein rakha gaya.\n\n**Diagram:** Refer to Selenium Journey diagram."
      },
      {
        "question": "Why is Selenium so popular? What are its limitations?",
        "answer": "**Popularity ke kaaran:**\n1. **Open source aur free** — licence cost zero, enterprise adoption easy.\n2. **Multi-language** — Java, Python, C#, Ruby, JavaScript, Kotlin.\n3. **Multi-browser + cross-platform** — Chrome, Firefox, Edge, Safari; Windows/Linux/macOS.\n4. **Big community** — tutorials, Stack Overflow, plugins, integrations.\n5. **W3C standard protocol** — browser vendors native support dete hain.\n6. **Grid + cloud** — parallel runs, BrowserStack/Sauce Labs integration.\n7. **Ecosystem** — TestNG, JUnit, Cucumber, Allure, Maven/Gradle, Docker.\n\n**Limitations:**\n1. **Web only** — mobile/desktop ke liye separate tools (Appium, WinAppDriver).\n2. **No built-in reporting / assertions** — TestNG/JUnit par depend.\n3. **No auto-wait** — explicit waits khud likhne padte hain, warna flaky.\n4. **Setup overhead** — drivers (ab Selenium Manager se aasan), grid config.\n5. **CAPTCHA / OTP / biometric** — handle nahi kar sakta.\n6. **Slow compared to in-browser tools** — network round trip per command.\n7. **Learning curve** — programming + framework design zaroori.\n\n**Diagram:** Refer to Selenium Journey diagram."
      },
      {
        "question": "Explain the relationship between Selenium RC, WebDriver and Selenium 4.",
        "answer": "**Selenium RC (2007):** Ek Java server jo browser mein JavaScript inject karta tha; client library kisi bhi language se HTTP commands bhejti thi. Any-language support ka hero, par slow, flaky, same-origin proxy dependency.\n\n**Selenium WebDriver (2008–2011):** Simon Stewart ka project — browser ke **native automation API** se control (browser driver binary: chromedriver, geckodriver). JS injection nahi, proxy nahi → fast aur stable. 2011 mein Selenium 2.0 = WebDriver + RC.\n\n**Selenium 3 (2016):** W3C WebDriver protocol standard; browser vendors apne drivers maintain karne lage; RC hata diya gaya.\n\n**Selenium 4 (2021):** Sirf W3C protocol, relative locators (`above`, `below`, `toLeftOf`, `near`), Chrome DevTools Protocol (CDP) support, naya Grid (Router, Distributor, Session Map, Nodes), Selenium Manager (driver auto-download), IDE revival, improved window/tab handling.\n\n**Ek line:** RC ne dikhaya ki browser automate ho sakta hai, WebDriver ne usse theek se kiya, aur Selenium 4 ne use standard, scalable aur developer-friendly bana diya.\n\n**Diagram:** Refer to Selenium Journey diagram."
      }
    ]
  },
  {
    "id": "selenium-tool-suite",
    "number": "5.12",
    "title": "Selenium's Tool Suite",
    "subtitle": "IDE, WebDriver, Grid, Manager aur language bindings — kaun kya karta hai",
    "icon": "cube",
    "accent": "#00ff88",
    "englishDefinition": "Selenium's tool suite consists of Selenium IDE for record and playback, Selenium WebDriver for programmatic browser control, Selenium Grid for parallel and distributed execution across browsers and machines, and in recent versions Selenium Manager for automatic driver management, along with official language bindings for Java, Python, C#, Ruby, JavaScript and Kotlin, while Selenium RC remains a legacy tool removed in Selenium 3.",
    "intro": "Selenium ko ek tool samajhna sabse badi galti hai — ye ek suite hai. IDE se seekhna shuru hota hai, WebDriver se real framework banta hai, Grid se suite parallel chalti hai, aur Manager driver setup ka jhanjhat hata deta hai. Report aur assertions ke liye TestNG/JUnit jaise tools bahar se aate hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Selenium Suite",
        "kicker": "Definition",
        "body": "Selenium ek single tool nahi, tools ka suite hai: **Selenium IDE** (record & playback browser extension), **Selenium WebDriver** (programming library for browser control), **Selenium Grid** (parallel and distributed execution), aur naye versions mein **Selenium Manager** (driver management). Selenium RC legacy tool hai jo Selenium 3 se remove ho gaya.",
        "body2": "Suite ko family ki tarah samjho: IDE se seekho, WebDriver se framework banao, Grid se scale karo, Manager se driver setup bhool jao. Reporting aur assertions ke liye TestNG/JUnit/pytest jaise external libraries chahiye — wo Selenium ka hissa nahi hain.",
        "chips": ["IDE", "WebDriver", "Grid", "Manager", "RC (legacy)"]
      },
      {
        "type": "cards",
        "title": "Suite Ke Tools",
        "kicker": "Components",
        "cards": [
          {
            "icon": "eye",
            "title": "Selenium IDE",
            "body": "Browser extension — record & playback, .side file, code export. Seekhne aur quick smoke ke liye."
          },
          {
            "icon": "code",
            "title": "Selenium WebDriver",
            "body": "Main library — code se browser control, locators, waits, actions. Framework isi par banta hai."
          },
          {
            "icon": "grid",
            "title": "Selenium Grid",
            "body": "Hub/Router + Nodes — parallel, cross-browser/distributed runs."
          },
          {
            "icon": "down",
            "title": "Selenium Manager",
            "body": "Selenium 4.6+ built-in — driver auto download aur browser version matching."
          },
          {
            "icon": "server",
            "title": "Selenium RC (legacy)",
            "body": "Purana remote-control server, JS injection; Selenium 3 se remove. Sirf theory/exam ke liye."
          },
          {
            "icon": "doc",
            "title": "External Add-ons",
            "body": "Assertions aur report: TestNG, JUnit, pytest, Mocha; report: Allure, Extent."
          }
        ]
      },
      {
        "type": "points",
        "title": "Language Bindings",
        "kicker": "Bindings",
        "points": [
          "**Official:** Java, Python, C#, Ruby, JavaScript, Kotlin — sab W3C protocol par same tarah kaam karte hain.",
          "**Community:** PHP, Perl, Go — unofficial bindings, support kam.",
          "Binding ka kaam: aapke code ko HTTP commands mein badalna aur response wapas object mein dena.",
          "Isliye Java se Python par shift hona aasan hai — concept same, syntax alag.",
          "Interview point: bindings language-specific hote hain, browser control driver binary karta hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Selenium Tool Suite",
        "kicker": "Diagram",
        "diagram": "st5-selenium-suite",
        "caption": "IDE, WebDriver, Grid, Manager, language bindings aur RC ka status"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Suite = IDE (record) + WebDriver (code) + Grid (parallel) + Manager (driver setup).",
          "Selenium RC legacy tool hai — Selenium 3 se remove ho gaya.",
          "Official bindings: Java, Python, C#, Ruby, JavaScript, Kotlin — same W3C protocol.",
          "Assertions aur reporting Selenium ke bahar se aate hain — TestNG, JUnit, pytest, Allure.",
          "Interview point: bindings language-specific, browser control driver binary karta hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the Selenium tool suite and the role of each component.",
        "answer": "**Selenium suite ke components:**\n\n1. **Selenium IDE** — browser extension (Chrome/Firefox/Edge). Record & playback, `.side` file, control flow, code export. Non-programmers aur quick smoke ke liye.\n2. **Selenium WebDriver** — main programming library. Browser ko code se control karta hai: locators, waits, actions, alerts, iframes. Framework isi par banta hai.\n3. **Selenium Grid** — parallel aur distributed execution. Hub/Router requests leta hai, Nodes browser dete hain (Selenium 4 mein Router, Distributor, Session Map, Nodes).\n4. **Selenium Manager** — Selenium 4.6+ mein built-in driver manager: driver download aur browser version match automatically.\n5. **Selenium RC (legacy)** — purana remote control server, JS injection; Selenium 3 se remove.\n\n**Supporting (Selenium ke bahar):**\n- Assertions/runner: TestNG, JUnit, pytest, Mocha.\n- Reporting: Allure, ExtentReports.\n- Build: Maven/Gradle, npm; CI: Jenkins, GitHub Actions.\n\n**Diagram:** Refer to Selenium Tool Suite diagram."
      },
      {
        "question": "What are language bindings in Selenium? List the official bindings.",
        "answer": "**Language bindings:** Client libraries jo aapke programming language ke commands ko W3C WebDriver HTTP requests mein convert karti hain, aur browser driver ka response wapas language objects mein deti hain.\n\n**Flow:** `driver.findElement(By.id(\"email\"))` → binding HTTP request banati hai → driver binary → browser → response → binding object (`WebElement`) return karti hai.\n\n**Official bindings:** Java, Python, C#, Ruby, JavaScript (Node), Kotlin.\n\n**Unofficial/community:** PHP, Perl, Go (support aur features kam).\n\n**Key points:**\n- Sab bindings same protocol use karti hain → test concepts same, syntax alag.\n- Binding mein waits, expected conditions, actions class jaise helpers hote hain.\n- Version mismatch (binding vs browser vs driver) flaky failures ka common kaaran hai — Selenium Manager isse bachata hai.\n\n**Diagram:** Refer to Selenium Tool Suite diagram."
      },
      {
        "question": "Differentiate Selenium IDE, WebDriver and Grid.",
        "answer": "**Comparison:**\n\n| Point | Selenium IDE | Selenium WebDriver | Selenium Grid |\n|---|---|---|---|\n| Type | Browser extension | Programming library | Distributed runner |\n| Coding | Not required | Required | Not required (test likha hua chalta hai) |\n| Purpose | Record & playback | Browser automation framework | Parallel + cross-browser execution |\n| Scale | Single browser, single flow | Single machine (multiple tests) | Multiple machines/browsers |\n| Reporting | Basic pass/fail | Framework + CI se | Aggregated across nodes |\n| Best for | Learning, quick smoke, bug repro | Real automation projects | Large suites, CI speed, browser matrix |\n| Limitation | Brittle, limited logic | Needs programming skill | Needs infra + parallel-safe tests |\n\n**Kaise saath kaam karte hain:** IDE se flow record karo → WebDriver code mein convert karo → poora suite Grid par parallel chalao → report CI se lo.\n\n**Diagram:** Refer to Selenium Tool Suite diagram."
      }
    ]
  },
  {
    "id": "selenium-ide",
    "number": "5.13",
    "title": "Selenium IDE",
    "subtitle": "Record & playback tool — commands, .side file aur limitations",
    "icon": "eye",
    "accent": "#0047ff",
    "englishDefinition": "Selenium IDE is a browser extension that records a user's interactions with a web application, converts them into Selenium commands such as open, click, type and assert, and replays them without requiring programming knowledge. The modern Selenium IDE supports Chrome, Firefox and Edge, control flow commands, the .side suite file format, a command-line runner for CI and code export to Java, Python or JavaScript, but recorded tests are brittle and are not suitable as a production framework.",
    "intro": "Selenium IDE automation ka 'gateway tool' hai — code na aata ho to bhi yahan se shuru kar sakte hain. Par jo test record hota hai wo brittle hota hai, isliye IDE se seekho aur WebDriver se banao. Exam mein IDE ke commands aur limitations dono poochhe jaate hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Selenium IDE Kya Hai",
        "kicker": "Definition",
        "body": "Selenium IDE ek browser extension hai jo user ke actions record karta hai, unhe commands mein badalta hai (open, click, type, assert) aur baad mein replay karta hai — bina programming ke.",
        "body2": "Purana Selenium IDE Firefox plugin tha (2006). 2018 se naya **Selenium IDE** aaya jo Chrome, Firefox aur Edge par chalta hai, control flow (if/while), `.side` file format aur CLI runner ke saath. Ye seekhne aur quick smoke tests ke liye best hai, production framework ke liye nahi.",
        "chips": ["Record & playback", "Extension", "No coding", ".side file", "Assertions"]
      },
      {
        "type": "points",
        "title": "Commands Aur Workflow",
        "kicker": "How It Works",
        "points": [
          "**open** — URL kholo. **click** — element par click. **type** — text bharna.",
          "**select** — dropdown value. **assert / verify** — expected value check (assert fail par test rukta hai, verify nahi).",
          "**store** — value variable mein rakhna (jaise unique email). **waitFor** — element ka wait.",
          "Record dabao, user jaise click/type karo, phir playback se replay — fast/slow speed aur step-by-step debug ke saath.",
          "Suite banao, `.side` file export karo, aur `selenium-side-runner` se CI mein chalao.",
          "Code export — Java, Python, JavaScript (JUnit/TestNG/pytest style) mein convert."
        ]
      },
      {
        "type": "cards",
        "title": "Fayde Aur Limitations",
        "kicker": "Good vs Bad",
        "cards": [
          {
            "icon": "check",
            "title": "Fayda: No coding",
            "body": "Manual tester turant automation start kar sakta hai — seekhne ka best entry point."
          },
          {
            "icon": "check",
            "title": "Fayda: Fast bug repro",
            "body": "Bug reproduce karne ke liye record karke steps attach karna aasan."
          },
          {
            "icon": "check",
            "title": "Fayda: Command samajh",
            "body": "Selenium ke commands ka practical gyaan milta hai."
          },
          {
            "icon": "warn",
            "title": "Limit: Brittle",
            "body": "UI badle to recorded steps toot jaate hain — index-based locators."
          },
          {
            "icon": "warn",
            "title": "Limit: Logic kam",
            "body": "Branching, loops, data driven aur reusable functions bahut limited hain."
          },
          {
            "icon": "warn",
            "title": "Limit: Scale nahi",
            "body": "Cross-browser parallel, CI reporting aur framework design nahi."
          }
        ]
      },
      {
        "type": "diagram",
        "title": "Selenium IDE",
        "kicker": "Diagram",
        "diagram": "st5-selenium-ide",
        "caption": "Record & playback window, commands table, fayde aur limitations"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Selenium IDE browser extension hai — record & playback, bina coding ke.",
          "Commands: open, click, type, select, assert, verify, store, waitFor.",
          "Assert fail par test rukta hai, verify fail par test chalta rehta hai.",
          ".side file JSON based hoti hai — git aur CLI runner ke saath CI mein chalti hai.",
          "Limitations: brittle locators, logic kam, parallel/scale nahi — production framework nahi.",
          "Sahi use: seekhna, quick smoke, bug reproduce, phir WebDriver code mein convert."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is Selenium IDE? Explain its features, advantages and limitations.",
        "answer": "**Selenium IDE:** Browser extension (Chrome/Firefox/Edge) jo user actions record karta hai, commands mein convert karta hai aur replay karta hai — bina code likhe.\n\n**Features:**\n- **Record & playback** — user actions se test banta hai.\n- **Commands:** open, click, type, select, assert, verify, store, waitFor.\n- **Control flow:** if/else, while, times (naya IDE).\n- **`.side` file** — JSON-based suite file, git mein rakh sakte hain.\n- **CLI runner** — `selenium-side-runner` se CI mein chalta hai.\n- **Code export** — Java/Python/JavaScript.\n- **Debug:** step-by-step, breakpoint, speed control.\n\n**Advantages:** no coding, quick smoke, bug reproduce, Selenium commands seekhna.\n\n**Limitations:** brittle locators, logic/data-driven support kam, cross-browser parallel nahi, framework design possible nahi.\n\n**Diagram:** Refer to Selenium IDE diagram."
      },
      {
        "question": "Differentiate between assert and verify commands in Selenium IDE.",
        "answer": "**Assert:**\n- Condition false ho to **test execution wahin ruk jaata hai** (hard assertion).\n- Uske baad ke steps nahi chalte.\n- Use: critical checks jinke baad test ka matlab nahi (login fail ho gaya to dashboard check ka koi point nahi).\n\n**Verify:**\n- Condition false ho to **failure log hota hai par test chalta rehta hai** (soft assertion).\n- Baaki checks bhi run hote hain, end mein failures report hote hain.\n- Use: non-critical checks, multiple validations ek hi run mein (page par 5 labels check karne hain).\n\n**Example (login page):**\n- `verifyText` — welcome message (page ke baaki elements bhi check karne hain).\n- `assertElementPresent` — submit button (ye nahi to test aage nahi badh sakta).\n\n**Selenium WebDriver mein:** assert → TestNG/JUnit hard assert; verify → soft assert (`SoftAssert`).\n\n**Diagram:** Refer to Selenium IDE diagram."
      },
      {
        "question": "Why should Selenium IDE not be used for large production test suites?",
        "answer": "**Kaaran:**\n\n1. **Brittle locators** — record karte waqt IDE often index/absolute XPath pakadta hai; ek DOM change se test toot jaata hai.\n2. **Limited programming** — reusable functions, page objects, utilities, custom waits possible nahi.\n3. **Data driven support kam** — bade data sets ke liye loops/parametrisation weak.\n4. **No framework** — reporting, logging, retry, config management nahi.\n5. **Scale nahi** — cross-browser parallel Grid integration nahi.\n6. **Debugging mushkil** — code-level breakpoint aur stack trace nahi.\n7. **Maintenance** — 300 recorded tests ko update karna nightmare hota hai.\n\n**Sahi use:** learning, quick smoke, bug reproduction, prototype flow, phir WebDriver mein convert.\n\n**Rule:** IDE = entry point, WebDriver = production. Recorded script ko refactor karke POM mein daalo.\n\n**Diagram:** Refer to Selenium IDE diagram."
      }
    ]
  },
  {
    "id": "selenium-rc",
    "number": "5.14",
    "title": "Selenium RC",
    "subtitle": "Remote Control server — JS injection architecture aur deprecation ka kaaran",
    "icon": "server",
    "accent": "#ff0080",
    "englishDefinition": "Selenium Remote Control (RC) was a server-based tool in which a client library in any supported programming language sent HTTP commands to the Selenium RC server, which launched a browser and injected JavaScript into it to perform the test steps. RC enabled multi-language browser automation but was slow, dependent on a proxy to work around the same-origin policy, and brittle across browser versions, so it was replaced by WebDriver, deprecated in Selenium 2, and removed in Selenium 3.",
    "intro": "Selenium RC aaj use nahi hota, par exam mein poochha jaata hai — kyunki RC vs WebDriver ka farak samajhna automation ke fundamentals samajhna hai. RC ka bada contribution: kisi bhi language se browser control. Uska bada defect: browser ke andar JavaScript inject karna, jo har browser update par toot sakta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Selenium RC Kya Tha",
        "kicker": "Definition",
        "body": "Selenium Remote Control (RC) ek server (selenium-server jar) tha jo browser launch karta tha aur JavaScript inject karke browser ko control karta tha. Client library kisi bhi language (Java, Python, PHP, Ruby) se HTTP commands bhejti thi — isliye RC ne 'any language' automation popular kiya.",
        "body2": "RC ki architecture: **test code → RC server (HTTP proxy + JS injection) → browser → application**. Browser ke andar injected JS same-origin policy ki wajah se proxy ke through chalta tha, isliye setup complex aur execution slow tha.",
        "chips": ["RC server", "JS injection", "HTTP proxy", "Any language", "Deprecated"]
      },
      {
        "type": "points",
        "title": "RC Ki Problems (Kyun Hata)",
        "kicker": "Why Deprecated",
        "points": [
          "**JavaScript injection** — browser version badalne par injection toot jaata hai; native events nahi.",
          "**Same-origin policy** — proxy server zaroori, jo speed aur reliability dono ko maarta hai.",
          "**Slow** — har command proxy se guzarti hai, network overhead zyada.",
          "**Flaky** — alert, popup, file upload/download, iframe par problem.",
          "**Limited control** — headless, keyboard/mouse native events aur modern SPAs par kamzor.",
          "**WebDriver better tha** — native browser automation API, koi injection nahi, koi proxy nahi.",
          "**Selenium 3 (2016)** mein officially remove — sirf historical importance bachi."
        ]
      },
      {
        "type": "cards",
        "title": "RC vs WebDriver",
        "kicker": "Comparison",
        "cards": [
          {
            "icon": "server",
            "title": "RC: Server ke through",
            "body": "Test → RC server → JS injection → browser. Proxy aur server dependency."
          },
          {
            "icon": "zap",
            "title": "WebDriver: Direct driver",
            "body": "Test → binding → driver binary → browser. Native automation, koi proxy nahi."
          },
          {
            "icon": "speed",
            "title": "Speed",
            "body": "RC slow (JS injection + proxy); WebDriver fast (native commands)."
          },
          {
            "icon": "flag",
            "title": "Status",
            "body": "RC deprecated/removed; WebDriver current standard (W3C)."
          },
          {
            "icon": "wrench",
            "title": "Languages",
            "body": "RC ne any-language support diya — WebDriver ne wahi behtar kiya."
          },
          {
            "icon": "book",
            "title": "Exam Value",
            "body": "RC vs WebDriver ka farak classic 6-mark question hai."
          }
        ]
      },
      {
        "type": "diagram",
        "title": "Selenium RC",
        "kicker": "Diagram",
        "diagram": "st5-selenium-rc",
        "caption": "RC server architecture, JS injection, problems aur RC vs WebDriver"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Selenium RC ek server tha jo browser mein JavaScript inject karke use control karta tha.",
          "Architecture: test code → RC server (proxy + JS injection) → browser → application.",
          "Problems: slow, same-origin proxy, fragile injection, native events nahi, flaky.",
          "WebDriver ne RC ko replace kiya — 2011 merge, 2016 (Selenium 3) mein remove.",
          "RC ka contribution: any-language browser automation ka idea.",
          "Exam mein RC vs WebDriver ka table zaroor yaad rakho."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the architecture of Selenium RC and the reasons for its deprecation.",
        "answer": "**Selenium RC architecture:**\n\n1. **Test code** — client library (Java/Python/PHP) se commands banti hain.\n2. **RC server** — `selenium-server.jar` HTTP requests leta hai, browser launch karta hai.\n3. **JavaScript injection** — server browser mein JS (Selenium Core) inject karta hai.\n4. **Proxy** — same-origin policy bypass karne ke liye requests RC proxy se jaati hain.\n5. **Application under test** — actions perform hote hain; result server ko wapas.\n\n**Deprecation ke kaaran:**\n1. **JS injection fragile** — browser updates se toot jaata.\n2. **Proxy dependency** — setup complex, speed slow.\n3. **Native events nahi** — real user behaviour simulate karna mushkil.\n4. **Flaky** — alerts, iframes, uploads, popups.\n5. **WebDriver better** — native browser automation, no proxy, faster, more stable.\n6. **Selenium 3 (2016)** mein RC remove; Selenium 4 mein koi support nahi.\n\n**Diagram:** Refer to Selenium RC diagram."
      },
      {
        "question": "Differentiate between Selenium RC and Selenium WebDriver.",
        "answer": "**RC vs WebDriver:**\n\n| Point | Selenium RC | Selenium WebDriver |\n|---|---|---|\n| Architecture | Server + JS injection | Native browser driver |\n| Proxy | Required (same-origin policy) | Not required |\n| Speed | Slow (proxy + JS) | Fast (native commands) |\n| Browser control | Injected JavaScript | Browser's own automation API |\n| Native events | Limited | Full (keyboard, mouse, actions) |\n| Headless / modern browsers | Weak | Strong |\n| Stability | Flaky | Stable |\n| Status | Deprecated, removed in Selenium 3 | Current standard (W3C) |\n| Interface | `DefaultSelenium` | `WebDriver` / `RemoteWebDriver` |\n\n**Analogy:** RC = remote control se TV chalaney ke liye beech mein ek aadmi (proxy). WebDriver = seedha TV ka native remote.\n\n**Diagram:** Refer to Selenium RC diagram."
      },
      {
        "question": "What was the contribution of Selenium RC to the Selenium project?",
        "answer": "**Contributions:**\n\n1. **Any-language automation** — pehli baar Java, Python, PHP, Ruby se browser control possible hua; client-server design ne language independence di.\n2. **Selenium Core ka reuse** — JS-based core ko server ke through drive kiya.\n3. **Parallel tooling** — RC servers ke saath Grid ka concept aage badha.\n4. **Industry adoption** — Selenium ko enterprise projects tak pahunchaya.\n5. **WebDriver ke liye raasta** — RC ki limitations ne hi native automation (WebDriver) ki zaroorat dikhayi; 2011 mein dono merge hue (Selenium 2.0).\n6. **Test design lessons** — proxy/injection based automation ke problems se industry ne waits, locators aur stable frameworks seekhe.\n\n**Summary line:** RC ne Selenium ko popular banaya, WebDriver ne use sahi banaya.\n\n**Diagram:** Refer to Selenium RC diagram."
      }
    ]
  },
  {
    "id": "selenium-webdriver",
    "number": "5.15",
    "title": "Selenium WebDriver",
    "subtitle": "W3C protocol, driver binary, commands, locators aur waits",
    "icon": "code",
    "accent": "#00aaff",
    "englishDefinition": "Selenium WebDriver is the core Selenium API that controls a real browser through the browser's native automation interface. Test code written in a supported language is translated by the language binding into W3C WebDriver JSON commands, which are sent to a browser driver binary such as chromedriver or geckodriver that in turn controls the actual browser. WebDriver provides element locators, waits, actions, alerts, frames and window handling, and forms the basis on which automation frameworks are built.",
    "intro": "WebDriver Selenium ka dil hai. Iska architecture yaad rakho: test code → language binding → W3C JSON → driver binary → real browser. Isme locators aur waits sabse zyada poochhe jaate hain, kyunki inhi do cheezon par test ki stability depend karti hai.",
    "sections": [
      {
        "type": "definition",
        "title": "WebDriver Kya Hai",
        "kicker": "Definition",
        "body": "Selenium WebDriver ek programming interface hai jo browser ko native automation API ke through control karta hai. Aapka test code language binding se W3C WebDriver JSON commands banta hai, jo browser driver (chromedriver, geckodriver) ko HTTP par jaate hain, aur driver real browser ko control karta hai.",
        "body2": "WebDriver ka bada fayda: **real browser, real user jaisa behaviour** — koi JavaScript injection nahi, koi proxy nahi. Isi liye ye fast, stable aur modern web apps (SPA, dynamic DOM) ke liye suitable hai. Selenium 4 sirf W3C protocol use karta hai.",
        "chips": ["W3C protocol", "Driver binary", "Real browser", "No injection", "Multi-language"]
      },
      {
        "type": "points",
        "title": "WebDriver Ke Basic Commands",
        "kicker": "Commands",
        "points": [
          "**driver.get(url)** — page kholo. **driver.getTitle() / getCurrentUrl()** — info lo.",
          "**findElement(By.id(..))** — element dhoondho; **findElements** — list.",
          "**sendKeys()** — type karo. **click()** — click. **clear()** — field saaf.",
          "**getText() / getAttribute()** — value padho. **isDisplayed() / isEnabled()** — state check.",
          "**navigate().to/back/forward/refresh** — browser navigation.",
          "**switchTo().alert()/frame()/window()** — alert, iframe, tab handle karo.",
          "**Actions** — hover, drag & drop, double click, key-down/up. **JavascriptExecutor** — JS execute.",
          "**driver.quit()** — browser band karo aur session free karo."
        ]
      },
      {
        "type": "cards",
        "title": "Locators Aur Waits",
        "kicker": "Concept",
        "cards": [
          {
            "icon": "target",
            "title": "8 Locators",
            "body": "id, name, className, tagName, linkText, partialLinkText, cssSelector, xpath."
          },
          {
            "icon": "check",
            "title": "Priority Order",
            "body": "id → name → cssSelector → relative XPath. Jo stable aur readable ho wahi best."
          },
          {
            "icon": "warn",
            "title": "Avoid",
            "body": "Absolute XPath, dynamic id (auto-generated), index-based locator, brittle text."
          },
          {
            "icon": "clock",
            "title": "Implicit Wait",
            "body": "Global timeout — driver har findElement par wait karta hai. Simple par blunt."
          },
          {
            "icon": "eye",
            "title": "Explicit Wait",
            "body": "Condition-specific (`visibilityOfElementLocated`) — recommended approach."
          },
          {
            "icon": "refresh",
            "title": "Fluent Wait",
            "body": "Polling interval + ignored exceptions — advanced control."
          }
        ]
      },
      {
        "type": "diagram",
        "title": "Selenium WebDriver",
        "kicker": "Diagram",
        "diagram": "st5-selenium-webdriver",
        "caption": "Binding → W3C protocol → driver binary → browser, commands, locators aur waits"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "WebDriver architecture: test code → binding → W3C JSON → driver binary → real browser.",
          "Koi JS injection aur proxy nahi — isliye fast aur stable.",
          "8 locators: id, name, className, tagName, linkText, partialLinkText, cssSelector, xpath.",
          "Priority: id → name → CSS → relative XPath; absolute XPath aur dynamic id avoid.",
          "Waits: implicit (global), explicit (condition — recommended), fluent (polling), sleep (avoid).",
          "Selenium 4 W3C-only hai; Selenium Manager driver setup automate karta hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the architecture of Selenium WebDriver.",
        "answer": "**Selenium WebDriver architecture (4 layers):**\n\n1. **Test code** — Java/Python/JS mein likha test (Page Object + assertions).\n2. **Language binding** — `selenium-webdriver` library commands ko W3C JSON payload mein badalti hai.\n3. **W3C WebDriver protocol (HTTP/JSON)** — commands driver binary ko jaate hain (jaise `POST /session/{id}/element`).\n4. **Browser driver** — `chromedriver`, `geckodriver`, `msedgedriver`, `safaridriver` — browser ko native API se control karta hai.\n5. **Real browser** — Chrome, Firefox, Edge, Safari — actual page load, click, type.\n\n**Flow:** `driver.findElement(By.id(\"email\"))` → HTTP request → driver → browser DOM → response (element id) → binding `WebElement` object.\n\n**Key points:**\n- Koi JavaScript injection nahi, koi proxy nahi → fast aur stable.\n- Selenium 4 sirf W3C protocol use karta hai.\n- Selenium Manager driver setup automate karta hai.\n\n**Diagram:** Refer to Selenium WebDriver diagram."
      },
      {
        "question": "What are locators in Selenium? Explain the types and best practices.",
        "answer": "**Locator:** Wo address jisse WebDriver page mein element dhoondhta hai.\n\n**8 types:**\n1. **id** — fastest aur most reliable (agar unique ho).\n2. **name** — form fields ke liye common.\n3. **className** — CSS class; multiple elements ho sakte hain.\n4. **tagName** — `input`, `button`; usually filter ke saath.\n5. **linkText** — poora link text.\n6. **partialLinkText** — link text ka hissa.\n7. **cssSelector** — fast, readable (`#login .btn`, `input[name=email]`).\n8. **xpath** — powerful (text, parent, relative); relative XPath recommended.\n\n**Best practices:**\n- Priority: **id → name → CSS → relative XPath**.\n- **Avoid:** absolute XPath (`/html/body/div[2]/...`), auto-generated id (`:r1:`), index-based (`div[3]`), position-dependent text.\n- Developers se **data-testid** attribute add karwao — most stable.\n- Dynamic elements ke liye `contains()`, `starts-with()`, `normalize-space()` use karo.\n- Page Object Model mein locators ek hi jagah rakho.\n\n**Diagram:** Refer to Selenium WebDriver diagram."
      },
      {
        "question": "Explain the different types of waits in Selenium WebDriver.",
        "answer": "**1. Implicit Wait**\n- Global setting: driver har `findElement` par diye gaye time tak wait karta hai.\n- `driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));`\n- ✔ Simple · ✘ sab elements par same, condition-aware nahi, mixing se unpredictable delays.\n\n**2. Explicit Wait**\n- Specific condition ke liye wait — `WebDriverWait` + `ExpectedConditions`.\n- `new WebDriverWait(driver, Duration.ofSeconds(10)).until(ExpectedConditions.visibilityOfElementLocated(By.id(\"btn\")));`\n- ✔ Precise, fast fail on timeout, recommended · ✘ code thoda verbose.\n\n**3. Fluent Wait**\n- Explicit wait ka advanced form: timeout + polling interval + ignored exceptions (jaise `NoSuchElementException`).\n- ✔ Element jo intermittent aata hai, uske liye best · ✘ zyada config.\n\n**4. Hard wait (`Thread.sleep`)**\n- Fixed time rukna — **avoid karo**. Slow aur flaky dono banata hai.\n\n**Kyun zaroori:** AJAX, spinner, animation aur lazy load ki wajah se element turant available nahi hota. Bina wait ke `NoSuchElementException` / `ElementNotInteractableException` aata hai.\n\n**Diagram:** Refer to Selenium WebDriver diagram."
      }
    ]
  },
  {
    "id": "selenium-grid",
    "number": "5.16",
    "title": "Selenium Grid",
    "subtitle": "Hub-node architecture, capabilities aur parallel execution",
    "icon": "network",
    "accent": "#ff8800",
    "englishDefinition": "Selenium Grid is a component of the Selenium suite that allows tests to be run in parallel and distributed across multiple machines, browsers and platforms. In Selenium 3 a hub received test requests and routed them to registered nodes based on desired capabilities, while Selenium 4 replaced this with a router, distributor, session map and nodes. Grid reduces total execution time and provides cross-browser and cross-platform coverage, but requires the test suite to be independent and parallel-safe.",
    "intro": "Grid ka ek hi kaam hai: suite ko fast banana aur browser matrix cover karna. Par Grid tabhi kaam karta hai jab tests independent hon — shared data ya order dependency ho to parallel run flaky ho jaata hai. Isliye Grid se pehle test design theek karo, phir machines badhao.",
    "sections": [
      {
        "type": "definition",
        "title": "Selenium Grid Kya Hai",
        "kicker": "Definition",
        "body": "Selenium Grid ek tool hai jo tests ko parallel aur distributed tarike se kai machines, browsers aur platforms par chalata hai. Selenium 3 mein **Hub + Nodes** model tha; Selenium 4 mein **Router, Distributor, Session Map aur Nodes** hote hain.",
        "body2": "Grid ka fayda: 4 browsers × 100 tests sequential 40 minute mein chalte hain, parallel mein 12 minute mein. Grid ke liye tests **parallel-safe** hone chahiye — independent, apna data khud banane wale aur kisi order par depend na karne wale.",
        "chips": ["Hub / Router", "Nodes", "Parallel", "Cross-browser", "Capabilities"]
      },
      {
        "type": "points",
        "title": "Grid Ke Concepts",
        "kicker": "Components",
        "points": [
          "**Hub / Router** — test requests leta hai aur matching node ko bhejta hai.",
          "**Node** — actual machine/browser jahan test chalta hai (Chrome on Windows, Firefox on Ubuntu).",
          "**Capabilities** — `browserName`, `platformName`, `browserVersion` — kaunsa browser chahiye.",
          "**Options (Selenium 4)** — `ChromeOptions`, `FirefoxOptions` capabilities ke saath.",
          "**Docker** — `selenium/hub`, `selenium/node-chrome` images se minutes mein grid.",
          "**Cloud grids** — BrowserStack, Sauce Labs, LambdaTest — infra manage karne ki zaroorat nahi."
        ]
      },
      {
        "type": "cards",
        "title": "Parallel Testing Ke Challenges",
        "kicker": "Care Points",
        "cards": [
          {
            "icon": "grid",
            "title": "Fayda: Speed",
            "body": "Suite time browser count ke hisaab se kam ho jaata hai."
          },
          {
            "icon": "globe",
            "title": "Fayda: Coverage",
            "body": "Ek hi run mein cross-browser + cross-OS matrix cover."
          },
          {
            "icon": "warn",
            "title": "Risk: Shared data",
            "body": "Do tests same account/row update karein — flaky. Per-test data banao."
          },
          {
            "icon": "warn",
            "title": "Risk: Order dependency",
            "body": "Test B ko test A ke data par bharosa — parallel mein fail."
          },
          {
            "icon": "warn",
            "title": "Risk: Port/session limit",
            "body": "Ek node par bahut sessions = timeout; thread count tune karo."
          },
          {
            "icon": "check",
            "title": "Practice",
            "body": "Smoke fast, regression nightly, report aggregate karo (Allure/TestNG)."
          }
        ]
      },
      {
        "type": "diagram",
        "title": "Selenium Grid",
        "kicker": "Diagram",
        "diagram": "st5-selenium-grid",
        "caption": "Hub/Router, nodes, capabilities, Docker aur parallel ka fayda"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Grid parallel aur distributed execution ke liye hai — hub/router + nodes.",
          "Capabilities (browserName, platformName, browserVersion) se node match hota hai.",
          "Selenium 4 mein hub-node ki jagah Router, Distributor, Session Map, Nodes.",
          "Fayda: suite fast + cross-browser/OS coverage ek hi run mein.",
          "Parallel ke liye tests independent hone chahiye — shared data aur order dependency flaky banate hain.",
          "Docker (selenium/hub, selenium/node-chrome) aur cloud grids (BrowserStack, Sauce Labs) use karo."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is Selenium Grid? Explain its architecture and advantages.",
        "answer": "**Selenium Grid:** Parallel aur distributed execution ke liye tool — tests ko multiple machines, browsers aur OS par ek saath chalata hai.\n\n**Architecture (Selenium 3):**\n- **Hub** — central point, test requests leta hai, capabilities match karke node chunta hai.\n- **Node** — browser instance (Chrome/Windows, Firefox/Ubuntu) jahan test actually chalta hai.\n\n**Architecture (Selenium 4):**\n- **Router** — requests ka entry point.\n- **Distributor** — node slots track karta hai.\n- **Session Map** — session ID → node mapping.\n- **Nodes** — browsers.\n\n**Advantages:**\n1. **Speed** — parallel execution se suite time kam.\n2. **Cross-browser coverage** — ek hi run mein Chrome/Firefox/Edge/Safari.\n3. **Cross-platform** — Windows/Linux/macOS nodes.\n4. **Scalability** — nodes add karke capacity badhao.\n5. **CI friendly** — nightly regression, Docker grid.\n6. **Cost** — cloud grid se infra manage nahi karna padta.\n\n**Diagram:** Refer to Selenium Grid diagram."
      },
      {
        "question": "How do capabilities work in Selenium Grid? Give an example.",
        "answer": "**Capabilities:** Key-value pairs jo batate hain ki test ko kaunsa browser, version aur platform chahiye. Hub/Router inhe node ke saath match karta hai.\n\n**Selenium 3 style:**\n```java\nDesiredCapabilities caps = new DesiredCapabilities();\ncaps.setBrowserName(\"chrome\");\ncaps.setPlatform(Platform.WINDOWS);\nnew RemoteWebDriver(new URL(\"http://localhost:4444/wd/hub\"), caps);\n```\n\n**Selenium 4 style (recommended):**\n```java\nChromeOptions options = new ChromeOptions();\noptions.setBrowserVersion(\"latest\");\noptions.setPlatformName(\"Windows 11\");\nnew RemoteWebDriver(new URL(\"http://localhost:4444\"), options);\n```\n\n**Common capabilities:** `browserName`, `browserVersion`, `platformName`, `acceptInsecureCerts`, `pageLoadStrategy`, plus browser-specific options (headless, download dir, mobile emulation).\n\n**Matching rules:** exact match nahi mila to Grid request queue mein rakhta hai; timeout ho to `SessionNotCreatedException`.\n\n**Diagram:** Refer to Selenium Grid diagram."
      },
      {
        "question": "What are the challenges of parallel testing with Selenium Grid and how do you handle them?",
        "answer": "**Challenges:**\n\n1. **Shared test data** — do tests same user/account use karein → conflict. *Fix:* per-test unique data (API/factory), namespaced DB rows.\n2. **Test order dependency** — ek test doosre ke banaye data par depend. *Fix:* independent atomic tests, `@BeforeMethod` setup.\n3. **Environment inconsistency** — nodes ke browser/OS versions alag. *Fix:* Docker images pin karo, same base image.\n4. **Resource limits** — node par zyada sessions = timeout. *Fix:* thread count = node slots, queue monitoring.\n5. **Flakiness** — timing aur network variability. *Fix:* explicit waits, retry with root-cause tracking.\n6. **Reporting** — parallel logs mix ho jaate hain. *Fix:* thread-safe reporting (Allure, TestNG listeners), per-test screenshots.\n7. **Debugging** — failure reproduce karna mushkil. *Fix:* video/screenshot, session ID logs, trace.\n8. **Cost** — cloud grid minutes ka paisa. *Fix:* smoke locally, full matrix nightly.\n\n**Diagram:** Refer to Selenium Grid diagram."
      }
    ]
  },
  {
    "id": "test-design-considerations",
    "number": "5.17",
    "title": "Test Design Considerations",
    "subtitle": "Achhe automated test ke principles — independence, locators, waits, data aur assertions",
    "icon": "design",
    "accent": "#aa00ff",
    "englishDefinition": "Test design considerations in automation testing are the principles applied while writing automated tests: tests must be independent and atomic, locators must be stable and unique, waits must be condition based rather than fixed, test data must be created and cleaned up per test, assertions must verify business outcomes rather than only interactions, and tests must be named, organised and reported so that failures are immediately diagnosable.",
    "intro": "Unit V ka aakhri topic poore unit ka nichod hai: agar aapke tests independent hain, locators stable hain, waits condition-based hain aur assertions business value check karte hain — to automation kaam karega. Warna chaahe tool koi bhi ho, suite 6 mahine mein bekaar ho jaayegi.",
    "sections": [
      {
        "type": "definition",
        "title": "Test Design Considerations",
        "kicker": "Definition",
        "body": "Test design considerations in automation are the principles used to write maintainable, reliable and meaningful automated tests: each test should be independent and atomic, locators should be stable, waits should be condition based instead of fixed sleeps, test data should be created and cleaned per test, assertions should verify business outcomes, and tests should be named, organised and reported so that a failure immediately communicates what broke.",
        "body2": "Automation ka 80% dard galat test design se aata hai, tool se nahi. Jo suite 6 mahine baad bhi green rehti hai, uski buniyad yehi principles hoti hain — independent, readable, data-isolated aur deterministic tests.",
        "chips": ["Independent", "Atomic", "Stable locators", "Condition waits", "Test data", "Meaningful asserts"]
      },
      {
        "type": "cards",
        "title": "8 Design Principles",
        "kicker": "Principles",
        "cards": [
          {
            "icon": "check",
            "title": "1. Independent Tests",
            "body": "Koi test doosre par depend na kare; test 3 akela bhi pass ho."
          },
          {
            "icon": "target",
            "title": "2. Atomic & Focused",
            "body": "Ek test = ek behaviour; fail hone par wajah saaf pata chale."
          },
          {
            "icon": "search",
            "title": "3. Stable Locators",
            "body": "`data-testid`, id, relative XPath — index ya absolute path nahi."
          },
          {
            "icon": "clock",
            "title": "4. Wait on Condition",
            "body": "Explicit wait; `Thread.sleep()` nahi."
          },
          {
            "icon": "table",
            "title": "5. Test Data Strategy",
            "body": "API/factory se data banao, cleanup karo; shared DB state nahi."
          },
          {
            "icon": "layers",
            "title": "6. Page Objects",
            "body": "Locators ek jagah; UI change par ek hi file badle."
          },
          {
            "icon": "eye",
            "title": "7. Meaningful Assertions",
            "body": "Sirf click nahi — status, text, DB row, API response verify karo."
          },
          {
            "icon": "doc",
            "title": "8. Naming & Reporting",
            "body": "Intent batane wala naam; fail par screenshot + log attach."
          }
        ]
      },
      {
        "type": "definition",
        "title": "Dirty Test vs Clean Test",
        "kicker": "Example",
        "body": "**Dirty:** `test1` user banata hai → `test2` usi user par login karta hai. Test 2 akela chalao to fail, aur parallel run mein bhi fail. Ye order dependency hai.",
        "body2": "**Clean:** har test `beforeEach` mein API se apna unique user banata hai, phir login karta hai, phir cleanup karta hai. Test akela bhi pass, parallel mein bhi pass, aur failure ka reason bhi saaf. Design ka asar seedha flakiness aur maintenance cost par padta hai.",
        "chips": ["No order dependency", "Self setup", "Self cleanup", "Deterministic"]
      },
      {
        "type": "diagram",
        "title": "Test Design Considerations",
        "kicker": "Diagram",
        "diagram": "st5-test-design",
        "caption": "8 design principles, dirty vs clean test example aur pyramid balance"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Tests independent aur atomic hone chahiye — order dependency sabse bada dushman.",
          "Locators stable rakho: data-testid, id, relative XPath — index/absolute nahi.",
          "Condition-based explicit waits use karo, Thread.sleep() kabhi nahi.",
          "Har test apna data banaye aur cleanup kare (API/factory), shared DB state nahi.",
          "Assertions business outcome verify karein — sirf click nahi, status/text/DB/API bhi.",
          "Naming + reporting: fail dekh kar hi pata chale kya toota; screenshot/log attach ho."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What are the important test design considerations for automation testing?",
        "answer": "**Design considerations:**\n\n1. **Independent tests** — koi test doosre par depend na kare; akela bhi chale.\n2. **Atomic & focused** — ek test ek behaviour verify kare; fail par reason clear.\n3. **Stable locators** — `data-testid`, id, relative XPath; index/absolute XPath avoid.\n4. **Condition-based waits** — explicit waits; `Thread.sleep()` avoid.\n5. **Test data strategy** — per-test data create + cleanup, shared DB state avoid.\n6. **Page Object Model** — locators aur actions page class mein, test sirf business steps.\n7. **Meaningful assertions** — UI + API + DB cross-check, sirf click nahi.\n8. **Naming & structure** — intent batane wala naam, suite/tag organisation (smoke, regression).\n9. **Reporting & evidence** — screenshot, log, video on failure.\n10. **Balance** — pyramid follow karo (zyada unit/API, kam UI).\n\n**Diagram:** Refer to Test Design Considerations diagram."
      },
      {
        "question": "Why should tests be independent? What problems do dependent tests cause?",
        "answer": "**Independent test:** Apna setup, apna data, apna cleanup — kisi doosre test ke result ya data par depend nahi.\n\n**Dependent tests ke problems:**\n1. **Order dependency** — test 2 sirf tab pass jab test 1 pehle chala ho.\n2. **Parallel run fail** — Grid par order control nahi hota.\n3. **Partial run impossible** — single test debug nahi kar sakte.\n4. **Cascading failures** — ek test fail hua to 10 aage wale bhi fail.\n5. **Flaky suite** — intermittent failures ka root cause dhoondhna mushkil.\n6. **Slow feedback** — poora suite chalana padta hai har verification ke liye.\n7. **Data pollution** — ek test ka data doosre test ka result badal deta hai.\n\n**Solution:**\n- Har test ka `beforeEach` setup (API se unique user/order banao).\n- `afterEach` cleanup (delete/rollback).\n- Shared helpers se data banao, hard-coded ids se nahi.\n- Test names mein intent likho (jaise \"checkout fails for expired coupon\").\n\n**Diagram:** Refer to Test Design Considerations diagram."
      },
      {
        "question": "What makes a good automated test? Explain with an example of a bad and a good test.",
        "answer": "**Good automated test ki properties:** independent, atomic, readable, deterministic, fast, meaningful assertion, good name, evidence on failure.\n\n**Bad test:**\n```\n@Test testFlow() {\n  driver.get(\"https://shop.test\");\n  click(\"login\"); type(\"email\", \"riya@mail.com\"); type(\"pass\", \"123\");\n  click(\"submit\");\n  click(\"addToCart\"); click(\"checkout\"); click(\"pay\");\n  // no assertion\n}\n```\n**Problems:** multiple behaviours ek test mein, shared hard-coded user, koi wait nahi, koi assertion nahi, absolute XPath locators, order dependency.\n\n**Good test:**\n```\n@Test placeOrderWithValidCoupon() {\n  User u = api.createUser();                       // fresh data\n  CartPage cart = loginPage.login(u).addProduct(\"SKU-101\");\n  OrderPage order = cart.checkout().applyCoupon(\"SUMMER20\").pay();\n  assertEquals(order.total(), 960);                // business assertion\n  assertTrue(order.isConfirmed());\n  api.deleteUser(u);                               // cleanup\n}\n```\n**Kyun good:** ek behaviour, fresh data, POM se readable, explicit wait page objects mein, business value assert, cleanup.\n\n**Diagram:** Refer to Test Design Considerations diagram."
      }
    ]
  },
];
