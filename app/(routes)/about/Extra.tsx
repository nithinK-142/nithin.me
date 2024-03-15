import HappyPill from "./HappyPill";
import Certifications from "./Certifications";
import { AnimationProvider } from "@/providers/AnimationProvider";
import { slideInFromBottom } from "@/utils/motion";

const Extra = () => {
  return (
    <AnimationProvider
      initial="hidden"
      animate="visible"
      className="gap-8 flex"
    >
      <AnimationProvider
        varients={slideInFromBottom}
        className="w-full md:w-1/2"
      >
        <Certifications />
      </AnimationProvider>

      <AnimationProvider
        varients={slideInFromBottom}
        className="hidden md:block min-w-[12rem]"
      >
        <HappyPill />
      </AnimationProvider>
    </AnimationProvider>
  );
};

export default Extra;
