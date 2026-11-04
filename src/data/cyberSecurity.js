// ============================================================
// Cyber Security — Unit 1: Introduction to Cyber Security
// 17 topics with English definitions, Hinglish explanations,
// diagrams, and 6-mark exam questions
// ============================================================

export const cyberSecurityUnits = [
  {
    id: 'unit-1',
    number: '1',
    name: 'Introduction to Cyber Security',
    topics: [
      // ========================================================
      // TOPIC 1 — Introduction to Cyber Security
      // ========================================================
      {
        id: 'intro-cyber',
        number: '1.1',
        title: 'Introduction to Cyber Security',
        subtitle: 'Cyber security kya hai — basic concepts aur importance',
        icon: 'shield',
        accent: '#0047ff',
        englishDefinition:
          'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes. Implementing effective cybersecurity measures is especially challenging today because there are more devices than people, and attackers are becoming more innovative.',
        intro: 'Aaj ki digital duniya mein, har jagah computers, smartphones aur internet hai. Har din hum online banking, shopping, social media — sab karte hain. Lekin kya aapne socha hai ki ye sab safely kaise chal raha hai? Kya aapke personal data, bank details ya sensitive information safe hai? Cyber security ka matlab hai internet par safe rehna, hackers se bachna, aur apne digital data ko protect karna. Is topic mein ham samjhnge ki cyber security kya hai, kaisa kam karti hai, aur ye hamari zindagi mein kyun important hai.',
        sections: [
          {
            type: 'definition',
            title: 'Cyber Security kya hai? (Simple Words Mein)',
            kicker: 'Definition',
            body: 'Cyber security ek aisa process hai jisme ham apne computers, networks, aur digital data ko hackers, malware, aur other online threats se protect karte hain. Ye har tarike se digital attacks se bachne ka kaam karti hai — chahe wo phishing ho, virus ho, ya ransomware.',
            body2: 'Ek sentence mein: Cyber security ka matlab hai "internet par apne digital assets ko safe rakhna aur unhe attackers se protect karna".',
            chips: ['Protect systems', 'Secure networks', 'Defend data', 'Prevent attacks'],
          },
          {
            type: 'cards',
            title: 'Cyber Security Ke Key Areas',
            kicker: 'Important Concepts',
            cards: [
              {
                icon: 'shield',
                title: 'Network Security',
                body: 'Network security ka matlab hai apne computer network ko protect karna. Ye firewalls, intrusion detection systems (IDS), aur virtual private networks (VPNs) ka use karti hai taaki unauthorized access roka ja sake.',
              },
              {
                icon: 'database',
                title: 'Application Security',
                body: 'Application security apps aur software ko threats se protect karti hai. Ye development ke time hi security features add karti hai — input validation, authentication, encryption.',
              },
              {
                icon: 'lock',
                title: 'Information Security',
                body: 'Information security ka matlab hai sensitive data ko protect karna — chahe wo personal information ho, financial records ho, ya business secrets. Ye data ko unauthorized access se bachati hai.',
              },
              {
                icon: 'bulb',
                title: 'Operational Security',
                body: 'Operational security processes aur decisions ko protect karti hai. Ye policies, procedures, aur guidelines banati hai taaki organization ka har operation safe rahe.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Cyber Security — Overall Framework',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'cyber-framework',
            caption: 'Cyber security 4 main areas par kaam karti hai: Network Security, Application Security, Information Security, aur Operational Security. Sab milkar ek complete security posture banati hai.',
          },
          {
            type: 'points',
            title: 'Cyber Security Kyon Important Hai?',
            kicker: 'Key Points',
            points: [
              'Digital transformation — aaj har business online hai, isliye security zaroori hai.',
              'Data breaches ka loss — financial aur reputational damage dono ho sakta hai.',
              'Legal compliance — government regulations data protection ko mandatory karti hain.',
              'Trust — customers sirf tabhi business se connect karte hain jab wo safe feel karte hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Cyber security = digital systems aur data ko online threats se protect karna.',
              '4 key areas: Network, Application, Information, Operational Security.',
              'Hack hone par financial loss, reputation damage, aur legal issues ho sakte hain.',
              'Security har organization ki zaroorat hai — small business bhi.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Define Cyber Security. Explain its importance in the modern digital world.',
            answer:
              '**Cyber Security Definition:**\nCyber security is the practice of protecting systems, networks, aur digital data from cyber attacks. Ye unauthorized access, data breaches, aur digital theft se bachne ka process hai.\n\n**Importance:**\n\n1. **Digital Transformation** — Aaj har business online hai. Banks, hospitals, schools — sab digital services provide karte hain. Security ke bina ye sab risky ho jata hai.\n\n2. **Data Protection** — Personal information, financial records, business secrets — sab sensitive data hackers ke target hoti hai. Security isse protect karti hai.\n\n3. **Financial Loss Prevention** — Cyber attacks ka financial loss hota hai. Ransomware attacks mein companies khud paise de deti hain. Security isse rokti hai.\n\n4. **Legal Compliance** — Government ne data protection laws banaye hain (jaise IT Act 2000). Security compliance ke liye zaroori hai.\n\n5. **Trust aur Reputation** — Customers sirf tabhi business se connect karte hain jab wo safe feel karte hain. Data breach par company ki reputation kharb hoti hai.\n\n**Diagram:** Refer to Cyber Security Framework diagram showing 4 key areas.',
          },
          {
            question: 'What are the main areas of Cyber Security? Briefly explain each.',
            answer:
              '**4 Main Areas of Cyber Security:**\n\n1. **Network Security** — Computer networks ko protect karti hai. Firewalls, IDS (Intrusion Detection Systems), VPNs (Virtual Private Networks) ka use karti hai. Network traffic monitor karti hai aur unauthorized access rokti hai.\n\n2. **Application Security** — Apps aur software ko protect karti hai. Development ke time security features add karti hai — input validation, authentication, encryption, code reviews.\n\n3. **Information Security** — Sensitive data ko protect karti hai. Data encryption, access controls, aur backup policies ka use karti hai. Personal information, financial records, business secrets sab safe rehte hain.\n\n4. **Operational Security** — Organizational processes ko protect karti hai. Security policies, procedures, aur guidelines banati hai. Employee training, incident response plans, aur risk management ka kaam karti hai.\n\n**Aasan sabd mein:** Network security traffic ko control karti hai, application security software ko safe banati hai, information security data ko protect karti hai, operational security processes ko secure rakhti hai.\n\n**Diagram:** Refer to Cyber Security Framework diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 2 — Need, Importance and Challenges in Cyber Security
      // ========================================================
      {
        id: 'need-importance-cyber',
        number: '1.2',
        title: 'Need, Importance and Challenges in Cyber Security',
        subtitle: 'Cyber security kyun zaroori hai aur challenges kya hain',
        icon: 'warn',
        accent: '#0047ff',
        englishDefinition:
          'Cybersecurity is critically important because society is deeply dependent on technology. From personal communications to national infrastructure, everything is connected. The need arises from increasing cyber threats, growing attack surfaces, and the high cost of data breaches. Key challenges include keeping pace with evolving threats, securing legacy systems, addressing the skills gap, and balancing security with usability.',
        intro: 'Kya aapne socha hai ki aaj ke bina cyber security kya hoga? Banks ka server hack ho, hospital ka data leak ho, ya government websites down ho — toh kya hoga? Cyber security aaj ki zaroorat hai, nahi toh digital duniya collapse ho sakti hai. Is topic mein ham dekhnge ki cyber security ka need kahan se aata hai, ye kaise important hai, aur hamare samajh mein challenges kya hain.',
        sections: [
          {
            type: 'definition',
            title: 'Cyber Security ka Need kahan se aata hai?',
            kicker: 'Understanding the Need',
            body: 'Cyber security ka need 3 main reasons se aata hai: (1) Internet ka overuse — aaj har cheez online hai, (2) Hackers ka increase — attacks roz badh rahe hain, (3) Data ka importance — personal, financial, government data sab sensitive hai.',
            body2: 'Simple words mein: Jab aapka sabkuch online hai, toh uska protection zaroori hai. Bini security ke online system hamesha risk mein rehte hain.',
            chips: ['Internet overuse', 'Growing threats', 'Data importance'],
          },
          {
            type: 'cards',
            title: 'Cyber Security ke Challenges',
            kicker: 'Key Challenges',
            cards: [
              {
                icon: 'warn',
                title: 'Rapidly Evolving Threats',
                body: 'Hackers ka techniques din ba din badalte hain. Ek security measure fix hoti hai toh hackers naya bypass dhundh lete hain. Staying ahead of threats ek constant challenge hai.',
              },
              {
                icon: 'database',
                title: 'Legacy Systems',
                body: 'Bada organizations mein purane systems (30+ years old) abhi bhi use hote hain. Ye modern security tools nahi support karte. Old software patch nahi ho sakta, isliye vulnerable rehte hain.',
              },
              {
                icon: 'users',
                title: 'Skills Gap',
                body: 'Cyber security experts ki demand bahut high hai, supply kam hai. Qualified professionals kam hain. Ye industry ka sabse bada challenge hai — qualified security engineers nahi milte.',
              },
              {
                icon: 'bulb',
                title: 'Balancing Security & Usability',
                body: 'Zyada security strict ho toh users iske use karna band dete hain. Simple passwords require karti hai toh weak ho jata hai. Ek balance maintain karna zaroori hai — secure hone ke saath use bhi easy hona chahiye.',
              },
            ],
          },
          {
            type: 'points',
            title: 'Cyber Security ka Importance',
            kicker: 'Why It Matters',
            points: [
              'Infrastructure protection — power grids, transportation, healthcare systems sab online hain.',
              'Economic stability — cyber attacks economic growth ko slow kar sakte hain.',
              'National security — government data, defense systems cyber attacks ke target ho sakte hain.',
              'Individual privacy — personal information, messages, photos sab protect karna zaroori hai.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Cyber security ka need Internet overuse, growing threats, aur data importance se aata hai.',
              '4 key challenges: evolving threats, legacy systems, skills gap, security-usability balance.',
              'Importance: infrastructure, economy, national security, individual privacy.',
              'Security hamesha evolving rahti hai — ek solution forever nahi chalti.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Discuss the need and importance of Cyber Security in today\'s digital world.',
            answer:
              '**Need for Cyber Security:**\n\n1. **Internet ka Overuse** — Aaj har cheez online hai: banking, shopping, education, healthcare. Jitna online activity badhegi, utna attack surface badhega.\n\n2. **Growing Cyber Threats** — Hackers din ba din naye techniques dhundh rahe hain. Ransomware, phishing, DDoS attacks roz hote hain.\n\n3. **Data Importance** — Personal data, financial records, government information — sab sensitive hai. Data leak ho toh heavy loss ho sakta hai.\n\n**Importance:**\n\n1. **Infrastructure Protection** — Power grids, transportation systems, hospitals — sab online hain. Hack ho toh nation halt ho sakti hai.\n\n2. **Economic Stability** — Cyber attacks financial markets ko affect karte hain. Companies ka loss millions mein ho sakta hai.\n\n3. **National Security** — Defense systems, government databases cyber attacks ke target ho sakte hain.\n\n4. **Individual Privacy** — Har insaan ka personal data — messages, photos, bank details — sab protect hona chahiye.\n\n**Diagram:** Refer to Cyber Security Importance diagram.',
          },
          {
            question: 'What are the major challenges faced in implementing Cyber Security?',
            answer:
              '**4 Major Challenges in Cyber Security:**\n\n1. **Rapidly Evolving Threats** — Hackers ka techniques continuous badalte hain. Security measures ek time fixed hoti hai, but hackers naya bypass dhundh lete hain. Staying ahead of threats ek constant challenge hai.\n\n2. **Legacy Systems** — Purane systems (30+ years old) abhi bhi use hote hain. Ye modern security tools nahi support karte. Old software patch nahi ho sakta — isliye long-term vulnerable rehte hain.\n\n3. **Skills Gap** — Cyber security experts ki demand high hai, supply kam hai. Qualified professionals kam hain. Ye industry ka sabse bada challenge hai.\n\n4. **Balancing Security & Usability** — Zyada security strict ho toh users iske use karna band dete hain. Simple passwords require karti hai toh weak ho jata hai. Ek balance maintain karna zaroori hai.\n\n**Other Challenges:**\n\n5. **Cost** — Security implementation expensive hai. Small companies afford nahi kar pati.\n\n6. **Complexity** — Modern IT environments bahut complex hain. Multi-cloud, remote work, IoT devices — sab security ko difficult banate hain.\n\n**Diagram:** Refer to Cyber Security Challenges diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 3 — Cyberspace
      // ========================================================
      {
        id: 'cyberspace',
        number: '1.3',
        title: 'Cyberspace',
        subtitle: 'Cyberspace kya hai — digital world ka concept',
        icon: 'globe',
        accent: '#0047ff',
        englishDefinition:
          'Cyberspace is the global domain of human activity and communication via digital networks. It encompasses the internet, cellular networks, and all connected devices and systems. Cyberspace is not a physical place but a virtual environment where information is created, stored, shared, and protected. It has become an integral part of modern society, economy, and national security.',
        intro: '"Cyberspace" word sun ke aapke dimaag mein kya aata hai? Ek virtual duniya, internet ka wo jagah jahan hum sab online activity karte hain. Lekin cyberspace sirf internet nahi hai — ye ek broader concept hai. Is topic mein ham samjhnge ki cyberspace kya hai, iske components kya hain, aur ye hamari zindagi mein kahan tak faila hua hai.',
        sections: [
          {
            type: 'definition',
            title: 'Cyberspace kya hai?',
            kicker: 'Definition',
            body: 'Cyberspace ek global virtual environment hai jahan digital communication aur human activity hoti hai. Ye internet, cellular networks, aur connected devices par based hai. Cyberspace ek physical jagah nahi hai — ye digital networks ka wo space hai jahan information create, store, share aur protect hoti hai.',
            body2: 'Simple words mein: Cyberspace = Internet + Mobile Networks + Connected Devices + Digital Communication. Ye aaj ki modern duniya ka sabse important virtual space hai.',
            chips: ['Virtual environment', 'Global domain', 'Digital communication', 'Connected networks'],
          },
          {
            type: 'cards',
            title: 'Cyberspace ke Components',
            kicker: 'Key Components',
            cards: [
              {
                icon: 'globe',
                title: 'Physical Infrastructure',
                body: 'Cyberspace ka base physical infrastructure hai — servers, routers, switches, undersea cables, satellites. Ye sab digital data ko physically transmit aur store karte hain.',
              },
              {
                icon: 'database',
                title: 'Logical Layer',
                body: 'Logical layer software, protocols, aur applications ka hai. Ye data ko process, route, aur protect karta hai. TCP/IP, HTTP, DNS — ye sab protocols logical layer ka part hain.',
              },
              {
                icon: 'users',
                title: 'Social Layer',
                body: 'Social layer users, communities, aur human activity ka hai. Social media, online transactions, digital communication — sab cyberspace ka social layer hai.',
              },
              {
                icon: 'shield',
                title: 'Security Layer',
                body: 'Security layer cyberspace ko protect karti hai. Firewalls, encryption, authentication — ye sab security mechanisms cyberspace ka integral part hain.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Cyberspace — Layered Structure',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'cyberspace-layers',
            caption: 'Cyberspace 4 layers par based hai: Physical (infrastructure), Logical (software/protocols), Social (users/activity), aur Security (protection). Sab milkar digital world banate hain.',
          },
          {
            type: 'points',
            title: 'Cyberspace ka Scope aur Reach',
            kicker: 'Key Points',
            points: [
              'Global reach — cyberspace duniya bhar mein faila hua hai, borders ko cross karta hai.',
              'Always connected — 24/7 activity, din raat digital communication hoti hai.',
              'Multi-dimensional — text, audio, video, images — sab cyberspace mein exist karte hain.',
              'Economic importance — e-commerce, digital services, online banking sab cyberspace par depend hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Cyberspace = Internet + Mobile Networks + Connected Devices + Digital Communication.',
              '4 layers: Physical, Logical, Social, Security.',
              'Global reach — borders ko cross karta hai, 24/7 activity.',
              'Modern economy, society, aur national security sab cyberspace par depend hain.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Define Cyberspace. Explain its components and significance.',
            answer:
              '**Cyberspace Definition:**\nCyberspace ek global virtual environment hai jahan digital communication aur human activity hoti hai. Ye internet, cellular networks, aur connected devices par based hai. Cyberspace ek physical jagah nahi hai — ye digital networks ka wo space hai jahan information create, store, share aur protect hoti hai.\n\n**Components:**\n\n1. **Physical Layer** — Servers, routers, switches, undersea cables, satellites. Ye digital data ko physically transmit aur store karte hain.\n\n2. **Logical Layer** — Software, protocols (TCP/IP, HTTP, DNS), aur applications. Ye data ko process, route, aur protect karta hai.\n\n3. **Social Layer** — Users, communities, aur human activity. Social media, online transactions, digital communication — sab social layer ka part hain.\n\n4. **Security Layer** — Firewalls, encryption, authentication. Ye cyberspace ko protect karti hai.\n\n**Significance:**\n- Cyberspace global reach hai — borders ko cross karta hai.\n- Modern economy, society, national security sab cyberspace par depend hain.\n- 24/7 activity — din raat digital communication hoti hai.\n\n**Diagram:** Refer to Cyberspace Layered Structure diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 4 — Cyber Threats
      // ========================================================
      {
        id: 'cyber-threats',
        number: '1.4',
        title: 'Cyber Threats',
        subtitle: 'Different types of cyber attacks aur threats',
        icon: 'virus',
        accent: '#0047ff',
        englishDefinition:
          'A cyber threat is any potential incident or event that could harm an organization by exploiting vulnerabilities in its systems, networks, or data. Cyber threats include malware attacks, phishing, ransomware, denial-of-service (DoS) attacks, insider threats, man-in-the-middle attacks, and zero-day exploits. Threat actors range from individual hackers to organized criminal groups and nation-states.',
        intro: 'Har din news mein hacking ki khabar aati hai — kisi ka bank account hack hua, kisi ki website down hui, kisi ko ransomware mila. Ye sab cyber threats hain. Is topic mein ham samjhnge ki different types of cyber threats kya hain, unka kaisa kaam karta hai, aur hum iske kaise protect ho sakte hain.',
        sections: [
          {
            type: 'definition',
            title: 'Cyber Threats kya hain?',
            kicker: 'Definition',
            body: 'Cyber threat koi bhi aisi event ya incident hai jo organization ke systems, networks, ya data ko harm kar sakti hai. Ye vulnerabilities ka exploitation karti hai. Cyber threats ka source individual hackers se lekar organized criminal groups aur nation-states tak ho sakta hai.',
            body2: 'Simple words mein: Jab koi hacker aapke digital system ko harm karna chahta hai, toh wo cyber threat hai. Ye malware, phishing, hacking, aur other attacks ka form le sakta hai.',
            chips: ['Potential harm', 'Vulnerability exploitation', 'Malicious actors', 'Attack vectors'],
          },
          {
            type: 'cards',
            title: 'Common Types of Cyber Threats',
            kicker: 'Threat Categories',
            cards: [
              {
                icon: 'virus',
                title: 'Malware',
                body: 'Malware ek恶意 software hai — virus, worm, trojan, ransomware. Ye aapke system ko damage karta hai, data ko corrupt karta hai, ya control le leta hai. Downloads, infected links, aur email attachments se spread hota hai.',
              },
              {
                icon: 'warn',
                title: 'Phishing',
                body: 'Phishing fraudulent emails ya messages hain jo legitimate sources jaise dikhte hain. Ye users se sensitive information (passwords, card details) capture karte hain. Clicking fake links aur login pages se personal data chura liya jata hai.',
              },
              {
                icon: 'shield',
                title: 'Ransomware',
                body: 'Ransomware system ko lock kar deta hai aur data ko encrypt karta hai. Hackers data wapas lane ke liye ransom (paise) lete hain. Ye sabse dangerous attack hai — hospitals, government offices iske target rahe hain.',
              },
              {
                icon: 'globe',
                title: 'DDoS Attacks',
                body: 'DDoS (Distributed Denial of Service) attack mein hackers multiple computers se ek website pe traffic flood kar dete hain. Website overload ho jati hai aur legitimate users ko access nahi milta. Website temporarily down ho jati hai.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Types of Cyber Threats — Overview',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'cyber-threats',
            caption: 'Cyber threats multiple types mein aate hain: Malware (virus, trojan, ransomware), Phishing, DDoS, Man-in-the-Middle, Insider Threats, aur Zero-Day Exploits. Har ek ka different method aur impact hota hai.',
          },
          {
            type: 'points',
            title: 'Other Important Cyber Threats',
            kicker: 'Additional Threats',
            points: [
              'Man-in-the-Middle (MITM) — hacker communication ke beech mein aa jata hai, data intercept karta hai.',
              'Insider Threats — organisation ke own employees intentionally ya accidentally data leak karte hain.',
              'Zero-Day Exploits — security vulnerability jinka software maker ko bhi pata nahi — hackers exploit kar dete hain.',
              'SQL Injection — hackers SQL queries ko manipulate kar database se sensitive data chura lete hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Cyber threat = digital system ko harm karne wali potential event.',
              'Main threats: Malware, Phishing, Ransomware, DDoS, MITM, Insider, Zero-Day.',
              'Threat actors: individual hackers, criminal groups, nation-states.',
              'Security measures har threat ka different response demand karti hain.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Explain the different types of cyber threats with examples.',
            answer:
              '**Types of Cyber Threats:**\n\n1. **Malware** —恶意 software including viruses, worms, trojans, aur ransomware. Ye system ko damage karta hai, data corrupt karta hai. Example: Trojan horse fake software ban ke system mein enter karta hai.\n\n2. **Phishing** — Fraudulent emails/messages legitimate sources jaise dikhte hain. Users se sensitive information capture karte hain. Example: Fake bank email bhej ke login details chura liya jata hai.\n\n3. **Ransomware** — System ko lock kar deta hai, data ko encrypt karta hai. Ransom ke liye paise demand karta hai. Hospitals aur government offices ke target rahe hain.\n\n4. **DDoS (Distributed Denial of Service)** — Multiple computers se ek website pe traffic flood kar deta hai. Website overload ho jati hai, users ko access nahi milta.\n\n5. **Man-in-the-Middle (MITM)** — Hacker communication ke beech mein aa jata hai. Data intercept aur modify karta hai.\n\n6. **Insider Threats** — Organisation ke own employees data leak karte hain — intentionally ya accidentally.\n\n7. **Zero-Day Exploits** — Security vulnerabilities jinka software maker ko bhi pata nahi. Hackers exploit kar dete hain.\n\n**Diagram:** Refer to Types of Cyber Threats diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 5 — Cyber-warfare
      // ========================================================
      {
        id: 'cyber-warfare',
        number: '1.5',
        title: 'Cyber-warfare',
        subtitle: 'Nation-state level cyber attacks aur digital warfare',
        icon: 'zap',
        accent: '#0047ff',
        englishDefinition:
          'Cyber-warfare refers to the use of digital attacks by nation-states to disrupt, damage, or destroy another nation\'s critical infrastructure, computer systems, and networks. It is a form of warfare that takes place in cyberspace rather than on physical battlefields. Cyber-warfare can target power grids, financial systems, defense networks, and government databases. It involves state-sponsored hacking groups, advanced persistent threats (APTs), and digital espionage.',
        intro: 'War ka concept toh aap jaante hain — tanks, guns, armies. Lekin kya aap jaante hain ki war digital space mein bhi ho sakta hai? Cyber-warfare mein nation-states ek dusre ke digital infrastructure pe attack karte hain — power grids hack karte hain, defense systems disrupt karte hain, government databases steal karte hain. Ye modern warfare ka ek naya dimension hai. Is topic mein ham samjhnge ki cyber-warfare kya hai, kaise kaam karta hai, aur iske implications kya hain.',
        sections: [
          {
            type: 'definition',
            title: 'Cyber-warfare kya hai?',
            kicker: 'Definition',
            body: 'Cyber-warfare ka matlab hai nation-states ka digital attacks ka use karna — dusre nation ke critical infrastructure, computer systems, aur networks ko disrupt, damage, ya destroy karne ke liye. Ye traditional warfare ka digital form hai jo cyberspace mein hota hai, nahi physical battlefield pe.',
            body2: 'Simple words mein: Jab ek country dusre country ke digital systems pe attack karti hai — power grid hack karti hai, bank servers down karti hai — toh ye cyber-warfare hai.',
            chips: ['Nation-state attacks', 'Digital warfare', 'Critical infrastructure', 'State-sponsored'],
          },
          {
            type: 'cards',
            title: 'Cyber-warfare ke Levels',
            kicker: 'Different Levels',
            cards: [
              {
                icon: 'zap',
                title: 'Level 1 — Cyber Espionage',
                body: 'Cyber espionage mein nation-states dusre country ke sensitive information chura lete hain — defense plans, government secrets, economic data. Ye spy ka digital form hai. State-sponsored hackers government databases se data steal karte hain.',
              },
              {
                icon: 'warn',
                title: 'Level 2 — Cyber Sabotage',
                body: 'Cyber sabotage mein attackers physical infrastructure ko damage karte hain — power grids hack karte hain, transportation systems disrupt karte hain. Ye country ke daily life ko affect karta hai. Stuxnet (Iran nuclear program) iska example hai.',
              },
              {
                icon: 'shield',
                title: 'Level 3 — Cyber Warfare (Full)',
                body: 'Full cyber-warfare mein attackers dusre country ke critical systems ko completely disrupt karte hain — communication networks down karte hain, financial systems collapse karte hain. Ye traditional war ka digital equivalent hai.',
              },
              {
                icon: 'globe',
                title: 'Advanced Persistent Threats (APT)',
                body: 'APT long-term, targeted attacks hain jo nation-states launch karti hain. Ye continuous surveillance aur data extraction ka kaam karti hain. Ye hard to detect aur hard to stop — years tak chalti hain.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Cyber-warfare — Levels and Types',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'cyber-warfare',
            caption: 'Cyber-warfare 3 levels par kaam karta hai: Espionage (data theft), Sabotage (infrastructure damage), Full Warfare (system disruption). State-sponsored APTs long-term targeted attacks karte hain.',
          },
          {
            type: 'points',
            title: 'Cyber-warfare ka Impact',
            kicker: 'Key Impacts',
            points: [
              'Power grid attacks — country ka electricity supply disrupt ho sakta hai.',
              'Financial system disruption — banks, stock markets hack ho sakte hain.',
              'Defense systems — military communication aur weapon systems target ho sakte hain.',
              'Government disruption — elections, administration sab affect ho sakti hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Cyber-warfare = nation-states ka digital attacks dusre country pe.',
              '3 levels: Espionage (data theft), Sabotage (damage), Full Warfare (disruption).',
              'APTs — long-term, targeted, state-sponsored attacks.',
              'Targets: power grids, financial systems, defense, government.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'What is Cyber-warfare? Discuss its levels and impact on national security.',
            answer:
              '**Cyber-warfare Definition:**\nCyber-warfare ka matlab hai nation-states ka digital attacks ka use karna — dusre nation ke critical infrastructure, computer systems, aur networks ko disrupt, damage, ya destroy karne ke liye. Ye traditional warfare ka digital form hai jo cyberspace mein hota hai.\n\n**Levels of Cyber-warfare:**\n\n1. **Cyber Espionage** — Dusre country ke sensitive information chura lena — defense plans, government secrets, economic data. Ye spy ka digital form hai.\n\n2. **Cyber Sabotage** — Physical infrastructure ko damage karna — power grids hack karna, transportation systems disrupt karna. Stuxnet (Iran nuclear program) iska famous example hai.\n\n3. **Full Cyber-Warfare** — Critical systems ko completely disrupt karna — communication networks down karna, financial systems collapse karna. Ye traditional war ka digital equivalent hai.\n\n**Impact on National Security:**\n\n1. **Power Grid Attacks** — Country ka electricity supply disrupt ho sakta hai.\n2. **Financial System Disruption** — Banks, stock markets hack ho sakte hain.\n3. **Defense Systems** — Military communication aur weapon systems target ho sakte hain.\n4. **Government Disruption** — Elections, administration sab affect ho sakti hain.\n\n**APTs:** Advanced Persistent Threats — long-term, targeted, state-sponsored attacks. Ye years tak chalti hain, hard to detect.\n\n**Diagram:** Refer to Cyber-warfare Levels diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 6 — CIA Triad
      // ========================================================
      {
        id: 'cia-triad',
        number: '1.6',
        title: 'CIA Triad',
        subtitle: 'Confidentiality, Integrity, Availability — security ka foundation',
        icon: 'lock',
        accent: '#0047ff',
        englishDefinition:
          'The CIA Triad is a foundational model for cybersecurity that consists of three core principles: Confidentiality, Integrity, and Availability. Confidentiality ensures that sensitive information is accessible only to authorized individuals. Integrity ensures that data is accurate, consistent, and has not been tampered with. Availability ensures that systems and data are accessible to authorized users when needed. This model guides security policies and measures.',
        intro: 'Cyber security ka ek sabse important concept CIA Triad hai. Ye 3 principles hain — Confidentiality, Integrity, Availability. Ye sab security measures ka base hai. Agar aapke paas ek secure system hai, toh usme ye 3 qualities honi chahiye. Is topic mein ham samjhnge ki ye 3 principles kya hain, kaisa kaam karti hain, aur ye overall security mein kya role play karti hain.',
        sections: [
          {
            type: 'definition',
            title: 'CIA Triad kya hai?',
            kicker: 'Definition',
            body: 'CIA Triad cybersecurity ka foundational model hai jo 3 core principles pe based hai: Confidentiality (r保密性), Integrity (数据完整性), aur Availability (可用性). Ye 3 principles security policies aur measures ka guide karti hain. Har secure system mein ye 3 qualities honi chahiye.',
            body2: 'Simple words mein: CIA Triad = data secret rakhna (Confidentiality), data correct rakhna (Integrity), aur data available rakhna (Availability). Ye 3 baatein mil kar ek secure system banati hain.',
            chips: ['Confidentiality', 'Integrity', 'Availability'],
          },
          {
            type: 'cards',
            title: 'CIA Triad ke 3 Principles',
            kicker: 'Core Principles',
            cards: [
              {
                icon: 'lock',
                title: 'Confidentiality (保密性)',
                body: 'Confidentiality ka matlab hai sensitive data ko unauthorized users se bachaana. Data sirf authorized persons tak hi reachable hona chahiye. Encryption, passwords, access controls — ye sab confidentiality ensure karte hain. Data leak ya unauthorized access confidentiality breach hai.',
              },
              {
                icon: 'check',
                title: 'Integrity (数据完整性)',
                body: 'Integrity ka matlab hai data accurate, consistent, aur tamper-free rakhna. Data modify hona authorized persons hi kar sakte hain. Checksums, digital signatures, version controls — ye sab integrity ensure karte hain. Data corruption ya unauthorized modification integrity breach hai.',
              },
              {
                icon: 'globe',
                title: 'Availability (可用性)',
                body: 'Availability ka matlab hai systems aur data authorized users ke liye available rakhna. Users ko zaroorat ke time access milna chahiye. Redundancy, backups, DDoS protection — ye sab availability ensure karte hain. System down ya service disruption availability breach hai.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'CIA Triad — Security Foundation',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'cia-triad',
            caption: 'CIA Triad 3 principles pe based hai: Confidentiality (data secret), Integrity (data correct), Availability (data available). Ye 3 milkar ek complete security model banate hain. Har security measure inme ek ya zyada principles ensure karti hai.',
          },
          {
            type: 'example',
            title: 'CIA Triad ka Real-World Example',',
            kicker: 'Example',
            body: 'Ek bank ka online system le lo. Confidentiality: aapke account details sirf aap aur bank ke authorized employees ko dekhne milna chahiye — nahi toh data leak ho sakta hai. Integrity: aapke transaction details correct hone chahiye — kisi na kisi change nahi karna chahiye. Availability: bank ka website 24/7 available hona chahiye — DDoS attack se down nahi hona chahiye. Ye 3 principles milkar ek secure banking system banate hain.',
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'CIA Triad = Confidentiality, Integrity, Availability — security ka foundation.',
              'Confidentiality: data sirf authorized users tak hi reachable.',
              'Integrity: data accurate, consistent, tamper-free.',
              'Availability: data aur systems available zaroorat ke time.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Explain the CIA Triad in Cyber Security with examples.',
            answer:
              '**CIA Triad — 3 Core Principles:**\n\n1. **Confidentiality (保密性)** — Sensitive data ko unauthorized users se bachaana. Data sirf authorized persons tak hi reachable hona chahiye.\n\n   - *Methods:* Encryption, passwords, access controls, biometric authentication.\n   - *Example:* Bank account details sirf account holder aur authorized bank employees ko dekhne milna chahiye.\n   - *Breach:* Data leak, unauthorized access, password cracking.\n\n2. **Integrity (数据完整性)** — Data accurate, consistent, aur tamper-free rakhna. Data modify hona authorized persons hi kar sakte hain.\n\n   - *Methods:* Checksums, digital signatures, version controls, hash functions.\n   - *Example:* Transaction details correct hona chahiye — kisi na kisi change nahi karna chahiye.\n   - *Breach:* Data corruption, unauthorized modification, man-in-the-middle attacks.\n\n3. **Availability (可用性)** — Systems aur data authorized users ke liye available rakhna. Users ko zaroorat ke time access milna chahiye.\n\n   - *Methods:* Redundancy, backups, DDoS protection, failover systems.\n   - *Example:* Bank website 24/7 available hona chahiye — DDoS attack se down nahi hona chahiye.\n   - *Breach:* System down, service disruption, DDoS attacks, hardware failure.\n\n**Importance:** Ye 3 principles mil kar ek complete security model banate hain. Har security measure inme ek ya zyada principles ensure karti hai.\n\n**Diagram:** Refer to CIA Triad diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 7 — Cyber Terrorism
      // ========================================================
      {
        id: 'cyber-terrorism',
        number: '1.7',
        title: 'Cyber Terrorism',
        subtitle: 'Digital attacks se terrorism — impact aur prevention',
        icon: 'warn',
        accent: '#0047ff',
        englishDefinition:
          'Cyber terrorism is the use of computer networks and digital attacks to cause disruption, fear, or harm for political, social, or ideological goals. It involves exploiting technology to attack critical infrastructure, government systems, or public services to create panic, disrupt society, or achieve political objectives. Cyber terrorism can include DDoS attacks on government websites, ransomware attacks on hospitals, or propaganda dissemination through social media.',
        intro: 'Terrorism toh aap jaante hain — physical violence, fear create karna. Lekin kya terrorism digital space mein bhi ho sakta hai? Cyber terrorism ka matlab hai computer networks ka use karke disruption, fear, ya harm caused karna political ya social goals ke liye. Hackers government websites down karte hain, hospitals pe ransomware attack karte hain, social media pe propaganda spread karte hain. Is topic mein ham samjhnge ki cyber terrorism kya hai, kaise kaam karta hai, aur iske effects kya hain.',
        sections: [
          {
            type: 'definition',
            title: 'Cyber Terrorism kya hai?',
            kicker: 'Definition',
            body: 'Cyber terrorism ka matlab hai computer networks ka use karke disruption, fear, ya harm caused karna political, social, ya ideological goals ke liye. Ye technology ka exploitation hai critical infrastructure, government systems, ya public services pe attack karke panic create karne ke liye.',
            body2: 'Simple words mein: Jab hackers digital attacks karke society mein fear create karte hain, government systems disrupt karte hain, ya political goals achieve karte hain — toh ye cyber terrorism hai.',
            chips: ['Political goals', 'Digital disruption', 'Fear creation', 'Critical infrastructure'],
          },
          {
            type: 'cards',
            title: 'Cyber Terrorism ke Forms',
            kicker: 'Types of Cyber Terrorism',
            cards: [
              {
                icon: 'globe',
                title: 'Infrastructure Attacks',
                body: 'Cyber terrorists critical infrastructure pe attack karte hain — power grids, water systems, transportation networks. Ye society ko disrupt karta hai, public mein fear create karta hai. Ye physical chaos ka digital source hai.',
              },
              {
                icon: 'warn',
                title: 'Government System Attacks',
                body: 'Government websites, defense databases, election systems — sab cyber terrorism ke target ho sakte hain. Ye government ka functioning disrupt karta hai, public trust loss create karta hai.',
              },
              {
                icon: 'shield',
                title: 'Social Media Propaganda',
                body: 'Cyber terrorists social media ka use karte hain propaganda spread karne ke liye. Fake news, hate speech, radical content — sab digitally spread hota hai. Ye social unrest create karta hai.',
              },
              {
                icon: 'virus',
                title: 'Ransomware on Public Services',
                body: 'Hospitals, schools, government offices pe ransomware attacks cyber terrorism ka part ho sakte hain. Ye public services disrupt karta hai, people ka daily life affect karta hai.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Cyber Terrorism — Attack Vectors',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'cyber-terrorism',
            caption: 'Cyber terrorism multiple attack vectors use karta hai: Infrastructure attacks (power, water), Government attacks, Social media propaganda, aur Public service ransomware. Ye sab milkar society mein disruption aur fear create karte hain.',
          },
          {
            type: 'points',
            title: 'Cyber Terrorism ka Impact',
            kicker: 'Key Impacts',
            points: [
              'Public fear — cyber attacks public mein panic create karte hain.',
              'Infrastructure disruption — power, water, transport sab affect ho sakte hain.',
              'Economic damage — attacks ka financial loss hota hai.',
              'Social unrest — propaganda aur fake news social stability ko affect karte hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Cyber terrorism = digital attacks political/social goals ke liye.',
              'Forms: Infrastructure attacks, Government attacks, Propaganda, Ransomware.',
              'Impact: public fear, infrastructure disruption, economic damage, social unrest.',
              'Prevention: strong security, surveillance, international cooperation.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Define Cyber Terrorism. Discuss its forms and impact on society.',
            answer:
              '**Cyber Terrorism Definition:**\nCyber terrorism ka matlab hai computer networks ka use karke disruption, fear, ya harm caused karna political, social, ya ideological goals ke liye. Ye technology ka exploitation hai critical infrastructure, government systems, ya public services pe attack karke panic create karne ke liye.\n\n**Forms of Cyber Terrorism:**\n\n1. **Infrastructure Attacks** — Power grids, water systems, transportation networks pe attack. Ye society ko disrupt karta hai, public mein fear create karta hai.\n\n2. **Government System Attacks** — Government websites, defense databases, election systems pe attack. Ye government ka functioning disrupt karta hai, public trust loss create karta hai.\n\n3. **Social Media Propaganda** — Fake news, hate speech, radical content digitally spread karna. Ye social unrest create karta hai.\n\n4. **Ransomware on Public Services** — Hospitals, schools, government offices pe ransomware attacks. Ye public services disrupt karta hai.\n\n**Impact on Society:**\n\n1. **Public Fear** — Cyber attacks public mein panic create karte hain.\n2. **Infrastructure Disruption** — Power, water, transport sab affect ho sakte hain.\n3. **Economic Damage** — Financial loss hota hai.\n4. **Social Unrest** — Propaganda aur fake news social stability ko affect karte hain.\n\n**Diagram:** Refer to Cyber Terrorism Attack Vectors diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 8 — Cyber Security of Critical Infrastructure
      // ========================================================
      {
        id: 'critical-infrastructure-cyber',
        number: '1.8',
        title: 'Cyber Security of Critical Infrastructure',
        subtitle: 'Power, water, transport — critical systems ka protection',
        icon: 'server',
        accent: '#0047ff',
        englishDefinition:
          'Critical infrastructure refers to the assets, systems, and networks essential for a society to function — including energy, water, transportation, healthcare, finance, and communication. Cyber security of critical infrastructure ensures these systems are protected from digital attacks that could cause widespread disruption, economic damage, or loss of life. Securing these systems requires coordinated efforts between government, private sector, and cybersecurity agencies.',
        intro: 'Socha hai ki aapke city ka electricity kahan se aata hai? Water supply kahan se aati hai? Airports, banks, hospitals — ye sab ek dusre se connected hain. Ye sab "critical infrastructure" hain — society ka foundation. Agar hackers in systems pe attack kar de, toh society collapse ho sakti hai. Is topic mein ham samjhnge ki critical infrastructure ka protection kyun important hai, kaun si systems critical hain, aur inka security kaise ensure ho sakta hai.',
        sections: [
          {
            type: 'definition',
            title: 'Critical Infrastructure kya hai?',
            kicker: 'Definition',
            body: 'Critical infrastructure ek society ke functioning ke liye essential assets, systems, aur networks hain — energy, water, transportation, healthcare, finance, communication. Ye systems society ka backbone hain. Agar inme koi attack ho, toh society disruption ho sakti hai, economic damage ho sakta hai, ya loss of life ho sakta hai.',
            body2: 'Simple words mein: Critical infrastructure = society ke liye zaroori systems — power grids, water supply, airports, hospitals, banks, communication networks. Ye sab hack ho toh society ruk sakti hai.',
            chips: ['Essential systems', 'Society backbone', 'High impact', 'Protection priority'],
          },
          {
            type: 'cards',
            title: 'Critical Infrastructure ke Types',
            kicker: 'Categories',
            cards: [
              {
                icon: 'zap',
                title: 'Energy Sector',
                body: 'Power grids, oil aur gas pipelines, nuclear plants — energy sector critical infrastructure hai. Hack ho toh city ka electricity supply disrupt ho sakta hai. Poori economy affected ho sakti hai.',
              },
              {
                icon: 'globe',
                title: 'Water Supply',
                body: 'Water treatment plants, reservoirs, distribution networks — water supply critical hai. Water contamination ya supply disruption health aur sanitation issues create karta hai.',
              },
              {
                icon: 'server',
                title: 'Transportation',
                body: 'Airports, railways, highways, shipping ports — transportation systems critical hain. Disruption ho toh logistics, travel, aur supply chain affect ho sakte hain.',
              },
              {
                icon: 'users',
                title: 'Healthcare',
                body: 'Hospitals, medical devices, pharmacy databases — healthcare infrastructure critical hai. Attack ho toh patient care disrupt ho sakta hai, sensitive medical data leak ho sakti hai.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Critical Infrastructure Sectors',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'critical-infra',
            caption: 'Critical infrastructure 6 main sectors mein aata hai: Energy (power grids), Water (supply), Transportation (airports, railways), Healthcare (hospitals), Finance (banks), aur Communication (networks). Sab milkar society ka backbone banate hain.',
          },
          {
            type: 'points',
            title: 'Protecting Critical Infrastructure',
            kicker: 'Security Measures',
            points: [
              'Network segmentation — critical systems ko separate networks mein rakhna.',
              'Regular security audits — vulnerabilities time-time pe check karna.',
              'Incident response plans — attack ho toh fast response dena.',
              'Government-private cooperation — security agencies aur infrastructure owners mil kar kaam karna.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Critical infrastructure = society ke liye essential systems (energy, water, transport, healthcare, finance, communication).',
              'Attack ho toh widespread disruption, economic damage, loss of life ho sakta hai.',
              'Protection: network segmentation, security audits, incident response, government-private cooperation.',
              'Ye national security ka sabse important area hai.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'What is Critical Infrastructure? Why is its cyber security important?',
            answer:
              '**Critical Infrastructure Definition:**\nCritical infrastructure ek society ke functioning ke liye essential assets, systems, aur networks hain — energy, water, transportation, healthcare, finance, communication. Ye systems society ka backbone hain.\n\n**Why Cyber Security is Important:**\n\n1. **Widespread Disruption** — Attack ho toh power grids hack ho sakte hain, water supply disrupt ho sakti hai. Puri society affected ho sakti hai.\n\n2. **Economic Damage** — Infrastructure disruption ka financial loss heavy ho sakta hai.\n\n3. **Loss of Life** — Healthcare systems attack ho toh patient care disrupt ho sakta hai.\n\n4. **National Security** — Critical infrastructure national security ka sabse important area hai.\n\n**Critical Sectors:**\n\n1. **Energy** — Power grids, oil/gas pipelines, nuclear plants\n2. **Water** — Treatment plants, reservoirs, distribution\n3. **Transportation** — Airports, railways, highways, ports\n4. **Healthcare** — Hospitals, medical devices, pharmacy databases\n5. **Finance** — Banks, stock exchanges, payment systems\n6. **Communication** — Internet, telecom networks, satellites\n\n**Protection Measures:**\n- Network segmentation\n- Regular security audits\n- Incident response plans\n- Government-private cooperation\n\n**Diagram:** Refer to Critical Infrastructure Sectors diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 9 — Cyber security - Organizational Implications
      // ========================================================
      {
        id: 'org-implications-cyber',
        number: '1.9',
        title: 'Cyber Security — Organizational Implications',
        subtitle: 'Security ka organizational impact aur business perspective',
        icon: 'users',
        accent: '#0047ff',
        englishDefinition:
          'Cyber security has profound implications for organizations across all sectors. It affects business operations, customer trust, legal compliance, financial health, and competitive advantage. Organizations must integrate security into their business strategy, not just treat it as a technical issue. This includes security governance, risk management, compliance with regulations, and building a security-aware culture throughout the organization.',
        intro: 'Socha hai ki ek company pe cyber attack ho, toh kya hoga? Sirf technical issue nahi hai — business ka pura structure affected ho sakta hai. Customer trust kharb ho sakta hai, legal penalties ho sakte hain, financial loss ho sakta hai. Cyber security sirf IT department ka kaam nahi hai — ye pura organization ka matter hai. Is topic mein ham samjhnge ki cyber security ka organizational impact kya hai, aur companies security ko kaise integrate kar sakti hain.',
        sections: [
          {
            type: 'definition',
            title: 'Organizational Implications kya hain?',
            kicker: 'Definition',
            body: 'Cyber security ka organizational impact bahut deep hai — business operations, customer trust, legal compliance, financial health, aur competitive advantage sab affect ho sakte hain. Security sirf technical issue nahi hai — ye business strategy ka part hona chahiye.',
            body2: 'Simple words mein: Jab company pe cyber attack ho, toh sirf systems down nahi hote — customer trust kharb hota hai, legal issues aate hain, financial loss hota hai. Security pura organization ka matter hai.',
            chips: ['Business impact', 'Customer trust', 'Legal compliance', 'Financial health'],
          },
          {
            type: 'cards',
            title: 'Security ka Business Impact',
            kicker: 'Key Implications',
            cards: [
              {
                icon: 'users',
                title: 'Customer Trust aur Reputation',
                body: 'Customers sirf tabhi company se business karte hain jab wo safe feel karte hain. Data breach par company ki reputation permanently damage ho sakti hai. Customers chun jaate hain aur negative publicity hoti hai.',
              },
              {
                icon: 'warn',
                title: 'Legal Compliance',
                body: 'Government ne data protection laws banaye hain (IT Act 2000, GDPR, etc.). Agar company security compliance nahi karti, toh heavy fines aur legal penalties ho sakte hain. Compliance mandatory hai.',
              },
              {
                icon: 'chart',
                title: 'Financial Impact',
                body: 'Cyber attacks ka direct financial loss hota hai — ransom payments, recovery costs, legal fees, aur lost business. Small companies iska impact explain nahi kar sakti.',
              },
              {
                icon: 'clock',
                title: 'Operational Disruption',
                body: 'Attacks business operations ko disrupt karte hain — systems down, production halt, services disrupt. Daily operations affected ho sakte hain, productivity loss hota hai.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Organizational Security — Business Impact',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'org-security',
            caption: 'Cyber security ka organizational impact 4 areas mein faila hua hai: Customer Trust (reputation), Legal Compliance (penalties), Financial Health (loss), Operational Efficiency (disruption). Security business strategy ka integral part hona chahiye.',
          },
          {
            type: 'points',
            title: 'Building Security-Aware Culture',
            kicker: 'Organizational Steps',
            points: [
              'Security training — employees ko regular cyber security awareness dena.',
              'Policy enforcement — security policies ko strict implement karna.',
              'Incident response team — attack ho toh fast response dena.',
              'Continuous monitoring — security incidents continuous monitor karna.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Security organizational impact: customer trust, legal compliance, financial health, operations.',
              'Security sirf IT issue nahi — business strategy ka part hai.',
              'Compliance mandatory hai — fines aur penalties ho sakte hain.',
              'Security-aware culture banana zaroori hai — training, policies, monitoring.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Discuss the organizational implications of cyber security.',
            answer:
              '**Organizational Implications of Cyber Security:**\n\n1. **Customer Trust aur Reputation** — Customers sirf tabhi company se business karte hain jab wo safe feel karte hain. Data breach par reputation permanently damage ho sakti hai. Negative publicity aur customer churn hota hai.\n\n2. **Legal Compliance** — Government ne data protection laws banaye hain (IT Act 2000, GDPR). Security compliance mandatory hai. Non-compliance par heavy fines aur legal penalties ho sakte hain.\n\n3. **Financial Impact** — Cyber attacks ka direct financial loss: ransom payments, recovery costs, legal fees, lost business. Small companies iska impact explain nahi kar sakti.\n\n4. **Operational Disruption** — Attacks business operations ko disrupt karte hain: systems down, production halt, services disrupt. Daily operations affected ho sakte hain.\n\n**Building Security-Aware Culture:**\n\n- Security training for employees\n- Strict policy enforcement\n- Incident response team\n- Continuous monitoring\n\n**Key Point:** Security sirf IT department ka kaam nahi hai — ye pura organization ka matter hai. Har employee security ka part hona chahiye.\n\n**Diagram:** Refer to Organizational Security Business Impact diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 10 — Need for a Comprehensive Cyber Security Policy and governance
      // ========================================================
      {
        id: 'cyber-policy-governance',
        number: '1.10',
        title: 'Need for a Comprehensive Cyber Security Policy and Governance',
        subtitle: 'Security policy aur governance ka need',
        icon: 'file',
        accent: '#0047ff',
        englishDefinition:
          'A comprehensive cyber security policy is a documented set of guidelines, rules, and practices that govern an organization\'s security posture. It defines how to protect information assets, who is responsible for security, and how to respond to incidents. Security governance provides the framework for implementing and maintaining these policies through clear roles, responsibilities, accountability, and continuous improvement processes.',
        intro: 'Socha hai ki ek company ka security policy kaisa hota hai? Sirf IT department ke paas ek document hai? Nahi — security policy pura organization ka framework hai. Ye define karta hai ki information assets kaise protect honge, kaun responsible hai, aur attack ho toh kya response dena hai. Security governance policies ko implement aur maintain ka framework provide karti hai. Is topic mein ham samjhnge ki security policy aur governance kyun important hai, aur iska structure kaisa hota hai.',
        sections: [
          {
            type: 'definition',
            title: 'Security Policy aur Governance kya hai?',
            kicker: 'Definition',
            body: 'Cyber security policy ek documented guidelines, rules, aur practices hai jo organization ka security posture govern karti hai. Ye information assets ka protection, roles aur responsibilities, aur incident response define karti hai. Security governance policies ko implement aur maintain ka framework provide karti hai.',
            body2: 'Simple words mein: Security policy = organization ka security rulebook. Governance = iske follow karne ka system. Dono milkar organization ko secure rakhte hain.',
            chips: ['Guidelines', 'Rules', 'Responsibilities', 'Accountability'],
          },
          {
            type: 'cards',
            title: 'Security Policy ke Components',
            kicker: 'Policy Structure',
            cards: [
              {
                icon: 'file',
                title: 'Acceptable Use Policy',
                body: 'Employees ka acceptable aur unacceptable behavior define karta hai. Internet use, email use, device use — sabka rules batata hai. Ye clear boundaries set karta hai.',
              },
              {
                icon: 'lock',
                title: 'Access Control Policy',
                body: 'Data access ko control karta hai. Kaun kya dekh sakta hai, kaun kya modify kar sakta hai — sab define karta hai. Role-based access controls (RBAC) iska part hai.',
              },
              {
                icon: 'warn',
                title: 'Incident Response Policy',
                body: 'Security incidents ka response plan provide karta hai. Attack ho toh kaun response dega, kya steps hain, kahan report karna hai — sab batata hai.',
              },
              {
                icon: 'check',
                title: 'Compliance Policy',
                body: 'Legal aur regulatory requirements ko address karta hai. IT Act 2000, GDPR — sab compliance ensure karta hai. Non-compliance ka penalties batata hai.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Security Policy Framework',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'policy-framework',
            caption: 'Security policy framework 4 main components pe based hai: Acceptable Use, Access Control, Incident Response, aur Compliance. Governance policies ko implement, monitor, aur improve ka framework provide karti hai.',
          },
          {
            type: 'points',
            title: 'Security Governance ke Elements',
            kicker: 'Governance Framework',
            points: [
              'Clear roles — kaun security ka responsible hai.',
              'Accountability — security failures ka responsibility clear.',
              'Continuous improvement — policies time-time pe update karna.',
              'Leadership commitment — top management security ko priority dena.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Security policy = organization ka security rulebook.',
              '4 components: Acceptable Use, Access Control, Incident Response, Compliance.',
              'Governance = policies ko implement aur maintain ka framework.',
              'Ye organization ko systematically secure rakhta hai.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Explain the need for a Comprehensive Cyber Security Policy and Governance.',
            answer:
              '**Need for Cyber Security Policy and Governance:**\n\n1. **Clear Guidelines** — Security policy organization ke liye clear guidelines provide karti hai. Kaun kya kar sakta hai, kaun nahi — sab define hota hai.\n\n2. **Accountability** — Governance clear roles aur responsibilities set karti hai. Security failure ka responsibility clear hota hai.\n\n3. **Compliance** — Legal requirements (IT Act 2000, GDPR) ko address karta hai. Non-compliance penalties se bachta hai.\n\n4. **Incident Response** — Attack ho toh kya response dena hai — sab plan mein hota hai. Fast response milta hai.\n\n5. **Continuous Improvement** — Policies time-time pe update hoti hain. Security challenges badhte hain, policies bhi badalti hain.\n\n**Security Policy Components:**\n\n1. **Acceptable Use Policy** — Employees ka acceptable behavior define karta hai.\n2. **Access Control Policy** — Data access ko control karta hai.\n3. **Incident Response Policy** — Security incidents ka response plan.\n4. **Compliance Policy** — Legal aur regulatory requirements.\n\n**Governance Framework:**\n- Clear roles and responsibilities\n- Accountability mechanisms\n- Leadership commitment\n- Continuous monitoring and improvement\n\n**Diagram:** Refer to Security Policy Framework diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 11 — Need for a Nodal Authority
      // ========================================================
      {
        id: 'nodal-authority-cyber',
        number: '1.11',
        title: 'Need for a Nodal Authority',
        subtitle: 'Cyber security ke liye ek central authority ka need',
        icon: 'users',
        accent: '#0047ff',
        englishDefinition:
          'A nodal authority is a centralized organization or agency responsible for coordinating, managing, and responding to cyber security incidents at a national level. It serves as the primary point of contact for cyber threat intelligence, incident response, and policy implementation. India\'s nodal authority is CERT-In (Computer Emergency Response Team - India), which handles cyber incidents, issues alerts, and coordinates with other agencies.',
        intro: 'Socha hai ki country ka pura cyber security kaun manage karta hai? Har company khud? Nahi — ek central authority zaroori hai jo pura country ka cyber security coordinate karti hai. Ye "nodal authority" hai. India ka nodal authority CERT-In hai — Computer Emergency Response Team - India. Ye cyber incidents handle karti hai, alerts issue karti hai, aur other agencies ke saath coordinate karti hai. Is topic mein ham samjhnge ki nodal authority kyun zaroori hai, kaun si functions iske hain, aur CERT-In ka role kya hai.',
        sections: [
          {
            type: 'definition',
            title: 'Nodal Authority kya hai?',
            kicker: 'Definition',
            body: 'Nodal authority ek centralized organization hai jo national level pe cyber security incidents coordinate, manage, aur respond karti hai. Ye cyber threat intelligence, incident response, aur policy implementation ka primary point of contact hai.',
            body2: 'Simple words mein: Nodal authority = country ka cyber security central hub. Jaise police pura city ki security coordinate karti hai, waise hi nodal authority pura country ki cyber security coordinate karti hai.',
            chips: ['Central authority', 'Coordination', 'Incident response', 'Threat intelligence'],
          },
          {
            type: 'cards',
            title: 'Nodal Authority ke Functions',
            kicker: 'Key Functions',
            cards: [
              {
                icon: 'warn',
                title: 'Incident Response',
                body: 'Country mein kisi bhi cyber incident ka response dena. Attack ho toh nodal authority fast response degi — systems protect karegi, data recover karegi, attackers ko trace karegi.',
              },
              {
                icon: 'globe',
                title: 'Threat Intelligence',
                body: 'Cyber threat intelligence collect, analyze, aur share karna. New attacks, vulnerabilities, hacker groups — sabki information collect karke alert karna.',
              },
              {
                icon: 'shield',
                title: 'Policy Coordination',
                body: 'Government policies implement karna, agencies coordinate karna. Security guidelines issue karna, compliance monitor karna.',
              },
              {
                icon: 'users',
                title: 'International Cooperation',
                body: 'Other countries ke nodal authorities ke saath cooperation karna. Cross-border cyber attacks ka joint response dena, intelligence share karna.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Nodal Authority — Structure aur Role',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'nodal-authority',
            caption: 'Nodal authority country ka cyber security hub hai. 4 main functions: Incident Response, Threat Intelligence, Policy Coordination, aur International Cooperation. India ka nodal authority CERT-In hai.',
          },
          {
            type: 'points',
            title: 'CERT-In — India ka Nodal Authority',
            kicker: 'India\'s Nodal Authority',
            points: [
              'CERT-In — Computer Emergency Response Team - India.',
              'Cyber incidents report karna, alerts issue karna.',
              'Government, banks, critical infrastructure — sabke saath coordination.',
              'International cooperation — other countries ke CERTs ke saath.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Nodal authority = country ka cyber security central hub.',
              '4 functions: Incident Response, Threat Intelligence, Policy, International Cooperation.',
              'India ka nodal authority: CERT-In (Computer Emergency Response Team - India).',
              'Central coordination zaroori hai — har company khud nahi manage kar sakti.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'What is a Nodal Authority in Cyber Security? Explain its functions and CERT-In\'s role.',
            answer:
              '**Nodal Authority Definition:**\nNodal authority ek centralized organization hai jo national level pe cyber security incidents coordinate, manage, aur respond karti hai. Ye cyber threat intelligence, incident response, aur policy implementation ka primary point of contact hai.\n\n**Functions of Nodal Authority:**\n\n1. **Incident Response** — Country mein kisi bhi cyber incident ka response dena. Attack ho toh fast response — systems protect, data recover, attackers trace.\n\n2. **Threat Intelligence** — Cyber threat intelligence collect, analyze, aur share karna. New attacks, vulnerabilities, hacker groups — sabki information collect aur alert karna.\n\n3. **Policy Coordination** — Government policies implement karna, agencies coordinate karna. Security guidelines issue karna.\n\n4. **International Cooperation** — Other countries ke nodal authorities ke saath cooperation. Cross-border cyber attacks ka joint response.\n\n**CERT-In — India\'s Nodal Authority:**\n\n- Full form: Computer Emergency Response Team - India\n- Functions: Cyber incidents report, alerts issue, coordination with government/banks/critical infrastructure, international cooperation with other CERTs\n- Role: India ka primary cyber security coordination center\n\n**Diagram:** Refer to Nodal Authority Structure diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 12 — Need for an International Convention on Cyberspace
      // ========================================================
      {
        id: 'international-convention-cyber',
        number: '1.12',
        title: 'Need for an International Convention on Cyberspace',
        subtitle: 'Cyberspace governance ka international framework',
        icon: 'globe',
        accent: '#0047ff',
        englishDefinition:
          'An international convention on cyberspace is a global treaty or agreement that governs how nations interact, cooperate, and regulate cyber activities. It establishes norms for cyber behavior, defines rules for cross-border cyber operations, and creates mechanisms for international cooperation on cyber security. The need arises because cyberspace is global — attacks cross borders, and no single nation can unilaterally secure the internet. The Budapest Convention on Cybercrime is an example of such an international effort.',
        intro: 'Socha hai ki internet ek country ka hai? Nahi — internet global hai, borders ko cross karta hai. Hackers ek country se attack kar sakte hain, dusre country ke systems ko target kar sakte hain. Isliye international cooperation zaroori hai. Ek international convention on cyberspace countries ke beech rules, norms, aur cooperation ka framework banata hai. Is topic mein ham samjhnge ki international convention kyun zaroori hai, kaun si issues address karta hai, aur existing conventions kaun si hain.',
        sections: [
          {
            type: 'definition',
            title: 'International Convention on Cyberspace kya hai?',
            kicker: 'Definition',
            body: 'International convention on cyberspace ek global treaty hai jo nations ke beech cyber activities ka regulation karegi. Ye cyber behavior ka norms, cross-border operations ka rules, aur international cooperation ka mechanisms banati hai.',
            body2: 'Simple words mein: Jaise countries ke beech physical borders ke rules hote hain, waise hi cyberspace ke global rules zaroori hain. International convention ye global rules banati hai.',
            chips: ['Global treaty', 'Norms', 'Cross-border rules', 'Cooperation'],
          },
          {
            type: 'cards',
            title: 'Why International Convention Zaroori Hai?',
            kicker: 'Key Reasons',
            cards: [
              {
                icon: 'globe',
                title: 'Cyberspace Global Hai',
                body: 'Internet ek country ka nahi hai — global hai. Attacks borders ko cross karte hain. Ek country khud security ensure nahi kar sakti — international cooperation zaroori hai.',
              },
              {
                icon: 'warn',
                title: 'Cross-Border Cybercrime',
                body: 'Hackers ek country se attack kar sakte hain, dusre country ke systems target kar sakte hain. Legal jurisdiction complex hai. International rules zaroori hain.',
              },
              {
                icon: 'shield',
                title: 'Shared Threat Intelligence',
                body: 'Threat intelligence countries ke beech share karna zaroori hai. Ek country attack detect kare toh dusri countries ko bhi alert karna. International cooperation iske liye zaroori hai.',
              },
              {
                icon: 'users',
                title: 'Standardized Rules',
                body: 'Har country ka different cyber laws hain. International convention standardized rules banati hai, sab countries iske follow karti hain.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'International Cyberspace Governance',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'international-cyber',
            caption: 'International convention on cyberspace 4 areas address karta hai: Global nature of cyberspace, Cross-border cybercrime, Shared threat intelligence, aur Standardized rules. Budapest Convention on Cybercrime iska famous example hai.',
          },
          {
            type: 'points',
            title: 'Budapest Convention on Cybercrime',
            kicker: 'Existing Convention',
            points: [
              'Budapest Convention — first international treaty on cybercrime.',
              'Cybercrime investigation aur cooperation ka framework.',
              'Signatory countries cybercrime laws align karti hain.',
              'Cross-border evidence collection, extradition rules.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'International convention = cyberspace ka global governance framework.',
              'Zaroori kyun: cyberspace global hai, attacks cross borders, cooperation zaroori hai.',
              '4 areas: global nature, cross-border crime, shared intelligence, standardized rules.',
              'Budapest Convention on Cybercrime — famous example.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Why is an International Convention on Cyberspace needed? Discuss its importance.',
            answer:
              '**Need for International Convention on Cyberspace:**\n\n1. **Cyberspace is Global** — Internet ek country ka nahi hai. Attacks borders ko cross karte hain. Ek country khud security ensure nahi kar sakti — international cooperation zaroori hai.\n\n2. **Cross-Border Cybercrime** — Hackers ek country se attack kar sakte hain, dusre country ke systems target kar sakte hain. Legal jurisdiction complex hai. International rules zaroori hain.\n\n3. **Shared Threat Intelligence** — Threat intelligence countries ke beech share karna zaroori hai. Ek country attack detect kare toh dusri countries ko bhi alert karna.\n\n4. **Standardized Rules** — Har country ka different cyber laws hain. International convention standardized rules banati hai.\n\n**Budapest Convention on Cybercrime:**\n\n- First international treaty on cybercrime\n- Cybercrime investigation aur cooperation ka framework\n- Signatory countries cybercrime laws align karti hain\n- Cross-border evidence collection, extradition rules\n\n**Key Point:** Cyberspace global hai, isliye global governance zaroori hai. No single nation unilaterally cyberspace secure nahi kar sakti.\n\n**Diagram:** Refer to International Cyberspace Governance diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 13 — Introduction to Cyber Laws
      // ========================================================
      {
        id: 'intro-cyber-laws',
        number: '1.13',
        title: 'Introduction to Cyber Laws',
        subtitle: 'Cyber laws ka concept, scope aur importance',
        icon: 'file',
        accent: '#0047ff',
        englishDefinition:
          'Cyber laws are legal rules and regulations that govern online activities, digital transactions, internet usage, and cyber crimes. They define what is legal and illegal in cyberspace, establish penalties for cyber crimes, and protect digital rights. Cyber laws cover areas like data protection, privacy, e-commerce, cyber fraud, hacking, and intellectual property in the digital domain.',
        intro: 'Socha hai ki internet par koi bhi cheez kar sakte hain? Nahi — internet par bhi rules hain. Cyber laws online activities govern karte hain. Ye decide karte hain ki kya legal hai, kya illegal hai. Hacking illegal hai, data theft illegal hai, online fraud illegal hai. Cyber laws in sabke liye penalties define karte hain. Is topic mein ham samjhnge ki cyber laws kya hain, kaun si areas cover karte hain, aur ye hamari digital rights ko kaise protect karte hain.',
        sections: [
          {
            type: 'definition',
            title: 'Cyber Laws kya hain?',
            kicker: 'Definition',
            body: 'Cyber laws legal rules hain jo online activities, digital transactions, internet usage, aur cyber crimes govern karte hain. Ye define karte hain ki cyberspace mein kya legal hai, kya illegal hai. Cyber crimes ka penalties batate hain, digital rights protect karte hain.',
            body2: 'Simple words mein: Cyber laws = internet par rules. Jaise physical duniya mein laws hain (theft illegal, murder illegal), waise hi digital duniya mein bhi laws hain (hacking illegal, data theft illegal).',
            chips: ['Legal rules', 'Online activities', 'Cyber crimes', 'Digital rights'],
          },
          {
            type: 'cards',
            title: 'Cyber Laws ke Areas',
            kicker: 'Scope of Cyber Laws',
            cards: [
              {
                icon: 'lock',
                title: 'Data Protection aur Privacy',
                body: 'Personal data ko protect karna. Data collection, storage, processing — sabka rules. GDPR, India Ka Data Protection Bill — sab data protection ka framework hai.',
              },
              {
                icon: 'chart',
                title: 'E-Commerce aur Digital Transactions',
                body: 'Online transactions, e-commerce ka rules. Payment security, consumer protection, digital contracts — sab cyber laws ka part hain.',
              },
              {
                icon: 'warn',
                title: 'Cyber Crimes aur Penalties',
                body: 'Hacking, phishing, fraud, malware — sab cyber crimes hain. Cyber laws inki penalties define karte hain. Jail, fines, aur other punishments ho sakte hain.',
              },
              {
                icon: 'shield',
                title: 'Intellectual Property',
                body: 'Digital content ka intellectual property rights. Copyright, trademark, patent — digital domain mein sab protect ho sakte hain. Piracy illegal hai.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Cyber Laws — Scope aur Coverage',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'cyber-laws',
            caption: 'Cyber laws 4 main areas cover karte hain: Data Protection (privacy), E-Commerce (transactions), Cyber Crimes (penalties), aur Intellectual Property (digital rights). Ye sab milkar digital space ka legal framework banate hain.',
          },
          {
            type: 'points',
            title: 'Cyber Laws ka Importance',
            kicker: 'Why It Matters',
            points: [
              'Legal protection — digital rights ka legal protection milta hai.',
              'Crime prevention — cyber crimes ka penalties deterrent ka kaam karte hain.',
              'Fair play — online businesses aur users dono ka rights protect hote hain.',
              'International alignment — countries international cyber laws ko align karti hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Cyber laws = internet par rules — kya legal hai, kya illegal hai.',
              '4 areas: Data Protection, E-Commerce, Cyber Crimes, Intellectual Property.',
              'Importance: legal protection, crime prevention, fair play, international alignment.',
              'Cyber crimes ka penalties — jail, fines, punishments.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Define Cyber Laws. Explain their scope and importance.',
            answer:
              '**Cyber Laws Definition:**\nCyber laws legal rules hain jo online activities, digital transactions, internet usage, aur cyber crimes govern karte hain. Ye define karte hain ki cyberspace mein kya legal hai, kya illegal hai.\n\n**Scope of Cyber Laws:**\n\n1. **Data Protection aur Privacy** — Personal data ko protect karna. Data collection, storage, processing ka rules. GDPR, India Ka Data Protection Bill.\n\n2. **E-Commerce aur Digital Transactions** — Online transactions, e-commerce ka rules. Payment security, consumer protection, digital contracts.\n\n3. **Cyber Crimes aur Penalties** — Hacking, phishing, fraud, malware — sab cyber crimes. Cyber laws inki penalties define karte hain — jail, fines, punishments.\n\n4. **Intellectual Property** — Digital content ka IP rights. Copyright, trademark, patent — digital domain mein protect. Piracy illegal hai.\n\n**Importance:**\n\n1. **Legal Protection** — Digital rights ka legal protection milta hai.\n2. **Crime Prevention** — Cyber crimes ka penalties deterrent ka kaam karte hain.\n3. **Fair Play** — Online businesses aur users dono ka rights protect hote hain.\n4. **International Alignment** — Countries international cyber laws ko align karti hain.\n\n**Diagram:** Refer to Cyber Laws Scope diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 14 — Key Principles
      // ========================================================
      {
        id: 'key-principles-cyber',
        number: '1.14',
        title: 'Key Principles of Cyber Laws',
        subtitle: 'Cyber law ka fundamental principles',
        icon: 'check',
        accent: '#0047ff',
        englishDefinition:
          'Key principles of cyber law are the foundational concepts that guide the interpretation and application of digital regulations. These include jurisdiction (which country\'s laws apply), sovereignty (a nation\'s authority over its cyberspace), proportionality (penalties matching the crime), and due process (fair legal procedures). Other principles include data sovereignty, cross-border liability, and the balance between security and freedom.',
        intro: 'Har law ka kuch principles hote hain jo uska foundation banate hain. Cyber laws bhi iske apne key principles hain — jurisdiction, sovereignty, proportionality, due process. Ye principles cyber laws ko interpret aur apply kare ke guide karte hain. Is topic mein ham samjhnge ki ye fundamental principles kya hain, kaisa kaam karti hain, aur ye cyber law ka application mein kya role play karti hain.',
        sections: [
          {
            type: 'definition',
            title: 'Key Principles kya hain?',
            kicker: 'Definition',
            body: 'Cyber law key principles fundamental concepts hain jo digital regulations ka interpretation aur application guide karte hain. Ye jurisdiction, sovereignty, proportionality, aur due process jaise concepts pe based hain.',
            body2: 'Simple words mein: Key principles = cyber law ka rulebook. Ye batate hain ki laws kaisa interpret ho, kaisa apply ho, aur kaun principles follow hone chahiye.',
            chips: ['Jurisdiction', 'Sovereignty', 'Proportionality', 'Due process'],
          },
          {
            type: 'cards',
            title: 'Cyber Law ke Key Principles',
            kicker: 'Core Principles',
            cards: [
              {
                icon: 'globe',
                title: 'Jurisdiction',
                body: 'Jurisdiction decide karta hai ki kaun country ka laws apply hoga. Cyberspace global hai, isliye jurisdiction complex hai. Haackers ek country se attack kar sakte hain, victims dusre country mein ho sakte hain. Kaun country ka law apply hoga — ye principle decide karta hai.',
              },
              {
                icon: 'shield',
                title: 'Sovereignty',
                body: 'Sovereignty ka matlab hai ek nation apne cyberspace pe authority rakhti hai. Har country apne digital borders ka rules bana sakti hai. Lekin cyberspace borderless hai — sovereignty aur global nature dono ko balance karna challenging hai.',
              },
              {
                icon: 'warn',
                title: 'Proportionality',
                body: 'Proportionality principle batata hai ki penalties crime ka severity ke saath match karna chahiye. Chhoti crime — chhoti penalty. Badi crime — badi penalty. Ye fair aur just system banata hai.',
              },
              {
                icon: 'check',
                title: 'Due Process',
                body: 'Due process principle batata hai ki legal procedures fair hona chahiye. Accused ko fair trial milna chahiye. Evidence proper tarike se collect hona chahiye. Ye fundamental rights ka protection karta hai.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'Cyber Law Principles — Framework',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'law-principles',
            caption: 'Cyber law 4 key principles: Jurisdiction (kaun country ka law), Sovereignty (digital authority), Proportionality (penalty matching), Due Process (fair procedures). Ye fundamental principles cyber law ka application guide karte hain.',
          },
          {
            type: 'points',
            title: 'Other Important Principles',
            kicker: 'Additional Principles',
            points: [
              'Data sovereignty — data ek country ke laws ke under ho.',
              'Cross-border liability — attackers cross borders, liability complex.',
              'Security-freedom balance — security aur individual freedom dono protect hona chahiye.',
              'Technology neutrality — laws technology pe based nahi, behavior pe.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              '4 key principles: Jurisdiction, Sovereignty, Proportionality, Due Process.',
              'Jurisdiction: kaun country ka law apply hoga.',
              'Sovereignty: nation apne cyberspace pe authority.',
              'Proportionality: penalty crime severity ke saath match.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Explain the Key Principles of Cyber Law.',
            answer:
              '**Key Principles of Cyber Law:**\n\n1. **Jurisdiction** — Kaun country ka laws apply hoga. Cyberspace global hai, isliye jurisdiction complex hai. Hackers ek country se attack kar sakte hain, victims dusre country mein ho sakte hain.\n\n2. **Sovereignty** — Ek nation apne cyberspace pe authority rakhti hai. Har country apne digital borders ka rules bana sakti hai. Lekin cyberspace borderless hai — sovereignty aur global nature dono ko balance karna challenging hai.\n\n3. **Proportionality** — Penalties crime ka severity ke saath match karna chahiye. Chhoti crime — chhoti penalty. Badi crime — badi penalty. Ye fair aur just system banata hai.\n\n4. **Due Process** — Legal procedures fair hona chahiye. Accused ko fair trial milna chahiye. Evidence proper tarike se collect hona chahiye. Ye fundamental rights ka protection karta hai.\n\n**Other Principles:**\n\n5. **Data Sovereignty** — Data ek country ke laws ke under ho.\n6. **Cross-Border Liability** — Attackers cross borders, liability complex.\n7. **Security-Freedom Balance** — Security aur individual freedom dono protect hona chahiye.\n8. **Technology Neutrality** — Laws technology pe based nahi, behavior pe.\n\n**Diagram:** Refer to Cyber Law Principles diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 15 — Information Technology Act 2000
      // ========================================================
      {
        id: 'it-act-2000',
        number: '1.15',
        title: 'Information Technology Act 2000',
        subtitle: 'India ka cyber law — IT Act 2000 ka overview',
        icon: 'file',
        accent: '#0047ff',
        englishDefinition:
          'The Information Technology Act 2000 is India\'s primary cyber law, enacted to provide legal recognition to electronic transactions and facilitate e-filing of documents. It defines cyber crimes, establishes penalties, and creates mechanisms for digital signatures and electronic records. The Act was amended in 2008 to expand its scope. It covers areas like hacking, phishing, obscene publications, and data protection.',
        intro: 'India ka sabse important cyber law IT Act 2000 hai. Ye act 2000 mein banaya gaya tha. Ye electronic transactions ka legal recognition provide karti hai, cyber crimes define karti hai, aur penalties set karti hai. 2008 mein iske amendments kiye gaye the. IT Act India ka digital space ka legal framework hai. Is topic mein ham samjhnge ki IT Act 2000 kya hai, iske key provisions kaun si hain, aur ye India ke digital rights ko kaise protect karti hai.',
        sections: [
          {
            type: 'definition',
            title: 'IT Act 2000 kya hai?',
            kicker: 'Definition',
            body: 'IT Act 2000 India ka primary cyber law hai. Ye electronic transactions ka legal recognition provide karti hai, e-filing facilitate karti hai, cyber crimes define karti hai, penalties establish karti hai. Ye India ke digital space ka legal framework hai.',
            body2: 'Simple words mein: IT Act 2000 = India ka internet law. Ye batata hai ki online kya kar sakte hain, kya nahi, aur cyber crime ka kya punishment hai.',
            chips: ['Primary cyber law', 'Legal framework', 'Electronic transactions', 'Cyber crimes'],
          },
          {
            type: 'cards',
            title: 'IT Act 2000 ke Objectives',
            kicker: 'Key Objectives',
            cards: [
              {
                icon: 'file',
                title: 'Legal Recognition',
                body: 'Electronic transactions ka legal recognition dena. Digital signatures, electronic records — sab legal honge. Paper-based transactions ka digital equivalent legally valid hai.',
              },
              {
                icon: 'shield',
                title: 'Cyber Crimes Prevention',
                body: 'Cyber crimes define karna aur penalties set karna. Hacking, phishing, fraud — sabke liye punishments hain. Ye crimes ka deterrence create karta hai.',
              },
              {
                icon: 'check',
                title: 'Digital Infrastructure',
                body: 'Cyber Security Council establish karna. Digital signatures ka framework. Electronic records ka validity. Digital infrastructure ka legal support.',
              },
              {
                icon: 'users',
                title: 'Consumer Protection',
                body: 'Online consumers ka protection. Digital transactions ka rules. Consumer rights ka digital protection. E-commerce ka legal framework.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'IT Act 2000 — Structure',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'it-act-2000',
            caption: 'IT Act 2000 India ka primary cyber law hai. Ye 4 main areas cover karta hai: Legal Recognition (e-transactions), Cyber Crimes (penalties), Digital Infrastructure (security), aur Consumer Protection. Ye India ke digital rights ka legal framework banata hai.',
          },
          {
            type: 'points',
            title: 'IT Act 2000 ka Scope',
            kicker: 'Coverage Areas',
            points: [
              'Electronic transactions ka legal validity.',
              'Digital signatures ka recognition.',
              'Cyber crimes ka definition aur penalties.',
              'Data protection aur privacy ka framework.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'IT Act 2000 = India ka primary cyber law.',
              'Objectives: legal recognition, cyber crime prevention, digital infrastructure, consumer protection.',
              'Coverage: e-transactions, digital signatures, cyber crimes, data protection.',
              '2008 mein amendments kiye gaye — scope expand kiya gaya.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Describe the Information Technology Act 2000 and its key objectives.',
            answer:
              '**IT Act 2000 — Overview:**\n\nIT Act 2000 India ka primary cyber law hai. Ye 2000 mein enact hua tha. Ye electronic transactions ka legal recognition provide karti hai, cyber crimes define karti hai, aur penalties establish karti hai. 2008 mein amendments kiye gaye.\n\n**Key Objectives:**\n\n1. **Legal Recognition** — Electronic transactions ka legal recognition. Digital signatures, electronic records legally valid.\n\n2. **Cyber Crimes Prevention** — Cyber crimes define karna aur penalties set karna. Hacking, phishing, fraud — sabke punishments hain.\n\n3. **Digital Infrastructure** — Cyber Security Council establish karna. Digital signatures ka framework. Electronic records ka validity.\n\n4. **Consumer Protection** — Online consumers ka protection. Digital transactions ka rules. Consumer rights ka digital protection.\n\n**Coverage Areas:**\n- Electronic transactions ka legal validity\n- Digital signatures ka recognition\n- Cyber crimes ka definition aur penalties\n- Data protection aur privacy ka framework\n\n**Diagram:** Refer to IT Act 2000 Structure diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 16 — Overview and Provisions
      // ========================================================
      {
        id: 'it-act-provisions',
        number: '1.16',
        title: 'IT Act 2000 — Overview and Provisions',
        subtitle: 'IT Act 2000 ke important provisions aur sections',
        icon: 'file',
        accent: '#0047ff',
        englishDefinition:
          'The IT Act 2000 contains specific provisions for various cyber offenses and digital regulations. Key provisions include Section 65 (tampering with computer source code), Section 66 (computer-related offenses), Section 66A (penalties for offensive messages), Section 72 (penalty for breach of privacy), and provisions for digital signatures and electronic records. The Act establishes penalties ranging from fines to imprisonment for various cyber crimes.',
        intro: 'IT Act 2000 mein specific provisions hain jo different cyber offenses aur digital regulations ka rules batate hain. Kaun si section kaun sa crime cover karta hai, kaun si penalty hai — sab specific hai. Hacking kaun si section mein hai, phishing kaun si section mein hai — ye sab provisions important hain exam mein. Is topic mein ham IT Act 2000 ke important provisions aur sections dekhnge.',
        sections: [
          {
            type: 'definition',
            title: 'IT Act 2000 ke Important Provisions',
            kicker: 'Key Sections',
            body: 'IT Act 2000 mein specific provisions hain jo cyber offenses aur digital regulations ka rules batate hain. Key sections include Section 65 (tampering with source code), Section 66 (computer-related offenses), Section 72 (breach of privacy penalty). Ye sections cyber crimes ka penalties define karte hain.',
            body2: 'Simple words mein: IT Act ke sections — kaun sa section kaun sa crime cover karta hai, kaun si penalty hai. Ye sab specific provisions hain.',
            chips: ['Section 65', 'Section 66', 'Section 72', 'Digital signatures'],
          },
          {
            type: 'cards',
            title: 'IT Act 2000 ke Key Sections',
            kicker: 'Important Provisions',
            cards: [
              {
                icon: 'file',
                title: 'Section 65 — Source Code Tampering',
                body: 'Computer source code tampering ka penalty. Original source code ko modify, conceal, aur destroy karna illegal hai. Fine lakhon tak ho sakta hai. Ye software integrity protect karta hai.',
              },
              {
                icon: 'warn',
                title: 'Section 66 — Computer Offenses',
                body: 'Computer-related offenses ka penalty. Hacking, unauthorized access, data theft — sab Section 66 ke under aate hain. Jail aur fine dono ho sakta hai. Ye sabse important section hai.',
              },
              {
                icon: 'lock',
                title: 'Section 72 — Privacy Breach',
                body: 'Breach of privacy penalty. Sensitive information leak karna illegal hai. Digital records without consent disclose karna — Section 72 ke under aata hai. Jail aur fine ho sakta hai.',
              },
              {
                icon: 'check',
                title: 'Digital Signatures ka Recognition',
                body: 'Digital signatures ka legal recognition. Section 10A — electronic records ka validity. Digital signature ka framework — digital transactions legally valid hain.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'IT Act 2000 — Key Provisions',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'it-act-provisions',
            caption: 'IT Act 2000 ke 4 key provisions: Section 65 (source code tampering), Section 66 (computer offenses), Section 72 (privacy breach), aur Digital Signatures (Section 10A). Ye provisions cyber crimes ka penalties define karte hain.',
          },
          {
            type: 'points',
            title: 'Penalties ka Overview',
            kicker: 'Penalty Structure',
            points: [
              'Fine — amount varies by offense — thousands se lakhs tak.',
              'Imprisonment — jail terms vary — 6 months se 3 years tak.',
              'Both — fine aur jail dono ho sakte hain.',
              'Severity — serious offenses heavy penalties.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              'Section 65 — source code tampering.',
              'Section 66 — computer offenses (hacking, unauthorized access).',
              'Section 72 — privacy breach penalty.',
              'Digital signatures — Section 10A, legal recognition.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Explain the key provisions and penalties under the IT Act 2000.',
            answer:
              '**IT Act 2000 — Key Provisions:**\n\n1. **Section 65 — Source Code Tampering** — Computer source code tampering ka penalty. Original source code modify, conceal, destroy karna illegal hai. Fine lakhon tak ho sakta hai.\n\n2. **Section 66 — Computer-Related Offenses** — Computer-related offenses ka penalty. Hacking, unauthorized access, data theft — sab Section 66 ke under. Jail aur fine dono ho sakta hai. Ye sabse important section hai.\n\n3. **Section 72 — Breach of Privacy** — Breach of privacy penalty. Sensitive information leak karna illegal hai. Digital records without consent disclose karna. Jail aur fine ho sakta hai.\n\n4. **Section 10A — Digital Signatures** — Digital signatures ka legal recognition. Electronic records ka validity. Digital transactions legally valid hain.\n\n**Penalty Structure:**\n\n- **Fine** — Amount varies by offense. Thousands se lakhs tak.\n- **Imprisonment** — Jail terms vary. 6 months se 3 years tak.\n- **Both** — Fine aur jail dono ho sakte hain.\n- **Severity** — Serious offenses heavy penalties.\n\n**Other Provisions:**\n\n- Section 66A — offensive messages (2015 Supreme Court invalid)\n- Section 43 — damage to computer system\n- Section 79 — intermediary liability\n\n**Diagram:** Refer to IT Act Provisions diagram.',
          },
        ],
      },

      // ========================================================
      // TOPIC 17 — Amendments to IT Act 2000
      // ========================================================
      {
        id: 'it-act-amendments',
        number: '1.17',
        title: 'Amendments to IT Act 2000',
        subtitle: 'IT Act 2008 amendments — key changes aur updates',
        icon: 'check',
        accent: '#0047ff',
        englishDefinition:
          'The IT Act 2000 was significantly amended in 2008 to address new cyber threats and align with international standards. Key amendments include the introduction of new cyber crimes (phishing, identity theft, voyeurism), expansion of penalties, addition of Section 66A (offensive messages), stricter data protection rules, and provisions for intermediary liability. The 2008 amendments made the Act more comprehensive and aligned with global cyber security practices.',
        intro: 'IT Act 2000 ke original version mein kuch limitations the. Naye cyber crimes aate gaye, naye threats develop ho gaye. Isliye 2008 mein IT Act ke significant amendments kiye gaye. Ye amendments naye cyber crimes add karte hain, penalties expand karte hain, aur Act ko international standards se align karte hain. Is topic mein ham dekhnge ki 2008 amendments mein kya changes kiye gaye, kaun si naye provisions add kiye gaye, aur ye India ke cyber law ko kaise modernize kiya.',
        sections: [
          {
            type: 'definition',
            title: 'IT Act 2008 Amendments kya hain?',
            kicker: 'Definition',
            body: 'IT Act 2000 ke 2008 amendments significant changes hain jo naye cyber threats address karte hain. Ye naye cyber crimes add karte hain, penalties expand karte hain, aur Act ko international standards se align karte hain.',
            body2: 'Simple words mein: 2008 amendments = IT Act ke upgrade. Ye naye crimes, naye penalties, aur naye provisions add karta hai.',
            chips: ['2008 amendments', 'New crimes', 'Expanded penalties', 'Global alignment'],
          },
          {
            type: 'cards',
            title: '2008 Amendments ke Key Changes',
            kicker: 'Major Amendments',
            cards: [
              {
                icon: 'warn',
                title: 'New Cyber Crimes Add',
                body: 'Naye cyber crimes add kiye gaye — phishing, identity theft, voyeurism, aur other digital offenses. Ye crimes original IT Act mein nahi the. 2008 amendments inhe include kiya.',
              },
              {
                icon: 'chart',
                title: 'Penalties Expanded',
                body: 'Existing penalties aur fines expand kiye gaye. Serious crimes ke liye heavy penalties. Jail terms bhi increase kiye gaye. Ye penalties more deterrent ban gaye.',
              },
              {
                icon: 'globe',
                title: 'Intermediary Liability',
                body: 'Intermediaries (social media platforms, ISPs) ka liability define kiya. Section 79 amendment — intermediaries ko safe harbor provide. Platforms content monitor karegi, liability limited hogi.',
              },
              {
                icon: 'lock',
                title: 'Data Protection Framework',
                body: 'Data protection provisions expand kiye gaye. Sensitive personal data ka protection. Government aur private sector dono data protection ensure karegi.',
              },
            ],
          },
          {
            type: 'diagram',
            title: 'IT Act 2008 Amendments — Changes',
            kicker: 'Diagram (Exam Demonstrate Karne Lagaat)',
            diagram: 'it-act-amendments',
            caption: 'IT Act 2008 amendments 4 key changes laye: New Cyber Crimes (phishing, identity theft), Expanded Penalties (heavy fines), Intermediary Liability (Section 79), aur Data Protection Framework. Ye amendments India ke cyber law ko modernize kiya.',
          },
          {
            type: 'points',
            title: 'Other Important Amendments',
            kicker: 'Additional Changes',
            points: [
              'Section 66A — offensive messages ka provision (2015 Supreme Court invalid).',
              'Section 66B — impugning meaning of images.',
              'Section 66C — identity theft penalty.',
              'Section 66D — cheating by impersonation.',
            ],
          },
          {
            type: 'recap',
            title: 'Quick Recap',
            kicker: '5 Seconds Mein Yaad Karo',
            points: [
              '2008 amendments = IT Act ke upgrade.',
              '4 key changes: New crimes, Expanded penalties, Intermediary liability, Data protection.',
              'Naye crimes: phishing, identity theft, voyeurism.',
              'Supreme Court 2015 — Section 66A invalid kiya.',
            ],
          },
        ],
        examQuestions: [
          {
            question: 'Discuss the key amendments made to the IT Act 2000 in 2008.',
            answer:
              '**IT Act 2008 Amendments — Key Changes:**\n\n1. **New Cyber Crimes Add** — Naye cyber crimes add kiye gaye: phishing, identity theft, voyeurism, aur other digital offenses. Ye crimes original IT Act mein nahi the.\n\n2. **Penalties Expanded** — Existing penalties aur fines expand kiye gaye. Serious crimes ke liye heavy penalties. Jail terms increase kiye gaye. Ye penalties more deterrent ban gaye.\n\n3. **Intermediary Liability** — Section 79 amendment. Intermediaries (social media, ISPs) ka liability define kiya. Safe harbor provide — platforms content monitor karegi, liability limited hogi.\n\n4. **Data Protection Framework** — Data protection provisions expand kiye gaye. Sensitive personal data ka protection. Government aur private sector dono data protection ensure karegi.\n\n**Other Amendments:**\n\n- **Section 66A** — Offensive messages provision (2015 Supreme Court invalid)\n- **Section 66B** — Impugn meaning of images\n- **Section 66C** — Identity theft penalty\n- **Section 66D** — Cheating by impersonation\n\n**Impact:** 2008 amendments IT Act ko modernize kiya. Ye international standards se align hui. Naye cyber crimes ka coverage, heavy penalties, aur comprehensive data protection — sab India ke cyber law ko strong banaya.\n\n**Diagram:** Refer to IT Act Amendments diagram.',
          },
        ],
      },
    ],
  },
];
