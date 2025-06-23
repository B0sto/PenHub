"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/public/Logo";
import HeaderItem from "./HeaderItem";
import BurgerBar from "./BurgerBar";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClose = () => setMenuOpen(false);
    window.addEventListener("menu-close", handleClose);
    return () => window.removeEventListener("menu-close", handleClose);
  }, []);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-[rgba(7,13,26,0.1)] backdrop-blur-md border-b border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1)] rounded-b-xl">
      <div className="max-w-[1440px] mx-auto py-5 flex justify-between items-center text-[#EDEDED] px-15 max-[700px]:px-10 max-[700px]:py-3">
        <Link
          href={"/"}
          className="flex items-center gap-x-5 z-50 max-[1200px]:gap-x-4"
        >
          <Logo />
          <p className="text-[20px] max-[1200px]:text-[16px]">PenHub</p>
        </Link>

        <BurgerBar isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

        <ul className="flex max-[940px]:hidden gap-x-[50px] max-[1200px]:gap-x-[35px] items-center">
          <HeaderItem text="Home" section="home" />
          <HeaderItem text="About" section="about" />
          <HeaderItem text="Contact" section="contact" />
          <HeaderItem text="Courses" href="/courses" />
          <HeaderItem text="Blog" href="/blog" />
        </ul>

        {menuOpen && (
          <ul className="absolute top-full right-6 w-[200px] bg-transparent border border-cyan-500 shadow-[0_0_10px_#00f2ff] text-[18px] rounded-xl py-4 px-6 flex flex-col gap-4 mt-4 transition-all duration-300 z-40 backdrop-blur-md">
            <HeaderItem
              text="Home"
              section="home"
              onClick={() => setMenuOpen(false)}
            />
            <HeaderItem
              text="About"
              section="about"
              onClick={() => setMenuOpen(false)}
            />
            <HeaderItem
              text="Contact"
              section="contact"
              onClick={() => setMenuOpen(false)}
            />
            <HeaderItem
              text="Courses"
              href="/courses"
              onClick={() => setMenuOpen(false)}
            />
            <HeaderItem
              text="Blog"
              href="/blog"
              onClick={() => setMenuOpen(false)}
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
