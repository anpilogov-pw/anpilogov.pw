<script lang="ts" setup>
import type { TBlogPost } from "~/types/content";

type Props = {
  postLimit?: number;
};

const props = withDefaults(defineProps<Props>(), {
  postLimit: 6,
});

const { data: posts } = useLocalizedCollection<TBlogPost[]>(
  "blog",
  "date",
  props.postLimit
);
</script>

<template>
  <div class="apw-blog">
    <ul class="apw-blog-list">
      <li v-for="post in posts" :key="post.id" class="apw-blog-list__item">
        <UiBlogCard :post="post" />
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
