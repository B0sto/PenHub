import React from "react";
import NetworkSecurityGlobe from "./NetworkSecurityGlobe";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-[1440px] mx-auto min-h-[95vh] flex max-[940px]:flex-col-reverse max-[940px]:text-center items-center justify-between max-[940px]:justify-center px-6 max-[900px]:-mt-[50px]">
      <div className="max-w-xl z-10">
        <h1 className="text-[50px] max-[1200px]:text-[48px] max-[1074px]:text-[40px] max-[768px]:text-[35px] max-[500px]:text-[25px] font-bold text-white leading-tight">
          {t.hero.head_text1} 
          <br />
          <span className="text-cyan-400 whitespace-nowrap">{t.hero.head_text2}</span>
          <br />
          {t.hero.head_text3}
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          {t.hero.head_subtext}
        </p>
        <div className="mt-6 flex gap-4 max-[940px]:justify-center max-[410px]:flex-col max-[900px]:text-[14px]">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer">
            <a href="https://docs.google.com/forms/u/0/" target="_blank">{t.hero.start_btn}</a>
          </button>
          <Link href={"/courses"} className="border border-cyan-500 text-cyan-400 py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 cursor-pointer">
            {t.hero.view_courses}
          </Link>
        </div>
      </div>

      <div className="z-10 -mr-[50px] max-[900px]:mr-[0]">
        <NetworkSecurityGlobe />
      </div>
    </section>
  );
};

export default HeroSection;
