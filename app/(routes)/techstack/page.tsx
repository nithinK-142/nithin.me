import { Logos } from "../../data/logos";

const TechStackPage = () => {
  return (
    <>
      <div className="max-w-xl lg:max-w-md md:max-w-full flex-1">
        <p className="font-medium text-2xl my-4 uppercase">Tech Stack</p>
        <div className="flex gap-3 gap-y-4 flex-wrap items-center pr-2">
          <i className="h-9 w-auto" title="HTML5">
            {Logos.html5}
          </i>
          <i className="h-9 w-auto" title="CSS3">
            {Logos.css3}
          </i>
          <i className="h-9 w-auto" title="Bootstrap">
            {Logos.bootstrap}
          </i>
          <i className="h-9 w-auto" title="TailwindCSS">
            {Logos.tailwind}
          </i>
          <i className="h-9 w-auto" title="JavaScript">
            {Logos.js}
          </i>
          <i className="h-9 w-auto" title="React.js">
            {Logos.react}
          </i>
          <i className="h-9 w-auto" title="Next.js">
            {Logos.nextjs}
          </i>
          <i className="h-9 w-auto" title="Python">
            {Logos.python}
          </i>
          <i className="h-9 w-auto" title="npm">
            {Logos.npm}
          </i>
          <i className="h-9 w-auto" title="Postman">
            {Logos.postman}
          </i>
          <i className="h-9 w-auto" title="Figma">
            {Logos.figma}
          </i>
          <i className="h-9 w-auto" title="Git">
            {Logos.git}
          </i>
          <i className="h-9 w-auto" title="Terminal">
            {Logos.terminal}
          </i>
        </div>
      </div>
    </>
  );
};

export default TechStackPage;
