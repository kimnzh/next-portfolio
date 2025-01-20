"use client";
import Image from "next/image";
import { Instagram } from "@/components/vectors/profile/Instagram";
import { LinkedIn } from "@/components/vectors/profile/LinkedIn";
import { Github } from "@/components/vectors/profile/Github";
import { useDarkMode } from "@/app/providers/DarkModeProvider";
import { useState } from "react";

export const ProfileModule = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const assets = [
    { hook: Github, label: "Github", hoveredState: useState(false) },
    { hook: LinkedIn, label: "Linked In", hoveredState: useState(false) },
    { hook: Instagram, label: "Instagram", hoveredState: useState(false) },
  ];

  return (
    <section
      id="#profile"
      className="sl:pt-[136px] sl:pl-20 sl:pb-24 min-h-screen px-6 sm:px-12 lg:pt-[182px] 2xl:px-24 2xl:pt-[204px]"
    >
      <div className="sl:hidden my-8 text-center font-poppins-semibold text-5xl text-primary-dark dark:text-white">
        Who Am I?
      </div>
      <div className="sl:hidden relative mb-8 h-72 w-full">
        <Image
          src="/profile.png"
          alt="Profile"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex h-full w-full">
        <div className="ml:py-8 ml:px-12 ml:rounded-[32px] flex-[3] rounded-[24px] border-2 border-primary-dark bg-primary px-8 py-4 dark:border-white dark:bg-primary-dark 2xl:px-16 2xl:py-12">
          <div className="max-sl:hidden ml:text-4xl ml:mt-4 mt-2 font-poppins-semibold text-3xl text-primary-dark dark:text-white 2xl:text-5xl">
            Who Am I?
          </div>
          <div className="ml:my-5 mb-3 mt-3 2xl:my-8">
            <div className="glowing-text ml:text-2xl text-base text-primary-dark dark:text-white sm:text-lg 2xl:mb-2 2xl:text-3xl">
              Mu·ha·mad{" "}
              <span className="font-poppins-bold text-primary-dark dark:text-white">
                Ha·kim
              </span>{" "}
              Ni·za·mi
            </div>
            <div className="ml:text-lg text-base text-primary-dark dark:text-white 2xl:text-xl">
              [ ha-
              <span className="font-poppins-bold text-primary-dark dark:text-white">
                kim
              </span>
              ,{" "}
              <span className="font-poppins-bold text-primary-dark dark:text-white">
                kim
              </span>
              ,{" "}
              <span className="font-poppins-bold text-primary-dark dark:text-white">
                kimz
              </span>
              ,{" "}
              <span className="font-poppins-bold text-primary-dark dark:text-white">
                nizam
              </span>{" "}
              ]
            </div>
          </div>
          <div className="ml:text-base ml:h-40 sl:h-28 overflow-auto text-sm leading-relaxed text-primary-dark dark:text-white xl:h-fit 2xl:text-xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium perspiciatis accusantium officiis! Esse voluptatum
            dignissimos aliquid voluptatibus omnis blanditiis dolorem commodi,
            perferendis rerum culpa debitis quo officiis reprehenderit aliquam
            facere corporis tempore molestias voluptates! Soluta quisquam
            officiis non molestias incidunt inventore corporis sit nostrum sed
          </div>
          <div className="sl:mt-6 max-sl:justify-center mt-4 flex 2xl:mt-8">
            <button className="h-12 w-52 rounded-[24px] border-2 border-primary-dark bg-secondary text-center font-poppins-semibold text-lg text-primary-dark hover:bg-primary-dark hover:text-primary dark:border-white dark:bg-secondary-dark dark:text-white dark:hover:bg-white dark:hover:text-primary-dark 2xl:h-14 2xl:w-80 2xl:text-xl">
              Download CV
            </button>
          </div>
        </div>
        <div className="max-sl:hidden flex-[2]">
          <div className="relative h-[60%] w-full 2xl:h-[70%]">
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-contain pl-8 2xl:pl-12"
            />
          </div>
          <div className="ml-6 mt-12 flex justify-between duration-300 max-md:-mr-4 md:ml-8 lg:justify-evenly 2xl:ml-12">
            {assets.map((asset, idx) => (
              <div className="flex justify-center">
                <div
                  key={idx}
                  className="ml:w-16 ml:p-3.5 ml:border-[3px] peer z-10 aspect-square w-12 rounded-full border-2 border-primary-dark p-2 transition-all hover:bg-primary-dark dark:border-white dark:bg-primary-dark dark:hover:bg-white md:hover:scale-125 2xl:w-20"
                  onMouseOver={() => asset.hoveredState[1](true)}
                  onMouseOut={() => asset.hoveredState[1](false)}
                >
                  <asset.hook
                    darkMode={darkMode}
                    isHovered={asset.hoveredState[0]}
                  />
                </div>
                <div className="ml:peer-hover:translate-y-20 absolute font-semibold text-primary-dark opacity-0 transition peer-hover:translate-y-16 peer-hover:opacity-100 dark:text-white max-md:hidden 2xl:peer-hover:translate-y-24">
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
