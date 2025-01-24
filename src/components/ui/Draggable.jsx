"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const DraggableMobile = ({
  children,
  squareSize,
  margin,
  darkMode,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentPosition, setCurrentPosition] = useState("right");
  const [initialPosition, setInitialPosition] = useState({
    x: 0,
    y: 0,
  });
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Initialize window dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (windowDimensions.width > 0 && !hasAnimatedIn) {
      const offScreenX = windowDimensions.width + squareSize;
      const initialY = margin;

      // Set initial off-screen position
      x.set(offScreenX);
      y.set(initialY);

      // Animate onto screen after 5 seconds
      const timer = setTimeout(() => {
        animate(x, windowDimensions.width - squareSize - margin, {
          type: "spring",
          stiffness: 300,
          damping: 20,
        });
        setHasAnimatedIn(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [windowDimensions.width, squareSize, margin, x, y]);

  const VELOCITY_THRESHOLD = 50;
  const SCREEN_WIDTH_THRESHOLD = 768;

  const ANIMATION_CONFIG = {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 1.5,
    restDelta: 0.001,
  };

  const EXPAND_ANIMATION_CONFIG = {
    type: "spring",
    stiffness: 300,
    damping: 40,
    mass: 2,
    restDelta: 0.001,
  };

  const getCurrentPosition = (posX) => {
    return posX < windowDimensions.width / 2 ? "left" : "right";
  };

  const getExpandedDimensions = (position) => {
    const isMobile = windowDimensions.width < SCREEN_WIDTH_THRESHOLD;

    if (isMobile) {
      return {
        width: squareSize,
        height: 464,
        x:
          position === "left"
            ? margin
            : windowDimensions.width - squareSize - margin,
        y: margin,
      };
    } else {
      return {
        width: windowDimensions.width - margin * 2,
        height: squareSize,
        x: margin,
        y: y.get(),
      };
    }
  };

  const getNearestSide = (currentX) => {
    return currentX < windowDimensions.width / 2 ? "left" : "right";
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    setIsMenuOpen(false);

    const useVelocity =
      Math.abs(info.velocity.x) > VELOCITY_THRESHOLD ||
      Math.abs(info.velocity.y) > VELOCITY_THRESHOLD;

    const targetPosition = useVelocity
      ? getCurrentPosition(x.get())
      : getNearestSide(x.get());

    setCurrentPosition(targetPosition);

    const targetX =
      targetPosition === "left"
        ? margin
        : windowDimensions.width - squareSize - margin;

    animate(x, targetX, { ...ANIMATION_CONFIG, velocity: info.velocity.x });
    animate(y, y.get(), { ...ANIMATION_CONFIG, velocity: info.velocity.y });
  };

  const handleExpand = (e) => {
    e.stopPropagation();

    if (!isMenuOpen) {
      setInitialPosition({ x: x.get(), y: y.get() });
      const expandedDimensions = getExpandedDimensions(currentPosition);
      animate(x, expandedDimensions.x, EXPAND_ANIMATION_CONFIG);
      animate(y, expandedDimensions.y, EXPAND_ANIMATION_CONFIG);
    } else {
      animate(x, initialPosition.x, EXPAND_ANIMATION_CONFIG);
      animate(y, initialPosition.y, EXPAND_ANIMATION_CONFIG);
    }

    setIsMenuOpen(!isMenuOpen);
  };

  const currentDimensions = isMenuOpen
    ? getExpandedDimensions(currentPosition)
    : { width: squareSize, height: squareSize };

  const dragConstraints = {
    top: margin,
    bottom: windowDimensions.height - squareSize - margin,
    left: margin,
    right: windowDimensions.width - squareSize - margin,
  };

  // Don't render until we have window dimensions
  if (windowDimensions.width === 0) return null;

  return (
    <motion.div
      className={`${darkMode ? "border-white bg-primary-dark/50" : "border-primary-dark bg-primary/50"} fixed z-[9999] flex flex-col items-center justify-between overflow-hidden border-2 backdrop-blur-[8px] md:hidden`}
      drag={hasAnimatedIn}
      dragMomentum={true}
      dragElastic={0}
      style={{
        x,
        y,
        borderRadius: 16,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      animate={{
        width: currentDimensions.width,
        height: currentDimensions.height,
        scale: isDragging ? 1.05 : 1,
      }}
      transition={EXPAND_ANIMATION_CONFIG}
      onDragStart={() => {
        setIsDragging(true);
        setIsMenuOpen(false);
      }}
      onDragEnd={handleDragEnd}
      dragConstraints={dragConstraints}
    >
      <button onClick={handleExpand} className="group my-[12px] block">
        <span
          className={`${isMenuOpen ? "translate-y-[12px] rotate-[225deg]" : ""} my-2 block h-[4px] w-[34px] rounded-md bg-primary-dark transition duration-500 ease-in-out dark:bg-white`}
        />
        <span
          className={`${isMenuOpen ? "scale-0" : ""} my-2 block h-[4px] w-[34px] rounded-md bg-primary-dark transition duration-500 ease-in-out dark:bg-white`}
        />
        <span
          className={`${isMenuOpen ? "-translate-y-[12px] -rotate-[225deg]" : ""} my-2 block h-[4px] w-[34px] rounded-md bg-primary-dark transition duration-500 ease-in-out dark:bg-white`}
        />
      </button>
      {children}
    </motion.div>
  );
};

export default DraggableMobile;
