"use client";
import Tooltip from "@/app/(routes)/about/Tooltip";
import { icons } from "@/app/assets/icons";
import { useAnimationToggle } from "@/context/AnimationToggleProvider";

export const AnimationSwitch = () => {
  const { animationEnabled, toggleAnimation } = useAnimationToggle();

  return (
    <div className="hidden md:block absolute top-3 left-4 opacity-80 group">
      <Tooltip
        content={`animation is ${animationEnabled ? "enabled" : "disabled"}`}
        tooltip="animationSwitch"
      >
        <button onClick={toggleAnimation} className="tip">
          {animationEnabled ? icons.play : icons.pause}
        </button>
      </Tooltip>
    </div>
  );
};
