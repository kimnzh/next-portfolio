import { getColor } from "../../handlers";

const LinkedIn = ({ darkMode, className = "", isHovered = false }) => {
  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 18C39.5804 18 43.0142 19.4223 45.5459 21.9541C48.0777 24.4858 49.5 27.9196 49.5 31.5V47.25H40.5V31.5C40.5 30.3065 40.0259 29.1619 39.182 28.318C38.3381 27.4741 37.1935 27 36 27C34.8065 27 33.6619 27.4741 32.818 28.318C31.9741 29.1619 31.5 30.3065 31.5 31.5V47.25H22.5V31.5C22.5 27.9196 23.9223 24.4858 26.4541 21.9541C28.9858 19.4223 32.4196 18 36 18Z"
        stroke={getColor(darkMode, isHovered)}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 20.25H4.5V47.25H13.5V20.25Z"
        stroke={getColor(darkMode, isHovered)}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5 6.51472 11.4853 4.5 9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5Z"
        stroke={getColor(darkMode, isHovered)}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkedIn;
