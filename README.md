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
| Data Science | DS | 1 | 9 | Live — Unit I |
| Web Technology | WT | — | — | Coming soon |

**Data Science (Unit I — Fundamentals of Data Science)** has 9 topics: importance of data science,
types of data (structured / semi-structured / unstructured), scales of measurement (nominal, ordinal,
interval, ratio), data formats (CSV, JSON, XML, SQL tables), big data vs data science, the data
science life cycle, process models (CRISP-DM, TDSP, SEMMA), applications across 10 domains, and the
distinction between data science, BI, statistics, ML and AI.

Curated exam-question banks: BI 10 · Cyber Security 32 · STQA 8 · Data Science 16 (66 total).

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
│   ├── ImportantExamQuestions.jsx
│   ├── Sidebar.jsx            # shared subject → unit → topic navigation
│   ├── Icons.jsx              # stroke icon set
│   └── Diagrams.jsx           # <Diagram type="…" /> switch over all diagrams
│       ├── CyberDiagrams.jsx
│       ├── SoftwareTestingDiagrams.jsx
│       └── DataScienceDiagrams.jsx
├── data/
│   ├── topics.js              # subjects + units (BI / Cyber / STQA)
│   ├── dataScience.js         # Data Science units (imported into topics.js)
│   ├── importantQuestions.js  # curated exam banks (merges subject modules)
│   └── dataScienceQuestions.js
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
