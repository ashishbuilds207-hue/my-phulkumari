import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhulKumari — Watch Movies & TV Shows Online",
  description: "Stream movies and TV shows starring PhulKumari — your Netflix-style home for premium content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-[#141414] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
