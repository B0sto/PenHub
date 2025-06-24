"use client";

import React from "react";
import SpotlightCard from "./SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const cards = [
    {
      name: t.about.CardOneName,
      text: t.about.CardOneText,
    },
    {
      name: t.about.CardTwoName,
      text: t.about.CardTwoText,
    },
    {
      name: t.about.CardThreeName,
      text: t.about.CardThreeText,
    },
    {
      name: t.about.CardFourName,
      text: t.about.CardFourText,
    },
    {
      name: t.about.CardFiveName,
      text: t.about.CardFiveText,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20 text-white">
      <h3 className="text-[48px] font-bold mb-12 max-[940px]:text-center max-[940px]:text-[40px] max-[500px]:text-[30px]">
        {t.navigation.about}
      </h3>

      <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[940px]:grid-cols-1 gap-8 justify-items-center">
        {cards.map((card, index) => (
          <SpotlightCard
            key={index}
            spotlightColor="rgba(0, 229, 255, 0.2)"
            className="gap-y-6 p-6 h-full w-full border border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] transition-all duration-300"
            name={card.name}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
