import { MotionProps } from "framer-motion";
const animation: MotionProps = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    slideStart: {},
    slideEnd: {},
  },
  initial: ["hidden", "slideStart"],
  whileInView: ["visible", "slideEnd"],
  exit: ["hidden", "slideStart"],
  viewport: {
    amount: 0.2,
    once: false,
  },
  transition: { type: "spring", duration: 1, bounce: 0 },
};

export default animation;
