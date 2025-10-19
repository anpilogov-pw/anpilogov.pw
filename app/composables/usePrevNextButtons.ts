import { ref, watch, onBeforeUnmount } from "vue";
import type { Ref } from "vue";
import type { EmblaCarouselType } from "embla-carousel";

export function usePrevNextButtons(
  emblaApi: Ref<EmblaCarouselType | undefined>
) {
  const prevBtnDisabled = ref(true);
  const nextBtnDisabled = ref(true);

  const onPrevButtonClick = () => {
    const embla = emblaApi.value;
    if (!embla) return;
    embla.scrollPrev();
  };

  const onNextButtonClick = () => {
    const embla = emblaApi.value;
    if (!embla) return;
    embla.scrollNext();
  };

  const onSelect = (embla: EmblaCarouselType) => {
    prevBtnDisabled.value = !embla.canScrollPrev();
    nextBtnDisabled.value = !embla.canScrollNext();
  };

  const setupEmblaListeners = (embla: EmblaCarouselType) => {
    onSelect(embla);
    embla.on("reInit", onSelect);
    embla.on("select", onSelect);
  };

  const cleanupEmblaListeners = (embla: EmblaCarouselType) => {
    embla.off("reInit", onSelect);
    embla.off("select", onSelect);
  };

  watch(
    emblaApi,
    (newEmbla, oldEmbla) => {
      if (oldEmbla) cleanupEmblaListeners(oldEmbla);
      if (newEmbla) setupEmblaListeners(newEmbla);
    },
    { immediate: true }
  );

  onBeforeUnmount(() => {
    if (emblaApi.value) cleanupEmblaListeners(emblaApi.value);
  });

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
}
