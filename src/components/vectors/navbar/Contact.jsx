import { getColor } from "../../handlers";

const Contact = ({ darkMode, className = "" }) => {
  return (
    <svg
      className={`h-full w-full ${className}`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.3333 2.66667L14.6666 17.3333"
        stroke={getColor(darkMode, false)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.3333 2.66667L20 29.3333L14.6666 17.3333L2.66663 12L29.3333 2.66667Z"
        stroke={getColor(darkMode, false)}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Contact;
