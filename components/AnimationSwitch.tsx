"use client";
import { icons } from "@/app/assets/icons";
import { useAnimationToggle } from "@/context/AnimationToggleProvider";

export const AnimationSwitch = () => {
  const { animationEnabled, toggleAnimation } = useAnimationToggle();

  return (
    <div className="hidden md:block absolute top-3 left-4 opacity-80">
      <button
        onClick={toggleAnimation}
        title={`animation is ${animationEnabled ? "enabled" : "disabled"}`}
      >
        {animationEnabled ? icons.play : icons.pause}
      </button>
    </div>
  );
};
