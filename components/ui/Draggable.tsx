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

type CornerWithDistance = Corner & {
  distance: number;
};

type CornerPosition = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

const Draggable = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentCorner, setCurrentCorner] = useState<CornerPosition>("topLeft");
  const [initialPosition, setInitialPosition] = useState<Corner>({
    x: 0,
    y: 0,
  });

  const SQUARE_SIZE: number = 108;
  const MARGIN: number = 48;
  const VELOCITY_THRESHOLD: number = 50;

  // Animation configuration for consistent timing
  const ANIMATION_CONFIG = {
    type: "spring" as const,
    stiffness: 400, // Reduced from 400
    damping: 30, // Reduced from 30
    mass: 1.5, // Added mass to make it feel heavier
    restDelta: 0.001, // Makes the animation more precise
  };

  const EXPAND_ANIMATION_CONFIG = {
    type: "spring" as const,
    stiffness: 300, // Even lower stiffness for expansion
    damping: 40,
    mass: 2, // Higher mass for expansion
    restDelta: 0.001,
  };

  const determineCornerPosition = (
    posX: number,
    posY: number,
  ): CornerPosition => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const isLeft = posX < windowWidth / 2;
    const isTop = posY < windowHeight / 2;

    if (isTop && isLeft) return "topLeft";
    if (isTop && !isLeft) return "topRight";
    if (!isTop && isLeft) return "bottomLeft";
    return "bottomRight";
  };

  const getExpandedDimensions = (corner: CornerPosition) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    switch (corner) {
      case "topLeft":
        return {
          width: windowWidth - MARGIN * 2,
          height: SQUARE_SIZE,
          x: x.get(),
          y: y.get(),
        };
      case "topRight":
        return {
          width: SQUARE_SIZE,
          height: windowHeight - MARGIN * 2,
          x: x.get(),
          y: y.get(),
        };
      case "bottomLeft":
        return {
          width: SQUARE_SIZE,
          height: windowHeight - MARGIN * 2,
          x: x.get(),
          y: isExpanded
            ? y.get()
            : y.get() - (windowHeight - MARGIN * 2) + SQUARE_SIZE,
        };
      case "bottomRight":
        return {
          width: windowWidth - MARGIN * 2,
          height: SQUARE_SIZE,
          x: isExpanded
            ? x.get()
            : x.get() - (windowWidth - MARGIN * 2) + SQUARE_SIZE,
          y: y.get(),
        };
    }
  };

  const getChevronIcon = () => {
    switch (currentCorner) {
      case "topLeft":
        return <ChevronRight className="h-5 w-5 text-white" />;
      case "topRight":
        return <ChevronDown className="h-5 w-5 text-white" />;
      case "bottomLeft":
        return <ChevronUp className="h-5 w-5 text-white" />;
      case "bottomRight":
        return <ChevronLeft className="h-5 w-5 text-white" />;
    }
  };

  const getNearestCorner = (currentX: number, currentY: number): Corner => {
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;

    const corners: CornerWithDistance[] = [
      {
        x: MARGIN,
        y: MARGIN,
        distance: Math.hypot(currentX - MARGIN, currentY - MARGIN),
      },
      {
        x: MARGIN,
        y: windowHeight - SQUARE_SIZE - MARGIN,
        distance: Math.hypot(
          currentX - MARGIN,
          currentY - (windowHeight - SQUARE_SIZE - MARGIN),
        ),
      },
      {
        x: windowWidth - SQUARE_SIZE - MARGIN,
        y: MARGIN,
        distance: Math.hypot(
          currentX - (windowWidth - SQUARE_SIZE - MARGIN),
          currentY - MARGIN,
        ),
      },
      {
        x: windowWidth - SQUARE_SIZE - MARGIN,
        y: windowHeight - SQUARE_SIZE - MARGIN,
        distance: Math.hypot(
          currentX - (windowWidth - SQUARE_SIZE - MARGIN),
          currentY - (windowHeight - SQUARE_SIZE - MARGIN),
        ),
      },
    ];

    return corners.reduce((nearest, current) =>
      current.distance < nearest.distance ? current : nearest,
    );
  };

  const getDirectionalCorner = (
    velocityX: number,
    velocityY: number,
  ): Corner => {
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;

    return {
      x: velocityX >= 0 ? windowWidth - SQUARE_SIZE - MARGIN : MARGIN,
      y: velocityY >= 0 ? windowHeight - SQUARE_SIZE - MARGIN : MARGIN,
    };
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

    const targetCorner: Corner = useVelocity
      ? getDirectionalCorner(info.velocity.x, info.velocity.y)
      : getNearestCorner(x.get(), y.get());

    setCurrentCorner(determineCornerPosition(targetCorner.x, targetCorner.y));

    animate(x, targetCorner.x, {
      ...ANIMATION_CONFIG,
      velocity: info.velocity.x,
    });

    animate(y, targetCorner.y, {
      ...ANIMATION_CONFIG,
      velocity: info.velocity.y,
    });
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();

    const currentX = x.get();
    const currentY = y.get();

    if (!isExpanded) {
      setInitialPosition({ x: currentX, y: currentY });

      const expandedDimensions = getExpandedDimensions(currentCorner);

      // Using slower animation config for expansion
      animate(x, expandedDimensions.x, EXPAND_ANIMATION_CONFIG);
      animate(y, expandedDimensions.y, EXPAND_ANIMATION_CONFIG);
    } else {
      // Using slower animation config for collapse
      animate(x, initialPosition.x, EXPAND_ANIMATION_CONFIG);
      animate(y, initialPosition.y, EXPAND_ANIMATION_CONFIG);
    }

    setIsExpanded(!isExpanded);
  };

  // Calculate current dimensions based on expansion state
  const currentDimensions = isExpanded
    ? getExpandedDimensions(currentCorner)
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
      transition={EXPAND_ANIMATION_CONFIG} // Using slower animation for size changes
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
          transition={EXPAND_ANIMATION_CONFIG} // Using slower animation for rotation
        >
          {getChevronIcon()}
        </motion.div>
      </button>
    </motion.div>
  );
};

export default Draggable;
