import { backend, frontend, tools, hosting } from "@/app/assets/tech-stack";
import Header from "@/components/sub/Header";
import { TechStackPageDiv } from "@/components/framer/TechStackPage";
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
      <TechStackPageDiv>
        {techStackItems.map(({ techArray, title }, index) => (
          <TechStackCard key={index} techArray={techArray} title={title} />
        ))}
      </TechStackPageDiv>
    </section>
  );
};

export default TechStackPage;
