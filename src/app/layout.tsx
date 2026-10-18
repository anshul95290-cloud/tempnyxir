import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Stubbed Vercel analytics components for non-Vercel environment
const Analytics = () => null;
const SpeedInsights = () => null;

const siteUrl = "https://nyxir.online";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "NYXIR – The AI Infrastructure Layer Brands Can't Build In-House",
    template: "%s | NYXIR",
  },

  description:
    "We engineer your agency’s custom-researched acquisition & onboarding pipeline (Product A) and cross-brand performance & ad economics architecture (Product B) for e-commerce performance agencies.",

  authors: [
    {
      name: "Anshul Agarwal",
      url: "https://www.linkedin.com/in/okanshul/",
    },
  ],
  creator: "Anshul Agarwal",
  publisher: "NYXIR",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "NYXIR – The AI Infrastructure Layer Brands Can’t Build In-House",
    description:
      "Custom acquisition & onboarding pipelines (Product A) and cross-brand benchmarking & ad economic accounting (Product B) built for e-commerce agencies.",
    url: siteUrl,
    siteName: "NYXIR",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/major.png",
        width: 1200,
        height: 630,
        alt: "NYXIR – DFY AI Data Infrastructure for E-Commerce Agencies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NYXIR – The AI Infrastructure Layer Brands Can’t Build In-House",
    description:
      "Custom acquisition & onboarding pipelines (Product A) and cross-brand benchmarking & ad economic accounting (Product B) built for e-commerce agencies.",
    images: ["/major.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "NYXIR",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.png`,
      },
      description:
        "NYXIR engineers Done-For-You (DFY) AI data infrastructure and proprietary software for e-commerce performance marketing agencies: Product A (Acquisition & Onboarding Pipeline) and Product B (Cross-Brand Benchmarking & Ad Economic Accounting).",
      founder: {
        "@type": "Person",
        name: "Anshul Agarwal",
        jobTitle: "Founder & System Architect",
        url: "https://www.linkedin.com/in/okanshul/",
        sameAs: ["https://www.linkedin.com/in/okanshul/"],
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@nyxir.online",
        contactType: "customer service",
      },
      sameAs: ["https://www.linkedin.com/in/okanshul/"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "NYXIR",
      description: "DFY AI Data Infrastructure for E-Commerce Agencies",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "NYXIR – The AI Infrastructure Layer Brands Can’t Build In-House",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "Custom-researched acquisition and onboarding pipelines (Product A) and cross-brand performance & ad economic accounting architecture (Product B) for e-commerce agencies.",
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Done-For-You AI Data Infrastructure for E-Commerce Agencies",
      provider: { "@id": `${siteUrl}/#organization` },
      description:
        "Custom micro-SaaS diagnostic engines, cross-brand benchmarking architectures, and ad economic accounting systems uniting Systems of Intelligence with 1-click Systems of Action.",
      areaServed: "Worldwide",
      serviceType: "AI Infrastructure & Performance Architecture",
      url: siteUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Nyxir manage our ad campaigns or write to our Meta ad accounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Nyxir connects strictly via 100% Read-Only APIs. We cannot launch, pause, or mutate live ad campaigns. We deliver pre-flight validation scores and live Slack directives that your media buyers execute in 1 click.",
          },
        },
        {
          "@type": "Question",
          name: "How does Product A drive an 85%+ discovery call show-rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prospects run your white-labeled diagnostic micro-SaaS to expose 3 store margin leaks for free. The custom remediation blueprint is locked on screen and only unlocked live with your growth strategist on the confirmed strategy call.",
          },
        },
        {
          "@type": "Question",
          name: "How does Product B deliver Cross-Brand Benchmarking & Ad Economic Accounting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Product B pools creative and auction telemetry across your agency portfolio (Day 1) and vertical benchmarks (n >= 5 agencies), pairing 12 multimodal creative vectors with verified Shopify net profit webhooks, pre-flight 0-100 scoring, and Advantage+ Slack circuit-breakers.",
          },
        },
        {
          "@type": "Question",
          name: "What happens during the 14-Day Pilot Program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Days 1–3: Research & Map (agency niche and IP). Days 4–10: Custom Build (white-labeled diagnostic micro-SaaS and delivery alerts). Days 11–14: Go Live (run live leads and test pre-flight gates with zero team disruption).",
          },
        },
        {
          "@type": "Question",
          name: "Do you collect customer names, emails, or sensitive payment info?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Never. We collect zero sensitive customer PII. All creative scoring and benchmark pooling operate strictly on scrubbed structural metadata and anonymized financial ratios.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#f8f7f4] text-[#0f0f0e] selection:bg-[#10b981] selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
