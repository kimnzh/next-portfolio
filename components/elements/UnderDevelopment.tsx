import Image from "next/image";
import Logo from "@/public/dark/logo-glow.svg";

const UnderDevelopment = () => {
  return (
    <main className="bg-tertiary-dark flex h-[5000px] min-h-screen flex-col items-center pt-[25vh]">
      <div className="relative aspect-square w-48 md:w-64">
        <Image src={Logo} alt={"logo"} fill />
      </div>
      <div className="font-PoppinsReg glowing-text bg-WHI mt-12 rounded-[16px] border-2 border-solid border-white px-4 py-2 text-lg font-semibold text-white sm:rounded-[32px] sm:px-10 sm:py-6 sm:text-3xl lg:text-6xl">
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
