"use client";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Sections
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/elements/Footer";
import ProfileSection from "@/sections/ProfileSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";
import LifeSection from "@/sections/LifeSection";

function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const isRefresh = window.performance
      .getEntriesByType("navigation")
      .some((entry) => entry.type === "reload");

    if (hash && !isRefresh) {
      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  function navigateTo(sectionId) {
    window.history.pushState({}, "", `#${sectionId}`);

    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <Navbar onNavigate={navigateTo} />
      <main className="min-h-screen w-full max-w-[1440px] overflow-hidden px-8 sm:px-12 xl:px-24">
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
        <LifeSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Wrap `ScrollHandler` in Suspense */}
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
    </>
  );
}
