"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMicrophone, FaChalkboardTeacher, FaHandshake, FaMusic } from "react-icons/fa";

const schedule = [
  {
    time: "09:00 - 09:30",
    title: "Registration & Welcome",
    icon: <FaCalendarAlt className="text-blue-600 text-3xl" />,
    bgColor: "bg-blue-100",
  },
  {
    time: "09:30 - 12:00",
    title: "Tech Panels & Discussions",
    icon: <FaChalkboardTeacher className="text-orange-600 text-3xl" />,
    bgColor: "bg-orange-100",
  },
  {
    time: "12:00 - 12:30",
    title: "Live Performance & Networking Break",
    icon: <FaMicrophone className="text-purple-600 text-3xl" />,
    bgColor: "bg-purple-100",
  },
  {
    time: "12:30 - 15:30",
    title: "Mini-Workshops & Demos",
    icon: <FaChalkboardTeacher className="text-green-600 text-3xl" />,
    bgColor: "bg-green-100",
  },
  {
    time: "15:30 - 16:00",
    title: "Closing Performance",
    icon: <FaMusic className="text-red-600 text-3xl" />,
    bgColor: "bg-red-100",
  },
  {
    time: "16:00 - 17:00",
    title: "Networking & Closing Remarks",
    icon: <FaHandshake className="text-indigo-600 text-3xl" />,
    bgColor: "bg-indigo-100",
  },
];

export default function EventSchedule() {
  return (
    <section id="schedule" className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-md mb-10"
        >
          📅 Event Schedule
        </motion.h2>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className={`w-14 h-14 ${item.bgColor} flex items-center justify-center rounded-full`}>
                {item.icon}
              </div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.time}</p>
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
          
        </motion.div>
      </div>
    </section>
  );
}
