import HappyPill from "./HappyPill";
import Certifications from "./Certifications";
import { AnimationProvider } from "@/context/AnimationProvider";
import { slideInFromBottom } from "@/utils/motion";
import Experience from "./Experience";

const Extra = () => {
  return (
    <AnimationProvider
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <AnimationProvider
        variants={slideInFromBottom()}
        className="w-full border border-opacity-70 border-gray-400 dark:border-white/30 px-4 py-4 rounded-md"
      >
        {/* <HappyPill /> */}
        <Experience />
      </AnimationProvider>

      <AnimationProvider
        variants={slideInFromBottom()}
        className="w-full border border-opacity-70 border-gray-400 dark:border-white/30 px-4 py-4 rounded-md"
      >
        <Certifications />
      </AnimationProvider>
    </AnimationProvider>
  );
};

export default Extra;
