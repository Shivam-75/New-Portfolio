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
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fog: {
          "0%": { transform: "translateX(-20%) translateY(-10%) scale(1.1)" },
          "50%": { transform: "translateX(10%) translateY(5%) scale(1.15)" },
          "100%": { transform: "translateX(-10%) translateY(-5%) scale(1.1)" },
        },

      },

      animation: {
        marquee: "marquee 16s linear infinite",
        typing: 'typing 3s steps(20, end) forwards infinite',
        fog: "fog 18s ease-in-out infinite",
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