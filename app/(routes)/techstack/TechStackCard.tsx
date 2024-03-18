import { TechStackCardProps } from "@/data/tech-stack-types";
import TechStackLogo from "./TechStackLogo";
import { AnimationProvider } from "@/providers/AnimationProvider";
import { variantChild } from "@/utils/motion";

const TechStackCard: React.FC<TechStackCardProps> = ({ techArray, title }) => {
  return (
    <AnimationProvider
      variants={variantChild}
      className="bg-white/20 hover:bg-white/40 dark:bg-black/10 dark:hover:bg-black/20 hover:transition-colors hover:ease-in-out hover:duration-500 mb-4 py-4 rounded-md"
    >
      <h4 className="mb-2 text-lg font-semibold text-center">{title}</h4>
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        {techArray.map(({ logo, label }, index) => (
          <TechStackLogo key={index} logo={logo} label={label} />
        ))}
      </div>
    </AnimationProvider>
  );
};

export default TechStackCard;
