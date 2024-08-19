"use client"
import { useState, useEffect } from "react";
import Home from "./Home/Home.jsx";
import "@/app/globals.css";
import Head from "next/head";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 0);
    };

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        handleComplete();
      } else {
        window.addEventListener("load", handleComplete);
        return () => window.removeEventListener("load", handleComplete);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className={loading ? "blur-sm" : ""}>
        <Home />
      </main>
    </>
  );
}
