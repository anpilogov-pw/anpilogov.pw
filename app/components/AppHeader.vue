<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const isHome = computed(() => route.path === "/");
</script>

<template>
  <header class="container apw-header">
    <AppLogo />
    <AppNav />
    <a class="apw-header__email" href="mailto:contact@anpilogov.pw">
      contact@anpilogov.pw
    </a>
  </header>
</template>

<style lang="scss" scoped>
.apw-header {
  @apply sticky top-0 inset-x-0 z-10 py-2.5 md:py-6;
  @apply flex items-center justify-between gap-4;
  @apply px-3 md:px-8 xl:px-[4.375rem];
  @apply border-x border-gray-200;
}

.apw-header__email {
  @apply hidden xl:inline font-semibold text-3.5 text-gray-900 transition-colors;
  @apply hover:text-purple-700 focus-visible:text-purple-700;
}
</style>
