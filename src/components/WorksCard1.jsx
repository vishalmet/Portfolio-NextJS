import Image from 'next/image';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="flex justify-center mx-6">
      <div className="container w-[320px] md:w-[550px] h-[450px] md:h-[450px] flex justify-center items-center relative">
        <div className="bg bg-transparent w-[310px] md:w-[540px] h-[440px] md:h-[440px] flex justify-center relative">
          <div className="items-center p-2 lg:p-4">
            <div className=' pt-3'>
              <Image className="hover:scale-90 hover:rotate-6 transition-transform duration-500" src={imageSrc} alt={title} />
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold brandy-font text-center">
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
    </div>
  );
};

export default Card;
