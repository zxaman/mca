// One Shot revision notes — Software Testing and Quality Assurance.

export const stqaOneShot = {
  subjectId: 'software-testing',
  code: 'STQA',
  accent: '#0047ff',
  blurb: 'SQA fundamentals se Selenium tak — 5 units ka ek page per unit',
  units: [
    {
      id: 'unit-1',
      number: '1',
      name: 'Fundamentals of Software Quality Assurance',
      tagline: 'Quality ke definitions, SQA components, metrics aur COQ — unit 1 ka poora saar',
      overview: 'Poore unit ka ek hi sawaal hai: quality ka matlab kya hai aur usse naap kaise karein. Pehle definition aur SQA system, phir models aur 7 QC tools, phir metrics (complexity, availability, DRE), aur aakhir mein FMEA, QFD, Taguchi aur COQ — sab ka maksad ek: galti jitni pehle pakdi jaaye, utna sasta padta hai.',
      minutes: 22,
      sections: [
        {
          title: '1.1–1.5 · Quality kya hai + SQA system + planning',
          simple: 'Simple mein: quality ka matlab sirf bug-free nahi — customer ka kaam bina dikkat, sahi waqt par ho jaaye.',
          example: 'Jaise ek UPI app: paisa 2 second mein kata, sahi aadmi ko gaya, app hang nahi hui — yahi quality hai.',
          text: `- **Software quality (IEEE):** product ya service ki ability jo stated aur implied needs ko satisfy kare — "fit for use" + "fitness for purpose".
- **Quality ke 3 views:** transcendental (recognise kar sakte ho, define mushkil), user-based (jo user chahe), manufacturing-based (spec se match), product-based (attributes measurable), value-based (cost vs worth).
- **QA vs QC:**

| Point | QA (assurance) | QC (control) |
|---|---|---|
| Focus | process | product |
| Nature | preventive | detective |
| Kaam | process define + audit | testing + inspection |
| Timing | build se pehle aur saath | build ke baad |

- **SQA components:** pre-project quality components (contract review, plan), project life-cycle (reviews, testing, expert opinion), infrastructure (procedures, tools, templates), management (control, audit), standards + certification + assessment.
- **Product vs process quality:** process quality = "kaise bana"; product quality = "kya bana" — process sudhre to product repeatable hota hai.
- **Planning (SQA plan):** scope, standards, reviews, test strategy, tools, metrics, schedule, responsibilities, risk.
- **Business context:** late defect = 5–100× mehnga; quality se cost ghatti hai (rework kam), trust aur compliance bachta hai.`,
          diagram: 'sqa-components',
          caption: 'SQA system ke components — pre-project, life-cycle, infrastructure, management aur standards.',
        },
        {
          title: '1.6–1.9 · Process models, 7 QC tools, QA models, trends',
          simple: 'Simple mein: process model kaam karne ka fixed tarika hai, taaki quality luck par na chhode.',
          example: 'Restaurant ki kitchen jaisa: har dish ke steps fix, isliye roz taste same. Software mein wahi V model, Agile, 7 QC tools.',
          text: `- **Process models:** waterfall (phase-wise), V-model (development ↔ testing pair), spiral (risk-driven), iterative/incremental, agile (short sprint + continuous testing).
- **7 QC tools:** Pareto (80/20), cause-effect (fishbone), check sheet, control chart, histogram, scatter, flowchart/run chart.
- **QA models:** CMM/CMMI (maturity levels 1–5), ISO 9001, Six Sigma (DMAIC), TMM (testing maturity).
- **Trends:** shift-left, test automation + CI/CD, AI-assisted test generation, cloud device farms, security and accessibility as default quality gates, DevSecOps.`,
          diagram: 'qc-tools-overview',
          caption: '7 QC tools ka overview — Pareto se control chart tak.',
        },
        {
          title: '1.10–1.14 · Security testing, complexity, QM metrics, availability, DRE',
          simple: 'Simple mein: metrics wo numbers hain jo batate hain quality kaisi chal rahi hai — bina naap ke sudhaar nahi hota.',
          example: 'App 2 ghante down rahi to availability 99.97%. Defect density se pata chala kaunsa module sabse zyada kharab hai.',
          text: `- **Security testing:** confidentiality, integrity, availability; common checks — authentication, authorisation, input validation (SQLi/XSS), session, encryption, error handling.
- **Complexity metrics (code level):**
  - LOC, Halstead (volume, difficulty, effort), McCabe cyclomatic \`V(G) = E − N + 2\` ya decisions + 1.
- **Quality management metrics:** defect density (defects/KLOC), defect removal efficiency, MTBF/MTTR, test coverage %, review effectiveness, customer-reported defects.
- **Availability:** \`Availability = MTBF / (MTBF + MTTR)\`.
- **DRE (Defect Removal Effectiveness):** \`DRE = (defects found before delivery / total defects) × 100\`.

**Example:** 90 pre-release + 10 post-release → DRE = 90/100 = 90%.`,
          diagram: 'dre-overview',
          caption: 'Defect Removal Effectiveness — kahan kitne defect pakde gaye, aur DRE ka calculation.',
        },
        {
          title: '1.15–1.18 · FMEA, QFD, Taguchi, COQ',
          simple: 'Simple mein: teeno ka maksad ek — galti hone se pehle pakadna aur customer ki asli zaroorat design mein utaarna.',
          example: 'FMEA: brake fail hona = severity 10, to pehle usi ko fix karo. COQ: bug production mein jaaye to 1 lakh ka nuksan, testing se 10 hazaar.',
          text: `- **FMEA:** failure mode, effect, severity (1–10), occurrence (1–10), detection (1–10); \`RPN = S × O × D\`; high RPN par action.
- **QFD:** customer needs ("what") ko technical requirements ("how") se House of Quality matrix mein jodta hai — "voice of customer".
- **Taguchi loss function:** \`L = k(y − m)²\` — spec ke andar bhi target se door jaane par loss badhta hai (binary pass/fail se better view).
- **COQ:** prevention + appraisal (good cost) aur internal + external failure (bad cost) — quality mein invest se failure cost ghatti hai.

**Exam line:** COQ ka argument — prevention par kharch karo, kyunki external failure sabse mehnga hai.`,
          diagram: 'coq-overview',
          caption: 'Cost of Quality ke chaar buckets — prevention, appraisal, internal failure, external failure.',
        },
        {
          title: '1.19 · SQA activities aur building blocks',
          simple: 'Simple mein: SQA quality ka watchman plus planner hai — plan banao, review karo, record rakho.',
          example: 'Har sprint mein test plan + code review + audit report — teeno milke SQA system banta hai.',
          text: `- **Activities:** SQA plan banana, standards define, reviews + audits, testing strategy, metrics collect, defect analysis, process improvement, training, supplier control.
- **Building blocks:** standards, procedures, templates, review process, test process, configuration management, measurement, tools, training, audit.
- **Ek line:** SQA = quality ko process mein build karna, end mein inspect karna nahi.`,
        },
      ],
      lastMinute: [
        'QA vs QC table (focus, nature, timing) — 3-mark ka favourite.',
        'COQ ke 4 buckets + ek example each.',
        'DRE, availability, defect density ke formula — numeric question aata hai.',
        'FMEA ka RPN formula S×O×D aur QFD ka "voice of customer".',
      ],
    },
    {
      id: 'unit-2',
      number: '2',
      name: 'Essentials of Software Testing',
      tagline: 'Testing basics, test plan/cases, defect life cycle aur V & W model',
      overview: 'Yahan testing ki ABCD hai — test kya hai, test plan aur test case kaise likhe jaate hain, defect ka poora safar (galti se failure tak), aur kitne levels par test hota hai (unit se acceptance tak). V aur W model bas yeh dikhate hain ki har development step ke saamne ek test step hota hai.',
      minutes: 16,
      sections: [
        {
          title: '2.1 · Testing basics',
          simple: 'Simple mein: testing bug dhoondhne ka bahana hai, asli kaam hai verify karna ki software waisa hi chalta hai jaisa socha tha.',
          example: 'Login page: sahi password se andar, galat password par error, blank chhodne par message — teen check, teen test case.',
          text: `- **Testing:** program/software ka evaluation — expected vs actual result compare (verification + validation).
- **Verification:** "kya hum product sahi bana rahe hain?" (spec ke against, static).
- **Validation:** "kya hum sahi product bana rahe hain?" (user need ke against, dynamic).
- **Testing ke objectives:** defect find karna, risk kam karna, confidence, quality evidence.
- **7 testing principles (ISTQB):** testing defect dikhata hai, exhaustive impossible, early testing, defect clustering, pesticide paradox, context dependent, "absence of errors" fallacy.
- **Error → defect → failure:** human error se defect, defect execute hone par failure; root cause analysis se fix.`,
          diagram: 'software-testing-basics-overview',
          caption: 'Testing basics — verification vs validation, error → defect → failure ka chain.',
        },
        {
          title: '2.2 · Test plan aur test case',
          simple: 'Simple mein: test plan exam ka timetable hai, test case ek-ek question with expected answer.',
          example: 'Test case: 0 rupaye ka order place karo, error aana chahiye. Input, steps aur expected output pehle se likha hota hai.',
          text: `- **Test plan (IEEE 829) ke sections:** objective, scope, strategy, features to test / not test, environment, schedule, roles, entry/exit criteria, risk, deliverables.
- **Test case:** id, objective, preconditions, test data, steps, expected result, actual result, status.
- **Test case design:** positive + negative, boundary + partition, traceable to requirement.
- **Hierarchy:** test plan → test design spec → test case → test procedure → test log → defect report.
- **Ek achha test case:** reproducible, independent, expected result clear, ek hi cheez check kare.`,
          diagram: 'test-plan-test-cases-overview',
          caption: 'Test plan ke sections aur test case ka structure.',
        },
        {
          title: '2.3 · Defect management',
          simple: 'Simple mein: insaan ki galti (error) code mein problem (defect) banti hai, aur user ko galat result (failure) dikhta hai.',
          example: 'Developer ne >= ki jagah > likh diya, code mein defect aa gaya, boundary value par discount fail ho gaya.',
          text: `- **Defect report ke fields:** id, title, description, steps to reproduce, expected vs actual, severity, priority, environment, attachment, status, assignee.
- **Severity vs priority:** severity = technical impact (client ke liye), priority = fix order (business ke liye).
- **Defect life cycle:** New → Assigned → Open → Fixed → Retest → Closed; branches: Reopen, Deferred, Rejected (not a bug / duplicate / won't fix).
- **Defect metrics:** defect density, leakage, removal rate, age, reopen rate.
- **Golden rule:** ek defect, ek report — duplicate merge karo, aur reproduce steps minimum rakho.
| Term | Matlab | Example |
|---|---|---|
| Error | insaan ki galti | developer ne condition ulti likhi |
| Defect/Fault | code mein actual problem | wrong condition code mein baithi |
| Failure | run time par galat output | discount galat lag gaya |
| Bug | defect ka informal naam | tester ne report kiya |
`,
          diagram: 'defect-management-overview',
          caption: 'Defect life cycle aur defect report ke fields.',
        },
        {
          title: '2.4 · Levels of testing + V & W model',
          simple: 'Simple mein: naya ghar lete waqt pehle har kamra check karte hain, phir poora ghar, phir family ke saath shift — wahi levels hain.',
          example: 'Unit (ek function) se integration (modules jode) se system (poora app) se acceptance (client ne khud try kiya).',
          text: `- **Levels:** unit → integration → system → acceptance. (Unit tester = developer; acceptance = customer.)
- **V-model:** left side requirement → design, right side unit → integration → system → acceptance testing; har left phase ka ek right verification counterpart.
- **W-model:** testing ko development ke saath har phase par align karta hai — do "V" milkar W banta hai; reviews bhi parallel.
- **Entry/exit criteria:** entry = environment ready, build stable; exit = coverage + defect threshold met.

**Exam line:** V-model mein testing plan development ke saath shuru hota hai, code ke baad nahi.`,
          diagram: 'st2-levels-testing',
          caption: 'V-model aur testing levels — unit se acceptance tak.',
        },
      ],
      lastMinute: [
        'Verification vs validation ka ek line farq + example.',
        'Test plan ke 8 sections aur test case ke fields.',
        'Severity vs priority — 2 example se explain karo.',
        'V-model ka diagram: har development phase ke saamne kaun sa test level.',
      ],
    },
    {
      id: 'unit-3',
      number: '3',
      name: 'Software Testing Techniques',
      tagline: 'Static se domain testing tak — black box, white box aur coverage',
      overview: 'Ye unit “kaise test karein” ka jawab deta hai. Static testing (code padh ke) se shuru, phir structural/coverage aur mutation, phir black-box techniques jaise BVA aur equivalence partitioning. Har technique ka apna use case hai, isliye dono taraf ki soch zaroori hai.',
      minutes: 24,
      sections: [
        {
          title: '3.1–3.4 · Static, structural, coverage, complexity',
          simple: 'Simple mein: static testing code chalaye bina padh ke bug dhoondhna hai, structural testing andar ke raaste cover karna.',
          example: 'Code review mein hi pakda ki password log ho raha hai — wahan run karne ki zaroorat hi nahi. Coverage ne bataya 8 branch mein se sirf 5 test hui.',
          text: `- **Static testing:** code run kiye bina — review, walkthrough, inspection, static analysis tools (lint, PMD, SonarQube).
- **Structural (white box):** code ke andar ka logic — statement, branch, path testing.
- **Coverage types:**
  - Statement coverage = executed statements / total statements.
  - Branch/decision coverage = executed branches / total branches.
  - Condition/MC-DC coverage, path coverage (sabse strong, practical nahi).
- **Cyclomatic complexity:** \`V(G) = E − N + 2\` = number of decisions + 1 = independent paths.
  - \`V(G) ≤ 10\` maintainable, 11–20 complex, > 20 high risk.
- **Mutation testing:** code mein chhoti galti (mutant) daalo; test suite usse pakde to test strong. Mutation score = killed mutants / total mutants.`,
          diagram: 'st3-coverage',
          caption: 'Statement, branch aur path coverage — kaun kitna strong hai.',
        },
        {
          title: '3.5–3.7 · Mutation, requirement-based, positive/negative',
          simple: 'Simple mein: mutation testing code mein jaan-boojh ke chhoti galti daal ke dekhta hai ki test pakadta hai ya nahi.',
          example: 'Positive: sahi email se form submit. Negative: abc@ daala to error message aana chahiye.',
          text: `- **Mutation testing:** mutant operators (arithmetic, relational, logical), equivalent mutants ignore karo, score high = suite good.
- **Requirement-based testing:** har requirement ka traceability matrix — requirement → test case → result; coverage of requirements bhi measure hota hai.
- **Positive testing:** valid data se happy path (system kya sahi karta hai).
- **Negative testing:** invalid data se error handling (system galat input par kaise behave karta hai) — dono zaroori.`,
        },
        {
          title: '3.8–3.9 · BVA aur equivalence partitioning',
          simple: 'Simple mein: EP har group se ek sample leta hai, BVA kinaare par nazar rakhta hai.',
          example: 'Age field 18 se 60: EP se 25, 10, 70 test karo; BVA se 17, 18, 19, 59, 60, 61 — kinaare par bug sabse zyada milte hain.',
          text: `- **Equivalence partitioning:** input ko classes mein todo (valid/invalid); ek value per class kaafi.
  - Example: age 18–60 valid → classes: <18 invalid, 18–60 valid, >60 invalid = 3 test cases.
- **BVA (boundary value analysis):** boundary par defect zyada — 18–60 ke liye test: 17, 18, 19, 59, 60, 61.
- **Robust BVA:** min−1, min, min+1, max−1, max, max+1.
- **Combined:** EP se classes nikalo, BVA se unke kinare test karo.
- **Trap:** BVA sirf EP ke saath kaam karta hai — bina class ke boundary ka matlab nahi.
| Technique | Input kaise chunte hain | Example (valid 1–100) |
|---|---|---|
| Equivalence partitioning | har class se ek value | 50, 0, 101 |
| Boundary value analysis | class ke kinaare | 0, 1, 2, 99, 100, 101 |
| Error guessing | experience se | blank, -1, 999 |
`,
          diagram: 'st3-bva',
          caption: 'Boundary value analysis — valid range ke kinare par test values.',
        },
        {
          title: '3.10–3.13 · State/graph, compatibility, documentation, domain',
          simple: 'Simple mein: state testing ATM jaisa sochna hai — ab is state se next kya ho sakta hai.',
          example: 'Compatibility: Chrome, Safari, Android 10, iPhone SE par same dikhe. Documentation test: help page ke screenshot current version ke hain?',
          text: `- **State-based / graph-based:** system ke states aur transitions ka graph; coverage = sab states visit, sab transitions exercise, illegal transitions test.
- **Compatibility testing:** OS, browser, device, network, database versions — matrix banao aur priority lagao.
- **Documentation testing:** user manual, help, install guide — steps sahi hain, screenshots match karte hain.
- **Domain testing:** input domain ko partition karke minimum tests se maximum defects — BVA + EP ka practical form; boundary "on, near, off".
- **Static vs dynamic ka farq:** static code padhta hai, dynamic code chalata hai.`,
        },
      ],
      lastMinute: [
        'Cyclomatic complexity formula + ek numeric example (E−N+2).',
        'Statement vs branch vs path coverage — kaun kitna strong.',
        'EP + BVA ke saath 18–60 age wala example likho.',
        'Mutation testing ka score aur equivalent mutant ka matlab.',
      ],
    },
    {
      id: 'unit-4',
      number: '4',
      name: 'Testing Strategies',
      tagline: 'Integration se performance, regression, usability aur web/DB testing',
      overview: 'Ab strategy ka sawaal: kis order mein aur kis scale par test karna hai. Integration, system aur acceptance se shuru, phir performance, regression aur usability jaisi special testing, aur end mein GUI, web aur database jaise domains.',
      minutes: 20,
      sections: [
        {
          title: '4.1–4.2 · Integration, system, acceptance',
          simple: 'Simple mein: integration alag-alag bane parts ko jod ke dekhna, system poora product, acceptance client ki final haan.',
          example: 'Cart aur payment gateway jode, paisa kat gaya par order nahi bana — ye integration bug hai.',
          text: `- **Integration approaches:** big-bang (sab ek saath), top-down (stubs), bottom-up (drivers), sandwich/hybrid, incremental.
- **Stub vs driver:** stub = neeche wale module ka dummy (top-down mein), driver = upar wale ka dummy (bottom-up mein).
- **System testing:** poora system, end-to-end, functional + non-functional (performance, security, usability).
- **Acceptance testing types:** alpha (developer site par, internal), beta (real user, real environment), UAT (business sign-off), contract/regulation acceptance.
- **Entry criteria:** integration ke baad stable build + test data ready.`,
          diagram: 'st4-integration',
          caption: 'Integration testing ke approaches — top-down (stub), bottom-up (driver), sandwich.',
        },
        {
          title: '4.3–4.7 · Scenario, performance, regression, ad hoc, usability',
          simple: 'Simple mein: regression ka matlab naya feature aaye to purana kaam na toote; performance ka matlab load mein app guthne na de.',
          example: 'Coupon feature add kiya, wallet discount toot gaya — regression test ne pakda. 10,000 users ek saath login karein to 3 second mein page khule.',
          text: `- **Scenario testing:** real user journey — end-to-end business flow.
- **Performance testing types:**
  - Load: expected load. Stress: beyond limit. Spike: sudden jump. Endurance/soak: long duration. Volume: large data.
  - Metrics: response time, throughput, error rate, CPU/memory, p95/p99.
- **Regression testing:** change ke baad purana kaam na toota ho — full ya risk-based selection; automation ke liye best candidate.
- **Ad hoc testing:** bina plan/documents — exploratory, error guessing; defect find karne mein effective, reproduce karna mushkil.
- **Usability + accessibility:** ease of use, learnability, efficiency, satisfaction; accessibility = WCAG (contrast, keyboard, screen reader, alt text).
| Strategy | Kab chalate hain | Focus |
|---|---|---|
| Smoke | naya build aate hi | basic kaam karta hai? |
| Sanity | chhota fix | us area ka quick check |
| Regression | fix ke baad | purana feature na toota ho |
| Retesting | bug fix ke baad | wahi bug dobara test |
`,
          diagram: 'st4-performance',
          caption: 'Performance testing ke types aur measure hone wale metrics.',
        },
        {
          title: '4.8–4.13 · GUI, validation, spec-based, OO, web, database',
          simple: 'Simple mein: GUI dekhta hai dikhne-feel, validation galat input rokta hai, database test data sahi save hua ya nahi.',
          example: 'Phone field mein 12 digit daale to error. Order place karne par orders table mein row aayi. Mobile par button text ke upar chadh gaya — GUI bug.',
          text: `- **GUI testing:** controls, navigation, alignment, fonts, tab order, error messages, cross-resolution.
- **Validation testing:** "kya requirement poori hui" — traceability matrix + UAT.
- **Specification-based testing:** spec/requirement se tests derive — black box, requirement coverage measure.
- **OO testing:** class testing (methods), inheritance (parent change child ko tode), polymorphism (dynamic binding), encapsulation, association; plus unit → integration → system.
- **Web testing:** functionality, compatibility (browser/device), usability, performance, security (XSS/SQLi/CSRF), links, cookies/session, load.
- **Database testing:** schema/tables, constraints (PK/FK), data integrity, stored procedures/triggers, transactions (ACID), data migration, ETL validation.`,
        },
      ],
      lastMinute: [
        'Stub vs driver — kaunsa top-down aur kaunsa bottom-up mein.',
        'Performance testing ke 5 types + metrics.',
        'Alpha vs beta vs UAT ka farq.',
        'Database testing ke 5 checks (constraints, ACID, triggers, migration, integrity).',
      ],
    },
    {
      id: 'unit-5',
      number: '5',
      name: 'Software Test Automation',
      tagline: 'Automation kab, kaise, kaun se tools — aur Selenium ka poora suite',
      overview: 'Aakhri unit automation ka poora picture deta hai — kab automate karna chahiye, tool kaise chunte hain, kya challenges aate hain, manual vs automation ka farq, aur Selenium suite andar se kaise kaam karta hai.',
      minutes: 20,
      sections: [
        {
          title: '5.1–5.4 · Automation intro, skills, scope, architecture',
          simple: 'Simple mein: jo test baar-baar bilkul same tarike se chalte hain, unhe machine se karwa lo.',
          example: 'Har build par 200 regression test: manual 2 din lagta hai, automation 20 minute.',
          text: `- **Automation kab:** repeated (regression), stable requirement, large data, cross-browser matrix, performance/load.
- **Kab nahi:** one-time test, UI badalta rehta hai, exploratory/usability judgement.
- **Skills:** programming (Java/Python), locator strategy, framework design, CI/CD, test data management, debugging.
- **Scope:** smoke + regression + data-driven + API level — manual ko replace nahi, complement.
- **Architecture layers:** test data → test scripts → framework/library → tool/driver → AUT + reporting (CI integration).
- **Design patterns:** POM (Page Object Model), keyword-driven, data-driven, hybrid, BDD (Cucumber).`,
          diagram: 'st5-automation-architecture',
          caption: 'Automation framework ki architecture — data, scripts, library, driver, AUT aur reporting.',
        },
        {
          title: '5.5–5.9 · Tool requirements, challenges, debugging, manual vs auto',
          simple: 'Simple mein: manual wahan jahan sochna ho, automation wahan jahan repeat aur speed chahiye.',
          example: 'Naya feature pehle manual explore karo, stable hone par automation mein daalo. Tool fail ho to debugging mein 20 minute jaate hain.',
          text: `- **Tool requirements:** language support, object recognition, reusability, reporting, CI integration, licence cost, vendor support, record-playback + scripting.
- **Challenges:** flaky tests, maintenance cost, false positives, locator breakage, test data, environment availability, skills gap, ROI galat calculate karna.
- **Bug tracking + debugging:** log, screenshot, stack trace, steps, environment; reproduce → isolate → fix → retest → regression.
- **Manual vs automation:**

| Point | Manual | Automation |
|---|---|---|
| Speed | slow | fast, parallel |
| Initial cost | low | high |
| Repeatability | variable | exact |
| Best for | exploratory, usability | regression, load |
| Maintenance | kam | scripts maintain karne padte |

- **UI automation tools:** Selenium, Cypress, Playwright, TestComplete, UFT, Katalon.`,
          diagram: 'st5-manual-vs-automation',
          caption: 'Manual vs automated testing — speed, cost, repeatability aur kis ke liye kaunsa.',
        },
        {
          title: '5.11–5.16 · Selenium suite',
          simple: 'Simple mein: Selenium browser ko remote control karta hai — jaise aap mouse se click karte ho, waise code se.',
          example: 'WebDriver Chrome kholta hai, field mein text daalta hai, Place order click karta hai, result check karta hai. Grid se 5 machine par parallel.',
          text: `- **History:** 2004 Jason Huggins (ThoughtWorks) — JavaScriptTestRunner → Selenium Core → RC → WebDriver (2007, Simon Stewart) → merge (Selenium 2) → Selenium 3/4 (W3C WebDriver).
- **Tools:**
  - **IDE:** Firefox/Chrome plugin, record & playback, quick prototype, export to code.
  - **RC:** proxy server, JavaScript injection, older approach (ab deprecated).
  - **WebDriver:** browser native automation via driver (chromedriver/geckodriver), real browser, language bindings.
  - **Grid:** parallel/distributed run across machines, browsers, OS; hub + nodes (Selenium 4: distributed).
- **Selenium 4 highlights:** W3C standard, relative locators, new Grid, CDP integration, better IDE (Selenium Manager auto driver).`,
          diagram: 'st5-selenium-webdriver',
          caption: 'Selenium WebDriver ka flow — test script, binding, driver, browser.',
        },
        {
          title: '5.17 · Test design considerations (aur case studies)',
          simple: 'Simple mein: test design ka matlab hai kaunse case likhne hain aur kaunse chhodne — sab kuch test karna possible nahi.',
          example: '12 cards x 3 browsers x 2 currencies = 72 combination, risk dekh ke sirf 15 chune.',
          text: `- **Design considerations:** locator strategy (id > name > css > xpath), wait strategy (implicit/explicit/fluent), data externalise, page object, assertions, screenshot on failure, parallel-safe, no hard sleep.
- **Case studies ka pattern:** objective → tool choice → framework → coverage → result (regression time 3 din → 4 ghante, defect leakage kam).
- **ROI formula:** \`ROI = (manual cost bacha − automation cost) / automation cost × 100\`.

**Exam line:** automation regression ko fast karta hai, par design aur maintenance ke bina wo ek aur legacy codebase ban jaata hai.`,
        },
      ],
      lastMinute: [
        'Automation kab karein / kab na karein — 3 points each.',
        'Selenium suite ke 4 components ka kaam (IDE, RC, WebDriver, Grid).',
        'POM kya hai aur kyun use karte hain.',
        'Manual vs automation table + ROI formula.',
      ],
    },
  ],
};
