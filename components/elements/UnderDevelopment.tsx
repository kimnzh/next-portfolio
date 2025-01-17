import Image from "next/image";
import Logo from "@/public/logo.png";

const UnderDevelopment = () => {
  return (
    <main className="pt-[25vh] min-h-screen bg-gradient-to-br from-[#040A27] to-[#020617] flex-col flex items-center">
      <div className="w-48 md:w-64 aspect-square relative">
        <Image src={Logo} alt={"logo"} fill />
      </div>
      <div className="border-solid bg-[#0F172A] border-white border-2 px-4 sm:px-10 py-2 sm:py-6 rounded-[16px] sm:rounded-[32px] text-lg sm:text-3xl lg:text-6xl font-PoppinsReg text-white mt-12 font-semibold glowing-text">
        <span className="flicker-fast">We</span>bs
        <span className="flicker-slow">ite</span> Un
        <span className="flicker-slow">der</span> D
        <span className="flicker-slow">eve</span>lop
        <span className="flicker-fast">ment</span>
      </div>
    </main>
  );
};

export default UnderDevelopment;
