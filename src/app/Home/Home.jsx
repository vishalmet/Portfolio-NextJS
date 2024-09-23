"use client";
import GradientBackground from "@/components/GradientBg";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import Me from "../../assets/me.png";
import About from "@/components/About";
import Works from "@/components/Works";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience.jsx"

// RoleCard Component for reusable roles
const RoleCard = ({ text, rotate }) => (
  <p
    className={`w-96 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded ${rotate}`}
  >
    {text}
  </p>
);

const Home = ({ userName }) => {
  return (
    <div className="bricolage-font text-white overflow-x-hidden">
      <GradientBackground>
        <div className="pb-16 md:pb-0">
          <div className="lg:hidden bg-black/50 backdrop-blur-lg backdrop-filter shadow-2xl p-3">
            <Marquee>
              <p>☆ A Frontend Dev</p>
              <p>☆ A Web3 Enthusiast</p>
              <p>☆ A Social Media Manager</p>
              <p>☆ A Software Engineer</p>
            </Marquee>
          </div>
          <Navbar />
          <div className="pt-10 items-center text-center mx-6 md:mx-14">
            {/* Display userName if it's passed in */}
            {userName && (
              <p className="text-2xl md:text-3xl lg:text-4xl brandy-font">
                Hi,{" "}
                <span className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent">
                  {userName}
                </span>
                !
              </p>
            )}
            <div className="flex justify-center lg:hidden items-center text-white">
              <Image className="h-[250px] w-[300px]" src={Me} alt="Me" />
            </div>
            <p className="text-3xl md:text-4xl lg:text-5xl brandy-font">
              I am
              <span className="pl-4 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent">
                Vishal Aakash
              </span>
            </p>

            <div className="lg:hidden bg-transparent backdrop-blur-lg backdrop-filter shadow-2xl p-3">
              <Marquee>
                <p>☆ A Frontend Dev</p>
                <p>☆ A Web3 Enthusiast</p>
                <p>☆ A Social Media Manager</p>
                <p>☆ A Software Engineer</p>
              </Marquee>
            </div>

            <div className="hidden lg:flex justify-center items-center text-white">
              <div className="space-y-40">
                <RoleCard text="Frontend Dev" rotate="-rotate-45" />
                <RoleCard text="Web3 Enthusiast" rotate="rotate-45" />
              </div>
              <Image className="h-[535px] w-[700px]" src={Me} alt="Me" />
              <div className="space-y-40">
                <RoleCard text="Social Media Manager" rotate="rotate-45" />
                <RoleCard text="Software Engineer" rotate="-rotate-45" />
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default Home;
