/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-320%)" },
          "50%": { transform: "translateX(180%)" },
          "100%": { transform: "translateX(-320%)" },
        },

      },

      animation: {
        marquee: "marquee 16s linear infinite",
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}


//? sm  640px
//? md  768px
//? lg  1024px
//? xl  1280px
//? 2xl  1536px