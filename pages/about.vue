<template>
  <div class="master">
    <SiteTop />
    <HomeAbout />
    <AboutCards />
    <AboutContent />
    <BlueForm class="form" />
  </div>
</template>

<script>
import SiteTop from "~/components/SiteTop.vue";
import HomeAbout from "~/components/HomePage/HomeAbout.vue";
import AboutCards from "~/components/AboutPage/AboutCards.vue";
import BlueForm from "~/components/BlueForm.vue";
import AboutContent from "~/components/AboutPage/AboutContent.vue";

export default {
  components: {
    SiteTop,
    HomeAbout,
    AboutCards,
    BlueForm,
    AboutContent,
  },
};
</script>

<style scoped>
.form {
  margin-bottom: 88px;
}
@media screen and (max-width: 1024px) {
  .form {
    margin-bottom: 44px;
  }
}
</style>
