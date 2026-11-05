const FONT = "'Segoe UI', system-ui, sans-serif";

// Shared palette for the Cyber Forensics (Cyber Security Unit III) diagrams.
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
   3.1 — Cyber forensics: scope aur rules
   ------------------------------------------------------------------ */
export function CyberForensicsIntroDiagram() {
  const sources = [
    ['DISK', ['files, $MFT', 'deleted data'], C.cyan],
    ['RAM', ['processes, keys', 'connections'], C.green],
    ['NETWORK', ['PCAP, NetFlow', 'logs'], C.purple],
    ['MOBILE', ['SQLite, GPS', 'chats'], C.orange],
    ['CLOUD', ['audit logs', 'mailbox export'], C.teal],
  ];
  return (
    <Frame
      id="cf-intro"
      title="Cyber forensics — scope aur golden rules"
      sub="digital crime scene → preservation + hash → analysis → legally valid report"
      label="Cyber forensics scope: disk, RAM, network, mobile and cloud sources are preserved with hashing, analysed and presented as a legally valid report under Locard principle, chain of custody and Section 65B"
    >
      <Note x={460} y={74} text="DIGITAL CRIME SCENE — evidence ke sources" color={C.dim} size={9.6} bold />
      {sources.map(([t, lines, col], i) => (
        <Box key={t} x={17 + i * 180} y={84} w={166} h={86} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      <Arrow x1={460} y1={170} x2={460} y2={196} color={C.lime} delay={420} label="preserve" labelDx={52} labelDy={4} />
      <Box x={92} y={196} w={736} h={58} title="PRESERVATION + INTEGRITY" sub="write blocker / RAM dump pehle · SHA-256 hash · chain of custody" color={C.lime} delay={460} />
      <Arrow x1={460} y1={254} x2={460} y2={278} color={C.orange} delay={520} />
      <Box x={92} y={278} w={736} h={58} title="EXAMINATION + ANALYSIS" sub="timeline · artifacts correlate · attacker vs user activity · reproducibility" color={C.orange} delay={560} />
      <Arrow x1={460} y1={336} x2={460} y2={360} color={C.pink} delay={620} />
      <Box x={92} y={360} w={736} h={58} title="REPORT + PRESENTATION" sub="findings · methodology · IT Act 2000 Section 65B certificate · expert testimony" color={C.pink} delay={660} />

      <Note x={460} y={452} text="Locard: every contact leaves a trace  ·  hash match  ·  order of volatility (RFC 3227)" color={C.dim} size={9.6} />
      <Note x={460} y={476} text='Exam line: "Cyber forensics = digital evidence ko court-ready banane ki scientific process"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.2 — Investigation process
   ------------------------------------------------------------------ */
export function ForensicsProcessDiagram() {
  const row1 = [
    ['1. IDENTIFICATION', ['incident detect', 'scope + authority'], C.cyan],
    ['2. PRESERVATION', ['scene secure', 'no tampering'], C.green],
    ['3. ACQUISITION', ['image + RAM', 'hash compute'], C.lime],
    ['4. EXAMINATION', ['extract data', 'logs, registry'], C.orange],
  ];
  const row2 = [
    ['5. ANALYSIS', ['timeline', 'correlation'], C.purple],
    ['6. DOCUMENTATION', ['notes + tool ver', 'hash record'], C.pink],
    ['7. REPORTING', ['findings', 'expert testimony'], C.teal],
    ['CHECK: 65B', ['certificate', 'custody form'], C.yellow],
  ];
  return (
    <Frame
      id="cf-process"
      title="Cyber forensics investigation process"
      sub="NIST SP 800-86 flow — har phase par chain of custody"
      label="Seven phase cyber forensics investigation process: identification, preservation, acquisition, examination, analysis, documentation and reporting, each with chain of custody and hashing"
    >
      {row1.map(([t, lines, col], i) => (
        <Box key={t} x={36 + i * 216} y={78} w={200} h={96} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      {row2.map(([t, lines, col], i) => (
        <Box key={t} x={36 + i * 216} y={222} w={200} h={96} title={t} lines={lines} color={col} delay={380 + i * 70} />
      ))}
      <Arrow x1={836} y1={174} x2={836} y2={222} color={C.lime} delay={340} label="volatile first" labelDx={-52} labelDy={0} />
      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x={36} y={344} width={848} height={62} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={368} textAnchor="middle" fill={C.lime} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          CHAIN OF CUSTODY — har transfer signed, sealed, hash verified
        </text>
        <text x={460} y={390} textAnchor="middle" fill={C.dim} fontSize="9.2" fontFamily={FONT}>
          exhibit number · collector · date/time · SHA-256 · storage location · access log
        </text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '760ms' }}>
        <rect x={36} y={418} width={848} height={54} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.orange} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={460} y={440} textAnchor="middle" fill={C.orange} fontSize="9.8" fontWeight="800" fontFamily={FONT}>
          ORDER OF VOLATILITY: RAM → swap/network state → temp & logs → disk → remote logs/backups → printouts
        </text>
        <text x={460} y={460} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          Standards: NIST SP 800-86 · ISO/IEC 27037 · RFC 3227 · IT Act 65B
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.3 — Digital evidence handling
   ------------------------------------------------------------------ */
export function DigitalEvidenceDiagram() {
  return (
    <Frame
      id="cf-evidence"
      title="Digital evidence — source se court tak"
      sub="acquire → verify → analyse copy → present (original untouched)"
      label="Digital evidence handling flow: sources, write blocker and bit stream image with hash, verified working copy for analysis, and a 65B report for court"
    >
      <Box x={20} y={82} w={196} h={118} title="SOURCES" sub="disk · RAM · logs" lines={['network · mobile', 'database · e-mail', 'cloud audit logs']} color={C.cyan} delay={60} />
      <Arrow x1={216} y1={141} x2={248} y2={141} color={C.cyan} delay={150} label="seize" />
      <Box x={248} y={82} w={196} h={118} title="WRITE BLOCKER" sub="read-only access" lines={['original unaltered', 'RAM dump first', 'forensic image']} color={C.green} delay={190} />
      <Arrow x1={444} y1={141} x2={476} y2={141} color={C.green} delay={280} label="E01 / dd" />
      <Box x={476} y={82} w={196} h={118} title="IMAGE + HASH" sub="SHA-256 record" lines={['bit-stream copy', 'hash original = image', 'two copies']} color={C.lime} delay={320} />
      <Arrow x1={672} y1={141} x2={704} y2={141} color={C.lime} delay={410} label="verify" />
      <Box x={704} y={82} w={196} h={118} title="ANALYSIS COPY" sub="original sealed" lines={['timeline + artifacts', 'notes + screenshots', 'reproducible']} color={C.orange} delay={450} />

      <Arrow x1={802} y1={200} x2={802} y2={228} color={C.orange} delay={520} />
      <Box x={560} y={228} w={340} h={78} title="REPORT + 65B CERTIFICATE" sub="findings, methodology, limitations" lines={['expert testimony + evidence appendix']} color={C.pink} delay={560} />

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x={20} y={228} width={520} height={168} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={280} y={252} textAnchor="middle" fill={C.purple} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          ADMISSIBILITY — ACPO criteria
        </text>
        {[
          ['Authentic', 'hash + custody + logs'],
          ['Complete', 'exculpatory bhi shamil'],
          ['Reliable', 'tested tools, reproducible'],
          ['Believable', 'clear, defensible'],
          ['Relevant', 'case facts se juda'],
          ['Legally obtained', 'warrant / consent'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={44} y={278 + i * 19} fill={C.lime} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{`${i + 1}. ${t}`}</text>
            <text x={190} y={278 + i * 19} fill={C.dim} fontSize="9" fontFamily={FONT}>{`— ${s}`}</text>
          </g>
        ))}
      </g>

      <Note x={460} y={424} text="Properties: latent · fragile · volatile · duplicable · time-sensitive · cross-border" color={C.dim} size={9.6} />
      <Note x={460} y={448} text='Exam line: "Original preserve karo, copy par kaam karo, hash se integrity prove karo"' color={C.yellow} size={9.8} bold />
      <Note x={460} y={472} text="India: IT Act 2000 Section 65B — electronic record ka certificate" color={C.teal} size={9.4} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.4 — Challenges
   ------------------------------------------------------------------ */
export function ForensicsChallengesDiagram() {
  const items = [
    ['ENCRYPTION', ['BitLocker / LUKS', 'key RAM mein'], C.red],
    ['DATA VOLUME', ['TB disks', 'millions of logs'], C.orange],
    ['ANTI-FORENSICS', ['log clear', 'timestomping'], C.purple],
    ['VOLATILITY', ['RAM, connections', 'power off = lost'], C.cyan],
    ['CLOUD + LEGAL', ['jurisdiction', '65B, privacy'], C.teal],
    ['SKILLS + COST', ['trained examiner', 'backlog'], C.pink],
  ];
  return (
    <Frame
      id="cf-challenges"
      title="Cyber forensics ke challenges aur solutions"
      sub="technical · legal · organisational — har challenge ka ek counter-source"
      label="Six cyber forensics challenges: encryption, data volume, anti-forensics, volatility, cloud and legal issues, skills and cost, with mitigation strategies such as triage, memory capture, SIEM and legal process"
    >
      {items.map(([t, lines, col], i) => (
        <Box key={t} x={26 + (i % 3) * 294} y={76 + Math.floor(i / 3) * 118} w={280} h={104} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      <Arrow x1={460} y1={318} x2={460} y2={344} color={C.lime} delay={500} label="mitigation" labelDx={58} labelDy={4} />
      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={26} y={344} width={862} height={92} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={368} textAnchor="middle" fill={C.lime} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          SOLUTIONS — triage, memory capture, central logs, legal process, training
        </text>
        <text x={460} y={390} textAnchor="middle" fill={C.dim} fontSize="9.2" fontFamily={FONT}>
          encryption: key from RAM / TPM escrow · volume: filters + AI clustering
        </text>
        <text x={460} y={410} textAnchor="middle" fill={C.dim} fontSize="9.2" fontFamily={FONT}>
          anti-forensics: SIEM + $UsnJrnl · cloud: audit log export + MLAT · skills: open-source tools
        </text>
      </g>
      <Note x={460} y={462} text='Exam line: "Har challenge ka ek alternate evidence source hota hai — wahi investigate karo"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.5 — Web attack / intrusion forensics
   ------------------------------------------------------------------ */
export function IntrusionForensicsDiagram() {
  const chain = [
    ['RECON', ['scan, 404 flood', 'nikto/sqlmap'], C.cyan],
    ['EXPLOIT', ['SQLi, XSS', 'LFI, RFI'], C.orange],
    ['FOOTHOLD', ['webshell', 'upload'], C.red],
    ['PRIVESC', ['sudo, local', 'exploit'], C.purple],
    ['LATERAL', ['SSH/RDP', 'SMB'], C.pink],
    ['EXFIL', ['archive +', 'outbound'], C.yellow],
  ];
  return (
    <Frame
      id="cf-intrusion"
      title="Web attack forensics — recon se exfiltration tak"
      sub="har stage ka apna log source — milkar banate hain attack narrative"
      label="Web attack forensic chain: reconnaissance, exploitation, foothold with webshell, privilege escalation, lateral movement and exfiltration, with the log sources that record each stage"
    >
      {chain.map(([t, lines, col], i) => (
        <Box key={t} x={20 + i * 148} y={80} w={136} h={104} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      {chain.slice(0, 5).map(([t], i) => (
        <Arrow key={`a-${t}`} x1={156 + i * 148} y1={132} x2={168 + i * 148} y2={132} color={C.faint} delay={440 + i * 40} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x={20} y={200} width={880} height={172} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.teal} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={150} y={222} textAnchor="middle" fill={C.teal} fontSize="10" fontWeight="800" fontFamily={FONT}>
          EVIDENCE SOURCES
        </text>
        <text x={470} y={222} textAnchor="middle" fill={C.teal} fontSize="10" fontWeight="800" fontFamily={FONT}>
          ATTACK SIGNATURE (log mein)
        </text>
        <text x={780} y={222} textAnchor="middle" fill={C.teal} fontSize="10" fontWeight="800" fontFamily={FONT}>
          KYA PROVE HOTA HAI
        </text>
        {[
          ['Access log', 'IP, time, URI, status'],
          ['Error log', '500/403 spike'],
          ['WAF / proxy', 'blocked payload'],
          ['App log', 'login, admin action'],
          ['DB log', 'injected query'],
          ['auth.log / EDR', 'shell spawn, cron'],
        ].map(([t, s2], i) => (
          <text key={t} x={44} y={250 + i * 20} fill={C.cyan} fontSize="9" fontFamily={FONT}>
            {t} <tspan fill={C.dim}>{`(${s2})`}</tspan>
          </text>
        ))}
        {[
          ['UNION SELECT, OR 1=1', 'SQL injection'],
          ['%3Cscript%3E, onerror=', 'XSS attempt'],
          ['../../etc/passwd', 'path traversal'],
          ['; whoami, | id', 'command injection'],
          ['.php upload + ?cmd=', 'webshell'],
          ['repeated 401/302', 'brute force'],
        ].map(([sig, what], i) => (
          <g key={sig}>
            <text x={330} y={248 + i * 20} fill={C.orange} fontSize="8.8" fontFamily={FONT}>{sig}</text>
            <text x={676} y={248 + i * 20} fill={C.white} fontSize="8.6" fontFamily={FONT}>{what}</text>
          </g>
        ))}
        <text x={460} y={366} textAnchor="middle" fill={C.faint} fontSize="8.4" fontFamily={FONT}>
          decode URL / base64 → timeline → attack narrative
        </text>
      </g>

      <Note x={460} y={382} text="Analysis: URL/base64 decode → timeline → cross-layer correlate → affected accounts & data → preserve with hash" color={C.dim} size={9.4} />
      <Note x={460} y={408} text="Output: report + IOC list (IP, domain, user-agent, hash) + detection rules" color={C.orange} size={9.6} />
      <Note x={460} y={440} text='Exam line: "Access log attack ki diary hoti hai — har request ek entry"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.6 — Database forensics
   ------------------------------------------------------------------ */
export function DatabaseForensicsDiagram() {
  const sources = [
    ['DB FILES', ['tables, pages, .ibd'], C.cyan],
    ['TRANSACTION LOG', ['binlog / WAL / LDF'], C.green],
    ['AUDIT TRAIL', ['who, what, when'], C.orange],
    ['GENERAL / ERROR LOG', ['all queries, failed'], C.purple],
  ];
  return (
    <Frame
      id="cf-database"
      title="Database forensics — logs se proof tak"
      sub="production par modifying query nahi — restore copy par read-only analysis"
      label="Database forensics flow: database files, transaction logs, audit trail and general logs feed a restored read-only forensic copy where log mining and replay identify who changed which records and when"
    >
      <Note x={140} y={74} text="EVIDENCE SOURCES" color={C.dim} size={9.6} bold />
      {sources.map(([t, lines, col], i) => (
        <Box key={t} x={24} y={82 + i * 78} w={232} h={68} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      <Arrow x1={256} y1={220} x2={296} y2={220} color={C.lime} delay={360} label="export" labelDy={-6} />

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x={296} y={82} width={296} height={294} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.75" />
        <text x={444} y={106} textAnchor="middle" fill={C.lime} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          RESTORE COPY (read-only)
        </text>
        {[
          'backup restore to forensic instance',
          'binlog / WAL replay',
          'point-in-time recovery',
          'page & row analysis (DBCC PAGE)',
          'log mining (mysqlbinlog, fn_dblog)',
          'checksum / row count verify',
          'har query documented',
        ].map((s, i) => (
          <text key={s} x={316} y={134 + i * 24} fill={C.dim} fontSize="9" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
        <text x={444} y={318} textAnchor="middle" fill={C.orange} fontSize="9" fontFamily={FONT}>
          original DB untouched · hash recorded
        </text>
        <text x={444} y={344} textAnchor="middle" fill={C.white} fontSize="9.2" fontWeight="700" fontFamily={FONT}>
          replay = deleted row wapas
        </text>
        <text x={444} y={362} textAnchor="middle" fill={C.white} fontSize="9.2" fontWeight="700" fontFamily={FONT}>
          PITR = incident se pehle ka state
        </text>
      </g>

      <Arrow x1={592} y1={220} x2={632} y2={220} color={C.orange} delay={560} label="findings" labelDy={-6} />
      {[
        ['KISNE', ['user, IP, session'], C.orange],
        ['KAB', ['LSN + timestamp'], C.cyan],
        ['KYA', ['before / after image'], C.pink],
      ].map(([t, lines, col], i) => (
        <Box key={t} x={632} y={82 + i * 100} w={264} h={86} title={t} lines={lines} color={col} delay={600 + i * 70} />
      ))}

      <Note x={460} y={404} text="Sources per DBMS: MySQL binlog · SQL Server .ldf · Oracle redo/archive · PostgreSQL WAL" color={C.dim} size={9.4} />
      <Note x={460} y={430} text="Use: insider data theft, fraud, SQL injection ka impact, compliance (PCI DSS, DPDP Act)" color={C.orange} size={9.6} />
      <Note x={460} y={458} text='Exam line: "Database ka sach transaction log mein hota hai, table mein nahi"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.7 — Preventive forensics
   ------------------------------------------------------------------ */
export function PreventiveForensicsDiagram() {
  const sources = [
    ['HOSTS', ['EDR, Sysmon', 'auth.log'], C.cyan],
    ['NETWORK', ['firewall, proxy', 'NetFlow'], C.green],
    ['DATABASE', ['audit, pgaudit', 'binlog'], C.orange],
    ['CLOUD', ['CloudTrail', 'Activity Log'], C.purple],
  ];
  return (
    <Frame
      id="cf-preventive"
      title="Preventive forensics — readiness architecture"
      sub="incident se pehle evidence ready: collect → protect → retain → investigate fast"
      label="Preventive forensics architecture: hosts, network, database and cloud logs flow into central logging with NTP, FIM and EDR, then into immutable WORM storage with defined retention, enabling fast admissible investigation"
    >
      {sources.map(([t, lines, col], i) => (
        <Box key={t} x={27 + i * 220} y={76} w={206} h={86} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <Arrow key={`d${i}`} x1={130 + i * 220} y1={162} x2={130 + i * 220} y2={190} color={C.faint} delay={340 + i * 40} />
      ))}
      <Box x={27} y={190} w={866} h={80} title="CENTRAL LOGGING + NTP + FIM + EDR" sub="local logs attacker delete kar sakta hai — central copy safe rehti hai" lines={['sab hosts ka clock sync (UTC) · file integrity monitoring · endpoint telemetry']} color={C.lime} delay={420} />
      <Arrow x1={460} y1={270} x2={460} y2={298} color={C.orange} delay={480} />
      <Box x={27} y={298} w={866} h={76} title="IMMUTABLE / WORM STORE + RETENTION" sub="log signing · offsite copy · least privilege · no delete rights" lines={['PCI DSS 10: 1 year total, 3 months hot · firewall 6-12 months · DB audit 12 months']} color={C.orange} delay={520} />
      <Arrow x1={460} y1={374} x2={460} y2={400} color={C.pink} delay={580} />
      <Box x={240} y={400} w={440} h={72} title="INVESTIGATION READY" sub="fast RCA + admissible evidence" lines={['timeline minutes mein, court-proof report']} color={C.pink} delay={620} />
      <Note x={460} y={498} text='Exam line: "Bina time sync ke timeline nahi banti — NTP sabse zaroori readiness control"' color={C.yellow} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.8 — Anti-forensics practices
   ------------------------------------------------------------------ */
export function AntiForensicsPracticesDiagram() {
  const cats = [
    ['1. DATA DESTRUCTION', ['sdelete, shred, cipher /w', 'DBAN, disk destroy', 'crypto-erase (key delete)'], C.red],
    ['2. DATA HIDING', ['encryption / containers', 'steganography (image, audio)', 'NTFS ADS, slack space'], C.purple],
    ['3. TRAIL OBFUSCATION', ['log clear (Event 1102)', 'timestomping, log injection', 'Tor, VPN, MAC spoofing'], C.orange],
    ['4. ANTI-ANALYSIS EVASION', ['packing (UPX), obfuscation', 'VM / sandbox / debugger detect', 'rootkit hiding, sleep timer'], C.cyan],
  ];
  return (
    <Frame
      id="cf-antiforensics"
      title="Anti-forensics practices — attacker ki cleanup"
      sub="evidence ko destroy karo, chhupao, ya mislead karo"
      label="Four categories of anti-forensics practices: data destruction with wiping, data hiding with encryption and steganography, trail obfuscation with log clearing and timestomping, and anti-analysis evasion with packing and sandbox detection"
    >
      {cats.map(([t, lines, col], i) => (
        <Box
          key={t}
          x={30 + (i % 2) * 440}
          y={78 + Math.floor(i / 2) * 132}
          w={420}
          h={108}
          title={t}
          lines={lines}
          color={col}
          delay={60 + i * 90}
        />
      ))}
      <Arrow x1={460} y1={342} x2={460} y2={364} color={C.lime} delay={500} label="detect" labelDx={48} labelDy={4} />
      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={30} y={364} width={860} height={84} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={388} textAnchor="middle" fill={C.lime} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          DETECTION KE COUNTER-ARTIFACTS
        </text>
        <text x={460} y={410} textAnchor="middle" fill={C.dim} fontSize="9.2" fontFamily={FONT}>
          central logs · $MFT / $UsnJrnl · timestamp mismatch · hash baseline · YARA / memory diff
        </text>
        <text x={460} y={432} textAnchor="middle" fill={C.orange} fontSize="9" fontFamily={FONT}>
          evidence destruction = offence + court adverse inference
        </text>
      </g>
      <Note x={460} y={478} text='Exam line: "Anti-forensics sach ko mitaata nahi — sirf chhupata hai, nishaan reh jaata hai"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.9 — Anti-forensics detection
   ------------------------------------------------------------------ */
export function AntiForensicsDetectionDiagram() {
  const actions = [
    ['LOG CLEARED', ['wevtutil cl, /var/log'], C.red],
    ['TIMESTOMPED FILE', ['SetFileTime'], C.orange],
    ['SECURE WIPE', ['sdelete, shred'], C.purple],
    ['HIDDEN DATA', ['encryption, stego'], C.cyan],
  ];
  return (
    <Frame
      id="cf-afdetect"
      title="Anti-forensics detection — sources aur signals"
      sub="attacker ek jagah chhupata hai, doosri jagah reh jaata hai"
      label="Anti forensics detection: log clearing, timestomping, secure wipe and hidden data are detected through cross checking independent logs, NTFS journals, timeline anomalies, toolmarks and memory analysis"
    >
      <Note x={145} y={74} text="ANTI-FORENSIC ACTION" color={C.red} size={9.6} bold />
      <Note x={775} y={74} text="DETECTION SIGNAL" color={C.lime} size={9.6} bold />
      {actions.map(([t, lines, col], i) => (
        <Box key={t} x={24} y={82 + i * 76} w={242} h={58} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      {actions.map(([t], i) => (
        <Arrow key={`ar-${t}`} x1={266} y1={105 + i * 76} x2={302} y2={105 + i * 76} color={C.faint} delay={340 + i * 40} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x={302} y={82} width={316} height={294} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.75" />
        <text x={460} y={106} textAnchor="middle" fill={C.lime} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          CROSS-CHECK LAYERS
        </text>
        {[
          'SIEM / central syslog copy',
          'proxy, WAF, IDS, VPN logs',
          'cloud audit logs',
          'NTFS $MFT, $LogFile, $UsnJrnl',
          'ext4 journal, inode times',
          'prefetch / shimcache / amcache',
          'entropy + timeline gap analysis',
        ].map((s, i) => (
          <text key={s} x={320} y={134 + i * 23} fill={C.dim} fontSize="9" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
        <text x={460} y={330} textAnchor="middle" fill={C.white} fontSize="9.2" fontWeight="700" fontFamily={FONT}>
          Event 1102 = log cleared
        </text>
        <text x={460} y={352} textAnchor="middle" fill={C.white} fontSize="9.2" fontWeight="700" fontFamily={FONT}>
          $SI vs $FILE_NAME = timestomp
        </text>
      </g>

      {actions.map(([t], i) => (
        <Arrow key={`bl-${t}`} x1={618} y1={105 + i * 76} x2={652} y2={105 + i * 76} color={C.faint} delay={520 + i * 40} />
      ))}
      {[
        ['Event 1102 / 104', 'log gap + SIEM copy intact', C.red],
        ['$UsnJrnl / $LogFile', 'recent write record = fake time', C.orange],
        ['$MFT delete entry', 'wipe record + USN delete event', C.purple],
        ['entropy + LSB + YARA', 'hidden or packed content', C.cyan],
      ].map(([t, s2, col], i) => (
        <g key={t}>
          <text x={652} y={101 + i * 76} fill={col} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
          <text x={652} y={114 + i * 76} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s2}`}</text>
        </g>
      ))}

      <Note x={460} y={404} text="Toolmarks + YARA + memory diff: Volatility pslist vs psscan, malfind, netscan" color={C.dim} size={9.4} />
      <Note x={460} y={430} text="Negative finding bhi evidence hai — 'expected log absent' report mein likho" color={C.orange} size={9.6} />
      <Note x={460} y={460} text='Exam line: "Presence of tampering prove karna hi detection hai"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.10 — Network forensics tools
   ------------------------------------------------------------------ */
export function NetworkForensicsToolsDiagram() {
  const stages = [
    ['CAPTURE', ['tcpdump', 'dumpcap + BPF'], C.cyan],
    ['STORE/HASH', ['ring buffer', 'sha256'], C.green],
    ['DECODE', ['Wireshark', 'Zeek logs'], C.lime],
    ['CORRELATE', ['flow + IDS', 'DNS / SNI'], C.orange],
    ['REPORT', ['IOC list', 'PCAP evidence'], C.pink],
  ];
  return (
    <Frame
      id="cf-netools"
      title="Network forensics analysis toolchain"
      sub="packet · flow · metadata — metadata-first triage, phir deep dive"
      label="Network forensics toolchain: capture with tcpdump, store and hash, decode with Wireshark and Zeek, correlate flow and IDS data, then report indicators of compromise with PCAP evidence"
    >
      {stages.map(([t, lines, col], i) => (
        <Box key={t} x={36 + i * 172} y={78} w={160} h={100} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      {stages.slice(0, 4).map(([t], i) => (
        <Arrow key={`s-${t}`} x1={196 + i * 172} y1={128} x2={208 + i * 172} y2={128} color={C.faint} delay={420 + i * 40} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x={36} y={202} width={420} height={168} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={246} y={226} textAnchor="middle" fill={C.cyan} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          TOOL GROUPS
        </text>
        {[
          ['Capture', 'tcpdump, dumpcap'],
          ['Deep analysis', 'Wireshark, tshark, NetworkMiner'],
          ['Flow', 'NetFlow, nfdump, SiLK, ElastiFlow'],
          ['Metadata / IDS', 'Zeek, Snort, Suricata'],
          ['Platform', 'Arkime, ntopng, Security Onion'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={56} y={252 + i * 23} fill={C.lime} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={150} y={252 + i * 23} fill={C.dim} fontSize="8.9" fontFamily={FONT}>{`— ${s}`}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={472} y={202} width={412} height={168} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.orange} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={678} y={226} textAnchor="middle" fill={C.orange} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          ENCRYPTION KE BAAD BHI KYA DIKHTA HAI
        </text>
        {[
          ['DNS query + qtype', 'tunnelling, DGA'],
          ['TLS SNI + certificate', 'fake C2, self-signed'],
          ['JA3 / JA3S fingerprint', 'malware family match'],
          ['Flow size + timing', 'beacon, exfiltration'],
          ['SMB / RDP / SSH', 'lateral movement'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={492} y={252 + i * 23} fill={C.yellow} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={636} y={252 + i * 23} fill={C.dim} fontSize="8.9" fontFamily={FONT}>{`— ${s}`}</text>
          </g>
        ))}
      </g>

      <Note x={460} y={392} text="Triage: flow records se suspicious host pair → targeted PCAP → filters (http.request, dns.qry.name, tls SNI)" color={C.dim} size={9.2} />
      <Note x={460} y={416} text="Beaconing signature: same destination, regular interval, small constant bytes, periodic DNS" color={C.orange} size={9.4} />
      <Note x={460} y={448} text='Exam line: "Aaj content encrypted hai, evidence metadata mein hai"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.11 — Malware types
   ------------------------------------------------------------------ */
export function MalwareTypesDiagram() {
  const types = [
    ['VIRUS', ['host + user action', 'infected file hash'], C.red],
    ['WORM', ['self-propagate', '445 / 3389 scan'], C.orange],
    ['TROJAN', ['disguise + backdoor', 'unsigned exe, Run key'], C.yellow],
    ['RANSOMWARE', ['mass encrypt + note', '.locked, vssadmin'], C.pink],
    ['SPYWARE', ['capture + exfil', 'small HTTP POST'], C.purple],
    ['ROOTKIT', ['hide + hook', 'pslist vs psscan'], C.cyan],
    ['BOTNET', ['C2 polling', 'beacon + DGA'], C.green],
    ['FILELESS', ['memory only', 'encoded PowerShell'], C.teal],
  ];
  return (
    <Frame
      id="cf-malware"
      title="Malware types — behaviour aur forensic artifact"
      sub="family identify hone par uske IOC se poore network par hunting"
      label="Eight malware types: virus, worm, trojan, ransomware, spyware, rootkit, botnet and fileless malware, each with its behaviour and the forensic artifact it leaves behind"
    >
      {types.map(([t, lines, col], i) => (
        <Box
          key={t}
          x={26 + (i % 4) * 220}
          y={76 + Math.floor(i / 4) * 128}
          w={206}
          h={114}
          title={t}
          lines={lines}
          color={col}
          delay={60 + i * 60}
        />
      ))}
      <Arrow x1={460} y1={334} x2={460} y2={356} color={C.lime} delay={560} label="IOC mapping" labelDx={64} labelDy={4} />
      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x={26} y={356} width={862} height={86} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={380} textAnchor="middle" fill={C.lime} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          MALWARE FORENSICS KE SAWAAL
        </text>
        <text x={460} y={402} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          process + parent · dropper source · persistence · C2 · dropped/encrypted files · privilege · lateral movement
        </text>
        <text x={460} y={424} textAnchor="middle" fill={C.orange} fontSize="9" fontFamily={FONT}>
          data gaya? volume + destination · hash / YARA match · containment steps
        </text>
      </g>
      <Note x={460} y={466} text='Exam line: "Malware ka naam nahi, uska behaviour aur artifact likho"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.12 — Malware analysis workflow
   ------------------------------------------------------------------ */
export function MalwareAnalysisDiagram() {
  const stages = [
    ['1. TRIAGE', ['hash', 'file type'], C.cyan],
    ['2. STATIC', ['PEStudio', 'strings, YARA'], C.green],
    ['3. DYNAMIC', ['VM + Procmon', 'Wireshark'], C.orange],
    ['4. MEMORY', ['Volatility', 'malfind'], C.purple],
    ['5. OUTPUT', ['IOC + rules', 'report'], C.pink],
  ];
  return (
    <Frame
      id="cf-malanalysis"
      title="Malware analysis workflow"
      sub="static + dynamic + memory — teeno milkar poora behaviour dete hain"
      label="Malware analysis workflow: triage by hash and file type, static analysis with PEStudio and Ghidra, dynamic analysis in an isolated VM with Procmon and Wireshark, memory analysis with Volatility, and output of IOCs and detection rules"
    >
      {stages.map(([t, lines, col], i) => (
        <Box key={t} x={36 + i * 172} y={76} w={160} h={96} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      {stages.slice(0, 4).map(([t], i) => (
        <Arrow key={`k-${t}`} x1={196 + i * 172} y1={124} x2={208 + i * 172} y2={124} color={C.faint} delay={420 + i * 40} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x={36} y={198} width={420} height={140} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.green} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={246} y={222} textAnchor="middle" fill={C.green} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          STATIC TOOLS (sample run nahi hota)
        </text>
        {[
          ['PEStudio / DIE', 'sections, imports, entropy'],
          ['strings -n 8', 'URLs, mutex, API names'],
          ['Ghidra / IDA / dnSpy', 'disassembly, pseudo-code'],
          ['YARA / CAPA', 'family + capability'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={56} y={248 + i * 22} fill={C.lime} fontSize="9.1" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={196} y={248 + i * 22} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`— ${s}`}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={472} y={198} width={412} height={140} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.orange} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={678} y={222} textAnchor="middle" fill={C.orange} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          DYNAMIC TOOLS (isolated VM)
        </text>
        {[
          ['Procmon / Process Explorer', 'file, registry, process'],
          ['Regshot + API Monitor', 'change diff, API trace'],
          ['Wireshark / INetSim', 'C2, downloads, DNS'],
          ['Cuckoo / CAPE / ANY.RUN', 'auto behavioural report'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={492} y={248 + i * 22} fill={C.yellow} fontSize="9.1" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={684} y={248 + i * 22} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`— ${s}`}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x={36} y={352} width={848} height={68} rx="12" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={376} textAnchor="middle" fill={C.red} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          LAB SAFETY — non negotiable
        </text>
        <text x={460} y={398} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          host-only network · snapshot before run · INetSim fake internet · no real credentials · hash + custody
        </text>
        <text x={460} y={412} textAnchor="middle" fill={C.faint} fontSize="8.6" fontFamily={FONT}>
          galat setup = real breach ya contaminated evidence
        </text>
      </g>
      <Note x={460} y={452} text='Exam line: "Static se hypothesis, dynamic se confirmation, memory se fileless part"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.13 — E-mail flow aur header chain
   ------------------------------------------------------------------ */
export function EmailProtocolsDiagram() {
  const hops = [
    ['SENDER', ['client', 'SMTP 587'], C.cyan],
    ['SENDER SERVER', ['MTA + queue', 'Received line'], C.green],
    ['DNS MX', ['recipient', 'MX record'], C.orange],
    ['RECIPIENT SERVER', ['spam filter', 'mailbox store'], C.purple],
    ['MAILBOX', ['IMAP 993', 'POP3 995'], C.pink],
  ];
  return (
    <Frame
      id="cf-email"
      title="E-mail flow aur header chain"
      sub="SMTP bhejta hai, IMAP/POP3 padhte hain — har hop ek Received line likhta hai"
      label="Email delivery flow: sender client submits over SMTP, sender MTA relays after DNS MX lookup to the recipient server, and the mailbox is read over IMAP or POP3, with each hop adding a Received header"
    >
      {hops.map(([t, lines, col], i) => (
        <Box key={t} x={20 + i * 180} y={76} w={166} h={92} title={t} lines={lines} color={col} delay={60 + i * 70} />
      ))}
      {hops.slice(0, 4).map(([t], i) => (
        <Arrow key={`h-${t}`} x1={186 + i * 180} y1={122} x2={198 + i * 180} y2={122} color={C.faint} delay={400 + i * 40} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x={20} y={186} width={880} height={166} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.teal} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={210} textAnchor="middle" fill={C.teal} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          HEADERS — forensic gold (neeche se upar padho)
        </text>
        {[
          ['Received', 'har hop ka IP + time'],
          ['Message-ID', 'originating system'],
          ['Return-Path', 'envelope sender'],
          ['From / Reply-To', 'visible sender (spoof ho sakta)'],
          ['Date', 'sending time + timezone'],
          ['X-Mailer', 'client / script'],
          ['Authentication-Results', 'SPF / DKIM / DMARC'],
          ['X-Originating-IP', 'webmail sender IP'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={44 + (i % 2) * 442} y={238 + Math.floor(i / 2) * 28} fill={C.cyan} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={212 + (i % 2) * 442} y={238 + Math.floor(i / 2) * 28} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`— ${s}`}</text>
          </g>
        ))}
        <text x={460} y={338} textAnchor="middle" fill={C.orange} fontSize="9" fontFamily={FONT}>
          Received chain neeche se upar: sabse neeche wala = originating server
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={20} y={364} width={880} height={60} rx="12" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={388} textAnchor="middle" fill={C.red} fontSize="9.8" fontWeight="800" fontFamily={FONT}>
          SPOOFING KE SIGNAL: Return-Path vs From mismatch · Message-ID domain mismatch · spf=fail / dkim=none / dmarc=fail
        </text>
        <text x={460} y={408} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          raw source (.eml) export karo — forward karne se headers badal jaate hain
        </text>
      </g>
      <Note x={460} y={452} text="Evidence: server MTA logs, mailbox export (PST/MBOX/EML), webmail audit logs, provider records" color={C.dim} size={9.4} />
      <Note x={460} y={478} text='Exam line: "Header jhooth nahi bolta — bas usse padhna aana chahiye"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   3.14 — E-mail crime investigation
   ------------------------------------------------------------------ */
export function EmailCrimeDiagram() {
  const chain = [
    ['1. COMPLAINT', ['victim report', 'screenshots'], C.cyan],
    ['2. PRESERVE', ['raw .eml + hash', 'na forward karo'], C.green],
    ['3. HEADER + IP', ['Received chain', 'geo-IP, SPF'], C.lime],
    ['4. CONTENT', ['URL + attachment', 'sandbox detonate'], C.orange],
    ['5. MAILBOX LOGS', ['login IP, rules', 'OAuth grant'], C.purple],
    ['6. BANK / LOGS', ['payment trail', 'proxy, VPN'], C.pink],
    ['7. REPORT', ['attribution', '65B certificate'], C.teal],
  ];
  return (
    <Frame
      id="cf-emailcrime"
      title="E-mail crime investigation flow"
      sub="header se origin, content se intent, logs se attribution"
      label="Email crime investigation flow: complaint, preserve raw message and hash, header and IP analysis, content and attachment sandboxing, mailbox log review for rules and OAuth grants, bank and proxy logs, then attribution and a 65B certified report"
    >
      {chain.map(([t, lines, col], i) => (
        <Box
          key={t}
          x={26 + (i % 4) * 220}
          y={76 + Math.floor(i / 4) * 120}
          w={206}
          h={104}
          title={t}
          lines={lines}
          color={col}
          delay={60 + i * 60}
        />
      ))}
      <Arrow x1={460} y1={304} x2={460} y2={326} color={C.faint} delay={500} />
      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={26} y={326} width={862} height={76} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.red} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={350} textAnchor="middle" fill={C.red} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          CRIME TYPES: phishing · spoofing · BEC · malware mail · spam · mail bombing · stalking · insider leak
        </text>
        <text x={460} y={372} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          BEC mein sabse pehle dekho: hidden forwarding rule, OAuth consent grant, MFA bypass, new bank beneficiary
        </text>
        <text x={460} y={392} textAnchor="middle" fill={C.orange} fontSize="9" fontFamily={FONT}>
          India: IT Act 66 / 66C / 66D + BNS cheating &amp; forgery + Section 65B certificate
        </text>
      </g>
      <Note x={460} y={432} text="Attribution: originating IP + ASN + geo · mailbox login history · device/browser fingerprint" color={C.dim} size={9.2} />
      <Note x={460} y={456} text="Impact: kitne users ko gayi, kitne ne click kiya, kitna paisa/data gaya — quantify karo" color={C.dim} size={9.2} />
      <Note x={460} y={484} text='Exam line: "E-mail case header se shuru hota hai, logs se decide hota hai"' color={C.yellow} size={9.8} bold />
    </Frame>
  );
}
