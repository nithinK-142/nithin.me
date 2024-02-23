"use client";
import { FramerProviderType } from "@/data/tech-stack-types";
import { motion } from "framer-motion";

export const AnimationProvider: React.FC<FramerProviderType> = (props) => {
  const { varients, initial, animate, className, children } = props;
  return (
    <motion.div
      variants={varients}
      initial={initial}
      animate={animate}
      className={className}
    >
      {children}
    </motion.div>
  );
};
