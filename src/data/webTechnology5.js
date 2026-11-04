// ============================================================
// WEB TECHNOLOGY — Unit II, topics 2.1 to 2.6 (JavaScript)
//  2.1 Overview of JavaScript: need, applications, advantages, limitations
//  2.2 Using JavaScript in HTML: embedded and external
//  2.3 Variables and data types
//  2.4 Control structures: if…else and switch
//  2.5 Loop controls: for, while, do…while
//  2.6 Functions, dialog boxes and page redirect
// ============================================================

export const webTechnologyTopicsE = [
  // ==========================================================
  // 2.1 — Overview of JavaScript
  // ==========================================================
  {
    id: 'wt-js-intro',
    number: '2.1',
    title: 'Overview of JavaScript: Need, Applications, Advantages and Limitations',
    subtitle: 'Kyun chahiye, kahan use hoti hai, kya faayde aur kya kamiyan',
    icon: 'zap',
    accent: '#ffd166',
    englishDefinition:
      'JavaScript is a lightweight, interpreted (JIT-compiled), high-level scripting language that runs inside the browser and makes web pages interactive. It was created by Brendan Eich at Netscape in 1995 (standardised as ECMAScript) and is now the only programming language that every browser executes natively. JavaScript is client-side: it can read and change the HTML DOM, react to events such as click and submit, validate forms before they reach the server, animate elements and talk to the server asynchronously (AJAX/fetch) without reloading the page. It is dynamically typed, prototype-based and supports functions as first-class values. Common applications: form validation, sliders and animations, single-page applications (React, Angular, Vue), games, browser extensions, and — through Node.js — server-side applications, APIs and command-line tools.',
    intro:
      'HTML se page banta hai, CSS se sundar hota hai — par page "zinda" nahi hota. Button dabane par kuch ho, form galat bhara ho to turant error dikhe, bina reload data aa jaye — ye sab JavaScript karti hai. Isi liye HTML + CSS + JS ko web ke teen stambh kehte hain. Exam mein "why JavaScript", "applications", "advantages" aur "limitations" alag-alag 6-mark questions bante hain — isliye charon points yahan detail mein diye hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'JavaScript kya hai?',
        body:
          'JavaScript ek client-side scripting language hai jo browser ke andar chalti hai. 1995 mein Brendan Eich ne Netscape ke liye banayi (shuruaat mein naam "LiveScript" tha), 1997 se ECMAScript standard hai. Ye interpreted language hai — compile karke alag program banane ki zaroorat nahi; browser ka engine (V8, SpiderMonkey, JavaScriptCore) script ko padhkar chalata hai.',
        body2:
          'HTML/CSS static hote hain: ek baar render, phir kuch nahi badalta. JavaScript page ko dynamic banati hai — DOM badal sakti hai, user ke events (click, keypress, submit) pakad sakti hai, timer laga sakti hai, aur server se data mangwa kar (fetch/AJAX) page update kar sakti hai bina reload. Node.js ke aane ke baad wahi language server par bhi chalti hai, isliye aaj "one language, both sides" kehte hain.',
        chips: ['1995 · Brendan Eich', 'ECMAScript', 'Interpreted', 'Client-side', 'Event-driven', 'DOM API'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'HTML + CSS + JavaScript',
        diagram: 'js-role',
        caption:
          'HTML = structure, CSS = presentation, JavaScript = behaviour. Neeche JS ka safari: source → parser → engine → DOM/console. Exam mein ye diagram banakar "client-side scripting" explain karna best answer hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Ek Chhoti Si Script — Page Zinda Ho Gaya',
        intro:
          'Is page mein JS do kaam kar rahi hai: (1) load hote hi aaj ki date/time nikaal kar dikhana — HTML ye khud nahi kar sakta, (2) button par click ginti badhana — bina page reload. Right side wale button ko dabakar dekhein.',
        language: 'html',
        filename: 'hello.html',
        code: `<!DOCTYPE html>
<html>
<body>
  <h3>JavaScript chal rahi hai ✅</h3>
  <p>Page khula: <b id="clock">…</b></p>
  <button id="btn">Click me</button>
  <p>Clicks: <b id="count">0</b></p>

  <script>
    // 1. DOM ko badalna
    document.getElementById("clock").textContent =
      new Date().toLocaleString();

    // 2. Event par react karna
    var clicks = 0;
    document.getElementById("btn").addEventListener("click", function () {
      clicks++;
      document.getElementById("count").textContent = clicks;
    });
  </script>
</body>
</html>`,
        html: `<h3 style="margin:0 0 8px;color:#12203d;">JavaScript chal rahi hai ✅</h3>
<p style="margin:0 0 10px;">Page khula: <b id="clock">…</b></p>
<button id="btn" style="padding:8px 16px;border:0;border-radius:8px;background:#0047ff;color:#fff;font-size:14px;cursor:pointer;">Click me</button>
<p style="margin:10px 0 0;">Clicks: <b id="count">0</b></p>`,
        script: `document.getElementById("clock").textContent = new Date().toLocaleString();
var clicks = 0;
document.getElementById("btn").addEventListener("click", function () {
  clicks++;
  document.getElementById("count").textContent = clicks;
});`,
        caption:
          'Date/time aur click counter — dono JavaScript ka kaam. HTML akela "0" hi dikhata rahega, page reload ke bina ginti nahi badh sakta.',
        height: 210,
      },
      {
        type: 'cards',
        kicker: 'Why JavaScript',
        title: 'JavaScript Kyun Zaroori Hai?',
        cards: [
          {
            icon: 'zap',
            title: 'Page ko interactive banati hai',
            body:
              'Click, hover, typing, form submit — har event par turant react karti hai. Bina JS ke page ek printed poster jaisa hai: dekh sakte hain, chhoo nahi sakte.',
          },
          {
            icon: 'check',
            title: 'Client-side validation',
            body:
              'Form ka galat data server tak jaane se pehle hi rok deti hai — time bachta hai aur server par load kam padta hai. Server-side validation phir bhi zaroori rehti hai.',
          },
          {
            icon: 'speed',
            title: 'Bina reload ke update',
            body:
              'AJAX/fetch se data aata hai aur sirf zaroori hissa badalta hai. Isi wajah se Gmail, YouTube, Google Maps jaise smooth apps ban paate hain.',
          },
          {
            icon: 'globe',
            title: 'Har browser mein chalti hai',
            body:
              'Koi plugin ya install nahi chahiye — Chrome, Firefox, Edge, Safari, mobile browsers, sab mein built-in engine hota hai. Isliye ye sabse portable language hai.',
          },
          {
            icon: 'loop',
            title: 'Frontend aur backend dono',
            body:
              'Node.js ke saath wahi syntax server par chalta hai. Ek developer poora stack (React + Express + MongoDB) ek hi language mein kar sakta hai.',
          },
          {
            icon: 'layers',
            title: 'Bada ecosystem',
            body:
              'React, Angular, Vue, jQuery, npm ki lakhon libraries. Kaam pehle se bana milta hai — isliye industry mein demand sabse zyada hai.',
          },
        ],
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Advantages vs Limitations',
        columns: ['Advantages', 'Limitations'],
        columnColors: ['#00ff88', '#ff4466'],
        rows: [
          { label: 'Speed', values: ['Client par chalti hai — instant response', 'Bhaari script page slow kar deti hai'] },
          { label: 'Install', values: ['Browser mein built-in, kuch install nahi', 'Har browser mein behaviour thoda alag'] },
          { label: 'Learning', values: ['Syntax aasan, HTML ke saath likhna easy', 'Bade projects mein code manage karna mushkil'] },
          { label: 'Reach', values: ['Mobile + desktop, sab jagah', 'Purane browsers par nayi features fail'] },
          { label: 'Security', values: ['Server load kam, validation fast', 'Source code user dekh sakta hai — secrets nahi'] },
          { label: 'Server par', values: ['Node.js se backend bhi possible', 'File system/DB access browser se possible nahi'] },
        ],
      },
      {
        type: 'code',
        kicker: 'Applications',
        title: 'JavaScript Kahan-Kahan Use Hoti Hai',
        intro:
          'Ek hi language, kai tarah ke kaam — neeche sabse common applications ka list aur har ek ka ek line example.',
        language: 'javascript',
        filename: 'applications.js',
        code: `// 1. Form validation — submit se pehle check
if (email.value.indexOf("@") === -1) alert("Galat email");

// 2. DOM manipulation — content badalna
document.querySelector("h1").textContent = "Welcome, Riya";

// 3. Image slider / animation — timer se
setInterval(nextSlide, 3000);

// 4. AJAX / fetch — bina reload data lana
fetch("/api/marks").then(r => r.json()).then(showMarks);

// 5. Single Page Application — React/Angular/Vue
// 6. Browser games — canvas par drawing + loop
// 7. Browser extension — page ke andar chalne wala script
// 8. Node.js — server, REST API, CLI tool`,
        note:
          'Exam mein 5-6 applications likhna kaafi hai: form validation, animations/slider, AJAX, SPA (React), games, browser extension, server-side (Node.js).',
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Limitations — Jo Kamiyan Batani Hain',
        points: [
          'Client-side hai: browser band kar de to script nahi chalti; user JS off kar sakta hai.',
          'Source code download hota hai — password, API key ya business logic chhupana possible nahi.',
          'Browser compatibility: purane browsers mein nayi features (ES6+) ke liye polyfill chahiye.',
          'Security risks: XSS — galat tarike se user input page mein daalna khatarnak.',
          'File system, database aur hardware ka direct access nahi — sab server ke through.',
          'Bade codebase mein debugging/testing mushkil; dynamically typed hone se type errors late pakde jaate hain.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'JavaScript = client-side, interpreted, event-driven scripting language (1995, Brendan Eich).',
          'Kaam: interactivity, validation, DOM update, AJAX, animations.',
          'HTML = structure, CSS = style, JS = behaviour.',
          'Advantages: fast, built-in, har jagah, bada ecosystem, Node.js se backend bhi.',
          'Limitations: source visible, browser differences, no direct DB/file access, XSS risk.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is JavaScript? Why is it needed in web development? Explain with an example.',
        answer:
          '**JavaScript:** client-side, interpreted (JIT) scripting language jo browser ke andar chalti hai aur page ko interactive banati hai. 1995 mein Brendan Eich ne banayi; standard naam **ECMAScript**.\n\n**Need (kyun zaroori):**\n1. **Interactivity** — click, hover, typing par turant response\n2. **Client-side validation** — galat data server tak na jaaye\n3. **Dynamic content** — DOM badalna bina reload\n4. **AJAX** — server se data bina page refresh\n5. **Animation / slider / games**\n6. **State** — form, cart, tabs, theme sab JS se manage hote hain\n\n**Example:**\n```\n<button onclick="show()">Click</button>\n<p id="msg"></p>\n<script>\n  function show() {\n    document.getElementById("msg").textContent = "Hello MCA";\n  }\n</script>\n```\nHTML/CSS se ye possible nahi — wahan click par kuch badalta nahi.\n\n**Diagram:** Refer to the HTML + CSS + JavaScript diagram.',
      },
      {
        question: 'Explain any five applications and five advantages of JavaScript.',
        answer:
          '**Applications:**\n1. **Form validation** — email/password check submit se pehle\n2. **Dynamic UI** — slider, tabs, accordion, dark mode\n3. **AJAX / fetch** — live search, chat, notifications\n4. **SPA frameworks** — React, Angular, Vue\n5. **Games & canvas graphics**\n6. **Browser extensions**\n7. **Server-side (Node.js)** — API, CLI tools\n\n**Advantages:**\n1. **Client-side speed** — server ka chakkar nahi, response instant\n2. **Zero install** — har browser mein built-in\n3. **Easy syntax** — HTML ke saath seedha likh sakte hain\n4. **Rich ecosystem** — npm, React, jQuery\n5. **One language, two sides** — Node.js se backend\n6. **Cross-platform** — mobile, desktop, smart TV\n\n| Application | Example |\n|---|---|\n| Validation | "Email galat hai" turant |\n| AJAX | bina reload marks load |\n| SPA | React dashboard |',
      },
      {
        question: 'What are the limitations of JavaScript? How can they be handled?',
        answer:
          '**Limitations:**\n1. **Client-side only** — user JS band kar de to kaam nahi\n2. **Source code visible** — View Source se logic padha ja sakta hai\n3. **Browser compatibility** — purane browsers ES6+ support nahi karte\n4. **Security** — XSS, CSRF jaise attacks ka risk\n5. **No direct server access** — file system/DB ke liye server chahiye\n6. **Debugging** — bade codebase mein errors late milte hain\n\n**Handling:**\n\n| Limitation | Solution |\n|---|---|\n| Source visible | Sensitive logic server par rakhein |\n| Compatibility | Polyfill / Babel / feature detection |\n| XSS | Input sanitise, `textContent` use karein |\n| Validation bypass | Server-side validation bhi lagayein |\n| Big codebase | Modules, TypeScript, linting, tests |\n\n**Exam line:** "JavaScript page ko zinda karti hai, par security aur validation ke liye server par bharosa karna padta hai."',
      },
    ],
  },

  // ==========================================================
  // 2.2 — Using JS in HTML: embedded and external
  // ==========================================================
  {
    id: 'wt-js-inclusion',
    number: '2.2',
    title: 'Using JavaScript in HTML: Embedded and External',
    subtitle: 'script tag, internal code, external .js file aur inline handlers',
    icon: 'code',
    accent: '#00d4ff',
    englishDefinition:
      'JavaScript is added to an HTML document with the <script> element. In the embedded (internal) method the code is written between <script> and </script> inside the page — usually at the end of <body> or inside <head>. In the external method the code is kept in a separate .js file and linked with <script src="app.js"></script>; the src attribute names the file and the element must not contain code as well. JavaScript can also be attached inline through event attributes such as onclick="show()", which is discouraged today. By default a script in <head> blocks HTML parsing, so the defer attribute (run after parsing, in order) or async (run as soon as downloaded, order not guaranteed) is used for external scripts. The type="text/javascript" attribute is no longer required in HTML5.',
    intro:
      'Script likhna aata hai, par use page mein daalna bhi ek exam topic hai — "embedded vs external" ka difference 6 marks ka sawaal hai. Embedded mein code HTML ke andar hi rehta hai (chhote demo ke liye theek), external mein alag .js file banti hai (real project ke liye sahi). Inline onclick sabse purana tareeka hai — aaj avoid karte hain kyunki HTML aur JS mix ho jaate hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Teen Tareeke',
        body:
          'Embedded (internal): <script> ... </script> HTML file ke andar. External: <script src="app.js"></script> — code alag file mein, browser use download karke chalata hai; is file mein <script> tag nahi likhte. Inline: element ke attribute mein seedha JS — <button onclick="show()">. Teeno ka result same hota hai: browser JS chalata hai.',
        body2:
          'Placement matter karta hai. <head> mein script ho to browser pehle script download/chala kar rukta hai, isliye page late dikhta hai — isliye aaj script body ke end mein ya defer ke saath likhi jaati hai. <script src> wale element ke andar code likhna galat hai (ignore ho jaata hai). Ek page mein kai script blocks ho sakte hain; wo upar se neeche order mein chalte hain.',
        chips: ['<script>', 'src', 'defer', 'async', 'inline onclick', 'body ke end mein'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Embedded vs External vs Inline',
        diagram: 'js-inclusion',
        caption:
          'Teen tareeke ek saath, aur neeche defer vs async ka farak. Exam mein teeno ka code snippet likhna aur "kaunsa kab" batana poore marks deta hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Method 1 — Embedded (Internal) Script',
        intro:
          'Poora code ek hi HTML file mein: pehle markup, phir <script> block. Browser script chala kar h3 ka text badal deta hai aur list bana deta hai — output mein wahi dikhta hai.',
        language: 'html',
        filename: 'embedded.html',
        code: `<!DOCTYPE html>
<html>
<body>
  <h3 id="title">Wait…</h3>
  <ul id="list"></ul>

  <script>
    // script body ke end mein — markup pehle ready ho jaata hai
    document.getElementById("title").textContent = "Embedded script chal gayi ✅";

    var subjects = ["HTML", "CSS", "JavaScript"];
    var list = document.getElementById("list");
    for (var i = 0; i < subjects.length; i++) {
      var li = document.createElement("li");
      li.textContent = subjects[i];
      list.appendChild(li);
    }
  </script>
</body>
</html>`,
        html: `<h3 id="title" style="margin:0 0 10px;color:#12203d;">Wait…</h3>
<ul id="list" style="margin:0;padding-left:22px;"></ul>`,
        script: `document.getElementById("title").textContent = "Embedded script chal gayi ✅";
var subjects = ["HTML", "CSS", "JavaScript"];
var list = document.getElementById("list");
for (var i = 0; i < subjects.length; i++) {
  var li = document.createElement("li");
  li.textContent = subjects[i];
  list.appendChild(li);
}`,
        caption:
          'Script body ke end mein hai, isliye element pehle se DOM mein hain. Script ko head mein rakhte to getElementById null deta — classic beginner bug.',
        height: 200,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Method 2 — External .js File',
        intro:
          'Do alag files. HTML mein sirf link hai, poora code app.js mein. Yahi tareeka real project mein use hota hai: cache hota hai, reuse hota hai, HTML saaf rehta hai.',
        language: 'html',
        filename: 'index.html + app.js',
        code: `<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>External JS</title>
  <script src="app.js" defer></script>
</head>
<body>
  <h3 id="title">Loading…</h3>
  <button id="btn">Greet</button>
  <p id="out"></p>
</body>
</html>

// app.js — is file mein <script> tag NAHI likhte
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("title").textContent = "External script loaded";
});

document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("out").textContent = "Hello from app.js 👋";
});`,
        note:
          'defer ka matlab: HTML parse hone ke baad script chalegi, isliye DOM elements mil jaate hain. Bina defer ke head ki script body se pehle chal jaati hai — element na milne par error aata hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Method 3 — Inline Event Handler',
        intro:
          'Sabse purana tareeka: JS seedha attribute mein. Chhote demo ke liye kaam karta hai, par bade project mein HTML aur logic mix ho jaate hain — isliye aaj addEventListener prefer karte hain.',
        language: 'html',
        filename: 'inline.html',
        code: `<button onclick="greet('Riya')">Greet Riya</button>
<button onclick="greet('Aman')">Greet Aman</button>
<p id="out">Abhi kuch nahi</p>

<script>
  function greet(name) {
    document.getElementById("out").textContent = "Hello " + name + "!";
  }
</script>

<!-- aaj ka better tareeka -->
<!-- button.addEventListener("click", ...) -->`,
        html: `<button id="b1" style="padding:7px 14px;border:0;border-radius:8px;background:#0047ff;color:#fff;margin-right:8px;cursor:pointer;">Greet Riya</button>
<button id="b2" style="padding:7px 14px;border:0;border-radius:8px;background:#ff8800;color:#fff;cursor:pointer;">Greet Aman</button>
<p id="out" style="margin:12px 0 0;">Abhi kuch nahi</p>`,
        script: `function greet(name) {
  document.getElementById("out").textContent = "Hello " + name + "!";
}
document.getElementById("b1").addEventListener("click", function () { greet("Riya"); });
document.getElementById("b2").addEventListener("click", function () { greet("Aman"); });`,
        caption:
          'Dono button dabakar dekhein — same function, alag argument. Inline version mein onclick attribute hota hai; yahan addEventListener use hua hai jo aaj ka standard hai.',
        height: 190,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Embedded vs External JavaScript',
        columns: ['Embedded (internal)', 'External (.js file)'],
        columnColors: ['#00d4ff', '#c4ff00'],
        rows: [
          { label: 'Code kahan', values: ['HTML file ke andar <script> block', 'Alag app.js file, src se linked'] },
          { label: 'Reuse', values: ['Sirf usi page par', 'Kai pages ek hi file use kar sakte hain'] },
          { label: 'Caching', values: ['Nahi hoti', 'Browser cache karta hai — dobara download nahi'] },
          { label: 'HTML size', values: ['Badh jaata hai', 'Chhota aur saaf rehta hai'] },
          { label: 'Maintenance', values: ['Bade project mein mushkil', 'Aasan — ek jagah change'] },
          { label: 'Best for', values: ['Chhota demo, ek page', 'Real project, team work'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'script Tag Ke Rules',
        points: [
          '<script src="app.js"></script> — src wale tag ke andar code likhne ka koi fayda nahi, ignore hota hai.',
          'External file mein <script> tag nahi likhte — sirf JavaScript.',
          'Script body ke end mein rakhein ya defer lagayein, warna DOM elements na milne par error.',
          'defer = order maintain, parse ke baad chalta hai; async = jaldi download hote hi chalta hai, order fixed nahi.',
          'HTML5 mein type="text/javascript" likhna zaroori nahi (default wahi hai).',
          'Inline onclick aaj avoid — addEventListener se HTML aur JS alag rehte hain.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Teen tareeke: embedded, external, inline handler.',
          'External = src attribute, alag .js file, caching + reuse.',
          'defer/async se loading behaviour control hota hai.',
          'Script ka order aur placement bug ka sabse bada source hai.',
          'Production mein external file + addEventListener standard hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the different ways of including JavaScript in an HTML document with examples.',
        answer:
          '**1. Embedded (internal):**\n```\n<script>\n  alert("Hello");\n</script>\n```\n- Code HTML file ke andar\n- Chhote demo / ek page ke liye\n\n**2. External:**\n```\n<script src="app.js" defer></script>\n```\n- Code alag .js file mein\n- Reuse, caching, clean HTML\n- External file mein `<script>` tag nahi likhte\n\n**3. Inline handler:**\n```\n<button onclick="show()">Click</button>\n```\n- Attribute mein seedha JS\n- Aaj avoid karte hain\n\n**Placement:**\n- `<head>` — parse rok deta hai\n- `<body>` ke end — DOM ready milta hai\n- `defer` — parse ke baad, order maintain\n- `async` — download hote hi, order fixed nahi\n\n**Diagram:** Refer to the three-ways diagram.',
      },
      {
        question: 'Differentiate between embedded and external JavaScript. Which one should be preferred in a project and why?',
        answer:
          '| Basis | Embedded | External |\n|---|---|---|\n| Location | HTML ke andar | Alag .js file |\n| Attribute | koi nahi | `src="app.js"` |\n| Reuse | Ek page | Kai pages |\n| Caching | Nahi | Haan |\n| HTML size | Bada | Chhota |\n| Maintenance | Mushkil | Aasan |\n| Team work | Conflict | Alag files |\n\n**Preferred: external**, kyunki\n1. Browser cache karta hai → speed\n2. Ek file kai pages par — duplication nahi\n3. HTML readable rehta hai\n4. Build tools (bundler, minifier) aasani se lagte hain\n5. Debugging aur testing alag ho jaati hai\n\n**Kab embedded?** Chhota single-page demo, ya page-specific 5-10 line ka kaam.\n\n**Diagram:** Refer to the inclusion diagram.',
      },
      {
        question: 'What is the difference between defer and async attributes of the script tag?',
        answer:
          'Dono sirf **external** scripts par kaam karte hain (src ke saath).\n\n| Basis | defer | async |\n|---|---|---|\n| Kab chalta hai | HTML parse ke baad | download hote hi |\n| Order | Document order maintain | Order fixed nahi |\n| DOM ready | Haan | Guarantee nahi |\n| Typical use | library + app code | analytics, ads |\n\n**Without attributes:** script download + run hone tak parsing ruk jaati hai (blocking).\n\n```\n<script src="a.js" defer></script>\n<script src="b.js" defer></script>\n<!-- a pehle, phir b -->\n\n<script src="x.js" async></script>\n<script src="y.js" async></script>\n<!-- jo pehle download ho wo pehle -->\n```\n\n**Exam line:** "defer order deta hai, async speed — dono parsing block nahi karte."',
      },
    ],
  },

  // ==========================================================
  // 2.3 — Variables and data types
  // ==========================================================
  {
    id: 'wt-js-variables',
    number: '2.3',
    title: 'Variables and Data Types in JavaScript',
    subtitle: 'var, let, const aur 7 primitives + object',
    icon: 'tag',
    accent: '#c4ff00',
    englishDefinition:
      'A variable is a named container for a value, declared in JavaScript with var (function-scoped, hoisted, redeclarable), let (block-scoped, reassignable) or const (block-scoped, cannot be reassigned). JavaScript is dynamically (loosely) typed, so the data type belongs to the value, not to the variable, and the typeof operator reports it. The primitive types are string, number, boolean, null, undefined, symbol and bigint; everything else — objects, arrays and functions — is of type object (typeof a function returns "function"). Type conversion can be implicit (coercion, e.g. "5" + 3 gives "53" while "5" - 3 gives 2) or explicit (Number(), String(), parseInt(), Boolean()).',
    intro:
      'Variable matlab "naam wala dabba" jisme value rakhi jaati hai. JS mein teen keywords: var (purana), let (badalne wali value), const (fix value). Sabse important exam point: JS dynamically typed hai — variable ka type fix nahi hota, value ka hota hai; typeof se pata karte hain. Aur ek famous trap: typeof null "object" deta hai (purana bug), isliye exam mein ye poochha jaata hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Variable aur Type',
        body:
          'Declaration ke teen tareeke: var name = "Riya"; (function scope, dobara declare ho sakta hai), let marks = 78; (block scope — {} ke andar hi rehta hai, reassign ho sakta hai), const PI = 3.14; (block scope, reassign nahi — par object/array ke andar ki values badal sakti hain).',
        body2:
          'Data types do family mein: primitive (string, number, boolean, null, undefined, symbol, bigint) aur object (object, array, function, date). JavaScript loosely typed hai — let x = 5; phir x = "paanch"; bilkul valid. typeof operator type batata hai: typeof "Riya" → "string", typeof 78 → "number", typeof null → "object" (ye ek historical bug hai).',
        chips: ['var', 'let', 'const', 'typeof', 'primitive', 'object', 'coercion'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'var / let / const aur Data Types',
        diagram: 'js-types',
        caption:
          'Left: teen declaration keywords ka scope aur reassign rule. Right: 8 data types aur unka typeof result — null par "object" likha hai, wo exam ka favourite trap hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Har Type Ka typeof — Script Se Bani Table',
        intro:
          'Ye table HTML mein likhi nahi hai — JavaScript ne loop chala kar rows banayi hain. Isliye jo dikh raha hai wahi actual typeof ka result hai.',
        language: 'javascript',
        filename: 'datatypes.html',
        code: `<h3>typeof ka result</h3>
<table id="tbl" border="1"></table>

<script>
  var samples = [
    ["string",    "Riya"],
    ["number",    78],
    ["boolean",   true],
    ["undefined", undefined],
    ["null",      null],
    ["object",    { name: "Riya" }],
    ["array",     [1, 2, 3]],
    ["function",  function () {}]
  ];

  var tbl = document.getElementById("tbl");
  for (var i = 0; i < samples.length; i++) {
    var row = tbl.insertRow();
    row.insertCell().textContent = samples[i][0];        // label
    row.insertCell().textContent = show(samples[i][1]);  // value
    row.insertCell().textContent = typeof samples[i][1]; // type
  }

  // JSON.stringify(undefined) bhi undefined deta hai — isliye alag helper
  function show(v) {
    if (typeof v === "function") return "function () {}";
    if (v === undefined) return "undefined";
    return JSON.stringify(v);
  }
</script>`,
        html: `<h3 style="margin:0 0 8px;font-size:15px;color:#12203d;">typeof ka result</h3>
<table id="tbl" style="font-size:12.5px;width:100%;border-collapse:collapse;"></table>`,
        script: `var samples = [
  ["string", "Riya"],
  ["number", 78],
  ["boolean", true],
  ["undefined", undefined],
  ["null", null],
  ["object", { name: "Riya" }],
  ["array", [1, 2, 3]],
  ["function", function () {}]
];
function show(v) {
  if (typeof v === "function") return "function () {}";
  if (v === undefined) return "undefined";
  return JSON.stringify(v);
}
var tbl = document.getElementById("tbl");
for (var i = 0; i < samples.length; i++) {
  var row = tbl.insertRow();
  row.insertCell().textContent = samples[i][0];
  row.insertCell().textContent = show(samples[i][1]);
  var t = typeof samples[i][1];
  var c = row.insertCell();
  c.textContent = t;
  c.style.color = t === "object" && samples[i][0] === "null" ? "#c0392b" : "#0a7d4f";
}`,
        caption:
          'Dhyan dein: null ka typeof "object" hai (red) aur array bhi "object" — array ko pehchanne ke liye Array.isArray() use karte hain.',
        height: 300,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'var vs let vs const — Aur Coercion',
        intro:
          'Neeche wahi cheezein jo exam mein poochhi jaati hain: scope ka farak, const ka rule, aur JS ka automatic type conversion (coercion) jo shuruaat mein confusing lagta hai.',
        language: 'javascript',
        filename: 'variables.js',
        code: `// 1. const ko reassign nahi kar sakte
const PI = 3.14;
// PI = 3;            // ❌ TypeError

const student = { name: "Riya" };
student.name = "Riya Sharma";   // ✅ object ke andar change allowed

// 2. let ka block scope
if (true) {
  let inside = "sirf yahan";
  var outside = "bahar bhi";
}
// console.log(inside);   // ❌ ReferenceError
console.log(outside);     // ✅ "bahar bhi"

// 3. Dynamic typing — type value ka hota hai
let x = 5;
x = "paanch";             // ✅ same variable, naya type

// 4. Coercion (implicit conversion)
"5" + 3        // "53"  — + string jodta hai
"5" - 3        // 2     — - number banata hai
true + 1       // 2
Number("42")   // 42    — explicit
parseInt("42px") // 42
Number("abc")  // NaN

// 5. Template literal (ES6) — string jodne ka aasan tareeka
let name = "Riya", marks = 78;
console.log("Student: " + name + " — " + marks);
console.log(\`Student: \${name} — \${marks}\`);`,
        note:
          'Exam mein "var vs let vs const" table banao: scope (function vs block), redeclare (allowed vs nahi), hoisting (var → undefined, let/const → TDZ). Coercion ka ek example ("5" + 3 = "53") likhna bonus hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'var vs let vs const',
        columns: ['var', 'let', 'const'],
        columnColors: ['#ff8800', '#c4ff00', '#00d4ff'],
        rows: [
          { label: 'Scope', values: ['Function', 'Block { }', 'Block { }'] },
          { label: 'Redeclare', values: ['Haan', 'Nahi', 'Nahi'] },
          { label: 'Reassign', values: ['Haan', 'Haan', 'Nahi'] },
          { label: 'Hoisting', values: ['undefined milta hai', 'TDZ — error', 'TDZ — error'] },
          { label: 'Initial value', values: ['Optional', 'Optional', 'Zaroori'] },
          { label: 'Kab use', values: ['Legacy code', 'Badalne wali value', 'Fixed value / import'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Variable Ke Rules',
        points: [
          'Naam letter, _ ya $ se shuru ho; number se nahi. Case-sensitive: naam ≠ Naam.',
          'Reserved words (var, if, for, class) variable naam nahi ban sakte.',
          'let/const block scope — { } ke andar declare kiye gaye bahar nahi milte.',
          'const sirf binding fix karta hai; object/array ke andar ki values badal sakti hain.',
          'typeof null → "object" (bug), typeof function → "function", Array.isArray() se array check.',
          'undefined = declare kiya par value nahi di; null = jaanbujh kar khaali rakha.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Declare: var (function scope), let (block, reassign), const (block, fixed).',
          '7 primitives: string, number, boolean, null, undefined, symbol, bigint + object.',
          'Dynamically typed — type value ka hota hai; typeof se pata chalta hai.',
          'Coercion: "5" + 3 = "53", "5" - 3 = 2.',
          'null ka typeof "object" — classic exam trap.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the different data types available in JavaScript with examples.',
        answer:
          'JavaScript mein 8 data types hain — 7 primitive + 1 object.\n\n| Type | Example | typeof |\n|---|---|---|\n| string | `"Riya"` | string |\n| number | `78, 3.14` | number |\n| boolean | `true / false` | boolean |\n| undefined | `let x;` | undefined |\n| null | `let y = null` | object (bug) |\n| symbol | `Symbol("id")` | symbol |\n| bigint | `10n` | bigint |\n| object | `{name:"Riya"}`, `[1,2]`, `function(){}` | object / function |\n\n**Example:**\n```\nlet name = "Riya";      // string\nlet marks = 78;         // number\nlet pass = true;        // boolean\nlet photo = null;       // null\nlet address;            // undefined\nlet student = { name: "Riya", marks: 78 };  // object\nlet list = [1, 2, 3];   // array → typeof object\n```\n\n**Note:** number hi int aur float dono ke liye hai — alag `int`/`float` nahi hote.\n\n**Diagram:** Refer to the data types diagram.',
      },
      {
        question: 'Differentiate between var, let and const with examples.',
        answer:
          '| Basis | var | let | const |\n|---|---|---|---|\n| Scope | function | block | block |\n| Redeclare | ✓ | ✗ | ✗ |\n| Reassign | ✓ | ✓ | ✗ |\n| Hoisting | undefined | TDZ | TDZ |\n| Init zaroori | Nahi | Nahi | Haan |\n\n```\nvar a = 1; var a = 2;      // ✅ allowed\nlet b = 1; // let b = 2;   // ❌ SyntaxError\nconst C = 3.14; // C = 3;  // ❌ TypeError\n\nif (true) { let x = 1; var y = 2; }\n// console.log(x);  ❌ not defined\nconsole.log(y);     // ✅ 2\n\nconst student = { name: "Riya" };\nstudent.name = "Aman";      // ✅ content change allowed\n```\n\n**Exam line:** "var purana hai (function scope), let badalne ke liye, const fix rakhne ke liye — aaj let/const hi use karein."',
      },
      {
        question: 'What is type coercion in JavaScript? Explain implicit and explicit conversion with examples.',
        answer:
          '**Coercion:** ek type ki value ko doosre type mein badalna.\n\n**1. Implicit (automatic):**\n```\n"5" + 3      // "53"   (+ string jodta hai)\n"5" - 3      // 2      (- number banata hai)\n"5" * "2"    // 10\ntrue + 1     // 2\n1 == "1"     // true   (loose, type badal kar compare)\n1 === "1"    // false  (strict)\nnull + 1     // 1\nundefined + 1// NaN\n```\n\n**2. Explicit (function se):**\n```\nNumber("42")     // 42\nNumber("abc")    // NaN\nparseInt("42px") // 42\nparseFloat("3.5kg") // 3.5\nString(78)       // "78"\nBoolean(0)       // false\nBoolean("Riya")  // true\n```\n\n**Rules yaad rakhein:**\n- `+` string ke saath → concatenation\n- `- * /` → number conversion\n- Falsy values: `0, "", null, undefined, NaN, false`\n- Comparison ke liye hamesha `===` use karein\n\n**Exam line:** "JS khud type badal leta hai — isliye === se compare karna safe hai."',
      },
    ],
  },

  // ==========================================================
  // 2.4 — Control structures
  // ==========================================================
  {
    id: 'wt-js-control',
    number: '2.4',
    title: 'Control Structures: if…else and switch…case',
    subtitle: 'Condition ke hisaab se alag code chalana',
    icon: 'flow',
    accent: '#2f6fff',
    englishDefinition:
      'Control structures decide which statements execute. In JavaScript the if statement runs a block when a condition is truthy, with optional else if for further tests and else for the default case. The condition is evaluated for truthiness, and the falsy values are false, 0, "" (empty string), null, undefined and NaN. The switch statement compares one expression against several case labels using strict equality (===) and runs the matching block; without break, execution falls through into the next case, and default runs when nothing matches. The ternary operator (condition ? a : b) gives a short if…else expression. Comparison operators === and !== are preferred over == and != because the latter coerce types.',
    intro:
      'Condition ke hisaab se raasta chunna = control structure. if…else range aur multiple conditions ke liye, switch fixed values (day, colour, grade) ke liye. Do cheezein exam mein pakki poochhi jaati hain: switch mein break bhoolna (fall-through) aur == vs === ka farak. Neeche live demo mein dono chalta hua dikhaya gaya hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'if…else aur switch',
        body:
          'if (condition) { ... } — condition true ho to block chalta hai. else if se aur conditions jod sakte hain, else aakhri default hai. switch (expression) { case v1: ... break; default: ... } — ek hi value ki kai fixed possibilities compare karni ho to switch zyada saaf lagta hai.',
        body2:
          'JS mein condition "truthy/falsy" se judged hoti hai: 0, "" (khaali string), null, undefined, NaN, false — ye falsy hain, baaki sab truthy (jaise "0" ya [] bhi truthy hote hain). switch strict === comparison karta hai, isliye switch(1) case "1" se match nahi karega. break na likha to control agle case mein gir jaata hai — fall-through.',
        chips: ['if', 'else if', 'else', 'switch', 'case', 'break', 'default', 'ternary'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'if…else Chain aur switch',
        diagram: 'js-control',
        caption:
          'Left: if…else if…else ka flowchart (T/F branches). Right: switch ke cases, break aur default. Exam mein ye diagram + ek code snippet = poore marks.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Grade Calculator — if…else if…else',
        intro:
          'Marks daaliye aur "Grade dekho" dabaiye — result JavaScript if…else chain se aata hai. Input ka value string hota hai, isliye Number() se convert kiya gaya hai (warna "95" >= 90 comparison ajeeb behave karta).',
        language: 'html',
        filename: 'grade.html',
        code: `<h3>Result Calculator</h3>
<input id="marks" type="number" value="78">
<button id="btn">Grade dekho</button>
<p id="out"></p>

<script>
  function grade(marks) {
    if (marks >= 90) return "A+ (Outstanding)";
    else if (marks >= 75) return "A (Distinction)";
    else if (marks >= 60) return "B (First class)";
    else if (marks >= 40) return "C (Pass)";
    else return "F (Fail)";
  }

  function show() {
    var m = Number(document.getElementById("marks").value);
    if (isNaN(m)) {
      document.getElementById("out").textContent = "Number daalein!";
      return;
    }
    document.getElementById("out").textContent =
      m + " marks → " + grade(m);
  }

  document.getElementById("btn").addEventListener("click", show);
  show();   // page khulte hi ek baar
</script>`,
        html: `<h3 style="margin:0 0 10px;font-size:16px;color:#12203d;">Result Calculator</h3>
<input id="marks" type="number" value="78" style="width:80px;padding:6px 8px;border:1px solid #b9c8e8;border-radius:6px;">
<button id="btn" style="padding:7px 14px;border:0;border-radius:8px;background:#0047ff;color:#fff;margin-left:6px;cursor:pointer;">Grade dekho</button>
<p id="out" style="margin:12px 0 0;font-weight:700;color:#0a7d4f;"></p>`,
        script: `function grade(marks) {
  if (marks >= 90) return "A+ (Outstanding)";
  else if (marks >= 75) return "A (Distinction)";
  else if (marks >= 60) return "B (First class)";
  else if (marks >= 40) return "C (Pass)";
  else return "F (Fail)";
}
function show() {
  var m = Number(document.getElementById("marks").value);
  var out = document.getElementById("out");
  if (isNaN(m)) { out.textContent = "Number daalein!"; out.style.color = "#c0392b"; return; }
  out.style.color = "#0a7d4f";
  out.textContent = m + " marks → " + grade(m);
}
document.getElementById("btn").addEventListener("click", show);
document.getElementById("marks").addEventListener("input", show);
show();`,
        caption:
          'Marks badal kar dekhein — 95, 80, 65, 45, 30. Chain ka order important hai: pehli condition jo match kare wahi chalti hai, isliye >= 90 sabse upar hai.',
        height: 220,
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'switch…case — Day Name Aur Fall-through',
        intro:
          'Yahan switch ke teen case dikhaye gaye hain: ek normal case-block-brea, ek multiple labels ek saath (Monday–Friday), aur default. Dropdown badal kar dekhein.',
        language: 'html',
        filename: 'switch.html',
        code: `<select id="day">
  <option value="1">Monday</option>
  <option value="6">Saturday</option>
  <option value="0">Sunday</option>
</select>
<p id="msg"></p>

<script>
  function dayInfo(d) {
    var msg;
    switch (Number(d)) {
      case 0:
        msg = "Sunday — chhutti";
        break;
      case 6:
        msg = "Saturday — half day";
        break;
      case 1: case 2: case 3: case 4: case 5:
        msg = "Weekday — college/office";
        break;
      default:
        msg = "Galat day";
    }
    return msg;
  }

  document.getElementById("day")
    .addEventListener("change", show);
  function show() {
    document.getElementById("msg").textContent =
      dayInfo(document.getElementById("day").value);
  }
  show();
</script>`,
        html: `<select id="day" style="padding:7px 10px;border:1px solid #b9c8e8;border-radius:8px;font-size:13.5px;">
  <option value="1">Monday</option>
  <option value="6">Saturday</option>
  <option value="0">Sunday</option>
</select>
<p id="msg" style="margin:12px 0 0;font-weight:700;color:#12203d;"></p>`,
        script: `function dayInfo(d) {
  var msg;
  switch (Number(d)) {
    case 0:
      msg = "Sunday — chhutti";
      break;
    case 6:
      msg = "Saturday — half day";
      break;
    case 1: case 2: case 3: case 4: case 5:
      msg = "Weekday — college/office";
      break;
    default:
      msg = "Galat day";
  }
  return msg;
}
function show() {
  document.getElementById("msg").textContent = dayInfo(document.getElementById("day").value);
}
document.getElementById("day").addEventListener("change", show);
show();`,
        caption:
          'case 1: case 2: … ek saath likhna legal hai — sabhi weekdays ek hi block chalate hain. break hatayein to fall-through ho jaata hai aur agla case bhi chal jaata hai.',
        height: 190,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'if…else vs switch',
        columns: ['if…else', 'switch…case'],
        columnColors: ['#00d4ff', '#c4ff00'],
        rows: [
          { label: 'Kis cheez par', values: ['Har tarah ki condition (range, &&, ||)', 'Ek expression ki fixed values'] },
          { label: 'Comparison', values: ['Koi bhi operator', 'Sirf strict === '] },
          { label: 'Readability', values: ['Chhoti chain theek', 'Kai fixed options mein zyada saaf'] },
          { label: 'Fall-through', values: ['Nahi hota', 'break na ho to hota hai'] },
          { label: 'Default', values: ['else', 'default'] },
          { label: 'Best example', values: ['marks >= 75', 'day, colour, menu option'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Zaroori Points',
        points: [
          'if mein condition truthy hone par block chalta hai; falsy = false, 0, "", null, undefined, NaN.',
          'switch strict === se compare karta hai — switch(1) aur case "1" match nahi karenge.',
          'break na likha to fall-through — agla case bhi chal jaata hai (bug aur feature dono).',
          'default optional hai par best practice hai — koi case match na ho to.',
          'Ternary: condition ? valueA : valueB — chhota if…else expression.',
          'Comparison ke liye === / !== use karein, == se type coercion hota hai.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'if…else if…else se range/multiple conditions handle hoti hain.',
          'switch ek value ke fixed options ke liye — case + break + default.',
          'Falsy values yaad rakhein; truthiness se bugs aate hain.',
          'break bhoolna = fall-through.',
          '=== strict comparison, == coercion karta hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain if…else and switch…case in JavaScript with syntax and examples. When should each be used?',
        answer:
          '**if…else:**\n```\nif (marks >= 90) {\n  grade = "A+";\n} else if (marks >= 75) {\n  grade = "A";\n} else {\n  grade = "F";\n}\n```\n- Range aur compound conditions (`&&`, `||`) ke liye\n- Chain lambi ho to readability gir jaati hai\n\n**switch:**\n```\nswitch (day) {\n  case 0:  msg = "Sunday"; break;\n  case 1:\n  case 2:  msg = "Weekday"; break;\n  default: msg = "Galat";\n}\n```\n- Ek expression, fixed values\n- Strict `===`, isliye type bhi same hona chahiye\n- `break` na ho to fall-through\n\n**Kab kya:**\n\n| Situation | Use |\n|---|---|\n| `marks >= 75`, `a > b && c` | if…else |\n| day / month / menu / colour | switch |\n\n**Diagram:** Refer to the control-structure diagram.',
      },
      {
        question: 'What is fall-through in a switch statement? Explain with an example.',
        answer:
          '**Fall-through:** jab `break` na ho to control agle `case` ke statements bhi chala deta hai.\n\n```\nlet x = 1;\nswitch (x) {\n  case 1: console.log("one");    // ✅ chalta hai\n  case 2: console.log("two");    // 😱 bhi chalta hai\n  case 3: console.log("three");  // 😱 bhi\n}\n// Output: one two three\n```\n\n**break ke saath:**\n```\ncase 1: console.log("one"); break;   // sirf one\n```\n\n**Fall-through ka fayda (intentional use):**\n```\nswitch (day) {\n  case 1: case 2: case 3: case 4: case 5:\n    type = "Weekday"; break;\n  case 0: case 6:\n    type = "Weekend"; break;\n}\n```\n\n**Exam line:** "break switch se bahar nikaalta hai; bhoolne par fall-through ho kar aage ke cases bhi chal jaate hain."',
      },
      {
        question: 'What are falsy values in JavaScript? What is the difference between == and ===?',
        answer:
          '**Falsy values (6):** `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.\nBaaki sab **truthy** — including `"0"`, `" "`, `[]`, `{}` (khaali array/object bhi truthy hain!).\n\n```\nif (0)      { } // nahi chalega\nif ("")     { } // nahi chalega\nif ("0")    { } // chalega — string truthy hai\nif ([])     { } // chalega\n```\n\n**== vs ===:**\n\n| | == | === |\n|---|---|---|\n| Type | Coerce karta hai | Coerce nahi |\n| `1 == "1"` | true | false |\n| `null == undefined` | true | false |\n| `0 == false` | true | false |\n\n```\n1 == "1"    // true\n1 === "1"   // false\nnull == undefined   // true\nnull === undefined  // false\n```\n\n**Rule:** hamesha `===` / `!==` use karein — warna unexpected bugs aate hain.\n\n**Exam line:** "== value compare karta hai (type badal kar), === value + type dono."',
      },
    ],
  },

  // ==========================================================
  // 2.5 — Loops
  // ==========================================================
  {
    id: 'wt-js-loops',
    number: '2.5',
    title: 'Loop Controls: for, while and do…while',
    subtitle: 'Ek hi kaam ko baar-baar karwana',
    icon: 'refresh',
    accent: '#ff8800',
    englishDefinition:
      'Loops repeat a block of statements while a condition holds. The for loop is entry-controlled and bundles initialisation, condition and update in one line — best when the number of repetitions is known. The while loop is also entry-controlled but keeps only the condition in the header, so initialisation happens before and update inside the body; it may run zero times. The do…while loop is exit-controlled: the body runs first and the condition is tested afterwards, so it always executes at least once. JavaScript also provides for…in for object keys, for…of for iterable values (arrays, strings, Map, Set) and forEach for arrays. The break statement terminates the loop immediately and continue skips the rest of the current iteration; an update that is forgotten in while creates an infinite loop.',
    intro:
      'Loop = repeat. for tab jab ginti pata ho (1 se 10), while tab jab condition par nirbhar ho (jab tak input galat), do…while tab jab body kam se kam ek baar chalni hi chahiye. Exam mein teeno ka syntax + flow (init → test → body → update) poochha jaata hai, aur break/continue ka farak. Neeche live demo mein for se table, while se countdown aur do…while se menu banta hua dikhaya gaya hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Teen Loop',
        body:
          'for (init; condition; update) { body } — teeno hisse ek hi line mein; condition pehle check hoti hai (entry-controlled), isliye 0 baar bhi chal sakta hai. while (condition) { body; update } — sirf condition header mein; update body ke andar likhna padta hai. do { body } while (condition); — body pehle chalti hai, condition baad mein (exit-controlled), isliye kam se kam ek baar chalta hai.',
        body2:
          'break loop ko turant todta hai; continue sirf current iteration chhodta hai. for…in object ki keys par ghoomta hai, for…of array/string ki values par. Array ke liye forEach bhi hai — callback se har item par kaam. dhyan: while mein update bhool gaye to infinite loop; browser tab hang ho jaata hai.',
        chips: ['for', 'while', 'do…while', 'break', 'continue', 'for…of', 'infinite loop'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'for vs while vs do…while',
        diagram: 'js-loops',
        caption:
          'Teeno ka step order alag hai: for mein init-test-body-update, while mein test pehle, do…while mein body pehle. Neeche "kam se kam kitni baar chalta hai" bhi likha hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'for Loop — Multiplication Table',
        intro:
          'Ek for loop chala kar poori table generate hui hai — rows HTML mein nahi likhi gayin, JS ne banayin. Table e.g. 7 ka; input se number badal sakte hain.',
        language: 'html',
        filename: 'table.html',
        code: `<input id="num" type="number" value="7">
<table id="tbl"></table>

<script>
  function build() {
    var n = Number(document.getElementById("num").value) || 1;
    var tbl = document.getElementById("tbl");
    tbl.innerHTML = "";                 // purani rows hatao
    for (var i = 1; i <= 10; i++) {
      var row = tbl.insertRow();
      row.insertCell().textContent = n + " × " + i;
      row.insertCell().textContent = "= " + (n * i);
    }
  }
  document.getElementById("num").addEventListener("input", build);
  build();
</script>`,
        html: `<div style="margin-bottom:10px;">
  <label style="font-size:13px;">Table of </label>
  <input id="num" type="number" value="7" style="width:64px;padding:5px 8px;border:1px solid #b9c8e8;border-radius:6px;">
</div>
<table id="tbl" style="font-size:13px;border-collapse:collapse;width:100%;"></table>`,
        script: `document.getElementById("num").value = 7;
function build() {
  var n = Number(document.getElementById("num").value) || 1;
  var tbl = document.getElementById("tbl");
  tbl.innerHTML = "";
  for (var i = 1; i <= 10; i++) {
    var row = tbl.insertRow();
    var c1 = row.insertCell();
    c1.textContent = n + " × " + i;
    c1.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;color:#22314f;";
    var c2 = row.insertCell();
    c2.textContent = "= " + (n * i);
    c2.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;font-weight:700;color:#0047ff;";
  }
}
document.getElementById("num").addEventListener("input", build);
build();`,
        caption:
          'i = 1 se 10 tak — 10 rows. Input badal kar dekhein, table turant ban jaati hai; yahi loop ka fayda hai (100 rows ke liye bhi code wahi rehta).',
        height: 300,
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'while aur do…while — Farak Saaf Dikhta Hua',
        intro:
          'Left se countdown while se bana hai, right se do…while se. Neeche wahi case hai jahan condition shuru se false hai — dhyan se dekhein: while 0 baar chalta hai, do…while ek baar phir bhi chalta hai.',
        language: 'javascript',
        filename: 'loops.html',
        code: `<p><b>while (count > 0)</b> — condition pehle</p>
<ul id="a"></ul>

<p><b>do…while</b> — body pehle, kam se kam ek baar</p>
<ul id="b"></ul>

<p><b>Condition shuru se false:</b></p>
<ul id="c"></ul>

<script>
  // while — 3 se 1 tak countdown
  var count = 3;
  while (count > 0) {
    add("a", "count = " + count);
    count--;                     // update — warna infinite loop
  }

  // do…while — kam se kam ek baar
  var n = 0;
  do {
    add("b", "iteration " + n);
    n++;
  } while (n < 3);

  // condition false hone par farak
  var z = 5;
  while (z < 5) { add("c", "while chala"); }
  do { add("c", "do…while chala (ek baar)"); } while (z < 5);

  function add(id, text) {
    var li = document.createElement("li");
    li.textContent = text;
    document.getElementById(id).appendChild(li);
  }
</script>`,
        html: `<p style="margin:0 0 4px;font-size:13px;"><b>while (count &gt; 0)</b> — condition pehle</p>
<ul id="a" style="margin:0 0 10px;padding-left:20px;font-size:13px;"></ul>
<p style="margin:0 0 4px;font-size:13px;"><b>do…while</b> — body pehle</p>
<ul id="b" style="margin:0 0 10px;padding-left:20px;font-size:13px;"></ul>
<p style="margin:0 0 4px;font-size:13px;"><b>Condition shuru se false (5 &lt; 5):</b></p>
<ul id="c" style="margin:0;padding-left:20px;font-size:13px;"></ul>`,
        script: `function add(id, text) {
  var li = document.createElement("li");
  li.textContent = text;
  document.getElementById(id).appendChild(li);
}
var count = 3;
while (count > 0) { add("a", "count = " + count); count--; }
var n = 0;
do { add("b", "iteration " + n); n++; } while (n < 3);
var z = 5;
while (z < 5) { add("c", "while chala"); }
do { add("c", "do…while chala (ek baar)"); } while (z < 5);`,
        caption:
          'Teesra list sabse important hai: while ki condition false thi isliye kuch nahi chala, par do…while ne ek baar body chala hi di — yahi entry-controlled vs exit-controlled ka farak hai.',
        height: 300,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'for vs while vs do…while',
        columns: ['for', 'while', 'do…while'],
        columnColors: ['#00d4ff', '#c4ff00', '#ff8800'],
        rows: [
          { label: 'Type', values: ['Entry-controlled', 'Entry-controlled', 'Exit-controlled'] },
          { label: 'Condition kab', values: ['Body se pehle', 'Body se pehle', 'Body ke baad'] },
          { label: 'Minimum runs', values: ['0', '0', '1'] },
          { label: 'Init / update', values: ['Header mein', 'Bahar / andar', 'Bahar / andar'] },
          { label: 'Best for', values: ['Ginti pata ho', 'Condition par depend', 'Menu, retry — ek baar to chale'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Loop Ke Points',
        points: [
          'for: init ek baar, phir test → body → update — test false hone par loop khatam.',
          'while mein update body ke andar likhna padta hai — bhoolne par infinite loop.',
          'do…while mein semicolon: while (condition); — ye aam galti hai.',
          'break = loop se bahar; continue = sirf ye iteration skip.',
          'for…of values (array/string), for…in keys (object) — dono ka farak exam mein poochha jaata hai.',
          'Array ke liye forEach / map / filter bhi hote hain, par exam mein teen classic loops hi likhne hain.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'for = ginti known; while = condition based; do…while = kam se kam ek baar.',
          'Entry vs exit controlled — condition kab check hoti hai.',
          'break / continue se control.',
          'Infinite loop se bachne ke liye update zaroori.',
          'for…of values par, for…in keys par.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the for, while and do…while loops in JavaScript with syntax and examples. Differentiate them.',
        answer:
          '**for** — entry-controlled, ginti known:\n```\nfor (let i = 1; i <= 5; i++) {\n  console.log(i);      // 1 2 3 4 5\n}\n```\n\n**while** — condition pehle:\n```\nlet i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}\n```\n\n**do…while** — body pehle, kam se kam ek baar:\n```\nlet i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 5);\n```\n\n| Basis | for | while | do…while |\n|---|---|---|---|\n| Type | entry | entry | exit |\n| Min runs | 0 | 0 | 1 |\n| Init/update | header | bahar/andar | bahar/andar |\n| Best | count known | condition | ek baar to chale |\n\n**Farak ka proof:**\n```\nlet x = 9;\nwhile (x < 5) { console.log("W"); }   // kuch nahi\ndo { console.log("D"); } while (x < 5); // D ek baar\n```\n\n**Diagram:** Refer to the loops diagram.',
      },
      {
        question: 'Differentiate between break and continue with examples.',
        answer:
          '**break:** loop ko turant khatam karke bahar nikaal deta hai.\n**continue:** sirf current iteration chhodta hai, loop chalta rehta hai.\n\n```\nfor (let i = 1; i <= 5; i++) {\n  if (i === 3) break;\n  console.log(i);      // 1 2\n}\n\nfor (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;\n  console.log(i);      // 1 2 4 5\n}\n```\n\n| Basis | break | continue |\n|---|---|---|\n| Kaam | Loop se bahar | Iteration skip |\n| Baaki iterations | Nahi chalti | Chalti hain |\n| Use | Match mil gaya, error mila | Kuch items skip karne hain |\n\n**Nested loop mein:** break sirf sabse andar wala loop todta hai (label ke bina).\n\n**Exam line:** "break loop ko todta hai, continue sirf ek chakkar chhodta hai."',
      },
      {
        question: 'What is an infinite loop? How can it be avoided in JavaScript? Give an example.',
        answer:
          '**Infinite loop:** jab condition kabhi false na ho, isliye loop khatam hi na ho — browser tab hang ho jaata hai.\n\n**Example (galti):**\n```\nlet i = 1;\nwhile (i <= 5) {\n  console.log(i);   // i kabhi badhta hi nahi\n}\n```\n\n**Sahi:**\n```\nlet i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;              // update zaroori\n}\n```\n\n**Doosre causes:**\n- `for (;;)` bina break\n- condition mein variable galat side (`i >= 5` jab ghatana ho)\n- floating/NaN comparison\n\n**Bachne ke tareeke:**\n1. Har loop mein update likhein\n2. Condition test karein (i ki value print karke)\n3. break ke saath safety limit rakhein\n4. DevTools se pause karke stack dekhein\n\n**Jaan-boojh kar infinite:** `while (true) { … if (stop) break; }` — game loop mein common.',
      },
    ],
  },

  // ==========================================================
  // 2.6 — Functions, dialog boxes and page redirect
  // ==========================================================
  {
    id: 'wt-js-functions',
    number: '2.6',
    title: 'Functions, Dialog Boxes and Page Redirect',
    subtitle: 'Reusable code, user se baat aur doosre page par jaana',
    icon: 'loop',
    accent: '#ff7ab2',
    englishDefinition:
      'A function is a named, reusable block of statements that runs when it is called. JavaScript supports function declarations (hoisted), function expressions, arrow functions (ES6) and methods. Parameters receive arguments, return sends a value back (a function without return gives undefined), and default parameters are allowed. Functions may be called from events, making them the basic unit of behaviour in a page. The browser provides three dialog boxes on the window object: alert(message) shows information with an OK button, confirm(message) returns true or false, and prompt(message, default) returns the typed string or null on cancel. Page redirect (navigation) is done with window.location.href = "url" (adds a history entry), window.location.replace("url") (replaces the current entry so Back does not return), window.location.assign("url"), or setTimeout for a delayed redirect.',
    intro:
      'Function matlab "ek baar likho, baar-baar chalao". Isme parameter (input) aur return (output) hote hain. Dialog boxes user se baat karne ka purana tareeka hain: alert (sirf batana), confirm (haan/na), prompt (input lena) — teeno window object ke methods hain aur page ko rok dete hain jab tak user jawab na de. Page redirect se script kisi doosre URL par le jaati hai — login ke baad dashboard, ya countdown ke baad home page. Exam mein teeno ka code example likhna hota hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Function, Dialog aur Redirect',
        body:
          'Function declaration: function add(a, b) { return a + b; } — a, b parameters hain, call add(2, 3) par 5 return hota hai. Function expression: const add = function (a, b) { ... }; Arrow function: const add = (a, b) => a + b; — teeno ka kaam same hai. Return na likhein to function undefined deta hai.',
        body2:
          'Dialog boxes: alert("Saved!") — sirf OK; confirm("Delete?") — OK par true, Cancel par false; prompt("Name?", "Riya") — typed string ya Cancel par null. Ye modal hote hain, isliye script ruk jaati hai. Redirect: window.location.href = "dashboard.html" (history mein naya entry), location.replace("url") (purana hata kar naya — Back se wapas nahi), location.assign("url") (href jaisa).',
        chips: ['function', 'parameter', 'return', 'arrow function', 'alert', 'confirm', 'prompt', 'location.href'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Function ka Safar + Dialog + Redirect',
        diagram: 'js-function-dialog',
        caption:
          'Left: definition → call → return. Right: alert/confirm/prompt ka return value, aur neeche page redirect ke do tareeke. Exam mein ye teeno hisse alag-alag questions bante hain.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Functions — Parameter, Return aur Arrow Function',
        intro:
          'Ye teen functions live chal rahe hain: simple function, default parameter, aur arrow function. Value badal kar "Calculate" dabaiye — result function se hi aata hai.',
        language: 'javascript',
        filename: 'functions.html',
        code: `<input id="m1" type="number" value="78">
<input id="m2" type="number" value="65">
<button id="btn">Calculate</button>
<p id="out"></p>

<script>
  // 1. normal function — do parameter, ek return
  function average(a, b) {
    return (a + b) / 2;
  }

  // 2. default parameter — argument na do to "Student" use hoga
  function greet(name = "Student") {
    return "Hello " + name + "!";
  }

  // 3. arrow function — chhota syntax
  const isPass = (avg) => avg >= 40;

  function show() {
    var a = Number(document.getElementById("m1").value);
    var b = Number(document.getElementById("m2").value);
    var avg = average(a, b);
    document.getElementById("out").textContent =
      greet("Riya") + " Average = " + avg +
      " → " + (isPass(avg) ? "PASS ✅" : "FAIL ❌");
  }

  document.getElementById("btn").addEventListener("click", show);
  show();
</script>`,
        html: `<div style="margin-bottom:10px;font-size:13px;">
  Marks 1 <input id="m1" type="number" value="78" style="width:62px;padding:5px 8px;border:1px solid #b9c8e8;border-radius:6px;margin:0 10px 0 4px;">
  Marks 2 <input id="m2" type="number" value="65" style="width:62px;padding:5px 8px;border:1px solid #b9c8e8;border-radius:6px;margin-left:4px;">
</div>
<button id="btn" style="padding:7px 14px;border:0;border-radius:8px;background:#0047ff;color:#fff;cursor:pointer;">Calculate</button>
<p id="out" style="margin:12px 0 0;font-weight:700;color:#12203d;"></p>`,
        script: `function average(a, b) { return (a + b) / 2; }
function greet(name) { return "Hello " + (name || "Student") + "!"; }
function isPass(avg) { return avg >= 40; }
function show() {
  var a = Number(document.getElementById("m1").value);
  var b = Number(document.getElementById("m2").value);
  var avg = average(a, b);
  var out = document.getElementById("out");
  out.textContent = greet("Riya") + " Average = " + avg + " → " + (isPass(avg) ? "PASS ✅" : "FAIL ❌");
  out.style.color = isPass(avg) ? "#0a7d4f" : "#c0392b";
}
document.getElementById("btn").addEventListener("click", show);
show();`,
        caption:
          'average() value return karta hai, greet() string, isPass() boolean. Arrow function ka chhota roop `const isPass = avg => avg >= 40` — exam mein likhna aasan hai.',
        height: 240,
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Dialog Boxes — alert, confirm, prompt',
        intro:
          'Teeno asli dialog hain (browser ka apna popup). Button dabaiye — jawab ke hisaab se neeche result likha jaata hai. Confirm/prompt mein Cancel dabakar bhi dekhein: return value badal jaata hai.',
        language: 'html',
        filename: 'dialogs.html',
        code: `<button id="b1">alert</button>
<button id="b2">confirm</button>
<button id="b3">prompt</button>
<p id="log">Abhi koi dialog nahi khula.</p>

<script>
  document.getElementById("b1").addEventListener("click", function () {
    alert("Ye alert box hai — sirf OK hota hai.");
    log("alert() chala — koi return value nahi");
  });

  document.getElementById("b2").addEventListener("click", function () {
    var ok = confirm("Kya aap delete karna chahte hain?");
    log(ok ? "confirm() ne true diya — delete" : "confirm() ne false diya — cancel");
  });

  document.getElementById("b3").addEventListener("click", function () {
    var name = prompt("Aapka naam?", "Riya");
    if (name === null) log("prompt() ne null diya — cancel");
    else if (name === "") log("prompt() ne khaali string di");
    else log("prompt() ne diya: " + name);
  });

  function log(text) {
    document.getElementById("log").textContent = text;
  }
</script>`,
        html: `<button id="b1" style="padding:7px 14px;border:0;border-radius:8px;background:#0047ff;color:#fff;cursor:pointer;">alert</button>
<button id="b2" style="padding:7px 14px;border:0;border-radius:8px;background:#00a86b;color:#fff;margin-left:6px;cursor:pointer;">confirm</button>
<button id="b3" style="padding:7px 14px;border:0;border-radius:8px;background:#ff8800;color:#fff;margin-left:6px;cursor:pointer;">prompt</button>
<p id="log" style="margin:14px 0 0;font-weight:700;color:#12203d;">Abhi koi dialog nahi khula.</p>`,
        script: `function log(text) { document.getElementById("log").textContent = text; }
document.getElementById("b1").addEventListener("click", function () {
  alert("Ye alert box hai — sirf OK hota hai.");
  log("alert() chala — koi return value nahi");
});
document.getElementById("b2").addEventListener("click", function () {
  var ok = confirm("Kya aap delete karna chahte hain?");
  log(ok ? "confirm() ne true diya — delete" : "confirm() ne false diya — cancel");
});
document.getElementById("b3").addEventListener("click", function () {
  var name = prompt("Aapka naam?", "Riya");
  if (name === null) log("prompt() ne null diya — cancel");
  else if (name === "") log("prompt() ne khaali string di");
  else log("prompt() ne diya: " + name);
});`,
        caption:
          'Teeno window ke methods hain. alert kuch return nahi karta, confirm true/false deta hai, prompt string ya null — yahi return value exam ka main point hai.',
        height: 200,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Page Redirect — Char Tareeke',
        intro:
          'Redirect matlab script se doosre page par jaana. Method ka farak history par padta hai — isliye login ke baad replace() better hota hai (Back dabane par login page wapas na khule).',
        language: 'javascript',
        filename: 'redirect.js',
        code: `// 1. Sabse common — naya history entry banta hai
window.location.href = "dashboard.html";

// 2. Purana page history se hata kar naya — Back se wapas nahi
window.location.replace("dashboard.html");

// 3. assign() — href jaisa hi
window.location.assign("dashboard.html");

// 4. Thodi der baad redirect (jaise "3 second mein home page…")
setTimeout(function () {
  window.location.href = "home.html";
}, 3000);

// 5. Naya tab / window
window.open("https://example.com", "_blank");

// 6. Sirf reload
location.reload();

// Condition ke saath — login check
if (!sessionStorage.getItem("user")) {
  location.replace("login.html");
}`,
        note:
          'href = naya entry (Back se wapas aa sakte hain) · replace = purana entry replace (Back se purane page par nahi jaate) · assign = href jaisa. Preview mein redirect nahi dikhaya gaya — wo poora page badal deta hai.',
      },
      {
        type: 'output',
        kicker: 'Output (Illustration)',
        title: 'Redirect Hone Par Browser Mein Kya Hota Hai',
        intro:
          'Ye ek illustration hai, chalne wala page nahi — real redirect is preview ko chhod deta hai. Dekhein ki address bar aur history kaise badalte hain.',
        html: `<div style="font-family:'Segoe UI',system-ui,sans-serif;">
  <div style="border:1px solid #c9d8e8;border-radius:10px 10px 0 0;background:#eef3fb;padding:8px 10px;font-size:12px;color:#445;">
    <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ff5f57;margin-right:5px;"></span>
    <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#febc2e;margin-right:5px;"></span>
    <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#28c840;margin-right:10px;"></span>
    <span style="display:inline-block;padding:3px 12px;border-radius:20px;background:#fff;border:1px solid #c9d8e8;color:#22314f;">college.edu/course.html</span>
  </div>
  <div style="border:1px solid #c9d8e8;border-top:0;border-radius:0 0 10px 10px;padding:14px;">
    <p style="margin:0 0 10px;font-size:13px;"><b>Step 1 —</b> user ne "Submit" dabaya, script chali:</p>
    <pre style="margin:0 0 12px;padding:8px 10px;background:#f5f8ff;border-radius:6px;font-size:12px;color:#0047ff;">location.href = "dashboard.html";</pre>
    <p style="margin:0 0 6px;font-size:13px;"><b>Step 2 —</b> browser naya page load karta hai:</p>
    <div style="padding:6px 12px;border-radius:20px;background:#e8f7ee;border:1px solid #9fd8b6;color:#0a7d4f;display:inline-block;font-size:12px;">college.edu/dashboard.html</div>
    <p style="margin:12px 0 0;font-size:12.5px;color:#556;">
      <b>href / assign:</b> history = [course, dashboard] → Back se course wapas<br>
      <b>replace:</b> history = [dashboard] → Back se course par nahi jaate
    </p>
  </div>
</div>`,
        height: 320,
        caption:
          'Isi liye login ke baad replace() use karte hain — user Back dabakar login page par wapas na jaaye.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'alert vs confirm vs prompt',
        columns: ['alert()', 'confirm()', 'prompt()'],
        columnColors: ['#00d4ff', '#c4ff00', '#ff8800'],
        rows: [
          { label: 'Kaam', values: ['Message dikhana', 'Haan/Na poochhna', 'Input lena'] },
          { label: 'Buttons', values: ['OK', 'OK + Cancel', 'OK + Cancel'] },
          { label: 'Return', values: ['undefined', 'true / false', 'string / null'] },
          { label: 'Example use', values: ['"Saved!"', 'delete confirmation', 'naam ya quantity'] },
          { label: 'Modal', values: ['Haan', 'Haan', 'Haan'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Zaroori Points',
        points: [
          'Function = reusable block; call karne par chalta hai; return se value deta hai.',
          'Parameter = definition mein, argument = call ke waqt bheji gayi value.',
          'Return na ho to function undefined deta hai.',
          'alert/confirm/prompt window ke methods hain aur modal hote hain — script ruk jaati hai.',
          'confirm true/false, prompt string/null — yahi return values exam mein likhne hain.',
          'Redirect: location.href (naya entry) vs location.replace (purana hataata hai).',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Function declaration, expression, arrow — teeno ka kaam same.',
          'Parameter/argument, return value, default parameter.',
          'alert = info, confirm = true/false, prompt = string/null.',
          'location.href/assign = naya history entry; replace = purana hataata hai.',
          'Redirect se pehle validation/logic chala lein — warna user ko wapas aana padta hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is a function in JavaScript? Explain function declaration, function expression and arrow function with examples.',
        answer:
          '**Function:** named reusable block jo call karne par chalta hai; parameter leta hai aur return se value deta hai.\n\n**1. Function declaration (hoisted):**\n```\nfunction add(a, b) {\n  return a + b;\n}\nadd(2, 3);      // 5\n```\n\n**2. Function expression:**\n```\nconst add = function (a, b) {\n  return a + b;\n};\n```\n\n**3. Arrow function (ES6):**\n```\nconst add = (a, b) => a + b;      // ek line\nconst square = n => n * n;\n```\n\n**4. Default parameter:**\n```\nfunction greet(name = "Student") {\n  return "Hello " + name;\n}\ngreet();        // Hello Student\n```\n\n**Points:**\n- Parameter = definition mein; argument = call ke waqt\n- `return` na ho to `undefined`\n- Aaj `let`/`const` ke saath expression/arrow zyada use hote hain\n\n**Diagram:** Refer to the function diagram.',
      },
      {
        question: 'Explain alert, confirm and prompt dialog boxes with their return values and examples.',
        answer:
          'Teeno `window` object ke methods hain aur **modal** hote hain (script tab tak rukti hai).\n\n**1. alert()** — message + OK\n```\nalert("Data saved!");\n```\nReturn: `undefined`\n\n**2. confirm()** — message + OK/Cancel\n```\nlet ok = confirm("Delete this record?");\nif (ok) deleteRow();\n```\nReturn: **true** (OK) / **false** (Cancel)\n\n**3. prompt()** — message + input + OK/Cancel\n```\nlet name = prompt("Your name?", "Riya");\nif (name !== null) alert("Hi " + name);\n```\nReturn: **string** / **null** (Cancel) / `""` (empty OK)\n\n| Dialog | Buttons | Return |\n|---|---|---|\n| alert | OK | undefined |\n| confirm | OK, Cancel | true / false |\n| prompt | OK, Cancel | string / null |\n\n**Note:** aaj inki jagah custom modal/HTML form use karte hain (styling + non-blocking), par exam ke liye teeno ka code likhna zaroori hai.\n\n**Diagram:** Refer to the dialog diagram.',
      },
      {
        question: 'How can a page be redirected in JavaScript? Differentiate location.href and location.replace().',
        answer:
          '**Tareeke:**\n```\n// 1. href — naya history entry\nwindow.location.href = "dashboard.html";\n\n// 2. replace — purana entry replace\nwindow.location.replace("dashboard.html");\n\n// 3. assign — href jaisa\nwindow.location.assign("dashboard.html");\n\n// 4. delay ke saath\nsetTimeout(() => location.href = "home.html", 3000);\n\n// 5. naya tab\nwindow.open("https://example.com", "_blank");\n```\n\n| Basis | location.href | location.replace |\n|---|---|---|\n| History | Naya entry | Purana hataata hai |\n| Back button | Purane page par jaata hai | Nahi jaata |\n| Use | Normal navigation | Login ke baad, one-time page |\n\n**Example (login ke baad):**\n```\nif (loginSuccess) {\n  location.replace("dashboard.html");   // Back se login page na khule\n}\n```\n\n**Dhyan:** redirect ke baad neeche ka code nahi chalta — isliye `return;` lagayein.\n\n**Diagram:** Refer to the function/dialog/redirect diagram.',
      },
    ],
  },
];
