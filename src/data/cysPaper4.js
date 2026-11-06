// Cyber Security Paper 4 — Model Paper (6 + 4 division)
//
// Second 6 + 4 paper: every question is (a) 6 + (b) 4, with a 6 + 4 OR set.
//
// Topic map (all different from Papers 1, 2 and 3):
//   Unit 1 — 1.12 international conventions, 1.14 cyber security framework,
//            1.16 IT Act provisions and penalties, 1.8 critical infrastructure
//   Unit 2 — 2.12 cyber stalking and 2.17 spamming, 2.13 software piracy,
//            2.21 web jacking with 2.22 internet time theft, 2.20 logic bombs
//   Unit 3 — 3.1 introduction and scope, 3.13 e-mail protocols and headers,
//            3.2 investigation steps applied, 3.3 digital evidence rules applied
//   Unit 4 — 4.6 recovering and preserving, 4.5 properties in court,
//            4.9 validating evidence, 4.7 tool selection revisited
//   Unit 5 — 5.8 spear phishing and BEC, 5.3 categorising a real incident,
//            5.9 compromised and third-party insiders, 5.12 protecting the finance target

export const cysPaper4 = {
  id: 'cys-paper-4',
  number: 4,
  name: 'Paper 4',
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
                'Explain the international efforts to govern cyberspace — the United Nations process, the Budapest Convention, the Tallinn Manual and the Madrid principles — and state why cooperation is difficult.',
              explain:
                '**What is being asked.** Cyberspace has no passport control, so every case is potentially international. The examiner wants the four instruments, what each contributes, and the reason cooperation remains hard.\n\n**The instruments.** United Nations — UN Charter applies, the Group of Governmental Experts (GGE) agreed voluntary norms, the Open-Ended Working Group (OEWG) widened participation. Budapest Convention (2001) — the first binding treaty on cyber crime: harmonised offences, mutual legal assistance, 24x7 network. Tallinn Manual — a NATO-commissioned study of how existing international law applies to cyber operations. Madrid and similar declarations — human rights and democratic principles online.\n\n**Why cooperation is difficult.** Sovereignty and jurisdiction; different definitions of a cyber crime; no shared attribution; data localisation laws; and the treaty gap — India has not acceded to Budapest and relies on bilateral MLATs.\n\n**How to score the 6 marks.** Four instruments with contribution (4) · the difficulty explained (2).',
              answer:
                'Because a single packet crosses several jurisdictions, cyber security needs international law as much as national law. Four efforts matter.\n\n**1. The United Nations process.** The UN Charter applies in cyberspace as it does everywhere: sovereignty, non-intervention and the prohibition of the use of force. The **Group of Governmental Experts (GGE)** produced eleven voluntary norms of responsible state behaviour — do not attack critical infrastructure, do not let your territory be used for attacks, respond to requests for assistance. The **Open-Ended Working Group (OEWG)** opened the discussion to all member states and to industry, and produced a consensus that international law applies to cyberspace.\n\n**2. The Budapest Convention on Cybercrime (2001).** The first binding international treaty on cyber crime. It obliges parties to criminalise illegal access, data interference, system interference and computer-related fraud, to adopt procedural powers such as expedited preservation, and to cooperate through a **24x7 network** of contact points. It is the model that most national statutes, including the Indian IT Act, have followed.\n\n**3. The Tallinn Manual.** A study, commissioned by NATO, of how *existing* international law — sovereignty, due diligence, countermeasures, the law of armed conflict — applies to cyber operations. It is not binding, but it is the reference used by states and academics when a cyber operation crosses the line into the use of force.\n\n**4. Madrid and later declarations.** Declarations that place human rights, democracy and the rule of law at the centre of cyber policy: freedom of expression online, protection of personal data, and limits on surveillance. They add the citizen dimension that the security treaties omit.\n\n**Why cooperation remains difficult**\n\n| Obstacle | Effect |\n|---|---|\n| jurisdiction and sovereignty | evidence sits on a server in a country that may refuse or delay |\n| different definitions | conduct that is a crime in one state is lawful in another |\n| attribution | the technical trace points at a device, not at a state, and states deny |\n| data localisation | a provider may be barred from exporting the very log that is needed |\n| treaty gaps | India is not a party to Budapest, so it relies on bilateral mutual legal assistance treaties |\n\n**The conclusion to state.** International law is not absent in cyberspace; it is unsettled and slow. Cooperation works through 24x7 contact points, mutual legal assistance and provider records — which is exactly why a domestic organisation should preserve its own logs rather than depend on another state to produce them.\n\n**Exam line:** the UN norms set behaviour, Budapest sets procedure, Tallinn interprets the law, Madrid protects the citizen — and jurisdiction is why the case is still difficult.',
              diagram: 'international-cyber',
              diagramCaption:
                'International efforts to govern cyberspace — the UN process, Budapest Convention, Tallinn Manual and Madrid principles.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain the four key areas of a cyber security framework and state why they must work together.',
              explain:
                '**What is being asked.** A framework question: the four areas — network, application, information and operational security — and the argument that a gap in one defeats the other three.\n\n**The areas.** Network security — firewalls, IDS, VPN, segmentation. Application security — input validation, authentication, patching the code. Information security — encryption, access control, classification and backup. Operational security — policies, training, risk management, physical and personnel controls.\n\n**Why together.** An attacker chooses the cheapest route; the strongest layer does not protect a weak neighbour.\n\n**How to score the 4 marks.** Four areas (2) · the together argument (1) · one example of a gap (1).',
              answer:
                'A cyber security framework is usually drawn as four areas of protection.\n\n| Area | What it protects | Typical controls |\n|---|---|---|\n| **Network security** | the path between systems | firewall, IDS and IPS, VPN, segmentation, egress filtering |\n| **Application security** | the code that users reach | input validation, authentication and session management, patching, secure development |\n| **Information security** | the data itself | encryption at rest and in transit, access control, classification, backup, integrity hashes |\n| **Operational security** | the people and the process | security policy, awareness training, background checks, risk assessment, physical security |\n\n**Why they must work together.** An attacker does not attack the strongest layer, but the cheapest one. A firewall is irrelevant if an application accepts a malicious upload; perfect encryption is irrelevant if an administrator copies the key to a personal drive; and a trained workforce is defeated by a system that allows a password of six characters.\n\n**The framework in one sentence.** The four areas are four doors into the same room, and the room is only as secure as the weakest door.\n\n**Exam line:** network, application, information and operational — four areas, one standard, because the attacker picks the weakest.',
              diagram: 'cyber-framework',
              diagramCaption:
                'The four key areas of a cyber security framework — network, application, information and operational security.',
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
                'Explain the key penal provisions of the IT Act with their section numbers, and state the difference between a civil penalty and a criminal offence under the Act.',
              explain:
                '**What is being asked.** A section-number question with one conceptual distinction. The examiner wants the main penal sections and the difference between the civil side (adjudication and compensation) and the criminal side (prosecution and imprisonment).\n\n**The sections.** 43 (damage, civil), 43A (sensitive data, compensation), 65 (tampering with source code), 66 (computer related offences), 66C (identity theft), 66D (cheating by personation), 66E (privacy violation), 66F (cyber terrorism), 67, 67A, 67B (obscene material), 69 (interception), 69A (blocking), 70/70B (CERT-In), 72 (breach of confidentiality), 74 (publication of a report).\n\n**Civil versus criminal.** Civil — adjudicating officer, compensation, balance of convenience, no imprisonment (s. 43 and 43A). Criminal — court, imprisonment and fine, proof beyond reasonable doubt (s. 65 to 78).\n\n**How to score the 6 marks.** Six sections with meaning (4) · the civil and criminal distinction (2).',
              answer:
                'The penal part of the IT Act separates **civil liability** (compensation through an adjudicating officer) from **criminal liability** (prosecution in a court).\n\n**Key provisions**\n\n| Section | Offence or liability | Punishment or remedy |\n|---|---|---|\n| **s. 43** | unauthorised access, downloading, damage to computer or network | civil — compensation to the affected person |\n| **s. 43A** | failure to protect sensitive personal data | civil — compensation for the damage caused |\n| **s. 65** | tampering with computer source documents | up to 3 years, or fine up to 2 lakh, or both |\n| **s. 66** | computer related offences — dishonest or fraudulent act under s. 43 | up to 3 years, or fine up to 5 lakh, or both |\n| **s. 66C** | identity theft — fraudulent use of a password or signature | up to 3 years and fine up to 1 lakh |\n| **s. 66D** | cheating by personation using a computer resource | up to 3 years and fine up to 1 lakh |\n| **s. 66E** | violation of privacy — capturing or publishing a private image | up to 3 years, or fine up to 2 lakh, or both |\n| **s. 66F** | cyber terrorism | imprisonment which may extend to life |\n| **s. 67** | publishing or transmitting obscene material | up to 3 years and fine up to 5 lakh |\n| **s. 72** | breach of confidentiality and privacy by a person holding powers under the Act | up to 2 years, or fine up to 1 lakh, or both |\n\n**Civil versus criminal**\n\n| Point | Civil liability (s. 43, 43A) | Criminal offence (s. 65 to 78) |\n|---|---|---|\n| Who decides | adjudicating officer under s. 46 | a criminal court |\n| Outcome | compensation to the person affected | imprisonment, fine or both |\n| Standard of proof | preponderance of probabilities | beyond reasonable doubt |\n| Typical use | a company that lost data because a vendor was negligent | a person who broke into a system and stole data |\n| Appeal | Cyber Appellate Tribunal | appellate court |\n\n**The point to close with.** The same act can create both liabilities. A bank that failed to protect data (s. 43A) may also have been the victim of an intruder who committed an offence under s. 66 — one incident, two proceedings, and the organisation appears on both sides.\n\n**Exam line:** sections 43 and 43A pay compensation, sections 65 to 78 punish the offender — the Act runs a civil track and a criminal track for the same event.',
              diagram: 'it-act-provisions',
              diagramCaption:
                'Key penal provisions of the IT Act with section numbers, their punishment, and the civil and criminal tracks.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain critical infrastructure and the cyber threats it faces. State how it is protected.',
              explain:
                '**What is being asked.** Critical infrastructure is the set of sectors whose failure halts the nation — power, water, finance, telecom, transport, health. The examiner wants the definition, the threats, and the protection approach.\n\n**Threats.** State-sponsored attack on control systems, ransomware on hospitals, DDoS on payment networks, supply chain compromise of an operator, insider access, legacy unpatched systems, and IT-OT convergence that exposes industrial control systems to the internet.\n\n**Protection.** Segregation of IT and OT, network segmentation and one-way gateways, least privilege and no internet route, tested offline backups, manual fallback procedures, CERT-In coordination, NCIIPC guidance and audits, and drills.\n\n**How to score the 4 marks.** Definition and sectors (1) · threats (2) · protection (1).',
              answer:
                '**Critical infrastructure** is the set of systems and sectors whose disruption causes national-level harm — power, water, finance, telecom, transport, healthcare and government services. It is protected because the consequence is not measured in money but in lives and public order.\n\n**Cyber threats it faces**\n- **State-sponsored attacks on control systems** — Stuxnet against centrifuges, attacks on grid operators; the attacker wants physical effect.\n- **Ransomware on hospitals and utilities** — availability lost precisely where downtime is not survivable.\n- **DDoS on payment and telecom networks** — the whole retail sector feels one outage.\n- **Supply chain compromise** — the operator is secure but a vendor patch is not.\n- **Legacy unpatched systems and IT-OT convergence** — an industrial controller reachable from the corporate network because it was never designed to be reachable at all.\n- **Insider access** — the engineer who can change a set-point.\n\n**How it is protected**\n1. **Segregate IT and OT** — the corporate network and the control network are separated by a firewall and, where possible, a one-way gateway so that data leaves the plant but nothing enters it.\n2. **Remove the internet route** — no remote access except through a hardened, audited jump host with MFA.\n3. **Least privilege and change control** on every engineering workstation.\n4. **Offline, tested backups** and documented **manual fallback** procedures, so that the plant can run without the network.\n5. **Coordination and audit** — CERT-In for incidents, NCIIPC guidance for protected systems, periodic security audits and joint drills.\n\n**Exam line:** critical infrastructure attacks aim at the physical world, so protection means segregation, no internet route, tested backups and a manual fallback that works without the software.',
              diagram: 'critical-infra',
              diagramCaption:
                'Critical infrastructure sectors and the threats against them, with the segregation and fallback controls that protect them.',
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
                'Explain cyber stalking and spamming as cyber crimes. Describe the modus operandi, the legal provisions and the safeguards for a victim.',
              explain:
                '**What is being asked.** Two crimes of persistence: stalking targets a person, spamming targets a mailbox at scale, and both are often the delivery channel of something worse.\n\n**Cyber stalking.** Repeated unwanted contact — mail, messages, calls, fake profiles, location tracking, image-based abuse, doxxing. Legal: s. 66, 66E, 67, 72 read with the BNS provisions on stalking, criminal intimidation and privacy. Safeguards: preserve evidence, do not engage, block and report to the platform and to the cyber crime portal, seek a protection order, and secure accounts and location settings.\n\n**Spamming.** Bulk unsolicited mail for advertising, phishing or malware; also SMS and messaging spam. Legal: s. 66 and 66D where fraud is involved; TRAI regulations for unsolicited commercial communication; the IT Act intermediary rules for the platform. Safeguards: filters, SPF/DKIM/DMARC, never reply or click unsubscribe on suspicious mail, report, and use a separate address.\n\n**How to score the 6 marks.** Stalking explained with modus operandi (2) · spamming explained (1) · legal provisions (2) · safeguards (1).',
              answer:
                '**A. Cyber stalking** is repeated, unwanted attention through digital channels that causes fear or distress: messages, calls, comments, fake profiles in the victim name, location tracking through a shared app or a stalkerware install, doxxing, and image-based abuse.\n\n*Modus operandi.* The attacker begins with public information — a profile, a photograph, a workplace — establishes contact, then escalates: first friendliness, then demands, then monitoring through the phone, then threats. The escalation is deliberate: each step tests whether the victim will report.\n\n*Legal provisions.* Sections 66 (computer related offences), 66E (privacy violation), 67 (obscene material) and 72 (breach of confidentiality) of the IT Act, read with the provisions of the Bharatiya Nyaya Sanhita on stalking, criminal intimidation and insulting the modesty of a woman. Stalkerware use is also an offence of unauthorised access.\n\n*Safeguards for a victim.* Do not engage or reply; preserve every message with headers, screenshots and dates; block on the platform and change the privacy settings; check for unknown apps and shared location; report to the platform, to the cyber crime portal and to the local police; apply for a protection order where the law provides one; and ask a trusted person to help with account security.\n\n**B. Spamming** is the bulk sending of unsolicited messages — commercial advertisements, phishing lures, malware links, fake job offers — by mail, SMS, WhatsApp or social media.\n\n*Modus operandi.* A purchased or scraped address list, a compromised mail account, or a bulk SMS gateway. Volume is the weapon: a small conversion rate pays for the campaign, and the same campaign often carries a malicious link.\n\n*Legal provisions.* Where the spam carries fraud, sections 66 and 66D of the IT Act apply. Unsolicited commercial communication is regulated by TRAI under the Telecom Commercial Communications regulations (the DND framework), and the intermediary rules require platforms to act on complaints. Bulk mail that forges a sender attracts both the IT Act and the mail authentication duty of the sending domain.\n\n*Safeguards.* SPF, DKIM and DMARC on your own domain; a gateway filter with reputation and content checks; never reply to or click unsubscribe in a suspicious message, because a reply confirms a live address; report and block; and keep a separate address for registrations.\n\n**The link between the two.** Spam is often the first contact of a stalker, and stalking often begins from data exposed by spam and breach lists. The defence against both begins with the same step: reduce the public footprint and never confirm that the address is live.\n\n**Exam line:** stalking is persistence against a person, spamming is persistence against a mailbox — both are punishable, and both are answered by preserving evidence and cutting the channel.',
              diagram: 'cyber-stalking',
              diagramCaption:
                'Cyber stalking — the escalation from public profile to monitoring and threat — with the legal provisions and the victim safeguards.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain software piracy, its types and its effect on security.',
              explain:
                '**What is being asked.** Piracy is unauthorised copying or use of software; the examiner wants the types and, in a cyber security paper, the security consequence.\n\n**Types.** End-user copying, softlifting (one licence on many machines), hard-disk loading by a vendor, counterfeiting, renting, online downloading from unauthorised sources, and licence key generators or cracks.\n\n**Security effect.** Cracked and pirated software is the most reliable delivery channel for malware — the crack itself is often the payload; no updates; no vendor support; no warranty; and legal exposure under the Copyright Act and the IT Act.\n\n**How to score the 4 marks.** Definition and types (2) · security effect (2).',
              answer:
                '**Software piracy** is the unauthorised copying, distribution or use of software in breach of its licence — the reproduction of a copyrighted program without permission.\n\n**Types**\n1. **End-user copying** — one licensed copy installed on several machines for personal or office use.\n2. **Softlifting** — a licence bought for one user and shared among colleagues.\n3. **Hard-disk loading** — a hardware vendor pre-installs unlicensed software on machines it sells.\n4. **Counterfeiting** — copied media packaged and sold as genuine.\n5. **Renting** — a licensed copy rented out without the right to do so.\n6. **Online piracy** — downloads from unauthorised sites, torrents, and "cracked" builds with a key generator.\n\n**Effect on security**\n\n| Effect | Why it matters |\n|---|---|\n| malware delivery | the crack or keygen is the payload; a pirated build is the most common route for an infostealer or ransomware |\n| no updates | an unlicensed copy is not patched, so a known vulnerability stays open for years |\n| no support or warranty | there is no vendor to call when the build fails or is compromised |\n| integrity unknown | the binary has been modified, so no hash matches the vendor release and no baseline is possible |\n| legal exposure | liability under the Copyright Act, and under the IT Act where a system is used unlawfully |\n| audit failure | a software asset audit finds the gap, and a licence shortfall becomes both a cost and a reporting issue |\n\n**The security lesson.** Piracy is not a victimless saving: it converts a controlled, patched, supported product into an unverified binary running with the user privileges, delivered by exactly the channel an attacker would choose.\n\n**Exam line:** a pirated copy ships with a crack — and the crack is the malware, which is why licence compliance is a security control, not only a legal one.',
              diagram: 'software-piracy',
              diagramCaption:
                'Types of software piracy and the security consequences — malware delivery, no updates, unknown integrity and legal exposure.',
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
                'Explain web jacking and internet time theft with their modus operandi, and state the controls that prevent each.',
              explain:
                '**What is being asked.** Two less-discussed crimes. Web jacking is taking control of a website or a domain and redirecting it; internet time theft is unauthorised use of another person connection or credentials.\n\n**Web jacking.** Methods: domain hijacking through a compromised registrar account, DNS poisoning, defacement by exploiting a vulnerable CMS, typosquatting with a look-alike domain, and a hijacked session. Effect: the site shows false content, collects credentials, or damages reputation. Controls: registrar lock and MFA, DNSSEC, certificate monitoring, patching, integrity monitoring, and takedown readiness.\n\n**Internet time theft.** Methods: using another person Wi-Fi or broadband, stolen ISP credentials, piggybacking, and using an organisation account. Effect: cost, liability for the other person activity, and a laundering route for attacks. Controls: WPA3 with a strong key, MAC filtering, RADIUS for enterprise Wi-Fi, billing alerts, and monitoring of concurrent sessions.\n\n**How to score the 6 marks.** Web jacking explained (2) · internet time theft explained (2) · controls for each (2).',
              answer:
                '**A. Web jacking** is the takeover of a website, a domain or a web session so that the attacker controls what a visitor sees or does.\n\n*Modus operandi.*\n- **Domain hijack** — the registrar account is compromised, the name server is changed and all traffic goes elsewhere.\n- **DNS poisoning** — a false record is placed in a resolver or in the zone, so the real address is never reached.\n- **Defacement** — a vulnerable CMS plugin is exploited and the pages are replaced.\n- **Typosquatting with a clone** — a look-alike domain copies the site and collects credentials from visitors who mistype the URL.\n- **Session hijack** — a stolen cookie gives the attacker the logged-in session of a real user.\n\n*Controls.* Registrar lock plus MFA on the registrar and the DNS provider; DNSSEC and DNS monitoring; certificate transparency alerts so that a look-alike certificate is spotted; a patched CMS with a web application firewall and file-integrity monitoring; short session lifetimes with `HttpOnly` cookies; and a written takedown procedure with the registrar, the host and CERT-In.\n\n**B. Internet time theft** is the unauthorised use of another person internet connection, bandwidth or account — the digital equivalent of using a neighbour telephone line.\n\n*Modus operandi.*\n- **Piggybacking** — using an open or weakly protected Wi-Fi, sometimes from a parked vehicle outside the building.\n- **Stolen ISP credentials** — a broadband account and password shared or phished, then used from another location.\n- **Session and device misuse** — an unattended logged-in device used to browse at the owner cost.\n- **Hotspot abuse** — a mobile hotspot left open, consumed by others.\n\n*Controls.* WPA3 with a long passphrase and a changed default administrator password; MAC filtering and, in an office, RADIUS or a captive portal with per-user credentials; a hotspot that is off by default and password protected; billing and data-usage alerts to detect a sudden change; a check of concurrent sessions at the ISP; and a policy that credentials are never shared.\n\n**The common thread.** Both crimes exploit an unguarded control point that everyone assumes is safe: the registrar account for the website, and the Wi-Fi password for the connection. The prevention in both cases is authentication and monitoring, not concealment.\n\n**Exam line:** web jacking steals the address, internet time theft steals the pipe — lock the registrar, lock the Wi-Fi, and watch the unexpected change.',
              diagram: 'web-jacking',
              diagramCaption:
                'Web jacking — domain hijack, DNS poisoning, defacement and clone sites — with the controls that secure the address.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain logic bombs with an example, and state why they are difficult to detect and how they are investigated.',
              explain:
                '**What is being asked.** A logic bomb is code that runs when a condition is met — a date, a departure from the payroll, a missing file. The examiner wants the example and the difficulty.\n\n**Example.** A payroll script that deletes records if the programmer employee ID is removed; a script that fires on a specified date.\n\n**Why difficult.** It is dormant, it is often written by someone with legitimate access, it looks like normal code, and it may be triggered only once.\n\n**Investigation.** Code review and change history, comparison with the backup, timeline around the trigger, and the insider motive trail — resignation, dispute, appraisal.\n\n**How to score the 4 marks.** Definition and example (2) · detection difficulty (1) · investigation (1).',
              answer:
                'A **logic bomb** is a piece of code that lies dormant inside a legitimate program and executes when a condition is satisfied — a date, a login, a file that disappears, or an employee record that is deleted from the payroll.\n\n**Worked example.** A payroll utility contains a check on the employee identifier of the developer. While the identifier exists, the program runs normally. On the day the identifier is removed — the day the developer leaves — the same code deletes the salary records and the backup job configuration. The trigger is not a date but the departure itself, which is why the damage appears on the first payroll run after the resignation.\n\n**Why it is difficult to detect**\n1. **Dormant** — nothing happens until the condition is met, so no signature and no behaviour appears during testing.\n2. **Written by an insider** — the code is inside a program that the developer was authorised to change, so the author had the right to be there.\n3. **Looks ordinary** — a date comparison or a count check is normal code; the malicious part is the action it triggers.\n4. **Runs once** — a single destructive run, and the evidence is the damage rather than the process.\n5. **Trigger tied to a human event** — a resignation, a transfer, a dispute, which the security team does not see.\n\n**How it is investigated**\n- **Code review and version history** — compare the production version with the repository and the previous release; a small block added in an unremarkable commit is the pattern.\n- **Change log and approvals** — who committed, when, and whether the change went through review; an unchecked commit to a scheduled job is the strongest signal.\n- **Timeline** — the trigger event (the resignation date, the payroll change) placed beside the damage date.\n- **Insider trail** — the developer access log, the resignation or dispute record, and any similar code in other modules.\n- **Recovery** — restore from a backup taken before the trigger, and rebuild the job configuration rather than repairing the tampered one.\n\n**Exam line:** a logic bomb waits for a condition, not for a user — so it is found by comparing code with history and by reading the trigger beside the human event.',
              diagram: 'logic-bombs',
              diagramCaption:
                'Logic bombs — the dormant condition, the trigger event and the code-history review that exposes it.',
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
                'Define cyber forensics and explain its scope and types. State the difference between cyber forensics and incident response.',
              explain:
                '**What is being asked.** A definition-and-scope question with one distinction. Cyber forensics is the disciplined examination of digital evidence for a legal or disciplinary purpose; incident response is the operational handling of an incident to contain and recover.\n\n**Scope.** Computers, networks, mobile, cloud, malware, e-mail, database, and memory. **Types.** Computer forensics, network forensics, mobile forensics, memory forensics, cloud forensics, malware forensics, database forensics.\n\n**Forensics versus IR.** IR asks "how do we stop this and recover safely, now?"; forensics asks "what exactly happened, and can we prove it?" They overlap — IR collects the evidence, forensics proves it — and the tension is real: a reboot helps recovery and destroys evidence.\n\n**How to score the 6 marks.** Definition (1) · scope and types (3) · the IR distinction (2).',
              answer:
                '**Cyber forensics** is the application of a documented, repeatable method to preserve, acquire, examine and analyse digital evidence from computers, networks and mobile devices, and to present the finding so that a court, a regulator or a disciplinary panel can rely on it.\n\n**Scope**\n\n| Area | What is examined |\n|---|---|\n| computers | disks, file systems, deleted files, registry, logs, user activity |\n| networks | packet capture, flow, DNS, proxy and firewall logs |\n| mobile | phones and tablets, app data, location, cloud backup |\n| memory | running processes, connections, keys, fileless malware |\n| cloud | tenant audit logs, storage, identity and access records |\n| e-mail | header chain, mailbox logs, attachments |\n| databases | transaction logs, audit trails, deleted rows |\n\n**Types.** Computer forensics, network forensics, mobile forensics, memory forensics, cloud forensics, malware forensics and database forensics — the method is the same; the artefact and the tool change.\n\n**Cyber forensics versus incident response**\n\n| Point | Incident response | Cyber forensics |\n|---|---|---|\n| Question asked | how do we contain, eradicate and recover, now? | what happened, who did it, and can we prove it in court? |\n| Time pressure | minutes and hours | days and weeks, but collection is immediate |\n| Output | containment, recovery, lessons learned | expert report with evidence and a chain of custody |\n| Success measure | service restored, spread stopped | finding supported by admissible evidence |\n| Risk | closing the incident too early and losing evidence | collecting so slowly that the attacker escapes |\n\n**How they work together.** The responder is the first collector: memory capture, isolation, log export and sealing are all forensic acts performed under time pressure. The forensic examiner turns that collection into proof. Where the two conflict — a reboot would restore the service and destroy the memory — the documented decision is taken with the legal team, and the decision itself is recorded.\n\n**Exam line:** incident response stops the bleeding, cyber forensics proves the wound — and the first responder is where the two meet.',
              diagram: 'cf-intro',
              diagramCaption:
                'The scope and types of cyber forensics, and how it differs from incident response in question, output and risk.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain how e-mail protocols (SMTP, POP3, IMAP) work and how the protocol used affects the evidence available.',
              explain:
                '**What is being asked.** A protocol question with an evidential twist. SMTP sends; POP3 downloads and often deletes from the server; IMAP leaves everything on the server and synchronises.\n\n**Effect on evidence.** POP3 leaves the message on one client and may remove it from the server — so the server has no record. IMAP leaves the mailbox on the server, so server-side logs and folders are available and a deletion is a flag, not a disappearance. SMTP leaves the header chain and the gateway log.\n\n**How to score the 4 marks.** Three protocols with port and role (2) · the evidence consequence for POP3 versus IMAP (2).',
              answer:
                'Three protocols carry mail, and each leaves a different evidence trail.\n\n| Protocol | Port | Role | Evidence it leaves |\n|---|---|---|---|\n| **SMTP** | 25, 587, 465 | sending and relay between servers | `Received` header chain, gateway log, queue ID, SPF/DKIM result at each hop |\n| **POP3** | 110, 995 | downloads mail from the server to one client; often deletes the server copy | the message on one device only; the server may hold nothing after download |\n| **IMAP** | 143, 993 | keeps the mailbox on the server and synchronises folders across devices | the whole mailbox on the server, folder structure, flags such as seen, flagged, deleted |\n\n**Why the protocol matters in an investigation**\n- With **POP3**, the evidence is on the client device: the local mail store, the attachments on disk, and the mail client log. If the device is not seized, the message may exist nowhere else, and the server can prove only that a download happened.\n- With **IMAP**, the evidence is on the server and in the audit log: folder names an attacker created, a message moved to Trash rather than deleted, a forwarding rule, and the login IP and time of every session. A deletion on IMAP sets a flag before it purges, so a deleted mail is often recoverable from the server for a period.\n- With **SMTP**, the evidence is the header chain and the gateway log — enough to show the origin, the route and the time, but not what the recipient did with the message.\n\n**The practical instruction.** Ask which protocol the account uses before deciding where to look; a POP3 account needs the device, an IMAP account needs the provider, and a webmail account needs both the provider logs and the browser artefacts.\n\n**Exam line:** SMTP proves the route, POP3 hides the mail on one device, IMAP leaves it on the server — the protocol decides where the evidence lives.',
              diagram: 'cf-email',
              diagramCaption:
                'E-mail flow across SMTP, POP3 and IMAP, with the evidence each protocol leaves for an investigator.',
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
                'A company server is found communicating with an unknown external address. Explain, step by step, how you would investigate it as a cyber forensics examiner.',
              explain:
                '**What is being asked.** An applied version of the investigation process. The examiner wants the steps in order, with the artefact examined at each step and the decision taken.\n\n**The steps.** Secure authority and scope; preserve volatile data (memory, connections, logged-in users); capture network evidence; acquire the disk; examine for the implant and persistence; establish the entry point; determine the data reached; contain and eradicate after evidence is secured; document and report.\n\n**The trap.** Rebooting or killing the process first. The connection is the evidence, and it disappears with the process.\n\n**How to score the 6 marks.** Ordered steps with artefact (4) · the containment timing (1) · documentation and reporting (1).',
              answer:
                '**Step 1 — authority and scope.** Record who asked, under what power, and what is in scope. Note the reported external address, the server name and the time of the alert.\n\n**Step 2 — preserve the volatile state.** Before anything is stopped, capture memory, the list of connections, running processes, logged-in users and scheduled jobs. The connection that triggered the alert exists only while the process runs.\n\n**Step 3 — capture the network evidence.** Export the firewall, proxy, DNS and NetFlow records for the address; capture the live packets for the session if it is still open. Record the beacon interval and its jitter, because periodicity identifies command and control.\n\n**Step 4 — acquire the disk.** Image the server through a write blocker, hash it, and work only on the copy. Record the hash on the case file.\n\n**Step 5 — examine for the implant and its persistence.** Process tree and parent-child relationships, files created around the first beacon, services and scheduled tasks, run keys, cron jobs, systemd units, web shell files, and any new account. Compare the web root and the binary set against the known-good baseline.\n\n**Step 6 — find the entry point.** Correlate the first beacon with the web access log, the authentication log and the WAF log; look for the request that created the file — an upload, a deserialisation payload, a vulnerable plugin.\n\n**Step 7 — establish what was reached.** Database log, file access records, archive creation, and any outbound transfer volume; determine whether data left and what it was.\n\n**Step 8 — contain, then eradicate.** Block the external address at the egress, disable the account, isolate the host — but only after the evidence from steps 2 to 3 is secured, and with the decision recorded. Rebuild rather than clean where a rootkit is suspected.\n\n**Step 9 — document and report.** One timeline across all sources, each finding tied to an artefact, the hash and custody record attached, and the limitation stated — for example, memory was captured at 11:20, after the process had already restarted.\n\n**The two mistakes to avoid.** Killing the process or rebooting before the memory capture, which destroys the evidence of what the process was doing; and blocking the address before the network evidence is exported, which destroys the only record of the beacon.\n\n**Exam line:** capture the volatile, then the network, then the disk — and contain only after the evidence exists.',
              diagram: 'cf-process',
              diagramCaption:
                'The investigation process applied to a beaconing server — volatile capture, network evidence, disk image, entry point and report.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'State the rules an examiner must follow so that digital evidence survives cross-examination.',
              explain:
                '**What is being asked.** A short rules question, applied. Four or five rules with the reason for each, and the point that the defence attacks the handling rather than the technology.\n\n**The rules.** Work on a copy; hash before and after; keep the chain of custody; document every action with tool and version; stay within the authority; and report exculpatory material as well.\n\n**How to score the 4 marks.** Four rules with reason (3) · the cross-examination point (1).',
              answer:
                'Digital evidence survives cross-examination when the handling, not only the finding, can be defended. Six rules do the work.\n\n1. **Work on a verified copy.** The original is sealed and never mounted; the copy is made through a write blocker. *Reason:* the examiner must be able to say that the original was not altered by the examination.\n2. **Hash before and after.** SHA-256 of the source and of every working copy, recorded in the case file. *Reason:* a matching hash answers the first question of every defence counsel — how do you know this is the same data?\n3. **Keep the chain of custody unbroken.** Exhibit number, seal, signature at every transfer, storage log, and one entry for every gap. *Reason:* a single undocumented hour is where the tampering allegation is built.\n4. **Document every action as it happens.** Tool name, version, licence, settings, time and result — noted at the time, not reconstructed later. *Reason:* reproducibility is the test of a forensic finding, and an undated note cannot support it.\n5. **Stay inside the authority.** Search only what the warrant or consent permits, and record the scope. *Reason:* evidence obtained outside the authority is challenged regardless of its quality.\n6. **Report the exculpatory material.** State what the evidence does not show, and the limitation of the examination. *Reason:* an expert who hides a doubt loses the whole report when the doubt is found.\n\n**The cross-examination point.** The defence rarely disputes what a tool found; it disputes how the exhibit was kept. Six rules, each with a document behind it, convert the handling from a claim into a record.\n\n**Exam line:** copy, hash, custody, document, stay lawful, report both ways — the exhibit is accepted because the handling is proved, not because the tool is famous.',
              diagram: 'cf-evidence',
              diagramCaption:
                'The rules that make digital evidence survive cross-examination — verified copy, hashing, custody, documentation, legality and full reporting.',
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
                'Explain how deleted data is recovered and preserved, including slack space, unallocated space and the effect of solid-state drives.',
              explain:
                '**What is being asked.** A technical recovery question. Deletion removes the pointer, not the content; recovery depends on the file system and on whether the blocks were reused or trimmed.\n\n**The concepts.** Slack space — the unused remainder of the last cluster of a file, which can hold fragments of earlier data. Unallocated space — clusters marked free, which may still hold content. Journal and $LogFile — changes recorded for recovery. Carving — reconstructing a file from its header and footer signatures.\n\n**SSD effect.** TRIM zeroes deleted blocks quickly, wear levelling moves data, and the controller may not expose the mapping — so recovery from an SSD is far less reliable, and the examiner must state that limitation.\n\n**How to score the 6 marks.** Deletion explained (1) · slack and unallocated explained (2) · carving (1) · SSD limitation (2).',
              answer:
                '**What deletion actually does.** A delete operation removes the directory entry or marks the inode or MFT record as free; the clusters themselves are not erased. The content survives until something writes over it, which is why recovery is a race against ordinary use.\n\n**Where the recoverable data lives**\n\n| Area | What it holds | Recovery method |\n|---|---|---|\n| **file slack** | the unused tail of the last cluster — fragments of the file that previously occupied that cluster | read the cluster tail after the logical end of file |\n| **unallocated space** | clusters marked free but not yet overwritten — whole deleted files | file-system level recovery, then signature carving |\n| **resident and deleted MFT records** | name, size, timestamps and, for small files, the content itself | parse the MFT including records flagged unused |\n| **journals** | `$LogFile`, `$UsnJrnl` on NTFS, the ext4 journal — a record of create, rename and delete | parse the journal and map to the timeline |\n| **volume shadow copies** | point-in-time copies of the volume | mount the snapshot read-only and compare |\n| **backups and cloud sync** | versions retained elsewhere | request from the provider or the backup system |\n\n**Carving.** When the file-system metadata is gone, the file is reconstructed from its content: a known header and footer (JPEG, PDF, ZIP), a size field, and a validator. Carving recovers content but not the original name or the exact timestamp, so the report must state what the carving could not prove.\n\n**The effect of solid-state drives**\n1. **TRIM** — the operating system tells the controller which blocks are free, and the controller erases them in the background, often within minutes. A deleted file may be gone long before the drive is imaged.\n2. **Wear levelling and garbage collection** — data is moved and rewritten by the controller, so the physical location no longer matches the logical address.\n3. **Vendor-specific mapping** — the controller may present a different logical view to the forensic tool than to the operating system.\n\n**What the examiner does about it.** Image first, work on the copy, attempt recovery from the file system, then carving, then shadow copies, then backups — and state the limitation explicitly: on a TRIM-enabled SSD, unrecovered data cannot be assumed never to have existed.\n\n**Exam line:** deletion frees the pointer, not the cluster — recover from slack, unallocated space and journals, and record the TRIM limitation on an SSD.',
              diagram: 'df-recover',
              diagramCaption:
                'Recovering deleted data — slack space, unallocated space, journals and shadow copies, with the effect of TRIM on a solid-state drive.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Explain how the properties of digital evidence are argued in court, using one property as an example.',
              explain:
                '**What is being asked.** A short applied question: take the properties and show how each becomes a courtroom argument.\n\n**The argument pattern.** For each property, the examiner produces the document that proves it: authenticity — hash and device serial; integrity — hash pair and write blocker; completeness — exculpatory material included; accuracy — validated tool and version; reproducibility — method statement.\n\n**The worked example.** Integrity: the hash at seizure, the hash after imaging, the sealed original and the blocker log.\n\n**How to score the 4 marks.** Four properties with the document that proves each (3) · one worked example (1).',
              answer:
                'In court, a property of digital evidence is not asserted — it is proved by a document. The examiner prepares the document before the question is asked.\n\n| Property | The argument made | The document that proves it |\n|---|---|---|\n| **Authenticity** | this is the data from that device | seizure record with serial number, hash at seizure, signer of a mail |\n| **Integrity** | it did not change after seizure | hash of original and of copy, write blocker model and test report |\n| **Completeness** | the whole picture was examined | the exculpatory artefacts listed in the report |\n| **Accuracy** | the tool and method are correct | tool name and version, NIST CFTT result, peer review |\n| **Reproducibility** | another expert would get the same result | method statement, case notes, second-tool verification |\n| **Legality** | the search was lawful | warrant or consent, and the recorded scope |\n\n**Worked example — integrity.** The defence asks how the court knows the exhibit was not altered in the laboratory. The examiner answers with four documents: the seizure record showing the drive serial, the SHA-256 computed at seizure, the SHA-256 computed after imaging with a matching value, and the write blocker model with its test report. The original is still sealed and its seal number is on the custody form. No single document is convincing; the four together make the alteration claim impossible to sustain.\n\n**Why this is the right way to answer.** Cross-examination attacks the weakest link, so the examiner never relies on reputation or on the tool. Each property is tied to a record created at the time of the action — which is exactly what forensic readiness exists to produce.\n\n**Exam line:** authenticity by hash and serial, integrity by hash pair and blocker, accuracy by validated version — a property is only as good as the document behind it.',
              diagram: 'df-properties',
              diagramCaption:
                'Properties of digital evidence argued in court, with the document that proves each one.',
            },
          ],
        },
        {
          label: "c",
          parts: [
            {
              marks: 6,
              label: 'c',
              question:
                'Explain how an examiner validates digital evidence before it is relied upon, and describe the risks of relying on an unvalidated tool or method.',
              explain:
                '**What is being asked.** Validation is the check that the exhibit and the tool are what they claim. The examiner wants the validation steps and the consequences of skipping them.\n\n**Steps.** Verify the hash; confirm the acquisition log and the blocker; test the tool against known data; record versions; cross-check a critical finding with a second tool or a manual review; peer review the report.\n\n**Risks.** A false positive becomes a false accusation; a false negative loses evidence; a version change produces an unrepeatable result; and an unexplained output collapses under cross-examination.\n\n**How to score the 6 marks.** Validation steps (3) · risks (2) · the peer review point (1).',
              answer:
                '**Validation** is the set of checks performed before a finding is relied upon — on the exhibit, on the tool and on the conclusion.\n\n**A. Validating the exhibit**\n1. **Verify the hash** of the working copy against the acquisition record; a mismatch stops the examination.\n2. **Check the acquisition record** — write blocker model and test report, examiner name, time, and the seal number of the original.\n3. **Confirm the scope** against the authority, so that the data examined is the data lawfully seized.\n\n**B. Validating the tool**\n1. **Known-data test** — the tool is run against a test image with known files, known deleted files and known timestamps; it must find what is present and nothing that is not.\n2. **Published test results** — NIST CFTT reports for imaging, write blockers and carving tools.\n3. **Version control** — the exact build is recorded and a new version is tested before it is used; an untested update invalidates comparison with earlier cases.\n\n**C. Validating the finding**\n1. **Cross-verification** — a critical finding is confirmed with a second tool or a manual hex review: a deleted file found by one tool, carved by another, and read by hand.\n2. **Alternative hypothesis** — the examiner writes down the innocent explanation and tests it: was the file opened by the user or by a service account?\n3. **Peer review** — a second examiner reviews the method and the report before it is signed.\n\n**Risks of skipping validation**\n\n| Risk | Consequence |\n|---|---|\n| unvalidated tool | a false positive becomes a false accusation; a false negative hides evidence |\n| unknown or changed version | the result cannot be reproduced, so it is an opinion rather than a finding |\n| no known-data test | the tool behaviour on this file system or format is simply unknown |\n| no cross-verification | a single tool output is the whole case, and a bug in it is fatal |\n| no peer review | errors of interpretation reach the report and then the witness box |\n| unexplained output | the court cannot weigh evidence that the expert cannot explain |\n\n**The principle.** Validation does not make a tool perfect; it makes the examiner able to say what the tool can and cannot be relied upon to do — and that statement is what the court weighs.\n\n**Exam line:** validate the exhibit by hash, the tool by known data and version, the finding by a second tool — and the report by a second examiner.',
              diagram: 'df-validate',
              diagramCaption:
                'Validating digital evidence — the checks on the exhibit, the tool and the finding, and the risks of skipping them.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain the criteria used to select a forensic tool, and state why a popular tool is not automatically an acceptable one.',
              explain:
                '**What is being asked.** A short criteria question with an argument. Criteria: capability, accuracy, completeness, auditability, support, licensing, training and acceptance.\n\n**The argument.** Popularity is evidence of use, not of correctness. Acceptance requires a documented test on the evidence type in question, in the version that was used.\n\n**How to score the 4 marks.** Four criteria (2) · the popularity argument (1) · one practical step such as a known-data test (1).',
              answer:
                'A forensic tool is selected on measurable criteria, not on reputation.\n\n**Criteria**\n1. **Capability** — does it handle the evidence type: NTFS, APFS, ext4, mobile, memory, cloud export?\n2. **Accuracy and completeness** — does it report what is there, including deleted files, alternate streams and timestamps, without false positives?\n3. **Auditability** — does it log every action and verify hashes as it works?\n4. **Support and versioning** — is the vendor responsive, and is a new version tested before deployment?\n5. **Licensing and cost** — is the licence valid for forensic use in court, not only for internal review?\n6. **Training** — can the team explain the output under cross-examination?\n7. **Acceptance** — has the tool been tested or accepted in a comparable case, with a published report?\n\n**Why popularity proves nothing.** A widely used tool is widely used, which is not the same as being correct for this file system, this version and this artefact. The defence question is not "is this software famous?" but "what evidence do you have that this build reported correctly on this data?" — and only a known-data test, a published test report or a cross-verification answers it.\n\n**Practical step.** Before a case depends on a tool, run it against a test image with known content, record the result, note the version, and repeat the test after every update.\n\n**Exam line:** capability, accuracy, auditability, support, licensing, training and acceptance — a tool is chosen by test, not by reputation.',
              diagram: 'df-tools',
              diagramCaption:
                'Criteria for selecting a forensic tool, and why a popular tool still needs a known-data test and a recorded version.',
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
                'Explain business e-mail compromise and spear phishing. Describe the stages of a BEC campaign and the controls that break it.',
              explain:
                '**What is being asked.** Spear phishing is targeted phishing; BEC is spear phishing with a financial objective, usually without malware. The examiner wants the stages and the controls.\n\n**Stages.** Research the finance team and the vendor list; compromise or spoof a mailbox; study the thread style; send the invoice-change or payment request at the right moment; use a look-alike domain or a reply-chain; then withdraw politely if caught.\n\n**Controls.** Payment verification on a known number; dual approval and callback for any bank-detail change; DMARC with reject; mail rule and token monitoring; conditional access; user reporting.\n\n**How to score the 6 marks.** BEC and spear phishing defined (2) · stages (2) · controls (2).',
              answer:
                '**Spear phishing** is phishing aimed at a named person, written with details that only a researcher would know — the reporting line, the project name, the travel plan. **Business e-mail compromise (BEC)** is spear phishing with a financial objective: a payment, a change of bank details, a gift-card purchase, or payroll diversion. BEC usually carries no malware and no link, which is why filters miss it.\n\n**Stages of a BEC campaign**\n\n| Stage | What the attacker does |\n|---|---|\n| **1. Research** | identifies the finance team, approvers, vendors, invoice format, and the person who is travelling or new |\n| **2. Access or impersonation** | compromises a real mailbox by phishing or password reuse, or registers a look-alike domain |\n| **3. Thread study** | reads the real threads to copy the signature, the tone and the payment process |\n| **4. Pretext** | creates the reason — a changed bank account, an urgent wire, a confidential acquisition |\n| **5. Timing** | sends when the approver is travelling or on leave, so the second check is absent |\n| **6. Execution and exit** | the payment leaves; if challenged, the attacker apologises politely and keeps the channel warm for the next attempt |\n\n**Controls that break the campaign**\n1. **Callback verification on a known number** for any bank-detail change or new beneficiary, from the directory, not from the mail.\n2. **Dual approval** with a small per-approver limit, so that one compromised mailbox cannot move a large sum.\n3. **DMARC at reject** plus look-alike domain monitoring and a display-name check in the gateway.\n4. **Mailbox rule and token monitoring** — an alert on a new forwarding rule, a new OAuth grant, or a login from a new country.\n5. **Conditional access** — impossible travel, device compliance, and step-up for a new beneficiary.\n6. **A reporting route that works in minutes**, so that an employee who suspects a mail can report it before the payment is released, and a recall can be attempted with the bank.\n\n**Why BEC is the highest-loss category.** The amount is chosen by the attacker, the transaction is authorised by the victim, and there is no malware to detect. The only reliable control is procedural: a bank-detail change is never executed on the strength of an e-mail.\n\n**Exam line:** research, access, thread study, pretext, timing, exit — and the control that breaks it is a callback on a known number before any payment leaves.',
              diagram: 'se-phishing',
              diagramCaption:
                'Business e-mail compromise — the stages of the campaign and the controls that break the chain before payment.',
            },
            {
              marks: 4,
              label: 'b',
              question:
                'Classify three real social engineering incidents you have read about into the three categories of social engineering, and justify each classification.',
              explain:
                '**What is being asked.** An application question: take a known incident and place it in the taxonomy, with a reason.\n\n**How to answer.** Pick three — for example, the Bangladesh Bank SWIFT fraud (computer based), the Twitter 2020 account takeover (socio-technical), and a help-desk impersonation inside a company (human based). State the category, the lever used, and the control that was missing.\n\n**How to score the 4 marks.** Three classifications with justification (3) · one control missed (1).',
              answer:
                'Three well-known incidents, classified with justification.\n\n| Incident | Category | Justification | Missing control |\n|---|---|---|---|\n| **Bangladesh Bank SWIFT fraud (2016)** — fraudulent payment instructions sent overnight through the international messaging system | **computer based** | the manipulation was delivered entirely through the mail and messaging system; attackers studied the bank schedule and sent instructions when staff were away | dual approval with callback, and a limit on the number of instructions processed unattended |\n| **Twitter account takeover (2020)** — high-profile accounts posted a bitcoin scam | **socio-technical** | the attackers phoned employees with an internal-help-desk pretext and then used a real administrative tool to reset accounts; a person was manipulated and a technical tool completed the act | number-matching MFA, a hardened help-desk identity proofing procedure, and least privilege on the admin tool |\n| **Help-desk impersonation in an office** — a caller claims to be a senior manager and asks for a password reset | **human based** | the entire attack is voice and authority; there is no technical component until the reset itself | a callback rule, and identity proofing questions that the caller cannot research |\n\n**The justification that earns the mark.** The category is decided by the channel and the tool used at the decisive step, not by the outcome. If a person was manipulated and a technical tool executed the act, the attack is socio-technical, which is also the most dangerous category because it defeats both a trained user and a technical control that trusts an authenticated admin.\n\n**Exam line:** classify by the decisive step — voice is human based, mail or web alone is computer based, and voice plus a tool is socio-technical.',
              diagram: 'se-categories',
              diagramCaption:
                'The three categories of social engineering applied to real incidents, with the missing control in each case.',
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
                'Explain the compromised insider and the third-party insider. Describe how each is detected and how the risk is reduced.',
              explain:
                '**What is being asked.** Two insider variants that are often missed: a legitimate account used by an outsider, and an insider who belongs to a vendor.\n\n**Compromised insider.** An outsider has phished a real account and operates as that user; behaviour differs from the person, not from the role. Detection: impossible travel, first-seen device, unusual volume, new mail rules, MFA prompts. Reduction: MFA, conditional access, session monitoring, fast revocation.\n\n**Third-party insider.** A vendor engineer, contractor or support partner with legitimate access to the organisation systems. Detection: privileged access management logs, session recording, unusual access outside the ticket. Reduction: just-in-time access, session recording, no standing admin, contract clauses, and a sponsor inside the company.\n\n**How to score the 6 marks.** Both variants explained (2) · detection for each (2) · reduction for each (2).',
              answer:
                'Most insider programmes watch employees; two variants sit outside that view.\n\n**A. The compromised insider** — an outsider who holds a real account.\n\n| Aspect | Detail |\n|---|---|\n| How it happens | phishing, password reuse, infostealer logs, session-token theft, MFA fatigue |\n| Why it is invisible | the account, the device enrolment and the permissions are all legitimate |\n| What differs | behaviour, not permission — a login from a new country, a new device, an unusual hour, a spike of downloads, a new forwarding rule |\n| Detection | impossible-travel alert, first-seen device, anomaly on volume and resource, alert on new mail rules and OAuth grants, alert on MFA prompt spikes |\n| Reduction | number-matching MFA or FIDO2, conditional access, session lifetime limits, token revocation on suspicion, and monitoring of the identity provider |\n\n**B. The third-party insider** — a vendor engineer, contractor, cloud support partner or facilities staff member who has legitimate access to the organisation systems.\n\n| Aspect | Detail |\n|---|---|\n| How it happens | a support account with standing admin, a shared credential, an engineer who keeps access after the project ends |\n| Why it is invisible | the access is contractual; the activity looks like support work |\n| What differs | the timing and the scope — access outside a ticket window, access to data unrelated to the ticket, bulk queries |\n| Detection | privileged access management logs, session recording, comparison of ticket time with session time, and a quarterly attestation of vendor accounts |\n| Reduction | just-in-time access with approval, no standing administrator rights, session recording, vendor account expiry, named sponsor inside the company, and contract clauses on security, notification and audit |\n\n**The common principle.** Neither variant breaks a rule, so permission-based controls cannot see them. Detection must be behavioural — volume, time, device, resource — and reduction must be structural: fewer standing privileges, shorter sessions, and recording that makes the activity reviewable.\n\n**Exam line:** a compromised insider looks like a colleague and a third-party insider looks like a vendor — so watch the behaviour and remove the standing privilege.',
              diagram: 'se-insider',
              diagramCaption:
                'The compromised insider and the third-party insider — how each is detected and the structural controls that reduce the risk.',
            },
            {
              marks: 4,
              label: 'd',
              question:
                'Explain who is targeted in a business e-mail compromise campaign and how the finance team should be protected.',
              explain:
                '**What is being asked.** Targeting logic applied to BEC, plus the specific protection of a finance team.\n\n**Who is targeted.** Approvers, the person who changes bank details, the executive assistant, the accounts payable clerk, the treasurer, the new joiner, and anyone travelling (because the callback fails).\n\n**Protection.** Payment verification procedure, dual approval, limits, training with real examples, simulated BEC tests, a fast reporting route, and monitoring of new beneficiaries.\n\n**How to score the 4 marks.** Targeting logic (2) · four protections (2).',
              answer:
                'A BEC campaign targets the person who can move money, or the person who can make someone else move it.\n\n**Who is targeted**\n1. **Approvers** — the controller, the CFO, the treasurer: one signature releases the payment.\n2. **The person who maintains bank details** — accounts payable; a single change of beneficiary redirects every future payment.\n3. **The executive assistant** — has the authority of proximity and can instruct on the executive behalf.\n4. **The new joiner** — unsure of the process, unwilling to question a senior.\n5. **Anyone travelling or on leave** — the callback fails, so the second check silently disappears.\n6. **The vendor side** — a compromised supplier mailbox sends a genuine-looking invoice change.\n\n**How the finance team is protected**\n- **Callback verification on a known number** for every new beneficiary or change of bank details, from the vendor master record, never from the mail.\n- **Dual approval and per-approver limits**, so that one mailbox cannot release a large amount.\n- **A freeze on bank-detail changes** in the last days of a quarter or during a senior absence, unless verified by two channels.\n- **Training with the real mails the organisation has received**, plus periodic simulated BEC tests that measure the callback rate rather than only the click rate.\n- **A reporting route measured in minutes**, with a named person who can call the bank to attempt a recall.\n- **Monitoring of new beneficiaries and unusual payment patterns** in the banking portal.\n\n**The point to close with.** The finance team cannot be trained into infallibility, but the procedure can be made mechanical: no bank-detail change and no large payment without a callback that the requester did not supply. That single rule blocks the majority of BEC losses.\n\n**Exam line:** BEC targets the approver and the person who changes bank details — protect them with a callback rule and a limit, not with an annual poster.',
              diagram: 'se-targets',
              diagramCaption:
                'Who is targeted in a business e-mail compromise campaign, and the protections that apply to the finance team.',
            },
          ],
        },
      ],
    },
  ],
};
