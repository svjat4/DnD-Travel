"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Tampilkan loading selama 1.5 detik, lalu mulai menghilang perlahan
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Tunggu 0.5 detik untuk efek transisi sebelum benar-benar dihapus
      setTimeout(() => setIsLoading(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Jika loading sudah selesai, jangan tampilkan apa-apa
  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-brand-cream transition-opacity duration-500 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="animate-pulse flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="Loading D&D Travel & Tour..."
          width={240}
          height={80}
          priority
          className="h-20 md:h-24 w-auto object-contain mb-4"
        />
        <div className="w-12 h-1 bg-brand-beige rounded-full overflow-hidden">
          <div className="w-full h-full bg-brand-green animate-[translate_1.5s_infinite_ease-in-out]" style={{ transformOrigin: "left" }}></div>
        </div>
      </div>
    </div>
  );
}