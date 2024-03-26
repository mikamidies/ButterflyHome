<template>
  <div class="wrap" id="navbar">
    <div class="container">
      <div class="left">
        <NuxtLink :to="localePath('/')" class="brand">
          <img src="@/assets/img/logo/brand.png" alt="" />
        </NuxtLink>
      </div>
      <div class="mid">
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
            <NuxtLink :to="localePath('/about')"
              >{{ $store.state.translations["main.layout-4"] }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contacts')">
              {{ $store.state.translations["main.layout-5"] }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="socials">
          <a :href="`tel:${info.telegram}`" target="_blank" rel="nofollow">
            <TelegramIcon />
          </a>
          <a :href="`tel:${info.instagram}`" target="_blank" rel="nofollow">
            <WhatsappIcon />
          </a>
        </div>
        <div class="number">
          <a :href="`tel:${info.nbm}`">{{ info.nbm }}</a>
        </div>
        <div class="lang">
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1">
                <NuxtLink :to="switchLocalePath('ru')"
                  ><RuFlag />
                  <p>Ру</p>
                </NuxtLink>
              </a-menu-item>
              <a-menu-item key="1">
                <NuxtLink :to="switchLocalePath('uz')"
                  ><img src="@/assets/img/logo/uz.webp" class="flag" alt="" />
                  <p>O'z</p>
                </NuxtLink>
              </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px; text-transform: capitalize">
              <LangIcon />
              <p>{{ $i18n.locale }}</p>
              <ChevronDown />
            </a-button>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RuFlag from "./SvgIcons/RuFlag.vue";
import UzbFlag from "./SvgIcons/UzbFlag.vue";
import ChevronDown from "./SvgIcons/ChevronDown.vue";
import TelegramIcon from "./SvgIcons/TelegramIcon.vue";
import WhatsappIcon from "./SvgIcons/WhatsappIcon.vue";
import LangIcon from "@/components/SvgIcons/Langicon.vue";

import infoApi from "@/api/info";

export default {
  components: {
    TelegramIcon,
    WhatsappIcon,
    RuFlag,
    ChevronDown,
    UzbFlag,
    LangIcon,
  },

  data() {
    return {
      info: "",
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfos(this.$axios);

    this.info = infoData.data;

    function scrollHeader() {
      const navbar = document.getElementById("navbar");
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
  padding: 12px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 99;
  transition: 0.4s;
}
.wrap.scroll {
  padding: 4px;
  border-bottom: 1px solid #ebebeb;
}
.container {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 5fr 4fr;
}
.brand {
  display: block;
}
.mid {
  display: flex;
  justify-content: center;
}
.links {
  display: flex;
  align-items: center;
  gap: 40px;
}
.links a {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.right {
  display: flex;
  align-items: center;
  gap: 48px;
}
.socials {
  display: flex;
  align-items: center;
  gap: 16px;
}
.socials a {
  display: flex;
}
.number a {
  color: var(--Green, #009a10);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  text-decoration-line: underline;
}
.wrap :deep(.ant-btn) {
  margin-left: 0 !important;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0;
  padding: 0;
  box-shadow: none;
  color: var(--Black, #020105);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
}
.right {
  display: flex;
  justify-content: flex-end;
}
.nuxt-link-exact-active {
  color: #2dbe64 !important;
}
</style>
