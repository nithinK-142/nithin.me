import { socials } from "@/data/socials";
import { socialIcons } from "@/app/assets/social-icons";

const Socials = ({ height }: { height: string }) => {
  return (
    <ul className="flex items-center space-x-3 text-xl transition-color">
      {socials.map(({ platform, url, icon }, index) => {
        return (
          <li key={index}>
            <a href={url} title={platform} target="_blank" rel="noreferrer">
              <div
                className={`${height} fill-black dark:fill-white hover:scale-110 duration-150 group`}
              >
                {socialIcons[icon]}
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
