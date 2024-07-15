import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Image from 'next/image';
import Logo from '../assets/VAlogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent top-0 z-10 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="text-white brandy-font text-4xl">
          <Link className=' flex items-center'  href="/">
            <Image className=' h-16 w-16' src={Logo}></Image>
            <span className=" pl-2 cursor-pointer">VA</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className={classNames(
                'h-6 w-6 transition-transform duration-300',
                { 'transform rotate-90': isOpen }
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
        <div className="hidden bricolage-font text-xl lg:flex lg:items-center lg:justify-end w-full">
          <Link href="/" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white  hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer">
            Home
          </Link>
          <Link href="/about" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white  hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer">
            About
          </Link>
          <Link href="/services" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white  hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer">
            Services
          </Link>
          <Link href="/contact" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white  hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex justify-center">
        <div className="w-full bg-transparent shadow-lg lg:backdrop-brightness-110 z-50">
          <Link href="/" className="block px-4 py-2 text-center text-white hover:bg-gray-700">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-center text-white hover:bg-gray-700">
            About
          </Link>
          <Link href="/services" className="block px-4 py-2 text-center text-white hover:bg-gray-700">
            Services
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-center text-white hover:bg-gray-700">
            Contact
          </Link>
        </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
