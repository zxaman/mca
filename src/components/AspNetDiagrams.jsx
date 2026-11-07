const FONT = "'Segoe UI', system-ui, sans-serif";

// Shared palette for the ASP.NET (Web Technology Unit IV) diagrams.
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

function Arrow({ x1, y1, x2, y2, color = C.lime, dashed = false, delay = 0, label, labelDx = 0, labelDy = -8 }) {
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
   4.1 — How an ASP.NET request is handled
   ------------------------------------------------------------------ */
export function AspNetRequestDiagram() {
  return (
    <Frame
      id="wt4-intro"
      h={520}
      title="ASP.NET request ka raasta"
      sub="browser → IIS → ASP.NET worker → Page object → HTML + ViewState"
      label="ASP.NET request flow: browser sends request to IIS, ASP.NET worker compiles the page, page lifecycle runs and HTML with view state is returned"
    >
      <Box x={24} y={80} w={190} h={112} title="BROWSER" sub="Chrome / Edge" lines={['GET /Default.aspx', 'the form posts back']} color={C.cyan} delay={60} />
      <Arrow x1={214} y1={136} x2={252} y2={136} color={C.cyan} delay={180} label="HTTP" />
      <Box x={252} y={80} w={190} h={112} title="IIS" sub="web server" lines={['.aspx to ASP.NET', 'hands it on (.html static']} color={C.blue} delay={220} />
      <Arrow x1={442} y1={136} x2={480} y2={136} color={C.blue} delay={320} label="route" />
      <Box x={480} y={80} w={200} h={112} title="ASP.NET WORKER" sub="w3wp.exe + CLR" lines={['page compile ya cache', 'se MSIL → JIT → code']} color={C.lime} delay={360} />
      <Arrow x1={680} y1={136} x2={718} y2={136} color={C.lime} delay={460} label="run" />
      <Box x={718} y={80} w={178} h={112} title="PAGE OBJECT" sub="System.Web.UI.Page" lines={['lifecycle events', 'controls + ViewState']} color={C.orange} delay={500} />

      <Arrow x1={807} y1={192} x2={807} y2={236} color={C.orange} delay={600} />

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={24} y={236} width={872} height={96} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.65" />
        <text x={460} y={260} textAnchor="middle" fill={C.purple} fontSize="10.5" fontWeight="800" fontFamily={FONT}>
          PAGE LIFECYCLE — PreInit → Init → Load → control events → PreRender → SaveState → Render → Unload
        </text>
        {[
          ['aspx + code-behind', 'mark-up + .aspx.cs', C.cyan],
          ['compiled once', 'later requests come from cache', C.lime],
          ['HTML + __VIEWSTATE', 'the browser receives only HTML', C.orange],
        ].map(([t, s, col], i) => (
          <g key={t}>
            <text x={60 + i * 300} y={288} fill={col} fontSize="9.8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={60 + i * 300} y={306} fill={C.dim} fontSize="9" fontFamily={FONT}>{s}</text>
          </g>
        ))}
      </g>

      <Arrow x1={460} y1={332} x2={460} y2={366} color={C.green} dashed delay={720} label="response" labelDx={46} labelDy={4} />

      <Box x={230} y={366} w={460} h={74} title="THE BROWSER GETS HTML" sub="CSS, JS, table, form + hidden field" color={C.green} delay={760} />

      <Note x={460} y={470} text="C# / VB code runs only on the server — never sent to the client" color={C.dim} size={10} />
      <Note x={460} y={492} text='Exam line: "ASP.NET = a server-side compiled framework that builds dynamic web pages"' color={C.lime} size={10} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.2 — Environment setup
   ------------------------------------------------------------------ */
export function AspNetSetupDiagram() {
  const tree = [
    ['App_Data', 'database files'],
    ['App_Code', 'shared classes'],
    ['bin', 'compiled DLLs'],
    ['Scripts / Content', 'JS, CSS'],
    ['Site.master', 'layout'],
    ['Default.aspx', 'page mark-up'],
    ['Web.config', 'settings'],
  ];
  return (
    <Frame
      id="wt4-setup"
      h={520}
      title="ASP.NET development environment"
      sub="Visual Studio → new project → IIS Express → project files → browser par run"
      label="ASP.NET environment setup: Visual Studio creates the project, IIS Express hosts it, and folder structure shows App_Data, App_Code, bin, master page and Web.config"
    >
      <Box x={24} y={80} w={200} h={104} title="1. VISUAL STUDIO" sub="2019 / 2022 Community" lines={['ASP.NET + .NET Framework', 'workload install']} color={C.cyan} delay={60} />
      <Arrow x1={224} y1={132} x2={262} y2={132} color={C.cyan} delay={160} />
      <Box x={262} y={80} w={210} h={104} title="2. NEW PROJECT" sub="ASP.NET Web Application" lines={['(.NET Framework)', 'template: Web Forms']} color={C.lime} delay={200} />
      <Arrow x1={472} y1={132} x2={510} y2={132} color={C.lime} delay={300} />
      <Box x={510} y={80} w={180} h={104} title="3. HOST" sub="IIS Express" lines={['runs on Ctrl+F5', 'localhost:44300']} color={C.orange} delay={340} />
      <Arrow x1={690} y1={132} x2={728} y2={132} color={C.orange} delay={440} />
      <Box x={728} y={80} w={168} h={104} title="4. BROWSER" sub="rendered page" lines={['HTML output', 'debug breakpoint']} color={C.green} delay={480} />

      <g className="diagram-pop" style={{ animationDelay: '540ms' }}>
        <rect x={24} y={216} width={420} height={228} rx="12" fill="rgba(255,255,255,0.03)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.7" />
        <text x={234} y={242} textAnchor="middle" fill={C.purple} fontSize="10.5" fontWeight="800" fontFamily={FONT}>
          PROJECT STRUCTURE
        </text>
        {tree.map(([name, desc], i) => (
          <g key={name}>
            <text x={48} y={272 + i * 24} fill={C.white} fontSize="9.6" fontFamily={FONT}>{name}</text>
            <text x={196} y={272 + i * 24} fill={C.faint} fontSize="9" fontFamily={FONT}>— {desc}</text>
          </g>
        ))}
      </g>

      <Box x={468} y={216} w={428} h={104} title="WEB.CONFIG — site ka control panel" sub="XML configuration file" lines={['connectionStrings, appSettings, system.web (auth, session, errors)']} color={C.cyan} delay={600} />
      <Box x={468} y={340} w={428} h={104} title="LOCAL IIS (like production)" sub="Windows feature: Internet Information Services" lines={['application pool + site binding banayo', 'then open http://localhost/MyApp']} color={C.orange} delay={660} />

      <Note x={460} y={478} text="Required: .NET Framework 4.x SDK, the IIS feature (optional), SQL Server (for the database topics)" color={C.dim} size={9.6} />
      <Note x={460} y={500} text="Web Forms runs only on .NET Framework — ASP.NET Core has MVC, Razor Pages and Blazor" color={C.pink} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.3 — Web Forms: page + code-behind + postback
   ------------------------------------------------------------------ */
export function WebFormsDiagram() {
  return (
    <Frame
      id="wt4-webforms"
      h={520}
      title="Web Forms — page, code-behind and postback"
      sub=".aspx markup and the .aspx.cs class are joined by the @Page directive"
      label="ASP.NET Web Forms structure: aspx mark-up and code-behind class joined by the Page directive, with first request and postback flows"
    >
      <Box x={40} y={78} w={330} h={150} title="Register.aspx (mark-up)" sub="HTML + server controls" lines={['<asp:TextBox ID="txtName" />', '<asp:Button OnClick="btnSave_Click" />', 'runat="server" har control par']} color={C.cyan} delay={60} />
      <Box x={550} y={78} w={330} h={150} title="Register.aspx.cs (code-behind)" sub="class Register : System.Web.UI.Page" lines={['Page_Load — IsPostBack check', 'btnSave_Click(...) — event handler', 'lblMsg.Text = "Saved"']} color={C.orange} delay={180} />
      <Arrow x1={370} y1={130} x2={550} y2={130} color={C.lime} delay={280} label="<%@ Page Inherits %>" labelDy={-11} />
      <Arrow x1={550} y1={178} x2={370} y2={178} color={C.purple} delay={380} label="rendered HTML + ViewState" labelDy={20} />

      <g className="diagram-pop" style={{ animationDelay: '460ms' }}>
        <rect x={40} y={256} width={840} height={70} rx="12" fill="rgba(0,212,255,0.06)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={60} y={282} fill={C.cyan} fontSize="10" fontWeight="800" fontFamily={FONT}>FIRST REQUEST — GET /Register.aspx</text>
        <text x={60} y={306} fill={C.dim} fontSize="9.4" fontFamily={FONT}>IsPostBack = false → set defaults, bind data → HTML + empty ViewState</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={40} y={340} width={840} height={70} rx="12" fill="rgba(255,136,0,0.07)" stroke={C.orange} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={60} y={366} fill={C.orange} fontSize="10" fontWeight="800" fontFamily={FONT}>POSTBACK — POST /Register.aspx (form + __VIEWSTATE)</text>
        <text x={60} y={390} fill={C.dim} fontSize="9.4" fontFamily={FONT}>IsPostBack = true → ViewState restore → Page_Load → btnSave_Click → naya HTML</text>
      </g>

      <Note x={460} y={438} text="Event-driven model: the developer writes only the handler, the framework does the rest" color={C.dim} size={9.8} />
      <Note x={460} y={462} text="AutoPostBack=false (default) · CausesValidation=false (cancel button) · PostBackUrl (cross-page)" color={C.faint} size={9.4} />
      <Note x={460} y={488} text="Web Forms vs MVC: state (ViewState) + server controls + RAD vs stateless + routes + testable" color={C.lime} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.4 — Page life cycle timeline
   ------------------------------------------------------------------ */
export function PageLifecycleDiagram() {
  const stages = [
    ['PreInit', 'master page, theme, IsPostBack'],
    ['Init', 'control tree, UniqueID'],
    ['InitComplete', 'all controls initialised'],
    ['PreLoad', 'ViewState + post data load'],
    ['Load', 'Page_Load runs'],
    ['Control events', 'Click, TextChanged'],
    ['LoadComplete', 'load complete'],
    ['PreRender', 'the last change before render'],
    ['SaveState', 'ViewState serialize'],
    ['Render', 'HTML response'],
    ['Unload', 'cleanup, response ja chuka'],
  ];
  return (
    <Frame
      id="wt4-lifecycle"
      h={560}
      title="ASP.NET Page Life Cycle"
      sub="same order on every request · in a postback, control events come after Load"
      label="ASP.NET page life cycle timeline from PreInit, Init, PreLoad, Load, control events, PreRender, SaveState, Render to Unload"
    >
      <line x1={132} y1={82} x2={132} y2={508} stroke={C.faint} strokeWidth="2" strokeOpacity="0.6" />
      {stages.map(([name, desc], i) => {
        const y = 82 + i * 42;
        const hi = i === 4 || i === 5;
        const col = i === 4 ? C.lime : i === 5 ? C.orange : i === 8 ? C.purple : C.cyan;
        return (
          <g key={name} className="diagram-pop" style={{ animationDelay: `${60 + i * 55}ms` }}>
            <circle cx={132} cy={y} r={hi ? 7 : 5} fill={col} fillOpacity={hi ? 0.95 : 0.7} />
            <text x={104} y={y + 4} textAnchor="end" fill={C.dim} fontSize="9" fontFamily={FONT}>{String(i + 1)}</text>
            <text x={156} y={y + 4} fill={hi ? col : C.white} fontSize="10.4" fontWeight={hi ? 800 : 600} fontFamily={FONT}>{name}</text>
            <text x={302} y={y + 4} fill={C.dim} fontSize="9.3" fontFamily={FONT}>{desc}</text>
            {hi && <rect x={140} y={y - 13} width={460} height={22} rx="6" fill={col} fillOpacity="0.08" />}
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x={620} y={82} width={276} height={188} rx="12" fill="rgba(0,212,255,0.06)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.65" />
        <text x={758} y={106} textAnchor="middle" fill={C.cyan} fontSize="10" fontWeight="800" fontFamily={FONT}>FIRST REQUEST</text>
        {['IsPostBack = false', 'no ViewState', 'no control event', 'bind in Load'].map((t, i) => (
          <text key={t} x={642} y={132 + i * 22} fill={C.dim} fontSize="9.3" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '780ms' }}>
        <rect x={620} y={288} width={276} height={188} rx="12" fill="rgba(255,136,0,0.07)" stroke={C.orange} strokeWidth="1.4" strokeOpacity="0.65" />
        <text x={758} y={312} textAnchor="middle" fill={C.orange} fontSize="10" fontWeight="800" fontFamily={FONT}>POSTBACK</text>
        {['IsPostBack = true', 'ViewState restore (PreLoad)', 'post data load', 'control event after Load'].map((t, i) => (
          <text key={t} x={642} y={338 + i * 22} fill={C.dim} fontSize="9.3" fontFamily={FONT}>• {t}</text>
        ))}
        <text x={642} y={438} fill={C.pink} fontSize="9" fontFamily={FONT}>Dynamic control? Init mein har baar banao</text>
        <text x={642} y={458} fill={C.pink} fontSize="9" fontFamily={FONT}>Redirect? Do it before render</text>
      </g>

      <Note x={460} y={534} text="Exam tip: the control event comes after Load — so do not overwrite the user's selection in Page_Load" color={C.lime} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.5 — Types of server controls
   ------------------------------------------------------------------ */
export function ServerControlsDiagram() {
  const groups = [
    { t: 'HTML CONTROLS', s: 'HtmlControls', ex: ['HtmlInputText', 'HtmlForm'], c: C.cyan, x: 24, y: 84 },
    { t: 'WEB CONTROLS', s: 'WebControls (asp:)', ex: ['TextBox, Label', 'Button, DropDownList'], c: C.lime, x: 322, y: 84 },
    { t: 'VALIDATION', s: 'input check', ex: ['RequiredField', 'Range, Compare'], c: C.orange, x: 620, y: 84 },
    { t: 'DATA CONTROLS', s: 'data se bind', ex: ['GridView, Repeater', 'FormView, DataList'], c: C.purple, x: 24, y: 268 },
    { t: 'USER CONTROLS', s: '.ascx + @Register', ex: ['reusable UI block', 'inside the project'], c: C.pink, x: 322, y: 268 },
    { t: 'CUSTOM CONTROLS', s: 'compiled DLL', ex: ['WebControl se derive', 'toolbox mein add'], c: C.teal, x: 620, y: 268 },
  ];
  return (
    <Frame
      id="wt4-controls"
      h={500}
      title="ASP.NET server controls ke 6 type"
      sub="all run on the server, all render HTML — the difference is ownership and job"
      label="Six families of ASP.NET server controls: HTML, Web, validation, data, user and custom controls with examples"
    >
      {groups.map((g, i) => (
        <Box
          key={g.t}
          x={g.x}
          y={g.y}
          w={276}
          h={140}
          title={g.t}
          sub={g.s}
          lines={g.ex}
          color={g.c}
          delay={60 + i * 90}
        />
      ))}

      <g className="diagram-pop" style={{ animationDelay: '660ms' }}>
        <rect x={24} y={432} width={872} height={46} rx="10" fill="rgba(196,255,0,0.07)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={460} y={460} textAnchor="middle" fill={C.lime} fontSize="9.8" fontWeight="700" fontFamily={FONT}>
          runat="server" + ID = reachable from code-behind · each control keeps its value in ViewState
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.6 — State management overview
   ------------------------------------------------------------------ */
export function StateManagementDiagram() {
  return (
    <Frame
      id="wt4-state"
      h={520}
      title="ASP.NET state management"
      sub="HTTP is stateless — where do we keep the data?"
      label="ASP.NET state management split into client-side techniques such as view state, cookies and query strings, and server-side techniques such as session and application state"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={76} width={424} height={356} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={236} y={102} textAnchor="middle" fill={C.cyan} fontSize="11" fontWeight="800" fontFamily={FONT}>CLIENT-SIDE</text>
        <text x={236} y={122} textAnchor="middle" fill={C.dim} fontSize="9.3" fontFamily={FONT}>data with the browser · in the page, URL or cookie</text>
      </g>
      {[
        ['ViewState', 'page ka hidden field', 'postback values'],
        ['Hidden Field', 'plain text field', 'small data'],
        ['Cookie', '~4 KB browser file', 'theme, remember-me'],
        ['Query String', 'after the ? in the URL', 'id, filter, paging'],
      ].map(([t, s1, s2], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${140 + i * 90}ms` }}>
          <rect x={44} y={140 + i * 70} width={384} height={56} rx="9" fill="rgba(255,255,255,0.03)" stroke={C.cyan} strokeWidth="1.2" strokeOpacity="0.45" />
          <text x={60} y={162 + i * 70} fill={C.white} fontSize="10.2" fontWeight="700" fontFamily={FONT}>{t}</text>
          <text x={60} y={180 + i * 70} fill={C.dim} fontSize="9" fontFamily={FONT}>{s1} · {s2}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x={472} y={76} width={424} height={356} rx="12" fill="rgba(0,230,118,0.05)" stroke={C.green} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={684} y={102} textAnchor="middle" fill={C.green} fontSize="11" fontWeight="800" fontFamily={FONT}>SERVER-SIDE</text>
        <text x={684} y={122} textAnchor="middle" fill={C.dim} fontSize="9.3" fontFamily={FONT}>data on the server · the client gets only the SessionId</text>
      </g>
      {[
        ['Session', 'per user · 20 min timeout', 'login, cart, profile'],
        ['Application', 'all users · until the app restarts', 'counter, config'],
        ['Cache', 'expiry / dependency', 'expensive data'],
      ].map(([t, s1, s2], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${220 + i * 90}ms` }}>
          <rect x={492} y={140 + i * 92} width={384} height={76} rx="9" fill="rgba(255,255,255,0.03)" stroke={C.green} strokeWidth="1.2" strokeOpacity="0.45" />
          <text x={508} y={164 + i * 92} fill={C.white} fontSize="10.2" fontWeight="700" fontFamily={FONT}>{t}</text>
          <text x={508} y={182 + i * 92} fill={C.dim} fontSize="9" fontFamily={FONT}>{s1}</text>
          <text x={508} y={198 + i * 92} fill={C.faint} fontSize="9" fontFamily={FONT}>{s2}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '760ms' }}>
        <rect x={24} y={452} width={872} height={46} rx="10" fill="rgba(255,136,0,0.07)" stroke={C.orange} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={460} y={480} textAnchor="middle" fill={C.orange} fontSize="9.8" fontWeight="700" fontFamily={FONT}>
          Choosing criteria: size · lifetime · security · web farm / restart · per user or global
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.7 — View state round trip
   ------------------------------------------------------------------ */
export function ViewStateDiagram() {
  return (
    <Frame
      id="wt4-viewstate"
      h={520}
      title="View state ka round trip"
      sub="server → Base64 hidden field → browser POST → restore → naya HTML"
      label="View state round trip: control values are serialised into the hidden view state field, posted back by the browser and restored before page load"
    >
      <Box x={24} y={84} w={200} h={116} title="1. CONTROL VALUES" sub="before the page renders" lines={['txtName.Text = "Riya"', 'ddlCity = "PNQ"']} color={C.cyan} delay={60} />
      <Arrow x1={224} y1={142} x2={282} y2={142} color={C.cyan} delay={160} label="serialise" />
      <Box x={282} y={84} w={196} h={116} title="2. BASE64 STRING" sub="LosFormatter" lines={['machine key se MAC', 'chaho to encrypt']} color={C.purple} delay={200} />
      <Arrow x1={478} y1={142} x2={536} y2={142} color={C.purple} delay={300} label="embed" />
      <Box x={536} y={84} w={200} h={116} title="3. HIDDEN FIELD" sub="name: __VIEWSTATE" lines={['in the page HTML', 'the user can see it']} color={C.orange} delay={340} />
      <Arrow x1={736} y1={142} x2={794} y2={142} color={C.orange} delay={440} label="HTML" />
      <Box x={794} y={84} w={102} h={116} title="4. BROWSER" sub="the page reads it" lines={['hidden field', 'sends it']} color={C.green} delay={480} />

      <Arrow x1={845} y1={200} x2={845} y2={244} color={C.green} delay={560} />

      <g className="diagram-pop" style={{ animationDelay: '600ms' }}>
        <rect x={24} y={244} width={872} height={64} rx="12" fill="rgba(0,230,118,0.06)" stroke={C.green} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={460} y={270} textAnchor="middle" fill={C.green} fontSize="10.2" fontWeight="800" fontFamily={FONT}>
          POSTBACK — on a button click the browser POSTs that same __VIEWSTATE back
        </text>
        <text x={460} y={292} textAnchor="middle" fill={C.dim} fontSize="9.4" fontFamily={FONT}>
          the server decodes and verifies the MAC → restores control values (PreLoad) → Page_Load
        </text>
      </g>

      <Arrow x1={460} y1={308} x2={460} y2={352} color={C.lime} dashed delay={700} />

      <g className="diagram-pop" style={{ animationDelay: '740ms' }}>
        <rect x={24} y={352} width={424} height={104} rx="12" fill="rgba(196,255,0,0.06)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.65" />
        <text x={44} y={376} fill={C.lime} fontSize="10" fontWeight="800" fontFamily={FONT}>FAYDE</text>
        {['automatic — no code to write', 'no server memory used', 'MAC se tamper-proof'].map((t, i) => (
          <text key={t} x={44} y={396 + i * 20} fill={C.dim} fontSize="9.2" fontFamily={FONT}>• {t}</text>
        ))}
      </g>
      <g className="diagram-pop" style={{ animationDelay: '800ms' }}>
        <rect x={472} y={352} width={424} height={104} rx="12" fill="rgba(255,82,82,0.07)" stroke={C.red} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={492} y={376} fill={C.red} fontSize="10" fontWeight="800" fontFamily={FONT}>NUKSAAN</text>
        {['the page grows (bandwidth)', 'the client can decode and read it', 'never for secret data'].map((t, i) => (
          <text key={t} x={492} y={396 + i * 20} fill={C.dim} fontSize="9.2" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      <Note x={460} y={486} text="Ways to reduce it: EnableViewState=false · ViewStateMode=Disabled · SessionPageStatePersister" color={C.orange} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.8 — Session vs application state
   ------------------------------------------------------------------ */
export function SessionApplicationDiagram() {
  const users = [
    { n: 'User 1 (Riya)', sid: 'SessionId = A1', d: 'Session["user"] = "riya"', c: C.cyan },
    { n: 'User 2 (Aman)', sid: 'SessionId = B2', d: 'Session["user"] = "aman"', c: C.green },
    { n: 'User 3 (Neha)', sid: 'SessionId = C3', d: 'Session["user"] = "neha"', c: C.orange },
  ];
  return (
    <Frame
      id="wt4-session"
      h={520}
      title="Session vs Application state"
      sub="Session = a box per user · Application = one global box for everyone"
      label="Session state keeps one data box per user keyed by session id, while application state is a single global box shared by all users"
    >
      <text x={150} y={82} textAnchor="middle" fill={C.dim} fontSize="9.6" fontWeight="700" fontFamily={FONT}>USERS (browsers)</text>
      <text x={470} y={82} textAnchor="middle" fill={C.dim} fontSize="9.6" fontWeight="700" fontFamily={FONT}>SERVER — ASP.NET</text>
      <text x={790} y={82} textAnchor="middle" fill={C.dim} fontSize="9.6" fontWeight="700" fontFamily={FONT}>DATA</text>

      {users.map((u, i) => (
        <g key={u.n} className="diagram-pop" style={{ animationDelay: `${80 + i * 110}ms` }}>
          <rect x={30} y={100 + i * 96} width={240} height={72} rx="10" fill={u.c} fillOpacity="0.07" stroke={u.c} strokeWidth="1.4" strokeOpacity="0.7" />
          <text x={150} y={126 + i * 96} textAnchor="middle" fill={C.white} fontSize="10" fontWeight="700" fontFamily={FONT}>{u.n}</text>
          <text x={150} y={146 + i * 96} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>{u.sid}</text>
          <text x={150} y={162 + i * 96} textAnchor="middle" fill={C.faint} fontSize="8.6" fontFamily={FONT}>only the ID in the cookie</text>
          <Arrow x1={270} y1={136 + i * 96} x2={330} y2={136 + i * 96} color={u.c} delay={140 + i * 110} />
          <rect x={330} y={112 + i * 96} width={250} height={48} rx="9" fill={u.c} fillOpacity="0.1" stroke={u.c} strokeWidth="1.3" strokeOpacity="0.6" />
          <text x={455} y={133 + i * 96} textAnchor="middle" fill={u.c} fontSize="9.4" fontWeight="700" fontFamily={FONT}>Session[{i + 1}] own box</text>
          <text x={455} y={150 + i * 96} textAnchor="middle" fill={C.dim} fontSize="8.8" fontFamily={FONT}>{u.d}</text>
          <Arrow x1={580} y1={136 + i * 96} x2={640} y2={136 + i * 96} color={u.c} dashed delay={180 + i * 110} />
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '440ms' }}>
        <rect x={640} y={100} width={250} height={260} rx="12" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={765} y={126} textAnchor="middle" fill={C.red} fontSize="10.2" fontWeight="800" fontFamily={FONT}>APPLICATION (global)</text>
        {['Application["visits"] = 12', 'Application["startTime"]', 'Lock() / UnLock() are required'].map((t, i) => (
          <text key={t} x={660} y={152 + i * 22} fill={C.dim} fontSize="9" fontFamily={FONT}>• {t}</text>
        ))}
        <text x={660} y={232} fill={C.faint} fontSize="8.8" fontFamily={FONT}>every user sees the same value</text>
        <text x={660} y={254} fill={C.faint} fontSize="8.8" fontFamily={FONT}>app pool restart = data gone</text>
        <text x={660} y={276} fill={C.faint} fontSize="8.8" fontFamily={FONT}>Application_Start / End</text>
        <text x={660} y={304} fill={C.pink} fontSize="8.8" fontFamily={FONT}>web farm = per server copy</text>
        <text x={660} y={326} fill={C.pink} fontSize="8.8" fontFamily={FONT}>a DB is better for a global counter</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x={30} y={400} width={860} height={44} rx="10" fill="rgba(0,212,255,0.06)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={460} y={427} textAnchor="middle" fill={C.cyan} fontSize="9.6" fontWeight="700" fontFamily={FONT}>
          Session modes: InProc (default, fast) · StateServer (restart survive) · SQLServer (farm + reliable) · Off
        </text>
      </g>
      <Note x={460} y={472} text="Session timeout 20 min (sliding) · Abandon() ends it · Clear() empties it · Session_End only InProc" color={C.dim} size={9.4} />
      <Note x={460} y={496} text="Per-user data → Session · site-wide counter/config → Application/Cache" color={C.lime} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.9 — Cookies and query strings
   ------------------------------------------------------------------ */
export function CookiesQueryStringDiagram() {
  return (
    <Frame
      id="wt4-cookies"
      h={520}
      title="Cookies vs query string"
      sub="both are client-side — both in the user hands, so no sensitive data"
      label="Cookie round trip through Set-Cookie and Cookie headers compared with a query string carried inside the URL"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={76} width={424} height={228} rx="12" fill="rgba(255,136,0,0.05)" stroke={C.orange} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={236} y={100} textAnchor="middle" fill={C.orange} fontSize="10.5" fontWeight="800" fontFamily={FONT}>COOKIE — a small file in the browser (~4 KB)</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '140ms' }}>
        <rect x={44} y={116} width={150} height={54} rx="8" fill="rgba(255,255,255,0.04)" stroke={C.orange} strokeWidth="1.2" strokeOpacity="0.5" />
        <text x={119} y={138} textAnchor="middle" fill={C.orange} fontSize="9.4" fontWeight="700" fontFamily={FONT}>SERVER</text>
        <text x={119} y={156} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>Response.Cookies</text>
        <Arrow x1={194} y1={132} x2={286} y2={132} color={C.orange} delay={200} label="Set-Cookie" labelDy={-6} />
        <Arrow x1={286} y1={160} x2={194} y2={160} color={C.cyan} delay={280} label="Cookie header" labelDy={21} />
        <rect x={286} y={116} width={142} height={54} rx="8" fill="rgba(255,255,255,0.04)" stroke={C.cyan} strokeWidth="1.2" strokeOpacity="0.5" />
        <text x={357} y={138} textAnchor="middle" fill={C.cyan} fontSize="9.4" fontWeight="700" fontFamily={FONT}>BROWSER</text>
        <text x={357} y={156} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>Request.Cookies</text>
      </g>
      {['Persistent: Expires set (on disk)', 'Session cookie: browser closed = deleted', 'HttpOnly · Secure · SameSite flags'].map((t, i) => (
        <text key={t} x={44} y={196 + i * 20} fill={C.dim} fontSize="9.2" fontFamily={FONT} className="diagram-pop" style={{ animationDelay: `${340 + i * 60}ms` }}>• {t}</text>
      ))}
      <text x={44} y={262} fill={C.pink} fontSize="9" fontFamily={FONT}>Delete = same name + a past expiry</text>

      <g className="diagram-pop" style={{ animationDelay: '100ms' }}>
        <rect x={472} y={76} width={424} height={228} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={684} y={100} textAnchor="middle" fill={C.cyan} fontSize="10.5" fontWeight="800" fontFamily={FONT}>QUERY STRING — URL ka hissa</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '220ms' }}>
        <rect x={492} y={116} width={384} height={58} rx="8" fill="rgba(255,255,255,0.04)" stroke={C.cyan} strokeWidth="1.2" strokeOpacity="0.5" />
        <text x={684} y={140} textAnchor="middle" fill={C.white} fontSize="9.6" fontFamily={FONT}>Result.aspx?roll=21&amp;sem=3</text>
        <text x={684} y={160} textAnchor="middle" fill={C.faint} fontSize="8.6" fontFamily={FONT}>path · ? · key=value · &amp; · key=value</text>
      </g>
      {['Request.QueryString["roll"] → "21"', 'can be bookmarked, shared or emailed', 'URL length limit (~2 KB practical)'].map((t, i) => (
        <text key={t} x={492} y={196 + i * 20} fill={C.dim} fontSize="9.2" fontFamily={FONT} className="diagram-pop" style={{ animationDelay: `${340 + i * 60}ms` }}>• {t}</text>
      ))}
      <text x={492} y={262} fill={C.pink} fontSize="9" fontFamily={FONT}>int.TryParse + a parameterised query are required</text>

      <g className="diagram-pop" style={{ animationDelay: '760ms' }}>
        <rect x={24} y={324} width={872} height={136} rx="12" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.5" strokeOpacity="0.6" />
        <text x={460} y={350} textAnchor="middle" fill={C.red} fontSize="10.2" fontWeight="800" fontFamily={FONT}>SENSITIVE DATA NEVER — the user can change it and it reaches the logs too</text>
        {[
          'password / token / role / price',
          'validate every value (type, length, allowed)',
          'a parameterised query for SQL',
        ].map((t, i) => (
          <text key={t} x={60} y={374 + i * 20} fill={C.dim} fontSize="9.2" fontFamily={FONT}>• {t}</text>
        ))}
        {[
          'encrypt a small payload (MachineKey.Protect)',
          'encode the output (XSS defence)',
          'cookie: HttpOnly + Secure lagao',
        ].map((t, i) => (
          <text key={t} x={492} y={374 + i * 20} fill={C.dim} fontSize="9.2" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      <Note x={460} y={492} text="to share it → query string · to remember it in the browser → cookie" color={C.lime} size={9.8} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.10 — Response.Redirect vs Server.Transfer
   ------------------------------------------------------------------ */
export function RedirectTransferDiagram() {
  return (
    <Frame
      id="wt4-transfer"
      h={520}
      title="Response.Redirect vs Server.Transfer"
      sub="redirect tells the browser · transfer happens inside the server"
      label="Response.Redirect sends a 302 to the browser which makes a fresh request and changes the URL, while Server.Transfer executes another page on the same request keeping the URL"
    >
      <g className="diagram-pop" style={{ animationDelay: '60ms' }}>
        <rect x={24} y={76} width={872} height={160} rx="12" fill="rgba(0,212,255,0.05)" stroke={C.cyan} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={44} y={102} fill={C.cyan} fontSize="10.4" fontWeight="800" fontFamily={FONT}>RESPONSE.REDIRECT — 2 requests</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '160ms' }}>
        <rect x={44} y={118} width={140} height={56} rx="8" fill="rgba(255,255,255,0.04)" stroke={C.cyan} strokeWidth="1.2" strokeOpacity="0.5" />
        <text x={114} y={142} textAnchor="middle" fill={C.white} fontSize="9.4" fontWeight="700" fontFamily={FONT}>BROWSER</text>
        <text x={114} y={160} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>/Login.aspx</text>
        <Arrow x1={184} y1={132} x2={256} y2={132} color={C.cyan} delay={220} label="1. POST" labelDy={-6} />
        <rect x={256} y={118} width={150} height={56} rx="8" fill="rgba(255,255,255,0.04)" stroke={C.cyan} strokeWidth="1.2" strokeOpacity="0.5" />
        <text x={331} y={142} textAnchor="middle" fill={C.white} fontSize="9.4" fontWeight="700" fontFamily={FONT}>SERVER</text>
        <text x={331} y={160} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>302 + Location</text>
        <Arrow x1={406} y1={146} x2={478} y2={146} color={C.orange} delay={300} label="2. 302" labelDy={16} />
        <rect x={478} y={118} width={150} height={56} rx="8" fill="rgba(255,136,0,0.08)" stroke={C.orange} strokeWidth="1.2" strokeOpacity="0.6" />
        <text x={553} y={142} textAnchor="middle" fill={C.orange} fontSize="9.4" fontWeight="700" fontFamily={FONT}>BROWSER</text>
        <text x={553} y={160} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>opens a new URL</text>
        <Arrow x1={628} y1={132} x2={700} y2={132} color={C.green} delay={380} label="3. GET" labelDy={-6} />
        <rect x={700} y={118} width={176} height={56} rx="8" fill="rgba(0,230,118,0.07)" stroke={C.green} strokeWidth="1.2" strokeOpacity="0.6" />
        <text x={788} y={142} textAnchor="middle" fill={C.green} fontSize="9.4" fontWeight="700" fontFamily={FONT}>Dashboard.aspx</text>
        <text x={788} y={160} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>the URL bar changed</text>
      </g>
      <text x={44} y={212} fill={C.faint} fontSize="9" fontFamily={FONT}>any site · good SEO · refresh safe · mind ThreadAbortException</text>

      <g className="diagram-pop" style={{ animationDelay: '80ms' }}>
        <rect x={24} y={248} width={872} height={160} rx="12" fill="rgba(255,136,0,0.05)" stroke={C.orange} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={44} y={274} fill={C.orange} fontSize="10.4" fontWeight="800" fontFamily={FONT}>SERVER.TRANSFER — 1 request, inside the server</text>
      </g>
      <g className="diagram-pop" style={{ animationDelay: '180ms' }}>
        <rect x={44} y={290} width={140} height={56} rx="8" fill="rgba(255,255,255,0.04)" stroke={C.orange} strokeWidth="1.2" strokeOpacity="0.5" />
        <text x={114} y={314} textAnchor="middle" fill={C.white} fontSize="9.4" fontWeight="700" fontFamily={FONT}>BROWSER</text>
        <text x={114} y={332} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>/Default.aspx</text>
        <Arrow x1={184} y1={318} x2={256} y2={318} color={C.orange} delay={240} label="ek request" labelDy={-6} />
        <rect x={256} y={282} width={330} height={72} rx="8" fill="rgba(255,136,0,0.07)" stroke={C.orange} strokeWidth="1.2" strokeOpacity="0.6" />
        <text x={421} y={304} textAnchor="middle" fill={C.white} fontSize="9.4" fontWeight="700" fontFamily={FONT}>SERVER — same request</text>
        <text x={421} y={322} textAnchor="middle" fill={C.dim} fontSize="8.8" fontFamily={FONT}>Default.aspx → Server.Transfer("Welcome.aspx")</text>
        <text x={421} y={340} textAnchor="middle" fill={C.faint} fontSize="8.6" fontFamily={FONT}>Context.Items / preserveForm se data</text>
        <Arrow x1={586} y1={318} x2={658} y2={318} color={C.green} delay={320} label="HTML" labelDy={-6} />
        <rect x={658} y={290} width={218} height={56} rx="8" fill="rgba(0,230,118,0.07)" stroke={C.green} strokeWidth="1.2" strokeOpacity="0.6" />
        <text x={767} y={314} textAnchor="middle" fill={C.green} fontSize="9.4" fontWeight="700" fontFamily={FONT}>Welcome.aspx ka HTML</text>
        <text x={767} y={332} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>the URL bar stays the same</text>
      </g>
      <text x={44} y={384} fill={C.faint} fontSize="9" fontFamily={FONT}>same server only · Server.Execute = run it and come back (like an include)</text>

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={24} y={420} width={872} height={58} rx="10" fill="rgba(186,0,255,0.07)" stroke={C.purple} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={460} y={444} textAnchor="middle" fill={C.purple} fontSize="9.8" fontWeight="700" fontFamily={FONT}>
          Data bhejne ke tarike: Session · Context.Items · query string (redirect) · PreviousPage (cross-page post)
        </text>
        <text x={460} y={466} textAnchor="middle" fill={C.dim} fontSize="9" fontFamily={FONT}>
          return after Redirect or pass endResponse=false — else ThreadAbortException
        </text>
      </g>
      <Note x={460} y={500} text="Public navigation → Redirect · internal page switch / URL chhupana → Transfer" color={C.lime} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.11 — ADO.NET architecture
   ------------------------------------------------------------------ */
export function AdoNetDiagram() {
  return (
    <Frame
      id="wt4-adonet"
      h={520}
      title="ADO.NET architecture"
      sub="connected (DataReader) and disconnected (DataSet) — both on one provider"
      label="ADO.NET architecture: application talks to a data provider made of connection and command, which feeds either a data reader in the connected model or a data adapter and data set in the disconnected model"
    >
      <Box x={24} y={80} w={180} h={92} title="ASP.NET PAGE" sub="GridView / code-behind" color={C.cyan} delay={60} />
      <Arrow x1={204} y1={126} x2={262} y2={126} color={C.cyan} delay={160} label="ADO.NET" />

      <g className="diagram-pop" style={{ animationDelay: '200ms' }}>
        <rect x={262} y={80} width={250} height={92} rx="12" fill="rgba(196,255,0,0.06)" stroke={C.lime} strokeWidth="1.5" strokeOpacity="0.7" />
        <text x={387} y={104} textAnchor="middle" fill={C.lime} fontSize="10.2" fontWeight="800" fontFamily={FONT}>DATA PROVIDER</text>
        <text x={387} y={124} textAnchor="middle" fill={C.dim} fontSize="9.2" fontFamily={FONT}>SqlClient · OleDb · Odbc</text>
        <text x={387} y={144} textAnchor="middle" fill={C.faint} fontSize="8.8" fontFamily={FONT}>Connection + Command + DataAdapter</text>
        <text x={387} y={162} textAnchor="middle" fill={C.faint} fontSize="8.8" fontFamily={FONT}>+ DataReader</text>
      </g>

      <Arrow x1={512} y1={108} x2={572} y2={108} color={C.cyan} delay={280} label="connected" labelDy={-6} />
      <Arrow x1={512} y1={146} x2={572} y2={146} color={C.orange} delay={340} label="disconnected" labelDy={18} />

      <Box x={572} y={80} w={150} h={56} title="DataReader" sub="forward-only stream" color={C.cyan} delay={380} radius={10} />
      <Box x={572} y={146} w={150} h={56} title="DataAdapter" sub="fill + update" color={C.orange} delay={420} radius={10} />
      <Arrow x1={722} y1={174} x2={772} y2={174} color={C.orange} delay={500} />
      <Box x={772} y={140} w={124} h={70} title="DataSet" sub="memory tables" color={C.purple} delay={540} radius={10} />

      <Arrow x1={647} y1={202} x2={647} y2={252} color={C.dim} delay={580} dashed />
      <Arrow x1={834} y1={210} x2={834} y2={252} color={C.dim} delay={600} dashed />

      <Box x={24} y={252} w={872} h={92} title="DATABASE" sub="SQL Server / Oracle / Access" lines={['SELECT · INSERT · UPDATE · DELETE · stored procedures']} color={C.green} delay={640} />

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x={24} y={372} width={424} height={104} rx="12" fill="rgba(0,212,255,0.06)" stroke={C.cyan} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={44} y={396} fill={C.cyan} fontSize="10" fontWeight="800" fontFamily={FONT}>CONNECTED</text>
        {['the connection stays open', 'fast, low memory', 'ExecuteReader() → while(rd.Read())'].map((t, i) => (
          <text key={t} x={44} y={416 + i * 20} fill={C.dim} fontSize="9.2" fontFamily={FONT}>• {t}</text>
        ))}
      </g>
      <g className="diagram-pop" style={{ animationDelay: '760ms' }}>
        <rect x={472} y={372} width={424} height={104} rx="12" fill="rgba(255,136,0,0.06)" stroke={C.orange} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={492} y={396} fill={C.orange} fontSize="10" fontWeight="800" fontFamily={FONT}>DISCONNECTED</text>
        {['connection closed after Fill()', 'several tables, offline edit', 'the favourite for web apps'].map((t, i) => (
          <text key={t} x={492} y={416 + i * 20} fill={C.dim} fontSize="9.2" fontFamily={FONT}>• {t}</text>
        ))}
      </g>
      <Note x={460} y={502} text="ExecuteNonQuery = rows affected · ExecuteScalar = single value · ExecuteReader = rows" color={C.lime} size={9.6} bold />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.12 — Database connectivity steps
   ------------------------------------------------------------------ */
export function DbConnectivityDiagram() {
  const steps = [
    ['1', 'using System.Data.SqlClient', 'namespace import'],
    ['2', 'Web.config connectionString', 'server + database + login'],
    ['3', 'SqlConnection(cs)', 'connection object'],
    ['4', 'SqlCommand(sql, con)', 'the query with parameters'],
    ['5', 'con.Open() + Execute...', 'NonQuery / Scalar / Reader'],
    ['6', 'close (using block)', 'pool free + error safe'],
  ];
  return (
    <Frame
      id="wt4-dbconnect"
      h={520}
      title="ASP.NET to the database — 6 steps"
      sub="connection string → connection → command → execute → bind → close"
      label="Six steps of ASP.NET database connectivity from namespace and connection string to connection, command, execution and closing the connection"
    >
      {steps.map(([n, t, d], i) => {
        const y = 80 + i * 62;
        const col = [C.cyan, C.blue, C.lime, C.orange, C.purple, C.green][i];
        return (
          <g key={n} className="diagram-pop" style={{ animationDelay: `${60 + i * 90}ms` }}>
            <circle cx={52} cy={y + 22} r="15" fill={col} fillOpacity="0.16" stroke={col} strokeWidth="1.4" />
            <text x={52} y={y + 27} textAnchor="middle" fill={col} fontSize="11" fontWeight="800" fontFamily={FONT}>{n}</text>
            <rect x={84} y={y} width={420} height={44} rx="9" fill="rgba(255,255,255,0.03)" stroke={col} strokeWidth="1.2" strokeOpacity="0.5" />
            <text x={100} y={y + 20} fill={C.white} fontSize="9.8" fontWeight="700" fontFamily={FONT}>{t}</text>
            <text x={100} y={y + 36} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{d}</text>
            {i < steps.length - 1 && <Arrow x1={52} y1={y + 37} x2={52} y2={y + 62} color={col} delay={80 + i * 90} />}
          </g>
        );
      })}

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={534} y={80} width={362} height={148} rx="12" fill="rgba(255,82,82,0.06)" stroke={C.red} strokeWidth="1.5" strokeOpacity="0.65" />
        <text x={715} y={104} textAnchor="middle" fill={C.red} fontSize="10.2" fontWeight="800" fontFamily={FONT}>WRONG — SQL injection</text>
        <text x={554} y={128} fill={C.dim} fontSize="8.8" fontFamily={FONT}>"SELECT * FROM Student</text>
        <text x={554} y={146} fill={C.dim} fontSize="8.8" fontFamily={FONT}> WHERE Name='" + txtName.Text + "'"</text>
        <text x={554} y={172} fill={C.faint} fontSize="8.6" fontFamily={FONT}>user: ' OR '1'='1  → the whole table</text>
        <text x={554} y={196} fill={C.faint} fontSize="8.6" fontFamily={FONT}>user: '; DROP TABLE ... → data gone</text>
        <text x={554} y={216} fill={C.red} fontSize="8.6" fontFamily={FONT}>string concat = let the attacker write SQL</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '700ms' }}>
        <rect x={534} y={240} width={362} height={148} rx="12" fill="rgba(0,230,118,0.06)" stroke={C.green} strokeWidth="1.5" strokeOpacity="0.65" />
        <text x={715} y={264} textAnchor="middle" fill={C.green} fontSize="10.2" fontWeight="800" fontFamily={FONT}>RIGHT — parameterised</text>
        <text x={554} y={288} fill={C.dim} fontSize="8.8" fontFamily={FONT}>"SELECT * FROM Student</text>
        <text x={554} y={306} fill={C.dim} fontSize="8.8" fontFamily={FONT}> WHERE Name = @name"</text>
        <text x={554} y={330} fill={C.dim} fontSize="8.8" fontFamily={FONT}>cmd.Parameters.AddWithValue(</text>
        <text x={554} y={348} fill={C.dim} fontSize="8.8" fontFamily={FONT}>  "@name", txtName.Text);</text>
        <text x={554} y={372} fill={C.green} fontSize="8.6" fontFamily={FONT}>the value is data, not code — injection blocked</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '760ms' }}>
        <rect x={84} y={452} width={812} height={44} rx="10" fill="rgba(0,212,255,0.06)" stroke={C.cyan} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={490} y={479} textAnchor="middle" fill={C.cyan} fontSize="9.4" fontWeight="700" fontFamily={FONT}>
          GridView bind: gv.DataSource = cmd.ExecuteReader() (ya DataTable) → gv.DataBind() → IsPostBack check
        </text>
      </g>
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.13 — Validation controls flow
   ------------------------------------------------------------------ */
export function ValidationDiagram() {
  const validators = [
    ['RequiredField', 'khaali na ho', C.red],
    ['Range', 'min–max + Type', C.orange],
    ['Compare', 'do value + Operator', C.cyan],
    ['RegularExpression', 'pattern (email)', C.purple],
    ['Custom', 'its own logic', C.pink],
  ];
  return (
    <Frame
      id="wt4-validation"
      h={520}
      title="Validation controls ka flow"
      sub="client-side JavaScript + server-side Page.IsValid — both are required"
      label="Validation flow: user input checked by client-side validators, then again on the server with Page.IsValid before the record is saved, with five validator types listed"
    >
      <Box x={24} y={80} w={190} h={80} title="USER INPUT" sub="textbox, dropdown" color={C.white} delay={60} />
      <Arrow x1={214} y1={120} x2={272} y2={120} color={C.white} delay={140} />
      <Box x={272} y={80} w={210} h={80} title="CLIENT-SIDE CHECK" sub="JavaScript (EnableClientScript)" color={C.cyan} delay={180} />
      <Arrow x1={482} y1={120} x2={540} y2={120} color={C.cyan} delay={260} label="valid" labelDy={-6} />
      <Box x={540} y={80} w={200} h={80} title="SERVER CHECK" sub="Page.IsValid" color={C.lime} delay={300} />
      <Arrow x1={740} y1={120} x2={798} y2={120} color={C.lime} delay={380} label="save" labelDy={-6} />
      <Box x={798} y={80} w={98} h={80} title="DATABASE" sub="insert" color={C.green} delay={420} radius={10} />

      <Arrow x1={377} y1={160} x2={377} y2={196} color={C.red} dashed delay={480} label="invalid" labelDx={34} labelDy={4} />
      <g className="diagram-pop" style={{ animationDelay: '500ms' }}>
        <rect x={272} y={196} width={210} height={46} rx="9" fill="rgba(255,82,82,0.08)" stroke={C.red} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={377} y={216} textAnchor="middle" fill={C.red} fontSize="9.2" fontWeight="700" fontFamily={FONT}>ErrorMessage + Text</text>
        <text x={377} y={232} textAnchor="middle" fill={C.dim} fontSize="8.6" fontFamily={FONT}>the page is not submitted</text>
      </g>

      <text x={158} y={286} textAnchor="middle" fill={C.dim} fontSize="9.6" fontWeight="700" fontFamily={FONT}>VALIDATION CONTROLS</text>
      {validators.map(([t, s, col], i) => (
        <g key={t} className="diagram-pop" style={{ animationDelay: `${560 + i * 80}ms` }}>
          <rect x={24} y={300 + i * 34} width={268} height={28} rx="8" fill={col} fillOpacity="0.07" stroke={col} strokeWidth="1.1" strokeOpacity="0.5" />
          <text x={38} y={318 + i * 34} fill={col} fontSize="9.2" fontWeight="700" fontFamily={FONT}>{t}</text>
          <text x={176} y={318 + i * 34} fill={C.dim} fontSize="8.8" fontFamily={FONT}>{s}</text>
        </g>
      ))}

      <g className="diagram-pop" style={{ animationDelay: '640ms' }}>
        <rect x={320} y={300} width={576} height={170} rx="12" fill="rgba(196,255,0,0.05)" stroke={C.lime} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={340} y={324} fill={C.lime} fontSize="10" fontWeight="800" fontFamily={FONT}>POINTS TO REMEMBER</text>
        {[
          'ControlToValidate — which input to check',
          'next to the text control · ErrorMessage in the summary',
          'Display: Static / Dynamic / None',
          'ValidationGroup — only the controls of one button',
          'CausesValidation=false — cancel button',
          'Range/Compare pass an empty field → add RequiredField separately',
          'Operator=DataTypeCheck — type check only',
          'Page.IsValid on the server — client script can be bypassed',
        ].map((t, i) => (
          <text key={t} x={340} y={348 + i * 16} fill={C.dim} fontSize="8.8" fontFamily={FONT}>• {t}</text>
        ))}
      </g>
      <Note x={460} y={500} text="ValidationSummary = all errors in one place (a list or popup, ShowMessageBox)" color={C.orange} size={9.4} />
    </Frame>
  );
}

/* ------------------------------------------------------------------
   4.14 — ASP.NET security
   ------------------------------------------------------------------ */
export function SecurityDiagram() {
  return (
    <Frame
      id="wt4-security"
      h={520}
      title="ASP.NET security — authentication + authorisation"
      sub="first who are you, then what may you do"
      label="ASP.NET security flow: request hits authentication which proves identity, then authorization decides access, and the resource returns the page, 401 or 403; modes and attacks are listed"
    >
      <Box x={24} y={80} w={180} h={86} title="REQUEST" sub="from the browser" color={C.white} delay={60} />
      <Arrow x1={204} y1={123} x2={252} y2={123} color={C.white} delay={140} />
      <Box x={252} y={80} w={220} h={86} title="AUTHENTICATION" sub="who are you?" lines={['Windows · Forms · Passport · None']} color={C.cyan} delay={180} />
      <Arrow x1={472} y1={123} x2={520} y2={123} color={C.cyan} delay={260} label="identity" />
      <Box x={520} y={80} w={220} h={86} title="AUTHORIZATION" sub="what may you do?" lines={['rules + roles (IsInRole)']} color={C.orange} delay={300} />
      <Arrow x1={740} y1={123} x2={788} y2={123} color={C.orange} delay={380} />
      <Box x={788} y={80} w={108} h={86} title="RESOURCE" sub="page" color={C.green} delay={420} radius={10} />

      <Arrow x1={362} y1={166} x2={362} y2={202} color={C.red} dashed delay={500} />
      <g className="diagram-pop" style={{ animationDelay: '520ms' }}>
        <rect x={252} y={202} width={220} height={38} rx="8" fill="rgba(255,82,82,0.08)" stroke={C.red} strokeWidth="1.2" strokeOpacity="0.6" />
        <text x={362} y={226} textAnchor="middle" fill={C.red} fontSize="9.2" fontWeight="700" fontFamily={FONT}>401 / login page</text>
      </g>
      <Arrow x1={630} y1={166} x2={630} y2={202} color={C.red} dashed delay={540} />
      <g className="diagram-pop" style={{ animationDelay: '560ms' }}>
        <rect x={520} y={202} width={220} height={38} rx="8" fill="rgba(255,82,82,0.08)" stroke={C.red} strokeWidth="1.2" strokeOpacity="0.6" />
        <text x={630} y={226} textAnchor="middle" fill={C.red} fontSize="9.2" fontWeight="700" fontFamily={FONT}>403 access denied</text>
      </g>

      <g className="diagram-pop" style={{ animationDelay: '620ms' }}>
        <rect x={24} y={264} width={424} height={176} rx="12" fill="rgba(0,188,212,0.05)" stroke={C.teal} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={44} y={288} fill={C.teal} fontSize="10" fontWeight="800" fontFamily={FONT}>FORMS AUTHENTICATION (internet)</text>
        {[
          'Web.config: mode="Forms", loginUrl',
          'deny users="?" → anonymous block',
          'RedirectFromLoginPage se ticket',
          'User.Identity.IsAuthenticated',
          'FormsAuthentication.SignOut()',
          'protection="All" → encrypt + MAC',
        ].map((t, i) => (
          <text key={t} x={44} y={312 + i * 20} fill={C.dim} fontSize="9" fontFamily={FONT}>• {t}</text>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '680ms' }}>
        <rect x={472} y={264} width={424} height={176} rx="12" fill="rgba(255,82,82,0.05)" stroke={C.red} strokeWidth="1.4" strokeOpacity="0.6" />
        <text x={492} y={288} fill={C.red} fontSize="10" fontWeight="800" fontFamily={FONT}>ATTACK → BACHAV</text>
        {[
          ['SQL injection', 'parameterised query'],
          ['XSS', 'HtmlEncode + ValidateRequest'],
          ['CSRF', 'ViewStateUserKey + token'],
          ['Session hijack', 'HTTPS + HttpOnly/Secure'],
          ['Brute force', 'lockout + captcha'],
          ['Info disclosure', 'customErrors = On'],
        ].map(([a, b], i) => (
          <g key={a}>
            <text x={492} y={312 + i * 20} fill={C.white} fontSize="8.8" fontFamily={FONT}>{a}</text>
            <text x={600} y={312 + i * 20} fill={C.dim} fontSize="8.8" fontFamily={FONT}>→ {b}</text>
          </g>
        ))}
      </g>

      <g className="diagram-pop" style={{ animationDelay: '740ms' }}>
        <rect x={24} y={456} width={872} height={44} rx="10" fill="rgba(196,255,0,0.07)" stroke={C.lime} strokeWidth="1.3" strokeOpacity="0.6" />
        <text x={460} y={483} textAnchor="middle" fill={C.lime} fontSize="9.6" fontWeight="700" fontFamily={FONT}>
          CIA: confidentiality (HTTPS/encryption) · integrity (hash/MAC) · availability (DoS se bachav, backup)
        </text>
      </g>
    </Frame>
  );
}
