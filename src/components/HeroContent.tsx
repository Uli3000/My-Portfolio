import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useResponsive } from "../hooks/useResponisve";
import Github from "./icons/GitHub";
import Email from "./icons/Email";

const HeroContent = () => {
  const [windowWidth, breakpoint] = useResponsive()

  const [text] = useTypewriter({
    words: ['Desarrollador Web', 'Ingeniero en Sistemas'],
    loop: true,
    delaySpeed: 3000
  })
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-14 w-full z-[20]"
    >
      <div className="flex flex-col justify-center w-full h-full gap-5 m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white max-w-[700px] w-auto  h-auto"
        >
          <p className="flex flex-col justify-center gap-y-3 text-wrap">
            <span>
              Soy {""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Ulises Castro
              </span>
            </span>
            {windowWidth >= breakpoint && (
              <span className="text-4xl font-medium">
                {text}
                <Cursor />
              </span>
            )}
            {windowWidth < breakpoint && (
              <span className="text-4xl font-medium">
                Desarrollador Web
              </span>
            )}
          </p>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] min-w-[200px] font-mono"
        >
          El universo ofrece tantas posibilidades como la programación y yo estoy en busca de todas ellas.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-8"
        >
          <button className='max-w-[200px] relative inline-flex items-center justify-center w-full h-12 px-6 font-medium transition-all bg-white rounded-md text-gray-950 hover:scale-105'>
            <div className='absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur' />
            <a className="w-full" href="#Acerca-de-mi">
              Conoceme
            </a>
          </button>
          <nav className="flex flex-row flex-wrap gap-4"> <a href="mailto:ulisesdev3000@gmail.com" target="_blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-900 dark:border-gray-600 dark:text-white text-md hover:bg-gray-950 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none">
            <Email className="w-4 h-4"/> Contáctame
          </a> <a href="https://github.com/Uli3000" target="_blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-white transition border border-gray-600 rounded-full dark:bg-gray-900 text-md hover:bg-gray-950 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none"> 
              <Github /> GitHub
            </a> </nav>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex items-center justify-center w-full h-full"
      >
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="invisible opacity-80 sm:visible"
          src="/Spaceman.png"
          alt="work icons"
          height={620}
          width={620}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;