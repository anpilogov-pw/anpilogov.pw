<script lang="ts" setup>
type Props = {
  index: number;
  title: string;
  description: string;
  cover: string;
};

const props = defineProps<Props>();
</script>

<template>
  <article class="apw-coop-card">
    <header class="apw-coop-card__header">
      <span>{{ (props.index + 1).toString().padStart(2, "0") }}</span>
      <NuxtLinkLocale
        to="/contacts"
        :aria-label="`${$t('coop.link.aria')} ${props.title}`"
      >
        {{ $t("coop.link.title") }} ↗
      </NuxtLinkLocale>
    </header>
    <div class="apw-coop-card__hgroup">
      <h3>{{ props.title }}</h3>
      <p>{{ props.description }}</p>
    </div>
    <figure class="apw-coop-card__figure" aria-hidden="true">
      <NuxtImg
        :src="props.cover"
        width="337"
        height="264"
        loading="lazy"
        decoding="async"
      />
    </figure>
  </article>
</template>

<style lang="scss" scoped>
.apw-coop-card {
  scroll-snap-align: start;
  @apply relative bg-white rounded-xl p-4 md:p-6 shadow-apw-coop-card;
  @apply h-full w-full md:w-80 xl:w-full xl:max-w-96;
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
