"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";

type Corner = {
  x: number;
  y: number;
};

type Position = "top" | "bottom" | "left" | "right";

type WindowDimensions = {
  width: number;
  height: number;
};

const DraggableMobile = ({
  children,
  squareSize,
  margin,
  darkMode,
  isMenuOpen,
  setIsMenuOpen,
}: {
  children?: React.ReactNode;
  squareSize: number;
  margin: number;
  darkMode: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (arg0: boolean) => void;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<Position>("left");
  const [initialPosition, setInitialPosition] = useState<Corner>({
    x: 0,
    y: 0,
  });
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

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

  const VELOCITY_THRESHOLD: number = 50;
  const SCREEN_WIDTH_THRESHOLD: number = 768;

  const ANIMATION_CONFIG = {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 1.5,
    restDelta: 0.001,
  };

  const EXPAND_ANIMATION_CONFIG = {
    type: "spring" as const,
    stiffness: 300,
    damping: 40,
    mass: 2,
    restDelta: 0.001,
  };

  const getCurrentPosition = (posX: number): Position => {
    return posX < windowDimensions.width / 2 ? "left" : "right";
  };

  const getExpandedDimensions = (position: Position) => {
    const isMobile = windowDimensions.width < SCREEN_WIDTH_THRESHOLD;

    if (isMobile) {
      return {
        width: squareSize,
        height: windowDimensions.height - margin * 2,
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

  const getNearestSide = (currentX: number): Position => {
    return currentX < windowDimensions.width / 2 ? "left" : "right";
  };

  useEffect(() => {
    const initialX: number = margin;
    const initialY: number = margin;
    x.set(initialX);
    y.set(initialY);
  }, []);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    setIsDragging(false);
    setIsMenuOpen(false);

    const useVelocity: boolean =
      Math.abs(info.velocity.x) > VELOCITY_THRESHOLD ||
      Math.abs(info.velocity.y) > VELOCITY_THRESHOLD;

    const targetPosition: Position = useVelocity
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

  const handleExpand = (e: React.MouseEvent) => {
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
      className={`${darkMode ? "border-white bg-primary-dark/50" : "border-primary-dark bg-primary/50"} fixed z-[9999] flex justify-center overflow-hidden border-2 backdrop-blur-[8px] min-[652px]:hidden`}
      drag
      dragMomentum={true}
      dragElastic={0}
      style={{
        x,
        y,
        borderRadius: 20,
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
      <button
        onClick={handleExpand}
        className={`absolute ${
          isMenuOpen ? "hamburger-active" : ""
        } group my-[12px] block`}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      {children}
    </motion.div>
  );
};

export default DraggableMobile;
