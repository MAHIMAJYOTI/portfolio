export const siteConfig = {
  name: "Mahima Jyoti",
  roles: ["Full-Stack Engineer", "ML Engineer"],
  tagline: "From raw data to deployed APIs. Ship systems that actually run.",
  status: "Final Year · B.Tech",
  email: "mahima.23bai0470@vitbhopal.ac.in",
  phone: "+91 8627839379",
  location: "Bhopal, India",
  github: "https://github.com/MAHIMAJYOTI",
  linkedin: "https://linkedin.com/in/mahima-jyoti-598964363",
  leetcode: "https://leetcode.com/u/Mahima4/",
  resumePdf: "/Mahima_Jyoti_Resume.pdf",
  resumeMlPdf: "/Mahima_Jyoti_Resume_ML.pdf",
  resumeWebDevPdf: "/Mahima_Jyoti_Resume_WebDev.pdf",
  showResumeDownloads: false,
  currentlyBuilding: "GameNexus — social gaming backlog with realtime chat",
  openTo: ["SDE Internships", "MLE Internships", "Open Source"],
  interestTags: ["Engineering", "ML Systems", "Cloud", "Data Science", "Full-Stack"],
};

export const stats = [
  { value: 9.18, suffix: "", label: "CGPA", detail: "VIT Bhopal", decimals: 2 },
  { value: 4.8, suffix: "M", label: "Records", detail: "UIDAI analytics", decimals: 1 },
  { value: 150, suffix: "+", label: "LeetCode", detail: "DSA solved" },
  { value: 26, suffix: "+", label: "Projects", detail: "GitHub repos" },
];

export const heroBadges = [
  { icon: "🎓", title: "9.18 CGPA", subtitle: "VIT Bhopal" },
  { icon: "📊", title: "4.8M Records", subtitle: "UIDAI Hackathon" },
  { icon: "💻", title: "150+ DSA", subtitle: "LeetCode" },
  { icon: "☁️", title: "AWS · Azure", subtitle: "Cloud certified" },
];

export const aboutParagraphs = [
  "Final-year B.Tech Computer Science (AI & ML) at VIT Bhopal — CGPA 9.18/10. I build end-to-end systems: ETL pipelines, ML model training & evaluation, REST/WebSocket APIs, and production frontends.",
  "Strong in full-stack development (React, Next.js, FastAPI, PostgreSQL) and applied ML (OpenCV, scikit-learn, feature engineering, explainable AI). I ship deployed products — not just notebooks.",
  "Seeking SDE and MLE internships. Comfortable explaining system design, data modeling, and model decisions in technical interviews.",
];

export const skills = [
  {
    title: "Languages",
    icon: "💻",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "R"],
  },
  {
    title: "Frontend & Backend",
    icon: "🌐",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "JWT Authentication",
      "SQLAlchemy",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI / ML / Data",
    icon: "🧠",
    items: [
      "Feature Engineering",
      "Model Training & Evaluation",
      "Random Forest",
      "scikit-learn",
      "OpenCV",
      "Explainable AI (XAI)",
      "Pandas",
      "NumPy",
      "ETL Pipelines",
      "Statistics",
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Supabase"],
  },
  {
    title: "Cloud",
    icon: "☁️",
    items: ["AWS (S3, EB, CloudFront)", "Azure", "Supabase", "Vercel", "Railway"],
  },
  {
    title: "Core Concepts",
    icon: "📚",
    items: ["DSA", "OOP", "DBMS", "Distributed Systems", "SDLC", "System Design"],
  },
];

export const projects = [
  {
    name: "GameNexus",
    subtitle: "Social Gaming Backlog Platform",
    description:
      "Production full-stack web app — game discovery, personal backlog, social graph, and real-time chat. Live at game-nexus-full.vercel.app.",
    tags: ["Full-Stack", "REST API", "Realtime"],
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Supabase", "WebSockets", "SQLAlchemy"],
    github: "https://github.com/MAHIMAJYOTI/GameNexus-full",
    live: "https://game-nexus-full.vercel.app/",
    screenshot:
      "https://raw.githubusercontent.com/MAHIMAJYOTI/GameNexus-full/main/docs/screenshots/home.png",
    highlights: [
      "Architected and deployed a production full-stack application (Next.js + FastAPI + PostgreSQL) on Vercel and Railway with separate frontend/backend hosting",
      "Designed relational database schema and REST APIs for users, game catalog, backlog entries, follow graph, activity feed, and chat messages using SQLAlchemy async ORM",
      "Implemented JWT authentication — Supabase Auth on client, token validation (JWKS/HS256) on FastAPI, automatic user profile creation on first API call",
      "Integrated third-party FreeToGame REST API for live game search, genre browse, and detail pages with server-side data normalization",
      "Built social features: follow/unfollow users, public profiles, friend activity feed, and genre-based game recommendations from backlog history",
      "Shipped real-time per-game chat over WebSockets with JWT-secured connections and persistent message history stored in PostgreSQL",
    ],
  },
  {
    name: "ROADGAURD-X",
    subtitle: "Context-Aware Driving Intelligence System",
    description:
      "End-to-end computer vision + ML system for offline driving-scene risk analysis with explainable LOW / MEDIUM / HIGH predictions.",
    tags: ["Computer Vision", "Machine Learning", "Full-Stack"],
    tech: ["Python", "OpenCV", "scikit-learn", "FastAPI", "Next.js", "Random Forest", "Matplotlib"],
    github: "https://github.com/MAHIMAJYOTI/ROADGAURD-X",
    live: "https://roadgaurd-x.vercel.app/",
    screenshot:
      "https://raw.githubusercontent.com/MAHIMAJYOTI/ROADGAURD-X/main/docs/screenshots/dashboard-hero.png",
    highlights: [
      "Built end-to-end ML pipeline: video frames → OpenCV preprocessing → lane detection → K-means segmentation → MOG2 tracking → 9-feature vector → Random Forest classifier",
      "Trained Random Forest on 5,000 synthetic samples (80/20 stratified split) — 99.6% test accuracy, 0.995 macro F1; outputs LOW / MEDIUM / HIGH risk per frame",
      "Engineered interpretable features (lane offset, motion variance, edge density, scene complexity) — easy to explain why a frame was flagged in interviews",
      "Added explainable AI layer: rule-based primary cause, confidence score, and top feature contributions mapped to human-readable reasons (e.g. sustained lane departure)",
      "Exposed pipeline via FastAPI REST API (video upload, async polling, artifact serving) and Next.js dashboard with processed video, metrics, and model evaluation panel",
      "Delivered CLI with live HUD overlay, automated danger-clip extraction, JSON session reports — fully offline, no GPU or cloud inference required",
    ],
  },
  {
    name: "adhaarzones",
    subtitle: "UIDAI Stress Zone Analytics",
    description:
      "Large-scale data analytics and ML pipeline on ~4.8M government records — live Service Stress Zone dashboard for district-level risk classification.",
    tags: ["Data Science", "ETL", "Machine Learning"],
    tech: ["Python", "Pandas", "scikit-learn", "NumPy", "Random Forest", "Matplotlib"],
    github: "https://github.com/MAHIMAJYOTI/adhaarzones",
    live: "https://uidai-data-hackathon-2026.vercel.app/",
    screenshot: "/projects/adhaarzones-overview.png",
    highlights: [
      "Built automated ETL pipeline processing 4.8M+ CSV rows — missing-value imputation, temporal aggregation, feature engineering, and model serialization via run_pipeline.py",
      "Designed custom Service Stress Ratio metric with additive smoothing as the target variable for district-level infrastructure stress classification",
      "Trained Random Forest classifier (80/20 split); feature importance analysis showed the engineered ratio drove ~70% of predictive signal",
      "Applied Z-score dynamic thresholding for risk tier assignment — adapts to national baselines instead of fixed manual cutoffs",
      "End-to-end batch pipeline runs unattended with zero human-in-the-loop — raw CSV in, trained .joblib model and risk reports out",
      "Deployed live Service Stress Zone dashboard at uidai-data-hackathon-2026.vercel.app for district-level risk visualization",
    ],
  },
  {
    name: "CloudCollab",
    subtitle: "Real-Time Collaborative Workspace",
    description:
      "Full-stack real-time collaboration platform — synchronized code editing, live execution, video chat, and AWS cloud deployment.",
    tags: ["Full-Stack", "Real-Time", "System Design"],
    tech: ["Node.js", "React", "Socket.io", "WebRTC", "AWS", "DynamoDB", "JWT"],
    github: "https://github.com/MAHIMAJYOTI/awscollab",
    live: null,
    highlights: [
      "Built real-time collaborative coding platform using React frontend, Node.js backend, Socket.IO for state sync, and WebRTC for peer-to-peer video",
      "Implemented synchronized multi-user code editor with live cursor positions and typing indicators via low-latency WebSocket broadcast",
      "Integrated JDoodle REST API for multi-language code execution inside shared sessions — demonstrates third-party API integration pattern",
      "Designed 3-tier AWS architecture: Elastic Beanstalk (Node.js app server), DynamoDB (NoSQL session/user data), S3 + CloudFront (static asset CDN)",
      "Secured platform with JWT authentication and Supabase row-level security — auth token validated on every protected API route",
    ],
  },
];

export const codeSnippet = {
  filename: "roadguard_pipeline.py",
  lines: [
    "features = extract_combined(lanes, segments, tracks)  # 9-dim vector",
    "risk, confidence, _ = risk_model.predict(features)",
    "explanation = build_explanation(risk, features, contributions)",
    "session.record(risk, confidence, explanation)",
    "write_report('output/report.json')  # LOW / MED / HIGH + causes",
    "# OpenCV + Random Forest · ROADGAURD-X offline CV pipeline",
  ],
};

export const marqueeTech = [
  "Full-Stack Development",
  "REST API",
  "Machine Learning",
  "Feature Engineering",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "JWT Authentication",
  "WebSockets",
  "OpenCV",
  "Random Forest",
  "Python",
  "TypeScript",
  "System Design",
];

export const achievements = [
  {
    year: "2026",
    title: "UIDAI Data Hackathon",
    description:
      "Live dashboard at uidai-data-hackathon-2026.vercel.app; ~4.8M records analyzed with Service Stress Ratio framework (adhaarzones).",
  },
  {
    year: "2025",
    title: "150+ LeetCode Problems",
    description:
      "Strong DSA foundation — arrays, trees, graphs, DP on LeetCode (leetcode.com/u/Mahima4).",
  },
  {
    year: "2025",
    title: "Google IT Support Certificate",
    description: "Completed Google IT Support Professional Certificate on Coursera.",
  },
  {
    year: "2024",
    title: "MERN Stack Intern — Ethnus",
    description:
      "Built scalable apps with React, Node.js, MongoDB, and REST APIs in a remote internship.",
  },
  {
    year: "2024",
    title: "Azure Data Fundamentals",
    description:
      "Microsoft certification covering cloud data storage, pipelines, and fundamentals.",
  },
];

export const experience = [
  {
    title: "MERN Stack Intern",
    org: "Ethnus",
    period: "2024 · Remote",
    bullets: [
      "Developed full-stack MERN applications with React frontend, Node.js/Express backend, MongoDB database, and RESTful API design",
      "Built reusable React UI components, responsive layouts, and user authentication flows with secure session handling",
      "Integrated frontend and backend via REST APIs — practiced scalable application architecture and SDLC workflow",
    ],
  },
  {
    title: "Azure Data Fundamentals Intern",
    org: "Microsoft",
    period: "2024 · Remote",
    bullets: [
      "Completed Azure Data Fundamentals certification",
      "Learned cloud data storage, pipelines, and Azure fundamentals",
      "Applied data concepts to cloud-native architecture patterns",
    ],
  },
];

export const education = [
  {
    institution: "VIT Bhopal University",
    program: "B.Tech, Computer Science (AI & Machine Learning)",
    period: "Aug 2023 – Present",
    result: "CGPA 9.18 / 10",
  },
  {
    institution: "Pratap World School, Indora, H.P.",
    program: "CBSE — Class XII",
    period: "May 2020 – Jun 2022",
    result: "94.6%",
  },
  {
    institution: "Indian Heritage School, Pathankot, Punjab",
    program: "ICSE — Class X",
    period: "May 2019 – Apr 2020",
    result: "95.4%",
  },
];

export const certifications = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google",
    link: "https://www.coursera.org/professional-certificates/google-it-support",
  },
  {
    name: "MERN Full Stack Developer",
    issuer: "Ethnus",
    link: null,
  },
  {
    name: "Azure Data Fundamentals",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
