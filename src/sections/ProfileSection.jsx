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
  "Problem Solver",
  "Full-Time Learner",
];

const ProfileSection = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const assets = [
    {
      hook: Instagram,
      link: "https://www.instagram.com/kim_nzh/",
      label: "Instagram",
      hoveredState: useState(false),
      class: "top-10 right-4 sm:top-24 sm:right-0",
      delay: 1.1,
    },
    {
      hook: LinkedIn,
      link: "https://www.linkedin.com/in/muhamad-hakim-nizami-a79120293/",
      label: "LinkedIn",
      hoveredState: useState(false),
      class: "bottom-2 right-10 sm:bottom-20 sm:right-6",
      delay: 0.8,
    },
    {
      hook: Github,
      link: "https://github.com/kimnzh",
      label: "Github",
      hoveredState: useState(false),
      class: "bottom-32 sm:bottom-52 left-4",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="profile"
      className="pb-6 pt-16 sm:pt-[118px] md:pb-12 xl:pt-[204px]"
    >
      <div className="flex h-full w-full max-sm:flex-col max-sm:items-center">
        <Animated
          direction="left"
          className="relative mb-4 w-full text-4xl font-semibold text-primary-dark underline dark:text-white sm:hidden lg:text-6xl"
        >
          Hello, World!
        </Animated>
        <Animated className="rounded-[32px] border-2 border-primary-dark bg-primary p-8 dark:border-white dark:bg-primary-dark sm:flex-[5] sm:rounded-[40px] sm:p-10 xl:p-12">
          <div className="text-5xl font-semibold text-primary-dark dark:text-white max-sm:hidden lg:text-6xl">
            Who am I?
          </div>
          <div className="text-[17px] text-primary-dark dark:text-white sm:mt-6 sm:text-xl lg:text-3xl">
            Mu·ha·mad <span className="profile-span">Ha·kim</span> Ni·za·mi
          </div>
          <FlipWords
            words={words}
            className={
              "glowing-text my-2 font-semibold sm:text-lg lg:my-4 lg:text-2xl"
            }
          />
          <div className="scrollbar overflow-auto text-xs !leading-relaxed text-primary-dark dark:text-white sm:text-sm sm:max-lg:max-h-48 lg:text-base">
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
            <a
              href="https://drive.google.com/file/d/1CPxOFepB-64lqfbgced1zb7AK0PNUlLg/view?usp=sharing"
              target="_blank"
              className="mt-4 h-fit rounded-[18px]"
            >
              <button className="button h-12 w-56 rounded-[18px] border-2 text-center text-xl font-semibold">
                Download CV
              </button>
            </a>
          </div>
        </Animated>
        <Animated
          direction="left"
          className="mt-12 text-center text-4xl font-semibold text-primary-dark dark:text-white sm:hidden"
        >
          Get to know me further!
        </Animated>
        <div className="relative max-sm:my-12 max-sm:h-96 max-sm:w-96 sm:flex-[4] lg:flex-[3]">
          <Animated
            direction="bottom"
            className="relative h-full w-full lg:h-[70%]"
          >
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-contain sm:pl-8"
            />
          </Animated>
          <div className="flex flex-row-reverse justify-evenly pl-[10%] lg:mt-8 xl:justify-between">
            {assets.map((asset, idx) => (
              <Animated
                key={idx}
                direction="top"
                className={`${asset.class} group flex justify-center rounded-full max-lg:absolute`}
                delay={asset.delay}
              >
                <a
                  target="_blank"
                  href={asset.link}
                  className="z-20 h-20 w-20 cursor-pointer rounded-full border-4 border-primary-dark bg-primary p-4 transition-all hover:scale-125 hover:bg-primary-dark dark:border-white dark:bg-primary-dark dark:hover:bg-white xl:h-24 xl:w-24"
                  onMouseOver={() => asset.hoveredState[1](true)}
                  onMouseOut={() => asset.hoveredState[1](false)}
                >
                  <asset.hook
                    darkMode={darkMode}
                    isHovered={asset.hoveredState[0]}
                  />
                </a>
                <div className="absolute text-lg font-semibold text-primary-dark opacity-0 transition group-hover:translate-y-[7.5rem] group-hover:opacity-100 dark:text-white max-lg:hidden">
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

export default ProfileSection;
