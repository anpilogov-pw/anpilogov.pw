<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { y } = useScroll(window);

const showMessage = ref<boolean>(false);

const progress = computed<number>(() => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return Math.min(100, Math.max(0, (y.value / max) * 100));
});

const isVisible = computed<boolean>(() => {
  return progress.value > 5 && progress.value < 95;
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const onShare = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        text: t("floating.share.title"),
        url: window.location.href,
      });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      if (!showMessage.value) {
        showMessage.value = true;
        const timer = setTimeout(() => {
          showMessage.value = false;
          clearTimeout(timer);
        }, 3000);
      }
    }
  } catch (error) {
    console.warn(t("floating.share.error"), error);
  }
};
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="slide-up">
        <div
          v-if="isVisible"
          class="apw-floating-bar"
          role="region"
          :aria-label="t('floating.region.label')"
          :style="{ '--progress': (progress + 5).toFixed(0) }"
        >
          <button
            type="button"
            class="apw-floating-bar__button"
            :aria-label="t('floating.share.label')"
            :title="t('floating.share.title')"
            @click.prevent="onShare"
          >
            <IconShare class="h-6 w-6" />
          </button>

          <span
            class="apw-floating-bar__progress"
            role="progressbar"
            :aria-valuenow="progress.toFixed(0)"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-label="t('floating.progress.label')"
          >
            {{ progress.toFixed(0) }}%
          </span>

          <button
            type="button"
            class="apw-floating-bar__button"
            :aria-label="t('floating.scrollTop.label')"
            :title="t('floating.scrollTop.title')"
            @click.prevent="scrollToTop"
          >
            <IconArrowFlat class="h-6 w-6" />
          </button>

          <Transition name="slide-up">
            <div
              v-if="showMessage"
              class="apw-floating-bar__message"
              role="status"
              aria-live="polite"
            >
              <span>{{ $t("floating.message.copy") }}!</span>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.apw-floating-bar {
  @apply fixed bottom-4 left-1/2 -translate-x-1/2 z-10;
  @apply px-3 py-1 rounded-full;
  @apply flex items-center justify-center gap-3;
  @apply text-white font-mono text-3 font-bold leading-[100%];
  @apply shadow-apw-floating;
  --progress: 45;
}

.apw-floating-bar::before {
  content: "";
  @apply absolute -inset-[3px] -z-[2] rounded-full transition-colors duration-300 ease-out;
  background: conic-gradient(
    rgba(126, 34, 206, 1) calc(var(--progress) * 1%),
    rgba(126, 34, 206, 0.1) 0
  );
}

.apw-floating-bar::after {
  content: "";
  @apply absolute inset-0 -z-[1];
  @apply bg-gray-950 rounded-full;
}

.apw-floating-bar__progress {
  @apply min-w-8 text-center;
}

.apw-floating-bar__message {
  @apply fixed bottom-10 left-1/2 -translate-x-1/2 z-0;
  @apply bg-gray-950 rounded-full;
  @apply px-3 py-1 min-w-20;
  span {
    @apply text-nowrap;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
