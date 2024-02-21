import { frontend,backend } from "@/app/assets/tech-stack";

const FrameworkGuide = ({
  href,
  title,
  framework,
}: {
  href: string;
  title: string;
  framework: string;
}) => {
  const frontendLogo = frontend.find((item) => item.label === framework);
  const backendLogo = backend.find((item) => item.label === framework);
  
  const frameworkLogo = frontendLogo || backendLogo;
    return (
    <li className="flex items-center gap-2">
      <span className="h-4 dark:fill-white">{frameworkLogo?.logo}</span>
      <a href={href} target="_blank" rel="noreferrer">
        <p className="opacity-70 hover:opacity-100">{title}</p>
      </a>
    </li>
  );
};

export default FrameworkGuide;
