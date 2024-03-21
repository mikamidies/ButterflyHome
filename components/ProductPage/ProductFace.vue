<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <div class="left">
          <div class="thumb" thumbSwiper="">
            <div class="swiper thumbSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/img/product-1.jpg" alt="" class="pic" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/product-2.jpg" alt="" class="pic" />
                </div>
              </div>
            </div>
          </div>

          <div class="main">
            <div class="swiper mainSwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/img/product-1.jpg" alt="" class="pic" />
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/img/product-2.jpg" alt="" class="pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <h4 class="title">
            Двуспальный комплект постельного белья с покрывалом SAREV Boleno V2
            Copper DS
          </h4>

          <div class="specs">
            <h4>Как ухаживать</h4>

            <ul>
              <li>Простыня на резинке 160*200 см + 25 см бортик – 1 шт.</li>
              <li>Наволочка 50*70 см (30 см запАх) – 1 шт.</li>
              <li>Ткань: 100% хлопок</li>
              <li>
                Страна производитель: Узбекистан *фактический вес товара может
                отличаться от заявленного ± 0,1кг
              </li>
            </ul>
          </div>

          <button>
            <PhoneIcon />
            Связаться с нами
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

  mounted() {
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
li {
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  list-style: disc;
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
  object-fit: cover;
}
.thumbSwiper,
.thumbSwiper img,
.thumbSwiper .swiper-slide {
  border-radius: 16px;
}
:deep(.swiper-slide-thumb-active) {
  border: 2px solid #009a10;
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
