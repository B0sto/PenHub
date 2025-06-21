'use client';
import React, { useState } from 'react';
import Logo from '@/public/Logo';
import HeaderItem from './HeaderItem';
import BurgerBar from './BurgerBar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1440px] mx-auto px-6 py-5 flex justify-between items-center text-[#EDEDED] relative z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-x-5 z-50">
        <Logo />
        <p className="text-[18px]">PenHub</p>
      </div>

      {/* Burger (Mobile Only) */}
      <BurgerBar isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-[50px] text-[18px] items-center">
        <HeaderItem text="Home" />
        <HeaderItem text="About" />
        <HeaderItem text="Courses" />
        <HeaderItem text="Contact" />
        <HeaderItem text="Blog" />
      </ul>

      {menuOpen && (
        <ul className="absolute top-full right-6 w-[200px] bg-[#0F0F0F] border border-cyan-500 shadow-[0_0_10px_#00f2ff] text-[18px] rounded-xl py-4 px-6 flex flex-col gap-4 mt-4 transition-all duration-300 md:hidden">
          <HeaderItem text="Home" />
          <HeaderItem text="About" />
          <HeaderItem text="Courses" />
          <HeaderItem text="Contact" />
          <HeaderItem text="Blog" />
        </ul>
      )}
    </nav>
  );
};

export default Header;
