// Software Testing & QA — additional syllabus topics surfaced by the IT-33
// question papers (2022–2024): SQA activities + building blocks (Unit I) and
// levels of testing incl. the V and W models (Unit II).

export const stqaUnit1Extra = [
  {
    id: 'sqa-activities-blocks',
    number: '1.19',
    title: 'SQA Activities and Building Blocks',
    subtitle: 'SQA kya karta hai — chaar activities aur poore system ke building blocks',
    icon: 'shield',
    accent: '#00d4ff',
    englishDefinition:
      'Software quality assurance is the set of planned and systematic activities that give management confidence that a product and its process conform to requirements, standards and plans. The activities are grouped in four: quality planning (quality goals, standards, metrics, roles, schedule and the SQA plan itself), execution and monitoring (applying the SQA procedures, reviews, testing and configuration control while the project runs), checking and audit (independent audits, compliance verification, defect and root-cause analysis) and reporting and improvement (quality metrics to management, corrective action and process improvement). These activities are organised through building blocks: pre-project quality components (quality goals, contract and proposal review), project life-cycle components (reviews, testing, change and configuration control, defect prevention), infrastructure components (SQA procedures, templates, checklists, tools and training), management components (project plan, progress and risk control, cost of quality) and organisational components (standards such as ISO 9001 and CMMI, a dedicated SQA unit and certified personnel). Assurance is therefore preventive and process-oriented, while quality control and testing are detective and product-oriented.',
    intro:
      'Exam mein yeh question baar-baar aata hai: "SQA kya hai, SQA activities samjhao" aur "building blocks of SQA samjhao". Dono ka jawab ek hi tasveer ke do hisse hain — **activities** batati hain SQA kaam *kab aur kaise* hota hai (plan → execute → check → improve), aur **building blocks** batate hain poora system *kis cheez se bana* hai (pre-project, life cycle, infrastructure, management, organisation). Yaad rakhne ka ek line: **SQA plan banata hai, QC aur testing defect dhoondte hain.**',
    sections: [
      {
        type: 'definition',
        title: 'SQA Aur Uski Activities',
        kicker: 'Definition',
        body:
          '**Software Quality Assurance (SQA)** = planned aur systematic activities ka wo set jo management ko **confidence** deta hai ki product aur process requirements, standards aur plans ke hisaab se hain. Dhyaan do — SQA ka output "defect list" nahi, **confidence** hai.',
        body2:
          '**Chaar activities:** 1. **Planning** — quality goals, standards, metrics, roles, schedule aur SQA plan banana. 2. **Execution aur monitoring** — project chalte waqt procedures, reviews, testing aur configuration control lagana. 3. **Checking aur audit** — independent audits, compliance check, defect aur root-cause analysis. 4. **Reporting aur improvement** — metrics management ko dena, corrective action lena, process improve karna.',
        chips: ['Planning', 'Execution', 'Checking / audit', 'Reporting', 'Improvement'],
      },
      {
        type: 'points',
        title: 'Chaar SQA Activities — Ek-Ek Khol Ke',
        kicker: 'Activities',
        points: [
          '**1. Quality planning** — quality goals set karo, applicable standards chuno (ISO 9001, IEEE 730), metrics decide karo (defect density, review effectiveness), roles assign karo aur **SQA plan** document banao. Yeh project shuru hone se pehle hota hai.',
          '**2. Execution aur monitoring** — plan ko roz lagao: technical reviews, walkthroughs, inspection, testing levels, change control board, configuration management. Deviations note karke corrective action lo.',
          '**3. Checking aur audit** — planned reviews aur testing ke alawa **independent audit** karo: kya process follow hua, kya records bane, kya standards meet hue. Software Quality Assurance Unit (SQU) audit karta hai — auditor project team ka member nahi hona chahiye.',
          '**4. Reporting aur improvement** — quality metrics ka periodic report management ko (defect trend, review coverage, test pass %, cost of quality). Root-cause analysis se process change propose karo — yahin se SQA "assurance" banta hai, sirf "inspection" nahi.',
          '**Har activity ka output ek document hai:** plan, review record, audit report, metrics report. Paper mein "desired test documents" poochhein to yahi documents list karo.',
        ],
      },
      {
        type: 'cards',
        title: 'Building Blocks of SQA',
        kicker: 'Building Blocks',
        cards: [
          {
            icon: 'book',
            title: '1. Pre-project components',
            body: 'Project shuru hone se pehle: quality goals, contract review, proposal review, project quality plan. Yahan galat commitment ho gaya to baad mein SQA bacha nahi sakta.',
          },
          {
            icon: 'layers',
            title: '2. Project life-cycle components',
            body: 'Requirements review, design review, code review, testing levels, change control aur configuration management — har phase ke saath ek verification activity.',
          },
          {
            icon: 'tools',
            title: '3. Infrastructure components',
            body: 'SQA procedures, templates, checklists, standards library, tools (static analysis, defect tracker, CI), aur training material — repeatable process ka base.',
          },
          {
            icon: 'chart',
            title: '4. Management components',
            body: 'Project plan, progress control, risk management, cost of quality, aur quality metrics ka review — SQA ko management ke decision se jodta hai.',
          },
          {
            icon: 'shield',
            title: '5. Organisational components',
            body: 'ISO 9001 / CMMI standards, dedicated SQA unit (SQU), quality steering committee, aur certified / trained personnel.',
          },
          {
            icon: 'check',
            title: '6. Improvement components',
            body: 'Defect analysis, root cause, process change, lessons learned, aur revisited standards — SQA system time ke saath mature hota hai.',
          },
        ],
      },
      {
        type: 'comparison',
        title: 'QA vs QC vs Testing',
        kicker: 'Comparison',
        columns: ['Point', 'Quality Assurance (QA)', 'Quality Control (QC)', 'Testing'],
        rows: [
          { label: 'Focus', values: ['process', 'product', 'product (running software)'] },
          { label: 'Nature', values: ['preventive', 'detective', 'detective'] },
          { label: 'Timing', values: ['project start se end tak', 'after each work product', 'after build is ready'] },
          { label: 'Activity', values: ['process define, audit, training', 'review, inspection, measurement', 'execute test cases, log defects'] },
          { label: 'Who', values: ['SQA team / auditor', 'QC team / reviewers', 'testers'] },
          { label: 'Output', values: ['process compliance, confidence', 'defect report, metrics', 'pass/fail status, defect log'] },
          { label: 'Example', values: ['SQA plan + audit', 'code review, static analysis', 'functional, regression run'] },
        ],
      },
      {
        type: 'example',
        title: 'Example — Ek Project Mein SQA Kaise Chalti Hai',
        kicker: 'Example',
        body:
          '**Planning (week 1):** SQA plan bana — standards IEEE 730, metrics defect density + review effectiveness, reviews har design document par, audit monthly.\n\n**Execution (week 2–14):** requirements review (11 issues closed), design inspection, unit testing 82% branch coverage, change control board ne 14 change requests approve kiye.\n\n**Checking (monthly):** SQU audit — 3 findings (test records missing, review checklist not signed, stale test data). CAPA (corrective and preventive action) open.\n\n**Reporting (month-end):** defect density 1.8/1000 LOC, review effectiveness 62%, COQ 12% of project cost.\n\n**Exam point:** yahi chaar activities hain — plan, execute, check, report/improve. Auditor team ka member nahi hone chahiye, warna independence khatam.',
      },
      {
        type: 'diagram',
        title: 'SQA Activities Aur Building Blocks',
        kicker: 'Diagram',
        diagram: 'st1-sqa-blocks',
        caption: 'Chaar activities ka loop (plan → execute → check → improve) aur SQA system ke chhe building blocks',
      },
      {
        type: 'recap',
        title: 'Recap',
        kicker: '5 Seconds Mein Yaad Karo',
        points: [
          'SQA = planned + systematic activities jo product aur process par **confidence** dete hain.',
          'Chaar activities: **planning → execution → checking/audit → reporting/improvement**.',
          'Building blocks: **pre-project, life-cycle, infrastructure, management, organisational, improvement**.',
          'QA **process** dekhta hai (preventive), QC aur testing **product** dekhte hain (detective).',
          'Audit **independent** hota hai — SQA unit project team se alag.',
          'Exam line: "SQA assurance deta hai, testing detection."',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Define SQA. Explain the building blocks of SQA.',
        answer:
          '**Software Quality Assurance (SQA):** planned aur systematic activities ka set jo management ko confidence deta hai ki software product aur uski development process requirements, standards aur plans ke hisaab se hain. SQA preventive hai — defect aane se pehle process ko sahi rakhta hai.\n\n**Building blocks of SQA:**\n\n1. **Pre-project quality components** — quality goals, contract review, proposal review, project quality plan. Yahan hi scope aur commitment set hota hai.\n2. **Project life-cycle components** — har phase ke saath verification: requirements review, design review, code review, testing levels, change control, configuration management.\n3. **Infrastructure components** — SQA procedures, templates, checklists, standards library, tools (static analysis, defect tracker, CI), training.\n4. **Management components** — project plan, progress control, risk management, cost of quality, quality metrics review.\n5. **Organisational components** — ISO 9001 / CMMI standards, dedicated SQA unit (SQU), quality steering committee, trained and certified staff.\n6. **Improvement components** — defect and root-cause analysis, process change, lessons learned, standards update.\n\n**Why blocks matter:** ek block missing ho to SQA system leak karta hai — jaise infrastructure ke bina reviews ad-hoc ho jaate hain, management ke bina metrics par action nahi hota.\n\n**Diagram:** Refer to the SQA activities and building blocks diagram.',
      },
      {
        question: 'What is software quality assurance? Explain the SQA activities.',
        answer:
          '**SQA:** woh planned aur systematic activities jo product aur process ki quality par confidence deti hain — testing se alag, kyunki SQA process ko control karti hai aur testing product ko check karti hai.\n\n**SQA activities:**\n\n1. **Quality planning** — quality goals aur objectives define karna, applicable standards chunna (ISO 9001, IEEE 730, CMMI), metrics decide karna (defect density, review effectiveness, test coverage), roles aur responsibilities assign karna, aur **SQA plan** banana.\n2. **Execution and monitoring** — plan ko project ke doran lagana: technical reviews, walkthroughs, inspections, testing ke saare levels, change control board, configuration management; deviations par corrective action.\n3. **Checking and audit** — independent audits se verify karna ki process follow hua, records bane aur standards meet hue; defect aur root-cause analysis; compliance report.\n4. **Reporting and improvement** — quality metrics ka periodic report management ko, trend analysis, CAPA (corrective and preventive action), process improvement proposal.\n\n**Supporting activities:** training, tool support, standards maintenance, vendor and subcontractor quality control.\n\n**Example:** ek project mein SQA plan bana, monthly audit hue (3 findings), defect density 1.8/1000 LOC report hui, aur review checklist update hua — yahi chaar activities ka loop hai.\n\n**Diagram:** Refer to the SQA activities and building blocks diagram.',
      },
      {
        question: 'Differentiate between quality assurance, quality control and testing. What are the benefits of SQA?',
        answer:
          '| Point | QA | QC | Testing |\n|---|---|---|---|\n| Focus | process | product | running software |\n| Nature | preventive | detective | detective |\n| Timing | project start se end tak | har work product ke baad | build ready hone par |\n| Activity | process define, audit, training | review, inspection, measurement | test case execution, defect log |\n| Who | SQA team / auditor | QC team, peer reviewers | testers |\n| Output | compliance aur confidence | defect report, metrics | pass/fail, defect list |\n\n**Explanation:** QA process ko is tarah design karti hai ki defect paida hi na ho; QC product ko measure karti hai (review, static analysis); testing chalti hui software ko input/output se check karti hai. Teeno ek hi chain ke hisse hain — QA plan deti hai, QC build hone se pehle dhoondti hai, testing build ke baad.\n\n**Benefits of SQA:**\n1. Defect early pakadna — cost of fix 10x–100x kam.\n2. Repeatable process — quality team par depend nahi.\n3. Customer confidence aur compliance (ISO, CMMI, audit).\n4. Metrics-based management decisions.\n5. Less rework, better schedule predictability.\n6. Root-cause driven continuous improvement.\n\n**Diagram:** Refer to the SQA activities and building blocks diagram.',
      },
    ],
  },
];

export const stqaUnit2Extra = [
  {
    id: 'levels-of-testing',
    number: '2.4',
    title: 'Levels of Testing (with V and W Models)',
    subtitle: 'Unit se acceptance tak — kaun, kab aur kis basis par test karta hai',
    icon: 'layers',
    accent: '#ff8800',
    englishDefinition:
      'Levels of testing are the stages at which testing is organised in the software life cycle. The four classical levels are unit (component) testing, where developers verify individual modules against detailed design; integration testing, which verifies the interfaces and data flow between modules using stubs and drivers; system testing, which verifies the complete integrated system against the requirements, including functional and non-functional behaviour; and acceptance testing, performed by or for the customer to decide whether the product may be released (alpha, beta, contractual, regulatory and operational acceptance). Each level differs in its objective, basis of test design, the people who perform it, and the environment in which it runs. The levels map onto the V-model, where every development phase is paired with a verification phase, and onto the W-model, which adds an explicit verification track — static reviews of requirements, architecture and design — so that verification and validation are planned at every stage rather than only at the end. Regression testing runs across the levels whenever change occurs.',
    intro:
      'Har paper mein "levels of testing" aata hai — 2022, 2023 aur 2024 teeno mein. Iska matlab simple hai: ek hi software ko **chaar alag-alag star** par test karte hain, aur har star ka **objective, basis aur owner** alag hota hai. Unit level par developer module check karta hai, integration par modules ka jod, system par poora product requirement ke against, aur acceptance par customer "release kar sakte hain ya nahi" decide karta hai. Isi hierarchy ko jab development phases ke saath jodte hain to **V-model** banta hai, aur usme verification track add karo to **W-model**.',
    sections: [
      {
        type: 'definition',
        title: 'Levels of Testing Kya Hain',
        kicker: 'Definition',
        body:
          '**Levels of testing** = software life cycle ke jin charanon par testing organise hoti hai. Chaar classic levels: **Unit → Integration → System → Acceptance**. Har level ka apna objective, test basis (design? interface spec? SRS? user requirement?), performer aur environment hota hai.',
        body2:
          'Level badalne ke saath dhyaan bhi badalta hai: unit par **code logic**, integration par **interface aur data flow**, system par **end-to-end behaviour aur non-functional**, acceptance par **business fitness aur release decision**. Iske saath **regression testing** har level par chalti hai jab bhi change ho.',
        chips: ['Unit', 'Integration', 'System', 'Acceptance', 'Regression'],
      },
      {
        type: 'points',
        title: 'Chaar Levels — Ek-Ek Detail Mein',
        kicker: 'Levels',
        points: [
          '**1. Unit (component) testing** — developer apne module / function ko detailed design ke against test karta hai. Basis: code aur detailed design. Techniques: white-box — statement, branch, condition, path coverage, cyclomatic complexity, boundary values. Environment: developer machine, stubs se dependencies hatai jaati hain. Exit: unit test cases pass + coverage target.',
          '**2. Integration testing** — modules jod kar interfaces, data flow aur communication check karte hain. Basis: interface specification aur architecture. Approaches: big bang, top-down (stubs), bottom-up (drivers), sandwich/hybrid, continuous integration ke saath incremental. Defects yahan zyada interface aur data-format ke hote hain.',
          '**3. System testing** — poora integrated product SRS ke against, production jaisa environment mein. Functional ke saath non-functional: performance, load, stress, security, usability, compatibility, reliability, recovery. Basis: requirements. Performer: independent test team (developer nahi).',
          '**4. Acceptance testing** — customer / end user decide karta hai ki product business use ke liye theek hai. Types: **alpha** (developer site, internal users), **beta** (customer site, real users), **contractual** (contract ke acceptance criteria), **regulatory** (statutory compliance), **operational** (IT operations — backup, recovery, install). Basis: user requirements aur business process.',
          '**Regression testing har level par** — change ke baad purane test cases dobara, taaki naya fix purana kaam na tode. Smoke testing build acceptance ke liye system/acceptance se pehle.',
        ],
      },
      {
        type: 'comparison',
        title: 'Levels Ka Comparison',
        kicker: 'Comparison',
        columns: ['Point', 'Unit', 'Integration', 'System', 'Acceptance'],
        rows: [
          { label: 'Objective', values: ['module logic sahi hai', 'modules mil kar kaam karte hain', 'poora system requirement meet karta hai', 'business use ke liye ready hai'] },
          { label: 'Basis', values: ['code, detailed design', 'interface spec, architecture', 'SRS / requirements', 'user requirements, business process'] },
          { label: 'Performer', values: ['developer', 'developer + test team', 'independent test team', 'customer / end user'] },
          { label: 'Technique', values: ['white-box, coverage', 'interface, incremental', 'functional + non-functional', 'alpha, beta, UAT, contractual'] },
          { label: 'Environment', values: ['developer machine', 'partial integration env', 'production-like', 'staging / customer site'] },
          { label: 'Typical defect', values: ['logic, loop, boundary', 'interface mismatch, data format', 'missing requirement, performance', 'process gap, usability, policy'] },
        ],
      },
      {
        type: 'cards',
        title: 'V-Model Vs W-Model',
        kicker: 'Models',
        cards: [
          {
            icon: 'flow',
            title: 'V-model',
            body: 'Development left side neeche, testing right side upar. Har phase ka pair: requirements ↔ acceptance, design ↔ system, detailed design ↔ integration, coding ↔ unit. Verification har level par, validation right side par.',
          },
          {
            icon: 'layers',
            title: 'W-model',
            body: 'V-model ka extended roop: har development phase ke saath ek **verification** (review/static) aur ek **validation** (dynamic test) shakha — do V milkar W banta hai. Static reviews yahan formal hain.',
          },
          {
            icon: 'check',
            title: 'V-model ka fayda',
            body: 'Test planning early shuru hoti hai — requirements likhte waqt hi acceptance criteria tay ho jaate hain. Defect shift-left ho jaata hai.',
          },
          {
            icon: 'warn',
            title: 'W-model ka fayda',
            body: 'Static verification (review, inspection, static analysis) ko equal status milta hai — isliye requirement aur design defects code likhne se pehle hi pakde jaate hain.',
          },
        ],
      },
      {
        type: 'example',
        title: 'Example — Ek Payment Feature Par Chaar Levels',
        kicker: 'Example',
        body:
          '**Unit:** `calculateGST(amount, rate)` — 0, negative, 18%, 28%, rounding boundary values. Developer ne 14 tests likhe, branch coverage 90%.\n\n**Integration:** Payment service ↔ bank gateway ↔ invoice service. Interface test: timeout par retry, duplicate transaction id, currency mismatch — 3 defects (retry par double debit!).\n\n**System:** poora checkout flow SRS ke against — performance 500 users par p95 < 2s, security (OWASP top 10), usability, compatibility (3 browsers, 2 devices).\n\n**Acceptance:** UAT — finance team ne 40 business scenarios chalaye; alpha internal, beta 50 selected customers; operational acceptance — backup, rollback, install checklist.\n\n**Exam point:** ek hi bug chaar jagah ho sakta hai, par pakadne ki jagah alag — isliye levels skip nahi karte.',
      },
      {
        type: 'diagram',
        title: 'Levels of Testing, V-Model Aur W-Model',
        kicker: 'Diagram',
        diagram: 'st2-levels-testing',
        caption: 'Chaar levels (unit → integration → system → acceptance) aur V-model ke pairs, saath mein W-model ka verification + validation track',
      },
      {
        type: 'recap',
        title: 'Recap',
        kicker: '5 Seconds Mein Yaad Karo',
        points: [
          'Levels: **Unit → Integration → System → Acceptance** (+ regression har level par).',
          'Unit = developer, code basis, white-box; Integration = interface, stubs/drivers.',
          'System = independent team, SRS basis, functional + non-functional; Acceptance = customer, release decision.',
          'V-model: har development phase ka ek test phase pair. W-model: V + static verification track.',
          'Exam line: "level badla, basis aur owner bhi badla."',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What are the levels of testing? Explain in detail.',
        answer:
          '**Levels of testing** software life cycle ke wo charan hain jahan testing organise ki jaati hai. Chaar levels hain:\n\n**1. Unit (component) testing** — developer ek module / function ko detailed design ke against test karta hai. Basis: code aur detailed design. White-box techniques: statement, branch, condition, path coverage, cyclomatic complexity, boundary values. Dependencies hataane ke liye stubs use hote hain.\n\n**2. Integration testing** — modules jod kar interfaces aur data flow verify karte hain. Basis: interface specification aur architecture. Approaches: big bang, top-down (stubs), bottom-up (drivers), sandwich, incremental with CI. Yahan interface aur data-format defects milte hain.\n\n**3. System testing** — poora integrated system SRS ke against, production jaisa environment. Functional ke saath non-functional — performance, load, stress, security, usability, compatibility, reliability, recovery. Independent test team karti hai.\n\n**4. Acceptance testing** — customer / user release ka decision leta hai. Types: **alpha** (developer site), **beta** (customer site), **contractual** (contract criteria), **regulatory** (statutory), **operational** (IT ops — backup, recovery).\n\n**Supporting levels:** smoke testing (build sanity), regression testing (change ke baad repeat), retest (fix verify).\n\n**Why levels matter:** har level ka basis aur owner alag hota hai, isliye ek level doosre ko replace nahi kar sakta; defect jitni jaldi mile utna sasta.\n\n**Diagram:** Refer to the levels of testing diagram.',
      },
      {
        question: 'Explain the V-model and the W-model of testing with a diagram.',
        answer:
          '**V-model:** development aur testing ko ek "V" ke do taraf rakhta hai. Left side neeche jaati hui development phases, right side upar aati hui testing.\n\n- Requirements ↔ **Acceptance testing** (validation)\n- System design ↔ **System testing**\n- Architecture / high-level design ↔ **Integration testing**\n- Detailed design ↔ **Unit testing**\n- Coding sabse neeche.\n\nHar test level "parallel" phase ke documents se plan hota hai — isliye test planning requirement phase se hi shuru ho jaati hai (shift-left). Verification left side (reviews), validation right side (dynamic tests).\n\n**W-model:** V-model ka extended version — har phase ke saath **do** shakha: ek **verification** (static: review, inspection, static analysis) aur ek **validation** (dynamic: test execution). Do V milkar "W" banta hai.\n\n| Phase | Verification (static) | Validation (dynamic) |\n|---|---|---|\n| Requirements | requirements review | acceptance test |\n| Architecture | design inspection | system test |\n| Detailed design | design walkthrough | integration test |\n| Coding | code review, static analysis | unit test |\n\n**Fayde:** defect early (sasta fix), test planning early, static techniques ko formal status, traceability clear.\n**Limit:** chhote agile projects mein heavy ho sakta hai; change ke saath documents maintain karna mushkil.\n\n**Diagram:** Refer to the levels of testing diagram.',
      },
      {
        question: 'Differentiate between verification and validation with examples. Which levels perform which?',
        answer:
          '**Verification:** "are we building the product **right**?" — documents aur intermediate products ko specification ke against check karna. Static: reviews, inspection, walkthroughs, static analysis. Ismein code execute nahi hota.\n\n**Validation:** "are we building the **right** product?" — chalti hui software ko user ki asli zaroorat ke against check karna. Dynamic: test execution (unit se acceptance tak).\n\n| Point | Verification | Validation |\n|---|---|---|\n| Question | product right ban raha hai? | sahi product ban raha hai? |\n| Nature | static | dynamic |\n| Method | review, inspection, static analysis | test execution |\n| Timing | har phase ke end par | build ready hone par |\n| Cost of defect | kam | zyada |\n\n**Kaun level kya karta hai:**\n- **Verification:** requirements review, design inspection, code review, static analysis, walkthroughs, traceability check.\n- **Validation:** unit tests, integration tests, system tests, acceptance tests (alpha / beta / UAT), regression runs.\n\n**Example:** requirement "user 3 galat attempt ke baad 30 minute block ho" — verification check karega ki SRS mein rule clear hai aur design mein timer aur counter hain; validation check karega ki 3 galat attempt ke baad system sach mein 30 minute block karta hai.\n\n**Exam line:** verification paper par, validation product par.\n\n**Diagram:** Refer to the levels of testing diagram.',
      },
    ],
  },
];
