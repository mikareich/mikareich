import Container from "@/components/Container";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/global.css";

import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Mika Reich",
  description:
    "Explore the digital portfolio of Mika Reich, an 18-year-old web developer from Germany. Dive into projects, learn about his skills, and get in touch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} font-mono bg-raisin-black-200 flex flex-col min-h-[100dvh] overflow-x-hidden`}
      >
        <Container>
          <NavBar />
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
