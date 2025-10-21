<script lang="ts" setup>
import emblaCarouselVue from "embla-carousel-vue";
import type { TCompaniesPost } from "~/types/content";

const { locale } = useI18n();

const collectionName = computed<"companies_ru" | "companies_en">(() => {
  return locale.value ? `companies_${locale.value}` : "companies_ru";
});

const { data: posts } = await useAsyncData(
  `companies-${collectionName.value}`,
  () => {
    return queryCollection(collectionName.value)
      .where("draft", "=", false)
      .order("date", "DESC")
      .all() as Promise<TCompaniesPost[]>;
  }
);

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: false,
  align: "start",
});

const {
  prevBtnDisabled,
  nextBtnDisabled,
  onPrevButtonClick,
  onNextButtonClick,
} = usePrevNextButtons(emblaApi);
</script>

<template>
  <div class="apw-companies">
    <div ref="emblaRef" class="embla">
      <ul
        class="apw-company-list embla__container"
        aria-label="Отзывы клиентов"
      >
        <li
          v-for="(post, index) in posts"
          :key="`company-${index}-${post.id}`"
          class="apw-company-list__item embla__slide"
        >
          <UiCompanyCard v-if="post" :post="post" />
        </li>
      </ul>
    </div>
    <nav class="apw-embla-nav">
      <button
        type="button"
        class="apw-embla-button apw-embla-button_prev"
        :disabled="prevBtnDisabled"
        :aria-label="$t('companies.button.prev')"
        @click="onPrevButtonClick"
      >
        <IconArrow class="apw-embla-button__arrow rotate-180" />
      </button>
      <button
        type="button"
        class="apw-embla-button apw-embla-button_next"
        :disabled="nextBtnDisabled"
        :aria-label="$t('companies.button.next')"
        @click="onNextButtonClick"
      >
        <IconArrow class="apw-embla-button__arrow" />
      </button>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.apw-companies {
  @apply relative;
}

.embla {
  @apply relative overflow-hidden;
  @apply px-3 md:px-8 xl:px-[4.375rem];
  @apply pt-3 md:pt-6 pb-2;
}

.embla__container {
  @apply flex gap-3 md:gap-6;
}

.embla__slide {
  @apply flex-[0_0_16rem] md:flex-[0_0_20rem] xl:flex-[0_0_21.063rem] min-w-0;

  &:last-child {
    @apply mr-3 md:mr-6;
  }
}

.apw-embla-nav {
  @apply absolute -top-7 md:-top-10;
  @apply right-3 md:right-8 xl:right-[4.375rem];
  @apply flex items-center gap-4 md:gap-6;
}

.apw-embla-button__arrow {
  @apply h-6 w-6 md:h-8 md:w-8;
}
</style>
