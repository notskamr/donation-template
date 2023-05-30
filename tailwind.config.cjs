/** @type {import('tailwindcss').Config} */

const desktopImgUrl = "https://source.unsplash.com/random/1920x1080/?tree";
const mobileImgUrl = "https://source.unsplash.com/random/1080x1920/?tree";
const darkenGradient = [0.8, 0.6];
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
        backdropDesktop: `linear-gradient(rgba(0, 0, 0, ${darkenGradient[0]}), rgba(0, 0, 0, ${darkenGradient[1]})), url('${desktopImgUrl}')`,
        backdropMobile: `linear-gradient(rgba(0, 0, 0, ${darkenGradient[0]}), rgba(0, 0, 0, ${darkenGradient[1]})), url('${mobileImgUrl}')`,
      },
    },
  },
  plugins: [],
};
