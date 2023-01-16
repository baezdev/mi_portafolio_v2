/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "blue-strong": "#02021e",
        "blue-light": "#4e4e62",
        "gray-text": "#9a9aa5",
      },
    },
  },
  plugins: [],
};
