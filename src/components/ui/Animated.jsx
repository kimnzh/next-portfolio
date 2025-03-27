"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Animated = ({ children, direction = "right", delay, className }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "10% 0px 0% 0px", // Adjust margins for triggering before/after
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  // Define movement direction
  const getInitialPosition = () => {
    switch (direction) {
      case "down":
        return { opacity: 0, y: 40 };
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      case "up":
      default:
        return { opacity: 0, y: -40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitialPosition()}
      transition={{ duration: 1, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
