"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { LINKS } from "@/config/links";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e5e3dc] bg-[#f8f7f4]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-8 px-6 sm:px-8">
        {/* Zone 1: Brand wordmark */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <span className="text-2xl font-black tracking-tight text-[#0f0f0e] group-hover:text-emerald-700 transition-colors">
            NYXIR
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono tracking-wide text-slate-400 border-l border-slate-300 pl-2.5">
            AI Data Infrastructure for Agencies
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a
            href="#the-problem"
            className="hover:text-[#0f0f0e] transition-colors whitespace-nowrap"
          >
            The Problem
          </a>
          <a
            href="#product-a"
            className="hover:text-[#0f0f0e] transition-colors whitespace-nowrap"
          >
            Product A
          </a>
          <a
            href="#product-b"
            className="hover:text-[#0f0f0e] transition-colors whitespace-nowrap"
          >
            Product B
          </a>
          <a
            href="#comparison"
            className="hover:text-[#0f0f0e] transition-colors whitespace-nowrap"
          >
            Why Nyxir
          </a>
          <a
            href="#data-safety"
            className="hover:text-[#0f0f0e] transition-colors whitespace-nowrap"
          >
            Data Safety
          </a>
          <a
            href="#founder"
            className="hover:text-[#0f0f0e] transition-colors whitespace-nowrap"
          >
            Founder
          </a>
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={LINKS.primaryCta}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#0f0f0e] px-5 text-sm font-bold text-white shadow-xs hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            Get a Pilot
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-[#0f0f0e] hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#e5e3dc] bg-[#f8f7f4] px-6 py-5 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4 text-sm font-semibold text-slate-700">
            <a
              href="#the-problem"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#0f0f0e] py-1"
            >
              The Problem
            </a>
            <a
              href="#product-a"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#0f0f0e] py-1"
            >
              Product A (Acquire & Onboard)
            </a>
            <a
              href="#product-b"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#0f0f0e] py-1"
            >
              Product B (Benchmarking & Economics)
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#0f0f0e] py-1"
            >
              Why Nyxir (Operational Shift)
            </a>
            <a
              href="#data-safety"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#0f0f0e] py-1"
            >
              Data Safety
            </a>
            <a
              href="#founder"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#0f0f0e] py-1"
            >
              Founder & Architect
            </a>
            <div className="pt-2 border-t border-[#e5e3dc] flex flex-col gap-2">
              <a
                href={LINKS.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-700 font-bold hover:underline"
              >
                Inspect Live Diagnostic Node ↗
              </a>
              <a
                href={LINKS.primaryCta}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2.5 bg-[#0f0f0e] text-white rounded-lg font-bold text-sm"
              >
                Get a Pilot →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
