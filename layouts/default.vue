<template>
  <div class="site">
    <DesktopHeader class="desktop" />
    <main>
      <nuxt />
    </main>
    <DesktopFooter />
  </div>
</template>

<script>
export default {};
</script>

<style>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
  flex: 1;
}
@media screen and (max-width: 1024px) {
  .desktop {
    display: none;
  }
}
</style>
