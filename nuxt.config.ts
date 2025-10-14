// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: [
    "./app/assets/css/main.css",
    "./app/assets/css/fonts.css",
    "./app/assets/css/tailwind.postcss.css",
  ],
  site: {
    url: "https://anpilogov.pw/",
    name: "AnpilogovPW",
  },
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/robots.txt"],
      failOnError: false,
    },
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/i18n",
  ],
  image: {
    quality: 80,
    format: ["webp", "jpg", "png"],
    presets: {
      default: {
        modifiers: {
          format: "webp",
          loading: "lazy",
          placeholder: 15,
          densities: "[1, 2]",
          quality: 80,
        },
      },
    },
  },
  i18n: {
    legacy: false,
    flatJson: true,
    defaultLocale: "ru",
    locales: [
      { code: "ru", language: "ru-RU", file: "ru.json" },
      { code: "en", language: "en-EN", file: "en.json" },
    ],
  },
});
