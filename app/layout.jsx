import { Exo_2 } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTrasition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const exoTwo = Exo_2({
  variable: "--font-exo-two",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Faikar's Portfolio ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exoTwo.variable}>
        <Header />
        <StairTransition />
        <PageTrasition >{children}</PageTrasition>
        <Analytics />
      </body>
    </html>
  );
}
