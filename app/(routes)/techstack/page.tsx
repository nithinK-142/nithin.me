import { backend, frontend, tools, hosting } from "@/app/assets/tech-stack";
import Header from "@/components/Header";
import { AnimationProvider } from "@/context/AnimationProvider";
import TechStackCard from "./TechStackCard";
import { variantParent } from "@/utils/motion";

const techStackItems = [
  { techArray: frontend, title: "Frontend" },
  { techArray: backend, title: "Backend" },
  { techArray: tools, title: "Tools" },
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
        variants={variantParent()}
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

export async function generateMetadata() {
  return {
    title: "TechStack",
  };
}
