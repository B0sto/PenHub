import AboutSection from "@/components/AboutSection";
import Aurora from "@/components/Aurora";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
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
        <div className="px-15 max-[1200px]:px-10 max-[730px]:px-6">
          <Header />
          <HeroSection />
          <AboutSection />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
