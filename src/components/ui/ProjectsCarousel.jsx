"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
    <div className="absolute w-full flex items-center justify-center p-4 mt-20 xs:mt-32">
      <div className="relative overflow-hidden flex items-center justify-center w-[1440px] h-[36rem]">
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
              className={`${offset === 0 ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"} absolute w-[352px] xs:w-[480px] rounded-[28px] text-white bg-primary dark:bg-primary-dark p-4 border-2 border-primary-dark dark:border-white`}
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
              <ProjectCard data={data} />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute flex gap-6 items-center justify-center w-full -bottom-6 xs:-bottom-16">
        <button
          className="bg-primary-dark dark:bg-white p-2 rounded-full z-10"
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
                  : "dark:bg-primary-dark bg-white "
              } w-4 h-4 rounded-full border-2 border-primary-dark dark:border-primary`}
            />
          ))}
        </div>
        <button
          className="bg-primary-dark dark:bg-white p-2 rounded-full"
          onClick={handleNext}
        >
          <ChevronRight className="text-white dark:text-primary-dark" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
