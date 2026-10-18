"use client";

import React from "react";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { LINKS } from "@/config/links";

export default function PilotSection() {
  const steps = [
    {
      days: "Days 1–3",
      title: "Research & Map",
      desc: "We analyze your niche, past client data, sales bottlenecks, and creative frameworks to finalize your unique micro-SaaS concept.",
    },
    {
      days: "Days 4–10",
      title: "Custom Build",
      desc: "We design and code your white-labeled diagnostic tool (`audit.[agency].com`) and set up your pre-flight creative and Slack alerts.",
    },
    {
      days: "Days 11–14",
      title: "Go Live & Test",
      desc: "Deploy links across your acquisition channels, test live prospect show-up rates, and run draft ads through the pre-flight gate.",
    },
  ];

  return (
    <section id="pilot" className="py-20 md:py-32 bg-[#fafaf9] border-b border-slate-200/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full mb-4">
            <Clock className="h-3.5 w-3.5 text-amber-700" />
            <span>Phase-0 Pilot Offer · Max 4 Agencies / Month</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl mt-2 mb-4">
            Try Nyxir With Our 14-Day Pilot Program
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Zero disruption to your current team or ad workflows. We build and launch your custom software stack before you commit to a long-term partnership.
          </p>
        </div>

        {/* 3-Step Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm relative group hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-teal-50 text-teal-800 font-mono text-xs font-bold mb-4">
                  {s.days}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle className="h-4 w-4 text-teal-600 shrink-0" />
                <span>100% Done-For-You by Nyxir</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Action Banner */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to Own Your Software Moat?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule a quick 15-minute pilot call to see if your agency is a good fit for this month&apos;s 4 pilot slots.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINKS.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl bg-teal-500 px-8 text-base font-bold text-slate-950 shadow-lg hover:bg-teal-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Your 15-Min Pilot Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href={LINKS.email}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-6 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Prefer email? Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
