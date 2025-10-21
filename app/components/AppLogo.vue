<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <ClientOnly>
    <template #default>
      <template v-if="route.path === '/' || route.path === '/en'">
        <span class="apw-logo"
          >Anpilogov<span class="highlight">/PW</span></span
        >
      </template>
      <template v-else>
        <NuxtLinkLocale to="/" class="apw-logo">
          Anpilogov<span class="highlight">/PW</span>
        </NuxtLinkLocale>
      </template>
    </template>

    <template #fallback>
      <span class="apw-logo">Anpilogov<span class="highlight">/PW</span></span>
    </template>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.apw-logo {
  @apply font-bold text-6 text-gray-900 leading-[100%];
  @apply md:text-7 text-nowrap;
}

.apw-logo .highlight {
  @apply text-purple-700 text-nowrap;
}
</style>
