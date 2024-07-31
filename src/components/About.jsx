import React from "react";
import Lottie from "lottie-react";
import Illustration from "../../public/animation.json";

const About = () => {
  return (
    <div className="gradient-container min-h-screen">
      <div className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500">
        <p className=" brandy-font text-center text-white text-7xl p-4">
          About Me
        </p>
      </div>
      <div className="mx-6 md:mx-14 lg:mx-32">
        <div className="grid grids-cols-2 items-center">
          <div className="w-full max-w-[500px] h-auto">
            <Lottie animationData={Illustration} loop={true} />
          </div>
          <div className="text-xl flex justify-center text-center mt-8">
            I'm a seasoned front-end developer proficient in ReactJS, NextJS and
            Tailwind CSS, with expertise in React Native for mobile app
            development. Additionally, I've extended my skill set to include
            blockchain development, enabling me to create innovative
            decentralized applications (dApps) and contribute to the evolving
            landscape of blockchain technology.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
