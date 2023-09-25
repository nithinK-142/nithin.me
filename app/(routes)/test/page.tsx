"use client";
import React, { useState } from "react";
import Loading from "@/app/Loading";

const TestPage = () => {
  const [animation, setAnimation] = useState("no");

  const handleMouseEnter = (animationName: React.SetStateAction<string>) => () => {
    setAnimation(animationName);
  };

  const handleMouseLeave = () => {
    setAnimation("no Animation!!");
  };

  return (
    <div className="flex-col items-center gap-8 flex-justify">
    {/* <Loading /> */}
      <p className="text-xl">Currently using {animation} animation.</p>
      <div className="flex gap-4">
        {["Spin", "Pulse", "Ping", "Bounce"].map((animationName) => (
          <div
            key={animationName}
            className={`w-24 h-24 bg-blue-500 hover:bg-slate-400 hover:animate-${animationName.toLowerCase()}`}
            onMouseEnter={handleMouseEnter(animationName)}
            onMouseLeave={handleMouseLeave}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
