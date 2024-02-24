import HappyPill from "./HappyPill";
import Achievements from "./Achievements";
import { AnimationProvider } from "@/providers/AnimationProvider";
import { slideInFromBottom } from "@/util/motion";

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
        <Achievements />
      </AnimationProvider>

      <AnimationProvider
        varients={slideInFromBottom}
        className="hidden md:block"
      >
        <HappyPill />
      </AnimationProvider>
    </AnimationProvider>
  );
};

export default Extra;
