import { Variants } from "framer-motion";

export interface FramerProviderType {
  children?: React.ReactNode;
  variants?: Variants;
  initial?: string;
  animate?: string;
  className?: string;
}

export function fadeInOut(duration: number = 0) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: duration,
      },
    },
  };
}

export const fadeInUp = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export function slideInFromTop(delay: number = 0.5) {
  return {
    hidden: { y: -220, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromBottom(delay: number = 0.5) {
  return {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 1,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}
