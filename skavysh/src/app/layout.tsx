import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import "../styles/_variables.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/container/container";
import MainContact from "@/components/main/contact/main-contact";

const noto = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skavysh",
  description:
    "Portfolio of a UI/UX Designer focused on creating intuitive, user-centered digital experiences. Explore case studies in user research, wireframing, prototyping, and interface design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.variable} font-sans`} id="body">
        <Container>
          <Header />
        </Container>
        {children}
        <Container>
          <MainContact />
        </Container>
        <Container>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
