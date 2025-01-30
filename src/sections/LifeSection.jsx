"use client";
import Animated from "@/components/ui/Animated";

const Life = () => {
  return (
    <section id="life" className="min-h-screen pt-12">
      <Animated
        direction="left"
        className="mb-6 w-full text-4xl font-semibold text-primary-dark underline dark:text-white max-xl:py-2 xl:mb-10 xl:text-5xl"
      >
        My journey
      </Animated>
      <Animated
        direction="bottom"
        delay={0.5}
        className="flex w-full justify-center text-3xl font-semibold text-primary-dark dark:text-white xl:text-4xl"
      >
        It's quiet for now...
      </Animated>
    </section>
  );
};

export default Life;
