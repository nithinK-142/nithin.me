import { AnimationProvider } from "@/providers/AnimationProvider";
import { variantChild, variantParent } from "@/utils/motion";
import "@/styles/scrollbar.css";
import { projects } from "@/data/projects";
import Link from "next/link";
import { icons } from "@/app/assets/icons";
import { honorableMentions, frameworkGuides } from "@/data/projects";
import { backend, frontend, others } from "@/app/assets/tech-stack";

const ProjectsPage = () => {
  const getFrameworkLogo = (label: string) => {
    const frontendLogo = frontend.find((item) => item.label === label)?.logo;
    if (frontendLogo) return frontendLogo;

    const backendLogo = backend.find((item) => item.label === label)?.logo;
    if (backendLogo) return backendLogo;

    const otherLogo = others.find((item) => item.label === label)?.logo;
    if (otherLogo) return otherLogo;

    return null;
  };
  return (
    <AnimationProvider
      variants={variantParent}
      initial="hidden"
      animate="show"
      className="my-20"
    >
      {/* Project Cards */}
      <AnimationProvider
        variants={variantChild}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 "
      >
        {projects.map(
          ({ name, description, techStack, logo, url, gitUrl }, index) => {
            return (
              <div
                className="flex flex-col justify-between hover:bg-neutral-100 hover:transition-colors hover:ease-in-out hover:duration-300 p-4 select-none group border border-black/10 dark:border-stone-900 bg-white/40 dark:bg-black/20 dark:hover:bg-black/50 dark:hover:shadow-lg hover:shadow-lg relative overflow-hidden"
                key={index}
              >
                <div className="absolute flex items-center space-x-2 right-3 transition-transform duration-500 delay-200 -translate-y-20 group-hover:-translate-y-6">
                  {techStack.map((tech, index) => {
                    const frameworkLogo = getFrameworkLogo(tech);
                    return (
                      frameworkLogo && (
                        <div
                          key={index}
                          className="flex flex-col justify-center items-center"
                        >
                          <div className="h-6 border border-black/10 dark:border-stone-700"></div>
                          <div className="h-8 w-8 overflow-hidden flex justify-center items-center rounded-full border border-black/20 dark:border-stone-700 hover:animate-rotate3d cursor-pointer">
                            <div className="h-6">{frameworkLogo}</div>
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
                <div>
                  <div className="h-12 ml-0 block mr-auto">{logo}</div>
                  <h4 className="text-xl font-semibold mt-4 mb-1">{name}</h4>
                  <p className="text-sm">{description}</p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-yellow-500 hover:transition-colors hover:ease-in-out hover:duration-300">
                    {icons.link}
                    <Link
                      href={`https://${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url}
                    </Link>
                  </div>

                  <div className="absolute hidden sm:block right-0 transition-transform duration-500 delay-200 translate-x-7 group-hover:-translate-x-6">
                    <div className="h-5 fill-blue-600 dark:fill-yellow-400">
                      <a
                        href={"https://github.com/nithinK-142/" + `${gitUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {icons.github}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </AnimationProvider>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
        {/*  Honorable Mentions */}
        <div className="flex bg-white/40 dark:bg-black/20 dark:hover:bg-black/50 flex-col justify-between hover:bg-neutral-100 hover:transition-colors hover:ease-in-out hover:duration-300 p-4 select-none group border border-black/10 dark:border-stone-900 dark:hover:shadow-lg hover:shadow-lg lg:pl-4">
          <div className="flex items-center pb-1">
            {icons.badge}
            <h4 className="text-xl font-semibold tracking-wider">
              Honorable Mentions
            </h4>
          </div>
          <p className="text-sm font-medium mb-1.5 pl-1 opacity-95">
            Projects that couldn&apos;t make it to the top.
          </p>
          {honorableMentions.map(({ title, href }, index) => (
            <div key={index} className="flex items-center gap-2 pt-1 pl-1">
              <span className="h-4 dark:fill-white">{icons.git}</span>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-yellow-500 hover:transition-colors tracking-wide hover:ease-in-out hover:duration-300"
              >
                {title}
              </a>
            </div>
          ))}
        </div>

        {/* Framwork Guides */}
        <div className="flex bg-white/40 dark:bg-black/20 dark:hover:bg-black/50 flex-col hover:bg-neutral-100 hover:transition-colors hover:ease-in-out hover:duration-300 p-4 select-none group border border-black/10 dark:border-stone-900 dark:hover:shadow-lg hover:shadow-lg lg:pl-4">
          <div className="flex items-center pb-1 space-x-1">
            {icons.book}
            <h4 className="text-xl font-semibold tracking-wider">
              Framwork Guides
            </h4>
          </div>
          <p className="text-sm font-medium mb-1.5 pl-1 opacity-95">
            Quick-start into development with pre-configured templates.
          </p>
          <div className="flex gap-6">
            {frameworkGuides.map(({ href, framework }, index) => {
              const frameworkLogo = getFrameworkLogo(framework);
              return (
                <div key={index} className="flex pt-6">
                  <div className="h-8 hover:scale-110 transition-transform duration-300">
                    <a href={href} target="_blank" rel="noreferrer">
                      {frameworkLogo}
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
