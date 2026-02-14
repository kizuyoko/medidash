import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";

const work_Sans = Work_Sans({
  variable: "--font-title",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediDash",
  description: "Medical Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work_Sans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
