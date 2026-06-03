import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#080808",
          800: "#111111",
          700: "#1a1a1a",
        },
        bone: {
          50: "#FFFFFF",
          100: "#F7F4EF",
          200: "#EFEAE1",
        },
        accent: {
          DEFAULT: "#F36F2A",
          soft: "#FF8A4C",
        },
        lime: {
          DEFAULT: "#C8FF5C",
        },
        muted: "#8A8A8A",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        prose: "68ch",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(8,8,8,0.04), 0 12px 32px -12px rgba(8,8,8,0.12)",
        "card-dark": "0 1px 2px rgba(0,0,0,0.4), 0 24px 48px -24px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
