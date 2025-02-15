"use client";

import { motion } from "framer-motion";
import { FaRocket, FaGlobeAfrica, FaHandshake } from "react-icons/fa";
import Link from "next/link";

const reasons = [
  {
    title: "Tech is Already Dominating the Music Industry",
    description:
      "Spotify, Apple Music, YouTube, and TikTok are tech giants, not record labels. AI, blockchain, and digital tools are transforming music creation and distribution.",
    icon: <FaRocket className="text-blue-600 text-4xl" />,
    bgColor: "bg-blue-200",
  },
  {
    title: "South Africa Needs to Keep Up",
    description:
      "The global music industry is moving fast – AI-generated music, smart contracts, and NFTs are here. South African creatives must adapt to stay competitive.",
    icon: <FaGlobeAfrica className="text-orange-600 text-4xl" />,
    bgColor: "bg-orange-200",
  },
  {
    title: "Meet Experts, Learn, and Network",
    description:
      "Designed for artists, managers, booking agents, and professionals. Connect with industry leaders, legal experts, and music-tech pioneers.",
    icon: <FaHandshake className="text-green-600 text-4xl" />,
    bgColor: "bg-green-200",
  },
];

export default function WhyAttend() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-black to-gray-600 bg-clip-text drop-shadow-lg mb-12"
        >
          Why This Event Matters
        </motion.h2>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300 hover:scale-105 hover:shadow-lg transition-transform flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${reason.bgColor} flex items-center justify-center rounded-full mb-4`}>
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10"
        >
          <Link href="https://www.quicket.co.za/events/301842-music-tech-conference-and-live-music-showcases/#/" target="_blank">
            <button className="px-8 py-4 bg-black hover:bg-gray-900 text-white text-lg font-bold rounded-lg shadow-md transition">
              Register Now for Free
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
