"use client";
import GradientBackground from "@/components/GradientBg";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import Me from "../../assets/me.png";
import About from "@/components/About";
import Works from "@/components/Works";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footer";
import ExperienceTimeline from "@/components/Experience";
import ExperienceShowcase from "@/components/Experience";
import LandingPage from "./LandingPage";
// import Experience from "@/components/Experience.jsx"
// import Connect from "@/components/Connect";

// RoleCard Component for reusable roles
const RoleCard = ({ text, rotate }) => (
  <p
    className={`w-96 bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 border-2 border-white p-2 text-xl rounded ${rotate}`}
  >
    {text}
  </p>
);

const Home = ({ userName }) => {
  return (
    <div className="bricolage-font text-white overflow-x-hidden">
      <Navbar />

      <LandingPage userName={userName} />

      <div id="about">
        <About />
      </div>
      <div className="" id="works">
        <Works />
      </div>
      {/* <div className="">
        <Connect />
      </div> */}
      <div className="pt-24" id="experience">
        <ExperienceShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
