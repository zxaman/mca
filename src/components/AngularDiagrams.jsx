const FONT = "'Segoe UI', system-ui, sans-serif";

// Palette for the Unit V (AngularJS + Next.js) diagrams.
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
  yellow: '#ffd166',
};

function Frame({ w = 920, h = 520, title, sub, label, children }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="diagram-svg" role="img" aria-label={label}>
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

function Box({ x, y, w, h, title, sub, lines = [], color = C.cyan, delay = 0, radius = 12 }) {
  return (
    <g className="diagram-pop" style={{ animationDelay: `${delay}ms` }}>
      <rect x={x} y={y} width={w} height={h} rx={radius} fill={color} fillOpacity="0.05" stroke={color} strokeWidth="1.6" strokeOpacity="0.8" />
      <rect x={x} y={y} width={w} height="30" rx={radius} fill={color} fillOpacity="0.16" />
      <text x={x + w / 2} y={y + 20} textAnchor="middle" fill={color} fontSize="11" fontWeight="800" fontFamily={FONT}>
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 50} textAnchor="middle" fill={C.white} fontSize="10" fontFamily={FONT}>
          {sub}
        </text>
      )}
      {lines.map((line, i) => (
        <text key={line} x={x + w / 2} y={y + (sub ? 68 : 50) + i * 17} textAnchor="middle" fill={C.dim} fontSize="9.3" fontFamily={FONT}>
          {line}
        </text>
      ))}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, color = C.lime, dashed = false, delay = 0, label, labelDx = 0, labelDy = -9 }) {
  const horiz = Math.abs(y2 - y1) < Math.abs(x2 - x1);
  const dir = horiz ? Math.sign(x2 - x1) : Math.sign(y2 - y1);
  const tipBack = 7;
  const head = 6.5;
  const px = horiz ? x2 - dir * tipBack : x2;
  const py = horiz ? y2 : y2 - dir * tipBack;
  const pts = horiz
    ? `${x2},${y2} ${px},${y2 - head} ${px},${y2 + head}`
    : `${x2},${y2} ${x2 - head},${py} ${x2 + head},${py}`;
  return (
    <g className="diagram-pop" style={{ animationDelay: `${delay}ms` }}>
      <line
        x1={x1}
        y1={y1}
        x2={px}
        y2={py}
        stroke={color}
        strokeWidth="1.7"
        strokeOpacity="0.85"
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      <polygon points={pts} fill={color} fillOpacity="0.9" />
      {label && (
        <text
          x={(x1 + x2) / 2 + labelDx}
          y={(y1 + y2) / 2 + labelDy}
          textAnchor="middle"
          fill={color}
          fontSize="9"
          fontWeight="700"
          fontFamily={FONT}
        >
          {label}
        </text>
      )}
    </g>
  );
}

function Note({ x, y, text, color = C.dim, size = 10, anchor = 'middle', bold = false, delay = 0 }) {
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
   5.1 — JavaScript frameworks landscape
   ------------------------------------------------------------------ */
export function JsFrameworksDiagram() {
  const timeline = [
    ['2006', 'jQuery', 'DOM + AJAX', C.cyan],
    ['2010', 'AngularJS', 'MVC + binding', C.red],
    ['2013', 'React', 'components', C.blue],
    ['2014', 'Vue', 'progressive', C.green],
    ['2016', 'Angular 2+', 'TypeScript', C.orange],
    ['2016', 'Next.js', 'SSR + routing', C.lime],
  ];
  return (
    <Frame
      h={520}
      title="JavaScript frameworks ka landscape"
      sub="library vs framework · the SPA flow · from 2006 to today"
      label="JavaScript frameworks: the difference between a library and a framework, the single page application flow, and a timeline from jQuery 2006 to Next.js"
    >
      <Box x={24} y={78} w={276} h={126} title="LIBRARY" sub="you call the code" lines={['jQuery · Lodash · Axios', 'a single-purpose tool', '$("#box").hide()']} color={C.cyan} delay={60} />
      <Box x={322} y={78} w={276} h={126} title="FRAMEWORK" sub="the framework calls your code" lines={['AngularJS · Angular · Vue', 'the whole app structure', 'ng-app se bootstrap']} color={C.orange} delay={160} />
      <Box x={620} y={78} w={276} h={126} title="SPA" sub="ek HTML shell + client routing" lines={['JSON data, no page reload', 'framework ki zaroorat', 'SEO ka issue → SSR']} color={C.lime} delay={260} />

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x={24} y={224} width={872} height={92} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={460} y={248} textAnchor="middle" fill={C.purple} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          FRAMEWORK KE TYPES
        </text>
        {[
          ['MVC / MVVM', 'AngularJS, Ember, Backbone'],
          ['Component libs', 'React, Vue, Svelte'],
          ['Meta-frameworks', 'Next.js, Nuxt, Remix'],
          ['Utility / CSS', 'jQuery, Lodash, Bootstrap'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={52 + i * 216} y={276} fill={C.cyan} fontSize="9.6" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={52 + i * 216} y={294} fill={C.dim} fontSize="8.9" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>

      <line x1={60} y1={400} x2={870} y2={400} stroke={C.faint} strokeWidth="2" strokeOpacity="0.6" />
      {timeline.map(([year, name, note, col], i) => (
        <g key={name} className="diagram-pop" style={{ animationDelay: `${400 + i * 70}ms` }}>
          <circle cx={78 + i * 143} cy={400} r="6" fill={col} fillOpacity="0.85" />
          <text x={78 + i * 143} y={378} textAnchor="middle" fill={col} fontSize="9.6" fontWeight="800" fontFamily={FONT}>{year}</text>
          <text x={78 + i * 143} y={424} textAnchor="middle" fill={C.white} fontSize="9.6" fontWeight="700" fontFamily={FONT}>{name}</text>
          <text x={78 + i * 143} y={440} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>{note}</text>
        </g>
      ))}

      <Note x={460} y={474} text="Inversion of control: with a library you call it, with a framework it calls you" color={C.dim} size={9.8} />
      <Note x={460} y={496} text="AngularJS (2010) was the first mainstream SPA framework — end of life in Dec 2021" color={C.pink} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.2 — AngularJS architecture overview
   ------------------------------------------------------------------ */
export function AngularOverviewDiagram() {
  return (
    <Frame
      h={520}
      title="AngularJS architecture overview"
      sub="ng-app bootstrap → module → controller + $scope → view render → digest update"
      label="AngularJS architecture: ng-app bootstraps the module, the injector creates controllers with scope, directives and expressions render the view, and the digest cycle keeps them in sync"
    >
      <Box x={24} y={78} w={180} h={96} title="ng-app" sub="bootstrap" lines={['page load par', 'auto start']} color={C.red} delay={60} />
      <Arrow x1={204} y1={126} x2={252} y2={126} color={C.red} delay={140} />
      <Box x={252} y={78} w={200} h={96} title="MODULE" sub="angular.module('app', [])" lines={['dependencies list', 'registry']} color={C.orange} delay={180} />
      <Arrow x1={452} y1={126} x2={500} y2={126} color={C.orange} delay={260} label="DI" />
      <Box x={500} y={78} w={190} h={96} title="$injector" sub="dependency injection" lines={['services resolve', 'controllers create']} color={C.yellow} delay={300} />
      <Arrow x1={690} y1={126} x2={738} y2={126} color={C.yellow} delay={380} />
      <Box x={738} y={78} w={158} h={96} title="CONTROLLER" sub="ng-controller" lines={['fills the $scope', 'exposes actions']} color={C.lime} delay={420} />

      <Arrow x1={817} y1={174} x2={817} y2={216} color={C.lime} delay={480} />

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x={24} y={216} width={872} height={92} rx="12" fill="rgba(0,212,255,0.06)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.65" />
        <text x={460} y={242} textAnchor="middle" fill={C.cyan} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          VIEW = HTML template + directives + expressions
        </text>
        {[
          ['ng-model', 'two-way binding'],
          ['ng-repeat', 'list render'],
          ['ng-if / ng-show', 'condition'],
          ['{{ expression }}', 'value dikhana'],
          ['filters', '| currency, date'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={52 + i * 176} y={270} fill={C.lime} fontSize="9.4" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={52 + i * 176} y={288} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>

      <Arrow x1={460} y1={308} x2={460} y2={352} color={C.purple} dashed delay={600} label="user action" labelDx={54} labelDy={4} />

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={230} y={352} width={460} height={86} rx="12" fill="rgba(170,0,255,0.07)" stroke={C.purple} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={460} y={378} textAnchor="middle" fill={C.purple} fontSize="10.4" fontWeight="800" fontFamily={FONT}>
          DIGEST CYCLE — the $watch list is evaluated
        </text>
        <text x={460} y={400} textAnchor="middle" fill={C.dim} fontSize="9.2" fontFamily={FONT}>
          model changed → DOM update · typing in an input → model update
        </text>
        <text x={460} y={422} textAnchor="middle" fill={C.faint} fontSize="8.8" fontFamily={FONT}>
          $apply() → $digest() → dirty checking → stable
        </text>
      </g>

      <Note x={460} y={466} text="the server sends only JSON — all rendering in the browser (client-side MVC/MVVM)" color={C.dim} size={9.6} />
      <Note x={460} y={490} text="AngularJS 1.x = JavaScript + $scope · Angular 2+ = TypeScript + components" color={C.lime} size={9.4} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.3 — Features of AngularJS
   ------------------------------------------------------------------ */
export function AngularFeaturesDiagram() {
  const cols = [
    { t: 'HTML SIDE', c: C.cyan, x: 24, items: ['Directives (ng-repeat, ng-if)', 'Expressions {{ }}', 'Filters (currency, date)', 'Two-way binding'] },
    { t: 'LOGIC SIDE', c: C.lime, x: 322, items: ['Modules (angular.module)', 'Controllers + $scope', 'Services ($http, $q)', 'Dependency injection'] },
    { t: 'APP SIDE', c: C.orange, x: 620, items: ['Routing (ngRoute)', 'Forms + validation', 'Animation (ngAnimate)', 'Testing (Karma/Jasmine)'] },
  ];
  return (
    <Frame
      h={470}
      title="AngularJS features"
      sub="HTML side + logic side + app side — all built in"
      label="AngularJS features grouped into HTML side directives and expressions, logic side modules controllers services and DI, and app side routing validation animation testing"
    >
      {cols.map((col, ci) => (
        <g key={col.t}>
          <g className="diagram-pop" style={{ animationDelay: `${60 + ci * 90}ms` }}>
            <rect x={col.x} y={78} width={276} height={296} rx="12" fill={col.c} fillOpacity="0.05" stroke={col.c} strokeWidth="1.5" strokeOpacity="0.7" />
            <rect x={col.x} y={78} width={276} height="34" rx="12" fill={col.c} fillOpacity="0.16" />
            <text x={col.x + 138} y={100} textAnchor="middle" fill={col.c} fontSize="11" fontWeight="800" fontFamily={FONT}>{col.t}</text>
          </g>
          {col.items.map((it, i) => (
            <g key={it} className="diagram-pop" style={{ animationDelay: `${120 + ci * 90 + i * 60}ms` }}>
              <rect x={col.x + 16} y={128 + i * 58} width={244} height={44} rx="8" fill="rgba(255,255,255,0.03)" stroke={col.c} strokeWidth="1.1" strokeOpacity="0.4" />
              <text x={col.x + 32} y={155 + i * 58} fill={C.white} fontSize="9.6" fontWeight="600" fontFamily={FONT}>{it}</text>
            </g>
          ))}
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={24} y={392} width={872} height={52} rx="10" fill="rgba(196,255,0,0.07)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={460} y={414} textAnchor="middle" fill={C.lime} fontSize="9.8" fontWeight="700" fontFamily={FONT}>
          Two-way binding + directives + DI = AngularJS ka core idea
        </text>
        <text x={460} y={432} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          Every feature sits around these three — data binding, HTML directives, DI services
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.4 — Advantages vs limitations
   ------------------------------------------------------------------ */
export function AngularAdvantagesDiagram() {
  const pros = ['less code (ng-model, ng-repeat)', 'declarative HTML template', 'routing + validation built in', 'testable through DI (Karma/Jasmine)', 'Google support, MIT licence', 'ideal for SPA and CRUD'];
  const cons = ['EOL Dec 2021 (no patches)', 'digest slow at scale', 'two-way binding ka andhera', 'mobile performance weak', 'Angular 2+ = rewrite migration', 'directive API mushkil'];
  return (
    <Frame
      h={500}
      title="AngularJS — advantages vs limitations"
      sub="the gains and the limits — a balanced answer needs both"
      label="AngularJS advantages such as less code, declarative HTML, built-in routing and testability set against limitations such as end of life, digest performance and migration cost"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={78} width={424} height={300} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={236} y={104} textAnchor="middle" fill={C.green} fontSize="11" fontWeight="800" fontFamily={FONT}>ADVANTAGES</text>
      </g>
      {pros.map((t, i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${120 + i * 60}ms` }}>
          <text x={48} y={136 + i * 38} fill={C.green} fontSize="10" fontFamily={FONT}>+</text>
          <text x={68} y={136 + i * 38} fill={C.white} fontSize="9.6" fontFamily={FONT}>{t}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x={472} y={78} width={424} height={300} rx="12" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={684} y={104} textAnchor="middle" fill={C.red} fontSize="11" fontWeight="800" fontFamily={FONT}>LIMITATIONS</text>
      </g>
      {cons.map((t, i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${140 + i * 60}ms` }}>
          <text x={496} y={136 + i * 38} fill={C.red} fontSize="10" fontFamily={FONT}>−</text>
          <text x={516} y={136 + i * 38} fill={C.white} fontSize="9.6" fontFamily={FONT}>{t}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x={24} y={396} width={872} height={76} rx="10" fill="rgba(0,212,255,0.06)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={460} y={420} textAnchor="middle" fill={C.cyan} fontSize="9.8" fontWeight="700" fontFamily={FONT}>
          Today's call: maintain a legacy 1.x app · build new work on Angular 2+ / React + Next.js / Vue + Nuxt
        </text>
        <text x={460} y={442} textAnchor="middle" fill={C.dim} fontSize="9.2" fontFamily={FONT}>
          Migration: hybrid through ngUpgrade (1.x and 2+ side by side), then a page-by-page rewrite
        </text>
        <text x={460} y={462} textAnchor="middle" fill={C.faint} fontSize="8.9" fontFamily={FONT}>
          Performance tip (1.x): one-time binding (::x) · track by · fewer $watches · ng-if over ng-show
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.5 — MVC / MVVM architecture
   ------------------------------------------------------------------ */
export function AngularMvcDiagram() {
  return (
    <Frame
      h={500}
      title="MVC / MVVM architecture in AngularJS"
      sub="Model (data) ↔ Controller ↔ $scope (ViewModel) ↔ View (template)"
      label="AngularJS MVC: the model holds data and services, the controller populates the scope which acts as view model, and the view renders directives and expressions while the digest cycle syncs changes"
    >
      <Box x={330} y={78} w={260} h={92} title="CONTROLLER" sub="ng-controller ka function" lines={['fills the $scope', 'exposes actions']} color={C.lime} delay={60} />

      <Box x={24} y={208} w={260} h={120} title="MODEL" sub="data + business rules" lines={['plain objects / arrays', 'services + $http', 'does not know the DOM']} color={C.cyan} delay={140} />
      <Box x={330} y={208} w={260} h={120} title="$scope = VIEWMODEL" sub="the bridge between view and model" lines={['properties + functions', '$watch list', 'this is what digest watches']} color={C.purple} delay={200} />
      <Box x={636} y={208} w={260} h={120} title="VIEW" sub="HTML template" lines={['ng-model, ng-repeat, ng-if', '{{ expression }} + filters', 'declarative — no DOM code']} color={C.orange} delay={260} />

      <Arrow x1={290} y1={252} x2={330} y2={252} color={C.cyan} delay={340} label="data" />
      <Arrow x1={330} y1={288} x2={290} y2={288} color={C.cyan} dashed delay={380} label="update" />
      <Arrow x1={590} y1={252} x2={636} y2={252} color={C.orange} delay={420} label="render" />
      <Arrow x1={636} y1={288} x2={590} y2={288} color={C.orange} dashed delay={460} label="ng-click" />

      <Arrow x1={460} y1={170} x2={460} y2={208} color={C.lime} delay={300} label="populate" labelDx={46} />

      <Arrow x1={460} y1={328} x2={460} y2={366} color={C.purple} dashed delay={520} label="digest" labelDx={40} labelDy={4} />

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={224} y={366} width={472} height={72} rx="10" fill="rgba(170,0,255,0.07)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.65" />
        <text x={460} y={390} textAnchor="middle" fill={C.purple} fontSize="9.8" fontWeight="800" fontFamily={FONT}>
          DIGEST CYCLE — view ↔ model sync
        </text>
        <text x={460} y={410} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          input typed → model update · model change → DOM update (no manual code)
        </text>
        <text x={460} y={428} textAnchor="middle" fill={C.faint} fontSize="8.8" fontFamily={FONT}>
          A change from outside? $scope.$apply() or $timeout
        </text>
      </g>

      <Note x={460} y={466} text="the server sends only JSON — rendering in the browser (client-side MVC)" color={C.dim} size={9.6} />
      <Note x={460} y={488} text="Discipline: a thin controller · logic in a service · DOM in a directive" color={C.lime} size={9.4} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.6 — Applications of AngularJS
   ------------------------------------------------------------------ */
export function AngularApplicationsDiagram() {
  const domains = [
    ['Admin dashboards', 'charts, tables, filters', C.cyan],
    ['CRM / ERP screens', 'forms + role-based views', C.lime],
    ['E-commerce', 'filters, cart, checkout', C.orange],
    ['Data-entry portals', 'admission, attendance', C.purple],
    ['Real-time apps', 'polling, websocket, chat', C.pink],
    ['Hybrid mobile', 'Ionic 1 + Cordova', C.teal],
  ];
  return (
    <Frame
      h={470}
      title="AngularJS applications"
      sub="where it fits — and where it does not"
      label="AngularJS application areas: admin dashboards, CRM and ERP screens, e-commerce, data entry portals, real-time apps and Ionic hybrid mobile apps, with good-fit and poor-fit guidance"
    >
      {domains.map(([t, s, col], i) => (
        <Box
          key={t}
          x={24 + (i % 3) * 298}
          y={78 + Math.floor(i / 3) * 136}
          w={276}
          h={112}
          title={t}
          sub={s}
          color={col}
          delay={60 + i * 80}
        />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={24} y={356} width={424} height={80} rx="10" fill="rgba(0,230,118,0.06)" stroke={C.green} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={236} y={380} textAnchor="middle" fill={C.green} fontSize="9.8" fontWeight="800" fontFamily={FONT}>GOOD FIT</text>
        <text x={44} y={402} fill={C.dim} fontSize="9" fontFamily={FONT}>forms + tables + validation heavy</text>
        <text x={44} y={420} fill={C.dim} fontSize="9" fontFamily={FONT}>behind login (no SEO need)</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x={472} y={356} width={424} height={80} rx="10" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={684} y={380} textAnchor="middle" fill={C.red} fontSize="9.8" fontWeight="800" fontFamily={FONT}>POOR FIT</text>
        <text x={492} y={402} fill={C.dim} fontSize="9" fontFamily={FONT}>SEO-critical public site (SPA HTML khaali)</text>
        <text x={492} y={420} fill={C.dim} fontSize="9" fontFamily={FONT}>mobile-first public app · heavy realtime UI</text>
      </g>

      <Note x={460} y={458} text="Real users (1.x): Google internal tools, PayPal checkout, Upwork, Freelancer, Weather.com, Forbes" color={C.faint} size={8.9} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.7 — Expressions and directives
   ------------------------------------------------------------------ */
export function AngularExpressionsDiagram() {
  return (
    <Frame
      h={500}
      title="Expressions and directives"
      sub="{{ }} = value · ng-* = behaviour"
      label="AngularJS expressions evaluate against the scope and render values with filters, while directives add behaviour such as ng-model binding, ng-repeat loops and ng-click events"
    >
      <Box x={24} y={78} w={276} h={128} title="EXPRESSION {{ }}" sub="scope par evaluate hoke value" lines={['{{ 5 + 3 }}', '{{ s.name | uppercase }}', 'no statements or loops']} color={C.orange} delay={60} />
      <Box x={322} y={78} w={276} h={128} title="DIRECTIVE ng-*" sub="HTML ko behaviour" lines={['ng-model, ng-repeat', 'ng-if, ng-click, ng-class', 'custom directives too']} color={C.cyan} delay={160} />
      <Box x={620} y={78} w={276} h={128} title="TEMPLATE" sub="compile → link → render" lines={['directives are compiled', 'scope se link', 'DOM output']} color={C.lime} delay={260} />

      <g className="diagram-pop" style={{ animationDelay: '340ms' }}>
        <rect x={24} y={226} width={872} height={128} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={460} y={250} textAnchor="middle" fill={C.purple} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          BUILT-IN DIRECTIVES — chaar category
        </text>
        {[
          ['STRUCTURAL', 'ng-repeat · ng-if', 'ng-switch · ng-include'],
          ['BINDING / STYLE', 'ng-model · ng-bind', 'ng-class · ng-src'],
          ['EVENTS', 'ng-click · ng-change', 'ng-submit · ng-blur'],
          ['FORM', 'ng-required · ng-pattern', 'ng-minlength · ng-disabled'],
        ].map(([t, a, b], i) => (
          <g key={t}>
            <text x={52 + i * 216} y={278} fill={C.cyan} fontSize="9.2" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={52 + i * 216} y={300} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{a}</text>
            <text x={52 + i * 216} y={316} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{b}</text>
          </g>
        ))}
        <text x={460} y={342} textAnchor="middle" fill={C.faint} fontSize="8.8" fontFamily={FONT}>
          ng-app and ng-controller are structural too — they create the app and the scope
        </text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x={24} y={372} width={424} height={86} rx="10" fill="rgba(196,255,0,0.06)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={236} y={396} textAnchor="middle" fill={C.lime} fontSize="9.6" fontWeight="800" fontFamily={FONT}>EXPRESSION ke rules</text>
        <text x={44} y={418} fill={C.dim} fontSize="8.9" fontFamily={FONT}>operators and filters work</text>
        <text x={44} y={436} fill={C.dim} fontSize="8.9" fontFamily={FONT}>blank for undefined (no error)</text>
        <text x={44} y={452} fill={C.faint} fontSize="8.7" fontFamily={FONT}>ng-bind / ng-cloak se FOUC fix</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={472} y={372} width={424} height={86} rx="10" fill="rgba(0,212,255,0.06)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={684} y={396} textAnchor="middle" fill={C.cyan} fontSize="9.6" fontWeight="800" fontFamily={FONT}>CUSTOM DIRECTIVE</text>
        <text x={492} y={418} fill={C.dim} fontSize="8.9" fontFamily={FONT}>restrict · template · scope · link</text>
        <text x={492} y={436} fill={C.dim} fontSize="8.9" fontFamily={FONT}>scope: @ string · = two-way · &amp; callback</text>
        <text x={492} y={452} fill={C.faint} fontSize="8.7" fontFamily={FONT}>rating, date picker, chart wrapper</text>
      </g>

      <Note x={460} y={484} text="one expression = one $watch — too many expressions slow the page" color={C.pink} size={9.2} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.8 — Modules and controllers
   ------------------------------------------------------------------ */
export function AngularModulesDiagram() {
  return (
    <Frame
      h={500}
      title="Modules and controllers"
      sub="ng-app → module → registry → controller + scope → view"
      label="AngularJS modules and controllers: ng-app bootstraps the root module, its dependency list loads other modules, controllers and services are registered on the module, and the controller publishes data on the scope for the view"
    >
      <Box x={24} y={78} w={190} h={90} title="ng-app" sub="root bootstrap" color={C.red} delay={60} />
      <Arrow x1={214} y1={123} x2={262} y2={123} color={C.red} delay={140} />
      <Box x={262} y={78} w={230} h={90} title="ROOT MODULE" sub="angular.module('app', [deps])" color={C.orange} delay={180} />
      <Arrow x1={492} y1={123} x2={540} y2={123} color={C.orange} delay={260} />
      <Box x={540} y={78} w={356} h={90} title="DEPENDENCIES" sub="ngRoute · ngAnimate · ngMessages · app.core" color={C.yellow} delay={300} />

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={24} y={196} width={872} height={86} rx="12" fill="rgba(196,255,0,0.06)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.65" />
        <text x={460} y={222} textAnchor="middle" fill={C.lime} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          MODULE PAR REGISTER
        </text>
        {['.controller()', '.factory() / .service()', '.directive()', '.filter()', '.config() / .run()'].map((t, i) => (
          <text key={t} x={52 + i * 176} y={254} fill={C.dim} fontSize="9.2" fontFamily={FONT}>{t}</text>
        ))}
      </g>

      <Arrow x1={460} y1={282} x2={460} y2={320} color={C.lime} delay={460} />

      <Box x={24} y={320} w={280} h={104} title="CONTROLLER" sub="ng-controller='XCtrl as vm'" lines={['services come through DI', 'vm.data + vm.actions']} color={C.cyan} delay={500} />
      <Box x={330} y={320} w={260} h={104} title="$scope / vm" sub="ViewModel" lines={['properties + functions', 'digest watches it']} color={C.purple} delay={560} />
      <Box x={616} y={320} w={280} h={104} title="VIEW" sub="template" lines={['{{ vm.name }}', 'ng-repeat="s in vm.list"']} color={C.orange} delay={620} />
      <Arrow x1={304} y1={372} x2={330} y2={372} color={C.cyan} delay={660} />
      <Arrow x1={590} y1={372} x2={616} y2={372} color={C.purple} delay={700} />

      <Note x={460} y={452} text="Child scope: every ng-controller, ng-repeat or ng-if creates a new scope (prototype inheritance)" color={C.dim} size={9.4} />
      <Note x={460} y={476} text="DI array notation: ['$scope', '$http', function ('$scope', '$http') {}] — minification-safe" color={C.lime} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.9 — Forms and two-way binding
   ------------------------------------------------------------------ */
export function AngularFormsDiagram() {
  return (
    <Frame
      h={500}
      title="Forms and two-way binding"
      sub="input ↔ ng-model ↔ scope ↔ digest ↔ view"
      label="AngularJS form handling: ng-model binds an input to the scope, the digest cycle syncs both directions, the form controller exposes valid and dirty state, and ng-submit prevents a page reload"
    >
      <Box x={24} y={78} w={190} h={104} title="INPUT" sub="text, select, checkbox" lines={['the user types', 'blur / change']} color={C.cyan} delay={60} />
      <Arrow x1={214} y1={130} x2={262} y2={130} color={C.cyan} delay={140} label="ng-model" />
      <Box x={262} y={78} w={190} h={104} title="SCOPE" sub="vm.name" lines={['model value', '$setViewValue']} color={C.lime} delay={180} />
      <Arrow x1={452} y1={130} x2={500} y2={130} color={C.lime} delay={260} label="digest" />
      <Box x={500} y={78} w={190} h={104} title="VIEW" sub="template" lines={['{{ vm.name }}', 'ng-class, ng-if']} color={C.orange} delay={300} />
      <Arrow x1={690} y1={130} x2={738} y2={130} color={C.orange} delay={380} />
      <Box x={738} y={78} w={158} h={104} title="FORM STATE" sub="form controller" lines={['$valid / $dirty', '$error.required']} color={C.purple} delay={420} />

      <g className="diagram-pop" style={{ animationDelay: '480ms' }}>
        <rect x={24} y={200} width={872} height={98} rx="12" fill="rgba(0,212,255,0.06)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.65" />
        <text x={460} y={224} textAnchor="middle" fill={C.cyan} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          FORM CONTROLLER — name the form, and it appears on the scope
        </text>
        {[
          ['f.$valid', 'the form is valid'],
          ['f.$invalid', 'any mistake'],
          ['f.$dirty', 'touched by the user'],
          ['f.$pristine', 'nothing has changed'],
          ['f.email.$error', 'which mistake'],
          ['f.$submitted', 'submitted'],
        ].map(([t, s], i) => (
          <g key={t}>
            <text x={52 + i * 144} y={256} fill={C.lime} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={52 + i * 144} y={276} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>

      <Box x={24} y={318} w={276} h={100} title="ng-submit" sub="prevents the reload" lines={['save(f) handler', 'form.$invalid check']} color={C.green} delay={540} />
      <Box x={322} y={318} w={276} h={100} title="$setPristine()" sub="reset after submit" lines={['the form looks new', '+ $setUntouched()']} color={C.purple} delay={580} />
      <Box x={620} y={318} w={276} h={100} title="ng-model-options" sub="binding tuning" lines={['debounce: 300', 'updateOn: blur']} color={C.orange} delay={620} />

      <Note x={460} y={450} text="CSS classes automatically: ng-valid, ng-invalid, ng-dirty, ng-touched, ng-pristine" color={C.dim} size={9.4} />
      <Note x={460} y={474} text="bind to an object (vm.form.name) — on a primitive a nested scope shadows it" color={C.lime} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.10 — Validation flow
   ------------------------------------------------------------------ */
export function AngularValidationDiagram() {
  const validators = [
    ['required', 'khaali na ho', C.red],
    ['ng-minlength', 'at least n characters', C.orange],
    ['ng-pattern', 'regexp match', C.cyan],
    ['type="email"', 'email format', C.purple],
    ['min / max', 'number range', C.pink],
    ['ng-required', 'required on the condition', C.teal],
  ];
  return (
    <Frame
      h={500}
      title="Validation flow"
      sub="input → validators → $error + classes → messages → submit gate"
      label="AngularJS validation flow: input passes through validator directives which set error keys and CSS classes, messages appear through ng-messages, and the submit handler blocks an invalid form"
    >
      <Box x={24} y={78} w={170} h={84} title="INPUT" sub="ng-model value" color={C.white} delay={40} />
      <Arrow x1={194} y1={120} x2={242} y2={120} color={C.white} delay={120} />
      <Box x={242} y={78} w={230} h={84} title="VALIDATORS" sub="required, pattern, email..." color={C.orange} delay={160} />
      <Arrow x1={472} y1={120} x2={520} y2={120} color={C.orange} delay={240} />
      <Box x={520} y={78} w={210} h={84} title="$error + CLASSES" sub="required: true" lines={[]} color={C.purple} delay={280} />
      <Arrow x1={730} y1={120} x2={778} y2={120} color={C.purple} delay={360} />
      <Box x={778} y={78} w={118} h={84} title="MESSAGES" sub="ng-messages" color={C.cyan} delay={400} radius={10} />

      {validators.map(([t, s, col], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${440 + i * 60}ms` }}>
          <rect x={24} y={186 + i * 32} width={268} height={26} rx="7" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.1" strokeOpacity="0.5" />
          <text x={38} y={204 + i * 32} fill={col} fontSize="9.1" fontWeight="700" fontFamily={FONT}>{t}</text>
          <text x={170} y={204 + i * 32} fill={C.dim} fontSize="8.6" fontFamily={FONT}>{s}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x={316} y={186} width={580} height={186} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={336} y={210} fill={C.lime} fontSize="9.8" fontWeight="800" fontFamily={FONT}>
          THE RIGHT WAY TO SHOW AN ERROR
        </text>
        <text x={336} y={234} fill={C.dim} fontSize="8.8" fontFamily={FONT}>1. form par novalidate (browser validation off)</text>
        <text x={336} y={252} fill={C.dim} fontSize="8.8" fontFamily={FONT}>2. show the message only when $touched or $submitted</text>
        <text x={336} y={270} fill={C.dim} fontSize="8.8" fontFamily={FONT}>3. an inline message plus a red field border (CSS class)</text>
        <text x={336} y={288} fill={C.dim} fontSize="8.8" fontFamily={FONT}>4. one message at a time with ng-messages</text>
        <text x={336} y={306} fill={C.dim} fontSize="8.8" fontFamily={FONT}>5. submit handler mein form.$invalid check</text>
        <text x={336} y={330} fill={C.pink} fontSize="8.8" fontFamily={FONT}>6. validate on the server too — the client can be bypassed</text>
        <text x={336} y={352} fill={C.faint} fontSize="8.6" fontFamily={FONT}>custom: $validators / $setValidity / $asyncValidators</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '760ms' }}>
        <rect x={24} y={394} width={872} height={52} rx="10" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={460} y={416} textAnchor="middle" fill={C.red} fontSize="9.8" fontWeight="700" fontFamily={FONT}>
          SUBMIT GATE: ng-disabled="f.$invalid" + if (form.$invalid) return;
        </text>
        <text x={460} y={434} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          Client validation is for UX, not security — always check on the server
        </text>
      </g>

      <Note x={460} y={480} text="AngularJS sets the CSS classes (ng-valid / ng-invalid / ng-dirty) itself — styling comes free" color={C.lime} size={9.4} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.11 — Next.js overview
   ------------------------------------------------------------------ */
export function NextjsOverviewDiagram() {
  return (
    <Frame
      h={510}
      title="Next.js — a layer on top of React"
      sub="React = UI · Next.js = routing + rendering + API + optimisation"
      label="Next.js overview: React provides the UI, Next.js adds routing, server side rendering, static generation, API routes and optimisation to produce a production application"
    >
      <Box x={24} y={78} w={200} h={96} title="REACT" sub="UI library" lines={['components + state', 'browser mein render']} color={C.cyan} delay={60} />
      <Arrow x1={224} y1={126} x2={272} y2={126} color={C.cyan} delay={140} label="+" />
      <Box x={272} y={78} w={340} h={96} title="NEXT.JS (Vercel, 2016)" sub="production framework" lines={['routing · SSR/SSG/ISR · API', 'image/font optimisation · SEO']} color={C.orange} delay={180} />
      <Arrow x1={612} y1={126} x2={660} y2={126} color={C.orange} delay={260} label="=" />
      <Box x={660} y={78} w={236} h={96} title="PRODUCTION APP" sub="fast + SEO ready" lines={['server HTML first', 'then hydration (JS)']} color={C.lime} delay={300} />

      <g className="diagram-pop" style={{ animationDelay: '380ms' }}>
        <rect x={24} y={196} width={424} height={148} rx="12" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={236} y={220} textAnchor="middle" fill={C.red} fontSize="10" fontWeight="800" fontFamily={FONT}>PLAIN REACT SPA</text>
        <text x={44} y={244} fill={C.dim} fontSize="9" fontFamily={FONT}>server se khaali HTML: &lt;div id="root"&gt;&lt;/div&gt;</text>
        <text x={44} y={266} fill={C.dim} fontSize="9" fontFamily={FONT}>the crawler finds no content (weak SEO)</text>
        <text x={44} y={288} fill={C.dim} fontSize="9" fontFamily={FONT}>the first paint waits for the JS download</text>
        <text x={44} y={310} fill={C.faint} fontSize="8.8" fontFamily={FONT}>routing, API, optimisation — you wire it all yourself</text>
        <text x={44} y={330} fill={C.faint} fontSize="8.6" fontFamily={FONT}>fine for an internal dashboard, behind login</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x={472} y={196} width={424} height={148} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={684} y={220} textAnchor="middle" fill={C.green} fontSize="10" fontWeight="800" fontFamily={FONT}>NEXT.JS APP</text>
        <text x={492} y={244} fill={C.dim} fontSize="9" fontFamily={FONT}>fully rendered HTML from the server</text>
        <text x={492} y={266} fill={C.dim} fontSize="9" fontFamily={FONT}>SEO strong: HTML + metadata API</text>
        <text x={492} y={288} fill={C.dim} fontSize="9" fontFamily={FONT}>fast first paint, then hydration</text>
        <text x={492} y={310} fill={C.faint} fontSize="8.8" fontFamily={FONT}>file-based routing + API + image/font</text>
        <text x={492} y={330} fill={C.faint} fontSize="8.6" fontFamily={FONT}>best: public site, e-commerce, docs, blog</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={24} y={364} width={872} height={92} rx="12" fill="rgba(170,0,255,0.05)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={460} y={388} textAnchor="middle" fill={C.purple} fontSize="10" fontWeight="800" fontFamily={FONT}>
          RENDERING — choose per page
        </text>
        {[
          ['SSR', 'har request par', 'getServerSideProps'],
          ['SSG', 'build par', 'getStaticProps'],
          ['ISR', 'build + revalidate', 'revalidate: 60'],
          ['CSR', 'browser mein', 'useEffect / client'],
        ].map(([t, s, api], i) => (
          <g key={t}>
            <text x={52 + i * 216} y={414} fill={C.cyan} fontSize="9.6" fontWeight="800" fontFamily={FONT}>{t}</text>
            <text x={52 + i * 216} y={430} fill={C.dim} fontSize="8.7" fontFamily={FONT}>{s}</text>
            <text x={52 + i * 216} y={446} fill={C.faint} fontSize="8.5" fontFamily={FONT}>{api}</text>
          </g>
        ))}
      </g>

      <Note x={460} y={482} text="Next.js = React + routing + rendering + API + optimisation — MIT license, deploy Vercel/Node/Docker" color={C.dim} size={9.2} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   5.12 — Next.js key features
   ------------------------------------------------------------------ */
export function NextjsFeaturesDiagram() {
  const features = [
    ['File-based routing', 'pages/ → route · [id] dynamic', C.cyan],
    ['SSR / SSG / ISR', 'revalidate se static refresh', C.lime],
    ['App Router + RSC', 'server components + streaming', C.orange],
    ['API routes', 'pages/api · app/api/route.js', C.purple],
    ['next/image + font', 'lazy, WebP, no layout shift', C.pink],
    ['Metadata / SEO', 'title, description, OG, sitemap', C.yellow],
    ['Middleware', 'auth, redirect, geo (edge)', C.teal],
    ['Code splitting', 'per route + prefetch', C.green],
  ];
  return (
    <Frame
      h={480}
      title="Next.js key features"
      sub="routing · rendering · API · optimisation · SEO · DX"
      label="Next.js key features: file based routing, server and static rendering with incremental regeneration, app router with server components, API routes, image and font optimisation, metadata for SEO, middleware and automatic code splitting"
    >
      {features.map(([t, s, col], i) => (
        <Box
          key={t}
          x={24 + (i % 4) * 220}
          y={78 + Math.floor(i / 4) * 116}
          w={200}
          h={96}
          title={t}
          sub={s}
          color={col}
          delay={60 + i * 70}
          radius={10}
        />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={24} y={320} width={872} height={80} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={460} y={344} textAnchor="middle" fill={C.cyan} fontSize="9.8" fontWeight="800" fontFamily={FONT}>
          ROUTING (pages router) — the file is the URL
        </text>
        {[
          ['pages/index.js', '/'],
          ['pages/about.js', '/about'],
          ['pages/blog/[slug].js', '/blog/x'],
          ['pages/api/x.js', '/api/x'],
        ].map(([f, u], i) => (
          <g key={f}>
            <text x={52 + i * 216} y={368} fill={C.white} fontSize="8.9" fontFamily={FONT}>{f}</text>
            <text x={52 + i * 216} y={386} fill={C.lime} fontSize="8.7" fontWeight="700" fontFamily={FONT}>{u}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '720ms' }}>
        <rect x={24} y={412} width={872} height={44} rx="10" fill="rgba(196,255,0,0.07)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={460} y={439} textAnchor="middle" fill={C.lime} fontSize="9.4" fontWeight="700" fontFamily={FONT}>
          App Router (13+): layout.js shell · page.js route · loading.js · error.js · metadata
        </text>
      </g>
    </Frame>
  );
}
