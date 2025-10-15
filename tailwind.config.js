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
          sm: "375px",
          md: "744px",
          xl: "1232px",
        },
      },
      boxShadow: {
        "apw-hero":
          "0 19px 5px 0 rgba(0, 0, 0, 0.00), 0 12px 5px 0 rgba(0, 0, 0, 0.01), 0 7px 4px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
