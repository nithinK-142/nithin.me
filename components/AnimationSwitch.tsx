"use client";
import Tooltip from "@/components/Tooltip";
import { icons } from "@/app/assets/icons";
import { useAnimationToggle } from "@/context/AnimationToggleProvider";

export const AnimationSwitch = () => {
  const { animationEnabled, toggleAnimation } = useAnimationToggle();

  return (
    <div className="hidden md:block absolute top-3 left-4 group">
      <Tooltip
        content={`Animations are ${animationEnabled ? "enabled" : "disabled"}`}
        tooltip="animationSwitch"
      >
        <button onClick={toggleAnimation} className="opacity-80">
          {animationEnabled ? icons.play : icons.pause}
        </button>
      </Tooltip>
    </div>
  );
};
