"use client";

import { useState, useEffect } from "react";
import { getWhatsAppUrl } from "../lib/whatsapp";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000",
    title: "Discover Bali Your Way",
    subtitle: "Tours, adventures and unforgettable experiences across Bali.",
  },
  {
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2000",
    title: "Experience the Island of the Gods",
    subtitle: "From cultural journeys to exciting island adventures.",
  },
  {
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2000",
    title: "Your Bali Journey Starts Here",
    subtitle: "Simple booking. Local experiences. Unforgettable moments.",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-brand-dark">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark Overlay */}
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        {/* Tambahan !text-white agar warna global tidak menimpanya */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif !text-white mb-6 drop-shadow-2xl max-w-4xl">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl !text-white mb-10 max-w-2xl drop-shadow-xl font-medium">
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#explore"
            className="px-8 py-3 bg-brand-green !text-white rounded-full font-medium hover:bg-brand-dark transition-colors"
          >
            Explore Bali
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-brand-dark rounded-full font-medium hover:bg-brand-cream transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}