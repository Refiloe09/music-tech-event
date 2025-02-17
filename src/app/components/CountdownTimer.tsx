"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const targetDate = new Date("2025-02-28T09:00:00").getTime();

    const updateCountdown = () => {
      setTimeLeft(targetDate - new Date().getTime());
    };

    updateCountdown(); // Set initial value
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) {
    return <div className="text-center text-gray-500">Loading countdown...</div>;
  }

  const getTimeComponents = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeComponents(timeLeft);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-10"
    >
      {/* Heading */}
      <div className="flex items-center justify-center space-x-3 text-2xl sm:text-3xl font-semibold text-event-black">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-black via-gray-700 to-gray-900 bg-clip-text drop-shadow-lg text-center leading-tight"
        >
          Countdown To <br className="sm:hidden" /> Music & Tech 2025
        </motion.h1>
      </div>

      {/* Timer Boxes */}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 max-w-lg md:max-w-3xl mx-auto px-4">
        {[
          { label: "DAYS", value: days },
          { label: "HOURS", value: hours },
          { label: "MINUTES", value: minutes },
          { label: "SECONDS", value: seconds },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="flex flex-col items-center p-4 w-22 sm:w-26 rounded-lg bg-black shadow-lg border border-gray-700"
          >
            <motion.span
              key={item.value} // Ensures reanimation on update
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              {item.value}
            </motion.span>
            <span className="text-sm sm:text-lg text-gray-300 uppercase font-semibold">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
