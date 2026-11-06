// Cyber Security Paper 2 — Model Paper (6 + 4 division)
//
// Mark division paper: every question carries 10 marks and is presented as
// (a) 6 marks + (b) 4 marks, with a second 6 + 4 set as the OR alternative.
//
// Topic map (all different from Paper 1, 3 and 4):
//   Unit 1 — 1.15 IT Act 2000, 1.17 IT Act amendments, 1.13 cyber laws, 1.14 key principles
//   Unit 2 — 2.27 types of hackers, 2.28 hacking versus cracking, 2.23 denial of service,
//            2.24 salami attack
//   Unit 3 — 3.10 network forensics tools, 3.14 e-mail crimes, 3.12 malware analysis tools,
//            3.6 database forensics
//   Unit 4 — 4.2 cyber versus digital forensics, 4.3 role and environment, 4.7 advanced tools,
//            4.10 technology and practices
//   Unit 5 — 5.6 attack vendors, 5.12 targets and defence, 5.11 preventing insider threats,
//            5.10 identity theft
//
// Content rules (identical to Paper 1): English only, an Explanation block before
// every answer, a labelled and enlargeable figure after it, and the mark division
// printed in the question head.

export const cysPaper2 = {
  id: 'cys-paper-2',
  number: 2,
  name: 'Paper 2',
  tag: 'Cyber Security',
  session: 'Model Paper · 6 + 4 division',
  board: 'M.C.A. (Management)',
  semester: 'Model Paper',
  pattern: 'University pattern · 50 marks',
  subjectCode: 'CYS',
  subjectName: 'Cyber Security',
  totalMarks: 50,
  time: '2½ Hours',
  totalQuestions: 5,
  instructions: [
    'All questions are compulsory.',
    'Every question carries 10 marks, divided as (a) 6 marks + (b) 4 marks.',
    'Attempt any one set in each question — either (a) and (b), or (c) and (d).',
    'Figures to the right indicate full marks.',
    'Draw neat diagrams wherever necessary.',
    'Answers must be written in English.',
  ],
  questions: [
    {
      number: 1,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Explain the Information Technology Act 2000 — its objectives, structure and four key provisions with section numbers.',
              explain:
                '**What is being asked.** The IT Act 2000 is the base of Indian cyber law. The examiner wants three things: why it was enacted (objectives), how it is organised (chapters and what they cover), and specific sections with what each one does. Section numbers are the difference between a 4 and a 6.\n\n**The objectives.** Give legal recognition to electronic records and digital signatures; make e-commerce and e-governance legally valid; define and punish cyber offences; establish the certifying authority and the Cyber Appellate Tribunal; amend the Indian Penal Code, Evidence Act, RBI Act and Bankers Books Evidence Act so that paper law and cyber law agree.\n\n**The provisions to quote.** Section 4 — legal recognition of electronic records. Section 5 — digital signature. Section 43 — penalty for damage to computer, data or network. Section 43A — compensation for failure to protect sensitive personal data. Section 65 — tampering with source code. Section 66 — computer related offences (the main hacking section, three years and fine up to five lakh). Section 66C — identity theft. Section 66D — cheating by personation using a computer resource. Section 67 — publishing obscene material. Section 72 — breach of confidentiality and privacy.\n\n**How to score the 6 marks.** Objectives (2) · structure (1) · four provisions with sections explained (3).',
              answer:
                '**The Information Technology Act 2000** is the first Indian law that gave legal status to electronic records, electronic signatures and electronic commerce, and made certain acts in cyberspace punishable. It came into force on 17 October 2000.\n\n**Objectives**\n1. Give **legal recognition** to electronic records and to digital signatures, so that an electronic document is not weaker than a paper one.\n2. Facilitate **electronic filing, e-commerce and e-governance** by making such transactions legally valid and enforceable.\n3. **Define cyber offences** and provide penalties, so that a crime committed with a computer is punishable even when the older law has no words for it.\n4. Create the **institutional machinery** — Controller of Certifying Authorities, Certifying Authorities, Cyber Appellate Tribunal and adjudicating officers.\n5. **Amend allied laws** — the Indian Penal Code, the Indian Evidence Act, the Bankers Books Evidence Act and the RBI Act — so that the record of a computer is accepted as evidence.\n\n**Structure.** The Act has 13 chapters and 94 sections: preliminary definitions (s. 2), digital signature and electronic records (s. 3 to 10), electronic governance (s. 4 to 10A), regulation of certifying authorities (s. 17 to 34), the Cyber Appellate Tribunal (s. 48 to 64) and the offences chapter (s. 65 to 78), followed by amendments to other statutes.\n\n**Four key provisions**\n\n| Section | Provision | Effect |\n|---|---|---|\n| **s. 4** | legal recognition of electronic records | where a law requires writing, an electronic record satisfies it |\n| **s. 43** | penalty for unauthorised access, damage to computer, data or network | civil liability to compensate the affected person |\n| **s. 66** | computer related offences — dishonest or fraudulent act referred to in s. 43 | imprisonment up to 3 years and fine up to 5 lakh rupees |\n| **s. 66C and 66D** | identity theft, and cheating by personation using a computer resource | up to 3 years and fine up to 1 lakh; the sections used in most phishing cases |\n| **s. 72** | breach of confidentiality and privacy by a person holding powers under the Act | up to 2 years and fine up to 1 lakh |\n| **s. 43A** | compensation for failure to protect sensitive personal data | the reason every company now publishes a privacy policy and security practice |\n\n**Why it mattered.** Before 2000 the Indian Penal Code had no word for a computer record: nothing could be stolen if it was only data. The Act created the vocabulary — electronic record, computer resource, cyber offence — and the machinery to enforce it.\n\n**Exam line:** IT Act 2000 gives legal status to the electronic record, defines the cyber offence and builds the authority that punishes it.',
              diagram: 'it-act-2000',
              diagramCaption:
                'The IT Act 2000 — objectives, the three pillars of validity, security and governance, and the key sections with their penalties.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'What changes did the Information Technology (Amendment) Act 2008 make to the IT Act 2000? Explain any four.',
              explain:
                '**What is being asked.** A short factual question on the 2008 amendment, which is the version in force today. Four changes, each in one or two lines, are enough for the four marks.\n\n**The four to use.** Electronic signature replaces digital signature as the wider concept (s. 3A). Section 66A was inserted to punish offensive messages — and was struck down by the Supreme Court in Shreya Singhal (2015), which is a valuable sentence to add. Sections 66C, 66D, 66E, 67A, 67B were inserted — identity theft, cheating by personation, privacy violation, sexually explicit material, child sexual abuse material. Section 69 was widened to interception, monitoring and decryption, with the block-any-information power under 69A. Data retention and the CERT-In role were formalised under s. 67C and s. 70B.\n\n**How to score the 4 marks.** Four distinct changes (3) · one sentence on the effect, such as 66A being struck down (1).',
              answer:
                'The **IT (Amendment) Act 2008** re-wrote the 2000 Act to cover technology that did not exist in 2000 — mobile phones, social media, wireless and cloud. Four changes carry the marks.\n\n1. **Electronic signature replaced digital signature as the wider concept (s. 3A).** Digital signature was tied to one asymmetric cryptography standard; electronic signature covers any authentication technique notified by the government, which is what mobile and Aadhaar based signing needed.\n\n2. **New offences were inserted.**\n   - **s. 66C** — identity theft: fraudulent use of another person password or signature, up to 3 years and fine up to 1 lakh.\n   - **s. 66D** — cheating by personation using a computer resource, up to 3 years and fine up to 1 lakh.\n   - **s. 66E** — violation of privacy by capturing or publishing the image of a private area.\n   - **s. 67A and 67B** — sexually explicit material, and child sexual abuse material, with heavier punishment for the second.\n   - **s. 66A** — offensive messages through a communication service. This section was **struck down** by the Supreme Court in *Shreya Singhal v. Union of India* (2015) as unconstitutional for vagueness, so it must be quoted as a repealed provision, not a live one.\n\n3. **Surveillance and blocking powers were widened (s. 69 and 69A).** The government may intercept, monitor or decrypt information in the interest of sovereignty, security and public order, and may block public access to information. The procedure requires a written order by a competent authority and a review committee — the safeguard that the section is judged by.\n\n4. **Institutions and duties were strengthened.** **s. 70B** gave statutory recognition to CERT-In as the national nodal agency for incident response; **s. 67C** required intermediaries to retain traffic data for a notified period; the Cyber Appellate Tribunal was restructured; and the definition of intermediary was broadened to cover social media platforms and cyber cafes.\n\n**Exam line:** the 2008 amendment modernised the vocabulary — electronic signature, new offences, wider interception, CERT-In — and one of its sections, 66A, was later struck down.',
              diagram: 'it-act-amendments',
              diagramCaption:
                'The Information Technology (Amendment) Act 2008 — the changes it made to signature, offences, interception powers and institutions.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Explain the four pillars of cyber law and describe the Indian legal framework that implements them.',
              explain:
                '**What is being asked.** Cyber law is not one statute; it is a set of purposes. The examiner wants the four pillars — definition, scope, purpose, enforcement — and then the Indian instruments that fill them.\n\n**The four pillars.** Definition — what a cyber crime and a computer resource are. Scope — which activity is covered: computers, networks, internet, mobile, data. Purpose — prevent crime, protect data, ensure trust, enforce rights. Enforcement — police cyber cells, courts, statutory powers and international cooperation.\n\n**The Indian instruments.** IT Act 2000 as amended in 2008; Digital Personal Data Protection Act 2023; Indian Penal Code and the new Bharatiya Nyaya Sanhita 2023 for offences that are not purely cyber; Indian Evidence Act replaced by the Bharatiya Sakshya Adhiniyam 2023 for electronic evidence; CERT-In directions of 2022 for incident reporting; and sector regulators such as RBI and SEBI.\n\n**How to score the 6 marks.** Four pillars explained (3) · Indian statutes listed with what each contributes (3).',
              answer:
                '**Cyber law** is the body of law that governs activity in cyberspace — data, networks, devices and the people who use them. It rests on four pillars.\n\n| Pillar | Question it answers | Content |\n|---|---|---|\n| **Definition** | what is a cyber crime, a computer resource, a data breach | definitions of computer, computer resource, data, intermediary, cyber security incident |\n| **Scope** | which activity is covered | all digital activity — computers, networks, the internet, mobile devices, cloud and data in transit |\n| **Purpose** | why the law exists | prevent cyber crime, protect personal data, ensure trust in electronic transactions, enforce rights |\n| **Enforcement** | who acts and how | police cyber cells and the cyber crime portal, courts, statutory powers of search and seizure, international cooperation |\n\n**The Indian framework that implements them**\n1. **Information Technology Act 2000, as amended in 2008** — the base statute: legal recognition of electronic records, offences (s. 43, 65, 66, 66C, 66D, 67, 72), interception and blocking powers (s. 69 and 69A), and CERT-In (s. 70B).\n2. **Digital Personal Data Protection Act 2023** — protection of personal data: consent, purpose limitation, data principal rights, and penalties on a data fiduciary for a breach.\n3. **Bharatiya Nyaya Sanhita 2023 and Bharatiya Sakshya Adhiniyam 2023** — the replacement of the IPC and the Evidence Act: ordinary offences such as cheating and forgery now apply to digital acts, and electronic records are given the status of documents with a defined certificate requirement.\n4. **CERT-In directions, 2022** — mandatory reporting of specified incidents within six hours, log retention of 180 days in India, and synchronisation of clocks to NTP.\n5. **Sector regulators** — RBI cyber security framework for banks, SEBI guidelines for market infrastructure, and the telecom licensing conditions.\n6. **International cooperation** — mutual legal assistance treaties, the Budapest Convention as a model, and Interpol and 24x7 network contact points.\n\n**How the pillars work together.** A definition enables a prosecution, scope decides whether the conduct is inside the Act, purpose justifies the penalty, and enforcement gives it effect. If any one fails — for example, when data sits on a server in another country — the pillar of enforcement is where the case breaks.\n\n**Exam line:** four pillars, six instruments — the definition and scope come from the IT Act, protection from the DPDP Act, procedure from the new criminal codes, and timing from CERT-In.',
              diagram: 'cyber-laws',
              diagramCaption:
                'The four pillars of cyber law — definition, scope, purpose, enforcement — and the Indian statutes that implement them.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'State and explain the six key principles of cyber law.',
              explain:
                '**What is being asked.** A short conceptual question: the principles that any cyber law is expected to satisfy, each in one sentence with an example.\n\n**The six.** Legality — everything digital must follow the law; no act is allowed just because technology makes it possible. Proportionality — the response must match the threat: blocking an entire platform for one post is disproportionate. Data protection — personal data must be protected and used for the stated purpose. Cooperation — cross-border enforcement, because packets do not respect borders. Accountability — violators face action and the state itself is accountable for its powers. Transparency — laws, policies and blocking orders must be public and reasoned.\n\n**How to score the 4 marks.** Six principles named and explained briefly (3) · one example or case that shows a principle being applied (1).',
              answer:
                'Six principles are used to judge whether a cyber law is fair and workable.\n\n1. **Legality** — every digital act must be backed by law. The state cannot intercept, block or seize without a statutory power and a written order; a citizen cannot be punished for conduct that no law prohibits.\n2. **Proportionality** — the response must match the harm. Blocking a whole social media platform for a single objectionable post, or seizing every server of a company for one employee act, is disproportionate; the remedy must be the least restrictive that works.\n3. **Data protection** — personal data must be collected for a stated purpose, used only for it, kept no longer than necessary, and secured. The Digital Personal Data Protection Act 2023 turns this principle into consent, notice and penalty.\n4. **Cooperation** — a packet crosses three countries before it is read, so enforcement needs mutual legal assistance, the Budapest Convention model, Interpol channels and 24x7 contact points. No country can prosecute a cross-border crime alone.\n5. **Accountability** — violators must face action, and the authority that exercises a cyber power must itself be accountable through records, review committees and appeals. Section 69 of the IT Act is read with its procedure and review committee for this reason.\n6. **Transparency** — laws, policies and orders must be public and reasoned. A blocking order that cannot be examined cannot be appealed, and an unappealable power is not a lawful power.\n\n**The example that ties them together.** Section 69A of the IT Act permits blocking, satisfying legality; the order must be reasoned and reviewable, satisfying transparency and accountability; the block must be the narrowest that meets the harm, satisfying proportionality.\n\n**Exam line:** legality, proportionality, data protection, cooperation, accountability, transparency — six tests that any cyber law must pass.',
              diagram: 'law-principles',
              diagramCaption:
                'The six key principles of cyber law — legality, proportionality, data protection, cooperation, accountability and transparency.',
            },
          ],
        },
      ],
    },
    {
      number: 2,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Classify the types of hackers with the motive and the risk each represents, and state how an organisation should respond to each type.',
              explain:
                '**What is being asked.** Hackers are classified by permission and by motive, and the examiner wants both dimensions plus a response, because a cyber security answer ends with what the defender does.\n\n**The types.** White hat — authorised testing, discloses findings. Black hat — unauthorised, criminal motive. Grey hat — unauthorised but non-malicious, often discloses and asks for a reward. Script kiddie — uses ready tools without understanding. Hacktivist — ideology and publicity. Insider — legitimate access, personal motive. State-sponsored — espionage and sabotage with national resources. Cyber terrorist — violence and mass disruption.\n\n**The response.** White hat — contract, scope, rules of engagement, disclosure policy. Black hat — detect, contain, report to police. Grey hat — a vulnerability disclosure programme converts them into a reporting channel. Script kiddie — patching and basic controls, because known flaws are the whole attack. Hacktivist — DDoS protection and public relations readiness. Insider — behaviour analytics and least privilege. State actor — threat intelligence, segmentation and long-dwell detection.\n\n**How to score the 6 marks.** Classification with motives (3) · the response for at least four types (2) · the sentence on permission as the dividing line (1).',
              answer:
                'Hackers are classified on two dimensions: **permission** (authorised or not) and **motive** (defensive, criminal, ideological, political).\n\n| Type | Permission | Motive | Risk to an organisation | Response |\n|---|---|---|---|---|\n| **White hat** | authorised, under contract | improve security, disclose findings | none if the scope is respected; risk lies in scope creep | contract, written scope, rules of engagement, agreed disclosure |\n| **Black hat** | none | money, data, damage | high — theft, ransomware, extortion | detect, contain, preserve logs, report to police |\n| **Grey hat** | none, but not malicious | curiosity, recognition, a reward | medium — an unannounced intrusion is still a breach | vulnerability disclosure policy and a safe-harbour clause |\n| **Script kiddie** | none | thrill, status | low skill but high volume, uses published tools | patching, default-credential removal, basic hardening |\n| **Hacktivist** | none | ideology, publicity | defacement, DDoS, data dump | DDoS protection, takedown readiness, crisis communication |\n| **Insider** | legitimate | greed, grievance, coercion | very high — knows the controls and the data | UBA monitoring, least privilege, exit process |\n| **State-sponsored** | none | espionage, sabotage, coercion | very high and persistent — resources and patience | threat intelligence, segmentation, long-dwell detection |\n| **Cyber terrorist** | none | violence, mass disruption | attacks on critical infrastructure | critical infrastructure protection, CERT-In coordination |\n\n**The dividing line.** Permission, not skill, separates a security professional from a criminal. A white hat who steps outside the agreed scope becomes a black hat in law, whatever the intention — which is why a written authorisation is the first document of any penetration test.\n\n**Why classification matters to a defender.** The same technical control is not equally useful against every type. Patching defeats the script kiddie but not the state actor; monitoring catches the insider but not the DDoS. Budget follows the type that actually targets the business — a hospital worries most about ransomware and insiders, a defence supplier about state actors.\n\n**Exam line:** permission divides the professional from the criminal, motive divides the criminal from the activist, and the defence is chosen by the type that targets you.',
              diagram: 'types-of-hackers',
              diagramCaption:
                'Types of hackers by permission and motive, with the risk each presents and the response an organisation should take.',
            },
            {
              marks: 4,
              label: 'b',
              question: 'Differentiate hacking from cracking.',
              explain:
                '**What is being asked.** A short comparison. In the original usage, hacking is the skilled exploration of a system to understand or improve it; cracking is breaking a protection to gain something — a password, a licence, a copy protection scheme. The examiner wants four or five points of difference and a note that media usage has blurred the two.\n\n**The points.** Intention — knowledge versus gain. Permission — often authorised versus unauthorised. Effect — leaves the system improved or unchanged versus damages or breaks protection. Legality — lawful in a contracted test versus an offence under s. 66. Examples — a security researcher versus a licence cracker or a password cracker.\n\n**How to score the 4 marks.** Clear definition of both (1) · four points of difference (2) · the media-usage note (1).',
              answer:
                '**Hacking** is the skilled examination of a system to understand how it works — in its original sense a constructive activity, and in professional use the authorised testing of a system to find and fix weaknesses. **Cracking** is breaking a protection — a password, a licence check, a copy protection, an encryption — in order to gain something without permission.\n\n| Point | Hacking | Cracking |\n|---|---|---|\n| Intention | understand, improve, secure | obtain access, a copy or a benefit |\n| Permission | usually authorised and scoped | almost always unauthorised |\n| Effect on the system | unchanged or improved | protection removed, product or account compromised |\n| Legality | lawful under contract or own system | an offence — s. 66, 66C or 66D of the IT Act |\n| Example | a penetration test, a bug bounty submission | a licence key generator, a cracked password, a pirated application |\n\n**The note that earns the last mark.** Popular media uses "hacker" for the criminal meaning, which is why the professional community prefers *ethical hacker* or *security researcher* for the authorised role, and reserves *cracker* for the one who breaks protection. The distinction is not about skill — both are skilled — but about permission and intent.\n\n**Exam line:** a hacker opens a system to make it better, a cracker opens it to take something out of it — the difference is permission and intent.',
              diagram: 'hacking-and-cracking',
              diagramCaption:
                'Hacking compared with cracking across intention, permission, effect, legality and example.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Explain denial of service and distributed denial of service attacks, their types, and the layered mitigation an organisation should deploy.',
              explain:
                '**What is being asked.** DoS is an attack on availability, not on confidentiality. The examiner wants the difference between DoS and DDoS, the types, and the mitigation stack, because a DoS answer without mitigation is only half an answer.\n\n**Types.** Volumetric — floods the pipe: UDP flood, ICMP flood, DNS amplification, memcached amplification. Protocol — exhausts state: SYN flood, ping of death, fragmented packet attack. Application layer — exhausts the server: HTTP flood, Slowloris, slow POST, regex attack, API abuse.\n\n**Mitigation.** Scrubbing and anycast at the edge; rate limiting and connection limits; SYN cookies; WAF rules for application floods; autoscaling; caching and CDN; a runbook with a contact list and a legal/police escalation; and a communication plan, because a DoS is often a distraction from another attack.\n\n**How to score the 6 marks.** DoS versus DDoS (1) · three categories with examples (3) · mitigation stack (2).',
              answer:
                'A **denial of service (DoS)** attack makes a service unavailable to genuine users by exhausting a resource — bandwidth, connection table, CPU or a thread pool. A **distributed denial of service (DDoS)** does it from thousands of compromised devices at once, so that the traffic cannot be filtered by blocking a single source.\n\n| Category | Resource exhausted | Examples |\n|---|---|---|\n| **Volumetric** | network bandwidth | UDP flood, ICMP flood, DNS amplification, memcached amplification |\n| **Protocol / state** | connection table, kernel state | SYN flood, fragmented packet flood, ping of death |\n| **Application layer** | CPU, threads, database connections | HTTP flood, Slowloris, slow POST, API abuse, a request that triggers a heavy query |\n\n**How a DDoS is mounted.** A botnet — a network of infected machines and IoT devices — receives a command and sends traffic to the target together. Amplification attacks make it cheap: a small spoofed query to an open DNS resolver produces a large reply to the victim, so a modest attacker bandwidth becomes a large flood.\n\n**Layered mitigation**\n1. **Upstream scrubbing and anycast** — traffic is absorbed and cleaned by the provider before it reaches the data centre; anycast spreads the flood across many locations.\n2. **Rate limiting and connection limits** — per-IP and per-route limits, SYN cookies, shorter timeouts, and a cap on concurrent connections per client.\n3. **Application layer defence** — a WAF, caching for static content, and a rule that rejects the specific pattern (slow header, repeated search query) rather than all traffic.\n4. **Elastic capacity** — autoscaling so that a moderate flood is absorbed by extra instances rather than by user patience.\n5. **Runbook and relationships** — how to switch on the mitigation, whom to call at the ISP, when to inform the regulator under the CERT-In six-hour rule, and how to communicate with customers.\n\n**The point most answers miss.** A DoS is sometimes the visible half of an intrusion: while the security team fights the flood, a quieter attack proceeds elsewhere. The response must therefore keep monitoring the internal network during the incident, not only the edge.\n\n**Exam line:** DoS attacks availability, DDoS makes the source unfilterable, and the answer is scrubbing plus rate limits plus a runbook — never a single device.',
              diagram: 'dos-attack',
              diagramCaption:
                'Denial of service and distributed denial of service — the three categories of flood, the botnet path and the layered mitigation.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain the salami attack with an example, and state how it is detected.',
              explain:
                '**What is being asked.** A short, specific question on a classic fraud technique. Salami slicing is stealing a very small amount from a very large number of accounts, so that no single victim notices and the total is large.\n\n**The example.** Rounding interest down by one paise and crediting the remainder to the attacker account; a payroll program that moves a few rupees from each salary; a recharge system that shaves a fraction from each transaction.\n\n**Detection.** Reconciliation of totals at a finer granularity than the fraud; an audit of rounding logic; a check that the sum of debits equals the sum of credits to the paise; code review of the interest and commission calculation; and monitoring of accounts that receive many micro-credits.\n\n**How to score the 4 marks.** Definition (1) · worked example (1) · detection method (2).',
              answer:
                'A **salami attack** is a fraud in which a very small amount is taken from each of a very large number of transactions or accounts, so that no individual loss is large enough to be noticed while the attacker total is substantial. The name comes from slicing a salami: many thin slices make a meal.\n\n**Worked example.** A program computes interest on savings accounts. The correct interest on one account is 1,247.836 rupees. The program credits 1,247.83 to the customer and 0.006 to an account controlled by the attacker. Ten lakh accounts produce about six thousand rupees for the attacker and a loss of less than one paise per customer. The customer cannot see the loss; the bank does not look, because the individual difference is inside the rounding tolerance.\n\n**Variants.** Rounding down of interest or of currency conversion, shaving a fraction from each mobile recharge, a payroll routine that skims a few rupees per salary, a commission calculation that always rounds in one direction, or a refund process that keeps the difference.\n\n**How it is detected**\n1. **Reconciliation to the paise** — the sum of all debits must equal the sum of all credits for the day; salami breaks the balance, because the stolen fraction leaves the customer ledger and appears as a rounding difference.\n2. **Independent review of rounding and commission logic** — a rule that rounding must be to the nearest value and that the residual must go to a control account, never to an operational one.\n3. **Statistical monitoring** — an account that receives thousands of micro-credits, or a rounding direction that is always favourable to one side, is a visible pattern.\n4. **Code review and change control** — the fraud usually lives in a calculation module, so an unexplained change to that module is the earliest signal.\n\n**Why it is a cyber crime.** The act is performed by a program, often by a person who has legitimate access to the code — which makes it an insider fraud carried out through a computer resource, punishable under s. 66 of the IT Act.\n\n**Exam line:** salami slicing steals a fraction from everyone — it is caught by reconciliation to the last paise, not by any single customer complaint.',
              diagram: 'salami-attack',
              diagramCaption:
                'The salami attack — how a rounded fraction from many accounts becomes a large theft, and the reconciliation that exposes it.',
            },
          ],
        },
      ],
    },
    {
      number: 3,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Explain network forensics, the sources of network evidence, and any four tools used with the purpose of each.',
              explain:
                '**What is being asked.** Network forensics reconstructs what happened on the wire: who talked to whom, when, how much, and with what content. The examiner wants the sources of evidence and four named tools.\n\n**The sources.** Firewall logs, IDS and IPS alerts, NetFlow and IPFIX records, full packet capture, DNS logs, proxy logs, VPN and authentication logs, mail gateway logs, DHCP and ARP records, wireless controller logs.\n\n**The tools.** Wireshark for packet analysis; tcpdump and tshark for capture; Zeek (formerly Bro) for connection and protocol logs; NetworkMiner for artefact and file extraction; SiLK or nfdump for flow analysis; Snort or Suricata for alerting; Arkime (Moloch) for full packet capture indexing.\n\n**How to score the 6 marks.** Definition and scope (1) · sources of evidence (2) · four tools with purpose (2) · the point about flow versus full capture (1).',
              answer:
                '**Network forensics** is the capture, recording and analysis of network traffic and network logs to reconstruct an event — an intrusion, a data transfer, a policy violation — and to support an investigation. It answers four questions: which hosts talked, when, how much, and what was carried.\n\n**Sources of network evidence**\n\n| Source | What it proves |\n|---|---|\n| firewall and router logs | which connection was allowed or blocked, and from where |\n| IDS and IPS alerts | which signature fired, and against which host |\n| NetFlow, IPFIX, sFlow | who talked to whom, when, for how long and how many bytes — without content |\n| full packet capture | the actual bytes: headers and payload |\n| DNS logs | which domain was resolved — often the strongest indicator of command and control |\n| proxy and web gateway logs | which URL was fetched, by which user, and the response size |\n| authentication, VPN and DHCP logs | which user was on which IP at that minute — the key that ties an IP address to a person |\n| mail gateway logs | sender, recipient, attachment hash and delivery result |\n\n**Four tools**\n\n| Tool | Purpose |\n|---|---|\n| **Wireshark** | deep packet analysis — follow a TCP stream, decode protocols, export objects |\n| **tcpdump / tshark** | capture at the command line with a filter, on a server or in a container |\n| **Zeek** | turns traffic into structured logs — connections, DNS, HTTP, TLS, files — which are easier to analyse and to keep than raw packets |\n| **NetworkMiner** | extracts files, images, credentials and hosts from a capture without deep protocol knowledge |\n| **SiLK or nfdump** | flow analysis over weeks of records, for retrospection |\n| **Arkime** | indexes full packet capture so that a session can be replayed by search |\n\n**Flow versus full capture.** Full packet capture proves content but consumes enormous storage; flow records prove behaviour and can be kept for months. A mature network keeps both — flow for the long view, packets for the depth — and correlates them by the five-tuple and time.\n\n**The evidential point.** An IP address alone does not identify a person; DHCP, VPN and authentication logs must be joined to it, and NAT records must be preserved, or the attribution cannot survive cross-examination.\n\n**Exam line:** network forensics joins flow to packet to authentication log — the flow shows the behaviour, the packet proves the content, and the log proves the person.',
              diagram: 'cf-netools',
              diagramCaption:
                'Network forensics sources — firewall, flow, DNS, proxy and authentication logs — with the tools used to capture and analyse them.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain how an e-mail crime is investigated, naming the four artefacts an investigator examines first.',
              explain:
                '**What is being asked.** Mail is the most common evidence carrier in a cyber case. The examiner wants the investigation flow and four artefacts — header, content, mailbox logs, server logs.\n\n**The flow.** Preserve the mail (export with headers, hash it), read the header chain bottom-up to find the true originating server, check SPF, DKIM and DMARC results, extract URLs and attachments for sandboxing, then pull mailbox and server logs to see other recipients, rules, logins and IP addresses.\n\n**The four artefacts.** Full header with Received chain, Message-ID and Return-Path; body with URL and attachment hash; mailbox audit log — logins, rules, forwarding; server and gateway log — delivery, virus scan result, queue.\n\n**How to score the 4 marks.** Flow (2) · four artefacts (2).',
              answer:
                'An **e-mail crime** — phishing, spoofing, harassment, fraud, data exfiltration — is investigated from the message outwards, because the message carries both its own origin and the traces of who handled it.\n\n**The flow**\n1. **Preserve** — export the message in a format that keeps the full header, compute a hash of the exported file, and record the mailbox, folder and time of export.\n2. **Read the header** — bottom-up. The lowest `Received:` line is the earliest hop and the closest to the real origin; the top line is the last hop into the mailbox.\n3. **Test the authentication results** — the `Authentication-Results` field shows SPF, DKIM and DMARC pass or fail; a `Return-Path` that differs from `From`, or a `From` domain that fails DMARC, is the classic spoof signal.\n4. **Examine content** — extract every URL, defang it, and resolve the domain and hosting; hash every attachment and detonate in a sandbox; check the display name against the real address.\n5. **Follow the mailbox** — audit log for logins, forwarding rules, delegated access, and other recipients of the same message.\n6. **Correlate** — join the sender IP to the provider records and the recipient list to the organisation directory, then build the timeline.\n\n**Four artefacts examined first**\n- **Header chain** — `Received`, `Message-ID`, `Return-Path`, `Reply-To`, `X-Originating-IP`.\n- **Body and payload** — URLs, attachment names and SHA-256 hashes, and the wording that shows the pretext.\n- **Mailbox audit log** — login IP and time, new forwarding or deletion rules, permission changes.\n- **Server and gateway log** — delivery status, spam and virus verdict, queue ID, and whether other users received the same message.\n\n**The sentence that earns the last mark.** The header shows where the message claims to come from; the logs show where it actually came from — and the difference between the two is the crime.\n\n**Exam line:** header for origin, payload for intent, logs for attribution — an e-mail case starts at the header and is decided by the logs.',
              diagram: 'cf-emailcrime',
              diagramCaption:
                'The e-mail crime investigation flow — complaint, preservation, header, content, mailbox logs, server logs and report.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Explain static and dynamic malware analysis, the steps of each, and four tools used in a malware analysis lab.',
              explain:
                '**What is being asked.** Malware analysis answers what a sample does and how to detect it. The examiner wants the two methods — static (without running) and dynamic (running in a sandbox) — the steps, and four tools.\n\n**Static.** Identify the file type and hash; strings and imports; PE header and sections; packer detection; disassembly (IDA, Ghidra); YARA rules; compare against known hashes.\n\n**Dynamic.** Sandbox execution with network capture: process tree, file and registry changes, network connections, DNS, dropped files, persistence. Tools: Cuckoo or CAPE, Any.run, Process Monitor, Procmon/ProcExp, Wireshark, Regshot, INetSim, FakeNet.\n\n**Safety.** Isolated network, no real internet, snapshots, and legal handling of a live sample.\n\n**How to score the 6 marks.** Static steps (2) · dynamic steps (2) · four tools (1) · safety and reporting (1).',
              answer:
                '**Malware analysis** determines what a suspicious sample does, how it persists, what it communicates with, and how it can be detected. It is done in two complementary ways.\n\n**A. Static analysis — without running the sample**\n1. **Identify** the file type by magic bytes, not by extension, and compute MD5 and SHA-256 for the record.\n2. **Extract strings** — URLs, IP addresses, file names, registry keys, error messages.\n3. **Inspect the PE header** — compile time, imports, sections; an import list with no networking calls in a network worm is a contradiction worth noting.\n4. **Detect packing and obfuscation** — high entropy sections, few imports, an unusual entry point.\n5. **Disassemble or decompile** — IDA Pro, Ghidra, or a .NET decompiler to read the logic.\n6. **Write detection** — a YARA rule on the unique strings and byte patterns.\n\n**B. Dynamic analysis — running it in a controlled lab**\n1. **Isolate** — a virtual machine on a host-only network with a simulated internet service.\n2. **Snapshot, then run** and watch the process tree, file writes, registry changes and services created.\n3. **Capture the network** — DNS queries, HTTP and TLS handshakes, beacon interval, and the command and control domain.\n4. **Observe persistence** — run keys, scheduled tasks, services, startup folder, DLL side-loading.\n5. **Note evasion** — the sample that sleeps, checks for a VM, or refuses to run without a user action.\n6. **Document indicators** — hashes, domains, IP addresses, file paths, mutexes — everything a defender can block.\n\n**Four tools**\n\n| Tool | Use |\n|---|---|\n| **Ghidra or IDA Pro** | disassembly and decompilation for static analysis |\n| **Cuckoo or CAPE sandbox** | automated dynamic run with a full report |\n| **Process Monitor and Process Explorer** | live view of file, registry and process behaviour |\n| **Wireshark with INetSim or FakeNet** | capture and simulate the network the sample expects |\n| **YARA** | write and share detection rules from the extracted indicators |\n\n**Safety and law.** The lab has no route to the production network, snapshots are taken before every run, and the sample is handled as evidence with a hash and a custody record. Analysing malware found in an incident is permitted; obtaining and running it outside an authorised investigation is not.\n\n**Exam line:** static analysis reads the sample, dynamic analysis watches it run — together they produce the indicators that let the defender block it.',
              diagram: 'cf-malanalysis',
              diagramCaption:
                'Static and dynamic malware analysis — the steps of each method and the tools used for the sample, the sandbox and the network.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain database forensics and name the four sources of evidence in a database investigation.',
              explain:
                '**What is being asked.** Database forensics reconstructs what happened inside a database — who changed a record, when, and from where — without changing the production data.\n\n**The sources.** Transaction log (redo and undo), audit trail (who, what, when), general and error log, database files and backups, and the application log that connects a user session to the statement.\n\n**The rule.** Never run a modifying query on production; work on a restored copy, and note that restoring changes nothing in the original only if the backup is taken correctly.\n\n**How to score the 4 marks.** Definition and aim (1) · four sources with what each proves (2) · the read-only rule (1).',
              answer:
                '**Database forensics** is the investigation of a database and its logs to establish what data was read, changed or deleted, by whom, when and from where — without altering the production data.\n\n**Four sources of evidence**\n\n| Source | What it proves |\n|---|---|\n| **Transaction log** (redo and undo, write-ahead log) | the exact statement, the before and after image of the row, and the time — the strongest record of a change |\n| **Audit trail** | who executed what, from which host and session, when — when auditing is switched on |\n| **General and error log** | failed logins, permission errors, restarts, and the operations that failed |\n| **Database files and backups** | the current state, the unallocated pages and deleted rows, and the point-in-time state from a backup |\n| **Application and web server log** | the user session, IP address and page that generated the statement |\n\n**The method**\n1. **Preserve** — take a consistent backup or a storage-level snapshot, hash it, and record the version and configuration.\n2. **Restore elsewhere** — perform every query on a restored copy; a modifying query on production destroys the evidence it is meant to find.\n3. **Replay the log** — reconstruct the sequence of transactions around the incident time.\n4. **Compare** — the audit trail against the transaction log against the application log; a change present in one and absent in the others is itself a finding.\n5. **Report** — the statement, the before and after values, the user, the host and the time.\n\n**Why the transaction log matters most.** The audit trail can be disabled and the application log can be rotated, but the transaction log is required for recovery, so it is rarely switched off — and it holds the before and after image that the table itself no longer has.\n\n**Exam line:** the truth of a database is in its transaction log, not in the table — which is why the analysis runs on a restored copy.',
              diagram: 'cf-database',
              diagramCaption:
                'Database forensics — the evidence sources from transaction log to audit trail, and the read-only restore approach.',
            },
          ],
        },
      ],
    },
    {
      number: 4,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Distinguish cyber forensics from digital forensics and explain the role and responsibilities of a forensic examiner.',
              explain:
                '**What is being asked.** Two related terms that are used loosely, then the role of the person who does the work. Cyber forensics is the narrower term — investigation of network and cyber attacks, often live; digital forensics is the wider discipline covering any digital device, including a phone, a camera or a car.\n\n**The distinction.** Scope — attack-focused versus device-focused. Timing — often during an incident versus after seizure. Evidence — logs and traffic versus storage media. Skill base — network and malware versus file systems and storage.\n\n**The examiner role.** Follow the process, preserve integrity, stay inside the authority, document contemporaneously, analyse without bias, report what the evidence supports and state the limitation, and be able to testify.\n\n**How to score the 6 marks.** Comparison table (2) · role definition (1) · responsibilities (2) · the independence and bias point (1).',
              answer:
                '**Digital forensics** is the broad discipline of preserving, acquiring, analysing and reporting any digital evidence, from any device — a laptop, a phone, a camera, a smart television, a vehicle unit, a cloud tenant. **Cyber forensics** is the part of that discipline concerned with cyber attacks: intrusions, malware, network traffic, web and mail crime, and incident response. Every cyber forensic examination is a digital forensic examination, but not the reverse.\n\n| Point | Cyber forensics | Digital forensics |\n|---|---|---|\n| Focus | the attack — how the intruder got in and what was taken | the device — what the media contains |\n| Timing | often during the incident, live, with the system running | usually after seizure, on a static image |\n| Typical evidence | logs, packet capture, memory, malware, cloud audit | file system, deleted files, registry, application data, media files |\n| Core skills | network, malware, incident response | file systems, storage, artefact interpretation |\n| Output | attack timeline and containment advice | evidential findings on the device |\n\n**Role of a forensic examiner.** The examiner is the person who applies the method and stands behind the result. Responsibilities:\n1. **Follow the process** — identification, preservation, acquisition, examination, analysis, documentation, reporting, in that order.\n2. **Protect integrity** — write blockers, hashing, seals, and a documented chain of custody.\n3. **Stay inside the authority** — search only what the warrant, consent or statutory power permits, and record the scope.\n4. **Document contemporaneously** — notes written at the time, with tool names and versions, not reconstructed later.\n5. **Analyse without bias** — search for exculpatory evidence as carefully as for incriminating evidence; the report must state what the evidence does not show.\n6. **Report and testify** — findings in plain language, each one tied to an artefact, and the limitation stated.\n\n**The independence point.** A good examiner is judged not by the conclusion but by whether another examiner with the same evidence could reach it. That is why the report states the method, the tools and the hash, and why an examiner who cannot explain a step cannot rely on the result.\n\n**Exam line:** digital forensics covers every device, cyber forensics covers the attack — and the examiner is the person whose method makes either one admissible.',
              diagram: 'df-vs-cyber',
              diagramCaption:
                'Cyber forensics compared with digital forensics across focus, timing, evidence, skills and output.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain the duties of the first responder at a digital crime scene, and why their actions decide the case.',
              explain:
                '**What is being asked.** The first responder is usually not a forensic examiner — a security officer, a police officer, a system administrator. Their four or five actions fix the quality of everything that follows.\n\n**The duties.** Secure the scene and the people; do not power off or reboot; photograph and record the state; capture volatile data under guidance; isolate from the network; seal and label; start the custody record; call the examiner.\n\n**Why it decides the case.** The first responder is the only person who sees the machine in its running state. A shutdown loses memory and encryption keys; a reboot changes timestamps; a helpful search through files alters them.\n\n**How to score the 4 marks.** Duties (2) · the running-state argument (1) · one concrete example of damage (1).',
              answer:
                'The **first responder** is the person who reaches the scene first — a security officer, a police officer, a system administrator or a help-desk engineer. The examiner arrives later; the evidence is already in whatever state the responder left it.\n\n**Duties**\n1. **Secure** the scene, the people and the device; keep unauthorised persons away and note who was present.\n2. **Do not power off, reboot or shut the lid** — a running machine holds memory, logged-in sessions, mapped drives and often the encryption key.\n3. **Record the state** — photograph the screen, note the visible applications, the time, the network cable, the serial number and any external device.\n4. **Capture volatile data** under guidance — memory, connections, logged-in users — or call the examiner immediately if that is not possible.\n5. **Isolate from the network** — unplug the cable or disable Wi-Fi; place a phone in a Faraday bag so that a remote wipe cannot arrive.\n6. **Seal, label and start custody** — anti-static bag, tamper-evident seal, exhibit number, signature, and the first entry of the custody record.\n7. **Preserve the physical scene** — notes, printouts, USBs, badges, CCTV, and the access log of the room.\n\n**Why the responder decides the case**\n- A **shutdown** destroys memory, which is where the encryption key and the live malware usually are, and it changes file times on the next boot.\n- A **reboot** updates last-access times and can trigger a scheduled task that erases the payload.\n- A **helpful search** through the folders alters timestamps and the recent-files list, and the defence will call that alteration tampering.\n\nA single unrecorded action — opening a document, plugging in a USB to copy files, restarting to see if it fixes the problem — can make a strong case inadmissible, because integrity can no longer be shown. The responder does not need forensic skill; the responder needs discipline.\n\n**Exam line:** the first responder is the only witness of the running machine — do not switch it off, do not search it, photograph it, isolate it, seal it and call the examiner.',
              diagram: 'df-role',
              diagramCaption:
                'The role of the first responder and the forensic examiner at a digital crime scene, with the actions that preserve or destroy evidence.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Explain how a forensic tool is selected, validated and used in a case. Refer to the criteria and to one validation framework.',
              explain:
                '**What is being asked.** A tool is not trusted because it is popular; it is trusted because it was tested and because its output can be explained. The examiner wants selection criteria, validation, and the use in a case.\n\n**Selection criteria.** Capability for the evidence type; accuracy and completeness; support for the file system or format; logging and audit trail; hash verification; licensing and cost; vendor support and updates; training requirement; court acceptance; open versus closed source.\n\n**Validation.** Functional testing against known data; NIST CFTT (Computer Forensic Tool Testing) reports; internal test images with known artefacts; version pinning; regression after every update.\n\n**Use in a case.** Use the validated version, record the version and configuration, hash before and after, verify with a second tool where the finding is critical, and explain the output in plain language.\n\n**How to score the 6 marks.** Criteria (2) · validation with NIST CFTT (2) · use in a case with cross-verification (2).',
              answer:
                'A forensic tool is a measuring instrument. It is acceptable in court only if it was chosen for the right reason, tested before use, and used in a way that another examiner can repeat.\n\n**A. Selection criteria**\n\n| Criterion | Question to ask |\n|---|---|\n| Capability | does it handle this evidence type — NTFS, APFS, ext4, mobile, cloud, memory? |\n| Accuracy | does it report what is actually there, with no false positive? |\n| Completeness | does it miss artefacts, deleted files, alternate streams, timestamps? |\n| Auditability | does it log every action it performs, with a hash verification? |\n| Support and updates | is the vendor responsive, and is a new version tested before it is deployed? |\n| Cost and licence | is the licence valid for forensic use in court, not only for internal use? |\n| Training | can the team explain the output under cross-examination? |\n| Acceptance | has the tool been accepted in similar cases, or is it at least documented in a published test? |\n\n**B. Validation**\n1. **Functional test on known data** — a test image with a known file, a known deleted file, a known timestamp; the tool must find what is known to be there and nothing that is not.\n2. **External test reports** — the **NIST Computer Forensic Tool Testing (CFTT)** programme publishes specifications and results for imaging, write blockers and file-carving tools; a report is the strongest single evidence of tool behaviour.\n3. **Version control** — the exact version and build are recorded; a validated version is not silently replaced by an update, because an update can change output.\n4. **Repeatability check** — the same image processed twice must give the same result, and a second tool should confirm any finding that carries the case.\n\n**C. Use in a case**\n- Work **only on the copy**, with the original sealed and hashed.\n- **Record** the tool name, version, licence and the settings used, and keep the tool log with the case notes.\n- **Verify critical findings with a second tool** — for example confirm a deleted file found by Autopsy using a carving tool and then a manual hex review.\n- **Explain the output** in plain language in the report; an exhibit that the examiner cannot explain is an exhibit the court cannot use.\n\n**The principle.** The tool does not make the finding admissible; the method that surrounds the tool does. Validation proves the instrument, documentation proves the measurement, and cross-verification removes the doubt.\n\n**Exam line:** choose by capability, prove by NIST CFTT and a known test image, and use the validated version with a second tool on anything critical.',
              diagram: 'df-tools',
              diagramCaption:
                'Selecting, validating and using a forensic tool — criteria, the NIST CFTT validation route and cross-verification in a case.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain how digital evidence is validated and admitted in court. State the four tests the evidence must pass.',
              explain:
                '**What is being asked.** A short legal-procedure question. Validation is proving that the exhibit is what it claims to be; admission is the court accepting it. The four tests: relevance, authenticity, integrity, and legality of acquisition — with reliability of the tool as the supporting condition.\n\n**The Indian position.** Electronic records are admissible as documents under the Bharatiya Sakshya Adhiniyam 2023 (earlier s. 65B of the Evidence Act), with a certificate from the person in charge of the device describing the process.\n\n**How to score the 4 marks.** Meaning of validation (1) · four tests (2) · the certificate requirement (1).',
              answer:
                '**Validation** of digital evidence means proving that the exhibit is what it is claimed to be, that it came from the device or account named, and that it has not changed since it was collected. **Admission** is the court accepting it after the opposing side has had the chance to challenge it.\n\n**The four tests**\n1. **Relevance** — the evidence must bear on the fact in issue; a folder of unrelated photographs proves nothing.\n2. **Authenticity** — the evidence must be tied to a source: the device serial, the account, the hash taken at seizure, the signer of the mail.\n3. **Integrity** — the evidence must be shown unchanged: matching SHA-256 hashes before and after analysis, a write blocker, an unbroken chain of custody.\n4. **Legality** — the evidence must have been obtained under lawful authority: a warrant, consent, or a statutory power, with the scope respected.\n\n**The supporting condition.** The **tool and method must be reliable** — a validated version, a documented procedure, and an examiner who can explain the output. Authenticity without a reliable method is a claim, not proof.\n\n**The Indian procedural requirement.** An electronic record is proved by a **certificate** — under the Bharatiya Sakshya Adhiniyam 2023, replacing the earlier s. 65B of the Evidence Act — signed by the person in charge of the computer or communication device, describing the device, the period, the manner of production and the safeguards. The certificate is the bridge between the technical exhibit and the courtroom.\n\n**What the defence attacks.** Almost always integrity and custody — a gap in the seal record, a copy made without a write blocker, or an examiner who cannot say which tool version was used. Preparation for those three questions is what validation means in practice.\n\n**Exam line:** relevance, authenticity, integrity, legality — and a certificate that ties the exhibit to the device that produced it.',
              diagram: 'df-validate',
              diagramCaption:
                'Validating digital evidence for court — the four tests, the reliability of the tool, and the certificate that proves the record.',
            },
          ],
        },
      ],
    },
    {
      number: 5,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 6,
              label: 'a',
              question:
                'Explain how social engineering is sold as a service. Describe the roles of buyer, vendor, tool provider and call centre in an attack vendors market.',
              explain:
                '**What is being asked.** Social engineering has industrialised: it is bought like any other service. The examiner wants the market structure — buyer, vendor, tool provider, call centre — and the reason this changes defence.\n\n**The market.** A buyer wants a specific outcome: access to a mailbox, an OTP, a payment approval, a fake profile. A vendor (initial access broker, phishing kit seller, disinformation service) supplies it. A tool provider sells the platform: phishing kits, cloned pages, SMS gateways, spoofing services, deepfake voice. A call centre provides the human voice at scale: vishing operators, help-desk impersonators, sometimes in a rented office.\n\n**Why it matters.** Skill is no longer a barrier; price list, reviews and support exist. Attack volume rises, quality is standardised, and attribution is harder because the buyer and the vendor are different actors.\n\n**How to score the 6 marks.** Concept of social engineering as a service (1) · four roles (3) · effect on defence (2).',
              answer:
                '**Social engineering as a service** is the commercial model in which the human side of an attack is bought and sold like any other product: a price list, a delivery guarantee, support and reviews. The attacker no longer needs skill or patience, only a budget.\n\n| Role | What they supply | Example |\n|---|---|---|\n| **Buyer** | the objective — access, data, money, a reputation attack | a competitor buys access to a mailbox; a fraudster buys a verified account |\n| **Vendor** | the delivered result — an initial access broker sells a working session; an infostealer operator sells logs | "access to a VPN account in a finance company, price on request" |\n| **Tool provider** | the platform — phishing kits, cloned login pages, SMS gateways, caller-ID spoofing, deepfake voice models | a phishing kit with a live control panel and OTP relay for a monthly fee |\n| **Call centre** | the human voice at scale — vishing operators, help-desk impersonators, "digital arrest" callers | forty operators in a rented office calling a customer list in eight-hour shifts |\n\n**How the market is organised.** The buyer orders a result; the vendor assembles the pieces from tool providers and call centres; the payment is held in escrow; the vendor delivers and is rated. Because each piece is sold separately, a single attack can involve four unrelated criminal groups, each of which knows only its own part.\n\n**What changes for the defender**\n1. **Volume and quality rise.** A standardised kit with support produces a convincing mail at low cost, so filtering must scale and users cannot be the last line.\n2. **Attribution becomes harder.** The voice on the call, the page that was cloned and the account that was bought belong to three different actors, so a takedown of one does not stop the campaign.\n3. **Defence shifts to the controls that do not depend on the attacker identity** — MFA with number matching, verification out of band, dual approval for payments, and a reporting route fast enough to matter.\n4. **Detection must look at behaviour, not at infrastructure** — a new beneficiary added after a call, a login from a new device, a spike of MFA prompts.\n\n**Exam line:** buyer, vendor, tool provider and call centre — social engineering is now a supply chain, so defence must not depend on the attacker being unskilled.',
              diagram: 'se-vendors',
              diagramCaption:
                'The social engineering as a service market — buyer, vendor, tool provider and call centre — and what each one supplies.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain how the target of a social engineering attack is selected, and state four defence strategies for the organisation.',
              explain:
                '**What is being asked.** Targeting is not random; it follows access, authority and information. The examiner wants the selection logic and four defences.\n\n**Selection.** By access — who can reach the system, the money, the data. By authority — who can approve. By information — who knows the schedule, the vendors, the passwords. By exposure — who is visible on LinkedIn, who is new, who is under pressure, who works alone.\n\n**Defence.** Layer model (people, process, technology, governance), verification procedures that are mandatory and quick, technical controls that do not depend on the user, and monitoring with a reporting culture.\n\n**How to score the 4 marks.** Selection logic (2) · four defences (2).',
              answer:
                'A social engineering target is chosen for what the person can do, not for who the person is.\n\n**How the target is selected**\n1. **By access** — who holds credentials for the system the attacker wants: the finance executive, the help-desk agent who can reset passwords, the vendor engineer with a support account.\n2. **By authority** — who can approve a payment, a new vendor, a badge, an exception; a manager of one person who approves everything is a better target than a junior in a large team.\n3. **By information** — who knows the schedule, the vendor list, the ticket format, the travel plan; a personal assistant knows more than a director.\n4. **By exposure and pressure** — who is visible on social media, who is new and unsure, who is under a deadline, who works alone on a shift, who is afraid of a penalty.\n\nThe selection is then matched to the pretext: authority pretext for a junior, urgency for someone under a deadline, help for someone whose role is to help.\n\n**Four defence strategies**\n1. **Layer the defence** — people, process, technology and governance. Awareness training alone fails on a good pretext; training plus a mandatory verification procedure plus a technical control plus a policy that protects the person who reports holds.\n2. **Make verification easy and normal** — a known callback number for payments, a rule that no credential is ever given on an inbound call, number matching instead of a plain push, and a help desk that is praised for refusing rather than blamed for delay.\n3. **Reduce the public footprint** — no org charts, no vendor lists, no out-of-office detail that names systems, no photographs of badges, and a social media policy that the staff can actually follow.\n4. **Monitor and reward reporting** — a one-click report button, a fast response that revokes a session within minutes, and a culture where a person who reports a mistake is protected, because a hidden mistake is what turns an attempt into a breach.\n\n**Exam line:** the target is chosen by access, authority and information — so defence must protect the person who has the power, not only the system that holds the data.',
              diagram: 'se-targets',
              diagramCaption:
                'Social engineering targets chosen by access, authority and information, with the four defence strategies that answer them.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Design an insider threat prevention programme. Explain the controls for policy, people, process and technology, and the metrics used to judge it.',
              explain:
                '**What is being asked.** A programme, not a control list. The examiner wants four pillars — policy, people, process, technology — plus metrics, and the argument that this is continuous rather than a one-time project.\n\n**Policy.** Acceptable use, classification, monitoring notice, exit policy, non-disclosure, conflict of interest, and a clear statement that monitoring is transparent and proportionate.\n\n**People.** Screening at hire, awareness, a reporting channel, support for financial or personal stress, fair treatment on exit.\n\n**Process.** Access review quarterly, least privilege, separation of duties, dual approval for payments, exit checklist with the last working hour, and a disciplinary process.\n\n**Technology.** UBA/UEBA, DLP, EDR, egress filtering, mail rule audit, cloud access security broker, badge and CCTV correlation.\n\n**Metrics.** Access reviews completed, time to revoke on exit, number of anomalies investigated, number of confirmed insider events, DLP alerts closed, percentage of high-risk roles rotated.\n\n**How to score the 6 marks.** Four pillars (3) · metrics (2) · the transparency and proportionality balance (1).',
              answer:
                'An **insider threat prevention programme** is a continuous cycle of policy, people, process and technology, aimed at the person who already has legitimate access. It is not a project with an end date, because the risk changes with every hire, transfer and resignation.\n\n**1. Policy**\n- Acceptable use and data classification, written so that a normal employee can follow it.\n- A **monitoring notice** — what is monitored, why, and who can see it — because covert monitoring destroys the reporting culture.\n- Exit policy: access removed on the last working hour, devices returned, cloud sessions revoked, and a documented handover.\n- Conflict-of-interest and secondary-employment declarations, and a non-disclosure agreement with a defined data list.\n\n**2. People**\n- Pre-employment screening proportionate to the role; stronger for finance, admin and engineering.\n- Awareness that names the insider risk explicitly, so that a colleague reports a bulk download without feeling disloyal.\n- A confidential reporting channel and support for financial or personal stress — the two most common motives.\n- Fair, documented treatment on exit; a person who leaves badly treated is the highest-risk leaver.\n\n**3. Process**\n- **Least privilege** by role, with **quarterly access review** signed by the data owner.\n- **Separation of duties** and **dual approval** for payments, vendor creation and data export.\n- Joiner, mover, leaver process with a single owner and an audit trail.\n- Monitoring of the **notice period**, which is the highest-risk window in practice.\n- An investigation process that is fair, documented and separate from the line manager under review.\n\n**4. Technology**\n- **User and entity behaviour analytics** — volume, time, resource and peer-group comparison.\n- **DLP** on mail, web, USB and cloud, with alerting on bulk archive creation.\n- **EDR** and egress filtering, plus a mail-rule audit for forwarding to external addresses.\n- Cloud access security broker, badge and CCTV correlation, and print monitoring for regulated data.\n\n**Metrics that show the programme works**\n\n| Metric | Why it matters |\n|---|---|\n| access reviews completed on time | the control that prevents accumulation of privilege |\n| time from exit to access revocation | the window an ex-employee can still act |\n| anomalies investigated and closed | whether monitoring produces action or noise |\n| DLP alerts per 1,000 users | whether the threshold is tuned and the policy understood |\n| confirmed insider events per year | the outcome measure |\n| repeat findings in audit | whether the programme is actually changing behaviour |\n\n**The balance to state explicitly.** Monitoring must be transparent and proportionate: employees are told what is monitored, the data is limited to what the risk requires, and privacy is protected. A programme that watches everything without telling anyone catches fewer insiders, because the people who would report one no longer trust the organisation.\n\n**Exam line:** policy, people, process, technology — in a loop, measured, and applied transparently, because an insider threat programme is a culture with controls, not a control with a poster.',
              diagram: 'se-prevent',
              diagramCaption:
                'The insider threat prevention programme — policy, people, process and technology controls, with the metrics that judge it.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Differentiate identity theft from identity fraud, and state three controls that reduce both.',
              explain:
                '**What is being asked.** Two terms used interchangeably in the press but not in law: theft is taking the identifiers, fraud is using them. The examiner wants the distinction, the sources of identifiers, and three controls.\n\n**The distinction.** Identity theft — acquisition of personal identifiers (Aadhaar number, PAN, card data, OTP, biometrics). Identity fraud — use of those identifiers to obtain money, credit, an account or a benefit. The theft may happen years before the fraud.\n\n**Sources.** Phishing, SIM swap, data breach, shoulder surfing and dumpster diving, social media.\n\n**Controls.** Data minimisation, MFA and SIM-lock, credit monitoring and alerting, and a fast freeze/report process.\n\n**How to score the 4 marks.** Distinction with example (2) · three controls (2).',
              answer:
                '**Identity theft** is the acquisition of another person personal identifiers — name with date of birth, Aadhaar or PAN number, card details, OTP, biometrics, or a scanned document. **Identity fraud** is the use of those identifiers to obtain money, credit, an account, a service or a benefit.\n\nTheft is the taking; fraud is the using. The two can be years apart, and the victim often learns of the theft only when the fraud appears — a loan application, a new SIM, a tax filing, a card transaction.\n\n| Point | Identity theft | Identity fraud |\n|---|---|---|\n| Act | collecting or stealing identifiers | using them for a benefit |\n| Example | a phishing page harvests an Aadhaar number and an OTP | a loan is taken in the victim name with those details |\n| Detection | breach alert, unexpected OTP, SIM stops working | credit report entry, demand notice, declined loan, tax mismatch |\n| Legal route | s. 66C of the IT Act — identity theft | s. 66D — cheating by personation, with the ordinary cheating provisions |\n\n**Where the identifiers come from.** Phishing and vishing, SIM swap at a retail counter, a breach of a service provider, shoulder surfing at an ATM, documents in a dustbin, and public social media profiles that carry date of birth and family names.\n\n**Three controls**\n1. **Data minimisation and masking** — collect only what is needed, mask the identifier on screens, statements and call-centre displays, and never ask a customer to read out a full number.\n2. **Strong authentication and SIM protection** — MFA with number matching or a hardware key, a SIM-lock or port-out PIN with the operator, and a rule that a new SIM is activated only after in-person or video verification.\n3. **Monitoring and a fast response** — free credit report checks, alerts on a new account or a new beneficiary, and a one-step route to report and freeze: the CERT-In and cyber-crime portal complaint, the bank hotline, and the telecom operator, all within the first hour.\n\n**Exam line:** theft takes the identifiers, fraud spends them — so defence must protect the identifier at collection and detect the moment it is used.',
              diagram: 'se-identity',
              diagramCaption:
                'Identity theft compared with identity fraud — sources of identifiers, the route from theft to fraud, and the controls that block it.',
            },
          ],
        },
      ],
    },
  ],
};
