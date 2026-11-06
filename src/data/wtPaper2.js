// Web Technology Paper 2 — Model Paper (6 + 4 division)
//
// Topic map (all different from Papers 1, 3 and 4):
//   Unit 1 — 1.4 website planning and design issues, 1.3 web servers (Apache vs IIS),
//            1.16 XML introduction (features, applications), 1.17 XML elements, attributes and tree
//   Unit 2 — 2.6 functions and page redirect, 2.8 events and event handling,
//            2.12 arrays, 2.7 cookies in JavaScript
//   Unit 3 — 3.16 PHP form handling and validation, 3.14 cookies and sessions in PHP,
//            3.8 arrays (indexed, associative), 3.10 array library functions
//   Unit 4 — 4.7 view state, 4.8 session and application state,
//            4.11 ADO.NET architecture, 4.12 database connectivity
//   Unit 5 — 5.5 MVC architecture in AngularJS, 5.8 modules and controllers,
//            5.11 Next.js introduction, 5.12 Next.js features and rendering modes

export const wtPaper2 = {
  id: `wt-paper-2`,
  number: 2,
  name: `Paper 2`,
  tag: `Web Technology`,
  session: `Model Paper · 6 + 4 division`,
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
    `Every question carries 10 marks, divided as (a) 6 marks + (b) 4 marks.`,
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
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain the stages of website planning and the design issues a developer must decide before writing any page.`,
              explain:
                `**What is being asked.** Planning is a process with stages, and design issues are the decisions taken inside them.\n\n**The stages.** Purpose and audience → information architecture (sitemap) → content inventory → page layout and wireframe → navigation design → visual design (colour, type, grid) → technology choice → testing and launch → maintenance.\n\n**The design issues.** Audience and devices, navigation consistency, page weight, accessibility, SEO, browser compatibility, resolution and responsive behaviour, maintainability of templates.\n\n**How to score the 6 marks.** Stages in order (3) · design issues with a decision each (2) · one line on why planning reduces rework (1).`,
              answer:
                `A website is planned before it is coded, because a change of purpose after fifty pages have been written is a rewrite.\n\n**The stages**\n1. **Purpose and audience** — what the site must achieve and for whom: students checking results, parents paying fees, staff entering marks.\n2. **Information architecture** — the sitemap: which sections exist, how deep they nest, what the home page links to.\n3. **Content inventory** — every page, form, document and image, with an owner and a review date.\n4. **Wireframe and layout** — grey-box sketches of each template: header, navigation, content column, footer.\n5. **Navigation design** — a consistent global menu, breadcrumbs, search, and a rule that no page is more than three clicks from home.\n6. **Visual design** — grid, colour palette, typography scale and imagery, applied through one stylesheet.\n7. **Technology choice** — static HTML, PHP, ASP.NET, or a framework; the database; the hosting.\n8. **Testing and launch** — links, forms, validation, accessibility, browsers, mobile, then go live.\n9. **Maintenance** — who updates content, how backups run, how analytics are read.\n\n**The design issues and the decision each forces**\n\n| Issue | Decision |\n|---|---|\n| **Audience and devices** | which screen sizes to support; whether a responsive grid is mandatory |\n| **Navigation** | one global menu on every page; the labels users already know |\n| **Page weight** | images compressed and lazy-loaded; a budget of a few hundred KB per page |\n| **Accessibility** | alt text, labels on inputs, contrast ratio, keyboard order |\n| **SEO** | one \`<h1>\` per page, title and meta description, clean URLs, canonical links |\n| **Compatibility** | which browsers and versions; whether polyfills are allowed |\n| **Maintainability** | one template and one stylesheet, not fifty copies |\n| **Security** | HTTPS, validation on the server, no secrets in the page |\n\n**Why planning pays.** Each stage is cheap to change on paper and expensive to change in code: moving a section in a sitemap takes a minute, moving it after launch breaks bookmarks, analytics and search rankings.\n\n**Exam line:** purpose, sitemap, content, wireframe, navigation, visual design, technology, testing, maintenance — and every design issue is a decision, not an opinion.`,
              diagram: `website-planning`,
              diagramCaption:
                `The stages of website planning and the design issues decided within them, from purpose to maintenance.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Compare Apache and IIS as web servers on at least five points, and state what the server does when it receives a request for a \`.php\` page.`,
              explain:
                `**What is being asked.** A short comparison plus the extension-to-handler behaviour.\n\n**Points.** Platform, configuration style, module model, language integration, market share, licensing.\n\n**The \`.php\` request.** The server matches the extension to a handler, passes the request to the PHP engine, receives the output and returns it.\n\n**How to score the 4 marks.** Five comparison points (3) · the handler behaviour (1).`,
              answer:
                `Both servers listen on a port, resolve a path to a resource and return a response — they differ in platform and configuration.\n\n| Point | Apache | IIS |\n|---|---|---|\n| Platform | Linux, Windows, macOS | Windows |\n| Configuration | text files (\`httpd.conf\`, \`.htaccess\`) | GUI (IIS Manager) plus \`web.config\` |\n| Modules | \`mod_php\`, \`mod_rewrite\`, \`mod_ssl\` loaded dynamically | native modules and handlers, FastCGI for PHP |\n| Language fit | PHP first | ASP.NET first |\n| Per-directory config | \`.htaccess\`, no restart needed | \`web.config\`, inheritable |\n| Licensing | open source (Apache 2.0) | bundled with Windows Server |\n\n**When a \`.php\` page is requested.** Apache or IIS reads the extension, finds the handler registered for \`.php\`, and hands the file to the **PHP engine** over FastCGI (or \`mod_php\`); the engine executes the script, returns the generated HTML, and the server sends that with a \`200 OK\`. The \`.php\` source is never sent to the browser.\n\n**Exam line:** Apache is file-configured and PHP-native, IIS is Windows-configured and ASP.NET-native, and both hand \`.php\` to the engine rather than serving it.`,
              diagram: `web-server`,
              diagramCaption:
                `Apache and IIS compared, and how a web server passes a .php request to the PHP engine.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Explain XML — its features, its applications, and the difference between a well-formed and a valid document.`,
              explain:
                `**What is being asked.** What XML is for, why it is used, and the two levels of correctness.\n\n**Features.** Self-describing tags, case-sensitive, strict nesting, one root, extensible vocabulary, text-based and Unicode, separates data from presentation, platform independent.\n\n**Applications.** Configuration files, data exchange between systems, web services (SOAP), RSS feeds, Office and SVG formats, Android layouts.\n\n**Well-formed vs valid.** Well-formed follows the syntax; valid additionally conforms to a DTD or XSD.\n\n**How to score the 6 marks.** Features (2) · applications (2) · well-formed vs valid with an example (2).`,
              answer:
                `XML is a **meta-language**: it does not define any tags of its own, it defines the rules by which you invent yours.\n\n**Features**\n1. **Self-describing** — \`<student><name>Riya</name></student>\` needs no documentation to read.\n2. **Extensible** — the vocabulary is chosen by the author, so one format fits any domain.\n3. **Strict syntax** — tags are case-sensitive, every element must close, nesting must be proper, and exactly one root element exists.\n4. **Data separated from presentation** — shape is described in XSLT or CSS, not in the data file.\n5. **Text based and Unicode** — human-readable in an editor and portable between systems.\n6. **Validatable** — a DTD or XSD can define the allowed structure and types.\n7. **Platform and language independent** — the same file is read by Java, .NET, PHP and Python.\n\n**Applications**\n\n| Use | Example |\n|---|---|\n| configuration | \`<appSettings>\` in \`.config\`, Android \`AndroidManifest.xml\` |\n| data exchange | a nightly invoice file between two companies |\n| web services | SOAP envelopes, WSDL descriptions |\n| syndication | RSS and Atom feeds |\n| document formats | DOCX, XLSX, SVG, ODF are ZIPs of XML parts |\n| build and tooling | \`pom.xml\` for Maven, layout files in Android |\n\n**Well-formed versus valid**\n\`\`\`xml\n<?xml version="1.0" encoding="UTF-8"?>\n<students>\n  <student id="1">\n    <name>Riya</name>\n    <sem>3</sem>\n  </student>\n  <student id="2">\n    <name>Arjun</name>\n    <sem>3</sem>\n  </student>\n</students>\n\`\`\`\n- **Well-formed** = obeys the syntax: one root, closed tags, quoted attributes, correct nesting, case matching.\n- **Valid** = well-formed **and** matches a DTD or XSD: it may only contain the elements and attributes the schema allows, in the order and with the types it declares.\n\nA document can therefore be well-formed and still invalid — for example a \`<sem>\` holding the word \`three\` when the schema declares an integer. The reverse is impossible: an invalid document that is well-formed is common, a valid document that is not well-formed cannot exist.\n\n**Exam line:** XML is a rulebook for inventing tags — well-formed obeys the syntax, valid also obeys the schema.`,
              diagram: `html-vs-xml`,
              diagramCaption:
                `XML features and applications, with well-formed and valid documents compared against HTML.`,
            },
            {
              marks: 4,
              label: `d`,
              question:
                `Explain XML elements, attributes and the XML tree with a small example, and state two rules for attributes.`,
              explain:
                `**What is being asked.** The components of an XML document and the tree the parser builds.\n\n**Components.** Prolog, root element, child elements, attributes, text, comments, CDATA, entities.\n\n**Attributes rules.** Quoted, unique per element, no duplicate names, cannot hold structure — use a child element for that.\n\n**How to score the 4 marks.** Element/attribute definitions with an example (2) · the tree (1) · two attribute rules (1).`,
              answer:
                `An XML document is a tree of elements, each of which may carry attributes and text.\n\n\`\`\`xml\n<?xml version="1.0"?>\n<college name="Fergusson">\n  <department code="MCA">\n    <student id="S01">\n      <name>Riya Sharma</name>\n      <sem>3</sem>\n    </student>\n    <student id="S02">\n      <name>Arjun Patil</name>\n      <sem>3</sem>\n    </student>\n  </department>\n</college>\n\`\`\`\n\n**The tree**\n\`\`\`\ncollege (@name)\n└── department (@code)\n    ├── student (@id)\n    │   ├── name → "Riya Sharma"\n    │   └── sem  → "3"\n    └── student (@id)\n        ├── name → "Arjun Patil"\n        └── sem  → "3"\n\`\`\`\n\n**Elements versus attributes**\n\n| Element | Attribute |\n|---|---|\n| a node with children and text | a name–value pair on a tag |\n| can repeat at the same level | cannot repeat on one element |\n| holds structure | holds metadata about the element |\n| \`<name>Riya</name>\` | \`<student id="S01">\` |\n\n**Rules for attributes**\n1. Every value must be **quoted**, single or double, and the element may not contain two attributes with the same name.\n2. Use an attribute for metadata that is short and never repeated (an ID, a unit, a code); use a child element when the value could have structure or may repeat — because an attribute cannot hold an element.\n\n**Exam line:** elements nest into a tree, attributes describe the element, and anything that repeats or needs structure must be a child element.`,
              diagram: `xml-tree`,
              diagramCaption:
                `Elements and attributes in XML, and the tree a parser builds from a small student document.`,
            },
          ],
        },
      ],
    },
    {
      number: 2,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain JavaScript functions — declaration, parameters, return values, scope and callbacks — and write a function that validates an email and redirects the page on success.`,
              explain:
                `**What is being asked.** The function as the unit of reuse, then the three dialog boxes and a redirect, because the syllabus pairs them.\n\n**Parts.** Declaration vs expression, parameters and default values, \`return\`, \`undefined\` when nothing returns, local vs global scope, closures briefly, callbacks and arrow functions.\n\n**Dialogs and redirect.** \`alert\`, \`confirm\` (returns boolean), \`prompt\` (returns string or null), \`window.location.href\` to redirect.\n\n**How to score the 6 marks.** Declaration, parameters and return (2) · scope and hoisting (1.5) · callback/arrow (1) · the validation and redirect example (1.5).`,
              answer:
                `A function is a named block that takes input through parameters, does one job and returns a value.\n\n**The forms**\n\`\`\`js\n// declaration — hoisted, can be called before its line\nfunction tax(amount, rate = 0.05) {\n  return amount * rate;\n}\n\n// expression — assigned to a variable, not hoisted\nconst gst = function (amount) { return amount * 0.18; };\n\n// arrow — shortest form, no own \`this\`\nconst total = (a, b) => a + b;\n\`\`\`\n\n**Parameters and return**\n1. Parameters are positional; a missing argument becomes \`undefined\`, extra arguments are ignored (or collected with \`...rest\`).\n2. A default value is applied only when the argument is \`undefined\`.\n3. \`return\` ends the function immediately; a function with no \`return\` gives \`undefined\`, which is why \`parseInt\` results must be checked.\n4. Objects and arrays are passed **by reference**, primitives by value — a function can therefore modify the caller's array without returning it.\n\n**Scope**\n\`\`\`js\nlet site = 'portal';          // module/global\nfunction check() {\n  let pin = 1234;             // local to check\n  if (true) { let msg = 'ok'; }   // block scoped\n  return pin;\n}\n// console.log(pin);          // ReferenceError\n\`\`\`\nA nested function keeps access to its parent's variables even after the parent returns — that is a **closure**, and it is how event handlers remember their state.\n\n**Callbacks**\n\`\`\`js\n[10, 20, 30].forEach(function (m, i) {\n  console.log('Mark ' + (i + 1) + ': ' + m);\n});\nsetTimeout(() => console.log('after 1s'), 1000);   // the function runs later\n\`\`\`\n\n**Worked example — validate and redirect**\n\`\`\`js\nfunction submitEmail() {\n  const email = document.getElementById('email').value.trim();\n  const pattern = /^[^@\\s]+@[^@\\s]+\\.[a-z]{2,}$/i;\n\n  if (email === '') {\n    alert('Email is required');\n    return false;\n  }\n  if (!pattern.test(email)) {\n    alert('Enter a valid email, for example riya@example.com');\n    return false;\n  }\n  if (!confirm('Send the result to ' + email + '?')) {\n    return false;\n  }\n  window.location.href = 'thankyou.html?email=' + encodeURIComponent(email);\n  return false;    // stop the form from posting normally\n}\n\`\`\`\n\n**Exam line:** a function takes parameters, returns one value, keeps its own scope, and can be passed around as a callback — the redirect is \`window.location.href\`.`,
              diagram: `js-function-dialog`,
              diagramCaption:
                `JavaScript functions — declaration, parameters, return, scope, callbacks — with the dialog boxes and a redirect.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain event handling in JavaScript — the three ways of attaching a handler, the event object, and event bubbling with \`stopPropagation()\`.`,
              explain:
                `**What is being asked.** How the browser tells code that something happened.\n\n**Three ways.** HTML attribute (\`onclick="..."\`), DOM property (\`el.onclick = fn\`), \`addEventListener\` (several handlers, capture option).\n\n**The event object.** \`type\`, \`target\` vs \`currentTarget\`, \`preventDefault()\`, \`stopPropagation()\`, key and mouse properties.\n\n**Bubbling.** The event travels from the target up to the document, which is what event delegation exploits.\n\n**How to score the 4 marks.** Three attachment methods with the preferred one (2) · event object members (1) · bubbling and stopPropagation with delegation (1).`,
              answer:
                `An event is the browser's notification that something happened — a click, a key, a submit, a load.\n\n**Three ways to attach a handler**\n\`\`\`html\n<!-- 1. HTML attribute — quick, but mixes markup and logic -->\n<button onclick="save()">Save</button>\n\n<script>\n  const btn = document.getElementById('save');\n\n  // 2. DOM property — one handler only, the second overwrites the first\n  btn.onclick = function () { console.log('saved'); };\n\n  // 3. addEventListener — several handlers, with options\n  btn.addEventListener('click', handleSave);\n  btn.addEventListener('click', logClick, { once: true });\n</script>\n\`\`\`\n\n| Method | Several handlers | Runs again for dynamic elements | Preferred |\n|---|---|---|---|\n| HTML attribute | no | yes | only for a demo |\n| DOM property | no — overwritten | no | simple cases |\n| \`addEventListener\` | yes | with delegation | always |\n\n**The event object**\n\`\`\`js\ndocument.getElementById('marks').addEventListener('input', (e) => {\n  console.log(e.type);                   // 'input'\n  console.log(e.target.value);            // what the user typed\n  if (Number(e.target.value) > 100) {\n    e.preventDefault();                   // block the default behaviour\n    e.stopPropagation();                  // stop the event travelling up\n  }\n});\n\`\`\`\n\n**Bubbling.** A click on a \`<button>\` inside a \`<div>\` fires on the button first, then on the div, then on \`document\`. That is bubbling — and it makes **event delegation** possible: one listener on the table handles every row, including rows added later.\n\`\`\`js\ndocument.querySelector('#resultTable').addEventListener('click', (e) => {\n  if (e.target.matches('button.del')) {\n    e.target.closest('tr').remove();\n  }\n});\n\`\`\`\n\n**Exam line:** prefer \`addEventListener\`, read the event object for \`target\` and \`value\`, and remember that the event bubbles — which is delegation, unless \`stopPropagation()\` stops it.`,
              diagram: `js-events`,
              diagramCaption:
                `JavaScript event handling — the three attachment methods, the event object, bubbling and delegation.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Explain JavaScript arrays — creation, \`length\`, and the methods \`push\`, \`pop\`, \`shift\`, \`unshift\`, \`splice\`, \`slice\`, \`map\`, \`filter\`, \`reduce\` and \`sort\` — with output.`,
              explain:
                `**What is being asked.** The array as the main data structure of client-side code, with the methods and their return values.\n\n**Points.** Arrays are objects with numeric keys; \`length\` is writable; mutating versus non-mutating methods; \`sort\` is lexicographic by default; \`map\`/\`filter\`/\`reduce\` return new values.\n\n**How to score the 6 marks.** Creation and length (1) · stack/queue methods with output (2) · splice vs slice (1.5) · map/filter/reduce with output (1.5).`,
              answer:
                `An array is an ordered list; in JavaScript it is an object with numeric indices and a live \`length\`.\n\n\`\`\`js\nlet marks = [72, 65, 88];\nconsole.log(marks.length);        // 3\nconsole.log(marks[0], marks[2]);  // 72 88\nmarks[3] = 91;                    // grows the array\nconsole.log(marks.length);        // 4\n\`\`\`\n\n**Adding and removing at the ends**\n\n| Method | Action | Returns |\n|---|---|---|\n| \`push(x)\` | add to the end | new length |\n| \`pop()\` | remove from the end | the removed item |\n| \`unshift(x)\` | add to the front | new length |\n| \`shift()\` | remove from the front | the removed item |\n\n\`\`\`js\nlet q = ['WT', 'DS'];\nq.push('PHP');        // ['WT','DS','PHP']\nq.unshift('STQA');    // ['STQA','WT','DS','PHP']\nconsole.log(q.pop()); // 'PHP'\nconsole.log(q.shift());// 'STQA'  → ['WT','DS']\n\`\`\`\n\n**splice versus slice** — the classic pair.\n\`\`\`js\nlet a = [10, 20, 30, 40, 50];\nconsole.log(a.slice(1, 3));      // [20, 30]  — copy, original unchanged\na.splice(1, 2, 99);              // remove 2 from index 1, insert 99\nconsole.log(a);                  // [10, 99, 40, 50] — original changed\n\`\`\`\n\n**The iteration trio**\n\`\`\`js\nlet marks = [72, 65, 88, 41];\n\nconsole.log(marks.map((m) => m + 5));       // [77, 70, 93, 46]\nconsole.log(marks.filter((m) => m >= 60));  // [72, 65, 88]\nconsole.log(marks.reduce((sum, m) => sum + m, 0));  // 266\nconsole.log(marks.reduce((max, m) => (m > max ? m : max), 0));  // 88\n\`\`\`\n\n**sort — and why it surprises**\n\`\`\`js\nlet n = [10, 9, 100, 1];\nconsole.log(n.sort());                  // [1, 10, 100, 9]  — lexicographic!\nconsole.log(n.sort((x, y) => x - y));   // [1, 9, 10, 100] — numeric\n\`\`\`\n\`sort\` converts every element to a string unless a comparator is given, and it mutates the array in place.\n\n**The distinction to state.** \`push\`, \`pop\`, \`shift\`, \`unshift\`, \`splice\`, \`sort\` and \`reverse\` **mutate**; \`slice\`, \`map\`, \`filter\`, \`reduce\`, \`concat\` and \`join\` return a new value and leave the original alone — which matters when two parts of the page share the same array.\n\n**Exam line:** push/pop work at the end, shift/unshift at the front, splice mutates and slice copies, and map/filter/reduce build the answer without touching the original.`,
              diagram: `js-array`,
              diagramCaption:
                `JavaScript array methods — push, pop, shift, unshift, splice, slice, map, filter, reduce and sort with output.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain cookies in JavaScript — how to create, read and delete one, and why \`HttpOnly\` and \`Secure\` flags matter.`,
              explain:
                `**What is being asked.** The cookie as a small piece of client-side state.\n\n**Writing.** \`document.cookie = "theme=dark; expires=...; path=/; SameSite=Lax"\`.\n\n**Reading.** \`document.cookie\` returns all cookies for the path as one \`; \`-separated string, which must be split and searched.\n\n**Deleting.** Set the same name with an expiry in the past.\n\n**Flags.** \`HttpOnly\` blocks JavaScript access (XSS protection); \`Secure\` sends it only over HTTPS; \`SameSite\` blocks cross-site sending (CSRF).\n\n**How to score the 4 marks.** Create and read with code (2) · delete (1) · the flags and the reason (1).`,
              answer:
                `A cookie is a small name–value string (about 4 KB) that the browser stores per site and sends back with every matching request.\n\n**Create**\n\`\`\`js\ndocument.cookie = 'theme=dark; max-age=' + 60 * 60 * 24 * 30 + '; path=/; SameSite=Lax';\n\`\`\`\nThe first pair is the data; everything after a semicolon is an **attribute** — expiry (\`expires\` date or \`max-age\` seconds), \`path\`, \`domain\`, \`Secure\`, \`SameSite\`.\n\n**Read** — \`document.cookie\` gives one long string, not an object.\n\`\`\`js\nfunction getCookie(name) {\n  const parts = document.cookie.split(';');\n  for (const part of parts) {\n    const [k, ...v] = part.trim().split('=');\n    if (k === name) return decodeURIComponent(v.join('='));\n  }\n  return null;\n}\nconsole.log(getCookie('theme'));   // 'dark'\n\`\`\`\n\n**Delete** — set the same name, path and domain with an expiry in the past.\n\`\`\`js\ndocument.cookie = 'theme=; max-age=0; path=/';\n\`\`\`\n\n**Why the flags matter**\n\n| Attribute | Effect |\n|---|---|\n| \`HttpOnly\` | the cookie is **not** visible to JavaScript, so an injected script cannot steal the session |\n| \`Secure\` | sent only over HTTPS, never in clear text |\n| \`SameSite=Lax\` / \`Strict\` | not sent on cross-site requests, which blocks CSRF |\n| \`max-age\` | a session cookie disappears when the browser closes; an expiry keeps it |\n\n**The rule to state.** A cookie set by JavaScript cannot be \`HttpOnly\`, so a session ID must be set by the server with that flag and never stored through \`document.cookie\`. Cookies are also sent with every request to the path, which is why they are for small identifiers, not for data.\n\n**Exam line:** write with \`document.cookie\`, parse the string to read, expire it to delete — and keep the session cookie \`HttpOnly\`, \`Secure\` and \`SameSite\`.`,
              diagram: `cookies`,
              diagramCaption:
                `JavaScript cookies — creating, reading and deleting one, with the HttpOnly, Secure and SameSite flags.`,
            },
          ],
        },
      ],
    },
    {
      number: 3,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain PHP form handling with \`GET\` and \`POST\` — write a form, read the values, validate them on the server, and state which method suits which case.`,
              explain:
                `**What is being asked.** The full path from an HTML form to a validated PHP script.\n\n**The pieces.** \`action\` and \`method\`, \`name\` attributes, \`$_GET\` vs \`$_POST\`, \`$_SERVER['REQUEST_METHOD']\`, validation with \`filter_var\`, \`htmlspecialchars\` on output, and re-displaying the form with errors.\n\n**GET vs POST.** GET puts data in the URL (visible, bookmarkable, length-limited, cacheable); POST puts it in the body (not visible, no length limit, not cached, needed for any change or secret).\n\n**How to score the 6 marks.** A working form and script (2.5) · validation of two fields with error display (2) · GET vs POST comparison (1.5).`,
              answer:
                `A form is HTML; handling it is PHP. The \`name\` attribute on each control becomes the key in \`$_GET\` or \`$_POST\`.\n\n**The form**\n\`\`\`html\n<form action="register.php" method="post" novalidate>\n  <label>Name <input type="text" name="name" value="<?= htmlspecialchars($old['name'] ?? '') ?>"></label>\n  <label>Email <input type="text" name="email" value="<?= htmlspecialchars($old['email'] ?? '') ?>"></label>\n  <label>Semester\n    <select name="sem">\n      <option value="1">1</option><option value="2">2</option><option value="3">3</option>\n    </select>\n  </label>\n  <button type="submit">Register</button>\n</form>\n\`\`\`\n\n**The handler**\n\`\`\`php\n<?php\n$errors = [];\n$old = $_POST;\n\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $name  = trim($_POST['name']  ?? '');\n    $email = trim($_POST['email'] ?? '');\n    $sem   = (int) ($_POST['sem'] ?? 0);\n\n    if ($name === '')                                  $errors[] = 'Name is required.';\n    if (!filter_var($email, FILTER_VALIDATE_EMAIL))    $errors[] = 'Enter a valid email.';\n    if ($sem < 1 || $sem > 6)                          $errors[] = 'Semester must be 1 to 6.';\n\n    if (!$errors) {\n        // insert into the database, then redirect (POST/Redirect/GET)\n        header('Location: welcome.php?name=' . urlencode($name));\n        exit;\n    }\n}\n?>\n<?php foreach ($errors as $e): ?>\n  <p class="error"><?= htmlspecialchars($e) ?></p>\n<?php endforeach; ?>\n\`\`\`\n\n**The four rules of a safe handler**\n1. **Check the method** — run the processing only when \`REQUEST_METHOD\` is \`POST\`.\n2. **Validate every field** on the server: type, length, range, format (\`filter_var\`), and never trust the browser's JavaScript.\n3. **Escape on output** with \`htmlspecialchars()\` — validation stops bad data entering, escaping stops bad data executing.\n4. **Redirect after a successful POST** so a refresh does not resubmit the form.\n\n**GET versus POST**\n\n| Point | GET | POST |\n|---|---|---|\n| Data location | the query string | the request body |\n| Visible / bookmarkable | yes | no |\n| Length limit | a few thousand characters | effectively unlimited |\n| Cached / in history | yes | no |\n| Idempotent | yes — safe to repeat | no — repeating may create a duplicate |\n| Use for | search, filters, page links | login, registration, payment, any write |\n\n**Exam line:** \`name\` becomes the key, validate on the server with \`filter_var\`, escape with \`htmlspecialchars\` — GET for reading, POST for changing.`,
              diagram: `php-form-flow`,
              diagramCaption:
                `PHP form handling — the form, the POST handler, server-side validation and the GET versus POST choice.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Compare cookies and sessions in PHP, and write the code to set, read and destroy a session variable.`,
              explain:
                `**What is being asked.** Where the data lives, then the three session operations.\n\n**Comparison.** Cookie stores on the client (4 KB, visible, editable); session stores on the server with only an ID in a cookie.\n\n**Code.** \`session_start()\`, \`$_SESSION['user_id'] = 7\`, read, \`session_unset()\`, \`session_destroy()\`.\n\n**How to score the 4 marks.** Comparison table (2) · session code with the destroy sequence (2).`,
              answer:
                `Both remember a user between requests; they differ in **where the data is kept**.\n\n| Point | Cookie | Session |\n|---|---|---|\n| Storage | the user's browser | the server (\`/tmp\` or a configured path) |\n| Data visible to the user | yes — readable and editable | no — only a session ID is exposed |\n| Size | about 4 KB | limited by server memory and \`max_execution_time\`, not by 4 KB |\n| Lifetime | set by \`expires\` / \`max-age\` | until the browser closes or the timeout expires |\n| Security | must be signed; never for secrets | safer, but the ID must be protected |\n| Typical use | theme, language, remember-me | login identity, cart, permissions |\n\n**The session code**\n\`\`\`php\n<?php\nsession_start();                       // must be the first output\n\n$_SESSION['user_id']  = 7;             // set\n$_SESSION['username'] = 'riya';\n\necho $_SESSION['username'] ?? 'guest'; // read\n\nif (isset($_SESSION['user_id'])) {\n    // authenticated area\n}\n\nsession_unset();                       // clear the variables\nsession_destroy();                     // destroy the session data\nsetcookie(session_name(), '', time() - 3600, '/');  // also drop the ID cookie\n?>\n\`\`\`\n\n**Why the last line is needed.** \`session_destroy()\` removes the server-side data but leaves the cookie holding the old ID in the browser; deleting the cookie too is what a proper logout does.\n\n**The rules.** Call \`session_start()\` before any HTML output (else \`headers already sent\`), regenerate the ID on login with \`session_regenerate_id(true)\` to stop session fixation, and keep the session cookie \`HttpOnly\` and \`Secure\`.\n\n**Exam line:** a cookie lives in the browser and a session on the server — start, set, unset, destroy, and delete the ID cookie as well.`,
              diagram: `php-session`,
              diagramCaption:
                `PHP cookies versus sessions, with the code to start, read, unset and destroy a session.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Explain PHP arrays — indexed, associative and multidimensional — with creation, access, iteration and one worked example of each.`,
              explain:
                `**What is being asked.** The three array shapes and how each is read.\n\n**Indexed.** Numeric keys from 0, \`[]\` append, \`count\`, \`for\` or \`foreach\`.\n\n**Associative.** String keys, \`=>\`, \`foreach ($a as $k => $v)\`.\n\n**Multidimensional.** Arrays inside arrays; a marks table is the standard example.\n\n**How to score the 6 marks.** Indexed with iteration (1.5) · associative (1.5) · multidimensional with a nested loop and a total (2) · \`print_r\`/\`count\` remarks (1).`,
              answer:
                `A PHP array is an ordered map — every value has a key, and the key may be an integer or a string.\n\n**1. Indexed array** — keys 0, 1, 2 …\n\`\`\`php\n$subjects = ['WT', 'DS', 'PHP'];\n$subjects[] = 'STQA';                 // append → index 3\n\necho count($subjects);                // 4\necho $subjects[1];                    // DS\n\nfor ($i = 0; $i < count($subjects); $i++) {\n    echo ($i + 1) . '. ' . $subjects[$i] . "\\n";\n}\nforeach ($subjects as $s) { echo $s . ' '; }\n\`\`\`\n\n**2. Associative array** — named keys.\n\`\`\`php\n$student = [\n    'name' => 'Riya Sharma',\n    'sem'  => 3,\n    'marks' => 486,\n];\n\necho $student['name'];                // Riya Sharma\n$student['marks'] += 14;              // 500\n\nforeach ($student as $key => $value) {\n    echo ucfirst($key) . ': ' . $value . "\\n";\n}\n\`\`\`\n\n**3. Multidimensional array** — a table of rows, each row itself an associative array.\n\`\`\`php\n$results = [\n    ['name' => 'Riya',  'marks' => [72, 65, 88]],\n    ['name' => 'Arjun', 'marks' => [58, 61, 70]],\n];\n\nforeach ($results as $row) {\n    $total = array_sum($row['marks']);\n    $avg   = round($total / count($row['marks']), 2);\n    printf("%-6s total %3d  average %5.2f\\n", $row['name'], $total, $avg);\n}\n// Riya   total 225  average 75.00\n// Arjun  total 189  average 63.00\n\n// direct access: second student, first mark\necho $results[1]['marks'][0];          // 58\n\`\`\`\n\n**The methods to remember**\n\n| Need | Function |\n|---|---|\n| number of elements | \`count()\` |\n| add at the end | \`$a[] = $v;\` or \`array_push()\` |\n| is a key present | \`isset($a['k'])\` or \`array_key_exists()\` |\n| keys / values as a list | \`array_keys()\`, \`array_values()\` |\n| nested structure printed | \`print_r($a)\` or \`var_export($a)\` |\n| total of a numeric list | \`array_sum()\` |\n\n**Exam line:** indexed arrays count positions, associative arrays name them, and a multidimensional array is a table read with two loops — \`foreach\` for keys, \`array_sum\` for totals.`,
              diagram: `php-arrays`,
              diagramCaption:
                `PHP indexed, associative and multidimensional arrays with access, iteration and a worked marks table.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain six PHP array functions with an example and output — \`array_merge\`, \`array_slice\`, \`sort\`, \`in_array\`, \`array_keys\` and \`array_map\`.`,
              explain:
                `**What is being asked.** The library functions the syllabus lists, with output.\n\n**Points.** Merge keeps string keys and renumbers numeric ones; \`slice\` copies; \`sort\` sorts in place and returns a boolean; \`in_array\` is loose unless \`strict\` is passed; \`array_map\` returns a new array.\n\n**How to score the 4 marks.** Six functions with example and output (3) · the in-place versus returning distinction (1).`,
              answer:
                `Array functions either return a **new array** or change the one passed in — the exam expects that distinction to be stated.\n\n| Function | Purpose | Example | Output |\n|---|---|---|---|\n| \`array_merge()\` | join two arrays | \`array_merge([1,2], [3])\` | \`[1,2,3]\` |\n| \`array_slice()\` | copy a part | \`array_slice([10,20,30,40], 1, 2)\` | \`[20,30]\` |\n| \`sort()\` | sort in place, ascending | \`$a = [3,1,2]; sort($a);\` | \`$a\` is \`[1,2,3]\`, returns \`true\` |\n| \`in_array()\` | membership test | \`in_array('DS', ['WT','DS'])\` | \`true\` |\n| \`array_keys()\` | the keys as a list | \`array_keys(['a'=>1,'b'=>2])\` | \`['a','b']\` |\n| \`array_map()\` | apply a callback to each item | \`array_map(fn($m) => $m + 5, [72,65])\` | \`[77,70]\` |\n\n\`\`\`php\n$marks = ['riya' => 72, 'arjun' => 58, 'neha' => 88];\n\nasort($marks);                        // sort by value, keys preserved\nprint_r($marks);                      // riya 72, neha 88, arjun 58 → ordered 58, 72, 88\n\n$names = array_keys($marks);\nprint_r($names);                      // ['arjun','riya','neha']\n\n$bumped = array_map(fn($m) => $m + 5, $marks);\nprint_r($bumped);                     // each value + 5\n\n$pass = array_filter($marks, fn($m) => $m >= 60);\nprint_r($pass);                       // riya 72, neha 88\n\`\`\`\n\n**The two rules.** \`sort\`/\`asort\`/\`ksort\`/\`rsort\` change the array and return a boolean, so \`$new = sort($a)\` is a bug; \`array_slice\`, \`array_map\`, \`array_filter\`, \`array_merge\` and \`array_keys\` return a new array and leave the original intact. Also pass \`true\` as the third argument of \`in_array()\` for a strict type check, otherwise \`0 == 'DS'\` matches in older comparisons.\n\n**Exam line:** merge and slice copy, sort mutates and returns a boolean, \`in_array\` tests membership — and \`array_map\`/\`array_filter\` build a new array.`,
              diagram: `php-array-functions`,
              diagramCaption:
                `Six PHP array functions with their output, and the in-place versus returning behaviour of each.`,
            },
          ],
        },
      ],
    },
    {
      number: 4,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain ASP.NET view state — how it is stored, when it is loaded and saved, how to enable or disable it, and the security precautions it needs.`,
              explain:
                `**What is being asked.** View state is the mechanism that makes a Web Forms page remember its own control values across a postback.\n\n**How.** Values are serialised into a Base64 hidden field \`__VIEWSTATE\`, which travels with the form; the page life cycle restores it before \`Page_Load\` and saves it after \`PreRender\`.\n\n**Control.** \`EnableViewState="false"\` on a page or a control, \`<pages enableViewState="false">\` in \`web.config\`, and \`ViewStateMode\` for inheritance.\n\n**Security.** Base64 is not encryption — \`ViewStateEncryptionMode\` and a \`machineKey\` are needed; MAC validation detects tampering.\n\n**How to score the 6 marks.** Mechanism with the hidden field (2) · life cycle position (1.5) · enabling/disabling (1) · security (1.5).`,
              answer:
                `View state is how a Web Forms page remembers the values of its own controls between requests, because HTTP remembers nothing.\n\n**How it is stored**\n1. On postback the page serialises the state of every control that takes part (text boxes, drop-downs, grid paging information) into a Base64 string.\n2. That string is written into a **hidden field named \`__VIEWSTATE\`** in the rendered form.\n3. When the form is submitted, the hidden field comes back in the request body; ASP.NET decodes it and restores the controls **before** \`Page_Load\` runs.\n\n\`\`\`html\n<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKMTI3NjM0NTY3OQ9kFgICAw9kFgQCAQ8PFgIeBFRleHQFBVJpeWEPFgIeBWNsYXNzBQJjc2FkZGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgEFDmN0bDAwJHR4dE5hbWUPRBQrAAIWAh4IRW5hYmxlZAUmY3RsMDAkZ3JpZFZpZXckY3RsMDIkY3RsMDIkY3RsMDgkY3RsMDAWAA==" />\n\`\`\`\n\n**When it is loaded and saved**\n\n| Stage | View state work |\n|---|---|\n| Load view state | the hidden field is decoded and applied to the controls |\n| Page load | your code sees the restored values |\n| Pre-render | last chance to change a control's value |\n| Save view state | the field is serialised for the response |\n| Render | the hidden field is written into the HTML |\n\n**Turning it off**\n\`\`\`aspx\n<%@ Page EnableViewState="false" %>          <!-- one page -->\n<asp:GridView ID="gv" runat="server" EnableViewState="false" />\n\`\`\`\n\`\`\`xml\n<pages enableViewState="false" />              <!-- web.config, whole app -->\n\`\`\`\nDisable it for pages that never post back (and for data-bound grids rebound on every request): the field can reach hundreds of KB, and every byte travels down and back up on each postback.\n\n**The security precautions**\n1. **Base64 is encoding, not encryption** — anyone can decode the field, so never put a password, a price or a permission flag in view state.\n2. **Tampering** — the field carries a MAC (message authentication code) computed with the \`machineKey\`; a modified value is rejected with an \`HttpException: Validation of viewstate MAC failed\`.\n3. **Encryption** — for sensitive values set \`<pages viewStateEncryptionMode="Always" />\`.\n4. **Fixed machine key** — in a web farm the same \`machineKey\` must be configured on every server, or one server cannot read another's view state.\n\n**Exam line:** view state is a Base64 hidden field loaded before \`Page_Load\` and saved before \`Render\` — disable it where it is not needed, and never treat it as secure storage.`,
              diagram: `wt4-viewstate`,
              diagramCaption:
                `ASP.NET view state — the __VIEWSTATE hidden field, its position in the page life cycle and its security flags.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Distinguish session state from application state in ASP.NET, and state which storage mode to use when the application runs on more than one server.`,
              explain:
                `**What is being asked.** Scope, lifetime, storage mode and the web farm consequence.\n\n**Session.** Per user, keyed by a session ID cookie; modes InProc, StateServer, SQLServer, Custom; timeout.\n\n**Application.** Shared by every user, only in memory, lost on restart or app-pool recycle; needs \`Lock()\`/\`Unlock()\`.\n\n**Web farm.** InProc cannot be shared, so use StateServer or SQLServer (or ASP.NET Core distributed cache).\n\n**How to score the 4 marks.** Comparison on scope, lifetime and storage (2.5) · the farm recommendation with the reason (1.5).`,
              answer:
                `Both are server-side stores, but one belongs to a visitor and the other to the whole application.\n\n| Point | Session state | Application state |\n|---|---|---|\n| Scope | one user / one browser session | all users of the application |\n| Access | \`Session["user_id"]\` | \`Application["visits"]\` |\n| Storage modes | InProc, StateServer, SQLServer, Custom | memory of the application domain only |\n| Lifetime | until timeout (default 20 min) or \`Abandon()\` | until the app restarts or the app pool recycles |\n| Concurrency | one user, no contention | many users — must \`Application.Lock()\` / \`Unlock()\` |\n| Typical use | login, cart, wizard step | counters, reference lists, configuration cache |\n\n\`\`\`csharp\nSession["user"] = txtUser.Text;            // per user\nApplication.Lock();\nApplication["visits"] = (int)(Application["visits"] ?? 0) + 1;\nApplication.Unlock();                       // shared, so lock around the update\n\`\`\`\n\n**On more than one server.** \`InProc\` keeps the session in the memory of one process, so a second server cannot see it and a restart loses it. Use **\`StateServer\`** (a separate service holding sessions outside IIS) or **\`SQLServer\`** (sessions in a database table) in \`web.config\`:\n\`\`\`xml\n<sessionState mode="SQLServer"\n              sqlConnectionString="data source=db;initial catalog=ASPState;integrated security=SSPI"\n              timeout="20" />\n\`\`\`\nApplication state should then be replaced altogether by a shared cache or database, because it is never shared between servers.\n\n**Exam line:** session is per user and can move to StateServer or SQLServer, application is per process and shared by everyone — which is why a farm cannot use InProc.`,
              diagram: `wt4-session`,
              diagramCaption:
                `ASP.NET session state versus application state, with the storage modes used behind a load balancer.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Explain the ADO.NET architecture — connected and disconnected models — naming the \`Connection\`, \`Command\`, \`DataReader\`, \`DataAdapter\`, \`DataSet\` and \`DataTable\` objects and where each is used.`,
              explain:
                `**What is being asked.** Two models, one set of objects, and the choice between them.\n\n**Connected.** \`SqlConnection\` → \`SqlCommand\` → \`SqlDataReader\`: a live stream, fastest, forward-only, holds the connection open.\n\n**Disconnected.** \`SqlDataAdapter\` fills a \`DataSet\`/\`DataTable\`, closes the connection, and updates through the adapter; good for binding and for a web page that must not hold a connection.\n\n**Providers.** \`System.Data.SqlClient\`, \`OleDb\`, \`Odbc\` — the same pattern for each.\n\n**How to score the 6 marks.** The two models with an object diagram (2.5) · each object with its role (2.5) · when to choose which (1).`,
              answer:
                `ADO.NET is the data-access layer of .NET. It offers two models: keep the connection open and stream rows, or copy rows into memory and close the connection.\n\n**The connected model**\n\`\`\`\nSqlConnection  →  SqlCommand  →  SqlDataReader\n   (open)         (SQL + params)      (read row by row)\n\`\`\`\n\`\`\`csharp\nusing (var con = new SqlConnection(cs))\nusing (var cmd = new SqlCommand("SELECT Name, Marks FROM Students WHERE Sem=@s", con))\n{\n    cmd.Parameters.AddWithValue("@s", 3);\n    con.Open();\n    using (SqlDataReader dr = cmd.ExecuteReader())\n    {\n        while (dr.Read())\n            Response.Write(dr["Name"] + " — " + dr["Marks"] + "<br/>");\n    }\n}   // connection closed and disposed here\n\`\`\`\n\n**The disconnected model**\n\`\`\`\nSqlDataAdapter  →  Fill  →  DataSet (DataTables)  →  GridView\n        ↑                                   ↓\n        └──────── Update(dataset) ──────────┘\n\`\`\`\n\`\`\`csharp\nvar da = new SqlDataAdapter("SELECT * FROM Students", cs);\nvar ds = new DataSet();\nda.Fill(ds, "Students");\ngvStudents.DataSource = ds.Tables["Students"];\ngvStudents.DataBind();          // connection is already closed\n\`\`\`\n\n| Object | Role | Model |\n|---|---|---|\n| \`SqlConnection\` | opens a session to the database | both |\n| \`SqlCommand\` | holds SQL or a stored procedure and its parameters | both |\n| \`SqlDataReader\` | forward-only, read-only stream of rows | connected |\n| \`SqlDataAdapter\` | fills a \`DataSet\` and writes changes back | disconnected |\n| \`DataSet\` | in-memory copy of many tables, with relations | disconnected |\n| \`DataTable\` | one in-memory table of rows and columns | disconnected |\n| \`DataView\` | a sorted or filtered view over a \`DataTable\` | disconnected |\n\n**How to choose.** Use a **DataReader** for a large read-only report, because it streams and uses the least memory. Use a **DataSet/DataTable** when the page needs paging, sorting or editing and must not hold a database connection — which on a web server, serving hundreds of users, is almost always.\n\n**Exam line:** connection → command → reader is the connected stream; adapter → dataset → grid is the disconnected copy, and a web page usually wants the second.`,
              diagram: `wt4-adonet`,
              diagramCaption:
                `ADO.NET architecture — the connected Reader model and the disconnected DataAdapter and DataSet model.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Write the steps to connect an ASP.NET page to SQL Server, insert a record from a form, and explain how parameters prevent SQL injection.`,
              explain:
                `**What is being asked.** A working insert path, then the reason parameters are mandatory.\n\n**Steps.** Import the namespace, build the connection string (from \`web.config\`), create the connection, build the command with parameters, open, execute, close.\n\n**Injection.** Concatenating user input lets \`' OR 1=1 --\` change the query; parameters are sent as data, never parsed as SQL.\n\n**How to score the 4 marks.** The five steps with code (2.5) · the injection example and the fix (1.5).`,
              answer:
                `**The steps**\n1. Reference the provider namespace and read the connection string from \`web.config\` rather than hard-coding it.\n2. Create the \`SqlConnection\` and the \`SqlCommand\`.\n3. Add one \`SqlParameter\` for every value — never concatenate.\n4. \`Open()\`, \`ExecuteNonQuery()\` for an insert, and close or dispose with \`using\`.\n5. Confirm with \`RowsAffected\` and redirect or show a message.\n\n\`\`\`xml\n<!-- web.config -->\n<connectionStrings>\n  <add name="mca" connectionString="Data Source=.;Initial Catalog=MCADb;Integrated Security=True" />\n</connectionStrings>\n\`\`\`\n\n\`\`\`csharp\nusing System.Data.SqlClient;\nusing System.Configuration;\n\nstring cs = ConfigurationManager.ConnectionStrings["mca"].ConnectionString;\nstring sql = "INSERT INTO Students (Name, Email, Sem) VALUES (@name, @email, @sem)";\n\nusing (var con = new SqlConnection(cs))\nusing (var cmd = new SqlCommand(sql, con))\n{\n    cmd.Parameters.AddWithValue("@name",  txtName.Text.Trim());\n    cmd.Parameters.AddWithValue("@email", txtEmail.Text.Trim());\n    cmd.Parameters.AddWithValue("@sem",   int.Parse(ddlSem.SelectedValue));\n\n    con.Open();\n    int rows = cmd.ExecuteNonQuery();      // 1 on success\n    lblMsg.Text = rows == 1 ? "Saved" : "Not saved";\n}\n\`\`\`\n\n**Why parameters stop SQL injection.** With string concatenation the input becomes part of the command text:\n\`\`\`csharp\n// DANGEROUS\n"DELETE FROM Students WHERE Id = " + txtId.Text\n// user types: 1 OR 1=1  →  DELETE FROM Students WHERE Id = 1 OR 1=1\n\`\`\`\nWith a parameter the engine receives the SQL and the value **separately**; the value is bound after parsing, so \`1 OR 1=1\` is treated as one literal and matches nothing. Add server-side validation and least-privilege credentials as well.\n\n**Exam line:** connection string from config, command with \`@parameters\`, \`ExecuteNonQuery\`, dispose — and the parameter is what makes injection impossible.`,
              diagram: `wt4-dbconnect`,
              diagramCaption:
                `Connecting ASP.NET to SQL Server and inserting a row, with parameters compared against string concatenation.`,
            },
          ],
        },
      ],
    },
    {
      number: 5,
      marks: 10,
      kind: `pair`,
      note: `10 marks — (a) 6 + (b) 4 · OR (c) 6 + (d) 4`,
      options: [
        {
          label: `a`,
          parts: [
            {
              marks: 6,
              label: `a`,
              question:
                `Explain the MVC architecture in AngularJS — the role of the model, the view and the controller, how data flows between them, and how AngularJS differs from a classic server-side MVC.`,
              explain:
                `**What is being asked.** The separation of concerns and who updates what.\n\n**Roles.** Model — the \`$scope\` data and services; View — the HTML template with expressions and directives; Controller — the function that initialises and exposes behaviour.\n\n**Flow.** Controller creates the model on \`$scope\` → the template binds → a user action changes the model through \`ng-model\` or \`ng-click\` → the digest re-renders the view.\n\n**Difference.** Classic MVC runs on the server and returns a new page; AngularJS runs in the browser and updates the existing DOM.\n\n**How to score the 6 marks.** Three layers with code (2.5) · the flow explained (2) · server-side vs client-side MVC (1.5).`,
              answer:
                `AngularJS follows MVC on the client: each layer has one job and only one of them touches the DOM.\n\n**The three layers**\n\n| Layer | In AngularJS | Job |\n|---|---|---|\n| **Model** | \`$scope\` properties and services holding data | the data and the business rules |\n| **View** | the HTML template with \`{{ }}\`, \`ng-repeat\`, \`ng-model\` | presentation only — no logic |\n| **Controller** | the function registered with \`.controller()\` | initialise the model, expose functions for the view |\n\n\`\`\`html\n<div ng-app="app" ng-controller="ResultCtrl as vm">\n  <!-- VIEW -->\n  <input ng-model="vm.newMark" type="number" />\n  <button ng-click="vm.add()">Add</button>\n  <p>Total: {{ vm.total() }} · Average: {{ vm.average() | number:1 }}</p>\n  <ul><li ng-repeat="m in vm.marks">{{ m }}</li></ul>\n</div>\n\`\`\`\n\`\`\`js\n// CONTROLLER + MODEL\nangular.module('app', [])\n  .controller('ResultCtrl', function () {\n    const vm = this;\n    vm.marks = [72, 65, 88];                  // MODEL\n    vm.newMark = null;\n\n    vm.add = function () {\n      if (vm.newMark != null) { vm.marks.push(vm.newMark); vm.newMark = null; }\n    };\n    vm.total   = () => vm.marks.reduce((s, m) => s + m, 0);\n    vm.average = () => vm.total() / vm.marks.length;\n  });\n\`\`\`\n\n**The data flow**\n1. The controller places the model on the scope (or on \`this\` with \`controller as\`).\n2. The view binds to it with expressions and directives.\n3. A user action updates the model — \`ng-model\` for an input, \`ng-click\` for a button.\n4. \`$digest\` notices the change and re-renders only the bindings that changed.\n5. Nothing in the code writes HTML; the template is the only place that describes the screen.\n\n**Client-side versus server-side MVC**\n\n| Point | Server-side MVC (ASP.NET MVC, CodeIgniter) | AngularJS MVC |\n|---|---|---|\n| Runs on | the server | the browser |\n| Response | a rendered page per request | JSON, with the page already loaded |\n| Update | full page reload | DOM patched in place |\n| State | in the request and session | in \`$scope\`, in memory |\n| View engine | Razor, PHP templates | HTML with directives |\n\n**Exam line:** model on the scope, view in the template, controller for behaviour — and the digest is what keeps the three in step without a page reload.`,
              diagram: `wt5-mvc`,
              diagramCaption:
                `MVC in AngularJS — model on the scope, view in the template, controller for behaviour, and the update flow.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain AngularJS modules and controllers. Write a module with two controllers, explain \`$scope\` inheritance, and state why the array-annotation form is used with minification.`,
              explain:
                `**What is being asked.** How code is organised and why the injection syntax matters.\n\n**Module.** \`angular.module('name', [deps])\` creates, \`angular.module('name')\` retrieves; it holds controllers, services, directives, filters and config.\n\n**Controller.** A constructor function; a child scope is created per controller, which prototypally inherits from the parent.\n\n**Annotation.** \`['$scope', '$http', function($scope, $http){}]\` keeps the names after minification.\n\n**How to score the 4 marks.** Module and two controllers with code (2) · scope inheritance (1) · annotation and why (1).`,
              answer:
                `A **module** is the container; a **controller** is a constructor that prepares one part of the screen.\n\n\`\`\`js\n// create the module once, with its dependencies\nangular.module('collegeApp', [])\n\n  // first controller\n  .controller('ListCtrl', ['$scope', 'StudentService', function ($scope, StudentService) {\n    $scope.students = StudentService.all();\n    $scope.selected = null;\n    $scope.select = function (s) { $scope.selected = s; };\n  }])\n\n  // second controller\n  .controller('DetailCtrl', ['$scope', function ($scope) {\n    $scope.format = function (m) { return m + ' / 100'; };\n  }])\n\n  // a shared service both controllers use\n  .factory('StudentService', function () {\n    const data = [{ name: 'Riya', marks: 88 }, { name: 'Arjun', marks: 61 }];\n    return { all: () => data };\n  });\n\`\`\`\n\n\`\`\`html\n<div ng-app="collegeApp">\n  <div ng-controller="ListCtrl">\n    <li ng-repeat="s in students" ng-click="select(s)">{{ s.name }}</li>\n    <div ng-controller="DetailCtrl" ng-if="selected">\n      {{ selected.name }} — {{ format(selected.marks) }}\n    </div>\n  </div>\n</div>\n\`\`\`\n\n**\`$scope\` inheritance.** The nested \`DetailCtrl\` gets a child scope that **prototypally inherits** from \`ListCtrl\`'s scope, so it can read \`students\` and \`selected\`. Writing a primitive on the child (\`$scope.selected = …\`) creates a shadowing copy instead of updating the parent — the classic AngularJS trap, avoided with an object (\`$scope.vm.selected\`) or with \`controller as\`.\n\n**Why the array-annotation form.** Minification renames function parameters — \`function ($scope, $http)\` becomes \`function (a, b)\` — and AngularJS injects by **name**, so it would fail with \`Unknown provider: aProvider\`. Writing the names as strings before the function keeps them intact:\n\`\`\`js\n.controller('ListCtrl', ['$scope', '$http', function ($scope, $http) { … }]);\n\`\`\`\n\n**Exam line:** one module holds everything, each controller gets a child scope that inherits, and the array annotation is what survives minification.`,
              diagram: `wt5-modules`,
              diagramCaption:
                `AngularJS modules and controllers — two controllers sharing a service, scope inheritance and array annotation.`,
            },
          ],
        },
        {
          label: `c`,
          parts: [
            {
              marks: 6,
              label: `c`,
              question:
                `Explain Next.js — what problem it solves compared with a plain React single-page application, and how routing, data fetching and API routes work in it.`,
              explain:
                `**What is being asked.** Why Next.js exists, then its three headline features.\n\n**The problem.** A plain React SPA ships an empty HTML shell: slow first paint, weak SEO, and the client must fetch everything.\n\n**Solutions.** Server-side rendering and static generation, file-system routing, API routes, image and font optimisation, code splitting.\n\n**How to score the 6 marks.** The problem with a plain SPA (2) · rendering modes (1.5) · routing and API routes with examples (2) · one benefit stated (0.5).`,
              answer:
                `Next.js is a **React framework** — React supplies the components, Next.js supplies the routing, the rendering strategy and the server.\n\n**The problem it solves.** A plain React SPA returns an almost empty \`index.html\`: the browser must download a bundle, run it, and only then see content. That costs a slow first paint, and a crawler that does not run JavaScript sees nothing. Next.js renders the page **on the server** (or at build time) so the first response already contains the HTML, and then hydrates it into an interactive React app.\n\n**1. Rendering modes** — chosen per page, not per app.\n\n| Mode | When the HTML is produced | Good for |\n|---|---|---|\n| **SSR** — \`getServerSideProps\` / dynamic | on every request | dashboards, personalised pages |\n| **SSG** — \`getStaticProps\` / default in App Router | at build time | blogs, marketing pages, catalogues |\n| **ISR** — \`revalidate\` | at build time, refreshed in the background | product pages that change hourly |\n| **CSR** | in the browser | heavily interactive widgets |\n\n**2. File-system routing** — the folder structure is the route table.\n\`\`\`\napp/\n  page.js                →  /\n  about/page.js          →  /about\n  courses/[slug]/page.js →  /courses/php  (dynamic segment)\n  api/students/route.js  →  /api/students   (API route)\n\`\`\`\nNo router config file, no manual path list.\n\n**3. Data fetching and API routes**\n\`\`\`jsx\n// app/courses/[slug]/page.js — server component, async data\nexport default async function Course({ params }) {\n  const res = await fetch(\`https://api.example.com/courses/\${params.slug}\`,\n                          { next: { revalidate: 60 } });\n  const course = await res.json();\n  return <h1>{course.title}</h1>;      // HTML is rendered on the server\n}\n\`\`\`\n\`\`\`js\n// app/api/students/route.js — a backend endpoint in the same project\nexport async function GET() {\n  const students = await db.query('SELECT id, name FROM students');\n  return Response.json(students);\n}\n\`\`\`\n\n**What the project gains.** One deployment for front end and API, automatic code splitting per route, \`<Image>\` and \`<Script>\` optimisation, and a build that can render pages ahead of time — which is why Next.js is used for content and commerce sites where SEO and first paint matter.\n\n**Exam line:** React renders in the browser; Next.js renders on the server or at build time, routes by folder, and puts the API in the same project.`,
              diagram: `wt5-nextjs`,
              diagramCaption:
                `Next.js — the problem with a plain React SPA, the rendering modes, file-system routing and API routes.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain the key features of Next.js — SSR, SSG, ISR, code splitting, image optimisation and the App Router — and state one limitation.`,
              explain:
                `**What is being asked.** The feature list with the purpose of each and one honest limitation.\n\n**Features.** Server-side rendering, static generation, incremental static regeneration, automatic code splitting, image and font optimisation, file-system routing with nested layouts, API routes, built-in bundling and fast refresh.\n\n**Limitation.** Needs a Node server for SSR (not plain static hosting), a heavier build, some vendor coupling, and a steeper learning curve than React alone.\n\n**How to score the 4 marks.** Five features with purpose (3) · one limitation (1).`,
              answer:
                `Next.js bundles the production concerns that React leaves to the team.\n\n| Feature | What it gives |\n|---|---|\n| **SSR** | HTML rendered per request — fresh data and a fast first paint |\n| **SSG** | HTML rendered at build time — served from a CDN at the lowest cost |\n| **ISR** | a static page refreshed in the background after \`revalidate\` seconds — static speed with near-live data |\n| **Code splitting** | each route loads only its own JavaScript, automatically |\n| **Image optimisation** | \`<Image>\` resizes, converts to modern formats and lazy-loads |\n| **File-system routing** | folders become routes; nested layouts wrap their children |\n| **API routes** | backend endpoints in the same project and deployment |\n| **Fast refresh** | a change appears without losing component state |\n\n\`\`\`jsx\n// ISR: static, refreshed at most every 60 seconds\nexport const revalidate = 60;\n\nexport default async function Products() {\n  const res = await fetch('https://api.example.com/products', { next: { revalidate: 60 } });\n  const products = await res.json();\n  return <ul>{products.map((p) => <li key={p.id}>{p.name}</li>)}</ul>;\n}\n\`\`\`\n\n**The limitation to state.** SSR needs a running Node server, so the app cannot be dropped on simple static hosting as a plain React build can; the build is heavier, the framework adds its own conventions to learn, and deployment is easiest on platforms built around it.\n\n**Exam line:** SSR for freshness, SSG for speed, ISR for both, plus code splitting, image optimisation and API routes in one project.`,
              diagram: `wt5-nextjs-features`,
              diagramCaption:
                `Key Next.js features — SSR, SSG, ISR, code splitting, image optimisation and the App Router — with the trade-off.`,
            },
          ],
        },
      ],
    },
  ],
};
