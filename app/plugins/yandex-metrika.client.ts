export default defineNuxtPlugin(() => {
  const htmlLang = document.documentElement.lang;
  if (htmlLang !== "ru") return;

  useHead({
    script: [
      {
        src: "https://mc.yandex.ru/metrika/tag.js",
        async: true,
        type: "text/partytown",
      },
      {
        type: "text/partytown",
        children: `
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
          ym(104739983, 'init', {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true,
            trackHash:true,
            ecommerce:"dataLayer"
          });
        `,
      },
    ],
    noscript: [
      {
        children: `<div><img src="https://mc.yandex.ru/watch/104739983" style="position:absolute; left:-9999px;" alt="" /></div>`,
      },
    ],
  });
});
