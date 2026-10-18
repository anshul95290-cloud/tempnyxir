"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/config/links";

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Founder & Architect
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mt-2 mb-4">
            Built by an Engineer Who Understands Agency Growth
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Direct access to the system architect. No junior account managers or offshore dev outsourcing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-[#fafaf9] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Col: Founder Badges & Snapshot */}
            <div className="md:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-900 shadow-md">
                <Image
                  src="/favicon.png"
                  alt="Anshul Agarwal - Founder & Architect"
                  fill
                  className="object-cover p-3"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Anshul Agarwal
                </h3>
                <span className="text-sm font-semibold text-teal-700 block">
                  Founder & System Architect
                </span>
                <span className="text-xs text-slate-500 font-mono block mt-0.5">
                  Computer Engineering · AI & CRO Systems
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-teal-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Col: Personal Statement */}
            <div className="md:col-span-7 space-y-5 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p className="italic text-slate-900 font-medium">
                  &ldquo;I built Nyxir because agencies do the hardest work in e-commerce, yet get treated as replaceable commodities.&rdquo;
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Combining Computer Engineering, AI automation, and e-commerce CRO, my team researches your business first—then builds custom infrastructure that makes your agency impossible to copy or replace.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We don&apos;t build cookie-cutter templates. We dive deep into your historical client data, identify what made your top case studies succeed, and operationalize that into client-facing software.
                </p>
              </div>

              {/* Direct Access Guarantee */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">Direct Access</span>
                  <span className="text-slate-500">Work directly with the engineer building your stack.</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-0.5">Capacity Cap</span>
                  <span className="text-slate-500">Strictly 4 agencies onboarded per month.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
