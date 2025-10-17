<template>
  <div>
    <AppHero />
    <AppDevider />
    <AppSection>
      <AppTech />
    </AppSection>
    <AppDevider />
    <AppSection id="companies" :title="$t('section.title.companies')" />
    <AppDevider />
    <AppSection id="reviews" :title="$t('section.title.reviews')" />
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
