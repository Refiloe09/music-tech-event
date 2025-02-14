"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMusic, FaMicrochip, FaTicketAlt } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center text-center px-4 md:px-6">
      {/* Background Video (Fallback to Image on Error) */}
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/images/hero3.webp"
          alt="Music & Tech Event"
          fill
          className="object-cover brightness-75"
          priority
        />
      )}

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-sm md:max-w-3xl mx-auto px-4 space-y-4 sm:space-y-6">
        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-8xl md:text-5xl font-extrabold text-white text-shadow leading-tight"
        >
          The Future of Music is Digital. Are You Ready?
        </motion.h1>

        {/* Sub-Headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          AI, Streaming, NFTs, Legal & Mobile Apps – Learn from Experts Shaping
          the Industry.
        </motion.p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-event-orange"
          >
            <FaMicrochip className="text-lg sm:text-2xl" />
            <span className="text-white text-sm sm:text-lg font-semibold">
              Tech Panels
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 text-event-black"
          >
            <FaMusic className="text-lg sm:text-2xl" />
            <span className="text-white text-sm sm:text-lg font-semibold">
              Live Performances
            </span>
          </motion.div>
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="https://www.quicket.co.za/events/301842-music-tech-conference-and-live-music-showcases/#/"
            target="_blank"
          >
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-event-orange hover:bg-orange-600 text-white text-sm sm:text-lg font-bold rounded-lg shadow-md flex items-center space-x-2">
              <FaTicketAlt className="text-lg sm:text-xl" />
              <span>Secure Your Spot</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
