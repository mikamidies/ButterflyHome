<template>
  <div class="wrapper">
    <NuxtLink :to="localePath(`/products/${item.slug}`)">
      <div class="img">
        <img :src="item.image?.image" alt="" />
      </div>
      <div class="content">
        <p class="name">{{ item.title }}</p>
        <div class="size">
          <span>{{ $store.state.translations["inner.sizes"] }}</span>
          <p>{{ item.size }}</p>
        </div>
        <div class="link">
          {{ $store.state.translations["inner.see"] }} <RightArrow />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import RightArrow from "@/components/SvgIcons/RightArrow.vue";

export default {
  components: {
    RightArrow,
  },

  props: ["item"],

  mounted() {},
};
</script>

<style scoped>
.wrapper {
  height: 416px;
  border-radius: 24px;
  border: 1px solid #eff0f3;
  overflow: hidden;
  background: lightgray 49.726px -25.207px / 71.422% 79.617% no-repeat,
    linear-gradient(135deg, #f4f4f7 -10.1%, #e8eaee 96.98%),
    linear-gradient(157deg, #90df98 14.82%, #6ddb79 112.26%);
}
.img {
  height: 60%;
  background: linear-gradient(135deg, #f4f4f7 -10.1%, #e8eaee 96.98%),
    linear-gradient(157deg, #90df98 14.82%, #6ddb79 112.26%);
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.content {
  border-radius: 24px;
  background: var(--White, #fff);
  margin-top: -20px;
  z-index: 2;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45%;
}
.name {
  color: var(--Black, #020105);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
}
.size {
  display: flex;
  align-items: center;
  gap: 8px;
}
.size span {
  color: #7e7e90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.size p {
  color: var(--Black, #020105);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.link {
  color: var(--Green, #009a10);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  display: flex;
  align-items: center;
  gap: 8px;
}
@media screen and (max-width: 1024px) {
  .wrapper {
    height: 270px;
    border-radius: 12px;
  }
  .content {
    padding: 12px;
    border-radius: 12px;
  }
  .name {
    font-size: 13px;
    font-family: var(--medium);
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .size {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .size span {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .size p {
    font-family: var(--medium);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .link {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
}
</style>
