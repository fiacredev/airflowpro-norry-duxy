'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, service } = formData;
    if (!name || !email || !service) {
      alert('Please fill in your name, email, and select a service.');
      return;
    }
    alert(`Thank you, ${name}! We received your request and will be in touch shortly.`);
  };

  return (
    <section className="bg-blue-950 text-white py-20 min-h-screen mt-48 scroll-mt-23 rounded-xl border-t-8 border-blue-500" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <p className="capitalize tracking-[0.3em] text-sm text-white-600 mb-3">Get in Touch</p>
          <h2 className="text-4xl mt-2 mb-2 text-white font-bold">Contact / Get a Quote</h2>
          <p className="text-[#c8e6fc] text-opacity-70">
            Fill out the form and we'll get back to you promptly with a free, no-obligation quote tailored to your needs.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-[#5ab4f0]" />
            <div>
              <strong className="text-[#5ab4f0] uppercase block">Phone</strong>
              <span>(+250) 7945-19927</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-[#5ab4f0]" />
            <div>
              <strong className="text-[#5ab4f0] uppercase block">Email</strong>
              <span>fiacredeveloper@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-6 h-6 text-[#5ab4f0]" />
            <div>
              <strong className="text-[#5ab4f0] uppercase block">Hours</strong>
              <span>Mon–Sat: 7am – 7pm</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-[#5ab4f0]/15 rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[#5ab4f0] uppercase font-semibold text-sm">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Fiacre Engineer"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-md border border-[#5ab4f0]/20 bg-white/7 text-white focus:outline-none focus:ring-2 focus:ring-[#5ab4f0]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-[#5ab4f0] uppercase font-semibold text-sm">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(+250) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-md border border-[#5ab4f0]/20 bg-white/7 text-white focus:outline-none focus:ring-2 focus:ring-[#5ab4f0]"
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="email" className="text-[#5ab4f0] uppercase font-semibold text-sm">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="fiacredeveloper@example.com"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-md border border-[#5ab4f0]/20 bg-white/7 text-white focus:outline-none focus:ring-2 focus:ring-[#5ab4f0]"
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="service" className="text-[#5ab4f0] uppercase font-semibold text-sm">
                Service Type
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="p-3 rounded-md border border-[#5ab4f0]/20 bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-[#5ab4f0]"
              >
                <option value="" disabled>
                  Select a service...
                </option>
                <option value="ventilation">Ventilation / Air Duct Cleaning</option>
                <option value="hvac">HVAC Cleaning & Maintenance</option>
                <option value="dryer">Dryer Duct Cleaning</option>
                <option value="chimney">Chimney Cleaning</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="message" className="text-[#5ab4f0] uppercase font-semibold text-sm">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Describe your situation or ask a question..."
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-md border border-[#5ab4f0]/20 bg-white/7 text-white min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#5ab4f0]"
              />
            </div>
          </div>
          <div className="mt-6 text-right">
            <button
              type="submit"
              className="px-10 py-3 bg-gradient-to-r from-[#1a4b8c] to-[#00b4d8] text-white rounded-md hover:opacity-90 transition"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}