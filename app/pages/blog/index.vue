<script setup lang="ts">
import { useLocalPath } from "~/composables";
import type { TBlogPost } from "~/types/content";

const { localizedPath } = useLocalPath();

const { data: posts } = useLocalizedCollection<TBlogPost[]>("blog", "date");
</script>

<template>
  <ul class="space-y-8">
    <li v-for="post in posts" :key="post.id">
      <NuxtLink :to="localizedPath(post.path)" class="block group">
        <h2 class="text-xl font-semibold group-hover:underline">
          {{ post.title }}
        </h2>
        <p class="text-sm opacity-70">
          {{ new Date(post.date).toLocaleDateString() }}
        </p>
        <p class="mt-2 opacity-80">{{ post.description }}</p>
      </NuxtLink>
    </li>
  </ul>
</template>
