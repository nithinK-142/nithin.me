"use client";
import Tooltip from "@/components/Tooltip";
import { icons } from "@/app/assets/icons";
import { useAnimationToggle } from "@/context/AnimationToggleProvider";
import { useEffect, useState } from "react";
import Image from "next/image";

export const AnimationSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { animationEnabled, toggleAnimation } = useAnimationToggle();

  useEffect(() => setMounted(true), []);

  return (
    <div className="hidden md:block absolute top-3 left-4 group">
      {!mounted ? (
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={20}
          height={20}
          sizes="20x20"
          alt="Loading Animation Toggle"
          priority={false}
          title="Loading Animation Toggle"
        />
      ) : (
        <Tooltip
          content={`Animations are ${
            animationEnabled ? "Enabled" : "Disabled"
          }`}
          tooltip="animationSwitch"
        >
          <button onClick={toggleAnimation} className="opacity-80">
            {animationEnabled ? icons.play : icons.pause}
          </button>
        </Tooltip>
      )}
    </div>
  );
};
