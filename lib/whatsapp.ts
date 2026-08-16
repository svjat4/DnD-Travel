// lib/whatsapp.ts

export function getWhatsAppUrl(serviceName?: string) {
  const baseUrl = "https://wa.me/62878674047822";
  
  if (serviceName) {
    const message = `Hello D&D Travel & Tour, I'm interested in the ${serviceName}. Could you please provide availability and pricing?`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  
  // Default message for general inquiries
  const defaultMessage = "Hello D&D Travel & Tour, I would like to ask about your travel services in Bali.";
  return `${baseUrl}?text=${encodeURIComponent(defaultMessage)}`;
}