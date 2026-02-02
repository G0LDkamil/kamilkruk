import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Image from 'next/image'
import {Github, Instagram, Youtube} from "lucide-react"
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamil Kruk 🐦‍⬛",
  description: "Zobacz moje projekty z postów w Social Mediach!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${roboto.variable} antialiased bg-kruk-100`}>
        <nav className="flex items-center w-full my-5 flex-col gap-5">
          <Image className="w-1/6 aspect-square" src={"/logo.svg"} width={100} height={100} alt="logo" />
          <div className="flex flex-row gap-2 text-kruk-700 w-1/6">
            <Github className="flex-1 w-8 h-8" />
            <Instagram className="flex-1 w-8 h-8" />
            <Youtube className="flex-1 w-8 h-8" />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
