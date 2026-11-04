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
| Software Testing & QA | STQA | 2 | 21 | Live |
| Data Science | DS | 1 | 12 | Live — Unit I |
| Web Technology | WT | 2 | 34 | Live — Unit I (HTML/XML) + Unit II (JavaScript) |

**Data Science (Unit I — Fundamentals of Data Science)** has 12 topics: importance of data science,
types of data (structured / semi-structured / unstructured), scales of measurement (nominal, ordinal,
interval, ratio), data formats (CSV, JSON, XML, SQL tables), big data vs data science, the data
science life cycle, process models (CRISP-DM, TDSP, SEMMA), applications across 10 domains, the
distinction between data science, BI, statistics, ML and AI, machine learning & artificial
intelligence (AI ⊃ ML ⊃ DL, the three learning types, the 6-step training loop), roles in a data
science team (data analyst, data scientist, data engineer, ML engineer), and the importance of
mathematical statistics (descriptive, probability, inference, regression).

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

Curated exam-question banks: BI 10 · Cyber Security 32 · STQA 8 · Data Science 24 · Web Technology 40 (114 total).

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
│   ├── dataScienceUnit1b.js / dataScienceUnit1c.js
│   ├── webTechnology.js / 2 / 3 / 4   # Web Technology Unit I (HTML + XML)
│   ├── webTechnology5.js / 6  # Web Technology Unit II (JavaScript)
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
