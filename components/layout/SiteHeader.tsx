"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { sections } from "@/lib/sections";
import { whatsappUrl, phoneCallUrl } from "@/lib/links";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Navbar } from "./Navbar";

const SCROLL_SETTLE_DELAY = 140;

const SiteHeader = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [visualSection, setVisualSection] = useState(0);
  const scrollUpdateTimeoutRef = useRef<number | undefined>(undefined);
  const isHome = visualSection === 0;

  useEffect(() => {
    const getCurrentSection = () => {
      const anchor = window.scrollY + window.innerHeight * 0.35;

      return sections.reduce((activeIndex, section, index) => {
        const element = document.getElementById(section.id);
        return element && element.offsetTop <= anchor ? index : activeIndex;
      }, 0);
    };

    const updateCurrentSection = () => {
      setCurrentSection(getCurrentSection());
    };

    const updateVisualSection = () => {
      setVisualSection(getCurrentSection());
    };

    const updateCurrentSectionAfterScrollSettles = () => {
      updateVisualSection();

      if (scrollUpdateTimeoutRef.current) {
        window.clearTimeout(scrollUpdateTimeoutRef.current);
      }

      scrollUpdateTimeoutRef.current = window.setTimeout(() => {
        updateCurrentSection();
      }, SCROLL_SETTLE_DELAY);
    };

    updateCurrentSection();
    updateVisualSection();
    window.addEventListener("scroll", updateCurrentSectionAfterScrollSettles, {
      passive: true,
    });
    window.addEventListener("resize", updateCurrentSection);
    window.addEventListener("resize", updateVisualSection);

    return () => {
      if (scrollUpdateTimeoutRef.current) {
        window.clearTimeout(scrollUpdateTimeoutRef.current);
      }
      window.removeEventListener(
        "scroll",
        updateCurrentSectionAfterScrollSettles,
      );
      window.removeEventListener("resize", updateCurrentSection);
      window.removeEventListener("resize", updateVisualSection);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    setCurrentSection(index);
    setVisualSection(index);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed left-8 lg:top-3 top-5 z-50"
      >
        <motion.button
          onClick={() => scrollToSection(0)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="hover:cursor-pointer flex items-center gap-2 group"
        >
          <span className={`text-xl font-medium tracking-[0.25em] transition-colors duration-300 ${
            isHome
              ? "text-white drop-shadow-sm group-hover:text-emerald-300"
              : "text-emerald-950 group-hover:text-emerald-700 font-semibold"
          }`}>
            TRINITRY
          </span>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-8 top-3 z-50 hidden lg:flex items-center gap-2.5"
      >
        <motion.a
          href={phoneCallUrl}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-950/85 hover:bg-emerald-900 text-emerald-100 backdrop-blur-md px-4 py-2 text-xs font-semibold tracking-wider shadow-sm transition-all duration-300 flex items-center gap-1.5 rounded-full border border-emerald-700/30 hover:border-emerald-500/50"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Call Us</span>
        </motion.a>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white backdrop-blur-md px-4.5 py-2 text-xs font-bold tracking-wider shadow-md transition-all duration-300 flex items-center gap-2 rounded-full border border-emerald-400/30"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current" />
          <span>Book on WhatsApp</span>
        </motion.a>

        <motion.button
          onClick={() => scrollToSection(5)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1E3F20] hover:bg-[#162F18] border border-white/20 px-6 py-2 text-xs font-bold tracking-widest text-white shadow-md transition-colors rounded-full hover:cursor-pointer"
        >
          BOOK
        </motion.button>
      </motion.div>

      <Navbar
        currentSection={currentSection}
        visualSection={visualSection}
        sections={[...sections]}
        onNavigate={scrollToSection}
      />
    </>
  );
};

export default SiteHeader;
