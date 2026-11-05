// ============================================================
// WEB TECHNOLOGY — Unit I (HTML and XML)
//  1.1  Introduction to Web Technology
//  1.2  Internet and WWW
//  1.3  Web Servers
//  1.4  Website Planning and Design Issues
//  1.5  Structure of an HTML Document
// Every topic carries real code + the live browser output of that code.
// ============================================================

import { webTechnologyTopicsB } from './webTechnology2.js';
import { webTechnologyTopicsC } from './webTechnology3.js';
import { webTechnologyTopicsD } from './webTechnology4.js';
import { webTechnologyTopicsE } from './webTechnology5.js';
import { webTechnologyTopicsF } from './webTechnology6.js';
import { webTechnologyTopicsG } from './webTechnology7.js';
import { webTechnologyTopicsH } from './webTechnology8.js';

const unit1Topics = [
  // ==========================================================
  // 1.1 — Introduction to Web Technology
  // ==========================================================
  {
    id: 'wt-intro',
    number: '1.1',
    title: 'Introduction to Web Technology',
    subtitle: 'Web kaise kaam karti hai — client, server aur unke beech ka protocol',
    icon: 'globe',
    accent: '#00d4ff',
    englishDefinition:
      'Web technology is the set of languages, protocols, standards and software systems used to create, deliver and use content over the World Wide Web. It has two sides: client-side (front-end) technology that runs inside the user browser — HTML for structure, CSS for presentation and JavaScript for behaviour — and server-side (back-end) technology that runs on the web server and typically includes an HTTP server, an application layer (PHP, Node.js, Java) and a database (MySQL, MongoDB). Communication between the two sides follows the HTTP/HTTPS request-response protocol over the TCP/IP stack, and a page reaches the user as a sequence: DNS lookup, HTTP request, server processing, response, browser rendering.',
    intro:
      'Jab aap phone par koi website kholte hain, teen cheezein milkar kaam karti hain: aapka browser (client), internet ka raasta, aur server jahan site ki files padi hoti hain. Is poore system ko samajhne ka naam hi Web Technology hai. Exam mein aksar "explain the architecture of web technology" ya "front-end vs back-end" poocha jaata hai — isliye pehle 5-step raasta samajh lein, phir usme HTML, CSS aur JS ki jagah tay karein. Yaad rakhein: teesri cheez "data" bhi hai — database ke bina dynamic site adhoori hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Web Technology kya hai?',
        body:
          'Web technology un sab languages aur systems ka naam hai jo website banane aur chalane ke liye chahiye. Front-end (client side) mein HTML, CSS aur JavaScript aate hain — ye browser ke andar chalte hain. Back-end (server side) mein web server (Apache/Nginx), server-side language (PHP, Node.js, Java, Python) aur database (MySQL, MongoDB) aate hain. In dono ke beech baat HTTP/HTTPS protocol se hoti hai.',
        body2:
          'Aasan analogy: HTML ghar ki deewar aur kamre hain (structure), CSS paint aur furniture hai (style), JavaScript bijli aur switchboard hai (behaviour), server wo plot hai jahan ghar bana hai, aur database us ghar ka record room hai. Inme se ek bhi cheez hata dein to site ya toot jaayegi ya bekaar lagegi.',
        chips: ['HTML', 'CSS', 'JavaScript', 'HTTP', 'Web server', 'Database'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Web Request Ka Poora Raasta',
        diagram: 'web-stack',
        caption:
          'Client (browser) → Internet (DNS + routers) → Web server (Apache/Nginx) → Application server (PHP/Node) → Database, aur response wapas browser tak. Exam mein ye 5-step diagram draw karna aur har step ko ek line mein explain karna best answer hota hai.',
      },
      {
        type: 'cards',
        kicker: 'Components',
        title: 'Web Technology ke Chaar Hisse',
        cards: [
          {
            icon: 'code',
            title: 'Client-side (Front-end)',
            body:
              'Browser ke andar chalne wala code — HTML (structure), CSS (design), JavaScript (interaction). Ye server se aane ke baad user ke device par chalta hai, isliye fast hai. Seemayein: user ka code dekh sakta hai, aur bade calculations browser par nahi karte.',
          },
          {
            icon: 'server',
            title: 'Server-side (Back-end)',
            body:
              'Server par chalne wala code — login check, payment, report generation, database queries. PHP, Node.js, Java (JSP/Servlet), Python (Django), C# (.NET). User isko nahi dekh sakta, isliye secure business logic yahan rakha jaata hai.',
          },
          {
            icon: 'network',
            title: 'Protocols',
            body:
              'HTTP/HTTPS request-response ke liye, TCP/IP data pahunchane ke liye, DNS naam ko IP mein badalne ke liye, FTP files ke liye, SMTP email ke liye. Protocol = language jisme client aur server baat karte hain.',
          },
          {
            icon: 'database',
            title: 'Database & Storage',
            body:
              'Data permanently rakhne ke liye — MySQL, PostgreSQL (relational, SQL) ya MongoDB, Redis (NoSQL). Server-side code hi database se baat karta hai; browser seedha database ko touch nahi karta (security reason).',
          },
        ],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Pehla Web Page — HTML, CSS aur JS ek Saath',
        intro:
          'Neeche wahi page hai jo aapne shuruaat mein banaya hoga. Left mein code hai, right mein wahi code browser mein chalne ke baad kaisa dikhta hai. Teen cheezein ek hi file mein hain: <style> mein CSS, body mein HTML, aur <script> mein JavaScript.',
        language: 'html',
        filename: 'first-page.html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mera Pehla Page</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f2f6ff; padding: 18px; }
    h1 { color: #0047ff; }
    .box { border: 2px solid #0047ff; border-radius: 8px; padding: 12px; }
  </style>
</head>
<body>
  <h1>Hello, Web Technology!</h1>
  <div class="box">
    <p>Ye mera pehla HTML page hai.</p>
    <button onclick="alert('JavaScript chal rahi hai!')">Click karo</button>
  </div>
</body>
</html>`,
        html: `<h1 style="font-family:Arial,sans-serif;color:#0047ff;margin:0 0 10px;">Hello, Web Technology!</h1>
<div style="border:2px solid #0047ff;border-radius:8px;padding:12px;">
  <p style="margin:0 0 10px;">Ye mera pehla HTML page hai.</p>
  <button style="padding:6px 14px;border-radius:6px;border:1px solid #0047ff;background:#e6efff;color:#0047ff;">Click karo</button>
</div>`,
        caption:
          'Sandbox preview hai — button ka alert yahan nahi chalega, kyunki preview mein JavaScript band hai. Asli browser mein click par popup aata.',
        height: 190,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Front-end vs Back-end',
        columns: ['Front-end (client side)', 'Back-end (server side)'],
        columnColors: ['#00d4ff', '#c4ff00'],
        rows: [
          { label: 'Kahan chalta hai', values: ['User ke browser mein', 'Web server par'] },
          { label: 'Languages', values: ['HTML, CSS, JavaScript', 'PHP, Node.js, Java, Python'] },
          { label: 'Kaam', values: ['Dikhana, interaction, layout', 'Logic, security, database, API'] },
          { label: 'User dekh sakta hai?', values: ['Haan (View Source)', 'Nahi, code server par'] },
          { label: 'Speed', values: ['Turant, device par', 'Network + processing time'] },
          { label: 'Example', values: ['Form ka validation, animation', 'Login check, payment, report'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Yaad Rakhne Wali Baatein',
        points: [
          'Web (WWW) internet ki ek service hai — internet infrastructure hai, web uspar chalti hai.',
          'Static page: server sirf file bhejta hai (HTML/CSS). Dynamic page: server code chalakar HTML banata hai.',
          'HTTP stateless hai — isliye login yaad rakhne ke liye session/cookie use hota hai.',
          'HTTPS = HTTP + TLS encryption; port 443. HTTP ka port 80 hai.',
          'Responsive design: ek hi HTML, screen size ke hisaab se CSS se layout badalta hai.',
          'Interview line: "Web technology = client technologies + server technologies + HTTP ka glue."',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Front-end: HTML (structure) + CSS (style) + JS (behaviour) — browser mein chalta hai.',
          'Back-end: server + application + database — server par chalta hai.',
          'Communication HTTP/HTTPS se, addressing DNS se, transport TCP/IP se.',
          'Request ka raasta: browser → internet → web server → app server → database → response.',
          'Static vs dynamic: file bhejna vs code chalakar page banana.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the architecture of web technology with a neat diagram. Differentiate between client-side and server-side technologies.',
        answer:
          '**Web technology:** website banane aur chalane ke liye use hone wali languages, protocols aur software ka poora set.\n\n**Architecture (5 layers):**\n1. **Client / browser** — request bhejta hai (Chrome, Firefox, Edge)\n2. **Internet** — DNS se IP milta hai, routers packet pahunchate hain\n3. **Web server** — Apache / Nginx request receive karta hai\n4. **Application server** — PHP / Node / Java business logic chalata hai\n5. **Database** — MySQL / MongoDB data deta hai\n\nPhir response (HTML + CSS + JS) wapas browser ko jaata hai aur browser use render karta hai.\n\n| Basis | Client-side | Server-side |\n|---|---|---|\n| Kahan chalta hai | Browser | Web server |\n| Languages | HTML, CSS, JS | PHP, Node, Java, Python |\n| User dekh sakta | Haan | Nahi |\n| Kaam | UI, validation, animation | Logic, security, DB |\n| Speed | Fast | Network dependent |\n\n**Diagram:** Refer to the "web request ka poora raasta" diagram.',
      },
      {
        question: 'What is a web page, a website and a web browser? Explain with examples.',
        answer:
          '**Web page:** ek single document jo browser mein dikhta hai, HTML/CSS/JS se bana hota hai. Example: college ki "admission" page.\n\n**Website:** ek hi domain par rehne wale related web pages ka group, ek common navigation ke saath. Example: college ki poori site — home, courses, admission, contact.\n\n**Web browser:** wo client software jo server se page laata hai, HTML parse karta hai, CSS lagata hai aur JS chalata hai. Example: Chrome, Firefox, Safari, Edge.\n\n| Term | Kya hai | Example |\n|---|---|---|\n| Web page | Ek document | /admission.html |\n| Website | Pages ka group | www.college.edu |\n| Browser | Client software | Chrome |\n| Web server | Files serve karne wala | Apache |\n\n**Flow:** user URL type karta hai → DNS IP deta hai → browser HTTP request bhejta hai → server response deta hai → browser render karta hai.\n\n**Diagram:** Refer to the web stack diagram.',
      },
      {
        question: 'What is the difference between a static and a dynamic web page? Give one example of each.',
        answer:
          '**Static page:**\n- Server par pehle se bani .html file hoti hai\n- Har user ko same content milta hai\n- Server-side processing nahi hoti — tez aur sasta\n- Update karne ke liye file badalni padti hai\n- Example: college ka "About Us" page\n\n**Dynamic page:**\n- Server code (PHP/Node/Java) chalakar HTML banata hai\n- Content database se aata hai, user ke hisaab se badal sakta hai\n- Login, cart, dashboard jaise features possible\n- Thoda slow aur complex, par flexible\n- Example: Flipkart ka "My Orders" page, Gmail inbox\n\n| Basis | Static | Dynamic |\n|---|---|---|\n| Source | Pre-built file | Generated at request time |\n| Content | Same for all | User/time dependent |\n| Server code | Nahi | Haan |\n| Speed | Zyada | Kam |\n| Example | About page | My Orders, dashboard |\n\n**Diagram:** Refer to the web server diagram (static vs dynamic branch).',
      },
    ],
  },

  // ==========================================================
  // 1.2 — Internet and WWW
  // ==========================================================
  {
    id: 'wt-internet-www',
    number: '1.2',
    title: 'Internet and WWW',
    subtitle: 'Internet infrastructure hai, WWW uspar chalti ek service',
    icon: 'network',
    accent: '#2f6fff',
    englishDefinition:
      'The Internet is a global system of interconnected computer networks that communicate using the TCP/IP protocol suite; it is a hardware and protocol infrastructure that carries many services. The World Wide Web (WWW) is one such service — a system of interlinked hypertext documents and resources identified by URLs, transferred over HTTP/HTTPS and rendered by a browser. The web was proposed by Tim Berners-Lee at CERN in 1989 and made public in 1991. Internet access is provided by ISPs, data is routed in packets, and DNS translates human-readable domain names into IP addresses. In short, the Internet is the network; the Web is a service that runs on that network.',
    intro:
      'Sabse common confusion yahi hai: "internet" aur "www" ko log same samajh lete hain — par exam mein yahi difference poocha jaata hai. Internet wo sadak hai jo duniya bhar ke computers ko jodti hai. WWW us sadak par chalti hui gaadi hai jisme documents (pages) hain. Email, WhatsApp, video call — ye sab internet par chalte hain par web nahi hain. Ek line mein: WWW ⊂ Internet. Is topic mein URL, DNS, IP aur HTTP ka kaam bhi samajh lein — aage har topic isi par khada hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Internet aur WWW — farak kya hai?',
        body:
          'Internet ek network of networks hai — duniya bhar ke computers aur devices aapas mein cables, fibre, satellites aur routers se jude hote hain, aur TCP/IP protocol se baat karte hain. Iska koi malik nahi; standards bodies (IETF, W3C, ICANN) ise chalate hain. Internet par email (SMTP), file transfer (FTP), video call (VoIP) aur WWW — sab services chalti hain.',
        body2:
          'World Wide Web internet ki ek service hai jisme hypertext documents (web pages) URL se pehchane jaate hain, HTTP se transfer hote hain aur browser se dekhe jaate hain. 1989 mein Tim Berners-Lee ne CERN mein iska idea diya. Yaad rakhein: WWW ke bina internet chalta rahega (email kaam karega), par internet ke bina WWW kuch bhi nahi.',
        chips: ['Internet', 'WWW', 'URL', 'HTTP', 'DNS', 'IP address', 'TCP/IP'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Internet vs WWW',
        diagram: 'internet-www',
        caption:
          'Left: internet = ISP, DNS, routers, TCP/IP, cables (hardware + protocols). Right: WWW = URL, HTTP, HTML/CSS/JS, browser, search engine. Neeche likha hai: internet ke bina WWW nahi chal sakta, par WWW ke bina internet chalta hai.',
      },
      {
        type: 'cards',
        kicker: 'Basics',
        title: 'Web Ke Chaar Zaroori Concept',
        cards: [
          {
            icon: 'globe',
            title: 'URL — address',
            body:
              'Uniform Resource Locator page ka pata batata hai: https://site.com:443/folder/page.html?id=5#top — protocol, domain, port, path, query aur fragment. Bina URL ke browser ko pata hi nahi chalega kya mangna hai.',
          },
          {
            icon: 'search',
            title: 'DNS — phonebook',
            body:
              'Domain Name System naam (google.com) ko IP address (142.250.183.4) mein badalta hai. DNS server ki entry na mile to site nahi khulti — "DNS not found" error yahi hota hai. Browsers aur OS DNS results cache karte hain.',
          },
          {
            icon: 'network',
            title: 'IP + TCP',
            body:
              'IP address device ka pata hai; TCP data ko packets mein todta hai, order aur delivery guarantee karta hai. IPv4 (32-bit, 4 numbers) aur IPv6 (128-bit) versions hain. HTTP in dono ke upar chalta hai.',
          },
          {
            icon: 'zap',
            title: 'HTTP / HTTPS',
            body:
              'Request-response protocol — browser request bhejta hai (GET /page.html), server status code + headers + body deta hai. HTTPS mein TLS encryption jodi jaati hai (port 443), isliye password aur payment safe rehte hain.',
          },
        ],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'URL Ke Hisse — HTML Link Mein Dekho',
        intro:
          'Ek hi HTML tag mein absolute URL, relative URL, email link aur phone link — chaaron ke saath output. Hyphen se pehle dekhein ki browser kya dikhata hai.',
        language: 'html',
        filename: 'links.html',
        code: `<!-- absolute URL: poora pata -->
<a href="https://www.example.com/notes/html.html">
  Absolute link
</a>

<!-- relative URL: isi site ke andar -->
<a href="notes/css.html">Relative link</a>

<!-- email aur phone -->
<a href="mailto:help@college.edu">Email karo</a>
<a href="tel:+919876543210">Call karo</a>`,
        html: `<p style="margin:0 0 8px;">
  <a href="#absolute" style="color:#0047ff;">Absolute link</a> &nbsp;→&nbsp;
  https://www.example.com/notes/html.html
</p>
<p style="margin:0 0 8px;">
  <a href="#relative" style="color:#0047ff;">Relative link</a> &nbsp;→&nbsp;
  notes/css.html (isi site ke andar)
</p>
<p style="margin:0 0 8px;">
  <a href="#mail" style="color:#c0392b;">Email karo</a> &nbsp;→&nbsp; mailto:help@college.edu
</p>
<p style="margin:0;color:#555;">
  <a href="#tel" style="color:#0a8f52;">Call karo</a> &nbsp;→&nbsp; tel:+919876543210
</p>`,
        caption:
          'Preview mein links ka href badal diya gaya hai taaki click par page na chhoote — asli code mein wahi URL hota hai jo left side likha hai.',
        height: 170,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Internet vs World Wide Web',
        columns: ['Internet', 'World Wide Web'],
        columnColors: ['#2f6fff', '#c4ff00'],
        rows: [
          { label: 'Kya hai', values: ['Networks ka global infrastructure', 'Us infrastructure par chalti service'] },
          { label: 'Nature', values: ['Hardware + TCP/IP protocols', 'Documents + HTTP + browser'] },
          { label: 'Shuruaat', values: ['1969 — ARPANET', '1989–91 — Tim Berners-Lee, CERN'] },
          { label: 'Kaam', values: ['Data pahunchana (routing)', 'Pages serve aur render karna'] },
          { label: 'Components', values: ['Cables, routers, IP, ISP', 'URL, HTTP, HTML, browser'] },
          { label: 'Dusri services', values: ['Email, FTP, VoIP, gaming', 'Sirf web pages / web apps'] },
          { label: 'Relation', values: ['Bada set (superset)', 'Chhota set (subset)'] },
        ],
      },
      {
        type: 'example',
        kicker: 'Example',
        title: 'URL Type Karte Hi Kya Hota Hai?',
        body:
          '1. Aap chrome mein "college.edu" likhte hain → browser DNS se poochta hai: is domain ka IP kya hai?\n2. DNS reply: 104.21.55.12 (aur cache kar leta hai).\n3. Browser us IP ke port 443 par TCP connection banata hai, phir TLS handshake hota hai (HTTPS).\n4. Browser HTTP request bhejta hai: GET / HTTP/1.1, Host: college.edu.\n5. Server response: 200 OK + HTML.\n6. Browser HTML parse karta hai, CSS aur images ke liye alag requests bhejta hai, phir page paint karta hai.\n\nPoora safar aksar 200–500 milliseconds mein ho jaata hai. Agar DNS fail ho → "server not found"; agar port band ho → "connection refused"; agar path galat ho → 404.',
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Internet = network of networks (TCP/IP), WWW = uspar chalti hypertext service.',
          'WWW ⊂ Internet; email/FTP/video call internet par hain par WWW nahi.',
          'URL = protocol + domain + path + query; DNS naam ko IP mein badalta hai.',
          'HTTP stateless request-response; HTTPS = HTTP + TLS (port 443).',
          'Tim Berners-Lee ne 1989 mein WWW propose kiya (CERN).',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Differentiate between the Internet and the World Wide Web. Explain the role of DNS, IP address and HTTP in accessing a web page.',
        answer:
          '**Internet:** global network of networks jo TCP/IP se communicate karta hai — hardware + protocols ka infrastructure. 1969 (ARPANET).\n\n**WWW:** internet par chalti service — hypertext documents ka system jo URL se identify hote hain, HTTP se transfer hote hain aur browser se dikhte hain. 1989–91, Tim Berners-Lee (CERN).\n\n| Basis | Internet | WWW |\n|---|---|---|\n| Kya hai | Infrastructure | Service |\n| Protocol | TCP/IP | HTTP / HTTPS |\n| Components | Routers, cables, ISP | URL, HTML, browser |\n| Relation | Superset | Subset |\n\n**Role of components:**\n1. **DNS** — domain name ko IP address mein badalta hai (phonebook)\n2. **IP address** — device/server ka unique pata, jahan request jaati hai\n3. **HTTP** — request-response ka rule: browser GET bhejta hai, server 200 + HTML deta hai\n\n**Flow:** URL → DNS lookup → TCP connection → HTTP request → server response → browser render.\n\n**Diagram:** Refer to the Internet vs WWW diagram.',
      },
      {
        question: 'What is a URL? Explain its components with an example.',
        answer:
          '**URL (Uniform Resource Locator):** web par kisi resource ka unique address.\n\n**Example:** https://www.college.edu:443/notes/html/page.html?id=5#forms\n\n| Part | Value | Kaam |\n|---|---|---|\n| Protocol | https | Transfer ka rule (secure) |\n| Domain / host | www.college.edu | Server ka naam |\n| Port | 443 | Server ka darwaza (HTTPS default) |\n| Path | /notes/html/page.html | Server par file ka location |\n| Query | ?id=5 | Extra parameters |\n| Fragment | #forms | Page ke andar section |\n\n**Types:**\n- **Absolute URL** — poora pata, kisi bhi site se kaam karta hai\n- **Relative URL** — isi site ke andar ka path, site shift hone par bhi chalta hai\n\n**Note:** port aur query optional hote hain; http ka default port 80, https ka 443.\n\n**Diagram:** Refer to the Internet vs WWW diagram.',
      },
    ],
  },

  // ==========================================================
  // 1.3 — Web Servers
  // ==========================================================
  {
    id: 'wt-web-server',
    number: '1.3',
    title: 'Web Servers',
    subtitle: 'Apache, Nginx aur request-response cycle',
    icon: 'server',
    accent: '#c4ff00',
    englishDefinition:
      'A web server is a software (and the machine running it) that accepts HTTP requests from clients and returns HTTP responses — HTML pages, CSS, JavaScript, images or data. It listens on a port (80 for HTTP, 443 for HTTPS), maps the requested URL path to a file or to an application, and sends back a status code with headers and a body. Popular web servers are Apache HTTP Server, Nginx and Microsoft IIS. A web server can serve static content directly, act as a reverse proxy, apply compression, caching, virtual hosting (many domains on one server), HTTPS termination and access logging, and can hand dynamic requests to an application server (PHP-FPM, Node.js, Tomcat) which may query a database.',
    intro:
      'Web server wo darwaza hai jahan aapki site ki har request aati hai. Iska kaam simple hai: request lo, samjho, response do. Par exam mein detail chahiye — static vs dynamic content, ports, status codes, virtual hosting aur Apache vs Nginx ka difference. Is topic mein hum ek asli HTTP request aur response bhi dekhenge, taaki aapko dikhe ki browser aur server ke beech asal mein kya text chalta hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Web Server kya karta hai?',
        body:
          'Web server ek program hai jo network par port 80 (HTTP) ya 443 (HTTPS) par sunti (listen) rehti hai. Jab browser request bhejta hai — "GET /index.html" — to server URL ko file path mein badalta hai, file dhoondta hai, aur status code + headers + content wapas bhejta hai. Agar file na mile to 404, permission na ho to 403, aur code mein error ho to 500.',
        body2:
          'Do tarah ka kaam: static content (HTML, CSS, JS, image, PDF) wo seedha file system se serve karta hai; dynamic content (.php, .jsp, /api/...) wo app server ko de deta hai, jo database se data lekar HTML ya JSON banata hai. Apache aur Nginx dono ye kaam karte hain — farak performance model aur configuration ka hai.',
        chips: ['Apache', 'Nginx', 'IIS', 'Port 80/443', 'Status code', 'Virtual host'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Request → Response Cycle',
        diagram: 'web-server',
        caption:
          'Browser request bhejta hai (GET /index.html) → web server URL parse karta hai → static file ho to seedha bhej deta hai, dynamic ho to app server + database se HTML banwa kar bhejta hai. Right side mein status codes (200, 301, 403, 404, 500) aur ports likhe hain.',
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Asli HTTP Request aur Response',
        intro:
          'Ye wo text hai jo browser aur server ke beech chalta hai — HTML nahi, plain HTTP messages. Exam mein request aur response ke parts (request line, headers, body) alag-alag likhne se marks milte hain.',
        language: 'http',
        filename: 'browser ↔ server',
        code: `--- REQUEST (browser se server ko) ---
GET /notes/html.html HTTP/1.1
Host: www.college.edu
User-Agent: Mozilla/5.0 (Windows NT 10.0)
Accept: text/html, application/xhtml+xml
Accept-Language: en-IN,en
Connection: keep-alive

--- RESPONSE (server se browser ko) ---
HTTP/1.1 200 OK
Date: Mon, 04 Nov 2026 10:12:00 GMT
Server: Apache/2.4.58 (Ubuntu)
Content-Type: text/html; charset=UTF-8
Content-Length: 1420
Cache-Control: max-age=3600

<!DOCTYPE html>
<html><body><h1>HTML Notes</h1></body></html>`,
        note:
          'Request mein pehli line = method + path + HTTP version. Uske baad headers. Response mein pehli line = status code + reason. GET request mein body nahi hoti; POST mein hoti hai.',
      },
      {
        type: 'cards',
        kicker: 'Servers',
        title: 'Teen Main Web Servers',
        cards: [
          {
            icon: 'server',
            title: 'Apache HTTP Server',
            body:
              'Sabse purana aur popular open-source server. Module based (mod_php, mod_rewrite), .htaccess se per-folder configuration, har request ke liye process/thread — bahut load par memory zyada leta hai. Shared hosting par sabse common.',
          },
          {
            icon: 'zap',
            title: 'Nginx',
            body:
              'Event-driven, asynchronous architecture — kam memory mein hazaron connections. Static files sabse tez serve karta hai, isliye aaj aksar Nginx ko front par reverse proxy + Apache/Node ko peeche rakha jaata hai. Load balancing bhi built-in.',
          },
          {
            icon: 'grid',
            title: 'Microsoft IIS',
            body:
              'Windows Server par chalta hai, .NET/ASP.NET ke saath best. GUI (IIS Manager) se configuration, Windows authentication aur enterprise integration strong hai. Open-source stack mein kam dikhta hai.',
          },
        ],
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Static vs Dynamic Content',
        columns: ['Static content', 'Dynamic content'],
        columnColors: ['#00d4ff', '#ff8800'],
        rows: [
          { label: 'Kaun banata hai', values: ['Pehle se bani file', 'Server code request par'] },
          { label: 'Handling', values: ['Web server khud serve karta hai', 'App server ko pass hota hai'] },
          { label: 'Extension', values: ['.html, .css, .js, .jpg', '.php, .jsp, .aspx, /api/'] },
          { label: 'Speed', values: ['Bahut tez', 'Database + processing ke wajah se slow'] },
          { label: 'Caching', values: ['Aasaan (CDN par bhi)', 'Mushkil, user-specific'] },
          { label: 'Example', values: ['CSS file, logo, About page', 'Login, cart, result, dashboard'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Web Server Ke 6 Kaam',
        points: [
          'Request sunna aur parse karna — port 80 (HTTP) / 443 (HTTPS) par.',
          'Static files serve karna — HTML, CSS, JS, images, PDFs.',
          'Dynamic request app server ko dena (PHP-FPM, Node, Tomcat) aur uska output wapas bhejna.',
          'Virtual hosting — ek hi server (ek IP) par kai domains, "Host" header se farak.',
          'Security aur performance — HTTPS termination, compression (gzip), caching, rate limiting, reverse proxy.',
          'Logging aur monitoring — access log (kaun aaya) aur error log (kya toota).',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Web server HTTP request leta hai aur response deta hai — port 80/443 par.',
          'Static file seedha serve hoti hai; dynamic request app server + database tak jaati hai.',
          'Status codes: 200 OK, 301 redirect, 403 forbidden, 404 not found, 500 server error.',
          'Apache = module based, .htaccess, wide compatibility; Nginx = event-driven, fast static, reverse proxy.',
          'HTTPS ke liye server par SSL/TLS certificate install hota hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is a web server? Explain the request-response cycle with a diagram and list any four HTTP status codes.',
        answer:
          '**Web server:** software jo HTTP request accept karta hai aur response bhejta hai — Apache, Nginx, IIS. Port 80 (HTTP) / 443 (HTTPS) par listen karta hai.\n\n**Request-response cycle:**\n1. Browser TCP connection banata hai aur request bhejta hai: GET /index.html\n2. Server URL parse karta hai, virtual host check karta hai\n3. Static file ho to file system se padhta hai; dynamic ho to app server ko deta hai\n4. App server database se data lekar HTML/JSON banata hai\n5. Server status code + headers + body wapas bhejta hai\n6. Browser HTML parse karke render karta hai\n\n**Status codes:**\n- **200 OK** — request safal\n- **301** — permanent redirect\n- **403 Forbidden** — permission nahi\n- **404 Not Found** — resource nahi mila\n- **500 Internal Server Error** — server code mein error\n\n**Diagram:** Refer to the web server request-response diagram.',
      },
      {
        question: 'Differentiate between Apache and Nginx web servers.',
        answer:
          '| Basis | Apache | Nginx |\n|---|---|---|\n| Architecture | Process/thread per request | Event-driven, asynchronous |\n| Memory | Zyada (har connection ka thread) | Kam |\n| Static files | Achha | Bahut tez |\n| Concurrent load | Kam connections par theek | Hazaron connections |\n| Configuration | .htaccess, per-directory | Central nginx.conf |\n| Modules | Bahut, dynamic modules | Specific modules, compiled |\n| Common use | Shared hosting, PHP apps | Reverse proxy, load balancer, static |\n\n**Note:** Aaj aksar dono saath use hote hain — Nginx front par (static + SSL + proxy) aur Apache/Node peeche app ke liye.\n\n**Diagram:** Refer to the web server diagram.',
      },
      {
        question: 'Explain static and dynamic websites with examples. How does the server handle each?',
        answer:
          '**Static website:**\n- Pehle se bani HTML/CSS files\n- Har user ko same content\n- Server file system se seedha file bhejta hai\n- Fast, sasta, secure (koi code execution nahi)\n- Example: portfolio, college "About Us" page\n\n**Dynamic website:**\n- Content database se aata hai, request par HTML banta hai\n- User-specific content possible (login, cart)\n- Web server request app server (PHP/Node/Java) ko deta hai\n- App server DB se data lekar HTML/JSON banata hai\n- Example: e-commerce, social media, Gmail\n\n| Basis | Static | Dynamic |\n|---|---|---|\n| Content | Fixed | Generated per request |\n| Server role | File serve | App server ko forward |\n| Speed | Fast | Slower |\n| Update | File edit | Database update |\n| Example | About page | My Orders |\n\n**Diagram:** Refer to the web server diagram (static/dynamic branch).',
      },
    ],
  },

  // ==========================================================
  // 1.4 — Website Planning and Design Issues
  // ==========================================================
  {
    id: 'wt-planning',
    number: '1.4',
    title: 'Website Planning and Design Issues',
    subtitle: 'Site banane se pehle ka plan aur design ki common galtiyan',
    icon: 'design',
    accent: '#ff8800',
    englishDefinition:
      'Website planning is the pre-development process of deciding the purpose, target audience, content, information architecture, technology and budget of a website before any page is written. It typically covers goal definition, audience analysis, content inventory, sitemap and navigation design, wireframes, and a testing and launch plan. Website design issues are the recurring usability and quality problems that planning must prevent: unclear navigation, inconsistent layout and typography, poor colour contrast, non-responsive layouts, slow loading pages, missing accessibility support, broken links, and weak SEO. Good design follows established heuristics — clear hierarchy, consistent spacing, readable text, visible feedback and mobile-first responsiveness.',
    intro:
      'Exam mein ye topic theory lagta hai, par marks yahin milte hain kyunki ismein points bahut hain. Do hisse karke padhein: pehla "planning" (kaam shuru karne se pehle kya tay karna hai) aur doosra "design issues" (log kahan galti karte hain aur uska solution kya hai). Har design issue ke saath ek solution likhna best answer hota hai — jaise "poor contrast → WCAG 4.5:1 ratio use karo".',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Planning kyun zaroori hai?',
        body:
          'Bina planning ke site banane ka matlab hai — content baad mein sochna, navigation baad mein banana, aur mobile version baad mein theek karna. Planning phase mein ye tay hota hai: site ka goal (information, sales, admission), audience (kaun, kis device par, kis language mein), content (kaunse pages, kaunsi images), structure (sitemap + menu), technology (static ya CMS ya custom), aur success ka measure (analytics KPI).',
        body2:
          'Design issues us waqt paida hote hain jab in sawaalon ka jawab skip kar diya jaata hai. Jaise: menu 10 items ka confusing ho jaana, har page par alag font, text background se match ho jaana, ya desktop par bani site mobile par toot jaana. In sab ka ilaaj planning mein hi hota hai — baad mein badalna 5 guna mehnga padta hai.',
        chips: ['Goal', 'Audience', 'Sitemap', 'Wireframe', 'Responsive', 'Accessibility'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: '6 Phases of Website Planning',
        diagram: 'website-planning',
        caption:
          'Goal → Audience → Content → Structure → Design → Test & Launch. Neeche common design issues likhe hain (responsiveness, speed, navigation, contrast, fonts). Exam mein ye 6 boxes draw karke har ek ke saath ek line likhna scoring hota hai.',
      },
      {
        type: 'points',
        kicker: 'Planning',
        title: 'Planning Ke 6 Steps (Detail Mein)',
        points: [
          'Goal / purpose — site kis liye hai? Information, admission, sales, support? Isse design decisions nikalte hain.',
          'Audience analysis — age, device (mobile first?), language, internet speed, technical comfort.',
          'Content inventory — kaunse pages, kya text, kaunsi images, kaunse forms; content pehle, design baad mein.',
          'Information architecture — sitemap, menu hierarchy (3 click rule), breadcrumbs, search.',
          'Wireframe + prototype — layout ka rough sketch, phir clickable prototype se feedback.',
          'Testing + launch plan — cross-browser test, mobile test, speed test, SEO basics, backup aur analytics.',
        ],
      },
      {
        type: 'cards',
        kicker: 'Design Issues',
        title: 'Common Design Issues aur Unka Solution',
        cards: [
          {
            icon: 'design',
            title: 'Inconsistent look',
            body:
              'Har page par alag font, alag colour, alag button style — user confuse hota hai. Solution: ek design system — 2 fonts, 3 colours, fixed spacing, reusable components. Consistency trust badhati hai.',
          },
          {
            icon: 'eye',
            title: 'Poor contrast & small text',
            body:
              'Grey text on white ya light text on image — padhna mushkil. Solution: WCAG ke mutabik normal text ke liye 4.5:1 contrast ratio, body text kam se kam 16px, line-height 1.5. Accessibility ka bhi yahi rule hai.',
          },
          {
            icon: 'grid',
            title: 'Not responsive',
            body:
              'Desktop ke liye fix width 1200px → mobile par horizontal scroll. Solution: mobile-first CSS, flexible grid, media queries, responsive images (srcset), viewport meta tag.',
          },
          {
            icon: 'speed',
            title: 'Slow loading',
            body:
              'Bade images, bahut saari scripts, koi caching nahi. Solution: WebP images + compression, lazy loading, minified CSS/JS, CDN, browser caching. 3 second se zyada load = 50% users chale jaate hain.',
          },
          {
            icon: 'network',
            title: 'Confusing navigation',
            body:
              'Menu mein 15 items, koi group nahi, current page highlight nahi. Solution: 5–7 top-level items, clear labels, visible "active" state, breadcrumbs aur footer links.',
          },
          {
            icon: 'alert',
            title: 'Broken links & missing alt',
            body:
              '404 links, placeholder text, images bina alt attribute — SEO aur screen reader dono tootte hain. Solution: link checker, har image par meaningful alt, 404 page par search aur home link.',
          },
        ],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Design Issues — Code Mein Fix Kaise Hote Hain',
        intro:
          'Ek hi card do tarah se banaya gaya hai. Left: poor contrast, 11px text, koi spacing nahi. Right: 16px text, 4.5:1 se zyada contrast, proper padding aur border-radius. Yahi "design issue → solution" ka practical roop hai.',
        language: 'html',
        filename: 'design-fix.html',
        code: `<!-- POOR: low contrast, tiny text, cramped -->
<div style="color:#aaa; background:#fff; font-size:11px;">
  Admission open
  <div style="font-size:10px; color:#bbb;">
    Apply before 30 Nov
  </div>
</div>

<!-- GOOD: contrast, 16px base, padding, hierarchy -->
<div style="background:#0047ff; color:#fff;
            padding:16px; border-radius:10px;
            font-size:16px; font-weight:700;">
  Admission open
  <div style="font-size:14px; color:#dbe6ff;
              margin-top:6px; font-weight:400;">
    Apply before 30 Nov
  </div>
</div>`,
        html: `<p style="font-size:11px;color:#777;margin:0 0 4px;font-weight:700;">POOR</p>
<div style="color:#aaaaaa;background:#ffffff;border:1px solid #eee;font-size:11px;padding:4px;margin:0 0 14px;">
  Admission open
  <div style="font-size:10px;color:#bbbbbb;">Apply before 30 Nov</div>
</div>
<p style="font-size:11px;color:#777;margin:0 0 4px;font-weight:700;">GOOD</p>
<div style="background:#0047ff;color:#ffffff;padding:16px;border-radius:10px;font-size:16px;font-weight:700;">
  Admission open
  <div style="font-size:14px;color:#dbe6ff;margin-top:6px;font-weight:400;">Apply before 30 Nov</div>
</div>`,
        caption:
          'Contrast ratio badhane se text padhne layak ho jaata hai, padding se content saans le pata hai, aur font-size hierarchy se user ko pehle main message dikhta hai.',
        height: 230,
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Good Design vs Poor Design',
        columns: ['Good design', 'Poor design'],
        columnColors: ['#c4ff00', '#ff8800'],
        rows: [
          { label: 'Navigation', values: ['5–7 clear items, active state', 'Sab kuch menu mein, koi hierarchy nahi'] },
          { label: 'Layout', values: ['Grid, consistent spacing', 'Random alignment, cramped text'] },
          { label: 'Typography', values: ['2 fonts, 3 sizes, 16px+ body', '5 fonts, 10px text'] },
          { label: 'Colour', values: ['4.5:1 contrast', 'Low contrast, text on busy image'] },
          { label: 'Mobile', values: ['Mobile-first, responsive', 'Desktop-only, horizontal scroll'] },
          { label: 'Speed', values: ['Compressed + cached', '10 MB images, no caching'] },
          { label: 'Accessibility', values: ['Alt text, keyboard, labels', 'Mouse-only, no alt text'] },
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Planning: goal → audience → content → structure → design → test/launch.',
          'Content pehle, design baad mein — wireframe se pehle text tay karein.',
          'Design issues: inconsistency, poor contrast, non-responsive, slow speed, bad navigation, broken links.',
          'Solution hamesha concrete likhein — "4.5:1 contrast", "mobile-first media query", "WebP + lazy loading".',
          'Success ko analytics se measure karein (bounce rate, conversion, load time).',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the steps involved in planning a website. Why is planning important before development?',
        answer:
          '**Planning steps:**\n1. **Goal / purpose** — site kis liye (information, admission, sales, support)\n2. **Audience analysis** — age, device, language, internet speed\n3. **Content inventory** — pages, text, images, forms (content first, design later)\n4. **Information architecture** — sitemap, menu hierarchy, breadcrumbs\n5. **Wireframe / prototype** — layout sketch aur clickable demo\n6. **Technology choice** — static HTML, CMS (WordPress) ya custom app\n7. **Testing + launch plan** — cross-browser, mobile, speed, SEO, analytics\n\n**Why important:**\n- Rework kam — baad mein change karna 5× mehnga\n- Clear scope — time aur budget control\n- Better UX — navigation aur content pehle se socha hua\n- Measurable — KPI pehle tay, isliye result verify hota hai\n\n**Diagram:** Refer to the 6-phase planning diagram.',
      },
      {
        question: 'Discuss any six common website design issues and suggest a solution for each.',
        answer:
          '| Issue | Problem | Solution |\n|---|---|---|\n| Inconsistent design | Alag font/colour har page par | Design system: 2 fonts, 3 colours |\n| Poor contrast | Text padhna mushkil | WCAG 4.5:1 ratio, 16px body text |\n| Not responsive | Mobile par toot jaata hai | Mobile-first CSS + media queries |\n| Slow loading | Bade images, no cache | WebP, lazy load, CDN, caching |\n| Confusing navigation | Menu mein bahut items | 5–7 items, hierarchy, active state |\n| Broken links / no alt | 404 aur accessibility fail | Link checker, meaningful alt text |\n\n**Extra issues:** missing search, no 404 page, auto-playing audio, horizontal scrolling, tiny tap targets (<44px).\n\n**Exam line:** har issue ke saath ek measurable solution likhein — isse answer "practical" lagta hai aur marks badhte hain.\n\n**Diagram:** Refer to the planning diagram (design issues bar).',
      },
    ],
  },

  // ==========================================================
  // 1.5 — Structure of an HTML Document
  // ==========================================================
  {
    id: 'wt-html-structure',
    number: '1.5',
    title: 'Structure of an HTML Document',
    subtitle: 'DOCTYPE, html, head aur body — har page ka skeleton',
    icon: 'file',
    accent: '#00d4ff',
    englishDefinition:
      'An HTML document has a fixed skeleton. It begins with the <!DOCTYPE html> declaration, which tells the browser to use standards mode (HTML5). The root element is <html>, which contains exactly two children: <head> and <body>. The <head> holds document metadata that is not rendered — <title> (browser tab and search result title), <meta> (charset, viewport, description, keywords), <link> (external CSS), <style> (internal CSS) and <script>. The <body> holds all visible content — headings, paragraphs, images, links, tables and forms. Elements are written as an opening tag, content and a closing tag, may carry attributes as name="value" pairs, and may be nested to form a tree that the browser parses into the DOM.',
    intro:
      'Har HTML page ka ek hi skeleton hota hai, aur exam mein "structure of HTML document with example" almost pakka aata hai. Chaar cheezein yaad rakhein: <!DOCTYPE html>, <html>, <head>, <body>. Iske baad tag, element, attribute aur nesting ka farak samajh lein — kyunki "tag aur element mein difference" bhi poocha jaata hai. Neeche poora document code aur uska live output dono diya hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Document ka Skeleton',
        body:
          '<!DOCTYPE html> sabse pehli line hoti hai — ye browser ko batati hai ki HTML5 use karna hai. Uske baad <html> root element aata hai jisme do hi bachche hote hain: <head> (information — title, meta, CSS links) aur <body> (jo user ko dikhta hai). HTML case-insensitive hai, par lowercase likhna standard hai.',
        body2:
          'Tag vs element: <p> sirf tag hai; <p>Hello</p> poora element hai (opening tag + content + closing tag). Attribute tag ke andar aata hai — <img src="a.jpg" alt="photo"> mein src aur alt attributes hain. Kuch elements empty hote hain (void elements) — unka closing tag nahi hota: <br>, <hr>, <img>, <input>, <meta>, <link>.',
        chips: ['DOCTYPE', 'html', 'head', 'body', 'tag', 'attribute', 'void element'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'HTML Document Tree',
        diagram: 'html-structure',
        caption:
          'Tree structure: DOCTYPE → html → head (title, meta, link, style, script) + body (h1, p, img, a, table/form). Exam mein ye tree draw karein, phir head aur body ka farak likhein — head ka content page par nahi dikhta.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Poora Document — Code se Output Tak',
        intro:
          'Ye ek complete valid HTML5 document hai. Left mein har line numbered hai; right mein wahi page browser mein kaisa dikhta hai. Dhyan dein: <title> tab ke naam mein jaata hai, page par nahi.',
        language: 'html',
        filename: 'index.html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="MCA notes on HTML">
  <title>HTML Structure — MCA Notes</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Structure of an HTML Document</h1>
  <p>Ye body ka content hai — yahi user ko dikhta hai.</p>
  <hr>
  <p>Head ke andar title aur meta the, wo page par nahi dikhte.</p>
</body>
</html>`,
        html: `<h1 style="font-size:24px;color:#111;margin:0 0 8px;font-family:Arial,sans-serif;">Structure of an HTML Document</h1>
<p style="margin:0 0 10px;">Ye body ka content hai — yahi user ko dikhta hai.</p>
<hr style="border:0;border-top:1px solid #ccc;margin:10px 0;">
<p style="margin:0;color:#444;">Head ke andar title aur meta the, wo page par nahi dikhte.</p>`,
        caption:
          'Output mein sirf body ka hissa dikhta hai. Browser ke tab par "HTML Structure — MCA Notes" likha hota (title), aur head ke meta tags search engine aur mobile scaling ke liye hain.',
        height: 180,
      },
      {
        type: 'code',
        kicker: 'Code',
        title: 'Head vs Body — Kya Kahan Jaata Hai',
        intro:
          'Ek hi document ke do hisse. Head mein sirf metadata (browser aur search engine ke liye), body mein wo sab jo screen par aata hai.',
        language: 'html',
        filename: 'head-vs-body.html',
        code: `<!-- HEAD: page par kuch nahi dikhta -->
<head>
  <meta charset="UTF-8">
  <title>Tab ka naam</title>
  <meta name="description" content="Search result mein ye line aati hai">
  <link rel="stylesheet" href="style.css">   <!-- external CSS -->
  <style> h1 { color: navy; } </style>       <!-- internal CSS -->
  <script src="app.js" defer></script>       <!-- JavaScript -->
</head>

<!-- BODY: jo screen par dikhta hai -->
<body>
  <h1>Visible heading</h1>
  <p>Visible paragraph</p>
  <img src="logo.png" alt="College logo">
</body>`,
        note:
          'Rule: <title> ek hi hona chahiye. <meta charset> sabse pehle rakhein. Scripts ko body ke end mein ya defer ke saath rakhein, taaki page pehle render ho.',
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Yaad Rakhne Wale Rules',
        points: [
          '<!DOCTYPE html> = HTML5 standards mode; iske bina browser quirks mode mein chala jaata hai.',
          '<html> root element hai — lang attribute accessibility aur SEO ke liye.',
          '<head> mein title, meta, link, style, script; <body> mein visible content.',
          'har element ki nesting properly band karein — <p><b>text</b></p> sahi, overlap galat.',
          'void elements (br, hr, img, input, meta, link) ka closing tag nahi hota.',
          'Indentation aur lowercase tags — readability aur standard practice.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'DOCTYPE → html → (head + body) — yahi fixed skeleton hai.',
          'head = metadata (title, meta, CSS, script), screen par nahi dikhta.',
          'body = visible content — headings, paragraphs, images, links, forms.',
          'Tag = markup ka naam; element = opening tag + content + closing tag.',
          'Attribute = tag ke andar name="value" (src, href, class, id).',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the structure of an HTML document with a suitable example and diagram.',
        answer:
          '**Structure:**\n\n```\n<!DOCTYPE html>\n<html>\n  <head> ... metadata ... </head>\n  <body> ... visible content ... </body>\n</html>\n```\n\n**1. <!DOCTYPE html>** — browser ko batata hai ki HTML5 document hai (standards mode).\n\n**2. <html>** — root element; lang attribute language batata hai.\n\n**3. <head>** — metadata:\n- <title> — tab aur search result ka title\n- <meta charset="UTF-8"> — character encoding\n- <meta name="viewport"> — mobile scaling\n- <link> — external CSS\n- <style> / <script> — internal CSS / JS\n\n**4. <body>** — visible content: headings, paragraphs, images, links, tables, forms.\n\n**Example:**\n\n```\n<!DOCTYPE html>\n<html lang="en">\n<head><title>My Page</title></head>\n<body><h1>Hello</h1><p>World</p></body>\n</html>\n```\n\n**Diagram:** tree form mein draw karein — DOCTYPE → html → head + body.\n\n**Note:** head ka content page par nahi dikhta, sirf browser aur search engine use karte hain.',
      },
      {
        question: 'Differentiate between a tag, an element and an attribute in HTML.',
        answer:
          '| Term | Definition | Example |\n|---|---|---|\n| Tag | Markup ka naam, angle brackets mein | `<p>`, `</p>` |\n| Element | Opening tag + content + closing tag | `<p>Hello</p>` |\n| Attribute | Tag ke andar extra information | `src="logo.png"` |\n\n**Example line:**\n`<img src="logo.png" alt="College logo" width="120">`\n- `<img>` = tag (void element)\n- `src`, `alt`, `width` = attributes\n- poora `img` element = element\n\n**Attribute types:**\n- **Global** — class, id, style, title (har element par)\n- **Element-specific** — href (a), src (img), type (input)\n\n**Types of elements:**\n- **Container / paired** — `<p>...</p>`, `<div>...</div>`\n- **Void / empty** — `<br>`, `<hr>`, `<img>`, `<input>`\n\n**Nesting rule:** elements properly band hone chahiye — `<p><b>hi</b></p>` sahi, `<p><b>hi</p></b>` galat.\n\n**Diagram:** Refer to the HTML structure tree.',
      },
      {
        question: 'What is the difference between the <head> and <body> sections of an HTML document?',
        answer:
          '**<head>:**\n- Metadata — page ke baare mein information\n- Screen par kuch nahi dikhta\n- Contains: title, meta, link, style, script, base\n- Search engines aur browser ise padhte hain\n- Ek hi baar document mein\n\n**<body>:**\n- Visible content — user jo dekhta hai\n- Contains: headings, paragraphs, images, links, lists, tables, forms, div/section\n- Ek hi baar document mein\n\n| Basis | head | body |\n|---|---|---|\n| Dikhata hai? | Nahi | Haan |\n| Content | Metadata | Visible content |\n| Kaam | SEO, encoding, CSS/JS link | Page structure aur content |\n| Example | `<title>Notes</title>` | `<h1>Notes</h1>` |\n\n**Exam line:** "head browser ko batata hai page kya hai, body user ko dikhati hai page mein kya hai."\n\n**Diagram:** Refer to the HTML structure diagram.',
      },
    ],
  },
];

export const webTechnologyUnits = [
  {
    id: 'unit-1',
    number: '1',
    name: 'HTML and XML',
    topics: [...unit1Topics, ...webTechnologyTopicsB, ...webTechnologyTopicsC, ...webTechnologyTopicsD],
  },
  {
    id: 'unit-2',
    number: '2',
    name: 'JavaScript',
    topics: [...webTechnologyTopicsE, ...webTechnologyTopicsF],
  },
  {
    id: 'unit-3',
    number: '3',
    name: 'PHP',
    topics: [...webTechnologyTopicsG, ...webTechnologyTopicsH],
  },
];
