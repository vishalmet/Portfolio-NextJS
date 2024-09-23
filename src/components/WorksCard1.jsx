"use client";
import Image from 'next/image';

const Card = ({ imageSrc, title, description, url }) => {
  return (
    // <a href={url} target="_blank" rel="noopener noreferrer" className=" flex justify-center ">
    <div className="container w-[320px] md:w-[550px] h-[350px] md:h-[450px] flex justify-center items-center relative mx-6 hover:scale-90 hover:rotate-6 hover:shadow-orange-500 hover:shadow-2xl transition-transform duration-500 mt-10">
      <div className="bg bg-transparent w-[310px] md:w-[540px] h-[340px] md:h-[440px] flex justify-center relative">
        <div className="items-center">
          <div className=''>
            <Image className="w-full h-auto" src={imageSrc} alt={title} />
            <div className="p-2 md:px-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold brandy-font text-center pt-2">
                {title}
              </p>

              {/* Scrollable and truncated description */}
              <div className="text-center max-h-[100px] overflow-y-auto">
                <p className="overflow-hidden">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blob w-[320px] md:w-[550px] h-[350px] md:h-[450px] absolute top-0 left-0"></div>
    </div>
    // </a>
  );
};

export default Card;
