'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const API = "https://airflow-backend-a2bm.onrender.com";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, service, phone, message } = formData;
    if (!name || !email || !service) {
      alert('Veuillez indiquer votre nom, votre adresse courriel et sélectionner un service. ');
      return;
    }
    setIsSubmitting(true); // start loading
    try {
      const response = await fetch(`${API}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject: service, message })
      });

      if (!response.ok) {
        const data = await response.json();
        alert(`Error: ${data.error || 'something went wrong'}`);
        setIsSubmitting(false);
        return;
      }
      alert(`Merci, ${name}! Nous avons reçu votre demande.`);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Échec de l’envoi du message. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false); // stop loading
    }
  };

  return (
    <section className="bg-blue-950 text-white py-20 min-h-screen mt-48 scroll-mt-23 rounded-xl border-t-8 border-blue-500" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        {/* header */}
        <div className="mb-8">
          <p className="capitalize tracking-[0.3em] text-sm text-white-600 mb-3">Entrer En Contact</p>
          <h2 className="text-4xl mt-2 mb-2 text-white font-bold">Contactez-nous / Demandez un devis</h2>
          <p className="text-[#c8e6fc] text-opacity-70">
            Remplissez le formulaire ci-dessous et nous vous répondrons rapidement avec une soumission gratuite, 
            sans engagement, adaptée à vos besoins.
          </p>
        </div>

        {/* contact Info */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-[#5ab4f0]" />
            <div>
              <strong className="text-[#5ab4f0] uppercase block">TÉLÉPHONE</strong>
              <span>(438) 403 – 7885</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-[#5ab4f0]" />
            <div>
              <strong className="text-[#5ab4f0] uppercase block">COURRIEL</strong>
              <span>info@pureairnettoyage.ca</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-6 h-6 text-[#5ab4f0]" />
            <div>
              <strong className="text-[#5ab4f0] uppercase block">HEURES D’OUVERTURE</strong>
              <span>LUNDI – SAMEDI : 7H À 20H</span><br />
              <span>DIMANCHE: 8H À 17H</span>
            </div>
          </div>
        </div>

        {/* contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-[#5ab4f0]/15 rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[#5ab4f0] uppercase font-semibold text-sm">
                NOM COMPLET
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
                NUMÉRO DE TÉLÉPHONE
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(438) 403 – 7885"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-md border border-[#5ab4f0]/20 bg-white/7 text-white focus:outline-none focus:ring-2 focus:ring-[#5ab4f0]"
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="email" className="text-[#5ab4f0] uppercase font-semibold text-sm">
                ADRESSE COURRIEL
              </label>
              <input
                id="email"
                type="email"
                placeholder="f.uwimpuhwe@alustudent.com"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-md border border-[#5ab4f0]/20 bg-white/7 text-white focus:outline-none focus:ring-2 focus:ring-[#5ab4f0]"
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="service" className="text-[#5ab4f0] uppercase font-semibold text-sm">
                SERVICE DEMANDÉ
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="p-3 rounded-md border border-[#5ab4f0]/20 bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-[#5ab4f0]"
              >
                <option value="" disabled>
                  Choisissez un service...
                </option>
                <option value="Nettoyage des conduits d’air">Nettoyage des conduits d’air</option>
                <option value="Nettoyage de conduit de sécheuse">Nettoyage de conduit de sécheuse</option>
                <option value="Nettoyage de climatiseur">Nettoyage de climatiseur</option>
                <option value="Ramonage de cheminée">Ramonage de cheminée</option>
                <option value="Multiple Services multiples">Services multiples</option>
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="message" className="text-[#5ab4f0] uppercase font-semibold text-sm">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Décrivez votre besoin (type de service, superficie, problème rencontré, etc.) afin que nous puissions vous fournir une soumission précise. "
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-md border border-[#5ab4f0]/20 bg-white/7 text-white min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#5ab4f0]"
              />
            </div>
          </div>
          <div className="mt-6 text-right">
            <button
              type="submit"
              disabled={isSubmitting} // disable while sending
              className={`px-10 py-3 bg-gradient-to-r from-[#1a4b8c] to-[#00b4d8] text-white rounded-md hover:opacity-90 transition ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'SEND REQUEST →'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}