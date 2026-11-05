// ============================================================
// WEB TECHNOLOGY — Unit III, topics 3.5 to 3.8 (PHP part 2)
//  3.5 Formatting / output formatting
//  3.6 String library functions
//  3.7 Array fundamentals + single-dimensional arrays
//  3.8 Multidimensional arrays + associative arrays
//
// Output panels use section.php (stdout text) → PhpOutput.
// ============================================================

export const webTechnologyTopicsH = [
  // ==========================================================
  // 3.5 — Formatting
  // ==========================================================
  {
    id: 'wt-php-formatting',
    number: '3.5',
    title: 'Formatting Output',
    subtitle: 'printf, sprintf aur number_format — output ka control',
    icon: 'chart',
    accent: '#c4ff00',
    englishDefinition:
      'Formatting in PHP means controlling exactly how a value looks in the output — how many decimal places, how wide a column is, where zeros are padded, whether thousands are separated — instead of leaving it to the default conversion done by echo. The main tools are printf() and sprintf(), which take a format string plus arguments and interpret conversion specifications of the form %[flags][width][.precision]specifier, for example %05.2f, %-8s, %d, %x, %b, %e, %c and %%, and number_format($num, $decimals, $decimal_separator, $thousands_separator) for money and reports. printf() writes the formatted string directly to output and returns the number of characters printed, while sprintf() returns the string so it can be stored, concatenated or logged. Supporting functions are round(), floor(), ceil(), str_pad() for padding and setlocale()/locale-aware formatting. PHP 8 removed money_format(), so number_format() plus a currency symbol is the standard way to print prices.',
    intro:
      'echo jo mile waisa print kar deta hai — 8.756 ko 8.756 hi. Report ya marksheet banate waqt humein control chahiye: do decimal, paanch digit ka column, aage zero. Uska tool hai printf() ka format string: %05.2f ka matlab "kul 5 width, aage zero bharo, 2 decimal". sprintf() wahi kaam karta hai par string return karta hai, isliye use variable mein rakh sakte hain. Paisa dikhane ke liye number_format() sabse aasan hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Format string ka anatomy',
        body:
          'printf("%05.2f", 3.14159) — % ke baad: 0 (zero se pad karo), 5 (total width), .2 (do decimal), f (float). Isliye output "03.14" aata hai. Specifiers: %s string, %d integer, %f float, %x hex, %b binary, %o octal, %c character, %e scientific, %% literal percent. Flag - left align karta hai, 0 zero se pad karta hai, + sign dikhata hai.',
        body2:
          'printf() seedha print karta hai (return: kitne characters likhe), sprintf() string return karta hai. number_format(1234567.891, 2, ".", ",") → "1,234,567.89". Rounding ke liye round($x, 2), floor(), ceil(). Padding ke liye str_pad(). PHP 8 mein money_format() hata diya gaya hai — currency ke liye number_format() + symbol use karein.',
        chips: ['printf()', 'sprintf()', '%05.2f', '%-8s', 'number_format()', 'round()', 'str_pad()'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: '%05.2f Ka Breakdown aur Specifier Table',
        diagram: 'php-string-format',
        caption:
          'Ek format string ko tod kar dekhein — zero pad, width, decimal, type. Neeche table mein roz kaam ke specifiers aur number_format ka example. Exam mein koi ek printf statement ka output poochha jaata hai — yahi figure likh dein.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'printf, sprintf aur number_format',
        intro:
          'Har line ka expected output comment mein bhi hai. sprintf() ko echo karna padta hai kyunki wo print nahi karta, bas string return karta hai.',
        language: 'php',
        filename: 'format.php',
        code: `<?php
printf("Marks: %d / 100\\n", 78);
printf("%s ne %d subjects mein %.2f SGPA liya\\n", "Riya", 5, 8.756);
printf("|%-8s|%05d|\\n", "PHP", 42);
printf("Hex: %x · Binary: %b · Octal: %o\\n", 255, 5, 8);
printf("Pi = %.3f\\n", M_PI);

// sprintf() print nahi karta — string return karta hai
$line = sprintf("%.1f%% attendance", 92.4567);
echo $line . "\\n";

// hazaar separator + decimals
echo number_format(1234567.891, 2, ".", ",") . "\\n";
echo number_format(1234567.891) . "\\n";

// padding aur rounding
echo str_pad("7", 3, "0", STR_PAD_LEFT) . "\\n";
echo round(3.14159, 2) . " · " . floor(3.9) . " · " . ceil(3.1) . "\\n";`,
        php: `Marks: 78 / 100
Riya ne 5 subjects mein 8.76 SGPA
|PHP     |00042|
Hex: ff · Binary: 101 · Octal: 10
Pi = 3.142
92.5% attendance
1,234,567.89
1,234,568
007
3.14 · 3 · 4`,
        label: 'php format.php',
        height: 280,
        caption:
          '|%-8s| "PHP" ko 8 width mein left align karke "PHP     " banata hai; %05d 42 ko "00042" banata hai. number_format() bina decimals ke bhi lakh separator lagata hai aur round kar deta hai — 1,234,568.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Report Table — Columns Ko Line Up Karna',
        intro:
          'printf ka asli fayda tab dikhta hai jab table banani ho: har column ki width fix karein. Yahan %-12s naam ke liye, %5d quantity ke liye aur %10s amount ke liye — isliye sab ek seedh mein aata hai.',
        language: 'php',
        filename: 'report.php',
        code: `<?php
$items = [
    ["Pen", 10, 25.50],
    ["Notebook", 3, 120.00],
    ["Eraser", 5, 8.75],
];

printf("%-12s %5s %10s\\n", "Item", "Qty", "Amount");
echo str_repeat("-", 30) . "\\n";

$total = 0;
foreach ($items as [$name, $qty, $rate]) {
    $amt = $qty * $rate;
    $total += $amt;
    printf("%-12s %5d %10s\\n", $name, $qty, number_format($amt, 2));
}

echo str_repeat("-", 30) . "\\n";
printf("%-12s %5s %10s\\n", "Total", "", number_format($total, 2));`,
        php: `Item           Qty     Amount
------------------------------
Pen             10     255.00
Notebook         3     360.00
Eraser           5      43.75
------------------------------
Total                  658.75`,
        label: 'php report.php',
        height: 220,
        caption:
          'Monospace font mein columns perfectly line up hote hain. number_format($amt, 2) se har amount do decimal ka, aur list destructuring [$name, $qty, $rate] se teen values ek line mein mil jaati hain (PHP 7.1+).',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'echo vs printf vs sprintf vs number_format',
        columns: ['echo', 'printf', 'sprintf', 'number_format'],
        columnColors: ['#8f9dc4', '#00d4ff', '#c4ff00', '#ff8800'],
        rows: [
          { label: 'Kaam', values: ['Seedha print', 'Format karke print', 'Format karke string return', 'Number ko readable banata'] },
          { label: 'Return', values: ['Kuch nahi', 'Kitne chars likhe', 'String', 'String'] },
          { label: 'Format specifier', values: ['Nahi', 'Haan (%d, %.2f)', 'Haan (%d, %.2f)', 'Nahi (sirf number)'] },
          { label: 'Use', values: ['Simple output', 'Report, alignment', 'Log, variable mein store', 'Paisa, marks, total'] },
          { label: 'Example', values: ['echo $x;', 'printf("%.2f", $x);', '$s = sprintf("%05d", $x);', 'number_format(1234.5, 2)'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Formatting Ke Points',
        points: [
          'printf(format, args...) print karta hai aur characters ki ginti return karta hai.',
          'sprintf() wahi format karta hai par string return karta hai — print nahi karta.',
          'Format: %[flag][width][.precision]type, jaise %05.2f, %-10s, %+d.',
          '%s string, %d integer, %f float, %x hex, %o octal, %b binary, %c char, %e scientific, %% percent.',
          '- left align, 0 zero pad, width total characters, .2 decimal places.',
          'number_format($n, $dec, $decimal_sep, $thousands_sep) — 1234567.891 → 1,234,567.89.',
          'round($x, 2) decimal tak round, floor() neeche, ceil() upar, abs() positive.',
          'str_pad($s, length, pad_string, STR_PAD_LEFT) — "7" → "007".',
          'PHP 8 mein money_format() remove ho gaya; currency ke liye number_format() + symbol.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'printf() print karta hai, sprintf() string return karta hai.',
          '%05.2f = width 5, zero pad, 2 decimal.',
          'Column alignment ke liye %-12s, %5d, %10s.',
          'number_format() se lakh separator aur decimals.',
          'round/floor/ceil se rounding, str_pad se padding.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain printf() and sprintf() in PHP with format specifiers.',
        answer:
          '**printf()** — formatted output print karta hai; return: kitne characters likhe.\n**sprintf()** — wahi formatting karta hai par **string return** karta hai (print nahi), isliye variable/log mein store kar sakte hain.\n\n```php\nprintf("Marks: %d / 100", 78);       // Marks: 78 / 100\n$s = sprintf("%05.2f", 3.14159);     // "03.14"\necho $s;\n```\n\n**Format structure:** `%[flag][width][.precision]specifier`\n\n| Specifier | Matlab | Example | Output |\n|---|---|---|---|\n| `%s` | string | `printf("%s","Riya")` | Riya |\n| `%d` | integer | `printf("%d",78)` | 78 |\n| `%f` | float | `printf("%f",3.14)` | 3.140000 |\n| `%.2f` | 2 decimals | `printf("%.2f",3.14159)` | 3.14 |\n| `%05d` | zero pad, width 5 | `printf("%05d",42)` | 00042 |\n| `%-8s` | left align | `printf("[%-8s]","PHP")` | [PHP     ] |\n| `%x` | hex | `printf("%x",255)` | ff |\n| `%b` | binary | `printf("%b",5)` | 101 |\n| `%e` | scientific | `printf("%e",1234)` | 1.234000e+3 |\n| `%%` | literal % | `printf("100%%")` | 100% |\n\n**Flags:** `-` left align · `0` zero padding · `+` sign dikhao.\n\n**Diagram:** Refer to the printf format diagram.\n\n**Exam line:** "printf() format karke print karta hai aur sprintf() wahi string return karta hai — alignment aur decimals ke liye format specifier use hote hain."',
      },
      {
        question: 'What is number_format()? Explain with examples. How do you print currency in PHP?',
        answer:
          '**number_format()** — number ko hazaar separators aur fixed decimals ke saath string bana deta hai (aur round kar deta hai). Ye report, marksheet aur price dikhane ke liye sabse aasan hai.\n\n**Syntax:** `number_format($number, $decimals = 0, $decimal_point = ".", $thousands_sep = ",")`\n\n```php\necho number_format(1234567.891);            // 1,234,568\necho number_format(1234567.891, 2);         // 1,234,567.89\necho number_format(1234567.891, 2, ".", ","); // 1,234,567.89\necho number_format(1234567.891, 2, ",", "."); // 1.234.567,89  (European)\necho number_format(658.75, 2);              // 658.75\n```\n\n**Currency print:**\n```php\n$price = 1299.5;\necho "₹" . number_format($price, 2);    // ₹1,299.50\necho "$" . number_format($price, 2);    // $1,299.50\n```\n\n**Note:** PHP 8 mein `money_format()` **remove** ho gaya hai — isliye currency ke liye `number_format()` + symbol hi standard tareeka hai.\n\n**Table:**\n| Function | Output |\n|---|---|\n| `number_format(1234.5, 2)` | 1,234.50 |\n| `round(3.14159, 2)` | 3.14 (number) |\n| `floor(3.9)` | 3 |\n| `ceil(3.1)` | 4 |\n| `str_pad("7", 3, "0", STR_PAD_LEFT)` | 007 |\n\n**Exam line:** "number_format() number ko hazaar separator aur fixed decimals ke saath string banata hai; PHP 8 mein money_format hata chuka hai."',
      },
      {
        question: 'Write a PHP program that prints a student marksheet using printf() with proper alignment.',
        answer:
          '**Program:**\n```php\n<?php\n$students = [\n    ["Riya", 78, 82, 90],\n    ["Aman", 65, 70, 72],\n    ["Sara", 88, 91, 95],\n];\n\nprintf("%-10s %5s %5s %5s %7s %6s\\n",\n       "Name", "S1", "S2", "S3", "Total", "Avg");\necho str_repeat("=", 42) . "\\n";\n\nforeach ($students as [$name, $a, $b, $c]) {\n    $total = $a + $b + $c;\n    $avg   = $total / 3;\n    printf("%-10s %5d %5d %5d %7d %6.2f\\n",\n           $name, $a, $b, $c, $total, $avg);\n}\necho str_repeat("=", 42) . "\\n";\n```\n\n**Output (monospace):**\n```\nName          S1    S2    S3   Total    Avg\n==========================================\nRiya          78    82    90     250  83.33\nAman          65    70    72     207  69.00\nSara          88    91    95     274  91.33\n```\n\n**Explanation:**\n- `%-10s` — naam left align, width 10\n- `%5d` — marks right align, width 5\n- `%7d` — total, width 7\n- `%6.2f` — average, 2 decimal\n- `str_repeat("=", 42)` — separator line\n- `[$name, $a, $b, $c]` — array destructuring\n\n**Kyon printf:** echo se columns tirchhe aa jaate hain; format specifier width fix kar deta hai, isliye report/marksheet professional lagti hai.\n\n**Exam line:** "printf ke width specifiers (%5d, %6.2f) se columns align ho jaate hain — yahi marksheet/report ka tareeka hai."',
      },
    ],
  },

  // ==========================================================
  // 3.6 — String library functions
  // ==========================================================
  {
    id: 'wt-php-strings',
    number: '3.6',
    title: 'String Library Functions',
    subtitle: 'strlen se str_replace tak — string par kaam karne ke built-in tools',
    icon: 'code',
    accent: '#ff7ab2',
    englishDefinition:
      'PHP provides a large built-in library of string functions that take a string, work on it and return a result without modifying the original (strings are immutable in practice — you must assign the returned value). The core functions are: strlen() for length and str_word_count() for words; trim(), ltrim(), rtrim() for whitespace; strtoupper(), strtolower(), ucfirst(), ucwords(), lcfirst() for case; strpos(), stripos(), strrpos(), str_contains(), str_starts_with(), str_ends_with() for searching; substr(), strstr(), strrchr() for extracting; str_replace(), str_ireplace(), substr_replace() for replacing; explode(), implode()/join(), str_split() for converting between string and array; strrev(), str_repeat(), str_pad(), wordwrap(), nl2br() for shaping; strcmp(), strcasecmp(), similar_text(), levenshtein() for comparing; str_word_count(), substr_count() for counting; and htmlspecialchars(), strip_tags(), addslashes(), sprintf() for output safety and formatting. Multibyte (UTF-8) text needs the mb_* family — mb_strlen(), mb_substr(), mb_strtoupper() — because strlen() counts bytes, so a Hindi or emoji character can count as 3 or 4.',
    intro:
      'String ka koi bhi function original string ko badal nahi deta — wo naya result return karta hai, isliye $s = strtoupper($s); likhna padta hai. Roz kaam ke sau functions hain, par exam ke liye chhah groups yaad rakhein: length, trim, case, search, extract/replace, aur string↔array. Aur ek trap: strlen() bytes ginta hai, characters nahi — Hindi ya emoji ke liye mb_strlen() chahiye.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'String function kya karta hai',
        body:
          'String function ek string (ya do) leta hai aur naya result return karta hai — original variable waisa hi rehta hai. Example: $s = "  PHP  "; echo strlen($s); // 7 (spaces bhi), echo trim($s); // "PHP". Isliye result ko use karna ho to assign karein: $s = trim($s);',
        body2:
          'Groups: (1) length/count — strlen, str_word_count, substr_count; (2) trim — trim, ltrim, rtrim; (3) case — strtoupper, strtolower, ucfirst, ucwords; (4) search — strpos, stripos, str_contains, str_starts_with, str_ends_with (PHP 8); (5) extract/replace — substr, strstr, str_replace; (6) string↔array — explode, implode, str_split; (7) shape — strrev, str_repeat, str_pad, nl2br; (8) compare — strcmp, strcasecmp, similar_text.',
        chips: ['strlen()', 'trim()', 'ucwords()', 'strpos()', 'substr()', 'str_replace()', 'explode()', 'implode()', 'mb_strlen()'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Ek String, Barah Functions',
        diagram: 'php-string-functions',
        caption:
          'Ek hi string "  Hello PHP World  " par alg-alg functions ka natija ek table mein. Index position 0 se shuru hoti hai, isliye strpos() PHP ke liye 8 deta hai (do space + "Hello" + space). Exam mein 8–10 functions ka output poochha jaata hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Roz Ke String Functions — Chalte Hue',
        intro:
          'Har line ka natija neeche output mein hai. Dekhein ki original $s kabhi nahi badalta — har function naya string return karta hai.',
        language: 'php',
        filename: 'strings.php',
        code: `<?php
$s = "  Hello PHP World  ";

echo strlen($s) . "\\n";                        // 19 (spaces bhi)
echo "[" . trim($s) . "]\\n";                   // [Hello PHP World]
echo "[" . strtoupper(trim($s)) . "]\\n";       // [HELLO PHP WORLD]
echo strtolower("MCA") . "\\n";                 // mca
echo ucfirst("riya sharma") . "\\n";            // Riya sharma
echo ucwords("riya sharma patil") . "\\n";      // Riya Sharma Patil

echo strpos(trim($s), "PHP") . "\\n";           // 6
echo substr(trim($s), 0, 5) . "\\n";            // Hello
echo substr(trim($s), -5) . "\\n";              // World
echo str_replace("PHP", "JS", trim($s)) . "\\n";// Hello JS World

$parts = explode(" ", trim($s));
echo count($parts) . "\\n";                     // 3
echo implode("-", $parts) . "\\n";              // Hello-PHP-World

echo strrev("MCA") . "\\n";                     // ACM
echo str_repeat("ab", 3) . "\\n";               // ababab
echo str_pad("7", 3, "0", STR_PAD_LEFT) . "\\n";// 007
echo str_word_count("PHP is easy") . "\\n";     // 3

var_dump(str_contains(trim($s), "PHP"));        // true  (PHP 8)
var_dump(str_starts_with(trim($s), "Hello"));   // true
var_dump(str_ends_with(trim($s), "World"));     // true`,
        php: `19
[Hello PHP World]
[HELLO PHP WORLD]
mca
Riya sharma
Riya Sharma Patil
6
Hello
World
Hello JS World
3
Hello-PHP-World
ACM
ababab
007
3
bool(true)
bool(true)
bool(true)`,
        label: 'php strings.php',
        height: 320,
        caption:
          'substr($s, -5) negative start se "World" nikaal leta hai. str_contains / str_starts_with / str_ends_with PHP 8 mein aaye — pehle log strpos() !== false se kaam chalate the.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Practical — Form Data Saaf Karna',
        intro:
          'Yahi combination real project mein har form par lagta hai: trim se extra space, ucwords se naam sundar, strlen se length limit, aur htmlspecialchars se output safe. String functions ka sabse zyada use yahin hota hai.',
        language: 'php',
        filename: 'clean.php',
        code: `<?php
$raw = "   riya   sharma  ";

$name = ucwords(strtolower(trim($raw)));
echo "[" . $name . "]\\n";                    // [Riya   Sharma]

$name = preg_replace("/\\s+/", " ", $name);    // ek se zyada space hatao
echo "[" . $name . "]\\n";                    // [Riya Sharma]

echo strlen($name) . "\\n";                   // 11

if (strlen($name) < 3 || strlen($name) > 40) {
    echo "Name ki length 3 se 40 ke beech honi chahiye\\n";
} else {
    echo "Valid naam: " . htmlspecialchars($name, ENT_QUOTES, "UTF-8") . "\\n";
}

// email ka domain nikaalna
$email = "riya@example.com";
$at = strpos($email, "@");
echo substr($email, $at + 1) . "\\n";         // example.com
echo substr($email, 0, $at) . "\\n";          // riya

// Hindi text — bytes vs characters
$hindi = "नमस्ते";
echo strlen($hindi) . " bytes, " . mb_strlen($hindi) . " chars\\n";`,
        php: `[Riya   Sharma]
[Riya Sharma]
11
Valid naam: Riya Sharma
example.com
riya
18 bytes, 6 chars`,
        label: 'php clean.php',
        height: 300,
        caption:
          'Aakhri line exam ka favourite hai: strlen() bytes ginta hai (Hindi character 3 bytes), mb_strlen() asli characters — isliye Unicode ke liye mb_* functions use karein.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Aksar Poochhe Jaane Wale Confusions',
        columns: ['strlen()', 'count()', 'explode()', 'str_split()'],
        columnColors: ['#ff7ab2', '#00d4ff', '#c4ff00', '#ff8800'],
        rows: [
          { label: 'Kis par', values: ['String par', 'Array (ya Countable) par', 'String → array', 'String → array'] },
          { label: 'Kya deta', values: ['Bytes ki ginti', 'Elements ki ginti', 'Separator par todta', 'Har character alag'] },
          { label: 'Example', values: ['strlen("PHP") → 3', 'count([1,2,3]) → 3', 'explode("-", "a-b") → ["a","b"]', 'str_split("abc") → ["a","b","c"]'] },
          { label: 'Dhyan', values: ['Unicode par bytes ginta hai — mb_strlen()', 'String par warning/TypeError', 'Khaali string par [""] deta', 'Space bhi ek element'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'String Functions Ke Points',
        points: [
          'Koi bhi function original string nahi badalta — result assign karna padta hai.',
          'strlen() bytes deta hai; UTF-8 ke liye mb_strlen(), mb_substr(), mb_strtoupper().',
          'trim() / ltrim() / rtrim() — dono taraf / left / right space hataate hain.',
          'strpos() position deta hai (0-based) aur na mile to false — isliye === false se check karein, == se nahi.',
          'substr($s, start, length) — negative start aakhir se ginta hai.',
          'str_replace(search, replace, subject) — array bhi le sakta hai, isliye ek saath kai replacements.',
          'explode(sep, string) string ko array banata hai, implode(glue, array) array ko string.',
          'PHP 8: str_contains(), str_starts_with(), str_ends_with() — pehle strpos() se kaam hota tha.',
          'ucfirst() pehla character, ucwords() har word ka pehla character bada karta hai.',
          'Output se pehle htmlspecialchars() — XSS se bachav.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Length: strlen(), mb_strlen(); words: str_word_count().',
          'Clean: trim(); case: strtoupper/strtolower/ucfirst/ucwords.',
          'Search: strpos(), str_contains(), str_starts_with().',
          'Cut/replace: substr(), str_replace().',
          'string↔array: explode(), implode().',
          'Shape: strrev, str_repeat, str_pad, nl2br; safety: htmlspecialchars().',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain any eight string manipulation functions in PHP with examples.',
        answer:
          '| Function | Kaam | Example | Output |\n|---|---|---|---|\n| `strlen()` | length (bytes) | `strlen("PHP")` | 3 |\n| `trim()` | aage-piche space hatao | `trim("  hi  ")` | hi |\n| `strtoupper()` | CAPS | `strtoupper("php")` | PHP |\n| `strtolower()` | chhote | `strtolower("PHP")` | php |\n| `ucfirst()` | pehla letter bada | `ucfirst("riya")` | Riya |\n| `ucwords()` | har word bada | `ucwords("riya sharma")` | Riya Sharma |\n| `strpos()` | position dhoondo | `strpos("hello php","php")` | 6 |\n| `substr()` | hissa nikaalo | `substr("Hello", 0, 2)` | He |\n| `str_replace()` | badlo | `str_replace("PHP","JS","PHP 8")` | JS 8 |\n| `explode()` | string → array | `explode("-","a-b")` | ["a","b"] |\n| `implode()` | array → string | `implode("-",["a","b"])` | a-b |\n| `strrev()` | ulta | `strrev("MCA")` | ACM |\n\n```php\n$s = "  Hello PHP  ";\necho strlen($s);                  // 13\necho trim($s);                    // Hello PHP\necho str_replace("PHP","JS",trim($s)); // Hello JS\nprint_r(explode(" ", trim($s)));  // Array ( [0] => Hello [1] => PHP )\n```\n\n**Note:** har function naya result return karta hai, original string nahi badalti.\n\n**Diagram:** Refer to the string functions diagram.\n\n**Exam line:** "strlen, trim, strtoupper, strpos, substr, str_replace, explode aur implode — string manipulation ke sabse zyada use hone wale functions hain."',
      },
      {
        question: 'Differentiate between explode() and implode(). Also explain strpos() with its false trap.',
        answer:
          '**explode() vs implode():**\n\n| Basis | `explode()` | `implode()` |\n|---|---|---|\n| Direction | String → Array | Array → String |\n| Syntax | `explode($sep, $str)` | `implode($glue, $array)` |\n| Example | `explode("-", "a-b-c")` | `implode("-", ["a","b","c"])` |\n| Output | `["a","b","c"]` | `a-b-c` |\n| Use | CSV/space todna, words ginnna | Array ko text/URL/CSV banana |\n| Alias | — | `join()` |\n\n```php\n$csv = "Riya,78,MCA";\n$parts = explode(",", $csv);      // ["Riya","78","MCA"]\necho $parts[1];                    // 78\necho implode(" | ", $parts);      // Riya | 78 | MCA\n```\n\n**strpos() aur false trap:**\n`strpos($haystack, $needle)` pehla match **0-based** position deta hai, na mile to `false`.\n\n```php\n$s = "PHP is easy";\nvar_dump(strpos($s, "PHP"));   // int(0)\nvar_dump(strpos($s, "Java"));  // bool(false)\n\nif (strpos($s, "PHP") == false) echo "nahi mila"; // GALAT — 0 == false true hai\nif (strpos($s, "PHP") === false) echo "nahi mila"; // SAHI\n```\n\nKyunki position `0` bhi falsy hai, `==` se comparison galat answer deta hai — hamesha `=== false`.\n\n**PHP 8 se aasan raasta:** `str_contains($s, "PHP")` seedha `true/false` deta hai.\n\n**Exam line:** "explode string ko array banata hai aur implode array ko string; strpos ka result 0 ho sakata hai, isliye `=== false` se check karein."',
      },
      {
        question: 'Why is mb_strlen() preferred over strlen() for Unicode text? Explain with an example.',
        answer:
          '**Reason:** `strlen()` **bytes** ginta hai, characters nahi. UTF-8 mein ek character 1 se 4 bytes leta hai — English letter 1 byte, Hindi/Devanagari 3 bytes, emoji 4 bytes. `mb_strlen()` encoding (UTF-8) samajh kar asli **characters** ginta hai.\n\n```php\n$s = "नमस्ते";\necho strlen($s);      // 18  (bytes)\necho mb_strlen($s);   // 6   (characters)\n\necho strlen("Riya");     // 4\necho mb_strlen("Riya");  // 4  (English mein farak nahi)\n```\n\n**Isse kya gadbad hoti hai:**\n```php\nsubstr("नमस्ते", 0, 3);     // aadha character — tuta hua output\nmb_substr("नमस्ते", 0, 3);  // "नमस" — sahi\n\nstrtoupper("é");            // kaam nahi karta\nmb_strtoupper("é");         // É\n```\n\n**mb_* family:** `mb_strlen()` · `mb_substr()` · `mb_strtoupper()` · `mb_strtolower()` · `mb_str_split()` · `mb_strpos()` · `mb_convert_encoding()`.\n\n**Kab zaroori:** Hindi/Marathi content, user ke naam, emoji, Arabic/Chinese text, database se aaya UTF-8 data, length validation (form field 40 "characters" ka ho to bytes se galat count hoga).\n\n**Setup:** `mb_internal_encoding("UTF-8");` ya php.ini mein `default_charset=UTF-8`.\n\n**Exam line:** "strlen bytes ginta hai aur mb_strlen characters — Unicode (Hindi/emoji) ke liye mb_* functions hi sahi hain."',
      },
    ],
  },

  // ==========================================================
  // 3.7 — Array fundamentals + single-dimensional arrays
  // ==========================================================
  {
    id: 'wt-php-arrays',
    number: '3.7',
    title: 'Array Fundamentals & Single-Dimensional Arrays',
    subtitle: 'Ek naam, kai values — index 0 se shuru',
    icon: 'grid',
    accent: '#2f6fff',
    englishDefinition:
      'An array in PHP is an ordered map that associates keys with values, which means it can act as a list (numeric keys), a dictionary (string keys) or both at the same time. A single-dimensional (one-dimensional, indexed) array stores one flat list of values under one variable name, created with array("Apple", "Banana") or the short syntax ["Apple", "Banana"], where keys are assigned automatically from 0 upwards; a manual key can be given as [2 => "Mango"], and $arr[] = "new" appends to the end using the next integer key. Elements are read with $arr[0], added with $arr[] / array_push() / array_unshift(), removed with unset() / array_pop() / array_shift(), counted with count(), looped with foreach, and manipulated with sort(), rsort(), array_reverse(), array_merge(), array_slice(), array_sum(), max(), min(), in_array(), array_search(), array_unique(), array_keys() and implode(). Arrays in PHP are ordered hash maps, so keys are not guaranteed to be contiguous after unset(), and arrays can hold mixed types and even other arrays (which makes multidimensional arrays possible).',
    intro:
      'Array ka matlab: ek variable ke andar kai values. PHP mein array asal mein "key → value" ka ordered map hai — single-dimensional array mein keys simple 0, 1, 2 hote hain. Fruits ki list, marks ki list, subjects ki list — sab yahi hai. Sabse zaroori loop hai foreach, aur sabse zaroori baat: unset() ke baad keys dobara number nahi hoti, isliye gap ban jaata hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Array banane ka tareeka',
        body:
          'Do syntax: purana array("Apple", "Banana") aur naya ["Apple", "Banana"] — dono ek hi hain. Keys automatic 0 se lagti hain. $fruits[] = "Grapes"; likhne par agla number khud mil jaata hai. Value padhne ke liye $fruits[0], ginti ke liye count($fruits) (sizeof() bhi same), poora array dekhne ke liye print_r() ya var_dump().',
        body2:
          'Kuch zaroori functions: array_push (end mein jodo), array_unshift (shuru mein jodo), array_pop (end se hatao), array_shift (shuru se hatao), unset (kisi bhi index se), sort/rsort (value se), array_reverse, array_merge, array_slice, array_sum, max/min, in_array (milta hai ya nahi), array_search (key dhoondo), array_unique, implode (string banao).',
        chips: ['[]', 'array()', '0-based index', 'count()', 'foreach', 'array_push()', 'sort()', 'in_array()'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Indexed Array — Keys, Loop aur Functions',
        diagram: 'php-arrays',
        caption:
          'Chaar fruits, keys 0–3, count 4. Neeche likhne/padhne ka tareeka aur loop + functions. Exam mein array ka diagram + foreach loop + 5 functions likhna enough hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Array Banana, Padhna, Badalna',
        intro:
          'Dhyan dein unset($fruits[1]) ke baad: count 4 ho jaata hai par keys 0, 2, 3, 4, 5 rehti hain — array khud se dobara number nahi karta. Isi liye "bech se hata kar reset karna ho to array_values()" yaad rakhein.',
        language: 'php',
        filename: 'array.php',
        code: `<?php
$fruits = ["Apple", "Banana", "Mango", "Orange"];

echo count($fruits) . "\\n";                 // 4
echo $fruits[0] . " · " . $fruits[3] . "\\n";// Apple · Orange

$fruits[] = "Grapes";                        // end mein jodo
echo count($fruits) . "\\n";                 // 5

array_push($fruits, "Kiwi");                 // same kaam
echo $fruits[5] . "\\n";                     // Kiwi

unset($fruits[1]);                           // Banana hatao
echo count($fruits) . "\\n";                 // 4
print_r($fruits);

$fruits = array_values($fruits);             // keys 0,1,2... reset
echo $fruits[0] . "\\n";                     // Apple
echo implode(", ", $fruits) . "\\n";         // Apple, Mango, Orange, Grapes, Kiwi`,
        php: `4
Apple · Orange
5
Kiwi
4
Array
(
    [0] => Apple
    [2] => Mango
    [3] => Orange
    [4] => Grapes
    [5] => Kiwi
)
Apple
Apple, Mango, Orange, Grapes, Kiwi`,
        label: 'php array.php',
        height: 300,
        caption:
          'print_r() array ko padhne layak dikhata hai, par keys ka gap saaf dikha deta hai. array_values() ne keys 0 se dobara set kar di — tabhi $fruits[0] par Apple mila.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Loop, Sorting aur Functions',
        intro:
          'foreach PHP ka sabse zyada use hone wala loop hai — array ke har element par chalta hai. Neeche marks ka total, average, sorting aur search sab ek hi array par.',
        language: 'php',
        filename: 'array2.php',
        code: `<?php
$marks = [78, 65, 91, 52];

echo "Total: " . array_sum($marks) . "\\n";        // 286
echo "Average: " . array_sum($marks) / count($marks) . "\\n";
echo "Max: " . max($marks) . ", Min: " . min($marks) . "\\n";

sort($marks);                                      // chhote se bade
echo implode(", ", $marks) . "\\n";

rsort($marks);                                     // bade se chhote
echo implode(", ", $marks) . "\\n";

echo (in_array(78, $marks) ? "78 mila" : "78 nahi mila") . "\\n";
echo "Position: " . array_search(78, $marks) . "\\n";

$subjects = ["HTML", "CSS", "JavaScript", "PHP"];

echo "<ul>\\n";
foreach ($subjects as $i => $s) {
    echo "  <li>" . ($i + 1) . ". $s</li>\\n";
}
echo "</ul>";`,
        php: `Total: 286
Average: 71.5
Max: 91, Min: 52
52, 65, 78, 91
91, 78, 65, 52
78 mila
Position: 2
<ul>
  <li>1. HTML</li>
  <li>2. CSS</li>
  <li>3. JavaScript</li>
  <li>4. PHP</li>
</ul>`,
        label: 'php array2.php',
        height: 300,
        caption:
          'rsort ke baad array 91, 78, 65, 52 hai — isliye array_search(78) ne position 2 diya (0-based). foreach ne array ko seedha HTML list mein badal diya — dynamic page ka basic pattern.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Indexed vs Associative vs Multidimensional',
        columns: ['Indexed', 'Associative', 'Multidimensional'],
        columnColors: ['#2f6fff', '#00ff88', '#c4ff00'],
        rows: [
          { label: 'Key', values: ['0, 1, 2... (automatic)', 'Naam/string keys ("name")', 'Number + naam, andar array'] },
          { label: 'Example', values: ['$f = ["Apple","Mango"]', '$s = ["name"=>"Riya"]', '$m = [[78,82],[65,70]]'] },
          { label: 'Padhna', values: ['$f[0]', '$s["name"]', '$m[0][1]'] },
          { label: 'Loop', values: ['foreach ($f as $v)', 'foreach ($s as $k => $v)', 'nested foreach'] },
          { label: 'Use', values: ['List, marks, menu', 'Record, config, JSON', 'Table, matrix, records'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Array Ke Points',
        points: [
          'Array = ek variable mein kai values; PHP mein ye ordered key-value map hai.',
          'Syntax: array(...) ya [...]; keys automatic 0 se, ya manual 5 => "x".',
          'count() / sizeof() se elements ki ginti.',
          'Jodna: $arr[] = v, array_push(), array_unshift(); hatana: unset(), array_pop(), array_shift().',
          'unset() ke baad keys nahi badalti — gap reh jaata hai; array_values() se reset.',
          'sort() keys reset karke value se sort karta hai; rsort() ulta; asort() value se, key bachaa kar.',
          'foreach ($arr as $v) values par, foreach ($arr as $k => $v) key + value par chalta hai.',
          'in_array() milne par true, array_search() position deta hai (na mile to false).',
          'print_r() / var_dump() se poora array dekhein; implode() se string banayein.',
          'Array mein kisi bhi type ki value rakhi ja sakti hai — isliye andar array rakh kar multidimensional banta hai.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Single-dimensional array = ek flat list, keys 0 se.',
          'Banao [ ] se, padho [index] se, ginti count() se.',
          'Jodne/hatane ke liye [] , array_push, unset, array_pop.',
          'foreach se loop; sort/rsort se order; in_array se search.',
          'unset ke baad keys dobara number nahi hoti — array_values() se reset.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is an array in PHP? Explain the types of arrays with examples.',
        answer:
          '**Array:** ek variable jo ek saath kai values rakhta hai; PHP mein ye **ordered key-value map** hai, isliye ek hi array list aur dictionary dono ka kaam kar sakta hai.\n\n**Types:**\n\n**1. Indexed (single-dimensional)** — numeric keys 0, 1, 2...\n```php\n$fruits = ["Apple", "Banana", "Mango"];\necho $fruits[1];        // Banana\necho count($fruits);    // 3\n$fruits[] = "Orange";   // key 3 par joda\n```\n\n**2. Associative** — string keys (naam wale)\n```php\n$student = ["name" => "Riya", "marks" => 78];\necho $student["name"];  // Riya\nforeach ($student as $k => $v) echo "$k = $v";\n```\n\n**3. Multidimensional** — array ke andar array\n```php\n$marks = [[78, 82], [65, 70]];\necho $marks[0][1];      // 82\n```\n\n| Type | Key | Example |\n|---|---|---|\n| Indexed | 0,1,2 | `$a = ["x","y"]` |\n| Associative | string | `$a = ["k"=>"x"]` |\n| Multidimensional | mixed | `$a = [["x"],[["y"]]]` |\n\n**Functions:** count(), array_push(), unset(), sort(), in_array(), implode(), print_r().\n\n**Diagram:** Refer to the array diagrams.\n\n**Exam line:** "PHP array ek ordered key-value map hai — indexed (0,1,2), associative (naam wale keys) aur multidimensional (array ke andar array)."',
      },
      {
        question: 'Explain any six array functions with examples.',
        answer:
          '| Function | Kaam | Example | Output |\n|---|---|---|---|\n| `count()` | elements gino | `count([1,2,3])` | 3 |\n| `array_push()` | end mein jodo | `array_push($a, 4)` | array + 4 |\n| `array_pop()` | end se hatao | `array_pop($a)` | last value |\n| `sort()` | value se ascending | `sort($a)` | sorted array |\n| `in_array()` | value hai ya nahi | `in_array(2,$a)` | true |\n| `implode()` | array → string | `implode("-",$a)` | a-b-c |\n| `array_merge()` | do array jodo | `array_merge($a,$b)` | combined |\n| `array_sum()` | sab jodo | `array_sum([1,2,3])` | 6 |\n\n```php\n$a = [3, 1, 2];\necho count($a);            // 3\nsort($a);\necho implode(", ", $a);    // 1, 2, 3\necho array_sum($a);        // 6\narray_push($a, 4);\necho count($a);            // 4\nvar_dump(in_array(2, $a)); // bool(true)\n```\n\n**Yaad rakhein:** `sort()` keys reset karta hai (0,1,2...), `asort()` keys bachaata hai. `in_array()` true/false deta hai, `array_search()` position deta hai (na mile to `false`).\n\n**Exam line:** "count se ginti, array_push se jodna, sort se order, in_array se search, implode se string — array ke roz ke functions."',
      },
      {
        question: 'What happens to array keys after unset()? How do you re-index an array? Write a program that loops over an array and prints an HTML list.',
        answer:
          '**unset() ke baad:** key us jagah se hat jaati hai par baaki keys **nahi badalti** — gap reh jaata hai.\n```php\n$f = ["Apple", "Banana", "Mango"];\nunset($f[1]);\nprint_r($f);\n// Array ( [0] => Apple [2] => Mango )\n```\nKey `1` nayi value ko nahi milti; agli value `[]` se jodne par key `3` milegi, `1` nahi.\n\n**Re-index:** `array_values($f)` — sirf values le kar keys 0 se dobara lagata hai.\n```php\n$f = array_values($f);\nprint_r($f);   // Array ( [0] => Apple [1] => Mango )\n```\n\n**HTML list program:**\n```php\n<?php\n$subjects = ["HTML", "CSS", "JavaScript", "PHP"];\n\necho "<ul>\\n";\nforeach ($subjects as $i => $s) {\n    echo "  <li>" . ($i + 1) . ". $s</li>\\n";\n}\necho "</ul>";\n```\n\n**Output:**\n```html\n<ul>\n  <li>1. HTML</li>\n  <li>2. CSS</li>\n  <li>3. JavaScript</li>\n  <li>4. PHP</li>\n</ul>\n```\n\n**Loop ke tareeke:**\n| Loop | Kab |\n|---|---|\n| `foreach ($a as $v)` | sirf values |\n| `foreach ($a as $k => $v)` | key + value |\n| `for ($i=0; $i<count($a); $i++)` | jab index ki zaroorat ho |\n\n**Exam line:** "unset() ke baad keys mein gap reh jaata hai; array_values() se dobara 0 se number lag jaate hain."',
      },
    ],
  },

  // ==========================================================
  // 3.8 — Multidimensional + associative arrays
  // ==========================================================
  {
    id: 'wt-php-array-types',
    number: '3.8',
    title: 'Multidimensional & Associative Arrays',
    subtitle: 'Array ke andar array, aur index ki jagah naam wale keys',
    icon: 'layers',
    accent: '#7ee787',
    englishDefinition:
      'A multidimensional array is an array whose elements are themselves arrays, so a two-dimensional array behaves like a table with rows and columns: $marks[0][1] means row 0, column 1. It is created by nesting array literals, read with successive brackets, traversed with nested foreach loops (the outer loop for rows, the inner for columns), counted with count($a) for the first level or count($a, COUNT_RECURSIVE) for all elements, and commonly printed as an HTML table. An associative array uses string keys instead of numeric ones, written as "key" => value, so data is stored and read by name ($student["name"], $student["marks"]) rather than by position; it is read with foreach ($arr as $key => $value) and sorted with ksort()/krsort() by key or asort()/arsort() by value, and inspected with array_keys(), array_values(), array_key_exists(), isset(). Associative arrays are the standard way to represent one database record, and an array of associative arrays (records) is the standard way to represent a table, which is why PHP converts such arrays to and from JSON/forms so easily.',
    intro:
      'Do badi ideas ek hi topic mein. Pehli: array ke andar array — jaise marks ki table, jahan pehla index row aur doosra column. Doosri: index ki jagah naam — $student["name"] kisi ko yaad rakhna aasan hai, $student[0] nahi. Database ki ek row associative array hoti hai, aur poori table "records ka array" — yahi PHP ka sabse common data structure hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Do-dimensional table aur "key => value"',
        body:
          'Multidimensional: $marks = [[78, 82, 90], [65, 70, 72]]; — $marks[0] pehli row hai, $marks[0][1] us row ka doosra element (82). Loop nested foreach se: bahar wala rows par, andar wala columns par. count($marks) sirf pehla level ginta hai (2); count($marks, COUNT_RECURSIVE) saare elements ginta hai (2 rows + 6 values = 8).',
        body2:
          'Associative: $student = ["name" => "Riya", "marks" => 78]; — key string hai, isliye $student["name"] se padhte hain, position se nahi. Loop: foreach ($student as $k => $v). Sorting: ksort() key se, asort() value se. Helpers: array_keys(), array_values(), array_key_exists(), isset(). Records ka array: [["name"=>"Riya"],["name"=>"Aman"]] — database table ka PHP roop.',
        chips: ['$a[0][1]', 'nested foreach', 'COUNT_RECURSIVE', '"key" => value', 'foreach $k => $v', 'ksort()', 'array_keys()'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye) — 1',
        title: 'Multidimensional Array — Rows aur Columns',
        diagram: 'php-2d-array',
        caption:
          'Matrix ko rows aur columns ki tarah samjhein: pehla index row, doosra column. Nested foreach se HTML table banti hai. 3D array (array ke andar array ke andar array) kaa concept bhi yahi hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: '2D Array — Padhna aur Table Banana',
        intro:
          'Nested foreach se HTML table generate hoti hai — yahi pattern CMS aur admin panel mein report dikhane ke liye use hota hai. Dhyan dein: count($marks) 3 deta hai kyunki sirf rows ginti hai; COUNT_RECURSIVE se 12.',
        language: 'php',
        filename: 'matrix.php',
        code: `<?php
$marks = [
    [78, 82, 90],
    [65, 70, 72],
    [88, 91, 95],
];

echo $marks[0][1] . "\\n";                   // 82
echo count($marks) . "\\n";                  // 3
echo count($marks, COUNT_RECURSIVE) . "\\n"; // 12

echo "<table border='1'>\\n";
foreach ($marks as $r => $row) {
    echo "  <tr>";
    foreach ($row as $c => $v) {
        echo "<td>$v</td>";
    }
    echo "</tr>\\n";
}
echo "</table>";

// ek row ka total nikaalna
foreach ($marks as $r => $row) {
    echo "Row $r total: " . array_sum($row) . "\\n";
}`,
        php: `82
3
12
<table border='1'>
  <tr><td>78</td><td>82</td><td>90</td></tr>
  <tr><td>65</td><td>70</td><td>72</td></tr>
  <tr><td>88</td><td>91</td><td>95</td></tr>
</table>
Row 0 total: 250
Row 1 total: 207
Row 2 total: 274`,
        label: 'php matrix.php',
        height: 280,
        caption:
          'Har row par array_sum() chalaya — nested loop ke andar seedha function bhi lag sakta hai. Browser is HTML ko 3x3 table ki tarah render karega.',
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye) — 2',
        title: 'Associative Array — Index ki Jagah Naam',
        diagram: 'php-assoc',
        caption:
          'Key "name" hai to value Riya milti hai. foreach ($student as $k => $v) se ek-ek key print hoti hai. Database ki ek row ka yahi roop hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Associative Array aur Records',
        intro:
          'Pehla block ek student ka record hai; doosra block aise records ka array — poora database table ek variable mein. array_column() se kisi ek field ki saari values nikaal sakte hain.',
        language: 'php',
        filename: 'assoc.php',
        code: `<?php
$student = [
    "name"   => "Riya",
    "course" => "MCA",
    "marks"  => 78,
];

echo $student["name"] . "\\n";              // Riya
$student["marks"] = 82;                     // update
$student["email"] = "riya@example.com";     // naya key

foreach ($student as $k => $v) {
    echo "$k = $v\\n";
}

ksort($student);                            // key se sort
print_r(array_keys($student));

// records ka array — database table
$students = [
    ["name" => "Riya", "marks" => 82],
    ["name" => "Aman", "marks" => 92],
    ["name" => "Sara", "marks" => 88],
];

echo "Marks: " . implode(", ", array_column($students, "marks")) . "\\n";
echo json_encode($students[0]) . "\\n";

// table banana
echo "<table>\\n";
foreach ($students as $s) {
    echo "  <tr><td>" . $s["name"] . "</td><td>" . $s["marks"] . "</td></tr>\\n";
}
echo "</table>";`,
        php: `Riya
name = Riya
course = MCA
marks = 82
email = riya@example.com
Array
(
    [0] => course
    [1] => email
    [2] => marks
    [3] => name
)
Marks: 82, 92, 88
{"name":"Riya","marks":82}
<table>
  <tr><td>Riya</td><td>82</td></tr>
  <tr><td>Aman</td><td>92</td></tr>
  <tr><td>Sara</td><td>88</td></tr>
</table>`,
        label: 'php assoc.php',
        height: 320,
        caption:
          'ksort() ne keys alphabetically (course, email, marks, name) kar di. json_encode() PHP array ko JSON bana deta hai — isliye PHP aur JavaScript ke beech data isi roop mein aata-jaata hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Indexed vs Associative',
        columns: ['Indexed array', 'Associative array'],
        columnColors: ['#2f6fff', '#00ff88'],
        rows: [
          { label: 'Key', values: ['Number — 0, 1, 2…', 'String ya number, khud likhi hui'] },
          { label: 'Banana', values: ['["Apple", "Mango"]', '["name" => "Riya"]'] },
          { label: 'Padhna', values: ['$a[0] — position se', '$a["name"] — naam se'] },
          { label: 'Loop', values: ['foreach ($a as $v)', 'foreach ($a as $k => $v)'] },
          { label: 'Sort', values: ['sort($a)', 'ksort($a) key se / asort($a) value se'] },
          { label: 'Kab behtar', values: ['Order important ho, list ho', 'Har field ka naam ho, record ho'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Multidimensional + Associative Ke Points',
        points: [
          'Multidimensional array = array ke andar array; 2D array table jaisa hota hai.',
          'Padhna: $a[0][1] — pehla index row, doosra column.',
          'Nested foreach se row aur column dono par loop chalta hai (table banane ka tareeka).',
          'count($a) sirf pehla level ginta hai; count($a, COUNT_RECURSIVE) sab kuch.',
          'Associative array mein key string hoti hai, "key" => value likha jaata hai.',
          'Loop: foreach ($a as $k => $v) — key aur value dono milte hain.',
          'ksort() key se, asort() value se sort karta hai (indexed mein sort() value se).',
          'array_keys(), array_values(), array_key_exists() / isset() — key check ke liye.',
          'array_column($records, "marks") se poore table mein se ek field nikaal sakte hain.',
          'Records ka array = array of associative arrays = ek database table.',
          'json_encode()/json_decode() se associative array JSON ban jaata hai (API ke liye).',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          '2D array = rows aur columns; $a[row][col] se padhein.',
          'Nested foreach se table/report banti hai.',
          'count($a, COUNT_RECURSIVE) sab elements ginta hai.',
          'Associative array = "key" => value, naam se access.',
          'foreach ($a as $k => $v); ksort/asort se sorting.',
          'Records ka array PHP mein database table ka roop hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is a multidimensional array? Explain with an example and a nested foreach loop.',
        answer:
          '**Definition:** jis array ke elements khud array hon use multidimensional array kehte hain. Do level ka array **2D array** hota hai jo table (rows × columns) ki tarah kaam karta hai; `$a[0][1]` ka matlab row 0, column 1.\n\n```php\n$marks = [\n    [78, 82, 90],   // row 0\n    [65, 70, 72],   // row 1\n];\necho $marks[0][1];  // 82\necho $marks[1][2];  // 72\n```\n\n**Nested foreach (HTML table):**\n```php\n<?php\necho "<table border=\'1\'>";\nforeach ($marks as $row) {\n    echo "<tr>";\n    foreach ($row as $v) {\n        echo "<td>$v</td>";\n    }\n    echo "</tr>";\n}\necho "</table>";\n```\n\n**Counting:**\n```php\ncount($marks);                    // 2  (sirf rows)\ncount($marks, COUNT_RECURSIVE);   // 8  (2 rows + 6 values)\n```\n\n**Use:** marksheet, matrix, timetable, records ki table, spreadsheet.\n\n**3D array:** array ke andar array ke andar array — `$data[0][1][2]`.\n\n**Diagram:** Refer to the multidimensional array diagram.\n\n**Exam line:** "Multidimensional array array ke andar array hota hai; pehla index row, doosra column, aur nested foreach se poori table ban jaati hai."',
      },
      {
        question: 'What is an associative array? How is it different from an indexed array? Explain foreach with key and value.',
        answer:
          '**Associative array:** jis array mein keys numbers ki jagah naam (strings) hote hain, aur value `"key" => value` ki tarah likhi jaati hai.\n\n```php\n$student = [\n    "name"   => "Riya",\n    "course" => "MCA",\n    "marks"  => 78,\n];\necho $student["name"];   // Riya\n$student["marks"] = 82;  // update\n```\n\n**Difference:**\n\n| Basis | Indexed | Associative |\n|---|---|---|\n| Key | 0,1,2 (auto) | "name", "marks" (manual) |\n| Access | `$a[0]` | `$a["name"]` |\n| Readability | Kam | Zyada |\n| Sort | `sort()` | `ksort()` / `asort()` |\n| Use | list | record |\n\n**foreach with key → value:**\n```php\nforeach ($student as $k => $v) {\n    echo "$k = $v <br>";\n}\n```\nOutput: name = Riya, course = MCA, marks = 82 (har line par).\n\n**Helpers:**\n```php\narray_keys($student);              // ["name","course","marks"]\narray_values($student);            // ["Riya","MCA",82]\narray_key_exists("marks", $student); // true\n```\n\n**Records:** associative arrays ka array = database table:\n```php\n$students = [\n    ["name" => "Riya", "marks" => 82],\n    ["name" => "Aman", "marks" => 92],\n];\n```\n\n**Diagram:** Refer to the associative array diagram.\n\n**Exam line:** "Associative array mein key naam hoti hai, isliye data position se nahi naam se padha jaata hai — database record ka yahi roop hai."',
      },
      {
        question: 'Write a PHP program to store student records in an associative array and display them in an HTML table with total and average.',
        answer:
          '```php\n<?php\n$students = [\n    ["name" => "Riya", "s1" => 78, "s2" => 82, "s3" => 90],\n    ["name" => "Aman", "s1" => 65, "s2" => 70, "s3" => 72],\n    ["name" => "Sara", "s1" => 88, "s2" => 91, "s3" => 95],\n];\n\necho "<table border=\'1\'>";\necho "<tr><th>Name</th><th>S1</th><th>S2</th><th>S3</th><th>Total</th><th>Avg</th></tr>";\n\nforeach ($students as $s) {\n    $total = $s["s1"] + $s["s2"] + $s["s3"];\n    $avg   = $total / 3;\n\n    echo "<tr>";\n    echo "<td>" . htmlspecialchars($s["name"]) . "</td>";\n    echo "<td>" . $s["s1"] . "</td>";\n    echo "<td>" . $s["s2"] . "</td>";\n    echo "<td>" . $s["s3"] . "</td>";\n    echo "<td>" . $total . "</td>";\n    echo "<td>" . number_format($avg, 2) . "</td>";\n    echo "</tr>";\n}\n\necho "</table>";\n```\n\n**Output:**\n| Name | S1 | S2 | S3 | Total | Avg |\n|---|---|---|---|---|---|\n| Riya | 78 | 82 | 90 | 250 | 83.33 |\n| Aman | 65 | 70 | 72 | 207 | 69.00 |\n| Sara | 88 | 91 | 95 | 274 | 91.33 |\n\n**Explanation:**\n- Har record ek **associative array** hai (`"name"`, `"s1"`...)\n- Inka array = **records ka array** (database table ka roop)\n- `foreach ($students as $s)` — ek-ek record\n- `$s["s1"]` — naam se field access\n- `number_format($avg, 2)` — do decimal\n- `htmlspecialchars()` — output safe\n\n**Aur aage:** `array_column($students, "s1")` se ek field ki saari values, aur `json_encode($students)` se poora table JSON.\n\n**Exam line:** "Records ka array — yani array of associative arrays — PHP mein database table ka roop hai, aur foreach se seedha HTML table ban jaati hai."',
      },
    ],
  },
];
