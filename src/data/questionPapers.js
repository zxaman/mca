// Question papers — real exam layout, answers hidden until the student taps "Show answer".
// Paper 1 for Software Testing & QA (IT-33) follows the 2020-pattern skeleton seen in the
// 2022–2024 papers: 5 compulsory questions, 50 marks, 2.5 hours, 10 marks per question,
// internal OR options, and sub-parts of 5 marks each.

const stqaPaper1 = {
  id: 'stqa-paper-1',
  number: 1,
  name: 'Paper 1',
  tag: 'Model Paper',
  session: 'Model Paper · 2020 Pattern',
  board: 'S.Y.M.C.A. (Management)',
  semester: 'Semester III',
  pattern: 'Revised 2020 Pattern',
  subjectCode: 'IT-33',
  subjectName: 'Software Testing and Quality Assurance',
  totalMarks: 50,
  time: '2½ Hours',
  totalQuestions: 5,
  instructions: [
    'All questions are compulsory.',
    'Figures to the right indicate full marks.',
    'Draw neat diagrams wherever necessary.',
    'Write answers in your own words; diagrams carry marks.',
  ],
  questions: [
    {
      number: 1,
      marks: 10,
      kind: 'long',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 10,
              question:
                'Write a detailed test plan for an online doctor appointment system where a patient can search doctors by speciality and city, view available slots, book a slot, pay online and receive a confirmation through SMS and email. Your plan should include the test documents to be delivered.',
              answer:
                '**Test plan:** a document that describes scope, approach, resources and schedule of testing — "kya test karenge, kaise karenge, kaun karega, kab karega".\n\n**1. Test plan for the online doctor appointment system**\n\n| Section | Content for this system |\n|---|---|\n| Test objective | Verify that a patient can search, book, pay and receive confirmation correctly and securely |\n| Scope — in | Registration/login, doctor search, slot listing, booking, online payment, SMS + email confirmation, cancellation |\n| Scope — out | Doctor onboarding back-office, hospital billing, insurance claim processing |\n| Test items | Patient web/mobile app, payment gateway sandbox, SMS/email service stub, doctor-slot service, database |\n| Features to test | Search filters (speciality, city, date), slot availability, double-booking prevention, payment success/failure/timeout, cancellation + refund, notification content |\n| Approach | Unit (developers), integration (app ↔ gateway ↔ SMS), system (end-to-end + performance + security), acceptance (UAT with hospital staff) |\n| Levels and types | Functional, regression, performance (500 concurrent bookings), security (payment data, OTP), compatibility (Chrome, Edge, Android, iOS) |\n| Entry criteria | Build deployed on the test environment, test data seeded (20 doctors, 200 slots), payment sandbox ready |\n| Exit criteria | 100% critical test cases pass, no open Sev-1/Sev-2 defect, 90% requirement coverage, defect density under target |\n| Environment | Staging with production-like data volumes, gateway in test mode, real SMS credits |\n| Resources and roles | 1 test lead, 3 testers, 1 automation engineer, doctor-slot API owner, DBA |\n| Schedule | Planning 2 days, test design 4 days, execution 8 days, UAT 3 days, closure 1 day |\n| Risks | Third-party gateway downtime, slot data reset, OTP delivery delay, festival load |\n| Defect management | JIRA workflow, severity + priority matrix, daily triage, retest after fix |\n| Deliverables | Test plan, test case specification, RTM, defect report, test summary report |\n\n**2. Desired test documents**\n1. **Test plan** (this document)\n2. **Test case specification** — ID, objective, precondition, steps, test data, expected result\n3. **Requirement traceability matrix (RTM)** — requirement ↔ test case ↔ defect\n4. **Test data sheet** — patient accounts, doctors, slots, card numbers for the sandbox\n5. **Defect report / log** with severity and status\n6. **Execution log and daily status report**\n7. **Test summary report** — coverage, pass/fail %, open defects, exit criteria verdict\n8. **Regression suite list** and automation scripts\n\n**Exam tip:** scenario ko plan ke andar hi fit karo — search, booking, payment failure, cancellation aur notification, chaar cheezein zaroor likho.\n\n**Diagram:** Refer to the test plan and test cases overview diagram.',
              diagram: 'test-plan-test-cases-overview',
            },
          ],
        },
        {
          label: 'b',
          parts: [
            {
              marks: 10,
              question:
                'Design suitable test cases for the above appointment system — cover login, doctor search, slot booking, payment failure and cancellation.',
              answer:
                '**Test case format:** TC ID · title · priority · precondition · steps · test data · expected result · actual result · status.\n\n| TC ID | Scenario | Test data | Expected result |\n|---|---|---|---|\n| TC-01 | Login with valid credentials | patient@mail.com / Pass@123 | Dashboard opens, session created |\n| TC-02 | Login with wrong password 3 times | wrong password ×3 | Account blocked for 30 min with message |\n| TC-03 | Search doctors by speciality + city | Cardiologist, Pune | Only cardiologists in Pune listed |\n| TC-04 | Search with no matching doctor | Speciality = "Space medicine" | "No doctors found" + suggestion |\n| TC-05 | Slot list for selected date | date = tomorrow | Only free slots shown, booked slots disabled |\n| TC-06 | Book an available slot | Dr. Rao, 10:30 | Booking confirmed, slot becomes unavailable to others |\n| TC-07 | Two patients book the same slot | same slot, parallel session | Second booking rejected with slot-taken message |\n| TC-08 | Payment success | sandbox card 4111… | Appointment CONFIRMED, SMS + email received with ID |\n| TC-09 | Payment failure — insufficient funds | sandbox decline card | Appointment stays PENDING, slot released after timeout |\n| TC-10 | Payment gateway timeout | network delay > 30 s | Retry option shown, no double debit (idempotency key check) |\n| TC-11 | Cancel appointment > 24 h before slot | from TC-08 booking | Cancelled, refund initiated, slot freed, notification sent |\n| TC-12 | Cancel within 2 h of slot | from TC-08 booking | Policy message shown, no refund as per rule |\n| TC-13 | SMS/email content check | from TC-08 | Correct doctor, date, time, fee, appointment ID |\n| TC-14 | Invalid input — past date | yesterday | Date blocked; validation message |\n\n**Techniques used:** equivalence partitioning (valid/invalid dates, amounts), boundary value analysis (slot exactly at booking window, refund at 24 h), decision table (payment success/failure/timeout), state transition (BOOKED → CANCELLED → REFUNDED), error guessing (back button, double click on Pay, duplicate submission).\n\n**Priority:** P1 — login, booking, payment, double booking; P2 — search filters, cancellation; P3 — cosmetics and content.\n\n**Diagram:** Refer to the test plan and test cases overview diagram.',
              diagram: 'test-plan-test-cases-overview',
            },
          ],
        },
      ],
    },
    {
      number: 2,
      marks: 10,
      kind: 'pair',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question: 'What do you mean by software quality assurance? Explain SQA activities.',
              answer:
                '**SQA:** planned and systematic activities that give management confidence that the product and its process conform to requirements, standards and plans. SQA is **preventive** and **process-oriented**.\n\n**SQA activities**\n1. **Quality planning** — quality goals, standards (ISO 9001, IEEE 730), metrics, roles and the SQA plan.\n2. **Execution and monitoring** — reviews, walkthroughs, inspections, testing levels, change control and configuration management during the project.\n3. **Checking and audit** — independent audits to verify that the process was followed and records exist; root-cause analysis of defects.\n4. **Reporting and improvement** — quality metrics to management, corrective and preventive action (CAPA), process improvement.\n\n**Example:** monthly SQU audit finds 3 gaps in test records → CAPA → checklist updated → next audit clean.\n\n**Diagram:** Refer to the SQA activities and building blocks diagram.',
              diagram: 'st1-sqa-blocks',
            },
            {
              marks: 5,
              label: 'b',
              question: 'What are software quality metrics? Explain process quality metrics.',
              answer:
                '**Software quality metrics:** quantitative measures used to evaluate the quality of a product or process — e.g. defect density, defect removal efficiency, test coverage, MTBF, cyclomatic complexity.\n\n**Product metrics** measure the artefact (defects per KLOC, failure rate, response time); **process metrics** measure the way work is done.\n\n**Process quality metrics**\n1. **Defect density per phase** — defects found in requirements, design, coding, testing.\n2. **Defect removal effectiveness (DRE)** — defects removed before delivery ÷ total defects × 100.\n3. **Review effectiveness** — defects found in review ÷ (review + next-phase defects).\n4. **Test coverage** — statement, branch, requirement coverage achieved.\n5. **Rework effort %** — rework hours ÷ total effort.\n6. **Phase containment** — % of defects caught in the phase where they were injected.\n7. **Cost of quality** — prevention + appraisal + failure cost.\n8. **Schedule and effort variance** — planned vs actual.\n\n**Use:** a falling DRE or rising rework signals a process problem, not a tester problem — that is why process metrics drive SQA decisions.\n\n**Diagram:** Refer to the SQA activities and building blocks diagram.',
              diagram: 'st1-sqa-blocks',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question: 'Define SQA. Explain the building blocks of SQA.',
              answer:
                '**SQA (definition):** planned and systematic activities that provide confidence that the software product and its development process meet the specified requirements, standards and plans.\n\n**Building blocks**\n1. **Pre-project components** — quality goals, contract and proposal review, project quality plan.\n2. **Project life-cycle components** — requirements review, design review, code review, testing levels, change control, configuration management.\n3. **Infrastructure components** — SQA procedures, templates, checklists, standards library, tools, training.\n4. **Management components** — project plan, progress control, risk management, cost of quality, metrics review.\n5. **Organisational components** — ISO 9001 / CMMI, dedicated SQA unit, quality steering committee, certified staff.\n6. **Improvement components** — defect and root-cause analysis, lessons learned, standards update.\n\n**Diagram:** Refer to the SQA activities and building blocks diagram.',
              diagram: 'st1-sqa-blocks',
            },
            {
              marks: 5,
              label: 'd',
              question: 'What is software reliability? Explain any two reliability measurement factors.',
              answer:
                '**Software reliability:** the probability that software performs its required functions without failure for a specified time in a specified environment. It is a **time-based** attribute — it is measured as failure rate, not as a count of bugs.\n\n**Two measurement factors**\n1. **MTBF (Mean Time Between Failures)** = total operating time ÷ number of failures. Higher is better; example: 10,000 hours with 5 failures → MTBF = 2,000 hours.\n2. **MTTR (Mean Time To Repair)** — average time to restore service after a failure; lower is better and it drives availability.\n\n**Availability** = MTBF ÷ (MTBF + MTTR). Example: MTBF 2,000 h, MTTR 8 h → availability ≈ 99.6%.\n\n**Other factors:** MTTF (non-repairable), failure intensity (failures per unit time), defect density, reliability growth across releases.\n\n**Diagram:** Refer to the levels of testing diagram.',
              diagram: 'st2-levels-testing',
            },
          ],
        },
      ],
    },
    {
      number: 3,
      marks: 10,
      kind: 'pair',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question: 'Explain various white box testing techniques with an example.',
              answer:
                '**White box (structural) testing:** internal code, control flow and data flow dekh kar test cases design karna.\n\n1. **Statement coverage** — har statement ek baar execute ho.\n2. **Branch / decision coverage** — har if-else ka true aur false dono.\n3. **Condition coverage** — compound condition ke har part ka true/false.\n4. **Path coverage** — independent paths (basis path testing), V(G) se count.\n5. **Loop testing** — 0, 1, typical, maximum, maximum + 1 iterations.\n6. **Data flow testing** — variable ke define (def) aur use (use) pairs, uninitialised use.\n7. **Mutation testing** — code mein chhoti galti daal kar test suite ki strength naapna.\n\n**Example:** `if (a > 0 && b > 0) { x = a + b; } else { x = 0; }`\n- Statement coverage: 2 tests — (1,1) and (-1,1).\n- Branch coverage: same 2 tests (both branches taken).\n- Condition coverage: 3 tests — (1,1), (-1,1), (1,-1) to exercise both condition outcomes.\n\n**Diagram:** Refer to the structural testing diagram.',
              diagram: 'st3-structural',
            },
            {
              marks: 5,
              label: 'b',
              question: 'Explain with a diagram the V model and the W model.',
              answer:
                '**V-model:** left arm = development phases going down, right arm = test levels coming up, each phase paired with a test level — requirements ↔ acceptance, system design ↔ system test, architecture ↔ integration test, detailed design ↔ unit test, coding at the vertex. Test planning starts with the corresponding phase, so acceptance criteria are written along with requirements.\n\n**W-model:** each phase has **two** branches — **verification** (static: review, inspection, static analysis) and **validation** (dynamic: test execution). Two arms of V give the W shape.\n\n| Phase | Verification | Validation |\n|---|---|---|\n| Requirements | requirements review | acceptance test |\n| Design | design inspection | system test |\n| Detailed design | walkthrough | integration test |\n| Code | code review, static analysis | unit test |\n\n**Benefits:** defects shift left, test planning early, static techniques get formal status, traceability improves. **Limit:** heavy for small agile projects.\n\n**Diagram:** Refer to the levels of testing diagram.',
              diagram: 'st2-levels-testing',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question: 'What are levels of testing? Explain any three levels in detail.',
              answer:
                '**Levels of testing:** the stages of the life cycle where testing is organised — unit, integration, system, acceptance (with smoke and regression across them).\n\n1. **Unit testing** — developer verifies a module against detailed design, using white-box techniques: statement, branch, condition, path, loop, data flow. Dependencies replaced by stubs.\n2. **Integration testing** — verifies interfaces and data flow between modules; approaches: big bang, top-down (stubs), bottom-up (drivers), sandwich. Typical defects: interface mismatch, data format, sequence.\n3. **System testing** — the complete product against the SRS in a production-like environment, functional plus non-functional (performance, load, stress, security, usability, compatibility, reliability); done by an independent team.\n4. **Acceptance testing** — customer decides release: alpha, beta, contractual, regulatory, operational.\n\n**Why levels cannot be skipped:** each has a different basis, owner and environment — a requirement gap is invisible at unit level, and an interface bug is invisible in unit tests.\n\n**Diagram:** Refer to the levels of testing diagram.',
              diagram: 'st2-levels-testing',
            },
            {
              marks: 5,
              label: 'd',
              question: 'Differentiate between verification and validation.',
              answer:
                '| Point | Verification | Validation |\n|---|---|---|\n| Question | are we building the product right? | are we building the right product? |\n| Nature | static | dynamic |\n| Methods | review, inspection, walkthrough, static analysis | test execution at all levels |\n| Timing | end of each phase | when a build is ready |\n| Cost of a defect | lower | higher |\n| Performed by | authors, reviewers, QA | testers, independent team, users |\n| Example | SRS review confirms the 30-minute block rule is stated | test confirms the system blocks for exactly 30 minutes |\n\n**Explanation:** verification checks documents and intermediate products against the specification without running code; validation runs the software against the real user need. Both are needed — verification catches requirement and design defects early, validation proves the delivered behaviour.\n\n**Exam line:** verification paper par, validation product par.\n\n**Diagram:** Refer to the validation testing diagram.',
              diagram: 'st4-validation',
            },
          ],
        },
      ],
    },
    {
      number: 4,
      marks: 10,
      kind: 'pair',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question: 'What is static testing? Explain the review process and walkthrough.',
              answer:
                '**Static testing:** examining work products (requirements, design, code, test cases) **without executing** them — by humans (reviews) or by tools (static analysis: linters, SAST, complexity metrics).\n\n**Review process (5 steps)**\n1. **Planning** — what to review, entry criteria, reviewers, checklist.\n2. **Kick-off / overview** — author explains the artefact, distribution of documents.\n3. **Individual preparation** — each reviewer finds issues against the checklist.\n4. **Review meeting** — issues logged, discussed, classified (defect, question, improvement).\n5. **Rework and follow-up** — author fixes, moderator verifies closure, metrics recorded.\n\n**Walkthrough:** informal, author-led review where the author reads the artefact step by step and peers ask questions and suggest changes. No formal roles, no entry/exit criteria, output is comments — cheap and good for early drafts.\n\n**Review types (formal to informal):** informal review, walkthrough, technical review, **Fagan inspection** (most formal: moderator, author, reader, recorder, tester; entry and exit criteria).\n\n**Roles:** moderator, author, reviewer/checker, recorder, reader.\n\n**Diagram:** Refer to the static testing diagram.',
              diagram: 'st3-static',
            },
            {
              marks: 5,
              label: 'b',
              question: 'Explain black box testing techniques.',
              answer:
                '**Black box testing:** input-output behaviour se testing, code ka internal structure dekhe bina — requirement aur specification se test cases bante hain.\n\n1. **Equivalence partitioning** — input domain ko valid/invalid classes mein baanto, har class se ek representative test.\n2. **Boundary value analysis** — kinare par test: `a-1, a, a+1, nominal, b-1, b, b+1`.\n3. **Decision table testing** — combinations of conditions → actions; har rule ka ek test.\n4. **Cause-effect graphing** — causes aur effects ka graph, phir decision table.\n5. **State transition testing** — valid aur invalid transitions, state aur transition coverage.\n6. **Positive and negative testing** — valid input se happy path, invalid input se error handling.\n7. **Requirement based testing** — RTM se har requirement ke test cases.\n8. **Error guessing / exploratory** — experience se probable defects guess karna.\n\n**Example (6-digit OTP):** valid class = exactly 6 digits; invalid = 5 digits, 7 digits, alphabets, blank, leading zeros. BVA: 0, 5, 6, 7, 8 digits.\n\n**Diagram:** Refer to the equivalence partitioning diagram.',
              diagram: 'st3-equivalence',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question: 'What is mutation testing? Explain with an example.',
              answer:
                '**Mutation testing:** test suite ki strength naapne ki technique — code mein chhoti-chhoti deliberate galtiyan (mutants) daal kar dekhte hain ki test cases unhe pakadte hain ya nahi.\n\n**Terms**\n- **Mutant** — ek mutation (galti) wala code version.\n- **Killed** — koi test fail hua, matlab test suite ne mutant pakad liya.\n- **Survived** — saare tests pass ho gaye, matlab test suite weak hai.\n- **Equivalent mutant** — galti behaviour nahi badalti, isliye kill ho hi nahi sakta.\n- **Mutation score** = killed mutants ÷ (total mutants − equivalent) × 100.\n\n**Mutation operators:** relational (`>` → `>=`), arithmetic (`+` → `-`), logical (`&&` → `||`), constant change, statement deletion, negation removal.\n\n**Example:** original `if (age >= 18) allow();`. Mutant `if (age > 18) allow();`. Boundary test age = 18 kill karega; agar tests sirf 25 aur 10 use karte hain to mutant **survive** karega → boundary case missing hai.\n\n**Use and cost:** harness / coverage ki quality prove karta hai, par mutants ki ginti zyada hone se runtime badh jaata hai, isliye selective operators use hote hain.\n\n**Diagram:** Refer to the mutation testing diagram.',
              diagram: 'st3-mutation',
            },
            {
              marks: 5,
              label: 'd',
              question: 'Explain project risk and product risk with examples.',
              answer:
                '**Risk** = probability × impact of something going wrong. Testing ke context mein do bilkul alag tarah ke risks hote hain.\n\n**Project risk** — project ke **management** ko threaten karta hai: schedule, budget, people, technology, suppliers. Test plan ke risk section mein aata hai, aur mitigation se control kiya jaata hai.\n\n| Project risk | Example | Mitigation |\n|---|---|---|\n| Schedule slippage | test environment 1 week late | early environment booking, buffer |\n| Skill gap | only one person knows the automation framework | pair working, documentation |\n| Third-party dependency | payment gateway sandbox unstable | stub / mock, backup vendor |\n| Requirement churn | scope changes every sprint | change control board, impact analysis |\n| Tool / licence failure | load tool licence expires | renew before cycle, open-source fallback |\n\n**Product risk** — product ki **quality** ko threaten karta hai: koi functionality galat kaam kare, security hole ho, performance fail ho, data corrupt ho. Isi product risk ke hisaab se test depth aur priority decide hoti hai (risk-based testing).\n\n| Product risk | Example | Test response |\n|---|---|---|\n| Safety / money | double debit on payment retry | highest priority, idempotency tests |\n| Security | password stored in plain text | penetration + code review |\n| Data integrity | patient record merged with wrong patient | database + ETL tests |\n| Usability | doctor search unusable on mobile | usability + device testing |\n| Performance | booking page 12 s at peak load | load + stress tests |\n\n**Exam line:** project risk "kaam time par hoga ya nahi" ka risk hai, product risk "product galat hoga ya nahi" ka — pehla plan se, doosra testing se handle hota hai.',
              diagram: null,
            },
          ],
        },
      ],
    },
    {
      number: 5,
      marks: 10,
      kind: 'short-notes',
      note: 'Write short notes on any two of the following.',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              question: 'Types of Computer Aided Software Testing (CAST) tools',
              answer:
                '**CAST:** wo software tools jo testing ke kisi step ko automate ya support karte hain — "computer aided software testing".\n\n| Type | Kaam | Examples |\n|---|---|---|\n| Test management | test case, run, coverage, report | TestLink, Zephyr, qTest, Azure Test Plans |\n| Functional / regression (UI) | record-playback aur scripted UI tests | Selenium, Cypress, Playwright, TestCafe |\n| Performance / load | virtual users, latency, throughput | JMeter, k6, Gatling, LoadRunner, Locust |\n| Unit test frameworks | developer-level automated tests | JUnit, TestNG, PyTest, NUnit |\n| API testing | request/response, contract tests | Postman, REST Assured, SoapUI |\n| Static analysis | code quality, SAST, complexity | SonarQube, ESLint, PMD, Coverity |\n| Security testing | vulnerability scanning, pen-test support | OWASP ZAP, Burp Suite, Nessus |\n| Defect tracking | defect life cycle, triage, reports | JIRA, Bugzilla, Mantis |\n| Test data / environment | data generation, service virtualisation | Mockito, WireMock, data generators |\n| Mobile / cloud device farms | real device execution | Appium, BrowserStack, Sauce Labs |\n\n**Benefits:** repeatability, regression speed, coverage measurement, CI/CD integration, cheaper long run. **Limits:** tool cost + maintenance, false confidence, UI flakiness, skilled people needed.\n\n**Diagram:** Refer to the UI automation tools diagram.',
              diagram: 'st5-ui-tools',
            },
          ],
        },
        {
          label: 'b',
          parts: [
            {
              marks: 5,
              question: 'Defect life cycle',
              answer:
                '**Defect life cycle:** defect report ka journey — report hone se close hone tak ke states.\n\n**Normal flow:** **New → Assigned → In Progress → Fixed → Retest → Closed**.\n\n| State | Meaning |\n|---|---|\n| New | tester ne defect log kiya |\n| Assigned | triage ke baad developer ko diya |\n| In Progress | developer root cause par kaam kar raha hai |\n| Fixed | fix ho gaya, retest pending |\n| Retest | tester fix verify kar raha hai |\n| Closed | fix confirmed, defect band |\n| Reopened | fix fail hua, wapas In Progress |\n| Deferred | abhi fix nahi karna (low priority / next release) |\n| Rejected | defect valid nahi — duplicate, not reproducible, working as designed |\n\n**Severity vs priority:** severity = impact (Critical/High/Medium/Low), priority = fix urgency (P1–P4). High severity + low priority possible hai (rare crash in a rarely used report).\n\n**Good defect report:** ID, title, environment, build, steps to reproduce, expected, actual, severity, priority, attachments (screenshot/log).\n\n**Diagram:** Refer to the defect management overview diagram.',
              diagram: 'defect-management-overview',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              question: 'JMeter',
              answer:
                '**Apache JMeter:** open-source Java tool for **load, stress, spike and endurance testing** of web, API, database and messaging services.\n\n**Components**\n1. **Test plan** — root container.\n2. **Thread group** — virtual users, ramp-up period, loop count.\n3. **Samplers** — HTTP request, JDBC request, FTP, JMS, SOAP/REST.\n4. **Config elements** — CSV data set (test data), HTTP cookie manager, header manager, CSV of users.\n5. **Assertions** — response code, body, duration, JSON path.\n6. **Listeners** — aggregate report, summary report, response-time graph (use sparingly — they consume memory).\n7. **Timers** — constant / uniform random think time.\n8. **Controllers** — transaction, loop, if, once-only.\n\n**Workflow:** thread group banao → sampler + assertions add karo → CSV se data feed karo → non-GUI mode (`jmeter -n -t plan.jmx -l result.jtl`) mein chalao → HTML dashboard report generate karo → p95 latency, throughput, error % analyse karo.\n\n**Best practices:** GUI sirf scripting ke liye, execution CLI se; listeners minimum; realistic think time; prod-like data; distributed load for high VUs.\n\n**Diagram:** Refer to the performance testing diagram.',
              diagram: 'st4-performance',
            },
          ],
        },
        {
          label: 'd',
          parts: [
            {
              marks: 5,
              question: 'Error guessing',
              answer:
                '**Error guessing:** experience-based black-box technique jisme tester apne past experience, defect history aur intuition se wo inputs guess karta hai jinpar code fail ho sakta hai — koi formal model nahi.\n\n**Typical guesses**\n- Blank / null / zero / negative values, very long strings.\n- Boundary and off-by-one values, leading zeros, special characters, emoji.\n- Double click on submit, back button, refresh during payment, multiple tabs.\n- Wrong file type / oversized upload, interrupted upload.\n- Date edge cases: 29 Feb, month end, timezone difference.\n- Network loss, slow 3G, session timeout mid-transaction.\n- Concurrency: same record edited by two users.\n\n**Strengths:** fast, cheap, finds the "silly" defects that formal techniques miss, uses team knowledge of past production bugs.\n**Limits:** not repeatable, cannot be measured for coverage, depends completely on tester skill, cannot replace systematic techniques.\n\n**Where it fits:** exploratory testing sessions ke saath, regression ke end mein, aur defect trend dekh kar (jo bug pehle aaya, uske aas-paas dobara test karo).\n\n**Diagram:** Refer to the ad hoc testing diagram.',
              diagram: 'st4-adhoc',
            },
          ],
        },
      ],
    },
  ],
};

export const questionPapers = {
  'software-testing': [stqaPaper1],
};

export const paperCounts = Object.fromEntries(
  Object.entries(questionPapers).map(([subjectId, papers]) => [subjectId, papers.length]),
);
