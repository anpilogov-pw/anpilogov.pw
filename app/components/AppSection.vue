<script lang="ts" setup>
type Props = {
  title?: string;
};

const props = withDefaults(defineProps<Props>(), {
  title: "",
});
</script>

<template>
  <section class="apw-section">
    <h2 v-if="props.title" class="apw-section__title">{{ props.title }}</h2>
    <div class="apw-section__body">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.apw-section {
  @apply py-6;
  @apply border-x border-gray-200;
}

.apw-section__title {
  @apply px-3 md:px-8 xl:px-[4.375rem];
  @apply font-bold text-6 md:text-8 text-gray-900 leading-[150%];
}

.apw-section__body {
}
</style>
