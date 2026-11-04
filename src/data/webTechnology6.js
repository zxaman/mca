// ============================================================
// WEB TECHNOLOGY — Unit II, topics 2.7 to 2.15 (JavaScript part 2)
//  2.7 Cookies · 2.8 Events · 2.9 Objects · 2.10 Number & Math
//  2.11 String · 2.12 Array · 2.13 Date & Temporal
//  2.14 Asynchronous JS · 2.15 Introduction to Bootstrap
// ============================================================

export const webTechnologyTopicsF = [
  // ==========================================================
  // 2.7 — Cookies
  // ==========================================================
  {
    id: 'wt-js-cookies',
    number: '2.7',
    title: 'Cookies in JavaScript',
    subtitle: 'Browser mein chhota data — set, read, delete',
    icon: 'lock',
    accent: '#ffb86c',
    englishDefinition:
      'A cookie is a small piece of text data (about 4 KB) that a web server sends to the browser and the browser stores per domain, then sends back with every request to that domain. In JavaScript cookies are handled through the single string property document.cookie: assigning "name=value; expires=date; path=/; domain=...; secure; samesite=Strict" writes a cookie, and reading document.cookie returns all visible cookies as one semicolon-separated string. Cookies are used for session management (login IDs), personalisation (theme, language) and tracking. They can be session cookies (deleted when the browser closes) or persistent (with an expires date or max-age). Limitations: 4 KB per cookie, browsers allow roughly 50 per domain, every cookie travels with each HTTP request, and a cookie marked HttpOnly cannot be read by JavaScript at all.',
    intro:
      'Cookie wo chhota sa note hai jo server browser ko deta hai — "ye user logged in hai, id=abc". Browser use store karta hai aur har request ke saath wapas bhej deta hai. JavaScript se cookie ka poora kaam ek hi property se hota hai: document.cookie. Iska ajeeb behaviour yaad rakhein — likhte waqt ek cookie set hoti hai, par padhte waqt saari cookies ek saath ek string mein aati hain, isliye parse karna padta hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Cookie kya hai?',
        body:
          'Cookie = name=value pair + attributes, jo browser domain ke hisaab se store karta hai. JavaScript se: document.cookie = "user=Riya; max-age=3600; path=/"; — yahi ek line cookie set karti hai. document.cookie padhne par saari cookies ka ek string milta hai: "user=Riya; theme=dark".',
        body2:
          'Attributes: expires (date) ya max-age (seconds) — kitni der rahegi; path aur domain — kis URL par bhejni hai; Secure — sirf HTTPS par; HttpOnly — JavaScript na padh sake (server hi set kar sakta hai); SameSite — cross-site request par bhejni ya nahi (CSRF se bachav). Delete karne ka tareeka: wahi cookie max-age=0 ya expires past date ke saath dobara set kar dena.',
        chips: ['document.cookie', 'name=value', 'expires', 'max-age', 'path', 'HttpOnly', 'SameSite'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Cookie ka Safar aur Attributes',
        diagram: 'cookies',
        caption:
          'Server Set-Cookie bhejta hai → browser store karta hai → agla request Cookie header ke saath jaata hai. Neeche saare attributes. Exam mein ye figure + ek document.cookie line = poore marks.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'document.cookie — Set, Read, Delete (Chalta Hua)',
        intro:
          'Naam aur value likh kar "Set" dabaiye — cookie ban jaayegi aur neeche document.cookie ka poora string dikhega. "Delete" usi cookie ko max-age=0 se hataata hai. Preview sandbox cookies block karta hai, isliye ye demo shuru mein hi check karta hai ki asli cookie chal rahi hai ya memory-jar mode.',
        language: 'html',
        filename: 'cookie.html',
        code: `Name: <input id="cn" value="user">
Value: <input id="cv" value="Riya">
<button id="set">Set cookie</button>
<button id="del">Delete</button>
<p>document.cookie → <b id="jar"></b></p>
<p id="mode"></p>

<script>
  // 1. likhna — ek cookie, attributes ke saath
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) +
      "; expires=" + d.toUTCString() + "; path=/";
  }

  // 2. padhna — saari cookies ek string mein
  function getCookie(name) {
    var parts = document.cookie.split(";");
    for (var i = 0; i < parts.length; i++) {
      var c = parts[i].trim().split("=");
      if (c[0] === name) return decodeURIComponent(c[1] || "");
    }
    return null;
  }

  // 3. delete — max-age=0 ke saath dobara likhna
  function deleteCookie(name) {
    document.cookie = name + "=; max-age=0; path=/";
  }

  function show() {
    document.getElementById("jar").textContent =
      document.cookie || "(khaali)";
  }

  document.getElementById("set").addEventListener("click", function () {
    setCookie(document.getElementById("cn").value,
              document.getElementById("cv").value, 7);
    show();
  });
  document.getElementById("del").addEventListener("click", function () {
    deleteCookie(document.getElementById("cn").value);
    show();
  });
  show();
</script>`,
        html: `<div style="font-size:13px;margin-bottom:8px;">
  Name <input id="cn" value="user" style="width:90px;padding:5px 8px;border:1px solid #b9c8e8;border-radius:6px;margin:0 10px 0 4px;">
  Value <input id="cv" value="Riya" style="width:110px;padding:5px 8px;border:1px solid #b9c8e8;border-radius:6px;margin-left:4px;">
</div>
<button id="set" style="padding:6px 14px;border:0;border-radius:8px;background:#0047ff;color:#fff;cursor:pointer;">Set cookie</button>
<button id="del" style="padding:6px 14px;border:0;border-radius:8px;background:#c0392b;color:#fff;margin-left:6px;cursor:pointer;">Delete</button>
<p style="margin:12px 0 4px;font-size:13px;">document.cookie → <b id="jar" style="color:#0047ff;">…</b></p>
<p id="mode" style="margin:0;font-size:11.5px;color:#7a8699;"></p>`,
        script: `var jar = "";
var real = true;
try {
  document.cookie = "__probe=1; path=/";
  real = document.cookie.indexOf("__probe") !== -1;
  document.cookie = "__probe=; max-age=0; path=/";
} catch (e) { real = false; }

function writeCookie(str) {
  if (real) { document.cookie = str; } else { jar = str.split(";")[0]; }
}
function readCookies() { return real ? document.cookie : jar; }

function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  writeCookie(name + "=" + encodeURIComponent(value) + "; expires=" + d.toUTCString() + "; path=/");
}
function deleteCookie(name) { writeCookie(name + "=; max-age=0; path=/"); }
function show() {
  var v = readCookies();
  document.getElementById("jar").textContent = v || "(khaali)";
  document.getElementById("mode").textContent = real
    ? "Mode: asli cookie (document.cookie chal raha hai)"
    : "Mode: memory-jar simulation — is sandboxed preview mein browser cookies block karta hai, real page par yahi code asli cookie set karega";
}
document.getElementById("set").addEventListener("click", function () {
  setCookie(document.getElementById("cn").value, document.getElementById("cv").value, 7);
  show();
});
document.getElementById("del").addEventListener("click", function () {
  deleteCookie(document.getElementById("cn").value);
  show();
});
show();`,
        caption:
          'Real page par document.cookie asli cookie set karta hai; is preview ke sandbox mein browser cookies block karta hai, isliye demo memory-jar mode mein chalta hai — code bilkul wahi hai.',
        height: 250,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Cookie Ke Saare Attributes — Ek Jagah',
        intro:
          'Exam mein "cookie set karne ka syntax, attributes ke saath" poochha jaata hai. Neeche ek-ek attribute ka matlab comment mein hai.',
        language: 'javascript',
        filename: 'cookies.js',
        code: `// ek cookie — saare attributes ke saath
document.cookie =
  "sessionId=abc123" +          // name=value  (zaroori)
  "; max-age=3600" +            // 1 ghante baad expire (seconds)
  "; path=/" +                  // site ke har page par bhejo
  "; domain=.college.edu" +     // subdomains par bhi
  "; secure" +                  // sirf HTTPS
  "; samesite=Strict";          // cross-site request par nahi

// expires bhi chalega (date object se)
var d = new Date();
d.setDate(d.getDate() + 30);
document.cookie = "theme=dark; expires=" + d.toUTCString() + "; path=/";

// padhna — ek string, split karna padta hai
console.log(document.cookie);   // "sessionId=abc123; theme=dark"

// ek cookie ki value
function getCookie(name) {
  var all = document.cookie.split(";");
  for (var i = 0; i < all.length; i++) {
    var kv = all[i].trim().split("=");
    if (kv[0] === name) return decodeURIComponent(kv[1]);
  }
  return null;
}

// delete — same name, past date / max-age=0
document.cookie = "theme=; max-age=0; path=/";

// HttpOnly cookie JS se NAHI padhi ja sakti (server set karta hai)`,
        note:
          'document.cookie kabhi object nahi deta — sirf string. Isliye set karne ki line aur get karne ka function dono yaad rakhne padte hain.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Cookie vs localStorage vs sessionStorage',
        columns: ['Cookie', 'localStorage', 'sessionStorage'],
        columnColors: ['#ffb86c', '#c4ff00', '#00d4ff'],
        rows: [
          { label: 'Size', values: ['~4 KB', '~5–10 MB', '~5 MB'] },
          { label: 'Server ko jaata', values: ['Har request ke saath', 'Nahi', 'Nahi'] },
          { label: 'Expiry', values: ['expires / max-age', 'Manually delete', 'Tab band = khatam'] },
          { label: 'JS access', values: ['Haan (HttpOnly ho to nahi)', 'Haan', 'Haan'] },
          { label: 'Use', values: ['Login session, tracking', 'Theme, cache, offline data', 'Ek tab ka temp data'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Cookie Ke Points',
        points: [
          'document.cookie se set — sirf ek cookie per assignment; padhne par saari cookies ek string mein.',
          'name=value zaroori; uske baad attributes semicolon se alag.',
          'max-age seconds mein, expires date (UTC string) mein.',
          'path=/ matlab poore site par available; path=/admin sirf us folder par.',
          'HttpOnly cookie JavaScript se read nahi hoti — XSS se bachne ka upaay.',
          'Delete = wahi cookie max-age=0 ya past expires ke saath dobara set karna.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Cookie = 4 KB tak ka text data, per domain, har request ke saath.',
          'JS API: ek hi property — document.cookie (string).',
          'Attributes: expires/max-age, path, domain, secure, HttpOnly, SameSite.',
          'session vs persistent cookie; delete karne ka tareeka.',
          'Bhaari data ke liye localStorage better — cookies har request mein travel karti hain.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is a cookie? Explain how cookies are created, read and deleted in JavaScript with examples.',
        answer:
          '**Cookie:** browser mein stored chhota text data (~4 KB) jo server set karta hai aur har request ke saath wapas server ko jaata hai — session maintain karne ke liye.\n\n**Structure:** `name=value; expires=...; path=...; domain=...; secure; samesite=...`\n\n**1. Create:**\n```\ndocument.cookie = "user=Riya; max-age=3600; path=/";\n```\n\n**2. Read:** `document.cookie` saari cookies ek string deta hai\n```\n"user=Riya; theme=dark"\n\nfunction getCookie(name) {\n  var all = document.cookie.split(";");\n  for (var i = 0; i < all.length; i++) {\n    var kv = all[i].trim().split("=");\n    if (kv[0] === name) return kv[1];\n  }\n  return null;\n}\n```\n\n**3. Delete:** same name, max-age=0\n```\ndocument.cookie = "user=; max-age=0; path=/";\n```\n\n**Diagram:** Refer to the cookie flow diagram.',
      },
      {
        question: 'Explain the attributes of a cookie and the difference between a session cookie and a persistent cookie.',
        answer:
          '**Attributes:**\n\n| Attribute | Kaam |\n|---|---|\n| name=value | Cookie ka naam aur data |\n| expires / max-age | Kab tak rahegi |\n| path | Kis URL path par bhejni hai |\n| domain | Kis domain (aur subdomain) par |\n| secure | Sirf HTTPS par bhejo |\n| HttpOnly | JS se read na ho |\n| SameSite | Cross-site request par bhejna ya nahi |\n\n**Session vs persistent:**\n\n| Basis | Session cookie | Persistent cookie |\n|---|---|---|\n| Expiry | Browser band = khatam | expires/max-age tak |\n| Set | Bina expires ke | expires ya max-age ke saath |\n| Use | Login session | "Remember me", theme, language |\n\n```\n// session\ndocument.cookie = "sid=abc; path=/";\n\n// persistent — 30 din\ndocument.cookie = "theme=dark; max-age=" + (30*24*60*60) + "; path=/";\n```\n\n**Security:** password cookie mein kabhi nahi; sensitive session cookie `HttpOnly` + `Secure` + `SameSite` ke saath.',
      },
      {
        question: 'What are the limitations of cookies? Compare cookies with localStorage and sessionStorage.',
        answer:
          '**Limitations of cookies:**\n1. **Size** — sirf ~4 KB per cookie\n2. **Count** — browser per domain ~50 cookies\n3. **Traffic** — har HTTP request ke saath jaati hain (bandwidth)\n4. **Security** — JS padh sakti hai (XSS risk), user edit/delete kar sakta hai\n5. **Privacy** — third-party cookies tracking ke liye use hote hain, aaj browsers block karte hain\n\n**Comparison:**\n\n| Basis | Cookie | localStorage | sessionStorage |\n|---|---|---|---|\n| Size | 4 KB | 5–10 MB | 5 MB |\n| Request ke saath | Haan | Nahi | Nahi |\n| Expiry | expires/max-age | Manual | Tab close |\n| Server access | Haan (automatic) | Nahi | Nahi |\n| Best for | Session/auth | Theme, cache | Temp per-tab data |\n\n```\nlocalStorage.setItem("theme", "dark");\nlocalStorage.getItem("theme");\nsessionStorage.setItem("step", "2");\n```\n\n**Exam line:** "Cookie server ke liye hoti hai (wo bhi padhta hai), storage browser ke liye."',
      },
    ],
  },

  // ==========================================================
  // 2.8 — Events
  // ==========================================================
  {
    id: 'wt-js-events',
    number: '2.8',
    title: 'Events and Event Handling in JavaScript',
    subtitle: 'Click, typing, submit — page ki har harkat pakadna',
    icon: 'zap',
    accent: '#00ff88',
    englishDefinition:
      'An event is an action or occurrence that the browser reports to JavaScript — a click, key press, mouse move, form submit, page load, timer or network response. Event handling is the process of attaching a function (listener/handler) that runs when the event fires: element.addEventListener("click", handler) is the modern method, while onclick="..." attributes and element.onclick = handler are older. Every handler receives an Event object with properties such as type, target, currentTarget, clientX/clientY and key, and methods preventDefault() (stop the browser\'s default action, e.g. form submission or link navigation) and stopPropagation() (stop the event from travelling further). Events propagate in three phases — capturing (window → target), target, and bubbling (target → window) — which enables event delegation: one listener on a parent can handle clicks for all its children.',
    intro:
      'Event = "kuch hua" ki khabar. Button dabaya, key press hui, form submit hua — browser JS ko batata hai. Handler lagane ka modern tareeka addEventListener hai. Do concepts exam mein pakke poochhe jaate hain: (1) event object (target, type, preventDefault), (2) bubbling aur capturing — kyunki inhi se event delegation samajh aata hai. Neeche live demo mein aap khud box par click karke event ka poora data dekh sakte hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Event aur Handler',
        body:
          'Event browser ki taraf se aayi khabar hai — "user ne click kiya". Handler wo function hai jo us khabar par chalta hai: btn.addEventListener("click", function (e) { ... }); Handler ko Event object milta hai jisme type ("click"), target (jis element par hua), clientX/clientY (mouse position), key (keyboard) jaise properties hote hain.',
        body2:
          'Teen phase: capturing (window se target tak neeche), target (asli element), bubbling (target se wapas upar). Default mein listener bubbling phase mein chalta hai. Isi bubbling ki wajah se delegation possible hai — parent par ek listener lagao, children ke events bhi wahi pakde jaate hain. preventDefault() default action rokta hai (form submit, link jump); stopPropagation() event ka safar rokta hai.',
        chips: ['addEventListener', 'event object', 'bubbling', 'capturing', 'preventDefault', 'stopPropagation', 'delegation'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Capturing ↓, Target, Bubbling ↑',
        diagram: 'js-events',
        caption:
          'window → document → body → target (capturing), phir target → body → document → window (bubbling). Right side handler ka code aur event object ki properties. Exam mein ye diagram + addEventListener ka example best answer hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Click Karo — Event Object aur Bubbling Log',
        intro:
          'Neeche wale box par click karein: upar wahi properties dikhengi jo handler ko milti hain (type, target, coordinates). Department wale teen buttons par click karke bubbling ka order bhi dekh sakte hain — child pehle, parent baad mein.',
        language: 'html',
        filename: 'events.html',
        code: `<div id="box">Mujhe click karo</div>
<p id="info"></p>

<div id="parent">
  <button class="item">Item A</button>
  <button class="item">Item B</button>
  <button class="item">Item C</button>
</div>
<ol id="log"></ol>

<script>
  // 1. event object ki properties
  document.getElementById("box").addEventListener("click", function (e) {
    document.getElementById("info").textContent =
      "type: " + e.type +
      " | target: " + e.target.id +
      " | x: " + Math.round(e.clientX);
  });

  // 2. event delegation — parent par ek listener
  document.getElementById("parent").addEventListener("click", function (e) {
    if (e.target.classList.contains("item")) {
      add("parent ko mila: " + e.target.textContent);
    }
  });
  // child ka apna listener pehle chalega (bubbling)
  document.querySelector(".item").addEventListener("click", function (e) {
    add("child (Item A) ka listener");
    // e.stopPropagation();   // comment hatayein to parent nahi sunega
  });

  function add(text) {
    var li = document.createElement("li");
    li.textContent = text;
    document.getElementById("log").appendChild(li);
  }
</script>`,
        html: `<div id="box" style="padding:16px;border-radius:10px;background:#eef6ff;border:2px dashed #0047ff;color:#0047ff;font-weight:700;text-align:center;cursor:pointer;">Mujhe click karo</div>
<p id="info" style="margin:8px 0 12px;font-size:12.5px;color:#445;"></p>
<div id="parent" style="display:flex;gap:8px;">
  <button class="item" style="padding:6px 12px;border:0;border-radius:8px;background:#0047ff;color:#fff;cursor:pointer;">Item A</button>
  <button class="item" style="padding:6px 12px;border:0;border-radius:8px;background:#2f6fff;color:#fff;cursor:pointer;">Item B</button>
  <button class="item" style="padding:6px 12px;border:0;border-radius:8px;background:#5b8cff;color:#fff;cursor:pointer;">Item C</button>
</div>
<ol id="log" style="margin:10px 0 0;padding-left:20px;font-size:12.5px;color:#0a7d4f;"></ol>`,
        script: `document.getElementById("box").addEventListener("click", function (e) {
  document.getElementById("info").textContent =
    "type: " + e.type + " | target: " + e.target.id + " | x: " + Math.round(e.clientX);
});
function add(text) {
  var li = document.createElement("li");
  li.textContent = text;
  document.getElementById("log").appendChild(li);
}
document.getElementById("parent").addEventListener("click", function (e) {
  if (e.target.classList && e.target.classList.contains("item")) {
    add("parent ko mila: " + e.target.textContent);
  }
});
document.querySelector(".item").addEventListener("click", function () {
  add("child (Item A) ka listener");
});`,
        caption:
          'Item A par click karne se dono listeners chalte hain — pehle child, phir parent (bubbling). Item B/C par sirf parent ka listener chalta hai, kyunki delegation se parent sab children handle karta hai.',
        height: 280,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Event Types aur Do Zaroori Methods',
        intro:
          'Exam mein "event handling ke tareeke" aur "preventDefault vs stopPropagation" alag-alag poochhe jaate hain. Neeche dono ka saaf example hai.',
        language: 'javascript',
        filename: 'event-types.js',
        code: `// ---- 1. listener lagane ke 3 tareeke ----
btn.onclick = function () {};              // purana, ek hi handler
element.addEventListener("click", fn);     // modern, kai handler
// <button onclick="fn()">                  // inline (aaj avoid)

// ---- 2. common events ----
// mouse  : click, dblclick, mouseover, mouseout, mousedown, mouseup
// keyboard: keydown, keyup, keypress (deprecated)
// form   : submit, change, input, focus, blur, reset
// window : load, resize, scroll, beforeunload
// document: DOMContentLoaded
// touch  : touchstart, touchmove, touchend

document.getElementById("email").addEventListener("input", function (e) {
  console.log("abhi type kiya:", e.target.value);
});

// ---- 3. preventDefault — default action rokna ----
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();          // page reload ruk gaya
  validate();                  // apni validation
});

// ---- 4. stopPropagation — bubble rokna ----
document.querySelector(".modal").addEventListener("click", function (e) {
  e.stopPropagation();         // overlay tak click nahi jaayega
});

// ---- 5. event delegation ----
document.getElementById("list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});`,
        note:
          'preventDefault() = browser ka default kaam rokta hai (form submit, link open). stopPropagation() = event ka bubble rukta hai. Dono ko mila dena bug hota hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'onclick attribute vs addEventListener',
        columns: ['onclick attribute', 'addEventListener'],
        columnsColors: [],
        columnColors: ['#ff8800', '#00ff88'],
        rows: [
          { label: 'Syntax', values: ['<button onclick="fn()">', 'el.addEventListener("click", fn)'] },
          { label: 'Handlers', values: ['Ek hi — dobara likha to replace', 'Kai — sab chalte hain'] },
          { label: 'HTML/JS', values: ['Mile hue', 'Alag rehte hain'] },
          { label: 'Remove', values: ['onclick = null', 'removeEventListener'] },
          { label: 'Options', values: ['Nahi', 'once, capture, passive'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Event Ke Points',
        points: [
          'Event = browser ki khabar; handler = us par chalne wala function.',
          'Teen phase: capturing (neeche), target, bubbling (upar).',
          'e.target = asli element jispar event hua; e.currentTarget = jispar listener laga hai.',
          'preventDefault() default action rokta hai; stopPropagation() bubble rokta hai.',
          'Delegation: parent par ek listener = saare children handle (naye children bhi).',
          'DOMContentLoaded tab chalta hai jab HTML parse ho jaye (images ka intezaar nahi).',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'addEventListener(event, handler) aaj ka standard tareeka hai.',
          'Event object: type, target, clientX/clientY, key.',
          'Capturing ↓ → target → bubbling ↑.',
          'Delegation bubbling ki wajah se possible hai.',
          'preventDefault ≠ stopPropagation.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is an event in JavaScript? Explain event handling with different methods and give examples of common events.',
        answer:
          '**Event:** browser ki taraf se aayi khabar — user ki harkat ya system ka change (click, keydown, submit, load).\n\n**Event handling ke tareeke:**\n\n**1. Inline attribute (purana):**\n```\n<button onclick="show()">Click</button>\n```\n**2. Property handler:**\n```\nbtn.onclick = function () { };\n```\n**3. addEventListener (modern, recommended):**\n```\nbtn.addEventListener("click", function (e) {\n  console.log(e.type, e.target);\n});\n```\n\n**Common events:**\n\n| Category | Events |\n|---|---|\n| Mouse | click, dblclick, mouseover, mouseout |\n| Keyboard | keydown, keyup |\n| Form | submit, change, input, focus, blur |\n| Window | load, resize, scroll |\n| Document | DOMContentLoaded |\n\n**Event object:** `type`, `target`, `currentTarget`, `clientX/clientY`, `key`, `preventDefault()`, `stopPropagation()`.\n\n**Diagram:** Refer to the event flow diagram.',
      },
      {
        question: 'Explain event bubbling, capturing and event delegation with an example.',
        answer:
          '**Capturing:** event root (window) se target tak neeche jaata hai.\n**Target:** asli element par pahunchta hai.\n**Bubbling:** target se wapas upar (window tak) jaata hai — default phase.\n\n```\n<div id="parent"><button id="child">Click</button></div>\n\nparent.addEventListener("click", () => console.log("parent"));\nchild.addEventListener("click", () => console.log("child"));\n\n// child par click → "child" phir "parent"  (bubbling)\n```\n\n**Delegation:** parent par ek hi listener lagao, children ke events bubble hokar wahan pahunch jaate hain.\n```\nul.addEventListener("click", function (e) {\n  if (e.target.tagName === "LI") {\n    e.target.classList.toggle("done");\n  }\n});\n```\n\n**Fayde:** kam listeners, memory bachti hai, naye children apne aap handle ho jaate hain.\n\n**Rokna:** `e.stopPropagation()` bubble rokta hai; capturing ke liye `addEventListener(ev, fn, true)`.\n\n**Diagram:** Refer to the capturing/bubbling diagram.',
      },
      {
        question: 'Differentiate between preventDefault() and stopPropagation().',
        answer:
          '**preventDefault()** — browser ka default behaviour rokta hai.\n**stopPropagation()** — event ka aage travel (bubbling/capturing) rokta hai.\n\n| Basis | preventDefault | stopPropagation |\n|---|---|---|\n| Rokta hai | Default action | Event propagation |\n| Example | form submit, link open | parent ke listener |\n| Event object | Haan | Haan |\n| Ek saath | Dono lag sakte hain | Dono lag sakte hain |\n\n```\n// form reload na ho\ndocument.querySelector("form").addEventListener("submit", function (e) {\n  e.preventDefault();\n  validate();\n});\n\n// click parent tak na jaaye\ndocument.querySelector(".modal").addEventListener("click", function (e) {\n  e.stopPropagation();\n});\n```\n\n**Exam line:** "preventDefault() browser ko rokta hai, stopPropagation() event ko."',
      },
    ],
  },

  // ==========================================================
  // 2.9 — Objects
  // ==========================================================
  {
    id: 'wt-js-objects',
    number: '2.9',
    title: 'JavaScript Objects: Properties and Methods',
    subtitle: 'Data + behaviour ek hi dabbe mein',
    icon: 'cube',
    accent: '#00d4ff',
    englishDefinition:
      'An object is a collection of key–value pairs. A value that is data is called a property, and a value that is a function is called a method. Objects can be created with an object literal ({ name: "Riya" }), the new Object() constructor, a constructor function invoked with new, Object.create() or ES6 classes. Properties are read and written with dot notation (student.name) or bracket notation (student["name"], needed when the key is in a variable), added by assignment and removed with the delete operator. Inside a method, this refers to the object the method was called on. Built-in helpers include Object.keys(), Object.values(), Object.entries(), Object.assign(), Object.freeze() and JSON.stringify()/JSON.parse(). Arrays and functions are also objects, which is why typeof [] returns "object".',
    intro:
      'Object matlab "ek cheez ke baare mein poora data ek jagah". Student ka naam, marks — ye properties. Aur jo function usi object ke andar rakhi ho (jaise greet) — wo method. Exam mein object banane ke tareeke, property access (dot vs bracket), this ka matlab, aur Object.keys/JSON wale built-ins poochhe jaate hain. Neeche live demo mein aap object ke saare keys-values table mein dekh sakte hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Object, Property, Method',
        body:
          'Object = { key: value } ka collection. const student = { name: "Riya", marks: 78, greet: function () { return "Hi " + this.name; } }; Yahan name aur marks properties hain, greet method hai. Access: student.name (dot) ya student["marks"] (bracket). Naya property: student.city = "Pune". Delete: delete student.city.',
        body2:
          'Banane ke tareeke: literal, new Object(), constructor function (function Student(n) { this.name = n; } → new Student("Riya")), Object.create(), aur ES6 class. Method ke andar this us object ko point karta hai jispar method call hui. Object.keys/values/entries se loop chala sakte hain; JSON.stringify object ko string banata hai (server bhejne ke liye), JSON.parse string ko wapas object.',
        chips: ['object literal', 'property', 'method', 'this', 'dot vs bracket', 'Object.keys', 'JSON'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Object ka Dhancha',
        diagram: 'js-objects',
        caption:
          'Left: literal with properties + method. Middle: access, add, delete, Object.keys. Right: constructor function aur this. Exam mein teeno formas likhna safe answer hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Object Live — Method Chalao, Table Dekho',
        intro:
          'Neeche object ka data JS ne table mein bhara hai (Object.entries se), aur method button se object ka apna method chal raha hai. Mark badal kar "Add marks" dabaiye — property update hoti dikhegi.',
        language: 'html',
        filename: 'object.html',
        code: `<input id="mk" type="number" value="5">
<button id="add">Add marks</button>
<button id="greet">greet()</button>
<p id="out"></p>
<table id="tbl"></table>

<script>
  const student = {
    name: "Riya Sharma",
    course: "MCA",
    marks: 78,
    greet: function () {
      return "Hi, main " + this.name + " hoon (" + this.course + ")";
    }
  };

  function render() {
    const tbl = document.getElementById("tbl");
    tbl.innerHTML = "";
    Object.entries(student).forEach(function (pair) {
      const row = tbl.insertRow();
      row.insertCell().textContent = pair[0];
      row.insertCell().textContent =
        typeof pair[1] === "function" ? "function () { … }" : pair[1];
      row.cells[0].style.color = "#0047ff";
    });
  }

  document.getElementById("add").addEventListener("click", function () {
    student.marks += Number(document.getElementById("mk").value);  // property update
    student.city = "Pune";                    // naya property
    render();
  });

  document.getElementById("greet").addEventListener("click", function () {
    document.getElementById("out").textContent = student.greet();  // method call
  });

  render();
</script>`,
        html: `<div style="font-size:13px;margin-bottom:10px;">
  <input id="mk" type="number" value="5" style="width:64px;padding:5px 8px;border:1px solid #b9c8e8;border-radius:6px;">
  <button id="add" style="padding:6px 12px;border:0;border-radius:8px;background:#0047ff;color:#fff;margin-left:6px;cursor:pointer;">Add marks</button>
  <button id="greet" style="padding:6px 12px;border:0;border-radius:8px;background:#00a86b;color:#fff;margin-left:6px;cursor:pointer;">greet()</button>
</div>
<p id="out" style="margin:0 0 10px;font-size:13px;font-weight:700;color:#0a7d4f;min-height:18px;"></p>
<table id="tbl" style="font-size:12.5px;border-collapse:collapse;width:100%;"></table>`,
        script: `const student = { name: "Riya Sharma", course: "MCA", marks: 78,
  greet: function () { return "Hi, main " + this.name + " hoon (" + this.course + ")"; } };
function render() {
  const tbl = document.getElementById("tbl");
  tbl.innerHTML = "";
  for (const key in student) {
    const row = tbl.insertRow();
    const c1 = row.insertCell();
    c1.textContent = key;
    c1.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;color:#0047ff;width:35%;";
    const c2 = row.insertCell();
    c2.textContent = typeof student[key] === "function" ? "function () { … }" : student[key];
    c2.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;color:#22314f;";
  }
}
document.getElementById("add").addEventListener("click", function () {
  student.marks += Number(document.getElementById("mk").value);
  student.city = "Pune";
  render();
});
document.getElementById("greet").addEventListener("click", function () {
  document.getElementById("out").textContent = student.greet();
});
render();`,
        caption:
          'Table loop se bani hai — "Add marks" dabane par marks badalte hain aur naya property city add hota hai, dono turant table mein dikhte hain.',
        height: 260,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Object Banane Ke Chaar Tareeke + this',
        intro:
          'Ek hi object ko chaar tarah se banana — exam mein "how to create object" ka poora jawab.',
        language: 'javascript',
        filename: 'objects.js',
        code: `// 1. Object literal — sabse common
const s1 = {
  name: "Riya",
  marks: 78,
  greet() { return "Hi " + this.name; },     // ES6 short method
  total(extra = 0) { return this.marks + extra; }
};

// 2. new Object()
const s2 = new Object();
s2.name = "Aman";
s2.marks = 82;

// 3. Constructor function + new
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
  this.greet = function () { return "Hi " + this.name; };
}
const s3 = new Student("Neha", 91);

// 4. ES6 class
class Student2 {
  constructor(name) { this.name = name; }
  greet() { return "Hi " + this.name; }
}

// ---- access ----
s1.name;            // dot
const key = "marks";
s1[key];            // bracket — key variable ho to
s1.city = "Pune";   // add
delete s1.city;     // remove

// ---- built-in helpers ----
Object.keys(s1);            // ["name", "marks", "greet", "total"]
Object.values(s1);          // ["Riya", 78, ƒ, ƒ]
Object.entries(s1);         // [["name","Riya"], …]
Object.assign({}, s1, {marks: 90});   // copy + override
Object.freeze(s2);          // aage badalna band

JSON.stringify(s1);         // string (server bhejne ke liye)
JSON.parse('{"a":1}');      // string se object
s1.hasOwnProperty("name");  // true`,
        note:
          'this ka matlab: jis object par method call hui. const f = s1.greet; f(); karne par this kho jaata hai — isliye method hamesha object ke saath call karein.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Property vs Method',
        columns: ['Property', 'Method'],
        columnColors: ['#00d4ff', '#ff8800'],
        rows: [
          { label: 'Kya hai', values: ['Data (value)', 'Function (behaviour)'] },
          { label: 'Example', values: ['name: "Riya"', 'greet: function () {}'] },
          { label: 'Access', values: ['obj.name', 'obj.greet()  ← brackets'] },
          { label: 'this', values: ['Lagu nahi', 'Object ko point karta hai'] },
          { label: 'typeof', values: ['string / number / object', '"function"'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Object Ke Points',
        points: [
          'Object = key : value pairs; function ho to method, warna property.',
          'Chaar tareeke: literal, new Object(), constructor function, class.',
          'Dot notation fixed naam ke liye, bracket notation variable key ke liye.',
          'this method ke andar us object ko point karta hai jispar call hua.',
          'Object.keys / values / entries se loop; JSON.stringify / parse se string.',
          'Array bhi object hai — typeof [] === "object", isliye Array.isArray() use karein.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Object = data + behaviour ek saath.',
          'Property = value, method = function.',
          'dot / bracket access, add by assignment, delete operator.',
          'constructor + new se same dhanche ke kai objects.',
          'Object.keys, JSON.stringify — real projects mein roz use hote hain.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is an object in JavaScript? Explain the different ways of creating an object with examples.',
        answer:
          '**Object:** key–value pairs ka collection; function ho to **method**, data ho to **property**.\n\n**1. Object literal:**\n```\nconst s = { name: "Riya", marks: 78,\n  greet() { return "Hi " + this.name; } };\n```\n**2. new Object():**\n```\nconst s = new Object();\ns.name = "Riya";\n```\n**3. Constructor function:**\n```\nfunction Student(n, m) { this.name = n; this.marks = m; }\nconst s = new Student("Riya", 78);\n```\n**4. Class (ES6):**\n```\nclass Student { constructor(n) { this.name = n; } }\n```\n\n**Access:** `s.name` (dot), `s["marks"]` (bracket), `s.city = "Pune"` (add), `delete s.city`.\n\n**Helpers:** Object.keys/values/entries, Object.assign, JSON.stringify/parse.\n\n**Diagram:** Refer to the objects diagram.',
      },
      {
        question: 'Differentiate between properties and methods. Explain the use of the "this" keyword.',
        answer:
          '| Basis | Property | Method |\n|---|---|---|\n| Value | Data | Function |\n| Example | `name: "Riya"` | `greet: function(){}` |\n| Call | `obj.name` | `obj.greet()` |\n| typeof | string/number/object | "function" |\n\n**this:** method ke andar wo object jo method ko call kar raha hai.\n```\nconst student = {\n  name: "Riya",\n  greet: function () { return "Hi " + this.name; }\n};\nstudent.greet();     // "Hi Riya" — this = student\n\nconst f = student.greet;\nf();                 // this kho gaya → undefined\n```\n\n**Constructor mein:**\n```\nfunction Student(name) { this.name = name; }\nnew Student("Aman");   // this = naya object\n```\n\n**Exam line:** "this batata hai ki method kis object ke saath chal rahi hai."',
      },
      {
        question: 'Explain Object.keys(), Object.values(), Object.entries() and JSON.stringify()/parse() with examples.',
        answer:
          'Ye sab object ke data ko loop ya transfer karne ke liye use hote hain.\n\n```\nconst s = { name: "Riya", marks: 78 };\n\nObject.keys(s);      // ["name", "marks"]\nObject.values(s);    // ["Riya", 78]\nObject.entries(s);   // [["name","Riya"], ["marks",78]]\n```\n\n**Loop:**\n```\nObject.entries(s).forEach(([k, v]) => console.log(k, v));\nfor (const k in s) console.log(k, s[k]);\n```\n\n**JSON (server bhejne ke liye):**\n```\nconst str = JSON.stringify(s);   // \'{"name":"Riya","marks":78}\'\nconst obj = JSON.parse(str);     // wapas object\n```\n\n**Aur helpers:** `Object.assign({}, s, {marks: 90})` copy+override, `Object.freeze(s)` lock.\n\n| Method | Return |\n|---|---|\n| keys | naam ka array |\n| values | values ka array |\n| entries | [key, value] pairs |\n| stringify | string |\n| parse | object |',
      },
    ],
  },

  // ==========================================================
  // 2.10 — Number and Math
  // ==========================================================
  {
    id: 'wt-js-number-math',
    number: '2.10',
    title: 'JavaScript Number and Math: Properties and Methods',
    subtitle: 'Numbers ko format karna aur math ka calculator',
    icon: 'metrics',
    accent: '#c4ff00',
    englishDefinition:
      'JavaScript has a single number type for whole numbers and decimals (64-bit floating point, based on IEEE 754), so 0.1 + 0.2 gives 0.30000000000000004. The Number object exposes constants such as Number.MAX_VALUE, MIN_VALUE, POSITIVE_INFINITY and NaN, and static methods such as Number.isInteger(), Number.isNaN(), Number.parseFloat() and Number.parseInt(); number instances add toFixed(n), toPrecision(n) and toString(radix). The Math object is a static namespace of mathematical functions and constants — Math.PI, E, abs(), round(), ceil(), floor(), trunc(), max(), min(), pow(), sqrt(), cbrt(), sign(), random() — plus trigonometry (sin, cos) and logarithms. Math.random() returns a decimal from 0 up to but not including 1.',
    intro:
      'JavaScript mein sirf ek number type hai — int aur float alag nahi. 78 aur 3.14 dono "number" hain. Number object constants aur check karne wale methods deta hai (isInteger, toFixed), aur Math object ready-made calculator hai (round, ceil, floor, random). Exam mein dono ke methods ke naam aur output likhne hote hain — isliye neeche live calculator mein har method ka actual result dikhaya gaya hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Number aur Math',
        body:
          'Number ek primitive type hai jo apne saath methods laata hai: (255).toString(16) → "ff", (78.567).toFixed(2) → "78.57". Static checks: Number.isInteger(78) → true, Number.isNaN("abc") → false (NaN check ke liye), Number("42") → 42. Constants: Number.MAX_VALUE, MIN_VALUE, POSITIVE_INFINITY, NaN.',
        body2:
          'Math ek static object hai — Math.PI, Math.round(4.6) → 5, Math.ceil(4.1) → 5 (upar), Math.floor(4.9) → 4 (neeche), Math.abs(-7) → 7, Math.max/min, Math.pow(2,5) → 32, Math.sqrt(81) → 9, Math.random() → 0 se 1 ke beech. Math par naya object nahi banate (new Math() galat hai).',
        chips: ['toFixed', 'isInteger', 'MAX_VALUE', 'Math.round', 'Math.random', 'Math.pow'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Number aur Math ke Methods',
        diagram: 'js-number-math',
        caption:
          'Left: Number ke properties aur methods result ke saath. Right: Math ke 9 sabse zyada poochhe jaane wale methods aur random number ka formula.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Number Playground — Ek Value, Saare Results',
        intro:
          'Ek number daaliye — neeche usi value par saare methods ka asli result dikhega (toFixed, round, ceil, floor, abs, square root, power). "Random" button har baar naya number deta hai.',
        language: 'html',
        filename: 'numbers.html',
        code: `<input id="n" type="number" value="4.567" step="0.001">
<button id="run">Calculate</button>
<button id="rnd">Random 1–6</button>
<p id="rndout"></p>
<table id="tbl"></table>

<script>
  function run() {
    var x = Number(document.getElementById("n").value);
    var rows = [
      ["Number", x],
      ["isInteger()", Number.isInteger(x)],
      ["toFixed(2)", x.toFixed(2)],
      ["Math.round()", Math.round(x)],
      ["Math.ceil()", Math.ceil(x)],
      ["Math.floor()", Math.floor(x)],
      ["Math.abs()", Math.abs(x)],
      ["Math.sqrt()", Math.sqrt(Math.abs(x))],
      ["Math.pow(2)", Math.pow(x, 2)]
    ];
    var tbl = document.getElementById("tbl");
    tbl.innerHTML = "";
    rows.forEach(function (r) {
      var row = tbl.insertRow();
      row.insertCell().textContent = r[0];
      row.insertCell().textContent = r[1];
    });
  }

  document.getElementById("run").addEventListener("click", run);
  document.getElementById("rnd").addEventListener("click", function () {
    var dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("rndout").textContent =
      "Math.floor(Math.random() * 6) + 1 → " + dice;
  });
  run();
</script>`,
        html: `<div style="font-size:13px;margin-bottom:10px;">
  <input id="n" type="number" value="4.567" step="0.001" style="width:90px;padding:5px 8px;border:1px solid #b9c8e8;border-radius:6px;">
  <button id="run" style="padding:6px 12px;border:0;border-radius:8px;background:#0047ff;color:#fff;margin-left:6px;cursor:pointer;">Calculate</button>
  <button id="rnd" style="padding:6px 12px;border:0;border-radius:8px;background:#ff8800;color:#fff;margin-left:6px;cursor:pointer;">Random 1–6</button>
</div>
<p id="rndout" style="margin:0 0 8px;font-size:12.5px;font-weight:700;color:#c05600;min-height:16px;"></p>
<table id="tbl" style="font-size:12.5px;border-collapse:collapse;width:100%;"></table>`,
        script: `function run() {
  var x = Number(document.getElementById("n").value) || 0;
  var rows = [["Number", x], ["isInteger()", Number.isInteger(x)], ["toFixed(2)", x.toFixed(2)],
    ["Math.round()", Math.round(x)], ["Math.ceil()", Math.ceil(x)], ["Math.floor()", Math.floor(x)],
    ["Math.abs()", Math.abs(x)], ["Math.sqrt()", Math.sqrt(Math.abs(x))], ["Math.pow(x, 2)", Math.pow(x, 2)]];
  var tbl = document.getElementById("tbl");
  tbl.innerHTML = "";
  rows.forEach(function (r) {
    var row = tbl.insertRow();
    var c1 = row.insertCell();
    c1.textContent = r[0];
    c1.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;color:#0047ff;";
    var c2 = row.insertCell();
    c2.textContent = r[1];
    c2.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;color:#22314f;font-weight:700;";
  });
}
document.getElementById("run").addEventListener("click", run);
document.getElementById("rnd").addEventListener("click", function () {
  var dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("rndout").textContent = "Math.floor(Math.random() * 6) + 1 → " + dice;
});
run();`,
        caption:
          'Value badal kar dekhein: 4.567 par round 5, ceil 5, floor 4. Random button par har click naya dice — yahi Math.random() ka standard formula hai.',
        height: 300,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Number aur Math ke Methods — Reference',
        intro:
          'Exam mein table banakar likhna best hai: method, kaam, output. Neeche wahi saara data comment ke roop mein hai.',
        language: 'javascript',
        filename: 'number-math.js',
        code: `// ---- Number: properties ----
Number.MAX_VALUE        // 1.7976931348623157e+308
Number.MIN_VALUE        // 5e-324
Number.POSITIVE_INFINITY
Number.NaN

// ---- Number: methods ----
(78.567).toFixed(2)     // "78.57"  (string deta hai)
(255).toString(16)      // "ff"
Number.isInteger(78)    // true
Number.isInteger(78.5)  // false
Number("42")            // 42
parseInt("42px")        // 42
parseFloat("3.5kg")     // 3.5
isNaN("abc")            // true

// ---- Math: constants ----
Math.PI                 // 3.141592653589793
Math.E                  // 2.718281828459045

// ---- Math: methods ----
Math.round(4.5)         // 5   (0.5 upar)
Math.round(4.4)         // 4
Math.ceil(4.1)          // 5   (upar)
Math.floor(4.9)         // 4   (neeche)
Math.trunc(4.9)         // 4   (decimal hatao)
Math.abs(-7)            // 7
Math.max(3, 9, 4)       // 9
Math.min(3, 9, 4)       // 3
Math.pow(2, 5)          // 32
Math.sqrt(81)           // 9
Math.random()           // 0 ≤ x < 1

// ---- random number ka pattern ----
Math.floor(Math.random() * 6) + 1      // 1–6
Math.floor(Math.random() * 100) + 1    // 1–100

// ---- floating point trap ----
0.1 + 0.2               // 0.30000000000000004
(0.1 + 0.2).toFixed(2)  // "0.30"`,
        note:
          'toFixed() string return karta hai — aage calculation karni ho to Number(x.toFixed(2)) karein. Math.round(-4.5) → -4 (JS ka behaviour, dhyan rakhein).',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'round vs ceil vs floor vs trunc',
        columns: ['Value', 'Math.round', 'Math.ceil', 'Math.floor'],
        columnColors: ['#00d4ff', '#c4ff00', '#ff8800', '#ff7ab2'],
        rows: [
          { label: '4.1', values: ['4', '5', '4'] },
          { label: '4.5', values: ['5', '5', '4'] },
          { label: '4.9', values: ['5', '5', '4'] },
          { label: '-4.5', values: ['-4', '-4', '-5'] },
          { label: 'Rule', values: ['Sabse paas (0.5 upar)', 'Hamesha upar', 'Hamesha neeche'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Number / Math Ke Points',
        points: [
          'JS mein ek hi number type hai — int aur float alag nahi.',
          'toFixed(n) decimals fix karta hai aur string deta hai.',
          'Math.round (paas), ceil (upar), floor (neeche) — teeno ka farak yaad rakhein.',
          'Math.random() 0 se 1 (1 se pehle tak); range ke liye floor(random()*n)+1.',
          'NaN ka type "number" hota hai; check ke liye isNaN() / Number.isNaN().',
          '0.1 + 0.2 = 0.30000000000000004 — float precision ka classic trap.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Number: MAX_VALUE, isInteger, toFixed, parseInt/parseFloat.',
          'Math: PI, round/ceil/floor, abs, max/min, pow, sqrt, random.',
          'Math static object hai — new Math() nahi banate.',
          'random ka pattern: floor(random()*n)+1.',
          'Float precision aur NaN ke traps.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the Number object in JavaScript with its properties and methods.',
        answer:
          '**Number** ek primitive type hai (int + float dono), par ye methods bhi deta hai.\n\n**Properties/constants:**\n\n| Property | Value / matlab |\n|---|---|\n| Number.MAX_VALUE | 1.79e+308 |\n| Number.MIN_VALUE | 5e-324 |\n| Number.POSITIVE_INFINITY | Infinity |\n| Number.NaN | Not a Number |\n\n**Methods:**\n```\n(78.567).toFixed(2)    // "78.57"\n(255).toString(16)     // "ff"\nNumber.isInteger(78)   // true\nNumber.isInteger(78.5) // false\nNumber("42")           // 42\nNumber("abc")          // NaN\nNumber.parseInt("42px")// 42\nNumber.parseFloat("3.5kg") // 3.5\n```\n\n**Note:** `typeof NaN` → "number"; `0.1 + 0.2` → 0.30000000000000004.\n\n**Diagram:** Refer to the Number/Math diagram.',
      },
      {
        question: 'Explain the Math object and any eight of its methods with examples.',
        answer:
          '**Math:** built-in static object — mathematical constants aur functions. Naya object nahi banate.\n\n| Method | Example | Result |\n|---|---|---|\n| Math.round(x) | round(4.6) | 5 |\n| Math.ceil(x) | ceil(4.1) | 5 |\n| Math.floor(x) | floor(4.9) | 4 |\n| Math.abs(x) | abs(-7) | 7 |\n| Math.max(…) | max(3,9,4) | 9 |\n| Math.min(…) | min(3,9,4) | 3 |\n| Math.pow(a,b) | pow(2,5) | 32 |\n| Math.sqrt(x) | sqrt(81) | 9 |\n| Math.random() | — | 0 ≤ x < 1 |\n\n**Constants:** Math.PI (3.14159), Math.E (2.718).\n\n**Random ka use:**\n```\nMath.floor(Math.random() * 6) + 1   // dice 1–6\n```\n\n**Diagram:** Refer to the Number/Math diagram.',
      },
      {
        question: 'Differentiate between Math.round(), Math.ceil() and Math.floor() with examples. Also explain toFixed().',
        answer:
          '| Value | round() | ceil() | floor() |\n|---|---|---|---|\n| 4.1 | 4 | 5 | 4 |\n| 4.5 | 5 | 5 | 4 |\n| 4.9 | 5 | 5 | 4 |\n| -4.5 | -4 | -4 | -5 |\n\n- **round()** — sabse paas wale integer par (0.5 upar)\n- **ceil()** — hamesha upar (ceiling)\n- **floor()** — hamesha neeche (floor)\n\n**toFixed(n):** number ko n decimal tak round karke **string** deta hai.\n```\n(78.567).toFixed(2)   // "78.57"\n(78.5).toFixed(0)     // "79"\n(0.1 + 0.2).toFixed(2)// "0.30"\n```\n\n**Dhyan:** return string hota hai, isliye aage calculation ke liye `Number(...)` karein.\n\n**Exam line:** "round paas wale par, ceil upar, floor neeche."',
      },
    ],
  },

  // ==========================================================
  // 2.11 — String
  // ==========================================================
  {
    id: 'wt-js-string',
    number: '2.11',
    title: 'JavaScript String: Properties and Methods',
    subtitle: 'Text ko todna, jodna, badalna',
    icon: 'doc',
    accent: '#ff8800',
    englishDefinition:
      'A string is an immutable sequence of UTF-16 characters, created with single quotes, double quotes or template literals (backticks) that allow ${} interpolation and multi-line text. Strings expose one property, length, and many methods: charAt(index), charCodeAt, at, indexOf/lastIndexOf, includes, startsWith/endsWith, slice(start, end), substring(start, end), substr(start, length) (deprecated), toUpperCase/toLowerCase, trim/trimStart/trimEnd, replace/replaceAll, split(separator), concat, padStart/padEnd and repeat. Because strings are immutable, every method returns a new string and the original never changes. Indices start at 0, and slice accepts negative indices while substring does not.',
    intro:
      'String = characters ki chain. Sabse pehle ye yaad rakhein: string immutable hai — method naya string deta hai, purana kabhi nahi badalta. Exam mein length (property, brackets ke bina) aur methods jaise slice, substring, indexOf, replace, split, trim poochhe jaate hain. Neeche live playground mein jo bhi type karein, usi par saare methods ka result turant dikhta hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'String aur uski Property/Methods',
        body:
          'String banane ke teen tareeke: \'Riya\', "Riya", aur template literal `Riya` (isme ${} se variable daal sakte hain aur multi-line likh sakte hain). Ek hi property hai: length — "MCA Notes".length → 9. Methods: charAt(0) → "M", indexOf("Notes") → 4, slice(0,3) → "MCA", replace("Notes","JS") → "MCA JS", toUpperCase(), split(" ") → ["MCA","Notes"], trim().',
        body2:
          'Immutable ka matlab: s.replace("A","B") original ko nahi badalta, naya string deta hai — result ko variable mein rakhna padta hai. Index 0 se shuru hota hai. slice negative index leta hai (-3 = aakhir se 3), substring nahi. Method chain kar sakte hain: " riya ".trim().toUpperCase() → "RIYA".',
        chips: ['length', 'charAt', 'slice', 'replace', 'split', 'trim', 'template literal'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'String Indexing aur Methods',
        diagram: 'js-string',
        caption:
          'Upar "MCA Notes" ka index 0–8, neeche 10 sabse zaroori methods aur unka result. Exam mein method + output ki table sabse safe answer hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'String Playground — Jo Likho, Wahi Method',
        intro:
          'Text box mein kuch bhi likhein — neeche us par length, upper, lower, slice, indexOf, replace, split, trim — sabka asli output turant update hoga.',
        language: 'html',
        filename: 'string.html',
        code: `<input id="s" value="  MCA Notes  " style="width:100%">
<table id="tbl"></table>

<script>
  function render() {
    var s = document.getElementById("s").value;
    var rows = [
      ["s.length", s.length],
      ["s.trim()", s.trim()],
      ["s.toUpperCase()", s.toUpperCase()],
      ["s.toLowerCase()", s.toLowerCase()],
      ["s.charAt(0)", s.charAt(0)],
      ["s.indexOf('a')", s.indexOf("a")],
      ["s.slice(0, 5)", s.slice(0, 5)],
      ["s.replace('MCA', 'BCA')", s.replace("MCA", "BCA")],
      ["s.includes('Notes')", s.includes("Notes")],
      ["s.split(' ')", JSON.stringify(s.split(" "))]
    ];
    var tbl = document.getElementById("tbl");
    tbl.innerHTML = "";
    rows.forEach(function (r) {
      var row = tbl.insertRow();
      row.insertCell().textContent = r[0];
      row.insertCell().textContent = r[1];
    });
  }
  document.getElementById("s").addEventListener("input", render);
  render();
</script>`,
        html: `<input id="s" value="  MCA Notes  " style="width:100%;padding:7px 10px;border:1px solid #b9c8e8;border-radius:8px;font-size:13.5px;margin-bottom:10px;">
<table id="tbl" style="font-size:12.5px;border-collapse:collapse;width:100%;"></table>`,
        script: `function render() {
  var s = document.getElementById("s").value;
  var rows = [["s.length", s.length], ["s.trim()", s.trim()], ["s.toUpperCase()", s.toUpperCase()],
    ["s.toLowerCase()", s.toLowerCase()], ["s.charAt(0)", s.charAt(0)], ["s.indexOf('a')", s.indexOf("a")],
    ["s.slice(0, 5)", s.slice(0, 5)], ["s.replace('MCA', 'BCA')", s.replace("MCA", "BCA")],
    ["s.includes('Notes')", s.includes("Notes")], ["s.split(' ')", JSON.stringify(s.split(" "))]];
  var tbl = document.getElementById("tbl");
  tbl.innerHTML = "";
  rows.forEach(function (r) {
    var row = tbl.insertRow();
    var c1 = row.insertCell();
    c1.textContent = r[0];
    c1.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;color:#0047ff;white-space:nowrap;";
    var c2 = row.insertCell();
    c2.textContent = String(r[1]);
    c2.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;color:#22314f;font-family:monospace;";
  });
}
document.getElementById("s").addEventListener("input", render);
render();`,
        caption:
          'Dhyan dein: length 13 hai kyunki aage-piche 2-2 space hain, par trim() ke baad 9 ho jaata hai. Original string kabhi nahi badalti — har method naya value deta hai.',
        height: 320,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'String Methods — Reference',
        intro:
          'Exam mein 8-10 methods output ke saath likhna best hai. Neeche sabse zyada poochhe jaane wale methods ek saath.',
        language: 'javascript',
        filename: 'strings.js',
        code: `const s = "MCA Notes";

// ---- property ----
s.length            // 9  (brackets nahi lagate)

// ---- nikaalna ----
s.charAt(0)         // "M"
s[0]                // "M"
s.charCodeAt(0)     // 77 (ASCII)
s.slice(0, 3)       // "MCA"
s.slice(-5)         // "Notes"  (negative allowed)
s.substring(4)      // "Notes"  (negative nahi)
s.substr(4, 5)      // "Notes"  (purana, deprecated)

// ---- dhoondhna ----
s.indexOf("Notes")  // 4
s.lastIndexOf("a")  // 2
s.includes("MCA")   // true
s.startsWith("MC")  // true
s.endsWith("es")    // true

// ---- badalna (naya string) ----
s.toUpperCase()             // "MCA NOTES"
s.toLowerCase()             // "mca notes"
"  hi  ".trim()             // "hi"
s.replace("Notes", "JS")    // "MCA JS"
"a-b-c".split("-")          // ["a","b","c"]
["a","b"].join("-")         // "a-b"
"5".padStart(3, "0")        // "005"
"ab".repeat(3)              // "ababab"

// ---- template literal ----
const name = "Riya", marks = 78;
console.log(\`\${name} ke \${marks} marks hain\`);

// ---- chain ----
"  riya ".trim().toUpperCase();   // "RIYA"`,
        note:
          'Strings compare karne ke liye === use karein. "10" < "9" true hota hai (string comparison character by character) — number comparison ke liye Number() karein.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'slice vs substring vs substr',
        columns: ['slice(start, end)', 'substring(start, end)', 'substr(start, len)'],
        columnColors: ['#00d4ff', '#c4ff00', '#ff8800'],
        rows: [
          { label: 'Doosra argument', values: ['End index (chhoda hua)', 'End index', 'Kitne characters'] },
          { label: 'Negative index', values: ['Haan (aakhir se)', 'Nahi (0 maan leta hai)', 'Haan (start)'] },
          { label: 'start > end', values: ['Khaali string', 'Swap kar deta hai', '—'] },
          { label: 'Status', values: ['Recommended', 'Purana par valid', 'Deprecated'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'String Ke Points',
        points: [
          'length property hai — length() nahi.',
          'String immutable — method naya string deta hai, original nahi badalta.',
          'Index 0 se; slice negative leta hai, substring nahi.',
          'split() string ko array banata hai, join() array ko string.',
          'trim() form input saaf karne ke liye sabse zyada use hota hai.',
          'Template literal ${} se variable daalna aur multi-line string aasan.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Ek property: length. Baaki sab methods.',
          'Nikaalna: charAt, slice, substring.',
          'Dhoondhna: indexOf, includes, startsWith.',
          'Badalna (naya string): upper, lower, replace, trim, split.',
          'Template literal se interpolation + multi-line.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the String object in JavaScript with any eight properties/methods and examples.',
        answer:
          '**String:** characters ka immutable sequence; single/double quotes ya template literal se banti hai.\n\n| Method/Property | Example | Result |\n|---|---|---|\n| length | "MCA".length | 3 |\n| charAt(i) | "MCA".charAt(1) | "C" |\n| indexOf(s) | "MCA Notes".indexOf("Notes") | 4 |\n| slice(a,b) | "MCA Notes".slice(0,3) | "MCA" |\n| substring(a,b) | "MCA Notes".substring(4) | "Notes" |\n| replace(a,b) | "MCA".replace("M","B") | "BCA" |\n| toUpperCase() | "mca".toUpperCase() | "MCA" |\n| split(sep) | "a-b".split("-") | ["a","b"] |\n| trim() | "  hi  ".trim() | "hi" |\n| includes(s) | "MCA".includes("MC") | true |\n\n**Template literal:**\n```\nconst n = "Riya";\nconsole.log(`Hi ${n}`);   // Hi Riya\n```\n\n**Diagram:** Refer to the string methods diagram.',
      },
      {
        question: 'Differentiate between slice(), substring() and substr() with examples.',
        answer:
          '| Basis | slice(start,end) | substring(start,end) | substr(start,len) |\n|---|---|---|---|\n| 2nd arg | end index | end index | length |\n| Negative | allowed (aakhir se) | 0 maan leta hai | allowed |\n| start>end | "" | swap | — |\n| Status | recommended | valid | deprecated |\n\n```\nconst s = "MCA Notes";\n\ns.slice(0, 3)      // "MCA"\ns.slice(-5)        // "Notes"\n\ns.substring(0, 3)  // "MCA"\ns.substring(-5)    // "MCA Notes" (negative → 0)\ns.substring(3, 0)  // "MCA" (swap)\n\ns.substr(4, 5)     // "Notes"\n```\n\n**Exam line:** "slice() modern hai, negative index support karta hai; substring() purana-sa hai; substr() deprecated."',
      },
      {
        question: 'What is an immutable string? Explain the use of split(), join() and trim() with examples.',
        answer:
          '**Immutable:** string ban jaane ke baad uske characters nahi badal sakte — har method **naya** string deta hai.\n\n```\nlet s = "MCA";\ns.toUpperCase();\nconsole.log(s);             // "MCA" (original wahi)\n\nlet up = s.toUpperCase();   // naya string variable mein\nconsole.log(up);            // "MCA" → "MCA" (already upper)\n\ns[0] = "B";\nconsole.log(s);             // "MCA" — change nahi hua\n```\n\n**split():** string → array\n```\n"a,b,c".split(",")     // ["a","b","c"]\n"MCA Notes".split(" ") // ["MCA","Notes"]\n"abc".split("")        // ["a","b","c"]\n```\n\n**join():** array → string (array ka method)\n```\n["a","b","c"].join("-")   // "a-b-c"\n["2026","01","15"].join("/") // "2026/01/15"\n```\n\n**trim():** aage-piche ke space/newline hataata hai\n```\n"   Riya   ".trim()   // "Riya"   (form input ke liye)\n```\n\n**Real use:** form input `"  riya@x.com "` → `trim().toLowerCase()` → compare.',
      },
    ],
  },

  // ==========================================================
  // 2.12 — Array
  // ==========================================================
  {
    id: 'wt-js-array',
    number: '2.12',
    title: 'JavaScript Array: Properties and Methods',
    subtitle: 'Kai values ek hi naam se — aur unke methods',
    icon: 'layers',
    accent: '#c4ff00',
    englishDefinition:
      'An array is an ordered, zero-indexed collection of values of any type, created with an array literal [], new Array() or Array.from(). Its main property is length; the elements are reached by index (a[0]) or .at(-1) for the last one. Mutating methods change the original array: push (add at end), pop (remove from end), unshift (add at start), shift (remove from start), splice (remove/insert anywhere), sort, reverse and fill. Non-mutating methods return something new: slice, concat, join, indexOf, includes, flat. Iteration methods take a callback — forEach (just loop), map (transform each), filter (keep matching), reduce (fold to one value), find, findIndex, some, every. Arrays also have length, Array.isArray() and the spread operator [...arr].',
    intro:
      'Array matlab ek hi naam se kai values, index 0 se shuru. Sabse important baat: kuch methods original array ko badal dete hain (push, pop, splice, sort) aur kuch naya array dete hain (slice, map, filter). Exam mein push/pop/shift/unshift, splice vs slice, aur map/filter/reduce ka farak poochha jaata hai. Neeche live demo mein button dabakar aap khud array badalte huye dekh sakte hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Array aur uske Methods',
        body:
          'const a = [10, 20, 30, 40]; — a.length → 4, a[0] → 10, a[a.length - 1] → 40. Badalne wale methods: push(50) (end mein), pop() (end se), unshift(5) (shuru mein), shift() (shuru se), splice(1, 1) (beech se hatao/jodo), sort(), reverse().',
        body2:
          'Naya value dene wale: slice(1,3) → [20,30], concat([50]), join("-") → string, indexOf, includes, flat(). Callback wale: forEach (loop), map (har item badal kar naya array), filter (condition par chhaan kar naya array), reduce (sab ko jod kar ek value), find/findIndex, some/every. typeof [] "object" deta hai, isliye Array.isArray() se check karein.',
        chips: ['length', 'push/pop', 'shift/unshift', 'splice', 'slice', 'map', 'filter', 'reduce'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Array ke Teen Group Methods',
        diagram: 'js-array',
        caption:
          'Ek array [10,20,30,40] aur methods ke teen group: badalne wale (mutate), padhne wale (read) aur naya array dene wale (transform). Exam mein ye table + map/filter ka example dein.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Array Live — Operations Chalao',
        intro:
          'Har button asli array method chalata hai. Neeche do line hain: pehli current array, doosri last operation ka result — isse "original badla ya naya mila" saaf dikhta hai.',
        language: 'html',
        filename: 'array.html',
        code: `<div id="btns">
  <button data-op="push">push(50)</button>
  <button data-op="pop">pop()</button>
  <button data-op="shift">shift()</button>
  <button data-op="unshift">unshift(5)</button>
  <button data-op="sort">sort()</button>
  <button data-op="reverse">reverse()</button>
  <button data-op="map">map(x2)</button>
  <button data-op="filter">filter(&gt;20)</button>
  <button data-op="reduce">reduce(sum)</button>
  <button data-op="slice">slice(1,3)</button>
</div>
<p>Array: <b id="arr"></b></p>
<p>Last result: <b id="res"></b></p>

<script>
  let a = [10, 20, 30, 40];

  function show(result) {
    document.getElementById("arr").textContent = JSON.stringify(a);
    document.getElementById("res").textContent =
      result === undefined ? "—" : JSON.stringify(result);
  }

  document.getElementById("btns").addEventListener("click", function (e) {
    const op = e.target.dataset.op;
    if (!op) return;
    let r;
    if (op === "push")    r = a.push(50);
    if (op === "pop")     r = a.pop();
    if (op === "shift")   r = a.shift();
    if (op === "unshift") r = a.unshift(5);
    if (op === "sort")    r = a.sort((x, y) => x - y);
    if (op === "reverse") r = a.reverse();
    if (op === "map")     r = a.map(x => x * 2);
    if (op === "filter")  r = a.filter(x => x > 20);
    if (op === "reduce")  r = a.reduce((s, x) => s + x, 0);
    if (op === "slice")   r = a.slice(1, 3);
    show(r);
  });

  show();
</script>`,
        html: `<div id="btns" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">
  <button data-op="push" style="padding:5px 10px;border:0;border-radius:7px;background:#0047ff;color:#fff;font-size:12px;cursor:pointer;">push(50)</button>
  <button data-op="pop" style="padding:5px 10px;border:0;border-radius:7px;background:#0047ff;color:#fff;font-size:12px;cursor:pointer;">pop()</button>
  <button data-op="shift" style="padding:5px 10px;border:0;border-radius:7px;background:#2f6fff;color:#fff;font-size:12px;cursor:pointer;">shift()</button>
  <button data-op="unshift" style="padding:5px 10px;border:0;border-radius:7px;background:#2f6fff;color:#fff;font-size:12px;cursor:pointer;">unshift(5)</button>
  <button data-op="sort" style="padding:5px 10px;border:0;border-radius:7px;background:#00a86b;color:#fff;font-size:12px;cursor:pointer;">sort()</button>
  <button data-op="reverse" style="padding:5px 10px;border:0;border-radius:7px;background:#00a86b;color:#fff;font-size:12px;cursor:pointer;">reverse()</button>
  <button data-op="map" style="padding:5px 10px;border:0;border-radius:7px;background:#ff8800;color:#fff;font-size:12px;cursor:pointer;">map(x2)</button>
  <button data-op="filter" style="padding:5px 10px;border:0;border-radius:7px;background:#ff8800;color:#fff;font-size:12px;cursor:pointer;">filter(&gt;20)</button>
  <button data-op="reduce" style="padding:5px 10px;border:0;border-radius:7px;background:#ff8800;color:#fff;font-size:12px;cursor:pointer;">reduce(sum)</button>
  <button data-op="slice" style="padding:5px 10px;border:0;border-radius:7px;background:#c0392b;color:#fff;font-size:12px;cursor:pointer;">slice(1,3)</button>
</div>
<p style="margin:0 0 6px;font-size:13px;">Array: <b id="arr" style="color:#0047ff;font-family:monospace;"></b></p>
<p style="margin:0;font-size:13px;">Last result: <b id="res" style="color:#0a7d4f;font-family:monospace;"></b></p>`,
        script: `let a = [10, 20, 30, 40];
function show(result) {
  document.getElementById("arr").textContent = JSON.stringify(a);
  document.getElementById("res").textContent = result === undefined ? "—" : JSON.stringify(result);
}
document.getElementById("btns").addEventListener("click", function (e) {
  const op = e.target.dataset.op;
  if (!op) return;
  let r;
  if (op === "push") r = a.push(50);
  if (op === "pop") r = a.pop();
  if (op === "shift") r = a.shift();
  if (op === "unshift") r = a.unshift(5);
  if (op === "sort") r = a.sort((x, y) => x - y);
  if (op === "reverse") r = a.reverse();
  if (op === "map") r = a.map(x => x * 2);
  if (op === "filter") r = a.filter(x => x > 20);
  if (op === "reduce") r = a.reduce((s, x) => s + x, 0);
  if (op === "slice") r = a.slice(1, 3);
  show(r);
});
show();`,
        caption:
          'push/pop/unshift/shift/sort/reverse original array ko badalte hain, isliye upar wali line badal jaati hai. map/filter/slice naya array dete hain — original wahi rehta hai, sirf neeche result badalta hai.',
        height: 260,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Array Methods — Poora Reference',
        intro:
          'Mutate karne wale, padhne wale aur transform karne wale — teen group mein saare methods, output ke saath.',
        language: 'javascript',
        filename: 'arrays.js',
        code: `let a = [10, 20, 30];

// ---- property ----
a.length              // 3

// ---- add / remove (original badalta hai) ----
a.push(40)            // 4     → [10,20,30,40]
a.pop()               // 40    → [10,20,30]
a.unshift(5)          // 4     → [5,10,20,30]
a.shift()             // 5     → [10,20,30]
a.splice(1, 1)        // [20]  → [10,30]      (index, kitne hataane)
a.splice(1, 0, 25)    // []    → [10,25,30]   (insert)
a.sort((x, y) => x - y)   // numbers ke liye compare function zaroori
a.reverse()

// ---- read (original nahi badalta) ----
a.indexOf(30)         // 1
a.includes(20)        // true
a.slice(1, 3)         // [25, 30]   (copy)
a.concat([99])        // [10,25,30,99]
a.join(" - ")         // "10 - 25 - 30"
Array.isArray(a)      // true

// ---- transform (callback) ----
a.map(x => x * 2)             // [20,50,60]
a.filter(x => x > 20)         // [25,30]
a.reduce((sum, x) => sum + x, 0)  // 65
a.find(x => x > 15)           // 25
a.findIndex(x => x > 15)      // 1
a.some(x => x > 60)           // false
a.every(x => x > 5)           // true
a.forEach((x, i) => console.log(i, x));

// ---- spread ----
const copy = [...a];
const more = [...a, 40];

// ---- 2D / nested ----
const m = [[1,2],[3,4]];
m[0][1];                      // 2
m.flat();                     // [1,2,3,4]`,
        note:
          'sort() bina compare function ke string ki tarah sort karta hai — [10, 9, 100].sort() galat order deta hai. Numbers ke liye a.sort((x, y) => x - y).',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'map vs filter vs reduce vs forEach',
        columns: ['map', 'filter', 'reduce', 'forEach'],
        columnColors: ['#00d4ff', '#c4ff00', '#ff8800', '#ff7ab2'],
        rows: [
          { label: 'Kaam', values: ['Har item badlo', 'Condition par chhaano', 'Sab ko jod kar ek value', 'Sirf loop'] },
          { label: 'Return', values: ['Naya array (same length)', 'Naya array (chhota)', 'Ek value', 'undefined'] },
          { label: 'Example', values: ['a.map(x => x*2)', 'a.filter(x => x>20)', 'a.reduce((s,x)=>s+x, 0)', 'a.forEach(x => log)'] },
          { label: 'Original', values: ['Nahi badalta', 'Nahi badalta', 'Nahi badalta', 'Nahi badalta'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Array Ke Points',
        points: [
          'Index 0 se; length property hai (method nahi).',
          'push/pop end par, shift/unshift shuru mein — chaaron original badalte hain.',
          'splice original badalta hai (remove/insert), slice copy deta hai.',
          'map = transform, filter = chhaan, reduce = ek value, forEach = loop.',
          'sort() numbers par compare function ke bina galat result deta hai.',
          'typeof [] "object" hai — Array.isArray() se check karein.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Array = ordered list, index 0 se.',
          'Mutating: push, pop, shift, unshift, splice, sort, reverse.',
          'Non-mutating: slice, concat, join, indexOf, includes, map, filter, reduce.',
          'Callback methods naya array/value dete hain.',
          'Spread [...] se copy aur merge.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is an array in JavaScript? Explain any eight array methods with examples.',
        answer:
          '**Array:** ordered, zero-indexed collection — `const a = [10, 20, 30];`\n\n| Method | Kaam | Example → Result |\n|---|---|---|\n| push(x) | end mein jodo | a.push(40) → 4 |\n| pop() | end se hatao | a.pop() → 40 |\n| shift() | shuru se hatao | a.shift() → 10 |\n| unshift(x) | shuru mein jodo | a.unshift(5) → 4 |\n| splice(i,n) | beech se hatao/jodo | a.splice(1,1) → [20] |\n| slice(a,b) | copy | a.slice(0,2) → [10,20] |\n| indexOf(x) | position | a.indexOf(30) → 2 |\n| join(sep) | string banao | a.join("-") → "10-20-30" |\n| map(fn) | har item badlo | a.map(x=>x*2) → [20,40,60] |\n| filter(fn) | chhaano | a.filter(x=>x>10) → [20,30] |\n\n**Properties:** `length`; **check:** `Array.isArray(a)` → true.\n\n**Diagram:** Refer to the array methods diagram.',
      },
      {
        question: 'Differentiate between splice() and slice(). Explain map(), filter() and reduce() with examples.',
        answer:
          '**splice vs slice:**\n\n| Basis | splice() | slice() |\n|---|---|---|\n| Original | Badalta hai | Nahi badalta |\n| Return | Hataye elements | Copy |\n| Args | (start, deleteCount, …items) | (start, end) |\n| Use | remove/insert | copy nikaalna |\n\n```\nlet a = [10, 20, 30, 40];\na.splice(1, 2);        // [20, 30]  → a = [10, 40]\na.slice(1, 3);         // [20, 30]  → a wahi\n```\n\n**map / filter / reduce:**\n```\nlet n = [10, 20, 30];\n\nn.map(x => x * 2);              // [20, 40, 60]\nn.filter(x => x > 15);          // [20, 30]\nn.reduce((s, x) => s + x, 0);   // 60\n```\n\n| Method | Return | Length |\n|---|---|---|\n| map | naya array | same |\n| filter | naya array | ≤ original |\n| reduce | ek value | — |\n\n**Exam line:** "splice badalta hai, slice copy deta hai."',
      },
      {
        question: 'Explain array iteration methods: forEach, map, filter, find, some, every — with examples.',
        answer:
          'Sab callback leti hain: `(element, index, array)`\n\n```\nlet a = [10, 20, 30, 40];\n\na.forEach((x, i) => console.log(i, x));   // loop, return undefined\na.map(x => x * 2);                       // [20,40,60,80]\na.filter(x => x > 20);                   // [30,40]\na.find(x => x > 20);                     // 30 (pehla match)\na.findIndex(x => x > 20);                // 2\na.some(x => x > 35);                     // true (koi ek)\na.every(x => x > 5);                     // true (sab)\n```\n\n| Method | Return | Kab use |\n|---|---|---|\n| forEach | undefined | side effect / loop |\n| map | naya array | transform |\n| filter | naya array | chhaan |\n| find | pehla element | ek item chahiye |\n| some | true/false | koi ek match? |\n| every | true/false | sab match? |\n\n**Dhyan:** forEach break nahi kar sakta; break chahiye to `for...of` use karein.',
      },
    ],
  },

  // ==========================================================
  // 2.13 — Date and Temporal
  // ==========================================================
  {
    id: 'wt-js-date',
    number: '2.13',
    title: 'Date and the Temporal API',
    subtitle: 'Aaj ki tareekh, samay aur unke methods',
    icon: 'calendar',
    accent: '#00d4ff',
    englishDefinition:
      'JavaScript stores date and time in the built-in Date object — milliseconds since 1 January 1970 UTC (the Unix epoch). new Date() gives the current moment, new Date(2026, 0, 15) builds a date from parts (month is zero-based, so 0 = January), and new Date("2026-01-15") parses an ISO string. Getters include getFullYear, getMonth (0–11), getDate (1–31), getDay (0 = Sunday), getHours, getMinutes, getSeconds, getTime; setters (setDate, setMonth) mutate the object. Formatting helpers are toDateString, toLocaleDateString, toISOString and toUTCString. Date arithmetic is done in milliseconds (b - a). The newer Temporal API (Temporal.Now, Temporal.PlainDate, PlainTime, ZonedDateTime, Instant) fixes Date\'s problems: it separates date from time and time zone and is immutable.',
    intro:
      'Date object se aaj ki tareekh, time, countdown, "kitne din baaki" — sab nikal sakte hain. Do cheezein exam mein trap hain: (1) getMonth() January ke liye 0 deta hai, isliye +1 karna padta hai; (2) date objects mutable hote hain — setDate() original ko badal deta hai. Naya Temporal API inhi problem ko theek karta hai — uske baare mein 2-3 line likh dena extra marks deta hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Date Object',
        body:
          'new Date() → abhi ka date-time. new Date(2026, 0, 15) → 15 January 2026 (month 0 se!). new Date("2026-01-15") → ISO string se. Getters: getFullYear(), getMonth() (0–11), getDate() (1–31), getDay() (0 = Sunday), getHours(), getMinutes(), getTime() (milliseconds since 1970).',
        body2:
          'Format: toDateString() → "Thu Jan 15 2026", toLocaleDateString("en-IN") → "15/1/2026", toISOString() → "2026-01-15T00:00:00.000Z". Difference: do dates ka minus milliseconds deta hai, isliye din ke liye / (1000*60*60*24). Temporal API (naya) date, time aur time zone ko alag types mein rakhta hai aur immutable hai.',
        chips: ['new Date()', 'getMonth() 0–11', 'getDay()', 'toLocaleDateString', 'getTime()', 'Temporal'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Date ke Parts aur Temporal',
        diagram: 'js-date',
        caption:
          'Left: Date banane ke tareeke aur saare get methods. Right: Temporal API aur Date ki 3 problems ka solution. Exam mein getMonth ka 0-based trap zaroor likhein.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Live Clock + Date ke Saare Parts',
        intro:
          'Ye demo har second update hota hai (setInterval) — sach mein chal raha clock hai. Neeche usi date ke saare parts aur formatting dikhaye gaye hain, aur ek "kitne din baaki" ka calculation bhi.',
        language: 'html',
        filename: 'date.html',
        code: `<p id="clock"></p>
<table id="tbl"></table>
<p id="diff"></p>

<script>
  const days = ["Sunday","Monday","Tuesday","Wednesday",
                "Thursday","Friday","Saturday"];

  function tick() {
    const d = new Date();
    document.getElementById("clock").textContent =
      d.toLocaleTimeString("en-IN");
  }
  setInterval(tick, 1000);
  tick();

  const d = new Date();
  const rows = [
    ["getFullYear()", d.getFullYear()],
    ["getMonth()", d.getMonth() + " (0 = January)"],
    ["getDate()", d.getDate()],
    ["getDay()", d.getDay() + " (" + days[d.getDay()] + ")"],
    ["getHours()", d.getHours()],
    ["toDateString()", d.toDateString()],
    ["toLocaleDateString()", d.toLocaleDateString("en-IN")],
    ["toISOString()", d.toISOString().slice(0, 10)]
  ];
  const tbl = document.getElementById("tbl");
  rows.forEach(function (r) {
    const row = tbl.insertRow();
    row.insertCell().textContent = r[0];
    row.insertCell().textContent = r[1];
  });

  // kitne din baaki — date maths milliseconds mein
  const exam = new Date("2026-12-01");
  const diffDays = Math.ceil((exam - new Date()) / (1000 * 60 * 60 * 24));
  document.getElementById("diff").textContent =
    "1 Dec 2026 tak " + diffDays + " din baaki";
</script>`,
        html: `<p id="clock" style="margin:0 0 10px;font-size:20px;font-weight:800;color:#0047ff;font-family:monospace;"></p>
<table id="tbl" style="font-size:12.5px;border-collapse:collapse;width:100%;margin-bottom:10px;"></table>
<p id="diff" style="margin:0;font-size:13px;font-weight:700;color:#0a7d4f;"></p>`,
        script: `const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function tick() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString("en-IN");
}
setInterval(tick, 1000);
tick();
const d = new Date();
const rows = [
  ["getFullYear()", d.getFullYear()],
  ["getMonth()", d.getMonth() + " (0 = January)"],
  ["getDate()", d.getDate()],
  ["getDay()", d.getDay() + " (" + days[d.getDay()] + ")"],
  ["getHours()", d.getHours()],
  ["toDateString()", d.toDateString()],
  ["toLocaleDateString()", d.toLocaleDateString("en-IN")],
  ["toISOString()", d.toISOString().slice(0, 10)]
];
const tbl = document.getElementById("tbl");
rows.forEach(function (r) {
  const row = tbl.insertRow();
  const c1 = row.insertCell();
  c1.textContent = r[0];
  c1.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;color:#0047ff;font-family:monospace;";
  const c2 = row.insertCell();
  c2.textContent = r[1];
  c2.style.cssText = "border:1px solid #dbe3f4;padding:4px 8px;color:#22314f;";
});
const exam = new Date("2026-12-01");
const diffDays = Math.ceil((exam - new Date()) / (1000 * 60 * 60 * 24));
document.getElementById("diff").textContent = "1 Dec 2026 tak " + diffDays + " din baaki";`,
        caption:
          'Clock setInterval se har second update hota hai. Table mein aaj ki asli values hain — getMonth par 0-based month saaf dikh raha hai. Date maths milliseconds mein hoti hai, isliye din ke liye divide karte hain.',
        height: 330,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Date Methods — Reference',
        intro:
          'Banane ke tareeke, get/set methods, formatting aur date arithmetic — exam mein yahi cheezein likhni hoti hain.',
        language: 'javascript',
        filename: 'date.js',
        code: `// ---- banana ----
new Date()                     // abhi
new Date(2026, 0, 15)          // 15 Jan 2026 (month 0-based!)
new Date("2026-01-15")         // ISO string
new Date(2026, 0, 15, 10, 30)  // 15 Jan 2026, 10:30
Date.now()                     // milliseconds since 1970

// ---- padhna (getters) ----
const d = new Date();
d.getFullYear()      // 2026
d.getMonth()         // 0–11  (Jan = 0)  → +1 karke dikhayein
d.getDate()          // 1–31  (din)
d.getDay()           // 0–6   (Sunday = 0)
d.getHours()         // 0–23
d.getMinutes()       // 0–59
d.getTime()          // ms since 1970

// ---- badalna (setters — object mutable hai) ----
d.setFullYear(2027);
d.setMonth(5);        // June
d.setDate(d.getDate() + 7);   // 7 din aage

// ---- format ----
d.toDateString()                // "Thu Jan 15 2026"
d.toLocaleDateString("en-IN")   // "15/1/2026"
d.toLocaleTimeString("en-IN")   // "10:30:00 am"
d.toISOString()                 // "2026-01-15T05:00:00.000Z"
d.toUTCString()                 // GMT format (cookie expires)

// ---- difference ----
const exam = new Date("2026-12-01");
const days = Math.ceil((exam - new Date()) / (1000 * 60 * 60 * 24));

// ---- Temporal (naya API) ----
Temporal.Now.instant();
Temporal.PlainDate.from("2026-01-15");
Temporal.PlainTime.from("10:30");`,
        note:
          'Date mutable hai — const d = new Date(); d.setMonth(5); karne par wahi object badal jaata hai. Copy chahiye to new Date(d.getTime()).',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Date vs Temporal API',
        columns: ['Date (purana)', 'Temporal (naya)'],
        columnColors: ['#ff8800', '#00ff88'],
        rows: [
          { label: 'Month', values: ['0 se 11 (Jan = 0)', '1 se 12'] },
          { label: 'Mutable', values: ['Haan (setDate badal deta hai)', 'Nahi — immutable'] },
          { label: 'Date + time', values: ['Ek hi object', 'PlainDate, PlainTime alag'] },
          { label: 'Time zone', values: ['Mushkil, local + UTC mix', 'ZonedDateTime alag type'] },
          { label: 'Browser support', values: ['Sab jagah', 'Naya — sab browsers mein nahi'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Date Ke Points',
        points: [
          'new Date() abhi ka time; new Date(2026, 0, 15) parts se (month 0 se).',
          'getMonth() 0–11, getDate() 1–31, getDay() 0 = Sunday — teeno alag.',
          'Date object mutable hai; copy ke liye new Date(d.getTime()).',
          'Difference milliseconds mein — din ke liye /(1000*60*60*24).',
          'Format: toLocaleDateString("en-IN"), toISOString(), toUTCString().',
          'Temporal: immutable, month 1-based, date/time/zone alag — par abhi universal support nahi.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Date = 1970 se milliseconds ka object.',
          'getMonth 0-based — display ke liye +1.',
          'setters original ko badalte hain (mutable).',
          'toLocaleDateString display ke liye, toISOString storage/API ke liye.',
          'Temporal in problem ka naya samadhan.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the Date object in JavaScript with its methods and two examples.',
        answer:
          '**Date:** date aur time ko represent karta hai — andar se 1 Jan 1970 UTC se milliseconds.\n\n**Create:**\n```\nnew Date()                    // abhi\nnew Date(2026, 0, 15)         // 15 Jan 2026 (month 0-based)\nnew Date("2026-01-15")\nDate.now()\n```\n\n**Getters:**\n\n| Method | Return |\n|---|---|\n| getFullYear() | 2026 |\n| getMonth() | 0–11 |\n| getDate() | 1–31 |\n| getDay() | 0–6 (Sun = 0) |\n| getHours/getMinutes | 0–23 / 0–59 |\n| getTime() | ms since 1970 |\n\n**Format:** `toDateString()`, `toLocaleDateString("en-IN")`, `toISOString()`.\n\n**Example (age / days left):**\n```\nconst exam = new Date("2026-12-01");\nconst days = Math.ceil((exam - new Date()) / 86400000);\n```\n\n**Trap:** `getMonth()` January ke liye 0 deta hai.\n\n**Diagram:** Refer to the Date/Temporal diagram.',
      },
      {
        question: 'Write a JavaScript program to display the current date and time in different formats.',
        answer:
          '```\nconst d = new Date();\n\nconsole.log(d.toDateString());              // Thu Jan 15 2026\nconsole.log(d.toLocaleDateString("en-IN")); // 15/1/2026\nconsole.log(d.toLocaleTimeString("en-IN")); // 10:30:00 am\nconsole.log(d.toISOString());               // 2026-01-15T05:00:00.000Z\nconsole.log(d.toUTCString());               // Thu, 15 Jan 2026 05:00:00 GMT\n```\n\n**Custom format (dd-mm-yyyy):**\n```\nfunction fmt(d) {\n  const dd = String(d.getDate()).padStart(2, "0");\n  const mm = String(d.getMonth() + 1).padStart(2, "0");\n  const yyyy = d.getFullYear();\n  return dd + "-" + mm + "-" + yyyy;\n}\nfmt(new Date());   // "05-11-2026"\n```\n\n**Live clock:**\n```\nsetInterval(function () {\n  document.getElementById("clock").textContent =\n    new Date().toLocaleTimeString();\n}, 1000);\n```\n\n**Dhyan:** `getMonth() + 1` aur `padStart(2, "0")` — dono real projects mein zaroori hain.',
      },
      {
        question: 'What are the limitations of the Date object? How does the Temporal API improve it?',
        answer:
          '**Date ki problems:**\n1. **Month 0-based** — January = 0, isliye +1 karna padta hai\n2. **Mutable** — `setDate()` original object badal deta hai (bugs)\n3. **Date + time + zone ek hi object** — sirf date ya sirf time chahiye to bhi poora object\n4. **Parsing inconsistent** — "2026-01-15" aur "15-01-2026" ka behaviour alag\n5. **Timezone handling mushkil** — local aur UTC methods mix ho jaate hain\n\n**Temporal ka jawab:**\n\n| Problem | Temporal |\n|---|---|\n| month 0-based | 1-based |\n| mutable | immutable |\n| sab ek object | PlainDate, PlainTime, ZonedDateTime alag |\n| parsing | standard ISO + explicit types |\n\n```\nTemporal.Now.instant();\nTemporal.PlainDate.from("2026-01-15");\nTemporal.PlainTime.from("10:30");\nTemporal.ZonedDateTime.from("2026-01-15T10:30[Asia/Kolkata]");\n```\n\n**Note:** abhi Temporal sab browsers mein stable nahi, isliye exam mein Date ka code likhna hai — par ye comparison likhna extra marks deta hai.',
      },
    ],
  },


  // ==========================================================
  // 2.14 — Asynchronous JavaScript
  // ==========================================================
  {
    id: 'wt-js-async',
    number: '2.14',
    title: 'Asynchronous JavaScript: setTimeout, Callbacks, Promises and async/await',
    subtitle: 'Bina page roke lamba kaam karna',
    icon: 'clock',
    accent: '#2f6fff',
    englishDefinition:
      'JavaScript runs on a single call stack, so a long task would freeze the page. Asynchronous programming lets slow work (timers, network requests, file reads) happen in the background: the code schedules a job and continues, and a callback runs when the result is ready. setTimeout(fn, ms) runs a function once after a delay and setInterval runs it repeatedly. A callback is a function passed as an argument; nested callbacks create "callback hell". A Promise represents a value that will arrive later and has three states — pending, fulfilled, rejected — handled with .then(), .catch() and .finally(), and Promise.all()/race() combine several. async/await (ES2017) writes promise-based code that looks synchronous: await pauses only that async function, and errors are caught with try/catch. The event loop moves callbacks back to the stack, draining the microtask queue (promises) before the task queue (setTimeout).',
    intro:
      'JS ek hi thread par chalti hai — agar server ka jawab aane tak wait kare, page hang ho jaayega. Isliye async: kaam browser ko de do, aage badho, jawab aane par function chala do. Chaar step hain: setTimeout → callback → promise → async/await. Exam mein teen cheezein pakki poochhi jaati hain: promise ke teen states, callback hell, aur "1 4 3 2" wala output order. Neeche live demo sach mein chal kar order dikhata hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Async kya hai?',
        body:
          'Synchronous code line-by-line chalta hai — pehli line khatam, phir doosri. Asynchronous code lamba kaam (timer, fetch) start karke aage badh jaata hai, aur kaam khatam hone par callback/promise se batata hai. setTimeout(fn, 2000) — 2 second baad fn ek baar; setInterval(fn, 1000) — har second.',
        body2:
          'Promise ek "vada" hai: pending (kaam chal raha), fulfilled (mil gaya), rejected (error). .then() fulfilled par, .catch() rejected par, .finally() dono par. async function hamesha promise return karta hai; await us promise ke settle hone tak sirf usi function ko rokta hai — page ko nahi. Promise callbacks microtask queue mein jaate hain, setTimeout task queue mein — isliye promise pehle chalta hai.',
        chips: ['setTimeout', 'setInterval', 'callback', 'promise', '.then/.catch', 'async/await', 'event loop'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Call Stack, Queues aur Output Order',
        diagram: 'js-async',
        caption:
          'Call stack → Web APIs → task queue / microtask queue → event loop. Right side wala "1 4 3 2" order exam ka favourite question hai — ise diagram ke saath likhein.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Chalta Hua Order — Synthetic Callback, Promise, async/await',
        intro:
          '"Run" dabaiye: pehle synchronous lines chalti hain, phir promise (microtask), phir setTimeout (macrotask). Timestamps ke saath live log neeche aata hai — yahi event loop ka order hai.',
        language: 'html',
        filename: 'async.html',
        code: `<button id="run">Run demo</button>
<ol id="log"></ol>

<script>
  function log(msg) {
    var li = document.createElement("li");
    var t = ((performance.now()) / 1000).toFixed(2);
    li.textContent = "[" + t + "s] " + msg;
    document.getElementById("log").appendChild(li);
  }

  document.getElementById("run").addEventListener("click", function () {
    document.getElementById("log").innerHTML = "";

    log("1 — sync: script shuru");

    setTimeout(function () {
      log("2 — setTimeout 1s (macrotask)");
    }, 1000);

    Promise.resolve().then(function () {
      log("3 — promise .then (microtask)");
    });

    log("4 — sync: script khatam");

    // callback style
    wait(2000, function () {
      log("5 — callback 2s baad");
    });

    // promise style
    waitP(2500).then(function () {
      log("6 — promise 2.5s baad");
    });

    // async/await style
    (async function () {
      const v = await waitV(3000);
      log("7 — await ke baad: " + v);
    })();

    function wait(ms, cb) { setTimeout(cb, ms); }
    function waitP(ms) {
      return new Promise(function (resolve) {
        setTimeout(function () { resolve(ms); }, ms);
      });
    }
    async function waitV(ms) {
      await waitP(ms);
      return "value mil gayi";
    }
  });
</script>`,
        html: `<button id="run" style="padding:8px 16px;border:0;border-radius:8px;background:#0047ff;color:#fff;font-size:13px;cursor:pointer;">Run demo</button>
<ol id="log" style="margin:12px 0 0;padding-left:20px;font-size:12.5px;font-family:monospace;color:#12203d;line-height:1.9;"></ol>`,
        script: `function log(msg) {
  var li = document.createElement("li");
  var t = ((performance.now()) / 1000).toFixed(2);
  li.textContent = "[" + t + "s] " + msg;
  document.getElementById("log").appendChild(li);
}
document.getElementById("run").addEventListener("click", function () {
  document.getElementById("log").innerHTML = "";
  log("1 — sync: script shuru");
  setTimeout(function () { log("2 — setTimeout 1s (macrotask)"); }, 1000);
  Promise.resolve().then(function () { log("3 — promise .then (microtask)"); });
  log("4 — sync: script khatam");
  wait(2000, function () { log("5 — callback 2s baad"); });
  waitP(2500).then(function () { log("6 — promise 2.5s baad"); });
  (async function () {
    const v = await waitV(3000);
    log("7 — await ke baad: " + v);
  })();
  function wait(ms, cb) { setTimeout(cb, ms); }
  function waitP(ms) {
    return new Promise(function (resolve) { setTimeout(function () { resolve(ms); }, ms); });
  }
  async function waitV(ms) { await waitP(ms); return "value mil gayi"; }
});
document.getElementById("run").click();   // page khulte hi ek baar`,
        caption:
          'Dekhein: 1 aur 4 turant (sync), phir 3 (promise = microtask), uske baad 2 (setTimeout 1s). Isi ko samajhna "1 4 3 2" wale question ka jawab hai — baad ki delay sequence 5, 6, 7.',
        height: 300,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Chaar Andaz — setTimeout, Callback, Promise, async/await',
        intro:
          'Ek hi kaam (2 second baad data lana) chaar tareeke se — exam mein isi ka comparison poochha jaata hai.',
        language: 'javascript',
        filename: 'async.js',
        code: `// ---- 1. setTimeout / setInterval ----
setTimeout(function () {
  console.log("2 second baad");
}, 2000);

let n = 0;
const id = setInterval(function () {
  n++;
  console.log("tick", n);
  if (n === 3) clearInterval(id);   // warna chalta rahega
}, 1000);

// ---- 2. callback ----
function getUser(id, callback) {
  setTimeout(function () {
    callback({ id: id, name: "Riya" });
  }, 1000);
}
getUser(1, function (user) {
  console.log("mila:", user.name);
});

// callback hell — isi problem se promise aaya
getUser(1, function (u) {
  getMarks(u.id, function (m) {
    getResult(m, function (r) {
      console.log(r);              // nested, padhna mushkil
    });
  });
});

// ---- 3. promise ----
function getUserP(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (id > 0) resolve({ id: id, name: "Riya" });
      else reject(new Error("galat id"));
    }, 1000);
  });
}

getUserP(1)
  .then(function (u) { return u.name; })
  .then(function (name) { console.log("Hi", name); })
  .catch(function (err) { console.log("error:", err.message); })
  .finally(function () { console.log("ho gaya"); });

// ---- 4. async / await ----
async function show() {
  try {
    const u = await getUserP(1);
    const marks = await getMarksP(u.id);
    console.log(u.name, marks);         // sync jaisa padhne mein aasan
  } catch (err) {
    console.log("error:", err.message);
  }
}
show();

// ---- parallel (ek saath) ----
const [a, b] = await Promise.all([getUserP(1), getUserP(2)]);`,
        note:
          'async function hamesha promise return karti hai. await sirf async function ke andar chalta hai (ya module top-level par). Error ke liye try/catch — .catch() ka replacement.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Callback vs Promise vs async/await',
        columns: ['Callback', 'Promise', 'async/await'],
        columnColors: ['#ff8800', '#00d4ff', '#c4ff00'],
        rows: [
          { label: 'Syntax', values: ['function pass karna', '.then().catch()', 'await + try/catch'] },
          { label: 'Readability', values: ['Nesting badhne par girta hai', 'Chain line mein', 'Sync code jaisa'] },
          { label: 'Error handling', values: ['Har level par manually', '.catch() ek jagah', 'try/catch'] },
          { label: 'Parallel', values: ['Manually count', 'Promise.all', 'Promise.all + await'] },
          { label: 'Kahan', values: ['Purane APIs', 'ES6 se', 'ES2017 se'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Async Ke Points',
        points: [
          'setTimeout(fn, ms) ek baar, setInterval(fn, ms) baar-baar (clearInterval se rokein).',
          'Callback = function jo argument ke roop mein di jaati hai; nesting = callback hell.',
          'Promise ke 3 states: pending, fulfilled, rejected; .then/.catch/.finally.',
          'async function hamesha promise deti hai; await us promise ka intezaar karta hai.',
          'Promise.all parallel chalata hai, Promise.race pehla result deta hai.',
          'Microtask (promise) pehle, macrotask (setTimeout) baad mein — isliye order 1 4 3 2.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'JS single-threaded — async se page freeze nahi hota.',
          'Callback se promise, promise se async/await — teeno ek hi kaam.',
          'Promise states + .then/.catch + Promise.all.',
          'await async function ke andar, error try/catch se.',
          'Event loop: microtask pehle, macrotask baad mein.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is asynchronous JavaScript? Explain setTimeout, callbacks and promises with examples.',
        answer:
          '**Asynchronous JS:** lamba kaam (timer, network) background mein chalta hai aur baaki code rukta nahi; result aane par callback/promise se batata hai.\n\n**1. setTimeout:**\n```\nsetTimeout(() => console.log("2s baad"), 2000);\nsetInterval(() => tick(), 1000);\n```\n**2. Callback:**\n```\nfunction getUser(id, cb) {\n  setTimeout(() => cb({ id, name: "Riya" }), 1000);\n}\ngetUser(1, u => console.log(u.name));\n```\nNesting badhne par **callback hell**.\n\n**3. Promise:**\n```\nconst p = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("data"), 1000);\n});\np.then(d => console.log(d)).catch(e => console.log(e));\n```\n\n**States:** pending → fulfilled / rejected.\n\n| Approach | Error handling |\n|---|---|\n| callback | har level par |\n| promise | `.catch()` |\n| async/await | `try/catch` |\n\n**Diagram:** Refer to the event loop diagram.',
      },
      {
        question: 'What is a Promise? Explain its states, methods and Promise.all() with an example.',
        answer:
          '**Promise:** future value ka object — abhi nahi, baad mein milega (ya error).\n\n**3 states:**\n1. **pending** — kaam chal raha\n2. **fulfilled** — resolve(value)\n3. **rejected** — reject(error)\n\n**Methods:**\n```\nconst p = fetch("/api/marks");   // promise\n\np.then(res => res.json())\n .then(data => console.log(data))\n .catch(err => console.log("error", err))\n .finally(() => console.log("done"));\n```\n\n| Method | Kaam |\n|---|---|\n| then() | fulfilled par |\n| catch() | rejected par |\n| finally() | dono par |\n| Promise.all() | sab complete hone par |\n| Promise.race() | pehla complete |\n| Promise.allSettled() | sab, error ke saath |\n\n**Promise.all:**\n```\nconst [a, b] = await Promise.all([getUser(1), getMarks(1)]);\n// dono parallel — total time = max(a,b), sum nahi\n```\n\n**Exam line:** "Promise ek vada hai — pending se fulfilled ya rejected."',
      },
      {
        question: 'Explain async/await. How is it better than promises? What is the output order of sync code, setTimeout and Promise?',
        answer:
          '**async/await (ES2017):** promise-based code ko synchronous jaisa likhne ka tareeka.\n```\nasync function show() {\n  try {\n    const user = await getUser(1);   // promise settle hone tak rukta hai\n    console.log(user.name);\n  } catch (err) {\n    console.log("error:", err.message);\n  }\n}\n```\n\n**Fayde:**\n1. `.then()` ki chain nahi — line-by-line padhna aasan\n2. `try/catch` se error handling\n3. Debugging/step-through aasan\n\n**Output order:**\n```\nconsole.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");\n```\n**Output: 1, 4, 3, 2**\n\n**Kyun:** sync code pehle (1, 4) → microtask queue (promise = 3) → macrotask queue (setTimeout = 2).\n\n**Diagram:** Refer to the event loop diagram.',
      },
    ],
  },

  // ==========================================================
  // 2.15 — Bootstrap
  // ==========================================================
  {
    id: 'wt-bootstrap-intro',
    number: '2.15',
    title: 'Introduction to Bootstrap: Need, Advantages and How to Use',
    subtitle: 'Ready-made CSS framework — design bina CSS likhe',
    icon: 'grid',
    accent: '#8b5cf6',
    englishDefinition:
      'Bootstrap is a free, open-source front-end framework (originally from Twitter, 2011) that provides a responsive 12-column grid, pre-built components (navbar, buttons, cards, modals, tables, forms, alerts) and utility classes (spacing, colour, flex, display). It is added to a page with a single CSS link from a CDN (or via npm/download), plus the bundled JavaScript file for interactive components such as dropdowns and modals; Bootstrap 5 no longer needs jQuery. Markup stays normal HTML — classes such as container, row, col-md-6, btn btn-primary and card do the styling, and breakpoints (sm ≥576px, md ≥768px, lg ≥992px, xl ≥1200px) make the same markup adapt from mobile to desktop. Advantages: speed, consistency, mobile-first responsiveness, cross-browser tested components and customization through Sass variables. Limitations: a uniform "Bootstrap look", larger CSS than hand-written styles, and a learning curve for its class system.',
    intro:
      'Bootstrap matlab "design ka ready-made toolkit". Aap HTML likhte hain, aur Bootstrap ki classes lagate hain — button, navbar, card, grid sab pehle se bane hue mil jaate hain, mobile par bhi theek dikhte hain. Exam mein teen sawaal aate hain: kyun chahiye, kya fayde hain, aur kaise use karein (CDN link + class names). Dhyan: ye JS unit ke aakhir mein hai, par ye CSS framework hai — isliye iske examples HTML/CSS ke hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Bootstrap kya hai?',
        body:
          'Bootstrap ek front-end CSS framework hai (Twitter ne 2011 mein banaya). Isme responsive grid (12 columns), components (button, card, navbar, modal, alert, table, form) aur utility classes (m-3, p-2, text-center, bg-primary) ready milte hain. Page mein lagane ke liye ek CSS link kaafi hai: <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">.',
        body2:
          'Interactive components (dropdown, modal, collapse, carousel) ke liye bootstrap.bundle.min.js bhi chahiye. Bootstrap 5 mein jQuery ki zaroorat nahi. Classes: container (centre + padding), row (grid line), col-md-6 (medium screen par 6/12 = 50%), btn btn-primary (button), card, alert alert-success. Breakpoints se wahi markup mobile par stack ho jaata hai.',
        chips: ['CSS framework', '12-column grid', 'components', 'utility classes', 'CDN', 'Bootstrap 5', 'mobile-first'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Bootstrap — Kyun, Kaise, Grid',
        diagram: 'bootstrap',
        caption:
          'Left: kyun chahiye (grid, components, speed). Middle: CDN link aur class lagane ka tareeka. Right: 12-column grid aur breakpoints. Exam mein teeno hisse alag-alag points bante hain.',
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Bootstrap Kaise Jodein — CDN Starter',
        intro:
          'Ye poora starter page hai jo exam mein likhna hai: CDN CSS ka link, optional JS bundle, aur Bootstrap ki classes ke saath markup.',
        language: 'html',
        filename: 'bootstrap-starter.html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap Demo</title>

  <!-- 1. Bootstrap CSS (CDN) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet">
</head>
<body>

  <div class="container py-4">
    <h1 class="h3 text-primary">MCA Notes</h1>

    <!-- 2. Grid: row + columns (mobile par stack, md par side-by-side) -->
    <div class="row g-3">
      <div class="col-12 col-md-6">
        <div class="card p-3">
          <h5 class="card-title">Web Technology</h5>
          <p class="card-text text-muted">HTML, CSS, JavaScript</p>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card p-3">
          <h5 class="card-title">Data Science</h5>
          <p class="card-text text-muted">Python, pandas, statistics</p>
        </div>
      </div>
    </div>

    <!-- 3. Components: button + alert -->
    <button class="btn btn-primary mt-3">Submit</button>
    <div class="alert alert-success mt-3 mb-0">
      Bootstrap classes lag gayi — CSS likhne ki zaroorat nahi.
    </div>
  </div>

  <!-- 4. Bootstrap JS (dropdown/modal ke liye; Bootstrap 5 mein jQuery nahi) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
        note:
          'CDN ki jagah npm (npm i bootstrap), download ya CDN se offline file bhi use kar sakte hain. Order dhyan rakhein: Bootstrap CSS apni custom CSS se pehle, warna aapki CSS override ho jaayegi.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Wahi Classes — Dikhta Hua Grid aur Components',
        intro:
          'Ye preview wahi Bootstrap class names (container, row, col-md-6, card, btn btn-primary, alert) use karta hai. Preview sandbox mein internet nahi hai, isliye CDN CSS load nahi hoti — isliye yahan unhi class names ke liye chhoti si offline stylesheet lagi hai. Asli page par ye kaam CDN karta hai.',
        language: 'html',
        filename: 'grid.html',
        code: `<div class="container">
  <h1 class="h3">MCA Notes</h1>

  <div class="row">
    <div class="col-12 col-md-6">
      <div class="card">
        <h5>Web Technology</h5>
        <p class="text-muted">HTML, CSS, JavaScript</p>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="card">
        <h5>Data Science</h5>
        <p class="text-muted">Python, pandas, statistics</p>
      </div>
    </div>
  </div>

  <button class="btn btn-primary">Submit</button>
  <div class="alert alert-success">
    Bootstrap classes lag gayi — CSS likhne ki zaroorat nahi.
  </div>
</div>`,
        html: `<div class="container">
  <h1 class="h3">MCA Notes</h1>
  <div class="row">
    <div class="col-12 col-md-6">
      <div class="card">
        <h5>Web Technology</h5>
        <p class="text-muted">HTML, CSS, JavaScript</p>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="card">
        <h5>Data Science</h5>
        <p class="text-muted">Python, pandas, statistics</p>
      </div>
    </div>
  </div>
  <button class="btn btn-primary">Submit</button>
  <div class="alert alert-success">
    Bootstrap classes lag gayi — CSS likhne ki zaroorat nahi.
  </div>
</div>`,
        css: `.container { max-width: 720px; margin: 0 auto; padding: 4px; }
.h3 { font-size: 20px; font-weight: 800; margin: 0 0 10px; color: #0d6efd; }
.row { display: flex; flex-wrap: wrap; gap: 12px; }
.col-12 { width: 100%; }
@media (min-width: 480px) { .col-md-6 { width: calc(50% - 6px); } }
.card { border: 1px solid #dee2e6; border-radius: 10px; padding: 12px; background: #fff; }
.card h5 { margin: 0 0 4px; font-size: 14px; font-weight: 700; color: #212529; }
.card p { margin: 0; font-size: 12.5px; }
.text-muted { color: #6c757d; }
.btn { display: inline-block; padding: 7px 14px; border: 0; border-radius: 8px; font-size: 13px; cursor: pointer; margin: 12px 0; }
.btn-primary { background: #0d6efd; color: #fff; }
.alert { padding: 10px 14px; border-radius: 8px; font-size: 13px; }
.alert-success { background: #d1e7dd; color: #0f5132; border: 1px solid #badbcc; }`,
        caption:
          'Grid ka farak dekhne ke liye preview ko chauda/patla karein — patli screen par dono cards ek ke neeche ek (col-12), chaudi par side-by-side (col-md-6). Yahi responsive grid hai.',
        height: 300,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Bootstrap vs Custom CSS vs Tailwind',
        columns: ['Bootstrap', 'Custom CSS', 'Tailwind CSS'],
        columnColors: ['#8b5cf6', '#00d4ff', '#00ff88'],
        rows: [
          { label: 'Style', values: ['Ready components + classes', 'Sab kuch khud likhna', 'Utility-first classes'] },
          { label: 'Speed', values: ['Bahut tez shuruaat', 'Dheema (har cheez nayi)', 'Tez, par HTML bhar jaata hai'] },
          { label: 'Look', values: ['Ek jaisa Bootstrap look', 'Bilkul apna', 'Apna (utility se)'] },
          { label: 'CSS size', values: ['Bada (~200 KB, minified)', 'Chhota, sirf zaroori', 'Purge karke chhota'] },
          { label: 'Best for', values: ['College project, admin panel', 'Unique design', 'Modern custom design'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Bootstrap Ke Points',
        points: [
          'Bootstrap = open-source front-end framework (CSS + JS), 2011 mein Twitter se shuru.',
          'Fayde: responsive grid, ready components, mobile-first, cross-browser tested, tez development.',
          'Lagane ke tareeke: CDN link, npm install, ya files download.',
          'Grid: container → row → col-* ; 12 columns, breakpoints sm/md/lg/xl.',
          'Bootstrap 5 mein jQuery nahi chahiye; JS bundle sirf interactive components ke liye.',
          'Limitation: sites ek jaisi lagti hain, CSS size bada, class names yaad karne padte hain.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Bootstrap se design ready — sirf classes lagani hoti hain.',
          '12-column responsive grid: container, row, col-md-6.',
          'Components: btn, card, alert, navbar, modal, form.',
          'CDN link head mein, JS bundle end mein.',
          'Fayde: speed + consistency; nuksan: same look + bada CSS.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is Bootstrap? Why is it needed and what are its advantages?',
        answer:
          '**Bootstrap:** free, open-source front-end framework (Twitter, 2011) — responsive grid, ready-made components aur utility classes deta hai, taaki design ke liye CSS scratch se na likhni pade.\n\n**Need:**\n1. Har page ke liye CSS dobara likhna padta tha\n2. Mobile/tablet ke liye alag code likhna padta tha\n3. Browser differences handle karna mushkil tha\n4. Consistent design team mein maintain karna mushkil\n\n**Advantages:**\n1. **Responsive** — mobile-first grid, breakpoints\n2. **Speed** — components ready (button, card, navbar, modal)\n3. **Consistency** — poore project mein ek jaisa look\n4. **Cross-browser tested**\n5. **Customisable** — Sass variables se theme badal sakte hain\n6. **Bootstrap 5** — jQuery ki zaroorat nahi\n\n**Limitations:** sites ek jaisi lagti hain, CSS size bada, class names yaad karne padte hain.\n\n**Diagram:** Refer to the Bootstrap diagram.',
      },
      {
        question: 'How do you include Bootstrap in an HTML page? Explain the grid system with an example.',
        answer:
          '**Include (CDN):**\n```\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"\n      rel="stylesheet">\n\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>\n```\nKarne ke aur tareeke: `npm i bootstrap`, ya CSS/JS files download.\n\n**Grid system:** 12 columns, mobile-first.\n```\n<div class="container">\n  <div class="row">\n    <div class="col-12 col-md-6">Left</div>\n    <div class="col-12 col-md-6">Right</div>\n  </div>\n</div>\n```\n- `container` — centre + padding\n- `row` — grid ki line\n- `col-md-6` — ≥768px par 6/12 = 50% width; chhoti screen par col-12 = poora\n\n**Breakpoints:** sm 576 · md 768 · lg 992 · xl 1200 · xxl 1400.\n\n**Gap:** `g-3`. **Auto:** `col` ya `col-auto`.\n\n**Diagram:** Refer to the Bootstrap diagram (12-column grid).',
      },
      {
        question: 'Compare Bootstrap with writing custom CSS. When would you prefer each?',
        answer:
          '| Basis | Bootstrap | Custom CSS |\n|---|---|---|\n| Development | Bahut tez (classes ready) | Dheema (sab likhna) |\n| Design | Standard Bootstrap look | Bilkul apna |\n| CSS size | Bada (~200 KB) | Chhota, sirf zaroori |\n| Responsive | Built-in grid | Media queries khud |\n| Consistency | Framework se guarantee | Team discipline par |\n| Learning | Class names yaad karne padte | CSS samajh chahiye |\n\n**Bootstrap kab:**\n- College project / deadline paas\n- Admin dashboard, internal tool\n- Prototype jaldi banana\n- Team mein CSS expert nahi\n\n**Custom CSS kab:**\n- Unique brand design\n- Bahut chhoti site (ek page) — 200 KB framework overkill\n- Strict performance budget\n\n**Beech ka raasta:** Bootstrap + custom CSS override, ya Tailwind jaisa utility framework.\n\n**Exam line:** "Bootstrap speed deta hai, custom CSS control — deadline ho to Bootstrap, brand ho to custom."',
      },
    ],
  },
];
