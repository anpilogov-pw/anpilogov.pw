// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: [
    "./app/assets/css/tailwind.postcss.scss",
    "./app/assets/css/main.scss",
    "./app/assets/css/fonts.scss",
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
    "@nuxt/content",
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
    defaultLocale: "ru",
    locales: [
      { code: "ru", language: "ru-RU", file: "ru.json", name: "Русский" },
      { code: "en", language: "en-US", file: "en.json", name: "English" },
    ],
  },
  content: {
    watch: {
      port: 4000,
      showURL: true,
    },
    build: {
      markdown: {
        highlight: {
          theme: "monokai",
          preload: ["vue", "html", "ts", "js", "bash", "json", "scss", "yaml"],
        },
      },
    },
  },
});
