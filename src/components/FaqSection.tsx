"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does Nyxir manage our ad campaigns or write to our Meta ad accounts?",
      a: "No. Nyxir connects strictly via 100% Read-Only APIs. We never launch, pause, or mutate live ad campaigns directly. Instead, we deliver pre-flight validation scores and live Slack directives that your media buyers execute and log with 1 click.",
    },
    {
      q: "How does Product A drive an 85%+ discovery call show-rate?",
      a: "Prospects run your white-labeled diagnostic micro-SaaS to expose 3 store conversion and margin bottlenecks for free. However, the custom 3-step remediation blueprint to fix those leaks remains locked on screen with the notice that their growth strategist will unlock it live on their confirmed call. This gives the brand founder an immediate financial incentive to attend the session.",
    },
    {
      q: "How does Product B deliver Cross-Brand Benchmarking & Ad Economic Accounting?",
      a: "Product B pools creative vectors and ad auction telemetry across your agency portfolio (Day 1) and vertical benchmarks (strictly at n ≥ 5 agencies). It connects 12 multimodal creative tags and workflow modes (100% Human vs. Hybrid vs. Synthetic AI) directly to verified Shopify order and refund webhooks—uniting pre-flight 0–100 scoring, live Slack Advantage+ circuit-breakers, algorithmic Monday briefs, and Day-0 pinned retention proof memos.",
    },
    {
      q: "How will our agency get traffic to our custom diagnostic micro-SaaS?",
      a: "Because the diagnostic engine is genuinely useful and free, it cuts through the noise far better than cold pitches or ebooks. You deploy unique telemetry links across founder LinkedIn posts, cold email sequences, DMs, and communities. Our ledger tracks which exact acquisition channel generates signed high-value retainers versus tire-kickers.",
    },
    {
      q: "How many agencies do you onboard per month and what is the pilot timeline?",
      a: "To maintain high-fidelity implementation, custom niche research, and direct founder access, Nyxir strictly caps onboarding at 4 partner agencies per month. The Phase-0 Pilot program runs for 14 days: Days 1–3 are dedicated to Research & Mapping, Days 4–10 to Custom Build, and Days 11–14 to Live Deployment and testing with zero team disruption.",
    },
    {
      q: "Do you collect customer names, emails, or sensitive payment info?",
      a: "Never. We collect zero sensitive customer PII. All creative scoring, angle saturation indices, and cross-agency benchmark pools operate strictly on scrubbed structural metadata and anonymized financial ratios.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-[#e5e3dc]">
      <div className="mx-auto max-w-[860px] px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-black tracking-tight text-[#0f0f0e] sm:text-4xl mt-2 mb-3">
            Straightforward Answers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our data security boundaries, 14-day pilot, and cross-brand architecture.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-[#e5e3dc] bg-[#f8f7f4] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-[#0f0f0e] hover:text-emerald-700 transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-700" : ""
                    }`}
                  />
                </button>

                {/* Always rendered in the DOM for search bots & AI crawlers */}
                <div
                  className={`px-5 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-[#e5e3dc]/70 transition-all duration-200 ${
                    isOpen ? "py-5 opacity-100 block" : "max-h-0 py-0 opacity-0 hidden"
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
