"use client";
import { FramerProviderType } from "@/data/tech-stack-types";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const FramerProvider: React.FC<FramerProviderType> = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence key={pathname}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
