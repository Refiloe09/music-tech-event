"use client";

import { motion } from "framer-motion";
import { FaMicrophoneAlt, FaChalkboardTeacher, FaMusic } from "react-icons/fa";
import Link from "next/link";

export default function Expectations() {
  return (
    <section className="bg-event-black py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text drop-shadow-lg mb-12"
        >
          What to Expect?
        </motion.h2>

        {/* Expectation Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: <FaMicrophoneAlt className="text-white text-3xl sm:text-4xl drop-shadow-lg" />,
              title: "Expert-Led Panels & Industry Talks",
              description:
                "Explore the latest trends in music tech, from AI and streaming to blockchain. Hear insights from top industry experts.",
            },
            {
              icon: <FaChalkboardTeacher className="text-white text-3xl sm:text-4xl drop-shadow-lg" />,
              title: "Hands-on Workshops & Keynotes",
              description:
                "Get hands-on with music distribution, smart contracts, and NFTs. Learn how legal and business aspects shape the digital music era.",
            },
            {
              icon: <FaMusic className="text-white text-3xl sm:text-4xl drop-shadow-lg" />,
              title: "Live Performances & Showcases",
              description:
                "Experience live performances and tech-driven showcases that highlight the future of music innovation.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-event-white p-6 rounded-xl shadow-md border border-gray-600 hover:border-gray-400 hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-event-black rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              <p className="text-black mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Link
            href="https://www.quicket.co.za/events/301842-music-tech-conference-and-live-music-showcases/#/"
            target="_blank"
          >
            <button className="px-10 py-5 bg-event-glow hover:bg-event-silver text-event-black text-lg font-bold rounded-lg shadow-md transition">
              Reserve Your Free Ticket
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
