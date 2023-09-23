import { socials } from "../data/socials";
import { socialIcons } from "../data/social-icons";

interface SocialsProps {
  height: string;
}

const Socials: React.FC<SocialsProps> = ({ height }) => {
  return (
    <ul className="flex items-center space-x-3 text-xl">
      {socials.map(({ platform, url, icon }, index) => {
        return (
          <li key={index}>
            <a href={url} title={platform} target="_blank" rel="noreferrer">
              <div className={`${height} fill-white hover:scale-110 duration-200`}>{socialIcons[icon]}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
