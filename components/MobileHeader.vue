<template>
  <div class="wrap" id="mobile">
    <div class="container">
      <div class="left">
        <NuxtLink :to="localePath('/')" class="brand">
          <img src="@/assets/img/logo/brand.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="right">
        <div class="num">
          <a :href="`tel:${info.nbm}`">{{ info.nbm }}</a>
        </div>
        <div
          class="burger"
          @click="menuHandle = !menuHandle"
          :class="{ x: menuHandle == true }"
        >
          <div class="stick"></div>
        </div>
      </div>
    </div>

    <div class="menu" :class="{ show: menuHandle }">
      <div class="container">
        <div class="top">
          <ul class="links">
            <li>
              <NuxtLink :to="localePath('/')">
                {{ $store.state.translations["main.layout-1"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/products')">
                {{ $store.state.translations["main.layout-2"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/about')">
                {{ $store.state.translations["main.layout-4"] }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink :to="localePath('/contacts')">
                {{ $store.state.translations["main.layout-5"] }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <div class="langs">
            <NuxtLink :to="switchLocalePath('ru')"
              ><RuFlag />
              <p>Ру</p>
            </NuxtLink>
            <NuxtLink :to="switchLocalePath('uz')"
              ><img src="@/assets/img/logo/uz.webp" class="flag" alt="" />
              <p>O'z</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RuFlag from "./SvgIcons/RuFlag.vue";
import infoApi from "@/api/info";

export default {
  components: {
    RuFlag,
  },

  data() {
    return {
      menuHandle: false,
      info: "",
    };
  },

  watch: {
    $route() {
      this.menuHandle = false;
    },
  },

  async mounted() {
    const infoData = await infoApi.getInfos(this.$axios);

    this.info = infoData.data;

    function scrollHeader() {
      const navbar = document.getElementById("mobile");
      if (this.scrollY >= 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    }
    window.addEventListener("scroll", scrollHeader);
  },
};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 99;
  padding: 12px 0;
}
.wrap.scroll {
  border-bottom: 1px solid #ebebeb;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand img {
  width: 90px;
  height: auto;
  object-fit: contain;
}
.num a {
  color: var(--Green, #009a10);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  text-decoration-line: underline;
}
.right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.stick {
  width: 30px;
  height: 2px;
  background: var(--black);
  position: relative;
  transition: 0.3s;
}
.stick::after {
  width: 30px;
  height: 2px;
  background: var(--black);
  position: absolute;
  top: 10px;
  left: 0;
  content: "";
  transition: 0.3s;
}
.stick::before {
  width: 30px;
  height: 2px;
  background: var(--black);
  position: absolute;
  top: -10px;
  left: 0;
  content: "";
}
.x .stick {
  transform: rotate(45deg);
}
.x .stick::after {
  transform: rotate(90deg);
  top: 0;
}
.x .stick::before {
  display: none;
}
.menu {
  position: fixed;
  top: 88px;
  transition: 0.4s;
  left: 0;
  transform: translateX(-100%);
  background: white;
  width: 100%;
  height: 90%;
  padding: 24px 0 44px 0;
}
.menu.show {
  transform: translateX(0%);
}
.menu .container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
}
.links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.links a {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  line-height: 150%;
  display: flex;
}
.bottom,
.top {
  width: 100%;
}
.langs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.langs a {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  line-height: 150%;
  display: flex;
  align-items: center;
  gap: 8px;
}
.langs svg,
.langs img {
  width: 32px;
  height: 24px;
  object-fit: cover;
}
.nuxt-link-exact-active {
  color: #2dbe64 !important;
}
</style>
