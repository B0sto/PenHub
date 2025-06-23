import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aurora from "@/components/Aurora";

export const metadata: Metadata = {
  title: "PenHub",
  description: "Learn, Enjoy",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#08040c] ${dmSans.className}`}>
        <Aurora
          colorStops={["#0f172a", "#1e3a8a", "#3b82f6"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="relative z-10">

        </div>
        <Header />
        {children}
        <Footer />x
      </body>
    </html>
  );
}
