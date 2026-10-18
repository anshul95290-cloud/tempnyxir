"use client";

import React from "react";
import { ShieldCheck, EyeOff, Lock, Server } from "lucide-react";

export default function DataSafetySection() {
  const pillars = [
    {
      icon: Lock,
      step: "01 · READ-ONLY ACCESS",
      title: "100% Read-Only API",
      description:
        "Nyxir cannot write to live ad campaigns. We never launch, pause, or mutate live Meta/TikTok ad sets. Our engine outputs directives that your media buyers execute in 1 click.",
    },
    {
      icon: EyeOff,
      step: "02 · ZERO PII COLLECTED",
      title: "Zero Sensitive PII Collected",
      description:
        "We never collect, store, or view customer names, emails, phone numbers, or credit card info. We only parse anonymized Shopify order IDs, refund ratios, and contribution margin deltas.",
    },
    {
      icon: Server,
      step: "03 · ANONYMOUS BENCHMARKS",
      title: "Anonymous Pattern Math (n ≥ 5)",
      description:
        "Brand names, creative files, and logos are strictly scrubbed. Cross-agency category benchmarks only unlock when at least 5 distinct agencies contribute data to that specific e-commerce vertical.",
    },
  ];

  return (
    <section id="data-safety" className="py-20 md:py-28 bg-[#f8f7f4] border-b border-[#e5e3dc]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-emerald-800 bg-emerald-50/90 border border-emerald-200/80 px-3.5 py-1 rounded-full mb-3">
            <ShieldCheck className="h-4 w-4 text-emerald-700" />
            <span>Zero-Risk Security Governance</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#0f0f0e] sm:text-4xl md:text-5xl mt-2 mb-4">
            Zero Risk. We Never Touch Risky Data.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Strict operational boundaries engineered to keep client data private and liability at zero.
          </p>
        </div>

        {/* Animated Horizontal Security Pipeline Graphic */}
        <div className="max-w-5xl mx-auto mb-14 p-5 sm:p-6 bg-white border border-[#e5e3dc] rounded-2xl shadow-xs">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-3 text-center sm:text-left">
            DATA SECURITY &amp; SANITIZATION PIPELINE
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#f8f7f4] border border-[#e5e3dc] text-center">
              <span className="text-emerald-700 font-bold block mb-1">01 · READ-ONLY</span>
              <span className="text-slate-800 font-bold block">[Read-Only API Tokens]</span>
              <span className="text-[11px] text-slate-500">Zero Campaign Mutation</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f8f7f4] border border-[#e5e3dc] text-center">
              <span className="text-emerald-700 font-bold block mb-1">02 · NO PII</span>
              <span className="text-slate-800 font-bold block">[Zero Customer PII]</span>
              <span className="text-[11px] text-slate-500">No Names, Emails, Cards</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f8f7f4] border border-[#e5e3dc] text-center">
              <span className="text-emerald-700 font-bold block mb-1">03 · SANITIZATION</span>
              <span className="text-slate-800 font-bold block">[Brand &amp; Logo Scrubber]</span>
              <span className="text-[11px] text-slate-500">Structural Vectors Only</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f8f7f4] border border-[#e5e3dc] text-center">
              <span className="text-emerald-700 font-bold block mb-1">04 · SOVEREIGN</span>
              <span className="text-slate-800 font-bold block">[n ≥ 5 Vertical Lock]</span>
              <span className="text-[11px] text-slate-500">Never Below 5 Agencies</span>
            </div>
          </div>
        </div>

        {/* 3 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#e5e3dc] bg-white p-8 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs font-bold text-slate-400 block mb-2">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-[#0f0f0e] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary Footer */}
        <div className="mt-12 max-w-5xl mx-auto rounded-xl border border-[#e5e3dc] bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
            <span>
              <strong>Private by default:</strong> Your client roster and raw creative files are never exposed to competitors.
            </span>
          </div>
          <span className="font-mono text-slate-500 font-medium">
            SOC2-Compliant Telemetry Standards
          </span>
        </div>

      </div>
    </section>
  );
}
