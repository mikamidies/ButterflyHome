<template>
  <div class="wrap">
    <div class="container">
      <div class="desc">
        <h4 class="title">Описание</h4>
        <div class="html" v-html="product.desc"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.desc,
.care {
  max-width: 833px;
}
.title {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 2px solid #009a10;
  margin-bottom: 16px;
  display: inline-block;
}
.html {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.desc {
  margin-bottom: 32px;
}
.care h4 {
  color: var(--Black, #020105);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
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
  list-style: disc;
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
@media screen and (max-width: 1024px) {
  .html {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
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
}
</style>
