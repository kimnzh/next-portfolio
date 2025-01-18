import UnderDevelopment from "@/components/elements/UnderDevelopment";

export default function Home() {
  return (
    <main className="relative min-h-screen h-[5000px] bg-tertiary-light dark:bg-tertiary">
      {/* <UnderDevelopment /> */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
      </div>
    </main>
  );
}
