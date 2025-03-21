import profile from "../assets/guhan-profile.webp";
import { HOME_CONTENT } from "../constants";
import {motion} from "framer-motion";

const containerVariants = {
  hidden:{opacity:0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duaration:0.5,
      staggerChildren:0.5
    }
  }
}

const childVariants = {
  hidden:{opacity:0,x:-100},
  visible:{opacity:1, x:0, transition:{duration:0.5}}
}

const Home = () => {
  return (
    <div className="w-full pb-4 lg:mb-3">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img src={profile} className="h-60 w-60 lg:h-80 lg:w-80 border border-stone-900 rounded-3xl object-cover"
          width={650} height={650}
          initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} 
          transition={{duration:1, delay:1.5}} />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}
           className="flex flex-col items-center lg:items-start mt-10 lg:pl-28 lg:ml-8">
            <motion.h2 variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-8xl">Guhan</motion.h2>
            <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
            <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">{HOME_CONTENT}</motion.p>
            <motion.a href="https://drive.google.com/file/d/1pDK_y8n1vhswT2n_6R8eDJ_FFJuz-OLJ/view?usp=drivesdk" 
              variants={childVariants}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
