"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/config/links";
import ProductAVisualWorkflow from "./ProductAVisualWorkflow";

export default function ProductASection() {
  const nodes = [
    {
      num: "01",
      title: "Deep IP & Benchmark Mapping",
      desc: "Your agency's frameworks, CRO rules & niche benchmarks engineered into a custom diagnostic engine.",
    },
    {
      num: "02",
      title: "Multi-Channel Telemetry Links",
      desc: "Unique tracking links deployed across LinkedIn, Cold Email, DMs & Communities.",
    },
    {
      num: "03",
      title: "Instant Diagnostic Experience",
      desc: "Prospect enters store URL → Engine exposes 3 real conversion/margin leaks immediately.",
    },
    {
      num: "04",
      title: "The X+% Show-Rate Lock",
      desc: "Custom 3-Step Remediation Blueprint remains locked until the confirmed discovery call.",
    },
    {
      num: "05",
      title: "Day-0 Slack Kickoff & Ledger",
      desc: "Contract signature triggers an instant Day-0 Executive Slack Briefing + permanent baseline lock.",
    },
  ];

  const pillars = [
    {
      tag: "01 · DEEP RESEARCH & MAPPING",
      title: "Engineered Around Your Agency IP",
      desc: "It takes real research—not a single AI prompt—to build an asset prospects respect. We study your niche, map your agency’s internal material, and code a bespoke diagnostic Micro-SaaS grounded in real category benchmarks.",
    },
    {
      tag: "02 · OMNI-CHANNEL PRESENCE",
      title: "Deploy Everywhere & Track to Closed Revenue",
      desc: "Use your diagnostic engine across cold outreach, founder LinkedIn content, DMs, and communities. Our telemetry links track which exact channel brings signed high-value retainers vs. tire-kickers.",
    },
    {
      tag: "03 · HIGH-INTENT PIPELINE",
      title: "X+% Call Show-Rates & Premium Fee Authority",
      desc: "Because prospects experience your proprietary system and see 3 verified store leaks before speaking to you, they show up to unlock their fix blueprint—and never ask you to discount your retainer.",
    },
    {
      tag: "04 · FRICTIONLESS HANDOFF",
      title: "Instant Day-0 Slack Onboarding",
      desc: "The moment a deal closes, Nyxir dispatches a formatted Day-0 Executive Brief into your internal Slack with verified baseline CAC, net margin, 90-day goals, and store bottlenecks.",
    },
  ];

  return (
    <section id="product-a" className="py-20 md:py-28 bg-white border-b border-[#e5e3dc]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-emerald-800 bg-emerald-50/90 border border-emerald-200/80 px-3.5 py-1 rounded-full mb-3">
            <span>Product A · The Acquisition, Authority &amp; Onboarding Pipeline</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#0f0f0e] sm:text-4xl md:text-5xl mt-2 mb-4 leading-tight">
            Stand Out Instantly, Command Premium Fees, and Onboard in One Click.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Not a 1-prompt AI template. We conduct deep research into your niche, map your agency’s internal methodology and historical benchmarks, and engineer a custom diagnostic Micro-SaaS (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-emerald-800 font-bold">audit.[agency].com</code>) that makes you the undeniable authority across every channel.
          </p>
        </div>

        {/* Animated Horizontal SVG Flowchart */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4 text-center sm:text-left flex items-center justify-between">
            <span>THE 5-STEP ACQUISITION &amp; AUTHORITY ARCHITECTURE</span>
            <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              LIVE TELEMETRY FLOW
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 p-4 bg-[#f8f7f4] border border-[#e5e3dc] rounded-2xl relative">
            {nodes.map((node, i) => (
              <div
                key={node.num}
                className="p-4 bg-white rounded-xl border border-[#e5e3dc] relative flex flex-col justify-between shadow-2xs group hover:border-emerald-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      NODE {node.num}
                    </span>
                    {i < 4 && (
                      <span className="hidden md:inline-block font-mono text-slate-300 text-xs">
                        →
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0f0f0e] mb-1.5 leading-snug">
                    {node.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pil) => (
            <div
              key={pil.tag}
              className="rounded-2xl border border-[#e5e3dc] bg-[#f8f7f4] p-6 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[11px] font-bold text-emerald-700 block mb-2">
                  {pil.tag}
                </span>
                <h3 className="text-base font-bold text-[#0f0f0e] mb-2 leading-snug">
                  {pil.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Animated Visual Workflow Component */}
        <div className="max-w-5xl mx-auto">
          <ProductAVisualWorkflow />

          <div className="text-center pt-5">
            <a
              href={LINKS.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-950 font-bold underline underline-offset-4 font-mono transition-colors"
            >
              Inspect live demo diagnostic node: market-client.vercel.app
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
