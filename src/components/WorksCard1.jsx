"use client";
import Image from 'next/image';

const Card = ({ imageSrc, title, description, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className=" flex justify-center mx-6 hover:scale-90 hover:rotate-6 hover:shadow-orange-500 hover:shadow-2xl transition-transform duration-500 mt-10">
      <div className="container w-[320px] md:w-[550px] h-[450px] md:h-[450px] flex justify-center items-center relative hover:scale-90 hover:rotate-6 hover:shadow-orange-500 hover:shadow-2xl transition-transform duration-500">
        <div className="bg bg-transparent w-[310px] md:w-[540px] h-[440px] md:h-[440px] flex justify-center relative">
          <div className="items-center p-2 lg:p-4">
            <div className='pt-3'>
              <Image className="w-full h-auto" src={imageSrc} alt={title} />
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold brandy-font text-center pt-2">
                {title}
              </p>
              <p className="text-center">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="blob w-[320px] md:w-[550px] h-[450px] md:h-[450px] absolute top-0 left-0"></div>
      </div>
    </a>
  );
};

export default Card;
