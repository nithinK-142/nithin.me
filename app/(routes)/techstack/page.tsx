import { backend, frontend, tools, hosting } from "../../data/tech-stack";

const TechStackPage = () => {
  return (
    <section className="mt-8">
      {/* <h3 className="text-2xl uppercase font-semibold mb-2">Tech Stack</h3> */}

      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <h4 className="text-lg font-medium mb-2">Frontend</h4>

          <div className="flex gap-2 flex-wrap items-center text-sm">
            {frontend.map(({ logo, label }, index) => (
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

        <div>
          <h4 className="text-lg font-medium mb-2">Backend</h4>

          <div className="flex gap-2 flex-wrap items-center text-sm">
            {backend.map(({ logo, label }, index) => (
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

        <div>
          <h4 className="text-lg font-medium mb-2">Tools</h4>

          <div className="flex gap-2 flex-wrap items-center text-sm">
            {tools.map(({ logo, label }, index) => (
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
        
        <div>
          <h4 className="text-lg font-medium mb-2">Hosting</h4>

          <div className="flex gap-2 flex-wrap items-center text-sm">
            {hosting.map(({ logo, label }, index) => (
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
      </div>
    </section>
  );
};

export default TechStackPage;
