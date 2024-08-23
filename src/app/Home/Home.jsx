"use client"
import GradientBackground from "@/components/GradientBg";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import Me from "../../assets/me.png";
import About from "@/components/About";
import Works from "@/components/Works";

const Home = () => {
  return (
    <div className="bricolage-font text-white overflow-x-hidden">
      <GradientBackground>
        <div className="pb-16 md:pb-0">
          <Navbar />
          <div className="pt-16 items-center text-center mx-6 md:mx-14">
            <div className="flex justify-center lg:hidden items-center text-white">
              <Image className="h-[250px] w-[300px]" src={Me} alt="Me" />
            </div>
            <div>
              <p className="text-3xl md:text-4xl lg:text-5xl brandy-font">
                Hi, I am
                <span className="pl-4 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent">
                  Vishal Aakash
                </span>
              </p>
            </div>
            <div className="hidden lg:flex justify-center items-center text-white">
              <div className="space-y-40">
                <p className="w-96 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded -rotate-45">
                  Frontend Dev
                </p>
                <p className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded rotate-45">
                  Web3 Enthusiast
                </p>
              </div>
              <Image className="h-[535px] w-[700px]" src={Me} alt="Me" />
              <div className="space-y-40">
                <p className="w-96 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded rotate-45">
                  Social Media Manager
                </p>
                <p className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded -rotate-45">
                  Software Engineer
                </p>
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
    </div>
  );
};

export default Home;
