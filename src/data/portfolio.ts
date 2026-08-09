export const siteConfig = {
  name: "Mahima Jyoti",
  roles: ["Full-Stack Engineer", "ML Engineer"],
  tagline: "From raw data to deployed APIs. Ship systems that actually run.",
  status: "Final Year · B.Tech",
  email: "mahijyoti883@gmail.com",
  phone: "+91 8627839379",
  location: "Bhopal, India",
  github: "https://github.com/MAHIMAJYOTI",
  linkedin: "https://linkedin.com/in/mahima-jyoti-598964363",
  leetcode: "https://leetcode.com/u/Mahima4/",
  resumePdf: "/Mahima_Jyoti_Resume.pdf",
  resumeMlPdf: "/Mahima_Jyoti_Resume_ML.pdf",
  resumeWebDevPdf: "/Mahima_Jyoti_Resume_WebDev.pdf",
  showResumeDownloads: false,
  currentlyBuilding: "CloudCollab — real-time collaboration with WebRTC & Socket.IO",
  openTo: ["SDE Internships", "MLE Internships", "Open Source"],
  interestTags: ["Engineering", "Full-Stack", "Cloud", "ML Systems", "Real-Time"],
};

export const stats = [
  { value: 9.2, suffix: "", label: "CGPA", detail: "VIT Bhopal", decimals: 2 },
  { value: 180, suffix: "+", label: "LeetCode", detail: "DSA solved" },
  { value: 50, suffix: "+", label: "API Endpoints", detail: "CloudCollab" },
  { value: 4, suffix: "", label: "Live Projects", detail: "Deployed & GitHub" },
];

export const heroBadges = [
  { icon: "🎓", title: "9.20 CGPA", subtitle: "VIT Bhopal" },
  { icon: "💻", title: "180+ DSA", subtitle: "LeetCode" },
  { icon: "☁️", title: "AWS · Docker", subtitle: "Cloud & DevOps" },
  { icon: "🚀", title: "Full-Stack", subtitle: "Ship to production" },
];

export const aboutParagraphs = [
  "Final-year B.Tech Computer Science (AI & Machine Learning) at Vellore Institute of Technology, Bhopal — CGPA 9.20/10. I build end-to-end systems: real-time collaboration stacks, REST/WebSocket APIs, production frontends, and applied ML pipelines.",
  "Strong in full-stack development (React, Next.js, Node.js, FastAPI, PostgreSQL, DynamoDB) and cloud/DevOps (AWS, Docker, Vercel, Render, Railway). I ship deployed products — not just demos.",
  "Seeking SDE and MLE internships. Comfortable explaining system design, data modeling, auth flows, and model decisions in technical interviews.",
];

export const skills = [
  {
    title: "Languages",
    icon: "💻",
    items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: "🌐",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: ["PostgreSQL", "MongoDB", "Supabase", "DynamoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    items: ["AWS", "Docker", "Vercel", "Render", "Railway", "Git", "GitHub"],
  },
  {
    title: "Core Concepts",
    icon: "📚",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const projects = [
  {
    name: "CloudCollab",
    subtitle: "Real-Time Collaboration Platform",
    description:
      "Full-stack collaboration platform — real-time chat, WebRTC video, meeting scheduling, and shared code editing across PIN-based rooms.",
    tags: ["Full-Stack", "Real-Time", "AWS", "System Design"],
    tech: ["React", "Node.js", "Socket.IO", "WebRTC", "DynamoDB", "Docker", "Express"],
    github: "https://github.com/MAHIMAJYOTI/awscollab",
    live: null,
    highlights: [
      "Built a full-stack collaboration platform with real-time chat, WebRTC video calls, meeting scheduling, and shared code editing across PIN-based rooms using React, Node.js/Express, and Socket.IO",
      "Developed 50+ REST API endpoints and WebSocket events for messaging, room admin, meetings, auth, and live code sync",
      "Designed AWS DynamoDB persistence with 6 tables and GSIs (Users, ChatRooms, Messages, Meetings, Projects, ProjectFiles) and a local JSON adapter for dev/prod parity",
      "Containerized the stack with Docker Compose (health checks, env-based config, persistent volumes) and documented AWS deployment architecture (Elastic Beanstalk + S3 + DynamoDB)",
    ],
  },
  {
    name: "GameNexus",
    subtitle: "Full-Stack Social Gaming Platform",
    description:
      "Production social gaming backlog platform — discovery, backlog, social graph, and JWT-secured realtime chat. Live on Vercel + Render.",
    tags: ["Full-Stack", "REST API", "Realtime"],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Supabase", "WebSockets", "TypeScript"],
    github: "https://github.com/MAHIMAJYOTI/GameNexus-full",
    live: "https://game-nexus-full.vercel.app/",
    screenshot:
      "https://raw.githubusercontent.com/MAHIMAJYOTI/GameNexus-full/main/docs/screenshots/home.png",
    highlights: [
      "Built and deployed a full-stack social gaming backlog platform with 25+ REST endpoints and JWT-secured WebSocket chat, serving 9 user-facing pages across Vercel (frontend) and Render (backend)",
      "Integrated the FreeToGame API to power live search, genre browse, and game detail for 400+ titles, with server-side caching to cut repeat catalog fetch latency",
      "Implemented cross-service auth (Supabase login → FastAPI JWT validation via JWKS/HS256) and auto-provisioned user profiles on first API call, backed by a 6-table PostgreSQL schema",
      "Shipped social features including follow graph, friend activity feed, and genre-based recommendations from backlog history, plus per-game realtime chat with 30-message history replay",
    ],
  },
  {
    name: "RoadGuard-X",
    subtitle: "AI Driving Risk Analysis",
    description:
      "Offline CV + ML risk pipeline — OpenCV feature extraction → Random Forest scoring driving video as LOW / MEDIUM / HIGH per frame.",
    tags: ["Computer Vision", "Machine Learning", "Full-Stack"],
    tech: ["Python", "OpenCV", "scikit-learn", "FastAPI", "Next.js", "Random Forest"],
    github: "https://github.com/MAHIMAJYOTI/ROADGAURD-X",
    live: "https://roadgaurd-x.vercel.app/",
    screenshot:
      "https://raw.githubusercontent.com/MAHIMAJYOTI/ROADGAURD-X/main/docs/screenshots/dashboard-hero.png",
    highlights: [
      "Built an offline CV + ML risk pipeline (OpenCV feature extraction → Random Forest) scoring driving video as LOW / MEDIUM / HIGH per frame",
      "Achieved 99.6% accuracy / 0.995 macro F1 on a 1,000-sample held-out test set from 5,000 engineered training samples across 9 features",
      "Deployed a FastAPI + Next.js dashboard (Vercel / Render) with explainable outputs: feature contributions, session metrics, and confusion matrix",
    ],
  },
  {
    name: "UIDAI District Stress Analytics Platform",
    subtitle: "UIDAI Hackathon · Predictive Analytics",
    description:
      "Large-scale ETL and ML pipeline on ~4.8M UIDAI records — Service Stress Ratio, Random Forest classification, and live district risk dashboard.",
    tags: ["Data Science", "ETL", "Machine Learning"],
    tech: ["Python", "Pandas", "scikit-learn", "NumPy", "Next.js", "Recharts"],
    github: "https://github.com/MAHIMAJYOTI/adhaarzones",
    live: "https://uidai-data-hackathon-2026.vercel.app/",
    screenshot: "/projects/adhaarzones-overview.png",
    highlights: [
      "Developed an automated ETL pipeline for 4.8M+ UIDAI records across 1,000+ districts: imputation, temporal aggregation, feature engineering, .joblib serialization",
      "Engineered the Service Stress Ratio target metric and identified it as the most influential feature using Random Forest feature-importance analysis",
      "Built Next.js district risk dashboard (Recharts) with Z-score dynamic thresholding; zero human-in-the-loop batch pipeline (run_pipeline.py)",
    ],
  },
];

export const codeSnippet = {
  filename: "cloudcollab_socket.js",
  lines: [
    "io.to(roomId).emit('code:sync', { code, userId, cursor })",
    "socket.on('webrtc:signal', (payload) => peer.signal(payload))",
    "await ddb.put({ TableName: 'Messages', Item: message })",
    "app.post('/api/rooms/:pin/join', auth, joinRoom)",
    "// Socket.IO + WebRTC + DynamoDB · CloudCollab realtime stack",
  ],
};

export const marqueeTech = [
  "Full-Stack Development",
  "REST API",
  "WebSockets",
  "Next.js",
  "React",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "DynamoDB",
  "JWT Authentication",
  "Docker",
  "AWS",
  "OpenCV",
  "Random Forest",
  "TypeScript",
  "System Design",
];

export const achievements = [
  {
    year: "2025–26",
    title: "180+ LeetCode Problems",
    description:
      "Solved 180+ problems across Arrays, Strings, Linked Lists, Trees, Graphs, and Dynamic Programming (leetcode.com/u/Mahima4).",
  },
  {
    year: "2025",
    title: "MERN Stack Certification — Ethnus",
    description:
      "Completed MERN Stack Certification Program covering React, Node.js, Express, and MongoDB.",
  },
  {
    year: "2025",
    title: "Google IT Support Certificate",
    description: "Completed Google IT Support Professional Certificate on Coursera.",
  },
  {
    year: "2024",
    title: "Azure Data Fundamentals",
    description:
      "Microsoft certification covering cloud data storage, pipelines, and analytics fundamentals.",
  },
];

export const experience = [
  {
    title: "MERN Stack Certification Program",
    org: "Ethnus",
    period: "2025 · Remote",
    bullets: [
      "Completed full-stack MERN training — React UI, Node.js/Express REST APIs, MongoDB, and authentication flows",
      "Built reusable frontend components and practiced scalable application architecture with Git collaboration",
    ],
  },
];

export const education = [
  {
    institution: "Vellore Institute of Technology, Bhopal",
    program: "B.Tech, Computer Science & Engineering (AI & Machine Learning)",
    period: "Aug 2023 – May 2027",
    result: "CGPA 9.20 / 10",
  },
  {
    institution: "Class XII",
    program: "CBSE",
    period: "2022",
    result: "94.2%",
  },
  {
    institution: "Class X",
    program: "ICSE",
    period: "2020",
    result: "95.6%",
  },
];

export const certifications = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google",
    link: "https://www.coursera.org/professional-certificates/google-it-support",
  },
  {
    name: "Azure Data Fundamentals",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/",
  },
  {
    name: "MERN Stack Certification Program",
    issuer: "Ethnus (2025)",
    link: null,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
