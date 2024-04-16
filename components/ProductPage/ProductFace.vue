<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <div class="left">
          <div class="thumb" thumbSwiper="">
            <div class="swiper thumbSwiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="thumb in product.images"
                  :key="thumb.id"
                >
                  <img :src="thumb.image" alt="" class="pic" />
                </div>
              </div>
            </div>
          </div>

          <div class="main">
            <div class="swiper mainSwiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="image in product.images"
                  :key="image.id"
                >
                  <img :src="image.image" alt="" class="pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <h4 class="title">
            {{ product.title }}
          </h4>

          <div class="specs">
            <div class="size">
              <h4>{{ $store.state.translations["inner.sizes"] }}</h4>
              <p>{{ product.size }}</p>
            </div>

            <h4>{{ $store.state.translations["inner.desc"] }}</h4>

            <div v-html="product.short_desc" class="html"></div>
          </div>

          <button @click="scrollElement('anchor')">
            <PhoneIcon />
            {{ $store.state.translations["main.contact-us"] }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import PhoneIcon from "@/components/SvgIcons/PhoneIcon.vue";

export default {
  components: {
    PhoneIcon,
  },

  props: ["product"],

  mounted() {
    console.log(this.product);

    const swiper = new Swiper(".thumbSwiper", {
      direction: "vertical",
      slidesPerView: 4,
      spaceBetween: 8,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });
    new Swiper(".mainSwiper", {
      thumbs: {
        swiper: swiper,
      },
      spaceBetween: 16,
    });
  },

  methods: {
    scrollElement(id) {
      const element = document.getElementById(id);
      const elementPosition = element.offsetTop;

      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
        top: elementPosition + 1000,
      });
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 6fr 4fr;
  min-width: 0;
  gap: 16px;
  padding: 80px 0;
}
.left {
  min-width: 0;
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 16px;
}
.title {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 48px */
  margin-bottom: 24px;
}
.specs {
  margin-bottom: 40px;
}
.specs h4 {
  color: var(--Black, #020105);
  font-size: 20px;
  font-family: var(--medium);
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  margin-bottom: 16px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 24px;
}
.html {
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  list-style: disc;
}
.html :deep(p) {
  margin-bottom: 12px;
  display: flex;
}
button {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  border-radius: 8px;
  background: var(--Green, #009a10);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.thumb,
.main {
  min-width: 0;
}
.thumbSwiper,
.mainSwiper {
  height: 576px;
}
.mainSwiper,
.mainSwiper img {
  border-radius: 24px;
  overflow: hidden;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 1px solid #ebebeb;
}
.thumbSwiper,
.thumbSwiper img,
.thumbSwiper .swiper-slide {
  border-radius: 16px;
}
:deep(.swiper-slide-thumb-active) {
  border: 2px solid #009a10;
}
.size {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.size h4 {
  margin: 0;
}
@media screen and (max-width: 1024px) {
  .left {
    gap: 8px;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    padding: 44px 0;
  }
  .thumbSwiper,
  .mainSwiper {
    height: 260px;
  }
  .mainSwiper,
  .mainSwiper img {
    border-radius: 16px;
  }
  .thumbSwiper,
  .thumbSwiper img,
  .thumbSwiper .swiper-slide {
    border-radius: 8px;
  }
  .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .specs h4 {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 8px;
  }
  ul {
    gap: 16px;
  }
  li {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .specs {
    margin-bottom: 16px;
  }
  button {
    width: 100%;
    padding: 12px 24px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    justify-content: center;
  }
}
</style>
