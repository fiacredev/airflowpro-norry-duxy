"use client";

import { useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type Service = {
  name: string;
  description: string;
  price: number;
  status: "Active" | "Inactive";
  image: string;
};

type ServiceSectionProps = {
  service: Service;
};

export default function ServiceSection({ service }: ServiceSectionProps) {
  const [showImage, setShowImage] = useState(true);

  const handleBook = () => {
    alert(`Fill the form below at the bottom to book: ${service.name}`);
  };

  return (
    <section className="w-full py-10 md:py-20 bg-gray-100 mt-10 mb-10 rounded-xl border-t-8 border-blue-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-10">
        
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500">{service.name}</h2>
          <p className="text-gray-500 mt-2"><ReactMarkdown>{service.description}</ReactMarkdown></p>
          <p className="mt-2 font-semibold text-yellow-500">${service.price ?? "N/A"}</p>
          <p className={`mt-2 text-sm ${service.status === "Active" ? "text-green-500" : "text-gray-400"}`}>
            {service.status}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-4">
            <button
              onClick={handleBook}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Book

            </button>

            <button
              onClick={() => setShowImage(!showImage)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              {showImage ? "Hide Image" : "Show Image"}
            </button>
          </div>
        </div>

        {/* Image */}
        {showImage && (
          <div className="flex-1 w-full">
            <div className="relative w-full h-64 sm:h-80 md:h-64 lg:h-72 xl:h-96">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}