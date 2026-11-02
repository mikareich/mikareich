import "~/styles/globals.css";

import { clsx } from "clsx";
import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { NoiseBackground } from "~/components/icons/noise-background";
import { Footer } from "~/components/navigation/footer";
import { NavBar } from "~/components/navigation/nav-bar";
import { LAYOUT } from "~/styles/layout.css";
import { DARK_THEME, LIGHT_THEME } from "~/styles/theme.css";
import { TYPOGRAPHY } from "~/styles/typography.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--theme-font-heading",
  weight: "variable",
});

const bodyFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--theme-font-body",
  weight: "variable",
});

export const metadata: Metadata = {
  icons: {
    icon: "/icons/favicon.ico",
  },
  title: "Mika Reich",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html
        className={clsx(
          bodyFont.variable,
          headingFont.variable,
          DARK_THEME,
          TYPOGRAPHY.BODY,
        )}
        lang="en"
      >
        <body className={LAYOUT.CONTAINER}>
          <NoiseBackground />

          <NavBar />

          {children}

          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
