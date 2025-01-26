import ProjectsCarousel from "@/components/ui/ProjectsCarousel";
import { ProjectsDatas } from "@/lib/constants";

const Projects = () => {
  return (
    <section className="min-h-screen pt-20 sm:pt-[118px] xl:pt-[204px]">
      <ProjectsCarousel datas={ProjectsDatas} />
    </section>
  );
};

export default Projects;
