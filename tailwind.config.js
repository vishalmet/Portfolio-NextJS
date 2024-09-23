const { Bricolage_Grotesque } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modal/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        gradient1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, 50px)' },
        },
        gradient2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-100px, -100px)' },
        },
        gradient3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(100px, -100px)' },
        },
        gradient4: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -30px)' },
        },
      },
      animation: {
        gradient1: 'gradient1 10s ease-in-out infinite',
        gradient2: 'gradient2 10s ease-in-out infinite',
        gradient3: 'gradient3 10s ease-in-out infinite',
        gradient4: 'gradient4 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
