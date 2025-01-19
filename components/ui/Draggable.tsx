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
    type: "spring",
    stiffness: 400,
    damping: 30,
    duration: 0.3,
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
            : y.get() - (windowHeight - MARGIN * 2) + SQUARE_SIZE, // Move up while expanding
        };
      case "bottomRight":
        return {
          width: windowWidth - MARGIN * 2,
          height: SQUARE_SIZE,
          x: isExpanded
            ? x.get()
            : x.get() - (windowWidth - MARGIN * 2) + SQUARE_SIZE, // Move left while expanding
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
      type: "spring",
      stiffness: 400,
      damping: 30,
      velocity: info.velocity.x,
    });

    animate(y, targetCorner.y, {
      type: "spring",
      stiffness: 400,
      damping: 30,
      velocity: info.velocity.y,
    });
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);

    if (!isExpanded) {
      // Store the current position before expanding
      setInitialPosition({ x: x.get(), y: y.get() });

      const expandedDimensions = getExpandedDimensions(currentCorner);

      // Expanding - animate both position and size with the same timing
      animate(x, expandedDimensions.x, ANIMATION_CONFIG);
      animate(y, expandedDimensions.y, ANIMATION_CONFIG);
    } else {
      // Collapsing - return to the stored initial position
      animate(x, initialPosition.x, ANIMATION_CONFIG);
      animate(y, initialPosition.y, ANIMATION_CONFIG);
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0}
      style={{
        x,
        y,
        position: "fixed",
        borderRadius: 8,
        cursor: isDragging ? "grabbing" : "grab",
        backgroundColor: isDragging ? "rgb(168, 85, 247)" : "rgb(59, 130, 246)",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
      animate={{
        ...dimensions,
        scale: isDragging ? 1.05 : 1,
        boxShadow: isDragging
          ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
          : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        transition: ANIMATION_CONFIG,
      }}
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
          transition={ANIMATION_CONFIG}
        >
          {getChevronIcon()}
        </motion.div>
      </button>
    </motion.div>
  );
};

export default Draggable;
