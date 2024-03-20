<template>
  <div class="wrap">
    <div class="container">
      <div class="relative">
        <div class="back">
          <img src="@/assets/img/hero.png" alt="" />
        </div>
        <div class="back-mobile">
          <img src="@/assets/img/hero-mobile.png" alt="" />
        </div>

        <div class="content">
          <h4 class="title">Производитель текстиля для гостиниц и дома</h4>

          <div class="buttons">
            <button class="white">
              <ShooperIcon />
              Каталог продукций
            </button>
            <button class="green">
              <PhoneIcon />
              Связаться с нами
            </button>
          </div>

          <p class="sub">Мы рады видеть вас в числе партнеров!</p>
        </div>
      </div>

      <div class="mobile__buttons">
        <button class="mobile__white">
          <ShooperIcon />
          Каталог продукций
        </button>
        <button class="mobile__green">
          <PhoneIcon />
          Связаться с нами
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ShooperIcon from "@/components/SvgIcons/ShopperIcon.vue";
import PhoneIcon from "@/components/SvgIcons/PhoneIcon.vue";

export default {
  components: {
    PhoneIcon,
    ShooperIcon,
  },
};
</script>

<style scoped>
.wrap {
  padding-top: 140px;
}
.container {
  height: 620px !important;
}
.relative {
  position: relative;
  height: 100%;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.back img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.content {
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding-left: 64px;
}
.title {
  color: var(--White, #fff);
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 70.4px */
  margin-bottom: 90px;
}
.white {
  border-radius: 8px;
  background: var(--White, #fff);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 240px;
  color: var(--Green, #009a10);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.green {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.24);
  color: var(--White, #fff);
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
.buttons {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}
.sub {
  color: var(--White, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.back-mobile {
  display: none;
}
@media screen and (max-width: 1024px) {
  .back {
    display: none;
  }
  .back-mobile {
    display: block;
  }
  .content {
    padding-left: 20px;
    max-width: 60%;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 0;
  }
  .container {
    height: auto !important;
  }
  .back-mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .buttons {
    display: none;
  }
  .sub {
    display: none;
  }
  .relative {
    height: 208px;
  }
  .back-mobile img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .mobile__buttons {
    display: grid;
    gap: 8px;
    grid-template-columns: 5fr 5fr;
    margin-top: 12px;
  }
  .mobile__white {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    background: var(--Green, #064526);
    color: var(--White, #fff);
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    white-space: nowrap;
  }
  .mobile__green {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    background: var(--grey-8, #ebebeb);
    color: var(--grey-64, #5d5d5f);
    white-space: nowrap;
  }
  .mobile__green :deep(path) {
    fill: #5d5d5f;
  }
}
</style>
