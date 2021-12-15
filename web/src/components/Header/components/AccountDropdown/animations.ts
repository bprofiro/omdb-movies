import { Variants } from 'framer-motion';

export const DROP_DOWN_ANIMATION: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', mass: 1.3 },
  },
  hidden: {
    y: -20,
    opacity: 0,
    transition: { type: 'spring', mass: 1.3 },
  },
};
