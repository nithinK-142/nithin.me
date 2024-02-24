export interface TechStackItem {
  logo: JSX.Element;
  label: string;
}

export interface TechStackCardProps {
  techArray: TechStackItem[];
  title: string;
}
