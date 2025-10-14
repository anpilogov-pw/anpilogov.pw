<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const isHome = computed<boolean>(() => route.path === "/");
</script>

<template>
  <nav class="apw-nav">
    <NuxtLink :to="isHome ? '#projects' : '/#projects'">Компании</NuxtLink>
    <NuxtLink :to="isHome ? '#reviews' : '/#reviews'">Отзывы</NuxtLink>
    <NuxtLink :to="isHome ? '#coop' : '/#coop'">Сотрудничество</NuxtLink>
    <NuxtLink to="/blog">Блог</NuxtLink>
  </nav>
</template>

<style lang="scss" src="">
.apw-nav {
  @apply flex items-start justify-start gap-2;
  @apply md:gap-6 md:items-center md:justify-end xl:justify-center;
}

.apw-nav a {
  @apply font-medium text-3.5 text-gray-900 transition-colors;
  @apply hover:text-purple-700 focus-visible:text-purple-700;
}
</style>
