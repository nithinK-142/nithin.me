import React from "react";
import { socialMediaData } from "../data/socials";
import { Icons } from "../data/icons";

const Socials = () => {
  return (
    <ul className="flex items-center gap-2 text-xl">
      {socialMediaData.map(({ platform, url, icon }, index) => {
        return (
          <li key={index}>
            <a href={url} title={platform} target="_blank" rel="noreferrer">
              <div className="h-5 fill-white sm:h-5">{Icons[icon]}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
