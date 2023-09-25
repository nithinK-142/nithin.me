// import React from "react";

interface ButtonProps {
  buttonText: string;
  fontWeight?: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, fontWeight = "bold" }) => {
  return (
    <button
      className={`ml-1 mt-5 px-4 py-2 sm:mx-auto bg-[#f05f45] text-white font-${fontWeight} text-md rounded-md`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
