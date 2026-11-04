const FONT = "'Segoe UI', system-ui, sans-serif";

// ============================================================
// Diagram 1 — Client ↔ server stack of the web
// ============================================================
export function WebStackDiagram() {
  const chain = [
    { t: 'CLIENT', s: 'browser (Chrome, Firefox)', d: 'request bhejta hai', c: '#00d4ff' },
    { t: 'INTERNET', s: 'ISP, DNS, routers', d: 'request route karta hai', c: '#2f6fff' },
    { t: 'WEB SERVER', s: 'Apache / Nginx / IIS', d: 'request receive karta hai', c: '#c4ff00' },
    { t: 'APP SERVER', s: 'PHP / Node / Java', d: 'logic chalata hai', c: '#ff8800' },
    { t: 'DATABASE', s: 'MySQL / MongoDB', d: 'data deta hai', c: '#ff7ab2' },
  ];
  return (
    <svg viewBox="0 0 920 400" className="diagram-svg" role="img" aria-label="Client browser request travelling through the internet to a web server, application server and database">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Web request ka poora raasta
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        browser se database tak · aur response wapas browser tak
      </text>

      {chain.map((node, i) => {
        const x = 22 + i * 178;
        return (
          <g key={node.t} className="diagram-pop" style={{ animationDelay: `${80 + i * 110}ms` }}>
            <rect x={x} y="86" width="156" height="132" rx="12" fill="rgba(255,255,255,0.03)" stroke={node.c} strokeWidth="1.7" strokeOpacity="0.75" />
            <rect x={x} y="86" width="156" height="34" rx="12" fill={node.c} fillOpacity="0.16" />
            <text x={x + 78} y="108" textAnchor="middle" fill={node.c} fontSize="11" fontWeight="800" fontFamily={FONT}>{node.t}</text>
            <text x={x + 78} y="140" textAnchor="middle" fill="#fff" fontSize="10" fontFamily={FONT}>{node.s}</text>
            <text x={x + 78} y="162" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>{node.d}</text>
            <text x={x + 78} y="192" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>STEP {i + 1}</text>
            {i < chain.length - 1 && (
              <text x={x + 167} y="157" textAnchor="middle" fill="#9ab0e0" fontSize="15" fontFamily={FONT}>→</text>
            )}
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <path d="M 890 236 H 34" fill="none" stroke="#c4ff00" strokeWidth="1.5" strokeDasharray="6 5" strokeOpacity="0.7" />
        <path d="M 34 236 L 44 231 M 34 236 L 44 241" fill="none" stroke="#c4ff00" strokeWidth="1.5" strokeOpacity="0.9" />
        <text x="462" y="256" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
          response (HTML + CSS + JS + JSON) wapas browser ko
        </text>
      </g>

      <text x="460" y="292" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Har web page isi 5-step chain ka result hai — tech stack isi raaste ke components ke naam hain
      </text>
      <text x="460" y="316" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Front-end = client side (HTML, CSS, JS) · Back-end = server + app + database
      </text>
      <text x="460" y="344" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Exam line: "Web technology = client, server aur unke beech communication ka poora system"
      </text>
      <text x="460" y="370" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Isi diagram ko 3-tier architecture ke naam se bhi likha jaata hai
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 2 — Internet vs WWW
// ============================================================
export function InternetVsWwwDiagram() {
  return (
    <svg viewBox="0 0 920 420" className="diagram-svg" role="img" aria-label="Internet as the hardware network of networks compared with the World Wide Web running on top of it">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Internet = road, WWW = us road par chalti gaadi
      </text>

      <g className="diagram-pop">
        <rect x="20" y="52" width="430" height="300" rx="16" fill="rgba(0,71,255,0.07)" stroke="#2f6fff" strokeWidth="2" />
        <text x="235" y="80" textAnchor="middle" fill="#2f6fff" fontSize="14" fontWeight="800" fontFamily={FONT}>INTERNET</text>
        <text x="235" y="99" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>network of networks — hardware + protocols</text>

        <circle cx="120" cy="150" r="22" fill="rgba(0,212,255,0.12)" stroke="#00d4ff" strokeWidth="1.5" />
        <text x="120" y="155" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily={FONT}>ISP</text>
        <circle cx="235" cy="150" r="22" fill="rgba(0,212,255,0.12)" stroke="#00d4ff" strokeWidth="1.5" />
        <text x="235" y="155" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily={FONT}>DNS</text>
        <circle cx="350" cy="150" r="22" fill="rgba(0,212,255,0.12)" stroke="#00d4ff" strokeWidth="1.5" />
        <text x="350" y="155" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily={FONT}>ROUTER</text>
        <line x1="142" y1="150" x2="213" y2="150" stroke="#00d4ff" strokeWidth="1.4" strokeOpacity="0.6" />
        <line x1="257" y1="150" x2="328" y2="150" stroke="#00d4ff" strokeWidth="1.4" strokeOpacity="0.6" />

        <text x="235" y="196" textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>cables · satellites · IP addresses · TCP/IP</text>
        <text x="235" y="216" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>kabhi bana: 1969 (ARPANET)</text>

        <text x="235" y="250" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>Internet par ye sab chalta hai:</text>
        {['WWW (websites)', 'Email (SMTP)', 'File transfer (FTP)', 'Video calls (VoIP)', 'Online games'].map((t, i) => (
          <text key={t} x="235" y={272 + i * 16} textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>{t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="470" y="52" width="430" height="300" rx="16" fill="rgba(196,255,0,0.06)" stroke="#c4ff00" strokeWidth="2" />
        <text x="685" y="80" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>WORLD WIDE WEB</text>
        <text x="685" y="99" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>internet ki ek service — documents ka system</text>

        {[
          'URL → https://site.com/page',
          'HTTP / HTTPS → request-response',
          'HTML / CSS / JS → page banana',
          'Browser → page render karna',
          'Search engine → page dhoondna',
        ].map((t, i) => (
          <g key={t}>
            <circle cx="500" cy={128 + i * 26} r="3" fill="#c4ff00" />
            <text x="512" y={132 + i * 26} fill="#dbe6ff" fontSize="10" fontFamily={FONT}>{t}</text>
          </g>
        ))}

        <text x="685" y="290" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>Tim Berners-Lee, CERN — 1989-91</text>
        <text x="685" y="312" textAnchor="middle" fill="#fff" fontSize="10" fontFamily={FONT}>WWW ke bina bhi internet chalta hai (email, FTP)</text>
        <text x="685" y="332" textAnchor="middle" fill="#fff" fontSize="10" fontFamily={FONT}>par internet ke bina WWW nahi chal sakta</text>
      </g>

      <text x="460" y="378" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Internet = infrastructure (hardware + protocols) · WWW = us infrastructure par chalti ek service
      </text>
      <text x="460" y="402" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: dono ko define karo, phir "WWW ⊂ Internet" relationship likho — dono ko same mat samjho
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 3 — Web server request / response cycle
// ============================================================
export function WebServerDiagram() {
  return (
    <svg viewBox="0 0 920 430" className="diagram-svg" role="img" aria-label="A browser sending an HTTP request to a web server, which either returns a static file or passes it to an application server and database">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Web server kaise kaam karta hai
      </text>

      <g className="diagram-pop">
        <rect x="20" y="70" width="170" height="110" rx="12" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1.6" />
        <text x="105" y="100" textAnchor="middle" fill="#00d4ff" fontSize="11.5" fontWeight="800" fontFamily={FONT}>BROWSER</text>
        <text x="105" y="122" textAnchor="middle" fill="#fff" fontSize="9.5" fontFamily={FONT}>GET /index.html</text>
        <text x="105" y="140" textAnchor="middle" fill="#fff" fontSize="9.5" fontFamily={FONT}>Host: example.com</text>
        <text x="105" y="160" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>request bhejta hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '140ms' }}>
        <rect x="300" y="44" width="220" height="300" rx="14" fill="rgba(196,255,0,0.06)" stroke="#c4ff00" strokeWidth="1.8" />
        <text x="410" y="70" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>WEB SERVER</text>
        <text x="410" y="88" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>Apache · Nginx · IIS</text>

        <rect x="318" y="102" width="184" height="66" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(0,212,255,0.4)" />
        <text x="410" y="122" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily={FONT}>Request receive</text>
        <text x="410" y="140" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>URL parse · port 80/443</text>
        <text x="410" y="156" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>security + virtual host check</text>

        <rect x="318" y="180" width="184" height="56" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(196,255,0,0.4)" />
        <text x="410" y="201" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily={FONT}>Static ya dynamic?</text>
        <text x="410" y="220" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>.html .css .jpg → seedha file</text>

        <rect x="318" y="248" width="184" height="56" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,136,0,0.45)" />
        <text x="410" y="269" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily={FONT}>.php / .jsp / API</text>
        <text x="410" y="288" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>app server ko de deta hai</text>

        <text x="410" y="328" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>response: status code + headers + body</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="580" y="70" width="150" height="90" rx="12" fill="rgba(255,136,0,0.08)" stroke="#ff8800" strokeWidth="1.6" />
        <text x="655" y="96" textAnchor="middle" fill="#ff8800" fontSize="10.5" fontWeight="800" fontFamily={FONT}>APP SERVER</text>
        <text x="655" y="116" textAnchor="middle" fill="#fff" fontSize="9.5" fontFamily={FONT}>PHP / Node / Java</text>
        <text x="655" y="134" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>business logic</text>
        <text x="655" y="150" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>HTML generate</text>

        <rect x="580" y="190" width="150" height="80" rx="12" fill="rgba(255,122,178,0.08)" stroke="#ff7ab2" strokeWidth="1.6" />
        <text x="655" y="216" textAnchor="middle" fill="#ff7ab2" fontSize="10.5" fontWeight="800" fontFamily={FONT}>DATABASE</text>
        <text x="655" y="236" textAnchor="middle" fill="#fff" fontSize="9.5" fontFamily={FONT}>MySQL / Mongo</text>
        <text x="655" y="254" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>SELECT / INSERT</text>

        <line x1="520" y1="276" x2="580" y2="230" stroke="#ff8800" strokeWidth="1.4" strokeOpacity="0.6" />
        <line x1="655" y1="160" x2="655" y2="190" stroke="#ff8800" strokeWidth="1.4" strokeOpacity="0.5" />

        <rect x="760" y="70" width="140" height="200" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="830" y="94" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>STATUS CODES</text>
        {['200 OK', '301 redirect', '403 forbidden', '404 not found', '500 server error'].map((t, i) => (
          <text key={t} x="830" y={120 + i * 22} textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>{t}</text>
        ))}
        <text x="830" y="252" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>80 = HTTP · 443 = HTTPS</text>
      </g>

      <path d="M 190 125 H 298" fill="none" stroke="#00d4ff" strokeWidth="1.6" strokeOpacity="0.8" />
      <path d="M 298 125 L 288 120 M 298 125 L 288 130" fill="none" stroke="#00d4ff" strokeWidth="1.6" />
      <path d="M 298 158 H 192" fill="none" stroke="#c4ff00" strokeWidth="1.6" strokeDasharray="5 4" strokeOpacity="0.8" />
      <path d="M 192 158 L 202 153 M 192 158 L 202 163" fill="none" stroke="#c4ff00" strokeWidth="1.6" />

      <text x="460" y="372" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Static page: server file hi bhej deta hai · Dynamic page: app server HTML bana kar deta hai
      </text>
      <text x="460" y="396" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Apache = .htaccess, modules, wide support · Nginx = event-driven, high concurrency, reverse proxy
      </text>
      <text x="460" y="418" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: request → response cycle draw karo aur 200 / 404 / 500 ke example do
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 4 — Website planning and design issues
// ============================================================
export function WebsitePlanningDiagram() {
  const phases = [
    { n: '1', t: 'Goal', d: 'site kis liye?', c: '#00d4ff' },
    { n: '2', t: 'Audience', d: 'kaun use karega?', c: '#2f6fff' },
    { n: '3', t: 'Content', d: 'kya dikhana hai?', c: '#c4ff00' },
    { n: '4', t: 'Structure', d: 'sitemap + navigation', c: '#ff8800' },
    { n: '5', t: 'Design', d: 'layout + colors + fonts', c: '#ff7ab2' },
    { n: '6', t: 'Test & Launch', d: 'browsers + speed + SEO', c: '#00ff88' },
  ];
  return (
    <svg viewBox="0 0 920 420" className="diagram-svg" role="img" aria-label="Six phases of website planning with the design issues considered at each phase">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Website planning — 6 phases
      </text>
      <text x="460" y="45" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        design ka matlab sirf "achha dikhna" nahi — usable, fast aur accessible hona bhi hai
      </text>

      {phases.map((p, i) => {
        const x = 20 + (i % 3) * 300;
        const y = 66 + Math.floor(i / 3) * 128;
        return (
          <g key={p.t} className="diagram-pop" style={{ animationDelay: `${80 + i * 90}ms` }}>
            <rect x={x} y={y} width="280" height="106" rx="12" fill="rgba(255,255,255,0.03)" stroke={p.c} strokeWidth="1.6" strokeOpacity="0.75" />
            <circle cx={x + 26} cy={y + 26} r="13" fill={p.c} fillOpacity="0.18" stroke={p.c} strokeWidth="1.4" />
            <text x={x + 26} y={y + 30} textAnchor="middle" fill={p.c} fontSize="11" fontWeight="800" fontFamily={FONT}>{p.n}</text>
            <text x={x + 48} y={y + 31} fill={p.c} fontSize="12" fontWeight="800" fontFamily={FONT}>{p.t}</text>
            <text x={x + 16} y={y + 62} fill="#dbe6ff" fontSize="10" fontFamily={FONT}>{p.d}</text>
            <line x1={x + 16} y1={y + 74} x2={x + 264} y2={y + 74} stroke="rgba(255,255,255,0.08)" />
            <text x={x + 16} y={y + 92} fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>
              {[
                'purpose, KPI, budget',
                'age, device, language',
                'text, images, pages list',
                'sitemap, menu, links',
                'grid, contrast, typography',
                'cross-browser, speed, SEO',
              ][i]}
            </text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x="20" y="330" width="880" height="60" rx="12" fill="rgba(196,255,0,0.06)" stroke="#c4ff00" strokeWidth="1.5" />
        <text x="460" y="354" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="800" fontFamily={FONT}>
          Common design issues: mobile responsiveness · slow loading · confusing navigation · poor contrast · inconsistent fonts
        </text>
        <text x="460" y="375" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>
          inhe launch ke baad theek karna 5× mehnga padta hai — isliye planning phase mein hi socha jaata hai
        </text>
      </g>
    </svg>
  );
}

// ============================================================
// Diagram 5 — Structure of an HTML document
// ============================================================
export function HtmlStructureDiagram() {
  return (
    <svg viewBox="0 0 920 440" className="diagram-svg" role="img" aria-label="Tree structure of an HTML document with doctype, html, head and body including title, meta, link, script and content elements">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        HTML document ka structure — ek tree
      </text>
      <text x="460" y="45" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        &lt;!DOCTYPE html&gt; → &lt;html&gt; → &lt;head&gt; (information) + &lt;body&gt; (dikhne wala content)
      </text>

      <g className="diagram-pop">
        <rect x="360" y="66" width="200" height="46" rx="10" fill="rgba(196,255,0,0.12)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="460" y="94" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>&lt;!DOCTYPE html&gt;</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '120ms' }}>
        <rect x="360" y="132" width="200" height="44" rx="10" fill="rgba(0,212,255,0.12)" stroke="#00d4ff" strokeWidth="1.6" />
        <text x="460" y="159" textAnchor="middle" fill="#00d4ff" fontSize="12" fontWeight="800" fontFamily={FONT}>&lt;html lang="en"&gt;</text>
      </g>

      <line x1="460" y1="112" x2="460" y2="132" stroke="#9ab0e0" strokeWidth="1.4" strokeOpacity="0.6" />

      <path d="M 460 176 V 196 H 230 V 214" fill="none" stroke="#9ab0e0" strokeWidth="1.4" strokeOpacity="0.55" />
      <path d="M 460 176 V 196 H 690 V 214" fill="none" stroke="#9ab0e0" strokeWidth="1.4" strokeOpacity="0.55" />

      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x="120" y="214" width="220" height="44" rx="10" fill="rgba(47,111,255,0.14)" stroke="#2f6fff" strokeWidth="1.6" />
        <text x="230" y="241" textAnchor="middle" fill="#6fb2ff" fontSize="12" fontWeight="800" fontFamily={FONT}>&lt;head&gt;</text>
        {['<title> — tab ka naam', '<meta> — charset, viewport, SEO', '<link> — CSS file', '<style> — internal CSS', '<script> — JS file'].map((t, i) => (
          <g key={t}>
            <rect x="120" y={268 + i * 28} width="220" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(47,111,255,0.3)" />
            <text x="132" y={284 + i * 28} fill="#dbe6ff" fontSize="9.5" fontFamily="'Consolas', monospace">{t}</text>
          </g>
        ))}
        <text x="230" y="432" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>page par kuch nahi dikhta</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="580" y="214" width="220" height="44" rx="10" fill="rgba(196,255,0,0.12)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="690" y="241" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="800" fontFamily={FONT}>&lt;body&gt;</text>
        {['<h1> — heading', '<p> — paragraph', '<img> — image', '<a> — link', '<table> / <form> — data entry'].map((t, i) => (
          <g key={t}>
            <rect x="580" y={268 + i * 28} width="220" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.28)" />
            <text x="592" y={284 + i * 28} fill="#dbe6ff" fontSize="9.5" fontFamily="'Consolas', monospace">{t}</text>
          </g>
        ))}
        <text x="690" y="432" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>yahi user ko dikhta hai</text>
      </g>

      <text x="460" y="340" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        har element ka apna
      </text>
      <text x="460" y="358" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        opening + closing tag
      </text>
      <text x="460" y="382" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        &lt;html&gt; = root · head = meta info
      </text>
      <text x="460" y="400" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        body = visible content
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 6 — HTML elements: headings, paragraph, line break
// ============================================================
export function HtmlElementsDiagram() {
  return (
    <svg viewBox="0 0 920 420" className="diagram-svg" role="img" aria-label="Heading levels h1 to h6 shown with decreasing sizes, plus paragraph and line break behaviour">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Headings h1 → h6, paragraph aur line break
      </text>

      <g className="diagram-pop">
        <rect x="20" y="52" width="470" height="300" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.35)" strokeWidth="1.4" />
        <text x="255" y="76" textAnchor="middle" fill="#00d4ff" fontSize="11" fontWeight="800" fontFamily={FONT}>HEADINGS — size ka order</text>
        {[
          { tag: 'h1', size: 26, w: 800 },
          { tag: 'h2', size: 22, w: 700 },
          { tag: 'h3', size: 19, w: 600 },
          { tag: 'h4', size: 16, w: 600 },
          { tag: 'h5', size: 14, w: 500 },
          { tag: 'h6', size: 12.5, w: 500 },
        ].map((h, i) => (
          <g key={h.tag}>
            <text x="40" y={110 + i * 34} fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily="'Consolas', monospace">{`<${h.tag}>`}</text>
            <text x="100" y={110 + i * 34} fill="#fff" fontSize={h.size} fontWeight={h.w} fontFamily={FONT}>Heading {h.tag.slice(1)}</text>
            <text x="300" y={110 + i * 34} fill="#5a6a9e" fontSize="9.5" fontFamily={FONT}>→ {h.size}px default</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        <rect x="510" y="52" width="390" height="140" rx="14" fill="rgba(196,255,0,0.06)" stroke="rgba(196,255,0,0.4)" strokeWidth="1.4" />
        <text x="705" y="76" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="800" fontFamily={FONT}>&lt;p&gt; — paragraph</text>
        <text x="528" y="102" fill="#dbe6ff" fontSize="10" fontFamily={FONT}>Ye pehla paragraph hai. Browser iske</text>
        <text x="528" y="120" fill="#dbe6ff" fontSize="10" fontFamily={FONT}>aage-peeche khud jagah (margin) chhodta hai.</text>
        <text x="528" y="146" fill="#dbe6ff" fontSize="10" fontFamily={FONT}>Ye doosra paragraph hai — dahravi (gap)</text>
        <text x="528" y="164" fill="#dbe6ff" fontSize="10" fontFamily={FONT}>automatically ban gayi.</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x="510" y="204" width="390" height="148" rx="14" fill="rgba(255,136,0,0.07)" stroke="rgba(255,136,0,0.45)" strokeWidth="1.4" />
        <text x="705" y="228" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="800" fontFamily={FONT}>&lt;br&gt; — line break</text>
        <text x="528" y="254" fill="#dbe6ff" fontSize="10" fontFamily={FONT}>Line 1: naam — Riya</text>
        <text x="528" y="272" fill="#dbe6ff" fontSize="10" fontFamily={FONT}>Line 2: course — MCA</text>
        <text x="528" y="290" fill="#dbe6ff" fontSize="10" fontFamily={FONT}>Line 3: city — Pune</text>
        <text x="528" y="316" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>Ek hi &lt;p&gt; ke andar, sirf nayi line</text>
        <text x="528" y="334" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>paragraph gap nahi banta — &lt;br&gt; empty tag hai</text>
      </g>

      <text x="460" y="376" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Page par sirf ek &lt;h1&gt; rakhein · headings skip na karein (h2 ke baad h4 nahi) — SEO aur accessibility dono ke liye
      </text>
      <text x="460" y="400" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        &lt;hr&gt; horizontal line deta hai · &amp;nbsp; extra space · &lt;pre&gt; formatting preserve karta hai
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 7 — Inserting CSS in an HTML page
// ============================================================
export function CssInsertionDiagram() {
  const ways = [
    {
      t: 'INLINE', c: '#00d4ff', where: 'tag ke andar style=""',
      code: '<p style="color:red">Hi</p>',
      pros: 'sirf ek element', cons: 'repeat karna padta hai',
    },
    {
      t: 'INTERNAL', c: '#c4ff00', where: 'head ke andar <style>',
      code: '<style> p { color: red; } </style>',
      pros: 'ek page ke sab elements', cons: 'doosre pages par nahi',
    },
    {
      t: 'EXTERNAL', c: '#ff8800', where: 'alag .css file + <link>',
      code: '<link rel="stylesheet" href="style.css">',
      pros: 'poori site, cache hota hai', cons: 'ek extra request',
    },
  ];
  return (
    <svg viewBox="0 0 920 430" className="diagram-svg" role="img" aria-label="Three ways to insert CSS: inline, internal and external, with their scope and priority">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        CSS lagane ke 3 tarike
      </text>
      <text x="460" y="45" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        teeno ek hi kaam karte hain — scope aur maintainability alag hoti hai
      </text>

      {ways.map((w, i) => {
        const x = 20 + i * 300;
        return (
          <g key={w.t} className="diagram-pop" style={{ animationDelay: `${90 + i * 130}ms` }}>
            <rect x={x} y="66" width="280" height="238" rx="14" fill="rgba(255,255,255,0.03)" stroke={w.c} strokeWidth="1.7" strokeOpacity="0.75" />
            <rect x={x} y="66" width="280" height="42" rx="14" fill={w.c} fillOpacity="0.16" />
            <text x={x + 140} y="93" textAnchor="middle" fill={w.c} fontSize="12.5" fontWeight="800" fontFamily={FONT}>{w.t}</text>

            <text x={x + 16} y="130" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>KAHAN LIKHTE HAIN</text>
            <text x={x + 16} y="148" fill="#fff" fontSize="10" fontFamily={FONT}>{w.where}</text>

            <rect x={x + 16} y="160" width="248" height="42" rx="8" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" />
            <text x={x + 26} y="186" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{w.code.slice(0, 34)}</text>
            {w.code.length > 34 && (
              <text x={x + 26} y="198" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{w.code.slice(34)}</text>
            )}

            <text x={x + 16} y="226" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>FAYDA</text>
            <text x={x + 16} y="242" fill="#c4ff00" fontSize="9.5" fontFamily={FONT}>{w.pros}</text>
            <text x={x + 16} y="268" fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>NUKSAN</text>
            <text x={x + 16} y="284" fill="#ff8800" fontSize="9.5" fontFamily={FONT}>{w.cons}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="20" y="322" width="880" height="34" rx="10" fill="rgba(0,71,255,0.1)" stroke="rgba(0,212,255,0.35)" />
        <text x="460" y="344" textAnchor="middle" fill="#dbe6ff" fontSize="10" fontFamily={FONT}>
          Priority (jab tak !important na ho): inline &gt; internal &gt; external — baad mein aane wala rule jeetta hai
        </text>
      </g>

      <text x="460" y="382" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Real project mein: external file + chhoti si internal override — inline sirf quick test ke liye
      </text>
      <text x="460" y="406" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Best practice: HTML = structure, CSS = style, JS = behaviour — teeno alag files mein
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 8 — CSS selectors
// ============================================================
export function CssSelectorsDiagram() {
  const sels = [
    { s: 'p', name: 'Element', pick: 'saare <p>', spec: '1', c: '#00d4ff' },
    { s: '.note', name: 'Class', pick: 'class="note" wale', spec: '10', c: '#2f6fff' },
    { s: '#main', name: 'ID', pick: 'id="main" wala', spec: '100', c: '#c4ff00' },
    { s: '*', name: 'Universal', pick: 'har element', spec: '0', c: '#8f9dc4' },
    { s: 'h1, h2', name: 'Group', pick: 'dono headings', spec: '1', c: '#ff8800' },
    { s: 'div p', name: 'Descendant', pick: 'div ke andar wale p', spec: '2', c: '#ff7ab2' },
    { s: 'a:hover', name: 'Pseudo-class', pick: 'mouse hover par', spec: '11', c: '#00ff88' },
    { s: 'input[type]', name: 'Attribute', pick: 'attribute wale', spec: '11', c: '#00d4ff' },
  ];
  return (
    <svg viewBox="0 0 920 420" className="diagram-svg" role="img" aria-label="Common CSS selector types with examples and their specificity weights">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        CSS selectors — kaunse element par style lagegi
      </text>
      <text x="460" y="45" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        selector chunta hai · declaration ({'  '}property: value{'  '}) batati hai kya badalna hai
      </text>

      {sels.map((s, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 450;
        const y = 62 + row * 74;
        return (
          <g key={s.s} className="diagram-pop" style={{ animationDelay: `${70 + i * 60}ms` }}>
            <rect x={x} y={y} width="430" height="62" rx="10" fill="rgba(255,255,255,0.03)" stroke={s.c} strokeWidth="1.2" strokeOpacity="0.45" />
            <rect x={x} y={y} width="6" height="62" rx="3" fill={s.c} />
            <text x={x + 18} y={y + 26} fill={s.c} fontSize="12.5" fontWeight="800" fontFamily="'Consolas', monospace">{s.s}</text>
            <text x={x + 18} y={y + 46} fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>{s.name}</text>
            <text x={x + 150} y={y + 26} fill="#dbe6ff" fontSize="10" fontFamily={FONT}>{s.pick}</text>
            <text x={x + 150} y={y + 46} fill="#5a6a9e" fontSize="9" fontFamily={FONT}>specificity</text>
            <rect x={x + 340} y={y + 10} width="76" height="42" rx="8" fill={s.c} fillOpacity="0.12" stroke={s.c} strokeWidth="1" strokeOpacity="0.5" />
            <text x={x + 378} y={y + 36} textAnchor="middle" fill={s.c} fontSize="13" fontWeight="800" fontFamily={FONT}>{s.spec}</text>
          </g>
        );
      })}

      <text x="460" y="372" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Specificity: inline (1000) &gt; id (100) &gt; class/attribute/pseudo-class (10) &gt; element (1)
      </text>
      <text x="460" y="396" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Do rules ka weight barabar ho to baad mein likhi hui rule lagti hai · !important sab ko haraata hai (par avoid karein)
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 9 — HTML vs HTML5
// ============================================================
export function HtmlVsHtml5Diagram() {
  return (
    <svg viewBox="0 0 920 430" className="diagram-svg" role="img" aria-label="HTML 4 compared with HTML5 on doctype, semantics, media, storage, forms and APIs">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        HTML vs HTML5 — kya naya aaya
      </text>

      <g className="diagram-pop">
        <rect x="20" y="52" width="420" height="300" rx="14" fill="rgba(143,157,196,0.08)" stroke="#8f9dc4" strokeWidth="1.8" />
        <text x="230" y="80" textAnchor="middle" fill="#8f9dc4" fontSize="14" fontWeight="800" fontFamily={FONT}>HTML 4.01</text>
        <text x="230" y="99" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>1999 · structure + presentation mix</text>
        {[
          ['DOCTYPE', 'lamba, w3.org URL wala'],
          ['Layout', '<div> + <table>'],
          ['Media', 'plugin (Flash) chahiye'],
          ['Storage', 'sirf cookies'],
          ['Form input', 'text, password, checkbox'],
          ['Graphics', 'koi native support nahi'],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="40" y={132 + i * 34} fill="#9ab0e0" fontSize="9.5" fontWeight="700" fontFamily={FONT}>{k}</text>
            <text x="40" y={148 + i * 34} fill="#dbe6ff" fontSize="10" fontFamily={FONT}>{v}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="480" y="52" width="420" height="300" rx="14" fill="rgba(196,255,0,0.07)" stroke="#c4ff00" strokeWidth="1.9" />
        <text x="690" y="80" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>HTML5</text>
        <text x="690" y="99" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>2014 · semantic + APIs</text>
        {[
          ['DOCTYPE', '<!DOCTYPE html> — bas itna'],
          ['Layout', '<header> <nav> <section> <footer>'],
          ['Media', '<audio> <video> native'],
          ['Storage', 'localStorage / sessionStorage'],
          ['Form input', 'email, date, number, range'],
          ['Graphics', '<canvas> + <svg>'],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="500" y={132 + i * 34} fill="#9ab0e0" fontSize="9.5" fontWeight="700" fontFamily={FONT}>{k}</text>
            <text x="500" y={148 + i * 34} fill="#dbe6ff" fontSize="10" fontFamily={FONT}>{v}</text>
          </g>
        ))}
      </g>

      <text x="460" y="374" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        HTML5 backward compatible hai — purana code chalta rehta hai, naye tags add ho gaye
      </text>
      <text x="460" y="398" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Bonus: Geolocation, drag &amp; drop, Web Workers, offline application cache, better mobile support
      </text>
      <text x="460" y="420" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: 5 differences table mein likho — doctype, semantics, media, storage, form input
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 10 — Frames (frameset layout)
// ============================================================
export function FramesDiagram() {
  return (
    <svg viewBox="0 0 920 400" className="diagram-svg" role="img" aria-label="A frameset dividing the browser window into a navigation frame and a content frame compared with the modern iframe approach">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Frames — ek window, kai alag documents
      </text>
      <text x="460" y="45" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        &lt;frameset&gt; purana tarika hai · &lt;iframe&gt; aaj bhi chalta hai
      </text>

      <g className="diagram-pop">
        <rect x="20" y="64" width="430" height="210" rx="10" fill="#0a0e1a" stroke="rgba(0,212,255,0.5)" strokeWidth="1.6" />
        <rect x="20" y="64" width="430" height="26" rx="10" fill="rgba(0,212,255,0.16)" />
        <text x="235" y="82" textAnchor="middle" fill="#00d4ff" fontSize="9.5" fontFamily={FONT}>browser window (frameset rows="26,*")</text>

        <rect x="34" y="100" width="120" height="160" rx="8" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="1.4" />
        <text x="94" y="128" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>menu.html</text>
        {['Home', 'Notes', 'Exam', 'About'].map((t, i) => (
          <text key={t} x="94" y={152 + i * 22} textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>{t}</text>
        ))}

        <rect x="166" y="100" width="270" height="160" rx="8" fill="rgba(47,111,255,0.12)" stroke="#2f6fff" strokeWidth="1.4" />
        <text x="301" y="128" textAnchor="middle" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>main.html</text>
        <text x="301" y="152" textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>menu click par yahan</text>
        <text x="301" y="170" textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>naya page khulta hai</text>
        <text x="301" y="196" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>target="main" attribute se</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="490" y="64" width="410" height="210" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.5)" strokeWidth="1.5" />
        <text x="695" y="88" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="800" fontFamily={FONT}>Aaj ka tarika — &lt;iframe&gt;</text>
        <rect x="510" y="100" width="170" height="150" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(0,212,255,0.4)" />
        <text x="595" y="122" textAnchor="middle" fill="#00d4ff" fontSize="9.5" fontWeight="700" fontFamily={FONT}>page.html</text>
        <text x="595" y="146" textAnchor="middle" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>normal content</text>

        <rect x="700" y="100" width="180" height="150" rx="8" fill="rgba(0,0,0,0.45)" stroke="rgba(196,255,0,0.5)" strokeDasharray="4 3" />
        <text x="790" y="122" textAnchor="middle" fill="#c4ff00" fontSize="9.5" fontWeight="700" fontFamily={FONT}>iframe</text>
        <rect x="716" y="134" width="148" height="100" rx="6" fill="rgba(47,111,255,0.18)" stroke="rgba(47,111,255,0.6)" />
        <text x="790" y="170" textAnchor="middle" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>map / video / ad</text>
        <text x="790" y="188" textAnchor="middle" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>dusra document</text>
      </g>

      <text x="460" y="300" textAnchor="middle" fill="#ff8800" fontSize="10" fontWeight="700" fontFamily={FONT}>
        &lt;frameset&gt; aur &lt;frame&gt; HTML5 mein hata diye gaye (deprecated) — screen reader aur mobile par kaam nahi karte
      </text>
      <text x="460" y="328" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Frames ka fayda: menu dobara load nahi hota · nukhsan: bookmark/URL, printing aur SEO toot jaate hain
      </text>
      <text x="460" y="354" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>
        Aaj ka solution: CSS grid/flex layout + &lt;iframe&gt; sirf embedded third-party content ke liye
      </text>
      <text x="460" y="380" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam: frameset ka code likho, phir likho ki kyun deprecated hai aur iframe kyun better hai
      </text>
    </svg>
  );
}
