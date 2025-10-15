<template>
  <div class="container apw-devider" aria-hidden="true">
    <IconCrost />
    <IconCrost />
  </div>
</template>

<style>
.apw-devider {
  @apply flex items-center justify-between;
}

.apw-devider::before {
  content: "";
  @apply absolute inset-x-0;
  @apply h-[1px] bg-gray-200 z-0;
}

.apw-devider svg {
  @apply bg-gray-50 text-gray-400 z-10;
}

.apw-devider svg:first-child {
  @apply -translate-x-1/2;
}

.apw-devider svg:last-child {
  @apply translate-x-1/2;
}
</style>
