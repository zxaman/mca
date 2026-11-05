// ============================================================
// WEB TECHNOLOGY — Unit III, topics 3.9 to 3.12 (PHP part 3)
//  3.9  Library functions for array manipulation
//  3.10 Date and Time
//  3.11 Functions and user-defined functions
//  3.12 Object oriented programming using PHP
//
// Output panels use section.php (server stdout) → PhpOutput.
// ============================================================

export const webTechnologyTopicsI = [
  // ==========================================================
  // 3.9 — Array library functions
  // ==========================================================
  {
    id: 'wt-php-array-functions',
    number: '3.9',
    title: 'Array Library Functions',
    subtitle: 'sort se array_map tak — array par kaam karne ke built-in tools',
    icon: 'grid',
    accent: '#c4ff00',
    englishDefinition:
      'PHP ships a large library of built-in array functions that can be grouped by purpose: adding and removing (array_push, array_unshift, array_pop, array_shift, unset), sorting (sort, rsort, asort, arsort, ksort, krsort, usort, uasort, uksort), searching and checking (in_array, array_search, array_key_exists, array_keys, array_values, array_unique, array_diff, array_intersect), slicing and restructuring (array_slice, array_splice, array_merge, array_combine, array_chunk, array_flip, array_reverse), aggregates (count, array_sum, array_product, max, min) and callbacks (array_map, array_filter, array_reduce, array_walk, usort, array_column). Functions differ in what they return and what they change: sort() sorts in place and returns a boolean while resetting keys, asort() keeps the key-value association, in_array() returns true/false, array_search() returns the key or false, array_slice() returns a new array while array_splice() modifies the original, and array_map()/array_filter() always return a new array. Since PHP 7.4 the arrow function fn() => expression makes these callback functions one-liners.',
    intro:
      'Pichle topic mein array banana, padhna aur loop karna dekha; ab us array par kaam karne wale built-in functions. Sabse zaroori farak yeh hai: kuch functions array ko khud badal dete hain (sort, array_push, array_splice) aur kuch naya array return karte hain (array_map, array_filter, array_slice). Aur sort family mein teen tarah — sort (value se, keys reset), asort (value se, keys bachi), ksort (key se). Exam mein yahi table sabse zyada poochhi jaati hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Chhe group, ek hi family',
        body:
          'Array functions ko kaam ke hisaab se baant lein: (1) jodna/hatana — array_push, array_unshift, array_pop, array_shift, unset; (2) sorting — sort, rsort, asort, arsort, ksort, krsort, usort; (3) dhoondhna — in_array, array_search, array_key_exists, array_keys, array_values, array_unique; (4) kaatna/jodna — array_slice, array_splice, array_merge, array_combine, array_chunk; (5) hisaab — count, array_sum, array_product, max, min; (6) callback — array_map, array_filter, array_reduce, array_walk, array_column.',
        body2:
          'Return value pe dhyan dein: sort() true/false deta hai (array in-place sort hota hai), in_array() true/false, array_search() key ya false, array_slice() naya array, array_splice() original badal kar hataye hue elements deta hai. PHP 7.4 ke baad arrow function se callback ek line ka ho gaya: array_map(fn($x) => $x * 2, $marks).',
        chips: ['array_push()', 'sort()', 'asort()', 'in_array()', 'array_slice()', 'array_map()', 'array_filter()', 'array_column()'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Chhe Group, Poore Kaam Ke Saath',
        diagram: 'php-array-functions',
        caption:
          'Har group mein 5 functions — exam mein kisi bhi group se do-teen poochhe jaate hain. Neeche wali strip yaad rakhein: sort/rsort keys reset karte hain, asort/ksort keys bachate hain.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Sorting, Counting aur Unique',
        intro:
          'Dhyan dein array_unique() ke output par: duplicate hat jaate hain par keys nahi badalti — isliye 0, 1, 3 dikhti hain, 0, 1, 2 nahi. Yahi "keys preserve" behaviour exam mein poochha jaata hai.',
        language: 'php',
        filename: 'arrayfunc.php',
        code: `<?php
$a = [5, 3, 9, 1, 7];

sort($a);                          // value se ascending
echo implode(", ", $a) . "\\n";

rsort($a);                         // descending
echo implode(", ", $a) . "\\n";

echo array_sum($a) . " " . max($a) . " " . min($a) . "\\n";
echo count($a) . "\\n";

$b = ["a", "b", "b", "c"];
print_r(array_unique($b));

$scores = ["Riya" => 82, "Aman" => 92, "Sara" => 75];
asort($scores);                    // value se, keys bachi rahengi
print_r($scores);`,
        php: `1, 3, 5, 7, 9
9, 7, 5, 3, 1
25 9 1
5
Array
(
    [0] => a
    [1] => b
    [3] => c
)
Array
(
    [Sara] => 75
    [Riya] => 82
    [Aman] => 92
)`,
        label: 'php arrayfunc.php',
        height: 320,
        caption:
          'array_unique() ne keys nahi badli (0, 1, 3) aur asort() ne naam ke saath marks sort kiye — agar sort() lagate to naam ud jaate aur 0, 1, 2 keys aa jaati.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Callback Functions — array_map, array_filter',
        intro:
          'array_filter() sirf wo elements rakhta hai jinpar condition true ho, aur array_map() har element par function lagata hai. Dono naya array dete hain — original nahi badalta. Arrow function fn() => ... PHP 7.4 se aaya hai.',
        language: 'php',
        filename: 'callback.php',
        code: `<?php
$marks = [78, 45, 91, 62, 30];

// sirf pass marks (40 se zyada)
$pass = array_filter($marks, fn($m) => $m >= 40);
print_r($pass);

// har marks ko double karo
$double = array_map(fn($m) => $m * 2, $marks);
echo implode(", ", $double) . "\\n";

echo "Average: " . array_sum($marks) / count($marks) . "\\n";

// do array jodo, phir hissa nikaalo
$all = array_merge([1, 2], [3, 4]);
echo implode("-", $all) . "\\n";
print_r(array_slice($all, 1, 2));

// keys aur ek column
echo implode(", ", array_keys($marks)) . "\\n";

$students = [["name" => "Riya"], ["name" => "Aman"]];
echo implode(", ", array_column($students, "name")) . "\\n";`,
        php: `Array
(
    [0] => 78
    [2] => 91
    [3] => 62
)
156, 90, 182, 124, 60
Average: 61.2
1-2-3-4
Array
(
    [0] => 2
    [1] => 3
)
0, 1, 2, 3, 4
Riya, Aman`,
        label: 'php callback.php',
        height: 340,
        caption:
          'array_filter() ne keys bacha li ([0], [2], [3]) — sequence todne ke liye array_values() lagayein. Average 61.2 dikhata hai ki aggregate functions seedha kaam karte hain.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'sort vs asort vs ksort',
        columns: ['sort()', 'asort()', 'ksort()'],
        columnColors: ['#ff7ab2', '#00ff88', '#00d4ff'],
        rows: [
          { label: 'Sort kis par', values: ['Values par', 'Values par', 'Keys par'] },
          { label: 'Keys ka kya', values: ['Reset ho jaati hain (0,1,2)', 'Jaisi thi waisi rehti hain', 'Key order badal jaata hai'] },
          { label: 'Kis array ke liye', values: ['Indexed (list)', 'Associative (value se)', 'Associative (naam se)'] },
          { label: 'Return', values: ['true / false', 'true / false', 'true / false'] },
          { label: 'Example', values: ['[9,5] → [0]=>5 [1]=>9', '["b"=>2,"a"=>9] → a=>9, b=>2', '["b"=>2,"a"=>9] → a=>9, b=>2 (key se)'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Array Functions Ke Points',
        points: [
          'Jodna: array_push() end mein, array_unshift() shuru mein; hatana: array_pop() last, array_shift() first.',
          'sort()/rsort() value se sort karke keys reset karte hain; asort()/arsort() keys bachate hain; ksort()/krsort() key se.',
          'usort($a, $fn) custom comparison function se sort karta hai (objects/records ke liye).',
          'in_array() true/false deta hai, array_search() key (na mile to false), array_key_exists() sirf key check karta hai.',
          'array_slice() naya array deta hai, array_splice() original badal deta hai.',
          'array_merge() do arrays jodta hai; array_combine($keys, $values) se key-value jodi banti hai.',
          'array_map() har element par function lagata hai; array_filter() condition ke hisaab se chhaanta hai.',
          'array_reduce($a, $fn, 0) poore array ko ek value mein badal deta hai (jaise total).',
          'array_column($records, "name") se records ke array mein se ek field nikaalte hain.',
          'Sorting/unique ke baad keys sequence tod sakti hain — array_values() se reset karein.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Chhe group: jodna/hatana, sorting, dhoondhna, kaatna/jodna, hisaab, callback.',
          'sort = keys reset, asort = keys bachi, ksort = key se.',
          'in_array true/false · array_search key · array_keys/values.',
          'array_map/array_filter naya array dete hain.',
          'array_sum + count = average; array_column se ek field.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain any eight array manipulation functions in PHP with examples.',
        answer:
          '| Function | Kaam | Example | Output |\n|---|---|---|---|\n| `array_push()` | end mein jodo | `array_push($a, 4)` | ek element bada |\n| `array_pop()` | last hatao | `array_pop($a)` | last value |\n| `array_shift()` | first hatao | `array_shift($a)` | first value |\n| `sort()` | ascending | `sort([3,1,2])` | [1,2,3] (keys reset) |\n| `rsort()` | descending | `rsort([1,3,2])` | [3,2,1] |\n| `in_array()` | value hai? | `in_array(2,[1,2])` | true |\n| `array_search()` | key dhoondo | `array_search(2,[1,2])` | 1 |\n| `array_merge()` | do jodo | `array_merge([1],[2])` | [1,2] |\n| `array_slice()` | hissa | `array_slice([1,2,3],1,2)` | [2,3] |\n| `array_sum()` | total | `array_sum([1,2,3])` | 6 |\n\n```php\n$a = [9, 5, 7];\nsort($a);\necho implode("-", $a);      // 5-7-9\necho array_sum($a);         // 21\necho count($a);             // 3\nvar_dump(in_array(7, $a));  // bool(true)\n```\n\n**Note:** kuch functions array ko badalte hain (`sort`, `array_push`), kuch naya array dete hain (`array_slice`, `array_map`).\n\n**Diagram:** Refer to the array functions diagram.\n\n**Exam line:** "Array functions ko jodna-hatana, sorting, searching, slicing, aggregates aur callbacks — chhe groups mein baant sakte hain."',
      },
      {
        question: 'Differentiate between sort(), asort() and ksort() with examples.',
        answer:
          '| Basis | `sort()` | `asort()` | `ksort()` |\n|---|---|---|---|\n| Sort kis par | values | values | keys |\n| Keys | **reset** ho jaati hain | bachi rehti hain | order badalta hai |\n| Kis array ke liye | indexed | associative | associative |\n| Return | true/false | true/false | true/false |\n| Companion | `rsort()` | `arsort()` | `krsort()` |\n\n```php\n// 1. sort() — keys reset\n$a = [9, 5, 7];\nsort($a);\nprint_r($a);   // [0]=>5 [1]=>7 [2]=>9\n\n// 2. asort() — value se, keys bachi\n$m = ["Riya" => 82, "Aman" => 92, "Sara" => 75];\nasort($m);\nprint_r($m);   // Sara=>75, Riya=>82, Aman=>92\n\n// 3. ksort() — key se\nksort($m);\nprint_r($m);   // Aman=>92, Riya=>82, Sara=>75\n```\n\n**Yaad rakhne ka tareeka:** `a` = association bachao (asort), `k` = key se (ksort), plain `sort` = list ke liye.\n\n**Custom sorting:** `usort($a, fn($x, $y) => $y <=> $x)` descending ke liye.\n\n**Diagram:** Refer to the array functions diagram.\n\n**Exam line:** "sort() values se sort karke keys reset karta hai, asort() values se par keys bachata hai, ksort() keys ke hisaab se sort karta hai."',
      },
      {
        question: 'Explain array_map(), array_filter() and array_reduce() with examples.',
        answer:
          'Teeno **callback** functions hain — ek function argument ke roop mein lete hain (PHP 7.4 ke baad `fn() =>` arrow function se ek line mein).\n\n**1. array_map()** — har element par function lagata hai, naya array deta hai (size same):\n```php\n$a = [1, 2, 3];\n$d = array_map(fn($x) => $x * 2, $a);\nprint_r($d);   // [2, 4, 6]\n```\n\n**2. array_filter()** — sirf wahi elements rakhta hai jinpar condition true ho (size chhota ho sakta hai, **keys bachi rehti hain**):\n```php\n$marks = [78, 45, 91, 30];\n$pass = array_filter($marks, fn($m) => $m >= 40);\nprint_r($pass);   // [0]=>78 [2]=>91\n```\nKeys reset karne ho to `array_values($pass)`.\n\n**3. array_reduce()** — poore array ko ek value mein badal deta hai:\n```php\n$total = array_reduce($marks, fn($carry, $m) => $carry + $m, 0);\necho $total;   // 244\n```\n\n| Function | Input → Output | Size |\n|---|---|---|\n| `array_map` | array → array | same |\n| `array_filter` | array → chhota array | kam |\n| `array_reduce` | array → single value | 1 |\n\n**Diagram:** Refer to the array functions diagram (callback group).\n\n**Exam line:** "array_map badalta hai, array_filter chhaanta hai, array_reduce jod kar ek value banata hai."',
      },
    ],
  },

  // ==========================================================
  // 3.10 — Date and Time
  // ==========================================================
  {
    id: 'wt-php-date-time',
    number: '3.10',
    title: 'Dates and Times',
    subtitle: 'date(), mktime(), strtotime() aur DateTime — server ki ghadi',
    icon: 'clock',
    accent: '#ff8800',
    englishDefinition:
      'PHP stores a point in time internally as a Unix timestamp — the number of seconds elapsed since 1 January 1970 00:00:00 UTC — and converts it to human-readable text with date($format, $timestamp), where $timestamp defaults to the current time from time(). The format string uses single characters: d (day 01–31), D (Mon), l (Monday), m (month 01–12), M (Jan), Y (2026), y (26), H (24-hour), h (12-hour), i (minutes), s (seconds), a (am/pm), N (day of week 1–7), t (days in month), z (day of year) and U (the raw timestamp). Timestamps are created with time(), mktime(hour, minute, second, month, day, year) or strtotime("next Monday", "+1 week", "2026-11-05"), and formatted back with date() or via the object-oriented DateTime class (new DateTime, format(), modify(), diff(), setTimezone()), which also handles daylight-saving and comparisons. Because a timestamp itself is timezone-neutral, the same instant prints differently in different zones, so date_default_timezone_set("Asia/Kolkata") (or the php.ini date.timezone setting) must be set before formatting, and DateTimeZone must be supplied for object-based code. date() only formats; it does not localise month or day names.',
    intro:
      'Date ke peeche ek chhota sa number hota hai: unix timestamp — 1 January 1970 se ab tak ke seconds. date() us number ko format karke text banata hai, time() abhi ka number deta hai, mktime() kisi bhi date ka number banata hai aur strtotime() "next Monday" jaisi English samajh leta hai. Bada trap: timestamp same hota hai par timezone alag hone se dikhne wala time badal jaata hai — isliye pehle date_default_timezone_set("Asia/Kolkata") karein.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Timestamp, format string aur timezone',
        body:
          'Unix timestamp = 1 Jan 1970 00:00:00 UTC se seconds. time() abhi ka timestamp deta hai; date("d-m-Y", $ts) usse readable date banata hai; mktime(0,0,0,11,5,2026) kisi date ka timestamp banata hai; strtotime("+1 week") English text se timestamp banata hai. Format characters: d, D, l, m, M, Y, H, h, i, s, a, U.',
        body2:
          'Object style (recommended): $d = new DateTime("2026-11-05 14:07:42", new DateTimeZone("Asia/Kolkata")); $d->format("d/m/Y"); $d->modify("+1 month"); $d->diff($other)->days. Timezone: date_default_timezone_set("Asia/Kolkata") — warna server UTC par chal kar 5:30 ghante peeche time dega. Localised naam ke liye IntlDateFormatter chahiye hota hai.',
        chips: ['timestamp', 'date()', 'time()', 'mktime()', 'strtotime()', 'DateTime', 'timezone'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Timestamp → Format → Readable Date',
        diagram: 'php-date-time',
        caption:
          'Ek hi timestamp (1793867862) teen tarah se dikhaya gaya hai. Neeche format characters ki table — exam mein date("d-m-Y") ka output poochha jaata hai, aur timezone ki line likhna bonus hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'date() Ke Saath Formatting',
        intro:
          'Har line ka output neeche hai. mktime() ne 5 November 2026 ka timestamp banaya (IST midnight = 1793817000), aur usi timestamp ko teen tarah se format kiya gaya.',
        language: 'php',
        filename: 'date.php',
        code: `<?php
date_default_timezone_set("Asia/Kolkata");

echo date("d-m-Y") . "\\n";
echo date("D, d M Y") . "\\n";
echo date("l") . "\\n";
echo date("H:i:s") . "\\n";

$ts = mktime(0, 0, 0, 11, 5, 2026);
echo $ts . "\\n";
echo date("d-m-Y", $ts) . "\\n";

echo date("d-m-Y", strtotime("+1 week")) . "\\n";
echo date("d/m/Y", strtotime("2026-12-25")) . "\\n";

echo date("t") . " din is mahine mein\\n";
echo date("Y") . "\\n";`,
        php: `05-11-2026
Thu, 05 Nov 2026
Thursday
14:07:42
1793817000
05-11-2026
12-11-2026
25/12/2026
30 din is mahine mein
2026`,
        label: 'php date.php',
        height: 280,
        caption:
          'date("t") us mahine ke din deta hai (November = 30). "+1 week" ne 05-11 ko 12-11 kar diya — strtotime English phrase samajh leta hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'DateTime Object — Difference aur Modify',
        intro:
          'Object style mein timezone, difference aur date arithmetic sab saaf likha jaata hai. diff() ek DateInterval deta hai jisme years, months, days alag-alag milte hain.',
        language: 'php',
        filename: 'datetime.php',
        code: `<?php
$d = new DateTime("2026-11-05 14:07:42", new DateTimeZone("Asia/Kolkata"));

echo $d->format("d/m/Y H:i") . "\\n";

$d->modify("+1 month");
echo $d->format("d/m/Y") . "\\n";

$dob = new DateTime("2004-02-15");
$now = new DateTime("2026-11-05");
$diff = $dob->diff($now);

echo $diff->y . " saal, " . $diff->m . " mahine, " . $diff->d . " din\\n";

$start = new DateTime("2026-11-01");
$end   = new DateTime("2026-11-30");
echo $start->diff($end)->days . " din ka difference\\n";

echo $now > $dob ? "now baad ki date hai" : "pehle ki date hai";
echo "\\n";`,
        php: `05/11/2026 14:07
05/12/2026
22 saal, 8 mahine, 21 din
29 din ka difference
now baad ki date hai`,
        label: 'php datetime.php',
        height: 240,
        caption:
          'Do DateTime objects ko > se compare bhi kar sakte hain. diff() ne 2004-02-15 se 2026-11-05 tak 22 saal 8 mahine 21 din nikale.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Procedural vs Object-Oriented Date',
        columns: ['date() / procedural', 'DateTime object'],
        columnColors: ['#ff8800', '#00ff88'],
        rows: [
          { label: 'Timestamp banana', values: ['time(), mktime(), strtotime()', 'new DateTime("2026-11-05")'] },
          { label: 'Format', values: ['date("d-m-Y", $ts)', '$d->format("d-m-Y")'] },
          { label: 'Timezone', values: ['Global set karna padta hai', 'Har object ke saath de sakte hain'] },
          { label: 'Date arithmetic', values: ['strtotime("+1 week")', '$d->modify("+1 week")'] },
          { label: 'Difference', values: ['Do timestamps ghatao (seconds)', '$d->diff($other)->days'] },
          { label: 'Kab behtar', values: ['Chhota script', 'Bade project, timezone, comparisons'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Date / Time Ke Points',
        points: [
          'Unix timestamp = 1 Jan 1970 00:00:00 UTC se seconds; time() abhi ka deta hai.',
          'date($format, $timestamp) — timestamp optional, default abhi ka waqt.',
          'Format: d (05), D (Thu), l (Thursday), m (11), M (Nov), Y (2026), H (14), i (07), s (42), a (pm), t (month ke din), U (timestamp).',
          'mktime(hour, min, sec, month, day, year) se timestamp banta hai.',
          'strtotime("+1 week"), strtotime("next Monday"), strtotime("2026-12-25") — English phrase se timestamp.',
          'date_default_timezone_set("Asia/Kolkata") — warna UTC ka time dikhega.',
          'DateTime class: format(), modify(), diff(), setTimezone(), comparison (> <).',
          'date() sirf English month/day names deta hai; localisation ke liye IntlDateFormatter.',
          'checkdate(month, day, year) se valid date check kar sakte hain (29 Feb etc.).',
          'Database mein date "Y-m-d" (2026-11-05) format mein store karein, dikhane ke liye "d-m-Y".',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Timestamp = seconds since 1970; time() abhi, mktime() kisi date ka, strtotime() text se.',
          'date("d-m-Y") se readable date, format characters yaad rakhein.',
          'Timezone pehle set karein.',
          'DateTime object mein format/modify/diff sab clean.',
          'DB mein Y-m-d, screen par d-m-Y.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain date() and time() in PHP with the commonly used format characters.',
        answer:
          '**timestamp:** PHP andar se time ko Unix timestamp (1 Jan 1970 00:00:00 UTC se seconds) ki tarah rakhta hai.\n**time():** abhi ka timestamp deta hai.\n**date($format, $timestamp):** timestamp ko readable string banata hai; timestamp na dein to abhi ka waqt.\n\n```php\necho time();              // 1793867862\necho date("d-m-Y");       // 05-11-2026\necho date("D, d M Y");    // Thu, 05 Nov 2026\necho date("H:i:s");       // 14:07:42\n```\n\n**Format characters:**\n| Char | Matlab | Example |\n|---|---|---|\n| `d` | din, 2 digit | 05 |\n| `D` | din ka short naam | Thu |\n| `l` | poora din | Thursday |\n| `m` | mahina | 11 |\n| `M` | mahine ka naam | Nov |\n| `Y` | saal 4 digit | 2026 |\n| `y` | saal 2 digit | 26 |\n| `H` | 24-hour | 14 |\n| `h` | 12-hour | 02 |\n| `i` | minute | 07 |\n| `s` | second | 42 |\n| `a` | am/pm | pm |\n| `t` | mahine ke din | 30 |\n| `U` | timestamp | 1793867862 |\n\n**Note:** `date()` English naam deta hai; Hindi/local naam ke liye `IntlDateFormatter`.\n\n**Diagram:** Refer to the date and time diagram.\n\n**Exam line:** "time() timestamp deta hai aur date() usse format karke readable date banata hai."',
      },
      {
        question: 'Explain mktime() and strtotime() with examples. How do you add days to a date in PHP?',
        answer:
          '**mktime(hour, minute, second, month, day, year)** — kisi date ka timestamp banata hai:\n```php\n$ts = mktime(0, 0, 0, 11, 5, 2026);\necho $ts;                      // 1793817000\necho date("d-m-Y", $ts);       // 05-11-2026\n```\n\n**strtotime(string)** — English phrase se timestamp banata hai:\n```php\necho date("d-m-Y", strtotime("2026-12-25"));   // 25-12-2026\necho date("d-m-Y", strtotime("+1 week"));      // 12-11-2026\necho date("d-m-Y", strtotime("-10 days"));     // 26-10-2026\necho date("d-m-Y", strtotime("next Monday"));  // agla Monday\necho date("d-m-Y", strtotime("+1 month", $ts)); // relative to $ts\n```\n\n**Days add karne ke tareeke:**\n| Tareeka | Code |\n|---|---|\n| strtotime | `date("d-m-Y", strtotime("+7 days"))` |\n| seconds | `date("d-m-Y", time() + 7*24*60*60)` |\n| DateTime | `$d->modify("+7 days")` |\n\n```php\n$d = new DateTime("2026-11-05");\n$d->modify("+7 days");\necho $d->format("d-m-Y");   // 12-11-2026\n```\n\n**Dhyan:** `strtotime()` fail hone par `false` deta hai — `if ($ts === false)` se check karein.\n\n**Diagram:** Refer to the date and time diagram.\n\n**Exam line:** "mktime() number se date banata hai, strtotime() English phrase se — dono timestamp dete hain jise date() format karta hai."',
      },
      {
        question: 'Explain the DateTime class. Why is timezone handling important?',
        answer:
          '**DateTime** object-oriented tareeka hai — date create, format, modify, compare aur difference sab methods se.\n\n```php\n$d = new DateTime("2026-11-05 14:07:42", new DateTimeZone("Asia/Kolkata"));\necho $d->format("d/m/Y H:i");     // 05/11/2026 14:07\n$d->modify("+1 month");\necho $d->format("d/m/Y");         // 05/12/2026\n\n$diff = (new DateTime("2004-02-15"))->diff(new DateTime("2026-11-05"));\necho $diff->y . "y " . $diff->m . "m " . $diff->d . "d";  // 22y 8m 21d\n```\n\n| Method | Kaam |\n|---|---|\n| `format()` | string banao |\n| `modify()` | date badlo (+1 week) |\n| `diff()` | do dates ka antar |\n| `setTimezone()` | zone badlo |\n| `getTimestamp()` | timestamp lo |\n\n**Timezone kyon zaroori:**\n1. Ek hi timestamp duniya mein alag-alag time dikhata hai (UTC 08:37 = IST 14:07)\n2. Server usually UTC par hota hai — bina set kiye user ko galat time dikhega\n3. DST (daylight saving) wale countries mein offset badalta hai\n4. Do servers ke beech date compare karte waqt same zone chahiye\n\n**Set karne ke tareeke:**\n```php\ndate_default_timezone_set("Asia/Kolkata");   // script ke liye\n// php.ini: date.timezone = Asia/Kolkata\n```\n\n**Diagram:** Refer to the date and time diagram.\n\n**Exam line:** "Timestamp timezone-neutral hota hai — dikhane se pehle timezone set karna zaroori hai, warna 5:30 ghante ka farak aa jaata hai."',
      },
    ],
  },

  // ==========================================================
  // 3.11 — Functions and user-defined functions
  // ==========================================================
  {
    id: 'wt-php-functions',
    number: '3.11',
    title: 'Functions & User-Defined Functions',
    subtitle: 'Ek baar likho, baar-baar call karo — parameters aur return',
    icon: 'code',
    accent: '#00d4ff',
    englishDefinition:
      'A function is a named, reusable block of code that takes input through parameters, performs a task and optionally returns a value with the return statement; PHP has two kinds — built-in functions that ship with the language (strlen, count, date, printf, array_map, over 1000 of them) and user-defined functions that the programmer writes with the function keyword. The syntax is function name(type $param = default, ...$rest): returnType { body }, where the type declarations, default values, variadic ...$rest and the return type are all optional but recommended. Functions follow variable scope rules: a variable outside the function is not visible inside it, so values must be passed as arguments or accessed with the global keyword / $GLOBALS array, and a local variable disappears when the function ends unless it is declared static. Arguments are passed by value by default; prefixing a parameter with & passes by reference so the caller variable is modified. PHP also supports variable functions, anonymous functions (closures) with use($x), arrow functions fn($x) => expression (PHP 7.4), recursion, and named arguments (PHP 8). Functions cannot be redeclared, and a missing required argument throws an ArgumentCountError in PHP 8.',
    intro:
      'Function ka matlab: ek kaam ko naam de dena. Ek baar likho, jitni baar chahein call karo — code repeat nahi hota, galti ek jagah theek hoti hai. PHP mein built-in functions (strlen, count, date...) aur user-defined functions (aap khud function keyword se likhte hain). Teen cheezein exam mein poochhi jaati hain: parameters (default ke saath), return value, aur scope. Aur ek chhota trap: function ke andar bahar ka variable nahi dikhta — parameter se bhejna padta hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Function ki shakal',
        body:
          'function greet(string $name = "Riya"): string { return "Hello " . $name; } — function keyword, naam, parameter (type + default), return type, body. Call: greet("Aman") → "Hello Aman". return ke bina function null deta hai aur wahin ruk jaata hai (uske baad ki lines nahi chalti).',
        body2:
          'Prakaar: built-in (strlen, count, date), user-defined (aap likhte hain), parameter/default wale, variadic (...$nums se kitne bhi arguments), closure ($f = function ($x) {...};), arrow function (fn($x) => $x * 2), recursive (khud ko call kare — factorial), aur PHP 8 ke named arguments. & se by-reference parameter banta hai.',
        chips: ['function', 'parameters', 'default value', 'return', 'static', 'closure', 'fn() =>', 'recursion'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Function ka Anatomy, Prakaar aur Call Stack',
        diagram: 'php-functions',
        caption:
          'Upar ek function ki poori line tod kar dikhayi gayi hai — keyword, naam, parameter + default, return type. Neeche chaar prakaar aur scope ka rule. Exam mein syntax + ek example + fayde likhna kaafi hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'User-Defined Functions — Parameter, Return, Variadic',
        intro:
          'Dhyan dein: add(5) mein doosra parameter default 0 le leta hai, isliye 5 aata hai. total(...$nums) kitne bhi arguments le leta hai. inc(&$n) by-reference hai, isliye bahar ka $x badal jaata hai.',
        language: 'php',
        filename: 'functions.php',
        code: `<?php
function greet($name = "Riya") {
    return "Hello " . $name;
}
echo greet() . "\\n";
echo greet("Aman") . "\\n";

function add($a, $b = 0) {
    return $a + $b;
}
echo add(5) . " " . add(5, 3) . "\\n";

function total(...$nums) {
    return array_sum($nums);
}
echo total(10, 20, 30) . "\\n";

function avg(float $a, float $b): float {
    return ($a + $b) / 2;
}
echo avg(78, 65) . "\\n";

function inc(&$n) {      // by reference
    $n++;
}
$x = 5;
inc($x);
echo $x . "\\n";

$double = function ($n) { return $n * 2; };   // closure
echo $double(21) . "\\n";

$triple = fn($n) => $n * 3;                   // arrow fn (PHP 7.4)
echo $triple(4) . "\\n";`,
        php: `Hello Riya
Hello Aman
5 8
60
71.5
6
42
12`,
        label: 'php functions.php',
        height: 260,
        caption:
          'Same function, alag arguments, alag output — yahi reuse hai. By-reference (&) wala example yaad rakhein: uske bina $x 5 hi rehta.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Scope, Static aur Recursion',
        intro:
          'Function ke andar bahar ka $tax nahi dikhta — global keyword se laana padta hai. static $c function ke calls ke beech value yaad rakhta hai, aur recursive function khud ko call karta hai (base condition zaroori).',
        language: 'php',
        filename: 'scope-fn.php',
        code: `<?php
$tax = 0.18;

function bill($amount) {
    // echo $tax;   // Notice: undefined variable
    global $tax;
    return $amount + $amount * $tax;
}
echo bill(1000) . "\\n";

function counter() {
    static $c = 0;
    return ++$c;
}
echo counter() . counter() . counter() . "\\n";

function fact($n) {
    if ($n <= 1) return 1;        // base condition
    return $n * fact($n - 1);     // recursion
}
echo fact(5) . "\\n";

function minMax($arr) {
    return ["min" => min($arr), "max" => max($arr)];
}
print_r(minMax([4, 9, 2]));`,
        php: `1180
123
120
Array
(
    [min] => 2
    [max] => 9
)`,
        label: 'php scope-fn.php',
        height: 240,
        caption:
          'PHP 8 mein function se multiple values return karne ka aasan tareeka: associative array lautao. fact(5) = 120 recursion se nikla.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Built-in vs User-Defined',
        columns: ['Built-in function', 'User-defined function'],
        columnColors: ['#00d4ff', '#c4ff00'],
        rows: [
          { label: 'Kaun likhta', values: ['PHP core', 'Programmer'] },
          { label: 'Example', values: ['strlen(), count(), date()', 'function area($r) { ... }'] },
          { label: 'Declare', values: ['Zaroorat nahi', 'function keyword se'] },
          { label: 'Badal sakte?', values: ['Nahi (extension se hi)', 'Haan, jaisa chahein'] },
          { label: 'Scope', values: ['Global', 'Global (declare hone ke baad)'] },
          { label: 'Fayda', values: ['Tested, fast', 'Business logic, reuse'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Functions Ke Points',
        points: [
          'Function = named reusable block; parameter se input, return se output.',
          'Syntax: function name($param = default): returnType { ... }',
          'Built-in vs user-defined — dono global scope mein available hote hain.',
          'return ke baad function turant khatam; return na ho to null milta hai.',
          'Default parameter last mein rakhein; variadic ...$nums se kitne bhi arguments.',
          'By value (default) vs by reference (&$x) — reference se caller ka variable badalta hai.',
          'Scope: function ke andar bahar ka variable nahi dikhta; global ya parameter use karein.',
          'static variable calls ke beech value yaad rakhta hai (counter/cache ke liye).',
          'Closure (function () {}) aur arrow function (fn() =>) callback ke liye; use($x) se bahar ka variable andar.',
          'Recursion = function khud ko call kare; base condition ke bina infinite loop.',
          'Fayde: code reuse, readability, testing aasan, maintenance aasan.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'function keyword + naam + parameters + body + return.',
          'Default, variadic, by-reference, return type — sab optional par useful.',
          'Scope local hota hai; global/static se control.',
          'Closure aur arrow function callback ke liye.',
          'Recursion ke liye base condition zaroori.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is a function? Explain user-defined functions in PHP with syntax and an example.',
        answer:
          '**Function:** named, reusable code block jo parameters se input leta hai, kaam karta hai aur `return` se output deta hai. Fayde: code reuse, readability, testing aasan, ek jagah badalne se sab jagah asar.\n\n**Syntax:**\n```php\nfunction functionName($param1, $param2 = default) {\n    // body\n    return $value;\n}\n```\n\n**Example:**\n```php\n<?php\nfunction area($length, $breadth = 10) {\n    return $length * $breadth;\n}\n\necho area(5, 4);   // 20\necho area(5);      // 50 (default breadth)\n?>\n```\n\n**Parts:**\n| Part | Matlab |\n|---|---|\n| `function` | keyword |\n| naam | function ka naam (letter/underscore se) |\n| `($param)` | input parameters, default de sakte hain |\n| body | `{ ... }` ke andar ka code |\n| `return` | output; ke baad function khatam |\n\n**Rules:** naam duplicate nahi ho sakta, call declare ke baad, `return` na ho to `null`.\n\n**Diagram:** Refer to the functions diagram.\n\n**Exam line:** "User-defined function `function` keyword se likha jaata hai, parameters se input leta hai aur `return` se value deta hai."',
      },
      {
        question: 'Explain the types of functions in PHP with examples.',
        answer:
          '**1. Built-in** — PHP ke saath aate hain:\n```php\necho strlen("PHP");     // 3\necho count([1,2,3]);    // 3\necho date("d-m-Y");\n```\n\n**2. User-defined** — aap likhte hain:\n```php\nfunction greet($name) { return "Hello " . $name; }\n```\n\n**3. With default parameters:**\n```php\nfunction add($a, $b = 0) { return $a + $b; }\necho add(5);      // 5\necho add(5, 3);   // 8\n```\n\n**4. Variadic** — kitne bhi arguments:\n```php\nfunction total(...$nums) { return array_sum($nums); }\necho total(1, 2, 3);   // 6\n```\n\n**5. By reference:**\n```php\nfunction inc(&$n) { $n++; }\n$x = 5; inc($x); echo $x;   // 6\n```\n\n**6. Anonymous / closure:**\n```php\n$double = function ($n) { return $n * 2; };\necho $double(4);   // 8\n```\n\n**7. Arrow function (PHP 7.4):**\n```php\n$triple = fn($n) => $n * 3;\necho $triple(4);   // 12\n```\n\n**8. Recursive:**\n```php\nfunction fact($n) {\n    return $n <= 1 ? 1 : $n * fact($n - 1);\n}\necho fact(5);   // 120\n```\n\n**Diagram:** Refer to the functions diagram (chaar prakaar).\n\n**Exam line:** "PHP mein built-in aur user-defined functions hote hain; user-defined mein default, variadic, reference, closure aur recursive forms bhi aate hain."',
      },
      {
        question: 'What is variable scope in the context of functions? Explain static and global with examples.',
        answer:
          '**Scope** = variable kahan se dikhta hai.\n\n**1. Local (default):** function ke andar bana variable bahar nahi dikhta, aur bahar ka andar nahi:\n```php\n$x = 10;\nfunction f() {\n    $x = 5;      // alag local $x\n    echo $x;     // 5\n}\nf();\necho $x;         // 10\n```\n\n**2. Global:** andar use karne ke liye `global` ya `$GLOBALS`:\n```php\n$tax = 0.18;\nfunction bill($amt) {\n    global $tax;\n    return $amt + $amt * $tax;\n}\necho bill(1000);   // 1180\n```\n\n**3. Static:** local variable jo calls ke beech value yaad rakhta hai:\n```php\nfunction counter() {\n    static $c = 0;\n    return ++$c;\n}\necho counter();  // 1\necho counter();  // 2\necho counter();  // 3\n```\n\n| Scope | Dikhta kahan | Lifetime |\n|---|---|---|\n| Local | usi function mein | function end |\n| Global | function ke bahar | script end |\n| Static | usi function mein | agli call tak |\n\n**Best practice:** global se bachein — value ko **parameter** se bhejein aur **return** se wapas lein (`function bill($amt, $tax = 0.18)`). Isse function test karna aasan hota hai.\n\n**Diagram:** Refer to the functions diagram (scope ka rule).\n\n**Exam line:** "PHP mein function ka scope local hota hai; `global` se bahar ka variable andar aata hai aur `static` calls ke beech value bachaata hai."',
      },
    ],
  },

  // ==========================================================
  // 3.12 — OOP in PHP
  // ==========================================================
  {
    id: 'wt-php-oop',
    number: '3.12',
    title: 'Object Oriented Programming in PHP',
    subtitle: 'Class, object, constructor, inheritance, interface',
    icon: 'layers',
    accent: '#ff7ab2',
    englishDefinition:
      'Object-oriented programming in PHP organises code around classes and objects instead of loose functions: a class is a blueprint that declares properties (variables that hold data) and methods (functions that act on that data), and an object is an instance of that class created with the new keyword. A class defines a constructor __construct() that runs automatically when the object is created (used to initialise properties) and a destructor __destruct() that runs when the object is destroyed; the pseudo-variable $this refers to the current object, and the scope-resolution operator :: reaches static members and parent classes. Access modifiers control visibility — public (everywhere), protected (the class and its subclasses) and private (only that class) — which is the basis of encapsulation. Inheritance lets a class extend another and override its methods; abstract classes cannot be instantiated and may declare abstract methods that children must implement; interfaces declare a contract of public methods with no body, and a class can implement several of them. PHP supports polymorphism, static members, class constants, final classes/methods, traits for code reuse without inheritance, and namespaces with autoloading (PSR-4) so classes live in their own files.',
    intro:
      'Jab code bada hota hai to functions ka dher sambhalna mushkil ho jaata hai. OOP usi kaam ko "cheezon" mein baant deta hai: Student ek class (blueprint), Riya aur Aman uske objects. Class ke andar data (properties) aur kaam (methods) ek saath rehte hain, aur access modifiers tay karte hain kya bahar dikhega. Exam ke liye chaar pillars — encapsulation, inheritance, polymorphism, abstraction — aur __construct, $this, extends, interface yaad rakhein.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Class, object aur $this',
        body:
          'class Student { public $name; function __construct($n) { $this->name = $n; } function hello() { return "Hi " . $this->name; } } — yahi blueprint hai. $s = new Student("Riya"); se object banta hai, aur $s->hello() method call karta hai. $this us object ko point karta hai jispar method chal raha hai.',
        body2:
          'Access modifiers: public (har jagah), protected (class + child), private (sirf class). Inheritance: class Teacher extends Person — parent ke members mil jaate hain aur method override kar sakte hain. abstract class se seedha object nahi banta; interface sirf method signatures deta hai (implements se lagta hai). static member bina object Class::method() se milta hai. PHP 8 mein constructor promotion (public function __construct(private string $name) {}) bhi hai.',
        chips: ['class', 'object', 'new', '__construct', '$this', 'public/private', 'extends', 'interface', 'static'],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Blueprint se Object tak, aur Chaar Pillars',
        diagram: 'php-oop',
        caption:
          'Ek class se do objects bane — dono ke data alag, methods same. Neeche access modifiers aur chaar pillars. Exam mein class + object + constructor ka example + pillars likhna enough hai.',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Ek Poori Class — Constructor, Private Data, Method',
        intro:
          'marks private hai, isliye bahar se $s->marks nahi padha ja sakta — sirf average() method se. Yahi encapsulation hai. __destruct script ke end par chalta hai, isliye uska message sabse neeche aata hai.',
        language: 'php',
        filename: 'class.php',
        code: `<?php
class Student {
    public $name;
    protected $course;
    private $marks;

    public function __construct($name, $course, $marks) {
        $this->name   = $name;
        $this->course = $course;
        $this->marks  = $marks;
    }

    public function average(): float {
        return array_sum($this->marks) / count($this->marks);
    }

    public function getCourse() {
        return $this->course;
    }

    public function __destruct() {
        echo "Object destroy: " . $this->name . "\\n";
    }
}

$s = new Student("Riya", "MCA", [78, 82, 90]);

echo $s->name . "\\n";
echo $s->getCourse() . "\\n";
echo $s->average() . "\\n";

// echo $s->marks;   // Error: private property`,
        php: `Riya
MCA
83.333333333333
Object destroy: Riya`,
        label: 'php class.php',
        height: 200,
        caption:
          'Private $marks bahar se nahi milta — yahi encapsulation ka practical fayda hai. average() ne teen marks ka mean nikala (250/3 = 83.333333333333).',
      },
      {
        type: 'codeoutput',
        kicker: 'Code + Output',
        title: 'Inheritance, Override aur Interface',
        intro:
          'Teacher class Person se extend hoti hai aur greet() ko override karti hai — par parent ka version parent::greet() se bula leti hai. Assistant interface Payable ko implement karti hai, isliye salary() likhna compulsory hai.',
        language: 'php',
        filename: 'inherit.php',
        code: `<?php
class Person {
    public function __construct(protected string $name) {}

    public function greet(): string {
        return "Hello, " . $this->name;
    }
}

class Teacher extends Person {
    public function __construct(string $name, private string $subject) {
        parent::__construct($name);
    }

    public function greet(): string {        // override
        return parent::greet() . " (" . $this->subject . " teacher)";
    }
}

interface Payable {
    public function salary(): float;
}

class Assistant extends Person implements Payable {
    public function salary(): float {
        return 25000;
    }
}

echo (new Person("Riya"))->greet() . "\\n";
echo (new Teacher("Aman", "PHP"))->greet() . "\\n";

$a = new Assistant("Sara");
echo $a->greet() . "\\n";
echo $a->salary() . "\\n";`,
        php: `Hello, Riya
Hello, Aman (PHP teacher)
Hello, Sara
25000`,
        label: 'php inherit.php',
        height: 200,
        caption:
          'Teen classes, teen behaviour — par sabka greet() same naam se call hua. Yahi polymorphism hai: ek hi method name, object ke hisaab se alag kaam.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Abstract Class vs Interface',
        columns: ['Abstract class', 'Interface'],
        columnColors: ['#ff7ab2', '#00ff88'],
        rows: [
          { label: 'Object banta?', values: ['Nahi (abstract)', 'Nahi (contract)'] },
          { label: 'Keyword', values: ['abstract class ... extends', 'interface ... implements'] },
          { label: 'Methods', values: ['Normal + abstract dono', 'Sirf signature (body nahi)'] },
          { label: 'Properties', values: ['Ho sakti hain', 'Constants hi'] },
          { label: 'Ek class kitne', values: ['Sirf ek parent', 'Kai interface implement kar sakti'] },
          { label: 'Kab use', values: ['Common code share karna ho', 'Sirf rule/contract fix karna ho'] },
        ],
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'PHP OOP Ke Points',
        points: [
          'Class = blueprint, object = instance (new ClassName()).',
          'Properties = data, methods = kaam; $this current object ko point karta hai.',
          '__construct() object banate hi chalta hai, __destruct() object khatam hote waqt.',
          'Access modifiers: public (sab), protected (class + child), private (sirf class).',
          'Encapsulation = data + methods ek jagah, private + getter/setter se protection.',
          'Inheritance = extends; child parent ke members paata hai aur override kar sakta hai (parent:: se original).',
          'Polymorphism = same method name, alag behaviour (override / interface).',
          'Abstraction = abstract class ya interface se sirf zaroori cheez dikhana.',
          'interface sirf method signatures deta hai; ek class kai implement kar sakti hai.',
          'static member ClassName::method() se bina object milta hai; :: operator se.',
          'final class/method ko extend ya override nahi kar sakte; trait code share karta hai.',
          'PHP 8 constructor promotion: public function __construct(private string $name) {}.',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Class blueprint, object instance — new se banta hai.',
          '__construct initialise karta hai, $this object ko point karta hai.',
          'public / protected / private = encapsulation.',
          'extends inheritance, override child mein, parent:: se original.',
          'interface contract; abstract class adhoora blueprint.',
          'Static, final, trait, namespace — PHP OOP ke extra tools.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'What is OOP? Explain class, object, properties and methods in PHP with an example.',
        answer:
          '**OOP:** programming ka tareeka jisme code **classes aur objects** ke aas-paas organise hota hai — data (properties) aur us data par kaam karne wale functions (methods) ek saath rehte hain.\n\n| Term | Matlab |\n|---|---|\n| Class | blueprint / template |\n| Object | class se bana instance |\n| Property | class ka variable (data) |\n| Method | class ka function (kaam) |\n| `$this` | current object |\n\n**Example:**\n```php\n<?php\nclass Student {\n    public $name;\n    private $marks;\n\n    public function __construct($name, $marks) {\n        $this->name  = $name;\n        $this->marks = $marks;\n    }\n\n    public function result() {\n        return $this->name . " got " . $this->marks;\n    }\n}\n\n$s = new Student("Riya", 82);\necho $s->name;      // Riya\necho $s->result();  // Riya got 82\n?>\n```\n\n**Fayde:** code reuse (inheritance), data hiding (encapsulation), modular code, bade project maintain karna aasan, real-world modelling.\n\n**Diagram:** Refer to the OOP diagram.\n\n**Exam line:** "Class blueprint hoti hai aur object uska instance; properties data rakhti hain aur methods us data par kaam karte hain."',
      },
      {
        question: 'Explain the four pillars of OOP with PHP examples.',
        answer:
          '**1. Encapsulation** — data + methods ko ek capsule mein rakhna aur data ko private karke getter/setter se access dena.\n```php\nclass Bank {\n    private $balance = 0;\n    public function deposit($amt) { $this->balance += $amt; }\n    public function getBalance() { return $this->balance; }\n}\n```\n\n**2. Inheritance** — child class parent ke members paata hai (`extends`), aur zaroorat par override karta hai.\n```php\nclass Person {\n    public function __construct(public $name) {}\n    public function greet() { return "Hi " . $this->name; }\n}\nclass Teacher extends Person {\n    public function greet() { return parent::greet() . " (teacher)"; }\n}\n```\n\n**3. Polymorphism** — same method name, object ke hisaab se alag behaviour (override ya interface):\n```php\nforeach ([new Person("Riya"), new Teacher("Aman")] as $p) {\n    echo $p->greet();   // alag-alag output\n}\n```\n\n**4. Abstraction** — sirf zaroori cheez dikhana, andar ka detail chhupana (`abstract class`, `interface`):\n```php\ninterface Payable { public function salary(): float; }\nclass Assistant implements Payable {\n    public function salary(): float { return 25000; }\n}\n```\n\n| Pillar | Keyword | Fayda |\n|---|---|---|\n| Encapsulation | private / getter | data safe |\n| Inheritance | extends | reuse |\n| Polymorphism | override / interface | flexible code |\n| Abstraction | abstract / interface | simple interface |\n\n**Diagram:** Refer to the OOP diagram (chaar pillars).\n\n**Exam line:** "Encapsulation data chhupata hai, inheritance code reuse karta hai, polymorphism ek naam se alag behaviour deta hai aur abstraction sirf zaroori cheez dikhata hai."',
      },
      {
        question: 'Differentiate between abstract class and interface. Explain constructor and destructor.',
        answer:
          '**Abstract class vs Interface:**\n\n| Basis | Abstract class | Interface |\n|---|---|---|\n| Object | nahi banta | nahi banta |\n| Keyword | `abstract class` + `extends` | `interface` + `implements` |\n| Methods | normal + abstract | sirf signature |\n| Properties | ho sakti hain | sirf constants |\n| Kitne | ek hi parent | kai interface |\n| Kab | common code share karna | contract fix karna |\n\n```php\nabstract class Shape {\n    abstract public function area(): float;\n    public function describe() { return "Area = " . $this->area(); }\n}\nclass Circle extends Shape {\n    public function __construct(private float $r) {}\n    public function area(): float { return 3.14 * $this->r * $this->r; }\n}\n```\n\n**Constructor `__construct()`:** object banate hi apne aap chalta hai — properties initialise karta hai.\n```php\nclass Student {\n    public function __construct(public $name) {}\n}\n$s = new Student("Riya");   // constructor chala\n```\n\n**Destructor `__destruct()`:** object destroy hone par chalta hai (script end ya `unset()`) — file band karna, connection close karna.\n```php\nclass Log {\n    public function __destruct() { echo "band ho gaya"; }\n}\n```\n\n| | Constructor | Destructor |\n|---|---|---|\n| Naam | `__construct()` | `__destruct()` |\n| Kab | object banate waqt | object khatam hote waqt |\n| Kaam | initialise | cleanup |\n| Arguments | le sakta hai | nahi |\n\n**Diagram:** Refer to the OOP diagram.\n\n**Exam line:** "Abstract class adhoora blueprint hai jisme normal code bhi ho sakta hai, interface sirf contract — aur constructor object banate hi chalta hai, destructor khatam hote waqt."',
      },
    ],
  },
];
