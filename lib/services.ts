export type Service = {
  id: string;
  name: string;
  category: string;
  image: string;      // Foto sampul utama untuk kartu
  images: string[];   // Kumpulan foto galeri untuk modal detail
  shortDescription: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  // EXPLORE BALI
  { 
    id: "bali-tours", 
    name: "Bali Tours", 
    category: "Explore Bali", 
    image: "/images/service/nusapenida.jpg", 
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000",
      "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?q=80&w=1000",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000"
    ],
    shortDescription: "Discover the best destinations across Bali.", 
    description: "Customizable full-day and half-day tours exploring Bali's most iconic landscapes, temples, and cultural sites.", 
    highlights: ["Customizable itinerary", "Professional driver", "Comfortable vehicle"] 
  },
  { 
    id: "temple-tour", 
    name: "Temple Tour", 
    category: "Explore Bali", 
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000", 
    images: [
      "/images/service/temple.jpg",
      "/images/service/temple2.jpg",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000"
    ],
    shortDescription: "Visit Bali's most sacred and beautiful temples.", 
    description: "Experience the spiritual side of Bali with guided visits to magnificent sea temples and majestic mountain shrines.", 
    highlights: ["Cultural insights", "Scenic photography", "Respectful guidance"] 
  },
  { 
    id: "coffee-plantation", 
    name: "Coffee Plantation", 
    category: "Explore Bali", 
    image: "/images/service/cofe.jpg", 
    images: [
      "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000",
      "/images/service/cofe1.jpg0",
      "/images/service/cofe2.jpg"
    ],
    shortDescription: "Taste authentic Balinese coffee and learn the process.", 
    description: "Walk through lush plantations, learn about traditional coffee roasting, and taste the famous Luwak coffee.", 
    highlights: ["Coffee tasting session", "Luwak coffee experience", "Jungle swing access"] 
  },
  { 
    id: "golf", 
    name: "Golf Experience", 
    category: "Explore Bali", 
    image: "/images/service/golf.jpg", 
    images: [
      "/images/service/golf2.webp",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1000",
      "/images/service/golf3.jpg"
    ],
    shortDescription: "Play on world-class tropical golf courses.", 
    description: "Enjoy a premium golfing experience surrounded by ocean views or lush mountain scenery.", 
    highlights: ["Premium courses", "Equipment rental assistance", "Caddy service arrangement"] 
  },
  { 
    id: "bali-sunrise-jeep", 
    name: "Bali Sunrise Jeep Tour", 
    category: "Explore Bali", 
    image: "/images/service/jeep.jpg", 
    images: [
      "/images/service/jeep1.jpg",
      "/images/service/jeep2.webp",
      "/images/service/jeep3.jpg"
    ],
    shortDescription: "Witness the sunrise from an exciting jeep adventure.", 
    description: "Experience Bali's sunrise and scenic landscapes with an exciting 4x4 jeep adventure up Mount Batur.", 
    highlights: ["Sunrise viewpoints", "Volcanic black sand", "Photography spots"] 
  },

  // ADVENTURE
  { 
    id: "rafting", 
    name: "Rafting", 
    category: "Adventure", 
    image: "/images/service/rafting.jpg", 
    images: [
      "/images/service/rafting.jpg",
      "/images/service/rafting1.jpg",
      "/images/service/raftin2.webp"
    ],
    shortDescription: "Thrilling river rafting through jungle gorges.", 
    description: "Navigate exciting rapids on the Ayung or Telaga Waja river, surrounded by breathtaking tropical forests.", 
    highlights: ["Professional guides", "Safety equipment", "Buffet lunch included"] 
  },
  { 
    id: "atv", 
    name: "ATV Adventure", 
    category: "Adventure", 
    image: "/images/service/atv.jpg", 
    images: [
      "/images/service/atv1.webp",
      "/images/service/atv2.jpg",
      "/images/service/atv3.jpg"
    ],
    shortDescription: "Ride through rice terraces, mud tracks, and caves.", 
    description: "An adrenaline-pumping ride exploring Bali's hidden tracks, waterfalls, and traditional villages on an ATV.", 
    highlights: ["Single or tandem ride", "Mud tracks & tunnels", "Safety briefing"] 
  },
  { 
    id: "water-sports", 
    name: "Water Sports", 
    category: "Adventure", 
    image: "/images/service/watersport.jpg", 
    images: [
      "/images/service/watersport1.jpg",
      "/images/service/watersport2.jpg",
      "/images/service/watersport.jpg"
    ],
    shortDescription: "Jet ski, parasailing, and more at Tanjung Benoa.", 
    description: "Enjoy the best marine activities including banana boats, jet skiing, and sea walking in crystal clear waters.", 
    highlights: ["Multiple activity packages", "Instructor guided", "Safety gear provided"] 
  },

  // TRANSPORT
  { 
    id: "open-trip", 
    name: "Open Trip", 
    category: "Transport", 
    image: "/images/service/ot.jpg", 
    images: [
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1000",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000"
    ],
    shortDescription: "Join group tours to popular destinations.", 
    description: "A budget-friendly way to explore Bali by joining other travelers on planned routes.", 
    highlights: ["Cost-effective", "Meet new people", "Pre-planned routes"] 
  },
  { 
    id: "car-rental", 
    name: "Car Rental", 
    category: "Transport", 
    image: "/images/service/car.jpg", 
    images: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000"
    ],
    shortDescription: "Flexible transport with a local driver.", 
    description: "Rent a comfortable, air-conditioned vehicle with an experienced English-speaking driver to explore at your own pace.", 
    highlights: ["Clean vehicles", "English-speaking driver", "Flexible timing"] 
  },

  // ENTERTAINMENT
  { 
    id: "kecak-dance", 
    name: "Kecak Dance", 
    category: "Entertainment", 
    image: "/images/service/kecak.webp", 
    images: [
      "/images/service/kecak1.jpg",
      "/images/service/kecak.webp",
      "/images/service/kecak2.jpg"
    ],
    shortDescription: "Traditional fire dance at sunset.", 
    description: "Watch the mesmerizing Kecak Fire Dance performed against the stunning backdrop of a clifftop sunset.", 
    highlights: ["Uluwatu or Melasti location", "Sunset views", "Cultural storytelling"] 
  },
  { 
    id: "beach-club", 
    name: "Beach Club", 
    category: "Entertainment", 
    image: "/images/service/beach.jpeg", 
    images: [
      "/images/service/beach1.jeg",
      "/images/service/beach2.jpg",
      "/images/service/beach.jpeg"
    ],
    shortDescription: "Relax at Bali's most iconic beach clubs.", 
    description: "Assistance with reservations and transport to Bali's premium beach clubs for a day of sun, music, and dining.", 
    highlights: ["Reservation assistance", "Transport included", "VIP access coordination"] 
  },
  { 
    id: "nightlife", 
    name: "Nightlife", 
    category: "Entertainment", 
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000", 
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000"
    ],
    shortDescription: "Experience Bali's vibrant evening scene.", 
    description: "Discover the best lounges, clubs, and evening entertainment spots safely with our transport and local guidance.", 
    highlights: ["Safe transport", "Local recommendations", "Group coordination"] 
  },

  // PRIVATE EXPERIENCES
  { 
    id: "private-party", 
    name: "Private Party", 
    category: "Private Experiences", 
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000", 
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000"
    ],
    shortDescription: "Event coordination for your special occasions.", 
    description: "We help arrange elegant private gatherings, celebrations, and villa events tailored to your group.", 
    highlights: ["Event planning", "Villa coordination", "Vendor sourcing"] 
  },
  { 
    id: "bartender", 
    name: "Private Bartender Service", 
    category: "Private Experiences", 
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000", 
    images: [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000",
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1000"
    ],
    shortDescription: "Professional mixologists for your private event.", 
    description: "Elevate your private gathering with skilled bartenders crafting signature tropical cocktails at your location.", 
    highlights: ["Professional mixologists", "Custom menus", "Bar setup included"] 
  },
  { 
    id: "event-entertainment", 
    name: "Event Entertainment", 
    category: "Private Experiences", 
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000", 
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000"
    ],
    shortDescription: "DJs, dancers, and performers for your event.", 
    description: "Enhance your celebration with professional entertainment, from traditional dancers to modern DJs.", 
    highlights: ["Professional DJs", "Traditional performers", "Fire dancers"] 
  },
  { 
    id: "wellness-massage", 
    name: "Wellness & Massage", 
    category: "Private Experiences", 
    image: "/images/service/relax.jpg", 
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000"
    ],
    shortDescription: "Professional massage and wellness therapies.", 
    description: "Relax with traditional Balinese massage and wellness therapies, arranged at premium spas or your private villa.", 
    highlights: ["Traditional techniques", "Professional therapists", "In-villa service option"] 
  },

  // ACCOMMODATION
  { 
    id: "hotel-booking", 
    name: "Hotel Booking", 
    category: "Accommodation", 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000", 
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000"
    ],
    shortDescription: "Assistance finding the perfect place to stay.", 
    description: "Let us help you secure the ideal hotel or resort that matches your itinerary, style, and budget.", 
    highlights: ["Local recommendations", "Area guidance", "Budget optimization"] 
  },

  // SHOPPING & CRAFT
  { 
    id: "silver", 
    name: "Silver Experience", 
    category: "Shopping & Craft", 
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000", 
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000"
    ],
    shortDescription: "Craft your own jewelry in a traditional village.", 
    description: "Visit Celuk Village to learn traditional silver-smithing and craft your own unique piece of jewelry to take home.", 
    highlights: ["Hands-on class", "Expert silversmiths", "Keep your creation"] 
  }
];