import React from "react";
import Lottie from "lottie-react";
import Illustration from "../../public/animation.json";
import ButtonTemp from "./Button";
import Slider from "./Slider";

const About = () => {
  return (
    <div className="gradient-container text-white min-h-screen">
      <div className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500">
        <p className=" brandy-font text-center text-white text-4xl md:text-5xl lg:text-7xl p-4">
          About Me
        </p>
      </div>
      <div className="mx-3 md:mx-14 lg:mx-32">
        <div className=" card">
        <div className="lg:grid lg:grid-cols-2 items-center card2 mt-6 px-4 py-6 lg:py-0 lg:px-10">
          <div className="w-full max-w-[600px] h-auto mx-auto">
            <Lottie animationData={Illustration} loop={true} />
          </div>
          <div className=" ">
            <div className="md:text-xl flex justify-center text-center">
              I'm a seasoned front-end developer proficient in ReactJS, NextJS
              and Tailwind CSS, with expertise in React Native for mobile app
              development. Additionally, I've extended my skill set to include
              blockchain development, enabling me to create innovative
              decentralized applications (dApps) and contribute to the evolving
              landscape of blockchain technology.
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
