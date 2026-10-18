"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Mail,
  ChevronDown,
  FileText,
  MousePointerClick,
  Clock,
  Zap
} from "lucide-react";
import { LINKS } from "@/config/links";

export default function Home() {
  // Simple state for FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary selection:text-white animate-fade-in">
      
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-50 w-full border-b border-brand-light bg-brand-bg/85 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 sm:px-8">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-brand-primary to-teal-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              NYXIR
            </span>
            <div className="h-2 w-2 rounded-full bg-brand-secondary animate-pulse" />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
            <a href="#why-fail" className="hover:text-brand-primary transition-colors">Why Custom Tools</a>
            <a href="#what-we-build" className="hover:text-brand-primary transition-colors">What We Build</a>
            <a href="#how-it-works" className="hover:text-brand-primary transition-colors">Process</a>
            <a href="#roi" className="hover:text-brand-primary transition-colors">ROI Math</a>
            <a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a>
          </nav>

          <div>
            <a
              href={LINKS.primaryCta || "#cta-section"}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-primary px-5 text-sm font-semibold text-white shadow-md shadow-brand-primary/10 hover:bg-brand-primaryHover hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Design Your System
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-36 bg-grid-pattern">
        {/* Soft animated gradient background behind the text */}
        <div className="absolute inset-0 -z-10 animated-gradient-bg opacity-75" />
        
        {/* Floating gradient decorative shapes */}
        <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/10 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl" style={{ animation: "float 6s ease-in-out infinite" }} />
        
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 text-center">
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-teal-50/50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-primary mb-6 md:mb-8 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-brand-secondary animate-pulse" />
            <span>Done-For-You Lead Generation Architecture</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-[1.1] animate-fade-in-up mb-6">
            Micro SaaS <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-primary to-teal-500 bg-clip-text text-transparent">
              Sales Engine
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-brand-muted leading-relaxed mb-10 md:mb-12 animate-fade-in-up">
            You get an asset that attaches to your lead and sales systems and funnels high‑intent clients, while increasing your credibility, trust, and engagement with your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-6 animate-fade-in-up">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <a
                href={LINKS.primaryCta || "#cta-section"}
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-brand-primary px-8 text-base font-bold text-white shadow-xl shadow-brand-primary/20 hover:bg-brand-primaryHover hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Design Your System
                <ArrowRight className="ml-2.5 h-5 w-5" />
              </a>
              <a
                href={LINKS.demoMicroSaaS || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 text-xs text-brand-muted hover:text-brand-primary hover:underline font-medium transition-colors"
              >
                one of the client demo micro saas
              </a>
            </div>
            
            <a
              href={LINKS.email || "mailto:hello@nyxir.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl border border-brand-light bg-brand-white/80 backdrop-blur-sm px-8 text-base font-semibold hover:bg-brand-white hover:border-brand-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="mr-2.5 h-5 w-5 text-brand-primary" />
              Or email us
            </a>
          </div>

          {/* Dashboard SVG Illustration placeholder */}
          <div className="mt-16 md:mt-24 max-w-4xl mx-auto rounded-2xl border border-brand-light bg-brand-white p-2.5 shadow-2xl animate-fade-in-up">
            <div className="rounded-xl border border-brand-light/70 overflow-hidden bg-slate-50 relative aspect-[16/9] flex items-center justify-center">
              <svg className="w-full h-full text-brand-primary/5 p-8" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
                <rect width="800" height="450" fill="#FCFDFD"/>
                <path d="M50 0V450M150 0V450M250 0V450M350 0V450M450 0V450M550 0V450M650 0V450M750 0V450" stroke="#0D9488" strokeOpacity="0.04"/>
                <path d="M0 50H800M0 150H800M0 250H800M0 350H800" stroke="#0D9488" strokeOpacity="0.04"/>
                <circle cx="150" cy="225" r="40" fill="#0D9488" fillOpacity="0.1" stroke="#0D9488" strokeWidth="2"/>
                <circle cx="400" cy="225" r="50" fill="#F97316" fillOpacity="0.1" stroke="#F97316" strokeWidth="2" strokeDasharray="4 4"/>
                <circle cx="650" cy="225" r="40" fill="#0D9488" fillOpacity="0.1" stroke="#0D9488" strokeWidth="2"/>
                <path d="M190 225H350" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 6"/>
                <path d="M450 225H610" stroke="#0D9488" strokeWidth="2"/>
                <path d="M125 235L140 215L155 225L170 205" stroke="#0D9488" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M625 230L640 210L655 220L670 200" stroke="#0D9488" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="100" y="130" width="100" height="24" rx="12" fill="#F1F5F9" stroke="#E2E8F0"/>
                <text x="150" y="146" fill="#475569" fontSize="10" fontWeight="600" textAnchor="middle">Interactive Lead Magnet</text>
                <rect x="350" y="120" width="100" height="24" rx="12" fill="#FEF3C7" stroke="#FCD34D"/>
                <text x="400" y="136" fill="#B45309" fontSize="10" fontWeight="600" textAnchor="middle">Qualifying CRM Engine</text>
                <rect x="600" y="130" width="100" height="24" rx="12" fill="#E0F2FE" stroke="#BAE6FD"/>
                <text x="650" y="146" fill="#0369A1" fontSize="10" fontWeight="600" textAnchor="middle">Booked Pipeline</text>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent">
                <div className="bg-brand-white/95 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl border border-brand-light max-w-sm sm:max-w-md text-center transform hover:scale-[1.02] transition-transform">
                  <span className="text-[10px] uppercase tracking-widest text-brand-secondary font-bold">Interactive Platform Overview</span>
                  <h3 className="text-sm sm:text-base font-bold text-brand-dark mt-1">Your Custom Micro SaaS Dashboard</h3>
                  <p className="text-xs text-brand-muted mt-2">
                    Attracts anonymous web traffic, delivers instant calculations or assessment scores, segments users by budget, and pushes warm leads directly to your CRM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY YOUR OLD LEAD MAGNETS ARE FAILING */}
      <section id="why-fail" className="py-20 md:py-28 border-y border-brand-light bg-brand-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              Why Your Old Lead Magnets Are Failing
            </h2>
            <p className="mt-4 text-lg text-brand-muted leading-relaxed">
              Standard lead magnets no longer stand out. In a world saturated with generic AI content, prospects expect instant utility and interactive value before they schedule a call.
            </p>
          </div>

          {/* 4 Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-2xl border border-brand-light bg-brand-bg p-8 hover:border-brand-primary/30 transition-all hover:shadow-lg group">
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Static PDFs and courses are ignored</h3>
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                People can get similar information from AI instantly. Static content feels low‑value, requires cognitive effort to read, and gets skipped.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-light bg-brand-bg p-8 hover:border-brand-primary/30 transition-all hover:shadow-lg group">
              <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Tools can&apos;t be copy‑pasted</h3>
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                Interactive tools and micro SaaS experiences are actually used and can&apos;t be cloned with a single prompt. They require specialized infrastructure.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-light bg-brand-bg p-8 hover:border-brand-primary/30 transition-all hover:shadow-lg group">
              <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Tools build real credibility</h3>
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                When prospects use a helpful tool, they experience your technical and functional expertise firsthand, which boosts status, authority, and trust.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-light bg-brand-bg p-8 hover:border-brand-primary/30 transition-all hover:shadow-lg group">
              <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Inboxes and DMs are flooded</h3>
              <p className="text-brand-muted leading-relaxed text-sm sm:text-base">
                LinkedIn, cold email, and generic funnels are saturated. A unique, free, high-utility tool cuts through the noise better than another dry ebook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT WE BUILD FOR YOU */}
      <section id="what-we-build" className="py-20 md:py-28 bg-brand-bg">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">The Core Asset</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl mt-2">
              What We Build For You
            </h2>
            <p className="mt-4 text-lg text-brand-muted leading-relaxed">
              NYXIR designs and builds a custom micro SaaS lead magnet that acts as a sales engine. It plugs directly into your CRM and lead systems to attract, qualify, and warm up high‑intent prospects automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-brand-light bg-brand-white p-6 shadow-sm hover:border-brand-primary/40 hover:shadow-md transition-all">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">01. Asset</div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Custom Micro SaaS</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Designed specifically around your agency&apos;s niche, internal datasets, frameworks, and your biggest client problems.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-light bg-brand-white p-6 shadow-sm hover:border-brand-primary/40 hover:shadow-md transition-all">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">02. Stack</div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Connected Funnel</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Captures lead data, scores or segments prospects, and pushes the hottest ones into your CRM pipeline for instant booking.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-light bg-brand-white p-6 shadow-sm hover:border-brand-primary/40 hover:shadow-md transition-all">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">03. Economy</div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Low Operating Cost</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Uses reliable API services and free tiers where possible, keeping your ongoing software overhead under 300–400 USD/month.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-light bg-brand-white p-6 shadow-sm hover:border-brand-primary/40 hover:shadow-md transition-all">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">04. conversion</div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Psychology UX</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                The visual layout, copywriting, microcopy, and flows are custom-engineered to subtly position your agency as the logical partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW IT WORKS */}
      <section id="how-it-works" className="py-20 md:py-28 border-t border-brand-light bg-brand-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-secondary font-bold">The Process</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl mt-2">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-brand-muted leading-relaxed">
              We handle the strategy, custom coding, UX copywriting, and tech integrations from concept to launch in exactly three weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            <div className="hidden lg:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-brand-primary/10 -z-10" />

            <div className="rounded-2xl border border-brand-light bg-brand-bg p-8 relative hover:border-brand-primary/30 transition-colors">
              <span className="absolute -top-5 right-6 text-6xl font-black text-slate-200/50">01</span>
              <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                <MousePointerClick className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Step 1 – Deep Dive & Concept</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                NYXIR reviews your niche, CRM stack, sales numbers, and client pain points, while analyzing current market gaps. Together, we finalize a micro SaaS idea your clients will genuinely want to use.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-light bg-brand-bg p-8 relative hover:border-brand-primary/30 transition-colors">
              <span className="absolute -top-5 right-6 text-6xl font-black text-slate-200/50">02</span>
              <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
                <Cpu className="h-5 w-5 text-brand-secondary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Step 2 – Build & Integrate</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                NYXIR designs and builds the complete responsive web application, structuring robust backend flows. We connect the output forms directly to your CRM, keeping operational costs low.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-light bg-brand-bg p-8 relative hover:border-brand-primary/30 transition-colors">
              <span className="absolute -top-5 right-6 text-6xl font-black text-slate-200/50">03</span>
              <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                <TrendingUp className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Step 3 – Launch, Optimize, Maintain</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                NYXIR launches the tool, tests it, and includes one free iteration/update. You get 1 month of basic maintenance and simple strategies for distributing the tool in free communities and channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT ONE TOOL CAN BE WORTH */}
      <section id="roi" className="py-20 md:py-28 bg-brand-bg border-t border-brand-light">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Financial Leverage</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl mt-2">
              What One Tool Can Be Worth
            </h2>
            <p className="mt-4 text-lg text-brand-muted leading-relaxed">
              Unlike static checklists or templates, a well-designed interactive tool creates high-intent engagement. By solving a small core problem for your visitors, it naturally converts a portion of them into warm inquiries.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-light bg-brand-white p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-teal-50 rounded-bl-full -z-10" />
            
            <h3 className="text-xl font-extrabold text-brand-dark mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5 text-brand-secondary" />
              Hypothetical Agency ROI Scenario
            </h3>

            <p className="text-brand-muted text-sm sm:text-base mb-8 leading-relaxed">
              Suppose an agency&apos;s core high-ticket service is priced at <strong>5,000 USD</strong> per client. If a custom micro SaaS tool attracts traffic organically or via warm outreach, here is the basic mathematical leverage of that asset over time:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-brand-light py-8 mb-8">
              <div className="text-center sm:text-left">
                <span className="block text-xs uppercase tracking-widest text-brand-muted font-bold mb-1">Target Traffic</span>
                <span className="text-3xl font-black text-brand-dark">500</span>
                <span className="block text-xs text-brand-muted mt-1">Qualified Visitors</span>
              </div>
              <div className="text-center sm:text-left sm:border-l sm:border-brand-light sm:pl-6">
                <span className="block text-xs uppercase tracking-widest text-brand-muted font-bold mb-1">Conversion Rate</span>
                <span className="text-3xl font-black text-brand-primary">~2%</span>
                <span className="block text-xs text-brand-muted mt-1">Close to Paid Contract</span>
              </div>
              <div className="text-center sm:text-left sm:border-l sm:border-brand-light sm:pl-6">
                <span className="block text-xs uppercase tracking-widest text-brand-muted font-bold mb-1">New Contracts</span>
                <span className="text-3xl font-black text-brand-secondary">10</span>
                <span className="block text-xs text-brand-muted mt-1">High-Intent Clients</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-brand-light flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-muted font-bold block mb-0.5">Calculated Pipeline Revenue</span>
                <span className="text-2xl sm:text-3xl font-black text-brand-dark">
                  10 Clients × $5,000 = <span className="text-brand-primary">$50,000 USD</span>
                </span>
              </div>
              <div className="text-xs text-brand-muted sm:max-w-[200px] text-center sm:text-right leading-relaxed">
                Exact conversion rates depend on traffic quality and niche fit, but the numbers show the compounding power of one useful asset.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHERE LEAD GENERATION IS HEADING */}
      <section className="py-20 md:py-28 border-t border-brand-light bg-brand-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Future Outlook</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl mt-2 mb-6">
                Where Lead Generation Is Heading
              </h2>
              <p className="text-brand-muted leading-relaxed mb-6">
                B2B and agency marketing is undergoing a generational shift. The old methods of locking surface-level generic tips behind a PDF gate are dying. Smart prospects want immediate utility, customized insights, and self-serve value.
              </p>
              <p className="text-brand-muted leading-relaxed">
                By deploying an interactive micro SaaS funnel, you capture the user&apos;s data parameters naturally, score their needs, and transition them to a call when they are already convinced of your analytical depth.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="space-y-6">
                <div className="rounded-2xl border border-brand-light bg-brand-bg p-6 relative">
                  <div className="absolute -top-3 -left-3 text-4xl text-brand-primary/20 font-serif">&ldquo;</div>
                  <p className="text-brand-dark font-medium italic text-base leading-relaxed">
                    The next wave of B2B lead gen will be shaped by interactive tools that show value instantly, not another static download.
                  </p>
                  <span className="block mt-3 text-xs text-brand-muted font-bold">— Growth Marketing Director Perspective</span>
                </div>

                <div className="rounded-2xl border border-brand-light bg-brand-bg p-6 relative">
                  <div className="absolute -top-3 -left-3 text-4xl text-brand-secondary/20 font-serif">&ldquo;</div>
                  <p className="text-brand-dark font-medium italic text-base leading-relaxed">
                    Agencies who embed their core analytical formula in a simple, free-to-use micro-saas convert cold clicks at triple the rate of standard call-booking pages.
                  </p>
                  <span className="block mt-3 text-xs text-brand-muted font-bold">— B2B SaaS Analyst Insights</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-brand-bg border-t border-brand-light">
        <div className="mx-auto max-w-[800px] px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Got Questions?</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-brand-light bg-brand-white overflow-hidden shadow-sm transition-all">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-dark hover:text-brand-primary transition-colors focus:outline-none"
              >
                <span>Is this right for a brand‑new agency with only 1–2 clients?</span>
                <ChevronDown className={`h-5 w-5 text-brand-muted transform transition-transform duration-200 ${openFaq === 0 ? "rotate-180" : ""}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openFaq === 0 ? "max-h-60 opacity-100 border-t border-brand-light/50" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="p-6 text-sm sm:text-base text-brand-muted leading-relaxed">
                  It can be used mainly for credibility and learning the market. It is not a magic tap for instant leads, but it can help a young agency look more serious, demonstrate deep domain knowledge, and collect higher-quality data from prospects early on.
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand-light bg-brand-white overflow-hidden shadow-sm transition-all">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-dark hover:text-brand-primary transition-colors focus:outline-none"
              >
                <span>How will I get traffic to the micro SaaS?</span>
                <ChevronDown className={`h-5 w-5 text-brand-muted transform transition-transform duration-200 ${openFaq === 1 ? "rotate-180" : ""}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openFaq === 1 ? "max-h-60 opacity-100 border-t border-brand-light/50" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="p-6 text-sm sm:text-base text-brand-muted leading-relaxed">
                  Because the tool is free and genuinely useful, it can be shared easily in professional communities, online groups, and as contextual callouts in your content. Over time, you can layer in paid traffic, cold outreach referrals, or strategic partnerships. The core philosophy is to lead with the tool&apos;s value rather than hard‑selling the agency from the start.
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand-light bg-brand-white overflow-hidden shadow-sm transition-all">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-dark hover:text-brand-primary transition-colors focus:outline-none"
              >
                <span>How many clients do you take per month, and when can I expect delivery?</span>
                <ChevronDown className={`h-5 w-5 text-brand-muted transform transition-transform duration-200 ${openFaq === 2 ? "rotate-180" : ""}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openFaq === 2 ? "max-h-60 opacity-100 border-t border-brand-light/50" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="p-6 text-sm sm:text-base text-brand-muted leading-relaxed">
                  NYXIR takes fewer than 4 clients per month to stay focused and maintain high-fidelity implementation. Development and integration take within 3 weeks, with the third week specifically reserved for custom refinements, styling adjustments, and testing.
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand-light bg-brand-white overflow-hidden shadow-sm transition-all">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-dark hover:text-brand-primary transition-colors focus:outline-none"
              >
                <span>What is the current offer?</span>
                <ChevronDown className={`h-5 w-5 text-brand-muted transform transition-transform duration-200 ${openFaq === 3 ? "rotate-180" : ""}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openFaq === 3 ? "max-h-60 opacity-100 border-t border-brand-light/50" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="p-6 text-sm sm:text-base text-brand-muted leading-relaxed">
                  The package includes the strategic design, custom coding, copy generation, CRM integrations, one free iteration/update after launch, and 1 month of basic maintenance. Please note that this specific project structure and capacity is only guaranteed for applications received until <strong>25 June</strong>.
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand-light bg-brand-white overflow-hidden shadow-sm transition-all">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-dark hover:text-brand-primary transition-colors focus:outline-none"
              >
                <span>why u should trust us ?</span>
                <ChevronDown className={`h-5 w-5 text-brand-muted transform transition-transform duration-200 ${openFaq === 4 ? "rotate-180" : ""}`} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openFaq === 4 ? "max-h-60 opacity-100 border-t border-brand-light/50" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="p-6 text-sm sm:text-base text-brand-muted leading-relaxed">
                  we believe in top notch quality every time , we take time in doing research , researching trend , analyze the business , find a sweet spot before even building anything , the team has lot of experience in automations and delievering excellent result , while the founder himself have a business background to understand the dynamic of the business
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="cta-section" className="py-20 md:py-32 relative overflow-hidden bg-brand-white border-t border-brand-light">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        
        <div className="mx-auto max-w-[800px] px-6 sm:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-amber-50 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-secondary mb-6">
            <Clock className="h-4 w-4 animate-spin" style={{ animationDuration: "10s" }} />
            <span>Capacity Constraint: Capacity limited to 4 clients / month</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-5xl mb-6">
            Ready To Design Your Micro SaaS?
          </h2>

          <p className="mx-auto max-w-lg text-brand-muted text-base sm:text-lg mb-10 leading-relaxed">
            Let&apos;s build a custom interactive tool that converts qualified clicks into high-ticket agency bookings. Remember, our current offer structure and price guarantees are only available until <strong>25 June</strong>.
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href={LINKS.primaryCta || "#"}
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-brand-primary px-10 text-base font-bold text-white shadow-xl shadow-brand-primary/20 hover:bg-brand-primaryHover hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Design Your System
              <ArrowRight className="ml-2.5 h-5 w-5" />
            </a>

            <a
              href={LINKS.email || "mailto:hello@nyxir.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-brand-primary font-semibold text-sm sm:text-base underline underline-offset-4 decoration-brand-primary/40 transition-colors"
            >
              Prefer email? Contact us here.
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-bg border-t border-brand-light py-12">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-brand-dark tracking-tight">NYXIR</span>
            <span className="text-xs text-brand-muted">© 2026. All rights reserved.</span>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2">
            <span className="text-sm font-bold text-brand-dark">
              built by anshul
            </span>
            <a
              href={LINKS.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-brand-muted hover:text-brand-primary transition-colors p-1 rounded-md hover:bg-brand-light"
              aria-label="LinkedIn"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
