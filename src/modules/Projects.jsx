"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import ProjectsCarousel from "@/components/ui/ProjectsCarousel";
import Animated from "@/components/ui/Animated";

import Image from "next/image";
import { ProjectsDatas } from "@/lib/constants";

const tabs = [
  { id: 1, label: "Languages" },
  { id: 2, label: "Libraries" },
  { id: 3, label: "Frameworks" },
  { id: 4, label: "Databases" },
  { id: 5, label: "Miscellaneous" },
];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full my-8  flex justify-center mx-auto p-1 relative">
      <div
        className="md:hidden w-[16rem] flex items-center justify-between cursor-pointer py-2 pl-4 pr-2 border-2 border-primary-dark dark:border-white rounded-[16px] bg-secondary dark:bg-secondary-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-primary-dark dark:text-white">
          {selectedTab.label}
        </span>
        <ChevronDown className="w-5 h-5 text-primary-dark dark:text-white" />
      </div>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute w-[16rem] mt-14 border-2 border-primary-dark dark:border-white rounded-[16px] bg-secondary dark:bg-secondary-dark z-50"
        >
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="p-3 cursor-pointer text-primary-dark dark:text-white"
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
      <ul className="max-md:hidden w-[48rem] grid grid-cols-5 bg-secondary dark:bg-secondary-dark border-2 border-primary-dark dark:border-white py-2 divide-x divide-primary-dark dark:divide-white rounded-[16px]">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className="relative p-1 cursor-pointer text-sm text-center"
            onClick={() => setSelectedTab(tab)}
          >
            {selectedTab.id === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute right-1 left-1 -bottom-1 -top-1 bg-primary dark:bg-primary-dark border-[1px] border-primary-dark dark:border-white rounded-[10px]"
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
  return (
    <section
      id="projects"
      className="min-h-screen pt-12 flex flex-col items-center"
    >
      <Animated
        direction="left"
        className="w-full text-start underline text-4xl xl:text-5xl max-xl:py-2 font-semibold text-primary-dark dark:text-white mb-4 xl:mb-8"
      >
        Stuff I've created
      </Animated>
      <Animated
        direction="bottom"
        className="text-primary-dark text-3xl xl:text-4xl font-semibold dark:text-white mb-[40rem] xs:mb-[46rem]"
      >
        My Projects
      </Animated>
      <ProjectsCarousel datas={ProjectsDatas} />
      <Animated
        direction="bottom"
        className="relative w-full flex flex-col items-center bg-primary dark:bg-primary-dark border-2 border-primary-dark dark:border-white rounded-[36px] px-2 py-6"
      >
        <span className="absolute max-sm:hidden w-3 h-3 rounded-full bg-primary-dark dark:bg-white top-12 left-12" />
        <span className="absolute max-sm:hidden w-3 h-3 rounded-full bg-primary-dark dark:bg-white top-12 right-12" />
        <span className="absolute max-sm:hidden w-3 h-3 rounded-full bg-primary-dark dark:bg-white bottom-12 left-12" />
        <span className="absolute max-sm:hidden w-3 h-3 rounded-full bg-primary-dark dark:bg-white bottom-12 right-12" />
        <div className="text-primary-dark text-3xl xl:text-4xl font-semibold dark:text-white">
          My Tech Stack
        </div>
        <Tabs />
        <div className="w-[16rem] sm:w-[36rem] min-[960px]:w-[44rem] xl:w-[60rem] grid grid-cols-2 sm:grid-cols-4 min-[960px]:grid-cols-5 xl:grid-cols-6 gap-6 xl:gap-10 mb-16">
          <div className="relative flex justify-center group p-4 w-32 h-32 bg-secondary dark:bg-secondary-dark border-2 border-primary-dark dark:border-white rounded-[24px]">
            <h2 className="text-2xl absolute text-primary-dark dark:text-white dark:font-light bottom-4 group-hover:translate-y-3 opacity-0 group-hover:opacity-100 transition-all">
              Hakim
            </h2>
            <div className="w-full h-full absolute z-20 top-0 rounded-[24px] cursor-pointer" />
            <div className="relative w-full h-full group-hover:scale-75 origin-top transition-all">
              <Image
                src="dark/logo.svg"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-32 h-32 relative flex justify-center group p-4">
            <h2 className="text-2xl absolute text-primary-dark dark:text-white dark:font-light bottom-4 group-hover:translate-y-3 opacity-0 group-hover:opacity-100 transition-all">
              Hakim
            </h2>
            <div className="w-full h-full absolute z-20 top-0 rounded-[24px] cursor-pointer" />
            <div className="relative w-full h-full group-hover:scale-75 origin-top transition-all">
              <Image
                src="dark/logo.svg"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative flex justify-center group p-4 w-32 h-32 bg-secondary dark:bg-secondary-dark border-2 border-primary-dark dark:border-white overflow-hidden rounded-[24px]">
            <h2 className="text-2xl h-full w-full absolute flex justify-center items-center text-primary-dark dark:text-white top-0 dark:font-light z-20 opacity-0 group-hover:opacity-100 transition">
              Hakim
            </h2>
            <div className="w-full h-full absolute z-20 top-0 rounded-[24px] cursor-pointer" />
            <div className="w-full h-full absolute group-hover:bg-primary/50 dark:group-hover:bg-primary-dark/50 z-10 top-0 group-hover:backdrop-blur-[4px] transition-all rounded-[24px]" />
            <div className="relative w-full h-full origin-top">
              <Image
                src="dark/logo.svg"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-32 h-32 bg-white"></div>
          <div className="w-32 h-32 bg-white"></div>
          <div className="w-32 h-32 bg-white"></div>
        </div>
      </Animated>
    </section>
  );
};

export default Projects;
