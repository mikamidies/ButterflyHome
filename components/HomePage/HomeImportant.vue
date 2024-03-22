<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title">
        {{ $store.state.translations["main.imp-1"] }}
      </h4>
      <div class="cardo">
        <div class="left">
          <div class="item">
            <img src="@/assets/img/logo/butterfly.svg" alt="" class="icon" />
            <div>
              <h4 class="title">
                {{ $store.state.translations["main.imp-2"] }}
              </h4>
              <p class="sub">{{ $store.state.translations["main.imp-3"] }}</p>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/logo/butterfly.svg" alt="" class="icon" />
            <div>
              <h4 class="title">
                {{ $store.state.translations["main.imp-4"] }}
              </h4>
              <p class="sub">{{ $store.state.translations["main.imp-5"] }}</p>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/logo/butterfly.svg" alt="" class="icon" />
            <div>
              <h4 class="title">
                {{ $store.state.translations["main.imp-6"] }}
              </h4>
              <p class="sub">{{ $store.state.translations["main.imp-7"] }}</p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="img">
            <img src="@/assets/img/important.jpg" alt="" class="pic" />
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
  padding: 0 0 80px 0;
}
.cardo {
  border-radius: 24px;
  background: #f4f4f7;
  padding: 58px 72px;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 5fr 5fr;
}
.left {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.item {
  border-radius: 16px;
  background: var(--White, #fff);
  padding: 24px;
  max-width: 465px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.title {
  color: var(--Green, #064526);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  margin-bottom: 8px;
}
.sub {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.item:nth-child(2) {
  margin-left: 72px;
}
.item:nth-child(3) {
  margin-left: 144px;
}
.pic {
  width: 586px;
  height: 394px;
  border-radius: 24px;
  object-fit: cover;
  display: flex;
  position: relative;
  z-index: 2;
}
.right {
  display: flex;
  justify-content: flex-end;
}
.img {
  position: relative;
}
.img::after {
  width: 530px;
  height: 360px;
  border-radius: 24px;
  content: "";
  position: absolute;
  top: 10px;
  left: -48px;
  background: #e8eaee;
  transform: rotate(-12deg);
  z-index: 1;
}
@media screen and (max-width: 1024px) {
  .cardo {
    grid-template-columns: repeat(1, 1fr);
    padding: 24px;
    border-radius: 16px;
    gap: 36px;
  }
  .item {
    padding: 12px;
    display: inline-flex;
    width: fit-content;
    min-width: 250px;
  }
  .item:nth-child(2) {
    margin-left: 16px;
  }
  .item:nth-child(3) {
    margin-left: 32px;
  }
  .title {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 6px;
  }
  .sub {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .icon {
    width: 22px;
  }
  .pic {
    width: 260px;
    height: 177px;
    border-radius: 8px;
  }
  .img::after {
    width: 276px;
    height: 160px;
    border-radius: 8px;
    left: -24px;
    top: 6px;
  }
  .wrap {
    padding-bottom: 44px;
  }
}
</style>
