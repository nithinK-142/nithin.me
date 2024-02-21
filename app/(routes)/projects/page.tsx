import Cards from "@/components/sub/Cards";
import { mainProjects, otherProjects, frameworkGuides } from "@/data/projects";
import "@/styles/scrollbar.css";
import Header from "@/components/sub/Header";
import OtherProjects from "@/components/sub/OtherProjects";
import FrameworkGuide from "@/components/sub/framework-guide";

const ProjectsPage = () => {
  return (
    <div className="my-16">
      <Header heading="Projects" />
      <div className="grid text-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-3 sm:gap-2 custom-scrollbar">
        {mainProjects.map((link, index) => (
          <Cards key={index} {...link} />
        ))}
      </div>
      <div className="flex flex-col-reverse md:flex-row md:justify-between mt-6">
        <div>
          <p className="text-xl">Other Noteworthy Projects</p>
          <ul className="pb-2 ml-4">
            {otherProjects.map(({ title, href }, index) => (
              <OtherProjects key={index} title={title} href={href} />
            ))}
          </ul>
        </div>
        <div className="mb-6 md:mr-4 lg:mr-20">
          <p className="text-xl">Framework Guides</p>{" "}
          <ul className="pb-2 ml-2 floating-scrollbar">
            {frameworkGuides.map(({ title, href, framework }, index) => (
              <FrameworkGuide
                key={index}
                title={title}
                framework={framework}
                href={href}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
