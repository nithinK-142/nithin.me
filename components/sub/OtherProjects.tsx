import { icons } from "@/app/assets/icons";

const OtherProjects = ({ href, title }: { href: string; title: string }) => {
  return (
    <li className="flex items-center gap-2">
      <span className="h-4 dark:fill-white">{icons.git}</span>
      <a href={href} target="_blank" rel="noreferrer">
        <p className="opacity-70 hover:opacity-100">{title}</p>
      </a>
    </li>
  );
};

export default OtherProjects;
