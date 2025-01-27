import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animated = ({
  children,
  direction = "right",
  threshold = 0.8,
  delay = 0,
  className,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "bottom" ? -100 : direction === "top" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideVariants}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
