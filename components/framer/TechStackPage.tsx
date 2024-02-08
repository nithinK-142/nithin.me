"use client";
import { FramerProviderType } from "@/data/tech-stack-types";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const TechStackPageDiv: React.FC<FramerProviderType> = ({
  children,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"
    >
      {children}
    </motion.div>
  );
};
