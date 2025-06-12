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
      <div className="relative h-full w-full overflow-hidden rounded-[18px] border-2 border-primary-dark dark:border-white sm:rounded-[18px]">
        <div className="peer absolute top-0 z-10 flex h-full w-full items-end justify-between gap-2 bg-primary-dark/50 p-2 opacity-0 transition hover:opacity-100 lg:gap-12 lg:p-4 xl:gap-24">
          <div className="flex flex-col xl:p-2">
            <h1 className="mb-1 font-semibold leading-tight text-white sm:mb-2 md:text-2xl lg:text-3xl">
              {data.title}
            </h1>
            <h2 className="w-fit rounded-full bg-white px-1.5 py-0.5 text-[8px] font-semibold text-primary-dark md:px-3 md:py-1 md:text-xs">
              {data.category}
            </h2>
            <div className="my-2 flex h-4 gap-1 sm:my-3 md:h-6 md:gap-2 lg:gap-4 xl:h-10">
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

            <p className="scrollbar max-h-10 overflow-auto font-light leading-normal text-white max-xl:text-sm max-lg:text-xs max-sm:text-[8px] max-sm:leading-tight sm:max-h-16 lg:max-h-24 xl:max-h-36">
              {data.desc}
            </p>
          </div>
          <div className="flex gap-1 sm:gap-2 lg:gap-4">
            <div
              className="h-10 w-10 cursor-pointer rounded-[12px] border-2 border-primary-dark bg-white p-2 hover:bg-primary-dark dark:border-white dark:bg-primary-dark dark:hover:bg-white sm:h-12 sm:w-12 lg:h-16 lg:w-16"
              onMouseOver={() => setIsGithubHovered(true)}
              onMouseOut={() => setIsGithubHovered(false)}
            >
              <Github darkMode={darkMode} isHovered={isGithubHovered} />
            </div>
            <div
              className="h-10 w-10 cursor-pointer rounded-[12px] border-2 border-primary-dark bg-white p-2 hover:bg-primary-dark dark:border-white dark:bg-primary-dark dark:hover:bg-white sm:h-12 sm:w-12 lg:h-16 lg:w-16"
              onMouseOver={() => setIsDemoHovered(true)}
              onMouseOut={() => setIsDemoHovered(false)}
            >
              <Demo darkMode={darkMode} isHovered={isDemoHovered} />
            </div>
          </div>
        </div>
        <Image
          src={data.image}
          alt="image"
          className="ppe object-cover transition peer-hover:blur-sm"
          fill
        />
      </div>
      {/* <div className="mt-2 p-2">
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
        <p className="scrollbar h-[180px] overflow-auto font-light leading-normal text-primary-dark dark:text-white max-xs:text-sm xs:h-[144px]">
          {data.desc}
        </p>
      </div>
      <div className="text-end font-semibold text-primary-dark dark:text-white max-xs:text-sm">
        {data.date}
      </div> */}
    </>
  );
};

export default ProjectCard;
