import { FC } from "react";
import { getColor } from "../../handlers";
import { VectorProps } from "../../interface";

export const Github: FC<VectorProps> = ({
  darkMode,
  className = "",
  isHovered = false,
}) => {
  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox="0 0 49 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1538 44.0089C6.61538 47.5045 6.61538 38.183 2 37.0178M34.3077 51V41.9815C34.3943 40.8703 34.2456 39.7532 33.8716 38.7045C33.4976 37.6558 32.9068 36.6996 32.1385 35.8993C39.3846 35.0836 47 32.3105 47 19.5867C46.9994 16.3332 45.7601 13.2044 43.5385 10.8479C44.5904 8.00138 44.5161 4.85502 43.3308 2.06244C43.3308 2.06244 40.6077 1.24681 34.3077 5.51137C29.0185 4.0638 23.4431 4.0638 18.1538 5.51137C11.8538 1.24681 9.13077 2.06244 9.13077 2.06244C7.94548 4.85502 7.8711 8.00138 8.92308 10.8479C6.68491 13.2218 5.44428 16.3789 5.46154 19.6567C5.46154 32.2872 13.0769 35.0603 20.3231 35.9692C19.5638 36.7614 18.9783 37.7062 18.6046 38.7421C18.2308 39.778 18.0772 40.8817 18.1538 41.9815V51"
        stroke={getColor(darkMode, isHovered)}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
