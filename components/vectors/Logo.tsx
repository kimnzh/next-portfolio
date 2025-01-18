import { FC } from "react";
import { VectorProps } from "../interface";

export const Logo: FC<VectorProps> = ({ darkMode = false }) => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 125 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="57"
        y="5"
        width="10"
        height="115"
        className={darkMode ? "fill-white" : "fill-[#0F172A]"}
      />
      <rect
        x="30"
        y="68"
        width="10"
        height="30"
        transform="rotate(-90 30 68)"
        className={darkMode ? "fill-white" : "fill-[#0F172A]"}
      />
      <rect
        x="57"
        y="12.9237"
        width="10"
        height="105"
        transform="rotate(-17 57 12.9237)"
        className={darkMode ? "fill-white" : "fill-[#0F172A]"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.5 125C97.0178 125 125 97.0178 125 62.5C125 27.9822 97.0178 0 62.5 0C27.9822 0 0 27.9822 0 62.5C0 97.0178 27.9822 125 62.5 125ZM62.5 115C91.4949 115 115 91.4949 115 62.5C115 33.5051 91.4949 10 62.5 10C33.5051 10 10 33.5051 10 62.5C10 91.4949 33.5051 115 62.5 115Z"
        className={darkMode ? "fill-white" : "fill-[#0F172A]"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.0754 17V67H25.0731C24.9561 79.5398 20.4428 91.0288 13 100H20.0754V107.122C29.3265 96.3147 34.9535 82.3131 35.0735 67H35.0754V17H25.0754Z"
        className={darkMode ? "fill-white" : "fill-[#0F172A]"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M97 109.122V59.122H97.0023C97.1193 46.5821 101.633 35.0932 109.075 26.122H102V19C92.7489 29.8072 87.1219 43.8089 87.002 59.122H87V109.122H97Z"
        className={darkMode ? "fill-white" : "fill-[#0F172A]"}
      />
    </svg>
  );
};
