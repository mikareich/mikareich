import "./globals.css";
import { Fira_Code, Space_Mono } from "next/font/google";
import NavBar from "./NavBar";
import Footer from "./Footer";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

const headingFont = Fira_Code({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

const FONTS = [bodyFont.variable, headingFont.variable].join(" ");

export const metadata: Metadata = {
  title: "Mika Reich",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${FONTS} bg-gray-400`}>
          <div className="container mx-auto flex min-h-dvh flex-col gap-5 font-body text-gray-200 sm:gap-10">
            <NavBar />

            {children}

            <Footer />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
