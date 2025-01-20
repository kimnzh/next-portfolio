import Navbar from "@/components/elements/Navbar";
import { ProfileModule } from "@/modules/ProfileModule";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative h-[2000px] min-h-screen max-w-[1440px]">
        <ProfileModule />
      </main>
    </>
  );
}
