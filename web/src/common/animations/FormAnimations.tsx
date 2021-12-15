import { Variants } from 'framer-motion';

export const PARENTS_VARIANTS: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

export const CHILDREN_VARIANTS: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
