<script lang="ts" setup>
import { useSchemaOrg } from "~/composables";
import { CONFIG } from "~/constants";

const schema = useSchemaOrg();
const route = useRoute();
const { locale, t } = useI18n();

const collectionName = computed<"privacy_ru" | "privacy_en">(() => {
  return locale.value ? `privacy_${locale.value}` : "privacy_ru";
});

const { data: page } = await useAsyncData(
  `privacy-${collectionName.value}`,
  () => queryCollection(collectionName.value).first()
);

useSeoMeta({
  title: t("page.privacy.title"),
  description: t("page.privacy.description"),
});

defineOgImageComponent("NuxtSeo", {
  title: String(t("og.privacy.title")),
  description: String(t("og.privacy.description")),
  ...CONFIG.ogImage.defaultTheme,
});

useHead({
  link: [
    {
      rel: "canonical",
      href: `${CONFIG.siteUrl}${route.path}`,
    },
  ],
});
schema.privacy();
</script>

<template>
  <div id="apw-privacy">
    <AppDevider />
    <AppSection class="apw-privacy">
      <div class="apw-privacy__layout">
        <article class="apw-privacy__content">
          <ContentRenderer v-if="page" :value="page" />
        </article>
        <AppToc :links="page?.body?.toc?.links" />
      </div>
    </AppSection>
    <AppDevider />
    <ClientOnly>
      <UiFloatingButton />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.apw-privacy {
  @apply px-3 md:px-8 xl:px-[4.375rem] pt-3 md:pt-6;
}

.apw-privacy__layout {
  @apply flex flex-col lg:flex-row gap-8 items-start justify-between;
}

.apw-privacy__content {
  @apply prose-sm md:prose max-w-[48rem] flex-1 m-0 prose-h1:hyphens-auto;
}
</style>
