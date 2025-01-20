import Navbar from "@/components/elements/Navbar";
import Image from "next/image";
import Logo from "@/public/dark/logo-glow.svg";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative flex h-[2000px] min-h-screen justify-center bg-tertiary dark:bg-tertiary-dark">
        <div className="relative aspect-square w-48 md:w-64 lg:w-[36rem]">
          <Image
            className="invert dark:invert-0"
            src={Logo}
            alt={"logo"}
            fill
          />
        </div>
      </main>
    </>
  );
}
