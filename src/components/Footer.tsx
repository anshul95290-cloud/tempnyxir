"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/config/links";

export default function Footer() {
  return (
    <footer className="bg-[#fafaf9] border-t border-slate-200 py-14">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-200">
          <div>
            <span className="text-xl font-black tracking-tight text-slate-900 block mb-1">
              NYXIR
            </span>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              Done-For-You AI Data Infrastructure for E-Commerce Paid Media Agencies. We never run ads. We give agencies proprietary software to win clients and profit intelligence to keep them.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#the-problem" className="hover:text-slate-900 transition-colors">
              The Problem
            </a>
            <a href="#product-a" className="hover:text-slate-900 transition-colors">
              Product A
            </a>
            <a href="#product-b" className="hover:text-slate-900 transition-colors">
              Product B
            </a>
            <a href="#comparison" className="hover:text-slate-900 transition-colors">
              Why Nyxir
            </a>
            <a href="#data-safety" className="hover:text-slate-900 transition-colors">
              Data Safety
            </a>
            <a href="#founder" className="hover:text-slate-900 transition-colors">
              Founder
            </a>
            <a
              href={LINKS.llmsTxt}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-900 font-mono"
            >
              /llms.txt
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 NYXIR. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built by Anshul Agarwal</span>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-teal-700 inline-flex items-center gap-1 font-semibold"
            >
              LinkedIn <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={LINKS.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-900 font-bold"
            >
              Book 15-Min Pilot Call →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
