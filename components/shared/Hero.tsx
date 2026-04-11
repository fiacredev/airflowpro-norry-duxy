"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { Button } from "../ui/button";

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

export default function Hero() {

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
    images.find((img) => img.type === "hero")?.url || ""
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 scroll-mt-23 rounded-xl border-t-8 border-blue-500"
      id="home"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {!loading && bgImage && (
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
            loading="eager" 
            decoding="async"
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a1628]/80" />

      {/* Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(45,125,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(45,125,210,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" /> */}

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,180,216,0.18)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <AnimatedSection className="relative text-center max-w-3xl">
        <p className="uppercase tracking-[0.3em] text-[#5ab4f0] text-sm mb-4 opacity-80">
          air quality care.
        </p>

        <h1 className="uppercase font-extrabold leading-[0.95] text-white text-5xl sm:text-6xl md:text-7xl mb-6">
          Clean Air <br />
          <span className="text-[#5ab4f0]">Respire</span>
        </h1>

        <p className="text-[#c8e6fc] text-xl leading-relaxed mb-10">
          Our team provides professional air duct, dryer vent, wall-mounted AC,
          and chimney cleaning services with care and precision.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-[#2d7dd2] hover:bg-[#5ab4f0] text-white px-8 py-6 text-sm tracking-widest uppercase">
            <a href="#contact">FreeQuote</a>
          </Button>

          <Button
            variant="outline"
            className="border border-[#c8e6fc55] text-[#c8e6fc] hover:text-[#5ab4f0] hover:border-[#5ab4f0] px-8 py-6 text-sm tracking-widest uppercase"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}