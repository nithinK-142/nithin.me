import { TechStackItem } from "@/data/tech-stack-types";

const TechStackLogo: React.FC<TechStackItem> = ({ logo, label }) => {
  return (
    <div
      className="flex items-center w-auto gap-2 px-3 py-2 hover:duration-200 rounded select-none hover:scale-110 h-9 bg-white dark:bg-stone-950"
      title={label}
    >
      <div className="h-4">{logo}</div>
      <p>{label}</p>
    </div>
  );
};

export default TechStackLogo;
