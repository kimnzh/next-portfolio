import Navbar from "@/components/elements/Navbar";
import Logo from "@/components/vectors/Logo";
import Profile from "@/modules/Profile";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="h-[2000px] max-w-[1440px] px-8 sm:px-12 xl:px-24">
        <Profile />
      </main>
    </>
  );
}
