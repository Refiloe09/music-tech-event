"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMusic, FaMicrochip, FaTicketAlt } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center text-center px-4 md:px-6">
      {/* Background Video (Fallback to Image) */}
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/images/hero3.webp"
          alt="Music & Tech Event"
          fill
          className="object-cover brightness-50"
          priority
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto px-4 space-y-5 sm:space-y-7">
        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg"
        >
          The Future of Music is Digital.
          <br className="hidden sm:block" /> Are You Ready?
        </motion.h1>

        {/* Sub-Headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
        >
          AI, Streaming, NFTs, Legal & Mobile Apps – Learn from Experts Shaping
          the Industry.
        </motion.p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-gray-300"
          >
            <FaMicrochip className="text-lg sm:text-2xl text-white/90" />
            <span className="text-white text-lg font-medium">
              Tech Panels
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-gray-300"
          >
            <FaMusic className="text-lg sm:text-2xl text-white/90" />
            <span className="text-white text-lg font-medium">
              Live Performances
            </span>
          </motion.div>
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="https://www.quicket.co.za/events/301842-music-tech-conference-and-live-music-showcases/#/"
            target="_blank"
          >
            <button className="px-8 py-3 sm:py-4 border-2 border-white text-white text-lg font-semibold rounded-lg shadow-md flex items-center space-x-2 hover:bg-white hover:text-black transition duration-300">
              <FaTicketAlt className="text-lg sm:text-xl" />
              <span>Secure Your Spot</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
