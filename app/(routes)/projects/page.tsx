import Cards from "./Cards";
import { mainProjects, otherProjects, frameworkGuides } from "@/data/projects";
import "@/styles/scrollbar.css";
import Header from "@/components/Header";
import OtherProjects from "./OtherProjects";
import FrameworkGuide from "./FrameworkGuide";
import { AnimationProvider } from "@/providers/AnimationProvider";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const ProjectsPage = () => {
  return (
    <AnimationProvider initial="hidden" animate="visible" className="my-16">
      <Header heading="Projects" />
      <AnimationProvider
        varients={slideInFromTop()}
        className="grid text-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-3 sm:gap-2 custom-scrollbar"
      >
        {mainProjects.map((link, index) => (
          <Cards key={index} {...link} />
        ))}
      </AnimationProvider>
      <div className="flex flex-col-reverse md:flex-row md:justify-between mt-6">
        <AnimationProvider varients={slideInFromLeft}>
          <p className="text-xl">Other Noteworthy Projects</p>
          <ul className="pb-2 ml-4">
            {otherProjects.map(({ title, href }, index) => (
              <OtherProjects key={index} title={title} href={href} />
            ))}
          </ul>
        </AnimationProvider>
        <AnimationProvider
          varients={slideInFromRight}
          className="mb-6 md:mr-4 lg:mr-20"
        >
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
        </AnimationProvider>
      </div>
    </AnimationProvider>
  );
};

export default ProjectsPage;

export async function generateMetadata() {
  return {
    title: "Projects",
  };
}
