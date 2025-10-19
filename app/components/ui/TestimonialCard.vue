<script lang="ts" setup>
import type { TTestimonialPost } from "~/types/content";

const { locale } = useI18n();

type Props = {
  post: TTestimonialPost;
};

const props = defineProps<Props>();

const hasImageError = ref<boolean>(false);
const imageSrc = ref(props.post.avatar?.trim() || "");

const onImgError = () => {
  hasImageError.value = true;
};

const initials = computed<string>(() => {
  if (!props.post.fullname) return "";
  const parts = props.post.fullname.trim().split(/\s+/);
  const first = parts[0]?.[0]?.toUpperCase() || "";
  const last = parts[1]?.[0]?.toUpperCase() || "";
  return `${first}${last}`;
});

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
  <blockquote class="app-testimonial-card">
    <p>{{ props.post.testimonial }}</p>
    <footer class="app-testimonial-card__author">
      <NuxtImg
        v-if="!hasImageError && imageSrc"
        :src="imageSrc"
        format="webp"
        :alt="props.post.fullname"
        class="app-testimonial-card__avatar"
        width="64"
        height="64"
        loading="lazy"
        decoding="async"
        @error="onImgError"
      />
      <div
        v-else
        class="app-testimonial-card__avatar app-testimonial-card__avatar--fallback"
      >
        {{ initials }}
      </div>
      <div class="app-testimonial-info">
        <cite class="app-testimonial-info__name not-italic">
          {{ props.post.fullname }}
        </cite>
        <p class="app-testimonial-info__meta">
          {{ props.post.post }},
          <span class="app-testimonial-info__org">
            {{ props.post.organization }}
          </span>
        </p>
      </div>
      <time class="hidden" :datetime="props.post.date">
        {{ formattedDate }}
      </time>
    </footer>
  </blockquote>
</template>

<style lang="scss" scoped>
.app-testimonial-card {
  @apply relative w-64 md:w-80 xl:w-[21.063rem] h-60 p-4 md:p-6;
  @apply ring-1 ring-gray-200 bg-white rounded-xl;
  @apply transition-all duration-500 ease-out;
  @apply hover:ring-0 focus-within:ring-0;
  @apply hover:shadow-apw-coop-card focus-within:shadow-apw-coop-card;
  @apply hover:-translate-y-1 focus-within:-translate-y-1;
}

.app-testimonial-card > p {
  @apply font-semibold text-3.5 text-gray-900 leading-[140%] line-clamp-[7];
  &::before {
    content: "“";
    @apply font-inter text-purple-700 text-4;
  }

  &::after {
    content: "”";
    @apply font-inter text-purple-700 text-4;
  }
}

.app-testimonial-card__author {
  @apply absolute bottom-3 md:bottom-6 inset-x-3 md:inset-x-6;
  @apply grid grid-cols-[auto_1fr] gap-3 max-md:max-w-56;
  @apply items-center;
}

.app-testimonial-card__avatar {
  @apply block min-w-10 w-10 h-10 rounded-lg;
  @apply bg-gray-100 ring-1 ring-gray-100 object-cover object-center;
  @apply flex items-center justify-center;
  @apply font-bold text-gray-900 text-3 tracking-wider;
}

.app-testimonial-info__name {
  @apply font-semibold text-3 leading-[120%] line-clamp-1 mb-1;
}

.app-testimonial-info__meta {
  @apply font-semibold text-2 leading-[120%] text-gray-500 line-clamp-1;
}
</style>
