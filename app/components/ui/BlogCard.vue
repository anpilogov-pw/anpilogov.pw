<script lang="ts" setup>
import type { TBlogPost } from "~/types/content";

const { locale } = useI18n();
const { localizedPath } = useLocalPath();

type Props = {
  post: TBlogPost;
  cardTitleTag?: "h2" | "h3";
};

const props = withDefaults(defineProps<Props>(), {
  cardTitleTag: "h3",
});

const fallback = "/img/fallback.jpg";
const imageSrc = ref(props.post.cover?.trim() || fallback);

const onImgError = () => {
  imageSrc.value = fallback;
};

const formattedDate = computed(() => {
  if (!props.post.date) return "";
  const date = new Date(props.post.date);

  return new Intl.DateTimeFormat(locale.value, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
});
</script>

<template>
  <article class="apw-blog-card">
    <header class="apw-blog-card__header">
      <NuxtImg
        :src="imageSrc"
        width="224"
        height="120"
        :placeholder="fallback"
        format="webp"
        loading="lazy"
        decoding="async"
        :alt="`${$t('article.cover.alt')}: ${props.post.title}`"
        @error="onImgError"
      />
      <time :datetime="props.post.date">{{ formattedDate }}</time>
    </header>
    <div class="apw-blog-card__hgroup">
      <NuxtLinkLocale :to="localizedPath(props.post.path)">
        <component :is="props.cardTitleTag">{{ props.post.title }}</component>
        <p>{{ props.post.description }}</p>
      </NuxtLinkLocale>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.apw-blog-card {
  @apply relative bg-white rounded-xl p-4 md:p-6;
  @apply ring-1 ring-gray-200 transition-all duration-500 ease-out;
  @apply hover:ring-0 focus-within:ring-0;
  @apply hover:shadow-apw-coop-card focus-within:shadow-apw-coop-card;
  @apply hover:-translate-y-1 focus-within:-translate-y-1;
  @apply w-full h-80 md:h-[25rem];
}

.apw-blog-card__header {
  @apply w-full;
}

.apw-blog-card__header img {
  @apply w-full h-[7.5rem] md:h-[8.75rem] mb-4;
  @apply object-cover object-center;
  @apply rounded-lg bg-gray-100;
}

.apw-blog-card__header time {
  @apply font-mono font-bold text-3 leading-[120%] text-gray-500;
}

.apw-blog-card__hgroup h3,
.apw-blog-card__hgroup h2 {
  @apply font-sans font-bold text-4.5 leading-[120%] text-gray-900 my-2;
  @apply line-clamp-2 transition-colors duration-300 ease-out;
}

.apw-blog-card:hover .apw-blog-card__hgroup h3,
.apw-blog-card:hover .apw-blog-card__hgroup h2,
.apw-blog-card:focus-within .apw-blog-card__hgroup h3,
.apw-blog-card:focus-within .apw-blog-card__hgroup h2 {
  @apply text-purple-700;
}

.apw-blog-card__hgroup p {
  @apply font-roboto font-normal text-3.5 leading-[150%] text-gray-500;
  @apply line-clamp-4 md:line-clamp-6;
}
</style>
