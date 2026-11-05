// Data Science — Unit III: Classification
export const dataScienceUnit3Topics = [
  {
    "id": "classification-applications",
    "number": "3.1",
    "title": "Applications of Classification",
    "subtitle": "Classification kya hai, kitne type ke hote hain aur real duniya mein kahan use hota hai",
    "icon": "briefcase",
    "accent": "#00d4ff",
    "englishDefinition": "Classification is a supervised machine-learning task in which a model learns a mapping from input features to a discrete class label, so that unseen records can be assigned to one of the predefined categories. Mathematically it learns a function f: X -> Y where Y is a finite set of labels, and it separates the feature space with a decision boundary. It differs from regression, which predicts a continuous numeric value. Classification may be binary (two classes), multi-class (more than two mutually exclusive classes) or multi-label (several labels may be true for the same record). Typical applications are spam filtering, fraud detection, medical diagnosis, credit-risk scoring, customer churn prediction, sentiment analysis, image and speech recognition, and document categorisation.",
    "intro": "Classification matlab **\"ye record kis category ka hai?\"** ka jawab dena. Bank ko batao ki transaction fraud hai ya genuine, doctor ko batao ki tumour malignant hai ya benign, Gmail ko batao ki mail spam hai ya inbox. Har case mein input kuch features hain (amount, age, pixels) aur output ek **label** hai — isliye ise supervised learning kehte hain, kyunki training data mein labels pehle se diye jaate hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Classification Kya Hai",
        "kicker": "Definition",
        "body": "Classification ek **supervised learning** task hai jisme model input features (X) se ek **discrete class label** (Y) predict karna seekhta hai. Training mein labelled examples diye jaate hain, model decision boundary banata hai, aur phir naye (unseen) records ko usi boundary ke according ek class mein daal deta hai.",
        "body2": "Regression aur classification mein bas farak yahi hai: regression **continuous value** deta hai (salary 45,000, temperature 31.5) aur classification **category** deta hai (spam / not spam). Classification ke teen flavours hain — **binary** (2 classes), **multi-class** (3+ classes jinme ek hi sach ho) aur **multi-label** (ek record par ek se zyada label lag sakte hain).",
        "chips": ["Supervised task", "Discrete label", "Decision boundary", "Binary / multi-class", "Probability output"]
      },
      {
        "type": "cards",
        "title": "Rojana Ke Applications",
        "kicker": "Use Cases",
        "cards": [
          {
            "icon": "shield",
            "title": "Spam Filtering",
            "body": "Email/SMS ko spam ya ham classify karna — Naive Bayes ka classic use case (Gmail, Outlook)."
          },
          {
            "icon": "money",
            "title": "Fraud Detection",
            "body": "Credit-card ya UPI transaction fraud hai ya genuine — imbalanced data, precision important."
          },
          {
            "icon": "test",
            "title": "Medical Diagnosis",
            "body": "X-ray/MRI scan, ECG ya blood report se disease present/absent; cancer malignant ya benign."
          },
          {
            "icon": "briefcase",
            "title": "Credit Scoring",
            "body": "Loan approve karna hai ya nahi — bank CIBIL + income features se default risk classify karta hai."
          },
          {
            "icon": "users",
            "title": "Churn Prediction",
            "body": "Telecom/bank customer churn karega ya nahi — retention offer pehle se bhejne ke liye."
          },
          {
            "icon": "globe",
            "title": "Sentiment Analysis",
            "body": "Review/tweet positive, negative ya neutral — product feedback automatic analyse karne ke liye."
          },
          {
            "icon": "eye",
            "title": "Image Recognition",
            "body": "Face unlock, number-plate reading, crop-disease detection — CNN + softmax classifier."
          },
          {
            "icon": "doc",
            "title": "Document Categorisation",
            "body": "News article sports/business/politics, ya support ticket ko department mein route karna."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Binary vs Multi-class vs Multi-label",
        "kicker": "Types",
        "columns": ["Binary", "Multi-class", "Multi-label"],
        "rows": [
          {
            "label": "Classes",
            "values": ["sirf 2 (haan/na)", "3 ya zyada, mutually exclusive", "kai labels ek saath sach"]
          },
          {
            "label": "Example",
            "values": ["spam / not spam", "digit 0–9, fruit apple/mango/grape", "photo: beach + sunset + dog"]
          },
          {
            "label": "Example 2",
            "values": ["fraud / genuine", "grade A / B / C / Fail", "movie: action + comedy + romance"]
          },
          {
            "label": "Output layer",
            "values": ["1 sigmoid neuron", "softmax over k classes", "k sigmoid neurons (independent)"]
          },
          {
            "label": "Common algorithm",
            "values": ["logistic regression, SVM", "softmax regression, random forest", "one-vs-rest, classifier chains"]
          },
          {
            "label": "Metric",
            "values": ["precision, recall, ROC-AUC", "macro-F1, confusion matrix (k x k)", "Hamming loss, subset accuracy"]
          }
        ],
        "columnColors": ["#00d4ff", "#c4ff00", "#ff7ab2"]
      },
      {
        "type": "points",
        "title": "Kahan Kaam Aata Hai — Industry View",
        "kicker": "Applications",
        "points": [
          "**Banking & finance** — loan approval, credit-card fraud, AML alerts, customer segmentation. Paisa risk kam karna.",
          "**Healthcare** — disease diagnosis, cancer screening, ICU readmission risk, drug response prediction.",
          "**Retail & e-commerce** — buy/not-buy prediction, churn, product review sentiment, return prediction.",
          "**Telecom** — churn detection, network fault classification, spam call detection.",
          "**Manufacturing** — defective vs OK product (visual inspection), predictive maintenance alarm.",
          "**Security** — intrusion detection, malware family classification, face/fingerprint verification.",
          "**Text & web** — spam, sentiment, language detection, news topic tagging, resume screening.",
          "**Agriculture & environment** — crop disease from leaf photo, soil type, satellite land-use class.",
          "**Exam tip:** answer mein 4–5 applications likho — har application ke saath **input features + output classes** likhne se answer full-mark ban jaata hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Applications of Classification",
        "kicker": "Diagram",
        "diagram": "ds3-applications",
        "caption": "Ek hi supervised pipeline alag-alag domain mein: features → classifier → discrete label"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "Classification = supervised learning jisme output **discrete class label** hota hai (regression mein continuous value).",
          "Teen types: **binary** (2), **multi-class** (3+, mutually exclusive), **multi-label** (ek saath kai labels).",
          "Model **decision boundary** seekhta hai aur naye record ko us boundary ke hisaab se class deta hai.",
          "Applications: spam filter, fraud detection, medical diagnosis, credit scoring, churn, sentiment, image recognition, document tagging.",
          "Exam mein likho: **problem → features → classes → algorithm → business benefit** — ye chaar-paanch line best answer hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define classification. Explain any five applications of classification in real life.",
        "answer": "**Definition:** Classification is a supervised machine-learning technique in which a model learns to map input features to a **discrete class label**, so that unseen records can be assigned to one of the predefined categories. The model learns a function f: X → Y where Y is a finite set of labels, and separates the feature space using a decision boundary.\n\n**Applications:**\n1. **Spam filtering** — features (sender, keywords, links) se mail ko spam / not-spam classify karna; Naive Bayes ka classic use.\n2. **Fraud detection** — transaction amount, location, time, device se fraud / genuine classify karna; bank real-time alert bhejta hai.\n3. **Medical diagnosis** — scan image, ECG ya lab values se disease present / absent, tumour malignant / benign.\n4. **Credit scoring** — income, CIBIL, EMI ratio se applicant default karega ya nahi; loan approve/reject decision.\n5. **Customer churn prediction** — usage, complaints, tenure se churn / stay classify karke retention offer bhejna.\n6. **Sentiment analysis** — review text ko positive / negative / neutral classify karna.\n7. **Image recognition** — face unlock, number plate reading, crop-disease detection.\n\n**Diagram:** Refer to Applications of Classification diagram."
      },
      {
        "question": "Differentiate between binary, multi-class and multi-label classification with examples.",
        "answer": "**Comparison:**\n\n| Point | Binary | Multi-class | Multi-label |\n|---|---|---|---|\n| Classes | exactly 2 | 3 or more, mutually exclusive | kai labels ek saath true ho sakte hain |\n| Example | spam / not spam | digit 0–9, grade A/B/C | photo: beach + sunset + dog |\n| Output | 1 sigmoid neuron (0–1) | softmax over k classes | k independent sigmoid neurons |\n| Loss | binary cross-entropy | categorical cross-entropy | binary cross-entropy per label |\n| Algorithm | logistic regression, SVM | softmax regression, random forest | one-vs-rest, classifier chains |\n| Metric | precision, recall, ROC-AUC | macro-F1, k x k confusion matrix | Hamming loss, subset accuracy |\n\n**Binary:** sirf do possible outcomes — jaise email spam hai ya nahi, transaction fraud hai ya nahi.\n**Multi-class:** ek se zyada classes par record sirf **ek** class ka ho sakta hai — digit recognition (0–9) mein ek image ek hi digit hoti hai.\n**Multi-label:** ek record par ek se zyada label valid ho sakte hain — ek movie action + comedy + romance teeno ho sakti hai; spam filter ek mail ko \"spam + phishing\" dono mark kar sakta hai.\n\n**Diagram:** Refer to Binary vs Multi-class vs Multi-label diagram."
      },
      {
        "question": "Explain the classification process with a suitable example. Why is classification called supervised learning?",
        "answer": "**Classification process (6 steps):**\n1. **Problem define** — kya predict karna hai aur classes kya hain (jaise loan: default / no-default).\n2. **Data collection** — labelled historical records (features + actual class).\n3. **Pre-processing** — missing values, encoding, scaling, class-imbalance handling.\n4. **Train-test split** — jaise 80:20; model sirf train par fit hota hai (leakage se bacho).\n5. **Model training** — algorithm decision boundary / probability learn karta hai (logistic regression, Naive Bayes, KNN, decision tree, SVM).\n6. **Evaluation + deployment** — confusion matrix, precision, recall, F1, ROC-AUC se check; phir naye data par predict.\n\n**Example — loan default:** features = income, age, existing EMI, CIBIL score, employment years; label = default (1) / no-default (0). Model 80:20 split par train hota hai, test par precision 0.81 aur recall 0.74 milta hai, phir live application par naye applicant ka decision 0.5 threshold se hota hai.\n\n**Why supervised:** training data ke saath **correct answers (labels)** diye jaate hain — model input→output mapping un labels se seekhta hai. Ye teacher ke saath padhne jaisa hai; labels na hon to wo unsupervised learning (clustering) ho jaata.\n\n**Diagram:** Refer to Applications of Classification diagram."
      }
    ]
  },
  {
    "id": "ml-types",
    "number": "3.2",
    "title": "Machine Learning: Types",
    "subtitle": "Supervised, unsupervised aur reinforcement learning — teeno ka farak aur use cases",
    "icon": "ai",
    "accent": "#ff0080",
    "englishDefinition": "Machine learning is a branch of artificial intelligence in which systems learn patterns from data instead of being explicitly programmed. It has three main paradigms. Supervised learning trains on labelled data (input-output pairs) and performs classification or regression. Unsupervised learning works on unlabelled data and discovers hidden structure through clustering, association-rule mining and dimensionality reduction. Reinforcement learning trains an agent by trial and error: it takes actions in an environment, receives rewards or penalties, and learns a policy that maximises the cumulative reward. Semi-supervised and self-supervised learning combine labelled and unlabelled data.",
    "intro": "Machine learning ka core idea ek line mein: **program ko rules mat sikhao, data dikha do — wo khud pattern nikaal lega.** Ab sawaal ye hai ki data kaisa hai. Agar data ke saath **answer (label)** likha hai to supervised. Agar sirf data hai, answer nahi, to unsupervised. Agar koi answer bhi nahi hai aur sikhne ka tareeka **reward/penalty** hai (game khelna, robot chalana) to reinforcement.",
    "sections": [
      {
        "type": "definition",
        "title": "Machine Learning Kya Hai",
        "kicker": "Definition",
        "body": "Machine Learning AI ki wo branch hai jisme system **explicit rules ke bina**, data se pattern seekh kar predictions ya decisions leta hai. Training ke baad model ka performance **unseen data** par measure kiya jaata hai — ratna (memorise) nahi, generalise karna iska goal hai.",
        "body2": "Classical programming mein hum rules likhte hain aur data dete hain, output milta hai. ML mein hum **data + output** dete hain aur model **rules (pattern)** nikaal leta hai. Isi liye ML tab use hota hai jab rules likhna mushkil ho — face recognition, spam detection, language translation.",
        "chips": ["Data-driven", "No explicit rules", "Generalisation", "Train → test", "3 paradigms"]
      },
      {
        "type": "cards",
        "title": "Teen Main Types",
        "kicker": "Paradigms",
        "cards": [
          {
            "icon": "check",
            "title": "1. Supervised Learning",
            "body": "Labelled data (X + Y). Model mapping seekhta hai. Do kaam: **classification** (spam/not spam) aur **regression** (price predict)."
          },
          {
            "icon": "scatter",
            "title": "2. Unsupervised Learning",
            "body": "Sirf X, koi label nahi. Hidden structure dhoondta hai: **clustering** (K-means), **association** (Apriori), **dimensionality reduction** (PCA)."
          },
          {
            "icon": "target",
            "title": "3. Reinforcement Learning",
            "body": "Agent + environment + reward. Trial and error se **policy** seekhta hai — game (AlphaGo), robotics, self-driving, ads bidding."
          },
          {
            "icon": "half",
            "title": "4. Semi-supervised",
            "body": "Thoda labelled + bahut saara unlabelled data — label karna mehnga ho to (medical images, fraud)."
          },
          {
            "icon": "layers",
            "title": "5. Self-supervised",
            "body": "Labels data se hi generate hote hain — LLM pre-training (next word prediction), BERT masking."
          },
          {
            "icon": "flow",
            "title": "6. Transfer learning",
            "body": "Pre-trained model ko naye task par fine-tune karna — kam data, kam time, better accuracy."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Teeno Types Ka Comparison",
        "kicker": "Comparison",
        "columns": ["Supervised", "Unsupervised", "Reinforcement"],
        "rows": [
          {
            "label": "Input data",
            "values": ["labelled (X + Y)", "unlabelled (sirf X)", "no dataset — environment se interaction"]
          },
          {
            "label": "Goal",
            "values": ["predict label / value", "structure ya group dhoondna", "maximise cumulative reward"]
          },
          {
            "label": "Feedback",
            "values": ["correct answer diya jaata hai", "koi feedback nahi", "reward / penalty (delayed)"]
          },
          {
            "label": "Output",
            "values": ["class ya number", "clusters, rules, components", "policy (state → action)"]
          },
          {
            "label": "Algorithms",
            "values": [
              "linear/logistic regression, KNN, tree, SVM, Naive Bayes",
              "K-means, DBSCAN, hierarchical, Apriori, PCA",
              "Q-learning, SARSA, DQN, policy gradient, PPO"
            ]
          },
          {
            "label": "Examples",
            "values": [
              "spam filter, churn, price predict",
              "customer segmentation, market basket, anomaly",
              "game AI, robotics, traffic signal, trading bot"
            ]
          },
          {
            "label": "Evaluation",
            "values": [
              "accuracy, precision, recall, F1, RMSE, R²",
              "silhouette, Davies-Bouldin, within-cluster SSE",
              "average reward, regret, episodes to converge"
            ]
          }
        ],
        "columnColors": ["#00d4ff", "#00ff88", "#ff8800"]
      },
      {
        "type": "points",
        "title": "Supervised Ke Andar Do Kaam",
        "kicker": "Classification vs Regression",
        "points": [
          "**Classification** — output discrete class: spam/not-spam, disease yes/no, digit 0–9. Metrics: accuracy, precision, recall, F1, ROC-AUC.",
          "**Regression** — output continuous number: house price, temperature, sales, salary. Metrics: MAE, MSE, RMSE, R².",
          "Ye farak exam mein bahut poocha jaata hai — **same algorithm dono kar sakta hai**: decision tree classification tree bhi hota hai aur regression tree bhi.",
          "**Reinforcement learning ka special point:** koi labelled dataset nahi hota, agent **explore vs exploit** trade-off handle karta hai aur reward thoda **delayed** milta hai (chess mein reward game ke end mein).",
          "**Unsupervised ka special point:** \"sahi answer\" nahi hota, isliye evaluation subjective hai — silhouette score ya business sense se clusters judge karte hain.",
          "**Exam line:** \"Supervised = learn with a teacher, unsupervised = learn without a teacher, reinforcement = learn from rewards.\""
        ]
      },
      {
        "type": "diagram",
        "title": "Machine Learning Ke Types",
        "kicker": "Diagram",
        "diagram": "ds3-ml-types",
        "caption": "Labelled data → supervised, unlabelled → unsupervised, reward-based interaction → reinforcement"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Supervised** = labelled data (X + Y) → classification (class) ya regression (number).",
          "**Unsupervised** = sirf X → clustering (K-means), association (Apriori), reduction (PCA).",
          "**Reinforcement** = agent + environment + reward → policy seekhna, delayed feedback, explore vs exploit.",
          "Extra types: semi-supervised (thoda labelled), self-supervised (labels data se), transfer learning (pre-trained model).",
          "Evaluation: supervised → accuracy/F1/RMSE; unsupervised → silhouette; RL → average reward / regret."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the types of machine learning with suitable examples.",
        "answer": "**Machine learning** data se pattern seekhne ka tareeka hai. Iske teen main types hain:\n\n**1. Supervised Learning** — labelled data (input + correct output) par train hota hai.\n- *Classification*: output class — spam filter, disease diagnosis, digit recognition.\n- *Regression*: output number — house price, temperature, sales forecast.\n- Algorithms: linear regression, logistic regression, KNN, decision tree, SVM, Naive Bayes.\n\n**2. Unsupervised Learning** — sirf input data, koi label nahi; model khud structure dhoondta hai.\n- *Clustering*: customer segmentation (K-means), document grouping.\n- *Association*: market-basket — \"jo bread kharidta hai wo butter bhi\" (Apriori).\n- *Dimensionality reduction*: 1000 features → 10 principal components (PCA).\n\n**3. Reinforcement Learning** — agent environment mein action leta hai, reward/penalty se seekhta hai, aisa policy banata hai jo total reward maximise kare.\n- Examples: AlphaGo, robot walking, self-driving car, ad bidding, traffic-signal control.\n- Concepts: state, action, reward, policy, explore vs exploit, delayed reward.\n\n**Other types:** semi-supervised (thoda labelled + bahut unlabelled), self-supervised (LLM pre-training), transfer learning (fine-tune pre-trained model).\n\n**Diagram:** Refer to Machine Learning Ke Types diagram."
      },
      {
        "question": "Differentiate between supervised, unsupervised and reinforcement learning.",
        "answer": "| Point | Supervised | Unsupervised | Reinforcement |\n|---|---|---|---|\n| Data | labelled (X + Y) | unlabelled (X only) | no fixed dataset, environment interaction |\n| Goal | label ya value predict karna | hidden structure dhoondna | cumulative reward maximise karna |\n| Feedback | correct answer available | koi feedback nahi | reward / penalty, often delayed |\n| Output | class / number | clusters, rules, components | policy (state → action) |\n| Algorithms | linear & logistic regression, KNN, tree, SVM, Naive Bayes | K-means, DBSCAN, Apriori, PCA | Q-learning, DQN, policy gradient, PPO |\n| Example | spam detection, churn, price prediction | segmentation, basket analysis, anomaly detection | game AI, robotics, self-driving |\n| Evaluation | accuracy, precision, recall, F1, RMSE | silhouette, within-cluster SSE | average reward, regret |\n\n**Ek line mein:** supervised = teacher ke saath padhna, unsupervised = bina teacher khud pattern dhoondna, reinforcement = kar ke, galti karke, reward se seekhna.\n\n**Diagram:** Refer to Machine Learning Ke Types diagram."
      },
      {
        "question": "What is reinforcement learning? Explain its key elements and give two applications.",
        "answer": "**Reinforcement Learning (RL):** ek learning paradigm jisme **agent** environment ke saath interact karta hai, action leta hai, aur us action ka **reward ya penalty** milta hai. Agent ka goal aisa **policy** seekhna hai jo long-term cumulative reward maximise kare. Yahan koi labelled dataset nahi hota — data khud interaction se generate hota hai.\n\n**Key elements:**\n1. **Agent** — learner/decision maker (robot, bot).\n2. **Environment** — jisse agent interact karta hai (game board, road, market).\n3. **State (S)** — current situation ka snapshot.\n4. **Action (A)** — agent ka choice.\n5. **Reward (R)** — feedback signal (+1 win, -1 crash).\n6. **Policy (π)** — state → action mapping jo agent seekhta hai.\n7. **Value function** — state/action ki long-term value; **Q-learning** action-value Q(s,a) seekhta hai.\n8. **Explore vs exploit** — naya action try karna vs best known action repeat karna.\n\n**Applications:** (i) **Game playing** — AlphaGo, Atari/Dota bots; (ii) **Robotics & self-driving** — walking, grasping, lane change; (iii) ad bidding, traffic-signal optimisation, recommendation.\n\n**Challenge:** delayed aur sparse reward, sample inefficiency, safety (real world mein galat action mehnga padta hai).\n\n**Diagram:** Refer to Machine Learning Ke Types diagram."
      }
    ]
  },
  {
    "id": "linear-regression",
    "number": "3.3",
    "title": "Linear Regression",
    "subtitle": "Best-fit line, least squares, assumptions aur classification ke saath iska relation",
    "icon": "trends",
    "accent": "#00ff88",
    "englishDefinition": "Linear regression is a supervised learning algorithm that models the relationship between one or more independent variables (X) and a continuous dependent variable (Y) by fitting a straight line (or hyperplane) of the form Y = b0 + b1X1 + b2X2 + ... + bnXn. The coefficients are estimated by the ordinary least squares (OLS) method, which minimises the sum of squared residuals, and the fit is evaluated with R-squared, adjusted R-squared, MAE, MSE and RMSE. Its assumptions are linearity, independence of errors, homoscedasticity, normality of residuals and absence of multicollinearity. Although it predicts a continuous value, it is the base model of supervised learning and is used as a baseline before attempting classification (where logistic regression is preferred because it returns a bounded probability).",
    "intro": "Linear regression ka poora kaam ek line dhoondhna hai jo data ke beech se **sabse kam galti** ke saath guzre. Jaise \"experience kitna hai → salary kitni hogi\" — 2 saal par 25k, 5 saal par 40k, to line ban jaati hai Salary = 10,000 + 6,000 x Experience. Syllabus mein ye classification ke saath isliye rakha gaya hai kyunki **yahi supervised learning ka base hai** — iske baad logistic regression samajhna aasan ho jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Linear Regression Kya Hai",
        "kicker": "Definition",
        "body": "Linear regression ek **supervised regression** algorithm hai jo input (X) aur **continuous output** (Y) ke beech **linear relationship** ko ek straight line se model karta hai:\n**Simple:** Y = b0 + b1·X  ·  **Multiple:** Y = b0 + b1X1 + b2X2 + … + bnXn\nYahan **b0 = intercept** (X = 0 par Y ki value) aur **b1 = slope/coefficient** (X ek unit badhne par Y kitna badta hai). Model coefficients ko aisa choose karta hai ki actual aur predicted values ke **squared differences ka sum minimum** ho (least squares).",
        "body2": "Classification se farak: yahan output **number** hota hai (price, temperature), isliye metric RMSE aur R² hota hai, accuracy nahi. Agar output class chahiye to usi idea par **logistic regression** lagti hai, jo probability ko 0–1 ke beech rakhti hai.",
        "chips": ["Y = b0 + b1X", "OLS", "Least squares", "Continuous Y", "Best-fit line"]
      },
      {
        "type": "cards",
        "title": "Teen Building Blocks",
        "kicker": "Concepts",
        "cards": [
          {
            "icon": "chart",
            "title": "Best-Fit Line",
            "body": "Aisi line jo saare points ke **residuals (y - ŷ)** ka square sum minimum kare — isi liye method ka naam **Ordinary Least Squares (OLS)** hai."
          },
          {
            "icon": "metrics",
            "title": "Coefficients",
            "body": "b1 = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)²  aur  b0 = ȳ − b1·x̄. b1 batata hai ki X ek unit badhne par Y mein kitna change aata hai."
          },
          {
            "icon": "wrench",
            "title": "Cost Function (MSE)",
            "body": "J = (1/n) Σ (yi − ŷi)². Isi ko gradient descent se chhota kiya jaata hai: b ← b − α·∂J/∂b (α = learning rate)."
          },
          {
            "icon": "speed",
            "title": "Multiple Regression",
            "body": "Kai features ek saath: Y = b0 + b1x1 + b2x2 + … + bnxn — matrix form Y = Xθ, solution θ = (XᵀX)⁻¹XᵀY."
          },
          {
            "icon": "ruler",
            "title": "Evaluation",
            "body": "**R²** = 1 − SSres/SStot (kitna variance explain hua), **adjusted R²** (features ka penalty), **RMSE** (same unit as Y)."
          },
          {
            "icon": "warn",
            "title": "Kab Fail Hota Hai",
            "body": "Non-linear data, outliers (squared error se inflate), multicollinearity (x1 aur x2 correlated), heteroscedasticity, missing key variable."
          }
        ]
      },
      {
        "type": "points",
        "title": "OLS Calculation — Chhota Numeric Example",
        "kicker": "Solved Example",
        "points": [
          "**Data:** X = 1, 2, 3, 4 aur Y = 2, 4, 5, 4. Toh x̄ = 2.5, ȳ = 3.75.",
          "**Step 1 — Σ(x − x̄)(y − ȳ):** (−1.5)(−1.75) + (−0.5)(0.25) + (0.5)(1.25) + (1.5)(0.25) = 2.625 − 0.125 + 0.625 + 0.375 = **3.5**.",
          "**Step 2 — Σ(x − x̄)²:** 2.25 + 0.25 + 0.25 + 2.25 = **5.0**.",
          "**Step 3 — slope:** b1 = 3.5 / 5 = **0.7**.",
          "**Step 4 — intercept:** b0 = ȳ − b1·x̄ = 3.75 − 0.7(2.5) = **2.0**.",
          "**Model:** Y = 2 + 0.7X → X = 5 hone par prediction = 2 + 3.5 = **5.5**.",
          "**Interpretation:** X ek unit badhne par Y average 0.7 unit badhta hai. Isi tarah exam mein table banake b1, b0 nikaalna full marks ka answer hai."
        ]
      },
      {
        "type": "comparison",
        "title": "Linear vs Logistic Regression",
        "kicker": "Comparison",
        "columns": ["Linear Regression", "Logistic Regression"],
        "rows": [
          {
            "label": "Output",
            "values": ["continuous number (any range)", "probability 0–1, phir class"]
          },
          {
            "label": "Function",
            "values": ["straight line Y = b0 + b1X", "S-curve p = 1/(1+e^−z)"]
          },
          {
            "label": "Used for",
            "values": ["regression (price, sales)", "classification (spam, disease)"]
          },
          {
            "label": "Cost function",
            "values": ["MSE / least squares", "log loss (binary cross-entropy)"]
          },
          {
            "label": "Estimation",
            "values": ["closed form OLS / gradient descent", "maximum likelihood / gradient descent"]
          },
          {
            "label": "Metrics",
            "values": ["R², MAE, RMSE", "accuracy, precision, recall, F1, ROC-AUC"]
          },
          {
            "label": "Outliers",
            "values": ["bahut sensitive (squared error)", "kam sensitive, but extreme values still affect"]
          },
          {
            "label": "Example",
            "values": ["salary from experience", "loan default yes/no"]
          }
        ],
        "columnColors": ["#00ff88", "#00d4ff"]
      },
      {
        "type": "points",
        "title": "Assumptions Aur Limitations",
        "kicker": "Exam Points",
        "points": [
          "**Linearity** — X aur Y ka relation linear hona chahiye; warna polynomial ya transformation lagao.",
          "**Independence** — observations independent hon (time-series mein autocorrelation check karo).",
          "**Homoscedasticity** — residuals ka spread har X par same ho; fan-shape dikhe to problem.",
          "**Normality of residuals** — errors roughly normal, isse confidence interval sahi rehta hai.",
          "**No multicollinearity** — features aapas mein strongly correlated na hon (VIF > 5–10 = problem).",
          "**Outliers** — ek bada outlier poori line kharab kar deta hai kyunki error square hota hai.",
          "**Classification ke liye kyun nahi:** linear regression 1.7 ya −0.4 jaisi value de sakta hai, jo probability nahi hoti — isliye class prediction ke liye **logistic regression** use karte hain."
        ]
      },
      {
        "type": "diagram",
        "title": "Linear Regression",
        "kicker": "Diagram",
        "diagram": "ds3-linear-reg",
        "caption": "Best-fit line, residuals aur slope/intercept ka matlab"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Model:** Y = b0 + b1X (multiple mein kai X). b1 = slope, b0 = intercept.",
          "**Training:** OLS — squared residuals ka sum minimise; b1 = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)², b0 = ȳ − b1x̄.",
          "**Cost:** MSE; optimisation gradient descent se bhi ho sakti hai.",
          "**Metrics:** R², adjusted R², MAE, MSE, RMSE — accuracy nahi.",
          "**Assumptions:** linearity, independence, homoscedasticity, normal residuals, no multicollinearity.",
          "**Exam line:** \"Linear regression continuous value predict karta hai; classification ke liye logistic regression use hoti hai.\""
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is linear regression? Explain the least-squares method with an example.",
        "answer": "**Definition:** Linear regression ek supervised algorithm hai jo input X aur continuous output Y ke beech linear relationship ko fit karta hai — **Y = b0 + b1X** (multiple: Y = b0 + b1X1 + … + bnXn). b1 = slope, b0 = intercept.\n\n**Least-squares (OLS):** Aise b0, b1 choose karte hain jisse residuals (yi − ŷi) ke squares ka sum minimum ho: **J = Σ(yi − ŷi)²**. Formulae: b1 = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)², b0 = ȳ − b1x̄. Squared error lene se positive aur negative errors cancel nahi hote aur badi galti par zyada penalty lagti hai.\n\n**Example:** X = 1, 2, 3, 4; Y = 2, 4, 5, 4 → x̄ = 2.5, ȳ = 3.75.\n- Σ(x−x̄)(y−ȳ) = 3.5, Σ(x−x̄)² = 5.0 → **b1 = 0.7**.\n- b0 = 3.75 − 0.7(2.5) = **2.0**.\n- Model: **Y = 2 + 0.7X**; X = 5 par prediction = 5.5.\n\n**Diagram:** Refer to Linear Regression diagram."
      },
      {
        "question": "State the assumptions of linear regression and explain how the model is evaluated.",
        "answer": "**Assumptions:**\n1. **Linearity** — X–Y relation linear hai.\n2. **Independence of errors** — observations independent (no autocorrelation).\n3. **Homoscedasticity** — residuals ka variance constant.\n4. **Normality of residuals** — errors ~ N(0, σ²).\n5. **No multicollinearity** — features independent (VIF < 5–10).\n6. **No influential outliers** — squared error se line bigad jaati hai.\n\n**Evaluation metrics:**\n| Metric | Formula | Matlab |\n|---|---|---|\n| MAE | (1/n)Σ yi − ŷi | average absolute error, same unit |\n| MSE | (1/n)Σ(yi − ŷi)² | squared error, outliers par zyada penalty |\n| RMSE | √MSE | error same unit mein, interpretable |\n| R² | 1 − SSres/SStot | 0–1, kitna variance explain hua |\n| Adjusted R² | 1 − (1−R²)(n−1)/(n−p−1) | useless features ka penalty |\n\n**Diagnostics:** residual plot (random scatter chahiye), Q-Q plot (normality), VIF (collinearity), Durbin-Watson (autocorrelation).\n\n**Diagram:** Refer to Linear Regression diagram."
      },
      {
        "question": "Differentiate between linear regression and logistic regression. Why is logistic regression preferred for classification?",
        "answer": "| Point | Linear Regression | Logistic Regression |\n|---|---|---|\n| Output | continuous value (any range) | probability 0–1 → class |\n| Function | straight line | sigmoid S-curve |\n| Task | regression | classification |\n| Cost | MSE / least squares | log loss (cross-entropy) |\n| Estimation | OLS closed form | maximum likelihood |\n| Metrics | R², RMSE, MAE | accuracy, precision, recall, F1, AUC |\n| Example | salary from experience | loan default yes/no |\n\n**Why logistic for classification:**\n1. Linear regression ka output **unbounded** hota hai — 1.8 ya −0.6 de sakta hai, jo probability nahi ho sakti.\n2. Sigmoid function output ko **0–1** mein squeeze karta hai, isliye seedha probability milti hai.\n3. Linear regression ka squared error **outliers** aur extreme classes par bigadta hai; log loss classification ke liye statistically correct hai (maximum likelihood).\n4. Logistic ka decision boundary aur probability threshold (0.5) set karna aasan — business cost ke hisaab se threshold tune kar sakte hain.\n\n**Note:** linear regression classification ke liye use ho sakti hai (score par threshold lagakar), lekin probability calibration aur robustness ke liye logistic hi standard hai.\n\n**Diagram:** Refer to Linear Regression diagram."
      }
    ]
  },
  {
    "id": "logistic-regression",
    "number": "3.4",
    "title": "Logistic Regression",
    "subtitle": "Sigmoid curve, log-odds, log loss aur 0.5 threshold ka poora concept",
    "icon": "forecast",
    "accent": "#ff8800",
    "englishDefinition": "Logistic regression is a supervised classification algorithm that estimates the probability that a record belongs to a class. It computes a linear score z = b0 + b1X1 + ... + bnXn and passes it through the sigmoid (logistic) function p = 1 / (1 + e^-z), which maps any value into the range 0 to 1. The model is equivalent to a linear model on the log-odds: ln(p/(1-p)) = b0 + b1X1 + ... + bnXn. Coefficients are estimated by maximum likelihood, that is by minimising the binary cross-entropy (log loss). A threshold (usually 0.5) converts the probability into a class label. Multinomial logistic regression with the softmax function handles more than two classes.",
    "intro": "Linear regression ne diya score, lekin score ko **probability** banana zaroori hai — kyunki \"credit risk score 3.7\" ka koi matlab nahi, \"default ki probability 0.73\" ka matlab hai. Logistic regression us score ko **S-shaped sigmoid** se 0 se 1 ke beech laa deti hai, aur phir 0.5 se compare karke class de deti hai. Yahi industry ka sabse zyada use hone wala classification model hai — bank, insurance, medical sab isi par chalte hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Logistic Regression Kya Hai",
        "kicker": "Definition",
        "body": "Logistic regression ek **classification** algorithm hai jo class ki **probability** predict karta hai. Pehle linear score banta hai:\n**z = b0 + b1X1 + b2X2 + … + bnXn**\nphir sigmoid function lagta hai:\n**p = 1 / (1 + e^(−z))**\nIska matlab model ka naam \"regression\" hai, kaam **classification**. p ≥ threshold (0.5) → class 1, warna class 0.",
        "body2": "Sigmoid ki khoobi: z = 0 par p = 0.5, z bahut bada → p → 1, z bahut chhota → p → 0. Ek aur roop mein model **log-odds** par linear hai: **ln(p/(1−p)) = b0 + b1X1 + …**, isliye coefficient b1 ka matlab hai \"X1 ek unit badhne par odds e^b1 guna ho jaate hain\" (odds ratio).",
        "chips": ["p = 1/(1+e^−z)", "Sigmoid", "Log-odds", "Threshold 0.5", "Log loss"]
      },
      {
        "type": "cards",
        "title": "Core Concepts",
        "kicker": "Concepts",
        "cards": [
          {
            "icon": "chart",
            "title": "Sigmoid Function",
            "body": "σ(z) = 1/(1+e^−z) — poore number line ko 0–1 mein squeeze karta hai. z=0 → 0.5, z=2 → 0.88, z=−2 → 0.12."
          },
          {
            "icon": "metrics",
            "title": "Log-Odds (Logit)",
            "body": "ln(p/(1−p)) = z. Odds = p/(1−p) — \"favourable vs unfavourable\" ka ratio. e^b1 = odds ratio."
          },
          {
            "icon": "wrench",
            "title": "Log Loss / Cross-Entropy",
            "body": "J = −(1/n) Σ [y·log p + (1−y)·log(1−p)]. Galat confident prediction (p=0.99 actual 0) par penalty bahut badi."
          },
          {
            "icon": "target",
            "title": "Decision Threshold",
            "body": "p ≥ 0.5 → class 1. Threshold business ke hisaab se badlo — cancer screening mein 0.3 (recall bachao), spam mein 0.7 (precision bachao)."
          },
          {
            "icon": "layers",
            "title": "Multi-class Version",
            "body": "Softmax regression: k classes ke liye alag scores → softmax se probability distribution. Binary ke liye one-vs-rest bhi chalta hai."
          },
          {
            "icon": "shield",
            "title": "Regularisation",
            "body": "L2 (Ridge) coefficients ko chhota rakhta hai, L1 (Lasso) features ko zero karta hai — overfitting rokne ke liye C / λ tune karo."
          }
        ]
      },
      {
        "type": "points",
        "title": "Sigmoid Values Aur Ek Solved Example",
        "kicker": "Numbers",
        "points": [
          "**Sigmoid ready reckoner:** z = −3 → p = 0.047 · z = −2 → 0.119 · z = −1 → 0.269 · z = 0 → **0.500** · z = 1 → 0.731 · z = 2 → 0.881 · z = 3 → 0.953.",
          "**Model:** default risk = −3 + 0.05 × income(in thousand). Income 80 (80,000) par z = −3 + 4 = 1.",
          "**Step 1:** p = 1/(1+e^−1) = 1/(1+0.368) = **0.731**.",
          "**Step 2:** threshold 0.5 se compare → 0.731 > 0.5 → predict **default = Yes**, lekin \"73% probability\" bolna zyada useful hai decision ke liye.",
          "**Odds interpretation:** income ka b1 = 0.05 → e^0.05 ≈ 1.051, yaani har 1000 extra income par default ke odds **5.1%** badhte hain.",
          "**Threshold tuning:** agar bank ko false-negative mehnga lage (default chhoot jaye), threshold 0.5 se 0.35 kar do — recall badhega, precision thoda girega."
        ]
      },
      {
        "type": "comparison",
        "title": "Linear vs Logistic Regression",
        "kicker": "Comparison",
        "columns": ["Linear Regression", "Logistic Regression"],
        "rows": [
          {
            "label": "Problem type",
            "values": ["regression — continuous Y", "classification — discrete class"]
          },
          {
            "label": "Output",
            "values": ["koi bhi real number", "probability between 0 and 1"]
          },
          {
            "label": "Equation",
            "values": ["Y = b0 + b1X", "p = 1/(1+e^−(b0+b1X))"]
          },
          {
            "label": "Curve",
            "values": ["straight line", "S-shaped sigmoid"]
          },
          {
            "label": "Loss",
            "values": ["MSE (least squares)", "log loss / binary cross-entropy"]
          },
          {
            "label": "Estimation",
            "values": ["OLS closed form", "maximum likelihood"]
          },
          {
            "label": "Metrics",
            "values": ["R², RMSE, MAE", "accuracy, precision, recall, F1, AUC"]
          },
          {
            "label": "Example",
            "values": ["price of a flat", "flat will be sold or not"]
          }
        ],
        "columnColors": ["#00ff88", "#ff8800"]
      },
      {
        "type": "points",
        "title": "Pros, Cons Aur Exam Points",
        "kicker": "Analysis",
        "points": [
          "**Pros:** fast aur simple, probabilistic output, interpretable coefficients (odds ratio), regularisation se overfitting control, linear decision boundary par bahut effective, baseline model ke roop mein standard.",
          "**Cons:** **linear decision boundary** hi bana sakta hai (XOR jaisa data fail), non-linear relation ke liye feature engineering/polynomial chahiye, outliers aur multicollinearity se disturb hota hai, class imbalance par recall gir jaata hai.",
          "**Multi-class:** softmax regression (multinomial) — k classes ke scores z1…zk par softmax; ya one-vs-rest se k binary models.",
          "**Class imbalance:** class weights, resampling (SMOTE), ya threshold tuning — accuracy par bharosa mat karo.",
          "**Feature scaling** zaroori hai (gradient descent jaldi converge karega).",
          "**Exam table:** linear → MSE + R²; logistic → log loss + precision/recall/AUC. Ye line likhne se examiner ko clarity mil jaati hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Logistic Regression",
        "kicker": "Diagram",
        "diagram": "ds3-logistic-reg",
        "caption": "Linear score → sigmoid → probability → 0.5 threshold → class label"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Equation:** z = b0 + b1X1 + …; **p = 1/(1+e^−z)**; p ≥ 0.5 → class 1.",
          "**Log-odds form:** ln(p/(1−p)) = z, isliye e^b1 = odds ratio.",
          "**Loss:** log loss / binary cross-entropy (maximum likelihood se aata hai).",
          "**Multi-class:** softmax regression ya one-vs-rest.",
          "**Use:** spam, fraud, disease, churn — jahan probability + interpretability chahiye.",
          "**Limit:** sirf linear decision boundary; non-linear data par tree/SVM/KNN better."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain logistic regression with its sigmoid function and log-loss. Why is it used for classification?",
        "answer": "**Logistic Regression:** classification algorithm jo class ki **probability** deta hai. Pehle linear score banta hai **z = b0 + b1X1 + … + bnXn**, phir sigmoid se probability:\n**p = 1 / (1 + e^−z)**\n\n**Sigmoid properties:** z = 0 → p = 0.5; z → +∞ → p → 1; z → −∞ → p → 0. Isliye output always 0–1 ke beech rehta hai. Threshold (usually 0.5) se class milti hai.\n\n**Log-odds form:** ln(p/(1−p)) = b0 + b1X1 + … yaani model **log-odds par linear** hai; e^b1 odds ratio batata hai.\n\n**Log loss (binary cross-entropy):** J = −(1/n) Σ [y log p + (1−y) log(1−p)]. Ye maximum-likelihood estimation se nikalta hai; confident galat prediction (p = 0.99, actual 0) par penalty bahut badi hoti hai.\n\n**Classification ke liye kyun:** (i) output bounded probability hoti hai, (ii) threshold business cost ke hisaab se tune ho sakta hai, (iii) coefficients interpretable hain, (iv) linear separable data par robust aur fast.\n\n**Diagram:** Refer to Logistic Regression diagram."
      },
      {
        "question": "Write the logistic regression equation. Explain sigmoid curve and threshold with a solved example.",
        "answer": "**Equations:**\n- Linear score: z = b0 + b1X1 + b2X2 + … + bnXn\n- Probability: **p = 1/(1+e^−z)**\n- Log-odds: ln(p/(1−p)) = z\n- Decision: ŷ = 1 if p ≥ 0.5 else 0\n\n**Sigmoid curve:** S-shaped, monotonic, output 0–1. z = −3 → 0.047, z = −1 → 0.269, z = 0 → 0.500, z = 1 → 0.731, z = 3 → 0.953. Curve linear score ko probability mein convert karta hai.\n\n**Solved example:** default = −3 + 0.05 × income (in thousands). Income = 80 → z = −3 + 4 = 1 → p = 1/(1+e^−1) = 0.731. Kyunki 0.731 > 0.5, model bolega \"default hoga\", aur 73% probability ke saath.\n\n**Threshold effect:** 0.5 se 0.3 karne par zyada cases \"positive\" milenge (recall ↑, precision ↓) — screening jaisi situation ke liye theek; 0.7 karne par sirf high-confidence cases positive honge (precision ↑, recall ↓).\n\n**Diagram:** Refer to Logistic Regression diagram."
      },
      {
        "question": "Discuss the assumptions, advantages and limitations of logistic regression.",
        "answer": "**Assumptions:**\n1. Dependent variable **binary** (0/1) hai (multi-class ke liye softmax).\n2. Observations independent hain.\n3. Log-odds aur predictors ke beech **linear** relation hai.\n4. **No multicollinearity** features mein.\n5. Large sample size (parameters stable estimate ho saken).\n\n**Advantages:** simple aur fast; probability output; coefficients interpretable (odds ratio); regularisation (L1/L2) available; overfitting kam; baseline model ke liye best; multi-class (softmax) aur one-vs-rest easy.\n\n**Limitations:** sirf **linear decision boundary** — XOR / circular data par fail; non-linear relation ke liye feature engineering chahiye; outliers aur multicollinearity se affect hota hai; class imbalance par recall gir jaata hai; feature scaling zaroori.\n\n**Improvements:** polynomial features, interaction terms, class weights / SMOTE, threshold tuning, L1/L2 regularisation, ya non-linear model (tree, SVM, neural net).\n\n**Diagram:** Refer to Logistic Regression diagram."
      }
    ]
  },
  {
    "id": "naive-bayes",
    "number": "3.5",
    "title": "Naive Bayes Classifier",
    "subtitle": "Bayes theorem, conditional independence assumption aur spam filtering ka classic example",
    "icon": "zap",
    "accent": "#aa00ff",
    "englishDefinition": "The Naive Bayes classifier is a probabilistic supervised classifier based on Bayes theorem: P(C|X) = P(X|C) · P(C) / P(X). It assumes that the features are conditionally independent given the class, which simplifies the likelihood to a product P(X|C) = P(x1|C) · P(x2|C) · ... · P(xn|C). The class with the maximum posterior probability is predicted. The assumption is \"naive\" because real features are usually correlated, yet the classifier works very well for text classification. Variants are Gaussian (continuous features), Multinomial (word/token counts) and Bernoulli (binary presence). Laplace (add-one) smoothing handles the zero-frequency problem.",
    "intro": "Naive Bayes ka idea bilkul simple hai: **jo class pehle se zyada common hai aur jiske saath ye features zyada dikhte hain, wahi class sabse zyada possible hai.** Formula Bayes theorem se aata hai. Iska jadoo ye hai ki kai features hone par bhi calculation chhoti rehti hai — kyunki model maan leta hai ki features ek doosre se independent hain, isliye sab probabilities ko bas **multiply** kar dete hain. Spam filter isi ka sabse famous example hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Naive Bayes Kya Hai",
        "kicker": "Definition",
        "body": "Naive Bayes ek **probabilistic classifier** hai jo Bayes theorem par chalta hai:\n**P(C|X) = P(X|C) · P(C) / P(X)**\nYahan P(C) = class ka prior (pehle se probability), P(X|C) = likelihood (us class mein ye features kitne common hain), P(C|X) = posterior (jo humein chahiye). Model har class ke liye posterior nikalta hai aur **sabse zyada probability wali class** choose karta hai (maximum a posteriori rule).",
        "body2": "\"Naive\" naam is assumption se aaya hai ki features **conditionally independent** hain: **P(X|C) = P(x1|C) × P(x2|C) × … × P(xn|C)**. Real life mein ye assumption galat hoti hai (words aapas mein related hote hain), phir bhi text classification mein result bahut achha aata hai. P(X) sab classes ke liye same hota hai, isliye comparison ke liye sirf **numerator** kaafi hai.",
        "chips": ["Bayes theorem", "Independent features", "Prior × Likelihood", "MAP rule", "Fast & simple"]
      },
      {
        "type": "cards",
        "title": "Teen Variants Aur Smoothing",
        "kicker": "Types",
        "cards": [
          {
            "icon": "doc",
            "title": "Gaussian NB",
            "body": "Continuous features ke liye — har feature ko class-wise normal distribution maanta hai (mean, σ). Jaise height, income, temperature."
          },
          {
            "icon": "table",
            "title": "Multinomial NB",
            "body": "Count data ke liye — word frequencies, TF-IDF. Text classification ka sabse popular variant."
          },
          {
            "icon": "check",
            "title": "Bernoulli NB",
            "body": "Binary presence/absence ke liye — \"word present hai ya nahi\", click hua ya nahi."
          },
          {
            "icon": "shield",
            "title": "Laplace Smoothing",
            "body": "Agar kisi word ki count 0 ho to poori probability 0 ho jaati hai. Isliye (count + 1)/(total + k) — add-one smoothing."
          },
          {
            "icon": "speed",
            "title": "Training & Prediction",
            "body": "Training = sirf counts/means nikalna (bahut fast). Prediction = multiply karke compare — koi iterative optimisation nahi."
          },
          {
            "icon": "warn",
            "title": "Zero-Frequency Problem",
            "body": "Ek bhi unseen feature (jaise naya word) likelihood 0 bana deta hai; smoothing isi ko theek karta hai."
          }
        ]
      },
      {
        "type": "points",
        "title": "Spam Filter — Step by Step Calculation",
        "kicker": "Solved Example",
        "points": [
          "**Setup:** training data se P(spam) = 0.4, P(ham) = 0.6. Mail mein word \"free\" aaya hai.",
          "**Step 1 — likelihoods:** P(\"free\" | spam) = 0.6 aur P(\"free\" | ham) = 0.05.",
          "**Step 2 — numerator (prior × likelihood):** spam = 0.4 × 0.6 = **0.24**; ham = 0.6 × 0.05 = **0.03**.",
          "**Step 3 — normalise (P(X) se divide):** total = 0.27 → P(spam|free) = 0.24/0.27 = **0.889**, P(ham|free) = 0.111.",
          "**Step 4 — decision:** 0.889 > 0.111 → mail **spam** hai.",
          "**Kai words ho to:** \"free\" aur \"offer\" dono ke likelihood multiply karo — P(free|spam) × P(offer|spam) × P(spam), phir normalise. Isi multiplication ki wajah se training super fast hai.",
          "**Log space:** chhoti probabilities multiply karne se underflow ho jaata hai, isliye practically **log probabilities ka sum** karte hain: log P(C) + Σ log P(xi|C)."
        ]
      },
      {
        "type": "comparison",
        "title": "Naive Bayes vs Logistic Regression",
        "kicker": "Comparison",
        "columns": ["Naive Bayes", "Logistic Regression"],
        "rows": [
          {
            "label": "Nature",
            "values": ["generative model — P(X|C) aur P(C) model karta hai", "discriminative model — seedha P(C|X)"]
          },
          {
            "label": "Training",
            "values": ["sirf counting / frequency", "optimisation (MLE / gradient descent)"]
          },
          {
            "label": "Data need",
            "values": ["bahut kam data par bhi chalta hai", "relatively zyada data"]
          },
          {
            "label": "Speed",
            "values": ["bahut fast, incremental learning easy", "moderate, retrain karna padta hai"]
          },
          {
            "label": "Feature relation",
            "values": ["independence maan leta hai (galat ho sakta hai)", "correlation handle kar leta hai"]
          },
          {
            "label": "Best for",
            "values": ["text, spam, sentiment, document classification", "jab features correlated hon aur calibration chahiye"]
          },
          {
            "label": "Weakness",
            "values": ["probabilities poorly calibrated", "linear boundary only"]
          }
        ],
        "columnColors": ["#aa00ff", "#ff8800"]
      },
      {
        "type": "points",
        "title": "Pros, Cons Aur Exam Points",
        "kicker": "Analysis",
        "points": [
          "**Pros:** bahut fast train aur predict, kam data par bhi kaam, high-dimensional text ke liye perfect, multi-class natural, numerical stability ke liye log-sum, incremental updates easy.",
          "**Cons:** **conditional independence** assumption real data mein galat, correlated features se probability galat, zero-frequency problem (smoothing se fix), probability values calibrated nahi hoti.",
          "**Applications:** spam filtering, sentiment analysis, news categorisation, language detection, medical diagnosis, recommendation, fraud detection ke baseline.",
          "**Exam line:** \"Naive Bayes Bayes theorem + conditional independence assumption par based probabilistic classifier hai.\""
        ]
      },
      {
        "type": "diagram",
        "title": "Naive Bayes Classifier",
        "kicker": "Diagram",
        "diagram": "ds3-naive-bayes",
        "caption": "Bayes theorem ke teen hisse: prior, likelihood, posterior — aur spam filtering example"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Formula:** P(C|X) = P(X|C)·P(C)/P(X); comparison ke liye denominator chhod do.",
          "**Naive assumption:** features conditionally independent → likelihood ka product.",
          "**Types:** Gaussian (continuous), Multinomial (counts), Bernoulli (binary).",
          "**Smoothing:** Laplace add-one — zero probability se bachne ke liye.",
          "**Spam example:** 0.4×0.6 = 0.24 vs 0.6×0.05 = 0.03 → spam 0.889 probability.",
          "**Pros:** fast, kam data; **cons:** independence assumption, poor calibration."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the Naive Bayes classifier with Bayes theorem. Why is it called naive?",
        "answer": "**Naive Bayes** ek probabilistic classifier hai jo Bayes theorem par based hai:\n**P(C|X) = P(X|C) · P(C) / P(X)**\n\n- **P(C)** = prior — class ki pehle se probability (jaise spam 0.4).\n- **P(X|C)** = likelihood — us class mein features kitne common hain.\n- **P(C|X)** = posterior — features dekhne ke baad class ki probability.\n- Model har class ka posterior nikaal kar **maximum** wala label deta hai (MAP rule).\n\n**Why naive:** model maan leta hai ki features class ke given **conditionally independent** hain, yaani P(X|C) = P(x1|C) × P(x2|C) × … × P(xn|C). Real life mein words aapas mein correlated hote hain (jaise \"credit\" aur \"card\"), isliye ye assumption naive hai — lekin calculation bahut simple ho jaati hai aur text classification mein accuracy phir bhi achhi milti hai.\n\n**Types:** Gaussian (continuous features), Multinomial (word counts), Bernoulli (binary presence). **Smoothing:** Laplace add-one zero frequency se bachata hai.\n\n**Diagram:** Refer to Naive Bayes Classifier diagram."
      },
      {
        "question": "Explain spam filtering using Naive Bayes with a step-by-step calculation.",
        "answer": "**Objective:** mail ko spam ya ham classify karna, features = words ki presence/count.\n\n**Steps:**\n1. **Training:** labelled mails se P(spam), P(ham) aur har word ki class-wise probability nikaalo (Multinomial/Bernoulli NB).\n2. **Prior:** P(spam) = 0.4, P(ham) = 0.6.\n3. **Likelihoods:** P(\"free\" | spam) = 0.6, P(\"free\" | ham) = 0.05.\n4. **Numerator:** spam → 0.4 × 0.6 = 0.24; ham → 0.6 × 0.05 = 0.03.\n5. **Normalise:** total 0.27 → P(spam | free) = 0.889, P(ham | free) = 0.111.\n6. **Decision:** 0.889 > 0.111 → **spam**.\n\n**Multiple words:** P(spam) × Π P(word_i | spam) vs P(ham) × Π P(word_i | ham); practically log probabilities ka sum lete hain (underflow se bachne ke liye).\n\n**Handling zero count:** agar koi word training mein spam ke saath kabhi nahi aaya, Laplace smoothing (count + 1)/(total + vocabulary size) lagao — warna poori probability 0 ho jaati.\n\n**Diagram:** Refer to Naive Bayes Classifier diagram."
      },
      {
        "question": "Discuss the advantages and limitations of the Naive Bayes classifier.",
        "answer": "**Advantages:**\n1. **Very fast** — training sirf frequency counting, prediction sirf multiplication.\n2. **Works with small data** aur high-dimensional features (text ke 10,000 words).\n3. **Multi-class** ke liye seedha kaam karta hai, no one-vs-rest needed.\n4. **Incremental learning** easy — naye documents se counts update kar do.\n5. Text classification (spam, sentiment, language detection) mein strong baseline.\n\n**Limitations:**\n1. **Conditional independence assumption** realistic nahi — correlated features par probability galat.\n2. **Zero-frequency problem** — unseen feature se probability 0; smoothing zaroori.\n3. Probabilities **poorly calibrated** (0.99 bol dega jab actual 0.7 ho) — ranking theek, value galat.\n4. Continuous features ke liye Gaussian assumption often violated.\n5. Features ke interactions/combinations capture nahi kar paata.\n\n**Applications:** spam filter, news categorisation, sentiment analysis, medical diagnosis, document tagging, fraud baseline.\n\n**Diagram:** Refer to Naive Bayes Classifier diagram."
      }
    ]
  },
  {
    "id": "k-nearest-neighbor",
    "number": "3.6",
    "title": "K-Nearest Neighbor (KNN)",
    "subtitle": "Lazy learning, distance measures, k ka choice aur curse of dimensionality",
    "icon": "scatter",
    "accent": "#00d4ff",
    "englishDefinition": "K-Nearest Neighbor is a non-parametric, instance-based (lazy) supervised algorithm. It stores the whole training set and, to classify a new record, computes its distance to every training point, selects the K closest neighbours and assigns the majority class among them (for regression it averages their values). Common distance measures are Euclidean, Manhattan and Minkowski; for text, Hamming or cosine distance. K is a hyperparameter chosen by cross-validation and is usually odd to avoid ties. Because distances are used, features must be scaled. Small K gives a flexible boundary and overfits; large K smooths the boundary and underfits; with very high dimensions distances lose meaning, which is known as the curse of dimensionality.",
    "intro": "KNN ka funda ek line mein: **\"batao tumhare kareeb kaun rehta hai, main bata dunga tum kaun ho.\"** Ek naya point aaya, uske sabse kareeb ke k (jaise 5) purane points dekho, aur jinme zyada hain wahi class de do. Training mein kuch \"seekha\" nahi jaata — poora training data yaad rakha jaata hai, isliye ise **lazy learner** kehte hain. Sabse important cheez hai **distance** aur **k** ki value.",
    "sections": [
      {
        "type": "definition",
        "title": "KNN Kya Hai",
        "kicker": "Definition",
        "body": "K-Nearest Neighbor ek **instance-based (lazy) supervised** algorithm hai. Training phase mein model bas data **store** karta hai — koi equation fit nahi hoti. Prediction ke waqt naye point se sabhi training points ki **distance** nikaali jaati hai, **k sabse kareeb** wale neighbours chune jaate hain, aur unme se **majority class** de di jaati hai (regression mein unki values ka average).",
        "body2": "Do cheezein sab kuch decide karti hain: **k ki value** aur **distance metric**. k = 1 par boundary bahut twisted ho jaati hai (overfitting), k bahut bada ho to boundary itni smooth ho jaati hai ki local pattern kho jaata hai (underfitting). Isliye k ko **cross-validation** se choose karte hain, aur tie se bachne ke liye generally **odd** rakhte hain.",
        "chips": ["Lazy learner", "No training phase", "Distance based", "Majority vote", "k by CV"]
      },
      {
        "type": "cards",
        "title": "KNN Ke Building Blocks",
        "kicker": "Concepts",
        "cards": [
          {
            "icon": "ruler",
            "title": "Distance Measures",
            "body": "**Euclidean:** √Σ(xi−yi)² · **Manhattan:** Σ|xi−yi| · **Minkowski:** (Σ|xi−yi|^p)^(1/p) · **Hamming** (text/binary) · **Cosine** (documents)."
          },
          {
            "icon": "target",
            "title": "Choosing k",
            "body": "k chhota → overfit (noise follow), k bada → underfit. Rule of thumb: k ≈ √n, odd number, cross-validation se best k."
          },
          {
            "icon": "check",
            "title": "Voting",
            "body": "**Majority vote** (equal weight) ya **distance-weighted vote** — paas wale neighbour ka vote zyada weight. Regression mein mean."
          },
          {
            "icon": "speed",
            "title": "Scaling Zaroori",
            "body": "Distance par sab features ka barabar asar ho — isliye **min-max / z-score** scaling must. Warna salary (lakhs) age (years) ko dabaa degi."
          },
          {
            "icon": "warn",
            "title": "Curse of Dimensionality",
            "body": "Bahut zyada features par sab points ek doosre se lagbhag same door ho jaate hain → KNN ka matlab khatam. PCA/feature selection karo."
          },
          {
            "icon": "clock",
            "title": "Complexity",
            "body": "Training O(1) (bas store), prediction O(n·d) per query — lakhon rows par slow. KD-tree / Ball-tree / ANN (faiss) se speed up."
          }
        ]
      },
      {
        "type": "points",
        "title": "Kaise Kaam Karta Hai — Step by Step",
        "kicker": "Algorithm",
        "points": [
          "**Step 1 — store:** poora labelled training data memory mein rakho (kisi bhi form mein).",
          "**Step 2 — scale:** train aur test dono ko same scaler se normalise karo (fit sirf train par).",
          "**Step 3 — distance:** naye point x se har training point ki distance nikaalo (Euclidean default).",
          "**Step 4 — sort:** distances ke hisaab se ascending order mein lagao.",
          "**Step 5 — select k:** pehle k points (nearest neighbours) uthao.",
          "**Step 6 — vote:** unke labels ki majority dekho → predicted class. Regression mein unka average.",
          "**Example:** k = 3 aur teen nearest neighbours ki classes [Cat, Cat, Dog] → prediction **Cat** (2 vs 1).",
          "**Distance-weighted version:** agar distances 1, 2, 3 hain to weights 1/1, 1/2, 1/3 = 1.0, 0.5, 0.33 — Cat ko 1.5, Dog ko 0.33 → Cat."
        ]
      },
      {
        "type": "comparison",
        "title": "KNN ke Pros Aur Cons",
        "kicker": "Analysis",
        "columns": ["Advantages", "Limitations"],
        "rows": [
          {
            "label": "Training",
            "values": ["instant — koi training nahi", "prediction slow — har query par poora data scan"]
          },
          {
            "label": "Concept",
            "values": ["bahut intuitive, easy to explain", "koi actual \"model\" ya coefficients nahi"]
          },
          {
            "label": "Boundary",
            "values": ["non-linear boundary naturally handle", "high dimension par fail (curse)"]
          },
          {
            "label": "Data",
            "values": ["naye data ke saath seedha kaam", "memory bahut lagti hai (poora dataset store)"]
          },
          {
            "label": "Noise",
            "values": ["k badhane par noise ka asar kam", "outliers aur irrelevant features se disturb"]
          },
          {
            "label": "Imbalance",
            "values": ["majority class ki taraf jhukav", "minority class ignore ho sakti hai (weighted voting chahiye)"]
          },
          {
            "label": "Tuning",
            "values": ["sirf k aur distance choose karo", "scaling + distance metric + k — teen cheezein tune karni padti hain"]
          }
        ],
        "columnColors": ["#00ff88", "#ff7a90"]
      },
      {
        "type": "points",
        "title": "Exam Points Aur Applications",
        "kicker": "Notes",
        "points": [
          "**k ka effect:** k = 1 → training error 0 lekin test error high (overfit, \"1-NN\"); k = n → sabse common class hi predict (underfit).",
          "**Kab KNN chuno:** chhota/medium dataset, non-linear boundary, interpretability aasan chahiye, labels mehnga hai lekin prediction offline ho sakti hai.",
          "**Kab nahi:** millions of rows, real-time low-latency, high-dimensional sparse data, noisy irrelevant features.",
          "**Applications:** handwritten digit recognition, image retrieval, recommendation (\"same taste wale users\"), credit risk, medical diagnosis, missing value imputation.",
          "**Regression bhi:** KNN regressor = k neighbours ki value ka mean (ya median).",
          "**Leakage:** scaling aur k-selection sirf **training fold** par karo, warna test data ka leakage ho jayega."
        ]
      },
      {
        "type": "diagram",
        "title": "K-Nearest Neighbor",
        "kicker": "Diagram",
        "diagram": "ds3-knn",
        "caption": "Naya point, uska circle of neighbours aur k = 3 vs k = 5 par majority vote"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**KNN = lazy learner:** training nahi, sirf storage; prediction par distance + majority vote.",
          "**Formula:** Euclidean √Σ(xi−yi)²; Manhattan Σ|xi−yi|; Minkowski; cosine text ke liye.",
          "**k choice:** odd, k ≈ √n, cross-validation se; chhota k overfit, bada k underfit.",
          "**Scaling zaroori** — warna bade-range feature dominate karega.",
          "**Curse of dimensionality** — bahut features par distance ka matlab khatam.",
          "**Cost:** predict O(n·d) — bade data ke liye tree-based ya approximate NN."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the K-Nearest Neighbor algorithm with its steps and distance measures.",
        "answer": "**Definition:** KNN ek non-parametric, instance-based (lazy) supervised algorithm hai. Training mein poora dataset store hota hai; prediction ke waqt naye point ke **k nearest neighbours** ki majority class li jaati hai (regression mein average).\n\n**Steps:**\n1. Training data ko store karo (scaled form mein).\n2. Naye point se har training point ki distance nikaalo.\n3. Distances sort karo aur **k** sabse chhote choose karo.\n4. Un neighbours ke labels ki **majority** lo (ya distance-weighted vote).\n5. Label assign karo; regression mein unki values ka mean.\n\n**Distance measures:**\n- **Euclidean:** d = √Σ(xi − yi)² — continuous data, default.\n- **Manhattan:** d = Σ|xi − yi| — robust, grid-like data.\n- **Minkowski:** (Σ|xi − yi|^p)^(1/p) — p = 1 Manhattan, p = 2 Euclidean.\n- **Hamming:** different positions count — binary/text.\n- **Cosine:** 1 − cos θ — document similarity.\n\n**Example:** k = 3, neighbours Cat, Cat, Dog → Cat.\n\n**Diagram:** Refer to K-Nearest Neighbor diagram."
      },
      {
        "question": "How is the value of k chosen in KNN? Explain the effect of small and large k.",
        "answer": "**k choose karne ka tareeka:**\n1. **Cross-validation** — k = 1, 3, 5, 7 … try karo aur validation error minimum wala chuno.\n2. **Odd k** rakho taaki binary classes mein tie na ho.\n3. Rule of thumb **k ≈ √n** (n = training samples).\n4. Domain ke hisaab se — noisy data par thoda bada k better.\n\n**Effect of k:**\n| k | Boundary | Result |\n|---|---|---|\n| k = 1 | bahut twisted, har point apna | training error 0, **overfitting**, noise follow |\n| k = 3–7 | smooth but local | generally best bias-variance balance |\n| k bahut bada | bahut smooth, almost global | **underfitting**, minority class dab jaati hai |\n| k = n | poora dataset | sabse zyada common class predict |\n\n**Bias-variance:** chhota k → low bias, high variance; bada k → high bias, low variance. Error curve U-shaped hoti hai, minimum par best k.\n\n**Diagram:** Refer to K-Nearest Neighbor diagram."
      },
      {
        "question": "Discuss the advantages, limitations and applications of KNN. What is the curse of dimensionality?",
        "answer": "**Advantages:** simple aur intuitive; koi training phase nahi (lazy); non-linear decision boundary naturally handle karta hai; multi-class seedha; naye data ke saath adapt karta hai; k badhakar noise kam kar sakte hain.\n\n**Limitations:** prediction expensive (O(n·d) per query); poora dataset memory mein; **feature scaling mandatory**; irrelevant features disturb karte hain; high dimension par fail; class imbalance par majority class ki taraf jhukav; k aur distance metric tune karne padte hain.\n\n**Curse of dimensionality:** jaise-jaise features (dimensions) badhte hain, data space itna bada ho jaata hai ki sab points ek doosre se lagbhag **barabar door** ho jaate hain. Tab \"nearest\" ka matlab hi nahi bachta, distance concentration ki wajah se KNN ka performance gira jaata hai. Iska ilaaj: **feature selection** (sirf relevant features), **PCA**/dimensionality reduction, ya distance metric learning.\n\n**Applications:** handwritten digit recognition, image retrieval, recommendation systems, credit risk, medical diagnosis, missing-value imputation, anomaly detection.\n\n**Diagram:** Refer to K-Nearest Neighbor diagram."
      }
    ]
  },
  {
    "id": "decision-tree",
    "number": "3.7",
    "title": "Decision Trees",
    "subtitle": "Entropy, information gain, Gini index, pruning aur overfitting",
    "icon": "flow",
    "accent": "#ff0080",
    "englishDefinition": "A decision tree is a supervised classifier that recursively partitions the feature space using a series of if-then tests on attributes. It has a root node, internal nodes (each testing one attribute), branches (test outcomes) and leaf nodes (class labels). At every step the algorithm chooses the attribute that best separates the classes, measured by information gain (entropy reduction), gain ratio or the Gini index. ID3 uses information gain, C4.5 uses gain ratio and handles continuous attributes, and CART uses the Gini index and builds binary trees. Growing stops on purity, maximum depth or minimum samples, and pruning (pre or post) reduces overfitting.",
    "intro": "Decision tree bilkul **\"20 questions\" game** jaisa hai — pehle sabse informative sawaal poocho (\"Outlook kaisa hai?\"), phir har branch mein agla sawaal (\"Humidity kitni hai?\"), aur end mein leaf par class mil jaati hai. Model khud decide karta hai ki **kaunsa sawaal pehle** poochna hai — wo attribute choose karta hai jo classes ko sabse zyada saaf-saaf alag kar de. Yahi measurement **entropy, information gain aur Gini** ke naam se padhi jaati hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Decision Tree Kya Hai",
        "kicker": "Definition",
        "body": "Decision tree ek supervised classifier hai jo data ko **recursively split** karta hai — har node par ek attribute ka test hota hai, har branch ek outcome, aur har **leaf ek class label**. Root node se start hoke test ke answers follow karte hue leaf tak pahunchte hain, wahi prediction hoti hai.",
        "body2": "Node ke chaar hisse: **root** (pehla best split), **internal node** (attribute test), **branch** (test ka result), **leaf** (final class). Split choose karne ke liye teen popular measures hain — **entropy + information gain** (ID3), **gain ratio** (C4.5), **Gini index** (CART). Tree ko interpret karna bahut aasan hai, isliye banking aur medical rule-based decisions mein bahut use hota hai.",
        "chips": ["Root / node / leaf", "Recursive split", "Entropy", "Information gain", "Gini index"]
      },
      {
        "type": "cards",
        "title": "Splitting Ke Measures",
        "kicker": "Concepts",
        "cards": [
          {
            "icon": "metrics",
            "title": "Entropy",
            "body": "H(S) = −Σ pi·log2(pi). 0 = pure node (ek hi class), 1 = 50-50 impure. Class mix jitna kam, entropy utna kam."
          },
          {
            "icon": "target",
            "title": "Information Gain",
            "body": "IG = H(parent) − Σ (|Sv|/|S|)·H(Sv). Jitna zyada gain, utna achha split — ID3 isi ko maximise karta hai."
          },
          {
            "icon": "half",
            "title": "Gini Index",
            "body": "Gini = 1 − Σ pi². 0 = pure. CART binary splits ke liye Gini use karta hai (calculation entropy se sasti)."
          },
          {
            "icon": "layers",
            "title": "Gain Ratio",
            "body": "Gain / SplitInfo — C4.5 ka measure. Bahut zyada values wale attribute (jaise \"ID\") ko penalise karta hai."
          },
          {
            "icon": "warn",
            "title": "Stopping Rules",
            "body": "Node pure ho gaya, max depth aa gaya, min samples split/leaf se kam rah gaye, ya gain ~0 ho gaya — tab ruk jao."
          },
          {
            "icon": "tools",
            "title": "Pruning",
            "body": "**Pre-pruning** (early stop) aur **post-pruning** (pehle poora tree, phir weak branches kaato — cost-complexity). Overfitting kam karta hai."
          }
        ]
      },
      {
        "type": "points",
        "title": "Entropy Aur Information Gain — Solved Example",
        "kicker": "Numbers (Play Tennis)",
        "points": [
          "**Dataset:** 14 rows, 9 \"Yes\" aur 5 \"No\". Parent entropy **H = −(9/14)log2(9/14) − (5/14)log2(5/14) = 0.940**.",
          "**Outlook split:** Sunny 5 rows (2Y, 3N) → H = 0.971 · Overcast 4 rows (4Y) → H = 0 · Rain 5 rows (3Y, 2N) → H = 0.971.",
          "**Weighted child entropy:** (5/14)(0.971) + (4/14)(0) + (5/14)(0.971) = **0.693**.",
          "**Information gain:** IG(Outlook) = 0.940 − 0.693 = **0.247** — isi tarah har attribute ka gain nikaalo.",
          "**Typical result:** Outlook (0.247) > Temperature (0.029) > Humidity (0.151)… isliye **Outlook root** banta hai, phir har branch par next best attribute.",
          "**Gini version:** Gini = 1 − (9/14)² − (5/14)² = 0.459. CART isi ko minimise karke binary splits banata hai."
        ]
      },
      {
        "type": "comparison",
        "title": "Teen Algorithms",
        "kicker": "ID3 vs C4.5 vs CART",
        "columns": ["ID3", "C4.5", "CART"],
        "rows": [
          {
            "label": "Measure",
            "values": ["information gain (entropy)", "gain ratio", "Gini index"]
          },
          {
            "label": "Splits",
            "values": ["multi-way (ek attribute ke sab values)", "multi-way + binary for continuous", "strictly binary"]
          },
          {
            "label": "Continuous data",
            "values": ["nahi", "haan (threshold par split)", "haan"]
          },
          {
            "label": "Missing values",
            "values": ["handle nahi karta", "handle karta hai", "surrogate splits"]
          },
          {
            "label": "Pruning",
            "values": ["nahi", "error-based pruning", "cost-complexity pruning"]
          },
          {
            "label": "Output",
            "values": ["classification", "classification", "classification + regression"]
          },
          {
            "label": "Overfit",
            "values": ["zyada (bias to many values)", "kam", "kam (pruning ke saath)"]
          }
        ],
        "columnColors": ["#00d4ff", "#00ff88", "#ff8800"]
      },
      {
        "type": "points",
        "title": "Pros, Cons Aur Exam Points",
        "kicker": "Analysis",
        "points": [
          "**Pros:** bahut interpretable (rules ban jaate hain), feature scaling ki zaroorat nahi, non-linear aur mixed data handle, feature importance milti hai, categorical + numerical dono, fast prediction.",
          "**Cons:** easily **overfit** (deep tree), unstable (thoda data change → poora tree badal jaata hai), greedy splitting local optimum par ruk jaata hai, multi-valued attributes ki taraf bias, axis-parallel boundary only.",
          "**Fixes:** pruning, max depth, min samples leaf, ensemble (random forest, gradient boosting) — tree single best base learner hai.",
          "**Handling overfitting:** pre-pruning (depth limit), post-pruning (cost complexity α), cross-validation, ensembles.",
          "**Applications:** loan approval rules, medical diagnosis, churn, credit scoring, fraud, customer segmentation.",
          "**Exam line:** \"Decision tree entropy/information gain (ya Gini) se best split choose karke recursively data ko partition karta hai.\""
        ]
      },
      {
        "type": "diagram",
        "title": "Decision Tree",
        "kicker": "Diagram",
        "diagram": "ds3-decision-tree",
        "caption": "Root → internal nodes → branches → leaves, aur entropy ki value har node par"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Structure:** root → internal node (attribute test) → branch → leaf (class).",
          "**Splitting:** entropy H = −Σp log2p; IG = H(parent) − weighted H(children); Gini = 1 − Σp².",
          "**Algorithms:** ID3 (information gain), C4.5 (gain ratio), CART (Gini, binary, regression bhi).",
          "**Overfitting fix:** pre-pruning, post-pruning, depth limit; best solution = random forest.",
          "**Pros/Cons:** interpretable & no scaling **vs** unstable & overfits.",
          "**Numbers:** Play Tennis IG(Outlook) = 0.940 − 0.693 = 0.247."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is a decision tree? Explain its structure and the attribute-selection measures.",
        "answer": "**Definition:** Decision tree ek supervised classifier hai jo data ko recursively split karta hai — har internal node par ek attribute ka test hota hai, branch par outcome, aur leaf par class label.\n\n**Structure:**\n- **Root node** — sabse pehla best split.\n- **Internal nodes** — attribute test (jaise \"Humidity > 70?\").\n- **Branches** — test ke outcomes.\n- **Leaf node** — final class prediction.\n\n**Attribute selection measures:**\n1. **Entropy:** H(S) = −Σ pi log2 pi (0 = pure, 1 = 50-50).\n2. **Information gain:** IG = H(S) − Σ (|Sv|/|S|)·H(Sv); ID3 isko maximise karta hai.\n3. **Gini index:** 1 − Σ pi²; CART isko minimise karta hai.\n4. **Gain ratio:** gain ÷ split information; C4.5 — many-valued attributes ka bias hataata hai.\n\n**Example:** Play Tennis mein H(parent) = 0.940, Outlook split ke baad weighted entropy 0.693 → IG = 0.247 (sabse zyada), isliye Outlook root banta hai.\n\n**Diagram:** Refer to Decision Tree diagram."
      },
      {
        "question": "Explain information gain with a suitable example. How does a decision tree choose the root node?",
        "answer": "**Information gain** batata hai ki kisi attribute par split karne se entropy (impurity) kitni kam hoti hai:\n**IG(S, A) = H(S) − Σ (|Sv| / |S|) · H(Sv)**\n\n**Solved example (Play Tennis, 14 rows — 9 Yes, 5 No):**\n1. Parent: H = −(9/14)log2(9/14) − (5/14)log2(5/14) = **0.940**.\n2. Outlook = Sunny (5 rows, 2Y/3N) → H = 0.971; Overcast (4 rows, 4Y) → H = 0; Rain (5 rows, 3Y/2N) → H = 0.971.\n3. Weighted entropy = (5/14)(0.971) + (4/14)(0) + (5/14)(0.971) = **0.693**.\n4. IG = 0.940 − 0.693 = **0.247**.\n5. Isi tarah Temperature (0.029), Humidity (0.151), Wind (0.048) ka gain nikaalo.\n\n**Root choice:** Sabse **zyada information gain** wala attribute root banta hai (yahan Outlook, 0.247). Phir har branch ke data par yahi process repeat hoti hai — next sabse achha attribute internal node banta hai, jab tak node pure na ho jaaye ya stopping condition na aa jaaye.\n\n**Diagram:** Refer to Decision Tree diagram."
      },
      {
        "question": "How does a decision tree overfit? Explain pruning and the advantages and limitations of decision trees.",
        "answer": "**Overfitting:** Agar tree bahut deep chala jaaye to wo training data ke **noise aur rare cases** tak yaad kar leta hai — training accuracy ~100% par test accuracy gir jaati hai. Iski wajah: koi stopping limit na hona, bahut chhoti leaf nodes, aur multi-valued attributes ki taraf bias.\n\n**Pruning (solution):**\n1. **Pre-pruning** — pehle se rok do: max depth, min samples split/leaf, minimum gain threshold.\n2. **Post-pruning** — poora tree banao, phir weak subtrees ko leaf se replace karo (cost-complexity pruning: R(T) + α|T|, reduced-error pruning: validation error compare karo).\n3. **Ensembles** — random forest, gradient boosting se variance kam hota hai.\n\n**Advantages:** interpretable rules; no feature scaling; categorical + numerical dono; non-linear relation; feature importance; fast prediction.\n\n**Limitations:** unstable (chhota data change → naya tree); overfitting prone; greedy split local optimum; axis-parallel decision boundary only; imbalanced data par bias.\n\n**Diagram:** Refer to Decision Tree diagram."
      }
    ]
  },
  {
    "id": "support-vector-machine",
    "number": "3.8",
    "title": "Support Vector Machine (SVM)",
    "subtitle": "Hyperplane, maximum margin, support vectors, soft margin aur kernel trick",
    "icon": "target",
    "accent": "#00ff88",
    "englishDefinition": "Support Vector Machine is a supervised classifier that finds the optimal hyperplane separating the classes with the maximum margin. The hyperplane is written as w·x + b = 0; the margin is 2/||w||, and the training points lying on the margin boundary are the support vectors. Maximising the margin is equivalent to minimising ||w||²/2, which gives better generalisation. For non-separable data a soft margin is used with slack variables and a regularisation parameter C, minimising the hinge loss. When the data is not linearly separable, the kernel trick maps it implicitly into a higher-dimensional space using a kernel function (linear, polynomial, RBF, sigmoid) without computing the mapping explicitly.",
    "intro": "SVM ka goal ek line (2-D mein), plane (3-D mein) ya generally **hyperplane** aisi dhoondhna hai jo do classes ko alag kare aur us line se **sabse zyada doori (margin)** rakhe. Jo points margin ke bilkul kinare par hote hain wahi **support vectors** hain — poori boundary sirf inhi par depend karti hai. Jab data seedhi line se alag nahi hota to **kernel trick** data ko higher dimension mein bhej deta hai, jahan wo easily alag ho jaata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "SVM Kya Hai",
        "kicker": "Definition",
        "body": "SVM ek supervised classifier hai jo do classes ke beech **maximum-margin hyperplane** dhoondhta hai. Hyperplane ka equation **w·x + b = 0** hota hai; margin **2/||w||** hoti hai. Model margin ko maximise karta hai, yaani **||w||² ko minimise** karta hai, is condition ke saath ki saare points sahi side par hon: **yi(w·xi + b) ≥ 1**.",
        "body2": "Margin ke kinare par jo training points hote hain unhe **support vectors** kehte hain — decision boundary sirf inhi se decide hoti hai, baaki points hataa bhi do to hyperplane nahi badalta. Jab data linearly separable nahi hota to **soft margin** (slack variables + C) use hota hai, aur jab bilkul non-linear ho to **kernel trick** (polynomial, RBF) data ko higher dimension mein le jaata hai.",
        "chips": ["Maximum margin", "w·x + b = 0", "Support vectors", "Soft margin (C)", "Kernel trick"]
      },
      {
        "type": "cards",
        "title": "SVM Ke Core Concepts",
        "kicker": "Concepts",
        "cards": [
          {
            "icon": "target",
            "title": "Hyperplane",
            "body": "Decision boundary: w·x + b = 0. 2-D mein line, 3-D mein plane, usse zyada dimension mein hyperplane."
          },
          {
            "icon": "ruler",
            "title": "Margin",
            "body": "Do support-vector lines ke beech ki doori = 2/||w||. Margin maximise karna = ||w||²/2 minimise karna."
          },
          {
            "icon": "zap",
            "title": "Support Vectors",
            "body": "Margin par baithe points (ya andar ghusey points). Yahi training ka asli \"support\" hain — baaki points irrelevant."
          },
          {
            "icon": "wrench",
            "title": "Soft Margin & C",
            "body": "Real data overlap karta hai — slack ξ allow karo: min ||w||²/2 + C·Σξ. Bada C = strict (overfit risk), chhota C = zyada tolerant."
          },
          {
            "icon": "layers",
            "title": "Kernel Trick",
            "body": "K(xi,xj) = φ(xi)·φ(xj) — mapping compute kiye bina inner product. **Linear, polynomial, RBF (Gaussian), sigmoid**."
          },
          {
            "icon": "metrics",
            "title": "Hinge Loss",
            "body": "max(0, 1 − y·f(x)) — correct aur margin ke andar hone par 0, warna linear penalty. SVM ka training objective isi par based hai."
          }
        ]
      },
      {
        "type": "points",
        "title": "SVM Kaise Kaam Karta Hai — Steps",
        "kicker": "Algorithm",
        "points": [
          "**Step 1 — scale:** features ko standardise karo (SVM distance/margin par chalta hai, isliye scaling must).",
          "**Step 2 — kernel choose:** linear (simple, text), RBF (default, non-linear), polynomial (image), sigmoid.",
          "**Step 3 — optimisation:** quadratic programming se w aur b nikaalo — min ||w||²/2 + C·Σξᵢ subject to yi(w·xi + b) ≥ 1 − ξᵢ.",
          "**Step 4 — support vectors:** jo points margin par ya uske andar hain, sirf wahi final model mein bachte hain.",
          "**Step 5 — predict:** f(x) = sign(w·x + b) — positive side → class +1, negative side → class −1.",
          "**Step 6 — tune:** C (regularisation) aur kernel parameters (γ for RBF, degree for polynomial) grid search + cross-validation se.",
          "**Dual form:** Lagrange multipliers αᵢ ke saath solution f(x) = Σ αᵢ yi K(xᵢ, x) + b — sirf support vectors ke αᵢ non-zero hote hain, isi liye model compact rehta hai."
        ]
      },
      {
        "type": "comparison",
        "title": "Hard Margin vs Soft Margin",
        "kicker": "Comparison",
        "columns": ["Hard Margin", "Soft Margin"],
        "rows": [
          {
            "label": "Data",
            "values": ["linearly separable hona zaroori", "overlap wala data bhi chalega"]
          },
          {
            "label": "Slack (ξ)",
            "values": ["allowed nahi (ξ = 0)", "allowed, C se control"]
          },
          {
            "label": "Objective",
            "values": ["min ||w||²/2", "min ||w||²/2 + C·Σξ"]
          },
          {
            "label": "Overfit risk",
            "values": ["zyada (noise ko bhi fit karega)", "kam, C se balance"]
          },
          {
            "label": "Outliers",
            "values": ["bahut sensitive", "relatively robust"]
          },
          {
            "label": "Practical use",
            "values": ["rare, sirf clean data", "real-world default"]
          }
        ],
        "columnColors": ["#ff7a90", "#00ff88"]
      },
      {
        "type": "points",
        "title": "Pros, Cons Aur Applications",
        "kicker": "Analysis",
        "points": [
          "**Pros:** high-dimensional data par bahut effective (features > samples), margin maximisation se good generalisation, kernel se non-linear boundary, memory efficient (sirf support vectors), outliers ke against robust (soft margin).",
          "**Cons:** large dataset par training slow (O(n²)–O(n³)), scaling zaroori, kernel aur C/γ tuning mushkil, probability output directly nahi (Platt scaling chahiye), interpretability kam, multi-class ke liye OvR/OvO.",
          "**Multi-class:** one-vs-rest (k models) ya one-vs-one (k(k−1)/2 models — libsvm default).",
          "**Applications:** text/document classification, image classification (pre-deep-learning era), face detection, handwriting recognition, bioinformatics (gene expression), anomaly/outlier detection (one-class SVM).",
          "**Exam line:** \"SVM maximum-margin hyperplane dhoondhta hai; non-linear data ke liye kernel trick use karta hai.\""
        ]
      },
      {
        "type": "diagram",
        "title": "Support Vector Machine",
        "kicker": "Diagram",
        "diagram": "ds3-svm",
        "caption": "Maximum margin hyperplane, support vectors aur kernel trick se non-linear separation"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Goal:** maximum margin hyperplane w·x + b = 0; margin = 2/||w||.",
          "**Support vectors:** margin par baithe points — poora model inhi par depend karta hai.",
          "**Objective:** min ||w||²/2 (+ C·Σξ soft margin ke liye); loss = hinge loss.",
          "**Kernel trick:** K(xi,xj) — linear, polynomial, RBF, sigmoid; mapping explicitly compute nahi hoti.",
          "**C:** bada → strict boundary (overfit risk); chhota → tolerant, smooth.",
          "**Pros/Cons:** high-dim mein best **vs** large data par slow + tuning mushkil."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain Support Vector Machine with the concept of hyperplane, margin and support vectors.",
        "answer": "**SVM:** supervised classifier jo do classes ke beech **maximum margin hyperplane** dhoondhta hai.\n\n**Hyperplane:** decision boundary ka equation **w·x + b = 0**. 2-D mein straight line, 3-D mein plane, higher dimension mein hyperplane. Points ek side par class +1, doosri side class −1.\n\n**Margin:** hyperplane se dono classes ke nearest points tak ki doori. Support-vector lines ke beech ki total margin **2/||w||** hoti hai. SVM isi margin ko maximise karta hai (yaani ||w||²/2 minimise). Bada margin = naye points ke liye zyada safety = better generalisation.\n\n**Support vectors:** margin ke kinare par baithe training points. Sirf yahi final decision boundary decide karte hain — baaki points hataa bhi do to hyperplane same rehta hai. Isi liye model compact aur prediction fast hota hai.\n\n**Formulation:** minimise ||w||²/2 subject to yi(w·xi + b) ≥ 1 (hard margin). Overlapping data ke liye slack: min ||w||²/2 + C Σξᵢ (soft margin).\n\n**Diagram:** Refer to Support Vector Machine diagram."
      },
      {
        "question": "What is the kernel trick? Explain linear, polynomial and RBF kernels.",
        "answer": "**Kernel trick:** jab data ko seedhi line se alag nahi kar sakte, tab SVM data ko (implicitly) higher-dimensional space mein map karta hai jahan wo linearly separable ho jaata hai. Kernel function **K(xi, xj) = φ(xi)·φ(xj)** inner product ko seedha compute karta hai — mapping φ explicitly calculate karne ki zaroorat nahi, isliye computation sasti rehti hai.\n\n**Common kernels:**\n| Kernel | Formula | Kab use |\n|---|---|---|\n| Linear | K = xi·xj | data already separable, text/high-dim sparse |\n| Polynomial | K = (γ xi·xj + r)^d | curved boundary, image data |\n| RBF / Gaussian | K = exp(−γ‖xi − xj‖²) | default, non-linear, boundaries infinite-dim |\n| Sigmoid | K = tanh(γ xi·xj + r) | neural-net jaisa behaviour |\n\n**Intuition:** 2-D mein jo circle se separable hai, use 3-D mein (x²+y²) feature add karke ek plane se alag kar sakte hain. Kernel wahi kaam bina extra dimension compute kiye karta hai.\n\n**Tuning:** RBF mein **γ** (chhota = smooth boundary, bada = tight and overfit) aur **C** (regularisation) grid search se choose karte hain.\n\n**Diagram:** Refer to Support Vector Machine diagram."
      },
      {
        "question": "Discuss the advantages and limitations of SVM. How does soft margin handle non-separable data?",
        "answer": "**Non-separable data (soft margin):** real data mein classes overlap karti hain. Hard margin constraint yi(w·xi + b) ≥ 1 sabhi points ke liye satisfy nahi hota, isliye **slack variable ξᵢ ≥ 0** add karte hain: yi(w·xi + b) ≥ 1 − ξᵢ, aur objective ban jaata hai **min ||w||²/2 + C·Σξᵢ**.\n- Bada **C** → slack ki mehngai zyada → kam violations, tight boundary, **overfit risk**.\n- Chhota **C** → zyada violations allowed → smooth boundary, better generalisation.\nLoss form mein ye **hinge loss** max(0, 1 − y·f(x)) hai.\n\n**Advantages:** high-dimensional data par effective; max-margin se good generalisation; kernel se non-linear; memory efficient; robust to outliers (soft margin); theoretically well-founded (VC dimension).\n\n**Limitations:** training large data par slow (O(n²)–O(n³)); feature scaling mandatory; kernel, C aur γ tune karna mushkil; probability output ke liye Platt scaling; interpretability kam; multi-class ke liye OvR/OvO; noise-heavy overlapping data par dusre models better.\n\n**Diagram:** Refer to Support Vector Machine diagram."
      }
    ]
  },
  {
    "id": "confusion-matrix",
    "number": "3.9",
    "title": "Confusion Matrix",
    "subtitle": "TP, FP, FN, TN — classifier ki galtiyon ka poora hisaab",
    "icon": "grid",
    "accent": "#ff8800",
    "englishDefinition": "A confusion matrix is a table that summarises the performance of a classifier by comparing actual and predicted classes. For binary classification it is a 2x2 matrix of True Positive (correctly predicted positive), False Positive (actual negative predicted positive, a Type I error), False Negative (actual positive predicted negative, a Type II error) and True Negative (correctly predicted negative). Every derived metric — accuracy, precision, recall (sensitivity), specificity, F1 score and ROC curves — is computed from these four cells, so the matrix gives a much clearer picture than accuracy alone, especially for imbalanced data. For multi-class problems it becomes a k x k matrix.",
    "intro": "Accuracy ek number deta hai, lekin wo **kaunsi galti hui** ye nahi batata. Confusion matrix ek chhoti 2×2 table hai jo chaar cheezein alag-alag dikhati hai: kitne positive sahi mile (TP), kitne negative ko galti se positive bola (FP), kitne positive chhoot gaye (FN), aur kitne negative sahi pehchane (TN). Cancer screening mein FN (bimari chhoot gayi) aur spam filter mein FP (important mail spam mark ho gaya) — dono ki cost bilkul alag hoti hai, aur yahi farak confusion matrix dikhata hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Confusion Matrix Kya Hai",
        "kicker": "Definition",
        "body": "Confusion matrix ek **2×2 table** hai jo actual aur predicted classes ko compare karti hai. Rows actual class, columns predicted class (ya ulta — convention likhna zaroori hai). Chaar cells:\n**TP** — actual positive, predicted positive (sahi). **FP** — actual negative, predicted positive (Type I error). **FN** — actual positive, predicted negative (Type II error). **TN** — actual negative, predicted negative (sahi).",
        "body2": "Isi ek table se saare metrics nikal jaate hain — **accuracy = (TP+TN)/total**, **precision = TP/(TP+FP)**, **recall = TP/(TP+FN)**, **specificity = TN/(TN+FP)** aur **F1**. Multi-class problem mein matrix **k × k** ban jaati hai — diagonal sahi predictions, baaki cells galtiyan. Exam mein table banao aur values ke saath metric calculate karo — poore marks milte hain.",
        "chips": ["TP · FP · FN · TN", "Type I / II error", "2×2 table", "Sahi galti ka pata", "k×k for multi-class"]
      },
      {
        "type": "comparison",
        "title": "Chaar Cells Ka Matlab",
        "kicker": "Layout",
        "columns": ["Predicted Positive", "Predicted Negative"],
        "rows": [
          {
            "label": "Actual Positive",
            "values": ["**TP** — sahi positive (disease hai, bola hai)", "**FN** — miss (Type II error); recall kam"]
          },
          {
            "label": "Actual Negative",
            "values": ["**FP** — false alarm (Type I error); precision kam", "**TN** — sahi negative"]
          }
        ],
        "columnColors": ["#00ff88", "#ff7a90"]
      },
      {
        "type": "cards",
        "title": "Isse Nikalne Wale Metrics",
        "kicker": "Derived Metrics",
        "cards": [
          {
            "icon": "metrics",
            "title": "Accuracy",
            "body": "(TP + TN) / (TP + TN + FP + FN) — overall sahi %; **imbalanced data par dhokha** de sakti hai."
          },
          {
            "icon": "target",
            "title": "Precision",
            "body": "TP / (TP + FP) — \"positive bola, wo sach mein positive hai?\" FP mehnga ho to important (spam filter)."
          },
          {
            "icon": "check",
            "title": "Recall / Sensitivity",
            "body": "TP / (TP + FN) — \"jo positive the, unme se kitne pakde?\" FN mehnga ho to important (cancer test)."
          },
          {
            "icon": "shield",
            "title": "Specificity",
            "body": "TN / (TN + FP) — healthy logon ko kitna sahi \"negative\" bola. 1 − FPR."
          },
          {
            "icon": "half",
            "title": "F1 Score",
            "body": "2·(P·R)/(P + R) — precision aur recall ka harmonic mean; dono ka balance."
          },
          {
            "icon": "speed",
            "title": "Error Rate",
            "body": "(FP + FN) / total — jitni galtiyan; 1 − accuracy. Type I + Type II ka sum."
          }
        ]
      },
      {
        "type": "points",
        "title": "Solved Example — 100 Patients",
        "kicker": "Numbers",
        "points": [
          "**Model:** disease detect karta hai. Confusion matrix → **TP = 40, FN = 10, FP = 5, TN = 45**.",
          "**Total** = 40 + 10 + 5 + 45 = 100; **actual positive** = 50, **actual negative** = 50.",
          "**Accuracy** = (40 + 45)/100 = **0.85 (85%)**.",
          "**Precision** = 40/(40 + 5) = **0.889** — positive bole gaye 45 mein se 40 sach.",
          "**Recall** = 40/(40 + 10) = **0.80** — asli 50 patients mein se 40 pakde.",
          "**Specificity** = 45/50 = **0.90**; **FPR** = 5/50 = **0.10**.",
          "**F1** = 2(0.889 × 0.80)/(0.889 + 0.80) = **0.842**.",
          "**Interpretation:** 10 patients chhoot gaye (FN) — screening ke liye ye mehnga hai, isliye threshold kam karke recall badhaana chahiye."
        ]
      },
      {
        "type": "points",
        "title": "Type I vs Type II Error Aur Multi-class",
        "kicker": "Exam Points",
        "points": [
          "**Type I error (FP)** = false alarm — healthy ko bimaru bolna, genuine mail ko spam mark karna, genuine transaction ko fraud bolna.",
          "**Type II error (FN)** = miss — bimari chhoot jaana, spam inbox mein aa jaana, fraud pakda na jaana.",
          "**Trade-off:** threshold badhao → FP kam, FN zyada (precision ↑, recall ↓); threshold ghatao → FN kam, FP zyada (recall ↑, precision ↓).",
          "**Multi-class:** k × k matrix; diagonal = correct; per-class precision/recall nikaal kar average (macro / weighted) lete hain.",
          "**Reporting:** hamesha matrix ke saath precision, recall aur F1 likho — sirf accuracy likhna exam mein adhura answer hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Confusion Matrix",
        "kicker": "Diagram",
        "diagram": "ds3-confusion-matrix",
        "caption": "2×2 table, Type I / Type II error aur usse nikalne wale metrics"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Cells:** TP (sahi positive), FP (false alarm), FN (miss), TN (sahi negative).",
          "**Type I = FP; Type II = FN.** Dono ki business cost alag hoti hai.",
          "**Accuracy** = (TP+TN)/total; **Precision** = TP/(TP+FP); **Recall** = TP/(TP+FN); **Specificity** = TN/(TN+FP).",
          "**F1** = 2PR/(P+R) — precision aur recall ka harmonic mean.",
          "**Example:** TP 40, FN 10, FP 5, TN 45 → accuracy 0.85, precision 0.889, recall 0.80, F1 0.842.",
          "**Multi-class:** k × k matrix, diagonal sahi; per-class metrics + macro/weighted average."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is a confusion matrix? Explain TP, FP, FN and TN with an example.",
        "answer": "**Definition:** Confusion matrix ek 2×2 table hai jo classifier ki predictions ko actual labels ke saath compare karti hai. Isse pata chalta hai ki galti **kis taraf** hui — false alarm ya miss.\n\n**Four cells:**\n1. **TP (True Positive)** — actual positive, predicted positive. Sahi detection.\n2. **FP (False Positive)** — actual negative, predicted positive. **Type I error** (false alarm).\n3. **FN (False Negative)** — actual positive, predicted negative. **Type II error** (miss).\n4. **TN (True Negative)** — actual negative, predicted negative. Sahi rejection.\n\n**Example (100 patients):** TP = 40, FN = 10, FP = 5, TN = 45.\n- Accuracy = (40+45)/100 = **0.85**.\n- Precision = 40/45 = **0.889**.\n- Recall = 40/50 = **0.80**.\n- Specificity = 45/50 = **0.90**.\n- F1 = **0.842**.\n\n**Why useful:** accuracy alone 85% batati hai, lekin matrix batati hai ki 10 patients chhoot gaye (FN) aur 5 healthy ko galti se positive bola (FP) — dono ki cost alag hai.\n\n**Diagram:** Refer to Confusion Matrix diagram."
      },
      {
        "question": "Write the formulas of accuracy, precision, recall and specificity and explain them with an example.",
        "answer": "**Formulas:**\n1. **Accuracy** = (TP + TN) / (TP + TN + FP + FN) — total mein se kitne sahi.\n2. **Precision** = TP / (TP + FP) — positive bole gaye records mein se kitne sach mein positive.\n3. **Recall (Sensitivity)** = TP / (TP + FN) — actual positive mein se kitne pakde gaye.\n4. **Specificity** = TN / (TN + FP) — actual negative mein se kitne sahi negative bole gaye.\n5. **F1** = 2 × (Precision × Recall) / (Precision + Recall).\n\n**Example:** TP = 40, FN = 10, FP = 5, TN = 45 (n = 100)\n- Accuracy = 85/100 = **85%**\n- Precision = 40/45 = **0.889**\n- Recall = 40/50 = **0.80**\n- Specificity = 45/50 = **0.90**\n- F1 = 2(0.889×0.80)/(1.689) = **0.842**\n\n**Meaning:** recall 0.80 batata hai ki 20% bimari chhoot rahi hai; precision 0.889 batata hai ki jo \"positive\" bola usme 11% false alarm hai. Dono ko saath dekhna zaroori hai.\n\n**Diagram:** Refer to Confusion Matrix diagram."
      },
      {
        "question": "Explain Type I and Type II errors. How do you interpret a multi-class confusion matrix?",
        "answer": "**Type I error (False Positive):** actual negative ko positive predict karna — false alarm. Examples: healthy patient ko bimaru bolna, genuine mail spam mark karna, genuine transaction fraud mark karna. Cost: customer ka trust, unnecessary tests.\n\n**Type II error (False Negative):** actual positive ko negative predict karna — miss. Examples: cancer chhoot jaana, spam inbox mein aa jaana, fraud pakda na jaana. Cost: bahut zyada (jaan, paisa).\n\n**Trade-off:** threshold ghatao → FN kam, FP zyada (recall ↑); threshold badhao → FP kam, FN zyada (precision ↑). ROC curve isi trade-off ka graph hai.\n\n**Multi-class confusion matrix (k × k):**\n- Rows = actual class, columns = predicted class.\n- **Diagonal** = sahi predictions (TP har class ka).\n- Off-diagonal cell (i, j) batata hai class i ko galti se class j bola gaya — confusion ka source.\n- Har class ke liye one-vs-rest se precision/recall nikaal kar **macro average** (sab classes equal) ya **weighted average** (support ke hisaab se) report karte hain.\n- Overall accuracy = diagonal ka sum / total.\n\n**Diagram:** Refer to Confusion Matrix diagram."
      }
    ]
  },
  {
    "id": "classification-metrics",
    "number": "3.10",
    "title": "Accuracy, Precision, Recall and F1 Score",
    "subtitle": "Classification metrics, accuracy paradox aur precision-recall trade-off",
    "icon": "metrics",
    "accent": "#aa00ff",
    "englishDefinition": "Classification metrics quantify how well a classifier performs. Accuracy is the ratio of correct predictions to total predictions. Precision is the fraction of predicted positives that are truly positive (TP/(TP+FP)), while recall or sensitivity is the fraction of actual positives that were correctly identified (TP/(TP+FN)). Precision and recall trade off against each other as the decision threshold changes. The F1 score is their harmonic mean, 2PR/(P+R), and is preferred when classes are imbalanced because it ignores true negatives. The F-beta score generalises this with a parameter that weights recall more (beta > 1) or precision more (beta < 1). For multi-class problems macro, micro and weighted averages are used.",
    "intro": "Chaar metrics jo har classification answer mein likhne padte hain: **accuracy** (kitna sahi), **precision** (jo positive bola wo sach tha?), **recall** (jo positive tha wo pakda gaya?) aur **F1** (dono ka balance). Sabse important lesson: **imbalanced data par accuracy jhooth bolti hai** — 990 negative aur 10 positive wale dataset mein sabko negative bolne par bhi 99% accuracy aa jaati hai, lekin ek bhi bimari detect nahi hoti. Isliye precision, recall aur F1 zaroori hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Metrics Kya Hain",
        "kicker": "Definition",
        "body": "Classification metrics batate hain ki model kitna achha kaam kar raha hai. Chaar sabse important:\n**Accuracy = (TP + TN)/total** — overall sahi predictions.\n**Precision = TP/(TP + FP)** — \"positive bola, wo sach mein positive tha?\"\n**Recall = TP/(TP + FN)** — \"jo actually positive the, unme se kitne pakde?\"\n**F1 = 2PR/(P + R)** — precision aur recall ka **harmonic mean**.",
        "body2": "Precision aur recall ek doosre ke against chalte hain — threshold badhane par precision badhti hai aur recall girti hai, threshold ghatane par ulta. Isliye ek hi metric par decision lena galat hai. **F1** dono ko balance karta hai, aur jab classes imbalanced hon to accuracy ki jagah F1 use karna chahiye kyunki F1 TN ko count hi nahi karta.",
        "chips": ["Accuracy", "Precision", "Recall", "F1 score", "Imbalance-safe"]
      },
      {
        "type": "comparison",
        "title": "Chaar Metrics Ek Saath",
        "kicker": "Comparison",
        "columns": ["Formula", "Kya batata hai", "Kab priority"],
        "rows": [
          {
            "label": "Accuracy",
            "values": ["(TP+TN)/total", "overall correctness", "balanced classes"]
          },
          {
            "label": "Precision",
            "values": ["TP/(TP+FP)", "false alarm kitna kam", "FP mehnga — spam filter"]
          },
          {
            "label": "Recall",
            "values": ["TP/(TP+FN)", "kitne positive pakde", "FN mehnga — cancer, fraud"]
          },
          {
            "label": "F1 score",
            "values": ["2PR/(P+R)", "precision + recall ka balance", "imbalanced data"]
          },
          {
            "label": "Specificity",
            "values": ["TN/(TN+FP)", "healthy ko sahi negative bolna", "screening, confirmatory test"]
          },
          {
            "label": "F-beta",
            "values": ["(1+β²)PR/(β²P+R)", "β>1 recall-heavy, β<1 precision-heavy", "custom cost"]
          }
        ],
        "columnColors": ["#00d4ff", "#00ff88", "#ff8800"]
      },
      {
        "type": "points",
        "title": "Accuracy Paradox — Imbalanced Data",
        "kicker": "Solved Example",
        "points": [
          "**Dataset:** 1000 records — 990 negative, 10 positive (fraud). Model bole **sab negative**.",
          "**TP = 0, FP = 0, FN = 10, TN = 990** → accuracy = 990/1000 = **99%**.",
          "**Precision** = 0/(0+0) → undefined (0 positive predictions); **Recall** = 0/(0+10) = **0%**; **F1 = 0**.",
          "**Conclusion:** 99% accuracy wala model **bilkul useless** hai — ek bhi fraud nahi pakda. Yahi **accuracy paradox** hai.",
          "**Fix:** class weights, oversampling (SMOTE), undersampling, threshold tuning; aur report karne ke liye **F1 / recall / ROC-AUC** use karo.",
          "**Balanced example:** TP = 40, FP = 5, FN = 10, TN = 45 → accuracy 0.85, precision 0.889, recall 0.80, F1 0.842 — yahan accuracy bhi meaningful hai."
        ]
      },
      {
        "type": "cards",
        "title": "Precision vs Recall Trade-off",
        "kicker": "Trade-off",
        "cards": [
          {
            "icon": "target",
            "title": "Threshold Badhao",
            "body": "Sirf high-confidence cases positive → **precision ↑, recall ↓**. Example: spam filter strict (kam spam, but kuch spam nikal jayenge)."
          },
          {
            "icon": "check",
            "title": "Threshold Ghatao",
            "body": "Zyada cases positive → **recall ↑, precision ↓**. Example: cancer screening (sabko test karo, false alarm chalega)."
          },
          {
            "icon": "wrench",
            "title": "F-beta Score",
            "body": "Fβ = (1+β²)PR/(β²P+R). **β = 2** → recall zyada important; **β = 0.5** → precision zyada important."
          },
          {
            "icon": "layers",
            "title": "Macro vs Micro",
            "body": "**Macro** = har class ka metric ka simple average (sab classes equal). **Micro** = total TP/FP/FN se (bade class ka zyada asar). **Weighted** = support ke hisaab se."
          },
          {
            "icon": "speed",
            "title": "Kab Accuracy",
            "body": "Sirf tab jab classes balanced hon aur FP/FN ki cost barabar ho. Warna F1 ya business-specific metric."
          }
        ]
      },
      {
        "type": "points",
        "title": "Exam Points — Kaunsa Metric Kahan",
        "kicker": "Notes",
        "points": [
          "**Spam filter** → precision important (genuine mail spam mark hona bahut bura).",
          "**Cancer / TB screening** → recall important (bimari chhootna sabse khatarnaak).",
          "**Fraud detection** → recall + precision dono, usually F1 ya PR-AUC; review team ka cost dekho.",
          "**Credit approval** → precision (galat approve = loss) aur recall (galat reject = customer churn) — business cost se decide.",
          "**Multi-class** → confusion matrix + macro-F1 (imbalanced classes) ya weighted-F1 (class size matter kare).",
          "**Exam formula box:** accuracy (TP+TN)/N · precision TP/(TP+FP) · recall TP/(TP+FN) · specificity TN/(TN+FP) · F1 = 2PR/(P+R)."
        ]
      },
      {
        "type": "diagram",
        "title": "Precision, Recall aur F1",
        "kicker": "Diagram",
        "diagram": "ds3-metrics-prf",
        "caption": "Formulas, 100 patients ka example aur precision-recall trade-off curve"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Accuracy** = (TP+TN)/N — balanced data par theek, imbalanced par dhokha.",
          "**Precision** = TP/(TP+FP) — false alarm kam karna; **Recall** = TP/(TP+FN) — miss kam karna.",
          "**F1** = 2PR/(P+R) — harmonic mean, imbalance-safe; **F-beta** se weight badlo.",
          "**Accuracy paradox:** 990 negative + 10 positive par sab-negative model 99% accuracy, 0 recall.",
          "**Trade-off:** threshold ↑ → precision ↑ recall ↓; threshold ↓ → recall ↑ precision ↓.",
          "**Multi-class:** macro / micro / weighted average; confusion matrix ke saath report karo."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define accuracy, precision, recall and F1 score with formulas and explain when each is used.",
        "answer": "**Accuracy** = (TP + TN) / (TP + TN + FP + FN) — overall correctness. Balanced classes mein theek, imbalanced data par misleading.\n\n**Precision** = TP / (TP + FP) — predicted positive mein se kitne sach mein positive. Jab **false positive mehnga** ho (spam filter, credit approval) tab important.\n\n**Recall (Sensitivity)** = TP / (TP + FN) — actual positive mein se kitne pakde. Jab **false negative mehnga** ho (cancer screening, fraud) tab important.\n\n**F1 score** = 2 × (Precision × Recall) / (Precision + Recall) — harmonic mean. Imbalanced data par best single number kyunki TN ko count nahi karta.\n\n**Example:** TP=40, FP=5, FN=10, TN=45 → accuracy 0.85, precision 0.889, recall 0.80, F1 0.842.\n\n**Kab kya:** balanced + equal cost → accuracy; FP costly → precision; FN costly → recall; both matter / imbalance → F1.\n\n**Diagram:** Refer to Precision, Recall aur F1 diagram."
      },
      {
        "question": "Explain the accuracy paradox with an example. How do you handle imbalanced data?",
        "answer": "**Accuracy paradox:** jab classes imbalanced hoti hain, tab model jo har record ko majority class predict karta hai wo bhi bahut high accuracy dikha deta hai — lekin minority class bilkul detect nahi hoti.\n\n**Example:** 1000 records — 990 negative, 10 positive (fraud). Model \"sab negative\" predict kare:\n- TP = 0, FP = 0, FN = 10, TN = 990.\n- Accuracy = 990/1000 = **99%** — sunne mein shaandaar.\n- Recall = 0/10 = **0%**, precision undefined, **F1 = 0**.\n- Yaani model 99% accurate hai aur 100% useless — ek bhi fraud nahi pakda.\n\n**Handling imbalanced data:**\n1. **Resampling** — oversample minority (SMOTE), undersample majority.\n2. **Class weights** — `class_weight=\"balanced\"`, minority ki galti par zyada penalty.\n3. **Threshold tuning** — 0.5 se ghata kar recall badhao.\n4. **Right metrics** — precision, recall, F1, PR-AUC, ROC-AUC (accuracy nahi).\n5. **Algorithms** — tree ensembles, ensemble of balanced subsets; anomaly detection approach.\n\n**Diagram:** Refer to Precision, Recall aur F1 diagram."
      },
      {
        "question": "Explain the precision-recall trade-off. What is the F-beta score?",
        "answer": "**Trade-off:** Metrics threshold par depend karte hain. Threshold badhane par model sirf bahut confident cases ko positive bolta hai → **FP kam, precision badhti hai, lekin FN badhne se recall girti hai**. Threshold ghatane par ulta hota hai.\n\n**Graph:** Precision-recall curve yahi trade-off dikhati hai; curve ke neeche ka area (PR-AUC) overall quality batata hai — imbalanced data ke liye ROC-AUC se better.\n\n**Example (cancer test):** threshold 0.5 → precision 0.89, recall 0.80. Threshold 0.3 karne par recall 0.94 ho jayega (kam cases chhootenge) lekin precision 0.72 (zyada false alarms, extra tests). Screening ke liye ye acceptable hai.\n\n**F-beta score:** Fβ = (1 + β²) × (P × R) / (β² × P + R)\n- β = 1 → F1, dono barabar.\n- **β = 2** → recall ko 4× weight; \"miss nahi hona chahiye\" wale cases.\n- **β = 0.5** → precision ko zyada weight; \"false alarm nahi chahiye\" wale cases.\n\n**Diagram:** Refer to Precision, Recall aur F1 diagram."
      }
    ]
  },
  {
    "id": "roc-auc",
    "number": "3.11",
    "title": "ROC Curve and AUC",
    "subtitle": "Threshold kaise chunein — TPR vs FPR graph aur area under curve",
    "icon": "chart",
    "accent": "#00d4ff",
    "englishDefinition": "The ROC (Receiver Operating Characteristic) curve plots the True Positive Rate (TP/(TP+FN), that is recall or sensitivity) against the False Positive Rate (FP/(FP+TN), that is 1 - specificity) for every possible classification threshold. A model that ranks positives above negatives produces a curve bowed towards the top-left corner. The Area Under this Curve (AUC) summarises performance in a single number between 0 and 1: 0.5 means random guessing and 1.0 means perfect separation. AUC is equivalent to the probability that a randomly chosen positive is ranked higher than a randomly chosen negative. It is threshold independent and insensitive to class balance, which makes it useful for comparing models; for extremely imbalanced data the Precision-Recall curve is preferred.",
    "intro": "Threshold 0.5 hamesha sahi nahi hota. ROC curve ek hi graph mein **saare thresholds** ka performance dikhati hai — y-axis par **TPR (recall)** aur x-axis par **FPR (1 − specificity)**. Curve jitni top-left corner ke kareeb hogi, model utna achha. Curve ke neeche ka area **AUC** kehlata hai — 0.5 matlab model random guess kar raha hai, 0.9 matlab bahut strong. Isliye AUC se do models ko **bina threshold choose kiye** compare kar sakte hain.",
    "sections": [
      {
        "type": "definition",
        "title": "ROC Curve Aur AUC Kya Hai",
        "kicker": "Definition",
        "body": "ROC curve (Receiver Operating Characteristic) har possible threshold par **TPR vs FPR** ka graph hai:\n**TPR (Recall) = TP/(TP+FN)** — y-axis; **FPR = FP/(FP+TN) = 1 − specificity** — x-axis.\nJaise-jaise threshold ghatate hain, model zyada positive bolta hai → TPR bhi badhta hai aur FPR bhi badhta hai; curve yahi trade-off dikhati hai.",
        "body2": "**AUC (Area Under Curve)** = is curve ke neeche ka area, 0 se 1 ke beech. Iska seedha matlab ye hai: koi ek random positive aur ek random negative uthao — model positive ko higher score dene ki **probability** = AUC. Isliye AUC sirf ranking ki quality batata hai, kisi ek threshold ki nahi. Isi liye AUC **threshold-independent** hai aur imbalanced data par bhi accuracy se better picture deta hai.",
        "chips": ["TPR vs FPR", "All thresholds", "AUC 0–1", "Ranking quality", "Threshold-free"]
      },
      {
        "type": "comparison",
        "title": "AUC Values Ka Matlab",
        "kicker": "Interpretation",
        "columns": ["AUC", "Matlab", "Grade"],
        "rows": [
          {
            "label": "0.50",
            "values": ["random guessing jitna; model useless", "fail"]
          },
          {
            "label": "0.60 – 0.70",
            "values": ["thoda better; weak signal", "poor"]
          },
          {
            "label": "0.70 – 0.80",
            "values": ["acceptable; industry ka common range", "fair"]
          },
          {
            "label": "0.80 – 0.90",
            "values": ["excellent separation", "good"]
          },
          {
            "label": "0.90 – 1.00",
            "values": ["outstanding / possible leakage check karo", "excellent"]
          },
          {
            "label": "< 0.50",
            "values": ["predictions ulti — labels swap karo ya model bekaar", "broken"]
          }
        ],
        "columnColors": ["#ff7a90", "#ffb347", "#00d4ff", "#00ff88", "#00ff88", "#ff7a90"]
      },
      {
        "type": "points",
        "title": "Solved Example — 5 Positive, 5 Negative",
        "kicker": "Numbers",
        "points": [
          "**Scores:** positive class = {0.90, 0.80, 0.70, 0.60, 0.40}; negative class = {0.55, 0.45, 0.35, 0.25, 0.15}.",
          "**Threshold 0.65:** TP = 3, FN = 2 → TPR = 0.6; FP = 0, TN = 5 → FPR = 0.0.",
          "**Threshold 0.50:** TP = 4, FN = 1 → TPR = 0.8; FP = 1, TN = 4 → FPR = 0.2.",
          "**Threshold 0.40:** TP = 5, FN = 0 → TPR = 1.0; FP = 2, TN = 3 → FPR = 0.4.",
          "**Threshold 0.30:** TP = 5 → TPR = 1.0; negative scores ≥ 0.30 = 0.55, 0.45, 0.35 → FP = 3, TN = 2 → FPR = 0.6.",
          "**Curve points:** (0,0) → (0,0.6) → (0.2,0.8) → (0.4,1.0) → (0.6,1.0) → (1,1).",
          "**AUC (trapezoid):** 0.14 + 0.18 + 0.20 + 0.40 = **0.92** (excellent model).",
          "**Shortcut (ranking method):** 5×5 = 25 positive-negative pairs; positive > negative 5+5+5+5+3 = 23 → AUC = 23/25 = **0.92**."
        ]
      },
      {
        "type": "cards",
        "title": "ROC Ke Aage — PR Curve Aur Multi-class",
        "kicker": "Advanced",
        "cards": [
          {
            "icon": "target",
            "title": "PR Curve",
            "body": "Extreme imbalance (1% fraud) par ROC bahut optimist dikhta hai. Tab **Precision-Recall curve** + PR-AUC behtar hai kyunki wo FP par directly focus karti hai."
          },
          {
            "icon": "layers",
            "title": "Multi-class ROC",
            "body": "Har class ke liye one-vs-rest ROC banao aur **macro-average** lo; ya micro-average (poore predictions ko binary treat karo)."
          },
          {
            "icon": "wrench",
            "title": "Threshold Chunnna",
            "body": "AUC batata hai model ka ranking achha hai, lekin deploy karte waqt business cost se threshold chuno — max F1, ya max recall with precision ≥ target (Youden index: TPR − FPR max)."
          },
          {
            "icon": "shield",
            "title": "Class Imbalance",
            "body": "ROC-AUC class balance se invariant hai — isliye achhi baat bhi hai aur limitation bhi: minority class par performance chhup sakta hai."
          },
          {
            "icon": "warn",
            "title": "AUC Ka Limit",
            "body": "AUC ranking measure hai, **calibration** nahi batata — 0.9 AUC wala model probabilities galat de sakta hai (Brier score / calibration curve se check karo)."
          }
        ]
      },
      {
        "type": "diagram",
        "title": "ROC Curve aur AUC",
        "kicker": "Diagram",
        "diagram": "ds3-roc-auc",
        "caption": "TPR vs FPR curve, threshold sweep aur AUC ka area"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**ROC** = har threshold par **TPR (y)** vs **FPR (x)** ka plot; FPR = 1 − specificity.",
          "**AUC** = curve ke neeche ka area, 0.5 = random, 0.8–0.9 = excellent, 1.0 = perfect.",
          "**AUC ka matlab:** random positive ko random negative se upar rank karne ki probability.",
          "**Threshold-independent** aur imbalance-insensitive → model comparison ke liye best.",
          "**Extreme imbalance** par PR-curve aur PR-AUC better; threshold business cost se choose karo.",
          "**Example:** 23/25 pairs correctly ranked → AUC 0.92."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the ROC curve. How is AUC interpreted and why is it useful?",
        "answer": "**ROC (Receiver Operating Characteristic) curve:** har possible classification threshold par **True Positive Rate** aur **False Positive Rate** ka plot.\n- y-axis: **TPR = Recall = TP/(TP+FN)**\n- x-axis: **FPR = FP/(FP+TN) = 1 − Specificity**\n\nThreshold ghatao → zyada positives predict → TPR aur FPR dono badhte hain; threshold badhao → dono girte hain. Curve yahi trade-off dikhati hai. Perfect model ka point top-left corner par hota hai (TPR 1, FPR 0); random model ki curve diagonal (y = x) hoti hai.\n\n**AUC (Area Under Curve):** curve ke neeche ka area, 0 se 1.\n- 0.5 = random guessing; 0.7–0.8 acceptable; 0.8–0.9 excellent; 0.9+ outstanding.\n- **Interpretation:** ek random positive aur ek random negative utha kar model positive ko higher score dene ki probability = AUC.\n- < 0.5 matlab predictions ulti — labels ya scoring check karo.\n\n**Useful kyun:** (i) **threshold-independent** — model ki overall ranking quality batata hai; (ii) class balance se invariant, isliye imbalanced data par accuracy se better; (iii) do models ko ek hi number se compare kar sakte hain.\n\n**Diagram:** Refer to ROC Curve aur AUC diagram."
      },
      {
        "question": "How is the ROC curve constructed? Draw and explain with a threshold table for a small example.",
        "answer": "**Construction steps:**\n1. Model se har test record ki **probability/score** lo.\n2. Score ko descending order mein sort karo.\n3. Har unique score ko threshold maano; us threshold par TP, FP, FN, TN nikaalo.\n4. TPR = TP/(TP+FN) aur FPR = FP/(FP+TN) calculate karo.\n5. Saare (FPR, TPR) points ko plot karo; (0,0) se (1,1) tak curve banao.\n6. Curve ke neeche ka area = AUC (trapezoid rule se).\n\n**Example:** positive scores {0.90, 0.80, 0.70, 0.60, 0.40}, negative {0.55, 0.45, 0.35, 0.25, 0.15}.\n| Threshold | TP | FP | TPR | FPR |\n|---|---|---|---|---|\n| 0.65 | 3 | 0 | 0.6 | 0.0 |\n| 0.50 | 4 | 1 | 0.8 | 0.2 |\n| 0.40 | 5 | 2 | 1.0 | 0.4 |\n| 0.30 | 5 | 3 | 1.0 | 0.6 |\n\nPoints: (0,0) → (0,0.6) → (0.2,0.8) → (0.4,1.0) → (0.6,1.0) → (1,1). Trapezoid area = 0.14 + 0.18 + 0.20 + 0.40 = **AUC 0.92**.\n\n**Cross-check (pair counting):** 25 positive-negative pairs, 23 correctly ranked → 23/25 = 0.92.\n\n**Diagram:** Refer to ROC Curve aur AUC diagram."
      },
      {
        "question": "What are the limitations of ROC-AUC? When should a Precision-Recall curve be preferred?",
        "answer": "**Limitations of ROC-AUC:**\n1. **Calibration nahi batata** — high AUC model ki probabilities galat ho sakti hain.\n2. **Extreme imbalance par optimist** — 1% positive data mein FP badhne se FPR bahut slowly badhta hai (denominator bada), isliye curve achhi dikhti hai jabki real precision kharab ho.\n3. Single number hai — business cost (FP vs FN ki keemat) capture nahi karta.\n4. Multi-class mein average lena padta hai, interpretation mushkil.\n5. Threshold ka decision nahi deta — deployment ke liye threshold alag se chunna padta hai.\n\n**PR curve kab:** jab **positive class rare** ho (fraud 0.5%, rare disease, click-through) aur **false positives mehnge** hon. PR curve precision vs recall dikhati hai, aur PR-AUC minority class ki performance par seedha focus karta hai.\n\n**Practical checklist:** baseline = AUC + PR-AUC; deploy = max F1 ya target precision par max recall; calibration = Brier score / reliability curve.\n\n**Diagram:** Refer to ROC Curve aur AUC diagram."
      }
    ]
  },
  {
    "id": "regression-metrics",
    "number": "3.12",
    "title": "MAE, MSE, RMSE and R-Squared",
    "subtitle": "Regression model ki galti kaise naapein — magnitude ke saath variance bhi",
    "icon": "speed",
    "accent": "#ff0080",
    "englishDefinition": "Regression metrics quantify the difference between predicted and actual continuous values. Mean Absolute Error (MAE) averages the absolute residuals and is in the same unit as the target, so it is easy to explain and robust to outliers. Mean Squared Error (MSE) averages squared residuals, penalising large errors heavily, but its unit is squared. Root Mean Squared Error (RMSE) is the square root of MSE, returning the error to the original unit while still penalising big mistakes. R-squared (coefficient of determination) is 1 - SSres/SStot and gives the proportion of variance in the target explained by the model; adjusted R-squared penalises extra predictors, and MAPE expresses error as a percentage.",
    "intro": "Classification mein accuracy/precision/recall thay; regression mein output **number** hota hai, isliye galti bhi number mein naapni padti hai. **MAE** = average galti (same unit), **MSE** = squared galti (bade errors par sakht), **RMSE** = MSE ka root (wapas same unit), aur **R²** = model ne data ka kitna hissa samjhaya (0 se 1, jitna zyada utna achha). Yaad rakhne ka tareeka: MAE/RMSE batate hain **kitni galti**, R² batata hai **kitna fit**.",
    "sections": [
      {
        "type": "definition",
        "title": "Chaar Regression Metrics",
        "kicker": "Definition",
        "body": "**MAE** = (1/n) Σ |yi − ŷi| — average absolute galti, target ke **same unit** mein.\n**MSE** = (1/n) Σ (yi − ŷi)² — squared galti, **bade errors par zyada penalty**, unit squared.\n**RMSE** = √MSE — wapas original unit mein, phir bhi bade errors par sakht.\n**R² (coefficient of determination)** = 1 − SSres/SStot — model ne target ke variance ka kitna hissa explain kiya (0 to 1, negative bhi ho sakta hai).",
        "body2": "Yahan **SSres = Σ(yi − ŷi)²** (model ki galti) aur **SStot = Σ(yi − ȳ)²** (baseline: har jagah mean predict karne par galti). R² = 0 matlab model mean se better nahi, R² = 1 matlab perfect. **Adjusted R²** = 1 − (1−R²)(n−1)/(n−p−1) — useless features add karne par R² ko penalise karta hai. **MAPE** = (100/n) Σ |(yi − ŷi)/yi| — percentage error, business reporting ke liye.",
        "chips": ["MAE", "MSE", "RMSE", "R²", "Adjusted R²"]
      },
      {
        "type": "comparison",
        "title": "Metric Comparison",
        "kicker": "Comparison",
        "columns": ["Formula", "Unit", "Outlier ka asar"],
        "rows": [
          {
            "label": "MAE",
            "values": ["(1/n)Σ|yi − ŷi|", "target ke same unit", "kam (linear penalty)"]
          },
          {
            "label": "MSE",
            "values": ["(1/n)Σ(yi − ŷi)²", "unit² (square)", "bahut zyada (squared)"]
          },
          {
            "label": "RMSE",
            "values": ["√MSE", "target ke same unit", "zyada (squared root ke through)"]
          },
          {
            "label": "R²",
            "values": ["1 − SSres/SStot", "unitless (0–1)", "outliers se girta hai"]
          },
          {
            "label": "Adjusted R²",
            "values": ["1 − (1−R²)(n−1)/(n−p−1)", "unitless", "kam, features ka penalty"]
          },
          {
            "label": "MAPE",
            "values": ["(100/n)Σ|(yi−ŷi)/yi|", "percentage", "kam, lekin zero values par fail"]
          }
        ],
        "columnColors": ["#00d4ff", "#00ff88", "#ff8800"]
      },
      {
        "type": "points",
        "title": "Solved Example Aur Interpretation",
        "kicker": "Numbers",
        "points": [
          "**Data:** actual y = [3, 5, 7]; predicted ŷ = [2, 5, 9].",
          "**Residuals:** 3−2 = **1**, 5−5 = **0**, 7−9 = **−2**.",
          "**MAE** = (1 + 0 + 2)/3 = **1.00** — average 1 unit ki galti.",
          "**MSE** = (1² + 0² + (−2)²)/3 = 5/3 = **1.667** (unit squared).",
          "**RMSE** = √1.667 = **1.29** — \"model average 1.29 unit galat hai\" (interpretable).",
          "**R²:** ȳ = 5 → SStot = (3−5)² + 0 + (7−5)² = 8; SSres = 1 + 0 + 4 = 5 → R² = 1 − 5/8 = **0.375**.",
          "**Matlab:** model ne variance ka 37.5% explain kiya — baaki 62.5% unexplained. Real projects mein 0.7+ achha maana jaata hai, lekin domain par depend karta hai.",
          "**MSE vs MAE ka farak:** ek bada error (−2) MSE ko 4 guna badha deta hai — isliye MSE/RMSE **bade blunders** par focus karte hain, MAE har galti ko barabar treat karta hai."
        ]
      },
      {
        "type": "cards",
        "title": "Kab Kaunsa Metric",
        "kicker": "Choice",
        "cards": [
          {
            "icon": "ruler",
            "title": "MAE Kab",
            "body": "Jab har galti ki cost barabar ho aur outliers ko zyada weight nahi dena — jaise delivery time ka average error."
          },
          {
            "icon": "alert",
            "title": "RMSE Kab",
            "body": "Jab **bade errors sabse mehnga** hon — stock demand forecast, price prediction; aur jab target ke same unit mein explain karna ho."
          },
          {
            "icon": "metrics",
            "title": "R² Kab",
            "body": "Jab batana ho ki model **baseline (mean) se kitna better** hai; model comparison aur report ke liye."
          },
          {
            "icon": "layers",
            "title": "Adjusted R² Kab",
            "body": "Jab features add/remove karke compare karna ho — extra useless feature R² ko artificially badhata hai, adjusted usko saza deta hai."
          },
          {
            "icon": "trends",
            "title": "MAPE Kab",
            "body": "Business ko **percentage** mein error batana ho (\"forecast 8% off tha\"); dhyan: zero ya bahut chhoti values par explode karta hai."
          },
          {
            "icon": "warn",
            "title": "Kab Dhokha",
            "body": "R² high hone se model achha nahi hota — overfitting se bhi R² badh jaata hai. Test data aur residual plot dekho."
          }
        ]
      },
      {
        "type": "points",
        "title": "Exam Points Aur Related Concepts",
        "kicker": "Notes",
        "points": [
          "**Formulae yad karo:** MAE = Σ|y−ŷ|/n · MSE = Σ(y−ŷ)²/n · RMSE = √MSE · R² = 1 − SSres/SStot.",
          "**RMSE ≥ MAE** hamesha (Jensen); dono barabar sirf tab jab saari galtiyan same magnitude ki hon.",
          "**R² negative** bhi ho sakta hai — jab model mean se bhi zyada galat ho (test data par common).",
          "**SSres/SStot** ratios hain, isliye R² **unitless** hai — alag datasets/models compare karne ke liye useful.",
          "**Classification vs regression metrics:** accuracy/precision/recall/F1 class ke liye; MAE/RMSE/R² number ke liye.",
          "**Residual analysis:** residuals random scatter hone chahiye; pattern dikhe to model ne structure miss kiya hai."
        ]
      },
      {
        "type": "diagram",
        "title": "Regression Metrics",
        "kicker": "Diagram",
        "diagram": "ds3-regression-metrics",
        "caption": "MAE, MSE, RMSE aur R² ka formulae + residual ka comparison"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**MAE** = Σ|y−ŷ|/n → same unit, outliers par soft.",
          "**MSE** = Σ(y−ŷ)²/n → bade errors par sakht, unit squared.",
          "**RMSE** = √MSE → wapas original unit, phir bhi big errors ka penalty.",
          "**R²** = 1 − SSres/SStot → variance ka kitna % explain hua (0–1, negative bhi).",
          "**Adjusted R²** extra features ka penalty; **MAPE** percentage error.",
          "**Example:** errors 1, 0, −2 → MAE 1.0, MSE 1.667, RMSE 1.29, R² 0.375."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain MAE, MSE, RMSE and R-squared with formulas. How do they differ?",
        "answer": "**MAE (Mean Absolute Error):** (1/n) Σ |yi − ŷi| — average absolute galti, target ke same unit mein, outliers par kam asar.\n\n**MSE (Mean Squared Error):** (1/n) Σ (yi − ŷi)² — squared galti, bade errors par bahut zyada penalty, unit squared (interpret karna mushkil).\n\n**RMSE (Root Mean Squared Error):** √MSE — error wapas original unit mein, lekin bade errors ka penalty bana rehta hai. Isliye reporting ke liye sabse popular.\n\n**R² (Coefficient of Determination):** 1 − SSres/SStot, jahan SSres = Σ(yi − ŷi)² aur SStot = Σ(yi − ȳ)². Ye batata hai model ne target ke variance ka kitna hissa explain kiya: 1 = perfect, 0 = mean jitna bekaar, negative = mean se bhi kharab.\n\n**Example:** y = [3, 5, 7], ŷ = [2, 5, 9] → residuals 1, 0, −2 → MAE = 1.0, MSE = 1.667, RMSE = 1.29, R² = 1 − 5/8 = 0.375.\n\n**Differences:** MAE = \"kitni galti (average)\", MSE = \"badi galtiyon par extra penalty\", RMSE = \"same unit mein wahi penalty\", R² = \"kitna fit / kitna explain hua\". RMSE hamesha ≥ MAE.\n\n**Diagram:** Refer to Regression Metrics diagram."
      },
      {
        "question": "What is R-squared? Explain its formula, interpretation and limitations.",
        "answer": "**R² (coefficient of determination)** regression model ki goodness of fit batata hai:\n**R² = 1 − SSres/SStot**, jahan **SSres = Σ(yi − ŷi)²** (model ki squared error) aur **SStot = Σ(yi − ȳ)²** (mean-only baseline ki error).\n\n**Interpretation:**\n- R² = 1 → perfect predictions (100% variance explained).\n- R² = 0 → model mean predict karne jitna hi achha (koi improvement nahi).\n- R² = 0.75 → target ke variance ka 75% model explain karta hai.\n- R² < 0 → test data par model mean se bhi kharab (overfit ka signal).\n\n**Example:** y = [3, 5, 7], ŷ = [2, 5, 9] → SStot = 8, SSres = 5 → R² = 0.375.\n\n**Limitations:**\n1. Feature add karte hi R² **kabhi nahi girta** — useless features bhi badha dete hain (isi liye **adjusted R²** = 1 − (1−R²)(n−1)/(n−p−1)).\n2. Overfitting se R² badh sakta hai — test data par check karo.\n3. Target ka unit/scale nahi batata; MAE/RMSE ke saath report karo.\n4. Non-linear relation ya outliers par misleading ho sakta hai.\n\n**Diagram:** Refer to Regression Metrics diagram."
      },
      {
        "question": "Differentiate between MAE and RMSE. Which metric would you choose and why?",
        "answer": "| Point | MAE | RMSE |\n|---|---|---|\n| Formula | (1/n)Σ|yi − ŷi| | √[(1/n)Σ(yi − ŷi)²] |\n| Unit | target ke same unit | target ke same unit |\n| Outliers | kam asar (linear) | zyada asar (squared) |\n| Interpretation | average absolute galti | \"typical\" galti, big errors ka weight zyada |\n| Optimisation | L1 loss, median ke kareeb | L2 loss, mean ke kareeb |\n| Relation | RMSE ≥ MAE hamesha | barabar sirf equal-magnitude errors par |\n\n**Example:** errors 1, 0, −2 → MAE = 1.0, RMSE = 1.29. Ek aur bada error (jaise −10) aane par MAE sirf 3.25 hoga lekin RMSE 5.3 — farak saaf dikh jaata hai.\n\n**Kaunsa choose karein:**\n- **RMSE** jab bade errors sabse mehnga hon (demand forecast, inventory, price) — kyunki wo big misses ko sakht saza deta hai, aur optimisation ke liye smooth hai.\n- **MAE** jab har galti ki cost barabar ho, outliers data mein naturally hon (ya unhe ignore karna ho), aur business ko simple \"average error\" samjhana ho.\n- **Best practice:** dono + R² saath report karo — RMSE vs MAE ka gap hi bata deta hai ki kuch bade outliers hain.\n\n**Diagram:** Refer to Regression Metrics diagram."
      }
    ]
  },
];
