"use client";

import React from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProductASection from "@/components/ProductASection";
import ProductBSection from "@/components/ProductBSection";
import ComparisonSection from "@/components/ComparisonSection";
import DataSafetySection from "@/components/DataSafetySection";
import FounderSection from "@/components/FounderSection";
import PilotSection from "@/components/PilotSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import BackgroundStars from "@/components/BackgroundStars";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f8f7f4] text-[#0f0f0e] selection:bg-emerald-600 selection:text-white">
      {/* Subtle gentle star glowing animation in background */}
      <BackgroundStars />

      {/* Continuous Announcement Marquee at the very top */}
      <AnnouncementBanner />
      
      {/* Main Navigation */}
      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Why Agencies Struggle Today (4 Cards) */}
        <ProblemSection />

        {/* Section 3: Product A (Acquisition Pipeline & Video Walkthrough) */}
        <ProductASection />

        {/* Section 4: Product B (Benchmarking, Economic Accounting & Video Demo) */}
        <ProductBSection />

        {/* Section 5: Comparison (Operational Shift By Product A & B) */}
        <ComparisonSection />

        {/* Section 6: Zero-Risk Data Safety */}
        <DataSafetySection />

        {/* Section 7: Founder & AI Business Expert */}
        <FounderSection />

        {/* Section 8: Pilot Program */}
        <PilotSection />

        {/* Section 9: FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
