<script lang="ts" setup>
import type { TCoopPost } from "~/types/content";

const { locale } = useI18n();

const collectionName = computed<"coop_ru" | "coop_en">(() => {
  return locale.value ? `coop_${locale.value}` : "coop_ru";
});

const { data: posts } = await useAsyncData(
  `coop-${collectionName.value}`,
  () => {
    return queryCollection(collectionName.value)
      .where("draft", "=", false)
      .order("title", "DESC")
      .all() as Promise<TCoopPost[]>;
  }
);
</script>

<template>
  <div class="apw-coop">
    <ul class="apw-coop-list">
      <li
        v-for="(post, index) in posts"
        :key="`coop-${index}-${post.id}`"
        class="apw-coop-list__item"
      >
        <UiCoopCard
          :index="index"
          :title="post.title"
          :description="post.description"
          :cover="post.cover"
        />
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
  @apply md:px-8 md:pb-4 md:-mr-8 md:-ml-8 xl:m-0 xl:p-0;
  @apply max-xl:scroll-ps-8 max-xl:scroll-pe-1 max-xl:snap-mandatory max-xl:snap-x;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.apw-coop-list__item {
  @apply flex-auto;
}
</style>
