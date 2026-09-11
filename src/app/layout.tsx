import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code, Space_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "~/components/navigation/footer";
import { NavBar } from "~/components/navigation/nav-bar";

const headingFont = Fira_Code({
  subsets: ["latin"],
  variable: "--font-portfolio-heading",
  weight: "variable",
});

const bodyFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-portfolio-body",
  weight: ["400", "700"],
});

const FONTS = [bodyFont.variable, headingFont.variable].join(" ");

export const metadata: Metadata = {
  icons: {
    icon: "/icons/favicon.ico",
  },
  title: "Mika Reich",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html className={FONTS} lang="en">
        <head>
          {/*<script
            data-website-id="adfb98de-72de-4522-a6b3-3d10bbd736e3"
            defer
            src="https://cloud.umami.is/script.js"
          />*/}
        </head>

        <body className="bg-theme-bg px-4 sm:px-8 font-body pt-10 text-theme-text min-h-dvh container mx-auto space-y-5 sm:space-y-10">
          <NavBar />

          {children}

          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
