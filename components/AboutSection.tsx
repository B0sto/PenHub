import React from "react";
import SpotlightCard from "./SpotlightCard";
import data from '@/data/data.json'

const AboutSection = () => {
  const cards = [
    {
      name: data.Eng.CardOneName,
      text: data.Eng.CardOneText,
    },
    {
      name: data.Eng.CardTwoName,
      text: data.Eng.CardTwoText,
    },
    {
      name: data.Eng.CardThreeName,
      text: data.Eng.CardThreeText,
    },
    {
      name: data.Eng.CardFourName,
      text: data.Eng.CardFourText,
    },
    {
      name: data.Eng.CardFiveName,
      text: data.Eng.CardFiveText,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20 text-white">
      <h3 className="text-[48px] font-bold mb-12 max-[940px]:text-center max-[940px]:text-[40px]">About Us</h3>

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
