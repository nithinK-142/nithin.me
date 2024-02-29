import { achivements } from "@/data/achievement";
import { icons } from "@/app/assets/icons";

const Achievements = () => {
  return (
    <>
      <div className="flex items-center space-x-2">
        {icons.certify}
        <p className="about-extra">Achievements</p>
      </div>
      <ul className="space-y-1">
        {achivements.map(({ title, link }, index) => (
          <li className="gap-2 flex-align" key={index}>
            <span className="h-4 fill-green-500">{icons.tick}</span>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="opacity-100 hover:font-semibold dark:hover:font-medium dark:opacity-80 dark:hover:opacity-100"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Achievements;
