import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import Logo from "../assets/VAlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-4 relative">
      <nav className="bg-gray-950 border-2 border-white rounded-full mx-1 md:mx-10 lg:mx-32 flex-wrap bricolage-font">
        <div className="container mx-auto flex justify-between items-center p-2">
          <div className="flex lg:hidden text-white brandy-font text-2xl">
            <Link className="flex items-center" href="/">
              <Image className="h-10 w-10" src={Logo} alt="Logo" />
              <span className="pl-2 cursor-pointer">VA</span>
            </Link>
          </div>
          <div className="block p-2 lg:hidden">
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
          <div className="hidden bricolage-font text-white text-xl lg:flex lg:items-center lg:justify-evenly w-full">
              <Link
                href="/"
                className="py-1 px-1 mx-1 md:py-3 md:px-10 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-1 px-1 mx-1 md:py-3 md:px-10 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer"
              >
                About
              </Link>
              <Link className="flex items-center text-white brandy-font text-4xl" href="/">
                <Image className="h-16 w-16" src={Logo} alt="Logo" />
                <span className="pl-2 cursor-pointer">VA</span>
              </Link>
              <Link
                href="/services"
                className="py-1 px-1 mx-1 md:py-3 md:px-10 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="py-1 px-1 mx-1 md:py-3 md:px-10 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-full cursor-pointer"
              >
                Contact
              </Link>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={classNames(
          "lg:hidden fixed top-0 left-0 w-full h-full bg-white z-10 flex flex-col justify-center items-center transition-opacity duration-300",
          { "opacity-100": isOpen, "opacity-0 pointer-events-none": !isOpen }
        )}
      >
        <div className="w-full flex justify-end px-4 py-2">
          <button onClick={closeMenu} className="text-black focus:outline-none">
            <svg
              className="h-6 w-6 transition-transform duration-300 transform rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="block px-4 py-2 text-center text-black hover:bg-gray-700 w-full mb-1"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-center text-black hover:bg-gray-700 w-full mb-1"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 text-center text-black hover:bg-gray-700 w-full mb-1"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-center text-black hover:bg-gray-700 w-full mb-1"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
