"use client";
import { FramerProviderType } from "@/utils/motion";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IAnimationContext {
  animationEnabled: boolean;
  setAnimationEnabled: (prev: boolean) => void;
  toggleAnimation: () => void;
}

const defaultValues: IAnimationContext = {
  animationEnabled: false,
  setAnimationEnabled: () => {},
  toggleAnimation: () => {},
};

const AnimationContext = createContext<IAnimationContext>(defaultValues);

export const AnimationToggleProvider: React.FC<FramerProviderType> = ({
  children,
}) => {
  const [animationEnabled, setAnimationEnabled] = useState(
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("animationEnabled") || "true")
      : true
  );

  const toggleAnimation = () => {
    const newValue = !animationEnabled;
    setAnimationEnabled(newValue);

    if (typeof window !== "undefined") {
      localStorage.setItem("animationEnabled", JSON.stringify(newValue));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "animationEnabled",
        JSON.stringify(animationEnabled)
      );
    }
  }, [animationEnabled]);

  return (
    <AnimationContext.Provider
      value={{ animationEnabled, setAnimationEnabled, toggleAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationToggle = () => useContext(AnimationContext);
