/** @type {import('tailwindcss').Config} */
// const textShadowPlugin = require('tailwindcss-textshadow')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gris: "#7D879C",
        verde: "#D3FFF5",
        verde2: "#1CB59C",
        amarillo: "#FFF8E5",
        amarillo2: "#FFB800",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(to right, #0D5287 0%, #187DCA 21%, #05AACE 42%, #04D2C6 63%, #26E4C7 100%)",
        "blue2-gradient": "linear-gradient(to bottom, #05AACE 0%, #05AACE 25%, #187DCA 42%)",
        "violet-gradient": "linear-gradient(to bottom, #7711fa 0%, #7711fa 25%, #9813f4 42%)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
