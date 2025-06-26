"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/public/Logo";
import HeaderItem from "./HeaderItem";
import BurgerBar from "./BurgerBar";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggler from "./LanguageToggler";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleClose = () => setMenuOpen(false);
    window.addEventListener("menu-close", handleClose);
    return () => window.removeEventListener("menu-close", handleClose);
  }, []);

  return (
    <>
      <header className="sticky top-0 left-0 w-full z-50 bg-[rgba(7,13,26,0.1)] backdrop-blur-md border-b border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.1)] rounded-b-xl">
        <nav>
          <div className="max-w-[1440px] mx-auto py-5 flex justify-between items-center text-[#EDEDED] px-8 max-[700px]:px-10 max-[700px]:py-3">
            <Link
              href={"/"}
              className="flex items-center gap-x-5 z-50 max-[1200px]:gap-x-4"
            >
              <Logo />
              <p className="text-[20px] max-[1200px]:text-[16px]">PenHub</p>
            </Link>

            <BurgerBar
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />

            <ul className="flex max-[940px]:hidden gap-x-[50px] max-[1200px]:gap-x-[35px] items-center">
              <HeaderItem text={t.navigation.home} section="home" />
              <HeaderItem text={t.navigation.about} section="about" />
              <HeaderItem text={t.navigation.contact} section="contact" />
              <HeaderItem text={t.navigation.courses} href="/courses" />
              <HeaderItem text={t.navigation.blogs} href="/blog" />
              <li>
                <LanguageToggler />
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-[rgba(7,13,26,0.1)] z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          <ul className="fixed top-[80px] right-6 w-[200px] text-white bg-[rgba(7,13,26,0.1)] border border-cyan-500 shadow-[0_0_10px_#00f2ff] text-[18px] rounded-xl py-4 px-6 flex flex-col gap-4 mt-4 transition-all duration-300 z-50 backdrop-blur-md">
            <HeaderItem
              text={t.navigation.home}
              section="home"
              onClick={() => setMenuOpen(false)}
            />
            <HeaderItem
              text={t.navigation.about}
              section="about"
              onClick={() => setMenuOpen(false)}
            />
            <HeaderItem
              text={t.navigation.contact}
              section="contact"
              onClick={() => setMenuOpen(false)}
            />
            <HeaderItem
              text={t.navigation.courses}
              href="/courses"
              onClick={() => setMenuOpen(false)}
            />
            <HeaderItem
              text={t.navigation.blogs}
              href="/blog"
              onClick={() => setMenuOpen(false)}
            />
            <li>
              <LanguageToggler />
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default Header;
