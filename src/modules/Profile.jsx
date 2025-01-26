"use client";
import { useState } from "react";
import Image from "next/image";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import MotionWrapper from "@/components/elements/MotionWrapper";

import Instagram from "@/components/vectors/profile/Instagram";
import LinkedIn from "@/components/vectors/profile/LinkedIn";
import Github from "@/components/vectors/profile/Github";
import { easeIn, easeOut } from "framer-motion";

const Profile = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const assets = [
    {
      hook: Instagram,
      label: "Instagram",
      hoveredState: useState(false),
      class: "top-10 right-4 sm:top-24 sm:right-0",
      transition: { duration: 0.2, delay: 1.4, easeOut },
    },
    {
      hook: LinkedIn,
      label: "LinkedIn",
      hoveredState: useState(false),
      class: "bottom-2 right-10 sm:bottom-20 sm:right-6",
      transition: { duration: 0.2, delay: 1.1, easeOut },
    },
    {
      hook: Github,
      label: "Github",
      hoveredState: useState(false),
      class: "bottom-32 sm:bottom-52 left-4",
      transition: { duration: 0.2, delay: 0.8, easeOut },
    },
  ];

  return (
    <section className="min-h-screen pt-20 sm:pt-[118px] xl:pt-[204px]">
      <div className="flex max-sm:items-center max-sm:flex-col h-full w-full">
        <div className="relative w-full underline mb-4 sm:hidden font-semibold text-4xl lg:text-6xl text-primary-dark dark:text-white">
          Hello, There!
        </div>
        <div className="rounded-[32px] sm:rounded-[40px] sm:flex-[5] border-2 border-primary-dark bg-primary p-8 sm:p-10 xl:p-12 dark:border-white dark:bg-primary-dark">
          <div className="max-sm:hidden font-semibold text-5xl lg:text-6xl text-primary-dark dark:text-white">
            Who Am I?
          </div>
          <div className="mb-6 sm:my-6">
            <div className="glowing-text text-[17px] sm:text-xl lg:text-3xl text-primary-dark dark:text-white">
              Mu·ha·mad <span className="profile-span">Ha·kim</span> Ni·za·mi
            </div>
            <div className="text-sm sm:text-lg lg:text-2xl text-primary-dark dark:text-white">
              [ ha-
              <span className="profile-span">kim</span>,{" "}
              <span className="profile-span">kim</span>,{" "}
              <span className="profile-span">kimz</span>,{" "}
              <span className="profile-span">nizam</span> ]
            </div>
          </div>
          <div className="overflow-auto text-sm sm:text-lg sm:max-lg:max-h-48 lg:text-2xl !leading-relaxed text-primary-dark dark:text-white">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium perspiciatis accusantium officiis! Esse voluptatum
            dignissimos aliquid voluptatibus omnis blanditiis dolorem commodi,
            perferendis rerum culpa debitis quo officiis reprehenderit aliquam
            facere corporis tempore molestias voluptates! Soluta quisquam
            officiis non molestias incidunt inventore corporis sit nostrum sed
          </div>
          <div className="mt-4 flex max-sm:justify-center">
            <button className="button h-12 w-56 mt-4 rounded-[18px] border-2 text-center font-semibold text-xl">
              Download CV
            </button>
          </div>
        </div>
        <div className="sm:hidden text-4xl font-semibold text-center mt-12 text-primary-dark dark:text-white">
          Get to know me further!
        </div>
        <div className="max-sm:h-96 max-sm:w-96 sm:flex-[4] lg:flex-[3] relative max-sm:my-12">
          <div className="relative h-full lg:h-[70%] w-full">
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-contain sm:pl-8"
            />
          </div>
          <div className="lg:mt-8 flex flex-row-reverse pl-[10%] justify-evenly xl:justify-between">
            {assets.map((asset, idx) => (
              <div
                key={idx}
                className={`${asset.class} max-lg:absolute flex justify-center group hover:scale-125 rounded-full  transition-all`}
              >
                <div
                  className="h-20 xl:h-24 w-20 xl:w-24 rounded-full border-4 border-primary-dark p-4 bg-primary hover:bg-primary-dark z-20 dark:border-white dark:bg-primary-dark dark:hover:bg-white"
                  onMouseOver={() => asset.hoveredState[1](true)}
                  onMouseOut={() => asset.hoveredState[1](false)}
                >
                  <asset.hook
                    darkMode={darkMode}
                    isHovered={asset.hoveredState[0]}
                  />
                </div>
                <div className="max-lg:hidden absolute font-semibold text-primary-dark opacity-0 transition group-hover:translate-y-[6.5rem] group-hover:opacity-100 dark:text-white">
                  {asset.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
