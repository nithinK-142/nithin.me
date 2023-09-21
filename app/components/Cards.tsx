import React from "react";
import { main } from "../data/projects";
import { Icons } from "../data/icons";

const Cards = ({ href, title, description, technologies }: main) => (
  <div className="group rounded-lg border border-transparent px-2 sm:px-3 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-neutral-700 hover:dark:bg-neutral-800/30">
    <h2 className="mb-3 text-xl font-semibold group-hover:underline">
      <a href={href} className="" target="_blank" rel="noopener noreferrer">
        {title}{" "}
      </a>
      <span className="inline-block transition-transform group-hover:rotate-180 group-hover:text-blue-200 motion-reduce:transform-none">
        -&gt;
      </span>
      {/* <span className="opacity-0 group-hover:opacity-100"> */}
      <span>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <button className="h-4 pl-1 fill-white">{Icons.github}</button>
        </a>
      </span>
    </h2>
    <p className="m-0 md:max-w-[30ch] text-sm opacity-50">{description}</p>

    <div className="flex flex-wrap justify-center mt-2 gap-2">
      {technologies.map((tech, index) => (
        <p
          className="text-sm bg-yellow-500 text-black py-1 px-1 rounded"
          key={index}
        >
          {tech}
        </p>
      ))}
    </div>
  </div>
);

export default Cards;
