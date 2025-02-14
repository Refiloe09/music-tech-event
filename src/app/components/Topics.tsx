"use client";

import { motion } from "framer-motion";
import { FaRobot, FaEthereum, FaMobileAlt, FaBalanceScale, FaMusic, FaHeadphones } from "react-icons/fa";
import Link from "next/link";

const topics = [
  {
    title: "The Rise of AI in Music Production",
    description: "Discover how artificial intelligence is shaping the future of sound design, mixing, and composition.",
    icon: <FaRobot className="text-blue-600 text-4xl" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "NFTs & Blockchain for Musicians",
    description: "Learn how blockchain is revolutionizing artist royalties, ownership, and fan engagement.",
    icon: <FaEthereum className="text-orange-600 text-4xl" />,
    bgColor: "bg-orange-100",
  },
  {
    title: "Mobile Apps & Streaming: The New Music Economy",
    description: "Explore how mobile platforms and streaming services are changing the way music is consumed.",
    icon: <FaMobileAlt className="text-green-600 text-4xl" />,
    bgColor: "bg-green-100",
  },
  {
    title: "The Legal Implications of Digital Music Distribution",
    description: "Understand copyright, royalties, and licensing in the age of digital music platforms.",
    icon: <FaBalanceScale className="text-purple-600 text-4xl" />,
    bgColor: "bg-purple-100",
  },
  {
    title: "Featured Artists Using Tech Innovations in Music",
    description: "Live performances showcasing how musicians are integrating tech into their craft.",
    icon: <FaMusic className="text-red-600 text-4xl" />,
    bgColor: "bg-red-100",
  },
  {
    title: "Demo of AI-Generated Music & NFT Drops",
    description: "Experience AI-generated compositions and exclusive NFT music drops in real-time.",
    icon: <FaHeadphones className="text-blue-600 text-4xl" />,
    bgColor: "bg-blue-100",
  },
];

export default function Topics() {
  return (
    <section className="bg-event-orange py-16 px-6 text-white text-center">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md mb-8"
        >
          Featured Speakers & Sessions
        </motion.h2>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center space-x-4"
            >
              <div className={`w-16 h-16 ${topic.bgColor} flex items-center justify-center rounded-full`}>
                {topic.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
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
          <Link href="#schedule">
            <button className="px-8 py-4 bg-white hover:bg-gray-200 text-event-orange text-lg font-bold rounded-lg shadow-md transition">
              Explore the Schedule
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
