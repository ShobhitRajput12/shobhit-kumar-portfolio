
import { Project, SkillCategory, Education, Achievement } from './types';

export interface ProjectWithLink extends Project {
  liveUrl?: string;
  githubUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Shobhit Kumar",
  title: "Full Stack Developer",
  location: "Dehradun, Uttarakhand",
  phone: "+91 9368548169",
  email: "shobhitrajput967@gmail.com",
  linkedin: "https://linkedin.com/in/shobhitkumar",
  github: "https://github.com/ShobhitRajput12"
};

export const EDUCATION: Education[] = [
  {
    institution: "Graphic Era Deemed University",
    location: "Dehradun, India",
    degree: "Master of Computer Applications (MCA)",
    duration: "Aug 2024 – Jun 2026",
    score: "CGPA (till 3rd Sem): 8/10",
    coursework: ["Object-Oriented Programming", "Database Management", "Data Structures and Algorithms", "Operating Systems", "Computer Networks", "Machine Learning"]
  },
  {
    institution: "Gurukula Kangri",
    location: "Haridwar, India",
    degree: "Bachelor of Science",
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

export const SKILLS: SkillCategory[] = [
  { category: "Programming Languages", items: ["C", "C++", "Java", "JavaScript", "Python"] },
  { category: "Frameworks & Libraries", items: ["React", "Node.js", "Express", "Socket.io", "Tailwind CSS"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { category: "Tools & Cloud", items: ["Git", "Docker", "AWS", "Azure", "Google Cloud", "Render"] }
];

export const PROJECTS: (Project & { liveUrl?: string; githubUrl?: string })[] = [
  {
    title: "Chatty - Real Time Chat App",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    // This image URL now represents the specific dark login theme from your screenshot
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2000&auto=format&fit=crop", 
    liveUrl: "https://fullstack-chat-app-ixho.onrender.com/login",
    githubUrl: "https://github.com/ShobhitRajput12/fullstack-chat-app",
    points: [
      "Developed a secure full-stack chat application with custom 'Welcome Back' auth flow",
      "Integrated Socket.io for real-time bidirectional communication and status tracking",
      "Designed a sleek, dark-themed responsive UI matching professional messaging standards",
      "Deployed on Render with a live production environment for real-world testing"
    ]
  },
  {
    title: "Flower Recognition",
    technologies: ["Python", "CNN", "Streamlit", "OpenCV", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000&auto=format&fit=crop",
    githubUrl: "https://github.com/ShobhitRajput12/flower-classification-project",
    points: [
      "Built an AI-powered classifier for identifying various flower species using deep learning",
      "Features a custom-trained CNN model optimized for image classification accuracy",
      "Implemented a clean Streamlit dashboard for real-time image uploads and inference",
      "Utilized OpenCV for image pre-processing to improve model prediction robustness"
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "DSA Excellence", description: "Solved 350+ DSA problems on LeetCode & GeeksforGeeks, mainly using C++" },
  { title: "Coding Consistency", description: "Earned 100 Days Coding Badges (2024 & 2025) with a max streak of 19 days" },
  { title: "Rankings", description: "LeetCode rating 1495 and Institute Rank 127 on GeeksforGeeks" }
];
