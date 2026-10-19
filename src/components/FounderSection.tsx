"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/config/links";

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-white border-b border-[#e5e3dc]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
            Founder &amp; Architect
          </span>
          <h2 className="text-3xl font-black tracking-tight text-[#0f0f0e] sm:text-4xl mt-2 mb-4">
            Built by a Person Who Understands Tech and Business Both
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Dedicated engineering and strategic execution. A specialized team solving the structural challenges of modern agencies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl border border-[#e5e3dc] bg-[#f8f7f4] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Col: Founder Badges & Snapshot */}
            <div className="md:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-2xl overflow-hidden border-2 border-[#e5e3dc] bg-slate-900 shadow-md">
                <Image
                  src="/favicon.png"
                  alt="Anshul Agarwal - Founder & AI Business Expert"
                  fill
                  className="object-cover p-3"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#0f0f0e]">
                  Anshul Agarwal
                </h3>
                <span className="text-sm font-semibold text-emerald-800 block">
                  Founder &amp; AI Business Expert
                </span>
                <span className="text-xs text-slate-500 font-mono block mt-0.5">
                  Building Infra Systems
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-700 bg-white border border-[#e5e3dc] px-3.5 py-2 rounded-lg shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Col: Personal Statement */}
            <div className="md:col-span-7 space-y-5 border-t md:border-t-0 md:border-l border-[#e5e3dc] pt-6 md:pt-0 md:pl-8">
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p className="italic text-[#0f0f0e] font-medium">
                  &ldquo;I built Nyxir because agencies do the hardest work in e-commerce, yet get treated as replaceable commodities.&rdquo;
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  I have been in the e-commerce business since the early days and know firsthand how hard it is to scale, and how margins keep shrinking with the slightest mistake. My background in AI and technology, combined with direct commercial business experience, allows me to target the latest structural challenges e-commerce agencies face today—especially the commoditization and disruption caused by AI.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We don&apos;t build generic templates. We dive deep into your agency&apos;s internal methodology, historical client data, and top case studies to engineer custom infrastructure that makes your agency irreplaceable.
                </p>
              </div>

              {/* Execution & Pilot Capacity Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#e5e3dc] text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-[#e5e3dc]">
                  <span className="font-bold text-slate-900 block mb-0.5">Specialized Team</span>
                  <span className="text-slate-500">Direct technical execution from engineers who know agency economics.</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-[#e5e3dc]">
                  <span className="font-bold text-slate-900 block mb-0.5">Pilot Program Capacity</span>
                  <span className="text-emerald-800 font-bold">Pilot program capacity cap is fixed at 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
