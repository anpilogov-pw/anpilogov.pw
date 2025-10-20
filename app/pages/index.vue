<script lang="ts" setup>
import { CONFIG } from "~/constants";

const { t } = useI18n();
const { baseUrl } = useBaseURLI18n();

useSeoMeta({
  title: t("page.index.title"),
  description: t("page.index.description"),
});

defineOgImageComponent("Frame", {
  title: t("og.index.title"),
  description: t("og.index.description"),
  theme: "#6605C6",
  colorMode: "dark",
});

useHead({
  script: [...CONFIG.script],
  link: [
    {
      rel: "canonical",
      href: `${CONFIG.siteUrl}${baseUrl.value}`,
    },
  ],
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
    <UiFloatingButton />
  </div>
</template>
