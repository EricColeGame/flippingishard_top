export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Flipping is Hard Wiki",
  shortName: "Flipping is Hard",
  logoText: "FH",
  tagline: "Guides, Controls, Levels & Co-op Tips",
  description: "Master Flipping is Hard with beginner guides, controls, level walkthroughs, NPC challenges, speedrun tips, and co-op strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://flippingishard.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://flippingishard.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3826670/Flipping_is_Hard/",
  heroVideoId: "8npbIAWmZH0", // Flipping Is Hard - Official Trailer
  social: {
    youtube: "https://www.youtube.com/watch?v=8npbIAWmZH0",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
