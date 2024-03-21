<template>
  <div class="master">
    <SiteTop />
    <ProductFace />
    <ProductDesc />
    <ProductSimilar />
    <BlueForm class="form" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form {
  padding: 88px 0;
}
@media screen and (max-width: 1024px) {
  .form {
    padding: 44px 0;
  }
}
</style>
