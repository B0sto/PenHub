"use client";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-8 flex justify-center items-center px-3 text-center">
      <div className="text-[20px] text-gray-300 max-[940px]:text-[16px] max-[610px]:text-[14px] max-[472px]:flex flex-col">
        <span>
          &copy; {new Date().getFullYear()} PenHub.
        </span>
        <span> {t.footer.rights}</span>
      </div>
    </footer>
  );
};

export default Footer;
