"use client";
import { motion } from "framer-motion";
import { FramerProviderType } from "@/utils/motion";
import { useAnimationToggle } from "./AnimationToggleProvider";
import { usePathname } from "next/navigation";

export const AnimationProvider: React.FC<FramerProviderType> = (props) => {
  const { variants, initial, animate, className, children } = props;

  const { animationEnabled } = useAnimationToggle();
  const isRoot = usePathname() === "/";

  let modifiedVariants;
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768;
    modifiedVariants = isMobile ? {} : variants;
  }
  return animationEnabled ? (
    <motion.div
      variants={modifiedVariants}
      initial={initial}
      animate={animate}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  ) : (
    <div className={className}>{children}</div>
  );
};
