type TooltipProps = {
  text?: string;
  content?: string;
  tooltip?: "normal" | "reverse" | "animationSwitch";
  children?: React.ReactNode;
};

const tooltipStyles = {
  normal: {
    body: "-translate-y-full bottom-0 transform-center",
    tip: "arrow-head bottom-[-10px]  transform-center",
  },
  reverse: {
    body: "top-full mt-2 transform-center",
    tip: "arrow-head-reverse top-[-10px] transform-center",
  },
  animationSwitch: {
    body: "-left-[8px] top-10",
    tip: "arrow-head-reverse top-[-10px] left-2.5",
  },
};

const Tooltip: React.FC<TooltipProps> = ({
  text,
  content,
  tooltip = "normal",
  children,
}) => {
  return (
    <span className="dark:text-white group relative hover:opacity-90 font-semibold inline-block">
      {children ? children : text}
      <span
        className={`absolute bg-black/80 dark:bg-white whitespace-nowrap text-white dark:text-black font-semibold text-sm rounded-lg p-2 group-hover:inline-block hidden origin-top ${tooltipStyles[tooltip].body}`}
        aria-label="tooltip"
        role="tooltip"
      >
        <span className={`${tooltipStyles[tooltip].tip}`}></span>
        {content}
      </span>
    </span>
  );
};

export default Tooltip;
