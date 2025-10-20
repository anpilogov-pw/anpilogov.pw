<script setup lang="ts">
import { CONFIG } from "~/constants";
</script>

<template>
  <footer class="container apw-footer">
    <div class="apw-footer__container">
      <AppLogo />
      <AppFooterNav :show-lang="true" />
    </div>
    <address class="not-italic">
      <a class="apw-footer__email" :href="`mailto:${CONFIG.email}`">
        {{ CONFIG.email }}
      </a>
    </address>
  </footer>
</template>

<style lang="scss" scoped>
.apw-footer {
  @apply flex flex-col items-center justify-start;
  @apply xl:items-start xl:flex-row xl:justify-between gap-8;
  @apply py-2.5 px-3 md:py-6 md:px-8 xl:px-[4.375rem];
  @apply border-x border-gray-200;
}

.apw-footer__container {
  @apply flex flex-col items-center xl:items-start justify-start gap-6;
  @apply md:gap-3 xl:flex-row xl:gap-8 xl:max-w-3xl;
}

.apw-footer__email {
  @apply font-semibold text-3.5 text-gray-900 transition-colors;
  @apply hover:text-purple-700 focus-visible:text-purple-700;
  @apply px-2 py-1;
}
</style>
