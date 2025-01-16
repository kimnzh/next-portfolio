import Image from "next/image";
import Logo from "@/public/logo.svg";

const UnderDevelopment = () => {
  return (
    <main className="flex-col flex items-center pt-52 min-h-screen bg-gradient-to-br from-[#040A27] to-[#020617]">
      <div className="w-64 h-64 relative">
        <Image src={Logo} alt={"logo"} fill />
      </div>
      <div className="bg-[#0F172A] border-solid border-2 border-white px-10 py-6 rounded-[32px] font-PoppinsReg text-white mt-12 text-6xl font-semibold glowing-text">
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
