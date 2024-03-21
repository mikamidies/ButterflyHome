<template>
  <div class="site">
    <DesktopHeader class="desktop" />
    <MobileHeader class="mobile" />
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
.mobile {
  display: none;
}
@media screen and (max-width: 1024px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
