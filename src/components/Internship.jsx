import React from "react";
import { motion } from "framer-motion";
import lms from "../assets/projects/lms.webp";

const textContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1 },
  },
};

const Internship = () => {
  return (
    <div className="pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="my-20 text-center text-4xl"
      >
        Internship Experience
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center items-center">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="w-full lg:w-1/2 px-4">
          <motion.h3 variants={textItemVariants} className="mb-2 font-semibold text-2xl">
            Full Stack Developer Intern
          </motion.h3>
          <motion.p variants={textItemVariants} className="mb-2 text-stone-400">
            KGIT Services
          </motion.p>
          <motion.p variants={textItemVariants} className="mb-4 text-stone-500 italic">
            Jan 2024 - Jun 2024
          </motion.p>
          <motion.ul className="list-disc pl-5 text-stone-300">
            <motion.li variants={textItemVariants}>Solved 75+ Python programs including OOPs concepts.</motion.li>
            <motion.li variants={textItemVariants}>Developed a Learning Management System (LMS) using React, Django, Bootstrap, and SQLite.</motion.li>
            <motion.li variants={textItemVariants}>Implemented JWT for authentication ensuring secure access.</motion.li>
            <motion.li variants={textItemVariants}>Created a responsive and user-friendly interface for seamless navigation.</motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="w-full lg:w-1/3 flex justify-center mt-10 lg:mt-0"
        >
          <img
            src={lms}
            alt="LMS Project"
            className="h-60 w-60 lg:h-80 lg:w-80 border border-stone-900 rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Internship;
