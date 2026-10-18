"use client";

import React from "react";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#0f172a] selection:bg-teal-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ProductASection />
        <ProductBSection />
        <ComparisonSection />
        <DataSafetySection />
        <FounderSection />
        <PilotSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
