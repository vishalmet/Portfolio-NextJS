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
    const storedName = localStorage.getItem("userName");

    if (!storedName) {
      setIsModalOpen(true);
    } else {
      setUserName(storedName);
    }


  }, []);

  return (
    <>
      {isModalOpen && <Modal onSubmit={handleNameSubmit} />}
      <Home userName={userName} />
    </>
  );
}