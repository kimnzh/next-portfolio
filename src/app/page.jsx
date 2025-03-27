// import UnderDevelopment from "@/components/elements/UnderDevelopment";

// export default function Home() {
//   return (
//     <main className="min-h-screen w-full">
//       <UnderDevelopment />
//     </main>
//   );
// }

"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Sections
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/elements/Footer";
import ProfileSection from "@/sections/ProfileSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";
import LifeSection from "@/sections/LifeSection";

export default function Home() {
  const searchParams = useSearchParams();

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

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    // Check if this is a page refresh
    const isRefresh = window.performance
      .getEntriesByType("navigation")
      .some((entry) => entry.type === "reload");

    // Only scroll to section if it's not a refresh
    if (hash && !isRefresh) {
      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams]);

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
    </>
  );
}
