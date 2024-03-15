import { AnimationProvider } from "@/providers/AnimationProvider";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  variantChild,
  variantParent,
} from "@/util/motion";
import "@/styles/scrollbar.css";
import { projects } from "@/data/projects";
import Link from "next/link";
import { icons } from "@/app/assets/icons";
import { honorableMentions,frameworkGuides } from "@/data/projects";
import { backend, frontend } from "@/app/assets/tech-stack";

const ProjectsPage = () => {
  return (
    <AnimationProvider
    varients={variantParent}
    initial="hidden"
    animate="show" className="my-20">
      
    <AnimationProvider
      varients={variantChild} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
        {projects.map(({ name, description, logo, url }, index) => (
          <div
            className="flex flex-col justify-between hover:bg-neutral-100 transition-colors ease-in-out duration-300 p-4 select-none group border border-black/10 dark:border-stone-900 bg-white/40 dark:bg-neutral-900/40 dark:hover:bg-neutral-900 dark:hover:shadow-lg hover:shadow-lg"
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
      </AnimationProvider>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
        <div className="flex bg-white/40 dark:bg-neutral-900/40 flex-col justify-between hover:bg-neutral-100 transition-colors ease-in-out duration-300 p-4 select-none group border border-black/10 dark:border-stone-900 dark:hover:bg-neutral-900 dark:hover:shadow-lg hover:shadow-lg">
          <h4 className="text-xl font-semibold tracking-wider mt-4 mb-1">
            Honorable Mentions
          </h4>
          <p className="text-sm font-normal pb-2">
            <span className="text-blue-800 dark:text-blue-200 mr-1">-&gt;</span>
            Projects that couldn&apos;t make it to the top.
          </p>
          {honorableMentions.map(({ title, href }, index) => (
            <div key={index} className="flex items-center gap-2 pt-1">
              <span className="h-4 dark:fill-white">{icons.git}</span>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-yellow-500 transition-colors tracking-wide ease-in-out duration-300"
              >
                {title}
              </a>
            </div>
          ))}
        </div>

        <div className="flex bg-white/40 dark:bg-neutral-900/40 flex-col hover:bg-neutral-100 transition-colors ease-in-out duration-300 p-4 select-none group border border-black/10 dark:border-stone-900 dark:hover:bg-neutral-900 dark:hover:shadow-lg hover:shadow-lg">
          <h4 className="text-xl font-semibold tracking-wider mt-4 mb-1">
            Framwork Guides
          </h4>
          <p className="text-sm font-normal">
            <span className="text-blue-800 dark:text-blue-200 mr-1">-&gt;</span>
            Quick-start into development with pre-configured templates.
          </p>
          <div className="flex gap-6">
            {frameworkGuides.map(({  href, framework }, index) => {
              const frontendLogo = frontend.find(
                (item) => item.label === framework
              );
              const backendLogo = backend.find(
                (item) => item.label === framework
              );

              const frameworkLogo = frontendLogo || backendLogo;
              return (
                <div key={index} className="flex pt-6">
                  <div className="h-8 hover:scale-110 transition-transform duration-300">
                    <a href={href} target="_blank" rel="noreferrer">
                      {frameworkLogo?.logo}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
