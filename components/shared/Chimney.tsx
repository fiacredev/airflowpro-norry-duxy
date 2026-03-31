import React from "react";
import { chimneyServices } from "@/constants";

export default function Chimney() {
  return (
    <section className="bg-blue-950 py-11 pb-48 px-6 scroll-mt-23 rounded-xl border-t-8 border-blue-500" id="chimney">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="capitalize tracking-[0.3em] text-sm text-blue-300 mb-3">
          Keep Your Home Warm and Safe with Professional Chimney Cleaning
        </p>

        <h2 className="uppercase font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 text-white">
          Chimney
        </h2>

        <p className="text-blue-200 max-w-xl mb-12 leading-relaxed font-serif text-xl">
          Safe and efficient fireplaces start with a clean chimney. Our sweeping
          services protect your home from soot buildup and fire hazards.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chimneyServices.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative bg-white/5 border border-blue-400/20 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"
              >
                {/* Top gradient */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-sky-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-400/10 mb-5 group-hover:bg-blue-400/20 transition">
                  <Icon className="w-6 h-6 text-blue-300 group-hover:text-white transition" />
                </div>

                {/* Title */}
                <h3 className="capitalize font-bold text-lg mb-2 text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-blue-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}