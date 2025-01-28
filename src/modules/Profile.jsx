"use client";
import { useState } from "react";
import Image from "next/image";
import { useDarkMode } from "@/app/providers/DarkModeProvider";

import FlipWords from "@/components/ui/FlipWords";
import Animated from "@/components/ui/Animated";
import Instagram from "@/components/vectors/profile/Instagram";
import LinkedIn from "@/components/vectors/profile/LinkedIn";
import Github from "@/components/vectors/profile/Github";

const words = [
  "CS Student",
  "Software Engineer",
  "Full-Stack Developer",
  "UI/UX Designer",
  "Data Science Enthusiast",
  "Problem Software",
  "Full-Time Learner",
];

const Profile = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const assets = [
    {
      hook: Instagram,
      label: "Instagram",
      hoveredState: useState(false),
      class: "top-10 right-4 sm:top-24 sm:right-0",
      delay: 1.1,
    },
    {
      hook: LinkedIn,
      label: "LinkedIn",
      hoveredState: useState(false),
      class: "bottom-2 right-10 sm:bottom-20 sm:right-6",
      delay: 0.9,
    },
    {
      hook: Github,
      label: "Github",
      hoveredState: useState(false),
      class: "bottom-32 sm:bottom-52 left-4",
      delay: 0.7,
    },
  ];

  return (
    <section
      id="profile"
      className="min-h-screen pt-20 sm:pt-[118px] xl:pt-[204px]"
    >
      <div className="flex max-sm:items-center max-sm:flex-col h-full w-full">
        <Animated
          direction="left"
          className="relative w-full underline mb-4 sm:hidden font-semibold text-4xl lg:text-6xl text-primary-dark dark:text-white"
        >
          Hello, World!
        </Animated>
        <Animated className="rounded-[32px] sm:rounded-[40px] sm:flex-[5] border-2 border-primary-dark bg-primary p-8 sm:p-10 xl:p-12 dark:border-white dark:bg-primary-dark">
          <div className="max-sm:hidden font-semibold text-5xl lg:text-6xl text-primary-dark dark:text-white">
            Who am I?
          </div>
          <div className="sm:mt-6 text-[17px] sm:text-xl lg:text-3xl text-primary-dark dark:text-white">
            Mu·ha·mad <span className="profile-span">Ha·kim</span> Ni·za·mi
          </div>
          <FlipWords
            words={words}
            className={
              "sm:text-lg lg:text-2xl font-semibold my-2 lg:my-4 glowing-text"
            }
          />
          <div className="overflow-auto text-xs sm:text-sm sm:max-lg:max-h-48 lg:text-base !leading-relaxed text-primary-dark dark:text-white">
            {" "}
            An undergraduate student at Universitas Indonesia, currently
            majoring in Computer Science. I began my journey here as a Computer
            Engineering student, but my passion in Software Engineering and
            Analytics drives me to focus on developing my skills in my current
            field. <br />
            <br />I have a keen interest towards mathematics, problem solving,
            and inferential statistics, which motivates me to pursue my career
            in the field of Software Development and Data Science.
            <br />
            <br />
            I've always enjoyed embracing new challenges and seizing
            opportunities to grow, learn, and achieve my goals.
          </div>
          <div className="mt-4 flex max-sm:justify-center">
            <button className="button h-12 w-56 mt-4 rounded-[18px] border-2 text-center font-semibold text-xl">
              Download CV
            </button>
          </div>
        </Animated>
        <Animated
          direction="left"
          className="sm:hidden text-4xl font-semibold text-center mt-12 text-primary-dark dark:text-white"
        >
          Get to know me further!
        </Animated>
        <div className="max-sm:h-96 max-sm:w-96 sm:flex-[4] lg:flex-[3] relative max-sm:my-12">
          <Animated
            direction="bottom"
            delay={0.5}
            className="relative h-full lg:h-[70%] w-full"
          >
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-contain sm:pl-8"
            />
          </Animated>
          <div className="lg:mt-8 flex flex-row-reverse pl-[10%] justify-evenly xl:justify-between">
            {assets.map((asset, idx) => (
              <Animated
                key={idx}
                direction="top"
                className={`${asset.class} max-lg:absolute flex justify-center group rounded-full`}
                delay={asset.delay}
              >
                <div
                  className="h-20 xl:h-24 w-20 xl:w-24 rounded-full hover:scale-125 transition-all border-4 border-primary-dark p-4 bg-primary hover:bg-primary-dark z-20 dark:border-white dark:bg-primary-dark dark:hover:bg-white"
                  onMouseOver={() => asset.hoveredState[1](true)}
                  onMouseOut={() => asset.hoveredState[1](false)}
                >
                  <asset.hook
                    darkMode={darkMode}
                    isHovered={asset.hoveredState[0]}
                  />
                </div>
                <div className="max-lg:hidden absolute font-semibold text-primary-dark text-lg opacity-0 transition group-hover:translate-y-[7.5rem] group-hover:opacity-100 dark:text-white">
                  {asset.label}
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
