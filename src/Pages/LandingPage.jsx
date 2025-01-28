import { FaLinkedin, FaGithubAlt, FaFilePdf, FaEnvelope } from "react-icons/fa";
import Mypic from "../assets/Media/stik.d3579f95de2c09f972a3aebce0a54691.svg";
import resume from "../assets/Yousuf-Resume.pdf";

import { motion } from "framer-motion";
import AnimatedText from "../Components/AnimatedText";
import ScrollDownIcon from "../Components/ScrollDownIcon";

function LandingPage() {
  return (
    <div className="HeroSection bg-vherobg bg-cover bg-center w-[100%] h-[95vh] lg:h-[95vh] place-content-center md:bg-herobg lg:bg-no-repeat lg:bg-contain">
      <motion.h1
        initial={{ maxHeight: 0 }}
        whileInView={{ maxHeight: 500 }}
        transition={{ duration: 2.8 }}
        className=" overflow-hidden mt-3  text-[3rem] md:text-[4rem] leading-tight text-white"
      >
        <AnimatedText text={"YousufUddin"} />
      </motion.h1>
      <div className="flex justify-center items-center gap-2 ">
        <p className="text-5xl font-[type1] inline">Web Developer</p>
      </div>
      <div className="flex justify-center gap-4 my-4">
        <a href="http://www.linkedin.com/in/yousuffuddin" target="_blank">
          <div className="icon-container cursor-pointer">
            <FaLinkedin className="social-icon" />
          </div>
        </a>
        <a href="https://github.com/Yousuf-Uddin" target="_blank">
          <div className="icon-container cursor-pointer">
            <FaGithubAlt className="social-icon" />
          </div>
        </a>
        <a href={resume} target="_blank">
          <div className="icon-container">
            <FaFilePdf className="social-icon" />
          </div>
        </a>

        <a href="mailto:yousuf.msoodi@gmail.com" target="_blank">
          <div className="icon-container">
            <FaEnvelope className="social-icon" />
          </div>
        </a>
      </div>
      <div className="avatar absolute -bottom-4 lg:-bottom-10 pt-10 ">
        <abbr title="AI Generated Avatar of Yousuf">
          <div
            className={`border-4 w-40 h-40 lg:w-24 lg:h-24 rounded-full justify-self-center bg-me bg-cover`}
          ></div>
        </abbr>
        <img src={Mypic} alt="my pic" />
      </div>
      <ScrollDownIcon />
    </div>
  );
}

export default LandingPage;
