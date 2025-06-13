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
      className="absolute mt-28 hidden w-full justify-center p-4 xs:mt-32 lg:flex"
    >
      <div
        className="flex w-full justify-center overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex aspect-video h-[30vw] max-h-[576px] min-h-44 gap-3">
          {slides.map((data, index) => {
            return (
              <div
                key={index}
                className={`${index === selectedIndex || "scale-[75%] opacity-60"} relative w-full shrink-0 overflow-hidden rounded-[24px] border-2 border-primary-dark bg-primary p-1 text-white transition-all duration-300 dark:border-white dark:bg-primary-dark sm:rounded-[28px] sm:p-2`}
              >
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
