"use client"

import { useEffect, useState } from "react";

type ImageType = {
  url: string;
  type: string;
};

function optimizeCloudinaryUrl(url: string, width: number = 1600): string {
  if (!url.includes("res.cloudinary.com")) return url;

  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,w_${width}/`
  );
}

export default function About() {

    const API = "http://localhost:5000";
  
    const [images, setImages] = useState<ImageType[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchImages() {
        try {
          const res = await fetch(`${API}/api/images`);
          const data: ImageType[] = await res.json();
  
          setImages(data);
        } catch (error) {
          console.error("Failed to load images:", error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchImages();
    }, []);
  
    const bgImage = optimizeCloudinaryUrl(
      images.find((img) => img.type === "about")?.url || ""
    );
    
  const stats = [
    { number: "250+", label: "Projects Delivered" },
    { number: "120+", label: "Satisfied Clients" },
    { number: "15", label: "Years of Expertise" },
  ];

  const points = [
    "We provide effective dryer duct cleaning that enhances safety and efficiency",
    "We ensure fast, reliable, and thorough dryer vent cleaning services",
    "We make your home safe and warm with expert chimney Sweeping and inspection.",
    "We guarantee high-quality service with minimal disruption to your routine",
  ];

  return (
    <div
      className="relative flex flex-col md:flex-row gap-12 p-12 rounded-2xl text-white mt-25 py-24 px-6 scroll-mt-23 border-t-8 border-blue-400 mb-25 overflow-hidden"
      id="about"
    >

      {/* background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage || "/images/default.png"}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

      {/* content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row gap-12 w-full">

        {/* stats Cards */}
        <div className="flex flex-wrap gap-6 md:w-1/3">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-8 bg-blue-500/20 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.25)] 
              transform transition-transform hover:-translate-y-2 hover:scale-105"
            >
              <span className="text-4xl font-bold">{stat.number}</span>
              <span className="text-sm mt-2 text-blue-200">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold mb-4">About Us</h2>

          <p className="text-[#c8e6fc] mb-6">
          We provide customer-focused cleaning services that enhance the safety, efficiency, 
          and comfort of your home. With years of expertise, we deliver reliable solutions for 
          air duct cleaning, dryer vent cleaning, wall-mounted AC cleaning, and chimney sweeping. 
          Our services improve air quality, prevent fire hazards, and extend the lifespan of your 
          appliances—keeping your home cozy, clean, and safe
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
    </div>
  );
}