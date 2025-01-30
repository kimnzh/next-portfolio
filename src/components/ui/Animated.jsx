import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animated = ({
  children,
  direction = "right",
  delay = 0,
  distance = 50,
  className,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px -10% 0px",
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
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
