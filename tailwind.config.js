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
        roboto: ["Roboto", "system-ui", "sans-serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
        mono: ["RobotoMono", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: 0,
        screens: {
          sm: "375px",
          md: "768px",
          xl: "1232px",
        },
      },
      boxShadow: {
        "apw-hero":
          "0 19px 5px 0 rgba(0, 0, 0, 0.00), 0 12px 5px 0 rgba(0, 0, 0, 0.01), 0 7px 4px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)",
        "apw-coop-card":
          "0 19px 5px 0 rgba(0, 0, 0, 0.00), 0 12px 5px 0 rgba(0, 0, 0, 0.01), 0 7px 4px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)",
        "apw-floating":
          "0 72px 20px 0 rgba(0, 0, 0, 0.01), 0 46px 19px 0 rgba(0, 0, 0, 0.05), 0 26px 16px 0 rgba(0, 0, 0, 0.16), 0 12px 12px 0 rgba(0, 0, 0, 0.28), 0 3px 6px 0 rgba(0, 0, 0, 0.32)",
        "apw-floating-light":
          "0 50px 14px 0 rgba(0, 0, 0, 0.00), 0 32px 13px 0 rgba(0, 0, 0, 0.01), 0 18px 11px 0 rgba(0, 0, 0, 0.05), 0 8px 8px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.09)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
