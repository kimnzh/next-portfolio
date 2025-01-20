"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

import DraggableMobile from "../ui/DraggableMobile";

import { Logo } from "../vectors/Logo";
import { Contact } from "../vectors/navbar/Contact";
import { Profile } from "../vectors/navbar/Profile";
import { Experience } from "../vectors/navbar/Experience";
import { Projects } from "../vectors/navbar/Projects";
import { Life } from "../vectors/navbar/Life";

const NavbarMobile = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(0);

  const sections = [
    { component: Profile, label: "Profile", isHovered: useState(false) },
    { component: Experience, label: "Experience", isHovered: useState(false) },
    { component: Projects, label: "Projects", isHovered: useState(false) },
    { component: Life, label: "Life", isHovered: useState(false) },
  ];

  useEffect(() => {
    const updateHeight = () => {
      // Use ResizeObserver instead of window event for better performance
      const headerHeight = 128;
      setCurrentHeight(window.innerHeight - headerHeight);
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(document.documentElement);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <DraggableMobile
      squareSize={72}
      margin={32}
      darkMode={darkMode}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    >
      <div
        className={`${isMenuOpen ? "delay-[400ms]" : "translate-x-[150%]"} absolute mt-[72px] flex flex-col items-center justify-between gap-3 p-[12px] transition duration-500 ease-out`}
        style={{
          height: currentHeight,
        }}
      >
        <div
          className={`${isMenuOpen ? "delay-[400ms]" : ""} transition duration-500 ease-out`}
        >
          <Logo darkMode={darkMode} />
        </div>
        <div className="">
          <div
            className={`${darkMode ? "bg-white" : "bg-primary-dark"} relative mb-3 aspect-square w-full overflow-hidden rounded-full transition duration-500`}
          >
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
          <div className="group relative -mx-1 mb-3 flex aspect-square w-full items-center justify-center rounded-[16px] border-primary-dark dark:border-white">
            <Contact darkMode={darkMode} className="z-10 p-2" />
          </div>
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="relative mb-3 flex aspect-square w-full items-center justify-center rounded-[16px] border-2 border-primary-dark dark:border-white"
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
            </div>
          ))}
        </div>
      </div>
    </DraggableMobile>
  );
};

const NavbarDesktop = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

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

  const sections = [
    { component: Profile, label: "Profile", isHovered: useState(false) },
    { component: Experience, label: "Experience", isHovered: useState(false) },
    { component: Projects, label: "Projects", isHovered: useState(false) },
    { component: Life, label: "Life", isHovered: useState(false) },
  ];

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
          "fixed inset-0 z-[9999] m-8 hidden h-[72px] min-[652px]:block lg:m-12 lg:h-[86px] min-[1218px]:h-[108px]",
        )}
      >
        <div className="absolute h-full w-full rounded-[20px] bg-primary/70 backdrop-blur-[8px] dark:bg-primary-dark/70 lg:rounded-[24px]" />
        <div className="absolute flex h-full w-full justify-between rounded-[20px] border-2 border-primary-dark p-[8px] dark:border-white lg:rounded-[24px] lg:p-[12px] min-[1218px]:p-[16px]">
          <div className="flex h-full items-center">
            <div className="ml-8 mr-4 aspect-square h-full min-[1218px]:ml-10">
              <Logo darkMode={darkMode} />
            </div>
            <h1 className="cursor-pointer font-poppins-bold text-2xl text-primary-dark dark:text-white max-md:hidden lg:text-3xl">
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
            <div className="group relative mx-6 hidden cursor-pointer font-poppins-semibold text-2xl text-primary-dark dark:text-white lg:block min-[1218px]:mx-12">
              Contact Me
              <span className="absolute block h-1 w-full origin-center scale-x-0 bg-primary-dark transition duration-300 ease-out group-hover:scale-x-100 dark:bg-white"></span>
            </div>
            <div className="lg:border-2l group relative -mx-1 flex aspect-square h-full justify-center rounded-[16px] border-primary-dark dark:border-white lg:hidden">
              <Contact darkMode={darkMode} className="z-10 p-2" />
              <div className="absolute top-[150%] -translate-y-12 scale-0 rounded-full bg-primary px-4 py-1 text-center font-poppins-semibold text-primary-dark transition duration-300 group-hover:translate-y-0 group-hover:scale-100 peer-hover:translate-y-0 peer-hover:scale-100 dark:bg-primary-dark dark:text-white">
                Contact
              </div>
            </div>
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="relative flex aspect-square h-full justify-center rounded-[16px] border-2 border-primary-dark dark:border-white"
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
                  className={`${section.isHovered[0] ? "translate-y-0 scale-100" : "-translate-y-12 scale-0"} absolute top-[150%] rounded-full bg-primary px-4 py-1 text-center font-poppins-semibold text-primary-dark transition duration-300 peer-hover:translate-y-0 peer-hover:scale-100 dark:bg-primary-dark dark:text-white`}
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

const Navbar = () => {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
};

export default Navbar;
