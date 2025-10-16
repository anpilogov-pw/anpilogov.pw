<script lang="ts" setup>
import type { TCoopPost } from "~/types/content";

const { data: posts } = useLocalizedCollection<TCoopPost[]>("coop", "title");
</script>

<template>
  <div class="apw-coop">
    <ul class="apw-coop-list">
      <li
        v-for="(post, index) in posts"
        :key="post.id"
        class="apw-coop-list__item"
      >
        <article class="apw-coop-card">
          <header class="apw-coop-card__header">
            <span>{{ (index + 1).toString().padStart(2, "0") }}</span>
            <NuxtLink
              to="/contacts"
              :aria-label="`${$t('coop.link.aria')} ${post.title}`"
            >
              {{ $t("coop.link.title") }} ↗
            </NuxtLink>
          </header>
          <hgroup class="apw-coop-card__hgroup">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
          </hgroup>
          <figure class="apw-coop-card__figure" aria-hidden="true">
            <NuxtImg
              :src="post.cover"
              width="337"
              height="264"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </article>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.apw-coop {
  @apply px-3 md:px-8 xl:px-[4.375rem];
  @apply pt-3 md:pt-6;
}

.apw-coop-list {
  @apply flex flex-col items-stretch justify-start gap-6;
  @apply md:flex-row items-stretch md:overflow-x-scroll xl:overflow-visible;
  @apply max-xl:px-2 max-xl:pb-4 max-xl:scroll-ps-1 max-xl:scroll-pe-1 max-xl:snap-mandatory max-xl:snap-x;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.apw-coop-list__item {
  @apply flex-auto;
}

.apw-coop-card {
  scroll-snap-align: start;
  @apply relative bg-white rounded-xl p-4 md:p-6 shadow-apw-coop-card;
  @apply w-full md:min-w-80 xl:max-w-96 h-full;
  @apply min-h-[27rem];
}

.apw-coop-card__header {
  @apply flex items-center justify-between mb-4;

  span {
    @apply px-3 py-1 bg-gray-200 rounded leading-[100%];
    @apply font-bold text-4.5 font-mono text-gray-600;
  }

  a {
    @apply font-inter text-3.5 font-normal text-gray-600 leading-[100%];
  }
}

.apw-coop-card__hgroup {
  @apply flex flex-col gap-2;

  h3 {
    @apply text-4.5 font-bold leading-[140%] text-gray-900;
  }

  p {
    @apply text-4 font-medium leading-[140%] text-gray-600 z-10;
  }
}

.apw-coop-card__figure {
  @apply absolute inset-x-0 bottom-0 h-[264px] overflow-hidden rounded-b-xl z-0;

  img {
    @apply object-cover object-bottom transition-transform duration-700 ease-out w-full h-full;
  }
}

.apw-coop-card:hover .apw-coop-card__figure img {
  @apply scale-105;
}
</style>
