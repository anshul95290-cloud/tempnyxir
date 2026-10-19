"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState<"both" | "productA" | "productB">("both");

  const tableA = [
    {
      dimension: "First Impression & Differentiation",
      without: "Pitches look identical to 50 other agencies (cold emails, static PDFs, and generic slides).",
      withNyxir: "Prospects interact with a custom-researched Diagnostic Micro-SaaS built around your agency’s IP and niche benchmarks.",
    },
    {
      dimension: "Outbound Channel Attribution",
      without: "Tracks \"booked calls\" only—zero visibility into which channel brings high-LTV retainers vs. tire-kickers.",
      withNyxir: "Channel-to-Close Telemetry Links track LinkedIn, cold email, DMs, and communities all the way to signed retainers and sales-cycle speed.",
    },
    {
      dimension: "Discovery Call Show-Up Rate",
      without: "50–55% industry show-up rate; prospects watch free manual Loom audits and ghost the call.",
      withNyxir: "X+% Show-Up Rate—prospects see 3 live store leaks instantly, while the custom Remediation Blueprint unlocks live on the call.",
    },
    {
      dimension: "Retainer Pricing Power",
      without: "Forced to discount fees to win deals because brands treat you like a replaceable vendor.",
      withNyxir: "Command full retainers with zero discounting because prospects experience your technical authority before speaking to sales.",
    },
    {
      dimension: "Sales-to-Delivery Handoff",
      without: "Messy CRM notes; Account Managers waste hours prepping and ask clients repetitive questions on kickoff.",
      withNyxir: "1-Click Day-0 Slack Kickoff Brief fires automatically upon contract signature with verified baseline CAC, margins, and store leaks.",
    },
  ];

  const tableB = [
    {
      dimension: "Cross-Brand Intelligence",
      without: "Every media buyer works in an isolated single-brand silo; lessons on Account #1 never help Account #15.",
      withNyxir: "3-Ring Cross-Brand Architecture pools creative and auction intelligence across your entire agency portfolio (Day 1) and vertical benchmarks.",
    },
    {
      dimension: "Ad Economic Accounting",
      without: "Relies on surface platform ROAS—blind to whether Human or AI ads drive net Shopify bank cash or 35%+ refund rates.",
      withNyxir: "True Economic Accounting Ledger connects 12 creative tags + AI/Human workflow costs to verified Shopify Net Margin, Refunds & 90d LTV.",
    },
    {
      dimension: "Creative Testing & Direction",
      without: "Wastes client budget testing angles that are already saturated across the vertical; Monday briefs rely on guesswork.",
      withNyxir: "System of Intelligence + Action: Pre-Flight 0–100 scoring before spend + 1-Click Monday Briefs pointing to angles with 20+ days of runway.",
    },
    {
      dimension: "Meta Advantage+ Control",
      without: "Meta black-box dumps 80%+ of daily spend into fatiguing or repeat-buyer ads while media buyers notice days later.",
      withNyxir: "Live Slack Circuit-Breakers alert buyers in real time when ASC traps budget, capturing 1-click Expert Decision Traces.",
    },
    {
      dimension: "Client Retention & Switching Cost",
      without: "Clients suffer from Month-2 \"baseline amnesia,\" forget how broken Day 0 was, and can replace you overnight.",
      withNyxir: "Day-0 Pinned Proof Memos prove exact net cash added vs. Day 0—and brands never leave because they cannot replicate your cross-brand data moat in-house.",
    },
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-white border-b border-[#e5e3dc]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-700 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-full mb-3">
            <span>Operational Transformation</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#0f0f0e] sm:text-4xl md:text-5xl mt-2 mb-4">
            Your Agency Without Nyxir vs. With Nyxir
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            See the exact structural shift when you equip your acquisition pipeline with Product A and your delivery floor with Product B.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="inline-flex items-center gap-1.5 p-1.5 mt-8 bg-[#f8f7f4] border border-[#e5e3dc] rounded-xl text-xs font-mono font-bold">
            <button
              onClick={() => setActiveTab("both")}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === "both"
                  ? "bg-[#0f0f0e] text-white shadow-xs"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              Full Agency Shift (A + B)
            </button>
            <button
              onClick={() => setActiveTab("productA")}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === "productA"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              Product A: Acquisition
            </button>
            <button
              onClick={() => setActiveTab("productB")}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === "productB"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-amber-700"
              }`}
            >
              Product B: Delivery &amp; Retention
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* TABLE 1: Product A */}
          {(activeTab === "both" || activeTab === "productA") && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#e5e3dc]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <h3 className="text-base sm:text-lg font-bold text-[#0f0f0e]">
                    Table 1: Acquisition, Authority &amp; Onboarding
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded">
                  PRODUCT A IMPACT
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#e5e3dc] bg-white shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#e5e3dc] bg-[#f8f7f4] text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                      <th className="p-4 sm:p-5 w-1/4">Acquisition Dimension</th>
                      <th className="p-4 sm:p-5 w-3/8 text-rose-800 bg-rose-50/40">
                        ❌ Standard Agency WITHOUT Product A
                      </th>
                      <th className="p-4 sm:p-5 w-3/8 text-emerald-900 bg-emerald-50/60 font-black border-l border-emerald-100">
                        ✅ Partner Agency WITH Product A
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e3dc]">
                    {tableA.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 sm:p-5 font-bold text-slate-900 align-top">
                          {row.dimension}
                        </td>
                        <td className="p-4 sm:p-5 text-slate-600 bg-rose-50/15 align-top leading-relaxed">
                          <div className="flex items-start gap-2">
                            <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                            <span>{row.without}</span>
                          </div>
                        </td>
                        <td className="p-4 sm:p-5 text-slate-900 bg-emerald-50/30 border-l border-emerald-100 font-medium align-top leading-relaxed">
                          <div className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{row.withNyxir}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TABLE 2: Product B */}
          {(activeTab === "both" || activeTab === "productB") && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#e5e3dc]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <h3 className="text-base sm:text-lg font-bold text-[#0f0f0e]">
                    Table 2: Delivery, Ad Economics &amp; Retention
                  </h3>
                </div>
                <span className="text-xs font-mono text-amber-800 font-bold bg-amber-50 px-2.5 py-0.5 rounded">
                  PRODUCT B IMPACT
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#e5e3dc] bg-white shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#e5e3dc] bg-[#f8f7f4] text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                      <th className="p-4 sm:p-5 w-1/4">Delivery &amp; Retention Dimension</th>
                      <th className="p-4 sm:p-5 w-3/8 text-rose-800 bg-rose-50/40">
                        ❌ Standard Agency WITHOUT Product B
                      </th>
                      <th className="p-4 sm:p-5 w-3/8 text-amber-950 bg-amber-50/60 font-black border-l border-amber-100">
                        ✅ Partner Agency WITH Product B
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e3dc]">
                    {tableB.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 sm:p-5 font-bold text-slate-900 align-top">
                          {row.dimension}
                        </td>
                        <td className="p-4 sm:p-5 text-slate-600 bg-rose-50/15 align-top leading-relaxed">
                          <div className="flex items-start gap-2">
                            <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                            <span>{row.without}</span>
                          </div>
                        </td>
                        <td className="p-4 sm:p-5 text-slate-900 bg-amber-50/20 border-l border-amber-100 font-medium align-top leading-relaxed">
                          <div className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                            <span>{row.withNyxir}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
