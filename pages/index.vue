<template>
  <div class="master">
    <HomeHero />
    <HomeAbout />
  </div>
</template>

<script>
import HomeAbout from "~/components/HomePage/HomeAbout.vue";
import HomeHero from "~/components/HomePage/HomeHero.vue";

export default {
  components: {
    HomeHero,
    HomeAbout,
  },
};
</script>

<style></style>
