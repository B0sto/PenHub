import React, { useState } from "react";

type Props = {
  text: string;
};

const HeaderItem = ({ text }: { text: string }) => {
  const handleClick = () => {
    const id = text.toLowerCase();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({behavior: "smooth", block: "start"})
    }

    if (typeof window !== "undefined") {
      const event = new CustomEvent("menu-close");
      window.dispatchEvent(event);
    }
  }

  return (
    <li
      className={`text-[20px] max-[1200px]:text-[16px] transition-all duration-200 cursor-pointer text-white md:hover:text-cyan-400 md:hover:drop-shadow-[0_0_5px_cyan]`}
      onClick={handleClick}
    >
      {text}
    </li>
  );
};

export default HeaderItem;
