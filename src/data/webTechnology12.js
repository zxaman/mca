// ============================================================
// WEB TECHNOLOGY — Unit V, topics 5.1 to 5.12 (AngularJS + Next.js)
//  5.1  Introduction to JavaScript Frameworks
//  5.2  Overview of AngularJS
//  5.3  Features of AngularJS
//  5.4  Advantages of AngularJS
//  5.5  MVC Architecture in AngularJS
//  5.6  Applications of AngularJS
//  5.7  AngularJS Expressions and Directives
//  5.8  AngularJS Modules and Controllers
//  5.9  AngularJS Forms and Two-Way Data Binding
// 5.10 Validation Directives in AngularJS
// 5.11  Introduction to Next.js
// 5.12  Key Features of Next.js
//
// Output panels use section.php (rendered output) + outputHint/outputNote.
// ============================================================

export const webTechnologyTopicsL = [
  {
    "id": "js-frameworks",
    "number": "5.1",
    "title": "Introduction to JavaScript Frameworks",
    "subtitle": "Library vs framework, SPA aur 2010 se aaj tak ka safar",
    "icon": "puzzle",
    "accent": "#ff8800",
    "englishDefinition": "A JavaScript framework is a ready-made, opinionated collection of JavaScript code and conventions that provides the skeleton of a web application - components, templates, routing, state management, data binding and often a build tool - so the developer fills in application-specific logic instead of rebuilding structure. The key distinction is inversion of control: with a library such as jQuery or Lodash the developer calls the code, while with a framework such as AngularJS, React or Vue the framework calls the developer's code (the Hollywood principle). Frameworks are grouped as client-side MVC/MVVM frameworks (AngularJS, Angular, Ember, Backbone, Knockout), component libraries (React, Vue, Svelte, Preact), meta / full-stack frameworks (Next.js, Nuxt, Remix, SvelteKit) and utility or CSS libraries (jQuery, Lodash, Bootstrap, Tailwind). They became popular because single-page applications (SPAs) move rendering to the browser and need routing, templates, reactivity, data binding and dependency injection to stay maintainable; AngularJS (2010) was the first mainstream framework to bring MVC, two-way binding and dependency injection into HTML, and its successor Angular (2+), React (2013) and Vue (2014) define today's mainstream, with Next.js adding server-side rendering and file-based routing on top of React.",
    "intro": "Purushe JavaScript se DOM ko haath se badalna padta tha — `document.getElementById`, `innerHTML`, event listeners… bade app mein ye code jungle ban jaata hai. **Framework** isi kaam ko structure deta hai: template, routing, data binding, state — sab built-in. Sabse pehle **AngularJS (2010)** ne HTML ko extend karke ye idea popular kiya; phir React (library), Vue, Angular (2+) aur Next.js aaye. Ek line yaad rakho: **library = aap code ko call karte ho, framework = framework aapke code ko call karta hai** (inversion of control).",
    "sections": [
      {
        "type": "definition",
        "title": "Framework kya hai",
        "kicker": "Definition",
        "body": "JavaScript framework ek **pre-written code + rules ka dhancha** hai jo web app ka skeleton deta hai — components, templates, routing, data binding, state management, aur aksar build tooling. Developer sirf app ka apna logic bharta hai.",
        "body2": "Sabse important concept **inversion of control** hai. **Library** mein aap control karte ho (jQuery: `$('#id').hide()`), **framework** mein framework control karta hai aur aapke functions ko sahi waqt par call karta hai (AngularJS: `ng-app` se bootstrap, aap sirf controller/handler likhte ho). Isi liye framework ko jaanna = uske lifecycle aur rules ko jaanna.",
        "chips": [
          "inversion of control",
          "SPA",
          "components",
          "routing",
          "data binding",
          "build tools"
        ]
      },
      {
        "type": "cards",
        "title": "Framework ke types",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "layers",
            "title": "Client-side MVC / MVVM",
            "body": "AngularJS (1.x), Angular (2+), Ember, Backbone, Knockout — structure + binding dete hain."
          },
          {
            "icon": "puzzle",
            "title": "Component libraries",
            "body": "React, Vue, Svelte, Preact — UI ko components mein todte hain; routing/state alag libraries se."
          },
          {
            "icon": "globe",
            "title": "Meta / full-stack",
            "body": "Next.js (React), Nuxt (Vue), Remix, SvelteKit — routing + SSR/SSG + API routes built-in."
          },
          {
            "icon": "zap",
            "title": "Utility libraries",
            "body": "jQuery (DOM + AJAX), Lodash (data), Axios (HTTP), D3 (charts) — chhota kaam, bada effect."
          },
          {
            "icon": "layout",
            "title": "CSS frameworks",
            "body": "Bootstrap, Tailwind, Bulma — layout aur components ka CSS ready."
          },
          {
            "icon": "terminal",
            "title": "Build tooling",
            "body": "npm/yarn, Vite, webpack, Babel, ESLint — bundling, transpile, lint, dev server."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Library vs Framework",
        "kicker": "Comparison",
        "columns": [
          "Library (jQuery)",
          "Framework (AngularJS)"
        ],
        "rows": [
          {
            "label": "Control",
            "values": [
              "aap code ko call karte ho",
              "framework aapka code call karta hai"
            ]
          },
          {
            "label": "Scope",
            "values": [
              "ek kaam (DOM, AJAX)",
              "poora app structure"
            ]
          },
          {
            "label": "Structure",
            "values": [
              "koi rule nahi",
              "apne rules (module, controller, template)"
            ]
          },
          {
            "label": "Code",
            "values": [
              "`$(\"#box\").show()`",
              "`<div ng-show=\"ok\">`"
            ]
          },
          {
            "label": "Swap karna",
            "values": [
              "easy — chhoti dependency",
              "mushkil — poora app usi par"
            ]
          },
          {
            "label": "Example",
            "values": [
              "jQuery, Lodash, Axios",
              "AngularJS, Angular, Ember, Vue"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Wahi kaam, do tarike — counter",
        "code": "<!-- A. Vanilla JS: DOM khud badalna padta hai -->\n<p>Count: <span id=\"n\">0</span></p>\n<button onclick=\"inc()\">+1</button>\n<script>\n  let c = 0;\n  function inc() {\n    c = c + 1;\n    document.getElementById(\"n\").textContent = c;   // manual DOM\n  }\n</script>\n\n<!-- B. AngularJS: sirf data bolo, DOM khud badalta hai -->\n<div ng-app ng-init=\"c = 0\">\n  <p>Count: {{ c }}</p>\n  <button ng-click=\"c = c + 1\">+1</button>\n</div>",
        "language": "html",
        "filename": "counter.html",
        "php": "Screen (dono mein same):\n\nCount: 3\n[ +1 ]\n\nVanilla: 3 lines DOM code, har naye field ke liye naya code\nAngularJS: {{ c }} aur ng-click — HTML mein hi logic",
        "label": "Rendered output",
        "height": 210,
        "outputHint": "Browser output",
        "outputNote": "Dono examples browser mein chalte hain — farq approach ka hai: vanilla mein DOM code, AngularJS mein binding.",
        "intro": "Farq sirf syntax ka nahi — approach ka hai: vanilla mein aap DOM badalte ho, AngularJS mein **model** badalta hai aur DOM apne aap update hota hai."
      },
      {
        "type": "points",
        "title": "JavaScript frameworks ka safar",
        "kicker": "Timeline",
        "points": [
          "**2006 — jQuery:** DOM selectors + AJAX ne cross-browser dard khatam kiya; abhi bhi 70%+ sites par.",
          "**2010 — AngularJS (1.x):** Google (Misko Hevery) — pehla mainstream **MVC + two-way binding + DI** framework, HTML ko directives se extend kiya.",
          "**2013 — React:** Facebook — **component + virtual DOM**, library not framework; JSX ne UI ko JS mein laaya.",
          "**2014 — Vue:** Evan You — React ke ideas + AngularJS jaisa template, learning curve aasan.",
          "**2016 — Angular (2+):** AngularJS ka complete rewrite — TypeScript, components, RxJS; AngularJS **Dec 2021 mein EOL**.",
          "**2016+ — Next.js / Nuxt / SvelteKit:** meta-frameworks — **SSR/SSG + file-based routing** built-in, SEO aur performance ke liye.",
          "**Aaj:** React sabse zyada use, Angular enterprise mein, Vue mid-size projects mein, Svelte/Solid performance-first; Next.js React ka default production choice."
        ]
      },
      {
        "type": "diagram",
        "title": "JavaScript frameworks ka landscape",
        "kicker": "Diagram",
        "diagram": "wt5-frameworks",
        "caption": "Library vs framework, SPA ka flow, aur 2006 se aaj tak ka timeline"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Framework** = ready structure + rules; **library** = ek kaam ka tool.",
          "**Inversion of control:** framework aapke code ko call karta hai (AngularJS `ng-app` se bootstrap).",
          "**Types:** MVC/MVVM frameworks, component libraries, meta-frameworks, utility/CSS libraries.",
          "**SPA:** ek HTML shell, client-side routing, browser mein render — isi liye framework chahiye.",
          "**Timeline:** jQuery 2006 → AngularJS 2010 → React 2013 → Vue 2014 → Angular 2016 → Next.js 2016.",
          "**AngularJS EOL:** Dec 2021 — padhne ke liye important, naye project ke liye Angular/React/Next.js."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is a JavaScript framework? Explain library vs framework and the types of frameworks.",
        "answer": "**JavaScript framework** ek pre-written code aur conventions ka set hai jo web application ka skeleton deta hai — components, templates, routing, data binding, state management aur build tooling — taaki developer app ka apna logic likhe, structure dobara na banaye.\n\n**Library vs Framework (inversion of control):**\n\n| Point | Library | Framework |\n|---|---|---|\n| Control | aap library ko call karte ho | framework aapke code ko call karta hai |\n| Scope | ek kaam | poora app structure |\n| Freedom | koi rule nahi | framework ke rules follow karo |\n| Example | jQuery, Lodash, Axios | AngularJS, Angular, Ember, Vue |\n\n**Example:** jQuery mein `$(\"#box\").hide()` aap likhte ho; AngularJS mein `<div ng-show=\"ok\">` likhte ho aur framework digest cycle mein DOM khud update karta hai.\n\n**Types of frameworks:**\n\n1. **MVC / MVVM frameworks** — AngularJS, Angular, Ember, Backbone, Knockout (structure + binding).\n2. **Component libraries** — React, Vue, Svelte, Preact (UI components; routing/state alag).\n3. **Meta / full-stack frameworks** — Next.js, Nuxt, Remix, SvelteKit (SSR/SSG + routing + API).\n4. **Utility libraries** — jQuery, Lodash, Axios, D3 (chhota focused kaam).\n5. **CSS frameworks** — Bootstrap, Tailwind (styling).\n6. **Build tooling** — npm, Vite, webpack, Babel, ESLint.\n\n**Kyun zaroori:** SPA mein rendering browser mein hoti hai — routing, reactivity, reusable components aur testability ke bina code maintain karna mushkil ho jaata hai.\n\n**Diagram:** Refer to the JavaScript frameworks ka landscape diagram."
      },
      {
        "question": "Explain the evolution of JavaScript frameworks from jQuery to Next.js.",
        "answer": "Frameworks ka safar teen phases mein samajh sakte ho: DOM helper → SPA framework → meta-framework.\n\n**1. 2006 — jQuery (library)**\n- Cross-browser DOM selectors, events, AJAX: `$(\"#a\").addClass(\"on\")`.\n- Problem solved: browser inconsistency. Problem baaki: bade app mein code structure nahi.\n\n**2. 2010 — AngularJS 1.x (framework)**\n- Google (Misko Hevery) — **MVC/MVVM + two-way data binding + dependency injection**.\n- HTML directives se extend hua: `ng-app`, `ng-model`, `ng-repeat`.\n- Manual DOM manipulation khatam — model badlo, view khud badle.\n\n**3. 2013 — React (library)**\n- Facebook — **component-based** UI + **virtual DOM** + JSX.\n- One-way data flow, state per component; routing/state ke liye alag libraries.\n\n**4. 2014 — Vue**\n- React ke ideas + AngularJS jaisa template syntax; progressive adoption, aasan learning curve.\n\n**5. 2016 — Angular 2+**\n- Complete rewrite (TypeScript, components, RxJS); AngularJS **Dec 2021 mein EOL** ho gaya.\n\n**6. 2016+ — Next.js, Nuxt, SvelteKit (meta-frameworks)**\n- React/Vue/Svelte ke upar: **file-based routing**, **SSR/SSG**, API routes, image optimisation, code splitting.\n- SEO + first paint ka problem solve — pure SPA ki kami thi.\n\n**Trend:** imperative DOM → declarative templates → components → server-rendered hybrid (SSR + hydration).\n\n**Diagram:** Refer to the JavaScript frameworks ka landscape diagram."
      },
      {
        "question": "What is a single-page application (SPA)? What role do frameworks play in it?",
        "answer": "**SPA (single-page application)** ek web app hai jo **ek hi HTML page** load karta hai; uske baad saare view changes **JavaScript** se hote hain — server se sirf data (JSON) aata hai, poora page reload nahi hota.\n\n**SPA ka flow:**\n1. Browser `index.html` + bundle (JS/CSS) load karta hai.\n2. Framework bootstrap hota hai (AngularJS: `ng-app`, React: `createRoot`).\n3. **Client-side router** URL dekh kar view render karta hai (`/students`, `/students/21`).\n4. Data `fetch`/`$http`/AJAX se aata hai, DOM update hota hai — reload nahi.\n\n**Frameworks ka role:**\n\n| Zaroorat | Framework ka solution |\n|---|---|\n| Routing | AngularJS ngRoute, React Router, Next.js file routes |\n| Templating | directives + expressions, JSX, SFC |\n| Data binding | `ng-model`, one-way/two-way binding |\n| State | `$scope`, services, Redux, signals |\n| HTTP | `$http`, `$resource`, fetch, Axios |\n| Structure | modules, components, controllers, DI |\n| Testing | Karma/Jasmine, Jest |\n\n**SPA ke fayde:** fast navigation, app jaisa feel, kam server load.\n**SPA ki kami:** pehla load bhaari, SEO kamzor, JS band ho to page khaali — isi liye **Next.js jaise meta-frameworks SSR/SSG add karte hain**.\n\n**Diagram:** Refer to the JavaScript frameworks ka landscape diagram."
      }
    ]
  },
  {
    "id": "angularjs-overview",
    "number": "5.2",
    "title": "Overview of AngularJS",
    "subtitle": "Google ka MVC framework — ng-app se poora app",
    "icon": "globe",
    "accent": "#ff5252",
    "englishDefinition": "AngularJS (Angular 1.x) is an open-source, client-side JavaScript framework maintained by Google (created by Misko Hevery, first released in 2010) for building single-page applications. Instead of manipulating the DOM imperatively, it extends HTML with declarative directives (ng-app, ng-model, ng-repeat, ng-click) and evaluates AngularJS expressions ({{ }}) inside the page, keeping the view in sync with the model through two-way data binding and a digest cycle. An application is bootstrapped by ng-app or angular.bootstrap(), organised into modules (angular.module), controlled by controllers that own a $scope, and built from services/factories injected through dependency injection, with filters for display formatting, services such as $http and $q for data and promises, and ngRoute for routing. AngularJS follows the MVC/MVVM pattern, uses jqLite (a small jQuery subset) and is tested with Karma and Jasmine. It reached end of life on 31 December 2021, so new projects use Angular (2+), React, Vue or Next.js, but AngularJS remains a standard MCA exam topic for the concepts of binding, directives, DI and modules.",
    "intro": "**AngularJS** = Google ka 2010 wala framework jo HTML ko **declarative** bana deta hai. Aap `document.getElementById` nahi likhte — bas `ng-model` se input ko variable se jodte ho, `{{ }}` se value dikhate ho, aur framework **digest cycle** mein DOM update kar deta hai. App `ng-app` se start hota hai, modules mein banti hai, controllers `$scope` rakhte hain, aur services **dependency injection** se milti hain. Exam mein 'overview + features + two-way binding' ka combo aata hai; aur ye bhi ki AngularJS 1.x **Dec 2021** mein EOL ho gaya.",
    "sections": [
      {
        "type": "definition",
        "title": "AngularJS kya hai",
        "kicker": "Definition",
        "body": "**AngularJS (Angular 1.x)** ek open-source, client-side **JavaScript framework** hai jo Google ne banaya (Misko Hevery, 2009–2010) SPA banane ke liye. Ye HTML ko **directives** se extend karta hai (`ng-app`, `ng-model`, `ng-repeat`) aur page ke andar **expressions** `{{ }}` evaluate karta hai.",
        "body2": "Sabse bada idea: **DOM manually mat badlo** — model badlo, framework view ko sync karta hai (two-way data binding + digest cycle). App **module** mein organised hoti hai, **controller** `$scope` rakhta hai, aur **services** dependency injection se milti hain.",
        "chips": [
          "ng-app",
          "two-way binding",
          "directives",
          "modules",
          "controllers",
          "$scope",
          "DI"
        ]
      },
      {
        "type": "cards",
        "title": "Building blocks",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "puzzle",
            "title": "Module",
            "body": "`angular.module('app', [])` — app ka container; controllers, services, directives isi par register hote hain."
          },
          {
            "icon": "user",
            "title": "Controller",
            "body": "`ng-controller` se view ko jodta hai; `$scope` mein model rakhta hai; business logic yahan."
          },
          {
            "icon": "code",
            "title": "Expression",
            "body": "`{{ 5 + 3 }}`, `{{ student.name }}` — template mein value; controller ke scope se aati hai."
          },
          {
            "icon": "zap",
            "title": "Directive",
            "body": "`ng-model`, `ng-repeat`, `ng-if`, `ng-click` — HTML ko behaviour dete hain; custom bhi bana sakte ho."
          },
          {
            "icon": "plug",
            "title": "Service / Factory",
            "body": "Reusable logic (data, $http, helper) — DI se controller mein inject hoti hai."
          },
          {
            "icon": "check",
            "title": "Filter",
            "body": "`{{ price | currency }}`, `{{ name | uppercase }}`, `date`, `filter`, `orderBy` — display format."
          }
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Poora chhota AngularJS app",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js\"></script>\n</head>\n<body ng-app=\"collegeApp\" ng-controller=\"StudentCtrl\">\n\n  <h2>{{ title }}</h2>\n\n  <input type=\"text\" ng-model=\"newName\" placeholder=\"Name\" />\n  <button ng-click=\"add()\">Add</button>\n\n  <ul>\n    <li ng-repeat=\"s in students\">\n      {{ $index + 1 }}. {{ s.name | uppercase }} — {{ s.marks }}\n    </li>\n  </ul>\n\n  <p>Total students: {{ students.length }}</p>\n\n  <script>\n    angular.module(\"collegeApp\", [])\n      .controller(\"StudentCtrl\", function ($scope) {\n        $scope.title = \"MCA Students\";\n        $scope.students = [\n          { name: \"Riya\", marks: 88 },\n          { name: \"Aman\", marks: 76 }\n        ];\n        $scope.add = function () {\n          if (!$scope.newName) return;\n          $scope.students.push({ name: $scope.newName, marks: 0 });\n          $scope.newName = \"\";\n        };\n      });\n  </script>\n</body>\n</html>",
        "language": "html",
        "filename": "index.html",
        "php": "MCA Students\n\n[ Neha          ] [ Add ]\n\n1. RIYA — 88\n2. AMAN — 76\n3. NEHA — 0        <- add ke baad, bina page reload\n\nTotal students: 3",
        "label": "Rendered output",
        "height": 250,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "`ng-app` bootstrap karta hai, `ng-controller` scope deta hai, `ng-repeat` list banata hai, aur `ng-click` se array mein item add hota hai — DOM ko haath nahi lagaya."
      },
      {
        "type": "points",
        "title": "AngularJS andar se kaise chalta hai",
        "kicker": "Internals",
        "points": [
          "**Bootstrap:** `ng-app` (ya `angular.bootstrap(document, ['app'])`) — injector banta hai, modules load hote hain.",
          "**$injector + DI:** controller/service ke arguments ke naam dekh kar dependencies inject hoti hain (minification-safe ke liye array notation).",
          "**$scope:** controller aur view ke beech ka pul; child scopes prototype se inherit karte hain.",
          "**Digest cycle:** `$watch` list check hoti hai; change milne par DOM update; `$apply()` se Angular ke bahar ka change digest mein aata hai.",
          "**Compile + link:** template ke directives compile hote hain, phir scope se link hoke render hote hain.",
          "**Batarang:** Chrome extension se scope tree aur performance profile dekhi jaati hai."
        ]
      },
      {
        "type": "comparison",
        "title": "AngularJS (1.x) vs Angular (2+)",
        "kicker": "Comparison",
        "columns": [
          "AngularJS 1.x",
          "Angular 2+"
        ],
        "rows": [
          {
            "label": "Language",
            "values": [
              "JavaScript",
              "TypeScript"
            ]
          },
          {
            "label": "Architecture",
            "values": [
              "MVC + $scope",
              "components + services"
            ]
          },
          {
            "label": "Binding",
            "values": [
              "two-way (ng-model)",
              "one-way default + [(ngModel)]"
            ]
          },
          {
            "label": "Change detection",
            "values": [
              "digest cycle",
              "zone.js / signals"
            ]
          },
          {
            "label": "Mobile",
            "values": [
              "weak",
              "designed for mobile"
            ]
          },
          {
            "label": "Status",
            "values": [
              "EOL Dec 2021",
              "actively supported"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#00e676"
        ]
      },
      {
        "type": "diagram",
        "title": "AngularJS architecture overview",
        "kicker": "Diagram",
        "diagram": "wt5-overview",
        "caption": "ng-app bootstrap → module → controller + $scope → directives/expressions render → digest cycle update"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**AngularJS (1.x):** Google ka 2010 ka JS framework, SPA ke liye; HTML ko directives se extend karta hai.",
          "**Bootstrap:** `ng-app` → module load → injector → controller + scope.",
          "**Building blocks:** module, controller, $scope, expression, directive, service/factory, filter.",
          "**Two-way binding:** `ng-model` + digest cycle se view-model sync.",
          "**DI:** services inject hoti hain; minification ke liye array notation.",
          "**Status:** AngularJS Dec 2021 EOL — concepts exam ke liye, naya project Angular/React/Next.js par."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is AngularJS? Explain its architecture and building blocks.",
        "answer": "**AngularJS (Angular 1.x)** ek open-source, client-side **JavaScript framework** hai (Google, 2010) jo single-page applications banane ke liye use hota hai. Ye HTML ko directives se extend karta hai aur two-way data binding ke through view ko model ke saath sync rakhta hai.\n\n**Architecture (flow):**\n1. **ng-app** page ko bootstrap karta hai.\n2. **Module** (`angular.module`) controllers, services, directives register karta hai.\n3. **$injector** dependency injection karta hai.\n4. **Controller + $scope** model rakhte hain.\n5. **Template** (directives + `{{ }}`) compile/link hoke render hota hai.\n6. **Digest cycle** mein `$watch` changes dekhta hai aur DOM update karta hai.\n\n**Building blocks:**\n\n| Block | Kaam | Example |\n|---|---|---|\n| Module | app ka container | `angular.module(\"app\", [])` |\n| Controller | view ka logic, $scope | `ng-controller=\"StudentCtrl\"` |\n| Expression | template mein value | `{{ student.name }}` |\n| Directive | HTML ko behaviour | `ng-repeat`, `ng-model` |\n| Service/Factory | reusable logic, data | `$http`, custom service |\n| Filter | display format | `currency`, `uppercase`, `date` |\n| $scope | controller ↔ view pul | `$scope.students = [...]` |\n\n**Chhota example:**\n```javascript\nangular.module(\"app\", [])\n  .controller(\"StudentCtrl\", function ($scope) {\n    $scope.students = [{ name: \"Riya\", marks: 88 }];\n  });\n```\n\n**Note:** AngularJS (1.x) 31 Dec 2021 ko EOL ho gaya; Angular (2+) uska rewrite hai (TypeScript + components).\n\n**Diagram:** Refer to the AngularJS architecture overview diagram."
      },
      {
        "question": "Explain the difference between AngularJS and Angular (2+).",
        "answer": "Dono Google ke frameworks hain, par Angular 2+ ek **complete rewrite** hai.\n\n| Point | AngularJS 1.x | Angular 2+ |\n|---|---|---|\n| Release | 2010 | 2016 |\n| Language | JavaScript | TypeScript |\n| Architecture | MVC + `$scope` | components + services |\n| Binding | two-way default (`ng-model`) | one-way default, `[(ngModel)]` for two-way |\n| Change detection | digest cycle (`$watch`) | zone.js / signals |\n| Templates | directives in HTML | HTML + property/event binding |\n| Mobile | weak (desktop-first) | mobile-first |\n| Routing | `ngRoute` | `@angular/router` |\n| Structure | modules + controllers | NgModules + components + DI |\n| Build | script tag | CLI + webpack/esbuild |\n| Status | **EOL Dec 2021** | actively supported |\n\n**Naam ka confusion:** AngularJS = 1.x (JavaScript, `ng-*` directives). Angular = 2+ (TypeScript, components). Dono ek doosre ke upgrade nahi — migration rewrite hota hai.\n\n**Kya same raha:** dependency injection, modules ka concept, directives/component idea, testing culture.\n\n**Exam line:** \"AngularJS HTML ko extend karta hai; Angular 2+ HTML ko component tree se replace karta hai.\"\n\n**Diagram:** Refer to the AngularJS architecture overview diagram."
      },
      {
        "question": "Explain the digest cycle and two-way data binding in AngularJS.",
        "answer": "**Two-way data binding** ka matlab: model badle to view update, view badle (user type kare) to model update.\n\n**Kaise connect hota hai:**\n```html\n<input type=\"text\" ng-model=\"name\" />\n<p>Hello {{ name }}</p>\n```\n- `ng-model` input ko `$scope.name` se jodta hai.\n- User type kare → `ng-model` `$scope.name` update karta hai.\n- `{{ name }}` wahi scope value padhta hai → screen update.\n\n**Digest cycle (andar ka mechanism):**\n1. `ng-model` input event par `$setViewValue` chalta hai aur `$apply()` call hota hai.\n2. `$apply()` `$digest()` shuru karta hai.\n3. `$digest` saare `$watch` expressions dobara evaluate karta hai (dirty checking loop).\n4. Agar value badli → listener chalta hai → DOM update.\n5. Jab tak koi watch dirty na ho (ya 10 iterations — infinite digest error), loop chalta hai.\n\n**Code se dekho:**\n```javascript\n$scope.$watch(\"name\", function (newVal, oldVal) {\n  console.log(oldVal, \"->\", newVal);\n});\n```\n\n**Dhyan rakhne wali baatein:**\n- Angular ke bahar (setTimeout, jQuery plugin) change karo to `$scope.$apply()` lagao.\n- Bahut saare `$watch` = slow digest → `one-time binding` `{{ ::value }}` use karo.\n- Heavy list par `ng-repeat` + `track by` se performance better.\n\n**Diagram:** Refer to the AngularJS architecture overview diagram."
      }
    ]
  },
  {
    "id": "angularjs-features",
    "number": "5.3",
    "title": "Features of AngularJS",
    "subtitle": "Data binding, directives, DI, filters, routing, testing",
    "icon": "zap",
    "accent": "#aa00ff",
    "englishDefinition": "The defining features of AngularJS are: two-way data binding through ng-model and a digest cycle that keeps view and model synchronised without DOM code; declarative directives (ng-app, ng-model, ng-repeat, ng-if, ng-show, ng-click) plus custom directives that extend HTML's vocabulary; AngularJS expressions ({{ }}) that evaluate against the scope with filters and no control flow; modules (angular.module) that group and bootstrap the application and enable modular testable design; controllers that expose a $scope to the view; built-in and custom services/factories (including $http, $q, $timeout, $log, $location) provided through dependency injection; filters (currency, date, uppercase, lowercase, number, orderBy, filter, limitTo, json) for display formatting; routing and deep linking (ngRoute: $routeProvider, otherwise plain hash URLs); form support with built-in validation and CSS classes (ng-valid, ng-invalid, ng-dirty, ng-touched); templating and reusable views; internationalisation (ngPluralize, i18n files); animation hooks (ngAnimate); testability with Karma and Jasmine plus Protractor for end-to-end tests; and jqLite (a lightweight jQuery subset) for DOM work when needed.",
    "intro": "AngularJS ke features ko yaad karne ka easy tarika — **teen group**: (1) **HTML side** — directives, expressions, filters, templates; (2) **logic side** — modules, controllers, `$scope`, services + dependency injection; (3) **app side** — routing/deep linking, forms + validation, animation, aur **testability** (Karma/Jasmine). Exam mein aksar 'features of AngularJS' par 6 marks ka sawaal aata hai — har feature ka naam + ek line ka example likhna best hai.",
    "sections": [
      {
        "type": "definition",
        "title": "AngularJS ke main features",
        "kicker": "Definition",
        "body": "AngularJS ka kaam ek line mein: **declarative HTML + automatic synchronisation**. Isi se saare features nikalte hain — `ng-model` se two-way binding, `{{ }}` se expressions, `ng-repeat`/`ng-if` se rendering, `angular.module` se structure, aur DI se reusable services.",
        "body2": "Baaki features app-level hain: **routing** (`ngRoute`), **form validation** (built-in classes), **filters** (display format), **animation** (`ngAnimate`), **i18n**, aur **testing** tools (Karma, Jasmine, Protractor).",
        "chips": [
          "two-way binding",
          "directives",
          "expressions",
          "modules",
          "DI",
          "filters",
          "routing",
          "validation"
        ]
      },
      {
        "type": "cards",
        "title": "Core features",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "zap",
            "title": "Two-way data binding",
            "body": "`ng-model` se model ↔ view sync; digest cycle DOM update karta hai — manual code nahi."
          },
          {
            "icon": "code",
            "title": "Directives",
            "body": "`ng-app`, `ng-repeat`, `ng-if`, `ng-show`, `ng-click`, `ng-class`; custom directive se apne tags bhi."
          },
          {
            "icon": "terminal",
            "title": "Expressions",
            "body": "`{{ 5 + 3 }}`, `{{ student.name | uppercase }}` — scope par evaluate, filters ke saath."
          },
          {
            "icon": "puzzle",
            "title": "Modules",
            "body": "`angular.module('app', ['ngRoute'])` — app ka container, dependencies list, testing ke liye alag module."
          },
          {
            "icon": "user",
            "title": "Controllers + $scope",
            "body": "View ka logic; `$scope` model rakhta hai; nested controllers child scope banate hain."
          },
          {
            "icon": "plug",
            "title": "Services + DI",
            "body": "`$http`, `$q`, `$timeout`, `$location`; apni service `factory`/`service` se; inject by name."
          },
          {
            "icon": "check",
            "title": "Filters",
            "body": "`currency`, `date`, `uppercase`, `number`, `orderBy`, `filter`, `limitTo`, `json` — display formatting."
          },
          {
            "icon": "globe",
            "title": "Routing + deep linking",
            "body": "`ngRoute` + `$routeProvider`; URL hash se view change, bookmark/back button chalta hai."
          },
          {
            "icon": "shield",
            "title": "Forms + validation",
            "body": "`required`, `ng-minlength`, `ng-pattern`; `ng-valid`/`ng-invalid`/`ng-dirty` classes automatically."
          }
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Features ek hi page par",
        "code": "<div ng-app=\"demo\" ng-controller=\"DemoCtrl\">\n\n  <!-- 1. Expression + filter -->\n  <p>Total: {{ students.length }} · Fee: {{ fee | currency:\"INR\":0 }}</p>\n\n  <!-- 2. Two-way binding -->\n  <input type=\"text\" ng-model=\"q\" placeholder=\"search name\" />\n  <p>You typed: {{ q }}</p>\n\n  <!-- 3. Directive: ng-repeat + filter + orderBy -->\n  <ul>\n    <li ng-repeat=\"s in students | filter:q | orderBy:'-marks'\">\n      {{ s.name }} — {{ s.marks }}\n      <span ng-if=\"s.marks >= 80\">★ topper</span>\n      <span ng-show=\"s.marks < 40\">(fail)</span>\n    </li>\n  </ul>\n\n  <!-- 4. ng-class + ng-click -->\n  <button ng-click=\"sort = !sort\"\n          ng-class=\"{ active: sort }\">Toggle</button>\n\n  <!-- 5. Form validation -->\n  <form name=\"f\" novalidate>\n    <input name=\"email\" type=\"email\" ng-model=\"email\" required />\n    <span ng-show=\"f.email.$invalid && f.email.$dirty\">\n      Valid email required\n    </span>\n  </form>\n</div>\n\n<script>\n  angular.module(\"demo\", [])\n    .controller(\"DemoCtrl\", function ($scope) {\n      $scope.fee = 45000;\n      $scope.students = [\n        { name: \"Riya\", marks: 88 },\n        { name: \"Aman\", marks: 35 },\n        { name: \"Neha\", marks: 76 }\n      ];\n    });\n</script>",
        "language": "html",
        "filename": "features.html",
        "php": "Total: 3 · Fee: INR 45,000\n[ riya                     ]\nYou typed: riya\n\nRIYA — 88  ★ topper\nNEHA — 76\nAMAN — 35  (fail)\n\n[ Toggle ]\n\n[ abc        ]  Valid email required",
        "label": "Rendered output",
        "height": 260,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "Ek page par paanch features: expressions, filters, two-way binding, directives (`ng-repeat`, `ng-if`, `ng-show`, `ng-class`) aur form validation."
      },
      {
        "type": "points",
        "title": "Doosre important features",
        "kicker": "More",
        "points": [
          "**Dependency Injection:** controller/service function ke parameters ke naam se inject; minification-safe ke liye `['$scope', '$http', function($scope, $http){}]`.",
          "**Services:** `$http` (AJAX), `$q` (promises), `$timeout`/`$interval`, `$log`, `$location`, `$window`, `$document`.",
          "**Custom directives:** `directive('hello', function(){ return { template: 'Hi {{name}}', scope: {...} } })`.",
          "**Animation:** `ngAnimate` module + CSS classes (`ng-enter`, `ng-leave`) — fade/slide effects.",
          "**Internationalisation:** `ngPluralize`, `$locale`, i18n files — multi-language.",
          "**Testing:** unit test **Karma + Jasmine** (`$httpBackend` se mock), E2E **Protractor** (ab deprecated).",
          "**jqLite:** jQuery ka subset built-in (`angular.element`); poora jQuery chahiye to Angular se pehle load karo."
        ]
      },
      {
        "type": "comparison",
        "title": "AngularJS feature hi ek line mein",
        "kicker": "Comparison",
        "columns": [
          "Feature",
          "Example"
        ],
        "rows": [
          {
            "label": "Binding",
            "values": [
              "two-way",
              "<input ng-model=\"name\" />"
            ]
          },
          {
            "label": "Loop",
            "values": [
              "ng-repeat",
              "<li ng-repeat=\"s in list\">"
            ]
          },
          {
            "label": "Condition",
            "values": [
              "ng-if / ng-show",
              "<div ng-if=\"ok\">"
            ]
          },
          {
            "label": "Event",
            "values": [
              "ng-click",
              "<button ng-click=\"save()\">"
            ]
          },
          {
            "label": "Filter",
            "values": [
              "| filter:q",
              "{{ list | filter:q }}"
            ]
          },
          {
            "label": "Format",
            "values": [
              "| currency / date",
              "{{ price | currency }}"
            ]
          },
          {
            "label": "Style",
            "values": [
              "ng-class",
              "ng-class=\"{on: active}\""
            ]
          },
          {
            "label": "Route",
            "values": [
              "ng-view + $routeProvider",
              "#/students"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff"
        ]
      },
      {
        "type": "diagram",
        "title": "AngularJS features",
        "kicker": "Diagram",
        "diagram": "wt5-features",
        "caption": "HTML side (directives, expressions, filters) + logic side (modules, controllers, services/DI) + app side (routing, validation, testing)"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Two-way binding** (`ng-model` + digest) — sabse pehchan wala feature.",
          "**Directives:** `ng-app`, `ng-repeat`, `ng-if`, `ng-show`, `ng-click`, `ng-class` + custom directives.",
          "**Expressions + filters:** `{{ value | currency }}`, `orderBy`, `filter`, `date`.",
          "**Modules + controllers + $scope** se structure; **services + DI** se reuse.",
          "**Routing** (`ngRoute`), **forms + validation**, **animation**, **i18n**.",
          "**Testing:** Karma + Jasmine (unit), Protractor (E2E, deprecated)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the main features of AngularJS.",
        "answer": "AngularJS ek client-side framework hai jo HTML ko declarative banata hai. Uske main features:\n\n**1. Two-way data binding** — `ng-model` model aur view ko jodta hai; digest cycle dono ko sync karta hai.\n```html\n<input ng-model=\"name\" /> <p>Hello {{ name }}</p>\n```\n\n**2. Directives** — HTML ko behaviour dene wale attributes/tags: `ng-app`, `ng-repeat`, `ng-if`, `ng-show`, `ng-click`, `ng-class`; custom directives bhi bana sakte ho.\n\n**3. AngularJS expressions** — `{{ 5 + 3 }}`, `{{ student.name }}`; filters ke saath `{{ price | currency }}`; control flow nahi hota (uske liye directives).\n\n**4. Modules** — `angular.module(\"app\", [\"ngRoute\"])`; controllers, services, directives register hote hain; app modular aur testable rehti hai.\n\n**5. Controllers + $scope** — view ka logic; `$scope` model rakhta hai; nested controllers child scopes banate hain.\n\n**6. Services + Dependency Injection** — `$http`, `$q`, `$timeout`, `$location` aur apni services; DI se inject hote hain, testing mein mock karna aasan.\n\n**7. Filters** — `currency`, `date`, `uppercase`, `number`, `orderBy`, `filter`, `limitTo`, `json`.\n\n**8. Routing + deep linking** — `ngRoute` + `$routeProvider`; URL hash se view change, back button aur bookmark kaam karte hain.\n\n**9. Forms + validation** — `required`, `ng-minlength`, `ng-pattern`; `ng-valid`/`ng-invalid`/`ng-dirty` classes automatically milti hain.\n\n**10. Testability** — Karma + Jasmine (unit), `$httpBackend` se mock, Protractor (E2E).\n\n**11. Extra:** `ngAnimate` (animation), i18n (`ngPluralize`, `$locale`), jqLite (jQuery subset).\n\n**Diagram:** Refer to the AngularJS features diagram."
      },
      {
        "question": "Explain AngularJS expressions and filters with examples.",
        "answer": "**AngularJS expression** `{{ }}` ke andar likha jaata hai aur page ke `$scope` ke against evaluate hota hai.\n\n**Expressions ke examples:**\n```html\n{{ 5 + 3 }}                  <!-- 8 -->\n{{ student.name }}           <!-- scope value -->\n{{ students.length }}        <!-- property -->\n{{ price * qty }}            <!-- arithmetic -->\n{{ ok ? \"Yes\" : \"No\" }}      <!-- ternary -->\n{{ name | uppercase }}       <!-- filter -->\n```\n**Kya nahi kar sakte:** loops/if-else statements, `new`, function declarations — sirf expressions (values) allowed. Global objects (`window`, `document`) bhi directly nahi.\n\n**Filters (display formatting):**\n\n| Filter | Kaam | Use (A → B = A pipe B) |\n|---|---|---|\n| `currency` | currency format | `fee` → `currency:\"INR\":0` |\n| `date` | date format | `d` → `date:\"dd/MM/yyyy\"` |\n| `uppercase` / `lowercase` | case change | `name` → `uppercase` |\n| `number` | decimal places | `3.14159` → `number:2` |\n| `orderBy` | sorting | `list` → `orderBy:'-marks'` |\n| `filter` | search / subset | `list` → `filter:q` |\n| `limitTo` | first / last N | `list` → `limitTo:3` |\n| `json` | object print (debug) | `obj` → `json` |\n\n**Multiple filters chain hote hain:**\n```html\n{{ students | filter:q | orderBy:'name' | limitTo:5 }}\n```\n\n**Custom filter:**\n```javascript\nangular.module(\"app\", []).filter(\"initials\", function () {\n  return function (name) {\n    return name.split(\" \").map(function (w) { return w[0]; }).join(\"\");\n  };\n});\n// {{ \"Riya Sharma\" | initials }}  ->  RS\n```\n\n**Diagram:** Refer to the AngularJS features diagram."
      },
      {
        "question": "Explain modules, controllers and $scope in AngularJS.",
        "answer": "Teeno milkar app ka structure banate hain.\n\n**1. Module** — app ka container:\n```javascript\nvar app = angular.module(\"collegeApp\", [\"ngRoute\"]);\n```\n- Dependencies ki list (`[]`) — doosre modules.\n- Controllers, services, directives, filters isi par register hote hain.\n- **Kyun:** global variables se bachav, modular design, testing mein alag module.\n\n**2. Controller** — view ka logic:\n```javascript\napp.controller(\"StudentCtrl\", [\"$scope\", \"$http\", function ($scope, $http) {\n  $scope.students = [];\n  $http.get(\"/api/students\").then(function (res) {\n    $scope.students = res.data;\n  });\n  $scope.add = function (s) { $scope.students.push(s); };\n}]);\n```\n- `ng-controller=\"StudentCtrl\"` se HTML se judta hai.\n- Array notation se minification-safe DI.\n\n**3. $scope** — controller aur view ke beech ka pul:\n- `$scope.name = \"Riya\"` → view mein `{{ name }}`.\n- Child scopes prototype se inherit karte hain (nested controllers).\n- `$scope.$watch()` se change track, `$scope.$apply()` se Angular ke bahar ka change digest mein.\n\n**Rules:**\n- Controller ko **patla** rakho — data/HTTP logic service mein daalo.\n- `$scope` par `$parent` se likhna avoid karo; `controller as` syntax (`ng-controller=\"X as vm\"`) better.\n- DOM manipulation ke liye directive use karo, controller mein `document` nahi.\n\n**Diagram:** Refer to the AngularJS features diagram."
      }
    ]
  },
  {
    "id": "angularjs-advantages",
    "number": "5.4",
    "title": "Advantages of AngularJS",
    "subtitle": "Fayde, kamiyan aur kab use karein",
    "icon": "check",
    "accent": "#00e676",
    "englishDefinition": "AngularJS's advantages are: it extends HTML declaratively so the view stays readable; two-way data binding removes most manual DOM code; it provides a complete structure (modules, controllers, services, routing, validation) out of the box; its dependency injection makes components loosely coupled and easy to unit-test (Karma, Jasmine, $httpBackend); it is maintained by Google, MIT-licensed and free, with a large community and abundant tutorials; templates are plain HTML, so designers can work with developers; filters and directives cut boilerplate; it is highly testable and well suited to CRUD-style single-page applications and enterprise intranets. Its limitations are equally important: AngularJS (1.x) reached end of life on 31 December 2021 so there are no security patches; the digest cycle slows down with large $watch lists; two-way binding can make data flow hard to trace; performance on mobile and complex UIs is weaker than component frameworks; DOM-heavy additions still need directives and $apply; and migrating to Angular 2+ is a rewrite, not an upgrade. Modern choices are Angular (2+), React + Next.js, or Vue + Nuxt.",
    "intro": "Exam mein 'advantages of AngularJS' ka ask simple hota hai, par marks **structure** se aate hain: HTML side ka fayda (declarative, two-way binding), development speed (built-in routing/validation, kam boilerplate), maintenance (modules + DI + testability), aur ecosystem (Google support, MIT license, bada community). Saath mein **do-teen limitations** bhi likho (EOL 2021, digest performance, two-way binding ka andhera, Angular 2+ migration = rewrite) — isse answer balanced lagta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Advantages ka saar",
        "kicker": "Definition",
        "body": "AngularJS ka fayda do level par hai: **developer experience** (kam code, clear structure, HTML templates) aur **maintenance** (modules, DI, testability). Ek `ng-model` se do-way binding mil jaati hai — vanilla JS mein uske liye event listeners + DOM update likhna padta.",
        "body2": "Iske saath limitations bhi equally important hain: 1.x **Dec 2021 EOL**, digest cycle ka performance budget, two-way binding ka hidden data flow, aur Angular 2+ par **rewrite-level migration**. Isi liye aaj Angular (2+), React/Next.js ya Vue/Nuxt choose kiye jaate hain.",
        "chips": [
          "declarative HTML",
          "less code",
          "testable",
          "Google + MIT",
          "EOL 2021",
          "digest limits"
        ]
      },
      {
        "type": "cards",
        "title": "Fayde",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "zap",
            "title": "Kam code, zyada kaam",
            "body": "Two-way binding + directives se DOM ke 10 lines ki jagah ek attribute."
          },
          {
            "icon": "code",
            "title": "Declarative HTML",
            "body": "Template padh kar UI ka structure samajh aata hai — designer + developer dono ke liye."
          },
          {
            "icon": "puzzle",
            "title": "Complete framework",
            "body": "Routing, validation, HTTP, filters, animation — sab built-in, alag library nahi chahiye."
          },
          {
            "icon": "check",
            "title": "Testing friendly",
            "body": "Modules + DI se mock karna aasan; Karma + Jasmine standard; `$httpBackend` se fake HTTP."
          },
          {
            "icon": "user",
            "title": "Bada ecosystem",
            "body": "Google maintain, MIT license (free), lakhon tutorials, StackOverflow, third-party modules."
          },
          {
            "icon": "layers",
            "title": "SPA + CRUD ke liye perfect",
            "body": "Admin dashboards, intranet forms, data-entry apps — jahan zyada forms/tables honge."
          }
        ]
      },
      {
        "type": "points",
        "title": "Limitations (answer mein zaroor likho)",
        "kicker": "Limitations",
        "points": [
          "**EOL 2021:** 31 Dec 2021 se koi security patch nahi — production mein naya project nahi banana chahiye.",
          "**Digest performance:** har change par saare `$watch` evaluate hote hain; bade lists par slow; solution: one-time binding `{{ ::x }}`, `track by`.",
          "**Two-way binding ka andhera:** data kis taraf se badla, trace karna mushkil — bade app mein bug hunting costly.",
          "**Mobile weak:** 1.x desktop-first hai; Angular 2+ mobile ke liye designed.",
          "**Migration:** Angular 2+ par jaana = rewrite (TypeScript, components) — 1.x se upgrade path nahi.",
          "**Learning curve:** directives, digest, DI, scope inheritance — shuru mein confusing; debugging ke liye Batarang chahiye."
        ]
      },
      {
        "type": "comparison",
        "title": "AngularJS vs React vs Vue (choosing)",
        "kicker": "Comparison",
        "columns": [
          "AngularJS 1.x",
          "React",
          "Vue"
        ],
        "rows": [
          {
            "label": "Type",
            "values": [
              "full framework",
              "UI library",
              "progressive framework"
            ]
          },
          {
            "label": "Binding",
            "values": [
              "two-way",
              "one-way (state)",
              "both (v-model)"
            ]
          },
          {
            "label": "Language",
            "values": [
              "JavaScript",
              "JSX (JS)",
              "templates + JS"
            ]
          },
          {
            "label": "Learning",
            "values": [
              "medium–high",
              "medium",
              "easy"
            ]
          },
          {
            "label": "Status",
            "values": [
              "EOL (2021)",
              "active",
              "active"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "legacy apps",
              "large apps + Next.js",
              "mid-size apps"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#00d4ff",
          "#00e676"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Same feature — kitna code lagta hai",
        "code": "<!-- AngularJS: 3 lines, koi DOM code nahi -->\n<div ng-app ng-init=\"items=['Pen','Book']; n=''\">\n  <input ng-model=\"n\" placeholder=\"add item\" />\n  <button ng-click=\"items.push(n); n=''\">Add</button>\n  <li ng-repeat=\"i in items\">{{ i }}</li>\n</div>\n\n// Vanilla JS: same kaam, ~15 lines\nlet items = [\"Pen\", \"Book\"];\nfunction render() {\n  const ul = document.getElementById(\"list\");\n  ul.innerHTML = items.map(i => `<li>${i}</li>`).join(\"\");\n}\ndocument.getElementById(\"add\").addEventListener(\"click\", () => {\n  const v = document.getElementById(\"inp\").value;\n  if (!v) return;\n  items.push(v);\n  render();                       // har change par manually\n});",
        "language": "html",
        "filename": "compare.html",
        "php": "AngularJS: 3 lines of HTML\nVanilla: 15 lines + render() har change par\n\nResult screen dono mein same:\nPen\nBook\nNotebook",
        "label": "Rendered output",
        "height": 220,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "Advantage ka proof code mein: AngularJS mein `ng-repeat` + `ng-click` kaafi hai, vanilla mein state + render + listener sab khud likhna padta hai."
      },
      {
        "type": "points",
        "title": "Kab AngularJS theek hai, kab nahi",
        "kicker": "Guidance",
        "points": [
          "**Theek hai:** existing 1.x app maintain karna, college project/demo, intranet CRUD forms jahan team already 1.x jaanti hai.",
          "**Theek nahi:** naye public product (SEO + performance), mobile-first app, security-sensitive banking/health app.",
          "**Alternative:** Angular (2+) for enterprise structure; **React + Next.js** for SEO/SSR; **Vue + Nuxt** for fast ramp-up.",
          "**Migration tip:** ek saath rewrite na karo — `ngUpgrade` se hybrid (AngularJS + Angular side by side), page-by-page shift.",
          "**Performance tip (1.x mein):** `::` one-time binding, `track by`, `bindonce`, kam `$watch`, `ng-if` over `ng-show` for bade blocks.",
          "**Exam line:** \"AngularJS ne SPA development ko aasan banaya, par 1.x EOL ke baad Angular 2+ ne architecture badal diya.\""
        ]
      },
      {
        "type": "diagram",
        "title": "AngularJS — advantages vs limitations",
        "kicker": "Diagram",
        "diagram": "wt5-advantages",
        "caption": "Fayde (kam code, testability, complete framework) ke saamne limitations (EOL, digest performance, migration)"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Fayde:** kam code, declarative HTML, built-in routing/validation, DI + testability, Google/MIT, bada ecosystem.",
          "**Best fit:** CRUD-heavy SPAs, admin dashboards, intranet forms.",
          "**Limitations:** EOL Dec 2021, digest cycle slow at scale, two-way binding ka hidden flow, mobile weak.",
          "**Migration:** Angular 2+ par rewrite; `ngUpgrade` se hybrid migration possible.",
          "**Performance:** `{{ ::x }}`, `track by`, kam `$watch`.",
          "**Aaj ka choice:** Angular (2+), React + Next.js, Vue + Nuxt."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the advantages of AngularJS.",
        "answer": "AngularJS ke fayde development speed, code clarity aur maintenance — teen taraf se dekho.\n\n**1. Two-way data binding** — `ng-model` se view aur model khud sync; DOM code likhna khatam.\n```html\n<input ng-model=\"name\" /> <p>{{ name }}</p>\n```\n\n**2. Declarative HTML** — template padh kar UI samajh aata hai; designer bhi kaam kar sakta hai; `ng-repeat`, `ng-if` se loops/conditions HTML mein.\n\n**3. Complete framework** — routing (`ngRoute`), validation, `$http`, filters, animation, i18n — sab built-in; alag libraries jodne ki zaroorat nahi.\n\n**4. Modules + DI** — code modular hota hai; services inject hoti hain; loose coupling.\n\n**5. Testability** — Karma + Jasmine, `$httpBackend` se HTTP mock; DI ki wajah se unit tests aasan.\n\n**6. Kam boilerplate** — filters (`currency`, `date`) aur directives se repeat code khatam.\n\n**7. Free + supported** — Google maintain, MIT license, bada community aur tutorials.\n\n**8. SPA features** — client-side routing, deep linking, back button support.\n\n**Limitations bhi likho (marks ke liye):**\n- AngularJS 1.x **EOL 31 Dec 2021** — koi security patch nahi.\n- Digest cycle bade `$watch` list par slow.\n- Two-way binding data flow ko trace karna mushkil banata hai.\n- Mobile performance weak; Angular 2+ par migration = rewrite.\n\n**Kab use karein:** existing 1.x apps, internal CRUD forms, demo/college projects. Naye app ke liye Angular/React/Next.js.\n\n**Diagram:** Refer to the AngularJS — advantages vs limitations diagram."
      },
      {
        "question": "Compare AngularJS with React and Vue.",
        "answer": "Teeno client-side UI solutions hain, par approach alag.\n\n| Point | AngularJS 1.x | React | Vue |\n|---|---|---|---|\n| Type | full framework | UI library | progressive framework |\n| Language | JavaScript | JSX (JavaScript) | templates + JS |\n| Binding | two-way | one-way (state → view) | both (`v-model`) |\n| Change detection | digest cycle | virtual DOM diff | reactivity + virtual DOM |\n| Structure | modules/controllers | components + hooks | components + SFC |\n| Routing | ngRoute | React Router / Next.js | Vue Router / Nuxt |\n| Learning curve | medium–high | medium | easy |\n| Performance | weaker at scale | strong | strong |\n| Status | **EOL 2021** | active | active |\n| Best for | legacy/enterprise 1.x | large apps, Next.js | mid-size, fast ramp-up |\n\n**Concept mapping:**\n\n| Idea | AngularJS | React | Vue |\n|---|---|---|---|\n| Two-way input | `ng-model` | `value` + `onChange` | `v-model` |\n| Loop | `ng-repeat` | `array.map()` | `v-for` |\n| Condition | `ng-if` | `{cond && ...}` | `v-if` |\n| Event | `ng-click` | `onClick` | `@click` |\n\n**Exam line:** \"AngularJS poora framework deta hai, React sirf view layer deta hai (baaki khud chuno), Vue dono ke beech mein progressive hai.\"\n\n**Diagram:** Refer to the AngularJS — advantages vs limitations diagram."
      },
      {
        "question": "What are the limitations of AngularJS? Why is Angular 2+ preferred today?",
        "answer": "**Limitations of AngularJS (1.x):**\n\n1. **End of life** — 31 Dec 2021 ke baad koi security patch nahi; naye project ke liye risk.\n2. **Digest cycle performance** — har `$apply` par saare `$watch` evaluate; bade grid/list par lag.\n3. **Two-way binding ka andhera** — data kis source se badla, debug karna mushkil; bade team mein accidental updates.\n4. **Mobile weak** — 1.x desktop-first; mobile par slow.\n5. **SEO/SPA issues** — client-side rendering se crawler ko khaali HTML.\n6. **Migration cost** — Angular 2+ par upgrade path nahi, rewrite.\n7. **Directive complexity** — custom directives ka API (compile/link/scope) seekhna mushkil.\n\n**Angular 2+ kyun better:**\n- **TypeScript** — types, refactoring, IDE support.\n- **Component architecture** — reusable, testable UI pieces.\n- **Faster change detection** — zone.js, OnPush, signals.\n- **Mobile-first**, CLI, lazy loading, AOT compilation.\n- **Long-term support** — regular releases, security patches.\n\n**Aaj ka practical answer:** naya app → Angular (2+) ya React + Next.js (SEO/SSR) ya Vue + Nuxt. Purana 1.x app → `ngUpgrade` se hybrid migration, phir page-by-page rewrite.\n\n**Diagram:** Refer to the AngularJS — advantages vs limitations diagram."
      }
    ]
  },
  {
    "id": "angularjs-mvc",
    "number": "5.5",
    "title": "MVC Architecture in AngularJS",
    "subtitle": "Model, View, Controller — aur $scope ka ViewModel role",
    "icon": "layers",
    "accent": "#00d4ff",
    "englishDefinition": "AngularJS implements the MVC pattern with a ViewModel, so it is often described as MVVM or MVW (Model-View-Whatever). The Model holds the data and business rules - plain JavaScript objects, arrays and services such as $http that fetch data from a server; it knows nothing about the DOM or the template. The View is the HTML template extended with directives (ng-model, ng-repeat, ng-if) and expressions ({{ }}), which declares what the user sees rather than how to change the DOM. The Controller is the JavaScript function bound to the template with ng-controller; it creates and populates the $scope (the ViewModel), handles user actions and delegates heavy work to services. $scope sits between Model and View: the view reads and writes scope properties, and the digest cycle propagates changes in both directions. AngularJS's MVC is client-side - the browser does the presentation, the server just supplies data (usually JSON). Benefits are separation of concerns, reusable models/services, testable controllers (Karma + Jasmine) and clear team boundaries; the trade-off is more files and the discipline of keeping controllers thin.",
    "intro": "MVC ka seedha matlab: **Model** = data, **View** = dikhne wala HTML, **Controller** = beech ka manager. AngularJS mein ek extra cheez hai — **`$scope`**, jo **ViewModel** ka kaam karta hai; isi liye AngularJS ko **MVVM/MVW** bhi kehte hain. Yaad rakhne wali line: **controller DOM ko nahi chhoota** — wo sirf `$scope` bharta hai, aur directives/digest view ko update karte hain.",
    "sections": [
      {
        "type": "definition",
        "title": "AngularJS ka MVC / MVVM",
        "kicker": "Definition",
        "body": "**Model** = data + business rules (plain JS objects, arrays, `$http`/service se aaya data). **View** = HTML template jismein directives (`ng-model`, `ng-repeat`) aur expressions (`{{ }}`) hain — deklarativ, DOM manipulation nahi. **Controller** = `ng-controller` se juda JS function jo `$scope` bharta hai aur user actions handle karta hai.",
        "body2": "Beech mein **`$scope` (ViewModel)** hota hai: view usse padhta/likhta hai, aur **digest cycle** dono taraf change propagate karta hai. Isliye AngularJS ka MVC **client-side** hai — server sirf data deta hai (JSON).",
        "chips": [
          "Model",
          "View",
          "Controller",
          "$scope = ViewModel",
          "client-side MVC",
          "digest"
        ]
      },
      {
        "type": "cards",
        "title": "Teeno parts ka kaam",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "database",
            "title": "Model",
            "body": "Data + rules: `students`, `student.total()`, `$http.get('/api/students')` — DOM/template ka knowledge nahi."
          },
          {
            "icon": "layout",
            "title": "View",
            "body": "HTML template: `ng-repeat`, `ng-model`, `{{ }}` — kya dikhega, kaise update hoga ye directives batate hain."
          },
          {
            "icon": "user",
            "title": "Controller",
            "body": "`ng-controller` ka function — `$scope` par data/actions rakhta hai, services inject karta hai, DOM nahi chhoota."
          },
          {
            "icon": "plug",
            "title": "ViewModel ($scope)",
            "body": "View aur Model ke beech pul; properties + functions ka object; digest isi ko watch karta hai."
          },
          {
            "icon": "globe",
            "title": "Services",
            "body": "`$http`, `$q`, custom service — model ka data layer; controller patla rehta hai."
          },
          {
            "icon": "check",
            "title": "Benefit",
            "body": "Separation of concerns, reuse, testable controllers (Karma/Jasmine), team parallel kaam."
          }
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "MVC ka poora example",
        "code": "// ---------- MODEL: service (data layer) ----------\nangular.module(\"collegeApp\", [])\n  .factory(\"StudentService\", function () {\n    var students = [\n      { id: 1, name: \"Riya\", marks: 88 },\n      { id: 2, name: \"Aman\", marks: 76 }\n    ];\n    return {\n      all: function () { return students; },\n      add: function (s) { students.push(s); return s; },\n      average: function () {\n        var t = students.reduce(function (a, s) { return a + s.marks; }, 0);\n        return students.length ? Math.round(t / students.length) : 0;\n      }\n    };\n  })\n\n// ---------- CONTROLLER: scope bharta hai ----------\n  .controller(\"StudentCtrl\", function ($scope, StudentService) {\n    $scope.students = StudentService.all();\n    $scope.avg = StudentService.average();\n\n    $scope.save = function (name, marks) {\n      if (!name) { return; }\n      StudentService.add({ id: $scope.students.length + 1,\n                           name: name, marks: Number(marks) });\n      $scope.avg = StudentService.average();   // model -> view\n      $scope.name = \"\";\n      $scope.marks = \"\";\n    };\n  });",
        "language": "Students (average 82)\n\n[ Neha ] [ 91 ] [ Save ]\n\n1  Riya   88\n2  Aman   76\n3  Neha   91        <- view + model dono update\n\naverage ab 85 (model se view)",
        "filename": "javascript",
        "php": "<!-- VIEW: template -->\n<div ng-app=\"collegeApp\" ng-controller=\"StudentCtrl\">\n  <h2>Students (average {{ avg }})</h2>\n\n  <input ng-model=\"name\" placeholder=\"name\" />\n  <input ng-model=\"marks\" type=\"number\" placeholder=\"marks\" />\n  <button ng-click=\"save(name, marks)\">Save</button>\n\n  <table>\n    <tr ng-repeat=\"s in students\">\n      <td>{{ s.id }}</td>\n      <td>{{ s.name }}</td>\n      <td>{{ s.marks }}</td>\n    </tr>\n  </table>\n</div>",
        "label": "app.js + view",
        "height": 280,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "Model = service (data + average), View = template, Controller = scope bharna + action. Teeno alag files mein rakh sakte ho."
      },
      {
        "type": "comparison",
        "title": "MVC in AngularJS vs classic server-side MVC",
        "kicker": "Comparison",
        "columns": [
          "AngularJS MVC (client)",
          "Classic MVC (server, e.g. ASP.NET MVC)"
        ],
        "rows": [
          {
            "label": "Kahan chalta",
            "values": [
              "browser",
              "server"
            ]
          },
          {
            "label": "Model",
            "values": [
              "JS objects + services",
              "classes + DB"
            ]
          },
          {
            "label": "View",
            "values": [
              "HTML template + directives",
              "Razor/JSP/Thymeleaf"
            ]
          },
          {
            "label": "Controller",
            "values": [
              "$scope bharta hai",
              "request handle, view return"
            ]
          },
          {
            "label": "Round trip",
            "values": [
              "nahi (JSON only)",
              "har action par page/HTML"
            ]
          },
          {
            "label": "Extra layer",
            "values": [
              "$scope = ViewModel (MVVM)",
              "koi nahi (patla controller)"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800"
        ]
      },
      {
        "type": "points",
        "title": "MVC ke fayde aur discipline",
        "kicker": "Practices",
        "points": [
          "**Separation of concerns:** data ka kaam model/service, dikhne ka kaam view, glue controller — har file ka ek kaam.",
          "**Reusability:** ek hi service kai controllers mein inject; ek hi template kai jagah.",
          "**Testability:** controller ko plain function ki tarah test karo — `$httpBackend` se fake API.",
          "**Parallel team work:** frontend developer view par, logic developer service par kaam kar sakta hai.",
          "**Rule 1 — controller patla rakho:** HTTP/DB/business logic service mein.",
          "**Rule 2 — DOM controller mein nahi:** DOM chahiye to directive banao.",
          "**Rule 3 — `controller as` syntax:** `ng-controller=\"StudentCtrl as vm\"` se `$scope` ka andhera kam hota hai."
        ]
      },
      {
        "type": "diagram",
        "title": "MVC / MVVM architecture in AngularJS",
        "kicker": "Diagram",
        "diagram": "wt5-mvc",
        "caption": "View (template) ↔ $scope (ViewModel) ↔ Controller ↔ Model/Services → server JSON; digest cycle sync karta hai"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Model** = data + rules (`$http`, services); **View** = HTML + directives; **Controller** = `$scope` + actions.",
          "**`$scope` = ViewModel** — isliye AngularJS ko MVVM/MVW bhi kehte hain.",
          "**Digest cycle** view ↔ model change propagate karta hai.",
          "**Client-side MVC:** server sirf JSON deta hai; rendering browser mein.",
          "**Fayde:** separation of concerns, reuse, testability, parallel teamwork.",
          "**Discipline:** patla controller, DOM directive mein, `controller as` syntax."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the MVC architecture in AngularJS with a diagram.",
        "answer": "AngularJS MVC ko **client-side** implement karta hai, aur `$scope` ke through MVVM bhi kehlaata hai.\n\n**1. Model**\n- Data + business rules: plain JS objects, arrays, `$http` se aaya JSON, services/factories.\n- DOM/template ka knowledge nahi; test karna aasan.\n\n**2. View**\n- HTML template + directives (`ng-model`, `ng-repeat`, `ng-if`) + expressions (`{{ }}`).\n- Deklarative: \"kya dikhana hai\" batata hai, \"DOM kaise badle\" nahi.\n\n**3. Controller**\n- `ng-controller` se view se judta hai; `$scope` par data aur functions rakhta hai.\n- User actions handle karta hai; heavy logic services ko deta hai.\n\n**4. ViewModel ($scope)**\n- Controller aur View ke beech pul; digest cycle isi ko watch karta hai.\n\n**Flow:**\n```\nUser action → View (ng-click) → Controller → Model/Service → $scope update\n                                   ↓\n                     digest cycle → View re-render ({{ }})\n```\n\n**Example:**\n```javascript\nangular.module(\"app\", [])\n  .factory(\"Svc\", function () { return { list: [1, 2, 3] }; })\n  .controller(\"Ctrl\", function ($scope, Svc) {\n    $scope.items = Svc.list;          // Model -> ViewModel\n    $scope.add = function (x) { Svc.list.push(x); };\n  });\n```\n\n**Fayde:** separation of concerns, reusable model, testable controller, parallel team work.\n**Dhyan:** controller mein DOM manipulation nahi — wo directive ka kaam hai.\n\n**Diagram:** Refer to the MVC / MVVM architecture in AngularJS diagram."
      },
      {
        "question": "Differentiate between Model, View, Controller and $scope in AngularJS.",
        "answer": "Chaar cheezein, chaar zimmedariyan:\n\n| Part | Kaam | Example | Rule |\n|---|---|---|---|\n| Model | data + business rules | `$http.get(\"/api/students\")`, service | DOM nahi jaanta |\n| View | HTML template + directives | `<li ng-repeat=\"s in students\">` | logic nahi, sirf binding |\n| Controller | scope bharna, actions | `$scope.save = function(){}` | patla rakho, DOM nahi |\n| $scope | ViewModel (pul) | `$scope.students`, `$scope.name` | digest isko watch karta hai |\n\n**Kaam kaise baant-ta hai:**\n- Model data laata/rakhta hai.\n- Controller us data ko `$scope` par rakhta hai aur functions deta hai.\n- View `$scope` ki properties ko `{{ }}`/directives se dikhata hai.\n- User ka action (ng-click) controller ka function chalata hai, jo model ko badalta hai → digest → view update.\n\n**Anti-patterns:**\n- Controller mein `$http` ke bade chains + DOM manipulation (`document.getElementById`) — ye service/directive ka kaam hai.\n- `$scope` par 50 properties — nested objects (`$scope.vm = {...}`) ya `controller as` better.\n- Model ko view mein directly mutating bina validation.\n\n**Exam line:** \"Controller model ko view ke liye taiyaar karta hai; view ka model se seedha rishta `$scope` ke through hota hai.\"\n\n**Diagram:** Refer to the MVC / MVVM architecture in AngularJS diagram."
      },
      {
        "question": "Why is AngularJS called MVVM rather than pure MVC? Explain the role of $scope.",
        "answer": "Kyunki AngularJS mein ek **ViewModel layer** hai — `$scope` — jo classic MVC mein nahi hoti.\n\n**Classic MVC:** Controller view ko update karta hai (ya view model ko padhta hai); model change par view refresh ka kaam developer/framework ka.\n\n**AngularJS MVVM:**\n- **Model** = data + services.\n- **View** = HTML template (declarative).\n- **ViewModel** = `$scope` — view ke liye data aur commands ka object.\n- **Controller** = ViewModel ko **initialize** karne wala function (glue), permanent layer nahi.\n\n**$scope ka role:**\n1. View aur controller ke beech data ka carrier.\n2. `$watch` list rakhta hai — digest cycle isi ko evaluate karta hai.\n3. Event handlers (`ng-click`) scope ke functions call karte hain.\n4. Child scopes prototype inheritance se parent values padh sakte hain.\n5. `$apply()` se Angular ke bahar ke changes digest mein aate hain.\n\n**Isi liye naam:** MVW (Model-View-Whatever) / MVVM — kyunki binding engine (`$scope` + digest) view aur model ko automatic sync karta hai; controller sirf setup karta hai.\n\n**Angular 2+ mein:** `$scope` hata diya — component class ka `this` ViewModel ka kaam karta hai, aur change detection (zone.js/signals) binding karta hai.\n\n**Diagram:** Refer to the MVC / MVVM architecture in AngularJS diagram."
      }
    ]
  },
  {
    "id": "angularjs-applications",
    "number": "5.6",
    "title": "Applications of AngularJS",
    "subtitle": "Kahan use hota hai — dashboards se hybrid mobile tak",
    "icon": "globe",
    "accent": "#ff7ab2",
    "englishDefinition": "AngularJS is applied where a rich, form- and data-heavy client is needed without full page reloads: single-page applications and admin dashboards (charts, tables, filters, CRUD screens); enterprise intranet and CRM/ERP front-ends where forms, validation and role-based screens dominate; e-commerce and booking front-ends (product filters, carts, checkout steps, seat selection); data-entry and survey systems with complex validation; real-time dashboards and chat clients using $http polling, WebSockets or Firebase; content and learning-management front-ends; travel, weather and news portals; and hybrid mobile apps through Ionic 1 (Cordova + AngularJS). Google's internal tools popularised it, and products such as PayPal's checkout, Upwork, Freelancer, Weather.com and Forbes have used AngularJS at some stage (several later migrated to Angular or React). Because AngularJS is client-side, it is a poor fit for content-heavy public sites that depend on SEO, for very large real-time UIs, and for new projects after its December 2021 end of life - there Angular (2+), React with Next.js, or Vue with Nuxt are chosen.",
    "intro": "AngularJS kahan chamakta hai? Jahan **form + table + filter + validation** zyada ho aur page reload na ho — admin dashboards, CRM/ERP screens, admission/attendance portals, e-commerce filters, booking flows, real-time dashboards, aur **Ionic 1** se hybrid mobile apps. Kahan nahi? Content-heavy public site jahan **SEO** chahiye (wahan Next.js/SSR), ya bahut bada real-time UI. Exam mein 'applications of AngularJS' ke 6-8 domain likhna + ek real product ka naam dena kaafi hota hai.",
    "sections": [
      {
        "type": "definition",
        "title": "AngularJS kahan use hota hai",
        "kicker": "Definition",
        "body": "AngularJS un jagahon par fit hai jahan **client-side interactivity zyada** ho: ek page par forms, tables, filters, live totals, multi-step flows — aur reload na ho. Iska natural ghar hai **SPA** aur **enterprise intranet** apps.",
        "body2": "Ulta, content-heavy public website (news, blog, product catalogue with SEO) ke liye SPA kamzor hai — wahan **server-side rendering** chahiye (Next.js/Nuxt) ya static pages. Aur 1.x EOL ke baad naya production project AngularJS par nahi banana chahiye.",
        "chips": [
          "SPA dashboards",
          "CRM/ERP",
          "forms + validation",
          "e-commerce filters",
          "Ionic hybrid apps"
        ]
      },
      {
        "type": "cards",
        "title": "Application domains",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "table",
            "title": "Admin dashboards",
            "body": "Charts, tables, filters, pagination, live totals — ek hi page par."
          },
          {
            "icon": "users",
            "title": "CRM / ERP front-ends",
            "body": "Customer forms, role-based screens, master-detail views."
          },
          {
            "icon": "cart",
            "title": "E-commerce & booking",
            "body": "Product filters, cart, checkout steps, seat/date selection."
          },
          {
            "icon": "check",
            "title": "Data-entry systems",
            "body": "Admission, attendance, survey forms — validation + conditional fields."
          },
          {
            "icon": "chart",
            "title": "Real-time dashboards",
            "body": "Polling (`$interval`), WebSockets, Firebase — live numbers."
          },
          {
            "icon": "device",
            "title": "Hybrid mobile apps",
            "body": "**Ionic 1** = Cordova + AngularJS; ek codebase se Android/iOS."
          }
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Typical app — attendance dashboard",
        "code": "<div ng-app=\"att\" ng-controller=\"AttCtrl\">\n  <h3>Attendance — {{ month | date:\"MMMM yyyy\" }}</h3>\n\n  <input type=\"month\" ng-model=\"month\" />\n  <input ng-model=\"q\" placeholder=\"search student\" />\n\n  <p ng-if=\"loading\">Loading…</p>\n\n  <table>\n    <tr><th>Name</th><th>Present</th><th>%</th></tr>\n    <tr ng-repeat=\"s in students | filter:q | orderBy:'name'\"\n        ng-class=\"{danger: s.percent < 75}\">\n      <td>{{ s.name }}</td>\n      <td>{{ s.present }} / {{ s.total }}</td>\n      <td>{{ s.percent | number:1 }}%</td>\n    </tr>\n  </table>\n\n  <p>Defaulters: {{ (students | filter:{percent:'!' + 75}).length }}</p>\n</div>\n\n<script>\n  angular.module(\"att\", [])\n    .controller(\"AttCtrl\", function ($scope, $http) {\n      $scope.month = new Date();\n      $scope.loading = true;\n      $http.get(\"/api/attendance?m=\" + $scope.month.getMonth())\n        .then(function (res) {\n          $scope.students = res.data;\n          $scope.loading = false;\n        });\n    });\n</script>",
        "language": "html",
        "filename": "attendance.html",
        "php": "Attendance — November 2026\n[ 2026-11 ] [ riya        ]\n\nName            Present  %\nAman            18 / 24  75.0%\nNeha            21 / 24  87.5%\nRiya            14 / 24  58.3%   (red row)\n\nDefaulters: 1",
        "label": "Rendered output",
        "height": 250,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "Yahi AngularJS ka sweet spot: filter + sort + conditional class + percentage formatting + API data — sab declarative, koi DOM code nahi."
      },
      {
        "type": "points",
        "title": "Real products aur case studies",
        "kicker": "Examples",
        "points": [
          "**Google:** AngularJS Google ke andar kai tools mein use hua; framework ka origin bhi Google hai (Misko Hevery).",
          "**PayPal:** checkout flow mein AngularJS 1.x use kiya gaya (baad mein migrate).",
          "**Upwork / Freelancer:** bade dashboards aur listings (baad mein React/Angular par shift).",
          "**Weather.com / Forbes:** content + interactive modules (baad mein naye stacks par).",
          "**Ionic 1:** hybrid mobile apps ka default stack — AngularJS + Cordova se Play Store/App Store apps.",
          "**Siksha/college projects:** attendance, fees, library, result portal — MCA/mini-project ke classic AngularJS apps."
        ]
      },
      {
        "type": "comparison",
        "title": "AngularJS kab haan, kab naa",
        "kicker": "Comparison",
        "columns": [
          "Good fit",
          "Poor fit"
        ],
        "rows": [
          {
            "label": "Content",
            "values": [
              "forms, tables, dashboards",
              "content-heavy public pages"
            ]
          },
          {
            "label": "SEO",
            "values": [
              "zaroorat nahi (behind login)",
              "zaroori hai"
            ]
          },
          {
            "label": "Users",
            "values": [
              "internal, known devices",
              "public, mobile-first"
            ]
          },
          {
            "label": "Realtime",
            "values": [
              "moderate polling",
              "heavy streaming UI"
            ]
          },
          {
            "label": "Team",
            "values": [
              "already 1.x jaanta hai",
              "naya project"
            ]
          },
          {
            "label": "Aaj ka choice",
            "values": [
              "legacy maintain / college demo",
              "Angular 2+, Next.js, Nuxt"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#ff5252"
        ]
      },
      {
        "type": "diagram",
        "title": "AngularJS applications",
        "kicker": "Diagram",
        "diagram": "wt5-applications",
        "caption": "SPA dashboards, CRM/ERP, e-commerce, data-entry, real-time dashboards, hybrid mobile (Ionic)"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Best fit:** SPA dashboards, CRM/ERP, form-heavy portals, e-commerce filters, booking flows.",
          "**Real products:** Google internal tools, PayPal checkout, Upwork, Freelancer, Weather.com, Forbes (kai ne baad mein migrate kiya).",
          "**Mobile:** Ionic 1 (Cordova + AngularJS) se hybrid apps.",
          "**Client-side power:** filters, validation, `$http`, routing, live totals.",
          "**Poor fit:** SEO-critical content sites, mobile-first public apps, bahut bade real-time UIs.",
          "**Aaj:** legacy maintain karo, naya app Angular 2+/Next.js/Nuxt par banao."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the applications of AngularJS with examples.",
        "answer": "AngularJS un jagahon par use hota hai jahan **rich client-side interactivity** chahiye aur page reload nahi — khaas taur par SPAs.\n\n**1. Single-page applications (SPA)**\n- Ek HTML shell + client-side routing (`ngRoute`); views turant badalte hain.\n- Example: koi bhi admin panel jahan sidebar fixed ho aur content change ho.\n\n**2. Admin dashboards / analytics**\n- Charts, tables, filters, sorting, pagination, live totals.\n- Example: attendance dashboard, sales report.\n\n**3. CRM / ERP front-ends**\n- Customer forms, master-detail views, role-based screens.\n\n**4. E-commerce & booking**\n- Product filters, cart, checkout steps, seat/date selection.\n- PayPal ne apne checkout mein AngularJS use kiya.\n\n**5. Data-entry & survey systems**\n- Multi-field forms + validation, conditional fields.\n\n**6. Real-time apps**\n- `$interval` polling, WebSockets, Firebase — chat, live score, stock ticker.\n\n**7. Hybrid mobile apps**\n- **Ionic 1** = Cordova + AngularJS — ek codebase se Android/iOS app.\n\n**8. Learning / college projects**\n- Attendance, fees, library, result portal — MCA mini-projects ke classic examples.\n\n**Kahan nahi:** SEO-critical public sites, content-heavy pages, mobile-first public products (wahan Next.js/Nuxt/Angular 2+).\n\n**Diagram:** Refer to the AngularJS applications diagram."
      },
      {
        "question": "What type of applications are best suited to AngularJS and why?",
        "answer": "AngularJS un apps ke liye best hai jahan **client-side logic zyada** ho aur **SEO ki zaroorat kam** ho.\n\n**Best-suited characteristics:**\n\n| Characteristic | Kyun AngularJS fit hai |\n|---|---|\n| Forms heavy | `ng-model` + validation directives built-in |\n| Tables/lists | `ng-repeat` + `filter` + `orderBy` |\n| Multi-step flows | routing + scope state |\n| Behind login | SEO issue nahi |\n| Data from API | `$http` + `$q` promises |\n| Team familiarity | 1.x jaante hain to migration cost zero |\n\n**Typical examples:** admin dashboards, CRM screens, admission/attendance portals, inventory systems, booking flows, internal tools, Ionic hybrid apps.\n\n**Poor fit:**\n- **Public content sites** (news/blog/product catalogue) — SPA se crawler ko khaali HTML milta hai; SSR chahiye.\n- **Mobile-first public apps** — 1.x ka digest bhaari padta hai.\n- **Very large real-time UIs** — bahut saare `$watch` slow ho jaate hain.\n- **Naye projects (2022 ke baad)** — EOL, koi security patch nahi.\n\n**Practical line:** \"AngularJS ne internal SPA development ko sasta banaya; public-facing products ke liye SSR wale stacks better hain.\"\n\n**Diagram:** Refer to the AngularJS applications diagram."
      },
      {
        "question": "Give real-world examples of AngularJS applications and explain how Ionic uses it.",
        "answer": "**Real-world users (AngularJS 1.x):**\n- **Google** — framework ka origin, andar ke kai tools mein use.\n- **PayPal** — checkout flow.\n- **Upwork / Freelancer** — dashboards aur listings.\n- **Weather.com, Forbes** — interactive modules.\n- **Ionic 1 apps** — hybrid mobile apps.\n\n**Note:** kai companies ne baad mein React/Angular 2+ par migrate kiya, par 1.x ne SPA ka pattern popular kiya.\n\n**Ionic 1 + AngularJS (hybrid app):**\n1. **Cordova** app ko native shell (WebView) mein chalata hai.\n2. **AngularJS** app ka logic, routing, data binding, HTTP deta hai.\n3. **Ionic** ready-made mobile UI components (cards, tabs, lists) deta hai.\n4. Ek codebase → Android APK + iOS IPA + PWA.\n5. Device features (camera, GPS) Cordova plugins se.\n\n**Fayde:** ek team, ek codebase, fast release.\n**Nuksaan:** performance native se kam, plugin maintenance, bade apps mein memory issues.\n\n**Aaj:** Ionic 2+ Angular/React/Vue ke saath chalta hai; AngularJS-based Ionic 1 legacy hai.\n\n**Diagram:** Refer to the AngularJS applications diagram."
      }
    ]
  },
  {
    "id": "angularjs-expressions-directives",
    "number": "5.7",
    "title": "AngularJS Expressions and Directives",
    "subtitle": "{{ }} se value, ng-* se behaviour",
    "icon": "code",
    "accent": "#ff8800",
    "englishDefinition": "AngularJS expressions are snippets written inside double braces, {{ expression }}, or in directive attributes, that AngularJS evaluates against the current scope and writes into the DOM. They support literals, scope properties, arithmetic, comparison, logical and ternary operators, array/object access and filters chained with the pipe character, but they do not allow statements, loops, conditionals or access to globals such as window/document; evaluation is forgiving, so an undefined property renders empty instead of throwing. ng-bind and ng-cloak are used to avoid a flash of raw {{ }} before compilation, and :: creates a one-time binding. Directives are markers on DOM elements (attributes, elements, classes or comments) that teach HTML new behaviour: ng-app bootstraps the application, ng-model binds an input two-way, ng-repeat renders a list, ng-if/ng-show/ng-hide control visibility, ng-switch selects a branch, ng-class/ng-style set styling, ng-click/ng-submit/ng-change handle events, ng-include embeds a template, and ng-model modifiers and form directives (ng-required, ng-pattern, ng-minlength, ng-disabled) support validation. Developers can also write custom directives with a factory returning a definition object (restrict, template/templateUrl, scope, link/compile) to build reusable components such as a rating widget or a date picker.",
    "intro": "Ye topic AngularJS ka **dil** hai. **Expression** `{{ }}` ke andar likhi jaati hai — value dikhane ke liye (`{{ 5 + 3 }}`, `{{ s.name | uppercase }}`). **Directive** `ng-*` attribute hota hai jo HTML ko naya behaviour deta hai — `ng-model` binding, `ng-repeat` loop, `ng-if` condition, `ng-click` event. Yaad rakho: expression mein **statements/loops nahi** chalte, aur `{{ }}` ki jagah `ng-bind`/`ng-cloak` use karne se page load par raw braces nahi dikhte.",
    "sections": [
      {
        "type": "definition",
        "title": "Expression vs directive",
        "kicker": "Definition",
        "body": "**Expression:** `{{ }}` ke andar ka snippet jo **scope ke against evaluate** hoke DOM mein value likhta hai — literals, properties, arithmetic, comparison, ternary, filters (`|`). Statements, loops, `new`, aur `window`/`document` allowed nahi.",
        "body2": "**Directive:** DOM element par marker (attribute/element/class/comment) jo HTML ko naya behaviour deta hai — `ng-app`, `ng-model`, `ng-repeat`, `ng-if`, `ng-click`, `ng-class`, ya aapka khud ka custom directive. Directive = AngularJS ka **HTML extension mechanism**.",
        "chips": [
          "{{ expression }}",
          "filters |",
          "ng-bind / ng-cloak",
          "::one-time",
          "ng-* directives",
          "custom directive"
        ]
      },
      {
        "type": "cards",
        "title": "Expressions ke rules",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "check",
            "title": "Chalta hai",
            "body": "`{{ 5 + 3 }}`, `{{ s.name }}`, `{{ a > b ? 'Y' : 'N' }}`, `{{ list[0] }}`, `{{ price | currency }}`."
          },
          {
            "icon": "alert",
            "title": "Nahi chalta",
            "body": "`if`, `for`, `var x = 1`, `new Date()`, `window.alert()`, function declarations — expression sirf value deta hai."
          },
          {
            "icon": "shield",
            "title": "Forgiving",
            "body": "Undefined property par error nahi — khaali string render hota hai (`{{ s.missing }}` → blank)."
          },
          {
            "icon": "eye",
            "title": "ng-bind",
            "body": "`<span ng-bind=\"name\"></span>` — `{{ }}` jaisa, par load par raw braces dikhne ka masla nahi."
          },
          {
            "icon": "zap",
            "title": "ng-cloak",
            "body": "`<div ng-cloak>{{ name }}</div>` — compile hone tak element chhupa rehta hai (FOUC fix)."
          },
          {
            "icon": "terminal",
            "title": "One-time binding",
            "body": "`{{ ::student.name }}` — ek baar bind, phir watch nahi; performance ke liye."
          }
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Expressions — sab forms ek page par",
        "code": "<div ng-app ng-init=\"price=45000; qty=2; ok=true;\n                       list=['Pen','Book']; s={name:'Riya', marks:88}\">\n\n  <p>Arithmetic: {{ price * qty }}</p>          <!-- 90000 -->\n  <p>Filter:     {{ price | currency:\"INR\":0 }}</p>\n  <p>Ternary:    {{ ok ? \"In stock\" : \"Out\" }}</p>\n  <p>Property:   {{ s.name }} — {{ s['marks'] }}</p>\n  <p>Array:      {{ list[0] }} · total {{ list.length }}</p>\n  <p>Compare:    {{ s.marks >= 80 }}</p>\n  <p>Chain:      {{ list | filter:\"o\" | limitTo:1 }}</p>\n\n  <!-- galat expression (error nahi, blank) -->\n  <p>Missing:    {{ s.address.city }}</p>\n</div>",
        "language": "html",
        "filename": "expressions.html",
        "php": "Arithmetic: 90000\nFilter:     INR 90,000\nTernary:    In stock\nProperty:   Riya — 88\nArray:      Pen · total 2\nCompare:    true\nChain:      Book\n\nMissing:                  <- undefined par blank, error nahi",
        "label": "Rendered output",
        "height": 240,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "Expression sirf **value** deta hai — loop/if nahi. Aur undefined property par error nahi, khaali output."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Built-in directives — categories",
        "code": "<div ng-app ng-init=\"items=['Pen','Book']; show=true; cls='hot'\">\n\n  <!-- 1. Structural -->\n  <li ng-repeat=\"i in items track by $index\">\n    {{ $index }} - {{ i }}\n  </li>\n  <p ng-if=\"show\">Condition true</p>\n  <div ng-switch=\"items.length\">\n    <span ng-switch-when=\"2\">Do items</span>\n    <span ng-switch-default>Kuch aur</span>\n  </div>\n\n  <!-- 2. Binding / styling -->\n  <input ng-model=\"name\" /><p>{{ name }}</p>\n  <div ng-class=\"{ hot: show, cold: !show }\">class</div>\n  <div ng-style=\"{ color: 'lime' }\">style</div>\n  <img ng-src=\"{{ pic }}\" alt=\"image\" />\n\n  <!-- 3. Events -->\n  <button ng-click=\"show = !show\">Toggle</button>\n  <input ng-change=\"log(name)\" ng-model=\"name\" />\n  <form ng-submit=\"save()\"> ... </form>\n\n  <!-- 4. Form / validation -->\n  <input ng-model=\"email\" ng-required=\"true\"\n         ng-pattern=\"/^\\S+@\\S+$/\" ng-minlength=\"6\" />\n  <button ng-disabled=\"!email\">Send</button>\n</div>",
        "language": "html",
        "filename": "directives.html",
        "php": "0 - Pen\n1 - Book\nCondition true\nDo items              <- ng-switch-when=\"2\"\n\n(pic)                  <- ng-src ne image load kari\n[ Toggle ]\n\n(ng-change par log chalta hai)\n\n[ Send ]               <- invalid email tak disabled",
        "label": "Rendered output",
        "height": 260,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "Char categories: **structural** (ng-repeat/ng-if/ng-switch), **binding+style** (ng-model/ng-class/ng-src), **events** (ng-click/ng-change/ng-submit), **form** (ng-required/ng-pattern/ng-disabled)."
      },
      {
        "type": "points",
        "title": "Custom directive — apna HTML tag",
        "kicker": "Advanced",
        "points": [
          "**Definition object:** `directive('rating', function(){ return { restrict:'E', template:'...', scope:{ value:'=' }, link: fn }; })`",
          "**restrict:** `E` element (`<rating>`), `A` attribute, `C` class, `M` comment (default `EA`).",
          "**scope:** `{}` = isolated scope; `@` string, `=` two-way, `&` expression (callback).",
          "**link(scope, element, attrs):** DOM events, jQuery plugins, imperative kaam yahan.",
          "**compile vs link:** compile template transform karta hai (rare), link instance binding karta hai (common).",
          "**Kab custom directive:** rating stars, date picker, file upload, chart wrapper, permission-based element — repeat hone wala UI behaviour."
        ]
      },
      {
        "type": "comparison",
        "title": "Expression vs Directive",
        "kicker": "Comparison",
        "columns": [
          "Expression {{ }}",
          "Directive ng-*"
        ],
        "rows": [
          {
            "label": "Kya hai",
            "values": [
              "value/calculation",
              "DOM behaviour"
            ]
          },
          {
            "label": "Kahan",
            "values": [
              "text ke andar",
              "element/attribute/class"
            ]
          },
          {
            "label": "Kaam",
            "values": [
              "scope value dikhana",
              "binding, loop, event, validation"
            ]
          },
          {
            "label": "Allowed",
            "values": [
              "operators + filters",
              "scope, controller, link, template"
            ]
          },
          {
            "label": "Example",
            "values": [
              "`{{ price | currency }}`",
              "`<li ng-repeat=\"s in list\">`"
            ]
          },
          {
            "label": "Extension",
            "values": [
              "custom filter bana sakte ho",
              "custom directive bana sakte ho"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#00d4ff"
        ]
      },
      {
        "type": "diagram",
        "title": "Expressions aur directives",
        "kicker": "Diagram",
        "diagram": "wt5-expressions",
        "caption": "Template → expressions ({{ }} + filters) + directives (ng-model, ng-repeat, ng-if, ng-click) → compile/link → DOM"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Expression** `{{ }}` scope par evaluate hoke DOM mein value likhta hai; statements/loops allowed nahi.",
          "**Filters** `|` se: `currency`, `date`, `uppercase`, `orderBy`, `filter`, `limitTo`.",
          "**`ng-bind`/`ng-cloak`** se raw braces flash (FOUC) se bachav; **`::`** one-time binding.",
          "**Directives** = HTML extension: structural (`ng-repeat`, `ng-if`, `ng-switch`), binding (`ng-model`, `ng-class`, `ng-src`), event (`ng-click`, `ng-change`, `ng-submit`), form (`ng-required`, `ng-pattern`, `ng-disabled`).",
          "**Custom directive:** `restrict`, `template`/`templateUrl`, `scope` (`@`, `=`, `&`), `link`.",
          "**Rule:** view logic directives mein, data logic controller/service mein."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain AngularJS expressions with their limitations and give examples.",
        "answer": "**AngularJS expression** `{{ }}` ke andar likhi jaati hai; AngularJS use current **scope** ke against evaluate karke DOM mein value likh deta hai.\n\n**Examples:**\n```html\n{{ 5 + 3 }}                       <!-- 8      -->\n{{ student.name }}                <!-- property -->\n{{ students.length }}             <!-- property -->\n{{ price * qty }}                 <!-- arithmetic -->\n{{ marks >= 40 ? \"Pass\" : \"Fail\" }}   <!-- ternary -->\n{{ list[0] }}                     <!-- array index -->\n{{ price | currency:\"INR\":0 }}    <!-- filter -->\n{{ name | uppercase | limitTo:5 }} <!-- chained filters -->\n```\n\n**Kaise kaam karta hai:** digest cycle ke waqt expression evaluate hota hai; value badli to DOM update.\n\n**Limitations:**\n1. **Statements nahi** — `var`, `if`, `for`, `return` allowed nahi.\n2. **Globals nahi** — `window`, `document`, `alert` directly nahi milte.\n3. **`new` / function declaration nahi** — objects/arrays literals likh sakte ho.\n4. **Forgiving** — undefined property error nahi deta, blank render karta hai (debug mushkil ho sakta hai).\n5. **Har expression ek `$watch`** — bahut saare expressions page slow karte hain.\n\n**Alternatives / best practice:**\n- `ng-bind=\"name\"` — raw braces flash se bachav.\n- `ng-cloak` — compile tak element chhupao.\n- `{{ ::name }}` — one-time binding (performance).\n- Complex logic controller/service mein likho, template mein sirf value.\n\n**Diagram:** Refer to the Expressions aur directives diagram."
      },
      {
        "question": "Explain the built-in directives of AngularJS with examples.",
        "answer": "Directives HTML ko behaviour dete hain. Built-in directives ko 4 groups mein yaad karo:\n\n**1. Structural (DOM structure banate/badalte hain)**\n\n| Directive | Kaam | Example |\n|---|---|---|\n| `ng-app` | app bootstrap | `<body ng-app=\"app\">` |\n| `ng-repeat` | list repeat | `<li ng-repeat=\"s in students\">` |\n| `ng-if` | condition par add/remove | `<div ng-if=\"ok\">` |\n| `ng-switch` | branch select | `ng-switch-when=\"2\"` |\n| `ng-include` | partial template | `<div ng-include=\"'head.html'\">` |\n\n**2. Binding / styling**\n\n| Directive | Kaam |\n|---|---|\n| `ng-model` | input ↔ scope two-way |\n| `ng-bind` | text bind (braces flash nahi) |\n| `ng-class` | class conditionally |\n| `ng-style` | inline style object |\n| `ng-src` / `ng-href` | URL bind (image/link) |\n\n**3. Events**\n- `ng-click`, `ng-change`, `ng-submit`, `ng-focus`/`ng-blur`, `ng-mouseenter`, `ng-keyup`.\n\n**4. Form / validation**\n- `ng-required`, `ng-pattern`, `ng-minlength`/`ng-maxlength`, `ng-disabled`, `ng-valid`/`ng-invalid` classes.\n\n**Example:**\n```html\n<ul>\n  <li ng-repeat=\"s in students | filter:q | orderBy:'-marks'\"\n      ng-class=\"{ topper: s.marks >= 85 }\"\n      ng-click=\"select(s)\">\n    {{ s.name }} — {{ s.marks }}\n  </li>\n</ul>\n```\n\n**Custom directives:** factory returning `{ restrict, template, scope, link }` — jaise `<rating value=\"4\">`.\n\n**Diagram:** Refer to the Expressions aur directives diagram."
      },
      {
        "question": "Write a custom directive in AngularJS and explain restrict, scope and link.",
        "answer": "Custom directive se HTML mein apna tag/attribute bana sakte ho.\n\n**Poora example — rating stars:**\n```javascript\nangular.module(\"app\", [])\n  .directive(\"rating\", function () {\n    return {\n      restrict: \"E\",\n      scope: { value: \"=\", max: \"@\" },\n      template:\n        '<span ng-repeat=\"n in getRange() track by $index\"         ng-click=\"set(n)\">' +\n        '<span ng-class=\"{ on: n <= value }\">*</span></span>',\n      link: function (scope, element, attrs) {\n        scope.max = scope.max || 5;\n        scope.getRange = function () {\n          return new Array(Number(scope.max));\n        };\n        scope.set = function (n) { scope.value = n; };\n      }\n    };\n  });\n```\nUse:\n```html\n<!-- <rating value=\"stars\" max=\"5\"></rating> -->\n<p>You rated: {{ stars }}/5</p>\n```\n\n**Definition object ke parts:**\n\n| Key | Matlab |\n|---|---|\n| `restrict` | `E` element, `A` attribute, `C` class, `M` comment (default `EA`) |\n| `template` / `templateUrl` | HTML ya file |\n| `scope` | `{}` isolated; `@` string, `=` two-way, `&` expression/callback |\n| `link(scope, element, attrs)` | DOM events, instance logic |\n| `compile(tElement, tAttrs)` | template transform (rare, link se pehle) |\n| `controller` | directive ka apna controller (directive-to-directive baat) |\n\n**Kab custom directive:** rating, date picker, chart wrapper, permission-based element, repeat hone wala DOM behaviour.\n\n**Diagram:** Refer to the Expressions aur directives diagram."
      }
    ]
  },
  {
    "id": "angularjs-modules-controllers",
    "number": "5.8",
    "title": "AngularJS Modules and Controllers",
    "subtitle": "angular.module, ng-controller aur $scope ka structure",
    "icon": "puzzle",
    "accent": "#aa00ff",
    "englishDefinition": "A module is the container that groups a part of an AngularJS application: angular.module(name, [requires]) creates (or, with one argument, retrieves) a module, and controllers, services, directives, filters and configuration blocks are registered on it; the dependency array names the other modules it needs (for example ngRoute, ngAnimate, or a shared app.core module) and AngularJS resolves them at bootstrap through the injector. Modules keep the global scope clean, make code testable (a test can load app.core alone) and allow third-party code to plug in. A controller is a constructor function attached to the view with ng-controller; AngularJS instantiates it, injects the requested services ($scope, $http, $timeout, custom services), and its properties and functions become available to the template through $scope (or through the controller-as alias, e.g. ng-controller='StudentCtrl as vm' with vm.students). Each ng-controller creates a new child scope that prototypically inherits from its parent, which is why nested controllers can read parent values but assignments create shadowing properties. Controllers should stay thin: data access and business rules belong in services, DOM manipulation in directives, and controllers are registered with array-notation injection so minification does not break dependency names.",
    "intro": "**Module** = app ka dabba, **Controller** = us dabbe ke andar ka manager. `angular.module('app', ['ngRoute'])` module banata hai, aur `.controller`, `.factory`, `.directive`, `.filter` usi par register hote hain. Controller `ng-controller` se view se judta hai aur **`$scope`** (ya `controller as vm`) ke through template ko data deta hai. Ek zaroori baat: har `ng-controller` **naya child scope** banata hai jo parent se inherit karta hai — isliye nested controllers mein assignment se shadowing ho jaati hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Module aur controller ka rishta",
        "kicker": "Definition",
        "body": "**Module** `angular.module(name, requires)` se banta hai — dependencies ki list (jaise `ngRoute`, `ngAnimate`, ya apna shared module) dete ho. Uske baad `.controller()`, `.factory()`, `.directive()`, `.filter()`, `.config()` se sab kuch **usi module par** register hota hai.",
        "body2": "**Controller** ek constructor function hai jo `ng-controller` se view se judta hai. AngularJS use banata hai, dependencies (`$scope`, `$http`, custom services) inject karta hai, aur uske properties/functions template mein available ho jaate hain — `$scope` ke through ya `controller as vm` ke through (`vm.students`).",
        "chips": [
          "angular.module()",
          "dependency list",
          "ng-controller",
          "$scope",
          "controller as",
          "DI array notation"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Module + do controllers (parent–child)",
        "code": "<div ng-app=\"shopApp\">\n\n  <!-- parent controller: cart -->\n  <div ng-controller=\"CartCtrl as cart\">\n    <h3>{{ cart.title }} ({{ cart.items.length }})</h3>\n    <p>Total: {{ cart.total() | currency:\"INR\":0 }}</p>\n\n    <!-- child controller: product list -->\n    <div ng-controller=\"ProductCtrl as prod\">\n      <input ng-model=\"prod.q\" placeholder=\"search\" />\n      <ul>\n        <li ng-repeat=\"p in prod.list | filter:prod.q\">\n          {{ p.name }} — {{ p.price | currency:\"INR\":0 }}\n          <button ng-click=\"cart.add(p)\">Add</button>\n        </li>\n      </ul>\n      <p ng-if=\"cart.items.length\">Cart mein {{ cart.items.length }} item</p>\n    </div>\n  </div>\n</div>\n\n<script>\n  angular.module(\"shopApp\", [])\n\n    .controller(\"CartCtrl\", [\"$scope\", function ($scope) {\n      var vm = this;\n      vm.title = \"My Cart\";\n      vm.items = [];\n      vm.add = function (p) { vm.items.push(p); };\n      vm.total = function () {\n        return vm.items.reduce(function (a, p) { return a + p.price; }, 0);\n      };\n    }])\n\n    .controller(\"ProductCtrl\", function () {\n      var vm = this;\n      vm.list = [\n        { name: \"Pen\",   price: 20 },\n        { name: \"Book\",  price: 250 },\n        { name: \"Bag\",   price: 1200 }\n      ];\n    });\n</script>",
        "language": "html",
        "filename": "shop.html",
        "php": "My Cart (1)\nTotal: INR 250\n\n[ pen        ]\nPen — INR 20    [ Add ]\nBook — INR 250  [ Add ]\nBag — INR 1,200 [ Add ]\n\nCart mein 1 item        <- child controller parent ka cart padh raha hai",
        "label": "Rendered output",
        "height": 270,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "`CartCtrl as cart` parent child scope banata hai; andar `ProductCtrl as prod` usko **padh** sakta hai (prototype inheritance) aur `cart.add()` call kar sakta hai."
      },
      {
        "type": "comparison",
        "title": "$scope vs controller as",
        "kicker": "Comparison",
        "columns": [
          "$scope style",
          "controller as (vm)"
        ],
        "rows": [
          {
            "label": "Likho",
            "values": [
              "`$scope.name = ...`",
              "`vm.name = ...`"
            ]
          },
          {
            "label": "Template",
            "values": [
              "`{{ name }}`",
              "`{{ vm.name }}`"
            ]
          },
          {
            "label": "Nesting",
            "values": [
              "`$parent` ka andhera",
              "`vm` saaf dikhta hai"
            ]
          },
          {
            "label": "Testing",
            "values": [
              "scope inject karna padta",
              "controller instance test"
            ]
          },
          {
            "label": "Angular 2+",
            "values": [
              "nahi milta",
              "component class ka `this` jaisa"
            ]
          },
          {
            "label": "Kab",
            "values": [
              "purana code, directives",
              "naya code (recommended)"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#00e676"
        ]
      },
      {
        "type": "points",
        "title": "Rules jo interview mein poochhte hain",
        "kicker": "Practices",
        "points": [
          "**Module dependencies:** `angular.module('app', ['ngRoute'])` — list na do to module **retrieve** hota hai (dubara banane par error).",
          "**Minification-safe DI:** `['$scope', '$http', function($scope, $http){...}]` ya `$inject` property.",
          "**Patla controller:** `$http`/business logic service mein, controller sirf view-model banaye.",
          "**No DOM:** controller mein `document`/`jQuery` nahi — directive likho.",
          "**Child scope:** `ng-repeat`/`ng-if` bhi child scope banate hain; parent ko update karna ho to object ki property badlo (prototype shadowing se bacho).",
          "**Module splitting:** `app.core` (services), `app.students` (feature), `app` (root) — testing aur lazy loading ke liye.",
          "**`$controller` service:** test mein controller manually banane ke liye use hoti hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Modules aur controllers",
        "kicker": "Diagram",
        "diagram": "wt5-modules",
        "caption": "ng-app → root module → dependencies (ngRoute, app.core) → controllers + services + directives → $scope → view"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Module:** `angular.module(name, [deps])` — controllers, services, directives, filters ka container.",
          "**Controller:** `ng-controller` se juda function; services DI se milti hain; `$scope`/`vm` template ko data deta hai.",
          "**Child scope:** har `ng-controller` naya child scope banata hai (prototype inheritance).",
          "**`controller as vm`:** naya code ke liye behtar — nesting aur testing saaf.",
          "**DI:** array notation se minification-safe.",
          "**Rule:** patla controller, logic service mein, DOM directive mein."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain modules and controllers in AngularJS with an example.",
        "answer": "**Module** ek container hai jo app ka ek hissa group karta hai; **controller** us module ka wo function hai jo view ko data/model deta hai.\n\n**1. Module**\n```javascript\nvar app = angular.module(\"collegeApp\", [\"ngRoute\"]);\n```\n- `angular.module(name, [])` → naya module; `angular.module(name)` → purana retrieve.\n- Dependencies ki list: `ngRoute`, `ngAnimate`, `app.core` (apne shared modules).\n- Register: `.controller()`, `.factory()`, `.service()`, `.directive()`, `.filter()`, `.config()`, `.run()`.\n\n**2. Controller**\n```javascript\napp.controller(\"StudentCtrl\", [\"$scope\", \"StudentService\",\n  function ($scope, StudentService) {\n    $scope.students = StudentService.all();\n    $scope.save = function (s) { StudentService.add(s); };\n  }]);\n```\n- `ng-controller=\"StudentCtrl\"` se HTML se judta hai.\n- AngularJS instance banata hai aur `$scope`, `$http`, custom services inject karta hai.\n- Template `$scope`/`vm` ki properties padhta hai; `ng-click` se functions chalte hain.\n\n**3. `controller as` syntax**\n```html\n<div ng-controller=\"StudentCtrl as vm\">\n  <li ng-repeat=\"s in vm.students\">{{ s.name }}</li>\n</div>\n```\nNesting aur testing saaf ho jaati hai (Angular 2+ ke components jaisa).\n\n**4. Fayde:** global variables se bachav, modular testing, reuse, dependencies ka clear graph.\n\n**Diagram:** Refer to the Modules aur controllers diagram."
      },
      {
        "question": "What is the difference between $scope and controller as syntax? Explain child scopes.",
        "answer": "Dono ka kaam same hai — view ko model dena — par style aur clarity alag.\n\n| Point | $scope | controller as (vm) |\n|---|---|---|\n| Bind | `$scope.x` | `vm.x` |\n| Template | `{{ x }}` | `{{ vm.x }}` |\n| Nesting | `$parent` confusion | `vm` explicit |\n| Testing | scope inject karo | controller instance test |\n| Angular 2+ feel | nahi | haan (`this`) |\n\n**Child scope (prototype inheritance):**\n- Har `ng-controller`, `ng-repeat`, `ng-if` naya **child scope** banata hai.\n- Child parent ki **primitive** value padh sakta hai; **assign** karne par child par **naya property** ban jaata hai (shadowing) — parent nahi badalta.\n```javascript\n$scope.count = 1;             // parent\n// child controller\n$scope.count = 2;             // child ka apna count, parent ka 1 hi rahega\n```\n**Fix:** object ki property badlo — `$scope.data.count = 2` (reference same) — ya `controller as` use karo.\n\n**`ng-model` ka classic trap:** `ng-if`/`ng-repeat` ke andar primitive par bind karna; object (`vm.form.name`) use karo.\n\n**Diagram:** Refer to the Modules aur controllers diagram."
      },
      {
        "question": "Explain dependency injection in AngularJS with its benefits.",
        "answer": "**Dependency injection (DI)** ka matlab: object apni dependencies khud nahi banata — framework unhe **inject** karta hai.\n\n**AngularJS mein DI kaise:**\n```javascript\napp.controller(\"Ctrl\", [\"$scope\", \"$http\", \"StudentService\",\n  function ($scope, $http, StudentService) {\n    // teeno dependencies inject ho gayi\n  }]);\n```\n- **$injector** controller banane se pehle dependencies resolve karta hai.\n- **Naam se** resolve hota hai — isliye **minification** ke baad naam badalne se error aata hai.\n- **Array notation** ya `$inject` property se naam safe rehte hain.\n\n**Teen tarike:**\n1. **Array notation (recommended)** — `[\"$scope\", fn]`.\n2. **$inject property** — `Ctrl.$inject = [\"$scope\"]`.\n3. **Implicit (naam se)** — dev mein chalta hai, production build mein toot sakta hai.\n\n**Kya inject hota hai:**\n- Built-in services: `$scope`, `$http`, `$q`, `$timeout`, `$location`, `$routeParams`, `$filter`, `$log`.\n- Apni services/factories: `StudentService`, `AuthService`.\n- Values/constants/configs.\n\n**Fayde:**\n- **Loose coupling** — controller ko concrete service ka pata nahi, sirf interface.\n- **Testability** — test mein fake service inject karo (`$httpBackend`).\n- **Reuse** — ek service kai controllers mein.\n- **Maintainability** — implementation badlo, callers nahi.\n\n**Diagram:** Refer to the Modules aur controllers diagram."
      }
    ]
  },
  {
    "id": "angularjs-forms-binding",
    "number": "5.9",
    "title": "AngularJS Forms and Two-Way Data Binding",
    "subtitle": "ng-model, form state aur ng-submit",
    "icon": "check",
    "accent": "#00e676",
    "englishDefinition": "AngularJS treats a form as a directive: any form element (or ng-form for nesting) automatically becomes a FormController instance published on the scope under its name attribute, exposing $pristine/$dirty, $valid/$invalid, $submitted, $error and the same flags for every named input. Two-way data binding is achieved with ng-model, which reads the model into the control and writes the control's value back to the model on input events, tracking validation state and applying modifiers such as ng-model-options (updateOn, debounce, allowInvalid) and getter/setter support; the change enters the digest cycle through $apply, so every dependent expression and directive updates automatically. Submission is handled with ng-submit (which prevents the default full-page post) and ng-click on a button, and the controller decides what to do with the model, usually calling a service and resetting the form with $setPristine() and $setUntouched(). Because AngularJS forms are plain HTML plus model state, the same form works for create and edit screens, can show field-level errors from form.field.$error, and can be unit-tested by driving the model instead of simulating typing.",
    "intro": "AngularJS mein form koi alag cheez nahi — **`<form>` khud ek directive hai**. Har form scope par apna controller object publish karta hai: `formName.$valid`, `$dirty`, `$error`, aur har input ka bhi (`f.email.$invalid`). Iske saath **`ng-model`** two-way binding deta hai — type karo to model update, model badlo to input update. **`ng-submit`** page reload rokta hai, aur submit ke baad `$setPristine()` se form dobara naya ho jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Form = directive + model state",
        "kicker": "Definition",
        "body": "AngularJS mein `<form name=\"f\">` khud compile hoke **FormController** banta hai aur scope par `f` naam se publish hota hai. Uske flags: `$pristine`/`$dirty` (chhua ya nahi), `$valid`/`$invalid`, `$submitted`, `$error`. Har **named input** ka bhi apna controller hota hai: `f.email.$invalid`, `f.email.$error.required`.",
        "body2": "**`ng-model`** two-way binding karta hai: input → model (typing par) aur model → input (code se badalne par). Change digest cycle se jaata hai, isliye `{{ }}`, `ng-class`, validation messages sab apne aap update ho jaate hain. **`ng-submit`** default page post rokta hai.",
        "chips": [
          "ng-model",
          "form.$valid",
          "form.$dirty",
          "ng-submit",
          "$setPristine()",
          "ng-model-options"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Registration form — poora flow",
        "code": "<div ng-app=\"regApp\" ng-controller=\"RegCtrl\">\n  <form name=\"f\" ng-submit=\"save(f)\" novalidate>\n\n    <label>Name</label>\n    <input name=\"name\" ng-model=\"vm.name\" required />\n\n    <label>Email</label>\n    <input name=\"email\" type=\"email\" ng-model=\"vm.email\"\n           required ng-pattern=\"/^\\S+@\\S+\\.\\S+$/\" />\n\n    <label>Age</label>\n    <input name=\"age\" type=\"number\" ng-model=\"vm.age\"\n           min=\"18\" max=\"60\" />\n\n    <button type=\"submit\" ng-disabled=\"f.$invalid\">Register</button>\n    <button type=\"button\" ng-click=\"reset(f)\">Reset</button>\n\n    <p ng-if=\"f.$submitted && f.$invalid\">Form mein galti hai</p>\n    <p ng-if=\"vm.msg\">{{ vm.msg }}</p>\n  </form>\n\n  <pre>{{ f.$valid }} | {{ f.$dirty }} | {{ vm | json }}</pre>\n</div>\n\n<script>\n  angular.module(\"regApp\", [])\n    .controller(\"RegCtrl\", function () {\n      var vm = this;\n\n      vm.save = function (form) {\n        if (form.$invalid) { return; }\n        // (yahan service call: StudentService.add({...}))\n        form.$setPristine();                         // form naya jaisa\n        form.$setUntouched();\n        vm.msg = \"Saved: \" + vm.name + \" (\" + vm.email + \")\";\n      };\n\n      vm.reset = function (form) {\n        vm.name = \"\"; vm.email = \"\"; vm.age = null;\n        form.$setPristine(); form.$setUntouched();\n        vm.msg = \"\";\n      };\n    });\n</script>",
        "language": "html",
        "filename": "register.html",
        "php": "Name   [ Riya            ]\nEmail  [ riya@mca.in      ]\nAge    [ 22              ]\n[ Register ]   [ Reset ]\n\ntrue | true | {\"name\":\"Riya\",\"email\":\"riya@mca.in\",\"age\":22}\n\nSaved: Riya (riya@mca.in)     <- submit ke baad, koi reload nahi",
        "label": "Rendered output",
        "height": 270,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "`ng-submit` page reload rokta hai; `ng-disabled=\"f.$invalid\"` button ko invalid form par band rakhta hai; submit ke baad `$setPristine()` se form clean."
      },
      {
        "type": "cards",
        "title": "Form state jo miya zaati taur par milti hai",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "check",
            "title": "$valid / $invalid",
            "body": "Form ya field valid hai ya nahi — validation directives se calculate hota hai."
          },
          {
            "icon": "eye",
            "title": "$pristine / $dirty",
            "body": "User ne chhua ya nahi — 'dirty' par hi error dikhana best practice hai."
          },
          {
            "icon": "zap",
            "title": "$touched / $untouched",
            "body": "Field blur hui ya nahi — `ng-show=\"f.email.$touched && f.email.$invalid\"`."
          },
          {
            "icon": "terminal",
            "title": "$submitted",
            "body": "Submit button dabaya gaya — submit ke baad hi error dikhane ke liye."
          },
          {
            "icon": "alert",
            "title": "$error",
            "body": "Kaun si validation fail hui: `f.email.$error.required`, `f.email.$error.pattern`."
          },
          {
            "icon": "layers",
            "title": "CSS classes",
            "body": "`ng-valid`, `ng-invalid`, `ng-dirty`, `ng-touched` automatically add/remove hoti hain — styling free."
          }
        ]
      },
      {
        "type": "points",
        "title": "Two-way binding ke practical rules",
        "kicker": "Binding",
        "points": [
          "**`ng-model` + object:** `vm.form.name` use karo, primitive par seedha bind karne se nested scope shadowing hoti hai.",
          "**`ng-model-options=\"{ debounce: 300 }\"`** — typing ke beech mein model update kam, search boxes ke liye.",
          "**`updateOn: 'blur'`** — model sirf blur par update (heavy validation ke liye).",
          "**`allowInvalid: true`** — galat value bhi model mein rakhni ho (jaise number input ka partial input).",
          "**`ng-trim`** — default true; space trim nahi chahiye to `ng-trim=\"false\"`.",
          "**View → model:** typing par `$setViewValue` → `$apply` → digest.",
          "**Model → view:** controller mein value badlo → digest → input update."
        ]
      },
      {
        "type": "comparison",
        "title": "ng-model ke saath HTML inputs",
        "kicker": "Comparison",
        "columns": [
          "Input",
          "Binding"
        ],
        "rows": [
          {
            "label": "text / email / url",
            "values": [
              "string",
              "ng-model=\"vm.email\""
            ]
          },
          {
            "label": "number",
            "values": [
              "number (string if invalid)",
              "min/max validation"
            ]
          },
          {
            "label": "checkbox",
            "values": [
              "boolean ya array",
              "ng-true-value / ng-false-value"
            ]
          },
          {
            "label": "radio",
            "values": [
              "selected value",
              "same ng-model + value"
            ]
          },
          {
            "label": "select",
            "values": [
              "option value",
              "ng-options=\"s.id as s.name for s in list\""
            ]
          },
          {
            "label": "textarea",
            "values": [
              "string",
              "ng-model + ng-trim"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#00d4ff"
        ]
      },
      {
        "type": "diagram",
        "title": "Forms aur two-way binding",
        "kicker": "Diagram",
        "diagram": "wt5-forms",
        "caption": "Input → ng-model → $scope/$setViewValue → digest → validation state (valid/dirty) → view update"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Form = directive:** scope par `f.$valid`, `f.$dirty`, `f.$error` milta hai.",
          "**ng-model** two-way binding: typing → model, model change → input.",
          "**ng-submit** page reload rokta hai; `f.$submitted` se submit ke baad error dikhao.",
          "**`$setPristine()` / `$setUntouched()`** submit ke baad form reset.",
          "**`ng-model-options`:** debounce, updateOn, allowInvalid, ng-trim.",
          "**CSS classes** (`ng-valid`/`ng-invalid`/`ng-dirty`) automatically lagti hain."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain form handling in AngularJS with an example.",
        "answer": "AngularJS mein form ek directive hai — HTML form par AngularJS automatic **FormController** bana deta hai.\n\n**Form controller (scope par `f` naam se):**\n\n| Property | Matlab |\n|---|---|\n| `f.$valid` / `f.$invalid` | form valid hai ya nahi |\n| `f.$pristine` / `f.$dirty` | user ne chhua ya nahi |\n| `f.$touched` / `f.$untouched` | field blur hui ya nahi |\n| `f.$submitted` | submit dabaya gaya |\n| `f.email.$error.required` | kaun si validation fail hui |\n\n**Example:**\n```html\n<form name=\"f\" ng-submit=\"save(f)\" novalidate>\n  <input name=\"name\" ng-model=\"vm.name\" required />\n  <input name=\"email\" type=\"email\" ng-model=\"vm.email\" required />\n  <button ng-disabled=\"f.$invalid\" type=\"submit\">Save</button>\n  <p ng-show=\"f.name.$touched && f.name.$invalid\">Name required</p>\n</form>\n```\n\n```javascript\nvm.save = function (form) {\n  if (form.$invalid) return;\n  StudentService.add({ name: vm.name, email: vm.email });\n  form.$setPristine();     // form reset\n  form.$setUntouched();\n};\n```\n\n**Important points:**\n1. `ng-submit` default page reload rokta hai.\n2. `novalidate` HTML5 browser validation band karta hai (AngularJS khud kare).\n3. `f.$submitted` se submit ke baad hi errors dikhayein.\n4. CSS classes (`ng-valid`, `ng-invalid`, `ng-dirty`) automatically lagti hain — styling free.\n5. `ng-disabled=\"f.$invalid\"` se invalid form submit nahi hota.\n\n**Diagram:** Refer to the Forms aur two-way binding diagram."
      },
      {
        "question": "Explain two-way data binding in AngularJS with the digest cycle.",
        "answer": "**Two-way binding:** view aur model ek doosre se juda — ek badle to doosra apne aap badle.\n\n**Kaise kaam karta hai:**\n```html\n<input ng-model=\"vm.name\" />\n<p>Hello {{ vm.name }}</p>\n```\n1. **View → Model:** user type karta hai → `ng-model` `$setViewValue()` chalta hai → `$scope.vm.name` update.\n2. **Model → View:** controller mein `vm.name = \"Riya\"` → digest cycle → input aur `{{ vm.name }}` dono update.\n\n**Digest cycle:**\n- `$apply()` → `$digest()` start.\n- `$digest` har `$watch` expression dobara evaluate karta hai (dirty checking).\n- Change mila → listener → DOM update.\n- Loop tab tak jab tak koi watch dirty na rahe (ya 10 iterations → infinite digest error).\n\n**Digest ke bahar ka change:**\n```javascript\nsetTimeout(function () {\n  $scope.$apply(function () { $scope.name = \"Riya\"; });\n}, 1000);\n```\nYa `$timeout` service use karo (andaza lagao).\n\n**Performance ke rules:**\n- One-time binding `{{ ::name }}` — watch hata deta hai.\n- `track by` in `ng-repeat`.\n- Bahut saare `$watch` avoid karo; `ng-model-options=\"{ debounce: 300 }\"` se updates kam.\n\n**Diagram:** Refer to the Forms aur two-way binding diagram."
      },
      {
        "question": "What is the difference between $pristine, $dirty, $touched and $submitted in an AngularJS form?",
        "answer": "Chaar flags form ki **user interaction history** batate hain — validation messages ke liye zaroori.\n\n| Flag | Matlab | Kab true/valid hota hai |\n|---|---|---|\n| `$pristine` | user ne kuch nahi badla | shuru mein true, edit par false |\n| `$dirty` | user ne kuch badla | pehle edit par true |\n| `$touched` | field se blur hua | focus jaane par true |\n| `$untouched` | kabhi blur nahi hua | shuru mein true |\n| `$submitted` | submit button dabaya | `ng-submit` ke baad true |\n\n**Kyun zaroori:** shuru se hi red errors dikhana bad UX hai. Best practice:\n```html\n<input name=\"email\" ng-model=\"vm.email\" required />\n<span ng-show=\"f.email.$invalid &&\n              (f.email.$touched || f.$submitted)\">\n  Valid email required\n</span>\n```\nYani error tab dikhao jab user ne field chhod diya ya submit dabaya.\n\n**Reset after save:**\n```javascript\nform.$setPristine();     // $pristine = true, $dirty = false\nform.$setUntouched();    // $touched = false\n```\n\n**CSS classes:** `ng-pristine`, `ng-dirty`, `ng-touched`, `ng-untouched`, `ng-valid`, `ng-invalid` — automatically element par lagti hain, isliye CSS se hi styling ho sakti hai.\n\n**Diagram:** Refer to the Forms aur two-way binding diagram."
      }
    ]
  },
  {
    "id": "angularjs-validation",
    "number": "5.10",
    "title": "Validation Directives in AngularJS",
    "subtitle": "required, ng-minlength, ng-pattern, ng-messages",
    "icon": "shield",
    "accent": "#00bcd4",
    "englishDefinition": "AngularJS validates forms declaratively with directives on the input and exposes the result through the form and field controllers. required fails when the value is empty; ng-minlength and ng-maxlength bound the string length; ng-pattern takes a regular expression (inline or a $scope value) and fails on mismatch; type='email', type='number', type='url' trigger the browser-level validators (email, number, url); min and max bound numeric values; ng-required, ng-disabled and ng-readonly accept expressions so fields can be conditionally required; and ng-model-options can allow or reject invalid values. Failed validators appear in field.$error (required, minlength, max length, pattern, email, number, min, max) and toggle the CSS classes ng-valid/ng-invalid plus ng-dirty/ng-touched on the element, so errors can be shown with ng-show/ng-if or the ngMessages module (ng-message='required', ng-message='pattern') for a tidy message list. Server-side checks remain essential because client validation can be bypassed, custom validation is added through a custom directive using $validators or ngModelController.$setValidity, and the submit handler should still test form.$invalid before saving.",
    "intro": "Validation AngularJS mein **HTML mein hi** hoti hai — `required`, `ng-minlength`, `ng-pattern`, `type=\"email\"`, `min`/`max`. Result `form.field.$error` mein milta hai (`$error.required`, `$error.pattern`) aur element par `ng-valid`/`ng-invalid` classes lag jaati hain. Error dikhane ke do tarike: `ng-show` ke saath condition, ya **`ngMessages`** module se saaf message list. Aur yaad rakho: client validation **bypass** ho sakti hai — server par bhi check karo.",
    "sections": [
      {
        "type": "definition",
        "title": "Validation directives kya hain",
        "kicker": "Definition",
        "body": "AngularJS validation **declarative** hai: input par directive lagao, AngularJS us input ke controller par result rakhta hai. Fail hone par `f.email.$error.required` / `$error.pattern` true hota hai, aur form/field `$invalid` ho jaata hai.",
        "body2": "Har validator element par CSS classes bhi badalta hai — `ng-valid`/`ng-invalid`, `ng-dirty`/`ng-pristine`, `ng-touched`. Isliye CSS se hi red border, aur `ng-show`/`ngMessages` se message — alag JavaScript likhne ki zaroorat nahi.",
        "chips": [
          "required",
          "ng-minlength",
          "ng-pattern",
          "type=email",
          "min/max",
          "$error",
          "ngMessages"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Validation directives — poora form",
        "code": "<div ng-app=\"valApp\" ng-controller=\"ValCtrl\">\n  <form name=\"f\" ng-submit=\"save(f)\" novalidate>\n\n    <!-- 1. required -->\n    <input name=\"name\" ng-model=\"vm.name\" required\n           placeholder=\"Name (required)\" />\n\n    <!-- 2. length -->\n    <input name=\"user\" ng-model=\"vm.user\"\n           ng-minlength=\"4\" ng-maxlength=\"12\"\n           placeholder=\"Username 4-12 chars\" />\n\n    <!-- 3. pattern (regexp) -->\n    <input name=\"pin\" ng-model=\"vm.pin\"\n           ng-pattern=\"/^[0-9]{6}$/\" placeholder=\"PIN 6 digits\" />\n\n    <!-- 4. type based -->\n    <input name=\"email\" type=\"email\" ng-model=\"vm.email\"\n           placeholder=\"Email\" />\n    <input name=\"age\" type=\"number\" ng-model=\"vm.age\"\n           min=\"18\" max=\"60\" placeholder=\"Age 18-60\" />\n\n    <!-- 5. conditional required -->\n    <input name=\"phone\" ng-model=\"vm.phone\"\n           ng-required=\"vm.needPhone\" placeholder=\"Phone\" />\n    <label><input type=\"checkbox\" ng-model=\"vm.needPhone\" />\n      Phone zaroori hai</label>\n\n    <button type=\"submit\">Save</button>\n\n    <!-- error messages -->\n    <div ng-show=\"f.name.$invalid && f.name.$touched\">\n      Name required\n    </div>\n    <div ng-show=\"f.pin.$error.pattern\">PIN 6 digits ka hona chahiye</div>\n    <div ng-show=\"f.age.$error.number || f.age.$error.min || f.age.$error.max\">\n      Age 18 se 60 ke beech\n    </div>\n  </form>\n</div>",
        "language": "html",
        "filename": "validation.html",
        "php": "[ Name (required)        ]        Name required\n[ ab                    ]        (username 4-12 -> invalid)\n[ 12ab                  ]        PIN 6 digits ka hona chahiye\n[ riya@mca              ]        (email invalid)\n[ 15                    ]        Age 18 se 60 ke beech\n[                       ]        Phone required (checkbox on)\n\nform.$invalid = true  ->  submit block",
        "label": "Rendered output",
        "height": 270,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "Paanch validators ek form mein: `required`, `ng-minlength`/`ng-maxlength`, `ng-pattern`, `type=\"email\"`, `min`/`max`, aur `ng-required` expression ke saath."
      },
      {
        "type": "comparison",
        "title": "Validation directives",
        "kicker": "Comparison",
        "columns": [
          "Directive",
          "Fail kab",
          "$error key"
        ],
        "rows": [
          {
            "label": "required",
            "values": [
              "value khaali",
              "required"
            ]
          },
          {
            "label": "ng-minlength",
            "values": [
              "length < n",
              "minlength"
            ]
          },
          {
            "label": "ng-maxlength",
            "values": [
              "length > n",
              "maxlength"
            ]
          },
          {
            "label": "ng-pattern",
            "values": [
              "regexp match nahi",
              "pattern"
            ]
          },
          {
            "label": "type=\"email\"",
            "values": [
              "email format galat",
              "email"
            ]
          },
          {
            "label": "type=\"number\"",
            "values": [
              "number nahi",
              "number"
            ]
          },
          {
            "label": "min / max",
            "values": [
              "range ke bahar",
              "min / max"
            ]
          },
          {
            "label": "ng-required",
            "values": [
              "expression true aur khaali",
              "required"
            ]
          }
        ],
        "columnColors": [
          "#00bcd4",
          "#ff8800"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "ngMessages — saaf error list",
        "code": "<!-- module dependency -->\n<script>\n  angular.module(\"valApp\", [\"ngMessages\"]);\n</script>\n\n<form name=\"f\" novalidate>\n  <input name=\"pin\" ng-model=\"vm.pin\"\n         ng-pattern=\"/^[0-9]{6}$/\" required />\n\n  <div ng-messages=\"f.pin.$error\"\n       ng-if=\"f.pin.$touched\"\n       class=\"errors\">\n    <div ng-message=\"required\">PIN khaali nahi ho sakta</div>\n    <div ng-message=\"pattern\">Sirf 6 digits</div>\n    <div ng-message=\"minlength\">Bahut chhota</div>\n    <div ng-message-default>Galat value</div>\n  </div>\n</form>",
        "language": "html",
        "filename": "messages.html",
        "php": "PIN [ 12ab ]  (blur ke baad)\n\nSirf 6 digits          <- ek hi message, saaf list\n\nPIN [   ]    -> PIN khaali nahi ho sakta\nPIN [ 123456 ] -> koi error nahi",
        "label": "Rendered output",
        "height": 230,
        "outputHint": "AngularJS · rendered output",
        "outputNote": "AngularJS browser mein chalta hai — source mein directives likhte hain, screen par rendered HTML milta hai.",
        "intro": "`ng-messages` mein sirf **ek** message dikhta hai (jo fail hua), `ng-message-default` fallback deta hai — manual `ng-show` chain se behtar."
      },
      {
        "type": "points",
        "title": "Validation ke practical rules",
        "kicker": "Rules",
        "points": [
          "**`novalidate` form par lagao** — warna browser ka native validation AngularJS se pehle rok dega.",
          "**Error tab dikhao jab `$touched` ya `$submitted`** ho — shuru se red dikhana bad UX.",
          "**Submit handler** mein `if (form.$invalid) return;` — warna Enter key/script se bypass ho sakta hai.",
          "**Custom validation:** directive mein `$validators` ya `ngModel.$setValidity('even', ok)`.",
          "**Async validation:** `$asyncValidators` (jaise username available hai ya nahi) — `$pending` flag ke saath.",
          "**Server-side check zaroori** — client validation bypass ho sakti hai (DevTools, curl).",
          "**Messages i18n:** `ng-message` keys ko translate karo; same form kai languages mein."
        ]
      },
      {
        "type": "diagram",
        "title": "Validation flow",
        "kicker": "Diagram",
        "diagram": "wt5-validation",
        "caption": "Input → validator directives → $error + ng-valid/ng-invalid classes → ng-show/ngMessages → submit block"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Validators:** `required`, `ng-minlength`/`ng-maxlength`, `ng-pattern`, `type=\"email\"`/`number`, `min`/`max`, `ng-required`.",
          "**Result:** `form.field.$error.<key>` + `$valid`/`$invalid` classes.",
          "**Messages:** `ng-show` condition Ya `ngMessages` module (`ng-message`, `ng-message-default`).",
          "**`novalidate`** form par — browser validation off.",
          "**Error dikhane ka rule:** `$touched` ya `$submitted` ke baad.",
          "**Server validation** hamesha — client script bypass ho sakti hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain validation directives in AngularJS with examples.",
        "answer": "AngularJS validation declarative hai — input par directive lagao, result `$error` mein milta hai.\n\n**Validation directives:**\n\n| Directive | Kaam | Example |\n|---|---|---|\n| required | khaali na ho | `<input required />` |\n| ng-minlength / ng-maxlength | length limit | `ng-minlength=\"4\"` |\n| ng-pattern | regexp match | `ng-pattern=\"/^[0-9]{6}$/\"` |\n| type=\"email\" | email format | `type=\"email\"` |\n| type=\"number\" | numeric | `type=\"number\"` |\n| min / max | number range | `min=\"18\" max=\"60\"` |\n| ng-required | conditional | `ng-required=\"needPhone\"` |\n| ng-disabled | field disable | `ng-disabled=\"locked\"` |\n\n**Example:**\n```html\n<form name=\"f\" ng-submit=\"save(f)\" novalidate>\n  <input name=\"email\" type=\"email\" ng-model=\"vm.email\" required />\n  <span ng-show=\"f.email.$error.required\">Email required</span>\n  <span ng-show=\"f.email.$error.email\">Email galat hai</span>\n  <button ng-disabled=\"f.$invalid\">Save</button>\n</form>\n```\n\n**Form/field state:** `$valid`, `$invalid`, `$pristine`, `$dirty`, `$touched`, `$submitted`, `$error.<key>`.\n\n**CSS classes** automatically: `ng-valid`, `ng-invalid`, `ng-dirty`, `ng-touched` — styling free.\n\n**ngMessages module:**\n```html\n<div ng-messages=\"f.email.$error\">\n  <div ng-message=\"required\">Email required</div>\n  <div ng-message=\"email\">Invalid email</div>\n</div>\n```\n\n**Custom validation:**\n```javascript\nngModel.$validators.even = function (m) { return m % 2 === 0; };\n```\n\n**Dhyan:** client validation bypass ho sakti hai — server par bhi validate karo.\n\n**Diagram:** Refer to the Validation flow diagram."
      },
      {
        "question": "Explain form validation using ngMessages and show/hide of error messages.",
        "answer": "Do tarike hain — manual `ng-show` ya `ngMessages` module.\n\n**A. Manual ng-show (chhote forms ke liye):**\n```html\n<form name=\"f\" novalidate>\n  <input name=\"user\" ng-model=\"vm.user\"\n         required ng-minlength=\"4\" ng-pattern=\"/^[a-z0-9]+$/\" />\n\n  <span ng-show=\"f.user.$error.required &&\n                 (f.user.$touched || f.submitted)\">Required</span>\n  <span ng-show=\"f.user.$error.minlength\">Min 4 chars</span>\n  <span ng-show=\"f.user.$error.pattern\">Only a-z 0-9</span>\n</form>\n```\n\n**B. ngMessages module (recommended):**\n```javascript\nangular.module(\"app\", [\"ngMessages\"]);\n```\n```html\n<div ng-messages=\"f.user.$error\"\n     ng-if=\"f.user.$touched || f.submitted\">\n  <div ng-message=\"required\">Required</div>\n  <div ng-message=\"minlength\">Min 4 chars</div>\n  <div ng-message=\"pattern\">Only a-z 0-9</div>\n  <div ng-message-default\">Invalid value</div>\n</div>\n```\n**Fayde:** ek waqt par sirf **ek** message (jo pehle fail hua), DOM mein saare messages render nahi hote, `ng-message-default` fallback, template saaf.\n\n**Validation messages ka best practice:**\n1. `novalidate` form par — browser validation off.\n2. `$touched`/`$submitted` ke baad dikhao — immediate red na.\n3. Field ke saath inline error + top par summary (optional).\n4. Server error ko bhi `$setValidity()` se same UI mein dikhao.\n\n**Diagram:** Refer to the Validation flow diagram."
      },
      {
        "question": "How do you write custom validation in AngularJS? Explain with an example.",
        "answer": "Custom validation directive se likhte hain — `$validators` ya `$setValidity` ke through.\n\n**A. $validators (AngularJS 1.3+, recommended):**\n```javascript\nangular.module(\"app\", [])\n  .directive(\"evenNumber\", function () {\n    return {\n      require: \"ngModel\",\n      link: function (scope, element, attrs, ngModel) {\n        ngModel.$validators.even = function (modelValue) {\n          if (!modelValue) return true;         // khaali ho to required handle kare\n          return Number(modelValue) % 2 === 0;\n        };\n      }\n    };\n  });\n```\n```html\n<input type=\"number\" name=\"num\" ng-model=\"vm.num\" even-number />\n<span ng-show=\"f.num.$error.even\">Sirf even number</span>\n```\n\n**B. $setValidity (purana tarika):**\n```javascript\nngModel.$parsers.push(function (value) {\n  var ok = value && value.indexOf(\"MCA\") === 0;\n  ngModel.$setValidity(\"prefix\", ok);       // false = invalid\n  return ok ? value : undefined;\n});\n```\n\n**C. Async validation (server check):**\n```javascript\nngModel.$asyncValidators.unique = function (modelValue, viewValue) {\n  return $http.get(\"/api/check?u=\" + viewValue)   // promise\n    .then(function (res) {\n      return res.data.free ? true : $q.reject();\n    });\n};\n```\n`f.user.$pending` batata hai ki async check chal raha hai.\n\n**D. Custom validator on form level:** directive `require: \"form\"` se poori form par rule.\n\n**Diagram:** Refer to the Validation flow diagram."
      }
    ]
  },
  {
    "id": "nextjs-overview",
    "number": "5.11",
    "title": "Introduction to Next.js",
    "subtitle": "React ke upar production framework — aur kyun zaroori hai",
    "icon": "globe",
    "accent": "#ff8800",
    "englishDefinition": "Next.js is an open-source React framework created by Guillermo Rauch's company Vercel (formerly ZEIT) and released in October 2016, used to build production web applications with React. React by itself renders only in the browser, so a plain React SPA ships an almost empty HTML file, which hurts first paint and search-engine indexing and forces the developer to assemble routing, data fetching, bundling and optimisation manually. Next.js supplies that missing layer: file-system routing, server-side rendering, static site generation and incremental static regeneration, API route handlers, automatic code splitting, image and font optimisation, metadata handling for SEO, middleware, and a build pipeline with TypeScript, CSS and Fast Refresh support out of the box. It supports two router generations - the older pages/ router with getServerSideProps and getStaticProps, and the newer app/ router (Next.js 13+) built on React Server Components, streaming and the metadata API. Next.js is MIT-licensed and can be deployed on Vercel, Node.js servers, Docker or static export, and it is widely used by companies such as TikTok, Twitch, Netflix jobs site, Hulu, Notion and GitHub's documentation; it is the recommended production path when a React app needs SEO, fast first load or hybrid static/server rendering.",
    "intro": "React sirf **view library** hai — routing, SSR, image optimisation kuch nahi deta. Isliye pure React SPA ka HTML khaali hota hai: SEO kamzor, pehla paint slow. **Next.js (Vercel, 2016)** wahi layer deta hai: **file-based routing**, **SSR/SSG/ISR**, **API routes**, image/font optimisation, aur TypeScript/CSS/Fast Refresh built-in. Aaj React project ke liye production default Next.js hai — exam mein 'overview', 'why Next.js', aur 'key features' teen sawaal bante hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Next.js kya hai",
        "kicker": "Definition",
        "body": "**Next.js** ek open-source **React framework** hai jo **Vercel** (pehle ZEIT) ne banaya — Guillermo Rauch, October 2016, MIT license. Ye React ke upar wo cheezein deta hai jo production app ke liye chahiye: **routing, rendering (SSR/SSG/ISR), data fetching, API, bundling, optimisation**.",
        "body2": "Do router generations: purana **`pages/`** router (`getServerSideProps`, `getStaticProps`) aur naya **`app/`** router (Next.js 13+, **React Server Components**, streaming, `metadata` API). Deploy: Vercel, Node server, Docker, ya static export.",
        "chips": [
          "React framework",
          "Vercel",
          "pages/ + app/",
          "SSR/SSG/ISR",
          "API routes",
          "SEO"
        ]
      },
      {
        "type": "cards",
        "title": "Next.js kis problem ko solve karta hai",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "alert",
            "title": "SPA ka khaali HTML",
            "body": "Plain React mein server se ~empty div aata hai — SEO crawler aur first paint dono ko nuksaan."
          },
          {
            "icon": "arrows",
            "title": "Routing khud banana",
            "body": "React Router jodna, code splitting configure karna, SEO metadata — sab manual."
          },
          {
            "icon": "database",
            "title": "Data fetching ka pattern",
            "body": "Kahan fetch karein — server par ya client par? Next.js ke rules (getServerSideProps/RSC) clear."
          },
          {
            "icon": "chart",
            "title": "Performance",
            "body": "Automatic code splitting, image optimisation (`next/image`), font optimisation (`next/font`), prefetching."
          },
          {
            "icon": "check",
            "title": "SEO aur sharing",
            "body": "Server-rendered HTML + `<head>`/metadata API se title, description, Open Graph."
          },
          {
            "icon": "terminal",
            "title": "Build + deploy",
            "body": "Ek command mein production build (`next build`), zero-config deploy Vercel par."
          }
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Ek page Next.js mein — SSR data ke saath",
        "code": "// pages/students.js  (pages router)\nexport async function getServerSideProps() {\n  const res = await fetch(\"https://api.example.com/students\");\n  const students = await res.json();\n  return { props: { students } };       // har request par server par chalta hai\n}\n\nexport default function Students({ students }) {\n  return (\n    <main>\n      <h1>MCA Students ({students.length})</h1>\n      <ul>\n        {students.map((s) => (\n          <li key={s.id}>{s.name} — {s.marks}</li>\n        ))}\n      </ul>\n    </main>\n  );\n}",
        "language": "javascript",
        "filename": "pages/students.js",
        "php": "Browser ko seedha poora HTML milta hai:\n\n<h1>MCA Students (3)</h1>\n<ul>\n  <li>Riya — 88</li>\n  <li>Aman — 76</li>\n  <li>Neha — 91</li>\n</ul>\n\nView Source mein bhi yahi HTML (SEO ke liye zaroori)\nJS load hote hi app interactive (hydration)",
        "label": "Rendered output",
        "height": 240,
        "outputHint": "Next.js · server output",
        "outputNote": "Next.js server par HTML banata hai — browser ko pehle rendered HTML milta hai, phir JS se hydration hoti hai.",
        "intro": "`getServerSideProps` server par data laata hai aur HTML ke saath bhejta hai — isi liye crawler ko poora content milta hai."
      },
      {
        "type": "comparison",
        "title": "Plain React SPA vs Next.js",
        "kicker": "Comparison",
        "columns": [
          "React SPA (CRA/Vite)",
          "Next.js"
        ],
        "rows": [
          {
            "label": "Rendering",
            "values": [
              "client-side (CSR)",
              "SSR / SSG / ISR / CSR"
            ]
          },
          {
            "label": "Initial HTML",
            "values": [
              "khaali div",
              "poora rendered HTML"
            ]
          },
          {
            "label": "SEO",
            "values": [
              "kamzor",
              "strong (server HTML + metadata)"
            ]
          },
          {
            "label": "Routing",
            "values": [
              "React Router jodo",
              "file-based, built-in"
            ]
          },
          {
            "label": "API",
            "values": [
              "alag server",
              "`pages/api` / route handlers"
            ]
          },
          {
            "label": "Optimisation",
            "values": [
              "khud configure",
              "images, fonts, splits built-in"
            ]
          },
          {
            "label": "Deploy",
            "values": [
              "static hosting",
              "Vercel / Node / Docker"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800"
        ]
      },
      {
        "type": "points",
        "title": "Kyun Next.js — exam ke points",
        "kicker": "Why",
        "points": [
          "**SEO:** server-rendered HTML se crawler ko poora content milta hai (SPA ka sabse bada problem).",
          "**Performance:** pehla paint fast (HTML pehle, JS baad mein **hydrate** hota hai), automatic code splitting, image/font optimisation.",
          "**Developer experience:** file-based routing, Fast Refresh, TypeScript/CSS built-in, ek `next build` se production build.",
          "**Hybrid rendering:** same app mein page-by-page SSR, SSG, ISR ya CSR — jo chahiye wahi chuno.",
          "**Full-stack in one repo:** API routes / route handlers se backend endpoints bhi (serverless functions).",
          "**Ecosystem + support:** Vercel maintain, MIT license, bada community, Next.js 13+ App Router + React Server Components."
        ]
      },
      {
        "type": "diagram",
        "title": "Next.js — React ke upar ek layer",
        "kicker": "Diagram",
        "diagram": "wt5-nextjs",
        "caption": "React (UI) + Next.js (routing, SSR/SSG/ISR, API, optimisation) → production app; SPA vs Next.js compare"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Next.js:** Vercel ka React framework (2016), MIT license — production apps ke liye.",
          "**Problem jo solve karta hai:** SPA ka khaali HTML, manual routing, SEO, performance.",
          "**Rendering modes:** SSR, SSG, ISR, CSR — hybrid per page.",
          "**Routers:** `pages/` (getServerSideProps/getStaticProps) aur `app/` (RSC + streaming, Next 13+).",
          "**Extra:** API routes, image/font optimisation, middleware, metadata API.",
          "**Kab:** SEO + fast first load chahiye to Next.js; andar ka UI React hi rehta hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is Next.js? Explain its overview and why it is used.",
        "answer": "**Next.js** ek open-source **React framework** hai jo **Vercel** ne banaya (Guillermo Rauch, October 2016, MIT license). Ye React ke upar production features deta hai: routing, server rendering, data fetching, API routes, optimisation aur build pipeline.\n\n**Overview:**\n- **React** sirf UI library hai — browser mein render karti hai.\n- **Next.js** uske upar app ka dhancha deta hai.\n- **Router generations:** `pages/` (getServerSideProps, getStaticProps) aur `app/` (Next 13+, React Server Components).\n- **Deploy:** Vercel, Node server, Docker, static export.\n\n**Why Next.js (kyun use karte hain):**\n\n1. **SEO** — plain React SPA browser mein render hoti hai, server se khaali HTML aata hai; Next.js server par HTML bana kar bhejta hai.\n2. **Performance** — pehla paint fast, automatic code splitting, image (`next/image`) aur font (`next/font`) optimisation, prefetching.\n3. **Built-in routing** — file/folder structure hi route hai; React Router jodne ki zaroorat nahi.\n4. **Hybrid rendering** — page-by-page SSR, SSG, ISR ya CSR.\n5. **Full-stack** — API routes / route handlers se backend bhi isi project mein.\n6. **DX** — TypeScript, CSS modules, Fast Refresh, `next build`/`next start`.\n7. **Scale** — middleware, edge runtime, ISR se hazaaron pages bhi static jaisa fast.\n\n**Example:**\n```javascript\nexport async function getServerSideProps() {\n  const students = await fetch(\"https://api.example.com/students\").then(r => r.json());\n  return { props: { students } };\n}\n```\n\n**Diagram:** Refer to the Next.js — React ke upar ek layer diagram."
      },
      {
        "question": "Differentiate between a plain React SPA and a Next.js application.",
        "answer": "Dono React use karte hain, par rendering, routing aur optimisation alag.\n\n| Point | React SPA (CRA/Vite) | Next.js |\n|---|---|---|\n| Rendering | client-side (CSR) | SSR / SSG / ISR / CSR (hybrid) |\n| Server se HTML | khaali `<div id=\"root\">` | poora rendered HTML |\n| SEO | kamzor (crawler ko content nahi) | strong (HTML + metadata) |\n| First paint | slow (JS pehle chahiye) | fast (HTML pehle, phir hydration) |\n| Routing | React Router manually | file-based built-in |\n| Data fetching | client mein `useEffect`/fetch | `getServerSideProps`, `getStaticProps`, RSC |\n| API backend | alag server | `pages/api` / route handlers |\n| Image/font | manual | `next/image`, `next/font` |\n| Code splitting | manual (`lazy`) | automatic per route |\n| Deploy | static hosting | Vercel / Node / Docker |\n\n**Kyun farq padta hai:** SPA mein browser pehle JS download karta hai, phir page banata hai — pehla paint slow aur crawler ko khaali HTML. Next.js HTML server par bana kar bhejta hai, phir JS se **hydrate** karta hai (dono ka best).\n\n**Kab SPA theek:** internal dashboard, behind login, SEO ki zaroorat nahi.\n**Kab Next.js:** public site, e-commerce, blog/docs, marketing page, kuch bhi jahan SEO + speed chahiye.\n\n**Diagram:** Refer to the Next.js — React ke upar ek layer diagram."
      },
      {
        "question": "Explain the rendering strategies available in Next.js (SSR, SSG, ISR, CSR).",
        "answer": "Next.js **per page** rendering choose karne deta hai — yahi uski sabse badi taqat hai.\n\n| Strategy | Kab HTML banti hai | Function | Best for |\n|---|---|---|---|\n| **SSR** | har request par (server) | `getServerSideProps` | dashboard, personalized data |\n| **SSG** | build ke waqt | `getStaticProps` | blog, docs, marketing page |\n| **ISR** | build + revalidate | `getStaticProps` + `revalidate` | e-commerce list (periodic update) |\n| **CSR** | browser mein | `useEffect` / client component | user-specific widget, charts |\n\n**1. SSR (Server-Side Rendering)**\n```javascript\nexport async function getServerSideProps(ctx) {\n  const data = await db.get(ctx.params.id);\n  return { props: { data } };\n}\n```\nHar request par fresh HTML — slow-ish par always current.\n\n**2. SSG (Static Site Generation)**\n```javascript\nexport async function getStaticProps() {\n  return { props: { posts: await getPosts() } };\n}\n```\nBuild par HTML banti hai — sabse fast, CDN se serve.\n\n**3. ISR (Incremental Static Regeneration)**\n```javascript\nexport async function getStaticProps() {\n  return { props: { products: await getProducts() }, revalidate: 60 };\n}\n```\nStatic HTML + 60 seconds baad background mein rebuild — fresh bhi, fast bhi.\n\n**4. CSR (Client-Side)**\n- `\"use client\"` component + `useEffect` mein fetch — user-specific data ke liye.\n\n**Chooser:** content jo sabke liye same → SSG/ISR; user-specific → SSR ya CSR; real-time → SSR + streaming.\n\n**Diagram:** Refer to the Next.js — React ke upar ek layer diagram."
      }
    ]
  },
  {
    "id": "nextjs-features",
    "number": "5.12",
    "title": "Key Features of Next.js",
    "subtitle": "Routing, rendering, API, optimisation aur App Router",
    "icon": "zap",
    "accent": "#00d4ff",
    "englishDefinition": "The key features of Next.js are: file-system routing, where every file under pages/ (or folder under app/) becomes a route, with dynamic segments such as [id].js and nested layouts; multiple rendering modes - server-side rendering via getServerSideProps, static generation via getStaticProps and getStaticPaths, incremental static regeneration with revalidate, and client-side rendering - chosen per page; React Server Components and streaming with Suspense in the app/ router (Next.js 13+); API routes (pages/api) or route handlers (app/api/.../route.js) for backend endpoints as serverless functions; automatic code splitting and prefetching of linked routes; optimised assets through next/image and next/font; built-in CSS support (CSS Modules, global CSS, Sass, Tailwind) and TypeScript; SEO helpers through next/head and the metadata API plus sitemap/robots support; middleware for auth and redirects at the edge; Fast Refresh in development, Turbopack/webpack builds, and error handling with a custom error page; internationalised routing; and first-class deployment on Vercel or any Node.js host, with static export where needed.",
    "intro": "Next.js ke features ko teen group mein yaad rakho: **(1) Routing** — file-based, dynamic `[id]`, nested layouts, prefetch. **(2) Rendering + data** — SSR/SSG/ISR/CSR, App Router ke **Server Components + streaming**, **API routes**. **(3) Optimisation + DX** — image/font optimisation, automatic code splitting, CSS/TypeScript built-in, metadata API for SEO, middleware, Fast Refresh. Exam mein feature list + har ek ka ek-line example best chalta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Features ka saar",
        "kicker": "Definition",
        "body": "Next.js ka kaam **teen layer** mein dekho: **routing** (file = route, dynamic segments, layouts, prefetch), **rendering + data** (SSR/SSG/ISR/CSR, Server Components, streaming, API routes), aur **optimisation** (code splitting, `next/image`, `next/font`, metadata, middleware, Fast Refresh).",
        "body2": "Sabse bada design idea: **per-page choice**. Marketing page static (SSG), dashboard server-rendered (SSR), product list ISR, aur user-specific widget client-side — ek hi app mein sab possible.",
        "chips": [
          "file-based routing",
          "SSR/SSG/ISR",
          "App Router + RSC",
          "API routes",
          "next/image",
          "metadata API"
        ]
      },
      {
        "type": "cards",
        "title": "Features ek nazar mein",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "arrows",
            "title": "File-based routing",
            "body": "`pages/about.js` → `/about`; `pages/blog/[slug].js` → `/blog/xyz`."
          },
          {
            "icon": "layers",
            "title": "Layouts + nested routes",
            "body": "App Router mein `layout.js` shared shell deta hai; nested folders nested routes."
          },
          {
            "icon": "globe",
            "title": "SSR / SSG / ISR / CSR",
            "body": "Har page ke liye alag strategy; `revalidate` se ISR."
          },
          {
            "icon": "zap",
            "title": "Server Components + streaming",
            "body": "Next 13+ App Router: server par render, `Suspense` se progressive UI."
          },
          {
            "icon": "terminal",
            "title": "API routes",
            "body": "`pages/api/students.js` ya `app/api/students/route.js` — backend bhi same repo mein."
          },
          {
            "icon": "chart",
            "title": "Image + font optimisation",
            "body": "`next/image` (resize, lazy, WebP), `next/font` (self-host, no layout shift)."
          },
          {
            "icon": "check",
            "title": "SEO helpers",
            "body": "`next/head` / `metadata` API se title, description, Open Graph, sitemap, robots."
          },
          {
            "icon": "shield",
            "title": "Middleware + edge",
            "body": "Request se pehle auth/redirect/geo logic; edge runtime par fast."
          },
          {
            "icon": "code",
            "title": "DX: CSS, TS, Fast Refresh",
            "body": "CSS Modules/global CSS/Sass/Tailwind, TypeScript built-in, instant reload."
          }
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Routing + dynamic route + API route",
        "code": "// 1. pages/index.js            ->  /\nexport default function Home() { return <h1>Home</h1>; }\n\n// 2. pages/students/[id].js    ->  /students/21\nimport { useRouter } from \"next/router\";\n\nexport default function Student({ student }) {\n  const router = useRouter();\n  if (router.isFallback) return <p>Loading…</p>;\n  return <h1>{student.name} — {student.marks}</h1>;\n}\n\nexport async function getStaticPaths() {\n  return { paths: [{ params: { id: \"21\" } }], fallback: true };\n}\n\nexport async function getStaticProps({ params }) {\n  const student = await getStudent(params.id);\n  return { props: { student }, revalidate: 60 };   // ISR: 60s baad refresh\n}\n\n// 3. pages/api/students.js     ->  /api/students\nexport default function handler(req, res) {\n  if (req.method !== \"GET\") {\n    return res.status(405).json({ error: \"Method not allowed\" });\n  }\n  res.status(200).json([{ id: 21, name: \"Riya\", marks: 88 }]);\n}",
        "language": "javascript",
        "filename": "pages/ (routing + API)",
        "php": "Routes jo ban gaye:\n\n/                 -> Home\n/students/21      -> Riya — 88        (static + ISR 60s)\n/api/students     -> [{ id: 21, \"Riya\", 88 }]\n\nLink par hover -> route prefetch (instant navigation)\nBuild output: \"● (SSG) /students/[id]  ○ (Static) /\"",
        "label": "Rendered output",
        "height": 280,
        "outputHint": "Next.js · server output",
        "outputNote": "Next.js server par HTML banata hai — browser ko pehle rendered HTML milta hai, phir JS se hydration hoti hai.",
        "intro": "File path hi route hai; `[id].js` dynamic segment; `revalidate` ISR; `pages/api` backend endpoint — teen features ek folder mein."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "App Router — Server Component + metadata",
        "code": "// app/layout.js  (shared shell)\nexport const metadata = {\n  title: \"MCA Notes\",\n  description: \"Hinglish notes for MCA exams\",\n};\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\">\n      <body>{children}</body>\n    </html>\n  );\n}\n\n// app/students/page.js  (Server Component — default)\nasync function getStudents() {\n  const res = await fetch(\"https://api.example.com/students\", {\n    next: { revalidate: 60 },          // ISR in fetch\n  });\n  return res.json();\n}\n\nexport default async function StudentsPage() {\n  const students = await getStudents();\n  return (\n    <ul>\n      {students.map((s) => (\n        <li key={s.id}>{s.name} — {s.marks}</li>\n      ))}\n    </ul>\n  );\n}\n\n// app/students/[id]/page.js\nexport default async function StudentPage({ params }) {\n  const s = await getStudent(params.id);\n  return <h1>{s.name}</h1>;\n}",
        "language": "javascript",
        "filename": "app/ (App Router)",
        "php": "app/layout.js          -> har page ka shell (nav/footer)\napp/students/page.js   -> /students      (server par fetch, ISR 60s)\napp/students/[id]/page.js -> /students/21\n\n<title>MCA Notes</title>          <- metadata API\nComponent bundle client ko nahi bhejta (server component)\nInteractive part chahiye -> \"use client\" file",
        "label": "Rendered output",
        "height": 270,
        "outputHint": "Next.js · server output",
        "outputNote": "Next.js server par HTML banata hai — browser ko pehle rendered HTML milta hai, phir JS se hydration hoti hai.",
        "intro": "App Router mein component **default server** hota hai — sirf interactive parts `\"use client\"` ke saath client par jaate hain (kam JS)."
      },
      {
        "type": "points",
        "title": "Optimisation aur DX features",
        "kicker": "Optimisation",
        "points": [
          "**Automatic code splitting:** har route ka apna bundle; `next/dynamic` se component-level lazy loading.",
          "**Prefetching:** `<Link>` viewport/prefetch par route ka code pehle se laata hai — navigation instant.",
          "**`next/image`:** lazy load, responsive sizes, WebP/AVIF, layout-shift se bachav.",
          "**`next/font`:** Google/custom fonts self-host, `display: swap` — CLS kam.",
          "**Metadata API:** `export const metadata` ya `generateMetadata()` — title/description/OG per page.",
          "**Middleware:** `middleware.js` — auth guard, redirects, A/B test, geo routing (edge par).",
          "**Error handling:** `error.js` / `not-found.js` / `loading.js` (App Router), custom 404/500."
        ]
      },
      {
        "type": "diagram",
        "title": "Next.js key features",
        "kicker": "Diagram",
        "diagram": "wt5-nextjs-features",
        "caption": "Routing (file-based, layouts, prefetch) + Rendering (SSR/SSG/ISR/RSC) + API + Optimisation + SEO + DX"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Routing:** file = route, `[param]` dynamic, layouts, prefetch, `next/link`.",
          "**Rendering:** SSR (`getServerSideProps`), SSG (`getStaticProps`/`getStaticPaths`), ISR (`revalidate`), CSR.",
          "**App Router (13+):** Server Components default, streaming + `Suspense`, `metadata` API.",
          "**API routes:** `pages/api/*` ya `app/api/*/route.js` — serverless backend.",
          "**Optimisation:** code splitting, `next/image`, `next/font`, prefetching.",
          "**SEO + DX:** metadata, sitemap/robots, CSS/TS built-in, Fast Refresh, middleware."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the key features of Next.js.",
        "answer": "Next.js React ke upar production features deta hai. Main features:\n\n**1. File-based routing** — `pages/about.js` → `/about`; `pages/blog/[slug].js` → `/blog/hello`; App Router mein folders (`app/students/page.js`).\n\n**2. Rendering modes (per page)**\n- **SSR:** `getServerSideProps` (har request par server render).\n- **SSG:** `getStaticProps` + `getStaticPaths` (build ke waqt).\n- **ISR:** `revalidate: 60` (static + background refresh).\n- **CSR:** client component + `useEffect`.\n\n**3. React Server Components + streaming (App Router)** — component default server par; `Suspense` se progressive loading; client JS kam.\n\n**4. API routes / route handlers** — `pages/api/students.js` ya `app/api/students/route.js`; backend same repo mein (serverless).\n\n**5. Automatic code splitting + prefetching** — har route ka alag bundle; `<Link>` se prefetch.\n\n**6. Image + font optimisation** — `next/image`, `next/font`.\n\n**7. SEO helpers** — `next/head` ya `metadata` API; sitemap/robots.\n\n**8. CSS + TypeScript built-in** — CSS Modules, global CSS, Sass, Tailwind; TS zero-config.\n\n**9. Middleware** — request se pehle auth/redirect/geo (edge runtime).\n\n**10. DX** — Fast Refresh, `next build`/`next start`, Turbopack, error/loading/not-found files.\n\n**Diagram:** Refer to the Next.js key features diagram."
      },
      {
        "question": "Explain file-based routing and dynamic routes in Next.js with examples.",
        "answer": "Next.js mein routing **file system** se banti hai — file ka path hi URL hai.\n\n**Basic routes (pages router):**\n\n| File | URL |\n|---|---|\n| `pages/index.js` | `/` |\n| `pages/about.js` | `/about` |\n| `pages/blog/index.js` | `/blog` |\n| `pages/blog/first.js` | `/blog/first` |\n| `pages/api/students.js` | `/api/students` (API route) |\n\n**Dynamic routes:**\n```javascript\n// pages/students/[id].js  ->  /students/21\nimport { useRouter } from \"next/router\";\nexport default function Student() {\n  const { query } = useRouter();\n  return <h1>Student {query.id}</h1>;\n}\n```\n- `[id].js` — single parameter.\n- `[...slug].js` — catch-all (`/docs/a/b/c`).\n- `[[...slug]].js` — optional catch-all (`/docs` bhi chalega).\n\n**Static generation with dynamic paths:**\n```javascript\nexport async function getStaticPaths() {\n  const ids = await getIds();\n  return {\n    paths: ids.map((id) => ({ params: { id: String(id) } })),\n    fallback: \"blocking\",      // ya true\n  };\n}\n\nexport async function getStaticProps({ params }) {\n  const student = await getStudent(params.id);\n  return { props: { student }, revalidate: 60 };\n}\n```\n\n**App Router (13+):**\n```\napp/page.js                    -> /\napp/students/page.js           -> /students\napp/students/[id]/page.js      -> /students/21\napp/students/layout.js         -> nested layout\napp/api/students/route.js      -> /api/students\n```\n\n**Navigation:** `<Link href=\"/students\">` (client-side, prefetch) ya `useRouter().push()`.\n\n**Diagram:** Refer to the Next.js key features diagram."
      },
      {
        "question": "How do API routes work in Next.js? Explain with an example.",
        "answer": "API routes Next.js ko **backend** banate hain — same repo mein serverless functions.\n\n**Pages router:** `pages/api/` ke andar har file ek endpoint hai.\n```javascript\n// pages/api/students.js  ->  /api/students\nexport default function handler(req, res) {\n  if (req.method === \"GET\") {\n    return res.status(200).json([{ id: 21, name: \"Riya\" }]);\n  }\n  if (req.method === \"POST\") {\n    const { name } = req.body;                  // JSON body auto-parsed\n    return res.status(201).json({ id: 22, name });\n  }\n  res.setHeader(\"Allow\", [\"GET\", \"POST\"]);\n  res.status(405).json({ error: \"Method not allowed\" });\n}\n```\n\n**Dynamic API route:**\n```javascript\n// pages/api/students/[id].js  ->  /api/students/21\nexport default function handler(req, res) {\n  const { id } = req.query;\n  res.status(200).json({ id, name: \"Riya\" });\n}\n```\n\n**App Router (13+):** route handlers with Web `Request`/`Response`:\n```javascript\n// app/api/students/route.js\nexport async function GET() {\n  const students = await db.students.findMany();\n  return Response.json(students);\n}\n\nexport async function POST(request) {\n  const body = await request.json();\n  const created = await db.students.create({ data: body });\n  return Response.json(created, { status: 201 });\n}\n```\n\n**Important points:**\n- `req`/`res` Node-style (pages) ya Web `Request`/`Response` (app).\n- Secrets server par rehte hain (client bundle mein nahi).\n- Vercel par serverless functions; self-host par Node server.\n- Rate limiting/auth middleware se lagao.\n\n**Diagram:** Refer to the Next.js key features diagram."
      }
    ]
  },
];
