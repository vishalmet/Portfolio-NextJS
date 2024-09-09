"use client";
import { useState, useEffect } from "react";
import Home from "./Home/Home.jsx"; // Import the Home page
import "@/app/globals.css";
import Head from "next/head";
import Modal from "../modal/Modal.jsx"; // Import the modal component

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true); // Control modal visibility
  const [userName, setUserName] = useState(""); // Store the user's name

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 0);
    };

    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("userName");
      if (storedName) {
        setUserName(storedName);
        setIsModalOpen(false); // Skip modal if name already exists
      }

      if (document.readyState === "complete") {
        handleComplete();
      } else {
        window.addEventListener("load", handleComplete);
        return () => window.removeEventListener("load", handleComplete);
      }
    }
  }, []);

  // Function to handle name submission
  const handleNameSubmit = (name) => {
    localStorage.setItem("userName", name);
    setUserName(name);
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className={loading ? "blur-sm" : ""}>
        {/* Show modal only if it's open */}
        {isModalOpen && <Modal onSubmit={handleNameSubmit} />} 

        {/* Render the Home component and pass userName as a prop */}
        {!loading && <Home userName={userName} />} 
      </main>
    </>
  );
}
