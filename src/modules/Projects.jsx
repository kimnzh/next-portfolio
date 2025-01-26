import ProjectsCarousel from "@/components/ui/ProjectsCarousel";
import { ProjectsDatas } from "@/lib/constants";

const Projects = () => {
  return (
    <section className="min-h-screen pt-20 sm:pt-[118px] xl:pt-[204px] flex flex-col items-center">
      <div className="w-full text-start underline text-4xl xl:text-5xl max-xl:py-2 font-semibold text-primary-dark dark:text-white mb-4 xl:mb-8">
        Stuff I've Created
      </div>
      <div className="text-primary-dark text-3xl xl:text-4xl font-semibold dark:text-white mb-[42rem] xs:mb-[48rem]">
        My Projects
      </div>
      <ProjectsCarousel datas={ProjectsDatas} />
      <div className="text-primary-dark text-3xl xl:text-4xl font-semibold dark:text-white">
        My Tech Stacks
      </div>
    </section>
  );
};

export default Projects;
