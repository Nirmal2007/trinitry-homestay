"use client";

import { motion } from "framer-motion";

const Story = () => {
  return (
    <section
      id="story"
      className="flex min-h-screen items-center justify-center px-8 py-32"
    >
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <div className="space-y-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl tracking-tight md:text-7xl"
            >
              Our Story
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto h-px w-24 bg-emerald-800"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-2xl font-light leading-relaxed md:text-3xl"
          >
            Trinitry is a peaceful sanctuary in God&apos;s Own Country.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl font-light leading-relaxed text-gray-600 text-center max-w-3xl mx-auto"
          >
            Located high in Suryanelli near the iconic Kolukkumalai tea plantations, Trinitry Home Stay offers breathtaking panoramic views of rolling green hills, morning fog, and serene mountain trails. Built with warm Kerala hospitality, our homestay provides a comfortable, quiet escape away from the busy city.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl font-light leading-relaxed text-gray-600 text-center max-w-3xl mx-auto"
          >
            Wake up to the aroma of fresh hill tea, witness dramatic sunrises, and experience the pure tranquility of Munnar with the comforts of home.
          </motion.p>

          {/* Aesthetic Munnar & Kerala Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
          >
            {/* Element 1: Tea Garden Heritage */}
            <div className="group rounded-2xl border border-emerald-900/10 bg-emerald-50/30 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-50/60 hover:shadow-lg hover:shadow-emerald-900/5">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
                  <path d="M7 14.5c2.5-1 4.5-.5 6 1s1.5 3.5 3 4.5" />
                  <path d="M12.5 8c2.5-1 4.5.5 5.5 2.5s.5 4-1 5" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-medium text-emerald-950">Munnar Tea Fields</h3>
              <p className="text-sm font-light leading-relaxed text-emerald-900/80">
                Surround yourself with endless miles of lush green tea shrubs, sweet hill aromas, and refreshing cool mountain breeze.
              </p>
            </div>

            {/* Element 2: Kolukkumalai Peak */}
            <div className="group rounded-2xl border border-emerald-900/10 bg-emerald-50/30 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-50/60 hover:shadow-lg hover:shadow-emerald-900/5">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M17 18a5 5 0 0 0-10 0" />
                  <path d="M12 2v8" />
                  <path d="M9 5l3-3 3 3" />
                  <path d="M3 22h18" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-medium text-emerald-950">Kolukkumalai Jeep Sunrise</h3>
              <p className="text-sm font-light leading-relaxed text-emerald-900/80">
                Embark on an off-road safari to catch a golden sunrise above the clouds at the world&apos;s highest organic tea estate.
              </p>
            </div>

            {/* Element 3: Kerala Spice & Mist */}
            <div className="group rounded-2xl border border-emerald-900/10 bg-emerald-50/30 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-50/60 hover:shadow-lg hover:shadow-emerald-900/5">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-medium text-emerald-950">Kerala Spice Hills</h3>
              <p className="text-sm font-light leading-relaxed text-emerald-900/80">
                Breathe in cardamom and clove-infused air, wander spice trails, and experience true local hospitality in Suryanelli.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;