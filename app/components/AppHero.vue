<template>
  <section class="container apw-hero">
    <div class="apw-hero__container">
      <div class="apw-hero__content">
        <h1 class="apw-hero__title">
          {{ $t("hero.title") }} — <br />
          <span class="highlight">{{ $t("hero.title.highlight") }}</span>
        </h1>
        <p class="apw-hero__text">{{ $t("hero.text") }}</p>
        <div class="apw-hero__actions">
          <UiButtonLink to="#companies">
            {{ $t("hero.action.companies") }}
          </UiButtonLink>
          <UiButtonLink to="#reviews" type="outline">
            {{ $t("hero.action.reviews") }}
          </UiButtonLink>
        </div>
      </div>
      <NuxtImg
        class="apw-hero__image"
        src="/img/hero-desktop.jpg"
        :alt="$t('hero.img.alt')"
        :placeholder="15"
        format="webp"
        decoding="async"
        preload
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.apw-hero {
  @apply px-1.5 py-4 md:px-3 xl:py-3;
  @apply border-x border-gray-200;
}

.apw-hero__container {
  @apply grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-[1fr_auto] md:gap-5;
  @apply bg-white rounded-xl shadow-apw-hero;
}

.apw-hero__content {
  @apply px-3 py-6 md:px-5 md:py-11 xl:px-14 xl:py-20;
}

.apw-hero__title {
  @apply font-extrabold text-5 leading-[130%] text-gray-900;
  @apply md:text-8 xl:text-10 mb-5 md:mb-8 xl:mb-6;
}

.apw-hero__title .highlight {
  background: linear-gradient(90deg, #7e22ce 0%, #5d3ca8 50%, #3d578d 100%);
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-flow 4s ease infinite;
  will-change: background-position;
}

@keyframes gradient-flow {
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
}

.apw-hero__text {
  @apply font-normal text-3 leading-[150%] text-gray-900;
  @apply md:text-4 xl:text-4.5;
  @apply mb-5 md:mb-8 xl:mb-6 max-w-[625px];
}

.apw-hero__actions {
  @apply flex flex-row items-center gap-3;
}

.apw-hero__image {
  @apply block row-start-1 row-end-1;
  @apply md:col-start-2 md:col-end-3;
  @apply w-full h-[320px] rounded-t-xl md:rounded-t-none;
  @apply md:rounded-r-xl overflow-hidden;
  @apply md:w-[282px] md:h-full xl:w-[380px];
  @apply object-cover object-[0_20%] md:object-center;
}
</style>
