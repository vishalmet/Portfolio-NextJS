"use client";
import { motion } from "framer-motion";
import GradientBackground from "@/components/GradientBg";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import Me from "../../assets/me.png";
import About from "@/components/About";
import Works from "@/components/Works";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const marqueeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 1 },
  },
};

const Home = ({ userName }) => { // Receive userName as prop
  return (
    <motion.div
      className="bricolage-font text-white overflow-x-hidden"
      initial="hidden"
      animate="visible"
    >
      <GradientBackground>
        <motion.div className="pb-16 md:pb-0" variants={containerVariants}>
          <motion.div
            className="lg:hidden bg-black/50 backdrop-blur-lg backdrop-filter shadow-2xl p-3"
            variants={marqueeVariants}
          >
            <Marquee className="">
              <p>☆A Frontend Dev</p>
              <p>☆A Web3 Enthusiast</p>
              <p>☆A Social Media Manager</p>
              <p>☆A Software Engineer</p>
            </Marquee>
          </motion.div>
          <Navbar />
          <motion.div
            className="pt-10 items-center text-center mx-6 md:mx-14"
            variants={containerVariants}
          >
            {userName && (
              <p className="text-2xl md:text-3xl lg:text-4xl brandy-font">
                Hi, <span className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent">{userName}</span>!
              </p>
            )}
            <motion.div
              className="flex justify-center lg:hidden items-center text-white"
              variants={imageVariants}
            >
              <Image className="h-[250px] w-[300px]" src={Me} alt="Me" />
            </motion.div>
            <motion.div variants={textVariants}>
              <p className="text-3xl md:text-4xl lg:text-5xl brandy-font">
                I am
                <span className="pl-4 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent">
                  Vishal Aakash
                </span>
              </p>
            </motion.div>

            <motion.div
              className="lg:hidden bg-transparent backdrop-blur-lg backdrop-filter shadow-2xl p-3"
              variants={marqueeVariants}
            >
              <Marquee className="">
                <p>☆A Frontend Dev</p>
                <p>☆A Web3 Enthusiast</p>
                <p>☆A Social Media Manager</p>
                <p>☆A Software Engineer</p>
              </Marquee>
            </motion.div>

            <motion.div
              className="hidden lg:flex justify-center items-center text-white"
              variants={imageVariants}
            >
              <div className="space-y-40">
                <motion.p
                  className="w-96 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded -rotate-45"
                  whileHover={{ scale: 1.1 }}
                >
                  Frontend Dev
                </motion.p>
                <motion.p
                  className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded rotate-45"
                  whileHover={{ scale: 1.1 }}
                >
                  Web3 Enthusiast
                </motion.p>
              </div>
              <Image className="h-[535px] w-[700px]" src={Me} alt="Me" />
              <div className="space-y-40">
                <motion.p
                  className="w-96 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded rotate-45"
                  whileHover={{ scale: 1.1 }}
                >
                  Social Media Manager
                </motion.p>
                <motion.p
                  className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded -rotate-45"
                  whileHover={{ scale: 1.1 }}
                >
                  Software Engineer
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </GradientBackground>

      <div id="about">
        <About />
      </div>
      <div id="works">
        <Works />
      </div>
      <div className="pt-24" id="experience">
        <Experience />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
