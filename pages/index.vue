<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
    <HomeOffer :categories="categories" />
    <HomeImportant />
    <BlueForm />
    <HomeProducts />
  </div>
</template>

<script>
import HomeAbout from "~/components/HomePage/HomeAbout.vue";
import HomeHero from "~/components/HomePage/HomeHero.vue";
import HomeOffer from "~/components/HomePage/HomeOffer.vue";
import HomeImportant from "@/components/HomePage/HomeImportant.vue";
import BlueForm from "~/components/BlueForm.vue";
import HomeProducts from "~/components/HomePage/HomeProducts.vue";

import categoriesApi from "@/api/categories";

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeOffer,
    HomeImportant,
    BlueForm,
    HomeProducts,
  },

  async asyncData({ $axios }) {
    const categories = await categoriesApi.getCategories($axios);

    return {
      categories,
    };
  },
};
</script>

<style></style>
