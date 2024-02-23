import { frontend, backend } from "@/app/assets/tech-stack";
import { AnimationProvider } from "@/providers/AnimationProvider";

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

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
    <AnimationProvider varients={variants} className="flex items-center gap-2">
      <span className="h-4 dark:fill-white">{frameworkLogo?.logo}</span>
      <a href={href} target="_blank" rel="noreferrer">
        <p className="opacity-70 hover:opacity-100">{title}</p>
      </a>
    </AnimationProvider>
  );
};

export default FrameworkGuide;
