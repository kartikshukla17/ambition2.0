import React from 'react';
import { motion } from 'framer-motion';

const AmBitionSection = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-white rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Left side: heading and image */}
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-purple-700 mb-2">
          what is amBITion ?
        </h2>
        <motion.img
          src="/mascot.png"
          alt="Mascot"
          className="w-40 mx-auto mt-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      {/* Right side: description and bullets */}
      <motion.div
        className="max-w-md bg-gray-50 p-6 rounded-lg shadow"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-gray-800">
          <strong>Innovation. Code. Impact.</strong><br />
          <span className="font-semibold text-purple-700">amBITion'25</span> is not just a hackathon—it's a battlefield for ideas where developers, designers, and innovators come together to build the future. Whether you're a seasoned coder or a curious beginner, this is your chance to solve real-world problems, showcase your skills, and collaborate with brilliant minds.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>💡 24 hours of non-stop innovation</li>
          <li>👨‍🏫 Hands-on mentorship from industry experts</li>
          <li>🎁 Exciting prizes, swags & career opportunities</li>
          <li>🚀 A chance to turn ideas into reality</li>
        </ul>
        <p className="mt-4 font-bold">
          The clock is ticking. The challenge is set.<br />
          WHAT'S YOUR AMBITION?
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AmBitionSection;
