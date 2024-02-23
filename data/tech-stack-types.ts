import { Variants } from "framer-motion";
export interface TechStackItem {
  logo: JSX.Element;
  label: string;
}

export interface TechStackCardProps {
  techArray: TechStackItem[];
  title: string;
}

export interface FramerProviderType {
  children: React.ReactNode;
  varients: Variants;
  initial?: string;
  animate?: string;
  className?: string;
}
