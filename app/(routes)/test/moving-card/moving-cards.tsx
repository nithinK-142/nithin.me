/* eslint-disable @next/next/no-img-element */
import { MainProjectsSubType } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const MovingCard: React.FC<MainProjectsSubType> = ({
  href,
  gitLink,
  title,
  description,
  technologies,
  path,
}) => {
  return (
    <div className="group rounded-md -z-1 relative cursor-pointer w-[30rem] min-h-[14rem] items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 bg-stone-800">
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
        <div className="absolute group-hover:translate-y-[70%] left-1/2 -bottom-1 transform -translate-x-1/2 -translate-y-1/2 transition z-20">
          <Link href={href}>
            <h1 className=" text-3xl opacity-60 font-bold text-stone-500">
              {title}
            </h1>
          </Link>
        </div>
        <div className="absolute inset-0 transition-colors ease-in duration-1000 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

        <div className="absolute inset-0 h-full w-full rounded-sm bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center space-y-2 justify-center">
            <Link href={href}>
              <h1 className="text-3xl font-bold">{title}</h1>
            </Link>
            <p className="text-base font-normal">{description}</p>
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

export default MovingCard;
