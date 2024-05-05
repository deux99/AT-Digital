import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      },
      spacing: {
        '763': '763px',
        '218.75': '218.75px',
        '448': '448px',
        '622': '622px',
        '306': '306px',
        '354': '354px',
        '294': '294px',
        '542': '542px',
        '740': '740px',
        '640': '640px',

      },
      backgroundImage: {
        'hero-pattern': "url('/hero.jpeg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'atpurple': '#6B3CC9',
        'gradient2': '#1CBDDD',
        'gradient1': '#4DCA79',
        'btnorange': '#F28D35',
        'atslate': '#FAF8FF',
        'accordtext': '#6F6C90'
      },
    },
  },
  plugins: [],
};
export default config;
