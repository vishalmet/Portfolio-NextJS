"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ButtonTemp = ({ title, to }) => {
  const router = useRouter();

  const handleClick = (e) => {
    if (typeof window !== "undefined") {
      if (to.startsWith("http") || to.startsWith("https")) {
        e.preventDefault(); // Prevent default anchor behavior
        window.open(to, "_blank", "noopener,noreferrer"); // Open in a new tab
      } else {
        router.push(to); // Handle internal routing
      }
    }
  };

  return (
    <div className="flex justify-center pt-3 md:pt-6 brandy-font">
      <motion.button
        className="text-white items-center bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-b hover:shadow-orange-500 hover:scale-95 hover:shadow-xl p-3 px-6 rounded-xl text-base border-b-2 border-white custom-border-radius"
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        {title}
      </motion.button>
    </div>
  );
};

export default ButtonTemp;
