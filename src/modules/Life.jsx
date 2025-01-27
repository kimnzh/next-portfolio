"use client";
import Animated from "@/components/ui/Animated";

const Life = () => {
  return (
    <section id="life" className="min-h-screen pt-12">
      <Animated
        direction="left"
        className="w-full underline text-4xl xl:text-5xl max-xl:py-2 font-semibold text-primary-dark dark:text-white mb-6 xl:mb-10"
      >
        My journey
      </Animated>
      <Animated
        direction="bottom"
        delay={0.5}
        className="w-full flex justify-center text-primary-dark text-3xl xl:text-4xl font-semibold dark:text-white "
      >
        It's quiet for now...
      </Animated>
    </section>
  );
};

export default Life;
