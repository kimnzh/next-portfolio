"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/elements/Footer";
import Profile from "@/modules/Profile";
import Experience from "@/modules/Experience";
import Projects from "@/modules/Projects";
import Contact from "@/modules/Contact";
import Life from "@/modules/Life";

export default function Page() {
  const searchParams = useSearchParams();

  function navigateTo(sectionId) {
    window.history.pushState({}, "", `/testing/#${sectionId}`);

    // Scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
    }
  }, [searchParams]);

  return (
    <>
      <Navbar onNavigate={navigateTo} />
      <main className="min-h-screen max-w-[1440px] w-full overflow-hidden px-8 sm:px-12 xl:px-24">
        <Profile />
        <Experience />
        <Projects />
        <Life />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
