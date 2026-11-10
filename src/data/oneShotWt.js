// One Shot revision notes — Web Technology.

export const wtOneShot = {
  subjectId: 'web-technology',
  code: 'WT',
  accent: '#0047ff',
  blurb: 'HTML/XML se JavaScript, PHP, ASP.NET aur AngularJS/Next.js tak',
  units: [
    {
      id: 'unit-1',
      number: '1',
      name: 'HTML and XML',
      tagline: 'Document structure se forms, CSS aur XML/XSLT tak',
      overview: 'Web ka base: page ka dhaancha (HTML), uska look (CSS), aur data ka format (XML). Ye teeno aage ke saare units ka foundation hain.',
      flow: [
        { title: 'HTML skeleton', hint: 'tags, elements, links' },
        { title: 'Forms aur tables', hint: 'user input ka raasta' },
        { title: 'CSS', hint: 'structure ko look dena' },
        { title: 'HTML5', hint: 'naye semantic tags aur media' },
        { title: 'XML aur XSLT', hint: 'data alag, presentation alag' },
      ],
      minutes: 20,
      sections: [
        {
          title: '1.1–1.4 · Web technology, internet vs WWW, web server, planning',
          simple: 'Simple mein: internet sadak hai, WWW us sadak par chalti bus hai.',
          example: 'Chrome mein flipkart.com khola, request server gayi, server ne HTML bheja, browser ne dikhaya — yahi poora system web technology hai.',
          text: `- **Web technology:** client + server + unke beech communication ka poora system (browser → request → server → response).
- **Internet vs WWW:** internet = infrastructure (hardware + protocols, TCP/IP); WWW = us par chalti service (documents + HTTP). **WWW ⊂ Internet** — internet ke bina WWW nahi, ulta possible (email, FTP).
- **Web server:** static page par file bhejta hai; dynamic page par application server HTML generate karta hai (PHP/ASP.NET/Node).
- **Status codes:** 200 OK, 301/302 redirect, 304 not modified, 400 bad request, 401 unauthorised, 403 forbidden, 404 not found, 500 server error.
- **Planning ke issues:** purpose, audience, content, navigation, layout, responsiveness, accessibility, SEO, hosting, maintenance — baad mein fix karna 5× mehnga.`,
          diagram: 'web-server',
          caption: 'Web server ka flow — browser request, server response, static vs dynamic page.',
        },
        {
          title: '1.5–1.9 · HTML document, elements, fonts, links, frames',
          simple: 'Simple mein: HTML page ka skeleton hai; tags batate hain kaunsa part heading hai, kaunsa paragraph, kaunsa link.',
          example: 'h1 se heading, a href se link, img se photo, div se dabba. Browser inhi tags ko design mein badal deta hai.',
          text: `- **Structure:** \`<!DOCTYPE html> → <html> → <head> (meta, title, css) + <body> (visible content)\`.
- **Elements:** h1–h6 (ek hi h1 per page), p, br (empty tag), hr, pre, div, span, \`&amp;nbsp;\` (entity).
- **Attributes:** id (unique), class (multiple), style, title, alt, src, href, target.
- **Links:** internal, external, anchor (\`#section\`), mailto, tel; target=\\"_blank\\" naya tab.
- **Images:** \`<img src alt width height>\` — alt accessibility + SEO ke liye zaroori.
- **Frames:** \`<frameset>/<frame>\` HTML5 mein deprecated (screen reader/mobile par fail, bookmark/SEO toot ta hai); aaj \`<iframe>\` sirf embedded third-party content ke liye + CSS layout.
- **CSS 3 ways:** inline (sirf us element), internal (\`<style>\` head mein, ek page), external (\`.css\` file, poori site + cache).
  - Priority: inline > internal > external (jab tak !important na ho); specificity: id > class > tag.`,
          diagram: 'html-structure',
          caption: 'HTML document ka tree — head aur body ke elements.',
        },
        {
          title: '1.10–1.13 · Lists, tables, images, forms',
          simple: 'Simple mein: form page ka wo hissa hai jahan user likhta hai aur data server ko jaata hai.',
          example: 'Login form: email aur password POST se server gaye, server ne check kiya, phir dashboard ya error. Table marks dikhane ke liye, list menu ke liye.',
          text: `- **Lists:** ul (bullet), ol (numbered, type/start), dl (term + definition), nesting allowed.
- **Tables:** table > caption, thead, tbody, tr, th, td; attributes colspan, rowspan; aaj styling CSS se.
- **Forms:** \`<form action method>\`; inputs — text, password, email, number, radio, checkbox, file, date, submit, reset; select/option, textarea, label, fieldset, button.
  - **GET vs POST:** GET URL mein (bookmark, limit ~2 KB), POST body mein (password/sensitive, no visible limit); dono par trust nahi — server validation zaroori.
- **HTML5 naya:** semantic tags (header, nav, main, section, article, aside, footer), audio/video, canvas, svg, input types (email, date, range), placeholder, required, localStorage/sessionStorage, geolocation.`,
          diagram: 'html-elements',
          caption: 'HTML5 elements — semantic tags, media, forms aur canvas.',
        },
        {
          title: '1.14–1.15 · HTML vs HTML5, CSS basics',
          simple: 'Simple mein: HTML structure hai, CSS kapde — color, size aur layout.',
          example: 'Same HTML par ek CSS dark theme, doosri light theme bana deti hai. .price { color: red } har price ko laal kar deta hai.',
          text: `| Point | HTML | HTML5 |
|---|---|---|
| Doctype | long SGML | \`<!DOCTYPE html>\` |
| Semantics | div/span | header, nav, article |
| Media | plugin (Flash) | audio, video native |
| Storage | cookies | localStorage/sessionStorage |
| Forms | limited types | email, date, range, validation |
| Graphics | — | canvas, SVG |

- **CSS selectors:** element, .class, #id, \`*\`, descendant (div p), child (div > p), attribute ([type=text]), pseudo-class (:hover, :nth-child), pseudo-element (::before).
- **Box model:** content → padding → border → margin; \`box-sizing: border-box\` se width include.`,
          diagram: 'css-selectors',
          caption: 'CSS selectors aur specificity ka order.',
        },
        {
          title: '1.16–1.19 · XML, components, DTD/Schema, namespaces + XSLT',
          simple: 'Simple mein: HTML dikhane ke liye hai, XML data rakhne aur samajhne ke liye — dono tag use karte hain par maksad alag.',
          example: 'student, name aur marks wale XML ko koi app padh ke table bana sakti hai; XSLT se usi XML ko HTML bana dete hain.',
          text: `- **XML:** data rakhta hai (structure + meaning), HTML page dikhata hai (presentation). Case-sensitive, tags band karna zaroori, ek root.
- **Components:** prolog (\`<?xml version=\\"1.0\\"?>\`), elements, attributes, text, comments, CDATA, entities.
- **Well-formed vs valid:** well-formed = syntax sahi; valid = DTD/Schema ke according bhi sahi.
- **DTD vs XSD:** DTD simple, limited types, no namespaces; XSD XML-based, data types, namespaces, zyada powerful.
- **Namespaces:** \`xmlns:t=\\"uri\\"\` — same tag name ka conflict khatam (HTML vs custom).
- **XSLT:** XML → HTML/text transform; XPath se nodes select; template match se output.
  - XSL = XSLT + XPath + XSL-FO (print formatting).

**Exam line:** XML data + meaning, HTML data + look; XSLT XML ko presentable banata hai.`,
          diagram: 'xml-tree',
          caption: 'XML document ka tree — root, elements, attributes aur text nodes.',
        },
      ],
      lastMinute: [
        'Internet vs WWW — "WWW ⊂ Internet" ke saath likho.',
        'HTML vs HTML5 ke 5 differences (doctype, semantics, media, storage, forms).',
        'GET vs POST table + server-side validation kyun.',
        'Well-formed vs valid, DTD vs XSD, XSLT ka kaam.',
      ],
    },
    {
      id: 'unit-2',
      number: '2',
      name: 'JavaScript',
      tagline: 'Variables se async tak — jo bhi JS mein poocha jaata hai',
      overview: 'Browser ke andar ki language JavaScript: variables se logic, loops, functions, objects aur arrays, aur aakhir mein async ka event loop. Yahi client-side interactivity ka engine hai.',
      flow: [
        { title: 'JS kahan chalti', hint: 'browser ke andar' },
        { title: 'Variables aur logic', hint: 'if, switch, loops' },
        { title: 'Functions aur events', hint: 'click par kaam' },
        { title: 'Objects aur arrays', hint: 'data ek jagah' },
        { title: 'Async', hint: 'event loop aur promises' },
      ],
      minutes: 22,
      sections: [
        {
          title: '2.1–2.3 · Role, inclusion, variables & types',
          simple: 'Simple mein: JavaScript browser ke andar chalne wali language hai jo page ko zinda karti hai.',
          example: 'Button click par dropdown khulna ya galat email par laal message aana JS hai. const naam = Aman se variable banta hai.',
          text: `- **JS kya karta hai:** client-side scripting — DOM change, validation, events, async calls; browser mein chalti hai, server call har baar nahi.
- **3 tarike:** inline (\`onclick\`), embedded (\`<script>\`), external (\`<script src>\`) — external best (cache + clean HTML).
- **Variables:** \`let\` (reassign), \`const\` (no reassign), \`var\` (function-scoped, avoid).
- **Types:** string, number, boolean, null, undefined, object, symbol, bigint — typeof se pata.
- **Traps:** \`typeof null === \\"object\\"\`, \`typeof [] === \\"object\\"\`, \`0.1 + 0.2 = 0.30000000000000004\`.
- **Hoisting:** var declaration upar uthta hai (value nahi), let/const temporal dead zone.
| Keyword | Scope | Reassign | Hoisting |
|---|---|---|---|
| var | function | haan | undefined tak |
| let | block | haan | TDZ |
| const | block | nahi | TDZ |
`,
          diagram: 'js-types',
          caption: 'JavaScript ke data types aur typeof ka output.',
        },
        {
          title: '2.4–2.5 · Control structures + loops',
          simple: 'Simple mein: condition se faisla hota hai, loop se kaam repeat hota hai.',
          example: 'if (marks >= 40) pass else fail. for loop se 10 students ke marks print — code 10 baar likhna nahi padta.',
          text: `- **if / else if / else**, ternary (\`cond ? a : b\`), \`switch\` (strict ===, break warna fall-through, default).
- **Loops:** for (count known), while (condition pehle), do…while (kam se kam ek baar), for…of (values), for…in (keys), forEach/map (array methods).
- **break** loop se bahar, **continue** current iteration skip.
- **Trap:** while mein update bhoolna = infinite loop.`,
          diagram: 'js-control',
          caption: 'if…else aur switch ka flow, aur loop ke types.',
        },
        {
          title: '2.6–2.9 · Functions, dialogs, cookies, events',
          simple: 'Simple mein: function kaam ka dabba hai jise naam se bulate hain, event ka matlab jab ye ho tab ye karo.',
          example: 'function total(a,b){return a+b} ko kahin bhi total(2,3) se chala lo. Button par click event lagaya to click par function chalta hai.',
          text: `- **Function:** declaration, expression, arrow, parameters + return; default aur rest parameters.
- **Dialogs:** alert (OK), confirm (true/false), prompt (text ya null).
- **Redirect:** \`window.location.href = \\"url\\"\` (history mein rehta) vs \`location.replace()\` (back button hataata).
- **Cookies:** \`document.cookie\` se read/write; attributes — expires/max-age, path, domain, Secure (HTTPS), HttpOnly (JS se hidden), SameSite; limit ~4 KB, har request ke saath jaati hai.
- **Events:** onclick, onchange, onsubmit, onmouseover, onkeyup; \`addEventListener(type, handler)\`.
  - **Capturing** (root → target) aur **bubbling** (target → root); \`stopPropagation()\` bubble rokta hai, \`preventDefault()\` default action.
  - **Event delegation:** parent par ek listener, saare children handle.`,
          diagram: 'js-events',
          caption: 'Event ka safar — capturing neeche, bubbling upar, aur event object.',
        },
        {
          title: '2.10–2.13 · Objects, Number/Math, String, Array, Date',
          simple: 'Simple mein: object ek insaan ki poori detail ek jagah rakhta hai, array list rakhta hai, string text hota hai.',
          example: 'let user = {name: Aman, age: 21} me user.age se age milegi. prices = [100, 250] me reduce se total 350.',
          text: `- **Object:** key: value collection + methods; access dot/bracket; \`this\`; \`new\`; Object.keys/values/entries, spread.
- **Number:** toFixed(n), parseInt/parseFloat, Number.isInteger, MAX_SAFE_INTEGER; NaN.
- **Math:** round, floor, ceil, abs, pow, sqrt, min, max, random (\`Math.floor(Math.random()*n)+1\`), PI.
- **String:** length, toUpperCase/toLowerCase, trim, slice/substring/substr, indexOf, includes, replace, split, concat, padStart, repeat — strings **immutable**.
- **Array:** push/pop (end), unshift/shift (start), splice (beech), slice, concat, join, indexOf, includes, **map/filter/reduce/find/forEach** (naya array, original nahi badalta), sort, reverse, length.
- **Date:** \`new Date()\`, getFullYear/getMonth (0-based!)/getDate/getDay, toISOString; **Temporal** naya API — immutable, 1-based month, ZonedDateTime.`,
          diagram: 'js-array',
          caption: 'Array ke methods — mutating vs non-mutating, aur map/filter/reduce.',
        },
        {
          title: '2.14–2.15 · Async + Bootstrap',
          simple: 'Simple mein: async ka matlab lambi cheez background mein chale, page freeze na ho.',
          example: 'Weather API se jawab 2 second mein aata hai, tab tak loader dikhta hai, phir then se data page par aa jaata hai. Bootstrap ready-made button aur card deta hai.',
          text: `- **Sync vs async:** JS single-threaded, browser background mein kaam karwa leta hai (event loop).
- **Event loop:** call stack khaali → microtask (promise) → macrotask (setTimeout) — isliye promise callback setTimeout se pehle chalta hai.
- **setTimeout/setInterval**, callback hell → **Promise** (then/catch/finally) → **async/await** (try/catch ke saath).
- **Bootstrap:** CSS framework — grid (container/row/col), components (navbar, card, modal, alert), utilities; CDN ya download; v5 mein jQuery nahi, mobile-first.`,
          diagram: 'js-async',
          caption: 'Event loop — stack, microtask queue, macrotask queue aur output order.',
        },
      ],
      lastMinute: [
        'let/const/var ka farq + typeof ke do traps.',
        'addEventListener vs onclick; bubbling vs capturing.',
        'map/filter/reduce vs push/pop/splice (mutating ya nahi).',
        'Promise vs async/await + output order (sync → microtask → macrotask).',
      ],
    },
    {
      id: 'unit-3',
      number: '3',
      name: 'PHP',
      tagline: 'Server-side basics se sessions, forms aur CodeIgniter tak',
      overview: 'Ab server side PHP: kaise chalti hai, strings aur arrays, OOP, file handling, cookies aur sessions, form validation, aur CodeIgniter ka MVC flow.',
      flow: [
        { title: 'PHP basics', hint: 'server par chalti hai' },
        { title: 'Strings aur arrays', hint: 'text aur list' },
        { title: 'Files aur OOP', hint: 'data save, code organise' },
        { title: 'Cookies aur sessions', hint: 'user yaad rakhna' },
        { title: 'Validation aur MVC', hint: 'galat input rokna, CodeIgniter' },
      ],
      minutes: 22,
      sections: [
        {
          title: '3.1–3.4 · PHP kya hai, variables, operators, input/output',
          simple: 'Simple mein: PHP server par chalti hai, browser tak sirf uska output (HTML) pahunchta hai.',
          example: 'Login ka password check server par hota hai; View Source karne par PHP code nahi, sirf HTML dikhta hai.',
          text: `- **PHP:** server-side scripting — server par chalti hai, browser ko sirf HTML milta hai (View Source mein code nahi).
- **File:** \`.php\` — \`<?php ... ?>\` ke beech code, baaki HTML seedha.
- **Variables:** \`$name\` se shuru, type automatically, no declaration; case-sensitive; naming a-z A-Z 0-9 _ (number se shuru nahi).
- **Types:** string, int, float, bool, array, object, null; \`var_dump()\` type ke saath.
- **Operators:** arithmetic, assignment, comparison (== vs ===), logical (&& || ! xor), string concat (.), increment (++$a vs $a++), null coalescing (??), spaceship (<=>).
- **Input:** \`$_GET\`, \`$_POST\`, \`$_REQUEST\`; **output:** echo, print, print_r, var_dump, printf/sprintf.
- **Trap:** \`\\"10\\" == 10\` true (type juggling), \`\\"10\\" === 10\` false.`,
          diagram: 'php-request-flow',
          caption: 'Browser request se PHP execution tak, aur browser ko sirf HTML output.',
        },
        {
          title: '3.5–3.9 · Formatting, strings, arrays',
          simple: 'Simple mein: PHP array do tarah ke hote hain — numbered list (indexed) aur naam wali list (associative).',
          example: 'marks = [78, 85] me index se value; student = [name => Aman] me naam se. explode se a,b,c ka array ban jaata hai.',
          text: `- **printf specifiers:** %s (string), %d (int), %f (float), %x (hex), %.2f (2 decimals), %-10s (left align); sprintf string return karta hai.
- **String functions:** strlen, strtoupper/lower, ucfirst, ucwords, trim/ltrim/rtrim, substr, strpos, str_replace, str_repeat, strrev, explode, implode, nl2br, htmlspecialchars, md5/sha1/password_hash.
- **Indexed array:** \`$a = [10, 20, 30]\` — keys 0,1,2; count, sort/rsort, array_push/pop, array_merge.
- **Associative:** \`$s = [\\"marks\\" => 78]\` — named keys; foreach, ksort (key), asort (value), array_keys, array_values, isset, unset.
- **Multidimensional:** \`$marks[0][1]\` — rows/columns, nested loops, records.
- **Library functions:** array_map, array_filter, array_walk, in_array, array_search, array_sum, array_slice, array_unique, array_column.`,
          diagram: 'php-arrays',
          caption: 'PHP arrays — indexed, associative aur multidimensional ka structure.',
        },
        {
          title: '3.10–3.13 · Date/time, functions, OOP, file handling',
          simple: 'Simple mein: file handling ka pattern fixed hai — kholo, kaam karo, band karo.',
          example: 'fopen se log.txt khola, fwrite se login likha, fclose se band kiya — har login ka record file mein judta jaata hai.',
          text: `- **Date:** \`date(\\"d-m-Y H:i:s\\")\`, \`time()\` (Unix seconds), \`mktime()\`, \`strtotime()\`, \`DateTime\` class; \`date_default_timezone_set(\\"Asia/Kolkata\\")\` pehle.
- **Functions:** user-defined, parameters (default, by reference &), return, variable scope (local/global/static), \`global $x\` ya \`$GLOBALS\`.
- **OOP:** class, object, constructor (__construct ), properties, methods, public/private/protected, inheritance (extends), interface, abstract, static, trait, magic methods (__get, __set, __toString).
- **File handling:** fopen(mode) → fwrite/fread/fgets → fclose; modes r (read), w (truncate), a (append), r+/w+/a+, x (new file); \`file_get_contents\`/\`file_put_contents\` short-cut; \`fopen\` ke baad \`fclose\` zaroori.
- **Upload:** \`enctype=\\"multipart/form-data\\"\`, \`$_FILES\`, size + type check, \`move_uploaded_file\`. `,
          diagram: 'php-file-handling',
          caption: 'File handling — open, read/write, close aur mode ka matlab.',
        },
        {
          title: '3.14–3.16 · Cookies/sessions, forms + validation, CodeIgniter',
          simple: 'Simple mein: cookie browser mein rehta hai aur user dekh sakta hai, session server par rehta hai aur user sirf ID jaanta hai.',
          example: 'Login ke baad SESSION me user ka naam; browser ke paas sirf PHPSESSID — isliye session zyada safe hai.',
          text: `| Point | Cookie | Session |
|---|---|---|
| Data kahan | browser | server (file/DB) |
| Browser ke paas | poora data | sirf PHPSESSID |
| Size | ~4 KB | no practical limit |
| Security | user dekh sakta | user nahi dekh sakta |
| Expiry | set karte hain | browser band / timeout |

- **Session:** \`session_start()\` sabse pehle (output se pehle), \`$_SESSION[\\"user\\"]\`, \`session_destroy()\`.
- **Form handling:** \`method=\\"post\\"\` → \`$_POST\`; validation order — presence (isset/empty) → type → format (filter_var/preg_match) → length → range; escape output \`htmlspecialchars()\` (XSS se bachav); SQL ke liye prepared statement.
- **Sticky form:** error par values wapas dikhao; error message field ke neeche.
- **CodeIgniter (MVC):** URL → index.php (front controller) → router (routes.php) → controller → model (data) → view (HTML); \`base_url()\`, \`$this->load->view()\`, \`$this->db->get()\`; sirf \`public/\` web root.`,
          diagram: 'codeigniter-mvc',
          caption: 'CodeIgniter ka MVC request flow — router, controller, model aur view.',
        },
      ],
      lastMinute: [
        'PHP server-side kyun — browser ko sirf HTML milta hai.',
        'Cookie vs session ka table (5 points).',
        'Validation order + htmlspecialchars kyun.',
        'MVC flow: router → controller → model → view.',
      ],
    },
    {
      id: 'unit-4',
      number: '4',
      name: 'ASP.NET',
      tagline: 'Web Forms, page life cycle, state management aur ADO.NET',
      overview: 'Microsoft ka stack: ASP.NET Web Forms ka page life cycle, ViewState aur session se state yaad rakhna, ADO.NET se database, validation aur security.',
      flow: [
        { title: 'Web Forms', hint: 'aspx aur code-behind' },
        { title: 'Page life cycle', hint: 'Init se Unload tak' },
        { title: 'State management', hint: 'ViewState, session, cookie' },
        { title: 'ADO.NET', hint: 'database se data' },
        { title: 'Validation aur security', hint: 'controls aur auth' },
      ],
      minutes: 20,
      sections: [
        {
          title: '4.1–4.4 · ASP.NET intro, setup, Web Forms, life cycle',
          simple: 'Simple mein: ASP.NET page pehli baar load hota hai, phir har button click par wahi page dobara chalta hai (postback).',
          example: 'Button dabaya to page Init se Render tak dobara chala, sirf badla hua part screen par aaya. IsPostBack se pehla aur doosra load alag handle karte hain.',
          text: `- **ASP.NET:** Microsoft ka server-side framework — compiled (C#/VB), server controls, event-driven, IIS par hosted.
- **Setup:** Visual Studio → new project → IIS Express → run (\`http://localhost:port\`); web.config = configuration (connection string, auth mode, session mode).
- **Web Forms:** \`.aspx\` (markup) + \`.aspx.cs\` (code-behind), \`<%@ Page %>\` directive, \`runat=\\"server\\"\`, postback model.
- **Page life cycle (order):** PreInit → Init → InitComplete → **PreLoad → Load → Control events → LoadComplete → PreRender → SaveState → Render → Unload**.
  - **IsPostBack** se first load vs postback control karo.
  - **Trap:** control events Load ke **baad** aate hain — isliye Page_Load mein user ka selection overwrite mat karo; databind Load mein karo.`,
          diagram: 'wt4-lifecycle',
          caption: 'ASP.NET page life cycle — PreInit se Unload tak ka order.',
        },
        {
          title: '4.5–4.9 · Server controls, state management, ViewState, session/application, cookies/query string',
          simple: 'Simple mein: ViewState page ki apni yaaddasht hai, session user ki yaaddasht hai jo server par rehti hai.',
          example: 'Grid ka page 2 khola to ViewState ne page 1 ki state yaad rakhi. Login user ka naam session mein 20 minute tak zinda rehta hai.',
          text: `- **Server controls (6 types):** HTML controls, Web (standard) controls, validation controls, rich controls (Calendar, AdRotator), data controls (GridView, Repeater), custom/user controls.
- **State management:**
  - Client-side: ViewState, hidden field, cookies, query string, control state.
  - Server-side: Session, Application, Cache, database.
- **ViewState:** page ka Base64 hidden field, MAC se tamper-proof, automatic round trip — page size badhta, secret data ke liye nahi; disable: \`EnableViewState=\\"false\\"\`.
- **Session vs Application:** session per user (20 min sliding timeout), application sab users ke liye global — \`Lock()/UnLock()\` zaroori.
- **Cookies:** persistent (Expires) vs session (browser band = delete); \`HttpOnly/Secure\` flags.
- **Query string:** \`?id=21\` — bookmark/share possible, user input par \`int.TryParse\` + validation.
| Feature | ViewState | Session | Cookie |
|---|---|---|---|
| Data kahan | page (Base64) | server | browser |
| Scope | wahi page | per user | per site |
| Size | page size badhta | server memory | ~4 KB |
| Secure | MAC se tamper-proof | user nahi dekh sakta | user dekh sakta |
`,
          diagram: 'wt4-state',
          caption: 'State management — client-side aur server-side options.',
        },
        {
          title: '4.10–4.14 · Redirect/Transfer, ADO.NET, DB connectivity, validation, security',
          simple: 'Simple mein: Redirect naye page par naya request bhejta hai, Transfer server ke andar hi doosra page kholta hai.',
          example: 'Login ke baad Response.Redirect se URL badal ke dashboard khula. ADO.NET se SELECT chala ke GridView bhar diya.',
          text: `- **Response.Redirect:** browser ko naya URL (new request, URL badalta hai, koi bhi site).
- **Server.Transfer:** server ke andar (same request, URL wahi, sirf same app); \`Server.Execute\` = chala ke wapas.
- **ADO.NET:** Connection → Command → DataReader (connected, fast) ya DataAdapter + DataSet (disconnected, offline); \`SqlConnection\`, \`SqlCommand\`, \`ExecuteReader/ExecuteNonQuery/ExecuteScalar\`.
- **DB connectivity steps (6):** import namespace → connection string (web.config) → SqlConnection open → SqlCommand (query + parameters) → execute → close/using.
- **Validation controls:** RequiredField, Range, Compare, RegularExpression, Custom, ValidationSummary; server par \`Page.IsValid\` (client bypass ho sakta hai).
- **Security:** authentication (Windows/Forms/Passport/None) → authorisation (roles, \`web.config\` \`<authorization>\`), forms auth ticket, HTTPS, parameterised query (SQL injection), encode output (XSS), machineKey.`,
          diagram: 'wt4-validation',
          caption: 'Validation flow — client-side check, phir server par Page.IsValid.',
        },
      ],
      lastMinute: [
        'Page life cycle ka order — Load ke baad control events kyun important.',
        'ViewState kya hai, kahan store hota hai, limitation.',
        'Redirect vs Server.Transfer ke 3 farq.',
        'ADO.NET connected vs disconnected + validation controls ke naam.',
      ],
    },
    {
      id: 'unit-5',
      number: '5',
      name: 'AngularJS and Next.js',
      tagline: 'Framework concepts, two-way binding, validation aur Next.js features',
      overview: 'Framework-level soch: AngularJS ka MVC aur two-way binding, phir Next.js ka rendering model (SSG, SSR, ISR, CSR). Yahan asli sawaal ye hai ki browser aur server kaam kaise baantte hain.',
      flow: [
        { title: 'Framework kya', hint: 'ready dhaancha' },
        { title: 'AngularJS MVC', hint: 'model, view, controller' },
        { title: 'Binding aur forms', hint: 'ng-model, validation' },
        { title: 'Next.js rendering', hint: 'SSG, SSR, ISR, CSR' },
        { title: 'Kab kya use', hint: 'site vs dashboard' },
      ],
      minutes: 16,
      sections: [
        {
          title: '5.1–5.6 · Frameworks, AngularJS overview/features/advantages/applications, MVC',
          simple: 'Simple mein: framework ghar ka ready structure hai, aap sirf apna saamaan rakhte ho.',
          example: 'ng-app likha, module banaya, controller mein data diya — HTML khud update hone laga. Do jagah change karne ki zaroorat nahi.',
          text: `- **Library vs framework:** library ko aap call karte ho; framework aapke code ko call karta hai (inversion of control).
- **SPA flow:** pehla HTML + JS download → router se view change → server sirf JSON.
- **AngularJS (2010, Google):** JS framework for SPA — MVC/MVVM, declarative HTML, DI.
- **Features:** two-way data binding, directives, expressions, filters, modules, controllers, services, routing, dependency injection, form validation.
- **Advantages:** less code, testable (Karma/Jasmine), built-in routing/validation, MIT licence.
- **Limitation:** 1.x (Dec 2021 EOL), digest cycle performance, Angular 2+ rewrite (migration via ngUpgrade).
- **MVC:** Model (data) → View (template) → Controller (\`ng-controller\`, \`$scope\`); MVVM mein $scope = ViewModel.`,
          diagram: 'wt5-mvc',
          caption: 'AngularJS ka MVC/MVVM — scope, view aur controller ka relationship.',
        },
        {
          title: '5.7–5.10 · Expressions, directives, modules, controllers, forms, validation',
          simple: 'Simple mein: directive HTML ko nayi taakat dene wala attribute hai, jaise ng-model ya ng-repeat.',
          example: 'ng-repeat se 50 products ki list ek line mein ban gayi. ng-model se input box aur variable aapas mein jud jaate hain.',
          text: `- **Expression:** \`{{ }}\` — scope par evaluate, filters ke saath (\`{{ name | uppercase }}\`); statements/loops allowed nahi.
- **Directives:** ng-app, ng-model, ng-bind, ng-init, ng-repeat, ng-if, ng-show/hide, ng-class, ng-click, ng-submit, ng-include, custom directives.
- **Module:** \`angular.module(\\"app\\", [])\` — controllers/services/directives ka container; **controller** = \`$scope\` ko data + functions deta hai.
- **Two-way binding:** \`ng-model\` — model ↔ view; digest cycle \`$watch\` list evaluate karta hai (\`$scope.$apply()\` bahar ke change ke liye).
- **Forms:** \`<form name=\\"f\\">\`; states — \`$valid, $invalid, $dirty, $pristine, $touched, $submitted, $error\`.
- **Validation directives:** required, ng-minlength, ng-maxlength, ng-pattern, type=email/number/url, ng-messages; server par bhi validate karo.
- **Performance tip:** one-time binding \`::x\`, track by, kam $watch, ng-if over ng-show.`,
          diagram: 'wt5-forms',
          caption: 'AngularJS forms — ng-model se two-way binding aur form states.',
        },
        {
          title: '5.11–5.12 · Next.js',
          simple: 'Simple mein: Next.js React ka ready-made dhaancha hai — routing, SEO aur speed pehle se bane hue.',
          example: 'Blog page build ke waqt HTML ban jaata hai (SSG) to fast hai aur Google ko bhi dikhta hai; dashboard browser mein banta hai (CSR).',
          text: `- **Next.js:** React ke upar production framework — routing, data fetching, performance built-in.
- **Key features:**
  - File-based routing (\`pages/\` ya \`app/\`), nested layouts.
  - Rendering per page: SSG (static), SSR (server), ISR (incremental), CSR (client).
  - \`getStaticProps\`, \`getServerSideProps\`, \`getStaticPaths\` (pages router) ya server components (app router).
  - API routes (\`/api\`), image optimisation (\`next/image\`), font optimisation.
  - Code splitting + automatic prefetch, metadata/SEO support.
- **Kab use karo:** SEO/content site (SSG/SSR), dashboard (CSR + protected routes), e-commerce (ISR).
- **CSR vs SSR:** CSR = pehla paint JS ke baad, crawler ko content nahi; SSR = server se poora HTML, fast first paint + SEO.
| Mode | HTML kab banta hai | Kab use |
|---|---|---|
| SSG | build time | blog, docs |
| SSR | har request par | user-specific page |
| ISR | build + revalidate | e-commerce listing |
| CSR | browser mein | dashboard |
`,
          diagram: 'wt5-nextjs',
          caption: 'Next.js ka rendering model — SSG, SSR, ISR aur CSR per page.',
        },
      ],
      lastMinute: [
        'Library vs framework (inversion of control) ka ek line.',
        'AngularJS ke 5 features + MVC ke roles.',
        'Form states ($valid, $dirty, $touched) aur validation directives.',
        'Next.js ke 4 rendering modes aur kab kaunsa.',
      ],
    },
  ],
};
