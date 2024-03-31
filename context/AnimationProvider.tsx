"use client";
import { motion } from "framer-motion";
import { FramerProviderType } from "@/utils/motion";
import { useAnimationToggle } from "./AnimationToggleProvider";
import { usePathname } from "next/navigation";
import { heroOuter } from "@/utils/constants";
import { useEffect } from "react";

export const AnimationProvider: React.FC<FramerProviderType> = (props) => {
  const { variants, initial, animate, className, children } = props;

  const { animationEnabled, setAnimationEnabled } = useAnimationToggle();

  // styles for root page when animation is disabled
  const isRoot = usePathname() === "/";
  const isHeroOuter = isRoot && className === heroOuter;

  // disable animations for smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setAnimationEnabled(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setAnimationEnabled]);

  return animationEnabled ? (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  ) : (
    <div className={`${isHeroOuter ? heroOuter + "opacity-100" : className}`}>
      {children}
    </div>
  );
};
