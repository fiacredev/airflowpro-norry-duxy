"use client";

import { useState, useEffect } from "react";
import ServiceSection from "./Services";

type Service = {
  _id: string;
  name: string;
  description: string;
  price: number;
  status: "Active" | "Inactive";
  image: string;
};

const API = "https://airflow-backend-a2bm.onrender.com";

export default function ServicesPage() {
    
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API}/api/services/merged-services`);
        const data: Service[] = await res.json();
        console.log("Fetched services:", data);
        setServices(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading services...</p>;

  return (
    <div id="services" className="scroll-mt-23">
        <h2 className="text-4xl font-bold uppercase text-blue-500">Our Services</h2> 
        {services.map(service => (
        <ServiceSection key={service._id} service={service} />
        ))}
    </div>
    );
}