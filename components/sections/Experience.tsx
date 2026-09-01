"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingImage from "@/components/shared/LoadingImage";

const amenities = [
  { label: "Balcony with Valley Panorama", image: "/image-3.png" },
  { label: "Misty Mountain & Tea Views", image: "/image-4.png" },
  { label: "Homestyle Kerala Cuisine", image: "/image-4.png" },
  { label: "High-Speed WiFi", image: "/image-5.png" },
  { label: "Kolukkumalai Jeep Safari Help", image: "/km.png" },
  { label: "Free On-site Parking", image: "/image-7.png" },
];

const Experience = () => {
  const [activeAmenityIndex, setActiveAmenityIndex] = useState(0);
  const activeImage = amenities[activeAmenityIndex];
  return (
    <section
      id="experience"
      className="flex min-h-screen items-center justify-center bg-[#EBF3EF] text-emerald-950 px-8 py-32"
    >
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 items-center gap-20 md:grid-cols-2"
        >
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl tracking-tight md:text-7xl relative -left-1 text-emerald-950 font-medium font-heading"
            >
              Experience
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mr-auto h-px w-24 bg-emerald-800 lg:hidden"
            />

            <div className="relative aspect-4/3 overflow-hidden md:hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeImage.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <LoadingImage
                    src={activeImage.image}
                    alt={activeImage.label}
                    fill
                    sizes="100vw"
                    wrapperClassName="absolute inset-0"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 border-y border-emerald-900/10 text-base font-light sm:grid-cols-2"
              role="radiogroup"
              aria-label="Experience highlights"
            >
              {amenities.map((amenity, index) => (
                <button
                  type="button"
                  key={amenity.label}
                  role="radio"
                  aria-checked={activeAmenityIndex === index}
                  onClick={() => setActiveAmenityIndex(index)}
                  onFocus={() => setActiveAmenityIndex(index)}
                  className={`group flex items-center gap-4 border-b border-emerald-900/10 py-5 last:border-b-0 sm:odd:pl-6 sm:even:border-l sm:even:border-emerald-900/10 sm:even:pl-6 ${index >= amenities.length - 2 ? "sm:border-b-0" : ""
                    } cursor-pointer text-left outline-none transition-colors hover:bg-emerald-800/5 focus-visible:bg-emerald-800/5`}
                >
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center border text-xs tracking-[0.2em] transition-colors group-hover:border-emerald-800 group-hover:bg-emerald-800 group-hover:text-white ${activeAmenityIndex === index
                      ? "border-emerald-800 bg-emerald-800 text-white font-medium"
                      : "border-emerald-900/30 text-emerald-900/60"
                      }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-none tracking-tight text-emerald-950 font-normal">
                    {amenity.label}
                  </p>
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-1 pt-8 text-emerald-900/90"
            >
              <p className="mb-4 text-sm font-semibold tracking-widest text-emerald-800">LOCATION & SURROUNDINGS</p>
              <p className="text-lg font-light">
                Close to Kolukkumalai Sunrise Viewpoint & Tea Factory
              </p>
              <p className="text-lg font-light">Surrounded by Suryanelli Tea Gardens & Anayirangal Dam</p>
              <p className="text-lg font-light">Convenient drive to Munnar Town & Mattupetty</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden aspect-3/4 overflow-hidden md:block"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={activeImage.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <LoadingImage
                  src={activeImage.image}
                  alt={activeImage.label}
                  fill
                  sizes="50vw"
                  wrapperClassName="absolute inset-0"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
