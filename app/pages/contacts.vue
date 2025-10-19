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
  title: t("page.contacts.title"),
  description: t("page.contacts.description"),
});
</script>

<template>
  <div id="apw-contacts">
    <AppDevider />
    <AppSection :title="$t('section.title.blog')" tag="h1" />
    <AppDevider />
  </div>
</template>
