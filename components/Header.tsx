"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/public/Logo";
import HeaderItem from "./HeaderItem";
import BurgerBar from "./BurgerBar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClose = () => setMenuOpen(false);
    window.addEventListener("menu-close", handleClose);
    return () => window.removeEventListener("menu-close", handleClose);
  }, []);

  return (
    <nav className="w-full max-w-[1440px] mx-auto p-5 flex justify-between items-center text-[#EDEDED] relative z-50">
      <div className="flex items-center gap-x-5 z-50 max-[1200px]:gap-x-4">
        <Logo />
        <p className="text-[20px] max-[1200px]:text-[16px]">PenHub</p>
      </div>

      <BurgerBar isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

      <ul className="flex max-[940px]:hidden gap-x-[50px] max-[1200px]:gap-x-[35px] items-center">
        <HeaderItem text="Home" />
        <HeaderItem text="About" />
        <HeaderItem text="Contact" />
        <HeaderItem text="Courses" />
        <HeaderItem text="Blog" />
      </ul>

      {menuOpen && (
        <ul className="absolute top-full right-6 w-[200px] bg-transparent border border-cyan-500 shadow-[0_0_10px_#00f2ff] text-[18px] rounded-xl py-4 px-6 flex flex-col gap-4 mt-4 transition-all duration-300 z-40 backdrop-blur-md">
          <HeaderItem text="Home" />
          <HeaderItem text="About" />
          <HeaderItem text="Contact" />
          <HeaderItem text="Courses" />
          <HeaderItem text="Blog" />
        </ul>
      )}
    </nav>
  );
};

export default Header;
