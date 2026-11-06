// Cyber Security Paper 1 — Model Paper (5 + 5 division)
//
// Content rules for every paper in this section:
//   1. The question paper is written in ENGLISH ONLY — no Hinglish in questions,
//      options, notes, instructions or answers.
//   2. Every answer has two parts: `explain` (the concept explained in plain
//      English — definitions, the terms used in the question, how to structure
//      the answer) and `answer` (the exam-ready answer for the marks).
//   3. Every diagram carries `diagramCaption`, so the figure is labelled in words
//      and can be enlarged in the reader.
//   4. No question carries a single block of 10 marks: every question is divided
//      as (a) 5 + (b) 5, with the OR alternative also divided 5 + 5.
//
// Topic map (no topic is repeated in Papers 2, 3 and 4):
//   Unit 1 — 1.1 introduction, 1.4 cyber threats, 1.3 cyberspace, 1.5 cyber warfare
//   Unit 2 — 2.1 attack lifecycle, 2.2 malware / spyware / sniffing, 2.3 gaining
//            access, 2.7 covering tracks
//   Unit 3 — 3.2 investigation process, 3.3 digital evidence, 3.4 challenges,
//            3.8 anti-forensics
//   Unit 4 — 4.1 introduction, 4.5 properties of digital evidence, 4.6 recovering
//            and preserving, 4.4 software and hardware
//   Unit 5 — 5.3 categories, 5.4 phases, 5.8 phishing, 5.9 insider attack

export const cysPaper1 = {
  id: 'cys-paper-1',
  number: 1,
  name: 'Paper 1',
  tag: 'Cyber Security',
  session: 'Model Paper · 5 + 5 division',
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
    'Every question carries 10 marks, divided as (a) 5 marks + (b) 5 marks.',
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
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Define cyber security and explain the CIA triad with one attack example for each of the three principles.',
              explain:
                '**What is being asked.** The examiner wants a definition first, then the three principles of information security — confidentiality, integrity and availability — each with a concrete attack that breaks it. The marks are in the examples, not in the definition.\n\n**The three principles.** Confidentiality — data is read only by people who are authorised to read it; broken by a data leak, a stolen password or sniffing. Integrity — data is exactly what the owner wrote, no unauthorised change; broken by tampering, a man-in-the-middle edit or ransomware. Availability — the system answers when a legitimate user asks; broken by a denial-of-service flood or by a destructive wiper.\n\n**The idea that carries marks.** The three principles pull against each other, so security is a balance: the strictest confidentiality (six passwords, no sharing) damages availability. Every control you name must be placed against one of the three, and the answer must say what the control costs.\n\n**How to score the 5 marks.** Definition (1) · three principles defined with one attack example each (3) · the balance statement (1).',
              answer:
                '**Cyber security** is the protection of computers, networks, data and the people who use them from unauthorised access, change, destruction or denial — using technology, process and awareness together. It is not a product that is installed once; it is a property that is maintained.\n\nThe **CIA triad** is the model used to decide what security is protecting.\n\n| Principle | Meaning | What breaks it | Control that protects it |\n|---|---|---|---|\n| **Confidentiality** | data is read only by authorised people | stolen password, network sniffing, insider leak, misconfigured cloud bucket | encryption in transit and at rest, access control, least privilege |\n| **Integrity** | data is exactly what the owner wrote | tampering, man-in-the-middle edit, ransomware encryption, unauthorised database update | hashing, digital signature, write-once backup, change audit log |\n| **Availability** | the service answers when needed | denial-of-service flood, ransomware, disk failure, wiper malware | redundancy, backup, DDoS protection, capacity planning |\n\n**Why all three are needed.** A system that is confidential but not available is useless; a system that is available but not trustworthy is dangerous. A bank that keeps customer records perfectly secret but loses them in a crash has failed availability, and a hospital that keeps its system running after an attacker edits prescriptions has failed integrity.\n\n**The balance.** Each control has a cost. Mandatory 20-character passwords rotated weekly raise confidentiality and damage availability because users write the password on a sticky note. The examiner rewards the sentence that says security is a trade-off managed against risk, not a maximum.\n\n**Exam line:** confidentiality stops reading, integrity stops changing, availability stops blocking — and every security control can be placed against one of the three.',
              diagram: 'cia-triad',
              diagramCaption:
                'The CIA triad: the three principles with the attacks that break each one and the controls that protect it.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain any five categories of cyber threat with one real example of each, and state which CIA principle each threatens most.',
              explain:
                '**What is being asked.** A short, wide question: five threat families, one named example each, and the principle each attacks. The examiner is testing the vocabulary of the subject, so a definition of cyber threat and a clean list are enough — but each item needs a one-line example or the marks are halved.\n\n**Choosing the five.** Malware (virus, worm, trojan, ransomware) · phishing and social engineering · denial of service · man-in-the-middle and interception · zero-day exploitation. These five cover the syllabus and each has an obvious example.\n\n**How to write it.** One table with four columns — threat, how it works, example, principle attacked — then two lines that say threats arrive through people, through code and through the network.\n\n**How to score the 5 marks.** Meaning of cyber threat (1) · five threats with worked examples (3) · the closing classification (1).',
              answer:
                'A **cyber threat** is any actor, tool or condition that can damage the confidentiality, integrity or availability of a system. Threats are classified by the way they reach the victim: through code, through people and through the network.\n\n| Threat | How it works | Example | Principle attacked |\n|---|---|---|---|\n| **Malware** | malicious program runs on the host | WannaCry ransomware encrypted hospital files in 2017 | availability, integrity |\n| **Phishing** | a fake message makes the user hand over credentials | fake bank mail with a cloned login page | confidentiality |\n| **Denial of service** | traffic or requests exhaust the service | Mirai botnet flooded DNS provider Dyn in 2016 | availability |\n| **Man-in-the-middle** | attacker sits between client and server | rogue Wi-Fi hotspot reading a session cookie | confidentiality, integrity |\n| **Zero-day exploitation** | attack on a flaw for which no patch exists | an unpatched VPN appliance exploited before the vendor fix | all three |\n\n**Three observations that earn the last mark.** First, most breaches start with a person, not with code — the phishing mail is cheaper than the zero-day. Second, ransomware attacks availability and integrity together, because the data is both locked and lost. Third, a threat becomes a vulnerability only when a control is missing; the same phishing mail is harmless against a user who verifies out of band.\n\n**Exam line:** threats enter through code, through people and through the network — and defence must be placed at all three doors.',
              diagram: 'cyber-threats',
              diagramCaption:
                'Six major cyber threat families and the weakness each one targets, from malware and phishing to man-in-the-middle and zero-day.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain the layered structure of cyberspace and state why the layers must be secured together.',
              explain:
                '**What is being asked.** Cyberspace is not one thing; it is a stack of layers, each with its own assets and its own controls. The examiner wants the layers named, one or two assets inside each, and the argument that a chain is only as strong as its weakest layer.\n\n**The layers.** Physical layer — servers, routers, cables, satellites, the data centre itself. Logical layer — software, protocols, applications, the configuration that makes the hardware work. Information layer — the data and the meaning of the data. Social layer — the users, communities and human activity that give cyberspace its purpose.\n\n**Why together.** An attacker picks the cheapest layer, not the most protected one. A firewall on the logical layer is irrelevant if someone walks out with the disk, and a perfect patch policy does not stop an employee who mails the database.\n\n**How to score the 5 marks.** Four layers with assets (3) · the weakest-link argument (1) · one example of cross-layer attack (1).',
              answer:
                '**Cyberspace** is the environment created when computers, networks and people interact. It is best described as a stack of four layers, each built on the one below.\n\n| Layer | What it contains | Typical controls |\n|---|---|---|\n| **Physical** | servers, routers, switches, cables, satellites, data centre, laptops | access control, CCTV, locks, redundant power, Faraday shielding |\n| **Logical** | operating systems, protocols, applications, configuration, code | patching, firewalls, IDS, secure configuration, input validation |\n| **Information** | the data itself and its meaning — records, mail, images, keys | encryption, classification, backup, integrity hashes |\n| **Social** | users, communities, organisations, human activity | awareness training, policy, verification procedures |\n\n**The stack is cumulative.** The physical layer is the base, the logical layer runs on it, the information layer is carried by both, and the social layer gives all of it purpose. Removing a lower layer collapses everything above it: no power, no application.\n\n**Why the layers must be secured together.** An attacker chooses the cheapest route. A bank can spend a crore on a firewall and still lose data because a technician carried out an unencrypted disk. A hospital can encrypt every database and still lose availability because the same data had no offline backup. This is the weakest-link rule: the security of the whole is the security of the least protected layer.\n\n**Exam line:** cyberspace is four layers stacked on each other, and defence is only as strong as the layer the attacker finds cheapest to break.',
              diagram: 'cyberspace-layers',
              diagramCaption:
                'Cyberspace as a four layer stack — physical, logical, information and social — with the controls that belong to each layer.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain cyber warfare and distinguish its three levels — espionage, sabotage and full-scale cyber war — with one example.',
              explain:
                '**What is being asked.** Cyber warfare is state-on-state conflict conducted through networks. The examiner wants the definition, the three escalating levels, and an example for each, because the levels are the marks.\n\n**The three levels.** Cyber espionage — stealing plans, secrets and economic data without changing anything; the victim may never know. Cyber sabotage — damaging physical or logical infrastructure: centrifuges, power grids, pipelines. Full-scale cyber war — disrupting communication, finance, military command and public services as part of an armed conflict.\n\n**The distinction that carries marks.** Espionage is theft, sabotage is damage, war is coercion of a state. The escalation is measured by effect on the physical world and on the population — not by the sophistication of the tool.\n\n**How to score the 5 marks.** Definition (1) · three levels explained (2) · examples (1) · the escalation criterion (1).',
              answer:
                '**Cyber warfare** is the use of computer network attack and defence by a state, or by an actor backed by a state, to damage another state — its data, its infrastructure or its will — as part of a political or military conflict.\n\n| Level | What the attacker wants | Example | Physical effect |\n|---|---|---|---|\n| **Cyber espionage** | information — plans, designs, secrets | long-term intrusion into defence and research networks to steal documents | none directly; silent |\n| **Cyber sabotage** | damage to a specific system | Stuxnet damaged uranium centrifuges through manipulated control software | equipment destroyed |\n| **Full-scale cyber war** | coercion of a state and its population | coordinated attacks on power, banking, telecom and media during a conflict | national, public-facing |\n\n**The escalation criterion.** The levels are not separated by the tool but by the effect. Espionage changes nothing visible; sabotage destroys a target; war degrades a society. Attribution and the law change with the level too: theft is handled by criminal law, sabotage by national security law, and war by the law of armed conflict.\n\n**Why it matters for a student of cyber security.** A company that is hit by a state actor is not facing a normal criminal: the attacker has patience, resources and no need to monetise. Defence therefore shifts from blocking the intrusion to detecting long dwell time and protecting the control systems that touch the physical world.\n\n**Exam line:** espionage steals, sabotage breaks, war coerces — and the border between them is the physical effect, not the sophistication.',
              diagram: 'cyber-warfare',
              diagramCaption:
                'The three levels of cyber warfare — espionage, sabotage and full-scale cyber war — with the effect each produces.',
            },
          ],
        },
      ],
    },
    {
      number: 2,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Explain the seven phases of the cyber attack lifecycle and name the artefact that each phase leaves behind for an investigator.',
              explain:
                '**What is being asked.** A standard model of how an intrusion unfolds — reconnaissance, weaponisation, delivery, exploitation, installation, command and control, actions on objective. The extra demand here is the artefact: the trace each phase leaves, which is what turns the model into something a forensic investigator can use.\n\n**The artefacts.** Reconnaissance leaves scanning traffic in web server and firewall logs. Delivery leaves a mail header, a download or a USB record. Exploitation leaves a crash or an exploit signature. Installation leaves a new file, service or registry key. Command and control leaves periodic beacon traffic. Actions leave file access, exfiltration or deletion records.\n\n**Why the phases matter.** Defence is cheapest at the start and most expensive at the end: blocking reconnaissance or stopping delivery costs a rule, while cleaning a ransomware event costs a rebuild. The model is used to place a control at each phase.\n\n**How to score the 5 marks.** Seven phases named in order (3) · the artefact for each (1) · the break-early argument (1).',
              answer:
                'The **cyber kill chain** describes an intrusion as a sequence of phases. Each phase needs the previous one to succeed, so each phase is also a place to break the attack.\n\n| # | Phase | What happens | Artefact left behind |\n|---|---|---|---|\n| 1 | **Reconnaissance** | attacker collects information — port scans, DNS lookups, social profiles | scan entries in firewall, IDS and web server logs |\n| 2 | **Weaponisation** | payload is built and paired with an exploit | usually nothing on the victim side; builder artefacts on the attacker side |\n| 3 | **Delivery** | the payload is sent — mail attachment, link, USB, drive-by download | mail header, proxy log, USB connection record |\n| 4 | **Exploitation** | the flaw is triggered and code runs | crash dump, exploit signature, unusual child process |\n| 5 | **Installation** | persistence is established — service, scheduled task, startup key | new file, new service, registry run key, scheduled task |\n| 6 | **Command and control** | the implant contacts the attacker | periodic beacon to a rare domain, DNS or proxy log entry |\n| 7 | **Actions on objective** | theft, encryption, destruction or fraud | file access records, archive creation, exfiltration, deletion logs |\n\n**How the model is used.** For defence: a control is placed at every phase — web application firewall and footprint reduction at phase 1, mail filtering and user awareness at phase 3, patching at phase 4, application allow-listing at phase 5, egress filtering at phase 6, and data loss prevention plus backup at phase 7.\n\nFor investigation: the artefacts run in the same order, so an incident is reconstructed from the end backwards — the deletion record leads to the process, the process to the delivery mail, the mail to the reconnaissance scan.\n\n**Exam line:** seven phases, seven artefacts — defence breaks the chain early because the later phases are far more expensive to repair.',
              diagram: 'cyber-attacks-overview',
              diagramCaption:
                'The seven phase attack lifecycle with the artefact each phase leaves and where a defender can break the chain.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Differentiate malware, spyware and sniffing. State the damage caused by each and one control that limits it.',
              explain:
                '**What is being asked.** Three terms that students often blur. Malware is the family of hostile code that runs on a host. Spyware is malware whose specific purpose is secret observation. Sniffing is not code at all — it is the capture of network traffic, and it attacks confidentiality without touching the victim machine.\n\n**The distinction that carries marks.** Malware changes the host, spyware watches the user, sniffing watches the wire. Because the location is different, the control is different: anti-malware and patching for malware, behaviour monitoring and egress control for spyware, encryption and switched networks for sniffing.\n\n**Damage to name.** Ransomware destroys availability and integrity; keyloggers and spyware steal credentials and take intellectual property; sniffing exposes passwords, session cookies and unencrypted mail. Reputation and legal liability follow every one of them.\n\n**How to score the 5 marks.** Table of differences (2) · damage of each (2) · one control each (1).',
              answer:
                '**Malware** is any program written to damage, disrupt or gain unauthorised access to a system — virus, worm, trojan, ransomware, rootkit. **Spyware** is a class of malware whose purpose is to observe: keystrokes, screen, browser history, location, microphone. **Sniffing** is the passive capture of packets on a network segment; it needs no program on the victim host.\n\n| Point | Malware | Spyware | Sniffing |\n|---|---|---|---|\n| What it is | hostile code that executes on the host | hostile code that observes the user | capture of network traffic |\n| Where it lives | host — file, memory, boot sector | host — hidden process, browser extension | network — NIC in promiscuous mode or a mirror port |\n| Main target | availability, integrity | confidentiality | confidentiality |\n| Typical damage | encrypted files, destroyed data, backdoor access, crashed services | stolen passwords, banking credentials, trade secrets, location tracking | captured passwords, session cookies, unencrypted mail, metadata |\n| Control | patching, application allow-listing, anti-malware, backup | behaviour monitoring, egress filtering, mobile device management, permission review | TLS everywhere, switched networks, VPN, DHCP snooping, strong authentication |\n\n**One worked example for each.** A hospital hit by ransomware loses availability — the records exist but cannot be opened. A keylogger on a finance workstation loses confidentiality — the credentials of an online banking portal leave the organisation. Sniffing on an open Wi-Fi hotspot loses the session cookie of a mail account and the attacker reads the inbox without ever logging in.\n\n**Exam line:** malware attacks the machine, spyware attacks the person, sniffing attacks the wire — three different locations, three different controls.',
              diagram: 'threats-malware-spyware-sniffing',
              diagramCaption:
                'Malware, spyware and sniffing compared: where each one lives, what it damages, and the control that limits it.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain how an attacker gains access to a system. Describe any four techniques with the sign that each leaves in logs.',
              explain:
                '**What is being asked.** Gaining access is the phase where the attacker first obtains a usable foothold — a password, a session or a shell. The examiner wants four named techniques and, because this is a cyber security paper, the trace each leaves.\n\n**The four techniques.** Password attacks — brute force, dictionary, credential stuffing from a previous breach. Social engineering — a call or a mail that makes a user hand over the password or approve an MFA prompt. Exploiting a vulnerable service — an unpatched VPN, web form or RDP port. Default or weak configuration — factory passwords, exposed admin panels, open shares.\n\n**The traces.** Repeated failed logins from one source, a success from an unusual country or hour, a new device or a spike of MFA prompts, a service crash followed by an unexpected child process, a login with the vendor default account.\n\n**How to score the 5 marks.** Meaning of gaining access (1) · four techniques (2) · the log sign for each (2).',
              answer:
                '**Gaining access** is the phase in which the attacker converts information into a working foothold: a valid credential, a session token, or code running on the host. Everything after this phase depends on it, so this is where most detections are built.\n\n| Technique | How it is done | Log sign |\n|---|---|---|\n| **Password attack** | brute force, dictionary, or credential stuffing with passwords leaked from another site | many failed logins from one IP, then one success; a success from a new country or at 3 a.m. |\n| **Social engineering** | phishing mail, pretext call, or help-desk manipulation to reset a password or approve an MFA push | MFA prompts the user did not initiate; password reset through the help desk; a login from a new device immediately after |\n| **Service exploitation** | attack an unpatched web form, VPN appliance, or exposed RDP or SSH port | service crash, unusual child process, web request with a very long or encoded parameter |\n| **Weak configuration** | vendor default credentials, exposed admin panel, open file share, unused account still enabled | login with the default account name, admin panel access from the internet, bulk file reads from a share |\n\n**Two supporting techniques worth a line.** Session hijacking — stealing a cookie after a successful login, so the log shows one user with two devices in two countries. Physical access — an unattended unlocked workstation or a stolen laptop, which leaves no network log at all but does leave a badge or CCTV record.\n\n**Why the log sign matters.** Gaining access cannot be prevented completely — a valid password is indistinguishable from the real user. What can be built is detection: impossible travel, first-seen device, spike of MFA prompts, and an alert on default account logins. Detection at this phase is the difference between an incident contained in a day and one discovered after six months.\n\n**Exam line:** the attacker needs only one credential or one unpatched service, so the defence is not only to block but to notice the first success.',
              diagram: 'gaining-access',
              diagramCaption:
                'Four ways an attacker gains access — password attack, social engineering, service exploitation and weak configuration — with the log sign of each.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain the techniques used to hide files and cover tracks on a compromised system, and state how an investigator detects each.',
              explain:
                '**What is being asked.** After access, the attacker hides and cleans. Hiding files means making the payload difficult to find; covering tracks means removing the evidence of the intrusion. The examiner wants both halves and, for a forensics-oriented paper, the counter-evidence for each.\n\n**Hiding techniques.** Hidden and system attributes, alternate data streams on NTFS, rootkits, steganography inside images, renamed extensions, files placed in trusted directories, and living-off-the-land binaries. **Covering tracks.** Clearing event logs, changing timestamps, deleting shell history, removing user accounts, disabling auditing, and wiping slack space.\n\n**The detection idea that carries marks.** No cleaning is perfect: clearing the log leaves a log-cleared event (1102), changing a timestamp leaves a mismatch between $STANDARD_INFO and $FILE_NAME, and a rootkit leaves a difference between what the API reports and what the disk contains.\n\n**How to score the 5 marks.** Hiding techniques (2) · covering techniques (2) · one detection each for the two you name (1).',
              answer:
                'After gaining access, an attacker hides the payload and removes the traces of the intrusion. Both actions are evidence in themselves.\n\n**A. Hiding files**\n- **Hidden and system attributes** — the file exists but the normal directory listing omits it.\n- **Alternate data streams (NTFS)** — payload stored in a second stream of an innocent file; `dir /r` or a forensic stream parser reveals it.\n- **Rootkit** — the kernel-level kit hides processes, files and registry keys from the operating system itself.\n- **Steganography** — data embedded in the pixels of an image or the silence of an audio file.\n- **Masquerading** — a payload named `svchost.exe`, kept in a trusted folder, with the icon of a system tool.\n- **Living off the land** — only signed system binaries are used, so no new file is dropped at all.\n\n**B. Covering tracks**\n- **Log clearing** — Event Viewer logs wiped, or `wevtutil` used to clear a channel.\n- **Timestamp manipulation** — file times set back with `timestomp`, so the payload appears older than the intrusion.\n- **Account and artefact removal** — the created user deleted, scheduled tasks removed, shell history truncated.\n- **Auditing disabled** — policy switched off so that the following activity is never recorded.\n- **Wiping** — `cipher /w`, `sdelete` or a full disk wipe to destroy slack and unallocated space.\n\n| Technique | Detection |\n|---|---|\n| log cleared | Event ID 1102 (log cleared) and 104; a gap in the sequence of record IDs |\n| timestamps changed | `$STANDARD_INFO` timestamp differs from `$FILE_NAME` timestamp in the MFT |\n| rootkit | memory image compared with disk contents; cross-view difference between API listing and raw disk |\n| hidden stream or hidden file | `dir /r`, MFT parsing, and a count of entries against the directory listing |\n| wiped free space | a volume with free space but no recoverable fragments, which is itself abnormal |\n\n**The forensic point.** A negative finding is evidence too. If the logs of the exact window of the intrusion are missing while neighbouring windows are intact, the absence proves the cleanup — and that is what the report states.\n\n**Exam line:** hiding and cleaning are actions, and every action leaves a counter-artefact — the log-cleared event, the timestamp mismatch, the rootkit cross-view difference.',
              diagram: 'covering-tracks',
              diagramCaption:
                'Techniques used to cover tracks on a compromised system and the counter-artefact that reveals each one.',
            },
          ],
        },
      ],
    },
    {
      number: 3,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Explain the cyber forensics investigation process from identification to reporting, naming the output of every phase.',
              explain:
                '**What is being asked.** The standard seven phase investigation model — identification, preservation, acquisition, examination, analysis, documentation, reporting. The examiner wants the sequence and, for full marks, the deliverable produced at the end of each phase.\n\n**Why the sequence cannot be changed.** Preservation must precede acquisition, because acquisition without a write blocker destroys the original. Examination must precede analysis, because analysis on unverified data is an opinion, not evidence. Reporting comes last, because the report states what the evidence supports and what it does not.\n\n**The deliverables.** Incident ticket, signed evidence bag with hash, forensic image with SHA-256, extracted artefacts, timeline, case notes, expert report.\n\n**How to score the 5 marks.** Seven phases in order (3) · output of each phase (1) · the point that the order protects admissibility (1).',
              answer:
                '**Cyber forensics** is the science of collecting, preserving and analysing digital evidence so that it can be presented in a court or a disciplinary hearing. It follows a fixed process because the process, not only the finding, is what makes evidence admissible.\n\n| Phase | What is done | Output |\n|---|---|---|\n| **1. Identification** | incident detected; scope, authority and legal basis fixed; what devices and data are involved | incident ticket with scope and authorisation |\n| **2. Preservation** | scene secured; devices isolated without powering off; volatile data captured first | evidence bag, seal, custody form, memory dump |\n| **3. Acquisition** | bit-stream copy through a write blocker; hash before and after | forensic image plus SHA-256 of original and copy |\n| **4. Examination** | data extracted and filtered — deleted files, registry, logs, mail, browsing | extracted artefact set, verified against the hash |\n| **5. Analysis** | artefacts correlated into a timeline to answer who, what, when, how | timeline and findings linked to each artefact |\n| **6. Documentation** | every action, tool, version and result recorded as it happens | contemporaneous case notes and tool log |\n| **7. Reporting** | findings stated with the evidence that supports each, limitations stated | expert report and testimony |\n\n**Why the order protects the evidence.** Every phase depends on the integrity of the previous one. A copy that was made without a write blocker cannot be defended in cross-examination, however good the analysis. A report that cannot show the hash of the image cannot prove that the data analysed is the data seized.\n\n**Exam line:** identification, preservation, acquisition, examination, analysis, documentation, reporting — the sequence is the admissibility.',
              diagram: 'cf-process',
              diagramCaption:
                'The seven phase cyber forensics investigation process with the deliverable produced at the end of each phase.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'What is digital evidence? Explain the rules of digital evidence and the chain of custody with an example.',
              explain:
                '**What is being asked.** Digital evidence is any information of probative value stored or transmitted in binary form. The examiner wants the rules that make it acceptable — authenticity, integrity, completeness, reproducibility, legality — and the chain of custody that proves it was not changed.\n\n**The rules in one line each.** Authenticity — prove where it came from (hash, signer, device serial). Integrity — prove it was not altered (hash before and after, write blocker). Completeness — show the exculpatory material too, not only the incriminating. Reproducibility — another examiner with the same tools must reach the same result. Legality — the evidence must have been obtained under lawful authority.\n\n**Chain of custody.** A record of every person who handled the evidence, when, where and why, with signatures and seals. A single unrecorded gap allows the defence to claim tampering.\n\n**How to score the 5 marks.** Definition (1) · four or five rules (2) · chain of custody with an example (2).',
              answer:
                '**Digital evidence** is information of probative value that is stored or transmitted in digital form — a disk image, a memory dump, a mail header, a call detail record, a CCTV file, a server log, a photograph with EXIF data.\n\n**Rules that make digital evidence acceptable**\n\n| Rule | What it demands | How it is proved |\n|---|---|---|\n| **Authenticity** | this is the data that came from that device | hash at seizure, device serial in the report, signature on the mail |\n| **Integrity** | it has not been altered since seizure | SHA-256 of the original and of the working copy, write blocker log |\n| **Completeness** | the whole picture, including material that helps the accused | exculpatory artefacts documented, not filtered away |\n| **Reproducibility** | another expert with the same tools reaches the same result | tool name and version recorded, method documented |\n| **Legality** | obtained under a warrant, consent or statutory power | authority quoted in the report, scope respected |\n\n**Chain of custody** is the documented history of the evidence: who collected it, who transported it, who stored it, who analysed it, and when at each step. It is maintained with an exhibit number, a seal, a signature at every transfer, and a storage log.\n\n**Worked example.** Police seize a laptop on 3 March at 10:40. The officer photographs it, notes the serial number, places it in an anti-static bag with a tamper-evident seal, and signs the custody form. The lab receives it at 14:00 the same day and records the seal as intact. The examiner images the disk through a write blocker, computes SHA-256, and works only on the copy. At trial the defence asks whether the data could have been changed: the answer is the seal records, the hash pair and the tool log — four documents that close every gap.\n\n**Exam line:** authenticity shows where the evidence came from, integrity shows that it did not change, the chain of custody shows that nobody had the chance to change it.',
              diagram: 'cf-evidence',
              diagramCaption:
                'Rules of digital evidence — authenticity, integrity, completeness, reproducibility, legality — and the chain of custody that supports them.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain any five challenges faced in cyber forensics and give the counter-measure for each.',
              explain:
                '**What is being asked.** Forensics is difficult for practical reasons; the examiner wants them named with a counter-measure, because a student who only lists problems has described the world rather than the discipline.\n\n**The five to use.** Encryption — the evidence exists but cannot be read. Data volume — terabytes of storage, only a small part relevant. Volatility — memory and connections vanish when power is removed. Cloud and jurisdiction — the data is not on the seized device and not in the country. Anti-forensics — the attacker has cleaned, and this costs examiner time. Tools, skills and cost — analyst shortage and backlog.\n\n**The counter-measures.** Key recovery and legal compulsion; triage and targeted imaging; memory capture first; mutual legal assistance and provider requests; detection through counter-artefacts; automation and training.\n\n**How to score the 5 marks.** Five challenges (3) · counter-measure for each (2).',
              answer:
                'Cyber forensics faces a fixed set of practical obstacles. Each has a known counter-measure.\n\n| Challenge | Why it hurts | Counter-measure |\n|---|---|---|\n| **Encryption** | the image is seized but the content is unreadable; full-disk and container encryption | key recovery from memory or TPM, lawful compulsion to disclose, dictionary attack on weak passphrases, analysis of unencrypted artefacts |\n| **Data volume** | a laptop holds terabytes; imaging and analysis can take weeks | triage first, targeted imaging of relevant partitions, keyword and hash-set filters, automation |\n| **Volatility** | RAM, connections, logged-in sessions disappear when power is removed | capture memory and live state before shutdown, documented in the order of volatility |\n| **Cloud and jurisdiction** | data sits with a provider, often in another country, on shared infrastructure | provider request or mutual legal assistance, API audit logs and tenant-side evidence, contract clauses |\n| **Anti-forensics** | logs cleared, timestamps altered, files wiped | cross-check multiple sources: MFT, USN journal, event 1102, EDR telemetry, network flow |\n| **Tools, skills and cost** | few trained examiners, long backlog, expensive licences | validated open-source tools, NIST CFTT testing, training pipeline, automation of routine steps |\n\n**The pattern to state in the answer.** Every challenge reduces to one of three things: the evidence is hidden, the evidence is huge, or the evidence is somewhere you do not control. The counter-measure is therefore always one of: read it another way, reduce the haystack, or get lawful access to the other location.\n\n**Exam line:** encryption, volume, volatility, jurisdiction, anti-forensics, resources — six obstacles, and each one has a documented counter-source.',
              diagram: 'cf-challenges',
              diagramCaption:
                'Challenges in cyber forensics — encryption, data volume, volatility, cloud and legal limits, anti-forensics, resources — with the counter-measure for each.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain anti-forensics. Describe four techniques used to defeat an investigation and the detection method for each.',
              explain:
                '**What is being asked.** Anti-forensics is the attacker side of the discipline: destruction, hiding, trail obfuscation and evasion of analysis tools. The examiner wants four techniques and, for a security paper, the detection for each.\n\n**The four groups.** Data destruction (wipe, shred, cryptographic erase, disk destruction). Data hiding (encryption, steganography, hidden partitions, alternate streams). Trail obfuscation (log clearing, timestamp changes, MAC spoofing). Analysis evasion (packing, obfuscation, VM detection, rootkits, sleep timers).\n\n**The detection line that earns the mark.** Detection does not try to recover what was destroyed; it proves that destruction happened. A cleared log, a wiped volume, a timestamp mismatch and a packed binary that never unpacks are all findable, and the tampering itself becomes evidence of intent.\n\n**How to score the 5 marks.** Definition and four groups (2) · four techniques explained (2) · detection for each (1).',
              answer:
                '**Anti-forensics** is the set of tools and techniques used by an attacker to prevent or mislead an investigation — to destroy the evidence, hide it, or waste the examiner time until it is useless.\n\n| Group | Technique | What the attacker gains | Detection |\n|---|---|---|---|\n| **Data destruction** | secure wipe of free space, `sdelete`, `cipher /w`, cryptographic erase of a self-encrypting disk | no recoverable fragments | a volume whose free space contains no fragments at all, and a destroy log or key rotation record |\n| **Data hiding** | encryption, steganography in images, hidden partition, alternate data streams | content unreadable or invisible | entropy analysis, unexpected partition table entries, streams listed by a forensic parser |\n| **Trail obfuscation** | clear event logs, change file times, spoof MAC, `timestomp` | the sequence of events disappears | Event 1102 and 104, MFT timestamp mismatch, switch MAC table against DHCP lease |\n| **Analysis evasion** | packer or crypter, obfuscated script, VM detection, rootkit, sleep timer | tools fail to run or the sample dies on analysis | packed section entropy, memory-vs-disk cross-view, delayed callback caught by long-dwell monitoring |\n\n**The important principle.** Anti-forensics does not erase the truth — it only hides it, and the hiding leaves traces. A destroyed log is itself an event; a wiped volume is itself an anomaly; a packed binary that never unpacks is itself suspicious. The examiner records the tampering and the investigation moves to the counter-artefact: USN journal, $MFT, EDR telemetry, network flow, cloud audit log, DLP record.\n\n**Exam line:** the goal of anti-forensics is not to erase but to delay — so the answer is to look at a second source and to treat the cleanup as evidence.',
              diagram: 'cf-antiforensics',
              diagramCaption:
                'Anti-forensics groups — destruction, hiding, trail obfuscation, analysis evasion — and the counter-artefact that exposes each.',
            },
          ],
        },
      ],
    },
    {
      number: 4,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Define digital forensics and explain its golden rules. State the order of volatility and why it decides the sequence of collection.',
              explain:
                '**What is being asked.** Digital forensics is the discipline that finds, preserves and explains digital evidence so that it survives a courtroom. The examiner wants the definition, the golden rules and the order of volatility, because together they explain why the collection is done in a fixed sequence.\n\n**The golden rules.** Do not alter the original — work on a copy made through a write blocker. Hash everything — before and after. Document every action — tool, version, time, examiner. Prove reproducibility — another expert must reach the same result.\n\n**Order of volatility.** Registers and cache, then RAM and running connections, then swap and temporary files, then disk, then remote logs and backups. The most volatile is collected first because it disappears first.\n\n**How to score the 5 marks.** Definition (1) · golden rules (2) · order of volatility with the reason (2).',
              answer:
                '**Digital forensics** is the application of a documented, repeatable method to identify, preserve, acquire, examine and analyse digital evidence, and to present the findings so that a court or a disciplinary panel can rely on them.\n\n**The golden rules**\n1. **Never work on the original** — every examination runs on a verified bit-stream copy; the original is sealed.\n2. **Always use a write blocker** — hardware or software, so that the act of copying cannot change the source.\n3. **Hash before and after** — SHA-256 of the source and of the copy; a matching hash proves the copy is faithful.\n4. **Document every action** — who, what, when, with which tool and version, and the result.\n5. **Reproducibility** — an independent examiner with the same evidence and tools must obtain the same result.\n6. **Legality** — the seizure and the search must stay inside the warrant or the statutory power.\n\n**Order of volatility** (most perishable first)\n\n| Order | Source | Why it must come first |\n|---|---|---|\n| 1 | registers, cache, running processes | lost in seconds; gone on power removal |\n| 2 | RAM, network connections, logged-in sessions, encryption keys | lost on shutdown |\n| 3 | swap, temporary files, page file | overwritten as the system works |\n| 4 | disk — files, deleted files, slack, MFT | stable, but changes with every write |\n| 5 | remote logs, cloud audit, backups, provider records | stable, but retention may delete them |\n\n**Why the order decides the sequence.** Anything that disappears when power is removed must be captured before the machine is switched off, so a laptop is not shut down at the scene: memory is captured first, then the disk is imaged. The rule is simple — collect the most perishable first, because the order cannot be reversed.\n\n**Exam line:** do not alter, always hash, always document, always reproduce — and collect volatiles before they evaporate.',
              diagram: 'df-intro',
              diagramCaption:
                'Digital forensics scope and golden rules, with the order of volatility that fixes the sequence of collection.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain the properties of digital evidence, dividing them into technical properties and evidentiary properties.',
              explain:
                '**What is being asked.** Two families of property. Technical properties describe the nature of digital data as data: latent, fragile, volatile, duplicable, voluminous, time-sensitive, easy to transport. Evidentiary properties describe what a court asks of it: authenticity, integrity, completeness, accuracy, granularity, reliability, relevance, legality.\n\n**Why the split matters.** A technical property explains why handling is difficult; an evidentiary property explains why handling matters. The answer must connect them: because data is volatile, integrity is hard to prove; because data is duplicable, authenticity must be argued.\n\n**How to score the 5 marks.** Technical properties (2) · evidentiary properties (2) · the connection between them (1).',
              answer:
                'Digital evidence has two sets of properties: what the data is, and what the court needs from the data.\n\n**A. Technical properties — nature of the data**\n\n| Property | Meaning | Consequence |\n|---|---|---|\n| **Latent** | invisible until interpreted by a tool | a log line, an MFT record or a packet means nothing without an expert |\n| **Fragile** | one write, one mount or one boot changes it | a write blocker and a hash are mandatory |\n| **Volatile** | exists only while power is on | memory and connections must be captured first |\n| **Duplicable** | a perfect copy can be made | analysis runs on the copy, the original is sealed |\n| **Voluminous** | a single disk holds lakhs of files | triage and filtering are needed before analysis |\n| **Time-sensitive** | logs rotate, providers delete, RAM clears | collection must start immediately |\n| **Transportable** | the evidence travels easily | custody becomes the weak point, not the data |\n\n**B. Evidentiary properties — what the court asks**\n- **Authenticity** — this data came from that device or account.\n- **Integrity** — it did not change between seizure and court.\n- **Completeness** — the whole picture, including exculpatory material.\n- **Accuracy** — the tool and the method are correct and validated.\n- **Granularity** — the evidence answers the exact question asked, not a general one.\n- **Reliability** — the same result is obtained on repetition.\n- **Relevance** — it bears on the fact in issue.\n- **Legality** — it was obtained lawfully.\n\n**The connection.** Each technical property creates an evidentiary obligation. Because data is fragile, integrity requires hashing and a write blocker. Because it is duplicable, authenticity requires a chain of custody that shows which copy was examined. Because it is latent, accuracy requires a validated tool and an expert who can explain the output.\n\n**Exam line:** the technical properties say why digital evidence is hard to handle; the evidentiary properties say what the handling must prove.',
              diagram: 'df-properties',
              diagramCaption:
                'Properties of digital evidence — technical properties of the data and the evidentiary qualities a court requires.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain how digital evidence is recovered and preserved at a scene. Describe the role of the write blocker, hashing and evidence sealing.',
              explain:
                '**What is being asked.** The practical sequence at a scene: secure, photograph, preserve volatile data, isolate the device, image it, hash it, seal it, and log every step. The examiner wants the three specific controls — write blocker, hashing, sealing — explained, not merely named.\n\n**Write blocker.** A device or software layer that permits reads and blocks every write command, so the act of copying cannot modify the source.\n\n**Hashing.** A one-way cryptographic digest of the entire image; two matching SHA-256 values prove the copy is bit-identical to the original.\n\n**Sealing.** A tamper-evident bag with a signed label; a broken seal is itself documented.\n\n**How to score the 5 marks.** Recovery sequence (2) · write blocker, hashing and sealing explained (2) · preservation of volatile data first (1).',
              answer:
                'Recovery is done in a fixed order so that nothing is changed before it is captured.\n\n**Step 1 — preserve.** Secure the scene, photograph the device in place, note the serial number and the state of the screen. Capture volatile data first: RAM, running processes, network connections, logged-in users. Never shut down a running machine before memory is captured.\n\n**Step 2 — isolate.** Disconnect the device from the network, but do not power it off; keep it charged and, if it is a mobile phone, place it in a Faraday bag so that a remote wipe command cannot arrive.\n\n**Step 3 — acquire.** Make a bit-stream copy of the disk through a write blocker; for a mobile device, use the supported extraction level (logical, file system or full).\n\n**The three controls that make the copy usable**\n\n| Control | What it does | Why it matters in court |\n|---|---|---|\n| **Write blocker** | allows read commands, blocks every write command from reaching the source | proves the original was not changed by the act of copying |\n| **Hashing** | SHA-256 of the original and of the copy, compared and recorded | proves the copy is bit-identical; a mismatch invalidates the copy |\n| **Sealing** | tamper-evident bag, signed label, seal number recorded on the custody form | proves nobody had access between transfers |\n\n**Step 4 — document.** Exhibit number, date and time, examiner, tool and version, hash values, storage location: all recorded at the moment of action, not afterwards.\n\n**Why each step exists.** A write blocker protects integrity during acquisition; hashing proves integrity after acquisition; sealing protects integrity between transfers. Remove any one and the other two cannot compensate, because the gap is exactly where the defence will point.\n\n**Exam line:** copy without altering, hash to prove the copy, seal to prove the custody — three controls, one chain of trust.',
              diagram: 'df-recover',
              diagramCaption:
                'Recovering and preserving digital evidence at a scene, with the write blocker, hashing and sealing controls that protect it.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Describe the hardware and software used in a digital forensics laboratory. Explain why a hardware write blocker is preferred over a software one.',
              explain:
                '**What is being asked.** A laboratory inventory question with an argument. Hardware: write blocker, duplicator, forensic workstation, mobile kit, Faraday bag, ESD kit, signal-shielded enclosure. Software: imaging (FTK Imager, EnCase, dd, Guymager), analysis (Autopsy, X-Ways, NUIX), memory (Volatility, Rekall), timeline (Plaso, Timesketch), carving (PhotoRec, Scalpel), mobile (Cellebrite UFED, Oxygen), verification (hash utilities).\n\n**The argument.** A software write blocker runs on an operating system that may itself write — mounting, journaling, updating last-access time. A hardware blocker sits between the drive and the bus and enforces read-only at the electrical level, so it cannot be bypassed by an OS bug or a driver.\n\n**How to score the 5 marks.** Hardware list (2) · software list with purpose (2) · the hardware-versus-software argument (1).',
              answer:
                'A forensics laboratory is built so that evidence can be read without being changed, and so that every result can be reproduced.\n\n**Hardware**\n\n| Item | Purpose |\n|---|---|\n| **Hardware write blocker** | enforces read-only access at the interface level for SATA, NVMe, USB and SAS drives |\n| **Forensic duplicator** | makes a bit-stream copy without a computer, and computes the hash built in |\n| **Forensic workstation** | dedicated analysis machine, isolated from the network, with verified tools |\n| **Mobile extraction kit** | logical, file system and physical extraction from phones and tablets |\n| **Faraday bag or shield box** | blocks radio signals so that a phone cannot be wiped or tracked remotely |\n| **ESD kit and anti-static bags** | protects components and preserves physical trace evidence |\n| **Reference and clean media** | known-good blank drives for images, with serials recorded |\n\n**Software**\n- **Imaging** — FTK Imager, EnCase, Guymager, `dd` for raw copies.\n- **Analysis** — Autopsy, X-Ways, NUIX, Magnet AXIOM for file system and artefact review.\n- **Memory** — Volatility, Rekall for processes, connections and keys.\n- **Timeline** — Plaso and Timesketch to merge artefacts into one chronology.\n- **Recovery** — PhotoRec, Scalpel for carving files from unallocated space.\n- **Mobile** — Cellebrite UFED, Oxygen Forensic Detective.\n- **Verification** — SHA-256 utilities, and NIST CFTT test results for each tool.\n\n**Why hardware is preferred over software**\n1. A **software write blocker** runs on an operating system; the OS may mount the volume, update timestamps, write a journal entry or load a driver that writes — and a bug in any of these silently changes the evidence.\n2. A **hardware write blocker** sits on the bus and rejects every write command electrically, before the operating system can issue it. It cannot be bypassed by a driver, a patch or a kernel bug.\n3. It is **independently testable** — the blocker is tested against NIST criteria and the result is documented, which is exactly the kind of proof a court accepts.\n\nWhere software blocking is used at all — very new interfaces before a hardware blocker exists — the examiner documents the risk and hashes the source before and after to show that nothing changed.\n\n**Exam line:** hardware blocks writes on the wire, software blocks writes on trust — and evidence is never built on trust.',
              diagram: 'df-hw-sw',
              diagramCaption:
                'The forensic hardware and software stack, and the reasons a hardware write blocker is preferred to a software one.',
            },
          ],
        },
      ],
    },
    {
      number: 5,
      marks: 10,
      kind: 'pair',
      note: '10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5',
      options: [
        {
          label: 'a',
          parts: [
            {
              marks: 5,
              label: 'a',
              question:
                'Define social engineering and explain its three categories — human based, computer based and socio-technical — with one example each.',
              explain:
                '**What is being asked.** Social engineering is the manipulation of a person so that the person performs the action the attacker wants: reveals information, grants access or approves a transaction. The examiner wants the definition, the three categories, and one example each.\n\n**The categories.** Human based — face to face or voice, no technology: impersonation, tailgating, shoulder surfing, dumpster diving. Computer based — the same manipulation delivered by mail, web or phone: phishing, vishing, smishing, pharming, clone sites. Socio-technical — both at once: fake apps with OAuth consent, deepfake video with a payment request, MFA fatigue with a help-desk call.\n\n**The line that carries marks.** In all three categories the attacker collects context, builds a believable reason, then makes a small request — and the victim, not the attacker, takes the action.\n\n**How to score the 5 marks.** Definition and the trust point (1) · three categories with examples (3) · the shared pattern (1).',
              answer:
                '**Social engineering** is the use of psychological manipulation to persuade a person to break a security rule — to reveal information, click a link, approve a push, or transfer money. The technology is only the delivery channel; the target is the person.\n\n| Category | Method | Example |\n|---|---|---|\n| **Human based** | direct interaction, face to face or voice, no technical tool | an attacker in a courier uniform asks to use the printer room and walks past the badge door; a caller claims to be from IT and asks for the password |\n| **Computer based** | the same manipulation delivered through mail, web, SMS or a call system | a phishing mail with a cloned login page; a vishing call showing the bank number; a smishing SMS about a parcel |\n| **Socio-technical** | a human pretext combined with a technical tool | a fake app requesting OAuth consent, so the token is granted legally; a deepfake video call followed by a payment instruction; MFA fatigue calls until the user approves the push |\n\n**The shared pattern.** In every category the attacker does three things: **collects context** (who approves payments, which vendors are used, what the ticket format looks like), **builds a believable reason** (an audit, a new policy, an urgent delivery), and **makes a small request** (a link, an OTP, a badge, a one-time approval). The victim performs the action, so the system records a legitimate user doing a legitimate-looking thing.\n\n**Why it works.** The lever is not stupidity but normal behaviour: respect for authority, a wish to help, urgency, fear of penalty, and the habit of trusting a familiar name. Training reduces the success rate; it does not remove the lever.\n\n**Exam line:** social engineering exploits trust, not technology — the attacker only has to find the person who will do the small favour.',
              diagram: 'se-categories',
              diagramCaption:
                'The three categories of social engineering — human based, computer based and socio-technical — with examples of each.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain the phases of a social engineering attack and the defence that belongs to each phase.',
              explain:
                '**What is being asked.** The attack is a campaign, not an event: research, hook, play, exit — the Mitnick model — and at every phase the attacker leaves something a defender can act on.\n\n**The phases.** Research — collect names, roles, vendors, tools, schedules from mail, social media, the website. Hook — make contact with a pretext that fits the research. Play — execute the objective: extract data, get a click, get an approval. Exit — cover the trail, remove evidence, keep the relationship alive for the next attempt.\n\n**The defence for each.** Research — reduce the public footprint and never publish org charts and vendor lists. Hook — verify through a separate channel, and make verification the rule rather than the exception. Play — technical controls that do not depend on the user: MFA with number matching, least privilege, DLP. Exit — monitoring for anomalies and a culture where people report that they were approached.\n\n**How to score the 5 marks.** Four phases (2) · defence for each (2) · the statement that exit is not the end (that a failed attempt is followed by another) (1).',
              answer:
                'A social engineering attack follows the **Mitnick model**: research, hook, play, exit. Every phase produces both an opportunity for the attacker and a control point for the defender.\n\n| Phase | What the attacker does | Signal it leaves | Defence |\n|---|---|---|---|\n| **1. Research** | collects names, roles, reporting lines, vendors, software and travel plans from mail, social media and the website | unusual profile views, an out-of-pattern message, a visitor at reception asking questions | reduce the public footprint; do not publish org charts; make verification normal |\n| **2. Hook** | first contact with a pretext that matches the research — a delivery, an audit, a court notice | first contact from an unknown sender or number, an unusual domain, urgency in the first line | verify out of band: call the known number, open the portal directly, never use the link |\n| **3. Play** | executes the objective: a click, an OTP, a badge, a payment approval, a data copy | the action itself — an MFA approval, a payment to a new beneficiary, a bulk download | number-matching MFA, least privilege, dual approval for payments, DLP alert |\n| **4. Exit** | covers the trail, removes artefacts, keeps the channel warm for the next attempt | log clearing, mail rule creation, contact that continues after the "issue" is closed | monitoring for anomalies, mail-rule audit, a reporting culture so that attempts are shared not hidden |\n\n**The phase students forget.** Exit is not the end of the attack; it is the preparation for the next one. A campaign repeats with a better pretext, so a failed attempt is only a rehearsal. The defender who treats one blocked mail as a closed case has missed the pattern.\n\n**How the phases combine.** Because research comes first, the cheapest defence is the smallest public footprint. Because the hook is the first human contact, the most reliable defence is out-of-band verification. Because play depends on a user action, the strongest defence is a technical control the user cannot override.\n\n**Exam line:** research, hook, play, exit — and every phase has one defence: less information, verify separately, limit the power of one approval, and watch the exit.',
              diagram: 'se-phases',
              diagramCaption:
                'The four phases of a social engineering attack — research, hook, play, exit — with the signal and the defence for each.',
            },
          ],
        },
        {
          label: 'c',
          parts: [
            {
              marks: 5,
              label: 'c',
              question:
                'Explain the anatomy of a phishing attack and describe the layers of defence against it.',
              explain:
                '**What is being asked.** Phishing is the most common social engineering delivery. The examiner wants the anatomy — sender, pretext, payload, pressure — and the defence chain, because defence is layered and no single layer works alone.\n\n**Anatomy.** A sender address that looks close to the real one; a pretext that fits the recipient (invoice, delivery, password expiry, court notice); a payload — a link to a cloned page, an attachment, a QR code, a form; and pressure — a deadline, an account block, a penalty.\n\n**Defence layers.** Mail authentication (SPF, DKIM, DMARC) at the gateway; link and attachment sandboxing; MFA that resists relay; a rule to never log in from a link; a reporting button; and the ability to revoke a session quickly when a report arrives.\n\n**How to score the 5 marks.** Anatomy with four ingredients (2) · defence chain four layers (2) · the statement that one layer is never enough (1).',
              answer:
                '**Phishing** is a message that impersonates a trusted party so that the recipient performs an action: opens a link, enters credentials, approves an MFA push, or opens an attachment. It is a social engineering attack with a technical payload.\n\n**Anatomy — four ingredients**\n1. **Sender** — a look-alike domain (`paypa1.com`, `icici-verify.net`), a display name of a known person, or a compromised real account.\n2. **Pretext** — a story that fits the recipient: an unpaid invoice, a parcel held at customs, a password that will expire, a court notice, a share of a document.\n3. **Payload** — a link to a cloned login page, a credential-harvesting form, an attachment with a macro, a QR code that leads to a malicious page.\n4. **Pressure** — a deadline, the fear of losing access, the fear of a penalty, or a request framed as urgent help from a senior.\n\n**Defence chain**\n\n| Layer | Control | What it stops |\n|---|---|---|\n| **Mail gateway** | SPF, DKIM, DMARC, look-alike domain detection, blocklists | forged sender and spoofed domain |\n| **Content** | link rewriting, sandbox detonation of attachments, QR scanning | credential page and malicious file |\n| **Identity** | MFA with number matching or FIDO2, conditional access, impossible-travel alert | stolen password and relayed OTP |\n| **User** | rule to open the portal directly, never from a link; one-click report button | the click itself, and fast reporting |\n| **Response** | session revocation, password reset, hunt for other recipients of the same mail | spread within the organisation |\n\n**Why one layer is not enough.** Mail filtering fails on a compromised genuine account; MFA fails if the user approves a push; the user fails on a good pretext. Each layer catches what the previous one missed, and the last layer — fast reporting with a working response — limits the damage when everything else fails.\n\n**Exam line:** sender, pretext, payload, pressure — four ingredients; gateway, identity, user, response — four layers that answer them.',
              diagram: 'se-phishing',
              diagramCaption:
                'Phishing anatomy — sender, pretext, payload and pressure — with the defence chain that answers each ingredient.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain the insider attack. Describe its types and lifecycle, and state why perimeter security does not stop it.',
              explain:
                '**What is being asked.** An insider is a person who already has legitimate access — an employee, a contractor, a vendor, a former employee whose account was never disabled. The examiner wants the types, the lifecycle and the argument that perimeter defence is blind to this class.\n\n**Types by intent.** Malicious — deliberate theft or sabotage. Negligent — an accidental exposure, a misdirected mail, a lost USB. Compromised — an outsider using a genuine insider account after phishing or coercion. Infiltrator — a person recruited or planted to work from inside.\n\n**Lifecycle.** Motive, access, collection, exfiltration, cover-up. The controls sit at each stage: monitoring, least privilege, DLP, and exit process.\n\n**Why perimeter fails.** The insider is already inside; their traffic is legitimate; their credentials are valid; their action looks like normal work. Only behaviour — volume, time, resource — differs.\n\n**How to score the 5 marks.** Definition (1) · types (2) · lifecycle (1) · the perimeter argument (1).',
              answer:
                'An **insider attack** is an attack carried out by a person who already holds legitimate access to the organisation — an employee, a contractor, a vendor engineer or a former employee whose account is still active.\n\n**Types by intent**\n\n| Type | Intent | Example |\n|---|---|---|\n| **Malicious** | deliberate harm or theft | an employee copies the customer database before resigning |\n| **Negligent** | accidental, no intent | a misdirected mail with an attachment, a lost USB, a public cloud link |\n| **Compromised** | an outsider using a genuine insider | an attacker who phished the account and operates as that user |\n| **Infiltrator** | a person planted or recruited to work from inside | a fake contractor hired to reach a specific system |\n\n**Lifecycle**\n1. **Motive** — greed, grievance, ideology, coercion.\n2. **Access** — uses the access already granted; may request extra permission quietly.\n3. **Collection** — bulk download, mail forwarding, screenshots, USB copy.\n4. **Exfiltration** — mail, cloud sync, USB, print, or a personal device on the network.\n5. **Cover-up** — log familiarity, deletion, timing inside the notice period.\n\n**Why perimeter security does not stop it.** The insider does not break in — the door is open for them. Their credentials are valid, their device is managed, their traffic is inside the tunnel, and their action is indistinguishable from work. A firewall, an IPS and a VPN are all designed to keep strangers out, and the insider is not a stranger.\n\n**What does work.** Behaviour-based detection — user and entity behaviour analytics, DLP on egress, alert on bulk archive creation and on mass download, least privilege with quarterly access review, separation of duties, a clean exit process that disables access on the last working hour, and monitoring of the notice period, which is the highest-risk window.\n\n**Exam line:** an insider has legitimate access — so watch behaviour, not permission.',
              diagram: 'se-insider',
              diagramCaption:
                'Insider attack types by intent and the five stage lifecycle, with the detection and prevention control for each stage.',
            },
          ],
        },
      ],
    },
  ],
};
