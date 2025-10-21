/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

  const htmlLang = document.documentElement.getAttribute("lang") || "ru";
  if (htmlLang !== "ru") return;

  (function (m: any, e: any, t: any, r: any, i: any, k?: any, a?: any) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    for (let j = 0; j < e.scripts.length; j++) {
      if (e.scripts[j].src === r) return;
    }
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    a.parentNode.insertBefore(k, a);
  })(
    window,
    document,
    "script",
    "https://mc.yandex.ru/metrika/tag.js?id=104739983",
    "ym"
  );

  window.ym?.(104739983, "init", {
    webvisor: true,
    trackHash: true,
    clickmap: true,
    ecommerce: "dataLayer",
    accurateTrackBounce: true,
    trackLinks: true,
  });
});
