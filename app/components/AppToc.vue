<script setup lang="ts">
type TocLink = {
  id: string;
  text: string;
  children?: TocLink[];
};

defineProps<{
  links?: TocLink[];
}>();
</script>

<template>
  <aside v-if="links?.length" class="apw-toc">
    <h3 class="apw-toc__title">Содержание</h3>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.id">
          <a :href="`#${link.id}`" class="apw-toc__link">
            {{ link.text }}
          </a>
          <ul v-if="link.children?.length" class="pl-4">
            <li v-for="child in link.children" :key="child.id">
              <a :href="`#${child.id}`" class="apw-toc__link">
                {{ child.text }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped lang="scss">
.apw-toc {
  @apply hidden xl:block w-full max-w-72 text-sm leading-6 sticky top-24 self-start;
}

.apw-toc__title {
  @apply font-semibold text-6 mb-3 text-gray-800;
}

.apw-toc__link {
  @apply block py-1 text-3.5 text-gray-600 transition-colors;
  @apply hover:text-purple-700 focus-visible:hover:text-purple-700;
}
</style>
