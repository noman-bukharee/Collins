import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/Header/Navbar/page";
import '../styles/index.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collins Bookstore",
  description: "Let's Publish your books on Collins Bookstore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} `}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
