"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import Card from "@/components/WorksCard1";
import Vortex from "@/assets/vortexengine.png";
import Onchain from "@/assets/onchainmemes.png";
import OneSign from "@/assets/onesign.png";
import Ticket3 from "@/assets/ticket3.jpeg";
import Grfolio from "@/assets/grfolio.jpeg";
import FundRaiz from "@/assets/FundRaiz.jpeg";
import CryptCoffee from "@/assets/cryptcoffee.png";
import Tesla from "@/assets/tesla.png";
import IG from "@/assets/IG.png";
import ButtonTemp from "./Button";

const Page = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1, // Adjust the threshold as needed
  });
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      imageSrc: Vortex,
      title: "VortexEngine",
      description: "Unlock the future of gaming with our cutting-edge game engine. Designed for developers, by developers, VortexEngine offers seamless integration, powerful tools, and endless possibilities. Join the revolution and bring your game ideas to life on the blockchain.",
      url: "https://vortexengine.vercel.app",
    },
    {
      imageSrc: Onchain,
      title: "OnchainMemes",
      description: "The ultimate platform for creating, owning, and trading meme NFTs. We bring the best of internet humor and digital art together, transforming your favorite memes into unique, collectible NFTs.",
      url: "https://onchain-memes.vercel.app",
    },
    {
      imageSrc: OneSign,
      title: "OneSign",
      description: "A DevTool for Next Gen Effortless ZK Onboarding, provides seamless decentralized access and enabling users to effortlessly log in using only their user ID, removing the necessity for repetitive wallet connections or traditional login methods.",
      url: "https://eth-mumbai-bice.vercel.app/",
    },
    {
      imageSrc: Ticket3,
      title: "Ticket3",
      description: "Ticket3 offers a user-friendly platform for event organizers and attendees alike. One of the central objectives of this DApp is to tackle a persistent issue in the world of event management - the black market ticket selling. ",
      url: "https://devfolio.co/projects/ticket-v-d478",
    },
    {
      imageSrc: Grfolio,
      title: "GrFolio",
      description: "Our decentralized product, akin to Devfolio, offers proof of work to hackers. Overcoming the challenge of showing proof of work, our solution empowers users effectively.",
      url: "https://devfolio.co/projects/grfolio-6779",
    },
    {
      imageSrc: FundRaiz,
      title: "FundRaiz",
      description: "Empowerment through Decentralized Crowdfunding. Our platform enables users to create or contribute to campaigns, ensuring transparency and maximizing donations for administrators.",
      url: "https://devfolio.co/projects/ticket-v-d478",
    },
    {
      imageSrc: CryptCoffee,
      title: "CryptCoffee",
      description: "A basic Web3 application designed for learning purposes, allowing users to send tokens to support me, essentially for a coffee.",
      url: "https://coffeecornerspk.vercel.app/",
    },
    {
      imageSrc: Tesla,
      title: "Tesla UI",
      description: "Created purely out of interest, this Tesla-inspired UI showcases my dedication to learning and building with Tailwind CSS. The seamless design and innovative technology of Tesla continue to inspire us.",
      url: "https://github.com/vishalmet/Tesla-UI",
    },
    {
      imageSrc: IG,
      title: "Instagram Web UI",
      description: "Created for learning and inspired by Instagram's seamless UI and innovative tech, this project showcases my interest in Tailwind CSS.",
      url: "https://github.com/vishalmet/Tesla-UI",
    },
  ];

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

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

      <div ref={ref}>
        <Marquee
          
          className="flex space-x-4 p-10"
          pauseOnHover={false} // Disable the default pause on hover
          play={inView && !isPaused} // Control play/pause based on inView and isPaused state
          speed={150} // Increase the speed here
        >
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={handleMouseEnter} // Pause on hover of a card
              onMouseLeave={handleMouseLeave} // Resume on hover leave
            >
              <Card
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                url={card.url}
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* <div className="">
        <ButtonTemp title="EXPLORE MORE"></ButtonTemp>
      </div> */}
    </div>
  );
};

export default Page;
