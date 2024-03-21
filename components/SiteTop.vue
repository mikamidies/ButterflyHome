<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <img src="@/assets/img/top.png" alt="" class="back" />
        <div class="content">
          <ol class="crumbs">
            <li>
              <NuxtLink to="/"> Home </NuxtLink>
            </li>
            \
            <li>
              <p>Продукты</p>
            </li>
          </ol>
          <h1 class="title">Продукты</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  padding-top: 140px;
}
.cardo {
  position: relative;
  height: 200px;
  border-radius: 24px;
  overflow: hidden;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.content {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  justify-content: center;
  height: 100%;
  padding-left: 66px;
}
.crumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  margin-bottom: 8px;
}
.crumbs a,
.crumbs p {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.title {
  color: var(--White, #fff);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-top: 104px;
  }
  .cardo {
    height: auto;
  }
  .content {
    padding: 24px;
  }
  .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .crumbs a,
  .crumbs p {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
}
</style>
