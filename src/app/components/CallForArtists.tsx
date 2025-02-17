"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMicrophone, FaEnvelope, FaUser, FaLink, FaImage, FaVideo } from "react-icons/fa";

export default function CallForArtists() {
  return (
    <section className="bg-event-black text-event-white py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Section Header with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-event-glow mb-6 flex items-center justify-center gap-3"
        >
          <FaMicrophone className="text-5xl text-event-glow" />
          CALL FOR INDIE ARTISTS!
        </motion.h2>

        {/* Subheader */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-event-silver mb-8"
        >
          Are you an <span className="text-event-glow font-bold">indie artist</span> looking to showcase your music?  
          Apply before <span className="text-event-glow font-bold">February 19, 2025</span> for a chance to perform at <span className="text-event-glow font-bold">Music & Tech 2025!</span>
        </motion.p>

        {/* Submission Steps (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            {
              icon: <FaUser className="text-4xl text-event-glow" />,
              title: "Full Bio or EPK & Contact Details",
              description: "Tell us about yourself and how we can reach you.",
            },
            {
              icon: <FaLink className="text-4xl text-event-glow" />,
              title: "Links to Your Music",
              description: "Spotify, Apple Music, SoundCloud, etc.",
            },
            {
              icon: <FaVideo className="text-4xl text-event-glow" />,
              title: "Links to YouTube or Online Videos",
              description: "Show us your live performance skills.",
            },
            {
              icon: <FaImage className="text-4xl text-event-glow" />,
              title: "Two High-Resolution Photos",
              description: "For promotional purposes if selected.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-event-gray p-5 rounded-lg shadow-md hover:shadow-event-glow transition flex items-start space-x-4 border border-event-border"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-event-white">{item.title}</h3>
                <p className="text-event-silver">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submission CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex justify-center"
        >
          <Link href="mailto:events@musicandtech.co.za">
            <button className="px-8 py-4 bg-event-glow hover:bg-event-silver text-event-black text-lg font-bold rounded-lg shadow-md transition flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              Submit Your Application
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
