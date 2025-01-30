"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

import ProjectCard from "./ProjectCard";
import Animated from "./Animated";

const ProjectsCarousel = ({ datas }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % datas.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prevIdx) =>
      prevIdx === 0 ? datas.length - 1 : prevIdx - 1
    );
  };

  const handleDragEnd = (event, info) => {
    const dragThreshold = 50; // Minimum drag distance to switch slides
    if (info.offset.x < -dragThreshold) {
      handleNext();
    } else if (info.offset.x > dragThreshold) {
      handlePrev();
    }
  };

  return (
    <Animated
      direction="bottom"
      className="absolute mt-20 flex w-full items-center justify-center p-4 xs:mt-32"
    >
      <div className="relative flex h-[36rem] w-[1440px] items-center justify-center overflow-hidden">
        {datas.map((data, idx) => {
          const offset = idx - currentIdx;
          let xTranslate = 0;

          if (offset < 0 || (offset === datas.length - 1 && currentIdx === 0)) {
            xTranslate = 100 * offset;
          } else if (
            offset > 0 ||
            (offset === -(datas.length - 1) && currentIdx === datas.length - 1)
          ) {
            xTranslate = 100 * offset;
          }

          return (
            <motion.div
              key={idx}
              className={`${offset === 0 ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"} absolute w-[352px] overflow-hidden rounded-[28px] border-2 border-primary-dark bg-primary p-4 text-white dark:border-white dark:bg-primary-dark xs:w-[480px]`}
              animate={{
                x: `${xTranslate}%`,
                scale: offset === 0 ? 1 : 0.8,
                zIndex: offset === 0 ? 10 : 5,
              }}
              transition={{ duration: 0.5 }}
              drag={offset === 0 ? "x" : "false"}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              onClick={
                offset === -1
                  ? handlePrev
                  : offset === 1
                    ? handleNext
                    : undefined
              }
            >
              <ProjectCard data={data} offset={offset} />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute -bottom-6 flex w-full items-center justify-center gap-6 xs:-bottom-16">
        <button
          className="z-10 rounded-full bg-primary-dark p-2 dark:bg-white"
          onClick={handlePrev}
        >
          <ChevronLeft className="text-white dark:text-primary-dark" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: datas.length }).map((_, idx) => (
            <div
              key={idx}
              className={`${
                idx === currentIdx
                  ? "bg-primary-dark dark:bg-white"
                  : "bg-white dark:bg-primary-dark"
              } h-4 w-4 rounded-full border-2 border-primary-dark dark:border-primary`}
            />
          ))}
        </div>
        <button
          className="rounded-full bg-primary-dark p-2 dark:bg-white"
          onClick={handleNext}
        >
          <ChevronRight className="text-white dark:text-primary-dark" />
        </button>
      </div>
    </Animated>
  );
};

export default ProjectsCarousel;
