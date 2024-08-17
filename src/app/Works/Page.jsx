import React from "react";
import Marquee from "react-fast-marquee";
import Card from "@/components/WorksCard1";
import Vortex from "@/assets/vortexengine.png";
import Onchain from "@/assets/onchainmemes.png";
import OneSign from "@/assets/onesign.png";

const Page = () => {
  const cards = [
    {
      imageSrc: Vortex,
      title: "VortexEngine",
      description: "Unlock the future of gaming with our cutting-edge game engine. Designed for developers, by developers, VortexEngine offers seamless integration, powerful tools, and endless possibilities. Join the revolution and bring your game ideas to life on the blockchain."
    },
    {
      imageSrc: Onchain,
      title: "OnchainMemes",
      description: "The ultimate platform for creating, owning, and trading meme NFTs. We bring the best of internet humor and digital art together, transforming your favorite memes into unique, collectible NFTs."
    },
    {
      imageSrc: OneSign,
      title: "OneSign",
      description: "Use our dynamic wallet integration to securely connect your preferred crypto wallet"
    },
    {
      imageSrc: Vortex,
      title: "VortexEngine",
      description: "Use our dynamic wallet integration to securely connect your preferred crypto wallet"
    },
    {
      imageSrc: Vortex,
      title: "VortexEngine",
      description: "Use our dynamic wallet integration to securely connect your preferred crypto wallet"
    },
    // Add more cards here if needed
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative bg-transparent text-white flex justify-center items-center brandy-font p-4 border-y-2 border-white h-24 lg:h-32">
        <p className="z-10 text-xl md:text-3xl lg:text-6xl bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 rounded p-3">✦ My Works ✦</p>
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <Marquee direction="left" gradient={false} className="text-xs md:text-xl lg:text-2xl">
            Crafting Seamless Web Experiences for a User-Friendly Future
          </Marquee>
        </div>
      </div>
      <Marquee className="flex space-x-4 p-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Page;
