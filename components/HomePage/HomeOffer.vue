<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title title">Мы предоставляем</h4>
      <p class="sub">
        Пошив на заказ текстильной продукции Для гостиниц и дома
      </p>
      <div class="items">
        <div class="item" v-for="item in categories" :key="item.id">
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
          <p class="name">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"],

  mounted() {
    console.log(this.categories);
  },
};
</script>

<style scoped>
.wrap {
  padding-bottom: 88px;
}
.title {
  margin-bottom: 24px;
}
.sub {
  color: #7e7e90;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 32px;
}
.items {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}
.img img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #7e7e90;
}
.name {
  color: var(--Black, #020105);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  margin-top: 16px;
  display: block;
}
@media screen and (max-width: 1024px) {
  .wrap {
    overflow: hidden;
    padding-bottom: 44px;
  }
  .title {
    margin-bottom: 8px;
  }
  .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 24px;
  }
  .items {
    overflow-x: scroll;
    margin: 0 -16px;
    padding: 0 16px;
  }
  .items::-webkit-scrollbar {
    display: none;
  }

  .items {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .item {
    width: 144px;
  }
  .img img {
    width: 144px;
    height: 144px;
  }
  .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-top: 16px;
  }
}
</style>
