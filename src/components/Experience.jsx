import React from "react";
import Marquee from "react-fast-marquee";

const Experience = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative bg-transparent text-white flex justify-center items-center brandy-font p-4 border-y-2 border-white h-24 lg:h-32">
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
    </div>
  );
};

export default Experience;
