import { CONFIG } from "./app/constants";

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      link: [...CONFIG.links],
    },
  },
  css: ["./app/assets/css/main.scss"],
  tailwindcss: {
    cssPath: "./app/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/robots.txt",
        "/",
        "/blog",
        "/contacts",
        "/privacy",
        "/en",
        "/en/blog",
        "/en/contacts",
        "/en/privacy",
      ],
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
    "@nuxtjs/critters",
    "nuxt-og-image",
    "@nuxt/icon",
  ],
  image: {
    provider: "ipx",
    quality: 80,
    format: ["webp", "jpg", "png", "svg"],
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
    staticFilename: "[name][ext]",
  },
  i18n: {
    defaultLocale: "ru",
    locales: [
      { code: "ru", language: "ru-RU", file: "ru.json", name: "Русский" },
      { code: "en", language: "en-US", file: "en.json", name: "English" },
    ],
    strategy: "prefix_except_default",
  },
  content: {
    watch: {
      port: 4000,
      showURL: true,
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "monokai",
            dark: "monokai",
          },
          preload: ["vue", "html", "ts", "js", "bash", "json", "scss", "yaml"],
        },
      },
    },
  },
  critters: {
    config: {
      preload: "swap",
    },
  },
  ogImage: {
    enabled: true,
    defaults: {
      width: 1200,
      height: 600,
      emojis: "noto",
      renderer: "satori",
      component: "NuxtSeo",
      cacheMaxAgeSeconds: 60 * 60 * 24 * 3,
    },
    fonts: ["Inter:400", "Inter:700"],
    runtimeCacheStorage: true,
  },
  $production: {
    site: {
      url: "https://anpilogov.pw/",
      name: "AnpilogovPW",
      gzip: true,
    },
  },
  $development: {
    site: {
      url: "http://localhost:3000/",
      name: "AnpilogovPW",
      gzip: false,
    },
  },
});
