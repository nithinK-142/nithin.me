import React from "react";
import { backend, frontend, tools, hosting } from "../../data/tech-stack";

interface TechStackItem {
  logo: JSX.Element;
  label: string;
}

const TechStackPage: React.FC = () => {
  const generateTechStack = (techArray: TechStackItem[], title: string) => (
    <div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <div className="flex gap-2 flex-wrap items-center text-sm">
        {techArray.map(({ logo, label }, index) => (
          <div
            className="h-9 w-auto flex items-center gap-2 bg-stone-900 py-2 px-3 rounded select-none"
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
    // <h3 className="text-2xl uppercase font-semibold mb-2">Tech Stack</h3>
    <section>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {generateTechStack(frontend, 'Frontend')}
        {generateTechStack(backend, 'Backend')}
        {generateTechStack(tools, 'Tools')}
        {generateTechStack(hosting, 'Hosting')}
      </div>
    </section>
  );
};

export default TechStackPage;
