"use client";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft } from "lucide-react";

import { DotButton, useDotButton } from "./DotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtons";

import ProjectCard from "./ProjectCard";
import Animated from "./Animated";

const ProjectsCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla initialized", emblaApi);
    }
  }, [emblaApi]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // relative flex w-[342px] items-center justify-center xs:w-[480px]

  return (
    <Animated
      direction="bottom"
      className="absolute mt-28 flex w-full justify-center p-4 xs:mt-32"
    >
      <div
        className="flex w-full justify-center overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex h-[544px] w-[342px] gap-3 xs:h-[562px] xs:w-[480px]">
          {slides.map((data, index) => {
            return (
              <div
                key={index}
                className={`${index === selectedIndex || "scale-[85%]"} relative w-full shrink-0 cursor-grab overflow-hidden rounded-[28px] border-2 border-primary-dark bg-primary p-4 text-white transition-all duration-300 active:cursor-grabbing dark:border-white dark:bg-primary-dark`}
              >
                <div
                  className={`${index === selectedIndex ? "-z-10 opacity-0" : "z-50 opacity-100"} absolute inset-0 bg-slate-100/50 backdrop-blur-[3px] transition dark:bg-slate-900/50`}
                />
                <ProjectCard data={data} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute -bottom-10 flex w-full items-center justify-center gap-6 xs:-bottom-16">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
          <ChevronLeft className="text-white dark:text-primary-dark" />
        </PrevButton>

        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${
                index === selectedIndex
                  ? "bg-primary-dark dark:bg-white"
                  : "bg-white dark:bg-primary-dark"
              } h-4 w-4 rounded-full border-2 border-primary-dark dark:border-primary`}
            />
          ))}
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
          <ChevronRight className="text-white dark:text-primary-dark" />
        </NextButton>
      </div>
    </Animated>
  );
};

export default ProjectsCarousel;
