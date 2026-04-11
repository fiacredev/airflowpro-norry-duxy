"use client";
import React, { useEffect, useState } from "react";

const API = "http://localhost:5000";

type Promotion = {
  _id: string;
  title: string;
  description: string;
  discount: string;
  active: boolean;
};

export default function Promotions() {

  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const res = await fetch(`${API}/api/services/promotions`);
        const data = await res.json();
        setPromotions(data);
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    };

    fetchPromotions();
  }, []);

  return (
    <section
      className="bg-white py-24 px-6 rounded-xl border-t-8 border-blue-500 scroll-mt-23"
      id="promotions"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="uppercase tracking-[0.3em] text-sm text-[#2d7dd2] mb-3">
          Limited time offers
        </p>

        <h2 className="uppercase font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 text-gray-100">
          Promotions
        </h2>

        <p className="text-gray-500 max-w-xl mb-12 leading-relaxed font-serif text-lg">
          Take advantage of our latest deals and save on professional cleaning services, then we fix it for you.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions
            .filter((item) => item.active)
            .map((item) => (
              <div
                key={item._id}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Top gradient */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-sky-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.discount}
                </div>

                {/* Title */}
                <h3 className="capitalize font-bold text-lg mb-2 text-blue-500">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* CTA */}
                <a
                href="#contact"
                className="mt-2 inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                Claim Offer
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}