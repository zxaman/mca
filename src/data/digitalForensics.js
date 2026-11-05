// Cyber Security — Unit IV: Digital Forensics
// Topics 4.1 – 4.10, teacher-style Hinglish notes + exam Q&A.

export const digitalForensicsTopics = [
  {
    "id": "digital-forensics-intro",
    "number": "4.1",
    "title": "Introduction to Digital Forensics",
    "subtitle": "Science of digital evidence — definition, history aur scope",
    "icon": "search",
    "accent": "#00d4ff",
    "englishDefinition": "Digital forensics is the scientific discipline of identifying, collecting, preserving, examining, analysing and reporting on digital evidence so that it can be relied upon in a court of law or a formal disciplinary process. It grew out of the 1980s practice of 'computer forensics', where investigators examined standalone machines for financial crime; the 1990s added network and internet investigation and produced the first guidance documents (IOCE, G8 principles, the ACPO guide); the 2000s brought formal standards (NIST SP 800-86, ISO/IEC 27037), validated tools and accredited laboratories; and the 2010s onwards extended the discipline to mobile, memory, cloud, IoT, container and industrial control systems, with automation and machine learning entering triage and analysis. The discipline rests on the same non-negotiable rules at every stage: the original evidence must not be altered, every action must be documented and reproducible, hashes must prove integrity, and each conclusion must be traceable to an artefact that a second expert can re-examine. Its purpose is not only to convict offenders but equally to exonerate the innocent, to reconstruct facts for disciplinary and civil disputes, to establish root cause in incidents, and to feed lessons back into prevention.",
    "intro": "**Digital forensics** = digital evidence ko scientifically **identify, collect, preserve, examine, analyse aur report** karne ki discipline — taaki court ya disciplinary process us par bharosa kar sake. Iski history teen step mein: **1980s** standalone computer forensics, **1990s** network + internet cases aur ACPO/IOCE guidance, **2000s** NIST SP 800-86 aur ISO 27037 jaise standards, **2010s+** mobile, memory, cloud, IoT aur AI-assisted triage.",
    "sections": [
      {
        "type": "definition",
        "title": "Digital forensics kya hai",
        "kicker": "Definition",
        "body": "**Digital forensics** digital devices aur data se evidence nikalne, usse scientifically analyse karne aur court-ready report dene ka discipline hai. Isme computer, mobile, network, cloud, memory, IoT aur vehicle systems sab aate hain.",
        "body2": "Iska maqsad sirf **conviction** nahi — **exoneration** bhi hai. Galat aaropi ko bachana, corporate disciplinary case solve karna aur incident ka root cause nikalna bhi isi ka kaam hai.",
        "chips": [
          "digital evidence",
          "court-ready",
          "reproducible",
          "hash integrity",
          "ISO 27037"
        ]
      },
      {
        "type": "points",
        "title": "Evolution — kaise yahan tak pahunche",
        "kicker": "History",
        "points": [
          "**1980s:** 'computer forensics' — standalone PC, financial fraud, floppy images (FBI magnetic media program).",
          "**1990s:** internet boom, network investigation, **IOCE** (1998) aur G8 principles, UK **ACPO** good practice guide.",
          "**2000s:** formal standards — **NIST SP 800-86** (2006), **ISO/IEC 27037** (2012), validated tools (NIST CFTT), accredited labs (ISO 17025).",
          "**2010s:** mobile forensics (smartphones), memory forensics, cloud forensics, IoT aur vehicle forensics.",
          "**2020s:** automation, AI/ML triage, remote acquisition, DFIR platforms (Velociraptor/KAPE), container aur Kubernetes forensics."
        ]
      },
      {
        "type": "cards",
        "title": "Digital forensics ke branches",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "monitor",
            "title": "Computer / disk forensics",
            "body": "Laptop, server, disk images, file system artifacts, registry."
          },
          {
            "icon": "network",
            "title": "Network forensics",
            "body": "PCAP, flow, firewall/IDS logs, DNS, TLS metadata."
          },
          {
            "icon": "device",
            "title": "Mobile forensics",
            "body": "Android/iOS extraction, SQLite DBs, chats, GPS, app artefacts."
          },
          {
            "icon": "layers",
            "title": "Memory forensics",
            "body": "RAM: processes, connections, keys, injected code (Volatility)."
          },
          {
            "icon": "globe",
            "title": "Cloud forensics",
            "body": "Provider audit logs, mailbox/tenant export, snapshots, jurisdiction issues."
          },
          {
            "icon": "database",
            "title": "Database & e-mail forensics",
            "body": "Transaction logs, audit trails, mailbox headers."
          },
          {
            "icon": "wrench",
            "title": "IoT / vehicle forensics",
            "body": "Smart devices, infotainment, ECU logs, telematics."
          },
          {
            "icon": "code",
            "title": "Malware forensics",
            "body": "Static/dynamic analysis, IOC extraction, YARA rules."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Digital forensics vs cyber security operations",
        "kicker": "Comparison",
        "columns": [
          "Digital forensics",
          "Security operations"
        ],
        "rows": [
          {
            "label": "Goal",
            "values": [
              "sach sabit karna, legally",
              "attack rokna + service bahal"
            ]
          },
          {
            "label": "Timing",
            "values": [
              "incident ke baad / case ke liye",
              "real-time / continuous"
            ]
          },
          {
            "label": "Output",
            "values": [
              "report + admissible evidence",
              "alert, containment, RCA"
            ]
          },
          {
            "label": "Standard",
            "values": [
              "ISO 27037, 65B, chain of custody",
              "NIST CSF, SOC playbooks"
            ]
          },
          {
            "label": "Success",
            "values": [
              "defensible conclusion",
              "uptime + no loss"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800"
        ]
      },
      {
        "type": "example",
        "title": "Ek hi case mein forensic science kahan kaam aayi",
        "kicker": "Example",
        "body": "Company ke server se data leak hua. Forensic team ne (1) disk image se deleted **archive file** recover ki, (2) `$UsnJrnl` se us file ka creation time nikala, (3) VPN log se usi time ka login match kiya, aur (4) memory dump se running sync tool ka process dekha. Investigation ne ek employee ko exonerate kiya (uska laptop offline tha) aur actual insider ko identify kiya — **exoneration bhi forensic success hai**."
      },
      {
        "type": "points",
        "title": "Core rules jo kabhi nahi badalte",
        "kicker": "Golden Rules",
        "points": [
          "**Original untouched** — write blocker / hardware duplicator.",
          "**Hash integrity** — SHA-256 at acquisition aur verification.",
          "**Chain of custody** — har transfer documented aur signed.",
          "**Documentation** — contemporaneous notes, tool version, timestamps.",
          "**Reproducibility** — doosra expert same artefact se same result nikaale.",
          "**Legality** — authorisation, privacy law, IT Act **65B** certificate."
        ]
      },
      {
        "type": "diagram",
        "title": "Digital forensics — scope, history aur rules",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-intro",
        "caption": "1980s computer forensics → 1990s network → 2000s standards → 2010s mobile/cloud/IoT, sab par same rules: preserve, hash, custody, document"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Digital forensics:** digital evidence ko identify, preserve, analyse aur court-ready report dena.",
          "**History:** 1980s computer → 1990s network → 2000s standards (NIST/ISO) → 2010s mobile/cloud/IoT → 2020s AI/DFIR platforms.",
          "**Branches:** disk, network, mobile, memory, cloud, database, e-mail, IoT, malware forensics.",
          "**Purpose:** convict, exonerate, disciplinary action, root cause, prevention.",
          "**Golden rules:** original untouched, hash, custody, documentation, reproducibility, legality."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define digital forensics. Explain its objectives, scope and evolution.",
        "answer": "**Definition:** Digital forensics digital evidence ko scientifically identify, collect, preserve, examine, analyse aur report karne ki discipline hai — taaki court ya formal process us par bharosa kar sake.\n\n**Objectives:**\n1. **Reconstruct** — kya hua, kab, kaise (timeline).\n2. **Attribute** — kisne kiya (user, device, IP).\n3. **Prove** — admissible evidence (hash + custody + 65B).\n4. **Exonerate** — nirdosh ko bachana.\n5. **Root cause** — incident kyun hua, control kaun sa fail hua.\n6. **Prevent** — lessons learned se controls improve.\n\n**Scope (branches):**\n\n| Branch | Focus |\n|---|---|\n| Disk/computer | file system, registry, deleted data |\n| Network | PCAP, flow, logs |\n| Mobile | extraction, SQLite, chats, GPS |\n| Memory | processes, keys, injection |\n| Cloud | audit logs, tenant export |\n| Database/e-mail | transaction logs, headers |\n| IoT/vehicle | device logs, telematics |\n| Malware | behaviour, IOC |\n\n**Evolution:**\n- **1980s** — computer forensics, standalone PCs, financial crime.\n- **1990s** — internet/network cases, IOCE (1998), G8 principles, ACPO guide.\n- **2000s** — NIST SP 800-86, ISO/IEC 27037, NIST CFTT validated tools, ISO 17025 labs.\n- **2010s** — mobile, memory, cloud, IoT forensics.\n- **2020s** — automation, AI triage, remote acquisition, DFIR platforms.\n\n**Golden rules:** original untouched, hash integrity, chain of custody, documentation, reproducibility, legality.\n\n**Diagram:** Refer to the Digital forensics — scope, history aur rules diagram."
      },
      {
        "question": "Explain the digital forensics process and the standards that govern it.",
        "answer": "**Process (NIST SP 800-86 / ISO 27037 aligned):**\n1. **Identification** — incident/case detect, scope, legal authority.\n2. **Preservation** — scene secure, write protection, sealing, ESD/faraday handling.\n3. **Acquisition** — bit-stream image, RAM dump, mobile extraction, hash compute.\n4. **Examination** — data extract: file system, logs, registry, deleted files, DB, mail.\n5. **Analysis** — timeline, correlation, hypothesis testing, attribution.\n6. **Documentation** — notes, tool versions, hashes, chain of custody.\n7. **Reporting/presentation** — findings, limitations, expert testimony.\n\n**Standards and guidance:**\n\n| Standard | Scope |\n|---|---|\n| NIST SP 800-86 | forensics in incident response |\n| ISO/IEC 27037 | digital evidence handling |\n| ISO/IEC 17025 | lab competence/accreditation |\n| NIST CFTT | tool validation test reports |\n| SWGDE / ACPO | good practice guides |\n| RFC 3227 | order of volatility |\n| IT Act 2000 s.65B | electronic record certificate (India) |\n\n**Principles:** original unaltered, hash verified, custody unbroken, work documented, results reproducible.\n\n**Diagram:** Refer to the Digital forensics — scope, history aur rules diagram."
      },
      {
        "question": "Differentiate digital forensics from cyber security and incident response, and explain where each fits.",
        "answer": "Teeno related hain par role alag hai.\n\n| Point | Digital forensics | Cyber security | Incident response |\n|---|---|---|---|\n| Focus | evidence aur proof | prevention aur protection | containment aur recovery |\n| Timing | case/incident ke baad | continuous | incident ke dauraan |\n| Output | court-ready report | controls, monitoring | restored service + RCA |\n| Skill | artefact analysis, law | architecture, hardening | playbooks, triage |\n| Metric | defensible conclusion | risk reduction | MTTR / downtime |\n| Standard | ISO 27037, 65B | ISO 27001, NIST CSF | NIST SP 800-61 |\n\n**Kaise saath chalte hain:**\n1. **Cyber security** ne monitoring aur prevention se attack detect karaya.\n2. **Incident response** ne system isolate kiya (par memory/disk preserve kiya).\n3. **Digital forensics** ne evidence acquire kiya aur timeline/attribution banayi.\n4. IR ne recovery ki; forensics ne report di; security team ne controls fix kiye.\n\n**Exam line:** \"Security attack rokta hai, IR system bachata hai, forensics sach ko court mein sabit karta hai.\"\n\n**Diagram:** Refer to the Digital forensics — scope, history aur rules diagram."
      }
    ]
  },
  {
    "id": "cyber-vs-digital-forensics",
    "number": "4.2",
    "title": "Cyber Forensics vs Digital Forensics",
    "subtitle": "Umbrella discipline vs cybercrime-focused branch",
    "icon": "cycle",
    "accent": "#00e676",
    "englishDefinition": "The two terms overlap but are not identical. Digital forensics is the umbrella discipline: the scientific examination of any digital device or data source - a laptop in a tax-evasion case, a phone in a missing-person inquiry, a vehicle ECU after an accident, a CCTV DVR in a civil dispute - regardless of whether a computer was the target, the tool or merely a bystander. Cyber forensics (cybercrime forensics) is the branch applied to cyber offences: unauthorised access, malware attacks, data breaches, online fraud, phishing, ransomware and network intrusions, where the digital system is both the scene and the instrument of crime. Consequently cyber forensics leans on network, web, database and malware evidence plus cyber-law sections such as the IT Act, while digital forensics additionally covers file systems, mobile, media, IoT and e-discovery under general evidence law. In practice the terms are often used interchangeably, and the same methodology, tools and chain-of-custody rules apply to both; ISO/IEC 27037 deliberately uses the neutral term 'digital evidence' to avoid the distinction. For exam answers the safe structure is: digital forensics is the parent, cyber forensics is a child that deals specifically with cybercrime, and everything else (mobile, media, IoT, e-discovery) stays in the parent.",
    "intro": "Dono terms roz interchange ho kar use hote hain, par exam mein difference puchha jaata hai. Simple formula: **Digital forensics = parent discipline** (kisi bhi digital device ka examination), **Cyber forensics = child branch** jo **cybercrime** (hacking, malware, phishing, data breach) par lagti hai. Methodology, tools aur chain of custody dono mein same hote hain — sirf **scope aur legal framework** alag hota hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Dono ka relationship",
        "kicker": "Relationship",
        "body": "**Digital forensics** har digital device aur data source par lagti hai — chahe computer crime ka target ho, tool ho, ya sirf gawah. **Cyber forensics** sirf **cyber offences** par lagti hai jahan system hi crime ka scene aur instrument dono ho.",
        "body2": "Isliye har cyber forensic investigation digital forensics hai, par har digital forensic investigation cyber forensics nahi — jaise accident case mein vehicle ECU ka analysis.",
        "chips": [
          "umbrella discipline",
          "cybercrime branch",
          "IT Act",
          "e-discovery",
          "ISO 27037"
        ]
      },
      {
        "type": "comparison",
        "title": "Cyber forensics vs Digital forensics",
        "kicker": "Comparison",
        "columns": [
          "Cyber forensics",
          "Digital forensics"
        ],
        "rows": [
          {
            "label": "Scope",
            "values": [
              "cyber offences (hacking, malware, breach)",
              "sab digital devices aur data"
            ]
          },
          {
            "label": "Nature",
            "values": [
              "branch of digital forensics",
              "umbrella discipline"
            ]
          },
          {
            "label": "Crime type",
            "values": [
              "IT Act 66/66C/66D, hacking, phishing",
              "fraud, HR, civil, accident, tax, missing person"
            ]
          },
          {
            "label": "Evidence focus",
            "values": [
              "network, web, DB, malware, logs",
              "disk, mobile, media, IoT, e-discovery"
            ]
          },
          {
            "label": "Stakeholders",
            "values": [
              "cyber cell, CERT-In, SOC",
              "police, civil courts, HR, insurance"
            ]
          },
          {
            "label": "Typical tools",
            "values": [
              "Zeek, Wireshark, Volatility, YARA",
              "EnCase, FTK, Autopsy, Cellebrite, Axiom"
            ]
          },
          {
            "label": "Legal base",
            "values": [
              "IT Act + BNS",
              "Evidence Act/BSA + civil procedure"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#00d4ff"
        ]
      },
      {
        "type": "cards",
        "title": "Digital forensics ke non-cyber use cases",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "money",
            "title": "Financial fraud & tax",
            "body": "Fake invoices, accounting manipulation, benami transactions — spreadsheet aur e-mail evidence."
          },
          {
            "icon": "users",
            "title": "HR & disciplinary",
            "body": "Policy violation, data exfiltration by employee, harassment complaints."
          },
          {
            "icon": "doc",
            "title": "Civil disputes & e-discovery",
            "body": "Contract mails, document versions, IP theft cases."
          },
          {
            "icon": "wrench",
            "title": "Accident & insurance",
            "body": "Vehicle ECU, dashcam, GPS, phone location timeline."
          },
          {
            "icon": "search",
            "title": "Missing person / death investigation",
            "body": "Phone CDRs, GPS, social media, CCTV DVR."
          },
          {
            "icon": "shield",
            "title": "Compliance & audit",
            "body": "Data retention, access logs, regulatory evidence."
          }
        ]
      },
      {
        "type": "points",
        "title": "Common misconceptions",
        "kicker": "Misconceptions",
        "points": [
          "**\"Cyber forensics aur digital forensics same hai\"** — practically similar tools, par scope alag: cyber = cybercrime, digital = sab kuch.",
          "**\"Sirf hacking cases mein forensics lagti hai\"** — nahi, employee fraud aur accident case mein bhi.",
          "**\"Forensics sirf law enforcement karta hai\"** — corporate DFIR teams, auditors aur incident responders bhi karte hain.",
          "**\"Tool ka output hi proof hai\"** — nahi, validation + documentation + custody ke baad hi admissible.",
          "**\"Cyber forensics mein sirf network dekhte hain\"** — disk, memory, mobile, cloud sab aate hain."
        ]
      },
      {
        "type": "example",
        "title": "Ek hi ghatna, do lens",
        "kicker": "Example",
        "body": "Ek company ke server par ransomware aaya. **Cyber forensics** lens: phishing e-mail header, C2 beacon, exploit kit, malware family, lateral movement. Usi case mein ek employee par **corporate policy violation** ka action bhi hua — uska personal laptop examine karna **digital forensics** ka hissa tha (browser history, USB history), cybercrime ka nahi. Same case, do different scopes."
      },
      {
        "type": "diagram",
        "title": "Cyber forensics vs digital forensics — scope map",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-vs-cyber",
        "caption": "Digital forensics umbrella (disk, mobile, media, IoT, e-discovery) ke andar cyber forensics branch (hacking, malware, breach, phishing)"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Digital forensics = umbrella:** kisi bhi digital device/data ka scientific examination.",
          "**Cyber forensics = branch:** sirf cybercrime (hacking, malware, phishing, breach).",
          "**Tools same**, scope aur legal framework alag.",
          "**Non-cyber use:** fraud, HR, civil/e-discovery, accident, missing person, compliance.",
          "**Exam line:** har cyber forensic case digital forensics hai, ulta zaroori nahi."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between cyber forensics and digital forensics.",
        "answer": "Dono related hain — cyber forensics, digital forensics ki ek branch hai.\n\n| Point | Cyber forensics | Digital forensics |\n|---|---|---|\n| Definition | cybercrime ki forensic investigation | kisi bhi digital device/data ka scientific examination |\n| Scope | narrow — cyber offences | wide — sab digital evidence |\n| Crime type | hacking, malware, phishing, data breach, online fraud | fraud, HR, civil, accident, tax, missing person |\n| Evidence | logs, PCAP, web/DB artefacts, malware | disk, mobile, media, IoT, e-discovery |\n| Law (India) | IT Act 66/66C/66D + BNS | Evidence Act/BSA + civil procedure + IT Act 65B |\n| Stakeholders | cyber cell, CERT-In, SOC/DFIR | police, civil court, HR, insurance, auditor |\n| Tools | Zeek, Wireshark, Volatility, YARA, Autopsy | EnCase, FTK, Cellebrite, Axiom, Nuix |\n| Output | cybercrime report | court/disciplinary report |\n\n**Relationship:** digital forensics is the parent discipline; cyber forensics is the child that deals only with cybercrime. Dono ki methodology, hash, chain of custody aur 65B requirement same hai.\n\n**Exam line:** \"Har cyber forensic investigation digital forensics hai, par har digital forensic investigation cyber forensics nahi.\"\n\n**Diagram:** Refer to the Cyber forensics vs digital forensics — scope map diagram."
      },
      {
        "question": "Explain the role and scope of digital forensics in non-cyber contexts with examples.",
        "answer": "Digital forensics sirf hacking tak limited nahi — jahan bhi digital data evidence ban sakta hai, wahan lagti hai.\n\n**1. Financial fraud and tax**\n- Fake invoices, manipulated spreadsheets (metadata se edit history), e-mail approvals.\n- Example: GST fraud case mein Excel file ka author + revision timeline.\n\n**2. HR and disciplinary**\n- Data exfiltration by employee (USB history, cloud sync logs), harassment complaints (chat/email).\n- Example: resign karne se pehle bulk download — DLP + $UsnJrnl se proof.\n\n**3. Civil disputes and e-discovery**\n- Contract e-mails, document versions, IP theft, trademark issues.\n- Example: vendor dispute mein \"final version\" ka timestamp aur mail thread.\n\n**4. Accident and insurance**\n- Vehicle ECU/infotainment, dashcam, GPS, phone location timeline.\n- Example: brake aur speed data se claim verify.\n\n**5. Missing person / death investigation**\n- CDR, GPS, social media activity, CCTV DVR recovery.\n\n**6. Compliance and audit**\n- Access logs, retention proof, regulatory reporting evidence.\n\n**Differences from cyber forensics:** yahan network attack ya malware involved nahi hota; focus **device-level artefacts aur timeline** par hota hai, aur legal framework civil/disciplinary hota hai.\n\n**Diagram:** Refer to the Cyber forensics vs digital forensics — scope map diagram."
      },
      {
        "question": "Why are the terms often used interchangeably, and what methodology is common to both?",
        "answer": "Terms interchange hote hain kyunki **tools, process aur legal requirements same** hain; difference sirf scope ka hai.\n\n**Common methodology (dono mein same):**\n1. **Identification** — device/data source aur authority.\n2. **Preservation** — write blocker, sealing, hash.\n3. **Acquisition** — bit-stream image / memory / mobile extraction.\n4. **Examination** — artefacts extract (files, logs, DB, mail).\n5. **Analysis** — timeline, correlation, hypothesis.\n6. **Documentation** — notes, tool versions, custody.\n7. **Presentation** — report + 65B + expert testimony.\n\n**Common principles:** original unaltered, SHA-256 integrity, chain of custody, reproducibility, legality.\n\n**Common standards:** ISO/IEC 27037, NIST SP 800-86, ISO 17025 (lab), NIST CFTT (tools), RFC 3227.\n\n**Kyun interchange hote hain:**\n- Industry mein \"cyber forensics\" ko marketing term ki tarah use kiya jaata hai.\n- Cybercrime cases sabse zyada public hote hain.\n- ISO deliberately **\"digital evidence\"** neutral term use karta hai.\n\n**Difference tab important hota hai jab:** scope of authorisation, applicable law (IT Act vs civil procedure) aur stakeholder (police vs HR) decide karna ho.\n\n**Diagram:** Refer to the Cyber forensics vs digital forensics — scope map diagram."
      }
    ]
  },
  {
    "id": "digital-forensics-role-environment",
    "number": "4.3",
    "title": "Role of Digital Forensics and Its Environment",
    "subtitle": "Kaun karta hai, kahan karta hai aur kis environment mein",
    "icon": "users",
    "accent": "#ff8800",
    "englishDefinition": "Digital forensics operates through defined roles inside a controlled environment. The roles are the first responder (who secures the scene, documents the state of the device and preserves volatile data), the forensic examiner or analyst (who acquires images, examines artefacts and writes the report), the laboratory manager and quality manager (who maintain accreditation, procedures and competence), the incident responder (who contains the intrusion while preserving evidence), the legal counsel or prosecutor (who defines scope and admissibility) and the expert witness (who explains findings in court). The environment is what makes the work defensible: a dedicated laboratory with controlled access, CCTV and an evidence log, an ESD-safe and Faraday-shielded handling area, dedicated forensic workstations and write blockers, an isolated analysis network with no path to production, hardened malware analysis VMs with fake internet, calibrated and asset-tagged equipment, air-gapped or encrypted evidence storage with a retention policy, and documented standard operating procedures under ISO/IEC 17025 or equivalent accreditation. Environmental factors also include legal constraints (authorisation, privacy, DPDP Act), ethical constraints (impartiality, no tipping off suspects) and organisational factors (budget, skills, escalation paths). A weak environment - shared analyst laptops, internet-connected analysis machines, unsealed evidence - is the most common reason evidence is challenged rather than the analysis itself.",
    "intro": "Forensics ka kaam **team effort** hai aur usko ek **controlled environment** chahiye. Roles yaad rakho: **first responder → examiner/analyst → lab & quality manager → incident responder → legal counsel → expert witness**. Environment ka core: **controlled-access lab**, ESD/Faraday handling, **write blockers**, **isolated analysis network**, air-gapped evidence storage, SOP + **ISO 17025** accreditation. Environment weak ho to evidence court mein challenge ho jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Role ka matlab",
        "kicker": "Basics",
        "body": "**Role** = kis stage par kaun zimmedar hai. **Environment** = woh physical, technical aur legal setup jisme ye kaam hota hai. Dono milkar evidence ki **defensibility** banate hain.",
        "body2": "Ek hi vyakti sab kuch nahi karta — separation of duties se bias aur tampering ka risk kam hota hai (jaise evidence custodian aur examiner alag hon).",
        "chips": [
          "first responder",
          "examiner",
          "expert witness",
          "accredited lab",
          "isolated network",
          "SOP"
        ]
      },
      {
        "type": "cards",
        "title": "Roles aur zimmedariyan",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "zap",
            "title": "First responder",
            "body": "Scene secure, device state document, volatile data preserve, seal + transport."
          },
          {
            "icon": "search",
            "title": "Forensic examiner/analyst",
            "body": "Image acquire, artefacts examine, timeline banaye, report likhe."
          },
          {
            "icon": "briefcase",
            "title": "Lab & quality manager",
            "body": "Accreditation, SOP, competency records, proficiency testing, audit."
          },
          {
            "icon": "shield",
            "title": "Incident responder",
            "body": "Contain attack par evidence preserve kare — turant wipe/reboot nahi."
          },
          {
            "icon": "ruler",
            "title": "Legal counsel / prosecutor",
            "body": "Scope, authorisation, admissibility, disclosure decide kare."
          },
          {
            "icon": "user",
            "title": "Expert witness",
            "body": "Court mein findings explain kare, cross-examination face kare."
          },
          {
            "icon": "doc",
            "title": "Evidence custodian",
            "body": "Chain of custody, storage log, access control, retention/disposal."
          }
        ]
      },
      {
        "type": "points",
        "title": "Laboratory environment ke elements",
        "kicker": "Environment",
        "points": [
          "**Physical security:** controlled access, CCTV, visitor log, locked evidence room, fire/flood protection.",
          "**Handling area:** ESD-safe mat/wrist strap, Faraday bags for mobile, anti-static packaging.",
          "**Workstations:** dedicated forensic PCs, hardware write blockers, hashing tools, no personal use.",
          "**Network:** isolated analysis VLAN, internet sirf controlled/fake (INetSim), production se koi path nahi.",
          "**Malware lab:** snapshot VMs, host-only network, no real credentials.",
          "**Evidence storage:** air-gapped/encrypted, asset tagged, sealed, retention policy ke saath.",
          "**Quality system:** SOP, ISO/IEC 17025 accreditation, competency aur proficiency testing, audits.",
          "**Documentation:** case file, exhibit log, hash log, tool validation records."
        ]
      },
      {
        "type": "comparison",
        "title": "Law enforcement lab vs corporate DFIR lab",
        "kicker": "Comparison",
        "columns": [
          "Law enforcement lab",
          "Corporate DFIR lab"
        ],
        "rows": [
          {
            "label": "Mandate",
            "values": [
              "criminal prosecution, court evidence",
              "internal response + legal action"
            ]
          },
          {
            "label": "Authority",
            "values": [
              "warrant/court order",
              "company policy + employment contract"
            ]
          },
          {
            "label": "Accreditation",
            "values": [
              "ISO 17025 mandatory practice",
              "often internal, may be ISO 27001"
            ]
          },
          {
            "label": "Scope",
            "values": [
              "seized devices, wide",
              "company assets, time-critical"
            ]
          },
          {
            "label": "Output",
            "values": [
              "court report + expert testimony",
              "IR report, HR/legal referral"
            ]
          },
          {
            "label": "Constraint",
            "values": [
              "backlog, chain of custody strict",
              "business continuity pressure"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#00d4ff"
        ]
      },
      {
        "type": "example",
        "title": "Environment failure ka classic example",
        "kicker": "Example",
        "body": "Ek analyst ne suspect disk ko apne **personal laptop** par normal OS se mount kar liya — boot karne par `$LogFile` aur timestamps badal gaye, aur antivirus ne artifact quarantine kar diya. Evidence challenge ho gayi. Correct tareeka: **hardware write blocker**, image par kaam, original sealed. Ye example dikhata hai ki environment aur hardware discipline evidence ki value decide karte hain, tool nahi."
      },
      {
        "type": "diagram",
        "title": "Forensic roles aur lab environment",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-role",
        "caption": "First responder → examiner → lab/quality → legal → expert witness, sab ek accredited, isolated, access-controlled lab environment ke andar"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Roles:** first responder, examiner, lab/quality manager, IR, legal counsel, expert witness, custodian.",
          "**Environment:** controlled access, ESD/Faraday, write blockers, isolated network, malware VMs.",
          "**Storage:** sealed, air-gapped/encrypted, tagged, retention policy.",
          "**Quality:** SOP, ISO/IEC 17025, competency, proficiency testing, audit.",
          "**Exam line:** environment weak = evidence challenged, chahe analysis sahi ho."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the role of digital forensics and the roles of people involved.",
        "answer": "**Role of digital forensics:** digital evidence ko scientifically establish karna — kya hua, kisne kiya, kab, kaise — aur usse legally admissible report mein badalna. Ye criminal, civil, corporate aur incident response — sab contexts mein use hoti hai.\n\n**People and their roles:**\n\n| Role | Responsibility |\n|---|---|\n| First responder | scene secure, device state document, volatile data preserve, seal/transport |\n| Forensic examiner | image acquire, artefacts examine, timeline, report |\n| Lab/quality manager | SOP, ISO 17025 accreditation, competency, audits |\n| Incident responder | contain attack + preserve evidence |\n| Legal counsel/prosecutor | scope, authorisation, admissibility |\n| Expert witness | court mein findings explain + cross-examination |\n| Evidence custodian | chain of custody, storage log, retention |\n\n**Separation of duties kyun:** examiner aur custodian alag hone se tampering ka risk kam hota hai aur process independent rehta hai.\n\n**Key principle:** har role apna kaam **document** kare — date/time, kya kiya, tool version — taaki doosra expert reproduce kar sake.\n\n**Diagram:** Refer to the Forensic roles aur lab environment diagram."
      },
      {
        "question": "Describe the environment required for digital forensic investigation.",
        "answer": "Forensic environment ko aisa banana padta hai ki evidence **defensible** rahe.\n\n**1. Physical environment**\n- Controlled-access laboratory, CCTV, visitor log, locked evidence room.\n- Fire/flood protection, ESD-safe handling area, Faraday bags for mobile.\n\n**2. Technical environment**\n- Dedicated forensic workstations + **hardware write blockers**.\n- Hashing tools (SHA-256), imaging tools (FTK Imager, `dd`, Guymager).\n- **Isolated analysis network** (production se koi path nahi).\n- Malware analysis: snapshot VMs, host-only network, INetSim fake internet.\n\n**3. Evidence storage**\n- Sealed, tagged, air-gapped or encrypted; access log; retention and disposal policy.\n\n**4. Quality environment**\n- SOP for each activity, tool validation records (NIST CFTT), competency records.\n- **ISO/IEC 17025** accreditation, proficiency testing, internal audits.\n\n**5. Legal and ethical environment**\n- Authorisation/warrant, privacy compliance (DPDP Act), impartiality, confidentiality.\n- Section 65B certificate process defined.\n\n**6. Organisational environment**\n- Budget, trained staff, escalation path, legal hold process, reporting templates.\n\n**Failure impact:** shared laptops, internet-connected analysis machines aur unsealed evidence — teen sabse common reasons evidence court mein challenge hoti hai.\n\n**Diagram:** Refer to the Forensic roles aur lab environment diagram."
      },
      {
        "question": "Differentiate a law enforcement forensic laboratory from a corporate DFIR environment.",
        "answer": "Dono ka kaam same hai, mandate alag.\n\n| Point | Law enforcement lab | Corporate DFIR |\n|---|---|---|\n| Mandate | criminal prosecution | internal response, HR/legal action |\n| Authority | warrant / court order | company policy + employment contract |\n| Scope | seized devices, external suspects | company-owned assets, employees |\n| Accreditation | ISO 17025 (expected) | internal, often ISO 27001 |\n| Timeline | case backlog, months | hours–days, business pressure |\n| Evidence | strict chain of custody, court exhibits | internal exhibits, legal hold |\n| Reporting | court report + expert testimony | IR report, management/legal briefing |\n| Constraints | privacy law, disclosure rules | uptime, no service disruption |\n| Output use | prosecution/exoneration | disciplinary action, insurance, legal referral |\n\n**Common elements:** both need write blockers, hashing, isolated labs, SOPs, tool validation, chain of custody and documentation.\n\n**Corporate-specific challenges:**\n- System ko production mein wapas chahiye → volatile evidence loss ka risk.\n- Employee privacy aur monitoring policy ka balance.\n- Cloud/SaaS data provider ke paas — access limited.\n\n**Exam line:** \"Mandate alag hai, methodology same — evidence ka sach dono jagah same tarah prove hota hai.\"\n\n**Diagram:** Refer to the Forensic roles aur lab environment diagram."
      }
    ]
  },
  {
    "id": "forensic-software-hardware",
    "number": "4.4",
    "title": "Forensic Software and Hardware",
    "subtitle": "Write blockers, imagers, workstations aur analysis suites",
    "icon": "tools",
    "accent": "#aa00ff",
    "englishDefinition": "Forensic hardware and software exist to make acquisition and analysis repeatable and tamper-free. The core hardware is the write blocker, which intercepts write commands so a disk can be read without modification (hardware blockers such as Tableau, WiebeTech and CRU are preferred over software blockers for courtroom work), forensic duplicators that clone drives at high speed with built-in hashing, dedicated forensic workstations with large and fast storage, mobile extraction kits (Cellebrite UFED, Oxygen, Magnet) covering logical, file-system, physical and full-file-system extraction, memory capture devices, Faraday bags and shields for radio isolation, ESD-safe handling, and verified blank media. The software layer starts with imaging tools (FTK Imager, EnCase, Guymager, dd/dcfldd, X-Ways) that produce a bit-stream image in a container format such as E01, AFF4 or raw dd with an embedded hash, continues with analysis suites (EnCase, FTK, Autopsy, X-Ways, Nuix, Magnet AXIOM, Belkasoft) and specialised tools (Volatility for memory, Plaso for timelines, Wireshark and Zeek for network, PhotoRec and Scalpel for carving, Ghidra and IDA for malware), and ends with verification utilities (hash calculators, NIST CFTT test reports, tool validation logs). Selection criteria are legality and licensing, validation status, supported formats and file systems, hash and audit-trail capability, reproducibility, and the ability to export findings in a form a court can follow.",
    "intro": "Forensic **hardware** ka kaam hai evidence ko **bina badle padhna** — write blocker, duplicator, workstation, mobile kit, Faraday bag. Forensic **software** ka kaam hai **image banana, analyse karna aur verify karna** — FTK Imager/EnCase/`dd` (imaging), Autopsy/FTK/X-Ways/Nuix (analysis), Volatility (memory), Plaso (timeline), PhotoRec (carving). Selection ka rule: **validated + legal + reproducible**.",
    "sections": [
      {
        "type": "definition",
        "title": "Hardware aur software ka role",
        "kicker": "Basics",
        "body": "Hardware evidence ko **write se bachata** hai (write blocker, duplicator), aur software usse **interpret** karta hai (imaging, analysis, hashing). Dono ka output documented aur reproducible hona chahiye.",
        "body2": "Court mein sawaal aata hai: \"tool ne data badla nahi?\" — jawab write blocker log, hash match aur NIST CFTT validation report se milta hai.",
        "chips": [
          "write blocker",
          "duplicator",
          "E01/AFF4",
          "hash verify",
          "NIST CFTT",
          "mobile extraction"
        ]
      },
      {
        "type": "cards",
        "title": "Forensic hardware",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "lock",
            "title": "Write blocker",
            "body": "Disk ko read-only banata hai — hardware (Tableau, CRU, WiebeTech) courtroom ke liye preferred."
          },
          {
            "icon": "layers",
            "title": "Forensic duplicator",
            "body": "Multiple drives ko parallel clone karta hai, built-in hash (Logicube, Tableau TD3)."
          },
          {
            "icon": "server",
            "title": "Forensic workstation",
            "body": "High RAM/CPU, large fast storage, dedicated ports, no daily-use software."
          },
          {
            "icon": "device",
            "title": "Mobile extraction kit",
            "body": "Cellebrite UFED, Oxygen, Magnet — logical, file-system, physical extraction."
          },
          {
            "icon": "wifi",
            "title": "Faraday bag/shield",
            "body": "Radio isolation — mobile ko network se cut karta hai (remote wipe se bachav)."
          },
          {
            "icon": "zap",
            "title": "ESD-safe handling",
            "body": "Anti-static mat, wrist strap, anti-static bags — component damage se bachav."
          }
        ]
      },
      {
        "type": "cards",
        "title": "Forensic software",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "file",
            "title": "Imaging",
            "body": "FTK Imager, EnCase, Guymager, `dd`/`dcfldd`, X-Ways — E01/AFF4/raw image + hash."
          },
          {
            "icon": "search",
            "title": "Analysis suites",
            "body": "EnCase, FTK, Autopsy (open source), X-Ways, Nuix, Magnet AXIOM, Belkasoft."
          },
          {
            "icon": "layers",
            "title": "Memory",
            "body": "Volatility 3, Rekall, DumpIt, LiME, WinPmem."
          },
          {
            "icon": "clock",
            "title": "Timeline",
            "body": "Plaso/log2timeline, Autopsy timeline, Timesketch."
          },
          {
            "icon": "network",
            "title": "Network",
            "body": "Wireshark, tshark, Zeek, NetworkMiner, Arkime."
          },
          {
            "icon": "folder",
            "title": "Recovery/carving",
            "body": "PhotoRec, Scalpel, TestDisk, Foremost, bulk_extractor."
          },
          {
            "icon": "code",
            "title": "Malware",
            "body": "Ghidra, IDA Pro, x64dbg, CAPA, YARA, Cuckoo/CAPE."
          },
          {
            "icon": "check",
            "title": "Verification",
            "body": "`sha256sum`, `md5deep`, NIST CFTT reports, tool logs, hash sets (NSRL)."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Hardware vs software write blocker",
        "kicker": "Comparison",
        "columns": [
          "Hardware blocker",
          "Software blocker"
        ],
        "rows": [
          {
            "label": "Kaise",
            "values": [
              "physical device, SATA/NVMe/USB ke beech",
              "OS driver/registry se write block"
            ]
          },
          {
            "label": "Trust",
            "values": [
              "OS se independent — courtroom preferred",
              "OS par depend karta hai"
            ]
          },
          {
            "label": "Risk",
            "values": [
              "very low",
              "OS update/driver bug = write leak"
            ]
          },
          {
            "label": "Cost",
            "values": [
              "higher",
              "low/free"
            ]
          },
          {
            "label": "Use",
            "values": [
              "seized media, legal cases",
              "lab convenience, non-critical"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#ff8800"
        ]
      },
      {
        "type": "example",
        "title": "Acquisition ka correct sequence",
        "kicker": "Example",
        "body": "1. Device ko Faraday bag mein rakho (mobile) ya write blocker se jodo (disk). 2. **Hash** lo (original media ka, agar possible ho). 3. Bit-stream image banao `E01` mein (compression + embedded hash). 4. Image ka hash original se **match** karo. 5. Do copies banao (working + archive) aur dono ko sealed rakho. 6. Har step case file mein likho — tool name, version, serial number, time. Ye sequence hi court mein \"process reliable tha\" ka proof hai."
      },
      {
        "type": "points",
        "title": "Tool selection criteria",
        "kicker": "Selection",
        "points": [
          "**Legal & licensed** — valid licence, court acceptance, no pirated tool.",
          "**Validated** — NIST CFTT report ya internal validation record.",
          "**Capability** — file system, format, device support (APFS, ext4, NVMe, mobile).",
          "**Integrity features** — hash verification, audit log, read-only enforcement.",
          "**Reproducibility** — same input, same output, exportable results.",
          "**Reporting** — court-friendly report with bookmarks aur timeline export.",
          "**Cost & training** — licence, training, support availability."
        ]
      },
      {
        "type": "diagram",
        "title": "Forensic software aur hardware stack",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-hw-sw",
        "caption": "Device → write blocker/Faraday → imager + hash → workstation analysis (suites, memory, timeline, carving) → verification → report"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Hardware:** write blocker, duplicator, workstation, mobile kit, Faraday bag, ESD protection.",
          "**Software:** imaging (FTK Imager, EnCase, dd), suites (Autopsy, FTK, X-Ways, Nuix), Volatility, Plaso, PhotoRec.",
          "**Formats:** E01, AFF4, raw dd — embedded hash ke saath.",
          "**Verification:** hash match, NIST CFTT validation, tool logs.",
          "**Selection:** validated, legal, capable, reproducible, reportable."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the hardware used in digital forensic investigation.",
        "answer": "Forensic hardware evidence ko **bina badle** padhne aur preserve karne ke liye hota hai.\n\n**1. Write blocker**\n- Disk aur system ke beech baithta hai, write commands block karta hai.\n- Hardware (Tableau, CRU, WiebeTech) courtroom ke liye preferred; software blocker OS par depend karta hai.\n\n**2. Forensic duplicator**\n- Multiple drives parallel clone, built-in hashing (Logicube Falcon, Tableau TD3).\n- Speed + verified copies.\n\n**3. Forensic workstation**\n- High RAM/CPU, large fast SSD, dedicated write-blocked ports, sirf forensic tools.\n\n**4. Mobile extraction hardware**\n- Cellebrite UFED, Oxygen Forensic Kit, Magnet — logical/file-system/physical extraction, shielded cables.\n\n**5. Faraday bag / shield**\n- Mobile ko network se isolate karta hai — remote wipe ya incoming messages se evidence badalne se bachav.\n\n**6. ESD-safe handling**\n- Anti-static mat, wrist strap, anti-static bags, foam — component damage rokta hai.\n\n**7. Storage and media**\n- Verified blank drives, sealed evidence bags, asset tags, tamper-evident seals.\n\n**8. Hashing/verification devices**\n- Hardware hash verifiers ya workstation-based SHA-256/MD5 checks.\n\n**Rule:** hardware ka serial number, firmware version aur use ka time case file mein likho — chain of custody ka hissa hai.\n\n**Diagram:** Refer to the Forensic software aur hardware stack diagram."
      },
      {
        "question": "Explain the software categories used in digital forensics with examples.",
        "answer": "Forensik software ko kaam ke hisaab se categorize karte hain.\n\n| Category | Purpose | Examples |\n|---|---|---|\n| Imaging | bit-stream image + hash | FTK Imager, EnCase, Guymager, dd/dcfldd |\n| Analysis suites | artefact extraction, reporting | Autopsy/Sleuth Kit, EnCase, FTK, X-Ways, Nuix |\n| Mobile | extraction + parsing | Cellebrite Physical Analyzer, Magnet AXIOM, Oxygen |\n| Memory | RAM analysis | Volatility 3, Rekall, DumpIt, LiME |\n| Timeline | super-timeline | Plaso/log2timeline, Timesketch |\n| Network | PCAP/flow | Wireshark, tshark, Zeek, NetworkMiner, Arkime |\n| Recovery/carving | deleted data | PhotoRec, Scalpel, TestDisk, bulk_extractor |\n| Malware | static/dynamic | Ghidra, IDA, x64dbg, CAPA, YARA, Cuckoo |\n| Verification | integrity | sha256sum, md5deep, NSRL hash sets |\n\n**Container formats:** E01 (compression + metadata + hash), AFF4 (open, scalable), raw/dd (simple, no metadata), L01 (logical evidence).\n\n**Selection criteria:** validated (NIST CFTT), supports required file systems/devices, hashing and audit logs, reproducible output, court-friendly reports, licensed.\n\n**Diagram:** Refer to the Forensic software aur hardware stack diagram."
      },
      {
        "question": "What is a write blocker? Why is it essential, and how does hardware differ from software blocking?",
        "answer": "**Write blocker:** ek device ya driver jo storage media ko **read-only** access deta hai — koi bhi write command block ho jaata hai.\n\n**Kyun essential:**\n1. **Evidence integrity** — original media ka koi byte nahi badalta.\n2. **Hash validation** — image ka hash original se match rehta hai.\n3. **Court defensibility** — \"process ne data modify nahi kiya\" prove hota hai.\n4. **Accidental write protection** — OS mount, antivirus scan, thumbnail generation sab write karte hain.\n5. **Metadata safety** — access time, `$LogFile`, journal updates ruk jaate hain.\n\n**Hardware vs software:**\n\n| Point | Hardware blocker | Software blocker |\n|---|---|---|\n| Working | physical inline device (SATA/NVMe/USB) | OS-level driver/registry |\n| Independence | OS se independent | OS par depend |\n| Trust | courtroom preferred | lab convenience |\n| Failure risk | very low | OS update/driver bug |\n| Cost | high | low/free |\n\n**Practical rule:** seized media aur legal cases mein **hardware write blocker**; internal triage mein software blocker acceptable, par documentation mein clearly likho.\n\n**Also remember:** write blocker ka serial/firmware version aur use time record karo — chain of custody ka hissa hai.\n\n**Diagram:** Refer to the Forensic software aur hardware stack diagram."
      }
    ]
  },
  {
    "id": "digital-evidence-properties",
    "number": "4.5",
    "title": "Properties of Digital Evidence",
    "subtitle": "Latent, fragile, volatile — aur evidentiary properties",
    "icon": "file",
    "accent": "#00bcd4",
    "englishDefinition": "Digital evidence has two families of properties. Physical or technical properties describe its nature: it is latent (must be interpreted with tools), fragile and easily altered (a single write, mount or boot changes timestamps and journals), volatile in part (RAM, swap, network state and encryption keys disappear on power loss), duplicable without loss (a bit-stream image is an exact copy, so the original can stay sealed), ubiquitous and high in volume, time-sensitive (log rotation and overwrite destroy it), and often trans-border because cloud data sits in another jurisdiction. Evidentiary or quality properties describe what makes it usable in proceedings, and are summarised by ISO/IEC 27037 as accuracy, availability, completeness, granularity and reliability, together with authenticity, integrity, relevance and legality of acquisition. Authenticity means the evidence is what it claims to be and comes from where it claims to come from; integrity means it has not been altered, which is proved by hash values and an unbroken chain of custody; completeness means the whole relevant picture is present, including exculpatory material; granularity means the level of detail; reliability means the process and tools are sound and the result is reproducible. Weakness in any property is the usual ground on which digital evidence is challenged in court.",
    "intro": "Digital evidence ki properties do family mein baant lo. **(1) Technical/nature:** latent, fragile, volatile, duplicable, high volume, time-sensitive, trans-border. **(2) Evidentiary/quality (ISO 27037):** accuracy, availability, completeness, granularity, reliability + authenticity, integrity, relevance, legality. Court mein evidence inhi properties par challenge hoti hai — isliye hash, chain of custody aur documentation ka combination zaroori hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Properties ka matlab",
        "kicker": "Definition",
        "body": "**Properties** = evidence ki wo khoobiyaan ya kamzoriyan jo decide karti hain ki wo court mein kitni usable hai. Technical properties bataati hain data ka behaviour, evidentiary properties bataati hain uski **quality**.",
        "body2": "Exam mein do-column answer best hai: pehle technical properties (latent, fragile, volatile, duplicable...), phir evidentiary properties (authentic, accurate, complete, reliable...).",
        "chips": [
          "latent",
          "fragile",
          "volatile",
          "authenticity",
          "integrity",
          "completeness",
          "reliability"
        ]
      },
      {
        "type": "comparison",
        "title": "Technical (nature) properties",
        "kicker": "Comparison",
        "columns": [
          "Property",
          "Meaning"
        ],
        "rows": [
          {
            "label": "Latent",
            "values": [
              "naked eye se nahi dikhta — tools chahiye"
            ]
          },
          {
            "label": "Fragile",
            "values": [
              "ek write/mount/boot se badal jaata hai"
            ]
          },
          {
            "label": "Volatile",
            "values": [
              "RAM, swap, network state, keys — power off = gone"
            ]
          },
          {
            "label": "Duplicable",
            "values": [
              "bit-stream image exact copy — original sealed"
            ]
          },
          {
            "label": "Voluminous",
            "values": [
              "TB-scale, millions of events"
            ]
          },
          {
            "label": "Time-sensitive",
            "values": [
              "log rotation, overwrite, retention expiry"
            ]
          },
          {
            "label": "Trans-border",
            "values": [
              "cloud data doosre desh mein"
            ]
          }
        ],
        "columnColors": [
          "#00bcd4",
          "#00e676",
          "#ff8800",
          "#aa00ff",
          "#ffd600",
          "#ff5252",
          "#5a6a9e"
        ]
      },
      {
        "type": "cards",
        "title": "Evidentiary (quality) properties",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "check",
            "title": "Authenticity",
            "body": "Evidence waqai usi source se hai — metadata, logs, hash, custody."
          },
          {
            "icon": "shield",
            "title": "Integrity",
            "body": "Data unchanged — SHA-256 match + write blocker + seal."
          },
          {
            "icon": "layers",
            "title": "Completeness",
            "body": "Poora relevant data, exculpatory evidence bhi shamil."
          },
          {
            "icon": "search",
            "title": "Accuracy",
            "body": "Data sahi capture hua, koi truncation/error nahi."
          },
          {
            "icon": "chart",
            "title": "Granularity",
            "body": "Detail ka level — poora disk ya sirf relevant artefacts."
          },
          {
            "icon": "refresh",
            "title": "Reliability",
            "body": "Process aur tool validated, result reproducible."
          },
          {
            "icon": "target",
            "title": "Relevance",
            "body": "Case ke facts se seedha juda hua."
          },
          {
            "icon": "gavel",
            "title": "Legality",
            "body": "Authorised acquisition — warrant/consent/policy."
          }
        ]
      },
      {
        "type": "points",
        "title": "Har property kaise prove hoti hai",
        "kicker": "Proof",
        "points": [
          "**Authenticity:** hash, serial numbers, logs, custodian statement, 65B certificate.",
          "**Integrity:** acquisition hash + verification hash, write blocker log, sealed exhibits.",
          "**Completeness:** full image (not logical copy), documented scope, exculpatory search.",
          "**Accuracy:** validated tools, known-answer tests, no truncated captures.",
          "**Granularity:** raw image + carving, not only parsed exports.",
          "**Reliability:** NIST CFTT validation, SOP, reproducibility by second examiner.",
          "**Relevance + legality:** case theory, warrant/authorisation, privacy compliance."
        ]
      },
      {
        "type": "example",
        "title": "Ek property weak hui, case kamzor hua",
        "kicker": "Example",
        "body": "Investigator ne mobile se sirf **screenshot** liya (logical evidence) aur device ko Faraday mein nahi rakha. Baad mein defence ne kaha: \"screenshot edit ho sakta hai, aur device ko network se remote wipe mil sakta tha.\" Case mein problem aa gayi — kyunki **authenticity** (screenshot) aur **integrity** (device state) dono weak the. Correct approach: physical extraction ya verified backup + Faraday + hash."
      },
      {
        "type": "comparison",
        "title": "Original evidence vs forensic copy",
        "kicker": "Comparison",
        "columns": [
          "Original",
          "Forensic copy (image)"
        ],
        "rows": [
          {
            "label": "Handling",
            "values": [
              "sealed, write-blocked, minimal touch",
              "analysis ke liye use"
            ]
          },
          {
            "label": "Property risk",
            "values": [
              "integrity sabse critical",
              "accuracy + reliability critical"
            ]
          },
          {
            "label": "Court status",
            "values": [
              "primary exhibit",
              "secondary evidence (65B ke saath)"
            ]
          },
          {
            "label": "Verification",
            "values": [
              "hash at acquisition",
              "hash match with original"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#00d4ff"
        ]
      },
      {
        "type": "diagram",
        "title": "Properties of digital evidence",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-properties",
        "caption": "Technical properties (latent, fragile, volatile, duplicable, voluminous, time-sensitive) + evidentiary properties (authenticity, integrity, completeness, accuracy, reliability)"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Technical:** latent, fragile, volatile, duplicable, voluminous, time-sensitive, trans-border.",
          "**Evidentiary (ISO 27037):** accuracy, availability, completeness, granularity, reliability.",
          "**Plus:** authenticity, integrity, relevance, legality.",
          "**Proof tools:** hash, custody, validated tools, full image, documentation.",
          "**Exam line:** ek weak property = poora case challenge."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the properties of digital evidence in detail.",
        "answer": "Digital evidence ki properties do family mein aati hain.\n\n**A. Technical (nature) properties**\n\n| Property | Explanation |\n|---|---|\n| Latent | aankh se nahi dikhta; tools se interpret karna padta hai |\n| Fragile | ek write/mount/boot se timestamps aur journals badal jaate hain |\n| Volatile | RAM, swap, network state, keys power off se khatam |\n| Duplicable | bit-stream image exact copy; original sealed reh sakta hai |\n| Voluminous | TB-scale data, millions of log events |\n| Time-sensitive | log rotation, overwrite, retention expiry |\n| Trans-border | cloud data doosre jurisdiction mein |\n\n**B. Evidentiary (quality) properties** — ISO/IEC 27037\n1. **Accuracy** — data sahi capture hua, koi truncation nahi.\n2. **Availability** — evidence mangane par available ho (preserved, indexed).\n3. **Completeness** — poora relevant data, exculpatory bhi.\n4. **Granularity** — detail level (raw image vs parsed).\n5. **Reliability** — validated tool + reproducible process.\n\n**C. Supporting properties**\n- **Authenticity** — source verified (hash, logs, custody).\n- **Integrity** — unchanged (hash match, write blocker).\n- **Relevance** — case facts se juda.\n- **Legality** — authorised acquisition.\n\n**Kaise prove karein:** SHA-256 hash, chain of custody, validated tools (NIST CFTT), full bit-stream image, documented SOP, 65B certificate.\n\n**Diagram:** Refer to the Properties of digital evidence diagram."
      },
      {
        "question": "Why is digital evidence called fragile and volatile? What precautions follow from this?",
        "answer": "**Fragile:** digital evidence easily badal jaati hai — koi physical force nahi chahiye, sirf ek command kaafi hai.\n\n**Fragility ke causes:**\n1. **Mount/boot** — OS mount karte hi `$LogFile`, access time, journal update.\n2. **Antivirus/thumbnail** — file open karne par modified time badalta hai.\n3. **Overwrite** — deleted file ka space naye data se bhar jaata hai.\n4. **Log rotation** — purane logs delete.\n5. **Remote actions** — mobile par remote wipe, cloud sync, MDM command.\n6. **Timestamps** — copy/paste/backup se MACB badalna.\n\n**Volatility ke causes:**\n- RAM ke processes, network connections, encryption keys, malware — **power off = gone**.\n- Swap/pagefile, DNS cache, ARP table — minutes mein change.\n- Running container/VM state.\n\n**Precautions:**\n1. **Write blocker** + image, original sealed.\n2. **Order of volatility** (RFC 3227): RAM → swap/network → disk.\n3. **Faraday bag** mobile ke liye; airplane mode decision documented.\n4. **Live response** tools (Volatility, DumpIt) for running systems.\n5. **Do not boot** seized systems; nikaal kar image banao.\n6. **Hash at acquisition** aur verification.\n7. **Chain of custody** + contemporaneous notes.\n8. **Log retention** badhao (preventive forensics).\n\n**Exam line:** \"Digital evidence ko galti se bhi chhoona = evidence khatam; isliye process pehle, curiosity baad mein.\"\n\n**Diagram:** Refer to the Properties of digital evidence diagram."
      },
      {
        "question": "What is authenticity and integrity of digital evidence? How are they established?",
        "answer": "**Authenticity:** evidence waqai wahi hai jo wo hone ka dava karta hai, aur usi source se aayi hai.\n**Integrity:** evidence ke content mein koi badlav nahi hua.\n\n**Authenticity kaise establish hoti hai:**\n1. **Hash values** — acquisition ke time SHA-256, verification par match.\n2. **Device identification** — serial number, IMEI, MAC, asset tag.\n3. **Chain of custody** — collector, transfers, seals.\n4. **Metadata** — EXIF, headers, log entries.\n5. **Custodian statement + Section 65B certificate.**\n6. **Corroboration** — do independent sources ka same result.\n\n**Integrity kaise establish hoti hai:**\n1. **Write blocker** use hua ho — original write-protected.\n2. **Bit-stream image** (not copy-paste).\n3. **Hash match** — original vs image vs working copy.\n4. **Sealed exhibits** — tamper-evident bags, access log.\n5. **Tool audit logs** — kya kiya, kab kiya.\n6. **Reproducibility** — doosra examiner same hash/result nikaale.\n\n**Challenges:**\n- Screenshots/logical copies mein authenticity weak hoti hai.\n- Long storage mein bit rot ya accidental modification.\n- Anti-forensics se fake artefacts.\n\n**Exam line:** \"Authenticity bataati hai **kahan se aayi**, integrity bataati hai **badli nahi** — dono ke liye hash aur custody chahiye.\"\n\n**Diagram:** Refer to the Properties of digital evidence diagram."
      }
    ]
  },
  {
    "id": "recovering-preserving-evidence",
    "number": "4.6",
    "title": "Recovering and Preserving Digital Evidence",
    "subtitle": "Deleted data wapas laana, evidence ko bachaye rakhna",
    "icon": "layers",
    "accent": "#ffd600",
    "englishDefinition": "Preservation is the set of actions that keep evidence unchanged and usable from seizure to court: write-blocking the original, producing a hashed bit-stream image, sealing and tagging exhibits, controlling temperature, humidity and ESD, isolating mobile devices in Faraday bags, keeping an unbroken chain of custody, storing copies in separate verified locations, and enforcing a legal hold so that retention or deletion policies cannot destroy data. Recovery is the complementary work of bringing back data that has been deleted, hidden or damaged: metadata-based recovery that reconnects a deleted MFT or inode entry (including resident data still present in the record), signature-based carving that rebuilds files from their headers and footers in unallocated space, cluster and slack space examination, recycle bin and volume shadow copy restoration, transaction-log or journal replay in databases, memory carving for in-memory files, and log or backup restoration. Recovery success depends on how much has been overwritten: magnetic disks usually allow recovery of recent deletions, while SSDs with TRIM and wear levelling, encrypted volumes and securely wiped media often make recovery impossible. Investigators therefore preserve first, image immediately, and only then attempt recovery on copies, documenting every attempt, tool and outcome.",
    "intro": "Do kaam saath chalte hain: **preserve** (evidence ko jaisa hai waisa bachao — write blocker, image, hash, seal, Faraday, chain of custody, legal hold) aur **recover** (jo delete/hide/damage hua usse wapas laao — MFT/inode recovery, **file carving**, unallocated/slack space, recycle bin, shadow copy, DB log replay, memory carving). Yaad rakho: **SSD TRIM aur secure wipe ke baad recovery often impossible** hoti hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Preservation kya hai",
        "kicker": "Preservation",
        "body": "**Preservation** = evidence ki integrity ko seizure se court tak bachaye rakhna — original ko chhua nahi jaata, copy par kaam hota hai, aur har action documented hota hai.",
        "body2": "**Legal hold** iska hissa hai: retention/auto-delete policy ko pause karna, taaki data policy ke chalte kho na jaye.",
        "chips": [
          "write blocker",
          "hash",
          "sealed exhibit",
          "Faraday",
          "legal hold",
          "chain of custody"
        ]
      },
      {
        "type": "points",
        "title": "Preservation ke steps",
        "kicker": "Steps",
        "points": [
          "**Scene control:** logins band karo, screenshot/photo lo, device state note karo.",
          "**Power decision:** running system ho to RAM pehle (order of volatility), warna power off + image.",
          "**Write protection:** hardware write blocker se jodo; original ko mount na karo.",
          "**Image + hash:** bit-stream image (E01/AFF4) + SHA-256, verification hash match.",
          "**Seal + tag:** tamper-evident bag, exhibit number, collector signature, date/time.",
          "**Store:** controlled temperature/humidity, ESD-safe, access-controlled, fire/flood safe.",
          "**Copies:** working copy + archive copy, alag locations.",
          "**Legal hold + log:** retention pause, access log, chain of custody form."
        ]
      },
      {
        "type": "cards",
        "title": "Recovery techniques",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "refresh",
            "title": "Metadata-based recovery",
            "body": "Deleted `$MFT`/inode entry ko reconnect karna — file name, size, clusters."
          },
          {
            "icon": "search",
            "title": "File carving",
            "body": "Header/footer signature se unallocated space mein file rebuild (PhotoRec, Scalpel)."
          },
          {
            "icon": "warehouse",
            "title": "Unallocated & slack space",
            "body": "Free clusters aur file ke last block ka waste data examine karna."
          },
          {
            "icon": "folder",
            "title": "Recycle bin / trash",
            "body": "Windows `$Recycle.Bin`, Linux `~/.local/share/Trash`, macOS Trash."
          },
          {
            "icon": "layers",
            "title": "Shadow copies / snapshots",
            "body": "VSS, APFS snapshots, LVM snapshots se purana version."
          },
          {
            "icon": "database",
            "title": "DB log replay",
            "body": "binlog/WAL/redo se deleted row ya purana state recover."
          },
          {
            "icon": "code",
            "title": "Memory carving",
            "body": "RAM dump se in-memory files, keys, configs nikalna."
          },
          {
            "icon": "server",
            "title": "Backup & log restore",
            "body": "Central logs, SIEM copy, backup catalog se data wapas."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Metadata-based recovery vs file carving",
        "kicker": "Comparison",
        "columns": [
          "Metadata-based",
          "File carving"
        ],
        "rows": [
          {
            "label": "Kaise",
            "values": [
              "file system metadata (MFT/inode) use",
              "header/footer signature se rebuild"
            ]
          },
          {
            "label": "Kya milta",
            "values": [
              "name, path, timestamps (agar intact)",
              "content only, often no name"
            ]
          },
          {
            "label": "Success",
            "values": [
              "jab metadata intact ho",
              "jab metadata overwritten ho"
            ]
          },
          {
            "label": "Fragmentation",
            "values": [
              "handle kar sakta hai",
              "fragmented files par fail"
            ]
          },
          {
            "label": "Tools",
            "values": [
              "Autopsy, FTK, EnCase, TestDisk",
              "PhotoRec, Scalpel, Foremost, bulk_extractor"
            ]
          }
        ],
        "columnColors": [
          "#ffd600",
          "#00d4ff"
        ]
      },
      {
        "type": "example",
        "title": "Deleted file recovery ka realistic flow",
        "kicker": "Example",
        "body": "User ne `budget.xlsx` delete kiya aur recycle bin khali kiya. Investigation: (1) `$MFT` mein entry **not in use** mile — file name, size aur data runs bache; (2) cluster par data intact tha → file **recover** ho gayi; (3) `$UsnJrnl` se delete ka exact time; (4) browser history se upload ka evidence. Agar clusters overwrite ho gaye hote, to **carving** (XLSX signature `PK`) last option hota — aur fragmented case mein partial hi milta."
      },
      {
        "type": "points",
        "title": "Recovery ko mushkil banane wale factors",
        "kicker": "Limitations",
        "points": [
          "**SSD TRIM** — delete hote hi blocks zero ho jaate hain (recovery almost impossible).",
          "**Encryption** — BitLocker/LUKS ke bina data unreadable.",
          "**Secure wipe** — `sdelete`, `shred`, `cipher /w` multiple passes.",
          "**Overwrite** — naya data purane clusters par likh diya.",
          "**Cloud sync** — local delete hone par bhi server copy ya vice versa.",
          "**Time** — jitni der system chala, utna overwrite ka risk.",
          "**Physical damage** — head crash, water, burnt PCB (clean-room chahiye)."
        ]
      },
      {
        "type": "diagram",
        "title": "Recovering aur preserving digital evidence",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-recover",
        "caption": "Preserve (write block, image, hash, seal, Faraday, legal hold) then recover (MFT/inode, carving, unallocated, shadow copy, log replay) on copies"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Preserve:** write blocker, image + hash, seal, Faraday, controlled storage, legal hold.",
          "**Recover:** metadata-based, carving, unallocated/slack, recycle bin, shadow copies, DB logs, memory.",
          "**Carving** metadata ke bina content nikaalta hai, par name/path nahi milta.",
          "**Blockers:** TRIM, encryption, secure wipe, overwrite, physical damage.",
          "**Rule:** pehle preserve, phir copy par recover — har attempt document karo."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the methods of recovering deleted digital evidence.",
        "answer": "Deleted data recovery file system ke behaviour par depend karti hai — delete hone par content turant nahi jaata.\n\n**1. Metadata-based recovery**\n- Windows NTFS: `$MFT` entry \"not in use\" ho jaati hai, data runs bache rehte hain.\n- FAT: directory entry ka first byte `E5` ho jaata hai.\n- Linux ext4: inode link count 0, block pointers bache.\n- Tools: Autopsy, FTK, EnCase, TestDisk.\n\n**2. File carving (signature-based)**\n- Header/footer signature se file rebuild — `%PDF`, `PK` (docx/xlsx), `JFIF`, `FF D8`.\n- Name/path/timestamp nahi milte; fragmented files par fail.\n- Tools: PhotoRec, Scalpel, Foremost, bulk_extractor.\n\n**3. Unallocated and slack space**\n- Free clusters aur last block ke waste bytes examine.\n\n**4. Recycle bin / trash**\n- `$Recycle.Bin`, `~/.local/share/Trash`, macOS `.Trashes`.\n\n**5. Volume shadow copies / snapshots**\n- VSS, APFS snapshots, LVM snapshots se purana version.\n\n**6. Database log replay**\n- binlog/WAL/redo se deleted row ya point-in-time state.\n\n**7. Memory and log recovery**\n- RAM dump se in-memory files; SIEM/backup se deleted logs.\n\n**Limitations:** SSD TRIM, encryption, secure wipe, overwrite, physical damage.\n\n**Diagram:** Refer to the Recovering aur preserving digital evidence diagram."
      },
      {
        "question": "How is digital evidence preserved from seizure to court? Explain the controls.",
        "answer": "Preservation ka goal: evidence **unchanged, complete aur admissible** rahe.\n\n**1. Seizure and scene**\n- Device state photograph/document, logins band, power decision (RAM vs off).\n- Tamper-evident bag, exhibit number, collector signature.\n\n**2. Write protection**\n- Hardware write blocker; original kabhi mount na karo.\n- Mobile: Faraday bag (network isolation), battery/power considerations documented.\n\n**3. Acquisition and hashing**\n- Bit-stream image (E01/AFF4) + SHA-256 at acquisition.\n- Verification hash match; do copies (working + archive).\n\n**4. Storage controls**\n- Controlled temperature/humidity, ESD-safe, locked evidence room, access log.\n- Air-gapped or encrypted digital storage; fire/flood protection.\n\n**5. Chain of custody**\n- Har transfer: from, to, date, time, seal status, signature.\n- Custodian alag ho examiner se (separation of duties).\n\n**6. Legal controls**\n- Legal hold (retention/auto-delete pause), authorisation/warrant, privacy compliance.\n- Section 65B certificate + custodian statement.\n\n**7. Documentation**\n- Contemporaneous notes, tool name/version, hash log, photographs.\n\n**8. Review and disposal**\n- Retention schedule ke baad authorised disposal, recorded.\n\n**Diagram:** Refer to the Recovering aur preserving digital evidence diagram."
      },
      {
        "question": "What factors limit data recovery, and how do investigators handle them?",
        "answer": "Recovery har case mein possible nahi hoti — kuch factors data permanently khatam kar dete hain.\n\n| Factor | Effect | Handling |\n|---|---|---|\n| SSD TRIM | delete hote hi blocks zeroed | image turant lo, OS-level recovery try karo |\n| Encryption | content unreadable | RAM se keys, escrow, legal compulsion |\n| Secure wipe | multiple-pass overwrite | recover nahi; wipe ka evidence record karo |\n| Overwrite | clusters reuse | carving last option, partial results |\n| Physical damage | platter/PCB failure | clean-room lab, chip-off, donor parts |\n| Cloud sync | local delete + server copy | provider logs, legal process |\n| Time delay | zyada overwrite chance | immediate triage + legal hold |\n\n**Investigators ka approach:**\n1. **Preserve first** — image banao, phir experiment.\n2. **Copy par kaam** — original untouched.\n3. **Multiple tools** — metadata recovery + carving + shadow copies.\n4. **Document failure** — \"recovery not possible due to TRIM\" bhi ek finding hai.\n5. **Corroborate** — logs, backups, network evidence se alternative proof.\n\n**Exam line:** \"Recovery fail hona case fail nahi — alternative evidence source dhoondho.\"\n\n**Diagram:** Refer to the Recovering aur preserving digital evidence diagram."
      }
    ]
  },
  {
    "id": "advanced-forensic-tools",
    "number": "4.7",
    "title": "Advanced Forensic Tools",
    "subtitle": "Suites, memory, mobile, cloud aur AI-assisted platforms",
    "icon": "briefcase",
    "accent": "#ff5252",
    "englishDefinition": "Advanced forensic tools extend basic imaging and file-system analysis to memory, mobile, network, cloud, timeline and enterprise-scale review. Commercial suites such as EnCase, FTK, X-Ways, Nuix, Magnet AXIOM, Belkasoft X and Cellebrite (UFED plus Physical Analyzer and Inspector) combine acquisition, parsing, searching, visualisation and reporting for multiple evidence types. Open-source tools deliver comparable depth for many tasks: Autopsy and The Sleuth Kit for disk, Volatility 3 for memory, Plaso/log2timeline and Timesketch for super-timelines, Zeek and Wireshark for network, bulk_extractor and PhotoRec for carving, Ghidra and CAPA for malware, and Velociraptor or KAPE for endpoint triage at scale. Cloud forensics relies on provider APIs and logs (CloudTrail, Azure Activity Log, Google Workspace audit, M365 unified audit log) plus tools such as Magnet AXIOM Cloud, Cellebrite Cloud and Google's open-source cases. Modern platforms add case management, collaboration, hash-set based de-duplication, entity and link analysis, machine-learning triage and AI-assisted review, which reduce terabytes to the few hundred artefacts that actually decide a case. The discipline remains the same: every tool must be validated (NIST CFTT), licensed, documented with version numbers, and used in a way that another examiner can reproduce, because a sophisticated tool's output is only as admissible as the process behind it.",
    "intro": "**Advanced tools** ka matlab: basic imaging se aage — **memory, mobile, cloud, network, timeline aur enterprise review**. Commercial suites: EnCase, FTK, X-Ways, Nuix, Magnet AXIOM, Cellebrite. Open source: Autopsy, Volatility, Plaso/Timesketch, Zeek, Ghidra, Velociraptor/KAPE. Modern platforms mein **hash-set de-dup, link analysis aur AI triage** aata hai — terabytes se relevant artefacts tak. Rule same: **validated + licensed + documented + reproducible**.",
    "sections": [
      {
        "type": "definition",
        "title": "Advanced tools kya alag karte hain",
        "kicker": "Overview",
        "body": "Basic tools image banate aur files padhte hain. Advanced tools **multiple evidence types** (memory, mobile, cloud, network), **timeline correlation** aur **case-scale review** handle karte hain — aur output ko court-friendly report mein badalte hain.",
        "body2": "Inka asli value **automation + de-duplication** hai: 5 TB data mein se 200 relevant artefacts nikaalna, jo actually case decide karte hain.",
        "chips": [
          "EnCase",
          "FTK",
          "AXIOM",
          "Volatility",
          "Plaso",
          "Velociraptor",
          "AI triage"
        ]
      },
      {
        "type": "cards",
        "title": "Tool families",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "briefcase",
            "title": "Commercial suites",
            "body": "EnCase, FTK, X-Ways, Nuix, Belkasoft X — disk + mobile + review + reporting."
          },
          {
            "icon": "device",
            "title": "Mobile platforms",
            "body": "Cellebrite UFED/Physical Analyzer, Magnet AXIOM, Oxygen — extraction + app parsing."
          },
          {
            "icon": "layers",
            "title": "Memory",
            "body": "Volatility 3, Rekall, WinPmem/DumpIt (capture), `malfind`, `netscan`."
          },
          {
            "icon": "clock",
            "title": "Timeline & triage",
            "body": "Plaso/log2timeline, Timesketch, KAPE, Velociraptor, Hayabusa (EVTX)."
          },
          {
            "icon": "network",
            "title": "Network",
            "body": "Zeek, Wireshark, NetworkMiner, Arkime, Suricata."
          },
          {
            "icon": "search",
            "title": "Carving & extraction",
            "body": "bulk_extractor, PhotoRec, Scalpel, foremost."
          },
          {
            "icon": "globe",
            "title": "Cloud",
            "body": "AXIOM Cloud, Cellebrite Cloud, CloudTrail/Activity Log APIs, Google cases."
          },
          {
            "icon": "code",
            "title": "Malware & AI",
            "body": "Ghidra, CAPA, YARA, Cuckoo/CAPE, ML-based triage aur clustering."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Commercial suites vs open-source tools",
        "kicker": "Comparison",
        "columns": [
          "Commercial (EnCase, FTK, AXIOM)",
          "Open source (Autopsy, Volatility, Plaso)"
        ],
        "rows": [
          {
            "label": "Support",
            "values": [
              "vendor support, training, updates",
              "community, self-support"
            ]
          },
          {
            "label": "Court acceptance",
            "values": [
              "widely accepted, validated reports",
              "accepted, par validation record zaroori"
            ]
          },
          {
            "label": "Cost",
            "values": [
              "high licence",
              "free"
            ]
          },
          {
            "label": "Features",
            "values": [
              "integrated acquisition + review + reporting",
              "deep but separate tools"
            ]
          },
          {
            "label": "Speed at scale",
            "values": [
              "optimised, parallel processing",
              "varies; scripting se extend"
            ]
          },
          {
            "label": "Extensibility",
            "values": [
              "limited, vendor plugins",
              "high — Python modules, custom parsers"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#00e676"
        ]
      },
      {
        "type": "points",
        "title": "Advanced usage patterns",
        "kicker": "Patterns",
        "points": [
          "**Super-timeline:** disk + memory + network + cloud events ek timeline mein (Plaso/Timesketch).",
          "**Hash-set de-duplication:** NSRL known-good hashes hata kar review 90% kam.",
          "**Entity/link analysis:** users, devices, IPs, files ke beech relations (Nuix, AXIOM).",
          "**Keyword + regex + YARA:** targeted search poore image par.",
          "**Memory + disk correlation:** hidden process ko disk artifact se match karo.",
          "**Enterprise triage:** Velociraptor/KAPE se hazaaron endpoints par artefacts collect.",
          "**AI-assisted review:** clustering, near-duplicate detection, priority scoring (human verification zaroori)."
        ]
      },
      {
        "type": "example",
        "title": "Advanced toolchain ka real workflow",
        "kicker": "Example",
        "body": "Ransomware case: **Velociraptor** se 40 endpoints ka triage (process, autoruns, network) → suspect 3 hosts → **KAPE** se targeted artefacts → **FTK Imager** se images → **Plaso** se super-timeline → **Volatility** se RAM ke keys/process → **AXIOM** se mobile se chat/crypto wallet artefacts → **Nuix** se review aur report. Har tool ka version + hash record — yehi advanced toolchain ka professional tareeka hai."
      },
      {
        "type": "diagram",
        "title": "Advanced forensic tools — capability map",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-tools",
        "caption": "Commercial suites, mobile platforms, memory, timeline/triage, network, cloud aur AI review — sab validated aur documented"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Suites:** EnCase, FTK, X-Ways, Nuix, AXIOM, Belkasoft, Cellebrite.",
          "**Open source:** Autopsy, Volatility, Plaso/Timesketch, Zeek, Ghidra, Velociraptor, KAPE.",
          "**Advanced value:** super-timeline, hash-set de-dup, link analysis, AI triage.",
          "**Cloud forensics:** provider audit logs + API export.",
          "**Rule:** validated (NIST CFTT), licensed, versioned, reproducible."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain advanced forensic tools with their categories and examples.",
        "answer": "Advanced tools basic imaging se aage jaakar memory, mobile, cloud, network aur review cover karte hain.\n\n| Category | Purpose | Examples |\n|---|---|---|\n| Commercial suites | disk + review + reporting | EnCase, FTK, X-Ways, Nuix, Belkasoft X |\n| Mobile platforms | extraction + app parsing | Cellebrite UFED/PA, Magnet AXIOM, Oxygen |\n| Memory | RAM analysis | Volatility 3, Rekall, WinPmem, DumpIt |\n| Timeline/triage | super-timeline, endpoint collection | Plaso, Timesketch, KAPE, Velociraptor, Hayabusa |\n| Network | PCAP/flow/metadata | Zeek, Wireshark, NetworkMiner, Arkime |\n| Carving | deleted/embedded data | bulk_extractor, PhotoRec, Scalpel |\n| Cloud | SaaS/IaaS evidence | AXIOM Cloud, Cellebrite Cloud, CloudTrail export |\n| Malware | static/dynamic/AI | Ghidra, CAPA, YARA, Cuckoo/CAPE |\n\n**Advanced capabilities:**\n1. **Super-timeline** — multiple sources ek timeline mein.\n2. **Hash-set de-duplication** — NSRL se known-good files hatao.\n3. **Entity/link analysis** — users, devices, files ke relations.\n4. **Keyword/regex/YARA search** — targeted hunting.\n5. **ML/AI triage** — clustering, priority scoring, near-duplicate detection.\n6. **Collaboration & case management** — multi-examiner review.\n\n**Selection:** validated (NIST CFTT), licensed, supported formats, hashing/audit log, reproducible, court-friendly reports.\n\n**Diagram:** Refer to the Advanced forensic tools — capability map diagram."
      },
      {
        "question": "Compare commercial forensic suites with open-source tools. Which should be used when?",
        "answer": "Dono ki apni jagah hai — best practice hybrid hai.\n\n| Point | Commercial | Open source |\n|---|---|---|\n| Examples | EnCase, FTK, X-Ways, Nuix, AXIOM | Autopsy, Volatility, Plaso, Zeek, Ghidra |\n| Cost | high licence | free |\n| Support | vendor + training | community |\n| Court acceptance | high, documented validation | accepted, validation record needed |\n| Integration | end-to-end suite | separate specialised tools |\n| Speed at scale | optimised | varies, scripting |\n| Extensibility | vendor plugins | Python modules, custom parsers |\n| Transparency | closed source | code auditable |\n\n**Kab commercial:**\n- Bade criminal cases jahan court acceptance aur vendor support chahiye.\n- Multi-format acquisition + review + reporting ek hi platform par.\n- Team workflows, case management, audit trails.\n\n**Kab open source:**\n- Budget-limited labs, training, research.\n- Deep specialised tasks (memory, timeline, network, malware).\n- Custom parsers/automation chahiye.\n- Transparency aur peer review important ho.\n\n**Best practice:** primary acquisition/analysis commercial + cross-verification open source (ya vice versa). Dual-tool verification se result ki reliability badhti hai.\n\n**Diagram:** Refer to the Advanced forensic tools — capability map diagram."
      },
      {
        "question": "What capabilities make a forensic tool \"advanced\"? Explain timeline, de-duplication and AI review.",
        "answer": "**1. Multi-source ingestion**\n- Disk, memory, mobile, network, cloud logs, EVTX, databases — sab ek case mein.\n\n**2. Super-timeline**\n- Plaso/Timesketch se saare events normalise + sort.\n- Attack narrative aur dwell time measure karna.\n- Filter by host/user/type.\n\n**3. De-duplication and data reduction**\n- **Hash sets:** NSRL known-good list se thousands of OS files hatao.\n- Near-duplicate detection (documents, images).\n- Date/keyword/entity filters — relevant window par focus.\n\n**4. Entity & link analysis**\n- Users, devices, IPs, files, accounts ke relations graph.\n- Communication patterns aur money trail.\n\n**5. Search and classification**\n- Regex, keyword, YARA, entropy, file-type filters.\n- ML clustering se unknown artefacts group karna.\n\n**6. AI-assisted review**\n- Priority scoring, relevancy prediction, transcript/OCR.\n- **Human verification mandatory** — AI suggestion hai, evidence nahi.\n\n**7. Collaboration and reporting**\n- Multi-examiner review, bookmarks, redaction, export templates.\n\n**8. Audit and validation**\n- Har action ka log, tool version, hash verification, NIST CFTT validation.\n\n**Diagram:** Refer to the Advanced forensic tools — capability map diagram."
      }
    ]
  },
  {
    "id": "selecting-analyzing-evidence",
    "number": "4.8",
    "title": "Selecting and Analyzing Digital Evidence",
    "subtitle": "Relevance, triage aur analysis methodology",
    "icon": "target",
    "accent": "#2f6fff",
    "englishDefinition": "Selecting digital evidence is a reasoned, documented process of reducing a very large data set to the artefacts that can answer the questions of the case. Investigators begin with the case theory and legal scope, then triage by relevance (what the allegation turns on), materiality (whether it changes the outcome), reliability (how trustworthy the artefact is) and proportionality (effort versus value), while recording what was excluded and why. Practical selection tools are date and time windows, custodian and account filters, hash sets and known-file exclusion, keyword and regex search, file-type and extension filters, communication participants, and geolocation. Analysis then turns selected artefacts into findings: building a timeline, correlating independent sources, testing competing hypotheses (including the innocent explanation), checking for anti-forensic manipulation, quantifying impact, and documenting the chain of reasoning from artefact to conclusion. Good analysis is falsifiable - it states what evidence would disprove the finding and shows that this evidence was looked for. Investigators must also guard against confirmation bias, tunnel vision, automation bias and contamination, use peer review for significant conclusions, and keep every query, filter and export versioned so the selection can be reproduced in court.",
    "intro": "**Selecting evidence** = bade data set se **relevant artefacts chunna** — case theory + legal scope se shuru, phir relevance, materiality, reliability aur proportionality ke hisaab se triage. Tools: date window, custodian, **hash set**, keyword/regex, file type, participants. **Analysis** = timeline, correlation, hypothesis testing (including innocent explanation), impact quantify karna — aur har conclusion ko artefact se trace karna.",
    "sections": [
      {
        "type": "definition",
        "title": "Selection aur analysis ka relationship",
        "kicker": "Basics",
        "body": "**Selection** data ko chhota aur relevant banata hai; **analysis** usme se conclusion nikalta hai. Dono documented hone chahiye — kaunsa filter lagaya, kya exclude kiya aur kyun.",
        "body2": "Agar defence poochhe \"aapne ye file kaise chuni?\", to documented selection criteria hi jawab deta hai. Undocumented selection = challenge.",
        "chips": [
          "relevance",
          "materiality",
          "triage",
          "hash set",
          "timeline",
          "hypothesis"
        ]
      },
      {
        "type": "cards",
        "title": "Selection criteria",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "target",
            "title": "Relevance",
            "body": "Allegation ke facts se seedha juda hua (kya prove karna hai)."
          },
          {
            "icon": "chart",
            "title": "Materiality",
            "body": "Kya ye artefact outcome badal sakta hai?"
          },
          {
            "icon": "shield",
            "title": "Reliability",
            "body": "Artefact kitna trustworthy — source, integrity, corroboration."
          },
          {
            "icon": "ruler",
            "title": "Proportionality",
            "body": "Effort vs value — poora disk scan zaroori hai ya targeted?"
          },
          {
            "icon": "gavel",
            "title": "Legal scope",
            "body": "Warrant/authorisation aur privacy limits ke andar."
          },
          {
            "icon": "clock",
            "title": "Time window",
            "body": "Incident ya allegation ka relevant period."
          }
        ]
      },
      {
        "type": "points",
        "title": "Data reduction techniques",
        "kicker": "Reduction",
        "points": [
          "**Hash sets:** NSRL/known-good hashes se OS files exclude — review load 80–90% kam.",
          "**Date/time filter:** incident window ± buffer (timezone normalize).",
          "**Custodian/account filter:** kis user/device ka data relevant hai.",
          "**Keyword + regex:** project names, account numbers, domains, PAN/Aadhaar patterns.",
          "**File type filter:** documents, archives, images, databases, logs.",
          "**Communication participants:** kis se kis ko mail/chat hua.",
          "**Deduplication:** same file ke multiple copies ek baar.",
          "**Entropy/type anomaly:** renamed files, encrypted containers, stego suspects."
        ]
      },
      {
        "type": "comparison",
        "title": "Triage levels",
        "kicker": "Comparison",
        "columns": [
          "Triage (first pass)",
          "Deep analysis"
        ],
        "rows": [
          {
            "label": "Time",
            "values": [
              "minutes–hours",
              "days–weeks"
            ]
          },
          {
            "label": "Scope",
            "values": [
              "targeted artefacts, keywords",
              "full image, carving, all artefacts"
            ]
          },
          {
            "label": "Tools",
            "values": [
              "KAPE, Velociraptor, timeline, hash sets",
              "FTK/EnCase/Autopsy, Plaso, Volatility"
            ]
          },
          {
            "label": "Output",
            "values": [
              "hot/warm/cold prioritisation",
              "documented findings + report"
            ]
          },
          {
            "label": "Use",
            "values": [
              "decide where to dig",
              "court-ready conclusions"
            ]
          }
        ],
        "columnColors": [
          "#2f6fff",
          "#ff8800"
        ]
      },
      {
        "type": "example",
        "title": "Selection se analysis tak — ek case",
        "kicker": "Example",
        "body": "Allegation: employee ne client list leak ki. **Selection:** user ke profile ka data, last 60 din, email/chat/web, USB history, cloud sync logs; hash set se Windows files exclude. **Analysis:** (1) `$UsnJrnl` se `client_list.xlsx` ka copy event; (2) browser se personal Gmail upload; (3) mail se \"resume\" attachment ke naam par file; (4) timing office hours ke baahar. Har conclusion ke saamne artefact — aur innocent explanation (\"official backup tha\") test kiya, jo fail hua kyunki destination personal account tha."
      },
      {
        "type": "points",
        "title": "Analysis discipline (bias aur error control)",
        "kicker": "Discipline",
        "points": [
          "**Hypothesis testing:** apni theory ke against bhi evidence dhoondho (falsification).",
          "**Corroboration:** ek artefact par case na banao — do independent sources lo.",
          "**Confirmation bias:** disconfirming evidence ko ignore na karo.",
          "**Automation bias:** tool ke output ko blindly trust na karo, spot-check karo.",
          "**Contamination:** analysis notes mein apni assumptions clearly likho.",
          "**Peer review:** significant finding dusre examiner se verify karwao.",
          "**Documentation:** query, filter, tool version, timestamp — reproducible hone chahiye."
        ]
      },
      {
        "type": "diagram",
        "title": "Selecting aur analyzing digital evidence",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-select",
        "caption": "Case theory → triage/filters (time, custodian, hash sets, keyword) → timeline + correlation → hypothesis test → findings with artefact trace"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Criteria:** relevance, materiality, reliability, proportionality, legal scope, time window.",
          "**Reduction:** hash sets, date/custodian filters, keyword/regex, dedup, file type.",
          "**Analysis:** timeline, corroboration, hypothesis testing, impact quantification.",
          "**Discipline:** falsification, peer review, no bias, full documentation.",
          "**Exam line:** selection documented na ho to analysis court mein challenge hota hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the process of selecting digital evidence with criteria and techniques.",
        "answer": "Selecting evidence ka matlab: bade data set se **case-relevant artefacts** chunna — documented aur defensible tareeke se.\n\n**Step 1 — Case theory & scope**\n- Kya allegation hai, kya prove karna hai, legal authority kya hai.\n\n**Step 2 — Criteria**\n\n| Criterion | Question |\n|---|---|\n| Relevance | kya ye case facts se juda hai? |\n| Materiality | kya outcome badal sakta hai? |\n| Reliability | source kitna trustworthy hai? |\n| Proportionality | effort vs value sahi hai? |\n| Legal scope | warrant/policy ke andar hai? |\n\n**Step 3 — Techniques (data reduction)**\n1. **Hash sets** — NSRL/known-good exclude.\n2. **Date/time window** — incident period, timezone normalized.\n3. **Custodian/account filter** — kis user/device.\n4. **Keyword/regex** — names, accounts, domains, patterns.\n5. **File-type filter** — docs, archives, DB, logs.\n6. **Participants filter** — mail/chat ke log.\n7. **Deduplication** — same file ek baar.\n8. **Anomaly detection** — renamed, encrypted, stego suspects.\n\n**Step 4 — Document**\n- Kaunsa query/filter, kab, tool version, kya exclude kiya aur **kyun**.\n\n**Step 5 — Prioritise**\n- Hot (immediate) / warm / cold buckets for deep analysis.\n\n**Exam line:** undocumented selection = court mein challenge.\n\n**Diagram:** Refer to the Selecting aur analyzing digital evidence diagram."
      },
      {
        "question": "Explain the steps of analysing digital evidence and building findings.",
        "answer": "Analysis selected artefacts ko **findings** mein badalta hai.\n\n**1. Artefact examination**\n- Har artefact ko independently verify: file, timestamp, owner, source.\n\n**2. Timeline construction**\n- Plaso/Autopsy se super-timeline; sequence aur gaps dekho.\n\n**3. Correlation**\n- Disk + memory + network + cloud + mobile — independent sources ka same conclusion.\n\n**4. Hypothesis testing**\n- Competing explanations list karo (accidental, authorised, innocent).\n- Har hypothesis ke liye supporting aur refuting evidence dhoondho.\n- Ek bhi refuting evidence na mile to finding strong.\n\n**5. Anti-forensic check**\n- Timestamp mismatch, missing logs, wipe artifacts.\n\n**6. Impact quantification**\n- Kitne records, kitna data, kitna financial loss, kitne users.\n\n**7. Attribution**\n- Account, IP, device, session, physical access.\n\n**8. Documentation**\n- Chain of reasoning: artefact → inference → conclusion.\n- Limitations aur assumptions likho.\n\n**9. Peer review**\n- Independent examiner se verification.\n\n**10. Reporting**\n- Findings, evidence table, timeline, methodology, 65B.\n\n**Diagram:** Refer to the Selecting aur analyzing digital evidence diagram."
      },
      {
        "question": "What are the risks of bias and error in digital evidence analysis, and how are they controlled?",
        "answer": "Forensic analysis mein human aur tool dono se error aa sakta hai.\n\n**Types of bias/error:**\n1. **Confirmation bias** — sirf apni theory ke supporting evidence dekhna.\n2. **Tunnel vision** — pehle suspect par fix ho jaana.\n3. **Automation bias** — tool output ko blindly sach maanna.\n4. **Contextual contamination** — case ki extra information se interpretation badalna.\n5. **Tool error** — parser bug, unsupported format, timezone mistake.\n6. **Sampling error** — selective data dekh kar generalise karna.\n7. **Documentation gap** — query/filter record na hona.\n\n**Controls:**\n1. **Falsification approach** — apni theory ko galat sabit karne wala evidence dhoondho.\n2. **Multiple hypotheses** — innocent explanation bhi formally test karo.\n3. **Corroboration** — do independent sources.\n4. **Dual-tool verification** — same artefact do tools se parse.\n5. **Peer/blind review** — independent examiner.\n6. **Spot-check automation** — manual verification sample.\n7. **Documentation** — queries, filters, tool versions, timestamps.\n8. **Training/competency** — SOP, proficiency tests.\n9. **Court disclosure** — limitations aur exculpatory evidence bhi report karo.\n\n**Exam line:** \"Forensic conclusion ka test ye hai ki wo **galat sabit ho sakta hai** — jo test pass kare wahi finding.\"\n\n**Diagram:** Refer to the Selecting aur analyzing digital evidence diagram."
      }
    ]
  },
  {
    "id": "validating-evidence",
    "number": "4.9",
    "title": "Validating the Evidence",
    "subtitle": "Tool validation, verification aur court-proof chain",
    "icon": "check",
    "accent": "#00e676",
    "englishDefinition": "Validating digital evidence means demonstrating, with records, that the evidence is what it claims to be and that the process which produced it is sound. It has three layers. Tool validation shows that the software or hardware produces correct results: NIST's Computer Forensic Tool Testing (CFTT) programme publishes test reports for imagers, write blockers and mobile tools, and labs repeat known-answer tests internally before and after upgrades. Process verification shows that each step in this case was performed correctly and can be repeated: hash values are recomputed and matched, dual-tool parsing is compared, acquisition logs and write-blocker records are checked, and a second examiner reproduces the key finding. Evidence validation shows that the specific exhibit is authentic and intact: serial numbers, seals, chain of custody, timestamps and corroborating independent sources all agree. Legally, validation supports admissibility: in India the Section 65B certificate identifies the device, the regular course of activity and the proper working of the device, while courts elsewhere apply Daubert-style criteria - testability, error rate, peer review, general acceptance and published standards. Weak validation is the most common attack line in cross-examination, so every tool version, hash, test report, SOP reference and review decision must be in the case file before the report is signed.",
    "intro": "**Validation** ka matlab: records ke saath dikhana ki evidence **jo hai wahi hai** aur process **sahi tha**. Teen layers: (1) **tool validation** (NIST CFTT, known-answer tests), (2) **process verification** (hash recompute, dual-tool, second examiner), (3) **evidence validation** (serial, seal, chain of custody, corroboration). Legally isse admissibility milti hai — India mein **65B certificate**, US mein Daubert criteria.",
    "sections": [
      {
        "type": "definition",
        "title": "Validation ka matlab",
        "kicker": "Definition",
        "body": "**Validation** = evidence aur uske process ki **soundness prove karna**. Sirf tool chalna kaafi nahi — uska result correct hona chahiye, process repeatable hona chahiye, aur exhibit authentic hona chahiye.",
        "body2": "Court mein validation ka test simple hai: \"kaun sa record dikhata hai ki aapne sahi kaam kiya?\" — SOP, hash log, validation report, custody form.",
        "chips": [
          "tool validation",
          "NIST CFTT",
          "hash verification",
          "dual-tool",
          "65B",
          "Daubert"
        ]
      },
      {
        "type": "cards",
        "title": "Validation ke teen layers",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "tools",
            "title": "Tool validation",
            "body": "NIST CFTT report, known-answer test, version regression test, firmware check."
          },
          {
            "icon": "refresh",
            "title": "Process verification",
            "body": "Hash recompute + match, dual-tool parse, SOP compliance, second examiner."
          },
          {
            "icon": "check",
            "title": "Evidence validation",
            "body": "Serial/IMEI match, seal intact, custody unbroken, timestamps consistent."
          },
          {
            "icon": "gavel",
            "title": "Legal validation",
            "body": "65B certificate (India), Daubert/Frye criteria, expert qualification."
          },
          {
            "icon": "doc",
            "title": "Documentation",
            "body": "Case file: acquisition log, hash log, tool versions, notes, review record."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Validation vs verification",
        "kicker": "Comparison",
        "columns": [
          "Validation",
          "Verification"
        ],
        "rows": [
          {
            "label": "Question",
            "values": [
              "tool sahi result deta hai?",
              "is case mein step sahi hua?"
            ]
          },
          {
            "label": "Level",
            "values": [
              "general (tool/process level)",
              "case-specific"
            ]
          },
          {
            "label": "Kab",
            "values": [
              "before use, after upgrade",
              "har acquisition/analysis par"
            ]
          },
          {
            "label": "Evidence",
            "values": [
              "NIST CFTT, internal test reports",
              "hash match, logs, dual-tool"
            ]
          },
          {
            "label": "Owner",
            "values": [
              "lab/quality manager",
              "examiner"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#00d4ff"
        ]
      },
      {
        "type": "points",
        "title": "Practical validation checklist",
        "kicker": "Checklist",
        "points": [
          "**Before use:** tool NIST CFTT tested ya internal known-answer test pass.",
          "**After upgrade:** regression test dobara (version change ke baad).",
          "**At acquisition:** write blocker log, hash compute, hash match.",
          "**During analysis:** dual-tool parse on critical artefacts, spot-check automation.",
          "**Before report:** second examiner review, hash re-verify.",
          "**Legal:** 65B certificate, custodian statement, expert CV, methodology annexure.",
          "**Retention:** validation reports, SOP versions aur test logs case file mein."
        ]
      },
      {
        "type": "example",
        "title": "Cross-examination mein validation kaise bachati hai",
        "kicker": "Example",
        "body": "Defence ne poochha: \"aapke tool ne image banate waqt data modify kiya, kaise pata?\" Jawab: (1) hardware write blocker ka serial + log; (2) acquisition aur verification SHA-256 **match**; (3) image ka hash teen copies par same; (4) tool ka NIST CFTT report aur humara internal known-answer test; (5) doosre examiner ne independent tool se same artefacts nikale. Har point documented — isliye challenge fail."
      },
      {
        "type": "points",
        "title": "Evidence ko invalid karne wale factors",
        "kicker": "Invalidation",
        "points": [
          "**Hash mismatch** — copy original se match nahi karti.",
          "**Custody gap** — evidence kuch der kisi ke paas undocumented raha.",
          "**Unvalidated tool** — koi test report nahi, version change ke baad test nahi.",
          "**Undocumented steps** — notes missing, query/filter record nahi.",
          "**Unauthorised access** — warrant/consent ke bahar data liya.",
          "**Corroboration missing** — ek hi artefact par conclusion.",
          "**Inconsistent timestamps** — timezone/clock issue, timeline contradiction."
        ]
      },
      {
        "type": "diagram",
        "title": "Validating the evidence — 3 layers",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-validate",
        "caption": "Tool validation (NIST CFTT) → process verification (hash, dual-tool, peer review) → evidence validation (serial, seal, custody) → legal admissibility (65B/Daubert)"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Three layers:** tool validation, process verification, evidence validation (+ legal).",
          "**Tools:** NIST CFTT reports, known-answer tests, regression tests after upgrade.",
          "**Process:** hash recompute, dual-tool parse, second examiner review.",
          "**Legal:** 65B certificate, Daubert criteria, expert qualification.",
          "**Exam line:** validation records hi cross-examination ka defence hain."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is validation of digital evidence? Explain its layers and methods.",
        "answer": "**Validation:** records ke saath prove karna ki evidence authentic aur intact hai, aur usse produce karne wala process sahi tha.\n\n**Layer 1 — Tool validation**\n- **NIST CFTT** test reports (imagers, write blockers, mobile tools, deleted-file recovery).\n- Internal **known-answer tests** before first use aur har upgrade ke baad (regression).\n- Firmware aur version records, licence validity.\n\n**Layer 2 — Process verification**\n- Hash recompute aur match (acquisition vs verification vs working copy).\n- **Dual-tool** parsing of critical artefacts (EnCase + Autopsy etc.).\n- Write-blocker log, SOP compliance, contemporaneous notes.\n- **Second examiner** review / blind re-check.\n\n**Layer 3 — Evidence validation**\n- Device serial/IMEI, exhibit number, seal intact.\n- Chain of custody unbroken; timestamps consistent.\n- Independent corroboration (logs, network, cloud).\n\n**Layer 4 — Legal validation**\n- India: **Section 65B certificate** — device, regular course, proper working.\n- US: **Daubert** — testability, error rate, peer review, general acceptance.\n- Expert qualification aur methodology annexure.\n\n**Common failures:** hash mismatch, custody gap, unvalidated tool, undocumented steps, unauthorised acquisition.\n\n**Diagram:** Refer to the Validating the evidence — 3 layers diagram."
      },
      {
        "question": "Differentiate validation and verification with examples from digital forensics.",
        "answer": "Dono quality assurance ke steps hain, par level alag hai.\n\n| Point | Validation | Verification |\n|---|---|---|\n| Question | \"tool sahi kaam karta hai?\" | \"is case mein kaam sahi hua?\" |\n| Level | general — tool/process | case-specific |\n| Timing | use se pehle, upgrade ke baad | har acquisition/analysis par |\n| Evidence | NIST CFTT, known-answer tests | hash match, logs, dual-tool |\n| Owner | lab/quality manager | examiner |\n| Example | FTK Imager ka test report + internal test | image ka SHA-256 original se match |\n\n**Validation example:** Naya imaging tool install kiya → ek known test disk (jiska hash pehle se pata hai) ka image banaya → hash match → tool validated.\n\n**Verification example:** Case mein seized disk ka image banaya → image ka hash original se match → verify.\n\n**Analogy:** Validation = weighing scale ko calibrate karna; verification = us par aaj ka weight check karna.\n\n**Dono kyun chahiye:** court mein pehla sawaal \"tool sahi hai?\" (validation), doosra \"is case mein sahi chala?\" (verification).\n\n**Diagram:** Refer to the Validating the evidence — 3 layers diagram."
      },
      {
        "question": "How does validation support admissibility in court? Explain with Indian and international standards.",
        "answer": "Validation evidence ko **admissible aur credible** banati hai — kyunki court ko process par bharosa chahiye.\n\n**Admissibility ke liye zaroori:**\n1. **Authenticity** — exhibit wahi hai (serial, seal, hash).\n2. **Integrity** — badla nahi (hash match).\n3. **Reliability** — validated tools + SOP.\n4. **Reproducibility** — doosra expert same result.\n5. **Legality** — authorised acquisition.\n\n**India — IT Act 2000 Section 65B:**\n- Certificate batata hai: (i) record us device se produce hua jo regularly use hota tha, (ii) device theek chal raha tha, (iii) record normal course of activity mein bana.\n- Custodian/expert signature + supporting documents.\n\n**International standards:**\n- **Daubert** (US): testability, known error rate, peer review, general acceptance, standards.\n- **Frye** (some US states): general acceptance.\n- **ISO/IEC 17025:** lab competence, validated methods, proficiency testing.\n- **NIST CFTT:** published tool test reports.\n- **SWGDE/ACPO:** best practice guides.\n\n**Practical pack court ke liye:**\n- Acquisition log + hash log, write-blocker record.\n- Tool validation reports + version list.\n- SOP reference + examiner CV.\n- Chain of custody form, 65B certificate, evidence table.\n\n**Diagram:** Refer to the Validating the evidence — 3 layers diagram."
      }
    ]
  },
  {
    "id": "forensic-technology-practices",
    "number": "4.10",
    "title": "Forensic Technology and Practices",
    "subtitle": "Standards, lab quality, emerging tech aur ethics",
    "icon": "globe",
    "accent": "#aa00ff",
    "englishDefinition": "Forensic technology and practices cover the standards, quality systems, methods and emerging capabilities that make digital investigations professional rather than ad hoc. The standards family includes ISO/IEC 27037 for evidence handling, ISO/IEC 27041, 27042 and 27043 for method assurance, analysis and investigation process, ISO/IEC 17025 for laboratory competence, NIST SP 800-86 and 800-101 for integration and mobile guidance, SWGDE and ACPO best-practice documents, and the RFC 3227 order of volatility; in India, Section 65B of the IT Act and CERT-In directions set the legal frame. Practice elements are standard operating procedures for each activity, evidence and exhibit management, chain-of-custody discipline, tool validation and change control, examiner competency and proficiency testing, peer review, internal audit and corrective action, and secure lab operation with isolated networks. Emerging technology reshapes the field: cloud-native and SaaS forensics, remote and live acquisition at scale with Velociraptor and KAPE, memory and container/Kubernetes analysis, IoT and vehicle forensics, drone and CCTV handling, blockchain and crypto-asset tracing, and machine-learning triage with AI-assisted review under human oversight. Ethical and legal practice runs through all of it: authorisation, privacy by design under the DPDP Act, impartiality, confidentiality, disclosure of limitations, and refusal to work beyond competence.",
    "intro": "**Forensic technology aur practices** = standards + lab quality + methods + emerging tech. Standards: **ISO 27037/27041/27042/27043**, **ISO 17025**, **NIST SP 800-86/101**, SWGDE/ACPO, RFC 3227, India mein **IT Act 65B** aur CERT-In. Practices: SOP, exhibit management, validation, competency, peer review, audit. Emerging: **cloud/SaaS forensics, remote acquisition (Velociraptor/KAPE), memory, container/K8s, IoT/vehicle, blockchain tracing, AI triage**.",
    "sections": [
      {
        "type": "definition",
        "title": "Practices ka matlab",
        "kicker": "Basics",
        "body": "**Practice** = documented, repeatable tareeka — SOP, roles, quality checks, records. **Technology** = tools aur capabilities jo ye kaam possible banate hain. Dono milkar investigation ko **professional aur defensible** banate hain.",
        "body2": "Standards follow karne ka fayda: court acceptance, lab accreditation, audit pass, aur team ke different members ka same result.",
        "chips": [
          "ISO 27037",
          "ISO 17025",
          "SOP",
          "proficiency testing",
          "cloud forensics",
          "AI triage"
        ]
      },
      {
        "type": "comparison",
        "title": "Standards family",
        "kicker": "Comparison",
        "columns": [
          "Standard",
          "What it covers"
        ],
        "rows": [
          {
            "label": "ISO/IEC 27037",
            "values": [
              "digital evidence identification, collection, acquisition, preservation"
            ]
          },
          {
            "label": "ISO/IEC 27041",
            "values": [
              "method assurance — kaise prove karein method fit hai"
            ]
          },
          {
            "label": "ISO/IEC 27042",
            "values": [
              "analysis aur interpretation of digital evidence"
            ]
          },
          {
            "label": "ISO/IEC 27043",
            "values": [
              "incident investigation principles and processes"
            ]
          },
          {
            "label": "ISO/IEC 17025",
            "values": [
              "lab competence, accreditation, proficiency testing"
            ]
          },
          {
            "label": "NIST SP 800-86 / 800-101",
            "values": [
              "forensics in IR / mobile forensics guidance"
            ]
          },
          {
            "label": "SWGDE / ACPO",
            "values": [
              "best practice guides, good practice principles"
            ]
          },
          {
            "label": "RFC 3227",
            "values": [
              "order of volatility for evidence collection"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff",
          "#00e676",
          "#ff8800",
          "#ffd600",
          "#ff5252",
          "#5a6a9e",
          "#00bcd4"
        ]
      },
      {
        "type": "cards",
        "title": "Lab practices",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "doc",
            "title": "SOP & work instructions",
            "body": "Har activity ka documented method, version-controlled."
          },
          {
            "icon": "check",
            "title": "Tool validation & change control",
            "body": "NIST CFTT, regression test after upgrade, approval record."
          },
          {
            "icon": "users",
            "title": "Competency & proficiency",
            "body": "Training records, proficiency testing, authorisation to sign reports."
          },
          {
            "icon": "search",
            "title": "Peer review",
            "body": "Significant findings independent examiner se verify."
          },
          {
            "icon": "ruler",
            "title": "Audit & corrective action",
            "body": "Internal audits, non-conformity log, root cause + fix."
          },
          {
            "icon": "lock",
            "title": "Security & integrity",
            "body": "Isolated network, access control, evidence room, encryption."
          },
          {
            "icon": "folder",
            "title": "Exhibit management",
            "body": "Numbering, sealing, storage log, retention aur disposal."
          },
          {
            "icon": "book",
            "title": "Reporting standards",
            "body": "Template, limitations, methodology annexure, 65B support."
          }
        ]
      },
      {
        "type": "points",
        "title": "Emerging technology in forensics",
        "kicker": "Emerging",
        "points": [
          "**Cloud-native / SaaS forensics:** CloudTrail, M365 unified audit log, Workspace audit, snapshots, jurisdiction clauses.",
          "**Remote & live acquisition at scale:** Velociraptor, KAPE, EDR-based collection across hundreds of hosts.",
          "**Memory & container forensics:** RAM analysis, Docker/Kubernetes artefacts, serverless logs.",
          "**IoT, vehicle & drone forensics:** device telemetry, infotainment, ECU/CAN data, drone flight logs.",
          "**Blockchain & crypto tracing:** wallet clustering, exchange records, transaction graphs.",
          "**AI/ML in DFIR:** triage scoring, clustering, OCR/transcript, near-duplicate detection (human verification mandatory).",
          "**Automation & orchestration:** playbooks (SOAR + DFIR), reproducible pipelines, evidence hashing at every stage."
        ]
      },
      {
        "type": "example",
        "title": "Standards ne case kaise bachaya",
        "kicker": "Example",
        "body": "Ek lab ne apna naya parser use kiya jo ek artifact galat parse kar raha tha. Kyunki lab ke paas **ISO 17025 ke tehat validation aur regression test** records the, audit mein discrepancy pakdi gayi, corrective action hui aur case ki report revise hui — court tak galat finding nahi pahunchi. Standards ka fayda yahi hai: galti pakadne ka system, na ki perfect log."
      },
      {
        "type": "points",
        "title": "Ethics aur legal practice",
        "kicker": "Ethics",
        "points": [
          "**Authorisation:** warrant/consent/policy ke andar hi kaam.",
          "**Privacy by design:** DPDP Act, minimisation, need-to-know access.",
          "**Impartiality:** jo mile wahi report karo — exculpatory evidence bhi.",
          "**Confidentiality:** case data sirf authorised logon ke saath.",
          "**Competence:** apni expertise ke bahar ka kaam refuse karo ya specialist lo.",
          "**Disclosure:** limitations aur errors bhi likho.",
          "**No tampering:** chain of custody aur hash ka respect."
        ]
      },
      {
        "type": "diagram",
        "title": "Forensic technology aur practices",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "df-tech",
        "caption": "Standards (ISO 27037/17025, NIST) + lab practices (SOP, validation, peer review, audit) + emerging tech (cloud, remote, IoT, AI) + ethics"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Standards:** ISO 27037/27041/27042/27043, ISO 17025, NIST SP 800-86/101, SWGDE/ACPO, RFC 3227, IT Act 65B.",
          "**Practices:** SOP, tool validation, competency, proficiency testing, peer review, audit, exhibit management.",
          "**Emerging:** cloud/SaaS, remote acquisition, memory/container, IoT/vehicle, blockchain, AI triage.",
          "**Ethics:** authorisation, privacy, impartiality, confidentiality, disclosure.",
          "**Exam line:** standard + SOP + validation = defensible forensics."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the standards and practices governing digital forensics.",
        "answer": "Digital forensics ko defensible banane ke liye standards aur practices ka set hai.\n\n**Standards:**\n\n| Standard | Coverage |\n|---|---|\n| ISO/IEC 27037 | evidence identification, collection, acquisition, preservation |\n| ISO/IEC 27041 | method assurance |\n| ISO/IEC 27042 | analysis and interpretation |\n| ISO/IEC 27043 | investigation principles and processes |\n| ISO/IEC 17025 | laboratory competence and accreditation |\n| NIST SP 800-86 | forensics in incident response |\n| NIST SP 800-101 | mobile forensics |\n| SWGDE / ACPO | best practice guides |\n| RFC 3227 | order of volatility |\n| IT Act 2000 s.65B | electronic record certificate (India) |\n\n**Lab practices:**\n1. **SOP** for every activity, version controlled.\n2. **Tool validation & change control** (NIST CFTT + regression).\n3. **Competency and proficiency testing** for examiners.\n4. **Peer review** of significant findings.\n5. **Internal audit and corrective action.**\n6. **Exhibit management** — numbering, sealing, storage log.\n7. **Lab security** — isolated network, access control, evidence room.\n8. **Reporting standards** — template, limitations, methodology annexure.\n\n**Ethics:** authorisation, privacy (DPDP), impartiality, confidentiality, competence, disclosure.\n\n**Diagram:** Refer to the Forensic technology aur practices diagram."
      },
      {
        "question": "Discuss emerging technologies in digital forensics and the challenges they bring.",
        "answer": "Forensics ka scope har saal badh raha hai — naye platforms, naye challenges.\n\n**1. Cloud / SaaS forensics**\n- Sources: CloudTrail, Azure Activity Log, M365 unified audit, Workspace audit, snapshots.\n- Challenges: jurisdiction, provider cooperation, log retention, shared responsibility.\n\n**2. Remote and live acquisition at scale**\n- Tools: Velociraptor, KAPE, EDR collection.\n- Challenges: integrity assurance, bandwidth, authorisation, volatile data consistency.\n\n**3. Memory and container forensics**\n- RAM analysis (Volatility), Docker/Kubernetes artefacts, serverless logs.\n- Challenges: ephemeral workloads, no disk artefacts, short log retention.\n\n**4. IoT, vehicle and drone forensics**\n- Device telemetry, infotainment, ECU/CAN, drone flight logs.\n- Challenges: proprietary formats, no standard tools, physical access.\n\n**5. Blockchain and crypto assets**\n- Wallet clustering, exchange records, transaction graphs.\n- Challenges: pseudonymity, cross-border exchanges, key custody.\n\n**6. AI/ML in DFIR**\n- Triage scoring, clustering, OCR, near-duplicate detection.\n- Challenges: explainability, bias, validation, human verification mandatory.\n\n**7. Automation and orchestration**\n- DFIR playbooks, reproducible pipelines, hash at every stage.\n- Challenges: pipeline drift, unvalidated scripts, audit trails.\n\n**Common thread:** technology badalti hai, **validation + documentation + law** nahi badalte.\n\n**Diagram:** Refer to the Forensic technology aur practices diagram."
      },
      {
        "question": "Explain lab quality management and ethical requirements in digital forensics.",
        "answer": "**Quality management (ISO/IEC 17025 style):**\n\n1. **Organisation and impartiality** — lab independent, no conflict of interest.\n2. **Documented methods/SOPs** — validated, version controlled.\n3. **Equipment and tools** — calibration/validation records, maintenance log.\n4. **Competence** — training, authorisation matrix, proficiency testing.\n5. **Technical records** — case file, notes, hash logs, tool versions.\n6. **Peer review** — second examiner for critical findings.\n7. **Internal audits and corrective action** — non-conformity log, root cause, fix.\n8. **Confidentiality and security** — access control, isolated network, evidence room.\n9. **Reporting integrity** — template, limitations, no overstatement.\n10. **Customer feedback/complaints** — formal handling.\n\n**Ethical requirements:**\n- **Authorisation** — legal scope ke andar kaam.\n- **Privacy** — DPDP Act, data minimisation, need-to-know.\n- **Impartiality** — exculpatory evidence bhi report karo.\n- **Truthfulness** — findings ko exaggerate na karo.\n- **Competence** — bahar ka kaam refuse karo ya specialist lo.\n- **Confidentiality** — case data leak na ho.\n- **Chain of custody** — evidence integrity ka respect.\n- **Disclosure** — errors aur limitations batao.\n\n**Result:** quality system + ethics = court mein credibility aur repeatable results.\n\n**Diagram:** Refer to the Forensic technology aur practices diagram."
      }
    ]
  }
];

export const digitalForensicsUnit = {
  id: 'unit-4',
  number: '4',
  name: 'Digital Forensics',
  topics: digitalForensicsTopics,
};
