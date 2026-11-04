// ============================================================
// WEB TECHNOLOGY — Unit I, topics 1.11 to 1.15
//  1.11 Tables
//  1.12 Images
//  1.13 Forms
//  1.14 Difference between HTML and HTML5
//  1.15 CSS: introduction, inserting CSS, selectors
// ============================================================

export const webTechnologyTopicsC = [
  // ==========================================================
  // 1.11 — Tables
  // ==========================================================
  {
    id: 'wt-tables',
    number: '1.11',
    title: 'Tables',
    subtitle: 'table, tr, td, th — row, column aur colspan/rowspan',
    icon: 'table',
    accent: '#c4ff00',
    englishDefinition:
      'An HTML table displays data in rows and columns using the <table> element. A row is <tr>, a data cell is <td> and a header cell is <th> (bold and centred by default, and announced as a header by screen readers). A table may start with <caption>, and rows can be grouped into <thead>, <tbody> and <tfoot>. Cells merge horizontally with colspan and vertically with rowspan. Border, cellpadding and cellspacing are legacy attributes; modern presentation is done with CSS (border-collapse, padding, borders). Tables are meant for tabular data, not for page layout — layout belongs to CSS grid or flexbox.',
    intro:
      'Table HTML ka wo topic hai jahan se practical questions sabse zyada aate hain — "student marks ka table banao", "colspan aur rowspan ka example do". Yaad rakhein: table sirf data ke liye hai, layout ke liye nahi. Structure yaad rakhein: table → caption → thead (tr → th) → tbody (tr → td). Merge karne ke liye colspan (horizontal) aur rowspan (vertical). Neeche code aur uska asli output dono diye hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Table ka Structure',
        body:
          'Table row-by-row likhi jaati hai: <tr> ek row hai, uske andar <td> data cell aur <th> header cell. <caption> table ka title deta hai. <thead>, <tbody>, <tfoot> rows ko group karte hain (header, body, total) — isse styling aur accessibility dono better hoti hai.',
        body2:
          'Cells merge karne ke liye: colspan="2" ek cell ko do columns mein faila deta hai, rowspan="2" do rows tak. Purane attributes border, cellpadding, cellspacing deprecated hain — CSS se border-collapse: collapse, padding aur border lagate hain. Table ko mobile par scroll karne ke liye ek wrapper div mein overflow-x: auto rakhte hain.',
        chips: ['table', 'tr', 'td', 'th', 'caption', 'thead/tbody', 'colspan', 'rowspan'],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Student Marks Table',
        intro:
          'Ye poora table hai — caption, thead, tbody aur tfoot ke saath. Right side output mein header bold aur total row alag dikh rahi hai.',
        language: 'html',
        filename: 'table.html',
        code: `<table border="1" cellpadding="6">
  <caption>MCA Semester 1 — Marks</caption>
  <thead>
    <tr>
      <th>Roll</th><th>Name</th><th>Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Riya</td><td>78</td></tr>
    <tr><td>2</td><td>Aman</td><td>82</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="2">Total</td><td>160</td></tr>
  </tfoot>
</table>`,
        html: `<table style="border-collapse:collapse;width:100%;font-size:14px;">
  <caption style="caption-side:top;text-align:left;font-weight:700;padding-bottom:6px;">MCA Semester 1 — Marks</caption>
  <thead>
    <tr style="background:#e8efff;">
      <th style="border:1px solid #b9c8e8;padding:7px;text-align:left;">Roll</th>
      <th style="border:1px solid #b9c8e8;padding:7px;text-align:left;">Name</th>
      <th style="border:1px solid #b9c8e8;padding:7px;text-align:left;">Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #b9c8e8;padding:7px;">1</td><td style="border:1px solid #b9c8e8;padding:7px;">Riya</td><td style="border:1px solid #b9c8e8;padding:7px;">78</td></tr>
    <tr><td style="border:1px solid #b9c8e8;padding:7px;">2</td><td style="border:1px solid #b9c8e8;padding:7px;">Aman</td><td style="border:1px solid #b9c8e8;padding:7px;">82</td></tr>
  </tbody>
  <tfoot>
    <tr style="background:#f3f7ff;font-weight:700;"><td colspan="2" style="border:1px solid #b9c8e8;padding:7px;">Total</td><td style="border:1px solid #b9c8e8;padding:7px;">160</td></tr>
  </tfoot>
</table>`,
        caption:
          '<caption> table ke bahar heading ki tarah dikhta hai. colspan="2" ne Total cell ko do columns mein faila diya.',
        height: 230,
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'colspan aur rowspan',
        intro:
          'colspan horizontal merge karta hai, rowspan vertical. Neeche timetable jaisa table hai jismein dono use hue hain.',
        language: 'html',
        filename: 'span.html',
        code: `<table border="1" cellpadding="6">
  <tr>
    <th rowspan="2">Day</th>
    <th colspan="2">Session</th>
  </tr>
  <tr>
    <th>Morning</th><th>Evening</th>
  </tr>
  <tr>
    <td>Mon</td><td>HTML</td><td>CSS</td>
  </tr>
  <tr>
    <td>Tue</td><td colspan="2">Practice</td>
  </tr>
</table>`,
        html: `<table style="border-collapse:collapse;font-size:14px;width:100%;">
  <tr>
    <th rowspan="2" style="border:1px solid #b9c8e8;padding:7px;background:#e8efff;text-align:left;">Day</th>
    <th colspan="2" style="border:1px solid #b9c8e8;padding:7px;background:#e8efff;text-align:left;">Session</th>
  </tr>
  <tr>
    <th style="border:1px solid #b9c8e8;padding:7px;background:#f3f7ff;text-align:left;">Morning</th>
    <th style="border:1px solid #b9c8e8;padding:7px;background:#f3f7ff;text-align:left;">Evening</th>
  </tr>
  <tr><td style="border:1px solid #b9c8e8;padding:7px;">Mon</td><td style="border:1px solid #b9c8e8;padding:7px;">HTML</td><td style="border:1px solid #b9c8e8;padding:7px;">CSS</td></tr>
  <tr><td style="border:1px solid #b9c8e8;padding:7px;">Tue</td><td colspan="2" style="border:1px solid #b9c8e8;padding:7px;">Practice (colspan=2)</td></tr>
</table>`,
        caption:
          'Day cell do rows tak (rowspan=2), Session header do columns tak (colspan=2). Merge karne se grid ki rows/columns count match karna zaroori hai.',
        height: 230,
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Table Ke Tags aur Attributes',
        points: [
          '<table> → <caption>, <thead>/<tbody>/<tfoot> → <tr> → <th>/<td>.',
          'colspan="n" = cell ko n columns mein failao; rowspan="n" = n rows mein.',
          'Purane attributes (border, cellpadding, cellspacing, align) deprecated — CSS use karein.',
          'CSS: border-collapse: collapse (double border hataata hai), padding, text-align.',
          'Accessibility: header cells ke liye <th scope="col"> / scope="row" aur <caption> rakhein.',
          'Layout ke liye table use na karein — mobile par toot jaati hai; CSS grid/flex use karein.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Row = <tr>, cell = <td>, header = <th>, title = <caption>.',
          'thead/tbody/tfoot se rows group hoti hain.',
          'colspan horizontal merge, rowspan vertical merge.',
          'Styling CSS se; border-collapse: collapse sabse common.',
          'Table = data ke liye, layout ke liye nahi.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the tags used to create a table in HTML with an example.',
        answer:
          '**Tags:**\n\n| Tag | Kaam |\n|---|---|\n| `<table>` | Table ka container |\n| `<caption>` | Table ka title |\n| `<tr>` | Table row |\n| `<th>` | Header cell (bold, centre) |\n| `<td>` | Data cell |\n| `<thead>` | Header rows ka group |\n| `<tbody>` | Body rows ka group |\n| `<tfoot>` | Footer / total rows |\n\n**Example:**\n\n```\n<table border="1">\n  <caption>Marks</caption>\n  <thead>\n    <tr><th>Roll</th><th>Name</th><th>Marks</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>1</td><td>Riya</td><td>78</td></tr>\n    <tr><td>2</td><td>Aman</td><td>82</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td colspan="2">Total</td><td>160</td></tr>\n  </tfoot>\n</table>\n```\n\n**Output:** header row bold, do data rows, aakhir mein total row.\n\n**Diagram:** Refer to the table output (student marks table).',
      },
      {
        question: 'What is the difference between colspan and rowspan? Give an example.',
        answer:
          '**colspan** — ek cell ko horizontally (columns mein) failata hai.\n**rowspan** — ek cell ko vertically (rows mein) failata hai.\n\n**Example (timetable):**\n\n```\n<table border="1">\n  <tr>\n    <th rowspan="2">Day</th>\n    <th colspan="2">Session</th>\n  </tr>\n  <tr>\n    <th>Morning</th><th>Evening</th>\n  </tr>\n  <tr>\n    <td>Mon</td><td>HTML</td><td>CSS</td>\n  </tr>\n  <tr>\n    <td>Tue</td><td colspan="2">Practice</td>\n  </tr>\n</table>\n```\n\n**Result:**\n- "Day" do rows tak chalta hai (rowspan=2)\n- "Session" do columns tak (colspan=2)\n- "Practice" poori row mein (colspan=2)\n\n| Attribute | Direction | Value |\n|---|---|---|\n| colspan | Horizontal | Columns count |\n| rowspan | Vertical | Rows count |\n\n**Rule:** merge ke baad har row mein total cells barabar hone chahiye, warna table toot jaata hai.',
      },
      {
        question: 'How can you style a table using CSS? Why is border-collapse used?',
        answer:
          '**CSS styling:**\n\n```\ntable { border-collapse: collapse; width: 100%; }\nth, td { border: 1px solid #999; padding: 8px; text-align: left; }\nth { background: #e8efff; }\ntr:nth-child(even) { background: #f7f9ff; }\n```\n\n**border-collapse:**\n- Default (`separate`) mein har cell ka apna border hota hai, beech mein double line dikhti hai\n- `collapse` se adjacent borders mil jaate hain — ek clean single line\n\n| Value | Effect |\n|---|---|\n| separate | Har cell ka alag border (double line) |\n| collapse | Shared border (single line) |\n\n**Other useful CSS:** padding (space), text-align, background, tr:hover (highlight), width, overflow-x wrapper for mobile.\n\n**Note:** `border`, `cellpadding`, `cellspacing` attributes HTML5 mein deprecated hain — CSS preferred.',
      },
    ],
  },

  // ==========================================================
  // 1.12 — Images
  // ==========================================================
  {
    id: 'wt-images',
    number: '1.12',
    title: 'Images',
    subtitle: 'img, src, alt, width/height aur figure',
    icon: 'eye',
    accent: '#ff8800',
    englishDefinition:
      'Images are embedded with the void element <img>, which needs at least src (the image URL or path) and alt (alternative text). Optional attributes are width, height, title, loading="lazy" and srcset/sizes for responsive images. Because <img> is replaced content, its closing tag does not exist. The alt attribute is mandatory for accessibility: it is read by screen readers and shown when the image fails to load. Width and height together prevent layout shift. Related elements are <figure> with <figcaption> for a captioned image, <map>/<area> for a clickable image map, and <picture> for art-directed responsive images. Common formats are JPEG (photos), PNG (transparency, screenshots), GIF (simple animation), SVG (vector icons) and WebP (modern, smaller).',
    intro:
      'Image tag chhota hai par ismein marks chhupe hote hain — alt attribute kyun zaroori hai, width/height kyun dena chahiye, aur kaunsa format kab use karna chahiye. Exam mein <img> ke attributes aur image formats ka table aksar aata hai. Yaad rakhein: <img> void element hai (closing tag nahi), aur alt text sirf "image" nahi likhna — usme batao ki image mein kya hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: '<img> Tag kaise kaam karta hai?',
        body:
          'Syntax: <img src="path/photo.jpg" alt="Description" width="200" height="120">. src batata hai file kahan hai (relative ya absolute URL), alt wo text hai jo image na dikhne par ya screen reader mein use hota hai. width aur height layout shift rokne ke liye dete hain — CSS se bhi control ho sakta hai.',
        body2:
          'Figure + figcaption se image ke saath caption judi rehti hai (semantically sahi). <picture> aur srcset se alag screen sizes ke liye alag image di ja sakti hai. Image map (<map>/<area>) se ek image ke alag hisson par alag links lag sakte hain — jaise map par har state clickable.',
        chips: ['img', 'src', 'alt', 'width/height', 'figure', 'srcset', 'image map'],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Image with Alt, Size aur Caption',
        intro:
          'Left mein code hai. Right mein wahi image dikh rahi hai — code mein file logo.png hai, preview mein uski jagah inline SVG use hui hai taaki output dikh sake.',
        language: 'html',
        filename: 'images.html',
        code: `<figure>
  <img src="logo.png"
       alt="MCA department logo"
       width="180" height="110">
  <figcaption>MCA Department — official logo</figcaption>
</figure>

<p>Simple image with title tooltip:</p>
<img src="campus.jpg" alt="College campus"
     width="220" height="120" title="Main campus">`,
        html: `<figure style="margin:0 0 12px;">
  <svg width="180" height="110" viewBox="0 0 180 110" role="img" aria-label="MCA department logo"><rect width="180" height="110" rx="10" fill="#0047ff"/><text x="90" y="58" text-anchor="middle" font-size="26" fill="#ffffff" font-family="Arial">MCA</text><text x="90" y="82" text-anchor="middle" font-size="12" fill="#c9d8ff" font-family="Arial">Department of Computer Applications</text></svg>
  <figcaption style="font-size:12px;color:#555;margin-top:4px;">MCA Department — official logo</figcaption>
</figure>
<p style="margin:0 0 6px;">Image with caption and border (CSS):</p>
<svg width="220" height="90" viewBox="0 0 220 90" role="img" aria-label="College campus"><rect width="220" height="90" rx="8" fill="#e8efff" stroke="#0047ff"/><text x="110" y="48" text-anchor="middle" font-size="14" fill="#0047ff" font-family="Arial">College campus</text></svg>`,
        caption:
          'figure + figcaption se image aur caption ek semantic unit ban jaate hain. alt text screen reader aur broken-image case dono ke liye hai.',
        height: 300,
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Broken Image — alt ka Asli Kaam',
        intro:
          'Jab image load nahi hoti, browser alt text dikhata hai. Neeche jaan-boojh kar galat path diya gaya hai — dekhein output kya dikhata hai.',
        language: 'html',
        filename: 'broken.html',
        code: `<!-- galat path: file maujood nahi -->
<img src="missing-photo.jpg"
     alt="Principal ki photo — convocation 2025"
     width="200" height="80">

<!-- alt khaali = screen reader ko kuch pata nahi -->
<img src="icon.png" alt="">`,
        html: `<div style="width:200px;height:80px;border:1px dashed #b9c8e8;background:#f7f9ff;display:flex;align-items:center;justify-content:center;text-align:center;font-size:12px;color:#555;padding:6px;">
  Principal ki photo — convocation 2025
</div>
<p style="font-size:12px;color:#777;margin:8px 0 0;">alt="" (decorative image) — screen reader ise skip kar deta hai</p>`,
        caption:
          'alt text ka kaam yahi hai: image na mile to bhi information na khoye. Decorative images ke liye alt="" sahi hai.',
        height: 180,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Image Formats',
        columns: ['JPEG', 'PNG', 'GIF', 'SVG', 'WebP'],
        columnColors: ['#ff8800', '#00d4ff', '#c4ff00', '#ff7ab2', '#00ff88'],
        rows: [
          { label: 'Type', values: ['Raster', 'Raster', 'Raster', 'Vector', 'Raster'] },
          { label: 'Transparency', values: ['Nahi', 'Haan (alpha)', 'Haan (1-bit)', 'Haan', 'Haan'] },
          { label: 'Animation', values: ['Nahi', 'Nahi (APNG)', 'Haan', 'Haan (CSS/SMIL)', 'Haan'] },
          { label: 'Best for', values: ['Photos', 'Screenshots, logos', 'Simple animation', 'Icons, charts', 'Modern websites'] },
          { label: 'Size', values: ['Chhota (photo)', 'Bada', 'Chhota', 'Bahut chhota', 'JPEG se 30% chhota'] },
          { label: 'Zoom par', values: ['Pixelated', 'Pixelated', 'Pixelated', 'Sharp (vector)', 'Pixelated'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Image Ke Rules',
        points: [
          '<img src="..." alt="..."> — src aur alt dono zaroori.',
          '<img> void element hai — closing tag nahi hota.',
          'width aur height dena layout shift rokhata hai (CLS improve hota hai).',
          'Responsive: CSS se img { max-width: 100%; height: auto; } ya srcset use karein.',
          'loading="lazy" se below-the-fold images baad mein load hoti hain.',
          'Photos → JPEG/WebP, transparency → PNG/WebP, icons → SVG, animation → GIF/WebP.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Image = <img src alt width height> (void element).',
          'alt accessibility + broken image fallback ke liye.',
          'figure + figcaption = image + caption ka semantic joda.',
          'Formats: JPEG photo, PNG transparency, GIF animation, SVG vector, WebP modern.',
          'srcset/picture se responsive images; CSS max-width: 100% se basic responsiveness.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the <img> tag with all its attributes and give an example.',
        answer:
          '**<img> tag:** image ko page mein embed karta hai — void element, closing tag nahi.\n\n**Attributes:**\n\n| Attribute | Kaam |\n|---|---|\n| src | Image ka path / URL (required) |\n| alt | Alternative text (required for accessibility) |\n| width / height | Size in pixels |\n| title | Hover tooltip |\n| loading="lazy" | Defer loading |\n| srcset / sizes | Responsive images |\n\n**Example:**\n\n```\n<img src="logo.png"\n     alt="MCA department logo"\n     width="180" height="110"\n     loading="lazy">\n```\n\n**With caption:**\n\n```\n<figure>\n  <img src="campus.jpg" alt="College campus">\n  <figcaption>Main campus</figcaption>\n</figure>\n```\n\n**Note:** alt na likhne se screen reader user ko image ka matlab nahi milta — accessibility fail.\n\n**Diagram:** Refer to the images output above.',
      },
      {
        question: 'Differentiate between JPEG, PNG, GIF and SVG image formats.',
        answer:
          '| Basis | JPEG | PNG | GIF | SVG |\n|---|---|---|---|---|\n| Type | Raster | Raster | Raster | Vector |\n| Transparency | Nahi | Haan | Haan (1-bit) | Haan |\n| Animation | Nahi | Nahi | Haan | Haan (SMIL/CSS) |\n| Compression | Lossy | Lossless | Lossless | Text (XML) |\n| Best for | Photos | Screenshots, logos | Simple animation | Icons, charts |\n| Zoom | Pixelated | Pixelated | Pixelated | Sharp |\n| File size | Chhota | Bada | Chhota | Bahut chhota |\n\n**WebP** modern format hai — JPEG se 25–35% chhoti, transparency aur animation dono support.\n\n**Rule of thumb:** photo → JPEG/WebP, logo with transparency → PNG/WebP, icon → SVG, animation → GIF/WebP.',
      },
    ],
  },

  // ==========================================================
  // 1.13 — Forms
  // ==========================================================
  {
    id: 'wt-forms',
    number: '1.13',
    title: 'Forms',
    subtitle: 'form, input, select, textarea — user se data lena',
    icon: 'doc',
    accent: '#00d4ff',
    englishDefinition:
      'An HTML form collects user input and sends it to a server. The <form> element wraps the controls and defines action (the URL that will process the data) and method (GET or POST). Controls include <input> (with type text, password, email, number, date, radio, checkbox, file, submit, reset, hidden), <textarea> for multi-line text, <select> with <option> for dropdowns, <button>, and <fieldset>/<legend> for grouping. <label for="id"> ties a caption to its control, which is essential for accessibility and lets the user click the label. HTML5 added validation attributes — required, placeholder, pattern, min, max, minlength, maxlength — and new input types that give mobile keyboards and built-in checks. GET sends data in the URL (visible, limited, cacheable); POST sends it in the request body (private, large, not cacheable).',
    intro:
      'Forms wo hissa hain jahan user aur server milte hain — login, admission, payment, feedback, sab forms hi hain. Exam mein aksar "explain form elements" aur "GET vs POST ka difference" aata hai. Yaad rakhein: har input ka naam (name attribute) zaroori hai, warna data server tak nahi jaata; aur label ka for attribute input ke id se match karna chahiye. Neeche ek chalta-phirta form hai — aap output mein type bhi kar sakte hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Form ka Structure',
        body:
          '<form action="/submit" method="post"> ke andar saare controls aate hain. action batata hai data kahan jaayega, method batata hai kaise (GET = URL mein, POST = body mein). Har control ke saath label, name aur id hoti hai — label se user ko pata chalta hai kya bharna hai.',
        body2:
          'Input types: text, password, email, number, date, radio (ek option), checkbox (kai options), file, submit, reset, hidden. Dropdown ke liye <select><option>, multi-line text ke liye <textarea>, group ke liye <fieldset> + <legend>. HTML5 validation: required, placeholder, pattern, min, max — bina JavaScript ke basic checking ho jaati hai.',
        chips: ['form', 'input', 'label', 'select', 'textarea', 'button', 'GET', 'POST'],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Complete Admission Form',
        intro:
          'Left ka code right ke form ko banata hai. Output mein aap type kar sakte hain, radio/checkbox select kar sakte hain — sirf submit kaam nahi karega (preview sandbox mein hai).',
        language: 'html',
        filename: 'form.html',
        code: `<form action="/admission" method="post">
  <label for="name">Naam:</label>
  <input type="text" id="name" name="name"
         placeholder="Poora naam" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="course">Course:</label>
  <select id="course" name="course">
    <option>MCA</option>
    <option>BCA</option>
    <option>MSc IT</option>
  </select>

  <p>Gender:</p>
  <label><input type="radio" name="gender" value="m"> Male</label>
  <label><input type="radio" name="gender" value="f"> Female</label>

  <p>Subjects:</p>
  <label><input type="checkbox" name="sub" value="wt"> Web Tech</label>
  <label><input type="checkbox" name="sub" value="ds"> Data Science</label>

  <label for="msg">Message:</label>
  <textarea id="msg" name="msg" rows="2"></textarea>

  <button type="submit">Submit karo</button>
</form>`,
        html: `<form style="font-size:14px;">
  <label for="name" style="display:block;margin-bottom:3px;font-weight:600;">Naam:</label>
  <input type="text" id="name" placeholder="Poora naam" style="width:100%;padding:6px;border:1px solid #b9c8e8;border-radius:5px;margin-bottom:9px;">
  <label for="email" style="display:block;margin-bottom:3px;font-weight:600;">Email:</label>
  <input type="email" id="email" style="width:100%;padding:6px;border:1px solid #b9c8e8;border-radius:5px;margin-bottom:9px;">
  <label for="course" style="display:block;margin-bottom:3px;font-weight:600;">Course:</label>
  <select id="course" style="width:100%;padding:6px;border:1px solid #b9c8e8;border-radius:5px;margin-bottom:9px;">
    <option>MCA</option><option>BCA</option><option>MSc IT</option>
  </select>
  <p style="margin:0 0 4px;font-weight:600;">Gender:</p>
  <label style="margin-right:12px;"><input type="radio" name="g"> Male</label>
  <label><input type="radio" name="g"> Female</label>
  <p style="margin:8px 0 4px;font-weight:600;">Subjects:</p>
  <label style="margin-right:12px;"><input type="checkbox"> Web Tech</label>
  <label><input type="checkbox"> Data Science</label>
  <label for="msg" style="display:block;margin:9px 0 3px;font-weight:600;">Message:</label>
  <textarea id="msg" rows="2" style="width:100%;padding:6px;border:1px solid #b9c8e8;border-radius:5px;"></textarea>
  <button type="button" style="margin-top:10px;padding:7px 16px;border-radius:6px;border:1px solid #0047ff;background:#0047ff;color:#fff;">Submit karo</button>
</form>`,
        caption:
          'Har label ka for attribute input ke id se match karta hai — isse label par click karne se input focus ho jaata hai (accessibility).',
        height: 430,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'fieldset, Validation aur HTML5 Input Types',
        intro:
          'Fieldset se form ke sections bante hain. HTML5 attributes se bina JavaScript ke validation ho jaati hai — exam mein ye attributes likhna bonus marks deta hai.',
        language: 'html',
        filename: 'validation.html',
        code: `<form action="/save" method="post">
  <fieldset>
    <legend>Personal details</legend>

    <label for="dob">Date of birth:</label>
    <input type="date" id="dob" name="dob" required>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age"
           min="17" max="60" step="1">

    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone"
           pattern="[0-9]{10}" title="10 digit number">

    <label for="marks">Marks:</label>
    <input type="number" id="marks" name="marks"
           min="0" max="100">

    <label for="photo">Photo:</label>
    <input type="file" id="photo" name="photo"
           accept="image/*">

    <input type="hidden" name="unit" value="1">
  </fieldset>

  <button type="submit">Save</button>
  <button type="reset">Clear</button>
</form>`,
        note:
          'required = khaali nahi chhod sakte · pattern = regex se format check · min/max = range · accept = file type · hidden = user ko nahi dikhta par server tak jaata hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'GET vs POST',
        columns: ['GET', 'POST'],
        columnColors: ['#00d4ff', '#ff8800'],
        rows: [
          { label: 'Data kahan', values: ['URL mein (?name=Riya)', 'Request body mein'] },
          { label: 'Visible', values: ['Haan, address bar mein', 'Nahi'] },
          { label: 'Length limit', values: ['~2000 characters', 'Bahut bada possible'] },
          { label: 'Bookmark / cache', values: ['Haan', 'Nahi'] },
          { label: 'Security', values: ['Kam — history/logs mein', 'Better'] },
          { label: 'Use', values: ['Search, filter, page links', 'Login, payment, file upload'] },
          { label: 'Idempotent', values: ['Haan (same request = same result)', 'Nahi (dobara submit = naya record)'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Form Ke Zaroori Points',
        points: [
          'name attribute ke bina input ka data server tak nahi jaata.',
          'label ka for = input ka id (click par focus, screen reader support).',
          'radio = ek option (same name se group), checkbox = kai options.',
          'select/option = dropdown; textarea = multi-line text (rows/cols).',
          'HTML5: required, placeholder, pattern, min, max, type="email|date|number".',
          'POST sensitive data ke liye, GET search/filter ke liye; form ke bina bhi JavaScript se data bhej sakte hain (fetch).',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'form = action (kahan) + method (kaise) + controls.',
          'input types: text, password, email, number, date, radio, checkbox, file, submit, hidden.',
          'select/option dropdown, textarea multi-line, fieldset/legend group.',
          'label + id se accessibility; name se data submission.',
          'GET = URL (visible), POST = body (private).',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the various elements of an HTML form with examples.',
        answer:
          '**<form>** — container, `action` (URL) aur `method` (GET/POST) ke saath.\n\n| Element | Kaam | Example |\n|---|---|---|\n| `<input type="text">` | Single line text | Naam |\n| `type="password"` | Hidden characters | Password |\n| `type="email"` | Email + validation | Email |\n| `type="radio"` | Ek option select | Gender |\n| `type="checkbox"` | Kai options | Subjects |\n| `type="file"` | File upload | Photo |\n| `type="submit"` | Form bhejna | Submit button |\n| `<textarea>` | Multi-line text | Message |\n| `<select>/<option>` | Dropdown | Course |\n| `<label>` | Caption + focus | "Naam:" |\n| `<fieldset>/<legend>` | Group + title | Personal details |\n\n**Example:**\n\n```\n<form action="/save" method="post">\n  <label for="n">Naam:</label>\n  <input type="text" id="n" name="name" required>\n\n  <label for="c">Course:</label>\n  <select id="c" name="course">\n    <option>MCA</option>\n    <option>BCA</option>\n  </select>\n\n  <textarea name="msg" rows="3"></textarea>\n  <button type="submit">Send</button>\n</form>\n```\n\n**Diagram:** Refer to the admission form output above.',
      },
      {
        question: 'Differentiate between GET and POST methods in HTML forms.',
        answer:
          '| Basis | GET | POST |\n|---|---|---|\n| Data location | URL mein | Request body mein |\n| Visibility | Address bar mein dikhta hai | Nahi dikhta |\n| Length | ~2000 chars | Practically unlimited |\n| Bookmark | Haan | Nahi |\n| Cache / history | Haan | Nahi |\n| Security | Kam | Better |\n| Idempotent | Haan | Nahi |\n| Use case | Search, filter, pagination | Login, payment, upload |\n\n**GET example:**\n```\n<form action="/search" method="get">\n  <input type="text" name="q">\n</form>\n```\nURL: `/search?q=html`\n\n**POST example:**\n```\n<form action="/login" method="post">\n  <input type="password" name="pwd">\n</form>\n```\nPassword URL mein nahi aata.\n\n**Rule:** password, payment aur file upload kabhi GET se nahi — hamesha POST.',
      },
      {
        question: 'What are the form validation features introduced in HTML5? Explain any five attributes.',
        answer:
          '**1. required** — field khaali nahi chhod sakte.\n`<input type="text" name="name" required>`\n\n**2. placeholder** — halka hint text dikhta hai.\n`<input type="text" placeholder="Poora naam">`\n\n**3. pattern** — regex se format check (mobile ke 10 digit).\n`<input type="tel" pattern="[0-9]{10}">`\n\n**4. min / max / step** — number aur date range.\n`<input type="number" min="17" max="60">`\n\n**5. type-based validation** — email, url, date, number apne aap check karte hain.\n`<input type="email" name="mail">`\n\n| Attribute | Kaam |\n|---|---|\n| required | Khaali na chhode |\n| placeholder | Hint text |\n| pattern | Regex match |\n| min / max | Range |\n| maxlength | Character limit |\n\n**Benefit:** bina JavaScript basic validation, mobile par sahi keyboard (email/date), better UX.\n\n**Limitation:** client-side validation ko bypass kiya ja sakta hai — server-side validation zaroori hai.',
      },
    ],
  },

  // ==========================================================
  // 1.14 — HTML vs HTML5
  // ==========================================================
  {
    id: 'wt-html5',
    number: '1.14',
    title: 'Difference between HTML and HTML5',
    subtitle: 'Semantic tags, native media, storage aur naye APIs',
    icon: 'tag',
    accent: '#c4ff00',
    englishDefinition:
      'HTML5 is the fifth revision of the HTML standard (finalised 2014). Compared with HTML 4.01 it simplifies the doctype to <!DOCTYPE html>, introduces semantic structural elements (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>, <figure>), native media elements (<audio>, <video>, <source>), canvas and inline SVG for graphics, new form input types and validation attributes, client-side storage (localStorage, sessionStorage), and JavaScript APIs such as Geolocation, drag-and-drop, Web Workers, Web Sockets and offline support. HTML5 removed presentational tags such as <font>, <center> and <big>, and obsolete elements such as <frameset> and <applet>. It is backward compatible — existing HTML 4 pages continue to render — and it is designed to work on mobile devices without plugins.',
    intro:
      'Ye topic almost har paper mein aata hai — usually "difference between HTML and HTML5 (any five points)". Ratta maarne ke bajaye 5 axis yaad rakhein: doctype, semantic tags, media, storage, form input. Har axis ke saath ek example likhna best answer hai. HTML5 ka ek aur bada point: plugin (Flash) ki zaroorat khatam ho gayi — audio, video, graphics sab native ho gaye.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'HTML5 naya kya laaya?',
        body:
          'HTML5 (2014) mein sabse bada badlav semantic tags ka hai — <div class="header"> ki jagah <header>, <div class="nav"> ki jagah <nav>. Isse browser, search engine aur screen reader ko page ka structure samajh aata hai. Media ke liye <audio> aur <video> native ho gaye (pehle Flash chahiye tha), graphics ke liye <canvas> aur <svg>, aur data rakhne ke liye localStorage.',
        body2:
          'Forms mein naye types (email, date, number, range, color) aur validation attributes (required, pattern) aaye. JavaScript APIs — Geolocation, drag-and-drop, Web Workers, WebSocket, offline cache. Aur jo cheezein hat gayin: <font>, <center>, <big>, <frameset>, <applet>. HTML5 backward compatible hai, isliye purane pages bhi chalte rehte hain.',
        chips: ['Doctype', 'Semantic tags', 'audio/video', 'canvas', 'localStorage', 'APIs'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'HTML 4.01 vs HTML5',
        diagram: 'html-vs-html5',
        caption:
          'Left: HTML 4.01 — lamba doctype, div/table layout, Flash plugin, cookies, limited inputs. Right: HTML5 — chhota doctype, semantic tags, native audio/video, localStorage, naye input types, canvas + SVG. Exam mein isi ko 5-point table mein convert karein.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Semantic Layout — div se header/nav/section tak',
        intro:
          'Ek hi layout, do tarah se. Purana tarika div + class hai; naya tarika semantic tags. Browser output same dikhta hai, par meaning alag hoti hai.',
        language: 'html',
        filename: 'semantic.html',
        code: `<!-- purana tarika -->
<div class="header">MCA Notes</div>
<div class="nav">Home | Units | Exam</div>
<div class="content">Unit I — HTML</div>
<div class="footer">© 2026</div>

<!-- HTML5 semantic tarika -->
<header>MCA Notes</header>
<nav>Home | Units | Exam</nav>
<main>
  <section>
    <h2>Unit I — HTML</h2>
    <p>Structure, forms, tables.</p>
  </section>
</main>
<footer>© 2026</footer>`,
        html: `<div style="font-family:Arial,sans-serif;font-size:13px;border:1px solid #ccd;border-radius:8px;overflow:hidden;">
  <div style="background:#0047ff;color:#fff;padding:8px 10px;font-weight:700;">MCA Notes <span style="font-size:10px;opacity:.8;">(header)</span></div>
  <div style="background:#e8efff;padding:6px 10px;color:#0047ff;">Home | Units | Exam <span style="font-size:10px;color:#7a8db8;">(nav)</span></div>
  <div style="padding:10px;">
    <h2 style="font-size:15px;margin:0 0 4px;">Unit I — HTML <span style="font-size:10px;color:#7a8db8;">(section)</span></h2>
    <p style="margin:0;color:#444;">Structure, forms, tables.</p>
  </div>
  <div style="background:#f2f5fb;padding:7px 10px;color:#666;font-size:12px;">© 2026 <span style="font-size:10px;">(footer)</span></div>
</div>`,
        caption:
          'Dikhne mein same, par HTML5 tags se browser aur screen reader ko structure pata chalta hai — "ye navigation hai, ye main content hai".',
        height: 230,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'HTML 4.01 vs HTML5 — 8 Points',
        columns: ['HTML 4.01', 'HTML5'],
        columnColors: ['#8f9dc4', '#c4ff00'],
        rows: [
          { label: 'DOCTYPE', values: ['Lamba, w3.org URL wala', '<!DOCTYPE html> — bas itna'] },
          { label: 'Structure tags', values: ['<div> + class', '<header> <nav> <main> <section> <footer>'] },
          { label: 'Audio / Video', values: ['Plugin (Flash, Silverlight)', '<audio>, <video> native'] },
          { label: 'Graphics', values: ['Koi native support nahi', '<canvas> + inline <svg>'] },
          { label: 'Storage', values: ['Sirf cookies (~4 KB)', 'localStorage, sessionStorage (5–10 MB)'] },
          { label: 'Form input', values: ['text, password, checkbox', 'email, date, number, range, color + validation'] },
          { label: 'APIs', values: ['Nahi', 'Geolocation, drag-drop, Web Workers, WebSocket'] },
          { label: 'Obsolete', values: ['<font>, <center>, <big> chalte the', 'Removed; <frameset>/<applet> bhi hataye'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'HTML5 Ke Fayde',
        points: [
          'Semantic tags se SEO aur accessibility improve hoti hai.',
          'Plugin khatam — audio/video browser mein native chalte hain.',
          'Mobile-friendly: viewport + responsive design ka support.',
          'Client-side storage (localStorage) se offline aur fast apps.',
          'Naye input types se mobile par sahi keyboard aur bina JS validation.',
          'Backward compatible — purane HTML pages chalte rehte hain.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Doctype: lamba → <!DOCTYPE html>.',
          'Layout: div/table → header/nav/main/section/article/footer.',
          'Media: Flash → <audio>/<video>; graphics: <canvas>/<svg>.',
          'Storage: cookies → localStorage/sessionStorage.',
          'Forms: naye input types + validation; <font>/<center>/<frameset> removed.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Differentiate between HTML and HTML5 (any five points).',
        answer:
          '| Basis | HTML | HTML5 |\n|---|---|---|\n| Doctype | Lamba, w3.org URL ke saath | `<!DOCTYPE html>` |\n| Semantic tags | `<div>` + class | `<header> <nav> <main> <section> <footer>` |\n| Audio/Video | Flash plugin chahiye | `<audio>`, `<video>` native |\n| Graphics | Koi support nahi | `<canvas>`, `<svg>` |\n| Storage | Cookies (~4 KB) | localStorage / sessionStorage (5–10 MB) |\n| Form inputs | text, password, checkbox | email, date, number, range, color |\n| APIs | Nahi | Geolocation, drag-drop, Web Workers |\n| Obsolete tags | `<font>`, `<center>` chalte the | Removed |\n\n**Example of semantic code:**\n```\n<header>MCA Notes</header>\n<nav>Home | Units</nav>\n<main><section>Unit I</section></main>\n<footer>© 2026</footer>\n```\n\n**Diagram:** Refer to the HTML vs HTML5 diagram.',
      },
      {
        question: 'What are semantic elements in HTML5? Explain their advantages with examples.',
        answer:
          '**Semantic elements:** wo tags jo apna matlab khud batate hain — naam se hi pata chalta hai ki content kya hai.\n\n| Tag | Kaam |\n|---|---|\n| `<header>` | Page/section ka top (logo, title) |\n| `<nav>` | Navigation links |\n| `<main>` | Main content (ek hi) |\n| `<section>` | Thematic section |\n| `<article>` | Independent content (post, news) |\n| `<aside>` | Sidebar / related content |\n| `<footer>` | Bottom (copyright, links) |\n| `<figure>`/`<figcaption>` | Image + caption |\n\n**Advantages:**\n1. **SEO** — search engine ko structure samajh aata hai\n2. **Accessibility** — screen reader "navigation" par jump kar sakta hai\n3. **Readability** — code padhne mein aasan, div-soup khatam\n4. **Maintenance** — team ko class naam guess nahi karne padte\n\n**Example:**\n```\n<header><h1>MCA Notes</h1></header>\n<nav><a href="/">Home</a></nav>\n<main><article><h2>Unit I</h2></article></main>\n<footer>© 2026</footer>\n```\n\n**Note:** `<div>` fir bhi valid hai — jab koi semantic meaning na ho (pure styling wrapper).',
      },
      {
        question: 'Explain the new features introduced in HTML5 for media, storage and graphics.',
        answer:
          '**Media (native, plugin-free):**\n```\n<video controls width="320">\n  <source src="intro.mp4" type="video/mp4">\n  <source src="intro.webm" type="video/webm">\n</video>\n\n<audio controls>\n  <source src="song.mp3" type="audio/mpeg">\n</audio>\n```\n- Attributes: controls, autoplay, loop, muted, preload, poster (video)\n- Multiple `<source>` = format fallback\n\n**Storage:**\n- `localStorage` — permanent (tab band karne par bhi rehta hai), 5–10 MB\n- `sessionStorage` — tab band hone par clear\n- Cookies (purana) — 4 KB, har request ke saath server ko jaate hain\n\n**Graphics:**\n- `<canvas>` — JavaScript se drawing (charts, games), pixel based\n- `<svg>` — vector, DOM ka hissa, zoom par sharp, icons/charts ke liye\n\n| Feature | HTML | HTML5 |\n|---|---|---|\n| Video | Flash | `<video>` |\n| Vector | Plugin | `<svg>` |\n| Canvas | Nahi | `<canvas>` |\n| Storage | Cookies | localStorage |\n\n**Diagram:** Refer to the HTML vs HTML5 diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.15 — CSS: introduction, inserting, selectors
  // ==========================================================
  {
    id: 'wt-css',
    number: '1.15',
    title: 'CSS: Introduction, Inserting CSS and Selectors',
    subtitle: 'Style sheet, teen tarike aur selector ki poori family',
    icon: 'design',
    accent: '#ff7ab2',
    englishDefinition:
      'CSS (Cascading Style Sheets) is the language used to describe the presentation of an HTML document — colour, typography, spacing, borders, layout and responsiveness — keeping structure (HTML) and style (CSS) separate. A CSS rule has a selector and a declaration block of property:value pairs, e.g. p { color: navy; font-size: 16px; }. CSS can be inserted in three ways: inline (style attribute on an element), internal (a <style> block in the head) and external (a separate .css file linked with <link rel="stylesheet">). Selectors target elements by tag (p), class (.note), id (#main), universal (*), group (h1, h2), descendant (div p), child (div > p), attribute (input[type]) and pseudo-class/element (a:hover, p::first-line). When rules conflict, the cascade decides: specificity (inline > id > class/attribute/pseudo-class > element), then source order, with !important overriding everything.',
    intro:
      'CSS wo cheez hai jo HTML ko sundar banati hai — warna sab kuch plain black text hota. Exam mein teen cheezein pakka aati hain: CSS kya hai, CSS lagane ke 3 tarike, aur selectors ke types (element, class, id). Inke saath specificity ka order bhi likhein — "kaunsa style jeetega" ka jawab wahi deta hai. Neeche dono diagrams, code aur live output hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'CSS kaise likhi jaati hai?',
        body:
          'CSS rule ka format: selector { property: value; }. Selector batata hai kaunsa element, property batati hai kya badalna hai, value batati hai kitna/kya. Example: h1 { color: #0047ff; font-size: 28px; } — har h1 ka rang aur size badal jaayega.',
        body2:
          'CSS teen jagah likhi ja sakti hai: inline (element ke style attribute mein), internal (<head> ke andar <style>), aur external (alag .css file + <link>). Real project mein external best hai — ek file badalne se poori site ka design badal jaata hai aur browser usko cache karta hai.',
        chips: ['Selector', 'Declaration', 'Inline', 'Internal', 'External', 'Specificity'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'CSS Insert Karne Ke 3 Tarike',
        diagram: 'css-insertion',
        caption:
          'Inline (style=""), internal (<style> in head), external (.css + <link>). Neeche priority likhi hai: inline > internal > external (jab tak !important na ho). Exam mein teeno ka code snippet likhna zaroori hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Internal CSS — Pehla Style Sheet',
        intro:
          'Ek <style> block se poore page ka design set ho gaya. Dhyan dein: CSS ne headings ka rang, paragraph ka spacing aur button ka look badal diya — HTML same raha.',
        language: 'html',
        filename: 'style.html',
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 16px; }
    h1 { color: #0047ff; border-bottom: 3px solid #c4ff00; }
    p { color: #333; line-height: 1.6; }
    .note { background: #f3f7ff; padding: 10px; border-left: 4px solid #0047ff; }
  </style>
</head>
<body>
  <h1>CSS Style Sheet</h1>
  <p>Ye paragraph CSS se styled hai.</p>
  <p class="note">Class selector se ye box alag dikhta hai.</p>
</body>
</html>`,
        html: `<h1 style="font-family:Arial,sans-serif;font-size:24px;color:#0047ff;border-bottom:3px solid #c4ff00;padding-bottom:6px;margin:0 0 10px;">CSS Style Sheet</h1>
<p style="font-family:Arial,sans-serif;color:#333;line-height:1.6;margin:0 0 10px;">Ye paragraph CSS se styled hai.</p>
<p style="font-family:Arial,sans-serif;color:#333;line-height:1.6;background:#f3f7ff;padding:10px;border-left:4px solid #0047ff;margin:0;">Class selector se ye box alag dikhta hai.</p>`,
        caption:
          'Style block head mein hai, isliye poori page par chalta hai. .note class sirf usi element par lagi jispar class="note" hai.',
        height: 200,
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'CSS Selectors aur Specificity',
        diagram: 'css-selectors',
        caption:
          '8 selector types — element, class, id, universal, group, descendant, pseudo-class, attribute — aur unki specificity (id 100 > class 10 > element 1). Exam mein selector ka example aur specificity ka order likhna best answer hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Selectors ka Practical Demo',
        intro:
          'Ek hi page par element, class, id, group aur pseudo-class selector — har rule ka asar output mein alag dikhta hai.',
        language: 'css',
        filename: 'selectors.css',
        code: `/* 1. element selector */
p { color: #333; margin: 0 0 8px; }

/* 2. class selector */
.highlight { background: #fff3cd; padding: 2px 6px; }

/* 3. id selector (sabse strong) */
#main-title {
  color: #0047ff;
  font-size: 22px;
}

/* 4. group selector */
h2, h3 { color: #0a7d4f; }

/* 5. descendant selector */
.box p { font-style: italic; }

/* 6. pseudo-class */
a:hover { color: #c0392b; }`,
        html: `<style>
p { color:#333; margin:0 0 8px; }
.highlight { background:#fff3cd; padding:2px 6px; }
#main-title { color:#0047ff; font-size:22px; }
h2, h3 { color:#0a7d4f; }
.box p { font-style:italic; }
a:hover { color:#c0392b; }
</style>
<h2 id="main-title">1. ID selector (blue, 22px)</h2>
<p>2. Element selector — simple paragraph.</p>
<p class="highlight">3. Class selector — yellow highlight.</p>
<h3>4. Group selector (h2, h3 same colour)</h3>
<div class="box"><p>5. Descendant selector — .box ke andar ka p italic hai.</p></div>
<p style="margin:0;">6. <a href="#hover">Pseudo-class — mouse hover karo</a></p>`,
        caption:
          'Har selector ka apna kaam hai. id sabse strong (100), class (10), element (1) — isliye ek hi element par lage rules mein id wala jeetta hai.',
        height: 280,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Inline vs Internal vs External CSS',
        columns: ['Inline', 'Internal', 'External'],
        columnColors: ['#00d4ff', '#c4ff00', '#ff8800'],
        rows: [
          { label: 'Kahan', values: ['Element ka style=""', '<head> mein <style>', 'Alag .css + <link>'] },
          { label: 'Scope', values: ['Sirf wo element', 'Us page ke saare', 'Poori site'] },
          { label: 'Reusability', values: ['Sabse kam', 'Ek page', 'Sabse zyada'] },
          { label: 'Caching', values: ['Nahi', 'Nahi', 'Haan, browser cache'] },
          { label: 'Priority', values: ['Sabse zyada', 'Beech mein', 'Sabse kam'] },
          { label: 'Best for', values: ['Quick test, email HTML', 'Single page demo', 'Real projects'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'CSS Ke Zaroori Points',
        points: [
          'CSS rule = selector + { property: value; } — HTML se style alag rakhti hai.',
          'Teen tarike: inline (style attr), internal (<style>), external (.css + <link>).',
          'Selectors: p (element), .class, #id, * (universal), h1, h2 (group), div p (descendant), a:hover (pseudo).',
          'Specificity: inline (1000) > id (100) > class/attribute/pseudo (10) > element (1).',
          'Cascade: same specificity ho to baad wali rule jeetti hai; !important sab ko haraata hai.',
          'External CSS browser cache karta hai — performance aur maintenance dono ke liye best.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'CSS = presentation; HTML = structure. Separation of concerns.',
          'Insert karne ke 3 tarike — inline, internal, external.',
          'Selector types: element, class, id, universal, group, descendant, pseudo, attribute.',
          'Specificity order: inline > id > class > element.',
          'External CSS recommended; inline sirf test/email ke liye.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is CSS? Explain the three ways of inserting CSS into an HTML page with examples.',
        answer:
          '**CSS (Cascading Style Sheets):** wo language jo HTML document ki presentation batati hai — colour, font, spacing, border, layout. Rule ka format: `selector { property: value; }`.\n\n**1. Inline CSS** — element ke style attribute mein:\n```\n<p style="color: red; font-size: 18px;">Text</p>\n```\n- Sirf us element par, priority sabse zyada, reuse nahi\n\n**2. Internal CSS** — head ke andar `<style>`:\n```\n<head>\n  <style>\n    p { color: red; }\n  </style>\n</head>\n```\n- Us page ke saare elements par\n\n**3. External CSS** — alag file + link:\n```\n<head>\n  <link rel="stylesheet" href="style.css">\n</head>\n```\n- Poori site par, cache hota hai, best practice\n\n| Method | Scope | Priority |\n|---|---|---|\n| Inline | Element | Highest |\n| Internal | Page | Medium |\n| External | Site | Lowest |\n\n**Diagram:** Refer to the CSS insertion diagram.',
      },
      {
        question: 'Explain CSS selectors with examples.',
        answer:
          '| Selector | Syntax | Kya chunta hai |\n|---|---|---|\n| Element | `p { }` | Saare `<p>` |\n| Class | `.note { }` | `class="note"` wale |\n| ID | `#main { }` | `id="main"` wala |\n| Universal | `* { }` | Har element |\n| Group | `h1, h2 { }` | Dono headings |\n| Descendant | `div p { }` | div ke andar wale p |\n| Child | `div > p { }` | Sirf direct child p |\n| Attribute | `input[type="text"] { }` | attribute match |\n| Pseudo-class | `a:hover { }` | Hover state |\n| Pseudo-element | `p::first-line { }` | Pehli line |\n\n**Example:**\n```\np { color: #333; }            /* element */\n.highlight { background: #ff0; }  /* class */\n#title { color: #0047ff; }    /* id */\nh1, h2 { margin: 0; }         /* group */\n.box p { font-style: italic; } /* descendant */\na:hover { color: red; }       /* pseudo-class */\n```\n\n**Specificity:** inline (1000) > id (100) > class/attribute/pseudo-class (10) > element (1).\n\n**Diagram:** Refer to the CSS selectors diagram.',
      },
      {
        question: 'Explain the concept of specificity in CSS. Which rule wins when two rules target the same element?',
        answer:
          '**Specificity:** jab ek element par kai CSS rules lagte hain, to browser specificity se decide karta hai kaunsi rule jeetegi.\n\n**Weight table:**\n\n| Selector type | Weight |\n|---|---|\n| Inline style | 1000 |\n| ID | 100 |\n| Class, attribute, pseudo-class | 10 |\n| Element, pseudo-element | 1 |\n| Universal `*` | 0 |\n\n**Examples:**\n```\np { color: black; }              /* 1 */\n.note { color: blue; }          /* 10 */\n#main { color: green; }         /* 100 */\n<div style="color: red">        /* 1000 */\n```\nAgar teeno ek hi element par lagein to **red** jeetega (1000).\n\n**Tie-breaker:** same specificity ho to **baad mein likhi** rule lagti hai (source order).\n\n**!important:** kisi bhi declaration par laga dein to wo sabko haraata hai — par debugging mushkil ho jaati hai, isliye avoid karein.\n\n**Example (specificity 11 vs 10):**\n```\n.note { color: blue; }        /* 10 */\np.note { color: red; }        /* 1 + 10 = 11 → jeeta */\n```\n\n**Diagram:** Refer to the CSS selectors diagram (specificity column).',
      },
    ],
  },
];
