// ============================================================
// DATA SCIENCE — Unit I, topics 1.10 to 1.12
//  1.10 Machine learning and artificial intelligence
//  1.11 Roles in data science: analyst, scientist, engineer, ML engineer
//  1.12 Importance of mathematical statistics in data science
// ============================================================

export const dataScienceFinalTopics = [
  // ==========================================================
  // 1.10 — Machine Learning and Artificial Intelligence
  // ==========================================================
  {
    id: 'ds-ml-ai',
    number: '1.10',
    title: 'Machine Learning and Artificial Intelligence',
    subtitle: 'AI, ML, deep learning ka rishta aur model seekhne ka process',
    icon: 'ai',
    accent: '#c4ff00',
    englishDefinition:
      'Artificial intelligence (AI) is the branch of computer science that builds systems capable of tasks which normally need human intelligence — perception, language, reasoning, learning, planning and decision making. Machine learning (ML) is a subset of AI in which algorithms learn patterns and rules from data instead of following hand-written rules; formally (Tom Mitchell), a program learns from experience E with respect to task T and performance measure P if its performance on T, measured by P, improves with experience E. Deep learning (DL) is a subset of ML that uses artificial neural networks with many hidden layers and works best on large unstructured data such as images, audio and text. The three form a nesting — Deep Learning ⊂ Machine Learning ⊂ Artificial Intelligence — and data science is the applied discipline that uses statistics, ML and domain knowledge together to solve business problems.',
    intro:
      'Ye topic exam mein sabse zyada poocha jaata hai, aur sabse zyada galat likha jaata hai. AI ek bada chhata hai — machine ko smart banana. Uske andar ML aata hai — data se seekhna. Uske andar deep learning aati hai — neural networks se seekhna. Data science in sabko statistics aur domain knowledge ke saath business problem par lagati hai. Ek line yaad rakhein: AI = goal, ML = tarika, DL = ML ka heavy-duty tool, Data Science = poora project.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'AI, ML aur Deep Learning — teeno kya hain?',
        body:
          'Artificial Intelligence wo field hai jisme machine ko aise kaam karne layak banaya jaata hai jo pehle sirf insaan kar sakta tha — dekhna (vision), bolna samajhna (NLP), sochna (reasoning), plan karna aur decision lena. AI ka koi ek tarika nahi hai; rule-based expert systems bhi AI hain, aur neural networks bhi.',
        body2:
          'Machine Learning AI ka wo hissa hai jisme rules programmer likhta nahi — algorithm khud data se rules (pattern) nikaalta hai. Isi liye ML ko "programming ka ulta" kaha jaata hai: traditional programming mein rules + data → output, aur ML mein data + output → rules. Deep learning ML ka wo hissa hai jo multi-layer neural network use karta hai aur unstructured data (image, audio, text) par sabse achha chalta hai — par uske liye bahut data aur GPU chahiye.',
        chips: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural network', 'Training data'],
      },
      {
        type: 'cards',
        kicker: 'Machine Learning ke Types',
        title: 'Teen Main Types + Deep Learning',
        cards: [
          {
            icon: 'target',
            title: 'Supervised Learning',
            body:
              'Labelled data se seekhna — har example ke saath sahi answer diya hota hai. Model input → output ka mapping seekhta hai. Do kaam: classification (spam / not spam, disease / no disease) aur regression (ghar ka price, sales forecast). Algorithms: linear regression, logistic regression, decision tree, random forest, SVM, KNN. Exam mein 70–80% examples isi ke hote hain.',
          },
          {
            icon: 'grid',
            title: 'Unsupervised Learning',
            body:
              'Label nahi hota — model khud data ke andar structure dhoondta hai. Clustering (customer segments, K-means), association rules (market basket — "chips ke saath cold drink"), aur dimensionality reduction (PCA). Business mein segmentation aur anomaly detection ke liye use hota hai.',
          },
          {
            icon: 'loop',
            title: 'Reinforcement Learning',
            body:
              'Agent environment mein action leta hai aur reward ya penalty milti hai; model trial-and-error se best policy seekhta hai. Game playing (AlphaGo), robotics, traffic signal control, recommendation aur dynamic pricing mein use hota hai. Reward design karna iska sabse mushkil hissa hai.',
          },
          {
            icon: 'network',
            title: 'Deep Learning (specialist)',
            body:
              'Kai hidden layers wale neural networks — CNN (images), RNN/LSTM (sequence), transformers (language). Feature engineering khud network karta hai, isliye raw pixels ya text se bhi kaam chal jaata hai. Cost: lakhs of examples, GPU/TPU aur bada training time; explainability kam.',
          },
        ],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'AI ⊃ ML ⊃ DL aur Learning Steps',
        diagram: 'ml-ai-stack',
        caption:
          'Left side nested boxes hain — AI ke andar ML, ML ke andar deep learning, saath mein har level ke examples. Right side 6 steps hain: data collect → clean + features → split → train → evaluate → deploy + monitor. Exam mein nested circle diagram draw karke "AI ⊃ ML ⊃ DL" likhein, phir steps explain karein.',
      },
      {
        type: 'points',
        kicker: 'Process',
        title: 'ML Model Kaise Seekhta Hai — 6 Steps',
        points: [
          'Data collect — history, sensors, logs, database se labelled examples ikkatha karna.',
          'Clean + features — missing values, outliers, encoding, scaling; features banane se model ka 70% result decide hota hai.',
          'Split — training set (80%) aur test set (20%); test set ko training mein chhoona cheating hai.',
          'Train — algorithm data se weights / splits seekhta hai; loss function minimise hoti hai.',
          'Evaluate — accuracy, precision, recall, F1, RMSE; overfitting check (train vs test gap).',
          'Deploy + monitor — model API ke through product mein jaata hai; data badalne par (drift) dobara train hota hai.',
          'Interview line: "Model banane se zyada kaam model ko sahi data, sahi metric aur monitoring dene mein hota hai."',
        ],
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Traditional Programming vs Machine Learning',
        columns: ['Traditional programming', 'Machine learning'],
        columnColors: ['#2f6fff', '#c4ff00'],
        rows: [
          { label: 'Input', values: ['Data + rules', 'Data + answers (labels)'] },
          { label: 'Output', values: ['Answers', 'Rules (model)'] },
          { label: 'Who writes logic', values: ['Programmer', 'Algorithm, data se'] },
          { label: 'New pattern aaye to', values: ['Code change karo', 'Model dobara train karo'] },
          { label: 'Best for', values: ['Fixed business rules (GST, payroll)', 'Pattern wale problem (spam, churn, image)'] },
          { label: 'Explainability', values: ['High — code padh lo', 'Variable — tree easy, deep net mushkil'] },
          { label: 'Data chahiye', values: ['Kam', 'Zyada (supervised ke liye labels zaroori)'] },
          { label: 'Failure', values: ['Bug', 'Galat data / bias / overfitting'] },
        ],
      },
      {
        type: 'example',
        kicker: 'Example',
        title: 'Spam Filter — Teen Level Par Ek Hi Problem',
        body:
          'Rule-based AI: "agar subject mein FREE hai aur 3 se zyada links hain to spam". Problem: attacker "F.R.E.E" likh de to filter fail.\n\nMachine learning (supervised): 1 lakh labelled emails (spam / not spam) do → model words ka pattern seekh leta hai → naye email par probability deta hai. Accuracy 98%, aur naye spam pattern ke saath dobara train karke improve hota hai.\n\nDeep learning: raw email text par transformer model, jo context samajhta hai — "free" agar official newsletter mein hai to spam nahi. Zyada data aur GPU chahiye, par language ke nuances better pakadta hai.\n\nData science view: poora system — data pipeline, model, threshold, user feedback loop, false-positive ka business cost — sab milakar design karna.',
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'AI = machine ko intelligent banana (goal), ML = data se seekhna (tarika), DL = neural networks (tool).',
          'Nesting: DL ⊂ ML ⊂ AI; Data Science in sabko statistics + domain ke saath apply karti hai.',
          'ML ke 3 types: supervised (labels), unsupervised (structure), reinforcement (reward).',
          'Traditional programming: rules + data → answer; ML: data + answer → rules.',
          'Model banana 6 steps ka loop hai — deploy ke baad monitoring aur retraining bhi part hai.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Define Artificial Intelligence and Machine Learning. Explain the relationship between AI, ML and Deep Learning with a diagram.',
        answer:
          '**Artificial Intelligence:**\nAI computer science ki wo branch hai jo aise systems banati hai jo human intelligence wale kaam kar sakein — perception, language, reasoning, learning aur decision making.\n\n**Machine Learning:**\nML, AI ka subset hai jisme algorithm data se pattern seekhta hai aur explicit rules ki zaroorat nahi padti. Mitchell ke mutabik: task T, performance measure P aur experience E ke saath program seekhta hai agar E badhne par P improve ho.\n\n**Deep Learning:**\nDL, ML ka subset hai jo multi-layer neural networks use karta hai; images, speech aur text par best results deta hai, par data aur GPU zyada chahiye.\n\n**Relationship:**\n\n| Level | Scope | Example |\n|---|---|---|\n| AI | Sabse bada — intelligent behaviour | chatbot, self-driving, game playing |\n| ML | AI ka subset — data se seekhna | spam filter, churn prediction |\n| DL | ML ka subset — neural networks | face recognition, ChatGPT |\n\nDL ⊂ ML ⊂ AI. Har DL ek ML hai, har ML ek AI approach hai, par har AI ML nahi (rule-based expert system AI hai, ML nahi).\n\n**Diagram:** Nested circles draw karein — bahar AI, beech mein ML, andar DL; data science ko bahar se sabko use karta hua dikhayein.',
      },
      {
        question: 'Explain the types of machine learning with suitable examples.',
        answer:
          '**1. Supervised learning**\n- Labelled data: input + correct output dono diye jaate hain\n- Classification → spam / not spam, disease detection\n- Regression → house price, sales forecast\n- Algorithms: linear/logistic regression, decision tree, random forest, SVM\n\n**2. Unsupervised learning**\n- Labels nahi hote; model structure dhoondta hai\n- Clustering → K-means se customer segments\n- Association → market basket ("chips + cold drink")\n- Dimensionality reduction → PCA\n\n**3. Reinforcement learning**\n- Agent action leta hai, reward/penalty se seekhta hai\n- Games (AlphaGo), robotics, traffic control, dynamic pricing\n- Reward design aur exploration vs exploitation main challenge\n\n**4. Deep learning (technique)**\n- CNN (images), RNN/LSTM (sequence), transformers (language)\n- Large data + GPU chahiye, explainability kam\n\n| Type | Data | Output | Example |\n|---|---|---|---|\n| Supervised | Labelled | Class / number | Churn prediction |\n| Unsupervised | Unlabelled | Groups / structure | Customer segments |\n| Reinforcement | Reward signal | Policy (actions) | Game AI, robot |\n\n**Diagram:** Refer to the AI ⊃ ML ⊃ DL diagram.',
      },
      {
        question: 'Differentiate between traditional programming and machine learning. Explain the steps of building a machine learning model.',
        answer:
          '**Traditional programming vs ML:**\n\n| Aspect | Traditional programming | Machine learning |\n|---|---|---|\n| Input | Data + rules | Data + labels |\n| Output | Answers | Model (rules) |\n| Logic | Programmer likhta hai | Algorithm data se seekhta hai |\n| New pattern | Code change | Retrain |\n| Best for | Fixed rules (payroll) | Pattern problems (spam) |\n\n**Steps of building an ML model:**\n1. **Problem define** — regression ya classification? Metric kya (accuracy, recall, RMSE)?\n2. **Data collect** — labelled examples, sufficient volume aur representative sample\n3. **Clean + features** — missing values, outliers, encoding, scaling, feature engineering\n4. **Split** — train / validation / test (70/15/15 ya 80/20)\n5. **Train** — algorithm chunein, hyperparameters tune karein, loss minimise karein\n6. **Evaluate** — confusion matrix, precision/recall/F1; overfitting check\n7. **Deploy** — API ya batch job; monitoring aur retraining plan\n\n**Example:** churn model — 50,000 customers, 30 features, random forest, recall 0.82 par retention offer bheja.\n\n**Diagram:** Refer to the 6-step learning loop in the diagram.',
      },
      {
        question: 'What is deep learning? Why does it require more data and hardware than classical machine learning?',
        answer:
          '**Deep learning:**\nNeural network jisme kai hidden layers hoti hain; har layer pichhli layer ke features se aur abstract features banati hai (edge → shape → face). CNN images ke liye, RNN/LSTM sequences ke liye, transformers language ke liye.\n\n**Why more data:**\n- Lakhs of parameters hote hain; chhote data par model ratto maar leta hai (overfitting)\n- Features khud seekhne padte hain, isliye variations dekhni padti hain\n- Label noise ke liye robust hone ke liye volume chahiye\n\n**Why more hardware:**\n- Matrix multiplication per layer, millions of operations per example\n- GPU/TPU parallel processing ke bina training hafton mein bhi nahi hogi\n- Large models ko serve karne ke liye bhi memory aur inference cost chahiye\n\n| Aspect | Classical ML | Deep learning |\n|---|---|---|\n| Features | Manual engineering | Automatic |\n| Data | Thousands | Lakhs to millions |\n| Hardware | CPU enough | GPU / TPU |\n| Explainability | Higher | Lower |\n| Best for | Tabular data | Images, audio, text |\n\n**Exam line:** "Deep learning tab justify hota hai jab data unstructured ho aur volume bahut bada ho; tabular data par classical ML aksar better aur sasta hota hai."',
      },
    ],
  },

  // ==========================================================
  // 1.11 — Roles in Data Science
  // ==========================================================
  {
    id: 'ds-roles',
    number: '1.11',
    title: 'Roles in Data Science',
    subtitle: 'Data Analyst, Data Scientist, Data Engineer aur ML Engineer',
    icon: 'users',
    accent: '#00d4ff',
    englishDefinition:
      'A data science team splits the work of converting raw data into deployed decisions among specialised roles. A data engineer designs and maintains the data infrastructure — ingestion pipelines, ETL, warehouses, data lakes — so that clean and reliable data is available. A data analyst answers descriptive and diagnostic questions (what happened and why) using SQL, statistics and dashboards, and communicates findings to business stakeholders. A data scientist frames the problem, applies statistical and machine learning methods to build predictive or prescriptive models, and quantifies their business impact. A machine learning engineer takes models to production — packaging, serving, scaling, monitoring, retraining and integrating them into products — a discipline known as MLOps. The roles overlap in practice and are often combined in a single person inside small teams.',
    intro:
      'Syllabus mein ye roles isliye poochte hain kyunki industry mein "data scientist" title ka matlab company ke hisaab se badal jaata hai. Interview mein aapko pata hona chahiye ki kaun data laata hai, kaun usko samajhta hai, kaun model banata hai aur kaun usko live chalata hai. Engineering college exam ke liye: har role ka kaam, skills, tools aur output yaad rakhein — table bana kar likhna sabse safe answer hai.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Ek Team Karne Ke Liye Kaafi Kaam Hai',
        body:
          'Raw data se decision tak ka safar ek hi insaan ke liye bahut bada hai — isliye industry ne kaam tod diya. Data Engineer data ko laata aur saaf karta hai (kahan se aaya? kya bharosa kar sakte hain?), Data Analyst batata hai kya hua (dashboards, trends), Data Scientist predict karta hai kya hoga (model + recommendation), aur ML Engineer model ko production mein chalata hai (API, monitoring, retraining).',
        body2:
          'Ye chaar roles ek pipeline ki tarah kaam karte hain, par linear nahi — scientist ko analyst se insight chahiye, engineer ko scientist se feature requirements chahiye, aur ML engineer ko scientist se model ka expected behaviour. Chhoti company mein ek hi banda chaaron kaam karta hai; badi company mein roles specialised aur alag teams mein hote hain.',
        chips: ['Data Engineer', 'Data Analyst', 'Data Scientist', 'ML Engineer', 'MLOps'],
      },
      {
        type: 'cards',
        kicker: 'Chaar Roles',
        title: 'Kaun Kya Karta Hai',
        cards: [
          {
            icon: 'database',
            title: 'Data Engineer',
            body:
              'Data ko sources (app DB, APIs, logs, third-party) se laakar warehouse ya lake mein reliable banata hai. ETL/ELT pipelines, schema design, partitioning, data quality checks aur orchestration (Airflow, dbt) uske kaam hain. Skill: SQL, Python, Spark, Kafka, cloud (AWS/GCP/Azure), Docker. Output: clean, documented, on-time data. Sawaal: "data kahan se aaya aur bharosemand hai?"',
          },
          {
            icon: 'chart',
            title: 'Data Analyst',
            body:
              'Business ke sawaalon ka jawab data se deta hai — pichhle mahine sales kyun giri, kaunsa segment best chal raha hai. SQL, Excel, dashboarding (Power BI, Tableau), descriptive statistics aur business acumen uske main tools hain. Output: report, dashboard, insight aur recommendation. Sawaal: "kya hua aur kyun hua?"',
          },
          {
            icon: 'bulb',
            title: 'Data Scientist',
            body:
              'Problem define karta hai, data explore karta hai, statistics aur ML se model banata hai, aur uska business impact measure karta hai. Experiment design (A/B test), feature engineering, model selection aur evaluation uske kaam hain. Skills: Python/R, statistics, scikit-learn, SQL, communication. Output: model, insight, experiment result. Sawaal: "kya hoga aur kya karein?"',
          },
          {
            icon: 'server',
            title: 'ML Engineer',
            body:
              'Model ko production mein le jaata hai — training pipeline automate karna, model serve karna (API, batch), latency aur cost manage karna, monitoring, drift detection aur retraining. Skills: Python, Docker/Kubernetes, CI/CD, MLOps tools (MLflow, Kubeflow), cloud. Output: live prediction service. Sawaal: "model sahi chal raha hai, scale par?"',
          },
        ],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Chaar Roles — Kaam, Skills, Output',
        diagram: 'ds-roles',
        caption:
          'Chaar columns left se right pipeline hain: Data Engineer (data laata hai) → Data Analyst (kya hua batata hai) → Data Scientist (kya hoga predict karta hai) → ML Engineer (model chalata hai). Har column mein KAAM, SKILLS, OUTPUT aur SAWAAL likha hai. Exam mein yeh diagram draw karke table se difference likhna best scoring answer hai.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Data Analyst vs Data Scientist vs Data Engineer vs ML Engineer',
        columns: ['Data Analyst', 'Data Scientist', 'Data Engineer', 'ML Engineer'],
        columnColors: ['#00d4ff', '#c4ff00', '#2f6fff', '#ff8800'],
        rows: [
          { label: 'Main question', values: ['Kya hua?', 'Kya hoga?', 'Data kahan se?', 'Production mein chal raha?'] },
          { label: 'Primary output', values: ['Dashboard, report', 'Model, experiment', 'Pipelines, warehouse', 'Model API, service'] },
          { label: 'Core skills', values: ['SQL, visualisation', 'Statistics + ML', 'SQL, distributed systems', 'Software + MLOps'] },
          { label: 'Main tools', values: ['Power BI, Tableau, Excel', 'Python/R, scikit-learn', 'Spark, Airflow, dbt', 'Docker, Kubernetes, MLflow'] },
          { label: 'Statistics depth', values: ['Descriptive', 'Inferential + modelling', 'Kam, quality checks', 'Evaluation metrics'] },
          { label: 'Programming', values: ['Medium (SQL heavy)', 'High', 'High', 'Highest (software engineering)'] },
          { label: 'Works with', values: ['Business team', 'Product + analyst', 'Sources + scientist', 'Scientist + platform'] },
          { label: 'Typical KPI', values: ['Adoption of insight', 'Model accuracy + impact', 'Data freshness, uptime', 'Latency, reliability'] },
        ],
      },
      {
        type: 'example',
        kicker: 'Example',
        title: 'Ek Churn Project — Chaaron Ka Kaam',
        body:
          'Data Engineer: app DB, CRM aur billing API se data utha kar warehouse mein daalta hai; daily 3 AM pipeline, dedupe aur null checks ke saath. Output: churn_events table.\n\nData Analyst: dashboard se dikhata hai ki last quarter churn 12% tha, 60-day inactive users sabse zyada ja rahe hain. Output: "60 din se login nahi → churn risk" hypothesis.\n\nData Scientist: 50,000 customers par logistic regression + random forest banata hai; recall 0.82; top features — inactive days, support tickets. Output: churn probability per customer + retention offer recommendation.\n\nML Engineer: model ko API par deploy karta hai (real-time score), daily batch se scores refresh, drift monitor karta hai; jab accuracy 5% gire to retraining trigger. Output: live churn score service.\n\nResult: targeted offers se churn 12% → 9%, revenue saving 40 lakh — aur ye number teeno team ka joint KPI hota hai.',
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Kaun Sa Role Kab — 6 Practical Rules',
        points: [
          'Sirf reports aur dashboards chahiye → Data Analyst kaafi hai, scientist ki zaroorat nahi.',
          'Data sources bikhere hue, pipeline tooti hui → pehle Data Engineer hire karein; warna scientist 60% time cleaning mein kharch karega.',
          'Prediction ya recommendation chahiye → Data Scientist.',
          'Model live product mein chalana hai (scale, latency, uptime) → ML Engineer / MLOps.',
          'Chhoti team (2–5 log) mein data scientist chaaron kaam karta hai — title se zyada kaam dekhein.',
          'Interview line: "Data science ek team sport hai — analyst insight deta hai, engineer data, scientist model, ML engineer production."',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Data Engineer = data laata aur reliable banata hai (pipelines, warehouse).',
          'Data Analyst = kya hua aur kyun, dashboards aur SQL se batata hai.',
          'Data Scientist = kya hoga, statistics + ML model se predict karta hai.',
          'ML Engineer = model ko production mein chalata, monitor aur retrain karta hai (MLOps).',
          'Chhoti team mein roles merge hote hain; badi team mein specialised.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the roles and responsibilities of a data analyst, data scientist, data engineer and machine learning engineer in a data science team.',
        answer:
          '**1. Data Engineer**\n- Data sources se data laana — ingestion, ETL/ELT\n- Warehouse / data lake design, partitioning, orchestration\n- Data quality, dedupe, monitoring\n- Tools: SQL, Python, Spark, Airflow, dbt, cloud\n- Output: clean, reliable, documented data\n\n**2. Data Analyst**\n- Descriptive analysis — kya hua, kyun hua\n- Dashboards aur KPI reports\n- SQL, Excel, Power BI / Tableau\n- Output: insight aur recommendation business team ke liye\n\n**3. Data Scientist**\n- Problem framing, EDA, feature engineering\n- Statistics + ML model banana, A/B test design\n- Python/R, scikit-learn, statistics, SQL\n- Output: predictive model + business impact measurement\n\n**4. ML Engineer**\n- Model deployment, serving API, batch scoring\n- Scaling, latency, cost, monitoring, drift detection, retraining\n- Docker, Kubernetes, MLflow, CI/CD, cloud\n- Output: reliable live prediction service\n\n**Team view:** engineer → analyst → scientist → ML engineer; sab ka common goal business value hai.\n\n**Diagram:** Refer to the four roles diagram.',
      },
      {
        question: 'Differentiate between data analyst, data scientist and data engineer on the basis of skills, tools and output.',
        answer:
          '| Basis | Data Analyst | Data Scientist | Data Engineer |\n|---|---|---|---|\n| Question | Kya hua? | Kya hoga? | Data kahan se? |\n| Skills | SQL, visualisation, business | Statistics, ML, Python | SQL, distributed systems, pipelines |\n| Tools | Power BI, Tableau, Excel | Python/R, scikit-learn | Spark, Airflow, dbt, cloud |\n| Output | Dashboard, report | Model, experiment, insight | Clean data, pipeline |\n| Statistics | Descriptive | Inferential + modelling | Quality checks |\n| Programming | SQL heavy | High | High |\n| Works with | Business | Product, analyst | Sources, scientist |\n| KPI | Insight adoption | Model accuracy + impact | Data freshness, uptime |\n\n**Example:** churn project mein analyst batata hai 60-day inactive users churn kar rahe hain, scientist model banata hai, engineer wo data pipeline chalata hai jisse dono ko daily fresh data milta hai.\n\n**Note:** Skills overlap hote hain (teeno SQL jaante hain) — difference scope aur primary output ka hai.\n\n**Diagram:** Refer to the four roles diagram.',
      },
      {
        question: 'Explain how the four data science roles collaborate in a customer churn prediction project. Which role would you hire first in a small startup and why?',
        answer:
          '**Collaboration in a churn project:**\n1. **Data Engineer** — app DB, CRM, billing se data warehouse mein laata hai; daily pipeline + quality checks; output table `churn_events`\n2. **Data Analyst** — EDA se pattern nikaalta hai (60-day inactive → churn), business ko dashboard deta hai\n3. **Data Scientist** — labelled data par model (logistic regression / random forest), recall 0.82, top features identify karta hai\n4. **ML Engineer** — model API par deploy, batch scoring, drift monitoring, retraining trigger\n5. **Sab milkar** — business team offer bhejti hai; churn 12% → 9%, saving 40 lakh (joint KPI)\n\n**Startup mein kaun pehle:**\n- Agar data bikhera hua hai aur pipelines nahi hain → **Data Engineer** (warna scientist 60% time cleaning mein jaayega)\n- Agar data already warehouse mein hai aur sirf questions hain → **Data Analyst** (fastest ROI)\n\n**Reason:** shuru mein "sahi data" hi bottleneck hota hai, model nahi. Data reliable hone ke baad scientist ka model value de sakta hai; production scale aane par ML engineer.\n\n**Exam line:** "Pehla hire data ki halat se decide hota hai — pipeline tooti ho to engineer, sawaal zyada ho to analyst."',
      },
    ],
  },

  // ==========================================================
  // 1.12 — Importance of mathematical statistics
  // ==========================================================
  {
    id: 'ds-statistics-importance',
    number: '1.12',
    title: 'Importance of Mathematical Statistics in Data Science',
    subtitle: 'Statistics data science ki neev hai — descriptive se inference tak',
    icon: 'metrics',
    accent: '#ff8800',
    englishDefinition:
      'Mathematical statistics is the science of collecting, summarising, modelling and drawing conclusions from data under uncertainty. It provides data science with descriptive measures (mean, median, mode, variance, standard deviation, quartiles), probability models and distributions (normal, binomial, Poisson), sampling theory including the central limit theorem, inferential methods (estimation, confidence intervals, hypothesis tests such as t-test and chi-square), regression analysis and the theory of model evaluation. Because every dataset is only a sample and every model output carries error, statistics is what lets a data scientist separate a real effect from random noise, quantify uncertainty in a prediction, design experiments such as A/B tests, and detect overfitting.',
    intro:
      'Log kehte hain "ML library se model ban jaata hai, statistics ki zaroorat kya hai?" — asli farak yahin aata hai. Library aapko ek number deti hai; statistics batati hai ki wo number bharose ke layak hai ya nahi. Sample chhota tha? Difference real hai ya chance? Model overfit hai? Ye sab statistics ke sawaal hain. Exam mein "importance" wala 6-mark question aata hai — isliye 5 kaam yaad rakhein: summarise, sample, infer, model, validate.',
    sections: [
      {
        type: 'definition',
        kicker: 'Definition',
        title: 'Statistics Kya Karti Hai?',
        body:
          'Statistics do hisson mein baanti jaati hai. Descriptive statistics data ko summarise karti hai — mean, median, mode, range, variance, standard deviation, quartiles, correlation. Inferential statistics chhote sample se poore population ke baare mein conclusion nikaalti hai — estimation, confidence interval aur hypothesis testing. Isi ke saath probability distributions batati hain ki random process ka behaviour kaisa hoga.',
        body2:
          'Data science mein dono kaam aati hain: descriptive se EDA hoti hai (data kaisa dikh raha hai, outlier kahan hai), inferential se decision hota hai (naya feature sach mein conversion badhata hai ya nahi). Bina statistics ke model sirf "pattern matching" hai — usme bharosa karne ka koi basis nahi.',
        chips: ['Descriptive statistics', 'Inferential statistics', 'Probability', 'Central limit theorem', 'p-value', 'Confidence interval'],
      },
      {
        type: 'cards',
        kicker: 'Chaar Stambh',
        title: 'Statistics ke Chaar hisse jo DS mein use hote hain',
        cards: [
          {
            icon: 'chart',
            title: 'Descriptive Statistics',
            body:
              'Data ko ek line mein summarise karna — mean (average), median (middle, outlier se safe), mode, variance aur standard deviation (spread), quartiles aur IQR (outlier detection), correlation. EDA ka 80% yahi hai. Example: salary data mein mean 12 L par median 7 L — matlab data skewed hai aur mean misleading hoga.',
          },
          {
            icon: 'cube',
            title: 'Probability & Distributions',
            body:
              'Randomness ko model karna — normal (bell curve), binomial (yes/no), Poisson (counts per minute). Normal distribution ka 68–95–99.7 rule, Bayes theorem (prior ko evidence se update karna), aur sampling distribution. Spam filter ka Naive Bayes, credit risk ka probability of default — sab yahin se aate hain.',
          },
          {
            icon: 'target',
            title: 'Inferential Statistics',
            body:
              'Sample se population ka conclusion — confidence interval (estimate ke around error band), hypothesis test (t-test, chi-square, ANOVA), p-value (agar null sach ho to itna extreme result milne ki probability), type I/II error aur power. A/B test, clinical trial aur survey analysis isi par khade hain.',
          },
          {
            icon: 'trends',
            title: 'Regression & Model Theory',
            body:
              'Linear regression ka least squares, assumptions (linearity, independence, homoscedasticity), R² aur adjusted R², multicollinearity (VIF), bias-variance tradeoff, aur regularization (ridge/lasso). Overfitting aur underfitting ko samajhne ka mathematical base yahi hai — isliye train/test split aur cross-validation bhi statistics hai.',
          },
        ],
      },
      {
        type: 'diagram',
        kicker: 'Diagram (Exam Ke Liye)',
        title: 'Statistics — Data Science ki Neev',
        diagram: 'stats-foundation',
        caption:
          'Left mein pyramid hai: neeche data + domain knowledge, uske upar descriptive statistics, probability & sampling, inference & testing, aur sabse upar prediction / ML. Right mein bataya hai ki statistics life cycle ke kis stage par kaam aati hai — cleaning, EDA, modelling aur evaluation. Neeche core formulas hain. Exam mein pyramid draw karke "statistics foundation hai, ML uske upar bana hai" likhein.',
      },
      {
        type: 'comparison',
        kicker: 'Comparison Table',
        title: 'Statistics Concept → Data Science Mein Kahan',
        columns: ['Kahan use hoti hai', 'Example'],
        columnColors: ['#00d4ff', '#ff8800'],
        rows: [
          { label: 'Mean / median / mode', values: ['Missing value fill, data summarise', 'salary: mean 12 L par median 7 L'] },
          { label: 'Standard deviation / IQR', values: ['Spread compare, outlier detection', 'IQR rule: 1.5 × IQR'] },
          { label: 'Normal distribution', values: ['Distribution check, threshold set', '68–95–99.7 rule'] },
          { label: 'Central limit theorem', values: ['Sample mean ka behaviour, CI', 'n ≥ 30 par normal approximation'] },
          { label: 'Hypothesis test + p-value', values: ['A/B test ka decision', 'p = 0.004 → ship'] },
          { label: 'Confidence interval', values: ['Estimate ka error band', 'lift 0.6% se 3.4%'] },
          { label: 'Correlation / covariance', values: ['Feature selection', 'r = 0.8 par causation nahi'] },
          { label: 'Regression + bias-variance', values: ['Modelling, overfitting control', 'R² aur train-test gap'] },
          { label: 'Bayes theorem', values: ['Prior + evidence update', 'Naive Bayes spam filter'] },
        ],
      },
      {
        type: 'example',
        kicker: 'Example',
        title: 'A/B Test — Statistics Ka Sabse Real Use',
        body:
          'Sawaal: naya landing page (B) purane page (A) se better hai?\n\nData: A par 4,000 visitors, 400 clicks (10%); B par 4,000 visitors, 480 clicks (12%). Difference 2 percentage points.\n\nStatistics ke bina: "B 2% better hai, ship kar do" — ye galat ho sakta hai, kyunki sample ka difference chance se bhi aa sakta hai.\n\nStatistics ke saath: two-proportion z-test → z ≈ 2.9, p ≈ 0.004. p < 0.05 hai, matlab agar dono pages barabar hote to sirf 0.4% chance tha itna difference milne ka. 95% confidence interval for lift ≈ 0.6% to 3.4% — poora interval positive hai.\n\nDecision: B ship karo, par 2 hafte aur monitor karo (novelty effect).\n\nAur agar p = 0.20 hota? To "result significant nahi hai — sample badhao ya idea chhodo" — yahi statistics ka asli contribution hai: galat decision se bachana.',
      },
      {
        type: 'points',
        kicker: 'Exam Points',
        title: 'Importance of Statistics — 6 Points',
        points: [
          'Data summarise karna — mean, median, spread se pata chalta hai data kaisa hai aur outlier kahan hai.',
          'Sampling ka bharosa — representative sample aur central limit theorem se poore population ka estimate milta hai.',
          'Uncertainty quantify karna — confidence interval aur standard error batate hain estimate kitna bharosemand hai.',
          'Decision validate karna — hypothesis testing aur A/B test se pata chalta hai effect real hai ya chance.',
          'Model sahi banane ke liye — regression assumptions, bias-variance tradeoff, overfitting control.',
          'Galat conclusion se bachana — correlation vs causation, p-hacking, imbalanced data aur biased sampling.',
          'Interview line: "ML prediction deta hai, statistics batati hai ki prediction par bharosa kitna karein."',
        ],
      },
      {
        type: 'recap',
        kicker: 'Recap',
        title: 'Quick Recap',
        points: [
          'Descriptive = summarise (mean, median, SD, IQR); inferential = conclude (CI, hypothesis test).',
          'CLT: sample size badhne par sample mean normal ho jaata hai — CI aur test isi par khade hain.',
          'p-value = null sach hone par itna extreme result milne ki probability; < 0.05 → significant.',
          'Confidence interval = estimate + error band; p-value se zyada informative.',
          'Correlation causation nahi hai; biased sample se sahi model nahi banta.',
        ],
      },
    ],
    examQuestions: [
      {
        question: 'Explain the importance of mathematical statistics in data science.',
        answer:
          '**Statistics:** data ko collect, summarise, model karke uncertainty ke saath conclusion nikaalne ka science.\n\n**Importance (6 points):**\n1. **Summarising data** — mean, median, variance, IQR se data ka behaviour samajh aata hai\n2. **Sampling** — representative sample aur CLT se population ka estimate milta hai\n3. **Quantifying uncertainty** — confidence interval, standard error\n4. **Validating decisions** — hypothesis testing, A/B test, p-value\n5. **Modelling** — regression assumptions, bias-variance tradeoff, overfitting control\n6. **Avoiding wrong conclusions** — correlation vs causation, p-hacking, biased data\n\n**Without statistics:**\n- Model ek number deta hai, par uski reliability pata nahi chalti\n- Random noise ko "insight" samajh liya jaata hai\n- Chhote sample par bada decision le liya jaata hai\n\n**With statistics:**\n- Result significant hai ya chance — pata chalta hai\n- Estimate ke saath error band milta hai\n- Model overfit hai ya generalise karta hai — detect hota hai\n\n**Diagram:** Refer to the statistics pyramid diagram.',
      },
      {
        question: 'Differentiate between descriptive and inferential statistics with suitable examples.',
        answer:
          '**Descriptive statistics:**\n- Data ko summarise aur describe karti hai\n- Measures: mean, median, mode, range, variance, SD, quartiles, correlation\n- Visuals: histogram, box plot, scatter plot\n- Example: class ke 60 students ka average 68 marks, SD 9\n- Population tak koi claim nahi karti\n\n**Inferential statistics:**\n- Sample se population ke baare mein conclusion nikaalti hai\n- Tools: estimation, confidence interval, hypothesis testing (t-test, z-test, chi-square, ANOVA)\n- Concepts: standard error, p-value, type I/II error, power\n- Example: 60 students ke sample se conclude karna ki poore college ka average 65–71 ke beech hai\n\n| Basis | Descriptive | Inferential |\n|---|---|---|\n| Purpose | Summarise | Conclude / generalise |\n| Data | Poora dataset | Sample |\n| Output | Mean, SD, chart | CI, p-value, decision |\n| Uncertainty | Nahi | Haan — error ke saath |\n| Example | Average salary 9 L | Naye process se salary badhegi (p = 0.03) |\n\n**Relation:** inferential statistics descriptive measures par hi bani hoti hai — sample mean calculate karke usse population mean ka estimate banate hain.\n\n**Diagram:** Refer to the statistics pyramid (descriptive base, inference upar).',
      },
      {
        question: 'Explain hypothesis testing and confidence intervals with the help of an A/B test. Why is the central limit theorem important here?',
        answer:
          '**Hypothesis testing (A/B test):**\n1. **Null hypothesis (H0):** dono pages ka conversion rate barabar hai\n2. **Alternative (H1):** naya page better hai\n3. **Significance level:** α = 0.05\n4. **Test:** two-proportion z-test (ya chi-square)\n5. **p-value:** agar H0 sach ho to itna bada difference milne ki probability\n6. **Decision:** p < 0.05 → H0 reject, result significant\n\n**Numbers:** A = 400/4000 (10%), B = 480/4000 (12%) → z ≈ 2.9, p ≈ 0.004 → significant.\n\n**Confidence interval:**\n- Lift ka 95% CI ≈ 0.6% to 3.4%\n- Interval poora positive hai → improvement real lagta hai\n- CI p-value se better hai kyunki effect ka size aur precision dono dikhata hai\n\n**Central limit theorem:**\n- Sample size badhne par sample mean ka distribution normal ho jaata hai (chahe population normal na ho)\n- Isi wajah se z-test / t-test aur CI ke formulas valid hote hain\n- Practically: n ≥ 30 par mean ka normal approximation theek chalta hai\n\n| Concept | Kya batata hai | A/B test mein |\n|---|---|---|\n| p-value | Chance ka role | 0.004 → significant |\n| CI | Effect ka range | +0.6% to +3.4% |\n| CLT | Test kyun valid hai | Sample mean normal |\n| Power | Chhota effect pakadne ki ability | 80% target |\n\n**Exam line:** "A/B test mein statistics do kaam karti hai — effect real hai ya nahi (test), aur effect kitna bada hai (CI)."',
      },
      {
        question: 'Why is statistics considered the foundation of data science? Explain with reference to exploratory data analysis and model evaluation.',
        answer:
          '**Statistics as foundation:**\nML algorithms statistics ke formulas par bane hain — regression least squares se, logistic regression maximum likelihood se, decision tree entropy/information gain se, Naive Bayes Bayes theorem se.\n\n**1. Exploratory Data Analysis (EDA)**\n- Mean/median se centre, SD/IQR se spread\n- Histogram aur box plot se distribution aur outlier\n- Correlation matrix se feature relation\n- Missing values aur skewness dekhna\n- Yahan hi decide hota hai kaunsa feature rakhna hai\n\n**2. Feature engineering**\n- Scaling ke liye mean aur SD\n- Outlier capping IQR se (1.5 × IQR rule)\n- Encoding aur transformation (log normal ke liye)\n\n**3. Model evaluation**\n- Train/test gap se overfitting detect\n- Cross-validation se variance kam\n- Confidence interval se metric ka error band\n- Imbalanced data mein accuracy ke bajaye precision/recall/F1\n- Bias-variance tradeoff se model complexity decide\n\n**4. Business decision**\n- A/B test se change validate\n- Sample size aur power calculation\n- Correlation vs causation ka farak\n\n| Stage | Statistics ka role |\n|---|---|\n| Cleaning | outlier, missing values |\n| EDA | distribution, correlation |\n| Modelling | regression, assumptions |\n| Evaluation | CI, overfitting, metrics |\n\n**Diagram:** Refer to the statistics pyramid diagram.',
      },
    ],
  },
];
