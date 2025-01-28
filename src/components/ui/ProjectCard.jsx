import Image from "next/image";

import { useDarkMode } from "@/app/providers/DarkModeProvider";

import Github from "../vectors/profile/Github";
import Demo from "../vectors/Demo";
import { useState } from "react";

const ProjectCard = ({ data, offset }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isDemoHovered, setIsDemoHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  return (
    <>
      <div
        className={`${offset === 0 ? "hidden" : "bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-[3px]"} absolute -inset-4 z-50`}
      />
      <div className="w-full relative aspect-video rounded-[12px] border-2 overflow-hidden border-primary-dark dark:border-white">
        <div className="absolute grid grid-cols-2 gap-2 right-2 bottom-2 z-10">
          <div
            className="w-12 h-12 cursor-pointer p-2  bg-white dark:bg-primary-dark dark:hover:bg-white hover:bg-primary-dark rounded-[12px] border-2 border-primary-dark dark:border-white"
            onMouseOver={() => setIsGithubHovered(true)}
            onMouseOut={() => setIsGithubHovered(false)}
          >
            <Github darkMode={darkMode} isHovered={isGithubHovered} />
          </div>
          <div
            className="w-12 h-12 cursor-pointer p-2 bg-white dark:bg-primary-dark dark:hover:bg-white hover:bg-primary-dark rounded-[12px] border-2 border-primary-dark dark:border-white"
            onMouseOver={() => setIsDemoHovered(true)}
            onMouseOut={() => setIsDemoHovered(false)}
          >
            <Demo darkMode={darkMode} isHovered={isDemoHovered} />
          </div>
        </div>
        <Image src={data.image} alt="image" className="object-cover" fill />
      </div>
      <div className="mt-2 p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl xs:text-3xl font-semibold text-primary-dark dark:text-white">
            {data.title}
          </h1>
          <h2 className="bg-primary-dark dark:bg-white text-primary dark:text-primary-dark text-xs xs:text-sm px-3 py-1 rounded-full font-semibold">
            {data.category}
          </h2>
        </div>
        <div className="h-6 flex gap-2 my-3">
          {data.stacks.map((stack, idx) => (
            <div
              key={idx}
              className="h-full aspect-square relative cursor-pointer"
            >
              <Image
                src={`/stacks/${stack.replace(/\s/g, "").toLowerCase()}.svg`}
                alt={stack}
                fill
              />
            </div>
          ))}
        </div>
        <p className="text-primary-dark max-xs:text-sm dark:text-white leading-normal font-light">
          {data.desc}
        </p>
      </div>
      <div className="text-end font-semibold max-xs:text-sm text-primary-dark dark:text-white">
        {data.date}
      </div>
    </>
  );
};

export default ProjectCard;
