"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LoadingImage from "@/components/shared/LoadingImage";
import usePageReady from "@/hooks/usePageReady";

const heroTextContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.05,
    },
  },
};

const heroTextItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const isPageReady = usePageReady();

  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ scale: isPageReady ? 1 : 1.2 }}
        transition={{ duration: 1.75, ease: "easeOut" }}
      >
        <LoadingImage
          src="/image-4.png"
          alt="Trinitry Home Stay Munnar"
          fill
          preload
          wrapperClassName="absolute inset-0"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0px]" />
      </motion.div>

      <div className="relative z-10 px-4 text-center text-white">
        <motion.div
          initial="hidden"
          animate={isPageReady ? "visible" : "hidden"}
          variants={heroTextContainerVariants}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={heroTextItemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-light tracking-[0.25em] backdrop-blur-md"
          >
            SURYANELLI • MUNNAR • KERALA
          </motion.div>

          <motion.h1
            variants={heroTextItemVariants}
            className="mb-4 text-[9vw] font-medium leading-tight tracking-wider lg:text-[7vw]"
          >
            TRINITRY
          </motion.h1>

          <motion.p
            variants={heroTextItemVariants}
            className="mb-6 text-xl font-light tracking-[0.35em] md:text-3xl text-emerald-100"
          >
            HOME STAY
          </motion.p>

          <motion.p
            variants={heroTextItemVariants}
            className="mb-10 max-w-lg text-sm font-light text-white/90 md:text-base leading-relaxed"
          >
            Nestled amidst misty hills & lush tea estates of Suryanelli, Munnar
          </motion.p>

          <motion.div style={{ opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={
                isPageReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
              }
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <ChevronDown className="animate-bounce" size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
