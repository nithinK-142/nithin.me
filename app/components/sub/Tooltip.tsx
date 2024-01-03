import React from "react";

type TooltipProps = {
  text: string;
  content: string;
  tooltip?: "normal" | "reverse";
};

const tooltipStyles = {
  normal: {
    body: "-translate-y-full bottom-0",
    tip: "arrow-head bottom-[-10px]",
  },
  reverse: {
    body: "top-full mt-2",
    tip: "arrow-head-reverse top-[-10px]",
  },
};

const Tooltip = ({ text, content, tooltip = "normal" }: TooltipProps) => {
  return (
    <span className="dark:text-white group relative hover:opacity-90 font-semibold inline-block transition-slow">
      {text}
      <span
        className={`absolute bg-black dark:bg-white whitespace-nowrap text-white dark:text-black font-semibold text-sm rounded-lg p-2 group-hover:inline-block hidden transform-center transition-all duration-300 origin-top ${tooltipStyles[tooltip].body}`}
        aria-label="tooltip"
        role="tooltip"
      >
        <span
          className={`${tooltipStyles[tooltip].tip} transform-center`}
        ></span>
        {content}
      </span>
    </span>
  );
};

export default Tooltip;

// import React from "react";
// import { icons } from "../data/icons";

// type TooltipProps = {
//   text: string;
//   content: string;
// };

// const Tooltip = ({ text, content }: TooltipProps) => {
//   return (
//     <>
//       <span className="text-white group relative hover:opacity-90 font-semibold inline-block">
//         {text}
//         <span className="absolute bg-white whitespace-nowrap text-black font-semibold text-sm rounded-lg p-2 group-hover:inline-block hidden transform-center transition-all duration-300 origin-top -translate-y-full bottom-0">
//           <span className="arrow-head bottom-[-10px] transform-center"></span>
//           {content}
//         </span>
//       </span>

//       <span className="text-white group relative hover:opacity-90 font-semibold inline-block">
//         {text}
//         <span className="absolute bg-white whitespace-nowrap text-black font-semibold text-sm rounded-lg p-2  group-hover:inline-block hidden transform-center transition-all duration-300 origin-top top-full mt-2">
//           <span className="arrow-head-reverse top-[-10px] transform-center"></span>
//           {content}
//         </span>
//       </span>
//     </>
//   );
// };

// export default Tooltip;
