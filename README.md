# MCA Study Companion · Hinglish Notes

A single-page study app for MCA exam preparation. Every subject is written in **simple Hinglish**,
with the **official English definition**, animated SVG diagrams and **6-mark exam questions with
full answers**.

Built with React 19 + Vite. No backend, no database — all content lives in JS data files, so
adding a topic is just adding an object.

## Subjects & content

| Subject | Code | Units | Topics | Status |
|---|---|---|---|---|
| Business Intelligence | BI | 1 | 8 | Live |
| Cyber Security | CYS | 2 | 47 | Live |
| Software Testing & QA | STQA | 5 | 64 | Live |
| Data Science | DS | 2 | 25 | Live — Units I–II |
| Web Technology | WT | 3 | 50 | Live — Unit I (HTML/XML) + Unit II (JavaScript) + Unit III (PHP) |

**Data Science (Unit I — Fundamentals of Data Science)** has 12 topics: importance of data science,
types of data (structured / semi-structured / unstructured), scales of measurement (nominal, ordinal,
interval, ratio), data formats (CSV, JSON, XML, SQL tables), big data vs data science, the data
science life cycle, process models (CRISP-DM, TDSP, SEMMA), applications across 10 domains, the
distinction between data science, BI, statistics, ML and AI, machine learning & artificial
intelligence (AI ⊃ ML ⊃ DL, the three learning types, the 6-step training loop), roles in a data
science team (data analyst, data scientist, data engineer, ML engineer), and the importance of
mathematical statistics (descriptive, probability, inference, regression).

**Data Science (Unit II — Data Pre-processing and Data Warehouse)** has 13 topics in two halves.
*Pre-processing:* introduction to data pre-processing (the four techniques, why analysts spend 60–80%
of their time here, GIGO), the need for pre-processing (incomplete, noisy, inconsistent and redundant
data and the chain reaction from wrong input to wrong decision), data cleaning (missing-value
imputation, noise handling by binning/regression/clustering, the IQR and z-score outlier rules,
duplicates and standardisation), data integration (schema matching, entity resolution, redundancy
via correlation and chi-square, value conflicts and lineage), data transformation (min-max and
z-score formulas, decimal scaling, one-hot vs label encoding, discretisation and concept hierarchies,
smoothing, aggregation and attribute construction) and data reduction (feature selection vs PCA,
sampling and numerosity reduction, lossless/lossy compression and leakage care). *Warehouse:* data
warehouse and its characteristics (Inmon's subject-oriented, integrated, time-variant and
non-volatile model, with an OLTP comparison), the three-tier warehouse architecture (sources,
staging, ETL, central warehouse, metadata, data marts, BI tools, top-down vs bottom-up), the ETL
process (full/incremental/CDC extraction, transformation rules, load strategies, SCD types 1–3,
ETL vs ELT and data-quality checks), fact and dimension tables (measures vs context, grain, fact
types), the star schema, the snowflake schema (normalised dimensions and the star-vs-snowflake
trade-off) and OLAP vs OLTP (the eight-point comparison, the five OLAP operations roll-up,
drill-down, slice, dice and pivot, and ROLAP/MOLAP/HOLAP).

**Web Technology (Unit I — HTML and XML)** has 19 topics: introduction to web technology, internet
and WWW, web servers, website planning and design issues, structure of an HTML document, headings /
paragraphs / line breaks, colours and fonts, links, frames, lists, tables, images, forms, HTML vs
HTML5, CSS (style sheets, three insertion methods, selectors), and the XML half — introduction to
XML with its features and applications, XML components (elements, attributes, comments, CDATA),
DTD and XML Schema validation, XML namespaces, and XSLT transformation. Every topic ships real code
with its **live browser output** rendered in a sandboxed iframe, so the code and the result sit side
by side; concepts that are not visual (architecture, servers, planning, structures, XML trees,
validation, transformation pipelines) carry an SVG diagram.

**Web Technology (Unit II — JavaScript)** has 15 topics: overview of JavaScript (need, applications,
advantages, limitations), using JS in HTML (embedded, external `.js` with `defer`/`async`, inline
handlers), variables and data types (`var`/`let`/`const`, the 7 primitives, `typeof`, coercion),
control structures (`if…else if…else`, `switch…case` with fall-through), loop controls (`for`,
`while`, `do…while`, `break`/`continue`), functions with dialog boxes (`alert`, `confirm`, `prompt`)
and page redirect (`location.href` vs `location.replace`), cookies (`document.cookie`, attributes,
session vs persistent), events (bubbling/capturing, delegation, `preventDefault` vs
`stopPropagation`), objects (literal, constructor, `this`, `Object.keys`, JSON), Number & Math,
String methods, Array methods (`push`…`reduce`), Date with the newer Temporal API, and asynchronous
JavaScript (`setTimeout`, callbacks, promises, `async/await`, the `1 4 3 2` event-loop order). Unit II
closes with an introduction to **Bootstrap** (need, advantages, CDN setup, 12-column grid).
These previews are **not screenshots** — the iframe runs the script with `allow-scripts`, so the
counters, tables, calculators, array operations, live clock and prompts really execute, and a thrown
error is printed inside the preview.

**Web Technology (Unit III — PHP)** has 16 topics: what PHP is (definition, history, features, the
client→server→engine→database request flow and why only HTML reaches the browser), PHP variables
(`$` naming rules, loose typing, the 8 data types with `var_dump`, local/global/static scope,
constants and the superglobals), operators (all six groups, `==` vs `===`, `.` vs `+` and operator
precedence), taking user input and generating output (GET vs POST, `$_GET`/`$_POST`, validation with
`filter_var`, escaping with `htmlspecialchars` and the XSS trap), formatting (`printf`/`sprintf`
format specifiers such as `%05.2f`, `number_format`, `round`/`str_pad`), string library functions
(`strlen` → `str_replace`, `explode`/`implode`, PHP 8's `str_contains` family and the `mb_*`
multibyte note), array fundamentals and single-dimensional arrays (keys, `foreach`, `sort`,
`in_array`, the `unset()` key gap), and multidimensional + associative arrays (2D tables, nested
`foreach`, `"key" => value`, `ksort`/`asort`, records as arrays of associative arrays), the array
library grouped by purpose (`array_push` → `array_map`/`array_filter`/`array_column`, and the
`sort`/`asort`/`ksort` key rules), dates and times (`date()` format characters, `time()`, `mktime()`,
`strtotime()`, the `DateTime` class and timezones), functions and user-defined functions (parameters,
defaults, variadic, by-reference, `static`, closures, arrow functions, recursion), object-oriented PHP
(class/object, `__construct`, `$this`, access modifiers, inheritance and overriding, abstract classes
vs interfaces, the four pillars), file handling (`fopen` modes, `fwrite`/`fgets`/`fclose`, the
`file_get_contents` shortcuts and a safe upload with `$_FILES` + `move_uploaded_file`), cookies and
sessions (`setcookie`/`$_COOKIE` vs `session_start()`/`$_SESSION`, the login→logout cycle), forms
handling and validation (pipeline, validation rules, sticky forms, POST/Redirect/GET), and an
introduction to **CodeIgniter** (MVC, request flow, controller/model/view, folder structure).

**Software Testing & QA (Unit IV — Testing Strategies)** has 13 topics in three groups. *Testing
levels:* integration testing (big bang, top-down with stubs, bottom-up with drivers, sandwich) and
system & acceptance testing (UAT, alpha, beta, contractual, regulatory, operational). *Testing
approaches:* scenario testing (end-to-end user journeys), performance testing (load, stress, spike,
endurance, volume, scalability and the response-time vs users knee curve), regression testing
(smoke → retest → regression, retest-all / selective / prioritised) and ad hoc testing (exploratory
sessions, error guessing, monkey and gorilla testing). *Specialised testing:* usability &
accessibility (ISO 9241-11 plus WCAG POUR at levels A/AA/AAA), GUI testing (layout, controls,
navigation, validation, visual regression), validation testing (verification vs validation),
specification based testing (decision tables, cause-effect, state models, grammar), testing object
oriented software (encapsulation, inheritance, polymorphism, MM paths, class levels), testing web
based applications (3 tiers, 8 dimensions) and database testing (schema, constraints, triggers,
ACID, data integrity, migration).

**Software Testing & QA (Unit III — Software Testing Techniques)** has 13 topics in two halves.
*White-box:* static testing (human reviews — informal, walkthrough, technical review, Fagan
inspection — and tool based static analysis: linters, style checkers, SAST, metrics), structural
testing at unit level (independent paths, stubs/drivers, AAA), code coverage (statement → branch →
condition → path → MC/DC, coverage % formula, why 100% is not bug-free), code complexity (cyclomatic
complexity `V(G) = E − N + 2P`, basis path testing, Halstead, cognitive complexity) and mutation
testing (mutants, killed/survived/equivalent, mutation score). *Black-box:* requirement based
testing with the RTM, positive vs negative testing, boundary value analysis (`a−1, a, a+1, nominal,
b−1, b, b+1`), equivalence partitioning, state transition / graph based testing (state, transition
and path coverage plus invalid transitions), compatibility testing (backward/forward, cross-browser,
device, network, matrix), user documentation testing (accuracy, completeness, clarity, consistency,
usability, currency) and domain testing with its closure, shift, missing and extra boundary errors.

PHP cannot execute in a browser, so these topics never fake a live preview: each one ships the code
beside a **`php 8.3 · server output`** panel that shows the exact stdout the interpreter produces,
with the caveat stated in the panel itself.

**Software Testing & QA (Unit V — Software Test Automation)** has 17 topics. *Foundations:*
introduction to automation (pipeline, test pyramid, when to automate vs when not to), skills needed
for automation (programming, DOM/locators, framework design, Git, CI/CD, API + DB, debugging, domain
thinking), scope of automation (frequency, stability, criticality, ROI with a break-even calculation),
design and architecture for automation (layered design — data → scripts → page objects → utilities →
driver/runner — plus linear, modular, data driven, keyword driven, hybrid and BDD, and the Page Object
Model), requirements for a test tool (8 criteria, pilot evaluation, total cost of ownership), and
challenges in automation (flaky tests with the `0.99^100 ≈ 37%` math, maintenance, cost, dynamic
elements, skill gap, false confidence). *Process:* bug tracking and debugging (defect life cycle,
5-part bug report, logs/breakpoints/binary search/`git bisect`/layer isolation), manual vs automated
testing (8-point table and the right mix), UI automation tools (Cypress in-browser, TestCafe proxy
based with no WebDriver, Protractor legacy Angular), and three automation case studies (e-commerce,
banking, SaaS) with measured results. *Selenium:* introduction and the 2004→2021 history (Core → IDE
→ RC → Grid → WebDriver merge → Selenium 3 → Selenium 4), the tool suite (IDE, WebDriver, Grid,
Manager, language bindings, legacy RC), Selenium IDE (record & playback, `.side`, assert vs verify,
why not for production), Selenium RC (JS-injection architecture and why it was removed), Selenium
WebDriver (W3C protocol, driver binary, 8 locators, implicit/explicit/fluent waits), Selenium Grid
(hub/router + nodes, capabilities, parallel test design) and test design considerations
(independent atomic tests, stable locators, condition waits, test data, meaningful assertions).

Curated exam-question banks: BI 10 · Cyber Security 32 · STQA 51 · Data Science 37 · Web Technology 88 (218 total).

Landing rule: opening the site (no hash, `#` or `#/`) always shows the **home page** first —
the router writes an explicit `#/` with `replaceState`, no subject is pre-selected in the sidebar, and a
Home button sits above the subject list so "back to home" is one click from anywhere.

Mobile-first details: diagrams swipe horizontally inside their card (instead of being clipped),
answer tables scroll instead of overflowing, comparison tables restack below 820 px with their
column names, and the topic header buttons wrap on narrow screens.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run lint
```

## Project structure

```
src/
├── App.jsx                    # hash router (#/, #/subject/:id, .../topic/:tid, .../exam)
│                              # + Home, SubjectCard, UnitPage
├── components/
│   ├── TopicPage.jsx          # topic reader: renders every section type
│   ├── CodeBlock.jsx          # syntax highlighting + copy (html/css/xml/dtd/xsd/xslt)
│   ├── OutputPreview.jsx      # sandboxed iframe that runs the code's output
│   ├── ExamAnswer.jsx         # **bold**, pipe tables and fenced code in answers
│   ├── PhpOutput.jsx         # server-output panel for PHP (no fake preview)
│   ├── ImportantExamQuestions.jsx
│   ├── Sidebar.jsx            # shared subject → unit → topic navigation
│   ├── Icons.jsx              # stroke icon set
│   └── Diagrams.jsx           # <Diagram type="…" /> switch over all diagrams
│       ├── CyberDiagrams.jsx
│       ├── SoftwareTestingDiagrams.jsx
│       ├── DataScienceDiagrams.jsx
│       └── WebDiagrams.jsx
├── data/
│   ├── topics.js              # subjects + units (BI / Cyber / STQA / DS / WT)
│   ├── dataScience.js         # Data Science units (imported into topics.js)
│   ├── softwareTesting3.js    # STQA Unit III (Software Testing Techniques)
│   ├── softwareTesting4.js    # STQA Unit IV (Testing Strategies)
│   ├── softwareTesting5.js    # STQA Unit V (Software Test Automation)
│   ├── dataScienceUnit1b.js / dataScienceUnit1c.js
│   ├── dataScience2.js        # Data Science Unit II (pre-processing + warehouse)
│   ├── webTechnology.js / 2 / 3 / 4   # Web Technology Unit I (HTML + XML)
│   ├── webTechnology5.js / 6  # Web Technology Unit II (JavaScript)
│   ├── webTechnology7.js / 8  # Web Technology Unit III (PHP — 3.1 to 3.8)
│   ├── webTechnology9.js / 10 # Web Technology Unit III (PHP — 3.9 to 3.16)
│   ├── importantQuestions.js  # curated exam banks (merges subject modules)
│   ├── dataScienceQuestions.js
│   └── webTechnologyQuestions.js
└── utils/
    ├── progress.js            # completed topics in localStorage
    └── navigation.js          # hash navigation helper
```

## Content format

A subject lives in `src/data/*.js` and is registered in `topics.js` (`units[subjectId]`).

```js
{
  id, number, title, subtitle, icon, accent,
  englishDefinition,
  intro,
  sections: [
    { type: 'definition', kicker, title, body, body2, chips },
    { type: 'cards',      kicker, title, cards: [{ icon, title, body }] },
    { type: 'points',     kicker, title, points: ['…'] },
    { type: 'diagram',    kicker, title, diagram: 'diagram-type', caption },
    { type: 'image',      kicker, title, images: [{ src, caption }] },
    { type: 'example',    kicker, title, body },
    { type: 'comparison', kicker, title, columns, columnColors, rows: [{ label, values, colors }] },
    { type: 'recap',      kicker, title, points: ['…'] },
  ],
  examQuestions: [{ question, answer /* supports **bold** */ }],
}
```

New diagram types are added as exported SVG components and registered in the `Diagram` switch in
`components/Diagrams.jsx`.
