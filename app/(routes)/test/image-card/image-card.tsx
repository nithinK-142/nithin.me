/* eslint-disable @next/next/no-img-element */
import { MainProjectsSubType } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const ImageCard: React.FC<MainProjectsSubType> = ({
  href,
  gitLink,
  title,
  description,
  technologies,
  path,
}) => {
  return (
    <div className="group rounded-md relative cursor-pointer max-w-[calc(100%/3)] min-w-[24rem] min-h-[14rem] items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border border-stone-700">
      <Image
        className="h-full w-full rounded-md object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
        src={path}
        alt=""
        width={1080}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

      <div className="absolute inset-0  translate-y-[80%] flex-col  px-9 text-center transition-all duration-500 group-hover:translate-y-[10%]">
        <Link href={href}>
          <h1 className=" text-3xl font-bold text-white">{title}</h1>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {technologies.map((tech, index) => (
              <p
                className="rounded-full bg-neutral-900 py-2 px-3.5  text-sm capitalize text-white shadow shadow-black/60"
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

export default ImageCard;
