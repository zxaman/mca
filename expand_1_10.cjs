// Expanded Topic 1.10 - Testing Software System Security
module.exports = {
  id: "software-security-testing",
  number: "1.10",
  title: "Testing Software System Security",
  subtitle: "Security testing, Six-Sigma, TQM aur software security validation",
  icon: "shield",
  accent: "#00ff88",
  englishDefinition: "Testing Software System Security involves validating that software systems are secure against unauthorized access, attacks, and vulnerabilities. Security testing includes vulnerability assessment, penetration testing, code review, and security audits. Six-Sigma is a methodology for minimizing defects and variations in processes. TQM (Total Quality Management) is a comprehensive approach to quality improvement involving all organizational members. Security testing ensures data confidentiality, integrity, availability, authentication, and authorization mechanisms work correctly.",
  intro: "Software system security testing alag alag techniques hain jo software ke vulnerabilities detect aur prevent karne mein help karte hain. Six-Sigma quality improvement methodology hai jo defects minimize karti hai. TQM organization-wide quality improvement approach hai. Hum dekhenge ki security testing kya hai, Six-Sigma aur TQM kya hai, aur yeh kaise software quality improve karte hain.",
  sections: [
    {
      type: "definition",
      title: "Software Security Testing",
      kicker: "Definition",
      body: "Security testing software systems ke security validate karne ka process hai. Objectives: Confidentiality (data private), Integrity (data correct), Availability (system accessible), Authentication (user identity verify), Authorization (access control). Security testing types: Vulnerability scanning, Penetration testing, Code review, Security audits, Risk assessment. Security testing ensures data confidentiality, integrity, availability, authentication, aur authorization mechanisms work correctly.",
      body2: "Security testing aise samjho — ek ghar ki security check. Ghar mein locks (authentication), cameras (monitoring), alarms (alerts) hote hain. Security testing mein hum check karte hain ki locks kaam kar rahe hain, cameras working hain, aur alarms set hain. Software mein bhi wahi hai — hum check karte hain ki data safe hai, system accessible hai, aur unauthorized access roka gaya hai.",
      chips: ["Confidentiality", "Integrity", "Availability", "Authentication", "Authorization"]
    },
    {
      type: "definition",
      title: "Security Testing Objectives",
      kicker: "5 Objectives",
      body: "Security testing 5 objectives pe focus karta hai: 1. Confidentiality — Data private hai. Unauthorized users data access nahi kar sakte. 2. Integrity — Data correct hai. Data tamper nahi hua hai. 3. Availability — System accessible hai. System down nahi hai. 4. Authentication — User identity verify hota hai. User ka identity confirm hota hai. 5. Authorization — Access control hai. Authorized users hi access kar sakte hain. Ye 5 objectives CIA Triad ka part hain.",
      chips: ["Privacy", "Correctness", "Access", "Identity", "Control"]
    },
    {
      type: "points",
      title: "Security Testing Types",
      kicker: "Testing Types",
      points: [
        "Vulnerability Scanning — Automatic tools se vulnerabilities detect karna. Tools: Nessus, OpenVAS. Vulnerabilities scan karna.",
        "Penetration Testing — Hacker ki tarah attack karna. System ko hack karne ka attempt karna. Vulnerabilities exploit karna.",
        "Code Review — Code manual review karna. Security issues check karna. Code patterns analyze karna.",
        "Security Audits — Security policies check karna. Compliance verify karna. Security standards check karna.",
        "Risk Assessment — Security risks identify karna. Risk levels assess karna. Mitigation plan karna."
      ]
    },
    {
      type: "definition",
      title: "Six-Sigma",
      kicker: "Six-Sigma Overview",
      body: "Six-Sigma quality improvement methodology hai jo defects minimize karti hai. Six-Sigma process variation reduce karta hai. DMAIC framework: Define (problem define karna), Measure (current performance measure karna), Analyze (root cause analyze karna), Improve (solutions implement karna), Control (results control karna). DMADV framework: Define (design goals define karna), Measure (design requirements measure karna), Analyze (design alternatives analyze karna), Design (optimal design design karna), Verify (design verify karna). Six-Sigma defects 3.4 per million opportunities tak reduce karta hai.",
      body2: "Six-Sigma aise samjho — ek restaurant mein khana banate hain. Agar ek dish mein 1000 mein se 3.4 baar problem aati hai, toh yeh Six-Sigma hai. Yeh batata hai ki process mein kitna variation hai. Lower sigma = less variation = better quality.",
      chips: ["DMAIC", "DMADV", "3.4 DPMO"]
    },
    {
      type: "points",
      title: "Six-Sigma Details",
      kicker: "Six-Sigma Phases",
      points: [
        "Define: Problem define karna. Goals define karna. Project scope define karna. Customer requirements define karna.",
        "Measure: Current performance measure karna. Data collect karna. Process baseline establish karna. Defects measure karna.",
        "Analyze: Root cause analyze karna. Causes identify karna. Data analysis karna. Variation analyze karna.",
        "Improve: Solutions develop karna. Solutions implement karna. Defects reduce karna. Process improve karna.",
        "Control: Results control karna. Improvements maintain karna. Controls implement karna. Standards document karna.",
        "DMADV: Define (design goals), Measure (requirements), Analyze (alternatives), Design (optimal design), Verify (design verify).",
        "Sigma Levels: 1 Sigma = 69% defects. 3 Sigma = 66,807 DPMO. 6 Sigma = 3.4 DPMO. Higher sigma = better quality.",
        "Benefits: Quality improve karta hai. Cost reduce karta hai. Customer satisfaction improve karta hai. Process efficiency improve karta hai."
      ]
    },
    {
      type: "definition",
      title: "TQM (Total Quality Management)",
      kicker: "TQM Overview",
      body: "TQM organization-wide quality improvement approach hai. TQM principles: Customer focus (customer needs pe focus), Total involvement (sabhi employees involve), Continuous improvement (continuous improvement), Fact-based decision making (facts pe based decisions), Systematic approach (systematic approach). TQM tools: SPC (Statistical Process Control), Quality circles, Benchmarking, Flowcharts, Cause-effect diagrams, Pareto charts. TQM benefits: Quality improve karta hai, Productivity increase karta hai, Customer satisfaction improve karta hai, Waste reduce karta hai.",
      body2: "TQM aise samjho — ek school ka principal har teacher, student, aur staff se quality improve karne ke liye kaam karta hai. Sirf ek teacher nahi — sab milkar quality improve karte hain. TQM bhi wahi hai — organization ka har member quality improve karta hai.",
      chips: ["Customer focus", "Total involvement", "Continuous improvement", "Fact-based"]
    },
    {
      type: "points",
      title: "TQM Details",
      kicker: "TQM Principles",
      points: [
        "Customer Focus: Customer needs pe focus. Customer satisfaction improve karna. Quality customer expectations meet karna.",
        "Total Involvement: Sabhi employees involve. Har employee quality improve karta hai. Teamwork promote karna.",
        "Continuous Improvement: Continuous improvement. Kaizen approach. PDCA cycle: Plan, Do, Check, Act.",
        "Fact-Based Decisions: Facts pe based decisions. Data analysis karna. Metrics use karna. Evidence-based decisions.",
        "Systematic Approach: Systematic approach. Processes integrate karna. Quality system develop karna.",
        "TQM Tools: SPC (Statistical Process Control) — process variation control karna. Quality circles — group discussion. Benchmarking — best practices compare karna.",
        "Benefits: Quality improve karta hai. Productivity increase karta hai. Customer satisfaction improve karta hai. Waste reduce karta hai. Employee morale improve karta hai.",
        "TQM vs Six-Sigma: TQM organization-wide hai. Six-Sigma specific problems solve karta hai. Dono quality improve karte hain."
      ]
    },
    {
      type: "diagram",
      title: "Security Testing Overview",
      kicker: "Diagram",
      diagram: "security-testing-overview",
      caption: "Security Testing — Six-Sigma, TQM, Vulnerability Assessment, Penetration Testing"
    },
    {
      type: "recap",
      title: "Recap",
      kicker: "5 Seconds Mein Yaad Karo",
      points: [
        "Security Testing: Confidentiality, Integrity, Availability, Authentication, Authorization.",
        "Security Testing Types: Vulnerability scanning, Penetration testing, Code review, Security audits, Risk assessment.",
        "Six-Sigma: DMAIC (Define, Measure, Analyze, Improve, Control). 3.4 DPMO target.",
        "TQM: Customer focus, Total involvement, Continuous improvement, Fact-based decisions.",
        "Six-Sigma specific problems solve karta hai. TQM organization-wide quality improve karta hai."
      ]
    }
  ],
  examQuestions: [
    {
      question: "Explain Six-Sigma methodology with its phases.",
      answer: "**Six-Sigma:** Quality improvement methodology jo defects minimize karti hai. Process variation reduce karta hai.\n\n**DMAIC Framework (5 Phases):**\n\n1. **Define** — Problem define karna. Goals define karna. Project scope define karna. Customer requirements define karna. Yeh phase mein problem clear kiya jata hai.\n\n2. **Measure** — Current performance measure karna. Data collect karna. Process baseline establish karna. Defects measure karna. Yeh phase mein current state measure kiya jata hai.\n\n3. **Analyze** — Root cause analyze karna. Causes identify karna. Data analysis karna. Variation analyze karna. Yeh phase mein root causes find kiye jaate hain.\n\n4. **Improve** — Solutions develop karna. Solutions implement karna. Defects reduce karna. Process improve karna. Yeh phase mein solutions implement kiye jaate hain.\n\n5. **Control** — Results control karna. Improvements maintain karna. Controls implement karna. Standards document karna. Yeh phase mein improvements control kiye jaate hain.\n\n**DMADV Framework:** Define (design goals), Measure (requirements), Analyze (alternatives), Design (optimal design), Verify (design verify).\n\n**Sigma Levels:** 1 Sigma = 69% defects. 3 Sigma = 66,807 DPMO. 6 Sigma = 3.4 DPMO. Higher sigma = better quality.\n\n**Benefits:** Quality improve karta hai. Cost reduce karta hai. Customer satisfaction improve karta hai.\n\n**Diagram:** Refer to Security Testing Overview diagram."
    },
    {
      question: "What is TQM? Explain its principles and benefits.",
      answer: "**TQM (Total Quality Management):** Organization-wide quality improvement approach. Har employee quality improve karta hai.\n\n**5 Principles:**\n\n1. **Customer Focus** — Customer needs pe focus. Customer satisfaction improve karna. Quality customer expectations meet karna.\n\n2. **Total Involvement** — Sabhi employees involve. Har employee quality improve karta hai. Teamwork promote karna.\n\n3. **Continuous Improvement** — Continuous improvement. Kaizen approach. PDCA cycle: Plan, Do, Check, Act.\n\n4. **Fact-Based Decisions** — Facts pe based decisions. Data analysis karna. Metrics use karna. Evidence-based decisions.\n\n5. **Systematic Approach** — Systematic approach. Processes integrate karna. Quality system develop karna.\n\n**TQM Tools:** SPC (Statistical Process Control), Quality circles, Benchmarking, Flowcharts, Cause-effect diagrams, Pareto charts.\n\n**Benefits:** Quality improve karta hai. Productivity increase karta hai. Customer satisfaction improve karta hai. Waste reduce karta hai. Employee morale improve karta hai.\n\n**TQM vs Six-Sigma:** TQM organization-wide hai. Six-Sigma specific problems solve karta hai. Dono quality improve karte hain.\n\n**Diagram:** Refer to Security Testing Overview diagram."
    },
    {
      question: "Explain security testing and its types.",
      answer: "**Security Testing:** Software systems ke security validate karne ka process. Yeh ensure karta hai ki software unauthorized access, attacks, aur vulnerabilities se protected hai.\n\n**5 Objectives:**\n1. **Confidentiality** — Data private hai. Unauthorized users data access nahi kar sakte.\n2. **Integrity** — Data correct hai. Data tamper nahi hua hai.\n3. **Availability** — System accessible hai. System down nahi hai.\n4. **Authentication** — User identity verify hota hai.\n5. **Authorization** — Access control hai. Authorized users hi access kar sakte hain.\n\n**5 Types:**\n1. **Vulnerability Scanning** — Automatic tools se vulnerabilities detect karna. Tools: Nessus, OpenVAS.\n2. **Penetration Testing** — Hacker ki tarah attack karna. System ko hack karne ka attempt karna.\n3. **Code Review** — Code manual review karna. Security issues check karna.\n4. **Security Audits** — Security policies check karna. Compliance verify karna.\n5. **Risk Assessment** — Security risks identify karna. Risk levels assess karna.\n\n**Diagram:** Refer to Security Testing Overview diagram."
    }
  ]
};
