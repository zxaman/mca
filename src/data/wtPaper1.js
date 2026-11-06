// Web Technology Paper 1 — Model Paper (5 + 5 division)
//
// Topic map (all different from Papers 2, 3 and 4):
//   Unit 1 — 1.5 HTML document structure, 1.14 HTML vs HTML5, 1.15 CSS insertion + selectors,
//            1.2 Internet and WWW (URL, protocol, client-server)
//   Unit 2 — 2.2 embedded vs external JavaScript, 2.3 variables and data types,
//            2.4 control structures, 2.5 loop controls
//   Unit 3 — 3.2 PHP request and response flow, 3.3 PHP variables and superglobals,
//            3.4 PHP operators, 3.7 string library functions
//   Unit 4 — 4.1 ASP.NET introduction, 4.4 page life cycle, 4.5 server control types,
//            4.6 state management overview
//   Unit 5 — 5.1 JavaScript frameworks, 5.2 AngularJS overview, 5.3 AngularJS features,
//            5.7 AngularJS expressions and directives

export const wtPaper1 = {
  id: `wt-paper-1`,
  number: 1,
  name: `Paper 1`,
  tag: `Web Technology`,
  session: `Model Paper · 5 + 5 division`,
  board: `M.C.A. (Management)`,
  semester: `Model Paper`,
  pattern: `University pattern · 50 marks`,
  subjectCode: `WT`,
  subjectName: `Web Technology`,
  totalMarks: 50,
  time: `2½ Hours`,
  totalQuestions: 5,
  instructions: [
    `All questions are compulsory.`,
    `Every question carries 10 marks, divided as (a) 5 marks + (b) 5 marks.`,
    `Attempt any one set in each question — either (a) and (b), or (c) and (d).`,
    `Figures to the right indicate full marks.`,
    `Draw neat diagrams and write code snippets wherever necessary.`,
    `Answers must be written in English.`,
  ],
  questions: [
    {
      number: 1,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Explain the structure of an HTML document with a skeleton example, and state the purpose of the DOCTYPE, html, head and body elements.`,
              explain:
                `**What is being asked.** The fixed skeleton every page must follow, with the job of each element, plus a short code example.\n\n**The skeleton.** DOCTYPE, html, head (title, meta, link, style, script) and body (rendered content).\n\n**How to score the 5 marks.** The skeleton diagram or code (2) · purpose of each of the four elements (2) · head vs body difference and standards vs quirks mode (1).`,
              answer:
                `Every HTML document follows the same fixed skeleton, and the browser relies on it to build the page.\n\n\`\`\`html\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>Student Portal</title>\n    <link rel="stylesheet" href="style.css" />\n  </head>\n  <body>\n    <h1>Welcome</h1>\n    <p>This text is rendered on the screen.</p>\n    <script src="app.js"></script>\n  </body>\n</html>\n\`\`\`\n\n| Element | Purpose |\n|---|---|\n| **\`<!DOCTYPE html>\`** | the first line; tells the browser this is an HTML5 document, so it renders in **standards mode** instead of quirks mode |\n| **\`<html>\`** | the root element; contains exactly two children, \`<head>\` and \`<body>\`, and carries the \`lang\` attribute |\n| **\`<head>\`** | metadata that is **not rendered**: \`<title>\` (tab and search title), \`<meta>\` (charset, viewport, description, keywords), \`<link>\` (external CSS), \`<style>\`, \`<script>\` |\n| **\`<body>\`** | all visible content — headings, paragraphs, images, tables, forms, links |\n\n**Why the head matters.** A missing \`<meta charset="UTF-8">\` shows \`?\` in place of Indian-language characters, and a missing viewport meta makes the page render as a shrunken desktop page on a phone.\n\n**Where the script goes.** A \`<script>\` at the end of \`<body>\` runs after the elements exist; a script in \`<head>\` without \`defer\` runs before the body is parsed, so \`document.getElementById\` returns \`null\` — a very common exam-worthy bug.\n\n**Exam line:** DOCTYPE sets the mode, html is the root, head is metadata, body is content — and the script order decides whether the DOM is ready.`,
              diagram: `html-structure`,
              diagramCaption:
                `The skeleton of an HTML document — DOCTYPE, html, head with metadata and body with rendered content.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain the differences between HTML and HTML5 on at least six points, and name four new elements introduced by HTML5.`,
              explain:
                `**What is being asked.** A comparison table plus the new semantic elements.\n\n**The differences.** Doctype string, audio/video support without plugins, canvas and SVG, semantic tags, form input types with validation, local storage and offline support, error handling, and parsing rules.\n\n**New elements.** header, nav, section, article, aside, footer, figure, figcaption, main, video, audio, canvas, progress, mark, time.\n\n**How to score the 5 marks.** Six points of difference (3) · four new elements with their use (2).`,
              answer:
                `HTML5 is the fifth revision of the standard, and it changed both the syntax and what a page can do without plugins.\n\n| Point | HTML (up to 4.01) | HTML5 |\n|---|---|---|\n| **Doctype** | long string with a DTD reference | simply \`<!DOCTYPE html>\` |\n| **Audio / video** | needed Flash or another plugin | native \`<audio>\`, \`<video>\` with \`<source>\` |\n| **Graphics** | plugin or image only | \`<canvas>\` (script-drawn) and inline \`<svg>\` |\n| **Structure** | layout with \`<div class="header">\` | semantic \`<header>\`, \`<nav>\`, \`<section>\`, \`<article>\`, \`<footer>\` |\n| **Forms** | text inputs plus script validation | input types \`email\`, \`number\`, \`range\`, \`date\`, \`color\`; attributes \`required\`, \`pattern\`, \`placeholder\` |\n| **Storage** | cookies only, 4 KB each, sent with every request | \`localStorage\` and \`sessionStorage\`, several MB, not sent to the server |\n| **Offline / APIs** | none | application cache and service workers, drag and drop, geolocation, web sockets |\n| **Error handling** | strict SGML parsing | defined recovery rules, so one bad tag does not break the page |\n\n**Four new elements**\n1. **\`<header>\` / \`<nav>\`** — identify the banner and the navigation block, so a screen reader can jump to the menu.\n2. **\`<article>\` / \`<section>\`** — a self-contained story and a themed block inside it.\n3. **\`<video>\` / \`<audio>\`** — media playback with controls and multiple sources.\n4. **\`<canvas>\`** — a drawable area for charts and games through JavaScript.\n\n**The exam-ready one-liner.** HTML5 is not only new tags; it removes the plugin dependency (video, canvas) and gives the page a standard set of APIs (storage, geolocation, offline).\n\n**Exam line:** short doctype, native media, canvas, semantic tags, richer forms and local storage — that is HTML5.`,
              diagram: `html-vs-html5`,
              diagramCaption:
                `HTML versus HTML5 across doctype, media, graphics, semantic tags, form validation and storage.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Explain the three ways of inserting CSS into an HTML page, and write one example of each selector type — element, class, id and descendant.`,
              explain:
                `**What is being asked.** Inline, internal and external CSS with their trade-offs, plus selector syntax.\n\n**Priority.** Inline beats internal and external; among equal specificity the later rule wins; \`!important\` overrides unless another \`!important\` is later.\n\n**Selectors.** \`p\`, \`.card\`, \`#main\`, \`div p\`, \`a:hover\`, \`input[type=text]\`.\n\n**How to score the 5 marks.** Three insertion methods with a code line each (3) · four selector examples (1) · cascade and specificity sentence (1).`,
              answer:
                `CSS can reach a page in three ways, and the way it is inserted decides reusability and priority.\n\n**1. Inline style** — on one element only, highest priority, worst for maintenance.\n\`\`\`html\n<p style="color:#0047ff; font-size:16px;">Fees paid</p>\n\`\`\`\n\n**2. Internal (embedded) style sheet** — a \`<style>\` block in \`<head>\`, applies to that one page.\n\`\`\`html\n<style>\n  p { color: #0047ff; }\n  .danger { color: #ff5c7a; }\n</style>\n\`\`\`\n\n**3. External style sheet** — one \`.css\` file linked from every page; cached by the browser, so the whole site is restyled by editing one file.\n\`\`\`html\n<link rel="stylesheet" href="css/site.css" />\n\`\`\`\n\n**Selector types**\n\n| Selector | Example | Selects |\n|---|---|---|\n| element | \`p { }\` | every paragraph |\n| class | \`.card { }\` | every element with \`class="card"\` — reusable, many per page |\n| id | \`#main { }\` | the single element with \`id="main"\` — one per page |\n| descendant | \`nav a { }\` | every link inside a nav |\n| attribute | \`input[type="email"] { }\` | inputs of that exact type |\n| pseudo-class | \`a:hover { }\` | a link while the pointer is on it |\n\n**The cascade rule.** When rules clash, the more specific one wins: inline style > id (100) > class and attribute (10) > element (1). If specificity is equal, the rule written later wins, which is why the order of the linked files matters.\n\n**Exam line:** external for the whole site, internal for one page, inline only for a one-off — and specificity decides who wins the clash.`,
              diagram: `css-insertion`,
              diagramCaption:
                `The three ways of inserting CSS into a page — inline, internal and external — with their priority and reuse.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain how a browser fetches and displays a web page — URL, DNS, HTTP request and response, and the role of the web server and browser.`,
              explain:
                `**What is being asked.** The end-to-end journey of one page request.\n\n**The steps.** URL is parsed (scheme, host, port, path, query, fragment) → DNS resolves the host to an IP → TCP connection (and TLS for https) → HTTP request with method, headers → server responds with status code, headers and body → browser parses HTML, fetches CSS/JS/images, builds DOM and CSSOM, renders.\n\n**How to score the 5 marks.** URL parts (1) · DNS and connection (1) · request and response structure (2) · rendering and status codes (1).`,
              answer:
                `A page is not one request; it is one HTML response and then a series of sub-requests for everything the page needs.\n\n**Step 1 — the URL is parsed.**\n\`https://portal.example.com:443/exam/result.php?sem=3#top\`\n\n| Part | Value | Role |\n|---|---|---|\n| scheme | https | the protocol and its default port |\n| host | portal.example.com | which server |\n| port | 443 | which service on that server |\n| path | /exam/result.php | which resource |\n| query | sem=3 | parameters sent to the server |\n| fragment | #top | handled by the browser only, never sent to the server |\n\n**Step 2 — DNS.** The host name is resolved to an IP address; the answer may come from the browser, the OS or a resolver cache, which is why a changed DNS record does not appear instantly.\n\n**Step 3 — connection.** A TCP connection is opened (three-way handshake); for https a TLS handshake follows, which is where the certificate is verified and the keys are agreed.\n\n**Step 4 — request.** The browser sends a request line, headers and optionally a body:\n\`\`\`\nGET /exam/result.php?sem=3 HTTP/1.1\nHost: portal.example.com\nCookie: session=abc123\nAccept: text/html\n\`\`\`\n\n**Step 5 — response.** The server (Apache, Nginx, IIS) runs the script or returns the file, and replies with a status code, headers and the body: \`200 OK\`, \`301 Moved Permanently\`, \`304 Not Modified\` (cached), \`404 Not Found\`, \`500 Internal Server Error\`.\n\n**Step 6 — rendering.** The browser parses HTML into the DOM, CSS into the CSSOM, then runs layout and paint; images and scripts are fetched in parallel, and a synchronous \`<script>\` blocks parsing until it has run.\n\n**Exam line:** URL → DNS → TCP/TLS → request → response → DOM/CSSOM → paint; the HTML is only the first of many requests.`,
              diagram: `internet-www`,
              diagramCaption:
                `How a browser fetches a page — URL parts, DNS lookup, request and response, then DOM, CSSOM and paint.`,
            },
          ],
        },
      ],
    },
    {
      number: 2,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Explain the need for JavaScript in a web page, and compare embedded and external JavaScript with an example of each.`,
              explain:
                `**What is being asked.** Why client-side scripting exists, then the two inclusion methods.\n\n**The need.** HTML is static; JavaScript validates input before it reaches the server, updates the page without a reload, animates, stores data in the browser and talks to APIs.\n\n**Inclusion.** Embedded inside \`<script>\` in the page; external in a \`.js\` file loaded with \`src\`. External is cached and reusable; embedded is quicker for a single line.\n\n**How to score the 5 marks.** Need with two concrete uses (2) · embedded example (1) · external example with its advantages (2).`,
              answer:
                `HTML gives structure and CSS gives presentation; **JavaScript gives behaviour** — it is the only one of the three that can make a decision after the page has loaded.\n\n**Why a page needs it**\n1. **Validation before submission** — an empty name or a badly formed email is caught in the browser, saving a round trip.\n2. **Partial update without reload** — a marks table can be filtered or sorted instantly; a form can submit through fetch and update only one section.\n3. **Interaction and feedback** — menus, tabs, image sliders, showing and hiding a password.\n4. **Browser-side storage and state** — cookies, \`localStorage\`, session data for a shopping cart.\n5. **Talking to the server** — AJAX / fetch calls that read JSON from an API and render it.\n\n**Embedded JavaScript** — written inside the page:\n\`\`\`html\n<script>\n  function greet() {\n    alert('Welcome to the student portal');\n  }\n</script>\n<button onclick="greet()">Greet</button>\n\`\`\`\n\n**External JavaScript** — kept in its own file:\n\`\`\`html\n<script src="js/app.js" defer></script>\n\`\`\`\n\`\`\`js\n// js/app.js\ndocument.addEventListener('DOMContentLoaded', () => {\n  document.querySelector('#greet').addEventListener('click', greet);\n});\n\`\`\`\n\n| Point | Embedded | External |\n|---|---|---|\n| Reuse | one page only | shared by every page |\n| Caching | re-downloaded with the HTML | cached after the first load |\n| Maintenance | mixed with markup | separated, testable, lintable |\n| Security policy | inline scripts need \`unsafe-inline\` | allowed under a strict CSP |\n\n**The \`defer\` note.** A script in \`<head>\` runs before the body exists; \`defer\` waits for parsing to finish, which is why external scripts are usually loaded with it.\n\n**Exam line:** HTML is structure, CSS is style, JavaScript is behaviour — external files for the site, embedded only for a quick one-off.`,
              diagram: `js-inclusion`,
              diagramCaption:
                `Embedded versus external JavaScript — how each is included in the page and what it costs.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain variables and data types in JavaScript. Write a short script that shows the difference between \`var\`, \`let\` and \`const\`, and between \`==\` and \`===\`.`,
              explain:
                `**What is being asked.** Declaration keywords, the primitive types, and the type-comparison trap.\n\n**Types.** string, number, boolean, undefined, null, bigint, symbol, and object (arrays and functions are objects).\n\n**Declarations.** \`var\` is function-scoped and hoisted with \`undefined\`; \`let\` is block-scoped; \`const\` is block-scoped and cannot be reassigned but its object contents can change.\n\n**Coercion.** \`==\` converts types before comparing; \`===\` compares type and value.\n\n**How to score the 5 marks.** Types (1) · var/let/const with scope and hoisting (2) · == vs === with output (1) · one pitfall (1).`,
              answer:
                `JavaScript is **dynamically typed**: a variable has no declared type, the value carries it, and \`typeof\` reports it.\n\n**The primitive types**\n\n| Type | Example | Note |\n|---|---|---|\n| string | \`'Pune'\` | single, double or backtick quotes |\n| number | \`42\`, \`3.14\`, \`NaN\` | one numeric type for integers and decimals |\n| boolean | \`true\`, \`false\` | result of comparisons |\n| undefined | \`let x;\` | declared but not assigned |\n| null | \`let y = null;\` | assigned deliberately as empty |\n| bigint | \`10n\` | integers beyond 2^53 |\n| object | \`{ name: 'Riya' }\`, \`[1, 2]\` | arrays, functions and dates are objects too |\n\n**var, let and const**\n\`\`\`js\nfunction demo() {\n  var a = 1;      // function scoped, hoisted as undefined\n  let b = 2;      // block scoped\n  const c = 3;    // block scoped, cannot be reassigned\n\n  if (true) {\n    var a = 10;   // same variable — changes the outer a\n    let b = 20;   // a new block variable, outer b unchanged\n    // c = 30;    // TypeError: assignment to constant\n  }\n\n  console.log(a, b, c);   // 10 2 3\n}\n\`\`\`\n\n**The comparison trap**\n\`\`\`js\nconsole.log(5 == '5');    // true  — string is converted to number\nconsole.log(5 === '5');   // false — different types\nconsole.log(0 == false);  // true  — both convert to 0\nconsole.log(0 === false); // false\nconsole.log(null == undefined);   // true\nconsole.log(null === undefined);  // false\n\`\`\`\n\n**The rules to remember**\n1. \`var\` is hoisted and initialised to \`undefined\`, so using it before its line gives \`undefined\` and not an error — a silent bug.\n2. \`let\` and \`const\` are hoisted but stay in the **temporal dead zone**, so using them early throws a \`ReferenceError\`.\n3. \`const\` prevents reassignment of the binding, not mutation: \`const arr = []; arr.push(1);\` is legal.\n4. Always compare with \`===\` unless type coercion is genuinely wanted; \`'' == 0\` is \`true\` and has broken more than one validation rule.\n\n**Exam line:** the value carries the type, \`var\` leaks out of blocks, \`let\` and \`const\` do not, and \`===\` compares type before value.`,
              diagram: `js-types`,
              diagramCaption:
                `JavaScript data types, the scope of var, let and const, and the difference between == and ===.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Explain the control structures of JavaScript — \`if…else if…else\`, the ternary operator and \`switch…case\` — with one example each.`,
              explain:
                `**What is being asked.** Selection statements: the two-way and multi-way branch, the shorthand, and the switch with its \`break\` trap.\n\n**Points to make.** Conditions are truthy/falsy, not strictly boolean; \`switch\` uses \`===\` internally; a missing \`break\` falls through; a ternary is an expression, not a statement.\n\n**How to score the 5 marks.** if/else example (1) · switch example with break and default (2) · ternary (1) · fall-through warning (1).`,
              answer:
                `JavaScript has three ways to choose a path: a condition, a shorthand condition, and a multi-way switch.\n\n**1. if…else if…else** — for a range check with several bands.\n\`\`\`js\nlet marks = 72;\nlet grade;\n\nif (marks >= 75) {\n  grade = 'Distinction';\n} else if (marks >= 60) {\n  grade = 'First class';\n} else if (marks >= 40) {\n  grade = 'Pass';\n} else {\n  grade = 'Fail';\n}\nconsole.log(grade);      // First class\n\`\`\`\n\n**2. Ternary operator** — a one-line choice, useful inside a template.\n\`\`\`js\nlet result = marks >= 40 ? 'Pass' : 'Fail';\nconsole.log(\`\${result} — \${marks} marks\`);   // Pass — 72 marks\n\`\`\`\n\n**3. switch…case** — for one value against a list of exact matches.\n\`\`\`js\nlet day = 3;\nswitch (day) {\n  case 1:\n    console.log('Monday');\n    break;\n  case 3:\n    console.log('Wednesday');\n    break;                 // without this, case 4 also runs\n  case 4:\n    console.log('Thursday');\n    break;\n  default:\n    console.log('Other day');\n}\n\`\`\`\n\n**What the examiner wants stated**\n- **Truthiness** — \`0\`, \`''\`, \`null\`, \`undefined\`, \`NaN\` and \`false\` are falsy; everything else, including \`'0'\` and \`[]\`, is truthy.\n- **switch uses strict comparison** — \`switch('3')\` will not match \`case 3:\`.\n- **Fall-through** — a missing \`break\` runs the next case as well; it is occasionally useful for grouping cases, otherwise it is a bug.\n- **Ternary limits** — nested ternaries are legal but unreadable; use \`if\` when more than two outcomes exist.\n\n**Exam line:** if…else for ranges, switch for exact matches with a \`break\`, and the ternary for one-line choices — truthiness decides every test.`,
              diagram: `js-control`,
              diagramCaption:
                `JavaScript control structures — if…else bands, the ternary shorthand and switch…case with break and default.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain \`for\`, \`while\` and \`do…while\` loops in JavaScript with one example each, and state when each should be preferred.`,
              explain:
                `**What is being asked.** Three loop forms, the pre-test versus post-test difference, and a selection rule.\n\n**The forms.** \`for\` when the count is known; \`while\` when the end condition is only known at run time; \`do…while\` when the body must run at least once.\n\n**Traps.** Off-by-one, an infinite loop where the counter is never updated, \`let\` in a \`for\` creating a per-iteration binding.\n\n**How to score the 5 marks.** Three examples with output (3) · pre-test vs post-test (1) · when to prefer each (1).`,
              answer:
                `All three loops repeat a block; they differ in **where the condition is tested** and therefore in how many times the body can run.\n\n**1. for** — the count is known in advance.\n\`\`\`js\nlet total = 0;\nfor (let i = 1; i <= 5; i++) {\n  total += i;\n}\nconsole.log(total);   // 15\n\`\`\`\n\n**2. while** — the number of turns is not known; test before each pass.\n\`\`\`js\nlet balance = 5000;\nlet months = 0;\nwhile (balance > 0) {\n  balance -= 1200;      // monthly withdrawal\n  months++;\n}\nconsole.log(months);    // 5  (5000 → 3800 → 2600 → 1400 → 200 → -1000)\n\`\`\`\n\n**3. do…while** — the body runs at least once, because the test comes after.\n\`\`\`js\nlet pin;\ndo {\n  pin = prompt('Enter a 4-digit PIN');\n} while (!/^\\d{4}$/.test(pin));\nconsole.log('PIN accepted');\n\`\`\`\n\n| Loop | Test | Minimum runs | Best for |\n|---|---|---|---|\n| \`for\` | before | 0 | a known count — array index, table rows |\n| \`while\` | before | 0 | an unknown count — read until done |\n| \`do…while\` | after | 1 | validate input, then re-ask |\n\n**The differences that earn marks**\n1. **Pre-test vs post-test** — \`while\` may run zero times, \`do…while\` always runs once; that single difference is the whole exam point.\n2. **Counter placement** — in \`while\` the increment lives inside the body, so forgetting it gives an infinite loop; in \`for\` the three parts sit in one header.\n3. **Scoping** — \`for (let i …)\` creates a fresh \`i\` per iteration, which is why closures inside the loop capture the right value; \`var\` shares one variable across all iterations.\n4. **Breaking out** — \`break\` exits the loop, \`continue\` skips to the next iteration; both work in all three forms.\n\n**Exam line:** for a known count use \`for\`, for an unknown count use \`while\`, and when the body must run at least once use \`do…while\`.`,
              diagram: `js-loops`,
              diagramCaption:
                `for, while and do…while loops — where the condition is tested and how many times the body can run.`,
            },
          ],
        },
      ],
    },
    {
      number: 3,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Explain how a PHP page is requested and executed — the role of the web server, the PHP engine and the browser — and how PHP differs from client-side JavaScript.`,
              explain:
                `**What is being asked.** The server-side execution cycle, and the difference from client-side code.\n\n**The cycle.** Browser requests \`page.php\` → the web server sees the \`.php\` extension and hands it to the PHP engine → the engine parses, executes, and produces HTML → the server returns plain HTML → the browser never sees the PHP source.\n\n**The contrast.** PHP runs on the server before the page exists; JavaScript runs in the browser after it arrives.\n\n**How to score the 5 marks.** The six-step cycle (2) · the HTML-only output point (1) · a comparison of PHP and JavaScript (2).`,
              answer:
                `PHP is executed on the server, and the browser receives only the HTML that PHP produced.\n\n**The request cycle**\n1. The user opens \`http://localhost/result.php?sem=3\`.\n2. The web server (Apache or Nginx) sees the \`.php\` extension and does **not** send the file; it passes the request to the PHP engine through FastCGI or \`mod_php\`.\n3. The PHP engine parses the file, executes every \`<?php … ?>\` block, and reads \`$_GET\` for the query string.\n4. The output of \`echo\` and any HTML outside the PHP tags become the response body.\n5. The server returns that body with \`Content-Type: text/html\`.\n6. The browser renders the HTML and runs any JavaScript in it.\n\n\`\`\`php\n<?php\n  $sem = (int) ($_GET['sem'] ?? 1);\n  $marks = [1 => 512, 2 => 486, 3 => 501];\n  echo "<h2>Semester $sem result</h2>";\n  echo "<p>Total: " . ($marks[$sem] ?? 'not published') . "</p>";\n?>\n\`\`\`\n\n**View source proves the point.** The browser shows only \`<h2>Semester 3 result</h2>\` — never the array or the logic.\n\n| Point | PHP | JavaScript |\n|---|---|---|\n| Runs on | the web server | the user's browser |\n| Timing | before the page is sent | after the page has loaded |\n| Source visible | no | yes — anyone can read it |\n| Can open a database | yes, on the server | no, it must call an API |\n| Use for | login, sessions, SQL, files | validation, interaction, UI |\n\n**The security consequence.** Because PHP sees the request before anything is rendered, it is the right place for authentication and SQL; because JavaScript can be read and disabled, it can never be the only validation.\n\n**Exam line:** the server hands \`.php\` to the engine, the engine returns plain HTML, and the browser never sees a line of PHP.`,
              diagram: `php-request-flow`,
              diagramCaption:
                `The PHP request cycle — web server, PHP engine, generated HTML and the browser that never sees the source.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain PHP variables — naming rules, scope, and the superglobals \`$_GET\`, \`$_POST\`, \`$_SESSION\` and \`$_SERVER\` — with one example each.`,
              explain:
                `**What is being asked.** How a PHP variable is declared and where it is visible, then the superglobals an exam answer must name.\n\n**Rules.** A \`$\` prefix, a letter or underscore first, case-sensitive, no declaration needed, loosely typed.\n\n**Scope.** local, global, \`static\`; \`$GLOBALS\` or the \`global\` keyword inside a function.\n\n**Superglobals.** \`$_GET\`, \`$_POST\`, \`$_REQUEST\`, \`$_SESSION\`, \`$_COOKIE\`, \`$_FILES\`, \`$_SERVER\`, \`$_ENV\`.\n\n**How to score the 5 marks.** Rules and types (1) · scope with an example (2) · four superglobals with use (2).`,
              answer:
                `A PHP variable begins with \`$\` and takes its type from the value assigned to it.\n\n**Naming and typing rules**\n1. Starts with a letter or underscore, then letters, digits or underscores — \`$total_marks\`, \`$sem3\`.\n2. **Case-sensitive**: \`$marks\` and \`$Marks\` are different variables, though function names are not.\n3. No declaration and no type keyword; PHP is loosely typed, and \`var_dump()\` shows the type.\n4. Values: string, int, float, bool, array, object, null.\n\n\`\`\`php\n$name = 'Riya';\n$sem = 3;\n$fees = 42500.50;\n$paid = true;\necho gettype($sem);        // integer\necho gettype($fees);       // double\n\`\`\`\n\n**Scope.** A variable created in the main script is not visible inside a function unless it is passed in or declared \`global\`; a \`static\` local keeps its value between calls.\n\`\`\`php\n$rate = 0.05;\nfunction tax($amount) {\n  global $rate;            // or pass it as a parameter\n  return $amount * $rate;\n}\necho tax(1000);            // 50\n\`\`\`\n\n**The superglobals**\n\n| Superglobal | Holds | Example |\n|---|---|---|\n| \`$_GET\` | query-string values | \`result.php?sem=3\` → \`$_GET['sem']\` |\n| \`$_POST\` | form body values | \`$_POST['email']\` after a method="post" form |\n| \`$_SESSION\` | per-visitor data stored on the server | \`$_SESSION['user_id'] = 7;\` |\n| \`$_SERVER\` | server and request information | \`$_SERVER['REQUEST_METHOD']\`, \`['REMOTE_ADDR']\` |\n| \`$_COOKIE\` | cookies sent by the browser | \`$_COOKIE['theme']\` |\n| \`$_FILES\` | uploaded files | \`$_FILES['resume']['name']\` |\n\n**The habit that keeps the answer safe.** Always check and cast: \`$sem = (int) ($_GET['sem'] ?? 0);\` and \`htmlspecialchars($_POST['name'])\` before echoing, because every superglobal is user-controlled input.\n\n**Exam line:** \`$\` prefix, no declared type, three scopes — and the superglobals are how the request, the session and the server reach the script.`,
              diagram: `php-variables`,
              diagramCaption:
                `PHP variables — naming rules, local/global/static scope and the superglobals that carry request data.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Explain the categories of PHP operators with examples, and state the difference between \`==\` and \`===\`, and between \`and\` and \`&&\`.`,
              explain:
                `**What is being asked.** The operator families plus the two classic PHP traps.\n\n**Families.** arithmetic, assignment, comparison, increment/decrement, logical, string, array, ternary/null-coalescing.\n\n**Traps.** \`==\` compares after type juggling (\`'1' == '01'\` is true in PHP 7), \`===\` compares type and value; \`and\` has lower precedence than \`=\`, so \`$a = true and false\` assigns \`true\`.\n\n**How to score the 5 marks.** Operator table (2) · == vs === with output (1.5) · and vs && with the assignment trap (1.5).`,
              answer:
                `PHP groups its operators by what they do, and two of the groups hold the traps that exams love.\n\n| Group | Operators | Example | Result |\n|---|---|---|---|\n| Arithmetic | \`+ - * / % **\` | \`7 % 2\` | \`1\` |\n| Assignment | \`= += -= *= /= .=\` | \`$s = 'a'; $s .= 'b';\` | \`'ab'\` |\n| Comparison | \`== === != <> !== < > <= >= <=>\` | \`3 <=> 5\` | \`-1\` |\n| Increment | \`++ --\` | \`$i++\` vs \`++$i\` | post vs pre |\n| Logical | \`&& || ! and or xor\` | \`$a && $b\` | boolean |\n| String | \`.\` and \`.=\` | \`'Sem' . ' 3'\` | \`'Sem 3'\` |\n| Ternary / null-coalescing | \`?: ??\` | \`$x ?? 'default'\` | fallback if null |\n\n**\`==\` versus \`===\`**\n\`\`\`php\nvar_dump(5 == '5');    // bool(true)   — string cast to number\nvar_dump(5 === '5');   // bool(false)  — integer vs string\nvar_dump(0 == '');     // bool(true) before PHP 8 — the classic login bug\nvar_dump(null == false);  // bool(true)\n\`\`\`\nUse \`===\` for every comparison where the type matters, and always for \`strpos()\`, because \`strpos('abc', 'a')\` returns \`0\`, which \`==\` treats as false.\n\n**\`and\` versus \`&&\`** — same meaning, different precedence: \`&&\` binds tighter than \`=\`, \`and\` binds looser.\n\`\`\`php\n$a = true and false;\nvar_dump($a);          // bool(true)  — ($a = true) and false\n\n$b = true && false;\nvar_dump($b);          // bool(false) — $b = (true && false)\n\`\`\`\nSo \`$ok = $x > 0 and $y > 0;\` is a bug; write \`&&\` or add brackets.\n\n**Exam line:** \`===\` compares type before value, and \`and\` loses to \`=\`, so always bracket a logical assignment.`,
              diagram: `php-operators`,
              diagramCaption:
                `PHP operator groups with examples, plus the == versus === and and versus && traps.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain six PHP string functions with one example each, and describe how \`printf\`/\`sprintf\` formatting differs from \`echo\`.`,
              explain:
                `**What is being asked.** The string library the syllabus lists, with output, plus formatted output.\n\n**Functions.** \`strlen\`, \`strpos\`, \`substr\`, \`str_replace\`, \`strtolower\`/\`strtoupper\`, \`trim\`, \`explode\`/\`implode\`, \`str_pad\`, \`ucwords\`, \`str_contains\`.\n\n**Formatting.** \`printf\` prints with placeholders (\`%s\`, \`%d\`, \`%0.2f\`, \`%05d\`), \`sprintf\` returns the string, \`number_format\` adds thousands separators and decimals.\n\n**How to score the 5 marks.** Six functions with output (3) · printf/sprintf placeholders (1) · number_format or a currency example (1).`,
              answer:
                `String handling is the most used part of PHP, and the exam answer needs the function, the call and the printed result.\n\n| Function | Purpose | Example | Output |\n|---|---|---|---|\n| \`strlen()\` | number of bytes | \`strlen('Riya')\` | \`4\` |\n| \`strpos()\` | first position, \`false\` if absent | \`strpos('MCA sem 3', 'sem')\` | \`4\` |\n| \`substr()\` | extract a part | \`substr('MCA2026', 0, 3)\` | \`'MCA'\` |\n| \`str_replace()\` | replace every occurrence | \`str_replace('3', 'III', 'Sem 3')\` | \`'Sem III'\` |\n| \`trim()\` | strip spaces at both ends | \`trim('  MCA  ')\` | \`'MCA'\` |\n| \`explode()\` / \`implode()\` | string ↔ array | \`explode(',', 'a,b,c')\` | \`['a','b','c']\` |\n| \`str_pad()\` | pad to a width | \`str_pad('7', 3, '0', STR_PAD_LEFT)\` | \`'007'\` |\n| \`str_contains()\` | substring test (PHP 8) | \`str_contains('result.php', 'php')\` | \`true\` |\n\n**Formatted output** — \`echo\` prints values as they are; \`printf\` and \`sprintf\` place them into a template.\n\`\`\`php\n$name = 'Riya';\n$marks = 486;\n$percent = 97.2;\n\necho $name . ' scored ' . $marks . ' (' . $percent . '%)';\nprintf('%s scored %d marks (%.2f%%)', $name, $marks, $percent);\nprintf('Roll no: %05d', 42);          // Roll no: 00042\necho number_format(1250000.5, 2);     // 1,250,000.50\n\n$line = sprintf('%-10s|%6.2f', 'Riya', $percent);   // returns, does not print\necho $line;                            // Riya      | 97.20\n\`\`\`\n\n| Specifier | Meaning |\n|---|---|\n| \`%s\` | string |\n| \`%d\` | integer |\n| \`%f\` / \`%.2f\` | float / two decimals |\n| \`%05d\` | integer padded to 5 digits with zeros |\n| \`%-10s\` | string left-aligned in 10 characters |\n\n**The practical rule.** Use \`sprintf\` when the string must be built and stored (a voucher line, an invoice row) and \`printf\` when it is printed at once; use \`number_format\` for money rather than padding it by hand.\n\n**Exam line:** six functions with their output, then \`printf\` for printing and \`sprintf\` for building — the format specifiers do the alignment.`,
              diagram: `php-string-functions`,
              diagramCaption:
                `PHP string functions with their output, and printf/sprintf formatting compared with plain echo.`,
            },
          ],
        },
      ],
    },
    {
      number: 4,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Explain the ASP.NET framework — its position in .NET, the role of the CLR and the difference between ASP.NET and classic ASP.`,
              explain:
                `**What is being asked.** What ASP.NET is built on, what executes the code, and why it replaced classic ASP.\n\n**The stack.** .NET Framework / .NET, the CLR, the BCL, and ASP.NET as the web part; ASP.NET Web Forms, MVC and Web API as the models.\n\n**CLR.** Compiles IL with a JIT, manages memory and garbage collection, enforces type safety, provides security and exception handling.\n\n**Classic ASP vs ASP.NET.** Interpreted VBScript vs compiled managed code; inline spaghetti vs code-behind; no server controls vs a control tree and view state; limited state management vs session, application, view state.\n\n**How to score the 5 marks.** Where ASP.NET sits in .NET (1.5) · CLR responsibilities (1.5) · classic ASP vs ASP.NET comparison (2).`,
              answer:
                `ASP.NET is the **web application part of the .NET platform** — a framework for building pages that are compiled, managed and stateful in a controlled way.\n\n**Where it sits**\n\`\`\`\nYour .NET application (ASP.NET web app)\n        ↓ uses\nBase Class Library  (System.Web, System.Data, System.IO …)\n        ↓ runs on\nCLR — Common Language Runtime\n        ↓ on top of\nOperating system + IIS (the web server)\n\`\`\`\n\n**What the CLR does**\n1. **Compiles** the source to CIL (MSIL), then JIT-compiles the IL to machine code on first use.\n2. **Manages memory** — allocates objects on the managed heap and frees them with the garbage collector.\n3. **Enforces type safety** and verifies IL, which blocks many buffer and cast errors.\n4. **Handles exceptions**, threads and security (code access and role-based).\n\n**ASP.NET versus classic ASP**\n\n| Point | Classic ASP | ASP.NET |\n|---|---|---|\n| Language | VBScript or JScript, interpreted | any .NET language (C#, VB.NET), compiled |\n| Code model | inline in the \`.asp\` page | code-behind class, separated from markup |\n| Controls | raw HTML plus manual handling | server controls with events and a control tree |\n| State | session and application only | view state, session, application, cookies, cache |\n| Validation | hand-written script | validation controls (\`RequiredFieldValidator\`) |\n| Performance | script parsed on each request | compiled once, then served from cache |\n\n**Why it mattered.** Classic ASP mixed markup with logic on every line, so a page could not be tested or reused. ASP.NET introduced the event model — a button click arrives as an event, is raised on the server, and the page rebuilds itself from view state — which is what makes Web Forms feel like a desktop form.\n\n**Exam line:** ASP.NET is the web face of .NET, the CLR compiles and manages it, and the event model plus code-behind is what classic ASP never had.`,
              diagram: `wt4-intro`,
              diagramCaption:
                `ASP.NET inside the .NET stack — CLR, base class library and IIS — compared with classic ASP.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain the ASP.NET page life cycle — name the stages in order and state what happens in \`Page_Init\`, \`Page_Load\` and \`Page_PreRender\`.`,
              explain:
                `**What is being asked.** The ordered event sequence of a single page request.\n\n**The stages.** Page request → start → initialization → load view state → load postback data → page load → validation → postback event handling → pre-render → save view state → render → unload.\n\n**The three named stages.** \`Init\` builds the control tree and is before view state; \`Load\` runs on every request and is where data is bound with \`IsPostBack\` checks; \`PreRender\` is the last chance to change control properties before view state and HTML are produced.\n\n**How to score the 5 marks.** The ordered list (3) · the three named events with their use (2).`,
              answer:
                `A page is created, filled, rendered and destroyed on every request, and the life cycle fixes the order in which your code may run.\n\n**The stages in order**\n1. **Page request** — the page is requested; ASP.NET checks the output cache and starts the page tree.\n2. **Start** — \`PreInit\`: the page is created, theme and master page are decided, and \`IsPostBack\` is set.\n3. **Initialization** — \`Init\`, \`InitComplete\`: the control tree is built and unique IDs are assigned.\n4. **Load view state** — the \`__VIEWSTATE\` field is decoded and restored into the controls.\n5. **Load postback data** — form values are applied to the controls that implement \`IPostBackDataHandler\`.\n6. **Page load** — \`Page_Load\`: your code runs, with \`if (!IsPostBack)\` guarding first-time binding.\n7. **Validation** — validators run and \`IsValid\` is set.\n8. **Postback event handling** — the click or change event that caused the postback is raised.\n9. **Pre-render** — \`PreRender\`, \`PreRenderComplete\`: last chance to change control properties and data source.\n10. **Save view state** and **Render** — view state is serialised, then the control tree writes HTML.\n11. **Unload** — the page is disposed; response and logging work only.\n\n**The three named events**\n\n| Event | What it does | Use it for |\n|---|---|---|\n| \`Page_Init\` | creates the controls and assigns IDs; view state is **not** loaded yet | dynamically creating controls that must survive postback |\n| \`Page_Load\` | runs on every request, after view state and postback data are restored | filling a grid, reading a query string, with \`if (!IsPostBack)\` |\n| \`Page_PreRender\` | last stage before view state is saved and HTML is rendered | changing a label, enabling or hiding a control |\n\n\`\`\`csharp\nprotected void Page_Load(object sender, EventArgs e)\n{\n    if (!IsPostBack)\n    {\n        ddlCourse.DataSource = GetCourses();   // bind only on the first visit\n        ddlCourse.DataBind();\n    }\n}\n\nprotected void Page_PreRender(object sender, EventArgs e)\n{\n    lblTotal.Text = "Marks: " + CalculateTotal();  // final value in the last stage\n}\n\`\`\`\n\n**Why the order matters.** A control created after the view state stage will not have its posted value; a value set in \`Page_Load\` on a postback will overwrite the user's choice unless \`IsPostBack\` is checked. Almost every Web Forms bug is a life cycle bug in disguise.\n\n**Exam line:** init builds the tree, load restores and binds, pre-render is the last edit — and view state is restored before load and saved after pre-render.`,
              diagram: `wt4-lifecycle`,
              diagramCaption:
                `The ASP.NET page life cycle — every stage from page request to unload, with the events that run in each.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Explain the types of ASP.NET server controls — HTML controls, HTML server controls, web server controls and validation controls — with one example of each.`,
              explain:
                `**What is being asked.** The control families and how they differ in what they render and when they run on the server.\n\n**Families.** HTML controls (client-only), HTML server controls (\`runat="server"\` with \`HtmlControls\`), web server controls (\`asp:\` prefix, richer, render different HTML for different browsers), validation and data controls.\n\n**How to score the 5 marks.** Four families with an example (3) · rendered HTML and view state differences (2).`,
              answer:
                `Server controls are the ASP.NET objects that write HTML at render time; the families differ in who owns the behaviour.\n\n| Family | Prefix / form | Example | Rendered as |\n|---|---|---|---|\n| **HTML controls** | plain tags, no \`runat\` | \`<input type="text" name="city">\` | itself — the server never sees it |\n| **HTML server controls** | \`runat="server"\` | \`<input type="text" id="city" runat="server" />\` | the same tag, but accessible as \`HtmlInputText\` |\n| **Web server controls** | \`asp:\` prefix | \`<asp:TextBox ID="txtCity" runat="server" />\` | HTML chosen for the browser, plus view state |\n| **Validation controls** | \`asp:\` validators | \`<asp:RequiredFieldValidator ControlToValidate="txtCity" … />\` | client script plus server-side re-check |\n| **Data controls** | \`asp:\` data-bound | \`<asp:GridView … />\` | a full table with paging and sorting |\n\n**The differences that matter**\n1. **Behaviour** — a plain HTML control is invisible to server code; add \`runat="server"\` and the same control gains an ID, properties and events.\n2. **Abstraction** — \`<asp:TextBox TextMode="Password" />\` may render as \`<input type="password">\`; the control adapts to the browser and to the theme.\n3. **State** — web server controls participate in view state; plain HTML controls do not.\n4. **Validation** — validation controls emit client script and repeat the check on the server, so a disabled script cannot bypass it.\n\n\`\`\`aspx\n<asp:TextBox ID="txtEmail" runat="server" />\n<asp:RequiredFieldValidator ID="rfvEmail" runat="server"\n     ControlToValidate="txtEmail" Text="*"\n     ErrorMessage="Email is required" />\n<asp:RegularExpressionValidator ID="revEmail" runat="server"\n     ControlToValidate="txtEmail"\n     ValidationExpression="^[^@]+@[^@]+\\.[a-z]{2,}$"\n     ErrorMessage="Invalid email" />\n\`\`\`\n\n**Exam line:** plain HTML is client-only, \`runat="server"\` promotes it, \`asp:\` controls add events and view state, and validators check on both sides.`,
              diagram: `wt4-controls`,
              diagramCaption:
                `The ASP.NET server control families — HTML, HTML server, web server, validation and data controls.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain ASP.NET state management. Compare client-side and server-side techniques, and state which technique suits which kind of data.`,
              explain:
                `**What is being asked.** HTTP is stateless, so state must be carried somewhere; the answer is where.\n\n**Client-side.** View state, hidden fields, cookies, query string, control state.\n**Server-side.** Session, application, cache, profile, database.\n\n**Trade-offs.** Client-side loads the network and can be tampered with; server-side is secure but costs memory and needs a session store that suits a farm.\n\n**How to score the 5 marks.** Why state management is needed (1) · client-side techniques (1.5) · server-side techniques (1.5) · selection rule (1).`,
              answer:
                `HTTP is **stateless** — every request arrives as if it were the first — so a page that must remember the cart, the login or the wizard step has to store state at one of two places.\n\n**Client-side state** — stored in the page or in the browser, so it travels with the request.\n\n| Technique | Where it lives | Lifetime | Note |\n|---|---|---|---|\n| View state | hidden \`__VIEWSTATE\` field in the page | one page | automatic; large controls make pages heavy |\n| Hidden field | \`<input type="hidden">\` | one page | only for non-sensitive values |\n| Cookie | the browser, per site | set by \`Expires\` | 4 KB limit, sent with every request |\n| Query string | the URL | the link | visible, bookmarkable, never for passwords |\n| Control state | hidden field | one page | survives even if view state is off (GridView paging) |\n\n**Server-side state** — kept on the server, with only an ID in the browser.\n\n| Technique | Scope | Lifetime |\n|---|---|---|\n| Session | one user | timeout (20 minutes by default) |\n| Application | all users | until the app is restarted |\n| Cache | all users, removable | minutes, or until memory pressure |\n| Profile / database | one user | permanent |\n\n**How to choose**\n1. **Small, per-page, UI state** (which tab is open, a grid sort) → **view state**.\n2. **Small, non-sensitive, user preference** (theme, language) → **cookie**.\n3. **A shareable filter** (the search terms) → **query string**.\n4. **Login identity, cart, permissions** → **session**, never view state or a cookie, because the client can read and edit both.\n5. **Site-wide counters and reference data** → **application state or cache**.\n6. **Anything that must outlive a restart** → **database**.\n\n**The farm problem.** Session state in memory dies with the process and is not shared between servers; in a web farm it must move to \`StateServer\` or \`SQLServer\` mode, or be replaced with a database or a distributed cache.\n\n**Exam line:** view state for the page, cookie for a preference, session for the user, cache for the site — and never trust the client with anything that matters.`,
              diagram: `wt4-state`,
              diagramCaption:
                `ASP.NET state management — client-side techniques compared with server-side session, application and cache.`,
            },
          ],
        },
      ],
    },
    {
      number: 5,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 5 + (b) 5 · OR (c) 5 + (d) 5`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 5,
              label: `a`,
              question:
                `Explain JavaScript frameworks — why they appeared, what a single-page application is, and how Angular, React and Vue differ in approach.`,
              explain:
                `**What is being asked.** The problem a framework solves, then a comparison of the three best-known ones.\n\n**Why.** Manual DOM updates on a large app become slow and error-prone; a framework adds routing, data binding, components, dependency injection, tooling, testing and a conventional structure.\n\n**SPA.** One HTML page; navigation happens in the browser; data arrives as JSON from APIs; the server serves static files.\n\n**Differences.** Angular is a full, opinionated framework with TypeScript and two-way binding; React is a library for the view with one-way data flow and JSX; Vue is progressive and adopts incrementally.\n\n**How to score the 5 marks.** Why frameworks appeared (1.5) · SPA explained with its trade-offs (1.5) · three-way comparison (2).`,
              answer:
                `A JavaScript framework exists to stop a large application from becoming a pile of hand-written DOM updates.\n\n**Why they appeared**\n1. **DOM updates are manual and error-prone** — in plain JavaScript every change is \`getElementById\` plus \`innerHTML\`, and the code that changes the data is far from the code that shows it.\n2. **Repeated work** — routing, form binding, validation, HTTP calls and templating were rewritten in every project.\n3. **Testability and structure** — a framework fixes where components, services and routes live, which makes teams interchangeable.\n4. **Tooling** — build, bundling, hot reload, linting and testing come with the framework.\n\n**Single-page application (SPA).** The server sends one HTML shell; the framework takes over the URL, renders views on the client and fetches JSON in the background. The page never reloads, so transitions are instant — but the first load is heavier, SEO needs care, and the browser back button must be handled by the router.\n\n| Point | Angular | React | Vue |\n|---|---|---|---|\n| Kind | full framework | view library + ecosystem | progressive framework |\n| Language | TypeScript first | JavaScript / JSX | JavaScript / SFC |\n| Data flow | two-way binding with \`[(ngModel)]\` | one-way props, state up by callbacks | two-way with \`v-model\` |\n| Structure | modules, components, services, DI | components and hooks | components, optional router and store |\n| Learning curve | steep, many concepts | moderate | gentle, adoptable piece by piece |\n\n**The exam-ready distinction.** Angular gives you a complete opinionated structure; React gives you the view layer and lets the team choose the rest; Vue lets you add a component to an existing page and grow from there.\n\n**Exam line:** frameworks arrived to manage the DOM, an SPA keeps the page and swaps the view, and Angular is a framework, React a library, Vue a middle path.`,
              diagram: `wt5-frameworks`,
              diagramCaption:
                `Why JavaScript frameworks exist, what a single-page application is, and how Angular, React and Vue differ.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain the architecture of AngularJS — the role of \`ng-app\`, modules, controllers, \`$scope\` and the digest cycle.`,
              explain:
                `**What must be covered.** AngularJS (1.x) works by extending HTML and by watching the model.\n\n**The parts.** \`ng-app\` bootstraps; a module is the container; a controller wires the view; \`$scope\` is the glue; expressions and directives are the markup side; the digest loop notices changes.\n\n**The flow.** Browser loads the page → Angular finds \`ng-app\` → loads the module → compiles the DOM → links directives to scope → \`$digest\` compares watches and re-renders.\n\n**How to score the 5 marks.** Architecture layers (2) · bootstrap flow (1.5) · digest cycle explained (1.5).`,
              answer:
                `AngularJS is a client-side framework that makes the browser understand new attributes and keeps the view in step with the model.\n\n**The architecture**\n\`\`\`\nindex.html  →  ng-app="studentApp"        (bootstrap)\n                    ↓\n              angular.module('studentApp', [])\n                    ↓\n        controllers · services · directives · filters\n                    ↓\n                 $scope  ←→  view (expressions, ng-model)\n                    ↑\n              $digest loop (watchers)\n\`\`\`\n\n| Part | Role |\n|---|---|\n| \`ng-app\` | marks the root element; AngularJS bootstraps itself on \`DOMContentLoaded\` |\n| module | the container that holds controllers, services, directives and config |\n| controller | a function that sets up the initial model on \`$scope\` |\n| \`$scope\` | the object binding the controller to the view; a child scope is created per controller |\n| directive | extends HTML — \`ng-repeat\`, \`ng-if\`, \`ng-click\`, or a custom element |\n| expression | \`{{ }}\` binding, evaluated without \`eval\` and forgiving of \`undefined\` |\n| service | shared logic and data, injected by name |\n\n**A minimal application**\n\`\`\`html\n<div ng-app="studentApp" ng-controller="ResultCtrl">\n  <input ng-model="marks" type="number" />\n  <p ng-if="marks >= 40">Pass with {{ marks }} marks</p>\n  <ul><li ng-repeat="s in subjects">{{ s }}</li></ul>\n</div>\n<script>\n  angular.module('studentApp', [])\n    .controller('ResultCtrl', function ($scope) {\n      $scope.marks = 72;\n      $scope.subjects = ['WT', 'DS', 'STQA'];\n    });\n</script>\n\`\`\`\n\n**The digest cycle.** Every binding registers a **watcher**. After any event — a click, an input, an HTTP response — AngularJS runs \`$digest\`, which evaluates every watcher and compares the new value with the old; if something changed, it runs again, up to ten times (\`TTL\`). If a watcher keeps changing its own value, the loop throws \`$rootScope:infdig\` — the famous "10 $digest() iterations reached" error.\n\n**Why \`$apply\` matters.** A change made outside AngularJS (a \`setTimeout\`, a jQuery plugin) does not trigger a digest; wrapping it in \`$scope.$apply()\` puts it back inside the loop.\n\n**Exam line:** \`ng-app\` bootstraps, the module holds the parts, \`$scope\` glues controller to view, and \`$digest\` keeps comparing watchers until nothing changes.`,
              diagram: `wt5-overview`,
              diagramCaption:
                `AngularJS architecture — ng-app bootstrap, module, controller, $scope and the digest cycle.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 5,
              label: `c`,
              question:
                `Explain the features of AngularJS that make it useful for a single-page application, and state two limitations.`,
              explain:
                `**What is being asked.** The feature list with a purpose for each, plus honest limitations.\n\n**Features.** Two-way data binding, directives, MVC/MVVM, templates, dependency injection, routing (\`ngRoute\`), filters, services and \`$http\`, form validation, testability.\n\n**Limitations.** Digest performance with a very large number of watchers, steep learning, and the fact that AngularJS 1.x is end-of-life.\n\n**How to score the 5 marks.** Five features with purpose (3) · two limitations (1) · one line on why it suited SPAs (1).`,
              answer:
                `AngularJS brought a full application structure into the browser, which is exactly what a single-page application needs.\n\n| Feature | What it gives |\n|---|---|\n| **Two-way data binding** | \`ng-model\` writes the view into the model and the model back into the view — no manual DOM sync. |\n| **Directives** | new HTML vocabulary: \`ng-repeat\`, \`ng-if\`, \`ng-show\`, \`ng-class\`, plus custom elements. |\n| **MVC / MVVM** | the model, the view and the controller are separate, so the logic is testable. |\n| **Templates** | HTML with \`{{ }}\` expressions, compiled by the browser. |\n| **Dependency injection** | services are declared by name and supplied by the injector, which makes mocking trivial. |\n| **Routing** | \`ngRoute\` or \`ui-router\` swaps a view on URL change without a page reload. |\n| **Filters** | format data in the template: \`{{ price \\| currency }}\`, \`{{ name \\| uppercase }}\`, \`orderBy\`. |\n| **\`$http\` / services** | a promise-based HTTP layer shared through injection. |\n| **Form validation** | \`required\`, \`ng-minlength\`, \`ng-pattern\`, with \`form.$valid\` bound into the view. |\n\n**Why it suited SPAs.** A single page must update many parts of one screen as data arrives; two-way binding plus \`ng-repeat\` meant that a JSON response could be painted with no DOM code at all.\n\n**Two limitations**\n1. **Digest performance** — every binding is a watcher, and a few thousand of them make each digest slow on a low-end device.\n2. **Complexity and version risk** — directives, scopes, modules, DI and \`$apply\` are a lot to learn, and AngularJS 1.x reached end of support in January 2022; new projects use Angular (2+), React or Vue.\n\n**Exam line:** binding, directives, DI, routing and filters made the SPA possible — and thousands of watchers are what made it slow.`,
              diagram: `wt5-features`,
              diagramCaption:
                `AngularJS features that suit a single-page application, with the two limitations that followed them.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain AngularJS expressions and directives. Write an example using \`ng-app\`, \`ng-model\`, \`ng-repeat\`, \`ng-if\` and \`ng-click\`, and explain the difference between \`ng-if\` and \`ng-show\`.`,
              explain:
                `**What is being asked.** The markup side of AngularJS: expressions, built-in directives, and the show/hide distinction.\n\n**Expressions.** \`{{ }}\` inside the view, no control flow, forgiving, evaluated against \`$scope\`.\n\n**Directives.** \`ng-app\`, \`ng-init\`, \`ng-model\`, \`ng-repeat\`, \`ng-if\`, \`ng-show\`, \`ng-hide\`, \`ng-class\`, \`ng-click\`, \`ng-src\`.\n\n**\`ng-if\` vs \`ng-show\`.** \`ng-if\` removes the element from the DOM and destroys the scope; \`ng-show\` keeps it and toggles CSS \`display\`. \`ng-if\` costs more to toggle, but does not keep hidden DOM or watchers.\n\n**How to score the 5 marks.** Expression rules (1) · a working example with the five directives (2.5) · \`ng-if\` vs \`ng-show\` (1.5).`,
              answer:
                `Expressions bind data into the view; directives teach HTML new behaviour. Together they are the AngularJS template language.\n\n**Expressions** — \`{{ marks / 2 }}\`, \`{{ student.name | uppercase }}\`\n1. Written inside \`{{ }}\` in HTML, evaluated against \`$scope\`.\n2. No loops, no \`if\`, no declarations — logic belongs in the controller.\n3. Forgiving: an undefined property renders as nothing instead of throwing.\n4. Filterable: \`{{ date | date:'dd-MM-yyyy' }}\`.\n\n**A working example**\n\`\`\`html\n<div ng-app="app" ng-controller="ListCtrl">\n  <input ng-model="name" placeholder="Subject name" />\n  <button ng-click="add()">Add</button>\n\n  <ul>\n    <li ng-repeat="s in subjects track by $index">\n      {{ $index + 1 }}. {{ s }}\n    </li>\n  </ul>\n\n  <p ng-if="subjects.length === 0">No subjects yet.</p>\n  <p ng-show="name.length > 0">Typing: {{ name }}</p>\n</div>\n<script>\n  angular.module('app', [])\n    .controller('ListCtrl', function ($scope) {\n      $scope.name = '';\n      $scope.subjects = ['WT', 'DS'];\n      $scope.add = function () {\n        if ($scope.name) { $scope.subjects.push($scope.name); $scope.name = ''; }\n      };\n    });\n</script>\n\`\`\`\n\n| Directive | Purpose |\n|---|---|\n| \`ng-app\` | bootstraps AngularJS on this subtree |\n| \`ng-model\` | two-way binding of a form control to a scope property |\n| \`ng-repeat\` | renders the template once per item |\n| \`ng-if\` | adds or removes the element from the DOM |\n| \`ng-click\` | binds a click to a scope function |\n\n**\`ng-if\` versus \`ng-show\`**\n\n| Point | \`ng-if\` | \`ng-show\` |\n|---|---|---|\n| DOM | element removed and re-created | element stays, \`display:none\` applied |\n| Scope | child scope destroyed when false | scope kept alive |\n| Cost | expensive to toggle often | cheap toggle, but hidden watchers remain |\n| Use | a block that rarely comes back, heavy content | a small panel toggled frequently |\n\n**Exam line:** expressions are read-only bindings, directives add behaviour — and \`ng-if\` removes from the DOM while \`ng-show\` only hides.`,
              diagram: `wt5-expressions`,
              diagramCaption:
                `AngularJS expressions and directives, with ng-if and ng-show compared on DOM and scope behaviour.`,
            },
          ],
        },
      ],
    },
  ],
};
