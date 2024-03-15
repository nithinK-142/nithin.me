// import Cards from "./Cards";
// import { mainProjects, otherProjects, frameworkGuides } from "@/data/projects";
// import Header from "@/components/Header";
// import OtherProjects from "./OtherProjects";
// import FrameworkGuide from "./FrameworkGuide";
// import { AnimationProvider } from "@/providers/AnimationProvider";
// import {
//   slideInFromLeft,
//   slideInFromRight,
//   slideInFromTop,
// } from "@/util/motion";
import "@/styles/scrollbar.css";
import { projects } from "@/data/projects-new";
import Link from "next/link";
import { icons } from "@/app/assets/icons";

const ProjectsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
      {projects.map(({ name, description, logo, url }, index) => (
        <div
          className="flex flex-col justify-between hover:bg-neutral-100 transition-colors ease-in-out duration-300 p-4 select-none group border border-black/10 dark:border-stone-900 dark:hover:bg-neutral-900 dark:hover:shadow-lg hover:shadow-lg"
          key={index}
        >
          <div className="pt-2">
            <div className="h-12 ml-0 block mr-auto">{logo}</div>
            <h4 className="text-xl font-semibold mt-4 mb-1">{name}</h4>
            <p className="text-sm">{description}</p>
          </div>

          <div className="flex items-center gap-2 mt-6 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-yellow-500 transition-colors ease-in-out duration-300">
            {icons.link}
            <Link
              href={`https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;

export async function generateMetadata() {
  return {
    title: "Projects",
  };
}
