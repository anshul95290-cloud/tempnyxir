"use client";

import React from "react";
import { Check, X, Minus } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    {
      feature: "Helps You Win Clients",
      nyxir: "Custom White-Labeled Micro-SaaS",
      nyxirGood: true,
      agencies: "Free Loom audits & static PDFs",
      dashboards: "No (internal analytics only)",
    },
    {
      feature: "Stops Fee Discounting",
      nyxir: "Proprietary software positioning",
      nyxirGood: true,
      agencies: "10% fee price wars",
      dashboards: "No impact on agency pricing",
    },
    {
      feature: "Scores Ads Before Spend",
      nyxir: "0–100 Pre-Flight Saturation Gate",
      nyxirGood: true,
      agencies: "Creative guesswork & hope",
      dashboards: "Post-spend analytics only",
    },
    {
      feature: "Tracks Net Shopify Cash",
      nyxir: "Yes (Net cash after refunds)",
      nyxirGood: true,
      agencies: "Meta-reported ROAS only",
      dashboards: "Surface-level vanity numbers",
    },
    {
      feature: "Done-For-You Infrastructure",
      nyxir: "100% DFY (Custom built in 3 wks)",
      nyxirGood: true,
      agencies: "Manual Google Drive files",
      dashboards: "DIY software (requires setup)",
    },
    {
      feature: "Destroys Month-2 Amnesia",
      nyxir: "Pins verified Day-0 baselines",
      nyxirGood: true,
      agencies: "Client disputes & churn",
      dashboards: "No baseline memory",
    },
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            5-Second Comparison
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mt-2 mb-4">
            Why Agencies Choose Nyxir
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Traditional pitches waste hours on unbillable work. Generic creative dashboards only tell you what already failed. Nyxir gives you proprietary software across both acquisition and delivery.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold uppercase tracking-wider text-slate-600">
                <th className="p-4 sm:p-5">Capability</th>
                <th className="p-4 sm:p-5 bg-teal-50/70 text-teal-900 border-x border-teal-200/60 font-black">
                  Nyxir (A + B)
                </th>
                <th className="p-4 sm:p-5">Standard Agencies</th>
                <th className="p-4 sm:p-5">Motion / Dashboards</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 bg-teal-50/30 border-x border-teal-100 font-bold text-teal-950">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span>{row.nyxir}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0">
                        <X className="h-3 w-3 stroke-[2.5]" />
                      </div>
                      <span>{row.agencies}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                        <Minus className="h-3 w-3" />
                      </div>
                      <span>{row.dashboards}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
