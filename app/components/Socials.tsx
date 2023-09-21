import React from "react";
import { socialMediaData } from "../data/socials";
import { Icons } from "../data/icons";

const Socials = () => {
  return (
    <ul className="flex items-center space-x-3 text-xl">
      {socialMediaData.map(({ platform, url, icon }, index) => {
        return (
          <li key={index}>
            <a href={url} title={platform} target="_blank" rel="noreferrer">
              <div className="h-5 fill-white">{Icons[icon]}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
