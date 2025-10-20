<script lang="ts" setup>
import { CONFIG } from "~/constants";

const route = useRoute();
const { t } = useI18n();

const breadcrumbs = computed(() => {
  return [
    {
      label: t("breadcrumbs.home"),
      to: `/`,
    },
    {
      label: t("breadcrumbs.blog"),
      to: null,
    },
  ];
});

useSeoMeta({
  title: t("page.blog.title"),
  description: t("page.blog.description"),
});

defineOgImageComponent("Frame", {
  title: t("og.blog.title"),
  description: t("og.blog.description"),
  theme: "#6605C6",
  colorMode: "dark",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: `${CONFIG.siteUrl}${route.path}`,
    },
  ],
});
</script>

<template>
  <div>
    <AppDevider />
    <AppSection :title="$t('section.title.blog')" tag="h1">
      <AppBreadcrumbs class="apw-breadcrumbs" :items="breadcrumbs" />
      <AppBlog :post-limit="-1" card-title-tag="h2" />
    </AppSection>
    <AppDevider />
  </div>
</template>

<style lang="scss" scoped>
.apw-breadcrumbs {
  @apply px-3 md:px-8 xl:px-[4.500rem];
}
</style>
