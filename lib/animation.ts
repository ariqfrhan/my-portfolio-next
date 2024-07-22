import { MotionProps, Variants } from "framer-motion";

export const fadeRight: Variants = {
  visible: { x: "0px", opacity: 1, transition: { duration: 0.5 } },
  hidden: { x: "-10px", opacity: 0, transition: { duration: 0.5 } },
};

export const fadeLeft: Variants = {
  visible: { x: "0px", opacity: 1, transition: { duration: 0.5 } },
  hidden: { x: "-20px", opacity: 0, transition: { duration: 0.5 } },
};

export const fadeUp: Variants = {
  visible: { y: "0px", opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: "30px", opacity: 0, transition: { duration: 0.5 } },
};

export const fadeAnimation: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: false,
    margin: "0px 0px -200px 0px",
  },
};

export const techStackAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
    },
  }),
};

export const getAnimationProps = (
  index: number,
  isMobile: boolean
): MotionProps => ({
  ...fadeAnimation,
  variants: isMobile ? fadeLeft : index % 2 === 0 ? fadeLeft : fadeRight,
});
