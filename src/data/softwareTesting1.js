// ============================================================
// UNIT 1 — Fundamentals of Software Quality Assurance
// Topics: 1.1 through 1.7
// Format: Same as other subjects (English definition, Hinglish explanation, diagrams, exam questions)
// ============================================================

export const softwareTestingUnits1 = [
  {
    id: 'unit-1',
    number: '1',
    name: 'Fundamentals of Software Quality Assurance',
    topics: [
      // ========================================================
      // TOPIC 1 — Fundamentals of Software Quality
      // ========================================================
      {
        id: 'fundamentals-software-quality',
        number: '1.1',
        title: 'Fundamentals of Software Quality',
        subtitle: 'Definition of Quality, QA, QC, SQA aur SQA basics',
        icon: 'check',
        accent: '#0047ff',
        englishDefinition: 'Software Quality is the degree to which a software system meets its requirements, is reliable, maintainable, and performs efficiently. Quality Assurance (QA) is the process of ensuring quality standards are met. Quality Control (QC) is the verification of specific deliverables. Software Quality Assurance (SQA) is a systematic approach to ensuring software quality throughout the lifecycle.',
        intro: 'Software quality ka matlab hai software ka accha hona — woh kaam karta hai, reliable hai, aur maintainable hai. QA, QC aur SQA alag-alag concepts hain lekin ek doosre se related hain. Is chapter mein hum dekhenge ki quality kya hai, QA aur QC mein kya difference hai, aur SQA ka basics kya hai.',
        sections: [
          {
            type: 'definition',
            title: 'Quality kya hai?',
            body: `Quality = kaam ka accha hona. Software mein quality ka matlab hai ki software:
1. Requirements follow karta hai
2. Reliable hai — kabhi na kabhi crash nahi karta
3. Maintainable hai — aasani se modify kiya ja sakta hai
4. Efficient hai — fast chalta hai
5. User-friendly hai — aasani se use kiya ja sakta hai

Quality ek subjective term hai — ek user ke liye accha hai woh dusre ke liye accha nahi hai. Isliye quality ko measure karne ke liye metrics use hote hain.`,
            chips: ['Reliability', 'Maintainability', 'Efficiency', 'Usability'],
          },
          {
            type: 'cards',
            title: 'QA vs QC vs SQA',
            cards: [
              { icon: 'check', title: 'QA (Quality Assurance)', body: 'Process-oriented. Prevents defects. Whole team responsibility. Systematic approach.' },
              { icon: 'search', title: 'QC (Quality Control)', body: 'Product-oriented. Finds defects. QA team responsibility. Verification of deliverables.' },
              { icon: 'shield', title: 'SQA (Software QA)', body: 'SQA = QA + QC combined. Full lifecycle coverage. Standards aur processes apply karta hai.' },
            ],
          },
          {
            type: 'diagram',
            title: 'QA vs QC Diagram',
            diagram: 'qa-qc-comparison',
            caption: 'QA = Prevention (Process) | QC = Detection (Product)',
          },
          {
            type: 'points',
            title: 'SQA Basics',
            points: [
              'SQA software development lifecycle mein quality ensure karta hai.',
              'SQA standards follow karta hai — ISO 9001, CMMI, Six Sigma.',
              'SQA audits conduct karta hai — process check karna.',
              'SQA metrics track karta hai — quality measure karna.',
              'SQA training provide karta hai — team ko quality train karna.',
              'SQA documentation maintain karta hai — records rakhna.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Quality = kaam ka accha hona. QA = Prevention (Process). QC = Detection (Product). SQA = QA + QC combined. SQA basics = standards, audits, metrics, training, documentation.',
          },
        ],
        examQuestions: [
          {
            question: 'Define software quality. What are its key characteristics?',
            answer: 'Software Quality = degree to which software meets requirements, is reliable, maintainable, and efficient. Key characteristics: Reliability, Maintainability, Efficiency, Usability. Quality subjective hai — user needs pe depend karta hai. Metrics se measure hota hai.',
          },
          {
            question: 'Differentiate between QA and QC.',
            answer: 'QA (Quality Assurance): Process-oriented. Prevents defects. Whole team responsibility. Systematic approach. QC (Quality Control): Product-oriented. Finds defects. QA team responsibility. Verification of deliverables. QA prevent karta hai, QC detect karta hai.',
          },
          {
            question: 'What is SQA? Explain its basics.',
            answer: 'SQA (Software Quality Assurance) = QA + QC combined. Full lifecycle coverage. Standards aur processes apply karta hai. Basics: Standards (ISO 9001, CMMI), Audits (process check), Metrics (quality measure), Training (team train), Documentation (records).',
          },
        ],
      },
      // ========================================================
      // TOPIC 2 — Components of the Software Quality Assurance System
      // ========================================================
      {
        id: 'components-sqa-system',
        number: '1.2',
        title: 'Components of the Software Quality Assurance System',
        subtitle: 'SQA system ke components aur structure',
        icon: 'grid',
        accent: '#00aaff',
        englishDefinition: 'A Software Quality Assurance System consists of several components including quality standards, quality metrics, quality reviews, testing processes, training programs, and audit mechanisms. These components work together to ensure software quality throughout the development lifecycle.',
        intro: 'SQA system ek structured approach hai software quality ensure karne ke liye. Isme multiple components hote hain jo ek saath kaam karte hain. Hum dekhenge ki SQA system mein kaunse components hote hain aur woh kaise kaam karte hain.',
        sections: [
          {
            type: 'definition',
            title: 'SQA System Components',
            body: `SQA system mein yeh components hote hain:
1. Quality Standards — ISO 9001, CMMI, Six Sigma
2. Quality Metrics — quality measure karne ke liye
3. Quality Reviews — code aur process review
4. Testing Processes — unit, integration, system testing
5. Training Programs — team ko quality train karna
6. Audit Mechanisms — process check karna`,
            chips: ['Standards', 'Metrics', 'Reviews', 'Testing', 'Training', 'Audits'],
          },
          {
            type: 'cards',
            title: 'Component Details',
            cards: [
              { icon: 'book', title: 'Quality Standards', body: 'ISO 9001, CMMI, Six Sigma. Standards define karte hain ki quality kya hai. Organizations follow karte hain. Certification ke liye zaroori hai.' },
              { icon: 'chart', title: 'Quality Metrics', body: 'Defect density, test coverage, code complexity. Metrics se quality measure hota hai. Trends track karte hain.' },
              { icon: 'eye', title: 'Quality Reviews', body: 'Code review, design review, walkthroughs. Peer review important hai. Defects early detect karte hain.' },
              { icon: 'test', title: 'Testing Processes', body: 'Unit, integration, system, acceptance testing. Testing QC ka part hai. Defects detect karta hai.' },
              { icon: 'users', title: 'Training Programs', body: 'Team ko quality train karte hain. New tools aur processes sikhaate hain. Skills improve karte hain.' },
              { icon: 'shield', title: 'Audit Mechanisms', body: 'Process audit, product audit. Independent review hota hai. Compliance check karta hai.' },
            ],
          },
          {
            type: 'diagram',
            title: 'SQA System Architecture',
            diagram: 'sqa-components',
            caption: 'SQA System — Standards, Metrics, Reviews, Testing, Training, Audits',
          },
          {
            type: 'points',
            title: 'How Components Work Together',
            points: [
              'Standards define karte hain ki quality kya hai.',
              'Metrics quality measure karte hain.',
              'Reviews defects early detect karte hain.',
              'Testing products verify karte hain.',
              'Training team ko quality sikhaate hain.',
              'Audits compliance check karte hain.',
              'Sab components milte hain SQA system banane ke liye.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'SQA system components = Standards, Metrics, Reviews, Testing, Training, Audits. Sab components milte hain quality ensure karne ke liye. Standards define karte hain, metrics measure karte hain, reviews detect karte hain, testing verifies karte hain, training teach karte hain, audits check karte hain.',
          },
        ],
        examQuestions: [
          {
            question: 'What are the components of an SQA system?',
            answer: 'SQA system components: Quality Standards (ISO 9001, CMMI), Quality Metrics (defect density, coverage), Quality Reviews (code review, design review), Testing Processes (unit, integration, system), Training Programs (team training), Audit Mechanisms (process audit, product audit).',
          },
          {
            question: 'Explain the role of quality standards in SQA.',
            answer: 'Quality standards define karte hain ki quality kya hai. ISO 9001, CMMI, Six Sigma standard frameworks hain. Organizations follow karte hain. Certification ke liye zaroori hai. Standards consistent quality provide karte hain. Processes standardize karte hain.',
          },
          {
            question: 'How do quality reviews help in SQA?',
            answer: 'Quality reviews: Code review, design review, walkthroughs. Peer review important hai. Defects early detect karte hain. Cost effective hai — early detection less expensive hai. Knowledge sharing karte hain. Team learn karte hain. Quality improve karte hain.',
          },
        ],
      },
      // ========================================================
      // TOPIC 3 — Software Quality in Business Context
      // ========================================================
      {
        id: 'software-quality-business',
        number: '1.3',
        title: 'Software Quality in Business Context',
        subtitle: 'Business mein software quality ka importance',
        icon: 'briefcase',
        accent: '#ff8800',
        englishDefinition: 'Software quality directly impacts business success. High-quality software reduces costs, increases customer satisfaction, improves reputation, and provides competitive advantage. Quality software leads to lower maintenance costs, fewer defects, and better user experience.',
        intro: 'Software quality business ke liye bahut important hai. Accha software business ko success dilata hai. Is chapter mein hum dekhenge ki software quality business context mein kaam karti hai aur business success mein kya role hai.',
        sections: [
          {
            type: 'definition',
            title: 'Business Impact of Quality',
            body: `Software quality business pe direct impact daalta hai:
1. Lower Costs — Accha software maintain karne mein less cost hota hai.
2. Customer Satisfaction — Accha software user ko pasand aata hai.
3. Reputation — Accha software company ki image acchi banata hai.
4. Competitive Advantage — Accha quality competitive advantage provide karta hai.
5. Reduced Risks — Accha software risks kam karta hai.`,
            chips: ['Lower Costs', 'Customer Satisfaction', 'Reputation', 'Competitive Advantage'],
          },
          {
            type: 'cards',
            title: 'Quality-Cost Relationship',
            cards: [
              { icon: 'money', title: 'Cost of Quality', body: 'Prevention costs, appraisal costs, internal failure costs, external failure costs. High quality = low failure costs.' },
              { icon: 'chart', title: 'ROI of Quality', body: 'Investment in quality returns karata hai. Less defects = less support. Customer retention increase karta hai.' },
              { icon: 'users', title: 'Customer Impact', body: 'Quality customer satisfaction increase karta hai. Negative reviews avoid karta hai. Brand loyalty build karta hai.' },
              { icon: 'trophy', title: 'Market Position', body: 'Quality competitive advantage provide karta hai. Market share increase karta hai. Reputation build karta hai.' },
            ],
          },
          {
            type: 'diagram',
            title: 'Quality-Cost-Benefit Analysis',
            diagram: 'quality-business-impact',
            caption: 'Quality → Lower Costs + Higher Satisfaction + Better Reputation → Business Success',
          },
          {
            type: 'points',
            title: 'Business Benefits of Quality',
            points: [
              'Maintenance costs kam hote hain — less bugs.',
              'Customer satisfaction increase hota hai — better UX.',
              'Reputation improve hoti hai — positive reviews.',
              'Competitive advantage milta hai — quality differentiator.',
              'Risks kam hote hain — fewer failures.',
              'Revenue increase hota hai — customer retention.',
              'Market share increase hota hai — better positioning.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Software quality business impact: Lower costs, higher satisfaction, better reputation, competitive advantage, reduced risks. Quality-cost relationship: investment in quality returns karata hai. Business benefits: maintenance costs kam, customer satisfaction increase, reputation improve, competitive advantage milta hai.',
          },
        ],
        examQuestions: [
          {
            question: 'How does software quality impact business success?',
            answer: 'Software quality business impact: Lower costs (less maintenance), Customer satisfaction (better UX), Reputation (positive reviews), Competitive advantage (quality differentiator), Reduced risks (fewer failures). Quality business success dilata hai.',
          },
          {
            question: 'Explain the quality-cost relationship in business.',
            answer: 'Quality-cost relationship: Prevention costs (training, planning), Appraisal costs (testing, reviews), Internal failure costs (bugs found before release), External failure costs (bugs found after release). High quality = low failure costs. Investment in quality returns karata hai.',
          },
          {
            question: 'What are the business benefits of software quality?',
            answer: 'Business benefits: Maintenance costs kam, Customer satisfaction increase, Reputation improve, Competitive advantage milta hai, Risks kam hote hain, Revenue increase hota hai (customer retention), Market share increase hota hai.',
          },
        ],
      },
      // ========================================================
      // TOPIC 4 — Planning for Software Quality Assurance
      // ========================================================
      {
        id: 'planning-sqa',
        number: '1.4',
        title: 'Planning for Software Quality Assurance',
        subtitle: 'SQA planning process aur best practices',
        icon: 'calendar',
        accent: '#00ff88',
        englishDefinition: 'SQA planning involves defining quality goals, establishing standards, allocating resources, creating schedules, and defining processes. A good SQA plan ensures quality is built into the software from the beginning rather than tested in at the end.',
        intro: 'SQA planning important hai quality ensure karne ke liye. Ek accha plan quality ko software mein built karta hai. Is chapter mein hum dekhenge ki SQA planning kya hai, kyun important hai, aur best practices kya hain.',
        sections: [
          {
            type: 'definition',
            title: 'SQA Planning Kya Hai?',
            body: `SQA planning = quality goals define karna, standards establish karna, resources allocate karna, schedules create karna, processes define karna. Accha plan quality ko early build karta hai — testing sirf end mein nahi.

SQA planning kai phases mein hota hai:
1. Initiation — Goals define karna
2. Planning — Standards, resources, schedules
3. Execution — Plan follow karna
4. Monitoring — Progress track karna
5. Closure — Lessons learn karna`,
            chips: ['Goals', 'Standards', 'Resources', 'Schedules', 'Processes'],
          },
          {
            type: 'cards',
            title: 'SQA Plan Components',
            cards: [
              { icon: 'target', title: 'Quality Goals', body: 'Measurable objectives. Defect density target. Coverage target. Quality levels define karte hain.' },
              { icon: 'book', title: 'Standards & Procedures', body: 'Coding standards, review procedures, testing procedures. Consistent approach provide karte hain.' },
              { icon: 'users', title: 'Roles & Responsibilities', body: 'Who is responsible for quality. Team members ke roles clear hone chahiye. Accountability define karta hai.' },
              { icon: 'calendar', title: 'Schedule & Milestones', body: 'Quality activities ka timeline. Reviews, testing, audits ka schedule. Milestones set karte hain.' },
              { icon: 'chart', title: 'Metrics & Measures', body: 'Quality metrics define karte hain. How quality measure hogi. Trends track karte hain.' },
              { icon: 'file', title: 'Documentation', body: 'SQA plan document. Standards documents. Test plans. Documentation important hai.' },
            ],
          },
          {
            type: 'diagram',
            title: 'SQA Planning Process',
            diagram: 'sqa-planning-process',
            caption: 'SQA Planning — Goals → Standards → Resources → Schedules → Processes → Documentation',
          },
          {
            type: 'points',
            title: 'SQA Planning Best Practices',
            points: [
              'Quality goals early define karo — start of project.',
              'Standards establish karo — coding, review, testing.',
              'Resources allocate karo — budget, time, people.',
              'Schedules create karo — quality activities ka timeline.',
              'Processes define karo — how quality ensure hogi.',
              'Documentation maintain karo — plan document.',
              'Reviews conduct karo — plan review karo.',
              'Adjustments make karo — changes aane par.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'SQA planning: Quality goals define karna, standards establish karna, resources allocate karna, schedules create karna, processes define karna. Best practices: Early planning, clear goals, established standards, allocated resources, defined processes, maintained documentation. Accha plan quality built karta hai.',
          },
        ],
        examQuestions: [
          {
            question: 'What is SQA planning? Why is it important?',
            answer: 'SQA planning = quality goals define karna, standards establish karna, resources allocate karna, schedules create karna, processes define karna. Important hai kyunki accha plan quality built karta hai — testing sirf end mein nahi. Quality early ensure karta hai.',
          },
          {
            question: 'List the components of an SQA plan.',
            answer: 'SQA plan components: Quality Goals (measurable objectives), Standards & Procedures (coding, review, testing), Roles & Responsibilities (who is responsible), Schedule & Milestones (timeline), Metrics & Measures (how to measure), Documentation (plan document).',
          },
          {
            question: 'What are the best practices for SQA planning?',
            answer: 'Best practices: Quality goals early define, Standards establish, Resources allocate, Schedules create, Processes define, Documentation maintain, Reviews conduct, Adjustments make. Early planning important hai. Quality built-in karo — not tested-in.',
          },
        ],
      },
      // ========================================================
      // TOPIC 5 — Product Quality and Process Quality
      // ========================================================
      {
        id: 'product-process-quality',
        number: '1.5',
        title: 'Product Quality and Process Quality',
        subtitle: 'Product quality vs process quality — difference aur importance',
        icon: 'cube',
        accent: '#aa00ff',
        englishDefinition: 'Product quality refers to the characteristics of the final software product. Process quality refers to the quality of the development process used to create the product. Both are important: good processes lead to good products, and good products indicate good processes.',
        intro: 'Product quality aur process quality alag-alag concepts hain lekin ek doosre se related hain. Product quality final product ki quality hai. Process quality development process ki quality hai. Is chapter mein hum dekhenge ki dono kya hain aur unka relationship kya hai.',
        sections: [
          {
            type: 'definition',
            title: 'Product vs Process Quality',
            body: `Product Quality = final software product ki quality. Reliability, usability, performance, maintainability.

Process Quality = development process ki quality. Planning, design, coding, testing processes. Standards, procedures, methodologies.

Difference:
- Product quality = outcome (what we get)
- Process quality = approach (how we work)
- Good process → Good product
- Good product indicates good process`,
            chips: ['Product Quality', 'Process Quality'],
          },
          {
            type: 'cards',
            title: 'Product Quality Aspects',
            cards: [
              { icon: 'shield', title: 'Reliability', body: 'Software kabhi na kabhi crash nahi karta. Bugs kam hote hain. Stable chalta hai. User trust build karta hai.' },
              { icon: 'users', title: 'Usability', body: 'Aasani se use kiya ja sakta hai. User-friendly interface. Good UX. User satisfaction increase karta hai.' },
              { icon: 'speed', title: 'Performance', body: 'Fast chalta hai. Efficient hai. Resources ka accha use karta hai. User experience accha rakhta hai.' },
              { icon: 'wrench', title: 'Maintainability', body: 'Aasani se modify kiya ja sakta hai. Code readable hai. Documentation accha hai. Future changes easy hain.' },
              { icon: 'expand', title: 'Scalability', body: 'Growth handle karta hai. More users handle karta hai. More data handle karta hai. Future growth support karta hai.' },
              { icon: 'shield', title: 'Security', body: 'Secure hai. Vulnerabilities kam hain. Data protect karta hai. Attack se protect karta hai.' },
            ],
          },
          {
            type: 'cards',
            title: 'Process Quality Aspects',
            cards: [
              { icon: 'target', title: 'Planning', body: 'Requirements clear hain. Goals defined hain. Resources allocated hain. Schedule realistic hai.' },
              { icon: 'design', title: 'Design', body: 'Architecture accha hai. Design documented hai. Design reviewed hai. Requirements follow karta hai.' },
              { icon: 'code', title: 'Coding', body: 'Coding standards follow hote hain. Code reviewed hota hai. Code documented hota hai. Best practices follow hote hain.' },
              { icon: 'test', title: 'Testing', body: 'Testing comprehensive hai. Coverage accha hai. Defects detected hain. Quality ensure karta hai.' },
              { icon: 'book', title: 'Standards', body: 'Standards established hain. Procedures defined hain. Follow hote hain. Consistency maintain hoti hai.' },
              { icon: 'chart', title: 'Metrics', body: 'Metrics defined hain. Measured hote hain. Tracked hote hain. Improvement ke liye use hote hain.' },
            ],
          },
          {
            type: 'diagram',
            title: 'Product-Process Quality Relationship',
            diagram: 'product-process-quality',
            caption: 'Good Process → Good Product | Good Product Indicates Good Process',
          },
          {
            type: 'points',
            title: 'Relationship Between Product and Process Quality',
            points: [
              'Good process → Good product — quality built-in.',
              'Good product indicates good process — outcome proves approach.',
              'Bad process → Bad product — quality issues.',
              'Bad product may indicate bad process — investigation needed.',
              'Both important — product quality outcome hai, process quality approach hai.',
              'Process improvement → product improvement — continuous improvement.',
              'Focus on both — ek ek karke nahi, dono saath.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Product quality = final product ki quality (reliability, usability, performance, maintainability, scalability, security). Process quality = development process ki quality (planning, design, coding, testing, standards, metrics). Relationship: Good process → Good product. Good product indicates good process. Dono important hain.',
          },
        ],
        examQuestions: [
          {
            question: 'Differentiate between product quality and process quality.',
            answer: 'Product Quality = final software product ki quality. Reliability, usability, performance, maintainability, scalability, security. Process Quality = development process ki quality. Planning, design, coding, testing, standards, metrics. Product quality = outcome, process quality = approach.',
          },
          {
            question: 'What are the aspects of product quality?',
            answer: 'Product quality aspects: Reliability (stable, fewer bugs), Usability (user-friendly), Performance (fast, efficient), Maintainability (easy to modify), Scalability (handle growth), Security (protected from attacks). Sab aspects product quality define karte hain.',
          },
          {
            question: 'What is the relationship between product and process quality?',
            answer: 'Relationship: Good process → Good product (quality built-in). Good product indicates good process (outcome proves approach). Bad process → Bad product. Bad product may indicate bad process. Dono important hain — focus on both. Process improvement → product improvement.',
          },
        ],
      },
      // ========================================================
      // TOPIC 6 — Software Process Models
      // ========================================================
      {
        id: 'software-process-models',
        number: '1.6',
        title: 'Software Process Models',
        subtitle: 'Different process models — Waterfall, Agile, Spiral, V-Model',
        icon: 'flow',
        accent: '#ff0080',
        englishDefinition: 'Software process models define the approach to software development. Common models include Waterfall (linear), Agile (iterative), Spiral (risk-driven), V-Model (verification and validation), and Incremental models. Each model has strengths and weaknesses.',
        intro: 'Software process models development approach define karte hain. Alag-alag models alag-alag tarike se kaam karte hain. Is chapter mein hum dekhenge ki common process models kya hain, unki characteristics kya hain, aur unka use kab hota hai.',
        sections: [
          {
            type: 'definition',
            title: 'Process Models Kya Hain?',
            body: `Process models = software development ka approach. Different models different situations ke liye suitable hain.

Common models:
1. Waterfall — Linear, sequential
2. Agile — Iterative, incremental
3. Spiral — Risk-driven
4. V-Model — Verification & Validation
5. Incremental — Gradual development
6. RAD — Rapid Application Development`,
            chips: ['Waterfall', 'Agile', 'Spiral', 'V-Model', 'Incremental'],
          },
          {
            type: 'cards',
            title: 'Waterfall Model',
            cards: [
              { icon: 'down', title: 'Linear Approach', body: 'Sequential process. Ek phase khatam hone par doosra start hota hai. Phases: Requirements → Design → Coding → Testing → Deployment.' },
              { icon: 'check', title: 'Advantages', body: 'Simple hai. Easy to understand. Well-documented hai. Planning accha hai.' },
              { icon: 'warn', title: 'Disadvantages', body: 'Rigid hai. Changes difficult hain. Testing late hota hai. Customer feedback late milta hai.' },
              { icon: 'target', title: 'When to Use', body: 'Small projects. Well-defined requirements. Fixed budget aur timeline. Government projects.' },
            ],
          },
          {
            type: 'cards',
            title: 'Agile Model',
            cards: [
              { icon: 'refresh', title: 'Iterative Approach', body: 'Iterative aur incremental. Short cycles (sprints). Customer feedback early. Adaptive hai.' },
              { icon: 'users', title: 'Advantages', body: 'Flexible hai. Customer involvement accha hai. Early delivery hoti hai. Quality accha hai.' },
              { icon: 'warn', title: 'Disadvantages', body: 'Costly hai. Documentation less hota hai. Team ka experience important hai. Scalability issues ho sakte hain.' },
              { icon: 'target', title: 'When to Use', body: 'Large projects. Changing requirements. Customer collaboration zaroori hai. Modern software development.' },
            ],
          },
          {
            type: 'cards',
            title: 'Spiral Model',
            cards: [
              { icon: 'loop', title: 'Risk-Driven', body: 'Risk analysis important hai. Iterative approach. Four phases: Plan → Risk analysis → Engineer → Evaluate.' },
              { icon: 'check', title: 'Advantages', body: 'Risk management accha hai. Quality accha hai. Customer feedback accha hai. Good for large projects.' },
              { icon: 'warn', title: 'Disadvantages', body: 'Complex hai. Costly hai. Expertise zaroori hai. Duration long hota hai.' },
              { icon: 'target', title: 'When to Use', body: 'Large projects. High-risk projects. Mission-critical systems. Government projects.' },
            ],
          },
          {
            type: 'cards',
            title: 'V-Model',
            cards: [
              { icon: 'check', title: 'Verification & Validation', body: 'Testing parallel hota hai. Verification (right product) aur Validation (right product). Left side: Verification. Right side: Validation.' },
              { icon: 'check', title: 'Advantages', body: 'Testing early start hota hai. Quality accha hai. Defects early detect hote hain. Documentation accha hai.' },
              { icon: 'warn', title: 'Disadvantages', body: 'Rigid hai. Changes difficult hain. Testing complex hai. Long duration hota hai.' },
              { icon: 'target', title: 'When to Use', body: 'Mission-critical systems. Safety-critical systems. Well-defined requirements. Government projects.' },
            ],
          },
          {
            type: 'diagram',
            title: 'Process Models Comparison',
            diagram: 'process-models-comparison',
            caption: 'Waterfall (Linear) | Agile (Iterative) | Spiral (Risk-Driven) | V-Model (Verification & Validation)',
          },
          {
            type: 'points',
            title: 'Choosing the Right Model',
            points: [
              'Project size — small vs large.',
              'Requirements — clear vs changing.',
              'Risk level — low vs high.',
              'Customer involvement — low vs high.',
              'Budget aur timeline — fixed vs flexible.',
              'Team experience — beginner vs expert.',
              'Project type — simple vs complex.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Process models: Waterfall (linear, simple), Agile (iterative, flexible), Spiral (risk-driven, complex), V-Model (verification & validation, quality-focused). Each model strengths aur weaknesses hain. Right model choose karna project requirements pe depend karta hai.',
          },
        ],
        examQuestions: [
          {
            question: 'Describe the Waterfall model. What are its advantages and disadvantages?',
            answer: 'Waterfall model: Linear, sequential process. Phases: Requirements → Design → Coding → Testing → Deployment. Advantages: Simple, easy to understand, well-documented, good planning. Disadvantages: Rigid, changes difficult, testing late, customer feedback late. Use: Small projects, well-defined requirements.',
          },
          {
            question: 'Explain the Agile model and its characteristics.',
            answer: 'Agile model: Iterative, incremental approach. Short cycles (sprints). Customer feedback early. Adaptive hai. Advantages: Flexible, customer involvement, early delivery, quality accha. Disadvantages: Costly, documentation less, team experience important. Use: Large projects, changing requirements.',
          },
          {
            question: 'Compare Spiral and V-Model.',
            answer: 'Spiral Model: Risk-driven, iterative. Four phases: Plan → Risk analysis → Engineer → Evaluate. Advantages: Risk management, quality, customer feedback. Disadvantages: Complex, costly. V-Model: Verification & Validation. Testing parallel. Left side verification, right side validation. Advantages: Early testing, quality, early defect detection. Disadvantages: Rigid, complex, long duration.',
          },
        ],
      },
      // ========================================================
      // TOPIC 7 — 7 QC Tools and Modern Tools
      // ========================================================
      {
        id: 'qc-tools-modern',
        number: '1.7',
        title: '7 QC Tools and Modern Tools',
        subtitle: 'Quality Control tools aur modern tools',
        icon: 'tools',
        accent: '#00aaff',
        englishDefinition: 'The 7 QC Tools are: Check Sheet, Flow Chart, Histogram, Pareto Chart, Cause and Effect Diagram (Fishbone), Scatter Diagram, and Control Chart. Modern tools include automated testing tools, code analysis tools, and quality management systems like JIRA, Jenkins, SonarQube, and Selenium.',
        intro: 'QC tools quality control mein use hote hain. 7 traditional QC tools hain jo problems solve karne mein help karte hain. Modern tools automated testing aur quality management ke liye use hote hain. Is chapter mein hum dekhenge ki dono types ke tools kya hain.',
        sections: [
          {
            type: 'definition',
            title: '7 QC Tools Kya Hain?',
            body: `7 QC Tools:
1. Check Sheet — Data collect karne ke liye
2. Flow Chart — Process flow dikhane ke liye
3. Histogram — Data distribution dikhane ke liye
4. Pareto Chart — Problems prioritize karne ke liye
5. Cause and Effect Diagram (Fishbone) — Root cause analysis ke liye
6. Scatter Diagram — Relationship dikhane ke liye
7. Control Chart — Process control ke liye

Yeh tools problems identify aur solve karne mein help karte hain.`,
            chips: ['Check Sheet', 'Flow Chart', 'Histogram', 'Pareto Chart', 'Fishbone', 'Scatter', 'Control Chart'],
          },
          {
            type: 'cards',
            title: '7 QC Tools Details',
            cards: [
              { icon: 'list', title: 'Check Sheet', body: 'Data collect karta hai. Frequency count karta hai. Simple tool hai. Problems identify karta hai.' },
              { icon: 'flow', title: 'Flow Chart', body: 'Process flow dikhata hai. Steps dikhata hai. Decisions dikhata hai. Complex processes simplify karta hai.' },
              { icon: 'chart', title: 'Histogram', body: 'Data distribution dikhata hai. Bar chart hota hai. Patterns dikhata hai. Variability measure karta hai.' },
              { icon: 'chart', title: 'Pareto Chart', body: 'Problems prioritize karta hai. 80/20 rule follow karta hai. Important problems identify karta hai.' },
              { icon: 'fish', title: 'Fishbone Diagram', body: 'Root cause analysis karta hai. Causes identify karta hai. Effect pe focus karta hai. Problem solve karta hai.' },
              { icon: 'scatter', title: 'Scatter Diagram', body: 'Relationship dikhata hai. Correlation check karta hai. Patterns dikhata hai. Relationship measure karta hai.' },
              { icon: 'chart', title: 'Control Chart', body: 'Process control karta hai. Variation measure karta hai. Control limits set karta hai. Quality maintain karta hai.' },
            ],
          },
          {
            type: 'cards',
            title: 'Modern Tools',
            cards: [
              { icon: 'test', title: 'Automated Testing', body: 'Selenium, JUnit, TestNG. Automated tests run karte hain. Regression testing easy hai. Coverage accha hai.' },
              { icon: 'code', title: 'Code Analysis', body: 'SonarQube, ESLint, PMD. Code quality check karte hain. Best practices enforce karte hain. Defects detect karte hain.' },
              { icon: 'dashboard', title: 'Quality Management', body: 'JIRA, QUALCENTER, TestRail. Quality track karte hain. Defects manage karte hain. Reports generate karte hain.' },
              { icon: 'refresh', title: 'CI/CD Tools', body: 'Jenkins, GitLab CI, CircleCI. Continuous integration aur deployment. Automated builds aur tests. Quality ensure karte hain.' },
              { icon: 'performance', title: 'Performance Testing', body: 'JMeter, LoadRunner, Gatling. Performance test karte hain. Load test karte hain. Stress test karte hain.' },
              { icon: 'security', title: 'Security Testing', body: 'OWASP ZAP, Burp Suite, Nessus. Security vulnerabilities detect karte hain. Attack simulate karte hain. Security ensure karte hain.' },
            ],
          },
          {
            type: 'diagram',
            title: 'QC Tools Overview',
            diagram: 'qc-tools-overview',
            caption: '7 QC Tools — Check Sheet, Flow Chart, Histogram, Pareto Chart, Fishbone, Scatter, Control Chart',
          },
          {
            type: 'points',
            title: 'When to Use QC Tools',
            points: [
              'Check Sheet — Data collect karne ke liye.',
              'Flow Chart — Process understand karne ke liye.',
              'Histogram — Data distribution dikhane ke liye.',
              'Pareto Chart — Problems prioritize karne ke liye.',
              'Fishbone — Root cause analysis karne ke liye.',
              'Scatter Diagram — Relationship dikhane ke liye.',
              'Control Chart — Process control karne ke liye.',
              'Modern tools — Automated testing aur quality management ke liye.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: '7 QC Tools: Check Sheet (data collect), Flow Chart (process flow), Histogram (distribution), Pareto Chart (prioritize), Fishbone (root cause), Scatter (relationship), Control Chart (process control). Modern tools: Automated testing (Selenium), Code analysis (SonarQube), Quality management (JIRA), CI/CD (Jenkins), Performance testing (JMeter), Security testing (OWASP).',
          },
        ],
        examQuestions: [
          {
            question: 'List the 7 QC tools and explain their uses.',
            answer: '7 QC tools: Check Sheet (data collection), Flow Chart (process flow), Histogram (data distribution), Pareto Chart (problem prioritization), Cause and Effect Diagram/Fishbone (root cause analysis), Scatter Diagram (relationship), Control Chart (process control). Sab tools problems identify aur solve karne mein help karte hain.',
          },
          {
            question: 'Explain the Pareto Chart and its importance.',
            answer: 'Pareto Chart: Bar chart with cumulative line. 80/20 rule follow karta hai — 80% problems 20% causes se aate hain. Problems prioritize karta hai. Important problems identify karta hai. Focus important problems pe rehta hai. Effective problem solving tool hai.',
          },
          {
            question: 'What are modern quality tools? Give examples.',
            answer: 'Modern tools: Automated testing (Selenium, JUnit), Code analysis (SonarQube, ESLint), Quality management (JIRA, TestRail), CI/CD tools (Jenkins, GitLab CI), Performance testing (JMeter, LoadRunner), Security testing (OWASP ZAP, Burp Suite). Modern tools automated aur efficient hain. Quality ensure karte hain.',
          },
        ],
      },
      {
        id: 'qa-models',
        number: '1.8',
        title: 'Quality Assurance Models',
        subtitle: 'ISO-9000, CMM, CMMI, TMM, SPICE, Malcolm Baldrige, P-CMM',
        icon: 'check',
        accent: '#aa00ff',
        englishDefinition: 'Quality Assurance Models are frameworks that provide structured approaches to implementing and improving software quality processes. ISO-9000 is an international standard for quality management. CMM (Capability Maturity Model) and CMMI (Capability Maturity Model Integration) are frameworks for process improvement. TMM (Test Maturity Model) focuses on testing processes. SPICE (Software Process Improvement and Capability Determination) is an international standard. Malcolm Baldrige Model is a performance excellence framework. P-CMM (People-Capability Maturity Model) focuses on human resources.',
        intro: 'Quality Assurance Models different frameworks hain jo software quality processes implement aur improve karne ka structured approach provide karte hain. Is topic mein hum dekhenge ISO-9000, CMM, CMMI, TMM, SPICE, Malcolm Baldrige aur P-CMM models. Har model ka different focus hota hai — kuch processes par focus karte hain, kuch people par, kuch overall quality management par.',
        sections: [
          {
            type: 'definition',
            title: 'Quality Assurance Models kya hain?',
            body: `Quality Assurance Models frameworks hain jo quality processes structured approach se implement aur improve karte hain. Different models alag alag focus par focus karte hain:

1. **ISO-9000** — International standard for quality management
2. **CMM/CMMI** — Process maturity aur improvement
3. **TMM** — Testing process maturity
4. **SPICE** — Software process improvement
5. **Malcolm Baldrige** — Performance excellence
6. **P-CMM** — People capability maturity`,
          },
          {
            type: 'points',
            title: 'ISO-9000 Series',
            points: [
              '**ISO-9000** — Quality management standard. Quality systems ka requirements define karta hai. International level par recognized hai. Quality management principles par based hai.',
              '**ISO-9001** — Quality management system requirements. Organizations ko certify karta hai. Compliance demonstrate karta hai. Continuous improvement encourage karta hai.',
              '**ISO-9002** — Production, installation aur servicing ka requirements. ISO-9001 ka subset hai. Quality assurance ka requirements define karta hai.',
              '**ISO-9003** — Final inspection aur testing ka requirements. Delivery quality ensure karta hai. Testing requirements define karta hai.',
              '**Benefits** — International recognition milta hai. Customer satisfaction improve hota hai. Quality culture develop hota hai. Continuous improvement aata hai.',
            ],
          },
          {
            type: 'points',
            title: 'CMM (Capability Maturity Model)',
            points: [
              '**CMM** — Software process maturity framework. 5 maturity levels define karta hai. Process improvement guidance provide karta hai. Software development processes improve karta hai.',
              '**Level 1** — Initial. Processes ad hoc hain. Chaotic hain. Successful projects dependent hain. Individual effort important hai.',
              '**Level 2** — Repeatable. Basic project management processes established hain. Track record consistent hai. Cost, schedule aur quality controlled hain.',
              '**Level 3** — Defined. Software process documented, standardized aur integrated hain. Organization-wide standard process hai. Training program exist hai.',
              '**Level 4** — Managed. Quantitative process control. Detailed measures collect karte hain. Quality aur productivity quantitatively managed hain.',
              '**Level 5** — Optimizing. Continuous process improvement. Innovations deploy karte hain. Processes optimized hain. Defect prevention focus hai.',
            ],
          },
          {
            type: 'points',
            title: 'CMMI (Capability Maturity Model Integration)',
            points: [
              '**CMMI** — CMM ka updated version. Multiple disciplines integrate karta hai. Software, systems aur people integrate karta hai. Better improvement guidance provide karta hai.',
              '**22 Process Areas** — Requirements management, project planning, quality assurance, risk management, etc. High maturity level organizations all process areas mature aur effective karte hain.',
              '**5 Levels** — Initial, Managed, Defined, Quantitatively Managed, Optimizing. Level 1: Initial. Level 2: Managed. Level 3: Defined. Level 4: Quantitatively Managed. Level 5: Optimizing.',
              '**Benefits** — Process efficiency improve hota hai. Quality consistent rehta hai. Project success rate increase hota hai. Organization maturity improve hota hai.',
            ],
          },
          {
            type: 'points',
            title: 'TMM (Test Maturity Model)',
            points: [
              '**TMM** — Testing process maturity framework. Testing processes improve karta hai. 5 maturity levels define karta hai. Software testing discipline enhance karta hai.',
              '**Level 1** — Initial. Testing ad hoc hai. No formal testing. Testing last phase mein hota hai.',
              '**Level 2** — Repeatable. Basic testing practices exist hain. Testing planned aur tracked hai. Testing organization established hai.',
              '**Level 3** — Defined. Testing process documented aur standardized hai. Testing integrated development process mein hai. Testing training program exist hai.',
              '**Level 4** — Managed. Testing quantitatively managed hai. Testing metrics collect karte hain. Testing effectiveness measured karta hai.',
              '**Level 5** — Optimizing. Testing process continuous improvement hai. Testing innovations deploy karte hain. Testing optimized hai.',
            ],
          },
          {
            type: 'points',
            title: 'SPICE (Software Process Improvement)',
            points: [
              '**SPICE** — Software Process Improvement and Capability Determination. International standard hai. Process assessment framework provide karta hai. Process improvement guidance provide karta hai.',
              '**Assessment** — Software process capability assess karta hai. Processes evaluate karta hai. Strengths aur weaknesses identify karta hai. Improvement areas identify karta hai.',
              '**Capability Levels** — 0: Incomplete. 1: Performed. 2: Managed. 3: Established. 4: Predictable. 5: Optimizing. Har level process capability ko represent karta hai.',
              '**Benefits** — Process understanding improve hota hai. Improvement planning better hota hai. International comparison possible hai. Continuous improvement encourage karta hai.',
            ],
          },
          {
            type: 'points',
            title: 'Malcolm Baldrige Model',
            points: [
              '**Malcolm Baldrige Model** — Performance excellence framework. Organizational performance improve karta hai. Quality aur excellence recognize karta hai. Management practices improve karta hai.',
              '**Categories** — Leadership, Strategic Planning, Customer Focus, Measurement/Analysis, Human Resources, Operational Focus, Results. Har category organizational excellence ko evaluate karta hai.',
              '**Focus Areas** — Customer satisfaction, Operational performance, Financial performance, Human resource development, Leadership effectiveness.',
              '**Benefits** — Management practices improve hote hain. Customer satisfaction increase hota hai. Organizational performance improve hota hai. Excellence culture develop hota hai.',
            ],
          },
          {
            type: 'points',
            title: 'P-CMM (People-Capability Maturity Model)',
            points: [
              '**P-CMM** — People-Capability Maturity Model. Human resources practices improve karta hai. Workforce capability develop karta hai. 5 maturity levels define karta hai.',
              '**Level 1** — Initial. Workforce practices ad hoc hain. No focus on people development. Individual initiative important hai.',
              '**Level 2** — Managed. Basic workforce practices exist hain. Performance management establish hai. Training programs exist hain.',
              '**Level 3** — Defined. Workforce practices documented aur standardized hain. Career development integrated hai. Workforce capabilities defined hain.',
              '**Level 4** — Quantitatively Managed. Workforce capabilities quantitatively managed hain. Training effectiveness measured hai. Skills tracking systematic hai.',
              '**Level 5** — Optimizing. Workforce capability continuously improved hai. People development optimized hai. Innovation encouraged hai.',
            ],
          },
          {
            type: 'comparison',
            title: 'Model Comparison',
            comparison: [
              { feature: 'Focus', iso9000: 'Quality Management', cmm: 'Process Maturity', cmmi: 'Process Integration', tmm: 'Testing Maturity', spice: 'Process Assessment', baldrige: 'Performance Excellence', pcmm: 'People Capability' },
              { feature: 'Main Goal', iso9000: 'Standardization', cmm: 'Process Improvement', cmmi: 'Process Integration', tmm: 'Testing Improvement', spice: 'Process Assessment', baldrige: 'Organizational Excellence', pcmm: 'Workforce Development' },
              { feature: 'Levels', iso9000: 'Certification', cmm: '5 Levels', cmmi: '5 Levels', tmm: '5 Levels', spice: '6 Levels', baldrige: 'Award Criteria', pcmm: '5 Levels' },
            ],
          },
          {
            type: 'diagram',
            title: 'QA Models Overview',
            diagram: 'qa-models-overview',
            caption: 'QA Models — ISO-9000, CMM, CMMI, TMM, SPICE, Malcolm Baldrige, P-CMM',
          },
          {
            type: 'points',
            title: 'Model Selection',
            points: [
              '**ISO-9000** — Quality management standard ke liye.',
              '**CMM/CMMI** — Process maturity improve karne ke liye.',
              '**TMM** — Testing process improve karne ke liye.',
              '**SPICE** — Process assessment ke liye.',
              '**Malcolm Baldrige** — Organizational excellence ke liye.',
              '**P-CMM** — People capability improve karne ke liye.',
              '**Selection** — Organizational needs par based hai. Multiple models combine bhi kar sakte hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'QA Models: ISO-9000 (quality management standard), CMM (5 maturity levels), CMMI (CMM integration), TMM (testing maturity), SPICE (process assessment), Malcolm Baldrige (performance excellence), P-CMM (people capability). Har model alag focus par focus karta hai. Model selection organizational needs par based hai.',
          },
        ],
        examQuestions: [
          {
            question: 'Explain ISO-9000 series of quality standards.',
            answer: 'ISO-9000 series: ISO-9000 (quality management standard), ISO-9001 (quality management system requirements), ISO-9002 (production/installation requirements), ISO-9003 (final inspection requirements). International recognition milta hai. Quality management principles follow karte hain. Continuous improvement encourage karte hain.',
          },
          {
            question: 'Describe the 5 levels of CMM.',
            answer: 'CMM 5 levels: Level 1 — Initial (ad hoc processes), Level 2 — Repeatable (basic project management), Level 3 — Defined (documented, standardized processes), Level 4 — Managed (quantitative process control), Level 5 — Optimizing (continuous process improvement). Levels progressively process maturity increase karte hain.',
          },
          {
            question: 'What is CMMI and how is it different from CMM?',
            answer: 'CMMI (Capability Maturity Model Integration) — CMM ka updated version. Multiple disciplines (software, systems, people) integrate karta hai. 22 process areas cover karta hai. 5 levels same hain. Better improvement guidance provide karta hai. CMM se more comprehensive hai.',
          },
          {
            question: 'Explain TMM and its importance.',
            answer: 'TMM (Test Maturity Model) — Testing process maturity framework. 5 levels: Initial (ad hoc testing), Repeatable (basic testing practices), Defined (documented testing process), Managed (quantitative testing), Optimizing (continuous testing improvement). Testing discipline enhance karta hai. Testing effectiveness improve karta hai.',
          },
          {
            question: 'What is SPICE and what are its benefits?',
            answer: 'SPICE (Software Process Improvement and Capability Determination) — International standard for process assessment. Software process capability assess karta hai. 6 capability levels (0-5). Strengths aur weaknesses identify karta hai. Process improvement guidance provide karta hai. International comparison possible hai.',
          },
        ],
      },
      {
        id: 'sqa-trends',
        number: '1.9',
        title: 'Software Quality Assurance Trends',
        subtitle: 'PSP/TSP, OO Methodology, Clean-room SE, Defect Injection, Auditing, Inspections, CASE Tools',
        icon: 'trends',
        accent: '#ff0080',
        englishDefinition: 'Software Quality Assurance Trends include modern approaches and methodologies that enhance software quality. PSP (Personal Software Process) and TSP (Team Software Process) are structured approaches for individual and team software development. Object-Oriented Methodology focuses on objects and classes. Clean-room software engineering emphasizes defect prevention through formal methods. Defect Injection and prevention techniques help identify and prevent defects. Internal Auditing and Assessments ensure process compliance. Inspections and Walkthroughs are peer review techniques. CASE tools automate software engineering tasks and improve quality.',
        intro: 'Software Quality Assurance Trends modern approaches hain jo software quality enhance karte hain. Is topic mein hum dekhenge PSP/TSP, Object-Oriented Methodology, Clean-room software engineering, Defect Injection aur prevention, Internal Auditing aur Assessments, Inspections aur Walkthroughs, aur CASE tools. Modern trends quality improve karte hain, efficiency increase karte hain, aur defects kam karte hain.',
        sections: [
          {
            type: 'definition',
            title: 'SQA Trends kya hain?',
            body: `Software Quality Assurance Trends modern approaches hain jo software quality enhance karte hain. Trends include:

1. **PSP/TSP** — Personal aur Team Software Process
2. **OO Methodology** — Object-Oriented approach
3. **Clean-room SE** — Defect prevention through formal methods
4. **Defect Injection** — Defects intentionally inject karna
5. **Internal Auditing** — Process compliance verify karna
6. **Inspections & Walkthroughs** — Peer review techniques
7. **CASE Tools** — Computer-Aided Software Engineering tools`,
          },
          {
            type: 'points',
            title: 'PSP (Personal Software Process)',
            points: [
              '**PSP** — Personal Software Process. Individual developers ka structured process hai. Software engineering practices personal level par teach karta hai. Personal process improvement provide karta hai.',
              '**Phases** — Planning, Design, Requirements, Design, Code, Compile, Test, Postmortem. Har phase ka specific tasks hain. Personal data collect karte hain. Self-improvement plan develop karte hain.',
              '**Components** — Scripts, forms, standard practices, measurement database. Individual metrics collect karte hain. Defects track karte hain. Time management improve karte hain.',
              '**Benefits** — Personal quality improve hota hai. Defect rates reduce hote hain. Effort estimation improve hota hai. Professional discipline develop hota hai.',
            ],
          },
          {
            type: 'points',
            title: 'TSP (Team Software Process)',
            points: [
              '**TSP** — Team Software Process. Team-based software development ka structured approach hai. Team aur project management practices provide karta hai. Team performance improve karta hai.',
              '**Team Roles** — Team Leader, Development Manager, Design Manager, Test Manager, Quality Manager, Build Manager, Configuration Manager. Har role ka specific responsibilities hain.',
              '**Phases** — Launch, Planning, Requirements, Design, Implementation, Test, Postmortem. Team processes structured hain. Team metrics collect karte hain. Project success rate improve karta hai.',
              '**Benefits** — Team performance improve hota hai. Project quality increase hota hai. Defects kam hote hain. Team collaboration better hota hai.',
            ],
          },
          {
            type: 'points',
            title: 'Object-Oriented Methodology',
            points: [
              '**OO Methodology** — Object-Oriented approach. Software design aur development objects par based hai. Classes, objects, inheritance, polymorphism concepts use karta hai. Quality improve karta hai.',
              '**Encapsulation** — Data aur methods ek class mein combine karta hai. Data protection provide karta hai. Implementation details hidden karta hai. Interface expose karta hai.',
              '**Inheritance** — Existing classes se new classes create karta hai. Code reuse enable karta hai. Hierarchical relationships define karta hai. Software maintainability improve karta hai.',
              '**Polymorphism** — Different classes ek hi interface respond karte hain. Flexible code write karta hai. Extensibility provide karta hai. Complex systems manage karta hai.',
              '**OO Benefits** — Code reuse increase hota hai. Maintainability improve hota hai. Development time reduce hota hai. Quality increase hota hai. Testing easier hota hai.',
            ],
          },
          {
            type: 'points',
            title: 'Clean-room Software Engineering',
            points: [
              '**Clean-room SE** — Defect prevention approach. Formal methods use karta hai. Specification-based development karta hai. Verification aur validation rigorous hai.',
              '**Approach** — Requirements formal specification. Design formal specification. Implementation formal methods. Verification rigorous testing. Statistical usage testing.',
              '**Formal Methods** — Mathematical specification. Design correctness verify karta hai. Defects early detect karta hai. Quality mathematically proven hota hai.',
              '**Statistical Usage Testing** — Operational profiles use karta hai. Random testing statistically based hai. Reliability measurement accurate hai. Defects early detect karta hai.',
              '**Benefits** — Defect rates kam hote hain. Reliability high rehta hai. Maintenance costs kam hote hain. Quality mathematically proven hota hai.',
            ],
          },
          {
            type: 'points',
            title: 'Defect Injection and Prevention',
            points: [
              '**Defect Injection** — Defects intentionally inject karte hain. Testing effectiveness improve karta hai. Quality assurance techniques validate karte hain. Defects detect karne ka ability test karta hai.',
              '**Injection Techniques** — Mutation testing, fault injection, chaos engineering. Test cases validate karte hain. Detection mechanisms verify karte hain. Quality tools effectiveness test karte hain.',
              '**Defect Prevention** — Defects identify aur prevent karte hain. Root cause analysis karte hain. Process improvements implement karte hain. Similar defects future mein prevent karte hain.',
              '**Techniques** — Fault tree analysis, failure mode analysis, cause-effect analysis. Defects classify karte hain. Patterns identify karte hain. Prevention strategies develop karte hain.',
              '**Benefits** — Testing effectiveness improve hota hai. Defect rates reduce hote hain. Quality increase hota hai. Process maturity improve hota hai.',
            ],
          },
          {
            type: 'points',
            title: 'Internal Auditing and Assessments',
            points: [
              '**Internal Auditing** — Process compliance verify karta hai. Quality system audit karta hai. Standards compliance check karta hai. Continuous improvement encourage karta hai.',
              '**Audit Types** — Process audit (process compliance), Product audit (product quality), System audit (quality system). Independent auditors audit karte hain. Findings report karte hain.',
              '**Assessment** — Process maturity assess karta hai. Quality practices evaluate karta hai. Strengths aur weaknesses identify karta hai. Improvement areas identify karta hai.',
              '**Assessment Methods** — Questionnaires, interviews, observations, document review. Data collect karte hain. Analysis karte hain. Findings report karte hain.',
              '**Benefits** — Compliance ensure hota hai. Improvement areas identify hote hain. Quality culture develop hota hai. Continuous improvement encourage hota hai.',
            ],
          },
          {
            type: 'points',
            title: 'Inspections and Walkthroughs',
            points: [
              '**Inspections** — Structured peer review. Formal process hai. Defects early detect karta hai. Quality improve karta hai.',
              '**Inspection Process** — Overview, Preparation, Inspection Meeting, Rework, Follow-up. Roles: Moderator, Author, Reviewers, Inspector. Defects document karte hain. Severity classify karte hain.',
              '**Walkthroughs** — Author-led review. Informal process hai. Design aur code explain karta hai. Feedback collect karta hai. Issues identify karta hai.',
              '**Walkthrough Process** — Preparation, Walkthrough Meeting, Note-taking, Follow-up. Author presents karta hai. Reviewers question karte hain. Issues identify karte hain.',
              '**Benefits** — Defects early detect hote hain. Fix costs kam hote hain. Quality improve hota hai. Team knowledge share hota hai.',
            ],
          },
          {
            type: 'points',
            title: 'CASE Tools',
            points: [
              '**CASE Tools** — Computer-Aided Software Engineering tools. Software development tasks automate karte hain. Quality improve karte hain. Efficiency increase karte hain.',
              '**Upper CASE** — Requirements, analysis, design tools. System planning aur design support karte hain. Requirements capture karte hain. Analysis karwate hain. Design create karte hain.',
              '**Lower CASE** — Implementation, testing, maintenance tools. Coding, testing, maintenance support karte hain. Code generation karte hain. Testing automate karte hain. Maintenance support karte hain.',
              '**Integrated CASE** — Full lifecycle support. Upper aur lower CASE combine karta hai. Tool integration provide karta hai. Seamless workflow enable karta hai.',
              '**Examples** — Requirements: DOORS, Rational Rose. Design: Visio, Enterprise Architect. Implementation: IDEs, code generators. Testing: Selenium, JUnit. Maintenance: Version control, defect tracking.',
              '**Benefits** — Productivity increase hota hai. Quality improve hota hai. Consistency maintain hota hai. Documentation automatic hota hai. Reusability encourage hota hai.',
            ],
          },
          {
            type: 'comparison',
            title: 'Trend Comparison',
            comparison: [
              { feature: 'Focus', psp: 'Individual Process', tsp: 'Team Process', oo: 'Object-Oriented', cleanroom: 'Defect Prevention', injection: 'Defect Testing', auditing: 'Compliance', inspection: 'Peer Review', case: 'Automation' },
              { feature: 'Type', psp: 'Personal', tsp: 'Team', oo: 'Methodology', cleanroom: 'Methodology', injection: 'Technique', auditing: 'Process', inspection: 'Process', case: 'Tools' },
              { feature: 'Main Goal', psp: 'Self Improvement', tsp: 'Team Performance', oo: 'Code Reuse', cleanroom: 'Zero Defects', injection: 'Testing Effectiveness', auditing: 'Compliance', inspection: 'Early Detection', case: 'Efficiency' },
            ],
          },
          {
            type: 'diagram',
            title: 'SQA Trends Overview',
            diagram: 'sqa-trends-overview',
            caption: 'SQA Trends — PSP/TSP, OO, Clean-room, Defect Injection, Auditing, Inspections, CASE Tools',
          },
          {
            type: 'points',
            title: 'Trend Selection',
            points: [
              '**PSP** — Individual developers ke liye.',
              '**TSP** — Team-based development ke liye.',
              '**OO Methodology** — Complex software design ke liye.',
              '**Clean-room SE** — High-reliability systems ke liye.',
              '**Defect Injection** — Testing effectiveness validate karne ke liye.',
              '**Internal Auditing** — Process compliance verify karne ke liye.',
              '**Inspections/Walkthroughs** — Peer review ke liye.',
              '**CASE Tools** — Development efficiency increase karne ke liye.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'SQA Trends: PSP (personal process), TSP (team process), OO Methodology (object-oriented), Clean-room SE (defect prevention), Defect Injection (testing effectiveness), Internal Auditing (compliance), Inspections/Walkthroughs (peer review), CASE tools (automation). Modern trends quality improve karte hain, efficiency increase karte hain, aur defects kam karte hain.',
          },
        ],
        examQuestions: [
          {
            question: 'Explain PSP and TSP with their benefits.',
            answer: 'PSP (Personal Software Process): Individual developers ka structured process. Planning, Design, Code, Test, Postmortem phases hain. Personal quality improve karta hai. Defect rates reduce karta hai. TSP (Team Software Process): Team-based development. Team roles aur processes structured hain. Team performance improve karta hai. Project success rate increase karta hai.',
          },
          {
            question: 'What is Object-Oriented Methodology? Explain its key concepts.',
            answer: 'Object-Oriented Methodology: Software design objects par based hai. Key concepts: Encapsulation (data aur methods combine), Inheritance (code reuse), Polymorphism (flexible interfaces). Benefits: Code reuse increase karta hai. Maintainability improve karta hai. Development time reduce karta hai. Quality increase karta hai.',
          },
          {
            question: 'Describe Clean-room Software Engineering.',
            answer: 'Clean-room SE: Defect prevention approach. Formal methods use karta hai. Requirements formal specification. Design formal specification. Implementation formal methods. Verification rigorous testing. Statistical usage testing. Benefits: Defect rates kam hote hain. Reliability high rehta hai. Maintenance costs kam hote hain.',
          },
          {
            question: 'What is Defect Injection and how does it help?',
            answer: 'Defect Injection: Defects intentionally inject karte hain. Testing effectiveness improve karta hai. Detection mechanisms validate karta hai. Mutation testing, fault injection techniques hain. Benefits: Testing effectiveness improve hota hai. Defects detect karne ka ability test hota hai. Quality tools validate hote hain.',
          },
          {
            question: 'Explain Inspections and Walkthroughs with their differences.',
            answer: 'Inspections: Structured peer review. Formal process. Moderator lead karta hai. Defects document karte hain. Early detection hai. Walkthroughs: Author-led review. Informal process. Author presents karta hai. Feedback collect karta hai. Inspections formal hain, walkthroughs informal hain. Dono defects early detect karte hain.',
          },
          {
            question: 'What are CASE tools? List their types and benefits.',
            answer: 'CASE Tools: Computer-Aided Software Engineering. Software development tasks automate karte hain. Types: Upper CASE (requirements, analysis, design), Lower CASE (implementation, testing, maintenance), Integrated CASE (full lifecycle). Benefits: Productivity increase karta hai. Quality improve karta hai. Consistency maintain karta hai. Documentation automatic hota hai.',
          },
        ],
      },
    ],
  },
];      {
        id: 'software-security-testing',
        number: '1.10',
        title: 'Testing Software System Security',
        subtitle: 'Six-Sigma, TQM aur software security testing',
        icon: 'shield',
        accent: '#00ff88',
        englishDefinition: 'Testing Software System Security involves validating that software systems are secure against unauthorized access, attacks, and vulnerabilities. Six-Sigma is a methodology for minimizing defects and variations in processes. TQM (Total Quality Management) is a comprehensive approach to quality improvement across all organizational processes. Security testing includes vulnerability assessment, penetration testing, code review, and security audits.',
        intro: 'Software system security testing alag alag techniques hain jo software ke vulnerabilities detect aur prevent karne mein help karte hain. Is topic mein hum dekhenge Six-Sigma, TQM, aur various security testing approaches.',
        sections: [
          { type: 'definition', title: 'Software Security Testing kya hai?', body: `Software Security Testing ek process hai jo software ke security vulnerabilities detect, verify, aur validate karta hai. Yeh testing ensure karta hai ki software unauthorized access se protected hai. Security testing ke main objectives: Confidentiality (sensitive data protected), Integrity (data correct hai), Availability (software accessible hai), Authentication (users genuinely identify hote hain), Authorization (users ke appropriate permissions hain).` },
          { type: 'points', title: 'Six-Sigma', points: ['**Six-Sigma** — Quality improvement methodology. Process variations minimize karta hai. Defects 3.4 per million opportunities tak reduce karta hai.', '**DMAIC** — Define, Measure, Analyze, Improve, Control. Five-phase improvement framework hai.', '**DMADV** — Define, Measure, Analyze, Design, Verify. New product/process design ka framework hai.', '**Sigma Levels** — 1 sigma: 69% defects. 3 sigma: 66807 defects. 6 sigma: 3.4 defects per million.', '**Benefits** — Quality improve karta hai. Cost reduce karta hai. Customer satisfaction increase karta hai.'] },
          { type: 'points', title: 'TQM (Total Quality Management)', points: ['**TQM** — Total Quality Management. Organization-wide quality improvement approach hai.', '**Principles** — Customer focus, total involvement, fact-based decisions, continuous improvement.', '**Implementation** — Quality planning, quality control, quality improvement.', '**Tools** — Statistical process control, quality circles, benchmarking, customer feedback.', '**Benefits** — Quality improve karta hai. Productivity increase karta hai. Customer loyalty build karta hai.'] },
          { type: 'points', title: 'Security Testing Techniques', points: ['**Vulnerability Assessment** — Security vulnerabilities identify karta hai. Security scanners use karta hai.', '**Penetration Testing** — Attacks simulate karta hai. Real-world scenarios test karta hai.', '**Code Review** — Source code security audit karta hai. Security vulnerabilities detect karta hai.', '**Security Audits** — Compliance verify karta hai. Security standards check karta hai.', '**Static Analysis** — Code ka static analysis karta hai. Security issues early detect karta hai.', '**Dynamic Analysis** — Runtime behavior analyze karta hai. Security issues detect karta hai.'] },
          { type: 'diagram', title: 'Security Testing Overview', diagram: 'security-testing-overview', caption: 'Security Testing — Six-Sigma, TQM, Vulnerability Assessment, Penetration Testing' },
          { type: 'recap', title: 'Recap', content: 'Software Security Testing: Six-Sigma (quality improvement, DMAIC, DMADV), TQM (organization-wide quality), Vulnerability Assessment (security scanners), Penetration Testing (attack simulation), Code Review (security audit), Security Audits (compliance). Security testing important hai kyunki modern software sensitive data handle karta hai.' },
        ],
        examQuestions: [
          { question: 'Explain Six-Sigma methodology and its benefits.', answer: 'Six-Sigma: Quality improvement methodology. DMAIC (Define, Measure, Analyze, Improve, Control) framework. Defects 3.4 per million opportunities tak reduce karta hai. Benefits: Quality improve karta hai. Cost reduce karta hai. Customer satisfaction increase karta hai.' },
          { question: 'What is TQM? Explain its principles.', answer: 'TQM (Total Quality Management): Organization-wide quality improvement approach. Principles: Customer focus, total involvement, fact-based decisions, continuous improvement. Quality planning, control, improvement include karta hai.' },
          { question: 'Describe different security testing techniques.', answer: 'Security Testing Techniques: Vulnerability Assessment (security scanners), Penetration Testing (attack simulation), Code Review (security audit), Security Audits (compliance), Static Analysis (code analysis), Dynamic Analysis (runtime analysis).' },
        ],
      },
      {
        id: 'complexity-metrics-models',
        number: '1.11',
        title: 'Complexity Metrics and Models',
        subtitle: 'Software complexity measurement aur models',
        icon: 'chart',
        accent: '#00aaff',
        englishDefinition: 'Complexity Metrics and Models measure software complexity through various quantitative and qualitative approaches. Common metrics include cyclomatic complexity, Halstead metrics, McCabe complexity, and object-oriented complexity metrics.',
        intro: 'Software complexity metrics software code ke complexity measure karne ka tools provide karte hain. High complexity software maintain ka mushkil hota hai, test ka difficult hota hai.',
        sections: [
          { type: 'definition', title: 'Complexity Metrics kya hain?', body: `Software Complexity Metrics quantitative measures hain jo software complexity assess karte hain. Yeh metrics help karte hain: Code complexity measure karna, Maintainability assess karna, Testability evaluate karna, Defect probability predict karna.` },
          { type: 'points', title: 'Cyclomatic Complexity', points: ['**Cyclomatic Complexity** — Control flow complexity measure karta hai.', '**Calculation** — M = E - N + 2P. E = edges, N = nodes, P = connected components.', '**Interpretation** — 1-5: Simple. 6-10: Moderate. 11-20: Complex. 21+: Very complex.', '**Usage** — Test case count determine karta hai. Risk assessment help karta hai.', '**Limitations** — Structure ki complexity measure karta hai. Data complexity ignore karta hai.'] },
          { type: 'points', title: 'Halstead Metrics', points: ['**Halstead Metrics** — Code complexity measure karta hai. Operators aur operands analysis karta hai.', '**Vocabulary (n)** — Operators aur operands ka total count.', '**Length (N)** — Total operators aur operands ka sum.', '**Volume (V)** — Code ka information content. V = N * log2(n).', '**Difficulty (D)** — Complexity measure. D = (n1/2) * (N2/n2).', '**Effort (E)** — Programming effort. E = D * V.', '**Bugs (B)** — Estimated bugs. B = V/3000.'] },
          { type: 'points', title: 'McCabe Complexity', points: ['**McCabe Complexity** — Cyclomatic complexity based hai.', '**Decision Points** — If, else, for, while, case statements.', '**Complexity Range** — 10 tak acceptable hai. Above 10 high complexity.', '**Refactoring** — High complexity areas identify karta hai.', '**Testing** — Test case count determine karta hai.'] },
          { type: 'points', title: 'Object-Oriented Complexity', points: ['**Class Design Metrics** — Class complexity measure karta hai.', '**Inheritance Depth** — Class hierarchy depth measure karta hai.', '**Coupling** — Class dependencies measure karta hai.', '**Cohesion** — Class member relatedness measure karta hai.', '**Method Count** — Class methods count karta hai.', '**Attribute Count** — Class attributes count karta hai.'] },
          { type: 'diagram', title: 'Complexity Metrics Overview', diagram: 'complexity-metrics-overview', caption: 'Complexity Metrics — Cyclomatic, Halstead, McCabe, Object-Oriented' },
          { type: 'recap', title: 'Recap', content: 'Complexity Metrics: Cyclomatic Complexity (control flow, decision points), Halstead Metrics (operators/operands, volume/difficulty), McCabe Complexity (decision points, 1-10 acceptable), Object-Oriented Complexity (inheritance, coupling, cohesion). High complexity = high maintenance cost, high defect probability.' },
        ],
        examQuestions: [
          { question: 'Explain Cyclomatic Complexity with an example.', answer: 'Cyclomatic Complexity: Control flow complexity measure. Formula: M = E - N + 2P. Decision points count karta hai. Interpretation: 1-5 simple, 6-10 moderate, 11-20 complex, 21+ very complex. Test case count determine karta hai.' },
          { question: 'Describe Halstead Metrics.', answer: 'Halstead Metrics: Operators aur operands analysis. Vocabulary (n), Length (N), Volume (V), Difficulty (D), Effort (E), Bugs (B). Code complexity measure karta hai. Maintainability assess karta hai.' },
          { question: 'What are Object-Oriented Complexity Metrics?', answer: 'Object-Oriented Complexity: Class design metrics. Inheritance depth, coupling, cohesion, number of children, method count, attribute count. OO design complexity assess karta hai. High complexity = refactoring needed.' },
        ],
      },
      {
        id: 'quality-management-metrics',
        number: '1.12',
        title: 'Quality Management Metrics',
        subtitle: 'Software quality measurement aur metrics',
        icon: 'metrics',
        accent: '#ff8800',
        englishDefinition: 'Quality Management Metrics are quantitative measures used to assess and track software quality. Common metrics include defect density, test coverage, code quality, customer satisfaction, and process maturity indicators.',
        intro: 'Quality Management Metrics software quality ko measure aur track karne ka quantitative tools provide karte hain. Yeh metrics organizations ko quality improvement decisions lene mein help karte hain.',
        sections: [
          { type: 'definition', title: 'Quality Metrics kya hain?', body: `Quality Management Metrics quantitative measures hain jo software quality assess aur track karte hain. Yeh metrics help karte hain: Quality performance measure karna, Improvement areas identify karna, Decision-making support provide karna, Trends aur patterns analyze karna, Quality goals track karna.` },
          { type: 'points', title: 'Defect Metrics', points: ['**Defect Density** — Lines of code per defect. Typical: 1-10 defects per KLOC.', '**Defect Removal Efficiency (DRE)** — Bugs caught before release. Target: 90%+.', '**Defect Reopen Rate** — Fixed defects reopened. Target: < 5%.', '**Mean Time to Repair (MTTR)** — Average time to fix defects.', '**Mean Time Between Failures (MTBF)** — Average time between failures.'] },
          { type: 'points', title: 'Testing Metrics', points: ['**Test Coverage** — Code coverage percentage.', '**Test Execution** — Tests run vs planned.', '**Test Effectiveness** — Bugs found per test.', '**Automation Coverage** — Automated tests percentage.', '**Defect Escape Rate** — Bugs found post-release.'] },
          { type: 'points', title: 'Code Quality Metrics', points: ['**Code Review Coverage** — Code reviewed percentage.', '**Code Complexity** — Cyclomatic, Halstead complexity.', '**Code Duplication** — Duplicate code percentage.', '**Documentation Coverage** — Code documented percentage.', '**Coding Standards Compliance** — Standards adherence percentage.'] },
          { type: 'points', title: 'Process Metrics', points: ['**Schedule Variance** — Planned vs actual schedule.', '**Cost Variance** — Budgeted vs actual cost.', '**Effort Variance** — Estimated vs actual effort.', '**Requirements Volatility** — Requirements changes frequency.', '**Process Compliance** — Process adherence percentage.'] },
          { type: 'diagram', title: 'Quality Metrics Overview', diagram: 'quality-metrics-overview', caption: 'Quality Metrics — Defect, Testing, Code Quality, Process' },
          { type: 'recap', title: 'Recap', content: 'Quality Management Metrics: Defect Metrics (density, DRE, reopen rate), Testing Metrics (coverage, execution, effectiveness), Code Quality Metrics (complexity, duplication, documentation), Process Metrics (schedule, cost, effort variance). Metrics quality measure karte hain, improvement guide karte hain.' },
        ],
        examQuestions: [
          { question: 'Explain Defect Density and its importance.', answer: 'Defect Density: Defects per lines of code. Formula: Total Defects / LOC * 1000. Typical: 1-10 per KLOC. Code quality measure karta hai. Improvement areas identify karta hai. High density = quality issues.' },
          { question: 'What is Defect Removal Efficiency (DRE)?', answer: 'DRE: Bugs caught before release percentage. Formula: (Pre-Release Defects / Total Defects) * 100. Target: 90%+. Testing effectiveness measure karta hai. High DRE = good testing process.' },
          { question: 'List different categories of quality metrics.', answer: 'Quality Metrics Categories: Defect Metrics (density, DRE, reopen rate), Testing Metrics (coverage, execution, effectiveness), Code Quality Metrics (complexity, duplication, documentation), Process Metrics (schedule, cost, effort variance).' },
        ],
      },
      {
        id: 'availability-metrics',
        number: '1.13',
        title: 'Availability Metrics',
        subtitle: 'System reliability aur availability measures',
        icon: 'clock',
        accent: '#00ff88',
        englishDefinition: 'Availability Metrics measure the degree to which a system is operational and accessible when required. Common metrics include uptime percentage, MTBF, MTTR, and SLAs.',
        intro: 'Availability Metrics system ki operational availability measure karte hain. Yeh metrics important hain kyunki users expect systems hamesha available rahen.',
        sections: [
          { type: 'definition', title: 'Availability kya hai?', body: `Availability system operational hone ki degree ko measure karta hai. Availability = (Uptime / Total Time) * 100. Common levels: 99% (7.3 hours downtime/month), 99.9% (43.8 minutes/month), 99.99% (4.38 minutes/month), 99.999% (26.3 seconds/month).` },
          { type: 'points', title: 'Uptime Metrics', points: ['**Uptime Percentage** — System operational time.', '**Downtime** — System non-operational time.', '**SLA Compliance** — Service Level Agreement adherence.', '**Monthly Uptime** — Monthly availability percentage.'] },
          { type: 'points', title: 'Reliability Metrics', points: ['**MTBF (Mean Time Between Failures)** — Average time between failures.', '**MTTR (Mean Time To Repair)** — Average time to repair.', '**MTTF (Mean Time To Failure)** — Average time to first failure.', '**Failure Rate** — Failures per unit time.', '**Bathtub Curve** — Failure pattern over time.'] },
          { type: 'points', title: 'Performance Metrics', points: ['**Response Time** — System response speed.', '**Throughput** — Operations per second.', '**Error Rate** — Errors per transaction.', '**Concurrent Users** — Simultaneous users supported.'] },
          { type: 'points', title: 'Recovery Metrics', points: ['**RTO (Recovery Time Objective)** — Maximum acceptable downtime.', '**RPO (Recovery Point Objective)** — Maximum acceptable data loss.', '**Recovery Success Rate** — Successful recovery attempts.', '**Backup Success Rate** — Successful backup completions.'] },
          { type: 'diagram', title: 'Availability Metrics Overview', diagram: 'availability-metrics-overview', caption: 'Availability Metrics — Uptime, Reliability, Performance, Recovery' },
          { type: 'recap', title: 'Recap', content: 'Availability Metrics: Uptime (operational time), Reliability (MTBF, MTTR, failure rate), Performance (response time, throughput), Recovery (RTO, RPO, backup success). Availability tiers: 99% (basic), 99.9% (standard), 99.99% (high), 99.999% (ultra-high).' },
        ],
        examQuestions: [
          { question: 'Explain Availability and its calculation.', answer: 'Availability: System operational time percentage. Formula: (Uptime / Total Time) * 100. Tiers: 99% (7.3 hours downtime/month), 99.9% (43.8 minutes), 99.99% (4.38 minutes), 99.999% (26.3 seconds). System reliability measure karta hai.' },
          { question: 'What is MTBF and MTTR?', answer: 'MTBF (Mean Time Between Failures): Average time between failures. Reliability measure karta hai. MTTR (Mean Time To Repair): Average repair time. Recovery speed measure karta hai. Dono metrics system reliability assess karte hain.' },
          { question: 'Explain RTO and RPO with examples.', answer: 'RTO (Recovery Time Objective): Maximum acceptable downtime. Example: 2 hours RTO. RPO (Recovery Point Objective): Maximum acceptable data loss. Example: 15 minutes RPO. Dono business continuity requirements hain.' },
        ],
      },
      {
        id: 'defect-removal-effectiveness',
        number: '1.14',
        title: 'Defect Removal Effectiveness',
        subtitle: 'Quality assurance aur defect removal efficiency',
        icon: 'bug',
        accent: '#aa00ff',
        englishDefinition: 'Defect Removal Effectiveness (DRE) is a metric that measures the percentage of defects eliminated before the software is released. A high DRE means most defects are caught during development.',
        intro: 'DRE software quality ko measure karne ka important metric hai. Yeh batata hai ki kaafi defects development process mein catch ho gae hain. High DRE achi testing process indicate karta hai.',
        sections: [
          { type: 'definition', title: 'DRE kya hai?', body: `Defect Removal Effectiveness (DRE) defect removal efficiency measure karta hai. DRE = (Defects Found Pre-Release / Total Defects) * 100. Target: 90% or above. Example: 90 pre-release defects, 10 post-release defects = 90% DRE.` },
          { type: 'points', title: 'DRE Calculation', points: ['**Pre-Release Defects** — Defects found during development.', '**Post-Release Defects** — Defects found after release.', '**Total Defects** — Pre-release + post-release defects.', '**DRE Calculation** — (Pre-Release / Total) * 100.', '**Benchmark** — 90%+ excellent. 80-89% good. 70-79% fair. Below 70% poor.'] },
          { type: 'points', title: 'DRE Improvement Strategies', points: ['**Comprehensive Testing** — Testing approaches improve karo. Coverage increase karo.', '**Early Testing** — Testing lifecycle mein early start karo.', '**Code Reviews** — Peer reviews implement karo.', '**Static Analysis** — Automated static analysis tools use karo.', '**Test Automation** — Automated testing implement karo.', '**Quality Gates** — Quality gates define karo.', '**Training** — Testers train karo. Testing skills improve karo.'] },
          { type: 'points', title: 'DRE Challenges', points: ['**Defect Detection** — Some defects hard detect karte hain.', '**Environment Differences** — Test environment production se different ho sakta hai.', '**User Expectations** — Users unexpected scenarios create kar sakte hain.', '**Complexity** — Complex systems mein defects difficult detect karte hain.', '**Documentation** — Requirements aur documentation gaps.', '**Resources** — Limited testing resources.'] },
          { type: 'diagram', title: 'DRE Overview', diagram: 'dre-overview', caption: 'DRE — Defect Removal Effectiveness, Quality Assurance, Testing' },
          { type: 'recap', title: 'Recap', content: 'DRE (Defect Removal Efficiency): Defects caught before release percentage. Formula: (Pre-Release / Total) * 100. Target: 90%+. High DRE = good testing process. Improvement: comprehensive testing, early testing, code reviews, static analysis, test automation.' },
        ],
        examQuestions: [
          { question: 'Define Defect Removal Efficiency (DRE) with formula.', answer: 'DRE: Defects caught before release percentage. Formula: (Pre-Release Defects / Total Defects) * 100. Target: 90%+. Testing effectiveness measure karta hai. High DRE = good testing process.' },
          { question: 'How can DRE be improved?', answer: 'DRE Improvement: Comprehensive testing, early testing, code reviews, static analysis, test automation, quality gates, training, process improvement. Yeh sab approaches testing effectiveness improve karte hain.' },
          { question: 'What are the challenges in achieving high DRE?', answer: 'DRE Challenges: Defect detection (some hard detect), environment differences, user expectations, complexity, documentation gaps, resources. Challenges overcome karne ke liye comprehensive testing aur continuous improvement chahiye.' },
        ],
      },
      {
        id: 'fmea',
        number: '1.15',
        title: 'FMEA (Failure Mode and Effects Analysis)',
        subtitle: 'Failure analysis aur risk management tool',
        icon: 'alert',
        accent: '#ff0080',
        englishDefinition: 'FMEA (Failure Mode and Effects Analysis) is a systematic approach for identifying and analyzing potential failure modes. It helps prioritize risks and implement preventive measures.',
        intro: 'FMEA systematic approach hai jo potential failure modes identify aur analyze karta hai. Yeh risk management tool hai jo failures se bachne aur quality improve karne mein help karta hai.',
        sections: [
          { type: 'definition', title: 'FMEA kya hai?', body: `FMEA (Failure Mode and Effects Analysis) systematic failure analysis approach hai. Yeh potential failures identify karta hai, unka effects analyze karta hai, aur preventive measures suggest karta hai. FMEA ke objectives: Potential failures identify karna, Failure effects analyze karna, Risk priority assign karna, Preventive measures suggest karna, Quality improve karna.` },
          { type: 'points', title: 'FMEA Process', points: ['**Step 1: System Analysis** — System aur components analyze karo.', '**Step 2: Failure Identification** — Potential failures list karo.', '**Step 3: Effects Analysis** — Each failure ka effects analyze karo.', '**Step 4: Severity Assessment** — Severity score assign karo. 1 (minor) se 10 (catastrophic).', '**Step 5: Occurrence Assessment** — Occurrence probability estimate karo. 1 (rare) se 10 (very likely).', '**Step 6: Detection Assessment** — Detection difficulty score karo. 1 (easy) se 10 (very difficult).', '**Step 7: RPN Calculation** — RPN = Severity * Occurrence * Detection.', '**Step 8: Action Plan** — High RPN failures prioritize karo.'] },
          { type: 'points', title: 'FMEA Scoring', points: ['**Severity (S)** — Failure ka impact. 1-10 scale. 1 = No effect, 10 = Catastrophic.', '**Occurrence (O)** — Failure probability. 1-10 scale. 1 = Very unlikely, 10 = Very likely.', '**Detection (D)** — Detection difficulty. 1-10 scale. 1 = Very easy, 10 = Very difficult.', '**RPN (Risk Priority Number)** — S * O * D. Maximum: 1000. Minimum: 1.', '**RPN Interpretation** — 1-100: Low risk. 101-500: Medium risk. 501-1000: High risk.'] },
          { type: 'points', title: 'FMEA Benefits', points: ['**Proactive Risk Management** — Failures se pehle identify karta hai.', '**Quality Improvement** — Quality aur reliability improve karta hai.', '**Cost Reduction** — Failure-related costs reduce karta hai.', '**Safety Improvement** — Safety risks identify karta hai.', '**Documentation** — Failure analysis documentation provide karta hai.', '**Team Collaboration** — Cross-functional collaboration encourage karta hai.'] },
          { type: 'diagram', title: 'FMEA Overview', diagram: 'fmea-overview', caption: 'FMEA — Failure Mode and Effects Analysis, Risk Priority Number' },
          { type: 'recap', title: 'Recap', content: 'FMEA (Failure Mode and Effects Analysis): Systematic failure analysis. Process: System analysis, failure identification, effects analysis, severity/occurrence/detection scoring, RPN calculation, action planning. RPN = S * O * D. High RPN = high risk = immediate action.' },
        ],
        examQuestions: [
          { question: 'Explain FMEA with its process.', answer: 'FMEA: Systematic failure analysis approach. Process: System analysis, failure identification, effects analysis, severity assessment, occurrence assessment, detection assessment, RPN calculation, action planning. RPN = S * O * D. High RPN failures prioritize karta hai.' },
          { question: 'Describe the scoring in FMEA.', answer: 'FMEA Scoring: Severity (S): 1-10 scale, failure impact. Occurrence (O): 1-10 scale, failure probability. Detection (D): 1-10 scale, detection difficulty. RPN = S * O * D. Maximum 1000, minimum 1. High RPN = high risk.' },
          { question: 'What are the benefits of FMEA?', answer: 'FMEA Benefits: Proactive risk management, quality improvement, cost reduction, safety improvement, documentation, team collaboration. FMEA quality aur reliability improve karta hai.' },
        ],
      },
      {
        id: 'quality-function-deployment',
        number: '1.16',
        title: 'Quality Function Deployment (QFD)',
        subtitle: 'Customer requirements aur quality deployment',
        icon: 'target',
        accent: '#00aaff',
        englishDefinition: 'Quality Function Deployment (QFD) is a systematic approach to translate customer requirements into technical specifications. It ensures that customer needs are consistently met throughout the product development lifecycle.',
        intro: 'QFD customer requirements ko technical specifications mein translate karne ka systematic approach hai. Yeh ensure karta hai ki customer needs product development lifecycle mein consistently meet hoti hain.',
        sections: [
          { type: 'definition', title: 'QFD kya hai?', body: `Quality Function Deployment (QFD) customer requirements ko technical specifications mein translate karta hai. QFD ke objectives: Customer requirements identify karna, Technical specifications develop karna, Quality control measures deploy karna, Customer satisfaction ensure karna, Continuous quality improvement karna.` },
          { type: 'points', title: 'House of Quality', points: ['**Customer Requirements** — Voice of customer. Customer needs aur expectations.', '**Technical Requirements** — Engineering specifications. Technical characteristics.', '**Relationship Matrix** — Customer aur technical requirements ka relationship.', '**Competitive Assessment** — Competitor products compare karta hai.', '**Technical Assessment** — Technical capabilities evaluate karta hai.', '**Target Values** — Technical targets define karta hai.', '**Trade-off Analysis** — Conflicts identify karta hai.'] },
          { type: 'points', title: 'QFD Process', points: ['**Step 1: Customer Research** — Customer requirements research karo.', '**Step 2: Requirements Analysis** — Customer requirements organize karo.', '**Step 3: Technical Translation** — Customer requirements technical specifications mein translate karo.', '**Step 4: Relationship Matrix** — House of Quality build karo.', '**Step 5: Competitive Analysis** — Competitor products analyze karo.', '**Step 6: Target Setting** — Technical targets set karo.', '**Step 7: Deployment** — Quality deployment karo.', '**Step 8: Implementation** — Quality measures implement karo.'] },
          { type: 'points', title: 'QFD Benefits', points: ['**Customer Focus** — Customer requirements focus karta hai.', '**Early Quality** — Quality early design mein integrate karta hai.', '**Communication** — Cross-functional communication improve karta hai.', '**Decision Making** — Quality decisions support karta hai.', '**Cost Reduction** — Rework costs reduce karta hai.', '**Documentation** — Requirements documentation provide karta hai.'] },
          { type: 'diagram', title: 'QFD Overview', diagram: 'qfd-overview', caption: 'QFD — Quality Function Deployment, House of Quality, Customer Requirements' },
          { type: 'recap', title: 'Recap', content: 'QFD (Quality Function Deployment): Customer requirements ko technical specifications mein translate karta hai. House of Quality: customer requirements, technical requirements, relationship matrix, competitive assessment, target values. Benefits: customer focus, early quality, communication, decision making, cost reduction.' },
        ],
        examQuestions: [
          { question: 'Explain QFD and its importance.', answer: 'QFD: Customer requirements ko technical specifications mein translate karta hai. Importance: Customer focus, early quality, communication, decision making, cost reduction. Customer requirements product development mein consistently meet karta hai.' },
          { question: 'Describe the House of Quality in QFD.', answer: 'House of Quality: QFD ka central tool. Components: Customer requirements, technical requirements, relationship matrix, competitive assessment, technical assessment, target values, trade-off analysis. Customer aur technical requirements map karta hai.' },
          { question: 'What are the benefits of QFD?', answer: 'QFD Benefits: Customer focus, early quality, communication, decision making, cost reduction, documentation. QFD quality improve karta hai, customer satisfaction increase karta hai.' },
        ],
      },
      {
        id: 'taguchi-quality-loss-function',
        number: '1.17',
        title: 'Taguchi Quality Loss Function',
        subtitle: 'Quality loss measurement aur Taguchi approach',
        icon: 'chart',
        accent: '#ff8800',
        englishDefinition: 'Taguchi Quality Loss Function is a quantitative measure of quality loss when product performance deviates from target. Any deviation from ideal target results in quality loss and customer dissatisfaction.',
        intro: 'Taguchi Quality Loss Function quality loss ko measure karne ka quantitative approach hai. Yeh batata hai ki product performance agar target se deviate hota hai toh quality loss hota hai.',
        sections: [
          { type: 'definition', title: 'Taguchi Loss Function kya hai?', body: `Taguchi Quality Loss Function quality loss measure karta hai. Loss Function Formula: L = k * (y - m)^2. Where: L = Loss, k = Cost coefficient, y = Actual value, m = Target value. Taguchi Philosophy: Quality = Minimal deviation from target. Loss increases with deviation. Specification limits andar bhi loss hota hai.` },
          { type: 'points', title: 'Loss Function Types', points: ['**Smaller-the-Better** — Target = 0. Loss decrease karta hai value increase ke saath. Example: Defects, failures, noise.', '**Larger-the-Better** — Target = infinity. Loss decrease karta hai value increase ke saath. Example: Strength, durability, efficiency.', '**Nominal-the-Best** — Target = specific value. Loss minimum target pe. Example: Dimensions, temperature, speed.', '**One-Sided Specification** — Only upper ya lower limit. Example: Maximum defects.', '**Two-Sided Specification** — Upper aur lower limits. Target middle mein hai.'] },
          { type: 'points', title: "Taguchi's Approach", points: ['**Target-Oriented** — Target values pe focus karta hai. Deviation minimize karta hai.', '**Continuous Loss** — Quality loss continuous measure karta hai.', '**Customer Focus** — Customer impact measure karta hai.', '**Preventive Approach** — Defects prevent karta hai.', '**Design for Quality** — Quality design mein integrate karta hai.', '**Cost of Quality** — Quality loss costs quantify karta hai.'] },
          { type: 'points', title: "Taguchi's Robust Design", points: ['**Robust Design** — Design variation resistant banao. Noise factors minimize karo.', '**Control Factors** — Design parameters optimize karo.', '**Noise Factors** — Environmental factors identify karo.', '**Parameter Design** — Parameters optimize karo.', '**Tolerance Design** — Tolerances specify karo.', '**Taguchi Methods** — Orthogonal arrays use karo.', '**DOE** — Experiments design karo. Results analyze karo.'] },
          { type: 'diagram', title: 'Taguchi Loss Function Overview', diagram: 'taguchi-loss-overview', caption: 'Taguchi Loss Function — Quality Loss, Robust Design, Loss Types' },
          { type: 'recap', title: 'Recap', content: 'Taguchi Quality Loss Function: Quality loss measure karta hai. L = k * (y - m)^2. Types: Smaller-the-Better (target=0), Larger-the-Better (target=infinity), Nominal-the-Best (target=m). Taguchi approach: target-oriented, continuous loss, customer focus, preventive approach, design for quality.' },
        ],
        examQuestions: [
          { question: 'Explain Taguchi Quality Loss Function with formula.', answer: 'Taguchi Loss Function: Quality loss measure karta hai. Formula: L = k * (y - m)^2. L = Loss, k = Cost coefficient, y = Actual value, m = Target value. Types: Smaller-the-Better (target=0), Larger-the-Better (target=infinity), Nominal-the-Best (target=m).' },
          { question: 'Describe the different types of loss functions.', answer: 'Loss Function Types: Smaller-the-Better (defects, failures - target=0), Larger-the-Better (strength, efficiency - target=infinity), Nominal-the-Best (dimensions, temperature - target=specific value). Har type quality characteristic ke according different formulas use karta hai.' },
          { question: "What is Taguchi's Robust Design?", answer: "Robust Design: Design variation resistant banata hai. Control factors optimize karta hai. Noise factors minimize karta hai. Parameter design, tolerance design, Taguchi methods (orthogonal arrays), DOE include karta hai. Robust design quality improve karta hai, variation reduce karta hai." },
        ],
      },
      {
        id: 'cost-of-quality',
        number: '1.18',
        title: 'Cost of Quality (COQ)',
        subtitle: 'Quality costs aur quality economics',
        icon: 'dollar',
        accent: '#00ff88',
        englishDefinition: 'Cost of Quality (COQ) is a framework that quantifies the total costs associated with quality, including costs of conformance (preventing defects) and costs of non-conformance (fixing defects).',
        intro: 'COQ quality-related costs ko quantify karne ka framework hai. Yeh quality conformance aur non-conformance costs measure karta hai. Is topic mein hum dekhenge COQ categories, quality costs analysis, aur quality improvement economics.',
        sections: [
          { type: 'definition', title: 'COQ kya hai?', body: `Cost of Quality (COQ) quality-related costs ka total measure karta hai. COQ = Prevention Costs + Appraisal Costs + Internal Failure Costs + External Failure Costs. COQ ke objectives: Quality costs quantify karna, Quality investment decisions lena, Quality improvement economics analyze karna, Cost-benefit analysis karna.` },
          { type: 'points', title: 'Prevention Costs', points: ['**Quality Planning** — Quality plans develop karna.', '**Quality Training** — Employees quality train karna.', '**Quality Documentation** — Quality procedures document karna.', '**Quality Audits** — Quality systems audit karna.', '**Design Reviews** — Designs review karna.', '**Process Improvement** — Processes improve karna.', '**Supplier Quality** — Supplier quality assess karna.'] },
          { type: 'points', title: 'Appraisal Costs', points: ['**Inspection** — Products inspect karna.', '**Testing** — Products test karna.', '**Measurement** — Quality characteristics measure karna.', '**Calibration** — Equipment calibrate karna.', '**Testing Equipment** — Testing equipment purchase karna.', '**Quality Audits** — Product audits conduct karna.'] },
          { type: 'points', title: 'Internal Failure Costs', points: ['**Scrap** — Defective products discard karna.', '**Rework** — Defective products repair karna.', '**Retest** — Repaired products test karna.', '**Downtime** — Equipment downtime due to quality issues.', '**Failure Analysis** — Failure causes analyze karna.', '**Yield Loss** — Quality yield loss.', '**Corrective Actions** — Corrective actions implement karna.'] },
          { type: 'points', title: 'External Failure Costs', points: ['**Warranty Costs** — Warranty claims handle karna.', '**Returns** — Defective products return karna.', '**Customer Complaints** — Customer complaints handle karna.', '**Lost Sales** — Quality issues se sales lose karna.', '**Lost Customers** — Quality issues se customers lose karna.', '**Liability** — Product liability costs.', '**Reputation Damage** — Brand reputation damage karna.'] },
          { type: 'diagram', title: 'Cost of Quality Overview', diagram: 'coq-overview', caption: 'COQ — Cost of Quality, Prevention, Appraisal, Internal/External Failure' },
          { type: 'recap', title: 'Recap', content: 'COQ (Cost of Quality): Quality-related costs ka total. Categories: Prevention (defects prevent), Appraisal (quality measure), Internal Failure (internal defects fix), External Failure (external defects fix). COQ quality investment decisions support karta hai.' },
        ],
        examQuestions: [
          { question: 'Define Cost of Quality (COQ) and its categories.', answer: 'COQ: Quality-related costs ka total. Categories: Prevention (quality planning, training, documentation, audits), Appraisal (inspection, testing, measurement, calibration), Internal Failure (scrap, rework, retest, downtime), External Failure (warranty, returns, complaints, lost sales, liability).' },
          { question: 'Explain Prevention vs Appraisal costs.', answer: 'Prevention Costs: Defects prevent karne ke costs. Quality planning, training, documentation, audits, design reviews. Proactive approach. Appraisal Costs: Quality measure karne ke costs. Inspection, testing, measurement, calibration. Detection approach.' },
          { question: 'Describe Internal vs External failure costs.', answer: 'Internal Failure Costs: Internal defects fix karne ke costs. Scrap, rework, retest, downtime. Before delivery. External Failure Costs: External defects fix karne ke costs. Warranty, returns, complaints, lost sales, customers, liability, reputation. After delivery. External failure costs internal se zyada expensive hote hain.' },
        ],
      },
