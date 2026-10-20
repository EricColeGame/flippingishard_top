import { routing } from "@/i18n/routing";

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  social?: {
    steamCommunity?: string;
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
  supportEmail: "support@flippingishard.top",
  gameUrl: "https://store.steampowered.com/app/3826670/Flipping_is_Hard/",
  social: {
    steamCommunity: "https://steamcommunity.com/app/3826670",
    youtube: "https://www.youtube.com/watch?v=8npbIAWmZH0",
  },
  locales: routing.locales,
  defaultLocale: "en",
};
