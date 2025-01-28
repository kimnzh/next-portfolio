import { getColor } from "../handlers";

const Demo = ({ darkMode, className = "", isHovered = false }) => {
  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 13.3335L26.6667 20.0002L20 26.6668"
        stroke={getColor(darkMode, isHovered)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33331 5.3335V14.6668C5.33331 16.0813 5.89522 17.4379 6.89541 18.4381C7.8956 19.4383 9.25216 20.0002 10.6666 20.0002H26.6666"
        stroke={getColor(darkMode, isHovered)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Demo;
