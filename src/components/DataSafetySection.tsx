"use client";

import React from "react";
import { ShieldCheck, EyeOff, Lock, Server } from "lucide-react";

export default function DataSafetySection() {
  const pillars = [
    {
      icon: Lock,
      step: "01 // READ-ONLY",
      title: "100% Read-Only API",
      description:
        "Nyxir cannot write to live ad campaigns. We never launch, pause, or mutate live Meta/TikTok ad sets. Our engine outputs directives that your media buyers execute in 1 click.",
    },
    {
      icon: EyeOff,
      step: "02 // ZERO PII",
      title: "Zero Sensitive PII Collected",
      description:
        "We never collect, store, or view customer names, emails, phone numbers, or credit card info. We only parse anonymized Shopify order IDs, refund ratios, and contribution margin deltas.",
    },
    {
      icon: Server,
      step: "03 // ANONYMOUS",
      title: "Anonymous Pattern Math (n ≥ 5)",
      description:
        "Brand names, creative files, and logos are strictly scrubbed. Cross-agency category benchmarks only unlock when at least 5 distinct agencies contribute data to that specific e-commerce vertical.",
    },
  ];

  return (
    <section id="data-safety" className="py-20 md:py-28 bg-[#fafaf9] border-b border-slate-200/80">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200/80 px-3.5 py-1 rounded-full mb-3">
            <ShieldCheck className="h-4 w-4 text-teal-700" />
            <span>Enterprise Security & Trust</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mt-2 mb-4">
            Zero Risk. We Never Touch Risky Data.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We enforce strict operational boundaries to keep your agency protected and liability at zero.
          </p>
        </div>

        {/* 3 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:border-teal-300 hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-bold text-slate-400 block mb-2">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div className="mt-12 max-w-5xl mx-auto rounded-xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-teal-600 shrink-0" />
            <span>
              <strong>Private by default:</strong> Your client list and raw creatives are never visible to competitors.
            </span>
          </div>
          <span className="font-mono text-slate-400 font-medium">
            SOC2-Compliant Telemetry Standards
          </span>
        </div>
      </div>
    </section>
  );
}
