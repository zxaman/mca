// Expanded Topic 1.9 - Software Quality Assurance Trends
module.exports = {
  id: "sqa-trends",
  number: "1.9",
  title: "Software Quality Assurance Trends",
  subtitle: "Modern SQA trends — PSP, TSP, OO methodology aur emerging areas",
  icon: "trend",
  accent: "#00ff88",
  englishDefinition: "Software Quality Assurance is continuously evolving with new trends and methodologies. Modern trends include PSP (Personal Software Process), TSP (Team Software Process), Object-Oriented methodology, CMMI integration, Six Sigma in SQA, automation testing, and continuous quality improvement approaches. These trends aim to improve quality, reduce costs, and increase efficiency.",
  intro: "Software quality assurance aaj kal badal raha hai — naye methods aur technologies aate ja rahe hain. PSP aur TSP aise process models hain jo individual aur team quality improve karte hain. OO methodology objects pe based design hai. Modern SQA mein automation, CMMI, aur Six Sigma ka use badh raha hai. Is chapter mein hum in trends ko detailed mein dekhenge.",
  sections: [
    {
      type: "definition",
      title: "SQA Trends kya hain?",
      kicker: "Definition",
      body: "SQA trends modern quality assurance approaches hain jo software quality improve karne ke liye use hote hain. Ye trends traditional QA approaches ko replace ya enhance karte hain. Main trends: PSP (Personal Software Process), TSP (Team Software Process), Object-Oriented Methodology, CMMI, Six Sigma, Automation Testing, Continuous Quality Improvement. Ye trends quality, cost, aur efficiency improve karte hain.",
      body2: "Simple words mein: Jaise technology badalti hai, waise hi software quality methods bhi badalte hain. Naye trends aate hain jo quality aur efficiency aur improve karte hain. PSP aur TSP aise naye methods hain jo individual aur team quality improve karte hain.",
      chips: ["PSP", "TSP", "OO", "CMMI", "Automation"]
    },
    {
      type: "cards",
      title: "PSP vs TSP",
      kicker: "Personal aur Team Process",
      cards: [
        {
          icon: "user",
          title: "PSP (Personal Software Process)",
          body: "PSP individual developers ka structured process hai. PSP mein planning, design, code, test, aur postmortem phases hain. Individual quality improve karta hai. Developers apna process measure aur improve karte hain. PSP ka goal hai individual performance improve karna."
        },
        {
          icon: "users",
          title: "TSP (Team Software Process)",
          body: "TSP team-based development process hai. TSP mein team roles aur processes structured hain. Team performance improve karta hai. TSP teams PSP principles use karte hain. TSP ka goal hai team quality aur productivity improve karna."
        },
        {
          icon: "check",
          title: "PSP vs TSP Difference",
          body: "PSP individual hai — single developer ka process. TSP team hai — multiple developers ka process. PSP individual quality improve karta hai. TSP team quality aur productivity improve karta hai. Dono CSV (Common Software Process) pe based hain."
        }
      ]
    },
    {
      type: "definition",
      title: "PSP (Personal Software Process)",
      kicker: "PSP Overview",
      body: "PSP Individual Software Process hai. PSP 4 phases pe based hai: Planning, Design, Code, Test. Planning: Tasks plan karna, resources plan karna. Design: Detailed design banaya jata hai. Code: Code likhna. Test: Testing karna, defects find karna. Postmortem: Process analysis karna, improvement plan karna. PSP benefits: Individual quality improve karta hai, defects reduce karta hai, productivity improve karta hai.",
      body2: "PSP aise samjho — ek student ka personal study plan. Har student apna plan banata hai, topics study karta hai, exam deta hai, aur apna performance analyze karta hai. PSP bhi wahi hai — developer apna process measure aur improve karta hai.",
      chips: ["Planning", "Design", "Code", "Test"]
    },
    {
      type: "points",
      title: "PSP Phases Details",
      kicker: "PSP Phases",
      points: [
        "Planning: Tasks plan karna. Resources plan karna. Time estimate karna. Size estimate karna.",
        "Design: Detailed design banaya jata hai. Architecture design. Module design. Interface design.",
        "Code: Code likhna. Coding standards follow karna. Code documentation karna.",
        "Test: Testing karna. Defects find karna. Test cases design karna. Test results record karna.",
        "Postmortem: Process analysis karna. Defects analysis karna. Improvement plan karna. Process metrics track karna."
      ]
    },
    {
      type: "definition",
      title: "TSP (Team Software Process)",
      kicker: "TSP Overview",
      body: "TSP Team Software Process hai. TSP PSP principles use karta hai team level pe. TSP roles: Team Leader, Development Manager, Quality Manager, Planning Manager, Design Manager, Test Manager. TSP phases: Launch, Planning, Requirements, Design, Implementation, Test, Postmortem. TSP benefits: Team quality improve karta hai, team productivity improve karta hai, defects reduce karta hai, team coordination improve karta hai.",
      body2: "TSP aise samjho — ek cricket team ka game plan. Captain (Team Leader) plan banata hai, coach (Development Manager) strategy dekhata hai, aur sab milkar quality performance dikhate hain. TSP bhi wahi hai — team ka structured process hai.",
      chips: ["Team Leader", "Quality Manager", "Planning", "Design"]
    },
    {
      type: "points",
      title: "TSP Phases Details",
      kicker: "TSP Phases",
      points: [
        "Launch: Team formation. Roles define karna. Objectives define karna. Process launch karna.",
        "Planning: Project plan banaya jata hai. Schedule plan karna. Resources plan karna. Risks plan karna.",
        "Requirements: Requirements develop karna. Requirements analyze karna. Requirements document karna.",
        "Design: Architecture design. Detailed design. Design review karna. Design validation karna.",
        "Implementation: Code develop karna. Unit testing karna. Code review karna.",
        "Test: Integration testing. System testing. UAT. Defects fix karna.",
        "Postmortem: Process analysis karna. Team performance evaluate karna. Improvement plan karna."
      ]
    },
    {
      type: "definition",
      title: "Object-Oriented Methodology",
      kicker: "OO Methodology",
      body: "Object-Oriented Methodology software design objects pe based hai. OO concepts: Encapsulation (data aur methods combine), Inheritance (code reuse), Polymorphism (flexible interfaces), Abstraction (complexity hide karna). OO benefits: Code reuse increase karta hai. Maintainability improve karta hai. Development time reduce karta hai. Quality improve karta hai.",
      body2: "OO methodology aise samjho — ek building banana. Building mein floors (classes), rooms (objects), doors (methods) hote hain. Har room apne aap ek unit hai, lekin building ke saath connected bhi hai. OO bhi wahi hai — objects ek doosre se connected hote hain aur code reuse hota hai.",
      chips: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"]
    },
    {
      type: "points",
      title: "OO Methodology Concepts",
      kicker: "OO Concepts",
      points: [
        "Encapsulation: Data aur methods combine karna. Internal details hide karna. Interface expose karna. Data protection provide karna.",
        "Inheritance: Parent class se child class inherits karna. Code reuse karna. Hierarchy create karna. Specialization karna.",
        "Polymorphism: Ek interface different behaviors show karna. Method overloading karna. Method overriding karna. Flexible interfaces provide karna.",
        "Abstraction: Complexity hide karna. Essential features expose karna. Implementation details hide karna. Simplicity maintain karna.",
        "Classes: Object templates. Properties define karna. Methods define karna. Objects create karna.",
        "Objects: Class instances. Data hold karte hain. Methods execute karte hain. Interaction karte hain.",
        "Benefits: Code reuse increase karta hai. Maintainability improve karta hai. Development time reduce karta hai. Quality improve karta hai. Scalability improve karta hai."
      ]
    },
    {
      type: "definition",
      title: "Modern SQA Trends",
      kicker: "Emerging Trends",
      body: "Modern SQA trends multiple areas mein faile hue hain: 1. CMMI Integration — Capability Maturity Model Integration. Process maturity improve karta hai. 2. Six Sigma in SQA — Defects minimize karta hai. Process variation reduce karta hai. 3. Automation Testing — Automated testing implement karna. Test coverage improve karta hai. 4. Continuous Quality Improvement — Continuous improvement cycles. Kaizen approach. 5. DevOps Integration — Development aur operations integrate karna. Continuous delivery karna. 6. Agile Quality — Agile methods mein quality integrate karna. Iterative testing karna.",
      body2: "Modern trends aise samjho — naye techniques jo quality aur efficiency aur improve karte hain. CMMI process maturity improve karta hai. Automation testing speed aur accuracy improve karta hai. DevOps development aur operations ko milata hai.",
      chips: ["CMMI", "Six Sigma", "Automation", "DevOps", "Agile"]
    },
    {
      type: "points",
      title: "Trend Selection",
      kicker: "Choosing Trends",
      points: [
        "Project Size: Small projects ke liye Agile. Large projects ke liye CMMI.",
        "Team Experience: Experienced teams TSP use kar sakte hain. New teams PSP se start kar sakte hain.",
        "Quality Goals: High quality ke liye Six Sigma. Fast delivery ke liye Agile.",
        "Budget: Limited budget ke liye PSP. Large budget ke liye TSP.",
        "Timeline: Tight timeline ke liye Automation testing. Flexible timeline ke liye OO methodology.",
        "Technology: Modern technology ke liye DevOps. Traditional technology ke liye CMMI.",
        "Process Maturity: Low maturity ke liye PSP. High maturity ke liye TSP + CMMI.",
        "Team Structure: Individual developers ke liye PSP. Team-based development ke liye TSP."
      ]
    },
    {
      type: "diagram",
      title: "SQA Trends Overview",
      kicker: "Diagram",
      diagram: "sqa-trends-overview",
      caption: "SQA Trends — PSP, TSP, OO Methodology, CMMI, Six Sigma, Automation, DevOps"
    },
    {
      type: "recap",
      title: "Recap",
      kicker: "5 Seconds Mein Yaad Karo",
      points: [
        "SQA Trends: PSP, TSP, OO methodology, CMMI, Six Sigma, Automation, DevOps, Agile.",
        "PSP: Individual process — Planning, Design, Code, Test, Postmortem.",
        "TSP: Team process — Launch, Planning, Requirements, Design, Implementation, Test, Postmortem.",
        "OO Methodology: Encapsulation, Inheritance, Polymorphism, Abstraction.",
        "Modern Trends: CMMI (maturity), Six Sigma (defects), Automation (speed), DevOps (integration).",
        "Trend Selection: Project size, team experience, quality goals, budget, timeline, technology."
      ]
    }
  ],
  examQuestions: [
    {
      question: "Explain PSP and TSP with their benefits.",
      answer: "**PSP (Personal Software Process):** Individual developers ka structured process. 4 phases: Planning (tasks plan, resources plan, time estimate), Design (detailed design, architecture), Code (coding, documentation), Test (testing, defects find), Postmortem (process analysis, improvement plan).\n\n**PSP Benefits:** Individual quality improve karta hai. Defects reduce karta hai. Productivity improve karta hai. Developers apna process measure aur improve karte hain.\n\n**TSP (Team Software Process):** Team-based development process. PSP principles team level pe use karta hai. Roles: Team Leader, Development Manager, Quality Manager, Planning Manager, Design Manager, Test Manager. Phases: Launch, Planning, Requirements, Design, Implementation, Test, Postmortem.\n\n**TSP Benefits:** Team quality improve karta hai. Team productivity improve karta hai. Defects reduce karta hai. Team coordination improve karta hai.\n\n**Difference:** PSP individual hai — single developer. TSP team hai — multiple developers. PSP individual quality improve karta hai. TSP team quality aur productivity improve karta hai."
    },
    {
      question: "What is Object-Oriented Methodology? Explain its key concepts.",
      answer: "**Object-Oriented Methodology:** Software design objects pe based hai. OO concepts objects aur classes pe based design provide karte hain.\n\n**Key Concepts:**\n\n1. **Encapsulation** — Data aur methods combine karna. Internal details hide karna. Interface expose karna. Data protection provide karna. Example: Class mein data private hota hai, sirf public methods se access hota hai.\n\n2. **Inheritance** — Parent class se child class inherits karna. Code reuse karna. Hierarchy create karna. Specialization karna. Example: Vehicle class se Car, Bike, Truck inherits karte hain.\n\n3. **Polymorphism** — Ek interface different behaviors show karna. Method overloading karna. Method overriding karna. Flexible interfaces provide karna. Example: Ek 'calculate' method different operations perform karta hai.\n\n4. **Abstraction** — Complexity hide karna. Essential features expose karna. Implementation details hide karna. Simplicity maintain karna. Example: Car ka user sirf steering, brakes aur accelerator dekhta hai — internal engine details nahi.\n\n**Benefits:** Code reuse increase karta hai. Maintainability improve karta hai. Development time reduce karta hai. Quality improve karta hai. Scalability improve karta hai.\n\n**Diagram:** Refer to SQA Trends Overview diagram."
    },
    {
      question: "Describe modern SQA trends and how to select them.",
      answer: "**Modern SQA Trends:**\n\n1. **CMMI Integration** — Capability Maturity Model Integration. Process maturity improve karta hai. 5 levels: Initial, Repeatable, Defined, Managed, Optimizing.\n\n2. **Six Sigma in SQA** — Defects minimize karta hai. Process variation reduce karta hai. DMAIC methodology: Define, Measure, Analyze, Improve, Control.\n\n3. **Automation Testing** — Automated testing implement karna. Test coverage improve karta hai. Speed aur accuracy improve karta hai. Tools: Selenium, JIRA, TestRail.\n\n4. **Continuous Quality Improvement** — Continuous improvement cycles. Kaizen approach. PDCA cycle: Plan, Do, Check, Act.\n\n5. **DevOps Integration** — Development aur operations integrate karna. Continuous delivery karna. CI/CD pipelines.\n\n6. **Agile Quality** — Agile methods mein quality integrate karna. Iterative testing karna. Sprint-based quality.\n\n**Trend Selection Factors:**\n- **Project Size:** Small projects ke liye Agile. Large projects ke liye CMMI.\n- **Team Experience:** Experienced teams TSP use kar sakte hain. New teams PSP se start kar sakte hain.\n- **Quality Goals:** High quality ke liye Six Sigma. Fast delivery ke liye Agile.\n- **Budget:** Limited budget ke liye PSP. Large budget ke liye TSP.\n- **Timeline:** Tight timeline ke liye Automation testing.\n- **Technology:** Modern technology ke liye DevOps.\n- **Process Maturity:** Low maturity ke liye PSP. High maturity ke liye TSP + CMMI.\n\n**Diagram:** Refer to SQA Trends Overview diagram."
    },
    {
      question: "Differentiate between PSP and TSP.",
      answer: "**PSP vs TSP:**\n\n| Aspect | PSP | TSP |\n|---|---|---|\n| **Scope** | Individual developer | Team of developers |\n| **Focus** | Personal quality | Team quality |\n| **Phases** | Planning, Design, Code, Test, Postmortem | Launch, Planning, Requirements, Design, Implementation, Test, Postmortem |\n| **Roles** | Single developer | Team Leader, Quality Manager, Planning Manager, etc. |\n| **Goal** | Individual performance improve karna | Team quality aur productivity improve karna |\n| **Complexity** | Simpler — individual level | Complex — team level |\n| **Measurement** | Personal metrics | Team metrics |\n| **Benefits** | Individual quality, defects reduce | Team coordination, productivity |\n\n**Key Point:** PSP individual level pe work karta hai. TSP team level pe work karta hai. PSP TSP ka base hai — TSP PSP principles use karta hai team level pe. Dono CSV (Common Software Process) pe based hain.\n\n**Diagram:** Refer to SQA Trends Overview diagram."
    }
  ]
};
