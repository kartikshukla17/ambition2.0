"use client";
import { useEffect, useState } from "react";

// You can pass the targetDate as a prop from the HeroBanner component
const Countdown = ({ targetDate = "2025-09-20T09:00:00" }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      Days: "00",
      Hours: "00",
      Minutes: "00",
      Seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        Days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        Hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        Minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        Seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]); // Rerun effect if targetDate changes

  return (
    // We've removed the outer container and the extra title from the original file
    // and applied styles directly to this container.
    <div className="flex gap-4 text-center bg-gray-800 dark:bg-gray-900 text-white p-4 px-6 rounded-xl shadow-lg border border-gray-700">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center w-16">
          {/* Styles for the numbers */}
          <span className="text-3xl lg:text-4xl font-bold tracking-wider">{value}</span>
          {/* Styles for the labels */}
          <span className="text-xs uppercase tracking-widest text-gray-400">{label}</span>
          {/* The placeholder div has been removed */}
        </div>
      ))}
    </div>
  );
};

export default Countdown;