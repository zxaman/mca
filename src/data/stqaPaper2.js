// STQA Paper 2 — Model Paper (Revised 2020 Pattern, IT-33)
//
// Same format as Paper 1, different syllabus topics:
//   3.3 coverage · 3.4 complexity · 3.8 BVA · 3.10 state/graph testing ·
//   3.6 requirement based · 3.7 positive and negative · 4.1 integration ·
//   4.2 system and acceptance · 4.5 regression · 4.3 scenario ·
//   4.7 usability and accessibility · 4.8 GUI · 4.12 web · 4.13 database ·
//   5.15 Selenium WebDriver · 5.8 manual vs automation · 5.6 automation
//   challenges · 5.7 bug tracking and debugging
//
// Content rules (identical to Paper 1): English only, every answer preceded by
// an Explanation block, every answer followed by a labelled + enlargeable figure.

export const stqaPaper2 = {
  id: 'stqa-paper-2',
  number: 2,
  name: 'Paper 2',
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
                'Explain code coverage testing. Describe statement coverage, branch coverage, condition coverage and path coverage with a suitable example, and state the coverage target used in practice.',
              explain:
                '**What is being asked.** Code coverage measures how much of the code a test suite actually exercises. It is a white box measurement: you instrument the code, run the tests, and the tool reports the percentage of statements, branches, conditions or paths that were executed.\n\n**The four coverage types, in order of strength.** Statement coverage — every executable line runs once. Branch (decision) coverage — every decision takes both true and false. Condition coverage — every atomic condition inside a compound decision takes both values. Path coverage — every independent path runs; the number of independent paths is the cyclomatic complexity V(G).\n\n**Why the order matters.** Branch coverage subsumes statement coverage, decision-condition coverage subsumes both, and path coverage is the strongest but grows exponentially with loops. That is why projects stop at branch coverage.\n\n**The example to carry through.** A discount function with two decisions gives three independent paths. Show one test set per coverage type and prove with the numbers which statements and branches each set misses. Close with the industry target: 70–90% branch coverage, and the warning that 100% coverage does not prove correctness.\n\n**How to score the 10 marks.** Definition (2 marks) · four types with what each guarantees (4 marks) · worked example with a small test set (3 marks) · target and limitation (1 mark).',
              answer:
                '**Code coverage testing** measures the proportion of a program that is exercised when a test suite runs, by instrumenting the code and recording which statements, branches, conditions and paths were executed. It answers a coverage question — which code did the tests touch — and not a correctness question.\n\n**1. Statement coverage** — every executable statement is executed at least once. It is the weakest measure: a decision can be evaluated without its body ever running.\n**2. Branch (decision) coverage** — every decision takes the true outcome and the false outcome at least once. It subsumes statement coverage and is the most common project target.\n**3. Condition coverage** — every atomic condition inside a compound decision takes both a true and a false value, which matters when a short-circuit operator hides one condition.\n**4. Path coverage** — every independent path from entry to exit is executed; the count of independent paths is the cyclomatic complexity V(G) = E − N + 2.\n\n**Worked example**\nfunction discount(amount, member) {\n  if (amount >= 5000) d = 0.10; else d = 0.05;\n  if (member) d += 0.02;\n  return amount * d;\n}\n\n| Test set | Inputs | Statement | Branch | Path |\n|---|---|---|---|---|\n| T1 | (6000, false) | 4 of 5 lines | decision 1 true only | P1 only |\n| T2 | (2000, false) | 4 of 5 lines | decision 1 false only | P2 only |\n| T1 + T2 | both above | 100% | 100% of both decisions | 2 of 3 paths |\n| T3 added | (2000, true) | 100% | 100% | 3 of 3 paths = V(G) |\n\nTwo tests reach full statement and branch coverage, yet the path where the member bonus is added to a large order (P3) is never exercised — that is exactly the gap path coverage exposes.\n\n**Practical target and limitation:** projects usually require 70–90% branch coverage and treat uncovered lines as a review checklist, not as proof. 100% coverage only proves that the code ran; it cannot show that the expected result was right, that a requirement is missing, or that a boundary value is untested.',
              diagram: 'st3-coverage',
              diagramCaption:
                'Code coverage testing: statement, branch, condition and path coverage side by side with what each one measures, the coverage target used in projects and the trap in reading a 100% figure.',
            },
          ],
        },
        {
          label: 'b',
          parts: [
            {
              marks: 10,
              question:
                'Explain code complexity testing with reference to cyclomatic complexity. How is V(G) computed, and how does complexity affect testing effort and maintenance?',
              explain:
                '**What is being asked.** Complexity metrics quantify how hard code is to understand, test and maintain. The examiner wants cyclomatic complexity V(G) explained properly — its definition, three ways to compute it, and what the number means for testing.\n\n**The three computations of V(G).** V(G) = E − N + 2 for a connected flow graph with E edges and N nodes; V(G) = number of predicate nodes (decisions) + 1; V(G) = number of regions in the planar graph. All three give the same answer.\n\n**Why testers care.** V(G) equals the number of independent paths, so it is the minimum number of test cases needed for basis path coverage, and it is a direct estimate of testing effort.\n\n**The thresholds to quote.** 1–10 simple, low risk; 11–20 moderate; 21–50 complex, hard to test; above 50 untestable — refactor. the NASA historic limit of 10 and the McCabe limit of 10 are the standard exam values.\n\n**Also mention.** the Halstead metrics (volume, difficulty, effort) as the other classic measure, and how to reduce complexity: small functions, early return, extract method, flat nesting.\n\n**How to score the 10 marks.** Definition (2 marks) · three formulas (3 marks) · worked flow graph with the number (2 marks) · effect on testing and thresholds (2 marks) · reduction techniques (1 mark).',
              answer:
                '**Code complexity testing** uses structural metrics to estimate how difficult a piece of code is to understand, test and maintain, and therefore how much testing it deserves. The best-known metric is the McCabe cyclomatic complexity V(G).\n\n**Cyclomatic complexity V(G)** = the number of linearly independent paths through the code, computed in three equivalent ways:\n- V(G) = E − N + 2, where E is the number of edges and N the number of nodes in the control flow graph.\n- V(G) = number of predicate (decision) nodes + 1.\n- V(G) = number of regions in the planar flow graph.\n\n**Worked example**\nread marks;\nif (marks >= 40) { pass } else { fail };\nif (marks >= 75) { distinction };\n\n- Nodes N = 7, edges E = 8, so V(G) = 8 − 7 + 2 = 3.\n- Two decision nodes + 1 = 3.\n- Three regions in the graph = 3.\n\nThree independent paths, so basis path coverage needs a minimum of three test cases: marks below 40, marks between 40 and 74, and marks 75 or above.\n\n**Effect on testing effort**\n| V(G) range | Risk | Testing implication |\n|---|---|---|\n| 1–10 | simple | normal unit testing, three to ten cases |\n| 11–20 | moderate | more cases, design extra boundary tests |\n| 21–50 | complex | hard to reach every path, review needed |\n| above 50 | untestable | refactor before testing, coverage becomes impractical |\n\nHigher complexity means more independent paths, more integration points and more places for a change to break something, so V(G) is used to prioritise code review, to decide how many test cases a module needs, and to flag modules that should be refactored first.\n\n**Other complexity measures:** Halstead\'s volume (from operators and operands), difficulty and effort; nesting depth; cognitive complexity; and the maintainability index. **How to reduce V(G):** keep functions small, use early return instead of nested ifs, replace nested conditions with guard clauses or a decision table, remove dead code and extract methods.',
              diagram: 'st3-complexity',
              diagramCaption:
                'Code complexity testing: the control flow graph with V(G) computed three ways, the threshold table that maps complexity to risk and testing effort, and the refactoring techniques that reduce it.',
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
              question: 'Explain Boundary Value Analysis with a suitable example.',
              explain:
                '**What is being asked.** A black box technique that tests the *edges* of an input class instead of its middle, because off-by-one defects (`<` written where `<=` was needed) concentrate exactly there.\n\n**The values to test for a range [a, b].** a−1, a, a+1, nominal, b−1, b, b+1. For an invalid class the values are also on its boundary, plus one value well inside the invalid region.\n\n**Example to carry.** A password field of 8–16 characters: test 7 (invalid), 8 (valid boundary), 9 (valid), 12 (nominal), 15, 16 (valid boundary), 17 (invalid). A date field: 31, 32, 0. An age field 18–60: 17, 18, 61.\n\n**Why it pairs with equivalence partitioning.** EP chooses which classes to test; BVA chooses which values inside those classes are most likely to fail. Exam answers that name both techniques and show the value list score highest.\n\n**How to score the 5 marks.** Definition (1 mark) · the a−1 to b+1 rule (1.5 marks) · worked example with the values and expected results (2 marks) · why boundaries fail (0.5 mark).',
              answer:
                '**Boundary Value Analysis (BVA)** is a black box test design technique in which test cases are chosen at the boundaries of each equivalence class, because the highest proportion of defects lies at the edges: a loop that runs one time too many, a comparison written with `<` instead of `<=`, a field that accepts one character less than the rule.\n\n**Values tested for a valid range [a, b]:** a−1, a, a+1, a nominal value inside the range, b−1, b, b+1. For an invalid class the values are taken from both sides of its boundary as well.\n\n**Example 1 — password length 8 to 16 characters**\n\n| Value | Class | Expected result |\n|---|---|---|\n| 7 | invalid (too short) | rejected with a message |\n| 8 | valid, lower boundary | accepted |\n| 9 | valid | accepted |\n| 12 | valid, nominal | accepted |\n| 16 | valid, upper boundary | accepted |\n| 17 | invalid (too long) | rejected with a message |\n\n**Example 2 — age field 18 to 60:** test 17, 18, 19, 40, 59, 60 and 61.\n**Example 3 — date field:** test day 0, 1, 31, 32 and 29 February in a leap year.\n\n**Why boundaries fail:** developers write relational operators by hand and confuse strict and non-strict comparisons, loops are written with `<=` instead of `<`, and requirements state a limit that is implemented one value off.\n\n**Relationship with equivalence partitioning:** EP decides which classes exist and which one value represents each class; BVA then attacks the edges of those classes. Used together they give the best defect yield per test case, and BVA is normally applied inside each partition rather than instead of it.',
              diagram: 'st3-bva',
              diagramCaption:
                'Boundary Value Analysis on a valid range: the a−1, a, a+1, nominal, b−1, b, b+1 values, the expected result at each boundary, and why off-by-one defects concentrate there.',
            },
            {
              marks: 5,
              label: 'b',
              question: 'What is state based (graph based) testing? Explain it with the help of a state transition diagram.',
              explain:
                '**What is being asked.** A technique for systems whose behaviour depends on their history — an ATM, a login lockout, an order workflow. The system is modelled as states, events and transitions, and tests are derived from that graph.\n\n**Terms to define.** State (the condition the system is in), event (the trigger), transition (the move from one state to another), guard (the condition that allows it), action (what happens on the transition), and invalid transition (an event that should be rejected in that state).\n\n**Coverage levels to explain.** State coverage — visit every state once. Transition coverage — take every arrow once. Path coverage — every route from the start state to a final state. The strongest is transition-pair coverage.\n\n**A concrete example that earns the marks.** An ATM PIN: IDLE → CARD INSERTED → PIN ENTRY → AUTHORISED, with a wrong-PIN loop and a lockout after three failures. Show one test per valid transition and at least one invalid transition, such as pressing withdraw before the PIN is verified.\n\n**How to score 5 marks.** Definition (1 mark) · diagram with states, events and guards (2 marks) · coverage levels (1 mark) · invalid transition tests and why they matter (1 mark).',
              answer:
                '**State based (graph based) testing** derives test cases from a state transition model of the system: the states it can be in, the events it accepts, the transitions those events cause, and the guards and actions attached to each transition. It is used wherever behaviour depends on history — an automated teller machine, a login lockout, an order or payment workflow, a call flow.\n\n**Model vocabulary**\n- **State** — the condition the system is in (IDLE, PIN ENTRY, AUTHORISED).\n- **Event** — the trigger that may cause a change (insert card, enter PIN, press withdraw).\n- **Transition** — the move from one state to another; it may carry a guard and an action.\n- **Invalid transition** — an event that must be rejected in the current state (withdraw before authorisation).\n\n**Example — ATM card and PIN**\n- IDLE —insert card→ CARD INSERTED\n- CARD INSERTED —enter PIN→ PIN ENTRY\n- PIN ENTRY —correct PIN→ AUTHORISED\n- PIN ENTRY —wrong PIN, attempts < 3→ PIN ENTRY\n- PIN ENTRY —wrong PIN, attempts = 3→ LOCKED\n- AUTHORISED —withdraw→ DISPENSING —notes delivered→ IDLE\n\n**Coverage levels**\n1. **State coverage** — every state is reached at least once.\n2. **Transition coverage** — every valid arrow is taken at least once.\n3. **Path coverage** — every route from the start state to an end state is executed, which in this model includes the loop that returns to PIN ENTRY.\n\n**Test cases derived** — insert card and enter the correct PIN (happy path); enter a wrong PIN once and then the correct one (loop exit); enter a wrong PIN three times and confirm the card is locked (guard on the counter); press withdraw in the PIN ENTRY state and confirm the withdrawal is refused (invalid transition).\n\n**Why it matters:** defects in such systems are usually *sequence* defects — an action performed in the wrong order, a counter that never resets, or a state that can be reached from outside the allowed route. A decision table cannot find those, because the defect lives in the history of the interaction rather than in one input.',
              diagram: 'st3-state-graph',
              diagramCaption:
                'State transition model for an ATM PIN: states, events and guards, the wrong-PIN loop, the lockout transition, and the three coverage levels used to derive the tests.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question: 'Explain requirement based testing and the use of a requirement traceability matrix.',
              explain:
                '**What is being asked.** A technique in which the *specification* is the source of the tests: every requirement produces at least one test case, and a matrix proves the mapping in both directions.\n\n**Key concepts.** Requirement as a testable statement; entry and exit criteria; RTM as a two-way table (requirement → test case → defect → status); forward traceability (every requirement is tested) and backward traceability (every test case exists for a requirement).\n\n**What makes a requirement testable.** Unambiguous, measurable, with defined boundaries — "the system shall lock the account after three wrong attempts for 30 minutes" rather than "the system shall be secure".\n\n**Why it is used.** It proves coverage to the client and auditor, measures the impact of change (which tests must be re-run), prevents scope creep, and is the first document a compliance audit asks for.\n\n**How to score 5 marks.** Definition (1 mark) · properties of a testable requirement (1 mark) · RTM structure with a sample table (2 marks) · benefits (1 mark).',
              answer:
                '**Requirement based testing** designs and organises test cases directly from the requirements specification, so that every requirement is verified by at least one test and no test exists without a requirement behind it. It is the backbone of system testing, acceptance testing and any contractual or regulated project.\n\n**A requirement must be testable before it can be tested** — unambiguous, measurable and bounded. "The system shall lock the account for 30 minutes after three wrong password attempts" is testable; "the system shall be secure" is not, and must be refined before test design starts.\n\n**Requirement traceability matrix (RTM)** — a table that links each requirement to its test cases, defects and status, in both directions.\n\n| Req ID | Requirement | Test cases | Defect | Status |\n|---|---|---|---|---|\n| R1 | Patient can search doctors by speciality and city | TC-03, TC-04 | Def-12 | tested, pass |\n| R2 | Double booking must be prevented | TC-06, TC-07 | Def-19 | tested, reopened |\n| R3 | Account locks after 3 wrong attempts for 30 minutes | TC-02, TC-18 | — | not yet run |\n\n**Forward traceability** proves that every requirement has at least one test; **backward traceability** proves that every test case exists for a requirement, which exposes orphan test cases written for features that were removed.\n\n**Benefits**\n1. Coverage is measurable — the matrix shows the percentage of requirements with executed, passing tests.\n2. Change impact analysis — when requirement R2 changes, every linked test case and defect can be re-run or rewritten.\n3. Audit and compliance — the RTM is the first artefact a quality audit or a client sign-off asks for.\n4. Scope control — an untraceable new test reveals an unapproved requirement, and an untested requirement reveals a gap before release.\n\n**Limitation:** requirement based testing verifies conformance to the specification, so it cannot find a missing requirement or a requirement that is itself wrong — those need review and exploratory testing on top.',
              diagram: 'st3-requirement',
              diagramCaption:
                'Requirement based testing: the requirement to test case to defect trace, a sample RTM, the properties that make a requirement testable, and the coverage it proves.',
            },
            {
              marks: 5,
              label: 'd',
              question: 'Differentiate between positive and negative testing with examples.',
              explain:
                '**What is being asked.** Two complementary approaches: positive testing supplies valid input to prove the feature does what the requirement says; negative testing supplies invalid input to prove the system rejects it gracefully.\n\n**What to cover.** Definition of each, the data each uses, the expected result (feature works versus graceful error, no crash, no corruption), where each belongs in the life cycle, and why both are mandatory.\n\n**Examples that carry the marks.** A registration form: positive — age 25, valid email, 1 MB PDF upload; negative — age 0 or −5 or "abc", malformed email, 50 MB file, SQL injection string in the name field.\n\n**The closing argument.** Positive-only suites make a fragile product: nothing proves error handling works, and a crash on bad data reaches production. Negative-only suites never prove the feature works at all. Together they cover functional correctness and robustness.\n\n**How to score 5 marks.** Definitions (1 mark) · comparison table (2 marks) · examples for one feature (1.5 marks) · conclusion on why both are needed (0.5 mark).',
              answer:
                '**Positive testing** supplies valid, expected input and verifies that the system produces the expected output — the happy path. **Negative testing** supplies invalid, unexpected or hostile input and verifies that the system handles it gracefully: an error message, no crash, no data corruption, no security hole.\n\n| Point | Positive testing | Negative testing |\n|---|---|---|\n| Input used | valid, within the allowed range | invalid, out of range, wrong type, malicious |\n| Question asked | does the feature work as specified? | does the system survive bad input? |\n| Expected result | correct output, data saved, notification sent | error message, no crash, no corruption, no data leak |\n| Coverage | requirement and happy-path scenarios | boundary, error handling, robustness, security |\n| Typical cases | 2 of the whole suite | the majority in a well-designed suite |\n| If omitted | error handling is never tested | the feature is never proven to work |\n\n**Example — patient registration form**\n- Positive: age 25, email riya@mail.com, phone 9876543210, file report.pdf of 1 MB → registration succeeds, welcome mail is sent, upload succeeds.\n- Negative: age 0, −5, 150 or "abc"; email without @; phone with 9 digits; file of 50 MB or a .exe upload; name field containing a SQL injection string → a clear error message, the record is not saved, and the application does not crash.\n\n**Where each one fits:** positive testing comes first in every cycle because it proves the build is worth testing further, and it dominates smoke and acceptance testing. Negative testing dominates system, security and robustness testing, and its cases grow as the product matures.\n\n**Why both are needed:** a positive-only suite lets a crash on invalid data reach production, because error handling was never exercised; a negative-only suite never proves that the feature works at all. Positive testing establishes functional correctness, negative testing establishes robustness, and a defect found by either is equally real.',
              diagram: 'st3-positive-negative',
              diagramCaption:
                'Positive and negative testing compared: valid input against invalid input, the expected result on each side, example cases from a registration form, and why neither alone is sufficient.',
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
              question: 'Explain integration testing and its approaches. Differentiate between a stub and a driver.',
              explain:
                '**What is being asked.** Integration testing verifies that individually tested units work together — that interfaces match, data formats agree and calls happen in the right order. Its approaches decide the order in which units are combined.\n\n**The approaches.** Big bang (all at once, cheap to plan, impossible to debug), top-down (from the main module down, lower modules replaced by stubs), bottom-up (from the leaves up, upper modules replaced by drivers), sandwich or hybrid (both directions meeting in the middle), and incremental builds.\n\n**Stub versus driver.** A stub stands in for a module that is called by the module under test — it is the *lower* module and returns a fixed answer. A driver calls the module under test — it is the *upper* module and plays the role of the caller. Both are throw-away code.\n\n**Defects this level finds.** Interface mismatch, wrong parameter order, changed data type, missing field, one module assuming another initialised a resource, wrong sequence of calls.\n\n**How to score 5 marks.** Definition and purpose (1 mark) · four approaches with one line each (2 marks) · stub versus driver table (1.5 marks) · typical defects (0.5 mark).',
              answer:
                '**Integration testing** verifies that units which passed unit testing work correctly together: that the interfaces agree on parameters, data types and formats, that calls occur in the required sequence, and that shared resources are initialised in the right order. It sits between unit testing and system testing, and it is the level at which interface defects are found.\n\n**Approaches**\n1. **Big bang (non-incremental)** — all units are combined at once and tested as a whole. Cheap to plan, but a failure gives almost no clue about where the fault is, so it suits only very small systems.\n2. **Top-down** — integration starts from the main module and moves down; modules not yet built are replaced by **stubs**. The main control flow is exercised early, but low-level behaviour is tested late.\n3. **Bottom-up** — starts from the leaf modules and moves up; upper modules are replaced by **drivers**. It is good for reusable low-level components but the overall control flow is verified late.\n4. **Sandwich (hybrid)** — top-down and bottom-up run in parallel and meet in the middle; it combines the strengths of both at the cost of more planning.\n\n**Incremental testing** — each added unit is integrated and the build is re-tested, so defects are attributed to the newly added unit.\n\n| Point | Stub | Driver |\n|---|---|---|\n| Role | simulates a module that is **called** | simulates a module that **calls** |\n| Position | lower level, below the module under test | upper level, above the module under test |\n| Used in | top-down integration | bottom-up integration |\n| Behaviour | returns fixed or dummy data | invokes the module with test data and displays the result |\n\n**Typical integration defects:** parameter count or order mismatch, wrong data type at the boundary, a field lost between two modules, one module assuming another has already initialised a connection, and wrong call sequence between services.',
              diagram: 'st4-integration',
              diagramCaption:
                'Integration testing: the four approaches (big bang, top-down, bottom-up, sandwich) on the module graph, where stubs and drivers sit, and the interface defects this level is designed to find.',
            },
            {
              marks: 5,
              label: 'b',
              question: 'Differentiate between system testing and acceptance testing.',
              explain:
                '**What is being asked.** Two levels that are often confused because both test the whole product. The distinction is *who* runs them, *against what*, and *what decision* they support.\n\n**System testing.** Done by an independent test team against the SRS, in a production-like environment, covering functional behaviour plus non-functional types: performance, security, usability, compatibility, reliability, recovery.\n\n**Acceptance testing.** Done by the customer or user against business needs and the acceptance criteria, to decide whether the product may be released. Types: alpha (developer site), beta (customer site), contractual, regulatory, operational.\n\n**The one-line distinction.** System testing answers "was the product built right?"; acceptance testing answers "was this the product that was wanted?" — verification of the specification versus validation of the need.\n\n**How to score 5 marks.** Definition of both (1.5 marks) · comparison table (2.5 marks) · acceptance types with one line each (1 mark).',
              answer:
                '**System testing** tests the complete, integrated product against the software requirement specification, in an environment that resembles production, by a team that is independent of development. It covers functional behaviour plus the non-functional types — performance, load, security, usability, compatibility, reliability and recovery — and its exit criteria are the ones written in the test plan.\n\n**Acceptance testing** is the formal testing performed by the customer or end user against the business needs and the acceptance criteria, to decide whether the product may be released or paid for. It is the validation step, and its result is a business decision, not a defect count.\n\n| Point | System testing | Acceptance testing |\n|---|---|---|\n| Performed by | independent test team | customer, end user, business owner |\n| Basis | SRS and design documents | business needs and acceptance criteria |\n| Environment | production-like staging | user or UAT environment with real data |\n| Question asked | was the product built right? | is this the product that was wanted? |\n| Scope | functional + non-functional, whole system | key business workflows, user scenarios |\n| Output | test summary report, defect list | sign-off or rejection |\n\n**Types of acceptance testing**\n1. **Alpha testing** — performed at the developer site by an internal team together with a few representative users.\n2. **Beta testing** — performed at the customer site by real users on a pre-release build, with feedback collected.\n3. **Contractual acceptance** — run against criteria written into the contract.\n4. **Regulatory acceptance** — run to prove compliance with a law or standard (for example medical or financial regulations).\n5. **Operational acceptance** — checks backup, recovery, monitoring and support readiness before go-live.\n\n**Why both are required:** system testing finds defects and proves technical conformance; acceptance testing proves that the delivered behaviour serves the business. A product can pass every system test and still fail acceptance, because the requirement itself was wrong.',
              diagram: 'st4-system-acceptance',
              diagramCaption:
                'System testing against acceptance testing: who performs each, the basis and environment used, the question each answers, and the alpha, beta, contractual, regulatory and operational acceptance types.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question: 'What is regression testing? Explain the types of regression testing and when it is performed.',
              explain:
                '**What is being asked.** Regression testing re-runs tests after a change to prove that nothing that worked has broken. The marks come from *why* it is needed, *when* it is triggered, and the *types* of regression suite.\n\n**Triggers.** A defect fix, a new feature, a refactor, a configuration change, an upgrade of a library or database — any change to code or environment.\n\n**The three suites, which must not be mixed.** Smoke (a quick build sanity check, minutes), the regression suite proper (the full stable set that must keep passing), and a re-test of the specific defect (which is confirmation, not regression).\n\n**Variants to name.** Unit regression (a small code area), partial or selective regression (only the affected slice, fast but riskier), and complete or full regression (everything, safest and slowest).\n\n**The exam sentence.** Regression testing is the reason automation exists: a manual full regression every sprint is impossible, so the suite runs on CI at every commit.\n\n**How to score 5 marks.** Definition and purpose (1.5 marks) · when it is triggered (1 mark) · three types with a line each (2 marks) · note that it must be automated (0.5 mark).',
              answer:
                '**Regression testing** is the re-execution of selected test cases after a change — a defect fix, a new feature, a refactor, a library upgrade or a configuration change — to confirm that the change has not broken functionality that was already working. A regression defect is the most expensive kind, because an old feature breaks silently while everyone is watching the new one.\n\n**When it is performed**\n- after every defect fix, in the same build area;\n- after every new feature is merged;\n- after refactoring, optimisation or a framework upgrade;\n- before every release, as a full pass;\n- automatically on CI at every commit, when the suite is automated.\n\n**Types of regression testing**\n1. **Unit regression** — the smallest scope: re-run the unit tests of the class or module that changed. Fast, and it is what a developer runs before committing.\n2. **Partial (selective) regression** — only the test cases linked to the changed modules, through code dependency and the RTM. Fast and practical, but it carries the risk that an indirect dependency is missed.\n3. **Complete (full) regression** — the entire stable suite, run before a release or after a large change. The safest and the most expensive, which is why it must be automated.\n\n**Suite discipline — three things that must not be mixed:** the **smoke suite** proves the build is worth testing (minutes); the **regression suite** proves nothing broke (the full stable set); and the **re-test of a specific defect** confirms one fix. If smoke fails, the build goes back to the developer and regression is not run at all.\n\n**Priority when time is short:** re-test the defect, then the modules that depend on the change, then the high-risk business workflows, then the rest of the suite — in that order, and record what was skipped so the residual risk is visible.',
              diagram: 'st4-regression',
              diagramCaption:
                'Regression testing: the triggers that start it, the difference between smoke, regression and re-test suites, the three scopes of regression, and why the suite has to be automated.',
            },
            {
              marks: 5,
              label: 'd',
              question: 'Explain scenario testing with an example.',
              explain:
                '**What is being asked.** Scenario testing validates a realistic end-to-end user story that crosses several features, rather than one function in isolation. The examiner wants the definition, how a scenario is written, and one worked scenario.\n\n**What a good scenario contains.** A believable user with a real goal, a start condition, the steps through several features, the expected business outcome, and at least one variation or failure path.\n\n**Difference from a test case.** A test case checks one function with defined data; a scenario threads many functions together the way a user would, so it finds gaps between features — the place where each feature works but the workflow does not.\n\n**The example to write.** "Riya wants to buy a phone": log in, search, filter, add to cart, save a new address, pay by UPI, receive confirmation — plus the failure variation where payment fails and the cart is retained.\n\n**How to score 5 marks.** Definition and purpose (1.5 marks) · how to write a scenario, with its parts (1.5 marks) · worked example including a failure variation (2 marks).',
              answer:
                '**Scenario testing** is a black box technique in which a realistic, end-to-end user story is executed through the system, spanning several features in the order a real user would use them. It tests the business workflow rather than an individual function, and it is applied after integration testing, when the components can be exercised together.\n\n**A scenario is written with five parts**\n1. A believable user and a goal — "Riya wants to buy a phone before the weekend".\n2. A start condition — logged in, empty cart, ₹50,000 limit.\n3. The steps, crossing several features — search, filter, product page, cart, address, payment, confirmation.\n4. The expected business outcome — order placed, SMS and invoice generated, stock reduced by one.\n5. At least one variation — a failure or alternative path, such as payment declined.\n\n**Example scenario — buy a mobile phone**\n- Riya logs in and searches "5G phone under 25000".\n- She filters by brand and rating, opens the third result and adds it to the cart.\n- She saves a new delivery address and applies a coupon.\n- She pays by UPI and the payment succeeds.\n- The order confirmation page shows the order ID, and an SMS and invoice arrive with the correct amount.\n- **Variation:** the UPI payment fails — the cart must be retained, the stock must not be reduced, and a retry must not create a duplicate order.\n\n**Why scenario testing matters:** each feature may pass its own test cases while the workflow between them fails — a cart that is not cleared after payment, an address that does not reach the invoice, stock that is reduced twice when a payment is retried. Scenario testing finds exactly those gaps, and it surfaces requirements that were never written down but are obviously expected by a user.\n\n**Limitation:** scenarios are not a substitute for systematic coverage — they exercise few paths but deep workflows, so they complement equivalence partitioning and boundary value analysis rather than replace them.',
              diagram: 'st4-scenario',
              diagramCaption:
                'Scenario testing: how a realistic user story is written with its five parts, one end-to-end purchase scenario with a payment-failure variation, and the inter-feature gaps that only scenarios expose.',
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
              question: 'Explain usability testing and accessibility testing.',
              explain:
                '**What is being asked.** Two user-centred types: usability asks whether a real user can complete a task efficiently and without frustration; accessibility asks whether people with disabilities — and people in poor conditions — can use the product at all.\n\n**Usability measures.** Task success rate, time on task, error count, number of clicks, and satisfaction. Method: 5–8 real users, a realistic task, observation and think-aloud, then a severity-ranked list of problems.\n\n**Accessibility essentials.** Keyboard-only operation, visible focus, screen-reader support with proper labels and landmarks, contrast ratio, text resize to 200%, captions, and touch targets of at least 44 px. Standards: WCAG 2.1 levels A, AA, AAA; in India the RPwD Act, and Section 508 in the US.\n\n**The line that earns the mark.** Accessibility is not only for disability: slow networks, bright sunlight, a small screen and a temporary injury affect everyone.\n\n**How to score 5 marks.** Definitions (1 mark) · usability metrics and method (2 marks) · accessibility checks and standards (1.5 marks) · why both are needed (0.5 mark).',
              answer:
                '**Usability testing** evaluates whether a real user can use the product to reach a goal effectively, efficiently and with satisfaction. It is measured, not guessed: task success rate, time on task, number of errors, number of clicks to finish a task, and a satisfaction score such as SUS.\n\n**Typical method:** recruit 5–8 representative users, give each a realistic task ("find a cardiologist in Pune and book tomorrow 10:30"), ask them to think aloud, observe without helping, record where they hesitate, and rank the problems found by severity.\n\n**Accessibility testing** evaluates whether people with disabilities can use the product with assistive technology, and whether it remains usable under difficult conditions.\n\n| Check | What is verified |\n|---|---|\n| Keyboard only | every function reachable without a mouse, focus always visible |\n| Screen reader | meaningful labels, headings, landmarks and alt text; reading order correct |\n| Contrast | text and controls meet WCAG contrast ratios (4.5:1 for normal text) |\n| Resize and zoom | layout usable at 200% zoom and with larger text |\n| Forms and errors | labels programmatically linked, errors announced, not colour-only |\n| Touch and media | 44 px touch targets, captions for video, no seizure-inducing flashing |\n\n**Standards:** WCAG 2.1 at levels A, AA and AAA; in India the Rights of Persons with Disabilities Act, and Section 508 or EN 301 549 in other markets, make accessibility a legal requirement rather than a courtesy.\n\n**Why both are needed:** usability defects cost business — a booking flow that needs eleven clicks loses customers even though every function works — and accessibility defects exclude users entirely. The same fix often serves both, and both are black box, user-centric activities performed after functional QA and before release.',
              diagram: 'st4-usability-accessibility',
              diagramCaption:
                'Usability and accessibility testing: the metrics and test method used for usability, the accessibility checklist (keyboard, screen reader, contrast, zoom, errors, touch), and the standards behind them.',
            },
            {
              marks: 5,
              label: 'b',
              question: 'What is GUI testing? Explain the elements checked in GUI testing.',
              explain:
                '**What is being asked.** GUI testing verifies the graphical interface — what the user sees and clicks: layout, controls, navigation, validation messages, images, fonts, colours and behaviour at different resolutions.\n\n**The checklist the examiner expects.** Missing or overlapping controls; alignment, spacing and consistency; tab order and keyboard navigation; correct labels and spellings; enabled and disabled states; error messages in plain language; images, icons and alt text; data displayed in the right format; window resize and different resolutions; scrolling behaviour.\n\n**Two families of checks.** Functional GUI (does the control do what it should) and cosmetic GUI (does it look right, consistently).\n\n**The line to close with.** A GUI defect looks trivial, but a mislabelled button or a number formatted wrongly destroys trust as fast as a crash.\n\n**How to score 5 marks.** Definition (1 mark) · element checklist grouped logically (3 marks) · note on functional versus cosmetic and on multiple resolutions (1 mark).',
              answer:
                '**GUI testing** verifies the graphical user interface of an application: that every visual element exists, is placed and labelled correctly, behaves as expected when used, and remains consistent across screens, resolutions and browsers.\n\n**Elements checked**\n1. **Layout and appearance** — alignment, spacing, font family and size, colour consistency, no overlapping or truncated text, no broken images.\n2. **Controls** — text boxes, dropdowns, checkboxes, radio buttons, date pickers and buttons are present, enabled or disabled in the right state, and accept or reject input correctly.\n3. **Labels and content** — correct spelling and grammar, meaningful button names, units and formats (date, currency, decimal places), placeholder and help text.\n4. **Navigation** — menu structure, breadcrumbs, links, back and forward behaviour, tab order, and no dead ends.\n5. **Validation and errors** — messages appear at the right place, in plain language, saying what is wrong and what to do, without exposing stack traces.\n6. **Data display** — values from the database shown in the right format, sorted and paginated correctly, large values not overflowing.\n7. **Images and media** — correct image, correct size, alt text present, icons consistent with their action.\n8. **Responsiveness** — layout at different resolutions, window resize, zoom, and orientation change on mobile.\n9. **Consistency** — the same action looks and behaves the same way on every screen, so the user learns the interface once.\n\n**Two families of checks:** *functional GUI testing* asks whether the control does what it should (clicking Save actually saves), and *cosmetic GUI testing* asks whether the screen looks correct and consistent (the button is aligned, the font matches). Both are needed — a mislabelled button or a currency shown to two decimal places wrongly loses user trust as quickly as a functional failure.\n\n**Practical approach:** use a screen-sample checklist per screen, test on the browsers, resolutions and devices named in the requirements, capture a screenshot with every GUI defect, and re-run the visual checklist after any CSS or theme change.',
              diagram: 'st4-gui',
              diagramCaption:
                'GUI testing: the elements checked on every screen — layout, controls, labels, navigation, validation, data display, images, responsiveness and consistency — split into functional and cosmetic checks.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question: 'Explain the challenges of testing web based applications.',
              explain:
                '**What is being asked.** Why web applications are harder to test than desktop software, and which dimensions a web test plan must cover.\n\n**The eight dimensions.** Content, navigation, user interface, functionality, compatibility, performance, security and usability/accessibility.\n\n**The structural challenges.** Three-tier architecture (browser, network, server, database) with a different failure mode in each layer; an unbounded set of browsers, versions, resolutions, devices and network speeds; stateless HTTP and session handling; content that changes without a deployment; distributed load and third-party dependencies; and security exposure because the client is public.\n\n**The exam sentence.** A web application is never "complete" — content, browsers and load change continuously — so regression automation is the only way to release safely.\n\n**How to score 5 marks.** Why web testing differs (1.5 marks) · the eight dimensions (2.5 marks) · structural challenges and the automation conclusion (1 mark).',
              answer:
                '**Web based application testing** verifies a three-tier system — browser, web and application server, database — across an environment the tester does not control: many browsers and devices, variable network speed, and public exposure to attack.\n\n**Eight dimensions that a web test plan must cover**\n1. **Content** — text, images, links and metadata are correct, current and consistent; broken links and stale content are content defects.\n2. **Navigation** — every route is reachable, no dead ends, no broken back button behaviour, deep links work.\n3. **User interface** — layout, fonts and controls render correctly across browsers, resolutions and zoom.\n4. **Functionality** — forms, validation, workflows and error handling behave as specified.\n5. **Compatibility** — browser and version matrix, operating systems, devices, screen sizes, and assistive technology.\n6. **Performance** — page load and response time under expected and peak load, since a slow page is a functional failure for the user.\n7. **Security** — authentication, session handling, input validation against injection, HTTPS everywhere, no data leaked in URLs or logs.\n8. **Usability and accessibility** — task success with real users, keyboard operation, screen-reader support, contrast.\n\n**Why web testing is harder than desktop testing**\n- **No control over the client** — an unbounded matrix of browsers, versions, extensions and devices.\n- **A defect can be in any layer** — browser rendering, network latency, application server, database, or a third-party service such as a payment gateway.\n- **Stateless HTTP and sessions** — session expiry, cookies, back button, multiple tabs and duplicate submission create defects that no single unit test can see.\n- **Dynamic content** — content and configuration change without a deployment, so a test that passed yesterday may fail today.\n- **Continuous change** — a web application is never complete, which makes full manual regression impossible.\n\n**Conclusion:** the practical answer is layered automation — API and regression suites on CI for every commit, cross-browser suites on a device cloud, and load tests before each release — with manual exploratory and usability testing on top.',
              diagram: 'st4-web',
              diagramCaption:
                'Web testing: the eight dimensions that must be covered (content, navigation, UI, functionality, compatibility, performance, security, usability), the layers where a defect can hide, and the challenges specific to the web.',
            },
            {
              marks: 5,
              label: 'd',
              question: 'What is database testing? Explain the areas covered in database testing.',
              explain:
                '**What is being asked.** Database testing verifies the layer behind the interface: schema, constraints, triggers, stored procedures, transactions and data integrity. It is needed because a screen can look perfectly correct while the data it wrote is wrong.\n\n**Areas to cover.** Schema and data types; primary key, foreign key, check and not-null constraints; default values; triggers and stored procedures; ACID transactions; data integrity after create, update and delete; ETL and migration correctness; indexing and query performance; backup and recovery; and security — access rights at database level.\n\n**The ACID line to quote.** Atomicity (all or nothing), Consistency (constraints hold after the transaction), Isolation (parallel transactions do not interfere), Durability (committed data survives a crash).\n\n**How to score 5 marks.** Definition and why it is needed (1.5 marks) · areas with one line each (3 marks) · one example of a defect only database testing finds (0.5 mark).',
              answer:
                '**Database testing** verifies the data layer of an application — its structure, its rules and the integrity of the data it stores — through SQL queries, database tools and direct inspection of the stored rows. It is performed because the interface is not evidence: a form can display a success message while the row is written with the wrong type, a duplicate key or a truncated value.\n\n**Areas covered**\n1. **Schema and data types** — tables, columns, data types, lengths and normalisation match the design; naming conventions are followed.\n2. **Constraints** — primary key uniqueness, foreign key integrity (no orphan rows), check constraints, not-null and default values actually enforce the rule.\n3. **Triggers and stored procedures** — fire at the right time, with the right effect, including the error path.\n4. **Transactions and ACID** — atomicity (all or nothing), consistency (constraints still hold), isolation (parallel transactions do not clash), durability (committed data survives a restart).\n5. **Data integrity across operations** — create, update, delete and rollback leave the database consistent; deleting a parent does not orphan its children.\n6. **Data migration and ETL** — row counts, transformations, mappings and rejected records are correct after a migration.\n7. **Query performance** — indexing, execution plan and response time for the expected data volume.\n8. **Backup and recovery** — restore from backup reproduces the same data, and the recovery point objective is met.\n9. **Security** — database accounts, roles and grants, no plain-text passwords, no sensitive data in logs, injection-safe queries.\n\n**Example of a defect only database testing finds:** the registration screen shows success, but the email column is `varchar(20)`, so a 28-character address is silently truncated and the welcome mail never arrives.\n\n**Practical note:** database checks are best written once and automated — a set of SQL assertions run after the UI test — so that every regression run verifies the data and not just the screen.',
              diagram: 'st4-database',
              diagramCaption:
                'Database testing: the areas checked — schema, constraints, triggers and procedures, ACID transactions, data integrity, migration, performance, recovery and security — and why the UI cannot be trusted as evidence.',
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
              question: 'Selenium WebDriver',
              explain:
                '**What is being asked.** A short note on the browser automation API that most QA teams use: what it is, how it works, how it differs from Selenium IDE and RC, its waits, and its limits.\n\n**The essentials.** WebDriver is a W3C-standard protocol implemented by browser-specific drivers (chromedriver, geckodriver). The test code calls a language binding, the binding sends HTTP commands to the driver binary, and the driver controls the real browser natively — no JavaScript injection, no proxy, unlike Selenium RC.\n\n**Waits.** Implicit wait, explicit wait (expected conditions) and fluent wait; `Thread.sleep()` is never acceptable because it makes the suite slow and flaky.\n\n**Limits.** No desktop or native mobile app support (that is Appium), no built-in reporting, no built-in parallelism (that is Grid or a cloud), and no visual testing.\n\n**How to score 5 marks.** Definition and architecture (1.5 marks) · components and how a test runs (1.5 marks) · waits and best practice (1 mark) · limitations (1 mark).',
              answer:
                '**Selenium WebDriver** is an open-source API for automating real browsers. It is the core of the Selenium suite: test code is written in Java, Python, C#, Ruby or JavaScript, and WebDriver drives an actual browser as a user would — clicking, typing, navigating and reading the DOM.\n\n**Architecture**\n1. **Language binding** — the library the test is written in (selenium-java, selenium-python, and so on).\n2. **WebDriver protocol** — a W3C standard: the binding sends HTTP commands to the driver.\n3. **Browser driver binary** — chromedriver, geckodriver, edgedriver, safaridriver; it translates the commands into native browser actions.\n4. **Real browser** — Chrome, Firefox, Edge or Safari, running with real rendering, cookies and sessions.\n\nBecause control happens natively, WebDriver needs no JavaScript injection and no proxy, which is what separated it from the older Selenium RC.\n\n**Handling timing**\n- **Implicit wait** — a default timeout applied to every element lookup; simple but blunt.\n- **Explicit wait** — wait for a condition (element visible, clickable, text present) using `WebDriverWait`; the recommended approach.\n- **Fluent wait** — explicit wait with a polling interval and ignored exceptions.\n- **Never `Thread.sleep()`** — it makes the suite both slow and flaky.\n\n**Best practice:** use the Page Object Model so that a UI change touches one class, prefer stable locators (id, data-test, accessible name) over brittle XPath, run headless in CI, parallelise with Selenium Grid or a device cloud, and take a screenshot on failure.\n\n**Limitations:** browser only — no desktop or native mobile applications (Appium covers those), no built-in reporting, no built-in parallel execution, and no visual or performance assertions on its own.',
              diagram: 'st5-selenium-webdriver',
              diagramCaption:
                'Selenium WebDriver architecture: the test code, the language binding, the W3C protocol, the browser driver binary and the real browser, plus the waits used instead of fixed sleeps.',
            },
          ],
        },
        {
          label: 'b',
          parts: [
            {
              marks: 5,
              question: 'Manual testing versus automated testing',
              explain:
                '**What is being asked.** A comparison short note: what each one is, the criteria on which they differ, and — most importantly — how they are combined in a real project.\n\n**Points of comparison.** Who runs it (person versus tool and script), the initial and running cost, speed and repeatability, what it is good at (human judgement versus regression), coverage measurement, and the skills required.\n\n**The conclusion that earns the last mark.** Automation does not replace manual testing; it takes over repetitive, stable, high-volume checks so that people can spend time on exploratory, usability and new-feature testing.\n\n**How to score 5 marks.** Definitions (1 mark) · comparison table (2.5 marks) · right mix with examples (1 mark) · conclusion (0.5 mark).',
              answer:
                '**Manual testing** is the execution of tests by a person who interacts with the application, judges the result against expectation, and records defects. **Automated testing** is the execution of tests by a tool that runs a script, compares the actual result with the expected result, and reports pass or fail.\n\n| Point | Manual testing | Automated testing |\n|---|---|---|\n| Performed by | a tester, by hand | a tool running a script |\n| Initial cost | low — no script | high — tool, framework, scripts |\n| Running cost | high — every run costs effort | low — the same script is reused |\n| Speed | slow, serial | very fast, parallel |\n| Repeatability | inconsistent | exact on every run |\n| Best at | exploratory, usability, new features, judgement calls | regression, smoke, data-driven, API, cross-browser, load |\n| Coverage measurement | difficult | built in — reports and metrics |\n| Skills | domain and product knowledge | programming, locators, framework design |\n| When it fails | under time pressure tests get skipped | when the UI changes and scripts break |\n\n**What automation cannot do:** judge whether a screen *looks* right in a way a user would accept, explore an unfamiliar feature, assess usability, or decide that an unexpected result is actually acceptable. **What manual testing should not do:** re-run the same 400 regression cases every sprint, which is slow, boring and skipped exactly when it matters most.\n\n**The right mix in practice:** manual — exploratory sessions, usability and accessibility checks, the first round on a brand-new feature, and acceptance testing; automated — smoke on every build, regression on every commit through CI, API contracts, data-driven checks, cross-browser runs and load tests.\n\n**Conclusion:** automation does not replace manual testing; it removes the repetitive work so that testers can do the thinking work. A team that automates everything loses judgement, and a team that automates nothing cannot release often.',
              diagram: 'st5-manual-vs-automation',
              diagramCaption:
                'Manual versus automated testing compared on effort, cost, speed, repeatability, coverage measurement and skills, with the right mix of each in a real project.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              question: 'Challenges in test automation',
              explain:
                '**What is being asked.** Why automation projects fail or under-deliver — the practical problems a team meets after the first scripts work.\n\n**The challenges to list.** Test flakiness (the same test passes and fails without a code change); maintenance cost when the UI changes; dynamic locators and waits; high initial investment with a slow return; skill gap — testers without programming experience; false confidence — a green suite that misses real defects; environment and test-data problems; slow suites that nobody runs; and tool or licence cost.\n\n**The exam line.** Writing a suite is easy; maintaining it and trusting it is the hard part — which is why framework design (Page Object Model, stable locators, independent tests, data management) matters more than the tool.\n\n**How to score 5 marks.** Six to eight challenges with one line each (3.5 marks) · mitigation for the main ones (1 mark) · overall conclusion (0.5 mark).',
              answer:
                '**Test automation challenges** are the practical problems that appear once automation moves beyond a pilot: they decide whether a suite becomes an asset or a liability.\n\n1. **Flakiness** — the same test passes and fails against unchanged code, because of timing, animation, network or test-order dependencies. It destroys trust: the team starts ignoring red builds.\n2. **Maintenance cost** — every UI change breaks locators; a suite of 500 scripts can consume more effort than it saves unless the Page Object Model and stable locators (`data-test`, ids, accessible names) are used.\n3. **Dynamic and asynchronous UI** — ids regenerated on each load, elements rendered late, single-page routing and shadow DOM all require explicit waits and robust selectors.\n4. **High initial investment** — tool licence, framework, training and script development cost money before any return; the payback comes only over many runs.\n5. **Skill gap** — automation needs programming, debugging and framework design; teams without those skills produce brittle record-and-playback scripts.\n6. **False confidence** — a green suite that checks only the happy paths hides defects; automation proves nothing about usability, appearance or unexplored behaviour.\n7. **Test data and environment** — shared test data collides between runs, environments drift from production, and third-party services are unavailable at test time.\n8. **Slow suites** — a full run that takes six hours is not run on every commit, so the feedback arrives too late to be useful.\n9. **Tool and licence cost, plus tool lock-in** — the licence, the maintenance and the eventual migration all have to be budgeted.\n\n**Mitigations:** design the framework first (Page Objects, independent tests, data factories), run only smoke on every commit and the full suite nightly, quarantine and fix flaky tests instead of retrying them silently, keep assertions meaningful, and track automation health metrics such as pass rate, flaky count and execution time.\n\n**Conclusion:** the difficulty is not writing a script, it is keeping a large suite fast, stable and trusted — which is why most automation failures are framework and process failures rather than tool failures.',
              diagram: 'st5-automation-challenges',
              diagramCaption:
                'Automation challenges: flakiness, maintenance, dynamic locators, investment cost, skill gap, false confidence, data and environment problems, and slow suites — with the mitigation for each.',
            },
          ],
        },
        {
          label: 'd',
          parts: [
            {
              marks: 5,
              question: 'Bug tracking and debugging',
              explain:
                '**What is being asked.** Two linked activities that are often confused: bug tracking records and follows a defect through its life cycle, while debugging finds its root cause in the code.\n\n**Bug tracking.** A defect report with ID, title, environment, build, steps to reproduce, expected, actual, severity, priority and evidence; a workflow (New → Assigned → In Progress → Fixed → Retest → Closed, with Reopened, Deferred and Rejected); and metrics such as defect density, reopen rate and mean time to fix.\n\n**Debugging.** Reproduce the failure, localise it (binary search, logging, breakpoints, code inspection), analyse the root cause, fix it, then write a regression test so that it cannot return.\n\n**The distinction to state clearly.** The tracker records *what* went wrong and keeps the history; debugging finds *why*. A defect is closed after verification; a root cause is closed after the regression test passes.\n\n**How to score 5 marks.** Bug tracking with life cycle and report fields (2 marks) · debugging steps (2 marks) · difference and best practice (1 mark).',
              answer:
                '**Bug tracking** is the process of recording, prioritising, assigning and following every defect until it is verified and closed, in a tool such as JIRA, Bugzilla or Azure Boards. **Debugging** is the developer activity of locating and removing the root cause of that defect in the code.\n\n**Bug tracking**\n- **A good defect report contains:** ID, title (the problem in one line), environment and build number, precondition, steps to reproduce, expected result, actual result, severity, priority, and evidence — screenshot, log, HAR file or video.\n- **Life cycle:** New → Assigned → In Progress → Fixed → Retest → Closed, with the branches Reopened, Deferred and Rejected.\n- **Fields that drive the workflow:** severity (impact) against priority (urgency), component, owner, build found and build fixed.\n- **Metrics it produces:** defect density, reopen rate, mean time to fix, and defect leakage to production.\n\n**Debugging**\n1. **Reproduce** the failure reliably — same build, same data, same environment.\n2. **Localise** the fault: binary search across versions or commits, logging, breakpoints, stack trace, and inspection of the code path.\n3. **Analyse the root cause**, not the symptom — "the button did not appear" is a symptom; the cause may be a slow API, a CSS rule or a permission check.\n4. **Fix** the cause and check the neighbouring paths that use the same code.\n5. **Write a regression test** that fails before the fix and passes after it, so the defect cannot return silently.\n\n**Difference:** the tracker answers *what happened, to which build, and where does it stand*; debugging answers *why it happened*. Tracking without debugging leaves a long backlog of open reports; debugging without tracking loses the history and lets the same defect return.\n\n**Best practice:** attach a screenshot and log to every automation failure (half the debugging is already done), group defects by root cause rather than by symptom, and treat a rising reopen rate as a review-quality problem rather than a tester problem.',
              diagram: 'st5-bug-debugging',
              diagramCaption:
                'Bug tracking and debugging: the defect report fields, the tracking life cycle, the five debugging steps from reproduction to a regression test, and the difference between symptom and root cause.',
            },
          ],
        },
      ],
    },
  ],
};
