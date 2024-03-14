import { mainProjectsSub } from "@/data/projects";
import ImageCard from "./image-card";

const TestPage = () => {
  return (
    <>
      <div className="flex overflow-x-scroll space-x-4">
        {mainProjectsSub.map((link, index) => (
          <ImageCard key={index} {...link} />
        ))}
      </div>
    </>
  );
};

export default TestPage;
