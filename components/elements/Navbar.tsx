"use client";
import Image from "next/image";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

import { Logo } from "../vectors/Logo";
import { Profile } from "../vectors/navbar/Profile";
import { Experience } from "../vectors/navbar/Experience";
import { Projects } from "../vectors/navbar/Projects";
import { Life } from "../vectors/navbar/Life";
import { useState } from "react";

// [#0F172A] is set as --primary and [#F1F5F9] is set as --primary-light

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const sections = [
    { component: Profile, label: "Profile", isHovered: useState(false) },
    { component: Experience, label: "Experience", isHovered: useState(false) },
    { component: Projects, label: "Projects", isHovered: useState(false) },
    { component: Life, label: "Life", isHovered: useState(false) },
  ];

  return (
    <div className="fixed h-[108px] inset-0 z-[9999] m-12">
      <div className="h-full w-full absolute bg-[#F1F5F9]/70 dark:bg-[#0F172A]/70 backdrop-blur-[8px] rounded-[24px]" />
      <div className="h-full w-full absolute flex justify-between border-2 border-[#0F172A] dark:border-white rounded-[24px] p-[16px]">
        <div className="h-full flex items-center">
          <div className="h-full ml-10 mr-4 aspect-square">
            <Logo darkMode={darkMode} />
          </div>
          <h1 className="text-3xl text-[#0F172A] dark:text-white font-poppins-bold cursor-pointer">
            Hakim Nizami
          </h1>
        </div>
        <div className="flex items-center gap-3 h-full">
          <div
            className={`${darkMode ? "bg-white" : "bg-[#0F172A]"} relative h-full aspect-square rounded-full overflow-hidden transition duration-300`}
          >
            <div
              className="h-full w-full absolute z-20 rounded-full cursor-pointer"
              onClick={toggleDarkMode}
            />
            <Image
              src="moon.svg"
              alt="dark-mode"
              fill
              className={`object-cover p-3 transition-all duration-700 origin-bottom-right
                ${
                  darkMode
                    ? "translate-y-0 rotate-0"
                    : "translate-y-[100%] rotate-[150deg]"
                }`}
            />
            <Image
              src="sun.svg"
              alt="light-mode"
              fill
              className={`object-cover p-3 transition-all duration-700 origin-bottom-left
                ${
                  darkMode
                    ? "translate-y-[100%] -rotate-[150deg]"
                    : "translate-y-0 rotate-0"
                }`}
            />
          </div>
          <div className="relative text-2xl text-[#0F172A] dark:text-white font-poppins-semibold mx-12 group cursor-pointer">
            Contact Me
            <span className="absolute block w-full h-1 bg-[#0F172A] dark:bg-white scale-x-0 group-hover:scale-x-100 origin-center transition duration-300 ease-out"></span>
          </div>
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="relative h-full flex justify-center aspect-square border-2 border-[#0F172A] dark:border-white rounded-[16px]"
            >
              <div
                className={`${section.isHovered[0] ? "bg-[#0F172A] dark:bg-white" : ""} h-full w-full absolute rounded-[14px] transition duration-300`}
              />
              <div
                className="h-full w-full absolute z-20 rounded-[14px] cursor-pointer"
                onMouseOver={() => section.isHovered[1](true)}
                onMouseOut={() => section.isHovered[1](false)}
              />
              <section.component
                darkMode={darkMode}
                isHovered={section.isHovered[0]}
                className="p-2 z-10"
              />
              <div
                className={`${section.isHovered[0] ? "scale-100 translate-y-0" : "scale-0 -translate-y-12"} absolute top-[150%] text-center text-[#0F172A] dark:text-white font-poppins-semibold bg-[#F1F5F9] dark:bg-[#0F172A] rounded-full py-1 px-4 scale-0 -translate-y-12 peer-hover:scale-100 peer-hover:translate-y-0 transition duration-300`}
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
