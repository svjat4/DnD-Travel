"use client";

import { useState, useEffect } from "react";
import { services, Service } from "../lib/services";
import { getWhatsAppUrl } from "../lib/whatsapp";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Explore Bali", "Adventure", "Transport", "Entertainment", "Private Experiences"];
  
  const filteredServices = filter === "All" 
    ? services 
    : services.filter(s => s.category === filter);

  // Reset pilihan foto utama ke index 0 setiap kali modal dibuka untuk layanan baru
  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setActiveImageIndex(0);
  };

  // Pastikan ada fallback jika array images belum diisi di lib/services.ts
  const currentImages = selectedService 
    ? (selectedService.images && selectedService.images.length > 0 ? selectedService.images : [selectedService.image])
    : [];

  return (
    <section id="explore" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4">Our Experiences & Services</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Discover Bali through our carefully curated experiences. Click on any service to learn more.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? "bg-brand-green text-white" 
                  : "bg-white text-brand-charcoal hover:bg-brand-beige border border-brand-beige"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-brand-beige">
              <div className="h-48 overflow-hidden relative">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-brand-dark/80 text-brand-cream text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  {service.category}
                </span>
              </div>
              <div className="p-5 flex flex-col h-48">
                <h3 className="text-xl font-serif text-brand-dark mb-2">{service.name}</h3>
                <p className="text-sm text-brand-muted line-clamp-2 mb-4 flex-grow">{service.shortDescription}</p>
                <button 
                  onClick={() => handleOpenModal(service)}
                  className="w-full py-2 border border-brand-green text-brand-green rounded-md hover:bg-brand-green hover:text-white transition-colors text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP DENGAN MULTI-IMAGE GALLERY */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white rounded-full p-2 text-brand-dark backdrop-blur-md shadow-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            {/* AREA FOTO UTAMA DI MODAL */}
            <div className="relative h-64 md:h-72 w-full bg-brand-dark">
              <img 
                src={currentImages[activeImageIndex]} 
                alt={selectedService.name} 
                className="w-full h-full object-cover transition-all duration-300" 
              />
              
              {/* THUMBNAILS (PILIHAN FOTO KECIL DI DALAM MODAL) */}
              {currentImages.length > 1 && (
                <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-2 bg-black/40 p-2 rounded-xl backdrop-blur-md">
                  {currentImages.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? "border-brand-gold scale-105" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={imgUrl} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* DESKRISI DAN DETAIL */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <span className="text-sm text-brand-gold font-medium mb-2 block uppercase tracking-wider">{selectedService.category}</span>
              <h2 className="text-3xl font-serif text-brand-dark mb-4">{selectedService.name}</h2>
              <p className="text-brand-charcoal mb-6 leading-relaxed">{selectedService.description}</p>
              
              <h4 className="font-semibold text-brand-dark mb-3">Highlights:</h4>
              <ul className="space-y-2 mb-8">
                {selectedService.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-brand-muted text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <a 
                href={getWhatsAppUrl(selectedService.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-brand-green text-white py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors"
              >
                Check Availability via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}