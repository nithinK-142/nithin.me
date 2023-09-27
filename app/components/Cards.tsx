// import React from "react";
import { MainProjectsType } from "../data/projects";
import { socialIcons } from "../data/social-icons";

const Cards = ({ href, gitLink, title, description, technologies }: MainProjectsType) => (
  <div className="px-2 py-4 border rounded-lg hover:rounded-none transition-all duration-700 border-gray-100/30 bg-black/30 group sm:px-3 hover:border-gray-300">
    <h2 className="mb-3 text-xl">
      <a href={href} target="_blank" rel="noopener noreferrer" className="underlined font-semibold pb-1">
        {title}{" "}
      </a>
      <span className="inline-block transition-transform group-hover:rotate-180 group-hover:text-blue-200 motion-reduce:transform-none duration-500">
        -&gt;
      </span>
      {/* <span className="opacity-0 group-hover:opacity-100"> */}
      <span>
        <a href={gitLink} target="_blank" rel="noopener noreferrer">
          <button className="h-5 pl-1 duration-300 fill-white hover:scale-125">{socialIcons.github}</button>
        </a>
      </span>
    </h2>
    <p className="m-0 md:max-w-[30ch] text-sm opacity-70">{description}</p>

    <div className="flex flex-wrap justify-center gap-2 mt-2">
      {technologies.map((tech, index) => (
        <p
          className="px-1 py-1 text-sm text-black bg-yellow-500 rounded"
          key={index}
        >
          {tech}
        </p>
      ))}
    </div>
  </div>
);

export default Cards;
