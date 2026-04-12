'use client';

import React from 'react';
import localFont from 'next/font/local';
import { LogIn } from 'lucide-react';

const myFont = localFont({
src: '../../public/Jennifer Lynne Bold.ttf',
});

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white py-6 mt-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#c8e6fc] text-opacity-70">
        <p className="text-center sm:text-left">
                © 2026{" "}
            <span className={`text-[#5ab4f0] ${myFont.className}`}>
                AirFlow Pro
            </span>{" "}
                All Rights Reserved. Clean air, whenever.
        </p>

          <a
            href="/admin"
            className="flex items-center gap-2 text-[#5ab4f0] hover:text-white transition"
          >
            <LogIn className="w-5 h-5" />
            <span className="hidden sm:inline">NORRYDUXY</span>
          </a>
  </div>
</footer>
  );
}