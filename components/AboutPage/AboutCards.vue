<template>
  <div class="wrap">
    <div class="container">
      <div class="items">
        <div class="item">
          <img src="@/assets/img/card-1.jpg" alt="" class="back" />
          <div class="content">
            <div class="brand">
              <img src="@/assets/img/logo/brand-yellow.svg" alt="" />
            </div>
            <p class="name">{{ $store.state.translations["about.card-1"] }}</p>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/img/card-2.jpg" alt="" class="back" />
          <div class="content">
            <div class="brand">
              <img src="@/assets/img/logo/brand-yellow.svg" alt="" />
            </div>
            <p class="name">{{ $store.state.translations["about.card-2"] }}</p>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/img/card-3.jpg" alt="" class="back" />
          <div class="content">
            <div class="brand">
              <img src="@/assets/img/logo/brand-yellow.svg" alt="" />
            </div>
            <p class="name">{{ $store.state.translations["about.card-3"] }}</p>
          </div>
        </div>
        <div class="item">
          <img src="@/assets/img/card-4.jpg" alt="" class="back" />
          <div class="content">
            <div class="brand">
              <img src="@/assets/img/logo/brand-yellow.svg" alt="" />
            </div>
            <p class="name">{{ $store.state.translations["about.card-4"] }}</p>
          </div>
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
  padding-bottom: 160px;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.item {
  position: relative;
  height: 520px;
  border-radius: 24px;
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
}
.item:nth-child(even) {
  justify-content: flex-end;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
}
.content {
  position: relative;
  z-index: 2;
}
.brand {
  margin-bottom: 12px;
}
.name {
  color: var(--White, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 44px;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .item {
    height: 316px;
    border-radius: 8px;
    padding: 12px;
  }
  .brand {
    margin-bottom: 8px;
  }
  .brand img {
    width: 44px;
  }
  .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
}
</style>
