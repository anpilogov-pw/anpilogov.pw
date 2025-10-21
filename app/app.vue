<script lang="ts" setup>
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
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
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
