"use client";

import React from "react";

export default function BackgroundStars() {
  const stars = [
    { top: "8%", left: "12%", delay: "0s", duration: "4.5s", size: 12 },
    { top: "15%", left: "85%", delay: "1.2s", duration: "5.5s", size: 14 },
    { top: "28%", left: "4%", delay: "2.4s", duration: "6s", size: 10 },
    { top: "34%", left: "92%", delay: "0.8s", duration: "5s", size: 13 },
    { top: "45%", left: "18%", delay: "3.1s", duration: "6.5s", size: 11 },
    { top: "52%", left: "80%", delay: "1.7s", duration: "4.8s", size: 15 },
    { top: "64%", left: "8%", delay: "2.9s", duration: "5.8s", size: 12 },
    { top: "71%", left: "88%", delay: "0.4s", duration: "6.2s", size: 10 },
    { top: "82%", left: "22%", delay: "1.9s", duration: "5.2s", size: 13 },
    { top: "90%", left: "75%", delay: "3.5s", duration: "4.6s", size: 12 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-5 overflow-hidden select-none"
    >
      {stars.map((star, idx) => (
        <svg
          key={idx}
          className="absolute text-slate-800"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `star-twinkle ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
            willChange: "opacity, transform",
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Subtle 4-pointed architectural star */}
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      ))}
    </div>
  );
}
