<template>
  <div id="apw-root">
    <AppHeader />
    <main class="container">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
html,
body {
  background-color: #f9fafb;
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
  scroll-padding: 92px;

  @media screen and (max-width: 768px) {
    scroll-padding: 60px;
  }
}
</style>
