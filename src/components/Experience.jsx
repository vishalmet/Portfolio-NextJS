import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ChevronRight, ChevronLeft } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const experiences = [
  {
    id: 1,
    duration: "24th August 2024 - Present",
    company: "UltimateDigits",
    role: "Web3 Frontend Developer",
    description: "At UltimateDigits, I develop and maintain their web3-enabled platform using modern frontend technologies. I also contribute to UltimateWinks, creating mini applications that run within Twitter cards. My role involves React and Redux for state management, Ethers.js for blockchain interactions, and building responsive, user-friendly interfaces.",
    skills: ["Redux.js", "Vite.js", "React.js", "JavaScript", "Ethers", "Axios", "UI/UX"],
    certificate: "#",
    learnMore: "https://beta.ultimatedigits.com/"
  },
  {
    id: 2,
    duration: "24th May 2023 - Present",
    company: "Gryffindors",
    role: "Contributor & SMM",
    description: "At Gryffindors, I served as a Contributor and Social Media Manager, participating in hackathons and building web3 projects. I focused on networking, SEO optimization, and developing applications using Next.js and Vite.js. Additionally, I worked on smart contract integrations using Ethers.js and implemented various API integrations.",
    skills: ["Networking", "SEO", "Hackathons", "Next.js", "API Integration", "Ethers", "Vite.js"],
    certificate: "#",
    learnMore: "https://gryffindors.vercel.app/"
  },
  {
    id: 3,
    duration: "August 2024 - September 2024",
    company: "ZkSpin",
    role: "Freelancer",
    description: "As Social Media Lead at TPG Chennai, I manage digital presence and create engaging content while leading a team of contributors. I oversee event management, coordinate organizational activities, and design creative content for various platforms to enhance community engagement and brand visibility.",
    skills: ["Responsive UI", "Framer-Motion", "Vite.js", "Dynamic Application"],
    certificate: "#",
    learnMore: "https://zkspin.vercel.app/"
  },
  {
    id: 4,
    duration: "17th July 2023 - 18th October 2023",
    company: "Yugaastech",
    role: "Web Developer",
    description: "At Yugaastech, I developed responsive websites using modern web technologies. I specialized in creating clean, efficient user interfaces with React.js and JavaScript, while implementing responsive designs using TailwindCSS. Collaborated with version control using Git to maintain code quality and project workflow.",
    skills: ["React.js", "JavaScript", "Responsive Design", "Git", "TailwindCSS"],
    certificate: "#",
    learnMore: "https://yugaastech.vercel.app/"
  },
  {
    id: 5,
    duration: "March 2024 - Present",
    company: "TPG Chennai",
    role: "Social Media Lead & Contributor",
    description: "As Social Media Lead at TPG Chennai, I manage digital presence and create engaging content while leading a team of contributors. I oversee event management, coordinate organizational activities, and design creative content for various platforms to enhance community engagement and brand visibility.",
    skills: [" Event Management", "Organization", "Team Lead", "Creatives Design"],
    certificate: "#",
    learnMore: "https://x.com/TPG_Chennai"
  },
];

const GlowingBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-pink-500/20 blur-[100px] -top-24 sm:-top-32 md:-top-48 -right-24 sm:-right-32 md:-right-48" />
    <div className="absolute w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] rounded-full bg-yellow-500/20 blur-[100px] top-24 sm:top-32 md:top-48 -left-24 sm:-left-32 md:-left-48" />
  </div>
);

const ExperienceShowcase = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isBrowser, setIsBrowser] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      setIsBrowser(true);
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      // Assuming you have an 'experiences' object with the skills data
      setSkills(experiences[0].skills);
    }
  }, []);


  return (
    <div className="min-h-screen bg-black/95 text-white relative overflow-hidden pb-12 sm:pb-16 md:pb-20">
      <GlowingBackground />

      {/* Floating Tech Words - Hidden on mobile */}
      {/* <div className="absolute inset-0 opacity-10 hidden md:block">
        {experiences[0].skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="absolute text-base sm:text-xl md:text-2xl font-bold"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div> */}

      {/* Main Content */}
      <div className="relative container mx-auto px-4 w-full">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 w-screen"  // Added w-screen and negative margin
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 relative">
            <div className="relative bg-transparent text-white flex justify-center items-center brandy-font border-y-2 border-white h-24 lg:h-32">
              <p className="z-10 text-xl md:text-3xl lg:text-6xl bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 rounded p-3">
                ✦ Experience ✦
              </p>
              <div className="absolute top-0 left-0 w-full h-full flex items-center">
                <Marquee
                  direction="left"
                  gradient={false}
                  className="text-xs md:text-xl lg:text-2xl"
                >
                  Crafting Seamless Web Experiences for a User-Friendly Future
                </Marquee>
              </div>
            </div>
          </h1>
        </motion.div>

        {/* Experience Cards */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="relative"
            >
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 md:px-16 border border-gray-800">
                  {/* Glowing corners */}
                  <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-l-2 border-pink-500 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-r-2 border-red-400 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-l-2 border-yellow-500 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-r-2 border-pink-500 rounded-br-2xl" />

                  {/* Content */}
                  <div className="relative">
                    <motion.div
                      className="absolute -top-8 sm:-top-10 md:-top-12 left-0 px-4 sm:px-5 md:px-6 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-xs sm:text-sm"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {experiences[selectedId].duration}
                    </motion.div>

                    <motion.h2
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {experiences[selectedId].role}
                    </motion.h2>

                    <motion.h3
                      className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 text-transparent bg-clip-text bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {experiences[selectedId].company}
                    </motion.h3>

                    <motion.p
                      className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-7 md:mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {experiences[selectedId].description}
                    </motion.p>

                    {/* Skills */}
                    <motion.div
                      className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-7 md:mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {experiences[selectedId].skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 
                            border border-gray-700 cursor-pointer hover:scale-110 transition-transform"
                          onHoverStart={() => setHoveredSkill(skill)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          whileHover={{
                            backgroundColor: "rgba(236, 72, 153, 0.2)",
                            borderColor: "#EC4899",
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <a href={experiences[selectedId].learnMore}
                        target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 
                          hover:opacity-90 transition-opacity text-sm sm:text-base"
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      {/* <a href={experiences[selectedId].certificate}
                        className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gray-700 
                          hover:border-pink-500 transition-colors text-sm sm:text-base"
                      >
                        Certificate
                        <Award className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      </a> */}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 sm:px-4">
            <button
              onClick={() => setSelectedId(prev => Math.max(0, prev - 1))}
              disabled={selectedId === 0}
              className="p-1.5 sm:p-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-white disabled:opacity-50 
                hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => setSelectedId(prev => Math.min(experiences.length - 1, prev + 1))}
              disabled={selectedId === experiences.length - 1}
              className="p-1.5 sm:p-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-white disabled:opacity-50 
                hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 md:mt-12">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedId(index)}
              className={`relative h-1.5 sm:h-2 transition-all duration-300 rounded-full 
                ${index === selectedId ? 'w-8 sm:w-12 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500' : 'w-1.5 sm:w-2 bg-gray-700'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceShowcase;