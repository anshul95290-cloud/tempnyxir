import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// Stubbed Vercel analytics components for non-Vercel environment
const Analytics = () => null;
const SpeedInsights = () => null;
import "./globals.css";

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
  // Makes all relative URLs (OG image, canonical) resolve to the domain
  metadataBase: new URL(siteUrl),

  // Title with fallback + template for future pages
  title: {
    default: "NYXIR – Custom Micro SaaS Sales Engine for Agencies",
    template: "%s | NYXIR",
  },

  // Description — accurate, mentions founder for name searchability
  description:
    "NYXIR, founded by Anshul Agarwal, designs and builds custom micro SaaS tools that plug into your agency's CRM and lead system to attract, qualify, and convert high-intent clients. 3-week delivery, done-for-you.",

  // Founder attribution — "built by anshul" + LinkedIn are visible on the page
  authors: [
    {
      name: "Anshul Agarwal",
      url: "https://www.linkedin.com/in/okanshul/",
    },
  ],
  creator: "Anshul Agarwal",
  publisher: "NYXIR",

  // Canonical URL — tells Google this is the one authoritative URL
  alternates: {
    canonical: "/",
  },

  // Favicon
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  // OpenGraph — controls link previews on LinkedIn, WhatsApp, Facebook
  openGraph: {
    title: "NYXIR – Custom Micro SaaS Sales Engine for Agencies",
    description:
      "Custom micro SaaS tools built by Anshul Agarwal's NYXIR — plug directly into your CRM and lead system to attract, qualify, and close high-intent agency clients.",
    url: siteUrl,
    siteName: "NYXIR",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/major.png",
        width: 1200,
        height: 630,
        alt: "NYXIR – Custom Micro SaaS Sales Engine for Agencies by Anshul Agarwal",
      },
    ],
  },

  // Twitter / X Card — controls previews on Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "NYXIR – Custom Micro SaaS Sales Engine for Agencies",
    description:
      "Custom micro SaaS tools built by NYXIR. Founded by Anshul Agarwal. Attract, qualify, and close high-intent agency clients in 3 weeks.",
    images: ["/major.png"],
  },

  // Robots — explicitly allow full Google crawling and indexing
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

  // Stops iOS from auto-converting text into tappable phone/email links
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────
// Plain object — injected as a normal <script> tag (Next.js recommended pattern)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organization — helps Google build a knowledge panel for NYXIR
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
        "NYXIR designs and builds custom micro SaaS lead magnet tools that plug into agency CRM and lead systems to attract, qualify, and convert high-intent clients.",
      founder: {
        "@type": "Person",
        name: "Anshul Agarwal",
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

    // 2. WebSite — describes the site structure to Google
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "NYXIR",
      description: "Micro SaaS Sales Engine for Agencies",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },

    // 3. WebPage — describes this specific homepage
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "NYXIR – Custom Micro SaaS Sales Engine for Agencies",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "NYXIR, founded by Anshul Agarwal, builds custom micro SaaS tools that act as a sales engine — plugging into your agency CRM to attract, qualify, and convert high-intent clients in 3 weeks.",
      inLanguage: "en-US",
    },

    // 4. Service — describes what NYXIR sells (matches page content)
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Custom Micro SaaS Lead Magnet Development",
      provider: { "@id": `${siteUrl}/#organization` },
      description:
        "NYXIR designs and codes a custom interactive micro SaaS tool tailored to your agency's niche, then integrates it with your CRM to capture, score, and convert warm leads automatically.",
      areaServed: "Worldwide",
      serviceType: "Micro SaaS Development & Lead Generation System",
      url: siteUrl,
    },

    // 5. FAQPage — maps exactly to the FAQ section (id="faq") on page.tsx
    // These are the real questions and answers visible on the page
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is this right for a brand-new agency with only 1-2 clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be used mainly for credibility and learning the market. It is not a magic tap for instant leads, but it can help a young agency look more serious, demonstrate deep domain knowledge, and collect higher-quality data from prospects early on.",
          },
        },
        {
          "@type": "Question",
          name: "How will I get traffic to the micro SaaS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because the tool is free and genuinely useful, it can be shared easily in professional communities, online groups, and as contextual callouts in your content. Over time, you can layer in paid traffic, cold outreach referrals, or strategic partnerships.",
          },
        },
        {
          "@type": "Question",
          name: "How many clients do you take per month and when can I expect delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NYXIR takes fewer than 4 clients per month to stay focused and maintain high-fidelity implementation. Development and integration take within 3 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the current offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The package includes strategic design, custom coding, copy generation, CRM integrations, one free iteration/update after launch, and 1 month of basic maintenance.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I trust NYXIR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "NYXIR believes in top-notch quality every time. The team researches trends, analyzes each business, and finds a strategic sweet spot before building anything. Founder Anshul Agarwal has a strong business background and the team has extensive experience in automations and delivering excellent results.",
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
        className={`${manrope.variable} font-sans antialiased bg-brand-bg text-brand-dark`}
      >
        {/* JSON-LD structured data — plain <script> tag, Next.js recommended pattern */}
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
