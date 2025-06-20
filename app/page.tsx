import Aurora from "@/components/Aurora";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Aurora
        colorStops={["#0f172a", "#1e3a8a", "#3b82f6"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <main className="relative z-10">
        <Header />
        <HeroSection/>
      </main>
    </>
  );
}
