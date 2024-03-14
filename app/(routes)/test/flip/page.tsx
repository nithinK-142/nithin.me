import { mainProjectsSub } from "@/data/projects";
import FlipCard from "./flip-card";
const TestPage = () => {
  return (
    <div className="flex overflow-x-scroll space-x-4">
      {mainProjectsSub.map((link, index) => (
        <FlipCard key={index} {...link} />
      ))}
    </div>
  );
};

export default TestPage;
