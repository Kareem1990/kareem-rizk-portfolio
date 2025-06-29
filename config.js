// Portfolio Configuration
// Update this file with your personal information and project details

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Kareem", // Update with your full name
        title: "Data Engineer & Cloud Solutions Architect",
        description: "I specialize in building scalable data pipelines, ETL systems, and cloud infrastructure. Passionate about transforming raw data into actionable insights using modern data engineering tools and AWS services.",
        email: "kareem.magdy5@gmail.com",
        github: "https://github.com/Kareem1990",
        linkedin: "https://www.linkedin.com/in/kareem-rizk/",
        location: "Your City, Country" // Update with your location
    },

    // Skills/Technologies
    skills: [
        "Python", "Apache Airflow", "AWS", "Terraform", "Docker", 
        "ETL Pipelines", "AWS Redshift", "Apache Cassandra", "S3", 
        "AWS Glue", "PySpark", "Data Lakes", "JavaScript", "MongoDB"
    ],

    // Your 9 GitHub Projects (including Al Said Foundation)
    projects: [
        {
            title: "Sparkify ETL – Airflow + Docker + Terraform",
            description: "Orchestrated a full-stack ETL pipeline using Airflow in Docker, Redshift Serverless, and Terraform. Includes custom operators, infrastructure automation, and comprehensive data quality checks.",
            technologies: ["Apache Airflow", "Docker", "Terraform", "AWS Redshift", "Python", "ETL"],
            githubUrl: "https://github.com/Kareem1990/sparkify-etl-airflow-docker",
            liveUrl: null,
            icon: "🔄",
            thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop&auto=format",
            featured: true
        },
        {
            title: "Sparkify Redshift ETL Pipeline",
            description: "Designed a Redshift star schema and built a Python ETL pipeline to load JSON data from S3. Features fully automated cluster provisioning and dynamic configuration injection.",
            technologies: ["AWS Redshift", "Python", "S3", "ETL", "Star Schema", "JSON"],
            githubUrl: "https://github.com/Kareem1990/sparkify-redshift-etl-pipeline",
            liveUrl: null,
            icon: "🏗️",
            thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop&auto=format",
            featured: true
        },
        {
            title: "STEDI Data Lake – Full Terraform",
            description: "Converted a visual pipeline into an automated Glue-based lakehouse using Terraform, S3, and Athena. Supports curated datasets for ML analytics and data science workflows.",
            technologies: ["Terraform", "AWS Glue", "S3", "Athena", "Data Lake", "ML Analytics"],
            githubUrl: "https://github.com/Kareem1990/stedi-datalake-full-terraform",
            liveUrl: null,
            icon: "🏞️",
            thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format",
            featured: true
        },
        {
            title: "STEDI Glue Studio Visual ETL",
            description: "Built a visual ETL pipeline in AWS Glue Studio with PySpark jobs transforming IoT sensor data into trusted and curated zones for analytics.",
            technologies: ["AWS Glue Studio", "PySpark", "IoT Data", "ETL", "Data Zones"],
            githubUrl: "https://github.com/Kareem1990/stedi-datalake-glue-visual-etl",
            liveUrl: null,
            icon: "🔧",
            thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format",
            featured: true
        },
        {
            title: "Sparkify Cassandra Analytics",
            description: "Modeled and queried denormalized tables in Apache Cassandra to support music streaming analytics. Dockerized environment with automated query logic.",
            technologies: ["Apache Cassandra", "Docker", "NoSQL", "Python", "Music Analytics"],
            githubUrl: "https://github.com/Kareem1990/Sparkify-Cassandra",
            liveUrl: null,
            icon: "🎵",
            thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&auto=format",
            featured: true
        },
        {
            title: "BankScoop – Python ETL & Visualization",
            description: "Scraped and cleaned global bank data, applied currency conversion algorithms, stored results in SQLite, and visualized financial trends using Matplotlib.",
            technologies: ["Python", "Web Scraping", "SQLite", "Matplotlib", "Data Visualization", "ETL"],
            githubUrl: "https://github.com/Kareem1990/Bank_Scoop",
            liveUrl: null,
            icon: "🏦",
            thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop&auto=format",
            featured: true
        },
        {
            title: "Adopt-a-Pet – Cloud Migration",
            description: "Migrated a MERN stack application to AWS: frontend on S3, serverless backend with Lambda + API Gateway, MongoDB Atlas integration with JWT authentication.",
            technologies: ["AWS Lambda", "API Gateway", "S3", "MongoDB Atlas", "JWT", "GraphQL"],
            githubUrl: "https://github.com/Kareem1990/adopt-a-pet-cloud-migration",
            liveUrl: "http://adopt-a-pet-frontend-2025.s3-website-us-east-1.amazonaws.com/",
            icon: "🐾",
            thumbnail: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop&auto=format",
            featured: true
        },
        {
            title: "Travel Optimizer App",
            description: "Helps travelers discover points of interest in selected cities using OpenTripMap and Mapbox APIs. Built with responsive design and interactive mapping features.",
            technologies: ["JavaScript", "jQuery", "Materialize", "OpenTripMap API", "Mapbox", "HTML5"],
            githubUrl: "https://github.com/Kareem1990/travel-optimizer",
            liveUrl: "https://maryjezek.github.io/travel-optimizer",
            icon: "✈️",
            thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&auto=format",
            featured: true
        },
        {
            title: "Al Said Foundation Website",
            description: "Collaborative project for a charitable foundation. Built two versions of the site — one using Angular and another using WordPress — with custom CSS and JavaScript for enhanced UI/UX.",
            technologies: ["Angular", "WordPress", "CSS", "JavaScript", "UI/UX Design"],
            githubUrl: "https://github.com/Kareem1990/alsaid-foundation",
            icon: "🏛️",
            thumbnail: "assets/alsaid.jpeg",
            featured: true
        }
    ],

    // Articles and Publications
    articles: [
        {
            title: "The Best Guidelines to Follow If You're a New Freelance Writer",
            type: "Industry Article",
            publication: "Forbes Middle East",
            link: "https://www.forbesmiddleeast.com/industry/business/the-best-guidelines-to-follow-if-youre-new-freelance-writer",
            thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop&auto=format",
            category: "forbes"
        },
        {
            title: "The Great Historical Efforts Behind Assassin's Creed Origins",
            type: "Industry Article", 
            publication: "Forbes Middle East",
            link: "https://www.forbesmiddleeast.com/innovation/technology/great-historical-efforts-behind-assassins-creed-origins",
            thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=250&fit=crop&auto=format",
            category: "forbes"
        },
        {
            title: "BallotOnline's Cloud Adoption Plan: Strategic, Scalable, Secure",
            type: "Graduate Project (UMGC)",
            publication: "University of Maryland Global Campus",
            link: "assets/docs/BallotOnline's-Cloud-Adoption-Plan-Kareem-Rizk.pdf",
            thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format",
            category: "academic"
        },
        {
            title: "Cloud Risk, Compliance, and Data Governance Analysis",
            type: "Graduate Project (UMGC)",
            publication: "University of Maryland Global Campus", 
            link: "assets/docs/BallotOnline-Cloud-Adoption-Risk-Compliance-and-Data-Governance-Analysis.pdf",
            thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&auto=format",
            category: "academic"
        },
        {
            title: "AWS vs Azure Architecture, Cost, and Security Comparison",
            type: "Graduate Project (UMGC)",
            publication: "University of Maryland Global Campus",
            link: "assets/docs/Kareem-Rizk-BallotOnline-Cloud-Migration-Report.pdf", 
            thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
            category: "academic"
        }
    ],

    // About section content
    about: {
        description: "Risk brings Rizk — a phrase that's not just a clever play on my name, but the story of my life. The word 'Rizk' (رزق) in Arabic means livelihood — the sustenance and opportunities that come our way, often through perseverance, patience, and sometimes... risk.",
        story: "After nearly a decade working as a journalist, my career came to an abrupt halt due to uncontrollable circumstances. I lost my job — but refused to lose momentum. Instead, I chose to rebuild — from scratch. I pivoted into tech, enrolling in a full-stack web development bootcamp at George Washington University, where I discovered my passion for cloud computing.",
        experience: "I currently have 2.5 years of full-time experience, in addition to 1.5 years of internships across cloud computing, data engineering, and web development.",
        philosophy: "Every line of code I write carries the same determination that fueled my transformation. I don't just build systems — I build second chances."
    },

    // Social media and contact links
    social: {
        github: "yourusername",
        linkedin: "yourprofile",
        twitter: "yourhandle", // Optional
        portfolio: "your-portfolio.com" // Optional
    },

    // Theme colors (optional customization)
    theme: {
        primary: "#3498db",
        secondary: "#2c3e50",
        accent: "#ffd700",
        background: "#f8f9fa"
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
