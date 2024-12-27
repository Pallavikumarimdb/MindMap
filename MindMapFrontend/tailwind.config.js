/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      },
    },
  },
  plugins: [],
}

