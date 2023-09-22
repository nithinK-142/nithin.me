import Cards from "@/app/components/Cards";
import React from "react";
import { icons } from "../../data/icons";
import { mainProjects, otherProjects } from "../../data/projects";

const ProjectsPage = () => {
  return (
    <>
      <div className="text-center grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-3 sm:gap-2">
        {mainProjects.map((link, index) => (
          <Cards key={index} {...link} />
        ))}
      </div>
      <div>
        <p className="text-xl font-medium mt-6 mb-2">
          Other Noteworthy Projects
        </p>
        <ul className="ml-4 pb-2">
          {otherProjects.map(({ title, href }, index) => {
            return (
              <li className="flex gap-2 items-center" key={index}>
                <span className="h-4 fill-white">{icons.git}</span>
                <a href={href} target="_blank" rel="noreferrer">
                  <p className="font-jbmono opacity-90 hover:opacity-100">
                    {title}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProjectsPage;
