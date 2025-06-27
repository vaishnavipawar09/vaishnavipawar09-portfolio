
export const projectCategories = [
  "All Projects",
  "Full Stack",
  "Cloud & DevOps", 
  "AI/ML & Data Science",
  "Backend",
  "Visualization"
];

export const projects = [
  {
    id: 1,
    name: "CloudFlow: Automated CI/CD Pipeline",
    overview: "A cloud-native, serverless CI/CD pipeline automating integration, testing, and deployment. Reduced release cycles by 28% and downtime by 30% using AWS EKS, Docker, and Terraform.",
    keyFeatures: [
      "GitHub Actions automation",
      "Infrastructure as Code", 
      "Kubernetes orchestration",
      "Automated testing",
      "Serverless deployment"
    ],
    techStack: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions", "MongoDB", "Node.js"],
    role: "Designed and implemented backend services, cloud automation, CI/CD flows.",
    links: {
      github: "https://github.com/vaishnavipawar09/AutoDeploy-CI-CD"
    },
    categories: ["Cloud & DevOps", "Backend"],
    order: 1
  },
  {
    id: 2,
    name: "Exhibit Ease – Museum Booking Management System",
    overview: "A full-stack web platform for museum reservations, ticketing, and analytics, improving visitor experience and staff efficiency.",
    keyFeatures: [
      "Timed entry slots",
      "Seamless online booking",
      "AI chatbot",
      "Analytics dashboard", 
      "Search/navigation"
    ],
    techStack: ["Python", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "AWS"],
    role: "Full-stack development (backend CRUD, frontend UI, booking automation)",
    links: {
      github: "https://github.com/vaishnavipawar09/Exhibit-Ease",
      video: "https://drive.google.com/file/d/1T3-AND-Cbl2p-qH04SspysYmeFd_mgHK/view"
    },
    team: "Team 27, Indiana University",
    categories: ["Full Stack", "Cloud & DevOps", "Backend"],
    order: 2
  },
  {
    id: 3,
    name: "Transparency of Ethical Products in Supply Chain",
    overview: "Blockchain-powered system for product traceability and authentication; published research demonstrating how decentralized ledgers and QR codes increase supply chain trust.",
    keyFeatures: [
      "Blockchain-based ledger",
      "QR code authentication",
      "Smart contracts",
      "Secure data",
      "Scalable architecture"
    ],
    techStack: ["Ethereum", "Hyperledger", "Python", "Java", "Solidity", "MySQL", "AWS", "Firebase"],
    role: "Led blockchain infrastructure, data security, published author",
    links: {
      github: "https://github.com/vaishnavipawar09/Transparency-of-Ethical-Products-and-its-source-in-Supply-Chain",
      paper1: "https://www.ijrar.org/viewfull.php?&p_id=IJRAR22B2177",
      paper2: "https://ijsrem.com/download/evaluation-of-technology-in-modern-supply-chain-management-using-blockchain/"
    },
    categories: ["Full Stack", "AI/ML & Data Science", "Backend"],
    order: 3
  },
  {
    id: 4,
    name: "Format-360 File Conversion Engine on GCP",
    overview: "A scalable cloud-based file conversion service supporting multiple formats with automated processing and storage optimization.",
    keyFeatures: [
      "Multi-format support",
      "Cloud-native architecture",
      "Automated processing",
      "Storage optimization",
      "Real-time conversion"
    ],
    techStack: ["GCP", "Python", "Node.js", "Docker", "Firebase"],
    role: "Backend development and cloud infrastructure",
    links: {
      github: "#"
    },
    categories: ["Cloud & DevOps", "Backend"],
    order: 4
  },
  {
    id: 5,
    name: "GDP-Healthcare-Analysis",
    overview: "Comprehensive analysis of GDP and healthcare spending correlations across different countries using advanced data science techniques.",
    keyFeatures: [
      "Statistical analysis",
      "Data visualization",
      "Predictive modeling",
      "Interactive dashboards",
      "Trend analysis"
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    role: "Data analysis and visualization",
    links: {
      github: "#"
    },
    categories: ["AI/ML & Data Science", "Cloud & DevOps", "Visualization"],
    order: 5
  },
  {
    id: 6,
    name: "Prediction of Smoking and Drinking Behaviors Using NHIS Korea Dataset",
    overview: "Machine learning model to predict smoking and drinking behaviors using comprehensive health survey data from Korea.",
    keyFeatures: [
      "Predictive modeling",
      "Feature engineering",
      "Statistical analysis",
      "Health data processing",
      "Behavioral prediction"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    role: "ML model development and data analysis",
    links: {
      github: "#"
    },
    categories: ["AI/ML & Data Science"],
    order: 6
  },
  {
    id: 7,
    name: "Fitness-Tracking-System (FitTrackPro)",
    overview: "Comprehensive fitness tracking application with real-time monitoring, goal setting, and progress visualization.",
    keyFeatures: [
      "Real-time tracking",
      "Goal management",
      "Progress visualization",
      "Health metrics",
      "User analytics"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    role: "Full-stack development",
    links: {
      github: "#"
    },
    categories: ["AI/ML & Data Science", "Visualization"],
    order: 7
  },
  {
    id: 8,
    name: "Gender Diversity and Pay Equity in the Tech Industry",
    overview: "Data analysis project examining gender diversity trends and pay equity patterns in the technology sector.",
    keyFeatures: [
      "Diversity analysis",
      "Pay equity metrics",
      "Industry trends",
      "Statistical insights",
      "Interactive visualizations"
    ],
    techStack: ["Python", "Pandas", "Plotly", "Tableau", "R"],
    role: "Data analysis and research",
    links: {
      github: "#"
    },
    categories: ["AI/ML & Data Science", "Visualization"],
    order: 8
  },
  {
    id: 9,
    name: "Admission-Management-System",
    overview: "Complete admission management system for educational institutions with application processing and student management.",
    keyFeatures: [
      "Application processing",
      "Student management",
      "Document handling",
      "Status tracking",
      "Admin dashboard"
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "React", "Bootstrap"],
    role: "Full-stack development",
    links: {
      github: "#"
    },
    categories: ["Full Stack", "Backend"],
    order: 9
  },
  {
    id: 10,
    name: "Basic Banking App",
    overview: "Secure banking application with transaction management, account handling, and financial operations.",
    keyFeatures: [
      "Account management",
      "Transaction processing",
      "Security features",
      "Balance tracking",
      "Transaction history"
    ],
    techStack: ["Node.js", "Express", "MongoDB", "React", "JWT"],
    role: "Full-stack development with security implementation",
    links: {
      github: "#"
    },
    categories: ["Full Stack", "Backend"],
    order: 10
  }
];

export const categoryFilters = {
  "All Projects": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Full Stack": [2, 3, 9, 10],
  "Cloud & DevOps": [1, 2, 4, 5],
  "AI/ML & Data Science": [5, 6, 7, 8, 3],
  "Backend": [1, 4, 2, 3, 10, 9],
  "Visualization": [8, 5, 7]
};
