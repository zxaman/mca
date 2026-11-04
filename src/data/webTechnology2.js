// ============================================================
// WEB TECHNOLOGY — Unit I, topics 1.6 to 1.10
//  1.6  HTML elements: headings, paragraphs, line break
//  1.7  Colors and fonts
//  1.8  Links
//  1.9  Frames
//  1.10 Lists
// ============================================================

export const webTechnologyTopicsB = [
  // ==========================================================
  // 1.6 — Headings, paragraphs, line break
  // ==========================================================
  {
    id: 'wt-headings-paragraphs',
    number: '1.6',
    title: 'HTML Elements: Headings, Paragraphs, Line Break',
    subtitle: 'h1 se h6, p, br, hr — text ko structure dena',
    icon: 'tag',
    accent: '#c4ff00',
    englishDefinition:
      'HTML text is structured with semantic elements. Headings <h1> to <h6> define six levels of section headings, where <h1> is the most important and <h6> the least; browsers render them at decreasing default sizes and search engines use them to understand page hierarchy. The paragraph element <p> wraps a block of text and automatically adds space above and below it. The line break <br> inserts a single line break inside text without creating a new paragraph, and is a void element. The horizontal rule <hr> draws a thematic separator, <pre> preserves whitespace and line breaks, and &nbsp; inserts a non-breaking space. All of these are block-level except <br> and inline-only helpers.',
    intro:
      'Ye sabse aasan topic lagta hai, par exam mein "difference between <br> and <p>" aur "why only one h1" jaise sawaal aate hain. Do baatein pakki kar lein: headings sirf bade dikhne ke liye nahi hain — wo page ka outline banati hain (SEO + screen reader ke liye); aur <br> nayi line deta hai par naya paragraph nahi banata. Neeche har element ka code aur uska asli output dono diye hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Text Elements ka Kaam',
        body:
          'Headings (h1–h6) page ka structure batati hain — jaise kitaab ke chapters aur sub-chapters. h1 page ka main title hota hai (ek page par sirf ek), h2 sections ke liye, h3 sub-sections ke liye. Paragraph (p) normal text ka block hai — browser iske upar-neeche khud margin chhodta hai. Line break (br) ek hi paragraph ke andar nayi line laata hai, jaise address ya poem mein.',
        body2:
          'Do aur elements yaad rakhein: <hr> ek horizontal line (thematic break) banata hai, aur <pre> whitespace aur line breaks ko jaisa likha hai waisa hi dikhata hai (code dikhane ke liye perfect). &nbsp; (non-breaking space) extra space ke liye use hota hai jab HTML multiple spaces ko ek space bana deta hai.',
        chips: ['h1–h6', 'p', 'br', 'hr', 'pre', '&nbsp;'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Headings, Paragraph aur Line Break',
        diagram: 'html-elements',
        caption:
          'Left mein h1 se h6 ka size order hai (26px se 12.5px default). Right mein paragraph ka automatic gap aur <br> ka single line break. Exam mein heading levels ka diagram banake likhein: h1 ek hi, levels skip nahi.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Headings, Paragraph aur <br> Ek Saath',
        intro:
          'Left ka code exactly right ke output ko banata hai. Dhyan dein — headings apne aap bold aur bade dikhti hain, paragraphs ke beech gap aa jaata hai, aur <br> sirf nayi line deta hai (gap nahi).',
        language: 'html',
        filename: 'text.html',
        code: `<h1>MCA Notes — Web Technology</h1>
<h2>Unit I: HTML and XML</h2>

<p>Ye pehla paragraph hai. Browser iske
aage-peeche khud jagah chhodta hai.</p>

<p>Ye doosra paragraph hai — beech mein
gap apne aap ban gaya.</p>

<h3>Student details (br ka use)</h3>
<p>
  Naam: Riya Sharma<br>
  Course: MCA<br>
  City: Pune
</p>

<hr>
<p>Upar ki line &lt;hr&gt; se aayi hai.</p>`,
        html: `<h1 style="font-size:26px;margin:0 0 6px;color:#111;font-family:Arial,sans-serif;">MCA Notes — Web Technology</h1>
<h2 style="font-size:21px;margin:0 0 10px;color:#333;font-family:Arial,sans-serif;">Unit I: HTML and XML</h2>
<p style="margin:0 0 12px;">Ye pehla paragraph hai. Browser iske aage-peeche khud jagah chhodta hai.</p>
<p style="margin:0 0 12px;">Ye doosra paragraph hai — beech mein gap apne aap ban gaya.</p>
<h3 style="font-size:17px;margin:0 0 8px;color:#333;font-family:Arial,sans-serif;">Student details (br ka use)</h3>
<p style="margin:0 0 12px;">Naam: Riya Sharma<br>Course: MCA<br>City: Pune</p>
<hr style="border:0;border-top:1px solid #bbb;margin:10px 0;">
<p style="margin:0;">Upar ki line &lt;hr&gt; se aayi hai.</p>`,
        caption:
          'Do paragraph ke beech bada gap = <p> ka default margin. Naam/Course/City ke beech chhota gap = <br>. Yahi dono ka practical farak hai.',
        height: 330,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'pre aur &nbsp; — Formatting Bachana',
        intro:
          'HTML multiple spaces ko ek space bana deta hai aur newline ko ignore karta hai. Agar formatting exactly chahiye (code, ASCII art, poem) to <pre> use karein.',
        language: 'html',
        filename: 'pre.html',
        code: `<!-- HTML spaces/newlines ignore karta hai -->
<p>Yahan      bahut   space   tha</p>

<!-- pre sab kuch jaisa hai waisa dikhata hai -->
<pre>
Roll   Name     Marks
1      Riya      78
2      Aman      82
</pre>

<!-- extra space ke liye &nbsp; -->
<p>Total:&nbsp;&nbsp;&nbsp;250</p>`,
        note:
          '<pre> ka font monospace hota hai. <pre> ke andar HTML tags chalte hain — code dikhana ho to &lt; aur &gt; likhna padta hai.',
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Rules Jo Yaad Rakhne Hain',
        points: [
          'Ek page par sirf ek <h1> — wo page ka main title hota hai.',
          'Heading levels skip na karein: h2 ke baad h4 nahi, h3 aayega.',
          '<br> nayi line deta hai (line break), <p> naya block (paragraph gap ke saath).',
          '<br> void element hai — closing tag nahi hota.',
          'Headings sirf mota dikhane ke liye na use karein — uske liye CSS (font-weight, font-size) hai.',
          '<pre> whitespace preserve karta hai; &nbsp; ek non-breaking space deta hai.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'h1–h6 = six heading levels, importance aur size ghatti jaati hai.',
          'p = paragraph block, default margin ke saath.',
          'br = ek line break (void element); hr = horizontal separator.',
          'pre = whitespace preserve; &nbsp; = extra space.',
          'Heading hierarchy SEO aur accessibility dono ke liye zaroori hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the heading tags in HTML. What is the difference between <p>, <br> and <hr>?',
        answer:
          '**Heading tags:** `<h1>` se `<h6>` tak — 6 levels. `<h1>` sabse important (sabse bada default size), `<h6>` sabse kam.\n\n```\n<h1>Main title</h1>\n<h2>Section</h2>\n<h3>Sub-section</h3>\n```\n\n- Search engines page hierarchy samajhte hain\n- Screen readers headings se navigate karte hain\n- Ek page par ek `<h1>`, levels skip nahi\n\n**Difference:**\n\n| Tag | Kaam | Behaviour |\n|---|---|---|\n| `<p>` | Paragraph | Naya block, upar-neeche margin |\n| `<br>` | Line break | Nayi line, paragraph gap nahi |\n| `<hr>` | Thematic break | Horizontal line |\n\n**Example:**\n\n```\n<p>Line 1<br>Line 2</p>\n<hr>\n<p>Naya paragraph</p>\n```\n\n**Diagram:** Refer to the headings / paragraph / br diagram.',
      },
      {
        question: 'Why is only one <h1> recommended per page? Explain with SEO and accessibility reasons.',
        answer:
          '**Reason 1 — page ka topic clear:** `<h1>` page ka main subject batata hai; ek se zyada h1 se search engine confuse hota hai ki page kis baare mein hai.\n\n**Reason 2 — SEO:** search engine headings se content ka outline banata hai. Ek clear h1 + organised h2/h3 better ranking aur better snippets dete hain.\n\n**Reason 3 — accessibility:** screen reader users headings list se page ke sections par jump karte hain (heading navigation). Do h1 ka matlab do "titles" — navigation confusing.\n\n**Reason 4 — design consistency:** ek hi main title hone se visual hierarchy banti hai.\n\n**Heading order example:**\n\n```\nh1 MCA Notes\n  h2 Unit I\n    h3 1.1 Introduction\n    h3 1.2 Internet and WWW\n  h2 Unit II\n```\n\n**Note:** size badalne ke liye h4 ki jagah h2 + CSS use karein — heading level content ka structure batata hai, font size nahi.\n\n**Diagram:** Refer to the headings diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.7 — Colors and fonts
  // ==========================================================
  {
    id: 'wt-colors-fonts',
    number: '1.7',
    title: 'Colors and Fonts in HTML',
    subtitle: 'bgcolor se CSS tak — rang aur typeface control karna',
    icon: 'design',
    accent: '#ff8800',
    englishDefinition:
      'Colour and typography in HTML are controlled by attributes and CSS properties. Older HTML used presentational attributes — body bgcolor="lightblue", text, link, and the <font> tag with color, size and face attributes. These are deprecated in HTML5 and replaced by CSS: color (text colour), background-color, font-family, font-size, font-weight, font-style and line-height, applied inline with the style attribute or through <style>/external CSS. Colours may be written as a name (red), a hex code (#ff0000), an rgb()/rgba() value or hsl(). Fonts are specified as a stack — font-family: Arial, Helvetica, sans-serif — so the browser falls back gracefully. Good typography uses limited fonts, limited sizes and adequate contrast.',
    intro:
      'Pehle log rang aur font <font> tag se badalte the — ab wo deprecated hai. Exam mein aksar dono poochte hain: purana tarika (attributes) aur naya (CSS). Isliye dono ka code dekh lena zaroori hai. Colors likhne ke chaar tarike (name, hex, rgb, hsl) aur font-family ka fallback stack — ye do cheezein exam mein directly poochi jaati hain. Neeche har tarika live output ke saath hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Rang aur Font — kaise control karein?',
        body:
          'HTML mein colour do jagah lagta hai: text ka colour (CSS property "color") aur background ka colour ("background-color"). Pixels ke roop mein value 4 tarah likhi ja sakti hai — naam (red), hex (#ff0000), rgb(255, 0, 0) ya hsl(0, 100%, 50%). Transparency chahiye to rgba() use karein.',
        body2:
          'Fonts ke liye font-family (typeface), font-size (size), font-weight (bold), font-style (italic) aur line-height use hote hain. font-family mein ek stack likha jaata hai — "Arial, Helvetica, sans-serif" — agar pehla font system par na ho to browser agla try karta hai. Purana <font color="red" size="5" face="Arial"> tag HTML5 mein deprecated hai.',
        chips: ['color', 'background-color', 'font-family', 'font-size', 'hex', 'rgb', 'font tag'],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Colours Likhne Ke Chaar Tarike',
        intro:
          'Ek hi rang chaar tarah likha gaya hai — chaaron ka output same hai. Exam mein ye chaar formats likhna aur hex ka example dena zaroori hai.',
        language: 'html',
        filename: 'colors.html',
        code: `<p style="color: red;">1. Named colour — red</p>

<p style="color: #ff0000;">2. Hex code — #ff0000</p>

<p style="color: rgb(255, 0, 0);">3. RGB — rgb(255, 0, 0)</p>

<p style="color: hsl(0, 100%, 50%);">4. HSL — hsl(0, 100%, 50%)</p>

<p style="background-color: #0047ff; color: #ffffff; padding: 8px;">
  Background colour + white text (contrast)
</p>`,
        html: `<p style="color:red;margin:0 0 8px;">1. Named colour — red</p>
<p style="color:#ff0000;margin:0 0 8px;">2. Hex code — #ff0000</p>
<p style="color:rgb(255,0,0);margin:0 0 8px;">3. RGB — rgb(255, 0, 0)</p>
<p style="color:hsl(0,100%,50%);margin:0 0 8px;">4. HSL — hsl(0, 100%, 50%)</p>
<p style="background-color:#0047ff;color:#fff;padding:8px;margin:0;">Background colour + white text (contrast)</p>`,
        caption:
          'Chaaron ka rang same hai — sirf likhne ka tarika alag. Hex mein har pair (RR GG BB) 0–255 range ko 00–FF mein dikhata hai.',
        height: 200,
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Fonts — Family, Size, Weight',
        intro:
          'Purana <font> tag aur naya CSS style — dono ek hi page par, taaki farak dikhe. Purana tag deprecated hai, par exam mein poocha jaata hai.',
        language: 'html',
        filename: 'fonts.html',
        code: `<!-- purana tarika (deprecated) -->
<font color="#c0392b" size="5" face="Georgia">
  Purana font tag
</font>

<!-- naya tarika: CSS -->
<p style="font-family: Georgia, serif;
          font-size: 22px;
          font-weight: bold;
          color: #c0392b;">
  Naya CSS tarika
</p>

<p style="font-family: 'Courier New', monospace;">
  Monospace font (code jaisa)
</p>

<p style="font-family: Verdana, sans-serif;
          font-size: 13px; line-height: 1.6;">
  Chhota text, better line-height.
</p>`,
        html: `<p style="font-family:Georgia,serif;font-size:22px;font-weight:700;color:#c0392b;margin:0 0 10px;">Purana font tag jaisa dikhta hai</p>
<p style="font-family:Georgia,serif;font-size:22px;font-weight:700;color:#c0392b;margin:0 0 10px;">Naya CSS tarika</p>
<p style="font-family:'Courier New',monospace;margin:0 0 10px;">Monospace font (code jaisa)</p>
<p style="font-family:Verdana,sans-serif;font-size:13px;line-height:1.6;margin:0;color:#333;">Chhota text, better line-height — padhne mein aaram.</p>`,
        caption:
          '<font size="5"> ka size 1–7 ke scale mein tha; CSS mein seedha pixel (22px) likhte hain — zyada control aur consistency.',
        height: 240,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Purana HTML vs Modern CSS',
        columns: ['Old HTML (deprecated)', 'Modern CSS'],
        columnColors: ['#8f9dc4', '#c4ff00'],
        rows: [
          { label: 'Text colour', values: ['<font color="red">', 'color: red'] },
          { label: 'Background', values: ['bgcolor attribute', 'background-color'] },
          { label: 'Font size', values: ['<font size="1–7">', 'font-size: 16px'] },
          { label: 'Font family', values: ['<font face="Arial">', 'font-family: Arial, sans-serif'] },
          { label: 'Bold / italic', values: ['<b>, <i>', 'font-weight: 700; font-style: italic'] },
          { label: 'Kahan likhte hain', values: ['Har element par', 'Ek CSS file mein'] },
          { label: 'HTML5 status', values: ['Deprecated', 'Recommended'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Colour aur Font Ke Rules',
        points: [
          'Colour 4 tarah: name (red), hex (#ff0000), rgb(255,0,0), hsl(0,100%,50%).',
          'Hex 6 digit = RRGGBB; #fff short form bhi chalta hai (white).',
          'Font stack likhein: "Arial, Helvetica, sans-serif" — fallback ke liye.',
          'Body text kam se kam 16px aur contrast ratio 4.5:1 rakhein (accessibility).',
          'Ek site par 2 font families aur 3 font sizes kaafi hain — consistency.',
          '<font>, bgcolor, text, link attributes HTML5 mein deprecated hain.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Rang CSS "color" aur "background-color" se; 4 formats mein likh sakte hain.',
          'Font: font-family, font-size, font-weight, font-style, line-height.',
          '<font> tag deprecated — CSS recommended.',
          'Font stack fallback ke liye hota hai.',
          'Contrast aur readable size accessibility ke basics hain.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the different ways of specifying colours in HTML/CSS with examples.',
        answer:
          '**1. Colour name** — `color: red;` (140+ named colours: blue, tomato, teal)\n\n**2. Hex code** — `color: #ff0000;`\n- 6 digits: RR GG BB (00–FF)\n- `#f00` short form\n- `#0047ff` = R=00, G=47, B=ff\n\n**3. RGB / RGBA** — `color: rgb(255, 0, 0);` `rgba(0, 71, 255, 0.5)`\n- 0–255 per channel\n- alpha 0–1 transparency ke liye\n\n**4. HSL** — `color: hsl(0, 100%, 50%);`\n- hue 0–360 (colour wheel), saturation %, lightness %\n\n**Example table:**\n\n| Format | Example | Use |\n|---|---|---|\n| Name | red | Simple, readable |\n| Hex | #ff0000 | Design tools se copy |\n| RGB | rgb(255,0,0) | Dynamic calculation |\n| HSL | hsl(0,100%,50%) | Shades banana |\n\n**Background:** `background-color: #0047ff; color: #ffffff;` — contrast 4.5:1 rakhein.',
      },
      {
        question: 'How can you change the font of text in HTML? Compare the <font> tag with CSS.',
        answer:
          '**<font> tag (old, deprecated in HTML5):**\n\n```\n<font color="red" size="5" face="Arial">Text</font>\n```\n\n- size 1–7 (relative, small)\n- har element par repeat karna padta hai\n- style aur structure mix ho jaate hain\n\n**CSS (modern):**\n\n```\np {\n  font-family: "Arial", Helvetica, sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  font-style: italic;\n  color: #c0392b;\n}\n```\n\n- one place, whole site\n- px/rem/% mein exact control\n- HTML sirf structure, CSS sirf style\n\n| Basis | <font> | CSS |\n|---|---|---|\n| Status | Deprecated | Recommended |\n| Scope | Ek element | Poori site |\n| Units | 1–7 | px, rem, % |\n| Maintainability | Kam | Zyada |\n\n**Font stack:** pehla available font use hota hai, warna agla — `Arial, Helvetica, sans-serif`.\n\n**Diagram:** Refer to the CSS insertion diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.8 — Links
  // ==========================================================
  {
    id: 'wt-links',
    number: '1.8',
    title: 'Links (Hyperlinks)',
    subtitle: 'a tag, absolute vs relative URL, target aur anchors',
    icon: 'arrow',
    accent: '#00d4ff',
    englishDefinition:
      'A hyperlink is created with the anchor element <a> and its href attribute, which points to another resource — a page on the same site (relative URL), a page on another site (absolute URL), a file, an email address (mailto:), a phone number (tel:) or a specific section of the same page (fragment, #id). The target attribute controls where the link opens (_self default, _blank new tab, _parent, _top), rel="noopener noreferrer" secures links opened with target="_blank", and the optional title attribute shows a tooltip. Hyperlinks are what make the web a web — they connect documents into a navigable graph, and their text (anchor text) should describe the destination for accessibility and SEO.',
    intro:
      'Link wo cheez hai jo web ko "web" banati hai — ek page se doosre page tak. Exam ke liye link ke types (internal, external, email, phone, anchor) aur attributes (href, target, title, rel) yaad rakhein. Ek practical baat: target="_blank" ke saath rel="noopener noreferrer" lagana security ke liye zaroori hai. Neeche har type ka code aur output dono hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Anchor tag kaise kaam karta hai?',
        body:
          'Link ka syntax hai: <a href="url">link text</a>. href batata hai kahan jaana hai, aur tag ke beech ka text screen par dikhta hai (clickable). Agar href mein poora address hai (https://...) to absolute link, aur sirf path hai (notes/html.html) to relative link — jo current page ke location ke hisaab se resolve hota hai.',
        body2:
          'target="_blank" link ko naye tab mein kholta hai; iske saath rel="noopener noreferrer" lagana chahiye warna naya page window.opener se aapka page control kar sakta hai. mailto: email app kholta hai, tel: phone par call, aur #id usi page ke us section par le jaata hai (anchor link).',
        chips: ['<a>', 'href', 'target', 'rel', 'mailto:', 'tel:', 'anchor link'],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Link Ke Paanch Types',
        intro:
          'Ek hi page mein internal, external, email, phone aur anchor link — output mein har link ka rang aur underline dekh sakte hain.',
        language: 'html',
        filename: 'links.html',
        code: `<!-- 1. internal (relative) link -->
<a href="css.html">CSS notes padho</a>

<!-- 2. external (absolute) link -->
<a href="https://www.w3schools.com" target="_blank"
   rel="noopener noreferrer">W3Schools</a>

<!-- 3. email link -->
<a href="mailto:help@college.edu">Email karo</a>

<!-- 4. phone link -->
<a href="tel:+919876543210">Call karo</a>

<!-- 5. page ke andar anchor -->
<a href="#forms">Forms section par jao</a>

<h2 id="forms">Forms section</h2>`,
        html: `<p style="margin:0 0 8px;">1. <a href="#css" style="color:#0047ff;">CSS notes padho</a> — internal link</p>
<p style="margin:0 0 8px;">2. <a href="#ext" style="color:#0047ff;">W3Schools</a> — external, naye tab mein khulta hai</p>
<p style="margin:0 0 8px;">3. <a href="#mail" style="color:#0047ff;">Email karo</a> — mail app khulta hai</p>
<p style="margin:0 0 8px;">4. <a href="#tel" style="color:#0047ff;">Call karo</a> — phone dialer khulta hai</p>
<p style="margin:0 0 12px;">5. <a href="#forms" style="color:#0047ff;">Forms section par jao</a> — usi page ka anchor</p>
<h2 id="forms" style="font-size:18px;margin:0;">Forms section</h2>`,
        caption:
          'Preview mein href badal diya gaya hai taaki click par page na chhoote. Asli code mein wahi URL hote hain jo left side likhe hain.',
        height: 230,
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Image Link aur Button Jaisa Link',
        intro:
          'Link ke andar image bhi aa sakti hai, aur CSS se link ko button jaisa bana sakte hain. Neeche dono ek saath.',
        language: 'html',
        filename: 'link-styles.html',
        code: `<!-- image par link (image map ka simple form) -->
<a href="/home">
  <img src="logo.svg" alt="Home" width="60">
</a>

<!-- button jaisa link -->
<a href="/admission" style="
     background:#0047ff; color:#fff;
     padding:8px 16px; border-radius:6px;
     text-decoration:none;">
  Admission Form
</a>`,
        html: `<p style="margin:0 0 10px;">
  <a href="#home" style="display:inline-block;text-decoration:none;">
    <svg width="60" height="40" viewBox="0 0 60 40"><rect width="60" height="40" rx="6" fill="#0047ff"/><text x="30" y="26" text-anchor="middle" font-size="14" fill="#fff" font-family="Arial">MCA</text></svg>
  </a>
</p>
<a href="#admission" style="background:#0047ff;color:#fff;padding:8px 16px;border-radius:6px;text-decoration:none;display:inline-block;">Admission Form</a>`,
        caption:
          'Link = <a>, par dikhne ka tarika CSS se. text-decoration:none se underline hatta hai, background + padding se button banta hai.',
        height: 150,
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Link Attributes aur Rules',
        points: [
          'href = destination (relative, absolute, mailto:, tel:, #id).',
          'target="_self" (default, same tab) · "_blank" (naya tab) · "_parent" / "_top" (frames).',
          'target="_blank" ke saath rel="noopener noreferrer" — security ke liye.',
          'title attribute hover par tooltip dikhata hai (par accessibility ke liye kaafi nahi).',
          'Anchor text meaningful likhein — "yahan click karein" ke bajaye "CSS notes padho".',
          'Visited link ka rang CSS se (:visited) badalta hai; default blue/purple browser se aata hai.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Link = <a href="...">text</a>; hyperlink web ka base hai.',
          'Internal (relative) vs external (absolute) vs email (mailto:) vs phone (tel:) vs anchor (#id).',
          'target="_blank" naye tab ke liye; rel="noopener noreferrer" ke saath.',
          'Image ya CSS button link ke andar/upar ban sakta hai.',
          'Meaningful anchor text SEO aur accessibility dono improve karta hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain hyperlinks in HTML. Discuss the types of links with syntax and examples.',
        answer:
          '**Hyperlink:** `<a>` tag se bana clickable element jo ek document ko doosre se jodta hai. Syntax: `<a href="url">text</a>`\n\n**Types:**\n\n1. **Internal (relative) link** — usi site ke page par\n```\n<a href="notes/css.html">CSS notes</a>\n```\n2. **External (absolute) link** — doosri site par\n```\n<a href="https://www.w3.org" target="_blank">W3C</a>\n```\n3. **Email link**\n```\n<a href="mailto:help@college.edu">Email</a>\n```\n4. **Phone link**\n```\n<a href="tel:+919876543210">Call</a>\n```\n5. **Anchor / bookmark link** — usi page ke section par\n```\n<a href="#forms">Forms</a>\n<h2 id="forms">Forms</h2>\n```\n6. **Image link**\n```\n<a href="/home"><img src="logo.png" alt="Home"></a>\n```\n\n**Attributes:** href (required), target, rel, title, download.\n\n**Diagram:** Refer to the Internet vs WWW diagram (URL structure).',
      },
      {
        question: 'What is the difference between absolute and relative URLs? Why should rel="noopener" be used with target="_blank"?',
        answer:
          '**Absolute URL:** poora address — protocol + domain + path. Kisi bhi page se kaam karta hai.\n```\n<a href="https://www.college.edu/notes/html.html">Notes</a>\n```\n\n**Relative URL:** sirf path, current page ke location se resolve hota hai. Site shift hone par bhi chalta hai.\n```\n<a href="notes/html.html">Notes</a>      <!-- same folder ke andar -->\n<a href="../index.html">Home</a>      <!-- ek level upar -->\n<a href="/about.html">About</a>        <!-- site root se -->\n```\n\n| Basis | Absolute | Relative |\n|---|---|---|\n| Form | https://site.com/page | /page ya ../page |\n| Portability | Site change par kaam nahi | Kaam karta hai |\n| Dev use | External sites | Internal navigation |\n\n**target="_blank" risk:** naya page `window.opener` se purana page control kar sakta hai — phishing ya redirect possible hai. `rel="noopener noreferrer"` is reference ko block karta hai:\n```\n<a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>\n```\n\n**Exam line:** "Relative link maintainability deta hai, absolute link clarity; target=_blank ke saath noopener security deta hai."',
      },
    ],
  },

  // ==========================================================
  // 1.9 — Frames
  // ==========================================================
  {
    id: 'wt-frames',
    number: '1.9',
    title: 'Frames',
    subtitle: 'frameset, frame, noframes aur modern iframe',
    icon: 'layout',
    accent: '#ff7ab2',
    englishDefinition:
      'Frames divide the browser window into multiple independent rectangular regions, each loading a separate HTML document. The classic implementation used <frameset> with rows/cols attributes plus <frame src> elements and <noframes> fallback content, all in place of <body>. Frames were removed in HTML5 because they break bookmarks and URLs, printing, search engine indexing and accessibility. The modern equivalent is the inline frame <iframe src="...">, a normal element placed inside the body that embeds another document at a fixed size and supports sandbox, allow, width, height and loading attributes. Iframes are used today for maps, videos, ads, payment widgets and isolated third-party content — never for page layout.',
    intro:
      'Frames ka concept simple hai: ek window ko tukdon mein baant do, har tukde mein alag HTML file. Purane tarike (<frameset>) mein poora body hi replace ho jaata tha — isliye HTML5 ne ise hata diya. Aaj <iframe> se ek chhota document kisi page ke andar daala jaata hai. Exam mein dono ka code, farak aur "frames kyun deprecated" — teeno likhne padte hain. Neeche historic frameset code aur chalta hua iframe demo dono hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Frames kya hote hain?',
        body:
          'Frame browser window ka ek hissa hai jismein alag HTML document load hota hai. Purane HTML mein <frameset rows="80,*"> se window do rows mein baant di jaati thi, aur har <frame src="..."> us hisse mein ek file dikhata tha. <noframes> un browsers ke liye fallback tha jo frames support nahi karte.',
        body2:
          'Aaj ka <iframe> ek element hai jo body ke andar kisi bhi jagah rakha ja sakta hai — jaise Google Maps, YouTube video ya payment widget. Iske saath sandbox attribute se security control hota hai (scripts on/off). Page layout ke liye iframe use nahi karte — uske liye CSS grid/flex hai.',
        chips: ['frameset', 'frame', 'noframes', 'iframe', 'sandbox', 'src'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Frameset Layout vs Modern iframe',
        diagram: 'frames-layout',
        caption:
          'Left: purana frameset — menu.html + main.html, target="main" se click par sirf doosra frame badalta hai. Right: aaj ka iframe — normal page ke andar ek chhota document. Neeche likha hai ki HTML5 ne frameset kyun hataya.',
      },
      {
        type: 'code',
        kicker: 'Code (Historic)',
        title: 'Purana frameset Code',
        intro:
          'Ye code aaj ke browser mein kaam nahi karta (HTML5 ne hata diya), par exam mein likhna pad sakta hai. Dhyan dein: isme <body> nahi hota — <frameset> body ki jagah leta hai.',
        language: 'html',
        filename: 'index-frames.html',
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Frames Example</title>
</head>
<frameset cols="25%, 75%">
  <frame src="menu.html" name="menu">
  <frame src="main.html" name="main">
  <noframes>
    <body>
      <p>Aapka browser frames support nahi karta.</p>
    </body>
  </noframes>
</frameset>
</html>

<!-- menu.html ke andar link -->
<a href="notes.html" target="main">Notes kholo</a>`,
        note:
          'target="main" ka matlab: link ka result "main" naam wale frame mein khule. Frameset ke andar <body> allowed nahi hota — yahi sabse bada structural farak hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Aaj Ka Tarika — iframe',
        intro:
          'iframe body ke andar normal element ki tarah baithta hai. Neeche ek iframe ke andar doosra chhota document dikh raha hai — yahi frames ka modern, safe roop hai.',
        language: 'html',
        filename: 'iframe.html',
        code: `<h2>College Map</h2>

<iframe
  src="map.html"
  width="100%"
  height="140"
  title="College location map"
  loading="lazy"
  sandbox="allow-scripts">
</iframe>

<p>iframe ke bahar ka content normal page hai.</p>`,
        html: `<h2 style="font-size:18px;margin:0 0 8px;">College Map</h2>
<div style="border:1px solid #ccd;border-radius:8px;height:120px;background:#eef3ff;display:flex;align-items:center;justify-content:center;color:#0047ff;font-size:13px;">
  &lt;iframe&gt; ka andar ka document (map.html)
</div>
<p style="margin:8px 0 0;color:#444;">iframe ke bahar ka content normal page hai.</p>`,
        caption:
          'Asli iframe allowed nahi hai nested preview mein, isliye uski jagah box dikhaya gaya hai. Code mein wahi iframe hai jo map, video ya payment widget ke liye use hota hai.',
        height: 210,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'frameset vs iframe',
        columns: ['frameset / frame (old)', 'iframe (modern)'],
        columnColors: ['#8f9dc4', '#c4ff00'],
        rows: [
          { label: 'Status', values: ['HTML5 mein removed', 'HTML5 standard, supported'] },
          { label: 'Kahan likhte hain', values: ['body ki jagah', 'body ke andar'] },
          { label: 'Layout', values: ['Poora window todta hai', 'Fixed box, page ke andar'] },
          { label: 'URL / bookmark', values: ['Kaam nahi karta', 'Kaam karta hai'] },
          { label: 'Print / SEO', values: ['Toot jaata hai', 'Theek chalta hai'] },
          { label: 'Security', values: ['Koi control nahi', 'sandbox attribute'] },
          { label: 'Use case', values: ['Purana menu layout', 'Map, video, ad, widget'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Frames Ke Points',
        points: [
          '<frameset rows/cols> window ko baantta hai; <frame src> har hisse mein file load karta hai.',
          '<noframes> fallback content deta hai (purane browsers ke liye).',
          'Frameset wale document mein <body> nahi hota — yahi structure ka main difference hai.',
          'HTML5 ne frameset/frame hata diye: bookmark, back button, printing, SEO aur accessibility tootte the.',
          '<iframe> aaj bhi allowed hai — third-party content (map, video, payment) embed karne ke liye.',
          'sandbox attribute iframe ke andar scripts/forms/navigation ko restrict karta hai.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Frame = window ka tukda jisme alag document chalta hai.',
          'frameset + frame = purana tarika, HTML5 mein removed.',
          'target="frameName" se link ka result us frame mein khulta hai.',
          'iframe = aaj ka inline frame, body ke andar, size + sandbox ke saath.',
          'Layout ke liye CSS grid/flex; embed ke liye iframe.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What are frames? Explain frameset and frame tags with an example.',
        answer:
          '**Frame:** browser window ka ek rectangular hissa jismein alag HTML document load hota hai — is tarah ek window mein kai pages ek saath dikh sakte hain.\n\n**Tags:**\n- `<frameset rows="25%,75%">` ya `cols="25%,75%"` — window ka division\n- `<frame src="menu.html" name="menu">` — ek frame\n- `<noframes>` — fallback\n\n**Example:**\n\n```\n<frameset cols="25%,75%">\n  <frame src="menu.html" name="menu">\n  <frame src="main.html" name="main">\n  <noframes><body>Frames not supported</body></noframes>\n</frameset>\n```\n\n**Link target:** `<a href="notes.html" target="main">Notes</a>` — result main frame mein khulta hai.\n\n**Note:** frameset document mein `<body>` nahi hota.\n\n**Diagram:** Refer to the frames diagram (left side).',
      },
      {
        question: 'Why were frames removed in HTML5? Compare frameset with iframe.',
        answer:
          '**Kyun remove hue (HTML5):**\n1. **URL / bookmark** — kaunsa frame khula hai, URL se pata nahi chalta\n2. **Back button** — history confusing ho jaati hai\n3. **Printing** — print par frames toot jaate hain\n4. **SEO** — search engine frames ko theek se index nahi kar pata tha\n5. **Accessibility** — screen reader ke liye navigation mushkil\n6. **Mobile** — chhoti screen par multiple frames unusable\n\n**Comparison:**\n\n| Basis | frameset | iframe |\n|---|---|---|\n| Status | Removed | Supported |\n| Position | body ki jagah | body ke andar |\n| Layout | Poora window | Fixed box |\n| Security | Nahi | sandbox |\n| Use | Purana layout | Map, video, ad |\n\n**Aaj ka solution:** layout ke liye CSS grid/flex + ek hi document; embed ke liye iframe.\n\n**Diagram:** Refer to the frames diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.10 — Lists
  // ==========================================================
  {
    id: 'wt-lists',
    number: '1.10',
    title: 'Lists',
    subtitle: 'ul, ol, dl — bullet, number aur definition list',
    icon: 'list',
    accent: '#00d4ff',
    englishDefinition:
      'HTML provides three list types. An unordered list <ul> groups items with no particular order and renders bullets (list-style-type: disc, circle, square). An ordered list <ol> numbers items automatically and supports type="1|A|a|I|i", start and reversed attributes. A description (definition) list <dl> pairs terms <dt> with their descriptions <dd>, used for glossaries and FAQs. Every item of <ul>/<ol> must be an <li> element. Lists can be nested inside <li> to any depth, and CSS properties list-style-type, list-style-image and list-style-position control presentation. Lists are also the semantic basis of navigation menus and breadcrumbs.',
    intro:
      'Lists teen tarah ki hoti hain: unordered (bullets), ordered (numbers) aur description (term + meaning). Exam mein aksar "explain types of lists with example" aur "nested list ka code likho" aata hai. Yaad rakhein: <ul> aur <ol> ke andar sirf <li> aata hai — text seedha nahi. Nested list banane ke liye <li> ke andar naya <ul>/<ol> rakhein. Neeche teeno ka live output hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Teen List Types',
        body:
          '<ul> unordered list — items ka order matter nahi karta, bullet dikhta hai. <ol> ordered list — browser khud numbering karta hai (steps, ranking). <dl> description list — <dt> (term) aur <dd> (description) ka joda, jaise dictionary ya FAQ.',
        body2:
          'Har list item <li> ke andar hota hai. Nesting ke liye naya <ul>/<ol> seedha <li> ke andar rakhein — tab indent ban jaata hai. CSS se bullet badal sakte hain: list-style-type: disc | circle | square | none (ul) aur decimal | lower-alpha | upper-roman (ol).',
        chips: ['ul', 'ol', 'dl', 'li', 'dt', 'dd', 'nesting'],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Teeno Lists Ek Saath',
        intro:
          'Left mein teeno lists ka code, right mein output — bullets, numbers aur term/definition ka farak saaf dikhta hai.',
        language: 'html',
        filename: 'lists.html',
        code: `<h3>Unordered (ul)</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3>Ordered (ol)</h3>
<ol>
  <li>Notes padho</li>
  <li>Code likho</li>
  <li>Practice karo</li>
</ol>

<h3>Description (dl)</h3>
<dl>
  <dt>HTML</dt>
  <dd>Structure banata hai</dd>
  <dt>CSS</dt>
  <dd>Design karta hai</dd>
</dl>`,
        html: `<h3 style="font-size:16px;margin:0 0 6px;">Unordered (ul)</h3>
<ul style="margin:0 0 12px;padding-left:22px;"><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>
<h3 style="font-size:16px;margin:0 0 6px;">Ordered (ol)</h3>
<ol style="margin:0 0 12px;padding-left:22px;"><li>Notes padho</li><li>Code likho</li><li>Practice karo</li></ol>
<h3 style="font-size:16px;margin:0 0 6px;">Description (dl)</h3>
<dl style="margin:0;"><dt style="font-weight:700;">HTML</dt><dd style="margin:0 0 4px;padding-left:16px;">Structure banata hai</dd><dt style="font-weight:700;">CSS</dt><dd style="margin:0;padding-left:16px;">Design karta hai</dd></dl>`,
        caption:
          'ul = bullet, ol = number (browser khud ginta hai), dl = term + indented description.',
        height: 330,
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Nested List aur ol ke Attributes',
        intro:
          'Syllabus/notes ke liye nested list sabse zyada use hoti hai. ol mein type aur start attributes se numbering badal sakte hain.',
        language: 'html',
        filename: 'nested.html',
        code: `<ul>
  <li>Unit I — HTML
    <ul>
      <li>Structure</li>
      <li>Forms</li>
    </ul>
  </li>
  <li>Unit II — CSS</li>
</ul>

<ol type="A" start="3">
  <li>Click</li>   <!-- C -->
  <li>Double click</li>
</ol>

<ol type="i">
  <li>First</li>
  <li>Second</li>
</ol>`,
        html: `<ul style="margin:0 0 12px;padding-left:22px;">
  <li>Unit I — HTML
    <ul style="margin:4px 0 0;padding-left:20px;"><li>Structure</li><li>Forms</li></ul>
  </li>
  <li style="margin-top:6px;">Unit II — CSS</li>
</ul>
<ol type="A" start="3" style="margin:0 0 10px;padding-left:22px;"><li>Click</li><li>Double click</li></ol>
<ol type="i" style="margin:0;padding-left:22px;"><li>First</li><li>Second</li></ol>`,
        caption:
          'type="A" start="3" se list C se shuru hoti hai. Nested ul apne aap indent aur naya bullet style (circle) le leta hai.',
        height: 250,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'ul vs ol vs dl',
        columns: ['<ul>', '<ol>', '<dl>'],
        columnColors: ['#00d4ff', '#c4ff00', '#ff8800'],
        rows: [
          { label: 'Order', values: ['Matter nahi karta', 'Matter karta hai', 'Term–definition jodi'] },
          { label: 'Marker', values: ['Bullet (•, ○, ■)', 'Number / letter / roman', 'Koi marker nahi'] },
          { label: 'Child elements', values: ['<li>', '<li>', '<dt> + <dd>'] },
          { label: 'Attributes', values: ['type (CSS se)', 'type, start, reversed', 'Koi khaas nahi'] },
          { label: 'Use', values: ['Features, menu', 'Steps, ranking', 'Glossary, FAQ'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'List Ke Rules',
        points: [
          'ul/ol ke andar sirf <li> allowed hai — text seedha nahi likhna.',
          'Nested list banane ke liye <ul>/<ol> ko <li> ke andar rakhein.',
          'ol ke attributes: type="1|A|a|I|i", start="3", reversed.',
          'dl ke andar <dt> (term) aur <dd> (description) ka joda hota hai.',
          'Bullet hatane ke liye list-style: none (navigation menu mein common).',
          'Responsive menu bhi semantically list hi hoti hai — accessibility ke liye.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'ul = bullet list, ol = numbered list, dl = term–description list.',
          'Child sirf <li> (dl mein <dt>/<dd>).',
          'ol type/start/reversed se numbering control hoti hai.',
          'Nesting <li> ke andar nayi list daal kar hoti hai.',
          'Navigation menu HTML mein list + CSS se banta hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the types of lists in HTML with syntax and examples.',
        answer:
          '**1. Unordered list `<ul>`** — bullet wali list, order matter nahi karta.\n```\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n```\n\n**2. Ordered list `<ol>`** — numbered list.\n```\n<ol type="1" start="1">\n  <li>Step 1</li>\n  <li>Step 2</li>\n</ol>\n```\nAttributes: type (1, A, a, I, i), start, reversed.\n\n**3. Description list `<dl>`** — term aur uska matlab.\n```\n<dl>\n  <dt>HTML</dt>\n  <dd>Structure banata hai</dd>\n</dl>\n```\n\n| Type | Marker | Child | Use |\n|---|---|---|---|\n| ul | Bullet | li | Features, menu |\n| ol | Number | li | Steps, ranking |\n| dl | None | dt/dd | Glossary |\n\n**Nesting:** `<li>` ke andar nayi `<ul>`/`<ol>` rakhne se nested list banti hai.\n\n**Diagram:** Refer to the lists output above (bullets, numbers, terms).',
      },
      {
        question: 'Write the HTML code for a nested list showing syllabus: Unit I with three topics and Unit II with two topics.',
        answer:
          '```\n<ul>\n  <li>Unit I — HTML and XML\n    <ul>\n      <li>Structure of HTML document</li>\n      <li>Forms</li>\n      <li>CSS selectors</li>\n    </ul>\n  </li>\n  <li>Unit II — CSS and JavaScript\n    <ul>\n      <li>Box model</li>\n      <li>JS basics</li>\n    </ul>\n  </li>\n</ul>\n```\n\n**Output:**\n- Unit I — HTML and XML\n  - Structure of HTML document\n  - Forms\n  - CSS selectors\n- Unit II — CSS and JavaScript\n  - Box model\n  - JS basics\n\n**Points:**\n- Nested list `<li>` ke andar hoti hai, `<ul>` ke andar nahi\n- Browser apne aap indent aur bullet style badal deta hai (disc → circle → square)\n- CSS se control: `ul ul { list-style-type: circle; }`',
      },
    ],
  },
];
