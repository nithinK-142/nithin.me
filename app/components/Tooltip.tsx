import React from "react";

type TooltipProps = {
  text: string;
  content: string;
};

const Tooltip = ({ text, content }: TooltipProps) => {
  return (
    <span className="relative group inline-block">
      <span className="text-white hover:opacity-80 font-semibold inline-block">{text}</span>
      <span className="absolute inline-block bg-gray-800 whitespace-nowrap text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-full left-1/2 transition-all duration-300 origin-top top-0">
        {content}
      </span>
    </span>
  );
};

export default Tooltip;
