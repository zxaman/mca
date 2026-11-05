// Software Testing and Quality Assurance — Unit III: Software Testing Techniques
export const softwareTestingUnit3Topics = [
  {
    "id": "static-testing",
    "number": "3.1",
    "title": "Static Testing",
    "subtitle": "Humans dwara review aur static analysis tools — bina code chalaye",
    "icon": "eye",
    "accent": "#0047ff",
    "englishDefinition": "Static Testing is a form of software testing where the software is examined without executing the code. It includes static testing by humans, such as informal reviews, walkthroughs, technical reviews and formal inspections, and static testing by tools, such as compilers, linters, style checkers, static application security testing (SAST) tools and code metrics analysers. Static testing is also called non-execution based testing and is most effective when applied early in the life cycle.",
    "intro": "Static testing ka matlab hai software ko chalaye bina usko examine karna. Do tarike hain — insaan padh kar (reviews) aur tools se (static analysis). Kyunki defect requirement aur design phase mein hi pakad liya jaata hai, cost sabse kam lagti hai. Isi liye static testing ko \"early defect detection\" ka sabse sasta hathiyar kaha jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Static Testing Kya Hai",
        "kicker": "Definition",
        "body": "Static testing mein code execute nahi hota. Hum documents, design, code aur test cases ko padhte, padhte, checklist se compare karte hain. Isme do bade hisse hain: 1. Human based — informal review, walkthrough, technical review, inspection. 2. Tool based — compiler, linter, style checker, SAST, code metrics tool. Static testing ko verification kaha jaata hai: \"kya hum cheez sahi bana rahe hain\" — dynamic testing validation hai: \"kya bana hua cheez sahi chal rahi hai\".",
        "body2": "Ek line mein: dynamic testing defect ka effect dikhata hai, static testing defect ki wajah dikhata hai. Isi liye static testing mein defect ka exact line, exact word mil jaata hai — failure ka wait nahi karna padta.",
        "chips": ["Non-execution", "Verification", "Early defect detection", "Reviews", "Static analysis"]
      },
      {
        "type": "points",
        "title": "Static Testing by Humans — 4 Levels",
        "kicker": "Human Based",
        "points": [
          "Informal Review: team member ko code ya document dikhana. Koi formal record nahi, sabse sasta aur sabse tez.",
          "Walkthrough: author khud apna code ya document samjhata hai. Team questions poochti hai. Purpose — learning aur early feedback.",
          "Technical Review: peers (senior developer, architect) design aur code check karte hain. Findings document hoti hain, actions assign hote hain.",
          "Inspection: sabse formal review. Fagan inspection — 6 steps: planning, kick-off, preparation, inspection meeting, rework, follow-up. Roles: moderator, author, reader, recorder, reviewers. Checklist ke against ek-ek line check hoti hai.",
          "Review ke fayde: defect early milta hai, knowledge sharing hoti hai, team communication improve hoti hai, cost aur rework bachta hai."
        ]
      },
      {
        "type": "points",
        "title": "Static Testing by Tools — Static Analysis",
        "kicker": "Tool Based",
        "points": [
          "Compiler / Linter: syntax error, unused variable, missing return, deprecated API. Example — ESLint, Checkstyle, gcc -Wall.",
          "Style checker: coding standard follow hua ya nahi. Indentation, naming convention, line length. Example — PMD, SonarQube rules.",
          "SAST (Static Application Security Testing): injection, XSS, hard-coded password, weak crypto. Example — SonarQube, Snyk, Fortify, Semgrep.",
          "Data flow / control flow analysis: variable kab set hua aur kab use hua, dead code, unreachable code, infinite loop.",
          "Metrics analyser: cyclomatic complexity, LOC, duplication, coupling, maintainability index — complexity zyada to review aur test dono badhao."
        ]
      },
      {
        "type": "cards",
        "title": "Review Ke Roles",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "user", "title": "Author", "body": "Jisne document ya code likha hai. Review ke liye prepare karta hai aur findings par rework karta hai." },
          { "icon": "flag", "title": "Moderator", "body": "Review chalata hai. Time aur agenda control karta hai, discussion ko personal hone se rokta hai." },
          { "icon": "doc", "title": "Recorder / Scribe", "body": "Har finding likhta hai — kya mila, kaun uthayega, kab tak. Inspection ka record isi se banta hai." },
          { "icon": "users", "title": "Reviewers", "body": "Checklist ke against document ya code padhte hain aur defects raise karte hain." }
        ]
      },
      {
        "type": "diagram",
        "title": "Static Testing Overview",
        "kicker": "Diagram",
        "diagram": "st3-static",
        "caption": "Static Testing — humans dwara reviews aur tools dwara static analysis, dono execution ke bina"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Static testing = code execute nahi hota, sirf padha aur analyse kiya jaata hai.",
          "Human based: informal review, walkthrough, technical review, inspection (Fagan, 6 steps).",
          "Tool based: compiler, linter, style checker, SAST, metrics analyser.",
          "Static = verification, dynamic = validation.",
          "Sabse sasta defect removal: jo defect review mein mil gaya wo production tak pahunchta hi nahi.",
          "Limit: runtime behaviour, performance aur environment issues static testing nahi pakad sakti."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is static testing? Explain static testing by humans and by tools.",
        "answer": "**Static Testing:** Software ko execute kiye bina usko examine karna. Isme code, design, requirement document aur test cases padhe jaate hain. Ye verification technique hai — defect ka cause milta hai, effect nahi.\n\n**1. Static Testing by Humans (Reviews):**\n- **Informal review** — team member ko dikhana, koi record nahi, sabse sasta.\n- **Walkthrough** — author khud samjhata hai, team questions poochti hai, learning purpose.\n- **Technical review** — peers/architect design aur code check karte hain, findings document hoti hain.\n- **Inspection** — most formal; Fagan ke 6 steps: planning, kick-off, preparation, meeting, rework, follow-up; roles: moderator, author, reader, recorder, reviewers.\n\n**2. Static Testing by Tools (Static Analysis):**\n- **Compiler / linter** — syntax error, unused variable, warning (ESLint, gcc -Wall).\n- **Style checker** — coding standard, naming, indentation (PMD, SonarQube).\n- **SAST** — security flaws: SQL injection, XSS, hard-coded secret (SonarQube, Snyk, Fortify).\n- **Data/control flow analysis** — dead code, unreachable code, uninitialised variable.\n- **Metrics tool** — cyclomatic complexity, LOC, duplication, coupling.\n\n**Advantages:** defect early milta hai isliye cost kam, rework kam, quality improve, team knowledge sharing.\n**Limitation:** runtime behaviour, performance aur hardware interaction nahi pakad sakta — isliye dynamic testing zaroori hai.\n\n**Diagram:** Refer to Static Testing Overview diagram."
      },
      {
        "question": "Differentiate between static testing and dynamic testing.",
        "answer": "**Static Testing vs Dynamic Testing:**\n\n| Point | Static Testing | Dynamic Testing |\n|---|---|---|\n| Execution | Code execute nahi hota | Code execute hota hai |\n| Technique | Verification | Validation |\n| Kya check | Document, design, code, syntax, standard | Actual behaviour, output, performance |\n| Kab | Requirement, design, coding phase (early) | Code complete hone ke baad |\n| Defect type | Syntax, standard, logic, missing requirement | Runtime error, wrong output, crash, slow response |\n| Cost | Kam — defect early milta hai | Zyada — fix aur retest chahiye |\n| Kaun karta | Reviewer, static analysis tool | Tester, automation tool |\n| Example | Walkthrough, inspection, linter, SAST | Unit test, integration test, system test, load test |\n\n**Key Point:** Static testing defect ki root cause batata hai, dynamic testing defect ka effect dikhata hai. Dono complementary hain — ek doosre ko replace nahi karte.\n\n**Diagram:** Refer to Static Testing Overview diagram."
      },
      {
        "question": "Explain the formal inspection process with roles.",
        "answer": "**Formal Inspection (Fagan Inspection) — 6 Steps:**\n\n1. **Planning** — Moderator decide karta hai kaunsa document/code review hoga, kaun participate karega, entry criteria kya hai.\n2. **Kick-off** — Poori team ko kaam baanta jaata hai, checklist di jaati hai, purpose clear hota hai.\n3. **Preparation** — Har reviewer akela document padhta hai aur checklist ke against findings note karta hai.\n4. **Inspection Meeting** — Moderator meeting chalata hai, findings discuss hoti hain (solution discuss nahi hota, sirf defect record hota hai), recorder sab likhta hai.\n5. **Rework** — Author findings ke hisaab se document/code theek karta hai.\n6. **Follow-up** — Moderator check karta hai ki saare defects fix hue ya nahi; phir inspection close.\n\n**Roles:**\n- **Moderator** — process chalata hai, time control karta hai.\n- **Author** — jisne artefact likha, rework karta hai.\n- **Reader** — meeting mein document padh kar samjhata hai.\n- **Recorder / Scribe** — har finding likhta hai.\n- **Reviewers** — checklist ke against defects dhoondhte hain.\n\n**Checklist examples:** requirement traceable hai? error handling documented hai? naming convention follow hui? magic number nahi hai?\n\n**Diagram:** Refer to Static Testing Overview diagram."
      }
    ]
  },
  {
    "id": "structural-testing",
    "number": "3.2",
    "title": "Structural Testing: Unit / Code Functional Testing",
    "subtitle": "White-box testing — code ke andar ka structure aur unit level testing",
    "icon": "test",
    "accent": "#ff0080",
    "englishDefinition": "Structural Testing, also known as white-box or glass-box testing, is a testing technique in which test cases are derived from the internal structure of the code rather than from the requirements. It is performed at unit level, where individual functions, methods or classes are tested in isolation using stubs and drivers, and every statement, branch, condition and path is exercised. Unit testing is the smallest level of functional testing in the test levels of the software life cycle.",
    "intro": "Structural testing mein tester code dekh sakta hai — isliye ise white-box ya glass-box bhi kehte hain. Test cases requirement se nahi, code ke structure se derive hote hain: kaunsi line, kaunsa if-else, kaunsa path. Iska sabse aam roop hai unit testing — ek function ko alag se test karna, baaki duniya ko stub aur driver se replace karke.",
    "sections": [
      {
        "type": "definition",
        "title": "Structural Testing Kya Hai",
        "kicker": "Definition",
        "body": "Structural testing mein code ka internal logic padha jaata hai — control flow, data flow, conditions aur loops. Test cases aise chune jaate hain ki code ka har hissa kam se kam ek baar chale. Levels: 1. Statement testing — har statement ek baar. 2. Branch/decision testing — har if-else ka dono taraf. 3. Condition testing — compound condition ke har part ka true/false. 4. Path testing — basis paths (cyclomatic complexity jitne). 5. Loop testing — zero, one, typical, maximum, maximum+1 iterations.",
        "body2": "White-box testing ka fayda: code ka dead code aur unreachable branch turant dikh jaata hai. Nuksaan: requirement missing ho to code perfect hoke bhi product galat ho sakta hai — isliye black-box testing ke saath mila kar chalta hai.",
        "chips": ["White-box", "Glass-box", "Unit level", "Branch", "Path", "Basis path"]
      },
      {
        "type": "definition",
        "title": "Unit / Code Functional Testing",
        "kicker": "Unit Testing",
        "body": "Unit testing sabse chhota level hai — ek function, method ya class ko baaki code se alag karke test karna. Structure: Arrange (input aur mocks ready karo), Act (function call karo), Assert (expected vs actual compare karo). Isolation ke liye: 1. Stub — fake function jo fixed value return karta hai (neeche ka module). 2. Mock — fake object jo behaviour verify karta hai. 3. Driver — test ko chhota sa code jo unit ko call karta hai (upar ka module).",
        "body2": "Unit test developer khud likhta hai, fast hota hai, har commit par CI mein chalta hai. Ek achha unit test sirf ek behaviour test karta hai, external database ya network par depend nahi karta. Tools: JUnit (Java), PHPUnit (PHP), pytest (Python), Jest (JavaScript), NUnit (.NET).",
        "chips": ["Arrange-Act-Assert", "Stub", "Mock", "Driver", "CI", "Fast feedback"]
      },
      {
        "type": "points",
        "title": "Structural Coverage Ke Aadhaar",
        "kicker": "Types",
        "points": [
          "Statement coverage: har executable statement ek baar chale. Sabse kamzor criteria — if ke bina else bhi statement se cover ho sakta hai.",
          "Branch (decision) coverage: har decision ka true aur false dono. Example: if (amt >= 5000) ke dono raaste.",
          "Condition coverage: compound condition ka har atomic part true aur false ho. if (a && b) mein a aur b alag-alag.",
          "Path coverage: start se end tak har possible path. Sabse strong, sabse mehnga — 2 ki power decisions ke barabar ho sakta hai.",
          "Loop testing: loop zero baar, ek baar, typical baar, maximum baar, maximum+1 baar chalao.",
          "Data flow testing: variable ka define (def) aur use (use) — def-use pair test karo, uninitialised use pakdo."
        ]
      },
      {
        "type": "diagram",
        "title": "Structural Testing — Unit Level Paths",
        "kicker": "Diagram",
        "diagram": "st3-structural",
        "caption": "Ek function ke teen independent paths aur unke expected output — teeno test cases zaroori"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Structural testing = white-box testing, test cases code ke structure se aate hain.",
          "Unit testing sabse chhota level — ek function, isolated, stub/driver ke saath.",
          "Arrange → Act → Assert pattern har unit test mein.",
          "Coverage hierarchy: statement < branch < condition < path.",
          "Fayda: dead code, unreachable branch, missing condition pakadta hai.",
          "Limit: requirement galat ho to white-box testing nahi pakad sakti."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is structural testing? Explain its types with examples.",
        "answer": "**Structural Testing (White-box Testing):** Test cases code ke internal structure se derive kiye jaate hain, requirements se nahi. Tester ko code dikhta hai.\n\n**Types:**\n1. **Statement testing** — har statement ek baar execute ho. Coverage = executed statements / total statements × 100.\n2. **Branch (decision) testing** — har if/loop ka true aur false dono. Example: if (amt >= 5000) — ek test 6000 se, ek 2000 se.\n3. **Condition testing** — if (age > 18 && citizen) mein age aur citizen dono ke true/false combinations.\n4. **Path testing** — basis path testing: cyclomatic complexity V(G) jitne independent path test karo.\n5. **Loop testing** — 0, 1, typical, max, max+1 iterations (boundary off-by-one yahin pakadta hai).\n6. **Data flow testing** — variable ki def-use chain, uninitialised variable ka use.\n\n**Example (PHP):**\nfunction discount($amt, $member) { $d = $amt >= 5000 ? 0.10 : 0.05; if ($member) $d += 0.02; return $amt * $d; }\n- P1: amt=6000, member=false → 600\n- P2: amt=2000, member=false → 100\n- P3: amt=2000, member=true → 140\nTeeno path chalane par statement, branch aur condition sab cover ho jaate hain.\n\n**Diagram:** Refer to Structural Testing diagram."
      },
      {
        "question": "What is unit testing? Explain stubs and drivers with examples.",
        "answer": "**Unit Testing:** Sabse chhota test level. Ek function, method ya class ko baaki system se alag karke test karna. Developer khud likhta hai aur har commit par CI mein chalta hai.\n\n**Structure (AAA):**\n- **Arrange** — input aur fake dependencies ready karo.\n- **Act** — function call karo.\n- **Assert** — expected aur actual compare karo.\n\n**Stub:** Fake module jo fixed/controlled value return karta hai. Real dependency ki jagah lagta hai. Example: database stub jo hamesha ek fixed user object return kare — function ka logic test hoga, DB nahi.\n\n**Driver:** Chhota test program jo unit ko call karta hai aur output check karta hai. Jab module uppar wale module ke bina test karna ho tab driver chahiye. Example: main() jo calculateTotal() ko different inputs ke saath call kare.\n\n**Kab kya:**\n- Neeche ki dependency missing → **stub** lagao (top-down integration).\n- Upar ka caller missing → **driver** likho (bottom-up integration).\n\n**Benefits:** defect jaldi milta hai, refactoring safe hota hai, documentation ka kaam karta hai, regression pakadta hai.\n**Limitation:** integration issues nahi pakadta — isliye integration testing zaroori hai.\n\n**Diagram:** Refer to Structural Testing diagram."
      },
      {
        "question": "Explain white-box testing techniques and their advantages and limitations.",
        "answer": "**White-box Testing Techniques:**\n1. **Statement coverage** — har line ek baar (sabse weak).\n2. **Branch coverage** — har decision ke dono raaste.\n3. **Condition coverage** — compound condition ke har part ka true/false.\n4. **Path coverage** — har independent path (V(G) se count).\n5. **Loop testing** — 0, 1, typical, max, max+1.\n6. **Data flow testing** — def-use pairs, uninitialised use, dead assignment.\n7. **Mutation testing (advanced)** — code mein chhoti galti daal kar test suite ki strength naapo.\n\n**Advantages:**\n- Dead code aur unreachable branch turant milta hai.\n- Missing condition aur off-by-one boundary pakadta hai.\n- Tester ko code ka knowledge milta hai, debugging aasan hoti hai.\n- Coverage ka measurable proof milta hai.\n\n**Limitations:**\n- Requirement hi missing/galat ho to ye technique nahi pakadti.\n- Skilled tester chahiye, code accessible hona chahiye.\n- Path coverage bade code mein explode kar jaata hai.\n- Environment, performance aur hardware issues cover nahi hote.\n- 100% coverage ka matlab bug-free nahi hota.\n\n**Diagram:** Refer to Structural Testing diagram."
      }
    ]
  },
  {
    "id": "code-coverage-testing",
    "number": "3.3",
    "title": "Code Coverage Testing",
    "subtitle": "Statement, branch, condition, path aur MC/DC coverage ko naapna",
    "icon": "grid",
    "accent": "#00aaff",
    "englishDefinition": "Code coverage is a white-box testing metric that measures the degree to which the source code of a program has been exercised by a test suite. It is expressed as a percentage calculated by dividing the number of covered items by the total number of items and multiplying by 100. Common types are statement coverage, branch coverage, condition coverage, path coverage, function coverage and modified condition/decision coverage (MC/DC).",
    "intro": "Code coverage ek measurement hai — hamare tests ne code ka kitna hissa chalaya. Coverage 100% ka matlab ye nahi ki software bug-free hai, par coverage kam hone ka matlab pakka hai ki code ka kuch hissa test hua hi nahi. Isliye coverage ko target nahi, indicator maanna chahiye.",
    "sections": [
      {
        "type": "definition",
        "title": "Code Coverage Kya Hai",
        "kicker": "Definition",
        "body": "Code coverage = (covered items ÷ total items) × 100. Tool test chalate waqt track karta hai kaunsi line, kaunsa branch, kaunsa condition chala. Report HTML mein line-by-line highlight ke saath aati hai — green chala, red nahi chala, yellow partially. Common types: 1. Statement (line) coverage. 2. Branch (decision) coverage. 3. Condition coverage. 4. Path coverage. 5. Function coverage. 6. MC/DC (Modified Condition/Decision Coverage).",
        "body2": "Coverage ka asli fayda: jagah dhoondhna jahan test nahi hai. Tool ke report mein red lines dekho — wahan either missing requirement hai, dead code hai, ya test case missing hai. Teeno hi cases important hain.",
        "chips": ["Coverage %", "Statement", "Branch", "Condition", "Path", "MC/DC"]
      },
      {
        "type": "points",
        "title": "Coverage Types — Strength Ke Order Mein",
        "kicker": "Types",
        "points": [
          "Statement (line) coverage: har executable line ek baar chali. 90% statement coverage par bhi else block chhoot sakta hai.",
          "Branch (decision) coverage: har decision ka true aur false. Industry mein sabse useful pactice — target 70–90%.",
          "Condition coverage: compound condition ke har atomic condition ka true aur false.",
          "Path coverage: har possible path. 3 decisions ke baad 8 paths, 10 decisions ke baad 1024 — isliye practical nahi.",
          "MC/DC: har condition independently result ko badle — safety critical (aviation DO-178C, automotive ISO 26262) mein required.",
          "Function coverage: har function call hua ya nahi — quick smoke check ke liye useful."
        ]
      },
      {
        "type": "points",
        "title": "Coverage Ke Fayde Aur Traps",
        "kicker": "Best Practice",
        "points": [
          "Fayda: untested code dhoondhna, regression ka proof, CI gate, refactoring ka confidence.",
          "Trap 1: 100% statement coverage ka matlab bug-free nahi — requirement hi missing ho sakti hai.",
          "Trap 2: Assertion ke bina test coverage badhata hai par defect nahi pakadta (assertion-free tests).",
          "Trap 3: Coverage target ban jaaye to log meaningless test likhne lagte hain — target nahi, indicator maano.",
          "Trap 4: Generated code, getter/setter aur config file coverage ko distort kar dete hain — exclude karo.",
          "Sahi tareeka: branch coverage 70–90%, plus mutation score, plus requirement coverage — teeno mila kar quality naapo."
        ]
      },
      {
        "type": "diagram",
        "title": "Coverage Ka Same Test Suite Par Alag Alag Score",
        "kicker": "Diagram",
        "diagram": "st3-coverage",
        "caption": "Ek hi test suite — statement 92%, branch 78%, condition 65%, path 40% coverage deta hai"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Coverage % = covered ÷ total × 100.",
          "Hierarchy: statement < branch < condition < path < MC/DC (strength mein).",
          "Branch coverage industry ka practical target — 70% se 90%.",
          "Coverage batata hai kitna chala, mutation testing batata hai kitna pakda.",
          "100% coverage ≠ bug-free; requirement coverage alag cheez hai.",
          "Tools: JaCoCo (Java), Istanbul/nyc (JS), coverage.py (Python), gcov (C), PHPUnit coverage (PHP)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is code coverage? Explain its types with formulas.",
        "answer": "**Code Coverage:** White-box metric jo batata hai test suite ne source code ka kitna hissa execute kiya. Formula: **coverage % = (covered items ÷ total items) × 100**.\n\n**Types:**\n1. **Statement coverage** = executed statements ÷ total statements × 100. Example: 46/50 = 92%.\n2. **Branch coverage** = executed branches ÷ total branches × 100. if-else ke dono raaste zaroori.\n3. **Condition coverage** = evaluated atomic conditions ÷ total conditions × 100.\n4. **Path coverage** = executed paths ÷ total paths × 100. (2^n type growth.)\n5. **Function coverage** = called functions ÷ total functions × 100.\n6. **MC/DC** — har condition independently decision ko badal sake; safety critical systems mein required.\n\n**Example:** if (a > 0 && b > 0) — statement coverage ke liye ek test (a=1,b=1) kaafi ho sakta hai; branch coverage ke liye false case bhi; condition coverage ke liye (a=1,b=-1) aur (a=-1,b=1) bhi chahiye.\n\n**Tools:** JaCoCo, Istanbul/nyc, coverage.py, gcov, PHPUnit --coverage, SonarQube dashboard.\n\n**Diagram:** Refer to Code Coverage diagram."
      },
      {
        "question": "Does 100% code coverage guarantee bug-free software? Justify.",
        "answer": "**Answer: Nahi.** 100% coverage ka matlab sirf ye hai ki har line/branch kam se kam ek baar chala — ye guarantee nahi ki sahi output aaya.\n\n**Kyun nahi:**\n1. **Missing requirement** — requirement hi code mein nahi hai, to coverage 100% hoke bhi feature missing hoga.\n2. **Assertion-free tests** — test chal gaya par expected value check hi nahi kiya, defect pass ho jaayega.\n3. **Wrong expected value** — test galat expectation likh deta hai, coverage badhti hai par defect chhup jaata hai.\n4. **Data dependent defect** — ek input par chala, doosre input (boundary) par fail hoga.\n5. **Non-functional gaps** — performance, security, concurrency, usability coverage se bahar hain.\n6. **Environment** — production ka data volume, network, hardware test nahi hua.\n\n**Sahi interpretation:** coverage ek *indicator* hai — kam coverage pakka signal hai ki testing adhoori hai; high coverage sirf ek zaroori shart hai, poora proof nahi.\n\n**Aur kya dekhein:** mutation score, requirement coverage (RTM), defect density, exploratory testing, non-functional testing.\n\n**Diagram:** Refer to Code Coverage diagram."
      },
      {
        "question": "Explain the coverage hierarchy: statement, branch, condition, path and MC/DC.",
        "answer": "**Coverage Hierarchy (weak se strong):**\n\n1. **Statement coverage** — har line ek baar. Weakest: if ke bina else bhi cover ho sakta hai.\n2. **Branch coverage** — har decision ka true aur false. 100% branch coverage 100% statement coverage ko include karta hai.\n3. **Condition coverage** — compound condition ke har part ka true/false, par saare combinations zaroori nahi.\n4. **Path coverage** — start se end tak har possible path. Strongest practical criterion, par paths exponentially badhte hain (n decisions → up to 2^n paths).\n5. **MC/DC** — har condition ko independently decision ka result badalna chahiye + har decision ka true/false + har entry/exit ek baar. Aviation/rail/automotive mein required; n conditions ke liye approx n+1 test cases.\n\n**Practical rule:** branch coverage 70–90% target rakho, critical modules mein path/MC/DC tak jao, aur coverage ke saath mutation testing chala kar test ki quality verify karo.\n\n**Diagram:** Refer to Code Coverage diagram."
      }
    ]
  },
  {
    "id": "code-complexity-testing",
    "number": "3.4",
    "title": "Code Complexity Testing",
    "subtitle": "Cyclomatic complexity, Halstead aur basis path testing",
    "icon": "metrics",
    "accent": "#ff8800",
    "englishDefinition": "Code complexity testing measures the complexity of a program to estimate the effort required for testing and maintenance. The most widely used measure is cyclomatic complexity V(G), defined as V(G) = E − N + 2P, where E is the number of edges, N the number of nodes and P the number of connected components of the control flow graph, and equivalently as the number of decision points plus one. Cyclomatic complexity also gives the minimum number of independent paths to be tested in basis path testing.",
    "intro": "Complexity testing ka seedha matlab hai — code kitna uljha hua hai, wahi tay karta hai kitne test case chahiye aur defect ka risk kitna hai. Sabse popular metric hai cyclomatic complexity V(G). V(G) ki value jitni zyada, utne zyada independent path, utne zyada test case.",
    "sections": [
      {
        "type": "definition",
        "title": "Cyclomatic Complexity V(G)",
        "kicker": "Definition",
        "body": "V(G) control flow graph (CFG) ki complexity naapta hai. Teen tarike: 1. V(G) = E − N + 2P (E edges, N nodes, P connected components). 2. V(G) = decision points + 1 (har if, while, for, case, && , || ek decision). 3. V(G) = CFG ke enclosed regions ki ginti. V(G) ki value batati hai kam se kam kitne independent paths test karne hain — isi ko basis path testing kehte hain.",
        "body2": "Example: N = 6 nodes, E = 7 edges → V(G) = 7 − 6 + 2 = 3. Matlab 3 independent path test karne hain, aur teeno milkar har edge cover kar denge. Decision based ginti bhi wahi deti hai: do decisions + 1 = 3.",
        "chips": ["V(G)", "E − N + 2P", "Decision points + 1", "Basis path", "CFG"]
      },
      {
        "type": "points",
        "title": "Threshold Aur Testing Par Asar",
        "kicker": "Interpretation",
        "points": [
          "1–10: simple, risk kam, normal testing kaafi.",
          "11–20: moderate, test cases aur review badhao.",
          "21–50: complex, refactor ka sochein, module todna chahiye.",
          "50+: untestable — maintain karna bhi mushkil, redesign zaroori.",
          "High V(G) ka matlab: zyada path = zyada test case = zyada regression cost = zyada defect probability.",
          "Kam karne ke tareeke: chhote functions, early return, guard clause, deep nesting hatao, extract method, polymorphism se switch hatao.",
          "V(G) sirf control flow dekhta hai — loop ki length aur data dependency nahi. Isliye cognitive complexity aur Halstead ke saath padhein."
        ]
      },
      {
        "type": "cards",
        "title": "Doosre Complexity Metrics",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "metrics", "title": "Halstead Metrics", "body": "Operators aur operands ki ginti se volume, difficulty, effort aur bugs estimate karta hai. Program ki size aur information content naapta hai." },
          { "icon": "layers", "title": "Nesting Depth", "body": "Kitne andar tak if/loop nested hain. 3 se zyada nesting padhna mushkil — defect ka ghar." },
          { "icon": "target", "title": "Cognitive Complexity", "body": "Insaan ke liye code samajhna kitna mushkil hai — nesting, breaks, recursion ko weight deta hai. SonarQube ise use karta hai." },
          { "icon": "trends", "title": "Maintainability Index", "body": "Halstead, V(G), LOC aur comment ratio mila kar 0–100 score. Kam score = costly maintenance." }
        ]
      },
      {
        "type": "diagram",
        "title": "Control Flow Graph Aur V(G)",
        "kicker": "Diagram",
        "diagram": "st3-complexity",
        "caption": "N = 6 nodes, E = 7 edges → V(G) = 3, matlab 3 independent paths test karne hain"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "V(G) = E − N + 2P = decision points + 1 = regions ki ginti.",
          "V(G) = minimum number of independent paths = minimum test cases (basis path testing).",
          "Bands: 1–10 simple, 11–20 moderate, 21–50 complex, 50+ untestable.",
          "Complexity zyada = test cases zyada + defect risk zyada + maintenance costly.",
          "Halstead, nesting depth, cognitive complexity, maintainability index complementary metrics hain.",
          "Tools: SonarQube, PMD, ESLint complexity rule, PHPMD."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is cyclomatic complexity? How is it calculated and used in testing?",
        "answer": "**Cyclomatic Complexity V(G):** Control flow graph ki complexity naapne wala metric. Ye batata hai code mein kitne independent paths hain.\n\n**Formulas:**\n1. **V(G) = E − N + 2P** — E edges, N nodes, P connected components (aksar 1).\n2. **V(G) = decision points + 1** — har if, while, for, case, && / || ek decision.\n3. **V(G) = enclosed regions ki ginti** CFG mein.\n\n**Example:** N = 6, E = 7 → V(G) = 7 − 6 + 2 = 3.\n\n**Testing mein use:**\n- **Basis path testing** — kam se kam V(G) independent path test karo; teeno path milkar har edge cover karte hain.\n- **Test effort estimate** — high V(G) to zyada test cases aur zyada review effort.\n- **Risk indicator** — jahan V(G) zyada wahan defect density zyada.\n- **Refactoring signal** — 10 se zyada hua to function todne ka socho.\n\n**Bands:** 1–10 simple, 11–20 moderate, 21–50 complex, 50+ untestable.\n**Kam karne ke tareeke:** chhote functions, early return, guard clauses, nesting hatao, extract method, switch ko polymorphism se replace karo.\n\n**Diagram:** Refer to Cyclomatic Complexity diagram."
      },
      {
        "question": "Explain basis path testing with steps.",
        "answer": "**Basis Path Testing:** White-box technique jisme V(G) jitne independent paths test kiye jaate hain — inhe basis set kehte hain.\n\n**Steps:**\n1. **Control flow graph banao** — program ke statements/nodes aur control transfer ke edges.\n2. **V(G) calculate karo** — E − N + 2P ya decision points + 1.\n3. **Independent paths identify karo** — har naye path mein kam se kam ek naya edge ho.\n4. **Har path ke liye test input choose karo** — expected output ke saath.\n5. **Test cases execute karo** aur results compare karo.\n\n**Example:** N = 6, E = 7 → V(G) = 3 → teen basis paths:\n- P1: 1 → 2 → 3 → 4 → 3 → 4 → 6 (valid, retry ek baar)\n- P2: 1 → 2 → 3 → 4 → 6 (valid, ek hi try)\n- P3: 1 → 2 → 5 → 6 (invalid input, sidha end)\n\n**Fayda:** har edge kam se kam ek baar cover hota hai, minimum test cases mein maximum structural coverage.\n**Limit:** data dependent bug aur missing requirement nahi pakadta; complex graphs mein paths badh jaate hain.\n\n**Diagram:** Refer to Cyclomatic Complexity diagram."
      },
      {
        "question": "Which complexity metrics are used besides cyclomatic complexity? Explain.",
        "answer": "**Cyclomatic complexity ke alawa:**\n\n1. **Halstead metrics** — program ke operators (n1) aur operands (n2) se: Volume V = N log2 n, Difficulty D = (n1/2)(N2/n2), Effort E = D×V. Ye program ki size aur samajhne ka effort estimate karta hai.\n\n2. **Nesting depth** — maximum kitne levels tak if/for nested hain. 3 se zyada nesting ko defect-prone maana jaata hai.\n\n3. **Cognitive complexity** — SonarQube ka metric: nesting, breaks, recursion, boolean chains ko weight deta hai; insaan ke liye code padhna kitna mushkil hai, ye batata hai (cyclomatic se zyada realistic).\n\n4. **Maintainability index** — Halstead volume, V(G), LOC aur comment ratio ka formula; 0–100 score. 20 se kam = very hard to maintain.\n\n5. **LOC / SLOC** — size ka simple measure; comment ratio ke saath padho.\n\n6. **Coupling aur cohesion** — modules ke beech dependency (coupling low) aur module ke andar focus (cohesion high) achhe design ke sign hain.\n\n7. **Duplication** — copy-paste code; ek jagah fix, doosri jagah bug.\n\n**Key Point:** koi ek metric poora sach nahi batata — cyclomatic + cognitive + duplication + coverage mila kar decision lena chahiye.\n\n**Diagram:** Refer to Cyclomatic Complexity diagram."
      }
    ]
  },
  {
    "id": "mutation-testing",
    "number": "3.5",
    "title": "Mutation Testing",
    "subtitle": "Code mein jaan-boojh kar galti daal kar test suite ki taakat naapna",
    "icon": "virus",
    "accent": "#aa00ff",
    "englishDefinition": "Mutation Testing is a fault-based software testing technique in which small, deliberate modifications called mutations are introduced into the source code to create faulty versions called mutants. The test suite is then run against each mutant; if the tests fail the mutant is said to be killed, and if the tests still pass the mutant survives, indicating a weakness in the test suite. The effectiveness of the suite is measured by the mutation score, the ratio of killed mutants to the total number of non-equivalent mutants.",
    "intro": "Mutation testing ek ulta sawaal poochta hai — \"mere test kitne achhe hain?\" Iske liye hum code ko chhota sa galat karte hain (mutant banate hain) aur dekhte hain test fail hota hai ya nahi. Agar test fail hua to mutant mar gaya — matlab test ne galti pakdi. Agar test pass ho gaya to mutant bach gaya — matlab test suite mein hole hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Mutation Testing Kya Hai",
        "kicker": "Definition",
        "body": "Process: 1. Original code copy karo. 2. Mutation operator se ek chhoti badlav karo. 3. Poori test suite chalao. 4. Test fail hua → mutant killed (achha). Test pass hua → mutant survived (test weak). 5. Har mutant ke liye repeat karo. 6. Mutation score nikalo. Mutation operators: arithmetic (+ → −, * → /), relational (> → >=, == → !=), logical (&& → ||, ! hatao), constant (18 → 17, 0 → 1), statement deletion, return value change.",
        "body2": "Mutation score = killed ÷ (total mutants − equivalent mutants) × 100. Example: 90 mutants, 2 equivalent, 82 killed → 82 ÷ 88 × 100 = 93.2%. Equivalent mutant wo hota hai jiska behaviour original se bilkul same ho — usse koi test maar hi nahi sakta, isliye ginti se hata dete hain.",
        "chips": ["Mutant", "Killed", "Survived", "Equivalent", "Mutation score"]
      },
      {
        "type": "points",
        "title": "Survived Mutant Ka Matlab Kya Hai",
        "kicker": "Interpretation",
        "points": [
          "Test ne wo case cover hi nahi kiya — test case missing hai.",
          "Test ne cover kiya par assert nahi kiya — assertion-free test.",
          "Expected value galat likha gaya hai, isliye dono behaviour pass ho gaye.",
          "Code ka wo hissa dead ya unreachable hai — delete kar dena chahiye.",
          "Performance ke liye selective mutation karo: sirf important operators, sirf changed code (incremental/PR-level).",
          "Bade project mein nightly build par chalao — har mutant par poori suite chalti hai, isliye mehnga hai."
        ]
      },
      {
        "type": "cards",
        "title": "Mutation Testing Ke Concepts",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "virus", "title": "Mutant", "body": "Original code ki ek chhoti si badli hui copy. Ek mutation operator se banti hai." },
          { "icon": "check", "title": "Killed Mutant", "body": "Mutant par kam se kam ek test fail hua. Matlab test suite ne galti pakad li." },
          { "icon": "alert", "title": "Survived Mutant", "body": "Saare test pass ho gaye — suite weak hai, ya code equivalent hai." },
          { "icon": "loop", "title": "Mutation Score", "body": "killed ÷ (total − equivalent) × 100. 80%+ achha maana jaata hai." }
        ]
      },
      {
        "type": "diagram",
        "title": "Mutant Kaise Banta Aur Marta Hai",
        "kicker": "Diagram",
        "diagram": "st3-mutation",
        "caption": "Operator badla, test chalaya, mutant bacha — matlab test suite weak hai"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Mutation testing fault-based technique hai — code mein galti daal kar test ki quality naapte hain.",
          "Killed = test fail (achha), Survived = test pass (weak test), Equivalent = behaviour same.",
          "Score = killed ÷ (total − equivalent) × 100.",
          "Coverage batata hai kitna chala, mutation batata hai kitna pakda.",
          "Tools: PIT (Java), Stryker (JS/TS), mutmut (Python), Infection (PHP).",
          "Mehnga hai — isliye selective operators, incremental mode aur nightly runs."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is mutation testing? Explain with an example and the mutation score.",
        "answer": "**Mutation Testing:** Fault-based white-box technique jisme code mein jaan-boojh kar chhoti galti (mutation) daali jaati hai, faulty copy ko mutant kehte hain, aur test suite chala kar dekha jaata hai ki galti pakdi gayi ya nahi.\n\n**Process:**\n1. Original code ki copy banao.\n2. Ek mutation operator apply karo (jaise >= ko > karo).\n3. Poori test suite chalao.\n4. Test fail → **killed**; test pass → **survived**.\n5. Har mutant ke liye repeat, phir score nikalo.\n\n**Example:**\nOriginal: `function isAdult($age) { return $age >= 18; }`\nMutant: `return $age > 18;`\nTest: isAdult(20)=true, isAdult(10)=false — dono pass ho jaate hain, kyunki 18 par hi farak padta hai. Mutant **survived** → test isAdult(18) add karo, phir mutant killed hoga.\n\n**Mutation operators:** arithmetic (+ → −), relational (> → >=), logical (&& → ||), constant (18 → 17), statement deletion, return value change.\n\n**Mutation Score = killed ÷ (total mutants − equivalent mutants) × 100.** Example: 90 mutants, 2 equivalent, 82 killed → 82/88 × 100 = 93.2%.\n\n**Diagram:** Refer to Mutation Testing diagram."
      },
      {
        "question": "Differentiate between mutation testing and code coverage.",
        "answer": "**Mutation Testing vs Code Coverage:**\n\n| Point | Mutation Testing | Code Coverage |\n|---|---|---|\n| Kya naapta | Test suite ki defect pakadne ki taakat | Code kitna execute hua |\n| Technique | Fault-based (code badal kar dekhte hain) | Structural (execution track karte hain) |\n| Metric | Mutation score % | Statement/branch/condition/path % |\n| Result ka matlab | Survived mutant = test weak | Covered line = line chali, quality ka proof nahi |\n| Cost | Mehnga (har mutant par suite) | Sasta (ek run) |\n| False confidence | Kam | Zyada — 100% coverage par bhi bug reh sakta hai |\n| Tool | PIT, Stryker, mutmut, Infection | JaCoCo, Istanbul, coverage.py, gcov |\n\n**Key Point:** Coverage batata hai \"kitna chala\", mutation batata hai \"test ne kitna pakda\". Isliye coverage ke saath mutation score dekho — high coverage + low mutation score ka matlab tests chal rahe hain par kuch verify nahi kar rahe.\n\n**Diagram:** Refer to Mutation Testing diagram."
      },
      {
        "question": "What are the limitations of mutation testing and how can they be reduced?",
        "answer": "**Limitations:**\n1. **Computationally expensive** — har mutant par poori test suite chalti hai; ek module mein sau mutants ho sakte hain.\n2. **Equivalent mutants** — kuch mutants ka behaviour original jaisa hota hai, unhe maar pana impossible; score ko distort karte hain.\n3. **Tool support** — har language ke liye mature tool nahi.\n4. **Flaky tests** — non-deterministic test mutation result ko galat dikha sakte hain.\n5. **Setup effort** — build, coverage config aur test speed theek honi chahiye.\n\n**Kam karne ke tareeke:**\n- **Selective mutation** — sirf high-value operators (relational, logical) chalao.\n- **Incremental mutation** — sirf changed code (PR diff) par chalao.\n- **Strong test suite pehle** — coverage theek ho tab mutation chalao.\n- **Parallel execution** — mutants ko parallel machines par baanto.\n- **Nightly/weekly runs** — har commit par nahi, scheduled build par.\n- **Equivalent mutants ko exclude** karne ke liye tool config aur manual review.\n\n**Diagram:** Refer to Mutation Testing diagram."
      }
    ]
  },
  {
    "id": "requirement-based-testing",
    "number": "3.6",
    "title": "Requirement Based Testing",
    "subtitle": "SRS se test cases derive karna aur RTM se trace karna",
    "icon": "doc",
    "accent": "#0047ff",
    "englishDefinition": "Requirement based testing is a black-box testing approach in which test cases are derived directly from the requirements specification, such as the Software Requirements Specification (SRS) and use cases, rather than from the code. Every requirement is verified by one or more test cases and the mapping between requirements and test cases is maintained in a Requirement Traceability Matrix (RTM) so that requirement coverage can be measured and no requirement is left untested.",
    "intro": "Requirement based testing mein hum poochte hain — \"user ne jo maanga tha, wahi bana hai?\" Test cases code se nahi, SRS se aate hain. Har requirement ke liye kam se kam ek test case, aur dono ke beech ka rishta Requirement Traceability Matrix (RTM) mein likha jaata hai. Isse pata chalta hai kaunsi requirement test hui, kaunsi nahi.",
    "sections": [
      {
        "type": "definition",
        "title": "Requirement Based Testing Kya Hai",
        "kicker": "Definition",
        "body": "Steps: 1. SRS padho aur requirement list banao (unique ID ke saath). 2. Har requirement ko testable statement mein todo. 3. Test condition aur test case design karo. 4. RTM banao: requirement ↔ test case ↔ result. 5. Execute karke result RTM mein update karo. 6. Requirement coverage = tested requirements ÷ total requirements × 100. Ambiguous requirement (\"system fast ho\") ko pehle clarify karo, tabhi test likho.",
        "body2": "RTM ka fayda sirf testing nahi — audit, compliance aur change impact analysis ke liye bhi. Requirement badle to RTM se turant pata chalta hai kaunse test cases update karne hain. Aur requirement delete ho to uske test cases orphan ban jaate hain, jo RTM mein dikhte hain.",
        "chips": ["SRS", "RTM", "Requirement coverage", "Traceability", "Black-box"]
      },
      {
        "type": "points",
        "title": "Requirement Ke Prakar Aur Unki Technique",
        "kicker": "Mapping",
        "points": [
          "Functional requirement → equivalence partitioning, boundary value analysis, decision table, use case testing.",
          "Business rule → decision table (saare condition combinations).",
          "Use case / user story → use case testing + acceptance criteria (Given-When-Then).",
          "Non-functional requirement → performance, load, security, usability testing (measurable target ke saath).",
          "Interface / API requirement → contract testing, schema validation, error code check.",
          "Regulatory / compliance requirement → checklist based testing, audit evidence RTM mein.",
          "Data requirement → data validation, migration aur volume testing."
        ]
      },
      {
        "type": "points",
        "title": "RTM Kaise Banayein",
        "kicker": "How To",
        "points": [
          "Columns: Requirement ID, Requirement description, Test case ID, Test result, Defect ID, Status.",
          "Rows: har requirement, chahe test ho ya na ho — khaali row bhi information hai.",
          "Forward traceability: requirement se test case tak — \"kya sab kuch test hua?\"",
          "Backward traceability: test case se requirement tak — \"ye test kis liye hai?\"",
          "Bidirectional traceability dono ko jodti hai — audit aur change impact ke liye best.",
          "Orphan test case = jiska requirement hi nahi; missing test case = jiska test nahi.",
          "Tool: Excel, JIRA (requirement aur test link), TestRail, Azure Test Plans."
        ]
      },
      {
        "type": "diagram",
        "title": "SRS Se RTM Tak",
        "kicker": "Diagram",
        "diagram": "st3-requirement",
        "caption": "Har requirement ka test case banao aur RTM mein result track karo"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Requirement based testing mein test cases SRS se derive hote hain, code se nahi.",
          "Har requirement ke liye kam se kam ek test case — requirement coverage naapo.",
          "RTM: requirement ↔ test case ↔ result — forward, backward, bidirectional traceability.",
          "Ambiguous requirement pehle clarify karo, warna test bhi galat hoga.",
          "Fayda: audit, compliance, change impact analysis, missing test ka pata.",
          "Limit: requirement hi galat ho to test pass hoke bhi product galat hoga."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is requirement based testing? Explain the role of the RTM.",
        "answer": "**Requirement Based Testing:** Black-box approach jisme test cases requirements specification (SRS, use case, user story) se derive kiye jaate hain, code se nahi. Purpose — verify karna ki jo maanga gaya tha wahi bana hai.\n\n**Steps:**\n1. Requirements collect karo aur unique ID do (R1, R2...).\n2. Har requirement ko testable statement mein todo (measurable, unambiguous).\n3. Test conditions aur test cases design karo.\n4. RTM banao.\n5. Execute karke result update karo.\n6. Requirement coverage = tested ÷ total × 100.\n\n**RTM (Requirement Traceability Matrix):**\n- Columns: Requirement ID, description, Test case ID, Result, Defect ID, Status.\n- **Forward traceability** — requirement se test case (kya sab test hua?).\n- **Backward traceability** — test case se requirement (ye test kis liye hai?).\n- **Bidirectional** — dono taraf; audit aur change impact analysis ke liye.\n\n**Benefits:** koi requirement untested nahi rehti, change ka impact turant pata chalta hai, audit/compliance evidence milta hai, orphan aur missing test cases dikhte hain, progress report aasan.\n\n**Diagram:** Refer to Requirement Based Testing diagram."
      },
      {
        "question": "How do you test an ambiguous requirement? Give examples.",
        "answer": "**Ambiguous requirement test nahi ho sakti** — pehle usko measurable banao.\n\n**Examples:**\n- \"System fast hona chahiye\" → \"Search results 2 second ke andar aane chahiye, 1000 concurrent users par\" → test: performance test with 1000 users, assert < 2s.\n- \"User friendly interface\" → \"Naya user bina training ke 3 minute mein registration kar sake\" → test: usability test, task completion time measure.\n- \"Password strong hona chahiye\" → \"Minimum 8 characters, 1 upper, 1 digit, 1 special; reuse nahi\" → test: EP + BVA per rule.\n- \"Report me sab data dikhe\" → \"Report mein 12 specified fields, latest 30 days ka data\" → test: field count aur date range verify.\n\n**Process:**\n1. Requirement ko identify karo (vague words: fast, easy, user-friendly, etc.).\n2. Business analyst / product owner se clarify karo.\n3. Acceptance criteria likho (measurable, testable).\n4. Clarification ko SRS mein update karo.\n5. Tab test case likho.\n\n**Key Point:** ambiguous requirement par test likhna time waste hai — expectation hi clear nahi to pass/fail kaise decide hoga.\n\n**Diagram:** Refer to Requirement Based Testing diagram."
      },
      {
        "question": "Explain forward, backward and bidirectional traceability with an example.",
        "answer": "**Traceability:** Requirement aur test artefact ke beech ka link.\n\n**1. Forward traceability (requirement → test case):**\nHar requirement ka test case dhoondhna. Question — \"kya har requirement test hui?\"\nExample: R1 login → TC1, TC2. RTM mein R3 ke aage khaali cell = R3 untested.\n\n**2. Backward traceability (test case → requirement):**\nHar test case ka requirement dhoondhna. Question — \"ye test kis requirement ke liye hai?\"\nExample: TC7 kisi requirement se link nahi = orphan test case (ya requirement delete ho gayi, ya test redundant).\n\n**3. Bidirectional traceability:**\nDono taraf link maintain karna — change impact analysis ka base.\nExample: R2 badla (password 8 se 10 characters) → backward link se turant pata chala TC3, TC4, TC5 update karne hain.\n\n**RTM example:**\n| Req | Test cases | Result |\n|---|---|---|\n| R1 login | TC1, TC2 | PASS |\n| R2 password 8+ | TC3, TC4 | PASS |\n| R3 lock after 3 fails | TC5 | FAIL |\n| R4 forgot password | TC6 | NOT RUN |\n\n**Requirement coverage = tested ÷ total × 100** → yahan 3/4 = 75%.\n\n**Diagram:** Refer to Requirement Based Testing diagram."
      }
    ]
  },
  {
    "id": "positive-negative-testing",
    "number": "3.7",
    "title": "Positive and Negative Testing",
    "subtitle": "Valid input par feature, invalid input par graceful error",
    "icon": "check",
    "accent": "#00ff88",
    "englishDefinition": "Positive testing is a testing technique in which the system is tested with valid input data to verify that it behaves as specified, also called the happy path. Negative testing is a testing technique in which the system is tested with invalid, unexpected or malicious input to verify that it handles the situation gracefully by showing a proper error message without crashing or corrupting data. Both are required to validate the functional correctness as well as the robustness of an application.",
    "intro": "Positive testing mein hum sahi input dete hain aur dekhte hain feature chalta hai ya nahi — ise happy path bhi kehte hain. Negative testing mein galat input dete hain — blank, galat format, range se bahar, malicious — aur dekhte hain system crash to nahi hota, proper error message deta hai ya nahi. Dono milkar functional correctness aur robustness cover karte hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Positive Testing",
        "kicker": "Definition",
        "body": "Valid input, expected output. Example age field (18–60): 25 daalo → registration successful. Email: riya@mail.com → welcome mail. Amount: 500 → payment successful. File: report.pdf (1 MB) → upload ho gaya. Objective: confirm karna ki requirement ke hisaab se feature kaam karta hai. Positive test cases pehle likhe jaate hain kyunki inhe likhna aasan hota hai aur inhi se smoke test banta hai.",
        "body2": "Positive testing ka limit: sirf ye batata hai ki system kya kar sakta hai. System galat data par kya karega, ye negative testing batati hai. Isliye sirf positive tests wala suite production ke liye khatarnak hai.",
        "chips": ["Valid input", "Happy path", "Expected output", "Smoke test"]
      },
      {
        "type": "definition",
        "title": "Negative Testing",
        "kicker": "Definition",
        "body": "Invalid ya unexpected input, expected behaviour = graceful error. Example: age = 0, −5, abc → error message, crash nahi. Email = riya@ ya blank → validation fail. Amount = 99999999 → limit error. File = virus.exe (10 MB) → reject + message. Negative testing robustness testing ka hissa hai — system galat use ke saamne kaise survive karta hai, wahi dekhta hai.",
        "body2": "Negative testing security se juda hai: SQL injection, XSS, path traversal, huge input, special characters — sab negative test cases hain. Negative testing \"destructive testing\" se alag hai — destructive testing mein system ko todne ki koshish hoti hai, negative testing mein invalid input par expected behaviour verify hota hai.",
        "chips": ["Invalid input", "Graceful error", "Robustness", "Validation", "Security"]
      },
      {
        "type": "points",
        "title": "Negative Test Data Ke Categories",
        "kicker": "Test Data",
        "points": [
          "Blank / null value — field empty chhod diya, ya NULL bheja.",
          "Invalid format — email bina @, date 31-02-2025, phone mein letters.",
          "Out of range — age 17 ya 61, quantity 0 ya 1000, amount negative.",
          "Wrong data type — number field mein text, date field mein number.",
          "Special / malicious characters — ' OR 1=1 --, <script>alert(1)</script>, ../../etc/passwd.",
          "Too long / too short input — 5000 character name, 1 character password.",
          "Duplicate entry — same email se dobara register, same order dobara submit.",
          "Invalid sequence — payment ke bina order confirm, step 3 par step 1 skip."
        ]
      },
      {
        "type": "diagram",
        "title": "Positive vs Negative Testing",
        "kicker": "Diagram",
        "diagram": "st3-positive-negative",
        "caption": "Positive testing valid data par feature, negative testing invalid data par graceful error verify karti hai"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Positive testing = valid input, expected output, happy path.",
          "Negative testing = invalid/unexpected input, gracefully handle hona chahiye.",
          "Dono zaroori: sirf positive → nazuk system; sirf negative → feature verify nahi hota.",
          "Negative testing robustness aur security ka hissa hai; destructive testing se alag.",
          "Bade suite mein negative cases positive se zyada ho jaate hain.",
          "Negative test ke liye EP ke invalid classes aur BVA ke boundary values use karo."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between positive and negative testing with examples.",
        "answer": "**Positive Testing vs Negative Testing:**\n\n| Point | Positive Testing | Negative Testing |\n|---|---|---|\n| Input | Valid data | Invalid / unexpected data |\n| Purpose | Feature specified tarike se chalta hai | System gracefully handle karta hai |\n| Expected | Normal success output | Proper error message, no crash, no data corruption |\n| Also called | Happy path testing | Error/robustness testing |\n| Risk covered | Functional correctness | Robustness, security, stability |\n| Example | age=25 → registration successful | age=0 / −5 / abc → validation error, crash nahi |\n\n**Positive examples:** valid email par welcome mail, 500 amount par payment success, 1 MB PDF upload.\n**Negative examples:** blank email, 99999999 amount, virus.exe upload, ' OR 1=1 -- in input.\n\n**Why both:** sirf positive tests se system nazuk rehta hai (production mein pehla galat input crash kar deta hai); sirf negative tests se pata nahi chalta feature kaam karta hai ya nahi. Dono milkar functional + robustness coverage dete hain.\n\n**Order:** positive tests pehle (smoke), phir negative tests (depth).\n\n**Diagram:** Refer to Positive and Negative Testing diagram."
      },
      {
        "question": "What is negative testing? Explain its importance and give test data examples.",
        "answer": "**Negative Testing:** System ko invalid, unexpected ya malicious input dena aur verify karna ki wo gracefully handle karta hai — error message deta hai, crash nahi hota, data corrupt nahi hota.\n\n**Importance:**\n1. **Robustness** — real users galti karte hain; system ko sambhalna aana chahiye.\n2. **Security** — SQL injection, XSS, path traversal negative inputs hi hain.\n3. **Data integrity** — galat input se database kharab nahi hona chahiye.\n4. **Better error messages** — user ko saaf batana chahiye kya galat hai.\n5. **Stability** — crash aur downtime se bachna.\n\n**Test data categories:**\n- Blank / null\n- Wrong format (email bina @, 31-02-2025)\n- Out of range (age 17, −1, 61)\n- Wrong data type (number field mein text)\n- Special characters / injection payloads\n- Too long / too short\n- Duplicate entries\n- Invalid sequence (payment ke bina order)\n\n**Expected result:** validation message, no crash, no partial data save, appropriate HTTP status code (400/422).\n\n**Diagram:** Refer to Positive and Negative Testing diagram."
      },
      {
        "question": "How do equivalence partitioning and boundary value analysis help in writing positive and negative test cases?",
        "answer": "**Equivalence Partitioning (EP):** Input domain ko valid aur invalid classes mein baantna; har class se ek representative value test karna.\nExample age 18–60:\n- Invalid class (low): 10 → **negative test**\n- Valid class: 35 → **positive test**\n- Invalid class (high): 70 → **negative test**\n\n**Boundary Value Analysis (BVA):** Har class ke kinare test karna — yahan defect sabse zyada milta hai.\nValues: 17, 18, 19, 35, 59, 60, 61\n- 18, 19, 35, 59, 60 → **positive tests**\n- 17, 61 → **negative tests**\n\n**Kaise mila kar use karein:**\n1. EP se valid/invalid classes identify karo.\n2. Valid classes ke beech se ek nominal value → positive test.\n3. Har valid class ke boundary (min, min+1, max−1, max) → positive tests.\n4. Boundary ke just bahar (min−1, max+1) aur invalid classes ki representative value → negative tests.\n5. Har test ke liye expected result likho — success ya specific error message.\n\n**Fayda:** na saare values test karne padte hain, na zaroori case chhootta hai; positive aur negative dono ka balanced set ban jaata hai.\n\n**Diagram:** Refer to Positive and Negative Testing diagram."
      }
    ]
  },
  {
    "id": "boundary-value-analysis",
    "number": "3.8",
    "title": "Boundary Value Analysis",
    "subtitle": "Boundary ke dono taraf test karo — defect wahin chhupta hai",
    "icon": "ruler",
    "accent": "#ff8800",
    "englishDefinition": "Boundary Value Analysis (BVA) is a black-box test design technique in which test cases are designed to test the values at and just outside the boundaries of equivalence classes, because defects are most likely to occur at the edges of the input domain. For a range a to b, the test values are a−1, a, a+1, a nominal value, b−1, b and b+1, which checks off-by-one boundary errors.",
    "intro": "Experience kehti hai ki defect beech ke values par nahi, kinaron par milte hain. Developer jab `<` ya `<=` likhta hai, ya loop ka counter ek se aage-peeche chala jaata hai, defect paida hota hai. BVA kehti hai — boundary ke andar, boundary par, aur boundary ke bahar test karo. Example: age 18–60 ke liye 17, 18, 19, 35, 59, 60, 61.",
    "sections": [
      {
        "type": "definition",
        "title": "Boundary Value Analysis Kya Hai",
        "kicker": "Definition",
        "body": "Range a ≤ x ≤ b ke liye BVA values: a−1, a, a+1, nominal, b−1, b, b+1. 2-value BVA mein sirf a−1, a, b, b+1 liye jaate hain; 3-value BVA (full) mein nominal value bhi. Boundary ke types: 1. Numeric range (age 18–60). 2. String length (username 6–12). 3. Array / list size. 4. Date range. 5. Loop counter. 6. File size, timeout, stock quantity.",
        "body2": "BVA ka core idea: har boundary ka ek value andar aur ek bahar. Kyun? Kyunki condition galat likhne par sirf boundary wala case fail hota hai — beech ka value galat condition se bhi pass ho jaata hai. Isi liye 1000 values test karne se better hai 7 sahi values test karna.",
        "chips": ["a−1", "a", "a+1", "nominal", "b−1", "b", "b+1"]
      },
      {
        "type": "points",
        "title": "BVA Ke Rules",
        "kicker": "How To",
        "points": [
          "Valid range identify karo — requirement se, code se nahi.",
          "Har boundary ke teen value: ek bahar (invalid), ek boundary par (valid), ek andar (valid).",
          "2-value BVA: sirf min−1, min, max, max+1 — fast, kam cases.",
          "3-value BVA: min−1, min, min+1, nominal, max−1, max, max+1 — more thorough.",
          "String ke liye length boundary test karo: 5, 6, 7 … 11, 12, 13 characters.",
          "Negative numbers aur zero ko specially dekho — accounting aur counts mein sabse aam bug.",
          "Dates: month end (31), leap year (29 Feb), year boundary (31 Dec → 1 Jan).",
          "BVA ko equivalence partitioning ke saath combine karo — EP classes banaye, BVA unke kinare test kare."
        ]
      },
      {
        "type": "cards",
        "title": "BVA Ke Aam Defects",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "alert", "title": "Off-by-one", "body": "Loop ya condition ek se aage-peeche. Zero iterations na hona, ya 101st item accept ho jaana." },
          { "icon": "ruler", "title": "Wrong Comparison", "body": "> ke bajay >=, ya < ke bajay <=. Sirf boundary value par pakda jaata hai." },
          { "icon": "calendar", "title": "Date Boundary", "body": "31 Feb, leap year 29 Feb, month-end processing, timezone se date badalna." },
          { "icon": "money", "title": "Zero / Negative", "body": "Free item, zero quantity order, negative refund — calculation galat ho jaati hai." }
        ]
      },
      {
        "type": "diagram",
        "title": "Boundary Values — 18 Se 60 Ka Example",
        "kicker": "Diagram",
        "diagram": "st3-bva",
        "caption": "Valid range ke kinare aur ek nominal value — 17, 18, 19, 35, 59, 60, 61"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "BVA boundary par aur uske dono taraf test karti hai.",
          "Range a–b ke liye: a−1, a, a+1, nominal, b−1, b, b+1.",
          "Defect most likely at the edges — isliye boundary ki priority zyada.",
          "Black-box technique hai, EP ke saath combine karo.",
          "Applicable: number range, string length, date, loop, file size, timeout.",
          "Aam defect: off-by-one, galat comparison operator, month-end/leap year."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is Boundary Value Analysis? Explain with an example.",
        "answer": "**Boundary Value Analysis (BVA):** Black-box test design technique jisme test values equivalence class ke boundaries par aur unke just bahar chuni jaati hain, kyunki defects sabse zyada kinaron par hote hain.\n\n**Formula (range a to b):**\n- Just below min: a−1 (invalid)\n- Min: a (valid)\n- Just above min: a+1 (valid)\n- Nominal: beech ki value (valid)\n- Just below max: b−1 (valid)\n- Max: b (valid)\n- Just above max: b+1 (invalid)\n\n**Example — age field valid 18 se 60:**\n- 17 → invalid → error message expected (negative test)\n- 18 → valid → accept (positive test)\n- 19 → valid → accept\n- 35 → valid → accept (nominal)\n- 59 → valid → accept\n- 60 → valid → accept\n- 61 → invalid → error message (negative test)\n\n**Kyun effective:** agar developer ne `age > 18` likh diya (>= ki jagah), to 18 wala test hi fail hoga — 25 ya 40 se bug pakda nahi jaayega.\n\n**Types:** 2-value BVA (min−1, min, max, max+1) aur 3-value BVA (full set with nominal).\n\n**Diagram:** Refer to Boundary Value Analysis diagram."
      },
      {
        "question": "Explain the difference between equivalence partitioning and boundary value analysis.",
        "answer": "**EP vs BVA:**\n\n| Point | Equivalence Partitioning | Boundary Value Analysis |\n|---|---|---|\n| Kya karti | Domain ko valid/invalid classes mein baantti | Class ke kinare test karti |\n| Test value | Har class se ek representative (beech ka) | Boundary par aur just bahar ke values |\n| Focus | \"Kaunse hisse hain\" | \"Kinare sahi hain\" |\n| Defect type | Galat class handling, missing validation | Off-by-one, galat comparison operator |\n| Test count | Kam | Thoda zyada (boundary par 6–7 per range) |\n\n**Example age 18–60:**\n- EP: 10 (invalid), 35 (valid), 70 (invalid) — 3 tests.\n- BVA: 17, 18, 19, 35, 59, 60, 61 — 7 tests.\n\n**Relation:** BVA EP ka subset/complement hai — EP classes banati hai, BVA un classes ke kinare verify karti hai. Dono saath use karna best practice hai; kai textbooks BVA ko EP ki advanced form maante hain.\n\n**Diagram:** Refer to Boundary Value Analysis diagram."
      },
      {
        "question": "Give examples of BVA for string length, date and loop.",
        "answer": "**1. String length (username 6–12 characters):**\n5 → invalid (too short), 6 → valid, 7 → valid, 9 → nominal, 11 → valid, 12 → valid, 13 → invalid (too long).\nExtra: blank string, only spaces, 5000 character string (overflow).\n\n**2. Date (booking 1 Jan 2025 se 31 Mar 2025):**\n31 Dec 2024 → invalid, 1 Jan 2025 → valid, 2 Jan 2025 → valid, 15 Feb → nominal, 30 Mar → valid, 31 Mar → valid, 1 Apr 2025 → invalid.\nExtra boundaries: 31 Jan → 1 Feb, 28/29 Feb (leap year), 31 Dec → 1 Jan (year change).\n\n**3. Loop (list 1 se 100 items, page size 10):**\n0 items (empty list) → empty state, 1 item → single row, 10 items → exactly one page, 11 items → pagination trigger, 100 items → full, 101 items → should reject or paginate?\nLoop testing values: 0, 1, typical, max, max+1 iterations.\n\n**4. Numeric (discount 0% se 25%):**\n−1 (invalid), 0 (valid), 1 (valid), 12 (nominal), 24 (valid), 25 (valid), 26 (invalid).\n\n**Diagram:** Refer to Boundary Value Analysis diagram."
      }
    ]
  },
  {
    "id": "equivalence-partitioning",
    "number": "3.9",
    "title": "Equivalence Partitioning",
    "subtitle": "Poora input domain classes mein baanto, ek-ek representative test karo",
    "icon": "layers",
    "accent": "#00aaff",
    "englishDefinition": "Equivalence Partitioning is a black-box test design technique in which the input domain of a program is divided into equivalence classes, also called partitions, such that all values in a class are expected to be processed in the same way. One representative value is then selected from each valid class to write positive test cases and from each invalid class to write negative test cases, which reduces the number of test cases without reducing coverage.",
    "intro": "Equivalence partitioning ka simple funda hai: agar 100 values same tarike se behave karengi to 100 test likhne ka koi matlab nahi — ek likh lo. Input domain ko aise hisson mein baanto jahan har hissa andar se ek jaisa behave kare. Phir har hisse (class) se ek representative test karo. Valid class se positive test, invalid class se negative test.",
    "sections": [
      {
        "type": "definition",
        "title": "Equivalence Partitioning Kya Hai",
        "kicker": "Definition",
        "body": "Steps: 1. Requirement padho, input field identify karo. 2. Valid class(es) banao. 3. Invalid class(es) banao — har alag galti ke liye alag class. 4. Har class se ek representative value chuno. 5. Test case likho aur expected result do. Example age 18–60: valid class 18–60 (test 35), invalid class below 18 (test 10), invalid class above 60 (test 70). Total 3 tests, na ki 100.",
        "body2": "Invalid classes alag-alag rakho — ek hi test case mein do galtiyan nahi daalni chahiye, warna pata nahi chalega kaunsi validation fail hui. Ek invalid class = ek test case with one wrong value, baaki sab valid.",
        "chips": ["Equivalence class", "Partition", "Valid class", "Invalid class", "Representative value"]
      },
      {
        "type": "points",
        "title": "Classes Kaise Banayein",
        "kicker": "Rules",
        "points": [
          "Range (18–60): 1 valid + 2 invalid classes.",
          "Specific value / set (payment mode: card, UPI, netbanking): 1 valid class, 1 invalid class (koi aur value).",
          "Boolean (agree to terms): 2 classes — true, false.",
          "Must be (email): 1 valid (correct format) + multiple invalid (bina @, bina domain, spaces, blank).",
          "List / set membership: valid member + non-member.",
          "Multiple fields: har field ki classes alag banao, phir test cases combine karo (pairwise se kam karo).",
          "Har invalid class ka ek alag negative test case — isse pata chalta hai kaunsi validation kaam nahi kar rahi."
        ]
      },
      {
        "type": "cards",
        "title": "EP Ke Fayde Aur Limit",
        "kicker": "Important Terms",
        "cards": [
          { "icon": "trends", "title": "Fayda: Kam Tests", "body": "100 values ki jagah 3–7 tests, coverage almost same. Regression suite tez rehti hai." },
          { "icon": "search", "title": "Fayda: Systematic", "body": "Ad-hoc testing ki jagah soch-samajh kar classes banti hain, koi hissa chhootta nahi." },
          { "icon": "alert", "title": "Limit: Boundary", "body": "Class galat bani to boundary ka defect miss ho jaata hai — isliye BVA ke saath use karo." },
          { "icon": "warn", "title": "Limit: Combination", "body": "Do fields ke interaction ka defect EP se nahi pakda jaata — decision table chahiye." }
        ]
      },
      {
        "type": "diagram",
        "title": "Age Field Ke Equivalence Classes",
        "kicker": "Diagram",
        "diagram": "st3-equivalence",
        "caption": "Ek valid aur do invalid classes — teen representative values, teen test cases"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "EP input domain ko valid/invalid classes mein baantti hai.",
          "Ek class ka har value same behave karta hai — isliye ek representative kaafi hai.",
          "Valid class → positive test; invalid class → negative test.",
          "Har invalid class ka alag test case — ek test mein ek hi galti.",
          "EP batati hai kaunse class hain, BVA batati hai kinare kaunse value.",
          "Fayda: kam test cases, same coverage. Limit: boundary aur combination defects."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is equivalence partitioning? Explain with examples.",
        "answer": "**Equivalence Partitioning (EP):** Black-box technique jisme input domain ko equivalence classes mein baanta jaata hai — har class ke saare values ka behaviour same maana jaata hai — aur har class se ek representative value test ki jaati hai.\n\n**Steps:**\n1. Input fields aur unki valid conditions identify karo.\n2. Valid classes banao.\n3. Invalid classes banao (har alag galti ke liye alag).\n4. Har class se representative value chuno.\n5. Test cases likho (valid → positive, invalid → negative).\n\n**Examples:**\n1. **Range 18–60:** valid 18–60 (test 35), invalid <18 (test 10), invalid >60 (test 70) → 3 tests.\n2. **Payment mode (card, UPI, netbanking):** valid set (test UPI), invalid (test \"cash\") → 2 tests.\n3. **Email:** valid (riya@mail.com), invalid (riya@, @mail.com, blank, with spaces) → 5 tests.\n4. **Boolean checkbox:** accepted / not accepted → 2 tests.\n\n**Fayda:** test cases drastically kam, coverage almost same, systematic approach.\n**Limit:** boundary values aur multi-field combinations miss ho sakte hain — isliye BVA aur decision table ke saath use karo.\n\n**Diagram:** Refer to Equivalence Partitioning diagram."
      },
      {
        "question": "How many test cases does equivalence partitioning produce for a given field? Explain with a worked example.",
        "answer": "**Rule:** classes ki ginti = valid classes + invalid classes. Har class ke liye ek test case.\n\n**Worked example — registration form, age 18–60 aur password 8–12 characters:**\n\n**Age field:**\n- Valid: 18–60 → test 35\n- Invalid low: <18 → test 10\n- Invalid high: >60 → test 70\n→ 3 test cases\n\n**Password field:**\n- Valid length: 8–12 → test \"abcd1234\"\n- Invalid short: <8 → test \"abc123\"\n- Invalid long: >12 → test \"abcdefgh12345\"\n- Invalid chars (special not allowed) → test \"abcd 1234\"\n- Blank → test \"\"\n→ 5 test cases\n\n**Total:** 3 + 5 = 8 test cases (har test case mein ek field invalid, baaki valid).\n\n**Agar EP na use karein:** age 18–60 ke 43 values aur password lengths 0–30 → 100+ combinations. EP se 8 tests mein hi saari classes cover ho jaati hain.\n\n**Phir BVA add karo:** age ke liye 17, 18, 19, 59, 60, 61 aur password length 7, 8, 9, 11, 12, 13 → boundary defects bhi cover.\n\n**Diagram:** Refer to Equivalence Partitioning diagram."
      },
      {
        "question": "What are the advantages and limitations of equivalence partitioning?",
        "answer": "**Advantages:**\n1. **Test cases kam** — 100 values ki jagah 3–7 tests.\n2. **Systematic** — guesswork nahi, requirement se classes banti hain.\n3. **Coverage same** — har valid aur invalid scenario ek test se cover.\n4. **Negative testing built-in** — har invalid class ek negative test deti hai.\n5. **Fast regression** — chhoti suite, jaldi chalti hai.\n6. **Documentation** — classes ka table test design ka record ban jaata hai.\n\n**Limitations:**\n1. **Boundary defects miss** — class ke andar ka behaviour same maana gaya, boundary par defect ho sakta hai (BVA chahiye).\n2. **Combination defects** — do fields ke interaction ka defect EP se nahi pakda jaata (decision table / pairwise chahiye).\n3. **Wrong classes** — requirement galat samjhe to poori partition galat.\n4. **Non-functional** — performance, load, security EP se cover nahi hote.\n5. **Sequential dependency** — step-by-step flow EP se nahi aata (use case/state testing chahiye).\n\n**Best practice:** EP + BVA + decision table = functional black-box testing ka base.\n\n**Diagram:** Refer to Equivalence Partitioning diagram."
      }
    ]
  },
  {
    "id": "state-graph-testing",
    "number": "3.10",
    "title": "State Based / Graph Based Testing",
    "subtitle": "States, events aur transitions — graph bana kar test derive karna",
    "icon": "flow",
    "accent": "#0047ff",
    "englishDefinition": "State transition testing is a black-box technique in which the system is modelled as a finite set of states, the events or inputs that cause transitions between them, and the resulting actions, so that test cases can be designed to cover all states, all valid transitions and all invalid transitions. Graph based testing models the system as a graph of nodes and edges, such as a control flow graph, use case graph or state graph, and derives test cases using node coverage, edge coverage and path coverage criteria.",
    "intro": "Kuch systems ka behaviour unke \"state\" par depend karta hai — ATM machine, login session, order status, media player. Inko states aur events ke graph ki tarah likh kar test karna sabse asaan hai. Graph based testing isi approach ka general roop hai: node = step/state, edge = flow/transition, aur coverage criteria se test cases nikale jaate hain.",
    "sections": [
      {
        "type": "definition",
        "title": "State Transition Testing Kya Hai",
        "kicker": "Definition",
        "body": "Model ke 4 parts: 1. States — system ki situations (IDLE, CARD IN, PIN OK, MENU, DISPENSE). 2. Events — jo transition bhadkaate hain (insert card, correct PIN, withdraw). 3. Transitions — state A se state B jane wala allowed move. 4. Actions / guard conditions — transition par kya hota hai. Representation: state transition diagram, state table ya state transition tree.",
        "body2": "Invalid transition bhi test karna zaroori hai: \"PIN OK\" state se seedha \"DISPENSE\" nahi jaana chahiye, ya bina login ke dashboard nahi khulna chahiye. Ye \"negative\" state tests security aur business rule ka defence hote hain.",
        "chips": ["State", "Event", "Transition", "Guard condition", "State table"]
      },
      {
        "type": "points",
        "title": "Coverage Criteria",
        "kicker": "Criteria",
        "points": [
          "State coverage: model ka har state kam se kam ek baar visit ho.",
          "Transition (0-switch) coverage: har valid transition kam se kam ek baar chale.",
          "Path coverage: start se end tak har possible path — sabse strong, sabse mehnga.",
          "Invalid transition testing: jo transition allowed nahi hai wo reject ho — security check.",
          "Graph based testing mein: node coverage, edge coverage, path coverage, cyclomatic complexity se independent paths.",
          "Loop (self-transition) ko alag se test karo — 0 baar, 1 baar, zyada baar."
        ]
      },
      {
        "type": "cards",
        "title": "Kahan Lagta Hai",
        "kicker": "Applications",
        "cards": [
          { "icon": "money", "title": "ATM / Payment", "body": "Card insert, PIN, balance, withdraw, eject. Galat PIN par lock — invalid transition test." },
          { "icon": "lock", "title": "Login Session", "body": "Logged out, OTP pending, logged in, locked, session expired. Timeout aur lock scenarios." },
          { "icon": "layers", "title": "Order Life Cycle", "body": "Placed, paid, packed, shipped, delivered, returned. Galat sequence block hona chahiye." },
          { "icon": "flow", "title": "Workflow / Approval", "body": "Draft, submitted, under review, approved, rejected. Rejected se dobara submit allowed?" }
        ]
      },
      {
        "type": "diagram",
        "title": "ATM Ka State Transition Graph",
        "kicker": "Diagram",
        "diagram": "st3-state-graph",
        "caption": "Har state, har valid transition aur galat PIN jaisi invalid transition bhi test karo"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "State transition testing: states + events + transitions ka model.",
          "Coverage: state coverage → transition coverage → path coverage.",
          "Invalid transitions bhi test karo — security aur business rule.",
          "Graph based testing: node = step, edge = flow; node/edge/path coverage criteria.",
          "CFG (white-box) aur state graph (black-box) dono graph based hain.",
          "Best for ATM, login, order status, workflow, protocol."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is state transition testing? Explain with an ATM example.",
        "answer": "**State Transition Testing:** Black-box technique jisme system ko finite states, events aur transitions ke model ki tarah likha jaata hai aur us model se test cases derive kiye jaate hain.\n\n**Model ke elements:**\n- **State** — system ki situation.\n- **Event** — input jo transition trigger kare.\n- **Transition** — allowed state change.\n- **Action** — transition par hone wala kaam.\n\n**ATM example:**\n- States: IDLE → CARD IN → PIN OK → MENU → DISPENSE\n- Valid transitions:\n  - IDLE --insert card--> CARD IN\n  - CARD IN --correct PIN--> PIN OK\n  - PIN OK --choose option--> MENU\n  - MENU --withdraw--> DISPENSE\n  - DISPENSE --eject--> IDLE\n- Invalid transitions:\n  - CARD IN --3 galat PIN--> IDLE (card block)\n  - IDLE --withdraw--> not allowed\n  - PIN OK --dispense--> not allowed (PIN ke bina cash nahi)\n\n**Coverage criteria:**\n1. **State coverage** — har state ek baar.\n2. **Transition coverage** — har valid transition ek baar.\n3. **Path coverage** — shuru se end tak har raasta.\n\n**Kyun useful:** state dependent bugs (jab sequence galat ho), missing validation aur security gaps pakadta hai.\n\n**Diagram:** Refer to State Based Testing diagram."
      },
      {
        "question": "What is graph based testing? Explain node, edge and path coverage.",
        "answer": "**Graph Based Testing:** System ko graph (node + edge) ki tarah model karke test cases derive karna. Graph ban sakta hai control flow graph (white-box), use case graph, state graph ya decision graph (black-box).\n\n**Elements:** node = step/state/statement; edge = control flow, transition ya dependency.\n\n**Coverage criteria:**\n1. **Node coverage** — har node kam se kam ek baar visit ho. Weakest.\n2. **Edge coverage** — har edge kam se kam ek baar traverse ho. Node coverage se strong.\n3. **Path coverage** — start se end tak har possible path. Strongest, par paths exponentially badh sakte hain.\n4. **Basis path / cyclomatic** — V(G) jitne independent paths, minimum effort mein maximum structure coverage.\n\n**Example (login flow graph):**\n- Nodes: start, credentials, validate, dashboard, error, end.\n- Edges: start→credentials→validate→dashboard→end; validate→error→credentials (retry); validate→end (3 fails).\n- Node coverage = 6 tests ke bina bhi possible; edge coverage ke liye retry edge ka test chahiye; path coverage ke liye 3-fail wala path bhi.\n\n**Fayda:** missing step, unreachable node, infinite loop aur dead branch dikhta hai.\n**Tools:** graph modelling manual, coverage tools (JaCoCo, Istanbul) aur model based testing tools.\n\n**Diagram:** Refer to State Based Testing diagram."
      },
      {
        "question": "Why is it important to test invalid transitions? Give examples.",
        "answer": "**Invalid transition** = jo state change system ko allow nahi karna chahiye.\n\n**Kyun zaroori:**\n1. **Security** — bina login ke dashboard, bina payment ke order confirm, doosre user ka data.\n2. **Business rule** — refund delivered hone ke baad hi, cancel shipped hone ke baad nahi.\n3. **Data integrity** — galat sequence se half-saved record, duplicate payment.\n4. **Crash prevention** — undefined state se app crash ho sakta hai.\n\n**Examples:**\n- ATM: PIN OK state se seedha DISPENSE — bina PIN verify cash nahi.\n- Login: 3 galat attempt ke baad bhi login allow ho jaana — lock rule fail.\n- Order: PENDING se seedha DELIVERED, payment skip ho jaana.\n- Workflow: REJECTED document ka dobara approve ho jaana.\n- Media player: STOP state mein PAUSE press karna.\n\n**Kaise test karein:** state table banao; har state ke liye allowed events aur unke effects likho; phir har not-allowed event ka test likho — expected result: action reject + proper message, state unchanged.\n\n**Diagram:** Refer to State Based Testing diagram."
      }
    ]
  },
  {
    "id": "compatibility-testing",
    "number": "3.11",
    "title": "Compatibility Testing",
    "subtitle": "OS, browser, device, network — har environment par chalta hai?",
    "icon": "globe",
    "accent": "#00ff88",
    "englishDefinition": "Compatibility testing is a type of non-functional testing that verifies whether a software application works correctly across different environments, including operating systems, browsers, devices, hardware configurations, network conditions, databases and language settings. It includes backward compatibility with older versions, forward compatibility with newer versions, cross-browser testing and cross-platform testing, and is performed using a compatibility matrix of supported combinations.",
    "intro": "Ek hi app har jagah chalni chahiye — Windows, macOS, Linux, Android, iOS, Chrome, Firefox, Safari, 2G se 5G, chhote phone se bade monitor. Compatibility testing yahi verify karti hai. Sab combinations test karna impossible hai, isliye risk ke hisaab se top combinations chunte hain aur unhe matrix mein likhte hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Compatibility Testing Kya Hai",
        "kicker": "Definition",
        "body": "Environment ke dimensions: 1. Operating system aur version. 2. Browser aur version. 3. Device — screen size, resolution, touch. 4. Hardware — RAM, GPU, printer. 5. Network — 2G, 3G, 4G, Wi-Fi, offline. 6. Database aur server. 7. Language aur locale, timezone. 8. Other software — antivirus, plugins, integrations. Test karte waqt har combination par core features, layout, performance aur data handling check hote hain.",
        "body2": "Compatibility matrix ek table hoti hai: rows = environment (OS ya device), columns = browser ya feature, cells = pass/fail. Ye matrix product ka \"supported combinations\" document ban jaata hai — support team aur release notes ke liye bhi kaam aata hai.",
        "chips": ["Environment", "Cross-browser", "Cross-platform", "Matrix", "Non-functional"]
      },
      {
        "type": "points",
        "title": "Compatibility Ke Prakar",
        "kicker": "Types",
        "points": [
          "Backward compatibility: purane version, purane data format aur purane API ke saath chale. Example — naya app purani database file padh le.",
          "Forward compatibility: naye browser/OS version ke saath bhi chale (graceful degradation).",
          "Cross-browser: Chrome, Firefox, Safari, Edge — layout, CSS, JavaScript behaviour.",
          "Cross-platform: Windows, macOS, Linux, Android, iOS.",
          "Device compatibility: different screen size, resolution, DPI, touch vs mouse.",
          "Hardware compatibility: low RAM, older GPU, printer/scanner, barcode device.",
          "Network compatibility: slow network, high latency, offline mode, network switch.",
          "Data / database compatibility: MySQL, PostgreSQL, Oracle, CSV/Excel import, character encoding (UTF-8)."
        ]
      },
      {
        "type": "points",
        "title": "Kaise Karein — Practical Approach",
        "kicker": "How To",
        "points": [
          "Requirement se supported environment list banao (supported vs best effort vs not supported).",
          "Analytics dekho — users kaunse browser/device par hain; wahi pehle test karo (Pareto).",
          "Compatibility matrix banao aur top 5–10 combinations chuno.",
          "Manual checklist: layout, fonts, links, forms, download, print, keyboard navigation.",
          "Automation: Selenium Grid, Playwright, Cypress browsers, cloud device farm (BrowserStack, Sauce Labs).",
          "Responsive testing: browser devtools ke device mode se quick check, phir real device par confirm.",
          "VM / Docker se purane OS aur browser version emulate karo.",
          "Defect log karte waqt environment likhna mat bhoolo — warna reproduce nahi hoga."
        ]
      },
      {
        "type": "diagram",
        "title": "Compatibility Matrix Aur Types",
        "kicker": "Diagram",
        "diagram": "st3-compatibility",
        "caption": "OS × browser matrix plus compatibility ke aath prakar — backward, forward, device, network"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Compatibility testing non-functional testing hai — different environment par behaviour verify karti hai.",
          "Types: backward, forward, cross-browser, cross-platform, device, hardware, network, database.",
          "Sab combinations test karna impossible — risk aur analytics ke hisaab se chuno.",
          "Compatibility matrix = supported combinations ka document.",
          "Tools: Selenium Grid, Playwright, BrowserStack, Sauce Labs, VM snapshots.",
          "Compatibility ≠ performance: yahan \"chalta hai ya nahi\" dekhte hain."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is compatibility testing? Explain its types.",
        "answer": "**Compatibility Testing:** Non-functional testing jo verify karti hai ki application different environments par sahi chalti hai — OS, browser, device, hardware, network, database aur language.\n\n**Types:**\n1. **Backward compatibility** — purane version/data/API ke saath chale (naya app purani file khole).\n2. **Forward compatibility** — naye browser/OS ke saath chale, gracefully degrade ho.\n3. **Cross-browser** — Chrome, Firefox, Safari, Edge par layout aur JS behaviour.\n4. **Cross-platform** — Windows, macOS, Linux, Android, iOS.\n5. **Device compatibility** — screen size, resolution, touch input.\n6. **Hardware compatibility** — low RAM, old GPU, printer, scanner.\n7. **Network compatibility** — 2G/3G/4G/Wi-Fi, offline, high latency.\n8. **Data / database compatibility** — MySQL, PostgreSQL, Oracle, CSV import, UTF-8.\n9. **Language / locale** — date format, currency, right-to-left languages.\n\n**Process:** supported environment list → compatibility matrix → top combinations select → test → defect log with environment details.\n**Tools:** Selenium Grid, Playwright, BrowserStack, Sauce Labs, VM/Docker.\n\n**Diagram:** Refer to Compatibility Testing diagram."
      },
      {
        "question": "How do you decide which combinations to test when exhaustive compatibility testing is impossible?",
        "answer": "**Exhaustive testing impossible hai** — 5 OS × 5 browsers × 10 devices × 4 networks = 1000 combinations.\n\n**Selection approach:**\n1. **Requirement se supported list** — officially supported kya hai, wahi test karo.\n2. **Analytics / usage data** — users kaunse browser/device par hain (Pareto: 80% users 20% combinations par).\n3. **Risk based** — payment aur login jaise critical features ke liye zyada combinations.\n4. **Pairwise / orthogonal array** — har pair of values kam se kam ek baar aaye; test count drastically kam ho jaata hai.\n5. **Extremes** — smallest screen, oldest supported browser, slowest network.\n6. **New entries** — naya OS ya browser launch hua to priority.\n7. **Defect history** — jahan pehle bug mile wahan dobara test.\n\n**Example selection:** Chrome + Windows 11 (majority), Safari + macOS (design), Chrome + Android (mobile majority), Firefox + Ubuntu (dev users), Safari + iOS 18 (mobile), Edge + Windows 11 (enterprise), Chrome par 2G throttling (network).\n\n**Output:** compatibility matrix with pass/fail aur \"supported / best effort / not supported\" status.\n\n**Diagram:** Refer to Compatibility Testing diagram."
      },
      {
        "question": "What is backward and forward compatibility? Give examples.",
        "answer": "**Backward Compatibility:** Naya version purane version ke data, file format, API ya settings ke saath kaam kare.\nExamples:\n- Naya app version purani database schema ko migrate kar le bina data loss.\n- MS Word 2021 purani .doc file khol le.\n- Naya API version purane client requests ko support kare (deprecated endpoints).\n- Naya game purani saved game file load kar le.\n\n**Forward Compatibility:** Purana version naye data/format ke saath bhi na crash kare — kam se kam gracefully handle kare.\nExamples:\n- Old app naya database schema dekhe to crash na ho, \"update required\" message dikhaye.\n- Purana browser naye CSS feature ko ignore kare par page toota na dikhe (graceful degradation).\n- Old client unknown API field ko ignore kar de (JSON tolerant reader).\n\n**Testing approach:**\n1. Purana data/file collect karo → naye version par test (backward).\n2. Naya data banao → purane version par test (forward).\n3. Migration script ka rollback bhi test karo.\n4. Version mismatch par proper error message verify karo.\n\n**Diagram:** Refer to Compatibility Testing diagram."
      }
    ]
  },
  {
    "id": "user-documentation-testing",
    "number": "3.12",
    "title": "User Documentation Testing",
    "subtitle": "Manual, help aur install guide — software ke saath match karte hain?",
    "icon": "book",
    "accent": "#ff8800",
    "englishDefinition": "User documentation testing is the process of verifying the accuracy, completeness, clarity, consistency, usability and currency of the documentation delivered with a software product, such as user manuals, installation guides, online help, FAQs and release notes. It is performed by checking that every documented step actually works in the software, that every feature is documented, and that a new user can complete the task using only the documentation.",
    "intro": "User documentation testing bahut log skip karte hain, par galat manual bhi ek defect hai — user phans jaata hai, support tickets badh jaate hain, product kharab lagta hai. Isme hum verify karte hain ki manual ke steps sach mein chalte hain, screenshot current hain, aur naya user sirf manual padh kar kaam kar sakta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "User Documentation Testing Kya Hai",
        "kicker": "Definition",
        "body": "Documents jo test hote hain: 1. User manual / guide. 2. Installation aur configuration guide. 3. Online help, tooltips, error message text. 4. FAQ aur troubleshooting guide. 5. Release notes / changelog. 6. API reference (developer documentation). 7. Tutorials aur video scripts. 8. Quick start guide. Check karne ke points: har step chalta hai, menu names UI se match karte hain, screenshot current version ka hai, links kaam karte hain, examples sahi output dete hain.",
        "body2": "Ek accha tareeka: ek \"naya user\" (jo product nahi jaanta) manual le kar task kare. Jahan wo phanse, wahan documentation defect hai. Isko documentation usability testing bhi kehte hain.",
        "chips": ["Accuracy", "Completeness", "Clarity", "Consistency", "Usability", "Currency"]
      },
      {
        "type": "points",
        "title": "Documentation Testing Ke 6 Parameters",
        "kicker": "Checklist",
        "points": [
          "Accuracy: har step software mein sach mein chalta hai; output manual mein likha hua hi aata hai.",
          "Completeness: har feature documented hai; error messages aur edge cases explain hue hain.",
          "Clarity: simple language, chhote steps, jargon kam, screenshots aur examples ke saath.",
          "Consistency: UI ke exact shabd (button ka naam), ek hi term poore manual mein, version number same.",
          "Usability: index, search, navigation aur cross-reference kaam karte hain; print layout theek hai.",
          "Currency: latest build ke hisaab se update hai; purane steps aur screenshot hataye gaye hain."
        ]
      },
      {
        "type": "cards",
        "title": "Documentation Defect Ke Examples",
        "kicker": "Common Defects",
        "cards": [
          { "icon": "alert", "title": "Galat Step", "body": "Manual kehta hai \"Settings > Privacy\" par click karo, par UI mein wo option \"Account > Security\" ke andar hai." },
          { "icon": "doc", "title": "Purana Screenshot", "body": "Screenshot purane version ka hai — naya user button dhoondhta reh jaata hai." },
          { "icon": "warn", "title": "Missing Info", "body": "Installation guide mein prerequisite (Java/PHP version) likha hi nahi — install fail ho jaata hai." },
          { "icon": "file", "title": "Broken Link", "body": "Help mein 404 link, yaa example code jo copy-paste par error deta hai." }
        ]
      },
      {
        "type": "diagram",
        "title": "Documentation Testing Parameters",
        "kicker": "Diagram",
        "diagram": "st3-documentation",
        "caption": "Accuracy, completeness, clarity, consistency, usability aur currency — chhah parameters"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "User documentation testing manual, help, install guide aur release notes verify karti hai.",
          "6 parameters: accuracy, completeness, clarity, consistency, usability, currency.",
          "Har documented step ko software par actually chala kar dekho.",
          "Naya user test sabse achha tareeka hai — jahan phanse wahan defect.",
          "Galat manual bhi defect hai — support cost badhata hai.",
          "Kaun karta hai: technical writer + tester + ek naya user."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is user documentation testing? Explain its importance and parameters.",
        "answer": "**User Documentation Testing:** Product ke saath aane wale documents (user manual, installation guide, online help, FAQ, release notes, API reference) ko verify karna ki wo accurate, complete, clear, consistent, usable aur current hain.\n\n**Importance:**\n1. User product ko samajh paata hai — bina documentation ke support cost badhta hai.\n2. Legal/compliance requirement — medical, finance aur enterprise products ke liye mandatory.\n3. Brand image — galat manual product ko kharab dikhata hai.\n4. Training aur onboarding fast hota hai.\n5. Installation aur configuration errors kam hote hain.\n\n**6 Parameters:**\n1. **Accuracy** — har step sach mein chalta hai, output match karta hai.\n2. **Completeness** — har feature documented, error messages explain.\n3. **Clarity** — simple language, chhote steps, screenshot ke saath.\n4. **Consistency** — UI ke exact shabd, ek hi terminology, same version number.\n5. **Usability** — index, search, links, cross-reference kaam karte hain.\n6. **Currency** — latest build ke hisaab se updated.\n\n**Diagram:** Refer to User Documentation Testing diagram."
      },
      {
        "question": "How is documentation testing performed? Explain the steps.",
        "answer": "**Documentation Testing Steps:**\n\n1. **Document list banao** — kaunse documents ship ho rahe hain (manual, help, install guide, release notes).\n2. **Review checklist tayyar karo** — accuracy, completeness, clarity, consistency, usability, currency ke points.\n3. **Version match karo** — documentation ka version software build se match karta hai?\n4. **Step-by-step execution** — manual ke steps ek-ek karke actual software par chalao aur result compare karo.\n5. **Naya user test** — ek aisa person jo product nahi jaanta, sirf manual se task kare; jahan phanse wahan finding.\n6. **Screenshot aur UI text compare** — button/menu ke naam, placement aur screenshot current version ke hain.\n7. **Link aur code example check** — saare links open hote hain, code copy-paste par chalta hai.\n8. **Error messages aur troubleshooting verify** — documented solution sach mein problem solve karta hai.\n9. **Findings log karo** — documentation defect tracker mein (severity: galat step = high, typo = low).\n10. **Re-test after update** — fix ke baad dobara verify.\n\n**Kaun karta hai:** technical writer, tester aur ek subject-matter expert / naya user.\n**Tools:** markdown lint, link checker, screenshot diff, docs-as-code CI.\n\n**Diagram:** Refer to User Documentation Testing diagram."
      },
      {
        "question": "Why is documentation considered a defect? Give examples and severity.",
        "answer": "**Documentation defect** = documentation jo software ke actual behaviour se match na kare, ya user ko task complete karne se roke.\n\n**Kyun defect hai:**\n- User galat step follow kare to data loss ho sakta hai (jaise galat backup step).\n- Installation fail hone se product use hi nahi hota.\n- Support tickets aur training cost badhte hain.\n- Compliance/audit mein documentation evidence hota hai — galat documentation = audit fail.\n\n**Examples aur typical severity:**\n1. **High** — installation guide mein prerequisite missing, step 5 galat, config value galat (system start nahi hota).\n2. **High** — security related instruction galat (jaise \"password plain text mein store karo\").\n3. **Medium** — menu path badal gaya, screenshot purana, feature documented nahi.\n4. **Low** — typo, grammar, formatting, purana copyright year.\n\n**Reporting format:** document name, version, page/section, kya likha hai, actual behaviour, expected correction, screenshot.\n\n**Fix owner:** technical writer (content), developer (agar behaviour galat hai), product owner (agar requirement clear nahi).\n\n**Diagram:** Refer to User Documentation Testing diagram."
      }
    ]
  },
  {
    "id": "domain-testing",
    "number": "3.13",
    "title": "Domain Testing",
    "subtitle": "Input domain ke sub-domains aur boundaries se test values chunna",
    "icon": "target",
    "accent": "#aa00ff",
    "englishDefinition": "Domain testing is a black-box test design technique in which the input and output domains of a program are analysed, divided into sub-domains and tested with a small number of well-chosen values — typically a nominal value from each sub-domain and values on and around each boundary. It is the practical combination of equivalence partitioning and boundary value analysis and is used to detect domain errors such as closure errors, shift errors, missing boundaries and extra boundaries.",
    "intro": "Domain testing kehta hai — code ke andar kya ho raha hai ye mat dekho, sirf ye dekho ki input ka domain kya hai aur output ka domain kya hai. Domain ko chhote sub-domains mein baanto, har sub-domain se ek nominal value lo, aur har boundary ke dono taraf ki value lo. Ye EP aur BVA ka combined, practical roop hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Domain Testing Kya Hai",
        "kicker": "Definition",
        "body": "Do steps: 1. Domain analyse karo — kaunse input variables hain, unki valid range kya hai, kaunse constraints ek doosre par depend karte hain, expected output domain kya hai. 2. Test values chuno — har sub-domain se ek nominal (on) value, har boundary par ek (on) value, aur boundary ke just bahar ek (off) value. Isi ko \"on-point\" aur \"off-point\" analysis bhi kehte hain.",
        "body2": "Output domain bhi utna hi important hai: agar bill 0 se 10,000 ke beech hona chahiye, to test sirf input par nahi — output par bhi check karo. Invalid output (negative total, overflow, rounding error) ek defect hai, chahe input valid tha.",
        "chips": ["Sub-domain", "On-point", "Off-point", "Output domain", "Boundary"]
      },
      {
        "type": "points",
        "title": "Domain Errors Ke 4 Prakar",
        "kicker": "Defect Types",
        "points": [
          "Closure error: boundary off-by-one. Valid 1–100 hai par code 1–99 accept karta hai.",
          "Shift error: poora boundary khisak gaya — valid 18–60 ki jagah code 20–60 check karta hai.",
          "Missing boundary: ek taraf ka check hi nahi — quantity negative bhi accept ho jaati hai.",
          "Extra boundary: jo rule hi nahi tha wo lag gaya — 100 ke bajay 50 par hi reject.",
          "Boundary tilt: do variables ki condition galat jodi — (x<10 && y<10) ki jagah (x<10 || y<10).",
          "Output domain error: input sahi par calculation galat — discount double lag gaya."
        ]
      },
      {
        "type": "points",
        "title": "Domain Testing Kab Use Karein",
        "kicker": "When To Use",
        "points": [
          "Numeric fields with limits — age, quantity, price, percentage, marks.",
          "Multi-variable constraints — EMI calculator (amount, tenure, rate) jahan relation ho.",
          "Decision table ke saare conditions ek domain banate hain.",
          "Input validation layer — API request body, form validation.",
          "Calculation engine — output range aur rounding verify.",
          "Kab nahi: workflow/state dependent behaviour (state testing), UI layout (visual testing), performance (load testing)."
        ]
      },
      {
        "type": "diagram",
        "title": "Input Domain Ke Sub-Domains",
        "kicker": "Diagram",
        "diagram": "st3-domain",
        "caption": "Quantity 1–100 ka domain teen hisson mein — har hisse se nominal aur boundary values"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Domain testing = input aur output domain ko sub-domains mein baant kar test karna.",
          "Har sub-domain se ek nominal value + har boundary par on-point aur off-point value.",
          "Ye EP (kaunse hisse) + BVA (kinare) ka combined practical model hai.",
          "Domain errors: closure, shift, missing boundary, extra boundary, boundary tilt.",
          "Output domain bhi test karo — sahi input par galat output bhi defect hai.",
          "Black-box hai — code dekhe bina test design hota hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is domain testing? Explain with an example.",
        "answer": "**Domain Testing:** Black-box technique jisme program ke input aur output domain ko analyse karke sub-domains mein baanta jaata hai aur chune hue values se test kiya jaata hai — har sub-domain se ek nominal value aur har boundary ke dono taraf ki value. Ye EP + BVA ka practical combination hai.\n\n**Steps:**\n1. Input variables aur unki valid range identify karo.\n2. Constraints aur dependencies note karo (amount ≤ balance).\n3. Expected output domain define karo.\n4. Sub-domains banao (valid aur invalid).\n5. Har sub-domain se on-point (nominal) value chuno.\n6. Har boundary ke liye off-point (just bahar) value chuno.\n7. Test execute karke output expected domain mein hai ya nahi check karo.\n\n**Example — quantity 1 se 100:**\n- Sub-domains: <1 (invalid), 1–100 (valid), >100 (invalid).\n- Values: 0 (off), 1 (on boundary), 2 (on), 50 (nominal), 99 (on), 100 (on boundary), 101 (off).\n- Expected: 0 aur 101 par error, baaki par order accept.\n- Output domain: total 0 se 10,00,000 ke beech; agar total negative aaye to defect.\n\n**Use:** form validation, EMI calculator, marks entry, discount rules, API input validation.\n\n**Diagram:** Refer to Domain Testing diagram."
      },
      {
        "question": "Explain the types of domain errors with examples.",
        "answer": "**Domain errors** = input domain ki condition galat implement hone se aaye defects.\n\n1. **Closure error (off-by-one):** Boundary ek se shift ho gayi.\n   Example: valid 1–100 hona chahiye, code `qty < 100` likhta hai → 100 reject ho jaata hai.\n\n2. **Shift error:** Poora boundary khisak gaya.\n   Example: valid 18–60 ki jagah code 20–60 check karta hai → 18 aur 19 galat reject.\n\n3. **Missing boundary:** Ek taraf ka check hi nahi.\n   Example: upper limit check nahi → quantity 99999 accept ho jaati hai.\n\n4. **Extra boundary:** Jo limit requirement mein nahi thi wo lag gayi.\n   Example: discount 5000 se upar milna chahiye, par code 3000 par hi de deta hai.\n\n5. **Boundary tilt:** Do conditions ke beech AND/OR galat.\n   Example: valid = (age ≥ 18 AND citizen) hona chahiye, code OR lagata hai → non-citizen ko bhi allow.\n\n6. **Output domain error:** Input sahi par calculation galat.\n   Example: discount 10% + member 2% = 12% hona chahiye, code 20% de deta hai.\n\n**Kaise pakdein:** on-point (boundary par) aur off-point (just bahar) test values har boundary ke liye rakho, aur output value ko expected range se compare karo.\n\n**Diagram:** Refer to Domain Testing diagram."
      },
      {
        "question": "Differentiate between domain testing, equivalence partitioning and boundary value analysis.",
        "answer": "**Domain Testing vs EP vs BVA:**\n\n| Point | Equivalence Partitioning | Boundary Value Analysis | Domain Testing |\n|---|---|---|---|\n| Core idea | Domain ko classes mein baanto | Class ke kinare test karo | Sub-domains + on/off points + output domain |\n| Test values | Ek representative per class | Boundary aur just bahar | Nominal + boundary + off-point, input aur output dono |\n| Scope | Input classes | Input boundary | Input + output domain, multi-variable |\n| Defect type | Missing validation | Off-by-one, wrong operator | Closure, shift, missing/extra boundary, tilt |\n| Relation | Basic technique | EP ka extension | EP + BVA ka combined applied form |\n\n**Short way to remember:**\n- EP — \"kaunse hisse hain?\"\n- BVA — \"us hisse ke kinare sahi hain?\"\n- Domain testing — \"poore domain ka map banao: hisse + kinare + output, aur chune hue points test karo.\"\n\n**Note:** kai textbooks domain testing ko EP/BVA ka hi naam maante hain; difference sirf formality ka hai — domain testing mein output domain aur multi-variable constraints par zyada focus hota hai.\n\n**Diagram:** Refer to Domain Testing diagram."
      }
    ]
  },
];
