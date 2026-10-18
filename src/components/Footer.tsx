"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/config/links";

export default function Footer() {
  return (
    <footer className="bg-[#f8f7f4] border-t border-[#e5e3dc] py-14">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#e5e3dc]">
          <div>
            <span className="text-xl font-black tracking-tight text-[#0f0f0e] block mb-1">
              NYXIR
            </span>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              Done-For-You AI Data Infrastructure for E-Commerce Paid Media Agencies. We engineer custom-researched acquisition pipelines to win clients and cross-brand economic intelligence to keep them.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#the-problem" className="hover:text-black transition-colors">
              The Problem
            </a>
            <a href="#product-a" className="hover:text-black transition-colors">
              Product A
            </a>
            <a href="#product-b" className="hover:text-black transition-colors">
              Product B
            </a>
            <a href="#comparison" className="hover:text-black transition-colors">
              Why Nyxir
            </a>
            <a href="#data-safety" className="hover:text-black transition-colors">
              Data Safety
            </a>
            <a href="#founder" className="hover:text-black transition-colors">
              Founder
            </a>
            <a
              href={LINKS.llmsTxt}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-900 font-mono font-bold"
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
              className="text-slate-700 hover:text-emerald-700 inline-flex items-center gap-1 font-semibold"
            >
              LinkedIn <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={LINKS.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-900 font-bold"
            >
              Book 15-Min Pilot Call →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
