<template>
  <div class="apw-tech">
    <p class="apw-tech-title">{{ $t("tech.title") }}</p>
    <div class="apw-tech-list">
      <IconVue class="apw-tech-list__item apw-tech-list__item_vue" />
      <IconReact class="apw-tech-list__item apw-tech-list__item_react" />
      <IconTypeScript class="apw-tech-list__item apw-tech-list__item_ts" />
      <IconJavaScript class="apw-tech-list__item apw-tech-list__item_js" />
      <IconWordpress
        class="apw-tech-list__item apw-tech-list__item_wordpress"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apw-tech {
  @apply px-3 md:px-8 xl:px-[4.375rem];
  @apply flex flex-col items-center justify-start gap-6;
  @apply xl:flex-row xl:justify-between;
}

.apw-tech-title {
  @apply font-medium text-3.5 leading-[130%] text-center text-gray-600 max-w-64;
  @apply xl:text-left;
}

.apw-tech-list {
  @apply flex flex-wrap items-center justify-center gap-8 text-gray-600 max-w-64;
  @apply md:max-w-full md:gap-10;
}

.apw-tech-list__item {
  @apply w-[52px] h-[52px] md:w-16 md:h-16 transition-all duration-500 ease-out;

  &:hover {
    @apply text-purple-700 scale-105;
  }
}

.apw-tech-list__item_vue {
  @apply text-inherit;

  &:hover {
    @apply text-[#41B883];
  }
}

.apw-tech-list__item_react {
  @apply text-inherit;

  &:hover {
    @apply text-[#61DAFB];
  }
}

.apw-tech-list__item_ts {
  @apply text-inherit;

  &:hover {
    @apply text-[#3178C6];
  }
}

.apw-tech-list__item_js {
  @apply text-inherit;

  &:hover {
    @apply text-[#F7DF1E];
  }
}

.apw-tech-list__item_wordpress {
  @apply text-inherit;

  &:hover {
    @apply text-[#21759B];
  }
}
</style>
