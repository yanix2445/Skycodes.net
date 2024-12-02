"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 6); // Compte à rebours de 6 mois

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Arrière-plan flottant */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-800 rounded-full blur-3xl opacity-30 top-20 left-10 animate-floating"></div>
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-gray-800 via-gray-700 to-blue-800 rounded-full blur-2xl opacity-20 bottom-10 right-20 animate-floating-reverse"></div>
      </div>

      {/* Contenu principal */}
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
          SkyCode
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          Le futur du commerce, accessible à tous. 🌍
        </p>

        {/* Compteur dynamique */}
        <div className="mt-6 flex justify-center gap-6 text-2xl md:text-4xl font-semibold">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-bold text-cyan-400">
                {value.toString().padStart(2, "0")}
              </span>
              <span className="mt-1 text-sm uppercase tracking-wider text-gray-400">
                {label === "days"
                  ? "Jours"
                  : label === "hours"
                  ? "Heures"
                  : label === "minutes"
                  ? "Minutes"
                  : "Secondes"}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Dans <span className="text-pink-400 font-semibold">6 mois</span>, une
          révolution commence. Rejoignez-nous.
        </p>

        <button className="mt-6 px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 text-white font-medium shadow-md transform hover:scale-105 transition-all">
          Découvrez SkyCode
        </button>
      </div>
    </main>
  );
}
