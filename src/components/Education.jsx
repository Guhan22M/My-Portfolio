import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { educationData } from "../constants";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const EducationCard = ({ degree, year, grade, institution }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`group relative w-full sm:w-1/2 lg:w-1/3 p-10 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out ${
        hovered ? 'bg-gradient-to-br from-gray-900 to-gray-700' : 'bg-gray-800'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <h3 className="text-3xl font-bold mb-6 text-white">
        {degree} | {year}
      </h3>
      <p className="text-white text-xl mb-4">{grade}</p>
      <p className="text-white text-xl">{institution}</p>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className="w-full pb-10">
      <h2 className="my-20 text-center text-4xl font-bold text-gray-300">Education</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            degree={edu.degree}
            year={edu.year}
            grade={edu.grade}
            institution={edu.institution}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
