const FONT = "'Segoe UI', system-ui, sans-serif";

// Shared palette for the Social Engineering (Cyber Security Unit V) diagrams.
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
   5.1 — Social engineering: kya hai aur kaise kaam karta hai
   ------------------------------------------------------------------ */
export function SocialEngineeringIntroDiagram() {
  const chain = [
    ['ATTACKER', 'pretext + research', C.red],
    ['MESSAGE', 'mail, call, chat, QR', C.orange],
    ['HUMAN', 'trust par click', C.cyan],
    ['ACTION', 'credential / access / pay', C.purple],
    ['LOSS', 'data, money, reputation', C.red],
  ];
  const why = [
    ['TRUST', 'insaan default mein bharosa karta hai'],
    ['AUTHORITY', 'senior ka order challenge nahi hota'],
    ['URGENCY', 'jaldi mein verify nahi hota'],
    ['HELPFULNESS', 'help karne ki chaah'],
    ['FEAR', 'penalty / job ka darr'],
  ];
  return (
    <Frame
      id="se-intro"
      title="Social engineering — insaan ko target karke system todna"
      sub="attacker technology nahi, psychology use karta hai — chain hamesha human se guzarti hai"
      label="Attack chain from attacker through message and human decision to action and loss, with the five psychological levers trust authority urgency helpfulness and fear, and the defence loop"
    >
      <Note x={460} y={78} text="ATTACK CHAIN — har step human decision par depend karta hai" color={C.dim} size={9.6} bold />
      {chain.map(([t, s, col], i) => (
        <Box key={t} x={24 + i * 178} y={88} w={160} h={82} title={t} lines={[s]} color={col} delay={60 + i * 60} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <Arrow key={i} x1={186 + i * 178} y1={129} x2={200 + i * 178} y2={129} color={C.lime} delay={320 + i * 40} />
      ))}

      <Note x={460} y={196} text="KYUN KAAM KARTA HAI — 5 psychological levers" color={C.dim} size={9.6} bold />
      {why.map(([t, s], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${420 + i * 50}ms` }}>
          <rect x={24 + i * 178} y={206} width={160} height={64} rx="10" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.6" />
          <text x={104 + i * 178} y={228} textAnchor="middle" fill={C.cyan} fontSize="9.6" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={104 + i * 178} y={246} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>{s.slice(0, 26)}</text>
          <text x={104 + i * 178} y={259} textAnchor="middle" fill={C.dim} fontSize="8.2" fontFamily={FONT}>{s.slice(26)}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x={24} y={288} width={872} height={104} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={312} textAnchor="middle" fill={C.lime} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          DEFENCE LOOP — technology + people + process
        </text>
        {[
          ['1. VERIFY', 'callback, code word, ticket'],
          ['2. MINIMISE', 'least privilege, need-to-know'],
          ['3. PROTECT', 'phishing-resistant MFA (FIDO2)'],
          ['4. DETECT', 'report button + anomaly alerts'],
          ['5. RESPOND', 'contain, reset, forensics, notify'],
          ['6. TRAIN', 'role-based + simulations'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={44 + (i % 3) * 290} y={338 + Math.floor(i / 3) * 34} fill={C.cyan} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={44 + (i % 3) * 290} y={352 + Math.floor(i / 3) * 34} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s}`}</text>
          </g>
        ))}
      </g>

      <Note x={460} y={420} text="Human-based: pretext call, impersonation, tailgating | Computer-based: phishing, SMiShing, pop-up, QR" color={C.teal} size={9} />
      <Note x={460} y={450} text='Exam line: "Social engineering technology ka nahi, bharose ka exploit hai"' color={C.yellow} size={9.8} bold />
      <Note x={460} y={478} text="Mitnick: research -> hook -> play -> exit | Spiral model: har loop mein target deeper" color={C.orange} size={9} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.2 — Conceptual evolution
   ------------------------------------------------------------------ */
export function SocialEngineeringEvolutionDiagram() {
  const eras = [
    ['1970s', 'phone phreaking', C.teal],
    ['1990s', 'mail + pretext call', C.cyan],
    ['2000s', 'web + spear phishing', C.green],
    ['2010s', 'social media, mobile', C.orange],
    ['2020s', 'AI, deepfake, RaaS', C.purple],
  ];
  return (
    <Frame
      id="se-evolution"
      title="Social engineering ka conceptual evolution"
      sub="method badalte hain, psychology wahi rehti hai — trust, authority, urgency, fear"
      label="Timeline from 1970s phone phreaking through 1990s mail and pretext calls, 2000s web and spear phishing, 2010s social media and mobile, to 2020s AI deepfake and ransomware-as-a-service, with constants and shifts"
    >
      <Arrow x1={70} y1={112} x2={850} y2={112} color={C.faint} dashed delay={40} />
      {eras.map(([era, what, col], i) => (
        <g key={era} className="diagram-pop" style={{ animationDelay: `${80 + i * 70}ms` }}>
          <circle cx={104 + i * 178} cy={112} r="9" fill={col} fillOpacity="0.85" />
          <text x={104 + i * 178} y={92} textAnchor="middle" fill={col} fontSize="10" fontWeight="800" fontFamily={FONT}>{era}</text>
          <text x={104 + i * 178} y={134} textAnchor="middle" fill={C.dim} fontSize="8.4" fontFamily={FONT}>{what}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x={24} y={158} width={424} height={140} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.4" strokeOpacity="0.75" />
        <text x={236} y={182} textAnchor="middle" fill={C.green} fontSize="10.4" fontWeight="800" fontFamily={FONT}>KYA NAHI BADLA — constants</text>
        {[
          'human trust aur bharosa',
          'authority ka respect',
          'urgency mein shortcut',
          'help karne ki aadat',
          'verification ka absence',
        ].map((s, i) => (
          <text key={s} x={44} y={206 + i * 19} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x={472} y={158} width={424} height={140} rx="12" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.4" strokeOpacity="0.75" />
        <text x={684} y={182} textAnchor="middle" fill={C.red} fontSize="10.4" fontWeight="800" fontFamily={FONT}>KYA BADLA — shifts</text>
        {[
          'voice call -> mail -> chat -> QR -> AI voice',
          'manual -> phishing kit / PhaaS',
          'broadcast -> OSINT-based personalisation',
          'one channel -> multi-channel (hybrid)',
          'credential theft -> session / consent theft',
        ].map((s, i) => (
          <text key={s} x={492} y={206 + i * 19} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <Note x={460} y={324} text="CONCEPTUAL SHIFT — attacker ki positioning" color={C.dim} size={9.6} bold />
      {[
        ['OUTSIDER', 'unknown caller, fake story', C.orange],
        ['INSIDER LOOK', 'vendor, auditor, IT, HR', C.cyan],
        ['REAL INFRA', 'real domain, real MFA prompt', C.purple],
        ['AUTOMATED', 'AI text + voice at scale', C.red],
      ].map(([t, s, col], i) => (
        <Box key={t} x={24 + i * 222} y={334} w={204} h={78} title={t} lines={[s]} color={col} delay={620 + i * 60} />
      ))}

      <Note x={460} y={440} text="India context: KYC/UPI scams, fake job offers, 'digital arrest' calls, courier/parcel scams" color={C.teal} size={9} />
      <Note x={460} y={468} text='Exam line: "Tool har decade badla, exploit ka centre insaan hi raha"' color={C.yellow} size={9.8} bold />
      <Note x={460} y={494} text="Evolution = reach (scale) + realism (AI) + speed (automation) — teeno badhe" color={C.dim} size={9} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.3 — Definition aur categories
   ------------------------------------------------------------------ */
export function SocialEngineeringCategoriesDiagram() {
  return (
    <Frame
      id="se-categories"
      title="Social engineering — definition aur categories"
      sub="human-based, computer-based aur socio-technical: teeno mein insaan hi decide karta hai"
      label="Categories of social engineering: human-based attacks such as impersonation and tailgating, computer-based attacks such as phishing and pop-ups, and socio-technical hybrid attacks combining both, with the common definition at the top"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={72} width={872} height={62} rx="12" fill="rgba(196,255,0,0.06)" stroke={C.lime} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={460} y={96} textAnchor="middle" fill={C.lime} fontSize="10.6" fontWeight="800" fontFamily={FONT}>
          DEFINITION — insaan ki psychological weakness se information, access ya action hasil karna
        </text>
        <text x={460} y={118} textAnchor="middle" fill={C.dim} fontSize="8.8" fontFamily={FONT}>
          technology sirf delivery channel hai — exploit ka centre trust, authority, urgency aur fear hai
        </text>
      </g>

      <Box x={24} y={150} w={280} h={186} title="HUMAN-BASED" sub="face-to-face / voice, no tool" color={C.orange} delay={140}
        lines={['impersonation (IT, police, bank)', 'pretexting aur eavesdropping', 'shoulder surfing, tailgating', 'dumpster diving', 'baiting (USB, free gift)', 'quid pro quo ("help ke badle")']} />
      <Box x={320} y={150} w={280} h={186} title="COMPUTER-BASED" sub="digital channel, scale possible" color={C.cyan} delay={200}
        lines={['phishing, spear, whaling', 'vishing, smishing, quishing', 'pharming aur clone sites', 'pop-up / scareware', 'fake apps aur OAuth consent', 'social media (angler)']} />
      <Box x={616} y={150} w={280} h={186} title="SOCIO-TECHNICAL" sub="dono ka mix, sabse khatarnak" color={C.purple} delay={260}
        lines={['AiTM phishing + vishing call', 'MFA fatigue + fake help desk', 'insider + malware combo', 'deepfake video + payment fraud', 'watering hole + pretext', 'BEC with real thread hijack']} />

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x={24} y={350} width={872} height={72} rx="12" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={374} textAnchor="middle" fill={C.teal} fontSize="10" fontWeight="800" fontFamily={FONT}>
          SHARED PATTERN — research · pretext · trust build · request · exit
        </text>
        <text x={460} y={394} textAnchor="middle" fill={C.dim} fontSize="8.8" fontFamily={FONT}>
          har category mein attacker pehle context collect karta hai, phir ek believable wajah banata hai, phir chhoti request karta hai
        </text>
        <text x={460} y={412} textAnchor="middle" fill={C.faint} fontSize="8.4" fontFamily={FONT}>
          goal: credential, OTP, access, payment, ya information — action hamesha victim karta hai
        </text>
      </g>

      <Note x={460} y={448} text="Cialdini levers: reciprocation · commitment · social proof · authority · liking · scarcity" color={C.yellow} size={9.2} />
      <Note x={460} y={474} text='Exam line: "Category teen hai, par victim ka decision ek hi — bharosa"' color={C.dim} size={9.4} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.4 — Phases of a social engineering attack
   ------------------------------------------------------------------ */
export function SocialEngineeringPhasesDiagram() {
  const phases = [
    ['1. RESEARCH', 'OSINT + breach data', C.teal],
    ['2. HOOK', 'pretext chuno', C.cyan],
    ['3. PLAY', 'trust + urgency', C.orange],
    ['4. EXIT', 'action + cover-up', C.red],
  ];
  return (
    <Frame
      id="se-phases"
      title="Social engineering ke phases — research se exit tak"
      sub="Mitnick model: research, hook, play, exit — har phase ka apna artefact aur defence"
      label="Four phases of a social engineering attack - research, hook, play and exit - each with attacker activity, artefacts left behind and matching defence controls"
    >
      {phases.map(([t, s, col], i) => (
        <g key={t}>
          <Box x={24 + i * 222} y={80} w={204} h={72} title={t} sub={s} color={col} delay={70 + i * 70} />
          {i < 3 && <Arrow x1={230 + i * 222} y1={116} x2={244 + i * 222} y2={116} color={C.lime} delay={340 + i * 50} />}
        </g>
      ))}

      <Note x={460} y={192} text="HAR PHASE KA ARTEFACT (forensics ke liye)" color={C.dim} size={9.6} bold />
      <Box x={24} y={202} w={204} h={122} title="RESEARCH" sub="digital footprint" color={C.teal} delay={420}
        lines={['social media profile', 'breach / leak data', 'lookalike domain registered', 'WHOIS + DNS records']} />
      <Box x={246} y={202} w={204} h={122} title="HOOK" sub="delivery evidence" color={C.cyan} delay={470}
        lines={['mail header + SPF/DKIM', 'call detail record (CDR)', 'SMS / WhatsApp metadata', 'landing page clone']} />
      <Box x={468} y={202} w={204} h={122} title="PLAY" sub="victim action log" color={C.orange} delay={520}
        lines={['proxy / VPN / web log', 'MFA prompt history', 'file access + share log', 'endpoint process tree']} />
      <Box x={690} y={202} w={206} h={122} title="EXIT" sub="cover-up signs" color={C.red} delay={570}
        lines={['mailbox rule created', 'log cleared / disabled', 'new device enrolled', 'data copied / uploaded']} />

      <Note x={460} y={352} text="DEFENCE — phase-wise counter" color={C.dim} size={9.6} bold />
      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={24} y={362} width={872} height={82} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        {[
          ['RESEARCH', ['footprint minimise,', 'org-chart hide']],
          ['HOOK', ['DMARC + filter,', 'external banner']],
          ['PLAY', ['verify protocol,', 'FIDO2, least privilege']],
          ['EXIT', ['audit logs, alerts,', 'IR playbook']],
        ].map(([t, lines], i) => (
          <g key={t}>
            <text x={40 + i * 216} y={388} fill={C.cyan} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={40 + i * 216} y={406} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{lines[0]}</text>
            <text x={40 + i * 216} y={420} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{lines[1]}</text>
          </g>
        ))}
      </g>

      <Note x={460} y={466} text="Attack cycle: phases repeat hote hain — ek fail ho to attacker doosra pretext try karta hai" color={C.orange} size={9} />
      <Note x={460} y={492} text='Exam line: "Har phase ek artefact chhodta hai — investigator ke liye wahi entry point hai"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.5 — Attack spiral model
   ------------------------------------------------------------------ */
export function SocialEngineeringSpiralDiagram() {
  // Expanding spiral: four stages per loop, radius grows each iteration.
  const stages = ['RECON', 'PRETEXT', 'PLAY', 'EXIT'];
  const loops = 3;
  const cx = 286;
  const cy = 266;
  const points = [];
  for (let l = 0; l < loops; l += 1) {
    const r = 48 + l * 40;
    for (let st = 0; st < 4; st += 1) {
      const ang = (-90 + st * 90 + l * 26) * (Math.PI / 180);
      points.push({
        x: cx + r * Math.cos(ang),
        y: cy + r * Math.sin(ang),
        label: stages[st],
        loop: l + 1,
        color: [C.teal, C.cyan, C.orange, C.red][st],
        ox: 10 * Math.cos(ang),
        oy: 6 * Math.sin(ang),
        anchor: Math.cos(ang) > 0.2 ? 'start' : Math.cos(ang) < -0.2 ? 'end' : 'middle',
      });
    }
  }
  return (
    <Frame
      id="se-spiral"
      title="Attack spiral model — har loop mein deeper access"
      sub="ek hi target par baar-baar attack: har iteration mein zyada jaankari aur zyada access"
      label="Spiral model with three loops of recon, pretext, play and exit, radius growing each loop, alongside escalation stages from information to access to action and control"
    >
      <Note x={286} y={78} text="SPIRAL — har loop ka radius badhta hai (access depth)" color={C.dim} size={9.6} bold />
      <circle cx={cx} cy={cy} r="48" fill="none" stroke={C.teal} strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="4 4" />
      <circle cx={cx} cy={cy} r="88" fill="none" stroke={C.cyan} strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="4 4" />
      <circle cx={cx} cy={cy} r="128" fill="none" stroke={C.orange} strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="4 4" />

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <circle cx={cx} cy={cy} r="22" fill="rgba(255,82,82,0.18)" stroke={C.red} strokeWidth="1.6" />
        <text x={cx} y={cy + 4} textAnchor="middle" fill={C.red} fontSize="9" fontWeight="800" fontFamily={FONT}>GOAL</text>
      </g>

      {points.map((pt, i) => (
        <g key={`${pt.loop}-${pt.label}-${i}`} className="diagram-pop" style={{ animationDelay: `${120 + i * 45}ms` }}>
          <circle cx={pt.x} cy={pt.y} r="4.5" fill={pt.color} fillOpacity="0.9" />
          <text x={pt.x + pt.ox} y={pt.y + pt.oy} textAnchor={pt.anchor} fill={pt.color} fontSize="7.6" fontWeight="700" fontFamily={FONT}>
            {`${pt.label} L${pt.loop}`}
          </text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x={548} y={96} width={348} height={252} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={722} y={122} textAnchor="middle" fill={C.purple} fontSize="10.4" fontWeight="800" fontFamily={FONT}>ESCALATION — har loop ka outcome</text>
        {[
          ['LOOP 1', 'public info: naam, role, tools, vendors', C.teal],
          ['LOOP 2', 'internal context: project, manager', C.cyan],
          ['LOOP 3', 'access: credential, session, device', C.orange],
          ['LOOP 4', 'action: payment, data, persistence', C.red],
        ].map(([t, detail, col], i) => (
          <g key={t}>
            <rect x={566} y={140 + i * 46} width={4} height={28} rx="2" fill={col} fillOpacity="0.9" />
            <text x={580} y={156 + i * 46} fill={col} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={580} y={170 + i * 46} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{detail}</text>
          </g>
        ))}
        <text x={722} y={330} textAnchor="middle" fill={C.faint} fontSize="8.4" fontFamily={FONT}>spiral rukta nahi — jab tak detection na ho</text>
      </g>

      <Note x={460} y={430} text="Linear model vs spiral: linear 'ek attack', spiral 'continuing campaign' — defender ko poora campaign dekhna hota hai" color={C.teal} size={8.8} />
      <Note x={460} y={462} text='Exam line: "Spiral model batata hai ki ek failed attempt attack ka end nahi hota"' color={C.yellow} size={9.6} bold />
      <Note x={460} y={486} text="Defence: chhote anomalies ko ignore na karo — wahi loop 1 aur 2 ka signal hai" color={C.dim} size={8.8} />
      <Note x={460} y={508} text="Har loop ke baad attacker ke paas naya context hota hai — isliye early detection sabse sasta" color={C.faint} size={8.4} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.6 — Attack vendors: social aur socio-technical approach
   ------------------------------------------------------------------ */
export function SocialEngineeringVendorsDiagram() {
  return (
    <Frame
      id="se-vendors"
      title="Attack vendors — social aur socio-technical approach"
      sub="social engineering bhi ab 'as-a-service' hai: buyer, vendor, tool aur call centre"
      label="Attack vendor ecosystem: buyer on the left, vendor services such as phishing-as-a-service and vishing call centres in the middle, target on the right, split into social approach and socio-technical approach with their services listed"
    >
      <Box x={24} y={72} w={180} h={104} title="BUYER" sub="criminal / insider" color={C.red} delay={60}
        lines={['budget + target list', 'ransomware affiliate', 'corporate rival / fraudster']} />
      <Arrow x1={206} y1={124} x2={222} y2={124} color={C.lime} delay={200} />
      <Box x={224} y={72} w={470} h={104} title="VENDOR / ATTACK-AS-A-SERVICE" sub="specialised, hire karne par milta hai" color={C.purple} delay={140}
        lines={['Phishing kit + hosting + sender infrastructure', 'vishing call centre (native speakers)', 'credentials, OTP bots, SIM-swap, deepfake']} />
      <Arrow x1={696} y1={124} x2={712} y2={124} color={C.lime} delay={260} />
      <Box x={714} y={72} w={182} h={104} title="TARGET" sub="human + system" color={C.cyan} delay={200}
        lines={['employee, executive', 'customer, citizen', 'vendor / partner']} />

      <Note x={460} y={196} text="TWO APPROACHES" color={C.dim} size={9.8} bold />

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x={24} y={206} width={430} height={214} rx="12" fill="rgba(255,136,0,0.05)" stroke={C.orange} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={239} y={232} textAnchor="middle" fill={C.orange} fontSize="10.6" fontWeight="800" fontFamily={FONT}>SOCIAL APPROACH</text>
        <text x={239} y={250} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>pure human interaction — koi technical tool nahi</text>
        {[
          'impersonation: IT, HR, bank, police, courier',
          'pretext call: "main auditor hoon, badge chahiye"',
          'tailgating / shoulder surfing / dumpster diving',
          'fake recruitment drive aur interview scam',
          'on-site vendor visit with forged paperwork',
          'employee ko recruit karna (insider hiring)',
        ].map((s, i) => (
          <text key={s} x={44} y={276 + i * 22} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x={466} y={206} width={430} height={214} rx="12" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={681} y={232} textAnchor="middle" fill={C.teal} fontSize="10.6" fontWeight="800" fontFamily={FONT}>SOCIO-TECHNICAL APPROACH</text>
        <text x={681} y={250} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>insaan mislead karo, phir tool se execute karo</text>
        {[
          'phishing-as-a-service (PhaaS) kits + AiTM proxy',
          'vishing call centre + OTP relay',
          'SIM-swap service + account takeover',
          'deepfake voice/video + payment fraud',
          'malicious app / OAuth consent grant',
          'RMM tool install via fake support desk',
        ].map((s, i) => (
          <text key={s} x={486} y={276 + i * 22} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x={24} y={436} width={872} height={56} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={458} textAnchor="middle" fill={C.lime} fontSize="9.6" fontWeight="800" fontFamily={FONT}>
          DEFENCE — vendor-facing controls
        </text>
        <text x={460} y={478} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>
          vendor onboarding + KYC · third-party register · access scope + expiry · support call verification · awareness of as-a-service economy
        </text>
      </g>

      <Note x={460} y={510} text='Exam line: "Social approach insaan par, socio-technical approach insaan + tool par attack karta hai"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.7 — Advanced social engineering attacks
   ------------------------------------------------------------------ */
export function AdvancedSocialEngineeringDiagram() {
  const atk = [
    ['AITM PROXY', ['real login page via proxy', 'session cookie theft', 'MFA relay'], C.red],
    ['MFA FATIGUE', ['push bombing + call', 'approve karwa lena', 'number matching se rok'], C.orange],
    ['CALLBACK', ['benign notice + number', 'fake support desk', 'RMM tool install'], C.yellow],
    ['OAUTH CONSENT', ['app permission grant', 'mail/files access', 'password reset se na ruke'], C.purple],
    ['DEEPFAKE', ['voice/video clone', 'CEO payment fraud', 'callback se verify'], C.pink],
    ['QUISHING + CHAT', ['QR to personal phone', 'Teams/Slack impersonation', 'external access policy'], C.teal],
  ];
  return (
    <Frame
      id="se-advanced"
      title="Advanced social engineering attacks"
      sub="jahan red flags gayab ho jaate hain — defence bhi structural honi chahiye"
      label="Six advanced attack families - adversary-in-the-middle proxy, MFA fatigue, callback phishing, OAuth consent phishing, deepfake and quishing or chat impersonation - each with mechanism lines and structural defences"
    >
      {atk.map(([t, lines, col], i) => (
        <Box
          key={t}
          x={24 + (i % 3) * 292}
          y={72 + Math.floor(i / 3) * 140}
          w={274}
          h={124}
          title={t}
          lines={lines}
          color={col}
          delay={70 + i * 60}
        />
      ))}

      <Note x={460} y={366} text="STRUCTURAL DEFENCE — grammar check nahi, control check" color={C.dim} size={9.6} bold />
      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x={24} y={376} width={872} height={92} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        {[
          ['FIDO2 / PASSKEY', 'origin-bound, phishing-proof'],
          ['TOKEN PROTECTION', 'cookie device se bind'],
          ['CONDITIONAL ACCESS', 'new device par step-up'],
          ['CONSENT POLICY', 'app approval admin ke through'],
          ['CALLBACK RULE', 'payment/credential known number'],
          ['RMM CONTROL', 'ticket ke bina install nahi'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={44 + (i % 3) * 290} y={402 + Math.floor(i / 3) * 34} fill={C.cyan} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={44 + (i % 3) * 290} y={416 + Math.floor(i / 3) * 34} fill={C.dim} fontSize="8.4" fontFamily={FONT}>{`- ${s}`}</text>
          </g>
        ))}
      </g>

      <Note x={460} y={490} text='Exam line: "Advanced attack ka jawab awareness nahi, architecture hai"' color={C.yellow} size={9.6} bold />
      <Note x={460} y={512} text="Detection: impossible travel · unrequested MFA · new mailbox rule · new device enrolment · consent grant alert" color={C.orange} size={8.8} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.8 — Phishing attack: anatomy aur defence
   ------------------------------------------------------------------ */
export function PhishingAttackDiagram() {
  return (
    <Frame
      id="se-phishing"
      title="Phishing attack — anatomy aur defence chain"
      sub="sender, pretext, payload, pressure — chaar ingredients, aur unke against chaar layers"
      label="Phishing anatomy with four ingredients - believable sender, pretext, payload and call to action with pressure - a sample mail with header red flags, and the defence chain of prevent, protect, detect and respond"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={72} width={384} height={196} rx="12" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={216} y={96} textAnchor="middle" fill={C.red} fontSize="10.4" fontWeight="800" fontFamily={FONT}>SAMPLE MAIL — red flags</text>
        <text x={44} y={120} fill={C.dim} fontSize="8.6" fontFamily={FONT}>From: accounts@bank-verify.co</text>
        <text x={44} y={138} fill={C.dim} fontSize="8.6" fontFamily={FONT}>Return-Path: bounce@bank-verify.co</text>
        <text x={44} y={156} fill={C.dim} fontSize="8.6" fontFamily={FONT}>Auth: spf=fail dkim=none dmarc=fail</text>
        <text x={44} y={174} fill={C.dim} fontSize="8.6" fontFamily={FONT}>Subject: verify within 24 hours</text>
        <text x={44} y={192} fill={C.dim} fontSize="8.6" fontFamily={FONT}>Button: http://bank-verify.co/login.php</text>
        <text x={44} y={210} fill={C.dim} fontSize="8.6" fontFamily={FONT}>Attachment: statement.html (credential form)</text>
        <line x1={44} y1={224} x2={388} y2={224} stroke={C.faint} strokeWidth="1" strokeDasharray="4 4" />
        <text x={44} y={242} fill={C.orange} fontSize="8.6" fontFamily={FONT}>Verdict: credential-harvesting phishing</text>
        <text x={44} y={258} fill={C.dim} fontSize="8.2" fontFamily={FONT}>action: report, block domain, reset credential</text>
      </g>

      <Note x={672} y={92} text="CHAAR INGREDIENTS" color={C.dim} size={9.6} bold />
      {[
        ['1. SENDER', 'spoofed / lookalike domain', C.orange],
        ['2. PRETEXT', 'invoice, KYC, password expiry', C.cyan],
        ['3. PAYLOAD', 'link, attachment, QR, number', C.purple],
        ['4. PRESSURE', 'urgency, fear, reward', C.red],
      ].map(([t, detail, col], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${200 + i * 50}ms` }}>
          <rect x={430} y={102 + i * 42} width={466} height={36} rx="8" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.3" strokeOpacity="0.7" />
          <text x={444} y={124 + i * 42} fill={col} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={548} y={124 + i * 42} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{`- ${detail}`}</text>
        </g>
      ))}

      <Note x={460} y={302} text="TYPES — bulk · spear · whaling · clone · vishing · smishing · pharming · angler · AiTM" color={C.teal} size={9} />
      <Note x={460} y={326} text="DEFENCE CHAIN" color={C.dim} size={9.6} bold />
      {[
        ['PREVENT', ['DMARC p=reject', 'lookalike domain watch'], C.green],
        ['PROTECT', ['FIDO2 MFA', 'conditional access'], C.cyan],
        ['DETECT', ['report button', 'gateway analytics'], C.yellow],
        ['RESPOND', ['block IOC, reset', 'session revoke'], C.orange],
      ].map(([t, lines, col], i) => (
        <g key={t}>
          <Box x={24 + i * 222} y={336} w={204} h={90} title={t} lines={lines} color={col} delay={480 + i * 60} />
          {i < 3 && <Arrow x1={230 + i * 222} y1={381} x2={244 + i * 222} y2={381} color={C.lime} delay={760 + i * 50} />}
        </g>
      ))}

      <Note x={460} y={452} text="Investigation: header chain -> domain/IP intel -> URL/landing page -> attachment hash -> victim logs" color={C.teal} size={8.8} />
      <Note x={460} y={478} text='Exam line: "Phishing message ko crime scene ki tarah padho — har layer par ek signal hai"' color={C.yellow} size={9.2} bold />
      <Note x={460} y={502} text="Golden rule: mail se aaye link par login nahi — portal manually open karo" color={C.dim} size={8.8} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.9 — Insider attack: types aur lifecycle
   ------------------------------------------------------------------ */
export function InsiderAttackDiagram() {
  return (
    <Frame
      id="se-insider"
      title="Insider attack — types aur lifecycle"
      sub="access already andar hai — isliye perimeter security kaam nahi karti"
      label="Four insider types - malicious, negligent, compromised and infiltrator - with the insider lifecycle from motive through access accumulation, collection, exfiltration and cover-up, plus detection and prevention controls"
    >
      <Note x={460} y={78} text="TYPES — intent ke hisaab se" color={C.dim} size={9.6} bold />
      {[
        ['MALICIOUS', ['jaan-boojh kar harm', 'data theft, fraud, sabotage'], C.purple],
        ['NEGLIGENT', ['galti se harm', 'misdirected mail, USB, cloud'], C.yellow],
        ['COMPROMISED', ['account hijack', 'attacker andar, victim unaware'], C.red],
        ['INFILTRATOR', ['attack ke liye join', 'fake contractor / employee'], C.orange],
      ].map(([t, lines, col], i) => (
        <Box key={t} x={24 + i * 222} y={88} w={204} h={86} title={t} lines={lines} color={col} delay={70 + i * 60} />
      ))}

      <Note x={460} y={204} text="LIFECYCLE — insider attack ka raasta" color={C.dim} size={9.6} bold />
      {[
        ['MOTIVE', ['paisa, grievance,', 'ideology']],
        ['ACCESS', ['role badalna,', 'extra permission']],
        ['COLLECT', ['bulk download,', 'USB, print']],
        ['EXFIL', ['mail, cloud,', 'physical']],
        ['COVER', ['logs, rules,', 'timing']],
      ].map(([t, lines], i) => (
        <g key={t}>
          <rect x={24 + i * 178} y={214} width={160} height={70} rx="10" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.3" strokeOpacity="0.6" />
          <text x={104 + i * 178} y={238} textAnchor="middle" fill={C.purple} fontSize="9.4" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={104 + i * 178} y={256} textAnchor="middle" fill={C.dim} fontSize="8.1" fontFamily={FONT}>{lines[0]}</text>
          <text x={104 + i * 178} y={269} textAnchor="middle" fill={C.dim} fontSize="8.1" fontFamily={FONT}>{lines[1]}</text>
          {i < 4 && <Arrow x1={186 + i * 178} y1={249} x2={200 + i * 178} y2={249} color={C.lime} delay={340 + i * 40} />}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x={24} y={302} width={424} height={132} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.75" />
        <text x={236} y={326} textAnchor="middle" fill={C.cyan} fontSize="10.2" fontWeight="800" fontFamily={FONT}>DETECTION</text>
        {[
          'UEBA: off-hours, bulk access, new destination',
          'DLP: mail, USB, cloud upload alerts',
          'audit logs: mail rule, external share, download',
          'endpoint: USB history, print log, sync tools',
          'resignation / notice-period monitoring',
        ].map((s, i) => (
          <text key={s} x={44} y={350 + i * 18} fill={C.dim} fontSize="8.5" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={472} y={302} width={424} height={132} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.4" strokeOpacity="0.75" />
        <text x={684} y={326} textAnchor="middle" fill={C.green} fontSize="10.2" fontWeight="800" fontFamily={FONT}>PREVENTION</text>
        {[
          'least privilege + quarterly access review',
          'separation of duties + PAM + JIT access',
          'background check, NDA, awareness',
          'blame-free reporting culture',
          'same-day offboarding + 30-day watch',
        ].map((s, i) => (
          <text key={s} x={492} y={350 + i * 18} fill={C.dim} fontSize="8.5" fontFamily={FONT}>{`- ${s}`}</text>
        ))}
      </g>

      <Note x={460} y={456} text="Forensics: $UsnJrnl, $MFT, registry USB history, browser, cloud audit, DLP log — timeline banao" color={C.teal} size="8.8" />
      <Note x={460} y={482} text='Exam line: "Insider ka access legitimate hota hai — isliye behaviour dekho, permission nahi"' color={C.yellow} size={9.2} bold />
      <Note x={460} y={506} text="Case: notice period mein data copy — DLP + gateway + cloud audit teeno ne same window dikhaya" color={C.dim} size={8.8} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.10 — Identity theft: routes aur impact
   ------------------------------------------------------------------ */
export function IdentityTheftDiagram() {
  return (
    <Frame
      id="se-identity"
      title="Identity theft — identifiers se fraud tak"
      sub="pehle data chori (theft), phir uska misuse (fraud) — social engineering dono mein fuel hai"
      label="Identity theft flow: identifiers collected through phishing, SIM swap, data breach, shoulder surfing and social media converge into an assumed identity, producing financial, legal and reputational impact, with prevention and response controls"
    >
      <Note x={460} y={78} text="SOURCES — identifiers kahan se aate hain" color={C.dim} size={9.6} bold />
      {[
        ['PHISHING', 'credential + OTP', C.red],
        ['SIM SWAP', 'number hijack, OTP relay', C.orange],
        ['BREACH DATA', 'bulk Aadhaar/PAN, cards', C.purple],
        ['SHOULDER / DUMPSTER', 'PIN, statements, KYC copy', C.yellow],
        ['SOCIAL MEDIA', 'DOB, school, pet name', C.teal],
      ].map(([t, s, col], i) => (
        <Box key={t} x={24 + i * 178} y={88} w={160} h={74} title={t} lines={[s]} color={col} delay={70 + i * 50} />
      ))}

      <Arrow x1={460} y1={166} x2={460} y2={186} color={C.lime} delay={400} />

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x={250} y={190} width={420} height={58} rx="12" fill="rgba(255,82,82,0.08)" stroke={C.red} strokeWidth="1.6" strokeOpacity="0.85" />
        <text x={460} y={214} textAnchor="middle" fill={C.red} fontSize="10.6" fontWeight="800" fontFamily={FONT}>
          IDENTITY ASSUMED — koi aur aap ban jaata hai
        </text>
        <text x={460} y={234} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>
          verification cross: OTP, KYC, security questions, caller identity
        </text>
      </g>

      <Arrow x1={460} y1={250} x2={460} y2={270} color={C.lime} delay={500} />

      {[
        ['FINANCIAL', ['naye loan/card/UPI', 'credit history damage'], C.orange],
        ['ACCOUNT TAKEOVER', ['mail, social, bank', 'contacts se aage attack'], C.cyan],
        ['SYNTHETIC ID', ['real + fake data', 'naya "person" banta hai'], C.purple],
        ['LEGAL / CRIMINAL', ['arrest par doosre ka naam', 'warrant galti se aap par'], C.red],
      ].map(([t, lines, col], i) => (
        <Box key={t} x={24 + i * 222} y={278} w={204} h={86} title={t} lines={lines} color={col} delay={560 + i * 60} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '820ms' }}>
        <rect x={24} y={382} width={872} height={72} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={406} textAnchor="middle" fill={C.green} fontSize="10" fontWeight="800" fontFamily={FONT}>
          PREVENT + RESPOND
        </text>
        <text x={460} y={426} textAnchor="middle" fill={C.dim} fontSize="8.7" fontFamily={FONT}>
          data minimisation · masked KYC · MFA (FIDO2) · SIM-swap lock · credit monitoring · social media hygiene
        </text>
        <text x={460} y={444} textAnchor="middle" fill={C.dim} fontSize="8.7" fontFamily={FONT}>
          if victim: bank block · platform report · FIR/NCRP · session revoke · fraud alert · 65B evidence
        </text>
      </g>

      <Note x={460} y={474} text="India: IT Act 66C (identity theft) + 66D (personation) · BNS cheating/forgery · DPDP Act 2023" color={C.teal} size={8.9} />
      <Note x={460} y={500} text='Exam line: "Identity theft data ka chori hai, identity fraud uska istemaal"' color={C.yellow} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.11 — Preventing insider threats: programme loop
   ------------------------------------------------------------------ */
export function PreventingInsiderThreatsDiagram() {
  const loop = [
    ['ASSESS', 'crown jewels, roles, risk', C.teal],
    ['HIRE', 'background check, NDA, AUP', C.cyan],
    ['CONTROL', 'least privilege, SoD, PAM', C.green],
    ['PROTECT DATA', 'classification, DLP, encryption', C.yellow],
    ['MONITOR', 'UEBA, audit log, DLP alert', C.orange],
    ['RESPOND', 'playbook, HR + legal, evidence', C.red],
    ['OFFBOARD', 'same-day revoke, 30-day watch', C.purple],
    ['IMPROVE', 'metrics, lessons, policy update', C.pink],
  ];
  return (
    <Frame
      id="se-prevent"
      title="Insider threat prevention — programme loop"
      sub="assess -> hire -> control -> protect -> monitor -> respond -> offboard -> improve"
      label="Eight-stage insider threat programme loop from assessment and hiring through access control, data protection, monitoring, response, offboarding and improvement, with preventive detective and corrective control layers and metrics"
    >
      {loop.slice(0, 4).map(([t, s, col], i) => (
        <g key={t}>
          <Box x={24 + i * 222} y={74} w={204} h={78} title={t} sub={s} color={col} delay={60 + i * 60} />
          {i < 3 && <Arrow x1={230 + i * 222} y1={113} x2={244 + i * 222} y2={113} color={C.lime} delay={320 + i * 40} />}
        </g>
      ))}
      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <polyline
          points="800,176 800,184 120,184 120,194"
          fill="none"
          stroke={C.lime}
          strokeWidth="1.5"
          strokeOpacity="0.75"
          strokeDasharray="5 4"
        />
        <polygon points="120,202 114,192 126,192" fill={C.lime} fillOpacity="0.9" />
        <text x={460} y={197} textAnchor="middle" fill={C.lime} fontSize="8.2" fontWeight="700" fontFamily={FONT}>
          loop repeat — improve se assess par wapas
        </text>
      </g>

      {loop.slice(4).map(([t, s, col], i) => (
        <g key={t}>
          <Box x={24 + i * 222} y={206} w={204} h={78} title={t} sub={s} color={col} delay={660 + i * 60} />
          {i < 3 && <Arrow x1={230 + i * 222} y1={245} x2={244 + i * 222} y2={245} color={C.lime} delay={900 + i * 40} />}
        </g>
      ))}

      <Note x={460} y={312} text="CONTROL LAYERS" color={C.dim} size={9.6} bold />
      {[
        ['PREVENTIVE', ['least privilege, SoD', 'DLP, encryption, AUP'], C.green],
        ['DETECTIVE', ['UEBA, audit logs', 'DLP + access anomaly'], C.yellow],
        ['CORRECTIVE', ['playbook, revoke', 'recovery, lessons'], C.red],
      ].map(([t, lines, col], i) => (
        <Box key={t} x={24 + i * 292} y={322} w={274} h={80} title={t} lines={lines} color={col} delay={980 + i * 60} />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '1200ms' }}>
        <rect x={24} y={418} width={872} height={52} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.7" />
        <text x={460} y={440} textAnchor="middle" fill={C.lime} fontSize="9.6" fontWeight="800" fontFamily={FONT}>METRICS</text>
        <text x={460} y={460} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>
          access review completion % · DLP alert closure time · training coverage · time-to-revoke on exit · repeat incidents
        </text>
      </g>

      <Note x={460} y={492} text='Exam line: "Insider threat prevention ek programme hai — policy, people, process aur technology ka loop"' color={C.yellow} size={9.2} bold />
      <Note x={460} y={514} text="Balance: monitoring transparent + proportionate ho — warna reporting culture hi mar jaati hai" color={C.orange} size={8.8} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.12 — Targets aur defence strategies
   ------------------------------------------------------------------ */
export function SocialEngineeringTargetsDiagram() {
  return (
    <Frame
      id="se-targets"
      title="Social engineering targets aur defence strategies"
      sub="target access/authority/information ke hisaab se chuna jaata hai — defence chain usi ko mirror karti hai"
      label="High-value targets on the left - executives, finance, HR, IT help desk, admins, reception, new joiners, remote staff, vendors and customers - mapped to the defence chain prepare, prevent, detect, respond and recover, with awareness metrics"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={72} width={330} height={288} rx="12" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.5" strokeOpacity="0.8" />
        <text x={189} y={96} textAnchor="middle" fill={C.teal} fontSize="10.4" fontWeight="800" fontFamily={FONT}>HIGH-VALUE TARGETS</text>
        {[
          ['Executives + PAs', 'authority, calendar'],
          ['Finance / accounts', 'payment, bank change'],
          ['HR team', 'employee PII, payroll'],
          ['IT help desk', 'password / MFA reset'],
          ['Admins / DBAs', 'privileged access'],
          ['Reception', 'physical entry, badge'],
          ['New joiners', 'policy unaware'],
          ['Remote / travelling', 'no walk-over check'],
          ['Contractors / vendors', 'inside trust boundary'],
          ['Customers / citizens', 'KYC, UPI, delivery'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={44} y={122 + i * 23} fill={C.cyan} fontSize="8.8" fontWeight="700" fontFamily={FONT}>{`- ${t}`}</text>
            <text x={230} y={122 + i * 23} fill={C.dim} fontSize="8.2" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>

      <Note x={688} y={92} text="DEFENCE CHAIN" color={C.dim} size={9.6} bold />
      {[
        ['PREPARE', ['policy, classification', 'verification protocol'], C.teal],
        ['PREVENT', ['FIDO2, least privilege', 'help-desk proofing'], C.green],
        ['DETECT', ['report button, UEBA', 'impersonation watch'], C.yellow],
        ['RESPOND', ['playbook, contain', 'reset, forensics'], C.orange],
        ['RECOVER', ['restore, notify', 'root cause, update'], C.red],
      ].map(([t, lines, col], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${220 + i * 60}ms` }}>
          <rect x={372} y={102 + i * 52} width={524} height={46} rx="8" fill={col} fillOpacity="0.06" stroke={col} strokeWidth="1.3" strokeOpacity="0.7" />
          <text x={386} y={122 + i * 52} fill={col} fontSize="9.4" fontWeight="800" fontFamily={FONT}>{t}</text>
          <text x={386} y={138 + i * 52} fill={C.dim} fontSize="8.3" fontFamily={FONT}>{`- ${lines[0]}  ·  ${lines[1]}`}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={24} y={374} width={872} height={64} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={460} y={396} textAnchor="middle" fill={C.lime} fontSize="9.8" fontWeight="800" fontFamily={FONT}>AWARENESS — role-based, continuous, blame-free</text>
        <text x={460} y={414} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>
          onboarding module · quarterly simulations · micro-learning · report button + feedback · verification drills
        </text>
        <text x={460} y={430} textAnchor="middle" fill={C.faint} fontSize="8.2" fontFamily={FONT}>
          metrics: click rate down · report rate up · time-to-report down · verification compliance up
        </text>
      </g>

      <Note x={460} y={462} text="Help-desk rule: inbound call par MFA reset nahi — identity proofing + manager callback" color={C.orange} size={9} />
      <Note x={460} y={488} text='Exam line: "Target role se decide hota hai, defence process se"' color={C.yellow} size={9.4} bold />
      <Note x={460} y={512} text="Layer model: people + process + technology + governance — ek layer fail ho to doosri rok de" color={C.dim} size="8.6" />
    </Frame>
  );
}
