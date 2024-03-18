"use client";
import { FramerProviderType } from "@/utils/motion";
import { motion } from "framer-motion";

export const AnimationProvider: React.FC<FramerProviderType> = (props) => {
  const { variants, initial, animate, className, children } = props;
  let modifiedVariants;
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768;
    modifiedVariants = isMobile ? {} : variants ?? {};
  }
  return (
    <motion.div
      variants={modifiedVariants}
      initial={initial}
      animate={animate}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
};
