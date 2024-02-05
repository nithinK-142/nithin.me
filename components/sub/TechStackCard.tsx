import { TechStackCardProps } from "@/data/tech-stack-types";
import TechStackLogo from "./TechStackLogo";

const TechStackCard: React.FC<TechStackCardProps> = ({ techArray, title }) => {
  return (
    <div className="bg-white/20 dark:bg-black/10 mb-4 transition-slow">
      <h4 className="mb-2 text-lg font-semibold text-center">{title}</h4>
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        {techArray.map(({ logo, label }, index) => (
          <TechStackLogo key={index} logo={logo} label={label} />
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
