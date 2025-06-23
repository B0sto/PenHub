import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aurora from "@/components/Aurora";
import { LanguageProvider } from "@/context/LanguageContext";
import localFont from "next/font/local";
import FontSwitcher from "@/components/fontSwitcher";

const georiganFont = localFont({
  src: [
    {
      path: "../fonts/arial.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myFont",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-english",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PenHub",
  description: "Learn, Enjoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body
        className={`bg-[#08040c] ${georiganFont.variable} ${dmSans.variable}`}
      >
        <LanguageProvider>
          <FontSwitcher />
          <Aurora
            colorStops={["#0f172a", "#1e3a8a", "#3b82f6"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
          <div className="relative z-10"></div>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
