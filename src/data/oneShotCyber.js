// One Shot revision notes — Cyber Security.

export const cyberOneShot = {
  subjectId: 'cyber-security',
  code: 'CYS',
  accent: '#0047ff',
  blurb: 'Threats se forensics, laws aur social engineering tak — rapid revision',
  units: [
    {
      id: 'unit-1',
      number: '1',
      name: 'Introduction to Cyber Security',
      tagline: 'Need, threats, CIA triad, laws aur policy',
      minutes: 20,
      sections: [
        {
          title: '1.1–1.6 · Cyber security, need, cyberspace, threats, warfare',
          text: `- **Cyber security:** people, process aur technology se cyberspace ki confidentiality, integrity aur availability protect karna.
- **Need:** data ki value, aarthik nuksan, reputation, legal/regulatory compliance, national security — ek breach ka cost lakhs-crore.
- **Challenges:** attacker ko ek hole chahiye, defender ko sab cover; fast-changing attacks; shortage of skilled staff; budget; legacy systems; user awareness; cross-border jurisdiction.
- **Cyberspace:** 4 layers — **physical** (cables, devices) → **logical** (software, data) → **information** (content) → **cognitive** (human/psychology); non-geographic, cross-border, anonymous.
- **Cyber threats:** malware, phishing, DDoS, MitM, SQLi/XSS, insider, zero-day, ransomware, social engineering.
- **Cyber-warfare:** state-sponsored attacks on critical infrastructure (Stuxnet, NotPetya) — target economy/military, attribution mushkil.`,
          diagram: 'cyberspace-layers',
          caption: 'Cyberspace ke 4 layers — physical, logical, information, cognitive.',
        },
        {
          title: '1.7–1.12 · CIA triad, cyber terrorism, critical infrastructure, governance, nodal authority',
          text: `| Pillar | Meaning | Today ke liye |
|---|---|---|
| Confidentiality | sirf authorised access | encryption, access control |
| Integrity | data sama-daam, unauthorised change nahi | hash, digital signature |
| Availability | time par available | backup, redundancy, DDoS protection |

- **3 A ka parivaar:** Authentication (kaun ho) → Authorisation (kya kar sakte ho) → Accountability (kya kiya, log).
- **Cyber terrorism:** cyber space se violence/darr, ya critical system ko damage — political/ideological motive (SCADA attack, hospital data wipe).
- **Critical infrastructure:** power, banking, telecom, transport, water, health, defence — inka crash = national impact.
- **Organisational implications:** risk assessment, board-level ownership, policy + audit, third-party/vendor risk, employee training, incident response plan.
- **Nodal authority:** CERT-In (India) — incident response, advisory, coordination; policy ke liye need for one clear owner, warna 45+ agencies mein overlap.`,
          diagram: 'cia-triad',
          caption: 'CIA triad — confidentiality, integrity, availability aur support ke 3 A.',
        },
        {
          title: '1.13–1.19 · Cyber laws, IT Act 2000, amendments',
          text: `- **Cyber law kya:** cyberspace mein act/omission ko legal meaning dena — e-contracts, digital signatures, cyber crime, privacy, jurisdiction.
- **Principles:** technology-neutral, no over-restriction, clarity, in-built safeguards, privacy respect.
- **IT Act 2000:** India ka pehla cyber law (based on UNCITRAL model) — legal recognition of e-records/e-contracts, **digital signature**, **Cyber Appellate Tribunal**, offences aur penalties.
  - **Kuch important sections:** 43 damage to computer (civil), 65 tampering source code, 66 hacking/identity theft, 66C identity theft, 66D cheating by impersonation, 66E privacy violation, 67 obscene material, 72 breach of confidentiality.
- **Amendments/judicial effect:** 2008 amendment — cyber terrorism 66F, data theft, section 69 interception, 69A blocking; baad ke changes ne IT Rules, data protection aur privacy par focus badhaya.
- **Jurisdiction issue:** cyber crime border-less — kis desh ka law lagega, evidence sharing sansaar.`,
          diagram: 'it-act-2000',
          caption: 'IT Act 2000 ka structure — e-records, signatures, authorities aur offences.',
        },
      ],
      lastMinute: [
        'CIA triad + 3 A (authentication, authorisation, accountability).',
        'Cyberspace ke 4 layers ke naam yaad rakho.',
        'IT Act 2000 ke 4–5 important sections.',
        'Nodal authority + policy ki need (1 line each).',
      ],
    },
    {
      id: 'unit-2',
      number: '2',
      name: 'Cybercrimes and Hacking',
      tagline: 'Attacks, malware, hacking steps aur hacker ke types',
      minutes: 24,
      sections: [
        {
          title: '2.1–2.7 · Attacks, threats, hacking steps',
          text: `- **Hacking phases (5–7):** footprinting/reconnaissance → scanning & enumeration → **gaining access** → **escalating privileges** → **executing applications** → **hiding files** (rootkit) → **covering tracks** (log clear).
- **Gaining access:** password crack, exploit, phishing; **privilege escalation** vertical (user→admin) ya horizontal (user→similar user).
- **Hiding files:** alternate data streams, hidden attributes, rootkit; **covering tracks:** log deletion, timestomping.
- **Threat types:** malware (virus, worm, trojan), spyware (keystrokes, screenshots), sniffing (promiscuous mode par packet capture — Wireshark).
- **Vulnerability:** misconfiguration, unpatched software, weak password, design flaw, insider.`,
          diagram: 'cyber-attacks-overview',
          caption: 'Attack lifecycle — reconnaissance se covering tracks tak ke steps.',
        },
        {
          title: '2.8–2.12 · Worms, trojans, viruses, backdoors',
          text: `| Malware | Akele phailta? | Host chahiye? | Note |
|---|---|---|---|
| Virus | nahi | haan | file/infection ke saath chalta |
| Worm | **haan** | nahi | network scan karke phailta (Morris, WannaCry) |
| Trojan | nahi | nahi (disguise) | legit user ke bharose darwaza kholta |
| Backdoor | nahi | nahi | re-entry ke liye hidden access |

- **Virus ke types:** boot sector, file infector, macro (Word/Excel), polymorphic (signature badalta), stealth (hides), multipartite (file + boot).
- **Trojan ke types:** remote access, password stealer (keylogger), banking, downloader, defacement, proxy.
- **Note:** worm ke liye user action nahi chahiye — isliye sabse fast spreading.`,
          diagram: 'viruses',
          caption: 'Virus ke types aur infection ka pattern.',
        },
        {
          title: '2.13–2.21 · Social attacks — stalking, piracy, phishing, XSS, spam',
          text: `- **Cyber stalking:** kisi ko online follow, harass, dhamkana (repeated unwanted contact) — BNS + IT Act 67/72 lagu.
- **Software piracy:** licensed software ka illegal copy/distribute — types: softlifting, hard disk loading, renting, counterfeiting, OEM bundling.
- **Phishing:** fake mail/site se credentials — types: spear, whaling, vishing (voice), smishing (SMS), pharming (DNS), clone/evil twin.
  - **Pehchaan:** domain thoda alag, urgent tone, link hover, attachment.
- **XSS:** untrusted input page mein \`<script>\` ke roop mein run — **stored**, **reflected**, **DOM-based**; bachav — output encoding, input validation, CSP, HttpOnly cookie.
- **Spamming:** bulk unsolicited mail — phishing/DDoS ka carrier, bandwidth waste.`,
          diagram: 'phishing',
          caption: 'Phishing chain — email/SMS se fake page tak, aur red flags.',
        },
        {
          title: '2.22–2.27 · Fraud types: auction, logic bomb, web jacking, DoS, salami, data diddling',
          text: `- **Online auction fraud:** auction site par fake listing, shill bidding, ya payment ke baad delivery nahi.
- **Logic bomb:** code mein condition wala bomb — "agar employee salary list mein na ho to data wipe" (insider ka favourite, time-triggered).
- **Web jacking:** original site ka page modify karke attacker ka page dikhana (link/JS se milta-julta domain).
- **DoS/DDoS:** service ko unavailable karna — bandwidth/volume (flood), SYN flood, application-layer (Slowloris), botnet se distributed; bachav — rate limit, WAF, CDN, filtering.
- **Salami attack:** chhoti-chhoti amounts ka slice nikalke jodna — kisi notice nahi karta (bank interest rounding).
- **Data diddling:** database mein entries ka unauthorised change (marks badalna, salary badalna).
- **Email spoofing:** sender address fake — SPF/DKIM/DMARC se bachav.`,
          diagram: 'salami-attack',
          caption: 'Salami attack — chhote slices se bada loss kaise banta hai.',
        },
        {
          title: '2.28–2.33 · Hackers ke types, hacking vs cracking, ethics',
          text: `- **White hat:** authorisation ke saath testing, report karta hai.
- **Black hat:** illegal, self-gain.
- **Grey hat:** bina permission test karta hai, phir report/blackmail.
- **Script kiddie:** tools use, samajh kam; **hacktivist:** ideology/protest; **state-sponsored:** nation ka target; **insider:** legit access ka misuse.
- **Hacking vs cracking:** hacking = knowledge/defence/solution (legal agar authorised); cracking = system break, piracy, password crack — malicious.
- **Ethical hacking:** written permission (scope + NDA), legal boundaries, no data misuse, report + fix, retest; standards — CEH/OSCP. **Trap:** "client ne bola tha" bina document ke = illegal.`,
          diagram: 'types-of-hackers',
          caption: 'Hacker ke types — white/black/grey hat aur unke motives.',
        },
      ],
      lastMinute: [
        'Hacking ke steps ka sequence (recon → scan → access → privilege → execute → hide → cover).',
        'Virus vs worm vs trojan ka table — "worm akele phailta".',
        'XSS ke 3 types + bachav ke 3 steps.',
        'DoS vs salami vs logic bomb ka ek-ek line example.',
      ],
    },
    {
      id: 'unit-3',
      number: '3',
      name: 'Cyber Forensics',
      tagline: 'Investigation process, digital evidence, web/database/network forensics',
      minutes: 22,
      sections: [
        {
          title: '3.1–3.4 · Cyber forensics, investigation process, evidence, challenges',
          text: `- **Cyber forensics:** digital evidence ko scientifically identify, preserve, analyse aur present karna — court ke liye acceptable form mein.
- **Process (steps):** identification → acquisition/preservation (hash + write blocker) → **chain of custody** → examination → analysis → documentation → reporting/presentation.
- **Digital evidence ke sources:** disk, RAM, mobile, logs, network packets, email, cloud, CCTV/ATM.
- **Challenges:** anti-forensics, encryption, volatility (RAM), huge data volume, cloud jurisdiction, device diversity, tool limitations, time-bound investigation, court admissibility.
- **Golden rule:** original evidence kabhi change na ho — hash (MD5/SHA-256) pehle aur baad mein match.`,
          diagram: 'cf-process',
          caption: 'Cyber forensics investigation process — identification se reporting tak.',
        },
        {
          title: '3.5–3.7 · Web attack/intrusion, database forensics, preventive forensics',
          text: `- **Web attack forensics:** server logs (access/error), WAF logs, application logs, timestamps, IP + user-agent, uploaded shell, DB queries — attack timeline banao.
- **Intrusion forensics:** IDS/IPS alerts, netflow, memory dump, malware sample, lateral movement trace.
- **Database forensics:** logs (audit, redo/undo), table/row timestamps, deleted row recovery, transaction analysis, insider DB access; **trap** — DB time zone + clock skew.
- **Preventive forensics:** forensic-readiness by design — centralised logging, NTP time sync, retention policy, audit trail, tamper-proof storage; incident ke baad "kya hota" nahi, pehle se ready.`,
          diagram: 'cf-intrusion',
          caption: 'Web attack/intrusion forensics — log sources se timeline tak.',
        },
        {
          title: '3.8–3.10 · Anti-forensics + detection',
          text: `- **Anti-forensics:** evidence ko chhupana/destroy karna — data wiping (overwrite), encryption, steganography, log tampering, timestomping, slack/ADS hiding, VM/cloud shifting.
- **Detection techniques:** file-system timeline anomalies, MFT/\`$UsnJrnl\` artifacts, entropy check (encrypted/zipped area), signature scan, memory analysis, log gap analysis, cross-tool validation.
- **Reality:** anti-forensics bhi traces chhodta hai — "absence of evidence bhi evidence hai" (deleted log = red flag).`,
          diagram: 'cf-antiforensics',
          caption: 'Anti-forensics techniques aur unko pakadne ke indicators.',
        },
        {
          title: '3.11–3.14 · Network tools, malware forensics, email forensics',
          text: `- **Network forensics tools:** Wireshark (packet capture/decode), tcpdump, NetFlow, Zeek/Bro, Snort (IDS), NetworkMiner, ntopng, SIEM (Splunk/ELK); pcaps se conversation, DNS/HTTP, exfiltration detect.
- **Malware types (forensics lens):** virus, worm, trojan, ransomware, rootkit, spyware, botnet, fileless (memory/PowerShell), polymorphic.
- **Malware analysis:** **static** (strings, PE header, hashes — safe) vs **dynamic** (sandbox mein chala ke behaviour/network dekho); tools — IDA/Ghidra, PEiD, Procmon, Wireshark, VirusTotal, Cuckoo.
- **Email forensics:** protocols SMTP (send), POP3 (download), IMAP (sync); **headers** — Received (reverse order), Return-Path, Message-ID, SPF/DKIM/DMARC results.
- **Email crimes:** spoofing, phishing, harassment, business email compromise, malware attachment; investigation — header analysis, IP geolocation, server logs, mailbox export.
| Protocol | Kaam | Port |
|---|---|---|
| SMTP | mail bhejna | 25 / 587 |
| POP3 | download + delete | 110 / 995 |
| IMAP | server par sync | 143 / 993 |
`,
          diagram: 'cf-email',
          caption: 'Email forensics — headers ka structure aur trace kaise karte hain.',
        },
      ],
      lastMinute: [
        'Investigation process ka sequence + chain of custody.',
        'Hash + write blocker kyun (golden rule).',
        'Static vs dynamic malware analysis.',
        'Email headers ke 4 important fields.',
      ],
    },
    {
      id: 'unit-4',
      number: '4',
      name: 'Digital Forensics',
      tagline: 'Cyber vs digital forensics, evidence properties, tools aur validation',
      minutes: 18,
      sections: [
        {
          title: '4.1–4.3 · Digital forensics intro, cyber vs digital, role & environment',
          text: `- **Digital forensics:** digital devices se legally admissible evidence nikaalna — computer, mobile, network, cloud, IoT.
- **Cyber vs digital forensics:** cyber forensics ka focus **cyber crime** (network/hacking/web) par; digital forensics broader — kisi bhi digital device se evidence (fraud, murder case ka mobile, HR investigation).
  - Practically dono same tools use karte hain, scope ka farq hai.
- **Role:** incident response support, court testimony (expert witness), root-cause, compliance/audit, data recovery.
- **Environment:** lab (isolated), field/live response, chain of custody, legal framework, trained examiner, proper tool licensing.
| Point | Cyber forensics | Digital forensics |
|---|---|---|
| Scope | cyber crime, network, web | har digital device |
| Focus | attack trail | kisi bhi case ka evidence |
| Tools | logs, IDS, packets | disk/mobile imaging |
`,
          diagram: 'df-vs-cyber',
          caption: 'Cyber forensics vs digital forensics — scope aur focus ka farq.',
        },
        {
          title: '4.4–4.6 · Software/hardware, evidence properties, recovery & preservation',
          text: `- **Forensic software:** EnCase, FTK, Autopsy/Sleuth Kit, Volatility (RAM), Cellebrite/UFED (mobile), X-Ways, Magnet AXIOM.
- **Forensic hardware:** write blocker, disk duplicator, Faraday bag (mobile signal block), faraday tent, UPS, hash appliance, imaging dock.
- **Digital evidence ke properties:** **admissible** (court accept kare), **authentic** (real, verified), **complete** (poora picture), **reliable**, **believable**, **accurate**, **timely**.
- **Recovery:** deleted file (MFT/unallocated space), formatted drive, slack space, RAM se volatile data, recycle bin, shadow copy; **preservation** — image lo (bit-by-bit), hash karo, original seal, write blocker, log har action (chain of custody form).`,
          diagram: 'df-properties',
          caption: 'Digital evidence ke properties — admissible se accurate tak.',
        },
        {
          title: '4.7–4.10 · Tools, selecting/analysing, validation, technology & practices',
          text: `- **Advanced tools:** registry/log analysis, timeline (Plaso), carving (PhotoRec/Scalpel), stego detection, malware sandbox, cloud/EDR export.
- **Evidence select karna:** case relevance, data volatility (RAM pehle), legal authority, hash, time window, source reliability.
- **Analysis:** timeline banao (file system + logs + network), correlation, keyword/regex search, communication map, "kya, kab, kaise" — hypothesis ko evidence se test karo.
- **Validation:** second tool se same hash/result, tool version + licence record, examiner ke notes, comparison with known good, peer review, court mein reproducibility.
- **Practices:** NIST/SWGDE guidelines, ISO 27037 (identification/collection/acquisition/preservation), documentation har step, refresh training.`,
          diagram: 'df-validate',
          caption: 'Evidence validation — hash compare, second tool aur peer review.',
        },
      ],
      lastMinute: [
        'Cyber vs digital forensics ke farq (scope).',
        'Evidence ke properties (admissible, authentic, complete, reliable…).',
        'Write blocker + Faraday bag kab use hote hain.',
        'Validation ke 3–4 steps.',
      ],
    },
    {
      id: 'unit-5',
      number: '5',
      name: 'Social Engineering',
      tagline: 'Phases, spiral model, phishing, insider aur bachav',
      minutes: 18,
      sections: [
        {
          title: '5.1–5.3 · Intro, evolution, categories',
          text: `- **Social engineering:** technology ko nahi, **insaan** ko hack karna — trust, fear, urgency, authority ka use.
- **Evolution:** phone call (1970s phone phreaking) → email (phishing) → social media (OSINT) → mobile/vishing → AI deepfake + spear phishing (aaj).
- **Categories (4):**
  - **Human-based:** face-to-face, tailgating, shoulder surfing, shoulder-to-shoulder.
  - **Computer-based:** phishing, pop-up, baiting (infected USB), spam.
  - **Mobile-based:** smishing, vishing, fake app, SIM swap.
  - **Socio-technical:** phishing + technical exploit (evil twin Wi-Fi).
- **Principle:** recon (target info) → hook (pretext) → play (information/access) → exit (clean-up).
| Category | Example | Medium |
|---|---|---|
| Human-based | tailgating, shoulder surfing | in person |
| Computer-based | phishing, baiting | email, web |
| Mobile-based | smishing, vishing, SIM swap | phone |
| Socio-technical | evil twin Wi-Fi | device + insaan |
`,
          diagram: 'se-categories',
          caption: 'Social engineering ke 4 categories aur unke examples.',
        },
        {
          title: '5.4–5.7 · Phases, attack spiral, vendors, advanced attacks',
          text: `- **Phases (SE attack):**
  1. **Information gathering** (OSINT — LinkedIn, website, dumpster diving).
  2. **Developing relationship / pretext** (fake identity, believable story).
  3. **Exploitation** (information ya access lena).
  4. **Execution/what to do** (use in real attack).
  5. **Exit** (bina trace, saaf-safai).
- **Attack spiral model:** har attack ek loop — recon → attempt → fail? → naya angle → retry; success par deepen access (spiral neeche ki taraf khoelta hai). Destruction wala form bhi (data destroy karna).
- **Vendors:** security awareness training, phishing simulation, OSINT tools, penetration testing — commercial "attack vendors" ki service; ethical boundary important.
- **Advanced attacks:** spear phishing, whaling (CEO/CFO), business email compromise (BEC), watering hole, pretexting, tailgating, deepfake voice/video, AI-generated phishing (perfect grammar, personalisation).`,
          diagram: 'se-phases',
          caption: 'Social engineering ke phases — information gathering se exit tak.',
        },
        {
          title: '5.8–5.10 · Phishing, insider attack, identity theft',
          text: `- **Phishing attack flow:** fake domain + urgent mail → click link → credential capture → account misuse (ya malware install).
  - Pahchaan: sender address, spelling, urgency/threat, generic greeting, link hover ka mismatch, attachment.
- **Insider attack:** legitimate access ka misuse — types: **negligent** (accidental leak), **malicious** (disgruntled employee, data theft/sabotage), **compromised** (credential stolen). Indicator: unusual access hours, mass download, USB use, resignation ke baad data.
- **Identity theft:** victim ki personal info se fraud — financial (loan/credit card), criminal (crime aapke naam), medical. India: IT Act 66C/66D.
- **Prevention:** MFA, least privilege, access review, DLP, employee monitoring policy, background check, training, exit checklist.`,
          diagram: 'se-insider',
          caption: 'Insider threat ke types aur detection indicators.',
        },
        {
          title: '5.11 · Targets + defence strategies',
          text: `- **Targets:** helpdesk, receptionist, HR, new joinee, executives (whaling), third-party vendor staff — jahan bhi information/access ka gate hai.
- **Defence:**
  - **People:** security awareness + regular phishing simulation, verify-before-trust rule, clear reporting channel.
  - **Process:** MFA, least privilege, change management, visitor policy (ID + escort), clean desk/shredding.
  - **Technology:** email filtering (SPF/DKIM/DMARC), web proxy, endpoint protection, DLP, MDM lock.
- **Rule of thumb:** **urgency + secrecy + authority = red flag** — verify independent channel se (call wapas official number par).`,
          diagram: 'se-prevent',
          caption: 'Social engineering se bachav — people, process aur technology.',
        },
      ],
      lastMinute: [
        'SE ke 5 phases order mein.',
        '4 categories + mobile/computer/human based examples.',
        'Insider ke 3 types (negligent, malicious, compromised).',
        'Defence: people + process + technology ke 2-2 points.',
      ],
    },
  ],
};
