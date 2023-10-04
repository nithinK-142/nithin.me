// import React from "react";
// import Loading from "@/app/Loading";

"use client";

const TestPage = () => {
  const animationClasses = [
    "animate-spin bg-blue-500",
    "animate-pulse bg-blue-400",
    "animate-ping bg-slate-600",
    "animate-bounce bg-white rounded-full",
  ];
  return (
    <div className="flex-col items-center gap-8 flex-justify p-10">
      {/* <Loading /> */}
      <p className="text-xl">Tailwind CSS Animations</p>
      <div className="flex gap-10 group">
        {animationClasses.map((animationName) => (
          <div
            key={animationName}
            className={`w-24 h-24 ${animationName}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
