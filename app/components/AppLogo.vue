<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <template v-if="route.path === '/'">
    <span class="apw-logo">Anpilogov<span class="highlight">/PW</span></span>
  </template>
  <template v-else>
    <NuxtLinkLocale to="/" class="apw-logo">
      Anpilogov<span class="highlight">/PW</span>
    </NuxtLinkLocale>
  </template>
</template>

<style lang="scss" scoped>
.apw-logo {
  @apply font-bold text-6 text-gray-900 leading-[100%];
  @apply md:text-7;
}

.apw-logo .highlight {
  @apply text-purple-700;
}
</style>
