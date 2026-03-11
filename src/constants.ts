import { 
  Code2, 
  Database, 
  Terminal, 
  Settings, 
  Globe, 
  Cpu,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download
} from 'lucide-react';

export const portfolioData = {
  name: "Hetasvi Ahir",
  title: "Software Developer",
  titles: ["Java Developer", "Spring Boot Expert", "Backend Specialist"],
  summary: "Software Developer with 4+ years of experience building scalable applications using Spring Boot, Microservices, and REST APIs. Expert in Elasticsearch-powered global search, Docmosis-based document automation, and secure cloud storage integrations. Skilled in database design, testing, and gateway integrations, with a strong track record of delivering high-quality, maintainable solutions while following Agile and Scrum practices to improve productivity.",
  contact: {
    phone: "+91 63563 58855",
    email: "hetuayer@gmail.com",
    github: "https://github.com/hetasvi-ahir",
    linkedin: "https://linkedin.com/in/hetasvi-ahir",
    location: "Ahmedabad, India"
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Delivered", value: "4+" },
    { label: "Tech Stack Size", value: "20+" }
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      icon: Code2,
      items: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA"]
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch"]
    },
    {
      category: "Testing & CI/CD",
      icon: Terminal,
      items: ["JUnit", "Mockito", "Docker", "Git", "Maven"]
    },
    {
      category: "APIs & Tools",
      icon: Settings,
      items: ["REST APIs", "Swagger", "Postman", "Microservices", "Docmosis", "Jaspersoft studio"]
    },
    {
      category: "Integrations & Practices",
      icon: Globe,
      items: ["Payment Gateways", "SMS/Email Gateways", "AWS S3", "Google Cloud Storage", "Agile", "Scrum"]
    }
  ],
  experience: [
    {
      company: "Rysun Labs",
      role: "Software Developer",
      period: "2022 - Present",
      location: "Ahmedabad, India",
      description: [
        "Developing and maintaining enterprise-level Java applications using Spring Boot, Microservices architecture, and Elasticsearch for high-performance global search.",
        "Implementing automated document generation systems using Docmosis with complex JSON data transformations.",
        "Collaborating with cross-functional teams to design and implement robust RESTful APIs with advanced sorting and master data management.",
        "Integrating secure cloud file storage solutions using Google Cloud Storage (GCS) and Amazon S3.",
        "Optimizing database queries and improving system performance by 30% through efficient indexing and caching strategies."
      ]
    }
  ],
  projects: [
    {
      title: "Asset Management & Document Automation System",
      subtitle: "Enterprise Asset Management Platform",
      description: "A high-performance enterprise platform featuring Elasticsearch-powered global search, automated document generation using Docmosis, and secure cloud storage integration for large-scale asset tracking.",
      tech: ["Java", "Spring Boot", "Elasticsearch", "Docmosis", "Google Cloud Storage"],
      features: [
        "Implemented high-speed global search using Elasticsearch for millions of records",
        "Developed automated Docmosis document generation with complex JSON data transformations",
        "Built scalable REST APIs with advanced sorting, filtering, and master data management",
        "Integrated secure cloud file uploads and retrieval using Google Cloud Storage (GCS)"
      ]
    },
    {
      title: "Centralized Information Management System",
      subtitle: "Enterprise Resource Planning",
      description: "A high-availability enterprise resource planning (ERP) system designed for centralized data management, featuring multi-provider payment gateway integrations, comprehensive audit trails for regulatory compliance, and high-performance reporting modules.",
      tech: ["Java", "Spring Boot", "MySQL", "Payment Gateways", "Jasper Reports"],
      features: [
        "Integrated multiple secure payment gateways (Razorpay, HDFC) with automated reconciliation",
        "Implemented automated SMS and Email notification systems for real-time transaction alerts",
        "Developed robust audit trails and management dashboards for enhanced data transparency and security",
        "Optimized global search functionality across complex modules, reducing data retrieval time by 40%",
        "Engineered automated reporting using Jasper Reports for periodic financial and operational audits"
      ]
    },
    {
      title: "Role-Based Attendance Tracking System",
      subtitle: "Administrative Automation",
      description: "An automated tracking system with granular role-based access control and comprehensive automated reporting for organizational efficiency.",
      tech: ["Java", "Spring Boot", "REST APIs", "Swagger", "RBAC"],
      features: [
        "Implemented fine-grained role-based access control (RBAC)",
        "Standardized API documentation using Swagger",
        "Automated generation of periodic performance reports",
        "Integrated instant notification systems for real-time updates"
      ]
    },
    {
      title: "Medical Imaging & DICOM Solution",
      subtitle: "Healthcare Technology",
      description: "Advanced medical imaging processing system supporting various standard formats with secure cloud storage integration for healthcare providers.",
      tech: ["Java", "Spring Boot", "DICOM", "Amazon S3"],
      features: [
        "Support for various standard medical imaging formats",
        "Secure integration with cloud storage for sensitive data",
        "High-performance image processing and retrieval pipeline",
        "Standardized RESTful APIs for metadata and image management"
      ]
    }
  ],
  education: [
    {
      institution: "Aditya Silver Oak Institute of Technology",
      degree: "B.E. Computer Engineering",
      period: "2019 - 2022"
    },
    {
      institution: "Government Polytechnic for Girls",
      degree: "Diploma in Computer Engineering",
      period: "2016 - 2019"
    }
  ]
};
