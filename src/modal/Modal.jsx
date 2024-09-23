import React, { useState } from 'react';

const Modal = ({ onSubmit }) => {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim() !== '') {
      onSubmit(inputName); // Pass the name to the parent
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-black/90 p-8 rounded-lg shadow-xl w-[350px] md:w-[700px] relative text-center">
        
        {/* Close Button */}
        <h2 className="text-2xl font-semibold text-white mb-6">Hey! Whats your name?</h2>
        
        {/* Input and Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border border-gray-300 bg-transparent text-gray-300 rounded-lg p-2 mb-4 w-full focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
