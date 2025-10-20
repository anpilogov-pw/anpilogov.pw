<script lang="ts" setup>
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  title?: string;
  tag?: HeadingTag;
};

const props = withDefaults(defineProps<Props>(), {
  title: "",
  tag: "h2",
});
</script>

<template>
  <section class="apw-section">
    <component :is="props.tag" v-if="props.title" class="apw-section__title">
      {{ props.title }}
    </component>

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
</style>
