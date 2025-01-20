import { FC } from "react";
import { getColor } from "../../handlers";
import { VectorProps } from "../../interface";

export const Instagram: FC<VectorProps> = ({
  darkMode,
  className = "",
  isHovered = false,
}) => {
  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.25 4.5H15.75C9.5368 4.5 4.5 9.5368 4.5 15.75V38.25C4.5 44.4632 9.5368 49.5 15.75 49.5H38.25C44.4632 49.5 49.5 44.4632 49.5 38.25V15.75C49.5 9.5368 44.4632 4.5 38.25 4.5Z"
        stroke={getColor(darkMode, isHovered)}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 25.5825C36.2776 27.4551 35.9578 29.3675 35.0859 31.0478C34.214 32.7281 32.8345 34.0907 31.1436 34.9418C29.4527 35.7929 27.5365 36.0891 25.6675 35.7884C23.7985 35.4876 22.0719 34.6052 20.7333 33.2666C19.3948 31.928 18.5123 30.2015 18.2116 28.3325C17.9109 26.4635 18.2071 24.5473 19.0582 22.8563C19.9093 21.1654 21.2719 19.7859 22.9522 18.9141C24.6325 18.0422 26.5449 17.7223 28.4175 18C30.3275 18.2832 32.0959 19.1733 33.4613 20.5387C34.8267 21.9041 35.7167 23.6724 36 25.5825Z"
        stroke={getColor(darkMode, isHovered)}
        strokeWidth="4"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.375 14.625H39.3973"
        stroke={getColor(darkMode, isHovered)}
        strokeWidth="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
