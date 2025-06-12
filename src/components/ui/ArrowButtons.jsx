import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      className={`${disabled && "opacity-0"} z-10 rounded-full bg-primary-dark p-2 dark:bg-white`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      className={`${disabled && "opacity-0"} z-10 rounded-full bg-primary-dark p-2 dark:bg-white`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
