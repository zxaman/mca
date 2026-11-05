// Cyber Security — Unit V: Social Engineering
// Topics 5.1 – 5.12, teacher-style Hinglish notes + exam Q&A.

export const socialEngineeringTopics = [
  {
    "id": "social-engineering-intro",
    "number": "5.1",
    "title": "Introduction to Social Engineering and Cyber Security",
    "subtitle": "Insaan hi sabse kamzor link — psychology se attack",
    "icon": "users",
    "accent": "#00d4ff",
    "englishDefinition": "Social engineering is the use of psychological manipulation to persuade people to perform actions or disclose confidential information that benefits the attacker. Instead of defeating a technical control, the attacker defeats the human decision: a convincing pretext makes the victim hand over a password, approve an MFA prompt, open an attachment, transfer money or let a stranger into a building. It matters to cyber security because people sit inside every control loop - they read mail, click links, plug in devices, approve access and answer the phone - so a single persuaded employee can bypass firewalls, EDR and encryption that were working perfectly. Social engineering exploits cognitive shortcuts and emotions rather than software bugs: authority, urgency and fear, trust and liking, reciprocity, social proof, scarcity, curiosity and the desire to help. Typical delivery channels are phishing, spear-phishing, vishing, smishing, pretexting, baiting, tailgating, quid pro quo and impersonation, and the impact maps to the CIA triad - confidentiality (data theft), integrity (fraudulent changes) and availability (ransomware or account lockout). Defence therefore combines awareness training with process controls such as verification callbacks, MFA that is phishing-resistant, least privilege, and technical filtering.",
    "intro": "**Social engineering** = logon ki psychology se manipulation, taaki wo **galti karein** — password de dein, MFA approve kar dein, attachment kholein, ya paisa transfer kar dein. Technical control kitna bhi strong ho, **insaan** hi control loop ke andar baithta hai — isliye attacker software ka bug nahi, **human decision** ka bug use karta hai. Channels: **phishing, vishing, smishing, pretexting, baiting, tailgating, quid pro quo, impersonation**.",
    "sections": [
      {
        "type": "definition",
        "title": "Social engineering kya hai",
        "kicker": "Definition",
        "body": "Social engineering psychological manipulation hai — attacker **trust, darr, urgency ya authority** ka faayda utha kar victim se confidential information ya action nikalwa leta hai. Isme koi malware zaroori nahi hota; kabhi-kabhi ek phone call hi kaafi hai.",
        "body2": "Cyber security se iska rishta seedha hai: **majority breaches ki entry human hoti hai** — phishing mail, fake support call, ya ek insider. Isliye ise \"human hacking\" bhi kehte hain.",
        "chips": [
          "human hacking",
          "pretext",
          "trust",
          "urgency",
          "phishing",
          "MFA fatigue"
        ]
      },
      {
        "type": "cards",
        "title": "Kyun kaam karta hai — psychological triggers",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "user",
            "title": "Authority",
            "body": "\"Main IT head bol raha hoon\" — authority figure ki baat maan li jaati hai."
          },
          {
            "icon": "clock",
            "title": "Urgency & fear",
            "body": "\"Account 10 minute mein band ho jayega\" — sochne ka time nahi milta."
          },
          {
            "icon": "check",
            "title": "Trust & liking",
            "body": "Familiar colleague, vendor ya friendly tone se guard gir jaata hai."
          },
          {
            "icon": "money",
            "title": "Reciprocity & reward",
            "body": "Free gift, bonus, refund ya prize ka lalach."
          },
          {
            "icon": "grid",
            "title": "Social proof",
            "body": "\"Baaki team ne bhi approve kar diya hai\" — herd behaviour."
          },
          {
            "icon": "eye",
            "title": "Curiosity",
            "body": "\"Salary revision list attached\" — curiosity click karwati hai."
          },
          {
            "icon": "bulb",
            "title": "Desire to help",
            "body": "Human nature: madad karne ki jaldi — attacker isi par khelta hai."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Social engineering vs technical attack",
        "kicker": "Comparison",
        "columns": [
          "Social engineering",
          "Technical attack"
        ],
        "rows": [
          {
            "label": "Target",
            "values": [
              "insaan ka decision",
              "software/hardware ka bug"
            ]
          },
          {
            "label": "Entry",
            "values": [
              "mail, call, SMS, in-person, chat",
              "network, exploit, malware"
            ]
          },
          {
            "label": "Skill",
            "values": [
              "psychology, OSINT, communication",
              "coding, exploit dev"
            ]
          },
          {
            "label": "Detection",
            "values": [
              "hard — koi signature nahi",
              "IDS/EDR signatures possible"
            ]
          },
          {
            "label": "Cost",
            "values": [
              "bahut kam (call/mail)",
              "toolkit + infrastructure"
            ]
          },
          {
            "label": "Defence",
            "values": [
              "awareness + process + verification",
              "patch, firewall, EDR"
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
        "title": "Ek classic pretext call",
        "kicker": "Example",
        "body": "Attacker ne LinkedIn se naya joiner ka naam aur manager ka naam nikala. Call: \"Hi, main IT security se Rohit bol raha hoon, aapke manager ne bola tha aapka VPN profile reset karna hai.\" Phir MFA code manga gaya — \"system mein aapka code show ho raha hai, wo bata dijiye\". Naya employee ne code bata diya, attacker ne VPN login kar liya. Kahin koi exploit nahi hua — sirf **authority + urgency + help** ka combination chalaya gaya."
      },
      {
        "type": "points",
        "title": "Common channels (yaad rakhne wali list)",
        "kicker": "Channels",
        "points": [
          "**Phishing:** bulk deceptive e-mail.",
          "**Spear-phishing:** targeted, personalised mail.",
          "**Vishing:** voice call (IVR ya human).",
          "**Smishing:** SMS/WhatsApp message.",
          "**Pretexting:** fake scenario/story bana kar information lena.",
          "**Baiting:** infected USB ya free download ka lalach.",
          "**Tailgating / piggybacking:** physical entry without badge.",
          "**Quid pro quo:** \"help\" ke badle information.",
          "**Shoulder surfing, dumpster diving, impersonation.**"
        ]
      },
      {
        "type": "comparison",
        "title": "CIA triad par impact",
        "kicker": "Comparison",
        "columns": [
          "CIA element",
          "Social engineering se kaise damage"
        ],
        "rows": [
          {
            "label": "Confidentiality",
            "values": [
              "credentials, client data, internal docs leak"
            ]
          },
          {
            "label": "Integrity",
            "values": [
              "bank details badalna, fraudulent records, fake approvals"
            ]
          },
          {
            "label": "Availability",
            "values": [
              "account lockout, ransomware (insider se install)"
            ]
          },
          {
            "label": "Reputation",
            "values": [
              "brand trust loss, regulator notice, customer churn"
            ]
          },
          {
            "label": "Financial",
            "values": [
              "BEC payment fraud, fines, recovery cost"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800",
          "#ff5252",
          "#aa00ff",
          "#ffd600"
        ]
      },
      {
        "type": "diagram",
        "title": "Social engineering aur cyber security",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-intro",
        "caption": "Attacker → trigger (authority/urgency/trust) → channel (mail, call, SMS, in-person) → human decision → credential/access/payment → impact on CIA"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Social engineering:** psychology se insaan se information ya action nikalwana.",
          "**Kyun chalta hai:** authority, urgency, trust, reward, social proof, curiosity, help karne ki aadat.",
          "**Channels:** phishing, spear-phishing, vishing, smishing, pretexting, baiting, tailgating, quid pro quo.",
          "**Impact:** confidentiality, integrity, availability + reputation + financial loss.",
          "**Defence:** awareness + verification process + phishing-resistant MFA + least privilege."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define social engineering. Explain why it is a major threat to cyber security.",
        "answer": "**Definition:** Social engineering psychological manipulation hai jisme attacker victim ko confidential information dene ya koi action karne par majboor karta hai — technical control todne ke bajaye **human decision** ko target karta hai.\n\n**Kaise kaam karta hai:**\n1. Attacker target ki information collect karta hai (OSINT, social media).\n2. Ek believable **pretext** (story) banata hai.\n3. Trigger use karta hai — authority, urgency, fear, trust, reward.\n4. Victim action leta hai (password, MFA code, payment, file open).\n5. Attacker access ya data use karke aage badhta hai.\n\n**Cyber security ke liye kyun bada threat:**\n\n| Reason | Explanation |\n|---|---|\n| Human control loop mein hai | mail, call, approval — sab insaan karta hai |\n| Technical controls bypass | firewall/EDR/encryption bekaar, agar credential mil gaya |\n| Low cost | ek mail ya call kaafi hai |\n| Hard to detect | koi signature nahi, log mein legitimate lagta hai |\n| High impact | BEC fraud, data breach, ransomware, reputational loss |\n| Scale | ek campaign se hazaaron users |\n\n**Impact (CIA + business):** confidentiality (data theft), integrity (fraud), availability (lockout/ransomware), plus financial loss aur brand damage.\n\n**Exam line:** \"Social engineering software ka bug nahi, insaan ke decision ka bug exploit karti hai.\"\n\n**Diagram:** Refer to the Social engineering aur cyber security diagram."
      },
      {
        "question": "Explain the psychological principles exploited by social engineers with examples.",
        "answer": "Social engineers cognitive shortcuts aur emotions par kaam karte hain — Cialdini ke influence principles iska base hain.\n\n**1. Authority**\n- CISO/CEO/police/IT head bankar instruction dena.\n- Example: \"Main IT security se hoon, aapka account reset karna hai.\"\n\n**2. Urgency and fear**\n- Deadline, account band hone ka darr, legal notice.\n- Example: \"10 minute mein payment nahi hui to penalty lagegi.\"\n\n**3. Trust and liking**\n- Familiar tone, colleague ka naam, vendor identity.\n- Example: manager ke naam se mail, signature same.\n\n**4. Reciprocity and reward**\n- Free gift, bonus, refund, prize.\n- Example: \"Aapko Diwali bonus mila hai, link se claim karein.\"\n\n**5. Social proof**\n- \"Baaki team ne approve kar diya hai.\"\n- Herd behaviour se suspicion kam hoti hai.\n\n**6. Scarcity**\n- Limited seats, limited-time offer, exclusive access.\n\n**7. Curiosity**\n- \"Salary revision list\", \"your photo\", \"invoice attached\".\n\n**8. Commitment and consistency**\n- Chhota request pehle (yes), phir bada request (consistency pressure).\n\n**9. Desire to help**\n- Human tendency — help desk, HR, finance role-play.\n\n**Defence:** verify through a second channel, pause on urgency, follow process, training aur simulations.\n\n**Diagram:** Refer to the Social engineering aur cyber security diagram."
      },
      {
        "question": "Explain the types of social engineering attacks with examples.",
        "answer": "Attacks delivery channel aur technique ke hisaab se classify hote hain.\n\n| Type | Channel | Example |\n|---|---|---|\n| Phishing | e-mail (bulk) | fake login page link |\n| Spear-phishing | e-mail (targeted) | manager ke naam se mail |\n| Whaling | e-mail (executive) | CEO ko fake legal notice |\n| Vishing | voice call | bank/IT support impersonation |\n| Smishing | SMS/WhatsApp | delivery/KYC link |\n| Pretexting | call/mail/chat | fake vendor ya HR scenario |\n| Baiting | physical/digital | infected USB, free download |\n| Tailgating | physical | badge ke bina entry |\n| Quid pro quo | call/mail | \"madad karunga\" ke badle info |\n| Shoulder surfing | physical | screen/ATM PIN dekhna |\n| Dumpster diving | physical | trash mein documents |\n| Impersonation | any | technician, police, auditor |\n\n**Impact levels:**\n- **Individual:** account takeover, identity theft, financial fraud.\n- **Organisation:** BEC payment fraud, data breach, ransomware entry, insider recruitment.\n\n**Defence:**\n1. Awareness + phishing simulation.\n2. Verification callback (known number).\n3. Phishing-resistant MFA (FIDO2).\n4. Least privilege + segregation of duties.\n5. Physical security (badge, visitor escort).\n6. Reporting button + fast response.\n\n**Diagram:** Refer to the Social engineering aur cyber security diagram."
      }
    ]
  },
  {
    "id": "se-evolution",
    "number": "5.2",
    "title": "Conceptual Evolution of Social Engineering",
    "subtitle": "Phone phreaking se deepfake tak",
    "icon": "timeline",
    "accent": "#00e676",
    "englishDefinition": "Social engineering has evolved through four broad eras, each shaped by the technology people trusted. The pre-internet era relied on the telephone and physical presence: phone phreaking, pretext calls to operators and switchboard staff, dumpster diving, tailgating and impersonating technicians, with con artists and fraudsters like Frank Abagnale demonstrating that trust itself was the exploit. The internet era of the 1990s and 2000s turned e-mail into the primary channel, producing bulk phishing, 419 and advance-fee frauds, fake lottery and job offers, and the first organised phishing kits; security awareness training and spam filters appeared as the countermeasure. The social-media era from the late 2000s added reconnaissance: profiles, connections, check-ins and birthdays gave attackers material for persuasive spear-phishing, whaling and business e-mail compromise, while mobile messaging created smishing and voice calls became vishing with spoofed caller IDs. The current era, from the mid-2010s onward, is defined by scale and realism: credential-harvesting SaaS platforms, MFA fatigue and adversary-in-the-middle proxies, deepfake voice and video, generative-AI written lures with flawless grammar, calibrated to public breach data; hybrid work widened the attack surface to personal devices and home networks. Each era reused the same psychological levers, which is why awareness, verification processes and phishing-resistant authentication remain the durable defences.",
    "intro": "Social engineering nayi nahi hai — bas **channel** badalte rahe hain. Chaar era yaad rakho: **(1) pre-internet** (phone phreaking, pretext calls, tailgating, dumpster diving), **(2) internet era** (bulk phishing, 419 frauds, phishing kits), **(3) social media era** (OSINT, spear-phishing, BEC, smishing/vishing), **(4) AI era** (deepfake voice/video, generative-AI lures, MFA fatigue, adversary-in-the-middle proxy). Levers wahi hain — authority, urgency, trust.",
    "sections": [
      {
        "type": "definition",
        "title": "Evolution ka matlab",
        "kicker": "Definition",
        "body": "Har era mein attacker ne **wahi psychology** use ki, par **naya medium** jo logon ko trustworthy laga. Technology change hoti hai, insaan ka behaviour slow change hota hai — isliye social engineering kabhi purani nahi hoti.",
        "body2": "Exam answer ka structure: era → channel → technique → countermeasure. Example: 1990s → e-mail → bulk phishing → spam filter + awareness.",
        "chips": [
          "phone phreaking",
          "419 fraud",
          "spear-phishing",
          "deepfake",
          "MFA fatigue"
        ]
      },
      {
        "type": "comparison",
        "title": "Chaar eras",
        "kicker": "Comparison",
        "columns": [
          "Era",
          "Channel",
          "Technique",
          "Countermeasure"
        ],
        "rows": [
          {
            "label": "Pre-internet (before 1990s)",
            "values": [
              "telephone, in-person",
              "pretext calls, tailgating, dumpster diving",
              "physical security, caller verification"
            ]
          },
          {
            "label": "Internet era (1990s–2000s)",
            "values": [
              "e-mail, early web",
              "bulk phishing, 419 scams, fake lotteries",
              "spam filters, awareness training"
            ]
          },
          {
            "label": "Social media era (2008–2015)",
            "values": [
              "social profiles, mobile",
              "spear-phishing, BEC, smishing, vishing",
              "OSINT hygiene, DMARC, training"
            ]
          },
          {
            "label": "AI era (2016+)",
            "values": [
              "AI text/voice/video, SaaS kits",
              "deepfake, AiTM proxy, MFA fatigue",
              "phishing-resistant MFA, verification"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00e676",
          "#ff8800",
          "#ff5252"
        ]
      },
      {
        "type": "points",
        "title": "Era-wise milestones",
        "kicker": "Milestones",
        "points": [
          "**1970s:** phone phreaking — tones se free calls; operators ko pretext karke info nikalna.",
          "**1980s:** con artists aur fraudsters (Frank Abagnale jaisa) — trust hi exploit.",
          "**1990s:** AOL/ISP era, credit card fraud, early e-mail scams, \"Nigerian letter\" 419.",
          "**2000s:** phishing kits, fake banking pages, keyloggers ke saath combo.",
          "**2010s:** spear-phishing + LinkedIn OSINT, BEC payment fraud, ransomware ka entry vector.",
          "**2016–20:** vishing + caller ID spoofing, smishing, MFA fatigue (push bombing).",
          "**2020s:** deepfake voice/video, generative-AI mails, AiTM phishing proxies (Evilginx), QR phishing."
        ]
      },
      {
        "type": "cards",
        "title": "Era 4 (AI) ke naye hathiyaar",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "ai",
            "title": "Generative-AI lures",
            "body": "Perfect grammar, personalised tone, scale par unique mails."
          },
          {
            "icon": "eye",
            "title": "Deepfake voice",
            "body": "\"CEO ki awaaz\" mein payment instruction call."
          },
          {
            "icon": "monitor",
            "title": "Deepfake video",
            "body": "Video call par fake executive (live synthesis)."
          },
          {
            "icon": "lock",
            "title": "MFA fatigue",
            "body": "Bore hone tak push notifications bhejna, phir ek approve."
          },
          {
            "icon": "network",
            "title": "AiTM proxy",
            "body": "Real login page ke beech proxy — session cookie chori (Evilginx)."
          },
          {
            "icon": "phone",
            "title": "QR / quishing",
            "body": "QR code scan karwa kar credential ya payment."
          }
        ]
      },
      {
        "type": "example",
        "title": "Same psychology, naya medium",
        "kicker": "Example",
        "body": "1998: \"Aapne lottery jeeti hai, bank details bhejein\" — e-mail, kharab English. 2024: CEO ki **cloned voice** call, \"urgent vendor payment, board meeting mein hoon\". Dono mein lever same: **reward** aur **authority + urgency**. Isliye training mein technology ke bajaye **verification process** sikhaya jaata hai — callback, second approver, code share na karna."
      },
      {
        "type": "diagram",
        "title": "Conceptual evolution of social engineering",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-evolution",
        "caption": "Pre-internet (phone/physical) → internet era (bulk phishing) → social media era (OSINT, BEC, vishing) → AI era (deepfake, AiTM, MFA fatigue)"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Eras:** pre-internet → internet → social media → AI.",
          "**Channels:** phone → e-mail → social/mobile → AI voice/video + SaaS kits.",
          "**Psychology constant:** authority, urgency, trust, reward.",
          "**Countermeasures:** physical security → spam filter/awareness → DMARC/training → phishing-resistant MFA.",
          "**Exam line:** \"Technology badalti hai, insaan ka behaviour nahi — isliye social engineering rehti hai.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the conceptual evolution of social engineering in detail.",
        "answer": "Social engineering ka concept technology ke saath evolve hua — psychology wahi rahi.\n\n**1. Pre-internet era (before 1990s)**\n- **Phone phreaking** — tones se free calls.\n- **Pretext calls** to operators/switchboard for information.\n- **Physical** — tailgating, dumpster diving, impersonating technicians.\n- Countermeasure: physical security, caller verification.\n\n**2. Internet era (1990s–2000s)**\n- E-mail primary channel: bulk phishing, **419 / advance-fee fraud**, fake lottery, fake job offers.\n- **Phishing kits** ne attack ko sasta aur repeatable bana diya.\n- Countermeasure: spam filters, awareness training, antivirus.\n\n**3. Social media era (2008–2015)**\n- **OSINT** se personalisation: profiles, connections, check-ins.\n- **Spear-phishing, whaling, BEC** payment fraud.\n- Mobile: **smishing**, voice: **vishing** with caller ID spoofing.\n- Countermeasure: DMARC/SPF, social-media hygiene, training.\n\n**4. AI era (2016 onward)**\n- **Deepfake voice/video**, generative-AI written lures.\n- **MFA fatigue**, **adversary-in-the-middle (AiTM)** proxies stealing session cookies.\n- **Quishing** (QR phishing) aur credential-harvesting SaaS.\n- Hybrid work ne attack surface badha diya.\n- Countermeasure: **phishing-resistant MFA (FIDO2)**, verification callback, behaviour analytics.\n\n**Exam line:** \"Har era mein medium naya tha, lever purana — authority, urgency, trust, reward.\"\n\n**Diagram:** Refer to the Conceptual evolution of social engineering diagram."
      },
      {
        "question": "How has social media contributed to the rise of modern social engineering?",
        "answer": "Social media ne attacker ko **free OSINT aur believability** di.\n\n**1. Reconnaissance material**\n- Designation, team structure, manager names, projects.\n- Connections se \"mutual contact\" ka trust hook.\n\n**2. Personalisation**\n- Birthday, hobby, recent trip, event photos → credible pretext.\n- Spear-phishing ki success rate bulk phishing se zyada.\n\n**3. Impersonation**\n- Fake profile with real photo/name; recruiter ya vendor bankar approach.\n- Employee ki digital footprint se language style copy.\n\n**4. Channel expansion**\n- DM, WhatsApp, Telegram — e-mail filter ke bahar.\n- Fake job offers, investment/romance scams.\n\n**5. Timing**\n- Check-ins se pata chal jaata hai ki target travel par hai — urgency pretext perfect.\n\n**6. Organisational exposure**\n- Employees ke posts se internal tools, vendors, even badges/photos leak.\n\n**Defence:**\n1. Social-media policy — kya share karna hai.\n2. Privacy settings + role ki detail limit.\n3. Verification process (callback, ticket).\n4. OSINT self-audit (company ka external footprint dekho).\n5. Awareness: \"profile info hi attack ka raw material hai\".\n\n**Diagram:** Refer to the Conceptual evolution of social engineering diagram."
      },
      {
        "question": "Explain the technologies behind modern (AI-era) social engineering attacks.",
        "answer": "AI-era attacks scale aur realism dono badha dete hain.\n\n**1. Generative-AI text**\n- Perfect grammar, personalised tone, multiple variants.\n- Phishing ki \"kharab English\" wali red flag khatam.\n\n**2. Deepfake voice**\n- Kuch seconds ka sample kaafi; telefon par \"CEO/CFO\" ki awaaz.\n- Payment fraud aur credential requests.\n\n**3. Deepfake video**\n- Live video call par impersonation (synthesis + face swap).\n- Onboarding fake candidates, fake interviews.\n\n**4. MFA fatigue / push bombing**\n- Repeated push notifications, phir ek approve.\n- Help-desk pretext se MFA reset.\n\n**5. Adversary-in-the-middle (AiTM) proxy**\n- Real login page ke beech proxy; session cookie chori.\n- MFA ke baad bhi session hijack.\n\n**6. Quishing (QR phishing)**\n- QR code email/poster se mobile par phishing page — corporate proxy bypass.\n\n**7. Credential-harvesting SaaS**\n- Phishing-as-a-service kits, ready-made templates, analytics dashboards.\n\n**Defence:**\n- Phishing-resistant MFA (FIDO2/passkeys), number matching.\n- Verification callback for payments/credentials.\n- AI-generated content detection + training on new lures.\n- DNS/URL filtering, QR scanning policy, EDR + session anomaly detection.\n\n**Diagram:** Refer to the Conceptual evolution of social engineering diagram."
      }
    ]
  },
  {
    "id": "se-categories",
    "number": "5.3",
    "title": "Defining Social Engineering — Categories",
    "subtitle": "Human, computer aur socio-technical — classification",
    "icon": "layers",
    "accent": "#ff8800",
    "englishDefinition": "Social engineering can be defined as any act that influences a person to take an action that may or may not be in their best interest, and it is classified in several complementary ways. By medium, human-based attacks are executed face to face or by voice and rely entirely on the attacker's interpersonal skill - impersonation, pretexting, tailgating, shoulder surfing, dumpster diving, quid pro quo and vishing; computer-based attacks use technology as the delivery channel - phishing and spear-phishing, smishing, baiting with malicious media, scareware, fake pop-ups and watering-hole pages; socio-technical attacks combine both, for example a phishing mail followed by a vishing call, or an insider recruited online and then handled by phone. By target, attacks are individual (personal fraud, identity theft), organisational (BEC, espionage, insider recruitment) or mass-market (scam campaigns). By objective they are classified as information gathering, access acquisition, fraud and financial theft, disruption or sabotage, and reputational damage. By relationship they are either direct (attacker interacts with the victim) or indirect (attacker manipulates a third party, such as a help desk or a vendor, to reach the target). Each category has a different control: awareness and verification for human-based, filtering and authentication for computer-based, and process design plus monitoring for socio-technical and indirect attacks.",
    "intro": "Classification exam mein table banakar likho. **(1) Medium se:** human-based (face-to-face/voice), computer-based (mail, SMS, malicious media), **socio-technical** (dono ka mix). **(2) Target se:** individual, organisational, mass-market. **(3) Objective se:** information, access, fraud, sabotage. **(4) Relationship se:** direct ya indirect (help desk/vendor ke through).",
    "sections": [
      {
        "type": "definition",
        "title": "Definition aur classification ka logic",
        "kicker": "Definition",
        "body": "Social engineering ki working definition: **koi bhi act jo kisi vyakti ko aisa action lene par majboor kare jo uske hit mein ho ya na ho.** Classification isliye useful hai ki har category ka **control** alag hota hai.",
        "body2": "Ek hi incident multiple categories mein fit ho sakta hai — jaise BEC mail (computer-based) + follow-up call (human-based) = **socio-technical**.",
        "chips": [
          "human-based",
          "computer-based",
          "socio-technical",
          "direct",
          "indirect",
          "target-based"
        ]
      },
      {
        "type": "cards",
        "title": "Medium ke hisaab se categories",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "user",
            "title": "Human-based",
            "body": "Face-to-face ya voice: impersonation, pretexting, tailgating, shoulder surfing, dumpster diving, quid pro quo, vishing."
          },
          {
            "icon": "monitor",
            "title": "Computer-based",
            "body": "Mail/SMS/web: phishing, spear-phishing, smishing, baiting (USB/download), scareware, fake pop-ups, watering hole."
          },
          {
            "icon": "network",
            "title": "Socio-technical",
            "body": "Dono ka combination: mail + call, fake LinkedIn profile + WhatsApp, online recruit + phone handling."
          },
          {
            "icon": "folder",
            "title": "Physical",
            "body": "Office/building access: tailgating, badge cloning, fake technician, dumpster diving."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Category-wise attack aur control",
        "kicker": "Comparison",
        "columns": [
          "Category",
          "Examples",
          "Primary control"
        ],
        "rows": [
          {
            "label": "Human-based",
            "values": [
              "pretexting, vishing, impersonation",
              "awareness + verification callback"
            ]
          },
          {
            "label": "Computer-based",
            "values": [
              "phishing, smishing, baiting, scareware",
              "filtering, DMARC, EDR, MFA"
            ]
          },
          {
            "label": "Socio-technical",
            "values": [
              "mail + call combo, insider handling",
              "process design + monitoring"
            ]
          },
          {
            "label": "Physical",
            "values": [
              "tailgating, shoulder surfing",
              "badge, escort, screen privacy"
            ]
          },
          {
            "label": "Indirect",
            "values": [
              "help desk / vendor ke through",
              "authorisation matrix + caller ID"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#00d4ff",
          "#00e676",
          "#aa00ff",
          "#ff5252"
        ]
      },
      {
        "type": "points",
        "title": "Target aur objective ke hisaab se",
        "kicker": "Target & objective",
        "points": [
          "**Individual:** identity theft, OTP/credential chori, romance ya investment scam.",
          "**Organisational:** BEC, data theft, insider recruitment, espionage.",
          "**Mass-market:** bulk scam campaigns, fake lottery, refund fraud.",
          "**Objective — information gathering:** OSINT, pretext calls se details.",
          "**Objective — access:** credentials, MFA code, VPN/remote access.",
          "**Objective — fraud/financial:** payment redirect, invoice fraud.",
          "**Objective — disruption/sabotage:** insider se malware ya data destroy."
        ]
      },
      {
        "type": "example",
        "title": "Ek incident, teen categories",
        "kicker": "Example",
        "body": "Attacker ne pehle HR employee ko LinkedIn par friend request bheji (**human-based recon**), phir fake onboarding portal ka mail bheja (**computer-based phishing**), aur jab employee ne reply kiya to call kar ke OTP liya (**human-based / vishing**) — overall attack **socio-technical** hai. Isi liye defence bhi layered chahiye: training + filter + process."
      },
      {
        "type": "diagram",
        "title": "Categories of social engineering",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-categories",
        "caption": "Human-based, computer-based, socio-technical and physical categories — with target-based and objective-based classification"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Definition:** kisi ko aisa action lene par influence karna jo uske hit mein ho ya na ho.",
          "**Medium:** human-based, computer-based, socio-technical, physical.",
          "**Target:** individual, organisational, mass-market.",
          "**Objective:** information, access, fraud, disruption.",
          "**Relationship:** direct ya indirect (help desk/vendor)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define social engineering and explain its categories.",
        "answer": "**Definition:** Social engineering koi bhi act hai jo kisi person ko aisa action lene par influence karta hai jo uske best interest mein ho ya na ho — typically information ya access nikalne ke liye.\n\n**1. Medium ke hisaab se**\n\n| Category | Examples |\n|---|---|\n| Human-based | impersonation, pretexting, vishing, tailgating, shoulder surfing, dumpster diving, quid pro quo |\n| Computer-based | phishing, spear-phishing, smishing, baiting (USB/download), scareware, fake pop-ups, watering hole |\n| Socio-technical | mail + call combo, fake profile + chat, online recruit + phone handling |\n| Physical | badge cloning, fake technician, trash se documents |\n\n**2. Target ke hisaab se**\n- Individual (identity theft, OTP fraud)\n- Organisational (BEC, espionage, insider recruitment)\n- Mass-market (lottery, refund scams)\n\n**3. Objective ke hisaab se**\n- Information gathering (OSINT)\n- Access acquisition (credentials, MFA)\n- Fraud/financial theft\n- Disruption/sabotage\n\n**4. Relationship ke hisaab se**\n- **Direct** — attacker victim se seedha interact karta hai.\n- **Indirect** — third party (help desk, vendor) ke through target tak.\n\n**Controls:** awareness + verification (human), filtering + MFA (computer), process design + monitoring (socio-technical/indirect).\n\n**Diagram:** Refer to the Categories of social engineering diagram."
      },
      {
        "question": "Differentiate human-based, computer-based and socio-technical social engineering.",
        "answer": "Teeno ka base psychology same hai, delivery alag.\n\n| Point | Human-based | Computer-based | Socio-technical |\n|---|---|---|---|\n| Medium | voice, face-to-face | mail, SMS, web, media | dono ka combination |\n| Skill | persuasion, acting | tooling, templates, infrastructure | planning + coordination |\n| Examples | vishing, pretexting, tailgating | phishing, smishing, baiting | mail + call, fake profile + WhatsApp |\n| Scale | low (one-to-one) | high (mass) | medium (targeted) |\n| Evidence | call logs, CCTV, witness | mail headers, URLs, logs | mixed |\n| Detection | awareness, callback | filters, DMARC, EDR | monitoring + process |\n| Cost to attacker | low | low per victim, infra needed | medium |\n\n**Human-based:** attacker ka personality hi tool hai — authority ya trust se info nikalna.\n\n**Computer-based:** technology channel hai; template + landing page + kit se hazaron targets.\n\n**Socio-technical:** modern attack ka default — pehle mail se interest, phir call se confirmation, ya fake LinkedIn profile se approach aur phir WhatsApp par document.\n\n**Exam line:** \"Human-based mein insaan bolta hai, computer-based mein system bolta hai, socio-technical mein dono mil kar bolte hain.\"\n\n**Diagram:** Refer to the Categories of social engineering diagram."
      },
      {
        "question": "Explain direct and indirect social engineering attacks with examples.",
        "answer": "**Direct attack:** attacker victim se seedha interact karta hai — mail, call, chat ya in-person.\n\n**Examples:**\n- Attacker HR ko call karke employee ki salary detail maange.\n- Employee ko fake IT support ka mail.\n- Reception par fake technician entry.\n\n**Indirect attack:** attacker **third party** ko manipulate karta hai jo target tak pahunch ka rasta hai — help desk, vendor, colleague, family member.\n\n**Examples:**\n- **Help-desk attack:** attacker employee ka naam le kar help desk se password reset karwata hai.\n- **Vendor attack:** supplier ke mailbox se invoice change karwana (supply-chain).\n- **Colleague pretext:** \"Rohit ne bola tha file bhejne ko\" — teammate ke through access.\n- **Family/relationship:** target ke rishtedar se information.\n\n**Indirect kyun khatarnak:**\n1. Victim ko lagta hai wo kisi trusted intermediary se baat kar raha hai.\n2. Help desk ke paas verification pressure hota hai (SLA).\n3. Logs mein legitimate dikhta hai.\n4. Attribution mushkil.\n\n**Controls:**\n- Caller identity verification (employee ID, manager confirm).\n- Password reset policy — out-of-band verification.\n- Vendor due diligence + invoice change process.\n- Awareness of \"colleague ne bola\" social proof.\n\n**Diagram:** Refer to the Categories of social engineering diagram."
      }
    ]
  },
  {
    "id": "se-phases",
    "number": "5.4",
    "title": "Phases of a Social Engineering Attack",
    "subtitle": "Target se exit tak — 6 phases ka cycle",
    "icon": "flow",
    "accent": "#ffd600",
    "englishDefinition": "A social engineering attack follows a predictable sequence of phases. First comes target identification: the attacker decides what is needed (credentials, payment, access), who can provide it and which channel reaches them. Second is information gathering or reconnaissance, using open sources - social media, company website, job postings, breach data, vendor lists, discarded documents - and sometimes direct elicitation to learn names, roles, tools, schedules and relationships. Third is pretext development and relationship building: a believable cover story is constructed and trust is established, often with small favours and consistent behaviour. Fourth is exploitation, where the attacker introduces the request - clicking a link, opening an attachment, reading out an OTP, approving a push, transferring money - using authority, urgency, fear or reward to suppress verification. Fifth is execution, where the sought outcome is achieved: credentials captured, access obtained, malware delivered, payment made, data copied. Sixth is exit and cover-up: the attacker completes the interaction without raising suspicion, removes artefacts where possible, and maintains access through persistence. Real attacks loop back - if one pretext fails, the attacker returns to reconnaissance with new information. Understanding the phases matters because defence can be placed at any of them, and the cheapest interventions are earlier: reducing OSINT, teaching verification in the exploitation phase, and monitoring the execution phase.",
    "intro": "Attack ka pattern predictable hai — **6 phases**: (1) **target identification**, (2) **information gathering / recon**, (3) **pretext + relationship building**, (4) **exploitation** (request + trigger), (5) **execution** (info/access/payment), (6) **exit aur cover-up**. Real attack **loop** karta hai — ek pretext fail ho to attacker naye information ke saath recon par wapas jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Phases ka dhancha",
        "kicker": "Definition",
        "body": "Har phase ka ek **output** hota hai jo agle phase ka input banta hai: target list → information → trust → hook → result → clean exit. Defence ko kisi bhi phase mein lagaya ja sakta hai.",
        "body2": "Sabse sasta defence **phase 2** (OSINT kam karna) aur **phase 4** (verification process) par hota hai.",
        "chips": [
          "reconnaissance",
          "pretext",
          "trust building",
          "hook",
          "execution",
          "cover-up"
        ]
      },
      {
        "type": "cards",
        "title": "Chhah phases",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "target",
            "title": "1. Target identification",
            "body": "Kya chahiye (credential, paisa, access), kaun de sakta hai, channel kaun sa hai."
          },
          {
            "icon": "search",
            "title": "2. Information gathering",
            "body": "OSINT: social media, website, job ads, breach data, vendor lists, discarded docs."
          },
          {
            "icon": "user",
            "title": "3. Pretext + trust",
            "body": "Believable story banao, chhoti help se rapport, consistent behaviour."
          },
          {
            "icon": "zap",
            "title": "4. Exploitation",
            "body": "Request rakho — link click, OTP read, push approve, payment; urgency/fear se verification dabao."
          },
          {
            "icon": "check",
            "title": "5. Execution",
            "body": "Outcome achieve: credential capture, access, malware delivery, payment, data copy."
          },
          {
            "icon": "eye",
            "title": "6. Exit + cover-up",
            "body": "Shak ke bina nikalna, artefacts hataana, persistence maintain karna."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Phases aur defence options",
        "kicker": "Comparison",
        "columns": [
          "Phase",
          "Attacker ka action",
          "Defence"
        ],
        "rows": [
          {
            "label": "1. Target",
            "values": [
              "scope decide karna",
              "asset inventory, high-risk role list"
            ]
          },
          {
            "label": "2. Recon",
            "values": [
              "OSINT, elicitation",
              "social-media policy, data minimisation"
            ]
          },
          {
            "label": "3. Pretext",
            "values": [
              "story + rapport",
              "callback verification, caller ID policy"
            ]
          },
          {
            "label": "4. Exploitation",
            "values": [
              "request + pressure",
              "awareness, pause-and-verify, MFA hygiene"
            ]
          },
          {
            "label": "5. Execution",
            "values": [
              "credentials, access, payment",
              "EDR/SIEM, DLP, payment approval"
            ]
          },
          {
            "label": "6. Exit",
            "values": [
              "clean-up, persistence",
              "log monitoring, access review"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00e676",
          "#ffd600",
          "#ff8800",
          "#ff5252",
          "#aa00ff"
        ]
      },
      {
        "type": "example",
        "title": "Ek BEC attack phases mein",
        "kicker": "Example",
        "body": "**Phase 1:** finance team target, payment authority kaun. **Phase 2:** LinkedIn se CFO ka naam, vendor ka naam, recent deal. **Phase 3:** CFO ke naam se mail thread, same signature style. **Phase 4:** \"vendor bank details change, aaj payment karo, board meeting mein hoon\" — urgency. **Phase 5:** payment attacker ke account mein. **Phase 6:** mails delete, forwarding rule set. Defence: payment ke liye **callback + second approver** (phase 4) aur bank-detail change workflow (phase 5)."
      },
      {
        "type": "points",
        "title": "Phases ke practical signals",
        "kicker": "Signals",
        "points": [
          "**Recon:** unexpected questions, profile views, HR ko vendor list ki enquiry.",
          "**Pretext:** naya contact, thodi si wrong detail, jo baar baar correct hoti hai.",
          "**Exploitation:** urgency, secrecy (\"kisi ko na batao\"), authority, gift/refund.",
          "**Execution:** MFA prompt aana, login from new location, payment detail change.",
          "**Exit:** mail forwarding rule, delegated access, \"sirf main handle karunga\"."
        ]
      },
      {
        "type": "diagram",
        "title": "Phases of a social engineering attack",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-phases",
        "caption": "Target identification → information gathering → pretext and trust building → exploitation (hook) → execution → exit and cover-up, with a feedback loop back to recon"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**6 phases:** target → recon → pretext/trust → exploitation → execution → exit.",
          "**Loop:** fail hone par attacker recon par wapas jaata hai.",
          "**Defence mapping:** har phase par ek control — awareness, callback, monitoring.",
          "**Cheapest controls:** OSINT kam karna + verification process.",
          "**Signals:** urgency, secrecy, MFA prompts, payment detail change."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the phases of a social engineering attack in detail.",
        "answer": "Social engineering attack ek sequence follow karti hai.\n\n**1. Target identification**\n- Kya chahiye (credentials/payment/access), kaun de sakta hai, kaunsa channel.\n\n**2. Information gathering (reconnaissance)**\n- OSINT: LinkedIn, company website, job ads, breach data, vendor lists.\n- Elicitation: casual conversation se detail nikalna.\n- Discarded documents (dumpster diving).\n\n**3. Pretext development and trust building**\n- Believable cover story; chhoti help se rapport; consistent persona.\n\n**4. Exploitation**\n- Request: link click, attachment open, OTP/password batao, push approve, payment.\n- Push: authority, urgency, fear, reward.\n\n**5. Execution**\n- Credential capture, access obtain, malware delivery, payment, data copy.\n\n**6. Exit and cover-up**\n- Suspicion ke bina exit; forwarding rule ya persistence; artefacts delete.\n\n**Loop:** pretext fail ho to naye information ke saath phase 2 par wapsi.\n\n**Defence mapping:**\n\n| Phase | Control |\n|---|---|\n| 1 | high-risk role list, asset inventory |\n| 2 | social-media policy, data minimisation |\n| 3 | callback verification |\n| 4 | awareness, pause-and-verify, MFA hygiene |\n| 5 | EDR/SIEM, DLP, payment approvals |\n| 6 | log monitoring, access review |\n\n**Diagram:** Refer to the Phases of a social engineering attack diagram."
      },
      {
        "question": "Explain reconnaissance and pretexting with examples.",
        "answer": "**Reconnaissance:** attack se pehle target ki information jama karna.\n**Pretexting:** us information se ek believable story banana.\n\n**Reconnaissance ke sources:**\n1. Social media (role, team, projects, travel).\n2. Company website (org chart, vendors, offices).\n3. Job postings (tools, technologies — \"SAP, VPN, Okta\").\n4. Breach data / paste sites (email format, old passwords).\n5. DNS/WHOIS, certificate transparency, GitHub.\n6. Physical: discarded documents, reception staff se chat.\n\n**Pretexting ke elements:**\n- **Persona:** kaun hoon (IT, vendor, auditor, delivery).\n- **Story:** kyun contact kar raha hoon.\n- **Proof:** employee ID, ticket number, mail signature.\n- **Urgency:** abhi karna hai.\n- **Exit story:** agar sawal poochha jaye to jawab.\n\n**Example:** Attacker ne job ad se \"Okta + Jira\" dekha, LinkedIn se naya developer dhoondha. Pretext: \"Main onboarding support se hoon, aapka Okta invite expire ho gaya, ye link se re-register karein.\" Naya employee ne link khola aur password daal diya.\n\n**Red flags:** email domain mismatch, ticket number verify na ho, urgency, credentials maangna.\n\n**Defence:** callback known number par, ticket portal se verify, \"never share OTP\" rule.\n\n**Diagram:** Refer to the Phases of a social engineering attack diagram."
      },
      {
        "question": "How can defence be placed at each phase of a social engineering attack?",
        "answer": "Defence layered honi chahiye — har phase par ek control.\n\n**Phase 1 — Target identification**\n- Critical role list (finance, HR, admins) + asset inventory.\n- Third-party/vendor register.\n\n**Phase 2 — Reconnaissance**\n- Social-media policy (kyā share karna hai).\n- Data minimisation: org chart public na ho; job ads mein tech stack na likho.\n- OSINT self-audit; email format guessing se bachao (catch-all removed).\n\n**Phase 3 — Pretext/trust**\n- **Callback verification** — known number par.\n- Ticket-based support verification (help desk).\n- Visitor verification + escort.\n\n**Phase 4 — Exploitation**\n- Awareness training + phishing simulation.\n- \"Pause and verify\" rule: urgency aaye to ruk jao.\n- Never share OTP/MFA code; number matching MFA.\n\n**Phase 5 — Execution**\n- SIEM/EDR alerts (new device, impossible travel).\n- DLP for data movement; payment dual approval.\n- Least privilege + segregation of duties.\n\n**Phase 6 — Exit/cover-up**\n- Mailbox rule monitoring, forwarding alerts.\n- Access reviews, log retention, anomaly detection.\n\n**Exam line:** \"Attack linear nahi hoti, loop karti hai — isliye defence bhi har loop par chahiye.\"\n\n**Diagram:** Refer to the Phases of a social engineering attack diagram."
      }
    ]
  },
  {
    "id": "se-spiral",
    "number": "5.5",
    "title": "Attack Spiral Model",
    "subtitle": "Linear nahi, spiral — har chakkar mein gehra access",
    "icon": "cycle",
    "accent": "#aa00ff",
    "englishDefinition": "The attack spiral model describes a social engineering attack not as a straight line but as a spiral: the attacker repeats the same cycle - gather information, build trust, exploit, execute - and each completed revolution leaves the attacker with more knowledge, more trust and deeper access than the last, while the circle of victims widens from one person to a team, then to a department and finally to the organisation. The centre of the spiral is the ultimate target (the credential that unlocks the crown jewels, the payment authority, the administrator). Two features distinguish the model from a linear kill chain: iteration, because a failed pretext does not end the attack but returns the attacker to reconnaissance with new facts, and escalation, because the output of each loop becomes the input of the next - the name learned in loop one becomes the pretext in loop two, and the low-privilege account obtained in loop two becomes the foothold for lateral movement in loop three. The model also explains why partial successes are dangerous: an apparently harmless reconnaissance call or a leaked org chart is a full revolution of the spiral, not a 'near miss'. For defence, the model argues for controls that break the loop at every radius - minimise public information, verify identity out of band, segment privilege, and monitor for the small escalations that precede the final strike.",
    "intro": "**Attack spiral model**: attack ko seedhi line ki tarah nahi, **spiral** ki tarah dekhta hai. Attacker same cycle (recon → trust → exploit → execute) **baar-baar** repeat karta hai; har chakkar ke baad uske paas **zyada information, zyada trust aur gehra access** hota hai. Centre mein ultimate target (admin credential, payment authority). Do khaas baatein: **iteration** (fail hone par recon par wapsi) aur **escalation** (har loop ka output next loop ka input).",
    "sections": [
      {
        "type": "definition",
        "title": "Spiral model kya hai",
        "kicker": "Definition",
        "body": "Kill chain **linear** hoti hai (ek baar tootne par ruk jaati hai). Spiral model kehta hai social engineering **iterative** hoti hai — attacker outer ring (public info) se shuru karke inner ring (team, department, organisation, phir core credential) tak ghussta hai.",
        "body2": "Isliye \"chhoti si\" reconnaissance call bhi **poora chakkar** hai — 'near miss' nahi. Defence ko har radius par loop todna hota hai.",
        "chips": [
          "iteration",
          "escalation",
          "concentric rings",
          "feedback loop",
          "core target"
        ]
      },
      {
        "type": "cards",
        "title": "Spiral ke elements",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "target",
            "title": "Core (centre)",
            "body": "Ultimate target — admin credential, payment authority, crown-jewel data."
          },
          {
            "icon": "layers",
            "title": "Concentric rings",
            "body": "Individual → team → department → organisation → core."
          },
          {
            "icon": "refresh",
            "title": "One revolution",
            "body": "Recon → trust → exploit → execute ka ek cycle."
          },
          {
            "icon": "arrow",
            "title": "Escalation",
            "body": "Har loop ke baad zyada access — low-priv account se lateral movement."
          },
          {
            "icon": "loop",
            "title": "Feedback",
            "body": "Fail hone par naye facts ke saath recon par wapsi."
          },
          {
            "icon": "clock",
            "title": "Time",
            "body": "Dwell time badhta hai — mahine bhi lag sakte hain (APT style)."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Spiral model vs linear kill chain",
        "kicker": "Comparison",
        "columns": [
          "Spiral model",
          "Linear kill chain"
        ],
        "rows": [
          {
            "label": "Shape",
            "values": [
              "iterative spiral, widening rings",
              "straight line of stages"
            ]
          },
          {
            "label": "Failure",
            "values": [
              "recon par wapsi, naya pretext",
              "chain ruk jaati hai"
            ]
          },
          {
            "label": "Small wins",
            "values": [
              "recon bhi ek chakkar",
              "pre-exploitation maana jaata hai"
            ]
          },
          {
            "label": "Access",
            "values": [
              "har loop mein gehra",
              "ek baar mein milta hai"
            ]
          },
          {
            "label": "Defence",
            "values": [
              "har radius par loop todo",
              "ek stage par rok do"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "social + socio-technical, APT",
              "malware delivery chains"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff"
        ]
      },
      {
        "type": "example",
        "title": "Spiral ka practical example",
        "kicker": "Example",
        "body": "**Loop 1:** reception ko call — \"vendor ka contact chahiye\". **Loop 2:** us vendor ke naam se finance ko mail — \"invoice update\". **Loop 3:** finance ke reply se payment process aur approver ka naam. **Loop 4:** approver ke naam se final mail — bank detail change. Har loop ne agle loop ka raw material diya — koi bhi loop akela 'harmless' nahi tha, par milkar attack complete hua."
      },
      {
        "type": "points",
        "title": "Spiral ko todne ke controls",
        "kicker": "Break the loop",
        "points": [
          "**Core:** strong authentication (FIDO2), dual approval, encryption, least privilege.",
          "**Rings:** role-based access, need-to-know, visitor escort, clean-desk policy.",
          "**Revolution:** callback verification, ticket numbers, anti-phishing filter + awareness.",
          "**Escalation:** privilege access management, session monitoring, anomaly alerts.",
          "**Feedback:** OSINT minimisation, breach-data monitoring (own credentials).",
          "**Time:** periodic access review, session expiry, joiners-movers-leavers process."
        ]
      },
      {
        "type": "diagram",
        "title": "Attack spiral model",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-spiral",
        "caption": "Concentric rings (individual → team → department → organisation) with a spiral path of repeated recon → trust → exploit → execute cycles leading to the core target"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Spiral model:** attack iterative hai, linear nahi.",
          "**Cycle:** recon → trust → exploit → execute, baar-baar.",
          "**Rings:** individual → team → department → organisation → core asset.",
          "**Do features:** iteration (failure par wapsi) aur escalation (har loop mein gehra access).",
          "**Defence:** har radius par loop todo — verification, MFA, least privilege, monitoring."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the attack spiral model of social engineering.",
        "answer": "**Attack spiral model:** social engineering attack ko spiral ke roop mein dikhata hai — attacker same cycle baar-baar repeat karta hai aur har chakkar mein gehra access paata hai.\n\n**Structure:**\n1. **Core (centre)** — ultimate target: admin credential, payment authority, crown-jewel data.\n2. **Concentric rings** — individual → team → department → organisation.\n3. **Revolution** — ek poora cycle: reconnaissance → trust building → exploitation → execution.\n4. **Spiral path** — attacker outer ring se inner ring tak move karta hai.\n\n**Do defining features:**\n- **Iteration:** pretext fail ho to attack khatam nahi — attacker naye facts ke saath reconnaissance par wapas jaata hai.\n- **Escalation:** har loop ka output next loop ka input — loop 1 ka naam loop 2 ka pretext; loop 2 ka low-priv account loop 3 ka foothold.\n\n**Kill chain se difference:**\n\n| Point | Spiral | Kill chain |\n|---|---|---|\n| Shape | iterative spiral | linear stages |\n| Failure | recon par wapsi | chain rukti hai |\n| Recon | poora chakkar | pre-exploitation |\n| Access | har loop mein gehra | ek baar |\n\n**Implication:** \"chhoti\" recon call bhi attack ka hissa hai — near miss nahi. Isliye defence **har radius** par chahiye: OSINT minimisation, callback verification, least privilege, MFA, monitoring.\n\n**Diagram:** Refer to the Attack spiral model diagram."
      },
      {
        "question": "How does the attack spiral model differ from the traditional kill chain? Which is better for social engineering?",
        "answer": "Dono models attack ko samajhne ke tools hain, par assumption alag hai.\n\n| Point | Attack spiral model | Cyber kill chain |\n|---|---|---|\n| Assumption | attacker iterate karta hai | stages linear hain |\n| Failure handling | recon par wapsi | chain restart from scratch |\n| Recon | attack ka poora hissa | pehla stage |\n| Escalation | har loop mein access badhta | ek successful stage ke baad |\n| Time | long dwell, months | usually faster |\n| Defence focus | har radius par loop todo | ek stage par rok do |\n| Best fit | social/socio-technical, insider, APT | malware delivery, exploit chains |\n\n**Kill chain ki limitation:** social engineering mein \"ek stage fail = attack over\" galat hai — attacker adoosre pretext ke saath wapas aata hai, isliye linear model underestimate karta hai.\n\n**Spiral model ki strength:** iterative nature, chhote wins (recon bhi chakkar), aur concentric rings se **scope** dikhta hai (ek employee se poora organisation).\n\n**Better:** defence ke liye spiral model zyada useful — kyunki control **har radius** par design karna padta hai, na ki sirf ek choke point par.\n\n**Diagram:** Refer to the Attack spiral model diagram."
      },
      {
        "question": "How can an organisation break the attack spiral at each radius?",
        "answer": "Har radius par ek control — loop tootne chahiye.\n\n**Core (crown jewels)**\n- FIDO2/passkeys, PAM (privileged access management), encryption, dual approval for payments.\n\n**Organisation ring**\n- Least privilege + RBAC, need-to-know, access reviews, DLP, SIEM monitoring.\n\n**Department ring**\n- Segregation of duties, maker-checker for bank changes, vendor register + due diligence.\n\n**Team ring**\n- Clean desk, screen lock, \"verify before act\" culture, phishing simulations.\n\n**Individual ring**\n- Awareness training, social-media policy, reporting button, never share OTP/MFA.\n\n**Revolution-level (cycle) controls**\n1. **Recon:** OSINT minimisation, org chart private, job ads generic.\n2. **Trust:** callback verification on known number, ticket-based support.\n3. **Exploitation:** pause-and-verify, urgency = red flag, number matching MFA.\n4. **Execution:** EDR/SIEM alerts, payment approval, session anomaly detection.\n5. **Escalation:** privilege change monitoring, new device alerts.\n\n**Exam line:** \"Spiral ko ek jagah se nahi, har radius se todna padta hai.\"\n\n**Diagram:** Refer to the Attack spiral model diagram."
      }
    ]
  },
  {
    "id": "se-vendors",
    "number": "5.6",
    "title": "Attack Vendors — Social and Socio-Technical Approach",
    "subtitle": "Criminal supply chain aur do approach ka farq",
    "icon": "briefcase",
    "accent": "#00bcd4",
    "englishDefinition": "Attack vendors are the criminal service providers that industrialise social engineering, and the term also describes how attacks are aimed at an organisation's vendors. On the supply side, the social-engineering economy sells phishing kits and phishing-as-a-service platforms, credential and session-stealing proxies, SIM-swap and caller-ID spoofing services, voice and video deepfake generation, ready-made pretext scripts and call-centre 'vishing' operators, and initial-access brokers who sell a foothold obtained through a persuaded employee. On the demand side, an organisation's own vendors are a favoured route because partners, suppliers and IT service providers hold trust, shared mailboxes and network paths: attackers impersonate a vendor (invoice change), compromise the vendor's mailbox, or exploit a vendor's help desk. Two execution approaches are distinguished. The social approach relies purely on human interaction and persuasion - a call, a meeting, a face-to-face pretext - and leaves little technical trace. The socio-technical approach blends the human and the technical: a phishing mail with a credential-harvesting page, a vishing call that walks the victim through installing remote-support software, a fake profile used to deliver a malicious document, or an insider recruited online and then technically equipped. The socio-technical approach dominates modern incidents because it scales, can be automated, and can leave plausible technical evidence that misleads investigators.",
    "intro": "**Attack vendors** do matlab hai: (1) **criminal supply chain** — phishing-as-a-service kits, SIM-swap, deepfake services, initial-access brokers, vishing call centres; aur (2) **aapke apne vendors** — supplier/partner ke through attack (invoice fraud, vendor mailbox compromise). Do approach: **social** (sirf insaan se baat, technical trace kam) aur **socio-technical** (insaan + technology: phishing page, remote-support software, malicious document). Aaj **socio-technical** hi dominate karta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Attack vendors ka concept",
        "kicker": "Definition",
        "body": "Attack ko ab **individual hacker** nahi, **industry** chalati hai. Vendors specialised services bechte hain — jaise legitimate SaaS. Isliye ek script kiddie bhi advanced attack chala sakta hai.",
        "body2": "Doosra matlab organisational hai: attacker aapke **supply chain** ko target karta hai, kyunki vendor ke paas aapka trust, shared mailbox aur network access hota hai.",
        "chips": [
          "phishing-as-a-service",
          "initial access broker",
          "SIM swap",
          "vendor fraud",
          "supply chain"
        ]
      },
      {
        "type": "cards",
        "title": "Criminal supply chain ke services",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "folder",
            "title": "Phishing kits / PhaaS",
            "body": "Ready templates, hosting, credential harvesting page, analytics dashboard."
          },
          {
            "icon": "lock",
            "title": "AiTM proxy kits",
            "body": "Real login page ke beech proxy — session cookie chori (MFA bypass)."
          },
          {
            "icon": "phone",
            "title": "Vishing call centres",
            "body": "Professional operators, scripts, caller-ID spoofing."
          },
          {
            "icon": "ai",
            "title": "Deepfake services",
            "body": "Voice cloning, video synthesis for executive impersonation."
          },
          {
            "icon": "device",
            "title": "SIM-swap services",
            "body": "OTP interception ke liye number port/sim hijack."
          },
          {
            "icon": "target",
            "title": "Initial access brokers",
            "body": "Compromised credentials/VPN access ko sell karna."
          },
          {
            "icon": "users",
            "title": "Insider recruitment",
            "body": "Employee ko paise de kar data/access lena."
          },
          {
            "icon": "warehouse",
            "title": "Data & breach markets",
            "body": "Leaked databases, email lists, org charts."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Social approach vs socio-technical approach",
        "kicker": "Comparison",
        "columns": [
          "Social approach",
          "Socio-technical approach"
        ],
        "rows": [
          {
            "label": "Means",
            "values": [
              "sirf human interaction",
              "human + technology dono"
            ]
          },
          {
            "label": "Examples",
            "values": [
              "pretext call, in-person impersonation",
              "phishing page + vishing, remote tool install"
            ]
          },
          {
            "label": "Traces",
            "values": [
              "bahut kam (call log, CCTV)",
              "mail headers, URLs, logs, tool install"
            ]
          },
          {
            "label": "Scale",
            "values": [
              "low, one-to-one",
              "high, automatable"
            ]
          },
          {
            "label": "Cost",
            "values": [
              "time aur skill",
              "kit + infrastructure"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "help desk, reception, physical",
              "large campaigns, credential theft"
            ]
          }
        ],
        "columnColors": [
          "#00bcd4",
          "#ff8800"
        ]
      },
      {
        "type": "points",
        "title": "Vendor-based attack ke patterns",
        "kicker": "Vendor patterns",
        "points": [
          "**Invoice / bank-detail fraud:** vendor ke naam se mail, bank details change.",
          "**Vendor mailbox compromise:** supplier ke account se real thread hijack.",
          "**Vendor help desk:** vendor ke support se aapke employee ka password reset karwana.",
          "**Shared infrastructure:** vendor ke VPN/remote tool se aapke network mein entry.",
          "**Software supply chain:** trojanised update ya malicious package (technical, par trust-based).",
          "**Due diligence failure:** naye vendor ka KYC na hona — fake company, fake bank account."
        ]
      },
      {
        "type": "example",
        "title": "Vendor fraud ka realistic chain",
        "kicker": "Example",
        "body": "Attacker ne supplier ki website se apna domain copy kiya (`supplier-billing.com`), purchase team ko mail bheja: \"bank details update ho gaye hain, naya invoice attached\". Finance ne PDF dekha — letterhead same, PO number sahi (pichhle mail se copy). Payment naye account mein chala gaya. Yahaan **vendor supply chain** (fake invoice service) + **socio-technical** approach (mail + fake document) dono hain. Defence: vendor master data change ke liye callback + dual approval."
      },
      {
        "type": "diagram",
        "title": "Attack vendors — social aur socio-technical approach",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-vendors",
        "caption": "Criminal supply chain (PhaaS, AiTM kits, vishing desks, deepfakes, access brokers) and vendor-based attacks, executed via social or socio-technical approaches"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Attack vendors:** criminal service providers + aapke supply-chain partners.",
          "**Services:** PhaaS, AiTM proxy, vishing desk, deepfake, SIM-swap, access broker.",
          "**Social approach:** sirf human persuasion, traces kam.",
          "**Socio-technical:** human + technology — modern default, scalable.",
          "**Vendor fraud defence:** callback + dual approval + vendor due diligence."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the concept of attack vendors in social engineering with examples.",
        "answer": "**Attack vendors:** social engineering ko industrialise karne wale criminal service providers — aur doosre arth mein, aapke apne vendor jo attack ka rasta ban jaate hain.\n\n**1. Criminal supply chain (services for sale)**\n- **Phishing-as-a-service:** templates, hosting, credential pages, dashboards.\n- **AiTM proxy kits:** session cookie theft se MFA bypass.\n- **Vishing call centres:** trained operators, scripts, caller-ID spoofing.\n- **Deepfake services:** voice/video cloning.\n- **SIM-swap services:** OTP interception.\n- **Initial access brokers:** compromised VPN/credentials bechna.\n- **Breach data markets:** email lists, org charts.\n\n**2. Vendor-based attacks (supply chain)**\n- Invoice/bank-detail fraud in vendor's name.\n- Vendor mailbox compromise → thread hijack.\n- Vendor help desk se password reset.\n- Vendor VPN/remote tool se aapke network mein entry.\n- Trojanised software update.\n\n**Impact:** attack sasta, scalable aur professional ban jaata hai; attribution mushkil; chhota attacker bhi advanced campaign chala sakta hai.\n\n**Defence:** vendor due diligence, bank-detail change ka callback + dual approval, contract clauses, third-party risk assessment, mailbox security (DMARC), least-privilege vendor access.\n\n**Diagram:** Refer to the Attack vendors — social aur socio-technical approach diagram."
      },
      {
        "question": "Differentiate the social approach and the socio-technical approach to social engineering.",
        "answer": "Dono ka base human persuasion hai, par technical element ka use alag hai.\n\n| Point | Social approach | Socio-technical approach |\n|---|---|---|\n| Means | human interaction only | human + technology |\n| Examples | pretext call, fake auditor visit, reception elicitation | phishing mail + fake page, vishing + remote tool install |\n| Traces | minimal (call log, CCTV) | mail headers, URL, logs, software install |\n| Scale | one-to-one | mass + automated |\n| Cost | skill + time | kit + infrastructure |\n| Detection | awareness + callback | filtering + EDR + awareness |\n| Typical use | help desk, physical entry, information gathering | credential theft, BEC, malware delivery |\n\n**Social approach ka fayda (attacker ke liye):** koi technical signature nahi — detection ke liye human reporting chahiye.\n\n**Socio-technical ka fayda:** scale, repeatability, aur plausible technical evidence jo investigation ko mislead kare.\n\n**Exam line:** \"Social approach insaan ko target karta hai, socio-technical insaan ko technology ke saath target karta hai.\"\n\n**Diagram:** Refer to the Attack vendors — social aur socio-technical approach diagram."
      },
      {
        "question": "How are organisations attacked through their vendors, and how can vendor risk be reduced?",
        "answer": "Vendors attractive targets hain kyunki unke paas **trust, shared mailbox aur network access** hota hai.\n\n**Attack patterns:**\n1. **Invoice fraud** — vendor ke naam se mail, naye bank details.\n2. **Mailbox compromise** — supplier ke account se real thread hijack.\n3. **Help desk abuse** — vendor support se employee ka password reset.\n4. **Shared access** — vendor VPN/RMM tool se entry.\n5. **Software supply chain** — trojanised update/package.\n6. **Fake vendor onboarding** — KYC na hone se fake company register.\n\n**Risk reduction:**\n1. **Due diligence** — vendor KYC, security questionnaire, certifications.\n2. **Contract clauses** — breach notification, security requirements, right to audit.\n3. **Bank-detail change control** — callback known number + dual approval.\n4. **Separate credentials** — vendor ke liye alag accounts, least privilege, time-bound access.\n5. **Mailbox hardening** — DMARC/SPF/DKIM, external-sender banner, lookalike domain monitoring.\n6. **Access review** — vendor access quarterly; offboarding turant.\n7. **Monitoring** — vendor RMM sessions ka log, anomaly alerts.\n8. **Segmentation** — vendor access sirf specific systems tak.\n\n**Exam line:** \"Vendor ka trust aapka trust hai — supply chain security = apni security.\"\n\n**Diagram:** Refer to the Attack vendors — social aur socio-technical approach diagram."
      }
    ]
  },
  {
    "id": "se-advanced",
    "number": "5.7",
    "title": "Advanced Social Engineering Attacks",
    "subtitle": "Deepfake, AiTM, MFA fatigue, quishing aur OAuth phishing",
    "icon": "ai",
    "accent": "#ff5252",
    "englishDefinition": "Advanced social engineering attacks combine persuasion with technology mature enough to remove the classic warning signs. Adversary-in-the-middle phishing puts a proxy between the victim and the real login page, so the victim completes a genuine MFA prompt while the attacker steals the session cookie and bypasses MFA entirely. MFA fatigue (push bombing) floods a user with approval prompts until one is accepted, often after a matching vishing call. Callback phishing sends a benign-looking notice with a phone number and runs a fake support desk that installs remote-access software. OAuth consent phishing tricks the user into granting a malicious application access to mail and files, leaving no password to reset. Deepfake voice and video impersonate executives and family members in real time, defeating the 'I know his voice' instinct. Quishing moves the payload into a QR code so the victim moves from a filtered corporate device to a personal phone. Collaboration-platform attacks arrive as Teams/Slack messages from a 'partner', and generative-AI text removes grammar and tone errors. Watering-hole and supply-chain attacks compromise the sites and vendors the target already trusts. Defence shifts from spotting bad grammar to structural controls: phishing-resistant FIDO2 authentication, token protection, conditional access, out-of-band verification for money and credentials, application consent policies, and behavioural analytics.",
    "intro": "**Advanced attacks** wo hain jahan technology ne purane red flags hata diye. List yaad rakho: **AiTM proxy** (session cookie chori, MFA bypass), **MFA fatigue** (push bombing), **callback phishing** (fake support desk), **OAuth consent phishing**, **deepfake voice/video**, **quishing** (QR), **Teams/Slack impersonation**, **watering hole**, **supply chain**. Defence ab grammar dekhna nahi — **structural controls** (FIDO2, token protection, consent policy, callback verification).",
    "sections": [
      {
        "type": "definition",
        "title": "Advanced attack kya hai",
        "kicker": "Definition",
        "body": "Advanced attack = **persuasion + technology** ka combination jahan classic red flags (kharab English, unknown sender, downloadable exe) gayab ho jaate hain. Victim ko lagta hai sab normal hai — kyunki technically sab normal hi dikhta hai.",
        "body2": "Isliye defence bhi shift ho gayi hai: \"link pehchano\" se \"**authentication ko phishing-proof banao**\" ki taraf.",
        "chips": [
          "AiTM",
          "MFA fatigue",
          "callback phishing",
          "OAuth consent",
          "deepfake",
          "quishing"
        ]
      },
      {
        "type": "cards",
        "title": "Advanced techniques",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "network",
            "title": "AiTM phishing",
            "body": "Real login page ke beech proxy; MFA ke baad session cookie chori (Evilginx)."
          },
          {
            "icon": "lock",
            "title": "MFA fatigue",
            "body": "Push bombing + vishing: \"code approve karo\" — user thak kar approve kar deta."
          },
          {
            "icon": "phone",
            "title": "Callback phishing",
            "body": "Benign mail + number; fake support desk remote tool install karwata."
          },
          {
            "icon": "grid",
            "title": "OAuth consent phishing",
            "body": "Malicious app ko mail/files ka access grant — password reset se bhi nahi rukta."
          },
          {
            "icon": "ai",
            "title": "Deepfake voice/video",
            "body": "Executive ya family member ki cloned awaaz/shakal, real-time."
          },
          {
            "icon": "phone",
            "title": "Quishing",
            "body": "QR code se personal phone par phishing — corporate proxy bypass."
          },
          {
            "icon": "users",
            "title": "Teams/Slack impersonation",
            "body": "\"Partner\" external account se file/credential request."
          },
          {
            "icon": "globe",
            "title": "Watering hole / supply chain",
            "body": "Trusted site ya vendor compromise — target khud aata hai."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Classic vs advanced phishing",
        "kicker": "Comparison",
        "columns": [
          "Classic phishing",
          "Advanced phishing"
        ],
        "rows": [
          {
            "label": "Red flags",
            "values": [
              "kharab grammar, unknown sender",
              "perfect language, real brand, sahi thread"
            ]
          },
          {
            "label": "MFA",
            "values": [
              "credential chori, MFA rok deta",
              "AiTM/MFA fatigue se MFA bypass"
            ]
          },
          {
            "label": "Channel",
            "values": [
              "e-mail",
              "mail + call + chat + QR + video"
            ]
          },
          {
            "label": "Infrastructure",
            "values": [
              "fake domain",
              "proxy, real domain, SaaS platform"
            ]
          },
          {
            "label": "Detection",
            "values": [
              "filter + user report",
              "behaviour analytics + token protection"
            ]
          },
          {
            "label": "Defence",
            "values": [
              "awareness + spam filter",
              "FIDO2, conditional access, consent policy"
            ]
          }
        ],
        "columnColors": [
          "#ffd600",
          "#ff5252"
        ]
      },
      {
        "type": "example",
        "title": "AiTM attack step by step",
        "kicker": "Example",
        "body": "1. Victim ko mail: \"shared document, sign in to view\". 2. Link attacker ke proxy par jaata hai. 3. Proxy real Microsoft login page dikhata hai. 4. Victim username/password daalta hai — proxy real site par forward karta hai. 5. Real MFA prompt aata hai, victim approve karta hai. 6. Proxy **session cookie** copy kar leta hai. 7. Attacker cookie inject karke bina password/MFA ke mailbox mein ghus jaata hai. Isliye FIDO2 (origin-bound) aur token protection zaroori hai."
      },
      {
        "type": "points",
        "title": "Advanced attacks ke indicators",
        "kicker": "Indicators",
        "points": [
          "**Login from new location** just after a mail click — impossible travel.",
          "**MFA prompts** jo user ne request nahi kiye.",
          "**Support call** jo aapko remote tool install karne bole.",
          "**App consent screen** unexpected permissions (mail.read, files.read).",
          "**Mailbox rule** create hui — forward, delete, hide.",
          "**QR code** mail ya poster mein — scanner app ka misuse.",
          "**Voice/video** mein paisa ya credential ka pressure — verification fail."
        ]
      },
      {
        "type": "diagram",
        "title": "Advanced social engineering attacks",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-advanced",
        "caption": "AiTM proxy, MFA fatigue, callback phishing, OAuth consent phishing, deepfake, quishing and platform impersonation — with structural defences"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Advanced = persuasion + technology**, classic red flags gayab.",
          "**AiTM:** session cookie theft, MFA bypass.",
          "**MFA fatigue:** push bombing + vishing.",
          "**Callback phishing:** fake support desk, remote tool install.",
          "**OAuth consent, deepfake, quishing, platform impersonation.**",
          "**Defence:** FIDO2, token protection, conditional access, consent policy, callback rule."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain advanced social engineering attacks with examples.",
        "answer": "Advanced attacks technology use karke purane red flags hata deti hain.\n\n**1. Adversary-in-the-middle (AiTM) phishing**\n- Proxy real login page ke beech; session cookie chori.\n- MFA ke baad bhi account compromise.\n- Counter: FIDO2/passkeys, token protection, conditional access.\n\n**2. MFA fatigue (push bombing)**\n- Repeated push notifications + vishing call.\n- Counter: number matching, rate limiting, \"never approve unrequested prompt\".\n\n**3. Callback phishing**\n- Benign mail (subscription/invoice) + support number.\n- Fake desk remote-access tool install karwata hai.\n- Counter: official number se callback, no remote tool without ticket.\n\n**4. OAuth consent phishing**\n- Malicious app ko mail/files access grant.\n- Password reset se nahi rukta.\n- Counter: app consent policy, admin approval, user training.\n\n**5. Deepfake voice/video**\n- Executive/family impersonation for payment or credentials.\n- Counter: callback on known number, code word, dual approval.\n\n**6. Quishing (QR phishing)**\n- QR code se personal device par phishing page.\n- Counter: QR policy, scanner with preview, awareness.\n\n**7. Collaboration-platform attacks**\n- Teams/Slack \"partner\" account se file/credential request.\n- Counter: external access policy, verification.\n\n**8. Watering hole / supply chain**\n- Trusted site ya vendor compromise.\n- Counter: patching, third-party risk, EDR.\n\n**Diagram:** Refer to the Advanced social engineering attacks diagram."
      },
      {
        "question": "What is an AiTM phishing attack? Why does MFA not stop it?",
        "answer": "**AiTM (adversary-in-the-middle) phishing:** attacker victim aur real website ke **beech** baith jaata hai — proxy ke through victim asli login page dekhta hai aur credentials + session cookie attacker ke paas chale jaate hain.\n\n**Kaise hota hai (steps):**\n1. Victim ko mail/chat se link milta hai.\n2. Link attacker ke reverse proxy par jaata hai.\n3. Proxy real login page fetch karke dikhata hai (URL attacker ka).\n4. Victim credentials daalta hai → proxy real site par forward karta hai.\n5. Real MFA prompt victim ko aata hai, victim approve karta hai.\n6. Proxy **session cookie** capture karta hai.\n7. Attacker cookie inject karke bina MFA ke session use karta hai.\n\n**MFA kyun fail hoti hai:**\n- Password + OTP dono attacker ke paas pahunch jaate hain (real-time relay).\n- TOTP/push **session** ko bind nahi karte — cookie hi access ban jaata hai.\n- Isliye \"MFA = safe\" assumption galat hai.\n\n**Defence:**\n1. **FIDO2/passkeys** — origin-bound, phishing sites par kaam nahi karte.\n2. **Token protection / binding** — cookie ko device se bind karo.\n3. **Conditional access** — new device/location par step-up.\n4. **Impossible travel / session anomaly alerts.**\n5. URL filtering + lookalike domain monitoring.\n6. Awareness: login page ka URL check karo, mail links se login na karo.\n\n**Diagram:** Refer to the Advanced social engineering attacks diagram."
      },
      {
        "question": "Discuss deepfake-based social engineering and its countermeasures.",
        "answer": "**Deepfake:** AI se banayi gayi fake voice ya video — real person ki impersonation.\n\n**Use cases:**\n1. **CEO/CFO voice call** — urgent payment ya bank detail change.\n2. **Video call** — fake executive board instruction, fake candidate interview.\n3. **Family emergency scam** — \"mummy, paise bhejo\".\n4. **Vendor call** — supplier ke naam se invoice confirmation.\n\n**Kyun effective:**\n- \"Awaaz pehchanta hoon\" wala instinct fail.\n- Urgency + authority + realism.\n- Verification ka culture na ho to payment turant.\n\n**Detection:**\n- Unnatural pauses, robotic tone, missing breathing/background.\n- Video mein lip-sync mismatch, blur, lighting odd.\n- Callback on known number (voice se verify na karo).\n- Out-of-band confirmation (secondary person/channel).\n\n**Countermeasures:**\n1. **Process:** payment/credential requests ke liye callback + dual approval.\n2. **Code word / challenge-response** for high-risk actions.\n3. **Never act on urgency alone** — \"board meeting mein hoon\" excuse red flag.\n4. **Awareness training** with deepfake examples.\n5. **Technical:** caller-ID verification, voice-biometric caution, media forensics.\n6. **Policy:** executive voice/video ko authorisation nahi maana jayega.\n\n**Diagram:** Refer to the Advanced social engineering attacks diagram."
      }
    ]
  },
  {
    "id": "phishing-attack",
    "number": "5.8",
    "title": "Phishing Attack",
    "subtitle": "Bait, hook, capture — aur defence chain",
    "icon": "fish",
    "accent": "#00d4ff",
    "englishDefinition": "Phishing is a social engineering attack delivered by electronic message - usually e-mail, but also SMS, chat or social media - that impersonates a trusted party to make the recipient click a link, open an attachment, disclose credentials or transfer money. A typical phishing message carries four ingredients: a believable sender identity (spoofed or lookalike domain), a pretext that explains the contact (invoice, password expiry, delivery, HR policy, shared document), a payload (credential harvesting page, malicious attachment, QR code, phone number) and a call to action with pressure (urgency, fear, reward). Variants include bulk phishing aimed at many recipients, spear-phishing personalised from OSINT, whaling aimed at executives, clone phishing that copies a real thread, vishing and smishing for voice and SMS, pharming that poisons DNS or hosts, angler phishing on social media, and advanced AiTM or consent phishing. Investigators and defenders read the header chain, SPF/DKIM/DMARC results, URL and domain reputation, landing-page structure and attachment hashes. Defence is layered: authentication (DMARC enforcement), filtering and URL rewriting, phishing-resistant MFA, awareness with reporting buttons, fast response to reported mail, and process controls for payments and credential resets.",
    "intro": "**Phishing** = electronic message se impersonation, taaki victim click kare, attachment khole, credential de ya paisa bheje. Har phishing message ke **chaar ingredients**: (1) believable sender, (2) pretext, (3) payload (link/attachment/QR/number), (4) call to action with pressure. Types: bulk, **spear**, **whaling**, clone, vishing, smishing, pharming, angler, AiTM. Defence: DMARC, filter, FIDO2, awareness + reporting, payment process.",
    "sections": [
      {
        "type": "definition",
        "title": "Phishing ka anatomy",
        "kicker": "Definition",
        "body": "Ek phishing mail ko **crime scene** ki tarah padho: sender identity, header chain, URL, landing page, attachment aur call-to-action — har layer par ek signal milta hai.",
        "body2": "Modern phishing mein \"kharab English\" wala signal gaya — isliye **header, domain aur process** par bharosa karo, sirf padhne ke style par nahi.",
        "chips": [
          "spoofing",
          "lookalike domain",
          "credential harvesting",
          "DMARC",
          "reporting"
        ]
      },
      {
        "type": "cards",
        "title": "Phishing ke types",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "fish",
            "title": "Bulk phishing",
            "body": "Ek hi mail hazaaron logon ko — bank, delivery, IT policy."
          },
          {
            "icon": "target",
            "title": "Spear-phishing",
            "body": "OSINT se personalised — naam, project, manager ka reference."
          },
          {
            "icon": "executive",
            "title": "Whaling",
            "body": "CEO/CFO/board level targets — high-value fraud."
          },
          {
            "icon": "file",
            "title": "Clone phishing",
            "body": "Real thread copy karke attachment/link replace."
          },
          {
            "icon": "phone",
            "title": "Vishing / smishing",
            "body": "Call ya SMS/WhatsApp se same pretext."
          },
          {
            "icon": "globe",
            "title": "Pharming",
            "body": "DNS/hosts poisoning — sahi URL par fake site."
          },
          {
            "icon": "users",
            "title": "Angler phishing",
            "body": "Social media par fake support account."
          },
          {
            "icon": "network",
            "title": "AiTM / consent phishing",
            "body": "Proxy ya OAuth consent se MFA bypass."
          }
        ]
      },
      {
        "type": "points",
        "title": "Phishing ke red flags (practical)",
        "kicker": "Red flags",
        "points": [
          "**Sender domain** lookalike (`bank-secure.com`), `Reply-To` different.",
          "**SPF/DKIM/DMARC fail** — header mein `spf=fail`, `dmarc=fail`.",
          "**Urgency + threat** — \"24 hours mein account band\".",
          "**Unexpected attachment** — `.html`, `.iso`, `.zip` with password.",
          "**Link mismatch** — text kuch, href kuch; shortener.",
          "**Generic greeting** ya galat naam/designation.",
          "**Request for secrecy** — \"kisi ko na batao\".",
          "**Credential/OTP request** — legitimate IT kabhi OTP nahi maangta."
        ]
      },
      {
        "type": "comparison",
        "title": "Phishing vs spear-phishing vs whaling",
        "kicker": "Comparison",
        "columns": [
          "Bulk phishing",
          "Spear-phishing",
          "Whaling"
        ],
        "rows": [
          {
            "label": "Target",
            "values": [
              "mass audience",
              "specific person/team",
              "executives/board"
            ]
          },
          {
            "label": "Personalisation",
            "values": [
              "none",
              "high (OSINT)",
              "very high"
            ]
          },
          {
            "label": "Volume",
            "values": [
              "huge",
              "small",
              "very small"
            ]
          },
          {
            "label": "Goal",
            "values": [
              "credentials, clicks",
              "access, malware, data",
              "payment, M&A, secrets"
            ]
          },
          {
            "label": "Detection",
            "values": [
              "filters catch most",
              "needs header + process",
              "needs verification culture"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800",
          "#ff5252"
        ]
      },
      {
        "type": "example",
        "title": "Ek phishing mail ka forensic reading",
        "kicker": "Example",
        "body": "Mail `accounts@bank-verify.co` se aayi. Headers: `Received from vps-45.hosting.tld`, `Return-Path <bounce@bank-verify.co>`, `Authentication-Results: spf=fail dkim=none dmarc=fail`, `X-Mailer: PHPMailer`. Body: \"Aapka account suspend ho jayega, 24 ghante mein verify karein\", button href `http://bank-verify.co/login.php?id=...`. Landing page real bank ka clone, form POST attacker server par. Verdict: **credential-harvesting phishing** — report, block domain, reset any entered credentials."
      },
      {
        "type": "points",
        "title": "Defence chain",
        "kicker": "Defence",
        "points": [
          "**Prevent:** DMARC enforce (p=reject), SPF/DKIM, lookalike domain monitoring, filter + URL rewriting.",
          "**Protect:** phishing-resistant MFA (FIDO2), conditional access, least privilege.",
          "**Detect:** user reporting button, mail gateway analytics, EDR for attachment execution.",
          "**Respond:** reported-mail triage, block IOC, credential reset, session revoke, notify affected.",
          "**Recover:** mailbox rule audit, forensic review, lessons learned.",
          "**Train:** simulations + micro-learning, \"pause and verify\" habit."
        ]
      },
      {
        "type": "diagram",
        "title": "Phishing attack — anatomy aur defence",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-phishing",
        "caption": "Sender/spoof → pretext → payload (link, attachment, QR, number) → call to action with pressure → compromise, with prevention, protection, detection and response layers"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Phishing:** impersonation mail/SMS se credential, click ya payment lena.",
          "**4 ingredients:** sender, pretext, payload, pressure.",
          "**Types:** bulk, spear, whaling, clone, vishing, smishing, pharming, angler, AiTM.",
          "**Signals:** domain, SPF/DKIM/DMARC, urgency, attachment type, link mismatch.",
          "**Defence:** DMARC + filter + FIDO2 + reporting + payment process."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define phishing. Explain its types with examples.",
        "answer": "**Definition:** Phishing ek social engineering attack hai jisme attacker trusted party ka roop dhar kar electronic message (mail/SMS/chat) bhejta hai, taaki victim credential de, link click kare, attachment khole ya payment kare.\n\n**Anatomy (4 ingredients):**\n1. **Believable sender** — spoofed/lookalike domain.\n2. **Pretext** — invoice, password expiry, delivery, HR policy.\n3. **Payload** — credential page, malicious attachment, QR, number.\n4. **Call to action + pressure** — urgency, fear, reward.\n\n**Types:**\n\n| Type | Description | Example |\n|---|---|---|\n| Bulk phishing | mass mail | fake bank alert |\n| Spear-phishing | personalised (OSINT) | \"aapke project ka invoice\" |\n| Whaling | executives | CEO ko legal notice |\n| Clone phishing | real thread copy | reply with swapped attachment |\n| Vishing | voice call | IT support impersonation |\n| Smishing | SMS/WhatsApp | KYC link |\n| Pharming | DNS/hosts poisoning | sahi URL, fake site |\n| Angler phishing | fake social-media support | \"bank helpdesk\" DM |\n| AiTM/consent | proxy / OAuth grant | session cookie theft |\n\n**Defence:** DMARC enforcement, filtering + URL rewriting, FIDO2 MFA, awareness + reporting button, payment/credential verification process.\n\n**Diagram:** Refer to the Phishing attack — anatomy aur defence diagram."
      },
      {
        "question": "How is a phishing e-mail investigated? Explain header and infrastructure analysis.",
        "answer": "**Step 1 — Preserve:** raw `.eml`, hash, screenshots; forward na karo.\n\n**Step 2 — Header analysis**\n- `Received` chain neeche se upar → originating IP.\n- `Return-Path` vs `From` mismatch.\n- `Message-ID` domain.\n- `Authentication-Results`: spf/dkim/dmarc verdict.\n- `X-Mailer` — bulk script.\n\n**Step 3 — Domain & IP intelligence**\n- WHOIS age, lookalike/homoglyph, MX, SSL cert.\n- Geo-IP, ASN, reputation, VPN/proxy.\n\n**Step 4 — URL & landing page**\n- Anchor vs href; shortener expansion.\n- Sandbox the page; credential form fields; POST destination.\n\n**Step 5 — Attachment analysis**\n- Hash → VirusTotal; macro/JS check; `.html`/`.iso`/`.zip` handling.\n\n**Step 6 — Victim correlation**\n- Proxy/web logs: click time, credential entry.\n- Mailbox logs: rule creation, MFA events.\n\n**Step 7 — Response**\n- Block domain/URL/IP, reset credentials, revoke sessions, notify users, report + 65B.\n\n**Diagram:** Refer to the Phishing attack — anatomy aur defence diagram."
      },
      {
        "question": "Explain the layered defence against phishing in an organisation.",
        "answer": "Defence ek layer se nahi hoti — chain banao.\n\n**1. Authentication layer**\n- SPF, DKIM, DMARC `p=reject`; lookalike domain monitoring.\n- Inbound/outbound gateway policies.\n\n**2. Filtering layer**\n- Anti-phishing + sandboxing, URL rewriting/detonation, attachment types blocked.\n- External sender banner, warning on first contact.\n\n**3. Identity layer**\n- **Phishing-resistant MFA (FIDO2/passkeys)**, number matching.\n- Conditional access, token protection, session anomaly detection.\n\n**4. People layer**\n- Awareness training + simulated phishing (no punishment culture).\n- Reporting button; every report acknowledge karo.\n\n**5. Process layer**\n- Payment/bank-change: callback + dual approval.\n- Credential reset: ticket + out-of-band verification.\n- Remote support tool: approval + ticket.\n\n**6. Detection & response**\n- SIEM rules (new device, impossible travel, mass mail).\n- IR playbook: block, reset, revoke, forensic review, notify.\n\n**7. Governance**\n- Metrics: click rate, report rate, time-to-report.\n- Lessons learned after each campaign.\n\n**Exam line:** \"User ko detector banao, blame target nahi.\"\n\n**Diagram:** Refer to the Phishing attack — anatomy aur defence diagram."
      }
    ]
  },
  {
    "id": "insider-attack",
    "number": "5.9",
    "title": "Insider Attack",
    "subtitle": "Andar ka khatra — malicious, negligent aur compromised",
    "icon": "user",
    "accent": "#aa00ff",
    "englishDefinition": "An insider attack is harm caused by someone who already holds legitimate access - an employee, contractor, vendor engineer, intern or former staff - rather than by an external intruder. Insiders are dangerous because they bypass the perimeter: they know the systems, the processes, the data locations, the approvers and the security team's habits, and their activity looks normal in logs. Three types are distinguished. The malicious insider deliberately steals data, sabotages systems or commits fraud, motivated by money, grievance, ideology or coercion. The negligent insider causes harm without intent - misdirected e-mail, weak password, unapproved cloud upload, lost device, falling for phishing. The compromised insider is a legitimate user whose credentials or session have been taken over, so the account behaves 'inside' while the attacker is outside. A fourth variant, the infiltrator, joins the organisation specifically to attack it. Insider attacks typically follow recruitment or grievance, access accumulation, collection, exfiltration and covering of tracks. Detection relies on behaviour analytics, data-loss prevention, privilege reviews, mail and cloud audit logs, and a culture where staff report mistakes early; prevention relies on least privilege, separation of duties, monitoring with transparency, fair process, and a fast offboarding that removes access the same day.",
    "intro": "**Insider attack** = koi **legitimate access wala** (employee, contractor, intern, ex-staff) nuksan pahunchata hai. Teen types: **malicious** (jaan-boojh kar), **negligent** (galti se), **compromised** (account hijack — bahar wala andar dikhta hai). Chautha variant: **infiltrator** (kaam par hi attack karne aaya). Insider khatarnak isliye hai ki wo **perimeter ke andar** hai aur uska activity normal dikhta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Insider attack kya hai",
        "kicker": "Definition",
        "body": "Insider attack wo hai jahan attacker ke paas **pehle se valid access** hota hai. Isliye firewall, VPN aur perimeter security usse nahi rokte — wo already andar hai.",
        "body2": "Insider ho ya external — dono ke liye same forensic process chalti hai, par insider case mein **HR, legal aur privacy** ka balance zyada important hota hai.",
        "chips": [
          "malicious insider",
          "negligent insider",
          "compromised account",
          "least privilege",
          "UEBA"
        ]
      },
      {
        "type": "cards",
        "title": "Insider ke types",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "user",
            "title": "Malicious insider",
            "body": "Data chori, fraud, sabotage — paisa, badla, ideology ya coercion."
          },
          {
            "icon": "alert",
            "title": "Negligent insider",
            "body": "Galti se: misdirected mail, weak password, unapproved cloud upload, lost device."
          },
          {
            "icon": "lock",
            "title": "Compromised insider",
            "body": "Legitimate account hijack — attacker ke haath mein credential."
          },
          {
            "icon": "briefcase",
            "title": "Infiltrator",
            "body": "Kaam par hi attack karne aaya — fake experience, contractor cover."
          },
          {
            "icon": "wrench",
            "title": "Third-party insider",
            "body": "Vendor engineer, consultant, cleaning staff — access par control kam."
          },
          {
            "icon": "clock",
            "title": "Departing / ex-employee",
            "body": "Notice period mein data copy; offboarding failure se access bacha."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Malicious vs negligent vs compromised",
        "kicker": "Comparison",
        "columns": [
          "Malicious",
          "Negligent",
          "Compromised"
        ],
        "rows": [
          {
            "label": "Intent",
            "values": [
              "jaan-boojh kar",
              "koi intent nahi",
              "victim unaware"
            ]
          },
          {
            "label": "Example",
            "values": [
              "client list leak, fraud",
              "phishing mail par click",
              "credential chori"
            ]
          },
          {
            "label": "Detection",
            "values": [
              "behaviour analytics, DLP",
              "reporting, audit",
              "impossible travel, EDR"
            ]
          },
          {
            "label": "Response",
            "values": [
              "HR/legal + forensic",
              "training + fix process",
              "reset + IR"
            ]
          },
          {
            "label": "Prevention",
            "values": [
              "least privilege, monitoring",
              "awareness, controls",
              "MFA, session monitoring"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#ffd600",
          "#ff5252"
        ]
      },
      {
        "type": "example",
        "title": "Insider attack ka realistic case",
        "kicker": "Example",
        "body": "Ek employee ne resignation diya. Notice period mein usne `$UsnJrnl` ke mutabik 2,300 files ek personal cloud folder mein sync ki, aur ek archive banaya. DLP ne cloud upload flag kiya, mail gateway ne personal Gmail par attachment block kiya. Investigation: USB history (registry), browser history, cloud sync log, aur `$MFT` timestamps — sab same window mein. Legal + HR ke saath report bani, aur offboarding ke din *same day* access revoke hua. Yahaan **detection** (DLP + logs) aur **prevention** (offboarding process) dono kaam aaye."
      },
      {
        "type": "points",
        "title": "Insider attack ke indicators",
        "kicker": "Indicators",
        "points": [
          "Off-hours access, bulk download, ya unusual data volume.",
          "Personal cloud/email sync, USB device, printer se bulk print.",
          "Access requests jo role se match nahi karte.",
          "Resignation ke baad data collection; notice period activity spike.",
          "DLP alerts, cloud audit anomalies, mailbox forwarding rule.",
          "Behaviour change — grievance, disengagement, ya sudden wealth.",
          "Shared accounts ya credential sharing."
        ]
      },
      {
        "type": "diagram",
        "title": "Insider attack — types aur lifecycle",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-insider",
        "caption": "Malicious, negligent, compromised and infiltrator insiders passing through recruitment/grievance → access accumulation → collection → exfiltration → cover-up"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Insider:** legitimate access wala vyakti nuksan pahunchata hai.",
          "**Types:** malicious, negligent, compromised, infiltrator, third-party, departing.",
          "**Lifecycle:** motive → access → collection → exfiltration → cover-up.",
          "**Detection:** UEBA, DLP, audit logs, access reviews, reporting culture.",
          "**Prevention:** least privilege, separation of duties, same-day offboarding."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define insider attack. Explain its types with examples.",
        "answer": "**Definition:** Insider attack wo harm hai jo kisi **legitimate access** rakhne wale vyakti (employee, contractor, vendor engineer, intern, ex-staff) se hota hai — external intruder se nahi.\n\n**Kyun khatarnak:**\n- Perimeter bypass — wo already andar hai.\n- Systems, processes aur approvers ki jaankari.\n- Activity logs mein normal dikhti hai.\n- Trust ka misuse — detection late hoti hai.\n\n**Types:**\n\n| Type | Description | Example |\n|---|---|---|\n| Malicious | jaan-boojh kar harm | client database leak, fraud |\n| Negligent | galti se harm | phishing mail par click, unapproved cloud upload |\n| Compromised | account hijack | credential chori ke baad insider jaisa behaviour |\n| Infiltrator | attack ke liye join karta hai | fake contractor |\n| Third-party | vendor/consultant | RMM access ka misuse |\n| Departing | notice period | data copy, offboarding gap |\n\n**Lifecycle:** motive/grievance → access accumulation → collection → exfiltration → cover-up.\n\n**Detection:** UEBA, DLP, mail/cloud audit logs, privilege review, exit monitoring, whistle-blower channel.\n\n**Prevention:** least privilege, SoD, background checks, monitoring, fair process, same-day offboarding.\n\n**Diagram:** Refer to the Insider attack — types aur lifecycle diagram."
      },
      {
        "question": "Differentiate malicious, negligent and compromised insiders and their handling.",
        "answer": "Teeno insider category ka intent aur response alag hai.\n\n| Point | Malicious | Negligent | Compromised |\n|---|---|---|---|\n| Intent | deliberate | none | victim unaware |\n| Cause | greed/grievance/ideology | mistake/ignorance | stolen credential/session |\n| Example | data theft, sabotage | misdirected mail, weak password | phished account |\n| Detection | UEBA, DLP, access anomaly | audit, reporting, incident | impossible travel, EDR |\n| Investigation | forensic + HR/legal | process review | IR + forensics |\n| Response | disciplinary/legal | training + control fix | reset, revoke, notify |\n| Prevention | least privilege, monitoring | awareness, guardrails | MFA, conditional access |\n\n**Handling notes:**\n- **Malicious:** evidence preserve karo (65B), HR/legal involve, access suspend, data scope assess.\n- **Negligent:** blame-free reporting encourage karo warna log chhupayenge.\n- **Compromised:** jaldi contain karo — session revoke, credential reset, mailbox rule audit.\n\n**Exam line:** \"Teeno insider hain, par sirf ek ka intent hota hai — response bhi wahi ke hisaab se.\"\n\n**Diagram:** Refer to the Insider attack — types aur lifecycle diagram."
      },
      {
        "question": "How are insider attacks detected and investigated?",
        "answer": "**Detection layers:**\n1. **Identity & access** — privilege reviews, dormant account report, SoD conflicts.\n2. **Behaviour analytics (UEBA)** — baseline se deviation: off-hours, bulk access, new destinations.\n3. **DLP** — sensitive data movement (mail, USB, cloud).\n4. **Audit logs** — mail rules, cloud sharing, file downloads.\n5. **Endpoint** — USB history, print logs, installed sync tools.\n6. **Culture** — reporting channel, exit interviews, manager escalation.\n\n**Investigation steps:**\n1. **Authorise** — HR/legal approval, policy basis.\n2. **Preserve** — logs, mailbox audit, cloud audit, endpoint artefacts (hash + custody).\n3. **Scope** — kaunsa data, kitna, kahan gaya.\n4. **Timeline** — access → collection → exfiltration.\n5. **Corroborate** — DLP + endpoint + cloud + network.\n6. **Interview/HR** — process ke hisaab se.\n7. **Report** — findings, evidence, recommendations; 65B if legal.\n\n**Privacy balance:** monitoring policy transparent ho, proportionality follow karo, personal data minimise.\n\n**Diagram:** Refer to the Insider attack — types aur lifecycle diagram."
      }
    ]
  },
  {
    "id": "identity-theft",
    "number": "5.10",
    "title": "Identity Theft",
    "subtitle": "Aapki identity, kisi aur ke haath mein",
    "icon": "user",
    "accent": "#ff8800",
    "englishDefinition": "Identity theft is the acquisition and use of another person's personal identifiers - name, date of birth, address, Aadhaar or PAN number, bank account, card details, photograph, e-mail, phone number or biometric data - without consent, in order to commit fraud or other crimes. Social engineering is a primary route: phishing and vishing harvest credentials and OTPs, SIM-swap intercepts one-time passwords, data breaches supply bulk identifiers, and shoulder surfing, dumpster diving and over-sharing on social media fill the gaps. Common forms are financial identity theft (new accounts, loans, card fraud), account takeover of existing services, synthetic identity fraud that combines real and fictitious data, medical and insurance fraud, tax refund fraud, criminal identity theft where the offender gives someone else's details on arrest, child identity theft, and identity cloning used in immigration or employment fraud. Consequences run from financial loss and a damaged credit history to wrongful legal action and long reputational harm, and victims spend months restoring records. In India, identity theft and impersonation are covered by Sections 66C and 66D of the IT Act 2000 along with cheating and forgery provisions of the Bharatiya Nyaya Sanhita, and electronic evidence must be certified under Section 65B. Prevention is data minimisation, unique strong credentials, multi-factor authentication, prompt credit and account monitoring, and fast reporting to the bank, platform and police.",
    "intro": "**Identity theft** = kisi ki personal identity (naam, DOB, Aadhaar/PAN, card, photo, OTP) **bina consent** le kar fraud karna. Social engineering iska main rasta hai: phishing, vishing, **SIM swap**, data breach, shoulder surfing, dumpster diving, social media over-sharing. Forms: financial, account takeover, **synthetic identity**, medical, tax refund, criminal identity, child identity, cloning. India: IT Act **66C + 66D**, BNS cheating/forgery, evidence 65B.",
    "sections": [
      {
        "type": "definition",
        "title": "Identity theft kya hai",
        "kicker": "Definition",
        "body": "Jab koi aapke identifiers use karke aapki identity assume karta hai — account kholna, loan lena, payment karna, ya kanooni karyavahi se bachna — wo identity theft hai.",
        "body2": "Social engineering ke bina ye mushkil hai: attacker ko pehle **data** chahiye (phishing, breach, SIM swap), phir **verification** cross karni hoti hai (OTP, KYC).",
        "chips": [
          "Aadhaar/PAN",
          "OTP",
          "SIM swap",
          "account takeover",
          "synthetic identity"
        ]
      },
      {
        "type": "cards",
        "title": "Identity theft ke types",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "money",
            "title": "Financial identity theft",
            "body": "Naye accounts, loan, credit card, UPI fraud."
          },
          {
            "icon": "lock",
            "title": "Account takeover",
            "body": "Existing mail/social/bank account par control."
          },
          {
            "icon": "layers",
            "title": "Synthetic identity",
            "body": "Real + fake data mix — naya \"person\" bana kar credit nikalna."
          },
          {
            "icon": "doc",
            "title": "Medical / insurance",
            "body": "Treatment ya claim ke liye doosre ki identity."
          },
          {
            "icon": "chart",
            "title": "Tax / refund fraud",
            "body": "Refund ya benami transaction ke liye PAN misuse."
          },
          {
            "icon": "flag",
            "title": "Criminal identity theft",
            "body": "Arrest par doosre ka naam/ID dena."
          },
          {
            "icon": "user",
            "title": "Child identity theft",
            "body": "Bachche ke clean record ka misuse (years tak pata nahi chalta)."
          },
          {
            "icon": "globe",
            "title": "Identity cloning",
            "body": "Employment/immigration fraud ke liye poori identity copy."
          }
        ]
      },
      {
        "type": "points",
        "title": "Identity kaise chori hoti hai",
        "kicker": "Routes",
        "points": [
          "**Phishing / vishing / smishing** — credential aur OTP harvesting.",
          "**SIM swap** — number port karke OTP interception.",
          "**Data breach** — bulk identifiers dark web par.",
          "**Shoulder surfing** — PIN/OTP dekh lena.",
          "**Dumpster diving** — bank statements, KYC copies.",
          "**Social media over-sharing** — DOB, pet name, school (security answers).",
          "**Malicious app / OAuth consent** — contacts, files, SMS access.",
          "**Insider** — bank/telecom/hospital staff se data leak."
        ]
      },
      {
        "type": "comparison",
        "title": "Identity theft vs identity fraud",
        "kicker": "Comparison",
        "columns": [
          "Identity theft",
          "Identity fraud"
        ],
        "rows": [
          {
            "label": "Matlab",
            "values": [
              "data lena (acquisition)",
              "us data ka misuse"
            ]
          },
          {
            "label": "Example",
            "values": [
              "Aadhaar scan chori",
              "us Aadhaar se loan"
            ]
          },
          {
            "label": "Timeline",
            "values": [
              "pehle hota hai",
              "baad mein hota hai"
            ]
          },
          {
            "label": "Victim ko pata",
            "values": [
              "kahin bhi chalta hai",
              "jab fraud detect ho"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#ff5252"
        ]
      },
      {
        "type": "example",
        "title": "SIM swap + OTP ka combo",
        "kicker": "Example",
        "body": "Attacker ne victim ke naam, DOB aur ek purana address collect kiya (breach + social media). Telecom store mein fake ID se **duplicate SIM** liya. Us moment victim ka network gaya, aur attacker ko OTP milne lage. 10 minute mein bank password reset, UPI account access, aur ek loan application. Victim ko pata tab chala jab network band hua. Defence: SIM-swap lock, number-based OTP ki jagah app-based authentication, aur bank alerts."
      },
      {
        "type": "points",
        "title": "Prevention aur response",
        "kicker": "Prevent & respond",
        "points": [
          "**Data minimisation:** sirf zaroori KYC share karo; masked copies do.",
          "**Unique credentials + password manager**, MFA (app/FIDO2), number matching.",
          "**SIM-swap lock** telecom se; port-out alerts.",
          "**Monitor:** bank alerts, credit report, Aadhaar/PAN usage.",
          "**Social media:** DOB, address, school, pet names hide karo.",
          "**If victim:** bank/platform ko turant report, card block, FIR/cybercrime portal, 65B evidence, credential reset, fraud alert on credit."
        ]
      },
      {
        "type": "diagram",
        "title": "Identity theft — routes aur impact",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-identity",
        "caption": "Identifiers (Aadhaar/PAN, OTP, photo, address) collected via phishing, SIM swap, breach, shoulder surfing → identity assumed → financial, legal aur reputational impact → prevention and response"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Identity theft:** doosre ke identifiers ka bina consent use.",
          "**Routes:** phishing, SIM swap, breach, shoulder surfing, dumpster diving, social media.",
          "**Types:** financial, account takeover, synthetic, medical, tax, criminal, child, cloning.",
          "**India:** IT Act 66C/66D + BNS cheating/forgery + 65B.",
          "**Defence:** minimisation, MFA, SIM lock, monitoring, fast reporting."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define identity theft. Explain its types and how it is committed.",
        "answer": "**Definition:** Identity theft kisi doosre ke personal identifiers (naam, DOB, Aadhaar/PAN, card, photo, OTP) ko bina consent le kar unka misuse karna hai — fraud ya doosre crime ke liye.\n\n**Types:**\n\n| Type | Description |\n|---|---|\n| Financial | naye accounts, loans, card/UPI fraud |\n| Account takeover | existing mail/social/bank control |\n| Synthetic | real + fake data se naya identity |\n| Medical/insurance | treatment ya claim fraud |\n| Tax refund | PAN misuse for refund/benami |\n| Criminal identity | arrest par doosre ka naam |\n| Child identity | bachche ka clean record misuse |\n| Identity cloning | employment/immigration fraud |\n\n**Kaise commit hota hai:**\n1. **Phishing/vishing/smishing** — credentials aur OTP.\n2. **SIM swap** — OTP interception.\n3. **Data breach / dark web** — bulk identifiers.\n4. **Shoulder surfing / dumpster diving.**\n5. **Social media over-sharing** — security answers.\n6. **Malicious app / OAuth consent.**\n7. **Insider leak** — bank/telecom/hospital staff.\n\n**Impact:** financial loss, credit damage, wrongful legal action, reputational harm, months of recovery.\n\n**Diagram:** Refer to the Identity theft — routes aur impact diagram."
      },
      {
        "question": "Explain the role of social engineering in identity theft.",
        "answer": "Identity theft ko **fuel** social engineering deti hai — kyunki data aur verification dono insaan se nikalte hain.\n\n**1. Credential harvesting**\n- Phishing page real bank/portal ka clone; login capture.\n- Spear-phishing se targeted employee ka account.\n\n**2. OTP / MFA interception**\n- Vishing: \"Main bank se hoon, OTP bata dijiye.\"\n- MFA fatigue: push approve karwana.\n- SIM swap: number hijack ke baad OTP attacker ko.\n\n**3. Pretext calls to institutions**\n- Attacker victim bank/telecom/support ko call karke \"main victim hoon\" bolta hai.\n- Answerable security questions (DOB, mother's name) social media se.\n\n**4. Reconnaissance**\n- Social media se identifiers, relationships, travel.\n- Breach data se old passwords aur email formats.\n\n**5. Insider recruitment**\n- Bank/telecom employee ko paise de kar data.\n\n**6. Consent phishing**\n- App ko mail/SMS/contacts access — data continuous flow.\n\n**Defence:** MFA (phishing-resistant), never share OTP, SIM-swap lock, verification questions ka misuse rokna, awareness, aur institution-side KYC verification.\n\n**Diagram:** Refer to the Identity theft — routes aur impact diagram."
      },
      {
        "question": "What are the legal provisions and remedies for identity theft in India?",
        "answer": "**Legal provisions:**\n\n| Provision | Relevance |\n|---|---|\n| IT Act **66C** | identity theft — password/electronic signature ka dishonest use |\n| IT Act **66D** | cheating by personation using computer resource |\n| IT Act **66** | computer-related offences |\n| IT Act **72** | breach of confidentiality/privacy |\n| IT Act **65B** | electronic record certificate for evidence |\n| BNS (2023) | cheating, forgery, criminal breach of trust, impersonation |\n| DPDP Act 2023 | personal data protection obligations on organisations |\n\n**Remedies / response steps:**\n1. **Immediate:** bank/card block, password resets, session revoke, SIM-swap lock.\n2. **Report:** cybercrime portal (NCRP), police FIR, platform abuse reporting.\n3. **Evidence:** screenshots, mails, headers, transaction IDs, hash + 65B certificate.\n4. **Credit hygiene:** credit report check, fraud alert, new account monitoring.\n5. **Institutional:** telecom/bank ko written complaint; acknowledgement preserve.\n6. **Civil:** damages/recovery ke liye suit, agar applicable.\n\n**Challenges:** cross-border servers, fake identities, delayed detection, burden of proof.\n\n**Diagram:** Refer to the Identity theft — routes aur impact diagram."
      }
    ]
  },
  {
    "id": "preventing-insider-threats",
    "number": "5.11",
    "title": "Preventing Insider Threats",
    "subtitle": "Programme, policies aur technical controls",
    "icon": "shield",
    "accent": "#00e676",
    "englishDefinition": "Preventing insider threats is a programme, not a product. It starts with governance: a written insider threat policy, named ownership, a cross-functional team of HR, legal, IT, security and business, and a risk assessment that identifies crown-jewel data, critical roles and high-risk access. Hiring and onboarding controls include background verification, NDA and acceptable-use agreements, and security awareness training before access is granted. Preventive technical controls apply least privilege and role-based access, separation of duties, privileged access management, just-in-time access, data classification with data-loss prevention, encryption, controlled removable media, and restrictions on personal cloud storage. Detection uses user and entity behaviour analytics, mail and cloud audit logs, DLP alerts, file-access anomaly detection, cannot-delete and legal-hold configurations, and monitoring of resignation periods. Response needs a clear playbook, evidence preservation, HR and legal coordination, proportionate investigation with privacy safeguards, and a non-punitive reporting channel so that negligent mistakes surface early. Offboarding must be same-day: access revocation, device return, token and certificate revocation, credential rotation for shared secrets, exit interview and knowledge transfer. The programme is measured - access review completion, DLP alert resolution time, training coverage, and time-to-revoke on exit.",
    "intro": "**Insider threat prevention ek programme hai, product nahi.** Governance (policy + owner + HR/legal/IT team + risk assessment), phir **hiring/onboarding** controls, phir **technical** (least privilege, PAM, SoD, DLP, encryption), phir **detection** (UEBA, audit logs, resignation monitoring), phir **response** (playbook, evidence, privacy) aur finally **same-day offboarding**. Measure karo: access reviews, DLP closure time, training coverage, exit revoke time.",
    "sections": [
      {
        "type": "definition",
        "title": "Programme ka matlab",
        "kicker": "Definition",
        "body": "Ek insider threat programme ek **loop** hai: assess → prevent → detect → respond → improve. Har control ka ek owner, ek metric aur ek review cycle hota hai.",
        "body2": "Sirf monitoring kaafi nahi — **prevention** (access kam) aur **culture** (reporting safe) dono chahiye, warna log galti chhupayenge.",
        "chips": [
          "governance",
          "least privilege",
          "DLP",
          "UEBA",
          "offboarding"
        ]
      },
      {
        "type": "cards",
        "title": "Programme ke components",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "shield",
            "title": "Governance",
            "body": "Policy, owner, cross-functional team, risk assessment, crown jewels."
          },
          {
            "icon": "users",
            "title": "Hiring & onboarding",
            "body": "Background check, NDA, AUP, training before access."
          },
          {
            "icon": "lock",
            "title": "Access control",
            "body": "Least privilege, RBAC, SoD, PAM, JIT access."
          },
          {
            "icon": "database",
            "title": "Data protection",
            "body": "Classification, DLP, encryption, USB/cloud control."
          },
          {
            "icon": "chart",
            "title": "Monitoring",
            "body": "UEBA, audit logs, DLP alerts, file access anomaly."
          },
          {
            "icon": "alert",
            "title": "Response",
            "body": "Playbook, evidence, HR/legal, proportionate investigation."
          },
          {
            "icon": "home",
            "title": "Offboarding",
            "body": "Same-day revoke, device return, cert/token revoke, exit interview."
          },
          {
            "icon": "book",
            "title": "Awareness & culture",
            "body": "Blame-free reporting, training, whistle-blower channel."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Preventive vs detective vs corrective",
        "kicker": "Comparison",
        "columns": [
          "Preventive",
          "Detective",
          "Corrective"
        ],
        "rows": [
          {
            "label": "Goal",
            "values": [
              "harm rokna",
              "jaldi pata lagana",
              "damage limit karna"
            ]
          },
          {
            "label": "Examples",
            "values": [
              "least privilege, SoD, DLP",
              "UEBA, audit logs, alerts",
              "playbook, revoke, recovery"
            ]
          },
          {
            "label": "Timing",
            "values": [
              "pehle",
              "during/after start",
              "incident ke baad"
            ]
          },
          {
            "label": "Metric",
            "values": [
              "access review %",
              "MTTD",
              "MTTR"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#ffd600",
          "#ff5252"
        ]
      },
      {
        "type": "example",
        "title": "Same-day offboarding checklist",
        "kicker": "Example",
        "body": "Exit day: (1) HR ne exit process start kiya; (2) IAM ne **same day** account disable + all sessions revoke; (3) VPN, cloud tokens, API keys, SSH keys rotate; (4) laptop, phone, badge return; (5) mailbox delegate + forward audit; (6) shared password rotation; (7) manager ne knowledge transfer sign-off; (8) security ne 30 din tak anomaly monitor kiya. Is checklist ke bina kaafi insider cases notice period mein hi hote hain."
      },
      {
        "type": "points",
        "title": "Practical controls",
        "kicker": "Controls",
        "points": [
          "**Least privilege + quarterly access review** — jo role ko nahi chahiye, hata do.",
          "**Separation of duties** — request, approve, deploy alag log.",
          "**PAM + just-in-time** access for admins; session recording.",
          "**DLP + classification** — sensitive data par rules.",
          "**USB/cloud policy** — allow-list, encryption, audit.",
          "**UEBA + audit logs** — baseline aur deviation alerts.",
          "**Resignation monitoring** — notice period high-risk window.",
          "**Blame-free reporting** — galti batao, warna chhupayenge.",
          "**Same-day offboarding + 30-day watch.**"
        ]
      },
      {
        "type": "diagram",
        "title": "Preventing insider threats — programme loop",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-prevent",
        "caption": "Governance → hiring → access control → data protection → monitoring → response → offboarding, with preventive, detective and corrective control layers and metrics"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Programme, not product:** governance + people + process + technology.",
          "**Prevent:** least privilege, SoD, PAM/JIT, DLP, encryption.",
          "**Detect:** UEBA, audit logs, DLP alerts, resignation monitoring.",
          "**Respond:** playbook, evidence, HR/legal, privacy safeguards.",
          "**Offboard:** same-day revoke + 30-day watch.",
          "**Culture:** blame-free reporting aur training."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Discuss how insider threats can be prevented in an organisation.",
        "answer": "Insider threats ko ek **programme** se roka jaata hai — ek control se nahi.\n\n**1. Governance**\n- Written insider threat policy, named owner.\n- HR + legal + IT + security + business team.\n- Risk assessment: crown-jewel data, critical roles, high-risk access.\n\n**2. People controls**\n- Background verification, NDA, acceptable-use agreement.\n- Training before access; periodic refresher.\n- Blame-free reporting channel.\n\n**3. Access controls**\n- Least privilege, RBAC, quarterly access review.\n- Separation of duties; privileged access management.\n- Just-in-time access; no shared accounts.\n\n**4. Data controls**\n- Classification, DLP, encryption.\n- USB allow-list, personal cloud restriction, print control.\n\n**5. Monitoring**\n- UEBA baselines, mail/cloud audit logs, DLP alerts.\n- Resignation/notice-period monitoring.\n- Legal hold, cannot-delete retention.\n\n**6. Response**\n- Playbook, evidence preservation (hash + 65B), HR/legal coordination.\n- Proportionate investigation, privacy safeguards.\n\n**7. Offboarding**\n- Same-day access revocation, device return, token/cert revoke.\n- Exit interview, knowledge transfer, 30-day monitoring.\n\n**Metrics:** access review completion %, DLP resolution time, training coverage, time-to-revoke on exit.\n\n**Diagram:** Refer to the Preventing insider threats — programme loop diagram."
      },
      {
        "question": "Explain the technical controls used to mitigate insider threats.",
        "answer": "Technical controls insider ke **access** ko kam karte hain aur **activity** ko visible banate hain.\n\n**1. Identity & access**\n- Least privilege + RBAC.\n- Separation of duties (SoD) conflicts detect karna.\n- PAM: vaulting, JIT, session recording.\n- MFA + conditional access; no shared accounts.\n\n**2. Data protection**\n- Classification + labelling.\n- **DLP** — mail/USB/cloud par rules, alerts, block.\n- Encryption at rest/in transit; tokenisation.\n- Rights management / IRM.\n\n**3. Endpoint**\n- USB allow-list, device control.\n- Sync tool restrictions; EDR telemetry.\n- Print logging.\n\n**4. Monitoring & analytics**\n- **UEBA** — off-hours, bulk download, unusual destination.\n- Mail and cloud audit logs (forward rules, external shares).\n- File access anomaly detection; honeytokens.\n\n**5. Retention & integrity**\n- Centralised log retention, cannot-delete buckets.\n- Legal hold, hash-based integrity.\n\n**6. Offboarding automation**\n- IdM workflow se same-day revoke; certificate/token revocation.\n\n**Limitation:** technology alone culture replace nahi kar sakti — logs hone ke baad bhi report culture chahiye.\n\n**Diagram:** Refer to the Preventing insider threats — programme loop diagram."
      },
      {
        "question": "What is the role of HR, legal and monitoring in an insider threat programme?",
        "answer": "Insider cases technical nahi, **organisational** hote hain — isliye HR/legal central hain.\n\n**HR ka role:**\n- Hiring: background verification, NDA, AUP.\n- Onboarding: policy sign-off, training.\n- Grievance handling — motive ka source door karna.\n- Exit: same-day offboarding coordination, exit interview.\n- Disciplinary process, fairness.\n\n**Legal ka role:**\n- Policy aur monitoring ki legal basis (privacy, DPDP Act).\n- Evidence admissibility — IT Act **65B** certificate.\n- Employment law compliance, disciplinary/civil/criminal action.\n- Vendor/data-sharing agreements.\n\n**Monitoring ka role:**\n- UEBA + DLP + audit logs se behaviour deviation.\n- Proportionality: sirf policy-defined scope.\n- Alerts ka triage aur escalation SLA.\n- Log retention, integrity, chain of custody.\n\n**Coordination model:**\n1. Alert → security triage.\n2. Confirmed suspicion → HR + legal + security committee.\n3. Investigation with documented authorisation.\n4. Findings → action (training / discipline / legal).\n5. Lessons learned → policy update.\n\n**Key balance:** security vs privacy — monitoring transparent ho, proportional ho, aur documented ho.\n\n**Diagram:** Refer to the Preventing insider threats — programme loop diagram."
      }
    ]
  },
  {
    "id": "se-targets-defence",
    "number": "5.12",
    "title": "Social Engineering Targets and Defense Strategies",
    "subtitle": "Kaun target hota hai aur kaise bachna hai",
    "icon": "target",
    "accent": "#00bcd4",
    "englishDefinition": "Social engineering targets are chosen for access, authority or information rather than for technical weakness. High-value targets include executives and their assistants, finance and accounts staff who can move money, human resources who hold employee data, IT help desks that can reset credentials, system and database administrators, reception and front-desk staff who control physical entry, new joiners who do not yet know the normal, remote and travelling employees who cannot walk over to a colleague, contractors and vendors inside the trust boundary, and customers or citizens through bank, UPI, KYC and delivery scams. Attackers also target anyone whose personal relationships give leverage - family, friends and social-media contacts - and use social platforms to map reporting lines before a pretext call. Defence strategies mirror the exploit chain. Preparation covers policy, data minimisation, classification and a published verification protocol. Prevention covers least privilege, phishing-resistant MFA, caller and vendor verification, filtering and hardened help-desk identity proofing. Detection covers reporting channels, anomaly analytics, and monitoring of external impersonation. Response covers a tested playbook, rapid containment and forensics. Recovery covers restoration, notification and root-cause analysis, and the human layer is sustained by continuous, role-based awareness training with simulations, not one annual slide deck. Effectiveness is measured with report rate, click rate, time-to-report, verification-compliance and repeat-incident trends.",
    "intro": "**Targets access, authority ya information ke hisaab se chune jaate hain** — technical weakness ke hisaab se nahi. High-value: executives + PAs, finance, HR, **IT help desk**, admins, reception, new joiners, remote workers, contractors, customers. Defense strategies exploit chain ko mirror karti hain: **prepare → prevent → detect → respond → recover**, plus human layer (role-based training + simulations). Measure: report rate, click rate, time-to-report, verification compliance.",
    "sections": [
      {
        "type": "definition",
        "title": "Targets kaise chune jaate hain",
        "kicker": "Definition",
        "body": "Attacker **access, authority ya information** dhoondta hai. Isliye target selection role-based hoti hai — kis ke paas kya hai, aur usse kaunsa raasta khulta hai.",
        "body2": "Isi wajah se **IT help desk** aur **reception** jaise \"chhote\" roles bhi high-value hote hain — password reset ya physical entry dono bade access dete hain.",
        "chips": [
          "access",
          "authority",
          "information",
          "help desk",
          "reception"
        ]
      },
      {
        "type": "cards",
        "title": "High-value targets",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "executive",
            "title": "Executives & PAs",
            "body": "Authority aur calendar/contact visibility."
          },
          {
            "icon": "money",
            "title": "Finance & accounts",
            "body": "Payment, bank detail change, invoice approval."
          },
          {
            "icon": "users",
            "title": "HR team",
            "body": "Employee data, payroll, onboarding access."
          },
          {
            "icon": "phone",
            "title": "IT help desk",
            "body": "Password reset, MFA reset — classic pretext."
          },
          {
            "icon": "wrench",
            "title": "Admins / DBAs",
            "body": "Privileged access, production systems."
          },
          {
            "icon": "globe",
            "title": "Reception / front desk",
            "body": "Physical entry, visitor badge, deliveries."
          },
          {
            "icon": "user",
            "title": "New joiners",
            "body": "Policy ka pata nahi — \"normal\" identify nahi kar paate."
          },
          {
            "icon": "home",
            "title": "Remote / travelling",
            "body": "Walk-over verification possible nahi."
          },
          {
            "icon": "briefcase",
            "title": "Contractors / vendors",
            "body": "Trust boundary ke andar, control kam."
          },
          {
            "icon": "users",
            "title": "Customers / citizens",
            "body": "Bank, UPI, KYC, delivery scams."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Human target vs technical target",
        "kicker": "Comparison",
        "columns": [
          "Human target",
          "Technical target"
        ],
        "rows": [
          {
            "label": "Attack",
            "values": [
              "pretext, persuasion",
              "vulnerability exploit"
            ]
          },
          {
            "label": "Entry",
            "values": [
              "trust, authority",
              "port, service, patch gap"
            ]
          },
          {
            "label": "Detection",
            "values": [
              "reporting, anomalies",
              "IDS/EDR, patching"
            ]
          },
          {
            "label": "Defence",
            "values": [
              "awareness, verification, MFA",
              "hardening, monitoring"
            ]
          }
        ],
        "columnColors": [
          "#00bcd4",
          "#aa00ff"
        ]
      },
      {
        "type": "points",
        "title": "Defence strategies (chain ke hisaab se)",
        "kicker": "Strategies",
        "points": [
          "**Prepare:** policy, classification, data minimisation, verification protocol, vendor list.",
          "**Prevent:** least privilege, phishing-resistant MFA, filtering, help-desk identity proofing, caller verification.",
          "**Detect:** reporting button + hotline, UEBA anomalies, impersonation monitoring, honeytokens.",
          "**Respond:** tested playbook, containment, session/credential reset, forensics.",
          "**Recover:** restore, notify, root-cause, control update.",
          "**Sustain:** role-based training, simulations, no-blame culture, metrics review."
        ]
      },
      {
        "type": "example",
        "title": "Help-desk pretext — aur defence",
        "kicker": "Example",
        "body": "Caller: \"Main Rahul hoon, finance se, phone kho gaya, MFA reset chahiye, CFO wait kar raha hai.\" Defence: (1) **identity proofing** — employee ID + manager callback on directory number; (2) **never** reset MFA on inbound call alone; (3) **verification script** with a second factor; (4) **urgency** ko red flag maano; (5) reset ke baad **notify** user + log ticket. Ek scripted process 90% aise calls rok deta hai."
      },
      {
        "type": "points",
        "title": "Awareness programme design",
        "kicker": "Awareness",
        "points": [
          "**Role-based modules** — finance, HR, help desk, engineering, executives.",
          "**Baseline + quarterly simulations**, escalating difficulty; punish nahi, coach karo.",
          "**Micro-learning** 3–5 minute, real examples (Hinglish/local context).",
          "**Report karo** button + visible acknowledgement + feedback loop.",
          "**Verification drills** — callback, code word, dual approval.",
          "**Metrics:** click rate ↓, report rate ↑, time-to-report ↓, repeat victim ↓.",
          "**Leadership sponsorship** — tone from the top."
        ]
      },
      {
        "type": "diagram",
        "title": "Targets aur defence strategies",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "se-targets",
        "caption": "High-value targets (executives, finance, HR, help desk, admins, reception, new joiners, remote staff, vendors, customers) mapped to prepare–prevent–detect–respond–recover defence layers with awareness metrics"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Targets:** access, authority ya information ke hisaab se chune jaate hain.",
          "**High-value:** executives, finance, HR, help desk, admins, reception, new joiners, remote, vendors.",
          "**Defence chain:** prepare → prevent → detect → respond → recover.",
          "**Help desk:** identity proofing + callback, inbound call par reset nahi.",
          "**Awareness:** role-based, simulations, blame-free reporting.",
          "**Metrics:** click rate, report rate, time-to-report, verification compliance."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Who are the typical targets of social engineering? Explain with reasons.",
        "answer": "Targets **access, authority ya information** ke hisaab se chune jaate hain.\n\n| Target | Kyun |\n|---|---|\n| Executives & PAs | authority, calendar/contacts, approvals |\n| Finance / accounts | payments, bank change, invoices |\n| HR | employee PII, payroll, onboarding |\n| IT help desk | password/MFA reset — direct entry |\n| Admins / DBAs | privileged access, production data |\n| Reception / front desk | physical entry, badges, deliveries |\n| New joiners | policy unaware, can't spot \"abnormal\" |\n| Remote / travelling | no walk-over verification |\n| Contractors / vendors | inside trust boundary, less control |\n| Customers / citizens | bank, UPI, KYC, delivery scams |\n| Family / friends | emotional leverage, urgency |\n\n**Reasons:**\n1. **Authority** — \"CEO ne bola hai\" pressure.\n2. **Access** — reset/privilege se seedha entry.\n3. **Information** — PII, invoices, org charts.\n4. **Isolation** — remote worker verify nahi kar sakta.\n5. **Newness** — normal vs abnormal ka pata nahi.\n\n**Diagram:** Refer to the Targets aur defence strategies diagram."
      },
      {
        "question": "Discuss defense strategies against social engineering attacks.",
        "answer": "Defence **exploit chain ko mirror** karti hai — har phase par ek layer.\n\n**1. Prepare**\n- Policy + data minimisation + classification.\n- Published verification protocol (callback, code word).\n- Vendor/contact list, org-chart exposure control.\n\n**2. Prevent**\n- Least privilege; phishing-resistant MFA (FIDO2).\n- Mail filtering + URL rewriting; external sender banner.\n- **Help-desk identity proofing** — inbound call par reset nahi.\n- Payment/bank-change dual approval.\n\n**3. Detect**\n- Report button + hotline; fast acknowledgement.\n- UEBA + impossible travel + MFA anomaly.\n- Impersonation/lookalike domain monitoring.\n- Honeytokens aur canary files.\n\n**4. Respond**\n- Tested playbook: contain, reset, revoke sessions, block IOC.\n- Forensic review; HR/legal involvement.\n\n**5. Recover**\n- Restore data, notify affected, root-cause analysis.\n- Control/policy update.\n\n**6. Sustain (human layer)**\n- Role-based training, simulations, micro-learning.\n- No-blame culture — reporting ko reward karo.\n\n**7. Measure**\n- Click rate ↓, report rate ↑, time-to-report ↓.\n- Verification compliance %, repeat victims ↓.\n\n**Exam line:** \"Technology ne attack sasta kar diya, par defence ka core abhi bhi **process + people + verification** hai.\"\n\n**Diagram:** Refer to the Targets aur defence strategies diagram."
      },
      {
        "question": "Design a social engineering awareness programme for an organisation.",
        "answer": "**Goal:** employees ko detector banana — blame target nahi.\n\n**1. Baseline**\n- Phishing simulation baseline click/report rate.\n- Role-wise risk mapping (finance, help desk, HR, execs).\n\n**2. Content**\n- Modules: phishing, vishing, pretexting, insider negligence, deepfake, password/MFA hygiene.\n- Local/Hinglish examples + real case studies.\n- 3–5 minute micro-learning, quarterly refresh.\n\n**3. Delivery**\n- Onboarding module before access.\n- Role-specific deep dives.\n- Simulations with escalating difficulty.\n- Posters/desk drops for verification protocol.\n\n**4. Practice**\n- Callback drills, code-word usage, dual approval.\n- Help-desk script rehearsal.\n\n**5. Reporting culture**\n- One-click report + visible thank-you.\n- No punishment for mistakes; coaching instead.\n- Fast feedback: \"thanks, yeh phishing tha\".\n\n**6. Metrics**\n- Click rate, report rate, time-to-report, repeat rate.\n- Verification compliance in audits.\n\n**7. Governance**\n- Leadership sponsorship, annual review.\n- Lessons learned → policy/control update.\n\n**Diagram:** Refer to the Targets aur defence strategies diagram."
      }
    ]
  }
];

export const socialEngineeringUnit = {
  id: 'unit-5',
  number: '5',
  name: 'Social Engineering',
  topics: socialEngineeringTopics,
};
