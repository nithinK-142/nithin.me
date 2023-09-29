// import React from "react";

interface ButtonProps {
  buttonText: string;
  fontWeight?: string;
  animation?: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, fontWeight = "bold", animation }) => {
  return (
    <button
      className={`${animation} hover:shadow-[0_20px_50px_rgba(240,_95,_69,_0.7)] mt-5 px-4 py-2 sm:mx-auto bg-[#f05f45] text-white font-${fontWeight} text-md rounded-md`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
