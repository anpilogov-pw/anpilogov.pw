<script lang="ts" setup>
type BreadcrumbItem = {
  label: string;
  to?: string | null;
};

type Props = {
  items: BreadcrumbItem[];
};

const props = defineProps<Props>();
</script>

<template>
  <nav class="apw-breadcrumbs" aria-label="breadcrumbs">
    <ul>
      <li v-for="(crumb, index) in props.items" :key="index">
        <template v-if="crumb.to">
          <NuxtLinkLocale :to="crumb.to">{{ crumb.label }}</NuxtLinkLocale>
        </template>
        <template v-else>
          <span>{{ crumb.label }}</span>
        </template>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.apw-breadcrumbs {
  @apply text-sm mb-4 text-gray-500 font-inter;

  ul {
    @apply flex flex-wrap gap-1 items-center;
  }

  li {
    @apply flex items-center;

    &::after {
      content: "/";
      @apply mx-1 text-gray-500;
    }

    &:last-child::after {
      content: "";
    }

    a {
      @apply text-gray-600 hover:text-purple-700 focus-visible:text-purple-700;
    }

    span {
      @apply text-gray-800 font-medium;
    }
  }
}
</style>
