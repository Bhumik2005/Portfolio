export const personal = {
  name: "Bhumik Kumta",
  role: "ML Engineer & Python Developer",
  tagline: "Building intelligent systems that solve real-world problems.",
  bio: "I'm Bhumik Kumta — an ML Engineer and Python developer focused on building production-ready machine learning solutions. From classification models and NLP systems to full-stack data-driven apps, I turn messy datasets into actionable insights.",
  bio2: "Currently leveling up my DSA skills on LeetCode and actively building my ML portfolio to land a high-impact engineering role.",
  github: "https://github.com/Bhumik2005",
  githubUsername: "Bhumik2005",
  leetcode: "https://leetcode.com/u/Bhumik_Kumta/",
  leetcodeUsername: "Bhumik_Kumta",
  email: "bhumikkumta@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhumik-kumta-/",
  avatar: "https://avatars.githubusercontent.com/u/182416255?v=4",
};

export const skills = [
  { name: "Python",       level: 90, category: "language" },
  { name: "scikit-learn", level: 80, category: "ml" },
  { name: "Pandas",       level: 85, category: "ml" },
  { name: "NumPy",        level: 82, category: "ml" },
  { name: "React",        level: 72, category: "frontend" },
  { name: "Node.js",      level: 68, category: "backend" },
  { name: "MongoDB",      level: 65, category: "backend" },
  { name: "REST APIs",    level: 75, category: "backend" },
  { name: "Git",          level: 80, category: "tools" },
  { name: "Docker",      level: 85, category: "tools" },
];

export const skillCategories = {
  language: { label: "Languages", color: "#a78bfa" },
  ml:       { label: "ML / Data", color: "#5eead4" },
  frontend: { label: "Frontend",  color: "#f472b6" },
  backend:  { label: "Backend",   color: "#fbbf24" },
  tools:    { label: "Tools",     color: "#60a5fa" },
};

export const projects = [
  {
    id: 1,
    name: "Fake News Detector",
    emoji: "🕵️",
    description: "ML model that classifies news articles as real or fake using NLP — TF-IDF vectorization + Passive Aggressive Classifier trained on a real-world dataset.",
    github: "https://github.com/Bhumik2005/fake-news-detector",
    live: "https://fake-news-detector-y6d9bbiemhqyd42t3xobrt.streamlit.app/",
    tags: ["Python", "NLP", "scikit-learn", "TF-IDF"],
    featured: true,
    accentColor: "#a78bfa",
  },
  {
    id: 2,
    name: "Iris Classification",
    emoji: "🌸",
    description: "Full ML pipeline for iris species prediction — EDA, feature engineering, and comparison of KNN, SVM, Decision Tree classifiers with cross-validation.",
    github: "https://github.com/Bhumik2005/iris-classification",
    live: "#",
    tags: ["Python", "scikit-learn", "Classification", "EDA"],
    featured: true,
    accentColor: "#5eead4",
  },
  {
    id: 3,
    name: "Titanic Survival",
    emoji: "🚢",
    description: "Kaggle classic — predicting passenger survival with data preprocessing, missing value imputation, feature engineering and binary classification.",
    github: "https://github.com/Bhumik2005/Titanic-Survival",
    live: "#",
    tags: ["Python", "Pandas", "Classification", "Feature Engineering"],
    featured: false,
    accentColor: "#60a5fa",
  },
  {
    id: 4,
    name: "Feedback MERN App",
    emoji: "💬",
    description: "Full-stack feedback system with MongoDB, Express, React and Node.js. Complete REST API with CRUD, MongoDB Atlas persistence, and React frontend.",
    github: "https://github.com/Bhumik2005/feedback-mern",
    live: "#",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    featured: false,
    accentColor: "#fbbf24",
  },
  {
    id: 5,
    name: "Developer Portfolio",
    emoji: "🎨",
    description: "Personal developer portfolio built with React + Vite. Showcases ML projects and GitHub work with a responsive, modern UI.",
    github: "https://github.com/Bhumik2005/Portfolio",
    live: "#",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    featured: false,
    accentColor: "#f472b6",
  },
];

export const leetcodeTopics = [
  { name: "Arrays & Hashing",    status: "done"   },
  { name: "Two Pointers",        status: "done"   },
  { name: "Sliding Window",      status: "active" },
  { name: "Binary Search",       status: "active" },
  { name: "Linked Lists",        status: "todo"   },
  { name: "Trees & Graphs",      status: "todo"   },
  { name: "Dynamic Programming", status: "todo"   },
  { name: "Backtracking",        status: "todo"   },
];

export const navLinks = [
  { label: "About",     href: "#about"     },
  { label: "Projects",  href: "#projects"  },
  { label: "GitHub",    href: "#github"    },
  { label: "Education", href: "#education" },
  { label: "LeetCode",  href: "#leetcode"  },
  { label: "Contact",   href: "#contact"   },
];
