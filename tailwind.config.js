/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,vue,ts,css,scss}"],
  theme: {
    extend: {
      fontSize: (() => {
        const sizes = {};
        for (let i = 0.5; i <= 50; i += 0.5) {
          const key = i.toString();
          const pxValue = i * 4;
          const remValue = pxValue / 16;
          sizes[key] = `${remValue}rem`;
        }
        return sizes;
      })(),
      fontFamily: {
        heading: ["Roboto", "system-ui", "sans-serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: 0,
        screens: {
          sm: "425px",
          md: "768px",
          xl: "1232px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
