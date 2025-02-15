"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt } from "react-icons/fa";
import Link from "next/link";

export default function EventDetails() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-black to-gray-700 bg-clip-text drop-shadow-lg mb-12"
        >
          Event Details
        </motion.h2>

        {/* Event Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              icon: <FaMapMarkerAlt className="text-gray-800 text-2xl sm:text-3xl" />,
              title: "Venue",
              details: "Yamaha Theatre, Sandton",
              subDetails: "19 Eastern Service Rd, Kelvin, Sandton, 2054",
            },
            {
              icon: <FaCalendarAlt className="text-gray-800 text-2xl sm:text-3xl" />,
              title: "Date",
              details: "28 February 2025",
            },
            {
              icon: <FaClock className="text-gray-800 text-2xl sm:text-3xl" />,
              title: "Time",
              details: "09:00 – 17:00",
            },
            {
              icon: <FaTicketAlt className="text-gray-800 text-2xl sm:text-3xl" />,
              title: "Tickets",
              details: "FREE on Quicket",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center bg-gray-50 p-5 rounded-xl shadow-md border border-gray-300 hover:shadow-lg hover:border-gray-500 transition-transform hover:-translate-y-1"
            >
              <div className="mr-4 flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white transition">
                {item.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.details}</p>
                {item.subDetails && <p className="text-gray-500 text-sm">{item.subDetails}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14"
        >
          <Link
            href="https://www.quicket.co.za/events/301842-music-tech-conference-and-live-music-showcases/#/"
            target="_blank"
          >
            <button className="px-10 py-5 bg-black hover:bg-gray-800 text-white text-lg font-bold rounded-lg shadow-md transition">
              Get Free Tickets
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
