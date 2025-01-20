import { FC } from "react";
import { VectorProps } from "../../interface";
import { getColor, useDebouncedHover } from "@/components/handlers";

export const Life: FC<VectorProps> = ({
  darkMode,
  className = "",
  isHovered = false,
}) => {
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
        d="M37.2929 23.2929C37.6834 22.9024 38.3166 22.9024 38.7071 23.2929L44.7071 29.2929C45.0976 29.6834 45.0976 30.3166 44.7071 30.7071L30.7071 44.7071C30.3166 45.0976 29.6834 45.0976 29.2929 44.7071L23.2929 38.7071C22.9024 38.3166 22.9024 37.6834 23.2929 37.2929L37.2929 23.2929ZM25.4142 38L30 42.5858L42.5858 30L38 25.4142L25.4142 38Z"
        fill={getColor(darkMode, isHovered)}
        stroke={getColor(darkMode, isHovered)}
        strokeWidth={debouncedHover ? "3" : "0"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.29291 3.29289C3.53925 3.04656 3.89602 2.94617 4.23466 3.02792L33.2347 10.0279C33.6132 10.1193 33.9042 10.4221 33.9806 10.8039L36.9806 25.8039C37.0462 26.1317 36.9436 26.4707 36.7071 26.7071L26.7071 36.7071C26.4707 36.9435 26.1318 37.0462 25.8039 36.9806L10.8039 33.9806C10.4221 33.9042 10.1193 33.6132 10.0279 33.2346L3.02794 4.23464C2.9462 3.896 3.04658 3.53922 3.29291 3.29289ZM5.35606 5.35604L11.8223 32.1446L25.6713 34.9145L34.9145 25.6713L32.1447 11.8223L5.35606 5.35604Z"
        fill={getColor(darkMode, isHovered)}
        stroke={getColor(darkMode, isHovered)}
        strokeWidth={debouncedHover ? "3" : "0"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L19.8791 18.4649C20.2696 18.8554 20.2696 19.4886 19.8791 19.8791C19.4886 20.2696 18.8554 20.2696 18.4649 19.8791L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z"
        fill={getColor(darkMode, isHovered)}
        stroke={getColor(darkMode, isHovered)}
        strokeWidth={debouncedHover ? "3" : "0"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 19C20.3431 19 19 20.3431 19 22C19 23.6569 20.3431 25 22 25C23.6569 25 25 23.6569 25 22C25 20.3431 23.6569 19 22 19ZM17 22C17 19.2386 19.2386 17 22 17C24.7614 17 27 19.2386 27 22C27 24.7614 24.7614 27 22 27C19.2386 27 17 24.7614 17 22Z"
        fill={getColor(darkMode, isHovered)}
        stroke={getColor(darkMode, isHovered)}
        strokeWidth={debouncedHover ? "3" : "0"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
