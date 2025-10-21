<script lang="ts" setup>
import type { TBlogPost } from "~/types/content";

const { locale } = useI18n();

type Props = {
  postLimit?: number;
  cardTitleTag?: "h2" | "h3";
};

const props = withDefaults(defineProps<Props>(), {
  postLimit: 6,
  cardTitleTag: "h3",
});

const collectionName = computed<"blog_ru" | "blog_en">(() => {
  return locale.value ? `blog_${locale.value}` : "blog_ru";
});

const { data: posts } = await useAsyncData(
  `blog-${collectionName.value}-limit-${props.postLimit}`,
  () => {
    return queryCollection(collectionName.value)
      .where("draft", "=", false)
      .order("date", "DESC")
      .limit(props.postLimit)
      .all() as Promise<TBlogPost[]>;
  }
);
</script>

<template>
  <div class="apw-blog">
    <ul class="apw-blog-list">
      <li v-for="post in posts" :key="post.id" class="apw-blog-list__item">
        <UiBlogCard :post="post" :card-title-tag="props.cardTitleTag" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.apw-blog {
  @apply px-3 md:px-8 xl:px-[4.375rem];
  @apply pt-3 md:pt-6;
}

.apw-blog-list {
  @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6;
}
</style>
