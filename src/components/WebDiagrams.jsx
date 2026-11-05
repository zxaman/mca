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

// ============================================================
// Diagram 11 — HTML vs XML
// ============================================================
export function HtmlVsXmlDiagram() {
  const rows = [
    ['Purpose', 'Page dikhana', 'Data carry karna'],
    ['Tags', 'Fixed (p, h1, table)', 'Khud banate hain (student, marks)'],
    ['Case', 'Case-insensitive', 'Case-sensitive (Name ≠ name)'],
    ['Closing tag', 'Optional (@ browser)', 'Zaroori — warna error'],
    ['Errors', 'Browser ignore karta hai', 'Parser reject kar deta hai'],
    ['Kis kaam mein', 'Website UI', 'Config, API, feed, storage'],
  ];
  return (
    <svg viewBox="0 0 920 444" className="diagram-svg" role="img" aria-label="HTML compared with XML on purpose, tags, case sensitivity, closing tags and error handling">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        HTML vs XML — dono markup hain, kaam alag
      </text>
      <text x="460" y="45" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        HTML page dikhata hai (presentation) · XML data rakhta hai (structure)
      </text>

      <g className="diagram-pop">
        <rect x="20" y="64" width="430" height="50" rx="10" fill="rgba(0,212,255,0.14)" stroke="#00d4ff" strokeWidth="1.8" />
        <text x="235" y="95" textAnchor="middle" fill="#00d4ff" fontSize="13" fontWeight="800" fontFamily={FONT}>HTML</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '120ms' }}>
        <rect x="470" y="64" width="430" height="50" rx="10" fill="rgba(196,255,0,0.12)" stroke="#c4ff00" strokeWidth="1.8" />
        <text x="685" y="95" textAnchor="middle" fill="#c4ff00" fontSize="13" fontWeight="800" fontFamily={FONT}>XML</text>
      </g>

      {rows.map(([k, a, b], i) => (
        <g key={k} className="diagram-pop" style={{ animationDelay: `${160 + i * 70}ms` }}>
          <text x="34" y={144 + i * 46} fill="#5a6a9e" fontSize="8.5" fontWeight="700" fontFamily={FONT}>{k.toUpperCase()}</text>
          <rect x="20" y={152 + i * 46} width="430" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.25)" />
          <text x="36" y={170 + i * 46} fill="#dbe6ff" fontSize="10" fontFamily={FONT}>{a}</text>
          <rect x="470" y={152 + i * 46} width="430" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.25)" />
          <text x="486" y={170 + i * 46} fill="#dbe6ff" fontSize="10" fontFamily={FONT}>{b}</text>
        </g>
      ))}

      <text x="460" y="430" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        XML = data + meaning · HTML = data + look · XHTML dono ka mix tha, HTML5 ne usse replace kiya
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 12 — XML document as a tree
// ============================================================
export function XmlTreeDiagram() {
  const leaf = (x, y, w, label, sub, color) => (
    <g>
      <rect x={x} y={y} width={w} height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke={color} strokeWidth="1.2" strokeOpacity="0.55" />
      <text x={x + 12} y={y + 17} fill={color} fontSize="10" fontWeight="700" fontFamily="'Consolas', monospace">{label}</text>
      <text x={x + 12} y={y + 32} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{sub}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 920 450" className="diagram-svg" role="img" aria-label="An XML document shown as a tree with prolog, root element, child elements, attributes and text nodes">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        XML document = ek tree
      </text>
      <text x="460" y="45" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        ek root · uske andar elements · elements ke andar text, attributes aur comments
      </text>

      <g className="diagram-pop">
        <rect x="330" y="62" width="260" height="36" rx="8" fill="rgba(111,178,255,0.14)" stroke="#6fb2ff" strokeWidth="1.4" />
        <text x="460" y="85" textAnchor="middle" fill="#6fb2ff" fontSize="10.5" fontWeight="700" fontFamily="'Consolas', monospace">
          &lt;?xml version=&quot;1.0&quot;?&gt;
        </text>
        <text x="620" y="85" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>← prolog (optional)</text>

        <rect x="330" y="116" width="260" height="38" rx="8" fill="rgba(196,255,0,0.12)" stroke="#c4ff00" strokeWidth="1.8" />
        <text x="460" y="141" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="800" fontFamily="'Consolas', monospace">
          &lt;college&gt; &nbsp;— root element
        </text>
      </g>

      <line x1="460" y1="98" x2="460" y2="116" stroke="#9ab0e0" strokeWidth="1.3" strokeOpacity="0.6" />
      <path d="M 460 154 V 194" fill="none" stroke="#9ab0e0" strokeWidth="1.3" strokeOpacity="0.55" />

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="180" y="194" width="280" height="38" rx="8" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.4" />
        <text x="320" y="219" textAnchor="middle" fill="#00d4ff" fontSize="10.5" fontWeight="700" fontFamily="'Consolas', monospace">
          &lt;student id=&quot;1&quot;&gt;
        </text>
        <text x="470" y="212" fill="#ff8800" fontSize="9" fontFamily={FONT}>attribute</text>
        <text x="470" y="224" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>id=&quot;1&quot;</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '260ms' }}>
        {leaf(180, 250, 280, '<name>Riya Sharma</name>', 'text node', '#c4ff00')}
        {leaf(180, 300, 280, '<course>MCA</course>', 'text node', '#c4ff00')}
        {leaf(180, 350, 280, '<marks>78</marks>', 'text node', '#c4ff00')}
        <text x="320" y="414" textAnchor="middle" fill="#00d4ff" fontSize="10" fontWeight="700" fontFamily="'Consolas', monospace">&lt;/student&gt;</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x="560" y="196" width="320" height="172" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="720" y="220" textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="800" fontFamily={FONT}>Node types</text>
        {[
          ['Element', '<student>', '#00d4ff'],
          ['Attribute', 'id="1"', '#ff8800'],
          ['Text', 'Riya Sharma', '#c4ff00'],
          ['Comment', '<!-- note -->', '#5a6a9e'],
          ['CDATA', '<![CDATA[ <b> ]]>', '#8fd694'],
        ].map(([n, ex, c], i) => (
          <g key={n}>
            <circle cx="586" cy={248 + i * 24} r="3" fill={c} />
            <text x="598" y={252 + i * 24} fill={c} fontSize="9.5" fontWeight="700" fontFamily={FONT}>{n}</text>
            <text x="660" y={252 + i * 24} fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{ex}</text>
          </g>
        ))}
      </g>

      <text x="460" y="436" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Well-formed rules: ek root · tags properly band · case match · attribute quotes mein
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 13 — DTD / XSD validation
// ============================================================
export function DtdVsXsdDiagram() {
  return (
    <svg viewBox="0 0 920 440" className="diagram-svg" role="img" aria-label="An XML document validated against a DTD or an XML Schema, producing valid or invalid results, with a comparison of DTD and XSD">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        DTD / XML Schema — document valid hai ya nahi
      </text>
      <text x="460" y="45" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        well-formed = syntax sahi · valid = grammar (DTD/Schema) ke hisaab se bhi sahi
      </text>

      <g className="diagram-pop">
        <rect x="20" y="80" width="200" height="120" rx="12" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1.6" />
        <text x="120" y="106" textAnchor="middle" fill="#00d4ff" fontSize="11" fontWeight="800" fontFamily={FONT}>XML INSTANCE</text>
        <text x="36" y="130" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">&lt;student&gt;</text>
        <text x="46" y="146" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">&lt;name&gt;Riya&lt;/name&gt;</text>
        <text x="46" y="162" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">&lt;marks&gt;78&lt;/marks&gt;</text>
        <text x="36" y="178" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">&lt;/student&gt;</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '140ms' }}>
        <rect x="290" y="62" width="200" height="72" rx="12" fill="rgba(196,255,0,0.08)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="390" y="86" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="800" fontFamily={FONT}>DTD</text>
        <text x="390" y="106" textAnchor="middle" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">&lt;!ELEMENT student (name, marks)&gt;</text>
        <text x="390" y="122" textAnchor="middle" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>syntax: non-XML, simple</text>

        <rect x="290" y="148" width="200" height="72" rx="12" fill="rgba(255,136,0,0.08)" stroke="#ff8800" strokeWidth="1.6" />
        <text x="390" y="172" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="800" fontFamily={FONT}>XML SCHEMA (XSD)</text>
        <text x="390" y="192" textAnchor="middle" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;xs:element name=&quot;student&quot;</text>
        <text x="390" y="208" textAnchor="middle" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>typed: int, date, minLength</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="540" y="98" width="130" height="86" rx="12" fill="rgba(0,71,255,0.12)" stroke="#2f6fff" strokeWidth="1.6" />
        <text x="605" y="128" textAnchor="middle" fill="#6fb2ff" fontSize="10.5" fontWeight="800" fontFamily={FONT}>VALIDATOR</text>
        <text x="605" y="146" textAnchor="middle" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>(parser)</text>
        <text x="605" y="164" textAnchor="middle" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>structure check</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="720" y="70" width="180" height="56" rx="10" fill="rgba(0,255,136,0.1)" stroke="#00ff88" strokeWidth="1.5" />
        <text x="810" y="94" textAnchor="middle" fill="#00ff88" fontSize="10.5" fontWeight="800" fontFamily={FONT}>✓ VALID</text>
        <text x="810" y="112" textAnchor="middle" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>sab elements allowed hain</text>

        <rect x="720" y="156" width="180" height="56" rx="10" fill="rgba(255,95,87,0.12)" stroke="#ff5f57" strokeWidth="1.5" />
        <text x="810" y="180" textAnchor="middle" fill="#ff5f57" fontSize="10.5" fontWeight="800" fontFamily={FONT}>✗ INVALID</text>
        <text x="810" y="198" textAnchor="middle" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>galat order / missing / wrong type</text>
      </g>

      <path d="M 220 120 H 288" fill="none" stroke="#00d4ff" strokeWidth="1.4" strokeOpacity="0.7" />
      <path d="M 220 160 H 256 V 208 H 288" fill="none" stroke="#00d4ff" strokeWidth="1.4" strokeOpacity="0.7" />
      <path d="M 490 98 H 538" fill="none" stroke="#c4ff00" strokeWidth="1.4" strokeOpacity="0.7" />
      <path d="M 490 184 H 514 V 146 H 538" fill="none" stroke="#ff8800" strokeWidth="1.4" strokeOpacity="0.7" />
      <path d="M 670 128 H 718" fill="none" stroke="#00ff88" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M 670 166 H 700 V 184 H 718" fill="none" stroke="#ff5f57" strokeWidth="1.5" strokeOpacity="0.8" />

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x="20" y="250" width="880" height="150" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
        <text x="40" y="274" fill="#fff" fontSize="11" fontWeight="800" fontFamily={FONT}>DTD vs XML Schema</text>
        {[
          ['Syntax', 'Non-XML (apni language)', 'XML jaisa (xs: tags)'],
          ['Data types', 'Nahi — sirf structure', 'Haan — int, date, decimal'],
          ['Namespaces', 'Nahi', 'Haan, supported'],
          ['Reusability', 'Kam', 'Import + extend'],
          ['Constraint', 'Basic (#REQUIRED, #PCDATA)', 'Range, pattern, minLength'],
        ].map(([k, a, b], i) => (
          <g key={k}>
            <text x="40" y={298 + i * 22} fill="#9ab0e0" fontSize="9" fontWeight="700" fontFamily={FONT}>{k}</text>
            <text x="200" y={298 + i * 22} fill="#c4ff00" fontSize="9" fontFamily={FONT}>{a}</text>
            <text x="520" y={298 + i * 22} fill="#ff8800" fontSize="9" fontFamily={FONT}>{b}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// ============================================================
// Diagram 14 — XSLT transformation pipeline
// ============================================================
export function XsltPipelineDiagram() {
  return (
    <svg viewBox="0 0 920 430" className="diagram-svg" role="img" aria-label="An XML source and an XSLT stylesheet going into an XSLT processor, which outputs HTML">
      <text x="460" y="26" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        XSLT — XML ko HTML mein badalna
      </text>
      <text x="460" y="45" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        XML = data · XSLT = rules (template) · processor = machine · output = HTML page
      </text>

      <g className="diagram-pop">
        <rect x="20" y="70" width="210" height="120" rx="12" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1.6" />
        <text x="125" y="94" textAnchor="middle" fill="#00d4ff" fontSize="10.5" fontWeight="800" fontFamily={FONT}>books.xml</text>
        <text x="34" y="116" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;books&gt;</text>
        <text x="44" y="132" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;book&gt;</text>
        <text x="54" y="148" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;title&gt;MCA Notes&lt;/title&gt;</text>
        <text x="54" y="164" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;price&gt;450&lt;/price&gt;</text>
        <text x="34" y="182" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;/books&gt;</text>

        <rect x="20" y="206" width="210" height="118" rx="12" fill="rgba(196,255,0,0.08)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="125" y="230" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="800" fontFamily={FONT}>books.xsl</text>
        <text x="34" y="252" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;xsl:template match=&quot;/&quot;&gt;</text>
        <text x="44" y="268" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;h1&gt;Book List&lt;/h1&gt;</text>
        <text x="44" y="284" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;xsl:for-each select=&quot;book&quot;&gt;</text>
        <text x="54" y="300" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;xsl:value-of select=&quot;title&quot;/&gt;</text>
        <text x="34" y="316" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;/xsl:template&gt;</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="300" y="120" width="180" height="132" rx="14" fill="rgba(0,71,255,0.14)" stroke="#2f6fff" strokeWidth="1.8" />
        <text x="390" y="152" textAnchor="middle" fill="#6fb2ff" fontSize="11" fontWeight="800" fontFamily={FONT}>XSLT</text>
        <text x="390" y="172" textAnchor="middle" fill="#6fb2ff" fontSize="11" fontWeight="800" fontFamily={FONT}>PROCESSOR</text>
        <text x="390" y="196" textAnchor="middle" fill="#fff" fontSize="9" fontFamily={FONT}>XPath se match</text>
        <text x="390" y="212" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>template apply</text>
        <text x="390" y="232" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>browser / libxslt</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '360ms' }}>
        <rect x="560" y="96" width="340" height="230" rx="12" fill="#f7f9ff" stroke="#00c46a" strokeWidth="1.6" />
        <rect x="560" y="96" width="340" height="28" rx="12" fill="#d8f5e6" />
        <rect x="560" y="112" width="340" height="12" fill="#d8f5e6" />
        <text x="726" y="115" textAnchor="middle" fill="#0a7d4f" fontSize="9.5" fontWeight="700" fontFamily={FONT}>output.html (browser mein)</text>

        <text x="580" y="156" fill="#12203d" fontSize="15" fontWeight="800" fontFamily={FONT}>Book List</text>
        <rect x="580" y="168" width="300" height="30" rx="5" fill="#ffffff" stroke="#b9c8e8" />
        <text x="590" y="188" fill="#22314f" fontSize="9.5" fontFamily={FONT}>MCA Notes — 450</text>
        <rect x="580" y="204" width="300" height="30" rx="5" fill="#ffffff" stroke="#b9c8e8" />
        <text x="590" y="224" fill="#22314f" fontSize="9.5" fontFamily={FONT}>Web Technology — 380</text>
        <rect x="580" y="240" width="300" height="30" rx="5" fill="#ffffff" stroke="#b9c8e8" />
        <text x="590" y="260" fill="#22314f" fontSize="9.5" fontFamily={FONT}>Data Science — 520</text>
        <text x="580" y="300" fill="#5b6b8c" fontSize="8.5" fontFamily={FONT}>XML ka data yahan HTML list ban gaya</text>
      </g>

      <path d="M 230 130 H 298" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M 230 262 H 266 V 200 H 298" fill="none" stroke="#c4ff00" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M 480 186 H 558" fill="none" stroke="#00ff88" strokeWidth="1.6" strokeOpacity="0.85" />
      <path d="M 558 186 L 548 181 M 558 186 L 548 191" fill="none" stroke="#00ff88" strokeWidth="1.6" />

      <text x="460" y="356" textAnchor="middle" fill="#c9d8ff" fontSize="9.5" fontFamily="'Consolas', monospace">
        &lt;?xml-stylesheet type=&quot;text/xsl&quot; href=&quot;books.xsl&quot;?&gt;
      </text>
      <text x="460" y="382" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        XSLT = XSL Transformations · XPath se data chunte hain · template output banate hain
      </text>
      <text x="460" y="406" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        XSL = XSLT + XPath + XSL-FO (printing ke liye) — teeno alag specs hain
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 15 — Where JavaScript fits (structure / style / behaviour)
// ============================================================
export function JsRoleDiagram() {
  const layers = [
    { t: 'HTML', sub: 'structure', ex: '<h1>MCA</h1>', c: '#00d4ff' },
    { t: 'CSS', sub: 'presentation', ex: 'h1 { color: blue }', c: '#c4ff00' },
    { t: 'JAVASCRIPT', sub: 'behaviour', ex: 'onclick = show()', c: '#ff8800' },
  ];
  const engine = [
    { t: 'SOURCE', s: 'script.js', d: 'text file', c: '#00d4ff' },
    { t: 'PARSER', s: 'tokens → AST', d: 'syntax check', c: '#2f6fff' },
    { t: 'ENGINE', s: 'V8 / SpiderMonkey', d: 'JIT compile + run', c: '#c4ff00' },
    { t: 'RESULT', s: 'DOM + console', d: 'page badal jaata hai', c: '#ff8800' },
  ];
  return (
    <svg viewBox="0 0 920 404" className="diagram-svg" role="img" aria-label="HTML gives structure, CSS gives presentation and JavaScript gives behaviour, running inside the browser engine">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        JavaScript kahan fit hota hai
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        HTML = dhancha · CSS = roop · JavaScript = harkat (behaviour)
      </text>

      {layers.map((l, i) => {
        const x = 20 + i * 298;
        return (
          <g key={l.t} className="diagram-pop" style={{ animationDelay: `${80 + i * 110}ms` }}>
            <rect x={x} y="74" width="284" height="96" rx="12" fill="rgba(255,255,255,0.03)" stroke={l.c} strokeWidth="1.6" strokeOpacity="0.8" />
            <rect x={x} y="74" width="284" height="30" rx="12" fill={l.c} fillOpacity="0.16" />
            <text x={x + 142} y="95" textAnchor="middle" fill={l.c} fontSize="11.5" fontWeight="800" fontFamily={FONT}>{l.t}</text>
            <text x={x + 142} y="124" textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>{l.sub}</text>
            <text x={x + 142} y="150" textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily="'Consolas', monospace">{l.ex}</text>
          </g>
        );
      })}

      <text x="460" y="196" textAnchor="middle" fill="#c9d8ff" fontSize="10" fontFamily={FONT}>
        teeno milke ek interactive page banate hain — JS akela page ka structure nahi badal sakta, DOM ke through badalta hai
      </text>

      <text x="20" y="224" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>BROWSER KE ANDAR JS KA SAFAR</text>
      {engine.map((e, i) => {
        const x = 20 + i * 224;
        return (
          <g key={e.t} className="diagram-pop" style={{ animationDelay: `${380 + i * 90}ms` }}>
            <rect x={x} y="234" width="204" height="76" rx="10" fill="rgba(255,255,255,0.03)" stroke={e.c} strokeWidth="1.4" strokeOpacity="0.7" />
            <text x={x + 102} y="256" textAnchor="middle" fill={e.c} fontSize="10" fontWeight="800" fontFamily={FONT}>{e.t}</text>
            <text x={x + 102} y="276" textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily="'Consolas', monospace">{e.s}</text>
            <text x={x + 102} y="295" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{e.d}</text>
            {i < engine.length - 1 && (
              <text x={x + 214} y="278" textAnchor="middle" fill="#9ab0e0" fontSize="14" fontFamily={FONT}>→</text>
            )}
          </g>
        );
      })}

      <text x="460" y="342" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        JS = client-side scripting · browser mein chalti hai · server ko har baar nahi bulana padta
      </text>
      <text x="460" y="370" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        Exam line: HTML structure deta hai, CSS sundar karta hai, JavaScript jaan daalta hai
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 16 — Three ways to add JS to a page
// ============================================================
export function JsInclusionDiagram() {
  const ways = [
    { t: 'EMBEDDED (internal)', tag: '<script> inside HTML', lines: ['<script>', '  alert("Hi");', '</script>'], note: 'ek page ke liye theek', c: '#00d4ff' },
    { t: 'EXTERNAL', tag: '<script src="app.js">', lines: ['<script src="app.js">', '</script>', '// app.js file'], note: 'reuse + caching + clean HTML', c: '#c4ff00' },
    { t: 'INLINE HANDLER', tag: 'attribute mein JS', lines: ['<button onclick=', '  "show()">Click</button>'], note: 'chhota kaam, aaj avoid', c: '#ff8800' },
  ];
  return (
    <svg viewBox="0 0 920 412" className="diagram-svg" role="img" aria-label="Three ways to include JavaScript in HTML: embedded script block, external script file and inline event handler">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        JS ko HTML mein jodne ke 3 tareeke
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        embedded · external · inline — teeno browser ke liye same JS hai
      </text>

      {ways.map((w, i) => {
        const x = 20 + i * 298;
        return (
          <g key={w.t} className="diagram-pop" style={{ animationDelay: `${90 + i * 120}ms` }}>
            <rect x={x} y="74" width="284" height="186" rx="12" fill="rgba(255,255,255,0.03)" stroke={w.c} strokeWidth="1.6" strokeOpacity="0.8" />
            <rect x={x} y="74" width="284" height="30" rx="12" fill={w.c} fillOpacity="0.16" />
            <text x={x + 142} y="95" textAnchor="middle" fill={w.c} fontSize="11" fontWeight="800" fontFamily={FONT}>{w.t}</text>

            <rect x={x + 14} y="116" width="256" height="76" rx="7" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.1)" />
            {w.lines.map((ln, j) => (
              <text key={ln} x={x + 24} y={138 + j * 20} fill="#c9d8ff" fontSize="9" fontFamily="'Consolas', monospace">{ln}</text>
            ))}
            <text x={x + 142} y="216" textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>{w.tag}</text>
            <text x={x + 142} y="240" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{w.note}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="20" y="278" width="430" height="62" rx="10" fill="rgba(47,111,255,0.1)" stroke="rgba(47,111,255,0.55)" />
        <text x="40" y="300" fill="#6fb2ff" fontSize="9.5" fontWeight="700" fontFamily={FONT}>defer</text>
        <text x="40" y="318" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>HTML parse hone ke baad chalega — order safe</text>
        <text x="40" y="332" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>&lt;script src="app.js" defer&gt;&lt;/script&gt;</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="470" y="278" width="430" height="62" rx="10" fill="rgba(255,136,0,0.1)" stroke="rgba(255,136,0,0.55)" />
        <text x="490" y="300" fill="#ffb86c" fontSize="9.5" fontWeight="700" fontFamily={FONT}>async</text>
        <text x="490" y="318" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>jaise download ho turant chalega — order fixed nahi</text>
        <text x="490" y="332" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>&lt;script src="app.js" async&gt;&lt;/script&gt;</text>
      </g>

      <text x="460" y="368" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Bade project mein external file hi sahi — HTML clean, JS ek jagah
      </text>
      <text x="460" y="392" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        inline onclick aaj avoid karte hain — HTML aur JS alag rakhna better hai
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 17 — var / let / const and data types
// ============================================================
export function JsTypesDiagram() {
  const vars = [
    { t: 'var', s: 'function scope', r: 'redeclare ✓ · reassign ✓', n: 'purana tarika, hoisting se confusion', c: '#ff8800' },
    { t: 'let', s: 'block scope', r: 'redeclare ✗ · reassign ✓', n: 'badalne wali value ke liye — default choice', c: '#c4ff00' },
    { t: 'const', s: 'block scope', r: 'redeclare ✗ · reassign ✗', n: 'ek baar value, phir fix (object ke andar change allowed)', c: '#00d4ff' },
  ];
  const types = [
    ['string', '"Riya"', 'string'],
    ['number', '78, 3.14', 'number'],
    ['boolean', 'true / false', 'boolean'],
    ['undefined', 'let x;', 'undefined'],
    ['null', 'let y = null', 'object (bug)'],
    ['object', '{name: "Riya"}', 'object'],
    ['array', '[1, 2, 3]', 'object'],
    ['function', 'function f(){}', 'function'],
  ];
  return (
    <svg viewBox="0 0 920 424" className="diagram-svg" role="img" aria-label="var, let and const compared by scope and reassignment, next to the eight common JavaScript data types with their typeof results">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Variables aur data types
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        JavaScript loosely typed hai — variable ka type value se aata hai, typeof se pata chalta hai
      </text>

      <text x="20" y="76" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>DECLARE KAISE KAREIN</text>
      {vars.map((v, i) => (
        <g key={v.t} className="diagram-pop" style={{ animationDelay: `${90 + i * 110}ms` }}>
          <rect x="20" y={88 + i * 82} width="380" height="70" rx="10" fill="rgba(255,255,255,0.03)" stroke={v.c} strokeWidth="1.5" strokeOpacity="0.75" />
          <text x="36" y={112 + i * 82} fill={v.c} fontSize="12" fontWeight="800" fontFamily="'Consolas', monospace">{v.t}</text>
          <text x="92" y={112 + i * 82} fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>{v.s}</text>
          <text x="36" y={132 + i * 82} fill="#9ab0e0" fontSize="9" fontFamily="'Consolas', monospace">{v.r}</text>
          <text x="36" y={150 + i * 82} fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>{v.n}</text>
        </g>
      ))}

      <text x="430" y="76" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>DATA TYPES (typeof ka result)</text>
      {types.map(([name, ex, tx], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 430 + col * 245;
        const y = 88 + row * 62;
        return (
          <g key={name} className="diagram-pop" style={{ animationDelay: `${200 + i * 45}ms` }}>
            <rect x={x} y={y} width="225" height="52" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
            <text x={x + 12} y={y + 20} fill="#00d4ff" fontSize="9.5" fontWeight="700" fontFamily="'Consolas', monospace">{name}</text>
            <text x={x + 12} y={y + 36} fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{ex}</text>
            <text x={x + 213} y={y + 20} textAnchor="end" fill={tx.includes('bug') ? '#ff8800' : '#c4ff00'} fontSize="8.5" fontFamily={FONT}>{tx}</text>
          </g>
        );
      })}

      <text x="665" y="356" textAnchor="middle" fill="#ff8800" fontSize="9" fontFamily={FONT}>
        null ka typeof &quot;object&quot; aata hai — JS ka purana bug, exam favourite
      </text>
      <text x="460" y="388" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        let = badlegi · const = nahi badlegi · var = purana (avoid)
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 18 — if / else if / else vs switch
// ============================================================
export function JsControlDiagram() {
  const conds = [
    { q: 'marks >= 90 ?', yes: 'A grade', c: '#00d4ff' },
    { q: 'marks >= 75 ?', yes: 'B grade', c: '#c4ff00' },
    { q: 'marks >= 60 ?', yes: 'C grade', c: '#ff8800' },
  ];
  return (
    <svg viewBox="0 0 920 440" className="diagram-svg" role="img" aria-label="if else if else chain of conditions on the left and a switch case with break statements on the right">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Control structures — if…else aur switch
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        dono ek hi kaam karte hain: condition ke hisaab se alag code chalana
      </text>

      <text x="200" y="76" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>IF … ELSE IF … ELSE</text>
      {conds.map((c, i) => {
        const cy = 118 + i * 84;
        return (
          <g key={c.q} className="diagram-pop" style={{ animationDelay: `${90 + i * 110}ms` }}>
            <polygon points={`180,${cy - 26} 320,${cy} 180,${cy + 26} 40,${cy}`} fill="rgba(47,111,255,0.12)" stroke="#2f6fff" strokeWidth="1.4" strokeOpacity="0.8" />
            <text x="180" y={cy + 4} textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily="'Consolas', monospace">{c.q}</text>
            <path d={`M 320 ${cy} H 356`} fill="none" stroke="#00ff88" strokeWidth="1.4" strokeOpacity="0.85" />
            <text x="336" y={cy - 6} textAnchor="middle" fill="#00ff88" fontSize="8.5" fontFamily={FONT}>T</text>
            <rect x="356" y={cy - 17} width="96" height="34" rx="7" fill="rgba(0,255,136,0.1)" stroke={c.c} strokeWidth="1.3" />
            <text x="404" y={cy + 4} textAnchor="middle" fill={c.c} fontSize="9.5" fontWeight="700" fontFamily={FONT}>{c.yes}</text>
            {i < conds.length - 1 && (
              <>
                <path d={`M 180 ${cy + 26} V ${cy + 58}`} fill="none" stroke="#9ab0e0" strokeWidth="1.3" strokeOpacity="0.6" />
                <text x="188" y={cy + 46} fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>F</text>
              </>
            )}
          </g>
        );
      })}
      <path d="M 180 344 V 372" fill="none" stroke="#9ab0e0" strokeWidth="1.3" strokeOpacity="0.6" />
      <text x="188" y="362" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>F</text>
      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="120" y="372" width="120" height="34" rx="7" fill="rgba(255,68,102,0.12)" stroke="#ff4466" strokeWidth="1.3" />
        <text x="180" y="393" textAnchor="middle" fill="#ff7a90" fontSize="9.5" fontWeight="700" fontFamily={FONT}>Fail (else)</text>
      </g>

      <text x="670" y="76" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>SWITCH … CASE</text>
      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="540" y="86" width="260" height="34" rx="8" fill="rgba(255,255,255,0.04)" stroke="#00d4ff" strokeWidth="1.4" />
        <text x="670" y="108" textAnchor="middle" fill="#00d4ff" fontSize="9.5" fontFamily="'Consolas', monospace">switch (day)</text>
      </g>
      <path d="M 527 120 V 250" fill="none" stroke="#9ab0e0" strokeWidth="1.2" strokeOpacity="0.4" />
      {['case "Mon": … break', 'case "Tue": … break', 'default: …'].map((row, i) => (
        <g key={row} className="diagram-pop" style={{ animationDelay: `${300 + i * 90}ms` }}>
          <path d={`M 527 ${143 + i * 48} H 540`} fill="none" stroke="#9ab0e0" strokeWidth="1.2" strokeOpacity="0.4" />
          <rect x="540" y={126 + i * 48} width="260" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" />
          <text x="552" y={147 + i * 48} fill={i === 2 ? '#ff8800' : '#dbe6ff'} fontSize="9" fontFamily="'Consolas', monospace">{row}</text>
          <text x="812" y={147 + i * 48} fill={i === 2 ? '#5a6a9e' : '#00ff88'} fontSize="8.5" fontFamily={FONT}>{i === 2 ? 'optional' : 'break'}</text>
        </g>
      ))}
      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="540" y="284" width="340" height="86" rx="10" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.5)" />
        <text x="556" y="306" fill="#ffb86c" fontSize="9.5" fontWeight="700" fontFamily={FONT}>break bhool gaye?</text>
        <text x="556" y="324" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>fall-through — agla case bhi chal jaayega</text>
        <text x="556" y="342" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>default tab chalta hai jab koi case match na ho</text>
        <text x="556" y="360" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>switch sirf == (strict) comparison karta hai</text>
      </g>

      <text x="460" y="426" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Range check (marks &gt;= 90) → if…else · fixed values (day, colour) → switch
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 19 — for / while / do-while
// ============================================================
export function JsLoopsDiagram() {
  const loops = [
    { t: 'for', c: '#00d4ff', rows: ['init: let i = 1', 'test: i <= 3', 'body: print(i)', 'update: i++'], note: 'count pata ho to best', min: '0 baar' },
    { t: 'while', c: '#c4ff00', rows: ['test: i <= 3', 'body: print(i)', 'update: i++', 'init pehle hi'], note: 'condition pehle check', min: '0 baar' },
    { t: 'do…while', c: '#ff8800', rows: ['body: print(i)', 'update: i++', 'test: i <= 3', 'phir wapas'], note: 'body pehle chalta hai', min: 'kam se kam 1 baar' },
  ];
  return (
    <svg viewBox="0 0 920 412" className="diagram-svg" role="img" aria-label="for loop and while loop test the condition before the body, do-while runs the body at least once before testing">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Loop controls — for · while · do…while
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        teeno repeat karte hain, farak sirf isme hai ki condition kab check hoti hai
      </text>

      {loops.map((l, i) => {
        const x = 20 + i * 298;
        return (
          <g key={l.t} className="diagram-pop" style={{ animationDelay: `${90 + i * 120}ms` }}>
            <rect x={x} y="74" width="284" height="216" rx="12" fill="rgba(255,255,255,0.03)" stroke={l.c} strokeWidth="1.6" strokeOpacity="0.8" />
            <rect x={x} y="74" width="284" height="30" rx="12" fill={l.c} fillOpacity="0.16" />
            <text x={x + 142} y="95" textAnchor="middle" fill={l.c} fontSize="11.5" fontWeight="800" fontFamily="'Consolas', monospace">{l.t}</text>
            {l.rows.map((r, j) => (
              <g key={r}>
                <rect x={x + 16} y={116 + j * 34} width="252" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
                <text x={x + 28} y={133 + j * 34} fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{r}</text>
                <text x={x + 258} y={133 + j * 34} textAnchor="end" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>{j + 1}</text>
              </g>
            ))}
            <text x={x + 142} y="266" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{l.note}</text>
            <text x={x + 142} y="282" textAnchor="middle" fill={l.c} fontSize="8.5" fontWeight="700" fontFamily={FONT}>chalega: {l.min}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="160" y="306" width="600" height="44" rx="9" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.45)" />
        <text x="460" y="324" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>same output, teeno se:</text>
        <text x="460" y="343" textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily="'Consolas', monospace">1 &nbsp;→&nbsp; 2 &nbsp;→&nbsp; 3 &nbsp;(for (let i = 1; i &lt;= 3; i++))</text>
      </g>

      <text x="460" y="378" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        break = loop turant khatam · continue = sirf ye iteration chhodo
      </text>
      <text x="460" y="400" textAnchor="middle" fill="#5a6a9e" fontSize="10" fontFamily={FONT}>
        while mein update bhool gaye to infinite loop — exam ka common trap
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 20 — Functions, dialog boxes and page redirect
// ============================================================
export function JsFunctionDialogDiagram() {
  const dialogs = [
    { t: 'alert("Hi")', r: 'sirf OK · kuch return nahi', c: '#00d4ff' },
    { t: 'confirm("Sure?")', r: 'OK → true · Cancel → false', c: '#c4ff00' },
    { t: 'prompt("Name?")', r: 'text → string · Cancel → null', c: '#ff8800' },
  ];
  return (
    <svg viewBox="0 0 920 424" className="diagram-svg" role="img" aria-label="Function definition, call and return value, next to alert, confirm and prompt dialog boxes and a page redirect">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Functions · dialog boxes · page redirect
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        function = reusable block · dialog = user se baat · redirect = doosra page kholna
      </text>

      <text x="230" y="76" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>FUNCTION KA SAFAR</text>
      {[
        { t: 'DEFINITION', s: 'function add(a, b) {', d: '  return a + b;  }', c: '#00d4ff' },
        { t: 'CALL', s: 'let sum = add(2, 3);', d: 'arguments pass hue', c: '#c4ff00' },
        { t: 'RETURN', s: 'return 5', d: 'caller ko value mili', c: '#ff8800' },
      ].map((f, i) => (
        <g key={f.t} className="diagram-pop" style={{ animationDelay: `${90 + i * 120}ms` }}>
          <rect x="20" y={90 + i * 88} width="420" height="70" rx="10" fill="rgba(255,255,255,0.03)" stroke={f.c} strokeWidth="1.5" strokeOpacity="0.75" />
          <text x="36" y={112 + i * 88} fill={f.c} fontSize="9.5" fontWeight="800" fontFamily={FONT}>{f.t}</text>
          <text x="36" y={132 + i * 88} fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{f.s}</text>
          <text x="36" y={150 + i * 88} fill="#9ab0e0" fontSize="9" fontFamily="'Consolas', monospace">{f.d}</text>
        </g>
      ))}
      <text x="230" y="174" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>↓</text>
      <text x="230" y="262" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>↓</text>

      <text x="690" y="76" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>DIALOG BOXES (window ke methods)</text>
      {dialogs.map((d, i) => (
        <g key={d.t} className="diagram-pop" style={{ animationDelay: `${240 + i * 100}ms` }}>
          <rect x="470" y={90 + i * 62} width="430" height="50" rx="9" fill="rgba(255,255,255,0.03)" stroke={d.c} strokeWidth="1.3" strokeOpacity="0.7" />
          <text x="486" y={112 + i * 62} fill={d.c} fontSize="9.5" fontWeight="700" fontFamily="'Consolas', monospace">{d.t}</text>
          <text x="486" y={130 + i * 62} fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{d.r}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="470" y="286" width="430" height="86" rx="10" fill="rgba(255,68,102,0.09)" stroke="rgba(255,68,102,0.5)" />
        <text x="486" y="308" fill="#ff7a90" fontSize="9.5" fontWeight="800" fontFamily={FONT}>PAGE REDIRECT</text>
        <text x="486" y="328" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">window.location.href = &quot;dashboard.html&quot;;</text>
        <text x="486" y="346" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>ya location.replace() — history mein purana page nahi rehta</text>
        <text x="486" y="362" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>assignment naya page kholta hai, replace() back button hataata hai</text>
      </g>

      <text x="460" y="398" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        dialog se aaya answer variable mein rakhein: let ok = confirm(&quot;Delete?&quot;);
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 21 — Cookies: browser ↔ server round trip
// ============================================================
export function CookieFlowDiagram() {
  const attrs = [
    'name=value (ek cookie)',
    'expires / max-age',
    'path=/admin',
    'domain=.college.edu',
    'Secure (sirf HTTPS)',
    'HttpOnly (JS se chhupi)',
    'SameSite=Strict',
  ];
  return (
    <svg viewBox="0 0 920 412" className="diagram-svg" role="img" aria-label="A cookie is set by the server with Set-Cookie, stored by the browser and sent back on every request, with attributes like expires, path, domain, secure and HttpOnly">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Cookies — browser mein chhota data ka safar
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        server set karta hai · browser store karta hai · har request ke saath wapas jaata hai
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="88" width="250" height="118" rx="12" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.6" />
        <text x="145" y="112" textAnchor="middle" fill="#00d4ff" fontSize="11.5" fontWeight="800" fontFamily={FONT}>BROWSER</text>
        <text x="145" y="136" textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>cookie store (per domain)</text>
        <text x="145" y="160" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily="'Consolas', monospace">document.cookie</text>
        <text x="145" y="180" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>JS se read/write</text>
        <text x="145" y="196" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>~4 KB per cookie</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="650" y="88" width="250" height="118" rx="12" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="1.6" />
        <text x="775" y="112" textAnchor="middle" fill="#c4ff00" fontSize="11.5" fontWeight="800" fontFamily={FONT}>SERVER</text>
        <text x="775" y="136" textAnchor="middle" fill="#dbe6ff" fontSize="9.5" fontFamily={FONT}>session cookie bhejta hai</text>
        <text x="775" y="160" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily="'Consolas', monospace">Set-Cookie: id=abc;</text>
        <text x="775" y="180" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily="'Consolas', monospace">  max-age=3600; path=/</text>
        <text x="775" y="196" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>login yahan verify hota hai</text>
      </g>

      <path d="M 270 118 H 648" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.85" />
      <path d="M 648 118 L 638 113 M 648 118 L 638 123" fill="none" stroke="#00d4ff" strokeWidth="1.5" />
      <text x="460" y="112" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="'Consolas', monospace">GET /dashboard  Cookie: id=abc</text>

      <path d="M 650 176 H 272" fill="none" stroke="#c4ff00" strokeWidth="1.5" strokeOpacity="0.85" />
      <path d="M 272 176 L 282 171 M 272 176 L 282 181" fill="none" stroke="#c4ff00" strokeWidth="1.5" />
      <text x="460" y="170" textAnchor="middle" fill="#c4ff00" fontSize="9" fontFamily="'Consolas', monospace">200 OK  Set-Cookie: id=abc</text>

      <text x="20" y="236" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>COOKIE KE ATTRIBUTES</text>
      {attrs.map((a, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 20 + col * 226;
        const y = 246 + row * 44;
        return (
          <g key={a} className="diagram-pop" style={{ animationDelay: `${300 + i * 45}ms` }}>
            <rect x={x} y={y} width="208" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
            <text x={x + 12} y={y + 22} fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{a}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x="20" y="340" width="880" height="42" rx="9" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.5)" />
        <text x="36" y="358" fill="#ffb86c" fontSize="9.5" fontWeight="700" fontFamily={FONT}>Dhyan:</text>
        <text x="36" y="374" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>HttpOnly cookie JS se nahi padhi ja sakti (XSS se bachne ke liye) · Secure cookie sirf HTTPS par jaati hai · cookies har request ke saath jaati hain isliye bhaari data ke liye localStorage better</text>
      </g>

      <text x="460" y="402" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Exam line: cookie = server ka chhota note jo browser har request ke saath wapas laata hai
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 22 — Event flow: capture → target → bubble
// ============================================================
export function EventFlowDiagram() {
  const nodes = [
    { t: 'window', c: '#5a6a9e' },
    { t: 'document', c: '#2f6fff' },
    { t: 'body', c: '#00d4ff' },
    { t: 'div#box  ← target', c: '#c4ff00' },
  ];
  return (
    <svg viewBox="0 0 920 420" className="diagram-svg" role="img" aria-label="Event propagation goes down from window to the target during capture and back up during bubbling, with addEventListener on the target handling it">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Event ka safar — capturing ↓ aur bubbling ↑
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        click hua to event root se target tak jaata hai, phir wapas upar
      </text>

      <text x="120" y="76" textAnchor="middle" fill="#2f6fff" fontSize="9" fontWeight="700" fontFamily={FONT}>CAPTURING (down)</text>
      <text x="470" y="76" textAnchor="middle" fill="#00ff88" fontSize="9" fontWeight="700" fontFamily={FONT}>BUBBLING (up)</text>

      {nodes.map((n, i) => {
        const y = 88 + i * 52;
        return (
          <g key={n.t} className="diagram-pop" style={{ animationDelay: `${80 + i * 90}ms` }}>
            <rect x="160" y={y} width="270" height="38" rx="8" fill="rgba(255,255,255,0.03)" stroke={n.c} strokeWidth="1.4" strokeOpacity="0.8" />
            <text x="295" y={y + 24} textAnchor="middle" fill={n.c} fontSize="9.5" fontFamily="'Consolas', monospace">{n.t}</text>
            {i < nodes.length - 1 && (
              <path d={`M 210 ${y + 38} V ${y + 52}`} fill="none" stroke="#2f6fff" strokeWidth="1.4" strokeOpacity="0.75" />
            )}
            {i > 0 && (
              <path d={`M 380 ${y} V ${y - 14}`} fill="none" stroke="#00ff88" strokeWidth="1.4" strokeOpacity="0.75" />
            )}
          </g>
        );
      })}

      <text x="200" y="308" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>capture listeners (true)</text>
      <text x="390" y="308" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>bubble listeners (default)</text>

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x="500" y="88" width="400" height="150" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.13)" />
        <text x="516" y="110" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>HANDLER LAGANA</text>
        <text x="516" y="130" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">box.addEventListener("click", fn);</text>
        <text x="516" y="150" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">function fn(e) {'{'}</text>
        <text x="516" y="170" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">  e.target      // asli element</text>
        <text x="516" y="190" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">  e.preventDefault()</text>
        <text x="516" y="210" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">  e.stopPropagation()</text>
        <text x="516" y="228" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{'}'}</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="500" y="250" width="400" height="94" rx="10" fill="rgba(47,111,255,0.09)" stroke="rgba(47,111,255,0.5)" />
        <text x="516" y="272" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>EVENT OBJECT KE PROPERTIES</text>
        <text x="516" y="292" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>type (click) · target · currentTarget</text>
        <text x="516" y="310" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>clientX / clientY · key · preventDefault()</text>
        <text x="516" y="328" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>mouse, keyboard, form, window, touch events</text>
      </g>

      <text x="460" y="374" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        bubbling ka fayda: parent par ek listener = saare children handle (event delegation)
      </text>
      <text x="460" y="400" textAnchor="middle" fill="#5a6a9e" fontSize="9.5" fontFamily={FONT}>
        stopPropagation() bubble rokta hai · preventDefault() default action rokta hai — dono alag hain
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 23 — Objects: properties, methods, this
// ============================================================
export function JsObjectsDiagram() {
  return (
    <svg viewBox="0 0 920 424" className="diagram-svg" role="img" aria-label="A JavaScript object holds properties and methods, accessed with dot or bracket notation, created from an object literal or a constructor function">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Object = properties + methods ka dabba
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        property = data (name: "Riya") · method = function jo object ke andar baithi ho
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="74" width="300" height="196" rx="12" fill="rgba(255,255,255,0.03)" stroke="#00d4ff" strokeWidth="1.6" strokeOpacity="0.8" />
        <rect x="20" y="74" width="300" height="30" rx="12" fill="rgba(0,212,255,0.16)" />
        <text x="170" y="95" textAnchor="middle" fill="#00d4ff" fontSize="11" fontWeight="800" fontFamily={FONT}>OBJECT LITERAL</text>

        <text x="36" y="130" fill="#dbe6ff" fontSize="9.5" fontFamily="'Consolas', monospace">const student = {'{'}</text>
        <text x="36" y="152" fill="#c4ff00" fontSize="9.5" fontFamily="'Consolas', monospace">  name: "Riya",      // property</text>
        <text x="36" y="174" fill="#c4ff00" fontSize="9.5" fontFamily="'Consolas', monospace">  marks: 78,         // property</text>
        <text x="36" y="196" fill="#ff8800" fontSize="9.5" fontFamily="'Consolas', monospace">  greet: function () {'{'}    // method</text>
        <text x="36" y="218" fill="#ff8800" fontSize="9.5" fontFamily="'Consolas', monospace">    return "Hi " + this.name;</text>
        <text x="36" y="240" fill="#ff8800" fontSize="9.5" fontFamily="'Consolas', monospace">  {'}'}</text>
        <text x="36" y="260" fill="#dbe6ff" fontSize="9.5" fontFamily="'Consolas', monospace">{'}'};</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="340" y="74" width="270" height="196" rx="12" fill="rgba(255,255,255,0.03)" stroke="#c4ff00" strokeWidth="1.5" strokeOpacity="0.75" />
        <rect x="340" y="74" width="270" height="30" rx="12" fill="rgba(196,255,0,0.16)" />
        <text x="475" y="95" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="800" fontFamily={FONT}>ACCESS KARNA</text>
        <text x="356" y="130" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">student.name      // "Riya"</text>
        <text x="356" y="152" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">student["marks"]   // 78</text>
        <text x="356" y="174" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">student.greet()   // method call</text>
        <text x="356" y="196" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">student.city = "Pune"  // add</text>
        <text x="356" y="218" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">delete student.city    // remove</text>
        <text x="356" y="240" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">Object.keys(student)   // ["name",…]</text>
        <text x="356" y="256" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>bracket tab kaam aata hai jab key variable ho</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="630" y="74" width="270" height="196" rx="12" fill="rgba(255,255,255,0.03)" stroke="#ff8800" strokeWidth="1.5" strokeOpacity="0.75" />
        <rect x="630" y="74" width="270" height="30" rx="12" fill="rgba(255,136,0,0.16)" />
        <text x="765" y="95" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="800" fontFamily={FONT}>CONSTRUCTOR + this</text>
        <text x="646" y="130" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">function Student(n, m) {'{'}</text>
        <text x="646" y="152" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">  this.name = n;</text>
        <text x="646" y="174" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">  this.marks = m;</text>
        <text x="646" y="196" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{'}'}</text>
        <text x="646" y="222" fill="#ffb86c" fontSize="9" fontFamily="'Consolas', monospace">let s1 = new Student("Riya", 78);</text>
        <text x="646" y="248" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>new = naya object banata hai, this usi</text>
        <text x="646" y="256" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>object ko point karta hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x="20" y="288" width="880" height="86" rx="10" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="36" y="310" fill="#6fb2ff" fontSize="9.5" fontWeight="800" fontFamily={FONT}>OBJECT KE BUILT-IN HELPERS</text>
        <text x="36" y="330" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">Object.keys(o) · Object.values(o) · Object.entries(o) · Object.assign(target, src) · Object.freeze(o)</text>
        <text x="36" y="348" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">JSON.stringify(o) → string · JSON.parse(str) → object · hasOwnProperty("name")</text>
        <text x="36" y="364" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>array aur function bhi object hain — isliye typeof [] "object" deta hai</text>
      </g>

      <text x="460" y="402" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Exam line: object = key : value ka collection; method = object ke andar rakhi function
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 24 — Number properties/methods and Math
// ============================================================
export function NumberMathDiagram() {
  const nums = [
    ['Number.MAX_VALUE', 'sabse bada number'],
    ['Number.isInteger(78)', 'true'],
    ['Number("42")', '42'],
    ['parseFloat("3.5kg")', '3.5'],
    ['(78.567).toFixed(2)', '"78.57"'],
    ['(255).toString(16)', '"ff"'],
  ];
  const maths = [
    ['Math.round(4.6)', '5'],
    ['Math.ceil(4.1)', '5'],
    ['Math.floor(4.9)', '4'],
    ['Math.abs(-7)', '7'],
    ['Math.max(3, 9, 4)', '9'],
    ['Math.min(3, 9, 4)', '3'],
    ['Math.pow(2, 5)', '32'],
    ['Math.sqrt(81)', '9'],
    ['Math.random()', '0.xxx'],
  ];
  return (
    <svg viewBox="0 0 920 424" className="diagram-svg" role="img" aria-label="Number object properties and methods on the left, Math object static methods with their results on the right">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Number aur Math — numbers par kaam
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Number = ek value ka object wrapper · Math = ready-made calculator (object banane ki zaroorat nahi)
      </text>

      <text x="20" y="76" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>NUMBER — PROPERTIES aur METHODS</text>
      {nums.map(([k, v], i) => (
        <g key={k} className="diagram-pop" style={{ animationDelay: `${90 + i * 60}ms` }}>
          <rect x="20" y={88 + i * 44} width="420" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.35)" />
          <text x="34" y={110 + i * 44} fill="#dbe6ff" fontSize="9.5" fontFamily="'Consolas', monospace">{k}</text>
          <text x="426" y={110 + i * 44} textAnchor="end" fill="#00d4ff" fontSize="9" fontFamily={FONT}>{v}</text>
        </g>
      ))}
      <text x="20" y="364" fill="#ff8800" fontSize="8.5" fontFamily={FONT}>
        NaN = &quot;Not a Number&quot; · 0.1 + 0.2 = 0.30000000000000004 (floating point)
      </text>

      <text x="480" y="76" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>MATH — 9 SABSE ZYADA POOCHHE JAANE WALE</text>
      {maths.map(([k, v], i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 480 + col * 146;
        const y = 88 + row * 62;
        return (
          <g key={k} className="diagram-pop" style={{ animationDelay: `${150 + i * 45}ms` }}>
            <rect x={x} y={y} width="132" height="52" rx="8" fill="rgba(196,255,0,0.06)" stroke="rgba(196,255,0,0.35)" />
            <text x={x + 66} y={y + 20} textAnchor="middle" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">{k}</text>
            <text x={x + 66} y={y + 40} textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily="'Consolas', monospace">→ {v}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="480" y="286" width="420" height="88" rx="10" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.45)" />
        <text x="496" y="308" fill="#ffb86c" fontSize="9" fontWeight="700" fontFamily={FONT}>RANDOM NUMBER KA FORMULA</text>
        <text x="496" y="328" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">Math.floor(Math.random() * 6) + 1   // 1–6 dice</text>
        <text x="496" y="348" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">Math.floor(Math.random() * 100)     // 0–99</text>
        <text x="496" y="366" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>Math.random() 0 se 1 se pehle tak hi deta hai — 1 kabhi nahi</text>
      </g>

      <text x="460" y="402" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Math ek static object hai — Math.PI likhte hain, naya Math() nahi banate
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 25 — String indexing and methods
// ============================================================
export function StringMethodsDiagram() {
  const chars = 'MCA Notes'.split('');
  const rows = [
    ['s.length', '9 (property, brackets nahi)'],
    ['s.charAt(0) / s[0]', '"M"'],
    ['s.indexOf("Notes")', '4'],
    ['s.slice(0, 3)', '"MCA"'],
    ['s.substring(4)', '"Notes"'],
    ['s.replace("Notes", "JS")', '"MCA JS"'],
    ['s.toUpperCase()', '"MCA NOTES"'],
    ['s.split(" ")', '["MCA", "Notes"]'],
    ['s.trim()', 'aage-piche ke space hataata hai'],
    ['s.includes("MCA")', 'true'],
  ];
  return (
    <svg viewBox="0 0 920 412" className="diagram-svg" role="img" aria-label="A string is indexed character by character and has methods like length, charAt, slice, replace, split and trim">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        String — characters ki chain, index 0 se shuru
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        string immutable hai — method naya string deta hai, purana nahi badalta
      </text>

      {chars.map((ch, i) => (
        <g key={`${ch}-${i}`} className="diagram-pop" style={{ animationDelay: `${60 + i * 40}ms` }}>
          <rect x={30 + i * 46} y="70" width="42" height="38" rx="6" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.5)" />
          <text x={51 + i * 46} y="95" textAnchor="middle" fill={ch === ' ' ? '#5a6a9e' : '#fff'} fontSize="13" fontFamily="'Consolas', monospace">{ch === ' ' ? '_' : ch}</text>
          <text x={51 + i * 46} y="122" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>{i}</text>
        </g>
      ))}
      <text x="450" y="122" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>const s = &quot;MCA Notes&quot; → length 9 (_ = space)</text>

      {rows.map(([k, v], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = col === 0 ? 20 : 470;
        const y = 142 + row * 44;
        return (
          <g key={k} className="diagram-pop" style={{ animationDelay: `${220 + i * 45}ms` }}>
            <rect x={x} y={y} width="430" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
            <text x={x + 12} y={y + 22} fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">{k}</text>
            <text x={x + 418} y={y + 22} textAnchor="end" fill="#c4ff00" fontSize="8.5" fontFamily="'Consolas', monospace">{v}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x="20" y="358" width="880" height="30" rx="8" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="378" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>
          slice(1, 3) = index 1 se 2 tak · substring() negative ko 0 maan leta hai · substr(start, length) purana hai — aaj slice() better
        </text>
      </g>

      <text x="460" y="402" textAnchor="middle" fill="#c4ff00" fontSize="9.5" fontWeight="700" fontFamily={FONT}>
        Template literal: `Hi ${'{'}name{'}'}` — string jodne ka aasan tareeka
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 26 — Array methods: mutate, read, transform
// ============================================================
export function ArrayMethodsDiagram() {
  const cells = [10, 20, 30, 40];
  const groups = [
    { t: 'BADALNE WALE (mutate)', c: '#ff8800', rows: ['push(50)   → end mein jodta hai', 'pop()      → end se nikaalta hai', 'unshift(5) → shuru mein jodta hai', 'shift()    → shuru se nikaalta hai', 'splice(1,1)→ beech se hataata hai', 'sort() / reverse()'] },
    { t: 'PADHNE WALE (read)', c: '#00d4ff', rows: ['length      → 4', 'indexOf(30) → 2', 'includes(20)→ true', 'slice(1, 3) → [20, 30]', 'concat([50])→ naya array', 'join("-")   → "10-20-30-40"'] },
    { t: 'BADAL KAR NAYA (transform)', c: '#c4ff00', rows: ['map(x => x * 2)   → [20,40,60,80]', 'filter(x => x > 20) → [30,40]', 'reduce((s,x) => s+x, 0) → 100', 'forEach(x => console.log(x))', 'find(x => x > 25) → 30', 'every / some'] },
  ];
  return (
    <svg viewBox="0 0 920 428" className="diagram-svg" role="img" aria-label="An array with index positions and three groups of methods: those that mutate the array, those that read it, and those that return a new array">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Array — ek hi naam se kai values
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        const a = [10, 20, 30, 40];  index 0 se shuru, length 4
      </text>

      {cells.map((v, i) => (
        <g key={v} className="diagram-pop" style={{ animationDelay: `${60 + i * 60}ms` }}>
          <rect x={50 + i * 100} y="66" width="90" height="38" rx="7" fill="rgba(196,255,0,0.1)" stroke="rgba(196,255,0,0.55)" />
          <text x={95 + i * 100} y="91" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="'Consolas', monospace">{v}</text>
          <text x={95 + i * 100} y="118" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>index {i}</text>
        </g>
      ))}
      <text x="560" y="91" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>a.length = 4</text>

      {groups.map((g, i) => {
        const x = 20 + i * 298;
        return (
          <g key={g.t} className="diagram-pop" style={{ animationDelay: `${300 + i * 120}ms` }}>
            <rect x={x} y="136" width="284" height="214" rx="12" fill="rgba(255,255,255,0.03)" stroke={g.c} strokeWidth="1.5" strokeOpacity="0.7" />
            <rect x={x} y="136" width="284" height="30" rx="12" fill={g.c} fillOpacity="0.15" />
            <text x={x + 142} y="157" textAnchor="middle" fill={g.c} fontSize="10" fontWeight="800" fontFamily={FONT}>{g.t}</text>
            {g.rows.map((r, j) => (
              <text key={r} x={x + 14} y={186 + j * 28} fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">{r}</text>
            ))}
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '660ms' }}>
        <rect x="20" y="362" width="880" height="34" rx="8" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="384" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>
          map / filter / reduce original array ko nahi badalte — naya array (ya value) return karte hain. push / pop / splice original ko badal dete hain.
        </text>
      </g>

      <text x="460" y="414" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        typeof [] === &quot;object&quot; — array pehchanne ke liye Array.isArray(a) use karein
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 27 — Date object and the Temporal API
// ============================================================
export function DateTemporalDiagram() {
  const parts = [
    ['getFullYear()', '2026'],
    ['getMonth()', '0–11 (Jan = 0!)'],
    ['getDate()', '1–31 (din)'],
    ['getDay()', '0–6 (Sun = 0)'],
    ['getHours()', '0–23'],
    ['getMinutes()', '0–59'],
  ];
  return (
    <svg viewBox="0 0 920 412" className="diagram-svg" role="img" aria-label="The Date object gives parts of a date through get methods while the newer Temporal API separates date, time and time zone">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Date object aur naya Temporal API
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        Date purana hai (1995 ka design), Temporal uski jagah lene ke liye bana hai
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="70" width="380" height="52" rx="10" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.5" />
        <text x="36" y="92" fill="#00d4ff" fontSize="10" fontWeight="700" fontFamily={FONT}>DATE BANANA</text>
        <text x="36" y="110" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">let d = new Date();          // abhi</text>
      </g>
      <text x="36" y="146" fill="#9ab0e0" fontSize="9" fontFamily="'Consolas', monospace">new Date(2026, 0, 15)   // 15 Jan 2026</text>
      <text x="36" y="166" fill="#9ab0e0" fontSize="9" fontFamily="'Consolas', monospace">new Date(&quot;2026-01-15&quot;)   // ISO string</text>

      {parts.map(([k, v], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 200;
        const y = 186 + row * 44;
        return (
          <g key={k} className="diagram-pop" style={{ animationDelay: `${160 + i * 50}ms` }}>
            <rect x={x} y={y} width="190" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.35)" />
            <text x={x + 10} y={y + 15} fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">{k}</text>
            <text x={x + 10} y={y + 28} fill="#00d4ff" fontSize="8" fontFamily={FONT}>{v}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="330" width="380" height="52" rx="10" fill="rgba(196,255,0,0.09)" stroke="rgba(196,255,0,0.5)" />
        <text x="36" y="352" fill="#c4ff00" fontSize="9.5" fontWeight="700" fontFamily={FONT}>READABLE FORMAT</text>
        <text x="36" y="370" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">d.toLocaleDateString(&quot;en-IN&quot;)  // 15/1/2026</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x="430" y="70" width="470" height="312" rx="12" fill="rgba(255,255,255,0.03)" stroke="#ff8800" strokeWidth="1.5" strokeOpacity="0.7" />
        <rect x="430" y="70" width="470" height="30" rx="12" fill="rgba(255,136,0,0.16)" />
        <text x="665" y="91" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="800" fontFamily={FONT}>TEMPORAL API — naya tareeka</text>

        <text x="450" y="124" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">Temporal.Now.instant()        // abhi ka time</text>
        <text x="450" y="148" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">Temporal.PlainDate.from(&quot;2026-01-15&quot;)</text>
        <text x="450" y="172" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">Temporal.PlainTime.from(&quot;10:30&quot;)</text>
        <text x="450" y="196" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">Temporal.ZonedDateTime.from(...)</text>

        <text x="450" y="228" fill="#ffb86c" fontSize="9" fontWeight="700" fontFamily={FONT}>DATE KI 3 PROBLEM, TEMPORAL KA JAWAB</text>
        <text x="450" y="248" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>1. month 0 se shuru hota hai (Jan = 0) → Temporal mein 1 se</text>
        <text x="450" y="266" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>2. mutable hai (setDate se original badal jaata) → Temporal immutable</text>
        <text x="450" y="284" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>3. time zone handle karna mushkil → ZonedDateTime alag type</text>

        <rect x="450" y="300" width="430" height="64" rx="8" fill="rgba(255,136,0,0.08)" stroke="rgba(255,136,0,0.35)" />
        <text x="464" y="320" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>Exam ke liye: Date hi likhna hai (Temporal abhi sab browsers</text>
        <text x="464" y="336" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>mein stable nahi hai) — par "kya naya hai" poochhe to ye points</text>
        <text x="464" y="352" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>likh dein.</text>
      </g>

      <text x="460" y="402" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Trap: new Date().getMonth() January ke liye 0 deta hai — isliye +1 karna padta hai
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 28 — Async: call stack, queues, event loop
// ============================================================
export function AsyncFlowDiagram() {
  return (
    <svg viewBox="0 0 920 440" className="diagram-svg" role="img" aria-label="Synchronous code runs on the call stack, setTimeout goes to web APIs and then the task queue, promises go to the microtask queue, and the event loop moves them back to the stack">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Async JavaScript — event loop ka khel
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        JS single-threaded hai — par browser background mein kaam karwa leta hai
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="70" width="200" height="150" rx="10" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1.5" />
        <text x="120" y="92" textAnchor="middle" fill="#00d4ff" fontSize="10" fontWeight="800" fontFamily={FONT}>CALL STACK</text>
        <text x="120" y="112" textAnchor="middle" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>ek baar mein ek kaam</text>
        <text x="34" y="138" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">console.log(&quot;1&quot;)</text>
        <text x="34" y="158" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">setTimeout(...)</text>
        <text x="34" y="178" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">console.log(&quot;4&quot;)</text>
        <text x="120" y="206" textAnchor="middle" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>turant khatam ho jaata hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="250" y="70" width="230" height="150" rx="10" fill="rgba(255,136,0,0.1)" stroke="#ff8800" strokeWidth="1.5" />
        <text x="365" y="92" textAnchor="middle" fill="#ff8800" fontSize="10" fontWeight="800" fontFamily={FONT}>WEB APIs (browser)</text>
        <text x="365" y="112" textAnchor="middle" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>timer, fetch, DOM events</text>
        <text x="264" y="138" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">setTimeout(fn, 2000)</text>
        <text x="264" y="158" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>2 second gin raha hai…</text>
        <text x="264" y="180" fill="#ffb86c" fontSize="8.5" fontFamily={FONT}>yahan JS block nahi hoti</text>
        <text x="365" y="206" textAnchor="middle" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>background mein countdown</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="250" y="240" width="230" height="72" rx="10" fill="rgba(196,255,0,0.09)" stroke="rgba(196,255,0,0.5)" />
        <text x="365" y="262" textAnchor="middle" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>MICROTASK QUEUE</text>
        <text x="365" y="280" textAnchor="middle" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>Promise .then / async-await</text>
        <text x="365" y="298" textAnchor="middle" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>pehle yahi chalta hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '330ms' }}>
        <rect x="250" y="322" width="230" height="72" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" />
        <text x="365" y="344" textAnchor="middle" fill="#dbe6ff" fontSize="9" fontWeight="700" fontFamily={FONT}>TASK QUEUE (macrotask)</text>
        <text x="365" y="362" textAnchor="middle" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>setTimeout / setInterval</text>
        <text x="365" y="380" textAnchor="middle" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>baad mein chalta hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="510" y="70" width="390" height="150" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.13)" />
        <text x="526" y="92" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>EVENT LOOP</text>
        <text x="526" y="112" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>jab stack khaali ho:</text>
        <text x="526" y="132" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>1. pehle microtask queue khaali karo</text>
        <text x="526" y="152" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>2. phir ek macrotask uthao</text>
        <text x="526" y="172" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>3. repeat — yahi event loop hai</text>
        <text x="526" y="198" fill="#ffb86c" fontSize="8.5" fontFamily={FONT}>isliye promise callback setTimeout se pehle chalta hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="510" y="240" width="390" height="154" rx="10" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="526" y="262" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>OUTPUT KA ORDER (exam favourite)</text>
        <text x="526" y="284" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">console.log(&quot;1&quot;);</text>
        <text x="526" y="302" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">setTimeout(() =&gt; console.log(&quot;2&quot;), 0);</text>
        <text x="526" y="320" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">Promise.resolve().then(() =&gt; console.log(&quot;3&quot;));</text>
        <text x="526" y="338" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">console.log(&quot;4&quot;);</text>
        <text x="526" y="362" fill="#00ff88" fontSize="10" fontWeight="800" fontFamily="'Consolas', monospace">Output: 1  4  3  2</text>
        <text x="526" y="382" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>sync pehle · microtask (promise) · phir macrotask (timeout)</text>
      </g>

      <text x="460" y="424" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        callback → promise → async/await: teeno async ka hi tareeka, sirf likhne ka andaaz badla
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 29 — Bootstrap: why, how, grid
// ============================================================
export function BootstrapDiagram() {
  return (
    <svg viewBox="0 0 920 420" className="diagram-svg" role="img" aria-label="Bootstrap gives a responsive 12 column grid, ready components and utility classes, added through a CDN link with two class names">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Bootstrap — ready-made CSS framework
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        HTML likho + Bootstrap ki class lagao → design apne aap
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="72" width="280" height="196" rx="12" fill="rgba(255,255,255,0.03)" stroke="#ff8800" strokeWidth="1.5" strokeOpacity="0.75" />
        <rect x="20" y="72" width="280" height="30" rx="12" fill="rgba(255,136,0,0.16)" />
        <text x="160" y="93" textAnchor="middle" fill="#ff8800" fontSize="10.5" fontWeight="800" fontFamily={FONT}>KYUN CHAHIYE</text>
        <text x="36" y="126" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>1. Responsive grid</text>
        <text x="36" y="144" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>mobile se desktop tak khud adjust</text>
        <text x="36" y="170" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>2. Ready components</text>
        <text x="36" y="188" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>button, navbar, modal, card, table</text>
        <text x="36" y="214" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>3. Speed + consistency</text>
        <text x="36" y="232" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>CSS likhne ka time bachta hai</text>
        <text x="36" y="252" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>browser tested, accessible markup</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x="320" y="72" width="330" height="196" rx="12" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.13)" />
        <text x="336" y="94" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>KAISE USE KAREIN (CDN)</text>
        <text x="336" y="114" fill="#9ab0e0" fontSize="7.5" fontFamily="'Consolas', monospace">&lt;link href=&quot;bootstrap.min.css&quot;</text>
        <text x="336" y="128" fill="#9ab0e0" fontSize="7.5" fontFamily="'Consolas', monospace">      rel=&quot;stylesheet&quot;&gt;</text>
        <text x="336" y="148" fill="#9ab0e0" fontSize="7.5" fontFamily="'Consolas', monospace">bootstrap.bundle.min.js (optional)</text>
        <text x="336" y="176" fill="#dbe6ff" fontSize="8.5" fontFamily={FONT}>Phir class lagao:</text>
        <text x="336" y="196" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">&lt;div class=&quot;container&quot;&gt;</text>
        <text x="336" y="212" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">  &lt;div class=&quot;row&quot;&gt;</text>
        <text x="336" y="228" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">    &lt;div class=&quot;col-md-6&quot;&gt;…</text>
        <text x="336" y="250" fill="#ffb86c" fontSize="7.5" fontFamily={FONT}>npm install bootstrap · ya download karke</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '320ms' }}>
        <rect x="670" y="72" width="230" height="196" rx="12" fill="rgba(255,255,255,0.03)" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.7" />
        <rect x="670" y="72" width="230" height="30" rx="12" fill="rgba(0,212,255,0.16)" />
        <text x="785" y="93" textAnchor="middle" fill="#00d4ff" fontSize="10.5" fontWeight="800" fontFamily={FONT}>12-COLUMN GRID</text>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="686" y={116 + i * 46} width="198" height="20" rx="4" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.3)" />
            <rect x="686" y={116 + i * 46} width={i === 0 ? 99 : i === 1 ? 49 : 148} height="20" rx="4" fill="rgba(196,255,0,0.22)" />
          </g>
        ))}
        <text x="686" y="250" fill="#9ab0e0" fontSize="7" fontFamily="'Consolas', monospace">col-6 → 50%  ·  col-4 → 33%  ·  col-9 → 75%</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '420ms' }}>
        <rect x="20" y="288" width="880" height="62" rx="10" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.4)" />
        <text x="36" y="310" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>BREAKPOINTS — ek hi class, har screen par alag behaviour</text>
        <text x="36" y="332" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">col-12 (mobile)  ·  col-sm-6 (≥576)  ·  col-md-4 (≥768)  ·  col-lg-3 (≥992)  ·  col-xl (≥1200)</text>
      </g>

      <text x="460" y="378" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Bootstrap = CSS framework · HTML structure wahi rehta hai, sirf class badalti hai
      </text>
      <text x="460" y="402" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>
        Version 5 mein jQuery ki zaroorat nahi · responsive + mobile-first by design
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 30 — PHP: server-side request flow
// ============================================================
export function PhpRequestFlowDiagram() {
  const chain = [
    { t: 'BROWSER', s: 'Chrome / Firefox', d: 'form ya link bhejta hai', c: '#00d4ff' },
    { t: 'WEB SERVER', s: 'Apache / Nginx', d: '.php file maangta hai', c: '#2f6fff' },
    { t: 'PHP ENGINE', s: 'PHP 8 interpreter', d: 'script chalata hai', c: '#c4ff00' },
    { t: 'DATABASE', s: 'MySQL / MariaDB', d: 'data deta hai', c: '#ff8800' },
  ];
  return (
    <svg viewBox="0 0 920 432" className="diagram-svg" role="img" aria-label="A browser requests a PHP page, the web server hands it to the PHP interpreter which may query a database, and only the generated HTML is sent back to the browser">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        PHP — server par chalti hai, browser tak sirf HTML pahunchti hai
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        PHP code user ko kabhi nahi dikhta · output HTML bankar jaata hai
      </text>

      {chain.map((n, i) => {
        const x = 20 + i * 224;
        return (
          <g key={n.t} className="diagram-pop" style={{ animationDelay: `${80 + i * 100}ms` }}>
            <rect x={x} y="72" width="200" height="104" rx="11" fill="rgba(255,255,255,0.03)" stroke={n.c} strokeWidth="1.6" strokeOpacity="0.8" />
            <rect x={x} y="72" width="200" height="28" rx="11" fill={n.c} fillOpacity="0.16" />
            <text x={x + 100} y="92" textAnchor="middle" fill={n.c} fontSize="10.5" fontWeight="800" fontFamily={FONT}>{n.t}</text>
            <text x={x + 100} y="122" textAnchor="middle" fill="#fff" fontSize="9.5" fontFamily={FONT}>{n.s}</text>
            <text x={x + 100} y="144" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{n.d}</text>
            <text x={x + 100} y="164" textAnchor="middle" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>STEP {i + 1}</text>
            {i < chain.length - 1 && (
              <text x={x + 212} y="130" textAnchor="middle" fill="#9ab0e0" fontSize="14" fontFamily={FONT}>→</text>
            )}
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x="20" y="196" width="430" height="96" rx="10" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.45)" />
        <text x="36" y="216" fill="#00d4ff" fontSize="9" fontWeight="700" fontFamily={FONT}>BROWSER KO YE MILTA HAI — sirf HTML</text>
        <text x="36" y="240" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">&lt;!DOCTYPE html&gt;</text>
        <text x="36" y="258" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">&lt;h1&gt;Hello Riya&lt;/h1&gt;</text>
        <text x="36" y="276" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>View Source mein PHP ka ek line bhi nahi</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x="470" y="196" width="430" height="96" rx="10" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="486" y="216" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>SERVER PAR YE FILE HAI — kabhi nahi bhejti</text>
        <text x="486" y="240" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">&lt;?php</text>
        <text x="486" y="258" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">  $user = &quot;Riya&quot;;</text>
        <text x="486" y="276" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">  echo &quot;&lt;h1&gt;Hello $user&lt;/h1&gt;&quot;;</text>
      </g>

      <path d="M 460 196 V 172" fill="none" stroke="#00ff88" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M 470 300 H 940" fill="none" stroke="none" />

      <g className="diagram-pop" style={{ animationDelay: '680ms' }}>
        <rect x="20" y="310" width="880" height="46" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
        <text x="36" y="330" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>PHP FILE KA DHANCHA</text>
        <text x="36" y="348" fill="#dbe6ff" fontSize="9" fontFamily="'Consolas', monospace">index.php  →  &lt;?php  ...code...  ?&gt;  ke beech PHP chalti hai · baaki sab HTML seedha bhej diya jaata hai</text>
      </g>

      <text x="460" y="384" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        PHP = PHP: Hypertext Preprocessor · server-side scripting language
      </text>
      <text x="460" y="408" textAnchor="middle" fill="#5a6a9e" fontSize="9.5" fontFamily={FONT}>
        Exam line: "PHP server par chalti hai aur browser ko sirf HTML output milta hai" — yahi HTML se bada farak hai
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 31 — PHP variables, types and scope
// ============================================================
export function PhpVariablesDiagram() {
  const types = [
    ['string', '$name = "Riya";', 'string(5) "Riya"'],
    ['integer', '$marks = 78;', 'int(78)'],
    ['float', '$pi = 3.14;', 'float(3.14)'],
    ['boolean', '$pass = true;', 'bool(true)'],
    ['array', '$a = [1, 2, 3];', 'array(3)'],
    ['null', '$x = null;', 'NULL'],
  ];
  return (
    <svg viewBox="0 0 920 424" className="diagram-svg" role="img" aria-label="PHP variable anatomy with the dollar sign and naming rules, the seven data types with var_dump output, and variable scope">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        PHP variables — $ se shuru, type khud lagta hai
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        ghoshit karne ki zaroorat nahi · assign karte hi variable ban jaata hai
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="70" width="420" height="76" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(126,231,135,0.5)" />
        <text x="40" y="116" fill="#7ee787" fontSize="16" fontWeight="800" fontFamily="'Consolas', monospace">$</text>
        <text x="58" y="116" fill="#fff" fontSize="15" fontFamily="'Consolas', monospace">studentName</text>
        <text x="204" y="116" fill="#9ab0e0" fontSize="15" fontFamily="'Consolas', monospace">=</text>
        <text x="226" y="116" fill="#ffb86c" fontSize="15" fontFamily="'Consolas', monospace">&quot;Riya&quot;</text>
        <text x="300" y="116" fill="#7f8db3" fontSize="15" fontFamily="'Consolas', monospace">;</text>
        <text x="40" y="136" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>dollar sigil</text>
        <text x="150" y="136" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>naam (letter/_ se shuru)</text>
        <text x="300" y="136" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>value + semicolon</text>
      </g>

      <text x="460" y="172" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>
        naamo mein a-z, A-Z, 0-9, _ allowed · number se shuru nahi · case-sensitive ($name ≠ $Name)
      </text>

      <text x="20" y="200" fill="#5a6a9e" fontSize="9" fontWeight="700" fontFamily={FONT}>DATA TYPES (var_dump ka output)</text>
      {types.map(([t, code, dump], i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 300;
        const y = 210 + row * 62;
        return (
          <g key={t} className="diagram-pop" style={{ animationDelay: `${180 + i * 60}ms` }}>
            <rect x={x} y={y} width="286" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
            <text x={x + 12} y={y + 18} fill="#00d4ff" fontSize="9" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={x + 12} y={y + 33} fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">{code}</text>
            <text x={x + 12} y={y + 46} fill="#7ee787" fontSize="8" fontFamily="'Consolas', monospace">{dump}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="344" width="880" height="42" rx="9" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="36" y="362" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>SCOPE</text>
        <text x="36" y="378" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>
          local (function ke andar) · global (function ke bahar) · function ke andar global use karne ke liye "global $x;" ya $GLOBALS['x']
        </text>
      </g>

      <text x="460" y="408" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Superglobals: $_GET · $_POST · $_REQUEST · $_SERVER · $_SESSION · $_COOKIE · $_FILES
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 32 — PHP operators
// ============================================================
export function PhpOperatorsDiagram() {
  const groups = [
    { t: 'ARITHMETIC', c: '#00d4ff', rows: ['$a + $b   → jod', '$a - $b   → ghatao', '$a * $b   → guna', '$a / $b   → bhaag', '$a % $b   → remainder', '$a ** $b  → power'] },
    { t: 'ASSIGNMENT', c: '#c4ff00', rows: ['$a = 5     → set', '$a += 2    → $a = $a + 2', '$a -= 2', '$a *= 2', '$a /= 2', '$s .= "!"  → string jodo'] },
    { t: 'COMPARISON', c: '#ff8800', rows: ['$a == $b   → value equal', '$a === $b  → value + type', '$a != $b', '$a > $b / < / >=', '$a <=> $b  → -1, 0, 1', '$a ?? $b   → null check'] },
    { t: 'LOGICAL', c: '#ff7ab2', rows: ['$a && $b   → dono true', '$a || $b   → koi ek true', '!$a        → ulta', '$a and $b  → low priority', '$a or $b', '$a xor $b  → sirf ek true'] },
    { t: 'INCREMENT', c: '#2f6fff', rows: ['$a++   → baad mein badhao', '++$a   → pehle badhao', '$a--   → baad mein ghatao', '--$a   → pehle ghatao', '', ''] },
    { t: 'STRING / OTHER', c: '#8fd694', rows: ['$a . $b   → jodo', '$a .= $b  → jod kar rakho', '$c ? $x : $y → ternary', 'isset($a)', 'empty($a)', '@$a  → error chhupao'] },
  ];
  return (
    <svg viewBox="0 0 920 506" className="diagram-svg" role="img" aria-label="Six groups of PHP operators: arithmetic, assignment, comparison, logical, increment and string operators with examples">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        PHP operators — chhe group
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        arithmetic · assignment · comparison · logical · increment · string
      </text>

      {groups.map((g, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 298;
        const y = 68 + row * 194;
        return (
          <g key={g.t} className="diagram-pop" style={{ animationDelay: `${80 + i * 80}ms` }}>
            <rect x={x} y={y} width="284" height="170" rx="11" fill="rgba(255,255,255,0.03)" stroke={g.c} strokeWidth="1.5" strokeOpacity="0.7" />
            <rect x={x} y={y} width="284" height="28" rx="11" fill={g.c} fillOpacity="0.15" />
            <text x={x + 142} y={y + 19} textAnchor="middle" fill={g.c} fontSize="10" fontWeight="800" fontFamily={FONT}>{g.t}</text>
            {g.rows.map((r, j) => (
              r ? <text key={r} x={x + 14} y={y + 52 + j * 20} fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">{r}</text> : null
            ))}
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="20" y="436" width="880" height="34" rx="8" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="458" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>
          Trap: "10" == 10 → true (type badal kar compare) · "10" === 10 → false · PHP 8 mein 0 == "apple" ab false hai
        </text>
      </g>

      <text x="460" y="492" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        String jodne ke liye + nahi — dot (.) use hota hai
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 33 — Form input → PHP output (GET vs POST)
// ============================================================
export function PhpFormFlowDiagram() {
  return (
    <svg viewBox="0 0 920 436" className="diagram-svg" role="img" aria-label="A form sends data by GET in the URL or by POST in the request body, PHP reads it through the GET or POST superglobals, validates it and then prints safe output">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        User input se output tak — GET aur POST
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        form → superglobal → validate → echo/htmlspecialchars → HTML output
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="70" width="270" height="120" rx="10" fill="rgba(255,255,255,0.04)" stroke="#00d4ff" strokeWidth="1.5" />
        <text x="155" y="92" textAnchor="middle" fill="#00d4ff" fontSize="10" fontWeight="800" fontFamily={FONT}>HTML FORM</text>
        <text x="36" y="116" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;form action=&quot;welcome.php&quot;</text>
        <text x="36" y="132" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">      method=&quot;post&quot;&gt;</text>
        <text x="36" y="152" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">  &lt;input name=&quot;name&quot;&gt;</text>
        <text x="36" y="168" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">  &lt;input type=&quot;submit&quot;&gt;</text>
        <text x="36" y="184" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">&lt;/form&gt;</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="325" y="70" width="270" height="120" rx="10" fill="rgba(255,255,255,0.04)" stroke="#2f6fff" strokeWidth="1.5" />
        <text x="460" y="92" textAnchor="middle" fill="#6fb2ff" fontSize="10" fontWeight="800" fontFamily={FONT}>DATA KAISE JAATA HAI</text>
        <text x="340" y="116" fill="#c4ff00" fontSize="8.5" fontWeight="700" fontFamily={FONT}>GET</text>
        <text x="340" y="132" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">URL mein dikhta hai:</text>
        <text x="340" y="146" fill="#9ab0e0" fontSize="7.5" fontFamily="'Consolas', monospace">welcome.php?name=Riya&amp;city=Pune</text>
        <text x="340" y="166" fill="#ff8800" fontSize="8.5" fontWeight="700" fontFamily={FONT}>POST</text>
        <text x="340" y="182" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">URL mein nahi — body mein chhupa</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '280ms' }}>
        <rect x="630" y="70" width="270" height="120" rx="10" fill="rgba(255,255,255,0.04)" stroke="#c4ff00" strokeWidth="1.5" />
        <text x="765" y="92" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="800" fontFamily={FONT}>PHP MEIN PADHNA</text>
        <text x="646" y="116" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">$_GET[&quot;name&quot;]</text>
        <text x="646" y="134" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">$_POST[&quot;name&quot;]</text>
        <text x="646" y="152" fill="#9ab0e0" fontSize="8" fontFamily="'Consolas', monospace">$_REQUEST — dono ka mix</text>
        <text x="646" y="172" fill="#ffb86c" fontSize="8" fontFamily={FONT}>na mile to warning/undefined</text>
      </g>

      {[290, 595].map((x) => (
        <text key={x} x={x + 12} y="136" textAnchor="middle" fill="#9ab0e0" fontSize="14" fontFamily={FONT}>→</text>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="20" y="212" width="430" height="130" rx="10" fill={'rgba(255,68,102,0.08)'} stroke="rgba(255,68,102,0.5)" />
        <text x="36" y="234" fill="#ff7a90" fontSize="9" fontWeight="700" fontFamily={FONT}>GALAT — XSS ka khatra</text>
        <text x="36" y="258" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">echo &quot;Hello &quot; . $_GET[&quot;name&quot;];</text>
        <text x="36" y="280" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>user &lt;script&gt;alert(1)&lt;/script&gt; bheje to</text>
        <text x="36" y="296" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>wo script page mein chal jaayega</text>
        <text x="36" y="318" fill="#ff7a90" fontSize="8" fontFamily={FONT}>kabhi bhi user input seedha echo na karein</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x="470" y="212" width="430" height="130" rx="10" fill="rgba(0,255,136,0.07)" stroke="rgba(0,255,136,0.45)" />
        <text x="486" y="234" fill="#00ff88" fontSize="9" fontWeight="700" fontFamily={FONT}>SAHI — escape karke print</text>
        <text x="486" y="258" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">$name = htmlspecialchars($_POST[&quot;name&quot;]);</text>
        <text x="486" y="278" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">echo &quot;Hello &quot; . $name;</text>
        <text x="486" y="300" fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>output: Hello &amp;lt;b&amp;gt;Riya&amp;lt;/b&amp;gt;</text>
        <text x="486" y="318" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>tags text ban jaate hain, chalte nahi</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x="20" y="356" width="880" height="34" rx="8" fill="rgba(47,111,255,0.08)" stroke="rgba(47,111,255,0.45)" />
        <text x="34" y="378" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>
          Validation pehle: isset() / empty() se check karein, phir trim(), phir htmlspecialchars() — aur server par bhi validate karein
        </text>
      </g>

      <text x="460" y="418" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        GET = bookmark/share ho sakta, POST = password / sensitive data ke liye · dono par bharosa nahi
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 34 — printf / sprintf format string
// ============================================================
export function PhpPrintfDiagram() {
  const specs = [
    ['%s', 'string', 'printf("%s", "Riya") → Riya'],
    ['%d', 'integer', 'printf("%d", 78) → 78'],
    ['%f', 'float', 'printf("%f", 3.14159) → 3.141590'],
    ['%.2f', '2 decimals', 'printf("%.2f", 3.14159) → 3.14'],
    ['%05d', 'pad zero, width 5', 'printf("%05d", 42) → 00042'],
    ['%-5s|', 'left align', 'printf("%-5s|", "ab") → ab   |'],
    ['%x / %X', 'hex', 'printf("%x", 255) → ff'],
    ['%b', 'binary', 'printf("%b", 5) → 101'],
    ['%%', 'literal %', 'printf("100%%") → 100%'],
  ];
  return (
    <svg viewBox="0 0 920 430" className="diagram-svg" role="img" aria-label="A printf format specifier is broken into its parts, followed by a table of common specifiers with their output">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        String formatting — printf ke format specifiers
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        ek hi format string, uske baad arguments — output ka dhancha aap tay karte hain
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="70" width="880" height="92" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(196,255,0,0.4)" />
        <text x="120" y="122" textAnchor="middle" fill="#ff7ab2" fontSize="26" fontFamily="'Consolas', monospace">%</text>
        <text x="180" y="122" textAnchor="middle" fill="#ff8800" fontSize="26" fontFamily="'Consolas', monospace">0</text>
        <text x="240" y="122" textAnchor="middle" fill="#00d4ff" fontSize="26" fontFamily="'Consolas', monospace">5</text>
        <text x="290" y="122" textAnchor="middle" fill="#c4ff00" fontSize="26" fontFamily="'Consolas', monospace">.</text>
        <text x="330" y="122" textAnchor="middle" fill="#c4ff00" fontSize="26" fontFamily="'Consolas', monospace">2</text>
        <text x="390" y="122" textAnchor="middle" fill="#00ff88" fontSize="26" fontFamily="'Consolas', monospace">f</text>

        <text x="120" y="146" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>start</text>
        <text x="180" y="146" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>zero pad</text>
        <text x="240" y="146" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>width 5</text>
        <text x="310" y="146" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>decimal</text>
        <text x="390" y="146" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>float</text>

        <text x="560" y="112" fill="#dbe6ff" fontSize="10" fontFamily="'Consolas', monospace">printf(&quot;%05.2f&quot;, 3.14159);</text>
        <text x="560" y="136" fill="#00ff88" fontSize="11" fontWeight="800" fontFamily="'Consolas', monospace">→ 03.14</text>
      </g>

      {specs.map(([sp, meaning, ex], i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 298;
        const y = 180 + row * 56;
        return (
          <g key={sp} className="diagram-pop" style={{ animationDelay: `${200 + i * 45}ms` }}>
            <rect x={x} y={y} width="284" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
            <text x={x + 12} y={y + 20} fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily="'Consolas', monospace">{sp}</text>
            <text x={x + 74} y={y + 20} fill="#9ab0e0" fontSize="8.5" fontFamily={FONT}>{meaning}</text>
            <text x={x + 12} y={y + 36} fill="#dbe6ff" fontSize="7.5" fontFamily="'Consolas', monospace">{ex}</text>
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x="20" y="356" width="880" height="46" rx="9" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.45)" />
        <text x="36" y="376" fill="#ffb86c" fontSize="9" fontWeight="700" fontFamily={FONT}>NUMBER FORMAT</text>
        <text x="36" y="394" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">
          number_format(1234567.891, 2, &quot;.&quot;, &quot;,&quot;)  →  1,234,567.89
        </text>
      </g>

      <text x="460" y="420" textAnchor="middle" fill="#c4ff00" fontSize="9.5" fontWeight="700" fontFamily={FONT}>
        printf() seedha print karta hai · sprintf() wahi string return karta hai (baad mein use karne ke liye)
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 35 — PHP string manipulation functions
// ============================================================
export function PhpStringFunctionsDiagram() {
  const rows = [
    ['strlen($s)', 'length', '19'],
    ['trim($s)', 'aage-piche space hataayo', '"Hello PHP World"'],
    ['strtoupper($s)', 'CAPS', '"  HELLO PHP WORLD  "'],
    ['strtolower($s)', 'chhote', '"  hello php world  "'],
    ['ucfirst($s)', 'pehla letter bada', '"  Hello PHP World  "'],
    ['ucwords($s)', 'har word bada', '"  Hello PHP World  "'],
    ['strpos($s, "PHP")', 'position', '8'],
    ['substr($s, 2, 5)', 'his sa nikaalo', '"Hello"'],
    ['str_replace("PHP", "JS", $s)', 'badlo', '"  Hello JS World  "'],
    ['explode(" ", trim($s))', 'array banao', '["Hello","PHP","World"]'],
    ['strrev($s)', 'ulta', '"  dlroW PHP olleH  "'],
    ['str_repeat("ab", 3)', 'dohrao', '"ababab"'],
  ];
  return (
    <svg viewBox="0 0 920 452" className="diagram-svg" role="img" aria-label="A PHP string with its length and index positions, and twelve string library functions with their results">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        PHP string functions — ek string, barah functions
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        sabka input string, output string / number / array — original string kabhi nahi badalti
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="66" width="580" height="46" rx="8" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.45)" />
        <text x="34" y="86" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>$s =</text>
        <text x="34" y="102" fill="#dbe6ff" fontSize="12" fontFamily="'Consolas', monospace">
          &quot;  Hello PHP World  &quot;
        </text>
        <text x="330" y="102" fill="#7ee787" fontSize="9" fontFamily={FONT}>length = 19 (spaces bhi ginte hain)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x="620" y="66" width="280" height="46" rx="8" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.45)" />
        <text x="634" y="86" fill="#ffb86c" fontSize="8.5" fontWeight="700" fontFamily={FONT}>PHP 8 ke naye helpers</text>
        <text x="634" y="102" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">str_contains · str_starts_with · str_ends_with</text>
      </g>

      {rows.map(([fn, what, out], i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = col === 0 ? 20 : 470;
        const y = 128 + row * 46;
        return (
          <g key={fn} className="diagram-pop" style={{ animationDelay: `${240 + i * 40}ms` }}>
            <rect x={x} y={y} width="430" height="38" rx="7" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.13)" />
            <text x={x + 10} y={y + 16} fill="#7ee787" fontSize="8" fontFamily="'Consolas', monospace">{fn}</text>
            <text x={x + 10} y={y + 30} fill="#5a6a9e" fontSize="7.5" fontFamily={FONT}>{what}</text>
            <text x={x + 420} y={y + 22} textAnchor="end" fill="#c4ff00" fontSize="8" fontFamily="'Consolas', monospace">{out}</text>
          </g>
        );
      })}

      <text x="460" y="428" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        explode() string → array · implode() array → string · dono ek saath yaad rakhein
      </text>
      <text x="460" y="448" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>
        substr($s, start, length) — start negative bhi ho sakta hai (aakhir se)
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 36 — Indexed (single-dimensional) arrays
// ============================================================
export function PhpArrayDiagram() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
  return (
    <svg viewBox="0 0 920 424" className="diagram-svg" role="img" aria-label="A PHP indexed array with keys 0 to 3, its count, and the common functions used to add, remove and loop over elements">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Single-dimensional array — ek naam, kai values, index 0 se
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        $fruits = [&quot;Apple&quot;, &quot;Banana&quot;, &quot;Mango&quot;, &quot;Orange&quot;];
      </text>

      {fruits.map((f, i) => (
        <g key={f} className="diagram-pop" style={{ animationDelay: `${70 + i * 70}ms` }}>
          <rect x={50 + i * 150} y="70" width="132" height="52" rx="9" fill="rgba(196,255,0,0.1)" stroke="rgba(196,255,0,0.55)" />
          <text x={116 + i * 150} y="100" textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily="'Consolas', monospace">{f}</text>
          <text x={116 + i * 150} y="140" textAnchor="middle" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>key [{i}]</text>
        </g>
      ))}
      <text x="710" y="100" fill="#00d4ff" fontSize="10" fontFamily="'Consolas', monospace">count($fruits) → 4</text>
      <text x="710" y="122" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>keys 0,1,2,3 — automatic</text>

      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <rect x="20" y="164" width="430" height="150" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.4)" />
        <text x="36" y="186" fill="#00d4ff" fontSize="9" fontWeight="700" fontFamily={FONT}>LIKHNA / PADHNA</text>
        <text x="36" y="208" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">$fruits = array(&quot;Apple&quot;, &quot;Banana&quot;);   // purana</text>
        <text x="36" y="226" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">$fruits = [&quot;Apple&quot;, &quot;Banana&quot;];          // naya</text>
        <text x="36" y="248" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">echo $fruits[0];        // Apple</text>
        <text x="36" y="266" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">$fruits[] = &quot;Grapes&quot;;   // end mein jodo</text>
        <text x="36" y="288" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">unset($fruits[1]);      // hataao</text>
        <text x="36" y="306" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>unset ke baad indexes nahi badalte — array_values() se reset</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x="470" y="164" width="430" height="150" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(196,255,0,0.4)" />
        <text x="486" y="186" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>LOOP AUR FUNCTIONS</text>
        <text x="486" y="208" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">foreach ($fruits as $f) {'{'} echo $f; {'}'}</text>
        <text x="486" y="226" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">for ($i = 0; $i &lt; count($fruits); $i++)</text>
        <text x="486" y="248" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">sort($a) · rsort($a) · array_sum($a)</text>
        <text x="486" y="266" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">array_push($a, 4) · array_pop($a)</text>
        <text x="486" y="288" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">in_array(&quot;Mango&quot;, $fruits)  → true</text>
        <text x="486" y="306" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>print_r() / var_dump() se poora array dekh sakte hain</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x="20" y="330" width="880" height="34" rx="8" fill="rgba(255,136,0,0.09)" stroke="rgba(255,136,0,0.45)" />
        <text x="34" y="352" fill="#dbe6ff" fontSize="9" fontFamily={FONT}>
          print_r($fruits) → Array ( [0] =&gt; Apple [1] =&gt; Banana [2] =&gt; Mango [3] =&gt; Orange ) · var_dump() type ke saath dikhata hai
        </text>
      </g>

      <text x="460" y="392" textAnchor="middle" fill="#c4ff00" fontSize="10" fontWeight="700" fontFamily={FONT}>
        Indexed array ke keys 0, 1, 2… hote hain — associative mein keys khud likhte hain
      </text>
      <text x="460" y="414" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>
        Exam line: array = ek variable mein kai values, har value ka ek key
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 37 — Multidimensional arrays
// ============================================================
export function Php2dArrayDiagram() {
  const m = [
    [78, 82, 90],
    [65, 70, 72],
    [88, 91, 95],
  ];
  return (
    <svg viewBox="0 0 920 436" className="diagram-svg" role="img" aria-label="A two dimensional PHP array visualised as rows and columns of marks, read with nested foreach loops and printed as an HTML table">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Multidimensional array — array ke andar array
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        $marks[0][1] =&gt; pehli row, doosra column · matrix, table, records — sab isi se
      </text>

      <text x="60" y="82" fill="#5a6a9e" fontSize="8.5" fontFamily={FONT}>col →</text>
      {['C1', 'C2', 'C3'].map((c, j) => (
        <text key={c} x={140 + j * 74} y="82" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>{c}</text>
      ))}

      {m.map((row, i) => (
        <g key={i} className="diagram-pop" style={{ animationDelay: `${80 + i * 90}ms` }}>
          <text x="92" y={112 + i * 52} textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>row {i}</text>
          {row.map((v, j) => (
            <g key={j}>
              <rect x={102 + j * 74} y={90 + i * 52} width="62" height="36" rx="6" fill="rgba(196,255,0,0.1)" stroke="rgba(196,255,0,0.45)" />
              <text x={133 + j * 74} y={113 + i * 52} textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily="'Consolas', monospace">{v}</text>
            </g>
          ))}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="360" y="88" width="250" height="150" rx="10" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.13)" />
        <text x="374" y="108" fill="#c4ff00" fontSize="8.5" fontWeight="700" fontFamily={FONT}>LIKHNA / CODE</text>
        <text x="374" y="128" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">$marks = [</text>
        <text x="374" y="144" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">  [78, 82, 90],</text>
        <text x="374" y="160" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">  [65, 70, 72],</text>
        <text x="374" y="176" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">  [88, 91, 95]</text>
        <text x="374" y="192" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">];</text>
        <text x="374" y="212" fill="#7ee787" fontSize="8" fontFamily="'Consolas', monospace">echo $marks[0][1];  // 82</text>
        <text x="374" y="228" fill="#5a6a9e" fontSize="7.5" fontFamily={FONT}>pehla index row, doosra column</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '470ms' }}>
        <rect x="630" y="88" width="270" height="150" rx="10" fill="rgba(47,111,255,0.09)" stroke="rgba(47,111,255,0.5)" />
        <text x="646" y="108" fill="#6fb2ff" fontSize="8.5" fontWeight="700" fontFamily={FONT}>NESTED LOOP</text>
        <text x="646" y="128" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">foreach ($marks as $row) {'{'}</text>
        <text x="646" y="144" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">  foreach ($row as $m) {'{'}</text>
        <text x="646" y="160" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">    echo $m . &quot; &quot;;</text>
        <text x="646" y="176" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">  {'}'}</text>
        <text x="646" y="192" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">  echo &quot;&lt;br&gt;&quot;;</text>
        <text x="646" y="208" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">{'}'}</text>
        <text x="646" y="228" fill="#9ab0e0" fontSize="7.5" fontFamily={FONT}>bahar wala = rows, andar wala = columns</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '550ms' }}>
        <rect x="20" y="272" width="880" height="60" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" />
        <text x="36" y="294" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>OUTPUT — HTML TABLE</text>
        <text x="36" y="316" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">
          &lt;table&gt;&lt;tr&gt;&lt;td&gt;78&lt;/td&gt;&lt;td&gt;82&lt;/td&gt;&lt;td&gt;90&lt;/td&gt;&lt;/tr&gt; … rows loop se ban jaati hain
        </text>
      </g>

      <text x="460" y="364" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>
        3D array = array ke andar array ke andar array ($data[0][1][2]) — rarely exam mein, par concept yahi hai
      </text>
      <text x="460" y="392" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Multidimensional array = rows aur columns wala data (marks, matrix, timetable)
      </text>
      <text x="460" y="416" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>
        count($marks) → 3 (sirf pehli level) · count($marks, COUNT_RECURSIVE) → 12
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 38 — Associative arrays
// ============================================================
export function PhpAssocDiagram() {
  return (
    <svg viewBox="0 0 920 432" className="diagram-svg" role="img" aria-label="An associative array maps named keys to values, is looped with foreach using key and value, and can hold records that print as a table">
      <text x="460" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>
        Associative array — index ki jagah naam wale keys
      </text>
      <text x="460" y="47" textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>
        $student = [&quot;name&quot; =&gt; &quot;Riya&quot;, &quot;marks&quot; =&gt; 78];  ·  key =&gt; value
      </text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x="20" y="70" width="410" height="140" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(0,212,255,0.45)" />
        {[
          ['name', 'Riya'],
          ['course', 'MCA'],
          ['marks', '78'],
          ['city', 'Pune'],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x="36" y={102 + i * 28} fill="#ff9ec4" fontSize="9.5" fontFamily="'Consolas', monospace">&quot;{k}&quot;</text>
            <text x="120" y={102 + i * 28} fill="#9ab0e0" fontSize="9.5" fontFamily="'Consolas', monospace">=&gt;</text>
            <text x="150" y={102 + i * 28} fill="#dbe6ff" fontSize="9.5" fontFamily="'Consolas', monospace">
              {typeof v === 'number' || !isNaN(v) ? v : `"${v}"`}
            </text>
          </g>
        ))}
        <text x="36" y="196" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>keys string ho sakti hain (indexed array mein 0,1,2 hote hain)</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x="450" y="70" width="450" height="140" rx="10" fill="rgba(196,255,0,0.07)" stroke="rgba(196,255,0,0.45)" />
        <text x="466" y="92" fill="#c4ff00" fontSize="9" fontWeight="700" fontFamily={FONT}>PADHNA AUR LOOP</text>
        <text x="466" y="114" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">echo $student[&quot;name&quot;];        // Riya</text>
        <text x="466" y="134" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">$student[&quot;marks&quot;] = 82;       // badla</text>
        <text x="466" y="154" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">foreach ($student as $k =&gt; $v) {'{'}</text>
        <text x="466" y="172" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">  echo &quot;$k = $v&lt;br&gt;&quot;;</text>
        <text x="466" y="190" fill="#dbe6ff" fontSize="8.5" fontFamily="'Consolas', monospace">{'}'}</text>
        <text x="466" y="206" fill="#5a6a9e" fontSize="8" fontFamily={FONT}>indexed array mein $k sirf 0,1,2 hota hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <rect x="20" y="228" width="560" height="128" rx="10" fill="rgba(255,136,0,0.07)" stroke="rgba(255,136,0,0.45)" />
        <text x="36" y="250" fill="#ffb86c" fontSize="9" fontWeight="700" fontFamily={FONT}>REAL USE — RECORDS KA ARRAY</text>
        <text x="36" y="270" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">$students = [</text>
        <text x="36" y="286" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">  [&quot;name&quot; =&gt; &quot;Riya&quot;, &quot;marks&quot; =&gt; 78],</text>
        <text x="36" y="302" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">  [&quot;name&quot; =&gt; &quot;Aman&quot;, &quot;marks&quot; =&gt; 82]</text>
        <text x="36" y="318" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">];</text>
        <text x="36" y="338" fill="#9ab0e0" fontSize="8" fontFamily={FONT}>foreach ($students as $s) → har record ek row · yahi database ka shape hai</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x="600" y="228" width="300" height="128" rx="10" fill="rgba(47,111,255,0.09)" stroke="rgba(47,111,255,0.5)" />
        <text x="616" y="250" fill="#6fb2ff" fontSize="9" fontWeight="700" fontFamily={FONT}>SORTING &amp; HELPERS</text>
        <text x="616" y="272" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">ksort($a)   // key se sort</text>
        <text x="616" y="290" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">asort($a)   // value se sort</text>
        <text x="616" y="308" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">array_keys($a)</text>
        <text x="616" y="326" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">array_values($a)</text>
        <text x="616" y="344" fill="#dbe6ff" fontSize="8" fontFamily="'Consolas', monospace">array_key_exists(&quot;name&quot;, $a)</text>
      </g>

      <text x="460" y="382" textAnchor="middle" fill="#c4ff00" fontSize="10.5" fontWeight="700" fontFamily={FONT}>
        Associative array = naam se pehchana jaane wala data (&quot;marks&quot; =&gt; 78), index yaad rakhne ki zaroorat nahi
      </text>
      <text x="460" y="406" textAnchor="middle" fill="#5a6a9e" fontSize="9" fontFamily={FONT}>
        Exam line: indexed array mein key number hota hai, associative mein key naam — dono PHP arrays hain
      </text>
    </svg>
  );
}
