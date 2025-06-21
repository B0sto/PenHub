import React from "react";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerBar: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <div
      className="relative w-10 h-10 cursor-pointer group z-50 md:hidden"
      onClick={onClick}
    >
      <span
        className={`absolute left-0 w-full h-[3px] bg-cyan-400 transition-all duration-300 ${
          isOpen ? "top-1/2 rotate-45" : "top-1"
        }`}
      />
      <span
        className={`absolute left-0 w-full h-[3px] bg-cyan-400 transition-all duration-300 ${
          isOpen ? "opacity-0" : "top-1/2"
        }`}
      />
      <span
        className={`absolute left-0 w-full h-[3px] bg-cyan-400 transition-all duration-300 ${
          isOpen ? "bottom-1/2 -rotate-45" : "bottom-1"
        }`}
      />
    </div>
  );
};

export default BurgerBar;
