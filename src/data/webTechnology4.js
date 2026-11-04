// ============================================================
// WEB TECHNOLOGY — Unit I, topics 1.16 to 1.19 (XML)
//  1.16 Introduction to XML, features and applications
//  1.17 XML key components: elements and attributes
//  1.18 XML DTD and XML Schema
//  1.19 XML Namespaces and XSLT transformation
// ============================================================

const browserXmlView = (lines) => `<div style="font-family:'Consolas','Menlo',monospace;font-size:12.5px;line-height:1.75;background:#ffffff;color:#1b1b1b;">${lines.join('')}</div>`;

export const webTechnologyTopicsD = [
  // ==========================================================
  // 1.16 — Introduction to XML, features and applications
  // ==========================================================
  {
    id: 'wt-xml-intro',
    number: '1.16',
    title: 'Introduction to XML, Features and Applications',
    subtitle: 'XML kya hai, kyun banaya gaya aur kahan use hota hai',
    icon: 'code',
    accent: '#00d4ff',
    englishDefinition:
      'XML (eXtensible Markup Language) is a W3C recommendation (1998) for describing structured data using self-descriptive tags. It is a text-based, platform- and language-independent format in which the author defines the tag names, so the same document can be validated, transformed and exchanged between different systems. XML separates content from presentation (CSS or XSLT supplies the display), is case-sensitive, requires every element to be closed and properly nested, supports Unicode and can be checked against a grammar (DTD or XML Schema). It is the base of many standards: SOAP web services, RSS/Atom feeds, SVG, Office Open XML (.docx/.xlsx), Android layouts, sitemaps and configuration files.',
    intro:
      'HTML ne web ko dikhaya, par data ko nahi sambhala. 1990s mein log HTML ka misuse karke data store karne lage the — jab tak ek hi jagah data aur design dono rahe, use machine par samajhna mushkil tha. Isi problem ka jawab XML hai: aap khud tags banate hain, har tag ka matlab hota hai, aur document strict hota hai — ek tag band karna bhool gaye to error. Exam mein "define XML + features" aur "applications" dono aate hain, isliye dono ko example ke saath likhein.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'XML kya hai?',
        body:
          'XML ek markup language hai jisme data ko aise likha jaata hai ki insaan bhi padh sake aur machine bhi parse kar sake. HTML mein tags fixed hote hain (p, h1, table), XML mein aap khud banate hain — <student>, <marks>, <price> — aur yahi "extensible" ka matlab hai. Har tag apne aas-paas ke data ka matlab bata deta hai, isliye XML ko self-describing kehte hain.',
        body2:
          'XML data rakhta hai, dikhata nahi. Dikhane ke liye CSS ya XSLT lagti hai. XML strict hai: har element band hona chahiye, nesting sahi honi chahiye, case match hona chahiye, aur attributes quotes mein hone chahiye. Ek galti par parser poora document reject kar deta hai — yahi strictness XML ki sabse badi taqat hai, kyunki data mein ambiguity nahi rehti.',
        chips: ['Extensible', 'Self-describing', 'Well-formed', 'Platform independent', 'Unicode', 'Data ≠ presentation'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'HTML vs XML',
        diagram: 'html-vs-xml',
        caption:
          'HTML fixed tags ke saath page dikhata hai; XML apne tags banakar data rakhta hai. Case sensitivity, closing tags aur error handling — teeno mein XML sakht hai. Exam mein ye table draw karke 5 differences likhna best answer hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Ek XML Document — Aur Browser Mein Wahi File',
        intro:
          'Left ek valid XML file hai. Browser aisi file ko page ki tarah render nahi karta — wo use tree ki tarah dikhata hai jisme nodes collapse/expand ho sakte hain. Right mein wahi tree view hai jo Chrome/Firefox dikhate hain.',
        language: 'xml',
        filename: 'college.xml',
        code: `<?xml version="1.0" encoding="UTF-8"?>
<college>
  <student id="1">
    <name>Riya Sharma</name>
    <course>MCA</course>
    <marks>78</marks>
  </student>
  <student id="2">
    <name>Aman Verma</name>
    <course>MCA</course>
    <marks>82</marks>
  </student>
</college>`,
        html: browserXmlView([
          '<div style="color:#8a6d00;">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</div>',
          '<div><span style="color:#0047ff;">−</span> <span style="color:#0047ff;">&lt;college&gt;</span></div>',
          '<div style="padding-left:18px;"><span style="color:#0047ff;">−</span> <span style="color:#0047ff;">&lt;student</span> <span style="color:#c0392b;">id="1"</span><span style="color:#0047ff;">&gt;</span></div>',
          '<div style="padding-left:36px;"><span style="color:#0047ff;">&lt;name&gt;</span>Riya Sharma<span style="color:#0047ff;">&lt;/name&gt;</span></div>',
          '<div style="padding-left:36px;"><span style="color:#0047ff;">&lt;course&gt;</span>MCA<span style="color:#0047ff;">&lt;/course&gt;</span></div>',
          '<div style="padding-left:36px;"><span style="color:#0047ff;">&lt;marks&gt;</span>78<span style="color:#0047ff;">&lt;/marks&gt;</span></div>',
          '<div style="padding-left:18px;"><span style="color:#0047ff;">&lt;/student&gt;</span></div>',
          '<div style="padding-left:18px;"><span style="color:#0047ff;">+</span> <span style="color:#0047ff;">&lt;student</span> <span style="color:#c0392b;">id="2"</span><span style="color:#0047ff;">&gt;</span> <span style="color:#777;font-size:11px;">(collapsed)</span></div>',
          '<div><span style="color:#0047ff;">&lt;/college&gt;</span></div>',
        ]),
        caption:
          'Browser XML file ko tree view mein kholta hai — collapse/expand ke saath. HTML ki tarah styled page nahi banta, kyunki XML ke saath koi CSS/XSLT nahi lagi.',
        height: 260,
      },
      {
        type: 'cards',
        kicker: 'Features',
        title: 'XML ki 6 Khaas Baatein',
        cards: [
          {
            icon: 'tag',
            title: 'Extensible',
            body:
              'Koi fixed tag set nahi — aap domain ke hisaab se tags bana sakte hain: <student>, <invoice>, <patient>. Isi liye XML kisi bhi industry ka data model bana sakta hai, jabki HTML ke tags page structure tak seemit hain.',
          },
          {
            icon: 'eye',
            title: 'Self-describing',
            body:
              'Tag ka naam hi batata hai data kya hai — <price>450</price> padhkar hi samajh aa jaata hai. Isliye alag schema/documentation ke bina bhi data readable hota hai.',
          },
          {
            icon: 'globe',
            title: 'Platform & language independent',
            body:
              'XML plain text (Unicode) hai — Windows, Linux, Java, Python, C# — sab same file padh sakte hain. Isliye do alag systems ke beech data exchange ka default format bana.',
          },
          {
            icon: 'check',
            title: 'Strict & verifiable',
            body:
              'Well-formedness ke rules strict hain (closing tags, nesting, case). Upar se DTD ya XML Schema se "valid" bhi check kar sakte hain — data ka structure guarantee ho jaata hai.',
          },
          {
            icon: 'layers',
            title: 'Separates data from presentation',
            body:
              'XML ke saath CSS ya XSLT alag file mein hoti hai. Same data ko website, PDF ya mobile app — teeno jagah alag tarah dikha sakte hain, bina data badle.',
          },
          {
            icon: 'network',
            title: 'Hierarchical',
            body:
              'Data tree structure mein hota hai — parent ke andar children, kai levels tak. Ye relational table se zyada natural hai jab data nested ho (order → items → options).',
          },
        ],
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'XML Jahan Aaj Bhi Rozana Chalti Hai',
        intro:
          'XML sirf purani cheez nahi hai — ye aaj bhi config, feed, graphics aur office files mein use hoti hai. Neeche chaar asli examples hain.',
        language: 'xml',
        filename: 'xml-in-the-wild',
        code: `<!-- 1. RSS feed (news/blog) -->
<rss version="2.0">
  <channel>
    <title>MCA Notes</title>
    <item><title>Unit I — XML</title></item>
  </channel>
</rss>

<!-- 2. sitemap.xml (SEO) -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://college.edu/notes</loc></url>
</urlset>

<!-- 3. SVG (graphics) -->
<svg width="100" height="40">
  <rect width="100" height="40" fill="#0047ff"/>
</svg>

<!-- 4. Android layout / Maven / pom.xml style config -->
<LinearLayout orientation="vertical">
  <TextView text="Hello MCA"/>
</LinearLayout>`,
        note:
          'Microsoft Word (.docx), Excel (.xlsx) aur LibreOffice (.odt) files bhi andar se XML ka zip hote hain — isliye "XML based office formats" bhi ek application hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'HTML vs XML',
        columns: ['HTML', 'XML'],
        columnColors: ['#00d4ff', '#c4ff00'],
        rows: [
          { label: 'Purpose', values: ['Page display (presentation)', 'Data store & transport (structure)'] },
          { label: 'Tags', values: ['Fixed, predefined', 'Apne bana sakte hain (extensible)'] },
          { label: 'Case sensitive', values: ['Nahi', 'Haan (Name ≠ name)'] },
          { label: 'Closing tag', values: ['Optional kuch elements mein', 'Zaroori — warna well-formed nahi'] },
          { label: 'Error handling', values: ['Browser ignore karta hai', 'Parser reject kar deta hai'] },
          { label: 'Validation', values: ['Nahi', 'DTD / XML Schema se'] },
          { label: 'Display', values: ['Browser khud render karta hai', 'CSS/XSLT chahiye'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Applications',
        title: 'XML ke Applications (Exam Ke Liye)',
        points: [
          'Configuration files — Maven pom.xml, Android layouts, .NET app.config, Spring beans.',
          'Web services — SOAP messages (WSDL + XML) enterprise integration ke liye.',
          'Feeds — RSS/Atom se news, blog aur podcast subscribe hote hain.',
          'Graphics — SVG vector images aur charts XML text hi hote hain.',
          'Office documents — .docx, .xlsx, .odt andar se XML files ka zip hote hain.',
          'Data exchange — banking (ISO 20022), healthcare (HL7), government (e-Gov) mein standard XML formats.',
          'SEO — sitemap.xml search engine ko site ke pages bataata hai.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'XML = self-describing, extensible markup for data (W3C, 1998).',
          'Tags khud banate hain; case-sensitive; har tag band karna zaroori.',
          'Data aur presentation alag — XML data, CSS/XSLT display.',
          'Well-formed = syntax sahi; valid = DTD/Schema ke hisaab se sahi.',
          'Applications: config, SOAP, RSS, SVG, docx, sitemap, industry data exchange.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Define XML. Explain any five features and four applications of XML.',
        answer:
          '**XML (eXtensible Markup Language):** W3C recommendation (1998) — self-descriptive tags se structured data ko describe, store aur transport karne ki text-based language, jisme tag names khud define kiye jaate hain.\n\n**Features:**\n1. **Extensible** — apne tags banao (`<student>`, `<price>`)\n2. **Self-describing** — tag ka naam hi matlab batata hai\n3. **Platform independent** — plain text/Unicode, har language padh sakti hai\n4. **Strict** — well-formed rules + DTD/Schema validation\n5. **Separates data from presentation** — CSS/XSLT se display\n6. **Hierarchical** — nested tree structure\n\n**Applications:**\n1. Config files (pom.xml, Android layouts)\n2. SOAP web services\n3. RSS/Atom feeds\n4. SVG graphics\n5. Office files (.docx/.xlsx)\n6. sitemap.xml (SEO)\n\n**Diagram:** Refer to the HTML vs XML diagram.',
      },
      {
        question: 'Differentiate between HTML and XML (any five points).',
        answer:
          '| Basis | HTML | XML |\n|---|---|---|\n| Purpose | Page dikhana | Data carry karna |\n| Tags | Fixed | Apne banate hain |\n| Case | Insensitive | Sensitive |\n| Closing tag | Optional | Zaroori |\n| Errors | Ignore | Reject |\n| Validation | Nahi | DTD / XSD |\n| Display | Browser render karta hai | CSS/XSLT chahiye |\n\n**Example:**\n- HTML: `<h1>MCA Notes</h1>` → screen par bada bold heading\n- XML: `<course><name>MCA</name></course>` → data, screen par kuch nahi (bina CSS ke)\n\n**Exam line:** "HTML document ki shakl batata hai, XML document ka matlab batata hai."',
      },
      {
        question: 'Why was XML developed? Explain its role in data exchange between different systems.',
        answer:
          '**Problem (1990s):**\n- HTML ke fixed tags data describe nahi kar sakte the\n- Log HTML ko data store karne ke liye misuse kar rahe the\n- Har system ka apna binary/text format — integration mushkil aur mehnga\n\n**XML ka solution:**\n1. **Common text format** — koi bhi platform/language padh sakti hai\n2. **Self-describing data** — receiver ko field ka matlab pata chalta hai\n3. **Validation** — DTD/Schema se structure guarantee\n4. **Transformation** — XSLT se ek hi data ko HTML/PDF/text mein badal sakte hain\n5. **Extensible** — industry apne tags define karti hai (HL7, ISO 20022)\n\n**Real use:** ek bank ka legacy COBOL system XML bhejta hai, Java service usse padhti hai, mobile app JSON mein convert karke dikhati hai — beech mein data ka matlab nahi badalta.\n\n**Diagram:** Refer to the HTML vs XML diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.17 — XML key components: elements and attributes
  // ==========================================================
  {
    id: 'wt-xml-components',
    number: '1.17',
    title: 'XML Key Components: Elements and Attributes',
    subtitle: 'Prolog, root, elements, attributes, text, comments aur CDATA',
    icon: 'layers',
    accent: '#c4ff00',
    englishDefinition:
      'An XML document is built from a small set of components. The optional prolog declares the version and encoding (<?xml version="1.0" encoding="UTF-8"?>) and may include a stylesheet or DOCTYPE reference. Every document has exactly one root element that contains all others. Elements consist of a start tag, content and a matching end tag, may be empty (<tag/>), are case-sensitive and can be nested. Attributes are name="value" pairs inside the start tag that describe an element and must be quoted and unique within their element. Element content may be text, child elements, comments (<!-- -->), CDATA sections (<![CDATA[ ... ]]>) that keep markup as literal text, and entity references (&lt; &amp; &gt;). A document that follows these rules is well-formed; one that additionally matches a DTD or Schema is valid.',
    intro:
      'Is topic mein XML ke "parts" poochhe jaate hain — prolog, root, element, attribute, text, comment, CDATA. Sabse zyada poocha jaata hai: "elements aur attributes mein difference" aur "well-formed document ke rules". Ek rule yaad rakhein: agar data ka hissa hai to element, aur agar element ke baare mein extra information hai to attribute — jaise naam element hai, par id attribute hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Document ke Components',
        body:
          'Har XML document teen hisson mein: (1) prolog — version aur encoding, (2) root element — ek hi, poora data iske andar, (3) uske andar elements, attributes, text, comments aur CDATA. Prolog optional hai par standard practice hai; root hona compulsory hai.',
        body2:
          'Element ke andar element (nesting) allowed hai, par overlap nahi — <a><b></a></b> galat hai. Case match zaroori: <Name>...</Name> sahi, <Name>...</name> galat. Attributes start tag ke andar hote hain, quotes mein, aur ek hi element par same naam ke do attribute nahi ho sakte. CDATA ke andar < > & jaise characters literal rahte hain.',
        chips: ['Prolog', 'Root', 'Element', 'Attribute', 'Text node', 'Comment', 'CDATA'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'XML Document Tree',
        diagram: 'xml-tree',
        caption:
          'Prolog → root (<college>) → child element (<student id="1">) → text nodes. Right side node types (element, attribute, text, comment, CDATA) likhe hain. Exam mein ye tree draw karke well-formed rules likhna scoring answer hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Well-formed Document — Har Component Ke Saath',
        intro:
          'Is ek file mein prolog, root, nested elements, attribute, text, comment, CDATA aur empty element — sab maujood hain. Right side wahi tree view hai.',
        language: 'xml',
        filename: 'wellformed.xml',
        code: `<?xml version="1.0" encoding="UTF-8"?>
<!-- college ka data -->
<college>
  <student id="1">
    <name>Riya Sharma</name>
    <course>MCA</course>
    <marks grade="A">78</marks>
    <photo/>
    <note><![CDATA[ <b>topper</b> & <i>regular</i> ]]></note>
  </student>
</college>`,
        html: browserXmlView([
          '<div style="color:#8a6d00;">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</div>',
          '<div style="color:#7a8a9a;">&lt;!-- college ka data --&gt;</div>',
          '<div><span style="color:#0047ff;">−</span> <span style="color:#0047ff;">&lt;college&gt;</span></div>',
          '<div style="padding-left:18px;"><span style="color:#0047ff;">−</span> <span style="color:#0047ff;">&lt;student</span> <span style="color:#c0392b;">id="1"</span><span style="color:#0047ff;">&gt;</span></div>',
          '<div style="padding-left:36px;"><span style="color:#0047ff;">&lt;name&gt;</span>Riya Sharma<span style="color:#0047ff;">&lt;/name&gt;</span></div>',
          '<div style="padding-left:36px;"><span style="color:#0047ff;">&lt;course&gt;</span>MCA<span style="color:#0047ff;">&lt;/course&gt;</span></div>',
          '<div style="padding-left:36px;"><span style="color:#0047ff;">&lt;marks</span> <span style="color:#c0392b;">grade="A"</span><span style="color:#0047ff;">&gt;</span>78<span style="color:#0047ff;">&lt;/marks&gt;</span></div>',
          '<div style="padding-left:36px;"><span style="color:#0047ff;">&lt;photo/&gt;</span> <span style="color:#777;font-size:11px;">(empty element)</span></div>',
          '<div style="padding-left:36px;"><span style="color:#0047ff;">&lt;note&gt;</span><span style="color:#2c7a2c;">&lt;![CDATA[ &lt;b&gt;topper&lt;/b&gt; &amp; &lt;i&gt;regular&lt;/i&gt; ]]&gt;</span><span style="color:#0047ff;">&lt;/note&gt;</span></div>',
          '<div style="padding-left:18px;"><span style="color:#0047ff;">&lt;/student&gt;</span></div>',
          '<div><span style="color:#0047ff;">&lt;/college&gt;</span></div>',
        ]),
        caption:
          'photo ek empty element hai (<photo/>), note ke andar CDATA hai isliye <b> tags literal text hain — parser unhe markup nahi samajhta.',
        height: 290,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Well-formed Ke Rules — Galat vs Sahi',
        intro:
          'Neeche jaan-boojh kar galat likha gaya hai, phir usi ka sahi version. Exam mein "well-formed document ke rules" ka jawab yahi list hai.',
        language: 'xml',
        filename: 'rules.xml',
        code: `<!-- GALAT: case match nahi -->
<Name>Riya</name>

<!-- GALAT: closing tag nahi -->
<course>MCA

<!-- GALAT: nesting overlap -->
<student><name>Riya</student></name>

<!-- GALAT: attribute quote ke bina -->
<student id=1>

<!-- GALAT: do root elements -->
<student/><student/>

<!-- GALAT: reserved character -->
<note>a < b</note>

<!-- SAHI versions -->
<Name>Riya</Name>
<course>MCA</course>
<student><name>Riya</name></student>
<student id="1"/>
<root><student/><student/></root>
<note>a &lt; b</note>`,
        note:
          'Well-formed rules: ek root · har tag band · proper nesting · case match · attributes quoted aur unique · &lt; &amp; &gt; escape · "-" ki jagah "–"? Nahi — text mein < ko hamesha &lt; likhein.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Elements vs Attributes',
        columns: ['Element', 'Attribute'],
        columnsColors: [],
        columnColors: ['#c4ff00', '#ff8800'],
        rows: [
          { label: 'Kya hai', values: ['Content ka hissa', 'Element ke baare mein info'] },
          { label: 'Syntax', values: ['<name>Riya</name>', '<student id="1">'] },
          { label: 'Repeat', values: ['Ek se zyada allowed', 'Ek element par same naam ek hi baar'] },
          { label: 'Nesting', values: ['Haan, child elements', 'Nahi'] },
          { label: 'Data type', values: ['Structure se pata', 'Hamesha text (schema se type)'] },
          { label: 'Best for', values: ['Actual data (naam, marks)', 'Identifier, metadata (id, unit, lang)'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Element vs Attribute — Kab Kya',
        points: [
          'Data ka hissa ho to element: <name>Riya</name> — baad mein badal sakta hai, repeat ho sakta hai.',
          'Identifier / metadata ho to attribute: <student id="1" lang="en">.',
          'Attribute repeat nahi ho sakta — do phone numbers chahiye to <phone> element hi use karein.',
          'Element par structure aur validation lagti hai; attribute par sirf type.',
          'CDATA tab use karein jab text mein < > & ho aur wo literal chahiye.',
          'Well-formed ≠ valid: pehla syntax hai, doosra DTD/Schema ke hisaab se.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Prolog: <?xml version="1.0" encoding="UTF-8"?> — optional par standard.',
          'Ek root element; uske andar nested elements, text, comments, CDATA.',
          'Element = <tag>content</tag>; empty = <tag/>.',
          'Attribute = name="value" start tag ke andar, unique aur quoted.',
          'Well-formed rules todne par parser document reject kar deta hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the key components of an XML document with an example.',
        answer:
          '**1. Prolog** — `<?xml version="1.0" encoding="UTF-8"?>` (version + encoding)\n**2. Root element** — ek hi, poora data iske andar\n**3. Elements** — `<name>Riya</name>`; empty element `<photo/>`\n**4. Attributes** — `<student id="1">`, quotes mein, unique\n**5. Text content** — element ke andar ka data\n**6. Comments** — `<!-- note -->`\n**7. CDATA** — `<![CDATA[ <b>x</b> ]]>` — markup literal\n**8. Entities** — `&lt; &amp; &gt; &quot; &apos;`\n\n**Example:**\n```\n<?xml version="1.0" encoding="UTF-8"?>\n<!-- student record -->\n<college>\n  <student id="1">\n    <name>Riya</name>\n    <marks grade="A">78</marks>\n    <photo/>\n  </student>\n</college>\n```\n\n**Diagram:** Refer to the XML tree diagram.',
      },
      {
        question: 'Differentiate between elements and attributes in XML. When should each be used?',
        answer:
          '| Basis | Element | Attribute |\n|---|---|---|\n| Content | Data ka hissa | Element ki info |\n| Syntax | `<name>Riya</name>` | `<student id="1">` |\n| Repeat | Allowed | Same naam ek hi baar |\n| Nesting | Haan | Nahi |\n| Value type | Text + child elements | Sirf text |\n| Validation | Structure + type | Type only |\n\n**Rules of thumb:**\n- Data jo badal sakta hai / repeat ho sakta hai → element\n- Identifier aur metadata (id, lang, unit) → attribute\n\n```\n<!-- sahi -->\n<student id="1" lang="en">\n  <phone>98765</phone>\n  <phone>91234</phone>\n</student>\n\n<!-- galat: same attribute do baar -->\n<student phone="98765" phone="91234"/>\n```\n\n**Exam line:** "Element content ke liye, attribute content ke baare mein."',
      },
      {
        question: 'What is a well-formed XML document? List the rules and explain CDATA with an example.',
        answer:
          '**Well-formed:** wo document jo XML ke syntax rules follow kare — parser use accept karta hai.\n\n**Rules:**\n1. Ek hi root element\n2. Har start tag ka end tag (`<p>...</p>`)\n3. Proper nesting (overlap nahi)\n4. Case-sensitive match (`<Name>` vs `</Name>`)\n5. Attributes quoted aur unique\n6. `<`, `>`, `&` ke liye entities (`&lt;`, `&gt;`, `&amp;`)\n7. Element names letter/underscore se shuru\n\n**CDATA:** `<![CDATA[ ... ]]>` ke andar ka text literal rehta hai — markup parse nahi hota.\n```\n<code><![CDATA[ if (a < b && c > d) { } ]]></code>\n```\nCDATA ke bina `<` ko `&lt;` likhna padta.\n\n**Well-formed vs valid:**\n\n| | Well-formed | Valid |\n|---|---|---|\n| Check | Syntax | DTD / Schema |\n| Zaroori | Hamesha | Optional |\n\n**Diagram:** Refer to the XML tree diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.18 — XML DTD and XML Schema
  // ==========================================================
  {
    id: 'wt-xml-dtd',
    number: '1.18',
    title: 'XML DTD and XML Schema',
    subtitle: 'Document ko validate karna — grammar aur typed schema',
    icon: 'check',
    accent: '#ff8800',
    englishDefinition:
      'A DTD (Document Type Definition) defines the allowed structure of an XML document: which elements may appear, their order, how many times (nothing, ?, *, +), their child elements and their attributes (with types and #REQUIRED/#IMPLIED/#FIXED defaults). It can be internal (inside the DOCTYPE declaration), external (a separate .dtd file referenced with SYSTEM or PUBLIC) or both. XML Schema (XSD) is a later, XML-based alternative that also defines structure but adds data types (xs:string, xs:int, xs:date), restrictions (minLength, pattern, minInclusive), namespaces and reusable complex types. A document that only follows XML syntax is well-formed; a document that also follows its DTD/Schema is valid.',
    intro:
      'Ab tak hum XML likh rahe the; ab sawaal ye hai ki "kaun decide karta hai ki XML sahi hai?". DTD ek grammar file hai jo batati hai kaunse elements allowed hain, kis order mein, aur kaunse attributes. XML Schema wahi kaam typed tarike se karta hai — ismein data type bhi hota hai (marks sirf 0–100 number ho). Exam mein "DTD kya hai, example ke saath" aur "DTD vs XML Schema" dono aate hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'DTD kya hai?',
        body:
          'DTD (Document Type Definition) XML document ki grammar hai — kaunse elements honge, kis order mein, kitni baar, aur unke attributes kya honge. Ye <!DOCTYPE> declaration ke andar internal likhi ja sakti hai, ya alag .dtd file mein (external) — tab <!DOCTYPE college SYSTEM "college.dtd"> likhte hain.',
        body2:
          'DTD mein chaar main declarations: <!ELEMENT> (element aur uska content), <!ATTLIST> (attributes + type + default), <!ENTITY> (reusable text), <!NOTATION> (external format). Content model mein symbols: koi symbol nahi = exactly ek baar, ? = 0 ya 1, * = 0 ya zyada, + = 1 ya zyada. Attributes mein #REQUIRED (zaroori), #IMPLIED (optional), #FIXED (fixed value) ya default value.',
        chips: ['<!DOCTYPE>', '<!ELEMENT>', '<!ATTLIST>', '#REQUIRED', '#PCDATA', 'SYSTEM'],
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Internal DTD — Element aur Attribute Declarations',
        intro:
          'Ye ek poora document hai jismein DTD upar likhi hai aur data neeche. DTD batati hai ki college ke andar student+, student ke andar exactly name, course, marks (isi order mein), aur id attribute zaroori hai.',
        language: 'dtd',
        filename: 'college.dtd (internal)',
        code: `<?xml version="1.0"?>
<!DOCTYPE college [
  <!ELEMENT college (student+)>
  <!ELEMENT student (name, course, marks)>
  <!ELEMENT name    (#PCDATA)>
  <!ELEMENT course  (#PCDATA)>
  <!ELEMENT marks   (#PCDATA)>
  <!ATTLIST student id CDATA #REQUIRED
                    lang CDATA #IMPLIED>
]>

<college>
  <student id="1" lang="en">
    <name>Riya Sharma</name>
    <course>MCA</course>
    <marks>78</marks>
  </student>
</college>`,
        note:
          'student+ ka matlab: ek ya usse zyada student allowed. (name, course, marks) ka matlab: teeno exactly isi order mein aane chahiye. id attribute #REQUIRED hai — na do to document invalid.',
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'External DTD aur XML Schema (XSD)',
        intro:
          'Bade projects mein DTD/Schema alag file mein rehti hai taaki kai documents ek hi grammar se validate hon. Neeche dono ka roop — DTD file aur usse modern XML Schema.',
        language: 'xsd',
        filename: 'college.xsd',
        code: `<!-- External DTD ka reference XML mein -->
<!DOCTYPE college SYSTEM "college.dtd">

<!-- college.dtd file -->
<!ELEMENT college (student+)>
<!ELEMENT student (name, course, marks)>
<!ATTLIST student id CDATA #REQUIRED>

<!-- Wahi grammar XML Schema mein -->
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="college">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="student" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="name" type="xs:string"/>
              <xs:element name="course" type="xs:string"/>
              <xs:element name="marks">
                <xs:simpleType>
                  <xs:restriction base="xs:int">
                    <xs:minInclusive value="0"/>
                    <xs:maxInclusive value="100"/>
                  </xs:restriction>
                </xs:simpleType>
              </xs:element>
            </xs:sequence>
            <xs:attribute name="id" type="xs:int" use="required"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`,
        note:
          'XSD mein marks ka type xs:int hai aur 0–100 ki limit lagi hai — ye DTD se bada fayda hai. DTD mein (#PCDATA) sirf "text" kehta hai, number ya range nahi check kar sakta.',
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'DTD / Schema Validation Flow',
        diagram: 'dtd-vs-xsd',
        caption:
          'XML instance + DTD ya Schema → validator → VALID ya INVALID. Neeche DTD vs XSD ka comparison hai (syntax, data types, namespaces, constraints). Exam mein ye flow draw karke "well-formed vs valid" ka farak likhein.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Valid Document — Aur Uska Data',
        intro:
          'DTD/Schema sirf structure check karti hai; data wahi rehta hai. Right side wahi record dikhaya gaya hai jo is XML se nikaltа hai — yahi data aage table, report ya API mein jaata hai.',
        language: 'xml',
        filename: 'valid.xml',
        code: `<?xml version="1.0"?>
<!DOCTYPE college SYSTEM "college.dtd">

<college>
  <student id="1">
    <name>Riya Sharma</name>
    <course>MCA</course>
    <marks>78</marks>
  </student>
  <student id="2">
    <name>Aman Verma</name>
    <course>MCA</course>
    <marks>82</marks>
  </student>
</college>

<!-- INVALID examples (DTD todte hain): -->
<!-- <student id="3"><marks>78</marks>
        <name>Aman</name></student>   -> order galat -->
<!-- <student><name>X</name></student>    -> id missing -->`,
        html: `<p style="font-size:12px;color:#0a7d4f;font-weight:700;margin:0 0 8px;">✓ VALID — college.dtd ke hisaab se</p>
<table style="border-collapse:collapse;width:100%;font-size:13px;">
  <tr style="background:#eef3ff;">
    <th style="border:1px solid #b9c8e8;padding:6px;text-align:left;">id</th>
    <th style="border:1px solid #b9c8e8;padding:6px;text-align:left;">name</th>
    <th style="border:1px solid #b9c8e8;padding:6px;text-align:left;">course</th>
    <th style="border:1px solid #b9c8e8;padding:6px;text-align:left;">marks</th>
  </tr>
  <tr><td style="border:1px solid #b9c8e8;padding:6px;">1</td><td style="border:1px solid #b9c8e8;padding:6px;">Riya Sharma</td><td style="border:1px solid #b9c8e8;padding:6px;">MCA</td><td style="border:1px solid #b9c8e8;padding:6px;">78</td></tr>
  <tr><td style="border:1px solid #b9c8e8;padding:6px;">2</td><td style="border:1px solid #b9c8e8;padding:6px;">Aman Verma</td><td style="border:1px solid #b9c8e8;padding:6px;">MCA</td><td style="border:1px solid #b9c8e8;padding:6px;">82</td></tr>
</table>
<p style="font-size:12px;color:#c0392b;margin:10px 0 0;">✗ INVALID examples: order galat ya id attribute missing</p>`,
        caption:
          'Validation pass hone ka matlab: structure sahi hai. Phir wahi XML kisi XSLT ya program se table/report ban jaata hai — data aur grammar alag cheezein hain.',
        height: 220,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'DTD vs XML Schema (XSD)',
        columns: ['DTD', 'XML Schema (XSD)'],
        columnColors: ['#c4ff00', '#ff8800'],
        rows: [
          { label: 'Syntax', values: ['Non-XML (apni language)', 'XML jaisa (xs: tags)'] },
          { label: 'Data types', values: ['Nahi — sab text', 'Haan: string, int, date, decimal'] },
          { label: 'Constraints', values: ['Basic (order, #REQUIRED)', 'Range, pattern, length'] },
          { label: 'Namespaces', values: ['Support nahi', 'Poora support'] },
          { label: 'Reuse', values: ['Kam', 'Complex types import/extend'] },
          { label: 'Complexity', values: ['Simple, jaldi likhi jaati hai', 'Verbose par powerful'] },
          { label: 'Use', values: ['Legacy systems, simple docs', 'Modern enterprise, web services'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'DTD / Schema Ke Points',
        points: [
          'Internal DTD: <!DOCTYPE root [ ... ]> · External: <!DOCTYPE root SYSTEM "file.dtd">.',
          '<!ELEMENT name (child1, child2)> — order aur nesting fix karta hai.',
          'Cardinality: nothing = exactly 1, ? = 0 ya 1, * = 0 ya zyada, + = 1 ya zyada.',
          '<!ATTLIST student id CDATA #REQUIRED> — attribute aur uski condition.',
          'XSD mein type + restriction (minInclusive, pattern, minLength) aur namespaces.',
          'Well-formed = XML syntax sahi; valid = DTD/Schema ke hisaab se bhi sahi.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'DTD = grammar (elements, order, attributes, entities).',
          'Internal vs external DTD; XSD = typed grammar in XML syntax.',
          'Validation = well-formed + DTD/Schema match.',
          'XSD ke fayde: data types, range/pattern, namespaces.',
          'Invalid document parser reject karta hai ya validation error deta hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is a DTD? Explain the DTD declarations with an example. Differentiate internal and external DTD.',
        answer:
          '**DTD (Document Type Definition):** XML document ki grammar — kaunse elements, kis order mein, kitni baar, aur kaunse attributes.\n\n**Declarations:**\n\n| Declaration | Kaam | Example |\n|---|---|---|\n| `<!ELEMENT>` | Element + content model | `<!ELEMENT student (name, marks)>` |\n| `<!ATTLIST>` | Attributes + type/default | `<!ATTLIST student id CDATA #REQUIRED>` |\n| `<!ENTITY>` | Reusable text | `<!ENTITY co "MCA">` |\n| `<!NOTATION>` | External format | `<!NOTATION gif SYSTEM "image/gif">` |\n\n**Example (internal):**\n```\n<!DOCTYPE college [\n  <!ELEMENT college (student+)>\n  <!ELEMENT student (name, marks)>\n  <!ELEMENT name (#PCDATA)>\n  <!ATTLIST student id CDATA #REQUIRED>\n]>\n```\n\n**Internal vs external:**\n\n| | Internal | External |\n|---|---|---|\n| Kahan | DOCTYPE ke andar | Alag .dtd file |\n| Reuse | Ek document | Kai documents |\n| Syntax | `<!DOCTYPE root [ ... ]>` | `<!DOCTYPE root SYSTEM "x.dtd">` |\n\n**Diagram:** Refer to the DTD/XSD validation diagram.',
      },
      {
        question: 'Differentiate between DTD and XML Schema. Why is XML Schema preferred in modern applications?',
        answer:
          '| Basis | DTD | XML Schema |\n|---|---|---|\n| Syntax | Non-XML | XML |\n| Data types | Nahi (sab text) | string, int, date, decimal |\n| Constraints | Basic | Range, pattern, length |\n| Namespaces | Nahi | Haan |\n| Reusability | Kam | Complex types |\n| Tools | Older | Modern parsers, IDEs |\n\n**Why XSD preferred:**\n1. **Data types** — marks sirf `xs:int` 0–100, date `xs:date`\n2. **Rich constraints** — `minLength`, `pattern`, `minInclusive`\n3. **Namespaces** — do vocabularies ka clash nahi\n4. **Reuse** — ek complexType ko kai jagah use karein\n5. **Self-described** — XSD khud XML hai, isliye XML tools se process ho sakta hai\n\n**Limitation:** XSD verbose hai — chhote document ke liye DTD jaldi likhi jaati hai.\n\n**Diagram:** Refer to the DTD/XSD diagram (comparison strip).',
      },
      {
        question: 'Differentiate between a well-formed and a valid XML document.',
        answer:
          '**Well-formed:** XML ke syntax rules follow karta hai — parser accept karta hai.\n\n**Valid:** well-formed + DTD/Schema ke structure rules bhi follow karta hai.\n\n| Basis | Well-formed | Valid |\n|---|---|---|\n| Check | Syntax | Grammar (DTD/XSD) |\n| Zaroori | Hamesha | Optional |\n| Kaun check karta hai | XML parser | Validating parser / validator |\n| Example fail | Tag band nahi, case mismatch | id missing, element order galat |\n\n**Examples:**\n```\n<!-- well-formed but INVALID (DTD ke hisaab se id chahiye) -->\n<student><name>Riya</name></student>\n\n<!-- NOT well-formed (closing tag galat) -->\n<student><name>Riya</student>\n```\n\n**Exam line:** "Well-formed ek syntax ki guarantee hai, valid ek contract ki."',
      },
    ],
  },

  // ==========================================================
  // 1.19 — Namespaces and XSLT
  // ==========================================================
  {
    id: 'wt-xml-namespace-xslt',
    number: '1.19',
    title: 'XML Namespaces and XSLT',
    subtitle: 'Naam ka clash rokna aur XML ko HTML mein badalna',
    icon: 'loop',
    accent: '#ff7ab2',
    englishDefinition:
      'An XML namespace is a named collection of element and attribute names, declared with the xmlns attribute whose value is a URI: xmlns:h="http://www.w3.org/TR/html4/". A prefix (h:table) selects that namespace, and a default declaration (xmlns="uri") applies to unprefixed elements. Namespaces let two vocabularies with the same local name coexist in one document without ambiguity. XSLT (eXtensible Stylesheet Language Transformations) is an XML-based language that transforms an XML document into another format — usually HTML, text or a different XML. An XSLT stylesheet declares xsl:stylesheet, defines templates matched with XPath (match="/", match="book"), and uses instructions such as xsl:apply-templates, xsl:for-each, xsl:value-of, xsl:sort and xsl:if. The browser can apply the stylesheet automatically through the processing instruction <?xml-stylesheet type="text/xsl" href="books.xsl"?>.',
    intro:
      'Do problems: (1) naam ka clash — agar ek hi document mein <table> HTML ka hai aur <table> furniture ka bhi, to parser confuse hoga; iska ilaaj namespaces hain. (2) XML ko screen par dikhana — CSS se basic styling hoti hai, par XSLT se poora HTML page bana sakte hain. Exam mein "namespaces kya hain, example" aur "XSLT se XML ko HTML mein kaise badalte hain" dono aate hain. Neeche XSLT ka asli stylesheet aur uska output dono diye hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Namespace aur XSLT — dono ka kaam',
        body:
          'Namespace ek URI se pehchana jaane wala naam-space hai. Declaration: xmlns:prefix="http://example.com/uri". Uske baad prefix:element likhne se element us namespace ka ho jaata hai. URI sirf identifier hai — us address par kuch hona zaroori nahi. Default namespace (xmlns="uri") un elements par lagta hai jinpar koi prefix nahi.',
        body2:
          'XSLT ek stylesheet language hai jo XML ko doosre format mein badalti hai. Ismein templates hote hain: match="/" poore document ke liye, match="book" har book element ke liye. xsl:value-of se value nikaalte hain, xsl:for-each se loop chalate hain, xsl:sort se sort karte hain. XPath se data chunte hain — jaise book/title ya //price.',
        chips: ['xmlns', 'prefix', 'URI', 'default namespace', 'xsl:template', 'XPath', 'xsl:value-of'],
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Namespaces — Do Vocabulary, Ek Document',
        intro:
          'Yahan "table" naam do jagah use hua hai — HTML ka table (h:) aur furniture ka table (f:). Prefix ke bina parser inhe alag nahi kar sakta; prefix ke saath dono peacefully coexist karte hain.',
        language: 'xml',
        filename: 'namespaces.xml',
        code: `<?xml version="1.0"?>
<root
  xmlns:h="http://www.w3.org/TR/html4/"
  xmlns:f="http://example.com/furniture">

  <h:table>
    <h:tr><h:td>Table cell</h:td></h:tr>
  </h:table>

  <f:table>
    <f:name>Oak Dining Table</f:name>
    <f:width unit="cm">180</f:width>
  </f:table>

  <!-- default namespace: bina prefix wale elements -->
  <note xmlns="http://example.com/notes">
    <text>Ye note namespace ka hai</text>
  </note>
</root>`,
        note:
          'h:table aur f:table ka local naam same hai par namespace alag — isliye clash nahi. URI sirf unique naam hai, wahan file hona zaroori nahi.',
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'XSLT Transformation Pipeline',
        diagram: 'xslt-pipeline',
        caption:
          'books.xml (data) + books.xsl (rules) → XSLT processor → HTML output. Right side wahi HTML hai jo browser dikhata hai. Exam mein ye pipeline draw karna aur ek template ka code likhna best answer hai.',
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'XSLT Stylesheet — XML se HTML',
        intro:
          'Ye do files hain: data (books.xml) aur rules (books.xsl). XSLT processor inhe milakar HTML banata hai. Har xsl: element ek instruction hai — template match karta hai, for-each loop chalata hai, value-of value nikaalta hai.',
        language: 'xslt',
        filename: 'books.xsl',
        code: `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <body>
        <h1>Book List</h1>
        <ul>
          <xsl:for-each select="books/book">
            <xsl:sort select="title"/>
            <li>
              <xsl:value-of select="title"/>
              —
              <xsl:value-of select="price"/>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>

<!-- books.xml ke prolog mein ye line add karein: -->
<?xml-stylesheet type="text/xsl" href="books.xsl"?>`,
        note:
          'match="/" poore document par lagta hai. for-each select="books/book" har book par ghoomta hai. sort select="title" se alphabetical order aata hai. value-of select="price" us element ki value nikaalta hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'XSLT ka Result — Yahi HTML Browser Dikhata Hai',
        intro:
          'Ye wahi transformation hai jo upar ke stylesheet se banta hai — XML ka data HTML list mein badal gaya. Left mein source XML, right mein final HTML output.',
        language: 'xml',
        filename: 'books.xml (source)',
        code: `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="books.xsl"?>
<books>
  <book>
    <title>MCA Notes</title>
    <price>450</price>
  </book>
  <book>
    <title>Web Technology</title>
    <price>380</price>
  </book>
  <book>
    <title>Data Science</title>
    <price>520</price>
  </book>
</books>`,
        html: `<h1 style="font-family:Arial,sans-serif;font-size:22px;color:#12203d;margin:0 0 10px;">Book List</h1>
<ul style="margin:0;padding-left:22px;line-height:1.9;">
  <li>Data Science — 520</li>
  <li>MCA Notes — 450</li>
  <li>Web Technology — 380</li>
</ul>`,
        caption:
          'Output ko dhyan se dekhein: titles alphabetical hain (xsl:sort ki wajah se), aur har item mein title + price hai (xsl:value-of se).',
        height: 190,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'XPath Expressions — Data Kaise Chunte Hain',
        columns: ['Kya select karta hai', 'Example result'],
        columnColors: ['#00d4ff', '#c4ff00'],
        rows: [
          { label: '/', values: ['Document ka root', 'poora tree'] },
          { label: 'books/book', values: ['books ke andar har book', '3 books'] },
          { label: '//title', values: ['Kahin bhi title element', 'saare titles'] },
          { label: '@id', values: ['id attribute', 'attribute value'] },
          { label: 'text()', values: ['Element ka text', 'Riya Sharma'] },
          { label: 'price[. > 400]', values: ['Filter (condition)', 'sirf 450 aur 520'] },
          { label: 'book[1]', values: ['Pehla book', 'MCA Notes'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Namespace aur XSLT Ke Points',
        points: [
          'Namespace declare: xmlns:prefix="uri"; use: prefix:element.',
          'Default namespace: xmlns="uri" — prefix ke bina wale elements par lagta hai.',
          'Ek hi local naam do namespaces mein allowed — clash nahi hota.',
          'XSLT stylesheet root: <xsl:stylesheet version="1.0" xmlns:xsl="...">.',
          'Templates: match="/" (root), match="book" (element); instructions: for-each, value-of, sort, if.',
          'Browser XSLT aapne aap lagata hai jab XML ke prolog mein <?xml-stylesheet ...?> ho.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Namespace = naam ka space, URI se identify, prefix se use.',
          'Default namespace prefix ke bina wale elements par lagta hai.',
          'XSLT = XML ko HTML/XML/text mein badalne ki language.',
          'Template + XPath + for-each/value-of = transformation ka core.',
          'xml-stylesheet PI se browser transformation khud apply karta hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What are XML namespaces? Explain with an example why they are needed.',
        answer:
          '**Namespace:** element aur attribute ke naamo ka ek named space, URI se identify hota hai.\n\n**Declaration:** `xmlns:prefix="http://example.com/uri"`\n**Use:** `<prefix:element>`\n**Default:** `xmlns="uri"` (bina prefix wale elements par)\n\n**Kyun chahiye (clash problem):**\n```\n<!-- ambiguous: kaunsa table? -->\n<table><tr><td>cell</td></tr></table>\n<table><name>Oak</name></table>\n```\n\n**Solution:**\n```\n<root xmlns:h="http://www.w3.org/TR/html4/"\n      xmlns:f="http://example.com/furniture">\n  <h:table><h:tr><h:td>cell</h:td></h:tr></h:table>\n  <f:table><f:name>Oak</f:name></f:table>\n</root>\n```\n\n**Points:**\n- URI sirf unique identifier hai, wahan file hona zaroori nahi\n- Same local name alag namespaces mein allowed\n- XSLT/Schema mein bhi namespaces use hote hain\n\n**Diagram:** Refer to the XSLT pipeline diagram.',
      },
      {
        question: 'What is XSLT? Explain how an XML document is transformed into HTML with an example.',
        answer:
          '**XSLT (eXtensible Stylesheet Language Transformations):** XML-based language jo ek XML document ko doosre format (HTML, XML, text) mein transform karti hai.\n\n**Steps:**\n1. XML file mein stylesheet ka reference:\n```\n<?xml-stylesheet type="text/xsl" href="books.xsl"?>\n```\n2. Stylesheet mein templates define karein:\n```\n<xsl:stylesheet version="1.0"\n  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\n  <xsl:template match="/">\n    <h1>Book List</h1>\n    <ul>\n      <xsl:for-each select="books/book">\n        <li><xsl:value-of select="title"/></li>\n      </xsl:for-each>\n    </ul>\n  </xsl:template>\n</xsl:stylesheet>\n```\n3. Processor (browser ya libxslt) XPath se match karta hai aur output banata hai.\n\n| Element | Kaam |\n|---|---|\n| `xsl:template` | Rule (match se) |\n| `xsl:for-each` | Loop |\n| `xsl:value-of` | Value nikaalna |\n| `xsl:sort` | Sorting |\n| `xsl:if` | Condition |\n\n**Output:** XML ka data HTML heading + list ban jaata hai.\n\n**Diagram:** Refer to the XSLT pipeline diagram.',
      },
      {
        question: 'Differentiate between CSS and XSLT for displaying XML.',
        answer:
          '| Basis | CSS | XSLT |\n|---|---|---|\n| Kaam | Style lagana | Transform karna |\n| Output | Same XML + style | Naya document (HTML/XML/text) |\n| Power | Colours, fonts, layout | Loops, conditions, sorting, naye elements |\n| Language | CSS rules | XML-based (xsl: instructions) |\n| Data change | Nahi kar sakta | Data ko reshape kar sakta hai |\n| Use | Simple XML viewing | Reports, feeds, XML→HTML pages |\n\n**CSS example:**\n```\nbook { display: block; border-bottom: 1px solid #ccc; }\ntitle { font-weight: bold; }\n```\n\n**XSLT example:**\n```\n<xsl:for-each select="books/book">\n  <li><xsl:value-of select="title"/></li>\n</xsl:for-each>\n```\n\n**Exam line:** "CSS XML ko *dikhata* hai, XSLT XML ko *badal* deta hai."',
      },
    ],
  },
];
