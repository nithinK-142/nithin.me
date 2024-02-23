"use client";
import { FramerProviderType } from "@/data/tech-stack-types";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const TechStackCardDiv: React.FC<FramerProviderType> = ({
  children,
}) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white/20 dark:bg-black/10 mb-4 transition-slow"
    >
      {children}
    </motion.div>
  );
};
