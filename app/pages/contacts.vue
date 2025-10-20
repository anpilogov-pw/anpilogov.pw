<script lang="ts" setup>
const { t } = useI18n();

const breadcrumbs = computed(() => {
  return [
    {
      label: t("breadcrumbs.home"),
      to: `/`,
    },
    {
      label: t("breadcrumbs.contacts"),
      to: null,
    },
  ];
});

useSeoMeta({
  title: t("page.contacts.title"),
  description: t("page.contacts.description"),
});

defineOgImageComponent("Frame", {
  title: t("page.contacts.title"),
  description: t("page.contacts.description"),
  theme: "#6605C6",
  colorMode: "dark",
});

definePageMeta({
  layout: "contacts",
});
</script>

<template>
  <div id="apw-contacts">
    <AppSection class="h-dvh" title="Контакты" tag="h1">
      <AppBreadcrumbs class="apw-breadcrumbs" :items="breadcrumbs" />
      <address class="apw-contacts not-italic">
        <div class="apw-contacts__bio">
          <NuxtImg
            src="/img/profile.jpg"
            width="256"
            height="256"
            format="webp"
            preload
            fetchpriority="high"
            loading="eager"
            :alt="$t('contacts.title')"
            :placeholder="15"
            decoding="async"
          />
          <h2>{{ $t("contacts.title") }}</h2>
        </div>
        <ul class="apw-contacts-list">
          <li class="apw-contacts-list__item">
            <a
              href="https://github.com/anpilogov-pw"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="$t('contacts.aria.github')"
            >
              <IconGitHub />
              <span>{{ $t("contacts.github") }}</span>
            </a>
          </li>
          <li class="apw-contacts-list__item">
            <a
              href="https://t.me/anpilogov_artyom"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="$t('contacts.aria.telegram')"
            >
              <IconTelegram />
              <span>{{ $t("contacts.telegram") }}</span>
            </a>
          </li>
          <li class="apw-contacts-list__item">
            <a
              href="mailto:a.o.anpilogov@yandex.ru"
              :aria-label="$t('contacts.aria.email')"
            >
              <IconEmail />
              <span>a.o.anpilogov@yandex.ru</span>
            </a>
          </li>
          <li class="apw-contacts-list__item apw-contacts-list__item_home">
            <NuxtLinkLocale to="/" :aria-label="$t('contacts.aria.home')">
              <span>{{ $t("contacts.link.home") }}</span>
            </NuxtLinkLocale>
          </li>
        </ul>
      </address>
    </AppSection>
  </div>
</template>

<style lang="scss" scoped>
#apw-contacts {
  @apply relative h-dvh;
}

.apw-breadcrumbs {
  @apply px-3 md:px-8 xl:px-[4.500rem];
}

.apw-contacts {
  @apply absolute top-1/2 left-0 max-md:right-0 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2;
  @apply md:max-w-80 max-md:border-y max-md:border-gray-200 md:ring-1 md:ring-gray-200 md:rounded-xl;
  @apply p-6 mt-4 bg-white max-md:mx-px;
}

.apw-contacts__bio {
  @apply flex flex-col items-center gap-2 mb-6;

  img {
    @apply w-48 md:w-64 h-48 md:h-64 rounded-full bg-gray-100 ring-1 ring-gray-200;
  }

  h2 {
    @apply font-bold text-5 md:text-6 text-gray-900;
  }
}

.apw-contacts-list {
  @apply flex flex-col items-center gap-3;
}

.apw-contacts-list__item {
  @apply w-full;
}

.apw-contacts-list__item a {
  @apply flex items-center justify-center gap-3 w-full;
  @apply right-1 ring-gray-200 bg-gray-100;
  @apply transition-colors duration-300 ease-out;
  @apply hover:bg-gray-200 focus-visible:bg-gray-200;
  @apply px-3 py-2 rounded-lg;
  @apply font-medium text-3 md:text-3.5 text-gray-900;

  svg {
    @apply text-gray-600;
  }
}

.apw-contacts-list__item_home a {
  @apply right-0 bg-white;
  @apply hover:bg-white focus-visible:bg-white;
  @apply underline-offset-2;
  @apply hover:underline focus-visible:underline;
}
</style>
