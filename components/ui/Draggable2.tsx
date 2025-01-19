"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
} from "lucide-react";

type Corner = {
  x: number;
  y: number;
};

type Position = "top" | "bottom" | "left" | "right";

const Draggable = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<Position>("left");
  const [initialPosition, setInitialPosition] = useState<Corner>({
    x: 0,
    y: 0,
  });

  const SQUARE_SIZE: number = 108;
  const MARGIN: number = 48;
  const VELOCITY_THRESHOLD: number = 50;
  const SCREEN_WIDTH_THRESHOLD: number = 768;

  // Animation configuration for consistent timing
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
    const windowWidth = window.innerWidth;
    const isLeft = posX < windowWidth / 2;
    return isLeft ? "left" : "right";
  };

  const getExpandedDimensions = (position: Position) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (windowWidth < SCREEN_WIDTH_THRESHOLD) {
      switch (position) {
        case "left":
          return {
            width: SQUARE_SIZE,
            height: windowHeight - MARGIN * 2,
            x: x.get(),
            y: y.get(),
          };
        case "right":
          return {
            width: SQUARE_SIZE,
            height: windowHeight - MARGIN * 2,
            x: x.get(),
            y: y.get(),
          };
        default:
          return {
            width: SQUARE_SIZE,
            height: windowHeight - MARGIN * 2,
            x: x.get(),
            y: y.get(),
          };
      }
    } else {
      return {
        width: windowWidth - MARGIN * 2,
        height: SQUARE_SIZE,
        x: x.get(),
        y: y.get(),
      };
    }
  };

  const getNearestSide = (currentX: number): Position => {
    const windowWidth: number = window.innerWidth;
    return currentX < windowWidth / 2 ? "left" : "right";
  };

  useEffect(() => {
    const initialX: number = MARGIN;
    const initialY: number = MARGIN;
    x.set(initialX);
    y.set(initialY);
  }, []);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    setIsDragging(false);
    setIsExpanded(false);

    const useVelocity: boolean =
      Math.abs(info.velocity.x) > VELOCITY_THRESHOLD ||
      Math.abs(info.velocity.y) > VELOCITY_THRESHOLD;

    const targetPosition: Position = useVelocity
      ? getCurrentPosition(x.get())
      : getNearestSide(x.get());

    setCurrentPosition(targetPosition);

    let targetX =
      targetPosition === "left"
        ? MARGIN
        : window.innerWidth - SQUARE_SIZE - MARGIN;
    let targetY = y.get();

    if (window.innerWidth < SCREEN_WIDTH_THRESHOLD) {
      targetY = targetY;
      animate(x, targetX, { ...ANIMATION_CONFIG, velocity: info.velocity.x });
      animate(y, targetY, { ...ANIMATION_CONFIG, velocity: info.velocity.y });
    } else {
      animate(x, targetX, { ...ANIMATION_CONFIG, velocity: info.velocity.x });
      animate(y, targetY, { ...ANIMATION_CONFIG, velocity: info.velocity.y });
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();

    const currentX = x.get();
    const currentY = y.get();

    if (!isExpanded) {
      setInitialPosition({ x: currentX, y: currentY });

      const expandedDimensions = getExpandedDimensions(currentPosition);

      if (expandedDimensions) {
        animate(x, expandedDimensions.x, EXPAND_ANIMATION_CONFIG);
        animate(y, expandedDimensions.y, EXPAND_ANIMATION_CONFIG);
      }
    } else {
      animate(x, initialPosition.x, EXPAND_ANIMATION_CONFIG);
      animate(y, initialPosition.y, EXPAND_ANIMATION_CONFIG);
    }

    setIsExpanded(!isExpanded);
  };

  const currentDimensions = isExpanded
    ? getExpandedDimensions(currentPosition) || {
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
      }
    : { width: SQUARE_SIZE, height: SQUARE_SIZE };

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0}
      style={{
        x,
        y,
        position: "fixed",
        borderRadius: 24,
        cursor: isDragging ? "grabbing" : "grab",
        backgroundColor: isDragging ? "rgb(168, 85, 247)" : "rgb(59, 130, 246)",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
      animate={{
        width: currentDimensions.width,
        height: currentDimensions.height,
        scale: isDragging ? 1.05 : 1,
        boxShadow: isDragging
          ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
          : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
      transition={EXPAND_ANIMATION_CONFIG}
      onDragStart={() => {
        setIsDragging(true);
        setIsExpanded(false);
      }}
      onDragEnd={handleDragEnd}
      dragConstraints={{
        top: MARGIN,
        bottom: window.innerHeight - SQUARE_SIZE - MARGIN,
        left: MARGIN,
        right: window.innerWidth - SQUARE_SIZE - MARGIN,
      }}
    >
      <button
        onClick={handleExpand}
        className="absolute flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
        style={{
          top: `calc(0.5 * ${SQUARE_SIZE}px)`,
          left: `calc(0.5 * ${SQUARE_SIZE}px)`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={EXPAND_ANIMATION_CONFIG}
        >
          {currentPosition === "left" ? (
            <ChevronRight className="h-5 w-5 text-white" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-white" />
          )}
        </motion.div>
      </button>
    </motion.div>
  );
};

export default Draggable;
