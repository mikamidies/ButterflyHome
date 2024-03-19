<template>
  <div class="site">
    <DesktopHeader />
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
</style>
