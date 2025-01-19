import { useState, useEffect } from "react";

export const useDebouncedHover = (
  isHovered: boolean,
  delay: number,
): boolean => {
  const [debouncedHover, setDebouncedHover] = useState(isHovered);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedHover(isHovered);
    }, delay);

    return () => clearTimeout(timeout); // Cleanup on unmount or prop change
  }, [isHovered, delay]);

  return debouncedHover;
};

// #0F172A is --primary-dark
export const getColor = (darkMode: boolean, isHovered: boolean): string => {
  if (darkMode) {
    return isHovered ? "#0F172A" : "white";
  } else {
    return isHovered ? "white" : "#0F172A";
  }
};
