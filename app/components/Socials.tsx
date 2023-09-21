import React from "react";
import { socialMediaData } from "../data/socials";

const Socials = () => {
  return (
    <div className="flex space-x-1 pt-3 text-xl">
      {socialMediaData.map((item, index) => (
        <div className="pe-3" key={index}>
          <a
            className="text-white"
            target="_blank"
            rel="noreferrer"
            href={item.url}
          >
            <i className={`${item.icon} ${item.hover}`} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
