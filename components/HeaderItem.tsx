"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  text: string;
  section?: string;
  href?: string;
  onClick?: () => void; 
};

const HeaderItem: React.FC<Props> = ({ text, section, href, onClick }) => {
  const pathname = usePathname();
  const router = useRouter();

  if (href) {
    return (
      <li
        onClick={onClick}
        className="text-[20px] hover:text-cyan-400 transition-all duration-200 cursor-pointer"
      >
        <Link href={href}>{text}</Link>
      </li>
    );
  }

  const handleClick = () => {
    if (pathname === "/") {
      const el = document.getElementById(section || "");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/?scroll=${section}`);
    }

    onClick?.();
  };

  return (
    <li
      onClick={handleClick}
      className="text-[20px] hover:text-cyan-400 transition-all duration-200 cursor-pointer"
    >
      {text}
    </li>
  );
};

export default HeaderItem;
