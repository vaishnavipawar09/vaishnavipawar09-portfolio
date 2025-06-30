
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
    image: "logos/cloudflow.jpg",
    name: "CloudFlow: Automated CI/CD Pipeline",
    overview: "A cloud-native, serverless CI/CD pipeline automating integration, testing, and deployment. Reduced release cycles by 28% and downtime by 30% using AWS EKS, Docker, and Terraform.",
    keyFeatures: [
      "GitHub Actions automation",
      "Infrastructure as a Code", 
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
    image: "logos/exhibit.png",
    name: "Exhibit Ease: Museum Booking Management System",
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
    categories: ["Full Stack", "Cloud & DevOps", "Backend"],
    order: 2
  },
  {
    id: 3,
    image: "logos/transparency.png",
    name: "Transparency of Ethical Products in Supply Chain",
    overview: "Blockchain-powered system for product traceability and authentication; published research on how decentralized ledgers and QR codes increase supply chain trust.",
    keyFeatures: [
      "Blockchain-based ledger",
      "QR code authentication",
      "Smart contracts",
      "Secure data",
      "Scalable architecture"
    ],
    techStack: ["Ethereum", "Hyperledger", "Python", "Java", "Solidity", "MySQL", "AWS", "Firebase"],
    role: "Led Blockchain Infrastructure, Data security, Developer",
    links: {
      github: "https://github.com/vaishnavipawar09/Transparency-of-Ethical-Products-and-its-source-in-Supply-Chain",
      report: "https://github.com/vaishnavipawar09/Transparency-of-Ethical-Products-and-its-source-in-Supply-Chain/blob/main/Vaishnavi%20Pawar%20Report.pdf",
      paper1: "https://www.ijrar.org/viewfull.php?&p_id=IJRAR22B2177",
      paper2: "https://ijsrem.com/download/evaluation-of-technology-in-modern-supply-chain-management-using-blockchain/"
    },
    categories: ["Full Stack", "AI/ML & Data Science", "Backend"],
    order: 3
  },
  {
    id: 4,
    image: "logos/file.jpg",
    name: "Format-360 File Conversion Engine on Google Cloud Platform",
    overview: "A scalable cloud-based file conversion service supporting multiple formats with automated processing and storage optimization.",
    keyFeatures: [
      "Multi-format support",
      "Cloud-native architecture",
      "Automated processing",
      "Storage optimization",
      "Real-time conversion"
    ],
    techStack: ["GCP", "Cloud Run", "Cloud Storage","Python", "Node.js", "Docker", "Firebase", "Bash", "RBAC"],
    role: "Backend development and cloud infrastructure",
    links: {
      github: "https://github.com/vaishnavipawar09/Format-360-File-Conversion-Engine-on-GCP",
      report: "https://github.com/vaishnavipawar09/Format-360-File-Conversion-Engine-on-GCP/blob/main/ECC%20Final%20Report%20Vaishnavi%20Pawar.pdf",
      presentation:"https://github.com/vaishnavipawar09/Format-360-File-Conversion-Engine-on-GCP/blob/main/Format360%20Presentation..pdf",
      demo: "https://drive.google.com/file/d/1R-ACP9CkGf7PfC92ZibKcE4uR_YfTj4w/view"
    },
    categories: ["Cloud & DevOps", "Backend"],
    order: 4
  },
  {
    id: 5,
    image: "logos/healthcare.jpg",
    name: "GDP-Healthcare-Analysis",
    overview: "Comprehensive analysis of GDP and healthcare spending correlations across different countries using advanced data science techniques.",
    keyFeatures: [
      "Statistical analysis",
      "Data visualization",
      "Predictive modeling",
      "Interactive dashboards",
      "Trend analysis"
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "Google Cloud Platform", "Jupyter", "BigQuery", "Seaborn", "NumPy"],
    role: "Data analysis and visualization",
    links: {
      github: "https://github.com/vaishnavipawar09/GDP-Healthcare-Analysis",
      report:"https://github.com/vaishnavipawar09/GDP-Healthcare-Analysis/blob/main/FA24_I535_GDP_Healthcare_Project%20Vaishnavi%20Pawar.pdf"
    },
    categories: ["AI/ML & Data Science", "Cloud & DevOps", "Visualization"],
    order: 5
  },
  {
    id: 6,
    image: "logos/smoking.png",
    name: "Prediction of Smoking and Drinking Behaviors Using NHIS Korea Dataset",
    overview: "Machine learning model to predict smoking and drinking behaviors using comprehensive health survey data from Korea.",
    keyFeatures: [
      "Predictive modeling",
      "Feature engineering",
      "Statistical analysis",
      "Health data processing",
      "Behavioral prediction"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "SMOTE", "Jupyter"],
    role: "Machine Learnng Model development, Data analysis",
    links: {
      github: "https://github.com/vaishnavipawar09/Data-Mining-Project",
      report: "https://github.com/vaishnavipawar09/Data-Mining-Project/blob/main/Final_report/Final_Report-mk159-vpawar-singsara.pdf",
      presentation: "https://github.com/vaishnavipawar09/Data-Mining-Project/blob/main/presentation/project_presentationt-mk159-vpawar-singsara.pdf"
    },
    categories: ["AI/ML & Data Science"],
    order: 6
  },
  {
    id: 7,
    image: "logos/fitness.jpg",
    name: "FitTrackPro - Fitness Tracking System",
    overview: "Comprehensive fitness-tracking platform database supports real-time activity logging, goal setting, nutrition management, and community challenges.",
    keyFeatures: [
      "ER Modeling",
      "Normalized/Denormalized Relational Schema",
      "Progress visualization",
      "User analytics"
    ],
    techStack: ["MySQL", "SQL", "ERDPlus", "SQLWorkbench"],
    role: "Database modeling, schema design, Data Analyst",
    links: {
      github: "https://github.com/vaishnavipawar09/Fitness-Tracking-System",
      report: "https://github.com/vaishnavipawar09/Fitness-Tracking-System/blob/main/Fitness%20Tracking%20System-%20Query%20Titans%20Final%20Project%20Report.pdf"
    },
    categories: ["AI/ML & Data Science", "Visualization"],
    order: 7
  },
  {
    id: 8,
    image: "logos/gender.png",
    name: "Gender Diversity and Pay Equity in the Tech Industry",
    overview: "Data analysis project examining gender diversity trends and pay equity patterns in the technology sector.",
    keyFeatures: [
      "Diversity analysis",
      "Pay equity metrics",
      "Industry trends",
      "Statistical insights",
      "Interactive visualizations"
    ],
    techStack: ["Python", "Tableau", "SQL","Pandas", "Dual-Axis"],
    role: "Data Analyst, Visualizations",
    links: {
      github: "https://github.com/vaishnavipawar09/Information-Visualization",
      tableau: "https://public.tableau.com/views/Project_17452639379470/Dashborad1Intro?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    categories: ["AI/ML & Data Science", "Visualization"],
    order: 8
  },
  {
    id: 9,
    image: "logos/admission.png",
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
      github: "https://github.com/vaishnavipawar09/Admission-Management-System",
      report: "https://github.com/vaishnavipawar09/Admission-Management-System/blob/main/Admission%20Management%20System.pdf"
    },
    categories: ["Full Stack", "Backend"],
    order: 9
  },
  {
    id: 10,
    image: "logos/bank.jpg",
    name: "Basic Banking App",
    overview: "Secure banking application with transaction management, account handling, and financial operations.",
    keyFeatures: [
      "Account management",
      "Transaction processing",
      "Security features",
      "Balance tracking",
      "Transaction history"
    ],
    techStack: ["Restful API", "HTML", "PHP", "JWT"],
    role: "Full-stack development with security implementation",
    links: {
      github: "https://github.com/vaishnavipawar09/The-Sparks-Foundation-Bank"
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
