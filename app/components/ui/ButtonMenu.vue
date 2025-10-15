<script lang="ts" setup>
const model = defineModel<boolean>();

const dotsClasses = computed<Record<string, boolean>>(() => {
  return {
    "!rotate-45": model.value ?? false,
  };
});

const onClick = () => {
  model.value = !model.value;
};
</script>

<template>
  <button type="button" class="apw-button-menu" @click.prevent="onClick">
    <div class="apw-dots" :class="dotsClasses">
      <div class="apw-dot apw-dot-delay_1"></div>
      <div class="apw-dot apw-dot-delay_2"></div>
      <div class="apw-dot apw-dot-delay_3"></div>
      <div class="apw-dot apw-dot-delay_4"></div>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.apw-button-menu {
  @apply max-md:block hidden w-5 h-5 p-0.5;
}

.apw-dots {
  @apply flex-1 grid grid-cols-2 grid-rows-2 place-items-center gap-1.5;
  @apply rotate-90 transition-transform duration-200 ease-out;
  @apply h-[18px] w-[18px];
}

.apw-dot {
  @apply w-1.5 h-1.5 rounded-full bg-gray-900;
  animation: bgCycle 12s linear infinite;
}

.apw-dot-delay_1 {
  animation-delay: 0s;
}
.apw-dot-delay_2 {
  animation-delay: 2s;
}
.apw-dot-delay_3 {
  animation-delay: 3s;
}
.apw-dot-delay_4 {
  animation-delay: 4s;
}

@keyframes bgCycle {
  0% {
    @apply bg-gray-900;
  }
  25% {
    @apply bg-gray-700;
  }
  50% {
    @apply bg-gray-500;
  }
  75% {
    @apply bg-gray-400;
  }
  100% {
    @apply bg-gray-900;
  }
}
</style>
