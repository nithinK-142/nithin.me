import { TechStackItem } from "@/data/tech-stack-types";

const TechStackLogo: React.FC<TechStackItem> = ({ logo, label }) => {
  return (
    <div
      className="flex items-center w-auto gap-2 px-3 py-2 rounded select-none active:scale-[0.8] cursor-pointer transition-transform duration-[350] h-9 bg-white dark:bg-stone-950"
      title={label}
    >
      <div className="h-4">{logo}</div>
      <p>{label}</p>
    </div>
  );
};

export default TechStackLogo;
