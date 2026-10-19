"use client";

import React from "react";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { LINKS } from "@/config/links";

export default function PilotSection() {
  const steps = [
    {
      step: "01 · AGENCY ANALYSIS",
      title: "Analyze & Map Your Agency",
      desc: "We analyze your agency, examine industry trends, and thoroughly map the winning patterns and case studies from your top-performing clients.",
    },
    {
      step: "02 · MARKET SENTIMENTS",
      title: "Market Trends & Custom Blueprint",
      desc: "We gather live market trends and buyer sentiments to craft a high-converting micro-SaaS concept and strategic architecture tailored to your niche.",
    },
    {
      step: "03 · CLEAN DESIGN & APIS",
      title: "Bespoke Design, MCP & APIs",
      desc: "We design and build the full system cleanly with modern UI/UX, Model Context Protocol (MCP) integrations, robust APIs, and automated workflows.",
    },
    {
      step: "04 · TESTING & OPTIMIZATION",
      title: "Cost Optimization & Analytics",
      desc: "We test and refine the system so that running costs are kept at an absolute minimum, then connect directly with your preferred analytics platforms.",
    },
  ];

  return (
    <section id="pilot" className="py-20 md:py-32 bg-[#f8f7f4] border-b border-[#e5e3dc] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50/90 border border-amber-200/80 px-4 py-1.5 rounded-full mb-4">
            <Clock className="h-3.5 w-3.5 text-amber-700" />
            <span>Pilot Program · Max 4 Partner Agencies / Month</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#0f0f0e] sm:text-5xl mt-2 mb-4">
            Try Nyxir With Our Pilot Program
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Zero disruptions to your current team or systems. We will analyze your agency and craft the Product A micro-SaaS specifically designed for your agency in this pilot program.
          </p>
        </div>

        {/* 4 Steps Grid of What We Do in the Pilot Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#e5e3dc] bg-white p-6 shadow-xs relative group hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded mb-3 inline-block border border-emerald-100">
                  {s.step}
                </span>
                <h3 className="text-base font-bold text-[#0f0f0e] mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-700 font-mono">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>[ 100% DFY ]</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Action Banner */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#0F0F0E] text-[#F8F7F4] p-8 sm:p-12 text-center shadow-xl border border-[#262624]">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to Deploy Your AI Infrastructure Moat?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule a focused pilot call to see if your agency is a fit for this month&apos;s 4 pilot onboarding slots.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINKS.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl bg-emerald-500 px-8 text-base font-bold text-slate-950 shadow-md hover:bg-emerald-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get a Pilot
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href={LINKS.email}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-13 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 px-6 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Prefer email? Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
