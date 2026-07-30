import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#201E28",
        primary: {
          DEFAULT: "#30248A",
          dark: "#1E1660",
          deep: "#141046",
          tint: "#EDEBF8",
        },
        slate: {
          DEFAULT: "#5F5A59",
          light: "#E7E7E7",
        },
        silver: "#A7A7A7",
        paper: "#FBFBFA",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1360px",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "dash-flow": {
          to: { strokeDashoffset: "-200" },
        },
        "drift": {
          "0%": { transform: "translateX(-6%)" },
          "100%": { transform: "translateX(6%)" },
        },
        "reveal-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "dash-flow": "dash-flow 6s linear infinite",
        "drift": "drift 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
