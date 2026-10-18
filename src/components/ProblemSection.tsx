"use client";

import React from "react";
import { AlertCircle, Sliders, TrendingDown } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      index: "01",
      icon: TrendingDown,
      title: "AI Devaluation",
      description:
        "Brands think Meta’s automated algorithms and AI copy tools can replace you—forcing fee discounts, ghosted sales calls, or in-housing.",
      impact: "Agencies get squeezed into 10% fee wars with zero pricing power.",
    },
    {
      index: "02",
      icon: Sliders,
      title: "Same Old Pitches",
      description:
        "Cold emails, generic PDFs, and free Loom audits get ignored or stolen. Brands take your strategy and execute it without hiring you.",
      impact: "Average discovery call show-rates sit at a painful 50–55%.",
    },
    {
      index: "03",
      icon: AlertCircle,
      title: "Month-2 Churn",
      description:
        "Meta Advantage+ dumps 80% of budget into fatiguing ads. By Month 2, founders suffer from amnesia and forget their broken Day-0 numbers.",
      impact: "Clients churn right after you fix their foundational bottlenecks.",
    },
  ];

  return (
    <section id="the-problem" className="py-20 md:py-28 bg-[#fafaf9] border-b border-slate-200/80">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            The Industry Bottleneck
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mt-2 mb-4">
            Why Agencies Lose Pricing Power
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            When brands assume AI and Meta automation make media buying a commodity, retainers get squeezed. Here is why the standard agency playbook is failing today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.index}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm hover:border-slate-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {prob.index} · BOTTLENECK
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  <span className="text-slate-900 font-bold">Outcome: </span>
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
