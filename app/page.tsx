import Link from "next/link";
import { icons } from "./assets/icons";
import Button from "@/components/Button";
import { AnimationProvider } from "@/context/AnimationProvider";
import { variantChild, variantParent } from "@/utils/motion";

export default function Home() {
  return (
    <AnimationProvider
      variants={variantParent}
      initial="hidden"
      animate="show"
      className="py-5 my-5 opacity-100 md:opacity-0"
    >
      <AnimationProvider
        variants={variantChild}
        initial="hidden"
        animate="show"
        className="flex-colm md:flex-row"
      >
        <div className="w-full pb-4 md:w-1/2 flex-justify">
          <div className="w-7/12 h-auto sm:w-8/12 md:w-3/4 md:ml-auto">
            {icons.user}
          </div>
        </div>

        <div className="w-full px-5 md:w-1/2 flex-justify md:justify-start md:items-center">
          <div>
            <p className="hidden pl-1 text-base font-normal md:text-xl md:block select-none">
              Hi there, i&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-[86px] xl:text-8xl font-bold opacity-75 dark:opacity-100">
              NITHIN
            </h1>
            <p className="pt-2 font-normal leading-relaxed text-center md:pl-1 md:text-left">
              Developer, Freelancer
              <br /> &amp; Tech Enthusiast
            </p>

            <div className="flex-justify md:justify-start md:pl-1 md:mt-2">
              <Link href="/contact">
                <Button
                  buttonText="Let's Talk!"
                  animation="md:animate-bounce"
                />
              </Link>
            </div>
          </div>
        </div>
      </AnimationProvider>
    </AnimationProvider>
  );
}
