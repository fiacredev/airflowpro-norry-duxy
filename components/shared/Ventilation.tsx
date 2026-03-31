import React from "react";
import { ventilationServices } from "@/constants";

export default function Ventilation() {
  return (
    <section className="bg-white py-24 px-6 rounded-xl border-t-8 border-blue-500 scroll-mt-23" id="ventilation">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="uppercase tracking-[0.3em] text-sm text-[#2d7dd2] mb-3">
          Ventilation
        </p>

        <h2 className="uppercase font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 text-gray-100">
          Ventilation Solutions
        </h2>

        <p className="text-gray-500 max-w-xl mb-12 leading-relaxed font-serif text-xl">
          Innovative ventilation solutions for homes, offices, and industrial spaces to ensure optimal airflow and energy efficiency.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventilationServices.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Top gradient */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-sky-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-5 group-hover:bg-blue-100 transition">
                  <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition" />
                </div>

                {/* Title */}
                <h3 className="capitalize font-bold text-lg mb-2 text-blue-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
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