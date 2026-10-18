"use client";

import React from "react";
import { TrendingDown, Sliders, Users, KeyRound } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      index: "01",
      tag: "AI DEVALUATION & FEE SQUEEZE",
      icon: TrendingDown,
      title: "AI Devaluation, Discounting & Churn",
      description:
        "Brand founders believe AI tools and Meta’s automated algorithms can replace agency media buying for a fraction of the cost—forcing you to defend your retainer, give heavy fee discounts, or watch clients churn to go in-house.",
      impact: "Agencies get pushed into price wars and 60-day churn cycles.",
    },
    {
      index: "02",
      tag: "COMMODITY POSITIONING",
      icon: Sliders,
      title: "Zero True Differentiation Factors",
      description:
        "Every agency claims \"better creatives and media buying\" using the same cold emails, static PDFs, and free Loom audits. Without a proprietary asset prospects can experience firsthand, you look identical to 50 other agencies.",
      impact: "Prospects treat your pitch like a commodity and shop on price.",
    },
    {
      index: "03",
      tag: "HYPER-SATURATED MARKET",
      icon: Users,
      title: "Over-Targeted Clients & Tiny Proof Windows",
      description:
        "DTC founders are bombarded with agency pitches every single day. Standard outreach gets ignored, and even after a client signs, you have an unforgivingly short window to prove undeniable bank impact before impatience sets in.",
      impact: "50% discovery call ghost rates and immediate Month-1 pressure.",
    },
    {
      index: "04",
      tag: "ZERO SWITCHING COST",
      icon: KeyRound,
      title: "Nothing Makes a Client Hesitate to Replace You",
      description:
        "Traditional agencies work entirely inside the client’s own ad account. Because you don’t own a cross-brand benchmark network or Day-0 economic ledger, a client can fire you overnight without losing any critical infrastructure.",
      impact: "Zero structural lock-in to protect your long-term retainers.",
    },
  ];

  return (
    <section id="the-problem" className="py-20 md:py-28 bg-[#f8f7f4] border-b border-[#e5e3dc]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
            The Structural Bottleneck
          </span>
          <h2 className="text-3xl font-black tracking-tight text-[#0f0f0e] sm:text-4xl mt-2 mb-4">
            Why E-Commerce Agencies Lose Pricing Power
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Even when your team works tirelessly, four structural pressures force agencies into fee discounts, ghosted pipelines, and early churn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.index}
                className="rounded-2xl border border-[#e5e3dc] bg-white p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[11px] font-bold text-slate-400">
                      {prob.index} · {prob.tag}
                    </span>
                    <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0f0f0e] mb-2.5">
                    {prob.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#e5e3dc]/70 text-xs font-medium text-slate-500">
                  <span className="text-slate-900 font-bold">Impact: </span>
                  {prob.impact}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
