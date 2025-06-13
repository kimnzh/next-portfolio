"use client";
import Animated from "@/components/ui/Animated";

const LifeSection = () => {
  return (
    <section id="life" className="pb-6 pt-12 md:pb-12">
      <Animated
        direction="left"
        className="mb-6 w-full text-4xl font-semibold text-primary-dark underline dark:text-white max-xl:py-2 xl:mb-10 xl:text-5xl"
      >
        My journey
      </Animated>
      <div className="relative flex h-fit gap-8 max-lg:hidden">
        <div className="relative w-72">
          <div className="sticky h-fit w-full grow-0 rounded-[24px] bg-primary-dark px-6 py-4 dark:bg-primary">
            <h1 className="text-3xl font-semibold text-primary dark:text-primary-dark">
              The Beginning
            </h1>
          </div>
        </div>
        <div className="flex w-2.5 flex-col items-center">
          <div className="h-10 w-10 shrink-0 grow-0 rounded-full border-[7px] border-white bg-primary-dark dark:border-tertiary-dark dark:bg-primary" />
          <div className="h-full w-full origin-top rounded-full bg-primary-dark dark:bg-primary" />
        </div>
        <div className="relative flex flex-col gap-6 overflow-hidden rounded-[36px] border-2 border-primary-dark bg-primary p-6 text-primary-dark dark:border-white dark:bg-primary-dark dark:text-white">
          <div className="flex gap-6">
            <div className="h-24 w-24 rounded-full bg-black"></div>
            <div className="flex flex-col justify-evenly">
              <h1 className="text-3xl font-semibold">Computer Engineering</h1>
              <h2 className="text-2xl">
                Universitas Indonesia{" "}
                <span className="text-lg italic opacity-70">
                  (Aug 2024 - Aug 2025)
                </span>
              </h2>
            </div>
          </div>
          <div className="h-0.5 bg-primary-dark dark:bg-primary" />
          <ul className="scrollbar w-ful flex max-h-24 flex-col gap-4 overflow-auto">
            <li className="flex gap-4">
              <div className="h-2 w-2 shrink-0 grow-0 translate-y-2 rounded-full bg-primary-dark dark:bg-primary" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              deleniti error ad molestiae assumenda consectetur, voluptates
              rerum reiciendis quas laborum?
            </li>
            <li className="flex gap-4">
              <div className="h-2 w-2 shrink-0 grow-0 translate-y-2 rounded-full bg-primary-dark dark:bg-primary" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
          <div className="scrollbar grid grid-cols-2 gap-4 overflow-auto pb-4">
            <div className="aspect-video rounded-[12px] bg-black"></div>
            <div className="aspect-video rounded-[12px] bg-black"></div>
            <div className="aspect-video rounded-[12px] bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeSection;
