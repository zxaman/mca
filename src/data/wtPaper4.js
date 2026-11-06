// Web Technology Paper 4 — Model Paper (6 + 4 division)
//
// Second 6 + 4 paper: every question is (a) 6 + (b) 4, with a 6 + 4 OR set.
//
// Topic map (all different from Papers 1, 2 and 3):
//   Unit 1 — 1.1 introduction and the web stack, 1.15 CSS selectors,
//            1.13 HTML forms and controls, 1.10–1.12 lists, tables, links and images
//   Unit 2 — 2.13 Date and the Temporal API, 2.15 Bootstrap,
//            2.1 scope, hoisting and closures, 2.1 debugging and error handling
//   Unit 3 — 3.9 multidimensional and associative arrays, 3.10 associative array patterns,
//            3.16 CodeIgniter, 3.5 formatting output
//   Unit 4 — 4.3 Web Forms and the event model, 4.2 environment setup and IIS,
//            4.6 caching in ASP.NET, 4.5 master pages, themes and user controls
//   Unit 5 — 5.8 services, factories and $http, 5.7 filters and custom directives,
//            5.12 the Next.js App Router, 5.1 choosing between AngularJS and Next.js

export const wtPaper4 = {
  id: `wt-paper-4`,
  number: 4,
  name: `Paper 4`,
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
                `Explain web technology as a stack — the client tier, the web server tier and the data tier — and state the role of HTML, CSS, JavaScript, HTTP and a server-side language in it.`,
              explain:
                `**What is being asked.** The whole picture before the details: three tiers, five technologies, and which tier each belongs to.\n\n**Tiers.** Presentation (browser), application (web server and server-side language), data (database).\n\n**Technologies.** HTML structure, CSS presentation, JavaScript behaviour, HTTP transport, PHP/ASP.NET the server-side logic.\n\n**How to score the 6 marks.** The three tiers with a diagram (2.5) · five technologies mapped to their tier (2.5) · one line on why separation matters (1).`,
              answer:
                `A web application is a **three-tier stack**, and each of the five core technologies belongs to exactly one tier.\n\n\`\`\`\nTIER 1 — Presentation (client)\n  HTML  → structure      CSS → presentation      JavaScript → behaviour\n                    │  HTTP request\n                    ▼\nTIER 2 — Application (web server)\n  Apache / IIS  →  PHP or ASP.NET logic  →  session, validation, security\n                    │  SQL\n                    ▼\nTIER 3 — Data (database)\n  MySQL / SQL Server  →  tables, keys, transactions\n\`\`\`\n\n| Technology | Tier | Job |\n|---|---|---|\n| **HTML** | 1 | the structure and meaning of the content |\n| **CSS** | 1 | layout, colour, typography, responsive behaviour |\n| **JavaScript** | 1 | interaction, validation before sending, updating the page |\n| **HTTP** | between 1 and 2 | the request–response protocol: method, headers, status code, body |\n| **PHP / ASP.NET** | 2 | reads the request, applies business rules, talks to the database, produces HTML or JSON |\n| **MySQL / SQL Server** | 3 | stores the data with integrity rules |\n\n**Why the separation matters**\n1. **Independent change** — a redesign touches only CSS; a new business rule touches only the middle tier.\n2. **Testability** — the server tier can be tested without a browser, the browser code without a server.\n3. **Security boundary** — anything in tier 1 is visible to the user, so every trust decision belongs in tier 2.\n4. **Scaling** — the data tier can be replicated and the web tier load-balanced without rewriting the pages.\n\n**What runs where, in one example.** A student opens the result page: HTML and CSS arrive, JavaScript may check the roll number format, HTTP carries the request, PHP queries the database and renders the marks table, and the data tier returns the rows.\n\n**Exam line:** presentation, application and data — HTML/CSS/JS in the browser, PHP or ASP.NET on the server, SQL in the database, and HTTP in between.`,
              diagram: `web-stack`,
              diagramCaption:
                `Web technology as a three-tier stack — presentation, application and data — with HTTP between the tiers.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain CSS selectors and specificity — the four selector types, the specificity score, and how a conflict between an id and a class is resolved.`,
              explain:
                `**What is being asked.** How a rule is matched and which rule wins.\n\n**Selectors.** Element, class, id, descendant, attribute, pseudo-class.\n\n**Specificity.** Inline 1000; id 100; class/attribute/pseudo-class 10; element/pseudo-element 1; \`*\` 0. Compare left to right; equal → the later rule wins.\n\n**How to score the 4 marks.** Selector types with examples (2) · the specificity table (1) · one worked conflict (1).`,
              answer:
                `A selector says **which elements** a rule applies to; specificity decides **which rule wins** when two of them match.\n\n| Selector | Example | Specificity |\n|---|---|---|\n| element | \`p { color: grey; }\` | 1 |\n| class | \`.notice { color: blue; }\` | 10 |\n| attribute | \`input[type="email"] { }\` | 10 |\n| pseudo-class | \`a:hover { }\` | 10 |\n| id | \`#main { color: black; }\` | 100 |\n| inline style | \`style="color:red"\` | 1000 |\n| descendant | \`nav a { }\` | 1 + 1 = 2 |\n| universal | \`* { }\` | 0 |\n\n**A worked conflict**\n\`\`\`css\n#main   { color: black; }     /* 100 */\n.notice { color: blue;  }     /*  10 */\np       { color: grey;  }     /*   1 */\n\`\`\`\n\`\`\`html\n<div id="main"><p class="notice">Exam on Monday</p></div>\n\`\`\`\nThe paragraph matches all three rules. The id rule scores 100 and wins, so the text is **black** — even though \`.notice\` looks more specific to a reader. The designer must either raise the class rule (\`#main .notice { }\` = 110) or avoid styling an id.\n\n**The rules**\n1. Compare specificity as a three-part score, left to right — 0-1-0 beats 0-0-9 whatever the count of elements.\n2. Equal specificity → **the later rule wins**, which is why the order of the linked stylesheets matters.\n3. \`!important\` beats everything except another \`!important\`; treat it as a last resort.\n4. Prefer classes for styling and keep ids for anchors and JavaScript hooks.\n\n**Exam line:** the selector matches, the specificity decides — inline 1000, id 100, class 10, element 1, and a tie goes to the later rule.`,
              diagram: `css-selectors`,
              diagramCaption:
                `CSS selectors with their specificity scores, and a worked conflict between an id and a class rule.`,
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
                `Explain HTML forms — the form element, the common controls, labels and accessibility, and the HTML5 input types with built-in validation — and trace what happens after the submit button is pressed.`,
              explain:
                `**What is being asked.** The markup of a form and the journey of its data.\n\n**Elements.** \`form\` with \`action\` and \`method\`; \`input\` types text, password, email, number, radio, checkbox, file, hidden, submit, reset; \`textarea\`, \`select\`/\`option\`, \`label\`, \`fieldset\`/\`legend\`, \`button\`.\n\n**HTML5.** \`required\`, \`type="email"\`, \`pattern\`, \`min\`/\`max\`, \`placeholder\`, \`autocomplete\`, plus \`novalidate\`.\n\n**The journey.** Browser collects name–value pairs → encodes them → sends in the query string (GET) or body (POST) → the server reads them.\n\n**How to score the 6 marks.** form element with method and action (1.5) · controls with a working example (2) · HTML5 validation attributes (1.5) · the submit journey (1).`,
              answer:
                `A form is the only HTML element that sends data back to the server, and every control inside it contributes one **name–value pair**.\n\n\`\`\`html\n<form action="register.php" method="post" enctype="multipart/form-data" novalidate>\n  <fieldset>\n    <legend>Student registration</legend>\n\n    <label for="name">Full name</label>\n    <input id="name" name="name" type="text" required minlength="3" autocomplete="name" />\n\n    <label for="email">Email</label>\n    <input id="email" name="email" type="email" required placeholder="riya@example.com" />\n\n    <label for="sem">Semester</label>\n    <select id="sem" name="sem">\n      <option value="1">1</option>\n      <option value="2" selected>2</option>\n      <option value="3">3</option>\n    </select>\n\n    <label for="marks">Marks (0–100)</label>\n    <input id="marks" name="marks" type="number" min="0" max="100" step="1" />\n\n    <p>Mode</p>\n    <label><input type="radio" name="mode" value="regular" checked /> Regular</label>\n    <label><input type="radio" name="mode" value="part" /> Part time</label>\n\n    <label><input type="checkbox" name="hostel" value="yes" required /> Hostel required</label>\n\n    <label for="photo">Photo</label>\n    <input id="photo" name="photo" type="file" accept="image/*" />\n\n    <input type="hidden" name="formId" value="reg-2026" />\n    <button type="submit">Register</button>\n    <button type="reset">Clear</button>\n  </fieldset>\n</form>\n\`\`\`\n\n**The controls and what each sends**\n\n| Control | Sends |\n|---|---|\n| \`text\`, \`email\`, \`number\`, \`password\` | the typed value under its \`name\` |\n| \`radio\` group | **one** value — all share the same \`name\` |\n| \`checkbox\` | its \`value\` only when ticked |\n| \`select\` | the selected option's \`value\`, not its label |\n| \`file\` | the file, and only with \`enctype="multipart/form-data"\` |\n| \`hidden\` | a fixed value the user never sees — still editable in the source |\n\n**Labels and accessibility.** A \`<label for="id">\` is linked to the control, so a click on the label focuses it and a screen reader reads the name with the field. Style the label, not the placeholder: a placeholder disappears as soon as typing starts.\n\n**HTML5 validation, without any script**\n\`\`\`html\n<input type="email" required />                        <!-- must look like an email -->\n<input type="text" pattern="[6-9][0-9]{9}" title="10-digit mobile" />\n<input type="number" min="1" max="6" step="1" />       <!-- semester range -->\n<input type="text" maxlength="40" autofocus />\n<input type="password" minlength="8" required />\n\`\`\`\nThe browser blocks the submit and shows a message; \`novalidate\` on the form disables all of it and \`formnovalidate\` on a button disables it for that button alone.\n\n**After the submit button is pressed**\n1. The browser collects every successful control into name–value pairs (an unticked checkbox and a control without a \`name\` are skipped).\n2. It runs the HTML5 constraints and stops if one fails.\n3. It encodes the pairs and sends them — in the query string for \`GET\`, in the request body for \`POST\`.\n4. The server reads \`$_POST\` or \`$_GET\`, validates again, and responds with a new page or a redirect.\n\n**Exam line:** \`action\` names the script, \`method\` chooses where the data travels, every control is one name–value pair — and HTML5 types validate before the request is even sent.`,
              diagram: `php-form-flow`,
              diagramCaption:
                `HTML form submission traced end to end — the form element, the controls it sends and the server that reads them.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain HTML lists, tables and images — the three list types, basic table structure with \`thead\`/\`tbody\`, and the \`alt\` attribute.`,
              explain:
                `**What is being asked.** The three content structures the syllabus lists, with the mark-up.\n\n**Lists.** \`ul\` (unordered), \`ol\` (ordered with \`type\`/\`start\`), \`dl\`/\`dt\`/\`dd\` (description), nestable.\n\n**Tables.** \`table\`, \`caption\`, \`thead\`, \`tbody\`, \`tfoot\`, \`tr\`, \`th\` with \`scope\`, \`td\`, \`colspan\`, \`rowspan\`; tables are for data, not layout.\n\n**Images.** \`img\` with \`src\`, \`alt\`, \`width\`/\`height\`, \`loading="lazy"\`; \`alt\` is mandatory for accessibility.\n\n**How to score the 4 marks.** Three lists with examples (1.5) · table structure with a header row (1.5) · \`alt\` and its two purposes (1).`,
              answer:
                `Lists express a sequence, tables express a grid of data, and images carry meaning that text must also carry.\n\n**Lists**\n\`\`\`html\n<ul>\n  <li>Web Technology</li>\n  <li>Data Science</li>\n</ul>\n\n<ol type="1" start="3">\n  <li>Register</li>\n  <li>Pay fees</li>\n</ol>\n\n<dl>\n  <dt>HTML</dt><dd>structure of a page</dd>\n  <dt>CSS</dt><dd>presentation of a page</dd>\n</dl>\n\`\`\`\n\n| List | Element | Use |\n|---|---|---|\n| unordered | \`ul\` + \`li\` | items with no order — a menu, a feature list |\n| ordered | \`ol\` + \`li\` | a sequence — steps, ranks |\n| description | \`dl\` + \`dt\` + \`dd\` | term and definition pairs |\n\nLists nest: a \`<ul>\` inside an \`<li>\` gives a sub-menu, and a navigation menu is a list of links (\`nav > ul > li > a\`) because that is what a screen reader announces as a menu.\n\n**Tables**\n\`\`\`html\n<table>\n  <caption>Semester 3 results</caption>\n  <thead>\n    <tr><th scope="col">Name</th><th scope="col">Marks</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Riya</td><td>88</td></tr>\n    <tr><td>Arjun</td><td colspan="2">Result awaited</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>Average</td><td>74.5</td></tr>\n  </tfoot>\n</table>\n\`\`\`\n- \`<caption>\` names the table for a screen reader.\n- \`thead\`/\`tbody\`/\`tfoot\` let a long table repeat its header on each printed page.\n- \`<th scope="col">\` marks a header cell, which is what makes the table navigable.\n- \`colspan\` and \`rowspan\` merge cells; overusing them is the usual reason a table becomes unreadable.\n- A table is for **tabular data**; page layout belongs to CSS grid and flexbox.\n\n**Images**\n\`\`\`html\n<img src="campus.webp" alt="Main building of the MCA department"\n     width="640" height="360" loading="lazy" />\n\`\`\`\n\`alt\` has two jobs: it is read by a screen reader, and it is displayed when the image fails to load. Leave it empty (\`alt=""\`) only for a purely decorative image, and never put text inside an image without repeating it in the text.\n\n**Exam line:** \`ul\`/\`ol\`/\`dl\` for lists, \`table\` with \`caption\`, \`thead\` and \`th scope\` for data, and \`alt\` is not optional.`,
              diagram: `html-elements`,
              diagramCaption:
                `Lists, table structure and images inside the block structure of a document, with the alt attribute.`,
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
                `Explain the JavaScript \`Date\` object — creating a date, reading and setting its parts, formatting, date arithmetic — and how the newer Temporal API improves on it.`,
              explain:
                `**What is being asked.** The classic date API with its traps, then the modern replacement.\n\n**Date.** \`new Date()\`, from a string, from milliseconds; \`getFullYear\`, \`getMonth\` (0-based!), \`getDate\`, \`getDay\`, \`getHours\`; \`setDate\` for arithmetic; \`getTime\`; \`toISOString\`, \`toLocaleDateString\`.\n\n**Traps.** Month is 0-based, parsing a string is implementation-dependent, mutation in place, no time zone on a plain date.\n\n**Temporal.** \`Temporal.PlainDate\`, \`Temporal.Now\`, immutable, explicit time zones, \`until\`/\`add\`.\n\n**How to score the 6 marks.** Creation (1.5) · getters and the 0-based month trap (1.5) · arithmetic with an example (1.5) · formatting and Temporal (1.5).`,
              answer:
                `A \`Date\` is a single moment stored as milliseconds since 1 January 1970 UTC; everything else is a getter or a formatter.\n\n**Creating one**\n\`\`\`js\nconst now = new Date();                       // the current moment\nconst fromString = new Date('2026-11-06T10:30:00');\nconst fromParts  = new Date(2026, 10, 6, 10, 30);   // year, MONTH-1, day, hour, minute\nconst fromMs     = new Date(0);               // 1970-01-01T00:00:00Z\n\`\`\`\n\n**Reading the parts**\n\`\`\`js\nconst d = new Date(2026, 10, 6, 10, 30);      // 6 November 2026\nd.getFullYear();     // 2026\nd.getMonth();        // 10  → November (0 = January)\nd.getDate();         // 6   → day of month\nd.getDay();          // 5   → Friday (0 = Sunday)\nd.getHours();        // 10\nd.getTime();         // 1793... milliseconds\n\`\`\`\nThe **0-based month** is the classic trap: \`getMonth() + 1\` is needed to print it, and \`new Date(2026, 11, 1)\` is 1 December, not 1 November.\n\n**Setting and arithmetic**\n\`\`\`js\nconst exam = new Date(2026, 10, 6);\nexam.setDate(exam.getDate() + 10);            // 16 November 2026\nconsole.log(exam.toDateString());\n\n// difference in days\nconst a = new Date('2026-11-06');\nconst b = new Date('2026-11-20');\nconsole.log((b - a) / (1000 * 60 * 60 * 24)); // 14\n\`\`\`\n> \`b - a\` works because the subtraction converts both dates to milliseconds — the only place JavaScript does arithmetic on dates.\n\n**Formatting**\n\`\`\`js\nexam.toISOString();                       // '2026-11-16T00:00:00.000Z' — for storage\nnew Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(exam);\n// 16 November 2026\nexam.toLocaleDateString('en-GB');          // '16/11/2026'\n\`\`\`\nStore dates as ISO strings or milliseconds, format them only for display, and use \`Intl\` rather than hand-written string building.\n\n**Where the Date object falls short, and Temporal**\n\n| Problem in \`Date\` | What Temporal provides |\n|---|---|\n| month starts at 0 | \`Temporal.PlainDate\` uses 1–12 |\n| mutable — \`setDate\` changes the object | every Temporal object is immutable; \`add\` returns a new one |\n| no plain date without a time zone | \`PlainDate\`, \`PlainTime\`, \`PlainDateTime\`, \`ZonedDateTime\` are separate types |\n| parsing depends on the engine | ISO strings are parsed strictly |\n| naive arithmetic across DST | \`add({ months: 1 })\` and \`until\` are calendar-aware |\n\n\`\`\`js\nconst d1 = Temporal.PlainDate.from('2026-11-06');\nconst d2 = d1.add({ days: 10 });                 // 2026-11-16, d1 unchanged\nconsole.log(d1.until(d2).days);                   // 10\nconsole.log(Temporal.Now.zonedDateTimeISO('Asia/Kolkata').timeZoneId);\n\`\`\`\n\n**Exam line:** a Date is milliseconds since 1970, its month is 0-based, subtraction gives milliseconds — and Temporal is the immutable, calendar-aware replacement.`,
              diagram: `js-date`,
              diagramCaption:
                `The JavaScript Date object — creation, the 0-based month, arithmetic in milliseconds, formatting and Temporal.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain Bootstrap — the grid system with its breakpoints, the component classes, and how it is included in a page.`,
              explain:
                `**What is being asked.** A CSS framework for responsive layout.\n\n**Grid.** 12 columns, container / row / col, breakpoints \`sm 576\`, \`md 768\`, \`lg 992\`, \`xl 1200\`, \`xxl 1400\`; \`col-md-6\`; gutters.\n\n**Components.** navbar, card, modal, alert, table, form-control, btn with variants.\n\n**Inclusion.** CDN link and script, or npm; the bundle needs Popper for tooltips and dropdowns.\n\n**How to score the 4 marks.** Grid with breakpoints (1.5) · a layout example (1) · components and inclusion (1.5).`,
              answer:
                `Bootstrap gives a responsive 12-column grid and a set of ready components, so a page needs classes instead of custom CSS.\n\n**Inclusion**\n\`\`\`html\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>\n\`\`\`\nThe bundle includes Popper, which the dropdown, tooltip and modal components need.\n\n**The grid**\n\`\`\`html\n<div class="container">\n  <div class="row g-3">\n    <div class="col-12 col-md-6 col-lg-4">\n      <div class="card"><div class="card-body">HTML</div></div>\n    </div>\n    <div class="col-12 col-md-6 col-lg-4">\n      <div class="card"><div class="card-body">CSS</div></div>\n    </div>\n    <div class="col-12 col-md-6 col-lg-4">\n      <div class="card"><div class="card-body">JavaScript</div></div>\n    </div>\n  </div>\n</div>\n\`\`\`\nEach row holds 12 column units. On a phone every card takes the full width (\`col-12\`), from 768 px each takes half (\`col-md-6\`), and from 992 px each takes a third (\`col-lg-4\`) — three breakpoints, one markup.\n\n| Breakpoint | Class infix | Width |\n|---|---|---|\n| extra small | *(none)* | below 576 px |\n| small | \`sm\` | ≥ 576 px |\n| medium | \`md\` | ≥ 768 px |\n| large | \`lg\` | ≥ 992 px |\n| extra large | \`xl\` | ≥ 1200 px |\n| xxl | \`xxl\` | ≥ 1400 px |\n\n**Components**\n\`\`\`html\n<nav class="navbar navbar-expand-lg navbar-dark bg-dark">\n  <div class="container">\n    <a class="navbar-brand" href="#">MCA Portal</a>\n  </div>\n</nav>\n\n<div class="alert alert-warning">Fees due on 30 November</div>\n\n<form>\n  <div class="mb-3">\n    <label class="form-label" for="email">Email</label>\n    <input class="form-control" id="email" type="email" required />\n  </div>\n  <button class="btn btn-primary" type="submit">Save</button>\n</form>\n\n<table class="table table-striped table-hover"> … </table>\n\`\`\`\n\n**The utility classes to remember.** \`d-flex\`, \`justify-content-between\`, \`text-center\`, \`p-3\`, \`mt-4\`, \`shadow-sm\`, \`rounded\`, \`visually-hidden\` — spacing and layout without writing CSS. Bootstrap does not replace CSS knowledge; it standardises the common 80 percent.\n\n**Exam line:** container → row → 12 columns, breakpoints from \`sm\` to \`xxl\`, and component classes for navbar, card, form and alert — included by CDN or npm.`,
              diagram: `bootstrap`,
              diagramCaption:
                `Bootstrap — the 12-column grid across the breakpoints, the component classes and how the framework is included.`,
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
                `Explain scope, hoisting and closures in JavaScript — function scope versus block scope, the temporal dead zone, and how a closure keeps a variable alive, with one practical use.`,
              explain:
                `**What is being asked.** What a variable can see, when it exists, and why a function can outlive its parent.\n\n**Scope.** Global, function, block; lexical — decided where the code is written, not called.\n\n**Hoisting.** \`var\` → hoisted and initialised to \`undefined\`; \`function\` declarations → fully hoisted; \`let\`/\`const\` → hoisted but in the temporal dead zone until the declaration line.\n\n**Closure.** A function that keeps a reference to its parent's variables; used for private state, counters, memoisation, and event handlers.\n\n**How to score the 6 marks.** Three scopes with an example (2) · hoisting with output (2) · closure with a practical example (2).`,
              answer:
                `Scope is decided by **where a function is written**, not where it is called — that is what "lexical" means, and everything else follows from it.\n\n**The three scopes**\n\`\`\`js\nlet site = 'portal';              // global — visible everywhere\n\nfunction show() {\n  let pin = 1234;                 // function scope\n  if (true) {\n    let msg = 'inside';           // block scope\n    var old = 'leaks';            // var ignores the block\n  }\n  // console.log(msg);           // ReferenceError\n  console.log(old);               // 'leaks' — var is function scoped\n  return pin;\n}\n\`\`\`\n\n**Hoisting**\n\`\`\`js\nconsole.log(a);      // undefined  — var hoisted, initialised to undefined\nconsole.log(b);      // ReferenceError — let is in the temporal dead zone\nconsole.log(c());    // works — a function declaration is fully hoisted\n\ndeclare();           // works\n\nvar a = 1;\nlet b = 2;\nfunction c() { return 'c'; }\nfunction declare() {}\n\n// but an expression is not hoisted:\n// d();              // TypeError: d is not a function\nvar d = function () {};\n\`\`\`\n\n| Declaration | Hoisted | Usable before its line |\n|---|---|---|\n| \`var\` | yes, as \`undefined\` | gives \`undefined\`, not an error |\n| \`let\` / \`const\` | yes, but uninitialised | \`ReferenceError\` — the temporal dead zone |\n| \`function name()\` | yes, whole body | yes |\n| \`const f = () => {}\` | the binding only | no — it is \`undefined\` until assigned |\n\n**Closures**\n\`\`\`js\nfunction makeCounter() {\n  let count = 0;                  // private, kept alive by the returned function\n  return function () {\n    count += 1;\n    return count;\n  };\n}\n\nconst nextRoll = makeCounter();\nconsole.log(nextRoll());   // 1\nconsole.log(nextRoll());   // 2\nconsole.log(nextRoll());   // 3\n// count is not reachable from outside — no global, no tampering\n\`\`\`\n\`makeCounter\` has already returned, yet its local \`count\` still exists: the returned function holds a reference to it, so the variable is not garbage-collected.\n\n**A practical use — a memo cache**\n\`\`\`js\nfunction memoise(fn) {\n  const cache = new Map();\n  return function (n) {\n    if (cache.has(n)) return cache.get(n);\n    const value = fn(n);\n    cache.set(n, value);\n    return value;\n  };\n}\n\nconst slowSquare = (n) => { for (let i = 0; i < 1e7; i++); return n * n; };\nconst fastSquare = memoise(slowSquare);\nfastSquare(12);   // computed\nfastSquare(12);   // from the cache\n\`\`\`\n\n**The closure trap in a loop.** \`for (var i = 0; i < 3; i++) setTimeout(() => console.log(i))\` prints \`3 3 3\`, because one \`i\` is shared. Using \`let\` creates a new binding per iteration and prints \`0 1 2\`.\n\n**Exam line:** \`var\` leaks out of blocks, \`let\` and \`const\` stay in them, hoisting explains what happens before the line — and a closure is a function that remembers where it was written.`,
              diagram: `js-types`,
              diagramCaption:
                `JavaScript scope and hoisting — global, function and block scope, the temporal dead zone — and how a closure keeps state.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain error handling and debugging in JavaScript — \`try\`/\`catch\`/\`finally\`/\`throw\`, the common runtime errors, and three debugging techniques with the browser tools.`,
              explain:
                `**What is being asked.** Catching what can be caught, and finding what cannot.\n\n**Statements.** \`try\`, \`catch (e)\`, \`finally\`, \`throw new Error()\`; custom error classes; rethrowing.\n\n**Common errors.** \`ReferenceError\`, \`TypeError\`, \`SyntaxError\`, \`RangeError\`.\n\n**Techniques.** \`console.log\`/\`table\`/\`time\`, breakpoints and the debugger, the Network panel, \`try/catch\` around awaited calls.\n\n**How to score the 4 marks.** try/catch/finally with an example (2) · three errors named with a cause (1) · debugging techniques (1).`,
              answer:
                `A \`try\` block protects code that may fail; a \`catch\` receives the error; \`finally\` always runs.\n\n\`\`\`js\nfunction parseMarks(input) {\n  try {\n    const marks = JSON.parse(input);\n    if (!Array.isArray(marks)) throw new Error('Expected an array of marks');\n    return marks.map((m) => {\n      if (typeof m !== 'number') throw new TypeError('Mark is not a number: ' + m);\n      return m;\n    });\n  } catch (err) {\n    console.error(err.name + ': ' + err.message);\n    return [];                            // a safe default\n  } finally {\n    console.log('parse attempt finished');  // runs in both cases\n  }\n}\n\nparseMarks('[72,65]');       // [72, 65]\nparseMarks('{"a":1}');      // Error: Expected an array of marks → []\nparseMarks('not json');      // SyntaxError: Unexpected token …   → []\n\`\`\`\n\n**The four errors worth naming**\n\n| Error | Typical cause |\n|---|---|\n| \`ReferenceError\` | a variable used before declaration or misspelt — \`let\` before its line |\n| \`TypeError\` | calling something that is \`undefined\`, or a property of \`null\` — \`document.getElementById('typo')\` |\n| \`SyntaxError\` | a missing bracket or an invalid \`JSON.parse\` input |\n| \`RangeError\` | an invalid length or a recursive call that never ends |\n\n**The rules**\n1. Catch only what you can handle; an empty \`catch {}\` hides the bug.\n2. \`throw new Error('message')\` with a message that says what was expected and what arrived.\n3. \`try\` cannot catch a syntax error in the same script — the file never runs.\n4. Around asynchronous code, \`try/catch\` only works with \`await\`; a rejected promise needs \`.catch()\`.\n\n**Debugging techniques**\n1. **Console** — \`console.log\`, \`console.table(rows)\`, \`console.time\`/\`timeEnd\`, \`console.assert(cond, 'msg')\`.\n2. **Breakpoints** — a \`debugger;\` statement or a breakpoint in the Sources panel, then step over, into and out, and inspect the scope and watch expressions.\n3. **Network panel** — the status code, the payload and the response of each request; most "the data is missing" bugs end here.\n4. **Elements panel** — inspect the DOM and the applied CSS, and see which rule won.\n\n**Exam line:** \`try\`/\`catch\`/\`finally\` for what may fail, the four error types by cause, and the breakpoint plus the Network panel before any guess.`,
              diagram: `js-control`,
              diagramCaption:
                `JavaScript error handling and debugging — try, catch and finally, the common runtime errors and the browser tools.`,
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
                `Explain multidimensional and associative arrays in PHP — how a two-dimensional array is created, read, iterated and updated, and how an associative array models a database row.`,
              explain:
                `**What is being asked.** A grid of values and a record of named fields, which together model almost every real data set.\n\n**Two-dimensional.** An array whose values are arrays; \`$a[$i][$j]\`; nested \`foreach\`; \`count($a)\` and \`count($a[$i])\`.\n\n**Associative.** String keys; one row of a table read as \`['id'=>1,'name'=>'Riya']\`; a list of such rows is the result set.\n\n**Operations.** Add rows, update a cell, sort by a column with \`usort\`/\`array_column\`, compute a column total.\n\n**How to score the 6 marks.** Creation and access (2) · nested iteration with a total (2) · associative rows with a column sort (2).`,
              answer:
                `A **multidimensional** array is a grid indexed by position; an **associative** array is a record indexed by name. A result set is usually a list of associative arrays.\n\n**Creating and reading a two-dimensional array**\n\`\`\`php\n$marks = [\n    [72, 65, 88],        // row 0 — Riya\n    [58, 61, 70],        // row 1 — Arjun\n    [90, 85, 79],        // row 2 — Neha\n];\n\necho $marks[1][2];          // 70  — row 1, column 2\necho count($marks);         // 3 rows\necho count($marks[0]);      // 3 columns\n\n$marks[0][1] = 70;          // update one cell\n$marks[3] = [66, 72, 80];   // append a row\n\`\`\`\n\n**Iterating and totalling**\n\`\`\`php\n$grand = 0;\nforeach ($marks as $i => $row) {\n    $total = array_sum($row);\n    $grand += $total;\n    printf("Row %d: total %3d, average %5.2f\\n", $i + 1, $total, $total / count($row));\n}\necho "Grand total: $grand\\n";\n// Row 1: total 225, average 75.00 ...\n\n// column total — one column across every row\n$col1 = array_sum(array_column($marks, 1));   // 65 + 61 + 85\necho $col1;\n\`\`\`\n\n**The associative form — a database row**\n\`\`\`php\n$students = [\n    ['id' => 1, 'name' => 'Riya',  'sem' => 3, 'marks' => 480],\n    ['id' => 2, 'name' => 'Arjun', 'sem' => 3, 'marks' => 415],\n    ['id' => 3, 'name' => 'Neha',  'sem' => 4, 'marks' => 502],\n];\n\necho $students[0]['name'];                 // Riya\n$students[1]['marks'] += 10;               // update one field\n\n// sort by marks, highest first — the exam-worthy line\nusort($students, fn($a, $b) => $b['marks'] <=> $a['marks']);\n\n// a column as a list\n$names = array_column($students, 'name');          // ['Neha','Riya','Arjun']\n\n// filter one row by a field\n$sem3 = array_filter($students, fn($s) => $s['sem'] === 3);\n\n// index by id — the pattern used for lookups\n$byId = array_column($students, null, 'id');\necho $byId[2]['name'];                     // Arjun\n\`\`\`\n\n**Why the associative form is the one to prefer**\n1. **Self-documenting** — \`$row['marks']\` cannot be confused with \`$row['sem']\`, whereas \`$row[1]\` and \`$row[2]\` can.\n2. **Survives a schema change** — a new column does not shift every index.\n3. **Matches the database** — a \`fetch_assoc()\` row arrives in exactly this shape, so no conversion is needed.\n4. **Sorting is explicit** — \`usort\` with a comparator on a named column reads as the intent.\n\n**Exam line:** \`$a[$i][$j]\` for a grid, \`$a['key']\` for a record, nested \`foreach\` to total it — and \`array_column\` with \`usort\` to work on one field.`,
              diagram: `php-2d-array`,
              diagramCaption:
                `PHP two-dimensional and associative arrays — access, nested iteration, column totals and sorting by a field.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain the associative array functions \`array_key_exists\`, \`array_keys\`, \`array_values\`, \`array_flip\`, \`array_search\` and \`array_column\`, with one example each.`,
              explain:
                `**What is being asked.** The functions that work on the key side rather than the value side.\n\n**Points.** \`array_key_exists\` works even when the value is \`null\`, unlike \`isset\`; \`array_flip\` swaps keys and values, so values must be unique and of a valid key type; \`array_search\` returns the key or \`false\`; \`array_column\` extracts one field from a list of rows.\n\n**How to score the 4 marks.** Six functions with example and output (3) · the \`isset\` versus \`array_key_exists\` difference (1).`,
              answer:
                `These functions answer questions about **keys**: does it exist, what are they, where is a value, and one column out of many.\n\n\`\`\`php\n$student = ['name' => 'Riya', 'sem' => 3, 'marks' => 480, 'city' => null];\n\`\`\`\n\n| Function | Question | Example | Output |\n|---|---|---|---|\n| \`array_key_exists()\` | does this key exist? | \`array_key_exists('city', $student)\` | \`true\` even though the value is \`null\` |\n| \`array_keys()\` | what are the keys? | \`array_keys($student)\` | \`['name','sem','marks','city']\` |\n| \`array_values()\` | the values as a list | \`array_values($student)\` | \`['Riya',3,480,null]\` |\n| \`array_flip()\` | swap keys and values | \`array_flip(['a'=>1,'b'=>2])\` | \`[1=>'a', 2=>'b']\` |\n| \`array_search()\` | which key holds this value? | \`array_search('Riya', $student)\` | \`'name'\` |\n| \`array_column()\` | one field from many rows | \`array_column($rows, 'name')\` | \`['Riya','Arjun']\` |\n\n\`\`\`php\n$rows = [\n    ['id' => 1, 'name' => 'Riya',  'marks' => 480],\n    ['id' => 2, 'name' => 'Arjun', 'marks' => 415],\n];\n\nprint_r(array_column($rows, 'name'));          // ['Riya','Arjun']\nprint_r(array_column($rows, 'marks', 'id'));   // [1 => 480, 2 => 415]\n\n$map = array_flip(array_column($rows, 'id')); // not useful here — ids must be unique values\nprint_r($map);\n\n$key = array_search(415, array_column($rows, 'marks'));\necho $key;                                     // 1  → the second row\n\`\`\`\n\n**The difference that earns the mark.** \`isset($student['city'])\` is **false** when the value is \`null\`, because \`isset\` asks whether the value is set and not null; \`array_key_exists()\` is **true**. Use \`array_key_exists()\` whenever a \`null\` is a legitimate value.\n\n**The caution.** \`array_search()\` returns the **key**, and \`0\` is a valid key, so compare strictly: \`if ($k !== false)\`.\n\n**Exam line:** \`array_key_exists\` sees a null value when \`isset\` does not, \`array_keys\` and \`array_values\` split the map, \`array_flip\` swaps it — and \`array_column\` with a third argument indexes a result set by id.`,
              diagram: `php-assoc`,
              diagramCaption:
                `PHP associative array functions — key existence, keys and values, flip, search and column extraction.`,
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
                `Explain CodeIgniter as a PHP MVC framework — the request flow, the folder structure, the role of a controller, model and view, and the configuration and routing involved.`,
              explain:
                `**What is being asked.** How a framework takes over routing and enforces MVC.\n\n**Flow.** \`index.php\` front controller → routing → controller → model (database) → view (HTML) → response.\n\n**Structure.** \`app/Controllers\`, \`app/Models\`, \`app/Views\`, \`app/Config\`, \`app/Filters\`, \`public/index.php\`.\n\n**Configuration.** Base URL, database settings, routes, autoload.\n\n**Advantages.** Small footprint, clear rules, helpers and libraries, built-in security and validation, short learning curve.\n\n**How to score the 6 marks.** Request flow (2) · folder structure and MVC roles (2) · a controller + model + view example (1.5) · configuration and routing (0.5).`,
              answer:
                `CodeIgniter is a lightweight PHP framework built on **MVC**; every request goes through one entry file and is dispatched to a controller.\n\n**The request flow**\n\`\`\`\nBrowser  →  public/index.php (front controller)\n              →  Router   (app/Config/Routes.php)\n                 →  Controller  (app/Controllers/Result.php)\n                    →  Model   (app/Models/StudentModel.php)  →  database\n                    →  View    (app/Views/result.php)         →  HTML\n              ←  Response\n\`\`\`\n\n**Folder structure**\n\n| Folder | Holds |\n|---|---|\n| \`app/Controllers\` | one class per page group — receives the request |\n| \`app/Models\` | database access only |\n| \`app/Views\` | HTML templates, no logic |\n| \`app/Config\` | \`Routes.php\`, \`Database.php\`, \`App.php\` |\n| \`app/Filters\` | before/after request checks — authentication |\n| \`public\` | the web root; only \`index.php\` and assets |\n| \`writable\` | logs and cache |\n\n**Controller, model and view**\n\`\`\`php\n// app/Controllers/Result.php\nnamespace App\\Controllers;\nuse App\\Models\\StudentModel;\n\nclass Result extends BaseController\n{\n    public function index(int $sem = 1)\n    {\n        $model = new StudentModel();\n        $data['students'] = $model->bySemester($sem);\n        $data['sem'] = $sem;\n        return view('result', $data);       // the view receives $students\n    }\n}\n\`\`\`\n\`\`\`php\n// app/Models/StudentModel.php\nnamespace App\\Models;\nuse CodeIgniter\\Model;\n\nclass StudentModel extends Model\n{\n    protected $table = 'students';\n    protected $allowedFields = ['name', 'sem', 'marks'];\n\n    public function bySemester(int $sem)\n    {\n        return $this->where('sem', $sem)->orderBy('marks', 'DESC')->findAll();\n    }\n}\n\`\`\`\n\`\`\`php\n<!-- app/Views/result.php -->\n<h2>Semester <?= esc($sem) ?> results</h2>\n<table>\n  <tr><th>Name</th><th>Marks</th></tr>\n  <?php foreach ($students as $s): ?>\n    <tr><td><?= esc($s['name']) ?></td><td><?= esc($s['marks']) ?></td></tr>\n  <?php endforeach; ?>\n</table>\n\`\`\`\n\n**Configuration and routing**\n\`\`\`php\n// app/Config/Routes.php\n$routes->get('/', 'Home::index');\n$routes->get('result/(:num)', 'Result::index/$1');\n$routes->post('register', 'Register::save');\n$routes->group('admin', ['filter' => 'auth'], function ($routes) {\n    $routes->get('dashboard', 'Admin::dashboard');\n});\n\`\`\`\n\`public/index.php\` is the only file in the web root; \`BaseController\` holds shared code; \`esc()\` in a view escapes output and is the framework's defence against script injection; validation lives in \`$this->validate([...])\` inside the controller.\n\n**Why a framework is used.** Routing, database abstraction, validation, CSRF protection, sessions, logging and escaping are already written and tested — the team writes only the business rules.\n\n**Exam line:** one front controller, a router, a thin controller, a fat model and a dumb view — with configuration and routes deciding which controller runs.`,
              diagram: `codeigniter-mvc`,
              diagramCaption:
                `CodeIgniter request flow through the front controller, router, controller, model and view, with the folder structure.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain output formatting in PHP — \`echo\` versus \`print\`, \`printf\` with format specifiers, \`number_format\` and \`sprintf\` for building a string — with a worked table row.`,
              explain:
                `**What is being asked.** Producing aligned, readable output.\n\n**echo vs print.** \`echo\` accepts several arguments and returns nothing; \`print\` accepts one and returns \`1\`; both are language constructs, not functions; \`print_r\` for debugging.\n\n**printf/sprintf.** \`%s %d %f %.2f %05d %-10s\`; \`sprintf\` returns.\n\n**number_format.** Thousands separator and decimals; \`%\` and currency formatting.\n\n**How to score the 4 marks.** echo vs print (1) · format specifiers with output (2) · number_format and a worked row (1).`,
              answer:
                `PHP offers a bare print statement, a formatted print, and a formatter that builds a string.\n\n**\`echo\` and \`print\`**\n\`\`\`php\necho 'Sem', ' ', 3, "\\n";     // several arguments, no return value\n$r = print 'hello';            // one argument, returns 1\nprint_r(['a' => 1]);           // human-readable dump, for debugging\n\`\`\`\nNeither is a function, so \`echo('x')\` works but \`$x = echo 'x';\` is a syntax error — use \`print\` when a value is needed.\n\n**\`printf\` and \`sprintf\`**\n\`\`\`php\n$name = 'Riya'; $marks = 486; $percent = 97.2;\n\nprintf("%s scored %d marks (%.2f%%)\\n", $name, $marks, $percent);\n// Riya scored 486 marks (97.20%)\n\nprintf("Roll: %05d\\n", 42);              // Roll: 00042\nprintf("|%-10s|%6.1f|\\n", 'Riya', 97.25); // |Riya      |  97.3|\n\n$row = sprintf('%-8s %5d %6.2f', 'Riya', 486, 97.2);   // returns the string\necho $row;                                              // Riya       486  97.20\n\`\`\`\n\n| Specifier | Meaning | Example output |\n|---|---|---|\n| \`%s\` | string | \`Riya\` |\n| \`%d\` | integer | \`486\` |\n| \`%f\` / \`%.2f\` | float / two decimals | \`97.20\` |\n| \`%05d\` | integer, zero-padded to 5 | \`00042\` |\n| \`%-8s\` | string, left-aligned in 8 | \`Riya    \` |\n| \`%6.2f\` | float, width 6, two decimals | \` 97.20\` |\n| \`%%\` | a literal percent sign | \`%\` |\n\n**\`number_format\` for money and totals**\n\`\`\`php\necho number_format(1250000.5, 2);        // 1,250,000.50\necho number_format(1250000, 0, '.', ','); // 1,250,000\necho '₹ ' . number_format(42500, 2);      // ₹ 42,500.00\n\`\`\`\n\n**A worked result row**\n\`\`\`php\n$rows = [['Riya', 486, 97.2], ['Arjun', 415, 83.0], ['Neha', 502, 100.4]];\n\nprintf("%-8s %6s %8s\\n", 'Name', 'Marks', 'Percent');\nforeach ($rows as [$n, $m, $p]) {\n    printf("%-8s %6d %7.2f%%\\n", $n, $m, $p);\n}\n// Name       Marks  Percent\n// Riya         486    97.20%\n// Arjun        415    83.00%\n// Neha         502   100.40%\n\`\`\`\n\n**The rule.** Alignment comes from a **width** specifier, not from spaces typed by hand; a negative width left-aligns, a leading zero pads with zeros. For HTML output use \`<td style="text-align:right">\` instead of padding, because a proportional font will not line up.\n\n**Exam line:** \`echo\` prints several values, \`print\` returns one, \`printf\` formats in place, \`sprintf\` returns — and the width specifier is what aligns a column.`,
              diagram: `php-string-format`,
              diagramCaption:
                `PHP output formatting — echo and print, printf and sprintf specifiers, number_format and an aligned result table.`,
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
                `Explain ASP.NET Web Forms — the .aspx page, code-behind, the event model with postback, and the advantages and limitations of the Web Forms model compared with MVC.`,
              explain:
                `**What is being asked.** The original ASP.NET programming model, and why it was later supplemented by MVC.\n\n**.aspx and code-behind.** Markup in \`.aspx\`, logic in \`.aspx.cs\` inheriting \`Page\`; the \`@Page\` directive; server controls with \`runat\`.\n\n**Postback and events.** A button click posts the page back, the page rebuilds from view state, the event is raised, and the response is the same page.\n\n**Advantages.** Familiar event model, rich controls, view state, rapid development, validation controls.\n\n**Limitations.** Heavy view state, little control over the HTML, hard to test (no clean separation), poor fit for REST or SPAs, awkward routing.\n\n**How to score the 6 marks.** Page and code-behind (1.5) · postback and event model with a sequence (2) · advantages (1.5) · limitations versus MVC (1).`,
              answer:
                `Web Forms makes a web page behave like a desktop form: you place controls, write an event handler, and the framework handles the request.\n\n**The page and its code-behind**\n\`\`\`aspx\n<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs"\n         Inherits="Mcasite.Register" %>\n\n<html><body>\n<form id="form1" runat="server">\n  <asp:Label ID="lblMsg" runat="server" />\n  <asp:TextBox ID="txtName" runat="server" />\n  <asp:RequiredFieldValidator runat="server" ControlToValidate="txtName"\n       ErrorMessage="Name is required" />\n  <asp:Button ID="btnSave" runat="server" Text="Save" OnClick="btnSave_Click" />\n</form>\n</body></html>\n\`\`\`\n\`\`\`csharp\npublic partial class Register : System.Web.UI.Page\n{\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        if (!IsPostBack) { /* first visit only */ }\n    }\n\n    protected void btnSave_Click(object sender, EventArgs e)\n    {\n        lblMsg.Text = "Saved: " + txtName.Text;\n    }\n}\n\`\`\`\nThe markup and the logic are separate files but joined by inheritance: \`Register.aspx.cs\` inherits \`Page\`, and the declared controls become protected fields of that class.\n\n**The postback and the event model**\n1. The browser requests \`Register.aspx\`; the page renders and its control values are written into \`__VIEWSTATE\`.\n2. The user clicks **Save**; the form posts back to the **same URL** — that is a postback.\n3. The page life cycle rebuilds the control tree, restores view state and the posted values.\n4. \`Page_Load\` runs, then the click event \`btnSave_Click\` is raised.\n5. The page renders again with the new label text, so the user sees a page that has been updated in place.\n\n**Advantages**\n\n| Advantage | Why it matters |\n|---|---|\n| event-driven | a click is handled like a desktop button — quick to learn |\n| rich controls | \`GridView\`, \`Repeater\`, \`Calendar\` with paging, sorting and editing built in |\n| view state | control values persist without extra code |\n| validation controls | client and server validation in one declaration |\n| rapid development | small internal applications are built very fast |\n\n**Limitations, and how MVC answers them**\n\n| Web Forms | MVC |\n|---|---|\n| view state makes pages heavy | clean HTML, no hidden field |\n| HTML output is decided by the control | full control over the markup |\n| logic tied to the page class — hard to unit test | controllers are plain classes, easy to test |\n| one URL, postbacks | REST-style URLs and actions |\n| awkward for JSON or SPA endpoints | built-in Web API support |\n\n**Exam line:** markup plus code-behind, a postback per event, view state to remember the controls — fast for an intranet form, heavy and hard to test for a public site.`,
              diagram: `wt4-webforms`,
              diagramCaption:
                `ASP.NET Web Forms — the .aspx page with code-behind, and the postback that raises the click event.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain the steps to set up an ASP.NET environment — IIS, the application pool, a virtual directory and \`web.config\` — and state what each provides.`,
              explain:
                `**What is being asked.** What must exist before the first \`.aspx\` page runs.\n\n**Steps.** Install the .NET Framework and IIS with ASP.NET; register ASP.NET with IIS; create an application pool; create a website or virtual directory and point it at the folder; set the default document; check permissions on the folder; configure \`web.config\`.\n\n**web.config.** Connection strings, authentication, compilation, custom errors, session state.\n\n**How to score the 4 marks.** Five steps in order (2.5) · the role of the application pool and web.config (1.5).`,
              answer:
                `An ASP.NET application needs three things before it can run: the framework, a web server that knows how to hand \`.aspx\` to it, and a folder the server is allowed to read.\n\n**The steps**\n1. **Enable IIS with ASP.NET** — Windows Features → Internet Information Services → World Wide Web Services → Application Development Features → ASP.NET, .NET Extensibility, ISAPI Extensions and Filters.\n2. **Register ASP.NET with IIS** — \`aspnet_regiis -i\` (older versions) or confirm the handler mapping for \`.aspx\` exists, so IIS knows the extension belongs to the ASP.NET ISAPI filter.\n3. **Create an application pool** — an isolated worker process with its own identity and .NET version; one pool per application keeps a crash in one site away from the others.\n4. **Create the site or a virtual directory** — IIS Manager → Add Website (or Add Application under Default Web Site), physical path to the project folder, port 80 or 8080, and the application pool chosen in step 3.\n5. **Set permissions and the default document** — grant \`IIS_IUSRS\` read and execute on the folder, and add \`Default.aspx\` to the default document list.\n6. **Configure \`web.config\`** — connection string, authentication mode, custom errors and session state.\n7. **Test** — browse \`http://localhost:8080/Default.aspx\` and confirm that a deliberate error appears as a friendly page rather than a stack trace.\n\n**\`web.config\`**\n\`\`\`xml\n<configuration>\n  <connectionStrings>\n    <add name="mca" connectionString="Data Source=.;Initial Catalog=MCADb;Integrated Security=True" />\n  </connectionStrings>\n  <system.web>\n    <compilation debug="false" targetFramework="4.8" />\n    <authentication mode="Forms">\n      <forms loginUrl="~/Login.aspx" timeout="30" />\n    </authentication>\n    <customErrors mode="On" defaultRedirect="~/Error.aspx" />\n    <sessionState mode="InProc" timeout="20" />\n  </system.web>\n</configuration>\n\`\`\`\n\n**What each provides**\n\n| Item | Provides |\n|---|---|\n| IIS | listens on the port, serves static files, maps \`.aspx\` to ASP.NET |\n| application pool | process isolation, identity, recycling |\n| virtual directory | the URL-to-folder mapping |\n| \`web.config\` | per-application settings that override \`machine.config\` |\n\n**Exam line:** framework, IIS with ASP.NET enabled, an application pool, a virtual directory with permissions, and \`web.config\` — then the first page runs.`,
              diagram: `wt4-setup`,
              diagramCaption:
                `Setting up an ASP.NET environment — IIS, the application pool, the virtual directory and web.config.`,
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
                `Explain caching in ASP.NET — output caching, fragment caching, data caching and the cache dependency — and state which to use for a public page, a shared menu and one user’s dashboard.`,
              explain:
                `**What is being asked.** Trading freshness for speed.\n\n**Output caching.** \`<%@ OutputCache Duration="60" VaryByParam="none" %>\`; the whole rendered page is cached.\n\n**Fragment caching.** A user control with its own \`OutputCache\` directive.\n\n**Data caching.** \`Cache["key"] = data\` with \`Insert(key, value, dependency, absoluteExpiration, slidingExpiration, priority)\`; \`SqlCacheDependency\`, file dependency.\n\n**How to score the 6 marks.** The three caching levels with syntax (3) · cache dependency and expiry options (1.5) · the three scenarios answered (1.5).`,
              answer:
                `Caching keeps the result of expensive work in memory, so the next request does not repeat it; the design question is only **how fresh** the result must be.\n\n**1. Output caching — the whole page**\n\`\`\`aspx\n<%@ OutputCache Duration="120" VaryByParam="sem" Location="Any" %>\n\`\`\`\nThe rendered HTML is stored for 120 seconds and served to every request with the same \`sem\` value; \`VaryByParam="none"\` ignores the query string, \`VaryByParam="*"\` varies on every parameter, and \`VaryByCustom="user"\` varies per user.\n\n**2. Fragment caching — part of the page**\n\`\`\`aspx\n<%-- Menu.ascx --%>\n<%@ Control Language="C#" %>\n<%@ OutputCache Duration="600" VaryByParam="none" Shared="true" %>\n<ul class="menu">…</ul>\n\`\`\`\nA navigation menu changes rarely, so the control is cached for 10 minutes and shared between pages, while each page around it is generated normally.\n\n**3. Data caching — the objects**\n\`\`\`csharp\nDataTable marks = GetMarks();\n\nCache.Insert("marks", marks, null,\n             DateTime.Now.AddMinutes(5),      // absolute expiry\n             TimeSpan.FromMinutes(2),         // sliding expiry\n             CacheItemPriority.High, null);\n\nif (Cache["marks"] != null)\n{\n    gvMarks.DataSource = Cache["marks"];\n    gvMarks.DataBind();\n}\n\`\`\`\n\n**Cache dependencies — invalidate when the source changes**\n\`\`\`csharp\n// drop the cached row set when the table changes\nCache.Insert("marks", marks, new SqlCacheDependency("MCADb", "students"));\n\n// or when a file changes\nCache.Insert("config", values, new CacheDependency(Server.MapPath("~/rates.xml")));\n\`\`\`\n\n| Option | Meaning |\n|---|---|\n| absolute expiry | the item dies at a fixed time |\n| sliding expiry | the item dies after a period of no use |\n| dependency | the item dies when the database table or file changes |\n| priority | which items the cache removes first under memory pressure |\n\n**The three scenarios**\n1. **A public page that changes hourly** (a syllabus or notice page) → **output caching** for 10 minutes, \`VaryByParam="none"\`, because every visitor sees the same HTML.\n2. **A shared menu or footer** → **fragment caching** on the user control, with \`Shared="true"\` and a long duration, because it is identical on every page.\n3. **One user’s dashboard** → **data caching** with a short sliding expiry, never output caching, because the HTML differs per user and must not be served to someone else.\n\n**The caution.** Caching a page that contains a user name will show one user’s name to another; cache only what is identical for all viewers, and always have an invalidation path — a cache with no expiry is a stale bug waiting.\n\n**Exam line:** output cache the page, fragment cache the shared block, data cache the query — with a dependency so the cache dies when the data does.`,
              diagram: `wt4-state`,
              diagramCaption:
                `Caching in ASP.NET — output, fragment and data caching, with expiry options and dependencies.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain master pages, themes and user controls in ASP.NET, and state the problem each solves.`,
              explain:
                `**What is being asked.** Three reuse mechanisms, each at a different scale.\n\n**Master page.** One \`.master\` with a \`ContentPlaceHolder\`; pages set \`MasterPageFile\` and fill \`Content\` controls; nested masters allowed; \`Master.FindControl\` to reach the master.\n\n**Themes and skins.** \`App_Themes/<name>/\` with \`.skin\` and \`.css\`; set with \`Theme\` or \`StyleSheetTheme\` on the \`@Page\` directive or in \`web.config\`; \`skinid\`.\n\n**User control.** An \`.ascx\` with its own markup and code, registered with \`<%@ Register %>\` and used as a tag — reusable widget.\n\n**How to score the 4 marks.** Master page with syntax (1.5) · themes and skins (1.5) · user control with the registration line (1).`,
              answer:
                `Each of the three removes a different kind of repetition: the page shell, the visual style, and a widget.\n\n**1. Master page — the shell**\n\`\`\`aspx\n<%-- Site.master --%>\n<%@ Master Language="C#" %>\n<html>\n<head runat="server"><title>MCA Portal</title></head>\n<body>\n  <form runat="server">\n    <header><h1>MCA Portal</h1></header>\n    <nav><a href="Default.aspx">Home</a> | <a href="Result.aspx">Result</a></nav>\n    <main>\n      <asp:ContentPlaceHolder ID="MainContent" runat="server" />\n    </main>\n    <footer>© 2026</footer>\n  </form>\n</body>\n</html>\n\`\`\`\n\`\`\`aspx\n<%-- Result.aspx --%>\n<%@ Page MasterPageFile="~/Site.master" Title="Result" %>\n<asp:Content ContentPlaceHolderID="MainContent" runat="server">\n  <h2>Semester 3 result</h2>\n</asp:Content>\n\`\`\`\n**Problem solved:** the header, menu and footer are written once; changing the menu changes every page. It replaces the frameset the earlier unit described.\n\n**2. Themes and skins — the style**\n\`\`\`\nApp_Themes/Blue/Default.skin\nApp_Themes/Blue/Site.css\n\`\`\`\n\`\`\`xml\n<!-- Default.skin -->\n<asp:TextBox runat="server" BackColor="#eef4ff" BorderColor="#0047ff" />\n<asp:GridView runat="server" CssClass="grid" />\n\`\`\`\n\`\`\`aspx\n<%@ Page Theme="Blue" %>\n\`\`\`\n**Problem solved:** one theme sets the look of every server control across the site; switching to \`Theme="Green"\` restyles the whole application without touching a page. \`StyleSheetTheme\` applies the theme before local settings so a page can still override it.\n\n**3. User control — a widget**\n\`\`\`aspx\n<%-- MarksSummary.ascx --%>\n<%@ Control Language="C#" %>\n<asp:Label ID="lblAvg" runat="server" />\n\`\`\`\n\`\`\`aspx\n<%@ Register Src="~/Controls/MarksSummary.ascx" TagPrefix="uc" TagName="MarksSummary" %>\n<uc:MarksSummary ID="ms1" runat="server" />\n\`\`\`\n**Problem solved:** a piece of UI with its own code — a marks summary, a login box, a poll — is written once and dropped on any number of pages, with its own properties and events.\n\n| Mechanism | Scale | File | Reused by |\n|---|---|---|---|\n| master page | the whole page shell | \`.master\` | every page in the site |\n| theme and skin | the appearance of controls | \`.skin\`, \`.css\` | every control under the theme |\n| user control | one widget | \`.ascx\` | any page that registers it |\n\n**Exam line:** a master page removes the repeated shell, a theme removes the repeated styling, a user control removes the repeated widget — three scales, one idea.`,
              diagram: `wt4-controls`,
              diagramCaption:
                `Master pages, themes and skins, and user controls — the three reuse mechanisms and the problem each solves.`,
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
                `Explain services, factories and \`$http\` in AngularJS — how a service is defined, injected and shared, the difference between a service, a factory and a provider, and one example that fetches data from an API.`,
              explain:
                `**What is being asked.** Where shared logic lives and how it reaches a controller.\n\n**Registering.** \`module.service()\`, \`.factory()\`, \`.provider()\`, \`.value()\`, \`.constant()\`.\n\n**Injection.** By name, minification-safe with the array annotation; a singleton per injector.\n\n**$http.** Returns a promise with \`then\`/\`catch\`; \`$http.get\`, \`post\`, \`params\`, \`interceptors\`.\n\n**How to score the 6 marks.** Definition and injection with code (2) · service vs factory vs provider (2) · a fetch example with error handling (2).`,
              answer:
                `A service is a **singleton object** created once per injector and handed to whatever asks for it by name — that is how controllers share data and logic.\n\n**Registering and injecting**\n\`\`\`js\nangular.module('collegeApp', [])\n\n  // FACTORY — a function that returns the object; the common choice\n  .factory('StudentService', ['$http', function ($http) {\n    let cache = [];\n    return {\n      all() {\n        return $http.get('/api/students').then((r) => {\n          cache = r.data;\n          return cache;\n        });\n      },\n      cached() { return cache; },\n    };\n  }])\n\n  // SERVICE — a constructor function; \`new\` is called for you\n  .service('CartService', function () {\n    this.items = [];\n    this.add = function (item) { this.items.push(item); };\n    this.total = function () { return this.items.reduce((s, i) => s + i.price, 0); };\n  })\n\n  .controller('ListCtrl', ['$scope', 'StudentService', function ($scope, StudentService) {\n    StudentService.all().then((students) => { $scope.students = students; });\n  }]);\n\`\`\`\n\n**Service, factory or provider**\n\n| Recipe | What you write | Result |\n|---|---|---|\n| \`factory\` | a function that **returns** an object | whatever the function returned — the most flexible |\n| \`service\` | a **constructor** function | \`new\` is called, so \`this\` is the instance |\n| \`provider\` | an object with a \`$get\` method | configurable at module config time |\n| \`value\` / \`constant\` | a value | a plain value; \`constant\` is available in \`config\` |\n\nAll five produce a **singleton**: the first injection creates it, and every later request gets the same object, which is exactly why a cache kept in a factory is shared by every controller.\n\n**Fetching from an API**\n\`\`\`js\n.factory('ResultService', ['$http', '$q', function ($http, $q) {\n  return {\n    bySemester(sem) {\n      return $http.get('/api/results', { params: { sem: sem } })\n        .then((res) => res.data)\n        .catch((err) => {\n          console.error('HTTP ' + err.status);\n          return $q.reject('Could not load results');\n        });\n    },\n  };\n}])\n.controller('ResultCtrl', ['ResultService', function (ResultService) {\n  const vm = this;\n  vm.state = 'loading';\n  ResultService.bySemester(3)\n    .then((rows) => { vm.rows = rows; vm.state = 'ready'; })\n    .catch((msg) => { vm.error = msg; vm.state = 'error'; });\n}]);\n\`\`\`\n\`$http\` returns a **promise**, so the view can show a loading, ready or error state — and because the response arrives inside \`$http\`'s own digest, the bindings update with no \`$apply\`.\n\n**Exam line:** a factory returns an object, a service uses \`new\`, a provider is configurable — all singletons, all injected by name, and \`$http\` wraps the API call in a promise.`,
              diagram: `wt5-modules`,
              diagramCaption:
                `AngularJS services, factories and $http — registration, injection, the singleton cache and an API call with states.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Explain AngularJS filters and custom directives — five built-in filters with syntax, and a simple custom directive that formats a value.`,
              explain:
                `**What is being asked.** Formatting in the template, and extending the template with new behaviour.\n\n**Filters.** \`currency\`, \`date\`, \`number\`, \`uppercase\`, \`lowercase\`, \`filter\`, \`orderBy\`, \`limitTo\`, \`json\`; pipe syntax and chaining; a custom filter with \`.filter('name', fn)\`.\n\n**Directive.** \`.directive('name', fn)\` returning a definition object with \`restrict\`, \`template\`, \`scope\`, \`link\`.\n\n**How to score the 4 marks.** Five filters with syntax and output (2) · a custom directive with the definition object (2).`,
              answer:
                `A **filter** formats a value in the template; a **directive** adds behaviour or markup to it.\n\n**Built-in filters**\n\`\`\`html\n<p>{{ 42500 | currency:'INR':'' }}</p>              <!-- 42,500 -->\n<p>{{ '2026-11-06' | date:'dd MMM yyyy' }}</p>       <!-- 06 Nov 2026 -->\n<p>{{ 0.8734 | number:2 }}</p>                       <!-- 0.87 -->\n<p>{{ 'web technology' | uppercase }}</p>            <!-- WEB TECHNOLOGY -->\n<p>{{ students | filter:{sem:3} | orderBy:'-marks' | limitTo:5 }}</p>\n\`\`\`\n\n| Filter | Purpose | Example |\n|---|---|---|\n| \`currency\` | money with a symbol | \`{{ 42500 \\| currency:'INR' }}\` |\n| \`date\` | format a date | \`{{ d \\| date:'dd-MM-yyyy' }}\` |\n| \`number\` | decimals and separators | \`{{ 1250000 \\| number:0 }}\` |\n| \`filter\` | search or select rows | \`{{ rows \\| filter:'riya' }}\` |\n| \`orderBy\` | sort rows | \`{{ rows \\| orderBy:'marks' }}\` |\n| \`limitTo\` | take the first n | \`{{ rows \\| limitTo:5 }}\` |\n| \`json\` | debug output | \`{{ obj \\| json }}\` |\n\nFilters chain left to right, and a custom one is registered like any other service:\n\`\`\`js\n.filter('percent', function () {\n  return function (value, decimals) {\n    if (isNaN(value)) return '—';\n    return (value * 100).toFixed(decimals || 1) + '%';\n  };\n})\n\`\`\`\n\`\`\`html\n<p>{{ 0.8734 | percent:2 }}</p>   <!-- 87.34% -->\n\`\`\`\n\n**A custom directive**\n\`\`\`js\n.directive('marksBadge', function () {\n  return {\n    restrict: 'E',                 // E element, A attribute, C class, M comment\n    scope: { value: '=', max: '@' },   // isolated scope, two-way and string bindings\n    template: '<span class="badge" ng-class="cls()">{{ value }} / {{ max }}</span>',\n    link(scope) {\n      scope.cls = function () {\n        return scope.value >= 60 ? 'pass' : 'fail';\n      };\n    },\n  };\n})\n\`\`\`\n\`\`\`html\n<marks-badge value="s.marks" max="100"></marks-badge>\n\`\`\`\n\n**The parts of a definition object**\n1. \`restrict\` — how the directive is used: \`E\` element, \`A\` attribute, \`C\` class, \`M\` comment (default \`EA\`).\n2. \`scope\` — \`{ value: '=' }\` for two-way, \`'@'\` for a string, \`'&'\` for a function; an isolated scope keeps the widget independent of the page.\n3. \`template\` or \`templateUrl\` — the markup it renders.\n4. \`link(scope, element, attrs)\` — the logic that runs after the template is compiled.\n\n**Exam line:** filters format with a pipe and chain left to right; a directive returns a definition object with restrict, scope, template and link — and it can be a custom element.`,
              diagram: `wt5-expressions`,
              diagramCaption:
                `AngularJS filters with chaining, a custom percent filter, and a custom directive with an isolated scope.`,
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
                `Explain the Next.js App Router — the \`app\` directory, \`layout.js\`, \`page.js\`, dynamic segments, loading and error files, and how server and client components differ.`,
              explain:
                `**What is being asked.** The modern Next.js routing model.\n\n**Structure.** \`app/page.js\`, \`app/layout.js\` (root, required), nested layouts, \`app/blog/[slug]/page.js\`, \`loading.js\`, \`error.js\`, \`not-found.js\`, route groups \`(marketing)\`.\n\n**Server vs client components.** Server components are the default, run on the server, cannot use state or effects; \`'use client'\` marks an interactive component.\n\n**How to score the 6 marks.** Folder-to-route mapping (2) · layout, loading and error files (2) · server versus client components (2).`,
              answer:
                `In the App Router the **folder structure is the route table**, and every folder can supply a page, a layout and the states around them.\n\n**The \`app\` directory**\n\`\`\`\napp/\n  layout.js                 → root layout: <html>, <body>, fonts, providers (required)\n  page.js                   → /\n  about/page.js             → /about\n  courses/\n    layout.js               → applies to everything under /courses\n    page.js                 → /courses\n    [slug]/\n      page.js               → /courses/php  (dynamic segment)\n      loading.js            → skeleton while the page loads\n      error.js              → error boundary for this segment\n      not-found.js          → 404 for this segment\n  (marketing)/pricing/page.js → /pricing  (the group name is not in the URL)\n  api/students/route.js     → /api/students  (an API route)\n\`\`\`\n\n**Layout, page and the state files**\n\`\`\`jsx\n// app/layout.js — rendered once, wraps every page\nimport './globals.css';\n\nexport const metadata = { title: 'MCA Portal', description: 'Results and notices' };\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang="en">\n      <body>\n        <header>MCA Portal</header>\n        {children}\n        <footer>© 2026</footer>\n      </body>\n    </html>\n  );\n}\n\`\`\`\n\`\`\`jsx\n// app/courses/[slug]/page.js\nexport default async function Course({ params }) {\n  const res = await fetch(\`https://api.example.com/courses/\${params.slug}\`);\n  if (!res.ok) notFound();\n  const course = await res.json();\n  return <h1>{course.title}</h1>;\n}\n\`\`\`\n\`\`\`jsx\n// app/courses/[slug]/loading.js\nexport default function Loading() { return <p>Loading course…</p>; }\n\n// app/courses/[slug]/error.js  — must be a client component\nexport default function Error({ error, reset }) {\n  return (<div><p>Could not load: {error.message}</p><button onClick={reset}>Retry</button></div>);\n}\n\`\`\`\nA \`layout.js\` wraps its segment **and all its children**, and it does not re-render on navigation inside that segment — which is what makes a persistent sidebar or player possible.\n\n**Server components versus client components**\n\n| Point | Server component (default) | Client component (\`'use client'\`) |\n|---|---|---|\n| Runs | on the server, HTML is sent | in the browser, then hydrated |\n| State and effects | not allowed | \`useState\`, \`useEffect\` allowed |\n| Data access | can query the database or fetch directly | must call an API |\n| Bundle size | sends no JavaScript | adds to the bundle |\n| Events | no \`onClick\` | \`onClick\` and other handlers |\n\n\`\`\`jsx\n'use client';\nimport { useState } from 'react';\n\nexport default function SearchBox() {\n  const [q, setQ] = useState('');\n  return <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search courses" />;\n}\n\`\`\`\nThe rule to state: **push \`'use client'\` down the tree** — a server page can render a small client widget, which keeps the bundle small.\n\n**Exam line:** a folder is a route, \`layout.js\` wraps and persists, \`page.js\` renders, \`loading\`/\`error\`/\`not-found\` handle the states — and a component is server-side unless it says \`'use client'\`.`,
              diagram: `wt5-nextjs-features`,
              diagramCaption:
                `The Next.js App Router — the app directory, page and layout files, dynamic segments, and server versus client components.`,
            },
            {
              marks: 4,
              label: `b`,
              question:
                `Compare AngularJS and Next.js for a new project on six points, and state which you would choose for a public content site and which for an internal dashboard.`,
              explain:
                `**What is being asked.** Two very different tools, compared honestly, then a recommendation.\n\n**Points.** Era and support status, rendering, language, structure, data flow, ecosystem, learning curve, SEO.\n\n**Recommendation.** A public content site needs SEO and first paint → Next.js. An internal dashboard behind a login, already written in AngularJS, can stay — but new work should use Angular/React.\n\n**How to score the 4 marks.** Six comparison points (2.5) · the two recommendations with a reason (1.5).`,
              answer:
                `They belong to different generations: AngularJS is a 2010-era client-side framework at end of life, Next.js is a current React framework with server rendering.\n\n| Point | AngularJS (1.x) | Next.js |\n|---|---|---|\n| Status | end of support since January 2022 | actively developed |\n| Rendering | client only — an empty shell, then JavaScript | server, static or incremental, plus client hydration |\n| Language | JavaScript with its own template syntax | JavaScript or TypeScript with JSX |\n| Structure | modules, controllers, \`$scope\`, DI | files and folders as routes, components, server functions |\n| Data flow | two-way binding and \`$digest\` | one-way props and state, server data fetching |\n| SEO | weak — content arrives after JavaScript | strong — the HTML is rendered before it is sent |\n| Ecosystem | legacy, migration only | large — React ecosystem, Vercel, image and font tooling |\n| Learning | many concepts, dated patterns | modern React plus routing and rendering modes |\n\n**The two recommendations**\n1. **A public content site** (college website, catalogue, blog) → **Next.js**, because the page must be indexed and must paint fast; static generation plus metadata is the whole reason the framework exists.\n2. **An internal dashboard** already built in AngularJS → keep it running, but do not start new work on it: either it stays as a maintenance-only application, or it is migrated to Angular or React. If the dashboard is new, build it in Angular or Next.js with client-side data fetching rather than in AngularJS.\n\n**The one-line justification to write.** Choose by **who consumes the page**: a search engine needs rendered HTML (Next.js), a logged-in user needs an application shell (either, but a supported framework).\n\n**Exam line:** AngularJS is a legacy client-side framework with two-way binding; Next.js renders on the server and is current — pick Next.js for public content, and keep AngularJS only as maintenance.`,
              diagram: `wt5-frameworks`,
              diagramCaption:
                `AngularJS versus Next.js on status, rendering, language, structure, SEO and ecosystem, with a recommendation for each project type.`,
            },
          ],
        },
      ],
    },
  ],
};
