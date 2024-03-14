import Image from "next/image";
import Link from "next/link";
import { MainProjectsSubType } from "@/data/projects";

const RenderCard: React.FC<MainProjectsSubType> = ({
  href,
  gitLink,
  title,
  description,
  technologies,
  path,
}) => {
  return (
    <div className="group min-w-[24rem] min-h-[14rem] [perspective:1000px] border border-gray-200 rounded-sm shadow dark:bg-stone-800 dark:border-stone-700">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0">
          <Image
            className="rounded-t-lg object-cover w-full h-full"
            src={path}
            alt="image"
            width={1080}
            height={1080}
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-sm bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <Link href={href}>
              <h1 className="text-3xl font-bold">{title}</h1>
            </Link>
            <p className="text-base">{description}</p>
            {/* <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
              Read More
            </button> */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {technologies.map((tech, index) => (
                <p
                  className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                  key={index}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderCard;
