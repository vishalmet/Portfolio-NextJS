import React, { useState } from "react";

const Modal = ({ onSubmit }) => {
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim() !== "") {
      onSubmit(inputName); // Pass the name to the parent component
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Enter your name</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 mb-4 rounded w-full"
            placeholder="Your name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
