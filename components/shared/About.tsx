import React from "react";

export default function About() {
  const stats = [
    { number: "250+", label: "Projects Delivered" },
    { number: "120+", label: "Satisfied Clients" },
    { number: "15", label: "Years of Expertise" },
  ];

const points = [
  "We provide effective dryer duct cleaning that enhances safety and efficiency",
  "We ensure fast, reliable, and thorough dryer vent cleaning services",
  "We focus on preventing fire hazards and improving air quality in your home",
  "We guarantee high-quality service with minimal disruption to your routine",
];

  return (
    <div className="flex flex-col md:flex-row gap-12 p-12 bg-gradient-to-b from-blue-900 to-blue-800 rounded-2xl text-white mt-48 py-24 px-6" id="about">
      
      {/* Stats Cards */}
      <div className="flex flex-wrap gap-6 md:w-1/3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-8 bg-blue-700/40 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.5)] transform transition-transform hover:-translate-y-2 hover:scale-105"
          >
            <span className="text-4xl font-bold">{stat.number}</span>
            <span className="text-sm mt-2 text-blue-200">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="md:w-2/3 flex flex-col justify-center bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text text-transparent">
        <h2 className="text-3xl font-extrabold mb-4 text-white">About Us</h2>
        <p className="text-[#c8e6fc] mb-6">
            We provide dynamic, customer-focused cleaning services that enhance the safety and efficiency of your home. 
            With years of expertise, we combine precision, innovation, and reliability to deliver high-performing solutions for both dryer ducts and chimneys. 
            Our services improve air quality, prevent fire hazards, and extend the lifespan of your appliances while keeping your home cozy, clean, and safe.
        </p>
        <ul className="list-none space-y-3">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-[#5ab4f0] font-medium text-[#c8e6fc]"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}