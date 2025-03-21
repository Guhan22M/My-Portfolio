import project1 from "../assets/projects/lms.webp";
import project2 from "../assets/projects/product-store.webp";
import project3 from "../assets/projects/portfolio.webp";
import project4 from "../assets/projects/portfolio-generator.webp";


export const HOME_CONTENT = `Hi, I'm Guhan, a full-stack developer with a passion for problem-solving in Java. I'm currently working with the MERN stack and enjoy adapting to new technologies. I also have a basic understanding of UI/UX design, which helps me build user-friendly applications. I'm dedicated to continuous learning and creating effective solutions.`

export const educationData = [
  {
    degree: "B.E. Computer Science and Engineering",
    year: "2026",
    grade: "CGPA: 7.9",
    institution: "KPR Institute of Engineering and Technology, Coimbatore",
  },
  {
    degree: "HSC",
    year: "2022",
    grade: "Aggregate: 88.6%",
    institution: "St Johns Matric Higher Secondary School, Tirunelveli",
  },
  {
    degree: "SSLC",
    year: "2020",
    grade: "Aggregate: 97.2%",
    institution: "St Johns Matric Higher Secondary School, Tirunelveli",
  },
];

export const PROJECTS = [
  {
    title: "Learning Management System",
    image: project1,
    description:
      "Developed a Learning Management System (LMS), enhancing user experience and course accessibility through intuitive design and robust functionality. Collaborated with a team to implement features that improved learner engagement and tracking.",
    technologies: ["React", "Django", "SQLite", "Bootstrap", "Java Script"],
    github: "https://github.com/Guhan22M/LMS-Website",
  },
  {
    title: "Product Store",
    image: project2,
    description:
      "Developed a full-stack Product Store website using MERN, integrating Zustand for global state management and Tailwind CSS for a responsive, dark-mode-enabled UI. Implemented CRUD operations for product management, optimized API handling, and deployed the application on Render.com for seamless cloud hosting.",
    technologies: ["Mongo", "Express","React", "Node", "Tailwind"],
    github: "https://github.com/Guhan22M/ProductStore-MERN",
  },
  {
    title: "PortFolio",
    image: project3,
    description:
    "Developed a responsive and interactive personal portfolio using React, Tailwind CSS, and Framer Motion. The website highlights my skills, projects, internships, and achievements with smooth animations and clean UI. It also includes social media links and a resume download option.",
    technologies: ["React","Tailwind", "Framer Motion"],
    github:"https://github.com/Guhan22M/ReactNative-HomeWorkoutApp-",
  },
  {
    title: "Portfolio Generator",
    image: project4,
    description:
      "Developed a student portfolio management system with CRUD functionalities (Create, Read, Update, Delete) to streamline data handling. Designed user-friendly interfaces and integrated robust data processing mechanisms, enhancing accessibility and usability.",
    technologies: ["HTML","CSS","PHP","MYSQL"],
    github:"https://github.com/Guhan22M/PortFolio-PHP",
  },

];

export const CONTACT = {
  phoneNo: "+91 9940740816",
  email: "guhan2218@gmail.com",
};
