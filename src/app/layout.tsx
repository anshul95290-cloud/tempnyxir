import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Stubbed Vercel analytics components for non-Vercel environment
const Analytics = () => null;
const SpeedInsights = () => null;

// ─── Site URL ─────────────────────────────────────────────────────────────────
const siteUrl = "https://nyxir.online";

// ─── Font ─────────────────────────────────────────────────────────────────────
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "NYXIR – DFY AI Infrastructure for E-Commerce Agencies",
    template: "%s | NYXIR",
  },

  description:
    "Custom acquisition tools to win clients (Product A) and profit intelligence to keep them (Product B). Built exclusively for e-commerce performance agencies. 14-day pilot.",

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
    title: "NYXIR – Own the Software Brands Can’t Replace",
    description:
      "Custom acquisition tools to win clients (Product A) and profit intelligence to keep them (Product B). Built for e-commerce paid media agencies.",
    url: siteUrl,
    siteName: "NYXIR",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/major.png",
        width: 1200,
        height: 630,
        alt: "NYXIR – DFY AI Infrastructure for E-Commerce Agencies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NYXIR – Own the Software Brands Can’t Replace",
    description:
      "Custom acquisition tools to win clients (Product A) and profit intelligence to keep them (Product B). Built for e-commerce paid media agencies.",
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

// ─── JSON-LD Structured Data for Search & AI Engines ───────────────────────────
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
        "NYXIR builds Done-For-You (DFY) AI data infrastructure and proprietary software for e-commerce performance marketing agencies. Product A (Client Acquisition & Onboarding Engine) and Product B (Delivery & Retention Intelligence).",
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
      name: "NYXIR – DFY AI Infrastructure for E-Commerce Agencies",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "Custom acquisition tools to win clients (Product A) and profit intelligence to keep them (Product B). Built for e-commerce paid media agencies.",
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Done-For-You AI Infrastructure for Agencies",
      provider: { "@id": `${siteUrl}/#organization` },
      description:
        "Custom micro SaaS diagnostic engines and delivery profit intelligence software built for e-commerce paid media agencies.",
      areaServed: "Worldwide",
      serviceType: "AI Infrastructure & Software Development",
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
            text: "No. Nyxir connects strictly via 100% Read-Only APIs. We cannot launch, pause, or edit live ad campaigns. We deliver pre-launch scores and live Slack directives that your media buyers execute with 1 click.",
          },
        },
        {
          "@type": "Question",
          name: "How does Product A drive an 85%+ discovery call show-rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prospects run your white-labeled micro-SaaS audit to uncover 3 store conversion bottlenecks for free. The step-by-step remediation blueprint is locked on screen and only unlocked live with your growth strategist on the confirmed call.",
          },
        },
        {
          "@type": "Question",
          name: "What happens during the 14-Day Pilot Program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Days 1–3: We research your agency's niche and methodology. Days 4–10: We build your custom diagnostic SaaS and delivery alerts. Days 11–14: You launch with live prospects and test pre-flight gates with zero team disruption.",
          },
        },
        {
          "@type": "Question",
          name: "Do you collect customer names, emails, or payment info?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Never. We collect zero sensitive customer PII. All creative scoring and benchmark pooling operate on scrubbed structural metadata and anonymized financial ratios.",
          },
        },
        {
          "@type": "Question",
          name: "How many agencies do you onboard per month?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To maintain direct founder access, deep business research, and high-fidelity custom architecture, Nyxir strictly caps onboarding at 4 agencies per month.",
          },
        },
      ],
    },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} font-sans antialiased bg-[#fafaf9] text-[#0f172a] selection:bg-[#0d9488] selection:text-white`}
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
