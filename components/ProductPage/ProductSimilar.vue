<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h4 class="section__title">
          {{ $store.state.translations["inner.similar"] }}
        </h4>
        <div class="buttons">
          <button class="prev">
            <ChevronDown />
          </button>
          <button class="next">
            <ChevronDown />
          </button>
        </div>
      </div>
      <div class="swiper similarSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in 10" :key="item.index">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import ChevronDown from "@/components/SvgIcons/ChevronDown.vue";
import ProductCard from "../ProductCard.vue";

export default {
  components: {
    ChevronDown,
    ProductCard,
  },

  mounted() {
    new Swiper(".similarSwiper", {
      spaceBetween: 8,
      slidesPerView: 2,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });
  },
};
</script>

<style scoped>
.wrap {
  padding: 80px 0 0 0;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}
.prev,
.next {
  border-radius: 50%;
  border: 1px solid #4fc87d;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.prev :deep(path),
.next :deep(path) {
  fill: #009a10;
}
.next :deep(svg) {
  transform: rotate(270deg);
}
.prev :deep(svg) {
  transform: rotate(90deg);
}
@media screen and (max-width: 1024px) {
  .wrap {
    position: relative;
    padding-top: 44px;
  }
  .header {
    margin-bottom: 24px;
  }
  .buttons {
    position: absolute;
    top: 60%;
    left: 0px;
    z-index: 9;
    width: 100%;
    justify-content: space-between;
  }
  .prev,
  .next {
    width: 32px;
    height: 32px;
  }
}
</style>
