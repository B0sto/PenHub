"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const scrollTo = searchParams.get("scroll");
    if (scrollTo) {
      const scrollAndClean = () => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          const url = new URL(window.location.href);
          url.searchParams.delete("scroll");
          window.history.replaceState({}, "", url.pathname);
        } else {
          setTimeout(scrollAndClean, 50);
        }
      };
      scrollAndClean();
    }
  }, [searchParams, router]);

  return (
    <>
      <main className="relative z-10 px-15 max-[1200px]:px-10 max-[730px]:px-6">
        <section id="home" className="scroll-mt-20">
          <HeroSection />
        </section>
        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>
        <section id="contact" className="scroll-mt-20">
          <ContactSection />
        </section>
      </main>
    </>
  );
}