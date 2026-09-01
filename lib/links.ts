export const bookingUrl =
  "https://www.booking.com/hotel/in/trinitry-home-stay.html";

// Homestay Admin Phone & WhatsApp Number
export const rawPhoneNumber = "916374696485";
export const displayPhoneNumber = "+91 63746 96485";

export const whatsappNumber = rawPhoneNumber;

export const whatsappDefaultMessage =
  "Hello! I would like to inquire about room booking and availability at Trinitry Home Stay.";

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappDefaultMessage
)}`;

export const phoneCallUrl = `tel:+${rawPhoneNumber}`;


