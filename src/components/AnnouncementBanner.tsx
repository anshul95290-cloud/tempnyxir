"use client";

import React from "react";
import { LINKS } from "@/config/links";

export default function AnnouncementBanner() {
  const marqueeContent = (
    <div className="flex items-center gap-6 whitespace-nowrap shrink-0">
      <span className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-emerald-400 font-bold">PHASE-0 PILOT PROGRAM NOW OPEN FOR E-COMMERCE AGENCIES</span>
      </span>
      <span className="text-slate-500">·</span>
      <span className="text-slate-200">
        DEPLOY CUSTOM ACQUISITION & CROSS-BRAND ECONOMIC INFRASTRUCTURE INSIDE YOUR AGENCY
      </span>
      <span className="text-slate-500">·</span>
      <span className="text-amber-400 font-bold">STRICTLY LIMITED TO 4 PARTNER AGENCIES PER MONTH</span>
      <span className="text-slate-500">·</span>
      <a
        href={LINKS.primaryCta}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline underline-offset-4 hover:text-emerald-300 font-bold transition-colors"
      >
        [GET A PILOT NOW →]
      </a>
      <span className="text-slate-600 px-2">{"///"}</span>
    </div>
  );

  return (
    <aside aria-label="Announcement" className="relative w-full bg-[#0F0F0E] text-[#F8F7F4] border-b border-[#262624] py-2.5 text-xs font-mono tracking-wide overflow-hidden z-50">
      <div className="flex w-full overflow-hidden select-none">
        <div className="animate-marquee flex items-center">
          {marqueeContent}
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </aside>
  );
}
