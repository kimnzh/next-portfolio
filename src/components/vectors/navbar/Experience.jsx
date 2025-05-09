import { getColor, useDebouncedHover } from "@/components/handlers";

const Experience = ({ darkMode, className = "", isHovered = false }) => {
  const debouncedHover = useDebouncedHover(isHovered, 100);

  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15C6.34315 15 5 16.3431 5 18V38C5 39.6569 6.34315 41 8 41H40C41.6569 41 43 39.6569 43 38V18C43 16.3431 41.6569 15 40 15H8ZM3 18C3 15.2386 5.23858 13 8 13H40C42.7614 13 45 15.2386 45 18V38C45 40.7614 42.7614 43 40 43H8C5.23858 43 3 40.7614 3 38V18Z"
        fill={getColor(darkMode, isHovered)}
        stroke={getColor(darkMode, isHovered)}
        strokeWidth={debouncedHover ? "3" : "0"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4645 6.46447C17.4021 5.52678 18.6739 5 20 5H28C29.3261 5 30.5979 5.52678 31.5355 6.46447C32.4732 7.40215 33 8.67392 33 10V42C33 42.5523 32.5523 43 32 43C31.4477 43 31 42.5523 31 42V10C31 9.20435 30.6839 8.44129 30.1213 7.87868C29.5587 7.31607 28.7956 7 28 7H20C19.2044 7 18.4413 7.31607 17.8787 7.87868C17.3161 8.44129 17 9.20435 17 10V42C17 42.5523 16.5523 43 16 43C15.4477 43 15 42.5523 15 42V10C15 8.67392 15.5268 7.40215 16.4645 6.46447Z"
        fill={getColor(darkMode, isHovered)}
        stroke={getColor(darkMode, isHovered)}
        strokeWidth={debouncedHover ? "3" : "0"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Experience;
