import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      {/* Subtitle */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Web Developer
      </motion.h2>

      {/* Name */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-5xl sm:text-3xl text-orange font-bold uppercase"
      >
        NAQASH <br className="sm:hidden md:block" />
        AHMAD
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 leading-8"
      >
        Web Developer with experience in business management, combining
         <br />technical expertise with strategic thinking to create effective
        digital <br /> solutions and achieve business goals.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap gap-4 mt-8 sm:justify-center md:justify-start"
      >
        {/* Contact Button */}
        <a
          href="#contact"
          className="px-7 py-3 bg-orange text-white rounded-lg font-semibold hover:scale-105 hover:bg-orange-600 transition-all duration-300"
        >
          Contact Me
        </a>

        {/* Download Resume Button */}
        <a
          href="/Naqash_Ahmad_Resume.pdf"
          download="Naqash_Ahmad_Resume.pdf"
          className="px-7 py-3 border-2 border-orange text-orange rounded-lg font-semibold hover:bg-orange hover:text-white hover:scale-105 transition-all duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;