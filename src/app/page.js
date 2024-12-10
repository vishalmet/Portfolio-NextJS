"use client";
import { useState, useEffect } from "react";
import Home from "./Home/Home";
import Modal from "../modal/Modal";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");

  const handleNameSubmit = (name) => {
    setUserName(name);
    setIsModalOpen(false);
    localStorage.setItem("userName", name);
  };

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
      {isModalOpen && <Modal onSubmit={handleNameSubmit} />}
      <Home userName={userName} />
    </>
  );
}