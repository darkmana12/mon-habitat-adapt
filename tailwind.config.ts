import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F4",
        warmWhite: "#FFFDF9",
        sage: "#4A6741",
        sageLight: "#E8F0E6",
        sageDark: "#2D4029",
        terracotta: "#C4603A",
        terracottaLight: "#F5EAE4",
        terracottaHover: "#a84e2d",
        /** Accent principal — bleu-gris (remplace l’ancienne teinte or) */
        gold: "#4A6B8C",
        goldDeep: "#2C4056",
        goldLight: "#EDF1F6",
        charcoal: "#2A2A28",
        textMuted: "#6B6B68",
        textLight: "#9A9A96",
        borderDefault: "#E2DDD4",
        goldBorder: "#B8C9D9",
        terracottaBorder: "#e8bba8",
        /** Or chaud discret (bandeau MaPrimeAdapt’, badge hero) */
        warmGold: "#B8A878",
        warmGoldDeep: "#8E7D52",
        /** Bandeau MaPrimeAdapt’ — bleu-gris plus clair que gold / goldDeep */
        bannerGradientFrom: "#6A8DB8",
        bannerGradientTo: "#4A6B8A",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
