// ============================================================
// WEB TECHNOLOGY — Unit III, topics 3.13 to 3.16 (PHP part 4)
//  3.13 File handling in PHP
//  3.14 Cookies and sessions
//  3.15 PHP forms: handling and validation
//  3.16 Introduction to CodeIgniter
//
// Output panels use section.php (server stdout) → PhpOutput.
// ============================================================

export const webTechnologyTopicsJ = [
  // ==========================================================
  // 3.13 — File handling
  // ==========================================================
  {
    id: 'wt-php-files',
    number: '3.13',
    title: 'File Handling in PHP',
    subtitle: 'fopen, fwrite, fread, fclose — aur upload ka poora flow',
    icon: 'folder',
    accent: '#8f9dc4',
    englishDefinition:
      'File handling in PHP means reading from and writing to files on the server through file handles: fopen($path, $mode) opens a file and returns a handle (or false on failure), fwrite()/fputs() writes a string, fread(), fgets() and fgetcsv() read data, feof() checks the end of the file, and fclose() releases the handle. The mode decides the behaviour — r (read only, must exist), r+ (read and write from the start), w (write only, truncates or creates), w+ (read/write, truncates), a (append, creates if missing), a+ (read/append) and x (create new, fails if it exists) — and a binary flag b can be added, as in "rb", which matters for images. PHP also provides one-line shortcuts: file_get_contents(), file_put_contents() (with FILE_APPEND), file() to read all lines into an array, file_exists(), filesize(), copy(), rename(), unlink() and mkdir(). Uploaded files arrive in the $_FILES superglobal with name, type, tmp_name, error and size fields and must be moved with move_uploaded_file() after checking the error code, size and extension; reading user-supplied paths directly is a directory-traversal risk. File permissions should be the minimum needed (never 777 on a shared server), and file_lock() or LOCK_EX should be used when several scripts write the same file.',
    intro:
      'Server par data permanently rakhna ho — log, CSV, report, uploaded photo — to file handling chahiye. Pattern hamesha ek hi hai: fopen() se file kholo (mode batayein ki padhna hai ya likhna), fwrite()/fgets() se kaam karo, fclose() se band karo. Mode ki galti sabse mehngi hoti hai: "w" purana poora data mita deta hai, "a" end mein jodta hai. Aur upload ke liye $_FILES + move_uploaded_file() ka flow yaad rakhein.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Handle aur mode',
        body:
          'fopen("notes.txt", "a") file khol kar handle deta hai (fail par false), fwrite($f, "text") likhta hai, fgets($f) ek line padhta hai, feof($f) end check karta hai, fclose($f) handle band karta hai. Mode: r (sirf padho), r+ (padho + likho), w (likho, purana mitao), w+ (dono, purana mitao), a (end mein jodo), a+ (padho + jodo), x (nayi file banao, pehle se ho to error).',
        body2:
          'Shortcuts: file_get_contents() poori file string mein, file_put_contents($f, $data, FILE_APPEND) ek line mein likhna, file() saari lines array mein, file_exists(), filesize(), unlink() delete, rename(), copy(), mkdir(). Upload: $_FILES["doc"]["tmp_name"] se move_uploaded_file() se permanent jagah par le jaayein — aur size, extension, MIME zaroor check karein.',
        chips: ['fopen()', 'fwrite()', 'fgets()', 'fclose()', 'modes r/w/a', 'file_get_contents()', '$_FILES', 'move_uploaded_file()'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'fopen → fwrite/fread → fclose',
        diagram: 'php-file-handling',
        caption:
          'Teen step ka flow, neeche mode table (yahi sabse zyada poochha jaata hai), shortcut functions aur upload ka raasta. "w" mode ka khatra laal strip mein likha hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Likhna, Jodna, Padhna — Shortcut Functions Se',
        intro:
          'Yahan file_put_contents() aur file() jaise shortcut use hue hain — chhoti file ke liye yahi sabse aasan hai. Output neeche wahi hai jo script chalne par aata hai: pehle 18 bytes likhe, phir 17 bytes append hue, isliye size 35 bytes aur lines 2.',
        language: 'php',
        filename: 'file.php',
        code: `<?php
$file = "notes.txt";

// 1. nayi file likhna (purana data mit jaata hai)
file_put_contents($file, "PHP file handling\\n");

// 2. append karna
file_put_contents($file, "Line 2 jodi gayi\\n", FILE_APPEND);

echo "Size: " . filesize($file) . " bytes\\n";

// 3. saari lines array mein
$lines = file($file, FILE_IGNORE_NEW_LINES);
echo "Lines: " . count($lines) . "\\n";
foreach ($lines as $i => $line) {
    echo ($i + 1) . ". " . $line . "\\n";
}

$content = file_get_contents($file);
echo "Chars: " . strlen($content) . "\\n";

echo file_exists($file) ? "File mili\\n" : "File nahi mili\\n";
unlink($file);
echo file_exists($file) ? "Abhi bhi hai\\n" : "Delete ho gayi\\n";`,
        php: `Size: 35 bytes
Lines: 2
1. PHP file handling
2. Line 2 jodi gayi
Chars: 35
File mili
Delete ho gayi`,
        label: 'php file.php',
        height: 240,
        caption:
          'file() ne saari lines array mein de di, isliye count() se lines ginni aasan hai. unlink() ke baad file_exists() false ho gaya — delete confirm.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'File Upload — Sahi Tareeka',
        intro:
          'Upload ka data $_FILES mein aata hai, file khud server ke temp folder mein hoti hai. move_uploaded_file() usse permanent jagah par le jaata hai — par pehle error, size aur extension check karna zaroori hai. Neeche valid PDF upload ka output dikhaya gaya hai.',
        language: 'php',
        filename: 'upload.php',
        code: `<form method="post" enctype="multipart/form-data">
  <input type="file" name="doc">
  <button>Upload</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $file = $_FILES["doc"] ?? null;

    if (!$file || $file["error"] !== UPLOAD_ERR_OK) {
        echo "Upload fail hua (error code: " . ($file["error"] ?? "-") . ")";
    } else {
        $maxSize = 2 * 1024 * 1024;            // 2 MB
        $allowed = ["pdf", "jpg", "png"];
        $ext = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

        if ($file["size"] > $maxSize) {
            echo "Error: file 2 MB se badi hai";
        } elseif (!in_array($ext, $allowed)) {
            echo "Error: sirf pdf, jpg, png allowed hai";
        } else {
            $dest = "uploads/" . uniqid() . "." . $ext;
            move_uploaded_file($file["tmp_name"], $dest);
            echo "Upload ho gaya: " . $dest;
        }
    }
}
?>`,
        php: `Upload ho gaya: uploads/68f2a1c9d3e4b.pdf`,
        label: 'php upload.php · 512 KB PDF',
        height: 140,
        caption:
          'File ka original naam use na karein (duplicate aur path attack ka khatra) — uniqid() se naya naam banaya. Extension, size aur MIME check ke bina upload kabhi na lein.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'File Modes',
        columns: ['r / r+', 'w / w+', 'a / a+'],
        columnColors: ['#00d4ff', '#ff7a90', '#00ff88'],
        rows: [
          { label: 'Padh sakte?', values: ['Haan', 'w+ mein haan', 'a+ mein haan'] },
          { label: 'Likh sakte?', values: ['r+ mein haan', 'Haan', 'Haan (end mein)'] },
          { label: 'Purana data', values: ['Safe', 'Delete ho jaata hai', 'Safe'] },
          { label: 'File na ho to', values: ['Fail', 'Nayi ban jaati hai', 'Nayi ban jaati hai'] },
          { label: 'Use', values: ['Config, CSV padhna', 'Report dobara likhna', 'Log, counter'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'File Handling Ke Points',
        points: [
          'fopen(path, mode) handle deta hai (fail par false), fclose() se band karein.',
          'fwrite()/fputs() likhta hai, fgets() ek line, fread() fixed bytes, feof() end check.',
          'Modes: r, r+, w, w+, a, a+, x — "w" purana data mita deta hai, "a" end mein jodta hai.',
          'Binary file ke liye "b" flag: "rb", "wb" (images/PDF).',
          'Shortcut: file_get_contents(), file_put_contents(..., FILE_APPEND), file(), filesize(), unlink().',
          'Upload: $_FILES["name"]["tmp_name"], size, error; move_uploaded_file() se save.',
          'Upload par error code, size limit, extension/MIME check — warna security hole.',
          'User ka diya path seedha use na karein (../ se directory traversal ho sakta hai).',
          'Permission minimum rakhein (644 file, 755 folder) — 777 shared server par khatarnaak.',
          'Ek hi file par kai scripts likhein to LOCK_EX / flock() use karein.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'fopen → fwrite/fgets → fclose.',
          'Mode se tay hota hai padhna/likhna aur purana data bachega ya nahi.',
          'Shortcut functions chhoti file ke liye.',
          'Upload = $_FILES + move_uploaded_file + validation.',
          'Permission aur path ki security zaroori.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain file handling in PHP. Explain fopen() modes with examples.',
        answer:
          '**File handling:** server par file ko padhna/likhna. Teen step: `fopen()` → `fwrite()`/`fgets()` → `fclose()`.\n\n```php\n$f = fopen("notes.txt", "a");   // handle\nfwrite($f, "Hello\\n");\nfclose($f);\n```\n\n**Modes:**\n| Mode | Matlab |\n|---|---|\n| `r` | read only, file exist karni chahiye |\n| `r+` | read + write, pointer shuru mein |\n| `w` | write only, purana data delete, nayi file ban jaati hai |\n| `w+` | read + write, purana data delete |\n| `a` | append — end mein jodta hai, purana bacha rehta hai |\n| `a+` | read + append |\n| `x` | nayi file banao, pehle se ho to fail |\n| `+b` | binary flag — `rb`, `wb` (images) |\n\n**Reading functions:** `fgets($f)` ek line, `fread($f, 1024)` fixed bytes, `feof($f)` end check, `fgetcsv($f)` CSV line.\n\n**Example — poori file padhna:**\n```php\n$f = fopen("notes.txt", "r");\nwhile (($line = fgets($f)) !== false) {\n    echo $line . "<br>";\n}\nfclose($f);\n```\n\n**Diagram:** Refer to the file handling diagram.\n\n**Exam line:** "fopen() file kholta hai, mode batata hai padhna hai ya likhna, fwrite/fgets kaam karte hain aur fclose() handle band karta hai."',
      },
      {
        question: 'Differentiate between file_get_contents() and fopen()/fread(). Also list the shortcut file functions.',
        answer:
          '| Basis | `file_get_contents()` | `fopen()` + `fread()` |\n|---|---|---|\n| Code | ek line | kai lines |\n| Memory | poori file RAM mein | chunk by chunk |\n| Badi file | slow / memory issue | theek |\n| Random access | nahi | `fseek()` se haan |\n| Likhna | `file_put_contents()` | `fwrite()` |\n| Kab | chhoti config/JSON | badi file, line-by-line |\n\n**Shortcut functions:**\n| Function | Kaam |\n|---|---|\n| `file_get_contents($f)` | poori file string mein |\n| `file_put_contents($f, $data)` | likho (FILE_APPEND se jodo) |\n| `file($f)` | saari lines array mein |\n| `file_exists($f)` | hai ya nahi |\n| `filesize($f)` | bytes |\n| `unlink($f)` | delete |\n| `rename()`, `copy()` | naam badlo, copy |\n| `mkdir()`, `rmdir()` | folder banao/hataao |\n\n```php\nfile_put_contents("log.txt", "start\\n", FILE_APPEND);\necho file_get_contents("log.txt");\necho filesize("log.txt");\n```\n\n**Exam line:** "Chhoti file ke liye file_get_contents() ek line ka solution hai; badi file ke liye fopen() + fgets() loop behtar hai."',
      },
      {
        question: 'How do you upload a file in PHP? Explain $_FILES and the security checks.',
        answer:
          '**Form (enctype zaroori):**\n```html\n<form method="post" enctype="multipart/form-data">\n  <input type="file" name="doc">\n  <button>Upload</button>\n</form>\n```\n\n**$_FILES structure:**\n| Key | Matlab |\n|---|---|\n| `name` | original file name |\n| `type` | browser ka bataya MIME (bharosa nahi) |\n| `tmp_name` | server ka temp path |\n| `size` | bytes |\n| `error` | 0 = OK, 1/2 = size, 4 = koi file nahi |\n\n**Handler:**\n```php\n$file = $_FILES["doc"];\n\nif ($file["error"] === UPLOAD_ERR_OK) {\n    $max   = 2 * 1024 * 1024;\n    $allow = ["pdf", "jpg", "png"];\n    $ext   = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));\n\n    if ($file["size"] > $max) {\n        echo "File badi hai";\n    } elseif (!in_array($ext, $allow)) {\n        echo "Extension allowed nahi";\n    } else {\n        $dest = "uploads/" . uniqid() . "." . $ext;\n        move_uploaded_file($file["tmp_name"], $dest);\n        echo "Saved: $dest";\n    }\n}\n```\n\n**Security checks:**\n1. `error` code check\n2. Size limit\n3. Extension **aur** MIME (`finfo_file()`)\n4. Naya random naam (`uniqid()`), original naam par bharosa nahi\n5. `uploads/` folder mein PHP execute na ho (`.htaccess`)\n6. Path traversal se bachav — user ka path seedha use na karein\n\n**Diagram:** Refer to the file handling diagram (upload flow).\n\n**Exam line:** "Upload $_FILES mein aata hai aur move_uploaded_file() se save hota hai — size, extension aur error check ke bina kabhi nahi."',
      },
    ],
  },

  // ==========================================================
  // 3.14 — Cookies and sessions
  // ==========================================================
  {
    id: 'wt-php-cookies-sessions',
    number: '3.14',
    title: 'Cookies & Sessions',
    subtitle: 'State kaise yaad rakhein — browser mein cookie, server par session',
    icon: 'lock',
    accent: '#00ff88',
    englishDefinition:
      'HTTP is stateless — every request arrives without memory of the previous one — so PHP keeps state with cookies and sessions. A cookie is a small name=value pair (about 4 KB) that the server sends with setcookie($name, $value, $expire, $path, $domain, $secure, $httponly) and the browser stores and returns with every request to that domain; it is read through $_COOKIE and deleted by setting the same name with an expiry in the past. A session stores the data on the server (in a file, by default under the session.save_path directory) and gives the browser only a random session id in the PHPSESSID cookie; session_start() creates or resumes the session, $_SESSION holds the values, and session_unset(), session_destroy() and a past-expiry cookie remove it. Sessions are safer for login state because the data never leaves the server and there is no 4 KB limit, whereas cookies are needed for things that must survive a browser restart such as a "remember me" token or a language preference. Both must start before any output (headers already sent error), both should be sent over HTTPS with HttpOnly and SameSite flags, and session ids must be regenerated after login (session_regenerate_id) to prevent session fixation.',
    intro:
      'HTTP har request ko akela maanta hai — pichhli request yaad nahi rehti. Isliye login yaad rakhne ke liye do tools hain: cookie (chhota data browser mein) aur session (data server par, browser ke paas sirf id). Cookie user dekh sakta hai aur 4 KB tak seemit hai; session server par rehta hai, isliye login ke liye yahi sahi hai. Dono ka ek hi rule hai: session_start() ya setcookie() kisi bhi output se pehle chalna chahiye.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Cookie aur session — data kahan',
        body:
          'Cookie: setcookie("user", "Riya", time() + 3600, "/"); — browser mein chhota text, agle request par $_COOKIE mein wapas. Session: session_start(); $_SESSION["user"] = "Riya"; — data server ki file mein, browser ke paas sirf PHPSESSID. Cookie ~4 KB, session ka koi limit nahi; cookie user dekh sakta hai, session nahi.',
        body2:
          'Cookie delete: wahi naam, purani expiry — setcookie("user", "", time() - 3600, "/"). Session khatam: session_unset() (variables clear) phir session_destroy() (session file delete), aur chaho to session cookie bhi hatao. Login ke baad session_regenerate_id(true) chalana chahiye (session fixation se bachav).',
        chips: ['setcookie()', '$_COOKIE', 'session_start()', '$_SESSION', 'PHPSESSID', 'session_destroy()', 'HttpOnly'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Cookie vs Session — Login se Logout tak',
        diagram: 'php-session',
        caption:
          'Upar do boxes: cookie ka data browser mein, session ka data server par. Neeche login → session_start → $_SESSION → agla request → logout ka poora cycle. Exam mein ye figure + comparison table = poore marks.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Cookie — Set, Read, Delete',
        intro:
          'Ek zaroori baat: is request mein set ki gayi cookie usi request mein $_COOKIE se nahi milti — browser use agle request par bhejta hai. Isliye pehli baar "Naya user" aata hai aur refresh ke baad "Welcome back".',
        language: 'php',
        filename: 'cookie.php',
        code: `<?php
// 1. set karna — 1 ghante ke liye
setcookie("user", "Riya", time() + 3600, "/");
setcookie("theme", "dark", time() + 30 * 24 * 3600, "/");

// 2. padhna
if (isset($_COOKIE["user"])) {
    echo "Welcome back, " . htmlspecialchars($_COOKIE["user"]) . "\\n";
} else {
    echo "Naya user\\n";
}

// 3. delete — purani expiry ke saath dobara set
setcookie("theme", "", time() - 3600, "/");`,
        php: `1st request  → Naya user
2nd request  → Welcome back, Riya`,
        label: 'php cookie.php',
        height: 140,
        caption:
          'Pehli baar cookie set hui par usi request mein $_COOKIE khaali tha. Page refresh karne par browser ne cookie bheji, tab "Welcome back, Riya" mila — yahi cookie ka request-response behaviour hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Session — Login ka Data Server par',
        intro:
          'session_start() sabse pehle chalta hai. Iske baad $_SESSION ek normal array ki tarah use hota hai. session_id() dikhata hai ki browser ke paas sirf ek random id jaati hai — data nahi.',
        language: 'php',
        filename: 'session.php',
        code: `<?php
session_start();

// login successful hone ke baad
$_SESSION["user"]  = "Riya";
$_SESSION["role"]  = "admin";
$_SESSION["login"] = time();

echo "Session id: " . session_id() . "\\n";
echo "User: " . $_SESSION["user"] . "\\n";
echo "Role: " . $_SESSION["role"] . "\\n";
echo "Logged in at: " . date("H:i:s", $_SESSION["login"]) . "\\n";

// logout
session_unset();       // variables clear
session_destroy();     // session file delete

echo isset($_SESSION["user"]) ? "Abhi bhi logged in\\n" : "Logout ho gaya\\n";`,
        php: `Session id: 7f3c9a1e2b4d5f6a7b8c9d0e1f2a3b4c
User: Riya
Role: admin
Logged in at: 14:07:42
Logout ho gaya`,
        label: 'php session.php',
        height: 180,
        caption:
          'Session id random hoti hai — is example mein 32 character hex. Browser ke paas sirf yahi id hoti hai; "Riya" aur "admin" server ki file mein rehte hain, isliye user unhe dekh ya badal nahi sakta.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Cookie vs Session',
        columns: ['Cookie', 'Session'],
        columnColors: ['#ff8800', '#00ff88'],
        rows: [
          { label: 'Data kahan', values: ['Browser mein (user ke paas)', 'Server par (file/DB)'] },
          { label: 'Browser ko', values: ['Poora data', 'Sirf session id (PHPSESSID)'] },
          { label: 'Size limit', values: ['~4 KB per cookie', 'Koi practical limit nahi'] },
          { label: 'Security', values: ['Kam — user padh/badal sakta hai', 'Zyada — data server par'] },
          { label: 'Expiry', values: ['Aap set karte hain (din/mahine)', 'Browser band / timeout par khatam'] },
          { label: 'PHP functions', values: ['setcookie(), $_COOKIE', 'session_start(), $_SESSION'] },
          { label: 'Use', values: ['"Remember me", theme, language', 'Login, cart, user role'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Cookie / Session Ke Points',
        points: [
          'HTTP stateless hai — cookie aur session state yaad rakhte hain.',
          'setcookie(name, value, expire, path, domain, secure, httponly) — sirf header se pehle call ho sakta hai.',
          '$_COOKIE se padhein; delete ke liye wahi cookie purani expiry ke saath set karein.',
          'session_start() session banata ya resume karta hai; $_SESSION array data rakhta hai.',
          'session_unset() variables clear karta hai, session_destroy() session khatam karta hai.',
          'Browser ke paas sirf PHPSESSID hota hai — data server par rehta hai, isliye zyada safe.',
          'session_regenerate_id(true) login ke baad — session fixation attack se bachav.',
          'Dono mein "headers already sent" error aata hai agar HTML pehle print ho jaye.',
          'HTTPS + HttpOnly + SameSite flags se cookie theft kam hota hai.',
          'Password kabhi cookie/session mein plain store na karein — sirf user id ya hash.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Cookie = data browser mein (~4 KB), session = data server par.',
          'setcookie / $_COOKIE vs session_start / $_SESSION.',
          'Delete: cookie purani expiry, session session_destroy().',
          'Login ke liye session, "remember me" ke liye cookie.',
          'Sabse pehle session_start(), output se pehle.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What are cookies? How do you create, read and delete a cookie in PHP?',
        answer:
          '**Cookie:** chhota name=value text (~4 KB) jo server browser ko bhejta hai; browser use domain ke hisaab se store karta hai aur har request ke saath wapas bhejta hai. Isse HTTP stateless hone par bhi "yaad" rakhi jaati hai.\n\n**Create:**\n```php\nsetcookie("user", "Riya", time() + 3600, "/");\n```\nParameters: name, value, expiry (timestamp), path, domain, secure, httponly.\n\n**Read:**\n```php\nif (isset($_COOKIE["user"])) {\n    echo "Welcome " . htmlspecialchars($_COOKIE["user"]);\n}\n```\n\n**Delete:** purani expiry ke saath dobara set karein:\n```php\nsetcookie("user", "", time() - 3600, "/");\n```\n\n**Update:** same naam se nayi value set kar dein.\n\n**Dhyan:**\n- `setcookie()` HTML/output se **pehle** chalna chahiye\n- Set ki gayi cookie usi request mein `$_COOKIE` mein nahi milti\n- User data ko escape karein (`htmlspecialchars`)\n\n**Diagram:** Refer to the cookie vs session diagram.\n\n**Exam line:** "Cookie setcookie() se banti hai, $_COOKIE se padhi jaati hai aur purani expiry ke saath dobara set karke delete hoti hai."',
      },
      {
        question: 'Differentiate between cookies and sessions. Which one would you use for a login system and why?',
        answer:
          '| Basis | Cookie | Session |\n|---|---|---|\n| Data kahan | browser | server |\n| Browser ko | poora data | sirf session id |\n| Size | ~4 KB | no limit |\n| Security | kam (user dekh sakta) | zyada |\n| Expiry | aap set karte hain | browser close / timeout |\n| Functions | `setcookie()`, `$_COOKIE` | `session_start()`, `$_SESSION` |\n\n**Login ke liye session** — kyunki:\n1. **Data server par** rehta hai — user role/id badal nahi sakta\n2. **Size limit nahi** — poora user record rakh sakte hain\n3. Browser ke paas sirf random id hoti hai, jo chori ho to bhi data safe\n4. `session_destroy()` se turant logout, sab devices par control\n\n**Cookie kahan:**\n- "Remember me" token (hash, password nahi)\n- Theme / language preference\n- Guest cart id, tracking\n\n**Best practice:** session + ek cookie jo sirf **remember-me token** rakhe. HTTPS, `HttpOnly`, `SameSite`, `session_regenerate_id(true)` login ke baad.\n\n**Diagram:** Refer to the cookie vs session diagram.\n\n**Exam line:** "Cookie browser mein data rakhti hai, session server par — login ke liye session safe hai kyunki browser ke paas sirf id jaati hai."',
      },
      {
        question: 'Explain session handling in PHP with the functions used for login and logout.',
        answer:
          '**Session flow:** `session_start()` → `$_SESSION` mein data → agle requests par wahi data → logout par destroy.\n\n**1. Start:**\n```php\nsession_start();     // nayi session ya purani resume\n```\n\n**2. Data store (login ke baad):**\n```php\n$_SESSION["user"] = $user;\n$_SESSION["role"] = "admin";\nsession_regenerate_id(true);   // fixation se bachav\n```\n\n**3. Read (protected page):**\n```php\nsession_start();\nif (!isset($_SESSION["user"])) {\n    header("Location: login.php");\n    exit;\n}\necho "Hello " . htmlspecialchars($_SESSION["user"]);\n```\n\n**4. Logout:**\n```php\nsession_unset();      // $_SESSION khaali\nsession_destroy();    // server file delete\nsetcookie(session_name(), "", time() - 3600, "/");  // browser ka id cookie bhi\n```\n\n| Function | Kaam |\n|---|---|\n| `session_start()` | session shuru/resume |\n| `$_SESSION` | data store/read |\n| `session_id()` | current id |\n| `session_unset()` | variables clear |\n| `session_destroy()` | session khatam |\n| `session_regenerate_id()` | nayi id (security) |\n\n**Dhyan:** `session_start()` output se pehle; session data server par `session.save_path` ki file mein rehta hai; timeout `session.gc_maxlifetime` se.\n\n**Diagram:** Refer to the cookie vs session diagram.\n\n**Exam line:** "session_start() session banata hai, $_SESSION data rakhta hai, aur logout par session_unset() + session_destroy() chalate hain."',
      },
    ],
  },

  // ==========================================================
  // 3.15 — PHP forms: handling and validation
  // ==========================================================
  {
    id: 'wt-php-forms',
    number: '3.15',
    title: 'PHP Forms: Handling & Validation',
    subtitle: 'Har field check karein, error dikhayein, data na khoye (sticky form)',
    icon: 'list',
    accent: '#2f6fff',
    englishDefinition:
      'Form handling in PHP is the complete cycle of receiving an HTML form submission and acting on it: the form declares method="post" (or get) and action="handler.php", each control\'s name attribute becomes a key in $_POST / $_GET, the handler confirms the request with $_SERVER["REQUEST_METHOD"] === "POST", reads the values, validates them, and either shows errors or processes the data. Validation has two layers — client side (HTML5 required/type/pattern and JavaScript, for instant feedback) and server side (PHP, the only layer that can be trusted, because a browser can be bypassed). The standard checks are presence (isset, empty), sanitising (trim, stripslashes), format (filter_var with FILTER_VALIDATE_EMAIL / FILTER_VALIDATE_INT, preg_match for phone or pincode), length (strlen, mb_strlen), range (min/max), agreement (isset($_POST["terms"])), and file rules for uploads; errors are collected in an array and redisplayed next to the fields. A sticky form re-fills each input with the submitted value so the user does not retype everything, escaping every value with htmlspecialchars to avoid XSS, and after success the handler usually redirects (header("Location: ...") with exit) to prevent duplicate submission on refresh (POST/Redirect/GET). Array fields such as checkboxes named skills[] arrive as arrays and must be counted and escaped individually.',
    intro:
      'Form banana do hisson mein banta hai: HTML jo data bhejta hai, aur PHP jo use sambhalta hai. Handling ka matlab $_POST padhna, validation ka matlab har field ko check karna, aur UX ka matlab galti par data wapas form mein dikhana (sticky form). Yaad rakhein: JavaScript wali validation sirf user ki suvidha ke liye hai — asli validation PHP mein hoti hai, kyunki browser bypass ho sakta hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Handling aur validation ke steps',
        body:
          'Steps: (1) form method + action, (2) $_SERVER["REQUEST_METHOD"] === "POST" se confirm, (3) trim() se saaf karo, (4) validate — empty/isset, filter_var, preg_match, strlen, (5) errors ek array mein jama karo, (6) error ho to form dobara dikhao (values bhare hue), warna data save karo aur redirect kar do.',
        body2:
          'Sticky form: value="<?= htmlspecialchars($_POST["name"] ?? "") ?>" — user ko dobara likhna nahi padta. Checkbox array (name="skills[]") $_POST["skills"] mein array bankar aata hai, isliye count() aur implode() use karein. Success ke baad header("Location: thanks.php"); exit; — refresh par dobara submit nahi hoga (POST/Redirect/GET).',
        chips: ['method="post"', '$_POST', 'trim()', 'filter_var()', 'preg_match()', '$errors[]', 'sticky form', 'htmlspecialchars()'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Submit se Database tak — Validation Pipeline',
        diagram: 'php-form-validation',
        caption:
          'Panch step: form → $_POST → validate → error? → save. Neeche rules ki table (required, email, number, length, pattern, safe output), sticky form ka code aur client vs server ka farak.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Registration Form — Validation Ke Saath',
        intro:
          'Yahan errors ek array mein jama hote hain aur list bankar dikhte hain. Neeche wala output us submission ka hai jisme naam sahi tha par email "riya@" aur phone "98765" (adhoora) bheja gaya.',
        language: 'php',
        filename: 'register.php',
        code: `<?php
$errors = [];
$name = $email = $phone = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name  = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $phone = trim($_POST["phone"] ?? "");

    if ($name === "") {
        $errors[] = "Naam zaroori hai";
    } elseif (strlen($name) < 3) {
        $errors[] = "Naam kam se kam 3 characters ka ho";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Email galat hai";
    }

    if (!preg_match("/^[6-9][0-9]{9}$/", $phone)) {
        $errors[] = "10 digit ka mobile number daalein";
    }

    if (!$errors) {
        echo "Registration successful: " . htmlspecialchars($name);
    } else {
        echo "<ul>\\n";
        foreach ($errors as $e) {
            echo "  <li>" . htmlspecialchars($e) . "</li>\\n";
        }
        echo "</ul>";
    }
}
?>`,
        php: `<ul>
  <li>Email galat hai</li>
  <li>10 digit ka mobile number daalein</li>
</ul>`,
        label: 'php register.php · POST name=Riya, email=riya@, phone=98765',
        height: 160,
        caption:
          'Naam pass ho gaya (Riya), isliye sirf do errors aaye. htmlspecialchars() se error message bhi escape kiya — kabhi bhi user ka text bina escape print na karein.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Sticky Form aur Checkbox Array',
        intro:
          'Sticky form galti par bhi bhara hua rehta hai. Checkbox ka naam skills[] hai, isliye PHP mein wo array bankar aata hai — count() se ginti, implode() se list. Neeche output un do skills ke liye hai jo user ne chuni.',
        language: 'php',
        filename: 'sticky.php',
        code: `<?php
$name   = htmlspecialchars($_POST["name"] ?? "", ENT_QUOTES);
$skills = $_POST["skills"] ?? [];
$course = $_POST["course"] ?? "nahi chuna";
?>

<form method="post">
  <input name="name" value="<?= $name ?>">

  <label><input type="checkbox" name="skills[]" value="PHP"> PHP</label>
  <label><input type="checkbox" name="skills[]" value="MySQL"> MySQL</label>
  <label><input type="checkbox" name="skills[]" value="JS"> JS</label>

  <select name="course">
    <option>MCA</option>
    <option>MSc</option>
  </select>

  <button>Submit</button>
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (empty($skills)) {
        echo "Kam se kam ek skill chunein";
    } else {
        echo "Skills: " . implode(", ", array_map("htmlspecialchars", $skills));
        echo " (" . count($skills) . " chuni gayi)\\n";
    }
    echo "Course: " . htmlspecialchars($course) . "\\n";
}
?>`,
        php: `Skills: PHP, MySQL (2 chuni gayi)
Course: MCA`,
        label: 'php sticky.php · POST name=Riya, skills[]=PHP, MySQL',
        height: 150,
        caption:
          'array_map("htmlspecialchars", $skills) har value ko alag-alag escape karta hai — array ke saath ye zaroori hai, kyunki htmlspecialchars() seedha array nahi leta.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Client-side vs Server-side Validation',
        columns: ['Client-side (JS/HTML5)', 'Server-side (PHP)'],
        columnColors: ['#ff8800', '#00ff88'],
        rows: [
          { label: 'Chalta kahan', values: ['Browser mein', 'Server par'] },
          { label: 'Speed', values: ['Turant (page reload nahi)', 'Request bhejni padti hai'] },
          { label: 'Bypass ho sakta?', values: ['Haan — JS band, DevTools, curl', 'Nahi'] },
          { label: 'Kya check karein', values: ['required, type, pattern, JS', 'filter_var, preg_match, strlen'] },
          { label: 'Security', values: ['Nahi — sirf UX', 'Haan — asli validation'] },
          { label: 'Dono ka role', values: ['User ko jaldi batao', 'Data ko bachao'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Forms Ke Points',
        points: [
          'form ka method (GET/POST) aur action (handler file) — name attribute hi array ki key banata hai.',
          'Handler pehle $_SERVER["REQUEST_METHOD"] check karta hai, phir data padhta hai.',
          'Sanitise: trim(), stripslashes(); validate: empty/isset, filter_var, preg_match, strlen.',
          'Errors ko array ($errors[]) mein jama karein aur field ke paas dikhayein.',
          'Sticky form: value="<?= htmlspecialchars($old) ?>" — data na khoye.',
          'Output se pehle htmlspecialchars() — XSS se bachav.',
          'Success ke baad header("Location: ..."); exit; — double submit na ho (POST/Redirect/GET).',
          'Checkbox ka naam skills[] ho to $_POST["skills"] array aata hai; count()/implode() use karein.',
          'File upload ke liye enctype="multipart/form-data" zaroori hai.',
          'Client-side validation sirf UX hai; asli validation server par hoti hai.',
          'CSRF se bachav ke liye hidden token (CSRF token) form mein rakhein.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Form handling = $_POST padhna + request method check.',
          'Validation = presence, format, length, range — server par.',
          'Errors array + sticky form se accha UX.',
          'Output escape karein; success par redirect.',
          'Checkbox array aur file upload ke apne rules hain.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain form handling in PHP with a complete example of a form and its handler.',
        answer:
          '**Form (HTML):**\n```html\n<form action="register.php" method="post">\n  Name:  <input type="text" name="name">\n  Email: <input type="email" name="email">\n  <button type="submit">Register</button>\n</form>\n```\n\n**Handler (PHP):**\n```php\n<?php\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $name  = trim($_POST["name"] ?? "");\n    $email = trim($_POST["email"] ?? "");\n\n    if ($name === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {\n        echo "Data galat hai";\n    } else {\n        echo "Welcome " . htmlspecialchars($name, ENT_QUOTES);\n    }\n}\n?>\n```\n\n**Steps:**\n1. Form submit → browser request bhejta hai\n2. `name` attributes `$_POST` ki keys banti hain\n3. Handler method check karta hai\n4. `trim()` se saaf, `filter_var()` se validate\n5. `htmlspecialchars()` se safe output\n6. Success par DB save + redirect\n\n| Element | $_POST key |\n|---|---|\n| text | `$_POST["name"]` |\n| email | `$_POST["email"]` |\n| checkbox | `$_POST["skills"]` (array) |\n| select | `$_POST["course"]` |\n\n**Diagram:** Refer to the form validation diagram.\n\n**Exam line:** "Form ka data name attribute ke hisaab se $_POST mein aata hai; handler use validate karke save ya error dikhata hai."',
      },
      {
        question: 'What is form validation? Explain client-side and server-side validation with examples.',
        answer:
          '**Form validation** = submitted data ko check karna ki wo sahi, poora aur safe hai — galat data database mein na jaaye.\n\n**1. Client-side** (HTML5 + JavaScript) — browser mein:\n```html\n<input type="email" name="email" required>\n<input type="text" name="phone" pattern="[6-9][0-9]{9}" required>\n```\nFayda: turant feedback, server par load kam. Nuksan: **bypass ho sakta hai** (JS off, DevTools, curl).\n\n**2. Server-side** (PHP) — asli validation:\n```php\n$errors = [];\n$name  = trim($_POST["name"] ?? "");\n$email = trim($_POST["email"] ?? "");\n$age   = trim($_POST["age"] ?? "");\n\nif ($name === "")                              $errors[] = "Name required";\nif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Email invalid";\nif (!filter_var($age, FILTER_VALIDATE_INT))     $errors[] = "Age number ho";\nif (strlen($name) < 3)                          $errors[] = "Name chhota hai";\nif (!preg_match("/^[6-9][0-9]{9}$/", $phone))  $errors[] = "Phone invalid";\n```\n\n**Validation ke types:**\n| Type | Example |\n|---|---|\n| Required | `empty($name)` |\n| Format | `filter_var(...EMAIL)` |\n| Length | `strlen($name) >= 3` |\n| Range | `$age >= 18` |\n| Pattern | `preg_match()` |\n| Agreement | `isset($_POST["terms"])` |\n\n**Rule:** dono lagayein — client-side UX ke liye, server-side security ke liye.\n\n**Diagram:** Refer to the form validation diagram.\n\n**Exam line:** "Client-side validation sirf suvidha ke liye hoti hai; asli validation server par PHP mein hoti hai kyunki browser ko bypass kiya ja sakta hai."',
      },
      {
        question: 'What is a sticky form? Explain it with error handling, escaping and the POST/Redirect/GET pattern.',
        answer:
          '**Sticky form:** galti hone par bhi form ke fields **bhare hue** rehte hain, user ko sab dobara nahi likhna padta.\n\n```php\n<?php\n$name = htmlspecialchars($_POST["name"] ?? "", ENT_QUOTES);\n$err  = [];\n\nif ($_SERVER["REQUEST_METHOD"] === "POST" && trim($name) === "") {\n    $err["name"] = "Naam zaroori hai";\n}\n?>\n<form method="post">\n  <input name="name" value="<?= $name ?>">\n  <span class="err"><?= $err["name"] ?? "" ?></span>\n  <button>Submit</button>\n</form>\n```\n\n**Error handling ke rules:**\n1. Errors ek array mein jama karein (`$errors[]` ya `$errors["field"]`)\n2. Error field ke **paas** dikhayein, upar list bhi kar sakte hain\n3. Error message bhi `htmlspecialchars()` se escape karein\n4. Pehla error aane par hi ruk jayein to baaki errors user ko nahi dikhenge — sab check karein\n\n**Escaping kyon:** `value="<?= $name ?>"` mein agar user `"><script>` bheje to attribute toot jaayega — `htmlspecialchars($name, ENT_QUOTES)` usse text bana deta hai.\n\n**POST/Redirect/GET:**\n```php\n// success ke baad\ndb_insert($data);\nheader("Location: thanks.php");\nexit;\n```\nIsse refresh par form dobara submit nahi hota (duplicate entry se bachav).\n\n| Pattern | Bina redirect | Redirect ke saath |\n|---|---|---|\n| Refresh | dobara POST | sirf GET |\n| Duplicate entry | ho sakti hai | nahi |\n\n**Diagram:** Refer to the form validation diagram (sticky form box).\n\n**Exam line:** "Sticky form submit ki hui values wapas dikhata hai, errors field ke paas aate hain, aur success ke baad redirect karne se double submit nahi hota."',
      },
    ],
  },

  // ==========================================================
  // 3.16 — Introduction to CodeIgniter
  // ==========================================================
  {
    id: 'wt-codeigniter',
    number: '3.16',
    title: 'Introduction to CodeIgniter',
    subtitle: 'MVC framework — Model, View, Controller aur CodeIgniter 4',
    icon: 'layers',
    accent: '#ffb86c',
    englishDefinition:
      'CodeIgniter is a free, open-source PHP web application framework that implements the Model-View-Controller (MVC) pattern: the Model talks to the database, the View renders HTML, and the Controller receives the request, calls the model and passes data to the view, so business logic, data access and presentation stay separate. Every request enters through a single front controller (public/index.php), is matched by the Router in app/Config/Routes.php to a controller method, and the controller returns a view (or JSON) as the response. CodeIgniter 4 — the current version — is installed with Composer (composer create-project codeigniter4/appstarter project), requires PHP 8.1+, and ships a query builder and Active Record style models, form and URL helpers, CSRF and XSS filtering, validation library, sessions, file uploads, caching, database migrations and seeders, and an environment-file (.env) based configuration. It is known for being lightweight and fast (small footprint, near-zero configuration compared with Laravel), while Laravel offers a bigger ecosystem (Eloquent, Blade, Artisan). The main folders are app (Controllers, Models, Views, Config, Helpers, Filters), public (the web root), writable (logs and cache) and vendor (Composer packages).',
    intro:
      'Framework ka fayda: aapko har project mein routing, database, validation, session dobara nahi likhna padta — sab pehle se bana milta hai aur ek tay structure mein hota hai. CodeIgniter usi ka halka (lightweight) version hai: MVC pattern par chalta hai, installation Composer se hota hai, aur seekhna Laravel se aasan hai. Exam ke liye MVC ka flow (request → router → controller → model → view) aur folder structure yaad rakhein.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Framework aur MVC',
        body:
          'Framework = ready-made structure + tools jisse app tez banti hai. MVC mein Model database dekhta hai, View HTML dikhata hai, aur Controller dono ke beech manager hota hai. CodeIgniter (CI4) mein har request public/index.php se aati hai, Router usse controller ke method se jodta hai, controller model se data laata hai, aur view ko return karta hai.',
        body2:
          'Install: composer create-project codeigniter4/appstarter project — PHP 8.1+ chahiye. Folders: app/Controllers, app/Models, app/Views, app/Config/Routes.php, app/Config/Database.php, public/ (web root), writable/ (logs, cache), vendor/. Features: query builder, validation, CSRF/XSS filter, sessions, file upload, migrations, seeding, .env config. Comparison: CI halka aur tez, Laravel bada ecosystem (Eloquent, Blade, Artisan).',
        chips: ['CodeIgniter 4', 'MVC', 'Router', 'Controller', 'Model', 'View', 'Composer', 'lightweight'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Request se Response tak — MVC Flow',
        diagram: 'codeigniter-mvc',
        caption:
          'Browser → index.php → Router → Controller → Model (database) → View → HTML. Neeche folder structure aur install command. Exam mein yahi diagram + ek controller ka code likhna chahiye.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Controller aur Route — Ek Poora Example',
        intro:
          'URL /students router se Students controller ke index() method par jaata hai. Controller model se data laata hai aur view ko de deta hai. Neeche wahi HTML dikhaya gaya hai jo browser ko milta hai.',
        language: 'php',
        filename: 'app/Controllers/Students.php + Routes.php',
        code: `<?php
// app/Controllers/Students.php
namespace App\\Controllers;

use App\\Models\\StudentModel;

class Students extends BaseController
{
    public function index()
    {
        $model = new StudentModel();

        $data = [
            "title"    => "Student List",
            "students" => $model->findAll(),
        ];

        return view("students/index", $data);
    }

    public function show($id)
    {
        $model = new StudentModel();

        $data["student"] = $model->find($id);

        return view("students/show", $data);
    }
}

// app/Config/Routes.php
$routes->get("students", "Students::index");
$routes->get("students/(:num)", "Students::show/$1");`,
        php: `<h1>Student List</h1>
<ul>
  <li>Riya — 82</li>
  <li>Aman — 92</li>
</ul>`,
        label: 'php GET /students · response',
        height: 180,
        caption:
          'Controller ne koi HTML nahi likha — usne sirf data model se laakar view ko diya. Yahi MVC ka separation of concerns hai: logic, data aur presentation alag.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Model aur View — Database se HTML tak',
        intro:
          'Model mein sirf table ka naam aur allowed fields batate hain — query khud framework likhta hai. View mein sirf dikhane ka kaam, aur esc() se output safe. Neeche view ka output.',
        language: 'php',
        filename: 'app/Models/StudentModel.php + app/Views/students/index.php',
        code: `<?php
// app/Models/StudentModel.php
namespace App\\Models;

use CodeIgniter\\Model;

class StudentModel extends Model
{
    protected $table         = "students";
    protected $primaryKey    = "id";
    protected $allowedFields = ["name", "marks"];
    protected $returnType    = "array";
}

// app/Views/students/index.php
<h1><?= esc($title) ?></h1>
<ul>
<?php foreach ($students as $s): ?>
  <li><?= esc($s["name"]) ?> — <?= esc($s["marks"]) ?></li>
<?php endforeach; ?>
</ul>`,
        php: `<h1>Student List</h1>
<ul>
  <li>Riya — 82</li>
  <li>Aman — 92</li>
</ul>`,
        label: 'php view output',
        height: 180,
        caption:
          'esc() CodeIgniter ka shortcut hai htmlspecialchars() ka — view mein har output par lagayein. allowedFields se mass-assignment attack rukta hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'CodeIgniter vs Core PHP vs Laravel',
        columns: ['Core PHP', 'CodeIgniter 4', 'Laravel'],
        columnColors: ['#8f9dc4', '#ffb86c', '#ff7ab2'],
        rows: [
          { label: 'Structure', values: ['Aap khud banayein', 'MVC ready', 'MVC + zyada layers'] },
          { label: 'Routing', values: ['Har file alag (.php)', 'Routes.php', 'routes/web.php'] },
          { label: 'Database', values: ['mysqli/PDO khud', 'Model + query builder', 'Eloquent ORM'] },
          { label: 'Seekhna', values: ['Aasan (basic)', 'Madhyam', 'Thoda mushkil'] },
          { label: 'Size / speed', values: ['Sabse halka', 'Halka aur tez', 'Bada, feature-rich'] },
          { label: 'Kab', values: ['Chhota project, college', 'Medium project, cepat jadi', 'Bada product, team'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'CodeIgniter Ke Points',
        points: [
          'CodeIgniter = open-source PHP MVC framework, halka aur tez; current version 4 (PHP 8.1+).',
          'MVC: Model (data/DB), View (HTML), Controller (request handle + logic ka manager).',
          'Request flow: browser → public/index.php → Router → Controller → Model → View → response.',
          'Routing app/Config/Routes.php mein: $routes->get("students", "Students::index").',
          'Controller BaseController ko extend karta hai; view("folder/file", $data) se view return hota hai.',
          'Model CodeIgniter\\Model ko extend karta hai — $table, $primaryKey, $allowedFields.',
          'View mein esc() se output escape; business logic view mein nahi likhni.',
          'Install: composer create-project codeigniter4/appstarter project.',
          'Features: validation, CSRF/XSS filter, sessions, file upload, migrations, seeders, .env config.',
          'Folders: app/ (Controllers, Models, Views, Config), public/ (web root), writable/, vendor/.',
          'Fayde: tez development, ek jaisa structure, testing aasan; nuksan: framework seekhna padta hai.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'CodeIgniter = halka PHP MVC framework, version 4.',
          'Model data, View dikhana, Controller manager.',
          'Flow: index.php → Router → Controller → Model → View.',
          'Routing Routes.php mein, view() se HTML return.',
          'esc() har output par, allowedFields model mein.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is CodeIgniter? Explain its features and advantages over core PHP.',
        answer:
          '**CodeIgniter:** free, open-source **PHP MVC framework** jo web application banane ke liye ready-made structure aur tools deta hai. Current version **CodeIgniter 4** (PHP 8.1+) Composer se install hota hai.\n\n**Features:**\n1. **MVC architecture** — code organised rehta hai\n2. **Routing** — clean URLs (`/students/5`)\n3. **Model + query builder** — database kaam aasan\n4. **Validation library** — form validation built-in\n5. **Security** — CSRF, XSS filtering, escaping helpers\n6. **Sessions, cookies, file upload, caching**\n7. **Migrations & seeders** — database version control\n8. **.env configuration**, logging, error handling\n9. **Lightweight** — chhota footprint, tez\n\n**Core PHP se comparison:**\n| Basis | Core PHP | CodeIgniter |\n|---|---|---|\n| Structure | khud banayein | MVC ready |\n| Routing | har file alag | Routes.php |\n| Security | sab khud | filters + helpers |\n| Speed of dev | slow | fast |\n| Team work | mushkil | aasan |\n\n**Install:** `composer create-project codeigniter4/appstarter myapp`\n\n**Diagram:** Refer to the CodeIgniter MVC diagram.\n\n**Exam line:** "CodeIgniter ek halka open-source PHP MVC framework hai jo routing, database, validation aur security ready-made deta hai."',
      },
      {
        question: 'Explain the MVC architecture with the request flow in CodeIgniter.',
        answer:
          '**MVC** = Model + View + Controller — kaam ka baantwara.\n\n| Part | Kaam | File |\n|---|---|---|\n| **Model** | database, data logic | `app/Models/` |\n| **View** | HTML dikhana | `app/Views/` |\n| **Controller** | request handle, dono ko jodna | `app/Controllers/` |\n\n**Request flow:**\n1. Browser `site.com/students` maangta hai\n2. `public/index.php` (front controller) request leta hai\n3. **Router** `Routes.php` dekh kar `Students::index` chunta hai\n4. **Controller** chalta hai, **Model** se data laata hai\n5. Controller data **View** ko deta hai\n6. View ka HTML response browser ko jaata hai\n\n```\nBrowser → index.php → Router → Controller → Model → DB\n                                   ↓\n                                 View → HTML → Browser\n```\n\n**Example:**\n```php\n// Routes.php\n$routes->get("students", "Students::index");\n\n// Students.php\npublic function index()\n{\n    $model = new StudentModel();\n    $data["students"] = $model->findAll();\n    return view("students/index", $data);\n}\n```\n\n**Fayde:** separation of concerns, code reuse, testing aasan, team mein parallel kaam.\n\n**Diagram:** Refer to the CodeIgniter MVC diagram.\n\n**Exam line:** "MVC mein Model data dekhta hai, View dikhata hai aur Controller request ko dono ke beech sambhalta hai."',
      },
      {
        question: 'Write the folder structure of a CodeIgniter 4 project and explain the role of the main folders.',
        answer:
          '```\nproject/\n├── app/\n│   ├── Controllers/     # controller classes\n│   ├── Models/          # database models\n│   ├── Views/           # HTML templates\n│   ├── Config/          # Routes.php, Database.php, App.php\n│   ├── Helpers/         # custom helper functions\n│   ├── Filters/         # before/after request filters\n│   └── Database/        # migrations, seeds\n├── public/              # web root (index.php, assets)\n├── writable/            # logs, cache, uploads\n├── vendor/              # Composer packages\n├── .env                 # environment settings\n└── composer.json\n```\n\n| Folder | Kaam |\n|---|---|\n| `app/` | poori application ka code |\n| `app/Controllers` | request handle karne wali classes |\n| `app/Models` | database se baat |\n| `app/Views` | HTML templates |\n| `app/Config` | routing, database, app settings |\n| `public/` | **web root** — sirf yahi browser se accessible |\n| `writable/` | logs, cache — write permission chahiye |\n| `vendor/` | Composer ki libraries |\n| `.env` | environment (DB password, debug mode) |\n\n**Dhyan:** document root `public/` par set karein; `.env` aur `vendor/` browser se bahar rehte hain — yahi security ka basic rule hai.\n\n**Diagram:** Refer to the CodeIgniter MVC diagram (folder structure strip).\n\n**Exam line:** "CodeIgniter 4 mein app/ mein Controllers, Models, Views hote hain, public/ web root hota hai aur writable/ mein logs-cache."',
      },
    ],
  },
];
