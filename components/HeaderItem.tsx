import React, { useState } from "react";

const HeaderItem = ({ text }: { text: string }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);

    setTimeout(() => setActive(false), 500);
  };

  return (
    <li
      onClick={handleClick}
      className={`text-[20px] max-[1200px]:text-[16px] transition-all duration-200 cursor-pointer ${
        active ? "text-cyan-400 drop-shadow-[0_0_5px_cyan]" : ""
      } md:hover:text-cyan-400 md:hover:drop-shadow-[0_0_5px_cyan]`}
    >
      {text}
    </li>
  );
};

export default HeaderItem;