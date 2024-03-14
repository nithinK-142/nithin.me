import { mainProjectsSub } from "@/data/projects";
import ScaleCard from "./scale-card";
const TestPage = () => {
  return (
    <div className="flex overflow-x-scroll space-x-4">
      {mainProjectsSub.map((link, index) => (
        <ScaleCard key={index} {...link} />
      ))}
    </div>
  );
};

export default TestPage;
