import Hero from "../components/hero";
import ServicesSection from "../components/services-section";
import { getWhatsAppUrl } from "../lib/whatsapp";

export default function Home() {
  return (
    <main id="home" className="w-full">
      <Hero />

      {/* Intro Section */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">Welcome to Bali</h2>
        <h3 className="text-3xl md:text-5xl font-serif text-brand-dark mb-6">Your Bali Experience Starts Here</h3>
        <p className="text-lg text-brand-muted leading-relaxed">
          Discover Bali through tours, adventures, transportation, entertainment and private experiences. 
          We make it easy to plan your Bali journey and connect with the experiences that fit your trip.
        </p>
      </section>

      {/* Services Component */}
      <ServicesSection />

      {/* ABOUT SECTION (Digabung dengan Why Us & How It Works) */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Bagian Profil Perusahaan (Baru Ditambahkan) */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-brand-dark mb-6">About D&D Travel & Tour</h3>
            <p className="text-lg text-brand-muted leading-relaxed">
              Based in the heart of Bali, D&D Travel & Tour is dedicated to showing you the true essence of the Island of the Gods. 
              We specialize in curating unforgettable journeys for international travelers—from breathtaking cultural tours and thrilling adventures to exclusive private events. 
              With our deep local knowledge and commitment to exceptional service, we ensure your Bali experience is seamless, authentic, and tailored entirely to your way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 border-t border-brand-beige pt-16">
            
            {/* Why D&D */}
            <div>
              <h3 className="text-3xl font-serif text-brand-dark mb-8">Why Travel With D&D?</h3>
              <div className="space-y-6">
                {[
                  { title: "Local Knowledge", desc: "Discover Bali with local insight." },
                  { title: "Easy Booking", desc: "Plan your experience directly through WhatsApp." },
                  { title: "Flexible Experiences", desc: "Choose experiences that fit your travel plans." },
                  { title: "Personal Service", desc: "Friendly assistance throughout your Bali experience." }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-brand-beige flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-brand-dark">{item.title}</h4>
                      <p className="text-brand-muted mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-brand-cream p-8 md:p-12 rounded-2xl border border-brand-beige">
              <h3 className="text-3xl font-serif text-brand-dark mb-8">How It Works</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <span className="text-4xl font-serif text-brand-gold opacity-50 mr-6">01</span>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-dark">Explore</h4>
                    <p className="text-brand-muted mt-1">Find an experience that interests you from our catalog.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-4xl font-serif text-brand-gold opacity-50 mr-6">02</span>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-dark">Chat</h4>
                    <p className="text-brand-muted mt-1">Contact us directly through WhatsApp to check availability.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-4xl font-serif text-brand-gold opacity-50 mr-6">03</span>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-dark">Enjoy</h4>
                    <p className="text-brand-muted mt-1">We help arrange everything so you can focus on your Bali experience.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Private Experiences Subtle Section */}
      <section id="private" className="py-20 bg-brand-dark text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">Exclusive</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">Looking for something more personal?</h3>
          <p className="text-lg text-brand-beige mb-8">
            We can help arrange private experiences, wellness therapies, and event services for special occasions in Bali. 
            From private bartenders to villa entertainment, let us elevate your stay.
          </p>
          <a 
            href={getWhatsAppUrl("Private Experiences Arrangement")} 
            target="_blank" rel="noopener noreferrer"
            className="inline-block border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark px-8 py-3 rounded-full font-medium transition-colors"
          >
            Inquire About Private Events
          </a>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-brand-cream pt-20 pb-10 border-t border-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-4xl font-serif text-brand-dark mb-6">Let's Plan Your Bali Experience</h3>
              <p className="text-brand-muted mb-8 max-w-md">Reach out to us via WhatsApp to start planning your perfect itinerary. We're here to help.</p>
              <a 
                href={getWhatsAppUrl()}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center bg-brand-green text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark transition-colors"
              >
                Chat on WhatsApp Now
              </a>
            </div>
            <div className="space-y-4 text-brand-charcoal">
              <h4 className="font-bold text-xl mb-4">D&D Travel & Tour</h4>
              <p>Jl. Sulatri No. 168, Penatih, East Denpasar</p>
              <p>Bali, Indonesia</p>
              <p className="pt-4"><strong>WhatsApp:</strong> +62 878-6740-47822</p>
              <p><strong>Instagram:</strong> @balitravel.tour</p>
              <p className="text-sm text-brand-muted">Facebook: Coming Soon</p>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-brand-beige text-brand-muted text-sm">
            <p>Explore Bali. Your way.</p>
            <p className="mt-2">© 2026 D&D Travel & Tour. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}