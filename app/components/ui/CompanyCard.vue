<script lang="ts" setup>
import type { TCompaniesPost } from "~/types/content";

type Props = {
  post: TCompaniesPost;
};

const props = defineProps<Props>();
</script>

<template>
  <article class="company-card">
    <header class="company-card__header">
      <span class="company-card__period">{{ props.post.period }}</span>
      <h3 class="company-card__title">{{ props.post.title }}</h3>
    </header>

    <p class="company-card__description">
      {{ props.post.description }}
    </p>

    <ul class="company-card__links">
      <li v-for="(tag, index) in props.post.tags" :key="index">
        <a :href="`https://${tag}`" target="_blank" rel="noopener noreferrer">
          {{ tag }}
        </a>
      </li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
.company-card {
  @apply relative bg-white rounded-xl p-4 md:p-6;
  @apply ring-1 ring-gray-200 transition-all duration-500 ease-out;
  @apply hover:ring-0 focus-within:ring-0;
  @apply hover:shadow-apw-coop-card focus-within:shadow-apw-coop-card;
  @apply hover:-translate-y-1 focus-within:-translate-y-1;
  @apply w-[16rem] md:w-[20rem] xl:w-[21.063rem] h-[17.5rem];
}

.company-card__header {
  @apply flex flex-col gap-4;
}

.company-card__period {
  @apply px-3 py-1 bg-gray-100 rounded leading-[100%];
  @apply font-bold text-3 md:text-3.5 font-mono text-gray-600 w-fit;
}

.company-card__title {
  @apply font-bold text-4.5;
  @apply leading-[120%] text-gray-900 line-clamp-2 mb-2;
  @apply transition-colors duration-300 ease-out;
}

.company-card:hover .company-card__title {
  @apply text-purple-700;
}

.company-card__description {
  @apply font-roboto text-3 md:text-3.5 leading-[130%] text-gray-500 mb-2;
}

.company-card__links {
  @apply flex flex-wrap gap-3;
}

.company-card__links a {
  @apply px-2.5 py-1 rounded ring-1 ring-gray-200 bg-white;
  @apply font-roboto text-3 leading-[100%] text-gray-900;
  @apply transition-all duration-300 ease-out;
  @apply hover:ring-purple-700 focus-visible:ring-purple-700;
  @apply hover:text-purple-700 focus-visible:text-purple-700;
}
</style>
