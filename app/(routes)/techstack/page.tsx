import { backend, frontend, tools, hosting } from "@/app/assets/tech-stack";
import Header from "@/components/sub/Header";
import TechStackCard from "@/components/sub/TechStackCard";

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
    <section className="my-16 md:my-0">
      <Header heading="Tech Stack" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {techStackItems.map(({ techArray, title }, index) => (
          <TechStackCard key={index} techArray={techArray} title={title} />
        ))}
      </div>
    </section>
  );
};

export default TechStackPage;
