import { MainProjectsType } from "../data/projects";
import { socialIcons } from "../data/social-icons";

const Cards = ({ href, gitLink, title, description, technologies }: MainProjectsType) => (
  <div className="px-2 py-4 transition-colors border border-transparent rounded-lg group sm:px-3 hover:border-gray-300 hover:bg-gray-100 dark:border-neutral-700 hover:dark:bg-neutral-800/30">
    <h2 className="mb-3 text-xl font-semibold group-hover:underline">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {title}{" "}
      </a>
      <span className="inline-block transition-transform group-hover:rotate-180 group-hover:text-blue-200 motion-reduce:transform-none">
        -&gt;
      </span>
      {/* <span className="opacity-0 group-hover:opacity-100"> */}
      <span>
        <a href={gitLink} target="_blank" rel="noopener noreferrer">
          <button className="h-4 pl-1 duration-300 fill-white hover:scale-125">{socialIcons.github}</button>
        </a>
      </span>
    </h2>
    <p className="m-0 md:max-w-[30ch] text-sm opacity-50">{description}</p>

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
