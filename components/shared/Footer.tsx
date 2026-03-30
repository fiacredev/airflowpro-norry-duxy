'use client';

import React from 'react';
import localFont from 'next/font/local';

const myFont = localFont({
src: '../../public/Jennifer Lynne Bold.ttf',
});

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white py-6 mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm text-[#c8e6fc] text-opacity-70">
        <p>
          © 2026 <span className={`text-[#5ab4f0] ${myFont.className} `}>AirFlow Pro</span> All Rights Reserved. Clean air, every time.
        </p>
      </div>
    </footer>
  );
}