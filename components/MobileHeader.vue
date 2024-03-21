<template>
  <div class="wrap" id="mobile">
    <div class="container">
      <div class="left">
        <NuxtLink to="/" class="brand">
          <img src="@/assets/img/logo/brand.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="right">
        <div class="num">
          <a href="+971 52 246 40 48">+971 52 246 40 48</a>
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
              <NuxtLink to="/"> Главная </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products"> Продукты </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"> О нас </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacts"> Контакты </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <div class="langs">
            <button>Русский</button>
            <button>O'zbekcha</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuHandle: false,
    };
  },

  watch: {
    $route() {
      this.menuHandle = false;
    },
  },

  mounted() {
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
.langs button {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  line-height: 150%;
  display: flex;
}
.nuxt-link-exact-active {
  color: #2dbe64 !important;
}
</style>
