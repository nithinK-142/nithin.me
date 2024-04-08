export interface TechStackItem {
  logo: JSX.Element | string;
  label: string;
}

export interface TechStackCardProps {
  techArray: TechStackItem[];
  title: string;
}
