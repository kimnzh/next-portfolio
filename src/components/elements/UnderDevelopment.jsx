import Image from "next/image";

const UnderDevelopment = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-tertiary-dark pt-[25vh]">
      <div className="relative aspect-square w-48 md:w-64">
        <Image src="/dark/logo-glow.svg" alt={"logo"} fill />
      </div>
      <div className="glowing-text mt-12 rounded-[16px] border-2 border-solid border-white px-4 py-2 text-lg font-semibold text-white sm:rounded-[32px] sm:px-10 sm:py-6 sm:text-3xl lg:text-6xl">
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
