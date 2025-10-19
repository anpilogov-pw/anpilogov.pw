<script lang="ts" setup>
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
</script>

<template>
  <div>
    <AppDevider />
    <AppSection :title="$t('section.title.blog')" tag="h1">
      <AppBlog :post-limit="-1" card-title-tag="h2" />
    </AppSection>
    <AppDevider />
  </div>
</template>
