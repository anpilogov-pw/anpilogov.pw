<script lang="ts" setup>
const { t } = useI18n();

useSeoMeta({
  title: t("page.index.title"),
  description: t("page.index.description"),
});
</script>

<template>
  <div>
    <AppHero />
    <AppDevider />
    <AppSection>
      <AppTech />
    </AppSection>
    <AppDevider />
    <AppSection id="companies" :title="$t('section.title.companies')">
      <AppCompanies />
    </AppSection>
    <AppDevider />
    <AppSection id="testimonials" :title="$t('section.title.testimonials')">
      <AppTestimonials />
    </AppSection>
    <AppDevider />
    <AppSection id="coop" :title="$t('section.title.coop')">
      <AppCoop />
    </AppSection>
    <AppDevider />
    <AppSection :title="$t('section.title.blog')">
      <AppBlog />
    </AppSection>
    <AppDevider />
  </div>
</template>
