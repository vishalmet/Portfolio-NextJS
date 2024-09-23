"use client";
import { useState, useEffect } from "react";
import Home from "./Home/Home.jsx"; // Import the Home page
import Modal from "../modal/Modal.jsx"; // Import the modal component

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [userName, setUserName] = useState(""); // Store the user's name in state

  // Function to handle name submission
  const handleNameSubmit = (name) => {
    setUserName(name); // Store name in state
    setIsModalOpen(false); // Close modal after submission
    localStorage.setItem("userName", name); // Store the name in localStorage
  };

  // Check if the modal was shown before
  useEffect(() => {
    const storedName = localStorage.getItem("userName"); // Retrieve stored name

    if (!storedName) {
      setIsModalOpen(true); // Show modal if no name is stored
    } else {
      setUserName(storedName); // Set stored name if it exists
    }

    // Clear localStorage when the window/tab is closed
    const clearLocalStorage = () => {
      localStorage.removeItem("userName");
    };

    window.addEventListener("beforeunload", clearLocalStorage);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  return (
    <>
      {/* Show modal only if it's open */}
      {isModalOpen && <Modal onSubmit={handleNameSubmit} />}

      {/* Render the Home component and pass userName as a prop */}
      <Home userName={userName} />
    </>
  );
}
