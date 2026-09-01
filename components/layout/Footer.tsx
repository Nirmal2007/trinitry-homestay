"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-emerald-900/10 bg-emerald-50/10 px-8 py-12">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="text-2xl font-medium tracking-[0.25em] text-gray-900">
            TRINITRY HOME STAY
          </p>
          <p className="text-xs tracking-[0.2em] text-emerald-800 font-light mt-1">
            SURIYANELLI • MUNNAR • KERALA
          </p>
        </motion.div>

        <p className="text-sm font-light text-gray-500">
          © {new Date().getFullYear()} Trinitry Home Stay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
