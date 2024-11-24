import { icons } from "@/app/assets/icons";

const Experience = () => {
  return (
    <>
      <div className="flex items-center space-x-2 mt-2 mb-4">
        {icons.experience}
        <p className="about-extra">Experience</p>
      </div>
      <ul className="select-none">
        <li>
          <p className="text-sm opacity-80">2024 Sept - Present</p>
          <p>
            Full Stack Developer @{" "}
            <a
              href="https://www.dealsdray.com/"
              className="font-semibold about-link"
            >
              Dealsdray Online
            </a>
          </p>
        </li>
      </ul>
    </>
  );
};

export default Experience;
