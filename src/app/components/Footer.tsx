"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sponsors = [
  { name: "Quicket", logo: "/partners/quicket.png", url: "https://www.quicket.co.za/" },
  { name: "Presidential Employment Stimulus", logo: "/partners/presidential.png", url: "#" },
  { name: "Sport, Arts & Culture", logo: "/partners/sports.png", url: "https://www.dsac.gov.za/" },
  { name: "National Arts Council", logo: "/partners/nac.png", url: "https://www.nac.org.za/" },
];

const contact = {
  email: "morenadave@gmail.com",
  phone: "+27 82 900 0018",
  socials: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
};

export default function Footer() {
  return (
    <footer className="bg-event-black text-event-white py-10 px-6 text-center pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Music & Tech Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-4"
        >
          <Image
            src="/music.jpeg"
            alt="Music & Tech"
            width={100}
            height={100}
            className="rounded-md shadow-lg"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-event-orange"
        >
          Brought to You by Music & Tech
        </motion.h2>

        <p className="text-gray-400 mt-1">Supported by these amazing partners</p>

        {/* Sponsor Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center items-center p-2 bg-dark-gray rounded-md shadow-md hover:scale-105 transition"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={140}
                height={60}
                className="object-contain"
              />
            </motion.a>
          ))}
        </div>

        {/* Contact & Socials */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300">Contact the Organizer</h3>
            <div className="flex justify-center space-x-4 mt-1 text-gray-400">
              <a href={`mailto:${contact.email}`} className="hover:text-event-orange transition">
                <FaEnvelope className="text-xl" />
              </a>
              <a href={`tel:${contact.phone}`} className="hover:text-event-orange transition">
                <FaPhone className="text-xl" />
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300">Follow Us</h3>
            <div className="flex justify-center space-x-4 mt-1 text-gray-400">
              <a href={contact.socials.facebook} className="hover:text-event-orange transition">
                <FaFacebook className="text-xl" />
              </a>
              <a href={contact.socials.twitter} className="hover:text-event-orange transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href={contact.socials.instagram} className="hover:text-event-orange transition">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-5">© 2025 Music & Tech. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
