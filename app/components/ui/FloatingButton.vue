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
        <aside v-if="isVisible" class="apw-floating-bar">
          <nav class="apw-floating-bar__wrapper">
            <button
              type="button"
              class="apw-floating-bar__button"
              :aria-label="t('floating.scrollTop.label')"
              :title="t('floating.scrollTop.title')"
              @click.prevent="scrollToTop"
            >
              <IconArrowFlat class="h-6 w-6" />
            </button>
            <NuxtLinkLocale
              to="/contacts"
              class="apw-floating-bar__button"
              :aria-label="t('floating.contacts.label')"
              :title="t('floating.contacts.title')"
            >
              <IconProfile class="h-6 w-6" />
            </NuxtLinkLocale>
            <button
              type="button"
              class="apw-floating-bar__button"
              :aria-label="t('floating.share.label')"
              :title="t('floating.share.title')"
              @click.prevent="onShare"
            >
              <IconShare class="h-6 w-6" />
            </button>
          </nav>
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
        </aside>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.apw-floating-bar {
  @apply fixed bottom-4 right-4 z-10;
  @apply py-3 px-2 rounded-full;
  @apply text-white font-mono text-3 font-bold leading-[100%];
  @apply shadow-apw-floating-light md:bg-gray-950 rounded-full;
}

.apw-floating-bar__wrapper {
  @apply flex flex-col items-center justify-center gap-3;
}

.apw-floating-bar__message {
  @apply fixed bottom-6 right-16 z-0;
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
  transform: translate(0, 20px);
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
