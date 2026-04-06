"use client";
import localFont from 'next/font/local';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const myFont = localFont({
src: '../../public/Jennifer Lynne Bold.ttf',
});

const Header: React.FC = () => {

  
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  

const menuItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "FQAs", href: "#fqas" },
  { label: "CONTACT", href: "#contact" },
];

  useEffect(() => {
  const sections = menuItems.map(item =>
    document.querySelector(item.href)
  );
 
  // detecting active solution on scroll

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = menuItems.findIndex(
            item => item.href === `#${entry.target.id}`
          );
          setActiveIndex(index);
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach(section => {
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-2 sticky top-0 z-[70]">
      <div className="flex justify-between items-center bg-white/70 backdrop-blur-md border border-blue-100 rounded-md px-3 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 relative">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/img_group_1.svg"
            alt="Logo"
            width={22}
            height={22}
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <h1 className={`text-blue-600 ${myFont.className} text-lg sm:text-xl md:text-2xl`}>
            AIRFLOWPRO
          </h1>
        </div>

        {/* Hamburger */}
        <button
          className="block lg:hidden p-2 text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Nav */}
        <nav
          className={`
            ${menuOpen ? "block" : "hidden"}
            lg:block
            absolute lg:relative
            top-full lg:top-auto
            left-0 lg:left-auto
            w-full lg:w-auto
            bg-white/1 lg:bg-transparent
            backdrop-blur-md
            mt-2 lg:mt-0
            rounded-sm
            p-4 lg:p-1
            z-50
          `}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-200 ${
                    activeIndex === index
                      ? "text-2xl font-semibold inline-block bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text text-transparent"
                      : "text-sm sm:text-base text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;