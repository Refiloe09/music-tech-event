"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const speakers = [
  {
    name: "Elisha Dibakoane",
    topic: "Leveraging GenAI in the Creative Arts",
    image: "/speakers/Elisha1.jpg",
  },
  {
    name: "Jonathan Shaw",
    topic: "How Technology is Changing the Music Industry (NFTs as an Example)",
    image: "/speakers/Jonathan Shaw.jpg",
  },
  {
    name: "Kabelo Chabalala",
    topic: "Leveraging Technology for PR as a Creative",
    image: "/speakers/Kabelo Chabalala.jpeg",
  },
  {
    name: "Onkabetse Mtshweni",
    topic: "AI Integration in Creative Arts",
    image: "/speakers/Onkabetse Mtshweni.jpg",
  },
  {
    name: "Itumeleng Mamasedi",
    topic: "Founder of Streamodo (A South African Streaming Platform)",
    image: "/speakers/missing_photo.webp",
  },
  {
    name: "Mmakgotso Maphoto",
    topic: "Co-founder and Director of Operations at AzuriApp",
    image: "/speakers/mmakgotso.png",
  },
  {
    name: "Dumisani Motsamai",
    topic: "Legal Panel - Regulatory Elements in Music Business & Tech",
    image: "/speakers/Dumisani Motsamai.jpg",
  },
  {
    name: "Renneth Tshisikule",
    topic: "Case Study: Moving from Paper-Based to Online Application, and Export Opportunities",
    image: "/speakers/Renneth - Imexsa.JPG",
  },
];

export default function Speakers() {
  return (
    <section className="bg-gray-900 py-16 px-6 text-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-neon-cyan mb-8"
        >
          Featured Speakers & Sessions
        </motion.h2>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-purple-glow transition"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={200}
                height={200}
                className="object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold">{speaker.name}</h3>
              <p className="text-gray-300">{speaker.topic}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
