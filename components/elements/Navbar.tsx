"use client";
import Image from "next/image";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

import { Logo } from "../vectors/Logo";
import { Contact } from "../vectors/navbar/Contact";
import { Profile } from "../vectors/navbar/Profile";
import { Experience } from "../vectors/navbar/Experience";
import { Projects } from "../vectors/navbar/Projects";
import { Life } from "../vectors/navbar/Life";
import { useState } from "react";

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const sections = [
    { component: Profile, label: "Profile", isHovered: useState(false) },
    { component: Experience, label: "Experience", isHovered: useState(false) },
    { component: Projects, label: "Projects", isHovered: useState(false) },
    { component: Life, label: "Life", isHovered: useState(false) },
  ];

  return (
    <div className="fixed inset-0 z-[9999] m-8 h-[72px] lg:m-12 lg:h-[86px] min-[1218px]:h-[108px]">
      <div className="dark:bg-primary-dark/70 absolute h-full w-full rounded-[20px] bg-primary/70 backdrop-blur-[8px] lg:rounded-[24px]" />
      <div className="border-primary-dark absolute flex h-full w-full justify-between rounded-[20px] border-2 p-[8px] dark:border-white lg:rounded-[24px] lg:p-[12px] min-[1218px]:p-[16px]">
        <div className="flex h-full items-center">
          <div className="ml-8 mr-4 aspect-square h-full min-[1218px]:ml-10">
            <Logo darkMode={darkMode} />
          </div>
          <h1 className="text-primary-dark cursor-pointer font-poppins-bold text-2xl dark:text-white lg:text-3xl">
            Hakim Nizami
          </h1>
        </div>
        <div className="flex h-full items-center gap-3">
          <div
            className={`${darkMode ? "bg-white" : "bg-primary-dark"} relative aspect-square h-full overflow-hidden rounded-full transition duration-300`}
          >
            <div
              className="absolute z-20 h-full w-full cursor-pointer rounded-full"
              onClick={toggleDarkMode}
            />
            <Image
              src="moon.svg"
              alt="dark-mode"
              fill
              className={`origin-bottom-right object-cover p-2 transition-all duration-700 lg:p-3 ${
                darkMode
                  ? "translate-y-0 rotate-0"
                  : "translate-y-[100%] rotate-[150deg]"
              }`}
            />
            <Image
              src="sun.svg"
              alt="light-mode"
              fill
              className={`origin-bottom-left object-cover p-2 transition-all duration-700 lg:p-3 ${
                darkMode
                  ? "translate-y-[100%] -rotate-[150deg]"
                  : "translate-y-0 rotate-0"
              }`}
            />
          </div>
          <div className="text-primary-dark group relative mx-6 hidden cursor-pointer font-poppins-semibold text-2xl dark:text-white lg:block min-[1218px]:mx-12">
            Contact Me
            <span className="bg-primary-dark absolute block h-1 w-full origin-center scale-x-0 transition duration-300 ease-out group-hover:scale-x-100 dark:bg-white"></span>
          </div>
          <div className="border-primary-dark lg:border-2l group relative -mx-1 flex aspect-square h-full justify-center rounded-[16px] dark:border-white lg:hidden">
            <Contact darkMode={darkMode} className="z-10 p-2" />
            <div className="text-primary-dark dark:bg-primary-dark absolute top-[150%] -translate-y-12 scale-0 rounded-full bg-primary px-4 py-1 text-center font-poppins-semibold transition duration-300 group-hover:translate-y-0 group-hover:scale-100 peer-hover:translate-y-0 peer-hover:scale-100 dark:text-white">
              Contact
            </div>
          </div>
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="border-primary-dark relative flex aspect-square h-full justify-center rounded-[16px] border-[1px] dark:border-white lg:border-2"
            >
              <div
                className={`${section.isHovered[0] ? "bg-primary-dark dark:bg-white" : ""} absolute h-full w-full rounded-[14px] transition duration-300`}
              />
              <div
                className="absolute z-20 h-full w-full cursor-pointer rounded-[14px]"
                onMouseOver={() => section.isHovered[1](true)}
                onMouseOut={() => section.isHovered[1](false)}
              />
              <section.component
                darkMode={darkMode}
                isHovered={section.isHovered[0]}
                className="z-10 p-2"
              />
              <div
                className={`${section.isHovered[0] ? "translate-y-0 scale-100" : "-translate-y-12 scale-0"} text-primary-dark dark:bg-primary-dark absolute top-[150%] rounded-full bg-primary px-4 py-1 text-center font-poppins-semibold transition duration-300 peer-hover:translate-y-0 peer-hover:scale-100 dark:text-white`}
              >
                {section.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
