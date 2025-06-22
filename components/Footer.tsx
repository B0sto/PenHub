import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5  py-8 flex justify-center items-center">
      <div className="text-[20px] text-gray-300 max-[940px]:text-[16px] max-[610px]:text-[14px]">
        &copy; {new Date().getFullYear()} PenHub. All rights resersed
      </div>
    </footer>
  );
};

export default Footer;
