"use client";

import { motion } from "framer-motion";
import { ImageGallery } from "@/components/shadix-ui/components/image-gallery";

const images = [
  { src: "/image.png", alt: "Trinitry Home Stay living space" },
  { src: "/image-8.png", alt: "Trinitry Home Stay dining and lounge area" },
  { src: "/image-5.png", alt: "Spacious bedroom with scenic valley view" },
  { src: "/image-2.png", alt: "Munnar tea plantation view from homestay" },
  { src: "/image-3.png", alt: "Private balcony overlooking greenery" },
  { src: "/image-7.png", alt: "Serene mountain terrace view" },
  { src: "/image-6.png", alt: "Suryanelli misty valley and hills" },

];

const Spaces = () => {
  return (
    <section id="spaces" className="min-h-screen px-8 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-400"
      >
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl tracking-tight md:text-7xl"
          >
            Spaces
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto h-px w-24 bg-black"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <ImageGallery images={images} />
        </div>
      </motion.div>
    </section>
  );
};

export default Spaces;