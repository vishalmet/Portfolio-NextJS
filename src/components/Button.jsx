"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ButtonTemp = ({ title, to }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    setLoading(true);

    if (typeof window !== "undefined") {
      if (to.startsWith("http") || to.startsWith("https")) {
        e.preventDefault();
        window.open(to, "_blank", "noopener,noreferrer");
        setLoading(false);
      } else {
        router.push(to);
      }
    } else {
      // Handle the case when window is not defined (server-side)
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center pt-3 md:pt-6 brandy-font">
      <motion.button
        className="text-white items-center bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-b hover:shadow-orange-500 hover:scale-95 hover:shadow-xl p-3 px-6 rounded-xl text-xs md:text-sm lg:text-base border-b-2 border-white custom-border-radius"
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? (
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