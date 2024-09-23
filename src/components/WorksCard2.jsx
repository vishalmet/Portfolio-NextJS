"use client";
import Image from "next/image";
import ButtonTemp from "./Button";

const CardTemp = ({ imageSrc, title, description, url }) => {
  return (

    <div className=" flex justify-center w-full lg:max-w-7xl">
      <div className="container w-[370px] md:w-[550px] h-[420px] md:h-[520px] flex justify-center items-center relative mx-2 md:mx-6 hover:shadow-orange-500 hover:shadow-2xl transition-transform duration-500 mt-10">
        <div className="bg bg-transparent w-[360px] md:w-[540px] h-[410px] md:h-[510px] flex justify-center relative">
          <div className="items-center">
            <div className="">
              <div className="w-[360px] md:w-[540px]">
                <Image className="w-[360px] md:w-[540px] h-[195px] lg:h-[280px] object-cover transform transition-transform duration-300 hover:scale-105" src={imageSrc} alt={title} />
              </div>
              <div className="p-1 px-3 ">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold brandy-font text-center pt-2">
                  {title}
                </p>

                {/* Scrollable and truncated description */}
                <div className="text-center h-full lg:h-[90px] max-h-[100px] overflow-y-auto scrollbar-thin custom-scrollbar">
                  <p className="overflow-hidden">
                    {description}
                  </p>
                </div>

              </div>

              <a href={url} target="_blank" rel="noopener noreferrer" className="">
                <ButtonTemp title="VIEW"></ButtonTemp>
              </a>
            </div>
          </div>
        </div>
        <div className="blob w-[370px] md:w-[550px] h-[420px] md:h-[520px] absolute top-0 left-0"></div>
      </div>
    </div>
  );
};

export default CardTemp;
