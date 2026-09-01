"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Wifi, Coffee, Sparkles, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { whatsappNumber, phoneCallUrl } from "@/lib/links";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

interface Room {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  occupancy: string;
  image: string;
  description: string;
  amenities: string[];
}

const rooms: Room[] = [
  {
    id: "deluxe-suite",
    name: "Deluxe Valley View",
    subtitle: "Panoramic Tea Plantation View",
    price: "₹1,399",
    originalPrice: "₹2,500",
    occupancy: "2 Guests",
    image: "/deluxe-suite-new.jpg",
    description:
      "Spacious glass-walled offering breathtaking views of Munnar's green tea slopes and morning valley mist.",
    amenities: [
      "Double Size Bed",
      "Free High-Speed Wi-Fi",
      "24/7 Hot Water",
      "Tea & Coffee Maker",
    ],
  },
  {
    id: "villa-suite",
    name: "Family Garden Villa",
    subtitle: "Private Terrace & Garden Access",
    price: "₹4,500",
    originalPrice: "₹5,200",
    occupancy: "4 - 6 Guests",
    image: "/family-suite.jpg",
    description:
      "Expansive two-bedroom family suite with high wooden ceilings, private garden terrace, and dedicated living area.",
    amenities: [
      "2 Bedrooms & Living Room",
      "Private Garden Patio",
      "Free High-Speed Wi-Fi",
      "Homestyle Meals Available",
      "Family Friendly Space",
      "Free Private Parking",
    ],
  },
];

const getRoomWhatsappUrl = (roomName: string) => {
  const message = `Hello Trinitry Home Stay! I would like to inquire about booking the ${roomName}. Please share availability and details.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const Rooms = () => {
  return (
    <section id="rooms" className="min-h-screen px-6 py-28 md:px-8 bg-emerald-950/5">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-emerald-800 bg-emerald-100/80 px-4 py-1.5 rounded-full inline-block mb-3 border border-emerald-800/10">
            Accommodations
          </span>
          <h2 className="text-4xl md:text-6xl tracking-tight text-emerald-950 mb-4 font-normal">
            Rooms & Suites
          </h2>
          <div className="mx-auto h-px w-24 bg-emerald-800 mb-6" />
          <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-600 font-light leading-relaxed">
            Experience authentic Munnar hospitality with mountain views, cozy wooden interiors, and direct booking savings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-emerald-900/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-emerald-950/10">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Price Tag Badge */}
                <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-md flex items-center gap-1.5">
                  <span className="line-through text-white/60 text-[11px]">{room.originalPrice}</span>
                  <span className="text-emerald-300 font-bold text-sm">{room.price}</span>
                  <span className="text-white/80 text-[10px]">/ night</span>
                </div>

                {/* Direct Rate Badge */}
                <div className="absolute top-4 left-4 bg-[#25D366] text-white px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white fill-current" />
                  <span>Direct WhatsApp Rate</span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-emerald-300 font-medium mb-1">
                    {room.subtitle}
                  </p>
                  <h3 className="text-xl font-medium tracking-tight text-white">
                    {room.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-emerald-900 font-medium mb-3">
                    <Users className="w-4 h-4 text-emerald-700" />
                    <span>Occupancy: {room.occupancy}</span>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed mb-6">
                    {room.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <p className="text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-2">
                      Room Amenities
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
                  <motion.a
                    href={getRoomWhatsappUrl(room.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-semibold text-xs tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Book {room.name.split(" ")[0]} on WhatsApp</span>
                  </motion.a>

                  <motion.a
                    href={phoneCallUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-950/5 hover:bg-emerald-900 hover:text-white border border-emerald-900/20 text-emerald-950 py-2.5 px-4 rounded-xl font-medium text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-700 group-hover:text-white" />
                    <span>Call for Availability</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
