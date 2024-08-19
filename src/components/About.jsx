import React from "react";
import Lottie from "lottie-react";
import Illustration from "../../public/animation.json";
import ButtonTemp from "@/components/Button";
import Slider from "@/components/Slider";
import Marquee from "react-fast-marquee";

const About = () => {


  return (
    <div className="gradient-container  text-white min-h-screen">
      <div className="relative bg-transparent text-white flex justify-center items-center brandy-font p-4 border-y-2 border-white h-24 lg:h-32">
        <p className=" z-10 text-xl md:text-3xl lg:text-6xl bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 rounded p-3">
          ✦ About Me ✦
        </p>
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <Marquee gradient={false} className="text-xs md:text-xl lg:text-2xl">
            Crafting Seamless Web Experiences for a User-Friendly Future
          </Marquee>
        </div>
      </div>
      <div className="mx-3 md:mx-14 lg:mx-32">
        <div className=" card">
          <div className="lg:grid lg:grid-cols-2 items-center shadow-2xl gradient-container border-y-2 border-white transition-transform ease-in-out hover:border-0 card2 mt-6 px-4 py-6 lg:py-0 lg:px-10">
            <div className="w-full max-w-[600px] h-auto mx-auto">
              <Lottie animationData={Illustration} loop={true} />
            </div>
            <div className=" ">
              <div className="md:text-xl flex justify-center text-center">
                I&apos;m a seasoned front-end developer proficient in ReactJS, NextJS
                and Tailwind CSS, with expertise in React Native for mobile app
                development. Additionally, I&apos;ve extended my skill set to include
                blockchain development, enabling me to create innovative
                decentralized applications (dApps) and contribute to the
                evolving landscape of blockchain technology.
              </div>
              <div className=" flex justify-center space-x-6">
                <ButtonTemp
                  title="Resume/CV"
                  to="https://drive.google.com/file/d/1G5g1XH0qlCjgMV5sQJkpwvDJGj8tays7/view?usp=sharing"
                />
                <ButtonTemp
                  title="Certificates"
                  to="https://drive.google.com/drive/folders/1gSkpVjMNAO3Yw4Odht6OZyKvrOAXJPDe?usp=sharing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-4 md:py-10">
        <Slider />
      </div>
    </div>
  );
};

export default About;
