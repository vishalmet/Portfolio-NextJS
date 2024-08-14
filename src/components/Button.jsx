import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ButtonTemp = ({ title, to }) => {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined") {
      if (to.startsWith("http") || to.startsWith("https")) {
        window.location.href = to;
      } else {
        router.push(to);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center pt-3 md:pt-6 broge-font">
        <motion.button
          className="text-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-b hover:shadow-xl p-3 rounded-xl text-xs md:text-base border-b-2 border-white custom-border-radius"
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          {title}
        </motion.button>
      </div>
    </div>
  );
};

export default ButtonTemp;

