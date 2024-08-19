// src/app/page.js
"use client";
import { useState, useEffect } from "react";
import Home from "./Home/Home.jsx";  // Ensure this path is correct
import "@/app/globals.css";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 0);
    };

    if (typeof document !== "undefined" && document.readyState === "complete") {
      handleComplete();
    } else if (typeof window !== "undefined") {
      window.addEventListener("load", handleComplete);
      return () => window.removeEventListener("load", handleComplete);
    }
  }, []);

  return (
    <>
      <main className="">
        <div className={loading ? "blur-sm" : ""}>
          <Home />
        </div>
      </main>
    </>
  );
}
