<script setup lang="ts">
import { ref, computed } from "vue";

const headerRef = ref<HTMLElement | null>(null);
const { y } = useScroll(window);
const isSticky = computed(() => y.value > 0);
</script>

<template>
  <header
    ref="headerRef"
    :class="['container apw-header', { 'is-sticky': isSticky }]"
  >
    <div class="apw-header__wrapper">
      <AppLogo />
      <AppNav />
      <a class="apw-header__email" href="mailto:contact@anpilogov.pw">
        contact@anpilogov.pw
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.apw-header {
  @apply sticky top-0 z-20;
  @apply border-x border-gray-200;
}

.apw-header__wrapper {
  @apply relative flex items-center justify-between gap-4;
  @apply py-2.5 px-3 md:py-6 md:px-8 xl:px-[4.375rem];
  @apply max-md:bg-slate-50;

  @media screen and (min-width: 768px) {
    background-image: radial-gradient(transparent 1px, #f9fafb 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
  }
}

.apw-header__email {
  @apply hidden xl:inline font-semibold text-3.5 text-gray-900 transition-colors;
  @apply hover:text-purple-700 focus-visible:text-purple-700;
  @apply px-2 py-1 rounded-full bg-gray-50;
}

.is-sticky {
  @apply border-b border-gray-200;
}
</style>
