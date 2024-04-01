interface ButtonProps {
  buttonText: string;
  fontWeight?: string;
  animation?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  fontWeight = "bold",
  animation,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`${animation} mt-5 px-4 py-2 sm:mx-auto bg-[#a9879a] dark:bg-[#f05f45] text-white font-${fontWeight} text-md rounded-md`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
