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
    <nav className="bg-transparent top-0 z-10 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20 p-2 brandy-font ">
      <div className="container mx-auto flex justify-between items-center">
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
        <div className="hidden lg:flex lg:items-center lg:justify-end w-full">
          <Link href="/" className="block mt-4 lg:mt-0 text-white hover:text-gray-400 mx-4">
            Home
          </Link>
          <Link href="/about" className="block mt-4 lg:mt-0 text-white hover:text-gray-400 mx-4">
            About
          </Link>
          <Link href="/services" className="block mt-4 lg:mt-0 text-white hover:text-gray-400 mx-4">
            Services
          </Link>
          <Link href="/contact" className="block mt-4 lg:mt-0 text-white hover:text-gray-400 mx-4">
            Contact
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-800 z-50">
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
      )}
    </nav>
  );
};

export default Navbar;
