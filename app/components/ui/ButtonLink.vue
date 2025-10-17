<script lang="ts" setup>
import { ref } from "vue";

type Props = {
  to?: string;
  type?: "filled" | "outline";
};

const props = withDefaults(defineProps<Props>(), {
  to: "/",
  type: "filled",
});

const buttonLinkClasses = computed<Record<string, boolean>>(() => ({
  "apw-button-link_filled": props.type === "filled",
  "apw-button-link_outline": props.type === "outline",
}));

const ripplePos = ref({ top: "50%", left: "50%" });

const handleMouseMove = useThrottleFn((event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  ripplePos.value = {
    top: `${event.clientY - rect.top}px`,
    left: `${event.clientX - rect.left}px`,
  };
}, 50);
</script>

<template>
  <NuxtLinkLocale
    class="apw-button-link"
    :class="buttonLinkClasses"
    :to="props.to"
    @mousemove="handleMouseMove"
  >
    <slot></slot>
    <span class="apw-button-link__ripple" :style="ripplePos"></span>
  </NuxtLinkLocale>
</template>

<style scoped>
.apw-button-link {
  @apply relative overflow-hidden font-medium text-3 leading-[100%];
  @apply md:text-4 z-0 cursor-pointer;
  @apply rounded-lg md:rounded-xl;
  @apply py-2 md:py-3 px-3 md:px-4;
  @apply transition-colors duration-300 ease-in-out;
  letter-spacing: 0.4px;
}

.apw-button-link_outline {
  @apply bg-white ring-1 ring-gray-200 text-gray-900;
  @apply hover:bg-gray-50 focus-visible:bg-gray-50;
}

.apw-button-link_filled {
  @apply bg-gray-900 text-white;
  @apply hover:bg-gray-950 focus-visible:bg-gray-950;
}

.apw-button-link__ripple {
  @apply absolute w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2;
  z-index: -1;
  transition:
    width 0.7s ease-in-out,
    height 0.7s ease-in-out,
    opacity 0.4s ease-in-out;
}

.apw-button-link:hover .apw-button-link__ripple,
.apw-button-link:focus-visible .apw-button-link__ripple {
  @apply opacity-100 w-96 h-96;
}

.apw-button-link_filled:hover .apw-button-link__ripple,
.apw-button-link_filled:focus-visible .apw-button-link__ripple {
  background-color: rgba(255, 255, 255, 0.2);
}

.apw-button-link_outline:hover .apw-button-link__ripple,
.apw-button-link_outline:focus-visible .apw-button-link__ripple {
  background-color: rgba(0, 0, 0, 0.05);
}

.apw-button-link:active .apw-button-link__ripple {
  @apply opacity-40 duration-200;
}
</style>
