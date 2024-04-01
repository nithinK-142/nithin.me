import { icons } from "@/app/assets/icons";
import Socials from "@/components/Socials";
import Form from "./Form";
import { AnimationProvider } from "@/context/AnimationProvider";
import { slideInFromBottom, slideInFromTop } from "@/utils/motion";

const ContactPage = () => {
  return (
    <AnimationProvider
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-between px-3 mt-8 md:flex-row md:px-0"
    >
      <AnimationProvider
        variants={slideInFromTop()}
        className="w-full p-4 md:w-1/2"
      >
        <h2 className="text-2xl font-bold opacity-90 mb-4">
          Just Say Hi <span>👋</span>
        </h2>
        <h3 className="text-lg">
          I&apos;m always open to discuss your project or talk about new things.
          Let&apos;s work together and I&apos;ll provide my utmost assistance.
        </h3>

        <div className="flex-wrap mt-2 flex-align hover:opacity-80">
          <div className="w-auto h-4 dark:fill-white">{icons.envelope}</div>
          <p className="pl-1 pb-[1px] hover:underline underline-offset-2">
            <a href="mailto:142nithin@gmail.com">142nithin@gmail.com</a>
          </p>
        </div>
        <p className="mt-8 mb-2 font-semibold">Hire Me on :</p>
        <a
          href="https://www.fiverr.com/nithin_webdev?up_rollout=true"
          target="_blank"
          rel="noreferrer"
        >
          {icons.fiverr}
        </a>

        <p className="mt-8 mb-2 font-semibold">Ping Me on :</p>
        <Socials height="h-7" />
      </AnimationProvider>

      <AnimationProvider
        variants={slideInFromBottom}
        className="w-full p-4 md:w-1/2"
      >
        <Form />
      </AnimationProvider>
    </AnimationProvider>
  );
};

export default ContactPage;

export async function generateMetadata() {
  return {
    title: "Contact",
  };
}
