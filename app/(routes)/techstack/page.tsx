// import React from "react";
import { backend, frontend, tools, hosting } from "../../data/tech-stack";

interface TechStackItem {
  logo: JSX.Element;
  label: string;
}

const TechStackPage: React.FC = () => {
  const techStackCard = (techArray: TechStackItem[], title: string) => (
    <div>
      <h4 className="mb-2 text-lg font-medium">{title}</h4>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {techArray.map(({ logo, label }, index) => (
          <div
            className="flex items-center w-auto gap-2 px-3 py-2 rounded select-none h-9 bg-stone-950"
            key={index}
            title={label}
          >
            <div className="h-4">{logo}</div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    // <section className="mt-8">
    // <h3 className="mb-2 text-2xl font-semibold uppercase">Tech Stack</h3>
    <section className="mt-16 md:mt-0">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {techStackCard(frontend, 'Frontend')}
        {techStackCard(backend, 'Backend')}
        {techStackCard(tools, 'Tools')}
        {techStackCard(hosting, 'Hosting')}
      </div>
    </section>
  );
};

export default TechStackPage;
