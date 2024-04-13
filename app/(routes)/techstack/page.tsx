import { backend, frontend, tools, hosting } from "@/app/assets/tech-stack";
import Header from "@/components/Header";
import { AnimationProvider } from "@/context/AnimationProvider";
import { fadeInOut, fadeInUp } from "@/utils/motion";
import "./style.css";

const techStackItems = [
  { techArray: frontend, title: "Frontend" },
  { techArray: tools, title: "Tools" },
  { techArray: backend, title: "Backend" },
  { techArray: hosting, title: "Hosting" },
];

const TechStackPage = () => {
  return (
    // <section className="mt-8">
    // <h3 className="mb-2 text-2xl font-semibold uppercase">Tech Stack</h3>
    <section className="mt-10 mb-16">
      <div className="pb-4 md:pb-0">
        <Header heading="Tech Stack" />
      </div>
      <AnimationProvider
        variants={fadeInOut()}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 grid-rows-2 sm:grid-cols-6 gap-x-8 gap-y-4"
      >
        {techStackItems.map(({ techArray, title }, index) => (
          <AnimationProvider
            key={index}
            variants={fadeInUp}
            className="bg-white/20 hover:bg-white/40 dark:bg-black/10 dark:hover:bg-black/20 hover:transition-colors hover:ease-in-out hover:duration-500 mb-4 py-4 rounded-md gridd-child"
          >
            <h4 className="mb-2 text-lg font-semibold text-center">{title}</h4>
            <ul className="flex flex-wrap items-center justify-center gap-2 text-sm">
              {techArray.map(({ logo, label }, index) => (
                <li
                  key={index}
                  className="flex items-center w-auto gap-2 px-3 py-2 rounded select-none active:scale-[0.8] cursor-pointer transition-transform duration-[350] h-9 bg-white dark:bg-stone-950"
                  title={label}
                >
                  <div className="h-4">{logo}</div>
                  <p>{label}</p>
                </li>
              ))}
            </ul>
          </AnimationProvider>
        ))}
      </AnimationProvider>
    </section>
  );
};

export default TechStackPage;

export async function generateMetadata() {
  return {
    title: "TechStack",
  };
}
