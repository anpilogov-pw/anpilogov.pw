<script lang="ts" setup>
import emblaCarouselVue from "embla-carousel-vue";
import AutoScroll from "embla-carousel-auto-scroll";
import type { TTestimonialPost } from "~/types/content";

const { data: posts } = useLocalizedCollection<TTestimonialPost[]>(
  "testimonial",
  "date",
  -1
);

const [emblaRef] = emblaCarouselVue(
  {
    loop: true,
    align: "start",
  },
  [
    AutoScroll({
      speed: 1,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    }),
  ]
);
</script>

<template>
  <div class="apw-testimonials">
    <div ref="emblaRef" class="embla">
      <ul
        class="apw-testimonial-list embla__container"
        aria-label="Отзывы клиентов"
      >
        <li
          v-for="post in posts"
          :key="post.id"
          class="apw-testimonial-list__item embla__slide"
        >
          <UiTestimonialCard :post="post" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apw-testimonials {
  @apply relative;
}

.embla {
  @apply overflow-hidden;
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
  @apply md:hidden;
}

.apw-embla-button__arrow {
  @apply h-6 w-6 md:h-8 md:w-8;
}
</style>
