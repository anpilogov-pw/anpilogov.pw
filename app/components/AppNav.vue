<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const isMenuOpen = ref<boolean>(false);
const isHome = computed<boolean>(() => route.path === "/");
const navClasses = computed<Record<string, boolean>>(() => {
  return {
    "apw-nav_open": isMenuOpen.value,
  };
});

let isLocked: ReturnType<typeof useScrollLock> | null = null;

onMounted(() => {
  isLocked = useScrollLock(document.body);
  watch(isMenuOpen, (open) => {
    if (isLocked) isLocked.value = open;
  });
});

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  }
);
</script>

<template>
  <div class="apw-menu">
    <UiButtonMenu v-model="isMenuOpen" />
    <nav class="apw-nav" :class="navClasses">
      <NuxtLink :to="isHome ? '#companies' : '/#companies'">Компании</NuxtLink>
      <NuxtLink :to="isHome ? '#reviews' : '/#reviews'">Отзывы</NuxtLink>
      <NuxtLink :to="isHome ? '#coop' : '/#coop'">Сотрудничество</NuxtLink>
      <NuxtLink to="/blog">Блог</NuxtLink>
    </nav>
  </div>
</template>

<style lang="scss" src="">
.apw-nav {
  @apply flex flex-col items-start justify-start gap-4;
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
          max-[744px]:container 
          max-md:p-4;
  @apply md:flex-row md:gap-6 md:items-center md:justify-end xl:justify-center;
}

.apw-nav_open {
  @apply max-md:opacity-100 max-md:visible max-md:pointer-events-auto;
}

.apw-nav a {
  @apply font-medium text-3.5 text-gray-900 transition-colors leading-[100%];
  @apply hover:text-purple-700 focus-visible:text-purple-700;
  @apply px-2 py-1 rounded-full bg-gray-50;
}

.apw-menu {
  @apply flex items-center;
}
</style>
