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
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-black via-event-orange to-red-500 bg-clip-text drop-shadow-md text-center leading-tight"
        >
          Countdown To <br className="sm:hidden" /> Music & Tech 2025
        </motion.h1>
      </div>

      {/* Timer Boxes */}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 max-w-lg md:max-w-3xl mx-auto px-4">
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="flex flex-col items-center p-4 w-24 sm:w-28 rounded-lg bg-white shadow-lg border border-gray-200"
          >
            <motion.span
              initial={{ scale: 1 }}
              animate={item.label === "Seconds" ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text drop-shadow-md"
            >
              {item.value}
            </motion.span>
            <span className="text-sm sm:text-lg text-gray-600 uppercase">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
