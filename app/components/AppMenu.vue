<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const isMenuOpen = ref<boolean>(false);
const navClasses = computed<Record<string, boolean>>(() => {
  return {
    "apw-nav_open": isMenuOpen.value,
  };
});

let isLocked: ReturnType<typeof useScrollLock> | null = null;

onMounted(() => {
  isLocked = useScrollLock(document.body);
  watch(isMenuOpen, (open) => {
    if (isLocked) isLocked.value = open;
  });
});

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  }
);
</script>

<template>
  <div class="apw-menu">
    <UiButtonMenu v-model="isMenuOpen" />
    <AppNav :show-mobile-menu="isMenuOpen" />
  </div>
</template>

<style lang="scss" src="">
.apw-menu {
  @apply flex items-center;
}
</style>
