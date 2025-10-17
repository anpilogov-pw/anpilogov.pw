<script setup lang="ts">
defineProps<{
  tags?: string[];
  itemId?: string | number;
}>();
</script>

<template>
  <ul v-if="tags?.length" class="app-tags">
    <li v-for="tag in tags" :key="`${itemId || 'tag'}-${tag}`" class="">
      <span class="app-tag">#{{ tag }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.app-tags {
  @apply flex flex-wrap items-center gap-3 mb-3;
}

.app-tag {
  @apply font-inter font-bold text-3 text-gray-600 leading-[100%];
  @apply px-2 py-1 rounded bg-gray-200;
}
</style>
