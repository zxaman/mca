const FONT = "'Segoe UI', system-ui, sans-serif";

// Shared palette for the Digital Forensics (Cyber Security Unit IV) diagrams.
const C = {
  white: '#ffffff',
  dim: '#9ab0e0',
  faint: '#5a6a9e',
  cyan: '#00d4ff',
  blue: '#2f6fff',
  lime: '#c4ff00',
  green: '#00e676',
  orange: '#ff8800',
  purple: '#aa00ff',
  pink: '#ff7ab2',
  red: '#ff5252',
  teal: '#00bcd4',
  yellow: '#ffd600',
};

function Frame({ id, w = 920, h = 520, title, sub, label, children }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="diagram-svg"
      role="img"
      aria-label={label}
      data-diagram={id}
    >
      <text x={w / 2} y="30" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="800" fontFamily={FONT}>
        {title}
      </text>
      <text x={w / 2} y="50" textAnchor="middle" fill={C.dim} fontSize="10.5" fontFamily={FONT}>
        {sub}
      </text>
      {children}
    </svg>
  );
}

function Box({ x, y, w, h, title, sub, lines = [], color = C.cyan, delay = 0, radius = 12, fillOpacity = 0.05 }) {
  return (
    <g className="diagram-pop" style={{ animationDelay: `${delay}ms` }}>
      <rect x={x} y={y} width={w} height={h} rx={radius} fill={color} fillOpacity={fillOpacity} stroke={color} strokeWidth="1.6" strokeOpacity="0.8" />
      <rect x={x} y={y} width={w} height="28" rx={radius} fill={color} fillOpacity="0.16" />
      <text x={x + w / 2} y={y + 19} textAnchor="middle" fill={color} fontSize="10.5" fontWeight="800" fontFamily={FONT}>
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 46} textAnchor="middle" fill={C.white} fontSize="9.4" fontFamily={FONT}>
          {sub}
        </text>
      )}
      {lines.map((line, i) => (
        <text key={line} x={x + w / 2} y={y + (sub ? 62 : 46) + i * 15} textAnchor="middle" fill={C.dim} fontSize="8.9" fontFamily={FONT}>
          {line}
        </text>
      ))}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, color = C.lime, dashed = false, delay = 0, label, labelDx = 0, labelDy = -8 }) {
  const horiz = Math.abs(y2 - y1) < Math.abs(x2 - x1);
  const dir = horiz ? Math.sign(x2 - x1) : Math.sign(y2 - y1);
  const tipBack = 7;
  const head = 6;
  const px = horiz ? x2 - dir * tipBack : x2;
  const py = horiz ? y2 : y2 - dir * tipBack;
  const pts = horiz
    ? `${x2},${y2} ${px},${y2 - head} ${px},${y2 + head}`
    : `${x2},${y2} ${x2 - head},${py} ${x2 + head},${py}`;
  return (
    <g className="diagram-pop" style={{ animationDelay: `${delay}ms` }}>
      <line x1={x1} y1={y1} x2={px} y2={py} stroke={color} strokeWidth="1.7" strokeOpacity="0.85" strokeDasharray={dashed ? '5 4' : undefined} />
      <polygon points={pts} fill={color} fillOpacity="0.9" />
      {label && (
        <text x={(x1 + x2) / 2 + labelDx} y={(y1 + y2) / 2 + labelDy} textAnchor="middle" fill={color} fontSize="8.6" fontWeight="700" fontFamily={FONT}>
          {label}
        </text>
      )}
    </g>
  );
}

function Note({ x, y, text, color = C.dim, size = 9.8, anchor = 'middle', bold = false, delay = 0 }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={color}
      fontSize={size}
      fontWeight={bold ? 700 : 400}
      fontFamily={FONT}
      className="diagram-pop"
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </text>
  );
}

/* ------------------------------------------------------------------
   4.1 — Scope, history aur rules
   ------------------------------------------------------------------ */
export function DigitalForensicsIntroDiagram() {
  const eras = [
    ['1980s', 'computer forensics', C.teal],
    ['1990s', 'network + ACPO', C.cyan],
    ['2000s', 'NIST / ISO 27037', C.green],
    ['2010s', 'mobile, cloud, IoT', C.orange],
    ['2020s', 'AI triage, DFIR', C.purple],
  ];
  const branches = [
    ['DISK', 'file system, registry', C.cyan],
    ['NETWORK', 'PCAP, flow, logs', C.purple],
    ['MOBILE', 'SQLite, chats, GPS', C.orange],
    ['MEMORY', 'processes, keys', C.green],
    ['CLOUD', 'audit logs, tenant', C.teal],
  ];
  return (
    <Frame
      id="df-intro"
      title="Digital forensics — history, scope aur golden rules"
      sub="1980s computer forensics se 2020s AI-assisted DFIR tak — rules wahi rehte hain"
      label="Digital forensics timeline from 1980s computer forensics through 1990s network and ACPO guidance, 2000s NIST and ISO standards, 2010s mobile cloud IoT, to 2020s AI triage, with scope branches and golden rules"
    >
      <Arrow x1={70} y1={112} x2={850} y2={112} color={C.faint} dashed delay={40} />
      {eras.map(([era, what, col], i) => (
        <g key={era} className="diagram-pop" style={{ animationDelay: `${80 + i * 70}ms` }}>
          <circle cx={104 + i * 178} cy={112} r="9" fill={col} fillOpacity="0.85" />
          <text x={104 + i * 178} y={92} textAnchor="middle" fill={col} fontSize="10" fontWeight="800" fontFamily={FONT}>
            {era}
          </text>
          <text x={104 + i * 178} y={134} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>
            {what}
          </text>
        </g>
      ))}

      <Note x={460} y={166} text="SCOPE — evidence kahan se aata hai" color={C.dim} size={9.6} bold />
      {branches.map(([t, s2, col], i) => (
        <Box key={t} x={21 + i * 178} y={176} w={166} h={78} title={t} lines={[s2]} color={col} delay={420 + i * 60} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '760ms' }}>
        <rect x={21} y={276} width={878} height={118} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={300} textAnchor="middle" fill={C.lime} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          GOLDEN RULES — har case mein same
        </text>
        {[
          ['Original untouched', 'write blocker / duplicator'],
          ['Hash integrity', 'SHA-256 match'],
          ['Chain of custody', 'signed aur sealed'],
          ['Documentation', 'notes + tool version'],
          ['Reproducibility', 'doosra expert same result'],
          ['Legality', 'authorisation + 65B'],
        ].map(([t, s2], i) => (
          <g key={t}>
            <text x={44 + (i % 3) * 290} y={326 + Math.floor(i / 3) * 34} fill={C.cyan} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={44 + (i % 3) * 290} y={340 + Math.floor(i / 3) * 34} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s2}`}</text>
          </g>
        ))}
      </g>

      <Note x={460} y={420} text="Purpose: convict + exonerate + root cause + prevention — sirf punishment nahi" color={C.orange} size={9.6} />
      <Note x={460} y={450} text='Exam line: "Digital forensics digital evidence ko court-ready banane ki scientific discipline hai"' color={C.yellow} size={9.8} bold />
      <Note x={460} y={476} text="Standards: ISO/IEC 27037 · NIST SP 800-86 · ISO 17025 · IT Act 65B" color={C.teal} size={9.2} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.2 — Cyber forensics vs digital forensics
   ------------------------------------------------------------------ */
export function CyberVsDigitalForensicsDiagram() {
  return (
    <Frame
      id="df-vs-cyber"
      title="Cyber forensics vs digital forensics — scope map"
      sub="digital forensics parent hai, cyber forensics uska cybercrime branch"
      label="Scope map: digital forensics as the umbrella discipline covering disk, mobile, media, IoT, e-discovery, HR and civil cases, with cyber forensics as the branch covering hacking, malware, phishing and data breaches"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={74} width={404} height={230} rx="14" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.6" strokeOpacity="0.8" />
        <text x={226} y={100} textAnchor="middle" fill={C.cyan} fontSize="11.5" fontWeight="800" fontFamily={FONT}>
          DIGITAL FORENSICS — umbrella
        </text>
        <text x={226} y={120} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          kisi bhi digital device ya data ka examination
        </text>
        {[
          'disk, file system, registry',
          'mobile, media, CCTV DVR',
          'IoT, vehicle ECU, drone',
          'e-discovery, contract mails',
          'HR / disciplinary cases',
          'accident, insurance, tax',
          'missing person, CDR, GPS',
        ].map((s, i) => (
          <text key={s} x={48} y={148 + i * 21} fill={C.dim} fontSize="9" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '140ms' }}>
        <rect x={508} y={130} width={388} height={236} rx="14" fill="rgba(0,230,118,0.06)" stroke={C.green} strokeWidth="1.6" strokeOpacity="0.85" />
        <text x={702} y={156} textAnchor="middle" fill={C.green} fontSize="11.5" fontWeight="800" fontFamily={FONT}>
          CYBER FORENSICS — branch
        </text>
        <text x={702} y={176} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          sirf cyber offences (system = scene + instrument)
        </text>
        {[
          'hacking / unauthorised access',
          'malware, ransomware, trojan',
          'phishing, BEC, spoofing',
          'data breach, exfiltration',
          'network / web / DB evidence',
          'IT Act 66 / 66C / 66D',
        ].map((s, i) => (
          <text key={s} x={530} y={204 + i * 21} fill={C.dim} fontSize="9" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
        <text x={702} y={350} textAnchor="middle" fill={C.yellow} fontSize="8.8" fontFamily={FONT}>
          logs, PCAP, malware, web artefacts
        </text>
      </g>

      <Arrow x1={428} y1={200} x2={508} y2={200} color={C.green} delay={260} label="subset" labelDy={-10} />

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x={24} y={326} width={404} height={92} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={226} y={350} textAnchor="middle" fill={C.purple} fontSize="10" fontWeight="800" fontFamily={FONT}>
          SAME IN BOTH
        </text>
        <text x={226} y={374} textAnchor="middle" fill={C.dim} fontSize="8.9" fontFamily={FONT}>
          methodology · tools · hash · chain of custody
        </text>
        <text x={226} y={394} textAnchor="middle" fill={C.dim} fontSize="8.9" fontFamily={FONT}>
          ISO 27037 · 65B certificate · documentation
        </text>
      </g>

      <Note x={460} y={444} text="Different: scope of authorisation · applicable law (IT Act vs civil) · stakeholder (police vs HR)" color={C.orange} size={9.2} />
      <Note x={460} y={472} text='Exam line: "Har cyber forensics digital forensics hai, ulta zaroori nahi"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.3 — Roles aur environment
   ------------------------------------------------------------------ */
export function ForensicsRoleEnvironmentDiagram() {
  const roles = [
    ['FIRST RESPONDER', ['secure scene', 'preserve volatile'], C.cyan],
    ['EXAMINER', ['image + analyse', 'timeline, report'], C.green],
    ['LAB / QUALITY', ['SOP, ISO 17025', 'audit, competency'], C.lime],
    ['INCIDENT RESPONSE', ['contain attack', 'keep evidence'], C.orange],
    ['LEGAL COUNSEL', ['scope, authority', 'admissibility'], C.purple],
    ['EXPERT WITNESS', ['court testimony', 'cross-exam'], C.pink],
    ['CUSTODIAN', ['custody + storage', 'access log'], C.teal],
  ];
  return (
    <Frame
      id="df-role"
      title="Forensic roles aur lab environment"
      sub="kaam team effort hai — environment evidence ko defensible banata hai"
      label="Digital forensic roles including first responder, examiner, lab quality manager, incident response, legal counsel, expert witness and evidence custodian working inside an accredited isolated laboratory environment"
    >
      {roles.slice(0, 4).map(([t, lines, col], i) => (
        <Box key={t} x={27 + i * 220} y={76} w={206} h={92} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      {roles.slice(4).map(([t, lines, col], i) => (
        <Box key={t} x={131 + i * 226} y={186} w={206} h={92} title={t} lines={lines} color={col} delay={340 + i * 70} />
      ))}

      <Arrow x1={460} y1={278} x2={460} y2={302} color={C.lime} delay={560} label="environment" labelDx={66} labelDy={4} />
      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x={27} y={302} width={866} height={128} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={326} textAnchor="middle" fill={C.lime} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          LAB ENVIRONMENT — evidence ko defensible banata hai
        </text>
        {[
          ['Access control', 'CCTV, log, locked store'],
          ['Handling', 'ESD safe, Faraday bag'],
          ['Workstations', 'write blocker, no casual use'],
          ['Network', 'isolated, fake internet'],
          ['Storage', 'sealed, encrypted, tagged'],
          ['Quality', 'SOP + ISO 17025 + audit'],
        ].map(([t, s2], i) => (
          <g key={t}>
            <text x={50 + (i % 3) * 290} y={352 + Math.floor(i / 3) * 36} fill={C.cyan} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={50 + (i % 3) * 290} y={366 + Math.floor(i / 3) * 36} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s2}`}</text>
          </g>
        ))}
      </g>

      <Note x={460} y={456} text="Separation of duties: examiner aur custodian alag — tampering ka risk kam" color={C.orange} size={9.4} />
      <Note x={460} y={482} text='Exam line: "Environment weak = evidence challenged, chahe analysis sahi ho"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.4 — Forensic software aur hardware stack
   ------------------------------------------------------------------ */
export function ForensicHardwareSoftwareDiagram() {
  const pipeline = [
    ['DEVICE', ['disk, mobile', 'memory, SIM'], C.cyan],
    ['BLOCK / ISOLATE', ['write blocker', 'Faraday bag'], C.green],
    ['IMAGE + HASH', ['E01 / AFF4', 'SHA-256'], C.lime],
    ['ANALYSIS', ['suite + tools', 'workstation'], C.orange],
    ['VERIFY', ['hash match', 'CFTT report'], C.pink],
  ];
  return (
    <Frame
      id="df-hw-sw"
      title="Forensic hardware aur software stack"
      sub="hardware evidence ko bachata hai, software usse interpret karta hai"
      label="Forensic stack: device, write blocker or Faraday isolation, imaging with hash, analysis on a forensic workstation, and verification with hash match and NIST CFTT reports, along with hardware and software categories"
    >
      {pipeline.map(([t, lines, col], i) => (
        <Box key={t} x={21 + i * 178} y={76} w={166} h={92} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      {pipeline.slice(0, 4).map(([t], i) => (
        <Arrow key={`p-${t}`} x1={187 + i * 178} y1={122} x2={199 + i * 178} y2={122} color={C.faint} delay={420 + i * 40} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x={21} y={186} width={430} height={176} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={236} y={210} textAnchor="middle" fill={C.purple} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          HARDWARE
        </text>
        {[
          ['Write blocker', 'Tableau, CRU, WiebeTech'],
          ['Duplicator', 'Logicube, TD3 (built-in hash)'],
          ['Workstation', 'high RAM/CPU, dedicated ports'],
          ['Mobile kit', 'Cellebrite UFED, Oxygen, Magnet'],
          ['Faraday bag', 'radio isolation, anti-wipe'],
          ['ESD kit', 'mat, strap, anti-static bags'],
        ].map(([t, s2], i) => (
          <g key={t}>
            <text x={44} y={236 + i * 20} fill={C.yellow} fontSize="9.1" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={168} y={236 + i * 20} fill={C.dim} fontSize="8.7" fontFamily={FONT}>{`- ${s2}`}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={467} y={186} width={426} height={176} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={680} y={210} textAnchor="middle" fill={C.cyan} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          SOFTWARE
        </text>
        {[
          ['Imaging', 'FTK Imager, EnCase, dd, Guymager'],
          ['Suites', 'Autopsy, FTK, X-Ways, Nuix'],
          ['Memory', 'Volatility 3, Rekall, DumpIt'],
          ['Timeline', 'Plaso, Timesketch'],
          ['Recovery', 'PhotoRec, Scalpel, TestDisk'],
          ['Verify', 'sha256sum, NSRL hash sets'],
        ].map(([t, s2], i) => (
          <g key={t}>
            <text x={490} y={236 + i * 20} fill={C.lime} fontSize="9.1" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={578} y={236 + i * 20} fill={C.dim} fontSize="8.7" fontFamily={FONT}>{`- ${s2}`}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x={21} y={378} width={872} height={54} rx="12" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={400} textAnchor="middle" fill={C.red} fontSize="9.6" fontWeight="800" fontFamily={FONT}>
          HARDWARE WRITE BLOCKER &gt; SOFTWARE BLOCKER for legal cases (OS se independent)
        </text>
        <text x={460} y={420} textAnchor="middle" fill={C.dim} fontSize="8.8" fontFamily={FONT}>
          formats: E01 (hash + metadata) · AFF4 (open) · raw dd (simple) · L01 (logical)
        </text>
      </g>
      <Note x={460} y={460} text="Selection: validated (NIST CFTT) · licensed · capable · reproducible · reportable" color={C.orange} size={9.4} />
      <Note x={460} y={486} text='Exam line: "Tool kit ka serial aur version bhi evidence ka hissa hai"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.5 — Properties of digital evidence
   ------------------------------------------------------------------ */
export function DigitalEvidencePropertiesDiagram() {
  const technical = [
    ['Latent', 'tools se interpret hota hai'],
    ['Fragile', 'ek write/mount se badal'],
    ['Volatile', 'RAM, keys — power off'],
    ['Duplicable', 'bit-stream copy'],
    ['Voluminous', 'TB-scale data'],
    ['Time-sensitive', 'logs rotate/overwrite'],
    ['Trans-border', 'cloud jurisdiction'],
  ];
  const quality = [
    ['Authenticity', 'source verified'],
    ['Integrity', 'hash match'],
    ['Completeness', 'exculpatory bhi'],
    ['Accuracy', 'no truncation'],
    ['Granularity', 'detail level'],
    ['Reliability', 'validated + repeatable'],
    ['Relevance', 'case se juda'],
    ['Legality', 'authorised'],
  ];
  return (
    <Frame
      id="df-properties"
      title="Properties of digital evidence"
      sub="technical properties (nature) + evidentiary properties (quality)"
      label="Two families of digital evidence properties: technical properties such as latent, fragile, volatile, duplicable, voluminous, time-sensitive and trans-border, and evidentiary quality properties such as authenticity, integrity, completeness, accuracy, granularity, reliability, relevance and legality"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={72} width={430} height={288} rx="14" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={239} y={98} textAnchor="middle" fill={C.cyan} fontSize="10.8" fontWeight="800" fontFamily={FONT}>
          TECHNICAL — nature
        </text>
        {technical.map(([t, s2], i) => (
          <g key={t}>
            <text x={48} y={126 + i * 33} fill={C.white} fontSize="9.4" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={48} y={140 + i * 33} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{`- ${s2}`}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '140ms' }}>
        <rect x={466} y={72} width={430} height={288} rx="14" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={681} y={98} textAnchor="middle" fill={C.green} fontSize="10.8" fontWeight="800" fontFamily={FONT}>
          EVIDENTIARY — quality (ISO 27037)
        </text>
        {quality.map(([t, s2], i) => (
          <g key={t}>
            <text x={490} y={126 + i * 29} fill={C.white} fontSize="9.4" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={598} y={126 + i * 29} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{`- ${s2}`}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x={24} y={374} width={872} height={62} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={398} textAnchor="middle" fill={C.lime} fontSize="10" fontWeight="800" fontFamily={FONT}>
          PROVE KAISE KAREIN
        </text>
        <text x={460} y={420} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          SHA-256 hash · chain of custody · write blocker · full image · validated tools · 65B certificate
        </text>
      </g>

      <Note x={460} y={456} text="Ek property weak ho to poora case challenge hota hai — defence wahin attack karti hai" color={C.orange} size={9.4} />
      <Note x={460} y={482} text='Exam line: "Authenticity batati hai kahan se aayi, integrity batati hai badli nahi"' color={C.yellow} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.6 — Recovering aur preserving evidence
   ------------------------------------------------------------------ */
export function RecoveringPreservingEvidenceDiagram() {
  const preserve = [
    ['WRITE BLOCK', 'original read-only', C.cyan],
    ['IMAGE + HASH', 'E01 + SHA-256', C.green],
    ['SEAL + TAG', 'tamper evident', C.lime],
    ['FARADAY', 'mobile isolated', C.orange],
    ['LEGAL HOLD', 'no auto-delete', C.purple],
  ];
  const recover = [
    ['METADATA', ['$MFT / inode', 'name + timestamps'], C.cyan],
    ['CARVING', ['header/footer', 'content only'], C.green],
    ['UNALLOCATED', ['free + slack space', 'partial data'], C.orange],
    ['SNAPSHOT / LOG', ['VSS, binlog, RAM', 'purana state'], C.purple],
  ];
  return (
    <Frame
      id="df-recover"
      title="Recovering aur preserving digital evidence"
      sub="pehle preserve, phir copy par recover — har attempt document"
      label="Preservation controls such as write blocker, imaging with hash, sealing, Faraday isolation and legal hold, followed by recovery methods: metadata based recovery, file carving, unallocated and slack space, and snapshots or log replay"
    >
      <Note x={460} y={74} text="STEP 1 — PRESERVE" color={C.lime} size={9.8} bold />
      {preserve.map(([t, s2, col], i) => (
        <Box key={t} x={21 + i * 178} y={86} w={166} h={62} title={t} lines={[s2]} color={col} delay={60 + i * 60} />
      ))}
      <Arrow x1={460} y1={148} x2={460} y2={182} color={C.lime} delay={400} />

      <Note x={460} y={202} text="STEP 2 — RECOVER (copy par, original untouched)" color={C.orange} size={9.8} bold />
      {recover.map(([t, lines, col], i) => (
        <Box key={t} x={27 + i * 220} y={216} w={206} h={88} title={t} lines={lines} color={col} delay={460 + i * 70} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '780ms' }}>
        <rect x={27} y={330} width={866} height={82} rx="12" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={354} textAnchor="middle" fill={C.red} fontSize="10" fontWeight="800" fontFamily={FONT}>
          RECOVERY KO MUSHKIL BANANE WALE FACTORS
        </text>
        <text x={460} y={376} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          SSD TRIM · encryption · secure wipe · overwrite · cloud sync · physical damage · time delay
        </text>
        <text x={460} y={398} textAnchor="middle" fill={C.orange} fontSize="9" fontFamily={FONT}>
          recovery fail hona case fail nahi — alternative evidence source dhoondho
        </text>
      </g>

      <Note x={460} y={440} text="Recovery tools: Autopsy, FTK, TestDisk (metadata) · PhotoRec, Scalpel (carving) · Volatility (memory)" color={C.dim} size={9.2} />
      <Note x={460} y={468} text='Exam line: "Delete hone par data turant nahi jaata — cluster reuse hone par jaata hai"' color={C.yellow} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.7 — Advanced forensic tools
   ------------------------------------------------------------------ */
export function AdvancedForensicToolsDiagram() {
  const fams = [
    ['SUITES', ['EnCase, FTK', 'X-Ways, Nuix'], C.red],
    ['MOBILE', ['Cellebrite', 'AXIOM, Oxygen'], C.orange],
    ['MEMORY', ['Volatility 3', 'Rekall, DumpIt'], C.cyan],
    ['TIMELINE', ['Plaso', 'Timesketch, KAPE'], C.lime],
    ['NETWORK', ['Zeek, Wireshark', 'Arkime'], C.purple],
    ['CARVING', ['bulk_extractor', 'PhotoRec'], C.pink],
    ['CLOUD', ['AXIOM Cloud', 'CloudTrail API'], C.teal],
    ['MALWARE / AI', ['Ghidra, CAPA', 'YARA, ML triage'], C.yellow],
  ];
  return (
    <Frame
      id="df-tools"
      title="Advanced forensic tools — capability map"
      sub="basic imaging se aage: memory, mobile, cloud, timeline aur review"
      label="Advanced forensic tool families: commercial suites, mobile platforms, memory analysis, timeline and triage, network, carving, cloud forensics, and malware plus AI tools, all requiring validation and documentation"
    >
      {fams.map(([t, lines, col], i) => (
        <Box
          key={t}
          x={26 + (i % 4) * 220}
          y={74 + Math.floor(i / 4) * 112}
          w={206}
          h={100}
          title={t}
          lines={lines}
          color={col}
          delay={60 + i * 60}
        />
      ))}

      <Arrow x1={460} y1={300} x2={460} y2={322} color={C.lime} delay={540} />
      <g className="diagram-pop" style={{ animationDelay: '580ms' }}>
        <rect x={26} y={322} width={862} height={78} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={346} textAnchor="middle" fill={C.lime} fontSize="10" fontWeight="800" fontFamily={FONT}>
          ADVANCED CAPABILITIES
        </text>
        <text x={460} y={368} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          super-timeline · hash-set de-duplication · entity / link analysis · keyword + YARA search
        </text>
        <text x={460} y={388} textAnchor="middle" fill={C.orange} fontSize="9" fontFamily={FONT}>
          AI triage aur clustering — human verification mandatory
        </text>
      </g>

      <Note x={460} y={428} text="Open source: Autopsy, Volatility, Plaso, Zeek, Ghidra, Velociraptor, KAPE — dual-tool verification" color={C.dim} size={9.2} />
      <Note x={460} y={456} text="Selection: validated (NIST CFTT) · licensed · supported formats · hashing + audit log" color={C.orange} size="9.2" />
      <Note x={460} y={484} text='Exam line: "Advanced tool ka output utna hi admissible hai jitna uska process"' color={C.yellow} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.8 — Selecting aur analyzing evidence
   ------------------------------------------------------------------ */
export function SelectingAnalyzingEvidenceDiagram() {
  return (
    <Frame
      id="df-select"
      title="Selecting aur analyzing digital evidence"
      sub="bade data set se relevant artefacts — documented selection, falsifiable analysis"
      label="Evidence selection funnel: case theory and legal scope, then selection filters such as time window, custodian, hash sets and keywords, then timeline and correlation, then hypothesis testing including the innocent explanation, ending in findings traceable to artefacts"
    >
      <Box x={60} y={72} w={800} h={58} title="CASE THEORY + LEGAL SCOPE" sub="kya allegation hai, kya prove karna hai, authority kya hai" color={C.blue} delay={60} />
      <Arrow x1={460} y1={130} x2={460} y2={148} color={C.faint} delay={180} />
      <Box x={120} y={148} w={680} h={58} title="SELECTION FILTERS" sub="time window · custodian · hash sets (NSRL) · keyword / regex · file type" color={C.cyan} delay={220} />
      <Arrow x1={460} y1={206} x2={460} y2={224} color={C.faint} delay={340} />
      <Box x={180} y={224} w={560} h={58} title="TIMELINE + CORRELATION" sub="super-timeline · independent sources · anti-forensic check" color={C.green} delay={380} />
      <Arrow x1={460} y1={282} x2={460} y2={300} color={C.faint} delay={500} />
      <Box x={240} y={300} w={440} h={58} title="HYPOTHESIS TESTING" sub="innocent explanation bhi formally test karo" color={C.orange} delay={540} />
      <Arrow x1={460} y1={358} x2={460} y2={376} color={C.faint} delay={620} />
      <Box x={300} y={376} w={320} h={58} title="FINDINGS + ARTEFACT TRACE" sub="evidence table + limitations" color={C.pink} delay={660} />

      <Note x={460} y={460} text="Bias control: falsification · corroboration · dual-tool · peer review · full documentation" color={C.orange} size={9.2} />
      <Note x={460} y={488} text='Exam line: "Documented selection na ho to analysis court mein challenge hota hai"' color={C.yellow} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.9 — Validating the evidence
   ------------------------------------------------------------------ */
export function ValidatingEvidenceDiagram() {
  const layers = [
    ['1. TOOL VALIDATION', 'NIST CFTT report · known-answer test · regression after upgrade', 800, 60, C.cyan],
    ['2. PROCESS VERIFICATION', 'hash recompute + match · dual-tool · write-blocker log · peer review', 680, 120, C.green],
    ['3. EVIDENCE VALIDATION', 'serial / IMEI · seal intact · custody unbroken · corroboration', 560, 180, C.orange],
    ['4. LEGAL ADMISSIBILITY', 'Section 65B certificate · Daubert criteria · expert qualification', 440, 240, C.pink],
  ];
  return (
    <Frame
      id="df-validate"
      title="Validating the evidence — 4 layers"
      sub="cross-examination ka defence: records, na ki confidence"
      label="Four validation layers of digital evidence: tool validation through NIST CFTT and known-answer tests, process verification through hashing and dual tool comparison, evidence validation through seals and custody, and legal admissibility through section 65B and Daubert criteria"
    >
      {layers.map(([t, s2, w, x, col], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${60 + i * 90}ms` }}>
          <rect x={x} y={74 + i * 64} width={w} height={52} rx="10" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.5" strokeOpacity="0.85" />
          <text x={x + w / 2} y={96 + i * 64} textAnchor="middle" fill={col} fontSize="10" fontWeight="800" fontFamily={FONT}>
            {t}
          </text>
          <text x={x + w / 2} y={114 + i * 64} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>
            {s2}
          </text>
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <Arrow key={`va${i}`} x1={460} y1={126 + i * 64} x2={460} y2={136 + i * 64} color={C.faint} delay={420 + i * 40} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={110} y={340} width={700} height={70} rx="12" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={364} textAnchor="middle" fill={C.red} fontSize="9.8" fontWeight="800" fontFamily={FONT}>
          EVIDENCE INVALID KARNE WALE FACTORS
        </text>
        <text x={460} y={386} textAnchor="middle" fill={C.dim} fontSize="8.9" fontFamily={FONT}>
          hash mismatch · custody gap · unvalidated tool · undocumented steps · unauthorised access
        </text>
        <text x={460} y={402} textAnchor="middle" fill={C.faint} fontSize="8.4" fontFamily={FONT}>
          inme se koi ek bhi mile to poora case challenge ho sakta hai
        </text>
      </g>

      <Note x={460} y={440} text="Case file mein rakho: acquisition log · hash log · validation report · SOP version · reviewer sign-off" color={C.orange} size={9.2} />
      <Note x={460} y={468} text='Exam line: "Tool calibrate karna validation hai, aaj ka weight check karna verification"' color={C.yellow} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.10 — Forensic technology aur practices
   ------------------------------------------------------------------ */
export function ForensicTechnologyPracticesDiagram() {
  return (
    <Frame
      id="df-tech"
      title="Forensic technology aur practices"
      sub="standards + lab practices + emerging tech + ethics"
      label="Forensic technology and practices triangle: standards such as ISO 27037, 27041 to 27043, ISO 17025 and NIST, laboratory practices such as SOP, validation, competency, peer review and audit, and emerging technology such as cloud, remote acquisition, IoT, blockchain and AI triage, all under ethical requirements"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={72} width={280} height={252} rx="12" fill="rgba(170,0,255,0.06)" stroke={C.purple} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={164} y={96} textAnchor="middle" fill={C.purple} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          STANDARDS
        </text>
        {[
          'ISO/IEC 27037 evidence',
          'ISO/IEC 27041 method',
          'ISO/IEC 27042 analysis',
          'ISO/IEC 27043 process',
          'ISO/IEC 17025 lab',
          'NIST SP 800-86 / 101',
          'SWGDE / ACPO guides',
          'RFC 3227 volatility',
        ].map((s, i) => (
          <text key={s} x={44} y={124 + i * 24} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '140ms' }}>
        <rect x={320} y={72} width={280} height={252} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={460} y={96} textAnchor="middle" fill={C.cyan} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          LAB PRACTICES
        </text>
        {[
          'SOP + work instructions',
          'tool validation + change',
          'competency + proficiency',
          'peer review of findings',
          'internal audit + CAPA',
          'exhibit management',
          'isolated lab network',
          'reporting template',
        ].map((s, i) => (
          <text key={s} x={340} y={124 + i * 24} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x={616} y={72} width={280} height={252} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={756} y={96} textAnchor="middle" fill={C.green} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          EMERGING TECH
        </text>
        {[
          'cloud / SaaS forensics',
          'remote live acquisition',
          'memory + container / K8s',
          'IoT, vehicle, drone',
          'blockchain tracing',
          'AI / ML triage + review',
          'DFIR automation (SOAR)',
          'privacy-preserving tools',
        ].map((s, i) => (
          <text key={s} x={636} y={124 + i * 24} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <Arrow x1={460} y1={326} x2={460} y2={350} color={C.lime} delay={480} />

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={110} y={352} width={700} height={68} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={376} textAnchor="middle" fill={C.lime} fontSize="10" fontWeight="800" fontFamily={FONT}>
          ETHICS — authorisation · privacy (DPDP) · impartiality · confidentiality
        </text>
        <text x={460} y={398} textAnchor="middle" fill={C.dim} fontSize="8.9" fontFamily={FONT}>
          competence · disclosure of limitations · no tampering · exculpatory evidence bhi report
        </text>
        <text x={460} y={411} textAnchor="middle" fill={C.faint} fontSize="8.2" fontFamily={FONT}>
          standard + SOP + validation = defensible forensics
        </text>
      </g>

      <Note x={460} y={450} text="India: IT Act 2000 Section 65B + CERT-In directions; global: ISO 17025 accreditation" color={C.orange} size={9.2} />
      <Note x={460} y={480} text='Exam line: "Tool badalte rehte hain, validation aur documentation nahi"' color={C.yellow} size={9.6} bold />
    </Frame>
  );
}
