"use client";

import { useState } from "react";
import Image from "next/image";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

import Logo from "../vectors/Logo";
import Contact from "../vectors/navbar/Contact";
import Profile from "../vectors/navbar/Profile";
import Experience from "../vectors/navbar/Experience";
import Projects from "../vectors/navbar/Projects";
import Life from "../vectors/navbar/Life";
import DraggableMobile from "../ui/Draggable";

const NavbarMobile = ({ darkMode, toggleDarkMode, sections, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <DraggableMobile
      squareSize={72}
      margin={16}
      darkMode={darkMode}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    >
      <div
        className={`${isMenuOpen ? "" : "translate-x-[150%]"} flex flex-col p-[10px] transition duration-500`}
      >
        <div className="relative mb-2 aspect-square w-full overflow-hidden rounded-full bg-primary-dark transition duration-500 dark:bg-white">
          <div
            className="absolute z-20 h-full w-full cursor-pointer rounded-full"
            onClick={toggleDarkMode}
          />
          <Image
            src="moon.svg"
            alt="dark-mode"
            fill
            className={`origin-bottom-right object-cover p-2 transition-all duration-700 ${
              darkMode
                ? "translate-y-0 rotate-0"
                : "translate-y-[100%] rotate-[150deg]"
            }`}
          />
          <Image
            src="sun.svg"
            alt="light-mode"
            fill
            className={`origin-bottom-left object-cover p-2 transition-all duration-700 ${
              darkMode
                ? "translate-y-[100%] -rotate-[150deg]"
                : "translate-y-0 rotate-0"
            }`}
          />
        </div>
        <div
          className="mt-[10px] flex aspect-square w-full items-center justify-center"
          onClick={() => onNavigate("contact")}
        >
          <Contact darkMode={darkMode} className="z-10 p-1" />
        </div>
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="relative mt-[10px] flex aspect-square w-full items-center justify-center rounded-[12px] border-2 border-primary-dark dark:border-white"
            onClick={() => onNavigate(section.label.toLowerCase())}
            onMouseOver={() => section.hoveredState[1](true)}
            onMouseOut={() => section.hoveredState[1](false)}
          >
            <div
              className={`${section.hoveredState[0] ? "bg-primary-dark dark:bg-white" : ""} absolute h-full w-full rounded-[10px] transition duration-300`}
            />
            <section.hook
              darkMode={darkMode}
              isHovered={section.hoveredState[0]}
              className="z-10 p-1"
            />
          </div>
        ))}
      </div>
    </DraggableMobile>
  );
};

const NavbarDesktop = ({ darkMode, toggleDarkMode, sections, onNavigate }) => {
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-0 z-[9999] mx-auto h-[86px] max-w-[1440px] max-sm:hidden xl:h-[108px]"
        )}
      >
        <div className="m-4 flex h-full justify-between rounded-[20px] border-2 border-primary-dark bg-primary/50 p-[10px] backdrop-blur-[8px] dark:border-white dark:bg-primary-dark/50 lg:rounded-[24px] xl:mt-12 xl:p-[16px]">
          <div className="flex h-full items-center">
            <div className="mr-4 aspect-square h-full lg:ml-8">
              <Logo darkMode={darkMode} />
            </div>
            <h1 className="font cursor-pointer text-xl font-bold text-primary-dark dark:text-white lg:text-2xl xl:text-3xl">
              Hakim Nizami
            </h1>
          </div>
          <div className="flex h-full items-center gap-3">
            <div className="relative aspect-square h-full overflow-hidden rounded-full bg-primary-dark transition duration-300 dark:bg-white">
              <div
                className="absolute z-20 h-full w-full cursor-pointer rounded-full"
                onClick={toggleDarkMode}
              />
              <Image
                src="moon.svg"
                alt="dark-mode"
                fill
                className="origin-bottom-right translate-y-[100%] rotate-[150deg] object-cover p-2 transition-all duration-700 dark:translate-y-0 dark:rotate-0 lg:p-3"
              />
              <Image
                src="sun.svg"
                alt="light-mode"
                fill
                className="origin-bottom-left translate-y-0 rotate-0 object-cover p-2 transition-all duration-700 dark:translate-y-[100%] dark:-rotate-[150deg] lg:p-3"
              />
            </div>
            <div
              className="group relative mx-4 cursor-pointer text-xl font-semibold text-primary-dark dark:text-white max-lg:hidden xl:mx-12 xl:text-2xl"
              onClick={() => onNavigate("contact")}
            >
              Contact Me
              <span className="absolute block h-1 w-full origin-center scale-x-0 bg-primary-dark transition duration-300 ease-out group-hover:scale-x-100 dark:bg-white"></span>
            </div>
            <div
              className="group relative -mx-1 flex aspect-square h-full justify-center rounded-[16px] border-primary-dark dark:border-white lg:hidden"
              onClick={() => onNavigate("contact")}
            >
              <Contact darkMode={darkMode} className="z-10 p-2" />
              <div className="absolute top-[150%] -translate-y-12 scale-0 rounded-full bg-primary px-4 py-1 text-center font-semibold text-primary-dark transition duration-300 group-hover:translate-y-0 group-hover:scale-100 peer-hover:translate-y-0 peer-hover:scale-100 dark:bg-primary-dark dark:text-white">
                Contact
              </div>
            </div>
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="relative flex aspect-square h-full justify-center rounded-[16px] border-2 border-primary-dark dark:border-white"
                onClick={() => onNavigate(section.label.toLowerCase())}
              >
                <div
                  className={`${section.hoveredState[0] ? "bg-primary-dark dark:bg-white" : ""} absolute h-full w-full rounded-[14px] transition duration-300`}
                />
                <div
                  className="absolute z-20 h-full w-full cursor-pointer rounded-[14px]"
                  onMouseOver={() => section.hoveredState[1](true)}
                  onMouseOut={() => section.hoveredState[1](false)}
                />
                <section.hook
                  darkMode={darkMode}
                  isHovered={section.hoveredState[0]}
                  className="z-10 p-2"
                />
                <div
                  className={`${section.hoveredState[0] ? "translate-y-0 scale-100" : "-translate-y-12 scale-0"} absolute top-[150%] rounded-full bg-primary px-4 py-1 text-center font-semibold text-primary-dark transition duration-300 peer-hover:translate-y-0 peer-hover:scale-100 dark:bg-primary-dark dark:text-white`}
                >
                  {section.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Navbar = ({ onNavigate }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const sections = [
    {
      hook: Profile,
      label: "Profile",
      hoveredState: useState(false),
    },
    {
      hook: Experience,
      label: "Experience",
      hoveredState: useState(false),
    },
    {
      hook: Projects,
      label: "Projects",
      hoveredState: useState(false),
    },
    {
      hook: Life,
      label: "Life",
      hoveredState: useState(false),
    },
  ];

  return (
    <>
      <NavbarMobile
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        sections={sections}
        onNavigate={onNavigate}
      />
      <NavbarDesktop
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        sections={sections}
        onNavigate={onNavigate}
      />
    </>
  );
};

export default Navbar;
