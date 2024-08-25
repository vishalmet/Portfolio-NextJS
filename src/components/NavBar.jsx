"use client";
import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import Logo from "../assets/VAlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false); // Close the mobile menu on click
  };

  return (
    <div className="lg:mt-4 relative">
      <nav className="bg-transparent backdrop-filter backdrop-blur-2xl shadow-xl rounded-full md:mx-10 lg:mx-32 flex-wrap bricolage-font">
        <div className="container mx-auto flex justify-between items-center p-2">
          <div className="flex items-center space-x-44 lg:hidden text-white brandy-font text-2xl">
            <Link
              className="flex justify-start items-center"
              href="/"
              onClick={() => handleMenuClick("home")}
            >
              <Image className="h-10 w-10" src={Logo} alt="Logo" />
              <span className="pl-2 cursor-pointer">VA</span>
            </Link>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className={classNames(
                    "h-6 w-6 transition-transform duration-300",
                    { "transform rotate-90": isOpen }
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
         

          <div className="hidden bricolage-font text-white text-xl lg:flex lg:items-center lg:justify-evenly w-full">
            <Link
              href="#home"
              onClick={() => handleMenuClick("home")}
              className={classNames(
                "py-1 px-1 mx-1 md:py-3 md:px-10 md:mx-3 flex-wrap",
                {
                  "border-b-2 border-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full":
                    activeMenu === "home",
                  "hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer":
                    activeMenu !== "home",
                }
              )}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => handleMenuClick("about")}
              className={classNames(
                "py-1 px-1 mx-1 md:py-3 md:px-10 md:mx-3 flex-wrap",
                {
                  "border-b-2 border-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full":
                    activeMenu === "about",
                  "hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer":
                    activeMenu !== "about",
                }
              )}
            >
              About
            </Link>
            <Link
              className="flex items-center text-white brandy-font text-4xl"
              href="/"
              onClick={() => handleMenuClick("home")}
            >
              <Image className="h-16 w-16" src={Logo} alt="Logo" />
              <span className="pl-2 cursor-pointer">VA</span>
            </Link>
            <Link
              href="/experience"
              onClick={() => handleMenuClick("experience")}
              className={classNames(
                "py-1 px-1 mx-1 md:py-3 md:px-10 md:mx-3 flex-wrap",
                {
                  "border-b-2 border-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full":
                    activeMenu === "experience",
                  "hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer":
                    activeMenu !== "experience",
                }
              )}
            >
              Experience
            </Link>
            <Link
              href="#works"
              onClick={() => handleMenuClick("works")}
              className={classNames(
                "py-1 px-1 mx-1 md:py-3 md:px-10 md:mx-3 flex-wrap",
                {
                  "border-b-2 border-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full":
                    activeMenu === "works",
                  "hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer":
                    activeMenu !== "works",
                }
              )}
            >
              Works
            </Link>
          </div>
        </div>

        <div
          className={`lg:hidden absolute inset-y-0 z-50 left-0 transform transition duration-300 ease-in-out bg-black/90 text-white backdrop-filter backdrop-blur-lg h-screen w-full ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-0 right-0 m-4 text-2xl focus:outline-none"
          >
            ×
          </button>
          <div className="flex justify-center text-center pt-16 min-h-screen">
            <div className=" bricolage-font text-white text-xl space-y-6 w-full">
              <div className="">
              <Link
                href="#home"
                onClick={() => handleMenuClick("home")}
                className={classNames(
                  "py-3 px-10 ",
                  {
                    "border-b-2 border-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full":
                      activeMenu === "home",
                    "hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer":
                      activeMenu !== "home",
                  }
                )}
              >
                Home
              </Link>
              </div>
              <div className="">
              <Link
                href="#about"
                onClick={() => handleMenuClick("about")}
                className={classNames(
                  "py-3 px-10",
                  {
                    "border-b-2 border-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full":
                      activeMenu === "about",
                    "hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer":
                      activeMenu !== "about",
                  }
                )}
              >
                About
              </Link>
              </div>
              <div className="">
              <Link
                href="/experience"
                onClick={() => handleMenuClick("experience")}
                className={classNames(
                  "py-3 px-10",
                  {
                    "border-b-2 border-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full":
                      activeMenu === "experience",
                    "hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer":
                      activeMenu !== "experience",
                  }
                )}
              >
                Experience
              </Link>
              </div>
              <div className="">
              <Link
                href="#works"
                onClick={() => handleMenuClick("works")}
                className={classNames(
                  "py-3 px-10",
                  {
                    "border-b-2 border-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-full":
                      activeMenu === "works",
                    "hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer":
                      activeMenu !== "works",
                  }
                )}
              >
                Works
              </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
