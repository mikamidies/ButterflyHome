<template>
  <div class="master">
    <SiteTop />

    <HomeOffer class="categories" />
    <HomeProducts class="products" />

    <BlueForm class="form" />
  </div>
</template>

<script>
import HomeOffer from "~/components/HomePage/HomeOffer.vue";
import BlueForm from "~/components/BlueForm.vue";
import HomeProducts from "~/components/HomePage/HomeProducts.vue";
import SiteTop from "~/components/SiteTop.vue";

export default {
  components: {
    HomeOffer,
    BlueForm,
    HomeProducts,
    SiteTop,
  },
};
</script>

<style scoped>
.categories {
  padding-top: 80px;
  padding-bottom: 0;
}
.form {
  padding-bottom: 88px;
}
</style>
