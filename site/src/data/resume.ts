export const personal = {
  name: "Bhupinder Kumar",
  title: "Python Full-Stack Developer",
  tagline:
    "Trading automation, cloud infrastructure, and data-driven systems — from backtesting engines to production APIs.",
  location: "Abu Dhabi, UAE",
  email: "bhupisingh080@gmail.com",
  phones: [
    { iso2: "IN", number: "+91 8527123249" },
    { iso2: "AE", number: "+971 505668351" },
  ],
  totalExperience: "4+ years",
  resumeDownloadUrl:
    "https://drive.google.com/file/d/1p329uEj-EAt3W977hphebiHG_CW1nuqG/view?usp=sharing",
  heroImageSrc: "/hero.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/bhupinder-kumar-sde/",
    github: "https://github.com/bhupi080",
    youtube: "https://www.youtube.com/@bhupisingh080",
  },
} as const;

export const about = {
  photoSrc: "/about-photo.jpg",
  paragraphs: [
    "I'm a Python-focused full-stack developer who builds production backends with FastAPI, Flask, Django, and Django REST Framework — designing RESTful APIs, integrating third-party services, and working with MySQL, SQLite, and Redis for reliable data layers.",
    "My day-to-day spans trading automation and cloud-heavy systems: MetaTrader and TradingView integrations, AWS operations at scale, Dockerized deployments, and automation with Jenkins and Terraform — always with an eye on performance and cost.",
    "I hold an MCA from Chandigarh University (2021–2023) with a strong base in Python, Java, C, and software engineering fundamentals — the same discipline I bring to mentoring, troubleshooting, and shipping maintainable systems.",
  ],
} as const;

export type ExperienceItem = {
  emoji: string;
  logoSrc?: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  projects?: { name: string; bullets: string[] }[];
};

export const experience: ExperienceItem[] = [
  {
    emoji: "",
    logoSrc: "/Sirius.jpg",
    role: "Software Developer",
    company: "Sirius International Holding (An IHC Company)",
    location: "Abu Dhabi, United Arab Emirates",
    start: "May 2025",
    end: "Present",
    highlights: [],
    projects: [
      {
        name: "Trading Automation",
        bullets: [
          "Built an end-to-end backtesting engine for TradingView strategies, including order-size adjustment, equity curves, and dynamic entry and exit rules for historical performance.",
          "Analyzed trade and market data to pinpoint strong-performing sessions and timeframes, quantify U.S. news impact, and calibrate position sizing and risk.",
          "Oversaw AWS infrastructure spanning 70+ servers with monthly cloud spend exceeding $9,000.",
          "Worked with Jenkins CI/CD to manage deployments across all servers.",
          "Integrated MetaTrader 5 with Python for algorithmic trading and data handling.",
          "Built APIs with Flask and FastAPI to manage and execute trades programmatically in MetaTrader 5.",
          "Designed and deployed cloud infrastructure from scratch for high availability and scalability.",
          "Used Redis to keep trades and orders in sync across servers.",
          "Managed cloud servers to ensure 24/7 uptime and operational reliability.",
          "Integrated Telegram via Python bots for real-time trade alerts, execution notifications, and strategy status updates.",
          "Reduced cloud costs by up to 50% through optimized server utilization.",
          "Developed MetaQuotes Language (MQL) Expert Advisors to automate trading execution.",
        ],
      },
      {
        name: "Bitcoin Mining",
        bullets: [
          "SHA-256 generator (custom implementation) for Bitcoin mining, with supporting software to compute candidate block hashes.",
          "Developed Python-based software to validate block header hashes ensuring they are below the target threshold.",
          "Worked with Bitcoin block structure: Merkle tree construction, coinbase transactions, and header fields for candidate blocks.",
          "Managed AWS infrastructure using Elastic Container Service (ECS) to run up to 1000 instances with a single click.",
          "Minimized Docker image size through multi-stage builds and optimized dependencies for leaner ECS deployments.",
          "Defined AWS infrastructure as code with Terraform (IaC) to automate deployment and scaling.",
          "Worked with Bitcoin Core software to submit blocks to the Blockchain network.",
        ],
      },
    ],
  },
  {
    emoji: "",
    logoSrc: "/Dmi.jpg",
    role: "Data Analyst",
    company: "DMI Finance Pvt Ltd",
    location: "Delhi, India",
    start: "Feb 2025",
    end: "May 2025",
    highlights: [
      "Collaborated with partners of DMI, including Airtel, Google, and Flipkart, to optimize proprietary approval algorithms, enhancing loan approval rates and minimizing rejection rates.",
      "Designed and implemented data-driven campaigns for personal loan offers by leveraging APIs, machine learning models, and analytics to optimize targeting, engagement, and conversion rates.",
      "Analyzed large datasets using SQL and Python to identify patterns and improve loan approval strategies based on historical approval trends.",
      "Developed automation scripts to streamline campaign execution, reduce manual effort, and enhance the efficiency of loan offer distribution.",
    ],
  },
  {
    emoji: "",
    logoSrc: "/Sun%20foundation.jpg",
    role: "Technical Instructor — Software Development",
    company: "Sun Foundation",
    location: "Delhi, India",
    start: "July 2023",
    end: "Feb 2025",
    highlights: [
      "C Language Instruction: Taught core concepts including arrays, pointers, flow control statements, strings, functions, recursion, structures, and unions.",
      "Python Language Instruction: Educated trainees on core Python, emphasizing inbuilt data structures, decorators, generators, and database connectivity.",
      "Python Exception Handling: try, except, finally, and custom exception creation for robust error management.",
      "Linux Kernel fundamentals, essential commands for system administration, performance optimization, and deployment.",
      "REST API concepts: resource management, HTTP methods, and data representation using JSON/XML.",
      "Proficient in Git for version control and GitHub for repository management.",
    ],
  },
  {
    emoji: "",
    logoSrc: "/Lovenheal.jpg",
    role: "Software Developer — DevOps Engineer",
    company: "Reach Love N Heal Pvt Ltd",
    location: "Pune, India",
    start: "February 2022",
    end: "November 2024",
    highlights: [
      "Lead backend technical team, managing project environments from development to production.",
      "RESTful API development using Python and Java, ensuring scalability and security.",
      "Improved API response time by 20% through caching techniques, cache testing, and optimization.",
      "Hands-on experience with AWS services, including EC2, S3, and SQS.",
      "Implemented containerized applications using Docker, focusing on cloud deployment efficiency.",
      "Proficient in MySQL database management and Linux system administration.",
      "Ensured compliance with SMS regulations by registering and managing templates on the Jio DLT platform.",
      "Strong expertise in Linux system administration, including command-line operations and scripting for automation and CI/CD.",
      "Monitored AWS billing activities to maintain cost efficiency; reduced cloud development cost by up to 40%.",
      "Developed RESTful APIs using Python and Java in Agile development with production-grade standards and defect fixes.",
    ],
  },
];

export const education = {
  school: "Chandigarh University",
  degree: "Master of Computer Application (MCA)",
  period: "June 2021 – June 2023",
  detail: "CGPA: 7.90",
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C", "Object-Oriented Programming", "SQL", "MQL"],
  },
  {
    title: "Frameworks",
    items: ["Django", "FastAPI", "Flask", "Spring Boot", "Django REST Framework (DRF)"],
  },
  {
    title: "Tools",
    items: [
      "NumPy",
      "Pandas",
      "JWT",
      "Docker",
      "Git",
      "GitLab",
      "Jenkins",
      "AWS (EC2, ECS, S3, CodeCommit, Redshift, Athena)",
    ],
  },
  {
    title: "Web Technology",
    items: ["HTML5", "CSS", "REST APIs"],
  },
  {
    title: "Operating System",
    items: ["Linux", "Windows", "FreeBSD"],
  },
  {
    title: "Database",
    items: ["MySQL", "SQLite", "Redis"],
  },
  {
    title: "Platforms",
    items: ["PyCharm", "Jupyter Notebook", "Visual Studio Code", "IntelliJ IDEA"],
  },
];

export const projects = [
  {
    emoji: "📈",
    name: "Trading Automation Project - TradingView X cTrader",
    tech: ["Python", "FastAPI", "cTrader Open API", "AWS", "Cloudflare"],
    bullets: [
      "Built a secure trading automation bridge that receives TradingView webhook signals and executes trades on cTrader (FXPro).",
      "Implemented signal-to-account routing and optional symbol mapping for broker-specific execution behavior.",
      "Developed APIs for order placement, position management, stop-loss/take-profit updates, and trade history retrieval.",
      "Deployed and operated the solution on AWS with Cloudflare edge security, ensuring reliable production execution.",
    ],
    href: "https://github.com/bhupi080/ctrader",
  },
  {
    emoji: "🧩",
    name: "Sudoku Solver using Boolean Satisfiability (SAT)",
    tech: ["Python", "PySAT", "Boolean Satisfiability Problem (SAT)"],
    bullets: [
      "Encoded 9×9 Sudoku grid constraints as a Boolean Satisfiability (SAT) problem.",
      "Implemented CNF (Conjunctive Normal Form) encoding ensuring each row, column, and 3×3 sub-grid contained digits 1–9 exactly once.",
      "Utilized the PySAT library to generate and solve clauses, producing valid Sudoku solutions efficiently.",
      "Automated the entire process — from puzzle input to SAT encoding and decoded Sudoku output.",
    ],
    href: "https://github.com/bhupi080/sudoku-solver_pysat",
  },
];
