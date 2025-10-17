<script setup lang="ts">
import { useRoute } from "vue-router";

type Props = {
  showLang?: boolean;
};

const route = useRoute();

const props = withDefaults(defineProps<Props>(), {
  showLang: false,
});

const isHome = computed<boolean>(() => route.path === "/");
</script>

<template>
  <nav class="apw-nav">
    <NuxtLinkLocale :to="isHome ? '#companies' : '/#companies'">
      {{ $t("nav.link.companies") }}
    </NuxtLinkLocale>
    <NuxtLinkLocale :to="isHome ? '#reviews' : '/#reviews'">
      {{ $t("nav.link.reviews") }}
    </NuxtLinkLocale>
    <NuxtLinkLocale :to="isHome ? '#coop' : '/#coop'">
      {{ $t("nav.link.coop") }}
    </NuxtLinkLocale>
    <NuxtLinkLocale to="/blog">
      {{ $t("nav.link.blog") }}
    </NuxtLinkLocale>
    <NuxtLinkLocale to="/privacy">
      {{ $t("nav.link.privacy") }}
    </NuxtLinkLocale>
    <UiLangSwitcher v-if="props.showLang" />
  </nav>
</template>

<style lang="scss" scoped>
.apw-nav {
  @apply flex flex-col items-center justify-start gap-5;
  @apply md:flex-row md:items-center md:justify-center xl:justify-start;
}

.apw-nav a {
  @apply font-medium text-3.5 text-gray-900 transition-colors leading-[100%];
  @apply hover:text-purple-700 focus-visible:text-purple-700;
  @apply px-2 py-1;
}
</style>
