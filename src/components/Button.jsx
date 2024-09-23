"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ButtonTemp = ({ title, to }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Add loading state

  const handleClick = (e) => {
    setLoading(true); // Start loading when the button is clicked

    if (typeof window !== "undefined") {
      if (to.startsWith("http") || to.startsWith("https")) {
        e.preventDefault(); // Prevent default anchor behavior
        window.open(to, "_blank", "noopener,noreferrer"); // Open in a new tab
        setLoading(false); // Stop loading after the tab is opened
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
        disabled={loading} // Disable the button while loading
      >
        {loading ? ( // Show spinner when loading is true
          <div className="flex justify-center items-center">
            <div className="w-4 h-4 border-2 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
            <span className="ml-2">Loading...</span>
          </div>
        ) : (
          title
        )}
      </motion.button>
    </div>
  );
};

export default ButtonTemp;
