import type { Metadata } from "next";
import { Roboto } from "next/font/google";
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
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
