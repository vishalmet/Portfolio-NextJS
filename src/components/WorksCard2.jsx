"use client";
import Image from "next/image";
import ButtonTemp from "./Button";

const CardTemp = ({ imageSrc, title, description, url }) => {
  return (
    
    <div className=" flex justify-center w-full lg:max-w-7xl">
      <div className="container w-[370px] md:w-[550px] h-[450px] md:h-[550px] flex justify-center items-center relative mx-2 md:mx-6 hover:shadow-orange-500 hover:shadow-2xl transition-transform duration-500 mt-10">
        <div className="bg bg-transparent w-[360px] md:w-[540px] h-[440px] md:h-[540px] flex justify-center relative">
          <div className="items-center">
            <div className="">
              <div className="w-[360px] md:w-[540px]">
              <Image className="w-[360px] md:w-[540px] object-cover transform transition-transform duration-300 hover:scale-105 h-auto" src={imageSrc} alt={title} />
              </div>
              <div className=" p-3">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold brandy-font text-center pt-2">
                {title}
              </p>
              <p className="text-center">{description}</p>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="">
              <ButtonTemp title="VIEW"></ButtonTemp>
            </a>
            </div>
          </div>
        </div>
        <div className="blob w-[370px] md:w-[550px] h-[450px] md:h-[550px] absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default CardTemp;
