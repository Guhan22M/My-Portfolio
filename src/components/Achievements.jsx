import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
  { title: "Effortless Shopping: Unlocking Easy Access at Ration Shop", description: "Presented a paper at GECOST." },
  { title: "Secured Recognition in Debugging Contest", description: "Showcased problem-solving skills at KPRCAS." },
  { title: "Completed Full-Stack Internship", description: "Developed an LMS using React and Django at KGIT Services." },
  { title: "Solved 250+ Java Problems", description: "Solved problems including DSA on E-Box." },
];

const Achievements = () => {
  return (
    <div className="w-full min-h-screen py-20">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl text-center mb-12"
      >
        Achievements
      </motion.h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 h-full hidden sm:block"></div>
        {achievementsData.map((achieve, index) => (
          <motion.div
            key={index}
            className={`relative mb-8 w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} sm:flex-row flex-col items-center`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm sm:max-w-md p-6 border border-gray-300 rounded-xl shadow-md 
                transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-purple-500 
                hover:text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{achieve.title}</h3>
              <p className="text-base sm:text-lg mt-2">{achieve.description}</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute w-6 h-6 bg-blue-500 border-4 border-white rounded-full left-1/2 transform -translate-x-1/2 hidden sm:block"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
