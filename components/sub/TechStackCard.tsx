import { TechStackCardProps } from "@/data/tech-stack-types";
import {TechStackCardDiv} from "../framer/TechStackCardDiv"
import TechStackLogo from "./TechStackLogo";

const TechStackCard: React.FC<TechStackCardProps> = ({ techArray, title }) => {
  return (
    <TechStackCardDiv>
      <h4 className="mb-2 text-lg font-semibold text-center">{title}</h4>
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        {techArray.map(({ logo, label }, index) => (
          <TechStackLogo key={index} logo={logo} label={label} />
        ))}
      </div>
    </TechStackCardDiv>
  );
};

export default TechStackCard;
