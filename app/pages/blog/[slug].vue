<script lang="ts" setup>
import type { Collections } from "@nuxt/content";
import type { TBlogPost } from "~/types/content";

const route = useRoute();
const { locale, t } = useI18n();

const lang = computed<keyof Collections>(() => {
  return (
    locale.value ? `blog_${locale.value}` : "blog_ru"
  ) as keyof Collections;
});

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection(lang.value)
    .path(`/${locale.value}${route.path}`)
    .first() as Promise<TBlogPost>;
});

const fallback = "/img/fallback.jpg";
const imageSrc = ref(post.value?.cover?.trim() || fallback);

const onImgError = () => {
  imageSrc.value = fallback;
};

const breadcrumbs = computed(() => {
  return [
    {
      label: t("breadcrumbs.home"),
      to: `/`,
    },
    {
      label: t("breadcrumbs.blog"),
      to: `/blog`,
    },
    { label: post.value?.title || "", to: null },
  ];
});

const formattedDate = (articleDate?: string) => {
  if (!articleDate) return "";
  const date = new Date(articleDate);

  return new Intl.DateTimeFormat(locale.value, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});
</script>

<template>
  <div id="apw-post">
    <AppDevider />

    <section class="container apw-post">
      <div class="container apw-post__layout">
        <div class="container apw-post__main">
          <AppBreadcrumbs :items="breadcrumbs" />
          <hr class="mb-4" />
          <AppTags :tags="post?.tags" :item-id="post?.id" />

          <article class="container apw-post__content">
            <hgroup class="apw-post__hgroup">
              <h1>{{ post?.title }}</h1>
              <NuxtImg
                class="apw-post__cover"
                :src="imageSrc"
                width="768"
                height="320"
                :placeholder="fallback"
                format="webp"
                decoding="async"
                :alt="`${$t('article.cover.alt')}: ${post?.title}`"
                preload
                fetchpriority="high"
                @error="onImgError"
              />
            </hgroup>

            <ContentRenderer v-if="post" :value="post" class="apw-post__body" />
            <time :datetime="post?.date">{{ formattedDate(post?.date) }}</time>
          </article>
        </div>

        <AppToc :links="post?.body?.toc?.links" />
      </div>
    </section>

    <AppDevider />
  </div>
</template>

<style lang="scss" scoped>
.apw-post {
  @apply px-3 md:px-8 xl:px-[4.375rem] pt-3 md:pt-6 py-6 border-x border-gray-200 m-0;
}

.apw-post__layout {
  @apply flex flex-col lg:flex-row gap-8 items-start justify-between w-full m-0;
}

.apw-post__main {
  @apply flex-1 max-w-[48rem] w-full m-0;
}

.apw-post__content {
  @apply prose w-full m-0;
}

.apw-post__hgroup {
  @apply prose w-full;
}

.apw-post__cover {
  @apply w-full h-48 md:h-80 object-cover object-center rounded-xl;
}

.apw-post__body {
  @apply prose-sm md:prose w-full;
  @apply prose-headings:font-sans;
  @apply prose-p:font-inter prose-a:font-inter prose-strong:font-inter prose-ul:font-inter prose-ol:font-inter;
}
</style>
