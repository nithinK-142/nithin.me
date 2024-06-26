import { icons } from "@/app/assets/icons";
import Socials from "@/components/Socials";
import Form from "./Form";
import { AnimationProvider } from "@/context/AnimationProvider";
import { slideInFromBottom, slideInFromTop } from "@/utils/motion";
import Header from "@/components/Header";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-between px-3 mt-4 md:flex-row md:px-0">
      <div className="pt-4 md:pt-0">
        <Header heading="Contact" />
      </div>

      <AnimationProvider
        variants={slideInFromTop(0.2)}
        initial="hidden"
        animate="visible"
        className="w-full p-4 md:w-1/2"
      >
        <h2 className="text-2xl font-bold opacity-90 mb-4 hidden md:block">
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
        variants={slideInFromBottom(0.2)}
        initial="hidden"
        animate="visible"
        className="w-full p-4 md:w-1/2"
      >
        <Form />
      </AnimationProvider>
    </div>
  );
};

export default ContactPage;

export async function generateMetadata() {
  return {
    title: "Contact",
  };
}
