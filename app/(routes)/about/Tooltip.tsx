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

const Tooltip: React.FC<TooltipProps> = ({
  text,
  content,
  tooltip = "normal",
}) => {
  return (
    <span className="dark:text-white group relative hover:opacity-90 font-semibold inline-block">
      {text}
      <span
        className={`absolute bg-black/80 dark:bg-white whitespace-nowrap text-white dark:text-black font-semibold text-sm rounded-lg p-2 group-hover:inline-block hidden transform-center origin-top ${tooltipStyles[tooltip].body}`}
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
