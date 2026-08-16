"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppUrl } from "../lib/whatsapp";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Explore", href: "#explore" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Gambar - SUDAH DIPERBESAR */}
          <Link href="#home" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="D&D Travel & Tour"
              width={240}       /* Resolusi gambar diperbesar */
              height={80}       /* Resolusi gambar diperbesar */
              priority
              className="h-16 md:h-[70px] w-auto object-contain" /* Tampilan diperbesar hampir seukuran navbar */
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-brand-charcoal hover:text-brand-green transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-dark transition-colors shadow-sm"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-green focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-beige">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-brand-charcoal hover:text-brand-green hover:bg-brand-beige rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-brand-green text-white px-5 py-3 rounded-md text-base font-medium hover:bg-brand-dark transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}