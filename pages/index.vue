<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
    <HomeOffer />
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

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeOffer,
    HomeImportant,
    BlueForm,
    HomeProducts,
  },
};
</script>

<style></style>
