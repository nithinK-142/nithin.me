"use client";
import { useState } from "react";
import { happyPills } from "../data/happy-pills";
import "../styles/threedots.css"

const HappyPill = () => {
  const [platformName, setPlatformName] = useState("");
  return (
    <>
      <p className="about-extra">My happy pills</p>
      <div className="flex gap-3">
        {happyPills.map(({ platform, icon }) => (
          <span
            key={platform}
            className="inline-block hover:animate-spin"
            onMouseEnter={() => setPlatformName(platform)}
            onMouseLeave={() => setPlatformName("")}
          >
            {icon}
          </span>
        ))}
      </div>
      {platformName ? (
        <p className="checking-text animate-pulse">
          ⦿ playing <span className="font-semibold">{platformName}...</span>
        </p>
      ) : (
        <p className="checking-text">⦿ Checking <span className="three-dots"></span></p>
      )}
    </>
  );
};

export default HappyPill;
