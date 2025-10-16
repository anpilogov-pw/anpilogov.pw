<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useSwitchLocalePath } from "#i18n";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value)
);
</script>

<template>
  <NuxtLink
    v-for="loc in availableLocales"
    :key="loc.code"
    :to="switchLocalePath(loc.code)"
    class="lang-link"
    :class="{ active: loc.code === locale }"
  >
    {{ loc.code }}
  </NuxtLink>
</template>

<style scoped>
.lang-link {
  @apply font-medium text-3.5 text-gray-900 transition-colors leading-[100%];
  @apply hover:text-purple-700 focus-visible:text-purple-700;
  @apply px-2 py-1 rounded-full bg-gray-50 capitalize;
}
</style>
