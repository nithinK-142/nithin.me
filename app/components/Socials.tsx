import React from "react";
import { socials } from "../data/socials";
import { socialIcons } from "../data/social-icons";

const Socials = () => {
  return (
    <ul className="flex items-center space-x-3 text-xl">
      {socials.map(({ platform, url, icon }, index) => {
        return (
          <li key={index}>
            <a href={url} title={platform} target="_blank" rel="noreferrer">
              <div className="h-5 fill-white">{socialIcons[icon]}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
