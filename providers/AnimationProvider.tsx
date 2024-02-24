"use client";
import { FramerProviderType } from "@/util/motion";
import { motion } from "framer-motion";

export const AnimationProvider: React.FC<FramerProviderType> = (props) => {
  const { varients, initial, animate, className, children } = props;
  let modifiedVariants;
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768;
    modifiedVariants = isMobile ? {} : varients;
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
