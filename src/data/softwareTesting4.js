// Software Testing and Quality Assurance — Unit IV: Testing Strategies
export const softwareTestingUnit4Topics = [
  {
    "id": "integration-testing",
    "number": "4.1",
    "title": "Integration Testing",
    "subtitle": "Modules jod kar interface, data flow aur interaction test karna",
    "icon": "network",
    "accent": "#0047ff",
    "englishDefinition": "Integration testing is the level of software testing in which individual units or modules are combined and tested as a group to verify the interfaces, data flow and interaction between them. It is performed after unit testing and before system testing. Its approaches are classified as non-incremental (big bang) and incremental, where incremental strategies include top-down (using stubs), bottom-up (using drivers) and sandwich or hybrid integration.",
    "intro": "Unit testing ke baad har module akela sahi hota hai — par jab do modules milte hain to naya defect paida ho sakta hai: galat data format, missing field, galat sequence, error handling ka mismatch. Integration testing inhi interface defects ko pakadti hai. Iske approaches: big bang, top-down, bottom-up aur sandwich.",
    "sections": [
      {
        "type": "definition",
        "title": "Integration Testing Kya Hai",
        "kicker": "Definition",
        "body": "Integration testing modules ko combine karke unke interaction ko verify karti hai. Focus: 1. Interface — function signature, parameter type aur order. 2. Data flow — ek module ka output doosre ke input se match karta hai? 3. Error handling — ek module fail ho to doosra kya karta hai? 4. Timing — sequence aur async call sahi hai? 5. Shared resource — database, file, session, cache. Ye unit testing ke baad aur system testing se pehle hoti hai.",
        "body2": "Iska sabse bada fayda: jo defect unit level par dikh hi nahi sakta (kyunki do module chahiye) wo yahan pakda jaata hai. Jaise bug report: \"payment service total amount string bhejti hai, invoice service number expect karti hai\" — ye integration defect hai, kisi ek module ka bug nahi.",
        "chips": ["Interface", "Data flow", "Interaction", "Stub", "Driver"]
      },
      {
        "type": "points",
        "title": "Integration Ke Approaches",
        "kicker": "Approaches",
        "points": [
          "Big bang (non-incremental): saare modules ek saath jod kar test. Chhote project ke liye theek, defect ka source dhoondhna mushkil.",
          "Top-down: uppar ke module se shuru, neeche ke module ke liye stub. Fayda — early UI demo, design defect early. Nuksaan — core logic late test hoti hai.",
          "Bottom-up: neeche ke module se shuru, uppar ke liye driver. Fayda — core logic pehle test, kam stubs. Nuksaan — UI aur main flow late.",
          "Sandwich / hybrid: top-down aur bottom-up dono, beech mein milte hain. Bade project ke liye best par effort zyada.",
          "Layer / functional increment: ek functional flow (jaise login) ke saare layers ek saath test karo.",
          "Backbone testing: backbone (server + framework) pehle test, phir modules jodo."
        ]
      },
      {
        "type": "cards",
        "title": "Stub Aur Driver",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "layers", "title": "Stub", "body": "Jo module abhi bana nahi, uski fake copy. Fixed value return karta hai. Top-down integration mein neeche ke modules ke liye use hota hai." },
          { "icon": "wrench", "title": "Driver", "body": "Chhota test program jo unit ko call karta hai. Bottom-up integration mein uppar ka caller na hone par driver likhna padta hai." },
          { "icon": "network", "title": "Interface Defect", "body": "Do modules ke beech mismatch — galat type, missing field, galat order, null handling." },
          { "icon": "flow", "title": "Incremental", "body": "Ek-ek module jod kar test — defect ka source turant pata chalta hai, debugging aasan." }
        ]
      },
      {
        "type": "diagram",
        "title": "Integration Testing Overview",
        "kicker": "Diagram",
        "diagram": "st4-integration",
        "caption": "Module hierarchy, big bang / top-down / bottom-up / sandwich aur stub vs driver"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Integration testing modules ke interface aur interaction ko verify karti hai.",
          "Unit ke baad, system se pehle.",
          "Approaches: big bang (non-incremental), top-down (stub), bottom-up (driver), sandwich (hybrid).",
          "Stub = neeche ka fake module, Driver = uppar ka test harness.",
          "Aam defect: data format mismatch, missing field, galat sequence, error handling.",
          "Aaj kal CI pipeline mein API level integration tests sabse zyada chalti hain."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is integration testing? Explain its approaches with advantages and disadvantages.",
        "answer": "**Integration Testing:** Testing level jisme individual modules ko combine karke unke interfaces, data flow aur interaction verify ki jaati hai. Unit testing ke baad, system testing se pehle.\n\n**Need:** Har module akela pass ho sakta hai, par do modules milne par type mismatch, missing field, galat sequence ya error handling ka gap defect banta hai.\n\n**1. Big Bang (non-incremental):**\n- Saare modules ek saath jod kar test.\n- Fayda: koi stub/driver nahi, simple.\n- Nuksaan: defect ka source dhoondhna mushkil, late integration.\n\n**2. Top-Down:**\n- Uppar ke module se shuru, neeche ke liye **stub**.\n- Fayda: early UI demo, main control flow pehle test.\n- Nuksaan: core logic late test, stubs zyada.\n\n**3. Bottom-Up:**\n- Neeche ke module se shuru, uppar ke liye **driver**.\n- Fayda: core logic pehle test, stubs kam.\n- Nuksaan: UI late, poora system late dikhta hai.\n\n**4. Sandwich / Hybrid:** Top-down + bottom-up, beech mein milte hain. Bade system ke liye best, effort zyada.\n\n**Diagram:** Refer to Integration Testing diagram."
      },
      {
        "question": "Differentiate between stub and driver with examples.",
        "answer": "**Stub:**\n- Fake module jo real module ki jagah lagta hai (usually neeche ka module).\n- Fixed/controlled value return karta hai.\n- Koi real logic nahi, sirf interface match karta hai.\n- Use: **top-down** integration.\n- Example: `getUser($id)` stub jo hamesha `['id'=>1,'name'=>'Riya']` return kare — upar ka module test ho jaaye.\n\n**Driver:**\n- Chhota test program jo unit ko call karta hai aur result verify karta hai.\n- Uppar ka real module na hone par likhna padta hai.\n- Use: **bottom-up** integration.\n- Example: `main()` jo `calculateTotal(100, 2)` ko different inputs ke saath call karke output print kare.\n\n**Difference:**\n| Point | Stub | Driver |\n|---|---|---|\n| Kahan | Neeche (called module) | Upar (calling module) |\n| Kaam | Fixed response deta hai | Test ko trigger karta hai |\n| Integration | Top-down | Bottom-up |\n| Real logic | Nahi | Nahi (test harness) |\n\n**Diagram:** Refer to Integration Testing diagram."
      },
      {
        "question": "What types of defects are found by integration testing?",
        "answer": "**Integration defects (interface level):**\n\n1. **Interface mismatch** — parameter type/order/count galat. Example: ek module string bheje, doosra integer expect kare.\n2. **Data format mismatch** — date `dd/mm/yyyy` vs `yyyy-mm-dd`, JSON field name `user_id` vs `userId`.\n3. **Missing field** — ek module ka output mein wo field hi nahi jo doosre ko chahiye.\n4. **Data loss / corruption** — bade value par rounding, encoding (UTF-8 vs ASCII) se text tootna.\n5. **Error handling gap** — ek module fail ho to doosra crash ya infinite retry kare.\n6. **Sequence / timing** — async call se pehle response expect karna, race condition.\n7. **Shared resource conflict** — same file/database row par do modules likh dein.\n8. **Assumption mismatch** — ek module null allow kare, doosra nahi.\n\n**Kaise pakdein:** API contract test, mock ke saath integration test, end-to-end scenario, CI mein build ke baad integration suite.\n\n**Diagram:** Refer to Integration Testing diagram."
      }
    ]
  },
  {
    "id": "system-acceptance-testing",
    "number": "4.2",
    "title": "System and Acceptance Testing",
    "subtitle": "Poora product, phir customer ki manzoori (alpha, beta, UAT)",
    "icon": "globe",
    "accent": "#ff0080",
    "englishDefinition": "System testing is the testing of a completely integrated system to verify that it meets its specified requirements, both functional and non-functional, in an environment similar to production. Acceptance testing is formal testing conducted by the customer or end user to determine whether the system satisfies the agreed acceptance criteria and business requirements, and includes alpha testing, beta testing, contractual and regulatory acceptance testing, and operational acceptance testing.",
    "intro": "System testing poore product ko requirement ke against check karti hai — functional aur non-functional dono. Acceptance testing uske baad aati hai: customer khud check karta hai ki jo usne maanga tha wahi mila ya nahi. System testing tester karta hai, acceptance testing customer. Dono fail ho to release nahi hota.",
    "sections": [
      {
        "type": "definition",
        "title": "System Testing",
        "kicker": "Definition",
        "body": "System testing poore integrated system par hoti hai, production jaisa environment aur real data ke saath. Coverage: 1. Functional — har requirement, use case aur business rule. 2. Non-functional — performance, load, security, usability, compatibility, reliability. 3. Recovery — crash ke baad system wapas aata hai? 4. Configuration — different hardware/software settings. 5. Installation — naye machine par install hota hai? 6. Documentation aur help. Black-box approach — tester code nahi dekhta, SRS ke against verify karta hai.",
        "body2": "System testing ke liye test environment production jaisa hona chahiye: same database version, same server config, realistic data volume. Warna jo defect production mein milega wo test mein nahi milega — aur ye sabse mehnga defect hota hai.",
        "chips": ["End-to-end", "Functional + non-functional", "Production-like", "Black-box", "Recovery"]
      },
      {
        "type": "definition",
        "title": "Acceptance Testing (UAT)",
        "kicker": "Definition",
        "body": "Acceptance testing customer/end user ke acceptance criteria ke against hoti hai — sawaal ye ke \"kya system business ke liye acceptable hai?\" Types: 1. User Acceptance Testing (UAT) — real users apne workflow se test karte hain. 2. Alpha testing — developer site par, internal team + selected users. 3. Beta testing — customer site par, real users, live feedback. 4. Contractual acceptance — contract ke terms poore hue? 5. Regulatory acceptance — legal/standard compliance (RBI, FDA, GDPR). 6. Operational acceptance — backup, recovery, monitoring, support process.",
        "body2": "UAT ka output sign-off hota hai. Defect mile to acceptance criteria fail — release rok di jaati hai. Beta testing mein feedback se hi product ka next version plan hota hai; isliye beta \"testing + marketing + feedback\" teeno hai.",
        "chips": ["UAT", "Alpha", "Beta", "Sign-off", "Acceptance criteria"]
      },
      {
        "type": "points",
        "title": "System vs Acceptance Testing",
        "kicker": "Comparison",
        "points": [
          "Kaun: system testing QA/tester karta hai, acceptance testing customer ya end user.",
          "Kis ke against: system testing SRS/spec ke against, acceptance testing business need/acceptance criteria ke against.",
          "Kab: system testing integration ke baad, acceptance testing system testing ke baad (final gate).",
          "Scope: system testing functional + non-functional poori depth, acceptance testing user workflow aur business scenario.",
          "Environment: system testing staging/QA environment, acceptance testing UAT environment (production jaisa).",
          "Result: system testing defect report + exit report, acceptance testing sign-off ya rejection.",
          "Dono mein entry/exit criteria, test cases aur traceability zaroori hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Testing Levels Aur Acceptance Types",
        "kicker": "Diagram",
        "diagram": "st4-system-acceptance",
        "caption": "Unit → Integration → System → Acceptance, aur UAT ke saath alpha, beta, contract, operational"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "System testing poore integrated product ko requirement ke against verify karti hai (functional + non-functional).",
          "Production jaisa environment aur real data volume zaroori.",
          "Acceptance testing customer ke acceptance criteria ke against — final gate.",
          "Types: UAT, alpha (developer site), beta (customer site), contractual, regulatory, operational.",
          "System testing = \"product sahi bana?\" · acceptance = \"product chahiye tha?\"",
          "Exit criteria meet hone par hi release/sign-off hota hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is system testing? Explain its types and importance.",
        "answer": "**System Testing:** Poori tarah integrated system ko uske specified requirements ke against test karna, production jaisa environment aur real data ke saath. Ye pehla level hai jahan poora product ek unit ki tarah test hota hai.\n\n**Types / coverage:**\n1. **Functional testing** — har requirement, use case, business rule.\n2. **Non-functional** — performance, load, security, usability, compatibility, reliability.\n3. **Recovery testing** — crash/failure ke baad recovery.\n4. **Configuration testing** — different hardware/software settings.\n5. **Installation testing** — fresh machine par install.\n6. **Documentation testing** — manual aur help.\n7. **Regression** — fix ke baad poori suite.\n\n**Importance:**\n- Interface aur integration ke baad poore system ka behaviour verify hota hai.\n- Business flow end-to-end test hota hai (login → order → payment → invoice).\n- Release se pehle non-functional risk (load, security) pakda jaata hai.\n\n**Entry criteria:** integration complete, environment ready, test cases approved.\n**Exit criteria:** saare critical/high defects closed, coverage target meet, exit report signed.\n\n**Diagram:** Refer to System and Acceptance Testing diagram."
      },
      {
        "question": "What is acceptance testing? Explain UAT, alpha and beta testing.",
        "answer": "**Acceptance Testing:** Customer/end user dwara formal testing — kya system agreed acceptance criteria aur business requirements poore karta hai? Iske baad sign-off milta hai.\n\n**1. User Acceptance Testing (UAT):**\n- Real users apne actual business workflow se test karte hain.\n- UAT environment production jaisa, real ya masked data.\n- Result: sign-off ya defect list.\n\n**2. Alpha Testing:**\n- Developer site par hota hai.\n- Internal QA + selected potential users.\n- Controlled environment, feedback se fix karke dobara test.\n\n**3. Beta Testing:**\n- Customer site par, real users, real environment.\n- Product publicly release (limited users), feedback collect hota hai.\n- Defect report karne ka aasan channel chahiye.\n\n**Other types:**\n- **Contractual acceptance** — contract ke terms (SLA, deliverable) verify.\n- **Regulatory acceptance** — legal/standard compliance (RBI, FDA, GDPR, WCAG).\n- **Operational acceptance** — backup, recovery, monitoring, support handover.\n\n**Diagram:** Refer to System and Acceptance Testing diagram."
      },
      {
        "question": "Differentiate between system testing and acceptance testing.",
        "answer": "**System Testing vs Acceptance Testing:**\n\n| Point | System Testing | Acceptance Testing |\n|---|---|---|\n| Kaun karta | QA / tester team | Customer, end user, business |\n| Kis ke against | SRS, design spec, requirements | Business need, acceptance criteria |\n| Level | Integration ke baad | System testing ke baad (final gate) |\n| Focus | Functional + non-functional, poori depth | Real user workflow, business scenario |\n| Environment | QA / staging | UAT, production jaisa |\n| Data | Test data, synthetic | Real ya masked production data |\n| Output | Defect report, exit report | Sign-off ya rejection |\n| Failure ka matlab | Build fix karke dobara | Business requirement miss — scope rework |\n\n**Example:** system testing check karegi ki \"login 2 second mein hota hai, 500 concurrent users par\" — acceptance testing check karega ki \"user apna daily order process kar sakta hai\".\n\n**Key Point:** system testing product ki quality verify karti hai, acceptance testing product ki fitness for business confirm karti hai. Dono ke bina release risky hai.\n\n**Diagram:** Refer to System and Acceptance Testing diagram."
      }
    ]
  },
  {
    "id": "scenario-testing",
    "number": "4.3",
    "title": "Scenario Testing",
    "subtitle": "Realistic end-to-end user journey se application test karna",
    "icon": "flow",
    "accent": "#00aaff",
    "englishDefinition": "Scenario testing is a black-box testing approach in which test cases are derived from realistic user scenarios or user stories, and the application is tested end-to-end through a complete business workflow rather than as isolated features. A scenario is a plausible story about how a user achieves a goal, including preconditions, steps, test data and the expected business outcome.",
    "intro": "Scenario testing ek poori kahani chalti hai — \"Riya phone kharidna chahti hai\" — search se lekar invoice tak, har screen, har data check. Ek-ek feature pass hone ka matlab ye nahi ki poora business flow chalega. Scenario testing user ke najariye se poora raasta verify karti hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Scenario Testing Kya Hai",
        "kicker": "Definition",
        "body": "Scenario ek realistic user story hoti hai: precondition (user logged in, wallet balance), steps (search → compare → cart → address → payment → confirm), test data (product, coupon, card), aur expected business outcome (order placed, SMS, invoice generated). Scenario testing mein ye poora flow ek saath test hota hai — beech mein break ho to scenario fail. Isse business process, data consistency aur cross-module integration ek saath verify hote hain.",
        "body2": "Scenario test case aur functional test case mein farak: functional test case ek feature ka ek chhota check hai (\"Add to cart button kaam karta hai\"), scenario kai features milkar ek business goal poora karta hai (\"order place hua aur payment se invoice bana\").",
        "chips": ["User story", "End-to-end", "Business flow", "Precondition", "Expected outcome"]
      },
      {
        "type": "points",
        "title": "Scenario Kaise Likhein",
        "kicker": "How To",
        "points": [
          "Real user choose karo — role, goal aur context (naya user, returning customer, admin).",
          "Goal ek line mein likho — \"monthly report download karna\".",
          "Preconditions aur test data define karo — account, permission, balance, product stock.",
          "Steps ko sequence mein likho — har step par expected result.",
          "Happy path ke saath ek failure scenario likho — payment fail, stock khatam, session expire.",
          "Edge scenario: partial cancel, return, coupon apply + remove.",
          "Har scenario ko requirement se link karo (traceability) taaki business coverage naapa ja sake."
        ]
      },
      {
        "type": "cards",
        "title": "Scenario Ke Prakar",
        "kicker": "Types",
        "cards": [
          { "icon": "user", "title": "Primary Scenario", "body": "Sab kuch theek chale — happy path. Example: registration se login tak sab valid data ke saath." },
          { "icon": "alert", "title": "Alternate Scenario", "body": "Sahi raasta par variant — coupon galat ho to message, dobara try karne ka option." },
          { "icon": "warn", "title": "Exception Scenario", "body": "System ya network fail — payment gateway down, session timeout, server error." },
          { "icon": "trends", "title": "Regression Scenario", "body": "Purana business flow jo naye change ke baad bhi chalta rehna chahiye." }
        ]
      },
      {
        "type": "diagram",
        "title": "Ek End-to-End Scenario",
        "kicker": "Diagram",
        "diagram": "st4-scenario",
        "caption": "Search se delivery confirmation tak — chhah screen, ek business outcome"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Scenario testing realistic end-to-end user story se test karti hai.",
          "Scenario = precondition + steps + test data + expected business outcome.",
          "Scenario vs test case: scenario kai features ka business flow, test case ek chhota check.",
          "Happy path + alternate + exception scenario — teeno likho.",
          "Fayda: business flow, data consistency aur user experience ek saath verify.",
          "Integration testing ke baad aur acceptance testing se pehle sabse useful."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is scenario testing? Explain with an example.",
        "answer": "**Scenario Testing:** Black-box approach jisme realistic user scenario se end-to-end business workflow test kiya jaata hai — isolated features ki jagah poora raasta.\n\n**Scenario ke elements:** precondition, test data, steps (har step ka expected result), expected business outcome.\n\n**Example — online shopping:**\n- **Precondition:** user logged in, wallet ₹50,000, phone in stock.\n- **Steps:** search \"phone\" → 2 models compare → add to cart → new address save → UPI payment → order confirm.\n- **Test data:** product ID, coupon code, address, UPI ID.\n- **Expected outcome:** order ID generate, payment captured, SMS + email, invoice PDF, stock decrement.\n\n**Advantages:**\n- Real user ke najariye se defect aur gap dikhta hai.\n- Cross-module data consistency verify hoti hai.\n- Business process aur acceptance criteria ka confidence milta hai.\n\n**Limit:** detailed logic coverage ke liye functional test cases alag chahiye; scenario slow aur kam precise hote hain.\n\n**Diagram:** Refer to Scenario Testing diagram."
      },
      {
        "question": "How is scenario testing different from test case testing? Explain with examples.",
        "answer": "**Scenario vs Test Case:**\n\n| Point | Test case | Scenario |\n|---|---|---|\n| Scope | Ek feature ka ek check | Kai features ka business flow |\n| User view | Function level | End-to-end user journey |\n| Count | Ek scenario mein 10–20 test cases | 1 scenario = 1 flow |\n| Data | Fixed input/output | Realistic multi-step data |\n| Purpose | Feature correctness | Business process correctness |\n| Execution | Fast, repeatable | Slow, environment dependent |\n\n**Examples:**\n- **Test case:** \"Login button valid credential par dashboard khole\" — ek feature.\n- **Scenario:** \"Naya user register kare → email verify kare → login kare → first order place kare → invoice download kare\" — poora onboarding + transaction flow.\n\n**Kab kya:**\n- Test cases — unit, integration, regression ki depth ke liye.\n- Scenarios — system, acceptance, UAT ke liye aur release se pehle business sanity ke liye.\n\n**Best practice:** scenario se test cases derive karo — scenario business ko cover karta hai, test cases uske andar ka detail.\n\n**Diagram:** Refer to Scenario Testing diagram."
      },
      {
        "question": "What are the types of scenarios and how do you write a good scenario?",
        "answer": "**Scenario ke types:**\n1. **Primary (happy path)** — sab valid, expected outcome.\n2. **Alternate** — sahi flow par variant (coupon invalid, address change).\n3. **Exception** — failure case (payment fail, session timeout, server down).\n4. **Edge** — boundary business case (partial return, last item in stock).\n5. **Regression scenario** — purana flow jo naye change ke baad chalna chahiye.\n\n**Achha scenario likhne ke steps:**\n1. Role aur goal define karo — \"returning customer ko order cancel karna hai\".\n2. Precondition aur data likho — order status \"shipped\", login user.\n3. Steps sequence mein — har step ka expected result.\n4. Negative variant add karo — cancel allowed nahi hone par message.\n5. Business outcome verify — refund initiated, email bheja, stock wapas.\n6. Requirement se traceability link karo.\n\n**Checklist:** realistic? testable? data available? outcome measurable? ek scenario mein ek hi goal?\n\n**Diagram:** Refer to Scenario Testing diagram."
      }
    ]
  },
  {
    "id": "performance-testing",
    "number": "4.4",
    "title": "Performance Testing",
    "subtitle": "Load, stress, spike, endurance — speed aur capacity naapna",
    "icon": "speed",
    "accent": "#ff8800",
    "englishDefinition": "Performance testing is a type of non-functional testing that determines how a system behaves in terms of responsiveness, throughput, stability and scalability under a particular workload. It includes load testing at expected load, stress testing beyond capacity, spike testing for sudden bursts, endurance or soak testing over long duration, volume testing with large data and scalability testing as load increases.",
    "intro": "Functional testing batati hai \"kaam karta hai ya nahi\". Performance testing batati hai \"kitne users par, kitna tez, kitni der tak\". Isme response time, throughput, error rate aur resource usage naape jaate hain. Load, stress, spike, endurance aur scalability — har ek alag sawaal ka jawab deti hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Performance Testing Kya Hai",
        "kicker": "Definition",
        "body": "Performance testing workload ke against system ka behaviour naapti hai. Metrics: 1. Response time — request se response tak ka time (average aur 90th percentile). 2. Throughput — prati second transactions (TPS). 3. Error rate — fail requests ka %. 4. Concurrent users — ek saath active users. 5. Resource usage — CPU, memory, disk I/O, network. 6. Scalability — load badhane par linear scale hota hai ya nahi. 7. Think time aur ramp-up — realistic user behaviour.",
        "body2": "Sabse aam galti: production jaisa environment na hona. 2-core test server par test pass hoke 16-core production par bhi fail ho sakta hai (ya ulta). Realistic data volume, same network latency aur actual third-party integrations ke saath test karo.",
        "chips": ["Response time", "Throughput", "Error rate", "90th percentile", "Concurrent users"]
      },
      {
        "type": "points",
        "title": "Performance Testing Ke Prakar",
        "kicker": "Types",
        "points": [
          "Load testing: expected peak load par behaviour — kya 1000 users par 2 second mein response aata hai?",
          "Stress testing: capacity se zyada load — system kab break hota hai aur break hone par gracefully fail karta hai?",
          "Spike testing: achanak traffic burst (sale, viral post) — auto-scaling aur queue handle karte hain?",
          "Endurance / soak testing: 8–24 ghante continuous load — memory leak, connection leak, log growth pakadta hai.",
          "Volume testing: bade data size ke saath (10 lakh records) — query, report, import ka behaviour.",
          "Scalability testing: users badhane par horizontal/vertical scaling ka effect.",
          "Baseline testing: normal load par baseline numbers record karo, future comparison ke liye."
        ]
      },
      {
        "type": "cards",
        "title": "Tools Aur Best Practice",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "tools", "title": "Tools", "body": "JMeter, k6, Locust, Gatling, LoadRunner, Artillery — scripted virtual users generate karte hain." },
          { "icon": "metrics", "title": "Metrics Dekho", "body": "90th/95th percentile, TPS, error rate, CPU/memory, DB slow query — average akela dhoka deta hai." },
          { "icon": "server", "title": "Environment", "body": "Production jaisa hardware, data volume aur network latency — warna result bekaar." },
          { "icon": "alert", "title": "Bottleneck", "body": "Slow query, N+1 query, missing index, chatty API, synchronous call, memory leak." }
        ]
      },
      {
        "type": "diagram",
        "title": "Performance Curve Aur Types",
        "kicker": "Diagram",
        "diagram": "st4-performance",
        "caption": "Response time vs concurrent users — knee ke baad system break hone lagta hai"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Performance testing non-functional testing hai — responsiveness, throughput, stability, scalability.",
          "Types: load, stress, spike, endurance, volume, scalability, baseline.",
          "Load = expected load · stress = capacity se zyada · spike = achanak burst · endurance = lambe samay.",
          "Metrics: response time, TPS, error rate, resource usage — 90th percentile dekho.",
          "Production jaisa environment aur realistic data ke bina test bekaar.",
          "90% performance problem database query aur missing index se aati hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is performance testing? Explain load, stress, spike and endurance testing.",
        "answer": "**Performance Testing:** Non-functional testing jo system ki responsiveness, throughput, stability aur scalability ko workload ke against naapti hai.\n\n**1. Load Testing:**\n- Expected peak load par behaviour.\n- Example: 1000 concurrent users, response time < 2s, error rate < 1%.\n\n**2. Stress Testing:**\n- Capacity se zyada load — break point dhoondhna.\n- Example: 5000 users tak badhao, dekho kab crash hota hai aur crash graceful hai (error page, queue) ya data corrupt.\n\n**3. Spike Testing:**\n- Achanak traffic burst (sale, viral post, big release).\n- Check: auto-scaling, queue, rate limiting, retry.\n\n**4. Endurance / Soak Testing:**\n- 8–24 ghante continuous load.\n- Check: memory leak, connection leak, log file growth, cache degradation.\n\n**Other:** volume (bada data), scalability (load badhane par scale), baseline (normal load ka record).\n\n**Metrics:** response time (avg + 90th percentile), throughput/TPS, error rate, CPU/memory, DB query time.\n**Tools:** JMeter, k6, Locust, Gatling, LoadRunner.\n\n**Diagram:** Refer to Performance Testing diagram."
      },
      {
        "question": "Why is a production-like environment important for performance testing? What are the common bottlenecks?",
        "answer": "**Production-like environment kyun zaroori:**\n1. **Hardware** — CPU cores, RAM, disk type (SSD vs HDD) result badal dete hain.\n2. **Data volume** — 1000 rows vs 10 lakh rows par query time 100x ho sakta hai.\n3. **Network latency** — same region, CDN, load balancer ke saath test karo.\n4. **Third-party** — payment gateway, SMS, email service ka actual latency.\n5. **Configuration** — cache, connection pool, web server workers, PHP-FPM/JVM heap.\n\nAgar environment chhota hai to result optimist ho jaata hai; bada hai to pessimist — dono se galat decision.\n\n**Common bottlenecks:**\n1. Database — slow query, missing index, N+1 query, table lock.\n2. Application — synchronous long call, memory leak, unbounded cache.\n3. Network — chatty API, large payload, no compression.\n4. Server — connection pool exhaust, thread starvation, file descriptor limit.\n5. Architecture — single server, no queue, no CDN, no caching.\n\n**Fix approach:** profile karo → bottleneck identify → fix → dobara same test chalao (baseline se compare).\n\n**Diagram:** Refer to Performance Testing diagram."
      },
      {
        "question": "Explain the key performance metrics.",
        "answer": "**1. Response time** — request bhejne se response milne tak. Average akela dhoka deta hai; 90th/95th percentile dekho (worst 10% users ka experience).\n\n**2. Throughput (TPS/RPS)** — prati second kitne transactions complete hote hain. Capacity ka real measure.\n\n**3. Error rate** — fail requests ka percentage; 1% se zyada serious hai. Error types: 5xx, timeout, connection refused.\n\n**4. Concurrent users** — ek saath active users. Note: \"registered users\" ≠ concurrent users.\n\n**5. Resource utilisation** — CPU %, memory, disk I/O, network bandwidth, DB connections.\n\n**6. Latency vs processing time** — network latency + server processing + DB time.\n\n**7. Scalability factor** — load 2x karne par throughput kitna badha (linear = achha).\n\n**8. Think time / ramp-up** — real user ke beech ka gap; bina think time ke test unrealistic hota hai.\n\n**Report format:** p50, p90, p95, p99 response time, TPS, error %, resource graph, bottleneck list.\n\n**Diagram:** Refer to Performance Testing diagram."
      }
    ]
  },
  {
    "id": "regression-testing",
    "number": "4.5",
    "title": "Regression Testing",
    "subtitle": "Naya change purane feature ko tode na — dobara test karo",
    "icon": "refresh",
    "accent": "#aa00ff",
    "englishDefinition": "Regression testing is the type of testing performed after a change — such as a bug fix, enhancement, configuration change or upgrade — to ensure that the change has not introduced new defects and that the previously working functionality still works. It uses retest-all, selective or prioritised regression strategies, and is normally automated and executed in the CI pipeline as a regression suite.",
    "intro": "Ek line ka fix poore system ko tod sakta hai — aur ye defect sabse mehnga hota hai kyunki purana feature chup-chaap band ho jaata hai. Regression testing change ke baad purane test cases dobara chalati hai. Manual se possible nahi hota, isliye automation aur CI ka sahara lete hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Regression Testing Kya Hai",
        "kicker": "Definition",
        "body": "Regression testing ka process: 1. Change note karo (fix, feature, refactor, library upgrade). 2. Impact analysis — kaunse module aur test case affected honge (code dependency, RTM, git diff). 3. Regression suite select karo. 4. Execute — smoke pehle, phir affected aur poora stable suite. 5. Result compare — jo pehle pass tha aur ab fail hai, wahi regression defect. 6. Suite update — naye fix ke liye naya test add karo.",
        "body2": "Regression defect ki pehchaan simple hai: test pehle PASS tha, code change ke baad FAIL. Iska matlab naya kaam purane kaam ko tod raha hai. Isliye har defect fix ke saath ek regression test likhna chahiye — future mein wahi bug dobara nahi aayega.",
        "chips": ["Impact analysis", "Regression suite", "Retest-all", "Selective", "Prioritized"]
      },
      {
        "type": "points",
        "title": "Regression Strategies",
        "kicker": "Strategies",
        "points": [
          "Retest-all: poori suite chalao — safest, sabse mehnga; chhote project ya critical release ke liye.",
          "Selective: sirf affected test cases — fast, par galat selection se defect chhoot sakta hai.",
          "Prioritized: high risk / high business value test cases pehle chalao, time kam ho to yahin ruk jao.",
          "Smoke pehle: build healthy hai ya nahi — fail ho to regression chalao hi nahi.",
          "Test case prioritization criteria: business criticality, defect history, change frequency, customer usage.",
          "Automation mandatory: CI par har commit ke saath suite; nightly full run, PR par fast subset."
        ]
      },
      {
        "type": "cards",
        "title": "Smoke, Retest Aur Regression",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "zap", "title": "Smoke Testing", "body": "Build health check — 10–20 critical tests, 15 minute. Fail = build wapas developer ko." },
          { "icon": "target", "title": "Retest Testing", "body": "Jo defect fix hua wahi exact test case dobara chalao — fix verify karne ke liye." },
          { "icon": "refresh", "title": "Regression Testing", "body": "Change se affected aur stable suite dobara chalao — purana kaam na tootey." },
          { "icon": "loop", "title": "Confirmation", "body": "Regression defect = pehle pass tha, ab fail. Ye release blocker hota hai." }
        ]
      },
      {
        "type": "diagram",
        "title": "Regression Testing Flow",
        "kicker": "Diagram",
        "diagram": "st4-regression",
        "caption": "Change → impact analysis → regression suite, aur teen suites: smoke, retest, regression"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Regression testing change ke baad purani functionality verify karti hai.",
          "Har defect fix ke saath ek regression test add karo.",
          "Strategies: retest-all, selective, prioritized.",
          "Smoke (build health) → retest (fix verify) → regression (purana kaam).",
          "Manual regression sustainable nahi — automation + CI zaroori.",
          "Regression defect = pehle pass, ab fail — release blocker."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is regression testing? Explain its types and strategies.",
        "answer": "**Regression Testing:** Change (fix, enhancement, refactor, upgrade) ke baad testing, taaki confirm ho ki purani functionality intact hai aur koi naya defect nahi aaya.\n\n**Need:** Ek chhota fix shared code ko tod sakta hai; purana feature chup-chaap band ho jaata hai — ye sabse mehnga defect hai.\n\n**Process:** change note → impact analysis → suite select → smoke → affected + stable suite → compare result → suite update.\n\n**Strategies:**\n1. **Retest-all** — poori suite; safest, costly.\n2. **Selective** — sirf impacted tests; fast, risk.\n3. **Prioritized** — high risk/business value pehle.\n\n**Types (related):**\n- **Smoke** — build health (10–20 critical tests).\n- **Retest** — fix ki confirmation.\n- **Unit regression** — developer level.\n- **Progressive** — naye feature ke saath purani suite.\n- **Complete** — poora system regression.\n\n**Automation:** Selenium, Playwright, Cypress, PHPUnit, JUnit + CI pipeline (nightly full, PR fast subset).\n\n**Diagram:** Refer to Regression Testing diagram."
      },
      {
        "question": "Differentiate between retesting and regression testing.",
        "answer": "**Retesting vs Regression Testing:**\n\n| Point | Retesting | Regression Testing |\n|---|---|---|\n| Purpose | Fix verify karna | Purani functionality safe hai |\n| Trigger | Defect fix hua | Koi bhi change (fix/feature/refactor) |\n| Test cases | Wahi test case jo fail hua tha | Affected + stable suite |\n| Scope | Narrow (ek defect) | Wide (poora affected area) |\n| Result | Fix pass/fail | Koi purana test fail hua? |\n| Also called | Confirmation testing | — |\n| Automation | Manual possible | Automation lagbhag zaroori |\n\n**Example:** login mein password validation fix hua —\n- **Retest:** \"8 character se kam password reject ho\" wala test dobara chalao.\n- **Regression:** login ke baaki tests (valid login, lock after 3 fails, forgot password) + profile module ke tests chalao.\n\n**Key Point:** retest fix ko verify karta hai, regression ensure karta hai ki fix ne kuch aur na toda. Dono ek saath chalte hain par alag hain.\n\n**Diagram:** Refer to Regression Testing diagram."
      },
      {
        "question": "How do you select and prioritise regression test cases?",
        "answer": "**Selection ke aadhaar:**\n1. **Impact analysis** — change kis module ko touch karta hai, us module aur uske dependents ke tests.\n2. **RTM** — requirement se linked tests; changed requirement ke tests.\n3. **Code coverage** — jo tests changed lines cover karte hain.\n4. **Defect history** — jahan pehle bug mile wahan zyada tests.\n5. **Business criticality** — login, payment, checkout, data export.\n6. **Change frequency** — jo module bar-bar badalta hai, uska suite bada rakho.\n\n**Prioritisation order (typical):**\n1. Smoke (build health)\n2. Changed area ke tests\n3. High business risk tests\n4. Integration / end-to-end scenario\n5. Remaining stable suite\n\n**Time kam ho to:** prioritized run karo, aur baaki suite nightly build mein.\n\n**Suite maintain kaise karein:** flaky tests fix ya delete, duplicate hatao, purane feature ke tests update karo, execution time track karo (10–15 min PR ke liye).\n\n**Diagram:** Refer to Regression Testing diagram."
      }
    ]
  },
  {
    "id": "ad-hoc-testing",
    "number": "4.6",
    "title": "Ad hoc Testing",
    "subtitle": "Bina plan, bina document — experience se defect dhoondhna",
    "icon": "bulb",
    "accent": "#00ff88",
    "englishDefinition": "Ad hoc testing is informal testing performed without any test plan, test case documentation or formal process, in which the tester uses experience, product knowledge and intuition to find defects. Its structured variants include exploratory testing, where testing and learning happen together within a timeboxed session guided by a charter, error guessing based on past defect patterns, and monkey testing with random inputs.",
    "intro": "Ad hoc testing ka matlab hai — koi test case nahi, koi checklist nahi, bas tester apni samajh aur experience se system ko use karta hai. Ye sabse sasta hai par sabse aniyamit bhi. Iske structured roop exploratory testing hai, jahan charter aur timebox ke andar testing aur learning saath chalti hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Ad hoc Testing Kya Hai",
        "kicker": "Definition",
        "body": "Ad hoc testing informal hoti hai: na test plan, na test case document, na predefined steps. Tester product knowledge, past experience aur intuition se system use karta hai aur jo bhi suspicious lage usko try karta hai. Fayda: naye aur ajeeb defects milte hain jo scripted test miss kar dete hain. Nuksaan: reproducible nahi, coverage naapna mushkil, tester ki skill par depend karta hai, aur regression ke liye reuse nahi hota.",
        "body2": "Ad hoc testing formal testing ka replacement nahi — supplement hai. Isse jo defect mile unhe formal test case mein convert karo, taaki future regression mein cover ho jaayein.",
        "chips": ["Informal", "No documentation", "Intuition", "Experience", "Unscripted"]
      },
      {
        "type": "definition",
        "title": "Exploratory Testing",
        "kicker": "Structured Ad Hoc",
        "body": "Exploratory testing ad hoc ka disciplined roop hai: 1. Charter — ek session ka mission (\"payment page par 60 minute explore karo\"). 2. Timebox — 60–120 minute ka session. 3. Session notes — kya try kiya, kya mila (session sheet). 4. Debrief — findings share, defects log, coverage note. 5. Test design aur execution saath chalti hai — tester jitna seekhta hai utna test karta hai. Isse accountability aati hai: har session ka record hota hai.",
        "body2": "Session based test management (SBTM) mein poora testing effort sessions mein baanta jaata hai. Ye agile teams mein bahut common hai — sprint ke end mein time kam ho to exploratory session se maximum risk cover ho jaata hai.",
        "chips": ["Charter", "Timebox", "Session sheet", "Debrief", "Learning + testing"]
      },
      {
        "type": "points",
        "title": "Ad hoc Ke Techniques",
        "kicker": "Techniques",
        "points": [
          "Error guessing: experience se guess karo — blank field, 0 quantity, double click, back button, browser refresh.",
          "Monkey testing: random clicks aur inputs (tool ya insaan) — crash, hang, memory issue pakadta hai.",
          "Brilliant / smart monkey: random par input-aware — valid data ke saath random actions.",
          "Gorilla testing: ek module ko bahut depth mein, baar-baar, different data se test karna.",
          "Pair testing: do log saath baithe — ek test kare, doosra note kare aur sawaal poochhe.",
          "Bug taxonomy: input, calculation, race condition, boundary, state — category wise socho.",
          "Heuristic: CRUD, SFDIPOT, follow the data, follow the money, sab kuch ulta karo."
        ]
      },
      {
        "type": "diagram",
        "title": "Ad hoc, Exploratory, Error Guessing",
        "kicker": "Diagram",
        "diagram": "st4-adhoc",
        "caption": "Ad hoc vs exploratory, error guessing aur monkey testing"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Ad hoc testing informal hai — na plan, na test case, sirf experience.",
          "Exploratory testing structured ad hoc hai — charter, timebox, session notes, debrief.",
          "Error guessing past defect patterns se, monkey testing random inputs se.",
          "Fayda: naye defects, sasta, fast. Limit: reproducible nahi, coverage naapna mushkil.",
          "Defect mile to formal test case bana kar suite mein add karo.",
          "Formal testing ka supplement, replacement nahi."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is ad hoc testing? Explain its advantages and limitations.",
        "answer": "**Ad Hoc Testing:** Informal testing jisme koi test plan, test case ya documentation nahi hoti. Tester apni experience, product knowledge aur intuition se system use karta hai aur suspicious areas try karta hai.\n\n**Advantages:**\n1. Sabse sasta aur fast — koi preparation nahi.\n2. Naye, ajeeb defects milte hain jo scripted tests miss karte hain.\n3. Naye tester ke liye product samajhne ka achha tareeka.\n4. Time critical situation mein quick value.\n\n**Limitations:**\n1. Reproducible nahi — defect steps record nahi hote.\n2. Coverage naapna mushkil — kya test hua, kya nahi, pata nahi.\n3. Tester ki skill aur mood par depend.\n4. Regression ke liye reuse nahi hota.\n5. Planning aur reporting mushkil.\n\n**Structured version:** exploratory testing — charter + timebox + session notes + debrief, isse ad hoc ka fayda milta hai aur record bhi rehta hai.\n\n**Diagram:** Refer to Ad hoc Testing diagram."
      },
      {
        "question": "What is exploratory testing? Explain its process.",
        "answer": "**Exploratory Testing:** Testing aur learning saath-saath — tester test design karte waqt hi execute karta hai. Ye ad hoc testing ka disciplined roop hai.\n\n**Process:**\n1. **Charter** — session ka mission, ek line mein. Example: \"naye user ka registration + email verification 90 minute explore karo\".\n2. **Timebox** — fixed duration (60–120 min).\n3. **Explore + design + execute** — jaise-jaise samajh aata hai, waise test banate aur chalate jao.\n4. **Session notes** — kya try kiya, kya mila, kahan doubt hai, kitna time laga.\n5. **Debrief** — findings review, defects log, coverage summary, naye charter.\n\n**Fayda:**\n- Real defects nikalte hain (scripted suite ke gaps).\n- Naya feature jaldi samajh aata hai.\n- Time kam ho to maximum risk cover ho jaata hai.\n\n**Ad hoc se farak:** charter, timebox aur notes hone se accountability aur reporting milti hai.\n\n**Diagram:** Refer to Ad hoc Testing diagram."
      },
      {
        "question": "Explain error guessing and monkey testing with examples.",
        "answer": "**Error Guessing:** Experience-based technique — tester andaza lagata hai developer kahan galti karega, wahan test karta hai.\n\n**Common guesses:**\n- Blank / space-only input, 0 quantity, negative amount\n- Max length se zyada input, special characters\n- Double click submit (duplicate order), browser back ke baad resubmit\n- Session expire ke beech form submit\n- Decimal rounding (0.1 + 0.2), timezone difference\n- File upload: 0 KB, 50 MB, wrong extension\n\nBase: past defect history, bug taxonomy, domain knowledge.\n\n**Monkey Testing:** Random clicks aur inputs, bina kisi plan ke.\n- **Dumb monkey** — pure random (input aware nahi).\n- **Brilliant / smart monkey** — valid input ke saath random actions.\n- **Gorilla** — ek module par bahut depth mein repeated testing.\n\n**Example:** Android `monkey` tool jo random taps/swipes karta hai aur crash detect karta hai; UI fuzzers jo random form data bhejte hain.\n\n**Kya pakadta hai:** crash, hang, memory leak, unhandled exception, data corruption.\n**Limit:** business logic ka defect nahi pakadta — kyunki input meaningful nahi hota.\n\n**Diagram:** Refer to Ad hoc Testing diagram."
      }
    ]
  },
  {
    "id": "usability-accessibility-testing",
    "number": "4.7",
    "title": "Usability and Accessibility Testing",
    "subtitle": "Sabke liye aasan, sabke liye sambhav — ease of use aur WCAG",
    "icon": "users",
    "accent": "#0047ff",
    "englishDefinition": "Usability testing evaluates how easily, efficiently and satisfactorily real users can achieve their goals with the software, and is measured through effectiveness, efficiency and satisfaction as defined in ISO 9241-11. Accessibility testing verifies that the software can be used by people with disabilities and conforms to guidelines such as the Web Content Accessibility Guidelines (WCAG) and its four principles: perceivable, operable, understandable and robust (POUR).",
    "intro": "Usability testing poochti hai — \"user ko use karna aasan laga?\" Accessibility testing poochti hai — \"divyang user bhi use kar sakta hai?\" Dono user-centric hain, dono black-box hain, aur dono release se pehle chahiye. Accessibility sirf disability ke liye nahi — slow network, bright sunlight aur chhoti screen par bhi faayda deti hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Usability Testing",
        "kicker": "Definition",
        "body": "Usability ke 3 measures (ISO 9241-11): 1. Effectiveness — task poora hua? success rate. 2. Efficiency — kitne time, kitne clicks, kitne errors mein? 3. Satisfaction — user ka experience (SUS score, feedback). Method: 5–8 real users ko realistic task do, unhe bolte hue dekho (think aloud), observe karo aur note karo. Tools: usability lab, remote session recording, heatmap, A/B test, survey.",
        "body2": "Nielsen ke 10 heuristics review ka base hain: system status visible ho, user ki bhasha bole, undo/redo, consistency, error prevention, recognition over recall, shortcuts, minimal design, error message mein solution, help/documentation.",
        "chips": ["Effectiveness", "Efficiency", "Satisfaction", "Think aloud", "SUS score"]
      },
      {
        "type": "definition",
        "title": "Accessibility Testing",
        "kicker": "Definition",
        "body": "Accessibility testing verify karti hai ki divyang users (visual, hearing, motor, cognitive) software use kar sakte hain. WCAG ke 4 principles (POUR): 1. Perceivable — dekha/suna ja sake: alt text, captions, 4.5:1 contrast. 2. Operable — keyboard se chale, focus visible, no time trap. 3. Understandable — clear language, predictable navigation, saaf error message. 4. Robust — screen reader aur assistive tech ke saath kaam kare (semantic HTML, ARIA).",
        "body2": "Levels: A (minimum), AA (legal target, aksar required), AAA (best). Tools: axe, Lighthouse, WAVE, NVDA/JAWS screen reader, keyboard-only testing, 200% zoom. Legal: RPwD Act (India), Section 508 (US), European Accessibility Act.",
        "chips": ["POUR", "WCAG 2.2", "A / AA / AAA", "Screen reader", "4.5:1 contrast"]
      },
      {
        "type": "points",
        "title": "Checklist — Dono Ke Liye",
        "kicker": "Checklist",
        "points": [
          "Navigation simple aur predictable — user ko kabhi guess na karna pade.",
          "Labels aur buttons ka naam clear — \"Submit\" se achha \"Order place karo\".",
          "Error message: kya galat hua + kaise theek karein + kis field mein.",
          "Consistent layout, colour aur icon ka matlab — ek page par ek hi pattern.",
          "Keyboard only: Tab, Enter, Esc se poora flow chale; focus ring dikhe.",
          "Screen reader: heading order, form label, image alt text, live error announce.",
          "Colour contrast 4.5:1 (normal text), 3:1 (large text); colour ke saath icon/text bhi.",
          "200% zoom aur mobile par layout na toote; touch target 44px; captions aur transcripts."
        ]
      },
      {
        "type": "diagram",
        "title": "Usability Aur Accessibility",
        "kicker": "Diagram",
        "diagram": "st4-usability-accessibility",
        "caption": "Usability ke 3 measure aur accessibility ke 4 POUR principles"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Usability = ease of use — effectiveness, efficiency, satisfaction (ISO 9241-11).",
          "Accessibility = divyang users ke liye usable — WCAG POUR.",
          "POUR: Perceivable, Operable, Understandable, Robust.",
          "Levels A / AA / AAA; AA aksar legal requirement hota hai.",
          "Test: 5–8 real users, keyboard-only, screen reader, contrast checker, zoom.",
          "Accessibility sabke liye faayda — slow network, sunlight, chhoti screen."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is usability testing? Explain its measures and process.",
        "answer": "**Usability Testing:** Real users ke saath evaluate karna ki software ko use karna kitna aasan, efficient aur satisfying hai.\n\n**3 Measures (ISO 9241-11):**\n1. **Effectiveness** — task complete hua? success rate (%).\n2. **Efficiency** — kitne time/clicks/errors mein (task time, error count).\n3. **Satisfaction** — user ka feedback, SUS score (0–100, 68+ achha).\n\n**Process:**\n1. Goal aur task define karo (\"naya user account banaye aur order kare\").\n2. 5–8 representative users choose karo.\n3. Think-aloud protocol — user bolte hue task kare.\n4. Observe karo — kahan phansa, kahan galti ki, kitna time laga.\n5. Findings severity ke saath list karo (blocker / major / minor).\n6. Fix karke dobara test karo.\n\n**Methods:** usability lab, remote moderated/unmoderated, heatmap, A/B test, survey, heuristic evaluation (Nielsen ke 10).\n\n**Diagram:** Refer to Usability and Accessibility Testing diagram."
      },
      {
        "question": "What is accessibility testing? Explain WCAG POUR principles.",
        "answer": "**Accessibility Testing:** Verify karna ki software divyang users (visual, hearing, motor, cognitive) ke liye usable hai.\n\n**WCAG ke 4 principles — POUR:**\n1. **Perceivable** — information dekhi/suni ja sake: image alt text, video captions, transcript, 4.5:1 colour contrast, resizable text.\n2. **Operable** — keyboard se poora interface chale, focus visible, no keyboard trap, skip links, time limit extend ho sake.\n3. **Understandable** — language clear, consistent navigation, error message bataye kya galat aur kaise fix karein.\n4. **Robust** — semantic HTML + ARIA se screen reader aur assistive tech ke saath kaam kare.\n\n**Levels:** A (minimum), AA (common legal target), AAA (highest).\n\n**Kaise test karein:**\n- Keyboard only navigate (Tab/Shift+Tab/Enter/Esc).\n- Screen reader: NVDA, JAWS, VoiceOver.\n- Tools: axe, WAVE, Lighthouse, contrast checker.\n- 200% zoom, high contrast mode, no-mouse test.\n\n**Legal:** RPwD Act (India), Section 508 (US), European Accessibility Act.\n\n**Diagram:** Refer to Usability and Accessibility Testing diagram."
      },
      {
        "question": "Differentiate between usability and accessibility testing.",
        "answer": "**Usability vs Accessibility Testing:**\n\n| Point | Usability Testing | Accessibility Testing |\n|---|---|---|\n| Sawaal | Use karna aasan hai? | Divyang user bhi kar sakta hai? |\n| Target user | Representative users | Disabilities wale users + assistive tech |\n| Standard | ISO 9241-11 (3 measures) | WCAG 2.2 (POUR), Section 508 |\n| Metric | Task success, time, SUS score | Conformance level A/AA/AAA, violations |\n| Method | Task based session, think aloud | Keyboard, screen reader, axe/Lighthouse scan |\n| Legal | Usually not mandatory | Kai deshon mein mandatory |\n| Typical defect | Confusing navigation, unclear label | Missing alt text, low contrast, focus trap |\n\n**Overlap:** dono user-centric, dono black-box, aur kai defect dono mein aate hain (jaise unclear error message).\n\n**Practice:** accessibility ko definition of done mein rakho — baad mein retrofit karna 5–10x mehnga hota hai.\n\n**Diagram:** Refer to Usability and Accessibility Testing diagram."
      }
    ]
  },
  {
    "id": "gui-testing",
    "number": "4.8",
    "title": "GUI Testing",
    "subtitle": "Screen ke elements, layout, navigation aur behaviour verify karna",
    "icon": "grid",
    "accent": "#ff0080",
    "englishDefinition": "GUI testing is the process of testing the graphical user interface of an application to verify that it meets the specified requirements for layout, controls, navigation, input validation, images, fonts, colours, messages and overall look and feel. It checks both the visual presentation and the functional behaviour of interface elements, and is automated using record-and-playback tools and visual regression testing.",
    "intro": "GUI testing screen par jo dikhta hai usko verify karti hai — layout, button, dropdown, navigation, error message, images, fonts, colours. Backend sahi hoke bhi screen galat ho sakti hai, aur cosmetic defect bhi user ka trust todta hai. Isliye GUI testing functional + visual dono dekhti hai.",
    "sections": [
      {
        "type": "definition",
        "title": "GUI Testing Kya Hai",
        "kicker": "Definition",
        "body": "GUI testing ke check points: 1. Layout aur alignment — spacing, grid, responsive breakpoint. 2. Controls — button enable/disable, checkbox, radio, dropdown, date picker ka behaviour. 3. Navigation — link, back/forward, breadcrumb, tab order. 4. Input validation — required field, format, max length, error message. 5. Images aur fonts — broken image, alt text, consistent font. 6. Look and feel — brand colour, spelling, capitalization. 7. Data display — sorting, pagination, empty state, long text. 8. Accessibility basics — contrast, focus ring, keyboard.",
        "body2": "GUI test ka example: form mein submit dabane par button disable ho jaaye (double submit na ho), error field red border ke saath message dikhaye, aur success par toast aaye. Teenon behaviour GUI test se verify hote hain.",
        "chips": ["Layout", "Controls", "Navigation", "Validation", "Look and feel"]
      },
      {
        "type": "points",
        "title": "GUI Test Ke Prakar",
        "kicker": "Types",
        "points": [
          "Manual GUI testing: tester screen dekh kar checklist ke against check karta hai.",
          "Record and playback: tool action record karta hai aur dobara chala deta hai (Selenium IDE).",
          "Object based automation: locator se element dhoondh kar action — Selenium, Playwright, Cypress.",
          "Visual regression: baseline screenshot vs current screenshot diff — pixel level change pakadta hai.",
          "Cross-browser/device: same screen Chrome, Firefox, Safari aur mobile par check.",
          "Data driven GUI test: ek script, kai data sets — form ke saare valid/invalid cases.",
          "Image based testing: OCR aur pixel comparison se text aur layout check."
        ]
      },
      {
        "type": "cards",
        "title": "Aam GUI Defects",
        "kicker": "Common Defects",
        "cards": [
          { "icon": "grid", "title": "Layout Break", "body": "Text overlap, button screen se bahar, mobile par table overflow — responsive breakpoint miss." },
          { "icon": "alert", "title": "Wrong State", "body": "Upload ke baad bhi button enabled, disabled field editable, checkbox ka state save nahi hua." },
          { "icon": "warn", "title": "Missing Feedback", "body": "Submit par koi loader/toast nahi, user dobara click karta hai — duplicate record." },
          { "icon": "eye", "title": "Cosmetic", "body": "Typo, galat icon, inconsistent font, broken image, alt text missing." }
        ]
      },
      {
        "type": "diagram",
        "title": "GUI Testing Checklist",
        "kicker": "Diagram",
        "diagram": "st4-gui",
        "caption": "Screen sample plus layout, controls, navigation, validation aur look & feel checklist"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "GUI testing interface ke elements, layout aur behaviour verify karti hai.",
          "Check: layout, controls, navigation, validation, images, look & feel, data display, accessibility basics.",
          "Functional behaviour + cosmetic appearance dono matter karte hain.",
          "Automation: record & playback, object based (Selenium/Playwright), visual regression.",
          "Har browser aur resolution par layout alag behave karta hai — cross-check karo.",
          "GUI pass hone ka matlab backend sahi hai — nahi."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is GUI testing? What do you check in GUI testing?",
        "answer": "**GUI Testing:** Application ke graphical user interface ko test karna — layout, controls, navigation, validation, images, fonts, colours, messages aur overall look and feel verify karna. Functional behaviour aur visual presentation dono cover hote hain.\n\n**Check list:**\n1. **Layout & alignment** — spacing, grid, responsive breakpoint, no overlap.\n2. **Controls** — button enable/disable, checkbox, radio, dropdown, date picker.\n3. **Navigation** — links, back/forward, breadcrumb, tab order, 404 page.\n4. **Input validation** — required, format, max length, error message placement.\n5. **Images & fonts** — broken image, alt text, consistent typography.\n6. **Look & feel** — brand colour, spelling, capitalisation, icon meaning.\n7. **Data display** — sorting, pagination, empty state, long text truncation.\n8. **Accessibility basics** — contrast, focus ring, keyboard operability.\n\n**Example test:** form submit par button disable ho (double submit na ho), invalid field par red border + message, success par toast.\n\n**Diagram:** Refer to GUI Testing diagram."
      },
      {
        "question": "How is GUI testing automated? Explain the approaches.",
        "answer": "**1. Record and playback:**\n- Tool actions record karta hai (click, type) aur replay karta hai.\n- Fast start, par fragile — UI change par script tootti hai.\n- Example: Selenium IDE, browser extensions.\n\n**2. Object based automation:**\n- Element locator (id, CSS, XPath) se action aur assertion.\n- Page Object Model se maintainable.\n- Example: Selenium WebDriver, Playwright, Cypress, TestCafe.\n\n**3. Visual regression testing:**\n- Baseline screenshot store karo, har run par current screenshot se diff.\n- Pixel ya layout level change detect hota hai (font, spacing, colour).\n- Tools: Percy, BackstopJS, Applitools, Playwright snapshots.\n\n**4. Data driven GUI test:** ek script, multiple data sets — form ke valid/invalid cases.\n\n**5. Keyword driven:** business keyword (\"login\", \"add to cart\") se script.\n\n**Best practice:** stable locators (data-testid), Page Object Model, screenshot baseline version control, flaky test quarantine, headless CI runs, cross-browser grid.\n\n**Diagram:** Refer to GUI Testing diagram."
      },
      {
        "question": "What types of defects are found in GUI testing? Give examples.",
        "answer": "**GUI defect categories:**\n\n1. **Layout defects** — overlap, misalignment, button off-screen, table overflow on mobile, broken responsive breakpoint.\n2. **Control state defects** — submit button 2 baar click ho gaya (duplicate record), disabled field editable, checkbox state save nahi hua.\n3. **Navigation defects** — broken link, back button par wrong page, breadcrumb galat, tab order illogical.\n4. **Validation / message defects** — error message missing, galat field par message, technical error text user ko dikh raha hai.\n5. **Data display defects** — sorting galat, pagination duplicate row, empty state par blank screen, long text cut ho gaya.\n6. **Cosmetic defects** — typo, inconsistent font, galat icon, broken image, alt text missing.\n7. **Compatibility defects** — Chrome theek, Safari mein dropdown nahi khulta.\n8. **Accessibility defects** — low contrast, focus invisible, screen reader label missing.\n\n**Severity:** data loss/duplicate submit = high; layout break = medium; typo = low. Par cosmetic defect bhi trust todta hai — priority business ke hisaab se.\n\n**Diagram:** Refer to GUI Testing diagram."
      }
    ]
  },
  {
    "id": "validation-testing",
    "number": "4.9",
    "title": "Validation Testing",
    "subtitle": "\"Sahi product bana?\" — user requirement ke against confirm karna",
    "icon": "check",
    "accent": "#00aaff",
    "englishDefinition": "Validation testing is the process of evaluating a software system at the end of the development life cycle to determine whether it satisfies the business requirements and intended use, answering the question 'are we building the right product?'. It is performed through execution of the software — including system and acceptance testing — and is complementary to verification, which checks whether the product is built correctly against the specification.",
    "intro": "Validation testing ka sawaal hai — \"kya humne wahi product banaya jo user ko chahiye tha?\" Ye software chala kar, real data aur user requirement ke against check hoti hai. Verification spec ke against check karti hai (\"product sahi bana?\"), validation use ke against (\"sahi product bana?\"). Dono milkar quality banate hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Validation Testing Kya Hai",
        "kicker": "Definition",
        "body": "Validation testing coding ke baad hoti hai — jab build test ke liye ready ho. Isme: 1. Requirement based test cases chalao. 2. Acceptance criteria verify karo. 3. User workflow end-to-end check karo. 4. Data sahi save aur retrieve hua dekho. 5. Non-functional expectation (speed, security) check karo. Result: pass/fail aur sign-off. Validation ke bina release ka matlab hai — risk lena.",
        "body2": "Validation testing ke roop: system testing, acceptance testing, UAT, alpha/beta, regression aur exploratory. Verification ke roop: review, walkthrough, inspection, static analysis. Dono phases mein chalti hain — verification jaldi (sasta), validation end mein (final proof).",
        "chips": ["Right product", "Fitness for use", "UAT", "Sign-off", "Dynamic"]
      },
      {
        "type": "points",
        "title": "Verification vs Validation",
        "kicker": "Comparison",
        "points": [
          "Sawaal: verification — \"Are we building the product right?\", validation — \"Are we building the right product?\"",
          "Kaise: verification static (document/code padho), validation dynamic (software chalao).",
          "Kab: verification har phase mein, validation coding ke baad.",
          "Kis ke against: verification spec/design ke against, validation user requirement ke against.",
          "Kaun: verification reviewer/QA, validation tester/customer.",
          "Cost: verification sasta (source par defect), validation mehnga par final proof deta hai.",
          "Dono zaroori: sirf verification se pata nahi chalega user ko chahiye ya nahi; sirf validation se defect late milega."
        ]
      },
      {
        "type": "cards",
        "title": "Validation Ke Prakar",
        "kicker": "Types",
        "cards": [
          { "icon": "test", "title": "System Testing", "body": "Poore product ko requirement ke against test — functional + non-functional." },
          { "icon": "users", "title": "UAT", "body": "Customer apne business workflow se verify karta hai aur sign-off deta hai." },
          { "icon": "globe", "title": "Alpha / Beta", "body": "Alpha developer site par, beta real users ke saath real environment mein." },
          { "icon": "refresh", "title": "Regression", "body": "Fix ke baad purani functionality validate karna — change ne kuch toda nahi." }
        ]
      },
      {
        "type": "diagram",
        "title": "Verification vs Validation",
        "kicker": "Diagram",
        "diagram": "st4-validation",
        "caption": "Verification spec ke against, validation user requirement ke against"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Validation testing = \"right product bana?\" — user requirement ke against.",
          "Dynamic hoti hai — software execute karke check.",
          "Verification = \"product sahi bana?\" — spec ke against, static.",
          "Validation ke roop: system, acceptance, UAT, alpha/beta, regression.",
          "Result: pass/fail aur sign-off.",
          "Verification sasta (jaldi), validation final proof — dono chahiye."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is validation testing? Explain with its types.",
        "answer": "**Validation Testing:** Development life cycle ke end mein software evaluate karna — kya wo business requirements aur intended use ko poora karta hai? Sawaal: \"are we building the right product?\"\n\n**Kaise hoti hai:** software execute karke, real ya realistic data ke saath, user requirement ke against.\n\n**Types:**\n1. **System testing** — poora integrated product requirement ke against.\n2. **Acceptance testing / UAT** — customer apne business workflow se verify karta hai.\n3. **Alpha testing** — developer site par internal + selected users.\n4. **Beta testing** — real users, real environment, feedback.\n5. **Regression** — change ke baad purani functionality validate.\n6. **Exploratory** — real usage patterns se validate.\n\n**Kya check hota hai:** business requirement poora, acceptance criteria met, data sahi save/retrieve, workflow complete, performance acceptable, security sufficient.\n\n**Output:** pass/fail, defect list, sign-off.\n\n**Diagram:** Refer to Validation Testing diagram."
      },
      {
        "question": "Differentiate between verification and validation with examples.",
        "answer": "**Verification vs Validation:**\n\n| Point | Verification | Validation |\n|---|---|---|\n| Sawaal | Are we building the product right? | Are we building the right product? |\n| Type | Static (no execution) | Dynamic (execution) |\n| Kis ke against | Spec, design, standard | User requirement, business need |\n| Kab | Har phase (requirement se coding) | Coding ke baad, release se pehle |\n| Kaun | Reviewer, QA, static tool | Tester, customer, end user |\n| Cost | Kam (defect source par) | Zyada par final proof |\n| Example | Code review, inspection, lint, SAST | Unit/integration/system test, UAT |\n\n**Classic example:**\n- Requirement: \"user 8+ character password set kare\".\n- **Verification:** design aur code review mein dekho ki validation rule implement hua ya nahi.\n- **Validation:** software chala kar dekho ki 7 character reject hota hai aur 8 accept.\n\n**Aur ek:** requirement hi galat ho (\"password 4 character\") — verification pass hoga (spec follow hua), validation fail (security requirement poora nahi).\n\n**Diagram:** Refer to Validation Testing diagram."
      },
      {
        "question": "Why is validation testing important before release?",
        "answer": "**Importance:**\n1. **User requirement confirm** — product techically sahi ho par user ka problem solve na kare, to project fail.\n2. **Business risk kam** — payment, order, data loss jaise critical flow validate hote hain.\n3. **Acceptance aur sign-off** — customer tabhi sign-off deta hai jab validation pass ho.\n4. **Regulatory compliance** — kai domain mein validation evidence mandatory (medical, finance).\n5. **Production defect cost** — release ke baad defect 10–100x mehnga padta hai.\n6. **Confidence** — team ko pata hota hai ki build deploy karne layak hai.\n\n**Validation ke bina:**\n- Feature missing ya galat behaviour production mein.\n- Data corruption aur customer trust loss.\n- Emergency hotfix aur reputation damage.\n\n**Best practice:** validation ko definition of done mein rakho; acceptance criteria pehle likho; RTM se coverage track karo; UAT environment production jaisa rakho.\n\n**Diagram:** Refer to Validation Testing diagram."
      }
    ]
  },
  {
    "id": "specification-based-testing",
    "number": "4.10",
    "title": "Specification Based Testing",
    "subtitle": "Spec se test cases derive karna — black-box ka formal roop",
    "icon": "doc",
    "accent": "#ff8800",
    "englishDefinition": "Specification based testing, also called black-box or behavioural testing, derives test cases from a formal or semi-formal specification of the required behaviour rather than from the source code. Techniques include decision tables, cause-effect graphing, state transition models, grammar and syntax based testing, equivalence partitioning and boundary value analysis, and classification trees.",
    "intro": "Specification based testing ka rule simple hai — test cases specification se aayenge, code se nahi. Spec ho sakti hai SRS, use case, decision table, state model, grammar ya API contract. Iska fayda: implementation badle to test cases wahi rehte hain, aur spec ki galti bhi testing se pehle pakdi ja sakti hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Specification Based Testing Kya Hai",
        "kicker": "Definition",
        "body": "Process: 1. Specification collect karo — SRS, use case, business rule, state model, API contract. 2. Spec ko testable form mein badlo — decision table, state table, grammar, input domain. 3. Technique chuno — decision table, cause-effect graph, state transition, EP/BVA, classification tree. 4. Test cases derive karo — har rule/transition/class ke liye. 5. Expected output spec se hi likho. 6. Coverage naapo — rules covered ÷ total rules.",
        "body2": "Black-box testing ka formal naam yahi hai. Jab spec formal ho (state machine, grammar, decision table) to test cases almost automatic generate ho jaate hain — isko model based testing kehte hain. Tools spec model se test cases generate kar sakte hain.",
        "chips": ["Black-box", "Decision table", "Cause-effect", "State model", "Grammar"]
      },
      {
        "type": "points",
        "title": "Techniques",
        "kicker": "Techniques",
        "points": [
          "Decision table testing: saare condition combinations aur unke action — har rule ek test case.",
          "Cause-effect graphing: input conditions (cause) aur output (effect) ka relation graph banao, phir decision table.",
          "State transition testing: state model se valid aur invalid transitions ke test cases.",
          "Grammar / syntax testing: input language (date, URL, formula, protocol) ke valid aur invalid strings.",
          "Equivalence partitioning + BVA: input domain ke classes aur boundaries.",
          "Classification tree / pairwise: multiple parameters ke combinations systematically kam karo.",
          "Use case testing: har use case ke main flow, alternate flow aur exception flow ke tests."
        ]
      },
      {
        "type": "cards",
        "title": "Fayde Aur Limit",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "check", "title": "Fayda: Stable", "body": "Implementation badalne par test cases wahi rehte hain — refactor se suite nahi tootti." },
          { "icon": "doc", "title": "Fayda: Traceable", "body": "Har test case ek rule/requirement se linked — coverage naapna aasan." },
          { "icon": "users", "title": "Fayda: Early", "body": "Design phase mein hi test cases ban jaate hain, spec ki galti bhi dikh jaati hai." },
          { "icon": "alert", "title": "Limit: Spec Quality", "body": "Spec incomplete ya galat ho to test cases bhi wahi galti dohrayenge — review zaroori." }
        ]
      },
      {
        "type": "diagram",
        "title": "Spec Se Test Cases Tak",
        "kicker": "Diagram",
        "diagram": "st4-spec-based",
        "caption": "Specification → technique → test cases, decision table ke example ke saath"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Specification based testing = black-box testing; test cases spec se derive hote hain.",
          "Techniques: decision table, cause-effect graph, state transition, grammar, EP/BVA, classification tree.",
          "Decision table ka har rule = ek test case.",
          "Fayda: implementation independent, traceable, early test design.",
          "Limit: spec galat/incomplete ho to test bhi galat.",
          "Formal spec ho to model based testing se test cases generate ho sakte hain."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is specification based testing? Explain its techniques.",
        "answer": "**Specification Based Testing (Black-box/Behavioural):** Test cases required behaviour ki specification se derive kiye jaate hain — code se nahi.\n\n**Process:** spec collect → testable form mein badlo → technique chuno → test cases derive → expected output spec se → coverage naapo.\n\n**Techniques:**\n1. **Decision table testing** — saare condition combinations + actions; har rule ek test case.\n2. **Cause-effect graphing** — causes (inputs) aur effects (outputs) ka graph, phir decision table.\n3. **State transition testing** — states, events, valid aur invalid transitions.\n4. **Grammar / syntax testing** — input format ke valid/invalid strings (date, URL, protocol).\n5. **Equivalence partitioning + BVA** — classes aur boundaries.\n6. **Classification tree / pairwise** — parameter combinations systematically.\n7. **Use case testing** — main, alternate aur exception flows.\n\n**Advantages:** implementation independent, traceability, early test design, refactor safe.\n**Limitation:** spec complete aur correct hona chahiye, warna test galat.\n\n**Diagram:** Refer to Specification Based Testing diagram."
      },
      {
        "question": "Explain decision table testing with an example.",
        "answer": "**Decision Table Testing:** Specification ke conditions aur actions ko table mein likh kar saare combination ke test cases banane ki technique.\n\n**Structure:**\n- Conditions (rows) — true/false combinations (columns/rules).\n- Actions (rows) — har rule ke liye expected action.\n\n**Example — discount rule:**\nConditions: amount > 5000, member, coupon present.\n\n| Rule | Amount > 5000 | Member | Coupon | Discount |\n|---|---|---|---|---|\n| R1 | T | T | T | 15% |\n| R2 | T | T | F | 12% |\n| R3 | T | F | F | 10% |\n| R4 | F | T | T | 7% |\n| R5 | F | F | F | 0% |\n\nHar rule = ek test case (5 tests). Agar spec mein ek rule missing hai (jaise amount > 5000, member false, coupon true), to wahi jagah defect aayega — decision table us gap ko dikha deta hai.\n\n**Fayda:** missing rule aur conflicting rule turant dikhte hain; business analyst ke saath review karna aasan.\n**Limit:** conditions zyada hon to table bahut badi ho jaati hai (n conditions → 2^n rules); tab pairwise/collapsed table use karo.\n\n**Diagram:** Refer to Specification Based Testing diagram."
      },
      {
        "question": "What are the advantages and limitations of specification based testing?",
        "answer": "**Advantages:**\n1. **Implementation independent** — code badle ya refactor ho, test cases wahi rehte hain.\n2. **Early test design** — spec milte hi test cases ban jaate hain (shift-left).\n3. **Traceability** — har test case ek requirement/rule se linked; coverage measurable.\n4. **Spec ki galti pakadta hai** — ambiguous ya missing rule test design ke waqt dikhta hai.\n5. **Tester ko domain knowledge** build hota hai, code knowledge ki zaroorat nahi.\n6. **Formal spec par automation** — model se test cases generate (model based testing).\n\n**Limitations:**\n1. **Spec quality par depend** — incomplete/galat spec se test bhi galat.\n2. **Internal structure ka pata nahi** — dead code ya unreachable branch nahi dikhta.\n3. **Complex spec** — decision table/state model bahut bada ho jaata hai.\n4. **Implementation detail miss** — performance, memory, concurrency spec mein nahi hote.\n5. **Maintenance** — spec badle to poora test set update karna padta hai.\n\n**Best practice:** spec based (black-box) + structure based (white-box) dono mila kar chalao — coverage bhi, quality bhi.\n\n**Diagram:** Refer to Specification Based Testing diagram."
      }
    ]
  },
  {
    "id": "object-oriented-testing",
    "number": "4.11",
    "title": "Testing Object Oriented Software",
    "subtitle": "Class, inheritance, polymorphism aur object state ke challenge",
    "icon": "cube",
    "accent": "#aa00ff",
    "englishDefinition": "Testing object oriented software focuses on classes and objects rather than standalone functions, and must address encapsulation, inheritance, polymorphism and dynamic binding. It includes intra-method, inter-method, intra-class and inter-class testing, method-message path testing, state based testing of objects and inheritance (subclass) testing, and must re-test parent behaviour in derived classes.",
    "intro": "OO software mein test karna thoda alag hai — function ke bajay class aur object. Encapsulation private state chhupa deta hai, inheritance parent ka behaviour child mein le aata hai, polymorphism decide karta hai kaunsa method chalega, aur object ki state se same method ka result badal jaata hai. Isliye OO testing ke apne levels aur techniques hain.",
    "sections": [
      {
        "type": "definition",
        "title": "OO Testing Kya Hai",
        "kicker": "Definition",
        "body": "Levels: 1. Intra-method — ek method ka logic (white-box, jaise branch coverage). 2. Inter-method — class ke andar method to method call. 3. Intra-class — poora class ka behaviour aur state machine. 4. Inter-class — do class ke beech message interaction. 5. System level — poora OO system use case ke through. Techniques: method-message path (MM path) coverage, state based testing, inheritance testing, mock/stub se dependency isolate, fault model based testing.",
        "body2": "OO mein sabse aam defect: object ka galat state. Example — `withdraw()` pehli baar sahi chalta hai, balance negative hone par galat behave karta hai. Isliye har method ko different object states par test karo (state based testing).",
        "chips": ["Class", "Object state", "Inheritance", "Polymorphism", "MM path"]
      },
      {
        "type": "points",
        "title": "OO Testing Ke Challenges",
        "kicker": "Challenges",
        "points": [
          "Encapsulation: private/protected state bahar se set nahi hota — test ke liye setter, reflection ya test-only hook chahiye.",
          "Inheritance: child class parent ka behaviour inherit karta hai — parent ki saari tests child par dobara chalao.",
          "Polymorphism: kaunsa method chalega ye runtime object type decide karta hai — har implementation test karo.",
          "Dynamic binding: static analysis se pata nahi chalta kaunsi method call hogi.",
          "Object state: same method call ka result object ki current state par depend karta hai.",
          "Message interaction: ek object doosre par depend karta hai — mock se isolate karo warna test fragile hoga.",
          "Abstract class / interface: direct instantiate nahi hota — concrete implementation ke through test."
        ]
      },
      {
        "type": "points",
        "title": "Techniques",
        "kicker": "Techniques",
        "points": [
          "Method-message path (MM path): object ke method calls ka sequence path banao aur cover karo.",
          "State based testing: object ki state machine banao (draft → paid → shipped) aur transitions test karo.",
          "Inheritance / subclass testing: parent ki suite child par chalao + child ke naye methods ka test.",
          "Polymorphic testing: base reference se har derived object ka behaviour verify karo.",
          "Exception testing: exception, null, invalid state par behaviour.",
          "Mock/fake: dependency (database, API, clock) ko fake karke class ka unit test.",
          "Class-level coverage: har public method ek baar + state combinations."
        ]
      },
      {
        "type": "diagram",
        "title": "OO Testing — Class, Inheritance, Levels",
        "kicker": "Diagram",
        "diagram": "st4-oo",
        "caption": "Class hierarchy, overriding, OO testing ke levels aur challenges"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "OO testing class aur object par kendrit hoti hai, function par nahi.",
          "Levels: intra-method, inter-method, intra-class, inter-class, system.",
          "Challenges: encapsulation, inheritance, polymorphism, dynamic binding, object state.",
          "Techniques: MM path, state based, inheritance testing, mock se isolation.",
          "Child class par parent ki test suite dobara chalao.",
          "Object state ke bina same method ka result verify nahi hota."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What are the challenges in testing object oriented software?",
        "answer": "**OO testing ke challenges:**\n\n1. **Encapsulation** — private state bahar se set nahi hota; test ke liye setter, reflection ya test hook chahiye. State verify karna bhi mushkil.\n2. **Inheritance** — child class parent ka behaviour inherit karta hai; parent ka test child par dobara chalana padta hai (subclass reuse).\n3. **Polymorphism** — runtime object type decide karta hai kaunsa method chalega; base reference se call hone par saare implementations test karne padte hain.\n4. **Dynamic binding** — static analysis se call graph poora nahi milta.\n5. **Object state** — same method ka result object ki state par depend karta hai (`withdraw()` balance ke hisaab se alag behave karega).\n6. **Message interaction** — ek object doosre par depend karta hai; integration ke bina unit test mushkil, mock ke bina fragile.\n7. **Abstract classes / interfaces** — direct test nahi ho sakte, concrete implementation chahiye.\n8. **Test case design** — traditional control-flow coverage class level par direct apply nahi hoti.\n\n**Solutions:** mock/fake se dependency isolate, state based testing, MM path coverage, inheritance testing, class-level coverage, fault model based testing.\n\n**Diagram:** Refer to Testing Object Oriented Software diagram."
      },
      {
        "question": "Explain the levels of OO testing.",
        "answer": "**OO testing ke levels:**\n\n1. **Intra-method testing** — ek method ke andar ka logic. White-box: statement, branch, condition, path coverage.\n\n2. **Inter-method testing** — ek class ke andar method to method interaction. Example: `addItem()` ke baad `calculateTotal()` ka behaviour.\n\n3. **Intra-class testing** — poore class ka behaviour aur state machine. Har public method ek baar, plus different object states par.\n\n4. **Inter-class testing** — do ya zyada class ke beech message interaction. Example: `Order` class `Payment` class ko call karti hai — interface aur error handling.\n\n5. **System level / OO system testing** — poora application use case ke through, real workflow.\n\n**Kaise karein:**\n- Unit level: JUnit/PHPUnit + Mockito/Prophecy.\n- State based: object ki state transition table.\n- MM path: method call sequence cover karo.\n- Integration: contract test + end-to-end scenario.\n\n**Diagram:** Refer to Testing Object Oriented Software diagram."
      },
      {
        "question": "Why is inheritance and polymorphism testing important? Give examples.",
        "answer": "**Inheritance testing kyun:**\n- Child class parent ka behaviour inherit karti hai — parent mein fix ka effect child par bhi jaata hai.\n- Child apne methods override karti hai — override galat ho sakta hai.\n- Child naye invariants add karti hai jo parent ke rules tod sakte hain.\n\n**Rule:** parent class ki poori test suite child par dobara chalao, phir child ke naye methods ke test likho.\n\n**Example:** `Account.withdraw()` parent mein balance check karta hai. `CurrentAccount` override karta hai overdraft limit ke saath (balance −5000 tak). Parent ka test (balance se zyada withdraw fail ho) child mein fail hoga — isliye child ke liye naya test chahiye.\n\n**Polymorphism testing kyun:**\n- Base reference (`Account a = new CurrentAccount()`) se call hone par runtime type decide karta hai.\n- Har derived implementation ka behaviour verify karna padta hai — warna ek implementation mein defect chhoot jaayega.\n\n**Example:** payment methods `Card`, `UPI`, `NetBanking` — `pay()` ka behaviour teeno mein alag; base reference se teeno ka test chahiye.\n\n**Diagram:** Refer to Testing Object Oriented Software diagram."
      }
    ]
  },
  {
    "id": "web-application-testing",
    "number": "4.12",
    "title": "Testing Web Based Applications",
    "subtitle": "Content, navigation, UI, functionality, security aur performance — sab ek saath",
    "icon": "globe",
    "accent": "#0047ff",
    "englishDefinition": "Web application testing verifies a web based system across its three tiers — presentation, business logic and data — and covers content, navigation, user interface, functionality, compatibility, security, performance, usability and accessibility. Because web applications run in heterogeneous browsers, networks and devices with stateless HTTP, testing must include cross-browser checks, session handling, security testing and load testing.",
    "intro": "Web application testing multi-dimensional hai — browser, network, server, database, security, performance. Sab kuch sahi ho par ek browser mein CSS toot jaaye, ya session expire hoke payment fail ho jaaye. Isliye web testing mein content, navigation, UI, functionality, compatibility, security, performance aur usability — aath dimension cover karne padte hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Web Application Testing Kya Hai",
        "kicker": "Definition",
        "body": "3-tier architecture ke hisaab se: 1. Presentation tier — HTML/CSS/JS, browser, responsive layout. 2. Business logic tier — server, API, validation, session, authentication. 3. Data tier — database, file storage, cache, backup. Testing ke 8 dimension: content, navigation, UI/presentation, functionality, compatibility, security, performance, usability/accessibility. Har tier par alag defect possible hai, par dikhta sab browser par hai.",
        "body2": "Web ki khaas challenges: stateless HTTP (session manage karna padta hai), concurrent users, network latency, multiple browsers, security exposure (XSS, CSRF, SQLi) aur frequent releases (isliye regression automation zaroori).",
        "chips": ["3-tier", "Content", "Navigation", "Security", "Cross-browser", "Load"]
      },
      {
        "type": "points",
        "title": "Web Testing Ke 8 Dimension",
        "kicker": "Dimensions",
        "points": [
          "Content testing: spelling, grammar, accuracy, legal text, broken text, SEO meta.",
          "Navigation testing: links, 404 page, breadcrumb, back/forward button, deep link.",
          "UI / presentation: layout, responsive breakpoints, cross-browser CSS, fonts, images.",
          "Functionality: forms, search, login, cart, payment, file upload, API integration.",
          "Compatibility: browser (Chrome/Firefox/Safari/Edge), OS, device, resolution, network speed.",
          "Security: HTTPS, XSS, SQL injection, CSRF, session timeout, password policy, file upload risk.",
          "Performance: page load time, concurrent users, CDN, caching, API response.",
          "Usability / accessibility: keyboard, screen reader, contrast, error messages."
        ]
      },
      {
        "type": "cards",
        "title": "Web Specific Testing",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "lock", "title": "Security Testing", "body": "OWASP Top 10 ke against: injection, broken auth, XSS, CSRF, misconfiguration. Tools: ZAP, Burp." },
          { "icon": "speed", "title": "Performance", "body": "Page load (3s rule), TTFB, concurrent users, CDN, image compression, DB query." },
          { "icon": "globe", "title": "Cross Browser", "body": "Safari/Chrome/Firefox/Edge par layout aur JS behaviour — Selenium Grid, cloud device farm." },
          { "icon": "refresh", "title": "Session / Cookie", "body": "Login persist, timeout, logout, multi-tab, cookie flags (HttpOnly, Secure, SameSite)." }
        ]
      },
      {
        "type": "diagram",
        "title": "Web Testing — 3 Tier, 8 Dimension",
        "kicker": "Diagram",
        "diagram": "st4-web",
        "caption": "Presentation, business logic aur data tier ke saath aath testing dimension"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Web app testing 3-tier (presentation, logic, data) aur 8 dimension cover karti hai.",
          "Dimensions: content, navigation, UI, functionality, compatibility, security, performance, usability.",
          "Special challenges: stateless HTTP, session, concurrent users, multiple browsers, frequent release.",
          "Security: XSS, SQLi, CSRF, HTTPS, session timeout.",
          "Performance: page load, concurrent users, CDN, caching.",
          "Automation + regression ke bina web release safe nahi hoti."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is web application testing? Explain its dimensions.",
        "answer": "**Web Application Testing:** Web based system ko uske teen tiers (presentation, business logic, data) par verify karna, aur content, navigation, UI, functionality, compatibility, security, performance aur usability cover karna.\n\n**8 Dimensions:**\n1. **Content** — spelling, accuracy, legal text, SEO meta.\n2. **Navigation** — links, 404, breadcrumb, back button, deep link.\n3. **UI / presentation** — layout, responsive, cross-browser CSS, images.\n4. **Functionality** — forms, search, login, cart, payment, upload, API.\n5. **Compatibility** — browser, OS, device, resolution, network.\n6. **Security** — XSS, SQLi, CSRF, HTTPS, session, file upload.\n7. **Performance** — load time, concurrent users, CDN, API response.\n8. **Usability / accessibility** — keyboard, screen reader, contrast, messages.\n\n**Web specific challenges:** stateless HTTP aur session management, concurrent users, network latency, multiple browsers, security exposure, frequent releases.\n\n**Tools:** Selenium, Playwright, Cypress, Postman, JMeter, k6, OWASP ZAP, Lighthouse, axe.\n\n**Diagram:** Refer to Testing Web Based Applications diagram."
      },
      {
        "question": "What types of testing are performed on a web application? Explain security and performance testing for web.",
        "answer": "**Web application par testing types:**\n- Functional testing (forms, login, payment)\n- Content aur navigation testing\n- UI / cross-browser / responsive testing\n- Compatibility testing\n- Security testing\n- Performance aur load testing\n- Usability aur accessibility testing\n- Database aur API testing\n- Regression aur smoke testing\n\n**Security testing (OWASP Top 10):**\n1. **Injection** — SQL/NoSQL injection, input sanitisation.\n2. **Broken authentication** — weak password policy, session fixation, no lockout.\n3. **XSS** — stored/reflected script injection, output encoding.\n4. **CSRF** — token validation, SameSite cookie.\n5. **Security misconfiguration** — directory listing, default credentials, error stack trace.\n6. **File upload** — extension/MIME check, virus scan, storage outside webroot.\n7. **HTTPS / headers** — TLS, HSTS, secure cookies.\n\n**Performance testing:**\n- Page load time (3 second rule), TTFB, First Contentful Paint.\n- Concurrent users (load test), spike test for sale traffic.\n- CDN, caching, image compression, JS bundle size.\n- DB query aur API response time.\n\n**Diagram:** Refer to Testing Web Based Applications diagram."
      },
      {
        "question": "How is testing a web application different from testing a desktop application?",
        "answer": "**Web vs Desktop application testing:**\n\n| Point | Web application | Desktop application |\n|---|---|---|\n| Deployment | Server par, har release central | Har machine par install |\n| Environment | Browser + OS + device + network | Mostly fixed OS |\n| Compatibility | Cross-browser, responsive, latency | Limited hardware/OS combos |\n| Session | Stateless HTTP, cookie/session | In-process state |\n| Security | XSS, CSRF, SQLi, HTTPS | Local file/registry access |\n| Performance | Network + server + client | Mostly local resources |\n| Updates | Frequent, continuous | Versioned, manual/auto update |\n| Testing tools | Selenium, Playwright, JMeter, ZAP | WinAppDriver, Squish, Appium (desktop) |\n| User base | Unknown, diverse | Known organisation users |\n\n**Web ka extra focus:** cross-browser rendering, page load performance, session management, API integration, cloud scaling, security exposure.\n**Desktop ka extra focus:** installation, OS integration, offline behaviour, hardware/peripheral compatibility.\n\n**Diagram:** Refer to Testing Web Based Applications diagram."
      }
    ]
  },
  {
    "id": "database-testing",
    "number": "4.13",
    "title": "Database Testing",
    "subtitle": "Schema, constraint, trigger, procedure aur data integrity verify karna",
    "icon": "database",
    "accent": "#00aaff",
    "englishDefinition": "Database testing is the process of verifying the database layer of an application, including its schema and data types, constraints and keys, indexes, triggers and stored procedures, transactions and ACID properties, data integrity, and the correctness of CRUD operations, migrations, backups and query performance. It validates that the data stored and retrieved by the application is accurate, complete and consistent.",
    "intro": "UI par sab sahi dikh sakta hai par database mein data galat, duplicate ya adhoora ho sakta hai. Database testing schema, constraint, trigger, stored procedure, transaction aur data integrity verify karti hai. Iska core sawaal: \"data sahi, poora aur safe hai?\"",
    "sections": [
      {
        "type": "definition",
        "title": "Database Testing Kya Hai",
        "kicker": "Definition",
        "body": "Database testing ke areas: 1. Schema — table, column, data type, length, default, naming. 2. Constraints — primary key, foreign key, unique, check, not null. 3. Indexes — query fast hai? duplicate index? 4. Triggers aur stored procedures — side effect, error handling, recursion. 5. Transactions (ACID) — commit, rollback, deadlock, isolation level. 6. Data integrity — duplicate, orphan, garbage, encoding. 7. CRUD flow — insert → select → update → delete aur UI se match. 8. Migration/backup/restore. 9. Performance — slow query, execution plan.",
        "body2": "Ek practical test: UI se order place karo, phir database mein check karo — order row, order_items rows, stock decrement, payment record — sab ek saath bane ya kuch bhi nahi (atomicity). Ye end-to-end data validation hai.",
        "chips": ["Schema", "Constraints", "Triggers", "ACID", "Data integrity", "Migration"]
      },
      {
        "type": "points",
        "title": "Kya Kya Test Karein",
        "kicker": "Checklist",
        "points": [
          "Schema validation: expected table/column hai? data type aur length sahi? default value?",
          "Constraint testing: duplicate PK insert fail hota hai? orphan FK reject hota hai? CHECK constraint kaam karta hai?",
          "CRUD verification: insert ke baad select, update ke baad value, delete ke baad absence.",
          "Trigger testing: insert/update/delete par trigger chalta hai? audit row banti hai? recursion nahi?",
          "Stored procedure: input/output, error handling, transaction rollback, permission.",
          "Transaction: partial failure par rollback, parallel update par correct final value (lost update nahi).",
          "Data integrity: duplicate, orphan record, garbage value, UTF-8 encoding, date format.",
          "Migration: purana data naye schema mein bina loss, rollback script, version upgrade.",
          "Performance: index use ho raha hai, slow query log, bade data volume par plan."
        ]
      },
      {
        "type": "cards",
        "title": "ACID Properties",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "target", "title": "Atomicity", "body": "Sab ya kuch nahi — payment fail ho to order row bhi na bane (rollback)." },
          { "icon": "check", "title": "Consistency", "body": "Transaction ke baad database valid state mein — constraint aur rule intact." },
          { "icon": "lock", "title": "Isolation", "body": "Parallel transactions ek doosre ko interfere na karein — lock/isolation level." },
          { "icon": "server", "title": "Durability", "body": "Commit ke baad data permanent — power failure ke baad bhi bacha rahe." }
        ]
      },
      {
        "type": "diagram",
        "title": "Database Testing Overview",
        "kicker": "Diagram",
        "diagram": "st4-database",
        "caption": "Schema snapshot, testing areas aur ACID transaction test"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Database testing schema, constraints, triggers, procedures, transactions aur data integrity verify karti hai.",
          "ACID: Atomicity, Consistency, Isolation, Durability.",
          "CRUD flow aur UI data dono match karne chahiye.",
          "Duplicate, orphan aur garbage data sabse aam defects hain.",
          "Migration aur backup/restore bhi test karo — production upgrade se pehle.",
          "Tools: SQL queries, DBUnit, tSQLt, pgTAP, migration scripts."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is database testing? What do you test in database testing?",
        "answer": "**Database Testing:** Application ke database layer ko verify karna — schema, constraints, triggers, stored procedures, transactions, data integrity, CRUD operations, migration aur performance.\n\n**Kya test karte hain:**\n1. **Schema** — tables, columns, data type, length, default, naming convention.\n2. **Constraints** — PK, FK, UNIQUE, CHECK, NOT NULL ka behaviour.\n3. **Indexes** — query fast hai? missing/duplicate index?\n4. **Triggers & procedures** — side effect, error handling, recursion.\n5. **Transactions (ACID)** — commit, rollback, deadlock, isolation.\n6. **Data integrity** — duplicate, orphan, garbage, encoding (UTF-8).\n7. **CRUD** — insert/select/update/delete ka result UI se match.\n8. **Migration** — schema change ke saath data loss nahi, rollback script.\n9. **Backup / restore** — restore ke baad application chalti hai.\n10. **Performance** — slow query, execution plan, bade volume par behaviour.\n\n**Example:** order place karne par `orders`, `order_items`, `stock`, `payment` — sab tables consistent update hone chahiye, warna rollback.\n\n**Diagram:** Refer to Database Testing diagram."
      },
      {
        "question": "Explain ACID properties with testing examples.",
        "answer": "**ACID properties:**\n\n1. **Atomicity** — transaction ke saare steps ya to poore hote hain ya koi nahi.\n   - *Test:* payment fail karao → order row bhi na bane. Agar order bana aur payment nahi, to atomicity fail.\n\n2. **Consistency** — transaction ke baad database valid state mein rahe, constraints intact.\n   - *Test:* stock 0 hone par order place na ho; foreign key orphan na bane; sum of debit = sum of credit.\n\n3. **Isolation** — parallel transactions ek doosre ke beech mein nahi aate.\n   - *Test:* do users ek hi last seat book karein — sirf ek succeed kare. Dirty read / lost update na ho.\n\n4. **Durability** — commit ke baad data permanent.\n   - *Test:* commit ke turant baad server restart karo — data bacha rahe.\n\n**Isolation levels:** Read Uncommitted, Read Committed, Repeatable Read, Serializable — level badhne par consistency badhti hai, performance kam hoti hai.\n\n**Diagram:** Refer to Database Testing diagram."
      },
      {
        "question": "What are the common database defects and how do you test for them?",
        "answer": "**Common database defects:**\n\n1. **Duplicate records** — double submit, missing unique constraint. Test: same email se 2 baar register.\n2. **Orphan records** — parent delete hua, child rows reh gaye (FK missing).\n3. **Data truncation** — column length chhoti, naam/address cut ho gaya.\n4. **Wrong data type** — amount string mein, date text mein, decimal precision loss.\n5. **Garbage / stale data** — test data production mein, purane rows delete nahi hue.\n6. **Encoding issue** — Hindi/emoji `????` ho jaana (UTF-8 vs latin1).\n7. **Trigger / procedure bug** — audit row nahi bani, recursion, error swallow.\n8. **Transaction bug** — partial save, rollback missing, deadlock.\n9. **Migration bug** — column rename se data loss, default value galat.\n10. **Slow query** — missing index, N+1 query, full table scan.\n\n**Kaise test karein:** UI se action karo → direct SQL se verify karo → edge cases (max length, Unicode, special chars, 0/negative) try karo → bade data volume par query plan dekho → migration ko staging par chala kar row count aur checksum compare karo.\n\n**Diagram:** Refer to Database Testing diagram."
      }
    ]
  },
];
