"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Phone, Tag } from "lucide-react";
import { bookingUrl, whatsappUrl, phoneCallUrl, displayPhoneNumber } from "@/lib/links";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const mapUrl =
  "https://maps.app.goo.gl/JyAtvgkUEsznxjLu9";
const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1037.1333301748373!2d77.19406556966298!3d10.051960099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b077500542b03a9%3A0xa62333e56fc7d258!2sTrinitry%20home%20stay!5e1!3m2!1sen!2sin!4v1788155286064!5m2!1sen!2sin";

const Stay = () => {
  return (
    <section
      id="stay"
      className="flex min-h-screen items-center justify-center px-6 py-20 md:px-8"
    >
      <div className="w-full max-w-5xl space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8 text-5xl tracking-tight md:text-7xl mt-28">
            Stay With Us
          </h2>
          <div className="mx-auto mb-8 h-px w-24 bg-emerald-800" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-gray-600 md:text-2xl"
        >
          Immerse yourself in Munnar&apos;s cool mountain breeze, lush greenery, and the cozy warmth of Trinitry Home Stay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.15em] text-white hover:cursor-pointer transition-all duration-300 shadow-lg shadow-emerald-950/20 rounded-full border border-emerald-400/30"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>BOOK ON WHATSAPP</span>
            </motion.a>

            <motion.a
              href={phoneCallUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 bg-emerald-950 hover:bg-emerald-900 px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.15em] text-white hover:cursor-pointer transition-all duration-300 shadow-lg shadow-emerald-950/20 rounded-full border border-emerald-700/50"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>CALL US NOW</span>
            </motion.a>

            <motion.a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-emerald-900/40 hover:bg-emerald-900/80 px-8 py-4 text-xs sm:text-sm font-semibold tracking-[0.15em] text-emerald-950 hover:text-white hover:cursor-pointer transition-all duration-300 shadow-md border border-emerald-900/20 rounded-full"
            >
              BOOK ON BOOKING.COM
            </motion.a>
          </div>

          <div className="mt-2 max-w-lg mx-auto bg-amber-50/90 border border-amber-200 text-amber-900 rounded-lg p-3.5 text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-sm">
            <Tag className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
            <span>
              <strong>Note:</strong> Book on WhatsApp or Phone Call to avoid additional platform charges and fees from Booking.com!
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-1 pt-8 text-sm font-light text-gray-600"
        >
          <p className="font-medium text-gray-800">Trinitry Home Stay</p>
          <p>Suryanelli, Near Kolukkumalai Road</p>
          <p>Munnar, Idukki District, Kerala - 685618, India</p>
          <p className="pt-2 font-medium text-emerald-950 flex items-center justify-center gap-1.5">
            <Phone className="w-4 h-4 text-emerald-800" aria-hidden="true" />
            <a href={phoneCallUrl} className="hover:underline tracking-wide">{displayPhoneNumber}</a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <div className="overflow-hidden border border-black/10 bg-white rounded-lg shadow-sm">
            <iframe
              src={mapEmbedUrl}
              title="Trinitry Home Stay Suryanelli Munnar on Google Maps"
              className="h-80 w-full md:h-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-5 inline-flex items-center gap-2 border border-emerald-900 px-6 py-3 text-xs tracking-[0.2em] text-emerald-900 transition-colors hover:bg-[#1E3F20] hover:text-white"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            OPEN IN GOOGLE MAPS
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="bg-emerald-50/20 border border-emerald-900/5 p-6 rounded-xl text-left hover:shadow-md transition-shadow">
            <h3 className="font-medium text-lg text-emerald-950 mb-3 font-heading">
              Surroundings & Sightseeing
            </h3>
            <p className="font-light text-emerald-900/80 text-sm leading-relaxed">
              • Kolukkumalai Sunrise & Jeep Safari
              <br />
              • Anayirangal Dam & Boating
              <br />
              • Tea Garden Walking Trails
            </p>
          </div>

          <div className="bg-emerald-50/20 border border-emerald-900/5 p-6 rounded-xl text-left hover:shadow-md transition-shadow">
            <h3 className="font-medium text-lg text-emerald-950 mb-3 font-heading">
              Check-in / Check-out
            </h3>
            <p className="font-light text-emerald-900/80 text-sm leading-relaxed">
              • Check-in: 12:00 PM onwards
              <br />
              • Check-out: 10:00 AM - 11:00 AM
              <br />
              • Flexible upon prior request
            </p>
          </div>

          <div className="bg-emerald-50/20 border border-emerald-900/5 p-6 rounded-xl text-left hover:shadow-md transition-shadow">
            <h3 className="font-medium text-lg text-emerald-950 mb-3 font-heading">
              Stay Policies
            </h3>
            <p className="font-light text-emerald-900/80 text-sm leading-relaxed">
              • Family & couple friendly environment
              <br />
              • Peaceful hill station retreat
              <br />
              • Free private parking available
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Stay;
