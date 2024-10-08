"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import CardTemp from "@/components/WorksCard2";
import Grid from "@/assets/grid.webp";
import ButtonTemp from "../../components/Button";
import Footer from "@/components/Footer";
import Assets from "@/components/Assets";

const Page = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1, // Adjust the threshold as needed
  });
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      imageSrc: Assets.VortexEngine,
      title: "VortexEngine",
      description:
        "Unlock the future of gaming with our cutting-edge game engine. Designed for developers, by developers, VortexEngine offers seamless integration, powerful tools, and endless possibilities. Join the revolution and bring your game ideas to life on the blockchain.",
      url: "https://vortexengine.vercel.app",
    },
    {
      imageSrc: Assets.ZkSpin,
      title: "ZkSpin",
      description:
        "Developed the frontend for zkspin, an infinitely scalable on-chain game engine, during a freelancing project. My work focused on creating a seamless user experience and integrating advanced features that leverage the unique capabilities of blockchain technology.",
      url: "https://zkspin.vercel.app/",
    },
    {
      imageSrc: Assets.OnchainMemes,
      title: "OnchainMemes",
      description:
        "The ultimate platform for creating, owning, and trading meme NFTs. We bring the best of internet humor and digital art together, transforming your favorite memes into unique, collectible NFTs.",
      url: "https://onchain-memes.vercel.app",
    },
    {
      imageSrc: Assets.OneSign,
      title: "OneSign",
      description:
        "A DevTool for Next Gen Effortless ZK Onboarding, provides seamless decentralized access and enabling users to effortlessly log in using only their user ID, removing the necessity for repetitive wallet connections or traditional login methods.",
      url: "https://eth-mumbai-bice.vercel.app/",
    },
    {
      imageSrc: Assets.Ticket3,
      title: "Ticket3",
      description:
        "Ticket3 offers a user-friendly platform for event organizers and attendees alike. One of the central objectives of this DApp is to tackle a persistent issue in the world of event management - the black market ticket selling. ",
      url: "https://devfolio.co/projects/ticket-v-d478",
    },
    {
      imageSrc: Assets.GrFolio,
      title: "GrFolio",
      description:
        "Our decentralized product, akin to Devfolio, offers proof of work to hackers. Overcoming the challenge of showing proof of work, our solution empowers users effectively.",
      url: "https://devfolio.co/projects/grfolio-6779",
    },
    {
      imageSrc: Assets.FundRaiz,
      title: "FundRaiz",
      description:
        "Empowerment through Decentralized Crowdfunding. Our platform enables users to create or contribute to campaigns, ensuring transparency and maximizing donations for administrators.",
      url: "https://devfolio.co/projects/ticket-v-d478",
    },
    {
      imageSrc: Assets.CryptCoffee,
      title: "CryptCoffee",
      description:
        "A basic Web3 application designed for learning purposes, allowing users to send tokens to support me, essentially for a coffee.",
      url: "https://coffeecornerspk.vercel.app/",
    },
    {
      imageSrc: Assets.Tesla,
      title: "Tesla UI",
      description:
        "Created purely out of interest, this Tesla-inspired UI showcases my dedication to learning and building with Tailwind CSS. The seamless design and innovative technology of Tesla continue to inspire us.",
      url: "https://github.com/vishalmet/Tesla-UI",
    },
    {
      imageSrc: Assets.IG,
      title: "Instagram Web UI",
      description:
        "Created for learning and inspired by Instagram's seamless UI and innovative tech, this project showcases my interest in Tailwind CSS.",
      url: "https://github.com/vishalmet/Tesla-UI",
    },
  ];

  return (
    <div className=" text-white min-h-screen bg-black">
      <div className="mx-auto">
        <div className="relative bg-transparent text-white mx-auto flex justify-center items-center brandy-font p-4 border-y-2 border-white h-24 lg:h-32">
          <p className="z-10 text-xl md:text-3xl lg:text-6xl bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 rounded p-3">
            ✦ My Works ✦
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
        <div className="relative min-h-screen pb-10">
          <div
            className="absolute inset-0 bg-black opacity-30"
            style={{
              backgroundImage: `url(${Grid.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed", // Fixes the background
            }}
          ></div>

          <div className="relative text-white z-10">
            <div className=" flex justify-start px-6">
              <ButtonTemp title="BACK" to="/#works"></ButtonTemp>
            </div>
            <div className="flex justify-center">
              <div className="lg:grid lg:grid-cols-2 gap-6" ref={ref}>
                {cards.map((card, index) => (
                  <CardTemp
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    url={card.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
      );
};

      export default Page;
