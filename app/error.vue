<script setup lang="ts">
definePageMeta({
  layout: "error",
});
</script>

<template>
  <div class="error-page">
    <h1 class="error-page__title">{{ $t("error.title") }}</h1>
    <p class="error-page__subtitle">{{ $t("error.subtitle") }}</p>
    <p class="error-page__description">
      {{ $t("error.description") }}
    </p>

    <UiButtonLink to="/" type="filled" class="mt-8">
      {{ $t("error.backHome") }}
    </UiButtonLink>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  @apply flex flex-col items-center justify-center h-dvh;
  @apply text-center bg-gradient-to-t from-purple-400 via-purple-200 to-white;
  @apply text-gray-900 px-6;

  &__title {
    @apply text-[10rem] font-extrabold tracking-tight drop-shadow-lg;
  }

  &__subtitle {
    @apply text-6 font-semibold mt-4 text-balance;
  }

  &__description {
    @apply text-3 mt-2 max-w-md text-pretty;
  }
}
</style>
