"use client";
import { FramerProviderType } from "@/utils/motion";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const FramerProvider: React.FC<FramerProviderType> = ({ children }) => {
  const pathname = usePathname();
  return <AnimatePresence key={pathname}>{children}</AnimatePresence>;
};
