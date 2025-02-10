import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#e0e7fe",
          500: "#3e38a7",
          600: "#5046e4",
        },
        gray: {
          500: "#0c0b10",
          600: "#202020",
          700: "#191919"
        },
        blue:{
          500: "#401ad8",
          400: "#804ad8",
          200: "#db9ec8"
        }
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 4s ease 300ms",
        slidein500: "slidein 4s ease 500ms",
        slidein700: "slidein 4s ease 700ms",
        slidein900: "slidein 4s ease 900ms",
        slowspin: "spin 60s linear infinite",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add 'Inter' as the default sans-serif font
      },
      typography: {
        DEFAULT: {
          css: {
            "h1": { fontSize: "4.25rem", fontWeight: "700" }, // 36px
            "h2": { fontSize: "3.875rem", fontWeight: "600" }, // 30px
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
