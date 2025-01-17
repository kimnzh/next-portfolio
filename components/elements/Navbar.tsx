import Image from "next/image";
import Logo from "@/public/logo.svg";

import Profile from "@/public/navbar/profile.svg";
import Experience from "@/public/navbar/experience.svg";
import Projects from "@/public/navbar/projects.svg";
import Life from "@/public/navbar/life.svg";

export const Navbar = () => {
  return (
    <div className="fixed h-[108px] inset-0 z-[9999] m-12">
      <div className="h-full w-full absolute flex justify-between border-2 border-white rounded-[24px] p-[16px] z-10">
        <div className="h-full flex items-center">
          <div className="relative h-full ml-10 mr-4 aspect-square">
            <Image className="" src={Logo} alt="logo" fill />
          </div>
          <h1 className="text-3xl text-white font-poppins-bold">
            Hakim Nizami
          </h1>
        </div>
        <div className="flex items-center gap-3 h-full">
          <div className="h-full aspect-square rounded-full bg-white"></div>
          <div className="text-2xl text-white font-poppins-semibold mx-12">
            Contact Me
          </div>
          <div className="relative h-full aspect-square border-2 border-white rounded-[16px]">
            <Image
              src={Profile}
              alt="profile"
              fill
              className="object-cover p-2"
            />
          </div>
          <div className="relative h-full aspect-square border-2 border-white rounded-[16px]">
            <Image
              src={Experience}
              alt="experience"
              fill
              className="object-cover p-2"
            />
          </div>
          <div className="relative h-full aspect-square border-2 border-white rounded-[16px]">
            <Image
              src={Projects}
              alt="projects"
              fill
              className="object-cover p-2"
            />
          </div>
          <div className="relative h-full aspect-square border-2 border-white rounded-[16px]">
            <Image src={Life} alt="life" fill className="object-cover p-2" />
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-[#0F172A] opacity-70 backdrop-blur-[30px] rounded-[24px] z-0"></div>
    </div>
  );
};
