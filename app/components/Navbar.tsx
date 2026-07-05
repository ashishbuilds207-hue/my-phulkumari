"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4 pointer-events-none">
      <div className="flex items-center gap-3 pointer-events-auto">
        <Image
          src="/logo.png"
          alt="PhulKumari"
          width={32}
          height={32}
        />
        <span className="text-[#e50914] text-xl md:text-2xl font-black tracking-tight">
          PhulKumari
        </span>
      </div>
    </nav>
  );
}
