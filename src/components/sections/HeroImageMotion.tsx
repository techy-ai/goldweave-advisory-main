"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dashboard from "@/assets/hero-dashboard.jpg";

export function HeroImageMotion() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 14,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: 0.8,
      }}
      style={{ willChange: "transform" }}
      className="relative rounded-3xl overflow-hidden border border-white/10 shadow-navy-glow"
    >
      <Image
        src={dashboard}
        alt="Finance dashboard"
        width={1280}
        height={1280}
        className="w-full h-auto"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy-deep)]/40 to-transparent" />
    </motion.div>
  );
}
