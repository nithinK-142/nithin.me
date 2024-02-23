import { backend, frontend, tools, hosting } from "@/app/assets/tech-stack";
import Header from "@/components/Header";
import { AnimationProvider } from "@/providers/AnimationProvider";
import TechStackCard from "./TechStackCard";

const techStackItems = [
  { techArray: frontend, title: "Frontend" },
  { techArray: backend, title: "Backend" },
  { techArray: tools, title: "Tools" },
  { techArray: hosting, title: "Hosting" },
];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const TechStackPage = () => {
  return (
    // <section className="mt-8">
    // <h3 className="mb-2 text-2xl font-semibold uppercase">Tech Stack</h3>
    <section className="my-16 md:my-0">
      <Header heading="Tech Stack" />
      <AnimationProvider
        varients={variants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"
      >
        {techStackItems.map(({ techArray, title }, index) => (
          <TechStackCard key={index} techArray={techArray} title={title} />
        ))}
      </AnimationProvider>
    </section>
  );
};

export default TechStackPage;
