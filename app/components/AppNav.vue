<script setup lang="ts">
import { useRoute } from "vue-router";

type Props = {
  showLang?: boolean;
  showMobileMenu: boolean;
};

const route = useRoute();

const props = withDefaults(defineProps<Props>(), {
  showLang: false,
});

const isHome = computed<boolean>(() => route.path === "/");

const navClasses = computed<Record<string, boolean>>(() => {
  return {
    "apw-nav_open": props.showMobileMenu,
  };
});
</script>

<template>
  <nav class="apw-nav" :class="navClasses">
    <NuxtLinkLocale :to="isHome ? '#companies' : '/#companies'">
      {{ $t("nav.link.companies") }}
    </NuxtLinkLocale>
    <NuxtLinkLocale :to="isHome ? '#reviews' : '/#reviews'">
      {{ $t("nav.link.reviews") }}
    </NuxtLinkLocale>
    <NuxtLinkLocale :to="isHome ? '#coop' : '/#coop'">
      {{ $t("nav.link.coop") }}
    </NuxtLinkLocale>
    <NuxtLinkLocale to="/blog">{{ $t("nav.link.blog") }}</NuxtLinkLocale>
    <UiLangSwitcher v-if="props.showLang" />
  </nav>
</template>

<style lang="scss" scoped>
.apw-nav {
  @apply flex flex-col items-start justify-start gap-4 z-30;
  @apply max-md:opacity-0 
          max-md:invisible 
          max-md:pointer-events-none 
          max-md:transition-all 
          max-md:duration-300 
          max-md:ease-out;
  @apply max-md:absolute 
          max-md:inset-0
          max-md:h-dvh
        max-md:bg-gray-50;
  @apply max-md:top-11 
          max-md:container 
          max-md:p-4;
  @apply md:flex-row md:gap-5 md:items-center md:justify-end xl:justify-center;
}

.apw-nav a {
  @apply font-medium text-3.5 text-gray-900 transition-colors leading-[100%];
  @apply hover:text-purple-700 focus-visible:text-purple-700;
  @apply px-2 py-1 rounded-full bg-gray-50;
}

.apw-nav_open {
  @apply max-md:opacity-100 max-md:visible max-md:pointer-events-auto;
}
</style>
