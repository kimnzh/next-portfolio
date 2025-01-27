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

  // Navigate to a specific section
  function navigateTo(sectionId) {
    // Update the URL hash dynamically
    const newUrl = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    window.history.pushState({}, "", newUrl);

    // Scroll to the target section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error(`Section with ID "${sectionId}" not found.`);
    }
  }

  // Handle scrolling to a section on page load based on the URL hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", ""); // Extract hash without `#`
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        console.warn(`Section with ID "${hash}" not found on page load.`);
      }
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
