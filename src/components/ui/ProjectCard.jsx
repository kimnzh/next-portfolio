import Image from "next/image";

import { useDarkMode } from "@/app/providers/DarkModeProvider";

import Github from "../vectors/profile/Github";
import Demo from "../vectors/Demo";
import { useState } from "react";

const ProjectCard = ({ data }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isDemoHovered, setIsDemoHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden rounded-[12px] border-2 border-primary-dark dark:border-white">
        <div className="absolute bottom-2 right-2 z-10 grid grid-cols-2 gap-2">
          <div
            className="h-12 w-12 cursor-pointer rounded-[12px] border-2 border-primary-dark bg-white p-2 hover:bg-primary-dark dark:border-white dark:bg-primary-dark dark:hover:bg-white"
            onMouseOver={() => setIsGithubHovered(true)}
            onMouseOut={() => setIsGithubHovered(false)}
          >
            <Github darkMode={darkMode} isHovered={isGithubHovered} />
          </div>
          <div
            className="h-12 w-12 cursor-pointer rounded-[12px] border-2 border-primary-dark bg-white p-2 hover:bg-primary-dark dark:border-white dark:bg-primary-dark dark:hover:bg-white"
            onMouseOver={() => setIsDemoHovered(true)}
            onMouseOut={() => setIsDemoHovered(false)}
          >
            <Demo darkMode={darkMode} isHovered={isDemoHovered} />
          </div>
        </div>
        <Image src={data.image} alt="image" className="object-cover" fill />
      </div>
      <div className="mt-2 p-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-primary-dark dark:text-white xs:text-3xl">
            {data.title}
          </h1>
          <h2 className="rounded-full bg-primary-dark px-3 py-1 text-xs font-semibold text-primary dark:bg-white dark:text-primary-dark xs:text-sm">
            {data.category}
          </h2>
        </div>
        <div className="my-3 flex h-6 gap-2">
          {data.stacks.map((stack, idx) => (
            <div
              key={idx}
              className="relative aspect-square h-full cursor-pointer"
            >
              <Image
                src={`/stacks/${stack.replace(/\s/g, "").toLowerCase()}.svg`}
                alt={stack}
                fill
              />
            </div>
          ))}
        </div>
        <p className="font-light leading-normal text-primary-dark dark:text-white max-xs:text-sm">
          {data.desc}
        </p>
      </div>
      <div className="text-end font-semibold text-primary-dark dark:text-white max-xs:text-sm">
        {data.date}
      </div>
    </>
  );
};

export default ProjectCard;
