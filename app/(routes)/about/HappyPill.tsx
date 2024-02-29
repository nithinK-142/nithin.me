"use client";

import { useState } from "react";
import { happyPills } from "@/app/assets/happy-pills";
import "@/styles/threedots.css";
import { icons } from "@/app/assets/icons";

const HappyPill = () => {
  const [platformName, setPlatformName] = useState("");
  return (
    <>
      <div className="flex items-center space-x-2">
       {icons.happy}
        <p className="about-extra">My happy pills</p>
      </div>
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
        <p className="checking-text">
          ⦿ Checking <span className="three-dots"></span>
        </p>
      )}
    </>
  );
};

export default HappyPill;
