import Navbar from "@/components/elements/Navbar";
import Profile from "@/modules/Profile";
import Experience from "@/modules/Experience";
import Projects from "@/modules/Projects";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen h-[5000px] max-w-[1440px] w-full overflow-hidden px-8 sm:px-12 xl:px-24">
        <Profile />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
