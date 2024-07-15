import GradientBackground from "@/components/GradientBg";
import Navbar from "@/components/NavBar";
import TypeWriting from "@/components/TypeWriting";
import Image from "next/image";
import Me from "../../assets/me.png";

const Home = () => {
  return (
    <div className=" bricolage-font text-black">
      <GradientBackground>
        <div className="">
          <Navbar />
          <div className=" pt-16 items-center text-center mx-6 md:mx-14">

            <div className=" flex justify-center lg:hidden items-center text-white">
              <div className=" space-y-24">
                <p className=" bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-1 text-xs rounded -rotate-45">
                  Frontend Dev
                </p>
                <p className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-1 text-xs rounded rotate-45">
                  Web3 Enthusiast
                </p>
              </div>
              <div className="flex justify-center lg:hidden ">
                <Image className=" h-[250px] w-[350px]" src={Me}></Image>
              </div>
              <div className=" space-y-24">
                <p className="  bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-1 text-xs rounded rotate-45">
                  Social Media Manager
                </p>
                <p className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-1 text-xs rounded -rotate-45">
                  Software Engineer
                </p>
              </div>
            </div>

            <div className=" ">
              <p className=" text-3xl md:text-4xl lg:text-5xl brandy-font">
                Hi, I am
                <span className="pl-4 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent">
                  Vishal Aakash
                </span>
              </p>
              <div className=" text-2xl md:text-3xl text-black flex justify-center font-semibold ">
                <TypeWriting />
              </div>
            </div>

            <div className=" hidden lg:flex justify-center items-center text-white">
              <div className=" space-y-40">
                <p className=" w-96 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded -rotate-45">
                  Frontend Dev
                </p>
                <p className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded rotate-45">
                  Web3 Enthusiast
                </p>
              </div>
              <div className="hidden lg:flex justify-center ">
                <Image className=" h-[535px] w-[700px]" src={Me}></Image>
              </div>
              <div className=" space-y-40">
                <p className=" w-96 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded rotate-45">
                  Social Media Manager
                </p>
                <p className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded -rotate-45">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </GradientBackground>
      <div className="">
        <div className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500">
            <p className=" brandy-font text-center text-white text-7xl">About Me</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
