export const CONFIG = {
  email: "contact@anpilogov.pw",
  links: [
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Inter/Inter-VariableFont_opsz,wght.woff2",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.woff2",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Montserrat/Montserrat-VariableFont_wght.woff2",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.woff2",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Roboto/Roboto-VariableFont_wdth,wght.woff2",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Roboto/Roboto-Italic-VariableFont_wdth,wght.woff2",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Roboto_Mono/RobotoMono-VariableFont_wght.woff2",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/Roboto_Mono/RobotoMono-Italic-VariableFont_wght.woff2",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
  meta: [
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "msapplication-TileColor",
      content: "#ffffff",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Артём",
        jobTitle: "Frontend-разработчик",
        url: "https://anpilogov.pw/",
        sameAs: [
          "https://github.com/anpilogov-pw",
          "https://t.me/anpilogov_artyom",
        ],
      }),
    },
  ],
  siteUrl: "https://anpilogov.pw",
} as const;
