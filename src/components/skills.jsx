import React, { useState } from "react";
import { FaJava, FaPython, FaJs, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiMysql, SiMongodb, SiSqlite, SiExpress, SiDjango, SiPostman, SiXampp, SiTailwindcss, SiBootstrap, SiReact } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { motion } from "framer-motion";
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const categoryVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } },
};

const skillsData = [
  {
    category: "Programming",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: <TbBrandVscode /> },
      { name: "Git", icon: <FaGit /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "XAMPP", icon: <SiXampp /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
];

const SkillCard = ({ category, skills }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative w-full sm:w-1/2 lg:w-1/4 p-6 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out ${
        hovered ? "bg-gradient-to-br from-gray-900 to-gray-700" : "bg-gray-800"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.h3 variants={categoryVariants} initial="initial" animate="animate" className="text-2xl text-white mb-4 font-semibold">{category}</motion.h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-white"
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
          >
            <motion.div className="text-5xl">{skill.icon}</motion.div>
            <motion.span
              className={`mt-2 text-lg ${
                hovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              } transition-opacity duration-300`}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-full py-20">
      <h2 className="text-center text-4xl text-white mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skillsData.map((data, i) => (
          <SkillCard key={i} category={data.category} skills={data.skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
