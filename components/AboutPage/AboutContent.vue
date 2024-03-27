<template>
  <div class="wrap">
    <div class="container small">
      <h4 class="title">{{ $store.state.translations["about.txt-1"] }}</h4>
      <div class="grid">
        <div class="left">
          <p class="txt">
            {{ $store.state.translations["about.txt-2"] }}
          </p>
          <p class="txt">
            {{ $store.state.translations["about.txt-3"] }}
          </p>
        </div>
        <div class="right">
          <p class="opacity">
            {{ $store.state.translations["about.txt-4"] }}
          </p>
          <div class="nums">
            <div class="item">
              <p class="num">{{ $store.state.translations["about.txt-5"] }}</p>
              <p class="sub">{{ $store.state.translations["about.txt-6"] }}</p>
            </div>
            <div class="item">
              <p class="num">{{ $store.state.translations["about.txt-7"] }}</p>
              <p class="sub">{{ $store.state.translations["about.txt-8"] }}</p>
            </div>
          </div>
          <NuxtLink :to="localePath('/products')">
            <ShopperIcon />
            {{ $store.state.translations["main.catalog"] }}
          </NuxtLink>
        </div>
      </div>
      <div class="cards">
        <div class="cardo">
          <div class="img">
            <img src="@/assets/img/logo/card-1.svg" alt="" class="icon" />
          </div>
          <p class="name">{{ $store.state.translations["about.txt-9"] }}</p>
        </div>
        <div class="cardo">
          <div class="img">
            <img src="@/assets/img/logo/card-2.svg" alt="" class="icon" />
          </div>
          <p class="name">{{ $store.state.translations["about.txt-10"] }}</p>
        </div>
        <div class="cardo">
          <div class="img">
            <img src="@/assets/img/logo/card-3.svg" alt="" class="icon" />
          </div>
          <p class="name">{{ $store.state.translations["about.txt-11"] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopperIcon from "../SvgIcons/ShopperIcon.vue";

export default {
  components: {
    ShopperIcon,
  },
};
</script>

<style scoped>
.wrap {
  padding-bottom: 104px;
}
.container.small {
  max-width: 1200px;
}
.title {
  max-width: 834px;
  margin-bottom: 32px;
  color: var(--Black, #020105);
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 61.6px */
}
.grid {
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 16px;
}
.txt {
  color: #404058;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 40px;
}
.txt:last-child {
  margin-bottom: 0;
}
.opacity {
  color: #7e7e90;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 48px;
}
.nums {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
}
.num {
  color: var(--Green, #009a10);
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.sub {
  color: #7e7e90;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
a {
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid var(--Green, #009a10);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--Green, #009a10);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  max-width: 284px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 56px;
}
.cardo {
  border-radius: 24px;
  background: #f4f4f7;
  padding: 24px 24px 64px 24px;
}
.img {
  width: 84px;
  height: 84px;
  background: white;
  border-radius: 50%;
  position: relative;
  margin-bottom: 24px;
}
.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -16px;
}
.name {
  color: var(--Green, #064526);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
@media screen and (max-width: 1024px) {
  .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    margin-bottom: 12px;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .txt {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 12px;
  }
  .opacity {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 24px;
  }
  .num {
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .sub {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .nums {
    margin-bottom: 24px;
  }
  a {
    max-width: unset;
    width: 100%;
    padding: 12px 24px;
    justify-content: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .cardo {
    border-radius: 24px;
    background: #f4f4f7;
    padding: 24px 16px 24px 24px;
  }
  .name {
    font-family: var(--medium);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .wrap {
    padding-bottom: 44px;
  }
}
</style>
