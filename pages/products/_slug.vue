<template>
  <div class="master">
    <SiteTop />
    <ProductFace :product="product" />
    <ProductDesc :product="product" />
    <!-- <ProductSimilar /> -->
    <BlueForm class="form" />
  </div>
</template>

<script>
import productsApi from "~/api/products";

export default {
  async asyncData({ $axios, params, query, i18n }) {
    const product = await productsApi.getProduct(params.slug, $axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      product,
    };
  },
};
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
