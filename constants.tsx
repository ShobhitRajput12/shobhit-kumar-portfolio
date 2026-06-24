
import { Project, SkillCategory, Education, Achievement, WorkExperience, Certification } from './types';
import hirebuddyImg from './components/assets/hirebuddy.png';

export interface ProjectWithLink extends Project {
  liveUrl?: string;
  githubUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Shobhit Kumar",
  title: "Full Stack Developer",
  location: "Noida, Uttar Pradesh",
  phone: "+91 9368548169",
  email: "shobhitrajput967@gmail.com",
  linkedin: "https://www.linkedin.com/in/shobhit-kumar-4521b7264/",
  github: "https://github.com/ShobhitRajput12",
  resume: "/Shobhit_kumar_Resume.pdf" // Correct path to your resume inside public folder!
};

export const EDUCATION: Education[] = [
  {
    institution: "Graphic Era Deemed University",
    location: "Dehradun, India",
    degree: "Master of Computer Applications (MCA)",
    duration: "Aug 2024 – May 2026",
    score: "CGPA: 8/10",
    coursework: ["Object-Oriented Programming", "Database Management", "Data Structures and Algorithms", "Operating Systems", "Computer Networks", "Machine Learning"]
  },
  {
    institution: "Gurukula Kangri",
    location: "Haridwar, India",
    degree: "Bachelor of Science(CS)",
    duration: "Aug 2021 – Jun 2024",
    score: "CGPA: 8.1/10"
  },
  {
    institution: "Dayawati Dharmavira Public School",
    location: "Bijnor, India",
    degree: "Senior Secondary (Class 12th) - CBSE",
    duration: "2021",
    score: "Percentage: 80.5%",
    coursework: ["Physics", "Chemistry", "Mathematics", "English"]
  },
  {
    institution: "Dayawati Dharmavira Public School",
    location: "Bijnor, India",
    degree: "Secondary (Class 10th) - CBSE",
    duration: "2019",
    score: "Percentage: 84.5%",
    coursework: ["Mathematics", "Science", "English", "Social Science"]
  }

];

export const EXPERIENCE: WorkExperience[] = [
  {
    company: "Ostera AI",
    role: "Full Stack Developer-Intern",
    location: "Bengaluru, Karnataka",
    duration: "Mar 2026 – May 2026",
    points: [
      "Developed scalable full-stack web applications using React.js, Node.js, Express, and MongoDB",
      "Built secure REST APIs with JWT authentication and role-based access control",
      "Collaborated with the founding team to deliver AI-powered product features and MVPs",
      "Improved backend workflows, debugging pipelines, and deployment reliability"
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT"]
  }
];

export const SKILLS: SkillCategory[] = [
  { category: "Programming Languages", items: ["C", "C++", "Java", "JavaScript", "Python"] },
  { category: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express.js", ".NET", "Tailwind CSS", "Socket.io"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { category: "Tools & Technologies", items: ["Git", "GitHub", "Docker"] },
  { category: "Cloud Services", items: ["AWS", "Google Cloud"] },
  { category: "Other Skills", items: ["Problem-solving", "Analytical Thinking", "Self Learner", "Adaptability", "Communication", "Team Collaboration"] }
];

export const PROJECTS: (Project & { liveUrl?: string; githubUrl?: string })[] = [
  {
    title: "Hirebuddy AI - Recruiter Bot",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Gemini API", "JWT", "Tailwind CSS", "Render"],
    image: hirebuddyImg,
    liveUrl: "https://ai-recruiter-bot-frontend.onrender.com/",
    githubUrl: "https://github.com/ShobhitRajput12/ai-recruiter-bot",
    points: [
      "Built an AI-powered recruitment platform for resume screening and candidate ranking",
      "Implemented resume parsing for PDF, DOC/DOCX, and image files using OCR",
      "Developed AI-based candidate scoring and natural language search features",
      "Integrated secure JWT authentication and deployed a scalable full-stack application"
    ]
  },
  {
    title: "Real-Time Chat Application",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS", "Render"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2000&auto=format&fit=crop",
    liveUrl: "https://fullstack-chat-app-ixho.onrender.com/login",
    githubUrl: "https://github.com/ShobhitRajput12/fullstack-chat-app",
    points: [
      "Built a full-stack real-time chat application with secure JWT authentication",
      "Implemented instant messaging using Socket.io and MongoDB for message storage",
      "Designed a responsive UI with React.js and Tailwind CSS",
      "Deployed the application on Render for reliable access"
    ]
  },
  {
    title: "Plant Disease Detector",
    technologies: ["Python", "CNN", "OpenCV", "Streamlit", "Flask"],
    image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=2000&auto=format&fit=crop",
    githubUrl: "https://github.com/ShobhitRajput12/flower-classification-project",
    points: [
      "Built a deep learning model using CNN to detect plant diseases from leaf images",
      "Achieved high classification accuracy with image preprocessing via OpenCV",
      "Deployed a user-friendly web app using Streamlit and Flask"
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "DSA Excellence", description: "Solved 350+ DSA problems on LeetCode & GeeksforGeeks, mainly using C++" },
  { title: "Coding Consistency", description: "Earned 100 Days Coding Badges (2024 & 2025) with a max streak of 19 days" },
  { title: "Rankings", description: "LeetCode rating 1495 and Institute Rank 127 on GeeksforGeeks" }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    icon: "fa-solid fa-cloud text-red-500"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    icon: "fa-solid fa-code text-sky-400"
  },
  {
    title: "Java Programming",
    issuer: "Udemy",
    date: "2024",
    icon: "fa-brands fa-java text-red-500"
  },
  {
    title: "C++ Programming",
    issuer: "Udemy",
    date: "2023",
    icon: "fa-solid fa-laptop-code text-emerald-400"
  }
];
