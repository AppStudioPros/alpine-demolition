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
        "alpine-green": "#165B38",
        "alpine-highlight": "#76B852",
        "deep-slate": "#17262B",
        "warm-white": "#F4F2ED",
        "page-white": "#FFFFFF",
        hairline: "#DEE3DC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "1260px",
      },
    },
  },
  plugins: [],
};

export default config;
