"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const ResumeLink = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "r" || event.key === "R") {
        setShowResume((prevState) => !prevState);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!showResume) return null;

  return (
    <Link
      href="/nithin_prime.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-4 mt-5 px-4 py-2 bg-[#a9879a] dark:bg-[#f05f45] text-white font-bold text-md rounded-md md:animate-bounce"
    >
      Resume
    </Link>
  );
};

export default ResumeLink;
