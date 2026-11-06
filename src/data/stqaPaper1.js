// STQA Paper 1 — Model Paper (Revised 2020 Pattern, IT-33)
//
// Content rules for every paper in this section:
//   1. The question paper is written in ENGLISH ONLY — no Hinglish in questions,
//      options, notes, instructions or answers.
//   2. Every answer has two parts: `explain` (the concept explained in plain
//      English — definitions, the terms used in the question, how to structure
//      the answer) and `answer` (the exam-ready answer for the marks).
//   3. Every diagram carries `diagramCaption`, so the figure is labelled in words
//      and can be enlarged in the reader.

export const stqaPaper1 = {
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
    'Answers must be written in English.',
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
              explain:
                '**What is being asked.** The examiner wants a test plan — the controlling document of a test project — applied to one concrete system. A test plan is not a list of test cases: it states what will be tested, what will not, how, by whom, with which data and environment, when, and how the result will be judged.\n\n**Reference structure (IEEE 829).** Test plan identifier · introduction and scope · test items · features to be tested · features not to be tested · approach · item pass/fail criteria · suspension and resumption criteria · test deliverables · testing tasks · environment needs · responsibilities · staffing and training · schedule · risks and contingencies · approvals.\n\n**Three things students usually miss.** (1) Scope out — the examiner looks for the ability to limit testing; (2) entry and exit criteria — testing needs a definition of done; (3) deliverables — the question explicitly asks for the documents.\n\n**How to score the 10 marks.** A labelled table of plan sections (5 marks), a numbered list of deliverable documents (3 marks), and one paragraph that ties the plan to this system (2 marks).',
              answer:
                '**1. Test plan for the online doctor appointment system**\n\n| Section | Content for this system |\n|---|---|\n| Test objective | Verify that a patient can search, book, pay and receive confirmation correctly, securely and within acceptable response time |\n| Scope — in | Registration and login, doctor search, slot listing, slot booking, online payment, SMS and email confirmation, cancellation |\n| Scope — out | Doctor onboarding back office, hospital billing, insurance claim processing, medical advice content |\n| Test items | Patient web and mobile app, payment gateway sandbox, SMS and email service stubs, doctor-slot service, database |\n| Features to test | Search filters (speciality, city, date), slot availability, double-booking prevention, payment success, failure and timeout, cancellation and refund, notification content |\n| Test approach | Unit testing by developers, integration testing (app, gateway, SMS), system testing with functional and non-functional types, acceptance testing with hospital staff |\n| Types and levels | Functional, regression, performance (500 concurrent bookings), security (payment data, OTP), compatibility (Chrome, Edge, Android, iOS) |\n| Entry criteria | Build deployed on the test environment, test data seeded (20 doctors, 200 slots), payment sandbox ready, smoke test passed |\n| Exit criteria | 100% critical test cases passed, no open Severity-1 or Severity-2 defect, 90% requirement coverage, defect density within target |\n| Environment | Staging server with production-like data volume, payment gateway in test mode, real SMS credits |\n| Resources and roles | One test lead, three testers, one automation engineer, slot-service owner, database administrator |\n| Schedule | Planning 2 days, test design 4 days, execution 8 days, acceptance testing 3 days, closure 1 day |\n| Risks and contingencies | Gateway downtime, slot data reset, OTP delivery delay, festival load — mitigation stated for each |\n| Defect management | JIRA workflow, severity and priority matrix, daily triage, retest after fix |\n| Deliverables | Test plan, test case specification, requirement traceability matrix, defect report, test summary report |\n\n**2. Test documents to be delivered**\n1. **Test plan** — this document, approved before execution starts.\n2. **Test case specification** — test case ID, objective, precondition, steps, test data, expected result.\n3. **Requirement traceability matrix (RTM)** — requirement to test case to defect mapping, used to prove coverage.\n4. **Test data sheet** — patient accounts, doctor master data, free and booked slots, sandbox card numbers.\n5. **Defect report and defect log** — with severity, priority, status and evidence.\n6. **Execution log and daily status report** — planned against executed against passed.\n7. **Test summary report** — coverage, pass percentage, open defects, exit-criteria verdict.\n8. **Regression suite and automation scripts** — reusable for the next release.\n\n**3. Closing statement.** The plan is reviewed by the project manager and the hospital representative, baselined under configuration management, and re-baselined only through change control — because a test plan that changes informally cannot support entry and exit decisions.',
              diagram: 'test-plan-test-cases-overview',
              diagramCaption:
                'Test plan and test case documents: where the test plan sits in the document chain, how a test case is written, and which deliverable is produced at each stage.',
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
              explain:
                '**What is being asked.** Not a test plan, but individual test cases: the smallest unit of testing. A complete test case is written so that another tester can run it without asking a question.\n\n**Anatomy of a test case.** Test case ID · title · priority · precondition · test steps · test data · expected result · actual result · status · remarks.\n\n**Techniques the examiner expects to see applied, not just named.** Equivalence partitioning (valid and invalid classes of input), boundary value analysis (values at the edge of a class), decision table (combinations of conditions that produce different actions), state transition (the life cycle of a booking), and error guessing (double click, back button, refresh during payment).\n\n**Coverage plan for the five named features.** Login: valid, invalid, locked account. Search: matching, non-matching, filter combinations. Booking: available slot, already booked slot, concurrent booking. Payment: success, failure, timeout. Cancellation: outside the window, inside the window, after refund.\n\n**Marking tip.** Marks come from test data and expected results being specific (a real card pattern, a real date rule), and from including negative cases — a table of only happy paths reads like half an answer.',
              answer:
                '**Test case format:** TC ID · title · priority · precondition · steps · test data · expected result · actual result · status.\n\n| TC ID | Scenario | Test data | Expected result |\n|---|---|---|---|\n| TC-01 | Login with valid credentials | patient@mail.com / Pass@123 | Dashboard opens, session created |\n| TC-02 | Login with wrong password three times | wrong password three times | Account blocked for 30 minutes with a message |\n| TC-03 | Search doctors by speciality and city | Cardiologist, Pune | Only cardiologists practising in Pune are listed |\n| TC-04 | Search with no matching doctor | Speciality: space medicine | No doctors found message with a suggestion |\n| TC-05 | Slot list for the selected date | date: tomorrow | Only free slots shown, booked slots disabled |\n| TC-06 | Book an available slot | Dr. Rao, 10:30 | Booking confirmed, slot becomes unavailable to others |\n| TC-07 | Two patients book the same slot | same slot, parallel session | Second booking rejected with a slot-taken message |\n| TC-08 | Payment success | sandbox card 4111 1111 1111 1111 | Appointment confirmed, SMS and email received with appointment ID |\n| TC-09 | Payment failure due to insufficient funds | sandbox decline card | Appointment stays pending, slot released after timeout |\n| TC-10 | Payment gateway timeout | network delay greater than 30 seconds | Retry option shown, no double debit (idempotency key check) |\n| TC-11 | Cancel more than 24 hours before the slot | booking from TC-08 | Cancelled, refund initiated, slot freed, notification sent |\n| TC-12 | Cancel within 2 hours of the slot | booking from TC-08 | Policy message shown, no refund as per rule |\n| TC-13 | SMS and email content check | booking from TC-08 | Correct doctor, date, time, fee and appointment ID |\n| TC-14 | Invalid input: past date | yesterday | Date blocked with a validation message |\n\n**Techniques used**\n- **Equivalence partitioning:** valid and invalid classes for dates, amounts, speciality text.\n- **Boundary value analysis:** slot exactly at the booking window, refund at exactly 24 hours, 0 and 6 digit OTP.\n- **Decision table:** payment success, failure and timeout against three actions (confirm, retry, release slot).\n- **State transition:** BOOKED → CANCELLED → REFUNDED, plus the invalid transition CANCELLED → CONFIRMED.\n- **Error guessing:** browser back button, double click on Pay, duplicate form submission, refresh on the payment page.\n\n**Priority:** P1 — login, booking, payment, double booking. P2 — search filters, cancellation. P3 — cosmetic and content checks.\n\n**Result:** all the five features named in the question have at least one positive case and one negative case, and every defect-prone area (payment, concurrency) has three or more cases.',
              diagram: 'test-plan-test-cases-overview',
              diagramCaption:
                'From test plan to executable test case: the document chain on the left, the anatomy of a single test case on the right.',
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
              explain:
                '**What is being asked.** Two things in one question: a definition of SQA, and a description of the activities that SQA performs through the life cycle.\n\n**Key idea that separates the marks.** QA is preventive and process-oriented; QC and testing are detective and product-oriented. If the answer never draws this line, the examiner cannot see that you understand the word assurance.\n\n**Definitions worth quoting.** IEEE: SQA is a planned and systematic pattern of all actions necessary to provide adequate confidence that an item or product conforms to established technical requirements. In one line: QA builds confidence in the process, QC finds defects in the product.\n\n**How to structure.** Definition (1 mark) · the four activity groups — planning, execution and monitoring, checking and audit, reporting and improvement (3 marks) · one example that shows the loop closing (1 mark).',
              answer:
                '**Software quality assurance (SQA)** is the set of planned and systematic activities that provide management with adequate confidence that the software product and the process used to build it conform to the specified requirements, standards and plans. SQA is preventive and process-oriented: it tries to stop defects from being introduced instead of only detecting them later.\n\n**SQA activities**\n1. **Quality planning** — define quality goals, choose standards (ISO 9001, IEEE 730), decide metrics, allocate roles and write the SQA plan for the project.\n2. **Execution and monitoring** — run reviews, walkthroughs and inspections; ensure the testing levels are performed; enforce change control and configuration management while the project runs.\n3. **Checking and audit** — conduct independent audits to verify that the defined process was actually followed and that records exist; perform root-cause analysis of the defects that escaped.\n4. **Reporting and improvement** — report quality metrics to management, raise corrective and preventive action (CAPA), and update the process so that the same defect class does not return.\n\n**Example:** the monthly audit finds three gaps in test records, a CAPA raises the missing checklist, the checklist is added to the process, and the next audit is clean. This closed loop — plan, execute, check, improve — is what makes the activity assurance rather than inspection.',
              diagram: 'st1-sqa-blocks',
              diagramCaption:
                'SQA activities as a closed loop (plan, execute, check, improve) placed beside the building blocks of an SQA organisation and the QA, QC and testing chain.',
            },
            {
              marks: 5,
              label: 'b',
              question: 'What are software quality metrics? Explain process quality metrics.',
              explain:
                '**What is being asked.** First define what a software quality metric is and how metrics are classified, then explain process quality metrics — the metrics that measure the way work is done, not the product that comes out.\n\n**Terms to define before answering.** A metric is a quantitative measure of a defined attribute; a measure is the number, a metric is the interpretation; an indicator is a metric compared against a threshold. Product metrics describe the artefact (defects per KLOC, failure rate, response time); process metrics describe the activity (defect removal effectiveness, review effectiveness, rework effort).\n\n**Why the division matters.** Product metrics tell you how bad the product is now; process metrics tell you why it keeps happening, which is what a quality assurance function can actually change.\n\n**Structure.** Definition (1 mark) · product vs process in one line each (1 mark) · six to eight process metrics explained (2.5 marks) · a short line on how they are used (0.5 mark).',
              answer:
                '**Software quality metric:** a quantitative measure used to evaluate an attribute of a software product or of the process that produces it — for example defect density, defect removal efficiency, test coverage, mean time between failures and cyclomatic complexity. Metrics convert a quality judgement into a number that can be compared with a threshold, a target or a previous release.\n\n**Product metrics** measure the artefact — defects per KLOC, failure rate, response time, usability score. **Process metrics** measure how the work is performed — how early defects are caught, how effective reviews are, how much rework is needed.\n\n**Process quality metrics**\n1. **Defect density per phase** — defects found in requirements, design, coding and testing, normalised per phase size.\n2. **Defect removal effectiveness (DRE)** — defects removed before delivery divided by total defects multiplied by 100.\n3. **Review effectiveness** — defects found in review divided by review defects plus next-phase defects.\n4. **Test coverage achieved** — statement, branch and requirement coverage actually reached against the planned coverage.\n5. **Rework effort percentage** — rework hours divided by total effort; a rising value signals an unstable process.\n6. **Phase containment** — percentage of defects caught in the phase in which they were injected.\n7. **Cost of quality** — prevention cost plus appraisal cost plus failure cost.\n8. **Schedule and effort variance** — planned against actual, which shows whether the process is predictable.\n\n**How they are used:** a falling DRE, a rising rework percentage or poor phase containment points to a process problem — weak reviews, unstable requirements or inadequate unit testing. Process metrics therefore drive SQA decisions, while product metrics only report the current state of the product.',
              diagram: 'quality-metrics-overview',
              diagramCaption:
                'Quality metrics tree: product metrics on one branch, process metrics on the other, with the formulas used for defect density, defect removal effectiveness and cost of quality.',
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
              explain:
                '**What is being asked.** A definition followed by the building blocks — the structural components that together make SQA work in an organisation. Do not answer with the activity list from the previous question; the examiner is checking whether you know SQA as a structure, not only as a sequence of tasks.\n\n**Reading of "building blocks". ** SQA works only when six layers exist: components that run before the project (goals, contract review, quality plan), components inside the life cycle (reviews, testing, change control), the infrastructure (procedures, templates, tools, training), management commitment (plan, control, risk, cost of quality), the organisational layer (ISO 9001, CMMI, a dedicated SQA unit) and the improvement layer (defect analysis, lessons learned).\n\n**One line to open with.** A block missing means the system leaks: without infrastructure, reviews become informal; without management support, metrics are collected but never acted upon.\n\n**Structure.** Definition (1 mark) · six blocks with one line each (3.5 marks) · closing line on interdependence (0.5 mark).',
              answer:
                '**SQA (definition):** software quality assurance is the planned and systematic set of activities that provide confidence that the software product and the development process meet the specified requirements, standards and plans.\n\n**Building blocks of SQA**\n1. **Pre-project components** — quality goals for the project, contract and proposal review, and the project quality plan written before work starts.\n2. **Project life-cycle components** — requirements review, design review, code review, all testing levels, change control and configuration management during the project.\n3. **Infrastructure components** — SQA procedures, document templates, review checklists, a standards library, testing tools and staff training.\n4. **Management components** — project plan, progress control, risk management, cost-of-quality tracking and periodic metrics review.\n5. **Organisational components** — ISO 9001 or CMMI certification, a dedicated SQA unit independent of the project, a quality steering committee and certified staff.\n6. **Improvement components** — defect and root-cause analysis, lessons-learned sessions, and controlled updates to standards and checklists.\n\n**Interdependence:** the blocks are not optional extras. Without infrastructure, reviews become ad hoc; without management commitment, metrics are collected but no action follows; without the improvement block, the same defect classes recur in every release.',
              diagram: 'st1-sqa-blocks',
              diagramCaption:
                'Building blocks of SQA: pre-project, life-cycle, infrastructure, management, organisational and improvement components, shown with the QA, QC and testing chain.',
            },
            {
              marks: 5,
              label: 'd',
              question: 'What is software reliability? Explain any two reliability measurement factors.',
              explain:
                '**What is being asked.** Define software reliability — a probability over time, not a count of bugs — and then explain two factors used to measure it.\n\n**The definition that earns full marks.** Reliability is the probability that software performs its required functions without failure for a specified period of time in a specified environment. Hardware reliability degrades with wear; software reliability does not wear out — it changes only when the software or its environment changes.\n\n**The measurable factors.** MTBF (mean time between failures) = total operating time divided by number of failures. MTTR (mean time to repair) = average repair time; MTTF (mean time to failure) for non-repairable systems. From these, availability = MTBF / (MTBF + MTTR). Failure intensity is failures per unit time, used in reliability growth models.\n\n**Structure.** Definition with the three qualifiers — probability, time, environment (2 marks) · MTBF with a formula and a worked number (1.5 marks) · MTTR and availability with the formula (1.5 marks).',
              answer:
                '**Software reliability:** the probability that a software system performs its required functions without failure for a specified period of time in a specified environment. It is a time-based attribute, so it is expressed as a failure rate and not as the number of remaining defects.\n\n**Measurement factor 1 — MTBF (Mean Time Between Failures)**\nMTBF = total operating time ÷ number of failures.\nExample: a service ran for 10,000 hours and failed 5 times, so MTBF = 10,000 ÷ 5 = 2,000 hours. A higher MTBF means higher reliability.\n\n**Measurement factor 2 — MTTR (Mean Time To Repair)**\nMTTR is the average time needed to restore service after a failure — detection, diagnosis, fix and deployment. A lower MTTR means better maintainability and better availability.\n\n**Availability derived from both:** availability = MTBF ÷ (MTBF + MTTR). With MTBF = 2,000 hours and MTTR = 8 hours, availability = 2000 ÷ 2008 ≈ 99.6%, which is about 3.5 hours of downtime in a month.\n\n**Other factors used in reliability engineering:** MTTF for non-repairable components, failure intensity (failures per unit time) in reliability-growth models, defect density as a static indicator, and the reliability trend across successive releases.',
              diagram: 'availability-metrics-overview',
              diagramCaption:
                'Availability metrics: how MTBF, MTTR and MTTF combine into availability, with the worked example of 2,000-hour MTBF against 8-hour MTTR giving 99.6%.',
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
              explain:
                '**What is being asked.** White box (structural, glass box) testing derives test cases from the internal structure of the code — statements, decisions, conditions, paths, loops, data definitions and uses — instead of from the specification.\n\n**The techniques and the coverage each one demands.** Statement coverage: every statement executed once. Decision (branch) coverage: every decision takes both true and false. Condition coverage: every atomic condition takes both values. Decision-condition coverage: both, together. Path coverage: every independent path, counted by cyclomatic complexity V(G) = E − N + 2. Loop testing: zero, one, typical, maximum and maximum-plus-one iterations. Data flow testing: every definition reaches a use (def-use pairs, uninitialised use). Mutation testing: seed a small fault and check whether the suite kills it.\n\n**Why the order matters.** Each technique subsumes part of the previous one; a good answer states the strength (decision coverage subsumes statement coverage) instead of listing names only.\n\n**Structure.** Definition (1 mark) · six techniques with one line each (2.5 marks) · one worked code fragment showing the tests each technique needs (1.5 marks).',
              answer:
                '**White box (structural) testing** designs test cases from the internal structure of the program — its control flow, data flow and conditions — so it is performed mainly at unit level by the developer.\n\n1. **Statement coverage** — every executable statement is executed at least once.\n2. **Decision or branch coverage** — every decision takes the true outcome and the false outcome at least once; it subsumes statement coverage.\n3. **Condition coverage** — every atomic condition inside a compound decision takes both true and false values.\n4. **Path coverage (basis path testing)** — every independent path is executed; the number of independent paths equals the cyclomatic complexity V(G) = E − N + 2.\n5. **Loop testing** — zero, one, typical, maximum and maximum-plus-one iterations, plus nested and concatenated loop cases.\n6. **Data flow testing** — for every variable, each definition reaches at least one use; uninitialised and dead definitions are detected.\n7. **Mutation testing** — a small deliberate fault is injected and the suite must fail; surviving mutants show missing test cases.\n\n**Worked example**\nif (a > 0 && b > 0) { x = a + b; } else { x = 0; }\n\n| Technique | Tests required | Result |\n|---|---|---|\n| Statement coverage | (1, 1) and (−1, 1) | both the assignment and the else branch execute |\n| Decision coverage | (1, 1) and (−1, 1) | decision true once, false once |\n| Condition coverage | (1, 1), (−1, 1), (1, −1) | each atomic condition takes both values |\n| Path coverage | (1, 1), (−1, 1), (1, −1), (−1, −1) | V(G) = 2 decisions + 1 = 3 independent paths plus the compound-condition combinations |\n\n**Conclusion:** white box techniques prove that the code is thoroughly executed, but they cannot reveal a missing requirement, because the specification is not the source of the test cases.',
              diagram: 'st3-structural',
              diagramCaption:
                'Structural (white box) testing: the coverage ladder from statement to path and data flow coverage, with the control-flow graph and the JUnit-style tools used at unit level.',
            },
          ],
        },
        {
          label: 'b',
          parts: [
            {
              marks: 5,
              label: 'b',
              question: 'Explain with a diagram the V model and the W model.',
              explain:
                '**What is being asked.** Two life-cycle models that place testing beside development instead of after it — and a diagram is compulsory.\n\n**V model in one sentence.** The left arm descends through requirements, system design, architecture and detailed design to coding at the vertex, and the right arm climbs back through unit, integration, system and acceptance testing, so that every development phase has a matching test level.\n\n**W model in one sentence.** Every phase of the V gets two branches — verification (static: review, inspection, static analysis) and validation (dynamic: test execution) — which gives the shape of a W and makes static testing a first-class activity.\n\n**The pairing table is what carries the marks:** requirements with acceptance testing, system design with system testing, architecture with integration testing, detailed design with unit testing.\n\n**Structure.** V model with pairs (2 marks) · W model with verification and validation per phase (2 marks) · benefit and limitation (1 mark).',
              answer:
                '**V model.** Development phases descend on the left and test levels ascend on the right, and each development phase is paired with the test level that verifies it:\n\n| Development phase (left arm) | Matching test level (right arm) |\n|---|---|\n| Requirements analysis | Acceptance testing |\n| System design | System testing |\n| Architectural design | Integration testing |\n| Detailed design | Unit testing |\n| Coding (vertex) | — |\n\nTest planning starts with the phase, not after coding: acceptance criteria are written along with the requirements, so a defect in a requirement is caught while the requirement is still a document.\n\n**W model.** Each phase is split into two branches — **verification**, which is static (review, walkthrough, inspection, static analysis), and **validation**, which is dynamic (executing tests).\n\n| Phase | Verification branch (static) | Validation branch (dynamic) |\n|---|---|---|\n| Requirements | requirements review | acceptance testing |\n| Design | design inspection | system testing |\n| Detailed design | walkthrough | integration testing |\n| Code | code review, static analysis | unit testing |\n\n**Benefits:** defects shift left and become cheaper, test planning starts early, static techniques get formal status, and traceability between phase and test is explicit. **Limitation:** both models are document-heavy and rigid, which makes them a poor fit for short agile iterations unless the pairing is applied informally.',
              diagram: 'st2-levels-testing',
              diagramCaption:
                'The V model pairs each development phase with a test level; the W model adds a static verification branch beside every phase — the diagram also lists who performs each level and on what basis.',
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
              explain:
                '**What is being asked.** The stages at which testing is organised in the life cycle, followed by a detailed treatment of any three. The levels are defined by three things — the basis of the test cases, the owner who runs them, and the environment in which they run.\n\n**The levels.** Unit (basis: detailed design and code; owner: developer; environment: developer machine with stubs), integration (basis: architecture; owner: developer or test engineer; environment: integration build with drivers and stubs), system (basis: SRS; owner: independent test team; environment: production-like staging), acceptance (basis: user needs and contract; owner: customer; environment: user or UAT environment). Smoke and regression testing are not levels — they are types applied across levels.\n\n**Why levels cannot be skipped.** Each level has a different basis: a requirement gap is invisible to unit tests, and an interface mismatch between two correct modules is invisible to both unit and system tests.\n\n**Structure.** Definition and list of four levels (1.5 marks) · three levels explained with basis, owner, techniques and typical defects (3 marks) · one line on why skipping is unsafe (0.5 mark).',
              answer:
                '**Levels of testing** are the stages of the software life cycle at which testing is organised — unit, integration, system and acceptance testing — each with its own basis for test design, its own owner and its own environment.\n\n1. **Unit testing** — the developer verifies an individual module against its detailed design, using white box techniques: statement, branch, condition, path, loop and data flow coverage. Dependencies are replaced by stubs and drivers, and automated frameworks such as JUnit or pytest are used. Typical defects: wrong logic, incorrect boundary handling, uninitialised data, exception paths not handled.\n2. **Integration testing** — verifies that modules work together: interfaces, data formats, call sequences and shared resources. Approaches are big bang, top-down (stubs), bottom-up (drivers) and sandwich. Typical defects: parameter mismatch, wrong data type at the interface, one module assuming another has initialised a resource, wrong sequence of calls.\n3. **System testing** — the complete, integrated product is tested against the SRS in a production-like environment by an independent team. It covers functional behaviour plus non-functional types: performance, load, stress, security, usability, compatibility, reliability and recovery. Typical defects: end-to-end workflow breakage, performance below target, security exposure, environment-specific failures.\n4. **Acceptance testing** — the customer decides whether the system may be released: alpha testing at the developer site, beta testing at the customer site, plus contractual, regulatory and operational acceptance.\n\n**Why levels cannot be merged:** a missing requirement is invisible to unit tests, and an interface defect between two individually correct modules is invisible to unit and system tests alike — each level has a different basis and therefore a different blind spot.',
              diagram: 'st2-levels-testing',
              diagramCaption:
                'Levels of testing mapped onto the V model: unit, integration, system and acceptance with the matching development phase, whose owner performs it, and the basis of the test cases at each level.',
            },
            {
              marks: 5,
              label: 'd',
              question: 'Differentiate between verification and validation.',
              explain:
                '**What is being asked.** A comparison, in table form, of two activities that are often confused. Verification asks are we building the product right? — it checks work products against their specification without running them. Validation asks are we building the right product? — it runs the software against the real user need.\n\n**Points of difference to include.** The question asked, static versus dynamic nature, the methods used, when each is performed, who performs it, and whether a defect found at that stage is cheap or expensive.\n\n**The killer example to close with.** A rule that a slot is blocked for 30 minutes: the SRS review (verification) confirms the rule is stated correctly; the executed test (validation) confirms the system actually blocks for exactly 30 minutes. Both are required, because verification against a wrong specification still gives you a wrong product.',
              answer:
                '| Point | Verification | Validation |\n|---|---|---|\n| Question asked | Are we building the product right? | Are we building the right product? |\n| Nature | Static — no execution | Dynamic — code is executed |\n| Methods | Review, walkthrough, inspection, static analysis | All levels of test execution |\n| When | At the end of every phase, on that phase output | When a build is ready and at acceptance |\n| Basis | Specification, design and standards | User needs and actual requirements |\n| Performed by | Authors and reviewers (QA) | Testers, an independent team and users |\n| Cost of a defect | Low — found in a document | Higher — found in a build or in production |\n| Example | The SRS review confirms the 30-minute slot-block rule is stated correctly | The executed test confirms the system blocks the slot for exactly 30 minutes |\n\n**Explanation:** verification checks the documents and intermediate products against the specification without running code, so it can start in the requirements phase; validation runs the software against the real need, so it needs a working build. Verification catches requirement and design defects early, while validation proves the delivered behaviour.\n\n**Conclusion:** the two are complementary. Verification without validation produces documents that agree with each other and a product nobody wants; validation without verification is expensive, because every defect has to be found by running the whole system.',
              diagram: 'st4-validation',
              diagramCaption:
                'Verification and validation side by side: the question each one asks, the phase in which each is performed, the cost of a defect found there, and the standard example of the 30-minute slot-block rule.',
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
              explain:
                '**What is being asked.** Three linked items: static testing as a category, the formal review process step by step, and the walkthrough as one review type.\n\n**Static testing** examines requirements, design, code and test cases without executing them — either by people (reviews) or by tools (static analysis: linters, SAST, complexity and duplication metrics). It can start in the requirements phase, which is why it is the cheapest way to find defects.\n\n**The review process** has five steps: planning (entry criteria, checklist, reviewers), kick-off (author presents the artefact), individual preparation (each reviewer works the checklist), review meeting (issues logged and classified), and rework with follow-up (author fixes, moderator verifies closure, metrics recorded).\n\n**The walkthrough** is the informal, author-led type: the author reads the artefact line by line, peers ask questions and suggest changes; there are no formal roles and no entry or exit criteria — the output is a list of comments. Contrast it with the **Fagan inspection**, which is the most formal type: moderator, author, reader, recorder and tester, with entry and exit criteria.\n\n**Structure.** Definition (1 mark) · five process steps (2 marks) · walkthrough explained with its purpose (1.5 marks) · one line comparing it with inspection (0.5 mark).',
              answer:
                '**Static testing** is the examination of work products — requirements, design, code and test cases — **without executing** them, either by people (reviews, walkthroughs, inspections) or by tools (linters, static application security testing, complexity and duplication analysis). Because it works on documents, it starts in the requirements phase and finds defects at the cheapest possible point.\n\n**Review process (five steps)**\n1. **Planning** — decide what will be reviewed, set entry criteria, select reviewers and distribute the checklist.\n2. **Kick-off / overview** — the author explains the artefact, its purpose and the areas of concern; documents are distributed.\n3. **Individual preparation** — each reviewer studies the artefact against the checklist and records issues privately before the meeting.\n4. **Review meeting** — issues are consolidated, discussed and classified as defect, question or improvement, and assigned to an owner.\n5. **Rework and follow-up** — the author fixes the artefact, the moderator verifies that every issue is closed, and review metrics are recorded.\n\n**Walkthrough:** an informal, author-led review in which the author walks the reviewers through the artefact step by step, explaining the logic, while peers ask questions and suggest changes. It has no formal roles, no entry or exit criteria and no recorded defect metrics; its output is a list of comments. It is cheap, needs no training and suits early drafts, design discussions and knowledge sharing across the team.\n\n**Contrast with inspection:** a Fagan inspection is the most formal review type — moderator, author, reader, recorder and tester, with entry criteria, preparation, a structured meeting and exit criteria — and it is used where a defect has severe consequences.\n\n**Roles across review types:** moderator, author, reviewer or checker, recorder and reader.',
              diagram: 'st3-static',
              diagramCaption:
                'Static testing: the review process from planning to follow-up, the review types ordered from informal review to Fagan inspection, and the roles played in a formal review.',
            },
            {
              marks: 5,
              label: 'b',
              question: 'Explain black box testing techniques.',
              explain:
                '**What is being asked.** Techniques that derive test cases from the specification and the input-output behaviour only, without looking at the code — which is why they are also called specification-based or behavioural techniques.\n\n**The techniques the examiner expects.** Equivalence partitioning (divide the input domain into classes that behave alike and test one value per class), boundary value analysis (test the edges of each class where most defects live), decision table testing (every combination of conditions and its action), cause-effect graphing (causes and effects as a graph, then a decision table), state transition testing (valid and invalid transitions between states), positive and negative testing, requirement-based testing with an RTM, and error guessing.\n\n**The worked example that earns the marks.** A 6-digit OTP: valid class is exactly six digits; invalid classes are five digits, seven digits, alphabetic characters and blank; boundary values are 0, 5, 6, 7 and 8 digits.\n\n**Structure.** Definition (1 mark) · six to eight techniques with one line each (2.5 marks) · worked example (1 mark) · one line on advantage and limitation (0.5 mark).',
              answer:
                '**Black box testing** designs test cases from the requirements and from the input-output behaviour of the system, without examining the internal code. It is therefore also called specification-based, behavioural or functional testing, and it applies at every level from module interface to acceptance testing.\n\n1. **Equivalence partitioning** — divide the input domain into valid and invalid classes that behave identically, then test one representative value from each class instead of every value.\n2. **Boundary value analysis** — test the edges of each class, because off-by-one defects concentrate there: a−1, a, a+1, nominal, b−1, b, b+1.\n3. **Decision table testing** — list all combinations of conditions and the action each combination produces; every rule of the table becomes one test case.\n4. **Cause-effect graphing** — draw causes and effects as a graph, convert it into a decision table and derive the tests, which is useful for combinations of business rules.\n5. **State transition testing** — model the system as states and events; test every valid transition and the important invalid ones.\n6. **Positive and negative testing** — valid inputs prove the happy path, invalid inputs prove that error handling works.\n7. **Requirement-based testing** — every requirement is traced to at least one test case through the RTM, which is how coverage is proven.\n8. **Error guessing and exploratory testing** — the tester uses experience and defect history to attack the areas where code probably fails.\n\n**Worked example — 6-digit OTP**\n- Valid class: exactly six numeric digits.\n- Invalid classes: five digits, seven digits, alphabetic characters, blank field, leading zeros.\n- Boundary values: 0, 5, 6, 7 and 8 digits entered.\n\n**Advantage and limitation:** black box testing verifies what the user actually needs and works from the specification alone, but without structural coverage it can leave parts of the code unexecuted — which is why it is combined with white box testing.',
              diagram: 'st3-equivalence',
              diagramCaption:
                'Equivalence partitioning with boundary value analysis: how the input domain is divided into classes, where the boundaries are tested, and why the technique is combined with BVA.',
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
              explain:
                '**What is being asked.** Mutation testing measures the strength of a test suite, not the correctness of the code. Small deliberate faults — mutations — are injected into the program; the suite is run; if a test fails, the mutant is **killed** (good), and if every test passes, the mutant **survived** (the suite has a gap).\n\n**Terms that must be defined.** Mutant, killed, survived, equivalent mutant (behaviour is unchanged, so it cannot be killed) and mutation score = killed ÷ (total − equivalent) × 100.\n\n**Mutation operators.** Relational (> becomes >=), arithmetic (+ becomes −), logical (&& becomes ||), constant replacement, statement deletion, negation removal.\n\n**The example that shows understanding.** Original: if (age >= 18) allow(). Mutant: if (age > 18) allow(). The test with age = 18 kills the mutant; a suite that tests only 25 and 10 lets it survive, proving that the boundary case is missing.\n\n**Structure.** Definition and purpose (1.5 marks) · five terms (1.5 marks) · operators (1 mark) · worked example with the surviving-mutant conclusion (1 mark).',
              answer:
                '**Mutation testing** is a white box technique that measures the strength of a test suite. Small, deliberate faults called mutations are inserted into the source code, the test suite is executed against each modified version, and the ability of the suite to detect the fault is measured.\n\n**Terms**\n- **Mutant** — one version of the program containing exactly one mutation.\n- **Killed** — at least one test fails on the mutant, so the suite detected the fault.\n- **Survived** — all tests pass on the mutant, so the suite is too weak at that point.\n- **Equivalent mutant** — the mutation does not change behaviour, so it can never be killed and is excluded from the score.\n- **Mutation score** = killed mutants ÷ (total mutants − equivalent mutants) × 100.\n\n**Mutation operators:** relational (> to >=), arithmetic (+ to −), logical (&& to ||), constant replacement (0 to 1), statement deletion, and negation removal.\n\n**Example**\nOriginal: if (age >= 18) allow();\nMutant: if (age > 18) allow();\n\nA test with age = 18 fails on the mutant, so the mutant is killed. If the suite only tests age = 25 and age = 10, every test passes on the mutant and it survives — which proves that the boundary value 18 is missing from the suite. Adding one boundary test kills the mutant and raises the mutation score.\n\n**Use and cost:** the technique proves the quality of the suite and guides which tests to add, but the number of mutants is large, so the full test suite runs once per mutant. Practical projects use selective operators, mutate only changed code, and run mutation testing in a nightly build.\n\n**Conclusion:** mutation testing answers a question that coverage cannot — coverage says which code was executed, mutation testing says whether the tests would have noticed a fault in that code.',
              diagram: 'st3-mutation',
              diagramCaption:
                'Mutation testing cycle: create a mutant, run the suite, classify the result as killed or survived, and compute the mutation score — with an equivalent mutant shown separately.',
            },
            {
              marks: 5,
              label: 'd',
              question: 'Explain project risk and product risk with examples.',
              explain:
                '**What is being asked.** Two different classes of risk, made concrete with examples and with the action each one demands. Risk itself is probability multiplied by impact.\n\n**Project risk** threatens the management of the project — schedule, budget, people, technology and suppliers. It belongs in the risk section of the test plan and is controlled by mitigation: buffers, cross-training, early environment booking, vendor backups.\n\n**Product risk** threatens the quality of the product — a feature may work incorrectly, a security hole may exist, performance may fail, or data may be corrupted. Product risk is what drives **risk-based testing**: the depth and priority of testing is decided by how likely and how damaging a failure would be.\n\n**The distinction in one line.** Project risk asks whether the work will finish on time and within budget; product risk asks whether the finished product will behave correctly. The first is handled by planning, the second by testing.\n\n**Structure.** Definition of risk (0.5 mark) · project risk with a table of examples and mitigations (2 marks) · product risk with a table of examples and test responses (2 marks) · closing comparison (0.5 mark).',
              answer:
                '**Risk** is the probability of an event multiplied by the impact if it occurs. In testing, two completely different classes of risk are managed.\n\n**Project risk** threatens the management of the project — schedule, budget, staffing, technology and suppliers. It appears in the risk section of the test plan and is controlled by mitigation.\n\n| Project risk | Example | Mitigation |\n|---|---|---|\n| Schedule slippage | test environment delivered one week late | book the environment early, keep a schedule buffer |\n| Skill gap | only one person knows the automation framework | pair working, documentation, cross-training |\n| Third-party dependency | payment gateway sandbox unstable | service virtualisation or stub, backup vendor |\n| Requirement churn | scope changes every sprint | change control board, impact analysis before acceptance |\n| Tool or licence failure | load-testing licence expires mid-cycle | renew before the cycle, keep an open-source fallback |\n\n**Product risk** threatens the quality of the product — a function may produce a wrong result, a security hole may exist, performance may fall short, or data may be corrupted. Product risk is the basis of risk-based testing: higher risk means deeper, earlier and more frequent testing.\n\n| Product risk | Example | Test response |\n|---|---|---|\n| Safety or money | double debit when a payment is retried | highest priority, idempotency and concurrency tests |\n| Security | passwords stored in plain text | code review, penetration testing, SAST |\n| Data integrity | a patient record merged with the wrong patient | database and data-migration tests |\n| Usability | doctor search unusable on a phone | usability testing on real devices |\n| Performance | booking page takes 12 seconds at peak load | load and stress testing at expected and beyond-expected load |\n\n**Comparison:** project risk asks whether the work will finish on time and within budget and is handled by planning; product risk asks whether the delivered product will behave correctly and is handled by testing. A test plan must contain both, because a perfectly tested product delivered after the release date fails just as commercially as an on-time product with a payment defect.',
              diagram: 'fmea-overview',
              diagramCaption:
                'FMEA — the standard risk-ranking tool: risk priority number as severity times occurrence times detection, the method used to rank the project and product risks listed in the answer.',
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
              explain:
                '**What is being asked.** A short note on the categories of tools that support or automate testing — CAST stands for Computer Aided Software Testing. The marks come from covering the categories with a purpose and one or two real tools each, not from describing a single tool in depth.\n\n**The categories to cover.** Test management, functional and regression (UI automation), performance and load, unit-test frameworks, API testing, static analysis, security testing, defect tracking, test data and service virtualisation, and mobile or cloud device farms.\n\n**Balance the note.** Benefits (repeatability, regression speed, coverage measurement, CI integration, lower long-run cost) against limits (licence and maintenance cost, false confidence, flaky UI tests, need for skilled people).\n\n**Structure.** Definition of CAST (1 mark) · a table of categories with purpose and tools (3 marks) · benefits and limitations (1 mark).',
              answer:
                '**CAST (Computer Aided Software Testing):** software tools that support or automate one or more testing activities — planning, design, execution, analysis and reporting — so that testing becomes faster, repeatable and measurable.\n\n| Category | Purpose | Example tools |\n|---|---|---|\n| Test management | test cases, runs, coverage, reporting | TestLink, Zephyr, qTest, Azure Test Plans |\n| Functional and regression (UI) | record-replay and scripted UI tests | Selenium, Cypress, Playwright, TestCafe |\n| Performance and load | virtual users, latency, throughput | JMeter, k6, Gatling, LoadRunner, Locust |\n| Unit-test frameworks | developer-level automated tests | JUnit, TestNG, pytest, NUnit |\n| API testing | request-response and contract tests | Postman, REST Assured, SoapUI |\n| Static analysis | code quality, security, complexity | SonarQube, ESLint, PMD, Coverity |\n| Security testing | vulnerability scanning, penetration support | OWASP ZAP, Burp Suite, Nessus |\n| Defect tracking | defect life cycle, triage, reports | JIRA, Bugzilla, Mantis |\n| Test data and virtualisation | data generation, service mocking | Mockito, WireMock, data generators |\n| Mobile and cloud device farms | execution on real devices | Appium, BrowserStack, Sauce Labs |\n\n**Benefits:** repeatability, fast regression cycles, measurable coverage, easy integration into CI/CD, and lower cost per run after the initial investment.\n\n**Limitations:** licence and maintenance cost, false confidence when automation is used for unsuitable cases, flakiness in UI tests, and the need for trained people to build and maintain the suites.\n\n**Conclusion:** tools multiply the effect of a good test process, but they cannot create one — selecting a tool begins with the requirement, the technology stack and the skill of the team.',
              diagram: 'st5-ui-tools',
              diagramCaption:
                'UI automation tools compared: Cypress, TestCafe and Protractor by architecture, language, browser support and the criteria for choosing among them.',
            },
          ],
        },
        {
          label: 'b',
          parts: [
            {
              marks: 5,
              question: 'Defect life cycle',
              explain:
                '**What is being asked.** The journey of a defect report from the moment it is logged to the moment it is closed, including the states that do not lead to a fix.\n\n**The normal flow.** New → Assigned → In Progress → Fixed → Retest → Closed.\n\n**The branches that must not be forgotten.** Reopened (the fix failed), Deferred (not fixing now), Rejected (not a valid defect — duplicate, not reproducible, working as designed). A note on the cycle that omits these three loses marks.\n\n**Two more points that separate a good note.** Severity versus priority (impact versus urgency — high severity with low priority is possible), and the contents of a good defect report: ID, title, environment, build, steps to reproduce, expected, actual, severity, priority and evidence.\n\n**Structure.** Definition and state list (2 marks) · state table (2 marks) · severity and priority, plus defect report contents (1 mark).',
              answer:
                '**Defect life cycle:** the sequence of states through which a defect passes from being reported to being closed, tracked in the defect management tool and governed by the team defect workflow.\n\n**Normal flow:** New → Assigned → In Progress → Fixed → Retest → Closed.\n\n| State | Meaning |\n|---|---|\n| New | the tester has logged the defect with evidence |\n| Assigned | after triage, the defect is assigned to a developer |\n| In Progress | the developer is analysing the root cause and fixing it |\n| Fixed | the fix is committed to a build and retesting is pending |\n| Retest | the tester verifies the fix in the new build |\n| Closed | the fix is confirmed and the defect is closed |\n| Reopened | the fix failed, so the defect returns to In Progress |\n| Deferred | accepted as valid but not fixed now — low priority or next release |\n| Rejected | not a valid defect — duplicate, not reproducible, or working as designed |\n\n**Severity and priority:** severity is the impact on the system (Critical, High, Medium, Low) and priority is the urgency of the fix (P1 to P4). High severity with low priority is possible — for example a crash in a report used once a year.\n\n**Contents of a good defect report:** ID, title, environment and build number, steps to reproduce, expected result, actual result, severity, priority, and evidence such as a screenshot, log file or video.',
              diagram: 'defect-management-overview',
              diagramCaption:
                'Defect management overview: the full defect life cycle with reopened, deferred and rejected branches, the severity and priority matrix, and the fields of a defect report.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              question: 'JMeter',
              explain:
                '**What is being asked.** A short note on Apache JMeter — what it is, the components a test plan is built from, how a run is performed and what is measured.\n\n**The essentials.** Open-source Java tool for load, stress, spike and endurance testing of web, API, database and messaging services. A test plan is built from a thread group (virtual users, ramp-up, loop count), samplers, config elements, assertions, timers, controllers and listeners.\n\n**The professional details that earn the last marks.** Run in non-GUI mode for real load (jmeter -n -t plan.jmx -l result.jtl), keep listeners to a minimum because they consume memory, generate the HTML dashboard report, and analyse p90 or p95 latency, throughput and error percentage rather than the average.\n\n**Structure.** Definition and scope (1 mark) · components (2.5 marks) · workflow (1 mark) · best practices (0.5 mark).',
              answer:
                '**Apache JMeter** is an open-source, Java-based tool for load, stress, spike and endurance testing of web applications, REST and SOAP APIs, databases, FTP servers and messaging systems. It simulates many virtual users, records response times, and reports throughput and error percentage.\n\n**Components of a test plan**\n1. **Test plan** — the root container that holds everything and defines user-defined variables.\n2. **Thread group** — number of virtual users, ramp-up period and loop count; the unit of load.\n3. **Samplers** — HTTP request, JDBC request, FTP request, JMS and SOAP/REST samplers that send the actual traffic.\n4. **Config elements** — CSV data set for test data, HTTP cookie manager, header manager, cache manager.\n5. **Assertions** — response code, response body, response duration and JSON path assertions that decide pass or fail.\n6. **Timers** — constant or uniform random think time, so that virtual users behave like people.\n7. **Controllers** — transaction, loop, if and once-only controllers that structure the flow.\n8. **Listeners** — aggregate report, summary report and response-time graph; used for analysis, not during the load run.\n\n**Workflow:** create a thread group, add samplers with assertions, feed data from a CSV file, run in non-GUI mode with jmeter -n -t plan.jmx -l result.jtl, generate the HTML dashboard report, and analyse p90 and p95 latency, throughput and error percentage.\n\n**Best practices:** use the GUI only for scripting and run the real test from the command line, keep listeners to a minimum because they consume memory, use realistic think time and production-like data, and distribute the load across several machines for a very high number of virtual users.',
              diagram: 'st4-performance',
              diagramCaption:
                'Performance testing: load, stress, spike and endurance testing on the load curve, with the knee point where response time grows sharply and the difference between functional and performance questions.',
            },
          ],
        },
        {
          label: 'd',
          parts: [
            {
              marks: 5,
              question: 'Error guessing',
              explain:
                '**What is being asked.** A short note on an experience-based black box technique: the tester guesses where the code will fail, using past defect history and intuition, instead of following a formal model.\n\n**What a note must contain.** The definition, the typical guesses made (blank, zero, negative, very long strings, boundary values, special characters, double click, back button, refresh during payment, 29 February, time-zone edges, network loss, concurrent editing), the strengths (fast, cheap, finds the silly defects that formal techniques miss), and the limitations (not repeatable, no coverage measurement, depends entirely on tester skill).\n\n**Where it fits.** With exploratory testing sessions, at the end of a regression cycle, and around the areas where earlier production defects occurred.\n\n**Structure.** Definition (1 mark) · typical guesses (2 marks) · strengths and limitations (1.5 marks) · where it fits in the test process (0.5 mark).',
              answer:
                '**Error guessing** is an experience-based black box technique in which the tester predicts the inputs and situations that are most likely to make the software fail, using knowledge of the application, past defect history and intuition — without a formal model such as a decision table.\n\n**Typical guesses**\n- Blank, null, zero and negative values; very long strings; strings with only spaces.\n- Boundary and off-by-one values; leading zeros; special characters and emoji.\n- Double click on submit, browser back button, page refresh during payment, the same form open in two tabs.\n- Wrong file type, oversized file and an upload interrupted midway.\n- Date edge cases: 29 February, month end, year change, time-zone difference.\n- Network loss, slow connection and a session timeout in the middle of a transaction.\n- Concurrency: the same record edited or booked by two users at the same time.\n\n**Strengths:** very fast and cheap, needs no documentation, and it finds the practical defects that systematic techniques often miss because they are outside the defined classes.\n\n**Limitations:** it is not repeatable, gives no measurable coverage, cannot be planned in advance, depends entirely on the experience of the tester, and cannot replace systematic techniques.\n\n**Where it fits:** during exploratory testing sessions, at the end of a regression cycle, and around the modules where production defects have appeared before — the defect history of a product is the best source of guesses for its next release.',
              diagram: 'st4-adhoc',
              diagramCaption:
                'Ad hoc and exploratory testing: the characteristics of unscripted testing, the charter used in session-based exploratory testing, and when it is appropriate.',
            },
          ],
        },
      ],
    },
  ],
};
