"use client";
import Image from "next/image";
import { ExperienceDatas } from "@/lib/constants";

const Experience = () => {
  return (
    <section className="min-h-screen pt-20 sm:pt-[118px] xl:pt-[204px]">
      <div className="w-full underline text-4xl xl:text-5xl max-xl:py-2 font-semibold text-primary-dark dark:text-white mb-6 xl:mb-10">
        Things I've done, so far...
      </div>
      <div className="sm:max-xl:mr-6">
        {ExperienceDatas.map((data, idx) => (
          <div
            key={idx}
            className="relative flex max-md:flex-col w-full mb-6 bg-primary dark:bg-primary-dark border-2 border-primary-dark dark:border-white rounded-[36px]"
          >
            {ExperienceDatas.length - 1 !== idx && (
              <span className="h-[calc(100%+1.5rem)] w-1 absolute bg-primary-dark dark:bg-white -right-[1.375rem] sm:-right-[2.625rem] top-8" />
            )}
            <span className="w-4 h-4 rounded-full bg-primary-dark dark:bg-white absolute top-[1.375rem] z-10 -right-7 sm:-right-12" />
            <div className="absolute max-md:text-sm top-4 right-4 rounded-full bg-primary-dark dark:bg-white text-white dark:text-primary-dark inline-block py-0.5 px-3 font-semibold">
              {data.category}
            </div>
            <div className="flex items-center justify-center md:w-56 max-md:h-36 p-4 md:p-12 flex-shrink-0 max-md:mt-10">
              <div className="relative md:w-full max-md:h-full aspect-square  rounded-full border-2 border-primary-dark dark:border-white overflow-hidden">
                <Image
                  src={data.img}
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div
              className={`${data.histories.length > 1 ? "pr-8 sm:pr-16" : "pr-3 sm:pr-8"} flex flex-grow flex-col pl-3 sm:max-md:pl-4 md:pt-10 `}
            >
              {data.histories.map((history, idx) => (
                <div key={idx} className="relative w-full pt-4">
                  {data.histories.length > 1 ? (
                    <>
                      <span className="w-4 h-4 rounded-full bg-primary-dark dark:bg-white absolute top-5 md:top-[4.5rem] lg:top-10 -right-6 sm:-right-10" />
                      {data.histories.length - 1 !== idx && (
                        <span className="h-full w-1 absolute bg-primary-dark dark:bg-white -right-[1.125rem] sm:-right-[2.125rem] top-7 md:top-20 lg:top-12" />
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  <div className="hover:scale-[103%] active:scale-[97%] transition">
                    <div className="flex max-lg:flex-col lg:items-center justify-between font-semibold">
                      <div className="text-primary-dark max-md:text-sm font-normal dark:text-white max-md:text-end">
                        {history.date}
                      </div>
                      <div>
                        <div className="text-end text-2xl md:text-3xl text-primary-dark dark:text-white">
                          {history.position}
                        </div>
                        <div className="text-end text-xl md:text-2xl text-primary-dark dark:text-white">
                          {history.name}
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-md:text-sm bg-secondary dark:bg-secondary-dark pt-4 border-2 border-primary-dark dark:border-white rounded-[24px] sm:rounded-[20px] p-4 dark:text-white text-primary-dark my-3 sm:my-4">
                      {history.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
