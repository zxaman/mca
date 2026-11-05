// Data Science — Unit IV: Clustering and Association Rule Mining
export const dataScienceUnit4Topics = [
  {
    "id": "distance-models",
    "number": "4.1",
    "title": "Distance Based Models",
    "subtitle": "Euclidean, Manhattan, Minkowski, Hamming aur cosine similarity",
    "icon": "ruler",
    "accent": "#00d4ff",
    "englishDefinition": "Distance-based models measure how similar or dissimilar two data points are by computing a distance between their feature vectors. The most common measures are Euclidean distance (straight-line distance, the L2 norm), Manhattan or city-block distance (sum of absolute differences, the L1 norm), Minkowski distance (the general Lp form that yields Manhattan for p = 1 and Euclidean for p = 2), Hamming distance (the number of positions at which two equal-length strings or binary vectors differ) and cosine similarity (the cosine of the angle between two vectors, which ignores magnitude and is preferred for sparse high-dimensional text data; cosine distance is 1 minus cosine similarity). A valid distance metric satisfies non-negativity, identity, symmetry and the triangle inequality. Distances power clustering, K-nearest neighbour, anomaly detection and recommendation, and they require feature scaling.",
    "intro": "Clustering aur KNN ka poora concept ek hi sawaal par khada hai: **do points kitne paas hain?** Isi ka jawab distance measures dete hain. Euclidean seedhi doori hai, Manhattan \"sadak ke raste\" ki doori, Minkowski dono ka general formula, Hamming do strings mein kitne character alag hain, aur cosine do vectors ke beech ka **angle** dekhta hai (magnitude nahi). Text data ke liye cosine sabse popular hai kyunki document ki length badhne se angle nahi badalta.",
    "sections": [
      {
        "type": "definition",
        "title": "Distance Based Model Kya Hai",
        "kicker": "Definition",
        "body": "Distance-based model har record ko ek **feature vector** maanta hai aur do records ki similarity unke beech ki **distance** se naapta hai. Distance kam = similar, distance zyada = alag. K-means, KNN, k-medoid, hierarchical clustering aur anomaly detection — sab isi par chalte hain.\n**L1 norm (Manhattan)** = Σ|xi − yi| · **L2 norm (Euclidean)** = √Σ(xi − yi)² · **Lp (Minkowski)** = (Σ|xi − yi|^p)^(1/p).",
        "body2": "Ek achha distance function **metric** kehlata hai agar usmein chaar properties hon: **non-negativity** (d ≥ 0), **identity** (d = 0 sirf jab points same hon), **symmetry** (d(A,B) = d(B,A)) aur **triangle inequality** (d(A,C) ≤ d(A,B) + d(B,C)). Cosine distance triangle inequality follow karta hai, isliye clustering mein use ho sakta hai.",
        "chips": ["L1 / L2 / Lp", "Metric properties", "Scaling zaroori", "High dimension", "Text ke liye cosine"]
      },
      {
        "type": "cards",
        "title": "Paanch Main Measures",
        "kicker": "Measures",
        "cards": [
          {
            "icon": "ruler",
            "title": "Euclidean (L2)",
            "body": "d = √Σ(xi − yi)² ; seedhi line ki doori. Continuous data, k-means ka default. Outliers par asar zyada."
          },
          {
            "icon": "grid",
            "title": "Manhattan (L1)",
            "body": "d = Σ|xi − yi| ; axis ke saath chalti doori (city block). Outliers par kam asar, grid/categorical data."
          },
          {
            "icon": "metrics",
            "title": "Minkowski (Lp)",
            "body": "d = (Σ|xi − yi|^p)^(1/p) ; p = 1 → Manhattan, p = 2 → Euclidean, p → ∞ → Chebyshev (max difference)."
          },
          {
            "icon": "code",
            "title": "Hamming",
            "body": "Do equal-length strings/binary vectors mein **kitne positions alag** hain. Text, DNA, one-hot, error detection."
          },
          {
            "icon": "target",
            "title": "Cosine Similarity",
            "body": "cos θ = (A·B)/(|A||B|) ; angle dekhta hai, magnitude nahi. Cosine distance = 1 − cos θ. Text/TF-IDF ke liye best."
          },
          {
            "icon": "shield",
            "title": "Chebyshev (L∞)",
            "body": "d = max|x1 − x2| ; jab sirf sabse badi difference matter kare (jaise chess king moves, quality control)."
          }
        ]
      },
      {
        "type": "points",
        "title": "Solved Examples — Numbers Ke Saath",
        "kicker": "Worked Example",
        "points": [
          "**Points:** A = (1, 2) aur B = (4, 6).",
          "**Euclidean:** √((4−1)² + (6−2)²) = √(9 + 16) = √25 = **5.0**.",
          "**Manhattan:** |4−1| + |6−2| = 3 + 4 = **7**.",
          "**Minkowski (p = 3):** (3³ + 4³)^(1/3) = (27 + 64)^(1/3) = 91^(1/3) = **4.50** — dekho, p badhne par value 5 se 4.5 ki taraf giri.",
          "**Cosine similarity:** A·B = 4 + 12 = 16; |A| = 2.236, |B| = 7.211 → 16/(2.236 × 7.211) = **0.992** (angle bahut chhota, isliye almost same direction).",
          "**Hamming:** strings \"1011101\" aur \"1001001\" — positions 3 aur 6 par farak → distance = **2** (normalised 2/7 = 0.286).",
          "**Note:** Euclidean aur Manhattan **magnitude** se affect hote hain — isliye scaling (min-max / z-score) pehle karo, warna 45,000 salary aur 24 age ka distance sirf salary se decide hoga."
        ]
      },
      {
        "type": "comparison",
        "title": "Kab Kaunsa Distance",
        "kicker": "Comparison",
        "columns": ["Euclidean", "Manhattan", "Cosine"],
        "rows": [
          {
            "label": "Formula",
            "values": ["√Σ(xi − yi)²", "Σ|xi − yi|", "(A·B)/(|A||B|)"]
          },
          {
            "label": "Kya dekhta hai",
            "values": ["seedhi doori", "axis-wise doori", "angle (direction)"]
          },
          {
            "label": "Magnitude ka asar",
            "values": ["haan", "haan", "nahi"]
          },
          {
            "label": "Outliers",
            "values": ["zyada sensitive", "kam sensitive", "kam"]
          },
          {
            "label": "High dimension",
            "values": ["distances flatten ho jaati hain", "thoda better", "sabse stable"]
          },
          {
            "label": "Best for",
            "values": ["continuous, scaled data", "grid/sparse, robust need", "text, TF-IDF, embeddings"]
          },
          {
            "label": "Used in",
            "values": ["k-means, KNN, SVM RBF", "k-medoid (PAM), KNN", "document clustering, recommender"]
          }
        ],
        "columnColors": ["#00d4ff", "#00ff88", "#ff8800"]
      },
      {
        "type": "points",
        "title": "Exam Points",
        "kicker": "Notes",
        "points": [
          "**Metric ke 4 properties** likhna mat bhoolo — non-negativity, identity, symmetry, triangle inequality.",
          "**Minkowski general form hai:** p = 1 Manhattan, p = 2 Euclidean, p = ∞ Chebyshev — ye ek line exam mein poore marks ki hoti hai.",
          "**Hamming** sirf **equal length** par kaam karta hai; normalised Hamming = mismatches / length (0 se 1).",
          "**Cosine** magnitude ignore karta hai — isliye ek chhota document aur bada document same topic ke 1 ke kareeb ho sakte hain.",
          "**Curse of dimensionality:** bahut features par sab distances lagbhag barabar ho jaati hain — PCA ya feature selection karo.",
          "**Scaling compulsory:** distance-based models scale ke against sensitive hain (KNN, k-means, PAM sab)."
        ]
      },
      {
        "type": "diagram",
        "title": "Distance Based Models",
        "kicker": "Diagram",
        "diagram": "ds4-distances",
        "caption": "Euclidean, Manhattan, Minkowski, Hamming aur cosine — formulas + geometric matlab"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Euclidean** = seedhi doori √Σ(xi−yi)²; **Manhattan** = Σ|xi−yi|; **Minkowski** = (Σ|xi−yi|^p)^(1/p).",
          "**Hamming** = alag positions ki ginti (equal length strings).",
          "**Cosine similarity** = angle ka cos; magnitude ignore; text ke liye best; cosine distance = 1 − cos.",
          "**Metric properties:** non-negative, identity, symmetric, triangle inequality.",
          "**Scaling zaroori** warna bada-range feature poora distance decide kar dega.",
          "**Example:** A(1,2), B(4,6) → Euclidean 5, Manhattan 7, cosine 0.992."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the distance based models used in data mining with their formulas.",
        "answer": "**Distance based models** do records ki similarity unke feature vectors ke beech ki distance se naapte hain. Main measures:\n\n**1. Euclidean distance (L2):** d = √Σ(xi − yi)² — straight-line doori. Continuous, scaled data ke liye default; k-means aur KNN mein sabse common.\n\n**2. Manhattan distance (L1, city block):** d = Σ|xi − yi| — axis ke saath chalti doori. Outliers par kam asar, robust; k-medoid mein use hota hai.\n\n**3. Minkowski distance (Lp):** d = (Σ|xi − yi|^p)^(1/p). p = 1 → Manhattan, p = 2 → Euclidean, p → ∞ → Chebyshev (max difference). Ye general family hai.\n\n**4. Hamming distance:** do equal-length binary/string vectors mein jitne positions alag hain unki ginti — error detection, DNA, one-hot features.\n\n**5. Cosine similarity:** cos θ = (A·B)/(|A||B|); cosine distance = 1 − cos θ. Magnitude ignore hota hai, sirf direction matter karti hai — isliye text/TF-IDF documents ke liye best.\n\n**Example:** A(1,2), B(4,6) → Euclidean 5, Manhattan 7, Minkowski(p=3) 4.50, cosine 0.992.\n\n**Diagram:** Refer to Distance Based Models diagram."
      },
      {
        "question": "What are the properties of a distance metric? Compare Euclidean and cosine similarity.",
        "answer": "**Properties of a metric d(A, B):**\n1. **Non-negativity** — d(A,B) ≥ 0.\n2. **Identity** — d(A,B) = 0 sirf tab jab A = B.\n3. **Symmetry** — d(A,B) = d(B,A).\n4. **Triangle inequality** — d(A,C) ≤ d(A,B) + d(B,C).\n\n**Euclidean vs cosine:**\n\n| Point | Euclidean | Cosine similarity |\n|---|---|---|\n| Formula | √Σ(xi − yi)² | (A·B)/(|A||B|) |\n| Kya naapta hai | points ke beech ki doori | vectors ke beech ka angle |\n| Magnitude | affect karti hai | ignore hoti hai |\n| Value range | 0 se ∞ | −1 se 1 |\n| High dimension | distance flatten ho jaati hai | stable rehta hai |\n| Best for | k-means, KNN, SVM | text, TF-IDF, embeddings, recommender |\n\n**Example:** document A = (2, 0), B = (20, 0) → Euclidean 18 (bahut door), cosine 1.0 (bilkul same direction). Document length badhne se cosine nahi badalta, isliye text ke liye wo better hai.\n\n**Diagram:** Refer to Distance Based Models diagram."
      },
      {
        "question": "Why is feature scaling important for distance based models? Explain with an example.",
        "answer": "**Reason:** distance har feature ki difference ko **seedha jodta** hai. Agar ek feature ka range bahut bada ho (salary 20,000–90,000) aur doosre ka chhota (age 22–45), to distance sirf salary se decide hoga — age ka poora information dab jaayega.\n\n**Example:** A = (age 25, salary 30,000), B = (age 35, salary 31,000).\n- Raw Euclidean = √(10² + 1000²) = √1,000,100 ≈ **1000.05** — age ke 10 saal ka koi asar nahi dikha.\n- z-score scaling ke baad (age σ = 8, salary σ = 20,000): √((10/8)² + (1000/20000)²) = √(1.5625 + 0.0025) = **1.25** — ab age dominate karti hai, jo sahi hai.\n\n**Scaling methods:** min-max `(x − min)/(max − min)` → 0–1; z-score `(x − μ)/σ` → mean 0, sd 1.\n\n**Kahan zaroori:** k-means, KNN, k-medoid, hierarchical clustering, SVM, PCA — sab par. Aur **decision trees / random forest** par nahi (wo thresholds par split karte hain).\n\n**Diagram:** Refer to Distance Based Models diagram."
      }
    ]
  },
  {
    "id": "k-means",
    "number": "4.2",
    "title": "K-Means Clustering",
    "subtitle": "Centroid based partitioning, WCSS objective aur k-means++ initialisation",
    "icon": "scatter",
    "accent": "#ff0080",
    "englishDefinition": "K-means is a partitioning, centroid-based unsupervised clustering algorithm. The user chooses the number of clusters k, k initial centroids are placed (randomly or with k-means++), every point is assigned to the nearest centroid using a distance measure (usually Euclidean), each centroid is recomputed as the mean of its assigned points, and these assignment and update steps repeat until the assignments stop changing or a maximum number of iterations is reached. The algorithm minimises the within-cluster sum of squares (WCSS or inertia). It is fast (O(n·k·d·iterations)) and simple, but it must be given k in advance, converges only to a local optimum, is sensitive to initialisation and outliers, and assumes roughly spherical, similarly sized clusters.",
    "intro": "K-means ka kaam bilkul seedha hai: **k group banao, har point ko apne sabse paas wale centre (centroid) mein daal do, phir centre ko apne members ka average bana do — aur ye dohraate raho jab tak sab kuch settle na ho jaaye.** Yahi \"assignment → update\" loop hai. Ye sabse popular clustering algorithm hai kyunki fast hai, par iski do badi kamzoriyan hain — **k pehle se dena padta hai** aur result **initialisation par depend** karta hai.",
    "sections": [
      {
        "type": "definition",
        "title": "K-Means Kya Hai",
        "kicker": "Definition",
        "body": "K-means ek **partitioning clustering** algorithm hai jo data ko **k non-overlapping clusters** mein baantta hai. Har cluster ka ek **centroid** (members ka mean) hota hai, aur har point us cluster mein jaata hai jiska centroid sabse paas ho. Algorithm ka objective hai **WCSS (within-cluster sum of squares)** minimise karna:\n**J = Σ(k = 1 to k) Σ(x ∈ Ck) ||x − μk||²**",
        "body2": "Do steps baar-baar chalte hain: **assignment step** (point ko nearest centroid do) aur **update step** (centroid = members ka mean). Jab koi point apna cluster na badle, ya centroid ka shift bahut chhota ho jaaye, ya max iterations ho jaayein — algorithm ruk jaata hai. Ye k-means ka **Lloyd algorithm** hai. Result **local optimum** hota hai, isliye kai baar alag initialisation se chalate hain (k-means++ aur n_init).",
        "chips": ["Partitioning", "Centroid = mean", "WCSS minimise", "Iterative", "k pehle se do"]
      },
      {
        "type": "points",
        "title": "Algorithm — Step by Step",
        "kicker": "Steps",
        "points": [
          "**Step 1:** k choose karo (elbow / silhouette se) aur features scale karo.",
          "**Step 2:** k initial centroids choose karo — random points ya **k-means++** (dur-dur points chunna, better).",
          "**Step 3 (assignment):** har point ko nearest centroid wale cluster mein daalo (Euclidean).",
          "**Step 4 (update):** har cluster ka naya centroid = uske saare points ka **mean**.",
          "**Step 5 (repeat):** Step 3–4 dohrao jab tak assignments change hona band na ho jaayein, ya centroid shift < tolerance ho, ya max iterations (jaise 300) ho jaayein.",
          "**Step 6:** final clusters + centroid report karo; quality WCSS / silhouette se check karo.",
          "**Complexity:** O(n · k · d · i) — n points, k clusters, d features, i iterations. Lakhon rows par bhi fast."
        ]
      },
      {
        "type": "cards",
        "title": "K-Means Ke Concepts Aur Problems",
        "kicker": "Concepts",
        "cards": [
          {
            "icon": "scatter",
            "title": "Centroid",
            "body": "Cluster ka centre = members ka**mean** (har feature ka average). Isliye centroid actual data point nahi hota."
          },
          {
            "icon": "metrics",
            "title": "WCSS / Inertia",
            "body": "Har point se uske centroid tak ki squared distance ka total. Kam WCSS = tight clusters. k badhao to WCSS hamesha girega."
          },
          {
            "icon": "refresh",
            "title": "k-means++",
            "body": "Pehla centroid random, uske baad aise points chuno jo pehle wale se **door** hon — local optimum ka risk kam."
          },
          {
            "icon": "warn",
            "title": "Outliers",
            "body": "Mean outlier se kharab hota hai — ek bada outlier poore centroid ko khinch leta hai (isliye k-medoid better)."
          },
          {
            "icon": "grid",
            "title": "Assumptions",
            "body": "Clusters roughly **spherical**, similar size, similar density. Non-convex shapes (jaise moon) par fail."
          },
          {
            "icon": "clock",
            "title": "Kab rukta hai",
            "body": "Assignment stable, centroid shift ~0, ya max iterations. Convergence guaranteed hai par local optimum par."
          }
        ]
      },
      {
        "type": "points",
        "title": "Solved Example — 1-D Points, k = 2",
        "kicker": "Numbers",
        "points": [
          "**Data:** 1, 2, 3, 10, 11, 12. k = 2 maan lo, initial centroids c1 = 1 aur c2 = 12.",
          "**Iteration 1 (assignment):** 1,2,3 → c1; 10,11,12 → c2 (kyunki 3 aur 10 ke beech midpoint 6.5 hai).",
          "**Update:** c1 = (1+2+3)/3 = **2**; c2 = (10+11+12)/3 = **11**.",
          "**Iteration 2:** assignments same rehte hain → algorithm **converge** ho gaya.",
          "**WCSS:** (1−2)² + 0 + (3−2)² + (10−11)² + 0 + (12−11)² = 1 + 0 + 1 + 1 + 0 + 1 = **4**.",
          "**k = 3 hota:** centroids 2, 11 aur ek aur — WCSS gir kar ~0.67 ho jaata, lekin clusters over-split ho jaate hain. Isi tension ka naam **elbow method** hai."
        ]
      },
      {
        "type": "comparison",
        "title": "K-Means ke Pros Aur Cons",
        "kicker": "Analysis",
        "columns": ["Advantages", "Limitations"],
        "rows": [
          {
            "label": "Speed",
            "values": ["bahut fast, O(n·k·d·i)", "har iteration poora data scan karta hai"]
          },
          {
            "label": "Simple",
            "values": ["implement karna aasan, samjhana aasan", "k pehle se dena padta hai"]
          },
          {
            "label": "Result",
            "values": ["tight spherical clusters par excellent", "local optimum par atak jaata hai"]
          },
          {
            "label": "Init",
            "values": ["k-means++ se stable", "random init se result badal jaata hai"]
          },
          {
            "label": "Outliers",
            "values": ["scaled data par theek", "mean hone se outliers se bigadta hai"]
          },
          {
            "label": "Shape",
            "values": ["circular/blobby data par best", "elongated, moon, ring shapes par fail"]
          },
          {
            "label": "Data type",
            "values": ["numerical, dense", "categorical ke liye K-modes chahiye"]
          }
        ],
        "columnColors": ["#00ff88", "#ff7a90"]
      },
      {
        "type": "diagram",
        "title": "K-Means Clustering",
        "kicker": "Diagram",
        "diagram": "ds4-kmeans",
        "caption": "Centroid → assign → recompute loop, WCSS aur solved 1-D example"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**K-means** = centroid-based partitioning; objective **WCSS** minimise.",
          "**Loop:** assign points to nearest centroid → centroid = mean → repeat till stable.",
          "**Complexity:** O(n · k · d · iterations) — fast aur simple.",
          "**Problems:** k pehle dena, local optimum, outliers, sirf spherical clusters.",
          "**Fixes:** k-means++ init, n_init = 10, scaling, elbow/silhouette se k.",
          "**Example:** points 1,2,3,10,11,12 → centroids 2 aur 11, WCSS 4."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the K-means clustering algorithm with its steps and objective function.",
        "answer": "**K-means** ek partitioning clustering algorithm hai jo data ko **k clusters** mein baantta hai, har cluster ka ek **centroid** (mean) hota hai.\n\n**Objective (WCSS / inertia):** J = Σk Σ(x∈Ck) ||x − μk||² — har point se uske centroid tak ki squared distance ka total minimise karna.\n\n**Steps:**\n1. **k choose karo** (elbow / silhouette se) aur features scale karo.\n2. **Initialise** k centroids — random ya k-means++.\n3. **Assignment step:** har point ko nearest centroid wale cluster mein daalo.\n4. **Update step:** har centroid = uske members ka mean.\n5. **Repeat** 3–4 jab tak assignments stable na hon, centroid shift ~0 na ho, ya max iterations na ho.\n6. **Output:** final clusters + centroids; quality WCSS/silhouette se report karo.\n\n**Example:** 1, 2, 3, 10, 11, 12 with k = 2 → centroids 2 aur 11, WCSS = 4.\n\n**Complexity:** O(n · k · d · i) — large data ke liye fast, isliye industry ka default clustering.\n\n**Diagram:** Refer to K-Means Clustering diagram."
      },
      {
        "question": "Discuss the limitations of K-means and how they can be addressed.",
        "answer": "**Limitations:**\n1. **k pehle se dena padta hai** — galat k se meaningless clusters; fix: elbow method, silhouette, gap statistic.\n2. **Local optimum** — initial centroids par result depend; fix: k-means++, n_init = 10, k-means|| se multiple runs.\n3. **Outliers** — mean se centroid khinch jaata hai; fix: outlier removal, winsorising ya **k-medoid**.\n4. **Shape assumption** — sirf spherical, similar-size clusters; fix: DBSCAN, spectral clustering, GMM.\n5. **Categorical data** — mean ka koi matlab nahi; fix: K-modes ya K-prototypes.\n6. **Density variation** — kam density wale clusters toot jaate hain; fix: DBSCAN / HDBSCAN.\n7. **Scaling ke bina** — bada-range feature dominate; fix: z-score / min-max.\n\n**Example:** ring-shaped data par k-means do aadhe golay (semi-circles) bana deta hai, jabki DBSCAN poori ring ek cluster maanta hai.\n\n**Diagram:** Refer to K-Means Clustering diagram."
      },
      {
        "question": "What is WCSS? How is the best value of k chosen for K-means?",
        "answer": "**WCSS (Within-Cluster Sum of Squares)** = har point se uske centroid tak ki squared distances ka sum: **J = Σk Σ(x∈Ck) ||x − μk||²**. Ye batata hai clusters kitne **tight** hain — kam WCSS achha.\n\n**Property:** k badhane par WCSS **hamesha ghatta** hai (k = n par 0 ho jaata hai), isliye kam se kam WCSS wala k chunna galat hai.\n\n**Best k kaise chunein:**\n1. **Elbow method** — k = 1, 2, 3, … par WCSS plot karo; jahan curve kee saaf \"kohni\" (bend) banti hai wahan k chuno. Jaise WCSS 500 → 250 → **120 → 100 → 90** ho to elbow 3 par hai.\n2. **Silhouette score** — s = (b − a)/max(a, b); 1 ke kareeb achha, 0 overlap, negative galat cluster.\n3. **Gap statistic / Calinski-Harabasz / Davies-Bouldin** — alternatives.\n4. **Domain knowledge** — business ke hisaab se (jaise 4 customer segments).\n\n**Example:** points 1, 2, 3, 10, 11, 12 par k = 2 → WCSS 4; k = 3 → ~0.67, lekin elbow graph saaf 2 par bend dikhata hai.\n\n**Diagram:** Refer to K-Means Clustering diagram."
      }
    ]
  },
  {
    "id": "k-medoid",
    "number": "4.3",
    "title": "K-Medoid (PAM) Algorithm",
    "subtitle": "Medoid based clustering, BUILD aur SWAP steps, outliers ke against robust",
    "icon": "target",
    "accent": "#00ff88",
    "englishDefinition": "K-medoid (Partitioning Around Medoids, PAM) is a partitioning clustering algorithm similar to k-means, but instead of computing a mean centroid it chooses k actual data points, called medoids, as cluster representatives. Every point is assigned to the nearest medoid, and the total dissimilarity (the cost) is minimised. PAM has two phases: BUILD, which greedily selects the initial k medoids, and SWAP, which repeatedly replaces a medoid with a non-medoid point whenever that reduces the total cost. Because a medoid is a real object, the algorithm works with any distance or dissimilarity matrix (Manhattan, cosine, edit distance) and is robust to outliers, but it is computationally expensive, O(k(n-k)²) per iteration, which is why CLARA and CLARANS sample the data.",
    "intro": "K-means ka centroid ek **average** hota hai — wo actual data point nahi hota, aur ek outlier use bahut khinch deta hai. K-medoid iska ilaaj hai: cluster ka representative **asli data point** chuno (medoid). Sabse \"beech mein\" baithne wala member medoid banta hai. Iska fayda ye hai ki outlier ka asar kam hota hai aur koi bhi distance metric chal jaata hai — chahe wo Manhattan ho, cosine ho ya edit distance.",
    "sections": [
      {
        "type": "definition",
        "title": "K-Medoid Kya Hai",
        "kicker": "Definition",
        "body": "K-medoid ek **partitioning clustering** algorithm hai jisme cluster ka representative **actual data point** hota hai — usse **medoid** kehte hain. Medoid wo point hai jiski cluster ke baaki sabhi points se **total dissimilarity sabse kam** ho. Objective:\n**Cost = Σ(x ∈ C) distance(x, medoid)** — isi ko minimise karna hai.",
        "body2": "PAM (Partitioning Around Medoids) ke **do phases** hain: **BUILD** — greedy tarike se shuruaati k medoids chunte hain (har baar wo point jo cost sabse zyada kam kare); **SWAP** — phir har medoid ko kisi non-medoid point se replace karke dekhte hain, agar total cost kam hota hai to swap accept kar lete hain. Jab koi swap improve na kare, algorithm ruk jaata hai.",
        "chips": ["Medoid = real point", "Cost minimise", "BUILD + SWAP", "Robust", "Any distance"]
      },
      {
        "type": "points",
        "title": "PAM Algorithm — Steps",
        "kicker": "Algorithm",
        "points": [
          "**Step 1:** k chuno aur dissimilarity matrix (n × n) banao — koi bhi metric chalega.",
          "**Step 2 (BUILD):** shuruaati medoid wo point jo cluster ka \"centre\" ho; phir har agla medoid chuno jo total cost sabse zyada kam kare (greedy).",
          "**Step 3 (assignment):** har point ko nearest medoid wale cluster mein daalo.",
          "**Step 4 (SWAP):** har (medoid, non-medoid) pair try karo — replace karne par cost kam hota hai kya? Sabse achha swap accept karo.",
          "**Step 5:** repeat karo jab tak koi swap cost improve na kare.",
          "**Complexity:** har iteration O(k · (n − k)²) — bade n ke liye mehnga. Isliye **CLARA** (sampling) aur **CLARANS** (randomised search) use hote hain."
        ]
      },
      {
        "type": "points",
        "title": "Solved Example — Outlier Ka Khel",
        "kicker": "Numbers",
        "points": [
          "**Data:** 1, 2, 3, 10, 11, 12. k = 2.",
          "**K-means ke centroid:** (1,2,3) ka mean **2** aur (10,11,12) ka mean **11** — dono real points nahi.",
          "**K-medoid ke medoids:** **2** aur **11** — kyunki 2 ki cluster ke baaki points se total distance (1 + 0 + 1) = 2, aur 11 ki (1 + 0 + 1) = 2; yahi minimum hai. Yahan medoid actual data point hai.",
          "**Ab outlier 100 jodo (1, 2, 3, 10, 11, 12, 100):** k-means ka doosra centroid (10 + 11 + 12 + 100)/4 = **33.25** ban jaata hai — poora cluster galat jagah khisak jaata hai.",
          "**K-medoid:** medoid **11** hi rehta hai (kyunki 11 ki total distance minimum hai), outlier ka asar sirf apne aap tak seemit rehta hai. **Yahi robustness hai.**",
          "**Cost:** medoid 11 ke saath cluster (10, 11, 12, 100) ka cost = 1 + 0 + 1 + 89 = 91 — compare karo mean 33.25 se: |10−33.25| + |11−33.25| + |12−33.25| + |100−33.25| = 23.25 + 22.25 + 21.25 + 66.75 = 133.5."
        ]
      },
      {
        "type": "comparison",
        "title": "K-Means vs K-Medoid",
        "kicker": "Comparison",
        "columns": ["K-Means", "K-Medoid (PAM)"],
        "rows": [
          {
            "label": "Representative",
            "values": ["mean centroid (imaginary point)", "actual data point (medoid)"]
          },
          {
            "label": "Distance",
            "values": ["mostly Euclidean (mean ke liye zaroori)", "koi bhi dissimilarity matrix"]
          },
          {
            "label": "Outliers",
            "values": ["bahut sensitive", "robust"]
          },
          {
            "label": "Cost",
            "values": ["WCSS (squared distance)", "sum of dissimilarities"]
          },
          {
            "label": "Complexity",
            "values": ["O(n · k · d · i) — fast", "O(k(n−k)²) per iter — slow"]
          },
          {
            "label": "Speed fix",
            "values": ["k-means++ / mini-batch", "CLARA sampling, CLARANS"]
          },
          {
            "label": "Output",
            "values": ["centroid values (interpret karna mushkil)", "real points — business ko samjhana aasan"]
          },
          {
            "label": "Data type",
            "values": ["numeric only", "numeric, categorical, mixed, strings"]
          }
        ],
        "columnColors": ["#ff0080", "#00ff88"]
      },
      {
        "type": "points",
        "title": "Pros, Cons Aur Applications",
        "kicker": "Analysis",
        "points": [
          "**Pros:** outliers ke against robust (medoid mean se nahi khinchta); kisi bhi distance metric ke saath kaam karta hai (Manhattan, cosine, edit distance); output real objects hote hain, isliye interpretation aasan (\"representative customer\"); missing values ke saath bhi flexible.",
          "**Cons:** computationally mehnga — PAM bade dataset par slow; k pehle dena padta hai; CLARA/CLARANS sampling se accuracy thodi kam ho sakti hai.",
          "**Applications:** customer/persona selection (representative customer), image and document clustering, medical patient grouping, facility location (jo medoid chuno wahan warehouse kholo), outlier-tolerant segmentation.",
          "**Exam line:** \"K-medoid medoid (real data point) use karta hai, isliye outliers ke against robust hai aur arbitrary distance metrics support karta hai.\""
        ]
      },
      {
        "type": "diagram",
        "title": "K-Medoid (PAM)",
        "kicker": "Diagram",
        "diagram": "ds4-kmedoid",
        "caption": "Medoid vs centroid, BUILD aur SWAP steps, output ka example"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Medoid** = cluster ka actual data point jiski total dissimilarity minimum ho.",
          "**PAM phases:** BUILD (initial medoids) → SWAP (medoid ↔ non-medoid agar cost kam ho).",
          "**Cost** = Σ distance(x, medoid) — squared nahi, seedhi dissimilarity.",
          "**Outliers:** k-medoid robust, k-means ka mean khinch jaata hai.",
          "**Complexity:** O(k(n−k)²) — slow; CLARA/CLARANS se speed up.",
          "**Example:** 1,2,3,10,11,12 → medoids 2 aur 11 (real points)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the K-medoid algorithm. How is it different from K-means?",
        "answer": "**K-medoid (PAM)** ek partitioning clustering algorithm hai jisme cluster ka representative ek **actual data point (medoid)** hota hai — wo point jiski cluster ke baaki points se total dissimilarity minimum ho.\n\n**Objective:** minimise Cost = Σ distance(x, medoid).\n\n**PAM ke steps:**\n1. Dissimilarity matrix banao (koi bhi metric).\n2. **BUILD:** greedily k initial medoids chuno (jo cost sabse zyada kam karein).\n3. Har point ko nearest medoid wale cluster mein daalo.\n4. **SWAP:** medoid ko non-medoid se replace karke dekho — cost kam hua to swap accept karo.\n5. Repeat jab tak koi improving swap na mile.\n\n**K-means se difference:** k-means centroid (mean) use karta hai jo imaginary point hota hai, Euclidean distance maangta hai, outliers se bigadta hai aur fast hai; k-medoid real point use karta hai, koi bhi distance matrix chal jaata hai, outliers ke against robust hai, par mehnga hai (O(k(n−k)²)).\n\n**Diagram:** Refer to K-Medoid (PAM) diagram."
      },
      {
        "question": "Explain the BUILD and SWAP phases of PAM with an example.",
        "answer": "**BUILD phase (initialisation):**\n- Pehla medoid wo point chunte hain jo total cost sabse kam kare (ya jo \"centre\" ho).\n- Uske baad har agla medoid greedy tarike se chunte hain: har candidate point ke liye dekhte hain ki total dissimilarity kitni kam hoti hai, aur sabse bada improvement wala point medoid ban jaata hai.\n- Ye phase O(k·n²) leta hai.\n\n**SWAP phase (improvement):**\n- Har pair (medoid m, non-medoid h) ke liye cost change Δ calculate karte hain.\n- Agar koi swap total cost kam karta hai to sabse achha swap accept kar lete hain (medoid m hata, h le aao).\n- Ye repeat hota hai jab tak koi improving swap na bache — tab local optimum mil gaya.\n- Har iteration O(k(n−k)²).\n\n**Example:** data 1, 2, 3, 10, 11, 12 with k = 2 → medoids **2** aur **11** (dono real points, cost 2 + 2 = 4). Ab 100 outlier jodo: medoid 11 hi rehta hai, k-means ka centroid 33.25 ban kar bigad jaata.\n\n**Diagram:** Refer to K-Medoid (PAM) diagram."
      },
      {
        "question": "Why is K-medoid considered robust to outliers? What are its limitations?",
        "answer": "**Robustness ka reason:** medoid ek **actual data point** hota hai aur objective **total dissimilarity** (absolute distances ka sum) minimise karta hai. K-means ka centroid **mean** hota hai, aur mean ek bade outlier se poora khinch jaata hai (kyunki outlier distance ko square bhi karta hai).\n\n**Example:** 1, 2, 3, 10, 11, 12, 100 mein k-means ka centroid (10,11,12,100) ka 33.25 ban jaata hai — cluster ka matlab hi badal gaya. K-medoid medoid 11 rakhta hai, outlier apne aap par rehta hai.\n\n**Limitations:**\n1. **Computationally expensive** — O(k(n−k)²) per iteration, lakhs of rows par impractical; CLARA (sampling) ya CLARANS (randomised search) chahiye.\n2. **k pehle se dena padta hai** — elbow/silhouette se choose karo.\n3. **Local optimum** — initial medoids par depend karta hai.\n4. Sampling wale variants (CLARA) mein accuracy thodi kam ho sakti hai.\n5. Bade data par dissimilarity matrix ka memory O(n²) hota hai.\n\n**Diagram:** Refer to K-Medoid (PAM) diagram."
      }
    ]
  },
  {
    "id": "hierarchical-clustering",
    "number": "4.4",
    "title": "Hierarchical Clustering",
    "subtitle": "Agglomerative aur divisive approach, linkage methods aur dendrogram",
    "icon": "layers",
    "accent": "#ff8800",
    "englishDefinition": "Hierarchical clustering builds a nested tree of clusters instead of a single flat partition. Agglomerative (bottom-up) clustering starts with every point as its own cluster and repeatedly merges the two closest clusters until one cluster remains. Divisive (top-down) clustering starts with one cluster containing all points and repeatedly splits it into smaller clusters. The order of merges or splits is shown by a dendrogram, a tree diagram whose height represents the distance at which two clusters were joined; cutting the dendrogram at a chosen height gives the final clusters. The distance between clusters is defined by a linkage rule: single (minimum), complete (maximum), average, centroid or Ward. Hierarchical clustering needs no value of k in advance and is deterministic, but it is expensive, typically O(n²) memory and O(n³) time, and once a merge is made it cannot be undone.",
    "intro": "Hierarchical clustering clusters ka ek **pedigree** banata hai — chhote groups ko jodte-jodte ek bada group, aur us poore process ka diagram **dendrogram**. Iska sabse bada fayda: aapko pehle se **k batana hi nahi** padta — dendrogram ko jis height par kaato, utne clusters mil jaate hain. Do tareeke hain: **agglomerative** (neeche se upar — har point alag, phir milate jao) aur **divisive** (upar se neeche — sab ek saath, phir todte jao).",
    "sections": [
      {
        "type": "definition",
        "title": "Hierarchical Clustering Kya Hai",
        "kicker": "Definition",
        "body": "Hierarchical clustering clusters ka ek **nested hierarchy (tree)** banata hai, flat partition nahi. Iska output **dendrogram** hota hai — har merge/split ka level (height) dikhane wala tree. Dendrogram ko kisi height par **cut** karke clusters milte hain, isliye **k pehle se dene ki zaroorat nahi** hoti.",
        "body2": "**Agglomerative (bottom-up):** har point apna cluster → sabse paas ke do clusters merge → repeat jab tak ek hi cluster bache. Ye sabse common hai.\n**Divisive (top-down):** shuru mein ek cluster (saare points) → har step par sabse \"kharab\" cluster ko do mein todo → repeat. DIANA iska example hai; ye mehnga hota hai (har split ke liye saare possible splits dekhne padte hain).",
        "chips": ["Dendrogram", "No k needed", "Agglomerative", "Divisive", "Linkage"]
      },
      {
        "type": "cards",
        "title": "Linkage Methods",
        "kicker": "Linkage",
        "cards": [
          {
            "icon": "ruler",
            "title": "Single Linkage",
            "body": "Do clusters ke **sabse paas** wale points ki distance (min). Lambi chains bana deta hai (chaining effect)."
          },
          {
            "icon": "target",
            "title": "Complete Linkage",
            "body": "Do clusters ke **sabse door** wale points ki distance (max). Compact, tight clusters deta hai; outliers se disturb."
          },
          {
            "icon": "metrics",
            "title": "Average Linkage",
            "body": "Saare cross pairs ki **average** distance (UPGMA). Single aur complete ke beech ka balance."
          },
          {
            "icon": "chart",
            "title": "Centroid Linkage",
            "body": "Clusters ke centroids ke beech ki distance. Inversions aa sakti hain (dendrogram ulta)."
          },
          {
            "icon": "layers",
            "title": "Ward Method",
            "body": "Merge jo **WCSS ka increase sabse kam** kare. Squared Euclidean par chalta hai, compact clusters — practice mein best."
          },
          {
            "icon": "grid",
            "title": "Kya farak padta hai",
            "body": "Linkage badalne se cluster shape badalta hai: single = lambi chain, complete = chhote gol, Ward = balanced."
          }
        ]
      },
      {
        "type": "points",
        "title": "Agglomerative — Solved Example",
        "kicker": "Numbers",
        "points": [
          "**Data (1-D):** 1, 2, 4, 9. Distance matrix: d(1,2) = 1, d(1,4) = 3, d(1,9) = 8, d(2,4) = 2, d(2,9) = 7, d(4,9) = 5.",
          "**Step 1 (single linkage):** sabse chhoti distance 1 → **{1, 2}** merge at height **1**.",
          "**Step 2:** distances ab {1,2}–4 = min(3, 2) = **2**; {1,2}–9 = min(8, 7) = 7; 4–9 = 5. Sabse chhoti 2 → **{1, 2, 4}** at height **2**.",
          "**Step 3:** {1,2,4}–9 = min(8, 7, 5) = **5** → **{1, 2, 4, 9}** at height **5**.",
          "**Dendrogram heights:** 1 → 2 → 5. Cut at height 3 → clusters **[1, 2, 4]** aur **[9]**; cut at 1.5 → **[1, 2]**, **[4]**, **[9]**.",
          "**Complete linkage se farak:** {1,2}–4 = max(3, 2) = 3, isliye merge order badal jaata hai — linkage choice result badalti hai."
        ]
      },
      {
        "type": "comparison",
        "title": "Agglomerative vs Divisive",
        "kicker": "Comparison",
        "columns": ["Agglomerative (bottom-up)", "Divisive (top-down)"],
        "rows": [
          {
            "label": "Start",
            "values": ["n clusters, har point alag", "1 cluster, saare points saath"]
          },
          {
            "label": "Operation",
            "values": ["closest clusters merge", "sabse bada/kharab cluster split"]
          },
          {
            "label": "Direction",
            "values": ["neeche se upar", "upar se neeche"]
          },
          {
            "label": "Complexity",
            "values": ["O(n³) time, O(n²) memory", "aur bhi mehnga — O(2ⁿ) possible splits"]
          },
          {
            "label": "Popularity",
            "values": ["bahut zyada use (scipy, sklearn)", "kam; DIANA example"]
          },
          {
            "label": "Advantage",
            "values": ["simple, deterministic", "top-level structure par focus"]
          },
          {
            "label": "Weakness",
            "values": ["early merge undo nahi hota", "split ke liye poora search"]
          }
        ],
        "columnColors": ["#ff8800", "#00d4ff"]
      },
      {
        "type": "points",
        "title": "Pros, Cons Aur Applications",
        "kicker": "Analysis",
        "points": [
          "**Pros:** k pehle se dene ki zaroorat nahi; **dendrogram** poora hierarchy dikhata hai (analysis ke liye best); deterministic — same data par same result; kisi bhi distance metric/linkage ke saath kaam karta hai; chhote-medium data par excellent.",
          "**Cons:** **O(n²) memory aur O(n³) time** — lakhs rows par impractical; ek baar merge ho gaya to undo nahi hota (greedy); noise aur outliers se sensitive (single linkage chain bana deta hai); linkage choice result badal deti hai.",
          "**Applications:** taxonomy/phylogenetic trees (biology), document and gene clustering, customer segmentation, image segmentation, market research, koi bhi scenario jahan hierarchy chahiye.",
          "**Speed-up:** scipy `linkage` par `method=ward`, ya pehle k-means se micro-clusters banao (BIRCH), phir un par hierarchical chalao."
        ]
      },
      {
        "type": "diagram",
        "title": "Hierarchical Clustering",
        "kicker": "Diagram",
        "diagram": "ds4-hierarchical",
        "caption": "Bottom-up merges, dendrogram heights aur cut laga kar clusters nikalna"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Hierarchical** = nested tree (dendrogram); **k pehle se nahi chahiye**, cut se milta hai.",
          "**Agglomerative** = bottom-up merge (common); **Divisive** = top-down split (DIANA).",
          "**Linkage:** single (min), complete (max), average, centroid, **Ward** (WCSS increase minimum).",
          "**Complexity:** O(n²) memory, O(n³) time — bade data par slow.",
          "**Example:** 1, 2, 4, 9 → merges at heights 1 → 2 → 5.",
          "**Limit:** merge undo nahi hota; outlier single-link par chain bana deta hai."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain hierarchical clustering. Differentiate between agglomerative and divisive clustering.",
        "answer": "**Hierarchical clustering** clusters ka ek **nested tree (dendrogram)** banata hai; kisi height par cut karke required number of clusters mil jaate hain — isliye k pehle dene ki zaroorat nahi hoti.\n\n**Agglomerative (bottom-up):** har point apna cluster → sabse paas ke do clusters merge → repeat jab tak ek cluster bache. Complexity O(n²) memory, O(n³) time.\n\n**Divisive (top-down):** ek cluster se shuru → har step par sabse bada/kharab cluster do mein split → repeat. DIANA iska example hai; computation zyada mehnga.\n\n| Point | Agglomerative | Divisive |\n|---|---|---|\n| Start | n clusters | 1 cluster |\n| Operation | merge closest | split worst |\n| Direction | bottom-up | top-down |\n| Use | bahut common | kam common |\n\n**Example:** 1, 2, 4, 9 par single linkage → merges at heights 1 ({1,2}), 2 ({1,2,4}), 5 (sab) → cut at 3 se [1,2,4] aur [9].\n\n**Diagram:** Refer to Hierarchical Clustering diagram."
      },
      {
        "question": "Explain the linkage methods used in hierarchical clustering.",
        "answer": "**Linkage** batati hai ki do clusters ke beech ki distance kaise naapi jaaye:\n\n1. **Single linkage (minimum):** do clusters ke sabse paas wale point ki distance. Long chain banata hai (chaining effect), kyunki ek point kaafi hai judne ke liye.\n2. **Complete linkage (maximum):** sabse door wale points ki distance. Compact, tight clusters deta hai, par outliers se disturb hota hai.\n3. **Average linkage (UPGMA):** saare cross-pairs ki average distance. Single aur complete ke beech ka balance.\n4. **Centroid linkage:** clusters ke centroids ke beech ki distance — inversions aa sakti hain.\n5. **Ward method:** merge jo within-cluster variance (WCSS) ka increase sabse kam kare; squared Euclidean par chalta hai, compact balanced clusters deta hai — **practice mein best default**.\n\n**Formula (Lance-Williams):** naye cluster ki distance update har linkage ka apna formula hota hai, isliye linkage badalne se dendrogram ka shape badal jaata hai.\n\n**Diagram:** Refer to Hierarchical Clustering diagram."
      },
      {
        "question": "What are the advantages and limitations of hierarchical clustering? How is the dendrogram interpreted?",
        "answer": "**Advantages:** k pehle se dene ki zaroorat nahi; poora hierarchy (dendrogram) milta hai; deterministic result; koi bhi distance/linkage chal jaata hai; chhote-medium data par bahut informative; clusters ko baad mein bhi cut karke dekh sakte hain.\n\n**Limitations:** O(n²) memory aur O(n³) time — bade data par impractical; greedy merge undo nahi hota; noise/outliers se sensitive; linkage ka choice result badal deta hai; kuch linkage par inversions aa sakti hain.\n\n**Dendrogram interpretation:**\n- Har **leaf** ek data point/record hai.\n- **Y-axis (height)** = us merge ki distance (ya dissimilarity) — jitna upar, utne alag clusters.\n- **U-shaped branch** ke do arms = do clusters jo us height par mile.\n- **Cut** kisi height par lagao → jitni vertical lines cut karti hain, utne clusters.\n- Example 1, 2, 4, 9: heights 1 ({1,2}), 2 ({1,2,4}), 5 (sab) — cut at 3 → [1,2,4] aur [9].\n\n**Diagram:** Refer to Hierarchical Clustering diagram."
      }
    ]
  },
  {
    "id": "clustering-evaluation",
    "number": "4.5",
    "title": "Clustering Evaluation — Elbow Method",
    "subtitle": "WCSS curve, elbow point, silhouette score aur internal validation",
    "icon": "chart",
    "accent": "#aa00ff",
    "englishDefinition": "Clustering evaluation judges how good a clustering is. When true labels are unavailable (internal evaluation) the two standard tools are the elbow method and the silhouette coefficient. The elbow method computes the within-cluster sum of squares (WCSS) for a range of k values and plots WCSS against k; because WCSS always decreases as k grows, the chosen k is the point where the curve bends sharply, that is the elbow, after which extra clusters give little reduction. The silhouette coefficient for a point is s = (b - a) / max(a, b), where a is the mean distance to points in its own cluster and b the mean distance to the nearest other cluster; the score ranges from -1 to 1 and averages over points. External validation compares clusters with known labels using purity, rand index or adjusted mutual information.",
    "intro": "Clustering mein \"sahi answer\" nahi hota, isliye quality naapni padti hai. Sabse simple tareeka hai **elbow method**: k = 1, 2, 3, … ke liye WCSS nikaalo aur graph banao. WCSS hamesha girti hai, lekin ek point ke baad girti hai **dheere** — wahi kohni (**elbow**) best k batati hai. Elbow ke saath **silhouette score** dekho — wo batata hai points apne cluster mein ghusey hue hain ya do clusters ke beech phanse hue hain.",
    "sections": [
      {
        "type": "definition",
        "title": "Clustering Evaluation Kya Hai",
        "kicker": "Definition",
        "body": "Clustering evaluation batati hai ki banaye gaye clusters kitne **achhe** hain. Do tarah ki validation hoti hai:\n**Internal** (labels nahi hote) — **elbow method (WCSS)**, **silhouette**, Davies-Bouldin, Calinski-Harabasz.\n**External** (sahi labels pata hon) — purity, Rand index, adjusted Rand index, mutual information.\nKyunki clustering unsupervised hai, internal measures hi roz kaam aate hain.",
        "body2": "**Elbow method** ka core: k badhane par **WCSS hamesha ghatta** hai (k = n par 0). Isliye \"sabse kam WCSS\" wala k galat hai — jo **bend** (kohni) aata hai, wahan se aage fayda kam aur complexity zyada hoti hai. **Silhouette** har point ke liye s = (b − a)/max(a, b) nikaalta hai; +1 matlab perfect cluster, 0 matlab boundary par, negative matlab galat cluster.",
        "chips": ["WCSS curve", "Elbow point", "Silhouette", "Internal metric", "k choose karna"]
      },
      {
        "type": "points",
        "title": "Elbow Method — Step by Step",
        "kicker": "Algorithm",
        "points": [
          "**Step 1:** data scale karo (distance-based clustering ke liye zaroori).",
          "**Step 2:** k = 1, 2, 3, … (jaise 1 se 10) ke liye alag-alag k-means chalao.",
          "**Step 3:** har k par **WCSS / inertia** note karo: J = Σk Σ(x∈Ck) ||x − μk||².",
          "**Step 4:** x-axis par k, y-axis par WCSS plot karo — line hamesha neeche ki taraf jaayegi.",
          "**Step 5:** jahan curve **tezi se girna band** kar de aur saaf kohni (bend) bane, wahi k chuno.",
          "**Step 6:** us k ko silhouette score aur business sense se verify karo.",
          "**Note:** bend ambiguous ho sakta hai — tab silhouette, gap statistic ya domain knowledge se decide karo."
        ]
      },
      {
        "type": "points",
        "title": "Elbow Example Aur Silhouette Formula",
        "kicker": "Numbers",
        "points": [
          "**Elbow table (typical 2-D data):** k = 1 → WCSS **500**; k = 2 → **250**; k = 3 → **120**; k = 4 → **100**; k = 5 → **90**; k = 6 → **82**.",
          "**Drops:** 250 → 130 → 20 → 10 → 8. Sabse bada drop 2 par hai, par uske baad curve saaf mudta hai 3 par — **elbow = 3**.",
          "**Silhouette (per point):** a = apne cluster ke points se average distance, b = nearest doosre cluster ke points se average distance.",
          "**s = (b − a)/max(a, b):** +1 = bilkul apne cluster mein, 0 = dono clusters ke beech, −1 = galat cluster mein.",
          "**Average silhouette > 0.5** → strong structure; 0.25–0.5 → reasonable; < 0.25 → weak/no structure.",
          "**Silhouette ka fayda:** elbow ka ambiguity nahi — har k ke liye ek score milta hai, sabse zyada score wala k best."
        ]
      },
      {
        "type": "comparison",
        "title": "Elbow vs Silhouette",
        "kicker": "Comparison",
        "columns": ["Elbow (WCSS)", "Silhouette Score"],
        "rows": [
          {
            "label": "Kya naapta hai",
            "values": ["cluster tightness (within)", "cohesion vs separation (dono)"]
          },
          {
            "label": "Formula",
            "values": ["J = Σ ||x − μk||²", "s = (b − a)/max(a, b)"]
          },
          {
            "label": "Range",
            "values": ["0 se ∞ (kam achha)", "−1 se +1 (zyada achha)"]
          },
          {
            "label": "Decision",
            "values": ["curve ka bend dekho", "max average score wala k"]
          },
          {
            "label": "Ambiguity",
            "values": ["bend clear na ho to mushkil", "number mil jaata hai"]
          },
          {
            "label": "Cost",
            "values": ["sasta (k-means ke saath free)", "O(n²) distances — mehnga"]
          },
          {
            "label": "Limitation",
            "values": ["k = n par WCSS 0; sirf k-means ke liye", "convex clusters par optimistic"]
          }
        ],
        "columnColors": ["#00d4ff", "#aa00ff"]
      },
      {
        "type": "points",
        "title": "Exam Points Aur Related Metrics",
        "kicker": "Notes",
        "points": [
          "**Elbow ka matlab:** us k se pehle WCSS tezi se girti hai, uske baad fayda kam — \"kohni\" wahi best k.",
          "**Davies-Bouldin** — kam achha (clusters ke beech average similarity); **Calinski-Harabasz** — zyada achha (between/within ratio).",
          "**External metrics:** purity (majority class ratio), Rand index, adjusted Rand index, NMI — jab labelled benchmark ho.",
          "**Stability check:** different seeds / bootstrap samples par same clusters mile to result bharosemand hai.",
          "**Business validation:** clusters ko profile karo (mean, size) aur dekho unka koi matlab banta hai ya nahi — statistical score akela kaafi nahi.",
          "**Exam line:** \"Elbow method WCSS vs k plot karke curve ke bend par k choose karta hai.\""
        ]
      },
      {
        "type": "diagram",
        "title": "Elbow Method",
        "kicker": "Diagram",
        "diagram": "ds4-elbow",
        "caption": "WCSS vs k curve, elbow point aur silhouette ka comparison"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Internal evaluation:** elbow (WCSS), silhouette, Davies-Bouldin, Calinski-Harabasz.",
          "**Elbow:** WCSS vs k plot → curve ke **bend** par k chuno.",
          "**WCSS** hamesha girti hai, isliye minimum WCSS par k chunna galat hai.",
          "**Silhouette** s = (b − a)/max(a,b): +1 best, 0 boundary, negative galat cluster.",
          "**Example:** WCSS 500, 250, 120, 100, 90 → elbow 3.",
          "**Verify:** silhouette + business interpretation + stability."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the elbow method for determining the number of clusters.",
        "answer": "**Elbow method** k choose karne ka standard tareeka hai jab true labels na hon.\n\n**Idea:** k-means har k ke liye **WCSS (within-cluster sum of squares)** minimise karta hai:\n**J = Σk Σ(x∈Ck) ||x − μk||²**\nk badhane par WCSS hamesha ghatti hai (k = n par 0 ho jaati hai) — isliye sabse kam WCSS wala k useful nahi hota.\n\n**Steps:**\n1. Data scale karo.\n2. k = 1 se 10 tak k-means chalao aur har k par WCSS note karo.\n3. k (x-axis) vs WCSS (y-axis) plot karo.\n4. Jahan curve tezi se girna band kare — wahi **elbow** — wahan ka k chuno.\n5. Silhouette score aur domain knowledge se verify karo.\n\n**Example:** WCSS 500 → 250 → 120 → 100 → 90 → 82. Drops 250, 130, 20, 10, 8 — bend 3 par, isliye **k = 3**.\n\n**Limitation:** bend hamesha saaf nahi hota; tab silhouette / gap statistic use karo.\n\n**Diagram:** Refer to Elbow Method diagram."
      },
      {
        "question": "What is the silhouette coefficient? How is it computed and interpreted?",
        "answer": "**Silhouette coefficient** batata hai ki koi point apne cluster mein kitna fit hai, compare karke nearest doosre cluster se.\n\n**Har point ke liye:**\n- **a** = usi cluster ke doosre points se average distance (cohesion).\n- **b** = nearest doosre cluster ke points se average distance (separation).\n- **s = (b − a) / max(a, b)**\n\n**Interpretation:**\n- s ≈ **+1** → point apne cluster mein achha fit hai, doosre se door.\n- s ≈ **0** → point dono clusters ki boundary par hai.\n- s **negative** → point galat cluster mein lagta hai (doosra cluster paas hai).\n\n**Overall score:** saare points ka average. > 0.5 strong structure, 0.25–0.5 reasonable, < 0.25 weak. Sabse zyada average silhouette wala k best.\n\n**Example:** k = 3 par average silhouette 0.62 aur k = 4 par 0.51 → k = 3 better.\n\n**Note:** silhouette O(n²) distances leta hai, isliye bade data par sample par compute karo.\n\n**Diagram:** Refer to Elbow Method diagram."
      },
      {
        "question": "Differentiate between internal and external clustering validation measures.",
        "answer": "**Internal validation** — sirf data aur clusters use karta hai (labels nahi chahiye), kyunki real clustering mein true labels hote hi nahi.\n- **Elbow / WCSS:** cluster tightness; curve ke bend par k.\n- **Silhouette:** cohesion vs separation, −1 se +1.\n- **Davies-Bouldin:** clusters ke beech average similarity — kam achha.\n- **Calinski-Harabasz:** between-cluster dispersion / within-cluster dispersion — zyada achha.\n\n**External validation** — known ground-truth labels ke against compare karta hai (benchmark/testing).\n- **Purity:** har cluster ka majority class ratio.\n- **Rand index / Adjusted Rand Index:** pair-wise agreement (ARI chance-corrected).\n- **NMI (Normalised Mutual Information):** cluster aur label ke beech information overlap.\n- **F-measure, homogeneity, completeness, V-measure.**\n\n| Point | Internal | External |\n|---|---|---|\n| Labels | nahi chahiye | chahiye |\n| Use | real-world clustering | research/benchmark |\n| Example | elbow, silhouette | purity, ARI, NMI |\n\n**Diagram:** Refer to Elbow Method diagram."
      }
    ]
  },
  {
    "id": "market-basket-analysis",
    "number": "4.6",
    "title": "Association Rule Mining and Market Basket Analysis",
    "subtitle": "Transactions, itemsets aur \"jo X kharidta hai wo Y bhi\" wale rules",
    "icon": "warehouse",
    "accent": "#00d4ff",
    "englishDefinition": "Association rule mining discovers interesting co-occurrence relationships in large transactional datasets. Given a set of transactions, each a set of items, it finds rules of the form X → Y (if X then Y), where X and Y are disjoint itemsets. Market basket analysis is its best-known application: analysing retail basket data to discover which products are bought together, in order to design cross-selling, store layout, bundling and recommendation strategies. Mining has two phases: generating all frequent itemsets whose support is at least the minimum support threshold, and generating rules from those itemsets that satisfy a minimum confidence threshold. The classic algorithms are Apriori (candidate generation with the downward closure property) and FP-Growth (pattern growth using a compressed FP-tree).",
    "intro": "Market basket analysis ka sawaal ekdum roz ka hai: **\"jo customer bread kharidta hai, wo doodh bhi kharidta hai kya?\"** Agar haan, to store doodh ko bread ke paas rakhe, ya \"bread + doodh\" ka combo offer banaye. Isi pattern ko mathematically likhne ka tareeka hai **association rule** — X → Y. Do cheezein naapni padti hain: rule kitni baar aaya (**support**) aur X hone par Y kitni baar aaya (**confidence**).",
    "sections": [
      {
        "type": "definition",
        "title": "Association Rule Mining Kya Hai",
        "kicker": "Definition",
        "body": "Association rule mining bade transactional data mein aise co-occurrence patterns dhoondhta hai jo ek saath aate hain. Rule ka form hota hai **X → Y** (\"jo X kharidta hai wo Y bhi kharidta hai\"), jahan X aur Y disjoint itemsets hain.\n**Market basket analysis** iska sabse famous application hai — retail baskets se pata karna ki kaun se products saath bikte hain, taaki **cross-selling, store layout, bundling aur recommendation** design ho saken.",
        "body2": "Basic shabdaavali: **transaction** (ek bill), **itemset** (items ka group), **k-itemset** (k items ka group), **frequent itemset** (jiska support ≥ minimum support ho), **rule** X → Y. Mining do phases mein hoti hai: **(1) frequent itemsets generate karo**, **(2) un itemsets se high-confidence rules banao**. Apriori aur FP-Growth inhi do phases ke algorithms hain.",
        "chips": ["X → Y rule", "Transaction data", "Frequent itemset", "2 phases", "Retail use case"]
      },
      {
        "type": "cards",
        "title": "Market Basket Analysis Ke Fayde",
        "kicker": "Applications",
        "cards": [
          {
            "icon": "money",
            "title": "Cross-selling",
            "body": "Jo saath bikte hain unka combo offer banao — \"laptop ke saath mouse\" — average basket value badhta hai."
          },
          {
            "icon": "grid",
            "title": "Store Layout",
            "body": "Saath bikne wale products paas-paas rakho, ya essential item store ke andar rakho taaki customer poora store ghume."
          },
          {
            "icon": "tag",
            "title": "Bundling & Pricing",
            "body": "Bundle discount (\"3 items lo, 10% off\"), loss-leader pricing, category management."
          },
          {
            "icon": "target",
            "title": "Recommendation",
            "body": "\"Is product ko dekhne wale ne ye bhi dekha\" — e-commerce recommendation engine ka base."
          },
          {
            "icon": "doc",
            "title": "Catalog Design",
            "body": "Kaun se products ek page/category mein aane chahiye, kaun se dead combos hain."
          },
          {
            "icon": "warn",
            "title": "Fraud / Medical",
            "body": "Suspicious item combinations detect karna (insurance claims), ya patient diagnosis + medicine patterns."
          }
        ]
      },
      {
        "type": "points",
        "title": "Terminology Aur Example Data",
        "kicker": "Example",
        "points": [
          "**Dataset (5 transactions):** T1 = {bread, milk}; T2 = {bread, diaper, beer, eggs}; T3 = {milk, diaper, beer, cola}; T4 = {bread, milk, diaper, beer}; T5 = {bread, milk, diaper, cola}.",
          "**Support count** = jitni transactions mein itemset aaya; **support** = count / N (yahan N = 5).",
          "**Rule:** {diaper} → {beer} — \"jo diaper leta hai wo beer bhi leta hai\".",
          "**Support of rule** = support({diaper, beer}) = 3/5 = **60%**.",
          "**Confidence of rule** = support({diaper, beer}) / support({diaper}) = 3/4 = **75%**.",
          "**Interpretation:** 60% baskets mein diaper+beer saath, aur diaper wale 75% baskets mein beer bhi — store layout ke liye strong signal."
        ]
      },
      {
        "type": "comparison",
        "title": "Association Rule Types",
        "kicker": "Types",
        "columns": ["Type", "Matlab"],
        "rows": [
          {
            "label": "Single-dimensional",
            "values": ["ek hi attribute par rules — \"bread → milk\" (items only)"]
          },
          {
            "label": "Multi-dimensional",
            "values": ["kai attributes/columns — \"age 25-35 + metro city → chips\""]
          },
          {
            "label": "Single-level",
            "values": ["abstraction ke ek level par — \"Lays → Coke\""]
          },
          {
            "label": "Multilevel",
            "values": ["general se specific — \"chips → cold drink\", \"Lays → Coke\""]
          },
          {
            "label": "Quantitative",
            "values": ["numeric ranges ke saath — \"qty 2-5 → discount coupon\""]
          },
          {
            "label": "Negative",
            "values": ["X → not Y — \"vegetarians milk → meat nahi\" (kam use)"]
          }
        ],
        "columnColors": ["#00d4ff", "#00ff88"]
      },
      {
        "type": "points",
        "title": "Pros, Cons Aur Exam Points",
        "kicker": "Analysis",
        "points": [
          "**Pros:** rules bahut **interpretable** hote hain (seedha business action); koi labelled data nahi chahiye; eda mein bahut valuable; Apriori/FP-Growth mature aur easy to implement.",
          "**Cons:** itemset space **exponential** (2^m), dense data par explosion; bahut zyada rules generate ho sakte hain (uninteresting bhi); support threshold ka choice tricky; rare-but-valuable patterns chhoot sakte hain.",
          "**Kyun poore rules nahi generate karte:** m items → 2^m itemsets, aur har itemset se multiple rules — isliye **support + confidence** thresholds se prune karna zaroori hai.",
          "**Phases:** (1) frequent itemset generation (support se), (2) rule generation (confidence se). Apriori phase 1 par focus karta hai kyunki wahi mehnga hai.",
          "**Exam line:** \"Market basket analysis association rules se pata karta hai ki kaun se items saath purchased hote hain.\""
        ]
      },
      {
        "type": "diagram",
        "title": "Market Basket Analysis",
        "kicker": "Diagram",
        "diagram": "ds4-market-basket",
        "caption": "Transactions → itemsets → rule X → Y aur business action"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Association rule:** X → Y — \"X kharidne wala Y bhi kharidta hai\".",
          "**MBA** = retail baskets se saath bikne wale products dhoondna (cross-sell, layout, bundling).",
          "**Terms:** transaction, itemset, support count, frequent itemset.",
          "**2 phases:** frequent itemset generation (support) → rule generation (confidence).",
          "**Example:** T1–T5 data par diaper → beer: support 60%, confidence 75%.",
          "**Algorithms:** Apriori (candidate + downward closure), FP-Growth (FP-tree, no candidates)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "What is association rule mining? Explain market basket analysis with an example.",
        "answer": "**Association rule mining** transactional data mein aise patterns (co-occurrences) dhoondhta hai jo ek saath aate hain. Rule ka form: **X → Y** — \"agar X kharida gaya to Y bhi kharida jaata hai\", jahan X aur Y disjoint itemsets hain.\n\n**Market basket analysis** iska sabse common application hai: retail bills (baskets) analyse karke pata karna ki kaun se products saath bikte hain, taaki **cross-selling, store layout, bundling, recommendation aur catalog design** ho saken.\n\n**Example data (N = 5):** T1 = {bread, milk}; T2 = {bread, diaper, beer, eggs}; T3 = {milk, diaper, beer, cola}; T4 = {bread, milk, diaper, beer}; T5 = {bread, milk, diaper, cola}.\n\n**Rule {diaper} → {beer}:**\n- Support = 3/5 = **60%** (kitne baskets mein dono saath).\n- Confidence = 3/4 = **75%** (diaper wale baskets mein beer kitni baar).\n- Business action: diaper ke paas beer rakho / combo offer banao.\n\n**Two phases:** (1) frequent itemsets generate karo (support ≥ minsup), (2) unse rules banao (confidence ≥ minconf).\n\n**Diagram:** Refer to Market Basket Analysis diagram."
      },
      {
        "question": "Explain the terminology used in association rule mining.",
        "answer": "**Transaction (T):** ek bill/record, jaise {bread, milk, diaper}.\n**Itemset:** items ka koi group; **k-itemset** = k items ka group.\n**Support count (X):** jitni transactions mein itemset X aaya.\n**Support:** support(X) = count(X)/N — itemset ka proportion. Rule X → Y ka support support(X ∪ Y) hota hai.\n**Frequent itemset:** jiska support ≥ minimum support threshold (minsup).\n**Association rule:** X → Y, jahan X (antecedent) aur Y (consequent) disjoint hain.\n**Confidence:** support(X ∪ Y)/support(X) = P(Y|X) — rule ki reliability.\n**Lift:** confidence/support(Y) — correlation; > 1 positive, = 1 independent, < 1 negative.\n**Minimum confidence (minconf):** threshold jo batata hai rule useful hai ya nahi.\n**Candidate itemset:** wo itemset jiska support abhi count karna hai (Apriori mein).\n\n**Example:** diaper → beer: support 3/5 = 60%, confidence 3/4 = 75%, lift 0.75/0.60 = 1.25.\n\n**Diagram:** Refer to Market Basket Analysis diagram."
      },
      {
        "question": "Why do we generate frequent itemsets first and then rules? Explain the two phases.",
        "answer": "**Kyun do phases:** itemset space **exponential** hai — m items se 2^m itemsets bante hain, aur har itemset se kai rules. Sab rules generate karke test karna computationally impossible hai. Isliye pehle **support** se itemsets prune karte hain (kam support = kam data = rule bhi kam useful), phir unse **confidence** se rules nikalte hain.\n\n**Phase 1 — frequent itemset generation:**\n- Har itemset ka support count karo.\n- minsup se kam wale hata do.\n- Apriori downward closure property use karta hai: agar ek itemset infrequent hai to uske saare supersets bhi infrequent honge.\n\n**Phase 2 — rule generation:**\n- Har frequent itemset ke saare non-empty splits (X → Y) banao.\n- Confidence = support(X∪Y)/support(X) nikaalo.\n- minconf se kam wale rules hata do.\n\n**Example:** frequent itemset {bread, milk, diaper} (support 2/5 = 40%) se rules: bread∧milk → diaper (conf 2/3 = 67%), bread∧diaper → milk (67%), milk∧diaper → bread (67%), bread → milk∧diaper (50%).\n\n**Diagram:** Refer to Market Basket Analysis diagram."
      }
    ]
  },
  {
    "id": "apriori-algorithm",
    "number": "4.7",
    "title": "Apriori Algorithm",
    "subtitle": "Downward closure property, candidate generation aur level-wise search",
    "icon": "etl",
    "accent": "#ff0080",
    "englishDefinition": "The Apriori algorithm mines frequent itemsets using a level-wise, breadth-first search based on the downward closure (anti-monotone) property: if an itemset is infrequent, all of its supersets must also be infrequent, and if an itemset is frequent, all of its subsets are frequent. Apriori first scans the database to find frequent 1-itemsets (L1), then repeatedly joins frequent (k-1)-itemsets to form candidate k-itemsets (Ck), prunes candidates that contain an infrequent subset, counts their support with another database scan and keeps those above minimum support. The loop stops when no candidate survives. Rules are then generated from the frequent itemsets subject to minimum confidence. It is simple and correct but needs k+1 database scans and can generate a huge number of candidates.",
    "intro": "Apriori ka poora dimaag ek hi line par chalta hai: **\"agar ek itemset frequent nahi hai, to uske saare bade versions bhi frequent nahi ho sakte.\"** Isse candidates ki sankhya bahut kam ho jaati hai. Algorithm level-by-level chalta hai — pehle 1-item sets, phir 2-item, phir 3-item… Har level par database dobara scan karke support count karta hai. Simple aur correct, par database ko baar-baar padhna iski sabse badi kamzori hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Apriori Algorithm Kya Hai",
        "kicker": "Definition",
        "body": "Apriori frequent itemsets dhoondhne ka **level-wise (breadth-first)** algorithm hai jo **downward closure property** par chalta hai:\n**Agar ek itemset infrequent hai, to uske saare supersets bhi infrequent honge** (aur agar frequent hai to uske saare subsets frequent honge).\nIsi property se candidates prune hote hain, warna 2^m itemsets check karne padte.",
        "body2": "Flow: database scan → **L1** (frequent 1-itemsets) → **join** karke **C2** candidates → subset prune → support count (dobara scan) → **L2** → C3 → … jab tak koi candidate na bache. Uske baad frequent itemsets se rules banao jo minconf pass karein. Isliye Apriori ko **k+1 database scans** chahiye (k = sabse bade frequent itemset ka size).",
        "chips": ["Downward closure", "Level-wise", "Candidate + prune", "k+1 scans", "Simple but slow"]
      },
      {
        "type": "points",
        "title": "Algorithm — Step by Step",
        "kicker": "Algorithm",
        "points": [
          "**Step 1:** database scan karo aur har item ka support count nikaalo → candidates C1.",
          "**Step 2 (prune):** support < minsup wale items hata do → **L1** frequent 1-itemsets.",
          "**Step 3 (join):** L(k−1) ke itemsets ko join karke C(k) banao — sirf wo pairs join karo jinke pehle (k−2) items same hon.",
          "**Step 4 (subset prune):** C(k) ke har candidate ke saare (k−1)-subsets check karo; koi subset L(k−1) mein nahi hai to candidate hatao.",
          "**Step 5 (count):** database scan karke candidates ka support count karo; minsup pass karne wale → **L(k)**.",
          "**Step 6:** repeat Step 3–5 jab tak koi candidate na bache.",
          "**Step 7 (rule generation):** har frequent itemset ke splits ke liye confidence nikaalo; minconf pass wale rules rakho."
        ]
      },
      {
        "type": "points",
        "title": "Solved Example — 5 Transactions, minsup = 40%",
        "kicker": "Worked Example",
        "points": [
          "**Data:** T1 {bread, milk} · T2 {bread, diaper, beer, eggs} · T3 {milk, diaper, beer, cola} · T4 {bread, milk, diaper, beer} · T5 {bread, milk, diaper, cola}. N = 5, **minsup = 40% = 2 transactions**.",
          "**C1 counts:** bread 4, milk 4, diaper 4, beer 3, cola 2, eggs 1 → **L1 = {bread, milk, diaper, beer, cola}** (eggs out).",
          "**L2 (8 pairs):** {beer,bread} 2 · {beer,diaper} 3 · {beer,milk} 2 · {bread,diaper} 3 · {bread,milk} 3 · {cola,diaper} 2 · {cola,milk} 2 · {diaper,milk} 3.",
          "**C3 candidates (join + prune):** {beer,bread,milk} banta hai par support 1 → out. Baaki: {beer,bread,diaper} 2 · {beer,diaper,milk} 2 · {bread,diaper,milk} 2 · {cola,diaper,milk} 2 → **L3 = 4 itemsets**.",
          "**C4:** {beer,bread,diaper,milk} ka subset {beer,bread,milk} frequent nahi tha, isliye **prune** ho jaata hai → L4 khaali → algorithm **stop**.",
          "**Rules from {bread, milk, diaper} (sup 40%):** bread∧milk → diaper = 2/3 = **67%**; bread∧diaper → milk = 67%; milk∧diaper → bread = 67%; bread → milk∧diaper = 2/4 = **50%**.",
          "**Note:** minsup kam karo to itemsets ki sankhya bahut tezi se badhti hai (combinatorial explosion) — yahi Apriori ki practical difficulty hai."
        ]
      },
      {
        "type": "comparison",
        "title": "Apriori ke Pros Aur Cons",
        "kicker": "Analysis",
        "columns": ["Advantages", "Limitations"],
        "rows": [
          {
            "label": "Simplicity",
            "values": ["implement karna aasan, logic clear", "simple hone ka matlab hamesha fast nahi"]
          },
          {
            "label": "Correctness",
            "values": ["complete frequent itemsets milte hain", "k+1 database scans — I/O heavy"]
          },
          {
            "label": "Pruning",
            "values": ["downward closure se search space chhota", "candidate generation still exponential"]
          },
          {
            "label": "Memory",
            "values": ["level-wise — ek time par ek level", "C2, C3 bahut bade ho sakte hain"]
          },
          {
            "label": "Dense data",
            "values": ["sparse retail baskets par theek", "dense data par bahut slow"]
          },
          {
            "label": "Rule quality",
            "values": ["support + confidence se interpretable", "rare patterns chhoot jaate hain"]
          }
        ],
        "columnColors": ["#00ff88", "#ff7a90"]
      },
      {
        "type": "points",
        "title": "Exam Points",
        "kicker": "Notes",
        "points": [
          "**Downward closure = anti-monotone property** — yahi Apriori ki jaan hai; isse hi supersets prune hote hain.",
          "**Join step condition:** do (k−1)-itemsets join karo agar unke pehle (k−2) items same hon (lexicographic order).",
          "**Prune step:** candidate ka koi bhi (k−1)-subset frequent na ho to candidate hatao.",
          "**Scans:** k+1 (L1 se Lk tak har level par ek scan) — FP-Growth isko sirf 2 scans mein karta hai.",
          "**Support vs confidence:** support itemset ki frequency, confidence rule ki reliability — dono thresholds alag hote hain.",
          "**Exam line:** \"Apriori downward closure property se candidates prune karke level-wise frequent itemsets dhoondhta hai.\""
        ]
      },
      {
        "type": "diagram",
        "title": "Apriori Algorithm",
        "kicker": "Diagram",
        "diagram": "ds4-apriori",
        "caption": "L1 → C2 → L2 → C3 level-wise flow aur prune ka example"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**Apriori** = level-wise frequent itemset mining; **downward closure** property par.",
          "**Steps:** count → prune (minsup) → join → subset prune → count → repeat.",
          "**Rule generation** baad mein: confidence se filter.",
          "**Scans:** k+1 — isliye I/O heavy; **candidates** bahut ban sakte hain.",
          "**Example:** 5 transactions, minsup 40% → L1 5 items, L2 8 pairs, L3 4 triples, L4 khaali.",
          "**Limit ka ilaaj:** FP-Growth (2 scans, koi candidate nahi)."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the Apriori algorithm with its steps and the downward closure property.",
        "answer": "**Apriori** frequent itemsets dhoondhne ka level-wise algorithm hai jo **downward closure (anti-monotone) property** par chalta hai:\n\n**Property:** agar ek itemset **infrequent** hai to uske saare **supersets bhi infrequent** honge; aur agar frequent hai to uske saare **subsets frequent** honge. Isi se candidates prune hote hain.\n\n**Steps:**\n1. Database scan → 1-itemsets ke counts → minsup se filter → **L1**.\n2. **Join:** L(k−1) ke itemsets join karke candidate **Ck** banao (pehle k−2 items same hone chahiye).\n3. **Prune:** agar candidate ka koi (k−1)-subset L(k−1) mein nahi hai to candidate hatao.\n4. **Count:** database scan karke candidates ka support nikaalo → minsup pass wale **Lk**.\n5. Repeat 2–4 jab tak koi candidate na bache.\n6. **Rules:** frequent itemsets ke splits par confidence nikaalo, minconf se filter.\n\n**Example:** 5 transactions, minsup 40% (2) → L1 = {bread, milk, diaper, beer, cola}, L2 = 8 pairs, L3 = 4 triples, L4 khaali → stop. Rule bread∧milk → diaper: confidence 2/3 = 67%.\n\n**Diagram:** Refer to Apriori Algorithm diagram."
      },
      {
        "question": "Explain the Apriori algorithm with a solved example using a transaction database.",
        "answer": "**Database (5 transactions):**\nT1 {bread, milk} · T2 {bread, diaper, beer, eggs} · T3 {milk, diaper, beer, cola} · T4 {bread, milk, diaper, beer} · T5 {bread, milk, diaper, cola}. **minsup = 40% = 2 transactions.**\n\n**Step 1 — C1 counts:** bread 4, milk 4, diaper 4, beer 3, cola 2, eggs 1.\n**L1** (≥ 2): bread, milk, diaper, beer, cola. (eggs hat gaya.)\n\n**Step 2 — C2 join + count:** {beer,bread} 2, {beer,diaper} 3, {beer,milk} 2, {bread,diaper} 3, {bread,milk} 3, {cola,diaper} 2, {cola,milk} 2, {diaper,milk} 3 → **L2 = 8 pairs**.\n\n**Step 3 — C3:** possible triples banao, phir subset prune: {beer,bread,milk} ka support 1 → out; baaki — {beer,bread,diaper} 2, {beer,diaper,milk} 2, {bread,diaper,milk} 2, {cola,diaper,milk} 2 → **L3 = 4**.\n\n**Step 4 — C4:** {beer,bread,diaper,milk} ka subset {beer,bread,milk} frequent nahi tha, isliye prune → **L4 khaali** → stop.\n\n**Step 5 — rules:** {bread, milk, diaper} se — bread∧milk → diaper 2/3 = 67%, bread∧diaper → milk 67%, milk∧diaper → bread 67%, bread → milk∧diaper 2/4 = 50%.\n\n**Diagram:** Refer to Apriori Algorithm diagram."
      },
      {
        "question": "Discuss the limitations of the Apriori algorithm and how they can be reduced.",
        "answer": "**Limitations:**\n1. **Multiple database scans** — k+1 scans chahiye, I/O bahut heavy (bade DB par bottleneck).\n2. **Candidate generation cost** — C2, C3 explode kar sakte hain; dense/long itemsets par time aur memory bahut lagti hai.\n3. **Support counting mehnga** — har candidate ke liye poora database scan/pattern match.\n4. **Rare-but-valuable patterns** — high minsup rakho to rare rules chhoot jaate hain; kam rakho to explosion.\n5. **Uniform minsup** — sab itemsets par same threshold, jabki frequency naturally vary karti hai.\n\n**Improvements:**\n- **FP-Growth** — sirf 2 scans, koi candidate generation nahi (FP-tree).\n- **AprioriTid / Apriori-Hybrid** — transaction IDs ke saath DB compress.\n- **Hashing / DHP** — bucket count se C2 kam karo.\n- **Partitioning (SON)** — data ko todkar local frequent itemsets, phir global verify.\n- **Sampling** — sample par mine karo, phir verify (accuracy thodi kam).\n- **Vertical format (Eclat)** — tidset intersection, counting fast.\n\n**Diagram:** Refer to Apriori Algorithm diagram."
      }
    ]
  },
  {
    "id": "fp-growth",
    "number": "4.8",
    "title": "FP-Growth Algorithm",
    "subtitle": "FP-tree, conditional pattern base aur candidate-free mining",
    "icon": "cycle",
    "accent": "#00ff88",
    "englishDefinition": "FP-Growth (Frequent Pattern Growth) mines frequent itemsets without candidate generation. It first scans the database to count item frequencies, discards infrequent items, and orders the remaining items by descending frequency. A second scan inserts each transaction, in that order, into a compact prefix tree called an FP-tree, where transactions share common prefixes and each node carries a count; a header table links all nodes of the same item. Mining then proceeds by taking the least frequent item, collecting all prefix paths that lead to it (the conditional pattern base), building a conditional FP-tree from those paths, and recursing until no frequent pattern remains. Because the database is scanned only twice and no candidates are produced, FP-Growth is usually much faster than Apriori, at the cost of extra memory for the tree.",
    "intro": "FP-Growth Apriori ki dono dikkatein ek saath hataata hai — **baar-baar database scan** aur **candidate generation**. Idea ye hai: poore data ko ek chhote se **FP-tree** mein compress kar do (jo transactions common prefix share karte hain wo ek hi path par baith jaate hain), aur phir us tree par hi \"pattern grow\" karte jao. Database sirf **do baar** padha jaata hai aur ek bhi candidate generate nahi hota.",
    "sections": [
      {
        "type": "definition",
        "title": "FP-Growth Kya Hai",
        "kicker": "Definition",
        "body": "FP-Growth (Frequent Pattern Growth) frequent itemsets **candidate generation ke bina** dhoondhta hai. Steps:\n**1.** Database scan karke item frequencies count karo, infrequent items hata do, aur baaki items ko **descending frequency** order mein rakho.\n**2.** Doosra scan karke har transaction ko isi order mein **FP-tree** (prefix tree) mein insert karo — common prefix share hota hai aur har node par **count** hota hai.\n**3.** **Header table** har item ke saare nodes ko link karti hai.",
        "body2": "Mining: sabse kam frequent item se shuru karo → uske saare **prefix paths** collect karo (**conditional pattern base**) → un par minsup laga kar **conditional FP-tree** banao → usi tree par recursion. Har recursion ek frequent itemset deta hai. Isliye FP-Growth = **divide and conquer** on FP-tree, aur total **sirf 2 database scans** lagte hain.",
        "chips": ["FP-tree", "Header table", "2 scans", "No candidates", "Recursive mining"]
      },
      {
        "type": "points",
        "title": "FP-Tree Construction — Solved Example",
        "kicker": "Worked Example",
        "points": [
          "**Data:** T1 {bread, milk} · T2 {bread, diaper, beer, eggs} · T3 {milk, diaper, beer, cola} · T4 {bread, milk, diaper, beer} · T5 {bread, milk, diaper, cola}. **minsup = 2**.",
          "**Scan 1 (counts):** bread 4, milk 4, diaper 4, beer 3, cola 2, eggs 1 → eggs out; order (desc) = **bread, milk, diaper, beer, cola**.",
          "**Scan 2 (insert):** T1 → bread:1 → milk:1. T2 → bread (2) → diaper:1 → beer:1. T3 → milk (root se naya: 1) → diaper → beer → cola.",
          "**T4:** bread (3) → milk (2) → diaper (2) → beer (2). **T5:** bread (4) → milk (3) → diaper (3) → cola (2).",
          "**Final FP-tree (nodes ke counts):** root → bread **4** → milk **3** → diaper **2** → beer 1 & cola 1; bread ka doosra child diaper **1** → beer 1; root ka doosra child milk **1** → diaper 1 → beer 1 → cola 1.",
          "**Check:** har item ka total count transaction count se match karta hai — bread 4 (3+1), milk 4 (3+1), diaper 4 (2+1+1), beer 3 (1+1+1), cola 2 (1+1).",
          "**Fayda:** 5 transactions 3–4 level ke chhote tree mein compress ho gaye — Apriori ke 8 pairs aur 4 triples generate karne ki zaroorat hi nahi padi."
        ]
      },
      {
        "type": "points",
        "title": "Mining — Conditional Pattern Base",
        "kicker": "Algorithm",
        "points": [
          "**Step 1:** header table se sabse kam frequent item (cola, count 2) uthao.",
          "**Step 2:** uske saare node-links follow karke **prefix paths** likho: {bread, milk, diaper}:1 aur {milk, diaper, beer}:1 — yahi **conditional pattern base** hai.",
          "**Step 3:** minsup (2) laga kar conditional FP-tree banao: bread 1 aur beer 1 drop (kam hain), milk 2 aur diaper 2 bache → tree = milk:2 → diaper:2.",
          "**Step 4:** is conditional tree se frequent itemsets: {cola, milk} 2, {cola, diaper} 2, {cola, milk, diaper} 2.",
          "**Step 5:** ab agla item (beer) lo, uski conditional pattern base banao, same repeat karo. Isi tarah diaper, milk, bread.",
          "**Step 6:** result wahi frequent itemsets jo Apriori deta (8 pairs + 4 triples) — par na ek bhi candidate, na baar-baar DB scan."
        ]
      },
      {
        "type": "comparison",
        "title": "Apriori vs FP-Growth",
        "kicker": "Comparison",
        "columns": ["Apriori", "FP-Growth"],
        "rows": [
          {
            "label": "Database scans",
            "values": ["k + 1 (har level par)", "sirf 2"]
          },
          {
            "label": "Candidate generation",
            "values": ["haan (Ck banti hai)", "nahi — pattern grow hota hai"]
          },
          {
            "label": "Data structure",
            "values": ["transaction list", "compressed FP-tree + header table"]
          },
          {
            "label": "Time",
            "values": ["dense data par bahut slow", "generally fast (2 scans + tree)"]
          },
          {
            "label": "Memory",
            "values": ["kam (koi tree nahi)", "tree ke liye zyada memory"]
          },
          {
            "label": "Implementation",
            "values": ["aasan", "mushkil (recursion + tree)"]
          },
          {
            "label": "Incremental update",
            "values": ["aasan (data add karo)", "FP-tree dobara banana padta hai"]
          },
          {
            "label": "Best for",
            "values": ["chhote/sparse data", "bade dense data, repeated mining"]
          }
        ],
        "columnColors": ["#ff7a90", "#00ff88"]
      },
      {
        "type": "points",
        "title": "Pros, Cons Aur Exam Points",
        "kicker": "Analysis",
        "points": [
          "**Pros:** sirf **2 scans** — I/O bahut kam; **koi candidate generation nahi**, isliye exponential candidate problem khatam; dense data par Apriori se kaafi fast; FP-tree compressed hoti hai (common prefixes share).",
          "**Cons:** FP-tree **memory** leti hai (dense data par bada); recursive implementation complex; **incremental update** mushkil (tree dobara banana padta hai); minsup badalne par phir se mining.",
          "**Kab FP-Growth:** bade/dense transaction data, jab mining kai baar karni ho, aur candidate explosion Apriori ko slow kar raha ho.",
          "**Kab Apriori:** chhota data, teaching/exam, ya jab simple implementation chahiye.",
          "**Exam line:** \"FP-Growth FP-tree banakar bina candidate generation frequent itemsets nikaalta hai, isliye sirf 2 scans chahiye.\"",
          "**Variant:** FP-Growth* (ascending order), H-mine, Eclat (vertical tidsets) — sab same goal ke alag tareeke."
        ]
      },
      {
        "type": "diagram",
        "title": "FP-Growth Algorithm",
        "kicker": "Diagram",
        "diagram": "ds4-fpgrowth",
        "caption": "FP-tree construction, header table aur conditional pattern base se mining"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**FP-Growth** = pattern growth on **FP-tree**; **2 scans**, **no candidates**.",
          "**Build:** count → order by frequency (desc) → insert transactions → tree with counts + header links.",
          "**Mine:** least frequent item → conditional pattern base → conditional FP-tree → recurse.",
          "**Example:** cola ki base {bread,milk,diaper}:1 + {milk,diaper,beer}:1 → {cola,milk,diaper} sup 2.",
          "**vs Apriori:** Apriori k+1 scans + candidates; FP-Growth 2 scans, memory zyada.",
          "**Limit:** tree memory aur rebuild — incremental update mushkil."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Explain the FP-Growth algorithm. How does it avoid candidate generation?",
        "answer": "**FP-Growth (Frequent Pattern Growth)** frequent itemsets bina candidates banaye dhoondhta hai — do phases mein:\n\n**Phase 1 — FP-tree construction:**\n1. Pehla scan: har item ka count; infrequent items hatao; items ko **descending frequency** order mein rakho (bread 4, milk 4, diaper 4, beer 3, cola 2).\n2. Doosra scan: har transaction ko isi order mein tree mein insert karo — common prefix share hota hai, node par count badhta hai, header table har item ke nodes ko link karti hai.\n\n**Phase 2 — FP-Growth (mining):**\n1. Sabse kam frequent item uthao (cola).\n2. Uske prefix paths = **conditional pattern base** ({bread,milk,diaper}:1, {milk,diaper,beer}:1).\n3. minsup laga kar **conditional FP-tree** banao (bread 1, beer 1 drop; milk 2, diaper 2 bache).\n4. Us conditional tree par recurse karo → frequent itemsets {cola,milk}, {cola,diaper}, {cola,milk,diaper}.\n5. Har item ke liye repeat.\n\n**Candidate generation kaise avoid:** Apriori har level par candidates banata aur DB scan karta hai. FP-Growth data ko **compressed tree** mein daal deta hai aur seedha pattern grow karta hai — isliye sirf 2 scans aur koi candidate nahi.\n\n**Diagram:** Refer to FP-Growth Algorithm diagram."
      },
      {
        "question": "Explain FP-tree construction with an example.",
        "answer": "**Data:** T1 {bread, milk} · T2 {bread, diaper, beer, eggs} · T3 {milk, diaper, beer, cola} · T4 {bread, milk, diaper, beer} · T5 {bread, milk, diaper, cola}. **minsup = 2**.\n\n**Scan 1:** counts — bread 4, milk 4, diaper 4, beer 3, cola 2, eggs 1. eggs hata do (infrequent); order (desc frequency) = **bread, milk, diaper, beer, cola**. Header table isi order mein banti hai.\n\n**Scan 2:** har transaction ko order ke hisaab se insert karo:\n- T1 → bread(1) → milk(1)\n- T2 → bread(2) → diaper(1) → beer(1)\n- T3 → milk(1, root se naya branch) → diaper → beer → cola\n- T4 → bread(3) → milk(2) → diaper(2) → beer(2)\n- T5 → bread(4) → milk(3) → diaper(3) → cola(2)\n\n**Final tree:** root ke do children — bread (4) aur milk (1). bread → milk (3) → diaper (2) → beer (1), cola (1); bread → diaper (1) → beer (1); milk (1) → diaper (1) → beer (1) → cola (1).\n\n**Verification:** har item ka total = transaction count (bread 4, milk 4, diaper 4, beer 3, cola 2).\n\n**Fayda:** tree transactions ke common prefixes share karta hai, isliye memory bachti hai aur mining recursive ho jaati hai.\n\n**Diagram:** Refer to FP-Growth Algorithm diagram."
      },
      {
        "question": "Compare the Apriori and FP-Growth algorithms.",
        "answer": "| Point | Apriori | FP-Growth |\n|---|---|---|\n| Approach | level-wise candidate generation | pattern growth on FP-tree |\n| Database scans | k + 1 | 2 |\n| Candidates | haan (C1, C2, C3 …) | nahi |\n| Data structure | transaction database | compressed FP-tree + header table |\n| Speed | slow on dense/large data | fast, especially dense data |\n| Memory | kam | zyada (tree) |\n| Implementation | simple | complex (recursion) |\n| Incremental update | easy | tree rebuild needed |\n\n**Why FP-Growth faster:** data ko ek baar tree mein compress karke us par hi mining hoti hai — na baar-baar DB scan, na candidate sets banana. Apriori har level par candidates banata hai aur poora database dobara padhta hai, jo exponential ho sakta hai.\n\n**Kab Apriori:** chhota data, limited memory, simple implementation (teaching, exams).\n**Kab FP-Growth:** bade/dense transaction data, repeated mining, jab candidate explosion problem ban raha ho.\n\n**Diagram:** Refer to FP-Growth Algorithm diagram."
      }
    ]
  },
  {
    "id": "support-confidence",
    "number": "4.9",
    "title": "Support and Confidence",
    "subtitle": "Association rule ke performance measures aur lift se interestingness",
    "icon": "metrics",
    "accent": "#ff8800",
    "englishDefinition": "Support and confidence are the two standard measures of an association rule X → Y. Support is the fraction of all transactions that contain both X and Y, support(X → Y) = count(X ∪ Y)/N, and it measures how frequently the rule applies, that is coverage or usefulness. Confidence is the fraction of transactions containing X that also contain Y, confidence(X → Y) = support(X ∪ Y)/support(X) = P(Y|X), and it measures the reliability of the rule. Mining keeps rules whose support is at least the minimum support and whose confidence is at least the minimum confidence. Because confidence can be high for a rule that is merely a coincidence of a popular item, complementary measures are used: lift = confidence/support(Y) (above 1 means positive correlation, 1 means independence, below 1 means negative correlation), leverage = P(X ∪ Y) - P(X)P(Y) and conviction.",
    "intro": "Rule banane ke baad do sawaal poochne padte hain: **\"ye rule kitna common hai?\"** aur **\"jab X hua to Y kitni baar hua?\"** Pehle ka jawab **support** deta hai, doosre ka **confidence**. Dono ke apne threshold hote hain — minimum support aur minimum confidence. Lekin ek problem hai: agar Y khud bahut popular hai (jaise milk), to X ka koi lena-dena nahi hone par bhi confidence high dikhega. Isi dhokhe ko pakadne ke liye **lift** use hota hai.",
    "sections": [
      {
        "type": "definition",
        "title": "Support Aur Confidence Kya Hain",
        "kicker": "Definition",
        "body": "**Support** batata hai ki rule ke dono hisse kitni transactions mein saath aaye:\n**support(X → Y) = count(X ∪ Y) / N = P(X ∪ Y)**\nYe rule ki **usefulness / coverage** naapta hai — \"ye pattern kitna common hai\".\n**Confidence** batata hai ki X wali transactions mein se kitni mein Y bhi aaya:\n**confidence(X → Y) = support(X ∪ Y) / support(X) = P(Y | X)**\nYe rule ki **reliability** naapta hai — \"X dekhkar Y ka kitna bharosa kar sakte hain\".",
        "body2": "Mining mein dono thresholds use hote hain: **minsup** (kitna common minimum) aur **minconf** (kitna reliable minimum). In dono ko pass karne wale rules **strong rules** kehlate hain. Dhyan rakho: support symmetric hai (X→Y aur Y→X ka support same), par **confidence symmetric nahi** — X→Y aur Y→X ki confidence alag hoti hai.",
        "chips": ["support = P(X∪Y)", "confidence = P(Y|X)", "minsup", "minconf", "Symmetric nahi"]
      },
      {
        "type": "points",
        "title": "Solved Calculation — Same 5 Transactions",
        "kicker": "Numbers",
        "points": [
          "**Data:** T1 {bread, milk} · T2 {bread, diaper, beer, eggs} · T3 {milk, diaper, beer, cola} · T4 {bread, milk, diaper, beer} · T5 {bread, milk, diaper, cola}. N = 5.",
          "**Counts:** bread 4, milk 4, diaper 4, beer 3, cola 2; {bread, milk} 3, {diaper, beer} 3, {bread, diaper, milk} 2.",
          "**Rule bread → milk:** support = 3/5 = **0.60 (60%)**; confidence = 3/4 = **0.75 (75%)**; lift = 0.75/0.80 = **0.94**.",
          "**Rule diaper → beer:** support = 3/5 = **0.60**; confidence = 3/4 = **0.75**; lift = 0.75/0.60 = **1.25**.",
          "**Rule {bread, milk} → diaper:** support = 2/5 = **0.40**; confidence = 2/3 = **0.667**; lift = 0.667/0.80 = **0.83**.",
          "**Interpretation:** bread → milk ki confidence 75% hai par lift 1 se kam — matlab milk itna popular hai ki ye rule kuch extra nahi bata raha. diaper → beer ka lift 1.25 — ye asli positive association hai, business ke liye valuable.",
          "**Thresholds:** minsup 0.40 aur minconf 0.60 rakho to upar ke saare rules strong hain; minsup 0.50 kar do to {bread, milk} → diaper (0.40) nikal jaayega."
        ]
      },
      {
        "type": "cards",
        "title": "Aage Ke Interestingness Measures",
        "kicker": "Measures",
        "cards": [
          {
            "icon": "chart",
            "title": "Lift",
            "body": "lift = confidence / support(Y) = P(Y|X)/P(Y). **> 1** positive association, **= 1** independent, **< 1** negative. Sabse important extra measure."
          },
          {
            "icon": "metrics",
            "title": "Leverage",
            "body": "leverage = P(X ∪ Y) − P(X)·P(Y). 0 = independent, positive = correlated. Support aur confidence dono ka combination."
          },
          {
            "icon": "check",
            "title": "Conviction",
            "body": "conviction = (1 − support(Y)) / (1 − confidence). 1 = independent; high value = strong implication (kam galat hota hai)."
          },
          {
            "icon": "warn",
            "title": "Confidence ka dhokha",
            "body": "Agar Y khud 90% baskets mein ho, to koi bhi X ke saath confidence ~90% dikhegi — rule bekaar hai. Isliye lift zaroori."
          },
          {
            "icon": "target",
            "title": "Threshold choice",
            "body": "minsup bahut kam → rules ki explosion; bahut zyada → rare rules chhoot jaate hain. minconf isi tarah tune karo."
          },
          {
            "icon": "doc",
            "title": "Chi-square / correlation",
            "body": "Statistical correlation test — categorical variables ke liye; lift ka normalised version bhi kehte hain."
          }
        ]
      },
      {
        "type": "comparison",
        "title": "Support vs Confidence",
        "kicker": "Comparison",
        "columns": ["Support", "Confidence"],
        "rows": [
          {
            "label": "Formula",
            "values": ["count(X ∪ Y)/N", "count(X ∪ Y)/count(X)"]
          },
          {
            "label": "Probability",
            "values": ["P(X ∪ Y)", "P(Y | X)"]
          },
          {
            "label": "Kya batata hai",
            "values": ["rule kitna common (coverage)", "rule kitni reliable (accuracy)"]
          },
          {
            "label": "Symmetric",
            "values": ["haan (X→Y = Y→X)", "nahi (direction matter karta hai)"]
          },
          {
            "label": "Threshold",
            "values": ["minsup", "minconf"]
          },
          {
            "label": "Akela kaafi?",
            "values": ["nahi — common par bekaar rule", "nahi — popular Y se dhokha"]
          },
          {
            "label": "Example",
            "values": ["diaper → beer: 60%", "diaper → beer: 75%"]
          }
        ],
        "columnColors": ["#00d4ff", "#ff8800"]
      },
      {
        "type": "points",
        "title": "Exam Points Aur Interpretation",
        "kicker": "Notes",
        "points": [
          "**Strong rule** = support ≥ minsup **aur** confidence ≥ minconf — dono zaroori hain.",
          "**Support low + confidence high:** rare rule — few transactions, isliye bharosa mat karo (jaise 1 transaction wala pattern).",
          "**Support high + confidence low:** rule direction galat ho sakta hai — ulta rule (Y → X) dekho.",
          "**Lift = 1** matlab X aur Y independent — rule ka koi business matlab nahi.",
          "**Rare-but-valuable patterns:** minsup high rakhne se \"caviar + champagne\" jaisi interesting rules chhoot jaati hain — isliye kabhi low minsup par bhi dekho.",
          "**Exam line:** \"Support usefulness batata hai, confidence reliability; dono ko saath dekhna chahiye, aur lift se correlation verify karo.\""
        ]
      },
      {
        "type": "diagram",
        "title": "Support and Confidence",
        "kicker": "Diagram",
        "diagram": "ds4-support-confidence",
        "caption": "Formulas, 5-transaction calculation aur lift se interestingness"
      },
      {
        "type": "recap",
        "title": "Recap",
        "kicker": "5 Seconds Mein Yaad Karo",
        "points": [
          "**support(X→Y)** = count(X∪Y)/N = P(X∪Y) — coverage; **symmetric**.",
          "**confidence(X→Y)** = support(X∪Y)/support(X) = P(Y|X) — reliability; **not symmetric**.",
          "**Thresholds:** support ≥ minsup aur confidence ≥ minconf → **strong rule**.",
          "**Lift** = confidence/support(Y): > 1 positive, = 1 independent, < 1 negative.",
          "**Example:** bread → milk sup 60%, conf 75%, lift 0.94; diaper → beer sup 60%, conf 75%, lift 1.25.",
          "**Trap:** popular Y se confidence dhokha deti hai — isliye lift/leverage bhi dekho."
        ]
      }
    ],
    "examQuestions": [
      {
        "question": "Define support and confidence in association rule mining with an example.",
        "answer": "**Support** = rule ke dono itemsets kitni transactions mein saath aaye:\n**support(X → Y) = count(X ∪ Y) / N = P(X ∪ Y)**\nYe rule ki **usefulness/coverage** batata hai.\n\n**Confidence** = X wali transactions mein se kitni mein Y bhi aaya:\n**confidence(X → Y) = support(X ∪ Y) / support(X) = P(Y | X)**\nYe rule ki **reliability** batata hai.\n\n**Example (N = 5):** T1 {bread, milk}, T2 {bread, diaper, beer, eggs}, T3 {milk, diaper, beer, cola}, T4 {bread, milk, diaper, beer}, T5 {bread, milk, diaper, cola}.\n\n**Rule diaper → beer:**\n- support = 3/5 = **60%** (3 baskets mein dono saath).\n- confidence = 3/4 = **75%** (diaper wale 4 baskets mein se 3 mein beer).\n- lift = 0.75/0.60 = **1.25** → positive association.\n\n**Rule bread → milk:** support 3/5 = 60%, confidence 3/4 = 75%, lift 0.75/0.80 = **0.94** (milk already popular, isliye rule extra value nahi de raha).\n\n**Diagram:** Refer to Support and Confidence diagram."
      },
      {
        "question": "Explain the minimum support and minimum confidence thresholds. Why are both needed?",
        "answer": "**Minimum support (minsup)** — rule ka support isse kam ho to wo rule **statistically bhi weak** hai (bahut kam transactions mein aata hai) aur use generate hi nahi karte. Ye search space ko chhota rakhta hai.\n\n**Minimum confidence (minconf)** — X hone par Y ki probability isse kam ho to rule **unreliable** hai (X ke baad Y aata hi nahi), use strong rule nahi maana jaata.\n\n**Dono kyun zaroori:**\n1. Akela support: \"bread → salt\" ka support bahut high ho sakta hai (dono common hain), par salt har ghar mein hota hai — rule ka koi matlab nahi. Confidence bhi chahiye.\n2. Akela confidence: ek rare combination (2 transactions) ka confidence 100% aa sakta hai, par support bahut kam — generalize nahi kar sakte. Support bhi chahiye.\n3. Isliye **strong rule = support ≥ minsup AND confidence ≥ minconf**.\n\n**Threshold tuning:** minsup bahut kam → rules ki explosion (lakhon rules); bahut zyada → interesting rare rules chhoot jaate hain. minconf 0.5–0.7 typical range hai. Business need se decide karo.\n\n**Diagram:** Refer to Support and Confidence diagram."
      },
      {
        "question": "Why can confidence be misleading? Explain lift and other interestingness measures.",
        "answer": "**Confidence ka dhokha:** confidence = P(Y|X). Agar Y khud data mein bahut popular hai (jaise milk 80% baskets mein), to kisi bhi X ke saath confidence 0.75 dikhega — chahe X aur Y ka koi relation na ho.\n\n**Example:** bread → milk: confidence 0.75, lekin support(milk) = 0.80 — matlab milk ka baseline hi 0.80 hai. Rule ne kuch improve nahi kiya; **lift = 0.75/0.80 = 0.94 < 1** (slight negative). Isi dhokhe ko lift pakadta hai.\n\n**Lift:** lift = confidence/support(Y) = P(X∪Y)/(P(X)P(Y)).\n- **> 1** → positive association (X aur Y saath aate hain zyada).\n- **= 1** → independent (rule ka koi matlab nahi).\n- **< 1** → negative association (X ke saath Y kam aata hai).\n\n**Leverage** = P(X∪Y) − P(X)P(Y): 0 = independent; positive = correlated.\n**Conviction** = (1 − support(Y))/(1 − confidence): 1 = independent, bada = strong implication.\n**Chi-square / correlation** — statistical significance test.\n\n**Practice:** strong rules nikaalo (support + confidence), phir **lift se rank** karo — business ke liye wahi valuable hain.\n\n**Diagram:** Refer to Support and Confidence diagram."
      }
    ]
  },
];
