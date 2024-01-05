type HeadingType = {
  heading: string;
};
const Header = ({ heading }: HeadingType) => {
  return <h1 className="md:hidden text-2xl font-semibold text-center pb-2">{heading}</h1>;
};

export default Header;
