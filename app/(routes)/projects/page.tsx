// import React from "react";
import Cards from "../../components/Cards";
import { icons } from "../../data/icons";
import { mainProjects, otherProjects } from "../../data/projects";

const ProjectsPage = () => {
  return (
    <div className="my-16">
      <div className="grid text-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-3 sm:gap-2 custom-scrollbar">
        {mainProjects.map((link, index) => (
          <Cards key={index} {...link} />
        ))}
      </div>
      <div>
        <p className="mt-6 text-xl">
          Other Noteworthy Projects
        </p>
        <ul className="pb-2 ml-4">
          {otherProjects.map(({ title, href }, index) => {
            return (
              <li className="flex items-center gap-2" key={index}>
                <span className="h-4 fill-white">{icons.git}</span>
                <a href={href} target="_blank" rel="noreferrer">
                  <p className="opacity-70 hover:opacity-100">
                    {title}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
