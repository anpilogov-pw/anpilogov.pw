<script lang="ts" setup>
const { locale } = useI18n();

const analytics = computed(() => {
  if (locale.value !== "ru") {
    return {
      meta: [
        {
          name: "google-site-verification",
          content: "L5kDh33076Qmikd139EnYp9PhmjDDp5Z6Q2iZFSsZk4",
        },
      ],
    };
  }
  return {
    noscript: [
      {
        innerHTML: `
        <div>
          <img src="https://mc.yandex.ru/watch/104739983"
               style="position:absolute; left:-9999px"
               alt=""/>
        </div>
      `,
      },
    ],
  };
});

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  ...analytics.value,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
