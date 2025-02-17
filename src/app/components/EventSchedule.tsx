"use client";

import { motion } from "framer-motion";
import { FaClock, FaMusic, FaUserTie, FaGavel, FaHandshake } from "react-icons/fa";

const schedule = [
  { time: "09:00 - 09:30", title: "Registration & Welcome", icon: <FaClock className="text-blue-600 text-3xl" /> },
  { time: "09:30 - 09:35", title: "Welcome Video", icon: <FaUserTie className="text-gray-600 text-3xl" /> },
  { time: "09:35 - 09:55", title: "Future of Music & Tech (Video)", icon: <FaClock className="text-gray-600 text-3xl" /> },
  { time: "10:00 - 10:45", title: "Kabelo Chabalala - Leveraging Technology for PR", icon: <FaUserTie className="text-orange-600 text-3xl" /> },
  { time: "10:50 - 11:35", title: "Entrepreneurs Panel - Tech & The Future", icon: <FaUserTie className="text-green-600 text-3xl" /> },
  { time: "11:40 - 12:25", title: "Elisha Dibakoane - Leveraging GenAI in the Creative Arts", icon: <FaUserTie className="text-blue-600 text-3xl" /> },
  { time: "12:30 - 13:30", title: "Lunch & Live Showcases", icon: <FaMusic className="text-purple-600 text-3xl" /> },
  { time: "13:30 - 14:15", title: "Jonathan Shaw - NFTs & The Future of Music", icon: <FaUserTie className="text-blue-600 text-3xl" /> },
  { time: "14:20 - 15:05", title: "Renneth Tshisikule - From Paper to Online & Export Opportunities", icon: <FaUserTie className="text-orange-600 text-3xl" /> },
  { time: "15:10 - 15:55", title: "Legal Panel - Music Business & Tech Regulations", icon: <FaGavel className="text-red-600 text-3xl" /> },
  { time: "16:00 - 17:00", title: "Closing Live Showcases & Networking", icon: <FaHandshake className="text-indigo-600 text-3xl" /> },
];

export default function EventSchedule() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8"
        >
          Event Schedule
        </motion.h2>

        {/* Schedule List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:border-gray-400 transition"
            >
              <div>{item.icon}</div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
