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
        gold: "#B8962E",
        goldDeep: "#8B6E1F",
        goldLight: "#FBF5E4",
        charcoal: "#2A2A28",
        textMuted: "#6B6B68",
        textLight: "#9A9A96",
        borderDefault: "#E2DDD4",
        goldBorder: "#e8d68a",
        terracottaBorder: "#e8bba8",
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
