"use client";
import { FramerProviderType } from "@/utils/motion";
import React, { createContext, useContext, useState } from "react";

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
  const [animationEnabled, setAnimationEnabled] = useState(true);

  const toggleAnimation = () => setAnimationEnabled((prev) => !prev);

  return (
    <AnimationContext.Provider
      value={{ animationEnabled, setAnimationEnabled, toggleAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationToggle = () => useContext(AnimationContext);
