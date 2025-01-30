"use client";
import Image from "next/image";
import Animated from "@/components/ui/Animated";
import { ExperienceDatas } from "@/lib/constants";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen pt-12">
      <Animated
        direction="left"
        className="mb-6 w-full text-4xl font-semibold text-primary-dark underline dark:text-white max-xl:py-2 xl:mb-10 xl:text-5xl"
      >
        Things I've done, so far...
      </Animated>
      <div className="sm:max-xl:mr-6">
        {ExperienceDatas.map((data, idx) => (
          <Animated
            key={idx}
            className="relative mb-6 flex w-full rounded-[36px] border-2 border-primary-dark bg-primary dark:border-white dark:bg-primary-dark max-md:flex-col"
          >
            {ExperienceDatas.length - 1 !== idx && (
              <span className="absolute -right-[1.375rem] top-8 h-[calc(100%+1.5rem)] w-1 bg-primary-dark dark:bg-white sm:-right-[2.625rem]" />
            )}
            <span className="absolute -right-7 top-[1.375rem] z-10 h-4 w-4 rounded-full bg-primary-dark dark:bg-white sm:-right-12" />
            <div className="absolute right-4 top-4 inline-block rounded-full bg-primary-dark px-3 py-0.5 font-semibold text-white dark:bg-white dark:text-primary-dark max-md:text-sm">
              {data.category}
            </div>
            <div className="flex flex-shrink-0 items-center justify-center p-4 max-md:mt-10 max-md:h-36 md:w-56 md:p-12">
              <div className="relative aspect-square overflow-hidden rounded-full border-2 border-primary-dark dark:border-white max-md:h-full md:w-full">
                <Image
                  src={data.img}
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div
              className={`${data.histories.length > 1 ? "pr-8 sm:pr-16" : "pr-3 sm:pr-8"} flex flex-grow flex-col pl-3 sm:max-md:pl-4 md:pt-10`}
            >
              {data.histories.map((history, idx) => (
                <div key={idx} className="relative w-full pt-4">
                  {data.histories.length > 1 ? (
                    <>
                      <span className="absolute -right-6 top-5 h-4 w-4 rounded-full bg-primary-dark dark:bg-white sm:-right-10 md:top-[4.5rem] lg:top-10" />
                      {data.histories.length - 1 !== idx && (
                        <span className="absolute -right-[1.125rem] top-7 h-full w-1 bg-primary-dark dark:bg-white sm:-right-[2.125rem] md:top-20 lg:top-12" />
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  <div className="transition hover:scale-[103%] active:scale-[97%]">
                    <div className="flex justify-between font-semibold max-lg:flex-col lg:items-center">
                      <div className="font-normal text-primary-dark dark:text-white max-md:text-end max-md:text-sm">
                        {history.date}
                      </div>
                      <div>
                        <div className="text-end text-2xl text-primary-dark dark:text-white md:text-3xl">
                          {history.position}
                        </div>
                        <div className="text-end text-xl text-primary-dark dark:text-white md:text-2xl">
                          {history.name}
                        </div>
                      </div>
                    </div>
                    <div className="my-3 w-full rounded-[24px] border-2 border-primary-dark bg-secondary p-4 pt-4 text-primary-dark dark:border-white dark:bg-secondary-dark dark:text-white max-md:text-sm sm:my-4 sm:rounded-[20px]">
                      {history.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Animated>
        ))}
      </div>
    </section>
  );
};

export default Experience;
