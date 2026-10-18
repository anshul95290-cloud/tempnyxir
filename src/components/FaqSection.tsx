"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does Nyxir manage our ad campaigns or write to our Meta ad accounts?",
      a: "No. Nyxir connects strictly via 100% Read-Only APIs. We never launch, pause, or edit live ad campaigns directly. Instead, we deliver pre-flight scores and live Slack directives that your media buyers execute and log with 1 click.",
    },
    {
      q: "How does Product A drive an 85%+ discovery call show-rate?",
      a: "Prospects run your white-labeled micro-SaaS audit to expose 3 store conversion bottlenecks for free. However, the custom 3-step remediation blueprint to fix those leaks is locked on screen with the notice that their strategist will unlock it live on their confirmed call. This gives the prospect a tangible financial incentive to show up.",
    },
    {
      q: "How will our agency get traffic to our custom micro-SaaS?",
      a: "Because the tool is genuinely useful and free, it cuts through the noise far better than cold pitches or ebooks. You drop unique telemetry links across founder LinkedIn posts, cold emails, DMs, and community threads. Over time, you can also run warm referrals or paid acquisition into it.",
    },
    {
      q: "How many agencies do you onboard per month and what is the timeline?",
      a: "To maintain high-fidelity implementation, custom research, and direct founder access, Nyxir strictly caps onboarding at 4 agencies per month. The 14-day pilot is fully live within two weeks, with the third week reserved for custom refinements and team testing.",
    },
    {
      q: "Do you collect customer names, emails, or sensitive payment info?",
      a: "Never. We collect zero sensitive customer PII. All creative scoring, angle saturation indices, and cross-agency benchmark pools operate strictly on scrubbed structural metadata and anonymized financial ratios.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-[840px] px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mt-2 mb-3">
            Straightforward Answers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about our data boundaries, delivery timeline, and pilot offer.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-[#fafaf9] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 hover:text-teal-700 transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-teal-700" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
