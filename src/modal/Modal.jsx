"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Modal = ({ onSubmit }) => {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim() !== '') {
      onSubmit(inputName);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-[90%] max-w-[500px] border border-white/10"
      >
        {/* Decorative elements */}
        <div className="absolute -inset-[1px] bg-gradient-to-t from-pink-500/20 via-red-400/20 to-yellow-500/20 rounded-2xl blur-sm -z-10" />
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-500/30 rounded-tl-2xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-500/30 rounded-br-2xl" />

        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl brandy-font text-center mb-8"
        >
          Hey! What's your{" "}
          <span className="bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent">
            name
          </span>
          ?
        </motion.h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <input
              type="text"
              className="w-full bg-black/30 text-white border border-white/10 rounded-xl px-4 py-3 
                focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300
                placeholder:text-gray-500"
              placeholder="Type your name..."
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </motion.div>

          <motion.button
            type="submit"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500
              text-white font-medium shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 
              transition-all duration-300"
          >
            Continue →
          </motion.button>
        </form>

        {/* Floating orbs */}
        <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-[100px]" />
        <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-[100px]" />
      </motion.div>
    </motion.div>
  );
};

export default Modal;