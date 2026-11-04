// ========================================================
// UNIT 2 — Cybercrimes and Hacking
// Topics: 2.1 through 2.11
// Format: Same as Unit 1 (English definition, Hinglish explanation, diagrams, exam questions)
// ========================================================

export const cyberSecurityUnits2 = [
  {
    id: 'unit-2',
    number: '2',
    name: 'Cybercrimes and Hacking',
    topics: [
      // ========================================================
      // TOPIC 1 — Overview of Cyber-Attacks and Vulnerabilities
      // ========================================================
      {
        id: 'overview-cyber-attacks',
        number: '2.1',
        title: 'Overview of Cyber-Attacks and Vulnerabilities',
        subtitle: 'Cyber attacks kya hain — attack types aur vulnerability concept',
        icon: 'warn',
        accent: '#0047ff',
        englishDefinition: 'A cyber-attack is a deliberate exploitation of a system, network, or device vulnerability to gain unauthorized access, cause damage, or steal data. A vulnerability is a weakness or flaw in a system, application, or process that can be exploited by an attacker to cause harm.',
        intro: 'Cyber attacks vaise hi hain jaise ghar mein ghusna — darwaza khole bina andar aana. Hackers system ke weaknesses find karke unka use karte hain. Aaj kal har jagah online hai — bank, hospital, government — sabke data online hai. Hackers us data ko churana chahte hain. Ye chapter bataega ki attacks hotekaise hain, kya types hain, aur kaise protect karna hai.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Cyber-Attack — Jab koi hacker intentionally system, network, ya device ko damage kare, data chure, ya unauthorized access le, woh cyber attack kehlata hai.\n\nVulnerability — System mein weakness ya flaw jo hacker exploit kar sakta hai. Vulnerability software, hardware, network config, ya human behavior mein ho sakta hai.',
          },
          {
            type: 'cards',
            title: 'Types of Cyber-Attacks',
            cards: [
              { icon: 'virus', title: 'Malware Attacks', desc: 'Viruses, worms, Trojans, ransomware — system ko corrupt ya lock kar dete hain', color: '#ff0040' },
              { icon: 'shield', title: 'Phishing', desc: 'Fake emails/messages — users ko trick karke sensitive info churate hain', color: '#0047ff' },
              { icon: 'lock', title: 'MITM', desc: 'Victim aur server ke beech intercept — communication sunte/modify karte hain', color: '#ff8800' },
              { icon: 'server', title: 'DoS/DDoS', desc: 'Server par request flood — system crash ho jata hai, legit users access nahi kar paate', color: '#aa00ff' },
              { icon: 'database', title: 'SQL Injection', desc: 'Input fields mein SQL code — database manipulate hota hai, data leak', color: '#00c8ff' },
              { icon: 'users', title: 'Social Engineering', desc: 'Psychological manipulation — users se info obtain karte hain, humans weakest link', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Attack Lifecycle Diagram',
            diagram: 'cyber-attacks-overview',
            caption: 'Attack phases — Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Cyber attack deliberate exploitation hai system ya network vulnerability ka.',
              'Vulnerability koi bhi weakness ho sakti hai — software, hardware, config, ya human.',
              'Malware attacks most common hain — viruses, worms, Trojans, ransomware.',
              'Phishing social engineering technique hai — fake emails/messages.',
              'DoS/DDoS attacks server ko crash kar dete hain — legitimate users affected.',
              'SQL injection database attack hai — input validation na hone par.',
              'Zero-day attacks unknown vulnerabilities exploit karte hain — patch available nahi.',
              'Attack lifecycle 7 phases hain — Recon, Weaponize, Deliver, Exploit, Install, C2, Actions.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Cyber attack = intentional exploitation of vulnerability.\nVulnerability = system weakness.\nAttacks types = Malware, Phishing, MITM, DoS, SQL Injection, XSS, Zero-Day, Social Engineering.\nLifecycle = 7 phases: Recon → Weaponize → Deliver → Exploit → Install → C2 → Actions.',
          },
        ],
        examQuestions: [
          {
            question: 'Define cyber-attack and vulnerability. Explain the 7 phases of the attack lifecycle.',
            answer: 'Cyber-attack: deliberate exploitation of system/network vulnerability to gain unauthorized access, cause damage, or steal data.\nVulnerability: weakness or flaw in system, application, or process that can be exploited.\n\nAttack Lifecycle 7 Phases:\n1. Reconnaissance — Target info gather karna\n2. Weaponization — Malicious code prepare karna\n3. Delivery — Attack tool deliver karna\n4. Exploitation — Vulnerability exploit karna\n5. Installation — Malware install karna\n6. Command & Control — Remote access establish karna\n7. Actions on Objectives — Data theft, damage',
          },
          {
            question: 'What are the major types of cyber-attacks? Give one example of each.',
            answer: 'Major Types:\n1. Malware — viruses, worms, Trojans (example: WannaCry ransomware 2017)\n2. Phishing — fake emails (example: fake banking login pages)\n3. MITM — communication intercept (example: public Wi-Fi traffic capture)\n4. DoS/DDoS — server flood (example: DDoS attack on Dyn 2016)\n5. SQL Injection — database exploit (example: OWASP Top 10)\n6. XSS — script injection (example: Facebook XSS 2018)\n7. Zero-Day — unknown vuln (example: Stuxnet)\n8. Social Engineering — manipulation (example: fake IT support call)',
          },
        ],
      },

      // ========================================================
      // TOPIC 2 — Types of Threats — Malware, Spyware, Sniffing
      // ========================================================
      {
        id: 'threats-malware-spyware-sniffing',
        number: '2.2',
        title: 'Types of Threats — Malware, Spyware, Sniffing',
        subtitle: 'Malware types, spyware behavior, aur sniffing attack concept',
        icon: 'virus',
        accent: '#ff0040',
        englishDefinition: 'Malware is malicious software designed to damage, disrupt, or gain unauthorized access. Spyware secretly monitors user activity. Sniffing captures network traffic to intercept data packets including passwords and sensitive information.',
        intro: 'Malware vaise hi hai jaise kisi ke ghar mein chupke se aana — system ko damage karna. Spyware jaise chhote camera — aapke activities dekh raha hai. Sniffing jaise phone tapping — aapki conversation sun raha hai. Ye chapter malware ke different types, spyware, aur sniffing attacks ko samjhaega.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Malware (malicious software) — Koi bhi software jo system ko damage, disrupt, ya unauthorized access provide kare.\n\nSpyware — Chhupa software jo user activity monitor karta hai — keystrokes, browsing, passwords.\n\nSniffing — Network traffic capture karna — data packets read karna, sensitive info extract karna.',
          },
          {
            type: 'cards',
            title: 'Types of Malware',
            cards: [
              { icon: 'virus', title: 'Virus', desc: 'Self-replicating — host file attach hota hai. Jab run ho, spread hota hai', color: '#ff0040' },
              { icon: 'server', title: 'Worm', desc: 'Self-replicating — network se spread hota hai. Host file attach nahi hota', color: '#ff8800' },
              { icon: 'lock', title: 'Trojan', desc: 'Legitimate software ki tarah dikhta hai — backdoor open kar deta hai', color: '#0047ff' },
              { icon: 'warn', title: 'Ransomware', desc: 'System lock kar deta hai — files encrypt. Ransom demand karta hai', color: '#aa00ff' },
              { icon: 'eye', title: 'Spyware', desc: 'User activity monitor karta hai — keystrokes, passwords, browsing', color: '#00c8ff' },
              { icon: 'layers', title: 'Rootkit', desc: 'Kernel-level stealth — system se hide karta hai. Antivirus detect nahi', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Malware, Spyware & Sniffing Comparison',
            diagram: 'threats-malware-spyware-sniffing',
            caption: '3 types of threats — malware types, spyware monitoring, sniffing attack flow',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Malware 10+ types hain — virus, worm, Trojan, ransomware, spyware, adware, rootkit, fileless, botnet, wiper.',
              'Virus host file attach hota hai — worm independent hai.',
              'Trojan legitimate software ki tarah dikhta hai — backdoor open karta hai.',
              'Ransomware files encrypt kar deta hai — ransom demand karta hai.',
              'Spyware user activity monitor karta hai — keystrokes, passwords churata hai.',
              'Sniffing network traffic capture karta hai — data packets read karta hai.',
              'Sniffing tools: Wireshark, dsniff, tcpdump.',
              'Prevention: Encryption (HTTPS, WPA3), VPN, antivirus.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Malware = malicious software (virus, worm, Trojan, ransomware, spyware, rootkit).\nSpyware = hidden monitoring software.\nSniffing = network traffic capture.\nPrevention = encryption, VPN, antivirus, behavior monitoring.',
          },
        ],
        examQuestions: [
          {
            question: 'What is malware? Explain the different types of malware with examples.',
            answer: 'Malware: malicious software designed to damage, disrupt, or gain unauthorized access.\n\nTypes:\n1. Virus — self-replicating, host attach (example: CIH)\n2. Worm — self-replicating, network spread (example: ILOVEYOU)\n3. Trojan — disguised as legit software, backdoor (example: DarkComet)\n4. Ransomware — locks system, encrypts files (example: WannaCry)\n5. Spyware — monitors activity, steals data (example: Pegasus)\n6. Adware — displays ads, tracks activity (example: Zango)\n7. Rootkit — kernel stealth, invisible (example: Stuxnet)\n8. Fileless — memory/registry hide (example: PowerShell malware)',
          },
          {
            question: 'Explain spyware and sniffing attacks. How can they be prevented?',
            answer: 'Spyware: hidden software that monitors user activity — keystrokes, browsing, passwords. Examples: Pegasus, FinSpy.\n\nSniffing: captures network traffic — reads data packets, extracts sensitive info. Tools: Wireshark, tcpdump.\n\nPrevention:\n- Encryption: HTTPS, WPA3\n- VPN use karna\n- Antivirus + behavior monitoring\n- Network segmentation\n- Regular security audits',
          },
        ],
      },

      // ========================================================
      // TOPIC 3 — Gaining Access
      // ========================================================
      {
        id: 'gaining-access',
        number: '2.3',
        title: 'Gaining Access',
        subtitle: 'System kaise hack karte hain — access methods aur attack chain',
        icon: 'lock',
        accent: '#0047ff',
        englishDefinition: 'Gaining unauthorized access is the process by which attackers exploit vulnerabilities to enter a computer system without permission. Common methods include password cracking, software exploits, social engineering, and credential theft.',
        intro: 'Gaining access means system mein ghusna — jaise kisi ghar ka darwaza khole bina andar aana. Hackers various methods use karte hain — password crack, software exploit, social engineering. Ye chapter attack chain ke first major phase ko samjhaega — kaise hackers system mein entry karte hain.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Gaining Access — Jab hacker intentionally vulnerabilities exploit karke system mein enter kare without permission. Yeh attack chain ka first major phase hai after reconnaissance.',
          },
          {
            type: 'cards',
            title: 'Methods of Gaining Access',
            cards: [
              { icon: 'lock', title: 'Password Cracking', desc: 'Weak passwords brute-force ya dictionary attack se crack karna. Tools: John the Ripper, Hashcat', color: '#ff0040' },
              { icon: 'server', title: 'Software Exploits', desc: 'Known software vulnerabilities exploit karna. Tools: Metasploit. Example: EternalBlue', color: '#ff8800' },
              { icon: 'users', title: 'Social Engineering', desc: 'Humans manipulate karke credentials obtain karna. Phishing, pretexting, baiting', color: '#0047ff' },
              { icon: 'database', title: 'Credential Theft', desc: 'Stolen credentials use karna. Credential stuffing — multiple sites test karna', color: '#aa00ff' },
              { icon: 'globe', title: 'Network Attacks', desc: 'SMB, RDP, FTP services exploit karna. Tools: Nmap, Nessus', color: '#00c8ff' },
              { icon: 'warn', title: 'Physical Access', desc: 'Unlocked computers, USB drives, shoulder surfing. Physical security bypass', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Gaining Access — Attack Chain',
            diagram: 'gaining-access',
            caption: '4 main access methods — password cracking, software exploits, social engineering, credential theft',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Gaining access attack chain ka phase 3 hai — Recon → Scan → Gain Access.',
              'Password cracking brute-force ya dictionary attacks se hota hai.',
              'Software exploits known vulnerabilities use karte hain — patch nahi lagae hue.',
              'Social engineering humans manipulate karke credentials obtain karta hai.',
              'Credential theft data breaches se leaked credentials use karta hai.',
              'Network attacks SMB, RDP, FTP services exploit karte hain.',
              'Physical access unlocked computers, USB drives exploit karta hai.',
              'Web application attacks SQL injection, XSS, CSRF include karte hain.',
              'Wireless attacks Wi-Fi vulnerabilities exploit karte hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Gaining access = unauthorized system entry.\nMethods = password cracking, software exploits, social engineering, credential theft, network attacks, physical access, web app attacks.\nAttack chain = Recon → Scan → Gain Access → Maintain Access.',
          },
        ],
        examQuestions: [
          {
            question: 'Explain the process of gaining unauthorized access to a computer system.',
            answer: 'Gaining unauthorized access: process by which attackers exploit vulnerabilities to enter a system without permission.\n\nMethods:\n1. Password Cracking — brute-force, dictionary attacks. Tools: John the Ripper, Hashcat\n2. Software Exploits — known vulnerabilities. Tools: Metasploit\n3. Social Engineering — humans manipulate. Phishing, pretexting\n4. Credential Theft — stolen credentials. Credential stuffing\n5. Network Attacks — SMB, RDP, FTP. Tools: Nmap\n6. Physical Access — unlocked computers, USB drives\n7. Web Application Attacks — SQL injection, XSS\n8. Wireless Attacks — Wi-Fi vulnerabilities',
          },
          {
            question: 'What are the common methods used by attackers to gain system access? Give examples.',
            answer: 'Common Methods:\n1. Password Cracking — brute-force, dictionary (example: John the Ripper)\n2. Software Exploits — known vulnerabilities (example: EternalBlue, Metasploit)\n3. Social Engineering — phishing, pretexting (example: fake CEO email)\n4. Credential Theft — data breaches, stuffing (example: LinkedIn breach)\n5. Network Attacks — SMB, RDP (example: Nmap scanning)\n6. Physical Access — USB, shoulder surfing\n7. Web App Attacks — SQL injection, XSS\n8. Wireless — Wi-Fi exploits (example: Aircrack-ng)',
          },
        ],
      },

      // ========================================================
      // TOPIC 4 — Escalating Privileges
      // ========================================================
      {
        id: 'escalating-privileges',
        number: '2.4',
        title: 'Escalating Privileges',
        subtitle: 'Privilege escalation kya hai — vertical aur horizontal',
        icon: 'arrow',
        accent: '#ff8800',
        englishDefinition: 'Privilege escalation is obtaining higher-level permissions on a system than originally intended. Vertical escalation moves from lower to higher privilege levels (e.g., user to admin). Horizontal escalation accesses another user account at the same level.',
        intro: 'Privilege escalation jaise ghar mein ghuske chhup jaana aur phir captain banjana. Hackers system mein entry karke admin ya root access lena chahte hain. Vertical escalation same user ko higher rank. Horizontal escalation same rank ka alag user account access karna. Ye chapter dono types ko samjhaega.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Privilege Escalation — System par higher-level permissions obtain karna than originally intended.\n\nVertical Escalation — Lower-privilege user higher-level access (user → admin).\n\nHorizontal Escalation — Same-level access different user account.',
          },
          {
            type: 'cards',
            title: 'Types of Privilege Escalation',
            cards: [
              { icon: 'arrow', title: 'Vertical Escalation', desc: 'Lower → higher. User → admin → root. OS kernel exploit. Tools: LinPEAS, WinPEAS', color: '#ff0040' },
              { icon: 'users', title: 'Horizontal Escalation', desc: 'Same level different account. Session hijacking, credential theft', color: '#0047ff' },
              { icon: 'server', title: 'Kernel Vulnerabilities', desc: 'OS-level exploits system-wide access. Example: Dirty COW (Linux)', color: '#ff8800' },
              { icon: 'layers', title: 'Application Vulnerabilities', desc: 'Buffer overflows, format string. Admin privileges obtain karta hai', color: '#aa00ff' },
              { icon: 'lock', title: 'Password Attack', desc: 'Admin password crack karna. Brute force, dictionary, credential theft', color: '#00c8ff' },
              { icon: 'database', title: 'Misconfigured Permissions', desc: 'Weak file/directory permissions. SUID/SGID abuse. Root access allow karta hai', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Vertical vs Horizontal Escalation',
            diagram: 'escalating-privileges',
            caption: 'Vertical — user → admin → root. Horizontal — same level different account.',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Vertical escalation lower-privilege user higher-level access obtain karta hai.',
              'Horizontal escalation same-level access different user account obtain karta hai.',
              'Kernel vulnerabilities OS-level exploits system-wide access provide karte hain.',
              'Application vulnerabilities buffer overflows, format string attacks include karte hain.',
              'Misconfigured permissions weak file/directory permissions exploit karte hain.',
              'SUID/SGID binaries abuse karte hain — root access allow karta hai.',
              'Password attack admin password crack karta hai — brute force, dictionary.',
              'Service misconfiguration elevated privileges wale services exploit karta hai.',
              'Session hijacking horizontal escalation ka common method hai.',
              'Prevention: least privilege, patching, MFA, monitoring.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Vertical escalation = user → admin → root.\nHorizontal escalation = same level different account.\nMethods = kernel exploits, app vulnerabilities, misconfigured permissions, password attacks.\nPrevention = least privilege, patching, MFA, monitoring.',
          },
        ],
        examQuestions: [
          {
            question: 'Define privilege escalation. Explain vertical and horizontal escalation.',
            answer: 'Privilege escalation: obtaining higher-level permissions on a system than originally intended.\n\nVertical Escalation: lower-privilege user higher-level access (user → admin → root).\n- Kernel vulnerabilities exploit (Dirty COW)\n- Application vulnerabilities (buffer overflows)\n- Misconfigured permissions (SUID/SGID abuse)\n- Password attacks (brute force, dictionary)\n- Service misconfiguration\n\nHorizontal Escalation: same-level access different user account.\n- Session hijacking (cookie theft)\n- Credential theft (keyloggers)\n- Account takeover (password reset)',
          },
          {
            question: 'What are the methods used for vertical privilege escalation? Explain with examples.',
            answer: 'Vertical Escalation Methods:\n1. Kernel Vulnerabilities — OS-level exploits. Example: Dirty COW (Linux)\n2. Application Vulnerabilities — buffer overflows, format strings. Example: Format string attack\n3. Misconfigured Permissions — weak permissions, SUID/SGID. Example: /usr/bin/passwd root access\n4. Password Attack — admin password crack. Example: brute force, dictionary\n5. Service Misconfiguration — elevated privilege services. Example: misconfigured SSH keys\n\nPrevention: least privilege, regular patching, MFA, privilege monitoring, service hardening',
          },
        ],
      },

      // ========================================================
      // TOPIC 5 — Executing Applications
      // ========================================================
      {
        id: 'executing-applications',
        number: '2.5',
        title: 'Executing Applications',
        subtitle: 'Malicious code kaise run karte hain — execution techniques',
        icon: 'file',
        accent: '#aa00ff',
        englishDefinition: 'After gaining access, attackers execute malicious applications or commands on the compromised system. Techniques include binary execution, script execution, code injection, and LOLBins (Living Off the Land Binaries) abuse.',
        intro: 'Executing applications means system mein malicious code run karna. Jaise kisi ghar mein ghuske khana banana shuru karna. Hackers various techniques use karte hain — binary run karna, PowerShell scripts, DLL injection, aur system tools ka misuse karna. Ye chapter execution techniques ko samjhaega.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Application Execution — After gaining access, attackers malicious applications ya commands execute karna compromised system par. Yeh allow karta hai malicious code run karna, tools download karna, aur further attacks carry karna.',
          },
          {
            type: 'cards',
            title: 'Execution Techniques',
            cards: [
              { icon: 'file', title: 'Binary Execution', desc: 'Malicious binaries download aur execute karna. Reverse shells establish karna. Tools: Metasploit', color: '#ff0040' },
              { icon: 'layers', title: 'Script Execution', desc: 'PowerShell, Bash, Python scripts run karna. Fileless attacks. Tools: PowerShell Empire', color: '#0047ff' },
              { icon: 'arrow', title: 'Code Injection', desc: 'Running processes mein code inject karna. DLL injection, process hollowing', color: '#ff8800' },
              { icon: 'server', title: 'LOLBins', desc: 'Living Off the Land — system tools misuse (certutil, bitsadmin, wget, curl). Legit tools misuse', color: '#aa00ff' },
              { icon: 'clock', title: 'Scheduled Tasks', desc: 'Windows Task Scheduler, Linux cron abuse. Malicious scripts schedule karna — persistence', color: '#00c8ff' },
              { icon: 'database', title: 'Service Manipulation', desc: 'Windows services manipulate karna. Malicious services create karna — auto-start', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Application Execution Methods',
            diagram: 'executing-applications',
            caption: 'Binary execution, script execution, code injection, LOLBins, scheduled tasks, service manipulation',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Binary execution malicious binaries download aur execute karta hai.',
              'Script execution PowerShell, Bash, Python use karta hai — fileless attacks.',
              'Code injection running processes mein code inject karta hai — DLL injection.',
              'LOLBins system tools misuse karta hai — certutil, bitsadmin, wget, curl.',
              'Scheduled tasks Windows Task Scheduler, Linux cron abuse karta hai.',
              'Service manipulation Windows services manipulate karta hai — auto-start.',
              'Registry manipulation Run keys use karta hai — auto-execution.',
              'In-memory execution fileless hai — memory mein code run karta hai.',
              'Defense: application whitelisting, behavior monitoring, script logging.',
              'Memory protection: ASLR, DEP, stack canaries.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Binary execution = download and run malicious binaries.\nScript execution = PowerShell, Bash, Python scripts.\nCode injection = DLL injection, process hollowing.\nLOLBins = system tools misuse.\nDefense = whitelisting, behavior monitoring, script logging, memory protection.',
          },
        ],
        examQuestions: [
          {
            question: 'Explain the different techniques used by attackers to execute applications on a compromised system.',
            answer: 'Execution Techniques:\n1. Binary Execution — download and run malicious binaries. Reverse shells establish. Tools: Metasploit\n2. Script Execution — PowerShell, Bash, Python scripts. Fileless attacks. Tools: PowerShell Empire\n3. Code Injection — running processes mein code inject. DLL injection, process hollowing\n4. LOLBins — Living Off the Land. System tools misuse (certutil, bitsadmin, wget, curl)\n5. Scheduled Tasks — Windows Task Scheduler, Linux cron abuse. Persistence\n6. Service Manipulation — Windows services manipulate. Auto-start\n7. Registry Manipulation — Run keys use. Auto-execution\n8. In-Memory Execution — fileless. Memory monitoring bypass',
          },
          {
            question: 'What are LOLBins? How do attackers use them for execution?',
            answer: 'LOLBins (Living Off the Land Binaries): legitimate system tools misused by attackers for malicious purposes.\n\nUsage:\n- certutil — URL download (code decode)\n- bitsadmin — background download\n- wget, curl — files download\n- PowerShell — script execution\n- cmd — command execution\n\nWhy dangerous: legit tools look normal — difficult to detect.\n\nPrevention: Tool monitoring, behavior analysis, application whitelisting, endpoint detection.',
          },
        ],
      },

      // ========================================================
      // TOPIC 6 — Hiding Files
      // ========================================================
      {
        id: 'hiding-files',
        number: '2.6',
        title: 'Hiding Files',
        subtitle: 'Malicious files kaise hide karte hain — persistence techniques',
        icon: 'eye',
        accent: '#00c8ff',
        englishDefinition: 'After executing malicious code, attackers hide files to avoid detection. Techniques include encryption, disguising, rootkit stealth, steganography, and memory-based persistence. Attackers maintain persistence through bootkits, scheduled tasks, and service manipulation.',
        intro: 'Hiding files means malicious files chhupana — jaise kisi ghar mein chhup ke baithna. Hackers files encrypt karte hain, system files copy karte hain, rootkit techniques use karte hain. Ye chapter hiding techniques aur persistence mechanisms ko samjhaega — kaise hackers system mein rehte hain bina detect hue.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Hiding Files — Malicious files chhupana detection se avoid karna.\n\nTechniques: encryption, disguising, rootkits, steganography, hidden directories, memory-based persistence, registry-based hiding.\n\nPersistence — System restart ke baad bhi malware rehna. Bootkits, scheduled tasks, service persistence, startup folder, DLL hijacking, WMI subscriptions.',
          },
          {
            type: 'cards',
            title: 'Hiding Techniques',
            cards: [
              { icon: 'lock', title: 'Encryption', desc: 'Malicious files encrypt karke hide karna. Encrypted payloads antivirus detect nahi kar paate', color: '#ff0040' },
              { icon: 'file', title: 'Disguising', desc: 'Malicious files legitimate names mein hide karna. malware.exe ko svchost.exe naam se save karna', color: '#0047ff' },
              { icon: 'layers', title: 'Rootkit', desc: 'Kernel-level stealth — OS se hide karna. Files invisible bana deta hai', color: '#ff8800' },
              { icon: 'eye', title: 'Steganography', desc: 'Malicious code images, audio, documents mein hide karna. Files visually same dikhte hain', color: '#aa00ff' },
              { icon: 'server', title: 'Hidden Directories', desc: 'System hidden directories mein files save karna. Windows: System32, Linux: /tmp', color: '#00c8ff' },
              { icon: 'database', title: 'Memory-Based', desc: 'Files memory mein hide karna — no disk footprint. Memory injection techniques', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Hiding Files — Techniques & Persistence',
            diagram: 'hiding-files',
            caption: 'Hiding: encryption, disguising, rootkit, steganography. Persistence: bootkits, scheduled tasks, services.',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Encryption malicious files encrypt karke hide karta hai — antivirus detect nahi kar paata.',
              'Disguising files legitimate names mein hide karta hai — svchost.exe name use karta hai.',
              'Rootkit kernel-level stealth provide karta hai — OS detect nahi kar paata.',
              'Steganography malicious code images/audio/documents mein hide karta hai.',
              'Hidden directories system folders mein files save karta hai.',
              'Memory-based persistence memory injection techniques use karta hai — no disk.',
              'Registry-based hiding configurations registry mein save karta hai.',
              'Bootkits BIOS/firmware level persistence provide karte hain.',
              'Scheduled tasks automatic execution schedule karte hain.',
              'DLL hijacking legitimate applications hijack karte hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Hiding = encryption, disguising, rootkit, steganography, hidden dirs, memory-based, registry.\nPersistence = bootkits, scheduled tasks, services, startup folder, DLL hijacking, WMI.\nDefense = file integrity monitoring, rootkit scanners, memory forensics, regular audits.',
          },
        ],
        examQuestions: [
          {
            question: 'How do attackers hide files on a compromised system? Explain different techniques.',
            answer: 'Hiding Techniques:\n1. Encryption — files encrypt karke hide karna. Encrypted payloads antivirus detect nahi\n2. Disguising — legitimate names mein hide karna. malware.exe ko svchost.exe\n3. Rootkit — kernel-level stealth. Files invisible bana deta hai\n4. Steganography — images/audio/documents mein hide karna. Visually same dikhte hain\n5. Hidden Directories — System32, /tmp mein save karna\n6. Memory-Based — memory injection, no disk footprint\n7. Registry-Based — deep registry keys mein save karna',
          },
          {
            question: 'What are persistence mechanisms used by attackers? Explain with examples.',
            answer: 'Persistence Mechanisms:\n1. Bootkits — BIOS/firmware level. System restart ke baad malware load (example: LoJax)\n2. Scheduled Tasks — Windows Task Scheduler, Linux cron. Auto-execution (example: cron backdoor)\n3. Service Persistence — Windows/systemd services. Auto-start (example: service backdoor)\n4. Startup Folder — login scripts, startup items\n5. DLL Hijacking — legitimate apps hijack karna. Malicious DLL load\n6. WMI Subscriptions — event-driven execution. WMI backdoor\n\nDefense: file integrity monitoring, rootkit scanners, memory forensics, regular audits',
          },
        ],
      },

      // ========================================================
      // TOPIC 7 — Covering Tracks
      // ========================================================
      {
        id: 'covering-tracks',
        number: '2.7',
        title: 'Covering Tracks',
        subtitle: 'Evidence kaise delete karte hain — anti-forensics techniques',
        icon: 'clock',
        accent: '#ff8800',
        englishDefinition: 'Covering tracks is the phase where attackers erase or modify evidence of their activities to avoid detection. Techniques include log deletion, timestomping, shadow copy deletion, and anti-forensics tools. Attackers use tools like CCleaner, SDelete to remove traces.',
        intro: 'Covering tracks means apne footprint chhupana — jaise kisi ghar se nikalke khidki band karna. Hackers logs delete karte hain, timestamps modify karte hain, system restore points erase karte hain. Ye chapter anti-forensics techniques ko samjhaega — kaise hackers apne activities ko chhupate hain.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Covering Tracks — Attackers evidence erase ya modify karna detection aur attribution se avoid karna.\n\nTechniques: log deletion, timestomping, shadow copy deletion, anti-forensics tools, registry modification, network cover tracks, memory forensics evasion, file system evidence deletion.',
          },
          {
            type: 'cards',
            title: 'Covering Tracks Techniques',
            cards: [
              { icon: 'clock', title: 'Log Deletion', desc: 'System/application logs delete karna. Windows Event Logs, Linux syslog clear karna', color: '#ff0040' },
              { icon: 'file', title: 'Timestomping', desc: 'File timestamps modify karna — creation, access, modification times. Malicious files legit timestamps match', color: '#0047ff' },
              { icon: 'layers', title: 'Shadow Copy', desc: 'Windows Volume Shadow Copies delete karna. System restore points erase karna', color: '#ff8800' },
              { icon: 'warn', title: 'Anti-Forensics', desc: 'Data wiping tools, file shredders. Tools: CCleaner, SDelete, shred', color: '#aa00ff' },
              { icon: 'database', title: 'Registry Modification', desc: 'Windows Registry modify karna. Last Write Time (LWT) modify karna', color: '#00c8ff' },
              { icon: 'globe', title: 'Network Cover', desc: 'Network traffic logs clear karna. Firewall, proxy, IDS logs delete karna', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Covering Tracks — Anti-Forensics',
            diagram: 'covering-tracks',
            caption: 'Log deletion, timestomping, shadow copy, anti-forensics tools, registry modification',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Log deletion system/application logs clear karta hai — no evidence.',
              'Timestomping file timestamps modify karta hai — malicious files legit timestamps match.',
              'Shadow copy deletion Volume Shadow Copies erase karta hai.',
              'Anti-forensics tools data wiping, file shredding provide karte hain.',
              'Registry modification Last Write Time modify karta hai.',
              'Network cover tracks traffic logs clear karta hai.',
              'Memory forensics evasion memory artifacts clear karta hai.',
              'File system evidence MFT entries, slack space clear karta hai.',
              'Process/service evidence malicious processes terminate karta hai.',
              'Browser history cache, cookies clear karta hai.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Covering tracks = evidence erase/modify karna detection se avoid karna.\nTechniques = log deletion, timestomping, shadow copy, anti-forensics, registry mod, network cover, memory evasion, file system.\nDefense = centralized logging, log protection, file integrity, secure timestamping, backup isolation.',
          },
        ],
        examQuestions: [
          {
            question: 'What is covering tracks in cyber attacks? Explain the techniques used.',
            answer: 'Covering tracks: phase where attackers erase or modify evidence of activities to avoid detection.\n\nTechniques:\n1. Log Deletion — system/application logs clear. Windows Event Logs, Linux syslog\n2. Timestomping — file timestamps modify. Malicious files legit timestamps match\n3. Shadow Copy Deletion — Volume Shadow Copies erase. System restore points\n4. Anti-Forensics — data wiping, file shredders. Tools: CCleaner, SDelete, shred\n5. Registry Modification — LWT modify. Registry key timestamps change\n6. Network Cover — traffic logs clear. Firewall, proxy, IDS logs\n7. Memory Evasion — memory artifacts clear. Memory wipe before exit\n8. File System — MFT entries, slack space clear\n9. Process/Service — malicious processes terminate. Services delete\n10. Browser History — cache, cookies, history clear',
          },
          {
            question: 'Explain timestomping and shadow copy deletion. How can they be prevented?',
            answer: 'Timestomping: file timestamps modify karna — creation, access, modification times. Malicious files legitimate timestamps ke saath match karna. Tools: Touch.\n\nShadow Copy Deletion: Windows Volume Shadow Copies delete karna — system restore points erase. Example: wmic shadowcopy delete.\n\nPrevention:\n- Centralized logging, log protection\n- File integrity monitoring, secure timestamping\n- Shadow copy protection, backup isolation\n- Registry auditing, change monitoring\n- Network traffic capture, log aggregation\n- Memory forensics, volatile data capture',
          },
        ],
      },

      // ========================================================
      // TOPIC 8 — Worms
      // ========================================================
      {
        id: 'worms',
        number: '2.8',
        title: 'Worms',
        subtitle: 'Self-replicating malware — network se spread hota hai',
        icon: 'server',
        accent: '#0047ff',
        englishDefinition: 'A computer worm is a standalone malware that replicates itself to spread to other computers. Unlike viruses, worms do not need to attach to existing programs. They spread through networks, exploiting vulnerabilities, email attachments, and removable media.',
        intro: 'Worms jaise zombies — ek computer se doosre computer automatically spread hote hain. Virus ki tarah host file attach nahi hota. Network vulnerabilities exploit karke spread hote hain. Email attachments, USB drives, network shares se spread hote hain. Ye chapter worm characteristics, spread methods, aur impact ko samjhaega.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Worm — Standalone malware jo apne aap copy create karta hai aur other computers spread karta hai.\n\nVirus se alag — worm host file attach nahi hota. Independently run karta hai.\n\nNetwork vulnerabilities exploit karke spread karta hai — email, network shares, removable media.',
          },
          {
            type: 'cards',
            title: 'Worm Characteristics',
            cards: [
              { icon: 'server', title: 'Self-Replicating', desc: 'Worm independent program hai. Apne aap copy create karta hai. Other systems spread karta hai', color: '#ff0040' },
              { icon: 'globe', title: 'No Host File', desc: 'Virus ki tarah host file attach nahi hota. Independently run karta hai', color: '#0047ff' },
              { icon: 'network', title: 'Network Spread', desc: 'Network vulnerabilities exploit karta hai. Email, IM, file sharing through spread', color: '#ff8800' },
              { icon: 'warn', title: 'Bandwidth', desc: 'Network traffic increase karta hai. Internet slowdown kar sakta hai', color: '#aa00ff' },
              { icon: 'file', title: 'Email Attachments', desc: 'Email attachments through spread karta hai. User opens attachment — worm activates', color: '#00c8ff' },
              { icon: 'layers', title: 'Software Exploits', desc: 'OS ya application vulnerabilities exploit karta hai. Remote code execution', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Worm Replication Cycle',
            diagram: 'worms',
            caption: 'Replication — infect → copy → search vulnerable → exploit → spread',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Worm standalone malware hai — host file attach nahi hota.',
              'Self-replicating hai — apne aap copy create karta hai.',
              'Network vulnerabilities exploit karta hai — email, network shares.',
              'Email attachments through spread karta hai — ILOVEYOU example.',
              'Network shares SMB exploit karta hai — Code Red example.',
              'Software vulnerabilities exploit karta hai — EternalBlue/WannaCry.',
              'Removable media USB drives through spread karta hai — Conficker.',
              'Impact: network damage, system damage, privacy violation.',
              'Backdoor installation, botnet creation, DDoS attacks.',
              'Financial damage: extortion, data recovery costs.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Worm = standalone self-replicating malware.\nSpread = email attachments, network shares, software exploits, removable media, P2P.\nImpact = network damage, system damage, privacy, backdoors, financial.\nExamples = ILOVEYOU, Conficker, Stuxnet, WannaCry.\nPrevention = patching, antivirus, network security, email filtering.',
          },
        ],
        examQuestions: [
          {
            question: 'What is a computer worm? How does it differ from a virus?',
            answer: 'Worm: standalone malware that replicates itself to spread to other computers.\n\nVirus vs Worm:\n- Virus: host file attach hota hai. Jab host run ho, spread hota hai.\n- Worm: host file attach nahi hota. Independently run karta hai.\n- Virus: infected files/removable media se spread hota hai.\n- Worm: network vulnerabilities exploit karke spread hota hai.\n\nExamples:\n- ILOVEYOU (2000) — email worm\n- Conficker (2008) — network worm\n- Stuxnet (2010) — industrial worm\n- WannaCry (2017) — ransomware worm',
          },
          {
            question: 'Explain the spread methods and impact of computer worms.',
            answer: 'Spread Methods:\n1. Email Attachments — user opens attachment, worm activates (ILOVEYOU)\n2. Network Shares — SMB shares exploit (Code Red)\n3. Software Vulnerabilities — OS/app exploits (EternalBlue/WannaCry)\n4. Instant Messaging — IM clients through spread\n5. Removable Media — USB drives, auto-run (Conficker)\n6. P2P Networks — file sharing through spread\n\nImpact:\n1. Network Damage — traffic, slowdown, DoS\n2. System Damage — file corruption, instability\n3. Privacy — info theft, keyloggers\n4. Backdoors — remote access, botnets\n5. Financial — extortion, recovery costs',
          },
        ],
      },

      // ========================================================
      // TOPIC 9 — Trojans
      // ========================================================
      {
        id: 'trojans',
        number: '2.9',
        title: 'Trojans',
        subtitle: 'Disguise malware — backdoor open karta hai',
        icon: 'lock',
        accent: '#ff0040',
        englishDefinition: 'A Trojan horse is malware that disguises itself as legitimate software to trick users into installing it. Unlike viruses and worms, Trojans do not self-replicate. They rely on user deception and commonly install backdoors for remote access.',
        intro: 'Trojan jaise kisi mask cosmetic ki tarah — andar malicious hai. Users ko lagta hai woh legitimate software hai — install karte hain. Backdoor open ho jata hai — hacker remote access le leta hai. Ye chapter Trojan characteristics, types, aur installation methods ko samjhaega.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Trojan Horse — Malware jo legitimate software ki tarah dikhta hai. Users ko trick karke install hota hai.\n\nVirus/Worm se alag — Trojan self-replicate nahi karta. User deception pe rely karta hai.\n\nCommon effect — Backdoor open kar deta hai. Remote access allow karta hai.',
          },
          {
            type: 'cards',
            title: 'Types of Trojans',
            cards: [
              { icon: 'lock', title: 'RAT', desc: 'Remote Access Trojan — attacker remote control. Backdoor access. Example: DarkComet, Sub7', color: '#ff0040' },
              { icon: 'database', title: 'Banking Trojan', desc: 'Financial info target karta hai. Credentials, credit card steal karta hai. Example: Zeus', color: '#0047ff' },
              { icon: 'server', title: 'Backdoor Trojan', desc: 'System access provide karta hai. Hidden accounts create karta hai. Example: Back Orifice', color: '#ff8800' },
              { icon: 'layers', title: 'Rootkit Trojan', desc: 'System hide karta hai. Kernel-level stealth. Example: Nebulet', color: '#aa00ff' },
              { icon: 'eye', title: 'Spy Trojan', desc: 'User activity monitor karta hai. Keystrokes, screen capture, webcam. Example: Pegasus', color: '#00c8ff' },
              { icon: 'warn', title: 'Fake AV', desc: 'Fake antivirus dikhta hai. Users ko scare karta hai — fake threats. Money extortion. Example: FakeAV', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Trojan Installation Flow',
            diagram: 'trojans',
            caption: 'Disguise → download → install → backdoor. Types: RAT, Banking, Backdoor, Rootkit, Spy, Adware.',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Trojan legitimate software ki tarah dikhta hai — users ko trick karta hai.',
              'Self-replication nahi karta — user deception pe rely karta hai.',
              'RAT remote access provide karta hai — backdoor access.',
              'Banking Trojan financial info target karta hai — credentials, credit cards.',
              'Backdoor Trojan system access provide karta hai — hidden accounts.',
              'Rootkit Trojan kernel-level stealth provide karta hai.',
              'Spy Trojan user activity monitor karta hai — keystrokes, screen capture.',
              'Adware Trojan advertisements display karta hai — revenue generation.',
              'Launcher Trojan other malware download aur install karta hai.',
              'Installation: freeware, pirated software, email attachments, fake updates.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Trojan = disguised malware.\nTypes = RAT, Banking, Backdoor, Rootkit, Spy, Adware, Launcher, Fake AV, Game/App.\nInstallation = freeware, pirated, email, fake updates, malicious sites, USB.\nDefense = don\'t download unknown, use antivirus, check file signatures.',
          },
        ],
        examQuestions: [
          {
            question: 'What is a Trojan horse? How is it different from a virus or worm?',
            answer: 'Trojan Horse: malware that disguises itself as legitimate software to trick users into installing it.\n\nDifferences:\n- Virus: self-replicating, host file attach hota hai\n- Worm: self-replicating, network spread\n- Trojan: no self-replication, user deception pe rely karta hai\n\nTypes:\n1. RAT — remote control, backdoor (DarkComet, Sub7)\n2. Banking Trojan — financial theft (Zeus)\n3. Backdoor Trojan — system access, hidden accounts\n4. Rootkit Trojan — kernel stealth\n5. Spy Trojan — activity monitoring (Pegasus)\n6. Adware Trojan — ads display\n7. Launcher Trojan — other malware install',
          },
          {
            question: 'Explain the different types of Trojans and how they are installed.',
            answer: 'Types of Trojans:\n1. RAT — remote control, backdoor access (DarkComet, Sub7)\n2. Banking Trojan — financial theft, credentials (Zeus, SpyEye)\n3. Backdoor Trojan — system access, hidden accounts (Back Orifice)\n4. Rootkit Trojan — kernel-level stealth (Nebulet)\n5. Spy Trojan — activity monitoring (Pegasus)\n6. Adware Trojan — ads display, revenue (Zango)\n7. Launcher Trojan — other malware download/install\n8. Fake AV — fake threats, money extortion (FakeAV)\n9. Game/App Trojan — disguised as legit app\n\nInstallation:\n1. Freeware — bundled with Trojan\n2. Pirated Software — cracked software\n3. Email Attachments — fake attachments\n4. Fake Updates — fake software updates\n5. Malicious Websites — drive-by downloads\n6. USB Drives — auto-run',
          },
        ],
      },

      // ========================================================
      // TOPIC 10 — Viruses
      // ========================================================
      {
        id: 'viruses',
        number: '2.10',
        title: 'Viruses',
        subtitle: 'Self-replicating malware — host file attach hota hai',
        icon: 'virus',
        accent: '#ff0040',
        englishDefinition: 'A computer virus is a malicious program that attaches itself to a legitimate program or file and replicates when the host program is executed. Viruses spread from one system to another through infected files, removable media, and networks.',
        intro: 'Virus jaise kisi bimaari — ek computer se doosre computer spread hota hai. Host file attach hota hai. Jab file run hoti hai, virus active hota hai. Ye chapter virus lifecycle, types, aur effects ko samjhaega — kaise viruses create, replicate, install, evade detection.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Computer Virus — Malicious program jo legitimate program ya file attach hota hai. Jab host program run hota hai, virus replicate hota hai.\n\nSpread — Infected files, removable media, networks.\n\nCharacteristics: Host-dependent, self-replicating, spread through files, payload damage.',
          },
          {
            type: 'cards',
            title: 'Types of Viruses',
            cards: [
              { icon: 'file', title: 'File Infector', desc: 'Executable files infect karta hai. .EXE, .COM modify karta hai. Jab file run ho, virus active', color: '#ff0040' },
              { icon: 'server', title: 'Boot/Partition', desc: 'Hard disk partition table infect karta hai. Boot sector modify karta hai. System boot nahi karta', color: '#0047ff' },
              { icon: 'layers', title: 'Macro Virus', desc: 'Microsoft Office documents infect karta hai. Word, Excel macros manipulate karta hai', color: '#ff8800' },
              { icon: 'arrow', title: 'Multipartite', desc: 'Multiple infection methods combine karta hai. File infector + boot sector. Hard to remove', color: '#aa00ff' },
              { icon: 'lock', title: 'Polymorphic', desc: 'Apne code modify karta hai — detect difficult. Encryption, mutation. Signature change karta hai', color: '#00c8ff' },
              { icon: 'eye', title: 'Stealth', desc: 'System se hide karta hai. Antivirus evade karta hai. Hidden partition viruses', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Virus Lifecycle',
            diagram: 'viruses',
            caption: 'Create → Replicate → Install → Evade → Payload → Spread',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Virus host file attach hota hai — jab host run ho, virus active hota hai.',
              'File infector virus .EXE, .COM files modify karta hai.',
              'Boot/partition virus hard disk partition table infect karta hai.',
              'Macro virus Microsoft Office documents infect karta hai.',
              'Multipartite virus multiple infection methods combine karta hai.',
              'Polymorphic virus apne code modify karta hai — detect difficult.',
              'Metamorphic virus full code modify karta hai — very difficult detect.',
              'Encrypted virus code encrypt karta hai — detect difficult.',
              'Stealth virus system se hide karta hai — antivirus evade karta hai.',
              'Effects: data destruction, system slowdown, privacy violation, backdoor.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Virus = host-attached self-replicating malware.\nLifecycle = Create → Replicate → Install → Evade → Payload → Spread.\nTypes = File Infector, Boot, Macro, Multipartite, Polymorphic, Encrypted, Metamorphic, Stealth.\nEffects = data destruction, system slowdown, privacy, backdoor, spam.\nDefense = antivirus, regular scans, updates, safe browsing.',
          },
        ],
        examQuestions: [
          {
            question: 'What is a computer virus? Explain the virus lifecycle.',
            answer: 'Computer Virus: malicious program that attaches itself to a legitimate program or file and replicates when the host program is executed.\n\nLifecycle:\n1. Creation — virus code write karna\n2. Replication — host file attach, copy create\n3. Installation — system mein install, registry modify\n4. Detection & Evasion — antivirus avoid, obfuscation\n5. Payload Delivery — malicious activity execute\n6. Spread — other systems infect\n\nCharacteristics: host-dependent, self-replicating, spread through files.',
          },
          {
            question: 'Explain the different types of viruses with examples.',
            answer: 'Types:\n1. File Infector — .EXE, .COM modify. Example: CIH virus\n2. Boot/Partition — partition table, boot sector infect. Example: Stoned\n3. Macro — Office documents infect. Example: Concept\n4. Multipartite — multiple methods combine. Example: Frodo\n5. Polymorphic — code modify, signature change. Example: 1260\n6. Encrypted — code encrypt, detect difficult\n7. Metamorphic — full code modify. Example: W2K/Kak\n8. Stealth — system se hide. Example: hidden partition viruses\n\nEffects: data destruction, system slowdown, privacy violation, backdoor, spam',
          },
        ],
      },

      // ========================================================
      // TOPIC 11 — Backdoors
      // ========================================================
      {
        id: 'backdoors',
        number: '2.11',
        title: 'Backdoors',
        subtitle: 'Hidden access — authentication bypass karta hai',
        icon: 'shield',
        accent: '#00ff88',
        englishDefinition: 'A backdoor is a hidden method for bypassing normal authentication or encryption in a computer system. Attackers install backdoors to gain persistent remote access to compromised systems without re-exploiting vulnerabilities.',
        intro: 'Backdoor jaise ghar ka chupa darwaza — normal lock bypass karke andar aana. Hackers backdoor install karte hain — permanent access. Jab bhi attacker system access chahe, backdoor se directly enter kar sakta hai. Ye chapter backdoor types, why dangerous, aur prevention ko samjhaega.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Backdoor — Hidden method for bypassing normal authentication ya encryption.\n\nAttackers backdoors install karte hain — persistent remote access.\nRe-exploitation nahi karna padta — wapas asaani se aa sakta hai.',
          },
          {
            type: 'cards',
            title: 'Types of Backdoors',
            cards: [
              { icon: 'lock', title: 'Remote Access', desc: 'Attacker system mein remote access backdoor install karta hai. Jab bhi chahe, backdoor se enter kar sakta hai. RAT Trojans', color: '#ff0040' },
              { icon: 'layers', title: 'Rootkit', desc: 'Kernel-level stealth. System se hidden rehta hai. OS detect nahi kar paati. Sabse dangerous', color: '#0047ff' },
              { icon: 'users', title: 'Account', desc: 'Hidden account create karta hai — admin ya privileged account. Normal users ko pata nahi chalta', color: '#ff8800' },
              { icon: 'arrow', title: 'Command Injection', desc: 'Application ke input field mein command injection backdoor create karta hai. SQL injection, shell commands', color: '#aa00ff' },
              { icon: 'server', title: 'Hardware', desc: 'Hardware level backdoor — motherboard firmware, BIOS modification. Hardware detect difficult', color: '#00c8ff' },
              { icon: 'shield', title: 'RAT Trojan', desc: 'Remote Access Trojan — backdoor install karta hai. DarkComet, Sub7, NetBus', color: '#00ff88' },
            ],
          },
          {
            type: 'diagram',
            title: 'Backdoor Attack Flow',
            diagram: 'backdoors',
            caption: 'Exploit → install → hidden access → remote control. Types: RAT, Rootkit, Account, Command Injection, Hardware.',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Backdoor hidden method hai normal authentication bypass karna.',
              'Remote access backdoor attacker ko permanent system access deta hai.',
              'Rootkit backdoor kernel-level stealth provide karta hai — OS detect nahi kar paata.',
              'Account backdoor hidden account create karta hai — admin privileges.',
              'Command injection backdoor SQL injection, shell command injection allow karta hai.',
              'Hardware backdoor motherboard firmware, BIOS modification karta hai.',
              'RAT Trojans backdoor install karte hain — DarkComet, Sub7, NetBus.',
              'Permanent access — re-exploitation nahi karna padta.',
              'Authentication bypass — normal login process bypass.',
              'Invisible operation — rootkit stealth.',
              'Difficult detection — forensic analysis difficult.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Backdoor = hidden authentication bypass.\nTypes = Remote Access, Rootkit, Account, Command Injection, Hardware, RAT Trojan.\nWhy dangerous = permanent access, auth bypass, invisible, future attacks, difficult detection.\nPrevention = regular scans, strong auth (MFA), patching, network segmentation, endpoint protection.',
          },
        ],
        examQuestions: [
          {
            question: 'Define backdoor. Explain the types of backdoors.',
            answer: 'Backdoor: hidden method for bypassing normal authentication or encryption in a computer system.\n\nTypes:\n1. Remote Access — attacker remote access backdoor install karta hai. Jab bhi chahe, enter kar sakta hai\n2. Rootkit — kernel-level stealth. System se hidden rehta hai. OS detect nahi kar paati\n3. Account — hidden account create karta hai. Admin privileges\n4. Command Injection — SQL injection, shell command injection\n5. Hardware — motherboard firmware, BIOS modification\n6. RAT Trojan — Remote Access Trojan. DarkComet, Sub7, NetBus',
          },
          {
            question: 'Why are backdoors considered dangerous? How can they be prevented?',
            answer: 'Why Dangerous:\n1. Permanent Access — attacker ko permanent system access. Re-exploitation nahi karna padta\n2. Authentication Bypass — normal login process bypass. No detection\n3. Invisible Operation — rootkit stealth. OS level bypass\n4. Future Attacks — base banata hai future attacks ke liye\n5. Difficult Detection — forensic analysis difficult\n\nPrevention:\n1. Regular system scans aur monitoring\n2. Strong authentication — MFA, strong passwords\n3. Patch management — vulnerabilities fix\n4. Network segmentation\n5. Endpoint protection — behavior monitoring\n6. Forensic analysis — regular scans, log analysis',
          },
        ],
      },


{
        id: 'cyber-stalking',
        number: '2.12',
        title: 'Cyber Stalking',
        subtitle: 'Online harassment and stalking kya hai',
        icon: 'users',
        accent: '#ff0040',
        englishDefinition: 'Cyber stalking is the use of electronic communication to harass or intimidate someone, often involving repeated unwanted contact through emails, social media, messages, or other online platforms.',
        intro: 'Cyber stalking vaise hi hai jaise kisi ke piche lagna — online mann se nahin rukta. Hacker repeated unwanted messages, emails, social media posts send karta hai. Victim ko fear, harassment, ya threat feel hota hai. Yeh crime physically stalking se bhi dangerous ho sakta hai — online 24/7 aapke piche rehta hai.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Cyber Stalking — Electronic communication ka use karke harass ya intimidate karna. Repeated unwanted contact — emails, social media, messages. Victim ko fear, harassment, threat feel hota hai.',
          },
          {
            type: 'cards',
            title: 'Types & Examples',
            cards: [
              { icon: 'users', title: 'Repeated Messages', desc: 'Unwanted emails, texts, DMs bhejna — daily 50+ messages', color: '#ff0040' },
              { icon: 'globe', title: 'Social Media', desc: 'Fake accounts, harassing posts, tagging, commenting', color: '#0047ff' },
              { icon: 'warn', title: 'Threats', desc: 'Physical harm, death threats online — fear banana', color: '#ff8800' },
              { icon: 'eye', title: 'Monitoring', desc: 'GPS tracking, camera hacking, location tracking', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Cyber Stalking Flow',
            diagram: 'cyber-stalking',
            caption: 'Contact → Monitor → Threat → Harass → Repeat',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Cyber stalking electronic communication ka use karta hai — emails, social media, messages.',
              'Repeated unwanted contact hota hai — 50+ messages daily bhejna common hai.',
              'Social media fake accounts, harassing posts, tagging include karta hai.',
              'Physical harm, death threats online bhejna — fear banana attacker ka goal hai.',
              'GPS tracking, camera hacking, location tracking monitoring techniques hain.',
              'Victim ko anxiety, depression, fear feel hota hai — mental health affect karta hai.',
              'Physical stalking se bhi dangerous ho sakta hai — online 24/7 aapke piche rehta hai.',
              'Cyber stalking criminal offense hai — penalties jail, fine both include karte hain.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Cyber stalking = online harassment through electronic communication.\nTypes = repeated messages, social media, threats, monitoring.\nEffects = fear, anxiety, mental health issues.\nPrevention = block, report, document everything, seek help.',
          },
        ],
        examQuestions: [
          {
            question: 'Define cyber stalking. What are its types?',
            answer: 'Cyber Stalking: electronic communication ka use karke harass ya intimidate karna.\n\nTypes:\n1. Repeated Messages — unwanted emails, texts, DMs (50+ daily)\n2. Social Media — fake accounts, harassing posts, tagging\n3. Threats — physical harm, death threats online\n4. Monitoring — GPS tracking, camera hacking, location tracking\n\nEffects: fear, anxiety, mental health issues. Prevention: block, report, document.',
          },
          {
            question: 'How is cyber stalking different from physical stalking? Explain with examples.',
            answer: 'Cyber Stalking: online communication through emails, social media, messages. 24/7 online rehna possible hai.\nPhysical Stalking: physically following, watching in real life.\n\nDifferences:\n1. Location — online anywhere vs physical proximity\n2. Anonymity — online fake accounts vs physical identity\n3. Frequency — online 24/7 possible vs physical limited\n4. Evidence — digital logs vs physical witnesses\n\nExamples: Online — repeated DMs, GPS tracking. Physical — following home, watching.',
          },
        ],
      },
      {
        id: 'software-piracy',
        number: '2.13',
        title: 'Software Piracy',
        subtitle: 'Unauthorized software copy karna',
        icon: 'file',
        accent: '#0047ff',
        englishDefinition: 'Software piracy is the unauthorized copying, distribution, or use of copyrighted software without purchasing a valid license, violating copyright laws.',
        intro: 'Software piracy jaise kisi book ki photo copy karke free distribute karna. Jab aap paid software ko crack karke free use karte hain, woh piracy hai. Yeh copyright laws ke against hai. Companies losing money karti hain — billions of dollars loss hota hai annual basis par.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Software Piracy — Copyrighted software ka unauthorized copy, distribution, ya use without valid license. Copyright laws ke against hai.',
          },
          {
            type: 'cards',
            title: 'Types of Piracy',
            cards: [
              { icon: 'file', title: 'Cracking', desc: 'License key hack karna — paid software free use karna', color: '#ff0040' },
              { icon: 'server', title: 'Sharing', desc: 'Paid software multiple users se share karna — torrent, USB', color: '#0047ff' },
              { icon: 'globe', title: 'Downloading', desc: 'Illegal websites se software download karna — no license', color: '#ff8800' },
              { icon: 'layers', title: 'Counterfeit', desc: 'Fake software copies market mein sell karna — fake CDs, keys', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Software Piracy Flow',
            diagram: 'software-piracy',
            caption: 'Crack → Share → Download → Use → Loss',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Software piracy unauthorized copy, distribution ya use hai without license.',
              'Cracking license key hack karke paid software free use karna include karta hai.',
              'Sharing paid software multiple users se — torrent, USB through hota hai.',
              'Illegal websites se software download karna — no license ka proof.',
              'Counterfeit fake software copies market mein sell karte hain — fake CDs, keys.',
              'Companies billions of dollars annual loss hota hai piracy se.',
              'Piracy malware, viruses include karta hai — illegal downloads dangerous hain.',
              'Copyright laws violation hai — penalties fine, jail include karte hain.',
              'Legal alternatives: free software, open source, affordable licenses.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Software piracy = unauthorized copy/use of copyrighted software.\nTypes = cracking, sharing, downloading, counterfeit.\nEffects = billions loss, malware risk, legal penalties.\nSolution = buy license, use open source, avoid pirated software.',
          },
        ],
        examQuestions: [
          {
            question: 'Define software piracy. What are its types?',
            answer: 'Software Piracy: copyrighted software ka unauthorized copy, distribution, ya use without valid license.\n\nTypes:\n1. Cracking — license key hack, paid software free use\n2. Sharing — paid software multiple users se share (torrent, USB)\n3. Downloading — illegal websites se download, no license\n4. Counterfeit — fake software copies market sell\n\nEffects: billions loss, malware risk. Prevention: buy license, open source.',
          },
          {
            question: 'What are the consequences of software piracy? How can it be prevented?',
            answer: 'Consequences:\n1. Financial Loss — companies billions of dollars annual loss\n2. Malware — illegal downloads viruses, malware include karte hain\n3. Legal — copyright violation, fines, jail\n4. Quality — no updates, no support, bugs\n\nPrevention:\n1. Buy genuine license\n2. Use open source alternatives\n3. Education — piracy illegal hai\n4. Enforcement — copyright laws',
          },
        ],
      },
      {
        id: 'cyber-terrorism-2',
        number: '2.14',
        title: 'Cyber Terrorism',
        subtitle: 'Political/ideological cyber attacks',
        icon: 'warn',
        accent: '#ff0040',
        englishDefinition: 'Cyber terrorism is the use of cyber attacks to cause disruption, fear, or damage for political, religious, or ideological goals, often targeting critical infrastructure or civilian systems.',
        intro: 'Cyber terrorism jaise kisi country ke power grid hack karna — pura city dark main daal dena. Yeh political, religious, ya ideological goals ke liye cyber attacks use karta hai. Critical infrastructure target karta hai — power, water, hospitals. Civilian populations affect karta hai — fear, disruption, damage.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Cyber Terrorism — Cyber attacks ka use karke disruption, fear, damage create karna. Political, religious, ideological goals ke liye. Critical infrastructure ya civilian systems target karna.',
          },
          {
            type: 'cards',
            title: 'Cyber Terrorism Attacks',
            cards: [
              { icon: 'server', title: 'Power Grid', desc: 'Electrical grid hack karna — city dark main daal dena', color: '#ff0040' },
              { icon: 'database', title: 'Hospitals', desc: 'Hospital systems attack karna — patient data leak, service disrupt', color: '#0047ff' },
              { icon: 'globe', title: 'Government', desc: 'Government websites, systems attack karna — embarrassment, disruption', color: '#ff8800' },
              { icon: 'warn', title: 'Financial', desc: 'Banking systems attack karna — money theft, economy disrupt', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Cyber Terrorism Attack Flow',
            diagram: 'cyber-terrorism',
            caption: 'Recon → Exploit → Damage → Disrupt → Fear',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Cyber terrorism cyber attacks ka use karta hai — political, religious, ideological goals.',
              'Power grid hack karke city dark main daal dena — civilians affect karte hain.',
              'Hospital systems attack karna — patient data leak, service disrupt.',
              'Government websites, systems attack karna — embarrassment, disruption create karte hain.',
              'Banking systems attack karna — money theft, economy disrupt karta hai.',
              'Critical infrastructure target karna — power, water, transportation include hai.',
              'Civilian populations affect karte hain — fear, disruption, damage create karte hain.',
              'Anonymous attackers — difficult to trace, attribution hard hai.',
              'Prevention — critical infrastructure security, incident response plans.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Cyber terrorism = cyber attacks for political/ideological goals.\nTargets = power grid, hospitals, government, financial systems.\nEffects = disruption, fear, damage to civilians.\nPrevention = infrastructure security, response plans, international cooperation.',
          },
        ],
        examQuestions: [
          {
            question: 'Define cyber terrorism. What are its targets?',
            answer: 'Cyber Terrorism: cyber attacks ka use karke disruption, fear, damage create karna. Political, religious, ideological goals.\n\nTargets:\n1. Power Grid — city dark main daal dena\n2. Hospitals — patient data leak, service disrupt\n3. Government — websites attack, embarrassment\n4. Financial — banking systems attack, economy disrupt\n5. Critical Infrastructure — water, transportation\n\nEffects: civilian disruption, fear. Prevention: infrastructure security.',
          },
          {
            question: 'How is cyber terrorism different from other cyber attacks?',
            answer: 'Cyber Terrorism vs Other Attacks:\n1. Motive — political/ideological vs financial/personal\n2. Target — critical infrastructure/civilians vs specific companies\n3. Effect — mass disruption/fear vs specific damage\n4. Scale — large scale, public impact vs limited scope\n\nOther attacks: Hacking (financial), Malware (damage), Phishing (theft).\nCyber terrorism: mass disruption, fear, political goals.',
          },
        ],
      },
      {
        id: 'phishing-2',
        number: '2.15',
        title: 'Phishing',
        subtitle: 'Fake emails aur websites se info theft',
        icon: 'lock',
        accent: '#0047ff',
        englishDefinition: 'Phishing is a social engineering attack where attackers send fraudulent emails, messages, or create fake websites to trick users into revealing sensitive information like passwords, credit card numbers, or login credentials.',
        intro: 'Phishing jaise kisi bank ke fake email aana — aapse password mangta hai. Attackers fake websites bana ke users ko trick karte hain. Sensitive information churate hain — passwords, credit cards, login details. Yeh social engineering ka most common attack hai.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Phishing — Fraudulent emails, messages, ya fake websites bana ke users ko trick karna. Sensitive information reveal karwa na — passwords, credit cards, login credentials.',
          },
          {
            type: 'cards',
            title: 'Types of Phishing',
            cards: [
              { icon: 'lock', title: 'Email Phishing', desc: 'Fake emails — bank, company impersonate karke password mangna', color: '#ff0040' },
              { icon: 'globe', title: 'Website Phishing', desc: 'Fake websites bana ke real login page dikhana — credentials churana', color: '#0047ff' },
              { icon: 'users', title: 'Spear Phishing', desc: 'Targeted attack — specific person/company information use karna', color: '#ff8800' },
              { icon: 'warn', title: 'Whaling', desc: 'Executives target karna — CEO fraud, high-level credentials', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Phishing Attack Flow',
            diagram: 'phishing',
            caption: 'Fake Email → Click → Fake Website → Enter Info → Theft',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Phishing fraudulent emails, messages, ya fake websites bana ke users ko trick karta hai.',
              'Email phishing bank, company impersonate karta hai — password mangta hai.',
              'Website phishing fake login pages bana ke credentials churata hai.',
              'Spear phishing targeted attack hai — specific person/company information use karta hai.',
              'Whaling executives target karta hai — CEO fraud, high-level credentials.',
              'Smishing SMS phishing hai — fake text messages through attack.',
              'Vishing voice phishing hai — fake phone calls.',
              'Phishing most common social engineering attack hai.',
              'Prevention — verify sender, check URL, never click suspicious links.',
              'Use MFA, keep software updated, employee training.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Phishing = fraudulent emails/messages/websites for info theft.\nTypes = email, website, spear, whaling, smishing, vishing.\nPrevention = verify sender, check URL, MFA, training.\nEffects = credential theft, financial loss, identity theft.',
          },
        ],
        examQuestions: [
          {
            question: 'Define phishing. What are its types?',
            answer: 'Phishing: fraudulent emails, messages, ya fake websites bana ke users ko trick karna. Sensitive information reveal karwa na.\n\nTypes:\n1. Email Phishing — fake bank/company emails, password mangna\n2. Website Phishing — fake login pages, credentials churana\n3. Spear Phishing — targeted attack, specific person\n4. Whaling — executives target, CEO fraud\n5. Smishing — SMS phishing\n6. Vishing — voice phishing\n\nPrevention: verify sender, check URL, MFA.',
          },
          {
            question: 'Explain spear phishing and whaling. How do they differ from regular phishing?',
            answer: 'Spear Phishing: targeted attack — specific person/company information use karke. Research karke attacker personalized message banata hai.\n\nWhaling: spear phishing ka advanced form — executives (CEO, CFO) target karta hai. High-level credentials churana.\n\nRegular Phishing: mass emails, generic, low success rate.\nSpear/Whaling: targeted, personalized, high success rate.\n\nDifference: Targeting, personalization, success rate.',
          },
        ],
      },
      {
        id: 'computer-hacking',
        number: '2.16',
        title: 'Computer Hacking',
        subtitle: 'Unauthorized system access methods',
        icon: 'lock',
        accent: '#ff8800',
        englishDefinition: 'Computer hacking is the unauthorized access to or control of a computer system, often through exploiting vulnerabilities to gain entry, steal data, or cause damage.',
        intro: 'Computer hacking jaise kisi ghar ka lock khole bina andar aana. Hackers system ke vulnerabilities exploit karte hain — password crack, software exploit. Access gain karte hain — data steal, damage cause karte hain. Yeh unauthorized access ka broad term hai.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Computer Hacking — Unauthorized access ya control of computer system. Vulnerabilities exploit karke entry gain karna. Data steal karna, damage cause karna.',
          },
          {
            type: 'cards',
            title: 'Hacking Methods',
            cards: [
              { icon: 'lock', title: 'Password Hacking', desc: 'Weak passwords crack karna — brute force, dictionary, social engineering', color: '#ff0040' },
              { icon: 'server', title: 'Exploit', desc: 'Software vulnerabilities exploit karna — known security flaws use karna', color: '#0047ff' },
              { icon: 'users', title: 'Social Eng.', desc: 'Humans manipulate karke access gain karna — phishing, pretexting', color: '#ff8800' },
              { icon: 'globe', title: 'Network', desc: 'Network services attack karna — SMB, RDP, FTP exploitation', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Hacking Attack Chain',
            diagram: 'computer-hacking',
            caption: 'Recon → Scan → Exploit → Access → Damage',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Computer hacking unauthorized access ya control hai computer system ka.',
              'Password hacking weak passwords crack karta hai — brute force, dictionary.',
              'Social engineering humans manipulate karta hai — access gain karta hai.',
              'Software exploits known vulnerabilities use karta hai — security flaws.',
              'Network attacks SMB, RDP, FTP services exploit karte hain.',
              'Attack chain — Recon → Scan → Exploit → Access → Damage.',
              'Hackers data steal karte hain — sensitive information, credentials.',
              'Damage cause karte hain — file deletion, corruption, system disruption.',
              'White hat hackers authorized test karte hain — security improvement.',
              'Black hat hackers unauthorized access lete hain — criminal activity.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Computer hacking = unauthorized access to computer systems.\nMethods = password hacking, exploits, social engineering, network attacks.\nAttack chain = Recon → Scan → Exploit → Access → Damage.\nTypes = white hat (authorized), black hat (unauthorized).',
          },
        ],
        examQuestions: [
          {
            question: 'Define computer hacking. What are the different methods?',
            answer: 'Computer Hacking: unauthorized access ya control of computer system.\n\nMethods:\n1. Password Hacking — brute force, dictionary, social engineering\n2. Software Exploits — known vulnerabilities use karna\n3. Social Engineering — humans manipulate, access gain\n4. Network Attacks — SMB, RDP, FTP exploitation\n5. Physical Access — unlocked computers, USB\n\nAttack chain: Recon → Scan → Exploit → Access → Damage',
          },
          {
            question: 'What is the difference between white hat and black hat hacking?',
            answer: 'White Hat Hacking:\n- Authorized testing\n- Goal: security improvement\n- Methods: ethical, legal\n- Payment: company hires\n- Result: vulnerabilities fixed\n\nBlack Hat Hacking:\n- Unauthorized access\n- Goal: personal gain, damage\n- Methods: illegal, unethical\n- Payment: criminal activity\n- Result: data theft, damage\n\nGrey Hat: somewhere in between — unauthorized but no malicious intent.',
          },
        ],
      },
      {
        id: 'spamming',
        number: '2.17',
        title: 'Spamming',
        subtitle: 'Unsolicited bulk messages',
        icon: 'warn',
        accent: '#aa00ff',
        englishDefinition: 'Spamming is sending unsolicited bulk messages, typically through email, SMS, or social media, often for advertising, phishing, or malicious purposes.',
        intro: 'Spamming jaise aapke email mein daily 100+ unwanted messages aana. Spammers bulk messages send karte hain — advertising, phishing, malware. Yeh unsolicited hai — aapne request nahi kiya. Time waste karta hai, inbox clutter karta hai, sometimes malware include karta hai.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Spamming — Unsolicited bulk messages send karna. Email, SMS, social media through. Advertising, phishing, malicious purposes.',
          },
          {
            type: 'cards',
            title: 'Types of Spam',
            cards: [
              { icon: 'warn', title: 'Advertising', desc: 'Products sell karna — cheap offers, discounts, loans', color: '#ff0040' },
              { icon: 'lock', title: 'Phishing', desc: 'Fake emails — credentials, financial info churana', color: '#0047ff' },
              { icon: 'virus', title: 'Malware', desc: 'Malicious links, attachments — viruses, ransomware spread', color: '#ff8800' },
              { icon: 'globe', title: 'Scam', desc: 'Money fraud — fake prizes, investments, inheritance', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Spam Attack Flow',
            diagram: 'spamming',
            caption: 'Email List → Bulk Send → User Clicks → Malware/Theft',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Spamming unsolicited bulk messages send karna hai — email, SMS, social media.',
              'Advertising spam products sell karta hai — cheap offers, discounts.',
              'Phishing spam fake emails through credentials, financial info churata hai.',
              'Malware spam malicious links, attachments through viruses, ransomware spread karta hai.',
              'Scam spam money fraud karta hai — fake prizes, investments.',
              'Spam time waste karta hai — inbox clutter, productivity decrease.',
              'Sometimes malware include karta hai — dangerous for system.',
              'Spammer email lists buy/sell karte hain — addresses leak hote hain.',
              'Prevention — spam filters, don\'t click unknown links, mark as spam.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Spamming = unsolicited bulk messages.\nTypes = advertising, phishing, malware, scam.\nEffects = time waste, malware risk, fraud.\nPrevention = spam filters, don\'t click, mark spam, be careful.',
          },
        ],
        examQuestions: [
          {
            question: 'Define spamming. What are its types?',
            answer: 'Spamming: unsolicited bulk messages send karna. Email, SMS, social media through.\n\nTypes:\n1. Advertising — products sell, cheap offers, discounts\n2. Phishing — fake emails, credentials churana\n3. Malware — malicious links, viruses spread\n4. Scam — money fraud, fake prizes\n\nEffects: time waste, malware risk. Prevention: spam filters, don\'t click.',
          },
          {
            question: 'How can spam be prevented?',
            answer: 'Prevention Methods:\n1. Spam Filters — email filters block spam\n2. Don\'t Click — unknown links, attachments\n3. Mark as Spam — report spam messages\n4. Protect Email — don\'t share publicly\n5. Use Alternative — disposable email for signups\n6. Software — anti-spam tools\n\nEducation: teach users spam识别 karna.',
          },
        ],
      },
      {
        id: 'xss',
        number: '2.18',
        title: 'Cross Site Scripting (XSS)',
        subtitle: 'Malicious scripts website mein inject',
        icon: 'eye',
        accent: '#00c8ff',
        englishDefinition: 'Cross Site Scripting (XSS) is a web security vulnerability where attackers inject malicious scripts into trusted websites, which then execute in the browsers of other users visiting the site.',
        intro: 'XSS jaise kisi website mein hidden code daalna — jab doosre users visit karte hain, woh code run hota hai. Attackers malicious JavaScript website mein inject karte hain. Cookie theft, session hijacking, defacement sab hota hai. Yeh web application vulnerability hai.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Cross Site Scripting (XSS) — Malicious scripts website mein inject karna. Scripts run hote hain doosre users ke browsers mein. Cookie theft, session hijacking, defacement.',
          },
          {
            type: 'cards',
            title: 'Types of XSS',
            cards: [
              { icon: 'eye', title: 'Stored XSS', desc: 'Malicious script permanently store hota hai — database, victim ko affect karta hai', color: '#ff0040' },
              { icon: 'arrow', title: 'Reflected XSS', desc: 'Malicious script server response mein reflect hota hai — immediate attack', color: '#0047ff' },
              { icon: 'layers', title: 'DOM XSS', desc: 'DOM environment modify karke attack karna — JavaScript manipulation', color: '#ff8800' },
              { icon: 'warn', title: 'Effects', desc: 'Cookie theft, session hijacking, defacement, redirect', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'XSS Attack Flow',
            diagram: 'xss',
            caption: 'Inject → Store/Reflect → User Visits → Script Runs → Theft',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'XSS malicious scripts website mein inject karta hai — JavaScript.',
              'Stored XSS script permanently store hota hai — database mein, sabko affect karta hai.',
              'Reflected XSS server response mein reflect hota hai — immediate attack.',
              'DOM XSS DOM environment modify karke attack karta hai — JavaScript manipulation.',
              'Cookie theft hota hai — session IDs, credentials churate hain.',
              'Session hijacking — attacker user session control karta hai.',
              'Defacement — website look modify karta hai — reputation damage.',
              'Redirect — malicious websites par redirect karta hai.',
              'Prevention — input validation, output encoding, CSP (Content Security Policy).',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'XSS = malicious scripts in websites.\nTypes = stored, reflected, DOM.\nEffects = cookie theft, session hijacking, defacement.\nPrevention = input validation, output encoding, CSP.',
          },
        ],
        examQuestions: [
          {
            question: 'Define Cross Site Scripting (XSS). What are its types?',
            answer: 'XSS: malicious scripts website mein inject karna. Scripts run hote hain doosre users ke browsers mein.\n\nTypes:\n1. Stored XSS — script permanently store, database, sabko affect\n2. Reflected XSS — server response reflect, immediate attack\n3. DOM XSS — DOM environment modify, JavaScript manipulation\n\nEffects: cookie theft, session hijacking, defacement.\nPrevention: input validation, output encoding, CSP.',
          },
          {
            question: 'Explain how XSS attacks work with an example.',
            answer: 'XSS Attack:\n1. Attacker malicious JavaScript code banata hai\n2. Website input field mein script inject karta hai\n3. Script website database mein store hota hai (Stored XSS)\n4. Other users website visit karte hain\n5. Script user ke browser mein run hota hai\n6. Script cookies, session IDs steal karta hai\n\nExample: Comment section mein <script>document.cookie</script> inject karna.\n\nPrevention: sanitize input, encode output, use CSP.',
          },
        ],
      },
      {
        id: 'online-auction-fraud',
        number: '2.19',
        title: 'Online Auction Fraud',
        subtitle: 'Fake auctions aur fraud',
        icon: 'warn',
        accent: '#00ff88',
        englishDefinition: 'Online auction fraud is the act of deceiving buyers or sellers on online auction platforms by misrepresenting products, failing to deliver goods, or creating fake auction listings.',
        intro: 'Online auction fraud jaise kisi product ko cheap dikha ke money lekar deliver nahi karna. Fraudsters fake listings banate hain — original photos dikha ke fake product deliver karte hain. Buyers money lose karte hain. Sellers bhi fraud ka target ban sakte hain — fake payments, chargebacks.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Online Auction Fraud — Auction platforms par buyers/sellers ko deceive karna. Products misrepresent karna, goods deliver nahi karna, fake listings banana.',
          },
          {
            type: 'cards',
            title: 'Types of Fraud',
            cards: [
              { icon: 'warn', title: 'Fake Listings', desc: 'Original photos dikha ke fake product diya — money lekar no delivery', color: '#ff0040' },
              { icon: 'file', title: 'Misrepresent', desc: 'Product description false — original nahi, damage hua product', color: '#0047ff' },
              { icon: 'lock', title: 'Payment Fraud', desc: 'Fake payments, chargebacks — seller money lose karta hai', color: '#ff8800' },
              { icon: 'globe', title: 'Shill Bidding', desc: 'Fake bidders — price inflate karna — seller ko benefit', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Auction Fraud Flow',
            diagram: 'online-auction-fraud',
            caption: 'Fake Listing → Payment → No Delivery → Buyer Loss',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Online auction fraud auction platforms par deception hai.',
              'Fake listings — original photos, fake product — money lekar no delivery.',
              'Misrepresentation — false description — damage product diya.',
              'Payment fraud — fake payments, chargebacks — seller money lose.',
              'Shill bidding — fake bidders — price inflate — seller benefit.',
              'Buyers money lose karte hain — no product, no refund.',
              'Sellers fraud ka target ban sakte hain — fake payments.',
              'Protection — use verified platforms, check seller rating, escrow.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Online auction fraud = deception on auction platforms.\nTypes = fake listings, misrepresent, payment fraud, shill bidding.\nEffects = buyer/seller money loss.\nPrevention = verified platforms, seller rating, escrow, secure payment.',
          },
        ],
        examQuestions: [
          {
            question: 'Define online auction fraud. What are its types?',
            answer: 'Online Auction Fraud: auction platforms par buyers/sellers ko deceive karna.\n\nTypes:\n1. Fake Listings — original photos, fake product, no delivery\n2. Misrepresent — false description, damage product\n3. Payment Fraud — fake payments, chargebacks\n4. Shill Bidding — fake bidders, price inflate\n\nEffects: money loss. Prevention: verified platforms, seller rating, escrow.',
          },
          {
            question: 'How can buyers protect themselves from online auction fraud?',
            answer: 'Protection Methods:\n1. Verified Platforms — use reputed auction sites\n2. Seller Rating — check feedback, reviews\n3. Product Research — compare prices, read descriptions\n4. Secure Payment — escrow, PayPal protection\n5. Communicate — platform messaging use karna\n6. Report — fraud report karna\n\nEducation: fraud识别 karna, safe online shopping.',
          },
        ],
      },
      {
        id: 'logic-bombs',
        number: '2.20',
        title: 'Logic Bombs',
        subtitle: 'Conditional trigger malware',
        icon: 'warn',
        accent: '#ff0040',
        englishDefinition: 'A logic bomb is a malicious program embedded in legitimate software that triggers when certain conditions are met, such as a specific date, time, or event, causing damage to systems or data.',
        intro: 'Logic bomb jaise kisi software mein hidden timer daalna — specific date par blast ho jaana. Virus ki tarah hi hai, lekin trigger conditional hai — date, event, condition. Jab condition meet hoti hai, damage hota hai — file deletion, corruption, system crash.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Logic Bomb — Malicious program embedded in legitimate software. Trigger conditional hai — date, time, event. Jab condition meet ho, damage cause karta hai.',
          },
          {
            type: 'cards',
            title: 'Logic Bomb Triggers',
            cards: [
              { icon: 'clock', title: 'Date/Time', desc: 'Specific date, time trigger karna — 26th December, Friday 3PM', color: '#ff0040' },
              { icon: 'file', title: 'File Count', desc: 'Specific file count trigger karna — 100 files create hone par', color: '#0047ff' },
              { icon: 'users', title: 'User Action', desc: 'Specific user action trigger karna — login, logout, command', color: '#ff8800' },
              { icon: 'warn', title: 'Damage', desc: 'File deletion, corruption, system crash, data theft', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Logic Bomb Flow',
            diagram: 'logic-bombs',
            caption: 'Embed → Wait → Condition Met → Trigger → Damage',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Logic bomb malicious program embedded in legitimate software.',
              'Trigger conditional hai — date, time, event, condition.',
              'Date/time trigger specific date, time par blast hota hai.',
              'File count trigger specific number of files create hone par hota hai.',
              'User action trigger login, logout, command par hota hai.',
              'Damage file deletion, corruption, system crash include karta hai.',
              'Logic bombs hard to detect — no signature, hidden in code.',
              'Often insider attacks — employees malicious code daal dete hain.',
              'Prevention — code review, access control, monitoring, anomaly detection.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Logic bomb = malicious program with conditional trigger.\nTriggers = date/time, file count, user action.\nDamage = file deletion, corruption, crash.\nPrevention = code review, access control, monitoring.',
          },
        ],
        examQuestions: [
          {
            question: 'Define logic bomb. What are its triggers?',
            answer: 'Logic Bomb: malicious program embedded in legitimate software. Trigger conditional — date, time, event.\n\nTriggers:\n1. Date/Time — specific date, time (26th Dec, Friday 3PM)\n2. File Count — specific number of files create hone par\n3. User Action — login, logout, command\n\nDamage: file deletion, corruption, crash.\nPrevention: code review, access control, monitoring.',
          },
          {
            question: 'How is a logic bomb different from a virus?',
            answer: 'Logic Bomb vs Virus:\n1. Trigger — conditional (date/event) vs self-replicating always\n2. Spread — no spread, embedded vs self-spread\n3. Activation — conditional vs on execution\n4. Detection — hard (no signature) vs signature-based\n\nLogic bomb: embedded, conditional trigger, damage on condition.\nVirus: self-replicating, always active, spread through files.',
          },
        ],
      },
      {
        id: 'web-jacking',
        number: '2.21',
        title: 'Web Jacking',
        subtitle: 'Website hijack aur control',
        icon: 'globe',
        accent: '#ff8800',
        englishDefinition: 'Web jacking is the act of taking over a website through unauthorized access, often to display false information, steal data, or disrupt services, usually for financial gain or reputational damage.',
        intro: 'Web jacking jaise kisi company ke website hack karke fake information daal dena. Attackers website control karte hain — false info display karna, data steal karna, services disrupt karna. Yeh website hijacking ka another name hai. Companies reputation damage hota hai.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Web Jacking — Website takeover through unauthorized access. False information display karna, data steal karna, services disrupt karna. Financial gain, reputational damage.',
          },
          {
            type: 'cards',
            title: 'Web Jacking Attacks',
            cards: [
              { icon: 'globe', title: 'Website Hijack', desc: 'Website control karna — false information, logo change', color: '#ff0040' },
              { icon: 'database', title: 'Data Theft', desc: 'User data, credentials, financial info steal karna', color: '#0047ff' },
              { icon: 'warn', title: 'Service Disrupt', desc: 'Website down karna — customers affect, reputation damage', color: '#ff8800' },
              { icon: 'lock', title: 'Redirect', desc: 'Visitors fake website par redirect karna — phishing', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Web Jacking Flow',
            diagram: 'web-jacking',
            caption: 'Hack → Control → Modify → Damage → Reputation Loss',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Web jacking website takeover hai through unauthorized access.',
              'Website hijack karna — false information, logo change, content modification.',
              'Data theft — user data, credentials, financial information steal.',
              'Service disrupt karna — website down karna — customers affect.',
              'Redirect karna — visitors fake website par redirect karna.',
              'Reputation damage hota hai — customers trust lose karte hain.',
              'Financial loss — customers lose, business damage.',
              'Prevention — strong security, regular updates, backups, monitoring.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Web jacking = website takeover.\nAttacks = hijack, data theft, service disrupt, redirect.\nEffects = reputation damage, financial loss.\nPrevention = security, updates, backups, monitoring.',
          },
        ],
        examQuestions: [
          {
            question: 'Define web jacking. What are its effects?',
            answer: 'Web Jacking: website takeover through unauthorized access. False info, data steal, services disrupt.\n\nEffects:\n1. Reputation Damage — customers trust lose\n2. Financial Loss — business damage, customers lose\n3. Data Theft — user data, credentials\n4. Service Disrupt — website down, customers affect\n\nPrevention: strong security, updates, backups, monitoring.',
          },
          {
            question: 'How can organizations prevent web jacking?',
            answer: 'Prevention:\n1. Strong Security — firewalls, encryption, access control\n2. Regular Updates — software patches\n3. Backups — regular backups, restore capability\n4. Monitoring — security monitoring, alerts\n5. Education — employees security awareness\n6. Response Plan — incident response preparation\n\nSecurity audits, penetration testing bhi important hain.',
          },
        ],
      },
      {
        id: 'internet-time-theft',
        number: '2.22',
        title: 'Internet Time Theft',
        subtitle: 'Work time internet waste',
        icon: 'clock',
        accent: '#0047ff',
        englishDefinition: 'Internet time theft refers to the unauthorized use of internet connectivity, typically by employees accessing non-work websites or personal activities during work hours, resulting in wasted company resources and productivity loss.',
        intro: 'Internet time theft jaise office time mein personal Facebook, YouTube dekhna — company internet ka unauthorized use. Employees work hours mein non-work activities karte hain. Company resources waste hote hain — bandwidth, electricity, productivity. Yeh internal cyber crime hai.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Internet Time Theft — Unauthorized internet connectivity use karna. Employees non-work websites access karna, personal activities work hours mein. Company resources waste karna, productivity loss.',
          },
          {
            type: 'cards',
            title: 'Types of Time Theft',
            cards: [
              { icon: 'globe', title: 'Social Media', desc: 'Facebook, Instagram, Twitter work hours mein use karna', color: '#ff0040' },
              { icon: 'eye', title: 'Streaming', desc: 'YouTube, Netflix, movies watch karna — bandwidth waste', color: '#0047ff' },
              { icon: 'file', title: 'Downloads', desc: 'Personal files, software download karna — storage, bandwidth', color: '#ff8800' },
              { icon: 'users', title: 'Gaming', desc: 'Online games play karna work hours mein', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Internet Time Theft Flow',
            diagram: 'internet-time-theft',
            caption: 'Work Time → Personal Use → Resource Waste → Productivity Loss',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Internet time theft unauthorized internet use hai — work hours mein.',
              'Social media use karna — Facebook, Instagram, Twitter.',
              'Streaming — YouTube, Netflix, movies watch karna — bandwidth waste.',
              'Downloads — personal files, software — storage, bandwidth waste.',
              'Gaming — online games work hours mein play karna.',
              'Company resources waste hote hain — bandwidth, electricity, storage.',
              'Productivity loss hota hai — work time waste, deadlines miss.',
              'Security risk — malware downloads, phishing links click karna.',
              'Prevention — internet policies, monitoring, education, limits.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Internet time theft = unauthorized internet use during work hours.\nTypes = social media, streaming, downloads, gaming.\nEffects = resource waste, productivity loss, security risk.\nPrevention = policies, monitoring, education, limits.',
          },
        ],
        examQuestions: [
          {
            question: 'Define internet time theft. What are its types?',
            answer: 'Internet Time Theft: unauthorized internet connectivity use. Employees work hours mein non-work activities.\n\nTypes:\n1. Social Media — Facebook, Instagram, Twitter\n2. Streaming — YouTube, Netflix, movies\n3. Downloads — personal files, software\n4. Gaming — online games\n\nEffects: resource waste, productivity loss, security risk.\nPrevention: policies, monitoring, education.',
          },
          {
            question: 'What are the consequences of internet time theft for organizations?',
            answer: 'Consequences:\n1. Resource Waste — bandwidth, electricity, storage\n2. Productivity Loss — work time waste, deadlines miss\n3. Security Risk — malware, phishing links\n4. Bandwidth Issues — other employees affect\n5. Legal — policy violation, disciplinary action\n\nPrevention: internet policies, monitoring tools, education, limits.',
          },
        ],
      },
      {
        id: 'dos-attack',
        number: '2.23',
        title: 'DoS Attack',
        subtitle: 'Server flood aur crash',
        icon: 'server',
        accent: '#ff0040',
        englishDefinition: 'A Denial-of-Service (DoS) attack is an attempt to make a service unavailable by overwhelming it with traffic, causing it to crash or slow down significantly.',
        intro: 'DoS attack jaise kisi shop ke bahar 1000 log jam karna — genuine customers ko entry nahi. Server par request flood karte hain — server crash ho jata hai. Legit users access nahi kar paate. Yeh service disruption ka attack hai. DDoS multiple computers se attack karte hain.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'DoS Attack — Service unavailable karna traffic overwhelming karke. Server crash, slow down karna. Legit users access nahi kar paate.',
          },
          {
            type: 'cards',
            title: 'Types of DoS',
            cards: [
              { icon: 'server', title: 'DoS', desc: 'Single computer attack — server request flood', color: '#ff0040' },
              { icon: 'users', title: 'DDoS', desc: 'Multiple computers attack — botnet use karna', color: '#0047ff' },
              { icon: 'globe', title: 'Application', desc: 'Application layer attack — HTTP request flood', color: '#ff8800' },
              { icon: 'warn', title: 'Syn Flood', desc: 'TCP SYN packets flood — connection table overflow', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'DoS Attack Flow',
            diagram: 'dos-attack',
            caption: 'Flood Requests → Server Overwhelmed → Crash/Slow → Users Blocked',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'DoS attack service unavailable karna hai traffic overwhelming karke.',
              'DoS single computer attack hai — server request flood.',
              'DDoS multiple computers attack karte hain — botnet use karta hai.',
              'Application layer attack HTTP request flood include karta hai.',
              'Syn flood TCP SYN packets flood karta hai — connection overflow.',
              'Server crash ho jata hai — legit users access nahi kar paate.',
              'Service disruption hota hai — business damage, revenue loss.',
              'DDoS difficult to prevent — multiple sources, hard to block.',
              'Prevention — rate limiting, traffic filtering, DDoS protection services.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'DoS attack = service unavailable through traffic flood.\nTypes = DoS, DDoS, application layer, SYN flood.\nEffects = server crash, users blocked, business damage.\nPrevention = rate limiting, filtering, DDoS protection.',
          },
        ],
        examQuestions: [
          {
            question: 'Define DoS attack. What is the difference between DoS and DDoS?',
            answer: 'DoS Attack: service unavailable karna traffic overwhelming karke. Server crash, slow down.\n\nDoS vs DDoS:\n1. Source — single computer vs multiple computers\n2. Power — limited vs distributed, more powerful\n3. Detection — easier vs harder\n4. Prevention — easier vs harder\n\nDoS: single attacker, server request flood.\nDDoS: multiple attackers (botnet), distributed attack.',
          },
          {
            question: 'How can DoS attacks be prevented?',
            answer: 'Prevention:\n1. Rate Limiting — requests limit karna per IP\n2. Traffic Filtering — malicious traffic block karna\n3. DDoS Protection — specialized services (Cloudflare, Akamai)\n4. Redundancy — multiple servers, load balancing\n5. Monitoring — traffic monitoring, alerts\n6. Network Security — firewalls, IDS\n\nEducation: attack识别 karna, response plans.',
          },
        ],
      },
      {
        id: 'salami-attack',
        number: '2.24',
        title: 'Salami Attack',
        subtitle: 'Small amounts repeated theft',
        icon: 'layers',
        accent: '#aa00ff',
        englishDefinition: 'A salami attack is a type of financial fraud where small amounts are repeatedly stolen from multiple accounts or transactions, making each individual theft unnoticeable.',
        intro: 'Salami attack jaise kisi bank mein 1000 accounts se 1 rupee stole karna — koi notice nahi karta. Small amounts ek ek karke steal karte hain — individual theft unnoticeable. Total amount large ho jata hai — millions. Yeh financial fraud hai — slicing karne ki tarah — ek ek slice.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Salami Attack — Financial fraud. Small amounts repeatedly steal karna multiple accounts/transactions se. Individual theft unnoticeable. Total amount large ho jata hai.',
          },
          {
            type: 'cards',
            title: 'Salami Attack Methods',
            cards: [
              { icon: 'layers', title: 'Rounding', desc: 'Amount rounding karke steal karna — 1 rupee per transaction', color: '#ff0040' },
              { icon: 'database', title: 'Account Theft', desc: 'Multiple accounts se small amounts steal karna — 1000 accounts', color: '#0047ff' },
              { icon: 'clock', title: 'Time Theft', desc: 'Time calculations modify karke overtime theft karna', color: '#ff8800' },
              { icon: 'warn', title: 'Total Amount', desc: 'Small amounts total large ho jata hai — millions', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Salami Attack Flow',
            diagram: 'salami-attack',
            caption: 'Steal Small → Many Times → Unnoticed → Total Large → Fraud',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Salami attack financial fraud hai — small amounts repeatedly steal karna.',
              'Rounding karke amount steal karna — 1 rupee per transaction.',
              'Multiple accounts se small amounts steal karna — 1000 accounts.',
              'Time calculations modify karke overtime theft karna.',
              'Individual theft unnoticeable hai — small amount.',
              'Total amount large ho jata hai — millions.',
              'Difficult to detect — individual thefts small hain.',
              'Often insider attacks — employees financial systems manipulate karte hain.',
              'Prevention — audit trails, reconciliation, monitoring, fraud detection.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Salami attack = small amounts repeated theft.\nMethods = rounding, account theft, time theft.\nEffect = unnoticed individual theft, large total.\nPrevention = audit trails, reconciliation, monitoring.',
          },
        ],
        examQuestions: [
          {
            question: 'Define salami attack. How does it work?',
            answer: 'Salami Attack: financial fraud. Small amounts repeatedly steal karna multiple accounts/transactions se.\n\nHow it works:\n1. Attacker financial system access karta hai\n2. Small amounts modify karta hai — 1 rupee per transaction\n3. Many transactions modify karta hai — 1000+\n4. Individual theft unnoticeable — small amount\n5. Total amount large ho jata hai — millions\n\nPrevention: audit trails, reconciliation, monitoring, fraud detection.',
          },
          {
            question: 'Why is salami attack difficult to detect?',
            answer: 'Difficult to Detect:\n1. Small Amounts — individual thefts small, unnoticeable\n2. Many Transactions — volume large, hard to track individually\n3. Legitimate Look — transactions appear normal\n4. No Single Evidence — one transaction no clear fraud\n5. Insider Access — authorized access, suspicion low\n\nDetection: audit trails, reconciliation, anomaly detection, regular reviews.',
          },
        ],
      },
      {
        id: 'data-diddling',
        number: '2.25',
        title: 'Data Diddling',
        subtitle: 'Data modification before processing',
        icon: 'database',
        accent: '#00c8ff',
        englishDefinition: 'Data diddling is the alteration of data before it is processed by a system, often through corrupting input data or modifying it during transmission, causing incorrect processing and results.',
        intro: 'Data diddling jaise kisi form mein apni age 21 dikha ke 25 daal dena — data modify kar dena before processing. Input data corrupt karna, transmission mein modify karna. System incorrect data process karta hai — wrong results. Yeh data manipulation hai — small changes, big impact.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Data Diddling — Data modify karna before system process kare. Input data corrupt karna, transmission mein modify karna. Incorrect processing, wrong results.',
          },
          {
            type: 'cards',
            title: 'Data Diddling Methods',
            cards: [
              { icon: 'database', title: 'Input Modification', desc: 'Input data modify karna — age, amount, numbers change karna', color: '#ff0040' },
              { icon: 'arrow', title: 'Transmission', desc: 'Data transmission mein modify karna — intercept karke change karna', color: '#0047ff' },
              { icon: 'file', title: 'Storage', desc: 'Data storage mein modify karna — file edit karna', color: '#ff8800' },
              { icon: 'warn', title: 'Impact', desc: 'Incorrect processing, wrong results, decisions affect', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Data Diddling Flow',
            diagram: 'data-diddling',
            caption: 'Data → Modify → Process → Wrong Result → Decision',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Data diddling data modify karna hai before system process kare.',
              'Input modification — input data modify karna — age, amount, numbers.',
              'Transmission modification — data intercept karke change karna.',
              'Storage modification — data storage mein modify karna — file edit.',
              'Incorrect processing hota hai — wrong results.',
              'Decisions affect hote hain — wrong data se wrong decisions.',
              'Financial impact — wrong calculations, payments.',
              'Hard to detect — small changes, no clear pattern.',
              'Prevention — data validation, encryption, audit trails, integrity checks.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Data diddling = data modification before processing.\nMethods = input, transmission, storage modification.\nEffects = wrong results, bad decisions.\nPrevention = validation, encryption, audit trails.',
          },
        ],
        examQuestions: [
          {
            question: 'Define data diddling. What are its types?',
            answer: 'Data Diddling: data modify karna before system process kare. Incorrect processing, wrong results.\n\nTypes:\n1. Input Modification — input data modify (age, amount, numbers)\n2. Transmission — data intercept karke change karna\n3. Storage — data storage modify, file edit\n\nEffects: wrong results, bad decisions, financial impact.\nPrevention: validation, encryption, audit trails, integrity checks.',
          },
          {
            question: 'How does data diddling affect business decisions?',
            answer: 'Impact on Decisions:\n1. Wrong Data — decisions based on incorrect data\n2. Financial — wrong calculations, payments, losses\n3. Operations — inefficient processes, delays\n4. Strategy — bad planning based on wrong data\n5. Reputation — customer trust loss\n\nPrevention: data validation, encryption, audit trails, integrity checks, regular reviews.',
          },
        ],
      },
      {
        id: 'email-spoofing',
        number: '2.26',
        title: 'Email Spoofing',
        subtitle: 'Forged sender addresses',
        icon: 'warn',
        accent: '#00ff88',
        englishDefinition: 'Email spoofing is the creation of email messages with a forged sender address, making it appear as if the email came from a trusted source when it actually did not.',
        intro: 'Email spoofing jaise kisi email mein aapke friend ka address dikha ke message bhejna. Sender address forged hota hai — real sender different. Trusted source dikhaya jata hai — bank, company, friend. Phishing, fraud sab possible hai. Yeh sender address manipulation hai.',
        sections: [
          {
            type: 'definition',
            title: 'Definition',
            content: 'Email Spoofing — Email messages bana na with forged sender address. Trusted source dikha na — bank, company, friend. Real sender different.',
          },
          {
            type: 'cards',
            title: 'Spoofing Techniques',
            cards: [
              { icon: 'warn', title: 'Display Name', desc: 'Display name modify karna — "Bank Name" dikhana — actual address different', color: '#ff0040' },
              { icon: 'lock', title: 'Address Forge', desc: 'Sender address forge karna — bank@evil.com, actual sender hacker', color: '#0047ff' },
              { icon: 'globe', title: 'Domain Spoof', desc: 'Domain name similar rakhna — bank-secure.com, real bank.com', color: '#ff8800' },
              { icon: 'eye', title: 'Reply To', desc: 'Reply-to address different karna — reply aata hai different address', color: '#aa00ff' },
            ],
          },
          {
            type: 'diagram',
            title: 'Email Spoofing Flow',
            diagram: 'email-spoofing',
            caption: 'Forge Address → Send Email → User Trusts → Clicks/Responds → Fraud',
          },
          {
            type: 'points',
            title: 'Key Points',
            points: [
              'Email spoofing email messages bana na hai with forged sender address.',
              'Display name modify karna — "Bank Name" dikhana — actual address different.',
              'Address forge karna — bank@evil.com — actual sender hacker.',
              'Domain spoof karna — bank-secure.com — real bank.com.',
              'Reply-to address different karna — reply different address aata hai.',
              'Phishing possible hai — credentials, financial info churana.',
              'Fraud possible hai — money transfer, purchases.',
              'Difficult to detect — looks legitimate.',
              'Prevention — SPF, DKIM, DMARC, user education, verify sender.',
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Email spoofing = forged sender address.\nTechniques = display name, address forge, domain spoof, reply-to.\nEffects = phishing, fraud.\nPrevention = SPF, DKIM, DMARC, user education.',
          },
        ],
        examQuestions: [
          {
            question: 'Define email spoofing. What are its techniques?',
            answer: 'Email Spoofing: email messages bana na with forged sender address. Trusted source dikha na.\n\nTechniques:\n1. Display Name — "Bank Name" dikhana, actual address different\n2. Address Forge — bank@evil.com, actual sender hacker\n3. Domain Spoof — bank-secure.com, real bank.com\n4. Reply-To — reply different address aata hai\n\nEffects: phishing, fraud.\nPrevention: SPF, DKIM, DMARC, user education.',
          },
          {
            question: 'How can email spoofing be prevented?',
            answer: 'Prevention:\n1. SPF (Sender Policy Framework) — authorized senders allow karna\n2. DKIM (DomainKeys Identified Mail) — email signing, verification\n3. DMARC — SPF/DKIM policy, reporting\n4. User Education — verify sender, don\'t click unknown\n5. Email Filters — spam, spoof filter karna\n6. Two-Factor Auth — account security\n\nOrganizations: implement SPF, DKIM, DMARC.',
          },
        ],
      },
      {
        id: 'types-of-hackers',
        number: '2.27',
        title: 'Types of Hackers',
        subtitle: 'Different categories of hackers',
        icon: 'users',
        accent: '#ff0040',
        englishDefinition: 'Types of hackers include white hat hackers (ethical), black hat hackers (malicious), grey hat hackers (mixed), script kiddies (inexperienced), and hacktivists (political motivations).',
        intro: 'Hackers alag-alag categories mein bante hain. White hat hackers ethical hackers hain — vulnerabilities find karte hain with permission. Black hat hackers malicious hain — illegal access lena chahte hain. Grey hat hackers mixed approach follow karte hain. Script kiddies inexperienced hain — tools use karte hain without understanding. Hacktivists political motivations ke saath hack karte hain.',
        sections: [
          {
            type: 'definition',
            title: 'Types of Hackers',
            content: 'White hat — ethical hackers. Black hat — malicious hackers. Grey hat — mixed approach. Script kiddies — inexperienced. Hacktivists — political motivations.',
          },
          {
            type: 'cards',
            title: 'Hacker Categories',
            cards: [
              { icon: 'shield', title: 'White Hat', desc: 'Ethical hackers. Permission se vulnerabilities find karte hain. Security improve karna chahte hain.', color: '#00ff88' },
              { icon: 'warn', title: 'Black Hat', desc: 'Malicious hackers. Illegal access lena chahte hain. Data churana, damage karna.', color: '#ff0040' },
              { icon: 'globe', title: 'Grey Hat', desc: 'Mixed approach. Permission nahi lena but vulnerabilities report karte hain.', color: '#ff8800' },
              { icon: 'code', title: 'Script Kiddie', desc: 'Inexperienced hackers. Tools use karte hain without understanding. Limited skills.', color: '#aa00ff' },
              { icon: 'flag', title: 'Hacktivist', desc: 'Political motivations. Government, corporations hack karte hain. Anonymous group.', color: '#0047ff' },
              { icon: 'eye', title: 'State-Sponsored', desc: 'Government sponsored hackers. National security targets. Cyber warfare.', color: '#00ffff' },
            ],
          },
          {
            type: 'comparison',
            title: 'White Hat vs Black Hat',
            rows: [
              { label: 'Permission', values: ['Permission required', 'No permission'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Intent', values: ['Help organizations', 'Harm organizations'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Legality', values: ['Legal', 'Illegal'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Goal', values: ['Security improvement', 'Personal gain'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Tools', values: ['Same tools', 'Same tools'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Result', values: ['Vulnerabilities fixed', 'Systems damaged'], colors: ['#00ff88', '#ff0040'] },
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Types of hackers = White hat (ethical), Black hat (malicious), Grey hat (mixed), Script kiddies (inexperienced), Hacktivists (political), State-sponsored (government).',
          },
        ],
        examQuestions: [
          {
            question: 'Explain different types of hackers.',
            answer: 'Types of Hackers:\n1. White Hat — Ethical hackers. Permission se vulnerabilities find karte hain. Security improve karna chahte hain.\n2. Black Hat — Malicious hackers. Illegal access lena chahte hain. Data churana, damage karna.\n3. Grey Hat — Mixed approach. Permission nahi lena but vulnerabilities report karte hain.\n4. Script Kiddies — Inexperienced hackers. Tools use karte hain without understanding.\n5. Hacktivists — Political motivations. Government, corporations hack karte hain.\n6. State-Sponsored — Government sponsored hackers. National security targets.',
          },
          {
            question: 'Differentiate between white hat and black hat hackers.',
            answer: 'White Hat vs Black Hat:\n1. Permission — White hat permission required, black hat no permission\n2. Intent — White hat help organizations, black hat harm organizations\n3. Legality — White hat legal, black hat illegal\n4. Goal — White hat security improvement, black hat personal gain\n5. Tools — Same tools dono use karte hain\n6. Result — White hat vulnerabilities fix, black hat systems damage\nWhite hat ethical hai, black hat malicious hai.',
          },
        ],
      },
      {
        id: 'hacking-and-cracking',
        number: '2.28',
        title: 'Hacking and Cracking',
        subtitle: 'Difference between hacking and cracking',
        icon: 'code',
        accent: '#00ff88',
        englishDefinition: 'Hacking is the act of finding weaknesses in a computer system or network, while cracking is the act of exploiting those weaknesses to gain unauthorized access.',
        intro: 'Hacking aur cracking main difference intent mein hai. Hacking = vulnerabilities find karna, system understanding karna. Cracking = unauthorized access lena, passwords break karna, systems exploit karna. Hacking ethical ya unethical ho sakta hai. Cracking mostly unethical hai.',
        sections: [
          {
            type: 'definition',
            title: 'Hacking vs Cracking',
            content: 'Hacking = vulnerabilities find karna, system understanding karna. Cracking = unauthorized access lena, passwords break karna, systems exploit karna.',
          },
          {
            type: 'comparison',
            title: 'Hacking vs Cracking',
            rows: [
              { label: 'Definition', values: ['Finding weaknesses', 'Exploiting weaknesses'], colors: ['#0047ff', '#ff0040'] },
              { label: 'Goal', values: ['Understand system', 'Gain access'], colors: ['#0047ff', '#ff0040'] },
              { label: 'Permission', values: ['With permission', 'Without permission'], colors: ['#0047ff', '#ff0040'] },
              { label: 'Skill Level', values: ['High skill needed', 'High skill needed'], colors: ['#0047ff', '#ff0040'] },
              { label: 'Legality', values: ['Can be legal', 'Usually illegal'], colors: ['#0047ff', '#ff0040'] },
              { label: 'Examples', values: ['Penetration testing', 'Password cracking, jailbreaking'], colors: ['#0047ff', '#ff0040'] },
            ],
          },
          {
            type: 'cards',
            title: 'Hacking Activities',
            cards: [
              { icon: 'shield', title: 'Penetration Testing', desc: 'Authorized security testing. Vulnerabilities find karna. Security improve karna.', color: '#00ff88' },
              { icon: 'globe', title: 'Security Research', desc: 'System research karna. Vulnerabilities discover karna. Understanding develop karna.', color: '#0047ff' },
              { icon: 'code', title: 'Code Review', desc: 'Source code analysis. Security issues find karna. Best practices implement karna.', color: '#ff8800' },
              { icon: 'eye', title: 'Surveillance', desc: 'Network monitoring. System observation karna. Behavior analysis karna.', color: '#aa00ff' },
            ],
          },
          {
            type: 'cards',
            title: 'Cracking Activities',
            cards: [
              { icon: 'warn', title: 'Password Cracking', desc: 'Passwords break karna. Brute force, dictionary attacks. Unauthorized access.', color: '#ff0040' },
              { icon: 'lock', title: 'Software Cracking', desc: 'Software licensing bypass karna. Piracy karna. Protection remove karna.', color: '#ff0040' },
              { icon: 'globe', title: 'Jailbreaking', desc: 'Device restrictions remove karna. Root access lena. System modify karna.', color: '#ff0040' },
              { icon: 'code', title: 'Exploit Development', desc: 'Vulnerabilities exploit karna. Malware create karna. System compromise karna.', color: '#ff0040' },
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Hacking = vulnerabilities find karna, system understanding karna. Cracking = unauthorized access lena, passwords break karna. Hacking can be ethical, cracking mostly unethical.',
          },
        ],
        examQuestions: [
          {
            question: 'Differentiate between hacking and cracking.',
            answer: 'Hacking vs Cracking:\n1. Definition — Hacking finding weaknesses, cracking exploiting weaknesses\n2. Goal — Hacking understand system, cracking gain access\n3. Permission — Hacking with permission, cracking without permission\n4. Legality — Hacking can be legal, cracking usually illegal\n5. Examples — Hacking penetration testing, cracking password cracking\nHacking ethical security testing hai, cracking unauthorized access hai.',
          },
          {
            question: 'What are the different types of cracking activities?',
            answer: 'Cracking Activities:\n1. Password Cracking — Passwords break karna. Brute force, dictionary attacks.\n2. Software Cracking — Software licensing bypass karna. Piracy karna.\n3. Jailbreaking — Device restrictions remove karna. Root access lena.\n4. Exploit Development — Vulnerabilities exploit karna. Malware create karna.\n5. DRM Bypass — Digital rights management bypass karna.\n6. Serial Key Generation — Software keys generate karna.\nCracking mostly illegal hai.',
          },
        ],
      },
      {
        id: 'ethical-issues-hacking',
        number: '2.29',
        title: 'Hacking: Ethical Issues',
        subtitle: 'Moral and legal considerations',
        icon: 'flag',
        accent: '#ff8800',
        englishDefinition: 'Ethical issues in hacking include privacy violations, unauthorized access, data theft, damage to systems, and legal consequences. Hackers must consider consent, intent, and impact.',
        intro: 'Hacking ethical issues bahut important hai. Privacy violation — personal data access without consent. Unauthorized access — system access without permission. Data theft — sensitive information steal karna. Damage to systems — intentional system harm. Legal consequences — jail time, fines, criminal records.',
        sections: [
          {
            type: 'definition',
            title: 'Ethical Issues in Hacking',
            content: 'Privacy violation — personal data access without consent. Unauthorized access — system access without permission. Data theft — sensitive information steal karna. Damage to systems — intentional system harm.',
          },
          {
            type: 'cards',
            title: 'Ethical Issues',
            cards: [
              { icon: 'eye', title: 'Privacy Violation', desc: 'Personal data access without consent. Private information exposure. Privacy rights violation.', color: '#ff0040' },
              { icon: 'lock', title: 'Unauthorized Access', desc: 'System access without permission. Breaking security barriers. Trust violation.', color: '#ff0040' },
              { icon: 'warn', title: 'Data Theft', desc: 'Sensitive information steal karna. Financial data, personal info. Identity theft risk.', color: '#ff0040' },
              { icon: 'code', title: 'System Damage', desc: 'Intentional system harm. Data destruction, service disruption. Financial impact.', color: '#ff0040' },
              { icon: 'flag', title: 'Legal Consequences', desc: 'Jail time, fines, criminal records. Legal action against hackers. Career destruction.', color: '#ff0040' },
              { icon: 'globe', title: 'Business Impact', desc: 'Company reputation damage. Financial losses. Customer trust loss.', color: '#ff0040' },
            ],
          },
          {
            type: 'comparison',
            title: 'Ethical vs Unethical Hacking',
            rows: [
              { label: 'Permission', values: ['With permission', 'Without permission'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Intent', values: ['Help organization', 'Harm organization'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Data Access', values: ['Authorized only', 'Unauthorized'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Reporting', values: ['Vulnerabilities reported', 'Vulnerabilities hidden'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Consent', values: ['Consent obtained', 'No consent'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Legality', values: ['Legal', 'Illegal'], colors: ['#00ff88', '#ff0040'] },
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Ethical issues = privacy violation, unauthorized access, data theft, system damage, legal consequences. Ethical hacking permission se, reporting karna, consent lena. Unethical hacking permission bina, damage karna, data steal karna.',
          },
        ],
        examQuestions: [
          {
            question: 'What are the ethical issues in hacking?',
            answer: 'Ethical Issues in Hacking:\n1. Privacy Violation — Personal data access without consent\n2. Unauthorized Access — System access without permission\n3. Data Theft — Sensitive information steal karna\n4. System Damage — Intentional system harm\n5. Legal Consequences — Jail time, fines, criminal records\n6. Business Impact — Reputation damage, financial losses\n7. Trust Violation — Breaking security barriers\nEthical hacking permission se, reporting karna, consent lena chahiye.',
          },
          {
            question: 'How does ethical hacking differ from unethical hacking?',
            answer: 'Ethical vs Unethical Hacking:\n1. Permission — Ethical with permission, unethical without permission\n2. Intent — Ethical help organization, unethical harm organization\n3. Data Access — Ethical authorized only, unethical unauthorized\n4. Reporting — Ethical vulnerabilities report karna, unethical hidden rakhna\n5. Consent — Ethical consent obtain karna, unethical no consent\n6. Legality — Ethical legal, unethical illegal\nEthical hacking security improve karna hai, unethical hacking personal gain ke liye hack karna hai.',
          },
        ],
      },
      {
        id: 'ethical-hacking',
        number: '2.30',
        title: 'Ethical Hacking',
        subtitle: 'Security testing with permission',
        icon: 'shield',
        accent: '#00ff88',
        englishDefinition: 'Ethical hacking is the practice of testing computer systems and networks for vulnerabilities with the permission of the owner, to help improve security before malicious hackers can exploit them.',
        intro: 'Ethical hacking = permission se security testing karna. Company allow karti hai — vulnerabilities find karo, report karo. Goal = security improve karna, systems protect karna. White hat hackers ethical hacking karte hain. Process = planning, scanning, gaining access, maintaining access, analysis, reporting.',
        sections: [
          {
            type: 'definition',
            title: 'Ethical Hacking',
            content: 'Permission se security testing karna. Vulnerabilities find karna, report karna. Security improve karna. White hat hackers ethical hacking karte hain.',
          },
          {
            type: 'cards',
            title: 'Ethical Hacking Process',
            cards: [
              { icon: 'flag', title: 'Planning', desc: 'Scope define karna. Rules of engagement set karna. Permission obtain karna.', color: '#0047ff' },
              { icon: 'eye', title: 'Scanning', desc: 'Network scan karna. Vulnerabilities identify karna. Information gather karna.', color: '#0047ff' },
              { icon: 'lock', title: 'Gaining Access', desc: 'Vulnerabilities exploit karna. Access gain karna. Security test karna.', color: '#0047ff' },
              { icon: 'code', title: 'Maintaining Access', desc: 'Access maintain karna. Persistence test karna. Depth testing karna.', color: '#0047ff' },
              { icon: 'chart', title: 'Analysis', desc: 'Vulnerabilities analyze karna. Impact assess karna. Risk evaluation karna.', color: '#0047ff' },
              { icon: 'doc', title: 'Reporting', desc: 'Findings report karna. Recommendations provide karna. Remediation support karna.', color: '#0047ff' },
            ],
          },
          {
            type: 'cards',
            title: 'Ethical Hacking Benefits',
            cards: [
              { icon: 'shield', title: 'Security Improvement', desc: 'Vulnerabilities identify karna. Security weaknesses fix karna. System protection improve karna.', color: '#00ff88' },
              { icon: 'globe', title: 'Attack Prevention', desc: 'Attacks prevent karna. Security breaches avoid karna. Data protection ensure karna.', color: '#00ff88' },
              { icon: 'chart', title: 'Risk Assessment', desc: 'Risks assess karna. Security posture evaluate karna. Compliance ensure karna.', color: '#00ff88' },
              { icon: 'eye', title: 'Vulnerability Discovery', desc: 'New vulnerabilities find karna. Zero-days discover karna. Security research support karna.', color: '#00ff88' },
              { icon: 'users', title: 'Security Awareness', desc: 'Security awareness build karna. Best practices promote karna. Culture improve karna.', color: '#00ff88' },
              { icon: 'lock', title: 'Compliance', desc: 'Regulatory requirements meet karna. Security standards follow karna. Audits pass karna.', color: '#00ff88' },
            ],
          },
          {
            type: 'comparison',
            title: 'Ethical vs Malicious Hacking',
            rows: [
              { label: 'Permission', values: ['Permission required', 'No permission'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Intent', values: ['Help organization', 'Harm organization'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Reporting', values: ['Vulnerabilities reported', 'Vulnerabilities hidden'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Data Handling', values: ['Authorized only', 'Unauthorized access'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Legality', values: ['Legal', 'Illegal'], colors: ['#00ff88', '#ff0040'] },
              { label: 'Goal', values: ['Security improvement', 'Personal gain'], colors: ['#00ff88', '#ff0040'] },
            ],
          },
          {
            type: 'recap',
            title: 'Recap',
            content: 'Ethical hacking = permission se security testing karna. Process = planning, scanning, gaining access, maintaining access, analysis, reporting. Benefits = security improvement, attack prevention, risk assessment, vulnerability discovery, compliance.',
          },
        ],
        examQuestions: [
          {
            question: 'What is ethical hacking? Explain the process.',
            answer: 'Ethical Hacking: Permission se security testing karna. Vulnerabilities find karna, report karna. Security improve karna.\n\nProcess:\n1. Planning — Scope define karna, rules set karna, permission obtain karna\n2. Scanning — Network scan karna, vulnerabilities identify karna\n3. Gaining Access — Vulnerabilities exploit karna, access gain karna\n4. Maintaining Access — Access maintain karna, persistence test karna\n5. Analysis — Vulnerabilities analyze karna, impact assess karna\n6. Reporting — Findings report karna, recommendations provide karna\n\nGoal = security improvement, systems protect karna.',
          },
          {
            question: 'What are the benefits of ethical hacking?',
            answer: 'Benefits of Ethical Hacking:\n1. Security Improvement — Vulnerabilities identify karna, weaknesses fix karna\n2. Attack Prevention — Attacks prevent karna, breaches avoid karna\n3. Risk Assessment — Risks assess karna, posture evaluate karna\n4. Vulnerability Discovery — New vulnerabilities find karna, zero-days discover karna\n5. Security Awareness — Awareness build karna, best practices promote karna\n6. Compliance — Regulatory requirements meet karna, standards follow karna\n7. Cost Saving — Future breaches avoid karna, financial loss reduce karna\n8. Customer Trust — Security ensure karna, trust build karna\nEthical hacking proactive security approach hai.',
          },
        ],
      },

    ],
  },
];