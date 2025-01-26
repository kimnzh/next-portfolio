const ProjectCard = ({ data }) => {
  return (
    <>
      <div className="w-full aspect-video bg-[#DDDDDD] rounded-[12px] border-2 border-primary-dark"></div>
      <div className="mt-2 p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl xs:text-3xl font-semibold text-primary-dark dark:text-white">
            {data.title}
          </h1>
          <h2 className="bg-primary-dark dark:bg-white text-primary dark:text-primary-dark text-xs xs:text-sm px-3 py-1 rounded-full font-semibold">
            {data.category}
          </h2>
        </div>
        <div className="h-6 flex gap-2 my-3">
          <div className="h-full aspect-square bg-[#DDDDDD]"></div>
          <div className="h-full aspect-square bg-[#DDDDDD]"></div>
          <div className="h-full aspect-square bg-[#DDDDDD]"></div>
          <div className="h-full aspect-square bg-[#DDDDDD]"></div>
          <div className="h-full aspect-square bg-[#DDDDDD]"></div>
          <div className="h-full aspect-square bg-[#DDDDDD]"></div>
        </div>
        <p className="text-primary-dark max-xs:text-sm dark:text-white leading-normal font-light">
          {data.desc}
        </p>
      </div>
      <div className="text-end font-semibold max-xs:text-sm text-primary-dark dark:text-white">
        {data.date}
      </div>
    </>
  );
};

export default ProjectCard;
