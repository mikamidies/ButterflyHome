<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="top">
          <div class="left">
            <div class="brand">
              <NuxtLink :to="localePath('/')">
                <img src="@/assets/img/logo/brand.svg" alt="" />
              </NuxtLink>
            </div>
            <div class="num">
              <a :href="`tel:${info.nbm}`">{{ info.nbm }}</a>
            </div>

            <div class="buttons">
              <NuxtLink class="white" :to="localePath('/products')">
                <ShooperIcon />
                Каталог продукций
              </NuxtLink>
              <button class="green" @click="scrollElement('anchor')">
                <PhoneIcon />
                Связаться с нами
              </button>
            </div>
          </div>
          <div class="right">
            <ul class="links">
              <li>
                <NuxtLink :to="localePath('/')"> Главная </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/products')"> Продукты </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/services')"> Услуги </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/about')"> О нас </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/contacts')"> Контакты </NuxtLink>
              </li>
            </ul>

            <div class="socials">
              <a :href="`tel:${info.telegram}`">
                <TelegramIcon />
              </a>
              <a :href="`tel:${info.instagram}`">
                <WhatsappIcon />
              </a>
            </div>
          </div>
        </div>

        <div class="bottom">
          <p>Copyright © 2024 Butterfly Home Collection</p>

          <p class="by">
            by <a href="https://ndc.uz/" target="_blank"> NDC </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShooperIcon from "@/components/SvgIcons/ShopperIcon.vue";
import PhoneIcon from "@/components/SvgIcons/PhoneIcon.vue";
import TelegramIcon from "./SvgIcons/TelegramIcon.vue";
import WhatsappIcon from "./SvgIcons/WhatsappIcon.vue";

import infoApi from "@/api/info";

export default {
  components: {
    PhoneIcon,
    ShooperIcon,
    TelegramIcon,
    WhatsappIcon,
  },

  data() {
    return {
      info: "",
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfos(this.$axios);

    this.info = infoData.data;
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
.wrap {
  padding-bottom: 72px;
}
.cardo {
  border-radius: 24px;
  background: #f4f4f7;
  padding: 48px 64px 56px 64px;
}
.top {
  display: grid;
  grid-template-columns: 6fr 4fr;
  padding-bottom: 40px;
  border-bottom: 1px solid #e8eaee;
}
.brand img {
  width: 168px;
  margin-bottom: 24px;
}
.num a {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 48px */
  margin-bottom: 44px;
  display: flex;
}
.white {
  border-radius: 8px;
  background: #009a10;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 240px;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.white :deep(path) {
  fill: white;
}
.green {
  border-radius: 8px;
  background: white;
  color: #009a10;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 227px;
}
.green :deep(path) {
  fill: #009a10;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}
.links {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  max-width: 372px;
}
.links a {
  color: var(--Black, #020105);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
.right {
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.socials {
  display: flex;
  align-items: center;
  gap: 20px;
}
.socials :deep(svg) {
  width: 28px;
  height: 28px;
}
.socials :deep(path) {
  fill: #064526;
}
.socials a {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom {
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom p {
  color: #7e7e90;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.bottom a {
  color: var(--Green, #009a10);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
a {
  display: inline-block;
}
@media screen and (max-width: 1024px) {
  .cardo {
    padding: 20px;
  }
  .top {
    grid-template-columns: repeat(1, 1fr);
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .wrap {
    padding-bottom: 44px;
  }
  .brand img {
    width: 100px;
    margin-bottom: 12px;
  }
  .num a {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 16px;
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .links {
    gap: 16px;
  }
  .links a {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .bottom {
    padding-top: 16px;
    flex-direction: column-reverse;
    gap: 8px;
    align-items: flex-start;
  }
  .bottom p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .top {
    padding-bottom: 24px;
  }
}
</style>
