"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import ProjectsCarousel from "@/components/ui/ProjectsCarousel";
import Animated from "@/components/ui/Animated";

import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import { StacksData } from "@/lib/constants";

const tabs = [
  { id: 1, label: "Languages" },
  { id: 2, label: "Libraries" },
  { id: 3, label: "Frameworks" },
  { id: 4, label: "Databases" },
  { id: 5, label: "Miscellaneous" },
];

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mx-auto my-8 flex w-full justify-center p-1">
      <div
        className="flex w-[16rem] cursor-pointer items-center justify-between rounded-[16px] border-2 border-primary-dark bg-secondary py-2 pl-4 pr-2 dark:border-white dark:bg-secondary-dark md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-primary-dark dark:text-white">
          {selectedTab.label}
        </span>
        <ChevronDown className="h-5 w-5 text-primary-dark dark:text-white" />
      </div>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute z-50 mt-14 w-[16rem] rounded-[16px] border-2 border-primary-dark bg-secondary dark:border-white dark:bg-secondary-dark md:hidden"
        >
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="cursor-pointer p-3 text-primary-dark dark:text-white"
              onClick={() => {
                setSelectedTab(tab);
                setIsOpen(false);
              }}
            >
              {tab.label}
            </li>
          ))}
        </motion.ul>
      )}
      <ul className="grid w-[48rem] grid-cols-5 divide-x divide-primary-dark rounded-[16px] border-2 border-primary-dark bg-secondary py-2 dark:divide-white dark:border-white dark:bg-secondary-dark max-md:hidden">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className="relative cursor-pointer p-1 text-center text-sm"
            onClick={() => setSelectedTab(tab)}
          >
            {selectedTab.id === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute -bottom-1 -top-1 left-1 right-1 rounded-[10px] border-[1px] border-primary-dark bg-primary dark:border-white dark:bg-primary-dark"
              />
            )}
            <span className="relative z-10 text-primary-dark dark:text-white">
              {tab.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col items-center pt-12"
    >
      <Animated
        direction="left"
        className="mb-4 w-full text-start text-4xl font-semibold text-primary-dark underline dark:text-white max-xl:py-2 xl:mb-8 xl:text-5xl"
      >
        Stuff I've created
      </Animated>
      <Animated
        direction="right"
        className="mb-72 text-3xl font-semibold text-primary-dark dark:text-white xs:mb-[calc(30vw+10rem)] xl:text-4xl"
      >
        Selected Works
      </Animated>
      <ProjectsCarousel slides={PROJECTS} />
      <Animated
        direction="bottom"
        className="relative flex w-full flex-col items-center rounded-[36px] border-2 border-primary-dark bg-primary px-2 py-6 dark:border-white dark:bg-primary-dark"
      >
        <span className="absolute left-12 top-12 h-3 w-3 rounded-full bg-primary-dark dark:bg-white max-sm:hidden" />
        <span className="absolute right-12 top-12 h-3 w-3 rounded-full bg-primary-dark dark:bg-white max-sm:hidden" />
        <span className="absolute bottom-12 left-12 h-3 w-3 rounded-full bg-primary-dark dark:bg-white max-sm:hidden" />
        <span className="absolute bottom-12 right-12 h-3 w-3 rounded-full bg-primary-dark dark:bg-white max-sm:hidden" />
        <div className="text-3xl font-semibold text-primary-dark dark:text-white xl:text-4xl">
          My Tech Stack
        </div>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="mb-16 grid w-[16rem] grid-cols-2 gap-6 sm:w-[36rem] sm:grid-cols-4 min-[960px]:w-[44rem] min-[960px]:grid-cols-5 xl:w-[60rem] xl:grid-cols-6 xl:gap-10">
          {StacksData.map((stack, idx) => (
            <div
              key={idx}
              className={`${selectedTab.id === stack.type || "hidden"} group relative flex h-32 w-32 justify-center overflow-hidden rounded-[24px] border-2 border-primary-dark bg-secondary p-4 dark:border-white dark:bg-secondary-dark`}
            >
              <h2 className="absolute top-0 z-20 flex h-full w-full items-center justify-center text-center text-xl text-primary-dark opacity-0 transition group-hover:opacity-100 dark:font-light dark:text-white">
                {stack.name}
              </h2>
              <div className="absolute top-0 z-20 h-full w-full cursor-pointer rounded-[24px]" />
              <div className="absolute top-0 z-10 h-full w-full rounded-[24px] transition-all group-hover:bg-primary/50 group-hover:backdrop-blur-[4px] dark:group-hover:bg-primary-dark/50" />
              <div className="relative h-full w-full origin-top">
                <Image
                  src={`/stacks/${stack.name.replace(/\s/g, "").toLowerCase()}.svg`}
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </Animated>
    </section>
  );
};

export default Projects;
