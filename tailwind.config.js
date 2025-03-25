import { COLORS } from "./lib/constants/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        tertiary: COLORS.tertiary,
        blue: {
          primary: "#091057",
          secondary: "#024CAA",
        },
        orange: {
          primary: "#EC8305",
        },
        gray: {
          primary: "#DBD3D3",
          secondary: "#666",
        },
        red: {
          primary: "#C62E2E",
        },
        green: {
          primary: "#6EC207",
        },
        yellow: {
          primary: "#FDDE55",
        },
      },
      textColor: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        tertiary: COLORS.tertiary,
      },
    },
  },
  plugins: [],
};
