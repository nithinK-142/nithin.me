// import React from "react";
// import Loading from "@/app/Loading";

"use client";

const TestPage = () => {
  const animationClasses = ["spin bg-blue-500", "pulse bg-blue-400", "ping bg-slate-600", "bounce bg-white rounded-full"];
  return (
    <div className="flex-col items-center gap-8 flex-justify p-10">
      {/* <Loading /> */}
      <p className="text-xl">Tailwind CSS Animations</p>
      <div className="flex gap-10 group">
        {animationClasses.map((animationName) => (
          <div
            key={animationName}
            className={`w-24 h-24 animate-${animationName}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
