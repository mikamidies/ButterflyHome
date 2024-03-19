<template>
  <div class="wrap">
    <div class="container">
      <div class="left">
        <NuxtLink to="/" class="brand">
          <img src="@/assets/img/logo/brand.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="mid">
        <ul class="links">
          <li>
            <NuxtLink to="/"> Главная </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Продукты </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Услуги </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> О нас </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Контакты </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="socials">
          <a href="#">
            <TelegramIcon />
          </a>
          <a href="#">
            <WhatsappIcon />
          </a>
        </div>
        <div class="number">
          <a href="#"> +971 52 246 40 48 </a>
        </div>
        <div class="lang">
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1">
                <RuFlag />
                <p>Ру</p>
              </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px">
              <RuFlag />
              <p>Ру</p>
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

export default {
  components: {
    TelegramIcon,
    WhatsappIcon,
    RuFlag,
    ChevronDown,
    UzbFlag,
  },
};
</script>

<style scoped>
.wrap {
  padding: 12px 0;
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
}
.right {
  display: flex;
  justify-content: flex-end;
}
</style>
