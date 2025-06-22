import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerBar: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <div
      className="relative text-3xl cursor-pointer group z-50 hidden max-[940px]:block"
      onClick={onClick}
    >
      {isOpen ? <IoMdClose/> : <RxHamburgerMenu/>}
    </div>
  );
};

export default BurgerBar;
