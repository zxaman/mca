// Cyber Security — Unit III: Cyber Forensics
// Topics 3.1 – 3.14, teacher-style Hinglish notes + exam Q&A.

export const cyberForensicsTopics = [
  {
    "id": "cyber-forensics-intro",
    "number": "3.1",
    "title": "Introduction to Cyber Forensics",
    "subtitle": "Digital crime scene se court tak — science ka role",
    "icon": "search",
    "accent": "#00d4ff",
    "englishDefinition": "Cyber forensics (digital forensics) is the application of scientific and technical methods to identify, acquire, preserve, examine, analyse and present digital evidence from computers, storage media, networks, mobile devices and cloud services in a manner that is legally acceptable. It rests on three ideas: every contact leaves a trace (Locard's exchange principle, which in the digital world means every action creates logs, files, timestamps or memory artifacts); evidence must remain unmodified and verifiable, which is achieved through write blockers, forensic images and hash values; and findings must be reproducible, so a second expert can reach the same conclusion using the same data and tools. Cyber forensics borrows its process from physical forensics - identification, preservation, acquisition, examination, analysis, documentation and presentation - and its sub-branches include computer, network, mobile, memory, database, cloud, malware and e-mail forensics. It differs from incident response in emphasis: incident response contains and recovers the system quickly, while forensics explains exactly what happened, who did it and how, for disciplinary, civil or criminal proceedings under laws such as the IT Act 2000 in India.",
    "intro": "Cyber forensics = **digital crime scene investigation**. Jaise police fingerprint aur blood sample collect karti hai, waise hi forensic investigator **hard disk, RAM, logs, network packets, mobile phone** se evidence nikalta hai — aur usse aisa banata hai ki **court mein accept** ho. Teen golden rules yaad rakho: (1) **Locard's principle** — har contact ka nishaan rehta hai (digital mein log, timestamp, file); (2) **evidence kabhi badalna nahi** — write blocker + hash; (3) **reproducible** hona chahiye — doosra expert bhi same conclusion par pahunche.",
    "sections": [
      {
        "type": "definition",
        "title": "Cyber forensics kya hai",
        "kicker": "Definition",
        "body": "Cyber forensics (digital forensics) **digital evidence** ko scientifically identify, collect, preserve, examine, analyse aur present karne ki process hai — taaki court ya management us par bharosa kar sake. Ye computer, laptop, server, mobile, network, cloud aur IoT devices par lagti hai.",
        "body2": "Isko **incident response** se confuse na karo: incident response ka kaam attack rokna aur service bahal karna hai (containment + recovery), forensics ka kaam **kya, kaun, kab, kaise** — legally proof ke saath batana hai. Dono saath chalte hain, priority alag hoti hai.",
        "chips": [
          "digital evidence",
          "Locard principle",
          "hash verification",
          "chain of custody",
          "legally acceptable"
        ]
      },
      {
        "type": "cards",
        "title": "Cyber forensics ke branches",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "monitor",
            "title": "Computer forensics",
            "body": "Laptop/desktop/server ke disk, files, registry, recycle bin, prefetch — sabse purani branch."
          },
          {
            "icon": "network",
            "title": "Network forensics",
            "body": "PCAP, firewall/IDS logs, NetFlow — attack network par kaise aaya aur kya bheja."
          },
          {
            "icon": "device",
            "title": "Mobile forensics",
            "body": "Android/iOS backup, SQLite databases, call logs, chats, GPS — locked devices ke challenges."
          },
          {
            "icon": "layers",
            "title": "Memory forensics",
            "body": "RAM dump mein running processes, network connections, encryption keys, malware (Volatility)."
          },
          {
            "icon": "database",
            "title": "Database forensics",
            "body": "Transaction logs, audit trails, deleted rows — DB ke andar kya badla."
          },
          {
            "icon": "globe",
            "title": "Cloud & e-mail forensics",
            "body": "Provider logs, mailbox headers, SaaS audit logs — jurisdiction aur access ke issues."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Cyber forensics vs Incident Response vs Ethical Hacking",
        "kicker": "Comparison",
        "columns": [
          "Cyber forensics",
          "Incident response",
          "Ethical hacking"
        ],
        "rows": [
          {
            "label": "Goal",
            "values": [
              "kya hua, kaun, kaise — proof ke saath",
              "attack rokna, service bahal karna",
              "vulnerability dhoondhna (permission se)"
            ]
          },
          {
            "label": "Timing",
            "values": [
              "incident ke baad (post-incident)",
              "incident ke dauraan",
              "pehle (proactive)"
            ]
          },
          {
            "label": "Output",
            "values": [
              "report + admissible evidence",
              "contained system + RCA",
              "vulnerability report"
            ]
          },
          {
            "label": "Evidence",
            "values": [
              "hash + chain of custody zaroori",
              "logs, partial",
              "proof-of-concept"
            ]
          },
          {
            "label": "Kanoon",
            "values": [
              "court, IT Act 65B certificate",
              "internal process",
              "authorisation letter"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800",
          "#00e676"
        ]
      },
      {
        "type": "example",
        "title": "Locard principle — digital example",
        "kicker": "Example",
        "body": "Ek employee ne office laptop se client ka data chura kar USB mein copy kiya. Use lagta hai \"delete kar diya, koi proof nahi\". Lekin hard disk par: USB device ka **registry entry** (USBSTOR), file ka **$MFT record**, Windows **event log** (device connect), **Volume Shadow Copy** mein purana version, aur **prefetch** mein copy tool ka execution — sab bache rehte hain. Yehi Locard's exchange principle hai: digital duniya mein bhi har action apna nishaan chhodta hai."
      },
      {
        "type": "points",
        "title": "Cyber forensics ke principles",
        "kicker": "Principles",
        "points": [
          "**Locard's exchange principle:** har contact kuch chhodta hai, kuch le jaata hai — digital mein logs, timestamps, artifacts.",
          "**Preservation first:** original evidence ko chhedna nahi — write blocker ya hardware duplicator se image banao.",
          "**Hash integrity:** MD5/SHA-256 pehle aur baad mein match hone chahiye (image = original ka exact copy).",
          "**Chain of custody:** kisne kab kya kiya, kahan rakha — documented, signed, sealed.",
          "**Order of volatility:** RAM → swap/pagefile → network state → disk → backups → printouts (RFC 3227).",
          "**Reproducibility:** same evidence + same tool = same result; notes aur tool version likho.",
          "**Legality:** warrant/authorisation, privacy laws, IT Act 2000 Section 65B (electronic record ka certificate)."
        ]
      },
      {
        "type": "comparison",
        "title": "Digital forensics ke types (scope)",
        "kicker": "Comparison",
        "columns": [
          "Type",
          "Focus"
        ],
        "rows": [
          {
            "label": "Disk forensics",
            "values": [
              "deleted files, $MFT, slack space, registry"
            ]
          },
          {
            "label": "Memory forensics",
            "values": [
              "processes, keys, network, malware in RAM"
            ]
          },
          {
            "label": "Network forensics",
            "values": [
              "PCAP, NetFlow, IDS/firewall logs"
            ]
          },
          {
            "label": "Mobile forensics",
            "values": [
              "SQLite, chat DBs, GPS, app data"
            ]
          },
          {
            "label": "Malware forensics",
            "values": [
              "sample behaviour, IOC, reverse engineering"
            ]
          },
          {
            "label": "E-mail forensics",
            "values": [
              "headers, Received chain, attachments"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00e676",
          "#ff8800",
          "#aa00ff",
          "#ff5252",
          "#00bcd4"
        ]
      },
      {
        "type": "diagram",
        "title": "Cyber forensics — scope aur rules",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-intro",
        "caption": "Digital crime scene (disk, RAM, network, mobile, cloud) → preservation + hash → analysis → legally valid report"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Cyber forensics:** digital evidence ko identify, preserve, analyse aur court mein present karna.",
          "**Branches:** computer, network, mobile, memory, database, cloud, malware, e-mail forensics.",
          "**Principles:** Locard exchange, hash integrity, chain of custody, order of volatility, reproducibility.",
          "**Incident response vs forensics:** ek system bachata hai, doosra sach sabit karta hai.",
          "**Legal:** IT Act 2000 Section 65B, authorised access, privacy compliance.",
          "**Tools:** FTK, EnCase, Autopsy, Volatility, Wireshark, Cellebrite."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define cyber forensics. Explain its objectives, types and principles.",
        "answer": "**Cyber forensics (digital forensics):** digital evidence ko scientifically identify, preserve, examine, analyse aur present karne ki process — taki wo court ya management mein acceptable ho.\n\n**Objectives:**\n1. **What happened** — incident ka reconstruction (timeline).\n2. **Who did it** — attribution (account, IP, device).\n3. **How** — attack vector aur technique.\n4. **Impact** — kaunsa data/asset affected.\n5. **Evidence** — legally admissible proof (hash + chain of custody).\n6. **Prevention** — root cause aur controls improve karna.\n\n**Types (branches):**\n\n| Branch | Kya dekhta hai |\n|---|---|\n| Computer/disk forensics | files, $MFT, registry, deleted data |\n| Memory forensics | RAM ke processes, keys, malware |\n| Network forensics | PCAP, NetFlow, firewall/IDS logs |\n| Mobile forensics | SQLite DBs, chat, GPS |\n| Database forensics | transaction logs, audit trail |\n| Cloud/e-mail forensics | provider logs, mailbox headers |\n\n**Principles:**\n- **Locard's exchange principle** — har action ka digital nishaan rehta hai.\n- **Preservation** — write blocker se image, original untouched.\n- **Integrity** — MD5/SHA-256 hash match.\n- **Chain of custody** — documented, signed, sealed.\n- **Order of volatility** — RAM pehle, disk baad mein (RFC 3227).\n- **Reproducibility** — same evidence + tool = same result.\n- **Legality** — authorisation + IT Act 65B certificate.\n\n**Diagram:** Refer to the Cyber forensics — scope aur rules diagram."
      },
      {
        "question": "Differentiate between cyber forensics and incident response.",
        "answer": "Dono attack ke baad kaam karte hain, par **goal** alag hai.\n\n| Point | Cyber forensics | Incident response |\n|---|---|---|\n| Goal | sach sabit karna (what/who/how) | attack rokna + recovery |\n| Timing | post-incident, evidence-led | incident ke dauraan, time-critical |\n| Priority | evidence integrity | business continuity |\n| Actions | image, hash, analysis, report | isolate, contain, eradicate, recover |\n| Output | court-ready report | RCA + restored service |\n| Standard | legal (IT Act 65B, chain of custody) | internal IR playbook (NIST SP 800-61) |\n| Tools | FTK, Autopsy, Volatility, Wireshark | EDR, SIEM, firewall, backup |\n| Risk | evidence tampering | data loss / downtime |\n\n**Kaise saath chalte hain:**\n1. **Detection** → IR team alert leti hai.\n2. **Containment** — IR system isolate karti hai (par **memory/disk preserve** karke, warna evidence khatam).\n3. **Evidence collection** — forensic team image/ RAM dump leti hai.\n4. **Analysis** — forensics timeline aur attribution banati hai.\n5. **Recovery** — IR service bahal karti hai.\n6. **Report** — forensics legal report deti hai; IR lessons-learned.\n\n**Exam line:** \"IR system ko bachata hai, forensics sach ko bachata hai — dono ek hi incident par alag lens hain.\"\n\n**Diagram:** Refer to the Cyber forensics — scope aur rules diagram."
      },
      {
        "question": "Explain the branches of cyber forensics and the tools used in each.",
        "answer": "Cyber forensics ke branches scope ke hisaab se bante hain.\n\n**1. Computer / disk forensics**\n- Disk image (`dd`, FTK Imager), deleted file recovery, `$MFT`, registry, prefetch, volume shadow copies.\n- Tools: **FTK, EnCase, Autopsy, X-Ways, Sleuth Kit**.\n\n**2. Memory forensics**\n- RAM dump mein processes, network connections, injected code, encryption keys.\n- Tools: **Volatility 3, Rekall, LiME, DumpIt, Magnet RAM Capture**.\n\n**3. Network forensics**\n- PCAP, flow records, IDS/firewall/proxy logs, DNS logs.\n- Tools: **Wireshark, tshark, tcpdump, Zeek, NetworkMiner, Arkime**.\n\n**4. Mobile forensics**\n- Backup, SQLite databases (WhatsApp, call log), GPS, app artifacts.\n- Tools: **Cellebrite UFED, Magnet AXIOM, Oxygen, ADB + sqlite3**.\n\n**5. Database forensics**\n- Transaction logs (MySQL binlog, SQL Server LDF), audit trails, deleted rows.\n- Tools: **ApexSQL Log, MySQLEvents, DBCC PAGE, sqlite3**.\n\n**6. Malware forensics**\n- Behaviour, IOC, reverse engineering.\n- Tools: **Ghidra, IDA, x64dbg, Cuckoo/CAPE, YARA, VirusTotal**.\n\n**7. E-mail forensics**\n- Headers, Received chain, attachments, SPF/DKIM results.\n- Tools: **MXToolbox, MailXaminer, header analyzers**.\n\n**8. Cloud forensics**\n- Provider audit logs (CloudTrail, Azure Activity Log), SaaS mailbox export.\n- Challenge: jurisdiction aur shared responsibility.\n\n**Diagram:** Refer to the Cyber forensics — scope aur rules diagram."
      }
    ]
  },
  {
    "id": "forensics-investigation-process",
    "number": "3.2",
    "title": "Cyber Forensics Investigation Process",
    "subtitle": "Identify se Report tak — 9 phases aur chain of custody",
    "icon": "flow",
    "accent": "#00e676",
    "englishDefinition": "A cyber forensics investigation follows a documented, repeatable process: identification (detect the incident, scope the systems and legal authority), preservation (secure the scene, prevent alteration, photograph and label, keep the machine powered or pull the plug only per policy), acquisition (forensically image disks with a write blocker, capture RAM and network state first because of volatility, compute hashes), examination (extract relevant data - file system metadata, logs, registry, browser history, deleted files), analysis (correlate artifacts into a timeline, attribute actions, test hypotheses, distinguish user from malware activity), documentation (contemporaneous notes for every action, tool version, hash and custodian), and presentation/reporting (a clear report plus expert testimony, with an appendix of evidence). Throughout, chain of custody is maintained: every transfer is signed and every hash is verified so the evidence's integrity can be proven in court. Standards such as NIST SP 800-86, ISO/IEC 27037 and the RFC 3227 order of volatility guide each phase, and post-incident review closes the loop by feeding lessons back into prevention.",
    "intro": "Forensic investigation ka koi jugaad nahi hota — **fixed process** hota hai, warna court mein evidence gir jaata hai. NIST SP 800-86 ka flow yaad rakho: **Identification → Preservation → Acquisition → Examination → Analysis → Documentation → Presentation**, aur iske saath har step par **chain of custody**. Sabse badi practical baat: **volatility order** — RAM aur network pehle, disk baad mein, kyunki power off karte hi RAM ka data chala jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Investigation process ka dhancha",
        "kicker": "Definition",
        "body": "Process **linear dikhta hai par actually iterative** hota hai — analysis mein naya artifact mile to dobara acquisition karna pad sakta hai. Har phase ka output documented hota hai, taaki doosra investigator same steps repeat kar ke same conclusion par pahunche.",
        "body2": "Standards: **NIST SP 800-86** (integrating forensics into IR), **ISO/IEC 27037** (evidence handling), **RFC 3227** (order of volatility), aur India mein **IT Act 2000 Section 65B** (electronic record ka certificate).",
        "chips": [
          "identification",
          "preservation",
          "acquisition",
          "examination",
          "analysis",
          "reporting",
          "chain of custody"
        ]
      },
      {
        "type": "cards",
        "title": "9 phases",
        "kicker": "Phases",
        "cards": [
          {
            "icon": "search",
            "title": "1. Identification",
            "body": "Incident detect karo, scope decide karo (kaun se systems), legal authority (warrant/consent) lo."
          },
          {
            "icon": "lock",
            "title": "2. Preservation",
            "body": "Scene secure karo — logins band, photography, labels, power policy; tampering se bachao."
          },
          {
            "icon": "layers",
            "title": "3. Acquisition",
            "body": "Write blocker se disk image, RAM dump, network capture; hash compute karo (SHA-256)."
          },
          {
            "icon": "folder",
            "title": "4. Examination",
            "body": "Data extract karo — file system, logs, registry, browser, deleted files, e-mail."
          },
          {
            "icon": "performance",
            "title": "5. Analysis",
            "body": "Timeline banao, artifacts correlate karo, attacker vs user activity alag karo."
          },
          {
            "icon": "doc",
            "title": "6. Documentation",
            "body": "Har action ki contemporaneous notes — time, tool, version, hash, custodian."
          },
          {
            "icon": "book",
            "title": "7. Reporting",
            "body": "Clear report: findings, methodology, limitations; court ke liye expert testimony."
          },
          {
            "icon": "shield",
            "title": "8. Chain of custody",
            "body": "Har transfer signed; evidence sealed + tagged; hash verified."
          },
          {
            "icon": "refresh",
            "title": "9. Post-incident review",
            "body": "Lessons learned → controls improve (preventive forensics)."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Volatility order — kya pehle collect karo",
        "kicker": "Comparison",
        "columns": [
          "Priority",
          "Data"
        ],
        "rows": [
          {
            "label": "1 (highest)",
            "values": [
              "CPU registers, cache, RAM (processes, keys, connections)"
            ]
          },
          {
            "label": "2",
            "values": [
              "swap/pagefile, running network state (netstat, ARP, DNS cache)"
            ]
          },
          {
            "label": "3",
            "values": [
              "temporary files, logs in memory buffers"
            ]
          },
          {
            "label": "4",
            "values": [
              "disk (files, $MFT, registry)"
            ]
          },
          {
            "label": "5",
            "values": [
              "remote logs, backups, CD/DVD, printouts"
            ]
          },
          {
            "label": "6 (lowest)",
            "values": [
              "archival media, paper documentation"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#ff8800",
          "#00d4ff",
          "#00e676",
          "#aa00ff",
          "#5a6a9e"
        ]
      },
      {
        "type": "comparison",
        "title": "Live vs dead (static) acquisition",
        "kicker": "Comparison",
        "columns": [
          "Live acquisition",
          "Dead/static acquisition"
        ],
        "rows": [
          {
            "label": "Kab",
            "values": [
              "system chal raha hai (production server)",
              "system off / shutdown"
            ]
          },
          {
            "label": "Kya milta",
            "values": [
              "RAM, connections, keys, processes",
              "sirf disk ka data"
            ]
          },
          {
            "label": "Risk",
            "values": [
              "evidence badal sakta hai (running malware)",
              "RAM ka data kho jaata hai"
            ]
          },
          {
            "label": "Tool",
            "values": [
              "Volatility, DumpIt, netstat, memory imager",
              "write blocker + FTK/EnCase/dd"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "ransomware, malware, active intrusion",
              "laptop/disk seizure, legal case"
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
        "title": "Chain of custody ka practical form",
        "kicker": "Example",
        "body": "Evidence bag par likho: case number, exhibit number, device model + serial, collect karne ki date/time, collector ka naam, hash value. Har transfer ka log: \"21-08-2026 10:15 — C. Rao ne S. Khan ko diya, seal intact\". Har lab entry/exit sign hoti hai. Agar ek link missing mile to court evidence ko challenge kar sakti hai — isliye chain of custody ko evidence jitna hi important mana jaata hai."
      },
      {
        "type": "example",
        "title": "Timeline reconstruction — attack ke steps",
        "kicker": "Example",
        "body": "Logs se timeline banao: 09:02 (SSH brute-force 300 attempts) → 09:14 (successful login, unusual geo) → 09:18 (new user created) → 09:22 (webshell upload) → 09:31 (data archive) → 09:40 (outbound 2 GB). Har step ko ek artifact se prove karo (auth.log, web access log, EDR telemetry) — overlapping evidence se timeline strong hoti hai."
      },
      {
        "type": "diagram",
        "title": "Investigation process — 7 phases + custody",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-process",
        "caption": "Identification → Preservation → Acquisition → Examination → Analysis → Documentation → Reporting, har step par chain of custody aur hashing"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Phases:** Identification, Preservation, Acquisition, Examination, Analysis, Documentation, Reporting (+ custody).",
          "**Volatility:** RAM sabse pehle, disk baad mein, backups/printouts sabse last (RFC 3227).",
          "**Acquisition:** write blocker + hash (SHA-256) — original untouched.",
          "**Analysis:** timeline + correlation; attacker activity ko user activity se alag karo.",
          "**Documentation:** contemporaneous notes, tool versions, hashes, custodian signatures.",
          "**Standards:** NIST SP 800-86, ISO/IEC 27037, IT Act 65B certificate."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the cyber forensics investigation process with all its phases.",
        "answer": "Forensic investigation ek documented process follow karti hai — NIST SP 800-86 aur ISO/IEC 27037 isi dhanche par based hain.\n\n**1. Identification**\n- Incident detect, scope decide (kaun se systems, kitna data), legal authority (warrant/consent/company policy).\n\n**2. Preservation**\n- Scene secure: logins band, photography, labels; power policy decide (RAM preserve karni hai to machine on rakho).\n- Tampering se bachav — original media ko sirf read karo.\n\n**3. Acquisition**\n- **Write blocker** se disk ka forensic image (`.dd`/`.E01`), **RAM dump**, network capture.\n- **Hash** compute (SHA-256) — image aur original match hone chahiye.\n\n**4. Examination**\n- Relevant data extract: file system metadata, `$MFT`, registry, browser history, event logs, deleted files, e-mail.\n\n**5. Analysis**\n- Artifacts correlate karke **timeline** banao; attacker vs user activity alag karo; hypotheses test karo.\n\n**6. Documentation**\n- Contemporaneous notes: date/time, tool + version, hash, kisne kya kiya (chain of custody).\n\n**7. Presentation / Reporting**\n- Report: findings, methodology, limitations, evidence appendix; court mein expert testimony.\n\n**Chain of custody (har phase mein):** exhibit number, collector, hash, har transfer signed aur sealed.\n\n**Order of volatility:** RAM → swap/network → temp/logs → disk → remote logs/backups → printouts.\n\n**Diagram:** Refer to the Investigation process — 7 phases + custody diagram."
      },
      {
        "question": "What is chain of custody? Why is it important in digital forensics?",
        "answer": "**Chain of custody** = evidence ka **documented, unbroken record** — kisne, kab, kahan se collect kiya, kisne kis ko diya, kahan store hua, kisne kya kiya.\n\n**Kya record hota hai:**\n1. Case number + exhibit number.\n2. Device details (make, model, serial, IMEI).\n3. Collection date/time/place + collector ka naam aur signature.\n4. **Hash value** (MD5/SHA-256) — integrity proof.\n5. Har transfer (from → to, date, time, seal intact?).\n6. Lab entry/exit, analysis ke tool aur timing.\n\n**Kyun important:**\n- **Admissibility:** court tabhi electronic record accept karti hai jab authenticity prove ho (India: IT Act **Section 65B** certificate).\n- **Tamper proof:** lagatar record se pata chalta hai ki evidence ke saath koi manipulation nahi hui.\n- **Defence challenge:** agar chain mein gap ho, defence evidence ko inadmissible keh sakta hai.\n- **Accountability:** kisne kya kiya — blame aur mistakes track hoti hain.\n- **Reproducibility:** doosra expert same evidence par same result verify kar sakta hai.\n\n**Best practices:** sealed anti-static bags, hash at collection + verification at lab, limited access, digital log (timestamped), CCTV/room with access control.\n\n**Diagram:** Refer to the Investigation process — 7 phases + custody diagram."
      },
      {
        "question": "Explain the order of volatility and live vs dead acquisition.",
        "answer": "**Order of volatility (RFC 3227):** sabse jaldi mitne wala data pehle collect karo.\n\n| Priority | Data | Kyun |\n|---|---|---|\n| 1 | CPU registers, cache, **RAM** | power off = gone |\n| 2 | swap/pagefile, network state (ARP, DNS cache) | minutes mein badal jaata |\n| 3 | temp files, in-memory logs | overwrite ho jaate |\n| 4 | **disk** (files, $MFT, registry) | persistent par badal sakta |\n| 5 | remote logs, backups | provider/retention par depend |\n| 6 | printouts, archival media | slowest change |\n\n**Live acquisition:**\n- System chal raha hai — RAM, processes, network connections, encryption keys collect karte hain.\n- Tools: Volatility (analysis), DumpIt/LiME (capture), `netstat`, `ps`, EDR telemetry.\n- Risk: malware chal raha ho to evidence badal sakta hai; attacker ko pata chal sakta hai.\n- Best: active intrusion, ransomware, memory-resident malware, production server jise band nahi kar sakte.\n\n**Dead (static) acquisition:**\n- System off ya disk nikaal kar **write blocker** se image.\n- Tools: FTK Imager, EnCase, `dd`, Guymager.\n- Risk: RAM, network state, keys kho jaate hain.\n- Best: seized laptop/disk, legal case jahan disk hi main evidence hai.\n\n**Rule:** \"Pehle wo collect karo jo sabse pehle khatam hoga — aur har collection ka hash lo.\"\n\n**Diagram:** Refer to the Investigation process — 7 phases + custody diagram."
      }
    ]
  },
  {
    "id": "digital-evidence",
    "number": "3.3",
    "title": "Digital Evidence",
    "subtitle": "Types, sources, properties aur admissibility",
    "icon": "file",
    "accent": "#ff8800",
    "englishDefinition": "Digital evidence is any information of probative value that is stored or transmitted in digital form - files and their metadata, log records, network packets, database rows and transaction logs, memory contents, registry hives, browser artifacts, e-mail and its headers, chat data, images, video and GPS traces. Its defining properties are that it is latent (must be interpreted with tools), fragile and easily altered or destroyed, volatile in part, easily duplicated without loss (which is why copies can be examined while the original is preserved), and time-sensitive because of timestamps and log rotation. For evidence to be admissible it must be authentic, complete, reliable, believable, relevant and legally obtained - the ACPO/NIST criteria - supported by hash values, documented chain of custody and, in India, a certificate under Section 65B of the IT Act 2000 for electronic records. Courts weigh digital evidence against the hearsay rule and require that the device, the process and the human handling all be shown to be free of material alteration.",
    "intro": "Digital evidence wo **kisi bhi digital form ka data** hai jo case mein kuch saabit kar sake — file, log, packet, DB row, RAM ka content, e-mail header. Iski khaas baat: ye **latent** (tool ke bina dikhti nahi), **fragile** (ek click mein badal sakti hai), **volatile** ho sakti hai, aur **copy** bina loss ke ban sakti hai. Court mein accept karane ke liye **authentic, complete, reliable, believable, relevant aur legally obtained** hona zaroori hai (ACPO criteria) + IT Act **Section 65B** certificate.",
    "sections": [
      {
        "type": "definition",
        "title": "Digital evidence kya hai",
        "kicker": "Definition",
        "body": "**Digital evidence** = probative value rakne wala koi bhi data jo digital form mein store ya transmit hota hai. Isme files, metadata, logs, packets, database records, memory contents, registry, e-mail headers aur mobile app data sab aate hain.",
        "body2": "Agar evidence **authenticity** prove na ho (kisne banaya, kab, kya badla gaya) to court use ignore kar sakti hai — isliye hash, chain of custody aur 65B certificate teen zaroori hain.",
        "chips": [
          "latent",
          "fragile",
          "volatile",
          "hash",
          "65B certificate",
          "probative value"
        ]
      },
      {
        "type": "cards",
        "title": "Digital evidence ke types",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "folder",
            "title": "File system evidence",
            "body": "Files, directories, `$MFT`, slack space, deleted entries, timestamps (MACB)."
          },
          {
            "icon": "doc",
            "title": "Metadata & documents",
            "body": "EXIF, Office author info, PDF producer, revision history."
          },
          {
            "icon": "server",
            "title": "Log evidence",
            "body": "Windows Event Log, auth.log, web access log, firewall/IDS log — timeline ka backbone."
          },
          {
            "icon": "network",
            "title": "Network evidence",
            "body": "PCAP, NetFlow, DNS queries, proxy logs, e-mail headers."
          },
          {
            "icon": "database",
            "title": "Database evidence",
            "body": "Rows, transaction logs (binlog/LDF), audit trail, deleted tuples."
          },
          {
            "icon": "layers",
            "title": "Memory evidence",
            "body": "RAM ke processes, handles, network connections, encryption keys."
          },
          {
            "icon": "device",
            "title": "Mobile evidence",
            "body": "SQLite DBs (WhatsApp, call log), GPS, photos, app caches."
          },
          {
            "icon": "globe",
            "title": "Cloud evidence",
            "body": "Provider audit logs (CloudTrail/Activity Log), SaaS mailbox export, bucket logs."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Digital evidence ke properties",
        "kicker": "Comparison",
        "columns": [
          "Property",
          "Matlab",
          "Implication"
        ],
        "rows": [
          {
            "label": "Latent",
            "values": [
              "aankh se nahi dikhti",
              "tools se interpret karni padti hai"
            ]
          },
          {
            "label": "Fragile",
            "values": [
              "easily altered/destroyed",
              "write blocker + hash zaroori"
            ]
          },
          {
            "label": "Volatile",
            "values": [
              "RAM, connection state",
              "order of volatility follow karo"
            ]
          },
          {
            "label": "Duplicable",
            "values": [
              "copy loss-less (bit-stream image)",
              "original preserved, copy analyse"
            ]
          },
          {
            "label": "Time-sensitive",
            "values": [
              "logs rotate, overwrite hota hai",
              "jaldi collect karo + retention badhao"
            ]
          },
          {
            "label": "Cross-border",
            "values": [
              "cloud data kisi aur desh mein",
              "jurisdiction + MLAT issues"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff5252",
          "#ff8800",
          "#00e676",
          "#aa00ff",
          "#5a6a9e"
        ]
      },
      {
        "type": "points",
        "title": "Admissibility ke criteria (ACPO good practice guide)",
        "kicker": "Admissibility",
        "points": [
          "**Authentic:** evidence waqai usi source se aayi hai (hash, chain of custody, logs).",
          "**Complete:** sirf favourable part nahi — poora context (exculpatory evidence bhi).",
          "**Reliable:** process aur tool tested ho; results reproducible ho.",
          "**Believable:** findings understandable aur defensible ho.",
          "**Relevant:** case ke facts se seedha judi ho.",
          "**Legally obtained:** warrant/consent/policy ke andar — warna evidence challenge hoga.",
          "**India:** IT Act 2000 **Section 65B** — electronic record ke saath certificate (device, process, custody) dena hota hai."
        ]
      },
      {
        "type": "example",
        "title": "Ek hi incident mein evidence ke multiple sources",
        "kicker": "Example",
        "body": "Phishing e-mail case: (1) **e-mail header** — Received chain se originating IP; (2) **attachment hash** — malware sample identify; (3) **proxy log** — user ne link kab khola; (4) **browser history + cache** — credential page load; (5) **RAM** — malware process aur C2 connection; (6) **bank/server log** — login from new IP. Har source alag hai, par milkar **same timeline** prove karte hain — isko evidence corroboration kehte hain."
      },
      {
        "type": "comparison",
        "title": "Original vs forensic image vs working copy",
        "kicker": "Comparison",
        "columns": [
          "Original",
          "Forensic image",
          "Working copy"
        ],
        "rows": [
          {
            "label": "Nature",
            "values": [
              "seized device/disk",
              "bit-stream duplicate (E01/dd)",
              "analysis ke liye extracted data"
            ]
          },
          {
            "label": "Kab use",
            "values": [
              "sirf preserve karo",
              "standard analysis base",
              "specific artifacts, reporting"
            ]
          },
          {
            "label": "Integrity",
            "values": [
              "write-block + seal",
              "hash original se match",
              "derived, reproducible"
            ]
          },
          {
            "label": "Court value",
            "values": [
              "primary exhibit",
              "verified duplicate exhibit",
              "supporting exhibit"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#00d4ff",
          "#00e676"
        ]
      },
      {
        "type": "diagram",
        "title": "Digital evidence handling — source se court tak",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-evidence",
        "caption": "Devices & logs → write blocker → bit-stream image + hash → verified copy → analysis → 65B report → court"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Digital evidence:** digital form ka probative data — file, log, packet, DB, memory, e-mail.",
          "**Properties:** latent, fragile, volatile, duplicable, time-sensitive, cross-border.",
          "**Types:** file system, metadata, logs, network, database, memory, mobile, cloud.",
          "**Admissibility (ACPO):** authentic, complete, reliable, believable, relevant, legally obtained.",
          "**India:** IT Act 2000 Section 65B certificate.",
          "**Handling:** original preserve, image par kaam, hash verify, chain of custody."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define digital evidence. Explain its types and properties.",
        "answer": "**Digital evidence:** koi bhi information jo digital form mein store ya transmit hoti hai aur case mein probative value rakhti hai.\n\n**Types / sources:**\n\n| Type | Examples |\n|---|---|\n| File system | files, `$MFT`, deleted entries, slack space |\n| Metadata | EXIF, document author, revision history |\n| Logs | Event Log, auth.log, access/firewall/IDS logs |\n| Network | PCAP, NetFlow, DNS, proxy logs |\n| Database | rows, binlog/LDF, audit trail |\n| Memory | processes, connections, encryption keys |\n| Mobile | SQLite DBs, chats, GPS |\n| Cloud & e-mail | audit logs, mailbox headers, attachments |\n\n**Properties:**\n1. **Latent** — naked eye se nahi dikhti, tools chahiye.\n2. **Fragile** — easily modified/destroyed (ek `touch` se timestamp badal jaata hai).\n3. **Volatile** — RAM, connections; power off = lost.\n4. **Duplicable** — bit-stream image bina loss ban sakti hai; original preserve rehta hai.\n5. **Time-sensitive** — log rotation aur overwrite se data khatam.\n6. **Cross-border/jurisdictional** — cloud data doosre desh mein.\n\n**Diagram:** Refer to the Digital evidence handling — source se court tak diagram."
      },
      {
        "question": "What are the requirements for admissibility of digital evidence in court?",
        "answer": "Digital evidence tabhi admissible hoti hai jab uska **authenticity aur integrity** prove ho.\n\n**ACPO/NIST criteria:**\n1. **Authentic** — evidence usi device/account se aayi (hash, serial, logs).\n2. **Complete** — poora data, sirf cherry-picking nahi (exculpatory bhi).\n3. **Reliable** — tested tools, documented process, reproducible.\n4. **Believable** — understandable, defensible findings.\n5. **Relevant** — case facts se judi.\n6. **Legally obtained** — warrant/consent/policy ke andar.\n\n**Supporting requirements:**\n- **Hash values** (MD5/SHA-256) at collection aur verification.\n- **Chain of custody** — unbroken, signed.\n- **Write blocker** use hua ho (original unaltered).\n- **Tool validation** + expert qualification.\n- **Documentation** of every step.\n\n**India — IT Act 2000 Section 65B:** electronic record ko secondary evidence ke roop mein accept karne ke liye certificate chahiye jo batata hai: (i) record us device se produce hua jo regularly use hota tha, (ii) device theek chal raha tha, (iii) record us activity ke normal course mein bana.\n\n**Challenges:** hearsay rule, tampering allegations, encryption, anti-forensics, jurisdiction.\n\n**Diagram:** Refer to the Digital evidence handling — source se court tak diagram."
      },
      {
        "question": "Explain the handling of digital evidence from seizure to presentation.",
        "answer": "**Step 1 — Identification & seizure**\n- Device ko document karo (photo, serial, screen state), power policy decide, seal + label.\n- Legal authority check (warrant/consent).\n\n**Step 2 — Preservation**\n- Original ko write-protected rakho; anti-static bag, controlled storage, limited access.\n\n**Step 3 — Acquisition**\n- Write blocker se **bit-stream image**; RAM dump (volatile first).\n- **Hash** compute (SHA-256) aur record karo.\n\n**Step 4 — Verification**\n- Image ka hash original se match; tool se verify; do copy (working + archive).\n\n**Step 5 — Examination & analysis**\n- Sirf image/copy par kaam — original untouched.\n- Artifacts extract, timeline, correlation; notes + screenshots.\n\n**Step 6 — Documentation**\n- Chain of custody form, hash log, tool versions, findings report.\n\n**Step 7 — Presentation**\n- Report + **Section 65B certificate**, expert testimony, evidence appendix, cross-examination ke liye ready.\n\n| Stage | Key control |\n|---|---|\n| Seizure | photo, label, seal |\n| Preservation | write blocker, access control |\n| Acquisition | hash + verified image |\n| Analysis | copy par kaam, notes |\n| Report | 65B + expert |\n\n**Diagram:** Refer to the Digital evidence handling — source se court tak diagram."
      }
    ]
  },
  {
    "id": "forensics-challenges",
    "number": "3.4",
    "title": "Challenges in Cyber Forensics",
    "subtitle": "Encryption, anti-forensics, scale, jurisdiction, legality",
    "icon": "warn",
    "accent": "#ff5252",
    "englishDefinition": "Cyber forensics faces technical, legal and organisational challenges. Technically, evidence is volatile and huge in volume (terabytes per device, millions of log lines), storage is increasingly encrypted (BitLocker, FileVault, LUKS) or held in cloud accounts, attackers use anti-forensics to delete logs and timestomp artifacts, malware resides only in memory, and internet-scale networks make full packet capture impractical. Tool and format problems add up: proprietary formats, inconsistent timestamps and time zones, unsupported devices and OS updates that change artifact locations. Legally, investigators must respect privacy and authorisation, cross-border data needs mutual legal assistance, cloud providers may refuse direct access, chain of custody must remain unbroken, and Section 65B-style certification is required in India. Organisationally, there is a shortage of trained examiners, high cost of labs and tools, pressure to restore systems quickly (which destroys volatile evidence), and increasing case backlogs. Encrypted-by-default devices and the sheer scale of data are the two most cited practical blockers today, which is why triage, memory capture and lawful key access have become standard practice.",
    "intro": "Cyber forensics easy nahi hai — **technical, legal aur organisational** teen tarah ke challenges hain. Sabse bade blockers: (1) **encryption by default** (BitLocker/FileVault/LUKS), (2) **data ka volume** (terabytes + millions of log lines), (3) **anti-forensics** (log deletion, timestomping), (4) **jurisdiction** (cloud data doosre desh mein), (5) **privacy + 65B compliance**, aur (6) **skilled logon ki kami**. Interview mein yehi list poochi jaati hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Challenges ka matlab",
        "kicker": "Definition",
        "body": "Forensic investigation ke raste mein jo bhi rukavat aaye — data milna mushkil ho, data badal jaaye, ya legally use na kar sake — wo challenge hai. Ye challenge **technical, legal, operational aur organisational** categories mein baant sakte hain.",
        "body2": "Sabse important implication: challenges **methodology** decide karte hain — isliye triage, live memory capture, log retention badhana aur legal pre-authorisation standard practice ban gaya hai.",
        "chips": [
          "encryption",
          "data volume",
          "anti-forensics",
          "jurisdiction",
          "tool limits",
          "privacy",
          "65B"
        ]
      },
      {
        "type": "cards",
        "title": "Technical challenges",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "lock",
            "title": "Encryption",
            "body": "BitLocker, FileVault, LUKS, app-level encryption — key na ho to disk ka data bekaar."
          },
          {
            "icon": "warehouse",
            "title": "Data volume",
            "body": "TB-scale disks, millions of logs — full manual review impossible, triage + automation chahiye."
          },
          {
            "icon": "warn",
            "title": "Anti-forensics",
            "body": "Log wiping, timestomping, secure delete, steganography — evidence jaan-boojh kar mitaayi jaati hai."
          },
          {
            "icon": "layers",
            "title": "Volatility",
            "body": "RAM, network state, keys — power off ya reboot se khatam."
          },
          {
            "icon": "bug",
            "title": "Memory-only malware",
            "body": "File-less attack memory mein rehta hai; disk par sample nahi milta."
          },
          {
            "icon": "network",
            "title": "Scale of networks",
            "body": "Internet-scale traffic — full PCAP costly; flow data se kaam chalana padta hai."
          },
          {
            "icon": "cloud",
            "title": "Cloud & virtualisation",
            "body": "Provider ke paas data; snapshots, shared tenancy, log access limited."
          },
          {
            "icon": "tools",
            "title": "Tool limitations",
            "body": "Proprietary formats, OS updates se artifact paths badalna, unsupported devices."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Legal & organisational challenges",
        "kicker": "Comparison",
        "columns": [
          "Area",
          "Challenge"
        ],
        "rows": [
          {
            "label": "Privacy",
            "values": [
              "personal data, employee monitoring limits, DPDP Act"
            ]
          },
          {
            "label": "Jurisdiction",
            "values": [
              "cross-border cloud, MLAT delays"
            ]
          },
          {
            "label": "Authorisation",
            "values": [
              "warrant/consent ke bina evidence inadmissible"
            ]
          },
          {
            "label": "65B certification",
            "values": [
              "proper certificate + custodian statement chahiye"
            ]
          },
          {
            "label": "Skills shortage",
            "values": [
              "trained examiner kam, salaries high"
            ]
          },
          {
            "label": "Cost & backlog",
            "values": [
              "labs mehngi, cases pending, timelines long"
            ]
          },
          {
            "label": "Business pressure",
            "values": [
              "jaldi restore karna = volatile evidence loss"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#ff8800",
          "#00d4ff",
          "#00e676",
          "#aa00ff",
          "#5a6a9e",
          "#00bcd4"
        ]
      },
      {
        "type": "points",
        "title": "Har challenge ka practical solution",
        "kicker": "Mitigation",
        "points": [
          "**Encryption:** memory se key extract, TPM escrow, legal compulsion, user cooperation.",
          "**Data volume:** triage (targeted collection), keyword/entity filters, AI/ML clustering, sampling.",
          "**Anti-forensics:** alternate log sources (SIEM, network), $LogFile/$UsnJrnl, timeline anomaly detection.",
          "**Volatility:** live response kit, RAM capture pehle, IR playbook mein forensic step.",
          "**Cloud:** legal process + provider cooperation, API-based export, audit log subscription.",
          "**Jurisdiction:** MLAT, Budapest Convention, data localisation clauses.",
          "**Skills/cost:** training, shared labs, open-source tools (Autopsy, Volatility, Zeek)."
        ]
      },
      {
        "type": "example",
        "title": "Challenge → solution mapping (exam favourite)",
        "kicker": "Example",
        "body": "Scenario: ransomware encrypted server, attacker ne logs delete kiye, BitLocker on, data cloud sync. Response: (1) **RAM capture** → encryption keys/process; (2) **SIEM/central logs** → deleted local logs ka alternative; (3) **cloud audit log** → sync activity, attacker IP; (4) **$MFT + $UsnJrnl** → deleted file records; (5) **65B certificate** + chain of custody → court. Har challenge ka ek counter-source hota hai — yehi forensic thinking hai."
      },
      {
        "type": "diagram",
        "title": "Cyber forensics challenges aur unke solutions",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-challenges",
        "caption": "Encryption, volume, anti-forensics, volatility, cloud, jurisdiction → triage, memory capture, SIEM, legal process"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Technical:** encryption, data volume, anti-forensics, volatility, memory-only malware, cloud, tool limits.",
          "**Legal:** privacy, jurisdiction, authorisation, 65B certification, hearsay.",
          "**Organisational:** skills shortage, cost, backlog, business pressure.",
          "**Solutions:** triage, live memory capture, SIEM/central logs, legal process, training, open-source tools.",
          "**Exam line:** har challenge ka ek counter-source hota hai — alternate logs sabse bada friend."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Discuss the challenges faced in cyber forensics and their solutions.",
        "answer": "Cyber forensics mein technical, legal aur organisational teen tarah ke challenges aate hain.\n\n**A. Technical challenges**\n1. **Encryption** — BitLocker/FileVault/LUKS: key na mile to data inaccessible.\n2. **Data volume** — terabyte disks, millions of logs; manual review impossible.\n3. **Anti-forensics** — log deletion, timestomping, secure wipe, steganography.\n4. **Volatility** — RAM, network state, keys power off se khatam.\n5. **File-less/memory-only malware** — disk par sample nahi.\n6. **Cloud & virtualisation** — provider control, shared tenancy, limited logs.\n7. **Tool limitations** — proprietary formats, OS updates, unsupported devices.\n\n**B. Legal challenges**\n1. **Privacy** — DPDP Act, employee monitoring limits.\n2. **Jurisdiction** — cross-border data, MLAT delays.\n3. **Authorisation** — warrant/consent ke bina inadmissible.\n4. **Section 65B certificate** aur custodian statement ki zaroorat.\n\n**C. Organisational challenges**\n1. Skilled examiners ki kami.\n2. Lab/tool ka high cost.\n3. Case backlog aur lengthy timelines.\n4. Business pressure — jaldi restore karne se evidence khatam.\n\n**Solutions:**\n\n| Challenge | Solution |\n|---|---|\n| Encryption | memory se key, TPM escrow, legal compulsion |\n| Volume | triage, filters, AI clustering |\n| Anti-forensics | SIEM/central logs, $UsnJrnl, anomaly detection |\n| Volatility | RAM capture first, IR playbook |\n| Cloud | legal process, API export, audit logs |\n| Skills | training, open-source tools |\n\n**Diagram:** Refer to the Cyber forensics challenges aur unke solutions diagram."
      },
      {
        "question": "How does encryption challenge cyber forensics? What techniques are used?",
        "answer": "Encryption digital evidence ko **unreadable** bana deti hai — investigation ruk jaati hai.\n\n**Challenges:**\n- **Full-disk encryption:** BitLocker, FileVault, LUKS — disk image ka koi matlab nahi bina key.\n- **File/folder encryption:** EFS, VeraCrypt containers, password-protected archives.\n- **App-level:** WhatsApp/Telegram local DB encryption, password managers, encrypted e-mail (PGP).\n- **In transit:** TLS — PCAP mein content encrypted, sirf metadata (SNI, IP, size, timing).\n- **Key management:** keys RAM mein hoti hain, disk par nahi; TPM se sealed.\n- **Crypto-erasure:** attacker key destroy kar de to data permanently gone.\n\n**Techniques to deal with it:**\n1. **Live memory capture** — RAM se keys/containers (Volatility, `aeskeyfind`).\n2. **TPM/escrow** — enterprise BitLocker recovery keys AD/Intune mein.\n3. **Legal compulsion** — court order/cooperation (India: IT Act Section 69 powers).\n4. **Side channels** — hibernation file, pagefile, crash dumps mein key material.\n5. **Known-plaintext dictionary attack** — `hashcat`/`john` se password recovery (brute-force, wordlist).\n6. **Brute force/PRINCE** — weak passphrase case mein.\n7. **Cloud/CSP cooperation** — provider-side decryption ya key escrow.\n8. **Prevention:** disk encryption policies ke saath key escrow mandatory.\n\n**Limitation:** strong encryption + no key + powered-off device = practically unbreakable; isliye \"collect keys first\" rule.\n\n**Diagram:** Refer to the Cyber forensics challenges aur unke solutions diagram."
      },
      {
        "question": "Explain anti-forensics as a challenge, and how investigators counter it.",
        "answer": "**Anti-forensics** = jaan-boojh kar forensic evidence ko destroy, hide ya mislead karne ki techniques.\n\n**Common anti-forensics techniques:**\n1. **Log deletion/clearing** — Event Log clear, `wevtutil cl`, auth.log truncate.\n2. **Timestomping** — file ke MACB timestamps badalna (Metasploit `timestomp`).\n3. **Secure deletion/wiping** — `sdelete`, `shred`, DBAN — data unrecoverable.\n4. **Encryption** — evidence inaccessible.\n5. **Steganography** — data image/audio ke andar chhupana.\n6. **Rootkits/VM detection** — analysis environment detect karke behaviour badalna.\n7. **Data hiding** — alternate data streams (NTFS), hidden partitions, slack space.\n8. **Trail obfuscation** — false flags, proxy chains, Tor.\n\n**Countermeasures (detection):**\n- **Alternate log sources:** SIEM, central syslog, firewall/proxy/IDS logs.\n- **NTFS artifacts:** `$LogFile`, `$UsnJrnl` (deleted file records), `$MFT` entries.\n- **Timeline anomalies:** timestamps ka sequence unnatural (created > modified), timezone mismatch.\n- **Hash comparison:** known-good baselines, `ssdeep` similarity.\n- **Registry artifacts:** USB history, prefetch, shimcache, amcache.\n- **Network evidence:** NetFlow, DNS, TLS metadata.\n- **Tooling:** Autopsy timeline, Plaso/log2timeline, Volatility, YARA.\n- **Legal:** 65B certificate, custodian statement — absence of logs bhi evidence hai.\n\n**Diagram:** Refer to the Cyber forensics challenges aur unke solutions diagram."
      }
    ]
  },
  {
    "id": "intrusion-forensics",
    "number": "3.5",
    "title": "Web Attack and Intrusion Forensics",
    "subtitle": "Web logs se attacker tak — OWASP attacks ka digital trail",
    "icon": "network",
    "accent": "#00d4ff",
    "englishDefinition": "Intrusion forensics reconstructs how an attacker entered and moved inside a system from the traces left behind. For web attacks the primary sources are the web server access and error logs (client IP, timestamp, method, URI, status, user-agent, bytes), the application logs, WAF and proxy logs, database logs and the application's own audit trail. Typical signatures are SQL injection (UNION, OR 1=1, sleep(), information_schema), XSS (%3Cscript%3E), path traversal (../../etc/passwd), local and remote file inclusion, command injection (; whoami), unrestricted upload of a webshell, brute-force or credential-stuffing patterns (repeated 401/302 on login), and scanner noise (sqlmap, nikto user-agents). The forensic task is to build a timeline - reconnaissance, exploitation, web shell or persistence, privilege escalation, lateral movement, data access and exfiltration - correlate logs across layers, decode URL and base64 encoding, map IPs and geolocation, verify which accounts and records were touched, and preserve everything with hashes and chain of custody. Indicators found during analysis are converted into detection rules for the future.",
    "intro": "**Intrusion forensics** ka matlab: attacker system mein **kahan se ghusa, kya kiya, kya nikala** — yehi traces se prove karna. Web attack mein sabse bada evidence source **web server access log** hota hai (IP, time, method, URI, status, user-agent). Signatures yaad rakho: SQLi (`UNION`, `OR 1=1`), XSS (`%3Cscript%3E`), path traversal (`../../`), command injection (`; whoami`), webshell upload, aur brute-force (baar baar `401`/`302`).",
    "sections": [
      {
        "type": "definition",
        "title": "Intrusion forensics kya hai",
        "kicker": "Definition",
        "body": "**Intrusion forensics** attack ke baad uski **poori chain reconstruct** karta hai: reconnaissance → exploitation → persistence → privilege escalation → lateral movement → exfiltration. Iske liye multiple layers ke logs correlate kiye jaate hain.",
        "body2": "Iska output sirf report nahi hota — **IOC aur detection rules** bhi banti hain, taaki same pattern dobara pakda ja sake.",
        "chips": [
          "access log",
          "WAF log",
          "IOC",
          "timeline",
          "webshell",
          "lateral movement"
        ]
      },
      {
        "type": "cards",
        "title": "Evidence sources",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "doc",
            "title": "Web access log",
            "body": "Apache/Nginx/IIS: IP, time, method, URI, status, bytes, user-agent — attack ki pehli nishani."
          },
          {
            "icon": "warn",
            "title": "Error log",
            "body": "500/403 ke spike se injection ya file inclusion ka pata chalta hai."
          },
          {
            "icon": "shield",
            "title": "WAF & proxy",
            "body": "Blocked vs allowed requests, payload capture, geo-IP."
          },
          {
            "icon": "file",
            "title": "Application log",
            "body": "Login attempts, admin actions, business transactions."
          },
          {
            "icon": "database",
            "title": "Database log",
            "body": "Slow query, general log, binlog — injected query aur data access."
          },
          {
            "icon": "server",
            "title": "System & EDR",
            "body": "auth.log, process creation, new services, cron/task persistence."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Common web attacks aur unke log signatures",
        "kicker": "Comparison",
        "columns": [
          "Attack",
          "Log signature"
        ],
        "rows": [
          {
            "label": "SQL injection",
            "values": [
              "`UNION SELECT`, `OR 1=1`, `sleep(5)`, `information_schema`, `--`"
            ]
          },
          {
            "label": "XSS",
            "values": [
              "`%3Cscript%3E`, `<img src=x onerror=`, `javascript:`"
            ]
          },
          {
            "label": "Path traversal / LFI",
            "values": [
              "`../../etc/passwd`, `....//`, `?file=index.php%00`"
            ]
          },
          {
            "label": "RFI",
            "values": [
              "`?page=http://evil/` external include"
            ]
          },
          {
            "label": "Command injection",
            "values": [
              "`; whoami`, `| id`, `` `cat /etc/shadow` ``"
            ]
          },
          {
            "label": "File upload",
            "values": [
              "`POST /upload` + `.php/.jsp` then GET webshell"
            ]
          },
          {
            "label": "Brute force",
            "values": [
              "`401`/`302` repeated, same URI, many usernames"
            ]
          },
          {
            "label": "Scanner",
            "values": [
              "`sqlmap`, `nikto`, `nmap` user-agent; 404 flood"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#ff8800",
          "#00d4ff",
          "#aa00ff",
          "#00e676",
          "#5a6a9e",
          "#ffd600",
          "#00bcd4"
        ]
      },
      {
        "type": "example",
        "title": "Access log se attack timeline",
        "kicker": "Example",
        "body": "`10.0.4.7 - - [12/Aug/2026:09:01:11] \"GET /product.php?id=1%27%20OR%201=1-- HTTP/1.1\" 200` → SQLi probe. 09:03 par `UNION SELECT username,password FROM users` → data leak. 09:07 par `POST /upload.php` 200 → webshell upload. 09:09 par `GET /uploads/s.php?cmd=id` → command execution. 09:15 par `GET /admin/export` 200 with 40 MB response → exfiltration. Har step ka ek log line — milkarpoora attack narrative ban jaata hai."
      },
      {
        "type": "comparison",
        "title": "Live intrusion vs post-incident forensics",
        "kicker": "Comparison",
        "columns": [
          "Live",
          "Post-incident"
        ],
        "rows": [
          {
            "label": "Focus",
            "values": [
              "attack rokna + memory/connection capture",
              "poori chain reconstruct karna"
            ]
          },
          {
            "label": "Logs",
            "values": [
              "real-time SIEM alerts",
              "archived logs, PCAP, images"
            ]
          },
          {
            "label": "Risk",
            "values": [
              "attacker dekh sakta hai",
              "evidence already altered"
            ]
          },
          {
            "label": "Output",
            "values": [
              "blocked IP, isolated host",
              "root cause + attribution + legal report"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#00d4ff"
        ]
      },
      {
        "type": "diagram",
        "title": "Web attack forensics — recon se exfiltration tak",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-intrusion",
        "caption": "Recon (scan) → exploit (SQLi/XSS/LFI) → webshell/persistence → privesc → lateral movement → exfiltration, har step log source ke saath"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Intrusion forensics:** attack chain ko logs se reconstruct karna.",
          "**Sources:** access/error log, WAF/proxy, app log, DB log, auth.log, EDR.",
          "**Signatures:** SQLi (`UNION`), XSS (`%3Cscript`), traversal (`../`), injection (`; whoami`), upload, brute force.",
          "**Steps:** timeline, correlate layers, decode payload, map IP, identify accounts/data.",
          "**Output:** report + IOC + detection rules."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain web attack forensics with evidence sources and common attack signatures.",
        "answer": "**Web attack forensics:** web application par huye attack ko server aur application ke traces se reconstruct karna.\n\n**Evidence sources:**\n\n| Source | Kya milta hai |\n|---|---|\n| Web access log | IP, timestamp, method, URI, status, user-agent |\n| Error log | 500/403 spikes, unfiltered errors |\n| WAF/proxy log | blocked payloads, geo-IP |\n| App log | login attempts, admin actions |\n| DB log (binlog/general) | injected queries, data access |\n| auth.log / EDR | shell spawn, new service, cron |\n\n**Common attacks + log signatures:**\n1. **SQL injection** — `UNION SELECT`, `OR 1=1`, `sleep()`, `information_schema`.\n2. **XSS** — `%3Cscript%3E`, `onerror=`, `javascript:`.\n3. **Path traversal / LFI** — `../../etc/passwd`, null byte.\n4. **RFI** — `?page=http://evil/...`.\n5. **Command injection** — `; whoami`, `| id`.\n6. **Unrestricted upload** — `.php/.jsp` upload + webshell access.\n7. **Brute force / credential stuffing** — repeated `401`/`302`.\n8. **Scanner** — `sqlmap`/`nikto` user-agents, 404 flood.\n\n**Analysis steps:** decode URL/base64 → timeline banao → layers correlate → affected accounts/data identify → preserve with hash → report + IOC.\n\n**Diagram:** Refer to the Web attack forensics — recon se exfiltration tak diagram."
      },
      {
        "question": "Describe the phases of an intrusion and how each leaves forensic evidence.",
        "answer": "Intrusion phases (Cyber Kill Chain style) aur unke artifacts:\n\n**1. Reconnaissance**\n- Port scan, directory brute force, vulnerability scan.\n- Evidence: firewall/IDS alerts, 404 flood, `nmap`/`nikto` user-agent.\n\n**2. Initial exploitation**\n- SQLi, XSS, LFI/RFI, default credentials, vulnerable plugin.\n- Evidence: access log with payload, error log 500, WAF blocks.\n\n**3. Foothold / webshell**\n- `upload.php`, `shell.jsp` upload then command via `?cmd=`.\n- Evidence: POST upload 200, new file in webroot (`$MFT`, inode), later GET requests.\n\n**4. Privilege escalation**\n- Local exploit, sudo misconfig, credential dump.\n- Evidence: `auth.log`, process creation (EDR), `sudo` entries, `/etc/passwd` modification.\n\n**5. Persistence**\n- Cron job, systemd service, new user, SSH `authorized_keys`.\n- Evidence: cron log, new files, registry/service changes, last-login.\n\n**6. Lateral movement**\n- SSH/RDP/WinRM to other hosts, pass-the-hash.\n- Evidence: auth logs on multiple hosts, SMB/RDP traffic in NetFlow, unusual admin shares.\n\n**7. Data access & exfiltration**\n- DB dumps, archive + outbound transfer.\n- Evidence: large response sizes, DB slow/general log, outbound flow spikes, DNS tunnelling.\n\n**8. Cover-up (anti-forensics)**\n- Log clearing, timestomping.\n- Evidence: Event ID 1102 (log cleared), `$UsnJrnl` gaps, timestamp anomalies.\n\n**Diagram:** Refer to the Web attack forensics — recon se exfiltration tak diagram."
      },
      {
        "question": "How is an intrusion investigation carried out? Explain the steps with tools.",
        "answer": "**Step 1 — Preparation & authorisation**\n- Scope, legal authority, evidence kit; volatile data ka plan.\n\n**Step 2 — Live response (if host active)**\n- RAM capture (DumpIt/WinPmem/LiME), `netstat`/`ss`, running processes, logged-in users, scheduled tasks.\n- Tool: **Volatility 3** (`pslist`, `netscan`, `malfind`).\n\n**Step 3 — Log collection**\n- Web access/error logs, auth.log, Windows Event Log, WAF, proxy, VPN, DB logs.\n- Tool: **Splunk/ELK**, `zeek`, `awk`/`grep` filters.\n\n**Step 4 — Disk imaging**\n- Write blocker + FTK Imager/`dd`; hash record.\n\n**Step 5 — Timeline & correlation**\n- `log2timeline/Plaso`, Autopsy timeline; super-timeline across layers.\n- IOC matching: `grep` payload patterns, IP reputation, geo-IP.\n\n**Step 6 — Malware/webshell analysis**\n- Webshell source review, hash lookup (VirusTotal), `YARA` scan; sandbox for binaries.\n\n**Step 7 — Attribution & impact**\n- Account + IP + device + timing; kitne records/rows access hue (DB audit), data volume estimate.\n\n**Step 8 — Documentation & reporting**\n- Evidence log, hash list, chain of custody, 65B certificate, findings + recommendations.\n\n**Step 9 — Containment support & hardening**\n- Block IPs, patch vulnerability, rotate credentials, detection rules deploy.\n\n**Diagram:** Refer to the Web attack forensics — recon se exfiltration tak diagram."
      }
    ]
  },
  {
    "id": "database-forensics",
    "number": "3.6",
    "title": "Database Forensics",
    "subtitle": "Transaction logs, audit trails aur deleted rows",
    "icon": "database",
    "accent": "#00e676",
    "englishDefinition": "Database forensics is the branch of digital forensics that examines database management systems and their supporting files to determine what data was accessed, modified, inserted or deleted, by whom and when. Because a database is a live, multi-user structure, evidence is drawn from the data files and page structure, transaction logs (MySQL binary log and redo/undo, SQL Server transaction log .ldf, Oracle redo logs and archive logs, PostgreSQL WAL), audit features (SQL Server Audit, Oracle Unified Auditing, MySQL audit plugins, PostgreSQL pgaudit), triggers that log changes, and external sources such as application logs and OS logs. Techniques include log mining and point-in-time recovery into a separate forensic instance, unallocated page and row recovery, DBCC PAGE and internals inspection, comparison of before/after snapshots, and analysis of injection artifacts left by SQL injection attacks. Investigators must never query the production database directly with modifying statements; they work on a restored copy, use read-only access, and document every query. Regulatory requirements such as PCI DSS, SOX and India's DPDP Act make database audit trails both a compliance and a forensic asset.",
    "intro": "**Database forensics** = DBMS ke andar **kya badla, kisne badla, kab badla** — ye prove karna. Database live aur multi-user hoti hai, isliye evidence **transaction logs** (MySQL binlog, SQL Server LDF, Oracle redo, PostgreSQL WAL), **audit trails**, triggers aur page-level internals se aata hai. Rule number one: **production DB par modifying query kabhi nahi** — restore copy par read-only kaam karo.",
    "sections": [
      {
        "type": "definition",
        "title": "Database forensics kya hai",
        "kicker": "Definition",
        "body": "Ye DBMS files aur logs ko examine karke ye establish karta hai ki kaunsa record **kab, kis user ne, kaise** dekha/badla/delete kiya. Isme data file internals (pages, rows), transaction logs aur audit logs teeno dekhe jaate hain.",
        "body2": "Iska use **insider data theft, fraud, SQL injection ka impact** aur **compliance audit** mein hota hai — aur ye court mein 'kya data leak hua' ka exact answer deta hai.",
        "chips": [
          "transaction log",
          "audit trail",
          "WAL",
          "binlog",
          "deleted rows",
          "point-in-time recovery"
        ]
      },
      {
        "type": "cards",
        "title": "Evidence sources per DBMS",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "database",
            "title": "MySQL / MariaDB",
            "body": "Binary log (`binlog`) — har DML statement; redo/undo, InnoDB `.ibd` pages, general query log."
          },
          {
            "icon": "server",
            "title": "SQL Server",
            "body": "Transaction log (`.ldf`) — point-in-time, `fn_dblog`; SQL Server Audit; default trace."
          },
          {
            "icon": "layers",
            "title": "Oracle",
            "body": "Redo log + archive log, UNDO tablespace, Unified Auditing, flashback."
          },
          {
            "icon": "file",
            "title": "PostgreSQL",
            "body": "Write-Ahead Log (WAL), `pg_xact`, `pgaudit` extension, `pg_stat_activity`."
          },
          {
            "icon": "doc",
            "title": "Application layer",
            "body": "App logs, ORM query logs, API gateway logs — user ↔ query mapping."
          },
          {
            "icon": "clock",
            "title": "OS/system",
            "body": "Filesystem timestamps, backup catalog, auth logs for DB logins."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Log types aur unka forensic use",
        "kicker": "Comparison",
        "columns": [
          "Log",
          "Kya record karta hai",
          "Forensic value"
        ],
        "rows": [
          {
            "label": "Transaction log",
            "values": [
              "har change (before/after image)",
              "exact modification + rollback"
            ]
          },
          {
            "label": "Binary/WAL",
            "values": [
              "committed statements",
              "replay karke deleted row recover"
            ]
          },
          {
            "label": "Audit trail",
            "values": [
              "who, what, when, from where",
              "attribution + compliance"
            ]
          },
          {
            "label": "General query log",
            "values": [
              "all queries (heavy)",
              "development/debug forensics"
            ]
          },
          {
            "label": "Error log",
            "values": [
              "failed logins, crashes",
              "brute force / tampering detection"
            ]
          },
          {
            "label": "App/ORM log",
            "values": [
              "user → query mapping",
              "insider identification"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00e676",
          "#ff8800",
          "#aa00ff",
          "#ff5252",
          "#5a6a9e"
        ]
      },
      {
        "type": "points",
        "title": "Database forensic techniques",
        "kicker": "Techniques",
        "points": [
          "**Restore & replay:** backup lo, alag forensic instance mein restore karo, binlog/WAL replay karke state reconstruct.",
          "**Point-in-time recovery:** incident se pehle ka state banao aur compare karo.",
          "**Page-level analysis:** `DBCC PAGE`, InnoDB page inspection — deleted rows/marked space.",
          "**Log mining:** `mysqlbinlog`, `fn_dblog`, `LogMiner`, `pg_waldump`.",
          "**Audit analysis:** SQL Server Audit / Oracle Unified Auditing / `pgaudit` ke records correlate.",
          "**Injection artifacts:** slow query log + app log se SQLi queries aur affected tables identify.",
          "**Integrity checks:** checksum (DBCC CHECKDB), row count, hash of critical tables.",
          "**Never modify production:** read-only user, copy par kaam, har query document."
        ]
      },
      {
        "type": "example",
        "title": "Deleted row recovery (MySQL example)",
        "kicker": "Example",
        "body": "Attacker ne `DELETE FROM customers WHERE id=1042;` chalaya aur app se record gayab. Investigation: `mysqlbinlog --base64-output=DECODE-ROWS -v binlog.000017` se delete event milta hai (before-image ke saath), aur usi binlog se `--start-position` use kar ke row ko staging DB mein replay kar sakte hain. Sath hi general log se user aur IP, aur app log se session ID — teeno milke proof ban jaate hain."
      },
      {
        "type": "comparison",
        "title": "Database forensics vs application forensics",
        "kicker": "Comparison",
        "columns": [
          "Database forensics",
          "Application forensics"
        ],
        "rows": [
          {
            "label": "Focus",
            "values": [
              "data integrity + DB actions",
              "code, sessions, API calls"
            ]
          },
          {
            "label": "Source",
            "values": [
              "binlog/WAL/audit/log files",
              "web/app logs, source code, memory"
            ]
          },
          {
            "label": "Question",
            "values": [
              "kaunsa record badla?",
              "kaunsa request aaya?"
            ]
          },
          {
            "label": "Tool",
            "values": [
              "mysqlbinlog, fn_dblog, LogMiner",
              "grep/ELK, debugger, Burp"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#00d4ff"
        ]
      },
      {
        "type": "diagram",
        "title": "Database forensics — logs se proof tak",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-database",
        "caption": "DB files + binlog/WAL + audit trail → restore copy → replay & log mining → modified records → report"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Database forensics:** DB mein kya badla, kisne, kab — logs aur pages se prove karna.",
          "**Sources:** transaction log (LDF/binlog/WAL/redo), audit trail, general/error log, app log.",
          "**Techniques:** restore + replay, point-in-time recovery, `mysqlbinlog`/`fn_dblog`, page analysis.",
          "**Rule:** production DB par modifying query nahi — copy par read-only analysis.",
          "**Use:** insider theft, fraud, SQLi impact, compliance (PCI DSS, DPDP)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is database forensics? Explain its evidence sources and techniques.",
        "answer": "**Database forensics:** DBMS ke data files aur logs examine karke ye determine karna ki kisne, kab, kya data access/modify/delete kiya.\n\n**Evidence sources:**\n\n| DBMS | Source |\n|---|---|\n| MySQL | binary log, redo/undo, `.ibd` pages, general log |\n| SQL Server | transaction log (`.ldf`), SQL Server Audit, default trace |\n| Oracle | redo/archive log, UNDO, Unified Auditing |\n| PostgreSQL | WAL, `pg_xact`, `pgaudit` |\n| Common | app/ORM logs, OS auth logs, backups |\n\n**Techniques:**\n1. **Restore & replay** — backup + `mysqlbinlog`/WAL replay se state reconstruct.\n2. **Point-in-time recovery** — incident se pehle ki state se compare.\n3. **Log mining** — `mysqlbinlog`, `fn_dblog`, Oracle `LogMiner`, `pg_waldump`.\n4. **Page/row analysis** — deleted rows, unallocated pages (`DBCC PAGE`).\n5. **Audit correlation** — user, IP, session, query mapping.\n6. **Integrity checks** — `DBCC CHECKDB`, checksums, row counts.\n7. **Timeline** — DB + app + OS logs merge karke.\n\n**Golden rules:** production par **modifying query nahi**, read-only copy, har query documented, hash + chain of custody.\n\n**Uses:** insider data theft, fraud detection, SQL injection impact, regulatory audit.\n\n**Diagram:** Refer to the Database forensics — logs se proof tak diagram."
      },
      {
        "question": "Explain transaction logs and their role in database forensics.",
        "answer": "**Transaction log** DBMS ka wo journal hai jo har change ka record rakhta hai — insert, update, delete, DDL — usually **before-image aur after-image** ke saath.\n\n**Types:**\n- **MySQL:** binary log (committed statements), InnoDB redo log (crash recovery), undo log (rollback).\n- **SQL Server:** transaction log `.ldf`, log records + LSN, `fn_dblog`.\n- **Oracle:** redo log + archive log (LogMiner).\n- **PostgreSQL:** WAL segments (`pg_waldump`).\n\n**Role in forensics:**\n1. **Exact modification:** kaunsa row, kaunsa column, purani/nayi value.\n2. **Timing:** LSN/position + timestamp se change ka exact time.\n3. **Attribution:** log record + audit/session logs se user/IP.\n4. **Recovery:** deleted/overwritten row ko replay se staging DB mein wapas laana.\n5. **Point-in-time:** `--stop-datetime` se incident se pehle ka state.\n6. **Rollback/malicious detection:** uncommitted/dropped table ka evidence.\n7. **Tamper detection:** log gaps ya sequence break.\n\n**Limitations:** log retention short ho sakta hai, rotation/backup se purane segments gayab, encryption/compressed logs, aur direct production access risky.\n\n**Best practice:** log shipping + long retention + centralised audit + hash of log files.\n\n**Diagram:** Refer to the Database forensics — logs se proof tak diagram."
      },
      {
        "question": "How would you investigate a suspected insider data theft from a database?",
        "answer": "Insider theft ka case **DB + app + OS** teeno layers se solve hota hai.\n\n**1. Scope & authority**\n- HR/legal se authorisation, suspect accounts aur time window note karo.\n\n**2. Preserve**\n- DB backup + binlog/WAL/audit export (hash ke saath), app logs, VPN log.\n- Production par read-only access; ek forensic instance banao.\n\n**3. DB analysis**\n- `mysqlbinlog` / `fn_dblog` / `LogMiner` — suspect window ke **SELECT/EXPORT** operations.\n- Audit trail: kisne kaun si table dekhi, kitni rows, kis client IP se.\n- `information_schema`/`pg_stat_statements` se heavy export queries.\n\n**4. Application analysis**\n- App/ORM logs se user ID ↔ query mapping; admin panel actions; API token usage.\n- Session IDs, device fingerprint, geo-IP.\n\n**5. Host/OS analysis**\n- Suspect machine: browser history, USB history, cloud-sync logs, prefetch, `$UsnJrnl`.\n- File copies, archive creation (`7z`, `rar`), outbound traffic volume.\n\n**6. Corroborate & quantify**\n- Kitne rows/users affected, kitna MB/GB nikla, kis destination par.\n- Timeline: login → query → export → transfer.\n\n**7. Report**\n- Findings + evidence appendix + 65B certificate + chain of custody; HR/legal action.\n\n**Warning signs:** off-hours access, bulk export, new export tool install, VPN from home, DLP alerts.\n\n**Diagram:** Refer to the Database forensics — logs se proof tak diagram."
      }
    ]
  },
  {
    "id": "preventive-forensics",
    "number": "3.7",
    "title": "Preventive Forensics",
    "subtitle": "Forensics-ready infrastructure — logs, retention, FIM, time sync",
    "icon": "shield",
    "accent": "#00e676",
    "englishDefinition": "Preventive forensics (also called proactive or forensic readiness) is the practice of designing and operating systems so that evidence is available, complete and trustworthy before an incident occurs. It turns forensic requirements into routine controls: centralised and synchronised logging with adequate retention and protection (write-once, WORM storage, log signing), NTP time synchronisation across all hosts, file integrity monitoring and baselining, endpoint telemetry and EDR, network flow and packet capture retention, database audit trails, memory-friendly configuration, cloud audit log export, and a documented forensic policy with legal hold and data-preservation clauses. Organisations also prepare a forensic toolkit, define who may collect evidence, run tabletop exercises, and pre-agree escalation with legal counsel. The goal is to reduce the cost and time of an investigation, avoid asking 'we do not have logs', keep evidence admissible, and satisfy compliance obligations such as PCI DSS 10, ISO/IEC 27001 A.8.15 and India's DPDP Act. Preventive forensics does not stop attacks, but it guarantees that when an attack happens the organisation can prove what happened - which is why forensic readiness and incident response are now planned together.",
    "intro": "**Preventive forensics** (forensic readiness) ka funda simple hai: attack ke baad log dhoondhna nahi padna chahiye — **pehle se ready** hona chahiye. Iske core controls: **centralised logging + retention**, **NTP time sync** (timeline ke liye sabse zaroori), **FIM/baselining**, **EDR telemetry**, **network flow/PCAP retention**, **DB audit**, aur **cloud audit log export**. Yaad rakho: bina time sync ke log correlate karna impossible hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Preventive forensics kya hai",
        "kicker": "Definition",
        "body": "**Forensic readiness** = proactive design jisse incident ke baad evidence **available, complete aur trustworthy** ho. Ye prevention nahi hai (attack rokna nahi), ye **preparedness** hai.",
        "body2": "Iska business case: investigation time kam, legal cost kam, compliance easy (PCI DSS 10, ISO 27001 A.8.15), aur court mein evidence strong.",
        "chips": [
          "central logging",
          "retention",
          "NTP",
          "FIM",
          "EDR",
          "WORM storage",
          "legal hold"
        ]
      },
      {
        "type": "cards",
        "title": "Core controls",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "server",
            "title": "Centralised logging",
            "body": "SIEM/syslog server par sab logs — local logs attacker delete kar sakta hai."
          },
          {
            "icon": "clock",
            "title": "Time synchronisation",
            "body": "NTP se sab hosts same clock — timeline correlation ka base."
          },
          {
            "icon": "shield",
            "title": "Log protection",
            "body": "WORM/immutable storage, log signing, separate network, access control."
          },
          {
            "icon": "file",
            "title": "File integrity monitoring",
            "body": "Tripwire/OSSEC/AIDE — critical files ka hash baseline aur alerts."
          },
          {
            "icon": "monitor",
            "title": "Endpoint telemetry",
            "body": "EDR/Sysmon process, network, registry events ka record."
          },
          {
            "icon": "network",
            "title": "Network evidence",
            "body": "NetFlow retention, selective PCAP, DNS logs, proxy logs."
          },
          {
            "icon": "database",
            "title": "Database audit",
            "body": "Native audit / pgaudit on — kisne kya query kiya."
          },
          {
            "icon": "globe",
            "title": "Cloud audit export",
            "body": "CloudTrail/Activity Log export to immutable bucket, 1+ year retention."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Log retention — practical baseline",
        "kicker": "Comparison",
        "columns": [
          "Log type",
          "Typical retention"
        ],
        "rows": [
          {
            "label": "Firewall/proxy",
            "values": [
              "6–12 months (90 days hot search)"
            ]
          },
          {
            "label": "Auth/VPN",
            "values": [
              "12 months"
            ]
          },
          {
            "label": "Web server access",
            "values": [
              "90 days–12 months"
            ]
          },
          {
            "label": "Database audit",
            "values": [
              "12 months (PCI: 1 year, 3 months hot)"
            ]
          },
          {
            "label": "EDR telemetry",
            "values": [
              "6–12 months"
            ]
          },
          {
            "label": "PCAP (selective)",
            "values": [
              "7–30 days"
            ]
          },
          {
            "label": "Cloud audit",
            "values": [
              "12 months+ immutable"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00e676",
          "#ff8800",
          "#aa00ff",
          "#5a6a9e",
          "#ffd600",
          "#00bcd4"
        ]
      },
      {
        "type": "points",
        "title": "Forensic readiness checklist",
        "kicker": "Checklist",
        "points": [
          "**Policy:** forensic policy, evidence handling SOP, legal hold clause, data preservation clause.",
          "**People:** trained first responders, jo volatile data preserve kar sakein; legal counsel pre-agreed.",
          "**Toolkit:** write blocker, imaging tool, RAM capture, hashing tool, evidence bags, labels.",
          "**Logging:** centralised + protected + NTP synced + retention defined.",
          "**Monitoring:** FIM, EDR, IDS, DLP alerts ka documented escalation.",
          "**Exercise:** tabletop + mock investigation har saal; timings measure karo.",
          "**Cloud:** audit log export, snapshot policy, jurisdiction clause in contract."
        ]
      },
      {
        "type": "example",
        "title": "Preventive forensics ne case kaise bachaya",
        "kicker": "Example",
        "body": "Company ne SIEM mein firewall + VPN + auth logs 1 saal retain kiye aur NTP enable kiya. Attack ke baad attacker ne server ke local logs delete kar diye — lekin SIEM copy safe thi. NTP ki wajah se teen alag sources ke timestamps milliseconds tak match hue, aur timeline ban gayi: VPN login 02:14 → SQLi 02:19 → data export 02:41. Bina readiness ke ye case 'logs nahi hain' par khatam ho jaata."
      },
      {
        "type": "comparison",
        "title": "Preventive forensics vs reactive forensics",
        "kicker": "Comparison",
        "columns": [
          "Preventive (proactive)",
          "Reactive (traditional)"
        ],
        "rows": [
          {
            "label": "Kab",
            "values": [
              "incident se pehle design",
              "incident ke baad investigation"
            ]
          },
          {
            "label": "Cost",
            "values": [
              "predictable, low per case",
              "high, uncertain"
            ]
          },
          {
            "label": "Evidence",
            "values": [
              "ready, complete, verified",
              "jo bacha ho wahi"
            ]
          },
          {
            "label": "Time to report",
            "values": [
              "hours–days",
              "weeks–months"
            ]
          },
          {
            "label": "Example",
            "values": [
              "SIEM, FIM, NTP, retention",
              "disk imaging, log hunting"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#ff5252"
        ]
      },
      {
        "type": "diagram",
        "title": "Preventive forensics — readiness architecture",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-preventive",
        "caption": "Hosts/network/cloud → central log + NTP + FIM + EDR → immutable store → ready evidence for investigation"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Preventive forensics:** incident se pehle evidence ready rakhna (forensic readiness).",
          "**Controls:** central logging, retention, NTP, FIM, EDR, NetFlow, DB audit, cloud audit export.",
          "**Log protection:** WORM/immutable, signing, separated network, access control.",
          "**Compliance:** PCI DSS 10, ISO 27001 A.8.15, DPDP Act.",
          "**Exam line:** bina time sync ke timeline nahi banti — NTP sabse under-rated control hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is preventive forensics? Explain its need and key controls.",
        "answer": "**Preventive forensics (forensic readiness):** proactively aisa setup banana ki incident hone par evidence turant, poora aur trustworthy mile.\n\n**Need:**\n1. Investigation time aur cost kam.\n2. Attacker local logs delete kare to bhi central copy safe.\n3. Timeline banane ke liye accurate timestamps.\n4. Court mein admissibility strong (complete + authentic).\n5. Compliance — PCI DSS 10, ISO/IEC 27001 A.8.15, DPDP Act.\n6. Business continuity — jaldi root cause, jaldi recovery.\n\n**Key controls:**\n\n| Control | Purpose |\n|---|---|\n| Centralised logging (SIEM) | local deletion se bachav |\n| NTP time sync | timeline correlation |\n| Log protection (WORM/signing) | tamper-proof evidence |\n| FIM (Tripwire/OSSEC/AIDE) | critical file change detection |\n| EDR/Sysmon | endpoint telemetry |\n| NetFlow + selective PCAP | network evidence |\n| DB audit (pgaudit etc.) | query-level record |\n| Cloud audit export | immutable, long retention |\n| Policy + toolkit + training | legal + operational readiness |\n\n**Outcome:** \"we have no logs\" situation khatam, fast and defensible investigation.\n\n**Diagram:** Refer to the Preventive forensics — readiness architecture diagram."
      },
      {
        "question": "Discuss log management for forensic readiness (collection, retention, protection, time sync).",
        "answer": "Logs forensic investigation ka **backbone** hain — par sirf logs hona kaafi nahi, unka management chahiye.\n\n**1. Collection**\n- Sab sources: firewall, proxy, IDS, VPN, AD/auth, web server, DB, cloud (CloudTrail), EDR.\n- **Centralised** SIEM/syslog — local logs attacker delete kar deta hai.\n- Structured format (JSON/CEF), consistent fields.\n\n**2. Time synchronisation**\n- Sab hosts **NTP** se sync; timezone UTC mein normalize.\n- Bina sync ke do logs ka correlation galat timeline deta hai.\n\n**3. Retention**\n- PCI DSS: 1 year total, last 3 months immediately available.\n- Practical: firewall/proxy 6–12 months, auth 12 months, DB audit 12 months, PCAP 7–30 days.\n- Rotation + archival + restore test.\n\n**4. Protection (integrity)**\n- **WORM/immutable** storage, log signing, hash chain.\n- Separate VLAN/account, least privilege, no delete rights for admins.\n- Offsite/second copy; encryption at rest.\n\n**5. Monitoring & alerting**\n- Correlation rules, anomaly detection, FIM alerts.\n- Clock drift, log gap aur log stop alerts.\n\n**6. Governance**\n- Logging policy, retention schedule, legal hold, access audit, GDPR/DPDP ke hisaab se PII masking.\n\n**Diagram:** Refer to the Preventive forensics — readiness architecture diagram."
      },
      {
        "question": "How does forensic readiness reduce investigation cost and improve admissibility?",
        "answer": "**Forensic readiness** = investigation se pehle hi evidence pipeline tayyar.\n\n**Cost reduction:**\n1. **No log hunting:** central SIEM se query minutes mein, na ki har host par manual search.\n2. **Less downtime:** fast RCA → jaldi recovery.\n3. **Fewer billable hours:** automation (Plaso, SIEM) se analyst time bachta hai.\n4. **No re-collection trips:** data preserved, dobara site visit nahi.\n5. **Lower legal cost:** pehli baar mein complete report.\n6. **Avoided fines:** compliance evidence ready (PCI/DPDP).\n\n**Admissibility improvement:**\n1. **Authenticity:** immutable logs + hash → tamper proof.\n2. **Completeness:** long retention → pura window, sirf partial nahi.\n3. **Reliability:** NTP synced, documented pipeline.\n4. **Chain of custody:** SOP + access logs se documented.\n5. **Section 65B:** regular-course-of-business proof easy (system consistently used).\n6. **Reproducibility:** same logs se doosra expert verify kar sakta hai.\n\n**Readiness vs cost table:**\n\n| Activity | Cost now | Cost later without it |\n|---|---|---|\n| SIEM + retention | medium | high (case fail) |\n| NTP | negligible | timeline unusable |\n| FIM/EDR | medium | detection miss |\n| Training/exercise | low | evidence destroyed |\n\n**Diagram:** Refer to the Preventive forensics — readiness architecture diagram."
      }
    ]
  },
  {
    "id": "anti-forensics-practices",
    "number": "3.8",
    "title": "Anti-Forensics Practices",
    "subtitle": "Attacker ki cleanup strategy — hiding, destroying, misleading",
    "icon": "bug",
    "accent": "#ff5252",
    "englishDefinition": "Anti-forensics is the set of techniques used by attackers (and sometimes by privacy-conscious users) to deny, delay or mislead forensic analysis by destroying, hiding or fabricating evidence. The main categories are data destruction (secure wipe of files or free space with sdelete, shred, cipher /w, DBAN; destroying media physically), data hiding (encryption and encrypted containers, steganography in images or audio, NTFS alternate data streams, hidden or unallocated partitions, slack space), trail obfuscation (log clearing and editing, timestomping, log injection of false entries, use of Tor/VPN/proxy chains, MAC address spoofing, anti-forensic tool usage), artefact alteration (registry value tampering, changing file extensions, code packing and obfuscation), and anti-analysis evasion (debugger and VM detection, sandbox evasion, rootkits that hide processes and files). From a defensive standpoint anti-forensics is detected through alternate log sources, filesystem journal artefacts, timestamp anomalies, hash baselines and behavioural analytics - and legally, wilful destruction of evidence is itself an offence and can attract adverse inference.",
    "intro": "**Anti-forensics** = attacker ki **cleanup aur dhokha** strategy — evidence ko **destroy, hide ya mislead** karna. Chaar categories yaad rakho: **data destruction** (wiping), **data hiding** (encryption, steganography, ADS), **trail obfuscation** (log clearing, timestomping, Tor/VPN), aur **anti-analysis** (packing, sandbox/VM detection). Exam mein har category ka ek example likhna zaroori hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Anti-forensics kya hai",
        "kicker": "Definition",
        "body": "**Anti-forensics** wo techniques hain jinse attacker ye ensure karta hai ki investigator ko **poora sach na mile** — data mita deta hai, chhupa deta hai, ya jhoothe traces chhod deta hai.",
        "body2": "Note: privacy tools (encryption, secure delete) legal bhi ho sakte hain — **intent** decide karta hai ki ye anti-forensics hai ya nahi. Court mein evidence destroy karna **adverse inference** de sakta hai.",
        "chips": [
          "data destruction",
          "data hiding",
          "trail obfuscation",
          "anti-analysis",
          "timestomping",
          "steganography"
        ]
      },
      {
        "type": "cards",
        "title": "Anti-forensics ki categories",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "warn",
            "title": "Data destruction",
            "body": "`sdelete`, `shred`, `cipher /w`, DBAN; disk physically destroy; crypto-erase (key delete)."
          },
          {
            "icon": "lock",
            "title": "Data hiding",
            "body": "Encryption/containers, steganography (image/audio), NTFS ADS, hidden partitions, slack space."
          },
          {
            "icon": "doc",
            "title": "Trail obfuscation",
            "body": "Log clear/edit (`wevtutil cl`), log injection, timestomping, Tor/VPN proxy chain, MAC spoofing."
          },
          {
            "icon": "code",
            "title": "Artifact alteration",
            "body": "Registry tamper, extension change, packing/obfuscation, base64/PowerShell encoded payload."
          },
          {
            "icon": "eye",
            "title": "Anti-analysis evasion",
            "body": "Debugger/VM/sandbox detection, rootkits hiding processes, delayed execution, sleep timers."
          },
          {
            "icon": "refresh",
            "title": "Living off the land",
            "body": "Built-in tools (`certutil`, `bitsadmin`, `wmic`) se trace kam karna."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Technique vs kya damage hota hai",
        "kicker": "Comparison",
        "columns": [
          "Technique",
          "Impact on evidence"
        ],
        "rows": [
          {
            "label": "Secure wipe",
            "values": [
              "file content + $MFT record gone (unrecoverable)"
            ]
          },
          {
            "label": "Log clearing",
            "values": [
              "timeline break; Event ID 1102 as proof"
            ]
          },
          {
            "label": "Timestomping",
            "values": [
              "MACB timestamps misleading; $STANDARD_INFORMATION vs $FILE_NAME mismatch"
            ]
          },
          {
            "label": "Encryption",
            "values": [
              "content unreadable without key"
            ]
          },
          {
            "label": "Steganography",
            "values": [
              "data image/audio ke andar chhupa"
            ]
          },
          {
            "label": "NTFS ADS",
            "values": [
              "file ke andar extra hidden stream"
            ]
          },
          {
            "label": "Rootkit",
            "values": [
              "process/file/registry live view se gayab"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#ff8800",
          "#00d4ff",
          "#aa00ff",
          "#00e676",
          "#5a6a9e",
          "#ffd600"
        ]
      },
      {
        "type": "example",
        "title": "Timestomping kaise pakda jaata hai (concept)",
        "kicker": "Example",
        "body": "Attacker ne malware file ka timestamp purana (2019) kar diya. NTFS mein do timestamp sets hote hain: `$STANDARD_INFORMATION` (user-modifiable) aur `$FILE_NAME` (kam modify hota hai). Dono mein mismatch, ya `$UsnJrnl` mein recent write record, ya `$MFT` entry ka sequence number — in teeno se pata chal jaata hai ki timestamp artificial hai. Isi tarah `Event ID 1102` (audit log cleared) khud ek evidence ban jaata hai."
      },
      {
        "type": "points",
        "title": "Exam ke liye 8 common practices",
        "kicker": "Practices",
        "points": [
          "**Secure deletion/wiping** — `sdelete -p 3`, `shred -u`, `cipher /w:C:`.",
          "**Log clearing** — `wevtutil cl Security`, `/var/log` truncate, SIEM par asar nahi.",
          "**Timestomping** — `timestomp`, PowerShell `Set-ItemProperty` se MACB badalna.",
          "**Encryption** — BitLocker/VeraCrypt/7z password, ransomware crypto-erase.",
          "**Steganography** — `steghide`, `OpenStego` se data image mein chhupana.",
          "**Alternate data streams** — `type secret > file.txt:hidden` (NTFS).",
          "**Packing/obfuscation** — UPX, custom crypter, PowerShell encoded command.",
          "**Anti-analysis** — VM/debugger detection, long sleep, rootkit hiding."
        ]
      },
      {
        "type": "diagram",
        "title": "Anti-forensics practices — 4 categories",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-antiforensics",
        "caption": "Destruction (wipe), Hiding (encryption/stego/ADS), Obfuscation (log clear/timestomp), Evasion (packing/VM detect)"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Anti-forensics:** evidence ko destroy, hide ya mislead karna.",
          "**Categories:** data destruction, data hiding, trail obfuscation, anti-analysis evasion.",
          "**Examples:** wipe, log clear, timestomping, encryption, steganography, ADS, packing, VM detection.",
          "**Impact:** timeline break, content loss, misleading artifacts.",
          "**Legal:** evidence destruction = offence + adverse inference.",
          "**Defence:** alternate logs, filesystem journals, hash baseline, behavioural detection."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is anti-forensics? Explain its techniques with examples.",
        "answer": "**Anti-forensics:** attacker ke wo techniques jo forensic evidence ko **destroy, hide ya mislead** karti hain.\n\n**1. Data destruction**\n- `sdelete -p 3`, `shred -u`, `cipher /w:C:`, DBAN.\n- Media physical destruction; crypto-erase (encryption key delete).\n\n**2. Data hiding**\n- **Encryption:** BitLocker, VeraCrypt, password-protected archives.\n- **Steganography:** `steghide`/`OpenStego` se data image/audio mein.\n- **NTFS alternate data streams:** `type secret > report.txt:hidden`.\n- Hidden/unallocated partitions, slack space.\n\n**3. Trail obfuscation**\n- **Log clearing:** `wevtutil cl Security` (Event ID 1102), `/var/log` truncate.\n- **Log injection:** false entries banana.\n- **Timestomping:** file MACB badalna.\n- **Anonymity:** Tor, VPN chains, proxy, MAC spoofing.\n\n**4. Artefact alteration**\n- Registry tampering, file extension change, packing (UPX), obfuscation, encoded PowerShell.\n\n**5. Anti-analysis evasion**\n- Debugger/VM/sandbox detection, long sleep, rootkit hiding.\n\n**6. Living off the land**\n- `certutil`, `bitsadmin`, `wmic` — legitimate tools se traces kam.\n\n**Note:** har technique ka ek counter-artifact hota hai (Event 1102, `$UsnJrnl`, `$LogFile`, hash baseline).\n\n**Diagram:** Refer to the Anti-forensics practices — 4 categories diagram."
      },
      {
        "question": "Explain timestomping and log clearing as anti-forensic techniques, and how they are detected.",
        "answer": "**Timestomping:** file ke timestamps (**M**odified, **A**ccessed, **C**hanged, **B**irth/created) jaan-boojh kar badalna — taaki malware purana ya innocent lage.\n\n- Tools: Metasploit `timestomp`, PowerShell `Set-ItemProperty`, custom C/C++ API (`SetFileTime`).\n- Red flag: file ka timestamp OS install ya malware compile date se **pehle** ka.\n\n**Detection:**\n1. **NTFS dual timestamps:** `$STANDARD_INFORMATION` (user-modifiable) vs `$FILE_NAME` (index entry) mismatch.\n2. **`$UsnJrnl`:** change journal mein recent write record — timestamp jhoota pakda jaata hai.\n3. **`$LogFile`:** transaction records se sequence anomaly.\n4. **MFT sequence number / entry order** vs timestamp.\n5. **Corroboration:** prefetch, shimcache, amcache, event logs agar timestamp ke baad ka execution dikhate hain.\n\n**Log clearing:** audit/event logs delete ya truncate karna — `wevtutil cl`, `Clear-EventLog`, `/var/log/messages` overwrite.\n\n**Detection:**\n1. **Windows Event ID 1102 / 104** — \"audit log was cleared\".\n2. **Log gap:** sequence number jump, missing time window.\n3. **Central SIEM copy** — local clear hone par bhi central logs intact.\n4. **File size/timestamp** of log file vs retention expectation.\n5. **Syslog forwarding failure alerts**, heartbeat missing.\n6. **`$UsnJrnl`/`$LogFile`** se log file deletion record.\n7. **WORM/immutable storage** — deletion impossible, attempt logged.\n\n**Legal angle:** evidence destruction = obstruction; court **adverse inference** le sakti hai (India: IT Act/BNS provisions).\n\n**Diagram:** Refer to the Anti-forensics practices — 4 categories diagram."
      },
      {
        "question": "How do data hiding techniques challenge forensics? Explain encryption, steganography and ADS.",
        "answer": "**Data hiding** evidence ko visible layer se hata deta hai — investigator ko \"kuch nahi mila\" feel hota hai.\n\n**1. Encryption**\n- Full disk (BitLocker/LUKS), container (VeraCrypt), archive (`7z -p`), ransomware crypto-erase.\n- Challenge: content unreadable; key RAM mein ya TPM sealed.\n- Counter: live memory capture (`aeskeyfind`, Volatility), key escrow, legal compulsion, weak password cracking (`hashcat`), hibernation/pagefile se key material.\n\n**2. Steganography**\n- Data ko image/audio/video ke LSB mein chhupana — `steghide`, `OpenStego`, `zsteg`.\n- Challenge: file normal dikhti hai, size/entropy hint deta hai.\n- Counter: **steganalysis** (chi-square, RS analysis, `zsteg`), entropy aur LSB pattern check, known-carrier comparison, file size anomaly.\n\n**3. NTFS Alternate Data Streams (ADS)**\n- `file.txt:hidden` — main file ka content same, extra stream chhupa.\n- Challenge: normal `dir`/Explorer mein nahi dikhta.\n- Counter: `dir /r`, PowerShell `Get-Item -Stream *`, `streams.exe`, forensic tools (Autopsy, FTK) — MFT mein ADS entry milti hai.\n\n**4. Other hiding places**\n- Slack space, hidden/unallocated partitions, volume shadow copies, bad clusters, registry hives, `$MFT` resident data.\n\n**Investigator ka rule:** \"absence of evidence ≠ evidence of absence\" — hidden container ke liye full image + entropy analysis + memory artefact chahiye.\n\n**Diagram:** Refer to the Anti-forensics practices — 4 categories diagram."
      }
    ]
  },
  {
    "id": "anti-forensics-detection",
    "number": "3.9",
    "title": "Anti-Forensics Detection Techniques",
    "subtitle": "Alternate sources, journals, anomalies aur behaviour analytics",
    "icon": "eye",
    "accent": "#00bcd4",
    "englishDefinition": "Detecting anti-forensics means proving that evidence was deliberately removed, altered or fabricated. Investigators rely on four strategies. First, correlation with independent sources: central SIEM or syslog copies, network flow and DNS records, proxy and WAF logs, cloud audit logs, IDS alerts, EDR telemetry, and backups or volume shadow copies that the attacker did not know about. Second, filesystem and OS journal artefacts: the NTFS MFT (including $STANDARD_INFORMATION versus $FILE_NAME timestamps), $LogFile, $UsnJrnl change journal, $Bitmap and $Secure, EXT4 journal and inode deletion times, prefetch/shimcache/amcache execution evidence, and Event IDs such as 1102 for log clearing. Third, statistical and anomaly analysis: timeline gaps, clock skew, unusual process lineage, file entropy for encrypted or packed content, deleted-but-referenced files, mismatched hashes against a known-good baseline, and steganalysis for hidden payloads. Fourth, behavioural and tool-mark analysis: artefacts of known wiping, timestomping and packing tools (toolmarks), YARA and IOC matching, and memory analysis to find hidden processes that a rootkit removed from the live view. Every finding is documented as a counter-evidence chain so that the attempt itself becomes part of the case, and legal provisions on destruction of evidence reinforce the finding.",
    "intro": "Anti-forensics ko pakadna = **'evidence gayab hai' ko 'evidence mitaya gaya hai' sabit karna**. Chaar strategies: (1) **independent sources** (SIEM, NetFlow, proxy, cloud audit) se correlation; (2) **filesystem journals** ($MFT, $UsnJrnl, $LogFile, ext4 journal); (3) **anomaly/statistics** (timeline gap, clock skew, entropy); (4) **toolmarks + YARA + memory analysis**. Event ID **1102** aur `$STANDARD_INFORMATION` vs `$FILE_NAME` mismatch — ye do exam favourites hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Detection ka approach",
        "kicker": "Approach",
        "body": "Anti-forensics detection ka core principle: **attacker ek jagah chhupata hai, doosri jagah reh jaata hai**. Isliye akele log par bharosa nahi — **independent sources cross-check** karte hain, aur **artefact ke andar ke artefact** dekhte hain.",
        "body2": "Do sawaal poocho: (1) kya kuch **missing** hai jo hona chahiye tha? (2) kya kuch **mila** hai jo natural nahi lagta? Dono ke jawab hi detection hain.",
        "chips": [
          "corroboration",
          "$UsnJrnl",
          "timeline gap",
          "entropy",
          "toolmark",
          "YARA",
          "memory analysis"
        ]
      },
      {
        "type": "cards",
        "title": "Detection techniques",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "server",
            "title": "Independent log sources",
            "body": "SIEM/syslog copy, proxy, WAF, IDS, VPN, cloud audit — attacker ke control se bahar."
          },
          {
            "icon": "file",
            "title": "NTFS journal artefacts",
            "body": "`$MFT`, `$LogFile`, `$UsnJrnl`, `$Bitmap` — deleted/altered records yahin bachte hain."
          },
          {
            "icon": "clock",
            "title": "Timeline anomaly",
            "body": "Gaps, duplicate timestamps, clock skew, created > modified, future dates."
          },
          {
            "icon": "chart",
            "title": "Entropy analysis",
            "body": "Encrypted/packed/stego content ka high entropy — file type se mismatch."
          },
          {
            "icon": "search",
            "title": "Hash & baseline",
            "body": "Known-good baseline se file hash compare; imphash/ssdeep similarity."
          },
          {
            "icon": "bug",
            "title": "Toolmarks",
            "body": "Wiper, timestomper, packer (UPX) aur scanner ke known artefacts."
          },
          {
            "icon": "layers",
            "title": "Memory vs disk",
            "body": "Rootkit live view se process chhupata hai — Volatility `pslist`/`psscan` diff."
          },
          {
            "icon": "target",
            "title": "Behavioural analytics",
            "body": "EDR/SIEM correlation rules, process lineage, unusual parent-child."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Anti-forensic action vs detection signal",
        "kicker": "Comparison",
        "columns": [
          "Action",
          "Detection signal"
        ],
        "rows": [
          {
            "label": "Log cleared",
            "values": [
              "Event 1102/104, log gap, SIEM copy intact"
            ]
          },
          {
            "label": "Timestomped file",
            "values": [
              "$SI vs $FILE_NAME mismatch, $UsnJrnl recent write"
            ]
          },
          {
            "label": "Secure wipe",
            "values": [
              "$MFT record deleted, `$UsnJrnl` delete event, entropy clean"
            ]
          },
          {
            "label": "Encryption/container",
            "values": [
              "high entropy, key in RAM, pagefile/hiberfil"
            ]
          },
          {
            "label": "Steganography",
            "values": [
              "LSB/chi-square anomaly, size mismatch, `zsteg` hit"
            ]
          },
          {
            "label": "Rootkit",
            "values": [
              "`pslist` vs `psscan` diff, SSDT hook, hidden driver"
            ]
          },
          {
            "label": "Packed malware",
            "values": [
              "UPX section names, high entropy, small import table"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#ff8800",
          "#00d4ff",
          "#aa00ff",
          "#00e676",
          "#5a6a9e",
          "#ffd600"
        ]
      },
      {
        "type": "points",
        "title": "Practical detection playbook",
        "kicker": "Playbook",
        "points": [
          "**Preserve first:** RAM dump lo, phir disk image — kyunki anti-forensics live system par bhi chal raha ho sakta hai.",
          "**Multi-source timeline:** Plaso/log2timeline + SIEM + `$UsnJrnl` se super-timeline banao.",
          "**Gap analysis:** har source mein expected interval check karo (missing minutes = red flag).",
          "**Entropy scan:** `binwalk -E`, `ent` — unexpected encrypted blobs dhoondo.",
          "**Toolmark signature:** YARA rules (wiper, timestomping tool, UPX) se scan.",
          "**Memory diff:** Volatility `pslist` vs `psscan`, `netscan`, `malfind`.",
          "**Hash baseline:** critical files ka known-good hash se compare (`tripwire`, `AIDE` reports).",
          "**Document the negative:** 'log missing tha' bhi finding hai — 65B report mein likho."
        ]
      },
      {
        "type": "example",
        "title": "Case: log cleared, phir bhi case bana",
        "kicker": "Example",
        "body": "Server par Security log clear mila (Event 1102, 02:47). Local logs gayab — par (1) **SIEM** mein auth events 02:31–02:46 safe, (2) `$UsnJrnl` mein `wevtutil.exe` ka write record, (3) prefetch mein `wevtutil.exe` execution, (4) firewall log mein 02:52 ka outbound 1.2 GB. Chaar independent sources ne log clearing ko **attack ka hissa** sabit kar diya — defence ka 'logs hi nahi the' argument fail."
      },
      {
        "type": "diagram",
        "title": "Anti-forensics detection — sources aur signals",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-afdetect",
        "caption": "Anti-forensic action → independent logs, $MFT/$UsnJrnl, anomaly analytics, toolmarks, memory diff → counter-evidence"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Goal:** prove karna ki evidence jaan-boojh kar mitaya/badla gaya.",
          "**Sources:** SIEM, proxy/WAF/IDS, cloud audit, backups, shadow copies.",
          "**Journals:** `$MFT`, `$LogFile`, `$UsnJrnl`, `$Bitmap`, ext4 journal, prefetch/shimcache.",
          "**Anomalies:** timeline gap, clock skew, entropy, hash mismatch.",
          "**Toolmarks + YARA + memory diff** se tool aur malware identify karo.",
          "**Event ID 1102** = log cleared; `$SI` vs `$FILE_NAME` mismatch = timestomping."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain anti-forensics detection techniques in detail.",
        "answer": "Anti-forensics detection ka objective: evidence ka **deliberate removal/alteration** prove karna.\n\n**1. Independent source correlation**\n- Central SIEM/syslog, proxy, WAF, IDS, VPN, DNS, cloud audit (CloudTrail), EDR.\n- Attacker local logs delete karta hai, central copy nahi.\n\n**2. Filesystem journal artefacts**\n- **`$MFT`** — deleted entries, `$STANDARD_INFORMATION` vs `$FILE_NAME` mismatch.\n- **`$UsnJrnl`** — file create/write/delete ka change journal.\n- **`$LogFile`** — transaction records, sequence anomaly.\n- **`$Bitmap`** — allocated vs claimed mismatch.\n- EXT4 journal, inode deletion time, volume shadow copies.\n\n**3. Timeline & statistical anomaly**\n- Log gaps, duplicate/future timestamps, clock skew, created > modified.\n- Super-timeline (`log2timeline/Plaso`) se cross-source gaps.\n\n**4. Entropy & content analysis**\n- `binwalk -E`/`ent` — encrypted/packed/stego blob detect (`zsteg` for LSB).\n\n**5. Hash & baseline**\n- Known-good hashes (Tripwire/AIDE), imphash, `ssdeep` similarity.\n\n**6. Toolmarks & signature**\n- Wiper/timestomper/packer ke known artifacts, YARA rules, VirusTotal.\n\n**7. Memory analysis**\n- Volatility `pslist` vs `psscan`, `netscan`, `malfind` — rootkit ke chhupe process.\n\n**8. Behavioural analytics**\n- EDR process lineage, SIEM correlation, UEBA anomaly.\n\n**9. Documentation**\n- Negative finding bhi evidence: \"expected log absent, Event 1102 present\".\n\n**Diagram:** Refer to the Anti-forensics detection — sources aur signals diagram."
      },
      {
        "question": "How is timestomping and log tampering detected using NTFS artefacts?",
        "answer": "NTFS har file ke liye **do timestamp sets** rakhta hai — yahi timestomping pakadne ki chaabi hai.\n\n**A. Timestomping detection**\n1. **`$STANDARD_INFORMATION` (in $MFT)** — user-mode API (`SetFileTime`) se badal jaata hai.\n2. **`$FILE_NAME` (index entry)** — kernel level, badalna mushkil; mismatch = tampering.\n3. **`$UsnJrnl`** — recent write/rename record; agar file \"2019 ki\" dikhti hai par USN mein kal ka write hai → fake.\n4. **`$LogFile`** — transaction record sequence se actual change time.\n5. **Collateral:** prefetch/shimcache/amcache/event logs execution ka recent time dikhate hain.\n6. **Logical check:** created/accessed/modified ka nonsensical order, future date, ya OS install se pehle ka date.\n\n**B. Log tampering detection**\n1. **Event ID 1102** (\"audit log was cleared\") / **104**.\n2. **Log gap** — sequence number jump, missing minute window.\n3. **`$UsnJrnl`/`$LogFile`** — `.evtx` file ka delete/write record.\n4. **Prefetch** — `wevtutil.exe` execution ka proof.\n5. **Central SIEM copy** — local clear ke bawajood events available.\n6. **File size/timestamp** expectation se mismatch; syslog forwarder gap alerts.\n7. **WORM storage** — delete attempt logged, content immutable.\n\n**Impact:** tampering khud ek offence hai aur court **adverse inference** le sakti hai; report mein ise alag finding likho.\n\n**Diagram:** Refer to the Anti-forensics detection — sources aur signals diagram."
      },
      {
        "question": "What is the role of memory forensics and behaviour analytics in detecting anti-forensics?",
        "answer": "Anti-forensics often **live system** par hota hai (rootkit, process hiding, key wiping) — wahan memory aur behaviour data decisive hota hai.\n\n**A. Memory forensics**\n1. **Hidden processes:** `pslist` (linked list) vs `psscan` (pool scan) diff — rootkit DKOM.\n2. **Injected code:** `malfind` — RWX memory, no backing file.\n3. **Network:** `netscan` — hidden C2 connections.\n4. **Encryption keys:** `aeskeyfind`/bitlocker plugins — encryption ke bawajood evidence.\n5. **Handles/registry:** `handles`, `hivelist` — deleted files ya keys ka trace.\n6. **Timeline:** process start times se actual execution sequence.\n7. **Anti-analysis detection:** VM artifacts (`vmware`, `vbox` strings), debugger presence.\n\n**B. Behaviour analytics**\n1. **Process lineage:** `winword.exe → powershell.exe` jaisa unusual parent-child.\n2. **Rare process score:** EDR/SIEM se first-seen binaries.\n3. **Command-line patterns:** `wevtutil cl`, `sdelete`, `vssadmin delete shadows`, `bcdedit`.\n4. **Volume anomaly:** sudden bulk file delete/encrypt (ransomware) ya archive + upload.\n5. **Login anomaly:** impossible travel, off-hours access, MFA failures then success.\n6. **UEBA:** user baseline vs current behaviour (bulk download, new tool install).\n\n**Combined value:** memory se \"kya chal raha tha\", analytics se \"kya unusual tha\" — dono milkar anti-forensics ko intent ke saath prove karte hain.\n\n**Diagram:** Refer to the Anti-forensics detection — sources aur signals diagram."
      }
    ]
  },
  {
    "id": "network-forensics-tools",
    "number": "3.10",
    "title": "Network Forensics Analysis Tools",
    "subtitle": "Packet, flow aur log analysis — attacker ki network journey",
    "icon": "network",
    "accent": "#aa00ff",
    "englishDefinition": "Network forensics analysis tools capture, store and interpret network traffic and its metadata to reconstruct what happened on a network. They fall into four groups. Packet capture and analysis: tcpdump and dumpcap for capture, Wireshark, tshark and NetworkMiner for deep inspection and reconstruction; flow analysis: NetFlow/IPFIX/sFlow collectors such as nfdump, SiLK and ElastiFlow for who talked to whom and how much; intrusion and metadata detection: Zeek (formerly Bro) with protocol logs, Snort/Suricata IDS alerts, DNS and TLS fingerprinting; and large-scale or platform tools: Arkime (Moloch), ntopng, Security Onion and commercial Network Forensic Analysis Tools used by law enforcement. Investigators use them for protocol statistics, conversation and endpoint views, stream reassembly, file carving from HTTP/SMB, TLS metadata with SNI and certificate analysis, DNS tunnelling and beaconing detection, PCAP hashing for integrity and rolling-buffer capture with ring files for retention. Practical constraints are encryption, storage volume, packet loss and privacy, which is why flow records, selective capture and metadata-first triage are preferred on high-speed links.",
    "intro": "Network forensics tools = **packet, flow aur log** ka analysis. Exam ke liye groups yaad rakho: **capture** (tcpdump, dumpcap), **deep analysis** (Wireshark, tshark, NetworkMiner), **flow** (NetFlow, nfdump, SiLK), **metadata/IDS** (Zeek, Snort/Suricata), aur **platform** (Arkime, Security Onion). Encryption ki wajah se aaj **metadata-first** approach chalti hai — SNI, DNS, flow size, timing.",
    "sections": [
      {
        "type": "definition",
        "title": "Tool categories",
        "kicker": "Overview",
        "body": "Network forensic tool ka kaam: traffic **capture** karna, **store** karna, aur usse **evidence** banana (kisi ne kis se baat ki, kaunsa file transfer hua, kaunsa attack pattern tha).",
        "body2": "Aaj **TLS** ke kaaran content mostly encrypted hai — isliye tools **metadata** (IP, port, SNI, certificate, flow volume, timing, DNS) par focus karte hain.",
        "chips": [
          "PCAP",
          "NetFlow",
          "Zeek logs",
          "PCAP hash",
          "ring buffer",
          "SNI"
        ]
      },
      {
        "type": "cards",
        "title": "Tools aur unka role",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "arrow",
            "title": "tcpdump / dumpcap",
            "body": "CLI packet capture, BPF filters, ring buffer files — long-term capture ka base."
          },
          {
            "icon": "network",
            "title": "Wireshark / tshark",
            "body": "GUI/CLI deep packet analysis, follow TCP stream, protocol decode, export objects."
          },
          {
            "icon": "file",
            "title": "NetworkMiner",
            "body": "Passive parsing — hosts, credentials, files, images reassemble karta hai."
          },
          {
            "icon": "chart",
            "title": "NetFlow / IPFIX / sFlow",
            "body": "Flow records — who, when, how much (header only, scale-friendly)."
          },
          {
            "icon": "server",
            "title": "Zeek (Bro)",
            "body": "Protocol-level logs (conn, http, dns, ssl, files) — searchable evidence."
          },
          {
            "icon": "alert",
            "title": "Snort / Suricata",
            "body": "Signature + anomaly IDS alerts, PCAP logging ke saath."
          },
          {
            "icon": "warehouse",
            "title": "Arkime / ntopng",
            "body": "Large-scale indexed PCAP search, session views, dashboards."
          },
          {
            "icon": "shield",
            "title": "Security Onion",
            "body": "Open-source platform — Zeek + Suricata + Elastic, full NSM stack."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Capture types",
        "kicker": "Comparison",
        "columns": [
          "Full PCAP",
          "Flow records",
          "Metadata logs"
        ],
        "rows": [
          {
            "label": "Kya",
            "values": [
              "poora payload",
              "headers summary",
              "protocol events (Zeek)"
            ]
          },
          {
            "label": "Storage",
            "values": [
              "bahut zyada (GB/hr)",
              "kam (MB/hr)",
              "medium"
            ]
          },
          {
            "label": "Content",
            "values": [
              "TLS ke baad nahi",
              "nahi",
              "sirf metadata"
            ]
          },
          {
            "label": "Use",
            "values": [
              "deep analysis, file carving",
              "trend, sweep, exfil volume",
              "searchable evidence"
            ]
          },
          {
            "label": "Tools",
            "values": [
              "tcpdump, Wireshark, Arkime",
              "nfdump, SiLK, ElastiFlow",
              "Zeek, Suricata"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff",
          "#00e676"
        ]
      },
      {
        "type": "points",
        "title": "Practical workflow",
        "kicker": "Workflow",
        "points": [
          "**Define scope + filters:** BPF (`host`, `port`, `net`) — poora traffic capture karna feasible nahi.",
          "**Capture with ring buffer:** `tcpdump -G 3600 -W 24 -w cap-%H.pcap` — retention ke liye.",
          "**Hash karo:** `sha256sum` PCAP ka — integrity evidence ke liye.",
          "**Triage:** flow records se suspicious host pair identify, phir targeted PCAP.",
          "**Deep dive:** Wireshark filters (`http.request`, `dns.qry.name`, `tls.handshake.extensions_server_name`).",
          "**Reassemble:** HTTP/SMB file export, `Export Objects` se malware dropper nikalo.",
          "**Correlate:** Zeek `conn.log`/`ssl.log` + DNS log + firewall logs ke saath timestamp align.",
          "**Report:** IOC list (IP, domain, JA3, user-agent), timeline, evidence hash."
        ]
      },
      {
        "type": "example",
        "title": "Beaconing detect karna (flow data)",
        "kicker": "Example",
        "body": "Malware har 60 second par C2 ko chhota packet bhejta hai. Flow records mein dikhta hai: same destination IP/port, **regular interval** (~60s ±2s), constant **small bytes** (300–600 B), aur periodic DNS query. Wireshark/Zeek se confirm: TLS SNI unusual domain, self-signed certificate, JA3 fingerprint known-bad. Ye pattern — regular interval + small size — beaconing ka classic signature hai."
      },
      {
        "type": "comparison",
        "title": "Wireshark vs tcpdump vs Zeek",
        "kicker": "Comparison",
        "columns": [
          "Wireshark",
          "tcpdump",
          "Zeek"
        ],
        "rows": [
          {
            "label": "Interface",
            "values": [
              "GUI",
              "CLI",
              "CLI/service"
            ]
          },
          {
            "label": "Strength",
            "values": [
              "deep decode + filters",
              "lightweight capture",
              "structured logs"
            ]
          },
          {
            "label": "Scale",
            "values": [
              "medium",
              "high (capture only)",
              "high"
            ]
          },
          {
            "label": "Output",
            "values": [
              "PCAP analysis",
              "PCAP file",
              "conn/http/dns/ssl logs"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "investigation, demo",
              "server par capture",
              "SIEM feeding, hunting"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff",
          "#00e676"
        ]
      },
      {
        "type": "diagram",
        "title": "Network forensics toolchain",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-netools",
        "caption": "Capture (tcpdump/dumpcap) → store + hash → decode (Wireshark/Zeek) → flow & IDS → correlate → IOC report"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Groups:** capture, deep analysis, flow, metadata/IDS, platform.",
          "**Tools:** tcpdump, Wireshark/tshark, NetworkMiner, nfdump/SiLK, Zeek, Snort/Suricata, Arkime, Security Onion.",
          "**Capture types:** full PCAP vs flow records vs metadata logs.",
          "**Encryption:** content nahi milega — SNI, DNS, certificate, JA3, flow size/timing use karo.",
          "**Workflow:** filter → ring buffer capture → hash → triage → deep dive → correlate → IOC."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the types of network forensics analysis tools with examples.",
        "answer": "Network forensics tools traffic ko capture, store aur interpret karte hain.\n\n**1. Packet capture tools**\n- **tcpdump/dumpcap:** CLI capture, BPF filters, ring buffer (`-G`, `-W`).\n- **Wireshark/tshark:** deep decode, display filters, follow stream, export objects.\n- **NetworkMiner:** passive host/credential/file reassembly.\n\n**2. Flow analysis tools**\n- **NetFlow/IPFIX/sFlow** exporters + collectors (**nfdump**, **SiLK**, **ElastiFlow**).\n- Header-level: source/destination, port, bytes, packets, duration.\n\n**3. Metadata / protocol log tools**\n- **Zeek:** `conn.log`, `http.log`, `dns.log`, `ssl.log`, `files.log`.\n- **Snort/Suricata:** IDS alerts + PCAP logging.\n\n**4. Platform / large-scale tools**\n- **Arkime (Moloch)** — indexed PCAP search.\n- **ntopng** — traffic monitoring.\n- **Security Onion** — Zeek + Suricata + Elastic stack.\n- Commercial NFAT (law enforcement): NetWitness, Solera, Niksun.\n\n**5. Supporting tools**\n- `capinfos`, `editcap`, `mergecap`, `tcpreplay`, `sha256sum` (hash), `dpkt`/Scapy (custom parsing).\n\n| Tool | Best for |\n|---|---|\n| tcpdump | server-side capture |\n| Wireshark | investigation |\n| Zeek | searchable logs |\n| nfdump | flow triage |\n| Arkime | huge PCAP search |\n\n**Diagram:** Refer to the Network forensics toolchain diagram."
      },
      {
        "question": "Describe the network forensics investigation process using these tools.",
        "answer": "**Step 1 — Preparation**\n- Capture points (SPAN/TAP), storage, retention, legal authorisation.\n- Baseline: normal traffic profile, asset inventory.\n\n**Step 2 — Detection & triage**\n- IDS alert (Snort/Suricata), SIEM correlation, flow anomaly (nfdump top talkers).\n- Suspicious: unusual geo-IP, new domain, high upload, regular beaconing.\n\n**Step 3 — Capture**\n- Targeted BPF filter: `tcpdump -i eth0 -s 0 -w case.pcap 'host 10.0.4.7 and not port 22'`.\n- **Hash** PCAP (`sha256sum`) aur chain of custody note karo.\n\n**Step 4 — Analysis**\n- **Wireshark filters:** `http.request`, `dns.qry.name`, `tls.handshake.extensions_server_name`, `ip.addr==`.\n- **Statistics:** conversations, endpoints, protocol hierarchy, IO graph.\n- **Reassembly:** HTTP/SMB objects export → dropper/ransom note.\n\n**Step 5 — Protocol specifics**\n- **DNS tunnelling:** long random subdomains, TXT/NULL records, high query rate.\n- **TLS:** SNI, certificate issuer, **JA3/JA3S** fingerprint, self-signed.\n- **SMB/RDP:** lateral movement, NTLM auth failures.\n\n**Step 6 — Correlation**\n- Zeek logs + flow + firewall/proxy + host logs ka timeline; attacker ka network journey.\n\n**Step 7 — Reporting**\n- IOC list (IP, domain, URL, JA3, user-agent, hash), timeline, evidence hashes, 65B.\n\n**Constraints:** encryption, capture loss (`capinfos` drop count), storage cost, privacy.\n\n**Diagram:** Refer to the Network forensics toolchain diagram."
      },
      {
        "question": "How do you detect DNS tunnelling and data exfiltration from network evidence?",
        "answer": "**DNS tunnelling:** data ko DNS queries/responses mein chhupa kar bhejna (port 53 usually allowed hota hai).\n\n**Detection signals:**\n1. **Long, high-entropy subdomains** — `aGVsbG8gd29ybGQ.evil.com`.\n2. **High query volume** to one domain from one host.\n3. **Unusual record types** — TXT, NULL, CNAME chains, AAAA abuse.\n4. **Response size anomaly** — bade TXT payloads.\n5. **Zeek `dns.log`** — `qtype_name`, `query_length`, `rcode`; `unique` domain count.\n6. **Beacon interval** — regular timing.\n7. **Domain reputation** — newly registered, DGAs (random names), low TTL.\n\n**Data exfiltration detection (general):**\n- **Flow volume:** outbound >> baseline (`nfdump` top talkers by bytes).\n- **Off-hours transfers** to unusual geo-IP.\n- **Protocol misuse:** HTTP POST to raw IP, FTP/SCP to unknown host, ICMP payloads, DNS as above.\n- **Stream analysis:** large multipart uploads, archive files (`PK`, `Rar!`) in HTTP.\n- **TLS metadata:** big outbound TLS sessions, unknown SNI/JA3.\n- **Correlation:** EDR file-read burst + network upload + cloud-sync log.\n\n**Tools:** Zeek (`dns.log`, `conn.log`, `files.log`), Suricata DNS rules, `tshark` filters, `passivedns`, Arkime.\n\n**Response:** block domain/IP, sinkhole, capture more PCAP, preserve evidence, quantify data volume.\n\n**Diagram:** Refer to the Network forensics toolchain diagram."
      }
    ]
  },
  {
    "id": "malware-types",
    "number": "3.11",
    "title": "Malware Forensics — Malware Types",
    "subtitle": "Virus se ransomware tak — behaviour aur artifacts",
    "icon": "virus",
    "accent": "#ff5252",
    "englishDefinition": "Malware is any software written with a malicious intent. For forensic purposes it is classified by behaviour and propagation: viruses that infect executable or document files and need a host and user action; worms that self-propagate across networks without user action (WannaCry, Conficker); trojans that disguise themselves as useful software and usually carry a backdoor; ransomware that encrypts data and demands payment (with double-extortion variants that also steal data); spyware and keyloggers that steal credentials and activity; rootkits and bootkits that hide themselves and other malware using kernel hooks; botnets that recruit hosts for remote command and control used in DDoS and spam; adware and potentially unwanted programs; fileless malware that runs in memory through PowerShell, WMI and registry; logic bombs and time bombs triggered by conditions; and advanced persistent threats that combine multiple stages. Malware forensics identifies the family from static and behavioural artifacts - process trees, persistence keys, network beacons, dropped files, hashes, encryption note extensions - and then maps the family to its typical indicators of compromise.",
    "intro": "**Malware** = malicious software. Forensic view se classification **behaviour aur propagation** par hoti hai: virus (host chahiye), worm (khud failta hai), trojan (disguise + backdoor), ransomware (encrypt + extort), spyware/keylogger, rootkit (chhupata hai), botnet (C2 + DDoS), fileless (memory/PowerShell), logic bomb, aur APT (multi-stage). Har type ka **artifact signature** alag hota hai — exam mein table bana kar likho.",
    "sections": [
      {
        "type": "definition",
        "title": "Malware kya hai",
        "kicker": "Definition",
        "body": "**Malware** wo software hai jo system ko nuksan pahunchane, data churane ya control lene ke liye banaya gaya ho. Forensic investigation mein pehla sawaal: **kaunsa family, kaunsa behaviour, kaunse artifacts?**",
        "body2": "Family identify hone par uske known **IOC** (hash, domain, registry key, mutex) se poore network par hunting ho jaati hai — yehi malware forensics ka business value hai.",
        "chips": [
          "virus",
          "worm",
          "trojan",
          "ransomware",
          "rootkit",
          "botnet",
          "fileless",
          "IOC"
        ]
      },
      {
        "type": "cards",
        "title": "Malware ke types",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "virus",
            "title": "Virus",
            "body": "Host file/document mein chipakta hai, user action se chalta hai (macro virus, boot sector virus)."
          },
          {
            "icon": "network",
            "title": "Worm",
            "body": "Khud network par failta hai — exploit + lateral movement (WannaCry, Conficker)."
          },
          {
            "icon": "eye",
            "title": "Trojan",
            "body": "Useful software ka disguise; andar backdoor/RAT — user khud install karta hai."
          },
          {
            "icon": "lock",
            "title": "Ransomware",
            "body": "Files encrypt + ransom note; double extortion mein data pehle chura liya jaata hai."
          },
          {
            "icon": "search",
            "title": "Spyware & keylogger",
            "body": "Keystrokes, screenshots, credentials, browsing — data chori."
          },
          {
            "icon": "layers",
            "title": "Rootkit / bootkit",
            "body": "Kernel/boot level par chhup jaata hai; processes aur files hide karta hai."
          },
          {
            "icon": "grid",
            "title": "Botnet",
            "body": "Compromised hosts ka network — C2 se commands, DDoS/spam/proxy."
          },
          {
            "icon": "zap",
            "title": "Fileless malware",
            "body": "Disk par file nahi — PowerShell, WMI, registry, memory mein rehta hai."
          },
          {
            "icon": "clock",
            "title": "Logic/time bomb",
            "body": "Condition ya date par trigger — dormant rehta hai."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Types vs behaviour vs forensic artifact",
        "kicker": "Comparison",
        "columns": [
          "Type",
          "Behaviour",
          "Artifact"
        ],
        "rows": [
          {
            "label": "Virus",
            "values": [
              "file infect, user action",
              "infected file hash, `$MFT` change"
            ]
          },
          {
            "label": "Worm",
            "values": [
              "self-propagate (SMB/RDP)",
              "scan traffic, 445/3389 spikes"
            ]
          },
          {
            "label": "Trojan",
            "values": [
              "disguise + backdoor",
              "unsigned exe in temp, autorun key"
            ]
          },
          {
            "label": "Ransomware",
            "values": [
              "mass encrypt + note",
              "`.locked` extension, `vssadmin delete`"
            ]
          },
          {
            "label": "Spyware/keylogger",
            "values": [
              "capture + exfil",
              "hidden process, HTTP POST beacons"
            ]
          },
          {
            "label": "Rootkit",
            "values": [
              "hide + hook",
              "`pslist` vs `psscan` diff, SSDT hook"
            ]
          },
          {
            "label": "Botnet",
            "values": [
              "C2 polling",
              "regular beacon, DGA domains"
            ]
          },
          {
            "label": "Fileless",
            "values": [
              "memory only",
              "encoded PowerShell, WMI subscription"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#ff8800",
          "#00d4ff",
          "#aa00ff",
          "#00e676",
          "#5a6a9e",
          "#ffd600",
          "#00bcd4"
        ]
      },
      {
        "type": "example",
        "title": "Ransomware ka forensic footprint",
        "kicker": "Example",
        "body": "Ransomware chalne par: (1) `vssadmin delete shadows /all` — shadow copies delete (Event 4688/EDR process); (2) mass file rename `.locked` — `$UsnJrnl` mein hazaaron write records; (3) ransom note `README.txt` har folder mein; (4) `bcdedit /set recoveryenabled No`; (5) outbound C2 beacon; (6) **encryption keys** process memory mein — RAM dump se decrypters ban sakte hain. Ye artifacts family identify karne ke liye kaafi hote hain (Ryuk/LockBit/Conti patterns)."
      },
      {
        "type": "points",
        "title": "Malware forensics ke pehle 10 sawaal",
        "kicker": "Questions",
        "points": [
          "Kaunsa **process** suspicious hai aur uska parent kaun (`winword → powershell`)?",
          "Kahan se aaya — **dropper** browser/email/USB se?",
          "**Persistence** kaise — Run key, scheduled task, service, WMI subscription?",
          "**Network** kya — C2 domain/IP, port, beacon interval?",
          "**Files** kaunse drop/encrypt hue — extension, folder pattern?",
          "**Privilege** — user ya SYSTEM? UAC bypass?",
          "**Lateral movement** — SMB/RDP/WinRM attempts?",
          "**Data** gaya? Volume, destination, archive?",
          "**Hash/IOC** — VT/VirusTotal, YARA match?",
          "**Containment** — host isolate, credential rotate, block IOC."
        ]
      },
      {
        "type": "diagram",
        "title": "Malware types — behaviour map",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-malware",
        "caption": "Virus, worm, trojan, ransomware, spyware, rootkit, botnet, fileless — behaviour aur artifact ke saath"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Malware types:** virus, worm, trojan, ransomware, spyware/keylogger, rootkit, botnet, fileless, logic bomb, APT.",
          "**Classify by:** propagation (host vs network), payload (encrypt/steal/hide/control).",
          "**Artifacts:** process tree, persistence keys, dropped files, C2 beacons, extensions, hashes.",
          "**Ransomware:** shadow copy delete + mass rename + note + C2 + key in RAM.",
          "**IOC mapping** se poore network par hunting possible."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the types of malware with their behaviour and forensic artifacts.",
        "answer": "**Malware:** malicious software — data chori, damage ya control ke liye.\n\n**1. Virus**\n- Host file/document mein infect, user action (macro enable) se chalta hai.\n- Artifact: infected file hash, `$MFT` change, autorun.\n\n**2. Worm**\n- Khud network par failta hai, user action nahi (SMB/RDP exploit).\n- Artifact: port 445/3389 scan traffic, rapid lateral spread (WannaCry).\n\n**3. Trojan**\n- Useful app ka disguise + backdoor/RAT.\n- Artifact: unsigned exe in `%TEMP%`, Run key, outbound C2.\n\n**4. Ransomware**\n- Mass encryption + ransom note; double extortion.\n- Artifact: `.locked`/.crypt extensions, `vssadmin delete shadows`, recovery disable, key in RAM.\n\n**5. Spyware / keylogger**\n- Keystrokes, screenshots, credentials, browsing.\n- Artifact: hidden process, small periodic HTTP POST.\n\n**6. Rootkit / bootkit**\n- Kernel/boot level hiding, hooks.\n- Artifact: `pslist` vs `psscan` diff, SSDT hook, hidden driver.\n\n**7. Botnet**\n- C2 se commands, DDoS/spam.\n- Artifact: regular beacon, DGA domains, IRC/HTTP C2.\n\n**8. Fileless malware**\n- PowerShell/WMI/registry, memory only.\n- Artifact: encoded PowerShell (Event 4104), WMI subscription, `malfind` RWX memory.\n\n**9. Logic/time bomb** — condition par trigger.\n**10. APT** — multi-stage, long dwell time, targeted.\n\n**Diagram:** Refer to the Malware types — behaviour map diagram."
      },
      {
        "question": "How is a ransomware incident investigated? Explain the steps and evidence.",
        "answer": "**Step 1 — Containment without destroying evidence**\n- Network isolate (EDR ya VLAN), machine ko **off/reboot na karo** — memory mein keys ho sakti hain.\n- Legal + management ko inform; ransom payment decision alag process hai.\n\n**Step 2 — Live response**\n- RAM dump (Volatility) — encryption keys, process, C2.\n- `netstat`/`netscan` se connections; running process list.\n\n**Step 3 — Identify family & entry point**\n- Ransom note text, file extension, hash → ID Ransomware/VirusTotal.\n- Entry vector: VPN log, phishing e-mail header, exposed RDP, vulnerable service.\n\n**Step 4 — Scope**\n- SIEM/EDR se kitne hosts affected, encryption start time, lateral movement (SMB/PsExec).\n- `$UsnJrnl` se mass-rename timeline; shadow copy delete events.\n\n**Step 5 — Data theft check**\n- Outbound flow bade transfers; archive creation (`7z`, `rar`), cloud-sync logs.\n\n**Step 6 — Recovery**\n- Immutable/offline backups se restore; clean build; credential rotation; IOC block.\n- Decryptor availability (No More Ransom) check.\n\n**Step 7 — Report**\n- Timeline, IOC, impact (files/data), root cause, 65B certification, lessons learned.\n\n**Evidence checklist:** RAM image, disk image, ransom note, EDR logs, firewall/VPN logs, backup catalog, e-mail header.\n\n**Diagram:** Refer to the Malware types — behaviour map diagram."
      },
      {
        "question": "Differentiate virus, worm and trojan. Why is classification important in forensics?",
        "answer": "**Comparison:**\n\n| Point | Virus | Worm | Trojan |\n|---|---|---|---|\n| Host | file/document chahiye | standalone | standalone |\n| Spread | user action se | khud network par | user install karta hai |\n| Propagation | file copy, share | exploit/scan (SMB, RDP) | phishing, fake download |\n| Speed | slow | very fast | depends on user |\n| Example | Melissa, macro virus | WannaCry, Conficker | Zeus, remote access trojan |\n| Artifact | infected file hash | scan traffic, port spikes | unsigned exe, Run key, C2 |\n\n**Classification kyun important:**\n1. **Containment strategy:** worm ke liye segmentation/patch, trojan ke liye user awareness + e-mail block, virus ke liye AV + file share scan.\n2. **Scope estimate:** worm = network-wide; trojan = few hosts.\n3. **IOC hunting:** family ke known registry/domain se sweep.\n4. **Root cause:** worm = missing patch, trojan = phishing → different fix.\n5. **Reporting/legal:** impact aur intent clearly describe hota hai.\n6. **Response priority:** self-propagating malware sabse urgent.\n\n**Note:** real malware hybrid hota hai (worm + ransomware = WannaCry) — isliye behaviour-based classification better hai.\n\n**Diagram:** Refer to the Malware types — behaviour map diagram."
      }
    ]
  },
  {
    "id": "malware-analysis-tools",
    "number": "3.12",
    "title": "Malware Analysis and Tools",
    "subtitle": "Static, dynamic, memory analysis + sandboxing",
    "icon": "tools",
    "accent": "#ff8800",
    "englishDefinition": "Malware analysis determines what a sample does, how it persists, and what indicators it leaves, using three complementary approaches. Static analysis inspects the file without running it: hashes, file type with file/TrID, strings, PE headers and sections with PEStudio or CFF Explorer, imports and exports, packer detection (PEiD/DIE), entropy, YARA rules, and disassembly or decompilation with IDA Pro, Ghidra, Radare2 and dnSpy for .NET. Dynamic analysis executes the sample in an isolated environment - a virtual machine or a dedicated analysis host with snapshots, host-only networking and a fake internet service - and observes process creation, file system, registry and network activity with Procmon, Process Explorer, Regshot, Wireshark, Sysmon/EDR and API monitors such as API Monitor or Cuckoo's monitor. Automated sandboxes (Cuckoo, CAPE, ANY.RUN, Joe Sandbox, Hybrid Analysis) produce quick behavioural reports, while memory analysis with Volatility reveals fileless and injected code. Analysis reports the sample's capabilities, persistence, C2 infrastructure, dropped files, hashes and YARA/Sigma detection rules. Safety is non-negotiable: isolated lab, no production credentials, snapshots, and legal handling of the sample as evidence.",
    "intro": "Malware analysis ke **teen raste**: (1) **Static** — file ko chalaye bina (hash, strings, PE header, imports, packer, YARA, disassembly), (2) **Dynamic** — isolated VM mein chala kar behaviour dekho (Procmon, Wireshark, Regshot, API monitor), (3) **Automated sandbox + memory** — Cuckoo/CAPE/ANY.RUN aur Volatility. Tools yaad rakho: Ghidra/IDA, PEStudio, Detect It Easy, x64dbg, Procmon, Process Explorer, YARA, CAPA. Safety first: isolated lab, snapshot, no real credentials.",
    "sections": [
      {
        "type": "definition",
        "title": "Analysis ke approaches",
        "kicker": "Approaches",
        "body": "**Static analysis** = sample ko execute kiye bina inspect karna (safe, fast, par packing se dhoka). **Dynamic analysis** = isolated environment mein chala kar behaviour record karna (accurate, par evasive malware detect kar leta hai).",
        "body2": "Real investigation mein dono mix hote hain: static se hypothesis, dynamic se confirmation, memory se fileless part.",
        "chips": [
          "static",
          "dynamic",
          "sandbox",
          "YARA",
          "Ghidra",
          "Procmon",
          "Volatility"
        ]
      },
      {
        "type": "cards",
        "title": "Tools by category",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "file",
            "title": "File identification",
            "body": "`file`, `TrID`, **PEStudio**, Detect It Easy (DIE), `sha256sum` — type, packer, entropy."
          },
          {
            "icon": "code",
            "title": "Disassembly / decompile",
            "body": "**Ghidra**, **IDA Pro**, Radare2/Cutter, dnSpy (.NET), `javap` (Java)."
          },
          {
            "icon": "bug",
            "title": "Debugging",
            "body": "**x64dbg**, OllyDbg, WinDbg, `gdb` — runtime unpacking, API trace."
          },
          {
            "icon": "monitor",
            "title": "Behaviour monitoring",
            "body": "**Procmon**, Process Explorer, **Regshot**, API Monitor, Sysmon."
          },
          {
            "icon": "network",
            "title": "Network behaviour",
            "body": "**Wireshark**, `tcpdump`, FakeNet-NG, **INetSim** — C2 aur download observe."
          },
          {
            "icon": "shield",
            "title": "Sandbox",
            "body": "**Cuckoo/CAPE**, ANY.RUN, Joe Sandbox, Hybrid Analysis, Recorded Future Triage."
          },
          {
            "icon": "search",
            "title": "Signature / detection",
            "body": "**YARA**, CAPA, `ssdeep`, imphash, Sigma rules, VirusTotal."
          },
          {
            "icon": "layers",
            "title": "Memory analysis",
            "body": "**Volatility 3**, `malfind`, `pslist/psscan/netscan`, `hollowfind`."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Static vs dynamic analysis",
        "kicker": "Comparison",
        "columns": [
          "Static",
          "Dynamic"
        ],
        "rows": [
          {
            "label": "Sample run",
            "values": [
              "nahi",
              "haan (isolated)"
            ]
          },
          {
            "label": "Speed",
            "values": [
              "fast",
              "slow (minutes)"
            ]
          },
          {
            "label": "Packing",
            "values": [
              "blind ho sakta hai",
              "unpack hone ke baad behaviour dikhta hai"
            ]
          },
          {
            "label": "Risk",
            "values": [
              "nil",
              "containment failure"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "strings, imports, YARA, family match",
              "persistence, C2, dropped files"
            ]
          },
          {
            "label": "Tools",
            "values": [
              "PEStudio, Ghidra, strings",
              "Procmon, Wireshark, Cuckoo"
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
        "title": "Sample walkthrough (typical order)",
        "kicker": "Example",
        "body": "1. `sha256sum sample.exe` → VirusTotal lookup. 2. `file`/PEStudio → PE32, unsigned, high entropy section `.text` (packed). 3. `strings -n 8` → URLs, `CreateRemoteThread`, `VirtualAllocEx` imports → process injection. 4. CAPA → \"inject into process\", \"persist via Run key\". 5. VM mein chala kar Procmon → `%APPDATA%\\svc.exe` drop + Run key; Wireshark → DNS query `update.badguy[.]com`, TLS beacon 60s. 6. Volatility `malfind` → injected code in `explorer.exe`. 7. YARA rule likho hash + strings ke liye."
      },
      {
        "type": "points",
        "title": "Lab safety rules",
        "kicker": "Safety",
        "points": [
          "**Isolated lab:** host-only network, no bridge, snapshot before execution.",
          "**No real credentials:** dummy accounts, koi production token/API key nahi.",
          "**Fake internet:** INetSim/FakeNet-NG se C2 simulate, real attacker ko alert na jaye.",
          "**Evidence handling:** sample ka hash, password-protected archive (`infected`), chain of custody.",
          "**Rollback:** snapshot restore after every run; VM ko long-term internet par na chhodo.",
          "**Logging:** har step ki notes, tool versions — reproducibility ke liye.",
          "**Legal:** authorisation, malware sharing policies, no redistribution."
        ]
      },
      {
        "type": "diagram",
        "title": "Malware analysis workflow",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-malanalysis",
        "caption": "Triage (hash/file) → static (PEStudio/Ghidra/YARA) → dynamic (VM + Procmon/Wireshark) → memory (Volatility) → IOC + detection rules"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Static:** hash, `file`, PEStudio, strings, imports, packer, YARA, Ghidra/IDA.",
          "**Dynamic:** VM + Procmon, Regshot, Wireshark, API monitor, sandbox (Cuckoo/CAPE/ANY.RUN).",
          "**Memory:** Volatility — fileless aur injection.",
          "**Detection output:** YARA/Sigma rules, IOC list.",
          "**Safety:** isolated lab, snapshot, fake internet, hash + custody."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain malware analysis techniques and the tools used.",
        "answer": "Malware analysis ke teen complementary approaches hain.\n\n**1. Static analysis (sample execute nahi hota)**\n- **Hashing:** `md5sum`/`sha256sum`, VirusTotal lookup.\n- **File type:** `file`, `TrID`, PEStudio, Detect It Easy.\n- **Strings:** `strings -n 8` — URLs, mutex, API names.\n- **PE structure:** sections, imports (`VirtualAllocEx`, `CreateRemoteThread`), entropy, packer.\n- **Disassembly:** IDA Pro, Ghidra, Radare2, dnSpy (.NET).\n- **Signatures:** YARA, CAPA, imphash/ssdeep.\n\n**2. Dynamic analysis (isolated environment)**\n- VM + snapshot, host-only network, INetSim/FakeNet-NG.\n- Tools: **Procmon** (file/registry/process), **Process Explorer** (handles), **Regshot** (registry diff), **Wireshark** (C2), **API Monitor**, Sysmon.\n- Output: persistence, dropped files, C2 domain, injection.\n\n**3. Automated sandbox**\n- **Cuckoo/CAPE, ANY.RUN, Joe Sandbox, Hybrid Analysis, Triage.**\n- Fast behavioural report + IOCs (mitre ATT&CK mapping).\n\n**4. Memory analysis**\n- **Volatility 3:** `pslist`, `psscan`, `malfind`, `netscan` — fileless/injected code.\n\n**5. Reporting**\n- Capabilities, persistence, C2, dropped files, hashes, YARA/Sigma rules.\n\n| Technique | Strength | Weakness |\n|---|---|---|\n| Static | safe, fast | packing/obfuscation |\n| Dynamic | real behaviour | evasive malware |\n| Memory | fileless | capture timing |\n\n**Diagram:** Refer to the Malware analysis workflow diagram."
      },
      {
        "question": "Describe the malware analysis lab setup and safety precautions.",
        "answer": "**Lab setup:**\n1. **Host machine:** analysis VM host with enough RAM/CPU, snapshots, isolated.\n2. **Analysis VM(s):** Windows 10/11 + Linux, clean snapshot, Sysmon + Procmon installed.\n3. **Network:** **host-only** adapter + **INetSim/FakeNet-NG** (fake DNS/HTTP/SMTP), ya full-inetsim VM; koi bridge nahi.\n4. **Tools VM:** REMnux (Linux analysis distro) + FlareVM (Windows toolset) + Ghidra/IDA/YARA.\n5. **Storage:** separate evidence drive, password-protected archives (`infected`), hash log.\n\n**Safety precautions:**\n1. **No production network/credentials** — dummy accounts only.\n2. **Snapshot before every run**, restore after; VM discard mode.\n3. **Fake internet** taaki attacker infra ko alert na ho aur outbound blocked rahe.\n4. **Hash + custody:** sample ka SHA-256, chain of custody form.\n5. **Containment:** firewall egress block, USB disable, clipboard/file-share off.\n6. **Logging:** har action notes + screenshots, tool versions.\n7. **Legal:** authorisation, licensed tools, safe sharing (never public upload without policy).\n8. **Anti-evasion:** time acceleration, debugger hiding, VM artifact patch — malware VM detect karta hai.\n\n**Why:** galat setup se real breach ka risk, attacker ko beacon mil sakta hai, ya evidence contaminated ho sakta hai.\n\n**Diagram:** Refer to the Malware analysis workflow diagram."
      },
      {
        "question": "What is YARA? How are YARA rules and IOCs used after malware analysis?",
        "answer": "**YARA** ek pattern-matching tool hai jo files/memory ko **rules** se scan karta hai — malware family identify karne ke liye.\n\n**Rule structure:**\n```yara\nrule Example_Ransom {\n  meta:\n    author = \"CF Team\"\n  strings:\n    $a = \"vssadmin delete shadows\" ascii wide\n    $b = { 4D 5A 90 00 }\n  condition:\n    uint16(0) == 0x5A4D and all of ($a)\n}\n```\n\n**Parts:**\n- **meta** — description, author, reference.\n- **strings** — text (`ascii`, `wide`, `nocase`), hex byte patterns, regex.\n- **condition** — logic (`and`, `or`, `filesize`, `uint16(0)`).\n\n**IOC (indicator of compromise) kya hota hai:**\n- File hash (MD5/SHA-256), filename/path, mutex, registry key, service name.\n- Network: domain, IP, URL, JA3, user-agent, beacon interval.\n- Behaviour: process injection, persistence key, extension.\n\n**Use after analysis:**\n1. **Hunting:** YARA se poore file server/endpoints scan (`yara -r rules.yar /mnt/evidence`).\n2. **Memory scan:** Volatility `yarascan` se RAM mein sample.\n3. **Detection:** EDR/AV custom rule, SIEM correlation, Sigma rule for event logs.\n4. **Retro-hunt:** historical logs/backups par IOC apply.\n5. **Containment:** block domains/IPs, quarantine hashes.\n6. **Reporting:** IOC table evidence ke saath.\n\n**Best practice:** rules ko test karo (false positives), version control, aur ATT&CK technique mapping karo.\n\n**Diagram:** Refer to the Malware analysis workflow diagram."
      }
    ]
  },
  {
    "id": "email-protocols",
    "number": "3.13",
    "title": "E-mail Forensics — Protocols and Structure",
    "subtitle": "SMTP, POP3, IMAP, headers aur authentication",
    "icon": "doc",
    "accent": "#00bcd4",
    "englishDefinition": "E-mail forensics reconstructs the origin, path and content of an e-mail message. The transport protocols are SMTP (used by the sender's client and mail servers to submit and relay mail, with ESMTP extensions and submission on port 587), while POP3 (port 110/995) and IMAP (143/993) are used by a client to retrieve mail from the mailbox, IMAP keeping the mailbox synchronised on the server and therefore leaving far better server-side evidence. Supporting protocols are DNS (MX records), LDAP/Active Directory for directory lookups, and webmail over HTTPS. Every message consists of headers, a body and optional MIME parts; the headers are the forensic gold: Received lines trace the hop chain from bottom (first) to top (last), Message-ID identifies the originating system, Return-Path and envelope sender differ from the visible From, Date and time zones show sending time, X-Mailer and User-Agent reveal the client, and Authentication-Results records SPF, DKIM and DMARC outcomes. Investigators obtain evidence from mail server logs, mailbox exports (PST/MBOX/EML/OST), webmail audit logs, and provider records via legal process, always preserving headers in full.",
    "intro": "E-mail forensics = **message ka safar aur sach** reconstruct karna. Protocols yaad rakho: **SMTP** (bhejna/relay, 25/587), **POP3** (download, 110/995), **IMAP** (server sync, 143/993), plus DNS **MX** aur webmail (HTTPS). Forensic gold = **headers**: `Received` chain (neeche se upar), `Message-ID`, `Return-Path`, `From`, `Date`, `X-Mailer`, aur `Authentication-Results` (SPF/DKIM/DMARC).",
    "sections": [
      {
        "type": "definition",
        "title": "E-mail ka dhancha",
        "kicker": "Structure",
        "body": "Ek message ke **teen hisse** hote hain: **headers** (metadata), **body** (text/HTML) aur **MIME attachments**. Forensics ke liye headers sabse important — inme routing, sender aur authentication ka poora record hota hai.",
        "body2": "Header kabhi edit na karo — raw source (`.eml`/`.msg`) export karo, kyunki forwarding se `Received` lines badal jaati hain aur evidence kamzor hota hai.",
        "chips": [
          "SMTP",
          "POP3",
          "IMAP",
          "Received chain",
          "Message-ID",
          "SPF/DKIM/DMARC",
          "MIME"
        ]
      },
      {
        "type": "comparison",
        "title": "E-mail protocols",
        "kicker": "Comparison",
        "columns": [
          "SMTP",
          "POP3",
          "IMAP"
        ],
        "rows": [
          {
            "label": "Purpose",
            "values": [
              "send/relay mail",
              "download and often delete",
              "sync mailbox on server"
            ]
          },
          {
            "label": "Ports",
            "values": [
              "25, 587 (submission), 465 (SMTPS)",
              "110, 995 (SSL)",
              "143, 993 (SSL)"
            ]
          },
          {
            "label": "Server evidence",
            "values": [
              "server logs, queue, relay records",
              "kam — local delete ho jaata",
              "behtar — server par copy rehti"
            ]
          },
          {
            "label": "Direction",
            "values": [
              "client → server → server",
              "server → client",
              "bidirectional sync"
            ]
          },
          {
            "label": "Forensic value",
            "values": [
              "path trace, relay IP",
              "local PST/MBOX files",
              "server mailbox + audit logs"
            ]
          }
        ],
        "columnColors": [
          "#00bcd4",
          "#ff8800",
          "#00e676"
        ]
      },
      {
        "type": "cards",
        "title": "Key headers aur unka matlab",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "arrow",
            "title": "Received",
            "body": "Har hop ka record — chain **neeche se upar** padho; bottom line first server (origin)."
          },
          {
            "icon": "tag",
            "title": "Message-ID",
            "body": "Originating server generate karta hai — `<id@domain>` se server identify hota hai."
          },
          {
            "icon": "user",
            "title": "From / Return-Path",
            "body": "Visible From spoof ho sakta hai; Return-Path (envelope sender) actual bounces batata hai."
          },
          {
            "icon": "clock",
            "title": "Date",
            "body": "Sending time + timezone — timeline ke liye; header order se conflict ho to red flag."
          },
          {
            "icon": "code",
            "title": "X-Mailer / User-Agent",
            "body": "Kaunsa client/script use hua — bulk mailer scripts pakde jaate hain."
          },
          {
            "icon": "shield",
            "title": "Authentication-Results",
            "body": "SPF, DKIM, DMARC ka pass/fail — spoofing ka direct proof."
          },
          {
            "icon": "file",
            "title": "Content-Type / MIME",
            "body": "Body parts, boundary, attachments ka structure aur filename."
          },
          {
            "icon": "search",
            "title": "Subject / In-Reply-To",
            "body": "Thread reconstruction aur social engineering clues."
          }
        ]
      },
      {
        "type": "points",
        "title": "Header kaise padhein (step by step)",
        "kicker": "Reading headers",
        "points": [
          "**Received lines neeche se upar** padho — sabse neeche wala line originating server hai.",
          "Har `Received` mein IP, hostname, protocol (ESMTP) aur timestamp check karo.",
          "**Delay nikaalo:** consecutive `Received` timestamps ka gap — attack/delay ya timezone manipulation.",
          "**Message-ID** ka domain dekho — agar From Gmail ka hai par Message-ID kisi aur server ka, spoofing.",
          "**Return-Path vs From** compare karo — mismatch = envelope spoofing.",
          "**Authentication-Results** dekho — `spf=fail`, `dkim=none`, `dmarc=fail`.",
          "**X-Originating-IP** (webmail) se sender ka real IP mil sakta hai.",
          "**Attachments** ka hash lo; password-protected zip = red flag."
        ]
      },
      {
        "type": "example",
        "title": "Spoofed e-mail ka header analysis",
        "kicker": "Example",
        "body": "Ek e-mail `accounts@bank.com` se aayi lagti hai. Headers: (1) `Received: from mail.evil.tld` — actual sending server; (2) `Return-Path: <bounce@evil.tld>`; (3) `Message-ID: <1234@evil.tld>`; (4) `Authentication-Results: spf=fail dkim=none dmarc=fail`; (5) `X-Mailer: PHPMailer 6.5`. Conclusion: From header spoofed, mail PHP script se bulk bheji gayi — bank se nahi. Ye teen-minute ka analysis often poora phishing case solve kar deta hai."
      },
      {
        "type": "diagram",
        "title": "E-mail flow aur header chain",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-email",
        "caption": "Sender client (SMTP 587) → sender mail server → DNS MX lookup → recipient server → POP3/IMAP/webmail, har hop par Received header"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Protocols:** SMTP (send/relay), POP3 (download), IMAP (sync), DNS MX, webmail HTTPS.",
          "**Ports:** 25/587/465 (SMTP), 110/995 (POP3), 143/993 (IMAP).",
          "**Headers:** Received (neeche se upar), Message-ID, Return-Path, From, Date, X-Mailer, Authentication-Results.",
          "**Evidence sources:** server logs, PST/MBOX/EML, webmail audit logs, provider records.",
          "**Spoofing signals:** Return-Path mismatch, Message-ID domain mismatch, SPF/DKIM/DMARC fail."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the e-mail protocols and their forensic significance.",
        "answer": "E-mail forensics mein protocols samajhna zaroori hai kyunki har protocol apna alag evidence chhodta hai.\n\n| Protocol | Purpose | Ports | Forensic value |\n|---|---|---|---|\n| **SMTP** | send/relay mail | 25, 587, 465 | server logs, queue records, relay IPs |\n| **POP3** | download mail | 110, 995 | local PST/MBOX, server se gayab ho sakta |\n| **IMAP** | server-side mailbox sync | 143, 993 | server mailbox + audit logs best evidence |\n| **DNS (MX)** | mail server locate | 53 | MX records, sender domain verification |\n| **HTTPS/webmail** | webmail access | 443 | webmail audit logs, X-Originating-IP |\n| **LDAP/AD** | directory lookup | 389, 636 | user mapping, account attribution |\n\n**SMTP:** message submission aur server-to-server relay; `Received` headers isi ke hop banate hain; server logs (Postfix/Exchange) sender IP, recipient, queue ID aur status rakhte hain.\n\n**POP3:** client mail download karta hai aur often server se delete; evidence local machine par PST/MBOX mein.\n\n**IMAP:** mailbox server par rehta hai, isliye provider ke paas messages + login logs (IP, time) hote hain — sabse strong evidence source.\n\n**Forensic implications:**\n1. **Path trace:** SMTP hop chain.\n2. **Attribution:** IMAP/webmail login logs se IP.\n3. **Content:** mailbox export (EML/MSG/PST/MBOX).\n4. **Authentication:** SPF/DKIM/DMARC results headers mein.\n\n**Diagram:** Refer to the E-mail flow aur header chain diagram."
      },
      {
        "question": "Explain the structure of an e-mail header and how it is used in forensic investigation.",
        "answer": "E-mail ke **headers, body aur attachments** hote hain; headers forensic ke liye decisive hain.\n\n**Important headers:**\n\n| Header | Meaning |\n|---|---|\n| `Received` | har hop (server, IP, timestamp) |\n| `Message-ID` | originating system ka unique ID |\n| `Return-Path` | envelope sender (bounces) |\n| `From` / `Reply-To` | visible sender (spoof ho sakta) |\n| `Date` | sending time + timezone |\n| `X-Mailer`/`User-Agent` | client/script |\n| `Authentication-Results` | SPF, DKIM, DMARC verdict |\n| `Content-Type` | MIME structure, boundary |\n| `X-Originating-IP` | webmail sender IP |\n\n**Investigation steps:**\n1. **Raw source export** (`.eml`/`Show original`) — forwarding se headers alter hote hain.\n2. **Received chain neeche se upar** padho → originating server/IP.\n3. **Delays:** consecutive timestamps ka gap nikaalo (suspicious delay ya timezone tampering).\n4. **Spoof check:** Return-Path vs From, Message-ID domain, SPF/DKIM/DMARC fail.\n5. **Client identification:** X-Mailer/User-Agent (PHPMailer, sendmail, spoofing tools).\n6. **Attachments:** hash, type, password-protected archives.\n7. **Correlate:** server logs (queue ID) se header ko match karo.\n8. **Geo-IP:** sender IP ka location + abuse history.\n\n**Conclusion:** headers se **origin, path, client, authenticity aur timeline** — chaar cheezein prove hoti hain.\n\n**Diagram:** Refer to the E-mail flow aur header chain diagram."
      },
      {
        "question": "What evidence sources are used in e-mail forensics and how is evidence preserved?",
        "answer": "**Evidence sources:**\n\n**1. Server side**\n- MTA logs (Postfix `mail.log`, Exchange tracking log) — sender IP, recipient, queue ID, status.\n- Mailbox store (Exchange EDB, Dovecot Maildir) aur journaling/archiving.\n- Webmail audit logs, IMAP/POP3 login logs, admin actions.\n\n**2. Client side**\n- PST/OST, MBOX, EML/MSG files, Thunderbird profile.\n- Local caches, address book, auto-complete history, deleted items.\n\n**3. Provider / third party**\n- Google Workspace/Microsoft 365 audit logs (via legal process).\n- ISP/relay logs, DNS logs, blocklists, spam traps.\n\n**4. Message itself**\n- Full raw headers, MIME parts, attachment hashes, DKIM signature.\n\n**Preservation:**\n1. **Do not forward** — forwarding se `Received` lines add ho jaate hain.\n2. **Export raw** `.eml` + hash (SHA-256) dono sender aur recipient copies ka.\n3. **Server log export** with date range, integrity hash.\n4. **Legal process:** Section 65B certificate, provider request (MLAT foreign provider).\n5. **Chain of custody:** custody form, sealed storage, access log.\n6. **Read-only tools:** forensic e-mail tools (MailXaminer, Aid4Mail, EnCase) se copy par analysis.\n7. **Retention:** legal hold — auto-delete policy pause.\n\n**Common mistakes:** original delete karna, headers strip karna, PST ko directly open karna (metadata badal sakta hai), timezone ignore karna.\n\n**Diagram:** Refer to the E-mail flow aur header chain diagram."
      }
    ]
  },
  {
    "id": "email-crimes",
    "number": "3.14",
    "title": "E-mail Crimes and Investigation",
    "subtitle": "Phishing, spoofing, BEC, spam, harassment — aur unki jaanch",
    "icon": "alert",
    "accent": "#ff5252",
    "englishDefinition": "E-mail crimes are offences committed through or against e-mail systems. Common categories are phishing and spear-phishing (credential theft through deceptive messages), e-mail spoofing (forged From header or envelope sender), business e-mail compromise (impersonation of an executive or vendor to redirect payments, often via mailbox takeover), malware distribution through attachments or links, spam and unsolicited bulk mail, mule-recruitment and lottery/advance-fee frauds, cyberstalking and harassment, e-mail bombing and denial of service, identity theft, and data leakage or insider misuse of corporate mail. Investigation relies on the full header chain, the sender's IP reputation and geo-location, authentication results (SPF/DKIM/DMARC), URL and attachment analysis in a sandbox, server and webmail access logs (logins, forwarding rules, mailbox rule creation), and comparison with the victim's mailbox for anomalies. Many cases also involve mailbox takeover, where the investigators must find the malicious forwarding rule, the OAuth/consent grant or the leaked credential. Legally, such offences are covered in India by the IT Act 2000 (Sections 66, 66C, 66D) and the Bharatiya Nyaya Sanhita provisions on cheating and forgery, along with evidence certification under Section 65B.",
    "intro": "E-mail crimes ke main types: **phishing/spear-phishing**, **spoofing**, **BEC (business e-mail compromise)**, **malware via attachment**, **spam**, **advance-fee/lottery fraud**, **harassment/stalking**, **mail bombing**, **identity theft**, aur **insider data leakage**. Investigation mein headers + SPF/DKIM/DMARC + IP reputation + URL/attachment sandbox + mailbox login/forwarding rules dekhe jaate hain. India mein: IT Act **66, 66C, 66D** + BNS cheating/forgery + **65B** certificate.",
    "sections": [
      {
        "type": "definition",
        "title": "E-mail crimes kya hain",
        "kicker": "Definition",
        "body": "E-mail crimes wo offences hain jinme e-mail **medium ya target** hota hai — phishing se credential chori, spoofing se impersonation, BEC se payment fraud, attachment se malware, aur harassment se mental harm.",
        "body2": "Investigation ka core hamesha ek hi hai: **header se origin, content se intent, logs se attribution** — aur teeno ko legally preserve karna.",
        "chips": [
          "phishing",
          "spoofing",
          "BEC",
          "spam",
          "mail bombing",
          "stalking",
          "IT Act 66/66C/66D"
        ]
      },
      {
        "type": "cards",
        "title": "Crime types aur indicators",
        "kicker": "Important Concepts",
        "cards": [
          {
            "icon": "fish",
            "title": "Phishing / spear-phishing",
            "body": "Fake login page, urgent tone, look-alike domain (`bank-secure.tld`), reply-to different."
          },
          {
            "icon": "user",
            "title": "Spoofing",
            "body": "From header forged; Return-Path/Message-ID mismatch; SPF/DKIM/DMARC fail."
          },
          {
            "icon": "money",
            "title": "BEC / payment fraud",
            "body": "CEO/vendor impersonation, new bank details, urgency, mailbox takeover ke baad thread hijack."
          },
          {
            "icon": "virus",
            "title": "Malware distribution",
            "body": "Weaponised attachment (`.zip/.iso/.html`), macro docs, QR code, link to dropper."
          },
          {
            "icon": "grid",
            "title": "Spam / bulk mail",
            "body": "High volume, bulk mailer headers (`X-Mailer: PHPMailer`), list-unsubscribe missing."
          },
          {
            "icon": "alert",
            "title": "Mail bombing / DoS",
            "body": "Hazaaron mails se mailbox flood — automation aur rate anomaly."
          },
          {
            "icon": "eye",
            "title": "Stalking / harassment",
            "body": "Threatening content, throwaway accounts, repeated anonymous mails."
          },
          {
            "icon": "lock",
            "title": "Data leakage / insider",
            "body": "Internal mail se data bahar, auto-forward rule, personal account CC."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Phishing vs spoofing vs BEC",
        "kicker": "Comparison",
        "columns": [
          "Phishing",
          "Spoofing",
          "BEC"
        ],
        "rows": [
          {
            "label": "Goal",
            "values": [
              "credentials/OTP chori",
              "sender identity forge karna",
              "payment ya data divert"
            ]
          },
          {
            "label": "Technique",
            "values": [
              "fake link/page",
              "forged From/envelope",
              "impersonation + mailbox takeover"
            ]
          },
          {
            "label": "Scale",
            "values": [
              "bulk",
              "bulk ya targeted",
              "targeted, few mails"
            ]
          },
          {
            "label": "Indicator",
            "values": [
              "URL mismatch, lookalike domain",
              "SPF/DKIM/DMARC fail",
              "new bank details, reply-to change"
            ]
          },
          {
            "label": "Loss",
            "values": [
              "account takeover",
              "reputation",
              "financial (large)"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#00d4ff",
          "#ff5252"
        ]
      },
      {
        "type": "points",
        "title": "Investigation checklist",
        "kicker": "Checklist",
        "points": [
          "**Raw message + full headers** export karo, hash lo (forward nahi).",
          "**Received chain** neeche se upar — originating IP, relay servers, delays.",
          "**Authentication:** SPF/DKIM/DMARC fail, `Received-SPF`, DKIM signature validity.",
          "**IP intelligence:** geo-IP, ASN, reputation, abuse history, VPN/proxy check.",
          "**Domain analysis:** WHOIS age, lookalike/homoglyph, DNS records, MX.",
          "**URL/attachment:** sandbox detonate, hash → VirusTotal, macro/JS check.",
          "**Mailbox audit:** login IPs, MFA events, forwarding rules, OAuth grants, deletion activity.",
          "**Victim side:** bank transaction, clicked link, credential entry time — timeline banao.",
          "**Preserve + report:** 65B certificate, chain of custody, IOC list."
        ]
      },
      {
        "type": "example",
        "title": "BEC case — mailbox takeover kaise pakda gaya",
        "kicker": "Example",
        "body": "CFO ke naam se vendor ko mail: \"bank details change kar diye\". Investigation: (1) vendor ke mailbox logs mein 08:12 par Nigeria IP se IMAP login (MFA bypass via leaked app password); (2) usi time ek **hidden inbox rule** bani — \"subject mein invoice ho to folder mein move + forward to attacker\"; (3) `Received` headers se sending IP attacker ka VPS; (4) bank account name beneficiary mismatch; (5) victim ka payment timestamp aur mail timestamp match. Result: takeover + rule + IP + payment = complete chain."
      },
      {
        "type": "diagram",
        "title": "E-mail crime investigation flow",
        "kicker": "Diagram (Exam Ke Liye)",
        "diagram": "cf-emailcrime",
        "caption": "Complaint → preserve raw mail + headers → auth/IP/domain analysis → attachment sandbox → mailbox & bank logs → attribution → 65B report"
      },
      {
        "type": "recap",
        "title": "Quick Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Types:** phishing, spoofing, BEC, malware, spam, bombing, stalking, insider leakage.",
          "**Indicators:** SPF/DKIM/DMARC fail, Return-Path mismatch, lookalike domain, urgent tone, new bank details.",
          "**Investigation:** headers → IP/domain → attachment → mailbox logs → bank logs → timeline.",
          "**BEC mein:** hidden forwarding rule, OAuth grant, MFA bypass check karo.",
          "**Law (India):** IT Act 66, 66C, 66D + BNS cheating/forgery + IT Act 65B certificate."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the types of e-mail crimes with examples and their investigation approach.",
        "answer": "E-mail crimes e-mail ke through ya e-mail ke against hote hain.\n\n**1. Phishing / spear-phishing**\n- Fake login page/urgent message se credentials/OTP chori.\n- Indicator: lookalike domain, URL mismatch, generic salutation (spear mein personalised).\n- Investigation: URL/domain WHOIS, hosting, sandbox, victim's click time.\n\n**2. E-mail spoofing**\n- From header forge; Return-Path/Message-ID mismatch; SPF/DKIM/DMARC fail.\n- Investigation: header chain, originating IP, relay reputation.\n\n**3. Business E-mail Compromise (BEC)**\n- Executive/vendor impersonation ya mailbox takeover se payment divert.\n- Indicator: new bank details, reply-to change, hidden forwarding rule, unusual login.\n- Investigation: mailbox audit logs, IMAP/webmail IP, inbox rules, OAuth grants, bank records.\n\n**4. Malware distribution**\n- Weaponised attachments (`.zip/.iso/.html`) ya links.\n- Investigation: attachment hash → VirusTotal, sandbox detonation, C2 extraction.\n\n**5. Spam / bulk mail**\n- High volume, bulk mailer headers, no unsubscribe.\n- Investigation: sending IP/ASN, blocklist, spam trap data.\n\n**6. Mail bombing / DoS**\n- Thousands of mails se mailbox flood.\n- Investigation: rate analysis, source distribution, subscription abuse.\n\n**7. Stalking / harassment / threats**\n- Repeated anonymous/threatening mails.\n- Investigation: header IP, account creation data, content forensics, provider request.\n\n**8. Identity theft & data leakage**\n- Credential misuse, insider forwarding to personal account.\n- Investigation: DLP logs, mailbox rules, USB/cloud sync.\n\n**Legal (India):** IT Act Sections **66** (computer-related offences), **66C** (identity theft), **66D** (cheating by personation), BNS cheating/forgery, evidence via **65B**.\n\n**Diagram:** Refer to the E-mail crime investigation flow diagram."
      },
      {
        "question": "How is a phishing e-mail investigated? Explain with header and infrastructure analysis.",
        "answer": "**Step 1 — Preserve**\n- Full raw message (`.eml`, \"Show original\"), hash SHA-256, screenshots, recipient list; forward na karo.\n\n**Step 2 — Header analysis**\n- **Received chain** neeche se upar: originating IP, relay hosts, timestamps, delays.\n- **From vs Return-Path** mismatch → envelope spoofing.\n- **Message-ID** domain → actual sending system.\n- **Authentication-Results:** `spf=fail`, `dkim=none`, `dmarc=fail` → spoofed.\n- **X-Mailer/User-Agent:** PHPMailer/sendmail → scripted bulk.\n\n**Step 3 — IP & domain intelligence**\n- Geo-IP, ASN, reputation, abuse contacts, VPN/proxy/Tor check.\n- **Domain:** WHOIS age (naya domain = red flag), lookalike/homoglyph, MX, hosting, SSL cert.\n\n**Step 4 — URL & content analysis**\n- Link target (anchor vs actual href), URL shortener expand.\n- Sandbox detonation (URLScan, Any.Run), credential harvesting page structure.\n- Branding mismatch, spelling errors, urgent language.\n\n**Step 5 — Victim-side correlation**\n- Proxy/web logs se click time, credential entry, subsequent account takeover.\n- Mailbox login logs, MFA events, forwarding rules.\n\n**Step 6 — Attribution & impact**\n- Kitne users ko gayi, kitne ne click kiya, kaunsa account compromise hua.\n- Financial loss / data loss quantify.\n\n**Step 7 — Response & report**\n- Block sender/domain/URL, reset credentials, enable MFA, user awareness.\n- Report with IOC list + 65B certificate.\n\n**Diagram:** Refer to the E-mail crime investigation flow diagram."
      },
      {
        "question": "Discuss the legal provisions related to e-mail crimes in India and the role of e-mail forensics.",
        "answer": "**Legal framework (India):**\n\n| Provision | Relevance |\n|---|---|\n| IT Act **66** | computer-related offences (dishonest/fraudulent acts) |\n| IT Act **66C** | identity theft (password/electronic signature use) |\n| IT Act **66D** | cheating by personation using computer resource |\n| IT Act **67/67A** | obscene material transmission |\n| IT Act **72** | breach of confidentiality/privacy |\n| IT Act **65B** | electronic record admissibility certificate |\n| IT Act **69** | interception/monitoring powers (lawful) |\n| BNS (2023) | cheating (318), forgery, criminal intimidation, defamation |\n| DPDP Act 2023 | personal data handling obligations |\n\n**Role of e-mail forensics:**\n1. **Origin proof:** Received headers se sender server/IP.\n2. **Authenticity:** SPF/DKIM/DMARC results, DKIM signature verification.\n3. **Attribution:** webmail/IP logs se account holder, VPN/proxy check.\n4. **Content evidence:** body, attachment hash, macros, URLs.\n5. **Timeline:** kab bheja, kab khola, kab payment hua.\n6. **Admissibility:** raw export + hash + chain of custody + 65B.\n7. **Expert testimony:** header interpretation court mein samjhana.\n8. **Prevention support:** IOC/rule creation, DMARC enforcement.\n\n**Challenges:** spoofed senders, foreign providers (MLAT), encrypted webmail, throwaway accounts, anti-forensics (header editing), privacy law limits.\n\n**Diagram:** Refer to the E-mail crime investigation flow diagram."
      }
    ]
  }
];

export const cyberForensicsUnit = {
  id: 'unit-3',
  number: '3',
  name: 'Cyber Forensics',
  topics: cyberForensicsTopics,
};
