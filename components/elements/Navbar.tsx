"use client";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import LogoLight from "@/public/light/logo.svg";
import { useState } from "react";
import { NavbarProps } from "../interface";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

// [#0F172A] is set as --primary and [#F1F5F9] is set as --primary-light

const sections = [
  { label: "Profile" },
  { label: "Experience" },
  { label: "Projects" },
  { label: "Life" },
].map((section) => ({
  src: `navbar/${section.label.toLowerCase()}.svg`,
  hoverSrc: `navbar/${section.label.toLowerCase()}-hover.svg`,
  label: section.label,
}));

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`${darkMode && "dark"} fixed h-[108px] inset-0 z-[9999] m-12`}
    >
      <div className="h-full w-full absolute bg-[#F1F5F9]/70 dark:bg-[#0F172A]/70 backdrop-blur-[8px] rounded-[24px]" />
      <div className="h-full w-full absolute flex justify-between border-2 border-[#0F172A] dark:border-white rounded-[24px] p-[16px]">
        <div className="h-full flex items-center">
          <div className="relative h-full ml-10 mr-4 aspect-square">
            <Image src={Logo} alt="logo" fill />
          </div>
          <h1 className="text-3xl text-[#0F172A] dark:text-white font-poppins-bold cursor-pointer">
            Hakim Nizami
          </h1>
        </div>
        <div className="flex items-center gap-3 h-full">
          <div
            className={`${darkMode ? "bg-white" : "bg-[#0F172A]"} relative h-full aspect-square rounded-full overflow-hidden cursor-pointer transition duration-700`}
            onClick={toggleDarkMode}
          >
            <Image
              src="navbar/moon.svg"
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
              src="navbar/sun.svg"
              alt="dark-mode"
              fill
              className={`object-cover p-3 transition-all duration-700 origin-bottom-left
                ${
                  !darkMode
                    ? "translate-y-0 rotate-0"
                    : "translate-y-[100%] -rotate-[150deg]"
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
              className="relative h-full flex justify-center aspect-square border-2 border-[#0F172A] dark:border-white rounded-[16px] hover:bg-[#0F172A] dark:hover:bg-white transition cursor-pointer"
            >
              <div className="h-full w-full absolute peer z-10" />
              <Image
                src={section.src}
                alt={section.label.toLowerCase()}
                fill
                className="object-cover p-2 peer-hover:hidden"
              />
              <Image
                src={section.hoverSrc}
                alt={section.label.toLowerCase()}
                fill
                className="object-cover p-2 hidden peer-hover:block"
              />
              <div className="absolute top-[150%] text-center text-[#0F172A] dark:text-white font-poppins-semibold bg-[#F1F5F9] dark:bg-[#0F172A] rounded-full py-1 px-4 scale-0 -translate-y-12 peer-hover:scale-100 peer-hover:translate-y-0 transition">
                {section.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
