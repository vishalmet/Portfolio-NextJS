"use client"
import React from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="relative">
    <div className="overlay overlay-left"></div>
    <div className="overlay overlay-right"></div>

      <Marquee
        className="overflow-x-hidden p-2"
        style={{ zIndex: 0 }}
        direction="left"
      >
        <div className="flex space-x-16 text-white font-semibold ml-16">
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-orange-600 to-orange-400 flex justify-center p-2 px-4 rounded">HTML</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-blue-700 to-blue-400 flex justify-center p-2 px-4 rounded">CSS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-yellow-600 to-yellow-400 flex justify-center p-2 px-4 rounded">JS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-cyan-600 to-cyan-400 flex justify-center p-2 px-4 rounded">TailwindCSS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-gray-600 to-gray-400 flex justify-center p-2 px-4 rounded">NextJS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-cyan-700 to-cyan-500 flex justify-center p-2 px-4 rounded">ReactJS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-red-800 to-red-600 flex justify-center p-2 px-4 rounded">AnimeJS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-pink-600 to-purple-600 flex justify-center p-2 px-4 rounded">Framer-Motion</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-green-700 to-green-400 flex justify-center p-2 px-4 rounded">NodeJS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-cyan-600 to-violet-600 flex justify-center p-2 px-4 rounded">Canva</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-orange-600 via-purple-600 to-green-600 flex justify-center p-2 px-4 rounded">Figma</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-amber-800 to-pink-400 flex justify-center p-2 px-4 rounded">Adobe Xd</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-blue-500 to-yellow-400 flex justify-center p-2 px-4 rounded">Python</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-blue-700 to-blue-400 flex justify-center p-2 px-4 rounded">C</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-l from-blue-700 to-blue-400 flex justify-center p-2 px-4 rounded">C++</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-gray-800 to-gray-500 flex justify-center p-2 px-4 rounded">Solidity</p>        
        </div>
      </Marquee>
      <Marquee
        className="overflow-x-hidden p-2"
        style={{ zIndex: 0 }}
        direction="right"
      >
        <div className="flex space-x-16 text-white font-semibold mr-16">
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-orange-600 to-orange-400 flex justify-center p-2 px-4 rounded">HTML</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-blue-700 to-blue-400 flex justify-center p-2 px-4 rounded">CSS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-yellow-600 to-yellow-400 flex justify-center p-2 px-4 rounded">JS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-cyan-600 to-cyan-400 flex justify-center p-2 px-4 rounded">TailwindCSS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-gray-600 to-gray-400 flex justify-center p-2 px-4 rounded">NextJS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-cyan-700 to-cyan-500 flex justify-center p-2 px-4 rounded">ReactJS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-red-800 to-red-600 flex justify-center p-2 px-4 rounded">AnimeJS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-pink-600 to-purple-600 flex justify-center p-2 px-4 rounded">Framer-Motion</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-green-700 to-green-400 flex justify-center p-2 px-4 rounded">NodeJS</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-cyan-600 to-violet-600 flex justify-center p-2 px-4 rounded">Canva</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-orange-600 via-purple-600 to-green-600 flex justify-center p-2 px-4 rounded">Figma</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-amber-800 to-pink-400 flex justify-center p-2 px-4 rounded">Adobe Xd</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-blue-500 to-yellow-400 flex justify-center p-2 px-4 rounded">Python</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-blue-700 to-blue-400 flex justify-center p-2 px-4 rounded">C</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-l from-blue-700 to-blue-400 flex justify-center p-2 px-4 rounded">C++</p>
            <p className=" border-2 border-white w-40 bg-gradient-to-r from-gray-800 to-gray-500 flex justify-center p-2 px-4 rounded">Solidity</p> 
        </div>
      </Marquee>
 
    </div>
  );
};

export default Slider;
