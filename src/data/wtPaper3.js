// Web Technology Paper 3 — Model Paper (5 + 5 division)
//
// Topic map (all different from Papers 1, 2 and 4):
//   Unit 1 — 1.9 frames and layout, 1.18 DTD vs XML Schema, 1.19 namespaces and XSLT,
//            1.6 block and inline elements (headings, paragraphs, line break)
//   Unit 2 — 2.9 JavaScript objects, 2.11 string properties and methods,
//            2.10 Number and Math objects, 2.14 asynchronous JavaScript
//   Unit 3 — 3.11 functions and user-defined functions, 3.12 dates and times,
//            3.13 file handling, 3.14 object oriented programming in PHP
//   Unit 4 — 4.9 cookies, 4.10 Response.Redirect vs Server.Transfer,
//            4.13 validation controls, 4.14 basic security concepts
//   Unit 5 — 5.4 advantages of AngularJS, 5.6 applications of AngularJS,
//            5.9 forms and two-way data binding, 5.10 validation directives

export const wtPaper3 = {
  id: `wt-paper-3`,
  number: 3,
  name: `Paper 3`,
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
                `Explain frames in HTML — \`frameset\` versus \`iframe\` — with an example of each, and state why framesets are obsolete.`,
              explain:
                `**What is being asked.** The old frame layout and the modern inline frame, with the reason one was dropped.\n\n**frameset.** Divides the window into rows or columns; each frame loads its own document; needs \`noresize\`, \`target\` in links, and a \`noframes\` fallback. Not allowed in HTML5.\n\n**iframe.** An inline frame inside a normal document; still standard, used for embedded maps, videos and third-party widgets; sandboxed with the \`sandbox\` attribute.\n\n**How to score the 5 marks.** frameset with an example (2) · iframe with an example (1.5) · why framesets were dropped (1.5).`,
              answer:
                `Both divide a page into separate documents, but only one of them is still allowed in HTML5.\n\n**1. \`frameset\`** — replaces \`<body>\` and splits the window.\n\`\`\`html\n<frameset rows="80,*" cols="*">\n  <frame src="header.html" name="top" noresize />\n  <frameset cols="200,*">\n    <frame src="menu.html" name="menu" />\n    <frame src="content.html" name="main" />\n  </frameset>\n  <noframes>This site needs a browser that supports frames.</noframes>\n</frameset>\n\`\`\`\nEach frame is a full document, and a link in the menu must name its target:\n\`\`\`html\n<a href="result.html" target="main">Results</a>\n\`\`\`\n\n**2. \`iframe\`** — an inline frame inside a normal page.\n\`\`\`html\n<iframe src="https://maps.example.com/embed/pune"\n        width="600" height="360"\n        title="Campus location"\n        loading="lazy"\n        sandbox="allow-scripts"\n        referrerpolicy="no-referrer"></iframe>\n\`\`\`\n\n| Point | \`frameset\` | \`iframe\` |\n|---|---|---|\n| Position | replaces the whole window | anywhere inside \`<body>\` |\n| HTML5 status | **obsolete, not supported** | valid and widely used |\n| Use | fixed multi-pane layout | embedded map, video, payment widget |\n| Printing and bookmarking | one URL, many documents — confusing | the outer page keeps its own URL |\n| Accessibility | poor; screen readers lose context | needs a \`title\` attribute |\n| Security | not applicable | \`sandbox\` and \`allow\` control the embed |\n\n**Why the frameset was dropped**\n1. **Broken navigation** — the address bar does not change, so bookmark, refresh and the back button all behave unpredictably.\n2. **Multiple scrollbars and printing** — one page becomes several scrollable documents.\n3. **Accessibility** — a screen reader cannot tell which frame belongs to which context.\n4. **Server load** — each frame is a separate request, and the same menu is downloaded again.\n5. **CSS and responsive layout replaced it** — a fixed grid, \`position:sticky\` and flexbox achieve the same panes on one document.\n\n**The modern replacement.** A single document with a \`<header>\`, a \`<nav>\` and a \`<main>\` styled by CSS grid gives the same visual result with one URL, one scrollbar and no accessibility loss.\n\n**Exam line:** \`frameset\` splits the window and is dead; \`iframe\` embeds one document inside another and is alive — with \`sandbox\` for safety.`,
              diagram: `frames-layout`,
              diagramCaption:
                `Frames in HTML — frameset rows and columns versus an inline iframe, and why framesets are obsolete.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Compare DTD and XML Schema on six points, and write a small DTD and an XSD that both allow a \`student\` element with a \`name\` and a \`sem\`.`,
              explain:
                `**What is being asked.** Both describe a valid document, but they differ in syntax, typing and power.\n\n**DTD.** Its own non-XML syntax; element and attribute declarations; \`#PCDATA\`, \`#REQUIRED\`; sequences \`(a, b)\`; occurrence \`*\`, \`+\`, \`?\`; no data types apart from text.\n\n**XSD.** Written in XML; data types (xs:integer, xs:date, xs:decimal), facets (minLength, pattern, minInclusive), namespaces, complex and simple types, keys.\n\n**How to score the 5 marks.** Six comparison points (3) · a working DTD (1) · a working XSD (1).`,
              answer:
                `Both are used to validate an XML document; the DTD is older and simpler, the XSD is newer and typed.\n\n| Point | DTD | XML Schema (XSD) |\n|---|---|---|\n| Syntax | its own notation, not XML | XML itself, so it can be parsed by any XML tool |\n| Data types | text only (\`#PCDATA\`) | rich: \`xs:integer\`, \`xs:date\`, \`xs:decimal\`, \`xs:boolean\` |\n| Constraints | cannot restrict a value | facets: \`minInclusive\`, \`maxLength\`, \`pattern\`, \`enumeration\` |\n| Namespaces | not supported | fully supported |\n| Data model | elements and attributes | elements, attributes, complex/simple types, groups, keys |\n| Tool support | limited, legacy | schema-aware editors, validators, code generators |\n| Extensibility | none | can import and reuse other schemas |\n| Difficulty | easier to write | more verbose, steeper learning curve |\n\n**DTD**\n\`\`\`dtd\n<!ELEMENT students (student+)>\n<!ELEMENT student (name, sem)>\n<!ELEMENT name (#PCDATA)>\n<!ELEMENT sem (#PCDATA)>\n<!ATTLIST student id CDATA #REQUIRED>\n\`\`\`\n\n**XSD**\n\`\`\`xml\n<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n  <xs:element name="students">\n    <xs:complexType>\n      <xs:sequence>\n        <xs:element name="student" maxOccurs="unbounded">\n          <xs:complexType>\n            <xs:sequence>\n              <xs:element name="name" type="xs:string" />\n              <xs:element name="sem">\n                <xs:simpleType>\n                  <xs:restriction base="xs:integer">\n                    <xs:minInclusive value="1" />\n                    <xs:maxInclusive value="6" />\n                  </xs:restriction>\n                </xs:simpleType>\n              </xs:element>\n            </xs:sequence>\n            <xs:attribute name="id" type="xs:string" use="required" />\n          </xs:complexType>\n        </xs:element>\n      </xs:sequence>\n    </xs:complexType>\n  </xs:element>\n</xs:schema>\n\`\`\`\n\n**The decisive difference.** The DTD can only say that \`sem\` holds text; the XSD can say it holds an integer between 1 and 6 — which is why the newer format is used wherever the value itself must be checked.\n\n**Exam line:** DTD is a non-XML grammar with no types; XSD is written in XML and can type and restrict every value.`,
              diagram: `dtd-vs-xsd`,
              diagramCaption:
                `DTD versus XML Schema compared, with both declarations for the same student element.`,
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
                `Explain XML namespaces with an example, and describe the XSLT transformation pipeline — source tree, templates, result tree.`,
              explain:
                `**What is being asked.** How two vocabularies coexist in one document, and how XSLT turns XML into HTML.\n\n**Namespaces.** \`xmlns\` (default) and \`xmlns:prefix\`; the URI is only an identifier, never fetched; attributes need a prefix.\n\n**XSLT.** \`xsl:stylesheet\`, \`xsl:template match="/"\`, \`xsl:for-each\`, \`xsl:value-of\`, \`xsl:if\`; the processor parses the source into a tree, applies templates, and writes the result tree.\n\n**How to score the 5 marks.** Namespace declaration and use (2) · XSLT template example (2) · the source → result tree statement (1).`,
              answer:
                `A namespace is a prefix that makes two elements with the same name distinguishable; XSLT is the language that turns one XML vocabulary into another.\n\n**Namespaces**\n\`\`\`xml\n<library xmlns:b="http://example.com/book"\n         xmlns:m="http://example.com/member">\n  <b:item id="B1">\n    <b:title>Web Technology</b:title>\n  </b:item>\n  <m:item id="M7">\n    <m:name>Riya Sharma</m:name>\n  </m:item>\n</library>\n\`\`\`\n1. \`xmlns:prefix="uri"\` binds a prefix to a unique URI; a name is then qualified as \`prefix:local\`.\n2. The URI is an **identifier only** — nothing is downloaded from it; it just has to be unique.\n3. An unprefixed element falls into the **default namespace** if one is declared with \`xmlns="…"\`.\n4. **Attributes** are not in the default namespace; they must carry a prefix — \`b:id\`, not \`id\`.\n5. This is what lets a SOAP envelope contain your own data: \`<soap:Envelope><m:getResult/></soap:Envelope>\`.\n\n**The XSLT pipeline**\n\`\`\`\nXML source ──► parser ──► source tree\n                              │  templates matched\n                              ▼\n                        transform ──► result tree ──► HTML / text / XML\n\`\`\`\n\`\`\`xml\n<?xml version="1.0"?>\n<xsl:stylesheet version="1.0"\n     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\n\n  <xsl:template match="/">\n    <html><body>\n      <h2>Results</h2>\n      <table border="1">\n        <tr><th>Name</th><th>Sem</th></tr>\n        <xsl:for-each select="students/student">\n          <tr>\n            <td><xsl:value-of select="name" /></td>\n            <td><xsl:value-of select="sem" /></td>\n          </tr>\n        </xsl:for-each>\n      </table>\n    </body></html>\n  </xsl:template>\n</xsl:stylesheet>\n\`\`\`\n\n**How the processor works.** It parses the source into a tree, starts at the root template, walks the source with XPath selectors, and writes the result tree — which is then serialised as HTML. The link between the two files is the stylesheet instruction:\n\`\`\`xml\n<?xml-stylesheet type="text/xsl" href="result.xsl"?>\n\`\`\`\n\n**Exam line:** \`xmlns\` makes the names unique and is only an identifier; XSLT turns the source tree into a result tree through matching templates and XPath.`,
              diagram: `xslt-pipeline`,
              diagramCaption:
                `XML namespaces, and the XSLT pipeline from source tree through matching templates to the result tree.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain the block and inline elements of HTML — headings, paragraphs, line break, \`div\` and \`span\` — and how each behaves in normal flow.`,
              explain:
                `**What is being asked.** The two display categories and the elements the syllabus lists.\n\n**Block.** Starts on a new line, takes the full width, has height and vertical margins: \`h1\`–\`h6\`, \`p\`, \`div\`, \`ul\`, \`table\`.\n\n**Inline.** Sits in the text flow, width is the content, vertical margins do not apply: \`span\`, \`a\`, \`b\`, \`img\`, \`br\`.\n\n**How to score the 5 marks.** Block vs inline behaviour (2) · each element with its use (2) · nested example and the \`br\` warning (1).`,
              answer:
                `Every element in normal flow is either **block** (a box on its own line) or **inline** (a run inside a line of text).\n\n| Element | Category | Use |\n|---|---|---|\n| \`<h1>\` … \`<h6>\` | block | a heading; one \`<h1>\` per page, in order without skipping |\n| \`<p>\` | block | a paragraph; cannot legally contain another block element |\n| \`<div>\` | block | a generic container for layout and grouping |\n| \`<span>\` | inline | a generic run of text for styling part of a sentence |\n| \`<br>\` | inline, void | a line break **inside** a paragraph |\n| \`<hr>\` | block, void | a thematic break between sections |\n| \`<a>\`, \`<b>\`, \`<strong>\`, \`<em>\` | inline | links and emphasis inside the text |\n\n\`\`\`html\n<h1>Web Technology</h1>\n<p>\n  The exam is on <strong>Monday</strong>.<br />\n  Reporting time is 10:00 am at <span class="room">Room 204</span>.\n</p>\n<div class="notice">\n  <p>Bring your identity card.</p>\n</div>\n\`\`\`\n\n**How each behaves in normal flow**\n1. **Block elements stack** — the next block starts on a new line and the previous box takes the full width of its container.\n2. **Inline elements wrap** — text and inline elements flow and break across lines; setting \`width\` or \`height\` on them has no effect.\n3. **Vertical margins collapse** between block boxes but are ignored on inline boxes; horizontal padding and margins work on both.\n4. **\`<br>\` is not a layout tool** — using it to create spacing produces a page that cannot reflow on a phone; use margins.\n5. **\`display\` can change the category** — \`display:inline-block\` or \`flex\` turns a \`div\` into an inline-level or flex container, which is how modern layout works.\n\n**The nesting rule.** A \`<p>\` may contain inline elements only; a \`<div>\` may contain anything. Nesting a \`<div>\` inside a \`<p>\` makes the browser close the paragraph early — a common reason a layout looks wrong for no visible reason.\n\n**Exam line:** block takes the whole line and stacks, inline flows inside the text — \`div\`/\`span\` are the generic pair, and \`br\` is a line break, not a layout tool.`,
              diagram: `html-elements`,
              diagramCaption:
                `HTML headings, paragraphs and line breaks — block versus inline elements in normal flow.`,
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
                `Explain JavaScript objects — object literals, properties, methods, \`this\`, and three ways to create an object — with an example.`,
              explain:
                `**What is being asked.** The object as a collection of key–value pairs, whereas an array is keyed by index.\n\n**Creation.** Literal \`{}\`, \`new Object()\`, constructor function with \`new\`, \`Object.create()\`, \`class\`.\n\n**Members.** Property access by dot and bracket, methods, \`this\` inside a method, adding and deleting members, \`hasOwnProperty\`, \`Object.keys\`.\n\n**How to score the 5 marks.** Literal with a method (2) · \`this\` explained (1) · three creation ways (1.5) · \`Object.keys\`/delete (0.5).`,
              answer:
                `An object groups related values under named keys, and a method is simply a function stored on one of those keys.\n\n**Object literal**\n\`\`\`js\nconst student = {\n  name: 'Riya Sharma',\n  sem: 3,\n  marks: [72, 65, 88],\n\n  total() {                       // shorthand method\n    return this.marks.reduce((s, m) => s + m, 0);\n  },\n  average() {\n    return (this.total() / this.marks.length).toFixed(1);\n  },\n};\n\nconsole.log(student.name);          // Riya Sharma   (dot)\nconsole.log(student['sem']);        // 3             (bracket)\nconsole.log(student.total());       // 225\nconsole.log(student.average());     // 75.0\n\`\`\`\n\n**\`this\`** refers to the object the method was called on. \`student.total()\` makes \`this\` the student object; the same function detached into a variable loses it:\n\`\`\`js\nconst t = student.total;\n// t();   // TypeError: cannot read 'marks' of undefined\nconst bound = student.total.bind(student);   // this fixed\n\`\`\`\n\n**Three ways to create one**\n\`\`\`js\n// 1. literal — the common case\nconst a = { id: 1, name: 'WT' };\n\n// 2. constructor function with new\nfunction Course(id, name) { this.id = id; this.name = name; }\nconst b = new Course(2, 'DS');\n\n// 3. class syntax — the same thing, clearer\nclass Subject {\n  constructor(code) { this.code = code; }\n  label() { return 'Subject ' + this.code; }\n}\nconst c = new Subject('WT-301');\nconsole.log(c.label());            // Subject WT-301\n\`\`\`\n\n**Working with the members**\n\`\`\`js\nstudent.city = 'Pune';             // add\nstudent.sem = 4;                   // change\ndelete student.city;               // remove\nconsole.log(Object.keys(student)); // ['name','sem','marks','total','average']\nconsole.log('name' in student);    // true\n\`\`\`\n\n**The distinction to state.** An array is an object whose keys are indices and whose order matters; a plain object is keyed by name, so order is not guaranteed — use an array when the order matters and an object when the names do.\n\n**Exam line:** an object is a bag of named values, a method is a function on it, \`this\` is the caller — and literal, constructor or class all build the same thing.`,
              diagram: `js-objects`,
              diagramCaption:
                `JavaScript objects — literal with methods, this, three ways to create an object, and member operations.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain JavaScript string properties and methods — \`length\`, \`charAt\`, \`indexOf\`, \`slice\`, \`substring\`, \`toUpperCase\`, \`trim\`, \`split\`, \`replace\` and template literals — with output.`,
              explain:
                `**What is being asked.** Strings are immutable primitives, so every method returns a new string.\n\n**Points.** \`length\` is a property, not a method; index starts at 0; \`slice\` accepts a negative index while \`substring\` does not; \`replace\` replaces only the first match unless a regular expression with \`g\` is used; template literals interpolate with \`\${}\`.\n\n**How to score the 5 marks.** length, charAt, indexOf with output (1.5) · slice vs substring (1.5) · case, trim, split, replace (1.5) · template literal (0.5).`,
              answer:
                `A string is **immutable** — no method changes it; each one returns a new string, which is why the result must be assigned.\n\n\`\`\`js\nconst s = '  Web Technology  ';\nconsole.log(s.length);            // 20, including the spaces\nconsole.log(s.trim().length);     // 15\n\nconst t = 'JavaScript';\nconsole.log(t.charAt(4));         // S\nconsole.log(t[4]);                // S  — bracket access also works\nconsole.log(t.indexOf('S'));      // 4\nconsole.log(t.indexOf('z'));      // -1  — not found\nconsole.log(t.slice(0, 4));       // Java\nconsole.log(t.slice(-6));         // Script\nconsole.log(t.substring(4, 0));   // Java  — swaps the arguments\nconsole.log(t.toUpperCase());     // JAVASCRIPT\nconsole.log(t.toLowerCase());     // javascript\nconsole.log(t.replace('Java', 'Type'));      // TypeScript\nconsole.log('a,b,c'.split(','));  // ['a','b','c']\nconsole.log(['WT', 'DS'].join(' / '));       // WT / DS\n\`\`\`\n\n| Method | Returns | Note |\n|---|---|---|\n| \`length\` | number | a property, no brackets |\n| \`charAt(i)\` | one character | \`''\` when out of range |\n| \`indexOf(sub)\` | index or \`-1\` | compare with \`!== -1\`, never \`== -1\` vs falsy |\n| \`slice(a, b)\` | new string | negative indexes count from the end |\n| \`substring(a, b)\` | new string | negative values become 0; arguments swap if reversed |\n| \`replace(a, b)\` | new string | first match only; use \`/a/g\` for all |\n| \`split(sep)\` | array | \`''\` splits into characters |\n| \`trim()\` | new string | removes whitespace at both ends |\n| \`padStart(n, '0')\` | new string | left-pad, useful for roll numbers |\n\n**Template literals**\n\`\`\`js\nconst name = 'Riya';\nconst marks = 88;\nconsole.log(\`\${name} scored \${marks} (\${marks >= 40 ? 'pass' : 'fail'})\`);\n// Riya scored 88 (pass)\n\`\`\`\nA template literal keeps line breaks, avoids \`+\` concatenation, and allows any expression inside \`\${ }\`.\n\n**Exam line:** strings never change in place — read \`length\`, search with \`indexOf\`, cut with \`slice\` (or \`substring\`), and interpolate with backticks.`,
              diagram: `js-string`,
              diagramCaption:
                `JavaScript string length, search, slice and substring, case, trim, split and replace, with template literals.`,
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
                `Explain the JavaScript \`Number\` and \`Math\` objects — properties, rounding, random numbers and the floating-point trap — with examples.`,
              explain:
                `**What is being asked.** The numeric helpers and the two behaviours that surprise beginners.\n\n**Number.** \`MAX_SAFE_INTEGER\`, \`EPSILON\`, \`toFixed\`, \`Number.isInteger\`, \`parseInt\`/\`parseFloat\`, \`NaN\`.\n\n**Math.** \`abs\`, \`round\`, \`floor\`, \`ceil\`, \`trunc\`, \`pow\`, \`sqrt\`, \`min\`, \`max\`, \`random\`.\n\n**Traps.** \`0.1 + 0.2 !== 0.3\`; \`Math.round(-2.5)\` is \`-2\`; \`Math.random()\` never returns 1; \`NaN !== NaN\`.\n\n**How to score the 5 marks.** Number methods with output (1.5) · Math methods (2) · the floating-point and random-range points (1.5).`,
              answer:
                `JavaScript has one numeric type — \`number\` — a 64-bit float; \`Number\` holds constants and conversions, \`Math\` holds the functions.\n\n**Number**\n\`\`\`js\nconsole.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991\nconsole.log(Number('42'));              // 42\nconsole.log(parseInt('42px', 10));      // 42   — stops at the first non-digit\nconsole.log(parseFloat('3.14kg'));      // 3.14\nconsole.log(Number.isInteger(5.0));     // true\nconsole.log((97.256).toFixed(1));       // '97.3'  — returns a string\nconsole.log(Number('abc'));             // NaN\nconsole.log(NaN === NaN);               // false — test with Number.isNaN()\n\`\`\`\n\n**Math**\n\`\`\`js\nconsole.log(Math.abs(-7));        // 7\nconsole.log(Math.round(2.5));     // 3\nconsole.log(Math.round(-2.5));    // -2  — rounds toward +Infinity\nconsole.log(Math.floor(2.9));     // 2\nconsole.log(Math.ceil(2.1));      // 3\nconsole.log(Math.trunc(-2.9));    // -2  — cuts the decimals, no rounding\nconsole.log(Math.pow(2, 10));     // 1024\nconsole.log(Math.sqrt(81));       // 9\nconsole.log(Math.min(4, 9, 2));   // 2\nconsole.log(Math.max(4, 9, 2));   // 9\n\`\`\`\n\n**The random range** — \`Math.random()\` gives \`0 ≤ x < 1\`, so a range needs both ends:\n\`\`\`js\nconst roll = Math.floor(Math.random() * 6) + 1;        // 1–6\nconst otp  = Math.floor(1000 + Math.random() * 9000);  // 1000–9999\n// a random element\nconst list = ['WT', 'DS', 'PHP'];\nconsole.log(list[Math.floor(Math.random() * list.length)]);\n\`\`\`\n\n**The floating-point trap**\n\`\`\`js\nconsole.log(0.1 + 0.2);                    // 0.30000000000000004\nconsole.log(0.1 + 0.2 === 0.3);            // false\nconsole.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);  // true\nconsole.log(((0.1 + 0.2) * 10).toFixed(0)); // '0' ... so round before comparing\n\`\`\`\nBinary floating point cannot hold 0.1 exactly; money should therefore be handled in paise as integers, or rounded at the end with \`toFixed\`.\n\n**Exam line:** \`toFixed\` returns a string, \`Math.round\` rounds toward +Infinity, \`Math.random\` needs a floor and an offset — and never compare two floats with \`===\`.`,
              diagram: `js-number-math`,
              diagramCaption:
                `The Number and Math objects with output, the random range formula and the floating-point comparison trap.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain asynchronous JavaScript — \`setTimeout\`, callbacks and callback hell, promises with \`then\`/\`catch\`, and \`async\`/\`await\` — with one example of each.`,
              explain:
                `**What is being asked.** Why a single-threaded language needs asynchrony, and the three ways it has been written over time.\n\n**The problem.** A slow operation (network, timer, file) blocks the thread if written synchronously.\n\n**Evolution.** Callback → promise (states, chaining, \`catch\`) → \`async\`/\`await\` with \`try\`/\`catch\`.\n\n**Also mention.** The event loop and the microtask queue; \`Promise.all\` for parallel work.\n\n**How to score the 5 marks.** Why asynchronous (1) · callback and callback hell (1.5) · promise states and chaining (1.5) · async/await with error handling (1).`,
              answer:
                `JavaScript runs on one thread, so anything slow is handed to the browser and collected later — that is asynchrony.\n\n**1. \`setTimeout\` and the callback**\n\`\`\`js\nconsole.log('start');\nsetTimeout(() => console.log('after 2 seconds'), 2000);\nconsole.log('end');\n// start → end → after 2 seconds\n\`\`\`\n\`setTimeout\` does not pause the program; it schedules the callback and returns immediately, which is why \`end\` prints before the timer fires.\n\n**2. Callback hell** — nesting one callback inside another, and error handling repeated in every level.\n\`\`\`js\ngetUser(7, (err, user) => {\n  if (err) return handle(err);\n  getMarks(user.id, (err, marks) => {\n    if (err) return handle(err);\n    getAverage(marks, (err, avg) => {\n      if (err) return handle(err);\n      console.log(avg);          // three levels deep, three error checks\n    });\n  });\n});\n\`\`\`\n\n**3. Promises**\n\`\`\`js\nfunction getUser(id) {\n  return fetch('/api/users/' + id).then((r) => {\n    if (!r.ok) throw new Error('HTTP ' + r.status);\n    return r.json();\n  });\n}\n\ngetUser(7)\n  .then((user) => fetch('/api/marks/' + user.id))\n  .then((r) => r.json())\n  .then((marks) => console.log('average', marks.reduce((s, m) => s + m, 0) / marks.length))\n  .catch((err) => console.error('failed:', err.message))\n  .finally(() => console.log('done'));\n\`\`\`\nA promise is always in one of three states — **pending**, **fulfilled** or **rejected** — and it can be handled only once. Chaining keeps the code flat and a single \`catch\` covers every step.\n\n**4. async / await** — the same promise, written as if it were sequential.\n\`\`\`js\nasync function showAverage(id) {\n  try {\n    const user = await getUser(id);\n    const res = await fetch('/api/marks/' + user.id);\n    if (!res.ok) throw new Error('HTTP ' + res.status);\n    const marks = await res.json();\n    console.log('average', marks.reduce((s, m) => s + m, 0) / marks.length);\n  } catch (err) {\n    console.error('failed:', err.message);\n  }\n}\n\`\`\`\n\`await\` pauses only this function, not the page; the function itself returns a promise, so callers can await it in turn.\n\n**Running several in parallel**\n\`\`\`js\nconst [a, b] = await Promise.all([getUser(1), getUser(2)]);   // both at once\n\`\`\`\n\`Promise.all\` rejects as soon as any one fails; \`Promise.allSettled\` waits for all and reports each outcome.\n\n**Exam line:** callbacks nest, promises flatten and propagate errors, \`async\`/\`await\` reads like synchronous code — and \`await\` never blocks the whole page.`,
              diagram: `js-async`,
              diagramCaption:
                `Asynchronous JavaScript — setTimeout and callbacks, promise chaining with catch, and async/await with try/catch.`,
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
                `Explain user-defined functions in PHP — declaration, parameters, default and variadic arguments, return values, and the scope of variables inside a function.`,
              explain:
                `**What is being asked.** How to write a function and what it can see of the outside world.\n\n**Declaration.** \`function name($a, $b = 0) { return …; }\`; names are case-insensitive; a function cannot be redefined.\n\n**Parameters.** By value (default), by reference with \`&\`, default values, variadic \`...$args\`, type declarations in PHP 7+.\n\n**Scope.** A function does not see globals unless \`global\` or \`$GLOBALS\`; \`static\` keeps a local between calls.\n\n**How to score the 5 marks.** Declaration with parameters and return (2) · by-value vs by-reference (1) · default/variadic and typed arguments (1) · scope and \`static\` (1).`,
              answer:
                `A function is declared once and called by name; everything it needs should arrive through its parameters.\n\n**Declaration and return**\n\`\`\`php\nfunction total(array $marks): int {\n    return array_sum($marks);\n}\n\nfunction average(array $marks, int $precision = 2): float {\n    if (count($marks) === 0) return 0.0;\n    return round(total($marks) / count($marks), $precision);\n}\n\necho total([72, 65, 88]);          // 225\necho average([72, 65, 88]);        // 75\necho average([72, 65, 88], 1);     // 75.0\n\`\`\`\n\n**Parameters**\n\`\`\`php\n// default value — used only when the argument is omitted\nfunction greet(string $name = 'Student'): string {\n    return "Welcome, $name";\n}\n\n// by reference — the caller's variable is changed\nfunction addFee(float &$balance, float $fee): void {\n    $balance += $fee;\n}\n\n// variadic — any number of arguments, collected into an array\nfunction sumAll(int ...$nums): int {\n    return array_sum($nums);\n}\n\n$b = 40000;\naddFee($b, 2500);\necho $b;                    // 42500\necho sumAll(1, 2, 3, 4);    // 10\n\`\`\`\n\n**Scope**\n\`\`\`php\n$rate = 0.05;\n\nfunction taxWrong($amt) { return $amt * $rate; }      // $rate is undefined here\nfunction taxRight($amt, $rate) { return $amt * $rate; }\nfunction taxGlobal($amt) { global $rate; return $amt * $rate; }\n\nfunction counter() {\n    static $n = 0;          // keeps its value between calls\n    return ++$n;\n}\necho counter(); echo counter();     // 12\n\`\`\`\n\n**The rules that earn the last marks**\n1. A function sees only its own arguments and its own locals; a global must be passed in, which is the recommended style.\n2. \`static\` variables are initialised once and survive across calls — useful for a call counter or a cache.\n3. By-reference parameters (\`&\`) are rare and should be used only when a value must be changed in place.\n4. Function names are **case-insensitive** in PHP (\`Total()\` and \`total()\` are the same), unlike variable names.\n\n**Exam line:** parameters in, one value out, no globals unless passed — and \`static\` is the only local that remembers.`,
              diagram: `php-functions`,
              diagramCaption:
                `PHP user-defined functions — declaration, default, reference and variadic parameters, and variable scope.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain date and time handling in PHP — \`date()\`, \`mktime()\`, \`strtotime()\`, \`DateTime\` and time zones — with examples of formatting and date arithmetic.`,
              explain:
                `**What is being asked.** Producing a readable date, creating a timestamp, converting a string, and doing arithmetic.\n\n**Functions.** \`time()\`, \`date($format)\`, \`mktime()\`, \`strtotime()\`, \`checkdate()\`, \`DateTime\`/\`DateInterval\`, \`setTimezone()\`.\n\n**Format characters.** \`d m Y H i s l D F\`.\n\n**Traps.** The server time zone must be set; \`strtotime\` returns \`false\` on a bad string; a timestamp is seconds since 1970-01-01 UTC.\n\n**How to score the 5 marks.** \`date()\` with format characters (1.5) · \`mktime\`/\`strtotime\` with an example (1.5) · DateTime arithmetic and time zone (2).`,
              answer:
                `PHP stores a moment as a **Unix timestamp** — the number of seconds since 1 January 1970, UTC — and formats it only when printing.\n\n**Formatting**\n\`\`\`php\ndate_default_timezone_set('Asia/Kolkata');\n\necho time();                        // 1756... seconds\necho date('d-m-Y');                 // 06-11-2026\necho date('D, d M Y');              // Fri, 06 Nov 2026\necho date('H:i:s');                 // 14:35:09\necho date('l \\\\a\\\\t h:i A');        // Friday at 02:35 PM\necho date('Y-m-d H:i:s');           // sortable, database friendly\n\`\`\`\n\n| Character | Meaning | Example |\n|---|---|---|\n| \`d\` | day, two digits | \`06\` |\n| \`m\` | month, two digits | \`11\` |\n| \`Y\` | four-digit year | \`2026\` |\n| \`H\` / \`h\` | hour 24 / 12 | \`14\` / \`02\` |\n| \`i\` / \`s\` | minutes / seconds | \`35\` / \`09\` |\n| \`D\` / \`l\` | day short / full | \`Fri\` / \`Friday\` |\n| \`M\` / \`F\` | month short / full | \`Nov\` / \`November\` |\n\n**Creating a timestamp**\n\`\`\`php\n$ts = mktime(10, 30, 0, 11, 6, 2026);   // hour, minute, second, month, day, year\necho date('d-m-Y H:i', $ts);            // 06-11-2026 10:30\n\n// from text — the usual way to read user input\n$exam = strtotime('2026-11-06 10:30:00');\necho date('l', $exam);                  // Friday\n\nvar_dump(strtotime('not a date'));      // bool(false)  — always check\n\`\`\`\n\n**Date arithmetic**\n\`\`\`php\n$start = strtotime('2026-11-06');\necho date('d-m-Y', $start + 7 * 24 * 60 * 60);   // 13-11-2026\necho date('d-m-Y', strtotime('+1 month', $start));\n\`\`\`\n\n**The object API — clearer and time-zone safe**\n\`\`\`php\n$d = new DateTime('2026-11-06 10:30', new DateTimeZone('Asia/Kolkata'));\n$d->add(new DateInterval('P10D'));\necho $d->format('d-m-Y H:i T');          // 16-11-2026 10:30 IST\n\necho $d->diff(new DateTime('2026-11-20'))->days;   // 4\n\n$d->setTimezone(new DateTimeZone('UTC'));\necho $d->format('d-m-Y H:i T');          // 16-11-2026 05:00 UTC\n\`\`\`\n\n**Dates from a form.** Use \`DateTime::createFromFormat('d/m/Y', $input)\` and check that it returned an object, and always validate with \`checkdate($m, $d, $y)\` before trusting month and day separately.\n\n**Exam line:** a timestamp is seconds since 1970 UTC, \`date()\` formats it, \`strtotime()\` reads text, and \`DateTime\` with a time zone is what handles arithmetic safely.`,
              diagram: `php-date-time`,
              diagramCaption:
                `PHP date and time — formatting with date(), timestamps from mktime and strtotime, and DateTime arithmetic.`,
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
                `Explain file handling in PHP — opening, reading, writing and closing a file, the mode string, and the shortcut functions — with one example of each.`,
              explain:
                `**What is being asked.** The open-read-write-close cycle and the helpers that skip it.\n\n**Functions.** \`fopen\` with modes \`r\`, \`w\`, \`a\`, \`r+\`; \`fread\`, \`fgets\`, \`fgetcsv\`, \`fwrite\`/\`fputs\`, \`fclose\`, \`feof\`; the shortcuts \`file_get_contents\`, \`file_put_contents\`, \`file()\`, \`unlink\`, \`file_exists\`.\n\n**Rules.** Always close; a mode decides truncation; permissions and \`../\` traversal are the security issues.\n\n**How to score the 5 marks.** Modes (1.5) · the open/read/write/close example (2) · shortcuts and one security rule (1.5).`,
              answer:
                `A file is opened with a **mode** that decides what may be done, and it must be closed when finished.\n\n| Mode | Reads | Writes | If the file exists |\n|---|---|---|---|\n| \`r\` | yes | no | opens at the start |\n| \`r+\` | yes | yes | opens, does not truncate |\n| \`w\` | no | yes | **truncates to zero** |\n| \`w+\` | yes | yes | truncates |\n| \`a\` | no | yes | appends at the end |\n| \`a+\` | yes | yes | appends, reads from the start |\n| \`x\` | no | yes | fails if it already exists |\n\n**The full cycle**\n\`\`\`php\n$path = __DIR__ . '/results.txt';\n\n// write (creates or truncates)\n$fh = fopen($path, 'w');\nif ($fh === false) { die('Cannot open file'); }\nfwrite($fh, "Riya,88\\nArjun,61\\n");\nfclose($fh);\n\n// append\n$fh = fopen($path, 'a');\nfwrite($fh, "Neha,74\\n");\nfclose($fh);\n\n// read line by line\n$fh = fopen($path, 'r');\nwhile (($line = fgets($fh)) !== false) {\n    [$name, $marks] = explode(',', trim($line));\n    echo $name . ' scored ' . $marks . "\\n";\n}\nfclose($fh);\n\`\`\`\n\n**The shortcuts — shorter and safer for small files**\n\`\`\`php\nfile_put_contents($path, "Riya,88\\n", FILE_APPEND);   // write or append\n$text = file_get_contents($path);                       // whole file as a string\n$lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);  // array of lines\n\nif (file_exists($path)) {\n    echo filesize($path) . ' bytes';\n}\nunlink($path);                                          // delete\n\`\`\`\n\n**Reading a CSV properly**\n\`\`\`php\nif (($fh = fopen($path, 'r')) !== false) {\n    while (($row = fgetcsv($fh)) !== false) {\n        print_r($row);        // ['Riya', '88']\n    }\n    fclose($fh);\n}\n\`\`\`\n\n**The security rules**\n1. **Never** build a path from user input without a whitelist — \`../../etc/passwd\` is path traversal.\n2. Check \`is_writable()\` before writing and handle the failure instead of assuming success.\n3. \`fopen\` with \`w\` destroys the file, so a wrong path silently wipes data; \`a\` is safer for a log.\n4. Uploaded files go through \`move_uploaded_file()\` and must be validated by extension and MIME type, never by the client-supplied name.\n\n**Exam line:** the mode decides read, write, truncate or append, \`fclose\` is mandatory, and a path built from user input is a security bug.`,
              diagram: `php-file-handling`,
              diagramCaption:
                `PHP file handling — the mode string, the open/read/write/close cycle, and the shortcut functions.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain object oriented programming in PHP — class, object, constructor, visibility, inheritance and interfaces — with a short example.`,
              explain:
                `**What is being asked.** The OOP vocabulary the syllabus lists, with working syntax.\n\n**Class and object.** \`class Student { }\`, \`new Student()\`, \`$this->\`.\n\n**Members.** Properties, methods, constructor \`__construct\`, destructor, \`public\`/\`protected\`/\`private\`, \`static\`, constants.\n\n**Inheritance.** \`extends\`, \`parent::__construct\`, overriding, \`abstract\`, \`interface implements\`, \`final\`.\n\n**How to score the 5 marks.** Class, object and constructor (2) · visibility (1) · inheritance with an override (1.5) · interface (0.5).`,
              answer:
                `A **class** is the definition and an **object** is one instance created from it with \`new\`.\n\n**Class, constructor, visibility**\n\`\`\`php\nclass Student\n{\n    public string $name;          // accessible everywhere\n    protected int $sem;           // this class and its children\n    private array $marks = [];    // this class only\n    public static int $count = 0; // belongs to the class, not an object\n\n    public function __construct(string $name, int $sem = 3)\n    {\n        $this->name = $name;\n        $this->sem  = $sem;\n        self::$count++;\n    }\n\n    public function addMark(int $m): void   { $this->marks[] = $m; }\n    public function total(): int            { return array_sum($this->marks); }\n    public function average(): float        { return $this->marks ? round($this->total() / count($this->marks), 2) : 0.0; }\n\n    public function __destruct() { /* close resources here */ }\n}\n\n$s = new Student('Riya Sharma');\n$s->addMark(72); $s->addMark(88);\necho $s->average();            // 80\necho Student::$count;          // 1\n\`\`\`\n\n**Inheritance**\n\`\`\`php\nclass McaStudent extends Student\n{\n    public function __construct(string $name, private string $specialisation)\n    {\n        parent::__construct($name, 3);      // run the parent constructor\n    }\n\n    public function average(): float        // override\n    {\n        return round(parent::average(), 1);\n    }\n\n    public function info(): string\n    {\n        return $this->name . ' — ' . $this->specialisation;\n    }\n}\n\n$m = new McaStudent('Arjun', 'Systems');\n$m->addMark(61);\necho $m->average();        // 61.0\necho $m->info();\n// echo $m->sem;          // Error: protected, so not reachable from outside\n\`\`\`\n\n**Abstract class and interface**\n\`\`\`php\ninterface Report\n{\n    public function summary(): string;\n}\n\nabstract class Base implements Report\n{\n    abstract public function summary(): string;      // children must implement\n    public function header(): string { return 'MCA Result'; }\n}\n\nclass MarkSheet extends Base\n{\n    public function __construct(private array $marks) {}\n    public function summary(): string { return 'Total ' . array_sum($this->marks); }\n}\n\necho (new MarkSheet([72, 88]))->summary();          // Total 160\n\`\`\`\n\n| Concept | Keyword | Meaning |\n|---|---|---|\n| encapsulation | \`private\`, \`protected\` | hide the internals, expose methods |\n| inheritance | \`extends\` | a child reuses and overrides behaviour |\n| polymorphism | method override | the same call behaves per class |\n| abstraction | \`abstract\`, \`interface\` | declare what must exist, not how |\n| static | \`self::\`, \`static\` | a member shared by all objects |\n\n**Exam line:** a class defines, \`new\` instantiates, \`__construct\` initialises, visibility hides, \`extends\` reuses — and an interface is a promise the class must keep.`,
              diagram: `php-oop`,
              diagramCaption:
                `OOP in PHP — class and object, constructor, visibility, inheritance, abstract class and interface.`,
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
                `Explain cookies in ASP.NET — creating, reading, expiring and deleting one — and state the difference between a persistent and a session cookie.`,
              explain:
                `**What is being asked.** The \`HttpCookie\` object and how it is written to the response and read from the request.\n\n**Create.** \`new HttpCookie("theme", "dark")\` with \`Expires\` or not, \`Path\`, \`Domain\`, \`Secure\`, \`HttpOnly\`, then \`Response.Cookies.Add()\`.\n\n**Read.** \`Request.Cookies["theme"]\` and a null check.\n\n**Delete.** Set the same cookie with \`Expires = DateTime.Now.AddDays(-1)\`.\n\n**Session vs persistent.** No expiry = in memory until the browser closes; with expiry = written to disk.\n\n**How to score the 5 marks.** Create and read with code (2) · expiry and delete (1.5) · persistent vs session cookie (1.5).`,
              answer:
                `A cookie in ASP.NET is an \`HttpCookie\` written into the response and read back from the request; the browser stores it and returns it with every matching request.\n\n**Create**\n\`\`\`csharp\nvar theme = new HttpCookie("theme", "dark");\ntheme.Expires = DateTime.Now.AddDays(30);   // persistent; omit for a session cookie\ntheme.Path = "/";\ntheme.Secure = true;                        // HTTPS only\ntheme.HttpOnly = true;                      // not visible to JavaScript\nResponse.Cookies.Add(theme);\n\`\`\`\n\n**Read**\n\`\`\`csharp\nHttpCookie c = Request.Cookies["theme"];\nstring theme = c != null ? c.Value : "light";    // always null-check\nlblTheme.Text = theme;\n\`\`\`\n\n**Expire and delete**\n\`\`\`csharp\n// delete — same name and path, with a date in the past\nvar dead = new HttpCookie("theme");\ndead.Expires = DateTime.Now.AddDays(-1);\ndead.Path = "/ ".Trim();\nResponse.Cookies.Add(dead);\n\`\`\`\n\n**Session versus persistent**\n\n| Point | Session cookie | Persistent cookie |\n|---|---|---|\n| \`Expires\` set | no | yes |\n| Lifetime | until the browser closes | until the date, or the user clears it |\n| Stored | in browser memory | on disk |\n| Use | a temporary preference | “remember me”, language, consent |\n\n**The rules**\n1. A cookie holds about 4 KB and travels with every request to its path, so store an ID, not a whole record.\n2. **Never** store a password or a role in a cookie — the user can read and edit it.\n3. Set \`HttpOnly\` on anything security-related so an injected script cannot read it, and \`Secure\` so it never travels over plain HTTP.\n4. A multi-value cookie is built with \`cookie.Values["k"] = "v"\` and read the same way — do not concatenate the values into one string.\n\n**Exam line:** create, set \`Expires\`, \`Response.Cookies.Add\`; read from \`Request.Cookies\` with a null check; delete by expiring it in the past.`,
              diagram: `wt4-cookies`,
              diagramCaption:
                `Cookies in ASP.NET — creating, reading and expiring one, and the difference between a session and a persistent cookie.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Compare \`Response.Redirect\` and \`Server.Transfer\` on at least five points, and state which to use after a successful form submission.`,
              explain:
                `**What is being asked.** Two ways to leave a page — one tells the browser, the other stays on the server.\n\n**Response.Redirect.** Sends a \`302\` and a \`Location\` header; the browser makes a **new request**; the URL changes; works across applications and domains; extra round trip.\n\n**Server.Transfer.** Ends the current page and runs another page's life cycle **on the same server**, without a round trip; the URL in the browser stays the old one. It is not available in ASP.NET Core.\n\n**How to score the 5 marks.** Five comparison points (3) · the mechanism of each (1) · the recommendation for a form submission (1).`,
              answer:
                `Both move control to another page, but only one of them involves the browser.\n\n| Point | \`Response.Redirect\` | \`Server.Transfer\` |\n|---|---|---|\n| Mechanism | \`302\` status plus a \`Location\` header | server-side execution of another page |\n| Round trip | yes — the browser requests again | no — the server continues |\n| Browser URL | changes to the new page | stays on the original page |\n| Target | any URL, another application or site | a page in the same application |\n| Server load | two requests | one request, less load |\n| \`Request\` values | lost unless passed in the query string | preserved; \`Request\` and session carry over |\n| Search engines | the new URL is indexed | the old URL is indexed for both pages |\n| Availability | everywhere, including ASP.NET Core | Web Forms only, removed in Core |\n\n\`\`\`csharp\n// after a successful insert\nResponse.Redirect("welcome.aspx", false);   // endResponse false + CompleteRequest\nContext.ApplicationInstance.CompleteRequest();\n\n// internal, same application, keep the URL\nServer.Transfer("detail.aspx");\n\`\`\`\n\n**After a form submission use \`Response.Redirect\`.** The pattern is **POST → Redirect → GET**: the browser ends on a \`GET\` request, so pressing refresh does not resubmit the form and duplicate the record, and the URL in the address bar can be bookmarked.\n\n**The two cautions.** \`Response.Redirect\` throws a \`ThreadAbortException\` when \`endResponse\` is \`true\`, which is why \`false\` plus \`CompleteRequest()\` is preferred. \`Server.Transfer\` keeps the original URL, so a refresh re-posts the form — which is exactly the problem the redirect solves.\n\n**Exam line:** Redirect tells the browser to go elsewhere with a new request; Transfer continues on the server with the URL unchanged — and a POST is always followed by a redirect.`,
              diagram: `wt4-transfer`,
              diagramCaption:
                `Response.Redirect versus Server.Transfer — round trip, URL behaviour and the POST-Redirect-GET pattern.`,
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
                `Explain the ASP.NET validation controls with an example, and state why server-side validation is still required when client-side validation is enabled.`,
              explain:
                `**What is being asked.** The validator family, its properties, and the reason both sides validate.\n\n**Controls.** \`RequiredFieldValidator\`, \`RangeValidator\`, \`RegularExpressionValidator\`, \`CompareValidator\`, \`CustomValidator\`, \`ValidationSummary\`.\n\n**Properties.** \`ControlToValidate\`, \`ErrorMessage\`, \`Text\`, \`Display\`, \`ValidationGroup\`, \`CausesValidation\`.\n\n**Server side.** \`Page.IsValid\`; the client check is only a courtesy and can be disabled.\n\n**How to score the 5 marks.** Four validators with purpose (2) · a working example (1.5) · why the server must re-check (1.5).`,
              answer:
                `Validation controls check user input in the browser **and** repeat the same check on the server.\n\n| Validator | Checks | Example use |\n|---|---|---|\n| \`RequiredFieldValidator\` | the control is not empty | a name, a password |\n| \`RangeValidator\` | between \`MinimumValue\` and \`MaximumValue\` | semester 1–6 |\n| \`RegularExpressionValidator\` | matches \`ValidationExpression\` | email, phone, PIN code |\n| \`CompareValidator\` | equal to another control or a type | password and confirm password |\n| \`CustomValidator\` | your own \`ServerValidate\` handler | roll number must exist in the database |\n| \`ValidationSummary\` | lists every error in one place | top-of-form message block |\n\n\`\`\`aspx\n<asp:TextBox ID="txtEmail" runat="server" />\n<asp:RequiredFieldValidator ID="rfvEmail" runat="server"\n     ControlToValidate="txtEmail" Text="*"\n     ErrorMessage="Email is required" />\n\n<asp:RegularExpressionValidator ID="revEmail" runat="server"\n     ControlToValidate="txtEmail"\n     ValidationExpression="^[^@\\s]+@[^@\\s]+\\.[a-zA-Z]{2,}$"\n     ErrorMessage="Enter a valid email" />\n\n<asp:DropDownList ID="ddlSem" runat="server">\n  <asp:ListItem>1</asp:ListItem><asp:ListItem>2</asp:ListItem>\n  <asp:ListItem>3</asp:ListItem><asp:ListItem>7</asp:ListItem>\n</asp:DropDownList>\n<asp:RangeValidator ID="rvSem" runat="server"\n     ControlToValidate="ddlSem" MinimumValue="1" MaximumValue="6"\n     Type="Integer" ErrorMessage="Semester must be 1 to 6" />\n\n<asp:ValidationSummary ID="vs" runat="server" HeaderText="Please fix:" />\n\`\`\`\n\`\`\`csharp\nprotected void btnSave_Click(object sender, EventArgs e)\n{\n    if (!Page.IsValid) return;          // the server check\n    SaveStudent(txtEmail.Text, int.Parse(ddlSem.SelectedValue));\n}\n\`\`\`\n\n**Why the server must re-check**\n1. **JavaScript can be turned off**, and the client validators are JavaScript.\n2. **The request can be forged** — a tool such as curl or Postman posts straight to the page with no browser involved.\n3. **The page can be saved and edited**, or the value changed after validation by another script.\n4. Security and data integrity are the server's responsibility; the client check exists only to save a round trip, and to be pleasant.\n\n**The detail that earns the last mark.** Set \`CausesValidation="false"\` on a Cancel or Reset button, otherwise the validators block a user who wants to leave the form.\n\n**Exam line:** validators run twice — in the browser for speed, on the server for truth — and \`Page.IsValid\` is the only check you may trust.`,
              diagram: `wt4-validation`,
              diagramCaption:
                `ASP.NET validation controls with an example form, and why Page.IsValid must still be checked on the server.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain the basic security concepts of ASP.NET — authentication and authorization, forms authentication, roles, and the four measures that protect a form or a page.`,
              explain:
                `**What is being asked.** Who the user is, what they may do, and the settings that enforce it.\n\n**Authentication vs authorization.** Identity vs permission.\n\n**Forms authentication.** \`web.config\` with \`<authentication mode="Forms">\`, \`loginUrl\`, \`timeout\`; \`FormsAuthentication.RedirectFromLoginPage\`, \`SetAuthCookie\`; membership and roles providers.\n\n**Protection measures.** Input validation, output encoding, parameterised queries, HTTPS and \`requireSSL\`, \`HttpOnly\` cookies, custom errors.\n\n**How to score the 5 marks.** Authentication vs authorization (1) · forms authentication configuration and code (2) · roles and \`Location\` authorization (1) · the protection measures (1).`,
              answer:
                `Security in a web application answers two questions: **who are you** (authentication) and **what may you do** (authorization).\n\n**Authentication and authorization**\n- Authentication: a username and password, a token, a certificate, Windows credentials.\n- Authorization: the roles and the resources those roles may reach.\n\n**Forms authentication**\n\`\`\`xml\n<system.web>\n  <authentication mode="Forms">\n    <forms loginUrl="~/Login.aspx" timeout="30" requireSSL="true" />\n  </authentication>\n  <authorization>\n    <deny users="?" />          <!-- anonymous users are refused -->\n  </authorization>\n</system.web>\n\n<location path="Admin">\n  <system.web>\n    <authorization>\n      <allow roles="Admin" />\n      <deny users="*" />\n    </authorization>\n  </system.web>\n</location>\n\`\`\`\n\`\`\`csharp\n// after checking the credentials against the database\nif (Membership.ValidateUser(txtUser.Text, txtPass.Text))\n{\n    FormsAuthentication.SetAuthCookie(txtUser.Text, false);\n    Response.Redirect(FormsAuthentication.GetRedirectUrl(txtUser.Text, false));\n}\nelse\n{\n    lblMsg.Text = "Invalid login";\n}\n\`\`\`\nThe framework writes an encrypted authentication ticket into a cookie; \`Page.User.Identity.Name\` then holds the name, and \`User.IsInRole("Admin")\` the role.\n\n**The four measures that protect a page or a form**\n1. **Validate on the server** — \`Page.IsValid\`, plus length, range and type checks; never trust the client.\n2. **Encode the output** — \`Server.HtmlEncode()\` or \`<%: %>\` before printing user text, and \`HttpUtility.HtmlAttributeEncode\` inside an attribute, which stops script injection.\n3. **Parameterise every query** — \`SqlParameter\` instead of string concatenation, which stops SQL injection.\n4. **Protect the channel and the cookie** — HTTPS with \`requireSSL="true"\`, \`HttpOnly\` and \`Secure\` on the auth cookie, and a custom error page so stack traces never reach a user.\n\n**Two details that earn marks.** \`Request.ValidateInput\` rejects a request that contains markup by default — keep it on and use \`<%: %>\` instead of switching it off. And a login page must issue a **new** authentication cookie after login, so a pre-set session ID cannot be fixed by an attacker (session fixation).\n\n**Exam line:** authentication proves identity, authorization grants permission, forms authentication does both through a configured provider — and validation, encoding, parameters and HTTPS are the four habits that keep it safe.`,
              diagram: `wt4-security`,
              diagramCaption:
                `Basic ASP.NET security — authentication versus authorization, forms authentication with roles and the four protections.`,
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
                `State the advantages of AngularJS for a web project, and the two situations where it is the wrong choice.`,
              explain:
                `**What is being asked.** The benefits, then an honest condition for each drawback.\n\n**Advantages.** Two-way binding, no manual DOM code, modular structure with DI, reusable directives, testable controllers, routing for SPAs, large ecosystem and templates, less code.\n\n**When not to use.** A very small brochure site (plain HTML and a little JS is lighter), and performance-critical pages with thousands of bindings; also AngularJS 1.x is end-of-life.\n\n**How to score the 5 marks.** Five advantages with a reason each (3.5) · the two wrong-choice cases (1.5).`,
              answer:
                `AngularJS reduces the code needed to keep a screen and its data in step — that is the source of every advantage and of its limits.\n\n**The advantages**\n1. **Two-way data binding** — \`ng-model\` keeps the input and the model synchronised, so a form needs no value-copying code.\n2. **Less DOM manipulation** — \`ng-repeat\` and \`ng-if\` replace loops of \`createElement\` and \`appendChild\`.\n3. **A structure that scales** — modules, controllers and services make a large team's code predictable and the parts independently testable.\n4. **Reusable directives** — a component such as a marks table is written once as a tag and used everywhere.\n5. **Dependency injection** — a service is requested by name, so a test can inject a fake one without touching the controller.\n6. **Routing for single-page applications** — the view changes without a reload, and the back button still works.\n7. **Two-way validation and templates** — \`form.$valid\`, \`ng-pattern\` and \`ng-required\` mean a form is declarative.\n8. **A complete toolbox** — HTTP, filters, animation, i18n and testing all come with the framework.\n\n**Where it is the wrong choice**\n1. **A small, mostly static site** — a brochure page with one menu does not need a framework: plain HTML, a little CSS and 20 lines of JavaScript load faster and are easier to maintain than a framework bootstrap.\n2. **A page with a very large number of live bindings** — each binding is a watcher, and thousands of them make the digest cycle visibly slow on a low-end phone; a virtual-DOM library such as React, or plain rendering, handles a huge table better.\n\n**The version caveat to add.** AngularJS 1.x reached end of support in January 2022; a new project should choose Angular (2+), React or Vue, and an existing AngularJS application should plan a migration.\n\n**Exam line:** binding, directives, DI, routing and tests are the wins; a tiny static page and a page with thousands of watchers are the two losses.`,
              diagram: `wt5-advantages`,
              diagramCaption:
                `The advantages of AngularJS with the reason for each, and the two situations where it is the wrong choice.`,
            },
            {
              marks: 5,
              label: `b`,
              question:
                `Explain the applications of AngularJS — name five kinds of application it suits, and describe the architecture of one real-time dashboard built with it.`,
              explain:
                `**What is being asked.** Where the framework fits, then one concrete design.\n\n**Kinds of application.** Single-page apps, real-time dashboards, CRUD admin panels, form-heavy applications, mobile web and progressive web apps, e-commerce front ends.\n\n**The dashboard.** A service polling a REST API, a controller per widget, \`ng-repeat\` for tables and charts, filters for formatting, a directive for the chart, and routing for detail pages.\n\n**How to score the 5 marks.** Five application areas with a reason (3) · the dashboard architecture (2).`,
              answer:
                `AngularJS is chosen where a screen must react to data that changes while the user is looking at it.\n\n**Where it is used**\n\n| Application | Why AngularJS fits |\n|---|---|\n| **Single-page application** | routing plus partial templates; no page reloads |\n| **Real-time dashboard** | bindings update when a polled response arrives; no manual DOM code |\n| **CRUD admin panel** | a form, a list and a detail view per entity, generated from one pattern |\n| **Form-heavy application** | validation directives and \`form.$valid\` make checks declarative |\n| **E-commerce front end** | a cart, filters and sorting all bind to the same model |\n| **Mobile web / PWA shell** | a small template set caches well and works offline |\n\n**A real-time result dashboard**\n\`\`\`\nREST API (/api/results)\n        │  $http.get every 30 s (or $interval)\n        ▼\n  ResultService  ── shared data, one cache\n        │  injected\n        ├── SummaryCtrl   → 4 KPI cards   (ng-repeat over totals)\n        ├── TableCtrl     → student table (ng-repeat + orderBy filter)\n        └── ChartCtrl     → marks chart  (<marks-chart data="vm.rows">)\n        │\n  index.html  → ng-view routes: /summary, /table, /detail/:id\n\`\`\`\n\`\`\`js\nangular.module('resultApp', ['ngRoute'])\n  .factory('ResultService', ['$http', function ($http) {\n    let cache = [];\n    return {\n      load() {\n        return $http.get('/api/results').then((r) => { cache = r.data; return cache; });\n      },\n      get() { return cache; },\n    };\n  }])\n  .controller('TableCtrl', ['$scope', 'ResultService', '$interval', function ($scope, ResultService, $interval) {\n    $scope.rows = [];\n    const refresh = () => ResultService.load().then((d) => { $scope.rows = d; });\n    refresh();\n    $interval(refresh, 30000);          // a live dashboard, refreshed every 30 s\n  }]);\n\`\`\`\n\n**Why this is a good answer.** The service holds one copy of the data, each controller owns one widget, the directive owns the drawing, and the template holds no logic — which is precisely the MVC separation the framework was designed for.\n\n**Exam line:** SPAs, dashboards, CRUD panels, form-heavy apps and store fronts — one service for data, one controller per widget, one directive per chart.`,
              diagram: `wt5-applications`,
              diagramCaption:
                `Applications of AngularJS, with the architecture of a real-time results dashboard built from services, controllers and directives.`,
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
                `Explain forms and two-way data binding in AngularJS — \`ng-model\`, form state properties, and how a value flows from input to model and back.`,
              explain:
                `**What is being asked.** The binding mechanism and the state the form exposes.\n\n**ng-model.** Binds an input to a scope property, updates on input events, supports \`ng-model-options="{debounce: 300}"\`.\n\n**Form state.** \`$pristine\`, \`$dirty\`, \`$valid\`, \`$invalid\`, \`$submitted\`, \`$error\`, and the same flags per control; \`name\` attribute is required to expose them.\n\n**Flow.** User types → \`ng-model\` writes the scope → digest re-renders other bindings → a change in code re-renders the input.\n\n**How to score the 5 marks.** ng-model with an example (2) · two-way flow explained (1.5) · form state properties used in the template (1.5).`,
              answer:
                `Two-way binding means one binding keeps both ends in step: what the user types reaches the model, and what the model holds appears in the input.\n\n**The binding**\n\`\`\`html\n<form name="regForm" ng-submit="vm.save()" novalidate>\n  <label>Name\n    <input type="text" name="name" ng-model="vm.student.name" required />\n  </label>\n\n  <label>Email\n    <input type="email" name="email" ng-model="vm.student.email"\n           ng-model-options="{ debounce: 300 }" required />\n  </label>\n\n  <p>Typing: {{ vm.student.name || '—' }}</p>\n\n  <button type="submit" ng-disabled="regForm.$invalid">Save</button>\n</form>\n\`\`\`\n\`\`\`js\nangular.module('app', []).controller('RegCtrl', function () {\n  const vm = this;\n  vm.student = { name: '', email: '' };\n  vm.save = function () { console.log('saving', vm.student); };\n});\n\`\`\`\n\n**How the value flows**\n1. The user types — the input fires an \`input\` event.\n2. \`ng-model\` writes the new value into \`vm.student.name\`.\n3. \`$digest\` runs, other bindings that read the same property re-render (\`{{ vm.student.name }}\` in the paragraph).\n4. If the controller changes \`vm.student.name\`, the next digest writes it back **into the input** — that is the second direction.\n\n**The form state** — the \`name\` on the form and on each control exposes it.\n\n| Property | Meaning |\n|---|---|\n| \`regForm.$pristine\` / \`$dirty\` | untouched / changed by the user |\n| \`regForm.$valid\` / \`$invalid\` | all controls pass / something fails |\n| \`regForm.$submitted\` | the submit was attempted |\n| \`regForm.email.$error.required\` | this control failed the required rule |\n| \`regForm.email.$error.email\` | this control failed the type rule |\n\n\`\`\`html\n<p class="hint" ng-show="regForm.email.$dirty && regForm.email.$error.email">\n  Enter a valid email\n</p>\n\`\`\`\n\n**The details that earn marks.** Use a dot in the model (\`vm.student.name\`, not a bare \`name\`), because a child scope created by a nested \`ng-if\` would otherwise shadow the primitive. \`ng-model\` is only for input, select and textarea; for any other element use \`ng-bind\` or \`{{ }}\`. And \`novalidate\` on the form stops the browser's own validation from interfering.\n\n**Exam line:** \`ng-model\` writes both ways, \`$digest\` carries the change, and the form's \`$valid\`/\`$dirty\` flags are what the template reacts to.`,
              diagram: `wt5-forms`,
              diagramCaption:
                `AngularJS forms and two-way binding — ng-model, the flow from input to model and back, and the form state flags.`,
            },
            {
              marks: 5,
              label: `d`,
              question:
                `Explain validation directives in AngularJS — \`required\`, \`ng-minlength\`, \`ng-maxlength\`, \`ng-pattern\`, \`ng-required\` and custom validation — with a form example.`,
              explain:
                `**What is being asked.** Declarative validation in the template, and the state it exposes.\n\n**Built-in.** \`required\`, \`ng-minlength\`, \`ng-maxlength\`, \`ng-pattern\`, \`ng-min\`/\`ng-max\` for number and date, \`type="email"\`/\`number\`/\`url\`.\n\n**Conditional.** \`ng-required\` bound to an expression.\n\n**Custom.** A directive using \`$validators\` or \`ngModelController.$setValidity\`.\n\n**Display.** \`ng-show\` on \`form.control.$error.<rule>\`, disable the submit with \`$invalid\`.\n\n**How to score the 5 marks.** Four built-in directives (2) · conditional and pattern with an example (1.5) · custom validator (1) · showing the error and disabling submit (0.5).`,
              answer:
                `AngularJS validates through **directives on the input**; the result appears as a flag on the form, and the template decides what to show.\n\n**The built-in directives**\n\n| Directive | Rule | Error flag |\n|---|---|---|\n| \`required\` | a value must be present | \`$error.required\` |\n| \`ng-minlength\` / \`ng-maxlength\` | string length range | \`$error.minlength\` |\n| \`ng-pattern\` | matches a regular expression | \`$error.pattern\` |\n| \`ng-min\` / \`ng-max\` | numeric or date range | \`$error.min\` |\n| \`type="email"\` / \`"number"\` / \`"url"\` | the input's own type rule | \`$error.email\` |\n| \`ng-required\` | required only when an expression is true | \`$error.required\` |\n\n\`\`\`html\n<form name="f" ng-submit="vm.save()" novalidate>\n  <label>Name\n    <input name="name" ng-model="vm.name" required ng-minlength="3" ng-maxlength="40" />\n    <span ng-show="f.name.$error.required">Name is required</span>\n    <span ng-show="f.name.$error.minlength">At least 3 characters</span>\n  </label>\n\n  <label>Phone\n    <input name="phone" ng-model="vm.phone"\n           ng-pattern="/^[6-9]\\\\d{9}$/" ng-required="vm.contactByPhone" />\n    <span ng-show="f.phone.$error.pattern">Enter a 10-digit mobile number</span>\n  </label>\n\n  <button type="submit" ng-disabled="f.$invalid">Save</button>\n</form>\n\`\`\`\n\`ng-required="vm.contactByPhone"\` makes the field mandatory only when the checkbox is ticked — the conditional rule that plain \`required\` cannot express.\n\n**A custom validator**\n\`\`\`js\nangular.module('app').directive('uniqueRoll', ['$http', function ($http) {\n  return {\n    require: 'ngModel',\n    link(scope, el, attrs, ngModel) {\n      ngModel.$asyncValidators.uniqueRoll = function (modelValue) {\n        return $http.get('/api/roll-exists?no=' + modelValue)\n          .then((r) => (r.data.exists ? Promise.reject() : Promise.resolve()));\n      };\n    },\n  };\n}]);\n\`\`\`\n\`\`\`html\n<input name="roll" ng-model="vm.roll" unique-roll />\n<span ng-show="f.roll.$pending">Checking…</span>\n<span ng-show="f.roll.$error.uniqueRoll">Roll number already taken</span>\n\`\`\`\n\n**How the template reacts**\n1. \`f.$invalid\` disables the submit button, so an invalid form cannot be sent.\n2. \`f.name.$error.<rule>\` shows the message for the rule that failed, not a generic one.\n3. \`f.name.$dirty\` avoids shouting at a user who has not typed yet.\n4. \`$pending\` handles an asynchronous check while the request is in flight.\n\n**The rule to state.** These checks are for the user's comfort; the server must validate again, because AngularJS runs in the browser and the browser can be bypassed.\n\n**Exam line:** \`required\`, length, \`ng-pattern\` and \`ng-required\` cover the common rules, a custom directive covers the rest, and the form flags decide what is shown and whether submit is allowed.`,
              diagram: `wt5-validation`,
              diagramCaption:
                `AngularJS validation directives with a form example, error flags and a custom asynchronous validator.`,
            },
          ],
        },
      ],
    },
  ],
};
