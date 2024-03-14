import { MainProjectsSubType } from "@/data/projects";
import Image from "next/image";

const RenderCard: React.FC<MainProjectsSubType> = ({
  href,
  gitLink,
  title,
  description,
  technologies,
  path,
}) => {
  return (
    <div className="relative overflow-hidden group min-w-[24rem] min-h-[14rem] border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="rounded-t-lg object-cover w-full h-full group-hover:opacity-40 group-hover:scale-125 transition-transform duration-1000"
        src={path}
        alt="image"
        width={1080}
        height={1080}
      />
      <div className="absolute w-full opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-b-lg">
        <div className="flex flex-col">
          <a href="#">
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {technologies.map((tech, index) => (
              <p
                className="px-2 py-1 text-xs bg-[#004225] dark:bg-gray-700 rounded text-white"
                key={index}
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderCard;
