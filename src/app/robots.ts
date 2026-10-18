import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "OAI-SearchBot",
          "Google-Extended",
          "Amazonbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://nyxir.online/sitemap.xml",
    host: "https://nyxir.online",
  };
}
