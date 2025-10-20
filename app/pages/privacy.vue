<script lang="ts" setup>
import type { Collections } from "@nuxt/content";
import type { TCollection } from "~/types/content";

const route = useRoute();
const { locale, t } = useI18n();

const collectionName = computed<keyof Collections>(() => {
  return (
    locale.value ? `privacy_${locale.value}` : "privacy_ru"
  ) as keyof Collections;
});

const { data: page } = await useAsyncData(
  route.path,
  () => queryCollection(collectionName.value).first() as Promise<TCollection>
);

useSeoMeta({
  title: t("page.privacy.title"),
  description: t("page.privacy.description"),
});

defineOgImageComponent("Frame", {
  title: t("page.privacy.title"),
  description: t("page.privacy.description"),
  theme: "#6605C6",
  colorMode: "dark",
});
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
