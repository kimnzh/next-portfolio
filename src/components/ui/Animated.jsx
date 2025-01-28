import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animated = ({
  children,
  direction = "right",
  threshold = 0.3,
  delay = 0,
  distance = 50, // New prop for controlling animation distance
  className,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  const getDirectionalOffset = () => {
    switch (direction) {
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "top":
        return { x: 0, y: distance };
      case "bottom":
        return { x: 0, y: -distance };
      default:
        return { x: 0, y: 0 };
    }
  };

  const { x, y } = getDirectionalOffset();

  const slideVariants = {
    hidden: {
      opacity: 0,
      x,
      y,
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
        damping: 25,
        stiffness: 200,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
