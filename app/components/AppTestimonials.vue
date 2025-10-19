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
  <div ref="emblaRef" class="embla">
    <ul class="apw-testimonials embla__container" aria-label="Отзывы клиентов">
      <li
        v-for="post in posts"
        :key="post.id"
        class="apw-testimonial embla__slide"
      >
        <UiTestimonialCard :post="post" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
