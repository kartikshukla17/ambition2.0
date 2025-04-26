//chinmayi + ananya!
//edit according to design!
//just import it in hero banner for example like this: 
// <Countdown targetDate="2025-04-24T23:59:59" />


"use client";
import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
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

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <p className="font-semibold text-lg">Time left to Register</p>
      <div className="flex gap-4 text-center bg-white p-4 rounded-xl shadow-md">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col">
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-sm text-gray-500">{label}</span>
            <div className="bg-red-500 text-white p-4 rounded-lg">Hello Tailwind</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

