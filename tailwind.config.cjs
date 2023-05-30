/** @type {import('tailwindcss').Config} */

const imgUrl = "https://source.unsplash.com/random/1920x1080/?nature,tree";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#8dc649",
        boxbg: "rgb(24 24 27)",
        textColor: "rgb(255 255 255)",
        preloadBg: "rgb(5 5 5)",
      },
      backgroundImage: {
        backdrop: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url('${imgUrl}')`,
      },
    },
  },
  plugins: [],
};
