import Image from "next/image";
import Animated from "./Animated";

const ProjectsMobile = ({ slides }) => {
  return (
    <Animated direction="bottom" className="mb-12 grid gap-4 lg:hidden">
      {slides.map((data, index) => (
        <div
          key={index}
          className="relative max-w-[512px] shrink-0 overflow-hidden rounded-[24px] border-2 border-primary-dark bg-primary p-4 text-white transition-all duration-300 dark:border-white dark:bg-primary-dark"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-[12px]">
            <Image
              src={data.image}
              alt="image"
              className="object-cover transition peer-hover:blur-sm"
              fill
            />
          </div>
          <div className="mt-2">
            <div className="flex flex-col justify-between">
              <h1 className="py-2 text-2xl font-semibold text-primary-dark dark:text-white">
                {data.title}
              </h1>
              <h2 className="w-fit rounded-full bg-primary-dark px-3 py-1 text-xs font-semibold text-primary dark:bg-white dark:text-primary-dark">
                {data.category}
              </h2>
            </div>
            <div className="my-3 flex h-6 gap-2">
              {data.stacks.map((stack, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square h-full cursor-pointer"
                >
                  <Image
                    src={`/stacks/${stack.replace(/\s/g, "").toLowerCase()}.svg`}
                    alt={stack}
                    fill
                  />
                </div>
              ))}
            </div>
            <p className="scrollbar h-36 overflow-auto font-light leading-normal text-primary-dark dark:text-white max-xs:text-sm xs:h-[144px]">
              {data.desc}
            </p>
          </div>
          <div className="text-end font-semibold text-primary-dark dark:text-white max-xs:text-sm">
            {data.date}
          </div>
        </div>
      ))}
    </Animated>
  );
};

export default ProjectsMobile;
